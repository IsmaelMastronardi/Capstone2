/**
 * @jest-environment jsdom
 */

const commentCounter = require('./commentCounterTest');

describe('my counter', () => {
  test('3 comments', () => {
    document.body.innerHTML = '<div id="commentsTitle">'
      + '</div>'
      + '<div id="commentsDiv">'
      + '<div>'
      + '</div>'
      + '<div>'
      + '</div>'
      + '<div>'
      + '</div>'
      + '</div>';
    const commentsTitle = document.querySelector('#commentsTitle');
    const commentsDiv = document.querySelector('#commentsDiv');
    commentCounter(commentsDiv, commentsTitle);
    expect(commentsTitle.textContent).toBe('Comments : 3');
  });
  test('9 comments', () => {
    document.body.innerHTML = '<div id="commentsTitle">'
      + '</div>'
      + '<div id="commentsDiv">'
      + '<div>'
      + '</div>'
      + '<div>'
      + '</div>'
      + '<div>'
      + '</div>'
      + '<div>'
      + '</div>'
      + '<div>'
      + '</div>'
      + '<div>'
      + '</div>'
      + '<div>'
      + '</div>'
      + '<div>'
      + '</div>'
      + '<div>'
      + '</div>'
      + '</div>';
    const commentsTitle = document.querySelector('#commentsTitle');
    const commentsDiv = document.querySelector('#commentsDiv');
    commentCounter(commentsDiv, commentsTitle);
    expect(commentsTitle.textContent).toBe('Comments : 9');
  });
  test('0 comments', () => {
    document.body.innerHTML = '<div id="commentsTitle">'
      + '</div>'
      + '<div id="commentsDiv">'
      + '</div>';
    const commentsTitle = document.querySelector('#commentsTitle');
    const commentsDiv = document.querySelector('#commentsDiv');
    commentCounter(commentsDiv, commentsTitle);
    expect(commentsTitle.textContent).toBe('Comments : 0');
  });
});
