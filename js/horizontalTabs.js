let tab=document.getElementsByClassName('toggle-tabs-li');
let tabContent=document.getElementsByClassName('admissions-content');
let c=0;
let firstTab=tab[0];
$(tab[0]).click(function() {
    if (tab[c].classList.contains('toggle-tabs-active')){
        tab[c].classList.toggle('toggle-tabs-active');
        tabContent[c].classList.toggle('admission-tabs-show');
        c=0;
        tabContent[c].classList.toggle('admission-tabs-show');
        tab[c].classList.toggle('toggle-tabs-active');
    }
    else {
        return;
    }
})
$(tab[1]).click(function() {
    if (tab[c].classList.contains('toggle-tabs-active')){
        tab[c].classList.toggle('toggle-tabs-active');
        tabContent[c].classList.toggle('admission-tabs-show');
        c=1;
        tab[c].classList.toggle('toggle-tabs-active');
        tabContent[c].classList.toggle('admission-tabs-show');
    }
    else {
        return;
    }
})
$(tab[2]).click(function() {
    if (tab[c].classList.contains('toggle-tabs-active')){
        tab[c].classList.toggle('toggle-tabs-active');
        tabContent[c].classList.toggle('admission-tabs-show');
        c=2;
        tabContent[c].classList.toggle('admission-tabs-show');
        tab[c].classList.toggle('toggle-tabs-active');
    }
    else {
        return;
    }
})