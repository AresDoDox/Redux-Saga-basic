import * as uiConstants from './../constants/ui'

export const showLoading = () => ({
  type:   uiConstants.SHOW_GLOBAL_LOADING
})

export const hideLoading = () => ({
  type:   uiConstants.HIDE_GLOBAL_LOADING
})
