import React from 'react'
import { connect } from 'react-redux'

import { getVisibleTodos } from '../config'
import { toggleTodoImmer } from '../actions'
import TodoItem from '../components/TodoItem'

const mapStateToProps = state => ({
  todos: getVisibleTodos(state.todosImmer, state.visibilityFilterImmer.filter),
})

const mapDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch(toggleTodoImmer(id)),
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
