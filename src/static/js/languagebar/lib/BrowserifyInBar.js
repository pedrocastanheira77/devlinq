function Browserify() {
  this.name = "Browserify";
  this.baseUrl = "http://browserify.org";
  this.offDocs = "Browserify";
  this.versions = [ "Comming soon!"];
  this.topics = [
                  "Comming soon!"
                ];
}

Browserify.prototype.generateOfficialDocsURL = function (version, topic) {
  if (topic === 'Choose a topic'){
    return this.baseUrl
  } else {
    topic = topic.replace("Comming soon!", "");
    return this.baseUrl + topic;
  }
};


Browserify.prototype.nameOfDoc = function () {
  return this.offDocs;
};

module.exports = Browserify;
