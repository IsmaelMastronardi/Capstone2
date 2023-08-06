import { getComments, postAComment } from './comments.js';
import { seriesJson } from './tvApi.js';

const removeMenu = (menu) => {
  document.body.removeChild(menu);
  document.body.style.overflow = 'scroll';
};

const displayMenu = (btnId) => {
  const id = btnId.replace(/\D+/, '');
  const series = seriesJson.find((obj) => obj.id === Number(id));
  const popupMenu = document.createElement('section');
  popupMenu.classList.add('popupMenuBackground');
  popupMenu.innerHTML = `
  <div class="popupMenu">
  <button class="exitBtn" id="popupExitBtn">X</button>
  <div>
    <img src="${series.image.medium}" class="popupMenuImg">
  </div>
  <div class="movie">
    <h3 class="movieTitle">${series.name}</h3>
    <p class="movieInfo pMargin">genres : ${series.genres}</p>
    <div class="infoDiv">
      <p class="movieInfo pMargin">language : ${series.language}</p>
      <p class="movieInfo pMargin">status : ${series.status}</p>
    </div>
    <div class="infoDiv">
      <p class="movieInfo pMargin">network : ${series.network.name}</p>
      <p class="movieInfo pMargin">rating : ${series.rating.average}</p>
    </div>
  </div>
  <div class="commentsTitleDiv" id="commentsTitleDiv">
    <h3 id="commentsTitle">Comments : 0</h3>
  </div>
  <div class="comments" id="commentsDiv">  
    <p id="firstComment"></p>
  </div>
  <form>
    <title>Add A Comment</title>
    <input id="fName" class="fName" placeholder="Your name">
    <textarea id="fComment" class="fComment" placeholder="Your insigths"></textarea>
    <button id="submitComment" class="submitBtn" type="button">Comment</button>
  </form>
</div>
  `;
  getComments(id);
  document.body.appendChild(popupMenu);
  document.body.style.overflow = 'hidden';
  const popupExitBtn = document.querySelector('#popupExitBtn');
  popupExitBtn.addEventListener('click', () => { removeMenu(popupMenu); });
  const submitComment = document.querySelector('#submitComment');
  submitComment.addEventListener('click', () => { postAComment(id); });
};

export default displayMenu;