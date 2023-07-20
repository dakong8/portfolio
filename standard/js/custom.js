$(document).ready(function(){
    
    /* lightbox */
    $('.lightbox').lightGallery({
        thumbnail: true,
        autoplay: true,
        pause: 3000,
        progressBar: true
    }); 

    /* layer popup */
    $('.layer').click(function(e){
        e.preventDefault();
        /* 
        $('#layer').css('display','block');
        $('#layer').fadeIn();
        $('#layer').slideDown(); 
        */
        $('#layer').show(200);
    });
    $('#layer .close').click(function(e){
        e.preventDefault();
        /*
        $('#layer').css('display','none');
        $('#layer').fadeDown();
        $('#layer').slideUp();
        */
        $('#layer').hide(200);
    });


    /* window popup */
    $('.window').click(function(e){
        e.preventDefault();
        /*
        window.open('파일명', '팝업이름', '옵션설정');
        옵션 : left, top, width, height, status, toolbor, location, menubar, scrollbars, fullscreen, channelmode
        */
        window.open('popup.html', 'popup01', 'width=800, height=590, left=50, top=50, scrollbars=0, toolbar=0, menubar=no');
    });

    /* tabmenu */
    var tabList = $('.tab_menu');

    tabList.find('ul ul').hide();
    tabList.find('li.active > ul').show();
    
    function tabMenu(e){
        e.preventDefault();
        
        $(this).next('ul').show().parent('li').addClass('active').siblings('li').removeClass('active').find('ul').hide();
    }
    
    tabList.find('ul > li > a').click(tabMenu).focus(tabMenu);
    
    /* banner slide */
    $('.ban').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true,
        autoplaySpeed: 3000,
        dots: true
    });

    /* gallery slide */
    $('.gallery_img').slick({
        fade: true,
        pauseOnHover: true,
        arrows: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 300,
        slidesToShow: 1
    })
    $('.play').click(function(){
        $('.gallery_img').slick('slickPlay');
    });
    $('.pause').click(function(){
        $('.gallery_img').slick('slickPause');
    });
    $('.prev').click(function(){
        $('.gallery_img').slick('slickPrev');
    });
    $('.next').click(function(){
        $('.gallery_img').slick('slickNext');
    });

    /* title button(www) */
    $('.tit .btn').click(function(e){
        e.preventDefault();
        /* 
        $('#cont_nav').toggle(); show와 hide가 합쳐진 기능
        $('#cont_nav').fadeToggle(); 서서히 나타내는거 두번
        */
        $('#cont_nav').slideToggle(200);
        $(this).toggleClass('on');
    });
    
});
  



