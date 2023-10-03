import { Controller } from '@hotwired/stimulus'

export default class extends Controller {
  static targets = ['cell']

  // search withing the table
  search(event) {
    console.log('searching')
    const query = event.target.value.toLowerCase()
    this.cellTargets.forEach(cell => {
      // polaris table does not let us access the table rows directly
      const row = cell.closest('tr')
      if (row.closest('thead')) return
      // get innerText of the cells in the row
      const text = Array.from(row.children).map(td => td.innerText.toLowerCase())
      // hide the row if query is not found in the row
      row.style.display = text.some(td => td.includes(query)) ? '' : 'none'
      // disable input elements in row if query is not found in the row
      Array.from(row.querySelectorAll('input')).forEach(input => {
        input.disabled = !text.some(td => td.includes(query))
      })
    })
  }
  
  sort(event) {
    console.log('sorting')
    const table = event.target.closest('table')
    const rows = Array.from(table.tBodies[0].querySelectorAll('tr'))
    const index = event.target.closest('th').cellIndex
    const direction = event.target.dataset.sortDirection || 'ascending'
    const multiplier = direction === 'ascending' ? 1 : -1
    const sortedRows = rows.sort((a, b) => {
      const aText = a.children[index].innerText
      const bText = b.children[index].innerText
      return aText > bText ? multiplier : -multiplier
    })
    table.tBodies[0].append(...sortedRows)
    event.target.dataset.sortDirection = direction === 'ascending' ? 'descending' : 'ascending'
  }
}

// <div data-controller="tablesearch">
//   <input type="search" data-action="input->tablesearch#search">
//   <table id="my-table">
//     <thead>
//       <tr>
//         <th>Name</th>
//         <th>Email</th>
//         <th>Phone</th>
//       </tr>
//     </thead>
//     <tbody>
//       <tr data-tablesearch-target="row">
//         <td>John Doe</td>
//         <td>john@example.com</td>
//         <td>1234567890</td>
//       </tr>
//       <tr data-tablesearch-target="row">
//         <td>Jane Smith</td>
//         <td>jane@example.com</td>
//         <td>9876543210</td>
//       </tr>
//     </tbody>
//   </table>
// </div>

// <div data-controller="tablesearch">
//   <table id="my-table">
//     <thead>
//       <tr>
//         <th data-action="click->tablesearch#sort">Name</th>
//         <th data-action="click->tablesearch#sort">Email</th>
//         <th data-action="click->tablesearch#sort">Phone</th>
//       </tr>
//     </thead>
//     <tbody>
//       <tr data-tablesearch-target="row">
//         <td>John Doe</td>
//         <td>john@example</td>
//         <td>1234567890</td>
//       </tr>
//       <tr data-tablesearch-target="row">
//         <td>Jane Smith</td>
//         <td>jane@example</td>
//         <td>9876543210</td>
//       </tr>
//     </tbody>
//   </table>
// </div>
