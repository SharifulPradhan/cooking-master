const searchMeals = () => {
    const searchText = document.getElementById('search-field').value;
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayMeals(data.data))
        .catch(error => displayError('Meals not found'));
}

const displayMeals = meals => {
  const mealContainer = document.getElementById('meal-container');
  mealContainer.innerHTML = '';
  meals.forEach(meal => {
      const mealDiv = document.createElement('div');
      mealDiv.className = 'meal-results';
      mealDiv.innerHTML = `
      <div class="result">
          <img src="${meal.strCategoryThumb}"
          <h3 class="meal-name">${meal.strMeal}</h3>
      </div>
      `;
      mealContainer.appendChild(mealDiv);
  })
}

const displayError = error => {
  const errorTag = document.getElementById('error-message');
  errorTag.innerText = error;
}