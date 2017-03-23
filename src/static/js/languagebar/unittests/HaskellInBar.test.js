var expect = require('chai').expect;
var Haskell = require('../lib/HaskellInBar.js');
var language;

describe('Haskell', function(){
  beforeEach(function(){
    language = new Haskell;
  });

  it("#generateOfficialDocsURL", function(){
    var version = "Comming soon!";
    var topic = "add()";
    var resultURL = language.generateOfficialDocsURL(version, topic);
    var expectedURL = "https://www.haskell.orgadd()";
    expect(resultURL).to.equal(expectedURL);
  });


  it("#nameOfDoc", function(){
    var offDocs = language.nameOfDoc();
    expect(offDocs).to.equal("Haskell");
  });
});
