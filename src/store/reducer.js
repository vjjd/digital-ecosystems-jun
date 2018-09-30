import * as actionTypes from "./actions"

const initialState = {
  msg: "It's the Digital Ecosystems App",
  jobs: [],
  term: "",
  location: "",
  isFullTime: false,
  jobsCount: 0,
  selectedJob: null,
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
  }
  return state
}

export default reducer
