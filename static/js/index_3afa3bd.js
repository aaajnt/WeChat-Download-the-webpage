!function(e){function t(n){if(a[n])return a[n].exports;var i=a[n]={exports:{},id:n,loaded:!1};return e[n].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}var a={};return t.m=e,t.c=a,t.p="//res.wx.qq.com/t/wx_fed/base/weixin_portal/res",t(0)}({0:function(e,t,a){e.exports=a(31)+a(66)+a(33)},22:function(e,t){},29:function(e,t){},31:function(e,t){},33:function(e,t){!function(){function e(e){var t=RegExp("[?&]"+e+"=([^&]*)").exec(window.location.search);return t&&decodeURIComponent(t[1].replace(/\+/g," "))}function t(e){var t=document.getElementById(e+"_src")?document.getElementById(e+"_src").getAttribute("href"):void 0,a=document.getElementById(e+"_dist");t?a.setAttribute("href",t+"&head=true"):a.style.display="none"}function a(){var a=document.getElementById("lang_dist"),n=document.getElementById("lang_src");if(n&&a){t("zh_CN"),t("zh_HK"),t("zh_TW"),t("en_US");var i=e("lang")||"zh_CN";document.getElementById(i+"_dist").className+=" current",a.style.display="flex"}}function n(){function e(e){d=e;for(var t=document.getElementsByClassName("catalog-link"),a=0;a<t.length;a++)t[a].className=t[a].className.replace(/\bcurrent\b/g,"");t[e].className.indexOf("current")===-1&&(t[e].className+=" current"),s.style.top=t[e].offsetTop+"px"}var t=document.getElementById("js_content");if(t){var a=t.getElementsByTagName("h2"),n=t.getBoundingClientRect();if(!a.length)return;var i=document.createElement("div"),o=document.createElement("div");o.style="max-width: "+(n.left-96)+"px";var s=document.createElement("div");s.className="catalog-index",i.appendChild(o),o.className="catalog",i.className="catalog-wrp";for(var r=!1,c=null,d=0,l=0;l<a.length;l++){var p=a[l],m=document.createElement("div");m.className="catalog-item";var h=document.createElement("a");h.className="catalog-link",h.setAttribute("data-index",l),0===l&&(h.className+=" current"),h.innerText=p.innerText,h.href="#"+p.id;window.location.hash=="#"+p.id;m.appendChild(h),o.appendChild(m),h.addEventListener("click",function(){r=!0,null!==c&&clearTimeout(c),c=setTimeout(function(){r=!1,c=null},1500),e(this.getAttribute("data-index"))})}document.addEventListener("scroll",function(t){if(!r){for(var n={val:100,index:null},i=0;i<a.length;i++){var o=a[i],s=o.getBoundingClientRect();Math.abs(s.top)<n.val&&(n.val=s.top,n.index=i)}null!==n.index&&n.index!==d&&e(n.index)}}),o.appendChild(s),t.appendChild(i)}}var i=window.navigator.userAgent.toLowerCase().indexOf("wechatuuto")!==-1;i||n(),a(),setTimeout(function(){var e=document.querySelector(".iframe");e&&(e.className+=" show")},200);var o=navigator.userAgent.indexOf("compatible")>-1&&userAgent.indexOf("MSIE")>-1;if(o){var s=document.getElementById("upgrade_notice");s&&(s.style.display="block")}var r=e("text_adjust");r&&(document.body.style="-webkit-text-size-adjust:"+r+"%;")}()},42:function(e,t){var a=function(e){"undefined"!=typeof WeixinJSBridge&&WeixinJSBridge.invoke?e():document.addEventListener&&document.addEventListener("WeixinJSBridgeReady",e,!1)},n=function(e,t,n){a(function(){WeixinJSBridge.invoke(e,t,n)})};e.exports={reportIDKey:function(e,t,a){if(!(e<0||e>127)){t=t||1,a=a||"64692";var n=new Image;n.src=document.location.protocol+"//support.weixin.qq.com/cgi-bin/mmsupport-bin/reportforweb?rid="+a+"&rkey="+e+"&rvalue="+t}},getAndroidVersion:function(){var e=window.navigator.userAgent||"",t=/Android\s+([0-9.]+)/i,a=e.match(t);return a?parseInt(a[1]||"10"):10},invoke:n,wxShare:function(){a(function(){WeixinJSBridge.on("menu:share:appmessage",function(e){WeixinJSBridge.invoke("sendAppMessage",{img_url:"https://res.wx.qq.com/t/fed_upload/009bdba1-2dff-4ca4-bb1d-61e2e9ef2763/logo.jpg",img_width:"108",img_height:"108",link:location.href,desc:"https://weixin.qq.com/",title:document.title},function(e){})}),WeixinJSBridge.on("menu:share:timeline",function(e){WeixinJSBridge.invoke("shareTimeline",{img_url:"https://res.wx.qq.com/t/fed_upload/009bdba1-2dff-4ca4-bb1d-61e2e9ef2763/logo.jpg",img_width:"108",img_height:"108",link:location.href,desc:"https://weixin.qq.com/",title:document.title},function(e){})})})},reportCube:function(e){setTimeout(function(){(new Image).src="https://support.weixin.qq.com/cgi-bin/mmsupportmeshnodelogicsvr-bin/cube?biz=3512&label=portal.main&moduleName=mmportal&action="+e},500)}}},64:function(e,t){},66:function(e,t,a){var n=a(42);n.reportIDKey(6),n.reportCube("load_faq_detail")},93:function(e,t,a){e.exports=a.p+"/static/img/2Qqopzc.jpg"}});