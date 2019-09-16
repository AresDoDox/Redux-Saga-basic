import { fork, take, call, put, delay, takeLatest, select } from 'redux-saga/effects'
import * as taskTypes from './../constants/task'
import { getList } from './../apis/task'
import { STATUS_CODE } from './../constants/index'
import { fetchListTaskSuccess, filterTaskSuccess } from './../actions/task'
import { showLoading, hideLoading } from './../actions/ui'

function* watchFetchListTaskAction() {
  // Vòng lặp vô tận
  while (true) {
    yield take(taskTypes.FETCH_TASK)
    yield put(showLoading())
    const res = yield call(getList)
    const { data, status } = res
    if (status === STATUS_CODE.SUCCESS) {
      // dispatch action fetch success
      yield put(fetchListTaskSuccess(data))
    } else {
      // dispatch action failed
      // yield put(fetchListTaskFailed(data))
    }
    yield delay(1000)
    yield put(hideLoading())
  }
}

function* filterTaskSaga({ payload }) {
  yield delay(500)
  const { keyword } = payload
  const listTask = yield select(state => state.tasks.listTask)
  const filterListTasks = listTask.filter(task => task.title.trim().toLowerCase().indexOf(keyword.trim().toLowerCase()) !== -1
    || task.content.trim().toLowerCase().indexOf(keyword.trim().toLowerCase()) !== -1 )
  console.log(filterListTasks)
  yield put(filterTaskSuccess(filterListTasks))
}

function* rootSaga() {
  yield fork(watchFetchListTaskAction)
  yield takeLatest(taskTypes.FILTER_TASK, filterTaskSaga)
}

export default rootSaga
