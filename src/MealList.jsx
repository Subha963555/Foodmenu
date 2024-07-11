import React from 'react';

const MealList = ({ meals, toggleMealSelection, selectDrink, selectedMeals }) => {
  return (
    <div>
      <h2>Meals</h2>
      {meals.map(meal => {
        const isSelected = selectedMeals.some(selectedMeal => selectedMeal.id === meal.id);
        const selectedMeal = selectedMeals.find(selectedMeal => selectedMeal.id === meal.id);
        
        return (
          <div key={meal.id} className="meal">
            <h3>{meal.title}</h3>
            <p>{meal.starter}</p>
            <p>{meal.desert}</p>
            <img src={meal.img} alt={meal.title} />
            <p>Price: ${meal.price}</p>
            <button onClick={() => toggleMealSelection(meal.id)}>
              {isSelected ? 'Deselect' : 'Select'}
            </button>
            {isSelected && (
              <div>
                <h4>Select Drink</h4>
                {meal.drinks.map(drink => (
                  <button
                    key={drink.id}
                    onClick={() => selectDrink(meal.id, drink.id)}
                    style={{ fontWeight: selectedMeal?.drinkId === drink.id ? 'bold' : 'normal' }}
                  >
                    {drink.title} (${drink.price})
                  </button>
                ))}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default MealList;
