// function reveal() {
//     var reveals = document.querySelectorAll(".white-bg");
  
//     for (var i = 0; i < reveals.length; i++) {
//       var windowHeight = window.innerHeight;
//       var elementTop = reveals[i].getBoundingClientRect().top;
//       var scrolledDist= window.scrollY;
//       var elementVisible = 80;
//       var scrollable_elt_dist = elementTop+elementVisible;
  
//       if (scrolledDist <= scrollable_elt_dist) {
//           reveals[i].classList.add("active");
//       } 
//       else reveals[i].classList.remove("active");
//     }
//   }
  
//   window.addEventListener("scroll", reveal)

 
 
//   window.onscroll = function() {
//     var div = document.getElementById("monDiv");
//     var scrollPos = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
//     // var p = document.getElementsByTagName("p")[0];
//     // var pHeight = p.offsetHeight;
//     // var divTop = 0.67 * pHeight;
//  //    console.log("divTop:", divTop);
    
//     if (scrollPos >= 0 && scrollPos <= 90) { 
//       div.style.position = "absolute";
//       div.style.top = "0px";
//       div.style.marginTop = "0px"
//     } else if (scrollPos > 90 && scrollPos <= 300) {
//       div.style.position = "fixed";
//       div.style.top = "0px";
//       div.style.marginTop = "-110px"
//     } else if (scrollPos > 300) {
//       div.style.position = "absolute";
//       div.style.top = 300 + "px";
//     }
//   }

 
