function RubyonRails() {
  this.name = "RubyonRails";
  this.baseUrl = "http://rubyonrails.org";
  this.offDocs = "Ruby on Rails";
  this.versions = [ "Comming soon!"];
  this.topics = [
                  "Comming soon!"
                ];
}

RubyonRails.prototype.generateOfficialDocsURL = function (version, topic) {
  if (topic === 'Choose a topic'){
    return this.baseUrl
  } else {
    topic = topic.replace("Comming soon!", "");
    return this.baseUrl + topic;
  }
};


RubyonRails.prototype.nameOfDoc = function () {
  return this.offDocs;
};

module.exports = RubyonRails;
