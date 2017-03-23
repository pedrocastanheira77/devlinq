function Chai() {
  this.name = "Chai";
  this.baseUrl = "http://chaijs.com";
  this.offDocs = "Chai";
  this.versions = [ "Comming soon!"];
  this.topics = [
                  "Comming soon!"
                ];
}

Chai.prototype.generateOfficialDocsURL = function (version, topic) {
  if (topic === 'Choose a topic'){
    return this.baseUrl
  } else {
    topic = topic.replace("Comming soon!", "");
    return this.baseUrl + topic;
  }
};


Chai.prototype.nameOfDoc = function () {
  return this.offDocs;
};

module.exports = Chai;
