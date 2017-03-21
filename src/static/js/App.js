import React, { Component } from 'react';
import logo from '../../logo.svg';
import '../css/App.css';
import '../css/style.css';
var StackOverflowBar = require('./stackoverflowbar/StackOverflowBar.js');
var stackbar = new StackOverflowBar();
var currentDiv = document.getElementById("appbar");
var value = document.getElementById("lst-ib").value
// var devlinqExtention = require('./Devlinq.js').devlinqExtention;
// var loadFont = require('./Devlinq.js').loadFont;
// var languagesDiv = require('./Devlinq.js').languagesDiv;
var LanguagesView = require("./languagebar/LanguagesBar.js");
var lang = new LanguagesView();
// var stackOverflowDiv = require('./Devlinq.js').stackOverflowDiv;

class App extends Component {
  constructor() {
    super();
    this.state = {items: []};
  }

  componentDidMount() {
    var that = this;
    stackbar.getStackAPI(value, 5).then(function(items) {
      that.setState({items: items});
    })
  }

  onItemClick() {
    console.log(1)
  }

  render(data) {
    return (
      <div className="App">
       <div id="language">{lang.languagesDiv(currentDiv)}</div>
       <div className="devlinq_div stackoverflow_div" id="stackoverflowbar">
        <h2 className="stackoverflow_title">STACK OVERFLOW</h2>
          {this.state.items.map((item, i) => {
            return (
              <div key={i} className="so_item">
                <a href="{item.getUrl()}">
                  <p className="linq linq_so">{item.getTitle()}</p>
                  <p className="so_info">View Count: {item.getViewCount()}; Answer Count: {item.getAnswerCount()}; Score: {item.getScore()}.</p>
                </a>
              </div>
            )
          })}
       </div>
      </div>
    );
  }
}

function myFunction() {
  console.log(1)
}


export default App;
