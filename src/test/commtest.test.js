/**
 * @jest-environment jsdom
 */

import { commentCounter } from '../Modules/comments.js';

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
    // const commentsDiv = document.querySelector('#commentsDiv');
    commentCounter();
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
    commentCounter();
    expect(commentsTitle.textContent).toBe('Comments : 9');
  });
  test('0 comments', () => {
    document.body.innerHTML = '<div id="commentsTitle">'
      + '</div>'
      + '<div id="commentsDiv">'
      + '</div>';
    const commentsTitle = document.querySelector('#commentsTitle');
    commentCounter();
    expect(commentsTitle.textContent).toBe('Comments : 0');
  });
});
