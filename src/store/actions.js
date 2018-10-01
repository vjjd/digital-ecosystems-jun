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
    page: page++,
    isToggleScroll,
  }
}

export const loadJobs = searchData => {
  const { location, term, isFullTime, page } = searchData
  const url = `https://jobs.github.com/positions.json?description=${term}&location=${location}&full_time=${isFullTime}&page=${page}`
  let isToggleScroll = true

  return dispatch => {
    axios({
      url: url,
      adapter: jsonpAdapter,
    })
      .then(response => {
        const jobs = response.data
        if (jobs.length < 50) {
          isToggleScroll = false
          dispatch(saveJobs(jobs, page, isToggleScroll))
        } else {
          dispatch(saveJobs(jobs, page, isToggleScroll))
        }
      })
      .catch(error => {
        console.log(error)
      })
  }
}

export const saveSearch = jobs => {
  return {
    type: CLICK_SEARCH,
    jobs: jobs,
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
