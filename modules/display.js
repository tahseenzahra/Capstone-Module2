const mealApi = async () => {
  const fetchResult = await fetch(
    "https://www.themealdb.com/api/json/v1/1/categories.php"
  );
  const showCategory = await fetchResult.json();
  return showCategory;
};

const foodCard = (item) => {
  const div = `<div class="food-box">
  <img src="${item.strCategoryThumb}" class="img" alt="food-img" />
 <div class="card-body">
  <p>${item.strCategory}</p>
</div>
<div class="card-content">
  <div class="card-action">
    <button class="review-btn">Review</button>
   </div>
  <div class="like-content">
    <i class="fa-regular fa-heart"></i>
    <span>5 likes</span>
  </div>
 </div>
</div>`;
return div;
}

const displayCards = async () => {
  const response = await mealApi();
  const categories = response.categories;
  const results = categories.map((category) => {
    return foodCard(category);
  });
  const cardWrapper = document.querySelector('.display');
  cardWrapper.innerHTML = results.join('');
}

export { mealApi, displayCards };
