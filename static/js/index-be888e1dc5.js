function p(){import("data:text/javascript,")}(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))d(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&d(r)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function d(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();function u(){const{userAgent:n}=window.navigator,{platform:i}=window.navigator;return!/Win64|WOW64|x64/.test(n)&&(i.startsWith("Win")||i==="Win32")}const f=u();f&&(document.getElementById("newVersion").style.display="none",document.getElementById("oldVersion").style.display="");function g(n){const i=location.search.match(new RegExp(`[\\?\\&]${n}=([^\\&]+)`,"i"));return i===null||i.length<=1?"":i[1]}const m={en:"WeChat for Windows",en_US:"WeChat for Windows",zh_CN:"微信 Windows 版",zh_TW:"WeChat for Windows",zh_HK:"WeChat for Windows"},h={en:" ",en_US:" ",zh_CN:" ",zh_TW:" ",zh_HK:" "};let o=g("lang");o||(o="zh_CN");const s=m[o],c=h[o];function l(){WeixinJSBridge.call("hideToolbar"),WeixinJSBridge.on("menu:share:appmessage",()=>{WeixinJSBridge.invoke("sendAppMessage",{img_url:"https://res.wx.qq.com/a/fed_upload/c5a1f7e1-f854-4459-914e-58c997af6cb5/icon.jpg",img_width:"100",img_height:"100",link:location.href,desc:c,title:s},()=>{})}),WeixinJSBridge.on("menu:share:timeline",()=>{WeixinJSBridge.invoke("shareTimeline",{img_url:"https://res.wx.qq.com/a/fed_upload/c5a1f7e1-f854-4459-914e-58c997af6cb5/icon.jpg",img_width:"100",img_height:"100",link:location.href,desc:c,title:s},()=>{})}),WeixinJSBridge.on("menu:share:weibo",()=>{WeixinJSBridge.invoke("shareWeibo",{img_url:"https://res.wx.qq.com/a/fed_upload/c5a1f7e1-f854-4459-914e-58c997af6cb5/icon.jpg",img_width:"100",img_height:"100",link:location.href,desc:c,title:s},()=>{})})}document.addEventListener?document.addEventListener("WeixinJSBridgeReady",l,!1):document.attachEvent&&document.attachEvent("onWeixinJSBridgeReady",l);setTimeout(()=>{new Image().src=`https://support.weixin.qq.com/cgi-bin/mmsupportmeshnodelogicsvr-bin/cube?biz=3512&moduleName=mmwxmainpagemeshnode&label=portal.windows&_t=${new Date().getTime()}`},500);export{p as __vite_legacy_guard};
