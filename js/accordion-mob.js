 let mobbigAcc=document.getElementsByClassName('mob-big-acc');
    let mobminiAcc=document.getElementsByClassName('mob-mini-acc');
    let moba=0;
    $(mobminiAcc[0]).click(function(){
        mobbigAcc[moba].classList.add('mob-acc-non-active');
        mobminiAcc[moba].classList.remove('mob-acc-non-active');
    moba=0;
        mobbigAcc[moba].classList.remove('mob-acc-non-active');
        mobminiAcc[moba].classList.add('mob-acc-non-active');

});
 $(mobminiAcc[1]).click(function(){
     mobbigAcc[moba].classList.add('mob-acc-non-active');
     mobminiAcc[moba].classList.remove('mob-acc-non-active');
     moba=1;
     mobbigAcc[moba].classList.remove('mob-acc-non-active');
     mobminiAcc[moba].classList.add('mob-acc-non-active');

 });
 $(mobminiAcc[2]).click(function(){
     mobbigAcc[moba].classList.add('mob-acc-non-active');
     mobminiAcc[moba].classList.remove('mob-acc-non-active');
     moba=2;
     mobbigAcc[moba].classList.remove('mob-acc-non-active');
     mobminiAcc[moba].classList.add('mob-acc-non-active');

 });