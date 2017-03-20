var expect = require('chai').expect;
var LanguagesView = require('../LanguagesBar.js')

describe('LanguagesView', function(){

  describe('#getLanguagesView', function(){
    it('Returns languages list of length 3', function(){
      var languagesView = new LanguagesView;
      expect(languagesView.getLanguagesView().length).to.equal(3);
    })

    it("Returns languages list of languages with first Ruby", function(){
      var languagesView = new LanguagesView;
      expect(languagesView.getLanguagesView()[0]).to.equal("Ruby");
    })

    it("Returns languages list of languages with second Javascript", function(){
      var languagesView = new LanguagesView;
      expect(languagesView.getLanguagesView()[1]).to.equal("Javascript");
    })

    it("Returns languages list of languages with third Jquery", function(){
      var languagesView = new LanguagesView;
      expect(languagesView.getLanguagesView()[2]).to.equal("JQuery");
    })
  });

  describe('#getVersions', function(){
    it('Returns version list of length 3', function(){
      var languagesView = new LanguagesView;
      expect(languagesView.getVersions().length).to.equal(3);
    })

    it("Returns languages list of languages with first Ruby and relevant versions", function(){
      var languagesView = new LanguagesView;
      expect(languagesView.getVersions()[0][0]).to.equal("2.1.0");
      expect(languagesView.getVersions()[0][1]).to.equal("2.3.3");
      expect(languagesView.getVersions()[0][2]).to.equal("2.4.0");

    })

    it("Returns languages list of languages with second Javascript and relevant versions", function(){
      var languagesView = new LanguagesView;
      expect(languagesView.getVersions()[1][0]).to.equal("ECMAScript5.1");
      expect(languagesView.getVersions()[1][1]).to.equal("ECMAScript6");
      expect(languagesView.getVersions()[1][2]).to.equal("ECMAScript7");
    })

    it("Returns languages list of languages with third Jquery and relevant versions", function(){
      var languagesView = new LanguagesView;
      expect(languagesView.getVersions()[2][0]).to.equal('V1');
      expect(languagesView.getVersions()[2][1]).to.equal('V2');

    })
  })

  describe('#getTopics', function(){
    it('Returns topics list of length 105 for Ruby ', function(){
      var languagesView = new LanguagesView;
      expect(languagesView.getTopics()[0].length).to.equal(105);
    });

    it('Returns topics list with first entry ARGF for Ruby ', function(){
      var languagesView = new LanguagesView;
      expect(languagesView.getTopics()[0][0]).to.equal("ARGF");
    });

    it('Returns topics list of length 37 for Javascript ', function(){
      var languagesView = new LanguagesView;
      expect(languagesView.getTopics()[1].length).to.equal(37);
    });

    it('Returns topics list with first entry Array for Javascript ', function(){
      var languagesView = new LanguagesView;
      expect(languagesView.getTopics()[1][0]).to.equal("Array");
    });

    it('Returns topics list of length 65 for Jquery ', function(){
      var languagesView = new LanguagesView;
      expect(languagesView.getTopics()[2].length).to.equal(65);

    });

    it('Returns topics list with first entry add() for Jquery ', function(){
      var languagesView = new LanguagesView;
      expect(languagesView.getTopics()[2][0]).to.equal("add()");
    });
  });

  describe('#createDummyOption', function(){
    it('assigns child node with given string to the div', function(){
      var languagesView = new LanguagesView;
      var element = document.createElement('div')
      var dummyoption = languagesView.createDummyOption("Hello", element)
      expect(element.childNodes[0].innerHTML).to.equal("Choose a Hello")
    });

    it('assigns child node with given string as value to the div', function(){
      var languagesView = new LanguagesView;
      var element = document.createElement('div')
      var dummyoption = languagesView.createDummyOption("Hello", element)
      expect(element.childNodes[0].value).to.equal("Choose a Hello")
    });

    it('has child node with selected returning boolean true by default', function(){
      var languagesView = new LanguagesView;
      var element = document.createElement('div')
      var dummyoption = languagesView.createDummyOption("Hello", element)
      expect(element.childNodes[0].selected).to.equal(true)
    });

    it('has child node with disabled returning boolean true by default', function(){
      var languagesView = new LanguagesView;
      var element = document.createElement('div')
      var dummyoption = languagesView.createDummyOption("Hello", element)
      expect(element.childNodes[0].disabled).to.equal(true)
    });
  });

  describe('#createLanguageDropdown', function(){

    it('creates a html list with id languageDropdownList', function(){
      var languagesView = new LanguagesView;
      expect(languagesView.createLanguageDropdown().id).to.equal("languageDropdownList")
    });

    it('creates a html list with onChange function', function(){
      var languagesView = new LanguagesView;
      expect(typeof(languagesView.createLanguageDropdown().onchange)).to.equal("function")
    });

    it('creates a html list with 4 options as child nodes', function(){
      var languagesView = new LanguagesView;
      expect(languagesView.createLanguageDropdown().childNodes.length).to.equal(4)
    });

    it('creates list with first option value Choose a Language', function(){
      var languagesView = new LanguagesView;
      expect(languagesView.createLanguageDropdown().childNodes[0].value).to.equal("Choose a language")
    });

    it('creates list with first option innerHTML Choose a Language', function(){
      var languagesView = new LanguagesView;
      expect(languagesView.createLanguageDropdown().childNodes[0].innerHTML).to.equal("Choose a language")
    });

    it('creates list with second option value Ruby', function(){
      var languagesView = new LanguagesView;
      expect(languagesView.createLanguageDropdown().childNodes[1].value).to.equal("Ruby")
    });

    it('creates list with third option value Javascript', function(){
      var languagesView = new LanguagesView;
      expect(languagesView.createLanguageDropdown().childNodes[2].value).to.equal("Javascript")
    });

    it('creates list with fourth option value Jquery', function(){
      var languagesView = new LanguagesView;
      expect(languagesView.createLanguageDropdown().childNodes[3].value).to.equal("JQuery")
    });
  });

  describe('#createVersionDropdown', function(){
    it('returns a html element with id versionDropdownList', function(){
      var languagesView = new LanguagesView;
      expect(languagesView.createVersionDropdown("Ruby").id).to.equal("versionDropdownList")
    });

    it('returns a html element with id versionDropdownList', function(){
      var languagesView = new LanguagesView;
      expect(languagesView.createVersionDropdown("Ruby").id).to.equal("versionDropdownList")
    });

    it('calls create dummy object with correct parameters', function(){
      var chai = require('chai');
      var spies = require('chai-spies');

      chai.use(spies);
      var languagesView = new LanguagesView;
      var spy = chai.spy.on(languagesView, 'createDummyOption');
      languagesView.createVersionDropdown("Ruby")
      expect(spy).to.have.been.called();
    });

  });

  describe('generateVersionOptions', function(){
    it('adds list of version options to the version dropdown with 2 choose a version options', function(){
      var languagesView = new LanguagesView;
      var dropdown = languagesView.createVersionDropdown("Ruby")
      languagesView.generateVersionOptions(dropdown, "Ruby")
      expect(dropdown.childNodes[0].value).to.equal("Choose a version")
    });
  });

  describe('#createTopicDropdown', function(){
    it('returns a select element', function(){
      var languagesView = new LanguagesView;
      expect(languagesView.createTopicDropdown().tagName).to.equal("SELECT")
    });

    it('returns a select element with id topicDropdownList', function(){
      var languagesView = new LanguagesView;
      expect(languagesView.createTopicDropdown("Ruby").id).to.equal("topicDropdownList")
    });

    it('calls create dummy object with correct parameters', function(){
      var chai = require('chai');
      var spies = require('chai-spies');
      chai.use(spies);
      var languagesView = new LanguagesView;
      var spy = chai.spy.on(languagesView, 'createDummyOption');
      languagesView.createTopicDropdown("Ruby")
      expect(spy).to.have.been.called();
    });
  });

  describe('#generateTopicOptions', function(){
    it('adds list of topic options to the topic dropdown with 1 choose a version options', function(){
      var languagesView = new LanguagesView;
      var dropdown = languagesView.createTopicDropdown("Ruby")
      languagesView.generateTopicOptions(dropdown, "Ruby")
      expect(dropdown.childNodes[0].value).to.equal("Choose a topic")
    });

    it('adds list of topic options to the topic dropdown with 2 choose a version options', function(){
      var languagesView = new LanguagesView;
      var dropdown = languagesView.createTopicDropdown("Ruby")
      languagesView.generateTopicOptions(dropdown, "Ruby")
      expect(dropdown.childNodes[2].value).to.equal("ARGF")
    });
  });

  describe('#createSubmitSearchButton', function(){
    it('returns a html button element', function(){
      var languagesView = new LanguagesView;
      expect(languagesView.createSubmitSearchButton().tagName).to.equal("BUTTON")
    });

    it('returns a html button element with id submitSearchButton', function(){
      var languagesView = new LanguagesView;
      expect(languagesView.createSubmitSearchButton().id).to.equal("submitSearchButton")
    });

    it('returns a html button element with a function onclick', function(){
      var languagesView = new LanguagesView;
      expect(typeof(languagesView.createSubmitSearchButton().onclick)).to.equal("function")
    });

    it('returns a html button element with innerHTML search', function(){
      var languagesView = new LanguagesView;
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
      var languagesView = new LanguagesView;
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
      var languagesView = new LanguagesView;
      var topiclist = document.createElement('option')
      document.getElementById.withArgs('topicDropdownList').returns(topiclist)
      var langoption = document.createElement('option')
      stub(document, 'querySelector');
      document.querySelector.withArgs('#languageDropdownList').returns(langoption)
      document.querySelector("#languageDropdownList").value="thelanguage"

      stub(LanguagesView.prototype, 'generateTopicOptions');
      var spy = chai.spy.on(LanguagesView.prototype, 'generateTopicOptions');
      languagesView.topicDropdownChangeEvent()

      expect(spy).to.have.been.called.with(topiclist, "thelanguage");
    });
  });

  describe('#versionDropdownChangeEvent', function(){
    it('calls generateTopicOptions', function(){
      var languagesView = new LanguagesView;
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
      var languagesView = new LanguagesView;
      expect(languagesView.createDropdownDiv().tagName).to.equal('DIV')
    })

    it('returns a div element with 4 child nodes', function(){
      var languagesView = new LanguagesView;
      expect(languagesView.createDropdownDiv().childNodes.length).to.equal(4)
    })

    it('returns a div element with 4 child nodes with one language dropdow', function(){
      var languagesView = new LanguagesView;
      expect(languagesView.createDropdownDiv().childNodes[0].id).to.equal("languageDropdownList")
    })

    it('returns a div element with 4 child nodes with one version dropdown', function(){
      var languagesView = new LanguagesView;
      expect(languagesView.createDropdownDiv().childNodes[1].id).to.equal("versionDropdownList")
    })

    it('returns a div element with 4 child nodes with one topic dropdown', function(){
      var languagesView = new LanguagesView;
      expect(languagesView.createDropdownDiv().childNodes[2].id).to.equal("topicDropdownList")
    })

    it('returns a div element with 4 child nodes with one submit search button', function(){
      var languagesView = new LanguagesView;
      expect(languagesView.createDropdownDiv().childNodes[3].id).to.equal("submitSearchButton")
    })


  })


  describe('#submitSearchButton', function(){
    it('calls language#generateOfficialDocsURL with correct arguments', function(){
      var languagesView = new LanguagesView;
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
