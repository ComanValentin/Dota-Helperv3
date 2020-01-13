var home = document.getElementById("home-link");
var items = document.getElementById("items-link");
var patch = document.getElementById("patch-link");
var agility = document.getElementById("agility-link");
var strength = document.getElementById("strength-link");
var intelligence = document.getElementById("intelligence-link");
var support = document.getElementById("support-link");
var login = document.getElementById("login");

home.addEventListener("click", hdLink);
items.addEventListener("click", hdLink);
patch.addEventListener("click", hdLink);
agility.addEventListener("click", hdLink);
strength.addEventListener("click", hdLink);
intelligence.addEventListener("click", hdLink);
support.addEventListener("click", hdLink);
login.addEventListener("click", hdLink);

function hdLink(){
    console.log(this);
}