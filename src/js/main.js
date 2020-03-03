import './helpers/postDate';
import scrollSmooth from './helpers/smooth-scroll.js';
import symptoms from './modules/symptoms.js';
import relapse from './modules/relapse';

function main () {
  scrollSmooth();
  symptoms();
  relapse();
}

main();
