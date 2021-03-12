$(document).ready(function(){
    $('#menu-icon').on('click', function(){
      $('.navbar').toggleClass('expand');
      return false;
    });
  });

  document.getElementById("year").innerHTML = new Date().getFullYear();


  //Get the button
  var mybutton = document.getElementById("scrollTop");    
  window.onscroll = function() {scrollFunction()};  
  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }
  function topFunction() {
    window.scrollTo({top: 0, behavior: 'smooth'});    
  }
