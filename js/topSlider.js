let slides=document.getElementsByClassName('top-slider-slide');
let nextSlide=document.getElementById('top-slider-next');
let prevSlide=document.getElementById('top-slider-prev');
let slidesDot=document.getElementsByClassName('top-slider-dot');
let i=0;

let toNext=function toNextF (){
    if (i==slides.length-1){
        slidesDot[i].classList.remove('top-slider-dot-active');
        slides[i].classList.remove('top-slider-slide-active');
        i=0;
        slidesDot[i].classList.add('top-slider-dot-active');
        slides[i].classList.add('top-slider-slide-active');
    }
    else{
        slidesDot[i].classList.remove('top-slider-dot-active');
        slides[i].classList.remove('top-slider-slide-active');
        i++;
        slidesDot[i].classList.add('top-slider-dot-active');
        slides[i].classList.add('top-slider-slide-active');
    }
}
let toPrev=function toPrevF (){
    if (i==0){
        slidesDot[i].classList.remove('top-slider-dot-active');
        slides[i].classList.remove('top-slider-slide-active');
        i=slides.length-1;
        slidesDot[i].classList.add('top-slider-dot-active');
        slides[i].classList.add('top-slider-slide-active');
    }
    else{
        slidesDot[i].classList.remove('top-slider-dot-active');
        slides[i].classList.remove('top-slider-slide-active');
        i--;
        slidesDot[i].classList.add('top-slider-dot-active');
        slides[i].classList.add('top-slider-slide-active');
    }
}
nextSlide.addEventListener('click', toNext);
prevSlide.addEventListener('click', toPrev);