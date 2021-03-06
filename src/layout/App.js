import React from 'react'

import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import FilterVisible from '../containers/FilterVisible'
import './index.css'

const App = () => {
  return (
    <div className="App">
      原始的redux:
      <AddTodo />
      <VisibleTodoList />
      <FilterVisible />
    </div>
  )
}

export default App
