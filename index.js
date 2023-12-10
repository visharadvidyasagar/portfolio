function openEdu(evt, cityName) {
    var i, tabcontent, tabbtn;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tabbtn = document.getElementsByClassName("tabbtn");
    for (i = 0; i < tabbtn.length; i++) {
      tabbtn[i].className = tabbtn[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }
  
document.getElementById("defaultOpen").click();

//alert
function myFunction() {
  alert("Right Click and some shortcuts are disabled to prevent                            +++++++++++++  PLAGIARISM  +++++++++++++");
}

//right click
document.addEventListener('contextmenu', 
     event => event.preventDefault()
);

//shortcut keys
document.onkeydown = function(e) {
  if(e.keyCode == 123) {
   return false;
  }
  if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)){
   return false;
  }
  if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)){
   return false;
  }
  if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)){
   return false;
  }
  if(e.ctrlKey && e.keyCode == 'S'.charCodeAt(0)){
    return false;
   }

  if(e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)){
   return false;
  }      
}

const testDiv = document.getElementById("test");
testDiv.style.cursor = "default"; 