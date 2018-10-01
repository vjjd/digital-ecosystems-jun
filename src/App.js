import React, { Component } from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import { connect } from "react-redux"

import "./App.css"
import { JobDetails, Search, Jobs } from "./components"
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
                <Search
                  onChangeTerm={this.props.onChangeTermHandler}
                  onChangeLocation={this.props.onChangeLocationHandler}
                  onClickSearch={() =>
                    this.props.onClickSearchHandler(
                      this.props.location,
                      this.props.term,
                      this.props.isFullTime
                    )
                  }
                  onChangeFulltime={this.props.toggleFulltimeHandler}
                />
                <Jobs jobs={this.props.jobs} />
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
    toggleFulltimeHandler: () =>
      dispatch({ type: actionTypes.TOGGLE_FULLTIME }),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
