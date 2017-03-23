// var chai = require('chai');
// var expect = require('chai').expect;
// var spies = require('chai-spies');
// chai.use(spies);
// var SpinnerDiv = require('../SpinnerView.js').SpinnerDiv;
// var StartSpinner = require('../SpinnerView.js').StartSpinner;
// var jsdom = require('jsdom').jsdom;
// var Spinner = require("../Spinner.js");
//
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

// describe('StartSpinner', function() {
//   it('Sets message confirmation innerHTML', function(){
//     var spinner = new Spinner();
//     var ourDocument = jsdom('<html><body><div id="spinner"></div><div id="resultStats"></div></body></html>');
//     var spinnerDiv = ourDocument.getElementById("spinner");
//     StartSpinner(spinner, spinnerDiv, ourDocument);
//     setTimeout(function(){
//       var spinnerClass = ourDocument.querySelector(".spinner");
//       expect(spinnerClass).to.exist;
//     },1000);
//   });
// });
