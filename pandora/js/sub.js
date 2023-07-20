$(document).ready(function(){
    
    /* vivus */
    
    var title11 = new Vivus('title11', {duration: 50, type: 'sync'}, function(){
       $('#title11').find('.st10').addClass('fill'); 
    }); 
    var text1 = new Vivus('text1', {duration: 50, type: 'sync'}, function(){
       $('#text1').find('.st20').addClass('fill'); 
    }); 
    var text2 = new Vivus('text2', {duration: 50, type: 'sync'}, function(){
       $('#text2').find('.st20').addClass('fill'); 
    }); 
    var text3 = new Vivus('text3', {duration: 100, type: 'oneByOne'}, function(){
       $('#text3').find('.st20').addClass('fill'); 
    }); 
    var text4 = new Vivus('text4', {duration: 50, type: 'sync'}, function(){
       $('#text4').find('.st20').addClass('fill'); 
    }); 
    var text5 = new Vivus('text5', {duration: 50, type: 'sync'}, function(){
       $('#text5').find('.st20').addClass('fill'); 
    }); 
    var text6 = new Vivus('text6', {duration: 80, type: 'oneByOne'}, function(){
       $('#text6').find('.st20').addClass('fill'); 
    }); 
    
    function showSvg(c,d){
        if($(this).scrollTop() >= $(c).offset().top - $(this).height()){
            d.play();
        }else{
            d.reset();
        }
    }
    
    function removeFill(c,d,e){
        if($(this).scrollTop() >= $(c).offset().top - $(this).height()){
        }else{
            $(c).find(d).removeClass(e);
        }
    }
    
    $(window).scroll(function(){
        showSvg('#title11',title11);
        showSvg('#text1',text1);
        showSvg('#text2',text2);
        showSvg('#text3',text3);
        showSvg('#text4',text4);
        showSvg('#text5',text5);
        showSvg('#text6',text6);
        removeFill('#text1','.st20','fill');
        removeFill('#text2','.st20','fill');
        removeFill('#text3','.st20','fill');
        removeFill('#text4','.st20','fill');
        removeFill('#text5','.st20','fill');
        removeFill('#text6','.st20','fill');
    });
    
    /* scroll text move */
    
    $(document).scroll(function(){
        $('.history').find('.moveT').css('left', Math.max(0 - 0.40*window.scrollY)+ "px");
        $('.main').find('.ring1').css('top', Math.max(0 + 0.35*window.scrollY)+ "px");
        $('.main').find('.ring2').css('top', Math.max(0 + 0.25*window.scrollY)+ "px");
    });
    
    /* parallax */
    
    $(window).scroll(function(){
        scrollOn('.about','strong');
        scrollOn('.about div','p');
        scrollOn('.about div:nth-of-type(2)','span');
        scrollOn('.history','strong');
        scrollOn('.history .historyWrap','p');
        scrollOn('.history .story1','h3');
        scrollOn('.history .story2','h3');
        scrollOn('.history .story3','h3');
        scrollOn('.history .story4','h3');
        scrollOn('.history .story5','h3');
        scrollOn('.history .story6','h3');
        scrollOn('.history .story7','h3');
        scrollOn('.history .story8','h3');
        scrollOn('.history .story1','p');
        scrollOn('.history .story2','p');
        scrollOn('.history .story3','p');
        scrollOn('.history .story4','p');
        scrollOn('.history .story5','p');
        scrollOn('.history .story6','p');
        scrollOn('.history .story7','p');
        scrollOn('.history .story8','p');
        scrollOn('.imgWrap1','span');
        scrollOn('.imgWrap2','span');
        scrollOn('.imgWrap3','span');
        scrollOn('.imgWrap4','span');
        scrollOn('.mission','p');
        scrollOn('.mission','strong');
        scrollOn('.news .newsWrap','div');
        scrollOn('.news','strong');
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















