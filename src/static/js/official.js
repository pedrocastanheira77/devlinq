function OfficialDocsView() {
}

OfficialDocsView.prototype.createHeader = function(){
  var officialHeader = document.createElement("p");
  officialHeader.id = "officialHeader";
  var headerContent = document.createTextNode("Official Documentation:");
  officialHeader.appendChild(headerContent);
  return officialHeader;
};

OfficialDocsView.prototype.createLink = function(){
  var link = document.createElement("a");
  link.id = "link";
  return link;
};

OfficialDocsView.prototype.createOfficialDiv = function(){
  var officialDiv = document.createElement("div");
  officialDiv.id = "official";
  officialDiv.appendChild(this.createHeader());
  officialDiv.appendChild(this.createLink());
  return officialDiv;
};
