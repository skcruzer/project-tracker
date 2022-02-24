// variables for DOM elements
let timeDisplayEl = $('#time-display');
let projectDisplayEl = $('#project-display')
let projectModelEL = $('#project-model')
let projectFormEl = $('#project-form')
let projectNameInputEl = $('#project-name-input')
let projectTypeInputEl = $('#project-type-input')
let hourlyRateInputEl = $('#hourly-rate-input')
let dueDateInputEl = $('#due-date-input')

// displaying the time
function displayTime() {
  let rightNow = moment().format('MMMM DD, YYYY [at] hh:mm:ss a')
  timeDisplayEl.text(rightNow)
}

// adding project data to page
