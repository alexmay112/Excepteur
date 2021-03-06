import './helpers/postDate';
import scrollSmooth from './helpers/smooth-scroll.js';
import menu from './modules/menu.js';
import symptoms from './modules/symptoms.js';
import components from './modules/components.js';
import reviews from './modules/reviews.js';

function main() {
  scrollSmooth();
  menu();
  symptoms();
  components();
  reviews();
}

main();
