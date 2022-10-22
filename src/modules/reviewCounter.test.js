import reviewCounter from './reviewCounter.js';

describe('Test the count function', () => {
  test('No items', () => {
    const arr = [];
    expect(reviewCounter(arr)).toBe(0);
  });

  test('6 items', () => {
    const arr = [
      { idMeal: '52791' },
      { idMeal: '52791' },
      { idMeal: '52791' },
      { idMeal: '52791' },
      { idMeal: '52791' },
      { idMeal: '52791' },
    ];
    expect(reviewCounter(arr)).toBe(6);
  });
});
