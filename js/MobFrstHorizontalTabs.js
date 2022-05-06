let mobFrstTab=document.getElementsByClassName('mob-tab');
let mobFrstTabContent=document.getElementsByClassName('steps-mob');
let mobc=0;
$(mobFrstTab[0]).click(function() {
    if (mobFrstTab[mobc].classList.contains('mob-tab-active')){
        mobFrstTab[mobc].classList.toggle('mob-tab-active');
        mobFrstTabContent[mobc].classList.toggle('steps-mob-active');
        mobc=0;
        mobFrstTab[mobc].classList.toggle('mob-tab-active');
        mobFrstTabContent[mobc].classList.toggle('steps-mob-active');
    }
    else {
        return;
    }
})
$(mobFrstTab[1]).click(function() {
    if (mobFrstTab[mobc].classList.contains('mob-tab-active')){
        mobFrstTab[mobc].classList.toggle('mob-tab-active');
        mobFrstTabContent[mobc].classList.toggle('steps-mob-active');
        mobc=1;
        mobFrstTab[mobc].classList.toggle('mob-tab-active');
        mobFrstTabContent[mobc].classList.toggle('steps-mob-active');
    }
    else {
        return;
    }
})
$(mobFrstTab[2]).click(function() {
    if (mobFrstTab[mobc].classList.contains('mob-tab-active')){
        mobFrstTab[mobc].classList.toggle('mob-tab-active');
        mobFrstTabContent[mobc].classList.toggle('steps-mob-active');
        mobc=2;
        mobFrstTab[mobc].classList.toggle('mob-tab-active');
        mobFrstTabContent[mobc].classList.toggle('steps-mob-active');
    }
    else {
        return;
    }
})