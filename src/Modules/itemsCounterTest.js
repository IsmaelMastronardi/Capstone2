import { JSDOM } from 'jsdom';

import countItems from './itemsCounter.js';

// Mock the DOM environment using JSDOM
const dom = new JSDOM(
  '<html>' +
    '<body>' +
    '<div class="card"></div>' +
    '<div class="card"></div>' +
    '<div class="card"></div>' +
    '<div class="card"></div>' +
    '<div class="items-counter"></div>' +
    '</body>' +
    '</html>'
);
global.document = dom.window.document;

// Import the function to be tested

describe('count All items in the Homepage ', () => {
  beforeEach(() => {
    // Reset the DOM state before each test
    document.querySelector('.items-counter').innerHTML = '';
  });

  test('should count the number of cards and update the items counter', () => {
    countItems();

    // Check if the items counter has been updated correctly
    expect(document.querySelector('.items-counter').innerHTML).toBe('4');
  });
});
