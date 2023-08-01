import './style.css';
import { fetchTvApi } from './Modules/tvApi.js';

const myArr = [
  {
    name: 'Game of Thrones',
    id: '82',
  },
  {
    name: 'Girls',
    id: '1',
  },
  {
    name: 'show 3',
    id: '3',
  },
  {
    name: 'show 4',
    id: '4',
  },
  {
    name: 'show 5',
    id: '5',
  },
  {
    name: 'show 6',
    id: '6',
  },
];

// Create a card template function that takes an object and returns a card element


// Loop through the array and create cards for each show
myArr.forEach((elem) => {
  // Create a card element for the current show
    const card = fetchTvApi(elem);
    const container = document.getElementById('cardContainer');

  // Append the card element to the body
  container.appendChild(card);

  // Show the image of the show inside the img-container of the card
//   fetchTvApi(elem);
});