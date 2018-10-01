import React, { Component } from "react"
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom"
import { connect } from "react-redux"

import "./App.css"
import { Job, JobDetails, Search } from "./components"
import * as actionTypes from "./store/actions"
import { clickSearch } from "./store/actions"

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route
            path="/"
            exact
            render={() => (
              <div>
                <h1>{this.props.msg}</h1>

                <p>Jobs Count: {this.props.jobsCount}</p>

                <Search
                  term={this.props.term}
                  location={this.props.location}
                  onChangeTerm={this.props.onChangeTermHandler}
                  onChangeLocation={this.props.onChangeLocationHandler}
                  onClickSearch={() =>
                    this.props.onClickSearchHandler(
                      this.props.location,
                      this.props.term,
                      this.props.isFullTime
                    )
                  }
                  onChangeFulltime={this.props.toggleFulltime}
                />

                {this.props.jobs.map(job => {
                  return (
                    <NavLink to={`/details/${job.id}`}>
                      <Job
                        title={job.title}
                        company={job.company}
                        location={job.location}
                        id={job.id}
                        key={job.id}
                        onClick={() => this.props.jobSelectedHandler(job)}
                      />
                    </NavLink>
                  )
                })}
              </div>
            )}
          />

          {this.props.jobs.map(job => (
            <Route
              path={`/details/${job.id}`}
              exact
              key={job.id}
              render={() => <JobDetails job={this.props.selectedJob} />}
            />
          ))}
        </div>
      </Router>
    )
  }
}

const mapStateToProps = state => {
  return {
    msg: state.msg,
    selectedJob: state.selectedJob,
    jobs: state.jobs,
    term: state.term,
    location: state.location,
    isFullTime: state.isFullTime,
    jobsCount: state.jobsCount,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onChangeTermHandler: event =>
      dispatch({ type: actionTypes.CHANGE_TERM, input: event.target.value }),
    onChangeLocationHandler: event =>
      dispatch({
        type: actionTypes.CHANGE_LOCATION,
        input: event.target.value,
      }),
    jobSelectedHandler: job => dispatch({ type: actionTypes.SELECT_JOB, job }),
    onClickSearchHandler: (location, term, isFullTime) =>
      dispatch(clickSearch({ location, term, isFullTime })),
    toggleFulltime: () => dispatch({ type: actionTypes.TOGGLE_FULLTIME }),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
