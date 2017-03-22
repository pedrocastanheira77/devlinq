var expect = require('chai').expect;
var LanguagesView = require('../LanguagesBar.js');
var languagesView;

describe('LanguagesView', function(){
  beforeEach(function(){
    languagesView = new LanguagesView;
  });

  describe('#getLanguagesView', function(){
    it('Returns languages list of correct length', function(){
      var numberOfLanguages = languagesView.listOfLanguages.length;
      expect(languagesView.getLanguagesView().length).to.equal(numberOfLanguages);
    });

    it("Returns languages list of languages with first Ruby", function(){
      var index = languagesView.listOfLanguages.indexOf("Ruby");
      expect(languagesView.getLanguagesView()[index]).to.equal("Ruby");
    });
  });

  describe('#getVersions', function(){
    it('Returns version list of correct length', function(){
      var numberOfLanguages = languagesView.listOfLanguages.length;
      expect(languagesView.getVersions().length).to.equal(numberOfLanguages);
    });

    it("Returns languages list of languages with first Ruby and relevant versions", function(){
      var index = languagesView.listOfLanguages.indexOf("Ruby");
      var version240 = languagesView.ruby.versions.indexOf("2.4.0");
      expect(languagesView.getVersions()[index][version240]).to.equal("2.4.0");
    });
  });

  describe('#getTopics', function(){
    it('Returns topics list of length 105 for Ruby ', function(){
      var index = languagesView.listOfLanguages.indexOf("Ruby");
      var numberRubyTopics = languagesView.ruby.topics.length;
      expect(languagesView.getTopics()[index].length).to.equal(numberRubyTopics);
    });

    it('Returns topics list with first entry ARGF for Ruby ', function(){
      var index = languagesView.listOfLanguages.indexOf("Ruby");
      var indexARGF = languagesView.ruby.topics.indexOf("ARGF");
      expect(languagesView.getTopics()[index][indexARGF]).to.equal("ARGF");
    });
  });

  describe('#createDummyOption', function(){
    var element;
    var dummyoption;

    beforeEach(function(){
      element = document.createElement('div');
      dummyoption = languagesView.createDummyOption("Hello", element);
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

    it('has child node with disabled returning boolean true by default', function(){
      expect(element.childNodes[0].disabled).to.equal(true);
    });
  });

  describe('#createLanguageDropdown', function(){

    it('creates a html list with id languageDropdownList', function(){
      console.log(languagesView.createLanguageDropdown().id);
      expect(languagesView.createLanguageDropdown().id).to.equal("languageDropdownList")
    });

    it('creates a html list with onChange function', function(){
      expect(typeof(languagesView.createLanguageDropdown().onchange)).to.equal("function")
    });

    it('creates a html list with 4 options as child nodes', function(){
      expect(languagesView.createLanguageDropdown().childNodes.length).to.equal(4)
    });

    it('creates list with first option value Choose a Language', function(){
      expect(languagesView.createLanguageDropdown().childNodes[0].value).to.equal("Choose a language")
    });

    it('creates list with first option innerHTML Choose a Language', function(){
      expect(languagesView.createLanguageDropdown().childNodes[0].innerHTML).to.equal("Choose a language")
    });

    it('creates list with second option value Ruby', function(){
      expect(languagesView.createLanguageDropdown().childNodes[1].value).to.equal("Ruby")
    });

    it('creates list with third option value Javascript', function(){
      expect(languagesView.createLanguageDropdown().childNodes[2].value).to.equal("Javascript")
    });

    it('creates list with fourth option value Jquery', function(){
      expect(languagesView.createLanguageDropdown().childNodes[3].value).to.equal("JQuery")
    });
  });

  describe('#createVersionDropdown', function(){
    it('returns a html element with id versionDropdownList', function(){
      expect(languagesView.createVersionDropdown("Ruby").id).to.equal("versionDropdownList")
    });

    it('returns a html element with id versionDropdownList', function(){
      expect(languagesView.createVersionDropdown("Ruby").id).to.equal("versionDropdownList")
    });

    it('calls create dummy object with correct parameters', function(){
      var chai = require('chai');
      var spies = require('chai-spies');

      chai.use(spies);
      var spy = chai.spy.on(languagesView, 'createDummyOption');
      languagesView.createVersionDropdown("Ruby")
      expect(spy).to.have.been.called();
    });

  });

  describe('generateVersionOptions', function(){
    it('adds list of version options to the version dropdown with 2 choose a version options', function(){
      var dropdown = languagesView.createVersionDropdown("Ruby")
      languagesView.generateVersionOptions(dropdown, "Ruby")
      expect(dropdown.childNodes[0].value).to.equal("Choose a version")
    });
  });

  describe('#createTopicDropdown', function(){
    it('returns a select element', function(){
      expect(languagesView.createTopicDropdown().tagName).to.equal("SELECT")
    });

    it('returns a select element with id topicDropdownList', function(){
      expect(languagesView.createTopicDropdown("Ruby").id).to.equal("topicDropdownList")
    });

    it('calls create dummy object with correct parameters', function(){
      var chai = require('chai');
      var spies = require('chai-spies');
      chai.use(spies);
      var spy = chai.spy.on(languagesView, 'createDummyOption');
      languagesView.createTopicDropdown("Ruby")
      expect(spy).to.have.been.called();
    });
  });

  describe('#generateTopicOptions', function(){
    it('adds list of topic options to the topic dropdown with 1 choose a version options', function(){
      var dropdown = languagesView.createTopicDropdown("Ruby")
      languagesView.generateTopicOptions(dropdown, "Ruby")
      expect(dropdown.childNodes[0].value).to.equal("Choose a topic")
    });

    it('adds list of topic options to the topic dropdown with 2 choose a version options', function(){
      var dropdown = languagesView.createTopicDropdown("Ruby")
      languagesView.generateTopicOptions(dropdown, "Ruby")
      expect(dropdown.childNodes[2].value).to.equal("ARGF")
    });
  });

  describe('#createSubmitSearchButton', function(){
    it('returns a html button element', function(){
      expect(languagesView.createSubmitSearchButton().tagName).to.equal("BUTTON")
    });

    it('returns a html button element with id submitSearchButton', function(){
      expect(languagesView.createSubmitSearchButton().id).to.equal("submitSearchButton")
    });

    it('returns a html button element with a function onclick', function(){
      expect(typeof(languagesView.createSubmitSearchButton().onclick)).to.equal("function")
    });

    it('returns a html button element with innerHTML search', function(){
      expect(languagesView.createSubmitSearchButton().innerHTML).to.equal("Search!")
    });
  });

  // describe('#createLanguageDiv', function(){
  //   it('returns a html element of type div', function(){
  //     var languagesView = new LanguagesView;
  //     expect(languagesView.createLanguageDiv().tagName).to.equal('DIV')
  //   });
  //
  //   it('returns a html element with id language', function(){
  //     var languagesView = new LanguagesView;
  //     expect(languagesView.createLanguageDiv().id).to.equal('language')
  //   });
  //
  //   it('returns a html element with four child nodes', function(){
  //     var languagesView = new LanguagesView;
  //     expect(languagesView.createLanguageDiv().childNodes.length).to.equal(4)
  //   });
  //
  //   it('returns a html element with first child node a language dropdown', function(){
  //     var languagesView = new LanguagesView;
  //     expect(languagesView.createLanguageDiv().childNodes[0].id).to.equal("languageDropdownList")
  //   });
  //
  //   it('returns a html element with second child node a version dropdown', function(){
  //     var languagesView = new LanguagesView;
  //     expect(languagesView.createLanguageDiv().childNodes[1].id).to.equal("versionDropdownList")
  //   });
  //
  //   it('returns a html element with third child node a topic dropdown', function(){
  //     var languagesView = new LanguagesView;
  //     expect(languagesView.createLanguageDiv().childNodes[2].id).to.equal("topicDropdownList")
  //   });
  //
  //   it('returns a html element with fourth child node a search button', function(){
  //     var languagesView = new LanguagesView;
  //     expect(languagesView.createLanguageDiv().childNodes[3].id).to.equal("submitSearchButton")
  //   });
  // });

  var chai = require('chai');
  var stub = require('sinon').stub;
  var spies = require('chai-spies');
  chai.use(spies);
  var Ruby = require('../lib/RubyInBar.js')

  describe('#addLinktoTag', function(){
    it('adds a href as matches the link fed', function(){
      var officialDocLink = "http://www.google.co.uk"
      var stublink = document.createElement('link')
      stub(document, 'getElementById');
      document.getElementById.withArgs('link').returns(stublink)
      languagesView.addLinktoTag(officialDocLink);
      expect(stublink.href).to.equal("http://www.google.co.uk/")
    });
  });

  describe('#topicDropdownChangeEvent', function(){
    it('calls generateTopicOptions with correct arguments', function(){
      var topiclist = document.createElement('option')
      document.getElementById.withArgs('topicDropdownList').returns(topiclist)
      var langoption = document.createElement('option')
      stub(document, 'querySelector');
      document.querySelector.withArgs('#languageDropdownList').returns(langoption)
      document.querySelector("#languageDropdownList").value="thelanguage"

      stub(LanguagesView.prototype, 'generateTopicOptions');
      var spy = chai.spy.on(LanguagesView.prototype, 'generateTopicOptions');
      languagesView.topicDropdownChangeEvent();
      expect(spy).to.have.been.called.with(topiclist, "thelanguage");
    });
  });

  describe('#versionDropdownChangeEvent', function(){
    it('calls generateTopicOptions', function(){
      var versionlist = document.createElement('option')
      document.getElementById.withArgs('versionDropdownList').returns(versionlist)
      var langoption = document.createElement('option')
      document.querySelector.withArgs('#languageDropdownList').returns(langoption)
      document.querySelector("#languageDropdownList").value="thelanguage"
      stub(LanguagesView.prototype, 'generateVersionOptions');
      var spy = chai.spy.on(LanguagesView.prototype, 'generateVersionOptions');
      languagesView.versionDropdownChangeEvent()
      expect(spy).to.have.been.called.with(versionlist, "thelanguage");
    });
  });

  describe('#createDropdownDiv', function(){
    it('returns a div element', function(){
      expect(languagesView.createDropdownDiv().tagName).to.equal('DIV')
    })

    it('returns a div element with 4 child nodes', function(){
      expect(languagesView.createDropdownDiv().childNodes.length).to.equal(4)
    })

    it('returns a div element with 4 child nodes with one language dropdow', function(){
      expect(languagesView.createDropdownDiv().childNodes[0].id).to.equal("languageDropdownList")
    })

    it('returns a div element with 4 child nodes with one version dropdown', function(){
      expect(languagesView.createDropdownDiv().childNodes[1].id).to.equal("versionDropdownList")
    })

    it('returns a div element with 4 child nodes with one topic dropdown', function(){
      expect(languagesView.createDropdownDiv().childNodes[2].id).to.equal("topicDropdownList")
    })

    it('returns a div element with 4 child nodes with one submit search button', function(){
      expect(languagesView.createDropdownDiv().childNodes[3].id).to.equal("submitSearchButton")
    })


  })


  describe('#submitSearchButton', function(){
    it('calls language#generateOfficialDocsURL with correct arguments', function(){
      var langoption = document.createElement('option')
      var versionoption = document.createElement('option')
      var topicoption = document.createElement('option')
      document.querySelector.withArgs('#languageDropdownList').returns(langoption)
      document.querySelector("#languageDropdownList").value="ruby"
      document.querySelector.withArgs('#versionDropdownList').returns(versionoption)
      document.querySelector("#versionDropdownList").value="aversion"
      document.querySelector.withArgs('#topicDropdownList').returns(topicoption)
      document.querySelector("#topicDropdownList").value="atopic"

      var spy = chai.spy.on(Ruby.prototype, 'generateOfficialDocsURL');
      languagesView.submitSearchButtonEvent();

      expect(spy).to.have.been.called.with("aversion", "atopic");
    });

    it('calls addLinktoTag with correct arguments', function(){
      // var langoption = document.createElement('option')
      // var versionoption = document.createElement('option')
      // var topicoption = document.createElement('option')
      // document.querySelector.withArgs('#languageDropdownList').returns(langoption)
      // document.querySelector("#languageDropdownList").value="ruby"
      // document.querySelector.withArgs('#versionDropdownList').returns(versionoption)
      // document.querySelector("#versionDropdownList").value="aversion"
      // document.querySelector.withArgs('#topicDropdownList').returns(topicoption)
      // document.querySelector("#topicDropdownList").value="atopic"
      //
      // var lang = new Ruby();
      // var url = lang.generateOfficialDocsURL('aversion', 'atopic');
      //
      // stub(this, 'addLinktoTag')
      // var spy = require('sinon').spy(addLinktoTag);
      // submitSearchButtonEvent();
      // addLinktoTag()
      //
      // expect(spy).to.be.called();
    });
  });


});
