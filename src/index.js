import './style.css';
import './css/popup.css';
import './css/header.css';
import icon from './assets/images/pageIcon.png';
import { fetchTvApi } from './Modules/tvApi.js';
import displayMenu from './Modules/popupMenu.js';

const container = document.getElementById('cardContainer');
const headerIcon = document.querySelector('#pageIcon');
headerIcon.src = icon;
headerIcon.classList.add('icon');


container.addEventListener('click', (e) => {
  if (e.target.tagName === 'BUTTON' && e.target.textContent === 'Comment') {
    displayMenu(e.target.id);
  }
});



window.onload = fetchTvApi();
