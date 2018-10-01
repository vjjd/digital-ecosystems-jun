import React, { Component } from "react"
import { connect } from "react-redux"
import { NavLink } from "react-router-dom"
const HtmlToReactParser = require("html-to-react").Parser

import "./JobDetails.css"
import * as actionTypes from "../../store/actions"

class JobDetails extends Component {
  componentDidMount() {
    window.scrollTo(0, 0)
    if (this.props.isToggleScroll) {
      this.props.toggleScrollHandler()
    }
  }
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

const mapStateToProps = state => {
  return {
    job: state.selectedJob,
    isToggleScroll: state.isToggleScroll,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    toggleScrollHandler: () => dispatch({ type: actionTypes.TOGGLE_SCROLL }),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(JobDetails)
