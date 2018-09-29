import React, { Component } from "react"

import Aux from "../../hoc/Aux"
import "./Job.css"

class Job extends Component {
  render() {
    return (
      <Aux>
        <div className="Job">
          <div onClick={this.props.onClick}>
            <p>Title: {this.props.title}</p>
            <p>Location: {this.props.location}</p>
            <p>Company: {this.props.company}</p>
            <p>ID: {this.props.id}</p>
          </div>
        </div>
      </Aux>
    )
  }
}

export default Job
