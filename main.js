var siteName = document.getElementById("siteName");
var siteUrl = document.getElementById("siteUrl");
var searchUrl = document.getElementById("searchUrl");
var listWebsites = [];

if (localStorage.getItem("bookMark") == null) {
listWebsites = [];
} else {
listWebsites = JSON.parse(localStorage.getItem("bookMark"));
displayWebsite();
}



function addWebsite() {
if ( vaildName() && vaildUrl()) {
    var Websites = {
    name: siteName.value,
    url: siteUrl.value,
    };
    listWebsites.push(Websites);
    localStorage.setItem("bookMark", JSON.stringify(listWebsites));
    displayWebsite();
    clearData();
}
}



function displayWebsite() {
temp = "";
for (let i = 0; i < listWebsites.length; i++) {
    temp += `
    <div class="col-md-12 content">
    <h3 class="d-inline-block">${listWebsites[i].name}</h3>
    <a href="${listWebsites[i].url}" id="visitBtn" target='_blank' class="btn btn-outline-primary d-inline-block mx-2">Visit</a>
    <button  id="deleteBtn" class="btn btn-outline-danger d-inline-block mx-2" onclick="deleteWebsite(${i})">Delete</button>
</div>`;
}
document.getElementById("rowItem").innerHTML = temp;
}

function clearData() {
siteName.value = "";
siteUrl.value = "";
document.getElementById("alertUrl").style.display = "none";
}



function vaildUrl() {
var regex = /^(http|https):\/\/www\.[a-zA-Z0-9_]{3,10}\.[a-zA-Z]{2,3}$/;
if (regex.test(siteUrl.value)) {
    document.getElementById("alertUrl").style.display = "none";
    return true;
} else {
    document.getElementById("alertUrl").style.display = "block";
    return false;
}
}
function vaildName() {
var regex = /^[A-Z][a-zA-Z]{2,10}$/;
if (regex.test(siteName.value)) {
    document.getElementById("alertName").style.display = "none";
    return true;
} else {
    document.getElementById("alertName").style.display = "block";
    return false;
}
}


function deleteWebsite(index) {
listWebsites.splice(index, 1);
localStorage.setItem("bookMark", JSON.stringify(listWebsites));
displayWebsite();
}
