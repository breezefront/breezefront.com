var spy = false,
  scrollTop = 0;

// https://stackoverflow.com/a/22841712
(function() {
  window._addEventListener = window.addEventListener;
  window.addEventListener = function(a,b,c) {
    this._addEventListener(a,b,c);
    if(!this.eventListenerList) this.eventListenerList = {};
    if(!this.eventListenerList[a]) this.eventListenerList[a] = [];
    this.eventListenerList[a].push(b);
  };
})();

addEventListener("turbolinks:before-render", function () {
  if (document.querySelector('[data-preserve-scroll]')) {
    scrollTop = document.querySelector('[data-preserve-scroll]').scrollTop;
  }
});

document.addEventListener('turbolinks:render', () => {
  if (document.querySelector('[data-preserve-scroll]')) {
    document.querySelector('[data-preserve-scroll]').scrollTop = scrollTop;
  }

  if (!spy || !document.getElementById('markdown-toc')) {
    return;
  }

  document.querySelectorAll('#markdown-toc li.active').forEach(function (li) {
    li.classList.remove('active');
  });

  spy.setup();
  spy.detect();
});

document.addEventListener('turbolinks:load', () => {
  if (!document.querySelector('body.no-anchors')) {
    anchors.add('.prose h2:not(.subtitle), .prose h3:not(.subtitle), .prose h4, .prose h5');
  }

  if (!spy && document.getElementById('markdown-toc')) {
    spy = new Gumshoe('#markdown-toc a', {
      offset: 40
    });
  }

  // fix not working click on anchor after back button
  if (window.location.hash && document.querySelector(window.location.hash)) {
    document.querySelector(window.location.hash).scrollIntoView();
  }

  if (typeof docsearch !== 'undefined' && document.querySelector('[data-search]')) {
    (window.eventListenerList.keydown || []).forEach(fn => {
      window.removeEventListener('keydown', fn);
    });

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

document.addEventListener('click', (e) => {
  let target;

  if (target = e.target.closest('[data-gallery]')) {
    document.querySelector(`#gallery-${target.dataset.gallery} img`).click();
  }

  if (target = e.target.closest('[data-copy]')) {
    navigator.clipboard.writeText(target.dataset.copy).then(() => {
      target.classList.add('copied');
      setTimeout(() => {
        target.classList.remove('copied');
      }, 2000);
    });
  }

  if (target = e.target.closest('[data-copy-code]')) {
    const text = target.closest('.highlighter-rouge').querySelector('code').innerText;

    navigator.clipboard.writeText(text).then(() => {
      target.children[1].classList.remove('opacity-0');
      setTimeout(() => {
        target.children[1].classList.add('opacity-0');
      }, 2000);
    });
  }
});

document.addEventListener("DOMContentLoaded", () => {
  Turbolinks.start();

  // Fixed jumping content on 404 page. Taken from https://github.com/turbolinks/turbolinks/issues/179
  Turbolinks.HttpRequest.prototype.requestLoaded = function () {
    return this.endRequest(function () {
      var code = this.xhr.status;

      if (200 <= code && code < 300 || code === 403 || code === 404 || code === 500) {
        this.delegate.requestCompletedWithResponse(
          this.xhr.responseText,
          this.xhr.getResponseHeader("Turbolinks-Location")
        );
      } else {
        this.failed = true;
        this.delegate.requestFailedWithStatusCode(code, this.xhr.responseText);
      }
    }.bind(this));
  };
});
