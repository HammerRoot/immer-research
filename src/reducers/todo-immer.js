import produce from 'immer'

const initialTodos = [
  {
    text: 'lession-1',
    done: false,
    id: 'immmer-a',
  },
  {
    text: 'lession-2',
    done: false,
    id: 'immmer-b',
  },
]

// const nextTodos = produce(initialTodos, draft => {
//   draft[0].done = true
// })

// console.log('nextTodos.length', nextTodos.length)
// console.log('initialTodos[0].done', initialTodos[0].done)
// console.log('nextTodos[0].done', nextTodos[0].done)

// console.log('initialTodos === nextTodos', initialTodos === nextTodos)
// console.log('initialTodos[0] === nextTodos[0]', initialTodos[0] === nextTodos[0])
// console.log('initialTodos[1] === nextTodos[1]', initialTodos[1] === nextTodos[1])

const todos = produce((draft, action) => {
  switch (action.type) {
    case 'ADD_TODO_IMMER':
      draft.push({
        id: action.id,
        text: action.text,
        completed: false,
      })
      break

    case 'TOGGLE_TODO_IMMER':
      draft.forEach(item => {
        if (item.id === action.id) {
          item.completed = !item.completed
        }
      })
      break
  }
}, initialTodos)

export default todos
