var expect = require('chai').expect;
var Lisp = require('../lib/LispInBar.js');
var language;

describe('Lisp', function(){
  beforeEach(function(){
    language = new Lisp();
  });

  it("#generateOfficialDocsURL", function(){
    var version = "Comming soon!";
    var topic = "add()";
    var resultURL = language.generateOfficialDocsURL(version, topic);
    var expectedURL = "http://lisp-lang.org/add()";
    expect(resultURL).to.equal(expectedURL);
  });


  it("#nameOfDoc", function(){
    var offDocs = language.nameOfDoc();
    expect(offDocs).to.equal("Lisp");
  });
});
