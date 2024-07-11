import React from 'react';

const MealItem = ({ meal, selectDrink, selectedPerson }) => {
  return (
    <div className="meal-item">
      <h2>{meal.title}</h2>
      <img src={meal.img} alt={meal.title} />
      <p>{meal.starter}</p>
      <p>{meal.desert}</p>
      <p>${meal.price}</p>
      <select onChange={(e) => selectDrink(meal.id, e.target.value, selectedPerson)}>
        <option value="">Select a drink</option>
        {meal.drinks.map(drink => (
          <option key={drink.id} value={drink.id}>
            {drink.title} - ${drink.price}
          </option>
        ))}
      </select>
    </div>
  );
};

export default MealItem;
