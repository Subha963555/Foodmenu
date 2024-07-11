import React from 'react';

const TotalPrice = ({ selectedMeals, meals }) => {
  const calculateTotal = () => {
    if (!selectedMeals || selectedMeals.length === 0) {
      return 0;
    }

    return selectedMeals.reduce((total, selectedMeal) => {
      const meal = meals.find(meal => meal.id === selectedMeal.id);
      if (!meal) return total; // Skip if meal is not found

      const drink = selectedMeal.drinkId ? meal.drinks.find(drink => drink.id === selectedMeal.drinkId) : null;
      return total + meal.price + (drink ? drink.price : 0);
    }, 0);
  };

  return (
    <div className="total-price fade-in">
      <h2>Total Price</h2>
      <p>${calculateTotal().toFixed(2)}</p>
    </div>
  );
};

export default TotalPrice;
