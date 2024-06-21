// Question 4: Sort Restaurants
/* 
Create a JavaScript function named recommendRestaurants that takes an array of restaurant objects as input. Each object should have the following properties:

    - name: The name of the restaurant (string)
    - rating: The average customer rating of the restaurant (number)

The function should perform two functionalities:

    - Sort the restaurants in descending order based on their rating values.
    - Finding Restaurants by Rating: Given an optional targetRating (number) passed as a second argument, return a new array containing only restaurants with a rating higher than or equal to the targetRating. You can use an appropriate searching algorithm (e.g., built-in filter methods).
*/

/**
 * @param {array} restaurants
 * @param {number} targetRating
 * @returns {array}
 */

function recommendRestaurants(restaurants, targetRating = null) {
  // if targetRating is provided, filter the restaurants by the rating higher than or equal to the targetRating
  // if no targetRating is provided, return the sorted order of restaurants in descending order
  restaurants = targetRating ?
    restaurants.filter(restaurant => restaurant.rating >= targetRating) : restaurants.sort((a, b) => b.rating - a.rating);
  
  return restaurants;
}

const restaurants = [
  { name: 'Pizza Palace', rating: 4.8 },
  { name: 'Curry Corner', rating: 4.2 },
  { name: 'Amazing Asian', rating: 4.5 },
  { name: 'Healthy Eats', rating: 3.9 },
];

console.log(recommendRestaurants(restaurants)) 
console.log(recommendRestaurants(restaurants, 4.4)) 