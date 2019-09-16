import axiosService from './../commom/axiosService'
import { API_ENPOINT } from './../constants'

const url = 'tasks'

export const getList =  () => {
  return axiosService.get(`${API_ENPOINT}/${url} `)
}
