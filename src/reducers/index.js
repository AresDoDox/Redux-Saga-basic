import { combineReducers } from 'redux'
import uiReducer from './ui'
import taskReducer from './task'
import modalTaskReducer from './modalTask'

const rootReducers  = combineReducers({
  tasks: taskReducer,
  modalTask: modalTaskReducer,
  ui: uiReducer
})

export default rootReducers
