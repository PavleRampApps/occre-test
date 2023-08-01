/**
  *   STYLE 
*/

// Give main a min-height of 100vh - footer height | FUNCTION called after every image is loaded

let imgs = document.images,
len = imgs.length,
counter = 0;

[].forEach.call( imgs, function( img ) {
  if(img.complete)
    incrementCounter();
  else
    img.addEventListener( 'load', incrementCounter, false );
} );

function incrementCounter() {
  counter++;
  if ( counter === len ) {
    const main_container = document.querySelector('#content');
    const footer_height = document.querySelector('#pagefooter').offsetHeight;

    //CSS min-height
    const main_container_min_height = 'calc(100vh - '+footer_height+'px)';

    main_container.style.minHeight = main_container_min_height;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  $('.collection-slider__landing').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    appendArrows: $('.collection-with-text').find('.testimonial-list__controls.desktop-only'),
    prevArrow: '<button type="button" class="slick-prev" aria-label="' + theme.strings.previous + '">' + theme.icons.chevronLeft + '</button>',
    nextArrow: '<button type="button" class="slick-next" aria-label="' + theme.strings.next + '">' + theme.icons.chevronRight + '</button>',
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          appendArrows: $('.collection-with-text').find('.testimonial-list__controls.mobile-only')
        }
      }
    ]
  });
}); 

