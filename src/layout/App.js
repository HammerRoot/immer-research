import React from 'react'

import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import FilterVisible from '../containers/FilterVisible'
import './App.css'

const App = () => {
  return (
    <div className="App">
      <AddTodo />
      <VisibleTodoList />
      <FilterVisible />
    </div>
  )
}

export default App
