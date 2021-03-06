import { takeLatest, all } from 'redux-saga/effects'
import API from '../Services/Api'
import FixtureAPI from '../Services/FixtureApi'
import DebugConfig from '../Config/DebugConfig'

/* ------------- Types ------------- */

import { StartupTypes } from '../Redux/StartupRedux'
import { GithubTypes } from '../Redux/GithubRedux'
import { TodosTypes } from '../Redux/TodosRedux'

/* ------------- Sagas ------------- */

import { startup } from './StartupSagas'
import { getUserAvatar } from './GithubSagas'
import { getTodos, addTodo } from './TodosSagas'

/* ------------- API ------------- */

// The API we use is only used from Sagas, so we create it here and pass along
// to the sagas which need it.
const api = DebugConfig.useFixtures ? FixtureAPI : API.create()

/* ------------- Connect Types To Sagas ------------- */

export default function * root () {
  yield all([
    // some sagas only receive an action
    takeLatest(StartupTypes.STARTUP, startup),

    // some sagas receive extra parameters in addition to an action
    takeLatest(TodosTypes.USER_REQUEST, getUserAvatar, api),

    // some sagas receive extra parameters in addition to an action
    takeLatest(GithubTypes.TODOS_REQUEST, getTodos, api),

    // some sagas receive extra parameters in addition to an action
    takeLatest(GithubTypes.TODOS_ADD_REQUEST, addTodo, api)
  ])
}
