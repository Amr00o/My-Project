// navbar  , scroll , btnUp , loadingPage , animate width sec about

$(document).ready(function () {

    $(".loader").fadeOut(500 , function () {
        $("#loading").fadeOut(1000 , function () {

            $("body").css('overflow' , 'auto');
            $("#loading").remove();
        })  
    })
    let secOffset = $("#about").offset().top;
    let spans = document.querySelectorAll("span");
$(window).scroll(function () {
    let windowScroll = $(window).scrollTop();
    if (windowScroll > secOffset -350) {
        $(".navbar").css('background' , 'rgb(0, 0, 0,0.9)');
        $("#btnUp").fadeIn(500);
        spans.forEach((span) => {
            span.style.width = span.dataset.width;
        })
        
    }
    else{
        $(".navbar").css('background' , 'transparent');
        $("#btnUp").fadeOut(500);
    }
})

$("a[href^='#']").click(function (eventInfo) {
    let aHerf = eventInfo.target.getAttribute('href');
    let sectionAtt = $(aHerf).offset().top;
$("html,body").animate({scrollTop: sectionAtt} , 100)
})
    
})

// Typed animation
var typed = new Typed('.word', {
    strings: ['Amr', 'Designer' , "Developer"],
    loop: true,
    typeSpeed: 60,
    backSpeed: 60,
    startDelay: 1000,
    backtDelay: 1500,
  });



// count
let nums = document.querySelectorAll(".nums .num");
let section = document.querySelector("#photo");
let started = false; 

window.onscroll = function () {
    if (window.scrollY >= section.offsetTop - 450) {
        if (!started) {
            nums.forEach((num) => startCount(num));
        }
        started = true;
    }
}

function startCount(el) {
    let goal = el.dataset.goal;
    let count = setInterval(() => {
      el.textContent++;
      if (el.textContent == goal) {
        clearInterval(count)
      }
    }, 1000 / goal);
}












