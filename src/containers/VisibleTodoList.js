import React from 'react'
import { connect } from 'react-redux'

import { getVisibleTodos } from '../config'
import { toggleTodo } from '../actions'
import TodoItem from '../components/TodoItem'

const mapStateToProps = state => ({
  todos: getVisibleTodos(state.todos, state.visibilityFilter),
})

const mapDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch(toggleTodo(id)),
})

const TodoList = ({ todos, toggleTodo }) => {
  return (
    <ul className="todo-list">
      {todos.map(item => (
        <TodoItem key={item.id} {...item} onClick={toggleTodo} />
      ))}
    </ul>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
