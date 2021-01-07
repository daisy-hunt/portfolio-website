//Minimise Nav Bar

window.addEventListener("scroll", scrollNav);

function scrollNav() {
  if (document.body.scrollTop > 125 || document.documentElement.scrollTop > 125) {
    document.getElementById("topnav").style.padding = "0px 0px";
    document.getElementById("navlinks").style.fontSize = "0.9em";
    document.getElementById("logo").style.maxWidth = "90px";
    document.getElementById("sociallinks").style.fontSize = "0.9em";
    document.getElementById("topnav").style.boxShadow = "0px 0px 8px #c4c4c4";
  } else {
    document.getElementById("topnav").style.padding = "20px 0px";
    document.getElementById("navlinks").style.fontSize = "1.1em";
    document.getElementById("logo").style.maxWidth = "100px";
    document.getElementById("sociallinks").style.fontSize = "1.1em";
    document.getElementById("topnav").style.boxShadow = "0px 0px 0px #ffffff";
  }
}

//Scroll Up Button

mybutton = document.getElementById("myBtn");

window.addEventListener("scroll", scrollButton);

function scrollButton() {
if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
  mybutton.style.display = "block";
} else {
  mybutton.style.display = "none";
}
}

function topFunction() {
document.body.scrollTop = 0; // For Safari
document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
