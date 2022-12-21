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


  strings: ["data analyst who wants to contribute to the success of the team through hard work, attention to detail, and excellent organizational skills. A clear and excellent understanding of how to analyze complex data. Coupled with my training in analytical skills and understanding of platforms for effective data-driven decision making, I hope to bring a motivated attitude to your organization."],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true


}) 


// team typing



var typed = new Typed (".typing1", {


  strings: ["Tina Tony", "Senior Data Analyst"],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true


}) 

var typed = new Typed (".typing2", {


  strings: ["Taye Obawolu", "IT Data Analyst"],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true


}) 



var typed = new Typed (".typing3", {


  strings: ["Julie Chan", "IT Support Helpdesk", "Frontend Developer"],
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


  strings: ["Valentine Ezeudu", "Junior Data Analyst"],
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
  
