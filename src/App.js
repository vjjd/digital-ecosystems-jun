import React, { Component } from "react"
import { BrowserRouter } from "react-router-dom"
import JobSearchEngine from "./containers/JobSearchEngine"

import "./App.css"

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <JobSearchEngine />
        </div>
      </BrowserRouter>
    )
  }
}

export default App
