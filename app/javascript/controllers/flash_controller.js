import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="flash"
export default class extends Controller {
  connect() {
    setTimeout(() => {
      this.close()
    }, 5000)
  }

  close() {
    this.element.remove()
  }
}
