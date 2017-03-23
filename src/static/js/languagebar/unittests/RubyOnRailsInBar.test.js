var expect = require('chai').expect;
var RubyonRails = require('../lib/RubyonRailsInBar.js');
var language;

describe('RubyonRails', function(){
  beforeEach(function(){
    language = new RubyonRails;
  });

  it("#generateOfficialDocsURL", function(){
    var version = "Comming soon!";
    var topic = "add()";
    var resultURL = language.generateOfficialDocsURL(version, topic);
    var expectedURL = "http://rubyonrails.orgadd()";
    expect(resultURL).to.equal(expectedURL);
  });


  it("#nameOfDoc", function(){
    var offDocs = language.nameOfDoc();
    expect(offDocs).to.equal("Ruby on Rails");
  });
});
