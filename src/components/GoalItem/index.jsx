import React from "react"
import Button from "../Button"

const GoalItem = (props) => {
  return (
    <div className="goal-item">
      <p>{props.title}</p>
      <Button onClick={props.onDeleteClick}>
        Delete
      </Button>
    </div>
  )
}

export default GoalItem
