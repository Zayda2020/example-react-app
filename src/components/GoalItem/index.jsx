import React from "react"
import Button from "../Button"

const GoalItem = (props) => {
  return (
    <div className="goal-item">
      <p>{props.title}</p>
      <Button name="Delete" onClick={props.onDeleteClick} />
    </div>
  )
}

export default GoalItem
