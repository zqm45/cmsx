/*
changed by chuangui.xiecg
http://style.c.aliimg.com/js/sys/fly/core/fly.js
http://style.c.aliimg.com/js/sys/fly/widget/detail.suggest_offer.js
*/
YAHOO.namespace("FD.sys.fly");(function(g,b,h){var a=YAHOO.lang,f=YAHOO.util.Dom,e=YAHOO.util.Event,c=YAHOO.util.Get;b.CONSTANTS={PROCESS_FLY_AO_INIT:"process:FD.sys.fly.AO.init",PROCESS_FLY_MODULE_LOAD:"process:FD.sys.fly.FlyModule.load",PROCESS_FLY_MODULE_ON_SUCCESS:"process:data load success!",ERROR_FLY_MODULE_ON_FAILURE:"error:data load failure!",PROCESS_FLY_MODULE_ON_PROCESS:"process:data loading!",ERROR_FLY_MODULE_ON_TIMEOUT:"error:data load timeout!",PROCESS_FLY_MODULE_LOAD_LOCAL_DATA:"process:load local data!",end:0};b.API_CONFIG={fly_api:"http://res.1688.com/fly/recommend.do",fly_api2:"http://res.1688.com/fly/commend.do",coase_api:"http://ctr.1688.com/ctr.html",fly_log_api:"http://stat.1688.com/bt/1688_click.html",end:0};b.API_PARAM_ITEM_MAP={memberid:"",offerids:"",catids:"",ccount:0,count:"",pid:"",ratio:"",offertype:"",querywords:"",recid:"",buid:"",catnameflg:"",catflg:"",Newflg:"",rectype:"",offersource:"",jsonname:"flyResult",end:0};b.API_LOG_MAP={page:"",objectId:"fleet",recId:"",alg:"",objectType:"offer",pid:"",end:0};b.API_PARAM_ITEM_FORMATE_FUNCTON_MAP={memberidFormate:function(i){return i},offeridsFormate:function(i){return i},catidsFormate:function(i){return i},ccountFormate:function(i){return i},countFormate:function(i){return i},pidFormate:function(i){return i},ratioFormate:function(i){return i},offertypeFormate:function(i){if(i==="sale"||i==="buy"){return i}return""},querywordsFormate:function(i){return encodeURIComponent(encodeURIComponent(i))},recidFormate:function(i){return i},defaultFormate:function(i){return i}};b.API_PARAM_ITEM_FORMATE_ACTUATOR=function(l,j){var k=l+"Formate",i=b.API_PARAM_ITEM_FORMATE_FUNCTON_MAP,m;m=i[k]?i[k]:i.defaultFormate;return m(j)};b.debug=false;b.Utils={debug:function(i){if(a.isBoolean(i)){b.debug=i}},log:function(k,i,j){if(b.debug){if(j){k=j+": "+k}if(g.console!==h&&console.info){console[i&&console[i]?i:"info"](k)}}return this},error:function(i){if(b.debug){throw i}},getCompanyURL:function(i,j,k){if(i!=16){if(j!=""){return"http://"+j+".cn.1688.com"}else{return"http://"+k+".cn.1688.com"}}else{return"http://company.1688.com/athena/"+k+".html"}},getBizrefURL:function(i,j){if(i!=""){return"http://"+i+".cn.1688.com/athena/bizreflist/"+i+".html"}if(memberId!=""){return"http://"+j+".cn.1688.com/athena/bizreflist/"+j+".html"}return""},getOfferImageURL:function(k,i){var i=i||0;var l=["http://img.china.alibaba.com/images/cn/p4p/nopic_100x100.gif","http://img.china.alibaba.com/images/cn/market/trade/list/070423/nopic150.gif","http://img.china.alibaba.com/images/cn/market/trade/list/070423/nopic150.gif","http://img.china.alibaba.com/images/cn/market/trade/list/070423/nopic150.gif"];if(k==""){return l[i]}if(k&&k.indexOf("http")){k="http://"+k}var j=[".summ.jpg",".search.jpg",".220x220.jpg",".310x310.jpg"];return k+j[i]},doSubstring:function(q,m,o){if(!q){return q}var k=0,p="",r=/[^\x00-\xff]/g,n="",j=q.replace(r,"**").length;for(var l=0;l<j;l++){n=q.charAt(l).toString();if(n.match(r)!=null){k+=2}else{k++}if(k>m){break}p+=n}if(o&&j>m){p=FD.sys.fly.Utils.doSubstring(p,m-3);p+="..."}return p},flyClick:function(k,j){if(!k){return}var l=(new Date).getTime(),i=true;if(j==1&&!YAHOO.env.ua.ie){i=false}if(document.images&&i){(new Image).src=k+"&time="+l}},iClick:function(k){var j=[],i=a.merge(b.API_LOG_MAP,k);i.objectType=i.objectType||"offer";if(i.objectType=="undefined"){i.objectType="offer"}j.push("page="+i.page);j.push("objectId="+i.objectId);j.push("recId="+i.recId);j.push("alg="+i.alg);j.push("objectType="+i.objectType);j.push("pid="+i.pid);if(typeof window.dmtrack_pageid!="undefined"){j.push("st_page_id="+dmtrack_pageid)}else{j.push("st_page_id=")}j="?"+j.join("&");if(typeof window.dmtrack!="undefined"){dmtrack.clickstat(b.API_CONFIG.fly_log_api,j)}else{d=new Date;if(document.images){(new Image).src=b.API_CONFIG.fly_log_api+j+"&time="+d.getTime()}}return true},getTime:function(){return new Date().getTime()},getPageId:function(){return typeof window.dmtrack_pageid=="undefined"?1234:window.dmtrack_pageid},getCookie:function(i){var j=document.cookie.match("(?:^|;)\\s*"+i+"=([^;]*)");return j?unescape(j[1]):""},resizeImage:function(j,i,m){j.removeAttribute("width");j.removeAttribute("height");var k;if(window.ActiveXObject){var k=new Image();k.src=j.src}else{k=j}if(k&&k.width&&k.height&&i){if(!m){m=i}if(k.width>i||k.height>m){var n=k.width/k.height,l=n>=i/m;if(window.ActiveXObject){j=j.style}j[l?"width":"height"]=l?i:m;if(window.ActiveXObject){j[l?"height":"width"]=(l?i:m)*(l?1/n:n)}}}},exposure:function(m,n){var p="",n=n||{},o=[];for(var k=0,j=m.length;k<j;k++){p+=m[k].offerId+","+m[k].alg+";"}p=p.slice(0,-1);o.push("object_ids="+p);if(typeof window.dmtrack_pageid!="undefined"){o.push("page_id="+dmtrack_pageid)}else{o.push("page_id=")}for(var k in n){o.push(k+"="+n[k])}o.push("time="+(+new Date()));o="?"+o.join("&");YAHOO.util.Get.script("http://ctr.1688.com/ctr.html"+o,{})},end:0};b.AbstractFlyView=function(k,j,i,l){this.result=k||{};this.config=j||{};this.oMergedFlyConfig=i||{};if(!l){this.coaseClick()}return this};a.augmentObject(b.AbstractFlyView.prototype,{doRequest:function(j){if(YAHOO.lang.isObject(j)){var m=YAHOO.lang.merge(this._getDefaultCoaseParamObject(),j),o=[];for(var k in m){o.push(k+"="+m[k])}var n=new Date().getTime();var l=FD.sys.fly.API_CONFIG.coase_api+"?"+o.join("&")+"&t="+n;YAHOO.util.Get.script(l,{onSuccess:function(i){},charset:"gb2312"})}},_getDefaultCoaseParamObject:function(){var l={};var i=b.Utils.getPageId(),j=parseInt(this.config.coaseType)||2,k=parseInt(this.config.recid)||"1010";l.ctr_type=j;l.page_area=k;l.page_id=i;l.category_id="";l.object_type="offer";l.object_ids="";l.keyword="";l.page_size="";l.page_no="";l.refer=escape(document.location.href);return l},coaseClick:function(){var l=this.getFunctionByDataType(this.result.datatype||"").call(this);if(l===""){return}var n=new Date().getTime();if(typeof l=="string"){var m=b.API_CONFIG.coase_api+"?"+l+"&t="+n;YAHOO.util.Get.script(m,{onSuccess:function(i){},charset:"gb2312"})}else{if(YAHOO.lang.isArray(l)){var j=[];for(var k=0;k<l.length;k++){j.push(b.API_CONFIG.coase_api+"?"+l[k]+"&t="+n)}YAHOO.util.Get.script(j,{onSuccess:function(i){},charset:"gb2312"})}}return true},getFunctionByDataType:function(i){if(a.isUndefined(i)){b.Utils.log("the callback data type is undefined!")}var j=null;switch(i.toString()){case"1":j=this.getOfferIdsByDataTypeA;break;case"2":j=this.getOfferIdsByDataTypeB;break;case"3":j=this.getOfferIdsByDataTypeC;break;default:j=this.getFunctionByDataTypeX;break}return j},getFunctionByDataTypeX:function(){b.Utils.log("coase:the callback data type cannot render!");return""},getOfferIdsByDataTypeA:function(){var j=this.result.data;if(a.isArray(j)&&j.length>0){var s=b.Utils.getPageId(),p=parseInt(this.config.coaseType)||2,q=parseInt(this.config.recid)||"1010",n="",k="",m=[],r=[];r.push("ctr_type="+p);r.push("page_area="+q);r.push("page_id="+s);r.push("category_id="+k);r.push("object_type=offer");if(j&&j.length>0){for(var l=0;l<j.length;l++){m.push(j[l].offerId+","+j[l].alg+";")}}r.push("object_ids="+m.join(""));r.push("keyword="+n);r.push("page_size=");r.push("page_no=");r.push("refer="+escape(document.location.href));return r.join("&")}return""},getOfferIdsByDataTypeB:function(){var k=this.result.data;if(a.isArray(k)&&k.length>0){var x=b.Utils.getPageId(),t=parseInt(this.config.coaseType)||2,v=parseInt(this.config.recid)||"1010",l="",r="",q=[],w=[],u=[],n=[],s=[];w.push("ctr_type="+t);w.push("page_area="+v);w.push("page_id="+x);w.push("category_id="+l);w.push("object_type=offer");u.push("ctr_type="+t);u.push("page_area="+v);u.push("page_id="+x);u.push("category_id="+l);u.push("object_type=company");if(k&&k.length>0){for(var p=0;p<k.length;p++){s.push(k[p].memberId+",0;");n=k[p]["offerIds"];for(var m=0;m<n.length;m++){q.push(n[m].offerId+","+n[m].alg+";")}}}w.push("object_ids="+q.join(""));w.push("keyword="+r);w.push("page_size=");w.push("page_no=");w.push("refer="+escape(document.location.href));u.push("object_ids="+s.join(""));u.push("keyword="+r);u.push("page_size=");u.push("page_no=");u.push("refer="+escape(document.location.href));return[w.join("&"),u.join("&")]}return""},getOfferIdsByDataTypeC:function(){var k=this.result.data;if(a.isArray(k)&&k.length>0){var v=b.Utils.getPageId(),r=parseInt(this.config.coaseType)||2,s=parseInt(this.config.recid)||"1010",q="",l="",p=[],u=[];u.push("ctr_type="+r);u.push("page_area="+s);u.push("page_id="+v);u.push("category_id="+l);u.push("object_type=offer");var t=[];if(k&&k.length>0){for(var n=0;n<k.length;n++){t=k[n].offerIds;for(var m=0;m<t.length;m++){p.push(t[m].offerId+","+t[m].alg+";")}}}u.push("object_ids="+p.join(""));u.push("keyword="+q);u.push("page_size=");u.push("page_no=");u.push("refer="+escape(document.location.href));return u.join("&")}return""},end:0});b.InterfaceFlyView=function(){};a.augmentObject(b.InterfaceFlyView.prototype,{onSuccess:function(){},onFailure:function(){},onTimeout:function(){},onProgress:function(){},end:0});b.FlyModule=function(k,i,j){var l=FD.sys.fly.Utils;this.oFlyConfig=k;this.fnFilter=i;this.oMergedFlyConfig={};this.FlyViewClass=j;this.load()};a.augmentObject(b.FlyModule.prototype,{load:function(){var i=this.getLoadUrl();var k={onSuccess:this.onSuccess,onFailure:this.onFailure,onTimeout:this.onTimeout,onProgress:this.onProgress,scope:this,charset:"gb2312",timeout:10000,data:{}};b.Utils.log(b.CONSTANTS.PROCESS_FLY_MODULE_LOAD);var j=YAHOO.util.Get.script(i,k)},getLoadUrl:function(){var i=this.getLoadApi()+"?"+this.getParamsString();if(a.isFunction(this.fnFilter)){i=this.fnFilter(i)}return i},getLoadApi:function(){if(this.oFlyConfig.apiType&&this.oFlyConfig.apiType==="commend"){return b.API_CONFIG.fly_api2}return b.API_CONFIG.fly_api},getParamsString:function(){var j=this.doParamsFormate(a.merge(b.API_PARAM_ITEM_MAP,this.oFlyConfig)),k=[];for(var l in j){k.push(l+"="+j[l])}k=k.concat(this.addDefaultParams());return k.join("&")},doParamsFormate:function(k){if(!a.isObject(k)){return k}var l={};for(var j in k){if(!a.isUndefined(b.API_PARAM_ITEM_MAP[j])&&j!="end"){l[j]=b.API_PARAM_ITEM_FORMATE_ACTUATOR(j,k[j])}}this.oMergedFlyConfig=l;return l},addDefaultParams:function(){var j=[];var k=b.Utils.getCookie("__last_loginid__");var i=b.Utils.getCookie("ali_beacon_id");if(k==""&&i==""){if(typeof window.membercookieinfo!="undefined"){i=window.membercookieinfo.lastLoginId||-1}else{i=-1}}j.push("uid="+(k!=""?k:i));j.push("pageid="+b.Utils.getPageId());j.push("t="+b.Utils.getTime());return j},onSuccess:function(){var i={};if(!a.isUndefined(this.oFlyConfig.jsonname)){i=window[this.oFlyConfig.jsonname]}else{i=window[b.API_PARAM_ITEM_MAP.jsonname]}if(a.isObject(i)&&i.returnCode.toString()=="0"&&a.isArray(i.data)&&i.data.length>0){b.Utils.log(b.CONSTANTS.PROCESS_FLY_MODULE_ON_SUCCESS);this.toDo("onSuccess",i)}else{this.onFailure()}},onFailure:function(){b.Utils.log(b.CONSTANTS.ERROR_FLY_MODULE_ON_FAILURE,"info");var j={},i=0;if(typeof FD.sys.fly.DATA_LIST!="undefined"){i=this.oFlyConfig.localDataType?parseInt(this.oFlyConfig.localDataType):0;if(i<=FD.sys.fly.DATA_LIST.length&&i){j=FD.sys.fly.DATA_LIST[i-1];b.Utils.log(j)}else{j=FD.sys.fly.DATA_LIST[0]}b.Utils.log(b.CONSTANTS.PROCESS_FLY_MODULE_LOAD_LOCAL_DATA,"info")}this.toDo("onFailure",j)},onTimeout:function(){b.Utils.log(b.CONSTANTS.ERROR_FLY_MODULE_ON_TIMEOUT,"error");this.onFailure()},onProgress:function(){b.Utils.log(b.CONSTANTS.PROCESS_FLY_MODULE_ON_PROCESS);this.toDo("onProgress",{})},toDo:function(j,i){new this.FlyViewClass(j,i,this.oFlyConfig,this.oMergedFlyConfig)},end:0});b.Ao=function(i,j){var k=this;if(!(k instanceof arguments.callee)){return new arguments.callee(i,j)}return{use:function(l){b.Utils.log(b.CONSTANTS.PROCESS_FLY_AO_INIT);new b.FlyModule(i,j,l)},end:0}}})(window,FD.sys.fly);;
//是否要开启fly debug
FD.sys.fly.Utils.debug(true);
(function(win,S){
var L = YAHOO.lang,D = YAHOO.util.Dom, E = YAHOO.util.Event;
/**
* 阿里旺旺-猜你喜欢
* @param {String} callback 		返回的状态 onSuccess|onFailure|onTimeout|onProgress
* @param {Object} data 			返回的数据
* @param {Object} oFlyConfig 		初始化的配置参数
* @param {Object} oMergedFlyConfig	经过mergeed后的配置参数,它跟oFlyConfig不同在于,这个参数就是真正向接口发起请求的所带的参数
*/
S.DetailSuggestOfferView = function(callback,data,oFlyConfig,oMergedFlyConfig){
//实例化父类
this.isHoldOfferView = S.DetailSuggestOfferView.superclass.constructor.call(this, data,oFlyConfig,oMergedFlyConfig,true);
this.result = data;
this.oFlyConfig = oFlyConfig;
this.oMergedFlyConfig = oMergedFlyConfig;
//提前获取汇率以及币种,以便offer人民币价格的计算,只对etc的offer有效
this.rate = '';
this.currencyCnName = '';
if($('rate')&&$('currencyCnName')){
this.rate = parseFloat($('rate').value);
this.currencyCnName = $('currencyCnName').value;
}
this.isTopDomain = false;
if($('isTopDomain')){
this.isTopDomain = Boolean($('isTopDomain').value);
}
this.topDomainDetailURL = '';
if(this.isTopDomain===true&&$('topDomainDetailURL')){
this.topDomainDetailURL = $('topDomainDetailURL').value;
}
this[callback]();
FD.sys.fly.Utils.log(data);
FD.sys.fly.Utils.log(oFlyConfig);
FD.sys.fly.Utils.log(oMergedFlyConfig);
return this;
};
//继承父类
L.extend(S.DetailSuggestOfferView,S.AbstractFlyView);
//接口实例化
L.augment(S.DetailSuggestOfferView,S.InterfaceFlyView);
//方法封装
L.augmentObject(S.DetailSuggestOfferView.prototype,{
onSuccess:function(){
FD.sys.fly.Utils.log('Success:DetailSuggestOfferView');
this._render();
//vivian.xul 20101014 add
this._isHoldOfferData();
//vivian.xul 20101014 end
},
onFailure:function(){
FD.sys.fly.Utils.log('Failure:DetailSuggestOfferView');
//回调传入进来的函数
this.oFlyConfig.callback(this.result,false);
},
onTimeout:function(){
//do nothing
},
onProgress:function(){
//do nothing
},
_render:function(){
var html = [];
html.push(this._renderHead());
html.push(this._renderBody());
html.push(this._renderFoot());
if($(this.oFlyConfig.flyWidgetId)){
var ulEl = document.createElement('ul');
ulEl.innerHTML = html.join('');
$(this.oFlyConfig.flyWidgetId).appendChild(ulEl);
$D.removeClass($$('div.de-blockhd','mod-detail-othsupplyinfo'),'hide');
$D.removeClass($$('div.de-blockbd','mod-detail-othsupplyinfo'),'hide');
$D.setStyle('mod-detail-othsupplyinfo','display','block');
//回调传入进来的函数
this.oFlyConfig.callback(this.result,true);
var liItems = '#'+this.oFlyConfig.flyWidgetId+' div.iphoto';
$E.on($$(liItems),'mouseover',function(){
$D.addClass(this,'iover');
});
$E.on($$(liItems),'mouseout',function(){
$D.removeClass(this,'iover');
});
//打点
var nodes = $$('a',this.oFlyConfig.flyWidgetId);
YAHOO.detail.util.batchClick(nodes,'data-dydmt');
}
},
_renderHead:function(){
return '';
},
_renderBody:function(){
var _html = [];
_html.push(this._renderOfferList(this.result.data));
return _html.join('');
},
_renderOfferList:function(offerList){
var offerListHtml = [];
//最多显示5个
var maxItemLength = parseInt(this.oFlyConfig.count)||10;
for(var i=0,l = offerList.length;i<l&&i<maxItemLength;i++){
offerListHtml.push(this._renderOfferItem(offerList[i],i));
}
return offerListHtml.join('');
},
_renderOfferItem:function(offer,idx){
var offerHtml = [];
offerHtml.push('<li>');
offerHtml.push(this._renderOfferPhoto(offer));
offerHtml.push(this._renderOfferTitle(offer));
offerHtml.push(this._renderOfferPrice(offer));
offerHtml.push('</li>');
return offerHtml.join('');
},
_renderOfferPrice:function(offer){
var _price = parseFloat(offer.rmbPrice);
if(_price===0&&Boolean(offer.ETC)===false){
return '<p class="no-price">价格面议</p>';
}
if(offer.ETC&&Boolean(offer.ETC)===true){
var foreignPrice = parseFloat(offer.foreignPrice);
var rmb = offer.foreignPrice*this.rate;
rmb = rmb.toFixed(2);
return '<p class="p-etc"><b>约</b>&yen; <em>'+rmb+'</em><br/><span>'+foreignPrice.toFixed(2)+this.currencyCnName+'</span></p>';
}
return '<p>&yen; <em>'+_price.toFixed(2)+'</em><br/></p>';
},
_renderOfferTitle:function(offer){
//这里不区分是不是p4p的offer
var detailUrl  = this._getDetailURL(offer);
var subject = offer.subject;
subject = subject.replace("<",'&#60;');
subject = subject.replace(">",'&#62;');
var _title = '<h4><a href="'+detailUrl+'" target="_self" onmousedown="FD.sys.fly.Utils.iClick({\'page\':'+this.oFlyConfig.coaseType+',\'objectId\':\''+offer.offerId+'\',\'recId\':\''+this.oFlyConfig.recid+'\',\'alg\':\''+offer.alg+'\',\'objectType\':\'offer\',\'pid\':\''+this.oFlyConfig.pid+'\'})" data-dydmt="recommend1title" title="'+subject+'">'+subject+'</a></h4>';
return _title;
},
_renderOfferPhoto:function(offer){
//这里不区分是不是p4p的offer
var detailUrl  = this._getDetailURL(offer);
var _photo = '<div class="iphoto"><a href="'+detailUrl+'" target="_self" onmousedown="FD.sys.fly.Utils.iClick({\'page\':'+this.oFlyConfig.coaseType+',\'objectId\':\''+offer.offerId+'\',\'recId\':\''+this.oFlyConfig.recid+'\',\'alg\':\''+offer.alg+'\',\'objectType\':\'offer\',\'pid\':\''+this.oFlyConfig.pid+'\'})"  data-dydmt="recommend1pic" title="'+offer.subject+'"><img src="'+FD.sys.fly.Utils.getOfferImageURL(offer.offerImageUrl,0)+'" onerror="javascript:this.src=\'http://img.china.alibaba.com/news/upload/5002027/48x48_1276134613200.gif\'"></a></div>';
return _photo;
},
_renderFoot:function(){
return '';
},
_getDetailURL:function(offer){
//如果是顶级域名,则按照顶级域名的规则来拼装detail的url,否则直接返回原始的detail url
if(this.isTopDomain===true&&this.topDomainDetailURL!=""){
return this.topDomainDetailURL.replace(/\{memberId\}/,offer.memberId).replace(/\{postCatId\}/,offer.categoryId).replace(/\{offerId\}/,offer.offerId);
}else{
return offer.offerDetailUrl;
}
},
//vivian.xul add 20101014
_isHoldOfferData:function(){
var maxItemLength = parseInt(this.oFlyConfig.count)||10,
offerList = this.result.data,
o = {},
objectIds = [],
l = (offerList.length>5?5:offerList.length);
for(var i=0;i<l&&i<maxItemLength;i++){
objectIds.push(offerList[i].offerId+','+offerList[i].alg+';');
}
o['category_id'] = this.oFlyConfig.catids;
o['object_ids'] = objectIds.join('');
this.isHoldOfferView.doRequest(o);
if(offerList.length>5){
var objectIdsNext = [],
obj = {},
_flag = true;
for(var i=5;i<offerList.length&&i<maxItemLength;i++){
objectIdsNext.push(offerList[i].offerId+','+offerList[i].alg+';');
}
obj['category_id'] = this.oFlyConfig.catids;
obj['object_ids'] = objectIdsNext.join('');
FYE.on('J_sugNext', 'click', function(){
if (_flag) {
this.isHoldOfferView.doRequest(obj);
_flag = false;
}
}, this, true);
}
},
end:0
},true);
})(window,FD.sys.fly);;

