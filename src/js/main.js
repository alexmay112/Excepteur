import './helpers/postDate';
import scrollSmooth from './helpers/smooth-scroll.js';
import menu from './modules/menu.js';
import symptoms from './modules/symptoms.js';

function main () {
  scrollSmooth();
  menu();
  symptoms();
}

main();
