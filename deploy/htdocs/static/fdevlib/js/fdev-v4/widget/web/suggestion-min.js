("Suggestion" in FE.ui)||(function(c,e){var b={festivalclass:"festival",url:"http://s.1688.com/promotion/offer_search.htm"},a="",d=function(v,o){var g={},z,l=[],A=0,u={objKeyItems:g,historyItems:l},y=150,j=30,D,q=c.util.flash&&c.util.flash.available,w=false,J=0,G=false,p=10,t=2,m=y*2,F="http://suggest.1688.com/bin/suggest";var I=function(L,M){D=c.util.swfstorage;if(!D||!q){return false}D.ready(function(){var O=D.getJson("historyKeys"),P=parseInt(D.getJson("historyModify")),N=parseInt(D.getJson("historyKeyCounts"));if(O){E(O,P,N)}if(L){L=L.replace(/[<|>|&|\"|\']/g,"");C(L)}M()});return true},r=function(){D=c.util.swfstorage;if(!D||!q){return}var N=parseInt(D.getJson("historyModify"));if(N===J){return}else{var M=D.getJson("historyKeys"),L=parseInt(D.getJson("historyKeyCounts"));if(M){E(M,N,L)}}},C=function(L){if(A<y){if(l.length>=m){B(false)}x(L)}else{B(true);x(L)}},E=function(M,N,L){u=M;A=L;J=N;g=M.objKeyItems;l=M.historyItems},H=function(){if(G){D.setJson("historyModify",new Date().getTime());D.setJson("historyKeys",u);D.setJson("historyKeyCounts",A);G=false}},k=function(){l=[];g={};A=0;J=0;u={objKeyItems:g,historyItems:l};G=true;setTimeout(H,0)},x=function(L){if(!g[L]){c.ajax({url:F,dataType:"script",data:c.paramSpecial({type:"pinyin",q:L}),success:function(){var P=window._suggest_result_,M=P.result,O=M[0],N={key:L,value:O};s(N)}})}else{i(L)}},n=function(){D.removeItem("historyModify");D.removeItem("historyKeys");D.removeItem("historyKeyCounts")},i=function(M){var L=g[M],N;if(L===l.length){return}else{L-=1}N=l[L];l[L]="";l.push(N);g[M]=l.length;G=true;setTimeout(H,0)},s=function(L){if(!g[L.key]){l.push(L);g[L.key]=l.length;G=true;A++;H();setTimeout(function(){if(w){r();w=false}},0)}},K=function(M){var L=parseInt(g[M])-1;l[L]="";delete g[M];A--;G=true;H()},B=function(N){var P=l.length,L=[],O={},S,Q,R=0;if(N){for(var M=0;M<P;M++){Q=l[M];S=Q.key;if(S){if(R<j){R++}else{L.push(Q);O[S]=L.length}}}}else{for(var M=0;M<P;M++){Q=l[M];S=Q.key;if(S){L.push(Q);O[S]=L.length}}}A=L.length;w=true;l=L;g=O;G=true;u={objKeyItems:O,historyItems:L}};var h=I(v,o);if(!h){return h}return{query:function(Q){r();var L=l.length,M=[],P=L-1,R={},O,N;if(!Q){if(L>p){N=p}else{N=L}for(P=L-1;P>=0;P--){O=l[P];if(O.key){R[O.key]=true;M.push(O);if(M.length===N){break}}}}else{for(P=L-1;P>=0;P--){O=l[P];if(O&&(O.key.indexOf(Q)===0||O.value.indexOf(Q)===0)){R[O.key]=true;M.push(O);if(M.length===t){break}}}}return{queryKeys:M,queryObj:R}},removeItem:K,getHistoryItems:function(){return l},clearHistory:n,saveToLocalStorage:function(){H()}}};function f(h,i){var g=this;g.element=c(h).eq(0);if(!g.element.length){return}g.options=c.extend(false,{},i,{suggestTracelogShow:"sale_search_suggest_show",suggestTracelogSubmit:"sale_top_suggest_submit",suggestTracelogType:"sale_search"});g._init()}f.prototype={_init:function(){var u=this,j,r=false,g=u.options,h=u.element,q,t=c("#search_category"),s=0,i=[],n=[],m=function(z){var y=[],v=j.query(z),x=v.queryKeys,A=v.queryObj,o=x.length;for(var w=0;w<o;w++){y.push({label:x[w].key,clickValue:x[w].key+"history",value:x[w].key,history:true})}return{queryObj:A,historyItems:y}},l=function(o,z,w){if(!z){o={}}if(r){var y=m(z),A=y.queryObj,x=y.historyItems}var v=c.map(o,function(C){var B=C[0].replace("_","<em>").replace("%","</em>"),D=C[0].replace(/[_%]/g,"").trim(),E=!!C[2]?(C[1]+C[2]):C[1];if(r){if(!A[D]){return{label:B,desc:E,value:D,index:w++,clickValue:D}}}else{return{label:B,desc:E,value:D,index:w++,clickValue:D}}});if(r){v=x.concat(v)}i=o;n=v;return v},k=function(v){var y=m(false),z=y.queryObj,o=y.historyItems;clearTimeout(q.searching);q.term="";q.selectedItem=null;n=o;var w="";for(var x=0;x<o.length;x++){w=w+"_"+o[x].clickValue}u.showResultWords=w;q.response(o)};if(g.history){var p=function(){r=true;h.bind("focus.auto",function(v){if(u.stopKeyFocus){u.stopKeyFocus=false;return false}if(q.term!=undefined&&q.term!=q.element.val()){q.selectedItem=null;q.search(null,v)}else{var o=c.trim(h.val());if(!o){k(o)}else{q.response(n)}}});h.bind("keyup.auto",function(v){var o=c.trim(h.val());if(!o){k(o)}})};j=d(c.trim(h.val()),p)}h.autocomplete({source:function(v,o){u.ajax&&u.ajax.abort();u.ajax=c.ajax({url:g.url||"http://suggest.1688.com/bin/suggest",dataType:"script",data:c.paramSpecial({type:g.type,q:v.term}),success:function(){var B=window._suggest_result_,w=B.result||{},z=0,D,A=B.category,C=B.festival;if(B.pCity){D=B.pCity[0][1]+B.pCity[0][2];w.splice(0,0,B.pCity[0])}var x=l(w,c.trim(v.term),z);var y=v.term;for(var z=0;z<x.length;z++){y=y+"_"+x[z].clickValue}u.showResultWords=y;if(t.length&&A){c.each(A,function(F,E){E.category=true;E.label=E.query,x.unshift(E)})}if(C){c.each(C,function(F,E){E.festival=true;E.label=E.query,x.unshift(E)})}s=0;o(x)}})},select:function(z,B){var w=c(z.target),C,A,x=0;if(w.hasClass("suggest-delete")){z.stopPropagation();C=w.data("key");j.removeItem(C);clearTimeout(q.searching);clearTimeout(q.deleteClosing);u.stopKeyFocus=true;A=l(i,c.trim(h.val()),x);q.response(A);return false}if(t.length&&B.item.category){t.val(B.item.id)}else{t.val("")}if(B.item.festival){var D=B.item,o=b.url,y="outing";switch(D.name){case"\u6625\u6e38":y="outing";break;case"\u793c\u54c1":y="gift";break;case"\u5723\u8bde":y="christmas";break;case"\u5e74\u8d27":y="spring";break;default:y=D.name;break}var v=c("<form method='get'></form>").appendTo("body");v.attr("action",o);v.append("<input type='hidden' value='"+y+"' name='tab'/>");v.append("<input type='hidden' value='"+D.label+"' name='keywords'/>");u.aliclick(u,"sale_top_"+y);v.submit();return true}if(u.options.suggestTracelogSubmit){u._suggestClick("submit",B,z)}u.stopKeyFocus=true;h.val(B.item.value);g.onSelected&&g.onSelected.call(u,z,B)},open:function(o,v){v.menu.element.width(h.width()+g.widthfix);if(u.options.suggestTracelogShow){u._suggestClick("show",v,o)}u.exposureClick(u.options.suggestTracelogShow+"_"+u.showResultWords)},minLength:1,appendTo:g.appendTo,position:g.position});q=h.data("autocomplete");q._renderItem=function(o,v){return c("<li>").data("item.autocomplete",v).html(function(){if(v.history){return'<span class="suggest-key suggest-history-key">'+v.label+'</span><span class="suggest-delete" data-key="'+v.label+'">\u5220\u9664</span>'}else{if(t.length&&v.category){return'<span class="suggest-key" index="1" categoryid="'+v.id+'"><em>'+v.query+'</em></span><span class="suggest-category">\u5728<em>'+v.name+"</em>\u5206\u7c7b\u4e0b\u641c\u7d22</span>"}else{s++;if(v.festival){var x=b.festivalclass,w=v.name,y="outing";switch(w){case"\u6625\u6e38":y="outing";break;case"\u793c\u54c1":y="gift";break;case"\u5723\u8bde":y="christmas";break;case"\u5e74\u8d27":y="spring";break}a="_"+y;return'<div class="'+x+'"><span class="suggest-key" index="1"><em>'+v.query+'</em></span><span class="suggest-category">\u5728<em>'+w+"</em>\u5e02\u573a\u4e0b\u641c\u7d22&gt;&gt;</span></div>"}if(/^\d+$/.test(v.desc)){if(g.hideNumber){return'<span class="suggest-key" index="'+s+'">'+v.label+"</span>"}else{return'<span class="suggest-key" index="'+s+'">'+v.label+'</span><span class="suggest-result">\u7ea6'+v.desc+"\u6761\u7ed3\u679c</span>"}}else{if(!v.desc){return'<span class="suggest-key" index="'+s+'">'+v.label+"</span>"}else{return'<span class="suggest-key" index="'+s+'">'+v.label+'</span><span class="suggest-city">\u5728<em>'+v.desc+"</em>\u91cc\u627e</span>"}}}}}).appendTo(o)};q.menu.element.addClass("web-suggestion")},setOptions:function(g){c.extend(this.options,g);return this},enable:function(){this.element.autocomplete("enable")},disable:function(){this.element.autocomplete("disable")},_suggestClick:function(m,k,i){try{switch(m){case"submit":var g=this.options.suggestTracelogType+"_suggest_"+encodeURIComponent(this.element.val())+"_"+encodeURIComponent(k.item.clickValue)+"_";if(k.item.category){g=g+k.item.id+"_"}g+=this.options.suggestTracelogSubmit;return this.aliclick(this,g);break;case"show":var j="";c("span[categoryid]",k.menu.element).each(function(){j+=("_"+c(this).attr("categoryid"))});var h=a;a="";return this.exposureClick(this.options.suggestTracelogShow+"_"+encodeURIComponent(this.element.val())+j+h);break;default:break}}catch(l){}},aliclick:function(h,g){if(typeof window.dmtrack!="undefined"){dmtrack.clickstat("http://stat.1688.com/search/queryreport.html",("?searchtrace="+g))}else{if(document.images){(new Image()).src="http://stat.1688.com/search/queryreport.html?searchtrace="+g+"&time="+(+new Date)}}return true},exposureClick:function(g){if(typeof window.dmtrack!="undefined"){dmtrack.clickstat("http://stat.1688.com/sectionexp.html",("?sectionexp="+g))}else{(new Image).src="http://stat.1688.com/sectionexp.html?sectionexp="+g+"&time="+(+new Date)}}};e.Suggestion=f;c.add("web-suggestion")})(jQuery,FE.ui);