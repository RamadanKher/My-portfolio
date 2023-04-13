
var typed = new Typed('.element', {
    strings: ["Freelancer.", "Front End Developer."],
    typeSpeed: 60,
    backSpeed: 60,
    loop:true

  });

  // togell navbar
  let toggleMenu = document.getElementById("toggleMenu")
   LinksList = document.getElementById("LinksList");
toggleMenu.addEventListener("click", ()=>{
    toggleMenu.classList.toggle("open"),
    LinksList.classList.toggle("open")
}
)

// nav sticky on scroll  
window.onscroll = () => {
  let scrollPosition = window.scrollY
  //! nav part
  let nav = document.querySelector("nav")
  if (scrollPosition > 50) {
      nav.classList.add("navbar-sticky")
  } else {
      nav.classList.remove("navbar-sticky")
  }}


// for filter elments 
  filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("filterDiv");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) AddClass(x[i], "show");
  }
}

function AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
}

function RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);     
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn-filter");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

//! slick slider fire function
$('.slider').slick({
  dots: true,
  infinite: true,
  arrows: false,
  speed: 300,
  autoplay: true,
  autoplaySpeed: 2000,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
      {
          breakpoint: 1400,
          settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
              dots: true
          }
      },
      {
          breakpoint: 992,
          settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              centerMode: true,
              centerPadding: '60px',
          }
      },
      {
          breakpoint: 480,
          settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
          }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
  ]

});






