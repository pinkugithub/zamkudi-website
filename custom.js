window.onscroll = function() {myFunction()};

var header = document.getElementById("myHeader");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}
	

// incremnent-decrement-count 

var no = 0;
function sum() {
  no = no + 1;
  document.getElementById('count').value = no;
  document.getElementById('count1').value = no;
}

function sub() {
  if (no > 0) {
    no = no - 1;
    document.getElementById('count').value = no
    document.getElementById('count1').value = no;
  }
}



// accordian

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active-1");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}



var main = document.querySelectorAll(".navbar-nav");
      var dropdown = document.getElementsByClassName(".drop-down-1");
  
      var i;
      for (i = 0; i < dropdown.length; i++) {
        dropdown[i].addEventListener("click", function () {
          this.classList.toggle("active");
        });
      }
      for (i = 0; i < main.length; i++) {
        main[i].addEventListener("click", function () {
          this.classList.toggle("active");
        });
      }

document.getElementById("dropdownIcon").onclick = function() {

  document.getElementById("dropdownContent").classList.toggle("active");

}