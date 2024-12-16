document.addEventListener('click', (e) => {
  let target;

  if (target = e.target.closest('[data-gallery]')) {
    document.querySelector(`#gallery-${target.dataset.gallery} img`).click();
  } else if (target = e.target.closest('[data-copy]')) {
    navigator.clipboard.writeText(target.dataset.copy).then(() => {
      target.classList.add('copied');
      setTimeout(() => {
        target.classList.remove('copied');
      }, 2000);
    });
  } else if (target = e.target.closest('[data-copy-code]')) {
    const text = target.closest('.highlighter-rouge').querySelector('code').innerText;

    navigator.clipboard.writeText(text).then(() => {
      target.children[1].classList.remove('opacity-0');
      setTimeout(() => {
        target.children[1].classList.add('opacity-0');
      }, 2000);
    });
  }
});

window.addEventListener('pagehide', function () {
  localStorage.setItem('breeze-scroll-top', document.querySelector('[data-preserve-scroll]')?.scrollTop);
});

document.addEventListener('DOMContentLoaded', () => {
  if (!document.querySelector('body.no-anchors')) {
    anchors.add('.prose h2:not(.subtitle), .prose h3:not(.subtitle), .prose h4, .prose h5');
  }

  if (document.getElementById('markdown-toc')) {
    new Gumshoe('#markdown-toc a', {
      offset: 40
    });
  }

  if (typeof docsearch !== 'undefined' && document.querySelector('[data-search]')) {
    docsearch({
      appId: 'VRK4XXKQ3E',
      apiKey: '0acb0c8bc253a1c4f264abdbb8cc0fb5',
      indexName: 'breezefront',
      container: '[data-search]'
    });
  }

  document.querySelectorAll('div.highlighter-rouge:not(.nocopy)').forEach(div => {
    div.classList.add('group');
    div.insertAdjacentHTML('beforeend', `
      <button data-copy-code class="copy absolute top-2 right-2 text-white opacity-0 h-6 w-6 group-hover:opacity-30 focus-visible:opacity-30 outline-white">
        <svg xmlns="http://www.w3.org/2000/svg" class="absolute left-0 top-0 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" class="absolute left-0 top-0 h-6 w-6 opacity-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
      </button>
    `);
  })
});
