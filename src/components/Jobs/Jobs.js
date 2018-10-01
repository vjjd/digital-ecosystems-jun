import React, { Component } from "react"
import { connect } from "react-redux"

import Job from "../Job/Job"
import * as actionTypes from "../../store/actions"
import { loadJobs } from "../../store/actions"

class Jobs extends Component {
  handleScroll(props) {
    const windowBottom =
      "innerHeight" in window
        ? window.innerHeight + window.pageYOffset
        : document.documentElement.offsetHeight + window.pageYOffset

    if (
      windowBottom >= document.body.scrollHeight &&
      this.props.isToggleScroll
    ) {
      props.toggleScrollHandler()
      props.loadJobsHandler(
        props.term,
        props.location,
        props.isFullTime,
        props.page
      )
    }
  }

  componentDidMount = () => {
    window.addEventListener("scroll", () => this.handleScroll(this.props))
  }

  render() {
    return (
      <div className="Jobs">
        {this.props.jobs.length ? (
          this.props.jobs.map(job => {
            return (
              <Job
                title={job.title}
                company={job.company}
                location={job.location}
                id={job.id}
                key={job.id}
                onClick={() => this.props.jobSelectedHandler(job)}
              />
            )
          })
        ) : (
          <p>Jobs list is empty</p>
        )}
      </div>
    )
  }
}
const mapStateToProps = state => {
  return {
    jobs: state.jobs,
    term: state.term,
    location: state.location,
    isFullTime: state.isFullTime,
    page: state.page,
    isToggleScroll: state.isToggleScroll,
  }
}
const mapDispatchToProps = dispatch => {
  return {
    toggleScrollHandler: () => dispatch({ type: actionTypes.TOGGLE_SCROLL }),
    jobSelectedHandler: job => dispatch({ type: actionTypes.SELECT_JOB, job }),
    loadJobsHandler: (term, location, isFullTime, page) =>
      dispatch(loadJobs({ term, location, isFullTime, page })),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Jobs)
