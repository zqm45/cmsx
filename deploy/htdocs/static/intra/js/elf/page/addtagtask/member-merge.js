/**
 * @package FD.app.cms.searchpage.merge
 * @version 1.0.110926
 * @author  hongss
 */

/*merge start*/
(function(){
	ImportJavscript = {
		url:function(url){
			document.write("<script type=\"text/javascript\" src=\""+url+"\"></scr"+"ipt>");
		}
	}
})();
/*merge end*/
ImportJavscript.url("/static/fdevlib/js/fdev-v4/core/fdev-min.js");
ImportJavscript.url("/static/intra/js/elf/module/resetcookie.js");
ImportJavscript.url("/static/intra/js/elf/module/multiplepca.js");
ImportJavscript.url("/static/intra/js/elf/page/addtagtask/member-addtagtask.js");