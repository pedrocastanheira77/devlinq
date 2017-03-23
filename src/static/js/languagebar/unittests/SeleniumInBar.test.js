var expect = require('chai').expect;
var Selenium = require('../lib/SeleniumInBar.js');
var language;

describe('Selenium', function(){
  beforeEach(function(){
    language = new Selenium();
  });

  it("#generateOfficialDocsURL", function(){
    var version = "Comming soon!";
    var topic = "add()";
    var resultURL = language.generateOfficialDocsURL(version, topic);
    var expectedURL = "http://www.seleniumhq.org/add()";
    expect(resultURL).to.equal(expectedURL);
  });


  it("#nameOfDoc", function(){
    var offDocs = language.nameOfDoc();
    expect(offDocs).to.equal("Selenium");
  });
});
