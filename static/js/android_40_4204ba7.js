!function(e){function i(n){if(t[n])return t[n].exports;var a=t[n]={exports:{},id:n,loaded:!1};return e[n].call(a.exports,a,a.exports,i),a.loaded=!0,a.exports}var t={};return i.m=e,i.c=t,i.p="//res.wx.qq.com/t/wx_fed/base/weixin_portal/res",i(0)}({0:function(e,i,t){e.exports=t(31)+t(66)+t(33)},22:function(e,i){},29:function(e,i){},31:function(e,i){},33:function(e,i){!function(){function e(e){var i=RegExp("[?&]"+e+"=([^&]*)").exec(window.location.search);return i&&decodeURIComponent(i[1].replace(/\+/g," "))}function i(e){var i=document.getElementById(e+"_src")?document.getElementById(e+"_src").getAttribute("href"):void 0,t=document.getElementById(e+"_dist");i?t.setAttribute("href",i+"&head=true"):t.style.display="none"}function t(){var t=document.getElementById("lang_dist"),n=document.getElementById("lang_src");if(n&&t){i("zh_CN"),i("zh_HK"),i("zh_TW"),i("en_US");var a=e("lang")||"zh_CN";document.getElementById(a+"_dist").className+=" current",t.style.display="flex"}}function n(){function e(e){d=e;for(var i=document.getElementsByClassName("catalog-link"),t=0;t<i.length;t++)i[t].className=i[t].className.replace(/\bcurrent\b/g,"");i[e].className.indexOf("current")===-1&&(i[e].className+=" current"),r.style.top=i[e].offsetTop+"px"}var i=document.getElementById("js_content");if(i){var t=i.getElementsByTagName("h2"),n=i.getBoundingClientRect();if(!t.length)return;var a=document.createElement("div"),s=document.createElement("div");s.style="max-width: "+(n.left-96)+"px";var r=document.createElement("div");r.className="catalog-index",a.appendChild(s),s.className="catalog",a.className="catalog-wrp";for(var o=!1,c=null,d=0,l=0;l<t.length;l++){var p=t[l],m=document.createElement("div");m.className="catalog-item";var g=document.createElement("a");g.className="catalog-link",g.setAttribute("data-index",l),0===l&&(g.className+=" current"),g.innerText=p.innerText,g.href="#"+p.id;window.location.hash=="#"+p.id;m.appendChild(g),s.appendChild(m),g.addEventListener("click",function(){o=!0,null!==c&&clearTimeout(c),c=setTimeout(function(){o=!1,c=null},1500),e(this.getAttribute("data-index"))})}document.addEventListener("scroll",function(i){if(!o){for(var n={val:100,index:null},a=0;a<t.length;a++){var s=t[a],r=s.getBoundingClientRect();Math.abs(r.top)<n.val&&(n.val=r.top,n.index=a)}null!==n.index&&n.index!==d&&e(n.index)}}),s.appendChild(r),i.appendChild(a)}}var a=window.navigator.userAgent.toLowerCase().indexOf("wechatuuto")!==-1;a||n(),t(),setTimeout(function(){var e=document.querySelector(".iframe");e&&(e.className+=" show")},200);var s=navigator.userAgent.indexOf("compatible")>-1&&userAgent.indexOf("MSIE")>-1;if(s){var r=document.getElementById("upgrade_notice");r&&(r.style.display="block")}var o=e("text_adjust");o&&(document.body.style="-webkit-text-size-adjust:"+o+"%;")}()},42:function(e,i){var t=function(e){"undefined"!=typeof WeixinJSBridge&&WeixinJSBridge.invoke?e():document.addEventListener&&document.addEventListener("WeixinJSBridgeReady",e,!1)},n=function(e,i,n){t(function(){WeixinJSBridge.invoke(e,i,n)})};e.exports={reportIDKey:function(e,i,t){if(!(e<0||e>127)){i=i||1,t=t||"64692";var n=new Image;n.src=document.location.protocol+"//support.weixin.qq.com/cgi-bin/mmsupport-bin/reportforweb?rid="+t+"&rkey="+e+"&rvalue="+i}},getAndroidVersion:function(){var e=window.navigator.userAgent||"",i=/Android\s+([0-9.]+)/i,t=e.match(i);return t?parseInt(t[1]||"10"):10},invoke:n,wxShare:function(){t(function(){WeixinJSBridge.on("menu:share:appmessage",function(e){WeixinJSBridge.invoke("sendAppMessage",{img_url:"https://res.wx.qq.com/t/fed_upload/009bdba1-2dff-4ca4-bb1d-61e2e9ef2763/logo.jpg",img_width:"108",img_height:"108",link:location.href,desc:"https://weixin.qq.com/",title:document.title},function(e){})}),WeixinJSBridge.on("menu:share:timeline",function(e){WeixinJSBridge.invoke("shareTimeline",{img_url:"https://res.wx.qq.com/t/fed_upload/009bdba1-2dff-4ca4-bb1d-61e2e9ef2763/logo.jpg",img_width:"108",img_height:"108",link:location.href,desc:"https://weixin.qq.com/",title:document.title},function(e){})})})},reportCube:function(e){setTimeout(function(){(new Image).src="https://support.weixin.qq.com/cgi-bin/mmsupportmeshnodelogicsvr-bin/cube?biz=3512&label=portal.main&moduleName=mmportal&action="+e},500)}}},64:function(e,i){},66:function(e,i,t){var n=t(42);n.reportIDKey(6),n.reportCube("load_faq_detail")}});