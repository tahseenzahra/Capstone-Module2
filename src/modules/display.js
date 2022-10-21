import popup from './popup.js';
// import reviewCounter from './modules/reviewCounter.js';

const mealApi = async () => {
  const fetchResult = await fetch(
    'https://www.themealdb.com/api/json/v1/1/search.php?f=e',
  );
  const showCategory = await fetchResult.json();
  return showCategory;
};

const foodCard = (item) => {
  const div = `<div class='food-box'>
  <img src='${item.strMealThumb}' class='img' alt='food-img' />
  <div class='card-body'>
    <p>${item.strMeal}</p>
  </div>
  <div class='card-content'>
    <div class='card-action'>
      <button class='review-btn' id="${item.idMeal}">Review</button>
    </div>
    <div class='like-content'>
      <i class='fa-regular fa-heart'></i>
      <span>5 likes</span>
    </div>
  </div>
  </div>`;
  return div;
};

setTimeout(() => {
  const ReviewBtn = Array.from(document.querySelectorAll('.review-btn'));
  ReviewBtn.forEach((btn) => {
    btn.addEventListener('click', () => {
      popup(btn.id);
    });
  });
}, 2000);

const displayCards = async () => {
  const response = await mealApi();
  const { meals } = response;
  const results = meals.map((category) => foodCard(category));
  const cardWrapper = document.querySelector('.display');
  cardWrapper.innerHTML = results.join('');
};

export { mealApi, displayCards };
