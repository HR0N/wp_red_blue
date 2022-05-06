let slidd=document.getElementById('carousel-obertka');
let dots=document.getElementsByClassName('carousel-dot');
let liteItem=document.getElementsByClassName('litebox-item')
let litebox=document.querySelector('.litebox');
let pos=-10;
let f=1;
let l;

$('#liteitemo').click(function (){
    l=0;
    litebox.classList.remove('litebox-none');
    liteItem[l].classList.toggle('litebox-item-visible');
})
$('#liteitemtwo').click(function (){
    l=1;
    litebox.classList.remove('litebox-none');
    liteItem[l].classList.toggle('litebox-item-visible');
})
$('#liteitemthree').click(function (){
    l=2;
    litebox.classList.remove('litebox-none');
    liteItem[l].classList.toggle('litebox-item-visible');
})
$('#liteitemfour').click(function (){
    l=3;
    litebox.classList.remove('litebox-none');
    liteItem[l].classList.toggle('litebox-item-visible');
})
$('#liteitemfive').click(function (){
    l=4;
    litebox.classList.remove('litebox-none');
    liteItem[l].classList.toggle('litebox-item-visible');
})

$('#close-btt').click(function (){
    liteItem[l].classList.toggle('litebox-item-visible');
    litebox.classList.add('litebox-none');
})


$('#lite-right-arr').click(function (){
    if (l==4){
        liteItem[l].classList.toggle('litebox-item-visible');
        l=0;
        liteItem[l].classList.toggle('litebox-item-visible');
    }
    else{
        liteItem[l].classList.toggle('litebox-item-visible');
        l++;
        liteItem[l].classList.toggle('litebox-item-visible');
    }

})


$('#lite-left-arr').click(function (){
    if (l==0){
        liteItem[l].classList.toggle('litebox-item-visible');
        l=4;
        liteItem[l].classList.toggle('litebox-item-visible');
    }
    else{
        liteItem[l].classList.toggle('litebox-item-visible');
        l--;
        liteItem[l].classList.toggle('litebox-item-visible');
    }

})


function updateMargin(x){
    slidd.style.marginLeft=x+('%');
}


function controlSlider(){
    dots[f].classList.toggle('carousel-dot-active');
}

$('#next-sl').click(function(){
    if (f==dots.length-1){
        return;
    }
    else{
        pos=pos-44;
        updateMargin(pos);
        controlSlider();
        f++;
        controlSlider();
    }
})


$('#prev-sl').click(function(){
    if (f==0){
        return;
    }
    else {
        pos=pos+44;
        updateMargin(pos);
        controlSlider();
        f--;
        controlSlider();
    }
})
