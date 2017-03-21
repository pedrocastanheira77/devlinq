var expect = require('chai').expect;
var JQuery = require('../lib/JqueryInBar.js');
var language;

describe('JQuery', function(){
  beforeEach(function(){
    language = new JQuery;
  });

  it("#generateOfficialDocsURL", function(){
    var version = "V1";
    var topic = "add()";
    var resultURL = language.generateOfficialDocsURL(version, topic);
    var expectedURL = "http://api.jquery.com/add";
    expect(resultURL).to.equal(expectedURL);
  });


    it("#nameOfDoc", function(){
      var offDocs = language.nameOfDoc();
      expect(offDocs).to.equal("API JQuery");
    });
});
