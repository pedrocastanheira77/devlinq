var chai = require('chai');
var expect = require('chai').expect;
var spies = require('chai-spies');
chai.use(spies);
var jsdom = require('jsdom').jsdom;
var stub = require('sinon').stub;
var Ruby = require('../lib/RubyInBar.js')
var LanguagesView = require('../LanguagesBar.js');
var languagesView;

describe('LanguagesView', function(){
  beforeEach(function(){
    languagesView = new LanguagesView;
  });

  describe('#getLanguagesView', function(){
    it('Returns languages list of correct length', function(){
      var numberOfLanguages = (Object.keys(new LanguagesView())).length-1;
      expect(languagesView.getLanguagesView().length).to.equal(numberOfLanguages);
    });

    it("Returns languages list of languages with first Ruby", function(){
      var index = languagesView.getLanguagesView().indexOf("Ruby");
      expect(languagesView.getLanguagesView()[index]).to.equal("Ruby");
    });
  });

  describe('#getVersions', function(){
    it('Returns version list of correct length', function(){
      var numberOfLanguages = languagesView.getLanguagesView().length;
      expect(languagesView.getVersions().length).to.equal(numberOfLanguages);
    });

    it("Returns languages list of languages with first Ruby and relevant versions", function(){
      var index = languagesView.getLanguagesView().indexOf("Ruby");
      var version240 = languagesView.ruby.versions.indexOf("2.4.0");
      expect(languagesView.getVersions()[index][version240]).to.equal("2.4.0");
    });
  });

  describe('#getTopics', function(){
    it('Returns topics list of length 105 for Ruby ', function(){
      var index = languagesView.getLanguagesView().indexOf("Ruby");
      var numberRubyTopics = languagesView.ruby.topics.length;
      expect(languagesView.getTopics()[index].length).to.equal(numberRubyTopics);
    });

    it('Returns topics list with first entry ARGF for Ruby ', function(){
      var index = languagesView.getLanguagesView().indexOf("Ruby");
      var indexARGF = languagesView.ruby.topics.indexOf("ARGF");
      expect(languagesView.getTopics()[index][indexARGF]).to.equal("ARGF");
    });
  });

  describe('#createDummyOption', function(){
    var element;
    var dummyoption;
    var dummyoptionLanguage
    var ourDocument = jsdom ('<body>'+
                                  'Google Search:'+
                                    '<input type="text" id="lst-ib" value="ruby array">' +
                                '</body>');

    beforeEach(function(){
      element = ourDocument.createElement('div');
      dummyoption = languagesView.createDummyOption("Hello", element, ourDocument);
      dummyoptionLanguage = languagesView.createDummyOption("language", element, ourDocument);
    })

    it('assigns child node with given string to the div', function(){
      expect(element.childNodes[0].innerHTML).to.equal("Choose a Hello");
    });

    it('assigns child node with given string as value to the div', function(){
      expect(element.childNodes[0].value).to.equal("Choose a Hello");
    });

    it('has child node with selected returning boolean true by default', function(){
      expect(element.childNodes[0].selected).to.equal(true);
    });

    it('has child node with disabled returning boolean false, by default', function(){
      expect(element.childNodes[0].disabled).to.equal(false);
    });

    it('has child node with disabled returning boolean true, if language', function(){
      expect(element.childNodes[1].disabled).to.equal(true);
    });
  });

  describe('#createLanguageDropdown', function(){
    var ourDocument = jsdom ('<body>'+
                                  'Google Search:'+
                                    '<input type="text" id="lst-ib" value="ruby array">' +
                                '</body>');
    it('creates a html list with id languageDropdownList', function(){
      expect(languagesView.createLanguageDropdown(ourDocument).id).to.equal("languageDropdownList")
    });

    it('creates a html list with onChange function', function(){
      expect(typeof(languagesView.createLanguageDropdown(ourDocument).onchange)).to.equal("function")
    });

    it('creates a html list with 4 options as child nodes', function(){
      expect(languagesView.createLanguageDropdown(ourDocument).childNodes.length).to.equal(4)
    });

    it('creates list with first option value Choose a Language', function(){
      expect(languagesView.createLanguageDropdown(ourDocument).childNodes[0].value).to.equal("Choose a language")
    });

    it('creates list with first option innerHTML Choose a Language', function(){
      expect(languagesView.createLanguageDropdown(ourDocument).childNodes[0].innerHTML).to.equal("Choose a language")
    });

    it('creates list with second option value Ruby', function(){
      expect(languagesView.createLanguageDropdown(ourDocument).childNodes[1].value).to.equal("Ruby")
    });

    it('creates list with third option value Javascript', function(){
      expect(languagesView.createLanguageDropdown(ourDocument).childNodes[2].value).to.equal("Javascript")
    });

    it('creates list with fourth option value Jquery', function(){
      expect(languagesView.createLanguageDropdown(ourDocument).childNodes[3].value).to.equal("JQuery")
    });
  });

  // describe('#createVersionDropdown', function(){
  //
  //   var ourDocument = jsdom ('<body>'+
  //                                 'Google Search:'+
  //                                   '<input type="text" id="lst-ib" value="ruby array">' +
  //                               '</body>');
  //
  //   it('returns a html element with id versionDropdownList', function(){
  //     expect(languagesView.createVersionDropdown("Ruby", ourDocument).id).to.equal("versionDropdownList")
  //   });
  //
  //   it('returns a html element with id versionDropdownList', function(){
  //     expect(languagesView.createVersionDropdown("Ruby", ourDocument).id).to.equal("versionDropdownList")
  //   });
  //
  //   it('calls create dummy object with correct parameters', function(){
  //     var chai = require('chai');
  //     var spies = require('chai-spies');
  //
  //     chai.use(spies);
  //     var spy = chai.spy.on(languagesView, 'createDummyOption');
  //     languagesView.createVersionDropdown("Ruby", ourDocument)
  //     expect(spy).to.have.been.called();
  //   });
  //
  // });

  // describe('generateVersionOptions', function(){
  //
  //   var ourDocument = jsdom ('<body>'+
  //                                 'Google Search:'+
  //                                   '<input type="text" id="lst-ib" value="ruby array">' +
  //                               '</body>');
  //
  //   it('adds list of version options to the version dropdown with 2 choose a version options', function(){
  //     var dropdown = languagesView.createVersionDropdown("Ruby", ourDocument)
  //     languagesView.generateVersionOptions(dropdown, "Ruby", ourDocument)
  //     expect(dropdown.childNodes[0].value).to.equal("Choose a version")
  //   });
  // });

  describe('#createTopicDropdown', function(){
    var ourDocument = jsdom ('<body>'+
                                  'Google Search:'+
                                    '<input type="text" id="lst-ib" value="ruby array">' +
                                '</body>');
    it('returns a select element', function(){
      expect(languagesView.createTopicDropdown(ourDocument).tagName).to.equal("SELECT")
    });

    it('returns a select element with id topicDropdownList', function(){
      expect(languagesView.createTopicDropdown(ourDocument).id).to.equal("topicDropdownList")
    });

    it('calls create dummy object with correct parameters', function(){
      var chai = require('chai');
      var spies = require('chai-spies');
      chai.use(spies);
      var spy = chai.spy.on(languagesView, 'createDummyOption');
      languagesView.createTopicDropdown(ourDocument)
      expect(spy).to.have.been.called();
    });
  });

  describe('#generateTopicOptions', function(){
    var ourDocument = jsdom ('<body>'+
                                  'Google Search:'+
                                    '<input type="text" id="lst-ib" value="ruby array">' +
                                '</body>');
    it('adds list of topic options to the topic dropdown with 1 choose a version options', function(){
      var dropdown = languagesView.createTopicDropdown(ourDocument)
      languagesView.generateTopicOptions(dropdown, "Ruby", ourDocument)
      expect(dropdown.childNodes[0].value).to.equal("Choose a topic")
    });

    it('adds list of topic options to the topic dropdown with 2 choose a version options', function(){
      var dropdown = languagesView.createTopicDropdown(ourDocument)
      languagesView.generateTopicOptions(dropdown, "Ruby", ourDocument)
      expect(dropdown.childNodes[2].value).to.equal("ARGF")
    });
  });

  describe('#createSubmitSearchButton', function(){
    var ourDocument = jsdom ('<body>'+
                                  'Google Search:'+
                                    '<input type="text" id="lst-ib" value="ruby array">' +
                                '</body>');
    it('returns a html button element', function(){
      expect(languagesView.createSubmitSearchButton(ourDocument).tagName).to.equal("BUTTON")
    });

    it('returns a html button element with id submitSearchButton', function(){
      expect(languagesView.createSubmitSearchButton(ourDocument).id).to.equal("submitSearchButton")
    });

    it('returns a html button element with a function onclick', function(){
      expect(typeof(languagesView.createSubmitSearchButton(ourDocument).onclick)).to.equal("function")
    });

    it('returns a html button element with innerHTML search', function(){
      expect(languagesView.createSubmitSearchButton(ourDocument).innerHTML).to.equal("SEARCH")
    });
  });

  describe('#createLanguagesDiv', function(){
    var ourDocument = jsdom ('<body>'+
                                  'Google Search:'+
                                  '<div id="parent_div1">' +
                                    '<div id="parent_div2">' +
                                    '</div>' +
                                  '</div>' +
                                '</body>');
    it('returns a html element of type div', function(){
      var languagesView = new LanguagesView;
      expect(languagesView.createLanguagesDiv(ourDocument.getElementById("parent_div2"), ourDocument).tagName).to.equal('DIV')
    });

    it('returns a html element with id language', function(){
      var languagesView = new LanguagesView;
      expect(languagesView.createLanguagesDiv(ourDocument.getElementById("parent_div2"), ourDocument).id).to.equal('languages_div')
    });
  });

  describe('#createLanguagesTitle', function(){
    var ourDocument = jsdom ('<body>'+
                                  'Google Search:'+
                                    '<div style="text-align: left" id="parent_div2"></div>' +
                                '</body>');
    it('inserts a html element of type h2', function(){
      var languagesView = new LanguagesView;
      expect(languagesView.createLanguagesTitle(ourDocument.getElementById("parent_div2"), ourDocument).tagName).to.equal('H2')
    });

    it('returns a html element with id language', function(){
      var languagesView = new LanguagesView;
      expect(languagesView.createLanguagesTitle(ourDocument.getElementById("parent_div2"), ourDocument).className).to.equal('languages_title')
    });
  });


  describe('#addLinktoTag', function(){
    var ourDocument = jsdom ('<body>'+
                                  'Google Search:'+
                                    '<input type="text" id="lst-ib" value="ruby array">' +
                                    '<h1 id="link"></h1>' +
                                '</body>');
    it('adds a href as matches the link fed', function(){
      var link = ourDocument.getElementById('link');
      var officialDocLink = "http://www.google.co.uk"
      languagesView.addLinktoTag(officialDocLink, "Ruby", "2.4.0", "array", "Ruby-doc", ourDocument);
      expect(link.href).to.equal("http://www.google.co.uk")
    });
  });

  // describe('#topicDropdownChangeEvent', function(){
  //   var ourDocument = jsdom ('<body>'+
  //                                 'Google Search:'+
  //                                   '<input type="text" id="lst-ib" value="ruby array">' +
  //                               '</body>');
  //   it('calls generateTopicOptions with correct arguments', function(){
  //     var topiclist = ourDocument.createElement('option')
  //     ourDocument.getElementById.withArgs('topicDropdownList').returns(topiclist)
  //     var langoption = ourDocument.createElement('option')
  //     stub(ourDocument, 'querySelector');
  //     ourDocument.querySelector.withArgs('#languageDropdownList').returns(langoption)
  //     ourDocument.querySelector("#languageDropdownList").value="thelanguage"
  //
  //     stub(LanguagesView.prototype, 'generateTopicOptions');
  //     var spy = chai.spy.on(LanguagesView.prototype, 'generateTopicOptions');
  //     languagesView.topicDropdownChangeEvent();
  //     expect(spy).to.have.been.called.with(topiclist, "thelanguage");
  //   });
  // });

  // describe('#versionDropdownChangeEvent', function(){
  //   it('calls generateTopicOptions', function(){
  //     var versionlist = document.createElement('option')
  //     document.getElementById.withArgs('versionDropdownList').returns(versionlist)
  //     var langoption = document.createElement('option')
  //     document.querySelector.withArgs('#languageDropdownList').returns(langoption)
  //     document.querySelector("#languageDropdownList").value="thelanguage"
  //     stub(LanguagesView.prototype, 'generateVersionOptions');
  //     var spy = chai.spy.on(LanguagesView.prototype, 'generateVersionOptions');
  //     languagesView.versionDropdownChangeEvent()
  //     expect(spy).to.have.been.called.with(versionlist, "thelanguage");
  //   });
  // });

  describe('#createDropdownDiv', function(){
    var ourDocument = jsdom ('<body>'+
                                  'Google Search:'+
                                    '<input type="text" id="lst-ib" value="ruby array">' +
                                '</body>');

    it('returns a div element', function(){
      expect(languagesView.createDropdownDiv(ourDocument).tagName).to.equal('DIV')
    })

    it('returns a div element with 4 child nodes', function(){
      expect(languagesView.createDropdownDiv(ourDocument).childNodes.length).to.equal(4)
    })

    it('returns a div element with 4 child nodes with one language dropdow', function(){
      expect(languagesView.createDropdownDiv(ourDocument).childNodes[0].id).to.equal("languageDropdownList")
    })

    it('returns a div element with 4 child nodes with one version dropdown', function(){
      expect(languagesView.createDropdownDiv(ourDocument).childNodes[1].id).to.equal("versionDropdownList")
    })

    it('returns a div element with 4 child nodes with one topic dropdown', function(){
      expect(languagesView.createDropdownDiv(ourDocument).childNodes[2].id).to.equal("topicDropdownList")
    })

    it('returns a div element with 4 child nodes with one submit search button', function(){
      expect(languagesView.createDropdownDiv(ourDocument).childNodes[3].id).to.equal("submitSearchButton")
    })


  })


  // describe('#submitSearchButton', function(){
  //   it('calls language#generateOfficialDocsURL with correct arguments', function(){
  //     var langoption = document.createElement('option')
  //     var versionoption = document.createElement('option')
  //     var topicoption = document.createElement('option')
  //     document.querySelector.withArgs('#languageDropdownList').returns(langoption)
  //     document.querySelector("#languageDropdownList").value="ruby"
  //     document.querySelector.withArgs('#versionDropdownList').returns(versionoption)
  //     document.querySelector("#versionDropdownList").value="aversion"
  //     document.querySelector.withArgs('#topicDropdownList').returns(topicoption)
  //     document.querySelector("#topicDropdownList").value="atopic"
  //
  //     var spy = chai.spy.on(Ruby.prototype, 'generateOfficialDocsURL');
  //     languagesView.submitSearchButtonEvent();
  //
  //     expect(spy).to.have.been.called.with("aversion", "atopic");
  //   });
  //
  //   it('calls addLinktoTag with correct arguments', function(){
  //     var langoption = document.createElement('option')
  //     var versionoption = document.createElement('option')
  //     var topicoption = document.createElement('option')
  //     document.querySelector.withArgs('#languageDropdownList').returns(langoption)
  //     document.querySelector("#languageDropdownList").value="ruby"
  //     document.querySelector.withArgs('#versionDropdownList').returns(versionoption)
  //     document.querySelector("#versionDropdownList").value="aversion"
  //     document.querySelector.withArgs('#topicDropdownList').returns(topicoption)
  //     document.querySelector("#topicDropdownList").value="atopic"
  //
  //     var lang = new Ruby();
  //     var url = lang.generateOfficialDocsURL('aversion', 'atopic');
  //
  //     stub(this, 'addLinktoTag')
  //     var spy = require('sinon').spy(addLinktoTag);
  //     submitSearchButtonEvent();
  //     addLinktoTag()
  //
  //     expect(spy).to.be.called();
  //   });
  // });


});
