import React, { Component } from "react"

import "./JobDetails.css"

class JobDetails extends Component {
  render() {
    let selectedJob = <p>Please Select a Job</p>
    if (this.props.job) {
      selectedJob = (
        <div>
          <p>{this.props.job.description}</p>
          <img src={this.props.job.company_logo} />
        </div>
      )
    }

    return <div className="JobDetails">{selectedJob}</div>
  }
}

export default JobDetails
