import React from 'react'
import { connect } from 'react-redux'

import { VisibilityFilters } from '../config'
import { toggleTodo } from '../actions'
import TodoItem from '../components/TodoItem'

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return todos
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter(t => t.completed)
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter(t => !t.completed)
    default:
      throw new Error('Unknown filter: ' + filter)
  }
}

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
