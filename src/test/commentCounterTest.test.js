/**
 * @jest-environment jsdom
 */

const commentCounter = require('./commentCounterTest');

describe('my counter', () => {
  test('adds 1 + 2 to equal 3', () => {
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
  test('adds 1 + 2 to equal 3', () => {
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
  test('adds 1 + 2 to equal 3', () => {
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


// const commentCounter = () => {
//   const commentsTitle = document.querySelector('#commentsTitle');
//   const commentsDiv = document.querySelector('#commentsDiv');
//   const num = commentsDiv.childElementCount;
//   commentsTitle.textContent = `Comments : ${num}`;
// };
// import { commentCounter } from './comments.js';

// describe('my counter', () => {
//   test('counter should be 3', () => {
//     document.body.innerHTML = '<div id="commentsTitle">'
//     + '</div>'
//     + '<div id="commentsDiv">'
//     + '<div>'
//     + '</div>'
//     + '<div>'
//     + '</div>'
//     + '<div>'
//     + '</div>'
//     + '</div>';
//     commentCounter();
//     expect(commentCounter.commentsTitle.textContent).toBe('Comments : 3');
//   });

  // test('is not sour', () => {
  //   expect(myBeverage.sour).toBeFalsy();
  // });
// });
