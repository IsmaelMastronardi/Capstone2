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

  const commentBtn = document.createElement('button');
  commentBtn.className = 'comment-btn';
  commentBtn.textContent = 'Comment';
  commentBtn.id = `commentBtn${json.id}`;

  // Append the title and the imgContainer to the card
  imgContainer.appendChild(myImg);
  card.appendChild(title);
  card.appendChild(imgContainer);
  card.appendChild(likeBtn);
  card.appendChild(commentBtn);
  container.appendChild(card);
};
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

const removeMenu = (menu) => {
  document.body.removeChild(menu);
  document.body.style.overflow = 'scroll';
};

const displayMenu = (btnid) => {
  console.log(arr);
  const id = btnid.replace(/\D+/, '') - 1;
  const popupMenu = document.createElement('section');
  popupMenu.classList.add('popupMenuBackground');
  popupMenu.innerHTML = `
  <div class="popupMenu">
  <button class="exitBtn" id="popupExitBtn">X</button>
  <div>
    <img src="${arr[id].image.medium}" class="popupMenuImg">
  </div>
  <div class="movie">
    <h3 class="movieTitle">${arr[id].name}</h3>
    <div class="infoDif">
      <p class="movieInfo">genres : ${arr[id].genres}</p>
      <p class="movieInfo">status : ${arr[id].status}</p>
    </div>
    <div class="infoDif">
    <p class="movieInfo">network : ${arr[id].network.name}</p>
    <p class="movieInfo">raiting : ${arr[id].raiting}</p>
  </div>
  </div>
  <div class="comments">
    <title>Comments : 1</title>
    <p>first comment</p>
    <p>second commnet</p>
  </div>
  <form>
    <title>Add A Comment</title>
    <input placeholder="Your name">
    <input placeholder="Your insigths">
    <button>Comment</button>
  </form>
</div>
  `;
  document.body.appendChild(popupMenu);
  document.body.style.overflow = 'hidden';
  const popupExitBtn = document.querySelector('#popupExitBtn');
  popupExitBtn.addEventListener('click', () => { removeMenu(popupMenu); });
};

container.addEventListener('click', (e) => {
  if (e.target.tagName === 'BUTTON' && e.target.textContent === 'Comment') {
    displayMenu(e.target.id);
  }
});

export default fetchTvApi;
