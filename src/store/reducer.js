import * as actionTypes from "./actions"

const initialState = {
  msg: "This is the Digital Ecosystems App",
  jobs: [],
  term: "",
  location: "",
  isFullTime: false,
  selectedJob: null,
  page: 1,
  isToggleScroll: true,
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_TERM:
      return {
        ...state,
        term: action.input,
      }
    case actionTypes.CHANGE_LOCATION:
      return { ...state, location: action.input }
    case actionTypes.SELECT_JOB:
      return {
        ...state,
        selectedJob: action.job,
      }
    case actionTypes.TOGGLE_FULLTIME:
      return {
        ...state,
        isFullTime: !state.isFullTime,
      }
    case actionTypes.CLICK_SEARCH:
      return {
        ...state,
        jobs: action.jobs,
      }
    case actionTypes.LOAD_JOBS:
      console.log("[Reducer.js LOAD_JOBS]", action)
      const page = action.page + 1
      const jobs = state.jobs.concat(action.jobs)
      return {
        ...state,
        jobs,
        page,
        isToggleScroll: action.isToggleScroll,
      }
    case actionTypes.TOGGLE_SCROLL:
      return {
        ...state,
        isToggleScroll: !state.isToggleScroll,
      }
  }
  return state
}

export default reducer
