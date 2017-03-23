var expect = require('chai').expect;
var React = require('../lib/ReactInBar.js');
var language;

describe('React', function(){
  beforeEach(function(){
    language = new React();
  });

  describe("#generateOfficialDocsURL", function(){
    it('returns correct url for no given topic', function(){
      var version = "Coming soon!";
      var topic = "Choose a topic";
      var resultURL = language.generateOfficialDocsURL(version, topic);
      expect(resultURL).to.equal(language.baseUrl);
    });

    it('returns correct url for given topic', function(){
      var version = "Comming soon!";
      var topic = "add()";
      var resultURL = language.generateOfficialDocsURL(version, topic);
      var expectedURL = "https://facebook.github.io/reactadd()";
      expect(resultURL).to.equal(expectedURL);
    });
  });

  describe("#nameOfDoc", function(){
    it('does something', function(){
      var offDocs = language.nameOfDoc();
      expect(offDocs).to.equal("React");
    });
  });
});
