var expect = require('chai').expect;
var JQuery = require('../lib/JqueryInBar.js');
var language;

describe('JQuery', function(){
  beforeEach(function(){
    language = new JQuery;
  });

  describe("#generateOfficialDocsURL", function(){
    it('returns correct url for no given topic', function(){
      var version = "Coming soon!";
      var topic = "Choose a topic";
      var resultURL = language.generateOfficialDocsURL(version, topic);
      expect(resultURL).to.equal(language.baseUrl);
    });

    it('returns correct url for given topic', function(){
      var version = "V1";
      var topic = "add()";
      var resultURL = language.generateOfficialDocsURL(version, topic);
      var expectedURL = "http://api.jquery.com/add";
      expect(resultURL).to.equal(expectedURL);
    });
  });

  describe("#nameOfDoc", function(){
    it('does something', function(){
      var offDocs = language.nameOfDoc();
      expect(offDocs).to.equal("API JQuery");
    });
  });
});
