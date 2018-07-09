var localImportJsDir = window.location.protocol+'//'+window.location.host+'/epc/_asset/js/';
(function(){
	var s = document.getElementsByTagName("script");
	var d = s[s.length-1].src.substring(0, s[s.length-1].src.lastIndexOf("/")+1);
	for(var i=0; i<arguments.length; i++){
		document.write('<script type="text/javascript" src="'+arguments[i]+'"></script>');
	}
})(
	localImportJsDir+"jquery.js",
	localImportJsDir+"scrolltop.js",
	localImportJsDir+"retina-srcset.js",
	localImportJsDir+"cmn.js",
	localImportJsDir+"analytics.js"
);

(function(){var importSrc = function(e){return '<script type="text/javascript" src="'+ e +'"></script>' + "\n";}
    var path = './js/';
    //jQueryフレームワーク
    document.write( importSrc( '//ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js' ) );})();
 