let nextTodoId = 0

export const addTodo = text => ({
  type: 'ADD_TODO',
  id: nextTodoId++,
  text,
})

export const toggleTodo = id => ({
  type: 'TOGGLE_TODO',
  id,
})

export const setVisibilityFilter = filter => ({
  type: 'SET_VISIBILITY_FILTER',
  filter,
})

/** ------------- immer start ------------ */
export const addTodoImmer = text => ({
  type: 'ADD_TODO_IMMER',
  id: `immer-${nextTodoId++}`,
  text,
})

export const toggleTodoImmer = id => ({
  type: 'TOGGLE_TODO_IMMER',
  id,
})

export const setVisibilityFilterImmer = filter => ({
  type: 'SET_VISIBILITY_FILTER_IMMER',
  filter,
})

/** ------------- immer end ------------  */
