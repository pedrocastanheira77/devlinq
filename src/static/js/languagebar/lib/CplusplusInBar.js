function Cplusplus() {
  this.name = "C++";
  this.baseUrl = "https://isocpp.org";
  this.offDocs = "C++";
  this.versions = [ "Comming soon!"];
  this.topics = [
                  "Comming soon!"
                ];
}

Cplusplus.prototype.generateOfficialDocsURL = function (version, topic) {
  if (topic === 'Choose a topic'){
    return this.baseUrl
  } else {
    topic = topic.replace("Comming soon!", "");
    return this.baseUrl + topic;
  }
};


Cplusplus.prototype.nameOfDoc = function () {
  return this.offDocs;
};

module.exports = Cplusplus;
