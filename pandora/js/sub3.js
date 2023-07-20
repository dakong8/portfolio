$(document).ready(function(){
    
    $(window).scroll(function(){
        scrollOn('.mtain strong','span');
        scrollOn('.g_size strong','span');
        scrollOn('.mtain .tBox','.ring');
        scrollOn('.g_size .tBox','.ring');
        scrollOn('.mtain .mBox:nth-child(2)','span');
        scrollOn('.mtain .mBox:nth-child(3)','span');
        scrollOn('.mtain .mBox:nth-child(4)','span');
        scrollOn('.mtain .mBox:nth-child(5)','span');
        scrollOn('.mtain .mBox:nth-child(6)','span');
        scrollOn('.mtain .mBox:nth-child(7)','span');
        scrollOn('.mtain .mBox:nth-child(2)','div');
        scrollOn('.mtain .mBox:nth-child(3)','div');
        scrollOn('.mtain .mBox:nth-child(4)','div');
        scrollOn('.mtain .mBox:nth-child(5)','div');
        scrollOn('.mtain .mBox:nth-child(6)','div');
        scrollOn('.mtain .mBox:nth-child(7)','div');
        scrollOn('.g_size .sBox','div');
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
});