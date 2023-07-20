$(document).ready(function(){
    
    $(window).scroll(function(){
        scrollOn('.charm strong','span');
        scrollOn('.charm .cBox','span');
        scrollOn('.charm .cBox div','p');
        scrollOn('.charm .iBox','div');
        scrollOn('.ring strong','span');
        scrollOn('.ring .cBox','span');
        scrollOn('.ring .cBox div','p');
        scrollOn('.ring .iBox','div');
        scrollOn('.ring .adBox div','p');
        scrollOn('.neck strong','span');
        scrollOn('.neck .cBox','span');
        scrollOn('.neck .cBox div','p');
        scrollOn('.neck .iBox','div');
        scrollOn('.neck .adBox div','p');
        scrollOn('.brace strong','span');
        scrollOn('.brace .cBox','span');
        scrollOn('.brace .cBox div','p');
        scrollOn('.brace .iBox','div');
    });
    
    function scrollOn(pa,ch){  
        if($(window).scrollTop() + $(window).height() > $(pa).offset().top + 200){
            $(pa).find(ch).addClass('move');
        }else{
            $(pa).find(ch).removeClass('move');
        }
    } 
    
    /* ripple */
    
    $('.rp').ripples({
        resolution: 100,
        dropRadius: 200,
        perturbance: 0.001,
    });
    $('.rp2').ripples({
    resolution: 100,
	dropRadius: 300,
	perturbance: 0.001,
    });
    
});