function Haskell() {
  this.name = "Haskell";
  this.baseUrl = "https://www.haskell.org";
  this.offDocs = "Haskell";
  this.versions = [ "Comming soon!"];
  this.topics = [
                  "Comming soon!"
                ];
}

Haskell.prototype.generateOfficialDocsURL = function (version, topic) {
  if (topic === 'Choose a topic'){
    return this.baseUrl
  } else {
    topic = topic.replace("Comming soon!", "");
    return this.baseUrl + topic;
  }
};


Haskell.prototype.nameOfDoc = function () {
  return this.offDocs;
};

module.exports = Haskell;
