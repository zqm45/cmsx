var IEPNGFix=window.IEPNGFix||{};IEPNGFix.data=IEPNGFix.data||{};IEPNGFix.blankImg="http://img.china.alibaba.com/images/common/util/1x1.gif";IEPNGFix.fix=function(e,d,a){var b=this.hook.enabled;this.hook.enabled=0;var c="DXImageTransform.Microsoft.AlphaImageLoader";d=(d||"").replace(/\(/g,"%28").replace(/\)/g,"%29");if(d&&!(/IMG|INPUT/.test(e.nodeName)&&(a!=2))&&e.currentStyle.width=="auto"&&e.currentStyle.height=="auto"){if(e.offsetWidth){e.style.width=e.offsetWidth+"px"}if(e.clientHeight){e.style.height=e.clientHeight+"px"}if(e.currentStyle.display=="inline"){e.style.display="inline-block"}}if(a==1){e.style.backgroundImage='url("'+this.blankImg+'")'}if(a==2){e.src=this.blankImg}if(e.filters[c]){e.filters[c].enabled=d?true:false;if(d){e.filters[c].src=d}}else{if(d){e.style.filter="progid:"+c+'(src="'+d+'",sizingMethod="'+(a==2?"scale":"crop")+'")'}}this.hook.enabled=b};IEPNGFix.process=function(g,l){if(!/MSIE (5\.5|6)/.test(navigator.userAgent)||typeof g.filters=="unknown"){return}if(!this.data[g.uniqueID]){this.data[g.uniqueID]={className:""}}var e=this.data[g.uniqueID],k=l?{propertyName:"src,backgroundImage"}:event,m=/src/.test(k.propertyName),b=/backgroundImage/.test(k.propertyName),h=/width|height|background(Pos|Rep)/.test(k.propertyName),c=!l&&((g.className!=e.className)&&(g.className||e.className));if(!(m||b||h||c)){return}e.className=g.className;var f=this.blankImg.match(/([^\/]+)$/)[1],d=g.style,a=g.currentStyle;if(c&&(d.backgroundImage.indexOf("url(")==-1||d.backgroundImage.indexOf(f)>-1)){return setTimeout(function(){d.backgroundImage=""},0)}if(m&&g.src&&{IMG:1,INPUT:1}[g.nodeName]){if((/\.png/i).test(g.src)){if(!g.oSrc){g.oSrc=g.src}this.fix(g,g.src,2)}else{if(g.src.indexOf(f)==-1){this.fix(g,"")}}}var i=a.backgroundImage||d.backgroundImage;if((i+g.src).indexOf(f)==-1){var j=i.match(/url[("']+(.*\.png[^\)"']*)[\)"']/i);if(j){if(this.tileBG&&!{IMG:1,INPUT:1}[g.nodeName]){this.tileBG(g,j[1]);this.fix(g,"",1)}else{if(e.tiles&&e.tiles.src){this.tileBG(g,"")}this.fix(g,j[1],1);this.childFix(g)}}else{if(e.tiles&&e.tiles.src){this.tileBG(g,"")}this.fix(g,"")}}else{if((h||c)&&e.tiles&&e.tiles.src){this.tileBG(g,e.tiles.src)}}if(l){this.hook.enabled=1;g.attachEvent("onpropertychange",this.hook)}};IEPNGFix.childFix=function(g){var c=["a","input","select","textarea","button","iframe","object"],d=c.length,a=[];while(d--){var b=g.all.tags(c[d]),f=b.length;while(f--){a.push(b[f])}}d=a.length;if(d&&(/relative|absolute/i).test(g.currentStyle.position)){}while(d--){if(!(/relative|absolute/i).test(a[d].currentStyle.position)){a[d].style.position="relative"}}};IEPNGFix.hook=function(){if(IEPNGFix.hook.enabled){IEPNGFix.process(element,0)}};IEPNGFix.process(element,1);