function Selenium() {
  this.name = "Selenium";
  this.baseUrl = "http://www.seleniumhq.org/";
  this.offDocs = "Selenium";
  this.versions = [ "Comming soon!"];
  this.topics = [
                  "Comming soon!"
                ];
}

Selenium.prototype.generateOfficialDocsURL = function (version, topic) {
  if (topic === 'Choose a topic'){
    return this.baseUrl
  } else {
    topic = topic.replace("Comming soon!", "");
    return this.baseUrl + topic;
  }
};


Selenium.prototype.nameOfDoc = function () {
  return this.offDocs;
};

module.exports = Selenium;
