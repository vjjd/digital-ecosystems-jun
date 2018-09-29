import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App"
import registerServiceWorker from "./registerServiceWorker"
import axios from "axios"

axios.defaults.baseURL = "https://jobs.github.com/positions.json?"

ReactDOM.render(<App />, document.getElementById("root"))
registerServiceWorker()
