import { arr } from './tvApi.js';

const removeMenu = (menu) => {
  document.body.removeChild(menu);
  document.body.style.overflow = 'scroll';
};

const displayMenu = (btnid) => {
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
    <p class="movieInfo pMargin">genres : ${arr[id].genres}</p>
    <div class="infoDiv">
      <p class="movieInfo pMargin">language : ${arr[id].language}</p>
      <p class="movieInfo pMargin">status : ${arr[id].status}</p>
    </div>
    <div class="infoDiv">
      <p class="movieInfo pMargin">network : ${arr[id].network.name}</p>
      <p class="movieInfo pMargin">rating : ${arr[id].rating.average}</p>
    </div>
  </div>
  <div class="comments">
    <h3>Comments : 1</h3>
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

export default displayMenu;