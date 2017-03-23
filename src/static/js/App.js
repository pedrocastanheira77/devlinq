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
    that.state.stackbar.getStackAPI(that.state.value, 5).then(function(items) {
      that.setState({items: items});
    })

    document.querySelector("#lst-ib").addEventListener('change', function(evt) {
      that.state.lang.languagesDiv(that.state.currentDiv, document);
      that.state.stackbar.getStackAPI(document.getElementById("lst-ib").value, 5).then(function(items) {
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

// import React, { Component } from 'react';
// import '../css/style.css';
// import '../css/App.css';
// var StackOverflowBar = require('./stackoverflowbar/StackOverflowBar.js');
// var stackbar = new StackOverflowBar();
// var currentDiv = document.getElementById("appbar");
// var value = document.getElementById("lst-ib").value
// // var devlinqExtention = require('./Devlinq.js').devlinqExtention;
// // var loadFont = require('./Devlinq.js').loadFont;
// // var languagesDiv = require('./Devlinq.js').languagesDiv;
// var LanguagesView = require("./languagebar/LanguagesBar.js");
// var lang = new LanguagesView();
// // var stackOverflowDiv = require('./Devlinq.js').stackOverflowDiv;
//
// class App extends Component {
//   constructor() {
//     super();
//     this.state = {items: []};
//   }
//
//   componentDidMount() {
//     var that = this;
//     stackbar.getStackAPI(value, 5).then(function(items) {
//       that.setState({items: items});
//     })
//
//     document.querySelector("#lst-ib").addEventListener('change', function(evt) {
//       lang.languagesDiv(currentDiv);
//       stackbar.getStackAPI(document.getElementById("lst-ib").value, 5).then(function(items) {
//         that.setState({items: items});
//       })
//     })
//   }
//
//   render(data) {
//     return (
//       <div className="App">
//        <div id="language">{lang.languagesDiv(currentDiv)}</div>
//        <div className="devlinq_div stackoverflow_div" id="stackoverflowbar">
//         <h2 className="stackoverflow_title">STACK OVERFLOW</h2>
//           {this.state.items.map((item, i) => {
//             return (
//               <div key={i} className="so_item">
//                 <a href="{item.getUrl()}">
//                   <p className="linq linq_so">{item.getTitle()}</p>
//                   <p className="so_info">View Count: <mark className="score">{item.getViewCount()}</mark>Answer Count: <mark className="score">{item.getAnswerCount()}</mark>Score: <mark className="score">{item.getScore()}</mark></p>
//                 </a>
//               </div>
//             )
//           })}
//        </div>
//       </div>
//     );
//   }
// }
//
//
// export default App;
