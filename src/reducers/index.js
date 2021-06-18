import { combineReducers } from 'redux'

import todos from './todo'
import todosImmer from './todo-immer'
import visibilityFilter from './visibility-filter'
import visibilityFilterImmer from './visibility-filter-immer'

export default combineReducers({
  todos,
  todosImmer,
  visibilityFilter,
  visibilityFilterImmer,
})
