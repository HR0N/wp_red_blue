let mobslides=document.getElementsByClassName('mob-top-slider-item');
let mobnextSlide=document.getElementById('mob-top-slider-next');
let mobprevSlide=document.getElementById('mob-top-slider-prev');
let mobslidesDot=document.getElementsByClassName('mob-top-slider-dot');
let mobi=0;

let mobtoNext=function mobtoNextF (){
    if (mobi==mobslides.length-1){
        mobslidesDot[ mobi].classList.remove('mob-top-slider-dot-active');
        mobslides[ mobi].classList.remove('mob-top-slider-item-active');
        mobi=0;
        mobslidesDot[ mobi].classList.add('mob-top-slider-dot-active');
        mobslides[ mobi].classList.add('mob-top-slider-item-active');
    }
    else{
        mobslidesDot[ mobi].classList.remove('mob-top-slider-dot-active');
        mobslides[ mobi].classList.remove('mob-top-slider-item-active');
        mobi++;
        mobslidesDot[mobi].classList.add('mob-top-slider-dot-active');
        mobslides[mobi].classList.add('mob-top-slider-item-active');
    }
}
let mobtoPrev=function mobtoPrevF (){
    if (mobi==0){
        mobslidesDot[mobi].classList.remove('mob-top-slider-dot-active');
        mobslides[mobi].classList.remove('mob-top-slider-item-active');
        mobi=mobslides.length-1;
        mobslidesDot[mobi].classList.add('mob-top-slider-dot-active');
        mobslides[mobi].classList.add('mob-top-slider-item-active');
    }
    else{
        mobslidesDot[mobi].classList.remove('mob-top-slider-dot-active');
        mobslides[mobi].classList.remove('mob-top-slider-item-active');
        mobi--;
        mobslidesDot[mobi].classList.add('mob-top-slider-dot-active');
        mobslides[mobi].classList.add('mob-top-slider-item-active');
    }
}
mobnextSlide.addEventListener('click', mobtoNext);
mobprevSlide.addEventListener('click', mobtoPrev);