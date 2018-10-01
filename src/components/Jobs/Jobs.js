import React, { Component } from "react"
import { connect } from "react-redux"

import Job from "../Job/Job"
import * as actionTypes from "../../store/actions"

class Jobs extends Component {
  handleScroll() {
    const windowBottom =
      "innerHeight" in window
        ? window.innerHeight + window.pageYOffset
        : document.documentElement.offsetHeight + window.pageYOffset

    if (windowBottom >= document.body.scrollHeight) {
      console.log("bottom reached")
    }
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll)
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll)
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
  }
}
const mapDispatchToProps = dispatch => {
  return {
    jobSelectedHandler: job => dispatch({ type: actionTypes.SELECT_JOB, job }),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Jobs)
