import React, { Component } from "react"
import { connect } from "react-redux"

const HtmlToReactParser = require("html-to-react").Parser

import "./JobDetails.css"

class JobDetails extends Component {
  render() {
    const htmlToReactParser = new HtmlToReactParser()
    return (
      <div className="JobDetails">
        {this.props.job ? (
          <div>
            {htmlToReactParser.parse(this.props.job.description)}
            <img src={this.props.job.company_logo} />
          </div>
        ) : (
          <p>Please Select a Job</p>
        )}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    job: state.job,
  }
}

export default connect(mapStateToProps)(JobDetails)
