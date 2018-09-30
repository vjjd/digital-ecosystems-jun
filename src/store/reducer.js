import axios from "axios"
import jsonpAdapter from "axios-jsonp"

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
        term: action.event.target.value,
      }
    case actionTypes.CHANGE_LOCATION:
      return { ...state, location: action.event.target.value }
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
      const { location, term, isFullTime } = action.searchData
      const url = `https://jobs.github.com/positions.json?description=${term}&location=${location}&full_time=${isFullTime}`

      console.log(url)

    //   axios({
    //     url: url,
    //     adapter: jsonpAdapter,
    //   })
    //     .then(response => {
    //       const jobs = response.data
    //       console.log(jobs)
    //       return {
    //         ...state,
    //         jobs,
    //         jobsCount: jobs.length,
    //       }
    //     })
    //     .catch(error => {
    //       console.log(error)
    //     })
  }
  return state
}

export default reducer
