let tabSec=document.getElementsByClassName('toggle-tabs-li-sec');
let tabContentSec=document.getElementsByClassName('news-cards');
let ws=0;
let firstTabSec=tabSec[0];
$(tabSec[0]).click(function() {
    if (tabSec[ws].classList.contains('toggle-tabs-active-sec')){
        tabSec[ws].classList.toggle('toggle-tabs-active-sec');
        tabContentSec[ws].classList.toggle('admission-tabs-show');
        ws=0;
        tabContentSec[ws].classList.toggle('admission-tabs-show');
        tabSec[ws].classList.toggle('toggle-tabs-active');
    }
    else {
        return;
    }
})
$(tabSec[1]).click(function() {
    if (tabSec[ws].classList.contains('toggle-tabs-active-sec')){
        tabSec[ws].classList.toggle('toggle-tabs-active-sec');
        tabContentSec[ws].classList.toggle('admission-tabs-show');
        ws=1;
        tabSec[ws].classList.toggle('toggle-tabs-active-sec');
        tabContentSec[ws].classList.toggle('admission-tabs-show');
    }
    else {
        return;
    }
})
$(tabSec[2]).click(function() {
    if (tabSec[ws].classList.contains('toggle-tabs-active-sec')){
        tabSec[ws].classList.toggle('toggle-tabs-active-sec');
        tabContentSec[ws].classList.toggle('admission-tabs-show');
        ws=2;
        tabContentSec[ws].classList.toggle('admission-tabs-show');
        tabSec[ws].classList.toggle('toggle-tabs-active-sec');
    }
    else {
        return;
    }
})