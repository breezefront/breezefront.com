import PhotoSwipeLightbox from '/assets/lib/photoswipe/photoswipe-lightbox.esm.min.js';
import ObjectPosition from '/assets/photoswipe-object-position.js';

export default function (selector) {
  const animation = document.querySelector(selector).dataset.animation;
  const lightbox = new PhotoSwipeLightbox({
    gallery: selector,
    children: 'a',
    showHideAnimationType: animation || 'zoom',
    initialZoomLevel: (zoomLevelObject) => {
      const viewportWidth = document.documentElement.clientWidth - 50;

      if (zoomLevelObject.elementSize.x > viewportWidth) {
        return viewportWidth / zoomLevelObject.elementSize.x;
      }

      return zoomLevelObject.fill;
    },
    secondaryZoomLevel: 'fill',
    pswpModule: () => import('/assets/lib/photoswipe/photoswipe.esm.min.js')
  });

  new ObjectPosition(lightbox);

  lightbox.init();

  return lightbox;
};
