export default () => {
  $('.review__slider').slick({
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: true,
    dots: true,
    prevArrow: '<div class="slider-circle slider-circle--left"><svg class="slider__arrow slider__arrow--left" xmlns="http://www.w3.org/2000/svg" width="11" height="20" viewBox="0 0 11 20"><g><g><path fill="#fff" d="M10.567 10.952L2.469 19.05a1.318 1.318 0 1 1-1.865-1.865L7.77 10.02.605 2.856A1.32 1.32 0 0 1 2.47.99l8.097 8.098a1.319 1.319 0 0 1 0 1.864z"/></g></g></svg></div>',
    nextArrow: '<div class="slider-circle slider-circle--right"><svg class="slider__arrow slider__arrow--right" xmlns="http://www.w3.org/2000/svg" width="11" height="20" viewBox="0 0 11 20"><g><g><path fill="#fff" d="M10.567 10.952L2.469 19.05a1.318 1.318 0 1 1-1.865-1.865L7.77 10.02.605 2.856A1.32 1.32 0 0 1 2.47.99l8.097 8.098a1.319 1.319 0 0 1 0 1.864z"/></g></g></svg></div>',
    responsive: [{
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
};
