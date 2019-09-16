import * as modalTaskConstants from './../constants/modalTask'

export const showModal = () => {
  return {
    type: modalTaskConstants.SHOW_MODAL
  }
}

export const hideModal = () => {
  return {
    type: modalTaskConstants.HIDE_MODAL
  }
}

export const changeTitleModal = title => {
  return {
    type: modalTaskConstants.CHANGE_TITLE_MODAL,
    payload: {
      title
    }
  }
}
