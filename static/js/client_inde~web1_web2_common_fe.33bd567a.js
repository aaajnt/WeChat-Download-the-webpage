(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["web1_web2_common~accusation/accuse_info~ad_system/client~ad_system/client_bill~ad_system/client_inde~web1_web2_common"],{"../../packages/mmbizweb-web2-common/biz_common/jquery.ui/jquery.ui.draggable.js":function(b,x,T){var w;!(w=function(){/*! jQuery UI - v1.10.3 - 2013-08-08
* http://jqueryui.com
* Includes: jquery.ui.core.js, jquery.ui.widget.js, jquery.ui.mouse.js, jquery.ui.draggable.js
* Copyright 2013 jQuery Foundation and other contributors Licensed MIT */(function(t,m){var h=0,n=/^ui-id-\d+$/;t.ui=t.ui||{};t.extend(t.ui,{version:"1.10.3"});t.fn.extend({focus:function(e){return function(s,r){return typeof s==="number"?this.each(function(){var l=this;setTimeout(function(){t(l).focus();if(r){r.call(l)}},s)}):e.apply(this,arguments)}}(t.fn.focus),scrollParent:function e(){var s;if(t.ui.ie&&/(static|relative)/.test(this.css("position"))||/absolute/.test(this.css("position"))){s=this.parents().filter(function(){return/(relative|absolute|fixed)/.test(t.css(this,"position"))&&/(auto|scroll)/.test(t.css(this,"overflow")+t.css(this,"overflow-y")+t.css(this,"overflow-x"))}).eq(0)}else{s=this.parents().filter(function(){return/(auto|scroll)/.test(t.css(this,"overflow")+t.css(this,"overflow-y")+t.css(this,"overflow-x"))}).eq(0)}return/fixed/.test(this.css("position"))||!s.length?t(document):s},zIndex:function e(s){if(s!==m){return this.css("zIndex",s)}if(this.length){var r=t(this[0]),l,a;while(r.length&&r[0]!==document){l=r.css("position");if(l==="absolute"||l==="relative"||l==="fixed"){a=parseInt(r.css("zIndex"),10);if(!isNaN(a)&&a!==0){return a}}r=r.parent()}}return 0},uniqueId:function e(){return this.each(function(){if(!this.id){this.id="ui-id-"+ ++h}})},removeUniqueId:function e(){return this.each(function(){if(n.test(this.id)){t(this).removeAttr("id")}})}});function o(e,s){var r,l,a,f=e.nodeName.toLowerCase();if("area"===f){r=e.parentNode;l=r.name;if(!e.href||!l||r.nodeName.toLowerCase()!=="map"){return false}a=t("img[usemap=#"+l+"]")[0];return!!a&&i(a)}return(/input|select|textarea|button|object/.test(f)?!e.disabled:"a"===f?e.href||s:s)&&i(e)}function i(e){return t.expr.filters.visible(e)&&!t(e).parents().addBack().filter(function(){return t.css(this,"visibility")==="hidden"}).length}t.extend(t.expr[":"],{data:t.expr.createPseudo?t.expr.createPseudo(function(e){return function(s){return!!t.data(s,e)}}):function(e,s,r){return!!t.data(e,r[3])},focusable:function e(s){return o(s,!isNaN(t.attr(s,"tabindex")))},tabbable:function e(s){var r=t.attr(s,"tabindex"),l=isNaN(r);return(l||r>=0)&&o(s,!l)}});t.extend(t.ui,{plugin:{add:function e(s,r,l){var a,f=t.ui[s].prototype;for(a in l){f.plugins[a]=f.plugins[a]||[];f.plugins[a].push([r,l[a]])}},call:function e(s,r,l){var a,f=s.plugins[r];if(!f||!s.element[0].parentNode||s.element[0].parentNode.nodeType===11){return}for(a=0;a<f.length;a++){if(s.options[f[a][0]]){f[a][1].apply(s.element,l)}}}},hasScroll:function e(s,r){if(t(s).css("overflow")==="hidden"){return false}var l=r&&r==="left"?"scrollLeft":"scrollTop",a=false;if(s[l]>0){return true}s[l]=1;a=s[l]>0;s[l]=0;return a}})})(jQuery);(function(t,m){var h=0,n=Array.prototype.slice,o=t.cleanData;t.cleanData=function(i){for(var e=0,s;(s=i[e])!=null;e++){try{t(s).triggerHandler("remove")}catch(r){}}o(i)};t.widget=function(i,e,s){var r,l,a,f,p={},u=i.split(".")[0];i=i.split(".")[1];r=u+"-"+i;if(!s){s=e;e=t.Widget}t.expr[":"][r.toLowerCase()]=function(d){return!!t.data(d,r)};t[u]=t[u]||{};l=t[u][i];a=t[u][i]=function(d,c){if(!this._createWidget){return new a(d,c)}if(arguments.length){this._createWidget(d,c)}};t.extend(a,l,{version:s.version,_proto:t.extend({},s),_childConstructors:[]});f=new e;f.options=t.widget.extend({},f.options);t.each(s,function(d,c){if(!t.isFunction(c)){p[d]=c;return}p[d]=function(){var _=function v(){return e.prototype[d].apply(this,arguments)},g=function v(P){return e.prototype[d].apply(this,P)};return function(){var v=this._super,P=this._superApply,y;this._super=_;this._superApply=g;y=c.apply(this,arguments);this._super=v;this._superApply=P;return y}}()});a.prototype=t.widget.extend(f,{widgetEventPrefix:l?f.widgetEventPrefix:i},p,{constructor:a,namespace:u,widgetName:i,widgetFullName:r});if(l){t.each(l._childConstructors,function(d,c){var _=c.prototype;t.widget(_.namespace+"."+_.widgetName,a,c._proto)});delete l._childConstructors}else{e._childConstructors.push(a)}t.widget.bridge(i,a)};t.widget.extend=function(i){var e=n.call(arguments,1),s=0,r=e.length,l,a;for(;s<r;s++){for(l in e[s]){a=e[s][l];if(e[s].hasOwnProperty(l)&&a!==m){if(t.isPlainObject(a)){i[l]=t.isPlainObject(i[l])?t.widget.extend({},i[l],a):t.widget.extend({},a)}else{i[l]=a}}}}return i};t.widget.bridge=function(i,e){var s=e.prototype.widgetFullName||i;t.fn[i]=function(r){var l=typeof r==="string",a=n.call(arguments,1),f=this;r=!l&&a.length?t.widget.extend.apply(null,[r].concat(a)):r;if(l){this.each(function(){var p,u=t.data(this,s);if(!u){return t.error("cannot call methods on "+i+" prior to initialization; attempted to call method '"+r+"'")}if(!t.isFunction(u[r])||r.charAt(0)==="_"){return t.error("no such method '"+r+"' for "+i+" widget instance")}p=u[r].apply(u,a);if(p!==u&&p!==m){f=p&&p.jquery?f.pushStack(p.get()):p;return false}})}else{this.each(function(){var p=t.data(this,s);if(p){p.option(r||{})._init()}else{t.data(this,s,new e(r,this))}})}return f}};t.Widget=function(){};t.Widget._childConstructors=[];t.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{disabled:false,create:null},_createWidget:function i(e,s){s=t(s||this.defaultElement||this)[0];this.element=t(s);this.uuid=h++;this.eventNamespace="."+this.widgetName+this.uuid;this.options=t.widget.extend({},this.options,this._getCreateOptions(),e);this.bindings=t();this.hoverable=t();this.focusable=t();if(s!==this){t.data(s,this.widgetFullName,this);this._on(true,this.element,{remove:function r(l){if(l.target===s){this.destroy()}}});this.document=t(s.style?s.ownerDocument:s.document||s);this.window=t(this.document[0].defaultView||this.document[0].parentWindow)}this._create();this._trigger("create",null,this._getCreateEventData());this._init()},_getCreateOptions:t.noop,_getCreateEventData:t.noop,_create:t.noop,_init:t.noop,destroy:function i(){this._destroy();this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(t.camelCase(this.widgetFullName));this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName+"-disabled ui-state-disabled");this.bindings.unbind(this.eventNamespace);this.hoverable.removeClass("ui-state-hover");this.focusable.removeClass("ui-state-focus")},_destroy:t.noop,widget:function i(){return this.element},option:function i(e,s){var r=e,l,a,f;if(arguments.length===0){return t.widget.extend({},this.options)}if(typeof e==="string"){r={};l=e.split(".");e=l.shift();if(l.length){a=r[e]=t.widget.extend({},this.options[e]);for(f=0;f<l.length-1;f++){a[l[f]]=a[l[f]]||{};a=a[l[f]]}e=l.pop();if(s===m){return a[e]===m?null:a[e]}a[e]=s}else{if(s===m){return this.options[e]===m?null:this.options[e]}r[e]=s}}this._setOptions(r);return this},_setOptions:function i(e){var s;for(s in e){this._setOption(s,e[s])}return this},_setOption:function i(e,s){this.options[e]=s;if(e==="disabled"){this.widget().toggleClass(this.widgetFullName+"-disabled ui-state-disabled",!!s).attr("aria-disabled",s);this.hoverable.removeClass("ui-state-hover");this.focusable.removeClass("ui-state-focus")}return this},enable:function i(){return this._setOption("disabled",false)},disable:function i(){return this._setOption("disabled",true)},_on:function i(e,s,r){var l,a=this;if(typeof e!=="boolean"){r=s;s=e;e=false}if(!r){r=s;s=this.element;l=this.widget()}else{s=l=t(s);this.bindings=this.bindings.add(s)}t.each(r,function(f,p){function u(){if(!e&&(a.options.disabled===true||t(this).hasClass("ui-state-disabled"))){return}return(typeof p==="string"?a[p]:p).apply(a,arguments)}if(typeof p!=="string"){u.guid=p.guid=p.guid||u.guid||t.guid++}var d=f.match(/^(\w+)\s*(.*)$/),c=d[1]+a.eventNamespace,_=d[2];if(_){l.delegate(_,c,u)}else{s.bind(c,u)}})},_off:function i(e,s){s=(s||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace;e.unbind(s).undelegate(s)},_delay:function i(e,s){function r(){return(typeof e==="string"?l[e]:e).apply(l,arguments)}var l=this;return setTimeout(r,s||0)},_hoverable:function i(e){this.hoverable=this.hoverable.add(e);this._on(e,{mouseenter:function s(r){t(r.currentTarget).addClass("ui-state-hover")},mouseleave:function s(r){t(r.currentTarget).removeClass("ui-state-hover")}})},_focusable:function i(e){this.focusable=this.focusable.add(e);this._on(e,{focusin:function s(r){t(r.currentTarget).addClass("ui-state-focus")},focusout:function s(r){t(r.currentTarget).removeClass("ui-state-focus")}})},_trigger:function i(e,s,r){var l,a,f=this.options[e];r=r||{};s=t.Event(s);s.type=(e===this.widgetEventPrefix?e:this.widgetEventPrefix+e).toLowerCase();s.target=this.element[0];a=s.originalEvent;if(a){for(l in a){if(!(l in s)){s[l]=a[l]}}}this.element.trigger(s,r);return!(t.isFunction(f)&&f.apply(this.element[0],[s].concat(r))===false||s.isDefaultPrevented())}};t.each({show:"fadeIn",hide:"fadeOut"},function(i,e){t.Widget.prototype["_"+i]=function(s,r,l){if(typeof r==="string"){r={effect:r}}var a,f=!r?i:r===true||typeof r==="number"?e:r.effect||e;r=r||{};if(typeof r==="number"){r={duration:r}}a=!t.isEmptyObject(r);r.complete=l;if(r.delay){s.delay(r.delay)}if(a&&t.effects&&t.effects.effect[f]){s[i](r)}else if(f!==i&&s[f]){s[f](r.duration,r.easing,l)}else{s.queue(function(p){t(this)[i]();if(l){l.call(s[0])}p()})}}})})(jQuery);(function(t,m){var h=false;t(document).mouseup(function(){h=false});t.widget("ui.mouse",{version:"1.10.3",options:{cancel:"input,textarea,button,select,option",distance:1,delay:0},_mouseInit:function n(){var o=this;this.element.bind("mousedown."+this.widgetName,function(i){return o._mouseDown(i)}).bind("click."+this.widgetName,function(i){if(true===t.data(i.target,o.widgetName+".preventClickEvent")){t.removeData(i.target,o.widgetName+".preventClickEvent");i.stopImmediatePropagation();return false}});this.started=false},_mouseDestroy:function n(){this.element.unbind("."+this.widgetName);if(this._mouseMoveDelegate){t(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate)}},_mouseDown:function n(o){if(h){return}this._mouseStarted&&this._mouseUp(o);this._mouseDownEvent=o;var i=this,e=o.which===1,s=typeof this.options.cancel==="string"&&o.target.nodeName?t(o.target).closest(this.options.cancel).length:false;if(!e||s||!this._mouseCapture(o)){return true}this.mouseDelayMet=!this.options.delay;if(!this.mouseDelayMet){this._mouseDelayTimer=setTimeout(function(){i.mouseDelayMet=true},this.options.delay)}if(this._mouseDistanceMet(o)&&this._mouseDelayMet(o)){this._mouseStarted=this._mouseStart(o)!==false;if(!this._mouseStarted){o.preventDefault();return true}}if(true===t.data(o.target,this.widgetName+".preventClickEvent")){t.removeData(o.target,this.widgetName+".preventClickEvent")}this._mouseMoveDelegate=function(r){return i._mouseMove(r)};this._mouseUpDelegate=function(r){return i._mouseUp(r)};t(document).bind("mousemove."+this.widgetName,this._mouseMoveDelegate).bind("mouseup."+this.widgetName,this._mouseUpDelegate);o.preventDefault();h=true;return true},_mouseMove:function n(o){if(t.ui.ie&&(!document.documentMode||document.documentMode<9)&&!o.button){return this._mouseUp(o)}if(this._mouseStarted){this._mouseDrag(o);return o.preventDefault()}if(this._mouseDistanceMet(o)&&this._mouseDelayMet(o)){this._mouseStarted=this._mouseStart(this._mouseDownEvent,o)!==false;this._mouseStarted?this._mouseDrag(o):this._mouseUp(o)}return!this._mouseStarted},_mouseUp:function n(o){t(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate);if(this._mouseStarted){this._mouseStarted=false;if(o.target===this._mouseDownEvent.target){t.data(o.target,this.widgetName+".preventClickEvent",true)}this._mouseStop(o)}return false},_mouseDistanceMet:function n(o){return Math.max(Math.abs(this._mouseDownEvent.pageX-o.pageX),Math.abs(this._mouseDownEvent.pageY-o.pageY))>=this.options.distance},_mouseDelayMet:function n(){return this.mouseDelayMet},_mouseStart:function n(){},_mouseDrag:function n(){},_mouseStop:function n(){},_mouseCapture:function n(){return true}})})(jQuery);(function(t,m){t.widget("ui.draggable",t.ui.mouse,{version:"1.10.3",widgetEventPrefix:"drag",options:{addClasses:true,appendTo:"parent",axis:false,connectToSortable:false,containment:false,cursor:"auto",cursorAt:false,grid:false,handle:false,helper:"original",iframeFix:false,opacity:false,refreshPositions:false,revert:false,revertDuration:500,scope:"default",scroll:true,scrollSensitivity:20,scrollSpeed:20,snap:false,snapMode:"both",snapTolerance:20,stack:false,zIndex:false,drag:null,start:null,stop:null},_create:function h(){if(this.options.helper==="original"&&!/^(?:r|a|f)/.test(this.element.css("position"))){this.element[0].style.position="relative"}if(this.options.addClasses){this.element.addClass("ui-draggable")}if(this.options.disabled){this.element.addClass("ui-draggable-disabled")}this._mouseInit()},_destroy:function h(){this.element.removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled");this._mouseDestroy()},_mouseCapture:function h(n){var o=this.options;if(this.helper||o.disabled||t(n.target).closest(".ui-resizable-handle").length>0){return false}this.handle=this._getHandle(n);if(!this.handle){return false}t(o.iframeFix===true?"iframe":o.iframeFix).each(function(){t("<div class='ui-draggable-iframeFix' style='background: #fff;'></div>").css({width:this.offsetWidth+"px",height:this.offsetHeight+"px",position:"absolute",opacity:"0.001",zIndex:1e3}).css(t(this).offset()).appendTo("body")});return true},_mouseStart:function h(n){var o=this.options;this.helper=this._createHelper(n);this.helper.addClass("ui-draggable-dragging");this._cacheHelperProportions();if(t.ui.ddmanager){t.ui.ddmanager.current=this}this._cacheMargins();this.cssPosition=this.helper.css("position");this.scrollParent=this.helper.scrollParent();this.offsetParent=this.helper.offsetParent();this.offsetParentCssPosition=this.offsetParent.css("position");this.offset=this.positionAbs=this.element.offset();this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left};this.offset.scroll=false;t.extend(this.offset,{click:{left:n.pageX-this.offset.left,top:n.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()});this.originalPosition=this.position=this._generatePosition(n);this.originalPageX=n.pageX;this.originalPageY=n.pageY;o.cursorAt&&this._adjustOffsetFromHelper(o.cursorAt);this._setContainment();if(this._trigger("start",n)===false){this._clear();return false}this._cacheHelperProportions();if(t.ui.ddmanager&&!o.dropBehaviour){t.ui.ddmanager.prepareOffsets(this,n)}this._mouseDrag(n,true);if(t.ui.ddmanager){t.ui.ddmanager.dragStart(this,n)}return true},_mouseDrag:function h(n,o){if(this.offsetParentCssPosition==="fixed"){this.offset.parent=this._getParentOffset()}this.position=this._generatePosition(n);this.positionAbs=this._convertPositionTo("absolute");if(!o){var i=this._uiHash();if(this._trigger("drag",n,i)===false){this._mouseUp({});return false}this.position=i.position}if(!this.options.axis||this.options.axis!=="y"){this.helper[0].style.left=this.position.left+"px"}if(!this.options.axis||this.options.axis!=="x"){this.helper[0].style.top=this.position.top+"px"}if(t.ui.ddmanager){t.ui.ddmanager.drag(this,n)}return false},_mouseStop:function h(n){var o=this,i=false;if(t.ui.ddmanager&&!this.options.dropBehaviour){i=t.ui.ddmanager.drop(this,n)}if(this.dropped){i=this.dropped;this.dropped=false}if(this.options.helper==="original"&&!t.contains(this.element[0].ownerDocument,this.element[0])){return false}if(this.options.revert==="invalid"&&!i||this.options.revert==="valid"&&i||this.options.revert===true||t.isFunction(this.options.revert)&&this.options.revert.call(this.element,i)){t(this.helper).animate(this.originalPosition,parseInt(this.options.revertDuration,10),function(){if(o._trigger("stop",n)!==false){o._clear()}})}else{if(this._trigger("stop",n)!==false){this._clear()}}return false},_mouseUp:function h(n){t("div.ui-draggable-iframeFix").each(function(){this.parentNode.removeChild(this)});if(t.ui.ddmanager){t.ui.ddmanager.dragStop(this,n)}return t.ui.mouse.prototype._mouseUp.call(this,n)},cancel:function h(){if(this.helper.is(".ui-draggable-dragging")){this._mouseUp({})}else{this._clear()}return this},_getHandle:function h(n){return this.options.handle?!!t(n.target).closest(this.element.find(this.options.handle)).length:true},_createHelper:function h(n){var o=this.options,i=t.isFunction(o.helper)?t(o.helper.apply(this.element[0],[n])):o.helper==="clone"?this.element.clone().removeAttr("id"):this.element;if(!i.parents("body").length){i.appendTo(o.appendTo==="parent"?this.element[0].parentNode:o.appendTo)}if(i[0]!==this.element[0]&&!/(fixed|absolute)/.test(i.css("position"))){i.css("position","absolute")}return i},_adjustOffsetFromHelper:function h(n){if(typeof n==="string"){n=n.split(" ")}if(t.isArray(n)){n={left:+n[0],top:+n[1]||0}}if("left"in n){this.offset.click.left=n.left+this.margins.left}if("right"in n){this.offset.click.left=this.helperProportions.width-n.right+this.margins.left}if("top"in n){this.offset.click.top=n.top+this.margins.top}if("bottom"in n){this.offset.click.top=this.helperProportions.height-n.bottom+this.margins.top}},_getParentOffset:function h(){var n=this.offsetParent.offset();if(this.cssPosition==="absolute"&&this.scrollParent[0]!==document&&t.contains(this.scrollParent[0],this.offsetParent[0])){n.left+=this.scrollParent.scrollLeft();n.top+=this.scrollParent.scrollTop()}if(this.offsetParent[0]===document.body||this.offsetParent[0].tagName&&this.offsetParent[0].tagName.toLowerCase()==="html"&&t.ui.ie){n={top:0,left:0}}return{top:n.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:n.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function h(){if(this.cssPosition==="relative"){var n=this.element.position();return{top:n.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:n.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}}else{return{top:0,left:0}}},_cacheMargins:function h(){this.margins={left:parseInt(this.element.css("marginLeft"),10)||0,top:parseInt(this.element.css("marginTop"),10)||0,right:parseInt(this.element.css("marginRight"),10)||0,bottom:parseInt(this.element.css("marginBottom"),10)||0}},_cacheHelperProportions:function h(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function h(){var n,o,i,e=this.options;if(!e.containment){this.containment=null;return}if(e.containment==="window"){this.containment=[t(window).scrollLeft()-this.offset.relative.left-this.offset.parent.left,t(window).scrollTop()-this.offset.relative.top-this.offset.parent.top,t(window).scrollLeft()+t(window).width()-this.helperProportions.width-this.margins.left,t(window).scrollTop()+(t(window).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top];return}if(e.containment==="document"){this.containment=[0,0,t(document).width()-this.helperProportions.width-this.margins.left,(t(document).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top];return}if(e.containment.constructor===Array){this.containment=e.containment;return}if(e.containment==="parent"){e.containment=this.helper[0].parentNode}o=t(e.containment);i=o[0];if(!i){return}n=o.css("overflow")!=="hidden";this.containment=[(parseInt(o.css("borderLeftWidth"),10)||0)+(parseInt(o.css("paddingLeft"),10)||0),(parseInt(o.css("borderTopWidth"),10)||0)+(parseInt(o.css("paddingTop"),10)||0),(n?Math.max(i.scrollWidth,i.offsetWidth):i.offsetWidth)-(parseInt(o.css("borderRightWidth"),10)||0)-(parseInt(o.css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left-this.margins.right,(n?Math.max(i.scrollHeight,i.offsetHeight):i.offsetHeight)-(parseInt(o.css("borderBottomWidth"),10)||0)-(parseInt(o.css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top-this.margins.bottom];this.relative_container=o},_convertPositionTo:function h(n,o){if(!o){o=this.position}var i=n==="absolute"?1:-1,e=this.cssPosition==="absolute"&&!(this.scrollParent[0]!==document&&t.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent;if(!this.offset.scroll){this.offset.scroll={top:e.scrollTop(),left:e.scrollLeft()}}return{top:o.top+this.offset.relative.top*i+this.offset.parent.top*i-(this.cssPosition==="fixed"?-this.scrollParent.scrollTop():this.offset.scroll.top)*i,left:o.left+this.offset.relative.left*i+this.offset.parent.left*i-(this.cssPosition==="fixed"?-this.scrollParent.scrollLeft():this.offset.scroll.left)*i}},_generatePosition:function h(n){var o,i,e,s,r=this.options,l=this.cssPosition==="absolute"&&!(this.scrollParent[0]!==document&&t.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,a=n.pageX,f=n.pageY;if(!this.offset.scroll){this.offset.scroll={top:l.scrollTop(),left:l.scrollLeft()}}if(this.originalPosition){if(this.containment){if(this.relative_container){i=this.relative_container.offset();o=[this.containment[0]+i.left,this.containment[1]+i.top,this.containment[2]+i.left,this.containment[3]+i.top]}else{o=this.containment}if(n.pageX-this.offset.click.left<o[0]){a=o[0]+this.offset.click.left}if(n.pageY-this.offset.click.top<o[1]){f=o[1]+this.offset.click.top}if(n.pageX-this.offset.click.left>o[2]){a=o[2]+this.offset.click.left}if(n.pageY-this.offset.click.top>o[3]){f=o[3]+this.offset.click.top}}if(r.grid){e=r.grid[1]?this.originalPageY+Math.round((f-this.originalPageY)/r.grid[1])*r.grid[1]:this.originalPageY;f=o?e-this.offset.click.top>=o[1]||e-this.offset.click.top>o[3]?e:e-this.offset.click.top>=o[1]?e-r.grid[1]:e+r.grid[1]:e;s=r.grid[0]?this.originalPageX+Math.round((a-this.originalPageX)/r.grid[0])*r.grid[0]:this.originalPageX;a=o?s-this.offset.click.left>=o[0]||s-this.offset.click.left>o[2]?s:s-this.offset.click.left>=o[0]?s-r.grid[0]:s+r.grid[0]:s}}return{top:f-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+(this.cssPosition==="fixed"?-this.scrollParent.scrollTop():this.offset.scroll.top),left:a-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+(this.cssPosition==="fixed"?-this.scrollParent.scrollLeft():this.offset.scroll.left)}},_clear:function h(){this.helper.removeClass("ui-draggable-dragging");if(this.helper[0]!==this.element[0]&&!this.cancelHelperRemoval){this.helper.remove()}this.helper=null;this.cancelHelperRemoval=false},_trigger:function h(n,o,i){i=i||this._uiHash();t.ui.plugin.call(this,n,[o,i]);if(n==="drag"){this.positionAbs=this._convertPositionTo("absolute")}return t.Widget.prototype._trigger.call(this,n,o,i)},plugins:{},_uiHash:function h(){return{helper:this.helper,position:this.position,originalPosition:this.originalPosition,offset:this.positionAbs}}});t.ui.plugin.add("draggable","connectToSortable",{start:function h(n,o){var i=t(this).data("ui-draggable"),e=i.options,s=t.extend({},o,{item:i.element});i.sortables=[];t(e.connectToSortable).each(function(){var r=t.data(this,"ui-sortable");if(r&&!r.options.disabled){i.sortables.push({instance:r,shouldRevert:r.options.revert});r.refreshPositions();r._trigger("activate",n,s)}})},stop:function h(n,o){var i=t(this).data("ui-draggable"),e=t.extend({},o,{item:i.element});t.each(i.sortables,function(){if(this.instance.isOver){this.instance.isOver=0;i.cancelHelperRemoval=true;this.instance.cancelHelperRemoval=false;if(this.shouldRevert){this.instance.options.revert=this.shouldRevert}this.instance._mouseStop(n);this.instance.options.helper=this.instance.options._helper;if(i.options.helper==="original"){this.instance.currentItem.css({top:"auto",left:"auto"})}}else{this.instance.cancelHelperRemoval=false;this.instance._trigger("deactivate",n,e)}})},drag:function h(n,o){var i=t(this).data("ui-draggable"),e=this;t.each(i.sortables,function(){var s=false,r=this;this.instance.positionAbs=i.positionAbs;this.instance.helperProportions=i.helperProportions;this.instance.offset.click=i.offset.click;if(this.instance._intersectsWith(this.instance.containerCache)){s=true;t.each(i.sortables,function(){this.instance.positionAbs=i.positionAbs;this.instance.helperProportions=i.helperProportions;this.instance.offset.click=i.offset.click;if(this!==r&&this.instance._intersectsWith(this.instance.containerCache)&&t.contains(r.instance.element[0],this.instance.element[0])){s=false}return s})}if(s){if(!this.instance.isOver){this.instance.isOver=1;this.instance.currentItem=t(e).clone().removeAttr("id").appendTo(this.instance.element).data("ui-sortable-item",true);this.instance.options._helper=this.instance.options.helper;this.instance.options.helper=function(){return o.helper[0]};n.target=this.instance.currentItem[0];this.instance._mouseCapture(n,true);this.instance._mouseStart(n,true,true);this.instance.offset.click.top=i.offset.click.top;this.instance.offset.click.left=i.offset.click.left;this.instance.offset.parent.left-=i.offset.parent.left-this.instance.offset.parent.left;this.instance.offset.parent.top-=i.offset.parent.top-this.instance.offset.parent.top;i._trigger("toSortable",n);i.dropped=this.instance.element;i.currentItem=i.element;this.instance.fromOutside=i}if(this.instance.currentItem){this.instance._mouseDrag(n)}}else{if(this.instance.isOver){this.instance.isOver=0;this.instance.cancelHelperRemoval=true;this.instance.options.revert=false;this.instance._trigger("out",n,this.instance._uiHash(this.instance));this.instance._mouseStop(n,true);this.instance.options.helper=this.instance.options._helper;this.instance.currentItem.remove();if(this.instance.placeholder){this.instance.placeholder.remove()}i._trigger("fromSortable",n);i.dropped=false}}})}});t.ui.plugin.add("draggable","cursor",{start:function h(){var n=t("body"),o=t(this).data("ui-draggable").options;if(n.css("cursor")){o._cursor=n.css("cursor")}n.css("cursor",o.cursor)},stop:function h(){var n=t(this).data("ui-draggable").options;if(n._cursor){t("body").css("cursor",n._cursor)}}});t.ui.plugin.add("draggable","opacity",{start:function h(n,o){var i=t(o.helper),e=t(this).data("ui-draggable").options;if(i.css("opacity")){e._opacity=i.css("opacity")}i.css("opacity",e.opacity)},stop:function h(n,o){var i=t(this).data("ui-draggable").options;if(i._opacity){t(o.helper).css("opacity",i._opacity)}}});t.ui.plugin.add("draggable","scroll",{start:function h(){var n=t(this).data("ui-draggable");if(n.scrollParent[0]!==document&&n.scrollParent[0].tagName!=="HTML"){n.overflowOffset=n.scrollParent.offset()}},drag:function h(n){var o=t(this).data("ui-draggable"),i=o.options,e=false;if(o.scrollParent[0]!==document&&o.scrollParent[0].tagName!=="HTML"){if(!i.axis||i.axis!=="x"){if(o.overflowOffset.top+o.scrollParent[0].offsetHeight-n.pageY<i.scrollSensitivity){o.scrollParent[0].scrollTop=e=o.scrollParent[0].scrollTop+i.scrollSpeed}else if(n.pageY-o.overflowOffset.top<i.scrollSensitivity){o.scrollParent[0].scrollTop=e=o.scrollParent[0].scrollTop-i.scrollSpeed}}if(!i.axis||i.axis!=="y"){if(o.overflowOffset.left+o.scrollParent[0].offsetWidth-n.pageX<i.scrollSensitivity){o.scrollParent[0].scrollLeft=e=o.scrollParent[0].scrollLeft+i.scrollSpeed}else if(n.pageX-o.overflowOffset.left<i.scrollSensitivity){o.scrollParent[0].scrollLeft=e=o.scrollParent[0].scrollLeft-i.scrollSpeed}}}else{if(!i.axis||i.axis!=="x"){if(n.pageY-t(document).scrollTop()<i.scrollSensitivity){e=t(document).scrollTop(t(document).scrollTop()-i.scrollSpeed)}else if(t(window).height()-(n.pageY-t(document).scrollTop())<i.scrollSensitivity){e=t(document).scrollTop(t(document).scrollTop()+i.scrollSpeed)}}if(!i.axis||i.axis!=="y"){if(n.pageX-t(document).scrollLeft()<i.scrollSensitivity){e=t(document).scrollLeft(t(document).scrollLeft()-i.scrollSpeed)}else if(t(window).width()-(n.pageX-t(document).scrollLeft())<i.scrollSensitivity){e=t(document).scrollLeft(t(document).scrollLeft()+i.scrollSpeed)}}}if(e!==false&&t.ui.ddmanager&&!i.dropBehaviour){t.ui.ddmanager.prepareOffsets(o,n)}}});t.ui.plugin.add("draggable","snap",{start:function h(){var n=t(this).data("ui-draggable"),o=n.options;n.snapElements=[];t(o.snap.constructor!==String?o.snap.items||":data(ui-draggable)":o.snap).each(function(){var i=t(this),e=i.offset();if(this!==n.element[0]){n.snapElements.push({item:this,width:i.outerWidth(),height:i.outerHeight(),top:e.top,left:e.left})}})},drag:function h(n,o){var i,e,s,r,l,a,f,p,u,d,c=t(this).data("ui-draggable"),_=c.options,g=_.snapTolerance,v=o.offset.left,P=v+c.helperProportions.width,y=o.offset.top,I=y+c.helperProportions.height;for(u=c.snapElements.length-1;u>=0;u--){l=c.snapElements[u].left;a=l+c.snapElements[u].width;f=c.snapElements[u].top;p=f+c.snapElements[u].height;if(P<l-g||v>a+g||I<f-g||y>p+g||!t.contains(c.snapElements[u].item.ownerDocument,c.snapElements[u].item)){if(c.snapElements[u].snapping){c.options.snap.release&&c.options.snap.release.call(c.element,n,t.extend(c._uiHash(),{snapItem:c.snapElements[u].item}))}c.snapElements[u].snapping=false;continue}if(_.snapMode!=="inner"){i=Math.abs(f-I)<=g;e=Math.abs(p-y)<=g;s=Math.abs(l-P)<=g;r=Math.abs(a-v)<=g;if(i){o.position.top=c._convertPositionTo("relative",{top:f-c.helperProportions.height,left:0}).top-c.margins.top}if(e){o.position.top=c._convertPositionTo("relative",{top:p,left:0}).top-c.margins.top}if(s){o.position.left=c._convertPositionTo("relative",{top:0,left:l-c.helperProportions.width}).left-c.margins.left}if(r){o.position.left=c._convertPositionTo("relative",{top:0,left:a}).left-c.margins.left}}d=i||e||s||r;if(_.snapMode!=="outer"){i=Math.abs(f-y)<=g;e=Math.abs(p-I)<=g;s=Math.abs(l-v)<=g;r=Math.abs(a-P)<=g;if(i){o.position.top=c._convertPositionTo("relative",{top:f,left:0}).top-c.margins.top}if(e){o.position.top=c._convertPositionTo("relative",{top:p-c.helperProportions.height,left:0}).top-c.margins.top}if(s){o.position.left=c._convertPositionTo("relative",{top:0,left:l}).left-c.margins.left}if(r){o.position.left=c._convertPositionTo("relative",{top:0,left:a-c.helperProportions.width}).left-c.margins.left}}if(!c.snapElements[u].snapping&&(i||e||s||r||d)){c.options.snap.snap&&c.options.snap.snap.call(c.element,n,t.extend(c._uiHash(),{snapItem:c.snapElements[u].item}))}c.snapElements[u].snapping=i||e||s||r||d}}});t.ui.plugin.add("draggable","stack",{start:function h(){var n,o=this.data("ui-draggable").options,i=t.makeArray(t(o.stack)).sort(function(e,s){return(parseInt(t(e).css("zIndex"),10)||0)-(parseInt(t(s).css("zIndex"),10)||0)});if(!i.length){return}n=parseInt(t(i[0]).css("zIndex"),10)||0;t(i).each(function(e){t(this).css("zIndex",n+e)});this.css("zIndex",n+i.length)}});t.ui.plugin.add("draggable","zIndex",{start:function h(n,o){var i=t(o.helper),e=t(this).data("ui-draggable").options;if(i.css("zIndex")){e._zIndex=i.css("zIndex")}i.css("zIndex",e.zIndex)},stop:function h(n,o){var i=t(this).data("ui-draggable").options;if(i._zIndex){t(o.helper).css("zIndex",i._zIndex)}}})})(jQuery)}.call(x,T,x,b),w!==void 0&&(b.exports=w))},"../../packages/mmbizweb-web2-common/common/wx/dialog.js":function(b,x,T){var w;!(w=function(t,m,h){T("../../packages/mmbizweb-web2-common/biz_common/jquery.ui/jquery.ui.draggable.js");var n={type:"warn",msg:"\u9519\u8BEF\u4FE1\u606F|\u5BF9\u4E0D\u8D77\uFF0C\u7CFB\u7EDF\u7E41\u5FD9\u8BF7\u7A0D\u540E\u5C1D\u8BD5\u3002",buttons:[{text:"\u786E\u5B9A",click:function e(s){this.remove(s)}}],draggable:true,mask:true,className:"",contentClassName:""};var o={uid:0,uiName:"wxDialog",iconClass:{succ:"success",err:"error",warn:"warn",info:"info",warn_primary:"warn_primary",waiting:"waiting"},btTypes:{primary:"btn_primary",normal:"btn_default",disabled:"btn_disabled"}};o.html=T("../../packages/mmbizweb-web2-common/tpl/dialog.html");function i(e){var s=this;if(typeof e=="string"){e={msg:e}};e=$.extend(true,{},n,e);if(e.title===void 0){e.title="\u6E29\u99A8\u63D0\u793A"}s.id=e.id=[o.uiName,"_",++o.uid].join("");e.icon=e.type?e.type:o.iconClass["warn"];var r=[];r=e.msg.split("|");e.width=e.width?e.width:720;e.height=e.height?e.height:0;if(r[0]){if(r[1]){e.msg={title:r[0],text:r[1],msgClass:"",extraTitle:e.extraTitle||""}}else{e.msg={title:e.msg,msgClass:"single_line",extraTitle:e.extraTitle||""}}}else{e.msg={text:r[1],msgClass:"single_line",extraTitle:e.extraTitle||""}}$.each(e.buttons,function(l,a){a.type=o.btTypes[a.type||"primary"]});s.opt=e;$(template.compile(o.html)(e)).appendTo("body");s.dom=$("#"+this.id).parent();s.dom.css("margin-left",-1*s.dom.outerWidth()/2).css("margin-top",-1*s.dom.outerHeight()/2);s.dom.fadeIn();e.draggable&&s.dom.draggable({handle:".dialog_hd"});(function l(){$.each($("#"+s.id+" .js_btn"),function(a,f){if(e.buttons[a].click){$(f).click(function(){e.buttons[a].click.apply(s);return false})}});$("#"+s.id+" .pop_closed").click(function(){if(e.close&&typeof e.close=="function"){e.close()&&s.remove();return}s.remove()})})()};i.prototype={hide:function e(){this.opt.mask&&this.dom.next().remove();this.dom.fadeOut()},remove:function e(){this.opt.mask&&this.dom.next().remove();this.dom.remove()},resetPos:function e(){var s=this;s.dom.css("margin-left",-1*s.dom.outerWidth()/2).css("margin-top",-1*s.dom.outerHeight()/2)}};m.show=function(e){return new i(e)}}.call(x,T,x,b),w!==void 0&&(b.exports=w))},"../../packages/mmbizweb-web2-common/tpl/dialog.html":function(b,x){b.exports='<div class="dialog_wrp {className}" style="{if width}width:{width}px;{/if}{if height}height:{height}px;{/if};display:none;">\n  <div class="dialog" id="{id}">\n    <div class="dialog_hd">\n      <h3>{title}</h3>\n      {if !hideClose}\n      <button onclick="return false;" class="weui-desktop-icon-btn weui-desktop-dialog__close-btn pop_closed">\n        <svg width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg"><title>Element / Icon - Close</title><path d="M10.01 8.996l7.922-7.922c.086-.086.085-.21.008-.289l-.73-.73c-.075-.074-.208-.075-.29.007L9 7.984 1.077.062C.995-.02.863-.019.788.055l-.73.73c-.078.078-.079.203.007.29l7.922 7.92-7.922 7.922c-.086.086-.085.212-.007.29l.73.73c.075.074.207.074.29-.008l7.92-7.921 7.922 7.921c.082.082.215.082.29.008l.73-.73c.077-.078.078-.204-.008-.29l-7.921-7.921z"/></svg>\n      </button>\n      <!--\n      <a href="javascript:;" onclick="return false" class="icon16_opr closed pop_closed">\u5173\u95ED</a>\n      -->\n      {/if}\n    </div>\n    <div class="dialog_bd {contentClassName}">\n      <div class="page_msg large simple default {msg.msgClass}">\n        <div class="inner group">\n          <span class="msg_icon_wrapper"><i class="icon_msg {icon} "></i></span>\n          {if msg.extraTitle}\n            <div class="msg_extra_title">\n              <h4>{=msg.extraTitle}</h4>\n            </div>\n          {/if}\n          <div class="msg_content ">\n          {if msg.title}<h4>{=msg.title}</h4>{/if}\n          {if msg.text}<p>{=msg.text}</p>{/if} \n          </div>\n        </div>\n      </div>\n    </div>\n    <div class="dialog_ft">\n  	{if !hideClose&&!hideBt}\n      {each buttons as bt index}\n      <a href="javascript:;" class="btn {bt.type} js_btn" onclick="return false;">{bt.text}</a>\n      {/each}\n  	{/if}\n    </div>\n  </div>\n</div>\n{if mask}<div class="mask"></div>{/if}\n\n'}}]);
