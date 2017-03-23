var expect = require('chai').expect;
var Browserify = require('../lib/BrowserifyInBar.js');
var language;

describe('Browserify', function(){
  beforeEach(function(){
    language = new Browserify();
  });

  it("#generateOfficialDocsURL", function(){
    var version = "Comming soon!";
    var topic = "add()";
    var resultURL = language.generateOfficialDocsURL(version, topic);
    var expectedURL = "http://browserify.orgadd()";
    expect(resultURL).to.equal(expectedURL);
  });


  it("#nameOfDoc", function(){
    var offDocs = language.nameOfDoc();
    expect(offDocs).to.equal("Browserify");
  });
});
