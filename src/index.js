//window transitioning
window.addEventListener("resize", function(){
    const x= document.getElementsByTagName("body").classList.toggle("trans");
 
 });

 //nav bar
document.querySelector(".fas").addEventListener("click", click);
function click(e){
    e.preventDefault();
    const menu = document.querySelector("ul").classList.toggle("active");

}

//flickity and smoothscrolling
$(function(){
    $('.main-carousel').flickity({
        // options
        cellAlign: 'center',
        prevNextButtons: false,
        wrapAround:true,
        autoPlay:true,
        fade:true,
        lazyLoad:true,
        pageDots: false,
        contain: true
      });
    $("a").smoothScroll({
        offset:-50,
        speed:600,
        easing:"swing"
    });
    $(".nav_bar ul li a").on("click", function(){
        $(".nav_bar ul").addClass("passive");
        
    })
    $(".nav_toggle").on("click", function(){
        $(".nav_bar ul").removeClass("passive");
        $(".nav_bar ul").addClass("active");
    })
    
    
});


