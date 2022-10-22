import '../style.css';
import PostReviewData from './postreview.js';

const overlay = document.getElementById('overlay');
const getData = async (IdMeal) => {
  // create html elements here
  let mealData = [];
  fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${IdMeal}`)
    .then((response) => response.json())
    .then((data) => {
      data = data.meals;
      mealData = data;
      return fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/RKHWm1KUzqGmx0UP3nkk/comments?item_id=${IdMeal}`);
    })
    .then((response) => response.json())
    .then((commData) => {
      const div = `<div class="PopupBg" id="popup-1">
      <section class="popup-detailCard">
          <div class="prj-popup-header flexRow">
              <h2 class="PopupTitle" id="popup-title">
              ${mealData[0].strMeal}
              </h2>
              <i class="fas fa-times x-icon" id="x-icon-popup"></i>
          </div>
              <!-- Image and Details -->
          <img src="${mealData[0].strMealThumb}" alt="Meal" class="popup-img" id="img-id">
              <!-- @ take img with id -->
          <div class="ProductPrice" id="product-price"> 
              <p>${mealData[0].strTags}</p>
              <p href="${mealData[0].strYoutube}">Youtube</p>
              <p>${mealData[0].strIngredient1}</p>
              <p>${mealData[0].strIngredient2}</p>
          </div>
      
          <div class="ReviewTxtarea" id="review-txtarea">
          <h3 id="review-count"></h3>    
          <ul id="reviews-list"></ul>
          </div>
          <div>
              <h3 id="give-review">Give Review</h3>
              <form class="reviewForm" id="">
                  <input id="form-name" type="text" placeholder="Your Name" required>
                  <input id="form-review" type="text" placeholder="Give Review" required>
                  <div class="style-popupbtn">
                      <button type="button" class="button" id="submit-btn">
                        Submit Review
                      </button>
                  </div>
              </form>
          </div>
              <div id="counter"></div>
            <p class="proj-primarytxt" id="proj-primarytxt-id"></p>
            <div id="popuplist">
              <ul class="no-bullets proj-list" id="tech-list-id">
              </ul>
              
            </div>
      </section>
  </div>`;

      overlay.innerHTML = div;
      // Create DOM Elements for User Comments
      const commentCount = document.getElementById('review-count');
      let reviewCounts = commData.length;
      if (!(reviewCounts > 0)) {
        reviewCounts = 0;
        commentCount.innerText = `Reviews (${reviewCounts})`;
      } else {
        commentCount.innerText = `Reviews  (${reviewCounts})`;
        const Reviewul = document.getElementById('reviews-list');
        commData.forEach((item) => {
          const reviewDetail = document.createElement('li');
          reviewDetail.innerText = `${item.creation_date} ${item.username}: ${item.comment}`;
          reviewDetail.classList = 'review-detail';
          Reviewul.append(reviewDetail);
        });
      }

      // Close Button function for Popup
      const closeButton = document.getElementById('x-icon-popup');
      closeButton.addEventListener('click', () => {
        if (overlay.style.display !== 'none') {
          overlay.style.display = 'none';
        }
      });

      setTimeout(() => {
        const commSubmitBtn = document.getElementById('submit-btn');
        const userName = document.getElementById('form-name');
        const review = document.getElementById('form-review');
        const itemId = IdMeal;
        commSubmitBtn.addEventListener('click', (e) => {
          e.preventDefault();
          if (!(userName.value === '' || review.value === '')) {
            PostReviewData(itemId, userName.value, review.value);
            userName.value = '';
            review.value = '';
          }
        });
      }, 5000);
    });
};
const PopupWindowOn = (id) => {
  if (overlay.style.display !== 'block') {
    overlay.style.display = 'block';
    getData(id);
  }
};

export default PopupWindowOn;