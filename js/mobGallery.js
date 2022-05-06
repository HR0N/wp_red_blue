let mobGalSlide=document.getElementsByClassName('mob-gallery-item');
let mobGalNextSlide=document.getElementById('mob-gallery-btt-right');
let mobGalPrevSlide=document.getElementById('mob-gallery-btt-left');
let mobGalslidesDot=document.getElementsByClassName('mob-dot');
let mobq=2;

let mobGaltoNext=function mobGaltoNextF (){
    if (mobq==mobGalSlide.length-1){
        mobGalslidesDot[mobq].classList.remove('mob-dot-active');
        mobGalSlide[mobq].classList.remove('mob-top-slider-item-active');
        mobq=0;
        mobGalslidesDot[mobq].classList.add('mob-dot-active');
        mobGalSlide[mobq].classList.add('mob-top-slider-item-active');
    }
    else{
        mobGalslidesDot[mobq].classList.remove('mob-dot-active');
        mobGalSlide[mobq].classList.remove('mob-top-slider-item-active');
        mobq++;
        mobGalslidesDot[mobq].classList.add('mob-dot-active');
        mobGalSlide[mobq].classList.add('mob-top-slider-item-active');
    }
}
let mobGaltoPrev=function mobGaltoPrevF (){
    if (mobq==0){
        mobGalslidesDot[mobq].classList.remove('mob-dot-active');
        mobGalSlide[mobq].classList.remove('mob-top-slider-item-active');
        mobq=mobGalSlide.length-1;
        mobGalslidesDot[mobq].classList.add('mob-dot-active');
        mobGalSlide[mobq].classList.add('mob-top-slider-item-active');
    }
    else{
        mobGalslidesDot[mobq].classList.remove('mob-dot-active');
        mobGalSlide[mobq].classList.remove('mob-top-slider-item-active');
        mobq--;
        mobGalslidesDot[mobq].classList.add('mob-dot-active');
        mobGalSlide[mobq].classList.add('mob-top-slider-item-active');
    }
}
mobGalNextSlide.addEventListener('click', mobGaltoNext);
mobGalPrevSlide.addEventListener('click', mobGaltoPrev);