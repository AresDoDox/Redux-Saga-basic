import * as modalTaskConstants from './../constants/modalTask'
// import { toastError } from './../helpers/toastHelper'

const initialState = {
  isShowModal: false,
  title: '',
  content: null
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case modalTaskConstants.SHOW_MODAL:
      return {
        ...state,
        isShowModal: true
      }
    case modalTaskConstants.HIDE_MODAL:
      return {
        ...state,
        isShowModal: false,
        title: '',
        content: null
      }
    case modalTaskConstants.CHANGE_TITLE_MODAL:
      const { title } = action.payload
      return {
        ...state,
        title
      }
    default:
      return state
  }
}

export default reducer
