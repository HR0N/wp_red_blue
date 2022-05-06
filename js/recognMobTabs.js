    let recBlue=document.getElementsByClassName('recogn-control-tab');
    let recRed=document.getElementsByClassName('recogn-control-tab-red');
    let recCont=document.getElementsByClassName('recognized-cont');
    let mobN=0;
    $(recBlue[0]).click(function(){
        recBlue[mobN].classList.toggle('recogn-non-act');
        recRed[mobN].classList.toggle('recogn-non-act');
        recCont[mobN].classList.toggle('recogn-non-act');
        mobN=0;
        recBlue[mobN].classList.toggle('recogn-non-act');
        recRed[mobN].classList.toggle('recogn-non-act');
        recCont[mobN].classList.toggle('recogn-non-act');
    });
    $(recBlue[1]).click(function(){
        recBlue[mobN].classList.toggle('recogn-non-act');
        recRed[mobN].classList.toggle('recogn-non-act');
        recCont[mobN].classList.toggle('recogn-non-act');
        mobN=1;
        recBlue[mobN].classList.toggle('recogn-non-act');
        recRed[mobN].classList.toggle('recogn-non-act');
        recCont[mobN].classList.toggle('recogn-non-act');
    });
    $(recBlue[2]).click(function(){
        recBlue[mobN].classList.toggle('recogn-non-act');
        recRed[mobN].classList.toggle('recogn-non-act');
        recCont[mobN].classList.toggle('recogn-non-act');
        mobN=2;
        recBlue[mobN].classList.toggle('recogn-non-act');
        recRed[mobN].classList.toggle('recogn-non-act');
        recCont[mobN].classList.toggle('recogn-non-act');
    });
    $(recBlue[3]).click(function(){
        recBlue[mobN].classList.toggle('recogn-non-act');
        recRed[mobN].classList.toggle('recogn-non-act');
        recCont[mobN].classList.toggle('recogn-non-act');
        mobN=3;
        recBlue[mobN].classList.toggle('recogn-non-act');
        recRed[mobN].classList.toggle('recogn-non-act');
        recCont[mobN].classList.toggle('recogn-non-act');
    });
