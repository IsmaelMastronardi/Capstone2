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

export { countLikes, getLikeCount, handleLike };