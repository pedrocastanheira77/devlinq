var expect = require('chai').expect;
var Browserify = require('../lib/BrowserifyInBar.js');
var language;

describe('Browserify', function(){
  beforeEach(function(){
    language = new Browserify();
  });

  describe("#generateOfficialDocsURL", function(){
    it('returns correct url for no given topic', function(){
      var version = "Coming soon!";
      var topic = "Choose a topic";
      var resultURL = language.generateOfficialDocsURL(version, topic);
      expect(resultURL).to.equal(language.baseUrl);
    });

    it('returns correct url for given topic', function(){
      var version = "Coming soon!";
      var topic = "add()";
      var resultURL = language.generateOfficialDocsURL(version, topic);
      var expectedURL = "http://browserify.orgadd()";
      expect(resultURL).to.equal(expectedURL);
    });
  });


  describe("#nameOfDoc", function(){
    it('does something', function(){
      var offDocs = language.nameOfDoc();
      expect(offDocs).to.equal("Browserify");
    });
  });
});
