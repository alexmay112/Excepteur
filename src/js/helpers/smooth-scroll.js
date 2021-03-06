export default () => {
  $(document).on(`click`, `a[href^="#"]`, function (event) {
    event.preventDefault();

    function closeMenu() {
      document.querySelector('.menu__overlay').style.display = 'none';
      document.querySelector('.menu__wrapper').classList.remove('active');
      document.querySelector('html').style.overflowY = 'auto';
    }
    closeMenu();

    $(`html, body`).animate({
        scrollTop: $($.attr(this, `href`)).offset().top
    }, 500);
  });
};
