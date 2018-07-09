/*---------------------------------------------
 * jQuery Fix Height Simple 1.0 - 2013-09-10
---------------------------------------------*/

$.fn.fixHeightSimple = function(options){
	
	//オプション
	options = $.extend({
		column : 0
	}, options);
	
	var elm = this;
	
	if($(elm).size() > 0){
		$(window).on("load resize", function(){
			var tgHeight = new Array(120); //Array([アーカイブの最大表示件数])
			var cnt = 0;
			var maxHeight = 0;
			elm.css("height","auto");
			elm.each(function(){
				tgHeight[cnt] = $(this).height();
				if(tgHeight[cnt] > maxHeight){
					maxHeight = tgHeight[cnt];
				}
				if(options.column){
					if(cnt !=0 && ((cnt+1) % options.column) == 0){
						for(var i = cnt - options.column; i < cnt; i++){
							elm.eq(i + 1).css("height",maxHeight + "px");
						}
						maxHeight = 0;
					}
				}
				cnt++;
			});
			if(!(options.column)) elm.css("height",maxHeight + "px");
		});
	}else{
		console.log("指定された要素が見つかりません。");
	}
	
}