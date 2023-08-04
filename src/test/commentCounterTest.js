const commentCounter = (commentsDiv, commentsTitle) => {
  const num = commentsDiv.childElementCount;
  commentsTitle.textContent = `Comments : ${num}`;
};
module.exports = commentCounter;
