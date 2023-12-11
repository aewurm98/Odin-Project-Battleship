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

describe('Ship Creation', () => {
  // Create a test that checks for the creation of an instance of the Ship class using it notation
  it('creates an instance of the Ship class', () => {
    const ship = new Ship('carrier', 5);
    expect(ship).toBeInstanceOf(Ship);
  });
});

// Create a test ship and a section of tests related to the Ship methods

function newCarrier() {
  return new Ship('carrier', 5);
}

let testCarrier;

describe('Ship Manipulation', () => {
  beforeEach(() => {
    testCarrier = newCarrier();
  });

  // Create a test that checks the length of the ship
  it('checks the length of the ship', () => {
    expect(testCarrier.length).toBe(5);
  });

  // create a test that checks if a single hit is registered
  it('registers a single hit', () => {
    testCarrier.hit(1);
    expect(testCarrier.hits).toEqual([1]);
  });

  // create a test that checks if multiple hits are registered
  it('registers multiple hits', () => {
    testCarrier.hit(1);
    testCarrier.hit(2);
    testCarrier.hit(3);
    expect(testCarrier.hits).toEqual([1, 2, 3]);
  });

  // create a test that checks if more hits are registered than the length of the ship
  it('does not register more hits than the length of the ship', () => {
    testCarrier.hit(1);
    testCarrier.hit(2);
    testCarrier.hit(3);
    testCarrier.hit(4);
    testCarrier.hit(5);
    testCarrier.hit(6);
    expect(testCarrier.hits).toEqual([1, 2, 3, 4, 5]);
  });

  // create a test that checks if a redundant hit is registered
  it('does not register redundant hits', () => {
    testCarrier.hit(1);
    testCarrier.hit(1);
    testCarrier.hit(2);
    testCarrier.hit(2);
    expect(testCarrier.hits).toEqual([1, 2]);
  });

  // create a test that checks if the ship is sunk where the ship is not yet sunk
  it('checks if the ship is not sunk', () => {
    testCarrier.isSunk();
    expect(testCarrier.sunk).toBe(false);
  });

  // create a test that checks if the ship is sunk where the ship is sunk
  it('checks if the ship is sunk', () => {
    testCarrier.hit(1);
    testCarrier.hit(2);
    testCarrier.hit(3);
    testCarrier.hit(4);
    testCarrier.hit(5);
    testCarrier.isSunk();
    expect(testCarrier.sunk).toBe(true);
  });
});
