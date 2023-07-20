$(document).ready(function(){
    
    $(window).scroll(function(){
        scrollOn('.enqrWrap strong','span');
        scrollOn('.stWrap strong','span');
        scrollOn('.eBox','.send');
        scrollOn('.eBox','.by');
        scrollOn('.map div:first-child','iframe');
        scrollOn('.map div:first-child','div');
        scrollOn('.map div:nth-child(2)','iframe');
        scrollOn('.map div:nth-child(2)','div');
        scrollOn('.map div:nth-child(3)','iframe');
        scrollOn('.map div:nth-child(3)','div');
        scrollOn('.map div:nth-child(4)','iframe');
        scrollOn('.map div:nth-child(4)','div');
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
	dropRadius: 300,
	perturbance: 0.001,
    });
    
});