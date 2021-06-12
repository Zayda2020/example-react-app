import React from "react"

const GoalsForm = (props) => {
  return (
    <div className="goals-form">
      <form onSubmit={props.onSubmit}>
        <input type="text" value={props.value} onChange={props.onChange} />
        <button type="submit">Add Goal</button>
      </form>
    </div>
  )
}

export default GoalsForm
