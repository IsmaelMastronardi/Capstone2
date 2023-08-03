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
};

const handleLike = async (itemId) => {
  try {
    // Send a request to the Involvement API to record the like action
    const response = await fetch(
      `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/a6bNXajACIujfMt1fQ2H/likes`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          item_id: itemId,
          // user_id: 'user123', // Replace with the actual user ID
        }),
      }
    );

    // Check if the API response has a valid JSON content type
    const contentType = response.headers.get('content-type');
    if (!contentType || !contentType.includes('application/json')) {
      console.error('Error recording like: Invalid JSON response');
      return;
    }

    const data = await response.json();

    // Update the like count badge
    if (data && data.likes) {
      const likeBadge = document.getElementById(itemId);
      likeBadge.textContent = `${data.likes} likes`;
    }
  } catch (error) {
    console.error('Error recording like:', error);
  }
};

const getLikeCount = async (itemId) => {
  try {
    // Send a request to the Involvement API to get the like count
    const response = await fetch(
      `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/a6bNXajACIujfMt1fQ2H/likes?item_id=${itemId}`
    );

    // Check if the API response has a valid JSON content type
    const contentType = response.headers.get('content-type');
    if (!contentType || !contentType.includes('application/json')) {
      console.error('Error getting like count: Invalid JSON response');
      return;
    }

    const data = await response.json();

    // Update the like count badge
    if (data && data.likes) {
      const likeBadge = document.getElementById(itemId);
      likeBadge.textContent = `${data.likes} likes`;
    }
  } catch (error) {
    console.error('Error getting like count:', error);
  }
};
// const handleLike = async (itemId) => {
//   try {
//     // Send a request to the Involvement API to record the like action
//     const response = await fetch(
//       `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/a6bNXajACIujfMt1fQ2H/likes`,
//       {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           item_id: itemId,
//           user_id: 'user123', // Replace with the actual user ID
//         }),
//       }
//     );
//     const data = await response.json();

//     // Update the like count badge
//     if (data && data.likes) {
//       const likeBadge = document.getElementById(json.id);
//       likeBadge.textContent = `${data.likes} likes`;
//     }
//   } catch (error) {
//     console.error('Error recording like:', error);
//   }
// };

// const getLikeCount = async (itemId) => {
//   try {
//     // Send a request to the Involvement API to get the like count
//     const response = await fetch(
//       `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/a6bNXajACIujfMt1fQ2H/likes?item_id=${itemId}`
//     );
//     const data = await response.json();

//     // Update the like count badge
//     if (data && data.likes) {
//       const likeBadge = document.getElementById(`likeBadge${itemId}`);
//       likeBadge.textContent = `${data.likes} likes`;
//     }
//   } catch (error) {
//     console.error('Error getting like count:', error);
//   }
// };

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
