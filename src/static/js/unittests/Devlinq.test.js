var expect = require('chai').expect;
var spies = require('chai-spies')
var chai = require('chai')
chai.use(spies);
var WebFont = require('webfontloader');
var loadFont = require('../Devlinq.js').loadFont;
var jsdom = require('jsdom');
var ourDocument = jsdom.jsdom ('<a id="logo"><div><div id="hello"></div></div></a>');
var ourChrome = require('sinon-chrome');
var replaceLogo = require('../Devlinq.js').replaceLogo;
var stub = require('sinon').stub;

describe('Devlinq', function(){

  // describe('#devlinqExtention', function(){
  //
  // };

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

  describe('#replaceLogo', function(){
    it('changes the url to desired url if the logo if element present', function(done){
      stub(ourChrome.extension, 'getURL')
      ourChrome.extension.getURL.withArgs('/public/images/devlinq_logo_color.png').returns("oururl")
      setTimeout(function(){
        replaceLogo(ourDocument, ourChrome);
        var logourl = ourDocument.getElementById("logo").children[0].src;
        expect(logourl).to.equal("oururl");
        done();
      }, 1000)
    });

    it('changes the url to desired url if the logo if element present', function(done){
      var theDocument = jsdom.jsdom ('<a id="logocont"><div><div></div></div></a>');
      setTimeout(function(){
        replaceLogo(theDocument, ourChrome)
        var logourl = theDocument.getElementById("logocont").children[0].children[0].src
        expect(logourl).to.equal("oururl")
        done()
      }, 1000)
    });
  });

  // describe('#createSpinner', function(){
  //
  // };

  // describe('#languagesDiv', function(){
  //
  // };


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

  // describe('#createStackOverflowDiv', function(){
  //   it('returns a div element', function(){
  //     expect(createStackOverflowDiv().tagName).to.equal('DIV')
  //   });
  //
  //   it('returns a div element with id stackoverflowbar', function(){
  //     expect(createStackOverflowDiv().id).to.equal('stackoverflowbar')
  //   });
  // });

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
