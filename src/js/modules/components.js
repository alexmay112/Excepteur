export default () => {
  //   var compBtn = document.querySelectorAll('.components__btn');
  //   for (var i = 0; i < compBtn.length; i++) {
  //     compBtn[i].addEventListener('click', function () {
  //       compBtn.classList.toggle('active');
  //     });
  //   }

  $('.components__btn').on('click', function () {
    $(this).parents('.components__item').toggleClass('active');
  });

  // $('body').on('click', function (e) {

  //   var item = $('.components__item');
  //   console.log(e.target);
    
  //   if (e.target === item[0]) {
  //     console.log('work');
  //   }
  // });



};
