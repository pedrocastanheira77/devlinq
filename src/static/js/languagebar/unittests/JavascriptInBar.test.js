var expect = require('chai').expect;
var Javascript = require('../lib/JavascriptInBar.js');
var language;

describe('Javascript', function(){
  beforeEach(function(){
    language = new Javascript;
  });

  describe("#generateOfficialDocsURL", function(){
    it('returns correct url for no given topic', function(){
      var version = "Coming soon!";
      var topic = "Choose a topic";
      var resultURL = language.generateOfficialDocsURL(version, topic);
      expect(resultURL).to.equal(language.baseUrl);
    });

    it('returns correct url for given topic', function(){
      var version = "ECMAScript6";
      var topic = "Array";
      var resultURL = language.generateOfficialDocsURL(version, topic);
      var expectedURL = "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array";
      expect(resultURL).to.equal(expectedURL);
    });
  });

  describe("#nameOfDoc", function(){
    it('does something', function(){
      var offDocs = language.nameOfDoc();
      expect(offDocs).to.equal("Mozilla (MDN)");
    });
  });
});
