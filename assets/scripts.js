var spy = false,
  scrollTop = 0;

addEventListener("turbolinks:before-render", function () {
  if (document.querySelector('aside')) {
    scrollTop = document.querySelector('aside').scrollTop;
  }
});

document.addEventListener('turbolinks:render', () => {
  if (document.querySelector('aside')) {
    document.querySelector('aside').scrollTop = scrollTop;
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
  anchors.add('.prose h2:not(.subtitle), .prose h3:not(.subtitle), .prose h4, .prose h5');

  if (!spy && document.getElementById('markdown-toc')) {
    spy = new Gumshoe('#markdown-toc a', {
      offset: 40
    });
  }

  // if (typeof lightGallery !== 'undefined') {
  //   lightGallery(document.getElementById('main'), {
  //       // plugins: [lgZoom, lgThumbnail],
  //       // licenseKey: 'your_license_key'
  //       speed: 500,
  //       ... other settings
  //   });
  // }

  // fix not working click on anchor after back button
  if (window.location.hash && document.querySelector(window.location.hash)) {
    document.querySelector(window.location.hash).scrollIntoView();
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
