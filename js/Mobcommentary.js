    let mobz=0;
    let curComMob=document.getElementsByClassName('center-comm-mob');
    $('#acterOneMob').click(function(){
        curComMob[mobz].classList.remove('commentIn');
        curComMob[mobz].classList.add('commentOut');
        mobz=0;
        curComMob[mobz].classList.remove('commentOut');
        curComMob[mobz].classList.add('commentIn');
});
    $('#acterThreeMob').click(function(){
        curComMob[mobz].classList.remove('commentIn');
        curComMob[mobz].classList.add('commentOut');
        mobz=0;
        curComMob[mobz].classList.remove('commentOut');
        curComMob[mobz].classList.add('commentIn');
});
    $('#acterTwoMob').click(function(){
        curComMob[mobz].classList.remove('commentIn');
        curComMob[mobz].classList.add('commentOut');
        mobz=1;
        curComMob[mobz].classList.remove('commentOut');
        curComMob[mobz].classList.add('commentIn');
});
    $('#acterFourMob').click(function(){
        curComMob[mobz].classList.remove('commentIn');
        curComMob[mobz].classList.add('commentOut');
        mobz=1;
        curComMob[mobz].classList.remove('commentOut');
        curComMob[mobz].classList.add('commentIn');
});

    $('#acterFiveMob').click(function(){
        curComMob[mobz].classList.remove('commentIn');
        curComMob[mobz].classList.add('commentOut');
        mobz=3;
        curComMob[mobz].classList.remove('commentOut');
        curComMob[mobz].classList.add('commentIn');
});
    $('#acterSixMob').click(function(){
        curComMob[mobz].classList.remove('commentIn');
        curComMob[mobz].classList.add('commentOut');
        mobz=3;
        curComMob[mobz].classList.remove('commentOut');
        curComMob[mobz].classList.add('commentIn');
});
    $('#next-com-mob').click(function(){
    if(mobz==3){
        curComMob[mobz].classList.remove('commentIn');
        curComMob[mobz].classList.add('commentOut');
        mobz=0;
        curComMob[mobz].classList.remove('commentOut');
        curComMob[mobz].classList.add('commentIn');
}


    else {
        curComMob[mobz].classList.remove('commentIn');
        curComMob[mobz].classList.add('commentOut');
        mobz++;
        curComMob[mobz].classList.remove('commentOut');
        curComMob[mobz].classList.add('commentIn');
}

});
    $('#prev-com-mob').click(function(){
    if(mobz==0){
        curComMob[mobz].classList.remove('commentIn');
        curComMob[mobz].classList.add('commentOut');
        mobz=3;
        curComMob[mobz].classList.remove('commentOut');
        curComMob[mobz].classList.add('commentIn');
}
    else {
        curComMob[mobz].classList.remove('commentIn');
        curComMob[mobz].classList.add('commentOut');
        mobz--;
        curComMob[mobz].classList.remove('commentOut');
        curComMob[mobz].classList.add('commentIn');
}
});