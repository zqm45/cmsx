if(!FD.sys.Alibar){FDEV.namespace("FD.sys.Alibar");(function(e){var c,d=FD.common.emptyFn,b=YAHOO.env.ua.ie===6;var a={loginfoInit:function(){FYS("li.account-signin>a",c,true).href="https://login.1688.com/member/signin.htm?Done="+encodeURIComponent(location.href);function f(){var h=FD.common.loginId,j=FD.common.isLogin,l=FD.common.lastLoginId,m="http://me.1688.com/",g=FYS("span.account-id",c,true),i,o;FYD.addClass(FYS("li.account-msg, li.account-signin, li.account-signup, li.account-signout",c),"fd-hide");if(j){FYD.removeClass(FYS("li.account-signout",c,true),"fd-hide");FYD.removeClass(FYS("li.account-msg",c,true),"fd-hide");i=document.createElement("a");i.href=m;i.target="_blank";i.innerHTML=n(h);i.title=h;if(FYS("li.vipInfoBox",c,true)){FYD.addClass(i,"nav-arrow")}FYD.addClass(FYS("li.account-signin",c,true),"fd-hide");FYD.addClass(FYS("li.account-signup",c,true),"fd-hide");FYD.removeClass(FYS("li.account-signout",c,true),"fd-hide");g.innerHTML="";g.appendChild(i);window.aliclick&&FYE.on(i,"mousedown",k);FD.common.request("jsonp","http://work.1688.com/home/unReadMsgCount.htm",{onCallback:function(s){var r=FYS("li.account-msg",c,true),p=FYS(">a",r,true),q=FYS(">span",p,true);q&&p.removeChild(q);if(s.success&&s.count>0){q=document.createElement("span");q.innerHTML=(s.count>99?"99+":s.count);p.appendChild(q);p.title="\u4f60\u6709\u65b0\u6d88\u606f";window.aliclick&&FYE.on(q,"mousedown",function(){aliclick(this,"?tracelog=cn_alibar_msg")})}else{p.title="\u67e5\u770b\u4f60\u7684\u6d88\u606f"}}})}else{FYD.removeClass(FYS("li.account-signin, li.account-signup",c),"fd-hide");if(l){i=document.createElement("a");i.href=m;i.target="_blank";i.innerHTML=n(l);i.title=l;g.innerHTML="";g.appendChild(i);window.aliclick&&FYE.on(i,"mousedown",k)}else{o=FYS("li.account-msg span",c,true);g.innerHTML="\u6b22\u8fce\u6765\u5230\u963f\u91cc\u5df4\u5df4";o&&o.parentNode.removeChild(o)}}function n(p){var q="";if(p.length<=11){return p}else{if(escape(p).indexOf("%u")!==-1){q=p.substring(0,10)+"..."}else{q=p.length>14?p.substring(0,13)+"...":p}return q}}function k(){aliclick(this,"?tracelog=cn_alibar_id")}}f();e.refresh=f},dropdownInit:function(){var f=FYS("li.extra",c);FYE.on(f,"mouseenter",function(){b&&FYD.addClass(this,"nav-hover");FYD.addClass(FYD.getPreviousSibling(this),"nav-hover-prev")});FYE.on(f,"mouseleave",function(){b&&FYD.removeClass(this,"nav-hover");FYD.removeClass(FYD.getPreviousSibling(this),"nav-hover-prev")})},vipInfoInit:function(){var j=FYS("li.vipInfoBox",c,true);var n=null;var f=null;var k='<p class="reLoginRemind">\u60a8\u7684\u767b\u5f55\u72b6\u6001\u5df2\u5931\u6548,<a href="http://login.1688.com/member/signin.htm" target="_self">\u8bf7\u91cd\u65b0\u767b\u5f55</a></p>';var l='<p class="subAccountRemind">\u60a8\u597d\uff01\u60a8\u5f53\u524d\u767b\u9646\u4e86\u4f1a\u5458\u5b50\u8d26\u53f7  <a href="http://login.1688.com/member/signout.htm" target="_self">\u9000\u51fa</a></p>';if(!j){return}isLogin=FD.common.isLogin;var h=0;if(isLogin){FYE.delegate(c,"mouseenter",function(){n=this;if(f){clearTimeout(f);f=null}setTimeout(function(){FYD.addClass(n,"infoHover")},100);if(!isLogin||h){return}FD.common.request("jsonp","http://vip.1688.com/club/club_info_json.do",{cache:false,onCallback:function(p){if(p.success!==true){if(p.data.errorMsg==="NOT_LOGIN"){FYS("li.vipInfoBox div.nav-content",c,true).innerHTML=k;h=1}else{if(p.data.errorMsg==="SUB_ACCOUNT"){FYS("li.vipInfoBox div.nav-content",c,true).innerHTML=l;h=1}}return}m(p.data);h=1},onFailure:function(){}})},"li.vipInfoBox");FYE.delegate(c,"mouseleave",function(){f=setTimeout(function(){FYD.removeClass(n,"infoHover");f=null},400)},"li.vipInfoBox")}function m(s){var p=FD.common.lastLoginId;p=p?p:"";var q='<div class="levelWrapper fd-clr">                                    <div class="memberPhoto">                                        <a href="http://me.1688.com" target="_blank">                                            <img src="<%= this.userImg %>" alt="" onerror="<%= this.error %>"/>                                        </a>                                    </div>                                    <div class="level">                                        <p class="account">                                            <a class="accountManage" href="http://work.1688.com/home/page/index.htm#app=accountmanagement&menu=&channel=" target="_blank">\u8d26\u53f7\u7ba1\u7406</a>                                            <span class="sep">|</span>                                            <a class="signout" href="http://login.1688.com/member/signout.htm" data-trace="cn_alibar_quit" title="\u9000\u51fa">\u9000\u51fa</a>                                        </p>                                        <p class="supplyLevel fd-clr">                                            <% if( typeof $data.saleRate !== "undefined" ) { %>                                                <span class="title">\u4f9b\u5e94\u7b49\u7ea7:</span>                                                <a class="levelImg" data-trace="alibar_supplier_rank" href="<%= $data.saleRate.targetUrl %>" target="_blank" title="<%= $data.saleRate.tips %>">                                                    <img src="<%= $data.saleRate.logoUrl %>" alt=""/>                                                </a>                                            <% } else if(typeof $data.saleRate === "undefined" && typeof $data.buyRate === "undefined" && $data.medals.length === 0 ) { %>                                                <a class="vipClub" data-trace="alibar_vip_club" href="http://vip.1688.com" target="_blank">\u53bb\u4f1a\u5458\u4ff1\u4e50\u90e8\u901b\u901b</a>                                            <% } %>                                        </p>                                        <p class="purchaseLevel fd-clr">                                            <% if( typeof $data.buyRate !== "undefined" ) { %>                                                <span class="title">\u91c7\u8d2d\u7b49\u7ea7:</span>                                                <a class="levelImg" data-trace="alibar_buyers_rank" href="<%= $data.buyRate.targetUrl %>" target="_blank" title="<%= $data.buyRate.tips %>">                                                    <img src="<%= $data.buyRate.logoUrl %>" alt=""/>                                                </a>                                            <% } else if(typeof $data.saleRate === "undefined" && typeof $data.buyRate === "undefined" && $data.medals.length === 0 ) { %>                                                <a class="newComer" data-trace="alibar_vip_noviciate" href="http://page.1688.com/html/service/aliguide/seller_user_guide.html" target="_blank">\u65b0\u624b\u5e2e\u52a9\u4e2d\u5fc3</a>                                            <% } %>                                        </p>                                    </div>                                </div>                                <% if( $data.medals.length ) { %>                                    <div class="medalWrapper fd-clr">                                        <% for ( var i = 0; i < $data.medals.length; i++ ) { %>                                            <a class="medal" data-trace="alibar_medal_rank" href="<%= $data.medals[i].targetUrl %>" title="<%= $data.medals[i].tips %>">                                                <img src="<%= $data.medals[i].logoUrl %>" alt=""/>                                            </a>                                        <% } %>                                    </div>                                <% } %>';var r=i(p);var t={userImg:r,error:"this.src='http://img.china.alibaba.com/cms/upload/2012/137/253/352731_936034060.png';this.onerror=null;"};FD.common.request("jsonp","/static/fdevlib/js/fdev-v3/widget/template/sweet-min.js",{onSuccess:function(){var u;var v=FYS("li.vipInfoBox div.nav-content",c,true);u=FD.widget.Sweet(q).applyData(s,t);v.innerHTML=u}})}function i(u){var t=u.substring(0,1),r=u.substring(1,2),q=u.substring(2,3),s=u.substring(3,4);var p=t+"/"+r+"/"+q+"/"+s+"/";return"http://img.china.alibaba.com/club/upload/pic/user/"+p+u+"_s.jpeg"}function g(){var p=FYS("div.nav-content",j,true);FYD.addClass(p,"alibar-loading");FYD.setStyle(p,"height",60)}function o(){var p=$("div.nav-content",j);FYD.removeClass(p,"alibar-loading");FYD.setStyle(p,"height","auto")}},purchaselistInit:function(){var j=FYS("li.topnav-purchaselist",c,true);if(!j){return}var k=FYS("div.nav-title",j,true),f=FYS("em",k,true),g=FYS("div.nav-content",j,true),i=FYS(">.product-list",g,true),h=FYS(">.purchase-info",g,true);FYE.delegate(c,"mouseenter",function(){window.aliclick&&aliclick(this,"?tracelog=cn_alibar_purchaselist_hover");refreshDetail()},"li.topnav-purchaselist");FYE.delegate(i,"click",function(s){FYE.preventDefault(s);var q=FYD.getAncestorByTagName(this,"dl"),p="offer",o=FYD.getAttribute(q,"goodsid"),r=FYD.getAttribute(q,"specid");FD.common.request("jsonp","http://order.1688.com/order/purchase/ajax/deleteFromPurchaseListNoCsrfAuth.jsx?t="+new Date().getTime(),{cache:false,onSuccess:function(){if(window.delFromPurchaseListResult&&delFromPurchaseListResult.success){l();window.delFromPurchaseListResult=undefined}}},{returnType:"jsonp",batchDel:[p,o,r].join()})},"a.delete");function l(){FD.common.request("jsonp","http://order.1688.com/order/purchase/ajax/quick_purchase_list.jsx?t="+new Date().getTime(),{cache:false,onSuccess:function(){if(window.goodsList&&goodsList.success){var s=goodsList.totalKind||goodsList.sumOfKind,r,t,o;if(!s){s=0}f.innerHTML=s;while(r=FYS(">dl",i,true)){i.removeChild(r)}while(o=FYS(">h3",i,true)){i.removeChild(o)}while(t=FYS(">p",h,true)){h.removeChild(t)}if(s){FYD.addClass(j,"topnav-purchaselist-stock");m(goodsList.data);n(goodsList)}else{FYD.removeClass(j,"topnav-purchaselist-stock")}if(goodsList.totalKind&&FYS(">dl",i,true)){var q=document.createElement("h3");q.innerHTML="\u6700\u8fd1\u52a0\u5165\u7684\u8d27\u54c1\uff1a";FYD.insertBefore(q,FYS(">dl",i,true))}window.goodsList=undefined}}})}function m(o){o.forEach(function(v,t){if(t>4){return}var p="";var x;if(v.specInfos&&v.specInfos.length){x=[];v.specInfos.forEach(function(z,y){x.push('<span title="');x.push(z.specName);x.push("\uff1a");x.push(z.specValue);x.push('" class="specItem');if(y===v.specInfos.length-1){x.push(" lastItem")}x.push('">');x.push(z.specName);x.push("\uff1a");x.push(z.specValue);x.push("</span>")});p=['<dd class="specInfos">',x.join(""),"</dd>"].join("")}var r=document.createElement("dl"),u=FD.common.escapeHTML(v.goodsName),s=["<dt>",'<a title="',u,'" target="_blank" href="',v.imgLinkUrl,'" data-trace="cn_alibar_purchaselist_offerdetail"></a>',"</dt>",'<dd class="title">','<a title="',u,'" target="_blank" href="',v.imgLinkUrl,'" data-trace="cn_alibar_purchaselist_offerdetail">',FD.common.escapeHTML(v.goodsName.cut(23,"...")),"</a>","</dd>",p,'<dd class="price">',"&yen;<em>",v.goodsPrice,"</em>\u5143&nbsp;\u00d7&nbsp;<span>",v.goodsCount,"</span>","</dd>",'<dd class="action"><a class="delete" title="\u5220\u9664" href="#">\u5220\u9664</a></dd>'],q=new Image();q.onload=function(){if(this.width&&this.height){var z=w=50;if(this.width>w||this.height>z){var A=this.width/this.height,y=A>=w/z;q[y?"width":"height"]=y?w:z;if(b){q[y?"height":"width"]=(y?w:z)*(y?1/A:A)}}}};q.alt=v.goodsName;q.src=v.imgUrl;r.innerHTML=s.join("");r.setAttribute("goodsid",v.goodsID);v.specId&&r.setAttribute("specid",v.specId);i.appendChild(r);FYS(">dt>a",r,true).appendChild(q)})}function n(s){var r=document.createElement("p"),q=[];if(s.remainKind){q=['\u8fdb\u8d27\u5355\u8fd8\u5269\u4f59\u8d27\u54c1\uff1a<span class="orange">',s.remainKind,"</span>\u79cd\uff08",s.remainCount,"\u4ef6\uff09"]}else{if(s.sumOfKind){q=["\u5171\u8ba1<span>",s.sumOfKind,"</span>\u79cd\u8d27\u54c1\uff08",s.sumOfAcount,"\u4ef6\uff09<br/>\u8d27\u54c1\u5408\u8ba1\uff1a<em>",s.sumOfPrice.toFixed(2),"</em>\u5143"]}}r.innerHTML=q.join("");FYD.insertBefore(r,FYS(">a",h,true))}l();e.purchaselistRefresh=l},tpInit:function(){FYE.on(FYS("li.topnav-tp",c,true),"mouseenter",f);function f(){var g=this,i=[];YAHOO.util.Get.css("http://style.c.aliimg.com/css/lib/fdev-v4/widget/web/alitalk-min.css");if(typeof FD.widget.Alitalk==="undefined"){i.push("http://style.c.aliimg.com/js/fdevlib/widget/alitalk/fdev-alitalk-v3.js")}if(typeof FD.widget.ShuntAlitalk==="undefined"){i.push("http://style.c.aliimg.com/js/lib/fdev-v3/widget/alitalk/shuntalitalk-v2.js")}if(i.length>0){FD.common.request("jsonp",i,{onSuccess:function(j){h()}})}else{h()}function h(){new FD.widget.ShuntAlitalk("order-online",{ruleId:"ALITALK_INCALL_ROLE_CTP01",remote:true,attname:"data-alitalk-shunt"})}FYE.removeListener(this,"mouseenter",f)}},traceInit:function(){window.aliclick&&FYE.on(FYS("a[data-trace]",c),"mousedown",function(){aliclick(this,"?tracelog="+FYD.getAttribute(this,"data-trace"))})}};e.refresh=e.refresh||d;e.purchaselistRefresh=e.purchaselistRefresh||d;FYE.onDOMReady(function(){c=c||FYG("alibar-v4");if(c){for(var f in a){a[f]()}}})})(FD.sys.Alibar)};