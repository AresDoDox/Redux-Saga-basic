import * as uiConstants from './../constants/ui'

const initialState = {
  showLoading: false
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case uiConstants.SHOW_GLOBAL_LOADING: {
      return {
        ...state,
        showLoading: true
      }
    }
    case uiConstants.HIDE_GLOBAL_LOADING: {
      return {
        ...state,
        showLoading: false
      }
    }
    default:
      return state
  }
}

export default reducer
