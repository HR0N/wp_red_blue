 var bigAcc=document.getElementsByClassName('acc-box');
    var miniAcc=document.getElementsByClassName('acc-mini-box');
    var a=0;
    $(miniAcc[0]).click(function(){
    bigAcc[a].classList.remove('visible-cont');
    bigAcc[a].classList.add('non-visible-cont');
    miniAcc[a].classList.remove('non-visible-cont');
    miniAcc[a].classList.add('visible-cont');
    a=0;
    bigAcc[a].classList.remove('non-visible-cont');
    bigAcc[a].classList.add('visible-cont');
    miniAcc[a].classList.add('non-visible-cont');
    miniAcc[a].classList.remove('visible-cont');
});
    $(miniAcc[1]).click(function(){
    bigAcc[a].classList.remove('visible-cont');
    bigAcc[a].classList.add('non-visible-cont');
    miniAcc[a].classList.remove('non-visible-cont');
    miniAcc[a].classList.add('visible-cont');
    a=1;
    bigAcc[a].classList.remove('non-visible-cont');
    bigAcc[a].classList.add('visible-cont');
    miniAcc[a].classList.add('non-visible-cont');
    miniAcc[a].classList.remove('visible-cont');
});
    $(miniAcc[2]).click(function(){
    bigAcc[a].classList.remove('visible-cont');
    bigAcc[a].classList.add('non-visible-cont');
    miniAcc[a].classList.remove('non-visible-cont');
    miniAcc[a].classList.add('visible-cont');
    a=2;
    bigAcc[a].classList.remove('non-visible-cont');
    bigAcc[a].classList.add('visible-cont');
    miniAcc[a].classList.add('non-visible-cont');
    miniAcc[a].classList.remove('visible-cont');
});
