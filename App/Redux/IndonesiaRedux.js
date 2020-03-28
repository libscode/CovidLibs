import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

const { Types, Creators } = createActions({
  getSummaryRequest: ['data'],
  getSummarySuccess: ['data'],
  getSummaryFailure: ['error'],

  getProvinsiRequest: ['data'],
  getProvinsiSuccess: ['data'],
  getProvinsiFailure: ['error'],

  getDailyRequest: ['data'],
  getDailySuccess: ['data'],
  getDailyFailure: ['error']
})

export const IndonesiaTypes = Types
export default Creators

export const INITIAL_STATE = Immutable({
  summary: { data: null, fetching: false, error: null },
  provinsi: { data: null, fetching: false, error: null },
  daily: { data: null, fetching: false, error: null }
})

export const getSummaryRequest = (state, { data }) =>
  state.merge({ ...state, summary: { ...state.summary, fetching: true, error: null } })
export const getSummarySuccess = (state, { data }) =>
  state.merge({ ...state, summary: { ...state.summary, data, fetching: false, error: null } })
export const getSummaryFailure = (state, { error }) =>
  state.merge({ ...state, summary: { ...state.summary, fetching: false, error } })

export const getProvinsiRequest = (state, { data }) =>
  state.merge({ ...state, provinsi: { ...state.provinsi, fetching: true, error: null } })
export const getProvinsiSuccess = (state, { data }) =>
  state.merge({ ...state, provinsi: { ...state.provinsi, data, fetching: false, error: null } })
export const getProvinsiFailure = (state, { error }) =>
  state.merge({ ...state, provinsi: { ...state.provinsi, fetching: false, error } })

export const getDailyRequest = (state, { data }) =>
  state.merge({ ...state, daily: { ...state.daily, fetching: true, error: null } })
export const getDailySuccess = (state, { data }) =>
  state.merge({ ...state, daily: { ...state.daily, data, fetching: false, error: null } })
export const getDailyFailure = (state, { error }) =>
  state.merge({ ...state, daily: { ...state.daily, fetching: false, error } })

export const reducer = createReducer(INITIAL_STATE, {
  [Types.GET_SUMMARY_REQUEST]: getSummaryRequest,
  [Types.GET_SUMMARY_SUCCESS]: getSummarySuccess,
  [Types.GET_SUMMARY_FAILURE]: getSummaryFailure,

  [Types.GET_PROVINSI_REQUEST]: getProvinsiRequest,
  [Types.GET_PROVINSI_SUCCESS]: getProvinsiSuccess,
  [Types.GET_PROVINSI_FAILURE]: getProvinsiFailure,

  [Types.GET_DAILY_REQUEST]: getDailyRequest,
  [Types.GET_DAILY_SUCCESS]: getDailySuccess,
  [Types.GET_DAILY_FAILURE]: getDailyFailure,
})
