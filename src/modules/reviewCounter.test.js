// import reviewCounter from './reviewCounter.js';
// import mockReviews from '../__mocks__/mockReviews.js';

// describe('Test the count function', () => {
//   test('No items', () => {
//     const arr = [];
//     expect(reviewCounter(arr)).toBe(0);
//   });

//   test('6 items', () => {
//     const arr = [
// { idMeal: '52791' },
// { idMeal: '52791' },
// { idMeal: '52791' },
// { idMeal: '52791' },
// { idMeal: '52791' },
// { idMeal: '52791' }];
//     expect(reviewCounter(arr)).toBe(6);
//   });
// });

// // Testing for User Comments
// describe('Test for Count of reviews ', () => {
//   test('Test for Item-Id 1 ', () => {
//     expect(reviewCounter(mockReviews[0].comments)).toBe(4);
//   });
//   test('Test for Item-Id 2', () => {
//     expect(reviewCounter(mockReviews[1].comments)).toBe(2);
//   });
//   test('Test for Item-Id 3 ', () => {
//     expect(reviewCounter(mockReviews[2].comments)).toBe(3);
//   });
//   test('Test for Item-Id 4', () => {
//     expect(reviewCounter(mockReviews[3].comments)).toBe(1);
//   });
// });