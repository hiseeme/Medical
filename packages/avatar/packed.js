/*! jQuery UI - v1.11.4 - 2015-03-11
* http://jqueryui.com
* Includes: core.js, widget.js, mouse.js, position.js, accordion.js, autocomplete.js, button.js, datepicker.js, dialog.js, draggable.js, droppable.js, effect.js, effect-blind.js, effect-bounce.js, effect-clip.js, effect-drop.js, effect-explode.js, effect-fade.js, effect-fold.js, effect-highlight.js, effect-puff.js, effect-pulsate.js, effect-scale.js, effect-shake.js, effect-size.js, effect-slide.js, effect-transfer.js, menu.js, progressbar.js, resizable.js, selectable.js, selectmenu.js, slider.js, sortable.js, spinner.js, tabs.js, tooltip.js
* Copyright 2015 jQuery Foundation and other contributors; Licensed MIT */

(function(e){"function"==typeof define&&define.amd?define(["jquery"],e):e(jQuery)})(function(e){function t(t,s){var n,a,o,r=t.nodeName.toLowerCase();return"area"===r?(n=t.parentNode,a=n.name,t.href&&a&&"map"===n.nodeName.toLowerCase()?(o=e("img[usemap='#"+a+"']")[0],!!o&&i(o)):!1):(/^(input|select|textarea|button|object)$/.test(r)?!t.disabled:"a"===r?t.href||s:s)&&i(t)}function i(t){return e.expr.filters.visible(t)&&!e(t).parents().addBack().filter(function(){return"hidden"===e.css(this,"visibility")}).length}function s(e){for(var t,i;e.length&&e[0]!==document;){if(t=e.css("position"),("absolute"===t||"relative"===t||"fixed"===t)&&(i=parseInt(e.css("zIndex"),10),!isNaN(i)&&0!==i))return i;e=e.parent()}return 0}function n(){this._curInst=null,this._keyEvent=!1,this._disabledInputs=[],this._datepickerShowing=!1,this._inDialog=!1,this._mainDivId="ui-datepicker-div",this._inlineClass="ui-datepicker-inline",this._appendClass="ui-datepicker-append",this._triggerClass="ui-datepicker-trigger",this._dialogClass="ui-datepicker-dialog",this._disableClass="ui-datepicker-disabled",this._unselectableClass="ui-datepicker-unselectable",this._currentClass="ui-datepicker-current-day",this._dayOverClass="ui-datepicker-days-cell-over",this.regional=[],this.regional[""]={closeText:"Done",prevText:"Prev",nextText:"Next",currentText:"Today",monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["Su","Mo","Tu","We","Th","Fr","Sa"],weekHeader:"Wk",dateFormat:"mm/dd/yy",firstDay:0,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""},this._defaults={showOn:"focus",showAnim:"fadeIn",showOptions:{},defaultDate:null,appendText:"",buttonText:"...",buttonImage:"",buttonImageOnly:!1,hideIfNoPrevNext:!1,navigationAsDateFormat:!1,gotoCurrent:!1,changeMonth:!1,changeYear:!1,yearRange:"c-10:c+10",showOtherMonths:!1,selectOtherMonths:!1,showWeek:!1,calculateWeek:this.iso8601Week,shortYearCutoff:"+10",minDate:null,maxDate:null,duration:"fast",beforeShowDay:null,beforeShow:null,onSelect:null,onChangeMonthYear:null,onClose:null,numberOfMonths:1,showCurrentAtPos:0,stepMonths:1,stepBigMonths:12,altField:"",altFormat:"",constrainInput:!0,showButtonPanel:!1,autoSize:!1,disabled:!1},e.extend(this._defaults,this.regional[""]),this.regional.en=e.extend(!0,{},this.regional[""]),this.regional["en-US"]=e.extend(!0,{},this.regional.en),this.dpDiv=a(e("<div id='"+this._mainDivId+"' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"))}function a(t){var i="button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";return t.delegate(i,"mouseout",function(){e(this).removeClass("ui-state-hover"),-1!==this.className.indexOf("ui-datepicker-prev")&&e(this).removeClass("ui-datepicker-prev-hover"),-1!==this.className.indexOf("ui-datepicker-next")&&e(this).removeClass("ui-datepicker-next-hover")}).delegate(i,"mouseover",o)}function o(){e.datepicker._isDisabledDatepicker(v.inline?v.dpDiv.parent()[0]:v.input[0])||(e(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"),e(this).addClass("ui-state-hover"),-1!==this.className.indexOf("ui-datepicker-prev")&&e(this).addClass("ui-datepicker-prev-hover"),-1!==this.className.indexOf("ui-datepicker-next")&&e(this).addClass("ui-datepicker-next-hover"))}function r(t,i){e.extend(t,i);for(var s in i)null==i[s]&&(t[s]=i[s]);return t}function h(e){return function(){var t=this.element.val();e.apply(this,arguments),this._refresh(),t!==this.element.val()&&this._trigger("change")}}e.ui=e.ui||{},e.extend(e.ui,{version:"1.11.4",keyCode:{BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38}}),e.fn.extend({scrollParent:function(t){var i=this.css("position"),s="absolute"===i,n=t?/(auto|scroll|hidden)/:/(auto|scroll)/,a=this.parents().filter(function(){var t=e(this);return s&&"static"===t.css("position")?!1:n.test(t.css("overflow")+t.css("overflow-y")+t.css("overflow-x"))}).eq(0);return"fixed"!==i&&a.length?a:e(this[0].ownerDocument||document)},uniqueId:function(){var e=0;return function(){return this.each(function(){this.id||(this.id="ui-id-"+ ++e)})}}(),removeUniqueId:function(){return this.each(function(){/^ui-id-\d+$/.test(this.id)&&e(this).removeAttr("id")})}}),e.extend(e.expr[":"],{data:e.expr.createPseudo?e.expr.createPseudo(function(t){return function(i){return!!e.data(i,t)}}):function(t,i,s){return!!e.data(t,s[3])},focusable:function(i){return t(i,!isNaN(e.attr(i,"tabindex")))},tabbable:function(i){var s=e.attr(i,"tabindex"),n=isNaN(s);return(n||s>=0)&&t(i,!n)}}),e("<a>").outerWidth(1).jquery||e.each(["Width","Height"],function(t,i){function s(t,i,s,a){return e.each(n,function(){i-=parseFloat(e.css(t,"padding"+this))||0,s&&(i-=parseFloat(e.css(t,"border"+this+"Width"))||0),a&&(i-=parseFloat(e.css(t,"margin"+this))||0)}),i}var n="Width"===i?["Left","Right"]:["Top","Bottom"],a=i.toLowerCase(),o={innerWidth:e.fn.innerWidth,innerHeight:e.fn.innerHeight,outerWidth:e.fn.outerWidth,outerHeight:e.fn.outerHeight};e.fn["inner"+i]=function(t){return void 0===t?o["inner"+i].call(this):this.each(function(){e(this).css(a,s(this,t)+"px")})},e.fn["outer"+i]=function(t,n){return"number"!=typeof t?o["outer"+i].call(this,t):this.each(function(){e(this).css(a,s(this,t,!0,n)+"px")})}}),e.fn.addBack||(e.fn.addBack=function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}),e("<a>").data("a-b","a").removeData("a-b").data("a-b")&&(e.fn.removeData=function(t){return function(i){return arguments.length?t.call(this,e.camelCase(i)):t.call(this)}}(e.fn.removeData)),e.ui.ie=!!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()),e.fn.extend({focus:function(t){return function(i,s){return"number"==typeof i?this.each(function(){var t=this;setTimeout(function(){e(t).focus(),s&&s.call(t)},i)}):t.apply(this,arguments)}}(e.fn.focus),disableSelection:function(){var e="onselectstart"in document.createElement("div")?"selectstart":"mousedown";return function(){return this.bind(e+".ui-disableSelection",function(e){e.preventDefault()})}}(),enableSelection:function(){return this.unbind(".ui-disableSelection")},zIndex:function(t){if(void 0!==t)return this.css("zIndex",t);if(this.length)for(var i,s,n=e(this[0]);n.length&&n[0]!==document;){if(i=n.css("position"),("absolute"===i||"relative"===i||"fixed"===i)&&(s=parseInt(n.css("zIndex"),10),!isNaN(s)&&0!==s))return s;n=n.parent()}return 0}}),e.ui.plugin={add:function(t,i,s){var n,a=e.ui[t].prototype;for(n in s)a.plugins[n]=a.plugins[n]||[],a.plugins[n].push([i,s[n]])},call:function(e,t,i,s){var n,a=e.plugins[t];if(a&&(s||e.element[0].parentNode&&11!==e.element[0].parentNode.nodeType))for(n=0;a.length>n;n++)e.options[a[n][0]]&&a[n][1].apply(e.element,i)}};var l=0,u=Array.prototype.slice;e.cleanData=function(t){return function(i){var s,n,a;for(a=0;null!=(n=i[a]);a++)try{s=e._data(n,"events"),s&&s.remove&&e(n).triggerHandler("remove")}catch(o){}t(i)}}(e.cleanData),e.widget=function(t,i,s){var n,a,o,r,h={},l=t.split(".")[0];return t=t.split(".")[1],n=l+"-"+t,s||(s=i,i=e.Widget),e.expr[":"][n.toLowerCase()]=function(t){return!!e.data(t,n)},e[l]=e[l]||{},a=e[l][t],o=e[l][t]=function(e,t){return this._createWidget?(arguments.length&&this._createWidget(e,t),void 0):new o(e,t)},e.extend(o,a,{version:s.version,_proto:e.extend({},s),_childConstructors:[]}),r=new i,r.options=e.widget.extend({},r.options),e.each(s,function(t,s){return e.isFunction(s)?(h[t]=function(){var e=function(){return i.prototype[t].apply(this,arguments)},n=function(e){return i.prototype[t].apply(this,e)};return function(){var t,i=this._super,a=this._superApply;return this._super=e,this._superApply=n,t=s.apply(this,arguments),this._super=i,this._superApply=a,t}}(),void 0):(h[t]=s,void 0)}),o.prototype=e.widget.extend(r,{widgetEventPrefix:a?r.widgetEventPrefix||t:t},h,{constructor:o,namespace:l,widgetName:t,widgetFullName:n}),a?(e.each(a._childConstructors,function(t,i){var s=i.prototype;e.widget(s.namespace+"."+s.widgetName,o,i._proto)}),delete a._childConstructors):i._childConstructors.push(o),e.widget.bridge(t,o),o},e.widget.extend=function(t){for(var i,s,n=u.call(arguments,1),a=0,o=n.length;o>a;a++)for(i in n[a])s=n[a][i],n[a].hasOwnProperty(i)&&void 0!==s&&(t[i]=e.isPlainObject(s)?e.isPlainObject(t[i])?e.widget.extend({},t[i],s):e.widget.extend({},s):s);return t},e.widget.bridge=function(t,i){var s=i.prototype.widgetFullName||t;e.fn[t]=function(n){var a="string"==typeof n,o=u.call(arguments,1),r=this;return a?this.each(function(){var i,a=e.data(this,s);return"instance"===n?(r=a,!1):a?e.isFunction(a[n])&&"_"!==n.charAt(0)?(i=a[n].apply(a,o),i!==a&&void 0!==i?(r=i&&i.jquery?r.pushStack(i.get()):i,!1):void 0):e.error("no such method '"+n+"' for "+t+" widget instance"):e.error("cannot call methods on "+t+" prior to initialization; "+"attempted to call method '"+n+"'")}):(o.length&&(n=e.widget.extend.apply(null,[n].concat(o))),this.each(function(){var t=e.data(this,s);t?(t.option(n||{}),t._init&&t._init()):e.data(this,s,new i(n,this))})),r}},e.Widget=function(){},e.Widget._childConstructors=[],e.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{disabled:!1,create:null},_createWidget:function(t,i){i=e(i||this.defaultElement||this)[0],this.element=e(i),this.uuid=l++,this.eventNamespace="."+this.widgetName+this.uuid,this.bindings=e(),this.hoverable=e(),this.focusable=e(),i!==this&&(e.data(i,this.widgetFullName,this),this._on(!0,this.element,{remove:function(e){e.target===i&&this.destroy()}}),this.document=e(i.style?i.ownerDocument:i.document||i),this.window=e(this.document[0].defaultView||this.document[0].parentWindow)),this.options=e.widget.extend({},this.options,this._getCreateOptions(),t),this._create(),this._trigger("create",null,this._getCreateEventData()),this._init()},_getCreateOptions:e.noop,_getCreateEventData:e.noop,_create:e.noop,_init:e.noop,destroy:function(){this._destroy(),this.element.unbind(this.eventNamespace).removeData(this.widgetFullName).removeData(e.camelCase(this.widgetFullName)),this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName+"-disabled "+"ui-state-disabled"),this.bindings.unbind(this.eventNamespace),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")},_destroy:e.noop,widget:function(){return this.element},option:function(t,i){var s,n,a,o=t;if(0===arguments.length)return e.widget.extend({},this.options);if("string"==typeof t)if(o={},s=t.split("."),t=s.shift(),s.length){for(n=o[t]=e.widget.extend({},this.options[t]),a=0;s.length-1>a;a++)n[s[a]]=n[s[a]]||{},n=n[s[a]];if(t=s.pop(),1===arguments.length)return void 0===n[t]?null:n[t];n[t]=i}else{if(1===arguments.length)return void 0===this.options[t]?null:this.options[t];o[t]=i}return this._setOptions(o),this},_setOptions:function(e){var t;for(t in e)this._setOption(t,e[t]);return this},_setOption:function(e,t){return this.options[e]=t,"disabled"===e&&(this.widget().toggleClass(this.widgetFullName+"-disabled",!!t),t&&(this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus"))),this},enable:function(){return this._setOptions({disabled:!1})},disable:function(){return this._setOptions({disabled:!0})},_on:function(t,i,s){var n,a=this;"boolean"!=typeof t&&(s=i,i=t,t=!1),s?(i=n=e(i),this.bindings=this.bindings.add(i)):(s=i,i=this.element,n=this.widget()),e.each(s,function(s,o){function r(){return t||a.options.disabled!==!0&&!e(this).hasClass("ui-state-disabled")?("string"==typeof o?a[o]:o).apply(a,arguments):void 0}"string"!=typeof o&&(r.guid=o.guid=o.guid||r.guid||e.guid++);var h=s.match(/^([\w:-]*)\s*(.*)$/),l=h[1]+a.eventNamespace,u=h[2];u?n.delegate(u,l,r):i.bind(l,r)})},_off:function(t,i){i=(i||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,t.unbind(i).undelegate(i),this.bindings=e(this.bindings.not(t).get()),this.focusable=e(this.focusable.not(t).get()),this.hoverable=e(this.hoverable.not(t).get())},_delay:function(e,t){function i(){return("string"==typeof e?s[e]:e).apply(s,arguments)}var s=this;return setTimeout(i,t||0)},_hoverable:function(t){this.hoverable=this.hoverable.add(t),this._on(t,{mouseenter:function(t){e(t.currentTarget).addClass("ui-state-hover")},mouseleave:function(t){e(t.currentTarget).removeClass("ui-state-hover")}})},_focusable:function(t){this.focusable=this.focusable.add(t),this._on(t,{focusin:function(t){e(t.currentTarget).addClass("ui-state-focus")},focusout:function(t){e(t.currentTarget).removeClass("ui-state-focus")}})},_trigger:function(t,i,s){var n,a,o=this.options[t];if(s=s||{},i=e.Event(i),i.type=(t===this.widgetEventPrefix?t:this.widgetEventPrefix+t).toLowerCase(),i.target=this.element[0],a=i.originalEvent)for(n in a)n in i||(i[n]=a[n]);return this.element.trigger(i,s),!(e.isFunction(o)&&o.apply(this.element[0],[i].concat(s))===!1||i.isDefaultPrevented())}},e.each({show:"fadeIn",hide:"fadeOut"},function(t,i){e.Widget.prototype["_"+t]=function(s,n,a){"string"==typeof n&&(n={effect:n});var o,r=n?n===!0||"number"==typeof n?i:n.effect||i:t;n=n||{},"number"==typeof n&&(n={duration:n}),o=!e.isEmptyObject(n),n.complete=a,n.delay&&s.delay(n.delay),o&&e.effects&&e.effects.effect[r]?s[t](n):r!==t&&s[r]?s[r](n.duration,n.easing,a):s.queue(function(i){e(this)[t](),a&&a.call(s[0]),i()})}}),e.widget;var d=!1;e(document).mouseup(function(){d=!1}),e.widget("ui.mouse",{version:"1.11.4",options:{cancel:"input,textarea,button,select,option",distance:1,delay:0},_mouseInit:function(){var t=this;this.element.bind("mousedown."+this.widgetName,function(e){return t._mouseDown(e)}).bind("click."+this.widgetName,function(i){return!0===e.data(i.target,t.widgetName+".preventClickEvent")?(e.removeData(i.target,t.widgetName+".preventClickEvent"),i.stopImmediatePropagation(),!1):void 0}),this.started=!1},_mouseDestroy:function(){this.element.unbind("."+this.widgetName),this._mouseMoveDelegate&&this.document.unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate)},_mouseDown:function(t){if(!d){this._mouseMoved=!1,this._mouseStarted&&this._mouseUp(t),this._mouseDownEvent=t;var i=this,s=1===t.which,n="string"==typeof this.options.cancel&&t.target.nodeName?e(t.target).closest(this.options.cancel).length:!1;return s&&!n&&this._mouseCapture(t)?(this.mouseDelayMet=!this.options.delay,this.mouseDelayMet||(this._mouseDelayTimer=setTimeout(function(){i.mouseDelayMet=!0},this.options.delay)),this._mouseDistanceMet(t)&&this._mouseDelayMet(t)&&(this._mouseStarted=this._mouseStart(t)!==!1,!this._mouseStarted)?(t.preventDefault(),!0):(!0===e.data(t.target,this.widgetName+".preventClickEvent")&&e.removeData(t.target,this.widgetName+".preventClickEvent"),this._mouseMoveDelegate=function(e){return i._mouseMove(e)},this._mouseUpDelegate=function(e){return i._mouseUp(e)},this.document.bind("mousemove."+this.widgetName,this._mouseMoveDelegate).bind("mouseup."+this.widgetName,this._mouseUpDelegate),t.preventDefault(),d=!0,!0)):!0}},_mouseMove:function(t){if(this._mouseMoved){if(e.ui.ie&&(!document.documentMode||9>document.documentMode)&&!t.button)return this._mouseUp(t);if(!t.which)return this._mouseUp(t)}return(t.which||t.button)&&(this._mouseMoved=!0),this._mouseStarted?(this._mouseDrag(t),t.preventDefault()):(this._mouseDistanceMet(t)&&this._mouseDelayMet(t)&&(this._mouseStarted=this._mouseStart(this._mouseDownEvent,t)!==!1,this._mouseStarted?this._mouseDrag(t):this._mouseUp(t)),!this._mouseStarted)},_mouseUp:function(t){return this.document.unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate),this._mouseStarted&&(this._mouseStarted=!1,t.target===this._mouseDownEvent.target&&e.data(t.target,this.widgetName+".preventClickEvent",!0),this._mouseStop(t)),d=!1,!1},_mouseDistanceMet:function(e){return Math.max(Math.abs(this._mouseDownEvent.pageX-e.pageX),Math.abs(this._mouseDownEvent.pageY-e.pageY))>=this.options.distance},_mouseDelayMet:function(){return this.mouseDelayMet},_mouseStart:function(){},_mouseDrag:function(){},_mouseStop:function(){},_mouseCapture:function(){return!0}}),function(){function t(e,t,i){return[parseFloat(e[0])*(p.test(e[0])?t/100:1),parseFloat(e[1])*(p.test(e[1])?i/100:1)]}function i(t,i){return parseInt(e.css(t,i),10)||0}function s(t){var i=t[0];return 9===i.nodeType?{width:t.width(),height:t.height(),offset:{top:0,left:0}}:e.isWindow(i)?{width:t.width(),height:t.height(),offset:{top:t.scrollTop(),left:t.scrollLeft()}}:i.preventDefault?{width:0,height:0,offset:{top:i.pageY,left:i.pageX}}:{width:t.outerWidth(),height:t.outerHeight(),offset:t.offset()}}e.ui=e.ui||{};var n,a,o=Math.max,r=Math.abs,h=Math.round,l=/left|center|right/,u=/top|center|bottom/,d=/[\+\-]\d+(\.[\d]+)?%?/,c=/^\w+/,p=/%$/,f=e.fn.position;e.position={scrollbarWidth:function(){if(void 0!==n)return n;var t,i,s=e("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),a=s.children()[0];return e("body").append(s),t=a.offsetWidth,s.css("overflow","scroll"),i=a.offsetWidth,t===i&&(i=s[0].clientWidth),s.remove(),n=t-i},getScrollInfo:function(t){var i=t.isWindow||t.isDocument?"":t.element.css("overflow-x"),s=t.isWindow||t.isDocument?"":t.element.css("overflow-y"),n="scroll"===i||"auto"===i&&t.width<t.element[0].scrollWidth,a="scroll"===s||"auto"===s&&t.height<t.element[0].scrollHeight;return{width:a?e.position.scrollbarWidth():0,height:n?e.position.scrollbarWidth():0}},getWithinInfo:function(t){var i=e(t||window),s=e.isWindow(i[0]),n=!!i[0]&&9===i[0].nodeType;return{element:i,isWindow:s,isDocument:n,offset:i.offset()||{left:0,top:0},scrollLeft:i.scrollLeft(),scrollTop:i.scrollTop(),width:s||n?i.width():i.outerWidth(),height:s||n?i.height():i.outerHeight()}}},e.fn.position=function(n){if(!n||!n.of)return f.apply(this,arguments);n=e.extend({},n);var p,m,g,v,y,b,_=e(n.of),x=e.position.getWithinInfo(n.within),w=e.position.getScrollInfo(x),k=(n.collision||"flip").split(" "),T={};return b=s(_),_[0].preventDefault&&(n.at="left top"),m=b.width,g=b.height,v=b.offset,y=e.extend({},v),e.each(["my","at"],function(){var e,t,i=(n[this]||"").split(" ");1===i.length&&(i=l.test(i[0])?i.concat(["center"]):u.test(i[0])?["center"].concat(i):["center","center"]),i[0]=l.test(i[0])?i[0]:"center",i[1]=u.test(i[1])?i[1]:"center",e=d.exec(i[0]),t=d.exec(i[1]),T[this]=[e?e[0]:0,t?t[0]:0],n[this]=[c.exec(i[0])[0],c.exec(i[1])[0]]}),1===k.length&&(k[1]=k[0]),"right"===n.at[0]?y.left+=m:"center"===n.at[0]&&(y.left+=m/2),"bottom"===n.at[1]?y.top+=g:"center"===n.at[1]&&(y.top+=g/2),p=t(T.at,m,g),y.left+=p[0],y.top+=p[1],this.each(function(){var s,l,u=e(this),d=u.outerWidth(),c=u.outerHeight(),f=i(this,"marginLeft"),b=i(this,"marginTop"),D=d+f+i(this,"marginRight")+w.width,S=c+b+i(this,"marginBottom")+w.height,M=e.extend({},y),C=t(T.my,u.outerWidth(),u.outerHeight());"right"===n.my[0]?M.left-=d:"center"===n.my[0]&&(M.left-=d/2),"bottom"===n.my[1]?M.top-=c:"center"===n.my[1]&&(M.top-=c/2),M.left+=C[0],M.top+=C[1],a||(M.left=h(M.left),M.top=h(M.top)),s={marginLeft:f,marginTop:b},e.each(["left","top"],function(t,i){e.ui.position[k[t]]&&e.ui.position[k[t]][i](M,{targetWidth:m,targetHeight:g,elemWidth:d,elemHeight:c,collisionPosition:s,collisionWidth:D,collisionHeight:S,offset:[p[0]+C[0],p[1]+C[1]],my:n.my,at:n.at,within:x,elem:u})}),n.using&&(l=function(e){var t=v.left-M.left,i=t+m-d,s=v.top-M.top,a=s+g-c,h={target:{element:_,left:v.left,top:v.top,width:m,height:g},element:{element:u,left:M.left,top:M.top,width:d,height:c},horizontal:0>i?"left":t>0?"right":"center",vertical:0>a?"top":s>0?"bottom":"middle"};d>m&&m>r(t+i)&&(h.horizontal="center"),c>g&&g>r(s+a)&&(h.vertical="middle"),h.important=o(r(t),r(i))>o(r(s),r(a))?"horizontal":"vertical",n.using.call(this,e,h)}),u.offset(e.extend(M,{using:l}))})},e.ui.position={fit:{left:function(e,t){var i,s=t.within,n=s.isWindow?s.scrollLeft:s.offset.left,a=s.width,r=e.left-t.collisionPosition.marginLeft,h=n-r,l=r+t.collisionWidth-a-n;t.collisionWidth>a?h>0&&0>=l?(i=e.left+h+t.collisionWidth-a-n,e.left+=h-i):e.left=l>0&&0>=h?n:h>l?n+a-t.collisionWidth:n:h>0?e.left+=h:l>0?e.left-=l:e.left=o(e.left-r,e.left)},top:function(e,t){var i,s=t.within,n=s.isWindow?s.scrollTop:s.offset.top,a=t.within.height,r=e.top-t.collisionPosition.marginTop,h=n-r,l=r+t.collisionHeight-a-n;t.collisionHeight>a?h>0&&0>=l?(i=e.top+h+t.collisionHeight-a-n,e.top+=h-i):e.top=l>0&&0>=h?n:h>l?n+a-t.collisionHeight:n:h>0?e.top+=h:l>0?e.top-=l:e.top=o(e.top-r,e.top)}},flip:{left:function(e,t){var i,s,n=t.within,a=n.offset.left+n.scrollLeft,o=n.width,h=n.isWindow?n.scrollLeft:n.offset.left,l=e.left-t.collisionPosition.marginLeft,u=l-h,d=l+t.collisionWidth-o-h,c="left"===t.my[0]?-t.elemWidth:"right"===t.my[0]?t.elemWidth:0,p="left"===t.at[0]?t.targetWidth:"right"===t.at[0]?-t.targetWidth:0,f=-2*t.offset[0];0>u?(i=e.left+c+p+f+t.collisionWidth-o-a,(0>i||r(u)>i)&&(e.left+=c+p+f)):d>0&&(s=e.left-t.collisionPosition.marginLeft+c+p+f-h,(s>0||d>r(s))&&(e.left+=c+p+f))},top:function(e,t){var i,s,n=t.within,a=n.offset.top+n.scrollTop,o=n.height,h=n.isWindow?n.scrollTop:n.offset.top,l=e.top-t.collisionPosition.marginTop,u=l-h,d=l+t.collisionHeight-o-h,c="top"===t.my[1],p=c?-t.elemHeight:"bottom"===t.my[1]?t.elemHeight:0,f="top"===t.at[1]?t.targetHeight:"bottom"===t.at[1]?-t.targetHeight:0,m=-2*t.offset[1];0>u?(s=e.top+p+f+m+t.collisionHeight-o-a,(0>s||r(u)>s)&&(e.top+=p+f+m)):d>0&&(i=e.top-t.collisionPosition.marginTop+p+f+m-h,(i>0||d>r(i))&&(e.top+=p+f+m))}},flipfit:{left:function(){e.ui.position.flip.left.apply(this,arguments),e.ui.position.fit.left.apply(this,arguments)},top:function(){e.ui.position.flip.top.apply(this,arguments),e.ui.position.fit.top.apply(this,arguments)}}},function(){var t,i,s,n,o,r=document.getElementsByTagName("body")[0],h=document.createElement("div");t=document.createElement(r?"div":"body"),s={visibility:"hidden",width:0,height:0,border:0,margin:0,background:"none"},r&&e.extend(s,{position:"absolute",left:"-1000px",top:"-1000px"});for(o in s)t.style[o]=s[o];t.appendChild(h),i=r||document.documentElement,i.insertBefore(t,i.firstChild),h.style.cssText="position: absolute; left: 10.7432222px;",n=e(h).offset().left,a=n>10&&11>n,t.innerHTML="",i.removeChild(t)}()}(),e.ui.position,e.widget("ui.accordion",{version:"1.11.4",options:{active:0,animate:{},collapsible:!1,event:"click",header:"> li > :first-child,> :not(li):even",heightStyle:"auto",icons:{activeHeader:"ui-icon-triangle-1-s",header:"ui-icon-triangle-1-e"},activate:null,beforeActivate:null},hideProps:{borderTopWidth:"hide",borderBottomWidth:"hide",paddingTop:"hide",paddingBottom:"hide",height:"hide"},showProps:{borderTopWidth:"show",borderBottomWidth:"show",paddingTop:"show",paddingBottom:"show",height:"show"},_create:function(){var t=this.options;this.prevShow=this.prevHide=e(),this.element.addClass("ui-accordion ui-widget ui-helper-reset").attr("role","tablist"),t.collapsible||t.active!==!1&&null!=t.active||(t.active=0),this._processPanels(),0>t.active&&(t.active+=this.headers.length),this._refresh()},_getCreateEventData:function(){return{header:this.active,panel:this.active.length?this.active.next():e()}},_createIcons:function(){var t=this.options.icons;t&&(e("<span>").addClass("ui-accordion-header-icon ui-icon "+t.header).prependTo(this.headers),this.active.children(".ui-accordion-header-icon").removeClass(t.header).addClass(t.activeHeader),this.headers.addClass("ui-accordion-icons"))},_destroyIcons:function(){this.headers.removeClass("ui-accordion-icons").children(".ui-accordion-header-icon").remove()},_destroy:function(){var e;this.element.removeClass("ui-accordion ui-widget ui-helper-reset").removeAttr("role"),this.headers.removeClass("ui-accordion-header ui-accordion-header-active ui-state-default ui-corner-all ui-state-active ui-state-disabled ui-corner-top").removeAttr("role").removeAttr("aria-expanded").removeAttr("aria-selected").removeAttr("aria-controls").removeAttr("tabIndex").removeUniqueId(),this._destroyIcons(),e=this.headers.next().removeClass("ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content ui-accordion-content-active ui-state-disabled").css("display","").removeAttr("role").removeAttr("aria-hidden").removeAttr("aria-labelledby").removeUniqueId(),"content"!==this.options.heightStyle&&e.css("height","")},_setOption:function(e,t){return"active"===e?(this._activate(t),void 0):("event"===e&&(this.options.event&&this._off(this.headers,this.options.event),this._setupEvents(t)),this._super(e,t),"collapsible"!==e||t||this.options.active!==!1||this._activate(0),"icons"===e&&(this._destroyIcons(),t&&this._createIcons()),"disabled"===e&&(this.element.toggleClass("ui-state-disabled",!!t).attr("aria-disabled",t),this.headers.add(this.headers.next()).toggleClass("ui-state-disabled",!!t)),void 0)},_keydown:function(t){if(!t.altKey&&!t.ctrlKey){var i=e.ui.keyCode,s=this.headers.length,n=this.headers.index(t.target),a=!1;switch(t.keyCode){case i.RIGHT:case i.DOWN:a=this.headers[(n+1)%s];break;case i.LEFT:case i.UP:a=this.headers[(n-1+s)%s];break;case i.SPACE:case i.ENTER:this._eventHandler(t);break;case i.HOME:a=this.headers[0];break;case i.END:a=this.headers[s-1]}a&&(e(t.target).attr("tabIndex",-1),e(a).attr("tabIndex",0),a.focus(),t.preventDefault())}},_panelKeyDown:function(t){t.keyCode===e.ui.keyCode.UP&&t.ctrlKey&&e(t.currentTarget).prev().focus()},refresh:function(){var t=this.options;this._processPanels(),t.active===!1&&t.collapsible===!0||!this.headers.length?(t.active=!1,this.active=e()):t.active===!1?this._activate(0):this.active.length&&!e.contains(this.element[0],this.active[0])?this.headers.length===this.headers.find(".ui-state-disabled").length?(t.active=!1,this.active=e()):this._activate(Math.max(0,t.active-1)):t.active=this.headers.index(this.active),this._destroyIcons(),this._refresh()},_processPanels:function(){var e=this.headers,t=this.panels;this.headers=this.element.find(this.options.header).addClass("ui-accordion-header ui-state-default ui-corner-all"),this.panels=this.headers.next().addClass("ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom").filter(":not(.ui-accordion-content-active)").hide(),t&&(this._off(e.not(this.headers)),this._off(t.not(this.panels)))},_refresh:function(){var t,i=this.options,s=i.heightStyle,n=this.element.parent();this.active=this._findActive(i.active).addClass("ui-accordion-header-active ui-state-active ui-corner-top").removeClass("ui-corner-all"),this.active.next().addClass("ui-accordion-content-active").show(),this.headers.attr("role","tab").each(function(){var t=e(this),i=t.uniqueId().attr("id"),s=t.next(),n=s.uniqueId().attr("id");t.attr("aria-controls",n),s.attr("aria-labelledby",i)}).next().attr("role","tabpanel"),this.headers.not(this.active).attr({"aria-selected":"false","aria-expanded":"false",tabIndex:-1}).next().attr({"aria-hidden":"true"}).hide(),this.active.length?this.active.attr({"aria-selected":"true","aria-expanded":"true",tabIndex:0}).next().attr({"aria-hidden":"false"}):this.headers.eq(0).attr("tabIndex",0),this._createIcons(),this._setupEvents(i.event),"fill"===s?(t=n.height(),this.element.siblings(":visible").each(function(){var i=e(this),s=i.css("position");"absolute"!==s&&"fixed"!==s&&(t-=i.outerHeight(!0))}),this.headers.each(function(){t-=e(this).outerHeight(!0)}),this.headers.next().each(function(){e(this).height(Math.max(0,t-e(this).innerHeight()+e(this).height()))}).css("overflow","auto")):"auto"===s&&(t=0,this.headers.next().each(function(){t=Math.max(t,e(this).css("height","").height())}).height(t))},_activate:function(t){var i=this._findActive(t)[0];i!==this.active[0]&&(i=i||this.active[0],this._eventHandler({target:i,currentTarget:i,preventDefault:e.noop}))},_findActive:function(t){return"number"==typeof t?this.headers.eq(t):e()},_setupEvents:function(t){var i={keydown:"_keydown"};t&&e.each(t.split(" "),function(e,t){i[t]="_eventHandler"}),this._off(this.headers.add(this.headers.next())),this._on(this.headers,i),this._on(this.headers.next(),{keydown:"_panelKeyDown"}),this._hoverable(this.headers),this._focusable(this.headers)},_eventHandler:function(t){var i=this.options,s=this.active,n=e(t.currentTarget),a=n[0]===s[0],o=a&&i.collapsible,r=o?e():n.next(),h=s.next(),l={oldHeader:s,oldPanel:h,newHeader:o?e():n,newPanel:r};t.preventDefault(),a&&!i.collapsible||this._trigger("beforeActivate",t,l)===!1||(i.active=o?!1:this.headers.index(n),this.active=a?e():n,this._toggle(l),s.removeClass("ui-accordion-header-active ui-state-active"),i.icons&&s.children(".ui-accordion-header-icon").removeClass(i.icons.activeHeader).addClass(i.icons.header),a||(n.removeClass("ui-corner-all").addClass("ui-accordion-header-active ui-state-active ui-corner-top"),i.icons&&n.children(".ui-accordion-header-icon").removeClass(i.icons.header).addClass(i.icons.activeHeader),n.next().addClass("ui-accordion-content-active")))},_toggle:function(t){var i=t.newPanel,s=this.prevShow.length?this.prevShow:t.oldPanel;this.prevShow.add(this.prevHide).stop(!0,!0),this.prevShow=i,this.prevHide=s,this.options.animate?this._animate(i,s,t):(s.hide(),i.show(),this._toggleComplete(t)),s.attr({"aria-hidden":"true"}),s.prev().attr({"aria-selected":"false","aria-expanded":"false"}),i.length&&s.length?s.prev().attr({tabIndex:-1,"aria-expanded":"false"}):i.length&&this.headers.filter(function(){return 0===parseInt(e(this).attr("tabIndex"),10)}).attr("tabIndex",-1),i.attr("aria-hidden","false").prev().attr({"aria-selected":"true","aria-expanded":"true",tabIndex:0})},_animate:function(e,t,i){var s,n,a,o=this,r=0,h=e.css("box-sizing"),l=e.length&&(!t.length||e.index()<t.index()),u=this.options.animate||{},d=l&&u.down||u,c=function(){o._toggleComplete(i)};return"number"==typeof d&&(a=d),"string"==typeof d&&(n=d),n=n||d.easing||u.easing,a=a||d.duration||u.duration,t.length?e.length?(s=e.show().outerHeight(),t.animate(this.hideProps,{duration:a,easing:n,step:function(e,t){t.now=Math.round(e)}}),e.hide().animate(this.showProps,{duration:a,easing:n,complete:c,step:function(e,i){i.now=Math.round(e),"height"!==i.prop?"content-box"===h&&(r+=i.now):"content"!==o.options.heightStyle&&(i.now=Math.round(s-t.outerHeight()-r),r=0)}}),void 0):t.animate(this.hideProps,a,n,c):e.animate(this.showProps,a,n,c)},_toggleComplete:function(e){var t=e.oldPanel;t.removeClass("ui-accordion-content-active").prev().removeClass("ui-corner-top").addClass("ui-corner-all"),t.length&&(t.parent()[0].className=t.parent()[0].className),this._trigger("activate",null,e)}}),e.widget("ui.menu",{version:"1.11.4",defaultElement:"<ul>",delay:300,options:{icons:{submenu:"ui-icon-carat-1-e"},items:"> *",menus:"ul",position:{my:"left-1 top",at:"right top"},role:"menu",blur:null,focus:null,select:null},_create:function(){this.activeMenu=this.element,this.mouseHandled=!1,this.element.uniqueId().addClass("ui-menu ui-widget ui-widget-content").toggleClass("ui-menu-icons",!!this.element.find(".ui-icon").length).attr({role:this.options.role,tabIndex:0}),this.options.disabled&&this.element.addClass("ui-state-disabled").attr("aria-disabled","true"),this._on({"mousedown .ui-menu-item":function(e){e.preventDefault()},"click .ui-menu-item":function(t){var i=e(t.target);!this.mouseHandled&&i.not(".ui-state-disabled").length&&(this.select(t),t.isPropagationStopped()||(this.mouseHandled=!0),i.has(".ui-menu").length?this.expand(t):!this.element.is(":focus")&&e(this.document[0].activeElement).closest(".ui-menu").length&&(this.element.trigger("focus",[!0]),this.active&&1===this.active.parents(".ui-menu").length&&clearTimeout(this.timer)))},"mouseenter .ui-menu-item":function(t){if(!this.previousFilter){var i=e(t.currentTarget);
i.siblings(".ui-state-active").removeClass("ui-state-active"),this.focus(t,i)}},mouseleave:"collapseAll","mouseleave .ui-menu":"collapseAll",focus:function(e,t){var i=this.active||this.element.find(this.options.items).eq(0);t||this.focus(e,i)},blur:function(t){this._delay(function(){e.contains(this.element[0],this.document[0].activeElement)||this.collapseAll(t)})},keydown:"_keydown"}),this.refresh(),this._on(this.document,{click:function(e){this._closeOnDocumentClick(e)&&this.collapseAll(e),this.mouseHandled=!1}})},_destroy:function(){this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeClass("ui-menu ui-widget ui-widget-content ui-menu-icons ui-front").removeAttr("role").removeAttr("tabIndex").removeAttr("aria-labelledby").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-disabled").removeUniqueId().show(),this.element.find(".ui-menu-item").removeClass("ui-menu-item").removeAttr("role").removeAttr("aria-disabled").removeUniqueId().removeClass("ui-state-hover").removeAttr("tabIndex").removeAttr("role").removeAttr("aria-haspopup").children().each(function(){var t=e(this);t.data("ui-menu-submenu-carat")&&t.remove()}),this.element.find(".ui-menu-divider").removeClass("ui-menu-divider ui-widget-content")},_keydown:function(t){var i,s,n,a,o=!0;switch(t.keyCode){case e.ui.keyCode.PAGE_UP:this.previousPage(t);break;case e.ui.keyCode.PAGE_DOWN:this.nextPage(t);break;case e.ui.keyCode.HOME:this._move("first","first",t);break;case e.ui.keyCode.END:this._move("last","last",t);break;case e.ui.keyCode.UP:this.previous(t);break;case e.ui.keyCode.DOWN:this.next(t);break;case e.ui.keyCode.LEFT:this.collapse(t);break;case e.ui.keyCode.RIGHT:this.active&&!this.active.is(".ui-state-disabled")&&this.expand(t);break;case e.ui.keyCode.ENTER:case e.ui.keyCode.SPACE:this._activate(t);break;case e.ui.keyCode.ESCAPE:this.collapse(t);break;default:o=!1,s=this.previousFilter||"",n=String.fromCharCode(t.keyCode),a=!1,clearTimeout(this.filterTimer),n===s?a=!0:n=s+n,i=this._filterMenuItems(n),i=a&&-1!==i.index(this.active.next())?this.active.nextAll(".ui-menu-item"):i,i.length||(n=String.fromCharCode(t.keyCode),i=this._filterMenuItems(n)),i.length?(this.focus(t,i),this.previousFilter=n,this.filterTimer=this._delay(function(){delete this.previousFilter},1e3)):delete this.previousFilter}o&&t.preventDefault()},_activate:function(e){this.active.is(".ui-state-disabled")||(this.active.is("[aria-haspopup='true']")?this.expand(e):this.select(e))},refresh:function(){var t,i,s=this,n=this.options.icons.submenu,a=this.element.find(this.options.menus);this.element.toggleClass("ui-menu-icons",!!this.element.find(".ui-icon").length),a.filter(":not(.ui-menu)").addClass("ui-menu ui-widget ui-widget-content ui-front").hide().attr({role:this.options.role,"aria-hidden":"true","aria-expanded":"false"}).each(function(){var t=e(this),i=t.parent(),s=e("<span>").addClass("ui-menu-icon ui-icon "+n).data("ui-menu-submenu-carat",!0);i.attr("aria-haspopup","true").prepend(s),t.attr("aria-labelledby",i.attr("id"))}),t=a.add(this.element),i=t.find(this.options.items),i.not(".ui-menu-item").each(function(){var t=e(this);s._isDivider(t)&&t.addClass("ui-widget-content ui-menu-divider")}),i.not(".ui-menu-item, .ui-menu-divider").addClass("ui-menu-item").uniqueId().attr({tabIndex:-1,role:this._itemRole()}),i.filter(".ui-state-disabled").attr("aria-disabled","true"),this.active&&!e.contains(this.element[0],this.active[0])&&this.blur()},_itemRole:function(){return{menu:"menuitem",listbox:"option"}[this.options.role]},_setOption:function(e,t){"icons"===e&&this.element.find(".ui-menu-icon").removeClass(this.options.icons.submenu).addClass(t.submenu),"disabled"===e&&this.element.toggleClass("ui-state-disabled",!!t).attr("aria-disabled",t),this._super(e,t)},focus:function(e,t){var i,s;this.blur(e,e&&"focus"===e.type),this._scrollIntoView(t),this.active=t.first(),s=this.active.addClass("ui-state-focus").removeClass("ui-state-active"),this.options.role&&this.element.attr("aria-activedescendant",s.attr("id")),this.active.parent().closest(".ui-menu-item").addClass("ui-state-active"),e&&"keydown"===e.type?this._close():this.timer=this._delay(function(){this._close()},this.delay),i=t.children(".ui-menu"),i.length&&e&&/^mouse/.test(e.type)&&this._startOpening(i),this.activeMenu=t.parent(),this._trigger("focus",e,{item:t})},_scrollIntoView:function(t){var i,s,n,a,o,r;this._hasScroll()&&(i=parseFloat(e.css(this.activeMenu[0],"borderTopWidth"))||0,s=parseFloat(e.css(this.activeMenu[0],"paddingTop"))||0,n=t.offset().top-this.activeMenu.offset().top-i-s,a=this.activeMenu.scrollTop(),o=this.activeMenu.height(),r=t.outerHeight(),0>n?this.activeMenu.scrollTop(a+n):n+r>o&&this.activeMenu.scrollTop(a+n-o+r))},blur:function(e,t){t||clearTimeout(this.timer),this.active&&(this.active.removeClass("ui-state-focus"),this.active=null,this._trigger("blur",e,{item:this.active}))},_startOpening:function(e){clearTimeout(this.timer),"true"===e.attr("aria-hidden")&&(this.timer=this._delay(function(){this._close(),this._open(e)},this.delay))},_open:function(t){var i=e.extend({of:this.active},this.options.position);clearTimeout(this.timer),this.element.find(".ui-menu").not(t.parents(".ui-menu")).hide().attr("aria-hidden","true"),t.show().removeAttr("aria-hidden").attr("aria-expanded","true").position(i)},collapseAll:function(t,i){clearTimeout(this.timer),this.timer=this._delay(function(){var s=i?this.element:e(t&&t.target).closest(this.element.find(".ui-menu"));s.length||(s=this.element),this._close(s),this.blur(t),this.activeMenu=s},this.delay)},_close:function(e){e||(e=this.active?this.active.parent():this.element),e.find(".ui-menu").hide().attr("aria-hidden","true").attr("aria-expanded","false").end().find(".ui-state-active").not(".ui-state-focus").removeClass("ui-state-active")},_closeOnDocumentClick:function(t){return!e(t.target).closest(".ui-menu").length},_isDivider:function(e){return!/[^\-\u2014\u2013\s]/.test(e.text())},collapse:function(e){var t=this.active&&this.active.parent().closest(".ui-menu-item",this.element);t&&t.length&&(this._close(),this.focus(e,t))},expand:function(e){var t=this.active&&this.active.children(".ui-menu ").find(this.options.items).first();t&&t.length&&(this._open(t.parent()),this._delay(function(){this.focus(e,t)}))},next:function(e){this._move("next","first",e)},previous:function(e){this._move("prev","last",e)},isFirstItem:function(){return this.active&&!this.active.prevAll(".ui-menu-item").length},isLastItem:function(){return this.active&&!this.active.nextAll(".ui-menu-item").length},_move:function(e,t,i){var s;this.active&&(s="first"===e||"last"===e?this.active["first"===e?"prevAll":"nextAll"](".ui-menu-item").eq(-1):this.active[e+"All"](".ui-menu-item").eq(0)),s&&s.length&&this.active||(s=this.activeMenu.find(this.options.items)[t]()),this.focus(i,s)},nextPage:function(t){var i,s,n;return this.active?(this.isLastItem()||(this._hasScroll()?(s=this.active.offset().top,n=this.element.height(),this.active.nextAll(".ui-menu-item").each(function(){return i=e(this),0>i.offset().top-s-n}),this.focus(t,i)):this.focus(t,this.activeMenu.find(this.options.items)[this.active?"last":"first"]())),void 0):(this.next(t),void 0)},previousPage:function(t){var i,s,n;return this.active?(this.isFirstItem()||(this._hasScroll()?(s=this.active.offset().top,n=this.element.height(),this.active.prevAll(".ui-menu-item").each(function(){return i=e(this),i.offset().top-s+n>0}),this.focus(t,i)):this.focus(t,this.activeMenu.find(this.options.items).first())),void 0):(this.next(t),void 0)},_hasScroll:function(){return this.element.outerHeight()<this.element.prop("scrollHeight")},select:function(t){this.active=this.active||e(t.target).closest(".ui-menu-item");var i={item:this.active};this.active.has(".ui-menu").length||this.collapseAll(t,!0),this._trigger("select",t,i)},_filterMenuItems:function(t){var i=t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&"),s=RegExp("^"+i,"i");return this.activeMenu.find(this.options.items).filter(".ui-menu-item").filter(function(){return s.test(e.trim(e(this).text()))})}}),e.widget("ui.autocomplete",{version:"1.11.4",defaultElement:"<input>",options:{appendTo:null,autoFocus:!1,delay:300,minLength:1,position:{my:"left top",at:"left bottom",collision:"none"},source:null,change:null,close:null,focus:null,open:null,response:null,search:null,select:null},requestIndex:0,pending:0,_create:function(){var t,i,s,n=this.element[0].nodeName.toLowerCase(),a="textarea"===n,o="input"===n;this.isMultiLine=a?!0:o?!1:this.element.prop("isContentEditable"),this.valueMethod=this.element[a||o?"val":"text"],this.isNewMenu=!0,this.element.addClass("ui-autocomplete-input").attr("autocomplete","off"),this._on(this.element,{keydown:function(n){if(this.element.prop("readOnly"))return t=!0,s=!0,i=!0,void 0;t=!1,s=!1,i=!1;var a=e.ui.keyCode;switch(n.keyCode){case a.PAGE_UP:t=!0,this._move("previousPage",n);break;case a.PAGE_DOWN:t=!0,this._move("nextPage",n);break;case a.UP:t=!0,this._keyEvent("previous",n);break;case a.DOWN:t=!0,this._keyEvent("next",n);break;case a.ENTER:this.menu.active&&(t=!0,n.preventDefault(),this.menu.select(n));break;case a.TAB:this.menu.active&&this.menu.select(n);break;case a.ESCAPE:this.menu.element.is(":visible")&&(this.isMultiLine||this._value(this.term),this.close(n),n.preventDefault());break;default:i=!0,this._searchTimeout(n)}},keypress:function(s){if(t)return t=!1,(!this.isMultiLine||this.menu.element.is(":visible"))&&s.preventDefault(),void 0;if(!i){var n=e.ui.keyCode;switch(s.keyCode){case n.PAGE_UP:this._move("previousPage",s);break;case n.PAGE_DOWN:this._move("nextPage",s);break;case n.UP:this._keyEvent("previous",s);break;case n.DOWN:this._keyEvent("next",s)}}},input:function(e){return s?(s=!1,e.preventDefault(),void 0):(this._searchTimeout(e),void 0)},focus:function(){this.selectedItem=null,this.previous=this._value()},blur:function(e){return this.cancelBlur?(delete this.cancelBlur,void 0):(clearTimeout(this.searching),this.close(e),this._change(e),void 0)}}),this._initSource(),this.menu=e("<ul>").addClass("ui-autocomplete ui-front").appendTo(this._appendTo()).menu({role:null}).hide().menu("instance"),this._on(this.menu.element,{mousedown:function(t){t.preventDefault(),this.cancelBlur=!0,this._delay(function(){delete this.cancelBlur});var i=this.menu.element[0];e(t.target).closest(".ui-menu-item").length||this._delay(function(){var t=this;this.document.one("mousedown",function(s){s.target===t.element[0]||s.target===i||e.contains(i,s.target)||t.close()})})},menufocus:function(t,i){var s,n;return this.isNewMenu&&(this.isNewMenu=!1,t.originalEvent&&/^mouse/.test(t.originalEvent.type))?(this.menu.blur(),this.document.one("mousemove",function(){e(t.target).trigger(t.originalEvent)}),void 0):(n=i.item.data("ui-autocomplete-item"),!1!==this._trigger("focus",t,{item:n})&&t.originalEvent&&/^key/.test(t.originalEvent.type)&&this._value(n.value),s=i.item.attr("aria-label")||n.value,s&&e.trim(s).length&&(this.liveRegion.children().hide(),e("<div>").text(s).appendTo(this.liveRegion)),void 0)},menuselect:function(e,t){var i=t.item.data("ui-autocomplete-item"),s=this.previous;this.element[0]!==this.document[0].activeElement&&(this.element.focus(),this.previous=s,this._delay(function(){this.previous=s,this.selectedItem=i})),!1!==this._trigger("select",e,{item:i})&&this._value(i.value),this.term=this._value(),this.close(e),this.selectedItem=i}}),this.liveRegion=e("<span>",{role:"status","aria-live":"assertive","aria-relevant":"additions"}).addClass("ui-helper-hidden-accessible").appendTo(this.document[0].body),this._on(this.window,{beforeunload:function(){this.element.removeAttr("autocomplete")}})},_destroy:function(){clearTimeout(this.searching),this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete"),this.menu.element.remove(),this.liveRegion.remove()},_setOption:function(e,t){this._super(e,t),"source"===e&&this._initSource(),"appendTo"===e&&this.menu.element.appendTo(this._appendTo()),"disabled"===e&&t&&this.xhr&&this.xhr.abort()},_appendTo:function(){var t=this.options.appendTo;return t&&(t=t.jquery||t.nodeType?e(t):this.document.find(t).eq(0)),t&&t[0]||(t=this.element.closest(".ui-front")),t.length||(t=this.document[0].body),t},_initSource:function(){var t,i,s=this;e.isArray(this.options.source)?(t=this.options.source,this.source=function(i,s){s(e.ui.autocomplete.filter(t,i.term))}):"string"==typeof this.options.source?(i=this.options.source,this.source=function(t,n){s.xhr&&s.xhr.abort(),s.xhr=e.ajax({url:i,data:t,dataType:"json",success:function(e){n(e)},error:function(){n([])}})}):this.source=this.options.source},_searchTimeout:function(e){clearTimeout(this.searching),this.searching=this._delay(function(){var t=this.term===this._value(),i=this.menu.element.is(":visible"),s=e.altKey||e.ctrlKey||e.metaKey||e.shiftKey;(!t||t&&!i&&!s)&&(this.selectedItem=null,this.search(null,e))},this.options.delay)},search:function(e,t){return e=null!=e?e:this._value(),this.term=this._value(),e.length<this.options.minLength?this.close(t):this._trigger("search",t)!==!1?this._search(e):void 0},_search:function(e){this.pending++,this.element.addClass("ui-autocomplete-loading"),this.cancelSearch=!1,this.source({term:e},this._response())},_response:function(){var t=++this.requestIndex;return e.proxy(function(e){t===this.requestIndex&&this.__response(e),this.pending--,this.pending||this.element.removeClass("ui-autocomplete-loading")},this)},__response:function(e){e&&(e=this._normalize(e)),this._trigger("response",null,{content:e}),!this.options.disabled&&e&&e.length&&!this.cancelSearch?(this._suggest(e),this._trigger("open")):this._close()},close:function(e){this.cancelSearch=!0,this._close(e)},_close:function(e){this.menu.element.is(":visible")&&(this.menu.element.hide(),this.menu.blur(),this.isNewMenu=!0,this._trigger("close",e))},_change:function(e){this.previous!==this._value()&&this._trigger("change",e,{item:this.selectedItem})},_normalize:function(t){return t.length&&t[0].label&&t[0].value?t:e.map(t,function(t){return"string"==typeof t?{label:t,value:t}:e.extend({},t,{label:t.label||t.value,value:t.value||t.label})})},_suggest:function(t){var i=this.menu.element.empty();this._renderMenu(i,t),this.isNewMenu=!0,this.menu.refresh(),i.show(),this._resizeMenu(),i.position(e.extend({of:this.element},this.options.position)),this.options.autoFocus&&this.menu.next()},_resizeMenu:function(){var e=this.menu.element;e.outerWidth(Math.max(e.width("").outerWidth()+1,this.element.outerWidth()))},_renderMenu:function(t,i){var s=this;e.each(i,function(e,i){s._renderItemData(t,i)})},_renderItemData:function(e,t){return this._renderItem(e,t).data("ui-autocomplete-item",t)},_renderItem:function(t,i){return e("<li>").text(i.label).appendTo(t)},_move:function(e,t){return this.menu.element.is(":visible")?this.menu.isFirstItem()&&/^previous/.test(e)||this.menu.isLastItem()&&/^next/.test(e)?(this.isMultiLine||this._value(this.term),this.menu.blur(),void 0):(this.menu[e](t),void 0):(this.search(null,t),void 0)},widget:function(){return this.menu.element},_value:function(){return this.valueMethod.apply(this.element,arguments)},_keyEvent:function(e,t){(!this.isMultiLine||this.menu.element.is(":visible"))&&(this._move(e,t),t.preventDefault())}}),e.extend(e.ui.autocomplete,{escapeRegex:function(e){return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")},filter:function(t,i){var s=RegExp(e.ui.autocomplete.escapeRegex(i),"i");return e.grep(t,function(e){return s.test(e.label||e.value||e)})}}),e.widget("ui.autocomplete",e.ui.autocomplete,{options:{messages:{noResults:"No search results.",results:function(e){return e+(e>1?" results are":" result is")+" available, use up and down arrow keys to navigate."}}},__response:function(t){var i;this._superApply(arguments),this.options.disabled||this.cancelSearch||(i=t&&t.length?this.options.messages.results(t.length):this.options.messages.noResults,this.liveRegion.children().hide(),e("<div>").text(i).appendTo(this.liveRegion))}}),e.ui.autocomplete;var c,p="ui-button ui-widget ui-state-default ui-corner-all",f="ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only",m=function(){var t=e(this);setTimeout(function(){t.find(":ui-button").button("refresh")},1)},g=function(t){var i=t.name,s=t.form,n=e([]);return i&&(i=i.replace(/'/g,"\\'"),n=s?e(s).find("[name='"+i+"'][type=radio]"):e("[name='"+i+"'][type=radio]",t.ownerDocument).filter(function(){return!this.form})),n};e.widget("ui.button",{version:"1.11.4",defaultElement:"<button>",options:{disabled:null,text:!0,label:null,icons:{primary:null,secondary:null}},_create:function(){this.element.closest("form").unbind("reset"+this.eventNamespace).bind("reset"+this.eventNamespace,m),"boolean"!=typeof this.options.disabled?this.options.disabled=!!this.element.prop("disabled"):this.element.prop("disabled",this.options.disabled),this._determineButtonType(),this.hasTitle=!!this.buttonElement.attr("title");var t=this,i=this.options,s="checkbox"===this.type||"radio"===this.type,n=s?"":"ui-state-active";null===i.label&&(i.label="input"===this.type?this.buttonElement.val():this.buttonElement.html()),this._hoverable(this.buttonElement),this.buttonElement.addClass(p).attr("role","button").bind("mouseenter"+this.eventNamespace,function(){i.disabled||this===c&&e(this).addClass("ui-state-active")}).bind("mouseleave"+this.eventNamespace,function(){i.disabled||e(this).removeClass(n)}).bind("click"+this.eventNamespace,function(e){i.disabled&&(e.preventDefault(),e.stopImmediatePropagation())}),this._on({focus:function(){this.buttonElement.addClass("ui-state-focus")},blur:function(){this.buttonElement.removeClass("ui-state-focus")}}),s&&this.element.bind("change"+this.eventNamespace,function(){t.refresh()}),"checkbox"===this.type?this.buttonElement.bind("click"+this.eventNamespace,function(){return i.disabled?!1:void 0}):"radio"===this.type?this.buttonElement.bind("click"+this.eventNamespace,function(){if(i.disabled)return!1;e(this).addClass("ui-state-active"),t.buttonElement.attr("aria-pressed","true");var s=t.element[0];g(s).not(s).map(function(){return e(this).button("widget")[0]}).removeClass("ui-state-active").attr("aria-pressed","false")}):(this.buttonElement.bind("mousedown"+this.eventNamespace,function(){return i.disabled?!1:(e(this).addClass("ui-state-active"),c=this,t.document.one("mouseup",function(){c=null}),void 0)}).bind("mouseup"+this.eventNamespace,function(){return i.disabled?!1:(e(this).removeClass("ui-state-active"),void 0)}).bind("keydown"+this.eventNamespace,function(t){return i.disabled?!1:((t.keyCode===e.ui.keyCode.SPACE||t.keyCode===e.ui.keyCode.ENTER)&&e(this).addClass("ui-state-active"),void 0)}).bind("keyup"+this.eventNamespace+" blur"+this.eventNamespace,function(){e(this).removeClass("ui-state-active")}),this.buttonElement.is("a")&&this.buttonElement.keyup(function(t){t.keyCode===e.ui.keyCode.SPACE&&e(this).click()})),this._setOption("disabled",i.disabled),this._resetButton()},_determineButtonType:function(){var e,t,i;this.type=this.element.is("[type=checkbox]")?"checkbox":this.element.is("[type=radio]")?"radio":this.element.is("input")?"input":"button","checkbox"===this.type||"radio"===this.type?(e=this.element.parents().last(),t="label[for='"+this.element.attr("id")+"']",this.buttonElement=e.find(t),this.buttonElement.length||(e=e.length?e.siblings():this.element.siblings(),this.buttonElement=e.filter(t),this.buttonElement.length||(this.buttonElement=e.find(t))),this.element.addClass("ui-helper-hidden-accessible"),i=this.element.is(":checked"),i&&this.buttonElement.addClass("ui-state-active"),this.buttonElement.prop("aria-pressed",i)):this.buttonElement=this.element},widget:function(){return this.buttonElement},_destroy:function(){this.element.removeClass("ui-helper-hidden-accessible"),this.buttonElement.removeClass(p+" ui-state-active "+f).removeAttr("role").removeAttr("aria-pressed").html(this.buttonElement.find(".ui-button-text").html()),this.hasTitle||this.buttonElement.removeAttr("title")},_setOption:function(e,t){return this._super(e,t),"disabled"===e?(this.widget().toggleClass("ui-state-disabled",!!t),this.element.prop("disabled",!!t),t&&("checkbox"===this.type||"radio"===this.type?this.buttonElement.removeClass("ui-state-focus"):this.buttonElement.removeClass("ui-state-focus ui-state-active")),void 0):(this._resetButton(),void 0)},refresh:function(){var t=this.element.is("input, button")?this.element.is(":disabled"):this.element.hasClass("ui-button-disabled");t!==this.options.disabled&&this._setOption("disabled",t),"radio"===this.type?g(this.element[0]).each(function(){e(this).is(":checked")?e(this).button("widget").addClass("ui-state-active").attr("aria-pressed","true"):e(this).button("widget").removeClass("ui-state-active").attr("aria-pressed","false")}):"checkbox"===this.type&&(this.element.is(":checked")?this.buttonElement.addClass("ui-state-active").attr("aria-pressed","true"):this.buttonElement.removeClass("ui-state-active").attr("aria-pressed","false"))},_resetButton:function(){if("input"===this.type)return this.options.label&&this.element.val(this.options.label),void 0;var t=this.buttonElement.removeClass(f),i=e("<span></span>",this.document[0]).addClass("ui-button-text").html(this.options.label).appendTo(t.empty()).text(),s=this.options.icons,n=s.primary&&s.secondary,a=[];s.primary||s.secondary?(this.options.text&&a.push("ui-button-text-icon"+(n?"s":s.primary?"-primary":"-secondary")),s.primary&&t.prepend("<span class='ui-button-icon-primary ui-icon "+s.primary+"'></span>"),s.secondary&&t.append("<span class='ui-button-icon-secondary ui-icon "+s.secondary+"'></span>"),this.options.text||(a.push(n?"ui-button-icons-only":"ui-button-icon-only"),this.hasTitle||t.attr("title",e.trim(i)))):a.push("ui-button-text-only"),t.addClass(a.join(" "))}}),e.widget("ui.buttonset",{version:"1.11.4",options:{items:"button, input[type=button], input[type=submit], input[type=reset], input[type=checkbox], input[type=radio], a, :data(ui-button)"},_create:function(){this.element.addClass("ui-buttonset")},_init:function(){this.refresh()},_setOption:function(e,t){"disabled"===e&&this.buttons.button("option",e,t),this._super(e,t)},refresh:function(){var t="rtl"===this.element.css("direction"),i=this.element.find(this.options.items),s=i.filter(":ui-button");i.not(":ui-button").button(),s.button("refresh"),this.buttons=i.map(function(){return e(this).button("widget")[0]}).removeClass("ui-corner-all ui-corner-left ui-corner-right").filter(":first").addClass(t?"ui-corner-right":"ui-corner-left").end().filter(":last").addClass(t?"ui-corner-left":"ui-corner-right").end().end()},_destroy:function(){this.element.removeClass("ui-buttonset"),this.buttons.map(function(){return e(this).button("widget")[0]}).removeClass("ui-corner-left ui-corner-right").end().button("destroy")}}),e.ui.button,e.extend(e.ui,{datepicker:{version:"1.11.4"}});var v;e.extend(n.prototype,{markerClassName:"hasDatepicker",maxRows:4,_widgetDatepicker:function(){return this.dpDiv},setDefaults:function(e){return r(this._defaults,e||{}),this},_attachDatepicker:function(t,i){var s,n,a;s=t.nodeName.toLowerCase(),n="div"===s||"span"===s,t.id||(this.uuid+=1,t.id="dp"+this.uuid),a=this._newInst(e(t),n),a.settings=e.extend({},i||{}),"input"===s?this._connectDatepicker(t,a):n&&this._inlineDatepicker(t,a)},_newInst:function(t,i){var s=t[0].id.replace(/([^A-Za-z0-9_\-])/g,"\\\\$1");return{id:s,input:t,selectedDay:0,selectedMonth:0,selectedYear:0,drawMonth:0,drawYear:0,inline:i,dpDiv:i?a(e("<div class='"+this._inlineClass+" ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")):this.dpDiv}},_connectDatepicker:function(t,i){var s=e(t);i.append=e([]),i.trigger=e([]),s.hasClass(this.markerClassName)||(this._attachments(s,i),s.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp),this._autoSize(i),e.data(t,"datepicker",i),i.settings.disabled&&this._disableDatepicker(t))},_attachments:function(t,i){var s,n,a,o=this._get(i,"appendText"),r=this._get(i,"isRTL");i.append&&i.append.remove(),o&&(i.append=e("<span class='"+this._appendClass+"'>"+o+"</span>"),t[r?"before":"after"](i.append)),t.unbind("focus",this._showDatepicker),i.trigger&&i.trigger.remove(),s=this._get(i,"showOn"),("focus"===s||"both"===s)&&t.focus(this._showDatepicker),("button"===s||"both"===s)&&(n=this._get(i,"buttonText"),a=this._get(i,"buttonImage"),i.trigger=e(this._get(i,"buttonImageOnly")?e("<img/>").addClass(this._triggerClass).attr({src:a,alt:n,title:n}):e("<button type='button'></button>").addClass(this._triggerClass).html(a?e("<img/>").attr({src:a,alt:n,title:n}):n)),t[r?"before":"after"](i.trigger),i.trigger.click(function(){return e.datepicker._datepickerShowing&&e.datepicker._lastInput===t[0]?e.datepicker._hideDatepicker():e.datepicker._datepickerShowing&&e.datepicker._lastInput!==t[0]?(e.datepicker._hideDatepicker(),e.datepicker._showDatepicker(t[0])):e.datepicker._showDatepicker(t[0]),!1}))},_autoSize:function(e){if(this._get(e,"autoSize")&&!e.inline){var t,i,s,n,a=new Date(2009,11,20),o=this._get(e,"dateFormat");o.match(/[DM]/)&&(t=function(e){for(i=0,s=0,n=0;e.length>n;n++)e[n].length>i&&(i=e[n].length,s=n);return s},a.setMonth(t(this._get(e,o.match(/MM/)?"monthNames":"monthNamesShort"))),a.setDate(t(this._get(e,o.match(/DD/)?"dayNames":"dayNamesShort"))+20-a.getDay())),e.input.attr("size",this._formatDate(e,a).length)}},_inlineDatepicker:function(t,i){var s=e(t);s.hasClass(this.markerClassName)||(s.addClass(this.markerClassName).append(i.dpDiv),e.data(t,"datepicker",i),this._setDate(i,this._getDefaultDate(i),!0),this._updateDatepicker(i),this._updateAlternate(i),i.settings.disabled&&this._disableDatepicker(t),i.dpDiv.css("display","block"))},_dialogDatepicker:function(t,i,s,n,a){var o,h,l,u,d,c=this._dialogInst;return c||(this.uuid+=1,o="dp"+this.uuid,this._dialogInput=e("<input type='text' id='"+o+"' style='position: absolute; top: -100px; width: 0px;'/>"),this._dialogInput.keydown(this._doKeyDown),e("body").append(this._dialogInput),c=this._dialogInst=this._newInst(this._dialogInput,!1),c.settings={},e.data(this._dialogInput[0],"datepicker",c)),r(c.settings,n||{}),i=i&&i.constructor===Date?this._formatDate(c,i):i,this._dialogInput.val(i),this._pos=a?a.length?a:[a.pageX,a.pageY]:null,this._pos||(h=document.documentElement.clientWidth,l=document.documentElement.clientHeight,u=document.documentElement.scrollLeft||document.body.scrollLeft,d=document.documentElement.scrollTop||document.body.scrollTop,this._pos=[h/2-100+u,l/2-150+d]),this._dialogInput.css("left",this._pos[0]+20+"px").css("top",this._pos[1]+"px"),c.settings.onSelect=s,this._inDialog=!0,this.dpDiv.addClass(this._dialogClass),this._showDatepicker(this._dialogInput[0]),e.blockUI&&e.blockUI(this.dpDiv),e.data(this._dialogInput[0],"datepicker",c),this},_destroyDatepicker:function(t){var i,s=e(t),n=e.data(t,"datepicker");s.hasClass(this.markerClassName)&&(i=t.nodeName.toLowerCase(),e.removeData(t,"datepicker"),"input"===i?(n.append.remove(),n.trigger.remove(),s.removeClass(this.markerClassName).unbind("focus",this._showDatepicker).unbind("keydown",this._doKeyDown).unbind("keypress",this._doKeyPress).unbind("keyup",this._doKeyUp)):("div"===i||"span"===i)&&s.removeClass(this.markerClassName).empty(),v===n&&(v=null))},_enableDatepicker:function(t){var i,s,n=e(t),a=e.data(t,"datepicker");n.hasClass(this.markerClassName)&&(i=t.nodeName.toLowerCase(),"input"===i?(t.disabled=!1,a.trigger.filter("button").each(function(){this.disabled=!1}).end().filter("img").css({opacity:"1.0",cursor:""})):("div"===i||"span"===i)&&(s=n.children("."+this._inlineClass),s.children().removeClass("ui-state-disabled"),s.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled",!1)),this._disabledInputs=e.map(this._disabledInputs,function(e){return e===t?null:e}))},_disableDatepicker:function(t){var i,s,n=e(t),a=e.data(t,"datepicker");n.hasClass(this.markerClassName)&&(i=t.nodeName.toLowerCase(),"input"===i?(t.disabled=!0,a.trigger.filter("button").each(function(){this.disabled=!0}).end().filter("img").css({opacity:"0.5",cursor:"default"})):("div"===i||"span"===i)&&(s=n.children("."+this._inlineClass),s.children().addClass("ui-state-disabled"),s.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled",!0)),this._disabledInputs=e.map(this._disabledInputs,function(e){return e===t?null:e}),this._disabledInputs[this._disabledInputs.length]=t)},_isDisabledDatepicker:function(e){if(!e)return!1;for(var t=0;this._disabledInputs.length>t;t++)if(this._disabledInputs[t]===e)return!0;return!1},_getInst:function(t){try{return e.data(t,"datepicker")}catch(i){throw"Missing instance data for this datepicker"}},_optionDatepicker:function(t,i,s){var n,a,o,h,l=this._getInst(t);return 2===arguments.length&&"string"==typeof i?"defaults"===i?e.extend({},e.datepicker._defaults):l?"all"===i?e.extend({},l.settings):this._get(l,i):null:(n=i||{},"string"==typeof i&&(n={},n[i]=s),l&&(this._curInst===l&&this._hideDatepicker(),a=this._getDateDatepicker(t,!0),o=this._getMinMaxDate(l,"min"),h=this._getMinMaxDate(l,"max"),r(l.settings,n),null!==o&&void 0!==n.dateFormat&&void 0===n.minDate&&(l.settings.minDate=this._formatDate(l,o)),null!==h&&void 0!==n.dateFormat&&void 0===n.maxDate&&(l.settings.maxDate=this._formatDate(l,h)),"disabled"in n&&(n.disabled?this._disableDatepicker(t):this._enableDatepicker(t)),this._attachments(e(t),l),this._autoSize(l),this._setDate(l,a),this._updateAlternate(l),this._updateDatepicker(l)),void 0)},_changeDatepicker:function(e,t,i){this._optionDatepicker(e,t,i)},_refreshDatepicker:function(e){var t=this._getInst(e);t&&this._updateDatepicker(t)},_setDateDatepicker:function(e,t){var i=this._getInst(e);i&&(this._setDate(i,t),this._updateDatepicker(i),this._updateAlternate(i))},_getDateDatepicker:function(e,t){var i=this._getInst(e);return i&&!i.inline&&this._setDateFromField(i,t),i?this._getDate(i):null},_doKeyDown:function(t){var i,s,n,a=e.datepicker._getInst(t.target),o=!0,r=a.dpDiv.is(".ui-datepicker-rtl");if(a._keyEvent=!0,e.datepicker._datepickerShowing)switch(t.keyCode){case 9:e.datepicker._hideDatepicker(),o=!1;break;case 13:return n=e("td."+e.datepicker._dayOverClass+":not(."+e.datepicker._currentClass+")",a.dpDiv),n[0]&&e.datepicker._selectDay(t.target,a.selectedMonth,a.selectedYear,n[0]),i=e.datepicker._get(a,"onSelect"),i?(s=e.datepicker._formatDate(a),i.apply(a.input?a.input[0]:null,[s,a])):e.datepicker._hideDatepicker(),!1;case 27:e.datepicker._hideDatepicker();break;case 33:e.datepicker._adjustDate(t.target,t.ctrlKey?-e.datepicker._get(a,"stepBigMonths"):-e.datepicker._get(a,"stepMonths"),"M");break;case 34:e.datepicker._adjustDate(t.target,t.ctrlKey?+e.datepicker._get(a,"stepBigMonths"):+e.datepicker._get(a,"stepMonths"),"M");break;case 35:(t.ctrlKey||t.metaKey)&&e.datepicker._clearDate(t.target),o=t.ctrlKey||t.metaKey;break;case 36:(t.ctrlKey||t.metaKey)&&e.datepicker._gotoToday(t.target),o=t.ctrlKey||t.metaKey;break;case 37:(t.ctrlKey||t.metaKey)&&e.datepicker._adjustDate(t.target,r?1:-1,"D"),o=t.ctrlKey||t.metaKey,t.originalEvent.altKey&&e.datepicker._adjustDate(t.target,t.ctrlKey?-e.datepicker._get(a,"stepBigMonths"):-e.datepicker._get(a,"stepMonths"),"M");break;case 38:(t.ctrlKey||t.metaKey)&&e.datepicker._adjustDate(t.target,-7,"D"),o=t.ctrlKey||t.metaKey;break;case 39:(t.ctrlKey||t.metaKey)&&e.datepicker._adjustDate(t.target,r?-1:1,"D"),o=t.ctrlKey||t.metaKey,t.originalEvent.altKey&&e.datepicker._adjustDate(t.target,t.ctrlKey?+e.datepicker._get(a,"stepBigMonths"):+e.datepicker._get(a,"stepMonths"),"M");break;case 40:(t.ctrlKey||t.metaKey)&&e.datepicker._adjustDate(t.target,7,"D"),o=t.ctrlKey||t.metaKey;break;default:o=!1}else 36===t.keyCode&&t.ctrlKey?e.datepicker._showDatepicker(this):o=!1;o&&(t.preventDefault(),t.stopPropagation())},_doKeyPress:function(t){var i,s,n=e.datepicker._getInst(t.target);
return e.datepicker._get(n,"constrainInput")?(i=e.datepicker._possibleChars(e.datepicker._get(n,"dateFormat")),s=String.fromCharCode(null==t.charCode?t.keyCode:t.charCode),t.ctrlKey||t.metaKey||" ">s||!i||i.indexOf(s)>-1):void 0},_doKeyUp:function(t){var i,s=e.datepicker._getInst(t.target);if(s.input.val()!==s.lastVal)try{i=e.datepicker.parseDate(e.datepicker._get(s,"dateFormat"),s.input?s.input.val():null,e.datepicker._getFormatConfig(s)),i&&(e.datepicker._setDateFromField(s),e.datepicker._updateAlternate(s),e.datepicker._updateDatepicker(s))}catch(n){}return!0},_showDatepicker:function(t){if(t=t.target||t,"input"!==t.nodeName.toLowerCase()&&(t=e("input",t.parentNode)[0]),!e.datepicker._isDisabledDatepicker(t)&&e.datepicker._lastInput!==t){var i,n,a,o,h,l,u;i=e.datepicker._getInst(t),e.datepicker._curInst&&e.datepicker._curInst!==i&&(e.datepicker._curInst.dpDiv.stop(!0,!0),i&&e.datepicker._datepickerShowing&&e.datepicker._hideDatepicker(e.datepicker._curInst.input[0])),n=e.datepicker._get(i,"beforeShow"),a=n?n.apply(t,[t,i]):{},a!==!1&&(r(i.settings,a),i.lastVal=null,e.datepicker._lastInput=t,e.datepicker._setDateFromField(i),e.datepicker._inDialog&&(t.value=""),e.datepicker._pos||(e.datepicker._pos=e.datepicker._findPos(t),e.datepicker._pos[1]+=t.offsetHeight),o=!1,e(t).parents().each(function(){return o|="fixed"===e(this).css("position"),!o}),h={left:e.datepicker._pos[0],top:e.datepicker._pos[1]},e.datepicker._pos=null,i.dpDiv.empty(),i.dpDiv.css({position:"absolute",display:"block",top:"-1000px"}),e.datepicker._updateDatepicker(i),h=e.datepicker._checkOffset(i,h,o),i.dpDiv.css({position:e.datepicker._inDialog&&e.blockUI?"static":o?"fixed":"absolute",display:"none",left:h.left+"px",top:h.top+"px"}),i.inline||(l=e.datepicker._get(i,"showAnim"),u=e.datepicker._get(i,"duration"),i.dpDiv.css("z-index",s(e(t))+1),e.datepicker._datepickerShowing=!0,e.effects&&e.effects.effect[l]?i.dpDiv.show(l,e.datepicker._get(i,"showOptions"),u):i.dpDiv[l||"show"](l?u:null),e.datepicker._shouldFocusInput(i)&&i.input.focus(),e.datepicker._curInst=i))}},_updateDatepicker:function(t){this.maxRows=4,v=t,t.dpDiv.empty().append(this._generateHTML(t)),this._attachHandlers(t);var i,s=this._getNumberOfMonths(t),n=s[1],a=17,r=t.dpDiv.find("."+this._dayOverClass+" a");r.length>0&&o.apply(r.get(0)),t.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""),n>1&&t.dpDiv.addClass("ui-datepicker-multi-"+n).css("width",a*n+"em"),t.dpDiv[(1!==s[0]||1!==s[1]?"add":"remove")+"Class"]("ui-datepicker-multi"),t.dpDiv[(this._get(t,"isRTL")?"add":"remove")+"Class"]("ui-datepicker-rtl"),t===e.datepicker._curInst&&e.datepicker._datepickerShowing&&e.datepicker._shouldFocusInput(t)&&t.input.focus(),t.yearshtml&&(i=t.yearshtml,setTimeout(function(){i===t.yearshtml&&t.yearshtml&&t.dpDiv.find("select.ui-datepicker-year:first").replaceWith(t.yearshtml),i=t.yearshtml=null},0))},_shouldFocusInput:function(e){return e.input&&e.input.is(":visible")&&!e.input.is(":disabled")&&!e.input.is(":focus")},_checkOffset:function(t,i,s){var n=t.dpDiv.outerWidth(),a=t.dpDiv.outerHeight(),o=t.input?t.input.outerWidth():0,r=t.input?t.input.outerHeight():0,h=document.documentElement.clientWidth+(s?0:e(document).scrollLeft()),l=document.documentElement.clientHeight+(s?0:e(document).scrollTop());return i.left-=this._get(t,"isRTL")?n-o:0,i.left-=s&&i.left===t.input.offset().left?e(document).scrollLeft():0,i.top-=s&&i.top===t.input.offset().top+r?e(document).scrollTop():0,i.left-=Math.min(i.left,i.left+n>h&&h>n?Math.abs(i.left+n-h):0),i.top-=Math.min(i.top,i.top+a>l&&l>a?Math.abs(a+r):0),i},_findPos:function(t){for(var i,s=this._getInst(t),n=this._get(s,"isRTL");t&&("hidden"===t.type||1!==t.nodeType||e.expr.filters.hidden(t));)t=t[n?"previousSibling":"nextSibling"];return i=e(t).offset(),[i.left,i.top]},_hideDatepicker:function(t){var i,s,n,a,o=this._curInst;!o||t&&o!==e.data(t,"datepicker")||this._datepickerShowing&&(i=this._get(o,"showAnim"),s=this._get(o,"duration"),n=function(){e.datepicker._tidyDialog(o)},e.effects&&(e.effects.effect[i]||e.effects[i])?o.dpDiv.hide(i,e.datepicker._get(o,"showOptions"),s,n):o.dpDiv["slideDown"===i?"slideUp":"fadeIn"===i?"fadeOut":"hide"](i?s:null,n),i||n(),this._datepickerShowing=!1,a=this._get(o,"onClose"),a&&a.apply(o.input?o.input[0]:null,[o.input?o.input.val():"",o]),this._lastInput=null,this._inDialog&&(this._dialogInput.css({position:"absolute",left:"0",top:"-100px"}),e.blockUI&&(e.unblockUI(),e("body").append(this.dpDiv))),this._inDialog=!1)},_tidyDialog:function(e){e.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar")},_checkExternalClick:function(t){if(e.datepicker._curInst){var i=e(t.target),s=e.datepicker._getInst(i[0]);(i[0].id!==e.datepicker._mainDivId&&0===i.parents("#"+e.datepicker._mainDivId).length&&!i.hasClass(e.datepicker.markerClassName)&&!i.closest("."+e.datepicker._triggerClass).length&&e.datepicker._datepickerShowing&&(!e.datepicker._inDialog||!e.blockUI)||i.hasClass(e.datepicker.markerClassName)&&e.datepicker._curInst!==s)&&e.datepicker._hideDatepicker()}},_adjustDate:function(t,i,s){var n=e(t),a=this._getInst(n[0]);this._isDisabledDatepicker(n[0])||(this._adjustInstDate(a,i+("M"===s?this._get(a,"showCurrentAtPos"):0),s),this._updateDatepicker(a))},_gotoToday:function(t){var i,s=e(t),n=this._getInst(s[0]);this._get(n,"gotoCurrent")&&n.currentDay?(n.selectedDay=n.currentDay,n.drawMonth=n.selectedMonth=n.currentMonth,n.drawYear=n.selectedYear=n.currentYear):(i=new Date,n.selectedDay=i.getDate(),n.drawMonth=n.selectedMonth=i.getMonth(),n.drawYear=n.selectedYear=i.getFullYear()),this._notifyChange(n),this._adjustDate(s)},_selectMonthYear:function(t,i,s){var n=e(t),a=this._getInst(n[0]);a["selected"+("M"===s?"Month":"Year")]=a["draw"+("M"===s?"Month":"Year")]=parseInt(i.options[i.selectedIndex].value,10),this._notifyChange(a),this._adjustDate(n)},_selectDay:function(t,i,s,n){var a,o=e(t);e(n).hasClass(this._unselectableClass)||this._isDisabledDatepicker(o[0])||(a=this._getInst(o[0]),a.selectedDay=a.currentDay=e("a",n).html(),a.selectedMonth=a.currentMonth=i,a.selectedYear=a.currentYear=s,this._selectDate(t,this._formatDate(a,a.currentDay,a.currentMonth,a.currentYear)))},_clearDate:function(t){var i=e(t);this._selectDate(i,"")},_selectDate:function(t,i){var s,n=e(t),a=this._getInst(n[0]);i=null!=i?i:this._formatDate(a),a.input&&a.input.val(i),this._updateAlternate(a),s=this._get(a,"onSelect"),s?s.apply(a.input?a.input[0]:null,[i,a]):a.input&&a.input.trigger("change"),a.inline?this._updateDatepicker(a):(this._hideDatepicker(),this._lastInput=a.input[0],"object"!=typeof a.input[0]&&a.input.focus(),this._lastInput=null)},_updateAlternate:function(t){var i,s,n,a=this._get(t,"altField");a&&(i=this._get(t,"altFormat")||this._get(t,"dateFormat"),s=this._getDate(t),n=this.formatDate(i,s,this._getFormatConfig(t)),e(a).each(function(){e(this).val(n)}))},noWeekends:function(e){var t=e.getDay();return[t>0&&6>t,""]},iso8601Week:function(e){var t,i=new Date(e.getTime());return i.setDate(i.getDate()+4-(i.getDay()||7)),t=i.getTime(),i.setMonth(0),i.setDate(1),Math.floor(Math.round((t-i)/864e5)/7)+1},parseDate:function(t,i,s){if(null==t||null==i)throw"Invalid arguments";if(i="object"==typeof i?""+i:i+"",""===i)return null;var n,a,o,r,h=0,l=(s?s.shortYearCutoff:null)||this._defaults.shortYearCutoff,u="string"!=typeof l?l:(new Date).getFullYear()%100+parseInt(l,10),d=(s?s.dayNamesShort:null)||this._defaults.dayNamesShort,c=(s?s.dayNames:null)||this._defaults.dayNames,p=(s?s.monthNamesShort:null)||this._defaults.monthNamesShort,f=(s?s.monthNames:null)||this._defaults.monthNames,m=-1,g=-1,v=-1,y=-1,b=!1,_=function(e){var i=t.length>n+1&&t.charAt(n+1)===e;return i&&n++,i},x=function(e){var t=_(e),s="@"===e?14:"!"===e?20:"y"===e&&t?4:"o"===e?3:2,n="y"===e?s:1,a=RegExp("^\\d{"+n+","+s+"}"),o=i.substring(h).match(a);if(!o)throw"Missing number at position "+h;return h+=o[0].length,parseInt(o[0],10)},w=function(t,s,n){var a=-1,o=e.map(_(t)?n:s,function(e,t){return[[t,e]]}).sort(function(e,t){return-(e[1].length-t[1].length)});if(e.each(o,function(e,t){var s=t[1];return i.substr(h,s.length).toLowerCase()===s.toLowerCase()?(a=t[0],h+=s.length,!1):void 0}),-1!==a)return a+1;throw"Unknown name at position "+h},k=function(){if(i.charAt(h)!==t.charAt(n))throw"Unexpected literal at position "+h;h++};for(n=0;t.length>n;n++)if(b)"'"!==t.charAt(n)||_("'")?k():b=!1;else switch(t.charAt(n)){case"d":v=x("d");break;case"D":w("D",d,c);break;case"o":y=x("o");break;case"m":g=x("m");break;case"M":g=w("M",p,f);break;case"y":m=x("y");break;case"@":r=new Date(x("@")),m=r.getFullYear(),g=r.getMonth()+1,v=r.getDate();break;case"!":r=new Date((x("!")-this._ticksTo1970)/1e4),m=r.getFullYear(),g=r.getMonth()+1,v=r.getDate();break;case"'":_("'")?k():b=!0;break;default:k()}if(i.length>h&&(o=i.substr(h),!/^\s+/.test(o)))throw"Extra/unparsed characters found in date: "+o;if(-1===m?m=(new Date).getFullYear():100>m&&(m+=(new Date).getFullYear()-(new Date).getFullYear()%100+(u>=m?0:-100)),y>-1)for(g=1,v=y;;){if(a=this._getDaysInMonth(m,g-1),a>=v)break;g++,v-=a}if(r=this._daylightSavingAdjust(new Date(m,g-1,v)),r.getFullYear()!==m||r.getMonth()+1!==g||r.getDate()!==v)throw"Invalid date";return r},ATOM:"yy-mm-dd",COOKIE:"D, dd M yy",ISO_8601:"yy-mm-dd",RFC_822:"D, d M y",RFC_850:"DD, dd-M-y",RFC_1036:"D, d M y",RFC_1123:"D, d M yy",RFC_2822:"D, d M yy",RSS:"D, d M y",TICKS:"!",TIMESTAMP:"@",W3C:"yy-mm-dd",_ticksTo1970:1e7*60*60*24*(718685+Math.floor(492.5)-Math.floor(19.7)+Math.floor(4.925)),formatDate:function(e,t,i){if(!t)return"";var s,n=(i?i.dayNamesShort:null)||this._defaults.dayNamesShort,a=(i?i.dayNames:null)||this._defaults.dayNames,o=(i?i.monthNamesShort:null)||this._defaults.monthNamesShort,r=(i?i.monthNames:null)||this._defaults.monthNames,h=function(t){var i=e.length>s+1&&e.charAt(s+1)===t;return i&&s++,i},l=function(e,t,i){var s=""+t;if(h(e))for(;i>s.length;)s="0"+s;return s},u=function(e,t,i,s){return h(e)?s[t]:i[t]},d="",c=!1;if(t)for(s=0;e.length>s;s++)if(c)"'"!==e.charAt(s)||h("'")?d+=e.charAt(s):c=!1;else switch(e.charAt(s)){case"d":d+=l("d",t.getDate(),2);break;case"D":d+=u("D",t.getDay(),n,a);break;case"o":d+=l("o",Math.round((new Date(t.getFullYear(),t.getMonth(),t.getDate()).getTime()-new Date(t.getFullYear(),0,0).getTime())/864e5),3);break;case"m":d+=l("m",t.getMonth()+1,2);break;case"M":d+=u("M",t.getMonth(),o,r);break;case"y":d+=h("y")?t.getFullYear():(10>t.getYear()%100?"0":"")+t.getYear()%100;break;case"@":d+=t.getTime();break;case"!":d+=1e4*t.getTime()+this._ticksTo1970;break;case"'":h("'")?d+="'":c=!0;break;default:d+=e.charAt(s)}return d},_possibleChars:function(e){var t,i="",s=!1,n=function(i){var s=e.length>t+1&&e.charAt(t+1)===i;return s&&t++,s};for(t=0;e.length>t;t++)if(s)"'"!==e.charAt(t)||n("'")?i+=e.charAt(t):s=!1;else switch(e.charAt(t)){case"d":case"m":case"y":case"@":i+="0123456789";break;case"D":case"M":return null;case"'":n("'")?i+="'":s=!0;break;default:i+=e.charAt(t)}return i},_get:function(e,t){return void 0!==e.settings[t]?e.settings[t]:this._defaults[t]},_setDateFromField:function(e,t){if(e.input.val()!==e.lastVal){var i=this._get(e,"dateFormat"),s=e.lastVal=e.input?e.input.val():null,n=this._getDefaultDate(e),a=n,o=this._getFormatConfig(e);try{a=this.parseDate(i,s,o)||n}catch(r){s=t?"":s}e.selectedDay=a.getDate(),e.drawMonth=e.selectedMonth=a.getMonth(),e.drawYear=e.selectedYear=a.getFullYear(),e.currentDay=s?a.getDate():0,e.currentMonth=s?a.getMonth():0,e.currentYear=s?a.getFullYear():0,this._adjustInstDate(e)}},_getDefaultDate:function(e){return this._restrictMinMax(e,this._determineDate(e,this._get(e,"defaultDate"),new Date))},_determineDate:function(t,i,s){var n=function(e){var t=new Date;return t.setDate(t.getDate()+e),t},a=function(i){try{return e.datepicker.parseDate(e.datepicker._get(t,"dateFormat"),i,e.datepicker._getFormatConfig(t))}catch(s){}for(var n=(i.toLowerCase().match(/^c/)?e.datepicker._getDate(t):null)||new Date,a=n.getFullYear(),o=n.getMonth(),r=n.getDate(),h=/([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g,l=h.exec(i);l;){switch(l[2]||"d"){case"d":case"D":r+=parseInt(l[1],10);break;case"w":case"W":r+=7*parseInt(l[1],10);break;case"m":case"M":o+=parseInt(l[1],10),r=Math.min(r,e.datepicker._getDaysInMonth(a,o));break;case"y":case"Y":a+=parseInt(l[1],10),r=Math.min(r,e.datepicker._getDaysInMonth(a,o))}l=h.exec(i)}return new Date(a,o,r)},o=null==i||""===i?s:"string"==typeof i?a(i):"number"==typeof i?isNaN(i)?s:n(i):new Date(i.getTime());return o=o&&"Invalid Date"==""+o?s:o,o&&(o.setHours(0),o.setMinutes(0),o.setSeconds(0),o.setMilliseconds(0)),this._daylightSavingAdjust(o)},_daylightSavingAdjust:function(e){return e?(e.setHours(e.getHours()>12?e.getHours()+2:0),e):null},_setDate:function(e,t,i){var s=!t,n=e.selectedMonth,a=e.selectedYear,o=this._restrictMinMax(e,this._determineDate(e,t,new Date));e.selectedDay=e.currentDay=o.getDate(),e.drawMonth=e.selectedMonth=e.currentMonth=o.getMonth(),e.drawYear=e.selectedYear=e.currentYear=o.getFullYear(),n===e.selectedMonth&&a===e.selectedYear||i||this._notifyChange(e),this._adjustInstDate(e),e.input&&e.input.val(s?"":this._formatDate(e))},_getDate:function(e){var t=!e.currentYear||e.input&&""===e.input.val()?null:this._daylightSavingAdjust(new Date(e.currentYear,e.currentMonth,e.currentDay));return t},_attachHandlers:function(t){var i=this._get(t,"stepMonths"),s="#"+t.id.replace(/\\\\/g,"\\");t.dpDiv.find("[data-handler]").map(function(){var t={prev:function(){e.datepicker._adjustDate(s,-i,"M")},next:function(){e.datepicker._adjustDate(s,+i,"M")},hide:function(){e.datepicker._hideDatepicker()},today:function(){e.datepicker._gotoToday(s)},selectDay:function(){return e.datepicker._selectDay(s,+this.getAttribute("data-month"),+this.getAttribute("data-year"),this),!1},selectMonth:function(){return e.datepicker._selectMonthYear(s,this,"M"),!1},selectYear:function(){return e.datepicker._selectMonthYear(s,this,"Y"),!1}};e(this).bind(this.getAttribute("data-event"),t[this.getAttribute("data-handler")])})},_generateHTML:function(e){var t,i,s,n,a,o,r,h,l,u,d,c,p,f,m,g,v,y,b,_,x,w,k,T,D,S,M,C,N,A,P,I,H,z,F,E,O,j,W,L=new Date,R=this._daylightSavingAdjust(new Date(L.getFullYear(),L.getMonth(),L.getDate())),Y=this._get(e,"isRTL"),B=this._get(e,"showButtonPanel"),J=this._get(e,"hideIfNoPrevNext"),q=this._get(e,"navigationAsDateFormat"),K=this._getNumberOfMonths(e),V=this._get(e,"showCurrentAtPos"),U=this._get(e,"stepMonths"),Q=1!==K[0]||1!==K[1],G=this._daylightSavingAdjust(e.currentDay?new Date(e.currentYear,e.currentMonth,e.currentDay):new Date(9999,9,9)),X=this._getMinMaxDate(e,"min"),$=this._getMinMaxDate(e,"max"),Z=e.drawMonth-V,et=e.drawYear;if(0>Z&&(Z+=12,et--),$)for(t=this._daylightSavingAdjust(new Date($.getFullYear(),$.getMonth()-K[0]*K[1]+1,$.getDate())),t=X&&X>t?X:t;this._daylightSavingAdjust(new Date(et,Z,1))>t;)Z--,0>Z&&(Z=11,et--);for(e.drawMonth=Z,e.drawYear=et,i=this._get(e,"prevText"),i=q?this.formatDate(i,this._daylightSavingAdjust(new Date(et,Z-U,1)),this._getFormatConfig(e)):i,s=this._canAdjustMonth(e,-1,et,Z)?"<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='"+i+"'><span class='ui-icon ui-icon-circle-triangle-"+(Y?"e":"w")+"'>"+i+"</span></a>":J?"":"<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='"+i+"'><span class='ui-icon ui-icon-circle-triangle-"+(Y?"e":"w")+"'>"+i+"</span></a>",n=this._get(e,"nextText"),n=q?this.formatDate(n,this._daylightSavingAdjust(new Date(et,Z+U,1)),this._getFormatConfig(e)):n,a=this._canAdjustMonth(e,1,et,Z)?"<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='"+n+"'><span class='ui-icon ui-icon-circle-triangle-"+(Y?"w":"e")+"'>"+n+"</span></a>":J?"":"<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='"+n+"'><span class='ui-icon ui-icon-circle-triangle-"+(Y?"w":"e")+"'>"+n+"</span></a>",o=this._get(e,"currentText"),r=this._get(e,"gotoCurrent")&&e.currentDay?G:R,o=q?this.formatDate(o,r,this._getFormatConfig(e)):o,h=e.inline?"":"<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>"+this._get(e,"closeText")+"</button>",l=B?"<div class='ui-datepicker-buttonpane ui-widget-content'>"+(Y?h:"")+(this._isInRange(e,r)?"<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>"+o+"</button>":"")+(Y?"":h)+"</div>":"",u=parseInt(this._get(e,"firstDay"),10),u=isNaN(u)?0:u,d=this._get(e,"showWeek"),c=this._get(e,"dayNames"),p=this._get(e,"dayNamesMin"),f=this._get(e,"monthNames"),m=this._get(e,"monthNamesShort"),g=this._get(e,"beforeShowDay"),v=this._get(e,"showOtherMonths"),y=this._get(e,"selectOtherMonths"),b=this._getDefaultDate(e),_="",w=0;K[0]>w;w++){for(k="",this.maxRows=4,T=0;K[1]>T;T++){if(D=this._daylightSavingAdjust(new Date(et,Z,e.selectedDay)),S=" ui-corner-all",M="",Q){if(M+="<div class='ui-datepicker-group",K[1]>1)switch(T){case 0:M+=" ui-datepicker-group-first",S=" ui-corner-"+(Y?"right":"left");break;case K[1]-1:M+=" ui-datepicker-group-last",S=" ui-corner-"+(Y?"left":"right");break;default:M+=" ui-datepicker-group-middle",S=""}M+="'>"}for(M+="<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix"+S+"'>"+(/all|left/.test(S)&&0===w?Y?a:s:"")+(/all|right/.test(S)&&0===w?Y?s:a:"")+this._generateMonthYearHeader(e,Z,et,X,$,w>0||T>0,f,m)+"</div><table class='ui-datepicker-calendar'><thead>"+"<tr>",C=d?"<th class='ui-datepicker-week-col'>"+this._get(e,"weekHeader")+"</th>":"",x=0;7>x;x++)N=(x+u)%7,C+="<th scope='col'"+((x+u+6)%7>=5?" class='ui-datepicker-week-end'":"")+">"+"<span title='"+c[N]+"'>"+p[N]+"</span></th>";for(M+=C+"</tr></thead><tbody>",A=this._getDaysInMonth(et,Z),et===e.selectedYear&&Z===e.selectedMonth&&(e.selectedDay=Math.min(e.selectedDay,A)),P=(this._getFirstDayOfMonth(et,Z)-u+7)%7,I=Math.ceil((P+A)/7),H=Q?this.maxRows>I?this.maxRows:I:I,this.maxRows=H,z=this._daylightSavingAdjust(new Date(et,Z,1-P)),F=0;H>F;F++){for(M+="<tr>",E=d?"<td class='ui-datepicker-week-col'>"+this._get(e,"calculateWeek")(z)+"</td>":"",x=0;7>x;x++)O=g?g.apply(e.input?e.input[0]:null,[z]):[!0,""],j=z.getMonth()!==Z,W=j&&!y||!O[0]||X&&X>z||$&&z>$,E+="<td class='"+((x+u+6)%7>=5?" ui-datepicker-week-end":"")+(j?" ui-datepicker-other-month":"")+(z.getTime()===D.getTime()&&Z===e.selectedMonth&&e._keyEvent||b.getTime()===z.getTime()&&b.getTime()===D.getTime()?" "+this._dayOverClass:"")+(W?" "+this._unselectableClass+" ui-state-disabled":"")+(j&&!v?"":" "+O[1]+(z.getTime()===G.getTime()?" "+this._currentClass:"")+(z.getTime()===R.getTime()?" ui-datepicker-today":""))+"'"+(j&&!v||!O[2]?"":" title='"+O[2].replace(/'/g,"&#39;")+"'")+(W?"":" data-handler='selectDay' data-event='click' data-month='"+z.getMonth()+"' data-year='"+z.getFullYear()+"'")+">"+(j&&!v?"&#xa0;":W?"<span class='ui-state-default'>"+z.getDate()+"</span>":"<a class='ui-state-default"+(z.getTime()===R.getTime()?" ui-state-highlight":"")+(z.getTime()===G.getTime()?" ui-state-active":"")+(j?" ui-priority-secondary":"")+"' href='#'>"+z.getDate()+"</a>")+"</td>",z.setDate(z.getDate()+1),z=this._daylightSavingAdjust(z);M+=E+"</tr>"}Z++,Z>11&&(Z=0,et++),M+="</tbody></table>"+(Q?"</div>"+(K[0]>0&&T===K[1]-1?"<div class='ui-datepicker-row-break'></div>":""):""),k+=M}_+=k}return _+=l,e._keyEvent=!1,_},_generateMonthYearHeader:function(e,t,i,s,n,a,o,r){var h,l,u,d,c,p,f,m,g=this._get(e,"changeMonth"),v=this._get(e,"changeYear"),y=this._get(e,"showMonthAfterYear"),b="<div class='ui-datepicker-title'>",_="";if(a||!g)_+="<span class='ui-datepicker-month'>"+o[t]+"</span>";else{for(h=s&&s.getFullYear()===i,l=n&&n.getFullYear()===i,_+="<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>",u=0;12>u;u++)(!h||u>=s.getMonth())&&(!l||n.getMonth()>=u)&&(_+="<option value='"+u+"'"+(u===t?" selected='selected'":"")+">"+r[u]+"</option>");_+="</select>"}if(y||(b+=_+(!a&&g&&v?"":"&#xa0;")),!e.yearshtml)if(e.yearshtml="",a||!v)b+="<span class='ui-datepicker-year'>"+i+"</span>";else{for(d=this._get(e,"yearRange").split(":"),c=(new Date).getFullYear(),p=function(e){var t=e.match(/c[+\-].*/)?i+parseInt(e.substring(1),10):e.match(/[+\-].*/)?c+parseInt(e,10):parseInt(e,10);return isNaN(t)?c:t},f=p(d[0]),m=Math.max(f,p(d[1]||"")),f=s?Math.max(f,s.getFullYear()):f,m=n?Math.min(m,n.getFullYear()):m,e.yearshtml+="<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>";m>=f;f++)e.yearshtml+="<option value='"+f+"'"+(f===i?" selected='selected'":"")+">"+f+"</option>";e.yearshtml+="</select>",b+=e.yearshtml,e.yearshtml=null}return b+=this._get(e,"yearSuffix"),y&&(b+=(!a&&g&&v?"":"&#xa0;")+_),b+="</div>"},_adjustInstDate:function(e,t,i){var s=e.drawYear+("Y"===i?t:0),n=e.drawMonth+("M"===i?t:0),a=Math.min(e.selectedDay,this._getDaysInMonth(s,n))+("D"===i?t:0),o=this._restrictMinMax(e,this._daylightSavingAdjust(new Date(s,n,a)));e.selectedDay=o.getDate(),e.drawMonth=e.selectedMonth=o.getMonth(),e.drawYear=e.selectedYear=o.getFullYear(),("M"===i||"Y"===i)&&this._notifyChange(e)},_restrictMinMax:function(e,t){var i=this._getMinMaxDate(e,"min"),s=this._getMinMaxDate(e,"max"),n=i&&i>t?i:t;return s&&n>s?s:n},_notifyChange:function(e){var t=this._get(e,"onChangeMonthYear");t&&t.apply(e.input?e.input[0]:null,[e.selectedYear,e.selectedMonth+1,e])},_getNumberOfMonths:function(e){var t=this._get(e,"numberOfMonths");return null==t?[1,1]:"number"==typeof t?[1,t]:t},_getMinMaxDate:function(e,t){return this._determineDate(e,this._get(e,t+"Date"),null)},_getDaysInMonth:function(e,t){return 32-this._daylightSavingAdjust(new Date(e,t,32)).getDate()},_getFirstDayOfMonth:function(e,t){return new Date(e,t,1).getDay()},_canAdjustMonth:function(e,t,i,s){var n=this._getNumberOfMonths(e),a=this._daylightSavingAdjust(new Date(i,s+(0>t?t:n[0]*n[1]),1));return 0>t&&a.setDate(this._getDaysInMonth(a.getFullYear(),a.getMonth())),this._isInRange(e,a)},_isInRange:function(e,t){var i,s,n=this._getMinMaxDate(e,"min"),a=this._getMinMaxDate(e,"max"),o=null,r=null,h=this._get(e,"yearRange");return h&&(i=h.split(":"),s=(new Date).getFullYear(),o=parseInt(i[0],10),r=parseInt(i[1],10),i[0].match(/[+\-].*/)&&(o+=s),i[1].match(/[+\-].*/)&&(r+=s)),(!n||t.getTime()>=n.getTime())&&(!a||t.getTime()<=a.getTime())&&(!o||t.getFullYear()>=o)&&(!r||r>=t.getFullYear())},_getFormatConfig:function(e){var t=this._get(e,"shortYearCutoff");return t="string"!=typeof t?t:(new Date).getFullYear()%100+parseInt(t,10),{shortYearCutoff:t,dayNamesShort:this._get(e,"dayNamesShort"),dayNames:this._get(e,"dayNames"),monthNamesShort:this._get(e,"monthNamesShort"),monthNames:this._get(e,"monthNames")}},_formatDate:function(e,t,i,s){t||(e.currentDay=e.selectedDay,e.currentMonth=e.selectedMonth,e.currentYear=e.selectedYear);var n=t?"object"==typeof t?t:this._daylightSavingAdjust(new Date(s,i,t)):this._daylightSavingAdjust(new Date(e.currentYear,e.currentMonth,e.currentDay));return this.formatDate(this._get(e,"dateFormat"),n,this._getFormatConfig(e))}}),e.fn.datepicker=function(t){if(!this.length)return this;e.datepicker.initialized||(e(document).mousedown(e.datepicker._checkExternalClick),e.datepicker.initialized=!0),0===e("#"+e.datepicker._mainDivId).length&&e("body").append(e.datepicker.dpDiv);var i=Array.prototype.slice.call(arguments,1);return"string"!=typeof t||"isDisabled"!==t&&"getDate"!==t&&"widget"!==t?"option"===t&&2===arguments.length&&"string"==typeof arguments[1]?e.datepicker["_"+t+"Datepicker"].apply(e.datepicker,[this[0]].concat(i)):this.each(function(){"string"==typeof t?e.datepicker["_"+t+"Datepicker"].apply(e.datepicker,[this].concat(i)):e.datepicker._attachDatepicker(this,t)}):e.datepicker["_"+t+"Datepicker"].apply(e.datepicker,[this[0]].concat(i))},e.datepicker=new n,e.datepicker.initialized=!1,e.datepicker.uuid=(new Date).getTime(),e.datepicker.version="1.11.4",e.datepicker,e.widget("ui.draggable",e.ui.mouse,{version:"1.11.4",widgetEventPrefix:"drag",options:{addClasses:!0,appendTo:"parent",axis:!1,connectToSortable:!1,containment:!1,cursor:"auto",cursorAt:!1,grid:!1,handle:!1,helper:"original",iframeFix:!1,opacity:!1,refreshPositions:!1,revert:!1,revertDuration:500,scope:"default",scroll:!0,scrollSensitivity:20,scrollSpeed:20,snap:!1,snapMode:"both",snapTolerance:20,stack:!1,zIndex:!1,drag:null,start:null,stop:null},_create:function(){"original"===this.options.helper&&this._setPositionRelative(),this.options.addClasses&&this.element.addClass("ui-draggable"),this.options.disabled&&this.element.addClass("ui-draggable-disabled"),this._setHandleClassName(),this._mouseInit()},_setOption:function(e,t){this._super(e,t),"handle"===e&&(this._removeHandleClassName(),this._setHandleClassName())},_destroy:function(){return(this.helper||this.element).is(".ui-draggable-dragging")?(this.destroyOnClear=!0,void 0):(this.element.removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled"),this._removeHandleClassName(),this._mouseDestroy(),void 0)},_mouseCapture:function(t){var i=this.options;return this._blurActiveElement(t),this.helper||i.disabled||e(t.target).closest(".ui-resizable-handle").length>0?!1:(this.handle=this._getHandle(t),this.handle?(this._blockFrames(i.iframeFix===!0?"iframe":i.iframeFix),!0):!1)},_blockFrames:function(t){this.iframeBlocks=this.document.find(t).map(function(){var t=e(this);return e("<div>").css("position","absolute").appendTo(t.parent()).outerWidth(t.outerWidth()).outerHeight(t.outerHeight()).offset(t.offset())[0]})},_unblockFrames:function(){this.iframeBlocks&&(this.iframeBlocks.remove(),delete this.iframeBlocks)},_blurActiveElement:function(t){var i=this.document[0];if(this.handleElement.is(t.target))try{i.activeElement&&"body"!==i.activeElement.nodeName.toLowerCase()&&e(i.activeElement).blur()}catch(s){}},_mouseStart:function(t){var i=this.options;return this.helper=this._createHelper(t),this.helper.addClass("ui-draggable-dragging"),this._cacheHelperProportions(),e.ui.ddmanager&&(e.ui.ddmanager.current=this),this._cacheMargins(),this.cssPosition=this.helper.css("position"),this.scrollParent=this.helper.scrollParent(!0),this.offsetParent=this.helper.offsetParent(),this.hasFixedAncestor=this.helper.parents().filter(function(){return"fixed"===e(this).css("position")}).length>0,this.positionAbs=this.element.offset(),this._refreshOffsets(t),this.originalPosition=this.position=this._generatePosition(t,!1),this.originalPageX=t.pageX,this.originalPageY=t.pageY,i.cursorAt&&this._adjustOffsetFromHelper(i.cursorAt),this._setContainment(),this._trigger("start",t)===!1?(this._clear(),!1):(this._cacheHelperProportions(),e.ui.ddmanager&&!i.dropBehaviour&&e.ui.ddmanager.prepareOffsets(this,t),this._normalizeRightBottom(),this._mouseDrag(t,!0),e.ui.ddmanager&&e.ui.ddmanager.dragStart(this,t),!0)},_refreshOffsets:function(e){this.offset={top:this.positionAbs.top-this.margins.top,left:this.positionAbs.left-this.margins.left,scroll:!1,parent:this._getParentOffset(),relative:this._getRelativeOffset()},this.offset.click={left:e.pageX-this.offset.left,top:e.pageY-this.offset.top}},_mouseDrag:function(t,i){if(this.hasFixedAncestor&&(this.offset.parent=this._getParentOffset()),this.position=this._generatePosition(t,!0),this.positionAbs=this._convertPositionTo("absolute"),!i){var s=this._uiHash();if(this._trigger("drag",t,s)===!1)return this._mouseUp({}),!1;this.position=s.position}return this.helper[0].style.left=this.position.left+"px",this.helper[0].style.top=this.position.top+"px",e.ui.ddmanager&&e.ui.ddmanager.drag(this,t),!1},_mouseStop:function(t){var i=this,s=!1;return e.ui.ddmanager&&!this.options.dropBehaviour&&(s=e.ui.ddmanager.drop(this,t)),this.dropped&&(s=this.dropped,this.dropped=!1),"invalid"===this.options.revert&&!s||"valid"===this.options.revert&&s||this.options.revert===!0||e.isFunction(this.options.revert)&&this.options.revert.call(this.element,s)?e(this.helper).animate(this.originalPosition,parseInt(this.options.revertDuration,10),function(){i._trigger("stop",t)!==!1&&i._clear()}):this._trigger("stop",t)!==!1&&this._clear(),!1},_mouseUp:function(t){return this._unblockFrames(),e.ui.ddmanager&&e.ui.ddmanager.dragStop(this,t),this.handleElement.is(t.target)&&this.element.focus(),e.ui.mouse.prototype._mouseUp.call(this,t)},cancel:function(){return this.helper.is(".ui-draggable-dragging")?this._mouseUp({}):this._clear(),this},_getHandle:function(t){return this.options.handle?!!e(t.target).closest(this.element.find(this.options.handle)).length:!0},_setHandleClassName:function(){this.handleElement=this.options.handle?this.element.find(this.options.handle):this.element,this.handleElement.addClass("ui-draggable-handle")},_removeHandleClassName:function(){this.handleElement.removeClass("ui-draggable-handle")},_createHelper:function(t){var i=this.options,s=e.isFunction(i.helper),n=s?e(i.helper.apply(this.element[0],[t])):"clone"===i.helper?this.element.clone().removeAttr("id"):this.element;return n.parents("body").length||n.appendTo("parent"===i.appendTo?this.element[0].parentNode:i.appendTo),s&&n[0]===this.element[0]&&this._setPositionRelative(),n[0]===this.element[0]||/(fixed|absolute)/.test(n.css("position"))||n.css("position","absolute"),n},_setPositionRelative:function(){/^(?:r|a|f)/.test(this.element.css("position"))||(this.element[0].style.position="relative")},_adjustOffsetFromHelper:function(t){"string"==typeof t&&(t=t.split(" ")),e.isArray(t)&&(t={left:+t[0],top:+t[1]||0}),"left"in t&&(this.offset.click.left=t.left+this.margins.left),"right"in t&&(this.offset.click.left=this.helperProportions.width-t.right+this.margins.left),"top"in t&&(this.offset.click.top=t.top+this.margins.top),"bottom"in t&&(this.offset.click.top=this.helperProportions.height-t.bottom+this.margins.top)},_isRootNode:function(e){return/(html|body)/i.test(e.tagName)||e===this.document[0]},_getParentOffset:function(){var t=this.offsetParent.offset(),i=this.document[0];return"absolute"===this.cssPosition&&this.scrollParent[0]!==i&&e.contains(this.scrollParent[0],this.offsetParent[0])&&(t.left+=this.scrollParent.scrollLeft(),t.top+=this.scrollParent.scrollTop()),this._isRootNode(this.offsetParent[0])&&(t={top:0,left:0}),{top:t.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:t.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if("relative"!==this.cssPosition)return{top:0,left:0};var e=this.element.position(),t=this._isRootNode(this.scrollParent[0]);return{top:e.top-(parseInt(this.helper.css("top"),10)||0)+(t?0:this.scrollParent.scrollTop()),left:e.left-(parseInt(this.helper.css("left"),10)||0)+(t?0:this.scrollParent.scrollLeft())}},_cacheMargins:function(){this.margins={left:parseInt(this.element.css("marginLeft"),10)||0,top:parseInt(this.element.css("marginTop"),10)||0,right:parseInt(this.element.css("marginRight"),10)||0,bottom:parseInt(this.element.css("marginBottom"),10)||0}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var t,i,s,n=this.options,a=this.document[0];return this.relativeContainer=null,n.containment?"window"===n.containment?(this.containment=[e(window).scrollLeft()-this.offset.relative.left-this.offset.parent.left,e(window).scrollTop()-this.offset.relative.top-this.offset.parent.top,e(window).scrollLeft()+e(window).width()-this.helperProportions.width-this.margins.left,e(window).scrollTop()+(e(window).height()||a.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top],void 0):"document"===n.containment?(this.containment=[0,0,e(a).width()-this.helperProportions.width-this.margins.left,(e(a).height()||a.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top],void 0):n.containment.constructor===Array?(this.containment=n.containment,void 0):("parent"===n.containment&&(n.containment=this.helper[0].parentNode),i=e(n.containment),s=i[0],s&&(t=/(scroll|auto)/.test(i.css("overflow")),this.containment=[(parseInt(i.css("borderLeftWidth"),10)||0)+(parseInt(i.css("paddingLeft"),10)||0),(parseInt(i.css("borderTopWidth"),10)||0)+(parseInt(i.css("paddingTop"),10)||0),(t?Math.max(s.scrollWidth,s.offsetWidth):s.offsetWidth)-(parseInt(i.css("borderRightWidth"),10)||0)-(parseInt(i.css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left-this.margins.right,(t?Math.max(s.scrollHeight,s.offsetHeight):s.offsetHeight)-(parseInt(i.css("borderBottomWidth"),10)||0)-(parseInt(i.css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top-this.margins.bottom],this.relativeContainer=i),void 0):(this.containment=null,void 0)
},_convertPositionTo:function(e,t){t||(t=this.position);var i="absolute"===e?1:-1,s=this._isRootNode(this.scrollParent[0]);return{top:t.top+this.offset.relative.top*i+this.offset.parent.top*i-("fixed"===this.cssPosition?-this.offset.scroll.top:s?0:this.offset.scroll.top)*i,left:t.left+this.offset.relative.left*i+this.offset.parent.left*i-("fixed"===this.cssPosition?-this.offset.scroll.left:s?0:this.offset.scroll.left)*i}},_generatePosition:function(e,t){var i,s,n,a,o=this.options,r=this._isRootNode(this.scrollParent[0]),h=e.pageX,l=e.pageY;return r&&this.offset.scroll||(this.offset.scroll={top:this.scrollParent.scrollTop(),left:this.scrollParent.scrollLeft()}),t&&(this.containment&&(this.relativeContainer?(s=this.relativeContainer.offset(),i=[this.containment[0]+s.left,this.containment[1]+s.top,this.containment[2]+s.left,this.containment[3]+s.top]):i=this.containment,e.pageX-this.offset.click.left<i[0]&&(h=i[0]+this.offset.click.left),e.pageY-this.offset.click.top<i[1]&&(l=i[1]+this.offset.click.top),e.pageX-this.offset.click.left>i[2]&&(h=i[2]+this.offset.click.left),e.pageY-this.offset.click.top>i[3]&&(l=i[3]+this.offset.click.top)),o.grid&&(n=o.grid[1]?this.originalPageY+Math.round((l-this.originalPageY)/o.grid[1])*o.grid[1]:this.originalPageY,l=i?n-this.offset.click.top>=i[1]||n-this.offset.click.top>i[3]?n:n-this.offset.click.top>=i[1]?n-o.grid[1]:n+o.grid[1]:n,a=o.grid[0]?this.originalPageX+Math.round((h-this.originalPageX)/o.grid[0])*o.grid[0]:this.originalPageX,h=i?a-this.offset.click.left>=i[0]||a-this.offset.click.left>i[2]?a:a-this.offset.click.left>=i[0]?a-o.grid[0]:a+o.grid[0]:a),"y"===o.axis&&(h=this.originalPageX),"x"===o.axis&&(l=this.originalPageY)),{top:l-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+("fixed"===this.cssPosition?-this.offset.scroll.top:r?0:this.offset.scroll.top),left:h-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+("fixed"===this.cssPosition?-this.offset.scroll.left:r?0:this.offset.scroll.left)}},_clear:function(){this.helper.removeClass("ui-draggable-dragging"),this.helper[0]===this.element[0]||this.cancelHelperRemoval||this.helper.remove(),this.helper=null,this.cancelHelperRemoval=!1,this.destroyOnClear&&this.destroy()},_normalizeRightBottom:function(){"y"!==this.options.axis&&"auto"!==this.helper.css("right")&&(this.helper.width(this.helper.width()),this.helper.css("right","auto")),"x"!==this.options.axis&&"auto"!==this.helper.css("bottom")&&(this.helper.height(this.helper.height()),this.helper.css("bottom","auto"))},_trigger:function(t,i,s){return s=s||this._uiHash(),e.ui.plugin.call(this,t,[i,s,this],!0),/^(drag|start|stop)/.test(t)&&(this.positionAbs=this._convertPositionTo("absolute"),s.offset=this.positionAbs),e.Widget.prototype._trigger.call(this,t,i,s)},plugins:{},_uiHash:function(){return{helper:this.helper,position:this.position,originalPosition:this.originalPosition,offset:this.positionAbs}}}),e.ui.plugin.add("draggable","connectToSortable",{start:function(t,i,s){var n=e.extend({},i,{item:s.element});s.sortables=[],e(s.options.connectToSortable).each(function(){var i=e(this).sortable("instance");i&&!i.options.disabled&&(s.sortables.push(i),i.refreshPositions(),i._trigger("activate",t,n))})},stop:function(t,i,s){var n=e.extend({},i,{item:s.element});s.cancelHelperRemoval=!1,e.each(s.sortables,function(){var e=this;e.isOver?(e.isOver=0,s.cancelHelperRemoval=!0,e.cancelHelperRemoval=!1,e._storedCSS={position:e.placeholder.css("position"),top:e.placeholder.css("top"),left:e.placeholder.css("left")},e._mouseStop(t),e.options.helper=e.options._helper):(e.cancelHelperRemoval=!0,e._trigger("deactivate",t,n))})},drag:function(t,i,s){e.each(s.sortables,function(){var n=!1,a=this;a.positionAbs=s.positionAbs,a.helperProportions=s.helperProportions,a.offset.click=s.offset.click,a._intersectsWith(a.containerCache)&&(n=!0,e.each(s.sortables,function(){return this.positionAbs=s.positionAbs,this.helperProportions=s.helperProportions,this.offset.click=s.offset.click,this!==a&&this._intersectsWith(this.containerCache)&&e.contains(a.element[0],this.element[0])&&(n=!1),n})),n?(a.isOver||(a.isOver=1,s._parent=i.helper.parent(),a.currentItem=i.helper.appendTo(a.element).data("ui-sortable-item",!0),a.options._helper=a.options.helper,a.options.helper=function(){return i.helper[0]},t.target=a.currentItem[0],a._mouseCapture(t,!0),a._mouseStart(t,!0,!0),a.offset.click.top=s.offset.click.top,a.offset.click.left=s.offset.click.left,a.offset.parent.left-=s.offset.parent.left-a.offset.parent.left,a.offset.parent.top-=s.offset.parent.top-a.offset.parent.top,s._trigger("toSortable",t),s.dropped=a.element,e.each(s.sortables,function(){this.refreshPositions()}),s.currentItem=s.element,a.fromOutside=s),a.currentItem&&(a._mouseDrag(t),i.position=a.position)):a.isOver&&(a.isOver=0,a.cancelHelperRemoval=!0,a.options._revert=a.options.revert,a.options.revert=!1,a._trigger("out",t,a._uiHash(a)),a._mouseStop(t,!0),a.options.revert=a.options._revert,a.options.helper=a.options._helper,a.placeholder&&a.placeholder.remove(),i.helper.appendTo(s._parent),s._refreshOffsets(t),i.position=s._generatePosition(t,!0),s._trigger("fromSortable",t),s.dropped=!1,e.each(s.sortables,function(){this.refreshPositions()}))})}}),e.ui.plugin.add("draggable","cursor",{start:function(t,i,s){var n=e("body"),a=s.options;n.css("cursor")&&(a._cursor=n.css("cursor")),n.css("cursor",a.cursor)},stop:function(t,i,s){var n=s.options;n._cursor&&e("body").css("cursor",n._cursor)}}),e.ui.plugin.add("draggable","opacity",{start:function(t,i,s){var n=e(i.helper),a=s.options;n.css("opacity")&&(a._opacity=n.css("opacity")),n.css("opacity",a.opacity)},stop:function(t,i,s){var n=s.options;n._opacity&&e(i.helper).css("opacity",n._opacity)}}),e.ui.plugin.add("draggable","scroll",{start:function(e,t,i){i.scrollParentNotHidden||(i.scrollParentNotHidden=i.helper.scrollParent(!1)),i.scrollParentNotHidden[0]!==i.document[0]&&"HTML"!==i.scrollParentNotHidden[0].tagName&&(i.overflowOffset=i.scrollParentNotHidden.offset())},drag:function(t,i,s){var n=s.options,a=!1,o=s.scrollParentNotHidden[0],r=s.document[0];o!==r&&"HTML"!==o.tagName?(n.axis&&"x"===n.axis||(s.overflowOffset.top+o.offsetHeight-t.pageY<n.scrollSensitivity?o.scrollTop=a=o.scrollTop+n.scrollSpeed:t.pageY-s.overflowOffset.top<n.scrollSensitivity&&(o.scrollTop=a=o.scrollTop-n.scrollSpeed)),n.axis&&"y"===n.axis||(s.overflowOffset.left+o.offsetWidth-t.pageX<n.scrollSensitivity?o.scrollLeft=a=o.scrollLeft+n.scrollSpeed:t.pageX-s.overflowOffset.left<n.scrollSensitivity&&(o.scrollLeft=a=o.scrollLeft-n.scrollSpeed))):(n.axis&&"x"===n.axis||(t.pageY-e(r).scrollTop()<n.scrollSensitivity?a=e(r).scrollTop(e(r).scrollTop()-n.scrollSpeed):e(window).height()-(t.pageY-e(r).scrollTop())<n.scrollSensitivity&&(a=e(r).scrollTop(e(r).scrollTop()+n.scrollSpeed))),n.axis&&"y"===n.axis||(t.pageX-e(r).scrollLeft()<n.scrollSensitivity?a=e(r).scrollLeft(e(r).scrollLeft()-n.scrollSpeed):e(window).width()-(t.pageX-e(r).scrollLeft())<n.scrollSensitivity&&(a=e(r).scrollLeft(e(r).scrollLeft()+n.scrollSpeed)))),a!==!1&&e.ui.ddmanager&&!n.dropBehaviour&&e.ui.ddmanager.prepareOffsets(s,t)}}),e.ui.plugin.add("draggable","snap",{start:function(t,i,s){var n=s.options;s.snapElements=[],e(n.snap.constructor!==String?n.snap.items||":data(ui-draggable)":n.snap).each(function(){var t=e(this),i=t.offset();this!==s.element[0]&&s.snapElements.push({item:this,width:t.outerWidth(),height:t.outerHeight(),top:i.top,left:i.left})})},drag:function(t,i,s){var n,a,o,r,h,l,u,d,c,p,f=s.options,m=f.snapTolerance,g=i.offset.left,v=g+s.helperProportions.width,y=i.offset.top,b=y+s.helperProportions.height;for(c=s.snapElements.length-1;c>=0;c--)h=s.snapElements[c].left-s.margins.left,l=h+s.snapElements[c].width,u=s.snapElements[c].top-s.margins.top,d=u+s.snapElements[c].height,h-m>v||g>l+m||u-m>b||y>d+m||!e.contains(s.snapElements[c].item.ownerDocument,s.snapElements[c].item)?(s.snapElements[c].snapping&&s.options.snap.release&&s.options.snap.release.call(s.element,t,e.extend(s._uiHash(),{snapItem:s.snapElements[c].item})),s.snapElements[c].snapping=!1):("inner"!==f.snapMode&&(n=m>=Math.abs(u-b),a=m>=Math.abs(d-y),o=m>=Math.abs(h-v),r=m>=Math.abs(l-g),n&&(i.position.top=s._convertPositionTo("relative",{top:u-s.helperProportions.height,left:0}).top),a&&(i.position.top=s._convertPositionTo("relative",{top:d,left:0}).top),o&&(i.position.left=s._convertPositionTo("relative",{top:0,left:h-s.helperProportions.width}).left),r&&(i.position.left=s._convertPositionTo("relative",{top:0,left:l}).left)),p=n||a||o||r,"outer"!==f.snapMode&&(n=m>=Math.abs(u-y),a=m>=Math.abs(d-b),o=m>=Math.abs(h-g),r=m>=Math.abs(l-v),n&&(i.position.top=s._convertPositionTo("relative",{top:u,left:0}).top),a&&(i.position.top=s._convertPositionTo("relative",{top:d-s.helperProportions.height,left:0}).top),o&&(i.position.left=s._convertPositionTo("relative",{top:0,left:h}).left),r&&(i.position.left=s._convertPositionTo("relative",{top:0,left:l-s.helperProportions.width}).left)),!s.snapElements[c].snapping&&(n||a||o||r||p)&&s.options.snap.snap&&s.options.snap.snap.call(s.element,t,e.extend(s._uiHash(),{snapItem:s.snapElements[c].item})),s.snapElements[c].snapping=n||a||o||r||p)}}),e.ui.plugin.add("draggable","stack",{start:function(t,i,s){var n,a=s.options,o=e.makeArray(e(a.stack)).sort(function(t,i){return(parseInt(e(t).css("zIndex"),10)||0)-(parseInt(e(i).css("zIndex"),10)||0)});o.length&&(n=parseInt(e(o[0]).css("zIndex"),10)||0,e(o).each(function(t){e(this).css("zIndex",n+t)}),this.css("zIndex",n+o.length))}}),e.ui.plugin.add("draggable","zIndex",{start:function(t,i,s){var n=e(i.helper),a=s.options;n.css("zIndex")&&(a._zIndex=n.css("zIndex")),n.css("zIndex",a.zIndex)},stop:function(t,i,s){var n=s.options;n._zIndex&&e(i.helper).css("zIndex",n._zIndex)}}),e.ui.draggable,e.widget("ui.resizable",e.ui.mouse,{version:"1.11.4",widgetEventPrefix:"resize",options:{alsoResize:!1,animate:!1,animateDuration:"slow",animateEasing:"swing",aspectRatio:!1,autoHide:!1,containment:!1,ghost:!1,grid:!1,handles:"e,s,se",helper:!1,maxHeight:null,maxWidth:null,minHeight:10,minWidth:10,zIndex:90,resize:null,start:null,stop:null},_num:function(e){return parseInt(e,10)||0},_isNumber:function(e){return!isNaN(parseInt(e,10))},_hasScroll:function(t,i){if("hidden"===e(t).css("overflow"))return!1;var s=i&&"left"===i?"scrollLeft":"scrollTop",n=!1;return t[s]>0?!0:(t[s]=1,n=t[s]>0,t[s]=0,n)},_create:function(){var t,i,s,n,a,o=this,r=this.options;if(this.element.addClass("ui-resizable"),e.extend(this,{_aspectRatio:!!r.aspectRatio,aspectRatio:r.aspectRatio,originalElement:this.element,_proportionallyResizeElements:[],_helper:r.helper||r.ghost||r.animate?r.helper||"ui-resizable-helper":null}),this.element[0].nodeName.match(/^(canvas|textarea|input|select|button|img)$/i)&&(this.element.wrap(e("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({position:this.element.css("position"),width:this.element.outerWidth(),height:this.element.outerHeight(),top:this.element.css("top"),left:this.element.css("left")})),this.element=this.element.parent().data("ui-resizable",this.element.resizable("instance")),this.elementIsWrapper=!0,this.element.css({marginLeft:this.originalElement.css("marginLeft"),marginTop:this.originalElement.css("marginTop"),marginRight:this.originalElement.css("marginRight"),marginBottom:this.originalElement.css("marginBottom")}),this.originalElement.css({marginLeft:0,marginTop:0,marginRight:0,marginBottom:0}),this.originalResizeStyle=this.originalElement.css("resize"),this.originalElement.css("resize","none"),this._proportionallyResizeElements.push(this.originalElement.css({position:"static",zoom:1,display:"block"})),this.originalElement.css({margin:this.originalElement.css("margin")}),this._proportionallyResize()),this.handles=r.handles||(e(".ui-resizable-handle",this.element).length?{n:".ui-resizable-n",e:".ui-resizable-e",s:".ui-resizable-s",w:".ui-resizable-w",se:".ui-resizable-se",sw:".ui-resizable-sw",ne:".ui-resizable-ne",nw:".ui-resizable-nw"}:"e,s,se"),this._handles=e(),this.handles.constructor===String)for("all"===this.handles&&(this.handles="n,e,s,w,se,sw,ne,nw"),t=this.handles.split(","),this.handles={},i=0;t.length>i;i++)s=e.trim(t[i]),a="ui-resizable-"+s,n=e("<div class='ui-resizable-handle "+a+"'></div>"),n.css({zIndex:r.zIndex}),"se"===s&&n.addClass("ui-icon ui-icon-gripsmall-diagonal-se"),this.handles[s]=".ui-resizable-"+s,this.element.append(n);this._renderAxis=function(t){var i,s,n,a;t=t||this.element;for(i in this.handles)this.handles[i].constructor===String?this.handles[i]=this.element.children(this.handles[i]).first().show():(this.handles[i].jquery||this.handles[i].nodeType)&&(this.handles[i]=e(this.handles[i]),this._on(this.handles[i],{mousedown:o._mouseDown})),this.elementIsWrapper&&this.originalElement[0].nodeName.match(/^(textarea|input|select|button)$/i)&&(s=e(this.handles[i],this.element),a=/sw|ne|nw|se|n|s/.test(i)?s.outerHeight():s.outerWidth(),n=["padding",/ne|nw|n/.test(i)?"Top":/se|sw|s/.test(i)?"Bottom":/^e$/.test(i)?"Right":"Left"].join(""),t.css(n,a),this._proportionallyResize()),this._handles=this._handles.add(this.handles[i])},this._renderAxis(this.element),this._handles=this._handles.add(this.element.find(".ui-resizable-handle")),this._handles.disableSelection(),this._handles.mouseover(function(){o.resizing||(this.className&&(n=this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)),o.axis=n&&n[1]?n[1]:"se")}),r.autoHide&&(this._handles.hide(),e(this.element).addClass("ui-resizable-autohide").mouseenter(function(){r.disabled||(e(this).removeClass("ui-resizable-autohide"),o._handles.show())}).mouseleave(function(){r.disabled||o.resizing||(e(this).addClass("ui-resizable-autohide"),o._handles.hide())})),this._mouseInit()},_destroy:function(){this._mouseDestroy();var t,i=function(t){e(t).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").removeData("ui-resizable").unbind(".resizable").find(".ui-resizable-handle").remove()};return this.elementIsWrapper&&(i(this.element),t=this.element,this.originalElement.css({position:t.css("position"),width:t.outerWidth(),height:t.outerHeight(),top:t.css("top"),left:t.css("left")}).insertAfter(t),t.remove()),this.originalElement.css("resize",this.originalResizeStyle),i(this.originalElement),this},_mouseCapture:function(t){var i,s,n=!1;for(i in this.handles)s=e(this.handles[i])[0],(s===t.target||e.contains(s,t.target))&&(n=!0);return!this.options.disabled&&n},_mouseStart:function(t){var i,s,n,a=this.options,o=this.element;return this.resizing=!0,this._renderProxy(),i=this._num(this.helper.css("left")),s=this._num(this.helper.css("top")),a.containment&&(i+=e(a.containment).scrollLeft()||0,s+=e(a.containment).scrollTop()||0),this.offset=this.helper.offset(),this.position={left:i,top:s},this.size=this._helper?{width:this.helper.width(),height:this.helper.height()}:{width:o.width(),height:o.height()},this.originalSize=this._helper?{width:o.outerWidth(),height:o.outerHeight()}:{width:o.width(),height:o.height()},this.sizeDiff={width:o.outerWidth()-o.width(),height:o.outerHeight()-o.height()},this.originalPosition={left:i,top:s},this.originalMousePosition={left:t.pageX,top:t.pageY},this.aspectRatio="number"==typeof a.aspectRatio?a.aspectRatio:this.originalSize.width/this.originalSize.height||1,n=e(".ui-resizable-"+this.axis).css("cursor"),e("body").css("cursor","auto"===n?this.axis+"-resize":n),o.addClass("ui-resizable-resizing"),this._propagate("start",t),!0},_mouseDrag:function(t){var i,s,n=this.originalMousePosition,a=this.axis,o=t.pageX-n.left||0,r=t.pageY-n.top||0,h=this._change[a];return this._updatePrevProperties(),h?(i=h.apply(this,[t,o,r]),this._updateVirtualBoundaries(t.shiftKey),(this._aspectRatio||t.shiftKey)&&(i=this._updateRatio(i,t)),i=this._respectSize(i,t),this._updateCache(i),this._propagate("resize",t),s=this._applyChanges(),!this._helper&&this._proportionallyResizeElements.length&&this._proportionallyResize(),e.isEmptyObject(s)||(this._updatePrevProperties(),this._trigger("resize",t,this.ui()),this._applyChanges()),!1):!1},_mouseStop:function(t){this.resizing=!1;var i,s,n,a,o,r,h,l=this.options,u=this;return this._helper&&(i=this._proportionallyResizeElements,s=i.length&&/textarea/i.test(i[0].nodeName),n=s&&this._hasScroll(i[0],"left")?0:u.sizeDiff.height,a=s?0:u.sizeDiff.width,o={width:u.helper.width()-a,height:u.helper.height()-n},r=parseInt(u.element.css("left"),10)+(u.position.left-u.originalPosition.left)||null,h=parseInt(u.element.css("top"),10)+(u.position.top-u.originalPosition.top)||null,l.animate||this.element.css(e.extend(o,{top:h,left:r})),u.helper.height(u.size.height),u.helper.width(u.size.width),this._helper&&!l.animate&&this._proportionallyResize()),e("body").css("cursor","auto"),this.element.removeClass("ui-resizable-resizing"),this._propagate("stop",t),this._helper&&this.helper.remove(),!1},_updatePrevProperties:function(){this.prevPosition={top:this.position.top,left:this.position.left},this.prevSize={width:this.size.width,height:this.size.height}},_applyChanges:function(){var e={};return this.position.top!==this.prevPosition.top&&(e.top=this.position.top+"px"),this.position.left!==this.prevPosition.left&&(e.left=this.position.left+"px"),this.size.width!==this.prevSize.width&&(e.width=this.size.width+"px"),this.size.height!==this.prevSize.height&&(e.height=this.size.height+"px"),this.helper.css(e),e},_updateVirtualBoundaries:function(e){var t,i,s,n,a,o=this.options;a={minWidth:this._isNumber(o.minWidth)?o.minWidth:0,maxWidth:this._isNumber(o.maxWidth)?o.maxWidth:1/0,minHeight:this._isNumber(o.minHeight)?o.minHeight:0,maxHeight:this._isNumber(o.maxHeight)?o.maxHeight:1/0},(this._aspectRatio||e)&&(t=a.minHeight*this.aspectRatio,s=a.minWidth/this.aspectRatio,i=a.maxHeight*this.aspectRatio,n=a.maxWidth/this.aspectRatio,t>a.minWidth&&(a.minWidth=t),s>a.minHeight&&(a.minHeight=s),a.maxWidth>i&&(a.maxWidth=i),a.maxHeight>n&&(a.maxHeight=n)),this._vBoundaries=a},_updateCache:function(e){this.offset=this.helper.offset(),this._isNumber(e.left)&&(this.position.left=e.left),this._isNumber(e.top)&&(this.position.top=e.top),this._isNumber(e.height)&&(this.size.height=e.height),this._isNumber(e.width)&&(this.size.width=e.width)},_updateRatio:function(e){var t=this.position,i=this.size,s=this.axis;return this._isNumber(e.height)?e.width=e.height*this.aspectRatio:this._isNumber(e.width)&&(e.height=e.width/this.aspectRatio),"sw"===s&&(e.left=t.left+(i.width-e.width),e.top=null),"nw"===s&&(e.top=t.top+(i.height-e.height),e.left=t.left+(i.width-e.width)),e},_respectSize:function(e){var t=this._vBoundaries,i=this.axis,s=this._isNumber(e.width)&&t.maxWidth&&t.maxWidth<e.width,n=this._isNumber(e.height)&&t.maxHeight&&t.maxHeight<e.height,a=this._isNumber(e.width)&&t.minWidth&&t.minWidth>e.width,o=this._isNumber(e.height)&&t.minHeight&&t.minHeight>e.height,r=this.originalPosition.left+this.originalSize.width,h=this.position.top+this.size.height,l=/sw|nw|w/.test(i),u=/nw|ne|n/.test(i);return a&&(e.width=t.minWidth),o&&(e.height=t.minHeight),s&&(e.width=t.maxWidth),n&&(e.height=t.maxHeight),a&&l&&(e.left=r-t.minWidth),s&&l&&(e.left=r-t.maxWidth),o&&u&&(e.top=h-t.minHeight),n&&u&&(e.top=h-t.maxHeight),e.width||e.height||e.left||!e.top?e.width||e.height||e.top||!e.left||(e.left=null):e.top=null,e},_getPaddingPlusBorderDimensions:function(e){for(var t=0,i=[],s=[e.css("borderTopWidth"),e.css("borderRightWidth"),e.css("borderBottomWidth"),e.css("borderLeftWidth")],n=[e.css("paddingTop"),e.css("paddingRight"),e.css("paddingBottom"),e.css("paddingLeft")];4>t;t++)i[t]=parseInt(s[t],10)||0,i[t]+=parseInt(n[t],10)||0;return{height:i[0]+i[2],width:i[1]+i[3]}},_proportionallyResize:function(){if(this._proportionallyResizeElements.length)for(var e,t=0,i=this.helper||this.element;this._proportionallyResizeElements.length>t;t++)e=this._proportionallyResizeElements[t],this.outerDimensions||(this.outerDimensions=this._getPaddingPlusBorderDimensions(e)),e.css({height:i.height()-this.outerDimensions.height||0,width:i.width()-this.outerDimensions.width||0})},_renderProxy:function(){var t=this.element,i=this.options;this.elementOffset=t.offset(),this._helper?(this.helper=this.helper||e("<div style='overflow:hidden;'></div>"),this.helper.addClass(this._helper).css({width:this.element.outerWidth()-1,height:this.element.outerHeight()-1,position:"absolute",left:this.elementOffset.left+"px",top:this.elementOffset.top+"px",zIndex:++i.zIndex}),this.helper.appendTo("body").disableSelection()):this.helper=this.element},_change:{e:function(e,t){return{width:this.originalSize.width+t}},w:function(e,t){var i=this.originalSize,s=this.originalPosition;return{left:s.left+t,width:i.width-t}},n:function(e,t,i){var s=this.originalSize,n=this.originalPosition;return{top:n.top+i,height:s.height-i}},s:function(e,t,i){return{height:this.originalSize.height+i}},se:function(t,i,s){return e.extend(this._change.s.apply(this,arguments),this._change.e.apply(this,[t,i,s]))},sw:function(t,i,s){return e.extend(this._change.s.apply(this,arguments),this._change.w.apply(this,[t,i,s]))},ne:function(t,i,s){return e.extend(this._change.n.apply(this,arguments),this._change.e.apply(this,[t,i,s]))},nw:function(t,i,s){return e.extend(this._change.n.apply(this,arguments),this._change.w.apply(this,[t,i,s]))}},_propagate:function(t,i){e.ui.plugin.call(this,t,[i,this.ui()]),"resize"!==t&&this._trigger(t,i,this.ui())},plugins:{},ui:function(){return{originalElement:this.originalElement,element:this.element,helper:this.helper,position:this.position,size:this.size,originalSize:this.originalSize,originalPosition:this.originalPosition}}}),e.ui.plugin.add("resizable","animate",{stop:function(t){var i=e(this).resizable("instance"),s=i.options,n=i._proportionallyResizeElements,a=n.length&&/textarea/i.test(n[0].nodeName),o=a&&i._hasScroll(n[0],"left")?0:i.sizeDiff.height,r=a?0:i.sizeDiff.width,h={width:i.size.width-r,height:i.size.height-o},l=parseInt(i.element.css("left"),10)+(i.position.left-i.originalPosition.left)||null,u=parseInt(i.element.css("top"),10)+(i.position.top-i.originalPosition.top)||null;i.element.animate(e.extend(h,u&&l?{top:u,left:l}:{}),{duration:s.animateDuration,easing:s.animateEasing,step:function(){var s={width:parseInt(i.element.css("width"),10),height:parseInt(i.element.css("height"),10),top:parseInt(i.element.css("top"),10),left:parseInt(i.element.css("left"),10)};n&&n.length&&e(n[0]).css({width:s.width,height:s.height}),i._updateCache(s),i._propagate("resize",t)}})}}),e.ui.plugin.add("resizable","containment",{start:function(){var t,i,s,n,a,o,r,h=e(this).resizable("instance"),l=h.options,u=h.element,d=l.containment,c=d instanceof e?d.get(0):/parent/.test(d)?u.parent().get(0):d;c&&(h.containerElement=e(c),/document/.test(d)||d===document?(h.containerOffset={left:0,top:0},h.containerPosition={left:0,top:0},h.parentData={element:e(document),left:0,top:0,width:e(document).width(),height:e(document).height()||document.body.parentNode.scrollHeight}):(t=e(c),i=[],e(["Top","Right","Left","Bottom"]).each(function(e,s){i[e]=h._num(t.css("padding"+s))}),h.containerOffset=t.offset(),h.containerPosition=t.position(),h.containerSize={height:t.innerHeight()-i[3],width:t.innerWidth()-i[1]},s=h.containerOffset,n=h.containerSize.height,a=h.containerSize.width,o=h._hasScroll(c,"left")?c.scrollWidth:a,r=h._hasScroll(c)?c.scrollHeight:n,h.parentData={element:c,left:s.left,top:s.top,width:o,height:r}))},resize:function(t){var i,s,n,a,o=e(this).resizable("instance"),r=o.options,h=o.containerOffset,l=o.position,u=o._aspectRatio||t.shiftKey,d={top:0,left:0},c=o.containerElement,p=!0;c[0]!==document&&/static/.test(c.css("position"))&&(d=h),l.left<(o._helper?h.left:0)&&(o.size.width=o.size.width+(o._helper?o.position.left-h.left:o.position.left-d.left),u&&(o.size.height=o.size.width/o.aspectRatio,p=!1),o.position.left=r.helper?h.left:0),l.top<(o._helper?h.top:0)&&(o.size.height=o.size.height+(o._helper?o.position.top-h.top:o.position.top),u&&(o.size.width=o.size.height*o.aspectRatio,p=!1),o.position.top=o._helper?h.top:0),n=o.containerElement.get(0)===o.element.parent().get(0),a=/relative|absolute/.test(o.containerElement.css("position")),n&&a?(o.offset.left=o.parentData.left+o.position.left,o.offset.top=o.parentData.top+o.position.top):(o.offset.left=o.element.offset().left,o.offset.top=o.element.offset().top),i=Math.abs(o.sizeDiff.width+(o._helper?o.offset.left-d.left:o.offset.left-h.left)),s=Math.abs(o.sizeDiff.height+(o._helper?o.offset.top-d.top:o.offset.top-h.top)),i+o.size.width>=o.parentData.width&&(o.size.width=o.parentData.width-i,u&&(o.size.height=o.size.width/o.aspectRatio,p=!1)),s+o.size.height>=o.parentData.height&&(o.size.height=o.parentData.height-s,u&&(o.size.width=o.size.height*o.aspectRatio,p=!1)),p||(o.position.left=o.prevPosition.left,o.position.top=o.prevPosition.top,o.size.width=o.prevSize.width,o.size.height=o.prevSize.height)},stop:function(){var t=e(this).resizable("instance"),i=t.options,s=t.containerOffset,n=t.containerPosition,a=t.containerElement,o=e(t.helper),r=o.offset(),h=o.outerWidth()-t.sizeDiff.width,l=o.outerHeight()-t.sizeDiff.height;t._helper&&!i.animate&&/relative/.test(a.css("position"))&&e(this).css({left:r.left-n.left-s.left,width:h,height:l}),t._helper&&!i.animate&&/static/.test(a.css("position"))&&e(this).css({left:r.left-n.left-s.left,width:h,height:l})}}),e.ui.plugin.add("resizable","alsoResize",{start:function(){var t=e(this).resizable("instance"),i=t.options;e(i.alsoResize).each(function(){var t=e(this);t.data("ui-resizable-alsoresize",{width:parseInt(t.width(),10),height:parseInt(t.height(),10),left:parseInt(t.css("left"),10),top:parseInt(t.css("top"),10)})})},resize:function(t,i){var s=e(this).resizable("instance"),n=s.options,a=s.originalSize,o=s.originalPosition,r={height:s.size.height-a.height||0,width:s.size.width-a.width||0,top:s.position.top-o.top||0,left:s.position.left-o.left||0};e(n.alsoResize).each(function(){var t=e(this),s=e(this).data("ui-resizable-alsoresize"),n={},a=t.parents(i.originalElement[0]).length?["width","height"]:["width","height","top","left"];e.each(a,function(e,t){var i=(s[t]||0)+(r[t]||0);i&&i>=0&&(n[t]=i||null)}),t.css(n)})},stop:function(){e(this).removeData("resizable-alsoresize")}}),e.ui.plugin.add("resizable","ghost",{start:function(){var t=e(this).resizable("instance"),i=t.options,s=t.size;t.ghost=t.originalElement.clone(),t.ghost.css({opacity:.25,display:"block",position:"relative",height:s.height,width:s.width,margin:0,left:0,top:0}).addClass("ui-resizable-ghost").addClass("string"==typeof i.ghost?i.ghost:""),t.ghost.appendTo(t.helper)},resize:function(){var t=e(this).resizable("instance");t.ghost&&t.ghost.css({position:"relative",height:t.size.height,width:t.size.width})},stop:function(){var t=e(this).resizable("instance");t.ghost&&t.helper&&t.helper.get(0).removeChild(t.ghost.get(0))}}),e.ui.plugin.add("resizable","grid",{resize:function(){var t,i=e(this).resizable("instance"),s=i.options,n=i.size,a=i.originalSize,o=i.originalPosition,r=i.axis,h="number"==typeof s.grid?[s.grid,s.grid]:s.grid,l=h[0]||1,u=h[1]||1,d=Math.round((n.width-a.width)/l)*l,c=Math.round((n.height-a.height)/u)*u,p=a.width+d,f=a.height+c,m=s.maxWidth&&p>s.maxWidth,g=s.maxHeight&&f>s.maxHeight,v=s.minWidth&&s.minWidth>p,y=s.minHeight&&s.minHeight>f;s.grid=h,v&&(p+=l),y&&(f+=u),m&&(p-=l),g&&(f-=u),/^(se|s|e)$/.test(r)?(i.size.width=p,i.size.height=f):/^(ne)$/.test(r)?(i.size.width=p,i.size.height=f,i.position.top=o.top-c):/^(sw)$/.test(r)?(i.size.width=p,i.size.height=f,i.position.left=o.left-d):((0>=f-u||0>=p-l)&&(t=i._getPaddingPlusBorderDimensions(this)),f-u>0?(i.size.height=f,i.position.top=o.top-c):(f=u-t.height,i.size.height=f,i.position.top=o.top+a.height-f),p-l>0?(i.size.width=p,i.position.left=o.left-d):(p=l-t.width,i.size.width=p,i.position.left=o.left+a.width-p))}}),e.ui.resizable,e.widget("ui.dialog",{version:"1.11.4",options:{appendTo:"body",autoOpen:!0,buttons:[],closeOnEscape:!0,closeText:"Close",dialogClass:"",draggable:!0,hide:null,height:"auto",maxHeight:null,maxWidth:null,minHeight:150,minWidth:150,modal:!1,position:{my:"center",at:"center",of:window,collision:"fit",using:function(t){var i=e(this).css(t).offset().top;0>i&&e(this).css("top",t.top-i)}},resizable:!0,show:null,title:null,width:300,beforeClose:null,close:null,drag:null,dragStart:null,dragStop:null,focus:null,open:null,resize:null,resizeStart:null,resizeStop:null},sizeRelatedOptions:{buttons:!0,height:!0,maxHeight:!0,maxWidth:!0,minHeight:!0,minWidth:!0,width:!0},resizableRelatedOptions:{maxHeight:!0,maxWidth:!0,minHeight:!0,minWidth:!0},_create:function(){this.originalCss={display:this.element[0].style.display,width:this.element[0].style.width,minHeight:this.element[0].style.minHeight,maxHeight:this.element[0].style.maxHeight,height:this.element[0].style.height},this.originalPosition={parent:this.element.parent(),index:this.element.parent().children().index(this.element)},this.originalTitle=this.element.attr("title"),this.options.title=this.options.title||this.originalTitle,this._createWrapper(),this.element.show().removeAttr("title").addClass("ui-dialog-content ui-widget-content").appendTo(this.uiDialog),this._createTitlebar(),this._createButtonPane(),this.options.draggable&&e.fn.draggable&&this._makeDraggable(),this.options.resizable&&e.fn.resizable&&this._makeResizable(),this._isOpen=!1,this._trackFocus()},_init:function(){this.options.autoOpen&&this.open()},_appendTo:function(){var t=this.options.appendTo;return t&&(t.jquery||t.nodeType)?e(t):this.document.find(t||"body").eq(0)},_destroy:function(){var e,t=this.originalPosition;this._untrackInstance(),this._destroyOverlay(),this.element.removeUniqueId().removeClass("ui-dialog-content ui-widget-content").css(this.originalCss).detach(),this.uiDialog.stop(!0,!0).remove(),this.originalTitle&&this.element.attr("title",this.originalTitle),e=t.parent.children().eq(t.index),e.length&&e[0]!==this.element[0]?e.before(this.element):t.parent.append(this.element)},widget:function(){return this.uiDialog},disable:e.noop,enable:e.noop,close:function(t){var i,s=this;if(this._isOpen&&this._trigger("beforeClose",t)!==!1){if(this._isOpen=!1,this._focusedElement=null,this._destroyOverlay(),this._untrackInstance(),!this.opener.filter(":focusable").focus().length)try{i=this.document[0].activeElement,i&&"body"!==i.nodeName.toLowerCase()&&e(i).blur()}catch(n){}this._hide(this.uiDialog,this.options.hide,function(){s._trigger("close",t)})}},isOpen:function(){return this._isOpen},moveToTop:function(){this._moveToTop()},_moveToTop:function(t,i){var s=!1,n=this.uiDialog.siblings(".ui-front:visible").map(function(){return+e(this).css("z-index")}).get(),a=Math.max.apply(null,n);return a>=+this.uiDialog.css("z-index")&&(this.uiDialog.css("z-index",a+1),s=!0),s&&!i&&this._trigger("focus",t),s},open:function(){var t=this;return this._isOpen?(this._moveToTop()&&this._focusTabbable(),void 0):(this._isOpen=!0,this.opener=e(this.document[0].activeElement),this._size(),this._position(),this._createOverlay(),this._moveToTop(null,!0),this.overlay&&this.overlay.css("z-index",this.uiDialog.css("z-index")-1),this._show(this.uiDialog,this.options.show,function(){t._focusTabbable(),t._trigger("focus")}),this._makeFocusTarget(),this._trigger("open"),void 0)},_focusTabbable:function(){var e=this._focusedElement;e||(e=this.element.find("[autofocus]")),e.length||(e=this.element.find(":tabbable")),e.length||(e=this.uiDialogButtonPane.find(":tabbable")),e.length||(e=this.uiDialogTitlebarClose.filter(":tabbable")),e.length||(e=this.uiDialog),e.eq(0).focus()},_keepFocus:function(t){function i(){var t=this.document[0].activeElement,i=this.uiDialog[0]===t||e.contains(this.uiDialog[0],t);i||this._focusTabbable()}t.preventDefault(),i.call(this),this._delay(i)},_createWrapper:function(){this.uiDialog=e("<div>").addClass("ui-dialog ui-widget ui-widget-content ui-corner-all ui-front "+this.options.dialogClass).hide().attr({tabIndex:-1,role:"dialog"}).appendTo(this._appendTo()),this._on(this.uiDialog,{keydown:function(t){if(this.options.closeOnEscape&&!t.isDefaultPrevented()&&t.keyCode&&t.keyCode===e.ui.keyCode.ESCAPE)return t.preventDefault(),this.close(t),void 0;
if(t.keyCode===e.ui.keyCode.TAB&&!t.isDefaultPrevented()){var i=this.uiDialog.find(":tabbable"),s=i.filter(":first"),n=i.filter(":last");t.target!==n[0]&&t.target!==this.uiDialog[0]||t.shiftKey?t.target!==s[0]&&t.target!==this.uiDialog[0]||!t.shiftKey||(this._delay(function(){n.focus()}),t.preventDefault()):(this._delay(function(){s.focus()}),t.preventDefault())}},mousedown:function(e){this._moveToTop(e)&&this._focusTabbable()}}),this.element.find("[aria-describedby]").length||this.uiDialog.attr({"aria-describedby":this.element.uniqueId().attr("id")})},_createTitlebar:function(){var t;this.uiDialogTitlebar=e("<div>").addClass("ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix").prependTo(this.uiDialog),this._on(this.uiDialogTitlebar,{mousedown:function(t){e(t.target).closest(".ui-dialog-titlebar-close")||this.uiDialog.focus()}}),this.uiDialogTitlebarClose=e("<button type='button'></button>").button({label:this.options.closeText,icons:{primary:"ui-icon-closethick"},text:!1}).addClass("ui-dialog-titlebar-close").appendTo(this.uiDialogTitlebar),this._on(this.uiDialogTitlebarClose,{click:function(e){e.preventDefault(),this.close(e)}}),t=e("<span>").uniqueId().addClass("ui-dialog-title").prependTo(this.uiDialogTitlebar),this._title(t),this.uiDialog.attr({"aria-labelledby":t.attr("id")})},_title:function(e){this.options.title||e.html("&#160;"),e.text(this.options.title)},_createButtonPane:function(){this.uiDialogButtonPane=e("<div>").addClass("ui-dialog-buttonpane ui-widget-content ui-helper-clearfix"),this.uiButtonSet=e("<div>").addClass("ui-dialog-buttonset").appendTo(this.uiDialogButtonPane),this._createButtons()},_createButtons:function(){var t=this,i=this.options.buttons;return this.uiDialogButtonPane.remove(),this.uiButtonSet.empty(),e.isEmptyObject(i)||e.isArray(i)&&!i.length?(this.uiDialog.removeClass("ui-dialog-buttons"),void 0):(e.each(i,function(i,s){var n,a;s=e.isFunction(s)?{click:s,text:i}:s,s=e.extend({type:"button"},s),n=s.click,s.click=function(){n.apply(t.element[0],arguments)},a={icons:s.icons,text:s.showText},delete s.icons,delete s.showText,e("<button></button>",s).button(a).appendTo(t.uiButtonSet)}),this.uiDialog.addClass("ui-dialog-buttons"),this.uiDialogButtonPane.appendTo(this.uiDialog),void 0)},_makeDraggable:function(){function t(e){return{position:e.position,offset:e.offset}}var i=this,s=this.options;this.uiDialog.draggable({cancel:".ui-dialog-content, .ui-dialog-titlebar-close",handle:".ui-dialog-titlebar",containment:"document",start:function(s,n){e(this).addClass("ui-dialog-dragging"),i._blockFrames(),i._trigger("dragStart",s,t(n))},drag:function(e,s){i._trigger("drag",e,t(s))},stop:function(n,a){var o=a.offset.left-i.document.scrollLeft(),r=a.offset.top-i.document.scrollTop();s.position={my:"left top",at:"left"+(o>=0?"+":"")+o+" "+"top"+(r>=0?"+":"")+r,of:i.window},e(this).removeClass("ui-dialog-dragging"),i._unblockFrames(),i._trigger("dragStop",n,t(a))}})},_makeResizable:function(){function t(e){return{originalPosition:e.originalPosition,originalSize:e.originalSize,position:e.position,size:e.size}}var i=this,s=this.options,n=s.resizable,a=this.uiDialog.css("position"),o="string"==typeof n?n:"n,e,s,w,se,sw,ne,nw";this.uiDialog.resizable({cancel:".ui-dialog-content",containment:"document",alsoResize:this.element,maxWidth:s.maxWidth,maxHeight:s.maxHeight,minWidth:s.minWidth,minHeight:this._minHeight(),handles:o,start:function(s,n){e(this).addClass("ui-dialog-resizing"),i._blockFrames(),i._trigger("resizeStart",s,t(n))},resize:function(e,s){i._trigger("resize",e,t(s))},stop:function(n,a){var o=i.uiDialog.offset(),r=o.left-i.document.scrollLeft(),h=o.top-i.document.scrollTop();s.height=i.uiDialog.height(),s.width=i.uiDialog.width(),s.position={my:"left top",at:"left"+(r>=0?"+":"")+r+" "+"top"+(h>=0?"+":"")+h,of:i.window},e(this).removeClass("ui-dialog-resizing"),i._unblockFrames(),i._trigger("resizeStop",n,t(a))}}).css("position",a)},_trackFocus:function(){this._on(this.widget(),{focusin:function(t){this._makeFocusTarget(),this._focusedElement=e(t.target)}})},_makeFocusTarget:function(){this._untrackInstance(),this._trackingInstances().unshift(this)},_untrackInstance:function(){var t=this._trackingInstances(),i=e.inArray(this,t);-1!==i&&t.splice(i,1)},_trackingInstances:function(){var e=this.document.data("ui-dialog-instances");return e||(e=[],this.document.data("ui-dialog-instances",e)),e},_minHeight:function(){var e=this.options;return"auto"===e.height?e.minHeight:Math.min(e.minHeight,e.height)},_position:function(){var e=this.uiDialog.is(":visible");e||this.uiDialog.show(),this.uiDialog.position(this.options.position),e||this.uiDialog.hide()},_setOptions:function(t){var i=this,s=!1,n={};e.each(t,function(e,t){i._setOption(e,t),e in i.sizeRelatedOptions&&(s=!0),e in i.resizableRelatedOptions&&(n[e]=t)}),s&&(this._size(),this._position()),this.uiDialog.is(":data(ui-resizable)")&&this.uiDialog.resizable("option",n)},_setOption:function(e,t){var i,s,n=this.uiDialog;"dialogClass"===e&&n.removeClass(this.options.dialogClass).addClass(t),"disabled"!==e&&(this._super(e,t),"appendTo"===e&&this.uiDialog.appendTo(this._appendTo()),"buttons"===e&&this._createButtons(),"closeText"===e&&this.uiDialogTitlebarClose.button({label:""+t}),"draggable"===e&&(i=n.is(":data(ui-draggable)"),i&&!t&&n.draggable("destroy"),!i&&t&&this._makeDraggable()),"position"===e&&this._position(),"resizable"===e&&(s=n.is(":data(ui-resizable)"),s&&!t&&n.resizable("destroy"),s&&"string"==typeof t&&n.resizable("option","handles",t),s||t===!1||this._makeResizable()),"title"===e&&this._title(this.uiDialogTitlebar.find(".ui-dialog-title")))},_size:function(){var e,t,i,s=this.options;this.element.show().css({width:"auto",minHeight:0,maxHeight:"none",height:0}),s.minWidth>s.width&&(s.width=s.minWidth),e=this.uiDialog.css({height:"auto",width:s.width}).outerHeight(),t=Math.max(0,s.minHeight-e),i="number"==typeof s.maxHeight?Math.max(0,s.maxHeight-e):"none","auto"===s.height?this.element.css({minHeight:t,maxHeight:i,height:"auto"}):this.element.height(Math.max(0,s.height-e)),this.uiDialog.is(":data(ui-resizable)")&&this.uiDialog.resizable("option","minHeight",this._minHeight())},_blockFrames:function(){this.iframeBlocks=this.document.find("iframe").map(function(){var t=e(this);return e("<div>").css({position:"absolute",width:t.outerWidth(),height:t.outerHeight()}).appendTo(t.parent()).offset(t.offset())[0]})},_unblockFrames:function(){this.iframeBlocks&&(this.iframeBlocks.remove(),delete this.iframeBlocks)},_allowInteraction:function(t){return e(t.target).closest(".ui-dialog").length?!0:!!e(t.target).closest(".ui-datepicker").length},_createOverlay:function(){if(this.options.modal){var t=!0;this._delay(function(){t=!1}),this.document.data("ui-dialog-overlays")||this._on(this.document,{focusin:function(e){t||this._allowInteraction(e)||(e.preventDefault(),this._trackingInstances()[0]._focusTabbable())}}),this.overlay=e("<div>").addClass("ui-widget-overlay ui-front").appendTo(this._appendTo()),this._on(this.overlay,{mousedown:"_keepFocus"}),this.document.data("ui-dialog-overlays",(this.document.data("ui-dialog-overlays")||0)+1)}},_destroyOverlay:function(){if(this.options.modal&&this.overlay){var e=this.document.data("ui-dialog-overlays")-1;e?this.document.data("ui-dialog-overlays",e):this.document.unbind("focusin").removeData("ui-dialog-overlays"),this.overlay.remove(),this.overlay=null}}}),e.widget("ui.droppable",{version:"1.11.4",widgetEventPrefix:"drop",options:{accept:"*",activeClass:!1,addClasses:!0,greedy:!1,hoverClass:!1,scope:"default",tolerance:"intersect",activate:null,deactivate:null,drop:null,out:null,over:null},_create:function(){var t,i=this.options,s=i.accept;this.isover=!1,this.isout=!0,this.accept=e.isFunction(s)?s:function(e){return e.is(s)},this.proportions=function(){return arguments.length?(t=arguments[0],void 0):t?t:t={width:this.element[0].offsetWidth,height:this.element[0].offsetHeight}},this._addToManager(i.scope),i.addClasses&&this.element.addClass("ui-droppable")},_addToManager:function(t){e.ui.ddmanager.droppables[t]=e.ui.ddmanager.droppables[t]||[],e.ui.ddmanager.droppables[t].push(this)},_splice:function(e){for(var t=0;e.length>t;t++)e[t]===this&&e.splice(t,1)},_destroy:function(){var t=e.ui.ddmanager.droppables[this.options.scope];this._splice(t),this.element.removeClass("ui-droppable ui-droppable-disabled")},_setOption:function(t,i){if("accept"===t)this.accept=e.isFunction(i)?i:function(e){return e.is(i)};else if("scope"===t){var s=e.ui.ddmanager.droppables[this.options.scope];this._splice(s),this._addToManager(i)}this._super(t,i)},_activate:function(t){var i=e.ui.ddmanager.current;this.options.activeClass&&this.element.addClass(this.options.activeClass),i&&this._trigger("activate",t,this.ui(i))},_deactivate:function(t){var i=e.ui.ddmanager.current;this.options.activeClass&&this.element.removeClass(this.options.activeClass),i&&this._trigger("deactivate",t,this.ui(i))},_over:function(t){var i=e.ui.ddmanager.current;i&&(i.currentItem||i.element)[0]!==this.element[0]&&this.accept.call(this.element[0],i.currentItem||i.element)&&(this.options.hoverClass&&this.element.addClass(this.options.hoverClass),this._trigger("over",t,this.ui(i)))},_out:function(t){var i=e.ui.ddmanager.current;i&&(i.currentItem||i.element)[0]!==this.element[0]&&this.accept.call(this.element[0],i.currentItem||i.element)&&(this.options.hoverClass&&this.element.removeClass(this.options.hoverClass),this._trigger("out",t,this.ui(i)))},_drop:function(t,i){var s=i||e.ui.ddmanager.current,n=!1;return s&&(s.currentItem||s.element)[0]!==this.element[0]?(this.element.find(":data(ui-droppable)").not(".ui-draggable-dragging").each(function(){var i=e(this).droppable("instance");return i.options.greedy&&!i.options.disabled&&i.options.scope===s.options.scope&&i.accept.call(i.element[0],s.currentItem||s.element)&&e.ui.intersect(s,e.extend(i,{offset:i.element.offset()}),i.options.tolerance,t)?(n=!0,!1):void 0}),n?!1:this.accept.call(this.element[0],s.currentItem||s.element)?(this.options.activeClass&&this.element.removeClass(this.options.activeClass),this.options.hoverClass&&this.element.removeClass(this.options.hoverClass),this._trigger("drop",t,this.ui(s)),this.element):!1):!1},ui:function(e){return{draggable:e.currentItem||e.element,helper:e.helper,position:e.position,offset:e.positionAbs}}}),e.ui.intersect=function(){function e(e,t,i){return e>=t&&t+i>e}return function(t,i,s,n){if(!i.offset)return!1;var a=(t.positionAbs||t.position.absolute).left+t.margins.left,o=(t.positionAbs||t.position.absolute).top+t.margins.top,r=a+t.helperProportions.width,h=o+t.helperProportions.height,l=i.offset.left,u=i.offset.top,d=l+i.proportions().width,c=u+i.proportions().height;switch(s){case"fit":return a>=l&&d>=r&&o>=u&&c>=h;case"intersect":return a+t.helperProportions.width/2>l&&d>r-t.helperProportions.width/2&&o+t.helperProportions.height/2>u&&c>h-t.helperProportions.height/2;case"pointer":return e(n.pageY,u,i.proportions().height)&&e(n.pageX,l,i.proportions().width);case"touch":return(o>=u&&c>=o||h>=u&&c>=h||u>o&&h>c)&&(a>=l&&d>=a||r>=l&&d>=r||l>a&&r>d);default:return!1}}}(),e.ui.ddmanager={current:null,droppables:{"default":[]},prepareOffsets:function(t,i){var s,n,a=e.ui.ddmanager.droppables[t.options.scope]||[],o=i?i.type:null,r=(t.currentItem||t.element).find(":data(ui-droppable)").addBack();e:for(s=0;a.length>s;s++)if(!(a[s].options.disabled||t&&!a[s].accept.call(a[s].element[0],t.currentItem||t.element))){for(n=0;r.length>n;n++)if(r[n]===a[s].element[0]){a[s].proportions().height=0;continue e}a[s].visible="none"!==a[s].element.css("display"),a[s].visible&&("mousedown"===o&&a[s]._activate.call(a[s],i),a[s].offset=a[s].element.offset(),a[s].proportions({width:a[s].element[0].offsetWidth,height:a[s].element[0].offsetHeight}))}},drop:function(t,i){var s=!1;return e.each((e.ui.ddmanager.droppables[t.options.scope]||[]).slice(),function(){this.options&&(!this.options.disabled&&this.visible&&e.ui.intersect(t,this,this.options.tolerance,i)&&(s=this._drop.call(this,i)||s),!this.options.disabled&&this.visible&&this.accept.call(this.element[0],t.currentItem||t.element)&&(this.isout=!0,this.isover=!1,this._deactivate.call(this,i)))}),s},dragStart:function(t,i){t.element.parentsUntil("body").bind("scroll.droppable",function(){t.options.refreshPositions||e.ui.ddmanager.prepareOffsets(t,i)})},drag:function(t,i){t.options.refreshPositions&&e.ui.ddmanager.prepareOffsets(t,i),e.each(e.ui.ddmanager.droppables[t.options.scope]||[],function(){if(!this.options.disabled&&!this.greedyChild&&this.visible){var s,n,a,o=e.ui.intersect(t,this,this.options.tolerance,i),r=!o&&this.isover?"isout":o&&!this.isover?"isover":null;r&&(this.options.greedy&&(n=this.options.scope,a=this.element.parents(":data(ui-droppable)").filter(function(){return e(this).droppable("instance").options.scope===n}),a.length&&(s=e(a[0]).droppable("instance"),s.greedyChild="isover"===r)),s&&"isover"===r&&(s.isover=!1,s.isout=!0,s._out.call(s,i)),this[r]=!0,this["isout"===r?"isover":"isout"]=!1,this["isover"===r?"_over":"_out"].call(this,i),s&&"isout"===r&&(s.isout=!1,s.isover=!0,s._over.call(s,i)))}})},dragStop:function(t,i){t.element.parentsUntil("body").unbind("scroll.droppable"),t.options.refreshPositions||e.ui.ddmanager.prepareOffsets(t,i)}},e.ui.droppable;var y="ui-effects-",b=e;e.effects={effect:{}},function(e,t){function i(e,t,i){var s=d[t.type]||{};return null==e?i||!t.def?null:t.def:(e=s.floor?~~e:parseFloat(e),isNaN(e)?t.def:s.mod?(e+s.mod)%s.mod:0>e?0:e>s.max?s.max:e)}function s(i){var s=l(),n=s._rgba=[];return i=i.toLowerCase(),f(h,function(e,a){var o,r=a.re.exec(i),h=r&&a.parse(r),l=a.space||"rgba";return h?(o=s[l](h),s[u[l].cache]=o[u[l].cache],n=s._rgba=o._rgba,!1):t}),n.length?("0,0,0,0"===n.join()&&e.extend(n,a.transparent),s):a[i]}function n(e,t,i){return i=(i+1)%1,1>6*i?e+6*(t-e)*i:1>2*i?t:2>3*i?e+6*(t-e)*(2/3-i):e}var a,o="backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor",r=/^([\-+])=\s*(\d+\.?\d*)/,h=[{re:/rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(e){return[e[1],e[2],e[3],e[4]]}},{re:/rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(e){return[2.55*e[1],2.55*e[2],2.55*e[3],e[4]]}},{re:/#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,parse:function(e){return[parseInt(e[1],16),parseInt(e[2],16),parseInt(e[3],16)]}},{re:/#([a-f0-9])([a-f0-9])([a-f0-9])/,parse:function(e){return[parseInt(e[1]+e[1],16),parseInt(e[2]+e[2],16),parseInt(e[3]+e[3],16)]}},{re:/hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,space:"hsla",parse:function(e){return[e[1],e[2]/100,e[3]/100,e[4]]}}],l=e.Color=function(t,i,s,n){return new e.Color.fn.parse(t,i,s,n)},u={rgba:{props:{red:{idx:0,type:"byte"},green:{idx:1,type:"byte"},blue:{idx:2,type:"byte"}}},hsla:{props:{hue:{idx:0,type:"degrees"},saturation:{idx:1,type:"percent"},lightness:{idx:2,type:"percent"}}}},d={"byte":{floor:!0,max:255},percent:{max:1},degrees:{mod:360,floor:!0}},c=l.support={},p=e("<p>")[0],f=e.each;p.style.cssText="background-color:rgba(1,1,1,.5)",c.rgba=p.style.backgroundColor.indexOf("rgba")>-1,f(u,function(e,t){t.cache="_"+e,t.props.alpha={idx:3,type:"percent",def:1}}),l.fn=e.extend(l.prototype,{parse:function(n,o,r,h){if(n===t)return this._rgba=[null,null,null,null],this;(n.jquery||n.nodeType)&&(n=e(n).css(o),o=t);var d=this,c=e.type(n),p=this._rgba=[];return o!==t&&(n=[n,o,r,h],c="array"),"string"===c?this.parse(s(n)||a._default):"array"===c?(f(u.rgba.props,function(e,t){p[t.idx]=i(n[t.idx],t)}),this):"object"===c?(n instanceof l?f(u,function(e,t){n[t.cache]&&(d[t.cache]=n[t.cache].slice())}):f(u,function(t,s){var a=s.cache;f(s.props,function(e,t){if(!d[a]&&s.to){if("alpha"===e||null==n[e])return;d[a]=s.to(d._rgba)}d[a][t.idx]=i(n[e],t,!0)}),d[a]&&0>e.inArray(null,d[a].slice(0,3))&&(d[a][3]=1,s.from&&(d._rgba=s.from(d[a])))}),this):t},is:function(e){var i=l(e),s=!0,n=this;return f(u,function(e,a){var o,r=i[a.cache];return r&&(o=n[a.cache]||a.to&&a.to(n._rgba)||[],f(a.props,function(e,i){return null!=r[i.idx]?s=r[i.idx]===o[i.idx]:t})),s}),s},_space:function(){var e=[],t=this;return f(u,function(i,s){t[s.cache]&&e.push(i)}),e.pop()},transition:function(e,t){var s=l(e),n=s._space(),a=u[n],o=0===this.alpha()?l("transparent"):this,r=o[a.cache]||a.to(o._rgba),h=r.slice();return s=s[a.cache],f(a.props,function(e,n){var a=n.idx,o=r[a],l=s[a],u=d[n.type]||{};null!==l&&(null===o?h[a]=l:(u.mod&&(l-o>u.mod/2?o+=u.mod:o-l>u.mod/2&&(o-=u.mod)),h[a]=i((l-o)*t+o,n)))}),this[n](h)},blend:function(t){if(1===this._rgba[3])return this;var i=this._rgba.slice(),s=i.pop(),n=l(t)._rgba;return l(e.map(i,function(e,t){return(1-s)*n[t]+s*e}))},toRgbaString:function(){var t="rgba(",i=e.map(this._rgba,function(e,t){return null==e?t>2?1:0:e});return 1===i[3]&&(i.pop(),t="rgb("),t+i.join()+")"},toHslaString:function(){var t="hsla(",i=e.map(this.hsla(),function(e,t){return null==e&&(e=t>2?1:0),t&&3>t&&(e=Math.round(100*e)+"%"),e});return 1===i[3]&&(i.pop(),t="hsl("),t+i.join()+")"},toHexString:function(t){var i=this._rgba.slice(),s=i.pop();return t&&i.push(~~(255*s)),"#"+e.map(i,function(e){return e=(e||0).toString(16),1===e.length?"0"+e:e}).join("")},toString:function(){return 0===this._rgba[3]?"transparent":this.toRgbaString()}}),l.fn.parse.prototype=l.fn,u.hsla.to=function(e){if(null==e[0]||null==e[1]||null==e[2])return[null,null,null,e[3]];var t,i,s=e[0]/255,n=e[1]/255,a=e[2]/255,o=e[3],r=Math.max(s,n,a),h=Math.min(s,n,a),l=r-h,u=r+h,d=.5*u;return t=h===r?0:s===r?60*(n-a)/l+360:n===r?60*(a-s)/l+120:60*(s-n)/l+240,i=0===l?0:.5>=d?l/u:l/(2-u),[Math.round(t)%360,i,d,null==o?1:o]},u.hsla.from=function(e){if(null==e[0]||null==e[1]||null==e[2])return[null,null,null,e[3]];var t=e[0]/360,i=e[1],s=e[2],a=e[3],o=.5>=s?s*(1+i):s+i-s*i,r=2*s-o;return[Math.round(255*n(r,o,t+1/3)),Math.round(255*n(r,o,t)),Math.round(255*n(r,o,t-1/3)),a]},f(u,function(s,n){var a=n.props,o=n.cache,h=n.to,u=n.from;l.fn[s]=function(s){if(h&&!this[o]&&(this[o]=h(this._rgba)),s===t)return this[o].slice();var n,r=e.type(s),d="array"===r||"object"===r?s:arguments,c=this[o].slice();return f(a,function(e,t){var s=d["object"===r?e:t.idx];null==s&&(s=c[t.idx]),c[t.idx]=i(s,t)}),u?(n=l(u(c)),n[o]=c,n):l(c)},f(a,function(t,i){l.fn[t]||(l.fn[t]=function(n){var a,o=e.type(n),h="alpha"===t?this._hsla?"hsla":"rgba":s,l=this[h](),u=l[i.idx];return"undefined"===o?u:("function"===o&&(n=n.call(this,u),o=e.type(n)),null==n&&i.empty?this:("string"===o&&(a=r.exec(n),a&&(n=u+parseFloat(a[2])*("+"===a[1]?1:-1))),l[i.idx]=n,this[h](l)))})})}),l.hook=function(t){var i=t.split(" ");f(i,function(t,i){e.cssHooks[i]={set:function(t,n){var a,o,r="";if("transparent"!==n&&("string"!==e.type(n)||(a=s(n)))){if(n=l(a||n),!c.rgba&&1!==n._rgba[3]){for(o="backgroundColor"===i?t.parentNode:t;(""===r||"transparent"===r)&&o&&o.style;)try{r=e.css(o,"backgroundColor"),o=o.parentNode}catch(h){}n=n.blend(r&&"transparent"!==r?r:"_default")}n=n.toRgbaString()}try{t.style[i]=n}catch(h){}}},e.fx.step[i]=function(t){t.colorInit||(t.start=l(t.elem,i),t.end=l(t.end),t.colorInit=!0),e.cssHooks[i].set(t.elem,t.start.transition(t.end,t.pos))}})},l.hook(o),e.cssHooks.borderColor={expand:function(e){var t={};return f(["Top","Right","Bottom","Left"],function(i,s){t["border"+s+"Color"]=e}),t}},a=e.Color.names={aqua:"#00ffff",black:"#000000",blue:"#0000ff",fuchsia:"#ff00ff",gray:"#808080",green:"#008000",lime:"#00ff00",maroon:"#800000",navy:"#000080",olive:"#808000",purple:"#800080",red:"#ff0000",silver:"#c0c0c0",teal:"#008080",white:"#ffffff",yellow:"#ffff00",transparent:[null,null,null,0],_default:"#ffffff"}}(b),function(){function t(t){var i,s,n=t.ownerDocument.defaultView?t.ownerDocument.defaultView.getComputedStyle(t,null):t.currentStyle,a={};if(n&&n.length&&n[0]&&n[n[0]])for(s=n.length;s--;)i=n[s],"string"==typeof n[i]&&(a[e.camelCase(i)]=n[i]);else for(i in n)"string"==typeof n[i]&&(a[i]=n[i]);return a}function i(t,i){var s,a,o={};for(s in i)a=i[s],t[s]!==a&&(n[s]||(e.fx.step[s]||!isNaN(parseFloat(a)))&&(o[s]=a));return o}var s=["add","remove","toggle"],n={border:1,borderBottom:1,borderColor:1,borderLeft:1,borderRight:1,borderTop:1,borderWidth:1,margin:1,padding:1};e.each(["borderLeftStyle","borderRightStyle","borderBottomStyle","borderTopStyle"],function(t,i){e.fx.step[i]=function(e){("none"!==e.end&&!e.setAttr||1===e.pos&&!e.setAttr)&&(b.style(e.elem,i,e.end),e.setAttr=!0)}}),e.fn.addBack||(e.fn.addBack=function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}),e.effects.animateClass=function(n,a,o,r){var h=e.speed(a,o,r);return this.queue(function(){var a,o=e(this),r=o.attr("class")||"",l=h.children?o.find("*").addBack():o;l=l.map(function(){var i=e(this);return{el:i,start:t(this)}}),a=function(){e.each(s,function(e,t){n[t]&&o[t+"Class"](n[t])})},a(),l=l.map(function(){return this.end=t(this.el[0]),this.diff=i(this.start,this.end),this}),o.attr("class",r),l=l.map(function(){var t=this,i=e.Deferred(),s=e.extend({},h,{queue:!1,complete:function(){i.resolve(t)}});return this.el.animate(this.diff,s),i.promise()}),e.when.apply(e,l.get()).done(function(){a(),e.each(arguments,function(){var t=this.el;e.each(this.diff,function(e){t.css(e,"")})}),h.complete.call(o[0])})})},e.fn.extend({addClass:function(t){return function(i,s,n,a){return s?e.effects.animateClass.call(this,{add:i},s,n,a):t.apply(this,arguments)}}(e.fn.addClass),removeClass:function(t){return function(i,s,n,a){return arguments.length>1?e.effects.animateClass.call(this,{remove:i},s,n,a):t.apply(this,arguments)}}(e.fn.removeClass),toggleClass:function(t){return function(i,s,n,a,o){return"boolean"==typeof s||void 0===s?n?e.effects.animateClass.call(this,s?{add:i}:{remove:i},n,a,o):t.apply(this,arguments):e.effects.animateClass.call(this,{toggle:i},s,n,a)}}(e.fn.toggleClass),switchClass:function(t,i,s,n,a){return e.effects.animateClass.call(this,{add:i,remove:t},s,n,a)}})}(),function(){function t(t,i,s,n){return e.isPlainObject(t)&&(i=t,t=t.effect),t={effect:t},null==i&&(i={}),e.isFunction(i)&&(n=i,s=null,i={}),("number"==typeof i||e.fx.speeds[i])&&(n=s,s=i,i={}),e.isFunction(s)&&(n=s,s=null),i&&e.extend(t,i),s=s||i.duration,t.duration=e.fx.off?0:"number"==typeof s?s:s in e.fx.speeds?e.fx.speeds[s]:e.fx.speeds._default,t.complete=n||i.complete,t}function i(t){return!t||"number"==typeof t||e.fx.speeds[t]?!0:"string"!=typeof t||e.effects.effect[t]?e.isFunction(t)?!0:"object"!=typeof t||t.effect?!1:!0:!0}e.extend(e.effects,{version:"1.11.4",save:function(e,t){for(var i=0;t.length>i;i++)null!==t[i]&&e.data(y+t[i],e[0].style[t[i]])},restore:function(e,t){var i,s;for(s=0;t.length>s;s++)null!==t[s]&&(i=e.data(y+t[s]),void 0===i&&(i=""),e.css(t[s],i))},setMode:function(e,t){return"toggle"===t&&(t=e.is(":hidden")?"show":"hide"),t},getBaseline:function(e,t){var i,s;switch(e[0]){case"top":i=0;break;case"middle":i=.5;break;case"bottom":i=1;break;default:i=e[0]/t.height}switch(e[1]){case"left":s=0;break;case"center":s=.5;break;case"right":s=1;break;default:s=e[1]/t.width}return{x:s,y:i}},createWrapper:function(t){if(t.parent().is(".ui-effects-wrapper"))return t.parent();var i={width:t.outerWidth(!0),height:t.outerHeight(!0),"float":t.css("float")},s=e("<div></div>").addClass("ui-effects-wrapper").css({fontSize:"100%",background:"transparent",border:"none",margin:0,padding:0}),n={width:t.width(),height:t.height()},a=document.activeElement;try{a.id}catch(o){a=document.body}return t.wrap(s),(t[0]===a||e.contains(t[0],a))&&e(a).focus(),s=t.parent(),"static"===t.css("position")?(s.css({position:"relative"}),t.css({position:"relative"})):(e.extend(i,{position:t.css("position"),zIndex:t.css("z-index")}),e.each(["top","left","bottom","right"],function(e,s){i[s]=t.css(s),isNaN(parseInt(i[s],10))&&(i[s]="auto")}),t.css({position:"relative",top:0,left:0,right:"auto",bottom:"auto"})),t.css(n),s.css(i).show()},removeWrapper:function(t){var i=document.activeElement;return t.parent().is(".ui-effects-wrapper")&&(t.parent().replaceWith(t),(t[0]===i||e.contains(t[0],i))&&e(i).focus()),t},setTransition:function(t,i,s,n){return n=n||{},e.each(i,function(e,i){var a=t.cssUnit(i);a[0]>0&&(n[i]=a[0]*s+a[1])}),n}}),e.fn.extend({effect:function(){function i(t){function i(){e.isFunction(a)&&a.call(n[0]),e.isFunction(t)&&t()}var n=e(this),a=s.complete,r=s.mode;(n.is(":hidden")?"hide"===r:"show"===r)?(n[r](),i()):o.call(n[0],s,i)}var s=t.apply(this,arguments),n=s.mode,a=s.queue,o=e.effects.effect[s.effect];return e.fx.off||!o?n?this[n](s.duration,s.complete):this.each(function(){s.complete&&s.complete.call(this)}):a===!1?this.each(i):this.queue(a||"fx",i)},show:function(e){return function(s){if(i(s))return e.apply(this,arguments);var n=t.apply(this,arguments);return n.mode="show",this.effect.call(this,n)}}(e.fn.show),hide:function(e){return function(s){if(i(s))return e.apply(this,arguments);var n=t.apply(this,arguments);return n.mode="hide",this.effect.call(this,n)}}(e.fn.hide),toggle:function(e){return function(s){if(i(s)||"boolean"==typeof s)return e.apply(this,arguments);var n=t.apply(this,arguments);return n.mode="toggle",this.effect.call(this,n)}}(e.fn.toggle),cssUnit:function(t){var i=this.css(t),s=[];return e.each(["em","px","%","pt"],function(e,t){i.indexOf(t)>0&&(s=[parseFloat(i),t])}),s}})}(),function(){var t={};e.each(["Quad","Cubic","Quart","Quint","Expo"],function(e,i){t[i]=function(t){return Math.pow(t,e+2)}}),e.extend(t,{Sine:function(e){return 1-Math.cos(e*Math.PI/2)},Circ:function(e){return 1-Math.sqrt(1-e*e)},Elastic:function(e){return 0===e||1===e?e:-Math.pow(2,8*(e-1))*Math.sin((80*(e-1)-7.5)*Math.PI/15)},Back:function(e){return e*e*(3*e-2)},Bounce:function(e){for(var t,i=4;((t=Math.pow(2,--i))-1)/11>e;);return 1/Math.pow(4,3-i)-7.5625*Math.pow((3*t-2)/22-e,2)}}),e.each(t,function(t,i){e.easing["easeIn"+t]=i,e.easing["easeOut"+t]=function(e){return 1-i(1-e)},e.easing["easeInOut"+t]=function(e){return.5>e?i(2*e)/2:1-i(-2*e+2)/2}})}(),e.effects,e.effects.effect.blind=function(t,i){var s,n,a,o=e(this),r=/up|down|vertical/,h=/up|left|vertical|horizontal/,l=["position","top","bottom","left","right","height","width"],u=e.effects.setMode(o,t.mode||"hide"),d=t.direction||"up",c=r.test(d),p=c?"height":"width",f=c?"top":"left",m=h.test(d),g={},v="show"===u;o.parent().is(".ui-effects-wrapper")?e.effects.save(o.parent(),l):e.effects.save(o,l),o.show(),s=e.effects.createWrapper(o).css({overflow:"hidden"}),n=s[p](),a=parseFloat(s.css(f))||0,g[p]=v?n:0,m||(o.css(c?"bottom":"right",0).css(c?"top":"left","auto").css({position:"absolute"}),g[f]=v?a:n+a),v&&(s.css(p,0),m||s.css(f,a+n)),s.animate(g,{duration:t.duration,easing:t.easing,queue:!1,complete:function(){"hide"===u&&o.hide(),e.effects.restore(o,l),e.effects.removeWrapper(o),i()}})},e.effects.effect.bounce=function(t,i){var s,n,a,o=e(this),r=["position","top","bottom","left","right","height","width"],h=e.effects.setMode(o,t.mode||"effect"),l="hide"===h,u="show"===h,d=t.direction||"up",c=t.distance,p=t.times||5,f=2*p+(u||l?1:0),m=t.duration/f,g=t.easing,v="up"===d||"down"===d?"top":"left",y="up"===d||"left"===d,b=o.queue(),_=b.length;for((u||l)&&r.push("opacity"),e.effects.save(o,r),o.show(),e.effects.createWrapper(o),c||(c=o["top"===v?"outerHeight":"outerWidth"]()/3),u&&(a={opacity:1},a[v]=0,o.css("opacity",0).css(v,y?2*-c:2*c).animate(a,m,g)),l&&(c/=Math.pow(2,p-1)),a={},a[v]=0,s=0;p>s;s++)n={},n[v]=(y?"-=":"+=")+c,o.animate(n,m,g).animate(a,m,g),c=l?2*c:c/2;l&&(n={opacity:0},n[v]=(y?"-=":"+=")+c,o.animate(n,m,g)),o.queue(function(){l&&o.hide(),e.effects.restore(o,r),e.effects.removeWrapper(o),i()}),_>1&&b.splice.apply(b,[1,0].concat(b.splice(_,f+1))),o.dequeue()},e.effects.effect.clip=function(t,i){var s,n,a,o=e(this),r=["position","top","bottom","left","right","height","width"],h=e.effects.setMode(o,t.mode||"hide"),l="show"===h,u=t.direction||"vertical",d="vertical"===u,c=d?"height":"width",p=d?"top":"left",f={};e.effects.save(o,r),o.show(),s=e.effects.createWrapper(o).css({overflow:"hidden"}),n="IMG"===o[0].tagName?s:o,a=n[c](),l&&(n.css(c,0),n.css(p,a/2)),f[c]=l?a:0,f[p]=l?0:a/2,n.animate(f,{queue:!1,duration:t.duration,easing:t.easing,complete:function(){l||o.hide(),e.effects.restore(o,r),e.effects.removeWrapper(o),i()}})},e.effects.effect.drop=function(t,i){var s,n=e(this),a=["position","top","bottom","left","right","opacity","height","width"],o=e.effects.setMode(n,t.mode||"hide"),r="show"===o,h=t.direction||"left",l="up"===h||"down"===h?"top":"left",u="up"===h||"left"===h?"pos":"neg",d={opacity:r?1:0};e.effects.save(n,a),n.show(),e.effects.createWrapper(n),s=t.distance||n["top"===l?"outerHeight":"outerWidth"](!0)/2,r&&n.css("opacity",0).css(l,"pos"===u?-s:s),d[l]=(r?"pos"===u?"+=":"-=":"pos"===u?"-=":"+=")+s,n.animate(d,{queue:!1,duration:t.duration,easing:t.easing,complete:function(){"hide"===o&&n.hide(),e.effects.restore(n,a),e.effects.removeWrapper(n),i()}})},e.effects.effect.explode=function(t,i){function s(){b.push(this),b.length===d*c&&n()}function n(){p.css({visibility:"visible"}),e(b).remove(),m||p.hide(),i()}var a,o,r,h,l,u,d=t.pieces?Math.round(Math.sqrt(t.pieces)):3,c=d,p=e(this),f=e.effects.setMode(p,t.mode||"hide"),m="show"===f,g=p.show().css("visibility","hidden").offset(),v=Math.ceil(p.outerWidth()/c),y=Math.ceil(p.outerHeight()/d),b=[];for(a=0;d>a;a++)for(h=g.top+a*y,u=a-(d-1)/2,o=0;c>o;o++)r=g.left+o*v,l=o-(c-1)/2,p.clone().appendTo("body").wrap("<div></div>").css({position:"absolute",visibility:"visible",left:-o*v,top:-a*y}).parent().addClass("ui-effects-explode").css({position:"absolute",overflow:"hidden",width:v,height:y,left:r+(m?l*v:0),top:h+(m?u*y:0),opacity:m?0:1}).animate({left:r+(m?0:l*v),top:h+(m?0:u*y),opacity:m?1:0},t.duration||500,t.easing,s)},e.effects.effect.fade=function(t,i){var s=e(this),n=e.effects.setMode(s,t.mode||"toggle");s.animate({opacity:n},{queue:!1,duration:t.duration,easing:t.easing,complete:i})},e.effects.effect.fold=function(t,i){var s,n,a=e(this),o=["position","top","bottom","left","right","height","width"],r=e.effects.setMode(a,t.mode||"hide"),h="show"===r,l="hide"===r,u=t.size||15,d=/([0-9]+)%/.exec(u),c=!!t.horizFirst,p=h!==c,f=p?["width","height"]:["height","width"],m=t.duration/2,g={},v={};e.effects.save(a,o),a.show(),s=e.effects.createWrapper(a).css({overflow:"hidden"}),n=p?[s.width(),s.height()]:[s.height(),s.width()],d&&(u=parseInt(d[1],10)/100*n[l?0:1]),h&&s.css(c?{height:0,width:u}:{height:u,width:0}),g[f[0]]=h?n[0]:u,v[f[1]]=h?n[1]:0,s.animate(g,m,t.easing).animate(v,m,t.easing,function(){l&&a.hide(),e.effects.restore(a,o),e.effects.removeWrapper(a),i()})},e.effects.effect.highlight=function(t,i){var s=e(this),n=["backgroundImage","backgroundColor","opacity"],a=e.effects.setMode(s,t.mode||"show"),o={backgroundColor:s.css("backgroundColor")};"hide"===a&&(o.opacity=0),e.effects.save(s,n),s.show().css({backgroundImage:"none",backgroundColor:t.color||"#ffff99"}).animate(o,{queue:!1,duration:t.duration,easing:t.easing,complete:function(){"hide"===a&&s.hide(),e.effects.restore(s,n),i()}})},e.effects.effect.size=function(t,i){var s,n,a,o=e(this),r=["position","top","bottom","left","right","width","height","overflow","opacity"],h=["position","top","bottom","left","right","overflow","opacity"],l=["width","height","overflow"],u=["fontSize"],d=["borderTopWidth","borderBottomWidth","paddingTop","paddingBottom"],c=["borderLeftWidth","borderRightWidth","paddingLeft","paddingRight"],p=e.effects.setMode(o,t.mode||"effect"),f=t.restore||"effect"!==p,m=t.scale||"both",g=t.origin||["middle","center"],v=o.css("position"),y=f?r:h,b={height:0,width:0,outerHeight:0,outerWidth:0};"show"===p&&o.show(),s={height:o.height(),width:o.width(),outerHeight:o.outerHeight(),outerWidth:o.outerWidth()},"toggle"===t.mode&&"show"===p?(o.from=t.to||b,o.to=t.from||s):(o.from=t.from||("show"===p?b:s),o.to=t.to||("hide"===p?b:s)),a={from:{y:o.from.height/s.height,x:o.from.width/s.width},to:{y:o.to.height/s.height,x:o.to.width/s.width}},("box"===m||"both"===m)&&(a.from.y!==a.to.y&&(y=y.concat(d),o.from=e.effects.setTransition(o,d,a.from.y,o.from),o.to=e.effects.setTransition(o,d,a.to.y,o.to)),a.from.x!==a.to.x&&(y=y.concat(c),o.from=e.effects.setTransition(o,c,a.from.x,o.from),o.to=e.effects.setTransition(o,c,a.to.x,o.to))),("content"===m||"both"===m)&&a.from.y!==a.to.y&&(y=y.concat(u).concat(l),o.from=e.effects.setTransition(o,u,a.from.y,o.from),o.to=e.effects.setTransition(o,u,a.to.y,o.to)),e.effects.save(o,y),o.show(),e.effects.createWrapper(o),o.css("overflow","hidden").css(o.from),g&&(n=e.effects.getBaseline(g,s),o.from.top=(s.outerHeight-o.outerHeight())*n.y,o.from.left=(s.outerWidth-o.outerWidth())*n.x,o.to.top=(s.outerHeight-o.to.outerHeight)*n.y,o.to.left=(s.outerWidth-o.to.outerWidth)*n.x),o.css(o.from),("content"===m||"both"===m)&&(d=d.concat(["marginTop","marginBottom"]).concat(u),c=c.concat(["marginLeft","marginRight"]),l=r.concat(d).concat(c),o.find("*[width]").each(function(){var i=e(this),s={height:i.height(),width:i.width(),outerHeight:i.outerHeight(),outerWidth:i.outerWidth()};
f&&e.effects.save(i,l),i.from={height:s.height*a.from.y,width:s.width*a.from.x,outerHeight:s.outerHeight*a.from.y,outerWidth:s.outerWidth*a.from.x},i.to={height:s.height*a.to.y,width:s.width*a.to.x,outerHeight:s.height*a.to.y,outerWidth:s.width*a.to.x},a.from.y!==a.to.y&&(i.from=e.effects.setTransition(i,d,a.from.y,i.from),i.to=e.effects.setTransition(i,d,a.to.y,i.to)),a.from.x!==a.to.x&&(i.from=e.effects.setTransition(i,c,a.from.x,i.from),i.to=e.effects.setTransition(i,c,a.to.x,i.to)),i.css(i.from),i.animate(i.to,t.duration,t.easing,function(){f&&e.effects.restore(i,l)})})),o.animate(o.to,{queue:!1,duration:t.duration,easing:t.easing,complete:function(){0===o.to.opacity&&o.css("opacity",o.from.opacity),"hide"===p&&o.hide(),e.effects.restore(o,y),f||("static"===v?o.css({position:"relative",top:o.to.top,left:o.to.left}):e.each(["top","left"],function(e,t){o.css(t,function(t,i){var s=parseInt(i,10),n=e?o.to.left:o.to.top;return"auto"===i?n+"px":s+n+"px"})})),e.effects.removeWrapper(o),i()}})},e.effects.effect.scale=function(t,i){var s=e(this),n=e.extend(!0,{},t),a=e.effects.setMode(s,t.mode||"effect"),o=parseInt(t.percent,10)||(0===parseInt(t.percent,10)?0:"hide"===a?0:100),r=t.direction||"both",h=t.origin,l={height:s.height(),width:s.width(),outerHeight:s.outerHeight(),outerWidth:s.outerWidth()},u={y:"horizontal"!==r?o/100:1,x:"vertical"!==r?o/100:1};n.effect="size",n.queue=!1,n.complete=i,"effect"!==a&&(n.origin=h||["middle","center"],n.restore=!0),n.from=t.from||("show"===a?{height:0,width:0,outerHeight:0,outerWidth:0}:l),n.to={height:l.height*u.y,width:l.width*u.x,outerHeight:l.outerHeight*u.y,outerWidth:l.outerWidth*u.x},n.fade&&("show"===a&&(n.from.opacity=0,n.to.opacity=1),"hide"===a&&(n.from.opacity=1,n.to.opacity=0)),s.effect(n)},e.effects.effect.puff=function(t,i){var s=e(this),n=e.effects.setMode(s,t.mode||"hide"),a="hide"===n,o=parseInt(t.percent,10)||150,r=o/100,h={height:s.height(),width:s.width(),outerHeight:s.outerHeight(),outerWidth:s.outerWidth()};e.extend(t,{effect:"scale",queue:!1,fade:!0,mode:n,complete:i,percent:a?o:100,from:a?h:{height:h.height*r,width:h.width*r,outerHeight:h.outerHeight*r,outerWidth:h.outerWidth*r}}),s.effect(t)},e.effects.effect.pulsate=function(t,i){var s,n=e(this),a=e.effects.setMode(n,t.mode||"show"),o="show"===a,r="hide"===a,h=o||"hide"===a,l=2*(t.times||5)+(h?1:0),u=t.duration/l,d=0,c=n.queue(),p=c.length;for((o||!n.is(":visible"))&&(n.css("opacity",0).show(),d=1),s=1;l>s;s++)n.animate({opacity:d},u,t.easing),d=1-d;n.animate({opacity:d},u,t.easing),n.queue(function(){r&&n.hide(),i()}),p>1&&c.splice.apply(c,[1,0].concat(c.splice(p,l+1))),n.dequeue()},e.effects.effect.shake=function(t,i){var s,n=e(this),a=["position","top","bottom","left","right","height","width"],o=e.effects.setMode(n,t.mode||"effect"),r=t.direction||"left",h=t.distance||20,l=t.times||3,u=2*l+1,d=Math.round(t.duration/u),c="up"===r||"down"===r?"top":"left",p="up"===r||"left"===r,f={},m={},g={},v=n.queue(),y=v.length;for(e.effects.save(n,a),n.show(),e.effects.createWrapper(n),f[c]=(p?"-=":"+=")+h,m[c]=(p?"+=":"-=")+2*h,g[c]=(p?"-=":"+=")+2*h,n.animate(f,d,t.easing),s=1;l>s;s++)n.animate(m,d,t.easing).animate(g,d,t.easing);n.animate(m,d,t.easing).animate(f,d/2,t.easing).queue(function(){"hide"===o&&n.hide(),e.effects.restore(n,a),e.effects.removeWrapper(n),i()}),y>1&&v.splice.apply(v,[1,0].concat(v.splice(y,u+1))),n.dequeue()},e.effects.effect.slide=function(t,i){var s,n=e(this),a=["position","top","bottom","left","right","width","height"],o=e.effects.setMode(n,t.mode||"show"),r="show"===o,h=t.direction||"left",l="up"===h||"down"===h?"top":"left",u="up"===h||"left"===h,d={};e.effects.save(n,a),n.show(),s=t.distance||n["top"===l?"outerHeight":"outerWidth"](!0),e.effects.createWrapper(n).css({overflow:"hidden"}),r&&n.css(l,u?isNaN(s)?"-"+s:-s:s),d[l]=(r?u?"+=":"-=":u?"-=":"+=")+s,n.animate(d,{queue:!1,duration:t.duration,easing:t.easing,complete:function(){"hide"===o&&n.hide(),e.effects.restore(n,a),e.effects.removeWrapper(n),i()}})},e.effects.effect.transfer=function(t,i){var s=e(this),n=e(t.to),a="fixed"===n.css("position"),o=e("body"),r=a?o.scrollTop():0,h=a?o.scrollLeft():0,l=n.offset(),u={top:l.top-r,left:l.left-h,height:n.innerHeight(),width:n.innerWidth()},d=s.offset(),c=e("<div class='ui-effects-transfer'></div>").appendTo(document.body).addClass(t.className).css({top:d.top-r,left:d.left-h,height:s.innerHeight(),width:s.innerWidth(),position:a?"fixed":"absolute"}).animate(u,t.duration,t.easing,function(){c.remove(),i()})},e.widget("ui.progressbar",{version:"1.11.4",options:{max:100,value:0,change:null,complete:null},min:0,_create:function(){this.oldValue=this.options.value=this._constrainedValue(),this.element.addClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").attr({role:"progressbar","aria-valuemin":this.min}),this.valueDiv=e("<div class='ui-progressbar-value ui-widget-header ui-corner-left'></div>").appendTo(this.element),this._refreshValue()},_destroy:function(){this.element.removeClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow"),this.valueDiv.remove()},value:function(e){return void 0===e?this.options.value:(this.options.value=this._constrainedValue(e),this._refreshValue(),void 0)},_constrainedValue:function(e){return void 0===e&&(e=this.options.value),this.indeterminate=e===!1,"number"!=typeof e&&(e=0),this.indeterminate?!1:Math.min(this.options.max,Math.max(this.min,e))},_setOptions:function(e){var t=e.value;delete e.value,this._super(e),this.options.value=this._constrainedValue(t),this._refreshValue()},_setOption:function(e,t){"max"===e&&(t=Math.max(this.min,t)),"disabled"===e&&this.element.toggleClass("ui-state-disabled",!!t).attr("aria-disabled",t),this._super(e,t)},_percentage:function(){return this.indeterminate?100:100*(this.options.value-this.min)/(this.options.max-this.min)},_refreshValue:function(){var t=this.options.value,i=this._percentage();this.valueDiv.toggle(this.indeterminate||t>this.min).toggleClass("ui-corner-right",t===this.options.max).width(i.toFixed(0)+"%"),this.element.toggleClass("ui-progressbar-indeterminate",this.indeterminate),this.indeterminate?(this.element.removeAttr("aria-valuenow"),this.overlayDiv||(this.overlayDiv=e("<div class='ui-progressbar-overlay'></div>").appendTo(this.valueDiv))):(this.element.attr({"aria-valuemax":this.options.max,"aria-valuenow":t}),this.overlayDiv&&(this.overlayDiv.remove(),this.overlayDiv=null)),this.oldValue!==t&&(this.oldValue=t,this._trigger("change")),t===this.options.max&&this._trigger("complete")}}),e.widget("ui.selectable",e.ui.mouse,{version:"1.11.4",options:{appendTo:"body",autoRefresh:!0,distance:0,filter:"*",tolerance:"touch",selected:null,selecting:null,start:null,stop:null,unselected:null,unselecting:null},_create:function(){var t,i=this;this.element.addClass("ui-selectable"),this.dragged=!1,this.refresh=function(){t=e(i.options.filter,i.element[0]),t.addClass("ui-selectee"),t.each(function(){var t=e(this),i=t.offset();e.data(this,"selectable-item",{element:this,$element:t,left:i.left,top:i.top,right:i.left+t.outerWidth(),bottom:i.top+t.outerHeight(),startselected:!1,selected:t.hasClass("ui-selected"),selecting:t.hasClass("ui-selecting"),unselecting:t.hasClass("ui-unselecting")})})},this.refresh(),this.selectees=t.addClass("ui-selectee"),this._mouseInit(),this.helper=e("<div class='ui-selectable-helper'></div>")},_destroy:function(){this.selectees.removeClass("ui-selectee").removeData("selectable-item"),this.element.removeClass("ui-selectable ui-selectable-disabled"),this._mouseDestroy()},_mouseStart:function(t){var i=this,s=this.options;this.opos=[t.pageX,t.pageY],this.options.disabled||(this.selectees=e(s.filter,this.element[0]),this._trigger("start",t),e(s.appendTo).append(this.helper),this.helper.css({left:t.pageX,top:t.pageY,width:0,height:0}),s.autoRefresh&&this.refresh(),this.selectees.filter(".ui-selected").each(function(){var s=e.data(this,"selectable-item");s.startselected=!0,t.metaKey||t.ctrlKey||(s.$element.removeClass("ui-selected"),s.selected=!1,s.$element.addClass("ui-unselecting"),s.unselecting=!0,i._trigger("unselecting",t,{unselecting:s.element}))}),e(t.target).parents().addBack().each(function(){var s,n=e.data(this,"selectable-item");return n?(s=!t.metaKey&&!t.ctrlKey||!n.$element.hasClass("ui-selected"),n.$element.removeClass(s?"ui-unselecting":"ui-selected").addClass(s?"ui-selecting":"ui-unselecting"),n.unselecting=!s,n.selecting=s,n.selected=s,s?i._trigger("selecting",t,{selecting:n.element}):i._trigger("unselecting",t,{unselecting:n.element}),!1):void 0}))},_mouseDrag:function(t){if(this.dragged=!0,!this.options.disabled){var i,s=this,n=this.options,a=this.opos[0],o=this.opos[1],r=t.pageX,h=t.pageY;return a>r&&(i=r,r=a,a=i),o>h&&(i=h,h=o,o=i),this.helper.css({left:a,top:o,width:r-a,height:h-o}),this.selectees.each(function(){var i=e.data(this,"selectable-item"),l=!1;i&&i.element!==s.element[0]&&("touch"===n.tolerance?l=!(i.left>r||a>i.right||i.top>h||o>i.bottom):"fit"===n.tolerance&&(l=i.left>a&&r>i.right&&i.top>o&&h>i.bottom),l?(i.selected&&(i.$element.removeClass("ui-selected"),i.selected=!1),i.unselecting&&(i.$element.removeClass("ui-unselecting"),i.unselecting=!1),i.selecting||(i.$element.addClass("ui-selecting"),i.selecting=!0,s._trigger("selecting",t,{selecting:i.element}))):(i.selecting&&((t.metaKey||t.ctrlKey)&&i.startselected?(i.$element.removeClass("ui-selecting"),i.selecting=!1,i.$element.addClass("ui-selected"),i.selected=!0):(i.$element.removeClass("ui-selecting"),i.selecting=!1,i.startselected&&(i.$element.addClass("ui-unselecting"),i.unselecting=!0),s._trigger("unselecting",t,{unselecting:i.element}))),i.selected&&(t.metaKey||t.ctrlKey||i.startselected||(i.$element.removeClass("ui-selected"),i.selected=!1,i.$element.addClass("ui-unselecting"),i.unselecting=!0,s._trigger("unselecting",t,{unselecting:i.element})))))}),!1}},_mouseStop:function(t){var i=this;return this.dragged=!1,e(".ui-unselecting",this.element[0]).each(function(){var s=e.data(this,"selectable-item");s.$element.removeClass("ui-unselecting"),s.unselecting=!1,s.startselected=!1,i._trigger("unselected",t,{unselected:s.element})}),e(".ui-selecting",this.element[0]).each(function(){var s=e.data(this,"selectable-item");s.$element.removeClass("ui-selecting").addClass("ui-selected"),s.selecting=!1,s.selected=!0,s.startselected=!0,i._trigger("selected",t,{selected:s.element})}),this._trigger("stop",t),this.helper.remove(),!1}}),e.widget("ui.selectmenu",{version:"1.11.4",defaultElement:"<select>",options:{appendTo:null,disabled:null,icons:{button:"ui-icon-triangle-1-s"},position:{my:"left top",at:"left bottom",collision:"none"},width:null,change:null,close:null,focus:null,open:null,select:null},_create:function(){var e=this.element.uniqueId().attr("id");this.ids={element:e,button:e+"-button",menu:e+"-menu"},this._drawButton(),this._drawMenu(),this.options.disabled&&this.disable()},_drawButton:function(){var t=this;this.label=e("label[for='"+this.ids.element+"']").attr("for",this.ids.button),this._on(this.label,{click:function(e){this.button.focus(),e.preventDefault()}}),this.element.hide(),this.button=e("<span>",{"class":"ui-selectmenu-button ui-widget ui-state-default ui-corner-all",tabindex:this.options.disabled?-1:0,id:this.ids.button,role:"combobox","aria-expanded":"false","aria-autocomplete":"list","aria-owns":this.ids.menu,"aria-haspopup":"true"}).insertAfter(this.element),e("<span>",{"class":"ui-icon "+this.options.icons.button}).prependTo(this.button),this.buttonText=e("<span>",{"class":"ui-selectmenu-text"}).appendTo(this.button),this._setText(this.buttonText,this.element.find("option:selected").text()),this._resizeButton(),this._on(this.button,this._buttonEvents),this.button.one("focusin",function(){t.menuItems||t._refreshMenu()}),this._hoverable(this.button),this._focusable(this.button)},_drawMenu:function(){var t=this;this.menu=e("<ul>",{"aria-hidden":"true","aria-labelledby":this.ids.button,id:this.ids.menu}),this.menuWrap=e("<div>",{"class":"ui-selectmenu-menu ui-front"}).append(this.menu).appendTo(this._appendTo()),this.menuInstance=this.menu.menu({role:"listbox",select:function(e,i){e.preventDefault(),t._setSelection(),t._select(i.item.data("ui-selectmenu-item"),e)},focus:function(e,i){var s=i.item.data("ui-selectmenu-item");null!=t.focusIndex&&s.index!==t.focusIndex&&(t._trigger("focus",e,{item:s}),t.isOpen||t._select(s,e)),t.focusIndex=s.index,t.button.attr("aria-activedescendant",t.menuItems.eq(s.index).attr("id"))}}).menu("instance"),this.menu.addClass("ui-corner-bottom").removeClass("ui-corner-all"),this.menuInstance._off(this.menu,"mouseleave"),this.menuInstance._closeOnDocumentClick=function(){return!1},this.menuInstance._isDivider=function(){return!1}},refresh:function(){this._refreshMenu(),this._setText(this.buttonText,this._getSelectedItem().text()),this.options.width||this._resizeButton()},_refreshMenu:function(){this.menu.empty();var e,t=this.element.find("option");t.length&&(this._parseOptions(t),this._renderMenu(this.menu,this.items),this.menuInstance.refresh(),this.menuItems=this.menu.find("li").not(".ui-selectmenu-optgroup"),e=this._getSelectedItem(),this.menuInstance.focus(null,e),this._setAria(e.data("ui-selectmenu-item")),this._setOption("disabled",this.element.prop("disabled")))},open:function(e){this.options.disabled||(this.menuItems?(this.menu.find(".ui-state-focus").removeClass("ui-state-focus"),this.menuInstance.focus(null,this._getSelectedItem())):this._refreshMenu(),this.isOpen=!0,this._toggleAttr(),this._resizeMenu(),this._position(),this._on(this.document,this._documentClick),this._trigger("open",e))},_position:function(){this.menuWrap.position(e.extend({of:this.button},this.options.position))},close:function(e){this.isOpen&&(this.isOpen=!1,this._toggleAttr(),this.range=null,this._off(this.document),this._trigger("close",e))},widget:function(){return this.button},menuWidget:function(){return this.menu},_renderMenu:function(t,i){var s=this,n="";e.each(i,function(i,a){a.optgroup!==n&&(e("<li>",{"class":"ui-selectmenu-optgroup ui-menu-divider"+(a.element.parent("optgroup").prop("disabled")?" ui-state-disabled":""),text:a.optgroup}).appendTo(t),n=a.optgroup),s._renderItemData(t,a)})},_renderItemData:function(e,t){return this._renderItem(e,t).data("ui-selectmenu-item",t)},_renderItem:function(t,i){var s=e("<li>");return i.disabled&&s.addClass("ui-state-disabled"),this._setText(s,i.label),s.appendTo(t)},_setText:function(e,t){t?e.text(t):e.html("&#160;")},_move:function(e,t){var i,s,n=".ui-menu-item";this.isOpen?i=this.menuItems.eq(this.focusIndex):(i=this.menuItems.eq(this.element[0].selectedIndex),n+=":not(.ui-state-disabled)"),s="first"===e||"last"===e?i["first"===e?"prevAll":"nextAll"](n).eq(-1):i[e+"All"](n).eq(0),s.length&&this.menuInstance.focus(t,s)},_getSelectedItem:function(){return this.menuItems.eq(this.element[0].selectedIndex)},_toggle:function(e){this[this.isOpen?"close":"open"](e)},_setSelection:function(){var e;this.range&&(window.getSelection?(e=window.getSelection(),e.removeAllRanges(),e.addRange(this.range)):this.range.select(),this.button.focus())},_documentClick:{mousedown:function(t){this.isOpen&&(e(t.target).closest(".ui-selectmenu-menu, #"+this.ids.button).length||this.close(t))}},_buttonEvents:{mousedown:function(){var e;window.getSelection?(e=window.getSelection(),e.rangeCount&&(this.range=e.getRangeAt(0))):this.range=document.selection.createRange()},click:function(e){this._setSelection(),this._toggle(e)},keydown:function(t){var i=!0;switch(t.keyCode){case e.ui.keyCode.TAB:case e.ui.keyCode.ESCAPE:this.close(t),i=!1;break;case e.ui.keyCode.ENTER:this.isOpen&&this._selectFocusedItem(t);break;case e.ui.keyCode.UP:t.altKey?this._toggle(t):this._move("prev",t);break;case e.ui.keyCode.DOWN:t.altKey?this._toggle(t):this._move("next",t);break;case e.ui.keyCode.SPACE:this.isOpen?this._selectFocusedItem(t):this._toggle(t);break;case e.ui.keyCode.LEFT:this._move("prev",t);break;case e.ui.keyCode.RIGHT:this._move("next",t);break;case e.ui.keyCode.HOME:case e.ui.keyCode.PAGE_UP:this._move("first",t);break;case e.ui.keyCode.END:case e.ui.keyCode.PAGE_DOWN:this._move("last",t);break;default:this.menu.trigger(t),i=!1}i&&t.preventDefault()}},_selectFocusedItem:function(e){var t=this.menuItems.eq(this.focusIndex);t.hasClass("ui-state-disabled")||this._select(t.data("ui-selectmenu-item"),e)},_select:function(e,t){var i=this.element[0].selectedIndex;this.element[0].selectedIndex=e.index,this._setText(this.buttonText,e.label),this._setAria(e),this._trigger("select",t,{item:e}),e.index!==i&&this._trigger("change",t,{item:e}),this.close(t)},_setAria:function(e){var t=this.menuItems.eq(e.index).attr("id");this.button.attr({"aria-labelledby":t,"aria-activedescendant":t}),this.menu.attr("aria-activedescendant",t)},_setOption:function(e,t){"icons"===e&&this.button.find("span.ui-icon").removeClass(this.options.icons.button).addClass(t.button),this._super(e,t),"appendTo"===e&&this.menuWrap.appendTo(this._appendTo()),"disabled"===e&&(this.menuInstance.option("disabled",t),this.button.toggleClass("ui-state-disabled",t).attr("aria-disabled",t),this.element.prop("disabled",t),t?(this.button.attr("tabindex",-1),this.close()):this.button.attr("tabindex",0)),"width"===e&&this._resizeButton()},_appendTo:function(){var t=this.options.appendTo;return t&&(t=t.jquery||t.nodeType?e(t):this.document.find(t).eq(0)),t&&t[0]||(t=this.element.closest(".ui-front")),t.length||(t=this.document[0].body),t},_toggleAttr:function(){this.button.toggleClass("ui-corner-top",this.isOpen).toggleClass("ui-corner-all",!this.isOpen).attr("aria-expanded",this.isOpen),this.menuWrap.toggleClass("ui-selectmenu-open",this.isOpen),this.menu.attr("aria-hidden",!this.isOpen)},_resizeButton:function(){var e=this.options.width;e||(e=this.element.show().outerWidth(),this.element.hide()),this.button.outerWidth(e)},_resizeMenu:function(){this.menu.outerWidth(Math.max(this.button.outerWidth(),this.menu.width("").outerWidth()+1))},_getCreateOptions:function(){return{disabled:this.element.prop("disabled")}},_parseOptions:function(t){var i=[];t.each(function(t,s){var n=e(s),a=n.parent("optgroup");i.push({element:n,index:t,value:n.val(),label:n.text(),optgroup:a.attr("label")||"",disabled:a.prop("disabled")||n.prop("disabled")})}),this.items=i},_destroy:function(){this.menuWrap.remove(),this.button.remove(),this.element.show(),this.element.removeUniqueId(),this.label.attr("for",this.ids.element)}}),e.widget("ui.slider",e.ui.mouse,{version:"1.11.4",widgetEventPrefix:"slide",options:{animate:!1,distance:0,max:100,min:0,orientation:"horizontal",range:!1,step:1,value:0,values:null,change:null,slide:null,start:null,stop:null},numPages:5,_create:function(){this._keySliding=!1,this._mouseSliding=!1,this._animateOff=!0,this._handleIndex=null,this._detectOrientation(),this._mouseInit(),this._calculateNewMax(),this.element.addClass("ui-slider ui-slider-"+this.orientation+" ui-widget"+" ui-widget-content"+" ui-corner-all"),this._refresh(),this._setOption("disabled",this.options.disabled),this._animateOff=!1},_refresh:function(){this._createRange(),this._createHandles(),this._setupEvents(),this._refreshValue()},_createHandles:function(){var t,i,s=this.options,n=this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"),a="<span class='ui-slider-handle ui-state-default ui-corner-all' tabindex='0'></span>",o=[];for(i=s.values&&s.values.length||1,n.length>i&&(n.slice(i).remove(),n=n.slice(0,i)),t=n.length;i>t;t++)o.push(a);this.handles=n.add(e(o.join("")).appendTo(this.element)),this.handle=this.handles.eq(0),this.handles.each(function(t){e(this).data("ui-slider-handle-index",t)})},_createRange:function(){var t=this.options,i="";t.range?(t.range===!0&&(t.values?t.values.length&&2!==t.values.length?t.values=[t.values[0],t.values[0]]:e.isArray(t.values)&&(t.values=t.values.slice(0)):t.values=[this._valueMin(),this._valueMin()]),this.range&&this.range.length?this.range.removeClass("ui-slider-range-min ui-slider-range-max").css({left:"",bottom:""}):(this.range=e("<div></div>").appendTo(this.element),i="ui-slider-range ui-widget-header ui-corner-all"),this.range.addClass(i+("min"===t.range||"max"===t.range?" ui-slider-range-"+t.range:""))):(this.range&&this.range.remove(),this.range=null)},_setupEvents:function(){this._off(this.handles),this._on(this.handles,this._handleEvents),this._hoverable(this.handles),this._focusable(this.handles)},_destroy:function(){this.handles.remove(),this.range&&this.range.remove(),this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-widget ui-widget-content ui-corner-all"),this._mouseDestroy()},_mouseCapture:function(t){var i,s,n,a,o,r,h,l,u=this,d=this.options;return d.disabled?!1:(this.elementSize={width:this.element.outerWidth(),height:this.element.outerHeight()},this.elementOffset=this.element.offset(),i={x:t.pageX,y:t.pageY},s=this._normValueFromMouse(i),n=this._valueMax()-this._valueMin()+1,this.handles.each(function(t){var i=Math.abs(s-u.values(t));(n>i||n===i&&(t===u._lastChangedValue||u.values(t)===d.min))&&(n=i,a=e(this),o=t)}),r=this._start(t,o),r===!1?!1:(this._mouseSliding=!0,this._handleIndex=o,a.addClass("ui-state-active").focus(),h=a.offset(),l=!e(t.target).parents().addBack().is(".ui-slider-handle"),this._clickOffset=l?{left:0,top:0}:{left:t.pageX-h.left-a.width()/2,top:t.pageY-h.top-a.height()/2-(parseInt(a.css("borderTopWidth"),10)||0)-(parseInt(a.css("borderBottomWidth"),10)||0)+(parseInt(a.css("marginTop"),10)||0)},this.handles.hasClass("ui-state-hover")||this._slide(t,o,s),this._animateOff=!0,!0))},_mouseStart:function(){return!0},_mouseDrag:function(e){var t={x:e.pageX,y:e.pageY},i=this._normValueFromMouse(t);return this._slide(e,this._handleIndex,i),!1},_mouseStop:function(e){return this.handles.removeClass("ui-state-active"),this._mouseSliding=!1,this._stop(e,this._handleIndex),this._change(e,this._handleIndex),this._handleIndex=null,this._clickOffset=null,this._animateOff=!1,!1},_detectOrientation:function(){this.orientation="vertical"===this.options.orientation?"vertical":"horizontal"},_normValueFromMouse:function(e){var t,i,s,n,a;return"horizontal"===this.orientation?(t=this.elementSize.width,i=e.x-this.elementOffset.left-(this._clickOffset?this._clickOffset.left:0)):(t=this.elementSize.height,i=e.y-this.elementOffset.top-(this._clickOffset?this._clickOffset.top:0)),s=i/t,s>1&&(s=1),0>s&&(s=0),"vertical"===this.orientation&&(s=1-s),n=this._valueMax()-this._valueMin(),a=this._valueMin()+s*n,this._trimAlignValue(a)},_start:function(e,t){var i={handle:this.handles[t],value:this.value()};return this.options.values&&this.options.values.length&&(i.value=this.values(t),i.values=this.values()),this._trigger("start",e,i)},_slide:function(e,t,i){var s,n,a;this.options.values&&this.options.values.length?(s=this.values(t?0:1),2===this.options.values.length&&this.options.range===!0&&(0===t&&i>s||1===t&&s>i)&&(i=s),i!==this.values(t)&&(n=this.values(),n[t]=i,a=this._trigger("slide",e,{handle:this.handles[t],value:i,values:n}),s=this.values(t?0:1),a!==!1&&this.values(t,i))):i!==this.value()&&(a=this._trigger("slide",e,{handle:this.handles[t],value:i}),a!==!1&&this.value(i))},_stop:function(e,t){var i={handle:this.handles[t],value:this.value()};this.options.values&&this.options.values.length&&(i.value=this.values(t),i.values=this.values()),this._trigger("stop",e,i)},_change:function(e,t){if(!this._keySliding&&!this._mouseSliding){var i={handle:this.handles[t],value:this.value()};this.options.values&&this.options.values.length&&(i.value=this.values(t),i.values=this.values()),this._lastChangedValue=t,this._trigger("change",e,i)}},value:function(e){return arguments.length?(this.options.value=this._trimAlignValue(e),this._refreshValue(),this._change(null,0),void 0):this._value()},values:function(t,i){var s,n,a;if(arguments.length>1)return this.options.values[t]=this._trimAlignValue(i),this._refreshValue(),this._change(null,t),void 0;if(!arguments.length)return this._values();if(!e.isArray(arguments[0]))return this.options.values&&this.options.values.length?this._values(t):this.value();for(s=this.options.values,n=arguments[0],a=0;s.length>a;a+=1)s[a]=this._trimAlignValue(n[a]),this._change(null,a);this._refreshValue()},_setOption:function(t,i){var s,n=0;switch("range"===t&&this.options.range===!0&&("min"===i?(this.options.value=this._values(0),this.options.values=null):"max"===i&&(this.options.value=this._values(this.options.values.length-1),this.options.values=null)),e.isArray(this.options.values)&&(n=this.options.values.length),"disabled"===t&&this.element.toggleClass("ui-state-disabled",!!i),this._super(t,i),t){case"orientation":this._detectOrientation(),this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-"+this.orientation),this._refreshValue(),this.handles.css("horizontal"===i?"bottom":"left","");break;case"value":this._animateOff=!0,this._refreshValue(),this._change(null,0),this._animateOff=!1;break;case"values":for(this._animateOff=!0,this._refreshValue(),s=0;n>s;s+=1)this._change(null,s);this._animateOff=!1;break;case"step":case"min":case"max":this._animateOff=!0,this._calculateNewMax(),this._refreshValue(),this._animateOff=!1;break;case"range":this._animateOff=!0,this._refresh(),this._animateOff=!1}},_value:function(){var e=this.options.value;return e=this._trimAlignValue(e)},_values:function(e){var t,i,s;if(arguments.length)return t=this.options.values[e],t=this._trimAlignValue(t);if(this.options.values&&this.options.values.length){for(i=this.options.values.slice(),s=0;i.length>s;s+=1)i[s]=this._trimAlignValue(i[s]);return i}return[]},_trimAlignValue:function(e){if(this._valueMin()>=e)return this._valueMin();if(e>=this._valueMax())return this._valueMax();var t=this.options.step>0?this.options.step:1,i=(e-this._valueMin())%t,s=e-i;return 2*Math.abs(i)>=t&&(s+=i>0?t:-t),parseFloat(s.toFixed(5))},_calculateNewMax:function(){var e=this.options.max,t=this._valueMin(),i=this.options.step,s=Math.floor(+(e-t).toFixed(this._precision())/i)*i;e=s+t,this.max=parseFloat(e.toFixed(this._precision()))},_precision:function(){var e=this._precisionOf(this.options.step);return null!==this.options.min&&(e=Math.max(e,this._precisionOf(this.options.min))),e},_precisionOf:function(e){var t=""+e,i=t.indexOf(".");return-1===i?0:t.length-i-1},_valueMin:function(){return this.options.min},_valueMax:function(){return this.max},_refreshValue:function(){var t,i,s,n,a,o=this.options.range,r=this.options,h=this,l=this._animateOff?!1:r.animate,u={};this.options.values&&this.options.values.length?this.handles.each(function(s){i=100*((h.values(s)-h._valueMin())/(h._valueMax()-h._valueMin())),u["horizontal"===h.orientation?"left":"bottom"]=i+"%",e(this).stop(1,1)[l?"animate":"css"](u,r.animate),h.options.range===!0&&("horizontal"===h.orientation?(0===s&&h.range.stop(1,1)[l?"animate":"css"]({left:i+"%"},r.animate),1===s&&h.range[l?"animate":"css"]({width:i-t+"%"},{queue:!1,duration:r.animate})):(0===s&&h.range.stop(1,1)[l?"animate":"css"]({bottom:i+"%"},r.animate),1===s&&h.range[l?"animate":"css"]({height:i-t+"%"},{queue:!1,duration:r.animate}))),t=i}):(s=this.value(),n=this._valueMin(),a=this._valueMax(),i=a!==n?100*((s-n)/(a-n)):0,u["horizontal"===this.orientation?"left":"bottom"]=i+"%",this.handle.stop(1,1)[l?"animate":"css"](u,r.animate),"min"===o&&"horizontal"===this.orientation&&this.range.stop(1,1)[l?"animate":"css"]({width:i+"%"},r.animate),"max"===o&&"horizontal"===this.orientation&&this.range[l?"animate":"css"]({width:100-i+"%"},{queue:!1,duration:r.animate}),"min"===o&&"vertical"===this.orientation&&this.range.stop(1,1)[l?"animate":"css"]({height:i+"%"},r.animate),"max"===o&&"vertical"===this.orientation&&this.range[l?"animate":"css"]({height:100-i+"%"},{queue:!1,duration:r.animate}))},_handleEvents:{keydown:function(t){var i,s,n,a,o=e(t.target).data("ui-slider-handle-index");switch(t.keyCode){case e.ui.keyCode.HOME:case e.ui.keyCode.END:case e.ui.keyCode.PAGE_UP:case e.ui.keyCode.PAGE_DOWN:case e.ui.keyCode.UP:case e.ui.keyCode.RIGHT:case e.ui.keyCode.DOWN:case e.ui.keyCode.LEFT:if(t.preventDefault(),!this._keySliding&&(this._keySliding=!0,e(t.target).addClass("ui-state-active"),i=this._start(t,o),i===!1))return}switch(a=this.options.step,s=n=this.options.values&&this.options.values.length?this.values(o):this.value(),t.keyCode){case e.ui.keyCode.HOME:n=this._valueMin();break;case e.ui.keyCode.END:n=this._valueMax();break;case e.ui.keyCode.PAGE_UP:n=this._trimAlignValue(s+(this._valueMax()-this._valueMin())/this.numPages);break;case e.ui.keyCode.PAGE_DOWN:n=this._trimAlignValue(s-(this._valueMax()-this._valueMin())/this.numPages);break;case e.ui.keyCode.UP:case e.ui.keyCode.RIGHT:if(s===this._valueMax())return;n=this._trimAlignValue(s+a);break;case e.ui.keyCode.DOWN:case e.ui.keyCode.LEFT:if(s===this._valueMin())return;n=this._trimAlignValue(s-a)}this._slide(t,o,n)},keyup:function(t){var i=e(t.target).data("ui-slider-handle-index");this._keySliding&&(this._keySliding=!1,this._stop(t,i),this._change(t,i),e(t.target).removeClass("ui-state-active"))}}}),e.widget("ui.sortable",e.ui.mouse,{version:"1.11.4",widgetEventPrefix:"sort",ready:!1,options:{appendTo:"parent",axis:!1,connectWith:!1,containment:!1,cursor:"auto",cursorAt:!1,dropOnEmpty:!0,forcePlaceholderSize:!1,forceHelperSize:!1,grid:!1,handle:!1,helper:"original",items:"> *",opacity:!1,placeholder:!1,revert:!1,scroll:!0,scrollSensitivity:20,scrollSpeed:20,scope:"default",tolerance:"intersect",zIndex:1e3,activate:null,beforeStop:null,change:null,deactivate:null,out:null,over:null,receive:null,remove:null,sort:null,start:null,stop:null,update:null},_isOverAxis:function(e,t,i){return e>=t&&t+i>e},_isFloating:function(e){return/left|right/.test(e.css("float"))||/inline|table-cell/.test(e.css("display"))},_create:function(){this.containerCache={},this.element.addClass("ui-sortable"),this.refresh(),this.offset=this.element.offset(),this._mouseInit(),this._setHandleClassName(),this.ready=!0},_setOption:function(e,t){this._super(e,t),"handle"===e&&this._setHandleClassName()},_setHandleClassName:function(){this.element.find(".ui-sortable-handle").removeClass("ui-sortable-handle"),e.each(this.items,function(){(this.instance.options.handle?this.item.find(this.instance.options.handle):this.item).addClass("ui-sortable-handle")})},_destroy:function(){this.element.removeClass("ui-sortable ui-sortable-disabled").find(".ui-sortable-handle").removeClass("ui-sortable-handle"),this._mouseDestroy();for(var e=this.items.length-1;e>=0;e--)this.items[e].item.removeData(this.widgetName+"-item");return this},_mouseCapture:function(t,i){var s=null,n=!1,a=this;return this.reverting?!1:this.options.disabled||"static"===this.options.type?!1:(this._refreshItems(t),e(t.target).parents().each(function(){return e.data(this,a.widgetName+"-item")===a?(s=e(this),!1):void 0}),e.data(t.target,a.widgetName+"-item")===a&&(s=e(t.target)),s?!this.options.handle||i||(e(this.options.handle,s).find("*").addBack().each(function(){this===t.target&&(n=!0)}),n)?(this.currentItem=s,this._removeCurrentsFromItems(),!0):!1:!1)},_mouseStart:function(t,i,s){var n,a,o=this.options;if(this.currentContainer=this,this.refreshPositions(),this.helper=this._createHelper(t),this._cacheHelperProportions(),this._cacheMargins(),this.scrollParent=this.helper.scrollParent(),this.offset=this.currentItem.offset(),this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left},e.extend(this.offset,{click:{left:t.pageX-this.offset.left,top:t.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()}),this.helper.css("position","absolute"),this.cssPosition=this.helper.css("position"),this.originalPosition=this._generatePosition(t),this.originalPageX=t.pageX,this.originalPageY=t.pageY,o.cursorAt&&this._adjustOffsetFromHelper(o.cursorAt),this.domPosition={prev:this.currentItem.prev()[0],parent:this.currentItem.parent()[0]},this.helper[0]!==this.currentItem[0]&&this.currentItem.hide(),this._createPlaceholder(),o.containment&&this._setContainment(),o.cursor&&"auto"!==o.cursor&&(a=this.document.find("body"),this.storedCursor=a.css("cursor"),a.css("cursor",o.cursor),this.storedStylesheet=e("<style>*{ cursor: "+o.cursor+" !important; }</style>").appendTo(a)),o.opacity&&(this.helper.css("opacity")&&(this._storedOpacity=this.helper.css("opacity")),this.helper.css("opacity",o.opacity)),o.zIndex&&(this.helper.css("zIndex")&&(this._storedZIndex=this.helper.css("zIndex")),this.helper.css("zIndex",o.zIndex)),this.scrollParent[0]!==this.document[0]&&"HTML"!==this.scrollParent[0].tagName&&(this.overflowOffset=this.scrollParent.offset()),this._trigger("start",t,this._uiHash()),this._preserveHelperProportions||this._cacheHelperProportions(),!s)for(n=this.containers.length-1;n>=0;n--)this.containers[n]._trigger("activate",t,this._uiHash(this));
return e.ui.ddmanager&&(e.ui.ddmanager.current=this),e.ui.ddmanager&&!o.dropBehaviour&&e.ui.ddmanager.prepareOffsets(this,t),this.dragging=!0,this.helper.addClass("ui-sortable-helper"),this._mouseDrag(t),!0},_mouseDrag:function(t){var i,s,n,a,o=this.options,r=!1;for(this.position=this._generatePosition(t),this.positionAbs=this._convertPositionTo("absolute"),this.lastPositionAbs||(this.lastPositionAbs=this.positionAbs),this.options.scroll&&(this.scrollParent[0]!==this.document[0]&&"HTML"!==this.scrollParent[0].tagName?(this.overflowOffset.top+this.scrollParent[0].offsetHeight-t.pageY<o.scrollSensitivity?this.scrollParent[0].scrollTop=r=this.scrollParent[0].scrollTop+o.scrollSpeed:t.pageY-this.overflowOffset.top<o.scrollSensitivity&&(this.scrollParent[0].scrollTop=r=this.scrollParent[0].scrollTop-o.scrollSpeed),this.overflowOffset.left+this.scrollParent[0].offsetWidth-t.pageX<o.scrollSensitivity?this.scrollParent[0].scrollLeft=r=this.scrollParent[0].scrollLeft+o.scrollSpeed:t.pageX-this.overflowOffset.left<o.scrollSensitivity&&(this.scrollParent[0].scrollLeft=r=this.scrollParent[0].scrollLeft-o.scrollSpeed)):(t.pageY-this.document.scrollTop()<o.scrollSensitivity?r=this.document.scrollTop(this.document.scrollTop()-o.scrollSpeed):this.window.height()-(t.pageY-this.document.scrollTop())<o.scrollSensitivity&&(r=this.document.scrollTop(this.document.scrollTop()+o.scrollSpeed)),t.pageX-this.document.scrollLeft()<o.scrollSensitivity?r=this.document.scrollLeft(this.document.scrollLeft()-o.scrollSpeed):this.window.width()-(t.pageX-this.document.scrollLeft())<o.scrollSensitivity&&(r=this.document.scrollLeft(this.document.scrollLeft()+o.scrollSpeed))),r!==!1&&e.ui.ddmanager&&!o.dropBehaviour&&e.ui.ddmanager.prepareOffsets(this,t)),this.positionAbs=this._convertPositionTo("absolute"),this.options.axis&&"y"===this.options.axis||(this.helper[0].style.left=this.position.left+"px"),this.options.axis&&"x"===this.options.axis||(this.helper[0].style.top=this.position.top+"px"),i=this.items.length-1;i>=0;i--)if(s=this.items[i],n=s.item[0],a=this._intersectsWithPointer(s),a&&s.instance===this.currentContainer&&n!==this.currentItem[0]&&this.placeholder[1===a?"next":"prev"]()[0]!==n&&!e.contains(this.placeholder[0],n)&&("semi-dynamic"===this.options.type?!e.contains(this.element[0],n):!0)){if(this.direction=1===a?"down":"up","pointer"!==this.options.tolerance&&!this._intersectsWithSides(s))break;this._rearrange(t,s),this._trigger("change",t,this._uiHash());break}return this._contactContainers(t),e.ui.ddmanager&&e.ui.ddmanager.drag(this,t),this._trigger("sort",t,this._uiHash()),this.lastPositionAbs=this.positionAbs,!1},_mouseStop:function(t,i){if(t){if(e.ui.ddmanager&&!this.options.dropBehaviour&&e.ui.ddmanager.drop(this,t),this.options.revert){var s=this,n=this.placeholder.offset(),a=this.options.axis,o={};a&&"x"!==a||(o.left=n.left-this.offset.parent.left-this.margins.left+(this.offsetParent[0]===this.document[0].body?0:this.offsetParent[0].scrollLeft)),a&&"y"!==a||(o.top=n.top-this.offset.parent.top-this.margins.top+(this.offsetParent[0]===this.document[0].body?0:this.offsetParent[0].scrollTop)),this.reverting=!0,e(this.helper).animate(o,parseInt(this.options.revert,10)||500,function(){s._clear(t)})}else this._clear(t,i);return!1}},cancel:function(){if(this.dragging){this._mouseUp({target:null}),"original"===this.options.helper?this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper"):this.currentItem.show();for(var t=this.containers.length-1;t>=0;t--)this.containers[t]._trigger("deactivate",null,this._uiHash(this)),this.containers[t].containerCache.over&&(this.containers[t]._trigger("out",null,this._uiHash(this)),this.containers[t].containerCache.over=0)}return this.placeholder&&(this.placeholder[0].parentNode&&this.placeholder[0].parentNode.removeChild(this.placeholder[0]),"original"!==this.options.helper&&this.helper&&this.helper[0].parentNode&&this.helper.remove(),e.extend(this,{helper:null,dragging:!1,reverting:!1,_noFinalSort:null}),this.domPosition.prev?e(this.domPosition.prev).after(this.currentItem):e(this.domPosition.parent).prepend(this.currentItem)),this},serialize:function(t){var i=this._getItemsAsjQuery(t&&t.connected),s=[];return t=t||{},e(i).each(function(){var i=(e(t.item||this).attr(t.attribute||"id")||"").match(t.expression||/(.+)[\-=_](.+)/);i&&s.push((t.key||i[1]+"[]")+"="+(t.key&&t.expression?i[1]:i[2]))}),!s.length&&t.key&&s.push(t.key+"="),s.join("&")},toArray:function(t){var i=this._getItemsAsjQuery(t&&t.connected),s=[];return t=t||{},i.each(function(){s.push(e(t.item||this).attr(t.attribute||"id")||"")}),s},_intersectsWith:function(e){var t=this.positionAbs.left,i=t+this.helperProportions.width,s=this.positionAbs.top,n=s+this.helperProportions.height,a=e.left,o=a+e.width,r=e.top,h=r+e.height,l=this.offset.click.top,u=this.offset.click.left,d="x"===this.options.axis||s+l>r&&h>s+l,c="y"===this.options.axis||t+u>a&&o>t+u,p=d&&c;return"pointer"===this.options.tolerance||this.options.forcePointerForContainers||"pointer"!==this.options.tolerance&&this.helperProportions[this.floating?"width":"height"]>e[this.floating?"width":"height"]?p:t+this.helperProportions.width/2>a&&o>i-this.helperProportions.width/2&&s+this.helperProportions.height/2>r&&h>n-this.helperProportions.height/2},_intersectsWithPointer:function(e){var t="x"===this.options.axis||this._isOverAxis(this.positionAbs.top+this.offset.click.top,e.top,e.height),i="y"===this.options.axis||this._isOverAxis(this.positionAbs.left+this.offset.click.left,e.left,e.width),s=t&&i,n=this._getDragVerticalDirection(),a=this._getDragHorizontalDirection();return s?this.floating?a&&"right"===a||"down"===n?2:1:n&&("down"===n?2:1):!1},_intersectsWithSides:function(e){var t=this._isOverAxis(this.positionAbs.top+this.offset.click.top,e.top+e.height/2,e.height),i=this._isOverAxis(this.positionAbs.left+this.offset.click.left,e.left+e.width/2,e.width),s=this._getDragVerticalDirection(),n=this._getDragHorizontalDirection();return this.floating&&n?"right"===n&&i||"left"===n&&!i:s&&("down"===s&&t||"up"===s&&!t)},_getDragVerticalDirection:function(){var e=this.positionAbs.top-this.lastPositionAbs.top;return 0!==e&&(e>0?"down":"up")},_getDragHorizontalDirection:function(){var e=this.positionAbs.left-this.lastPositionAbs.left;return 0!==e&&(e>0?"right":"left")},refresh:function(e){return this._refreshItems(e),this._setHandleClassName(),this.refreshPositions(),this},_connectWith:function(){var e=this.options;return e.connectWith.constructor===String?[e.connectWith]:e.connectWith},_getItemsAsjQuery:function(t){function i(){r.push(this)}var s,n,a,o,r=[],h=[],l=this._connectWith();if(l&&t)for(s=l.length-1;s>=0;s--)for(a=e(l[s],this.document[0]),n=a.length-1;n>=0;n--)o=e.data(a[n],this.widgetFullName),o&&o!==this&&!o.options.disabled&&h.push([e.isFunction(o.options.items)?o.options.items.call(o.element):e(o.options.items,o.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),o]);for(h.push([e.isFunction(this.options.items)?this.options.items.call(this.element,null,{options:this.options,item:this.currentItem}):e(this.options.items,this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),this]),s=h.length-1;s>=0;s--)h[s][0].each(i);return e(r)},_removeCurrentsFromItems:function(){var t=this.currentItem.find(":data("+this.widgetName+"-item)");this.items=e.grep(this.items,function(e){for(var i=0;t.length>i;i++)if(t[i]===e.item[0])return!1;return!0})},_refreshItems:function(t){this.items=[],this.containers=[this];var i,s,n,a,o,r,h,l,u=this.items,d=[[e.isFunction(this.options.items)?this.options.items.call(this.element[0],t,{item:this.currentItem}):e(this.options.items,this.element),this]],c=this._connectWith();if(c&&this.ready)for(i=c.length-1;i>=0;i--)for(n=e(c[i],this.document[0]),s=n.length-1;s>=0;s--)a=e.data(n[s],this.widgetFullName),a&&a!==this&&!a.options.disabled&&(d.push([e.isFunction(a.options.items)?a.options.items.call(a.element[0],t,{item:this.currentItem}):e(a.options.items,a.element),a]),this.containers.push(a));for(i=d.length-1;i>=0;i--)for(o=d[i][1],r=d[i][0],s=0,l=r.length;l>s;s++)h=e(r[s]),h.data(this.widgetName+"-item",o),u.push({item:h,instance:o,width:0,height:0,left:0,top:0})},refreshPositions:function(t){this.floating=this.items.length?"x"===this.options.axis||this._isFloating(this.items[0].item):!1,this.offsetParent&&this.helper&&(this.offset.parent=this._getParentOffset());var i,s,n,a;for(i=this.items.length-1;i>=0;i--)s=this.items[i],s.instance!==this.currentContainer&&this.currentContainer&&s.item[0]!==this.currentItem[0]||(n=this.options.toleranceElement?e(this.options.toleranceElement,s.item):s.item,t||(s.width=n.outerWidth(),s.height=n.outerHeight()),a=n.offset(),s.left=a.left,s.top=a.top);if(this.options.custom&&this.options.custom.refreshContainers)this.options.custom.refreshContainers.call(this);else for(i=this.containers.length-1;i>=0;i--)a=this.containers[i].element.offset(),this.containers[i].containerCache.left=a.left,this.containers[i].containerCache.top=a.top,this.containers[i].containerCache.width=this.containers[i].element.outerWidth(),this.containers[i].containerCache.height=this.containers[i].element.outerHeight();return this},_createPlaceholder:function(t){t=t||this;var i,s=t.options;s.placeholder&&s.placeholder.constructor!==String||(i=s.placeholder,s.placeholder={element:function(){var s=t.currentItem[0].nodeName.toLowerCase(),n=e("<"+s+">",t.document[0]).addClass(i||t.currentItem[0].className+" ui-sortable-placeholder").removeClass("ui-sortable-helper");return"tbody"===s?t._createTrPlaceholder(t.currentItem.find("tr").eq(0),e("<tr>",t.document[0]).appendTo(n)):"tr"===s?t._createTrPlaceholder(t.currentItem,n):"img"===s&&n.attr("src",t.currentItem.attr("src")),i||n.css("visibility","hidden"),n},update:function(e,n){(!i||s.forcePlaceholderSize)&&(n.height()||n.height(t.currentItem.innerHeight()-parseInt(t.currentItem.css("paddingTop")||0,10)-parseInt(t.currentItem.css("paddingBottom")||0,10)),n.width()||n.width(t.currentItem.innerWidth()-parseInt(t.currentItem.css("paddingLeft")||0,10)-parseInt(t.currentItem.css("paddingRight")||0,10)))}}),t.placeholder=e(s.placeholder.element.call(t.element,t.currentItem)),t.currentItem.after(t.placeholder),s.placeholder.update(t,t.placeholder)},_createTrPlaceholder:function(t,i){var s=this;t.children().each(function(){e("<td>&#160;</td>",s.document[0]).attr("colspan",e(this).attr("colspan")||1).appendTo(i)})},_contactContainers:function(t){var i,s,n,a,o,r,h,l,u,d,c=null,p=null;for(i=this.containers.length-1;i>=0;i--)if(!e.contains(this.currentItem[0],this.containers[i].element[0]))if(this._intersectsWith(this.containers[i].containerCache)){if(c&&e.contains(this.containers[i].element[0],c.element[0]))continue;c=this.containers[i],p=i}else this.containers[i].containerCache.over&&(this.containers[i]._trigger("out",t,this._uiHash(this)),this.containers[i].containerCache.over=0);if(c)if(1===this.containers.length)this.containers[p].containerCache.over||(this.containers[p]._trigger("over",t,this._uiHash(this)),this.containers[p].containerCache.over=1);else{for(n=1e4,a=null,u=c.floating||this._isFloating(this.currentItem),o=u?"left":"top",r=u?"width":"height",d=u?"clientX":"clientY",s=this.items.length-1;s>=0;s--)e.contains(this.containers[p].element[0],this.items[s].item[0])&&this.items[s].item[0]!==this.currentItem[0]&&(h=this.items[s].item.offset()[o],l=!1,t[d]-h>this.items[s][r]/2&&(l=!0),n>Math.abs(t[d]-h)&&(n=Math.abs(t[d]-h),a=this.items[s],this.direction=l?"up":"down"));if(!a&&!this.options.dropOnEmpty)return;if(this.currentContainer===this.containers[p])return this.currentContainer.containerCache.over||(this.containers[p]._trigger("over",t,this._uiHash()),this.currentContainer.containerCache.over=1),void 0;a?this._rearrange(t,a,null,!0):this._rearrange(t,null,this.containers[p].element,!0),this._trigger("change",t,this._uiHash()),this.containers[p]._trigger("change",t,this._uiHash(this)),this.currentContainer=this.containers[p],this.options.placeholder.update(this.currentContainer,this.placeholder),this.containers[p]._trigger("over",t,this._uiHash(this)),this.containers[p].containerCache.over=1}},_createHelper:function(t){var i=this.options,s=e.isFunction(i.helper)?e(i.helper.apply(this.element[0],[t,this.currentItem])):"clone"===i.helper?this.currentItem.clone():this.currentItem;return s.parents("body").length||e("parent"!==i.appendTo?i.appendTo:this.currentItem[0].parentNode)[0].appendChild(s[0]),s[0]===this.currentItem[0]&&(this._storedCSS={width:this.currentItem[0].style.width,height:this.currentItem[0].style.height,position:this.currentItem.css("position"),top:this.currentItem.css("top"),left:this.currentItem.css("left")}),(!s[0].style.width||i.forceHelperSize)&&s.width(this.currentItem.width()),(!s[0].style.height||i.forceHelperSize)&&s.height(this.currentItem.height()),s},_adjustOffsetFromHelper:function(t){"string"==typeof t&&(t=t.split(" ")),e.isArray(t)&&(t={left:+t[0],top:+t[1]||0}),"left"in t&&(this.offset.click.left=t.left+this.margins.left),"right"in t&&(this.offset.click.left=this.helperProportions.width-t.right+this.margins.left),"top"in t&&(this.offset.click.top=t.top+this.margins.top),"bottom"in t&&(this.offset.click.top=this.helperProportions.height-t.bottom+this.margins.top)},_getParentOffset:function(){this.offsetParent=this.helper.offsetParent();var t=this.offsetParent.offset();return"absolute"===this.cssPosition&&this.scrollParent[0]!==this.document[0]&&e.contains(this.scrollParent[0],this.offsetParent[0])&&(t.left+=this.scrollParent.scrollLeft(),t.top+=this.scrollParent.scrollTop()),(this.offsetParent[0]===this.document[0].body||this.offsetParent[0].tagName&&"html"===this.offsetParent[0].tagName.toLowerCase()&&e.ui.ie)&&(t={top:0,left:0}),{top:t.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:t.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if("relative"===this.cssPosition){var e=this.currentItem.position();return{top:e.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:e.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}}return{top:0,left:0}},_cacheMargins:function(){this.margins={left:parseInt(this.currentItem.css("marginLeft"),10)||0,top:parseInt(this.currentItem.css("marginTop"),10)||0}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var t,i,s,n=this.options;"parent"===n.containment&&(n.containment=this.helper[0].parentNode),("document"===n.containment||"window"===n.containment)&&(this.containment=[0-this.offset.relative.left-this.offset.parent.left,0-this.offset.relative.top-this.offset.parent.top,"document"===n.containment?this.document.width():this.window.width()-this.helperProportions.width-this.margins.left,("document"===n.containment?this.document.width():this.window.height()||this.document[0].body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top]),/^(document|window|parent)$/.test(n.containment)||(t=e(n.containment)[0],i=e(n.containment).offset(),s="hidden"!==e(t).css("overflow"),this.containment=[i.left+(parseInt(e(t).css("borderLeftWidth"),10)||0)+(parseInt(e(t).css("paddingLeft"),10)||0)-this.margins.left,i.top+(parseInt(e(t).css("borderTopWidth"),10)||0)+(parseInt(e(t).css("paddingTop"),10)||0)-this.margins.top,i.left+(s?Math.max(t.scrollWidth,t.offsetWidth):t.offsetWidth)-(parseInt(e(t).css("borderLeftWidth"),10)||0)-(parseInt(e(t).css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left,i.top+(s?Math.max(t.scrollHeight,t.offsetHeight):t.offsetHeight)-(parseInt(e(t).css("borderTopWidth"),10)||0)-(parseInt(e(t).css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top])},_convertPositionTo:function(t,i){i||(i=this.position);var s="absolute"===t?1:-1,n="absolute"!==this.cssPosition||this.scrollParent[0]!==this.document[0]&&e.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent,a=/(html|body)/i.test(n[0].tagName);return{top:i.top+this.offset.relative.top*s+this.offset.parent.top*s-("fixed"===this.cssPosition?-this.scrollParent.scrollTop():a?0:n.scrollTop())*s,left:i.left+this.offset.relative.left*s+this.offset.parent.left*s-("fixed"===this.cssPosition?-this.scrollParent.scrollLeft():a?0:n.scrollLeft())*s}},_generatePosition:function(t){var i,s,n=this.options,a=t.pageX,o=t.pageY,r="absolute"!==this.cssPosition||this.scrollParent[0]!==this.document[0]&&e.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent,h=/(html|body)/i.test(r[0].tagName);return"relative"!==this.cssPosition||this.scrollParent[0]!==this.document[0]&&this.scrollParent[0]!==this.offsetParent[0]||(this.offset.relative=this._getRelativeOffset()),this.originalPosition&&(this.containment&&(t.pageX-this.offset.click.left<this.containment[0]&&(a=this.containment[0]+this.offset.click.left),t.pageY-this.offset.click.top<this.containment[1]&&(o=this.containment[1]+this.offset.click.top),t.pageX-this.offset.click.left>this.containment[2]&&(a=this.containment[2]+this.offset.click.left),t.pageY-this.offset.click.top>this.containment[3]&&(o=this.containment[3]+this.offset.click.top)),n.grid&&(i=this.originalPageY+Math.round((o-this.originalPageY)/n.grid[1])*n.grid[1],o=this.containment?i-this.offset.click.top>=this.containment[1]&&i-this.offset.click.top<=this.containment[3]?i:i-this.offset.click.top>=this.containment[1]?i-n.grid[1]:i+n.grid[1]:i,s=this.originalPageX+Math.round((a-this.originalPageX)/n.grid[0])*n.grid[0],a=this.containment?s-this.offset.click.left>=this.containment[0]&&s-this.offset.click.left<=this.containment[2]?s:s-this.offset.click.left>=this.containment[0]?s-n.grid[0]:s+n.grid[0]:s)),{top:o-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+("fixed"===this.cssPosition?-this.scrollParent.scrollTop():h?0:r.scrollTop()),left:a-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+("fixed"===this.cssPosition?-this.scrollParent.scrollLeft():h?0:r.scrollLeft())}},_rearrange:function(e,t,i,s){i?i[0].appendChild(this.placeholder[0]):t.item[0].parentNode.insertBefore(this.placeholder[0],"down"===this.direction?t.item[0]:t.item[0].nextSibling),this.counter=this.counter?++this.counter:1;var n=this.counter;this._delay(function(){n===this.counter&&this.refreshPositions(!s)})},_clear:function(e,t){function i(e,t,i){return function(s){i._trigger(e,s,t._uiHash(t))}}this.reverting=!1;var s,n=[];if(!this._noFinalSort&&this.currentItem.parent().length&&this.placeholder.before(this.currentItem),this._noFinalSort=null,this.helper[0]===this.currentItem[0]){for(s in this._storedCSS)("auto"===this._storedCSS[s]||"static"===this._storedCSS[s])&&(this._storedCSS[s]="");this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")}else this.currentItem.show();for(this.fromOutside&&!t&&n.push(function(e){this._trigger("receive",e,this._uiHash(this.fromOutside))}),!this.fromOutside&&this.domPosition.prev===this.currentItem.prev().not(".ui-sortable-helper")[0]&&this.domPosition.parent===this.currentItem.parent()[0]||t||n.push(function(e){this._trigger("update",e,this._uiHash())}),this!==this.currentContainer&&(t||(n.push(function(e){this._trigger("remove",e,this._uiHash())}),n.push(function(e){return function(t){e._trigger("receive",t,this._uiHash(this))}}.call(this,this.currentContainer)),n.push(function(e){return function(t){e._trigger("update",t,this._uiHash(this))}}.call(this,this.currentContainer)))),s=this.containers.length-1;s>=0;s--)t||n.push(i("deactivate",this,this.containers[s])),this.containers[s].containerCache.over&&(n.push(i("out",this,this.containers[s])),this.containers[s].containerCache.over=0);if(this.storedCursor&&(this.document.find("body").css("cursor",this.storedCursor),this.storedStylesheet.remove()),this._storedOpacity&&this.helper.css("opacity",this._storedOpacity),this._storedZIndex&&this.helper.css("zIndex","auto"===this._storedZIndex?"":this._storedZIndex),this.dragging=!1,t||this._trigger("beforeStop",e,this._uiHash()),this.placeholder[0].parentNode.removeChild(this.placeholder[0]),this.cancelHelperRemoval||(this.helper[0]!==this.currentItem[0]&&this.helper.remove(),this.helper=null),!t){for(s=0;n.length>s;s++)n[s].call(this,e);this._trigger("stop",e,this._uiHash())}return this.fromOutside=!1,!this.cancelHelperRemoval},_trigger:function(){e.Widget.prototype._trigger.apply(this,arguments)===!1&&this.cancel()},_uiHash:function(t){var i=t||this;return{helper:i.helper,placeholder:i.placeholder||e([]),position:i.position,originalPosition:i.originalPosition,offset:i.positionAbs,item:i.currentItem,sender:t?t.element:null}}}),e.widget("ui.spinner",{version:"1.11.4",defaultElement:"<input>",widgetEventPrefix:"spin",options:{culture:null,icons:{down:"ui-icon-triangle-1-s",up:"ui-icon-triangle-1-n"},incremental:!0,max:null,min:null,numberFormat:null,page:10,step:1,change:null,spin:null,start:null,stop:null},_create:function(){this._setOption("max",this.options.max),this._setOption("min",this.options.min),this._setOption("step",this.options.step),""!==this.value()&&this._value(this.element.val(),!0),this._draw(),this._on(this._events),this._refresh(),this._on(this.window,{beforeunload:function(){this.element.removeAttr("autocomplete")}})},_getCreateOptions:function(){var t={},i=this.element;return e.each(["min","max","step"],function(e,s){var n=i.attr(s);void 0!==n&&n.length&&(t[s]=n)}),t},_events:{keydown:function(e){this._start(e)&&this._keydown(e)&&e.preventDefault()},keyup:"_stop",focus:function(){this.previous=this.element.val()},blur:function(e){return this.cancelBlur?(delete this.cancelBlur,void 0):(this._stop(),this._refresh(),this.previous!==this.element.val()&&this._trigger("change",e),void 0)},mousewheel:function(e,t){if(t){if(!this.spinning&&!this._start(e))return!1;this._spin((t>0?1:-1)*this.options.step,e),clearTimeout(this.mousewheelTimer),this.mousewheelTimer=this._delay(function(){this.spinning&&this._stop(e)},100),e.preventDefault()}},"mousedown .ui-spinner-button":function(t){function i(){var e=this.element[0]===this.document[0].activeElement;e||(this.element.focus(),this.previous=s,this._delay(function(){this.previous=s}))}var s;s=this.element[0]===this.document[0].activeElement?this.previous:this.element.val(),t.preventDefault(),i.call(this),this.cancelBlur=!0,this._delay(function(){delete this.cancelBlur,i.call(this)}),this._start(t)!==!1&&this._repeat(null,e(t.currentTarget).hasClass("ui-spinner-up")?1:-1,t)},"mouseup .ui-spinner-button":"_stop","mouseenter .ui-spinner-button":function(t){return e(t.currentTarget).hasClass("ui-state-active")?this._start(t)===!1?!1:(this._repeat(null,e(t.currentTarget).hasClass("ui-spinner-up")?1:-1,t),void 0):void 0},"mouseleave .ui-spinner-button":"_stop"},_draw:function(){var e=this.uiSpinner=this.element.addClass("ui-spinner-input").attr("autocomplete","off").wrap(this._uiSpinnerHtml()).parent().append(this._buttonHtml());this.element.attr("role","spinbutton"),this.buttons=e.find(".ui-spinner-button").attr("tabIndex",-1).button().removeClass("ui-corner-all"),this.buttons.height()>Math.ceil(.5*e.height())&&e.height()>0&&e.height(e.height()),this.options.disabled&&this.disable()},_keydown:function(t){var i=this.options,s=e.ui.keyCode;switch(t.keyCode){case s.UP:return this._repeat(null,1,t),!0;case s.DOWN:return this._repeat(null,-1,t),!0;case s.PAGE_UP:return this._repeat(null,i.page,t),!0;case s.PAGE_DOWN:return this._repeat(null,-i.page,t),!0}return!1},_uiSpinnerHtml:function(){return"<span class='ui-spinner ui-widget ui-widget-content ui-corner-all'></span>"},_buttonHtml:function(){return"<a class='ui-spinner-button ui-spinner-up ui-corner-tr'><span class='ui-icon "+this.options.icons.up+"'>&#9650;</span>"+"</a>"+"<a class='ui-spinner-button ui-spinner-down ui-corner-br'>"+"<span class='ui-icon "+this.options.icons.down+"'>&#9660;</span>"+"</a>"},_start:function(e){return this.spinning||this._trigger("start",e)!==!1?(this.counter||(this.counter=1),this.spinning=!0,!0):!1},_repeat:function(e,t,i){e=e||500,clearTimeout(this.timer),this.timer=this._delay(function(){this._repeat(40,t,i)},e),this._spin(t*this.options.step,i)},_spin:function(e,t){var i=this.value()||0;this.counter||(this.counter=1),i=this._adjustValue(i+e*this._increment(this.counter)),this.spinning&&this._trigger("spin",t,{value:i})===!1||(this._value(i),this.counter++)},_increment:function(t){var i=this.options.incremental;return i?e.isFunction(i)?i(t):Math.floor(t*t*t/5e4-t*t/500+17*t/200+1):1},_precision:function(){var e=this._precisionOf(this.options.step);return null!==this.options.min&&(e=Math.max(e,this._precisionOf(this.options.min))),e},_precisionOf:function(e){var t=""+e,i=t.indexOf(".");return-1===i?0:t.length-i-1},_adjustValue:function(e){var t,i,s=this.options;return t=null!==s.min?s.min:0,i=e-t,i=Math.round(i/s.step)*s.step,e=t+i,e=parseFloat(e.toFixed(this._precision())),null!==s.max&&e>s.max?s.max:null!==s.min&&s.min>e?s.min:e},_stop:function(e){this.spinning&&(clearTimeout(this.timer),clearTimeout(this.mousewheelTimer),this.counter=0,this.spinning=!1,this._trigger("stop",e))},_setOption:function(e,t){if("culture"===e||"numberFormat"===e){var i=this._parse(this.element.val());return this.options[e]=t,this.element.val(this._format(i)),void 0}("max"===e||"min"===e||"step"===e)&&"string"==typeof t&&(t=this._parse(t)),"icons"===e&&(this.buttons.first().find(".ui-icon").removeClass(this.options.icons.up).addClass(t.up),this.buttons.last().find(".ui-icon").removeClass(this.options.icons.down).addClass(t.down)),this._super(e,t),"disabled"===e&&(this.widget().toggleClass("ui-state-disabled",!!t),this.element.prop("disabled",!!t),this.buttons.button(t?"disable":"enable"))},_setOptions:h(function(e){this._super(e)}),_parse:function(e){return"string"==typeof e&&""!==e&&(e=window.Globalize&&this.options.numberFormat?Globalize.parseFloat(e,10,this.options.culture):+e),""===e||isNaN(e)?null:e},_format:function(e){return""===e?"":window.Globalize&&this.options.numberFormat?Globalize.format(e,this.options.numberFormat,this.options.culture):e},_refresh:function(){this.element.attr({"aria-valuemin":this.options.min,"aria-valuemax":this.options.max,"aria-valuenow":this._parse(this.element.val())})},isValid:function(){var e=this.value();return null===e?!1:e===this._adjustValue(e)},_value:function(e,t){var i;""!==e&&(i=this._parse(e),null!==i&&(t||(i=this._adjustValue(i)),e=this._format(i))),this.element.val(e),this._refresh()},_destroy:function(){this.element.removeClass("ui-spinner-input").prop("disabled",!1).removeAttr("autocomplete").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow"),this.uiSpinner.replaceWith(this.element)},stepUp:h(function(e){this._stepUp(e)}),_stepUp:function(e){this._start()&&(this._spin((e||1)*this.options.step),this._stop())},stepDown:h(function(e){this._stepDown(e)}),_stepDown:function(e){this._start()&&(this._spin((e||1)*-this.options.step),this._stop())},pageUp:h(function(e){this._stepUp((e||1)*this.options.page)}),pageDown:h(function(e){this._stepDown((e||1)*this.options.page)}),value:function(e){return arguments.length?(h(this._value).call(this,e),void 0):this._parse(this.element.val())},widget:function(){return this.uiSpinner}}),e.widget("ui.tabs",{version:"1.11.4",delay:300,options:{active:null,collapsible:!1,event:"click",heightStyle:"content",hide:null,show:null,activate:null,beforeActivate:null,beforeLoad:null,load:null},_isLocal:function(){var e=/#.*$/;return function(t){var i,s;t=t.cloneNode(!1),i=t.href.replace(e,""),s=location.href.replace(e,"");try{i=decodeURIComponent(i)}catch(n){}try{s=decodeURIComponent(s)}catch(n){}return t.hash.length>1&&i===s}}(),_create:function(){var t=this,i=this.options;this.running=!1,this.element.addClass("ui-tabs ui-widget ui-widget-content ui-corner-all").toggleClass("ui-tabs-collapsible",i.collapsible),this._processTabs(),i.active=this._initialActive(),e.isArray(i.disabled)&&(i.disabled=e.unique(i.disabled.concat(e.map(this.tabs.filter(".ui-state-disabled"),function(e){return t.tabs.index(e)}))).sort()),this.active=this.options.active!==!1&&this.anchors.length?this._findActive(i.active):e(),this._refresh(),this.active.length&&this.load(i.active)},_initialActive:function(){var t=this.options.active,i=this.options.collapsible,s=location.hash.substring(1);return null===t&&(s&&this.tabs.each(function(i,n){return e(n).attr("aria-controls")===s?(t=i,!1):void 0}),null===t&&(t=this.tabs.index(this.tabs.filter(".ui-tabs-active"))),(null===t||-1===t)&&(t=this.tabs.length?0:!1)),t!==!1&&(t=this.tabs.index(this.tabs.eq(t)),-1===t&&(t=i?!1:0)),!i&&t===!1&&this.anchors.length&&(t=0),t},_getCreateEventData:function(){return{tab:this.active,panel:this.active.length?this._getPanelForTab(this.active):e()}},_tabKeydown:function(t){var i=e(this.document[0].activeElement).closest("li"),s=this.tabs.index(i),n=!0;if(!this._handlePageNav(t)){switch(t.keyCode){case e.ui.keyCode.RIGHT:case e.ui.keyCode.DOWN:s++;break;case e.ui.keyCode.UP:case e.ui.keyCode.LEFT:n=!1,s--;break;case e.ui.keyCode.END:s=this.anchors.length-1;break;case e.ui.keyCode.HOME:s=0;break;case e.ui.keyCode.SPACE:return t.preventDefault(),clearTimeout(this.activating),this._activate(s),void 0;case e.ui.keyCode.ENTER:return t.preventDefault(),clearTimeout(this.activating),this._activate(s===this.options.active?!1:s),void 0;default:return}t.preventDefault(),clearTimeout(this.activating),s=this._focusNextTab(s,n),t.ctrlKey||t.metaKey||(i.attr("aria-selected","false"),this.tabs.eq(s).attr("aria-selected","true"),this.activating=this._delay(function(){this.option("active",s)},this.delay))}},_panelKeydown:function(t){this._handlePageNav(t)||t.ctrlKey&&t.keyCode===e.ui.keyCode.UP&&(t.preventDefault(),this.active.focus())},_handlePageNav:function(t){return t.altKey&&t.keyCode===e.ui.keyCode.PAGE_UP?(this._activate(this._focusNextTab(this.options.active-1,!1)),!0):t.altKey&&t.keyCode===e.ui.keyCode.PAGE_DOWN?(this._activate(this._focusNextTab(this.options.active+1,!0)),!0):void 0},_findNextTab:function(t,i){function s(){return t>n&&(t=0),0>t&&(t=n),t}for(var n=this.tabs.length-1;-1!==e.inArray(s(),this.options.disabled);)t=i?t+1:t-1;return t},_focusNextTab:function(e,t){return e=this._findNextTab(e,t),this.tabs.eq(e).focus(),e},_setOption:function(e,t){return"active"===e?(this._activate(t),void 0):"disabled"===e?(this._setupDisabled(t),void 0):(this._super(e,t),"collapsible"===e&&(this.element.toggleClass("ui-tabs-collapsible",t),t||this.options.active!==!1||this._activate(0)),"event"===e&&this._setupEvents(t),"heightStyle"===e&&this._setupHeightStyle(t),void 0)},_sanitizeSelector:function(e){return e?e.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g,"\\$&"):""},refresh:function(){var t=this.options,i=this.tablist.children(":has(a[href])");t.disabled=e.map(i.filter(".ui-state-disabled"),function(e){return i.index(e)}),this._processTabs(),t.active!==!1&&this.anchors.length?this.active.length&&!e.contains(this.tablist[0],this.active[0])?this.tabs.length===t.disabled.length?(t.active=!1,this.active=e()):this._activate(this._findNextTab(Math.max(0,t.active-1),!1)):t.active=this.tabs.index(this.active):(t.active=!1,this.active=e()),this._refresh()},_refresh:function(){this._setupDisabled(this.options.disabled),this._setupEvents(this.options.event),this._setupHeightStyle(this.options.heightStyle),this.tabs.not(this.active).attr({"aria-selected":"false","aria-expanded":"false",tabIndex:-1}),this.panels.not(this._getPanelForTab(this.active)).hide().attr({"aria-hidden":"true"}),this.active.length?(this.active.addClass("ui-tabs-active ui-state-active").attr({"aria-selected":"true","aria-expanded":"true",tabIndex:0}),this._getPanelForTab(this.active).show().attr({"aria-hidden":"false"})):this.tabs.eq(0).attr("tabIndex",0)},_processTabs:function(){var t=this,i=this.tabs,s=this.anchors,n=this.panels;
this.tablist=this._getList().addClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").attr("role","tablist").delegate("> li","mousedown"+this.eventNamespace,function(t){e(this).is(".ui-state-disabled")&&t.preventDefault()}).delegate(".ui-tabs-anchor","focus"+this.eventNamespace,function(){e(this).closest("li").is(".ui-state-disabled")&&this.blur()}),this.tabs=this.tablist.find("> li:has(a[href])").addClass("ui-state-default ui-corner-top").attr({role:"tab",tabIndex:-1}),this.anchors=this.tabs.map(function(){return e("a",this)[0]}).addClass("ui-tabs-anchor").attr({role:"presentation",tabIndex:-1}),this.panels=e(),this.anchors.each(function(i,s){var n,a,o,r=e(s).uniqueId().attr("id"),h=e(s).closest("li"),l=h.attr("aria-controls");t._isLocal(s)?(n=s.hash,o=n.substring(1),a=t.element.find(t._sanitizeSelector(n))):(o=h.attr("aria-controls")||e({}).uniqueId()[0].id,n="#"+o,a=t.element.find(n),a.length||(a=t._createPanel(o),a.insertAfter(t.panels[i-1]||t.tablist)),a.attr("aria-live","polite")),a.length&&(t.panels=t.panels.add(a)),l&&h.data("ui-tabs-aria-controls",l),h.attr({"aria-controls":o,"aria-labelledby":r}),a.attr("aria-labelledby",r)}),this.panels.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").attr("role","tabpanel"),i&&(this._off(i.not(this.tabs)),this._off(s.not(this.anchors)),this._off(n.not(this.panels)))},_getList:function(){return this.tablist||this.element.find("ol,ul").eq(0)},_createPanel:function(t){return e("<div>").attr("id",t).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").data("ui-tabs-destroy",!0)},_setupDisabled:function(t){e.isArray(t)&&(t.length?t.length===this.anchors.length&&(t=!0):t=!1);for(var i,s=0;i=this.tabs[s];s++)t===!0||-1!==e.inArray(s,t)?e(i).addClass("ui-state-disabled").attr("aria-disabled","true"):e(i).removeClass("ui-state-disabled").removeAttr("aria-disabled");this.options.disabled=t},_setupEvents:function(t){var i={};t&&e.each(t.split(" "),function(e,t){i[t]="_eventHandler"}),this._off(this.anchors.add(this.tabs).add(this.panels)),this._on(!0,this.anchors,{click:function(e){e.preventDefault()}}),this._on(this.anchors,i),this._on(this.tabs,{keydown:"_tabKeydown"}),this._on(this.panels,{keydown:"_panelKeydown"}),this._focusable(this.tabs),this._hoverable(this.tabs)},_setupHeightStyle:function(t){var i,s=this.element.parent();"fill"===t?(i=s.height(),i-=this.element.outerHeight()-this.element.height(),this.element.siblings(":visible").each(function(){var t=e(this),s=t.css("position");"absolute"!==s&&"fixed"!==s&&(i-=t.outerHeight(!0))}),this.element.children().not(this.panels).each(function(){i-=e(this).outerHeight(!0)}),this.panels.each(function(){e(this).height(Math.max(0,i-e(this).innerHeight()+e(this).height()))}).css("overflow","auto")):"auto"===t&&(i=0,this.panels.each(function(){i=Math.max(i,e(this).height("").height())}).height(i))},_eventHandler:function(t){var i=this.options,s=this.active,n=e(t.currentTarget),a=n.closest("li"),o=a[0]===s[0],r=o&&i.collapsible,h=r?e():this._getPanelForTab(a),l=s.length?this._getPanelForTab(s):e(),u={oldTab:s,oldPanel:l,newTab:r?e():a,newPanel:h};t.preventDefault(),a.hasClass("ui-state-disabled")||a.hasClass("ui-tabs-loading")||this.running||o&&!i.collapsible||this._trigger("beforeActivate",t,u)===!1||(i.active=r?!1:this.tabs.index(a),this.active=o?e():a,this.xhr&&this.xhr.abort(),l.length||h.length||e.error("jQuery UI Tabs: Mismatching fragment identifier."),h.length&&this.load(this.tabs.index(a),t),this._toggle(t,u))},_toggle:function(t,i){function s(){a.running=!1,a._trigger("activate",t,i)}function n(){i.newTab.closest("li").addClass("ui-tabs-active ui-state-active"),o.length&&a.options.show?a._show(o,a.options.show,s):(o.show(),s())}var a=this,o=i.newPanel,r=i.oldPanel;this.running=!0,r.length&&this.options.hide?this._hide(r,this.options.hide,function(){i.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"),n()}):(i.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"),r.hide(),n()),r.attr("aria-hidden","true"),i.oldTab.attr({"aria-selected":"false","aria-expanded":"false"}),o.length&&r.length?i.oldTab.attr("tabIndex",-1):o.length&&this.tabs.filter(function(){return 0===e(this).attr("tabIndex")}).attr("tabIndex",-1),o.attr("aria-hidden","false"),i.newTab.attr({"aria-selected":"true","aria-expanded":"true",tabIndex:0})},_activate:function(t){var i,s=this._findActive(t);s[0]!==this.active[0]&&(s.length||(s=this.active),i=s.find(".ui-tabs-anchor")[0],this._eventHandler({target:i,currentTarget:i,preventDefault:e.noop}))},_findActive:function(t){return t===!1?e():this.tabs.eq(t)},_getIndex:function(e){return"string"==typeof e&&(e=this.anchors.index(this.anchors.filter("[href$='"+e+"']"))),e},_destroy:function(){this.xhr&&this.xhr.abort(),this.element.removeClass("ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible"),this.tablist.removeClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").removeAttr("role"),this.anchors.removeClass("ui-tabs-anchor").removeAttr("role").removeAttr("tabIndex").removeUniqueId(),this.tablist.unbind(this.eventNamespace),this.tabs.add(this.panels).each(function(){e.data(this,"ui-tabs-destroy")?e(this).remove():e(this).removeClass("ui-state-default ui-state-active ui-state-disabled ui-corner-top ui-corner-bottom ui-widget-content ui-tabs-active ui-tabs-panel").removeAttr("tabIndex").removeAttr("aria-live").removeAttr("aria-busy").removeAttr("aria-selected").removeAttr("aria-labelledby").removeAttr("aria-hidden").removeAttr("aria-expanded").removeAttr("role")}),this.tabs.each(function(){var t=e(this),i=t.data("ui-tabs-aria-controls");i?t.attr("aria-controls",i).removeData("ui-tabs-aria-controls"):t.removeAttr("aria-controls")}),this.panels.show(),"content"!==this.options.heightStyle&&this.panels.css("height","")},enable:function(t){var i=this.options.disabled;i!==!1&&(void 0===t?i=!1:(t=this._getIndex(t),i=e.isArray(i)?e.map(i,function(e){return e!==t?e:null}):e.map(this.tabs,function(e,i){return i!==t?i:null})),this._setupDisabled(i))},disable:function(t){var i=this.options.disabled;if(i!==!0){if(void 0===t)i=!0;else{if(t=this._getIndex(t),-1!==e.inArray(t,i))return;i=e.isArray(i)?e.merge([t],i).sort():[t]}this._setupDisabled(i)}},load:function(t,i){t=this._getIndex(t);var s=this,n=this.tabs.eq(t),a=n.find(".ui-tabs-anchor"),o=this._getPanelForTab(n),r={tab:n,panel:o},h=function(e,t){"abort"===t&&s.panels.stop(!1,!0),n.removeClass("ui-tabs-loading"),o.removeAttr("aria-busy"),e===s.xhr&&delete s.xhr};this._isLocal(a[0])||(this.xhr=e.ajax(this._ajaxSettings(a,i,r)),this.xhr&&"canceled"!==this.xhr.statusText&&(n.addClass("ui-tabs-loading"),o.attr("aria-busy","true"),this.xhr.done(function(e,t,n){setTimeout(function(){o.html(e),s._trigger("load",i,r),h(n,t)},1)}).fail(function(e,t){setTimeout(function(){h(e,t)},1)})))},_ajaxSettings:function(t,i,s){var n=this;return{url:t.attr("href"),beforeSend:function(t,a){return n._trigger("beforeLoad",i,e.extend({jqXHR:t,ajaxSettings:a},s))}}},_getPanelForTab:function(t){var i=e(t).attr("aria-controls");return this.element.find(this._sanitizeSelector("#"+i))}}),e.widget("ui.tooltip",{version:"1.11.4",options:{content:function(){var t=e(this).attr("title")||"";return e("<a>").text(t).html()},hide:!0,items:"[title]:not([disabled])",position:{my:"left top+15",at:"left bottom",collision:"flipfit flip"},show:!0,tooltipClass:null,track:!1,close:null,open:null},_addDescribedBy:function(t,i){var s=(t.attr("aria-describedby")||"").split(/\s+/);s.push(i),t.data("ui-tooltip-id",i).attr("aria-describedby",e.trim(s.join(" ")))},_removeDescribedBy:function(t){var i=t.data("ui-tooltip-id"),s=(t.attr("aria-describedby")||"").split(/\s+/),n=e.inArray(i,s);-1!==n&&s.splice(n,1),t.removeData("ui-tooltip-id"),s=e.trim(s.join(" ")),s?t.attr("aria-describedby",s):t.removeAttr("aria-describedby")},_create:function(){this._on({mouseover:"open",focusin:"open"}),this.tooltips={},this.parents={},this.options.disabled&&this._disable(),this.liveRegion=e("<div>").attr({role:"log","aria-live":"assertive","aria-relevant":"additions"}).addClass("ui-helper-hidden-accessible").appendTo(this.document[0].body)},_setOption:function(t,i){var s=this;return"disabled"===t?(this[i?"_disable":"_enable"](),this.options[t]=i,void 0):(this._super(t,i),"content"===t&&e.each(this.tooltips,function(e,t){s._updateContent(t.element)}),void 0)},_disable:function(){var t=this;e.each(this.tooltips,function(i,s){var n=e.Event("blur");n.target=n.currentTarget=s.element[0],t.close(n,!0)}),this.element.find(this.options.items).addBack().each(function(){var t=e(this);t.is("[title]")&&t.data("ui-tooltip-title",t.attr("title")).removeAttr("title")})},_enable:function(){this.element.find(this.options.items).addBack().each(function(){var t=e(this);t.data("ui-tooltip-title")&&t.attr("title",t.data("ui-tooltip-title"))})},open:function(t){var i=this,s=e(t?t.target:this.element).closest(this.options.items);s.length&&!s.data("ui-tooltip-id")&&(s.attr("title")&&s.data("ui-tooltip-title",s.attr("title")),s.data("ui-tooltip-open",!0),t&&"mouseover"===t.type&&s.parents().each(function(){var t,s=e(this);s.data("ui-tooltip-open")&&(t=e.Event("blur"),t.target=t.currentTarget=this,i.close(t,!0)),s.attr("title")&&(s.uniqueId(),i.parents[this.id]={element:this,title:s.attr("title")},s.attr("title",""))}),this._registerCloseHandlers(t,s),this._updateContent(s,t))},_updateContent:function(e,t){var i,s=this.options.content,n=this,a=t?t.type:null;return"string"==typeof s?this._open(t,e,s):(i=s.call(e[0],function(i){n._delay(function(){e.data("ui-tooltip-open")&&(t&&(t.type=a),this._open(t,e,i))})}),i&&this._open(t,e,i),void 0)},_open:function(t,i,s){function n(e){l.of=e,o.is(":hidden")||o.position(l)}var a,o,r,h,l=e.extend({},this.options.position);if(s){if(a=this._find(i))return a.tooltip.find(".ui-tooltip-content").html(s),void 0;i.is("[title]")&&(t&&"mouseover"===t.type?i.attr("title",""):i.removeAttr("title")),a=this._tooltip(i),o=a.tooltip,this._addDescribedBy(i,o.attr("id")),o.find(".ui-tooltip-content").html(s),this.liveRegion.children().hide(),s.clone?(h=s.clone(),h.removeAttr("id").find("[id]").removeAttr("id")):h=s,e("<div>").html(h).appendTo(this.liveRegion),this.options.track&&t&&/^mouse/.test(t.type)?(this._on(this.document,{mousemove:n}),n(t)):o.position(e.extend({of:i},this.options.position)),o.hide(),this._show(o,this.options.show),this.options.show&&this.options.show.delay&&(r=this.delayedShow=setInterval(function(){o.is(":visible")&&(n(l.of),clearInterval(r))},e.fx.interval)),this._trigger("open",t,{tooltip:o})}},_registerCloseHandlers:function(t,i){var s={keyup:function(t){if(t.keyCode===e.ui.keyCode.ESCAPE){var s=e.Event(t);s.currentTarget=i[0],this.close(s,!0)}}};i[0]!==this.element[0]&&(s.remove=function(){this._removeTooltip(this._find(i).tooltip)}),t&&"mouseover"!==t.type||(s.mouseleave="close"),t&&"focusin"!==t.type||(s.focusout="close"),this._on(!0,i,s)},close:function(t){var i,s=this,n=e(t?t.currentTarget:this.element),a=this._find(n);return a?(i=a.tooltip,a.closing||(clearInterval(this.delayedShow),n.data("ui-tooltip-title")&&!n.attr("title")&&n.attr("title",n.data("ui-tooltip-title")),this._removeDescribedBy(n),a.hiding=!0,i.stop(!0),this._hide(i,this.options.hide,function(){s._removeTooltip(e(this))}),n.removeData("ui-tooltip-open"),this._off(n,"mouseleave focusout keyup"),n[0]!==this.element[0]&&this._off(n,"remove"),this._off(this.document,"mousemove"),t&&"mouseleave"===t.type&&e.each(this.parents,function(t,i){e(i.element).attr("title",i.title),delete s.parents[t]}),a.closing=!0,this._trigger("close",t,{tooltip:i}),a.hiding||(a.closing=!1)),void 0):(n.removeData("ui-tooltip-open"),void 0)},_tooltip:function(t){var i=e("<div>").attr("role","tooltip").addClass("ui-tooltip ui-widget ui-corner-all ui-widget-content "+(this.options.tooltipClass||"")),s=i.uniqueId().attr("id");return e("<div>").addClass("ui-tooltip-content").appendTo(i),i.appendTo(this.document[0].body),this.tooltips[s]={element:t,tooltip:i}},_find:function(e){var t=e.data("ui-tooltip-id");return t?this.tooltips[t]:null},_removeTooltip:function(e){e.remove(),delete this.tooltips[e.attr("id")]},_destroy:function(){var t=this;e.each(this.tooltips,function(i,s){var n=e.Event("blur"),a=s.element;n.target=n.currentTarget=a[0],t.close(n,!0),e("#"+i).remove(),a.data("ui-tooltip-title")&&(a.attr("title")||a.attr("title",a.data("ui-tooltip-title")),a.removeData("ui-tooltip-title"))}),this.liveRegion.remove()}})});
o3v = {};
// gl-matrix 1.0.0 - https://github.com/toji/gl-matrix/blob/master/LICENSE.md
var MatrixArray=typeof Float32Array!=="undefined"?Float32Array:Array,glMatrixArrayType=MatrixArray,vec3={},mat3={},mat4={},quat4={};vec3.create=function(a){var b=new MatrixArray(3);a&&(b[0]=a[0],b[1]=a[1],b[2]=a[2]);return b};vec3.set=function(a,b){b[0]=a[0];b[1]=a[1];b[2]=a[2];return b};vec3.add=function(a,b,c){if(!c||a===c)return a[0]+=b[0],a[1]+=b[1],a[2]+=b[2],a;c[0]=a[0]+b[0];c[1]=a[1]+b[1];c[2]=a[2]+b[2];return c};
vec3.subtract=function(a,b,c){if(!c||a===c)return a[0]-=b[0],a[1]-=b[1],a[2]-=b[2],a;c[0]=a[0]-b[0];c[1]=a[1]-b[1];c[2]=a[2]-b[2];return c};vec3.negate=function(a,b){b||(b=a);b[0]=-a[0];b[1]=-a[1];b[2]=-a[2];return b};vec3.scale=function(a,b,c){if(!c||a===c)return a[0]*=b,a[1]*=b,a[2]*=b,a;c[0]=a[0]*b;c[1]=a[1]*b;c[2]=a[2]*b;return c};
vec3.normalize=function(a,b){b||(b=a);var c=a[0],d=a[1],e=a[2],g=Math.sqrt(c*c+d*d+e*e);if(g){if(g===1)return b[0]=c,b[1]=d,b[2]=e,b}else return b[0]=0,b[1]=0,b[2]=0,b;g=1/g;b[0]=c*g;b[1]=d*g;b[2]=e*g;return b};vec3.cross=function(a,b,c){c||(c=a);var d=a[0],e=a[1],a=a[2],g=b[0],f=b[1],b=b[2];c[0]=e*b-a*f;c[1]=a*g-d*b;c[2]=d*f-e*g;return c};vec3.length=function(a){var b=a[0],c=a[1],a=a[2];return Math.sqrt(b*b+c*c+a*a)};vec3.dot=function(a,b){return a[0]*b[0]+a[1]*b[1]+a[2]*b[2]};
vec3.direction=function(a,b,c){c||(c=a);var d=a[0]-b[0],e=a[1]-b[1],a=a[2]-b[2],b=Math.sqrt(d*d+e*e+a*a);if(!b)return c[0]=0,c[1]=0,c[2]=0,c;b=1/b;c[0]=d*b;c[1]=e*b;c[2]=a*b;return c};vec3.lerp=function(a,b,c,d){d||(d=a);d[0]=a[0]+c*(b[0]-a[0]);d[1]=a[1]+c*(b[1]-a[1]);d[2]=a[2]+c*(b[2]-a[2]);return d};vec3.str=function(a){return"["+a[0]+", "+a[1]+", "+a[2]+"]"};
mat3.create=function(a){var b=new MatrixArray(9);a&&(b[0]=a[0],b[1]=a[1],b[2]=a[2],b[3]=a[3],b[4]=a[4],b[5]=a[5],b[6]=a[6],b[7]=a[7],b[8]=a[8]);return b};mat3.set=function(a,b){b[0]=a[0];b[1]=a[1];b[2]=a[2];b[3]=a[3];b[4]=a[4];b[5]=a[5];b[6]=a[6];b[7]=a[7];b[8]=a[8];return b};mat3.identity=function(a){a[0]=1;a[1]=0;a[2]=0;a[3]=0;a[4]=1;a[5]=0;a[6]=0;a[7]=0;a[8]=1;return a};
mat3.transpose=function(a,b){if(!b||a===b){var c=a[1],d=a[2],e=a[5];a[1]=a[3];a[2]=a[6];a[3]=c;a[5]=a[7];a[6]=d;a[7]=e;return a}b[0]=a[0];b[1]=a[3];b[2]=a[6];b[3]=a[1];b[4]=a[4];b[5]=a[7];b[6]=a[2];b[7]=a[5];b[8]=a[8];return b};mat3.toMat4=function(a,b){b||(b=mat4.create());b[15]=1;b[14]=0;b[13]=0;b[12]=0;b[11]=0;b[10]=a[8];b[9]=a[7];b[8]=a[6];b[7]=0;b[6]=a[5];b[5]=a[4];b[4]=a[3];b[3]=0;b[2]=a[2];b[1]=a[1];b[0]=a[0];return b};
mat3.str=function(a){return"["+a[0]+", "+a[1]+", "+a[2]+", "+a[3]+", "+a[4]+", "+a[5]+", "+a[6]+", "+a[7]+", "+a[8]+"]"};mat4.create=function(a){var b=new MatrixArray(16);a&&(b[0]=a[0],b[1]=a[1],b[2]=a[2],b[3]=a[3],b[4]=a[4],b[5]=a[5],b[6]=a[6],b[7]=a[7],b[8]=a[8],b[9]=a[9],b[10]=a[10],b[11]=a[11],b[12]=a[12],b[13]=a[13],b[14]=a[14],b[15]=a[15]);return b};
mat4.set=function(a,b){b[0]=a[0];b[1]=a[1];b[2]=a[2];b[3]=a[3];b[4]=a[4];b[5]=a[5];b[6]=a[6];b[7]=a[7];b[8]=a[8];b[9]=a[9];b[10]=a[10];b[11]=a[11];b[12]=a[12];b[13]=a[13];b[14]=a[14];b[15]=a[15];return b};mat4.identity=function(a){a[0]=1;a[1]=0;a[2]=0;a[3]=0;a[4]=0;a[5]=1;a[6]=0;a[7]=0;a[8]=0;a[9]=0;a[10]=1;a[11]=0;a[12]=0;a[13]=0;a[14]=0;a[15]=1;return a};
mat4.transpose=function(a,b){if(!b||a===b){var c=a[1],d=a[2],e=a[3],g=a[6],f=a[7],h=a[11];a[1]=a[4];a[2]=a[8];a[3]=a[12];a[4]=c;a[6]=a[9];a[7]=a[13];a[8]=d;a[9]=g;a[11]=a[14];a[12]=e;a[13]=f;a[14]=h;return a}b[0]=a[0];b[1]=a[4];b[2]=a[8];b[3]=a[12];b[4]=a[1];b[5]=a[5];b[6]=a[9];b[7]=a[13];b[8]=a[2];b[9]=a[6];b[10]=a[10];b[11]=a[14];b[12]=a[3];b[13]=a[7];b[14]=a[11];b[15]=a[15];return b};
mat4.determinant=function(a){var b=a[0],c=a[1],d=a[2],e=a[3],g=a[4],f=a[5],h=a[6],j=a[7],i=a[8],k=a[9],l=a[10],n=a[11],o=a[12],m=a[13],p=a[14],a=a[15];return o*k*h*e-i*m*h*e-o*f*l*e+g*m*l*e+i*f*p*e-g*k*p*e-o*k*d*j+i*m*d*j+o*c*l*j-b*m*l*j-i*c*p*j+b*k*p*j+o*f*d*n-g*m*d*n-o*c*h*n+b*m*h*n+g*c*p*n-b*f*p*n-i*f*d*a+g*k*d*a+i*c*h*a-b*k*h*a-g*c*l*a+b*f*l*a};
mat4.inverse=function(a,b){b||(b=a);var c=a[0],d=a[1],e=a[2],g=a[3],f=a[4],h=a[5],j=a[6],i=a[7],k=a[8],l=a[9],n=a[10],o=a[11],m=a[12],p=a[13],r=a[14],s=a[15],A=c*h-d*f,B=c*j-e*f,t=c*i-g*f,u=d*j-e*h,v=d*i-g*h,w=e*i-g*j,x=k*p-l*m,y=k*r-n*m,z=k*s-o*m,C=l*r-n*p,D=l*s-o*p,E=n*s-o*r,q=1/(A*E-B*D+t*C+u*z-v*y+w*x);b[0]=(h*E-j*D+i*C)*q;b[1]=(-d*E+e*D-g*C)*q;b[2]=(p*w-r*v+s*u)*q;b[3]=(-l*w+n*v-o*u)*q;b[4]=(-f*E+j*z-i*y)*q;b[5]=(c*E-e*z+g*y)*q;b[6]=(-m*w+r*t-s*B)*q;b[7]=(k*w-n*t+o*B)*q;b[8]=(f*D-h*z+i*x)*q;
b[9]=(-c*D+d*z-g*x)*q;b[10]=(m*v-p*t+s*A)*q;b[11]=(-k*v+l*t-o*A)*q;b[12]=(-f*C+h*y-j*x)*q;b[13]=(c*C-d*y+e*x)*q;b[14]=(-m*u+p*B-r*A)*q;b[15]=(k*u-l*B+n*A)*q;return b};mat4.toRotationMat=function(a,b){b||(b=mat4.create());b[0]=a[0];b[1]=a[1];b[2]=a[2];b[3]=a[3];b[4]=a[4];b[5]=a[5];b[6]=a[6];b[7]=a[7];b[8]=a[8];b[9]=a[9];b[10]=a[10];b[11]=a[11];b[12]=0;b[13]=0;b[14]=0;b[15]=1;return b};
mat4.toMat3=function(a,b){b||(b=mat3.create());b[0]=a[0];b[1]=a[1];b[2]=a[2];b[3]=a[4];b[4]=a[5];b[5]=a[6];b[6]=a[8];b[7]=a[9];b[8]=a[10];return b};mat4.toInverseMat3=function(a,b){var c=a[0],d=a[1],e=a[2],g=a[4],f=a[5],h=a[6],j=a[8],i=a[9],k=a[10],l=k*f-h*i,n=-k*g+h*j,o=i*g-f*j,m=c*l+d*n+e*o;if(!m)return null;m=1/m;b||(b=mat3.create());b[0]=l*m;b[1]=(-k*d+e*i)*m;b[2]=(h*d-e*f)*m;b[3]=n*m;b[4]=(k*c-e*j)*m;b[5]=(-h*c+e*g)*m;b[6]=o*m;b[7]=(-i*c+d*j)*m;b[8]=(f*c-d*g)*m;return b};
mat4.multiply=function(a,b,c){c||(c=a);var d=a[0],e=a[1],g=a[2],f=a[3],h=a[4],j=a[5],i=a[6],k=a[7],l=a[8],n=a[9],o=a[10],m=a[11],p=a[12],r=a[13],s=a[14],a=a[15],A=b[0],B=b[1],t=b[2],u=b[3],v=b[4],w=b[5],x=b[6],y=b[7],z=b[8],C=b[9],D=b[10],E=b[11],q=b[12],F=b[13],G=b[14],b=b[15];c[0]=A*d+B*h+t*l+u*p;c[1]=A*e+B*j+t*n+u*r;c[2]=A*g+B*i+t*o+u*s;c[3]=A*f+B*k+t*m+u*a;c[4]=v*d+w*h+x*l+y*p;c[5]=v*e+w*j+x*n+y*r;c[6]=v*g+w*i+x*o+y*s;c[7]=v*f+w*k+x*m+y*a;c[8]=z*d+C*h+D*l+E*p;c[9]=z*e+C*j+D*n+E*r;c[10]=z*g+C*
i+D*o+E*s;c[11]=z*f+C*k+D*m+E*a;c[12]=q*d+F*h+G*l+b*p;c[13]=q*e+F*j+G*n+b*r;c[14]=q*g+F*i+G*o+b*s;c[15]=q*f+F*k+G*m+b*a;return c};mat4.multiplyVec3=function(a,b,c){c||(c=b);var d=b[0],e=b[1],b=b[2];c[0]=a[0]*d+a[4]*e+a[8]*b+a[12];c[1]=a[1]*d+a[5]*e+a[9]*b+a[13];c[2]=a[2]*d+a[6]*e+a[10]*b+a[14];return c};
mat4.multiplyVec4=function(a,b,c){c||(c=b);var d=b[0],e=b[1],g=b[2],b=b[3];c[0]=a[0]*d+a[4]*e+a[8]*g+a[12]*b;c[1]=a[1]*d+a[5]*e+a[9]*g+a[13]*b;c[2]=a[2]*d+a[6]*e+a[10]*g+a[14]*b;c[3]=a[3]*d+a[7]*e+a[11]*g+a[15]*b;return c};
mat4.translate=function(a,b,c){var d=b[0],e=b[1],b=b[2],g,f,h,j,i,k,l,n,o,m,p,r;if(!c||a===c)return a[12]=a[0]*d+a[4]*e+a[8]*b+a[12],a[13]=a[1]*d+a[5]*e+a[9]*b+a[13],a[14]=a[2]*d+a[6]*e+a[10]*b+a[14],a[15]=a[3]*d+a[7]*e+a[11]*b+a[15],a;g=a[0];f=a[1];h=a[2];j=a[3];i=a[4];k=a[5];l=a[6];n=a[7];o=a[8];m=a[9];p=a[10];r=a[11];c[0]=g;c[1]=f;c[2]=h;c[3]=j;c[4]=i;c[5]=k;c[6]=l;c[7]=n;c[8]=o;c[9]=m;c[10]=p;c[11]=r;c[12]=g*d+i*e+o*b+a[12];c[13]=f*d+k*e+m*b+a[13];c[14]=h*d+l*e+p*b+a[14];c[15]=j*d+n*e+r*b+a[15];
return c};mat4.scale=function(a,b,c){var d=b[0],e=b[1],b=b[2];if(!c||a===c)return a[0]*=d,a[1]*=d,a[2]*=d,a[3]*=d,a[4]*=e,a[5]*=e,a[6]*=e,a[7]*=e,a[8]*=b,a[9]*=b,a[10]*=b,a[11]*=b,a;c[0]=a[0]*d;c[1]=a[1]*d;c[2]=a[2]*d;c[3]=a[3]*d;c[4]=a[4]*e;c[5]=a[5]*e;c[6]=a[6]*e;c[7]=a[7]*e;c[8]=a[8]*b;c[9]=a[9]*b;c[10]=a[10]*b;c[11]=a[11]*b;c[12]=a[12];c[13]=a[13];c[14]=a[14];c[15]=a[15];return c};
mat4.rotate=function(a,b,c,d){var e=c[0],g=c[1],c=c[2],f=Math.sqrt(e*e+g*g+c*c),h,j,i,k,l,n,o,m,p,r,s,A,B,t,u,v,w,x,y,z;if(!f)return null;f!==1&&(f=1/f,e*=f,g*=f,c*=f);h=Math.sin(b);j=Math.cos(b);i=1-j;b=a[0];f=a[1];k=a[2];l=a[3];n=a[4];o=a[5];m=a[6];p=a[7];r=a[8];s=a[9];A=a[10];B=a[11];t=e*e*i+j;u=g*e*i+c*h;v=c*e*i-g*h;w=e*g*i-c*h;x=g*g*i+j;y=c*g*i+e*h;z=e*c*i+g*h;e=g*c*i-e*h;g=c*c*i+j;d?a!==d&&(d[12]=a[12],d[13]=a[13],d[14]=a[14],d[15]=a[15]):d=a;d[0]=b*t+n*u+r*v;d[1]=f*t+o*u+s*v;d[2]=k*t+m*u+A*
v;d[3]=l*t+p*u+B*v;d[4]=b*w+n*x+r*y;d[5]=f*w+o*x+s*y;d[6]=k*w+m*x+A*y;d[7]=l*w+p*x+B*y;d[8]=b*z+n*e+r*g;d[9]=f*z+o*e+s*g;d[10]=k*z+m*e+A*g;d[11]=l*z+p*e+B*g;return d};mat4.rotateX=function(a,b,c){var d=Math.sin(b),b=Math.cos(b),e=a[4],g=a[5],f=a[6],h=a[7],j=a[8],i=a[9],k=a[10],l=a[11];c?a!==c&&(c[0]=a[0],c[1]=a[1],c[2]=a[2],c[3]=a[3],c[12]=a[12],c[13]=a[13],c[14]=a[14],c[15]=a[15]):c=a;c[4]=e*b+j*d;c[5]=g*b+i*d;c[6]=f*b+k*d;c[7]=h*b+l*d;c[8]=e*-d+j*b;c[9]=g*-d+i*b;c[10]=f*-d+k*b;c[11]=h*-d+l*b;return c};
mat4.rotateY=function(a,b,c){var d=Math.sin(b),b=Math.cos(b),e=a[0],g=a[1],f=a[2],h=a[3],j=a[8],i=a[9],k=a[10],l=a[11];c?a!==c&&(c[4]=a[4],c[5]=a[5],c[6]=a[6],c[7]=a[7],c[12]=a[12],c[13]=a[13],c[14]=a[14],c[15]=a[15]):c=a;c[0]=e*b+j*-d;c[1]=g*b+i*-d;c[2]=f*b+k*-d;c[3]=h*b+l*-d;c[8]=e*d+j*b;c[9]=g*d+i*b;c[10]=f*d+k*b;c[11]=h*d+l*b;return c};
mat4.rotateZ=function(a,b,c){var d=Math.sin(b),b=Math.cos(b),e=a[0],g=a[1],f=a[2],h=a[3],j=a[4],i=a[5],k=a[6],l=a[7];c?a!==c&&(c[8]=a[8],c[9]=a[9],c[10]=a[10],c[11]=a[11],c[12]=a[12],c[13]=a[13],c[14]=a[14],c[15]=a[15]):c=a;c[0]=e*b+j*d;c[1]=g*b+i*d;c[2]=f*b+k*d;c[3]=h*b+l*d;c[4]=e*-d+j*b;c[5]=g*-d+i*b;c[6]=f*-d+k*b;c[7]=h*-d+l*b;return c};
mat4.frustum=function(a,b,c,d,e,g,f){f||(f=mat4.create());var h=b-a,j=d-c,i=g-e;f[0]=e*2/h;f[1]=0;f[2]=0;f[3]=0;f[4]=0;f[5]=e*2/j;f[6]=0;f[7]=0;f[8]=(b+a)/h;f[9]=(d+c)/j;f[10]=-(g+e)/i;f[11]=-1;f[12]=0;f[13]=0;f[14]=-(g*e*2)/i;f[15]=0;return f};mat4.perspective=function(a,b,c,d,e){a=c*Math.tan(a*Math.PI/360);b*=a;return mat4.frustum(-b,b,-a,a,c,d,e)};
mat4.ortho=function(a,b,c,d,e,g,f){f||(f=mat4.create());var h=b-a,j=d-c,i=g-e;f[0]=2/h;f[1]=0;f[2]=0;f[3]=0;f[4]=0;f[5]=2/j;f[6]=0;f[7]=0;f[8]=0;f[9]=0;f[10]=-2/i;f[11]=0;f[12]=-(a+b)/h;f[13]=-(d+c)/j;f[14]=-(g+e)/i;f[15]=1;return f};
mat4.lookAt=function(a,b,c,d){d||(d=mat4.create());var e,g,f,h,j,i,k,l,n=a[0],o=a[1],a=a[2];g=c[0];f=c[1];e=c[2];c=b[1];i=b[2];if(n===b[0]&&o===c&&a===i)return mat4.identity(d);c=n-b[0];i=o-b[1];k=a-b[2];l=1/Math.sqrt(c*c+i*i+k*k);c*=l;i*=l;k*=l;b=f*k-e*i;e=e*c-g*k;g=g*i-f*c;(l=Math.sqrt(b*b+e*e+g*g))?(l=1/l,b*=l,e*=l,g*=l):g=e=b=0;f=i*g-k*e;h=k*b-c*g;j=c*e-i*b;(l=Math.sqrt(f*f+h*h+j*j))?(l=1/l,f*=l,h*=l,j*=l):j=h=f=0;d[0]=b;d[1]=f;d[2]=c;d[3]=0;d[4]=e;d[5]=h;d[6]=i;d[7]=0;d[8]=g;d[9]=j;d[10]=k;d[11]=
0;d[12]=-(b*n+e*o+g*a);d[13]=-(f*n+h*o+j*a);d[14]=-(c*n+i*o+k*a);d[15]=1;return d};mat4.str=function(a){return"["+a[0]+", "+a[1]+", "+a[2]+", "+a[3]+", "+a[4]+", "+a[5]+", "+a[6]+", "+a[7]+", "+a[8]+", "+a[9]+", "+a[10]+", "+a[11]+", "+a[12]+", "+a[13]+", "+a[14]+", "+a[15]+"]"};quat4.create=function(a){var b=new MatrixArray(4);a&&(b[0]=a[0],b[1]=a[1],b[2]=a[2],b[3]=a[3]);return b};quat4.set=function(a,b){b[0]=a[0];b[1]=a[1];b[2]=a[2];b[3]=a[3];return b};
quat4.calculateW=function(a,b){var c=a[0],d=a[1],e=a[2];if(!b||a===b)return a[3]=-Math.sqrt(Math.abs(1-c*c-d*d-e*e)),a;b[0]=c;b[1]=d;b[2]=e;b[3]=-Math.sqrt(Math.abs(1-c*c-d*d-e*e));return b};quat4.inverse=function(a,b){if(!b||a===b)return a[0]*=-1,a[1]*=-1,a[2]*=-1,a;b[0]=-a[0];b[1]=-a[1];b[2]=-a[2];b[3]=a[3];return b};quat4.length=function(a){var b=a[0],c=a[1],d=a[2],a=a[3];return Math.sqrt(b*b+c*c+d*d+a*a)};
quat4.normalize=function(a,b){b||(b=a);var c=a[0],d=a[1],e=a[2],g=a[3],f=Math.sqrt(c*c+d*d+e*e+g*g);if(f===0)return b[0]=0,b[1]=0,b[2]=0,b[3]=0,b;f=1/f;b[0]=c*f;b[1]=d*f;b[2]=e*f;b[3]=g*f;return b};quat4.multiply=function(a,b,c){c||(c=a);var d=a[0],e=a[1],g=a[2],a=a[3],f=b[0],h=b[1],j=b[2],b=b[3];c[0]=d*b+a*f+e*j-g*h;c[1]=e*b+a*h+g*f-d*j;c[2]=g*b+a*j+d*h-e*f;c[3]=a*b-d*f-e*h-g*j;return c};
quat4.multiplyVec3=function(a,b,c){c||(c=b);var d=b[0],e=b[1],g=b[2],b=a[0],f=a[1],h=a[2],a=a[3],j=a*d+f*g-h*e,i=a*e+h*d-b*g,k=a*g+b*e-f*d,d=-b*d-f*e-h*g;c[0]=j*a+d*-b+i*-h-k*-f;c[1]=i*a+d*-f+k*-b-j*-h;c[2]=k*a+d*-h+j*-f-i*-b;return c};quat4.toMat3=function(a,b){b||(b=mat3.create());var c=a[0],d=a[1],e=a[2],g=a[3],f=c+c,h=d+d,j=e+e,i=c*f,k=c*h;c*=j;var l=d*h;d*=j;e*=j;f*=g;h*=g;g*=j;b[0]=1-(l+e);b[1]=k+g;b[2]=c-h;b[3]=k-g;b[4]=1-(i+e);b[5]=d+f;b[6]=c+h;b[7]=d-f;b[8]=1-(i+l);return b};
quat4.toMat4=function(a,b){b||(b=mat4.create());var c=a[0],d=a[1],e=a[2],g=a[3],f=c+c,h=d+d,j=e+e,i=c*f,k=c*h;c*=j;var l=d*h;d*=j;e*=j;f*=g;h*=g;g*=j;b[0]=1-(l+e);b[1]=k+g;b[2]=c-h;b[3]=0;b[4]=k-g;b[5]=1-(i+e);b[6]=d+f;b[7]=0;b[8]=c+h;b[9]=d-f;b[10]=1-(i+l);b[11]=0;b[12]=0;b[13]=0;b[14]=0;b[15]=1;return b};
quat4.slerp=function(a,b,c,d){d||(d=a);var e=a[0]*b[0]+a[1]*b[1]+a[2]*b[2]+a[3]*b[3],g,f;if(Math.abs(e)>=1)return d!==a&&(d[0]=a[0],d[1]=a[1],d[2]=a[2],d[3]=a[3]),d;g=Math.acos(e);f=Math.sqrt(1-e*e);if(Math.abs(f)<0.001)return d[0]=a[0]*0.5+b[0]*0.5,d[1]=a[1]*0.5+b[1]*0.5,d[2]=a[2]*0.5+b[2]*0.5,d[3]=a[3]*0.5+b[3]*0.5,d;e=Math.sin((1-c)*g)/f;c=Math.sin(c*g)/f;d[0]=a[0]*e+b[0]*c;d[1]=a[1]*e+b[1]*c;d[2]=a[2]*e+b[2]*c;d[3]=a[3]*e+b[3]*c;return d};
quat4.str=function(a){return"["+a[0]+", "+a[1]+", "+a[2]+", "+a[3]+"]"};'use strict';

// Utility wrapper around WebGL. Perserves WebGL semantics, so it
// isn't too object-oriented.

function createContextFromCanvas(canvas) {
  var context = canvas.getContext('experimental-webgl');
  // Automatically use debug wrapper context, if available.
  return typeof WebGLDebugUtils !== 'undefined' ?
    WebGLDebugUtils.makeDebugContext(context, function(err, funcName, args) {
      throw WebGLDebugUtils.glEnumToString(err) + " by " + funcName;
    }) : context;
};

function Shader(gl, source, shaderType) {
  this.gl_ = gl;
  this.handle_ = gl.createShader(shaderType);
  gl.shaderSource(this.handle_, source);
  gl.compileShader(this.handle_);
  if (!gl.getShaderParameter(this.handle_, gl.COMPILE_STATUS)) {
    throw this.info();
  }
}

Shader.prototype.info = function() {
  return this.gl_.getShaderInfoLog(this.handle_);
}

Shader.prototype.type = function() {
  return this.gl_.getShaderParameter(this.handle_, this.gl_.SHADER_TYPE);
}

function vertexShader(gl, source) {
  return new Shader(gl, source, gl.VERTEX_SHADER);
}

function fragmentShader(gl, source) {
  return new Shader(gl, source, gl.FRAGMENT_SHADER);
}

function Program(gl, shaders) {
  this.gl_ = gl;
  this.handle_ = gl.createProgram();
  shaders.forEach(function(shader) {
    gl.attachShader(this.handle_, shader.handle_);
  }, this);
  gl.linkProgram(this.handle_);
  if (!gl.getProgramParameter(this.handle_, gl.LINK_STATUS)) {
    throw this.info();
  }

  var numActiveAttribs = gl.getProgramParameter(this.handle_,
                                                gl.ACTIVE_ATTRIBUTES);
  this.attribs = [];
  this.set_attrib = {};
  for (var i = 0; i < numActiveAttribs; i++) {
    var active_attrib = gl.getActiveAttrib(this.handle_, i);
    var loc = gl.getAttribLocation(this.handle_, active_attrib.name);
    this.attribs[loc] = active_attrib;
    this.set_attrib[active_attrib.name] = loc;
  }

  var numActiveUniforms = gl.getProgramParameter(this.handle_,
                                                 gl.ACTIVE_UNIFORMS);
  this.uniforms = [];
  this.set_uniform = {};
  for (var j = 0; j < numActiveUniforms; j++) {
    var active_uniform = gl.getActiveUniform(this.handle_, j);
    this.uniforms[j] = active_uniform;
    this.set_uniform[active_uniform.name] = gl.getUniformLocation(
      this.handle_, active_uniform.name);
  }

  this.enabledVertexAttribArrays_ = {};
};

Program.prototype.info = function() {
  return this.gl_.getProgramInfoLog(this.handle_);
};

Program.prototype.use = function() {
  this.gl_.useProgram(this.handle_);
};

Program.prototype.enableVertexAttribArrays = function(attribArrays) {
  for (var i = 0; i < attribArrays.length; ++i) {
    this.enabledVertexAttribArrays_[attribArrays[i]] = true;
    var loc = this.set_attrib[attribArrays[i]];
    if (loc !== undefined) {
      this.gl_.enableVertexAttribArray(loc);
    }
  }
};

Program.prototype.disableVertexAttribArrays = function(attribArrays) {
  for (var i = 0; i < attribArrays.length; ++i) {
    this.enabledVertexAttribArrays_[attribArrays[i]] = false;
    var loc = this.set_attrib[attribArrays[i]];
    if (loc !== undefined) {
      this.gl_.disableVertexAttribArray(loc);
    }
  }
};

Program.prototype.vertexAttribPointers = function(attribArrays) {
  // Only use the enabled ones.
  var numAttribs = attribArrays.length;
  for (var i = 0; i < numAttribs; ++i) {
    var params = attribArrays[i];
    var loc = this.set_attrib[params.name];
    if (this.enabledVertexAttribArrays_[params.name]) {
      var typeBytes = 4;  // TODO: 4 assumes gl.FLOAT, use params.type
      this.gl_.vertexAttribPointer(loc, params.size, this.gl_.FLOAT,
                                   !!params.normalized, typeBytes*params.stride,
                                   typeBytes*params.offset);
    }
  }
};

// TODO: seems like texture ought to be a class...

function textureFromArray(gl, width, height, array, opt_texture) {
  var opt_texture = opt_texture || gl.createTexture();
  gl.bindTexture(gl.TEXTURE_2D, opt_texture);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
  gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGB, width, height, 0,
                gl.RGB, gl.UNSIGNED_BYTE, array);
  return opt_texture;
}

function textureFromImage(gl, image, opt_texture) {
  // TODO: texture formats. Color, MIP-mapping, etc.
  opt_texture = opt_texture || gl.createTexture();
  gl.bindTexture(gl.TEXTURE_2D, opt_texture);
  gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGB, gl.RGB, gl.UNSIGNED_BYTE, image);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER,
                   gl.LINEAR_MIPMAP_LINEAR);
  gl.generateMipmap(gl.TEXTURE_2D);
  return opt_texture;
}

var TEXTURE_CACHE = {};

function textureFromUrl(gl, url, opt_callback) {
  var cached_texture = TEXTURE_CACHE[url];
  if (cached_texture) {
    return cached_texture;
  }

  var texture = gl.createTexture();
  var image = new Image;
  image.onload = function() {
    textureFromImage(gl, image, texture);
    opt_callback && opt_callback(gl, texture);
  };
  image.onerror = function() {
    textureFromArray(gl, 1, 1, new Uint8Array([255, 255, 255]), texture);
    opt_callback && opt_callback(gl, texture);
  };
  image.src = url;

  TEXTURE_CACHE[url] = texture;
  return texture;
}

function attribBufferData(gl, attribArray) {
  var attribBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, attribBuffer);
  gl.bufferData(gl.ARRAY_BUFFER, attribArray, gl.STATIC_DRAW);
  return attribBuffer;
}

function indexBufferData(gl, indexArray) {
  var indexBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer);
  gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, indexArray, gl.STATIC_DRAW);
  return indexBuffer;
}

function addToDisplayList(displayList, begin, end) {
  var back = displayList.length - 1;
  var lastEnd = displayList[back];
  if (begin === lastEnd) {
    displayList[back] = end;
  } else {
    displayList.push(begin, end);
  }
}

// TODO: names/lengths don't really belong here; they probably belong
// with the displayList stuff.
function Mesh(gl, attribArray, indexArray, attribArrays, texture,
              opt_names, opt_lengths, opt_bboxen, opt_startColorIndex) {
  this.gl_ = gl;
  this.attribArrays_ = attribArrays;  // TODO: rename to vertex format!
  this.numIndices_ = indexArray.length;
  this.texture_ = texture || null;

  if (opt_bboxen) {
    this.bboxen_ = attribBufferData(gl, opt_bboxen);
  }

  this.vbo_ = attribBufferData(gl, attribArray);
  this.ibo_ = indexBufferData(gl, indexArray);

  this.names_ = opt_names || [];
  this.lengths_ = opt_lengths || [];
  this.starts_ = [];  // TODO: typed array?

  var numLengths = this.lengths_.length;
  var start = 0;
  for (var i = 0; i < numLengths; ++i) {
    this.starts_[i] = start;
    start += this.lengths_[i];
  }

  if (opt_startColorIndex !== undefined) {
    // TODO(dkogan): Fix this array length calculating hack.
    var arrayLen = -1;
    for (var i = 0; i < numLengths; i++) {
      var startIndex = this.starts_[i];
      var length = this.lengths_[i];
      for (var j = startIndex; j < startIndex + length; j++) {
        if (indexArray[j] >= arrayLen) {
          arrayLen = indexArray[j] + 1;
        }
      }
    }

    var colorArray = new Float32Array(arrayLen);
    for (var i = 0; i < numLengths; i++) {
      var startIndex = this.starts_[i];
      var length = this.lengths_[i];
      for (var j = startIndex; j < startIndex + length; j++) {
        colorArray[indexArray[j]] = opt_startColorIndex + i;
      }
    }
    this.cbo_ = attribBufferData(gl, colorArray);
  }
}

Mesh.prototype.bind = function(program, opt_forId) {
  var gl = this.gl_;
  if (!opt_forId) {
    gl.bindTexture(gl.TEXTURE_2D, this.texture_);
  }

  gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.ibo_);
  gl.bindBuffer(gl.ARRAY_BUFFER, this.vbo_);

  program.vertexAttribPointers(this.attribArrays_);

  // TODO(wonchun): Do this the right way.
  if (opt_forId) {
    gl.bindBuffer(gl.ARRAY_BUFFER, this.cbo_);
    gl.vertexAttribPointer(program.set_attrib['a_colorIndex'],
                           1, gl.FLOAT, false, 4, 0);
  }
};

Mesh.prototype.draw = function(opt_length, opt_offset) {
  if (opt_length === 0) return;

  opt_length = opt_length || this.numIndices_;
  opt_offset = opt_offset || 0;
  var gl = this.gl_;
  gl.drawElements(gl.TRIANGLES, opt_length, gl.UNSIGNED_SHORT, 2*opt_offset);
};

Mesh.prototype.drawList = function(displayList) {
  var numDraws = displayList.length;
  for (var i = 0; i < numDraws; i += 2) {
    var drawStart = displayList[i];
    var drawLength = displayList[i+1] - drawStart;
    this.draw(drawLength, drawStart);
  }
};

Mesh.prototype.bindAndDraw = function(program, opt_forId) {
  this.bind(program, opt_forId);
  this.draw();
};
'use strict';

// Contains objects like:
// name: {
//   materials: { 'material_name': { ... } ... },
//   decodeParams: {
//     decodeOffsets: [ ... ],
//     decodeScales: [ ... ],
//   },
//   urls: {
//     'url': [
//       { material: 'material_name',
//         attribRange: [#, #],
//         indexRange: [#, #],
//         names: [ 'object names' ... ],
//         lengths: [#, #, # ... ]
//       }
//     ],
//     ...
//   }
// }
MODELS = {};

var DEFAULT_ATTRIB_ARRAYS = [
  { name: "a_position",
    size: 3,
    stride: 8,
    offset: 0
  },
  { name: "a_texcoord",
    size: 2,
    stride: 8,
    offset: 3
  },
  { name: "a_normal",
    size: 3,
    stride: 8,
    offset: 5
  },
  { name: "a_colorIndex",
    size: 1,
    stride: 1,
    offset: 0
  }
];

var BBOX_ATTRIB_ARRAYS = [
  { name: "a_position",
    size: 3,
    stride: 6,
    offset: 0
  },
  { name: "a_radius",
    size: 3,
    stride: 6,
    offset: 3
  }
];

var DEFAULT_DECODE_PARAMS = {
  decodeOffsets: [-4095, -4095, -4095, 0, 0, -511, -511, -511],
  decodeScales: [1/8191, 1/8191, 1/8191, 1/1023, 1/1023, 1/1023, 1/1023, 1/1023]
};

// TODO: will it be an optimization to specialize this method at
// runtime for different combinations of stride, decodeOffset and
// decodeScale?
function decompressAttribsInner_(str, inputStart, inputEnd,
                                 output, outputStart, stride,
                                 decodeOffset, decodeScale) {
  var prev = 0;
  for (var j = inputStart; j < inputEnd; j++) {
    var code = str.charCodeAt(j);
    prev += (code >> 1) ^ (-(code & 1));
    output[outputStart] = decodeScale * (prev + decodeOffset);
    outputStart += stride;
  }
}

function decompressIndices_(str, inputStart, numIndices,
                            output, outputStart) {
  var highest = 0;
  for (var i = 0; i < numIndices; i++) {
    var code = str.charCodeAt(inputStart++);
    output[outputStart++] = highest - code;
    if (code == 0) {
      highest++;
    }
  }
}

function decompressAABBs_(str, inputStart, numBBoxen,
                          decodeOffsets, decodeScales) {
  var numFloats = 6 * numBBoxen;
  var inputEnd = inputStart + numFloats;
  var bboxen = new Float32Array(numFloats);
  var outputStart = 0;
  for (var i = inputStart; i < inputEnd; i += 6) {
    var minX = str.charCodeAt(i + 0) + decodeOffsets[0];
    var minY = str.charCodeAt(i + 1) + decodeOffsets[1];
    var minZ = str.charCodeAt(i + 2) + decodeOffsets[2];
    var diaX = str.charCodeAt(i + 3) + 1;
    var diaY = str.charCodeAt(i + 4) + 1;
    var diaZ = str.charCodeAt(i + 5) + 1;
    bboxen[outputStart++] = decodeScales[0] * minX;
    bboxen[outputStart++] = decodeScales[1] * minY;
    bboxen[outputStart++] = decodeScales[2] * minZ;
    bboxen[outputStart++] = decodeScales[0] * (minX + diaX);
    bboxen[outputStart++] = decodeScales[1] * (minY + diaY);
    bboxen[outputStart++] = decodeScales[2] * (minZ + diaZ);
  }
  return bboxen;
}

function decompressMesh(str, meshParams, decodeParams, callback) {
  // Extract conversion parameters from attribArrays.
  var stride = decodeParams.decodeScales.length;
  var decodeOffsets = decodeParams.decodeOffsets;
  var decodeScales = decodeParams.decodeScales;
  var attribStart = meshParams.attribRange[0];
  var numVerts = meshParams.attribRange[1];

  // Decode attributes.
  var inputOffset = attribStart;
  var attribsOut = new Float32Array(stride * numVerts);
  for (var j = 0; j < stride; j++) {
    var end = inputOffset + numVerts;
    var decodeScale = decodeScales[j];
    if (decodeScale) {
      // Assume if decodeScale is never set, simply ignore the
      // attribute.
      decompressAttribsInner_(str, inputOffset, end,
                              attribsOut, j, stride,
                              decodeOffsets[j], decodeScale);
    }
    inputOffset = end;
  }

  var indexStart = meshParams.indexRange[0];
  var numIndices = 3*meshParams.indexRange[1];
  var indicesOut = new Uint16Array(numIndices);
  decompressIndices_(str, inputOffset, numIndices, indicesOut, 0);

  // Decode bboxen.
  var bboxen = undefined;
  var bboxOffset = meshParams.bboxes;
  if (bboxOffset) {
    bboxen = decompressAABBs_(str, bboxOffset, meshParams.names.length,
                              decodeOffsets, decodeScales);
  }
  callback(attribsOut, indicesOut, bboxen, meshParams);
}

function downloadMesh(path, meshEntry, decodeParams, callback) {
  var idx = 0;
  function onprogress(req, e) {
    while (idx < meshEntry.length) {
      var meshParams = meshEntry[idx];
      var meshEnd = meshParams.bboxes + 6*meshParams.names.length;
      if (req.responseText.length < meshEnd) break;

      decompressMesh(req.responseText, meshParams, decodeParams, callback);
      ++idx;
    }
  };
  getHttpRequest(path, function(req, e) {
    if (req.status === 200 || req.status === 0) {
      onprogress(req, e);
    }
    // TODO: handle errors.
  }, onprogress);
}

function downloadMeshes(path, meshUrlMap, decodeParams, callback) {
  for (var url in meshUrlMap) {
    var meshEntry = meshUrlMap[url];
    downloadMesh(path + url, meshEntry, decodeParams, callback);
  }
}

function downloadModel(path, model, partialCallback, fullCallback) {
  var model = MODELS[model];
  var pendingCount = 0;
  o3v.util.forEach(
      model.urls,
      function(meshEntry) {
        pendingCount += meshEntry.length;
      });
  var callback = function(attribs, indices, bboxen, meshEntiy) {
    if (partialCallback !== undefined) {
      partialCallback(attribs, indices, bboxen, meshEntiy);
    }
    pendingCount = pendingCount - 1;
    if (pendingCount == 0 && fullCallback !== undefined) {
      fullCallback();
    }
  };

  downloadMeshes(path, model.urls, model.decodeParams, callback);
}
'use strict';

/**
 * Computes a 4-by-4 camera look-at transformation. This is the
 * inverse of lookAt The transformation generated is an
 * orthogonal rotation matrix with translation component.
 * @param {(!tdl.fast.Vector3|!tdl.fast.Vector4)} eye The position
 *     of the eye.
 * @param {(!tdl.fast.Vector3|!tdl.fast.Vector4)} target The
 *     position meant to be viewed.
 * @param {(!tdl.fast.Vector3|!tdl.fast.Vector4)} up A vector
 *     pointing up.
 * @return {!tdl.fast.Matrix4} The camera look-at matrix.
 */
o3v.cameraLookAt = function(dst, eye, target, up) {
  var t0 = new Float32Array(3);
  var t1 = new Float32Array(3);
  var t2 = new Float32Array(3);

  var vz = o3v.normalize(t0, o3v.subVector(t0, eye, target));
  var vx = o3v.normalize(t1, o3v.cross(t1, up, vz));
  var vy = o3v.cross(t2, vz, vx);

  dst[ 0] = vx[0];
  dst[ 1] = vx[1];
  dst[ 2] = vx[2];
  dst[ 3] = 0;
  dst[ 4] = vy[0];
  dst[ 5] = vy[1];
  dst[ 6] = vy[2];
  dst[ 7] = 0;
  dst[ 8] = vz[0];
  dst[ 9] = vz[1];
  dst[10] = vz[2];
  dst[11] = 0;
  dst[12] = eye[0];
  dst[13] = eye[1];
  dst[14] = eye[2];
  dst[15] = 1;

  return dst;
};

/**
 * Subtracts two vectors.
 * @param {!tdl.fast.Vector} dst vector.
 * @param {!tdl.fast.Vector} a Operand vector.
 * @param {!tdl.fast.Vector} b Operand vector.
 */
o3v.subVector = function(dst, a, b) {
  var aLength = a.length;
  for (var i = 0; i < aLength; ++i)
    dst[i] = a[i] - b[i];
  return dst;
};

/**
 * Computes the cross product of two vectors; assumes both vectors have
 * three entries.
 * @param {!tdl.math.Vector} dst vector.
 * @param {!tdl.math.Vector} a Operand vector.
 * @param {!tdl.math.Vector} b Operand vector.
 * @return {!tdl.math.Vector} The vector a cross b.
 */
o3v.cross = function(dst, a, b) {
  dst[0] = a[1] * b[2] - a[2] * b[1];
  dst[1] = a[2] * b[0] - a[0] * b[2];
  dst[2] = a[0] * b[1] - a[1] * b[0];
  return dst;
};

/**
 * Divides a vector by its Euclidean length and returns the quotient.
 * @param {!tdl.fast.Vector} dst vector.
 * @param {!tdl.fast.Vector} a The vector.
 * @return {!tdl.fast.Vector} The normalized vector.
 */
o3v.normalize = function(dst, a) {
  var n = 0.0;
  var aLength = a.length;
  for (var i = 0; i < aLength; ++i)
    n += a[i] * a[i];
  n = Math.sqrt(n);
  if (n > 0.00001) {
    for (var i = 0; i < aLength; ++i)
      dst[i] = a[i] / n;
  } else {
    for (var i = 0; i < aLength; ++i)
      dst[i] = 0;
  }
  return dst;
};

 Renderer = function (canvas, textureFromMaterialFunction) {
  getHttpRequest('scripts/shaders.txt', this.onloadShaders.bind(this));

  this.canvas_ = canvas;
  this.textureFromMaterialFunction_ = textureFromMaterialFunction;

  var gl = createContextFromCanvas(canvas);
  this.gl_ = gl;

  // Camera.
  this.zNear_ = Math.sqrt(3);
  this.model_ = mat4.identity(mat4.create());
  this.view_ = mat4.identity(mat4.create());
  this.proj_ = mat4.create();
  this.mvp_ = mat4.create();

  // Meshes.
  this.meshes_ = [];

  // WebGL
  gl.clearColor(0, 0, 0, 0);
  gl.enable(gl.CULL_FACE);
  gl.enable(gl.DEPTH_TEST);
  gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
  gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA);

  // Set up viewport.
  this.handleResize();
  mat4.translate(this.view_, [0, 0, -1]);

  // Set up for off-screen surface for entity identification.
  this.selectionFbo_ = { width: 0, height: 0 };

  this.forceColored_ = false;
};

Renderer.prototype.onloadShaders = function(req) {
  // TODO: error handling.
  var shaders = {};
  req.responseText.split('/** ').forEach(function(shader) {
    var name_and_body = shader.split(' **/');
    shaders[name_and_body[0]] = name_and_body[1];
  });

  var gl = this.gl_;

  // Set up program for rendering.
  var simpleVsrc = shaders['shader_vertex'];
  var simpleFsrc = shaders['shader_fragment'];
  this.normProgram_ = new Program(gl, [vertexShader(gl, simpleVsrc),
                                       fragmentShader(gl, simpleFsrc)]);

  // Set up program for selection.
  var idVsrc = shaders['shader_vertex_id'];
  var idFsrc = shaders['shader_fragment_id'];
  this.idProgram_ = new Program(gl, [vertexShader(gl, idVsrc),
                                     fragmentShader(gl, idFsrc)]);

  this.shadersLoaded_ = true;
};

Renderer.prototype.handleResize = function() {
  this.canvas_.width = this.canvas_.clientWidth;
  this.canvas_.height = this.canvas_.clientHeight;
  this.gl_.viewport(0, 0, this.canvas_.width, this.canvas_.height);
};

Renderer.prototype.drawAll_ = function(opt_forId) {
  var numMeshes = this.meshes_.length;
  for (var i = 0; i < numMeshes; i++) {
    this.meshes_[i].bindAndDraw(this.program_, opt_forId);
  }
};

Renderer.prototype.drawLists_ = function(displayLists, opt_forId) {
  var numLists = displayLists.length;
  for (var i = 0; i < numLists; i++) {
    var displayList = displayLists[i];
    var mesh = this.meshes_[i];
    mesh.bind(this.program_, opt_forId);
    mesh.drawList(displayList);
  }
};

// Update matrices and then redisplay.
Renderer.prototype.postRedisplayWithCamera = function(camera) {
  mat4.perspective(
      camera.fov,
      this.canvas_.clientWidth / this.canvas_.clientHeight,
      1, 1000,
      this.proj_);

  o3v.cameraLookAt(this.view_, camera.eye, camera.target, camera.up);
  mat4.inverse(this.view_);
  var vpMatrix = new Float32Array(16);
  mat4.multiply(this.proj_, this.view_, vpMatrix);
  mat4.multiply(vpMatrix, this.model_, this.mvp_);

  this.postRedisplay();
};

Renderer.prototype.postRedisplay = function() {
  var self = this;
  if (!this.frameStart_) {
    this.frameStart_ = Date.now();
    window.requestAnimFrame(function() {
      self.draw_();
      self.frameStart_ = 0;
    }, this.canvas_);
  }
};

Renderer.prototype.ready = function() {
  return this.shadersLoaded_ && (this.frameStart_ === 0);
};

Renderer.prototype.createOffscreenSurface_ = function(width, height) {
  var gl = this.gl_;
  if (!this.selectionFbo_.framebuffer)
    this.selectionFbo_.framebuffer = gl.createFramebuffer();
  gl.bindFramebuffer(gl.FRAMEBUFFER, this.selectionFbo_.framebuffer);

  if (!this.selectionFbo_.colorTexture) {
    this.selectionFbo_.colorTexture = gl.createTexture();

    gl.bindTexture(gl.TEXTURE_2D, this.selectionFbo_.colorTexture);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
  }

  gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, width, height, 0,
                gl.RGBA, gl.UNSIGNED_BYTE, null);

  if (!this.selectionFbo_.renderbuffer) {
    this.selectionFbo_.renderbuffer = gl.createRenderbuffer();
    gl.bindRenderbuffer(gl.RENDERBUFFER, this.selectionFbo_.renderbuffer);
    gl.renderbufferStorage(gl.RENDERBUFFER, gl.DEPTH_COMPONENT16,
                           width, height);
    gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0,
                            gl.TEXTURE_2D, this.selectionFbo_.colorTexture, 0);
    gl.framebufferRenderbuffer(gl.FRAMEBUFFER, gl.DEPTH_ATTACHMENT,
                               gl.RENDERBUFFER,
                               this.selectionFbo_.renderbuffer);
  }

  var status = gl.checkFramebufferStatus(gl.FRAMEBUFFER);
  if (status != gl.FRAMEBUFFER_COMPLETE) {
    o3v.log.error('Incomplete off-screen framebuffer');
    this.selectionFbo_.framebuffer = null;
  }
  gl.bindFramebuffer(gl.FRAMEBUFFER, null);
};

// Identify the mesh clicked.
Renderer.prototype.identify = function(x, y) {
  var gl = this.gl_;

  if (this.selectionFbo_.width != this.canvas_['clientWidth'] ||
      this.selectionFbo_.height != this.canvas_['clientHeight']) {
    this.createOffscreenSurface_(this.canvas_['clientWidth'],
                                 this.canvas_['clientHeight']);
    if (!this.selectionFbo_.framebuffer) {
      o3v.log.error('Unable to identify without valid off-screen buffer.');
      return null;
    }
    var selectionSurfaceSize =
      this.canvas_['clientWidth'] * this.canvas_['clientHeight'] * 4;
    this.selectionFbo_.selectionSurfaceArray =
      new Uint8Array(selectionSurfaceSize);
    this.selectionFbo_.width = this.canvas_['clientWidth'];
    this.selectionFbo_.height = this.canvas_['clientHeight'];
  }

  gl.bindFramebuffer(gl.FRAMEBUFFER, this.selectionFbo_.framebuffer);

  this.draw_(true);

  gl.readPixels(0, 0, this.selectionFbo_.width, this.selectionFbo_.height,
                gl.RGBA, gl.UNSIGNED_BYTE,
                this.selectionFbo_.selectionSurfaceArray);

  gl.bindFramebuffer(gl.FRAMEBUFFER, null);

  var tolerancePx = 10;
  var value = this.findPixelInRect_(
      x, y, tolerancePx, this.selectionFbo_.width, this.selectionFbo_.height,
      this.selectionFbo_.selectionSurfaceArray);

  value = Math.floor(value / this.selectionColorScale_);
  if (value != 0) {
    return this.colorToName_[value];
  } else {
    return null;
  }
};

Renderer.prototype.findPixelInRect_ =
    function(sx, sy, windowSize, width, height, data) {
  // Check center.
  var value = this.getPixel_(sx, sy, width, height, data);
  if (value != 0) return value;

  // Walk growing rectangle edges.
  for (var d = 1; d <= windowSize / 2; ++d) {
    for (var y = sy - d; y <= sy + d; ++y) {
      if (y < 0) continue;
      if (y >= height) break;

      value = this.getPixel_(sx - d, y, width, height, data);
      if (value != 0) return value;
      value = this.getPixel_(sx + d, y, width, height, data);
      if (value != 0) return value;
    }
    for (var x = sx - d + 1; x <= sx + d - 1; ++x) {
      if (x < 0) continue;
      if (x >= width) break;

      value = this.getPixel_(x, sy - d, width, height, data);
      if (value != 0) return value;
      value = this.getPixel_(x, sy + d, width, height, data);
      if (value != 0) return value;
    }
  }
  return 0;
};

Renderer.prototype.getPixel_ = function(sx, sy, width, height, data) {
  if (sx < 0 || sx >= width || sy < 0 || sy >= height)
    return 0;

  var startByte = ((height - 1 - sy) * width + sx) * 4;
  var red = data[startByte + 0];
  var green = data[startByte + 1];
  var blue = data[startByte + 2];
  return blue + green * 256 + red * 256 * 256;
};

Renderer.prototype.draw_ = function(opt_forId) {
  if (!this.shadersLoaded_)
    return;

  if (this.forceColored_) {
    opt_forId = true;  // colorcoded
  }

  if (opt_forId) {
    // Flat, one-color-per mesh program used for identification.
    this.program_ = this.idProgram_;
  } else {
    // Normal program used for rendering.
    this.program_ = this.normProgram_;
  }

  this.program_.use();

  if (opt_forId) {
    this.program_.enableVertexAttribArrays(['a_position',
                                            'a_colorIndex']);
    this.program_.disableVertexAttribArrays(['a_normal',
                                             'a_texcoord']);
  } else {
    this.program_.enableVertexAttribArrays(['a_position',
                                            'a_texcoord',
                                            'a_normal']);
    this.program_.disableVertexAttribArrays(['a_colorIndex']);
  }

  var gl = this.gl_;

  if (opt_forId) {
    this.selectionColorScale_ =
        Math.floor((256*256*256-1) / this.maxColorIndex_);
    gl.uniform1f(this.program_.set_uniform.u_colorScale,
                 this.selectionColorScale_);
    //gl.colorMask(true, true, true, true);
  } else {
    //gl.colorMask(true, true, true, false);
  }

  gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT | gl.STENCIL_BUFFER_BIT);

  gl.uniformMatrix4fv(this.program_.set_uniform.u_mvp, false, this.mvp_);
  gl.uniformMatrix3fv(this.program_.set_uniform.u_model, false,
                      mat4.toMat3(this.model_));

  gl.uniform1f(this.program_.set_uniform.u_opacity, 1.0);
  if (this.opacityLists_ !== undefined) {
    var meshes = this.meshes_;

    // Draw opaque lists. (Really should only be one, at position zero.)
    for (var i = 0; i < this.opacityLists_.length; i++) {
      var opacity = this.opacityLists_[i].opacity;
      if (opacity == 1) {
        this.drawLists_(this.opacityLists_[i].drawLists, opt_forId);
      }
    }

    // Draw transluscent layers.
    gl.enable(gl.BLEND);
    for (var i = 0; i < this.opacityLists_.length; i++) {
      var opacity = this.opacityLists_[i].opacity;
      if (opacity != 0 && opacity != 1) {
        gl.uniform1f(this.program_.set_uniform.u_opacity, opacity);
        this.drawLists_(this.opacityLists_[i].drawLists, opt_forId);
      }
    }
    gl.disable(gl.BLEND);

  } else {
    this.drawAll_(opt_forId);
  }
};

Renderer.prototype.updateMeshInfo = function() {
  this.entityToMeshInfo_ = {};

  for (var i = 0; i < this.meshes_.length; i++) {
    var mesh = this.meshes_[i];
    for (var j = 0 ; j < mesh.names_.length; j++) {

      var name = mesh.names_[j];
      var meshInfo = {};
      meshInfo.index = i;
      meshInfo.start = mesh.starts_[j];
      meshInfo.end = mesh.starts_[j] + mesh.lengths_[j];

      if (this.entityToMeshInfo_[name] !== undefined) {
        o3v.log.info('multiple meshes for \'', name, '\': ',
                     this.entityToMeshInfo_[name], meshInfo);
        this.entityToMeshInfo_[name].push(meshInfo);
      } else {
        this.entityToMeshInfo_[name] = [meshInfo];
      }
    }
  }
};

Renderer.prototype.updateOpacity = function(opacityInfo) {
  // TODO(dkogan): Special-case all-opaque case for speed.

  // this.opacityLists is:
  // [ { opacity: <opacity>,
  //     drawLists: [ [ <start 0 in mesh 0>, <length 0 in mesh 0>,
  //                    <start 1 in mesh 0>, <length 1 in mesh 0>...],
  //                  [ <start 0 in mesh 1>, <length 0 in mesh 1>...
  //                ] } ]

  this.opacityLists_ = [];
  o3v.util.forEach(
      opacityInfo,
      function(entities, opacity) {
        opacityInfo = {};
        opacityInfo.opacity = parseFloat(opacity);
        opacityInfo.drawLists = [];
        for (var i = 0; i < this.meshes_.length; i++) {
          opacityInfo.drawLists[i] = [];
        }
        o3v.util.forEach(
            entities,
            function(unused_true, entityId) {
              for (var i = 0; i < this.entityToMeshInfo_[entityId].length;
                   i++) {
                var meshInfo = this.entityToMeshInfo_[entityId][i];
                opacityInfo.drawLists[meshInfo.index].push(meshInfo.start);
                opacityInfo.drawLists[meshInfo.index].push(meshInfo.end);
              }
            }, this);
        this.opacityLists_.push(opacityInfo);
      }, this);
  this.opacityLists_.sort(function(a, b) { return b.opacity > a.opacity; });
};

Renderer.prototype.onMeshLoad =
    function(attribArray, indexArray, bboxes, meshEntry) {
  var texture = this.textureFromMaterialFunction_(this.gl_, meshEntry.material,
                                                  this.postRedisplay.bind(
                                                      this));

  // Set color for meshes, and record the mapping of color to name.
  var startColorIndex = this.maxColorIndex_;
  for (var i = 0; i < meshEntry.names.length; i++) {
    this.colorToName_[startColorIndex + i] = meshEntry.names[i];
  }
  this.maxColorIndex_ += meshEntry.lengths.length;

  this.meshes_.push(
      new Mesh(this.gl_, attribArray, indexArray, DEFAULT_ATTRIB_ARRAYS,
               texture, meshEntry.names, meshEntry.lengths, bboxes,
               startColorIndex));
};

Renderer.prototype.reset = function() {
  this.meshes_ = [];
  this.postRedisplay();
  this.maxColorIndex_ = 1;
  this.colorToName_ = {};
  this.opacityLists_ = [];
};

Renderer.prototype.getViewportCoords = function(modelCoords) {
  var modelCoords = [modelCoords[0],
                     modelCoords[1],
                     modelCoords[2],
                     1];

  var screenCoords = mat4.create();

  mat4.multiply(this.mvp_, modelCoords, screenCoords);

  var x = screenCoords[0] / screenCoords[3];
  var y = screenCoords[1] / screenCoords[3];

  x = (x + 1) * this.canvas_.width / 2;
  y = (2 - (y + 1)) * this.canvas_.height / 2;

  return [x, y];
};

Renderer.prototype.toggleColored = function() {
  this.forceColored_ = !this.forceColored_;
};
// Copyright 2011 Google Inc. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * @fileoverview WebGL utility functions
 */
o3v.webGLUtil = {
  /**
   * Tests whether the browser supports WebGL.
   * @param {Element} canvasEl A canvas element in the current document.
   * @return {boolean} True iff browser supports WebGL.
   */
  browserSupportsWebGL: function (canvasEl) {
    try {
      if (!canvasEl) {
        return false;
      }
      if (!window.WebGLRenderingContext) {
        return false;
      }
      var gl = canvasEl.getContext('webgl');
      if (!gl) {
        gl = canvasEl.getContext('experimental-webgl');
      }
      if (!gl) {
        return false;
      }
      return true;
    } catch (err) {
      return false;
    }
  }
};
// Copyright 2011 Google Inc. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * @fileoverview Utility functions and miscellaneous items.
 */

/**
 * Debug mode
 */
o3v.LOG_NONE = 0;
o3v.LOG_ERROR = 1;
o3v.LOG_WARNING = 2;
o3v.LOG_INFO = 3;

o3v.LOG_LEVEL = o3v.LOG_INFO;

/**
 * Basic logging
 */
o3v.log = {
  info: function () {
    if (o3v.LOG_LEVEL >= o3v.LOG_INFO && window['console'] !== undefined) {
      var newArgs = ['INFO: '];
      for (var i = 0; i < arguments.length; i++) {
        newArgs[i+1] = arguments[i];
      }
      window['console'].log.apply(window['console'], newArgs);
    }
  },
  warning: function () {
    if (o3v.LOG_LEVEL >= o3v.LOG_WARNING && window['console'] !== undefined) {
      var newArgs = ['WARNING: '];
      for (var i = 0; i < arguments.length; i++) {
        newArgs[i+1] = arguments[i];
      }
      window['console'].log.apply(window['console'], newArgs);
    }
  },
  error: function () {
    if (o3v.LOG_LEVEL >= o3v.LOG_ERROR && window['console'] !== undefined) {
      var newArgs = ['ERROR: '];
      for (var i = 0; i < arguments.length; i++) {
        newArgs[i+1] = arguments[i];
      }
      window['console'].log.apply(window['console'], newArgs);
    }
  }
};

/**
 * UI settings
 */
o3v.uiSettings = {
  ZINDEX_VIEWER: 0,
  ZINDEX_MAINUI_STATUS_LOWER: 1,
  ZINDEX_MAINUI_STATUS_UPPER: 2,
  ZINDEX_MAINUI: 3
};

/**
 * Enum for handedness
 * @enum {number}
 * @private
 */
var HANDEDNESS_ = {
  LEFT: 0,
  RIGHT: 1
};

/**
 * Grows a bounding box to encompass another bounding box. If
 * original is undefined, it is created as a copy of addition.
 * If original is defined, it's modified in place.
 * @param {Array|Float32Array} original Original bounding box.
 * @param {Array|Float32Array} addition Bounding box to add to original.
 * @return {Array|Float32Array} original (modified in place as well).
 */
o3v.growBBox = function (original, addition) {
  if (original === undefined) {
    return addition.slice(0);
  } else {
    if (original[0] > addition[0]) {
      original[0] = addition[0];
    }
    if (original[1] > addition[1]) {
      original[1] = addition[1];
    }
    if (original[2] > addition[2]) {
      original[2] = addition[2];
    }
    if (original[3] < addition[3]) {
      original[3] = addition[3];
    }
    if (original[4] < addition[4]) {
      original[4] = addition[4];
    }
    if (original[5] < addition[5]) {
      original[5] = addition[5];
    }
    return original;
  }
};

// General utilities.
o3v.util = {};

o3v.util.isEmpty = function(obj) {
  return (Object.keys(obj).length === 0);
};

o3v.util.isArray = function(val) {
  return (Object.prototype.toString.call(val) === '[object Array]');
};

o3v.util.cloneObject = function(obj) {
  // Shallow copy. For deep, change to $.extend(true, {}, obj).
  return $.extend({}, obj);
};

o3v.util.extendObject = function(target, var_args) {
  return $.extend(target, var_args);
};

o3v.util.objectContains = function(obj, val) {
  for (var key in obj) {
    if (obj[key] == val) {
      return true;
    }
  }
  return false;
};

o3v.util.getObjectCount = function(obj) {
  return Object.keys(obj).length;
};

o3v.util.forEach = function(obj, f, opt_obj) {
  for (var key in obj) {
    f.call(opt_obj, obj[key], key, obj);
  }
};

o3v.util.createSet = function(var_args) {
  var argLength = arguments.length;
  if (argLength == 1 && o3v.util.isArray(arguments[0])) {
    return o3v.util.createSet.apply(null, arguments[0]);
  }

  var rv = {};
  for (var i = 0; i < argLength; i++) {
    rv[arguments[i]] = true;
  }
  return rv;
};

o3v.util.setIfUndefined = function(obj, key, value) {
  return key in obj ? obj[key] : (obj[key] = value);
};

o3v.util.isDef = function(val) {
  return typeof val != 'undefined';
};

////////////////////////////////////////////////////////////////////////////////
// goog.math.Bezier, imported from Google Closure.

goog = {};
goog.math = {};

/**
 * Object representing a cubic bezier curve.
 * @param {number} x0 X coordinate of the start point.
 * @param {number} y0 Y coordinate of the start point.
 * @param {number} x1 X coordinate of the first control point.
 * @param {number} y1 Y coordinate of the first control point.
 * @param {number} x2 X coordinate of the second control point.
 * @param {number} y2 Y coordinate of the second control point.
 * @param {number} x3 X coordinate of the end point.
 * @param {number} y3 Y coordinate of the end point.
 * @constructor
 */
goog.math.Bezier = function(x0, y0, x1, y1, x2, y2, x3, y3) {
  /**
   * X coordinate of the first point.
   * @type {number}
   */
  this.x0 = x0;

  /**
   * Y coordinate of the first point.
   * @type {number}
   */
  this.y0 = y0;

  /**
   * X coordinate of the first control point.
   * @type {number}
   */
  this.x1 = x1;

  /**
   * Y coordinate of the first control point.
   * @type {number}
   */
  this.y1 = y1;

  /**
   * X coordinate of the second control point.
   * @type {number}
   */
  this.x2 = x2;

  /**
   * Y coordinate of the second control point.
   * @type {number}
   */
  this.y2 = y2;

  /**
   * X coordinate of the end point.
   * @type {number}
   */
  this.x3 = x3;

  /**
   * Y coordinate of the end point.
   * @type {number}
   */
  this.y3 = y3;
};


/**
 * Constant used to approximate ellipses.
 * See: http://canvaspaint.org/blog/2006/12/ellipse/
 * @type {number}
 */
goog.math.Bezier.KAPPA = 4 * (Math.sqrt(2) - 1) / 3;


/**
 * @return {!goog.math.Bezier} A copy of this curve.
 */
goog.math.Bezier.prototype.clone = function() {
  return new goog.math.Bezier(this.x0, this.y0, this.x1, this.y1, this.x2,
      this.y2, this.x3, this.y3);
};


/**
 * Test if the given curve is exactly the same as this one.
 * @param {goog.math.Bezier} other The other curve.
 * @return {boolean} Whether the given curve is the same as this one.
 */
goog.math.Bezier.prototype.equals = function(other) {
  return this.x0 == other.x0 && this.y0 == other.y0 && this.x1 == other.x1 &&
         this.y1 == other.y1 && this.x2 == other.x2 && this.y2 == other.y2 &&
         this.x3 == other.x3 && this.y3 == other.y3;
};


/**
 * Modifies the curve in place to progress in the opposite direction.
 */
goog.math.Bezier.prototype.flip = function() {
  var temp = this.x0;
  this.x0 = this.x3;
  this.x3 = temp;
  temp = this.y0;
  this.y0 = this.y3;
  this.y3 = temp;

  temp = this.x1;
  this.x1 = this.x2;
  this.x2 = temp;
  temp = this.y1;
  this.y1 = this.y2;
  this.y2 = temp;
};


/**
 * Computes the curve at a point between 0 and 1.
 * @param {number} t The point on the curve to find.
 * @return {!goog.math.Coordinate} The computed coordinate.
 */
goog.math.Bezier.prototype.getPoint = function(t) {
  // Special case start and end
  if (t == 0) {
    return new goog.math.Coordinate(this.x0, this.y0);
  } else if (t == 1) {
    return new goog.math.Coordinate(this.x3, this.y3);
  }

  // Step one - from 4 points to 3
  var ix0 = goog.math.lerp(this.x0, this.x1, t);
  var iy0 = goog.math.lerp(this.y0, this.y1, t);

  var ix1 = goog.math.lerp(this.x1, this.x2, t);
  var iy1 = goog.math.lerp(this.y1, this.y2, t);

  var ix2 = goog.math.lerp(this.x2, this.x3, t);
  var iy2 = goog.math.lerp(this.y2, this.y3, t);

  // Step two - from 3 points to 2
  ix0 = goog.math.lerp(ix0, ix1, t);
  iy0 = goog.math.lerp(iy0, iy1, t);

  ix1 = goog.math.lerp(ix1, ix2, t);
  iy1 = goog.math.lerp(iy1, iy2, t);

  // Final step - last point
  return new goog.math.Coordinate(goog.math.lerp(ix0, ix1, t),
      goog.math.lerp(iy0, iy1, t));
};


/**
 * Changes this curve in place to be the portion of itself from [t, 1].
 * @param {number} t The start of the desired portion of the curve.
 */
goog.math.Bezier.prototype.subdivideLeft = function(t) {
  if (t == 1) {
    return;
  }

  // Step one - from 4 points to 3
  var ix0 = goog.math.lerp(this.x0, this.x1, t);
  var iy0 = goog.math.lerp(this.y0, this.y1, t);

  var ix1 = goog.math.lerp(this.x1, this.x2, t);
  var iy1 = goog.math.lerp(this.y1, this.y2, t);

  var ix2 = goog.math.lerp(this.x2, this.x3, t);
  var iy2 = goog.math.lerp(this.y2, this.y3, t);

  // Collect our new x1 and y1
  this.x1 = ix0;
  this.y1 = iy0;

  // Step two - from 3 points to 2
  ix0 = goog.math.lerp(ix0, ix1, t);
  iy0 = goog.math.lerp(iy0, iy1, t);

  ix1 = goog.math.lerp(ix1, ix2, t);
  iy1 = goog.math.lerp(iy1, iy2, t);

  // Collect our new x2 and y2
  this.x2 = ix0;
  this.y2 = iy0;

  // Final step - last point
  this.x3 = goog.math.lerp(ix0, ix1, t);
  this.y3 = goog.math.lerp(iy0, iy1, t);
};


/**
 * Changes this curve in place to be the portion of itself from [0, t].
 * @param {number} t The end of the desired portion of the curve.
 */
goog.math.Bezier.prototype.subdivideRight = function(t) {
  this.flip();
  this.subdivideLeft(1 - t);
  this.flip();
};


/**
 * Changes this curve in place to be the portion of itself from [s, t].
 * @param {number} s The start of the desired portion of the curve.
 * @param {number} t The end of the desired portion of the curve.
 */
goog.math.Bezier.prototype.subdivide = function(s, t) {
  this.subdivideRight(s);
  this.subdivideLeft((t - s) / (1 - s));
};


/**
 * Computes the position t of a point on the curve given its x coordinate.
 * That is, for an input xVal, finds t s.t. getPoint(t).x = xVal.
 * As such, the following should always be true up to some small epsilon:
 * t ~ solvePositionFromXValue(getPoint(t).x) for t in [0, 1].
 * @param {number} xVal The x coordinate of the point to find on the curve.
 * @return {number} The position t.
 */
goog.math.Bezier.prototype.solvePositionFromXValue = function(xVal) {
  // Desired precision on the computation.
  var epsilon = 1e-6;

  // Initial estimate of t using linear interpolation.
  var t = (xVal - this.x0) / (this.x3 - this.x0);
  if (t <= 0) {
    return 0;
  } else if (t >= 1) {
    return 1;
  }

  // Try gradient descent to solve for t. If it works, it is very fast.
  var tMin = 0;
  var tMax = 1;
  for (var i = 0; i < 8; i++) {
    var value = this.getPoint(t).x;
    var derivative = (this.getPoint(t + epsilon).x - value) / epsilon;
    if (Math.abs(value - xVal) < epsilon) {
      return t;
    } else if (Math.abs(derivative) < epsilon) {
      break;
    } else {
      if (value < xVal) {
        tMin = t;
      } else {
        tMax = t;
      }
      t -= (value - xVal) / derivative;
    }
  }

  // If the gradient descent got stuck in a local minimum, e.g. because
  // the derivative was close to 0, use a Dichotomy refinement instead.
  // We limit the number of interations to 8.
  for (var i = 0; Math.abs(value - xVal) > epsilon && i < 8; i++) {
    if (value < xVal) {
      tMin = t;
      t = (t + tMax) / 2;
    } else {
      tMax = t;
      t = (t + tMin) / 2;
    }
    value = this.getPoint(t).x;
  }
  return t;
};

/**
 * Computes the y coordinate of a point on the curve given its x coordinate.
 * @param {number} xVal The x coordinate of the point on the curve.
 * @return {number} The y coordinate of the point on the curve.
 */
goog.math.Bezier.prototype.solveYValueFromXValue = function(xVal) {
  return this.getPoint(this.solvePositionFromXValue(xVal)).y;
};

/**
 * Class for representing coordinates and positions.
 * @param {number=} opt_x Left, defaults to 0.
 * @param {number=} opt_y Top, defaults to 0.
 * @constructor
 */
goog.math.Coordinate = function(opt_x, opt_y) {
  /**
   * X-value
   * @type {number}
   */
  this.x = o3v.util.isDef(opt_x) ? opt_x : 0;

  /**
   * Y-value
   * @type {number}
   */
  this.y = o3v.util.isDef(opt_y) ? opt_y : 0;
};


/**
 * Returns a new copy of the coordinate.
 * @return {!goog.math.Coordinate} A clone of this coordinate.
 */
goog.math.Coordinate.prototype.clone = function() {
  return new goog.math.Coordinate(this.x, this.y);
};


if (goog.DEBUG) {
  /**
   * Returns a nice string representing the coordinate.
   * @return {string} In the form (50, 73).
   */
  goog.math.Coordinate.prototype.toString = function() {
    return '(' + this.x + ', ' + this.y + ')';
  };
}


/**
 * Compares coordinates for equality.
 * @param {goog.math.Coordinate} a A Coordinate.
 * @param {goog.math.Coordinate} b A Coordinate.
 * @return {boolean} True iff the coordinates are equal, or if both are null.
 */
goog.math.Coordinate.equals = function(a, b) {
  if (a == b) {
    return true;
  }
  if (!a || !b) {
    return false;
  }
  return a.x == b.x && a.y == b.y;
};


/**
 * Returns the distance between two coordinates.
 * @param {!goog.math.Coordinate} a A Coordinate.
 * @param {!goog.math.Coordinate} b A Coordinate.
 * @return {number} The distance between {@code a} and {@code b}.
 */
goog.math.Coordinate.distance = function(a, b) {
  var dx = a.x - b.x;
  var dy = a.y - b.y;
  return Math.sqrt(dx * dx + dy * dy);
};


/**
 * Returns the squared distance between two coordinates. Squared distances can
 * be used for comparisons when the actual value is not required.
 *
 * Performance note: eliminating the square root is an optimization often used
 * in lower-level languages, but the speed difference is not nearly as
 * pronounced in JavaScript (only a few percent.)
 *
 * @param {!goog.math.Coordinate} a A Coordinate.
 * @param {!goog.math.Coordinate} b A Coordinate.
 * @return {number} The squared distance between {@code a} and {@code b}.
 */
goog.math.Coordinate.squaredDistance = function(a, b) {
  var dx = a.x - b.x;
  var dy = a.y - b.y;
  return dx * dx + dy * dy;
};


/**
 * Returns the difference between two coordinates as a new
 * goog.math.Coordinate.
 * @param {!goog.math.Coordinate} a A Coordinate.
 * @param {!goog.math.Coordinate} b A Coordinate.
 * @return {!goog.math.Coordinate} A Coordinate representing the difference
 *     between {@code a} and {@code b}.
 */
goog.math.Coordinate.difference = function(a, b) {
  return new goog.math.Coordinate(a.x - b.x, a.y - b.y);
};


/**
 * Returns the sum of two coordinates as a new goog.math.Coordinate.
 * @param {!goog.math.Coordinate} a A Coordinate.
 * @param {!goog.math.Coordinate} b A Coordinate.
 * @return {!goog.math.Coordinate} A Coordinate representing the sum of the two
 *     coordinates.
 */
goog.math.Coordinate.sum = function(a, b) {
  return new goog.math.Coordinate(a.x + b.x, a.y + b.y);
};

/**
 * Performs linear interpolation between values a and b. Returns the value
 * between a and b proportional to x (when x is between 0 and 1. When x is
 * outside this range, the return value is a linear extrapolation).
 * @param {number} a
 * @param {number} b
 * @param {number} x The proportion between a and b
 * @return {number} The interpolated value between a and b
 */
goog.math.lerp = function(a, b, x) {
  return a + x * (b - a);
};

// Shim layer with setTimeout fallback, adapted from:
// http://paulirish.com/2011/requestanimationframe-for-smart-animating/
window.requestAnimFrame = window.requestAnimationFrame ||
  window.webkitRequestAnimationFrame ||
  window.mozRequestAnimationFrame ||
  window.oRequestAnimationFrame ||
  window.msRequestAnimationFrame ||
  function(callback, unused_dom) {
    window.setTimeout(callback, 16);  // 16ms ~ 60Hz
  };

// XMLHttpRequest stuff for loader.js.
function getHttpRequest(url, onload, opt_onprogress) {
  console.log(url);
  var req = new XMLHttpRequest();
  req.onload = function(e) { onload(req, e); };
  if (opt_onprogress) {
    req.onprogress = function(e) {
      opt_onprogress(req, e);
    };
  }
  req.open('GET', url, true);
  req.send(null);
}
// Copyright 2011 Google Inc. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * @fileoverview Information about the models that open-3d-viewer will display.
 */

/* ====================================================================== */
/*                        ADD YOUR MODELS HERE                            */
/* ====================================================================== */

o3v.MODELS = [
  {
    name: 'Bessie.obj',
    scriptName: 'cow_anatomy.js',
    modelPath: 'models/cow_anatomy/',
    metadataFile: 'entity_metadata.json',
    texturePath: 'models/common/',
    numLayers: 5
  }
];
// Copyright 2011 Google Inc. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * @fileoverview Entity database.
 */
/**
 * Temporary storage for information about entities and their relationships.
 * @param {Object} json Json data from server.
 * @constructor
 */
o3v.EntityMetadata = function (json) {
  /**
   * Logger.
   * @type {Object.<string, Function>}
   * @private
   */
  this.log_ = o3v.log;

  /**
   * Map of entity id to entity metadata.
   * @type {Object.<number, Object>}
   * @private
   */
  this.entities_ = {};

  /**
   * Map of external id to id.
   * @type {Object.<string, number>}
   * @private
   */
  this.externalIdToId_ = {};

  /**
   * Set of layer ids.
   * @type {Object.<number, boolean>}
   * @private
   */
  this.layers_ = {};

  /**
   * Map of layer name to entity id.
   * @type {Object.<string, number>}
   * @private
   */
  this.layerNameToId_ = {};

  /**
   * Sublayers: indexed by layer entity id, array of arrays of entity ids.
   * @type {Object.<number, Array.<Array.<number>>>}
   * @private
   */
  this.sublayers_ = {};

  /**
   * Symmetry information - pair id to symmetry info.
   * @type {Object.<number, Object>}
   * @private
   */
  this.symmetries_ = {};

  /**
   * Set of entity ids that are hidden from search and selection.
   * @type {Object.<number, boolean>}
   * @private
   */
  this.hidden_ = {};

  this.loadEntities_(json);
  this.loadDag_(json);
  this.loadLayers_(json);

  this.log_.info('loaded entity metadata: ', json);
};


/**
 * Generates a readable name from an external id.
 * This badly needs to be moved to the pipeline.
 * @param {string} stringId Id (e.g. 'r_lower_subclavian_artery').
 * @return {string} Name (e.g. 'lower subclavian artery').
 * @private
 */
o3v.makeName = function (stringId) {
  return stringId.replace(/_/g, ' ').replace(/^r /, '').replace(/^l /, '');
};

/**
 * Loads entity data from json.
 * @param {Object} json Json data from server.
 * @private
 */
o3v.EntityMetadata.prototype.loadEntities_ = function (json) {
  // Load leafs.
  json['leafs'].forEach(
      function (entityInfo) {
        this.loadEntity_(entityInfo, true);
      }, this);

  // Load non-leafs.
  json['nodes'].forEach(
      function (entityInfo) {
        this.loadEntity_(entityInfo, false);
      }, this);

  // Load hidden.
  json['hidden'].forEach(
      function (entityId) {
        this.hidden_[entityId] = true;
      }, this);

  // Load symmetries.
  json['symmetries'].forEach(this.computeSymmetryObject_, this);

  // Load names.
  /**
   * Set of entities with overridden names.
   * @type {Object.<number, boolean>}
   * @private
   */
  this.entitiesWithOverriddenNames_ = {};
  json['names'].forEach(this.computeName_, this);
};

/**
 * Loads one entity.
 * @param {Array.<number|string>} entityInfo Data about entity from json.
 * @param {boolean} isLeaf True if this is a leaf entity.
 * @private
 */
o3v.EntityMetadata.prototype.loadEntity_ = function (entityInfo, isLeaf) {
  var entityId = +entityInfo[0];
  var externalId = '' + entityInfo[1];
  // TODO(dkogan): This logic needs to move into the data pipeline.
  var entityNames = [o3v.makeName(externalId)];
  var entity = {};
  entity.externalId = externalId;
  entity.names = entityNames;
  entity.parentIds = {};

  this.entities_[entityId] = entity;
  if (isLeaf) { // We don't want the externalid -> id map for nonleafs
    this.externalIdToId_[externalId] = entityId;
  }
};

/**
 * Loads the dag of parent/child relationships between entities.
 * @param {Object} json Json data from server.
 * @private
 */
o3v.EntityMetadata.prototype.loadDag_ = function (json) {
  json['dag'].forEach(
      function (groupInfo) {
        var parentId = groupInfo[0];
        var childIds = groupInfo[1];
        // All children are under one parent id.
        this.entities_[parentId].childIds = o3v.util.createSet(childIds);
        childIds.forEach(
            function (childId) {
              this.entities_[childId].parentIds[parentId] = true;
            }, this);
      }, this);
};

/**
 * Loads layer and sublayer data.
 * @param {Object} json Json data from server.
 * @private
 */
o3v.EntityMetadata.prototype.loadLayers_ = function (json) {
  // Load layers.
  json['layers'].forEach(
      function (layerId) {
        this.layers_[layerId] = true;
        this.layerNameToId_[this.getEntity(layerId).name] = layerId;
      }, this);

  var entitiesAccountedFor = {};

  // Load sublayers.
  // this.subLayers = Object.<number, Array.<Array.<number>>>
  //   layerId -> [ [entityId, entityId], [entityId, entityId] ...]
  //   The sublayers are sorted from innermost to outermost.
  json['sublayers'].forEach(
      function (layer) {
        var layerId = layer[0];
        var sublayers = layer[1];
        var sublayerArray = [];
        sublayers.forEach(
            function (sublayer) {
              var depth = sublayer[0];
              var entityIds = sublayer[1];
              sublayerArray[depth] = [];
              entityIds.forEach(
                  function (entityId) {
                      sublayerArray[depth].push(entityId);
                      entitiesAccountedFor[entityId] = true;
                    }, this);
                  }, this);
        this.sublayers_[layerId] = sublayerArray;
      }, this);

  // If, for some reason, there are sublayers with gaps, fill in those
  // gaps with empty sets.
  o3v.util.forEach(this.sublayers_, function (sublayerArray) {
      for (var i = 0; i < sublayerArray.length; i++) {
        if (sublayerArray[i] === undefined) {
          sublayerArray[i] = [];
        }
      }
    }, this);

  // Complete sublayers by calculating any leftover entities
  // and putting them in the default (top) layer.
  o3v.util.forEach(this.layers_, function (unused_true, layerId) {
      if (this.sublayers_[layerId] === undefined) {
        this.sublayers_[layerId] = [];
      }
      var sublayerArray = this.sublayers_[layerId];
      sublayerArray[sublayerArray.length] = [];
    }, this);
  o3v.util.forEach(
      this.entities_,
      function(entity, entityId) {
        // If this a new leaf entity, it needs to be assigned to a layer.
        if (entitiesAccountedFor[entityId] === undefined &&
            entity.childIds === undefined) {
          var layerId = this.getLayerId(entityId);
          if (!layerId) {
            this.log_.warning('Failed to find layer for leaf entity ',
                              entityId, ' ', entity.names[0]);
          } else {
            var sublayerArray = this.sublayers_[layerId];
            sublayerArray[sublayerArray.length - 1].push(
                parseInt(entityId));
          }
        }
      }, this);
};

/**
 * Gets the layer id of an entity.
 * @param {number} The entity id.
 * @return {number} The layer id or 0 if none.
 */
o3v.EntityMetadata.prototype.getLayerId = function(entityId) {
  var entity = this.entities_[entityId];
  var layerId = 0;
  // Inefficient (because no short-circuiting) but easy.
  o3v.util.forEach(
      entity.parentIds,
      function(true_unused, parentId) {
        if (this.layers_[parentId] !== undefined) {
          layerId = parentId;
        } else {
          var parentLayerId = this.getLayerId(parentId);
          if (parentLayerId != 0) {
            layerId = parentLayerId;
          }
        }
      }, this);
  return layerId;
};

/**
 * Maps an external id to an internal id.
 * @param {string} externalId External id.
 * @return {number} The internal id.
 */
o3v.EntityMetadata.prototype.externalIdToId = function (externalId) {
  // TODO(dkogan): This lower case should not be necessary once the pipeline
  // does the right thing.
  return this.externalIdToId_[externalId.toLowerCase()];
};

/**
 * Gets an entity object by id.
 * @param {number} entityId The id of the entity.
 * @return {Object} The entity.
 */
o3v.EntityMetadata.prototype.getEntity = function (entityId) {
  return this.entities_[entityId];
};

/**
 * Gets the layers.
 * @return {Object.<number, boolean>} Set of layer entity ids.
 */
o3v.EntityMetadata.prototype.getLayers = function () {
  return this.layers_;
};

/**
 * Gets the sublayers. See definition of EntityMetadata.sublayers_ for
 * structure explanation.
 * @return {Object.<number, Array.<Array.<number>>>} Sublayer object.
 */
o3v.EntityMetadata.prototype.getSublayers = function () {
  return this.sublayers_;
};

/**
 * Gets symmetry information.
 * @return {Object.<number, Object>} Map of pair id to symmetry info.
 */
o3v.EntityMetadata.prototype.getSymmetries = function () {
  return this.symmetries_;
};

/**
 * Gets the hidden entities.
 * @return {Object.<number, boolean>} Set of hidden entity ids.
 */
o3v.EntityMetadata.prototype.getHidden = function () {
  return this.hidden_;
};

/**
 * Computes and stores a single symmetry object.
 * This sets this.symmetries_.
 * @param {Array.<number|string>} symmetryJson Json data for the symmetry.
 *        Structure: [<pairId>, <leftId>, <rightId>, <singularName>].
 * @private
 */
o3v.EntityMetadata.prototype.computeSymmetryObject_ = function (symmetryJson) {
  var pairId = symmetryJson[0];
  var symmetryObj = {};
  symmetryObj.childIds = [];
  symmetryObj.childIds[HANDEDNESS_.LEFT] = symmetryJson[1];
  symmetryObj.childIds[HANDEDNESS_.RIGHT] = symmetryJson[2];
  symmetryObj.singularName = o3v.makeName('' + symmetryJson[3]);

  this.symmetries_[pairId] = symmetryObj;
};

/**
 * Stores a name associated with an entity.
 * @param {Array.<number|string>} nameTuple Tuple of (entityId, name).
 * @private
 */
o3v.EntityMetadata.prototype.computeName_ = function (nameTuple) {
  var entityId = +nameTuple[0];
  var name = nameTuple[1];
  if (!this.entitiesWithOverriddenNames_[entityId]) {
    // First override clobbers existing name.
    this.entities_[entityId].names = [name];
    this.entitiesWithOverriddenNames_[entityId] = true;
  } else {
    this.entities_[entityId].names.push(name);
  }
};


/**
 * Storage for entity information associated with a particular model.
 * @param {Object} json Json data from server for this model.
 * @param {o3v.EntityMetadata} metadata Global metadata.
 * @constructor
 */
o3v.EntityModel = function (json, metadata) {
  // TODO(wonchun): This should be constructed out of models, not out of json.
  // TODO(dkogan): Much of this code needs to be pushed back earlier into the
  //               data pipeline. The symmetry code is especially bad.
  this.log_ = o3v.log;

  /**
   * Map of entity id to entity metadata.
   * @type {Object.<number, Object>}
   * @private
   */
  this.entities_ = {};

  /**
   * Map of external id to id.
   * @type {Object.<string, number>}
   * @private
   */
  this.externalIdToId_ = {};

  /**
   * Map of search term to array of entity ids.
   * @type {Object.<string, Array.<number>>}
   * @private
   */
  this.searchToEntityIds_ = {};

  /**
   * Matcher for search.
   * @type {Object}
   * @private
   */
  this.searchMatcher_ = null;

  /**
   * Root of the entity DAG (there must only be one).
   * @type {number}
   * @private
   */
  this.rootId_;

  /**
   * Array of layer names.
   * @type Array.<String>
   * @private
   */
  this.layerNames_ = [];

  /**
   * Map of layer name to entity id.
   * @type {Object.<string, number>}
   * @private
   */
  this.layerNameToId_ = {};

  /**
   * Set of entity ids that are unselectable.
   * @type {Object.<number, boolean>}
   * @private
   */
  this.unselectable_ = o3v.util.cloneObject(metadata.getHidden());

  this.loadLeafEntities_(json, metadata);
  this.nonSearchableEntityIds_ = o3v.util.cloneObject(metadata.getHidden());
  this.computeDagAndSymmetries_(metadata);
  this.computeRoot_();
  this.computeSplits_();
  this.computeLayers_(metadata);
  this.computeSearches_(metadata);

  /**
   * Sublayers: indexed by layer entity id, array of arrays of entity ids.
   * @type {Object.<number, Array.<Array.<number>>>}view
   * @private
   */
  this.sublayers_ = this.loadSublayers_(metadata.getSublayers());
};

/**
 * Maximum number of entities into which a group entity is allowed to split. If
 * it's not possible to split under this number, entity is considered
 * unsplittable.
 * @type {number}
 * @const
 * @private
 */
o3v.EntityModel.MAX_SPLIT_COUNT_ = 25;

/**
 * Loads sublayers from metadata.
 * This is just postprocessing to remove any entities not in this model.
 * @param {Object.<number, Array.<Array.<number>>>} sublayers
 * @return {Object.<number, Array.<Array.<number>>>} sublayers
 */
o3v.EntityModel.prototype.loadSublayers_ = function(sublayers) {

  var newSublayers = {};

  o3v.util.forEach(
      sublayers,
      function(sublayer, layerId) {
        newSublayers[layerId] = [];
        sublayer.forEach(
            function(sublayerArray) {
              newSublayers[layerId][newSublayers[layerId].length] = [];
              sublayerArray.forEach(
                  function(entityId) {
                    if (this.entities_[entityId] !== undefined) {
                      newSublayers[layerId][newSublayers[layerId].length - 1]
                          .push(entityId);
                    }
                  }, this);
            }, this);
      }, this);

  return newSublayers;
};

/**
 * Loads leaf entities from json and metadata.
 * This sets this.entities_ and this.externalIdToId_ for leaf entities.
 * @param {Object} json Json data for this model.
 * @param {o3v.EntityMetadata} metadata Overall metadata.
 * @private
 */
o3v.EntityModel.prototype.loadLeafEntities_ = function (json, metadata) {
  // Generate list of initial entities.
  for (var url in json.urls) {
    var urlItems = json.urls[url].length;
    for (var i = 0; i < urlItems; ++i) {
      json.urls[url][i].names.forEach(
        function(externalId) {
          var entityId = metadata.externalIdToId(externalId);
          var entityMetadata = metadata.getEntity(entityId);
          if (!entityId) {
            this.log_.error('Missing leaf geometry ', externalId,
                            ' in metadata.');
          } else {
            var entity = {};
            entity.name = entityMetadata.names[0];
            // TODO(dkogan): This field only used for symmetry calculation -
            // really should move that to the data pipeline somewhere as a
            // boolean.
            entity.externalId = externalId;

            // TODO(dkogan): Make parents & children just pointers.
            entity.parentIds = entityMetadata.parentIds;

            this.entities_[entityId] = entity;
            this.externalIdToId_[externalId] = entityId;
          }
      }, this);
    }
  }
};

/**
 * Computes the entity hierarchy DAG and fills in any symmetries. The DAG
 * represents how entities and groups of entities relate to one another: e.g.
 * 'cervical vertebrae' belong to the groups 'spine' and 'skeleton'.
 * This sets this.entities_ for groups, and sets parentIds and childIds on the
 * entities.
 * @param {o3v.EntityMetadata} metadata Overall metadata.
 * @private
 */
o3v.EntityModel.prototype.computeDagAndSymmetries_ = function (metadata) {
  var symmetries = metadata.getSymmetries();

  // Generate a lookup table for group entities which known to be symmetric.
  // The left and right children of group entities are generated in the
  // pipeline.
  var entityIdToHandedness = {};
  o3v.util.forEach(symmetries, function (pair, pairId) {
    o3v.util.forEach(HANDEDNESS_, function (handedness) {
      var childId = pair.childIds[handedness];
      this.nonSearchableEntityIds_[childId] = true;
      entityIdToHandedness[childId] = handedness;
    }, this);
  }, this);

  // Function to get handedness given an entity. Group entity handedness is
  // known from metadata (entityIdToHandedness); leaf entity handedness in
  // determined by the prefix of the external id.
  var getHandedness = function (entityId, entity) {
      if (o3v.util.objectContains(entityIdToHandedness, entityId)) {
        return entityIdToHandedness[entityId];
      } else if (entity.externalId && entity.externalId.match(/^l_/i)) {
        return HANDEDNESS_.LEFT;
      } else if (entity.externalId && entity.externalId.match(/^r_/i)) {
        return HANDEDNESS_.RIGHT;
      } else {
        this.log_.error('paired entity of unknown handedness ', entityId,
                        ' ', entity.name);
      }
    };

  // Queue of entities to process. Every entity is processed to set the parent
  // child connections.
  // Any entity created in the process of dag generation or symmetry
  // generation gets added to the queue and processed in turn.
  var queue = Object.keys(this.entities_).map(
      function (entityId) {
        return +entityId;
      });
  while (queue.length) {
    var childId = queue.shift();
    var child = this.entities_[childId];
    var modifiedParentIds = {}; // Updated parent ids for this child.
    for (var parentId in child.parentIds) {
      parentId = +parentId;
      // If no entity for parentId exists, create an entity. This is how the
      // DAG is grown (from the bottom up).
      if (!this.entities_[parentId]) {
        var parentMetadata = metadata.getEntity(parentId);
        var parent = {};
        parent.name = parentMetadata.names[0];
        parent.parentIds = parentMetadata.parentIds;
        parent.childIds = o3v.util.createSet();
        this.entities_[parentId] = parent;
        if (symmetries[parentId]) {
          // If parent is symmetric, create its left and right children along
          // with it. One of these children becomes the parent of the child
          // entity. For example 'left thumb' becomes the child of 'hand' and
          // 'left hand', and 'left hand' is the child of 'hand'.
          var symmetry = symmetries[parentId];
          o3v.util.forEach(HANDEDNESS_, function (handedness) {
            var subParentId = symmetry.childIds[handedness];
            var subParent = {};
            subParent.name = symmetry.singularName;
            subParent.parentIds = o3v.util.createSet();
            subParent.parentIds[parentId] = true;
            subParent.childIds = o3v.util.createSet();

            parent.childIds[subParentId] = true;

            this.entities_[subParentId] = subParent;

            // New subParent needs to be processed.
            queue.push(subParentId);
          }, this);
        }
        // New parent needs to be processed.
        queue.push(parentId);
      }
      // Now that the parent is guaranteed to exist, hook up the child to it.
      var parent = this.entities_[parentId];
      if (symmetries[parentId] && !parent.childIds[childId]) {
        // This is the child of a symmetric entity.
        if (symmetries[childId]) {
          // This entity itself is symmetric, so the following connections
          // need to be made:
          // a -> b
          // a -> left_a          * done prior to this code executing
          // a -> right_a         * done prior to this code executing
          // b -> left_b          * done prior to this code executing
          // b -> right_b         * done prior to this code executing
          // left_a -> left_b
          // right_a -> right_b
          var parentSymmetry = symmetries[parentId];
          var childSymmetry = symmetries[childId];

          // a -> b
          modifiedParentIds[parentId] = true;
          parent.childIds[childId] = true;

          // left_a -> left_b && right_a -> right_b
          o3v.util.forEach(HANDEDNESS_, function (handedness) {
            var subParentId = parentSymmetry.childIds[handedness];
            var subChildId = childSymmetry.childIds[handedness];
            var subParent = this.entities_[subParentId];
            var subChild = this.entities_[subChildId];
            subParent.childIds[subChildId] = true;
            subChild.parentIds[subParentId] = true;
          }, this);
        } else {
          // This entity is not symmetric, which means it
          // belongs under either the left or right child of its parent.
          var handedness = getHandedness(childId, child);
          var symmetry = symmetries[parentId];
          var subParentId = symmetry.childIds[handedness];
          var subParent = this.entities_[subParentId];

          if (subParent) {
            subParent.childIds[childId] = true;
            modifiedParentIds[subParentId] = true;
          } else {
            this.log_.error('no subparent for ', parent.name,
                            ' -> ', child.name);
          }
        }
      } else {
        // Regular parent->child; not symmetric.
        parent.childIds[childId] = true;
        modifiedParentIds[parentId] = true;
      }
    }
    // Incorporate changes due to symmetries.
    child.parentIds = modifiedParentIds;
  }
};

/**
 * Computes the root entity and verifies there is only one.
 * This sets this.rootId_.
 * @private
 */
o3v.EntityModel.prototype.computeRoot_ = function () {
  // Compute root node.
  o3v.util.forEach(
  this.entities_, function (entity, entityId) {
    if (o3v.util.isEmpty(entity.parentIds)) {
      if (!this.rootId_) {
        this.rootId_ = entityId;
      } else {
        this.log_.error('MULTIPLE ROOTS', this.rootId_, ' ', entityId,
                        ' ', this.entities_[this.rootId_].name,
                        ' ', this.entities_[entityId].name);
      }
    }
  }, this);
};

/**
 * Computes bounding boxes and their centers for all entities.
 * This sets bbox and ctr on all the entities.
 * This must get called before bboxes are read.
 * @param {Object.<string, Array.<number>> leafBboxesByExternalId
 * @private
 */
o3v.EntityModel.prototype.computeBboxes = function (leafBboxesByExternalId) {
  var leafIds = this.getLeafIds(this.rootId_);
  o3v.util.forEach(
      leafIds,
      function(unused_true, entityId) {
        var entity = this.entities_[entityId];
        entity.bbox = leafBboxesByExternalId[entity.externalId];
      }, this);

  var dirty = leafIds; // dirty = need to propagate change up
  var queue = Object.keys(leafIds);
  while (queue.length) {
    var nodeId = queue.shift();
    if (dirty[nodeId]) {
      delete dirty[nodeId];
      var node = this.entities_[nodeId];
      o3v.util.forEach(
          node.parentIds,
          function (unused_true, parentId) {
            var parent = this.entities_[parentId];
            if (node.bbox !== undefined) {
              parent.bbox = o3v.growBBox(parent.bbox, node.bbox);
              dirty[parentId] = true;
              queue.push(parentId);
            } else {
              o3v.log.error('error adding ', node.name, ' to ', parent.name);
            }
          }, this);
    }
  }

  // Compute bbox centers.
  o3v.util.forEach(
      this.entities_,
      function (entity) {
        if (entity.bbox !== undefined) {
          entity.ctr = [];
          entity.ctr[0] = 0.5 * (entity.bbox[0] + entity.bbox[3]);
          entity.ctr[1] = 0.5 * (entity.bbox[1] + entity.bbox[4]);
          entity.ctr[2] = 0.5 * (entity.bbox[2] + entity.bbox[5]);
        } else {
          o3v.log.error('no bbox or center for entity', entity);
        }
      });
};

/**
 * Computes the set of entityIds that best splits this group entity. It returns
 * null if the entity is unsplittable, or if it's impossible to split it into
 * fewer than MAX_SPLIT_COUNT_ subentities.
 * Note: Both the entity and entity id are passed in to simplify the recursion.
 * @param {Object} entity Entity.
 * @param {number} entityId Entity id.
 * @return {Object.<number, boolean>?} Set of entity ids.
 * @private
 */
o3v.EntityModel.prototype.computeOneSplit_ = function (entity, entityId) {
  if (!entity.childIds) {
    return null;
  }

  var split = {};

  // If this is a synonym, delegate.
  if (o3v.util.getObjectCount(entity.childIds) == 1) {
    var childId = +(Object.keys(entity.childIds)[0]);
    return this.computeOneSplit_(this.getEntity(childId), childId);
  }

  var leafIds = this.getLeafIds(entityId);

  // Generate child groups.
  var childGroupIdToGroupLeafIds = {};
  for (var childId in entity.childIds) {
    if (!this.unselectable_[childId]) {
      var childLeafIds = this.getLeafIds(+childId);
      if (childLeafIds && o3v.util.getObjectCount(childLeafIds) > 1) {
        childGroupIdToGroupLeafIds[childId] = childLeafIds;
      }
    }
  }

  // Sort child groups by number of subelements.
  var childGroupIds = Object.keys(childGroupIdToGroupLeafIds);
  childGroupIds.sort(function (a, b) {
    return (o3v.util.getObjectCount(childGroupIdToGroupLeafIds[b]) - o3v.util.getObjectCount(childGroupIdToGroupLeafIds[a]));
  });

  // Add useful child groups to split.
  childGroupIds.forEach(
      function (childGroupId) {
        var useful = false;
        var childLeafIds = childGroupIdToGroupLeafIds[childGroupId];
        for (var childLeafId in childLeafIds) {
          if (leafIds[childLeafId]) {
            useful = true;
            break;
          }
        }
        if (useful) {
          split[childGroupId] = true;
          for (var childLeafId in childLeafIds) {
            delete leafIds[childLeafId];
          }
        }
      });

  // Add any individual leafs unaccounted for.
  for (var leafId in leafIds) {
    if (!this.unselectable_[leafId]) {
      split[leafId] = true;
    }
  }

  if (o3v.util.getObjectCount(split) <= 1) {
    // Leaf entity or group - unsplittable.
    return null;
  } else if (o3v.util.getObjectCount(split) <= o3v.EntityModel.MAX_SPLIT_COUNT_) {
    return split;
  } else {
    this.log_.warning('entity ', entity.name,' splits into too many: ',
                      o3v.util.getObjectCount(split), ' ', split);
    if (o3v.debug) {
      return split;
    } else {
      return null;
    }
  }
};

/**
 * Computes the best split (where possible) for group entities.
 * This sets split_ on this.entities_.
 * @private
 */
o3v.EntityModel.prototype.computeSplits_ = function () {
  // TODO(dkogan): This needs to go into the pipeline, but requires that
  // the pipeline be model-specific.
  o3v.util.forEach(this.entities_, function (entity, entityId) {
    if (!this.unselectable_[entityId]) {
      var split = this.computeOneSplit_(entity, entityId);
      if (split) {
        entity.split_ = split;
      }
    }
  }, this);
};

/**
 * Propagates layer information down to leaf entities. If entityId is leaf, the
 * layer is set on that leaf. Otherwise, the function is called recursively on
 * all the entity's children.
 * @param {number} layerId Entity id of the layer to propagate.
 * @param {number} entityId Entity id to propagate through.
 * @private
 */
o3v.EntityModel.prototype.propagateLayerDown_ = function (layerId, entityId) {
  var entity = this.entities_[entityId];
  if (!entity.layers) {
    entity.layers = {};
  }
  if (!entity.childIds) {
    entity.layers[layerId] = true;
  } else {
    // TODO(dkogan): Implement without recursion. Should be okay for now.
    for (var childId in entity.childIds) {
      this.propagateLayerDown_(layerId, +childId);
    }
  }
};

/**
 * Propagates layer information up through the tree. The layer is set on both
 * the current entity, and all its ancestors (recursively).
 * @param {number} layerId Entity id of the layer to propagate.
 * @param {number} entityId Entity id to propagate through.
 * @private
 */
o3v.EntityModel.prototype.propagateLayerUp_ = function (layerId, entityId) {
  var entity = this.entities_[entityId];
  if (!entity.layers) {
    entity.layers = {};
  }
  entity.layers[layerId] = true;
  // TODO(dkogan): Implement without recursion. Should be okay for now.
  for (var parentId in entity.parentIds) {
    this.propagateLayerUp_(layerId, +parentId);
  }
};

/**
 * Computes layer information on all entities. Leaf entities are analogous
 * to render groups, and must be in exactly one layer. All other entities are
 * considered to be in every layer in which one of their children is. Thus,
 * the root entity is in every layer, and 'elbow' may be in 'muscle' and
 * 'skeleton' layers.
 * This sets layers on this.entities_.
 * @param {o3v.EntityMetadata} metadata Metadata.
 * @private
 */
o3v.EntityModel.prototype.computeLayers_ = function (metadata) {
  // Compute initial layers.
  Object.keys(metadata.getLayers()).forEach(
      function (layerId) {
        // Use external ids for layers, not names.
        // TODO(dkogan): We should split up layers and groups
        // to avoid this kind of hack.
        if (this.entities_[layerId]) {
          var layerName = metadata.getEntity(layerId).externalId;
          this.layerNames_.push(layerName);
          this.entities_[layerId].externalId = layerName;
          this.layerNameToId_[layerName] = layerId;
        }
      }, this);

  // Pass layer info to the child nodes.
  Object.keys(metadata.getLayers()).forEach(
      function (layerId) {
        if (this.entities_[layerId]) {
          this.propagateLayerDown_(layerId, layerId);
        }
      }, this);

  // Sanity check - any leaf entity must be in exactly one layer.
  o3v.util.forEach(this.entities_, function (entity) {
    if (!entity.childIds && (!entity.layers || o3v.util.getObjectCount(entity.layers) != 1)) {
      this.log_.error('leaf entity not in one layer: ', entity.name);
    }
  }, this);

  // Propagate layer info up through the tree.
  o3v.util.forEach(this.entities_, function (entity, entityId) {
    if (!entity.childIds) {
      this.propagateLayerUp_(
      Object.keys(entity.layers)[0], entityId);
    }
  }, this);

  // Turn layers into arrays for easier processing.
  o3v.util.forEach(
  this.entities_, function (entity) {
    if (!o3v.util.isEmpty(entity.layers)) {
      entity.layers = Object.keys(entity.layers);
    }
  });
};

/**
 * Computes layer information on all entities. Leaf entities are analogous
 * to render groups, and must be in exactly one layer. All other entities are
 * considered to be in every layer in which one of their children is. Thus,
 * the root entity is in every layer, and 'elbow' may be in 'muscle' and
 * 'skeleton' layers.
 * This sets this.searchMatcher_ and this.searchToEntityIds_.
 * @param {o3v.EntityMetadata} metadata Metadata.
 * @private
 */
o3v.EntityModel.prototype.computeSearches_ = function (metadata) {
  var symmetries = metadata.getSymmetries();

  // Compute search table.
  for (var entityId in this.entities_) {
    entityId = +entityId;
    if (!this.nonSearchableEntityIds_[entityId]) {
      var names = metadata.getEntity(entityId).names.slice(0);
      // Use singular form as the primarywhen searching, for aesthetics.
      if (symmetries[entityId]) {
        names[0] = symmetries[entityId].singularName;
      }
      // TODO(dkogan): Expand this to be able to handle 'left lung'.
      names.forEach(
          function (name) {
            o3v.util.setIfUndefined(this.searchToEntityIds_, name, []);
            this.searchToEntityIds_[name].push(entityId);
          }, this);
    }
  }

  var searches = Object.keys(this.searchToEntityIds_);
  searches.sort(function (a, b) {
    return a.length - b.length;
  });

  this.autocompleteList_ = searches;
};

/**
 * Get a selectable entity by traversing the DAG up. This function tries to find
 * the smallest group of entities that includes the current entity, and is
 * selectable. In many cases, this is just the current entity. Note that no
 * guarantee is made about whether this is actually the smallst group - this
 * function is heuristical.
 * @param {number} entityId Entity id to start from.
 * @return {number} Entity id of the group.
 * @private
 */
// TODO(dkogan): Extend this function to generically unexplode entities.
// TODO(dkogan): Move this calculation into the pipeline.
o3v.EntityModel.prototype.getSelectable_ = function (entityId) {
  if (!this.unselectable_[entityId]) {
    return entityId;
  } else {
    // Recurse on parent id with fewest children.
    var parentIds = Object.keys(this.entities_[entityId].parentIds);

    var minCount = o3v.util.getObjectCount(this.getRootEntity().childIds) + 1;
    var minParentId = -1;
    parentIds.forEach(
        function (parentId) {
          var parent = this.entities_[parentId];
          var count = o3v.util.getObjectCount(parent.childIds);
          if (count < minCount) {
            minCount = count;
            minParentId = parentId;
          }
        }, this);
    if (minParentId == -1) {
      this.log_.error('Unable to find entity id under click.');
      return this.rootId_;
    } else {
      return this.getSelectable_(minParentId);
    }
  }
};

/**
 * Maps an external id to an internal id.
 * @param {string} externalId External id.
 * @return {number} The internal id.
 */
o3v.EntityModel.prototype.externalIdToId = function (externalId) {
  return this.getSelectable_(this.externalIdToId_[externalId]);
};

/**
 * Gets an entity object by id.
 * @param {number} entityId The id of the entity.
 * @return {Object} The entity.
 */
o3v.EntityModel.prototype.getEntity = function (entityId) {
  return this.entities_[entityId];
};

/**
 * Gets the root entity. (Entity, not just entity id.)
 * @return {Object} The root entity.
 */
o3v.EntityModel.prototype.getRootEntity = function () {
  return this.entities_[this.rootId_];
};

/**
 * Gets the set of leaf entities in any subtree.
 * @param {number} entityId The root of the subtree.
 * @return {Object.<number, boolean>} Set of leaf entity ids.
 */
o3v.EntityModel.prototype.getLeafIds = function (entityId) {
  var leafIds = {};
  var entity = this.entities_[entityId];
  if (!entity.childIds) {
    leafIds[entityId] = true;
    return leafIds;
  } else {
    for (var childId in entity.childIds) {
      o3v.util.extendObject(leafIds, this.getLeafIds(+childId));
    }
    return leafIds;
  }
};

/**
 * Checks to see if entity is splittable.
 * @param {number} entityId The entity to try to split.
 * @return {boolean} True if entity is splittable.
 */
o3v.EntityModel.prototype.isSplittable = function (entityId) {
  return !!this.getEntity(entityId).split_;
};

/**
 * Gets the minimal split of the entity. Returns undefined if no split is
 * possible.
 * @param {number} entityId The entity id to split.
 * @return {Object.<number, boolean>?} Entity ids into which to split.
 */
o3v.EntityModel.prototype.getSplit = function (entityId) {
  return this.getEntity(entityId).split_;
};

/** Gets layer names.
 * @return Array.<string> Layer names
 */
o3v.EntityModel.prototype.getLayerNames = function() {
  return this.layerNames_;
};

/**
 * Maps a layer name to id.
 * @param {string} layerName Name of the layer.
 * @return {number} Entity id of the layer.
 */
o3v.EntityModel.prototype.layerNameToId = function (layerName) {
  return this.layerNameToId_[layerName];
};

/**
 * Maps a search term to a set of matching entity ids.
 * @param {string} search The search term.
 * @return {Object.<number, boolean>?} Matching entity ids.
 */
o3v.EntityModel.prototype.searchToEntityIds = function (search) {
  return this.searchToEntityIds_[search];
};

/**
 * Gets the search matcher for this model.
 * @return {Array.<string>} Array of search strings.
 */
o3v.EntityModel.prototype.getAutocompleteList = function () {
  return this.autocompleteList_;
};

/**
 * Gets sublayer information. For explanation of datastructure, see
 * sublayers_ member in EntityMetadata.
 * @return {Object.<number, Array.<Array.<number>>>} Sublayers.
 */
o3v.EntityModel.prototype.getSublayers = function () {
  return this.sublayers_;
};
// Copyright 2011 Google Inc. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * @fileoverview This object keeps track of the model currently loaded.
 *               On initialization, loads model 0 in o3v.MODELS.
 */
o3v.ContentManager = function() {
  this.models_ = o3v.MODELS;
  this.metadata_ = null;
  this.currentModel_ = -1;  // Force it to cycle to the first model.

  // metadata caches.
  this.scriptsLoaded_ = {};  // e.g. adult_female.js
  this.metadataLoaded_ = {};  // e.g. entity_metadata.json
};

o3v.ContentManager.prototype.nextModel = function(loadModelInfoCallback,
                                                  loadMeshCallback,
                                                  loadModelCallback,
                                                  loadMetadataCallback) {
  this.currentModel_ = (this.currentModel_ + 1) % this.models_.length;

  loadModelInfoCallback(this.models_[this.currentModel_]);

  this.loadModel_(this.models_[this.currentModel_],
                  loadMeshCallback, loadModelCallback, loadMetadataCallback);
};

o3v.ContentManager.prototype.getCurrentModelInfo = function() {
  return this.models_[this.currentModel_];
};

o3v.ContentManager.prototype.loadModel_ =
    function(modelInfo,
             loadMeshCallback,  // After each mesh
             loadModelCallback,  // After all meshes
             loadMetadataCallback  // After metadata
             ) {
  // First, load javascript.
  var scriptPath = modelInfo.modelPath + modelInfo.scriptName;
  if (this.scriptsLoaded_[scriptPath]) {
    this.loadModelAfterScript_(modelInfo, loadMeshCallback, loadModelCallback,
                               loadMetadataCallback);
  } else {
    $.getScript(scriptPath, function() {
        this.scriptsLoaded_[scriptPath] = true;
        this.loadModelAfterScript_(modelInfo, loadMeshCallback,
                                   loadModelCallback,
                                   loadMetadataCallback);
       
      }.bind(this));
  }
};

o3v.ContentManager.prototype.loadModelAfterScript_ =
    function(modelInfo,
             loadMeshCallback,  // After each mesh
             loadModelCallback,  // After all meshes
             loadMetadataCallback  // After metadata
             ) {
  // Call out to webgl loader.
  downloadModel(modelInfo.modelPath, modelInfo.name, loadMeshCallback,
                loadModelCallback);

  // Load metadata.
  this.loadMetadata_(modelInfo.modelPath + modelInfo.metadataFile,
                     MODELS[modelInfo.name],
                     loadMetadataCallback);
};

o3v.ContentManager.prototype.loadMetadata_ = function(metadataPath,
                                                      modelMetadata,
                                                      callback) {
  console.log("inside loadMetadata_");
  var cached_metadata = this.metadataLoaded_[metadataPath];
  if (cached_metadata) {
    this.metadata_ = cached_metadata;
    callback();
      console.log("inside loadMetadata_ cached");
  } else {
    var self = this;
      console.log("Metadata_ not cached" + metadataPath);
    function onload(req) {
      // TODO: error handling.
		console.log("inside loadMetadata_ not cached onload success");
        var metadata = new o3v.EntityMetadata(JSON.parse(req.responseText));
        self.metadata_ = new o3v.EntityModel(modelMetadata, metadata);
        self.metadataLoaded_[metadataPath] = this.metadata_;
        console.log(metadata);
        callback();
    };

    getHttpRequest(metadataPath, onload);
  }
};

o3v.ContentManager.prototype.getMetadata = function() {
  return this.metadata_;
};
// Copyright 2011 Google Inc. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * @fileoverview Generic opacity slider manager - allows for multiple clients
 *               to control the opacity of layers.
 */
o3v.LayerOpacityManager = function() {
  // If not null, an array of opacities sorted by outside-first.
  this.layerOpacities_ = null;

  // Functions to call on change.
  this.callbacks = [];
};

o3v.LayerOpacityManager.prototype.init = function(numLayers) {
  this.layerOpacities_ = [];
  for (var i = 0; i < numLayers; ++i) {
    this.layerOpacities_.push(1.0);
  }
};

o3v.LayerOpacityManager.prototype.getLayerOpacities = function () {
  return this.layerOpacities_;
};

o3v.LayerOpacityManager.prototype.setLayerOpacity =
    function (layer, value, from) {
  this.layerOpacities_[layer] = value;
  this.updateAllBut(from);
};

o3v.LayerOpacityManager.prototype.setLayerOpacities = function(values, from) {
  this.layerOpacities_ = values.slice(); // makes copy
  this.updateAllBut(from);
};

o3v.LayerOpacityManager.prototype.addView = function(callback) {
  var numViews = this.callbacks.length;
  for (var i = 0; i < numViews; ++i) {
    if (this.callbacks[i] == callback) {
      return;
    }
  }
  this.callbacks.push(callback);
};

o3v.LayerOpacityManager.prototype.updateAllBut = function (from) {
  var numViews = this.callbacks.length;
  for (var i = 0; i < numViews; ++i) {
    var callback = this.callbacks[i];
    if (callback != from) {
      callback();
    }
  }
};
// Copyright 2011 Google Inc. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * @fileoverview Code to make and keep track of hash changes.
 */

/**
 * History object. Tracks history using the url hash tag, enables restoring
 * deep links into the application, and navigating using back/forward.
 * @param {Window!} win Window object. Passed in so it can be mocked out in
 *                     test.
 * @constructor
 */
o3v.History = function(win) {
  /**
   * Window object. Used for timeouts, and to set the hash.
   * @type {Window}
   * @private
   */
  this.window_ = win;

  /**
   * Registry of callabacks to save and restore state.
   * { '<component>' : [ <getStateCallback>, <restoreStateCallback> ] }
   * @type {Object.<string,Array.<Function>>}
   * @private
   */
  this.registry_ = {};
};

/**
 * Index of function to get state in the callback registry.
 * @type {number}
 * @const
 * @private
 */
o3v.History.GET_STATE_ = 0;

/**
 * Index of function to restore state in the callback registry.
 * @type {number}
 * @const
 * @private
 */
o3v.History.RESTORE_STATE_ = 1;

/**
 * Time for which the state needs to remain static prior to being recorded.
 * @type {number}
 * @const
 * @private
 */
o3v.History.UPDATE_DELAY_MS_ = 1 * 1000;

/**
 * Timeout used to buffer sequences of state changes.
 * @type {number|undefined}
 * @private
 */
o3v.History.prototype.timeout_;

/**
 * This is set to indicate that the next navigation event is to be ignored.
 * Used when this object itself is the one setting the history.
 * @type {boolean}
 * @private
 */
o3v.History.prototype.suppressed_ = false;

/**
 * Begins history tracking. In most cases, this should be called after all
 * calls to register(). Exception is if you want to temporarily register a
 * component.
 */
o3v.History.prototype.start = function() {
  $(this.window_).bind('hashchange', function(a) {
      this.restoreState_(this.window_.location.hash);
    }.bind(this));

  // Initial restore.
  this.restoreState_(this.window_.location.hash);
};

/**
 * Clears the hash, thus completely resetting the view to initial state.
 */
o3v.History.prototype.reset = function() {
  // Clear any pending updates to the URL.
  if (this.timeout_) {
    this.window_.clearTimeout(this.timeout_);
  }
  this.window_.location.hash = '';
};

/**
 * Registers a component for history storage.
 * @param {string} id A unique id for your component. Shorter is better.
 * @param {function() : string } getStateCallback A function that returns a
 *                               string that represents the component's state.
 * @param {function(string) : * } restoreStateCallback A function that takes
 *                                a string representing state and restores the
 *                                component's state.
 */
o3v.History.prototype.register = function(
    id, getStateCallback, restoreStateCallback) {
  if (this.registry_[id] !== undefined) {
    o3v.log.error('id ', id, ' already registered in history');
  }
  this.registry_[id] = [getStateCallback, restoreStateCallback];
};

/**
 * Removes a component from history storage.
 * @param {string} id Id of the component to unregister.
 */
o3v.History.prototype.unregister = function(id) {
  delete this.registry_[id];
};

/**
 * Call this to indicate a state change. If opt_immediate is not set, this
 * starts a timeout which waits for the state to become stable. This prevents
 * a sequence of updates from creating a large number of history updates.
 * @param {boolean=} opt_immediate If true, force the state to update
 *                   immediately.
 */
o3v.History.prototype.update = function(opt_immediate) {
  if (this.timeout_) {
    this.window_.clearTimeout(this.timeout_);
  }
  var state = this.generateState_();

  var updateFunction = function() {
      var newState = this.generateState_();
      if (newState == state) {
        // State has stabilized, so record it in the history.
        if (this.window_.location.hash != state) {
          this.suppressed_ = true;
          o3v.log.info('history saving state: ' + state);
          this.window_.location.hash = state;
        }
      } else {
        // State has not stabilized, try waiting again.
        this.update();
      }
    }.bind(this);
  if (opt_immediate) {
    this.timeout_ = undefined;
    updateFunction();
  } else {
    this.timeout_ = this.window_.setTimeout(updateFunction,
                                            o3v.History.UPDATE_DELAY_MS_);
  }
};

/**
 * Encodes a string for url inclusion. This is basically encodeURIComponent
 * with some changes to make the kinds of urls we generate more readable.
 * Specifically, it does not encode plus, colon, comma and semicolon.
 * @param {string} decoded String to be encoded.
 * @return {string} The encoded string.
 * @private
 */
o3v.History.prototype.encode_ = function(decoded) {
  var encoded = encodeURIComponent(decoded);
  // Undo confusing and unnecessary encoding.
  encoded = encoded.replace(/%2B/g, '+');
  encoded = encoded.replace(/%3A/g, ':');
  encoded = encoded.replace(/%2C/g, ',');
  encoded = encoded.replace(/%3B/g, ';');
  return encoded;
};

/**
 * Decodes a string from url inclusion. This is the reverse of encode_
 * and obeys the same exceptions.
 * @param {string} encoded String to be decoded.
 * @return {string} The decoded string.
 * @private
 */
o3v.History.prototype.decode_ = function(encoded) {
  // Any future additions - note that this is done in reverse order from
  // encode_.
  encoded = encoded.replace(/;/g, '%3B');
  encoded = encoded.replace(/,/g, '%2C');
  encoded = encoded.replace(/:/g, '%3A');
  encoded = encoded.replace(/\+/g, '%2B');
  var decoded = decodeURIComponent(encoded);
  return decoded;
};

/**
 * Generates the current state by querying each registered component.
 * @return {string} The current state, properly encoded for a url.
 * @private
 */
o3v.History.prototype.generateState_ = function() {
  var state = [];
  for (var id in this.registry_) {
    var componentState = this.registry_[id][o3v.History.GET_STATE_]();
    state.push(id + '=' + this.encode_(componentState));
  }
  return state.join('&');
};

/**
 * Restores the current state by calling each registered component.
 * Note: This first calls restoreState on each component with ''
 *       to reset to baseline. The components need to properly handle
 *       the double call this can incur.
 * @param {string} state The current state, url-encoded.
 * @private
 */
o3v.History.prototype.restoreState_ = function(state) {
  try {
    if (this.suppressed_) {
      this.suppressed_ = false;
      return;
    }
    o3v.log.info('history restoring state: ' + state);
    // Reset the states.
    for (var id in this.registry_) {
      this.registry_[id][o3v.History.RESTORE_STATE_]('');
    }
    // Restore any component that has a state.
    state = state.replace(/^#/, '');
    var tokens = state.split('&');
    for (var tokenIndex = 0; tokenIndex < tokens.length; tokenIndex++) {
      var tuple = tokens[tokenIndex].split('=');
      if (tuple.length == 2) {
        var id = tuple[0];
        if (this.registry_[id]) {
          var componentState = this.decode_(tuple[1]);
          this.registry_[id][o3v.History.RESTORE_STATE_](componentState);
        }
      }
    }
  } catch (err) {
    // Ignore all errors - these might be caused by
    // legacy urls.
    o3v.log_.warning('history restoring state', err);
  }
};
// Copyright 2011 Google Inc. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * @fileoverview Layer controls for main UI of open-3d-viewer.
 */
// TODO(arthurb): Objectify.
o3v.LayersUI = function(layerOpacityManager) {
  this.layerOpacityManager_ = layerOpacityManager;

  this.singleSlider_ = new o3v.LayersUI.SingleSlider(layerOpacityManager);
  this.multiSlider_ = new o3v.LayersUI.MultiSlider(layerOpacityManager);
  this.icons_ = new o3v.LayersUI.Icons(layerOpacityManager);
  this.sliderToggle_ = new o3v.LayersUI.SliderToggle(this.singleSlider_,
                                                     this.multiSlider_);
};

o3v.LayersUI.ICON_WIDTH = 45;
o3v.LayersUI.ICON_HEIGHT = 47;

/*
 * Builds all slider UI.
 */
o3v.LayersUI.prototype.buildAll = function(putBelow, numLayers, iconFile) {
  this.singleSlider_.build(putBelow, numLayers);
  this.multiSlider_.build(putBelow, numLayers);
  this.icons_.build(putBelow, numLayers, iconFile);
  this.sliderToggle_.build(this.icons_.getLastIcon());
};

/*
 * A slider with one handle. Moving the slider from one end to the other
 * transitions the model from 100% transparent (i.e., invisible) to 100%
 * opaque.
 */
o3v.LayersUI.SingleSlider = function(layerOpacityManager) {
  this.layerOpacityManager_ = layerOpacityManager;

  this.updateCallback_ = this.update.bind(this);

  this.slider = null;
  this.range = 10000;
  this.numLayers = 0;
  this.HANDLE_WIDTH = 51;
};

o3v.LayersUI.SingleSlider.prototype.build = function(putBelow, numLayers) {
  this.numLayers = numLayers;
  if (this.slider) {
    this.slider.remove();
  }

  this.slider = $('<div>').appendTo('body').slider({
   orientation: 'vertical',
   range: 'min',
   min: 0,
   max: this.range,
   value: this.range,
   slide: function (event, ui) {
        this.setOpacitiesFromFraction(ui.value / this.range);
      }.bind(this),
   stop: function() {
        document.activeElement.blur();  // take focus off slider handle
      }
    }).css({
        'position': 'absolute',
        'border': 'none',
        'border-left': '2px solid #92e497',
        'border-right': '2px solid #92e497',
        'border-radius': 0,
        'background': 'none',
        'width': o3v.LayersUI.ICON_WIDTH + 'px',
        'height': (this.numLayers * o3v.LayersUI.ICON_HEIGHT) + 'px',
        'z-index': o3v.uiSettings.ZINDEX_MAINUI
      }).position({
       my: 'top',
       at: 'bottom',
       of: putBelow,
       collision: 'none'
        });

  var sliderNodes = this.slider.get(0).childNodes;
  var sliderBgStyle = sliderNodes[0].style;
  sliderBgStyle.background = 'none';
  var sliderHandleStyle = sliderNodes[1].style;
  sliderHandleStyle.width = this.HANDLE_WIDTH + 'px';
  sliderHandleStyle.opacity = 0.7;
  sliderHandleStyle.outlineStyle = 'none';

  this.setOpacitiesFromFraction(1.0);

  this.layerOpacityManager_.addView(this.updateCallback_);
};

o3v.LayersUI.SingleSlider.prototype.setOpacitiesFromFraction =
    function (fraction) {
  var scaled = fraction * this.numLayers;
  var opacities = [];
  for (var i = 0; i < this.numLayers; ++i) {
    if (scaled <= i) {
      opacities.push(0.0);
    } else if (scaled >= i + 1) {
      opacities.push(1.0);
    } else {
      opacities.push(scaled - i);
    }
  }
  this.layerOpacityManager_.setLayerOpacities(opacities, this.updateCallback_);
};

o3v.LayersUI.SingleSlider.prototype.show = function(show) {
  this.slider.css({
      'visibility': show ? 'visible' : 'hidden'
          });
};

o3v.LayersUI.SingleSlider.prototype.update = function () {
  var opacities = this.layerOpacityManager_.getLayerOpacities();
  var numLayers = opacities.length;
  var fraction = 0;
  for (var i = numLayers - 1; i > -1; --i) {
    if (opacities[i] > 0) {
      fraction = (i + opacities[i]) / numLayers;
      break;
    }
  }
  this.slider.slider('value', fraction * this.range);
};

/*
 * A collection of sliders, one handle per layer. Moving each slider from one
 * end to the other transitions just that layer from 100% transparent (i.e.
 * invisible) to 100% opaque.
 */
o3v.LayersUI.MultiSlider = function(layerOpacityManager) {
  this.layerOpacityManager_ = layerOpacityManager;

  this.updateCallback_ = this.update.bind(this);

  this.sliders = null;
  this.range = 10000;
  this.numLayers = 0;
  this.HANDLE_HEIGHT = 43;
};

o3v.LayersUI.MultiSlider.prototype.build = function(putBelow, numLayers) {
  if (this.sliders) {
    for (var i = 0; i < this.numLayers; ++i) {
      this.sliders[i].remove();
    }
  }
  this.sliders = [];

  this.numLayers = numLayers;
  for (i = 0; i < this.numLayers; ++i) {
    var newSlider = $('<div>').appendTo('body').slider({
     orientation: 'horizontal',
     range: 'min',
     min: 0,
     max: this.range,
     value: this.range,
     slide: function (event, ui) {
          var layer = (this.sliders.length - 1) - $(event.target).data('id');
          this.layerOpacityManager_.setLayerOpacity(
              layer, ui.value / this.range, this.updateCallback_);
        }.bind(this),
     stop: function() {
          document.activeElement.blur();  // take focus off slider handle
        }
      }).css({
          'position': 'absolute',
          'border': 'none',
          'border-left': '2px solid #92e497',
          'border-right': '2px solid #92e497',
          'border-radius': 0,
          'background': 'none',
          'visibility': 'hidden',
          'width': o3v.LayersUI.ICON_WIDTH + 'px',
          'height': o3v.LayersUI.ICON_HEIGHT + 'px',
          'z-index': o3v.uiSettings.ZINDEX_MAINUI
        }).position({
         my: 'top',
         at: 'bottom',
         of: i === 0 ? putBelow : this.sliders[i - 1],
         collision: 'none'
          }).data('id', i);

    this.sliders.push(newSlider);
    var sliderNodes = newSlider.get(0).childNodes;
    var sliderBgStyle = sliderNodes[0].style;
    sliderBgStyle.background = 'none';
    var sliderHandleStyle = sliderNodes[1].style;
    sliderHandleStyle.height = this.HANDLE_HEIGHT + 'px';
    sliderHandleStyle.opacity = 0.7;
    sliderHandleStyle.outlineStyle = 'none';
  }

  this.layerOpacityManager_.addView(this.updateCallback_);
};

o3v.LayersUI.MultiSlider.prototype.show = function(show) {
  var numSliders = this.sliders.length;
  for (var i = 0; i < numSliders; ++i) {
    this.sliders[i].css({
        'visibility': show ? 'visible' : 'hidden'
            });
  }
};

o3v.LayersUI.MultiSlider.prototype.update = function() {
  var opacities = this.layerOpacityManager_.getLayerOpacities();
  var numSliders = this.sliders.length;
  for (var i = 0; i < numSliders; ++i) {
    var layer = (numSliders - 1) - i;
    this.sliders[i].slider('value', opacities[layer] * this.range);
  }
};

/*
 * A stack of decorative icons that sit under the layer sliders and change
 * opacity as the layers do.
 */
o3v.LayersUI.Icons = function(layerOpacityManager) {
  this.layerOpacityManager_ = layerOpacityManager;

  this.updateCallback_ = this.update.bind(this);

  this.activeIcons = [];
  this.inactiveIcons = [];
  this.lastIcon = null;
};

o3v.LayersUI.Icons.prototype.getLastIcon = function() {
  return this.lastIcon;
};

o3v.LayersUI.Icons.prototype.build = function(putBelow, numLayers, iconFile) {
  if (this.activeIcons) {
    var numIcons = this.activeIcons.length;
    for (var i = 0; i < numIcons; ++i) {
      this.activeIcons[i].remove();
      this.inactiveIcons[i].remove();
    }
    this.activeIcons = [];
    this.inactiveIcons = [];
  }

  for (i = 0; i < numLayers; ++i) {
    var offsetTop = i * o3v.LayersUI.ICON_HEIGHT;

    var inactiveIcon = $('<div>').appendTo('body').css({
        'position': 'absolute',
        'width': o3v.LayersUI.ICON_WIDTH + 'px',
        'height': o3v.LayersUI.ICON_HEIGHT + 'px',
        'background-image': 'url(' + iconFile + ')',
        'background-position': '0px -' + offsetTop + 'px',
        'z-index': o3v.uiSettings.ZINDEX_MAINUI_STATUS_LOWER
      });
    this.inactiveIcons.push(inactiveIcon);
    inactiveIcon.position({
     my: 'top',
            at: 'bottom',
            of: i === 0 ? putBelow : this.inactiveIcons[i - 1],
            collision: 'none'
            });

    var activeIcon = $('<div>').appendTo('body').css({
        'position': 'absolute',
        'width': o3v.LayersUI.ICON_WIDTH + 'px',
        'height': o3v.LayersUI.ICON_HEIGHT + 'px',
        'background-image': 'url(' + iconFile + ')',
        'background-position': '-' + o3v.LayersUI.ICON_WIDTH + 'px -' + offsetTop + 'px',
        'z-index': o3v.uiSettings.ZINDEX_MAINUI_STATUS_UPPER
      });
    this.activeIcons.push(activeIcon);
    activeIcon.position({
     my: 'top',
            at: 'bottom',
            of: i === 0 ? putBelow : this.activeIcons[i - 1],
            collision: 'none'
            });
  }

  this.lastIcon = this.activeIcons[this.activeIcons.length - 1];
  this.layerOpacityManager_.addView(this.updateCallback_);
};

/*
 * Updates icons based on layer opacities.
 */
 o3v.LayersUI.Icons.prototype.update = function() {
   var opacities = this.layerOpacityManager_.getLayerOpacities();
   var numIcons = this.activeIcons.length;
   for (var i = 0; i < numIcons; ++i) {
     var layer = (numIcons - 1) - i;
     this.activeIcons[i].get(0).style.opacity = opacities[layer];
   }
 };

/*
 * A button that switches between single- and multiple-slider modes.
 */
o3v.LayersUI.SliderToggle = function(singleSlider, multiSlider) {
  this.button = null;
  this.single = true;

  this.singleSlider_ = singleSlider;
  this.multiSlider_ = multiSlider;
};

o3v.LayersUI.SliderToggle.prototype.build = function (lastIcon) {
  if (this.button) {
    this.button.remove();
  }

  this.button = $('<div>').appendTo('body').css({
      'position': 'absolute',
      'width': '45px',
      'height': '50px',
      'border-left': '2px solid #92e497',
      'border-bottom-left-radius': '16px',
      'border-bottom-right-radius': '16px',
      'border-bottom': '2px solid #92e497',
      'border-right': '2px solid #92e497',
      'border-top': '1px solid #c2ffb7',
      'background-position': 'center center',
      'background-repeat': 'no-repeat',
      'background-color': '#fff',
      'z-index': o3v.uiSettings.ZINDEX_MAINUI_STATUS_UPPER
    }).position({
     my: 'top',
     at: 'bottom',
     of: lastIcon,
     collision: 'none'
      }).click(this.toggleSliders.bind(this));

  this.setArt();
};

o3v.LayersUI.SliderToggle.prototype.setArt = function() {
  this.button.css({
      'background-image': this.single ? 'url(img/toggle_single_slider.png)' : 'url(img/toggle_multiple_sliders.png)'
    });
};

o3v.LayersUI.SliderToggle.prototype.toggleSliders = function() {
  this.single = !this.single;
  this.setArt();

  this.singleSlider_.show(this.single);
  this.multiSlider_.show(!this.single);
};
// Copyright 2011 Google Inc. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * @fileoverview Platform-specific gestures for open-3d-viewer.
 */

o3v.Gestures = function() {
  this.isMac_ = navigator.platform &&
                (navigator.platform.indexOf('Mac') == 0);
};

// Reports whether a click should be treated as a "hide" gesture.
// On Windows and other non-Mac platforms, we use ctrl-click for hide. On Mac,
// we use command-click, because ctrl-click brings up a context menu.
o3v.Gestures.prototype.isHideClick = function(controlKeyDown, metaKeyDown) {
  if (controlKeyDown && !this.isMac_) return true;
  if (metaKeyDown && this.isMac_) return true;
  return false;
};// Copyright 2011 Google Inc. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * @fileoverview Code to make and keep track of selections.
 */

// changeCallback: function to call when anything has changed.
//                 after this is called, should repeatedly call
//                 recalculate until it stops returning true.
o3v.SelectManager = function(changeCallback) {
  this.changeCallback_ = changeCallback;

  // map of selected layer name -> refcount of entities in layer
  this.layerSelectionRefcount_ = {};

  // Includes pending.
  // Map of entityId -> entity
  // TODO(dkogan): Generalize to arbitrary number of groups and
  // behaviors.
  this.selectedEntities_ = {};
  this.pinnedEntities_ = {};
  this.hiddenEntities_ = {};

  // Map of entity -> opacity interpolant
  // If an entity is in this map, then it is being changed
  // (being hidden/selected/pinned/unhidden/unselected)
  this.interpolants_ = {};
  // Predefined storage for current and other layer interpolants.
  this.CURRENT_LAYER_INTERPOLANT = -1;
  this.OTHER_LAYER_INTERPOLANT = -2;

  // The interpolants behave as follows:
  // 0 = same opacity as would be otherwise.
  // 1 = completely visibile
  // -1 = completely hidden
  // TODO(wonchun): work out some math/libraries to combine these. Figure
  // out associativity properties.

  // Layer with selection behavior varies depending on how many layers have
  // selections in them.
  this.CURRENT_LAYER_OPACITY_MAX_MODIFIER = -0.8;  // 20% opaque.
  this.CURRENT_LAYER_OPACITY_MODIFIER_STEP = 0.1;
  this.CURRENT_LAYER_OPACITY_MIN_MODIFIER = -0.9;  // 10% opaque.
  this.OTHER_LAYER_OPACITY_DEMOTION = 0.15;

  this.PINNED_ENTITY_OPACITY_MODIFIER = 1.0;
  this.SELECTED_ENTITY_OPACITY_MODIFIER = 1.0;
  this.HIDDEN_ENTITY_OPACITY_MODIFIER = -1.0;
  this.NEUTRAL_OPACITY_MODIFIER = 0;

  // Modes for explicit UI of selecting multiple / hiding / etc.
  this.mode_ = 0;
  this.MODE_NORMAL = 0;
  this.MODE_PIN = 1;
  this.MODE_HIDE = 2;
};

//////////////////////////////////////////////////////////////////////
// INITIALIZATION METHODS
//////////////////////////////////////////////////////////////////////

o3v.SelectManager.prototype.reset = function(entityStore) {
  this.reset_();
  this.mode_ = this.MODE_NORMAL;
  // TODO(dkogan): Reinstate history.
  //this.history = history;
  //this.history.register('sel', this.getState, this.restoreState);

  this.entityStore_ = entityStore;
};

o3v.SelectManager.prototype.getState = function() {
  // Note that selection is stored last intentionally, because otherwise,
  // it would get clobbered by pinning / hiding.
  return ('p:' + Object.keys(this.pinnedEntities_).join(',') +
          ';h:' + Object.keys(this.hiddenEntities_).join(',') +
          ';s:' + Object.keys(this.selectedEntities_).join(',') +
          ';c:' + this.getSelectedLayerOpacityModifier() +
          ';o:' + this.getOtherLayerOpacityModifier());
};

o3v.SelectManager.prototype.restoreState = function(state) {
  this.reset_();
  if (state) {
    var tuples = state.split(';');
    for (var tupleIndex in tuples) {
      var tuple = tuples[tupleIndex].split(':');
      if (tuple[0] == 's') {
        this.selectMultiple(tuple[1].split(','), true);
      } else if (tuple[0] == 'p') {
        this.pinMultiple(tuple[1].split(','), true);
      } else if (tuple[0] == 'h') {
        this.hideMultiple(tuple[1].split(','), true);
      } else if (tuple[0] == 'c') {
        this.setFuture_(this.CURRENT_LAYER_INTERPOLANT,
                        parseFloat(tuple[1]), 1);
      } else if (tuple[0] == 'o') {
        this.setFuture_(this.OTHER_LAYER_INTERPOLANT,
                        parseFloat(tuple[1]), 1);
      }
    }
  }
  this.signalChange_(true);
};

///////////////////////////////////////////////////////////////////////////
// Helper methods.
///////////////////////////////////////////////////////////////////////////

// Resets without generating a history event.
o3v.SelectManager.prototype.reset_ = function() {
  this.clearHidden(true);
  this.clearPinned(true);
  this.clearSelected(true);
  this.interpolants_[this.CURRENT_LAYER_INTERPOLANT] =
  new o3v.Interpolant(this.NEUTRAL_OPACITY_MODIFIER);
  this.interpolants_[this.OTHER_LAYER_INTERPOLANT] =
  new o3v.Interpolant(this.NEUTRAL_OPACITY_MODIFIER);
};

// Returns true if this is a selectable entity.
o3v.SelectManager.prototype.entityAllowed_ = function(entityId) {
  if (!entityId || !this.entityStore_.getEntity(entityId)) {
    return false;
  } else {
    return true;
  }
};

o3v.SelectManager.prototype.calculateSelectedLayerOpacityModifier_ =
    function() {
  // Demote selected layer opacity by number of selected layers.
  var mod = (this.CURRENT_LAYER_OPACITY_MAX_MODIFIER +
             this.CURRENT_LAYER_OPACITY_MODIFIER_STEP);
  for (var layer in this.layerSelectionRefcount_) {
    if (this.layerSelectionRefcount_[layer])
      mod -= this.CURRENT_LAYER_OPACITY_MODIFIER_STEP;
  }
  if (mod < this.CURRENT_LAYER_OPACITY_MIN_MODIFIER) {
    mod = this.CURRENT_LAYER_OPACITY_MIN_MODIFIER;
  }
  return mod;
};

// Update opacities to reflect a change in the selection
// mode of an entity.
// Selected trumps Pinned trumps Hidden.
o3v.SelectManager.prototype.setFutureOpacities_ =
    function(entityId, priorOpacityModifier) {
  if (this.selectedEntities_[entityId]) {
    this.setFuture_(entityId, this.SELECTED_ENTITY_OPACITY_MODIFIER,
                    priorOpacityModifier);
  } else if (this.pinnedEntities_[entityId]) {
    this.setFuture_(entityId, this.PINNED_ENTITY_OPACITY_MODIFIER,
                    priorOpacityModifier);
  } else if (this.hiddenEntities_[entityId]) {
    this.setFuture_(entityId, this.HIDDEN_ENTITY_OPACITY_MODIFIER,
                    priorOpacityModifier);
  } else {
    this.setFuture_(entityId, this.NEUTRAL_OPACITY_MODIFIER,
                    priorOpacityModifier);
  }
  this.setFutureLayerOpacities_();
};

// Set future layer opacities based on existence of selection.
o3v.SelectManager.prototype.setFutureLayerOpacities_ = function() {
  if (this.haveSelected()) {
    var selectedLayerOpacityModifier =
        this.calculateSelectedLayerOpacityModifier_();
    var hiddenLayerOpacityModifier =
        Math.max(selectedLayerOpacityModifier -
                 this.OTHER_LAYER_OPACITY_DEMOTION, -1);

    this.setFuture_(this.CURRENT_LAYER_INTERPOLANT,
                    selectedLayerOpacityModifier,
                    this.getEntityOpacityModifier(
                        this.CURRENT_LAYER_INTERPOLANT));
    this.setFuture_(this.OTHER_LAYER_INTERPOLANT,
                    hiddenLayerOpacityModifier,
                    this.getEntityOpacityModifier(
                        this.OTHER_LAYER_INTERPOLANT));

  } else {
    this.setFuture_(this.CURRENT_LAYER_INTERPOLANT,
                    this.NEUTRAL_OPACITY_MODIFIER,
                    this.getEntityOpacityModifier(
                        this.CURRENT_LAYER_INTERPOLANT));
    this.setFuture_(this.OTHER_LAYER_INTERPOLANT,
                    this.NEUTRAL_OPACITY_MODIFIER,
                    this.getEntityOpacityModifier(
                        this.OTHER_LAYER_INTERPOLANT));
  }
};

// Sets the future opacity modifier for an entity.
o3v.SelectManager.prototype.setFuture_ =
    function(entityId, futureValue, priorOpacityModifier) {
  if (!this.interpolants_[entityId]) {
    this.interpolants_[entityId] = new o3v.Interpolant(
        priorOpacityModifier);
  }
  this.interpolants_[entityId].setFuture(futureValue);
};

// Indicate to the outside world (renderer and history manager)
// that something has changed inside select.js.
o3v.SelectManager.prototype.signalChange_ = function(opt_skipHistory) {
  this.changeCallback_();
  if (!opt_skipHistory) {
    // TODO(dkogan): Reinstate history.
    //this.history.update();
  }
};

o3v.SelectManager.prototype.selectEntity_ = function(entityId) {
  var entity = this.entityStore_.getEntity(entityId);
  if (entity && !this.selectedEntities_[entityId]) {
    var priorOpacityModifier = this.getEntityOpacityModifier(entityId);

    // Bump refcount in associated layer.
    entity.layers.forEach(
        function(layer) {
         o3v.util.setIfUndefined(
             this.layerSelectionRefcount_, layer, 0);
         this.layerSelectionRefcount_[layer]++;
        }, this);

    // Select entity
    this.selectedEntities_[entityId] = entity;

    // Set opacities.
    this.setFutureOpacities_(entityId, priorOpacityModifier);
  }
};

o3v.SelectManager.prototype.unselectEntity_ = function(entityId) {
  var entity = this.selectedEntities_[entityId];
  if (entity) {
    var priorOpacityModifier = this.getEntityOpacityModifier(entityId);

    entity.layers.forEach(
        function(layer) {
         this.layerSelectionRefcount_[layer]--;
        }, this);
    delete this.selectedEntities_[entityId];
    this.setFutureOpacities_(entityId, priorOpacityModifier);
  }
};

o3v.SelectManager.prototype.hideEntity_ = function(entityId) {
  var entity = this.entityStore_.getEntity(entityId);
  if (entity && !this.hiddenEntities_[entityId]) {
    var priorOpacityModifier = this.getEntityOpacityModifier(entityId);
    this.hiddenEntities_[entityId] = entity;
    this.setFutureOpacities_(entityId, priorOpacityModifier);
  }
};

o3v.SelectManager.prototype.unhideEntity_ = function(entityId) {
  var entity = this.hiddenEntities_[entityId];
  if (entity) {
    var priorOpacityModifier = this.getEntityOpacityModifier(entityId);
    delete this.hiddenEntities_[entityId];
    this.setFutureOpacities_(entityId, priorOpacityModifier);
  }
};

o3v.SelectManager.prototype.pinEntity_ = function(entityId) {
  var entity = this.entityStore_.getEntity(entityId);
  if (entity && !this.pinnedEntities_[entityId]) {
    var priorOpacityModifier = this.getEntityOpacityModifier(entityId);
    this.pinnedEntities_[entityId] = entity;
    this.setFutureOpacities_(entityId, priorOpacityModifier);
  }
};

o3v.SelectManager.prototype.unpinEntity_ = function(entityId) {
  var entity = this.pinnedEntities_[entityId];
  if (entity) {
    var priorOpacityModifier = this.getEntityOpacityModifier(entityId);
    delete this.pinnedEntities_[entityId];
    this.setFutureOpacities_(entityId, priorOpacityModifier);
  }
};

//////////////////////////////////////////////////////////////////////
// PUBLIC METHODS
//////////////////////////////////////////////////////////////////////

// Returns -1 for hidden, 0 for default, 1 for visible, and values in between
// for transitional states.
o3v.SelectManager.prototype.getEntityOpacityModifier = function(entityId) {
  if (this.interpolants_[entityId]) {
    return this.interpolants_[entityId].getPresent();
  } else if (this.hiddenEntities_[entityId]) {
    return this.HIDDEN_ENTITY_OPACITY_MODIFIER;
  } else if (this.selectedEntities_[entityId]) {
    return this.SELECTED_ENTITY_OPACITY_MODIFIER;
  } else if (this.pinnedEntities_[entityId]) {
    return this.PINNED_ENTITY_OPACITY_MODIFIER;
  } else {
    return this.NEUTRAL_OPACITY_MODIFIER;
  }
};

o3v.SelectManager.prototype.getSelectedLayerOpacityModifier = function() {
  return this.getEntityOpacityModifier(this.CURRENT_LAYER_INTERPOLANT);
};

o3v.SelectManager.prototype.getOtherLayerOpacityModifier = function() {
  return this.getEntityOpacityModifier(this.OTHER_LAYER_INTERPOLANT);
};

o3v.SelectManager.prototype.haveSelected = function() {
  return !o3v.util.isEmpty(this.selectedEntities_);
};

o3v.SelectManager.prototype.havePinned = function() {
  return !o3v.util.isEmpty(this.pinnedEntities_);
};

o3v.SelectManager.prototype.haveHidden = function() {
  return !o3v.util.isEmpty(this.hiddenEntities_);
};

o3v.SelectManager.prototype.getLayersWithSelected = function() {
  var layers = {};
  o3v.util.forEach(this.layerSelectionRefcount_, function(count, layer) {
      if (count > 0) {
        layers[layer] = true;
      }
    });
  return layers;
};

o3v.SelectManager.prototype.getLayersWithPinned = function() {
  var layers = {};
  var pinned = this.getPinned();
  o3v.util.forEach(this.getPinned(), function(entity, entityId) {
      entity.layers.forEach(
          function(layer) {
           layers[layer] = true;
          });
    });
  return layers;
};

o3v.SelectManager.prototype.getPinned = function() {
  return this.pinnedEntities_;
};

o3v.SelectManager.prototype.getSelected = function() {
  return this.selectedEntities_;
};

o3v.SelectManager.prototype.getHidden = function() {
  return this.hiddenEntities_;
};

//////////////////////////////////////////////////////////////////////
// HIDE
//////////////////////////////////////////////////////////////////////
o3v.SelectManager.prototype.hide = function(entityId, opt_skipHistory) {
  this.hideMultiple([entityId], opt_skipHistory);
};
o3v.SelectManager.prototype.hideMultiple =
    function(entityIds, opt_skipHistory) {
  entityIds.forEach(
      function(entityId) {
       if (this.entityAllowed_(entityId)) {
         // Hidden is not allowed to be selected or pinned.
         this.unselect(entityId, opt_skipHistory);
         this.unpin(entityId, opt_skipHistory);
         this.hideEntity_(entityId);
       }
      }, this);
  this.signalChange_(opt_skipHistory);
};
o3v.SelectManager.prototype.unhide = function(entityId, opt_skipHistory) {
  this.unhideEntity_(entityId);
  this.signalChange_(opt_skipHistory);
};
o3v.SelectManager.prototype.clearHidden = function(opt_skipHistory) {
  if (!opt_skipHistory) {
    o3v.Analytics.trackPage('/ui/clear-hidden');
  }
  for (var entityId in this.hiddenEntities_) {
    this.unhideEntity_(entityId);
  }
  this.signalChange_(opt_skipHistory);
};

//////////////////////////////////////////////////////////////////////
// SELECT
//////////////////////////////////////////////////////////////////////
o3v.SelectManager.prototype.select = function(entityId, opt_skipHistory) {
  this.selectMultiple([entityId], opt_skipHistory);
};
o3v.SelectManager.prototype.selectMultiple =
    function(entityIds, opt_skipHistory) {
  this.clearSelected(false, true);  // Only allowing a single selection.
  entityIds.forEach(
      function(entityId) {
       if (this.entityAllowed_(entityId)) {
         this.selectEntity_(entityId);
       }
      }, this);
  this.signalChange_(opt_skipHistory);
};
o3v.SelectManager.prototype.unselect = function(entityId, opt_skipHistory) {
  this.unselectEntity_(entityId);
  this.signalChange_(opt_skipHistory);
};
o3v.SelectManager.prototype.clearSelected = function(opt_skipHistory,
                                                     opt_noSignal) {
  for (var entity in this.selectedEntities_) {
    this.unselectEntity_(entity);
  }
  if (!opt_noSignal) {
    this.signalChange_(opt_skipHistory);
  }
};

//////////////////////////////////////////////////////////////////////
// PIN
//////////////////////////////////////////////////////////////////////
o3v.SelectManager.prototype.pin = function(entityId, opt_skipHistory) {
  this.pinMultiple([entityId], opt_skipHistory);
};
o3v.SelectManager.prototype.pinMultiple = function(entityIds, opt_skipHistory) {
  entityIds.forEach(
      function(entityId) {
       if (this.entityAllowed_(entityId)) {
         // Pinned is not allowed to be selected or hidden.
         this.unhide(entityId, opt_skipHistory);
         this.unselect(entityId, opt_skipHistory);
         this.pinEntity_(entityId, opt_skipHistory);
       }
      }, this);
  this.signalChange_(opt_skipHistory);
};
o3v.SelectManager.prototype.unpin = function(entityId, opt_skipHistory) {
  this.unpinEntity_(entityId);
  this.signalChange_(opt_skipHistory);
};
o3v.SelectManager.prototype.togglePin = function(entityId) {
  if (this.pinnedEntities_[entityId]) {
    this.unpin(entityId);
  } else {
    this.pin(entityId);
  }
};
o3v.SelectManager.prototype.togglePinMultiple = function(entityIds) {
  entityIds.forEach(
      function(entityId) {
       this.togglePin(entityId);
      }, this);
};
o3v.SelectManager.prototype.clearPinned = function(opt_skipHistory) {
  if (!opt_skipHistory) {
    o3v.Analytics.trackPage('/ui/clear-pinned');
  }
  for (var entity in this.pinnedEntities_) {
    this.unpinEntity_(entity);
  }
  this.signalChange_(opt_skipHistory);
};

///////////////////////////////////////////////////////////////////////////
// Undifferentiated Selection.
///////////////////////////////////////////////////////////////////////////
o3v.SelectManager.prototype.pickMultiple = function(entityIds) {
  if (this.mode_ == this.MODE_PIN) {
    this.togglePinMultiple(entityIds);
  } else if (this.mode_ == this.MODE_HIDE) {
    this.hideMultiple(entityIds);
  } else {
    if (entityIds.length == 1 && this.selectedEntities_[entityIds] &&
        o3v.util.getObjectCount(this.selectedEntities_) == 1) {
      // This is a pick of the currently selected entity, so deselect it.
      this.clearSelected();
    } else {
      this.selectMultiple(entityIds);
    }
  }
};

//////////////////////////////////////////////////////////////////////
// Expand
//////////////////////////////////////////////////////////////////////
o3v.SelectManager.prototype.expandSelected = function(entityId) {
  var newSelected = {};
  // NOTE(dkogan): These are two different types of maps, but that's okay
  // because we're just using their keys.
  o3v.util.extendObject(newSelected,
                        this.entityStore_.getSplit(entityId));
  o3v.util.extendObject(newSelected, this.getSelected());
  delete newSelected[entityId];
  this.selectMultiple(
      Object.keys(newSelected));
};

o3v.SelectManager.prototype.expandPinned = function(entityId) {
  this.unpin(entityId);
  this.pinMultiple(
      Object.keys(this.entityStore_.getSplit(entityId)));
};

///////////////////////////////////////////////////////////////////////////
// Mode control.
///////////////////////////////////////////////////////////////////////////
o3v.SelectManager.prototype.setMode = function(mode) {
  this.mode_ = mode;
};

///////////////////////////////////////////////////////////////////////////
// Render interface.
///////////////////////////////////////////////////////////////////////////

// Callback from rendering. Returns true if something has changed.
o3v.SelectManager.prototype.recalculate = function() {
  var updates = false;
  var garbage = [];
  // TODO(wonchun): use Interpolant registration to handle stuff
  // like this. Dynamic interoplant insert/remove require a bit
  // more logic (like that below). Also consider using a "freelist" of
  // interpolators to avoid GC churn.
  // Updates interpolant state, and marks defunct interpolators.
  for (var entityId in this.interpolants_) {
    var interpolant = this.interpolants_[entityId];
    var more_updates = interpolant.tween();
    updates |= more_updates;
    // Is this an interpolant we can reclaim?
    if (entityId != this.CURRENT_LAYER_INTERPOLANT &&
        entityId != this.OTHER_LAYER_INTERPOLANT &&
        !more_updates) {
      // TODO(wonchun): is it possible to simply delete this here?
      garbage.push(entityId);
    }
  }

  // Sweeps defunct interpolators.
  garbage.forEach(function(entityId) {
      delete this.interpolants_[entityId];
    }, this);

  return updates;
};

o3v.SelectManager.prototype.clearSelection = function() {
  this.clearHidden(true);
  this.clearPinned(true);
  this.clearSelected(true);
};
// Copyright 2011 Google Inc. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * @fileoverview Javascript to render labels for selected objects.
 */

o3v.Label = function(inputHandler, selectManager, renderInterface,
                     canvas, labelContainer, navigator, gestures) {
  // Map of entityId -> { type -> <id>,
  //                      dom -> <dom element> }
  this.currentLabels_ = {};

  this.navigator_ = navigator;
  this.gestures_ = gestures;

  // Label types
  this.types_ = {};
  this.types_[o3v.Label.TYPE_SELECT_] = { className : 'label_select' };
  this.types_[o3v.Label.TYPE_SELECT_EXPANDABLE_] =
    { className : 'label_select_expandable' };
  this.types_[o3v.Label.TYPE_PIN_] = { className : 'label_pin' };
  this.types_[o3v.Label.TYPE_PIN_EXPANDABLE_] = { className :
                                                  'label_pin_expandable' };

  this.inputHandler_ = inputHandler;  // For creating label click handlers.
  this.selectManager_ = selectManager;  // For calculating what to label.
  this.renderInterface_ = renderInterface;  // For calculating label coords.
  this.canvas_ = canvas;  // For adjusting labels into the visible area.

  this.labelContainer_ = labelContainer;  // Div that contains the labels.

  this.showBoundingBox_ = false;
};

o3v.Label.TYPE_SELECT_ = 0;
o3v.Label.TYPE_SELECT_EXPANDABLE_ = 1;
o3v.Label.TYPE_PIN_ = 2;
o3v.Label.TYPE_PIN_EXPANDABLE_ = 3;

// Width of icons in px.
o3v.Label.EXPAND_ICON_WIDTH_ = 18;
o3v.Label.PIN_ICON_WIDTH_ = 18;
o3v.Label.CLOSE_ICON_WIDTH_ = 18;

// Toggle bounding box disaly.
o3v.Label.prototype.toggleBoundingBox = function() {
  this.showBoundingBox_ = !this.showBoundingBox_;

  var corner = 0;
  for (var corner = 0; corner < 8; corner++) {
    $('#r' + corner)[0].style.left = '-100px';
    $('#r' + corner)[0].style.top = '-100px';
  }
};

// Reset entity store.
o3v.Label.prototype.reset = function(entityStore) {
  this.entityStore_ = entityStore;
};

// Helper to unregister click handler.
o3v.Label.prototype.unregisterLabel_ = function(labelInfo) {
  this.inputHandler_.unregisterHandler(this.inputHandler_.CLICK, labelInfo.dom);
  $(labelInfo.dom).remove();
};

// Remove all labels.
o3v.Label.prototype.clearLabels = function() {
  o3v.util.forEach(this.currentLabels_,
                      this.inputHandler.unregisterLabel_.bind(this));
  this.currentLabels_ = {};
};

// Update label display.
o3v.Label.prototype.refresh = function() {
  // Get new labels.
  var newLabels = {};

  // Selected style overrides pinned style for the duration of selection.
  for (var entityId in this.selectManager_.getPinned()) {
    newLabels[entityId] = (
        this.entityStore_.isSplittable(entityId) ?
        { type : o3v.Label.TYPE_PIN_EXPANDABLE_ } :
        { type : o3v.Label.TYPE_PIN_ });
  }
  for (var entityId in this.selectManager_.getSelected()) {
    newLabels[entityId] = (
        this.entityStore_.isSplittable(entityId) ?
        { type : o3v.Label.TYPE_SELECT_EXPANDABLE_ } :
        { type : o3v.Label.TYPE_SELECT_ });
  }

  // Find labels that need to be deleted and delete them.
  var labelsToDelete = [];
  o3v.util.forEach(this.currentLabels_, function(labelInfo, entityId) {
      if (!newLabels[entityId] ||
          newLabels[entityId].type != labelInfo.type) {
        labelsToDelete.push(entityId);
      }
    }, this);
  labelsToDelete.forEach(function(entityId) {
      this.unregisterLabel_(this.currentLabels_[entityId]);
      delete this.currentLabels_[entityId];
    }, this);

  // Adjust position of labels that need to be adjusted.
  o3v.util.forEach(this.currentLabels_, function(labelInfo, entityId) {
      var coords = this.getCoords_(entityId);
      var label = labelInfo.dom;
      // Set position, taking into account size.
      label.style.left = (
          '' + Math.round(coords[0] - label.offsetWidth / 2) + 'px');
      label.style.top = (
          '' + Math.round(coords[1] - label.offsetHeight / 2) + 'px');
    }, this);

  // Find labels that need to be added and add them.
  o3v.util.forEach(newLabels, function(labelInfo, entityId) {
      if (!this.currentLabels_[entityId]) {
        var coords = this.getCoords_(entityId);
        var text = this.entityStore_.getEntity(entityId).name;
        var className = this.types_[labelInfo.type].className;

        var label = $('<div>').addClass(className).text(text)
            .appendTo(this.labelContainer_).get(0);

        // Set position, taking into account size.
        label.style.left = (
            '' + Math.round(coords[0] - label.offsetWidth / 2) + 'px');
        label.style.top = (
            '' + Math.round(coords[1] - label.offsetHeight / 2) + 'px');

        // Register click handler.
        this.inputHandler_.registerHandler(
            o3v.InputHandler.CLICK, label,
            this.makeHandler_(entityId, label, labelInfo.type).bind(this),
            true);

        // Save this entity in the list of labeled entities.
        this.currentLabels_[entityId] = { type: labelInfo.type,
                                          dom: label };
      }
    }, this);
};

// The handler is somewhat complicated by the fact that there are potentially
// three areas to click (label, "+" expander, "x" closer) and the label can be
// clicked with modifiers.
o3v.Label.prototype.makeHandler_ = function(entityId, label, type) {
  if (type == o3v.Label.TYPE_SELECT_ ||
      type == o3v.Label.TYPE_SELECT_EXPANDABLE_) {
    return function(clientX, clientY, modifiers) {
      var labelRect = label.getBoundingClientRect();
      if ((type == o3v.Label.TYPE_SELECT_EXPANDABLE_ ) &&
          (clientX - labelRect.left < o3v.Label.EXPAND_ICON_WIDTH_)) {
        this.selectManager_.expandSelected(entityId);
      } else if (clientX > (labelRect.right - o3v.Label.CLOSE_ICON_WIDTH_)) {
        this.selectManager_.unselect(entityId);
      } else if (clientX > (labelRect.right -
                            (o3v.Label.PIN_ICON_WIDTH_ +
                             o3v.Label.CLOSE_ICON_WIDTH_))) {
        this.selectManager_.pin(entityId);
      } else if (modifiers[o3v.InputHandler.SHIFT]) {
        this.selectManager_.pin(entityId);
      } else if (this.gestures_.isHideClick(
          modifiers[o3v.InputHandler.CONTROL],
          modifiers[o3v.InputHandler.META])) {
        this.selectManager_.hide(entityId);
      } else if (o3v.util.getObjectCount(this.selectManager_.getSelected()) > 1) {
        this.selectManager_.select(entityId);
      } else {
        this.selectManager_.clearSelected();
      }
      if (this.selectManager_.haveSelected()) {
        this.navigator_.goToBBox(
            this.navigator_.unifyBoundingBoxes(
                this.selectManager_.getSelected()),
            true);
      } else {
        this.navigator_.resetNavParameters();
      }
    };
  } else {
    // PIN
    return function(clientX, clientY, modifiers) {
      var labelRect = label.getBoundingClientRect();
      if ((type == o3v.Label.TYPE_PIN_EXPANDABLE_ ) &&
          (clientX - labelRect.left < o3v.Label.EXPAND_ICON_WIDTH_)) {
        this.selectManager_.expandPinned(entityId);
      } else if (this.gestures_.isHideClick(
          modifiers[o3v.InputHandler.CONTROL],
          modifiers[o3v.InputHandler.META])) {
        this.selectManager_.hide(entityId);
      } else if (modifiers[o3v.InputHandler.SHIFT]) {
        this.selectManager_.unpin(entityId);
      } else {
        if (clientX > (labelRect.right - o3v.Label.CLOSE_ICON_WIDTH_)) {
          this.selectManager_.unpin(entityId);
        } else {
          this.selectManager_.select(entityId);
          if (this.selectManager_.haveSelected()) {
            this.navigator_.goToBBox(
                this.navigator_.unifyBoundingBoxes(
                    this.selectManager_.getSelected()),
                true);
          } else {
            this.navigator_.resetNavParameters();
          }
        }
      }
    };
  }
};

o3v.Label.prototype.getCoords_ = function(entityId) {
  var entity = this.selectManager_.entityStore_.getEntity(entityId);
  var coords = this.renderInterface_.getViewportCoords(entity.ctr);

  // Move to avoid obscuring.
  var xs = [entity.bbox[0], entity.bbox[3]];
  var ys = [entity.bbox[1], entity.bbox[4]];
  var zs = [entity.bbox[2], entity.bbox[5]];

  var corner = 0;
  for (var xIndex in xs) {
    for (var yIndex in ys) {
      for (var zIndex in zs) {
        var corner3d = [xs[xIndex], ys[yIndex], zs[zIndex]];
        var corner2d = this.renderInterface_.getViewportCoords(corner3d);
        coords[1] = Math.max(coords[1], corner2d[1]);

        if (this.showBoundingBox_) {
          $('#r' + corner)[0].style.left = Math.round(corner2d[0]) + 'px';
          $('#r' + corner)[0].style.top = Math.round(corner2d[1]) + 'px';
          corner++;
        }
      }
    }
  }
  // Push the label down completely out of the bounding box.
  // (close enough).
  coords[1] += 20;
  // Bring it back into view if it's too far down.
  var maxHeight = this.canvas_['clientHeight'] - 75;
  if (coords[1] > maxHeight) {
    coords[1] = maxHeight;
  }
  // And if it's too far left or right.
  // TODO(arthurb): This should be based on the actual label width.
  coords[0] = Math.max(75, coords[0]);
  coords[0] = Math.min(this.canvas_['clientWidth'] - 75,
                       coords[0]);

  return coords;
};
// Copyright 2011 Google Inc. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * @fileoverview Navigational controls for main UI of open-3d-viewer.
 */
o3v.navUI = function(reset, move, zoom) {
  homeBtn = null;
  upBtn = null;
  leftBtn = null;
  rightBtn = null;
  downBtn = null;
  zoomIn = null;
  zoomOut = null;

  this.reset_ = reset;
  this.move_ = move;
  this.zoom_ = zoom;

  var navBtnStyles = {
    'position': 'absolute',
    'width': '20px',
    'height': '20px',
    'z-index': o3v.uiSettings.ZINDEX_MAINUI
  };

  this.navHome = $('<div>').appendTo('body').css(navBtnStyles).css({
      'left': '30px',
      'top': '84px'
    }).button({
     icons: {
       primary: 'ui-icon-home'
     },
     text: false
      }).click(function () {
          this.reset_();
        }.bind(this));
  var homeEl = this.navHome.get(0);
  this.navUp = $('<div>').appendTo('body').css(navBtnStyles).button({
   icons: {
     primary: 'ui-icon-triangle-1-n'
   },
   text: false
    }).position({
     my: 'bottom',
     at: 'top',
     of: homeEl,
     collision: 'none'
      }).click(function () {
          this.move_(0, -o3v.navUI.MOVE_FACTOR);
        }.bind(this));
  this.navLeft = $('<div>').appendTo('body').css(navBtnStyles).button({
   icons: {
     primary: 'ui-icon-triangle-1-w'
   },
   text: false
    }).position({
     my: 'right',
     at: 'left',
     of: homeEl,
     collision: 'none'
      }).click(function () {
          this.move_(-o3v.navUI.MOVE_FACTOR, 0);
        }.bind(this));
  this.navRight = $('<div>').appendTo('body').css(navBtnStyles).button({
   icons: {
     primary: 'ui-icon-triangle-1-e'
   },
   text: false
    }).position({
     my: 'left',
     at: 'right',
     of: homeEl,
     collision: 'none'
      }).click(function () {
          this.move_(o3v.navUI.MOVE_FACTOR, 0);
        }.bind(this));
  this.navDown = $('<div>').appendTo('body').css(navBtnStyles).button({
   icons: {
     primary: 'ui-icon-triangle-1-s'
   },
   text: false
    }).position({
     my: 'top',
     at: 'bottom',
     of: homeEl,
     collision: 'none'
      }).click(function () {
          this.move_(0, o3v.navUI.MOVE_FACTOR);
        }.bind(this));
  this.navZoomIn = $('<div>').appendTo('body').css(navBtnStyles).button({
   icons: {
     primary: 'ui-icon-plus'
   },
   text: false
    }).position({
     my: 'top',
     at: 'bottom',
     of: this.navDown.get(0),
     offset: '0 16',
     collision: 'none'
      }).click(function () {
          this.zoom_(0, o3v.navUI.ZOOM_FACTOR);
        }.bind(this));
  this.navZoomOut = $('<div>').appendTo('body').css(navBtnStyles).button({
   icons: {
     primary: 'ui-icon-minus'
   },
   text: false
    }).position({
     my: 'top',
     at: 'bottom',
     of: this.navZoomIn.get(0),
     collision: 'none'
      }).click(function () {
          this.zoom_(0, -o3v.navUI.ZOOM_FACTOR);
        }.bind(this));
};

o3v.navUI.MOVE_FACTOR = 10;
o3v.navUI.ZOOM_FACTOR = 50;
// Copyright 2011 Google Inc. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * @fileoverview JavaScript to navigate.
 */

// TODO(dkogan): Replace this with generic functions in the mat4 namespace.
o3v.math = {};
/**
 * Subtracts two vectors.
 * @param {!tdl.math.Vector} a Operand vector.
 * @param {!tdl.math.Vector | Float32Array} b Operand vector.
 * @return {!tdl.math.Vector} The difference of a and b.
 */
o3v.math.subVector = function(a, b) {
  var r = [];
  var aLength = a.length;
  for (var i = 0; i < aLength; ++i)
    r[i] = a[i] - b[i];
  return r;
};
/**
 * Converts degrees to radians.
 * @param {number} degrees A value in degrees.
 * @return {number} the value in radians.
 */
o3v.math.degToRad = function(degrees) {
  return degrees * Math.PI / 180;
};

/**
 * Computes the dot product of two vectors; assumes that a and b have
 * the same dimension.
 * @param {!tdl.math.Vector} a Operand vector.
 * @param {!tdl.math.Vector} b Operand vector.
 * @return {number} The dot product of a and b.
 */
o3v.math.dot = function(a, b) {
  var r = 0.0;
  var aLength = a.length;
  for (var i = 0; i < aLength; ++i)
    r += a[i] * b[i];
  return r;
};
/**
 * Computes the cross product of two vectors; assumes both vectors have
 * three entries.
 * @param {!tdl.math.Vector} a Operand vector.
 * @param {!tdl.math.Vector} b Operand vector.
 * @return {!tdl.math.Vector} The vector a cross b.
 */
o3v.math.cross = function(a, b) {
  return [a[1] * b[2] - a[2] * b[1],
          a[2] * b[0] - a[0] * b[2],
          a[0] * b[1] - a[1] * b[0]];
};
/**
 * Divides a vector by its Euclidean length and returns the quotient.
 * @param {!tdl.math.Vector} a The vector.
 * @return {!tdl.math.Vector} The normalized vector.
 */
o3v.math.normalize = function(a) {
  var r = [];
  var n = 0.0;
  var aLength = a.length;
  for (var i = 0; i < aLength; ++i)
    n += a[i] * a[i];
  n = Math.sqrt(n);
  if (n > 0.00001) {
    for (var i = 0; i < aLength; ++i)
      r[i] = a[i] / n;
  } else {
    r = [0,0,0];
  }
  return r;
};

o3v.Navigator = function(changeCallback, canvas, history) {
  this.changeCallback_ = changeCallback;
  this.canvas_ = canvas;
  this.rootBbox_ = null;

  this.camera = {};
  this.originCamera = {};

  // When to start doing capsule top rotation
  this.rotationStartPercent = 0.01;
  this.entityCapsule = false;

  this.interpolants = [];
  this.dolly = {};
  this.theta = {};
  this.phi = 0;

  // Constants for reducing the deltas for movement
  this.rotationReduction = 0.01;
  this.zoomReduction = 0.05;
  this.verticalReduction = 0.1;

  // Constants for limits on movement
  this.verticalAdjustmentPercent = 0.9;
  this.verticalAdjustment = 100;   // set in setNavParameters
  this.vertMaxLimit = {};          // set in setNavParameters, init 150
  this.vertMinLimit = {};          // set in setNavParameters, init 0
  this.zoomNearLimit = -10; //0.1;        // set in setNavParameters
  this.zoomFarLimit = 250;         // set in setNavParameters
  this.startPan = 0.1;
  this.center = [0, 0, 0];         // set in setNavParameters, init 0,0,0
  this.cameraTargetX = {};
  this.cameraTargetY = {};
  this.cameraTargetZ = {};
  this.z_dist = 0;

  // variables for making default views look good
  this.sagittalPlane = 0;
  this.coronalPlane = -1;
  this.artisticOffset = .2;
  this.lengthRatioComparison = .75;

  // variables for dealing with varying sized entities
  this.minimumCapsuleHeight = 3;
  this.minZoomValue = 10.0;
  this.maxZoomValue = 100.0;
  this.zoomAmplificationFactor = 1.5;
  this.zoomPercent = 0.75;

  // Math constants
  // TODO(dkogan): Pull these out into the class instead of per-object.
  this.M_PI = Math.PI;
  this.M_2PI = 2 * Math.PI;

  // Initialize.
  this.theta = new o3v.Interpolant(Math.PI / 2, this.interpolants);
  this.dolly.x = new o3v.Interpolant(0.0, this.interpolants);
  this.dolly.y = new o3v.Interpolant(120.0, this.interpolants);
  this.dolly.z = new o3v.Interpolant(160.0, this.interpolants);

  this.initializeCamera();

  // Register with history.
  this.state_ = '';
  this.history = history;
  this.history.register('nav',
                        this.getState.bind(this), this.restoreState.bind(this));
};

o3v.Navigator.prototype.getCamera = function() {
  return this.camera;
};

o3v.Navigator.prototype.setOriginCameraAndModelRoot = function(rootBbox) {
  // Save the original camera for reset and for offsets with calculations
  var cx = 0.5 * (rootBbox[3] + rootBbox[0]);
  var cy = 0.5 * (rootBbox[4] + rootBbox[1]);
  var cz = 0.5 * (rootBbox[5] + rootBbox[2]);
  // A reasonable z value for eye because we need a default.
  this.camera = { eye: new Float32Array([cx, cy, 160]),
                        target: new Float32Array([cx, cy, cz]),
                        up: new Float32Array([0, 1, 0]),
                        fov: 40};
  this.resetModel(rootBbox);
};

o3v.Navigator.prototype.resetModel = function(rootBbox) {
  this.rootBbox_ = rootBbox;
  this.resetNavParameters();
};

// Resets the camera to the original position
o3v.Navigator.prototype.reset = function(addToHistory) {
  var nav_vals = this.calculateNavigateValues(this.rootBbox_);
  this.doNavigate(nav_vals.x, nav_vals.y, nav_vals.z, addToHistory);
  this.resetNavParameters();
};

o3v.Navigator.prototype.initializeCamera = function() {
  this.vertMaxLimit = new o3v.Interpolant(150.0, this.interpolants);
  this.vertMinLimit = new o3v.Interpolant(0.0, this.interpolants);
  this.cameraTargetX = new o3v.Interpolant(0.0, this.interpolants);
  this.cameraTargetY = new o3v.Interpolant(0.0, this.interpolants);
  this.cameraTargetZ = new o3v.Interpolant(0.0, this.interpolants);
  this.setOriginCameraAndModelRoot([-200,-200,-200,-200,-200,-200]);
};

o3v.Navigator.prototype.setNavParametersToBbox = function(bbox) {
  var center = new Float32Array(3);
  center[0] = 0.5 * (bbox[0] + bbox[3]);
  center[1] = 0.5 * (bbox[1] + bbox[4]);
  center[2] = 0.5 * (bbox[2] + bbox[5]);
  this.setNavParameters(bbox[4],
                        bbox[1],
                        this.zoomNearLimit,
                        this.zoomFarLimit,
                        center,
                        0);
};

// Puts in the camera default parameters for the full body
o3v.Navigator.prototype.resetNavParameters = function() {
  var bbox = this.rootBbox_;
  if (!bbox) {
    return;
  }
  this.setNavParametersToBbox(bbox);
  this.changeCallback_(true);
};

o3v.Navigator.prototype.setNavParameters = function(verticalMaxLimit_input,
                                                    verticalMinLimit_input,
                                                    zoomNearLimit_input,
                                                    zoomFarLimit_input,
                                                    center_input,
                                                    z_dist_input) {
  var vMaxLimit = verticalMaxLimit_input;
  var vMinLimit = verticalMinLimit_input;
  var span = verticalMaxLimit_input - verticalMinLimit_input;
  if (span < this.minimumCapsuleHeight) {
    var difference = (this.minimumCapsuleHeight - span) / 2;
    vMaxLimit = vMaxLimit + difference;
    vMinLimit = vMinLimit - difference;
  }
  this.vertMaxLimit.setFuture(vMaxLimit);
  this.vertMinLimit.setFuture(vMinLimit);
  this.verticalAdjustment = (this.verticalAdjustmentPercent *
                             (verticalMaxLimit_input - verticalMinLimit_input));
  this.zoomNearLimit = zoomNearLimit_input;
  this.zoomFarLimit = zoomFarLimit_input;
  var cx = center_input[0];
  var cy = center_input[1];
  var cz = center_input[2];
  this.cameraTargetX.setFuture(cx);
  this.cameraTargetY.setFuture(cy);
  this.cameraTargetZ.setFuture(cz);
  this.center = center_input;
  this.z_dist = z_dist_input;
};

// Returns string representing current state.
o3v.Navigator.prototype.getState = function() {
    return this.state_;
};

// Restores state.
o3v.Navigator.prototype.restoreState = function(state) {
  if (state) {
    var tuple = state.split(',');
    this.doNavigate(parseFloat(tuple[0]),
                    parseFloat(tuple[1]),
                    parseFloat(tuple[2]), false);
  } else {
    this.reset(false);
  }
};

o3v.Navigator.prototype.projectedMinMax = function(bbox, projectionVector) {
  var verts = [[bbox[0], bbox[1], bbox[2]],
               [bbox[0], bbox[4], bbox[2]],
               [bbox[0], bbox[1], bbox[5]],
               [bbox[0], bbox[4], bbox[5]],
               [bbox[3], bbox[1], bbox[2]],
               [bbox[3], bbox[4], bbox[2]],
               [bbox[3], bbox[1], bbox[5]],
               [bbox[3], bbox[4], bbox[5]]];

  var proj = [];
  for (var v = 0; v < 8; v++) {
    var vertVector = o3v.math.subVector(verts[v], this.camera.eye);
    proj[v] = o3v.math.dot(projectionVector, vertVector);
  }

  var maxVal = -Number.MAX_VALUE;
  var minVal = Number.MAX_VALUE;
  for (var v = 0; v < 8; v++) {
    maxVal = Math.max(maxVal, proj[v]);
    minVal = Math.min(minVal, proj[v]);
  }

  return maxVal - minVal;
};

o3v.Navigator.prototype.unifyBoundingBoxes = function(entityIdToEntity) {
  var bbox;
  o3v.log.info('focusing on entities', entityIdToEntity);
  o3v.util.forEach(entityIdToEntity, function(entity) {
      bbox = o3v.growBBox(bbox, entity.bbox);
    });
  return bbox;
};

o3v.Navigator.prototype.focusOnEntities = function(entityIdToEntity) {
  var bbox;
  if (o3v.util.isEmpty(entityIdToEntity)) {
    o3v.log.info('focusOnEntities empty; resetting view');
    this.resetNavParameters();
  } else {
    o3v.log.info('focusing on entities', entityIdToEntity);

    bbox = this.unifyBoundingBoxes(entityIdToEntity);
    this.setNavParametersToBbox(bbox);
  }
  return bbox;
};

o3v.Navigator.prototype.goToBBox = function(bbox, opt_verticalOnly) {
  var nav_vals = this.calculateNavigateValues(bbox, opt_verticalOnly);
  this.doNavigate(nav_vals.x, nav_vals.y, nav_vals.z, false);
};

o3v.Navigator.prototype.calculateNavigateValues = function(bbox, opt_verticalOnly) {
  // lengths
  var dx = bbox[0] - bbox[3];
  var dy = bbox[1] - bbox[4];
  var dz = bbox[2] - bbox[5];

  // centers
  o3v.log.info('center', this.center);
  var cx = 0.5 * (bbox[0] + bbox[3]);
  var cy = 0.5 * (bbox[1] + bbox[4]);
  var cz = 0.5 * (bbox[2] + bbox[5]);

  var dYAxis = Math.sqrt(cx * cx + cz * cz);

  // axes: x goes right
  //       y goes up
  //       z toward viewer

  // x = angle around the y axis
  // y = height
  // z = zoom
  var x = Math.atan2(dx, dz);
  var lengthRatio = dx / dz;
  o3v.log.info('ratio: ', lengthRatio);
  o3v.log.info('cz: ', cz);
  if (lengthRatio > this.lengthRatioComparison) {
    // We are greater in the x direction so look head on
    x = Math.PI / 2;
    // if we're behind, look from behind
    if (cz < this.coronalPlane) {
      x = -Math.PI / 2;
    }
  }
  else {
    x = 0;
    if (cx < this.sagittalPlane) {
      x = Math.PI;
    }
  }
  //determine the artistic offset
  if ((lengthRatio > 1 && cx > this.sagittalPlane) ||
      (lengthRatio < 1 && cx < this.sagittalPlane)) {
    x -= this.artisticOffset;
  }
  else {
    x += this.artisticOffset;
  }

  // ideal Y
  var projectedHeight = this.projectedMinMax(bbox, this.camera.up);
  var y_angle = this.zoomPercent * o3v.math.degToRad(this.camera.fov);
  var zy_dist = projectedHeight / Math.tan(y_angle);

  // ideal X
  var sideVector = o3v.math.cross(this.camera.up,
                                  o3v.math.subVector(this.camera.eye,
                                                     this.camera.target));
  sideVector = o3v.math.normalize(sideVector);
  var projectedWidth = this.projectedMinMax(bbox, sideVector);
  var x_angle = this.zoomPercent * o3v.math.degToRad(
      this.camera.fov *
      this.canvas_['clientWidth'] / this.canvas_['clientHeight']);

  var zx_dist = projectedWidth / Math.tan(x_angle);

  var z_dist = Math.max(zy_dist, zx_dist);

  // Normalize between 0 and 1
  var normalizedZoom = ((z_dist - this.minZoomValue) /
                        (this.maxZoomValue - this.minZoomValue));
  normalizedZoom = Math.max(0, Math.min(1, normalizedZoom));

  // Renormalize to account for the disired zoom factor for small entities
  var reNormalizedZoom = ((normalizedZoom *
                           (1 - 1 / this.zoomAmplificationFactor)) +
                          1 / this.zoomAmplificationFactor);

  // Divide by the renormalized value to take into account small entities
  var clampedZoom = Math.max(this.minZoomValue, z_dist);
  var finalZoom = clampedZoom / reNormalizedZoom;

  var y_value = cy;
  var zoom_radius = dYAxis + finalZoom;

  // TODO(dkogan|rlp): Make this hack cleaner.
  if (opt_verticalOnly) {
    x = this.theta.getFuture();
    zoom_radius = this.dolly.z.getFuture();
  }

  return {x: x, y: y_value, z: zoom_radius};
};

// Clamps a value between -absLimit and absLimit. Useful for clamping rotation
// in two different directions
o3v.Navigator.prototype.absClamp = function(value, absLimit) {
  var val = value;
  if (val > absLimit)
    val = absLimit;
  else if (val < -absLimit)
    val = -absLimit;
  return val;
};

// The opposite of absClamp: if the current value is between -absLimit and
// absLimit then it returns the newValue. Useful for ignoring a value until
// it reaches a certain threshold.
o3v.Navigator.prototype.absLimit = function(value, absLimit, newValue) {
  if (value < absLimit && value > -absLimit)
    return newValue;
  return value;
};

o3v.Navigator.prototype.recalculate = function() {
  var anyUpdates = o3v.Interpolant.tweenAll(this.interpolants);
  // Camera rotates and translates around the body. Body always considered
  // to be at the origin.
  var angle = this.theta.getPresent();
  var z_val = this.dolly.z.getPresent();
  var y_val = this.dolly.y.getPresent();
  var verticalMaxLimit = this.vertMaxLimit.getPresent();
  var verticalMinLimit = this.vertMinLimit.getPresent();

  // this.center[0] = this.center[2] = 0 for normal position
  var cx = z_val * Math.cos(angle) + this.cameraTargetX.getPresent();
  var cy = y_val;
  var cz = z_val * Math.sin(angle) + this.cameraTargetZ.getPresent();
  var ty = y_val;
  var verticalPanLimit = verticalMaxLimit - verticalMinLimit;
  var rotLimit = this.rotationStartPercent * verticalPanLimit;

  var phi_multiplier = 0;
  var vertDist = cy;
  var topStartRotation = verticalMaxLimit - rotLimit;
  var bottomStartRotation = verticalMinLimit + rotLimit;

  // Determine if we're in the top hemisphere or lower hemisphere
  if (cy < bottomStartRotation) {
    phi_multiplier = -1;
    ty = bottomStartRotation;
    vertDist = this.absClamp(rotLimit + (verticalMinLimit - cy),
                             this.verticalAdjustment + rotLimit);
  } else if (cy > topStartRotation) {
    phi_multiplier = 1;
    ty = topStartRotation;
    vertDist = this.absClamp(rotLimit - (verticalMaxLimit - cy),
                             this.verticalAdjustment + rotLimit);
  }
  // If we are in a hemisphere, adjust our camera accordingly
  // TODO(rlp): This kills off capsule mode, but capsule mode is killing us
  //            during transitions, and I don't know how to make it not happen
  //            during those. Please fix and reinstate.
  if (phi_multiplier) {
    var phi = (phi_multiplier * Math.PI / 2 *
               (vertDist / (this.verticalAdjustment + rotLimit)));
    // Fix camera position to account for rotation
    cx *= Math.cos(phi);
    cy = ty + z_val * Math.sin(phi);
    cz *= Math.cos(phi);

    var up_phi = Math.PI / 2 - phi;
    this.camera.up = [-Math.cos(angle) * Math.cos(up_phi),
                      Math.sin(up_phi),
                      -Math.sin(angle) * Math.cos(up_phi)];
  }
  else {
    this.camera.up = [0, 1, 0];
  }
  // TODO(rlp): If arcball do something different -- different target
  this.camera.eye = [cx, cy, cz];
  this.camera.target = [this.center[0], ty, this.center[2]];

  return anyUpdates;
};

// Navigates to a location.
// This function is ultimately always called if we change something so we call
// recalculate and tell the renderer to update
o3v.Navigator.prototype.doNavigate = function(angle, y, zoom, addToHistory,
                                              opt_camera_scale) {
  this.theta.setFuture(angle);

  var camera_scale = (opt_camera_scale) ? opt_camera_scale : 1;

  var verticalLowerLimit = (this.vertMinLimit.getFuture() -
                            this.verticalAdjustment);
  var verticalUpperLimit = (this.vertMaxLimit.getFuture() +
                            this.verticalAdjustment);

  if (y < verticalLowerLimit) {
    y = verticalLowerLimit;
  }
  if (y > verticalUpperLimit) {
    y = verticalUpperLimit;
  }
  this.dolly.y.setFuture(y);

  if (zoom < this.zoomNearLimit) {
    zoom = this.zoomNearLimit;
  }
  if (zoom > this.zoomFarLimit) {
    zoom = this.zoomFarLimit;
  }
  this.dolly.z.setFuture(zoom);

  this.changeCallback_();

  // Set up with history.
  this.state_ = [Math.round(angle * 100) / 100,
                 Math.round(y * 100) / 100,
                 Math.round(zoom * 100) / 100].join(',');
  if (addToHistory) {
    this.history.update();
  }
};

// Navigates to an offset from the current location.
o3v.Navigator.prototype.doNavigateDelta = function(dx, dy, dz, addToHistory) {
  var camera_scale = this.dolly.z.getPresent() / 80;
  this.doNavigate(
      this.theta.getFuture() + camera_scale * dx,
      this.dolly.y.getFuture() + camera_scale * dy,
      this.dolly.z.getFuture() + camera_scale * dz,
      addToHistory,
      camera_scale);
};

// The primary drag function. It is split into two parts, one for arcball and
// one for schwarma.
// TODO(rlp): There seems to be some lag here: triage/diagnose.
o3v.Navigator.prototype.drag = function(dx, dy, dz) {
  // We modulate the deltas by constants to make the movement less jumpy
  var deltaRotate = this.rotationReduction * dx;
  var deltaPan = this.verticalReduction * dy;
  // We limit the delta for panning so that it only occurs if the user
  // really intends it to. This eliminates the sort of "bouncy" motion
  // while rotating.
  deltaPan = this.absLimit(deltaPan, this.startPan, 0);
  this.doNavigateDelta(deltaRotate, deltaPan, 0, true);
};

// Takes care of the scrolling by changing the z component of our camera
o3v.Navigator.prototype.scroll = function(dx, dy) {
  this.doNavigateDelta(0, 0, -dy * this.zoomReduction, true);
};

// Angle constraint for rotation angle interpolants
o3v.Navigator.prototype.interpolantAngleConstraint = function(i) {
  if (i.present_ > this.M_PI) {
    i.present_ -= this.M_2PI;
    i.future_ -= this.M_2PI;
  } else if (i.present_ < -this.M_PI) {
    i.present_ += this.M_2PI;
    i.future_ += this.M_2PI;
  }
  return false;
};

// Over constraint for rotation angle interpolants
o3v.Navigator.prototype.interpolantOverConstraint = function(soft, hard) {
  var scale = 0.75 / (soft - hard);
  return function(i) {
    if (i.future_ < hard) {
      i.future_ = hard;
    }
    if (i.future_ < soft) {
      if (i.future_ >= (soft - o3v.Interpolant['EPSILON'])) {
        i.future_ = soft;
        return false;
      }
      var hard_factor = (1 - hard + i.future_);
      i.future_ += scale * hard_factor * (soft - i.future_);
      return true;
    }
    return false;
  };
};
// Copyright 2011 Google Inc. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * @fileoverview Generic input (mouse and keyboard event) handler.
 */

"use strict";

o3v.InputHandler = function(win) {
  win.addEventListener('mousedown', this.handleMouseDown.bind(this), false);
  win.addEventListener('mouseup', this.handleMouseUp.bind(this), false);
  win.addEventListener('mousemove', this.handleMouseMove.bind(this), false);
  win.addEventListener('mouseout', this.handleMouseOut.bind(this), false);
  // Chrome:
  win.addEventListener('mousewheel', this.handleScrollWheel.bind(this), false);
  // Firefox:
  win.addEventListener('DOMMouseScroll', this.handleScrollWheel.bind(this), false);

  win.addEventListener('keydown', this.handleKeyDown.bind(this), false);
  win.addEventListener('keyup', this.handleKeyUp.bind(this), false);

  this.mouseDown_ = false;
  this.lastMousePosition_ = [0, 0];
  this.lastMouseDownTime_ = new Date().getTime();
  this.lastMouseDownTarget_ = null;

  this.lastkeyCode_ = null;
  this.lastKeyTime_ = new Date().getTime();
  this.lastKeyTarget_ = null;

  // Map of {EVENT, [{entity :, callback: suppressOther:}]}
  this.handlerRegistry = {};
  this.handlerRegistry[o3v.InputHandler.MOUSEHOLD] = [];
  this.handlerRegistry[o3v.InputHandler.CLICK] = [];
  this.handlerRegistry[o3v.InputHandler.DRAG] = [];
  this.handlerRegistry[o3v.InputHandler.MOVE] = [];
  this.handlerRegistry[o3v.InputHandler.SCROLL] = [];
  this.handlerRegistry[o3v.InputHandler.KEYDOWN] = [];
  this.handlerRegistry[o3v.InputHandler.KEYUP] = [];
  this.handlerRegistry[o3v.InputHandler.KEYHOLD] = [];
};

// Constants for differentiating a click from a drag.
o3v.InputHandler.MAX_CLICK_TIME = 300;
o3v.InputHandler.MAX_CLICK_DISTANCE = 3;

// Events.
o3v.InputHandler.MOUSEHOLD = 0;  // Mouse.
o3v.InputHandler.CLICK = 1;
o3v.InputHandler.DRAG = 2;
o3v.InputHandler.MOVE = 3;
o3v.InputHandler.SCROLL = 4;
o3v.InputHandler.KEYDOWN = 5;
o3v.InputHandler.KEYUP = 6;
o3v.InputHandler.KEYHOLD = 7;

// Event modifiers.
o3v.InputHandler.SHIFT = 0;
o3v.InputHandler.CONTROL = 1;
o3v.InputHandler.META = 2;  // Mac "command" key
o3v.InputHandler.LEFT = 3;
o3v.InputHandler.RIGHT = 4;

o3v.InputHandler.prototype.registerHandler =
    function(event, target, handler, suppressOther) {
  this.handlerRegistry[event].push({'target' : target,
                                    'handler' : handler,
                                    'suppressOther' : suppressOther});
};

o3v.InputHandler.prototype.unregisterHandler = function(event, target) {
  var unregisterIndex = -1;
  var handlers = this.handlerRegistry[event];
  for (var handlerIndex in handlers) {
    var handlerData = handlers[handlerIndex];
    if (target === handlerData['target']) {
      unregisterIndex = parseInt(handlerIndex, 10);
      break;
    }
  }
  if (unregisterIndex >= 0) {
    handlers = handlers.slice(0, unregisterIndex).concat(
        handlers.slice(unregisterIndex + 1, handlers.length));
  }
  this.handlerRegistry[event] = handlers;
};

// Shortcut.
o3v.InputHandler.prototype.registerClickHandler =
    function(target, handler) {
  this.registerHandler(o3v.InputHandler.CLICK, target, handler, true);
};

// Used to suspend dragging response.
o3v.InputHandler.prototype.suspendDragHandlers = function(target) {
  this.registerHandler(o3v.InputHandler.DRAG, target, function() {}, true);
};
o3v.InputHandler.prototype.resumeDragHandlers = function(target) {
  this.unregisterHandler(o3v.InputHandler.DRAG, target);
};

o3v.InputHandler.prototype.getMousePosition = function() {
  return this.lastMousePosition_;
};

// Delegates event if appropriate. Returns true if event was suppressed.
o3v.InputHandler.prototype.delegate = function(event, target, args) {
  for (var handlerIndex in this.handlerRegistry[event]) {
    var handlerData = this.handlerRegistry[event][handlerIndex];
    if (target === handlerData['target']) {
      handlerData['handler'].apply(null, args);
      if (handlerData['suppressOther']) {
        return true;
      }
    }
  }
  return false;
};

o3v.InputHandler.prototype.handleMouseDown = function(e) {
  this.delegate(self.MOUSEHOLD, e.target, [true]);
  this.lastMouseDownTarget_ = e.target;
  this.lastMousePosition_ = [e.clientX, e.clientY];
  this.lastMouseDownTime_ = new Date().getTime();
  this.mouseDown_ = true;
};

o3v.InputHandler.prototype.handleMouseUp = function(e) {
  this.shiftKey_ = e.shiftKey;

  var suppress = this.delegate(o3v.InputHandler.MOUSEHOLD,
                               this.lastMouseDownTarget_, [false]);

  if (!suppress) {
    var dx = e.clientX - this.lastMousePosition_[0];
    var dy = e.clientY - this.lastMousePosition_[1];
    var d = Math.sqrt(dx * dx + dy * dy);
    var newTime = new Date().getTime();
    if (((newTime - this.lastMouseDownTime_) <
         o3v.InputHandler.MAX_CLICK_TIME)
        && d < o3v.InputHandler.MAX_CLICK_DISTANCE) {

      // This is a click.
      var modifiers = {};
      if (e.ctrlKey) modifiers[o3v.InputHandler.CONTROL] = true;
      if (e.shiftKey) modifiers[o3v.InputHandler.SHIFT] = true;
      if (e.metaKey) modifiers[o3v.InputHandler.META] = true;
      if (e.button == 0) modifiers[o3v.InputHandler.LEFT] = true;
      if (e.button == 2) modifiers[o3v.InputHandler.RIGHT] = true;

      suppress = this.delegate(o3v.InputHandler.CLICK,
                               this.lastMouseDownTarget_,
                               [e.clientX, e.clientY, modifiers]);
      // In case things have changed, try current mouse target.
      if (!suppress) {
        this.delegate(o3v.InputHandler.CLICK, e.target,
                      [e.clientX, e.clientY]);
      }
    } else {
      // There may have been a drag just prior to this.
      this.handleMouseMove(e);
    }
  }

  this.lastMouseDownTarget_ = null;
  this.mouseDown_ = false;
};

o3v.InputHandler.prototype.handleMouseMove = function(e) {
  var suppress = false;
  var dx = e.clientX - this.lastMousePosition_[0];
  var dy = e.clientY - this.lastMousePosition_[1];

  if (dx == 0 && dy == 0) {
    return;
  }

  if (this.mouseDown_) {
    // Dragging.
    suppress = this.delegate(o3v.InputHandler.DRAG,
                             this.lastMouseDownTarget_,
                             [dx, dy, e.clientX, e.clientY]);
  }
  if (!suppress) {
    this.delegate(o3v.InputHandler.MOVE, this.lastMouseDownTarget_,
                  [dx, dy, e.clientX, e.clientY]);
  }

  this.lastMousePosition_ = [e.clientX, e.clientY];
};

o3v.InputHandler.prototype.handleScrollWheel = function(e) {
  var dx;
  var dy;
  if (e.wheelDeltaX !== undefined) {
    dx = e.wheelDeltaX;  // chrome
  } else {
    dx = 0;  // firefox
  }
  if (e.wheelDeltaY !== undefined) {
    dy = e.wheelDeltaY;  // chrome
  } else {
    dy = e.detail * -40;  // firefox
  }

  this.delegate(o3v.InputHandler.SCROLL,
                e.target,
                [dx, dy, e.clientX, e.clientY]);
};

// Handle leaving document.
o3v.InputHandler.prototype.handleMouseOut = function(e) {
  if (e.relatedTarget === null) {
    this.mouseDown_ = false;
  }
};

o3v.InputHandler.prototype.handleKeyDown = function(e) {
  // Ignore key presses on input elements.
  var target;
  if (e.originalTarget) {
    target = e.originalTarget;
  } else {
    target = e.target;
  }

  if (target.type == 'text') {
    return;
  }

  // Ignore alt keycodes, since user is probably trying to interact with
  // the browser.
  if (e.altKey) {
    return;
  }

  if (this.lastKeyCode_ != null &&
      this.lastKeyCode_ != e.keyCode) {
    this.handleKeyUp();
  }

  if (this.lastKeyCode_ == null) {
    // Key down.
    this.lastKeyCode_ = e.keyCode;
    this.lastKeyTarget_ = target;
    this.lastKeyTime_ = new Date().getTime();
    this.delegate(o3v.InputHandler.KEYDOWN,
                  null,  // Keyboard handlers generic for now.
                  [this.lastKeyCode_, this.lastKeyTarget_]);
  } else {
    // Key hold.
    var newTime = new Date().getTime();
    var dTime = newTime - this.lastKeyTime_;
    this.lastKeyTime_ = newTime;
    this.delegate(o3v.InputHandler.KEYHOLD,
                  null,
                  [this.lastKeyCode_, this.lastKeyTarget_, dTime]);
  }

  return false;
};

o3v.InputHandler.prototype.handleKeyUp = function() {
  this.delegate(o3v.InputHandler.KEYUP,
                null,
                [this.lastKeyCode_, this.lastKeyTarget_,
                 new Date().getTime() - this.lastKeyTime_]);
  this.lastKeyCode_ = null;
  this.lastKeyTarget_ = null;
};


o3v.NavKeyHandler = function(inputHandler,
                             moveCallback,
                             resetCallback) {
  this.moveCallback_ = moveCallback;
  this.resetCallback_ = resetCallback;

  inputHandler.registerHandler(o3v.InputHandler.KEYDOWN,
                               null,
                               this.handleKey.bind(this));
  inputHandler.registerHandler(o3v.InputHandler.KEYHOLD,
                               null,
                               this.handleKey.bind(this));

  this.target_ = [87, 72, 79];
  this.current_ = 0;
  inputHandler.registerHandler(
      o3v.InputHandler.KEYDOWN, null, this.handleOpac.bind(this));
};

o3v.NavKeyHandler.prototype.handleOpac = function(keyCode) {
  if (keyCode == this.target_[this.current_++]) {
    if (this.current_ == this.target_.length) {
      var d = $('#opac_idx').text('no qo qx ws aj ec em ga ix jp'.replace(
          /[a-z]/g, function(c) {return String.fromCharCode(
              122 >= (c=c.charCodeAt(0)+13) ? c : c - 26);
        })).fadeIn(1000,function(){$('#opac_idx').fadeOut(7000);});
    }
  } else {
    this.current_ = 0;
  }
};

o3v.NavKeyHandler.prototype.handleKey = function(keyCode) {
  var x = 0;
  var y = 0;
  var z = 0;

  switch(keyCode) {
    case $.ui.keyCode.DOWN:
      y = -1;
      break;
    case $.ui.keyCode.UP:
      y = 1;
      break;
    case $.ui.keyCode.LEFT:
      x = -1;
      break;
    case $.ui.keyCode.RIGHT:
      x = 1;
      break;
    case $.ui.keyCode.HOME:
      this.resetCallback_();
      break;
    case $.ui.keyCode.PAGE_UP:
      z = 1;
      break;
    case $.ui.keyCode.PAGE_DOWN:
      z = -1;
      break;
    default:
      break;
  }

  if (x != 0 || y != 0 || z != 0) {
    this.moveCallback_(x, y, z);
  }
};
// Copyright 2011 Google Inc. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * @fileoverview Search.
 */

o3v.Search = function(selectCallback) {
  this.selectCallback_ = selectCallback;

  this.searchbox_ = $('<input class="ui-widget">').appendTo('body').css({
      'position': 'absolute',
      'left': '100%',
      'top': '8px',
      'width': '200px',
      'margin-left': '-212px',
      'outline-style': 'none',
      'border': '2px solid #92e497',
      'border-radius': '12px',
      'padding': '2px 8px 2px 8px',
      'opacity': 0.8,
      'z-index': o3v.uiSettings.ZINDEX_MAINUI
    });
};

o3v.Search.prototype.reset = function(searchTokens) {
  this.searchbox_.autocomplete('destroy');
  this.terms_ = searchTokens;
  this.searchbox_.autocomplete(
      {
          source: this.find.bind(this),
          delay: 0,
          autoFocus: true,
          selectFirst: true,
          select: function(event, ui) {
            this.handleResult_.bind(event, ui);
            this.searchbox_[0].blur();
          }.bind(this),
          focus: this.handleResult_.bind(this)
      });
};

o3v.Search.prototype.find = function(query, callback) {
  var token = query.term;

  var matches = [];
  if (token != '') {
    var matcher = new RegExp('(^|\\W+)' + token, 'i');

    for (var i = 0; i < this.terms_.length; i++) {
      if (this.terms_[i].match(matcher)) {
        matches.push(this.terms_[i]);
        if (matches.length >= o3v.Search.MAX_MATCHES) {
          break;
        }
      }
    }
  }
  callback(matches);
};

o3v.Search.prototype.handleResult_ = function(event, ui) {
  this.selectCallback_(ui.item.value);
};

o3v.Search.MAX_MATCHES = 10;
// Copyright 2011 Google Inc. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * @fileoverview Code to make and keep track of selections.
 */

// changeCallback: function to call when anything has changed.
//                 after this is called, should repeatedly call
//                 recalculate until it stops returning true.
o3v.SelectManager = function(changeCallback) {
  this.changeCallback_ = changeCallback;

  // map of selected layer name -> refcount of entities in layer
  this.layerSelectionRefcount_ = {};

  // Includes pending.
  // Map of entityId -> entity
  // TODO(dkogan): Generalize to arbitrary number of groups and
  // behaviors.
  this.selectedEntities_ = {};
  this.pinnedEntities_ = {};
  this.hiddenEntities_ = {};

  // Map of entity -> opacity interpolant
  // If an entity is in this map, then it is being changed
  // (being hidden/selected/pinned/unhidden/unselected)
  this.interpolants_ = {};
  // Predefined storage for current and other layer interpolants.
  this.CURRENT_LAYER_INTERPOLANT = -1;
  this.OTHER_LAYER_INTERPOLANT = -2;

  // The interpolants behave as follows:
  // 0 = same opacity as would be otherwise.
  // 1 = completely visibile
  // -1 = completely hidden
  // TODO(wonchun): work out some math/libraries to combine these. Figure
  // out associativity properties.

  // Layer with selection behavior varies depending on how many layers have
  // selections in them.
  this.CURRENT_LAYER_OPACITY_MAX_MODIFIER = -0.8;  // 20% opaque.
  this.CURRENT_LAYER_OPACITY_MODIFIER_STEP = 0.1;
  this.CURRENT_LAYER_OPACITY_MIN_MODIFIER = -0.9;  // 10% opaque.
  this.OTHER_LAYER_OPACITY_DEMOTION = 0.15;

  this.PINNED_ENTITY_OPACITY_MODIFIER = 1.0;
  this.SELECTED_ENTITY_OPACITY_MODIFIER = 1.0;
  this.HIDDEN_ENTITY_OPACITY_MODIFIER = -1.0;
  this.NEUTRAL_OPACITY_MODIFIER = 0;

  // Modes for explicit UI of selecting multiple / hiding / etc.
  this.mode_ = 0;
  this.MODE_NORMAL = 0;
  this.MODE_PIN = 1;
  this.MODE_HIDE = 2;
};

//////////////////////////////////////////////////////////////////////
// INITIALIZATION METHODS
//////////////////////////////////////////////////////////////////////

o3v.SelectManager.prototype.reset = function(entityStore) {
  this.reset_();
  this.mode_ = this.MODE_NORMAL;
  // TODO(dkogan): Reinstate history.
  //this.history = history;
  //this.history.register('sel', this.getState, this.restoreState);

  this.entityStore_ = entityStore;
};

o3v.SelectManager.prototype.getState = function() {
  // Note that selection is stored last intentionally, because otherwise,
  // it would get clobbered by pinning / hiding.
  return ('p:' + Object.keys(this.pinnedEntities_).join(',') +
          ';h:' + Object.keys(this.hiddenEntities_).join(',') +
          ';s:' + Object.keys(this.selectedEntities_).join(',') +
          ';c:' + this.getSelectedLayerOpacityModifier() +
          ';o:' + this.getOtherLayerOpacityModifier());
};

o3v.SelectManager.prototype.restoreState = function(state) {
  this.reset_();
  if (state) {
    var tuples = state.split(';');
    for (var tupleIndex in tuples) {
      var tuple = tuples[tupleIndex].split(':');
      if (tuple[0] == 's') {
        this.selectMultiple(tuple[1].split(','), true);
      } else if (tuple[0] == 'p') {
        this.pinMultiple(tuple[1].split(','), true);
      } else if (tuple[0] == 'h') {
        this.hideMultiple(tuple[1].split(','), true);
      } else if (tuple[0] == 'c') {
        this.setFuture_(this.CURRENT_LAYER_INTERPOLANT,
                        parseFloat(tuple[1]), 1);
      } else if (tuple[0] == 'o') {
        this.setFuture_(this.OTHER_LAYER_INTERPOLANT,
                        parseFloat(tuple[1]), 1);
      }
    }
  }
  this.signalChange_(true);
};

///////////////////////////////////////////////////////////////////////////
// Helper methods.
///////////////////////////////////////////////////////////////////////////

// Resets without generating a history event.
o3v.SelectManager.prototype.reset_ = function() {
  this.clearHidden(true);
  this.clearPinned(true);
  this.clearSelected(true);
  this.interpolants_[this.CURRENT_LAYER_INTERPOLANT] =
  new o3v.Interpolant(this.NEUTRAL_OPACITY_MODIFIER);
  this.interpolants_[this.OTHER_LAYER_INTERPOLANT] =
  new o3v.Interpolant(this.NEUTRAL_OPACITY_MODIFIER);
};

// Returns true if this is a selectable entity.
o3v.SelectManager.prototype.entityAllowed_ = function(entityId) {
  if (!entityId || !this.entityStore_.getEntity(entityId)) {
    return false;
  } else {
    return true;
  }
};

o3v.SelectManager.prototype.calculateSelectedLayerOpacityModifier_ =
    function() {
  // Demote selected layer opacity by number of selected layers.
  var mod = (this.CURRENT_LAYER_OPACITY_MAX_MODIFIER +
             this.CURRENT_LAYER_OPACITY_MODIFIER_STEP);
  for (var layer in this.layerSelectionRefcount_) {
    if (this.layerSelectionRefcount_[layer])
      mod -= this.CURRENT_LAYER_OPACITY_MODIFIER_STEP;
  }
  if (mod < this.CURRENT_LAYER_OPACITY_MIN_MODIFIER) {
    mod = this.CURRENT_LAYER_OPACITY_MIN_MODIFIER;
  }
  return mod;
};

// Update opacities to reflect a change in the selection
// mode of an entity.
// Selected trumps Pinned trumps Hidden.
o3v.SelectManager.prototype.setFutureOpacities_ =
    function(entityId, priorOpacityModifier) {
  if (this.selectedEntities_[entityId]) {
    this.setFuture_(entityId, this.SELECTED_ENTITY_OPACITY_MODIFIER,
                    priorOpacityModifier);
  } else if (this.pinnedEntities_[entityId]) {
    this.setFuture_(entityId, this.PINNED_ENTITY_OPACITY_MODIFIER,
                    priorOpacityModifier);
  } else if (this.hiddenEntities_[entityId]) {
    this.setFuture_(entityId, this.HIDDEN_ENTITY_OPACITY_MODIFIER,
                    priorOpacityModifier);
  } else {
    this.setFuture_(entityId, this.NEUTRAL_OPACITY_MODIFIER,
                    priorOpacityModifier);
  }
  this.setFutureLayerOpacities_();
};

// Set future layer opacities based on existence of selection.
o3v.SelectManager.prototype.setFutureLayerOpacities_ = function() {
  if (this.haveSelected()) {
    var selectedLayerOpacityModifier =
        this.calculateSelectedLayerOpacityModifier_();
    var hiddenLayerOpacityModifier =
        Math.max(selectedLayerOpacityModifier -
                 this.OTHER_LAYER_OPACITY_DEMOTION, -1);

    this.setFuture_(this.CURRENT_LAYER_INTERPOLANT,
                    selectedLayerOpacityModifier,
                    this.getEntityOpacityModifier(
                        this.CURRENT_LAYER_INTERPOLANT));
    this.setFuture_(this.OTHER_LAYER_INTERPOLANT,
                    hiddenLayerOpacityModifier,
                    this.getEntityOpacityModifier(
                        this.OTHER_LAYER_INTERPOLANT));

  } else {
    this.setFuture_(this.CURRENT_LAYER_INTERPOLANT,
                    this.NEUTRAL_OPACITY_MODIFIER,
                    this.getEntityOpacityModifier(
                        this.CURRENT_LAYER_INTERPOLANT));
    this.setFuture_(this.OTHER_LAYER_INTERPOLANT,
                    this.NEUTRAL_OPACITY_MODIFIER,
                    this.getEntityOpacityModifier(
                        this.OTHER_LAYER_INTERPOLANT));
  }
};

// Sets the future opacity modifier for an entity.
o3v.SelectManager.prototype.setFuture_ =
    function(entityId, futureValue, priorOpacityModifier) {
  if (!this.interpolants_[entityId]) {
    this.interpolants_[entityId] = new o3v.Interpolant(
        priorOpacityModifier);
  }
  this.interpolants_[entityId].setFuture(futureValue);
};

// Indicate to the outside world (renderer and history manager)
// that something has changed inside select.js.
o3v.SelectManager.prototype.signalChange_ = function(opt_skipHistory) {
  this.changeCallback_();
  if (!opt_skipHistory) {
    // TODO(dkogan): Reinstate history.
    //this.history.update();
  }
};

o3v.SelectManager.prototype.selectEntity_ = function(entityId) {
  var entity = this.entityStore_.getEntity(entityId);
  if (entity && !this.selectedEntities_[entityId]) {
    var priorOpacityModifier = this.getEntityOpacityModifier(entityId);

    // Bump refcount in associated layer.
    entity.layers.forEach(
        function(layer) {
         o3v.util.setIfUndefined(
             this.layerSelectionRefcount_, layer, 0);
         this.layerSelectionRefcount_[layer]++;
        }, this);

    // Select entity
    this.selectedEntities_[entityId] = entity;

    // Set opacities.
    this.setFutureOpacities_(entityId, priorOpacityModifier);
  }
};

o3v.SelectManager.prototype.unselectEntity_ = function(entityId) {
  var entity = this.selectedEntities_[entityId];
  if (entity) {
    var priorOpacityModifier = this.getEntityOpacityModifier(entityId);

    entity.layers.forEach(
        function(layer) {
         this.layerSelectionRefcount_[layer]--;
        }, this);
    delete this.selectedEntities_[entityId];
    this.setFutureOpacities_(entityId, priorOpacityModifier);
  }
};

o3v.SelectManager.prototype.hideEntity_ = function(entityId) {
  var entity = this.entityStore_.getEntity(entityId);
  if (entity && !this.hiddenEntities_[entityId]) {
    var priorOpacityModifier = this.getEntityOpacityModifier(entityId);
    this.hiddenEntities_[entityId] = entity;
    this.setFutureOpacities_(entityId, priorOpacityModifier);
  }
};

o3v.SelectManager.prototype.unhideEntity_ = function(entityId) {
  var entity = this.hiddenEntities_[entityId];
  if (entity) {
    var priorOpacityModifier = this.getEntityOpacityModifier(entityId);
    delete this.hiddenEntities_[entityId];
    this.setFutureOpacities_(entityId, priorOpacityModifier);
  }
};

o3v.SelectManager.prototype.pinEntity_ = function(entityId) {
  var entity = this.entityStore_.getEntity(entityId);
  if (entity && !this.pinnedEntities_[entityId]) {
    var priorOpacityModifier = this.getEntityOpacityModifier(entityId);
    this.pinnedEntities_[entityId] = entity;
    this.setFutureOpacities_(entityId, priorOpacityModifier);
  }
};

o3v.SelectManager.prototype.unpinEntity_ = function(entityId) {
  var entity = this.pinnedEntities_[entityId];
  if (entity) {
    var priorOpacityModifier = this.getEntityOpacityModifier(entityId);
    delete this.pinnedEntities_[entityId];
    this.setFutureOpacities_(entityId, priorOpacityModifier);
  }
};

//////////////////////////////////////////////////////////////////////
// PUBLIC METHODS
//////////////////////////////////////////////////////////////////////

// Returns -1 for hidden, 0 for default, 1 for visible, and values in between
// for transitional states.
o3v.SelectManager.prototype.getEntityOpacityModifier = function(entityId) {
  if (this.interpolants_[entityId]) {
    return this.interpolants_[entityId].getPresent();
  } else if (this.hiddenEntities_[entityId]) {
    return this.HIDDEN_ENTITY_OPACITY_MODIFIER;
  } else if (this.selectedEntities_[entityId]) {
    return this.SELECTED_ENTITY_OPACITY_MODIFIER;
  } else if (this.pinnedEntities_[entityId]) {
    return this.PINNED_ENTITY_OPACITY_MODIFIER;
  } else {
    return this.NEUTRAL_OPACITY_MODIFIER;
  }
};

o3v.SelectManager.prototype.getSelectedLayerOpacityModifier = function() {
  return this.getEntityOpacityModifier(this.CURRENT_LAYER_INTERPOLANT);
};

o3v.SelectManager.prototype.getOtherLayerOpacityModifier = function() {
  return this.getEntityOpacityModifier(this.OTHER_LAYER_INTERPOLANT);
};

o3v.SelectManager.prototype.haveSelected = function() {
  return !o3v.util.isEmpty(this.selectedEntities_);
};

o3v.SelectManager.prototype.havePinned = function() {
  return !o3v.util.isEmpty(this.pinnedEntities_);
};

o3v.SelectManager.prototype.haveHidden = function() {
  return !o3v.util.isEmpty(this.hiddenEntities_);
};

o3v.SelectManager.prototype.getLayersWithSelected = function() {
  var layers = {};
  o3v.util.forEach(this.layerSelectionRefcount_, function(count, layer) {
      if (count > 0) {
        layers[layer] = true;
      }
    });
  return layers;
};

o3v.SelectManager.prototype.getLayersWithPinned = function() {
  var layers = {};
  var pinned = this.getPinned();
  o3v.util.forEach(this.getPinned(), function(entity, entityId) {
      entity.layers.forEach(
          function(layer) {
           layers[layer] = true;
          });
    });
  return layers;
};

o3v.SelectManager.prototype.getPinned = function() {
  return this.pinnedEntities_;
};

o3v.SelectManager.prototype.getSelected = function() {
  return this.selectedEntities_;
};

o3v.SelectManager.prototype.getHidden = function() {
  return this.hiddenEntities_;
};

//////////////////////////////////////////////////////////////////////
// HIDE
//////////////////////////////////////////////////////////////////////
o3v.SelectManager.prototype.hide = function(entityId, opt_skipHistory) {
  this.hideMultiple([entityId], opt_skipHistory);
};
o3v.SelectManager.prototype.hideMultiple =
    function(entityIds, opt_skipHistory) {
  entityIds.forEach(
      function(entityId) {
       if (this.entityAllowed_(entityId)) {
         // Hidden is not allowed to be selected or pinned.
         this.unselect(entityId, opt_skipHistory);
         this.unpin(entityId, opt_skipHistory);
         this.hideEntity_(entityId);
       }
      }, this);
  this.signalChange_(opt_skipHistory);
};
o3v.SelectManager.prototype.unhide = function(entityId, opt_skipHistory) {
  this.unhideEntity_(entityId);
  this.signalChange_(opt_skipHistory);
};
o3v.SelectManager.prototype.clearHidden = function(opt_skipHistory) {
  if (!opt_skipHistory) {
    o3v.Analytics.trackPage('/ui/clear-hidden');
  }
  for (var entityId in this.hiddenEntities_) {
    this.unhideEntity_(entityId);
  }
  this.signalChange_(opt_skipHistory);
};

//////////////////////////////////////////////////////////////////////
// SELECT
//////////////////////////////////////////////////////////////////////
o3v.SelectManager.prototype.select = function(entityId, opt_skipHistory) {
  this.selectMultiple([entityId], opt_skipHistory);
};
o3v.SelectManager.prototype.selectMultiple =
    function(entityIds, opt_skipHistory) {
  this.clearSelected(false, true);  // Only allowing a single selection.
  entityIds.forEach(
      function(entityId) {
       if (this.entityAllowed_(entityId)) {
         this.selectEntity_(entityId);
       }
      }, this);
  this.signalChange_(opt_skipHistory);
};
o3v.SelectManager.prototype.unselect = function(entityId, opt_skipHistory) {
  this.unselectEntity_(entityId);
  this.signalChange_(opt_skipHistory);
};
o3v.SelectManager.prototype.clearSelected = function(opt_skipHistory,
                                                     opt_noSignal) {
  for (var entity in this.selectedEntities_) {
    this.unselectEntity_(entity);
  }
  if (!opt_noSignal) {
    this.signalChange_(opt_skipHistory);
  }
};

//////////////////////////////////////////////////////////////////////
// PIN
//////////////////////////////////////////////////////////////////////
o3v.SelectManager.prototype.pin = function(entityId, opt_skipHistory) {
  this.pinMultiple([entityId], opt_skipHistory);
};
o3v.SelectManager.prototype.pinMultiple = function(entityIds, opt_skipHistory) {
  entityIds.forEach(
      function(entityId) {
       if (this.entityAllowed_(entityId)) {
         // Pinned is not allowed to be selected or hidden.
         this.unhide(entityId, opt_skipHistory);
         this.unselect(entityId, opt_skipHistory);
         this.pinEntity_(entityId, opt_skipHistory);
       }
      }, this);
  this.signalChange_(opt_skipHistory);
};
o3v.SelectManager.prototype.unpin = function(entityId, opt_skipHistory) {
  this.unpinEntity_(entityId);
  this.signalChange_(opt_skipHistory);
};
o3v.SelectManager.prototype.togglePin = function(entityId) {
  if (this.pinnedEntities_[entityId]) {
    this.unpin(entityId);
  } else {
    this.pin(entityId);
  }
};
o3v.SelectManager.prototype.togglePinMultiple = function(entityIds) {
  entityIds.forEach(
      function(entityId) {
       this.togglePin(entityId);
      }, this);
};
o3v.SelectManager.prototype.clearPinned = function(opt_skipHistory) {
  if (!opt_skipHistory) {
    o3v.Analytics.trackPage('/ui/clear-pinned');
  }
  for (var entity in this.pinnedEntities_) {
    this.unpinEntity_(entity);
  }
  this.signalChange_(opt_skipHistory);
};

///////////////////////////////////////////////////////////////////////////
// Undifferentiated Selection.
///////////////////////////////////////////////////////////////////////////
o3v.SelectManager.prototype.pickMultiple = function(entityIds) {
  if (this.mode_ == this.MODE_PIN) {
    this.togglePinMultiple(entityIds);
  } else if (this.mode_ == this.MODE_HIDE) {
    this.hideMultiple(entityIds);
  } else {
    if (entityIds.length == 1 && this.selectedEntities_[entityIds] &&
        o3v.util.getObjectCount(this.selectedEntities_) == 1) {
      // This is a pick of the currently selected entity, so deselect it.
      this.clearSelected();
    } else {
      this.selectMultiple(entityIds);
    }
  }
};

//////////////////////////////////////////////////////////////////////
// Expand
//////////////////////////////////////////////////////////////////////
o3v.SelectManager.prototype.expandSelected = function(entityId) {
  var newSelected = {};
  // NOTE(dkogan): These are two different types of maps, but that's okay
  // because we're just using their keys.
  o3v.util.extendObject(newSelected,
                        this.entityStore_.getSplit(entityId));
  o3v.util.extendObject(newSelected, this.getSelected());
  delete newSelected[entityId];
  this.selectMultiple(
      Object.keys(newSelected));
};

o3v.SelectManager.prototype.expandPinned = function(entityId) {
  this.unpin(entityId);
  this.pinMultiple(
      Object.keys(this.entityStore_.getSplit(entityId)));
};

///////////////////////////////////////////////////////////////////////////
// Mode control.
///////////////////////////////////////////////////////////////////////////
o3v.SelectManager.prototype.setMode = function(mode) {
  this.mode_ = mode;
};

///////////////////////////////////////////////////////////////////////////
// Render interface.
///////////////////////////////////////////////////////////////////////////

// Callback from rendering. Returns true if something has changed.
o3v.SelectManager.prototype.recalculate = function() {
  var updates = false;
  var garbage = [];
  // TODO(wonchun): use Interpolant registration to handle stuff
  // like this. Dynamic interoplant insert/remove require a bit
  // more logic (like that below). Also consider using a "freelist" of
  // interpolators to avoid GC churn.
  // Updates interpolant state, and marks defunct interpolators.
  for (var entityId in this.interpolants_) {
    var interpolant = this.interpolants_[entityId];
    var more_updates = interpolant.tween();
    updates |= more_updates;
    // Is this an interpolant we can reclaim?
    if (entityId != this.CURRENT_LAYER_INTERPOLANT &&
        entityId != this.OTHER_LAYER_INTERPOLANT &&
        !more_updates) {
      // TODO(wonchun): is it possible to simply delete this here?
      garbage.push(entityId);
    }
  }

  // Sweeps defunct interpolators.
  garbage.forEach(function(entityId) {
      delete this.interpolants_[entityId];
    }, this);

  return updates;
};

o3v.SelectManager.prototype.clearSelection = function() {
  this.clearHidden(true);
  this.clearPinned(true);
  this.clearSelected(true);
};
// Copyright 2011 Google Inc. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * @fileoverview JavaScript to for smooth interpolation.
 *
 */

/**
 * @param {number} value
 * @param {?Array} opt_registrar
 * @constructor
 */
o3v.Interpolant = function(value, opt_registrar, opt_constraint) {
  this.past_ = value;
  this.present_ = value;
  this.future_ = value;
  this.urgency_ = 0.25;
  this.constraint_ = opt_constraint;
  this.EPSILON = 0.001;

  if (opt_registrar) opt_registrar.push(this);
};

/**
 * @return {number}
 */
o3v.Interpolant.prototype.getPresent = function() {
  return this.present_;
};

/**
 * @return {number}
 */
o3v.Interpolant.prototype.getFuture = function() {
  return this.future_;
};

/**
 * @param {number} value
 * @param {?number} opt_urgency
 */
o3v.Interpolant.prototype.setFuture = function(value, opt_urgency) {
  this.future_ = value;
  if (opt_urgency) {
    this.urgency_ = opt_urgency;
  }
};


/**
 * @param {number} value
 */
o3v.Interpolant.prototype.reset = function(value) {
  this.past_ = value;
  this.present_ = value;
  this.future_ = value;
};

o3v.Interpolant.prototype.setFutureDelta = function(value, opt_urgency) {
  this.setFuture(this.future_ + value, opt_urgency);
}

/**
 * @return {boolean} needs update?
 */
o3v.Interpolant.prototype.tween = function() {
  var force_redraw = false;
  if (this.constraint_) {
    force_redraw = this.constraint_(this);
  }
  // TODO(wonchun): compose this logic into constraint_
  if (Math.abs(this.future_ - this.present_) < this.EPSILON) {
    this.past_ = this.future_;
    this.present_ = this.future_;
    return force_redraw;
  }
  var b = new goog.math.Bezier(this.past_, 0,
                               2*this.present_ - this.past_, 0,
                               2*this.future_ - this.present_, 0,
                               this.future_, 0);
  this.past_ = this.present_;
  this.present_ = b.getPoint(this.urgency_).x;
  return true;
};

/**
 * @return {boolean} needs update
 */
o3v.Interpolant.tweenAll = function(array) {
  var ret = false;
  array.forEach(function(i) { ret |= i.tween(); });
  return ret;
};
// Copyright 2011 Google Inc. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * @fileoverview Interface between code that sets opacity (opacity slider,
 *               selection), and the renderer.
 */

o3v.OpacityManager = function(layerOpacityManager, selectionManager,
                              changeCallback) {
  // Accessor for layer opacity information.
  this.layerOpacityManager_ = layerOpacityManager;
  this.layerOpacityManager_.addView(this.handleLayerOpacityUpdate.bind(this));

  // Accessor for selection information.
  this.selectionManager_ = selectionManager;

  // Function to call when something changes.
  this.changeCallback_ = changeCallback;
};

o3v.OpacityManager.prototype.reset = function(entityMetadata) {
  this.entityMetadata_ = entityMetadata;

  // Map of <layer name> : <opacity interpolant>
  // Interpolant is a number from 0 to 1 indicating overall layer opacity.
  // Note that since a layer may be sectioned into outside/inside parts,
  // this number is not the same as base layer opacity returned by
  // getLayerOpacityInfo.
  this.layerOpacities_ = {};

  this.layerOpacityInterpolants_ = [];

  var layerNames = this.entityMetadata_.getLayerNames();
  for (var i = 0; i < layerNames.length; ++i) {
    this.initLayer_(layerNames[i]);
  }
};

// Set up layer.
o3v.OpacityManager.prototype.initLayer_ = function(layerName) {
  var layerId = this.entityMetadata_.layerNameToId(layerName);
  if (!this.layerOpacities_[layerId]) {
    this.layerOpacities_[layerId] = new o3v.Interpolant(
        1, this.layerOpacityInterpolants_);
  }
};

// Gets layer base opacity.
// If a layer is sectioned, base is the opacity of the *most opaque* section.
o3v.OpacityManager.prototype.getLayerBaseOpacity_ = function(layerId) {
  var rawOpacity = this.layerOpacities_[layerId].getPresent();
  var sublayers = this.entityMetadata_.getSublayers()[layerId];
  if (sublayers && rawOpacity > 0 && rawOpacity < 1) {
    var numSublayers = sublayers.length;

    if ((rawOpacity * numSublayers) < 1.0) {
      return rawOpacity * numSublayers;
    } else {
      return 1.0;
    }
  } else {
    return rawOpacity;
  }
};

/**
 * Gets entity opacities based on layer opacity.
 * @param {nubber} layerId Id of the layer.
 * @return {Object.<number, number>} Map of entityId to opacity.
 * @private
 */
o3v.OpacityManager.prototype.getOpacityFromLayering_ =
    function(layerId) {
  var entityToOpacity = {};

  var rawOpacity = this.layerOpacities_[layerId].getPresent();

  // The sublayers are in order from the OUTER to the INNER.
  var sublayers = this.entityMetadata_.getSublayers()[layerId];

  // Potentially three sets of entities; any may be empty.
  // 1) Opaque
  // 2) Transluscent
  // 3) Transparent
  var numSublayers = sublayers.length;
  var opacity = rawOpacity * numSublayers;

  // This is the 'transluscent' sublayer. Every layer below it
  // is transparent, every layer above it is opaque. It may be semi-transparent
  // or opaque.
  var transluscentLayer = Math.floor(numSublayers - opacity);

  // Transparent.
  for (var sublayer = 0; sublayer < transluscentLayer; sublayer++) {
    sublayers[sublayer].forEach(function(entityId) {
        entityToOpacity[entityId] = 0;
      });
  }

  // Transluscent or opaque.
  if (transluscentLayer < sublayers.length) {
    var sublayerOpacity = opacity - (sublayers.length - transluscentLayer - 1);
    sublayers[transluscentLayer].forEach(function(entityId) {
        entityToOpacity[entityId] = sublayerOpacity;
      });
  }

  // Opaque.
  for (var sublayer = transluscentLayer + 1; sublayer < sublayers.length;
       sublayer++) {
    if (sublayers[sublayer]) {
      sublayers[sublayer].forEach(function(entityId) {
          entityToOpacity[entityId] = 1;
        });
    }
  }

  return entityToOpacity;
};

// Helper function that applies an opacity modifier to a transparency.
o3v.OpacityManager.prototype.getOpacityWithModifier_ =
    function(base, modifier) {
  if (modifier == 0) {
    return base;
  } else if (modifier > 0) {
    return (base * (1 - modifier)) + (modifier);
  } else {
    return (base * (1 + modifier));
  }
};

// Helper function to modify opacity for a bunch of entities at once.
o3v.OpacityManager.prototype.modifyOpacityForEntities_ =
    function(entityToOpacity, modifier) {
  o3v.util.forEach(entityToOpacity, function(opacity, entityId) {
      entityToOpacity[entityId] = this.getOpacityWithModifier_(opacity,
                                                               modifier);
    }, this);
};

// If there is a selection, make other layers very transparent and the layer
// with the selection somewhat transparent.
o3v.OpacityManager.prototype.adjustLayersFromSelection_ =
    function(layerToEntityOpacities) {
  if (this.selectionManager_.haveSelected()) {
    var layersWithSelection = this.selectionManager_.getLayersWithSelected();
    var selectedModifier =
        this.selectionManager_.getSelectedLayerOpacityModifier();
    var otherModifier = this.selectionManager_.getOtherLayerOpacityModifier();
    o3v.util.forEach(
        layerToEntityOpacities,
        function(entityOpacities, layerId) {
          if (layersWithSelection[layerId]) {
            this.modifyOpacityForEntities_(entityOpacities, selectedModifier);
          } else {
            this.modifyOpacityForEntities_(entityOpacities, otherModifier);
          }
        }, this);
  }
};

// Adjust entities based on their modified opacities from select / etc.
// TODO(dkogan): Selecting two nodes that end up with the same leaves may
// break this (e.g. select heart, and circulatory at once.)
o3v.OpacityManager.prototype.adjustEntitiesFromSelection_ =
    function(layerToEntityOpacities, entities) {

  o3v.util.forEach(
      entities,
      function(entity, entityId) {
        var opacityModifier =
        this.selectionManager_.getEntityOpacityModifier(entityId);

        var leafEntityIds = this.entityMetadata_.getLeafIds(entityId);
        Object.keys(leafEntityIds).forEach(
            function(leafId) {
              var leaf = this.entityMetadata_.getEntity(leafId);
              var layerId = leaf.layers[0];  // Guaranteed only one.
              var layerOpacities = layerToEntityOpacities[layerId];
              var leafOpacity = layerOpacities[leafId];
              leafOpacity = this.getOpacityWithModifier_(
                  leafOpacity, opacityModifier);
              layerOpacities[leafId] = leafOpacity;
            }, this);
      }, this);
};

// This pushes opacities back into the layer opacity manager, forcing
// all the layers at or below any selected layers to opacity 1, and all
// other layers to opacity zero.
o3v.OpacityManager.prototype.exposeSelected = function() {
  if (this.selectionManager_.haveSelected()) {
    var layersToExpose = this.selectionManager_.getLayersWithSelected();
    var layerNames = this.entityMetadata_.getLayerNames();

    var exposed = false;
    var newOpacities = [];

    for (var i = 0; i < layerNames.length; i++) {
      var layerId = this.entityMetadata_.layerNameToId(layerNames[i]);
      if (layersToExpose[layerId] !== undefined) {
        exposed = true;
      }
      if (exposed) {
        newOpacities[layerNames.length - 1 - i] = 1;
      } else {
        newOpacities[layerNames.length - 1 - i] = 0;
      }
    }

    this.layerOpacityManager_.setLayerOpacities(newOpacities);
  }
};

o3v.OpacityManager.prototype.handleLayerOpacityUpdate = function() {
  if (!this.entityMetadata_) {
    // Not yet set up, return.
    return;
  }

  // TODO(dkogan|arthurb): Switch layerOpacityManager entity ids.
  var newOpacities = this.layerOpacityManager_.getLayerOpacities();
  var layerNames = this.entityMetadata_.getLayerNames();

  if (newOpacities.length != layerNames.length) {
    o3v.log.error("New opacities don't match expected count, unable to update",
                  newOpacities.length, layerNames.length);
    return;
  }

  for (var i = 0; i < layerNames.length; i++) {
    var layerId = this.entityMetadata_.layerNameToId(layerNames[i]);
    var layer = this.entityMetadata_.getEntity(layerId);
    if (layer) {
      // Note: The input is in reverse order here; kind of a nuisance.
      this.layerOpacities_[layerId].setFuture(
          newOpacities[layerNames.length - 1 - i]);
    }
  }

  this.changeCallback_();
};

// Remove exceptions and use external ids.
o3v.OpacityManager.prototype.convertToExternalIds_ =
    function(opacityToEntities) {

  var opacityToExternalEntities = {};

  o3v.util.forEach(
      opacityToEntities,
      function(entities, opacity) {
        opacityToExternalEntities[opacity] = {};
        o3v.util.forEach(
            entities,
            function(opt_true, entityId) {
              var entity = this.entityMetadata_.getEntity(entityId);
              var externalId = entity.externalId;
              opacityToExternalEntities[opacity][externalId] = true;
            }, this);
      }, this);
  return opacityToExternalEntities;
};

// INPUT:
// { <layer id> : { entityId : <opacity> }}
// OUTPUT:
// { <opacity> : { <entity id>: true }}
o3v.OpacityManager.prototype.convertLayerToEntityOpacities_ =
    function(layerToEntityOpacities) {

  var opacityToEntities = {};

  o3v.util.forEach(
      layerToEntityOpacities,
      function(entityOpacities) {
        o3v.util.forEach(
            entityOpacities,
            function(opacity, entityId) {
              if (opacityToEntities[opacity] === undefined) {
                opacityToEntities[opacity] = {};
              }
              opacityToEntities[opacity][entityId] = true;
            });
      });

  return opacityToEntities;

};

// Gets layer opacity info.
// Returns:
// { <opacity> : { <entityId> : true }
// Or null if everything is opaque.
o3v.OpacityManager.prototype.getOpacityInfo = function(opt_forSelection) {
  // opt_forSelection = true;

  // Most of the initial processing is done per-layer because much of
  // the opacity information is relevant per-layer.

  // This is an Object.<number,Object<number,number>> of
  // (layerId -> { entityId -> opacity }}
  var layerToEntityOpacities = {};

  // Layer-level opacities.
  o3v.util.forEach(
      this.layerOpacities_,
      function(unused_layerOpacityInfo, layerId) {
        layerToEntityOpacities[layerId] =
            this.getOpacityFromLayering_(layerId);
      }, this);

  // Adjust opacity of layers to account for any selection.
  // Note the difference between for and from here.
  if (!opt_forSelection) {
    this.adjustLayersFromSelection_(layerToEntityOpacities);
  }

  // Hidden entities are hidden both for selection and otherwise.
  this.adjustEntitiesFromSelection_(layerToEntityOpacities,
                                    this.selectionManager_.getHidden());
  // Adjust for selected entities.
  this.adjustEntitiesFromSelection_(layerToEntityOpacities,
                                    this.selectionManager_.getSelected());
  // Adjust for pinned entities.
  this.adjustEntitiesFromSelection_(layerToEntityOpacities,
                                    this.selectionManager_.getPinned());

  // Create list of opacities -> list of entities.
  // Empty set means everything is opaque.
  var opacityToEntities = this.convertLayerToEntityOpacities_(
      layerToEntityOpacities);

  if (opt_forSelection) {
    // For selection, make all opacities integer values.
    var newOpacityToEntities = {};
    newOpacityToEntities[0] = {};
    newOpacityToEntities[1] = {};
    o3v.util.forEach(
        opacityToEntities,
        function(entities, opacity) {
          if (opacity >= 0.5) {
            o3v.util.forEach(
                entities,
                function(usused_true, entityId) {
                  newOpacityToEntities[1][entityId] = true;
                });
          } else {
            o3v.util.forEach(
                entities,
                function(usused_true, entityId) {
                  newOpacityToEntities[0][entityId] = true;
                });
          }
        });
    opacityToEntities = newOpacityToEntities;
  }

  // Use external ids.
  opacityToEntities = this.convertToExternalIds_(opacityToEntities);

  return opacityToEntities;
};


o3v.OpacityManager.prototype.recalculate = function() {
  var updates = false;

  updates |= o3v.Interpolant.tweenAll(
      this.layerOpacityInterpolants_);
  return updates;
};
// Copyright 2011 Google Inc. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * @fileoverview GUI elements of the page (buttons, slider, etc).
 */

o3v.MainUI = function(nextModelCallback) {

  // Canvas.
  $('<canvas>').appendTo('.cow').css({
      'position': 'absolute',
      'width': '100%',
      'height': '100%',
      'z-index': o3v.uiSettings.ZINDEX_VIEWER
    }).attr('id', 'viewer');
  this.canvas_ = $('#viewer')[0];
  this.canvas_.onselectstart = function() {return false;};
  this.canvas_.onmousedown = function() {return false;};

  // Logo.
  $('<img src="img/logo.png">').appendTo('body').css({
      'position': 'absolute',
      'left': '8px',
      'top': '10px',
      'z-index': o3v.uiSettings.ZINDEX_MAINUI
    }).click(function () {
        this.navHandler(this.NAV_HOME);
      });

  // Model selector.
  this.modelBtn_ = $('<div>').appendTo('body').css({
      'position': 'absolute',
      'left': '17px',
      'top': '219px',
      'width': '45px',
      'height': '50px',
      'border-left': '2px solid #92e497',
      'border-top-left-radius': '16px',
      'border-top-right-radius': '16px',
      'border-top': '2px solid #92e497',
      'border-right': '2px solid #92e497',
      'border-bottom': '1px solid #c2ffb7',
      'background-position': 'center center',
      'background-repeat': 'no-repeat',
      'background-color': '#fff',
      'z-index': o3v.uiSettings.ZINDEX_MAINUI
    }).click(nextModelCallback);
};

o3v.MainUI.prototype.setModelSelectorButton = function(iconFile) {
  this.modelBtn_.css({
    'background-image': 'url(' + iconFile + ')'
    });
};

o3v.MainUI.prototype.getCanvas = function() {
  return this.canvas_;
};

o3v.MainUI.prototype.showLoadingFeedback = function(show) {
  document.getElementById('loading-feedback').style.visibility =
    show ? 'visible' : 'hidden';
};

o3v.MainUI.prototype.getLastButton = function() {
  return this.modelBtn_.get(0);
};
// Copyright 2011 Google Inc. All Rights Reserved.

/**
 * @fileoverview Description of this file.
 * @author dkogan@google.com (David Kogan)
 */
// Copyright 2011 Google Inc. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

o3v.RenderInterface = function(canvas, opacityManager, contentManager) {
  this.renderer_ = new Renderer(canvas, this.textureFromMaterial_.bind(this));

  this.opacityManager_ = opacityManager;
  this.contentManager_ = contentManager;

  this.pendingRefresh_ = 0;  // If refresh is waiting, this is its timeout.
  this.REFRESH_WAIT_ = 10;  // Wait 10ms between refresh retries.

  this.reset();
};

o3v.RenderInterface.prototype.textureFromMaterial_ = function(
    gl, material, callback) {
  var modelInfo = this.contentManager_.getCurrentModelInfo();
  var texturePath = modelInfo.texturePath;
  // TODO(dkogan|wonchun): MODELS should probably not be a global variable.
  var materials = MODELS[modelInfo.name].materials;
  try {
    var url = materials[material].map_Kd;  // throw-y.
    if (url === undefined) {
      throw url;
    }
    return textureFromUrl(gl, texturePath + url, callback);
  } catch (e) {
    var color;
    try {
      color = new Uint8Array(materials[material].Kd);
    } catch (e) {
      color = new Uint8Array([255, 255, 255]);
    }
    var texture = textureFromArray(gl, 1, 1, color);
    callback(gl, texture);
    return texture;
  }
}


o3v.RenderInterface.prototype.handleResize = function() {
  this.renderer_.handleResize();
};

o3v.RenderInterface.prototype.onMeshLoad =
    function(attribArray, indexArray, bboxes, meshEntry) {

  this.renderer_.onMeshLoad(attribArray, indexArray, bboxes, meshEntry);

  // Update bbox info.
  for (var i = 0; i < meshEntry.names.length; i++) {
    var bbox = [bboxes[i*6 + 0], bboxes[i*6 + 1], bboxes[i*6 + 2],
                bboxes[i*6 + 3], bboxes[i*6 + 4], bboxes[i*6 + 5]];
    this.bboxes_[meshEntry.names[i]] = bbox;
  }
};

o3v.RenderInterface.prototype.onModelLoad = function() {
  this.renderer_.updateMeshInfo();
};

o3v.RenderInterface.prototype.reset = function() {
  this.renderer_.reset();
  this.bboxes_ = {};
  window.clearTimeout(this.pendingRefresh_);
};

o3v.RenderInterface.prototype.getBboxes = function() {
  return this.bboxes_;
};

o3v.RenderInterface.prototype.refresh = function(camera) {
  if (this.pendingRefresh_) {
    window.clearTimeout(this.pendingRefresh_);
    this.pendingRefresh_ = 0;
  }
  if (this.renderer_.ready()) {
    // Update opacity info.
    this.renderer_.updateOpacity(this.opacityManager_.getOpacityInfo());

    // Send refresh request.
    this.renderer_.postRedisplayWithCamera(camera);
  } else {
    this.pendingRefresh_ = window.setTimeout(
        function() {
          this.refresh(camera);
        }.bind(this), this.REFRESH_WAIT_);
  }
};

o3v.RenderInterface.prototype.getViewportCoords = function(renderCoords) {
  return this.renderer_.getViewportCoords(renderCoords);
};

o3v.RenderInterface.prototype.identify = function(left, top) {
  // Set to int-valued opacities.
  this.renderer_.updateOpacity(this.opacityManager_.getOpacityInfo(true));
  return this.renderer_.identify(left, top);
  this.renderer_.updateOpacity(this.opacityManager_.getOpacityInfo());
};

o3v.RenderInterface.prototype.toggleColored = function() {
  this.renderer_.toggleColored();
};
// Copyright 2011 Google Inc. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * @fileoverview Main object for open-3d-viewer.
 */

o3v.Viewer = function() {
  // Check WebGL and redirect to explanatory page if not supported.
  if (!this.checkWebGL()) {
    window.location.href = 'no_webgl.html';
    return;
  }
  // Tracks history.
  this.history_ = new o3v.History(window);

  // Keeps track of graphical elements on the page.
  this.ui_ = new o3v.MainUI(this.nextModelCallback.bind(this));

  // Navigation tracker takes input and passes it to the renderer.
  this.navigator_ = new o3v.Navigator(this.changeCallback.bind(this),
                                      this.ui_.getCanvas(),
                                      this.history_);

  // Keeps track of selection state.
  this.select_ = new o3v.SelectManager(this.changeCallback.bind(this),
                                       this.navigator_);

  // Keeps track of layer opacities.
  this.layerOpacityManager_ = new o3v.LayerOpacityManager();

  // UI for layers (slider).
  this.layersUI_ = new o3v.LayersUI(this.layerOpacityManager_);

  // Converts opacity inputs (layers & selection) into outputs for renderer.
  this.opacity_ = new o3v.OpacityManager(this.layerOpacityManager_,
                                         this.select_,
                                         this.changeCallback.bind(this));

  // ContentManager manages models.
  this.contentManager_ = new o3v.ContentManager();

  // Interfaces with the renderer.
  this.render_ = new o3v.RenderInterface(this.ui_.getCanvas(), this.opacity_,
                                         this.contentManager_);
  window.addEventListener('resize',
                          function() {
                            this.render_.handleResize();
                            this.changeCallback();
                          }.bind(this), false);

  // Searchbox.
  this.search_ = new o3v.Search(this.selectCallback.bind(this));

  // Input setup.
  var inputHandler = new o3v.InputHandler(window);
  this.setupInputHandlers_(inputHandler);

  // Navigation buttons.
  new o3v.navUI(this.navigator_.reset.bind(this.navigator_),
                this.navigator_.drag.bind(this.navigator_),
                this.navigator_.scroll.bind(this.navigator_));

  // Platform-specific gestures.
  this.gestures_ = new o3v.Gestures();

  // Labels. Requires input handler to track clicks on labels.
  this.label_ = new o3v.Label(inputHandler, this.select_, this.render_,
                              this.ui_.getCanvas(),
                              $('#labelcontainer')[0],
                              this.navigator_,
                              this.gestures_);

  this.loadedModel_ = false;
  this.loadedMetadata_ = false;

  // Load first model.
  this.ui_.showLoadingFeedback(true);
  this.contentManager_.nextModel(this.onModelInfoLoad_.bind(this),
                                 this.render_.onMeshLoad.bind(this.render_),
                                 this.onModelLoad_.bind(this),
                                 this.onMetadataLoad_.bind(this));
  // Restore any pending state and listen to further history changes.
  this.historyStarted_ = false;
};

o3v.Viewer.REFRESH_INTERVAL_ = 20;  // 1000/x Hz (this controls interpolants)

o3v.Viewer.prototype.checkWebGL = function() {
  if (!o3v.webGLUtil.browserSupportsWebGL(document.getElementById('gltest'))) {
    return false;
  } else {
    return true;
  }
};

o3v.Viewer.prototype.onModelInfoLoad_ = function(modelInfo) {
  // Update UI.
  this.ui_.setModelSelectorButton(modelInfo.modelPath + '/model_icon.png');
  this.layersUI_.buildAll(this.ui_.getLastButton(), modelInfo.numLayers,
                          modelInfo.modelPath + '/layer_icons.png');

  // Update slider.
  this.layerOpacityManager_.init(modelInfo.numLayers);
};

o3v.Viewer.prototype.onMetadataLoad_ = function() {
  var metadata = this.contentManager_.getMetadata();
  console.log("onMetadataLoad_ 1");
  // Update modules that rely on metadata.
  //this.search_.reset(this.contentManager_.getMetadata().getAutocompleteList());
  this.select_.reset(metadata);
  this.label_.reset(metadata);

  this.opacity_.reset(metadata);

  this.loadedMetadata_ = true;
  console.log("onMetadataLoad_ 2");
  if (this.loadedModel_) {
    this.onModelAndMetadataLoad_();
  }
};

o3v.Viewer.prototype.onModelLoad_ = function() {
  this.loadedModel_ = true;
  this.render_.onModelLoad();

  if (this.loadedMetadata_) {
    this.onModelAndMetadataLoad_();
  }
};

// Called when both model and metadata are loaded.
o3v.Viewer.prototype.onModelAndMetadataLoad_ = function() {
  // This requires both meshes and metadata to be loaded.
  this.contentManager_.getMetadata().computeBboxes(this.render_.getBboxes());
  this.navigator_.resetModel(
      this.contentManager_.getMetadata().getRootEntity().bbox);

  this.ui_.showLoadingFeedback(false);

  if (this.historyStarted_) {
    // Reset view.
    this.navigator_.reset();
  } else {
    // Reset view initially.
    // TODO(dkogan): Handle model selection.
    this.history_.start();
    this.historyStarted_ = true;
  }

  // Refresh.
  this.changeCallback();
};

o3v.Viewer.prototype.nextModelCallback = function() {
  this.loadedModel_ = false;
  this.loadedMetadata_ = false;

  this.render_.reset();

  this.ui_.showLoadingFeedback(true);

  this.contentManager_.nextModel(this.onModelInfoLoad_.bind(this),
                                 this.render_.onMeshLoad.bind(this.render_),
                                 this.onModelLoad_.bind(this),
                                 this.onMetadataLoad_.bind(this));
};

// Callback that happens when something changes that requires a re-render.
// Because of interpolant use, we need to repeat changeCallback until
// all the changes are done processing.
o3v.Viewer.prototype.changeCallback = function(opt_checkBeforeProceeding) {
  if (!this.loadedMetadata_ || !this.loadedModel_) {
    window.setTimeout(this.changeCallback.bind(this),
                      o3v.Viewer.REFRESH_INTERVAL_);
    return;
  }

  if (opt_checkBeforeProceeding) {
    var needUpdate = false;
    needUpdate = this.select_.recalculate() || needUpdate;
    needUpdate = this.opacity_.recalculate() || needUpdate;
    needUpdate = this.navigator_.recalculate() || needUpdate;
    if (!needUpdate) {
      return;
    }
  }

  // Refresh view.
  this.render_.refresh(this.navigator_.camera);
  this.label_.refresh();

  window.setTimeout(function () {
      this.changeCallback(true);
    }.bind(this), o3v.Viewer.REFRESH_INTERVAL_);
};

o3v.Viewer.prototype.selectCallback = function(searchTerm) {
  if (!this.loadedMetadata_ || !this.loadedModel_) {
    return;
  }
  var entityIds = this.contentManager_.getMetadata().searchToEntityIds(
      searchTerm);

  this.select_.selectMultiple(entityIds);

  if (this.select_.haveSelected()) {
    this.opacity_.exposeSelected();
    var bbox = this.navigator_.focusOnEntities(this.select_.getSelected());
    this.navigator_.goToBBox(bbox);
  } else {
    this.navigator_.resetNavParameters();
  }

  // TODO(dkogan|arthurb): Reimplement.
  //this.select_.exposeSelected();
};

o3v.Viewer.prototype.handleClick = function(left, top, modifiers) {
  var externalId = this.render_.identify(left, top);

  if (!externalId) {
    this.select_.clearSelection();
    this.navigator_.resetNavParameters();
  } else {
    var entityId = this.contentManager_.getMetadata().externalIdToId(
        externalId);
    // Identify entity under click.
    var entity = this.contentManager_.getMetadata().getEntity(entityId);
    if (this.gestures_.isHideClick(
        modifiers[o3v.InputHandler.CONTROL],
        modifiers[o3v.InputHandler.META])) {
      // Impossible to click on a hidden entity, so no need for toggle.
      this.select_.hide(entityId);
    } else if (modifiers[o3v.InputHandler.SHIFT]) {
      this.select_.togglePin(entityId);
    } else {
      this.select_.pickMultiple([entityId]);

      var bbox = this.navigator_.focusOnEntities(this.select_.getSelected());
      this.navigator_.goToBBox(bbox, true);
    }
  }
};

o3v.Viewer.prototype.setupInputHandlers_ = function(inputHandler) {
  // Click to select.
  inputHandler.registerHandler(o3v.InputHandler.CLICK,
                               $('#viewer')[0],
                               this.handleClick.bind(this), true);

  // Mouse-based navigation.
  inputHandler.registerHandler(o3v.InputHandler.DRAG,
                               $('#viewer')[0],
                               this.navigator_.drag.bind(this.navigator_),
                               true);
  inputHandler.registerHandler(o3v.InputHandler.SCROLL,
                               $('#viewer')[0],
                               this.navigator_.scroll.bind(this.navigator_),
                               true);

  new o3v.NavKeyHandler(
      inputHandler,
      function(x, y, z) {
        // keyboard move
        this.navigator_.drag(x * 10, y * -10);
        this.navigator_.scroll(0, z * 30);
      }.bind(this),
      this.navigator_.reset.bind(this.navigator_));

  // Clicking on help toggles help.
  $('#help-hidden').click(this.toggleHelp_.bind(this));
  $('#help').click(this.toggleHelp_.bind(this));

  // Miscellaneous keys.
  inputHandler.registerHandler(
      o3v.InputHandler.KEYDOWN, null,
      function(keyCode) {
        if (keyCode == 191) {  // '?'
          this.toggleHelp_();
        } else if (keyCode == 67) {  // 'c'
          this.render_.toggleColored();
          this.changeCallback();
        } else if (keyCode == 66) {  // 'b'
          this.label_.toggleBoundingBox();
          this.changeCallback();
        }
      }.bind(this));
};

o3v.Viewer.prototype.toggleHelp_ = function() {
  if ($('#help')[0].style['display'] != 'block') {
    $('#help')[0].style['display'] = 'block';
    $('#help-hidden')[0].style['display'] = 'none';
  } else {
    $('#help')[0].style['display'] = 'none';
    $('#help-hidden')[0].style['display'] = 'block';
  }
};
