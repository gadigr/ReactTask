let nextTodoId = 0
export const addTodo = (todo) => ({
  type: 'ADD_TODO',
  id: ++nextTodoId,
  todo
})

export const setVisibilityFilter = (filter) => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})

export const toggleTodo = (id) => ({
  type: 'TOGGLE_TODO',
  id
})
