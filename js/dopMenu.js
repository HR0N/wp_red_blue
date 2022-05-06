    let slideToggle=document.getElementById('show-slide');
    let slideContainer=document.getElementById('left-slide');
    function toggleMenu(){
        $("#left-slide").removeClass("hidden");
    if(slideContainer.classList.contains('visible-menu')){
    slideContainer.classList.remove('visible-menu');
    slideContainer.classList.add('non-visible-menu');
}
    else{
    slideContainer.classList.remove('non-visible-menu');
    slideContainer.classList.add('visible-menu');
}

}
    slideToggle.addEventListener('click',toggleMenu);
