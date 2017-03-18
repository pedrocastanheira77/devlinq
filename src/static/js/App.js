import React, { Component } from 'react';
import logo from '../../logo.svg';
import '../css/App.css';
// var request = require('request-promise');
var StackOverflowBar = require('./stackoverflowbar/StackOverflowBar.js');
var stackbar = new StackOverflowBar();
var Promise = require('promise/domains');
var data = Promise.resolve(stackbar.getStackAPI("ruby array sort", 5));
//
class App extends Component {
    render() {
      return (
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Welcome to React</h2>
          </div>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
          <h2 id="res">This is my script: {
            // setTimeout(function(resolve) {
            //     data.then(function(data){
            //       console.log(data[0].getTitle())
            //     })
            //     resolve(data)
            //   }, 5000)
          }.</h2>
          <p id="appbar">
            This is google appbar
          </p>
        </div>

      );
    }
}

//
// document.addEventListener('DOMContentLoaded', function() {
//   // var optionsDiv = new LanguagesView().createLanguageDiv();
//   // var officialDiv = new OfficialDocsView().createOfficialDiv();
//   setTimeout(function() {
//     var currentDiv = document.getElementById("appbar");
//     // currentDiv.parentNode.insertBefore(optionsDiv, currentDiv);
//     // currentDiv.parentNode.insertBefore(officialDiv, currentDiv);
//
//     var stackOverflowDiv = document.createElement("div");
//     stackOverflowDiv.id = "stackoverflowbar";
//     currentDiv.parentNode.insertBefore(stackOverflowDiv, currentDiv);
//     data.then(function(data){
//       console.log(data)
//       stackOverflowDiv.insertAdjacentHTML(data)
//     })
//   }, 5000);
// });


export default App;
