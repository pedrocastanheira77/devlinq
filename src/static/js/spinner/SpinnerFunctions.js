function startSpinner(spinner, spinnerDiv, theDocument) {
  spinner.spin();
  spinnerDiv.appendChild(spinner.el);
  setTimeout(function() {
    var resultStatsDiv = theDocument.getElementById("resultStats");
    resultStatsDiv.parentNode.insertBefore(spinnerDiv, resultStatsDiv);
  }, 1500);
}

module.exports = startSpinner;
