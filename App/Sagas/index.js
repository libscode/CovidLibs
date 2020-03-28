import { takeLatest, all } from 'redux-saga/effects'
import API from '../Services/Api'
import FixtureAPI from '../Services/FixtureApi'
import DebugConfig from '../Config/DebugConfig'

// Types
import { StartupTypes } from '../Redux/StartupRedux'
import { IndonesiaTypes } from '../Redux/IndonesiaRedux'

// Action
import { startup } from './StartupSagas'

// Indonesia
import {
  getSummary,
  getProvinsi,
  getDaily
} from './IndonesiaSagas'

const api = DebugConfig.useFixtures ? FixtureAPI : API.create()

export default function * root () {
  yield all([
    takeLatest(StartupTypes.STARTUP, startup),
    takeLatest(IndonesiaTypes.GET_SUMMARY_REQUEST, getSummary, api),
    takeLatest(IndonesiaTypes.GET_PROVINSI_REQUEST, getProvinsi, api),
    takeLatest(IndonesiaTypes.GET_DAILY_REQUEST, getDaily, api)
  ])
}
