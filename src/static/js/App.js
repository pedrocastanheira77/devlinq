import React, { Component } from 'react';
import logo from '../../logo.svg';
import '../css/App.css';
var request = require('request-promise');
var StackOverflowBar = require('./stackoverflowbar/StackOverflowBar.js');
var stackbar = new StackOverflowBar();



class App extends Component {
  constructor() {
    super();
    this.state = {items: []};
  }

  componentDidMount() {
    var that = this;
    stackbar.getStackAPI("ruby array sort", 5).then(function(items) {
      that.setState({items: items});
    })
  }

  render() {
    console.log(this.state.items);
    return (
      <div className="App">
        {this.state.items.map((item, i) => {
          return (<div key={i}>{item.getTitle()}</div>)
        })}
      </div>
    );
  }
}


export default App;
