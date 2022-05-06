let mobNewsTab=document.getElementsByClassName('mob-news-tab');
let mobNewsCont=document.getElementsByClassName('mob-news-content');
let mobY=0;
$(mobNewsTab[0]).click(function() {
    if (mobNewsTab[mobY].classList.contains('mob-news-tabs-active')){
        mobNewsTab[mobY].classList.toggle('mob-news-tabs-active');
        mobNewsCont[mobY].classList.toggle('mob-news-content-non-act');
        mobY=0;
        mobNewsTab[mobY].classList.toggle('mob-news-tabs-active');
        mobNewsCont[mobY].classList.toggle('mob-news-content-non-act');
    }
    else {
        return;
    }
})
$(mobNewsTab[1]).click(function() {
    if (mobNewsTab[mobY].classList.contains('mob-news-tabs-active')){
        mobNewsTab[mobY].classList.toggle('mob-news-tabs-active');
        mobNewsCont[mobY].classList.toggle('mob-news-content-non-act');
        mobY=1;
        mobNewsTab[mobY].classList.toggle('mob-news-tabs-active');
        mobNewsCont[mobY].classList.toggle('mob-news-content-non-act');
    }
    else {
        return;
    }
})
$(mobNewsTab[2]).click(function() {
    if (mobNewsTab[mobY].classList.contains('mob-news-tabs-active')){
        mobNewsTab[mobY].classList.toggle('mob-news-tabs-active');
        mobNewsCont[mobY].classList.toggle('mob-news-content-non-act');
        mobY=2;
        mobNewsTab[mobY].classList.toggle('mob-news-tabs-active');
        mobNewsCont[mobY].classList.toggle('mob-news-content-non-act');
    }
    else {
        return;
    }
})