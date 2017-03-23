import React, { Component } from 'react';
import '../css/App.css';
import '../css/style.css';
var StackOverflowBar = require('./stackoverflowbar/StackOverflowBar.js');
var LanguagesView = require("./languagebar/LanguagesBar.js");

class App extends Component {
  constructor() {
    super();
    this.state = {items: [],
      stackbar: new StackOverflowBar(),
      currentDiv: document.getElementById("appbar"),
      value: document.getElementById("lst-ib").value,
      lang: new LanguagesView()};
  }

  componentDidMount() {
    var that = this;
    this.state.stackbar.getStackAPI(that.state.value, 5).then(function(items) {
      that.setState({items: items});
    })

    document.querySelector("#lst-ib").addEventListener('change', function(evt) {
      this.state.lang.languagesDiv(this.state.currentDiv, document);
      this.state.stackbar.getStackAPI(document.getElementById("lst-ib").value, 5).then(function(items) {
        that.setState({items: items});
      })
    })
  }

  render(data) {
    return (
      <div className="App">
       <div id="language">{this.state.lang.languagesDiv(this.state.currentDiv, document)}</div>
       <div className="devlinq_div stackoverflow_div" id="stackoverflowbar">
        <h2 className="stackoverflow_title">STACK OVERFLOW</h2>
          {this.state.items.map((item, i) => {
            return (
              <div key={i} className="so_item">
                <a href="{item.getUrl()}">
                  <p className="linq linq_so">{item.getTitle()}</p>
                  <p className="so_info">View Count: {item.getViewCount()}; Answer Count: {item.getAnswerCount()}; Score: {item.getScore()}.</p>
                </a>
              </div>)
          })}
       </div>
      </div>
    );
  }
}


export default App;
