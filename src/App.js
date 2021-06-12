import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import "./App.css";
import Goals from "./components/Goals";

const MOCK_YEAR_GOALS = [
  { id: uuid(), title: "Understand React" },
  { id: uuid(), title: "Become a JavaScript ninja" },
  { id: uuid(), title: "Earn more money this year" },
  { id: uuid(), title: "to evolve from a javascript sloth to a hedgehog" },
];

const MOCK_MONTH_GOALS = [
  { id: uuid(), title: "Do 50 pushups per day" },
  { id: uuid(), title: "Jog 5km per day" },
  { id: uuid(), title: "Eat low carb for one month" },
];

function App() {
  const [yearGoalValue, setYearGoalValue] = useState("");
  const [yearGoals, setYearGoals] = useState(MOCK_YEAR_GOALS);

  const [monthGoalValue, setMonthGoalValue] = useState("");
  const [monthGoals, setMonthGoals] = useState(MOCK_MONTH_GOALS);

  const handleOnChangeYearGoal = (e) => {
    setYearGoalValue(e.target.value);
  };

  const handleOnSubmitYearGoal = (e) => {
    e.preventDefault();

    const newGoal = {
      id: uuid(),
      title: yearGoalValue,
    };

    // MOCK_GOALS.push(newGoal)

    setYearGoals((prevState) => {
      return [...prevState, newGoal];
    });
  };

  const handleOnChangeMonthGoal = (e) => {
    setMonthGoalValue(e.target.value);
  };

  const handleOnSubmitMonthGoal = (e) => {
    e.preventDefault();

    const newGoal = {
      id: uuid(),
      title: monthGoalValue,
    };

    // MOCK_GOALS.push(newGoal)

    setMonthGoals((prevState) => {
      return [...prevState, newGoal];
    });
  };

  return (
    <div className="App">
      <h1>Goals App</h1>
      <Goals
        title="Year"
        goals={yearGoals}
        goalValue={yearGoalValue}
        handleOnChange={handleOnChangeYearGoal}
        handleOnSubmit={handleOnSubmitYearGoal}
      />
      <Goals
        title="Month"
        goals={monthGoals}
        goalValue={monthGoalValue}
        handleOnChange={handleOnChangeMonthGoal}
        handleOnSubmit={handleOnSubmitMonthGoal}
      />
    </div>
  );
}

export default App;
