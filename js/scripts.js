
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 125 || document.documentElement.scrollTop > 125) {
    document.getElementById("topnav").style.padding = "0px 0px";
    document.getElementById("navlinks").style.fontSize = "0.9em";
    document.getElementById("logo").style.maxWidth = "80px";
    document.getElementById("sociallinks").style.fontSize = "0.9em";
  } else {
    document.getElementById("topnav").style.padding = "20px 0px";
    document.getElementById("navlinks").style.fontSize = "1.1em";
    document.getElementById("logo").style.maxWidth = "100px";
    document.getElementById("sociallinks").style.fontSize = "1.1em";
  }
}
