import React, { Component } from "react"

import Aux from "../../hoc/Aux"
import "./Search.css"

class Search extends Component {
  render() {
    return (
      <Aux>
        <div className="Search">
          <input
            type="text"
            onChange={event => this.props.onChangeTerm(event)}
            placeholder="Term"
          />
          <input
            type="text"
            onChange={event => this.props.onChangeLocation(event)}
            placeholder="Location"
          />
          <span>Full Time</span>
          <input
            type="checkbox"
            onChange={event => this.props.onChangeFulltime(event)}
            value={this.props.fullTime}
          />
          <button onClick={this.props.onClickSearch}>Search</button>
        </div>
      </Aux>
    )
  }
}

export default Search
