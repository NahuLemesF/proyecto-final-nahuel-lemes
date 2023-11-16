export const initialState = {
  isLoggedUser: false,
  tasks: [],
  currentTask: null,
  userId: globalThis.localStorage.getItem('userId')
}

export const reducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN_USER':
      return {
        ...state,
        isLoggedUser: true
      }
    case 'CREATE_TASK':
      return {
        ...state,
        tasks: [...state.tasks, action.payload]
      }
    case 'UPDATE_TASK':
      return {
        ...state,
        tasks: state.tasks.map(task => task._id === action.payload._id ? action.payload : task)
      }
    case 'GET_TASKS':
      return {
        ...state,
        task: action.payload
      }
    case 'SET_CURRENT_TASK':
      return {
        ...state,
        currentTask: action.payload
      }
    case 'DELETE_TASK':
      return {
        ...state,
        tasks: state.tasks.filter(task => task._id !== action.payload)
      }

    default:
      return state
  }
}
