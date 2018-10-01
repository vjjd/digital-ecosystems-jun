import React, { Component } from "react"
import { connect } from "react-redux"
import { NavLink } from "react-router-dom"

const HtmlToReactParser = require("html-to-react").Parser

import "./JobDetails.css"

class JobDetails extends Component {
  render() {
    const htmlToReactParser = new HtmlToReactParser()
    return (
      <div className="JobDetails">
        <NavLink to="/"> Back to Search</NavLink>
        <div>
          <p>Title: {this.props.job.title}</p>
          <p>Company: {this.props.job.company}</p>
        </div>
        <img src={this.props.job.company_logo} />
        {htmlToReactParser.parse(this.props.job.description)}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    job: state.selectedJob,
  }
}

export default connect(mapStateToProps)(JobDetails)
