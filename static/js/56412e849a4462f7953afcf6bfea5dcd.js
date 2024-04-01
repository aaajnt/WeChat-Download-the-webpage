(function(global){
    if(global.__WPAV2){
        return;
    }

   
    var flag1 = 21848,
        flag2 = 1,
        flag3 = 1,
        flag_loaded = 28,
        reportCgi = 'http://report.huatuo.qq.com/report.cgi';

    if (location.protocol.indexOf('https') !== -1) {
        reportCgi = 'https://report.huatuo.qq.com/report.cgi';
    }

    var platform = 'pc',
        ua = navigator.userAgent;

    if (/(?:iphone|ipad|ipod)/i.test(ua)) {
        platform = 'ios';
    } else if(/android/i.test(ua)) {
        platform = 'android';
    }

    var 
        env = global.__WPAENV || 'production', 
        version = '4.1.0',  
  
        protocol = 'https:',
        hostMap = {
            development: 'dev',
            test: 'oa'
        },

      

        staticBase = global.__WPASTATICBASE,

        host = protocol + '//' + (hostMap[env] || '') + 'wp.qiye.qq.com',
        base = global.__WPABASE || host,

        apiBase = global.__WPABAPIASE || host + '/api',
        stack = [],
        apiStack = [],
        tmpEventBucket = {},
        charset = 'utf-8'; 

    if (!staticBase) {
        if (env === 'development') {
            staticBase = 'https://dev.gtimg.com';
            staticBase += '/qidian/src/wpav2/dist/' + version;
        } else if (env === 'test') {
            staticBase = 'https://oa.gtimg.com';
            staticBase += '/qidian/src/wpav2/dist/' + version;
        } else {
            staticBase = 'https://bqq.gtimg.com';
            staticBase += '/qidian/src/wpav2/dist/' + version;
        }

    }
    

    var doc = document,
        head = doc.head || doc.getElementsByTagName("head")[0] || doc.documentElement,
        baseElement = head.getElementsByTagName("base")[0],
        currentlyAddingScript;

    function fetch(uri) {
        var node = doc.createElement("script"),
            sTime;

        node.charset = charset;
        node.async = true;
        node.src = uri;
        node.id = 'LBFnode';

        currentlyAddingScript = node;

        node.onload = node.onreadystatechange = function() {
            if(!this.readyState || this.readyState=='loaded' || this.readyState=='complete') {
                var eTime = +new Date(),
                    timeCost = eTime - sTime;
            }
        };

        sTime = +new Date();
        baseElement ?
            head.insertBefore(node, baseElement) :
            head.appendChild(node);

        currentlyAddingScript = null;
    }

    function getScriptPosition() {
        var scripts = document.getElementsByTagName('script');
        return scripts.length > 0 ? scripts[scripts.length - 1] : null;
    }


    var exports = global.__WPAV2 = {
        version: version,

        base: base,

        staticBase: staticBase,

        apiBase: apiBase,

        env: env,

        protocol: protocol,

        create: function(data){
            data.scriptPosition = getScriptPosition();
            stack.push(data);
        },

        on: function(type, cb){
            tmpEventBucket[type] ?
                tmpEventBucket[type].push(cb) :
                tmpEventBucket[type] = [cb];
        },

        api: function(){
            apiStack.push(arguments);
        },

        ready: function(onReady){
            exports.on('load', onReady);
        },

        getScriptPosition: getScriptPosition,

        _stack: stack,

        _apiStack: apiStack,

        _evtBkt: tmpEventBucket
    };

    fetch(staticBase + '/pk1.js');
})(this);
// 2024-04-01 21:05:26
__WPAV2.create({"name":"侧边挂件客服","cate":"7","qrCodeImg":"//p.qpic.cn/qidian_pic/0/202210097e666c72ca1dc0cff88ddf0d61cb7937/0","roleIM":{"forid":"4446","data":"154","isOpenCompanyWords":"0","msgDisplayed":"0","value":"5","name":"","isDisabled":"0","navRouter":{"defaultNav":"219"},"subNav":{"receptionSwitch":"1","uin":"3423","id":"3423","isDisabled":"0","name":"售前接待组","data":"3423","value":"1"},"robotNav":"","type":7,"uin":"0","isKfuin":"0","isPub":""},"setIp":"9.139.187.66","id":"4283","theme":1,"url":"https://wpa1.qq.com/N7lAyIo7?_type=wpa\u0026qidian=true","key":"56412e849a4462f7953afcf6bfea5dcd","imUrl":"https://wpa1.qq.com/RD1OO82p?_type=wpa\u0026qidian=true","deployList":[{"deployTypeId":"1","deployRemarks":"侧边挂件客服","deployWebsite":"https://mmredpacketcoverlogicsvrsz-996.test.fed.weixin.woa.com/","id":"43"}],"FCustom":{"isLBS":0,"domId":"qidian-kf","open":"1","source":0,"isCustomEntry":0,"isAppUin":0,"customType":"1","customImg":{"zoom":"0","url":"","h":{"px":"0","type":"3"},"v":{"type":"3","px":"0"},"width":"0","height":"0"},"isSsc":0,"msgDisplayed":{"isDisplayed":0,"categoryId":"297562090103701504"}},"type":"15","custom":{"open":"1","customImg":{"h":{"type":"3","px":"0"},"v":{"type":"3","px":"0"},"width":"0","height":"0","zoom":"0","url":""},"source":"0","isCustomEntry":"0","msgDisplayed":{"isDisplayed":"0","categoryId":"297562090103701504"},"isAppUin":"0","customType":"1","domId":"qidian-kf","isLBS":"0","isSsc":"0"},"download":"https://admin.qidian.qq.com/mp/mediaPage/downloadQrcode3?url=http%3A%2F%2Fp.qpic.cn%2Fqidian_pic%2F0%2F202210097e666c72ca1dc0cff88ddf0d61cb7937%2F0","setCacheTime":1666617054,"fkfuin":"2885708391","qrcode":"//p.qpic.cn/qidian_pic/0/202210097e666c72ca1dc0cff88ddf0d61cb7937/0","createTime":"1665382993","updateTime":"1665382993","fkfext":"2885708391"})