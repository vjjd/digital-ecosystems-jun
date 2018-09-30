import React, { Component } from "react"
import { connect } from "react-redux"

import Aux from "../../hoc/Aux"
import "./Search.css"

class Search extends Component {
  render() {
    return (
      <Aux>
        <div className="Search">
          <input
            type="text"
            onChange={this.props.onChangeTerm}
            placeholder="Term"
          />
          <input
            type="text"
            onChange={this.props.onChangeLocation}
            placeholder="Location"
          />
          <span>
            Full Time
            <input
              type="checkbox"
              onChange={this.props.onChangeFulltime}
              value={this.props.fullTime}
            />
            <button onClick={this.props.onClickSearch}>Search</button>
          </span>
        </div>
      </Aux>
    )
  }
}

function mapStateToProps(state) {
  return {
    fullTime: state.fullTime,
  }
}

export default connect(mapStateToProps)(Search)
