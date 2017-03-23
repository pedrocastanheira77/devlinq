var opts = {
  lines: 13 // The number of lines to draw
, length: 28 // The length of each line
, width: 14 // The line thickness
, radius: 42 // The radius of the inner circle
, scale: 0.2 // Scales overall size of the spinner
, corners: 1 // Corner roundness (0..1)
, color: '#34A853' // #rgb or #rrggbb or array of colors
, opacity: 0.25 // Opacity of the lines
, rotate: 0 // The rotation offset
, direction: 1 // 1: clockwise, -1: counterclockwise
, speed: 1 // Rounds per second
, trail: 60 // Afterglow percentage
, fps: 20 // Frames per second when using setTimeout() as a fallback for CSS
, zIndex: 2e9 // The z-index (defaults to 2000000000)
, className: 'spinner' // The CSS class to assign to the spinner
, top: '10%' // Top position relative to parent
, left: '50%' // Left position relative to parent
, shadow: false // Whether to render a shadow
, hwaccel: false // Whether to use hardware acceleration
, position: 'absolute' // Element positioning
};

var spinner = new Spinner(opts)
var spinnerDiv = document.createElement("div");
spinnerDiv.id = "spinner";
startSpinner(spinner, spinnerDiv);

function startSpinner(spinner, spinnerDiv) {
  spinner.spin();
  spinnerDiv.appendChild(spinner.el);
  setTimeout(function() {
    var resultStatsDiv = document.getElementById("resultStats");
    resultStatsDiv.parentNode.insertBefore(spinnerDiv, resultStatsDiv);
  }, 1500);
}


// var Spinner = require("./Spinner.js")
// var d = document;
// var spinner = new Spinner(OPTS);
// var OPTS = {
//               lines: 13 // The number of lines to draw
//             , length: 28 // The length of each line
//             , width: 14 // The line thickness
//             , radius: 42 // The radius of the inner circle
//             , scale: 0.2 // Scales overall size of the spinner
//             , corners: 1 // Corner roundness (0..1)
//             , color: '#34A853' // #rgb or #rrggbb or array of colors
//             , opacity: 0.25 // Opacity of the lines
//             , rotate: 0 // The rotation offset
//             , direction: 1 // 1: clockwise, -1: counterclockwise
//             , speed: 1 // Rounds per second
//             , trail: 60 // Afterglow percentage
//             , fps: 20 // Frames per second when using setTimeout() as a fallback for CSS
//             , zIndex: 2e9 // The z-index (defaults to 2000000000)
//             , className: 'spinner' // The CSS class to assign to the spinner
//             , top: '10%' // Top position relative to parent
//             , left: '50%' // Left position relative to parent
//             , shadow: false // Whether to render a shadow
//             , hwaccel: false // Whether to use hardware acceleration
//             , position: 'absolute' // Element positioning
//           };
//
// var spinnerDiv = new SpinnerDiv(d);
// StartSpinner(spinner, spinnerDiv, d);
//
// function SpinnerDiv(doc){
//   var spinnerDiv = doc.createElement("div");
//   spinnerDiv.id = "spinner";
//   setTimeout(function(){
//     var resultStatsDiv = doc.getElementById("resultStats");
//     resultStatsDiv.parentNode.insertBefore(spinnerDiv, resultStatsDiv);
//   },500);
// }
//
// function StartSpinner(spinner, spinnerDivEL, doc) {
//   var spinnerEl = spinner.spin().el;
//   spinnerDivEl.appendChild(spinnerEl);
// }
//
// module.exports = {
//   SpinnerDiv,
//   StartSpinner
// }
