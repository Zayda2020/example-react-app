import React, { useState } from "react";

import GoalsForm from "../GoalsForm";
import GoalsList from "../GoalsList";

const Goals = (props) => {
  return (
    <div className="goals">
      <h2>{`${props.title} Goals`}</h2>

      <GoalsForm value={props.goalValue} onChange={props.handleOnChange} onSubmit={props.handleOnSubmit} />
      <GoalsList goals={props.goals} />
    </div>
  );
};

export default Goals;
