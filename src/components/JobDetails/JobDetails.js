import React, { Component } from "react"

class JobDetails extends Component {
  componentDidMount() {
    console.log(this.props)
  }
  render() {
    let selectedJob = <p>Please Select a Job</p>
    if (this.props.job) {
      selectedJob = (
        <div>
          <p>Description: {this.props.job.description}</p>
          <p>Company logo url: {this.props.job.company_logo}</p>
        </div>
      )
    }

    return <div className="JobDetails">{selectedJob}</div>
  }
}

export default JobDetails
