import React, { Component } from "react"
import { BrowserRouter } from "react-router-dom"
import axios from "axios"
import jsonpAdapter from "axios-jsonp"

import "./App.css"
import { Job, JobDetails, Search } from "./components"

class App extends Component {
  state = {
    msg: "It's the Digital Ecosystems App",
    jobs: [],
    term: "",
    location: "",
    isFullTime: false,
    jobsCount: 0,
    selectedJob: null,
  }

  onChangeTermHandler = event => {
    this.setState({ term: event.target.value })
  }

  onChangeLocationHandler = event => {
    this.setState({ location: event.target.value })
  }

  toggleFulltime = () => {
    const { isFullTime } = this.state
    this.setState({ isFullTime: !isFullTime })
  }

  onClickSearchHandler = () => {
    const { location = "", term = "", isFullTime } = this.state
    const url = `https://jobs.github.com/positions.json?description=${term}&location=${location}&full_time=${isFullTime}`

    axios({
      url: url,
      adapter: jsonpAdapter,
    })
      .then(response => {
        const jobs = response.data
        this.setState({ jobs, jobsCount: jobs.length })
      })
      .catch(error => {
        console.log(error)
      })
  }

  jobSelectedHandler = job => {
    this.setState({ selectedJob: job })
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <h1>{this.state.msg}</h1>

          <Search
            term={this.state.term}
            location={this.state.location}
            onChangeTerm={this.onChangeTermHandler}
            onChangeLocation={this.onChangeLocationHandler}
            onClickSearch={this.onClickSearchHandler}
            onChangeFulltime={this.toggleFulltime}
          />

          <p>Jobs Count: {this.state.jobsCount}</p>

          <JobDetails job={this.state.selectedJob} />

          {this.state.jobs.map(job => {
            return (
              <Job
                title={job.title}
                company={job.company}
                location={job.location}
                id={job.id}
                key={job.id}
                onClick={() => this.jobSelectedHandler(job)}
              />
            )
          })}
        </div>
      </BrowserRouter>
    )
  }
}

export default App
