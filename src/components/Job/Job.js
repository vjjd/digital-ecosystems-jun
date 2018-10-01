import React, { Component } from "react"
import { NavLink } from "react-router-dom"

import Aux from "../../hoc/Aux"
import "./Job.css"

class Job extends Component {
  render() {
    return (
      <Aux>
        <div className="Job">
          <p>Title: {this.props.title}</p>
          <p>Location: {this.props.location}</p>
          <p>Company: {this.props.company}</p>
          <NavLink
            to={`/details/${this.props.id}`}
            onClick={this.props.onClick}
          >
            View job details
          </NavLink>
        </div>
      </Aux>
    )
  }
}

export default Job
