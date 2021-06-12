import React from "react"
import GoalItem from "../GoalItem"

const GoalsList = (props) => {
  return (
    <div className="goals-list">
      {/* <GoalItem title={props.goals[0].title} />
      <GoalItem title={props.goals[1].title} />
      <GoalItem title={props.goals[2].title} />
      <GoalItem title={props.goals[3].title} />
      <GoalItem title={props.goals[4].title} /> */}

      {props.goals.map((goal) => (
        <GoalItem key={goal.id} title={goal.title} />
      ))}

    </div>
  )
}

export default GoalsList
