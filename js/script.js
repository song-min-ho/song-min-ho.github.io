$(function(){	
	/*gnb*/
	/*
	var sec1 = $('.skill').offset().top
	var sec2 = $('.portfolio').offset().top
	
	$('.gnb li:eq(0)').click(function(){
		$('html').animate({scrollTop: 0}, 800);        
        return false;
	})
	$('.gnb li:eq(1)').click(function(){
		$('html').animate({scrollTop: sec1}, 800);        
        return false;
	})
	$('.gnb li:eq(2)').click(function(){
		$('html').animate({scrollTop: sec2}, 800);        
        return false;
	})
	*/	
	
})


$(window).on('mousemove', function(e) { // on 이벤트로 바인드 설정
	var w = $(window).width();
	var h = $(window).height();
	var offsetX = 0.5 - e.pageX / w;
	var offsetY = 0.5 - e.pageY / h;

	$(".parallax").each(function(i, el) { // 반복문 i => 배열의 인덱스 전달, el => 배열의 데이터 저장
		var offset = parseInt($(el).data('offset')); // parseInt : 수(정수)로 반환
		var translate = "translate3d(" + Math.round(offsetX * offset) + "px," + Math.round(offsetY * offset) + "px, 0px)";

		$(el).css({
			'-webkit-transform': translate,
			'transform': translate,
			'moz-transform': translate
		});
	});
});

$(window).scroll(function(){
	var top = $(window).scrollTop()
	var sec = $('.portfolio').offset().top	
	
	/*parallex*/
	
	if(top > sec) {		
		$('.portfolio > .tit').addClass('fixed')
		$('.work').addClass('fixed')
	}else{
		$('.portfolio > .tit').removeClass('fixed')
		$('.work').removeClass('fixed')
	}	
	
	/*gnb*/
	if(top > 0) {
		$('.gnb').stop().animate({'top':'0'})
	}else{
		$('.gnb').stop().animate({'top':'-80px'})
	}	
	
	/*opacity*/
	/*
	var sec1 = $('.portfolio1').offset().top		
	if(top > sec1) {
		
	}
	*/
	
})









