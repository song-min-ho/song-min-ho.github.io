$(function(){
	
	
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