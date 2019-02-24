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
        offset:0,
        speed:600,
        easing:"swing"
    });
});


