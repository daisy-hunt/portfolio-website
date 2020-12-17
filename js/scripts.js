
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 125 || document.documentElement.scrollTop > 125) {
    document.getElementById("topnav").style.padding = "0px 0px";
  } else {
    document.getElementById("topnav").style.padding = "20px 0px";
  }
}
  
