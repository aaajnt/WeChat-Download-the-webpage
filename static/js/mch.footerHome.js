 $namespace("MCH.footer");
 MCH.footer = {
 };

 MCH.footer.init = function() {
     footerThat = this;
     footerThat.bind();
     footerThat.changeVerify(); 
 };

  MCH.footer.bind = function() {
    footerThat.bindChangeCheckimg();
 }

 MCH.footer.handleOrigin = function() {
    var curOrigin = window.location.hostname === 'pay.wechatpay.cn' ? 'https://captcha.wechatpay.cn' : 'https://ssl.captcha.qq.com';
    return curOrigin || '';
 }

 MCH.footer.changeVerify = function() {
    var getOrigin = MCH.footer.handleOrigin();
     if ($(".img-verify").size() > 0) {
         $(".img-verify").attr("src", getOrigin+"/getimage?aid=755049101&rd=" + Math.random());
     }
 };

  MCH.footer.bindChangeCheckimg = function() {
     $(".change-verify").on('click', function() {
         footerThat.changeVerify();
     });
 };

  MCH.footer.init();