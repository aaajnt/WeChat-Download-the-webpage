!function(e){function t(o){if(n[o])return n[o].exports;var a=n[o]={exports:{},id:o,loaded:!1};return e[o].call(a.exports,a,a.exports,t),a.loaded=!0,a.exports}var n={};return t.m=e,t.c=n,t.p="//res.wx.qq.com/t/wx_fed/base/weixin_portal/res",t(0)}({0:function(e,t,n){e.exports=n(31)+n(33);
},22:function(e,t){},29:function(e,t){},31:function(e,t){},33:function(e,t){!function(){function e(e){var t=RegExp("[?&]"+e+"=([^&]*)").exec(window.location.search);return t&&decodeURIComponent(t[1].replace(/\+/g," "))}function t(e){var t=document.getElementById(e+"_src")?document.getElementById(e+"_src").getAttribute("href"):void 0,n=document.getElementById(e+"_dist");t?n.setAttribute("href",t+"&head=true"):n.style.display="none"}function n(){var n=document.getElementById("lang_dist"),o=document.getElementById("lang_src");if(o&&n){t("zh_CN"),t("zh_HK"),t("zh_TW"),t("en_US");var a=e("lang")||"zh_CN";document.getElementById(a+"_dist").className+=" current",n.style.display="flex"}}function o(){function e(e){c=e;for(var t=document.getElementsByClassName("catalog-link"),n=0;n<t.length;n++)t[n].className=t[n].className.replace(/\bcurrent\b/g,"");t[e].className.indexOf("current")===-1&&(t[e].className+=" current"),s.style.top=t[e].offsetTop+"px"}var t=document.getElementById("js_content");if(t){var n=t.getElementsByTagName("h2"),o=t.getBoundingClientRect();if(!n.length)return;var a=document.createElement("div"),i=document.createElement("div");i.style="max-width: "+(o.left-96)+"px";var s=document.createElement("div");s.className="catalog-index",a.appendChild(i),i.className="catalog",a.className="catalog-wrp";for(var r=!1,p=null,c=0,l=0;l<n.length;l++){var g=n[l],d=document.createElement("div");d.className="catalog-item";var h=document.createElement("a");h.className="catalog-link",h.setAttribute("data-index",l),0===l&&(h.className+=" current"),h.innerText=g.innerText,h.href="#"+g.id;window.location.hash=="#"+g.id;d.appendChild(h),i.appendChild(d),h.addEventListener("click",function(){r=!0,null!==p&&clearTimeout(p),p=setTimeout(function(){r=!1,p=null},1500),e(this.getAttribute("data-index"))})}document.addEventListener("scroll",function(t){if(!r){for(var o={val:100,index:null},a=0;a<n.length;a++){var i=n[a],s=i.getBoundingClientRect();Math.abs(s.top)<o.val&&(o.val=s.top,o.index=a)}null!==o.index&&o.index!==c&&e(o.index)}}),i.appendChild(s),t.appendChild(a)}}var a=window.navigator.userAgent.toLowerCase().indexOf("wechatuuto")!==-1;a||o(),n(),setTimeout(function(){var e=document.querySelector(".iframe");e&&(e.className+=" show")},200);var i=navigator.userAgent.indexOf("compatible")>-1&&userAgent.indexOf("MSIE")>-1;if(i){var s=document.getElementById("upgrade_notice");s&&(s.style.display="block")}var r=e("text_adjust");r&&(document.body.style="-webkit-text-size-adjust:"+r+"%;")}()},36:function(e,t,n){e.exports=n.p+"/static/img/tZ8BFCS.jpg"}});