import { Controller } from "@hotwired/stimulus"
import React from "react"
import ReactDOM from "react-dom"

// Connects to data-controller="react"
export default class extends Controller {
  connect() {
    console.log("connected to react controller")
  }
}
