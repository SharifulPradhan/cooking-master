// Calling API for search all the meals
const searchMeals = () => {
  const searchText = document.getElementById('search-field').value;
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
  fetch(url)
    .then(res => res.json())
    .then(data => displayMeals(data.meals))
    .catch(error => displayError('Sorry:( this meal is not available right now.'))
}

const displayMeals = meals => {
  const mealContainer = document.getElementById('display-meals');
  mealContainer.innerHTML = '';
  meals.forEach(meal => {
    const mealDiv = document.createElement('div');
    mealDiv.className = 'col-md-3 col-sm-6 mt-5';
    mealDiv.innerHTML = `
      <div class="card text-center">
        <div onclick="mealInfo(${meal.idMeal})" class="card-block">
          <img src="${meal.strMealThumb}" alt="meal-image" class="img-fluid">
          <div class="card-title">
            <h3>${meal.strMeal}</h3>
          </div>
        </div>
      </div>
      `
    mealContainer.appendChild(mealDiv);
  });
}

// Calling API for display single meal information and list of ingredients
const mealInfo = mealId => {
  const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
  fetch(url)
    .then(res => res.json())
    .then(data => mealDetails(data.meals))
}

const mealDetails = ingredients => {
  const mealInfoDiv = document.getElementById('meal-info');
  mealInfoDiv.innerHTML = '';
  ingredients.forEach(ingredient => {
    const mealDetailsDiv = document.createElement('div');
    mealDetailsDiv.className = 'card meal-card';
    mealDetailsDiv.innerHTML = `
          <img class="card-img-top" src="${ingredient.strMealThumb}" alt="Card image cap">
          <div class="card-body">
            <h1 style="font-weight: bolder;" class="card-title">${ingredient.strMeal}</h1>
            <br>
            <h5 style="font-weight: bolder;">Ingredients</h5>
            </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">${ingredient.strIngredient1}</li>
            <li class="list-group-item">${ingredient.strIngredient2}</li>
            <li class="list-group-item">${ingredient.strIngredient3}</li>
            <li class="list-group-item">${ingredient.strIngredient4}</li>
            <li class="list-group-item">${ingredient.strIngredient5}</li>
            <li class="list-group-item">${ingredient.strIngredient6}</li>
          </ul>
          `
    mealInfoDiv.appendChild(mealDetailsDiv);
    
  });
}

// Error funtion
const displayError = error => {
  const errorText = document.getElementById('error-text');
  errorText.innerText = error;
}