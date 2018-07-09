//ヘッダー固定
jQuery(function($) {
var nav    = $('#header'),
    offset = nav.offset();
$(window).scroll(function () {
  if($(window).scrollTop() > 50) {
    nav.addClass('fixed');
  } else {
    nav.removeClass('fixed');
  }
});
});

$(function(){
    $(".faqList dt").on("click", function() {
        $(this).next().slideToggle();
    });
});

(function($){
$(window).on('load',function(){
	$(".looophome .tab > li").click(function() {
		var index = $(".looophome .tab > li").index(this);
		$(".looophome .content > li").css("display","none");
		$(".looophome .content  > li").eq(index).css("display","block");
		$(".looophome .tab  > li").removeClass('select');
		$(this).addClass("select")
	});
});
})(jQuery);

/*ヘッダー固定スライド*/

$(window).scroll(function () {
	if ( $(this).scrollTop() > 240 && !$('.nav_home').hasClass('fixed') ) {
		$('.nav_home').addClass('fixed');
	} else if ( $(this).scrollTop() <= 240 ) {
		$('.nav_home').removeClass('fixed');
	}
});

if(navigator.userAgent.match(/(iPhone)/)){


var menuHeight = $(".nav_home").height();
var startPos = 0;
$(window).scroll(function(){
  var currentPos = $(this).scrollTop();
  if (currentPos > startPos) {
    if($(window).scrollTop() >= 240) {
      /*$("#header").css("top", "-" + menuHeight + "px");*/
      $('.nav_home').addClass('up');
    }
  } else {
    $('.nav_home').removeClass('up');
  }
  startPos = currentPos;
});


}

/*もっとみる*/

$(function () {
    $('.moreload').prevAll().hide();
    $('.moreload').click(function () {
        if ($(this).prevAll().is(':hidden')) {
            $(this).prevAll().slideDown(0, "linear");
            $(this).text('閉じる').addClass('close');
        } else {
            $(this).prevAll().slideUp(0, "linear");
            $(this).text('もっと見る').removeClass('close');
        }
    });
});

/*
var menuHeight = $("#header").height();
var startPos = 0;
$(window).scroll(function(){
  var currentPos = $(this).scrollTop();
  if (currentPos > startPos) {
    if($(window).scrollTop() >= 100) {
      $('#header').addClass('fixed');
    }
  } else {
    $('#header').removeClass('fixed');
  }
  startPos = currentPos;
});
*/

//ユーザーエージェント設定
$(function(){
    var ua = navigator.userAgent;
    if((ua.indexOf('iPhone') > 0) || ua.indexOf('iPod') > 0 || (ua.indexOf('Android') > 0 && ua.indexOf('Mobile') > 0)){
        $('head').prepend('<meta name="viewport" content="width=device-width,initial-scale=1">');
    } else {
        $('head').prepend('<meta name="viewport" content="width=1280">');
    } 
});


//アンカーリンク設定
$(function(){
   $('a[href^=#]').click(function() {
      var speed = 400;
      var href= $(this).attr("href");
      var target = $(href == "#" || href == "" ? 'html' : href);
      var headerHeight = 120; //固定ヘッダーの高さ
      var position = target.offset().top - headerHeight; //ターゲットの座標からヘッダの高さ分引く
      $('body,html').animate({scrollTop:position}, speed, 'swing');
      return false;
   });
});

//かぎかっこ句読点カーニング
$(function(){
	var tgElm = $('#'), //対象となる要素をここで指定
		tagType = "span"; //括弧を囲うタグ名をここで指定
	tgElm.each(function(){
		var tgText = $(this).html();
		tgText = tgText.replace(/[「『（【｛［〔〈《]/g, '<' + tagType + ' style="display: inline-block; margin-left: -0.5em;">$&</' + tagType + '>');
		//以下一行を変更
		tgText = tgText.replace(/[」』）】｝］〕〉》。、]/g, '<' + tagType + ' style="display: inline-block; margin-right: -0.5em;">$&</' + tagType + '>');
		$(this).html(tgText);
	});
});

// グローバルメニューカレントアクティブ
$(function(){
var id = $("body").attr("id");
$(".globalmenu ul li."+id).addClass("active");
});



/*サイドナビ固定*/
var fixedSidebar = (function() {
  var navi,
      wrap,
      wrap_scroll,
      fixed_start,
      fixpx_end_top;
  return {
    run : function() {
      // サイドバーの固定するレイヤー
      navi = $('.fixnav');
      // ラッパーのレイヤー
      wrap = $('.box');
      this.refresh();
    },
    refresh : function() {
      navi.css({
        position : 'relative',
        top : 'auto'
      });
			var head_h = $('#header').height();
      var navi_top = navi.offset().top - head_h;
      var wrap_top = wrap.offset().top;
      // 開始位置：ナビのTOP
      fixed_start = navi_top - parseInt(navi.css('margin-top'));
      // スクロールする上限
      fixpx_end_top = wrap_top + wrap.outerHeight() - navi.outerHeight(true);
      wrap_scroll = fixpx_end_top;
      if(navi_top + navi.outerHeight(true) < wrap_top + wrap.outerHeight(true)) {
        $(window).off('scroll', _onScroll).on('scroll', _onScroll);
      } else {
        $(window).off('scroll', _onScroll);
      }
      $(window).trigger('scroll');
    }
  };
  function _onScroll() {
    var ws = $(window).scrollTop();
    if(ws > fixpx_end_top) {
      // 固定する上限
      navi.css({
        position : 'fixed',
        top : (fixpx_end_top - ws) + 'px'
      });
    } else if(ws > fixed_start) {
      // 固定中間
      navi.css({
        position : 'fixed',
        top : '61px'
      });
    } else {
      //　固定開始まで
      navi.css({
        position : 'relative',
        top : '0px'
      });
    }
  }
})();

$(window).on('load', function() {
  fixedSidebar.run();
});




/*スマホクリックメニュー解除*//*mousedown*/
$(function(){
  $('body > #newsTopics').on('mouseenter', function() {
		$('.tabSp dd').css('display','none');
		return false;
	});
});
$(function(){
  $('body > #main').on('mouseenter', function() {
		$('.tabSp dd').css('display','none');
		return false;
	});
});
$(function(){
  $('body > #section').on('mouseenter', function() {
		$('.tabSp dd').css('display','none');
		return false;
	});
});
$(function(){
  $('body > #supportIdxBox').on('mouseenter', function() {
		$('.tabSp dd').css('display','none');
		return false;
	});
});
$(function(){
  $('body > #customerBox').on('mouseenter', function() {
		$('.tabSp dd').css('display','none');
		return false;
	});
});
$(function(){
  $('body > #footer').on('mouseenter', function() {
		$('.tabSp dd').css('display','none');
		return false;
	});
});




