import './style.css';
import './css/popup.css';
import './css/header.css';
import './css/body.css';
import './css/footer.css';
import './css/card.css';
import icon from './assets/images/pageIcon.png';
import { fetchTvApi, showSelection } from './Modules/tvApi.js';
import displayMenu from './Modules/popupMenu.js';

const container = document.getElementById('cardContainer');
const headerIcon = document.querySelector('#pageIcon');
const movieSelection = document.querySelector('#movieSelection');
headerIcon.src = icon;
headerIcon.classList.add('icon');

container.addEventListener('click', (e) => {
  if (e.target.tagName === 'BUTTON' && e.target.textContent === 'Comment') {
    displayMenu(e.target.id);
  }
});

movieSelection.addEventListener('click', (e) => {
  const val = e.target.value;
  switch (val) {
    case 'Action':
      showSelection('Action');
      break;
    case 'Adventure':
      showSelection('Adventure');
      break;
    case 'Crime':
      showSelection('Crime');
      break;
    case 'Drama':
      showSelection('Drama');
      break;
    case 'Espionage':
      showSelection('Espionage');
      break;
    case 'Fantasy':
      showSelection('Fantasy');
      break;
    case 'Music':
      showSelection('Music');
      break;
    case 'Sci-Fi':
      showSelection('Science-Fiction');
      break;
    case 'Thriller':
      showSelection('Thriller');
      break;
    default:
      showSelection('Top-Ten');
  }
});

window.onload = fetchTvApi();
