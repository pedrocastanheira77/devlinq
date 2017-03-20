function createLink(){
  var link = document.createElement("a");
  link.id = "link";
  link.className = "d_link";
  return link;
};

function createOfficialDiv(){
  var officialDiv = document.createElement("div");
  officialDiv.id = "official";
  officialDiv.appendChild(createLink());
  return officialDiv;
};

module.exports = {
  createOfficialDiv
}
