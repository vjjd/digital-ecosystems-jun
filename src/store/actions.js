import axios from "axios"
import jsonpAdapter from "axios-jsonp"

export const CHANGE_TERM = "CHANGE_TERM"
export const CHANGE_LOCATION = "CHANGE_LOCATION"
export const SELECT_JOB = "SELECT_JOB"
export const CLICK_SEARCH = "CLICK_SEARCH"
export const TOGGLE_FULLTIME = "TOGGLE_FULLTIME"
export const LOAD_JOBS = "LOAD_JOBS"
export const TOGGLE_SCROLL = "TOGGLE_SCROLL"

export const saveJobs = (jobs, page, isToggleScroll) => {
  return {
    type: LOAD_JOBS,
    jobs,
    page,
    isToggleScroll,
  }
}
export const saveSearch = jobs => {
  return {
    type: CLICK_SEARCH,
    jobs: jobs,
  }
}

export const loadJobs = searchData => {
  const { location, term, isFullTime, page = 0 } = searchData
  const url = `https://jobs.github.com/positions.json?description=${term}&location=${location}&full_time=${isFullTime}&page=${page}`

  return dispatch => {
    axios({
      url: url,
      adapter: jsonpAdapter,
    })
      .then(response => {
        const jobs = response.data

        if (page) {
          if (jobs.length < 50) {
            dispatch(saveJobs(jobs, page, false))
          } else {
            dispatch(saveJobs(jobs, page, true))
          }
        } else {
          dispatch(saveSearch(jobs))
        }
      })
      .catch(error => {
        console.log(error)
      })
  }
}
