import { getLikeCount, handleLike } from './likes.js';
import countItems from './itemsCounter.js';

const container = document.getElementById('cardContainer');
const createCard = (json) => {
  // Create a div element with class card
  const card = document.createElement('div');
  card.className = 'card';

  // Create a h3 element with the name of the show
  const title = document.createElement('h3');
  title.textContent = json.name;

  // Create a div element with class img-container
  const imgContainer = document.createElement('div');
  imgContainer.className = 'img-container';
  // Create an image
  const myImg = document.createElement('img');
  myImg.src = json.image.original;

  // Add like and comments buttons
  const likeBtn = document.createElement('button');
  likeBtn.className = 'like-btn';
  likeBtn.innerHTML = '<i class="far fa-heart"></i><span> likes</span>';
  likeBtn.id = json.id;

  const likeCount = document.createElement('span');
  likeCount.className = 'like-count';
  likeCount.id = json.id;
  // likeCount.textContent = json.id;

  const commentBtn = document.createElement('button');
  commentBtn.className = 'comment-btn';
  commentBtn.textContent = 'Comment';
  commentBtn.id = `commentBtn${json.id}`;

  // Append the title and the imgContainer to the card
  imgContainer.appendChild(myImg);
  card.appendChild(title);
  card.appendChild(imgContainer);
  card.appendChild(likeBtn);
  card.appendChild(likeCount);
  card.appendChild(commentBtn);
  container.appendChild(card);

  likeBtn.addEventListener('click', () => {
    handleLike(json.id);
  });

  // Call the function to retrieve and update the like count
  getLikeCount(json.id);
  countItems();
};
// eslint-disable-next-line import/no-mutable-exports
let arr = [];
const fetchTvApi = async () => {
  const response = await fetch('https://api.tvmaze.com/shows');
  const json = await response.json();
  if (json) {
    const slicedJson = json.slice(0, 10);
    arr = slicedJson;
    slicedJson.forEach((elem) => { createCard(elem); });
  }
};

export { fetchTvApi, arr };
