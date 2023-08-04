const myId = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/a6bNXajACIujfMt1fQ2H/comments';

const commentCounter = () => {
  const commentsTitle = document.querySelector('#commentsTitle');
  const commentsDiv = document.querySelector('#commentsDiv');
  const num = commentsDiv.childElementCount;
  commentsTitle.textContent = `Comments : ${num}`;
};

const displayComments = (json) => {
  const commentsDiv = document.querySelector('#commentsDiv');
  if (json.error) {
    const firstComment = document.createElement('p');
    firstComment.textContent = 'There are no Comments.';
    commentsDiv.appendChild(firstComment);
  } else {
    while (commentsDiv.firstChild) {
      commentsDiv.removeChild(commentsDiv.lastChild);
    }
    json.forEach((elem) => {
      const newComment = document.createElement('p');
      newComment.textContent = elem.comment;
      commentsDiv.appendChild(newComment);
    });
    commentCounter();
  }
};

const getComments = async (id) => {
  const response = await fetch(`${myId}?item_id=item${id}`);
  const json = await response.json();
  displayComments(json);
};

const postAComment = async (id) => {
  const fName = document.querySelector('#fName');
  const fComment = document.querySelector('#fComment');
  if (fName.value !== '' && fComment.value !== '') {
    await fetch(myId, {
      method: 'POST',
      body: JSON.stringify({
        item_id: `item${id}`,
        username: fName.value,
        comment: fComment.value,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    getComments(id);
    fName.value = '';
    fComment.value = '';
  }
};

export { getComments, postAComment, commentCounter };
