
document.querySelector(".fas").addEventListener("click", click);
function click(e){
    e.preventDefault();
    const menu = document.querySelector("ul").classList.toggle("active");
}
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
});