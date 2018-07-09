$(function(){
$(window).load(function(){

$(function(){
	$('#slide').each(function(){
		var loopsliderWidth = $(this).width();
		var loopsliderHeight = $(this).height();
		$(this).children('ul').wrapAll('<div id="loopslider_wrap"></div>');

		var listWidth = $('#loopslider_wrap').children('ul').children('li').width();
		var listCount = $('#loopslider_wrap').children('ul').children('li').length;

		var loopWidth = (listWidth)*(listCount);

		$('#loopslider_wrap').css({
			top: '0',
			left: '0',
			width: ((loopWidth) * 2),
			height: (loopsliderHeight),
			overflow: 'hidden',
			position: 'absolute'
		});

		$('#loopslider_wrap ul').css({
			width: (loopWidth)
		});
		loopsliderPosition();

		function loopsliderPosition(){
			$('#loopslider_wrap').css({left:'0'});
			$('#loopslider_wrap').stop().animate({left:'-' + (loopWidth) + 'px'},100000,'linear');
			setTimeout(function(){
				loopsliderPosition();
			},100000);
		};

		$('#loopslider_wrap ul').clone().appendTo('#loopslider_wrap');
	});
});
});
});

$(function(){
$(window).load(function(){

$(function(){
	$('#slide02').each(function(){
		var loopsliderWidth = $(this).width();
		var loopsliderHeight = $(this).height();
		$(this).children('ul').wrapAll('<div id="loopslider_wrap02"></div>');

		var listWidth = $('#loopslider_wrap02').children('ul').children('li').width();
		var listCount = $('#loopslider_wrap02').children('ul').children('li').length;

		var loopWidth = (listWidth)*(listCount);

		$('#loopslider_wrap02').css({
			top: '0',
			right: '0',
			width: ((loopWidth) * 2),
			height: (loopsliderHeight),
			overflow: 'hidden',
			position: 'absolute'
		});

		$('#loopslider_wrap02 ul').css({
			width: (loopWidth)
		});
		loopsliderPosition();

		function loopsliderPosition(){
			$('#loopslider_wrap02').css({right:'0'});
			$('#loopslider_wrap02').stop().animate({right:'-' + (loopWidth) + 'px'},100000,'linear');
			setTimeout(function(){
				loopsliderPosition();
			},100000);
		};

		$('#loopslider_wrap02 ul').clone().appendTo('#loopslider_wrap02');
	});
});
});
});

$(function(){
$(window).load(function(){

$(function(){
	$('#slide03').each(function(){
		var loopsliderWidth = $(this).width();
		var loopsliderHeight = $(this).height();
		$(this).children('ul').wrapAll('<div id="loopslider_wrap03"></div>');

		var listWidth = $('#loopslider_wrap03').children('ul').children('li').width();
		var listCount = $('#loopslider_wrap03').children('ul').children('li').length;

		var loopWidth = (listWidth)*(listCount);

		$('#loopslider_wrap03').css({
			top: '0',
			left: '0',
			width: ((loopWidth) * 2),
			height: (loopsliderHeight),
			overflow: 'hidden',
			position: 'absolute'
		});

		$('#loopslider_wrap03 ul').css({
			width: (loopWidth)
		});
		loopsliderPosition();

		function loopsliderPosition(){
			$('#loopslider_wrap03').css({left:'0'});
			$('#loopslider_wrap03').stop().animate({left:'-' + (loopWidth) + 'px'},100000,'linear');
			setTimeout(function(){
				loopsliderPosition();
			},100000);
		};

		$('#loopslider_wrap03 ul').clone().appendTo('#loopslider_wrap03');
	});
});
});
});



