function Lisp() {
  this.name = "Lisp";
  this.baseUrl = "http://lisp-lang.org/";
  this.offDocs = "Lisp";
  this.versions = [ "Comming soon!"];
  this.topics = [
                  "Comming soon!"
                ];
}

Lisp.prototype.generateOfficialDocsURL = function (version, topic) {
  if (topic === 'Choose a topic'){
    return this.baseUrl
  } else {
    topic = topic.replace("Comming soon!", "");
    return this.baseUrl + topic;
  }
};


Lisp.prototype.nameOfDoc = function () {
  return this.offDocs;
};

module.exports = Lisp;
