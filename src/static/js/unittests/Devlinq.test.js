var expect = require('chai').expect;
var spies = require('chai-spies')
var chai = require('chai')
chai.use(spies);
var WebFont = require('webfontloader');
var loadFont = require('../Devlinq.js').loadFont;
var createSpinner = require('../Devlinq.js').createSpinner;
var devlinqExtention = require('../Devlinq.js').devlinqExtention;
var jsdom = require('jsdom');
var ourDocument = jsdom.jsdom ('<div><a id="logo"><div><div id="appbar"><div></div></div></div></a></div>');
var ourChrome = require('sinon-chrome');
var replaceLogo = require('../Devlinq.js').replaceLogo;
var stub = require('sinon').stub;
var StackOverflowBar = require("../stackoverflowbar/StackOverflowBar.js");

describe('Devlinq', function(){
  describe('#devlinqExtention', function(){
    it('calls languagesDiv', function(done){
      var LanguagesView = require("../languagebar/LanguagesBar.js");
      stub(LanguagesView.prototype, 'languagesDiv');
      stub(StackOverflowBar.prototype, 'stackOverflowDiv');
      var spy = chai.spy.on(LanguagesView.prototype, 'languagesDiv');
      devlinqExtention(ourDocument, ourChrome);
      setTimeout(function(){
        expect(spy).to.have.been.called();
        done();
      }, 3000);
    });

    it('calls stackoverflowdiv', function(done){
      var LanguagesView = require("../languagebar/LanguagesBar.js");
      var spy = chai.spy.on(StackOverflowBar.prototype, 'stackOverflowDiv');
      devlinqExtention(ourDocument, ourChrome);
      setTimeout(function(){
        expect(spy).to.have.been.called();
        done();
      }, 3000);
    });
  });

  describe('#loadFont', function(){
    it('calls Webfont.load with correct arguments', function(){
      var spy = chai.spy.on(WebFont, 'load');
      loadFont();
      expect(spy).to.have.been.called.with({
        google: {
          families: ['Raleway:400,500,600,700,900']
        }
      });
    });
  });


  describe('#createSpinner', function(){
    it('gets the spinner div and deletes it if already present', function(){
      var anotherDocument = jsdom.jsdom ('<div id="spinner"></div>');
      createSpinner(anotherDocument);
      expect(anotherDocument.getElementById('spinner')).to.equal(null);
    });
  });
});
