function createHeader(){
  var officialHeader = document.createElement("p");
  officialHeader.id = "officialHeader";
  var headerContent = document.createTextNode("Official Documentation:");
  officialHeader.appendChild(headerContent);
  return officialHeader;
};
function createLink(){
  var link = document.createElement("a");
  link.id = "link";
  return link;
};
function createOfficialDiv(){
  var officialDiv = document.createElement("div");
  officialDiv.id = "official";
  officialDiv.appendChild(createHeader());
  officialDiv.appendChild(createLink());
  return officialDiv;
};

module.exports = {
  createHeader,
  createLink,
  createOfficialDiv
}
