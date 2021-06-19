import React, {useState} from "react"
import {v4 as uuid} from "uuid"
import GoalsWrapper from "../../components/GoalsWrapper"

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

const Goals = () => {
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
    setYearGoalValue("")
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
    setMonthGoalValue("")
  };

  const handleDeleteYearGoalClick = id => () => {
    // this si where the core logic for deleeting the correct year goal will sit

    const newGoals = yearGoals.filter(goal => {
      return goal.id !== id
    })

    setYearGoals(newGoals)
  }

  const handleDeleteMonthGoalClick = id => () => {
    // this si where the core logic for deleeting the correct year goal will sit

    const newGoals = monthGoals.filter(goal => {
      return goal.id !== id
    })

    setMonthGoals(newGoals)
  }

  return (
    <div className="App">
      <h1>Goals App</h1>
      <GoalsWrapper
        title="Year"
        goals={yearGoals}
        goalValue={yearGoalValue}
        handleOnChange={handleOnChangeYearGoal}
        handleOnSubmit={handleOnSubmitYearGoal}
        onDeleteClick={handleDeleteYearGoalClick}
      />
      <GoalsWrapper
        title="Month"
        goals={monthGoals}
        goalValue={monthGoalValue}
        handleOnChange={handleOnChangeMonthGoal}
        handleOnSubmit={handleOnSubmitMonthGoal}
        onDeleteClick={handleDeleteMonthGoalClick}
      />
    </div>
  );
}


export default Goals