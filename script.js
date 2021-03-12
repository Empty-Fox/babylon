$(document).ready(function(){
    $('#menu-icon').on('click', function(){
      $('.navbar').toggleClass('expand');
      return false;
    });
  });

  document.getElementById("year").innerHTML = new Date().getFullYear();
