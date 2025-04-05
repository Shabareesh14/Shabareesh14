const mealList = document.getElementById('mealList');
const mealDetails = document.getElementById('mealDetails');

function searchMeal() {
    const query = document.getElementById('mealSearch').value.trim();
    if (query) {
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`)
            .then(response => response.json())
            .then(data => displayMeals(data.meals))
            .catch(error => console.error('Error:', error));
    }
}

function displayMeals(meals) {
    mealList.innerHTML = '';
    mealDetails.innerHTML = '';

    if (meals) {
        meals.forEach(meal => {
            const mealCard = document.createElement('div');
            mealCard.className = 'meal-card';
            mealCard.innerHTML = `
                <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
                <h3>${meal.strMeal}</h3>
                <button onclick="viewMealDetails(${meal.idMeal})">View Details</button>
            `;
            mealList.appendChild(mealCard);
        });
    } else {
        mealList.innerHTML = '<p>No meals found.</p>';
    }
}

function viewMealDetails(id) {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
        .then(response => response.json())
        .then(data => {
            const meal = data.meals[0];
            mealDetails.innerHTML = `
                <h2>${meal.strMeal}</h2>
                <img src="${meal.strMealThumb}" alt="${meal.strMeal}" style="width: 100%; max-width: 400px;">
                <p><strong>Category:</strong> ${meal.strCategory}</p>
                <p><strong>Area:</strong> ${meal.strArea}</p>
                <p><strong>Instructions:</strong> ${meal.strInstructions}</p>
                <p><strong>Ingredients:</strong></p>
                <ul>
                    ${Object.keys(meal)
                        .filter(key => key.includes('strIngredient') && meal[key])
                        .map(key => `<li>${meal[key]} - ${meal[`strMeasure${key.replace('strIngredient', '')}`]}</li>`)
                        .join('')}
                </ul>
            `;
        });
}
