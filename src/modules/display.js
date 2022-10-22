import popup from './popup.js';
import { getLikes, addLike } from './likes.js';
import getNumberOfCat from './categoryCounter.js';

let mealCatArray = [];

const newMealObj = (mealCatArray, likes = []) => {
  if (mealCatArray.length) {
    const newMeals = mealCatArray.map((mealCat) => {
      const numOfLikes = likes.find((like) => {
        if (like.item_id === mealCat.idMeal) {
          return like;
        }
      });
      return {
        ...mealCat,
        countLikes: numOfLikes ? numOfLikes.likes : 0,
      };
    });
    newMeals.length && displayCards(newMeals);
  }
};

const mealApi = async () => {
  const fetchResult = await fetch(
    'https://www.themealdb.com/api/json/v1/1/search.php?f=e',
  );
  await fetchResult.json()
    .then((data) => {
    mealCatArray = data.meals;
    return getLikes();
  })
  .then((res) => {
    res.json()
      .then((likeData) => {
        newMealObj(mealCatArray, likeData);
      })
      .catch(() => {
        newMealObj(mealCatArray, []);
      });
  });
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
    <div class='like-content' id=${item.idMeal}>
      <i class='fa-regular fa-heart'></i>
      <span>${item.countLikes}</span>
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


// Display Categories In Browser
const displayCards = async (items) => {
  let allMealCat = '';
  items?.forEach((item) => {
    const list = foodCard(item);
    allMealCat += list;
  });
  const cardWrapper = document.querySelector('.display');
  cardWrapper.innerHTML = allMealCat;

  // display number of categories
  const counter = document.querySelector('#counter');
  counter.textContent = getNumberOfCat(cardWrapper.children);
  
  // Adding likes
  const cards = document.querySelectorAll('.food-box');
  cards.forEach((card) => {
    card.addEventListener('click', (e) => {
     if (e.target.classList.contains('fa-heart')) {
      const catID = e.target.parentNode.getAttribute('id');
      addLike(catID).then(() => {
        const currLikeNo = Number(e.target.nextElementSibling.textContent);
        e.target.nextElementSibling.textContent = String(currLikeNo + 1);
      });
     }
    });
  });
};

document.addEventListener('DOMContentLoaded', mealApi);

export default displayCards;
