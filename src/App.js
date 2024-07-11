import React, { useState } from 'react';
import MealList from './MealList';
import PersonSelector from './PersonSelector';
import TagFilter from './TagFilter';
import TotalPrice from './TotalPrice';
import data from './data.json';
import './index.css';

const App = () => {
  const [meals, setMeals] = useState(data.meals);
  const [tags] = useState(data.labels);
  const [people] = useState([{ id: 1, name: 'Person 1' }, { id: 2, name: 'Person 2' }]);
  const [selectedPerson, setSelectedPerson] = useState(people[0].id);
  const [selectedMeals, setSelectedMeals] = useState({ 1: [], 2: [] });

  const selectTag = (tagId) => {
    setMeals(data.meals.filter(meal => meal.labels.includes(tagId)));
  };

  const selectPerson = (personId) => {
    setSelectedPerson(personId);
  };

  const toggleMealSelection = (mealId) => {
    setSelectedMeals(prevSelectedMeals => {
      const updatedMeals = { ...prevSelectedMeals };
      const personMeals = updatedMeals[selectedPerson] || [];
      const mealIndex = personMeals.findIndex(meal => meal.id === mealId);

      if (mealIndex > -1) {
        updatedMeals[selectedPerson] = personMeals.filter(meal => meal.id !== mealId);
      } else {
        updatedMeals[selectedPerson] = [...personMeals, { id: mealId }];
      }

      return updatedMeals;
    });
  };

  const selectDrink = (mealId, drinkId) => {
    setSelectedMeals(prevSelectedMeals => {
      const updatedMeals = { ...prevSelectedMeals };
      const personMeals = updatedMeals[selectedPerson] || [];
      const mealIndex = personMeals.findIndex(meal => meal.id === mealId);

      if (mealIndex > -1) {
        personMeals[mealIndex] = { ...personMeals[mealIndex], drinkId };
      } else {
        personMeals.push({ id: mealId, drinkId });
      }

      updatedMeals[selectedPerson] = personMeals;
      return updatedMeals;
    });
  };

  return (
    <div className="container">
      <div className="sidebar">
        <PersonSelector people={people} selectedPerson={selectedPerson} selectPerson={selectPerson} />
        <TagFilter tags={tags} selectTag={selectTag} />
        <TotalPrice selectedMeals={selectedMeals[selectedPerson]} meals={meals} />
      </div>
      <div className="main-content">
        <h1>Meal Selection</h1>
        <MealList meals={meals} selectedMeals={selectedMeals[selectedPerson]} toggleMealSelection={toggleMealSelection} selectDrink={selectDrink} />
      </div>
    </div>
  );
};

export default App;
