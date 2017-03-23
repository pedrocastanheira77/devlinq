function startSpinner(spinner, spinnerDiv, theDocument) {
  spinner.spin();
  spinnerDiv.appendChild(spinner.el);
  theDocument.getElementById("resultStats").then(function(resultStatsDiv){
    resultStatsDiv.theDocument.insertBefore(spinnerDiv, resultStatsDiv);
  });
}

module.exports = startSpinner;
