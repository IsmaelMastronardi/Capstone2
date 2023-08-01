const myUrl = 'https://api.tvmaze.com/shows/';

const container = document.getElementById('cardContainer');

const createCard = (obj, json) => {
  // Create a div element with class card
  const card = document.createElement('div');
  card.className = 'card';

  // Create a h3 element with the name given in the JSON
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

  const commentBtn = document.createElement('button');
  commentBtn.className = 'comment-btn';
  commentBtn.textContent = 'Comment';

  // Append the title and the imgContainer to the card
  imgContainer.appendChild(myImg);
  card.appendChild(title);
  card.appendChild(imgContainer);
  card.appendChild(likeBtn);
  card.appendChild(commentBtn);
  container.appendChild(card);
};

const fetchTvApi = async (obj) => {
  const response = await fetch(myUrl + obj.id);
  const json = await response.json();
  if (json) {
    createCard(obj, json);
  }
};

export default fetchTvApi;
