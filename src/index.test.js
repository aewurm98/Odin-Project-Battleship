/**
 * @jest-environment jsdom
 */

test('use jsdom in this test file', () => {
  const element = document.createElement('div');
  expect(element).not.toBeNull();
});

// Import the modules that are exported from index.js
import { Ship } from './index';

// Create a section of tests related to the Ship class

describe('Ship', () => {
  // Create a test that checks for the creation of an instance of the Ship class using it notation
  it('creates an instance of the Ship class', () => {
    const ship = new Ship('carrier', 5);
    expect(ship).toBeInstanceOf(Ship);
  });

  // Create an instance of the Ship class to be used in the following tests
  const ship = new Ship('carrier', 5);

  // Create a test that checks if the hit method works properly on a ship
});
