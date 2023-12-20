/*---------------------------Round1 - Round2 tab---------------------------------------------------*/  
function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }


  document.addEventListener("DOMContentLoaded", function(event) { 
    document.getElementById("mybutton").click();
    });


/*---------------------------Round1 reward tab---------------------------------------------------*/  
  function infofunc(e, info) {
   var i, content, links;
   content = document.getElementsByClassName("demo2");
   for (i = 0; i < content.length; i++) {
      content[i].style.display = "none";
   }
   links = document.getElementsByClassName("demo");
   for (i = 0; i < links.length; i++) {
      links[i].className = links[i].className.replace(" active", "");
   }
   document.getElementById(info).style.display = "block";
   e.currentTarget.className += " active";
}


    document.addEventListener("DOMContentLoaded", function(event) { 
    document.getElementById("mybutton1").click();
    });



/*---------------------------Round2 reward tab---------------------------------------------------*/  
function inforeward(e, info) {
   var i, contentr2, linksr2;
   contentr2 = document.getElementsByClassName("demor22");
   for (i = 0; i < contentr2.length; i++) {
      contentr2[i].style.display = "none";
   }
   linksr2 = document.getElementsByClassName("demor21");
   for (i = 0; i < linksr2.length; i++) {
      linksr2[i].className = linksr2[i].className.replace(" active", "");
   }
   document.getElementById(info).style.display = "block";
   e.currentTarget.className += " active";
}

document.addEventListener("DOMContentLoaded", function(event) { 
    document.getElementById("mybuttonr21").click();
    });

/*-----------------------Round2 reward tab---------------------------------------------------------------*/


/*----------------------Leaderboard round1 tab-------------------------------------------------*/
function infoleadr1(e, info) {
    var i, contentlr1, linkslr1;
    contentlr1 = document.getElementsByClassName("demolr12");
    for (i = 0; i < contentlr1.length; i++) {
       contentlr1[i].style.display = "none";
    }
    linkslr1 = document.getElementsByClassName("demolr11");
    for (i = 0; i < linkslr1.length; i++) {
       linkslr1[i].className = linkslr1[i].className.replace(" active", "");
    }
    document.getElementById(info).style.display = "block";
    e.currentTarget.className += " active";
 }
 
 document.addEventListener("DOMContentLoaded", function(event) { 
    document.getElementById("mybuttonlr1").click();
    });


/*----------------------Leaderboard round2 tab-------------------------------------------------*/
function infoleadr2(e, info) {
    var i, contentlr2, linkslr2;
    contentlr2 = document.getElementsByClassName("demolr22");
    for (i = 0; i < contentlr2.length; i++) {
       contentlr2[i].style.display = "none";
    }
    linkslr2 = document.getElementsByClassName("demolr21");
    for (i = 0; i < linkslr2.length; i++) {
       linkslr2[i].className = linkslr2[i].className.replace(" active", "");
    }
    document.getElementById(info).style.display = "block";
    e.currentTarget.className += " active";
 }
 
 document.addEventListener("DOMContentLoaded", function(event) { 
    document.getElementById("mybuttonlr2").click();
    });






function infofunc1(e, info) {
   var i, contentls, linksls;
   contentls = document.getElementsByClassName("demo4");
   for (i = 0; i < contentls.length; i++) {
      contentls[i].style.display = "none";
   }
   linksls = document.getElementsByClassName("demo3");
   for (i = 0; i < linksls.length; i++) {
      linksls[i].className = linksls[i].className.replace(" active", "");
   }
   document.getElementById(info).style.display = "block";
   e.currentTarget.className += " active";
}


function infofunc2(e, info) {
   var i, contentsr1, linkssr1;
   contentsr1 = document.getElementsByClassName("demo6");
   for (i = 0; i < contentsr1.length; i++) {
      contentsr1[i].style.display = "none";
   }
   linkssr1 = document.getElementsByClassName("demo5");
   for (i = 0; i < linkssr1.length; i++) {
      linkssr1[i].className = linkssr1[i].className.replace(" active", "");
   }
   document.getElementById(info).style.display = "block";
   e.currentTarget.className += " active";
}


function infofunc3(e, info) {
   var i, contentlr, linkslr;
   contentlr = document.getElementsByClassName("demo8");
   for (i = 0; i < contentlr.length; i++) {
      contentlr[i].style.display = "none";
   }
   linkslr = document.getElementsByClassName("demo7");
   for (i = 0; i < linkslr.length; i++) {
      linkslr[i].className = linkslr[i].className.replace(" active", "");
   }
   document.getElementById(info).style.display = "block";
   e.currentTarget.className += " active";
}


    document.addEventListener("DOMContentLoaded", function(event) { 
    document.getElementById("mybutton").click();
    });

    document.addEventListener("DOMContentLoaded", function(event) { 
    document.getElementById("mybutton1").click();
    });


    document.addEventListener("DOMContentLoaded", function(event) { 
    document.getElementById("mybutton2").click();
    });

    document.addEventListener("DOMContentLoaded", function(event) { 
    document.getElementById("mybutton3").click();
    });

    document.addEventListener("DOMContentLoaded", function(event) { 
    document.getElementById("mybutton4").click();
    });



