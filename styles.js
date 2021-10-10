function menuBar() {

    var x = document.getElementById("list");
    var logo = document.getElementById("port")
;    if (x.style.display === "block") {
      x.style.display = "none";
    } 
    else {
      x.style.display = "block";
    }

}

//typing animation 

var typed = new Typed (".typing", {


  strings: ["Frontend Developer", "IT Support Specialist", "Customer Service Representative"],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true


}) 


// team typing



var typed = new Typed (".typing1", {


  strings: ["Tina Tony", "Frontend Developer"],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true


}) 

var typed = new Typed (".typing2", {


  strings: ["Lanre Dinho", "System Administrator"],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true


}) 



var typed = new Typed (".typing3", {


  strings: ["Julie Chan", "IT Support Specialist", "Frontend Developer"],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true


}) 




var typed = new Typed (".typing4", {


  strings: ["Michael Page", "Youtuber", "Software Engineer", "Web Designer"],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true


}) 



var typed = new Typed (".typing5", {


  strings: ["Stacy Ford", "Frontend Developer"],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true


}) 



var typed = new Typed (".typing6", {


  strings: ["Chris Marvin", "Network Engineer", "Webdeveloper"],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true


}) 


//angle up icon


$(window).scroll(function() {
  if ($(this).scrollTop()>100)
  {
  $('.angle-up').show(1000);
  }
  else
  {
  $('.angle-up ').hide(1000);
  }
  });
  
