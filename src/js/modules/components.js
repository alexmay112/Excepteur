export default () => {
  //   var compBtn = document.querySelectorAll('.components__btn');
  //   for (var i = 0; i < compBtn.length; i++) {
  //     compBtn[i].addEventListener('click', function () {
  //       compBtn.classList.toggle('active');
  //     });
  //   }

  $('.components__btn').on('click', function (e) {
    $(this).parents('.components__item').toggleClass('active');
  })
};
