const container = document.getElementById('cardContainer');

const likesId = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/a6bNXajACIujfMt1fQ2H/likes';

const countLikes = (data, itemId) => {
  const result = data.filter((obj) => obj.item_id === itemId);
  if (result) {
    const likeBadge = document.getElementById(itemId);
    likeBadge.textContent = `${result[0].likes} 🤍 likes`;
  }
};
const getLikeCount = async (itemId) => {
  try {
    // Send a request to the Involvement API to get the like count
    const response = await fetch(likesId);
    const data = await response.json();
    // Update the like count badge
    const result = data.filter((obj) => obj.item_id === itemId);
    if (result.length >= 1) {
      countLikes(data, itemId);
    }
  } catch (error) {
    // Handle Error
  }
};

const handleLike = async (itemId) => {
  try {
    // Send a request to the Involvement API to record the like action
    await fetch(likesId, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        item_id: itemId,
      }),
    });
    getLikeCount(itemId);
    // Update the like count badge
  } catch (error) {
    // Handle Error
  }
};
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
};

const fetchTvApi = async () => {
  const response = await fetch('https://api.tvmaze.com/shows');
  const json = await response.json();
  if (json) {
    const slicedJson = json.slice(0, 10);
    slicedJson.forEach((elem) => {
      createCard(elem);
    });
  }
};

export default fetchTvApi;
