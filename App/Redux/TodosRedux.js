import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  todosRequest: ['data'],
  todosSuccess: ['payload'],
  todosFailure: null,
  todosAddRequest: ['data'],
  todosAddSuccess: ['payload'],
  todosAddFailure: null
})

export const TodosTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  data: null,
  fetching: null,
  payload: null,
  error: null
})

/* ------------- Selectors ------------- */

export const TodosSelectors = {
  getData: state => state.data
}

/* ------------- Reducers ------------- */

// request the data from an api
export const request = (state, { data }) =>
  state.merge({ fetching: true, data, payload: null })

// successful api lookup
export const success = (state, action) => {
  const { payload } = action
  return state.merge({ fetching: false, error: null, payload })
}

// Something went wrong somewhere.
export const failure = state =>
  state.merge({ fetching: false, error: true, payload: null })

// request the add data to an api
export const addRequest = (state, { data }) =>
  state.merge({ fetching: true, data, payload: null })

// successful api add
export const addSuccess = (state, action) => {
  const { payload } = action
  return state.merge({ fetching: false, error: null, payload })
}

// Something went wrong somewhere.
export const addFailure = state =>
  state.merge({ fetching: false, error: true, payload: null })

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.TODOS_REQUEST]: request,
  [Types.TODOS_SUCCESS]: success,
  [Types.TODOS_FAILURE]: failure,
  [Types.TODOS_ADD_REQUEST]: addRequest,
  [Types.TODOS_ADD_SUCCESS]: addSuccess,
  [Types.TODOS_ADD_FAILURE]: addFailure
})
