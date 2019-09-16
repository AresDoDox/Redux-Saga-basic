import * as taskConstants from './../constants/task'
import { toastError } from './../helpers/toastHelper'

const initialState = {
  listTask: []
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case taskConstants.FETCH_TASK:
      return {
        ...state,
        listTask: []
      }
    case taskConstants.FETCH_TASK_SUCCESS:
      return {
        ...state,
        listTask: action.payload.data
      }
    case taskConstants.FETCH_TASK_FAILED:
      toastError(action.payload.error)
      return {
        ...state,
        listTask: []
      }
    case taskConstants.FILTER_TASK_SUCCESS:
      return {
        ...state,
        listTask: action.payload.data
      }
    default:
      return state
  }
}

export default reducer
