import yaml from "js-yaml";

const esc = (s) => String(s ?? "")
  .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

export default function (eleventyConfig) {
  eleventyConfig.setNunjucksEnvironmentOptions({ autoescape: true });
  eleventyConfig.addDataExtension("yml,yaml", (contents) => yaml.load(contents));
  eleventyConfig.addPassthroughCopy("src/img");
  eleventyConfig.addPassthroughCopy("src/styles.css");
  eleventyConfig.addPassthroughCopy("src/site.js");

  // Blank-line-separated plain text -> escaped <p> paragraphs.
  eleventyConfig.addFilter("paragraphs", (text) =>
    String(text ?? "").trim().split(/\n\s*\n/).filter(Boolean)
      .map((p) => `<p>${esc(p.trim()).replace(/\n/g, "<br>")}</p>`).join("\n"));

  // YouTube URL (watch, youtu.be, shorts, embed) or bare ID -> video ID.
  eleventyConfig.addFilter("ytid", (url) => {
    const s = String(url ?? "").trim();
    const m = s.match(/(?:v=|youtu\.be\/|shorts\/|embed\/)([\w-]{11})/);
    return m ? m[1] : s;
  });

  // Productions: upcoming first (soonest first), then the most recent past one.
  eleventyConfig.addFilter("homeProductions", (productions) => {
    const all = Object.values(productions ?? {});
    const t = (p) => (p.date ? new Date(p.date).getTime() : Infinity);
    const upcoming = all.filter((p) => p.status === "Upcoming").sort((a, b) => t(a) - t(b));
    const past = all.filter((p) => p.status !== "Upcoming").sort((a, b) => t(b) - t(a));
    return [...upcoming, ...past.slice(0, 1)];
  });

  eleventyConfig.addFilter("year", () => new Date().getFullYear());

  return { dir: { input: "src", output: "_site" } };
}
