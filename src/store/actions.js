import axios from "axios"
import jsonpAdapter from "axios-jsonp"

export const CHANGE_TERM = "CHANGE_TERM"
export const CHANGE_LOCATION = "CHANGE_LOCATION"
export const SELECT_JOB = "SELECT_JOB"
export const CLICK_SEARCH = "CLICK_SEARCH"
export const TOGGLE_FULLTIME = "TOGGLE_FULLTIME"

export const saveSearch = jobs => {
  return {
    type: CLICK_SEARCH,
    jobs: jobs,
    jobsCount: jobs.length,
  }
}

export const clickSearch = searchData => {
  const { location, term, isFullTime } = searchData
  const url = `https://jobs.github.com/positions.json?description=${term}&location=${location}&full_time=${isFullTime}`

  return dispatch => {
    axios({
      url: url,
      adapter: jsonpAdapter,
    })
      .then(response => {
        const jobs = response.data
        dispatch(saveSearch(jobs))
      })
      .catch(error => {
        console.log(error)
      })
  }
}