/*----------------------------------------Round1 Reward slider------------------------------------------------------------*/

    var slideIndex = 1;
    showDivs(slideIndex);
    
    function plusDivs(n) {
      showDivs(slideIndex += n);
    }
    
    function currentDiv(n) {
      showDivs(slideIndex = n);
    }
    
    function showDivs(n) {
      var i;
      var x = document.getElementsByClassName("mySlides");
      var dots = document.getElementsByClassName("demoslide");
      if (n==undefined){n = ++slideIndex}
      if (n > x.length) {slideIndex = 1}
      if (n < 1) {slideIndex = x.length}
      for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";  
      }
      for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" w3-white", "");
      }
      x[slideIndex-1].style.display = "grid";  
      dots[slideIndex-1].className += " w3-white";
    }







    var slideIndex1 = 1;
    showDivs1(slideIndex1);
    
    function plusDivs1(n) {
      showDivs1(slideIndex1 += n);
    }
    
    function currentDiv1(n) {
      showDivs1(slideIndex1 = n);
    }
    
    function showDivs1(n) {
      var i;
      var x = document.getElementsByClassName("mySlides1");
      var dots = document.getElementsByClassName("demoslide1");
      if (n==undefined){n = ++slideIndex1}
      if (n > x.length) {slideIndex1 = 1}
      if (n < 1) {slideIndex1 = x.length}
      for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";  
      }
      for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" w3-white", "");
      }
      x[slideIndex1-1].style.display = "grid";  
      dots[slideIndex1-1].className += " w3-white";
    }




    var slideIndex2 = 1;
    showDivs2(slideIndex2);
    
    function plusDivs2(n) {
      showDivs2(slideIndex2 += n);
    }
    
    function currentDiv2(n) {
      showDivs2(slideIndex2 = n);
    }
    
    function showDivs2(n) {
      var i;
      var x = document.getElementsByClassName("mySlides2");
      var dots = document.getElementsByClassName("demoslide2");
      if (n==undefined){n = ++slideIndex2}
      if (n > x.length) {slideIndex2 = 1}
      if (n < 1) {slideIndex2 = x.length}
      for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";  
      }
      for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" w3-white", "");
      }
      x[slideIndex2-1].style.display = "grid";  
      dots[slideIndex2-1].className += " w3-white";
    }

/*----------------------------------------Round1 Reward slider End------------------------------------------------------------*/


/*----------------------------------------Round2 Reward slider------------------------------------------------------------*/

var slideIndex3 = 1;
    showDivs3(slideIndex3);
    
    function plusDivs3(n) {
      showDivs3(slideIndex3 += n);
    }
    
    function currentDiv3(n) {
      showDivs3(slideIndex3 = n);
    }
    
    function showDivs3(n) {
      var i;
      var x = document.getElementsByClassName("mySlides3");
      var dots = document.getElementsByClassName("demoslide3");
      if (n==undefined){n = ++slideIndex3}
      if (n > x.length) {slideIndex3 = 1}
      if (n < 1) {slideIndex3 = x.length}
      for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";  
      }
      for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" w3-white", "");
      }
      x[slideIndex3-1].style.display = "grid";  
      dots[slideIndex3-1].className += " w3-white";
    }







    var slideIndex4 = 1;
    showDivs4(slideIndex4);
    
    function plusDivs4(n) {
      showDivs4(slideIndex4 += n);
    }
    
    function currentDiv4(n) {
      showDivs4(slideIndex4 = n);
    }
    
    function showDivs4(n) {
      var i;
      var x = document.getElementsByClassName("mySlides4");
      var dots = document.getElementsByClassName("demoslide4");
      if (n==undefined){n = ++slideIndex4}
      if (n > x.length) {slideIndex4 = 1}
      if (n < 1) {slideIndex4 = x.length}
      for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";  
      }
      for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" w3-white", "");
      }
      x[slideIndex4-1].style.display = "grid";  
      dots[slideIndex4-1].className += " w3-white";
    }




    var slideIndex5 = 1;
    showDivs5(slideIndex5);
    
    function plusDivs5(n) {
      showDivs5(slideIndex5 += n);
    }
    
    function currentDiv5(n) {
      showDivs5(slideIndex5 = n);
    }
    
    function showDivs5(n) {
      var i;
      var x = document.getElementsByClassName("mySlides5");
      var dots = document.getElementsByClassName("demoslide5");
      if (n==undefined){n = ++slideIndex5}
      if (n > x.length) {slideIndex5 = 1}
      if (n < 1) {slideIndex5 = x.length}
      for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";  
      }
      for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" w3-white", "");
      }
      x[slideIndex5-1].style.display = "grid";  
      dots[slideIndex5-1].className += " w3-white";
    }

/*----------------------------------------Round2 Reward slider End------------------------------------------------------------*/





/*----------------------------Guide Box---------------------------*/

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

