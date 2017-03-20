var expect = require('chai').expect;

var createLanguagesDiv = require('../Devlinq.js').createLanguagesDiv
var createLanguagesTitle = require('../Devlinq.js').createLanguagesTitle
var createStackOverflowDiv = require('../Devlinq.js').createStackOverflowDiv
var insertStackOverflowAPI = require('../Devlinq.js').insertStackOverflowAPI
var StackOverflowBar = require("../stackoverflowbar/StackOverflowBar.js");

var stub = require('sinon').stub;


describe('Devlinq', function(){

  // describe('#devlinqExtention', function(){
  //
  // };

  // describe('#loadFont', function(){
  // FEATURE TEST?
  // };

  // describe('#replaceLogo', function(){
  // FEATURE TEST?
  // };

  // describe('#createSpinner', function(){
  //
  // };

  // describe('#languagesDiv', function(){
  //
  // };

  describe('#createLanguagesDiv', function(){
    it('returns a div element', function(){
      var parentNode = document.createElement('div')
      var childNode = document.createElement('p')
      parentNode.appendChild(childNode)
      expect(createLanguagesDiv(childNode).tagName).to.equal('DIV')
    });

    it('returns a div element with id languages_div', function(){
      var parentNode = document.createElement('div')
      var childNode = document.createElement('p')
      parentNode.appendChild(childNode)
      expect(createLanguagesDiv(childNode).id).to.equal('languages_div')
    });

    it('returns a div element with class languages_div', function(){
      var parentNode = document.createElement('div')
      var childNode = document.createElement('p')
      parentNode.appendChild(childNode)
      expect(createLanguagesDiv(childNode).className).to.equal('languages_div')
    });
  });

  // describe('#createLanguagesTitle', function(){
  //   it('returns a h2 element', function(){
  //     var parentNode = document.createElement('div')
  //     var childNode = document.createElement('div')
  //     parentNode.appendChild(childNode)
  //     parentNode.appendChild(childNode)
  //     var langdiv = createLanguagesDiv(childNode)
  //     expect(createLanguagesTitle(langdiv).tagName).to.equal('H2')
  //   })
  // });

  // describe('#insertDropdownIntoLanguages', function(){
  //
  // };

  // describe('#insertOfficialDocsIntoLanguages', function(){
  //
  // };

  // describe('#stackOverflowDiv', function(){
  //
  // };

  // describe('#createStackOverflowTitle', function(){
  //
  // };

  describe('#createStackOverflowDiv', function(){
    it('returns a div element', function(){
      expect(createStackOverflowDiv().tagName).to.equal('DIV')
    });

    it('returns a div element with id stackoverflowbar', function(){
      expect(createStackOverflowDiv().id).to.equal('stackoverflowbar')
    });
  });

  // var chai = require('chai');
  // var spies = require('chai-spies');
  // chai.use(spies);

  // describe('#insertStackOverflowAPI', function(){
  //   it('does something', function(){
  //     var stackdiv = createStackOverflowDiv();
  //     stub(StackOverflowBar.prototype, 'decideStringForAPI')
  //     StackOverflowBar.prototype.decideStringForAPI.returns("ruby array")
  //     var spy = chai.spy.on(stackdiv, 'insertAdjacentHTML');
  //     console.log(spy)
  //     insertStackOverflowAPI(5, stackdiv)
  //     expect(spy).to.have.been.called()
  //   });
  // });
});
