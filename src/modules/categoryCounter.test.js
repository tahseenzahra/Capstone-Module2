import categoryCounter from './categoryCounter.js';

describe('Category Counter', () => {
  test('Array Length = 0', () => {
    const arr = [];
    expect(categoryCounter(arr)).toBe(0);
  });

  test('Array length = 2', () => {
    const arr = [1, 2];
    expect(categoryCounter(arr)).toBe(2);
  });
});