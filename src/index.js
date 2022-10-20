import './style.css';
import logo from './images/chef.png';
import { displayCards } from './modules/display.js';

const projLogo = document.querySelector('#logo');
projLogo.setAttribute('src', logo);

document.addEventListener('DOMContentLoaded', () => {
  displayCards();
});

