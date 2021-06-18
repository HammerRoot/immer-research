import React from 'react'

import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoListImmer'
import FilterVisible from '../containers/FilterVisible'
import './index.css'

const App = () => {
  return (
    <div className="App">
      使用immer的redux:
      <AddTodo type="immer" />
      <VisibleTodoList />
      <FilterVisible type="immer" />
    </div>
  )
}

export default App
