// if(window.location.protocol == 'https:')
// {
// 	document.write('<script src="https://tam.cdn-go.cn/aegis-sdk/latest/aegis.min.js?max_age=3600"></script>');
// }
// else
// {
// 	document.write('<script src="//pingjs.qq.com/tcss.ping.js" type="text/javascript" ></script>');
// }
// document.write('<script src="https://tam.cdn-go.cn/aegis-sdk/latest/aegis.min.js?max_age=3600"></script>');
var loadScript = function (url, callback) {
	var script,
	  head = document.head || document.getElementsByTagName('head')[0] || document.documentElement;
	script = document.createElement('script');
	script.async = 'async';
	script.src = url;
	script.onload = script.onreadystatechange = function (_, isAbort) {
	  if (isAbort || !script.readyState || /loaded|complete/.test(script.readyState)) {
		script.onload = script.onreadystatechange = null;
		if (head && script.parentNode) {
		  head.removeChild(script);
		}
		script = undefined;
		if (!isAbort) {
		  callback && callback();
		}
	  }
	};
	head.insertBefore(script, head.firstChild);
  };
  try{
	loadScript('https://tam.cdn-go.cn/aegis-sdk/latest/aegis.min.js?max_age=3600', reportpgv);
  }catch(e){}
  function reportpgv() {
    try {
      	// 如果使用 cdn 的话，Aegis 会自动绑定在 window 对象上
		const aegis = new Aegis({
		id: 'laiMdjvXldzOezrypb', // 项目上报id
		reportApiSpeed: true, // 接口测速
		reportAssetSpeed: true, // 静态资源测速
		// hostUrl: 'https://rumt-zh.com', // 上报域名，中国大陆 rumt-zh.com
		spa: true, // spa 页面需要开启，页面切换的时候上报pv
		});
    } catch (e) {
      window.console && console.debug && console.debug(e);
    }
  }
