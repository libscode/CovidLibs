import { call, put } from 'redux-saga/effects'
import IndonesiaActions from '../Redux/IndonesiaRedux'
import { ErrorHandler } from '../Lib/ErrorHandler'

export function* getSummary(api, action) {
  const { data } = action
  const response = yield call(api.getSummary, data)

  if (response.ok) {
    yield put(IndonesiaActions.getSummarySuccess(response.data))
  } else {
    ErrorHandler(response)
    yield put(IndonesiaActions.getSummaryFailure(response))
  }
}

export function* getProvinsi(api, action) {
  const { data } = action
  const response = yield call(api.getProvinsi, data)

  if (response.ok) {
    yield put(IndonesiaActions.getProvinsiSuccess(response.data.data))
  } else {
    ErrorHandler(response)
    yield put(IndonesiaActions.getProvinsiFailure(response))
  }
}

export function* getDaily(api, action) {
  const { data } = action
  const response = yield call(api.getDaily, data)

  if (response.ok) {
    yield put(IndonesiaActions.getDailySuccess(response.data.data))
  } else {
    ErrorHandler(response)
    yield put(IndonesiaActions.getDailyFailure(response))
  }
}
