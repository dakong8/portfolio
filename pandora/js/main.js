$(document).ready(function(){
    
    var nav = $('.mainMenu');
    var mainMenu = nav.children('li');
	var subMenu = mainMenu.find('ul');
    
    nav.on('scroll touchmove mousewheel', function(e) {
      e.preventDefault();
      e.stopPropagation();
      return false;
    });

    /* nav on */
    $('.nav_btn').click(function(){
        $(this).stop().toggleClass('on');
        $('.menuWrap').stop().toggleClass('on');
        subMenu.hide();
    }); 

    /* subMenu */
    if($(window).width() < 1024){
        mobileNav();
    }else{
        pcNav();
    }//실행
    
    $(window).resize(function(){
        if($(this).width() < 1024){
            subMenu.hide();
            mainMenu.off();
            mobileNav();
        }else{
            subMenu.hide();
            mainMenu.off();
            mainMenu.children('a').off();
            pcNav();
        }
    });
    
    function mobileNav(){
        mainMenu.click(function(){
            subMenu.hide();
            $(this).find('ul').stop().slideToggle(300);
        });
        mainMenu.children('a').click(function(e){
            e.preventDefault();
        });
    }
    
    function pcNav(){
        mainMenu.on({
           'mouseenter focusin': function(){$(this).find('.subMenu').stop().slideDown(300);},
           'mouseleave blur': function(){$(this).find('.subMenu').stop().slideUp(300);}
        });
    }
    
    /* slide */
    $('.mainSlide').bxSlider({
        auto: true,
		touchEnabled: true,
		pause: 3500,
        mode: 'fade'
    });
    
    /* vivus */
    var title1 = new Vivus('title1', {duration: 70, type: 'sync'}, function(){
       $('#title1').find('.st0').addClass('fill'); 
    });
    var title2 = new Vivus('title2', {duration: 70, type: 'sync'}, function(){
       $('#title2').find('.st0').addClass('fill'); 
    });
    var title3 = new Vivus('title3', {duration: 70, type: 'sync'}, function(){
       $('#title3').find('.st0').addClass('fill'); 
    });
    var title4 = new Vivus('title4', {duration: 70, type: 'sync'}, function(){
       $('#title4').find('.st0').addClass('fill'); 
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
        showSvg('#title1',title1);
        showSvg('#title2',title2);
        showSvg('#title3',title3);
        showSvg('#title4',title4);
        removeFill('#title1','.st0','fill');
        removeFill('#title2','.st0','fill');
        removeFill('#title3','.st0','fill');
        removeFill('#title4','.st0','fill');
    });
    
    /* parallax */
    $(window).scroll(function(){
        scrollOn('#pandora','p');
        scrollOn('#pandora div','a');
        scrollOn('#product .items','div');
        scrollOn('#guide .maintain','div:first-child > div');
        scrollOn('#guide .size','div:last-child > div');
        scrollOn('#guide .maintain','.tg');
        scrollOn('#guide .size','.tg');
        scrollOn('#contact .conWrap','p');
        scrollOn('#follow','.snsInner h3');
        scrollOn('#follow .snsWrap','a');
    });
    
    function scrollOn(pa,ch){  
        if($(window).scrollTop() + $(window).height() > $(pa).offset().top + 200){
            $(pa).find(ch).addClass('move');
        }else{
            $(pa).find(ch).removeClass('move');
        }
    }
    
});










