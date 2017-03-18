import React, { Component } from 'react';
import logo from '../../logo.svg';
import '../css/App.css';
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
    return (
      <div className="App">
       <div className="App-header">
         <img src={logo} className="App-logo" alt="logo" />
         <h2>Welcome to React</h2>
       </div>

       <div id="language">{}</div>
       <div id="language">{}</div>
       <div className="StackOverflow">
        {this.state.items.map((item, i) => {
          return (<div key={i}><p><b>{item.getTitle()}</b></p><p>item.getUrl()</p></div>)
        })}
       </div>
      </div>
    );
  }
}


export default App;
