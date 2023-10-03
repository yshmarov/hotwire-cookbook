import { Controller } from "@hotwired/stimulus"

// HTML example
// <form data-controller="debounce">
//   <input type="text" name="query" data-action="input->debounce#delayedsubmit" autocomplete="off"/>
// </form>

// Connects to data-controller="debounce"
export default class extends Controller {  
  delayedsubmit() {
    let delay = 500
    // clearTimeout(this.timeout) // add this if you want to restart the timer on each keypress
    this.timeout = setTimeout(() => this.element.submit(), delay)
    // this.timeout = setTimeout(() => this.element.requestSubmit(), delay)
  }
}
