var expect = require('chai').expect;
var Chai = require('../lib/ChaiInBar.js');
var language;

describe('Chai', function(){
  beforeEach(function(){
    language = new Chai();
  });

  it("#generateOfficialDocsURL", function(){
    var version = "Comming soon!";
    var topic = "add()";
    var resultURL = language.generateOfficialDocsURL(version, topic);
    var expectedURL = "http://chaijs.comadd()";
    expect(resultURL).to.equal(expectedURL);
  });


  it("#nameOfDoc", function(){
    var offDocs = language.nameOfDoc();
    expect(offDocs).to.equal("Chai");
  });
});
