    let slideToggleMob=document.getElementById('mob-dop-menu-btt');
    let slideContainerMob=document.getElementById('mob-dop-menu');
    let closeToggleMob=document.getElementsByClassName('mob-dop-menu-btt')
    function toggleMenuMob(){
        //$("#left-slide").removeClass("d-none");
    if(slideContainerMob.classList.contains('visible-menu')){
        slideContainerMob.classList.remove('visible-menu');
        slideContainerMob.classList.add('non-visible-menu');
        closeToggleMob[1].classList.toggle('d-none');
}
    else{
        slideContainerMob.classList.remove('non-visible-menu');
        slideContainerMob.classList.add('visible-menu');
        closeToggleMob[1].classList.toggle('d-none');
}

}
    slideToggleMob.addEventListener('click',toggleMenuMob);
    closeToggleMob[1].addEventListener('click',toggleMenuMob);