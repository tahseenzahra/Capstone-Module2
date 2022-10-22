import categoryCounter from './categoryCounter.js';

describe('Category Counter', () => {
  test('Array Length = 0', () => {
    const arr = [];
    expect(categoryCounter(arr)).toBe(0);
  });
});