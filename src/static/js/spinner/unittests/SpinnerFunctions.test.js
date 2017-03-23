var chai = require('chai');
var expect = require('chai').expect;
var spies = require('chai-spies');
chai.use(spies);
// var SpinnerDiv = require('../SpinnerView.js').SpinnerDiv;
var startSpinner = require('../SpinnerFunctions.js');
// var jsdom = require('jsdom').jsdom;
var Spinner = require("../Spinner.js");
var spinnerDiv = document.createElement("div");
spinnerDiv.id = "spinner";
var jsdom = require('jsdom')
// describe('SpinnerDiv', function() {
//   it('Creates a div element to best the spinner', function(done){
//     var ourDocument = jsdom('<html><body><div id="resultStats"></div></body></html>');
//     SpinnerDiv(ourDocument);
//     setTimeout(function(){
//       expect(ourDocument.getElementById("spinner")).to.exist;
//       done();
//     }, 1000);
//
//   });
// });

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


describe('StartSpinner', function() {
  it('calls spinner.spin()', function(done){
    var spinner = new Spinner(opts);
    var ourDocument = jsdom.jsdom('<html><body><div id="spinner"></div><div id="resultStats"></div></body></html>');
    var ourSpy = chai.spy.on(spinner, 'spin')
    startSpinner(spinner, spinnerDiv, ourDocument);
    setTimeout(function(){
      expect(ourSpy).to.have.been.called();
      done();
    },3000)
  });
});
