import React, { Component } from "react"

import "./JobDetails.css"

class JobDetails extends Component {
  render() {
    return (
      <div className="JobDetails">
        {this.props.job ? (
          <div>
            <p>{this.props.job.description}</p>
            <img src={this.props.job.company_logo} />
          </div>
        ) : (
          <p>Please Select a Job</p>
        )}
      </div>
    )
  }
}

export default JobDetails
