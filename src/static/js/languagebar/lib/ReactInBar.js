function React() {
  this.name = "React";
  this.baseUrl = "https://facebook.github.io/react";
  this.offDocs = "React";
  this.versions = [ "Comming soon!"];
  this.topics = [
                  "Comming soon!"
                ];
}

React.prototype.generateOfficialDocsURL = function (version, topic) {
  if (topic === 'Choose a topic'){
    return this.baseUrl
  } else {
    topic = topic.replace("Comming soon!", "");
    return this.baseUrl + topic;
  }
};


React.prototype.nameOfDoc = function () {
  return this.offDocs;
};

module.exports = React;
