function OfficialDocsView() {
  var officialDiv = document.createElement("div");
  officialDiv.id = "official";
  var officialContent = document.createTextNode("this is the official docs");
  officialDiv.appendChild(officialContent);
  return officialDiv;
}
