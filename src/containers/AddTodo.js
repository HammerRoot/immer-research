import React from 'react'
import { connect } from 'react-redux'

import { addTodo } from '../actions'
import './AddTodo.css'

const AddTodo = ({ dispatch }) => {
  let input

  const handleClick = () => {
    if (!input.value?.trim()) {
      return false
    }

    dispatch(addTodo(input.value))

    input.value = ''
  }

  return (
    <div className="add-todo">
      <input ref={node => (input = node)} />
      <button onClick={handleClick}>添加代办项</button>
    </div>
  )
}

export default connect()(AddTodo)
