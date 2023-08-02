import './style.css';
import './css/popup.css';
import { fetchTvApi } from './Modules/tvApi.js';
import displayMenu from './Modules/popupMenu.js';

const container = document.getElementById('cardContainer');

container.addEventListener('click', (e) => {
  if (e.target.tagName === 'BUTTON' && e.target.textContent === 'Comment') {
    displayMenu(e.target.id);
  }
});

window.onload = fetchTvApi();
