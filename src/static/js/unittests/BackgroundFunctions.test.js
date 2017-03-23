var expect = require('chai').expect;
var changeClickButtonStatus = require('../BackgroundFunctions.js').changeClickButtonStatus;
var ourChrome = require('sinon-chrome');
var spies = require('chai-spies')
var chai = require('chai')
var stub = require('sinon').stub
chai.use(spies);

describe('BackgroundFunctions', function(){
  describe('#changeClickButtonStatus', function(){
    it('if current status is "on" returns "off"', function(){
      expect(changeClickButtonStatus("on", ourChrome)).to.equal("off");
    })
    it('if current status is "off" returns "on"', function(){
      expect(changeClickButtonStatus("off", ourChrome)).to.equal("on");
    })

    it('calls setIcon with correct argument', function(){
      // var spy = chai.spy.on(ourChrome.browserAction, 'setIcon')
      // changeClickButtonStatus("on", ourChrome);
      // expect(spy).to.have.been.called()
    })
  })
})
