import { Controller } from "@hotwired/stimulus"

// HTML example
// <form data-controller="form-reset">
//  <input type="search" data-action="input->tablesearch#search" placeholder="First or Last name">
//  </form>

// Connects to data-controller="form-reset"
export default class extends Controller {
  connect() {
    this.element.reset()
  }
}
