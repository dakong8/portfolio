$(document).ready(function(){
	
	/* nav on */
    
	$('.navBtn').click(function(){
		$(this).stop().toggleClass('on');
		$('nav').stop().slideToggle(300);
	});
	
	/* vivus */
    
	new Vivus('mySvg', {type: 'sync', duration: 70,},
		function(){$('.st0').addClass('fill')});
	
	/* parallax */
    
	function active(sec,act,del){
		if( $(this).scrollTop() > $(sec).offset().top - ($(this).height()/del) ){
			$(sec).find(act).addClass('active');
		}else{
			$(sec).find(act).removeClass('active');
		}
	};
	
	$(window).scroll(function(){
		active('#seoul','.seoul_square','1.5');
		active('#seoul','.titleWrap','1.5');
		active('.seoul_contentsWrap','.seoulImg','1.5');
		active('.seoul_txt','.navy_bar','1.3');
		active('.seoul_contentsWrap','.seoul_txt','2');
		
		
		active('.guestRoom','.textWrap','1.6');
		active('.executiveRoom','.textWrap','1.3');
		active('.suite','.textWrap','1.3');
		
		if( $('#rooms > div > div').height() < 800 ){
			active('#rooms','.guestRoom','1.5');
			active('#rooms','.executiveRoom','4');
			active('#rooms','.suite','10');
		}else{
			active('#rooms','.guestRoom','1.5');
			active('#rooms','.executiveRoom','1.7');
			active('#rooms','.suite','2.1');
		}
		
		active('#services','.square_services','1.5');
		active('#services','.title','1.5');
		active('.spa','.spaImg','1.5');
		active('.spa','.spaWrap','1.5');
		active('.spa','.spaLine','3');
		active('.spa','.contents','1.5');
		active('.dinning','.dinningImg','1.5');
		active('.dinning','.dinningLine','3');
		active('.dinning','.contents','1.5');
		active('.dinning','.dinningImg_bg','1.5');
		active('.restaurant','.titleBox','1.2');
		active('.restaurant','.titleBox > b','1.2');
		active('.restaurant','.slideImg > div','2');
		active('.restaurant','.vmBtn','3');
		
		active('#memory','h3','1.2');
		active('#memory','.titleWrap','1.2');
		active('.memoryWrap','.memoryContents > div','1.5');
		active('.memoryWrap','.newsletter','2.3');
		
	});
	
	/* ripples */
    
	$('header').ripples({
		resolution: 500,
		dropRadius: 10,
		perturbance: 0.001,
	});
	
});