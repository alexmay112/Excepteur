export default () => {
  console.log('');
};
// зуд
$('.symptoms-item-1').on('click mouseover', function () {
	$('.symptoms-content').removeClass('active1 active2 active3 active4 active5 active6');
	$('.symptoms-content').addClass('active1');
});
// запах
$('.symptoms-item-2').on('click mouseover', function () {
	$('.symptoms-content').removeClass('active1 active3 active4 active5 active6');
	$('.symptoms-content').addClass('active2');
});
// деформация ногтя
$('.symptoms-item-3').on('click mouseover', function () {
	$('.symptoms-content').removeClass('active1 active2 active4 active5 active6');
	$('.symptoms-content').addClass('active3');
});
// шелушение 
$('.symptoms-item-4').on('click mouseover', function () {
	$('.symptoms-content').removeClass('active1 active2 active3 active5 active6');
	$('.symptoms-content').addClass('active4');
});
// волдыри
$('.symptoms-item-5').on('click mouseover', function () {
	$('.symptoms-content').removeClass('active1 active2 active3 active4 active6');
	$('.symptoms-content').addClass('active5');
});
// волдыри
$('.symptoms-item-6').on('click mouseover', function () {
	$('.symptoms-content').removeClass('active1 active2 active3 active4 active5');
	$('.symptoms-content').addClass('active6');
});

