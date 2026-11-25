(() => {
  // Quote carousel: auto-advance, manual controls, pausable, off under reduced motion.
  const data = document.getElementById('quotes-data');
  const slot = document.getElementById('quote-slot');
  const dots = document.getElementById('q-dots');
  const pauseBtn = document.getElementById('q-pause');
  if (data && slot && dots && pauseBtn) {
    const quotes = JSON.parse(data.textContent);
    quotes.forEach(() => dots.appendChild(document.createElement('span')));
    let i = 0, timer = null;
    const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
    const render = () => {
      slot.innerHTML = '';
      const f = document.createElement('figure');
      const bq = document.createElement('blockquote'); bq.textContent = '“' + quotes[i].quote + '”';
      const fc = document.createElement('figcaption'); fc.textContent = quotes[i].source || '';
      f.append(bq, fc); slot.appendChild(f);
      [...dots.children].forEach((d, k) => d.setAttribute('aria-current', k === i));
    };
    const go = d => { i = (i + d + quotes.length) % quotes.length; render(); };
    const stop = () => { clearInterval(timer); timer = null; pauseBtn.textContent = 'Play'; };
    const play = () => { stop(); timer = setInterval(() => go(1), 8000); pauseBtn.textContent = 'Pause'; };
    document.getElementById('q-prev').onclick = () => { go(-1); if (timer) play(); };
    document.getElementById('q-next').onclick = () => { go(1); if (timer) play(); };
    pauseBtn.onclick = () => timer ? stop() : play();
    render(); reduce ? stop() : play();
  }

  // Video tiles: click to play inline (no autoplay before the click).
  document.querySelectorAll('a[data-yt]').forEach(a => a.addEventListener('click', e => {
    e.preventDefault();
    const box = document.createElement('div');
    box.className = a.className;
    const f = document.createElement('iframe');
    f.src = 'https://www.youtube-nocookie.com/embed/' + a.dataset.yt + '?autoplay=1&rel=0';
    f.title = a.querySelector('.ov b').textContent + ' (YouTube video)';
    f.allow = 'autoplay; encrypted-media; picture-in-picture; fullscreen';
    f.allowFullscreen = true;
    box.appendChild(f);
    a.replaceWith(box);
    f.focus();
  }));
})();
