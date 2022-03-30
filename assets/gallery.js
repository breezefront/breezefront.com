import PhotoSwipeLightbox from '/assets/lib/photoswipe/photoswipe-lightbox.esm.min.js';

export default function (selector) {
  const lightbox = new PhotoSwipeLightbox({
    gallery: selector,
    children: 'a',
    initialZoomLevel: (zoomLevelObject) => {
      const viewportWidth = document.documentElement.clientWidth - 20;

      if (zoomLevelObject.elementSize.x > viewportWidth) {
        return viewportWidth / zoomLevelObject.elementSize.x;
      }

      return zoomLevelObject.fill;
    },
    secondaryZoomLevel: 'fill',
    pswpModule: () => import('/assets/lib/photoswipe/photoswipe.esm.min.js')
  });

  lightbox.init();

  lightbox.on('initialZoomPan', (event) => {
    if (event.slide.pan.y < 0) {
      event.slide.pan.y = 0;
    }
  });

  // https://github.com/dimsemenov/PhotoSwipe/pull/1868
  // lightbox.addFilter('thumbBounds', (thumbBounds, itemData) => {
  //   const thumbAreaRect = itemData.element.querySelector('img').getBoundingClientRect();

  //   thumbBounds.y = thumbAreaRect.top;
  //   thumbBounds.innerRect.y = 0;

  //   return thumbBounds;
  // });


  return lightbox;
};
