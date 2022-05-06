    var bigTab=document.getElementsByClassName('tabs-btt-big');
    var littleTab=document.getElementsByClassName('tabs-btt-little');
    var tabCont=document.getElementsByClassName('tabs-img');
    var n=0;
    $('#tab-one').click(function(){


    bigTab[n].classList.toggle('tabs-btt-big-active');
    littleTab[n].classList.toggle('tabs-btt-little-active');
    tabCont[n].classList.toggle('tabs-img-active');
    n=0;
    bigTab[n].classList.toggle('tabs-btt-big-active');
    littleTab[n].classList.toggle('tabs-btt-little-active');
    tabCont[n].classList.toggle('tabs-img-active');

});
    $('#tab-two').click(function(){



    bigTab[n].classList.toggle('tabs-btt-big-active');
    littleTab[n].classList.toggle('tabs-btt-little-active');
    tabCont[n].classList.toggle('tabs-img-active');
    n=1;
    bigTab[n].classList.toggle('tabs-btt-big-active');
    littleTab[n].classList.toggle('tabs-btt-little-active');
    tabCont[n].classList.toggle('tabs-img-active');

});
    $('#tab-three').click(function(){


    bigTab[n].classList.toggle('tabs-btt-big-active');
    littleTab[n].classList.toggle('tabs-btt-little-active');
    tabCont[n].classList.toggle('tabs-img-active');
    n=2;
    bigTab[n].classList.toggle('tabs-btt-big-active');
    littleTab[n].classList.toggle('tabs-btt-little-active');
    tabCont[n].classList.toggle('tabs-img-active');

});
    $('#tab-four').click(function(){
    bigTab[n].classList.toggle('tabs-btt-big-active');
    littleTab[n].classList.toggle('tabs-btt-little-active');
    tabCont[n].classList.toggle('tabs-img-active');
    n=3;
    bigTab[n].classList.toggle('tabs-btt-big-active');
    littleTab[n].classList.toggle('tabs-btt-little-active');
    tabCont[n].classList.toggle('tabs-img-active');
});