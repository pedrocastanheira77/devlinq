function OfficialDocsView() {
  var officialDiv = document.createElement("div");
  officialDiv.id = "official";
  var officialContent = document.createTextNode("Hi there and greetings!");
  officialDiv.appendChild(officialContent);
  return officialDiv;
}
