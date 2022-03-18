<?
ob_start("ob_gzhandler");
header("Content-type: text/javascript; charset: UTF-8");




$js .='
/*!
 * Bootstrap v3.3.7 (http://getbootstrap.com)
 * Copyright 2011-2017 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)

 * Generated using the Bootstrap Customizer (http://getbootstrap.com/customize/?id=cb83f33c3b25bf09b02acd22ebeefac3)
 * Config saved to config.json and https://gist.github.com/cb83f33c3b25bf09b02acd22ebeefac3
 */
if("undefined"==typeof jQuery)throw new Error("Bootstrap\'s JavaScript requires jQuery");+function(t){"use strict";var e=t.fn.jquery.split(" ")[0].split(".");if(e[0]<2&&e[1]<9||1==e[0]&&9==e[1]&&e[2]<1||e[0]>3)throw new Error("Bootstrap\'s JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4")}(jQuery),+function(t){"use strict";function e(e){return this.each(function(){var i=t(this),n=i.data("bs.alert");n||i.data("bs.alert",n=new o(this)),"string"==typeof e&&n[e].call(i)})}var i=\'[data-dismiss="alert"]\',o=function(e){t(e).on("click",i,this.close)};o.VERSION="3.3.7",o.TRANSITION_DURATION=150,o.prototype.close=function(e){function i(){a.detach().trigger("closed.bs.alert").remove()}var n=t(this),s=n.attr("data-target");s||(s=n.attr("href"),s=s&&s.replace(/.*(?=#[^\s]*$)/,""));var a=t("#"===s?[]:s);e&&e.preventDefault(),a.length||(a=n.closest(".alert")),a.trigger(e=t.Event("close.bs.alert")),e.isDefaultPrevented()||(a.removeClass("in"),t.support.transition&&a.hasClass("fade")?a.one("bsTransitionEnd",i).emulateTransitionEnd(o.TRANSITION_DURATION):i())};var n=t.fn.alert;t.fn.alert=e,t.fn.alert.Constructor=o,t.fn.alert.noConflict=function(){return t.fn.alert=n,this},t(document).on("click.bs.alert.data-api",i,o.prototype.close)}(jQuery),+function(t){"use strict";function e(e){return this.each(function(){var o=t(this),n=o.data("bs.button"),s="object"==typeof e&&e;n||o.data("bs.button",n=new i(this,s)),"toggle"==e?n.toggle():e&&n.setState(e)})}var i=function(e,o){this.$element=t(e),this.options=t.extend({},i.DEFAULTS,o),this.isLoading=!1};i.VERSION="3.3.7",i.DEFAULTS={loadingText:"loading..."},i.prototype.setState=function(e){var i="disabled",o=this.$element,n=o.is("input")?"val":"html",s=o.data();e+="Text",null==s.resetText&&o.data("resetText",o[n]()),setTimeout(t.proxy(function(){o[n](null==s[e]?this.options[e]:s[e]),"loadingText"==e?(this.isLoading=!0,o.addClass(i).attr(i,i).prop(i,!0)):this.isLoading&&(this.isLoading=!1,o.removeClass(i).removeAttr(i).prop(i,!1))},this),0)},i.prototype.toggle=function(){var t=!0,e=this.$element.closest(\'[data-toggle="buttons"]\');if(e.length){var i=this.$element.find("input");"radio"==i.prop("type")?(i.prop("checked")&&(t=!1),e.find(".active").removeClass("active"),this.$element.addClass("active")):"checkbox"==i.prop("type")&&(i.prop("checked")!==this.$element.hasClass("active")&&(t=!1),this.$element.toggleClass("active")),i.prop("checked",this.$element.hasClass("active")),t&&i.trigger("change")}else this.$element.attr("aria-pressed",!this.$element.hasClass("active")),this.$element.toggleClass("active")};var o=t.fn.button;t.fn.button=e,t.fn.button.Constructor=i,t.fn.button.noConflict=function(){return t.fn.button=o,this},t(document).on("click.bs.button.data-api",\'[data-toggle^="button"]\',function(i){var o=t(i.target).closest(".btn");e.call(o,"toggle"),t(i.target).is(\'input[type="radio"], input[type="checkbox"]\')||(i.preventDefault(),o.is("input,button")?o.trigger("focus"):o.find("input:visible,button:visible").first().trigger("focus"))}).on("focus.bs.button.data-api blur.bs.button.data-api",\'[data-toggle^="button"]\',function(e){t(e.target).closest(".btn").toggleClass("focus",/^focus(in)?$/.test(e.type))})}(jQuery),+function(t){"use strict";function e(e){var i=e.attr("data-target");i||(i=e.attr("href"),i=i&&/#[A-Za-z]/.test(i)&&i.replace(/.*(?=#[^\s]*$)/,""));var o=i&&t(i);return o&&o.length?o:e.parent()}function i(i){i&&3===i.which||(t(n).remove(),t(s).each(function(){var o=t(this),n=e(o),s={relatedTarget:this};n.hasClass("open")&&(i&&"click"==i.type&&/input|textarea/i.test(i.target.tagName)&&t.contains(n[0],i.target)||(n.trigger(i=t.Event("hide.bs.dropdown",s)),i.isDefaultPrevented()||(o.attr("aria-expanded","false"),n.removeClass("open").trigger(t.Event("hidden.bs.dropdown",s)))))}))}function o(e){return this.each(function(){var i=t(this),o=i.data("bs.dropdown");o||i.data("bs.dropdown",o=new a(this)),"string"==typeof e&&o[e].call(i)})}var n=".dropdown-backdrop",s=\'[data-toggle="dropdown"]\',a=function(e){t(e).on("click.bs.dropdown",this.toggle)};a.VERSION="3.3.7",a.prototype.toggle=function(o){var n=t(this);if(!n.is(".disabled, :disabled")){var s=e(n),a=s.hasClass("open");if(i(),!a){"ontouchstart"in document.documentElement&&!s.closest(".navbar-nav").length&&t(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(t(this)).on("click",i);var r={relatedTarget:this};if(s.trigger(o=t.Event("show.bs.dropdown",r)),o.isDefaultPrevented())return;n.trigger("focus").attr("aria-expanded","true"),s.toggleClass("open").trigger(t.Event("shown.bs.dropdown",r))}return!1}},a.prototype.keydown=function(i){if(/(38|40|27|32)/.test(i.which)&&!/input|textarea/i.test(i.target.tagName)){var o=t(this);if(i.preventDefault(),i.stopPropagation(),!o.is(".disabled, :disabled")){var n=e(o),a=n.hasClass("open");if(!a&&27!=i.which||a&&27==i.which)return 27==i.which&&n.find(s).trigger("focus"),o.trigger("click");var r=" li:not(.disabled):visible a",l=n.find(".dropdown-menu"+r);if(l.length){var h=l.index(i.target);38==i.which&&h>0&&h--,40==i.which&&h<l.length-1&&h++,~h||(h=0),l.eq(h).trigger("focus")}}}};var r=t.fn.dropdown;t.fn.dropdown=o,t.fn.dropdown.Constructor=a,t.fn.dropdown.noConflict=function(){return t.fn.dropdown=r,this},t(document).on("click.bs.dropdown.data-api",i).on("click.bs.dropdown.data-api",".dropdown form",function(t){t.stopPropagation()}).on("click.bs.dropdown.data-api",s,a.prototype.toggle).on("keydown.bs.dropdown.data-api",s,a.prototype.keydown).on("keydown.bs.dropdown.data-api",".dropdown-menu",a.prototype.keydown)}(jQuery),+function(t){"use strict";function e(e,o){return this.each(function(){var n=t(this),s=n.data("bs.modal"),a=t.extend({},i.DEFAULTS,n.data(),"object"==typeof e&&e);s||n.data("bs.modal",s=new i(this,a)),"string"==typeof e?s[e](o):a.show&&s.show(o)})}var i=function(e,i){this.options=i,this.$body=t(document.body),this.$element=t(e),this.$dialog=this.$element.find(".modal-dialog"),this.$backdrop=null,this.isShown=null,this.originalBodyPad=null,this.scrollbarWidth=0,this.ignoreBackdropClick=!1,this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,t.proxy(function(){this.$element.trigger("loaded.bs.modal")},this))};i.VERSION="3.3.7",i.TRANSITION_DURATION=300,i.BACKDROP_TRANSITION_DURATION=150,i.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},i.prototype.toggle=function(t){return this.isShown?this.hide():this.show(t)},i.prototype.show=function(e){var o=this,n=t.Event("show.bs.modal",{relatedTarget:e});this.$element.trigger(n),this.isShown||n.isDefaultPrevented()||(this.isShown=!0,this.checkScrollbar(),this.setScrollbar(),this.$body.addClass("modal-open"),this.escape(),this.resize(),this.$element.on("click.dismiss.bs.modal",\'[data-dismiss="modal"]\',t.proxy(this.hide,this)),this.$dialog.on("mousedown.dismiss.bs.modal",function(){o.$element.one("mouseup.dismiss.bs.modal",function(e){t(e.target).is(o.$element)&&(o.ignoreBackdropClick=!0)})}),this.backdrop(function(){var n=t.support.transition&&o.$element.hasClass("fade");o.$element.parent().length||o.$element.appendTo(o.$body),o.$element.show().scrollTop(0),o.adjustDialog(),n&&o.$element[0].offsetWidth,o.$element.addClass("in"),o.enforceFocus();var s=t.Event("shown.bs.modal",{relatedTarget:e});n?o.$dialog.one("bsTransitionEnd",function(){o.$element.trigger("focus").trigger(s)}).emulateTransitionEnd(i.TRANSITION_DURATION):o.$element.trigger("focus").trigger(s)}))},i.prototype.hide=function(e){e&&e.preventDefault(),e=t.Event("hide.bs.modal"),this.$element.trigger(e),this.isShown&&!e.isDefaultPrevented()&&(this.isShown=!1,this.escape(),this.resize(),t(document).off("focusin.bs.modal"),this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"),this.$dialog.off("mousedown.dismiss.bs.modal"),t.support.transition&&this.$element.hasClass("fade")?this.$element.one("bsTransitionEnd",t.proxy(this.hideModal,this)).emulateTransitionEnd(i.TRANSITION_DURATION):this.hideModal())},i.prototype.enforceFocus=function(){t(document).off("focusin.bs.modal").on("focusin.bs.modal",t.proxy(function(t){document===t.target||this.$element[0]===t.target||this.$element.has(t.target).length||this.$element.trigger("focus")},this))},i.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keydown.dismiss.bs.modal",t.proxy(function(t){27==t.which&&this.hide()},this)):this.isShown||this.$element.off("keydown.dismiss.bs.modal")},i.prototype.resize=function(){this.isShown?t(window).on("resize.bs.modal",t.proxy(this.handleUpdate,this)):t(window).off("resize.bs.modal")},i.prototype.hideModal=function(){var t=this;this.$element.hide(),this.backdrop(function(){t.$body.removeClass("modal-open"),t.resetAdjustments(),t.resetScrollbar(),t.$element.trigger("hidden.bs.modal")})},i.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},i.prototype.backdrop=function(e){var o=this,n=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var s=t.support.transition&&n;if(this.$backdrop=t(document.createElement("div")).addClass("modal-backdrop "+n).appendTo(this.$body),this.$element.on("click.dismiss.bs.modal",t.proxy(function(t){return this.ignoreBackdropClick?void(this.ignoreBackdropClick=!1):void(t.target===t.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus():this.hide()))},this)),s&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!e)return;s?this.$backdrop.one("bsTransitionEnd",e).emulateTransitionEnd(i.BACKDROP_TRANSITION_DURATION):e()}else if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass("in");var a=function(){o.removeBackdrop(),e&&e()};t.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one("bsTransitionEnd",a).emulateTransitionEnd(i.BACKDROP_TRANSITION_DURATION):a()}else e&&e()},i.prototype.handleUpdate=function(){this.adjustDialog()},i.prototype.adjustDialog=function(){var t=this.$element[0].scrollHeight>document.documentElement.clientHeight;this.$element.css({paddingLeft:!this.bodyIsOverflowing&&t?this.scrollbarWidth:"",paddingRight:this.bodyIsOverflowing&&!t?this.scrollbarWidth:""})},i.prototype.resetAdjustments=function(){this.$element.css({paddingLeft:"",paddingRight:""})},i.prototype.checkScrollbar=function(){var t=window.innerWidth;if(!t){var e=document.documentElement.getBoundingClientRect();t=e.right-Math.abs(e.left)}this.bodyIsOverflowing=document.body.clientWidth<t,this.scrollbarWidth=this.measureScrollbar()},i.prototype.setScrollbar=function(){var t=parseInt(this.$body.css("padding-right")||0,10);this.originalBodyPad=document.body.style.paddingRight||"",this.bodyIsOverflowing&&this.$body.css("padding-right",t+this.scrollbarWidth)},i.prototype.resetScrollbar=function(){this.$body.css("padding-right",this.originalBodyPad)},i.prototype.measureScrollbar=function(){var t=document.createElement("div");t.className="modal-scrollbar-measure",this.$body.append(t);var e=t.offsetWidth-t.clientWidth;return this.$body[0].removeChild(t),e};var o=t.fn.modal;t.fn.modal=e,t.fn.modal.Constructor=i,t.fn.modal.noConflict=function(){return t.fn.modal=o,this},t(document).on("click.bs.modal.data-api",\'[data-toggle="modal"]\',function(i){var o=t(this),n=o.attr("href"),s=t(o.attr("data-target")||n&&n.replace(/.*(?=#[^\s]+$)/,"")),a=s.data("bs.modal")?"toggle":t.extend({remote:!/#/.test(n)&&n},s.data(),o.data());o.is("a")&&i.preventDefault(),s.one("show.bs.modal",function(t){t.isDefaultPrevented()||s.one("hidden.bs.modal",function(){o.is(":visible")&&o.trigger("focus")})}),e.call(s,a,this)})}(jQuery),+function(t){"use strict";function e(e){return this.each(function(){var o=t(this),n=o.data("bs.tooltip"),s="object"==typeof e&&e;!n&&/destroy|hide/.test(e)||(n||o.data("bs.tooltip",n=new i(this,s)),"string"==typeof e&&n[e]())})}var i=function(t,e){this.type=null,this.options=null,this.enabled=null,this.timeout=null,this.hoverState=null,this.$element=null,this.inState=null,this.init("tooltip",t,e)};i.VERSION="3.3.7",i.TRANSITION_DURATION=150,i.DEFAULTS={animation:!0,placement:"top",selector:!1,template:\'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>\',trigger:"hover focus",title:"",delay:0,html:!1,container:!1,viewport:{selector:"body",padding:0}},i.prototype.init=function(e,i,o){if(this.enabled=!0,this.type=e,this.$element=t(i),this.options=this.getOptions(o),this.$viewport=this.options.viewport&&t(t.isFunction(this.options.viewport)?this.options.viewport.call(this,this.$element):this.options.viewport.selector||this.options.viewport),this.inState={click:!1,hover:!1,focus:!1},this.$element[0]instanceof document.constructor&&!this.options.selector)throw new Error("`selector` option must be specified when initializing "+this.type+" on the window.document object!");for(var n=this.options.trigger.split(" "),s=n.length;s--;){var a=n[s];if("click"==a)this.$element.on("click."+this.type,this.options.selector,t.proxy(this.toggle,this));else if("manual"!=a){var r="hover"==a?"mouseenter":"focusin",l="hover"==a?"mouseleave":"focusout";this.$element.on(r+"."+this.type,this.options.selector,t.proxy(this.enter,this)),this.$element.on(l+"."+this.type,this.options.selector,t.proxy(this.leave,this))}}this.options.selector?this._options=t.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},i.prototype.getDefaults=function(){return i.DEFAULTS},i.prototype.getOptions=function(e){return e=t.extend({},this.getDefaults(),this.$element.data(),e),e.delay&&"number"==typeof e.delay&&(e.delay={show:e.delay,hide:e.delay}),e},i.prototype.getDelegateOptions=function(){var e={},i=this.getDefaults();return this._options&&t.each(this._options,function(t,o){i[t]!=o&&(e[t]=o)}),e},i.prototype.enter=function(e){var i=e instanceof this.constructor?e:t(e.currentTarget).data("bs."+this.type);return i||(i=new this.constructor(e.currentTarget,this.getDelegateOptions()),t(e.currentTarget).data("bs."+this.type,i)),e instanceof t.Event&&(i.inState["focusin"==e.type?"focus":"hover"]=!0),i.tip().hasClass("in")||"in"==i.hoverState?void(i.hoverState="in"):(clearTimeout(i.timeout),i.hoverState="in",i.options.delay&&i.options.delay.show?void(i.timeout=setTimeout(function(){"in"==i.hoverState&&i.show()},i.options.delay.show)):i.show())},i.prototype.isInStateTrue=function(){for(var t in this.inState)if(this.inState[t])return!0;return!1},i.prototype.leave=function(e){var i=e instanceof this.constructor?e:t(e.currentTarget).data("bs."+this.type);return i||(i=new this.constructor(e.currentTarget,this.getDelegateOptions()),t(e.currentTarget).data("bs."+this.type,i)),e instanceof t.Event&&(i.inState["focusout"==e.type?"focus":"hover"]=!1),i.isInStateTrue()?void 0:(clearTimeout(i.timeout),i.hoverState="out",i.options.delay&&i.options.delay.hide?void(i.timeout=setTimeout(function(){"out"==i.hoverState&&i.hide()},i.options.delay.hide)):i.hide())},i.prototype.show=function(){var e=t.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){this.$element.trigger(e);var o=t.contains(this.$element[0].ownerDocument.documentElement,this.$element[0]);if(e.isDefaultPrevented()||!o)return;var n=this,s=this.tip(),a=this.getUID(this.type);this.setContent(),s.attr("id",a),this.$element.attr("aria-describedby",a),this.options.animation&&s.addClass("fade");var r="function"==typeof this.options.placement?this.options.placement.call(this,s[0],this.$element[0]):this.options.placement,l=/\s?auto?\s?/i,h=l.test(r);h&&(r=r.replace(l,"")||"top"),s.detach().css({top:0,left:0,display:"block"}).addClass(r).data("bs."+this.type,this),this.options.container?s.appendTo(this.options.container):s.insertAfter(this.$element),this.$element.trigger("inserted.bs."+this.type);var d=this.getPosition(),p=s[0].offsetWidth,c=s[0].offsetHeight;if(h){var f=r,u=this.getPosition(this.$viewport);r="bottom"==r&&d.bottom+c>u.bottom?"top":"top"==r&&d.top-c<u.top?"bottom":"right"==r&&d.right+p>u.width?"left":"left"==r&&d.left-p<u.left?"right":r,s.removeClass(f).addClass(r)}var g=this.getCalculatedOffset(r,d,p,c);this.applyPlacement(g,r);var m=function(){var t=n.hoverState;n.$element.trigger("shown.bs."+n.type),n.hoverState=null,"out"==t&&n.leave(n)};t.support.transition&&this.$tip.hasClass("fade")?s.one("bsTransitionEnd",m).emulateTransitionEnd(i.TRANSITION_DURATION):m()}},i.prototype.applyPlacement=function(e,i){var o=this.tip(),n=o[0].offsetWidth,s=o[0].offsetHeight,a=parseInt(o.css("margin-top"),10),r=parseInt(o.css("margin-left"),10);isNaN(a)&&(a=0),isNaN(r)&&(r=0),e.top+=a,e.left+=r,t.offset.setOffset(o[0],t.extend({using:function(t){o.css({top:Math.round(t.top),left:Math.round(t.left)})}},e),0),o.addClass("in");var l=o[0].offsetWidth,h=o[0].offsetHeight;"top"==i&&h!=s&&(e.top=e.top+s-h);var d=this.getViewportAdjustedDelta(i,e,l,h);d.left?e.left+=d.left:e.top+=d.top;var p=/top|bottom/.test(i),c=p?2*d.left-n+l:2*d.top-s+h,f=p?"offsetWidth":"offsetHeight";o.offset(e),this.replaceArrow(c,o[0][f],p)},i.prototype.replaceArrow=function(t,e,i){this.arrow().css(i?"left":"top",50*(1-t/e)+"%").css(i?"top":"left","")},i.prototype.setContent=function(){var t=this.tip(),e=this.getTitle();t.find(".tooltip-inner")[this.options.html?"html":"text"](e),t.removeClass("fade in top bottom left right")},i.prototype.hide=function(e){function o(){"in"!=n.hoverState&&s.detach(),n.$element&&n.$element.removeAttr("aria-describedby").trigger("hidden.bs."+n.type),e&&e()}var n=this,s=t(this.$tip),a=t.Event("hide.bs."+this.type);return this.$element.trigger(a),a.isDefaultPrevented()?void 0:(s.removeClass("in"),t.support.transition&&s.hasClass("fade")?s.one("bsTransitionEnd",o).emulateTransitionEnd(i.TRANSITION_DURATION):o(),this.hoverState=null,this)},i.prototype.fixTitle=function(){var t=this.$element;(t.attr("title")||"string"!=typeof t.attr("data-original-title"))&&t.attr("data-original-title",t.attr("title")||"").attr("title","")},i.prototype.hasContent=function(){return this.getTitle()},i.prototype.getPosition=function(e){e=e||this.$element;var i=e[0],o="BODY"==i.tagName,n=i.getBoundingClientRect();null==n.width&&(n=t.extend({},n,{width:n.right-n.left,height:n.bottom-n.top}));var s=window.SVGElement&&i instanceof window.SVGElement,a=o?{top:0,left:0}:s?null:e.offset(),r={scroll:o?document.documentElement.scrollTop||document.body.scrollTop:e.scrollTop()},l=o?{width:t(window).width(),height:t(window).height()}:null;return t.extend({},n,r,l,a)},i.prototype.getCalculatedOffset=function(t,e,i,o){return"bottom"==t?{top:e.top+e.height,left:e.left+e.width/2-i/2}:"top"==t?{top:e.top-o,left:e.left+e.width/2-i/2}:"left"==t?{top:e.top+e.height/2-o/2,left:e.left-i}:{top:e.top+e.height/2-o/2,left:e.left+e.width}},i.prototype.getViewportAdjustedDelta=function(t,e,i,o){var n={top:0,left:0};if(!this.$viewport)return n;var s=this.options.viewport&&this.options.viewport.padding||0,a=this.getPosition(this.$viewport);if(/right|left/.test(t)){var r=e.top-s-a.scroll,l=e.top+s-a.scroll+o;r<a.top?n.top=a.top-r:l>a.top+a.height&&(n.top=a.top+a.height-l)}else{var h=e.left-s,d=e.left+s+i;h<a.left?n.left=a.left-h:d>a.right&&(n.left=a.left+a.width-d)}return n},i.prototype.getTitle=function(){var t,e=this.$element,i=this.options;return t=e.attr("data-original-title")||("function"==typeof i.title?i.title.call(e[0]):i.title)},i.prototype.getUID=function(t){do t+=~~(1e6*Math.random());while(document.getElementById(t));return t},i.prototype.tip=function(){if(!this.$tip&&(this.$tip=t(this.options.template),1!=this.$tip.length))throw new Error(this.type+" `template` option must consist of exactly 1 top-level element!");return this.$tip},i.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},i.prototype.enable=function(){this.enabled=!0},i.prototype.disable=function(){this.enabled=!1},i.prototype.toggleEnabled=function(){this.enabled=!this.enabled},i.prototype.toggle=function(e){var i=this;e&&(i=t(e.currentTarget).data("bs."+this.type),i||(i=new this.constructor(e.currentTarget,this.getDelegateOptions()),t(e.currentTarget).data("bs."+this.type,i))),e?(i.inState.click=!i.inState.click,i.isInStateTrue()?i.enter(i):i.leave(i)):i.tip().hasClass("in")?i.leave(i):i.enter(i)},i.prototype.destroy=function(){var t=this;clearTimeout(this.timeout),this.hide(function(){t.$element.off("."+t.type).removeData("bs."+t.type),t.$tip&&t.$tip.detach(),t.$tip=null,t.$arrow=null,t.$viewport=null,t.$element=null})};var o=t.fn.tooltip;t.fn.tooltip=e,t.fn.tooltip.Constructor=i,t.fn.tooltip.noConflict=function(){return t.fn.tooltip=o,this}}(jQuery),+function(t){"use strict";function e(e){return this.each(function(){var o=t(this),n=o.data("bs.popover"),s="object"==typeof e&&e;!n&&/destroy|hide/.test(e)||(n||o.data("bs.popover",n=new i(this,s)),"string"==typeof e&&n[e]())})}var i=function(t,e){this.init("popover",t,e)};if(!t.fn.tooltip)throw new Error("Popover requires tooltip.js");i.VERSION="3.3.7",i.DEFAULTS=t.extend({},t.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:\'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>\'}),i.prototype=t.extend({},t.fn.tooltip.Constructor.prototype),i.prototype.constructor=i,i.prototype.getDefaults=function(){return i.DEFAULTS},i.prototype.setContent=function(){var t=this.tip(),e=this.getTitle(),i=this.getContent();t.find(".popover-title")[this.options.html?"html":"text"](e),t.find(".popover-content").children().detach().end()[this.options.html?"string"==typeof i?"html":"append":"text"](i),t.removeClass("fade top bottom left right in"),t.find(".popover-title").html()||t.find(".popover-title").hide()},i.prototype.hasContent=function(){return this.getTitle()||this.getContent()},i.prototype.getContent=function(){var t=this.$element,e=this.options;return t.attr("data-content")||("function"==typeof e.content?e.content.call(t[0]):e.content)},i.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")};var o=t.fn.popover;t.fn.popover=e,t.fn.popover.Constructor=i,t.fn.popover.noConflict=function(){return t.fn.popover=o,this}}(jQuery),+function(t){"use strict";function e(e){return this.each(function(){var o=t(this),n=o.data("bs.tab");n||o.data("bs.tab",n=new i(this)),"string"==typeof e&&n[e]()})}var i=function(e){this.element=t(e)};i.VERSION="3.3.7",i.TRANSITION_DURATION=150,i.prototype.show=function(){var e=this.element,i=e.closest("ul:not(.dropdown-menu)"),o=e.data("target");if(o||(o=e.attr("href"),o=o&&o.replace(/.*(?=#[^\s]*$)/,"")),!e.parent("li").hasClass("active")){var n=i.find(".active:last a"),s=t.Event("hide.bs.tab",{relatedTarget:e[0]}),a=t.Event("show.bs.tab",{relatedTarget:n[0]});if(n.trigger(s),e.trigger(a),!a.isDefaultPrevented()&&!s.isDefaultPrevented()){var r=t(o);this.activate(e.closest("li"),i),this.activate(r,r.parent(),function(){n.trigger({type:"hidden.bs.tab",relatedTarget:e[0]}),e.trigger({type:"shown.bs.tab",relatedTarget:n[0]})})}}},i.prototype.activate=function(e,o,n){function s(){a.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find(\'[data-toggle="tab"]\').attr("aria-expanded",!1),e.addClass("active").find(\'[data-toggle="tab"]\').attr("aria-expanded",!0),r?(e[0].offsetWidth,e.addClass("in")):e.removeClass("fade"),e.parent(".dropdown-menu").length&&e.closest("li.dropdown").addClass("active").end().find(\'[data-toggle="tab"]\').attr("aria-expanded",!0),n&&n()}var a=o.find("> .active"),r=n&&t.support.transition&&(a.length&&a.hasClass("fade")||!!o.find("> .fade").length);a.length&&r?a.one("bsTransitionEnd",s).emulateTransitionEnd(i.TRANSITION_DURATION):s(),a.removeClass("in")};var o=t.fn.tab;t.fn.tab=e,t.fn.tab.Constructor=i,t.fn.tab.noConflict=function(){return t.fn.tab=o,this};var n=function(i){i.preventDefault(),e.call(t(this),"show")};t(document).on("click.bs.tab.data-api",\'[data-toggle="tab"]\',n).on("click.bs.tab.data-api",\'[data-toggle="pill"]\',n)}(jQuery),+function(t){"use strict";function e(e){return this.each(function(){var o=t(this),n=o.data("bs.affix"),s="object"==typeof e&&e;n||o.data("bs.affix",n=new i(this,s)),"string"==typeof e&&n[e]()})}var i=function(e,o){this.options=t.extend({},i.DEFAULTS,o),this.$target=t(this.options.target).on("scroll.bs.affix.data-api",t.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",t.proxy(this.checkPositionWithEventLoop,this)),this.$element=t(e),this.affixed=null,this.unpin=null,this.pinnedOffset=null,this.checkPosition()};i.VERSION="3.3.7",i.RESET="affix affix-top affix-bottom",i.DEFAULTS={offset:0,target:window},i.prototype.getState=function(t,e,i,o){var n=this.$target.scrollTop(),s=this.$element.offset(),a=this.$target.height();if(null!=i&&"top"==this.affixed)return i>n?"top":!1;if("bottom"==this.affixed)return null!=i?n+this.unpin<=s.top?!1:"bottom":t-o>=n+a?!1:"bottom";var r=null==this.affixed,l=r?n:s.top,h=r?a:e;return null!=i&&i>=n?"top":null!=o&&l+h>=t-o?"bottom":!1},i.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset;this.$element.removeClass(i.RESET).addClass("affix");var t=this.$target.scrollTop(),e=this.$element.offset();return this.pinnedOffset=e.top-t},i.prototype.checkPositionWithEventLoop=function(){setTimeout(t.proxy(this.checkPosition,this),1)},i.prototype.checkPosition=function(){if(this.$element.is(":visible")){var e=this.$element.height(),o=this.options.offset,n=o.top,s=o.bottom,a=Math.max(t(document).height(),t(document.body).height());"object"!=typeof o&&(s=n=o),"function"==typeof n&&(n=o.top(this.$element)),"function"==typeof s&&(s=o.bottom(this.$element));var r=this.getState(a,e,n,s);if(this.affixed!=r){null!=this.unpin&&this.$element.css("top","");var l="affix"+(r?"-"+r:""),h=t.Event(l+".bs.affix");if(this.$element.trigger(h),h.isDefaultPrevented())return;this.affixed=r,this.unpin="bottom"==r?this.getPinnedOffset():null,this.$element.removeClass(i.RESET).addClass(l).trigger(l.replace("affix","affixed")+".bs.affix")}"bottom"==r&&this.$element.offset({top:a-e-s})}};var o=t.fn.affix;t.fn.affix=e,t.fn.affix.Constructor=i,t.fn.affix.noConflict=function(){return t.fn.affix=o,this},t(window).on("load",function(){t(\'[data-spy="affix"]\').each(function(){var i=t(this),o=i.data();o.offset=o.offset||{},null!=o.offsetBottom&&(o.offset.bottom=o.offsetBottom),null!=o.offsetTop&&(o.offset.top=o.offsetTop),e.call(i,o)})})}(jQuery),+function(t){"use strict";function e(e){var i,o=e.attr("data-target")||(i=e.attr("href"))&&i.replace(/.*(?=#[^\s]+$)/,"");return t(o)}function i(e){return this.each(function(){var i=t(this),n=i.data("bs.collapse"),s=t.extend({},o.DEFAULTS,i.data(),"object"==typeof e&&e);!n&&s.toggle&&/show|hide/.test(e)&&(s.toggle=!1),n||i.data("bs.collapse",n=new o(this,s)),"string"==typeof e&&n[e]()})}var o=function(e,i){this.$element=t(e),this.options=t.extend({},o.DEFAULTS,i),this.$trigger=t(\'[data-toggle="collapse"][href="#\'+e.id+\'"],[data-toggle="collapse"][data-target="#\'+e.id+\'"]\'),this.transitioning=null,this.options.parent?this.$parent=this.getParent():this.addAriaAndCollapsedClass(this.$element,this.$trigger),this.options.toggle&&this.toggle()};o.VERSION="3.3.7",o.TRANSITION_DURATION=350,o.DEFAULTS={toggle:!0},o.prototype.dimension=function(){var t=this.$element.hasClass("width");return t?"width":"height"},o.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var e,n=this.$parent&&this.$parent.children(".panel").children(".in, .collapsing");if(!(n&&n.length&&(e=n.data("bs.collapse"),e&&e.transitioning))){var s=t.Event("show.bs.collapse");if(this.$element.trigger(s),!s.isDefaultPrevented()){n&&n.length&&(i.call(n,"hide"),e||n.data("bs.collapse",null));var a=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[a](0).attr("aria-expanded",!0),this.$trigger.removeClass("collapsed").attr("aria-expanded",!0),this.transitioning=1;var r=function(){this.$element.removeClass("collapsing").addClass("collapse in")[a](""),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!t.support.transition)return r.call(this);var l=t.camelCase(["scroll",a].join("-"));this.$element.one("bsTransitionEnd",t.proxy(r,this)).emulateTransitionEnd(o.TRANSITION_DURATION)[a](this.$element[0][l])}}}},o.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var e=t.Event("hide.bs.collapse");if(this.$element.trigger(e),!e.isDefaultPrevented()){var i=this.dimension();this.$element[i](this.$element[i]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded",!1),this.$trigger.addClass("collapsed").attr("aria-expanded",!1),this.transitioning=1;var n=function(){this.transitioning=0,this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")};return t.support.transition?void this.$element[i](0).one("bsTransitionEnd",t.proxy(n,this)).emulateTransitionEnd(o.TRANSITION_DURATION):n.call(this)}}},o.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()},o.prototype.getParent=function(){return t(this.options.parent).find(\'[data-toggle="collapse"][data-parent="\'+this.options.parent+\'"]\').each(t.proxy(function(i,o){var n=t(o);this.addAriaAndCollapsedClass(e(n),n)},this)).end()},o.prototype.addAriaAndCollapsedClass=function(t,e){var i=t.hasClass("in");t.attr("aria-expanded",i),e.toggleClass("collapsed",!i).attr("aria-expanded",i)};var n=t.fn.collapse;t.fn.collapse=i,t.fn.collapse.Constructor=o,t.fn.collapse.noConflict=function(){return t.fn.collapse=n,this},t(document).on("click.bs.collapse.data-api",\'[data-toggle="collapse"]\',function(o){var n=t(this);n.attr("data-target")||o.preventDefault();var s=e(n),a=s.data("bs.collapse"),r=a?"toggle":n.data();i.call(s,r)})}(jQuery),+function(t){"use strict";function e(){var t=document.createElement("bootstrap"),e={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var i in e)if(void 0!==t.style[i])return{end:e[i]};return!1}t.fn.emulateTransitionEnd=function(e){var i=!1,o=this;t(this).one("bsTransitionEnd",function(){i=!0});var n=function(){i||t(o).trigger(t.support.transition.end)};return setTimeout(n,e),this},t(function(){t.support.transition=e(),t.support.transition&&(t.event.special.bsTransitionEnd={bindType:t.support.transition.end,delegateType:t.support.transition.end,handle:function(e){return t(e.target).is(this)?e.handleObj.handler.apply(this,arguments):void 0}})})}(jQuery);
';


$js .="
/*
    GOOGLE ADD WEBSITE TO PHONE HOMESCREEN
*/
    if ('serviceWorker' in navigator) {
    	window.addEventListener('load', function() {
    		navigator.serviceWorker.register('/serviceworker.js').then(function(registration) {
    			console.log('ServiceWorker registration successful with scope: ', registration.scope);
    	}, function(err) {
    			console.log('ServiceWorker registration failed: ', err);
    		});
    	});

    	window.addEventListener('beforeinstallprompt', function(e) {
    		e.userChoice.then(function(choiceResult) {

    			console.log(choiceResult.outcome);

    			if(choiceResult.outcome == 'dismissed') {
    				console.log('User cancelled home screen install');
    			}
    			else {
    				var request = $.ajax({url: '/ajax/a2h.ajax.php'});
    				console.log('User added to home screen');
    			}
    		});
    	});
    }
";

$js .="

function getCookie(c_name) {
    var c_value = ' ' + document.cookie;
    var c_start = c_value.indexOf(' ' + c_name + '=');
    if (c_start == -1) {
        c_value = null;
    }
    else {
        c_start = c_value.indexOf('=', c_start) + 1;
        var c_end = c_value.indexOf(';', c_start);
        if (c_end == -1) {
            c_end = c_value.length;
        }
        c_value = unescape(c_value.substring(c_start,c_end));
    }
    return c_value;
}

/* HEADER */
/* VANILLA SLIDE */ let slideUp=(e,t=500)=>{e.style.transitionProperty='height, margin, padding',e.style.transitionDuration=t+'ms',e.style.boxSizing='border-box',e.style.height=e.offsetHeight+'px',e.offsetHeight,e.style.overflow='hidden',e.style.height=0,e.style.paddingTop=0,e.style.paddingBottom=0,e.style.marginTop=0,e.style.marginBottom=0,window.setTimeout(()=>{e.style.display='none',e.style.removeProperty('height'),e.style.removeProperty('padding-top'),e.style.removeProperty('padding-bottom'),e.style.removeProperty('margin-top'),e.style.removeProperty('margin-bottom'),e.style.removeProperty('overflow'),e.style.removeProperty('transition-duration'),e.style.removeProperty('transition-property')},t)},slideDown=(e,t=500)=>{e.style.removeProperty('display');let o=window.getComputedStyle(e).display;'none'===o&&(o='block'),e.style.display=o;var r=e.offsetHeight;e.style.overflow='hidden',e.style.height=0,e.style.paddingTop=0,e.style.paddingBottom=0,e.style.marginTop=0,e.style.marginBottom=0,e.offsetHeight,e.style.boxSizing='border-box',e.style.transitionProperty='height, margin, padding',e.style.transitionDuration=t+'ms',e.style.height=r+'px',e.style.removeProperty('padding-top'),e.style.removeProperty('padding-bottom'),e.style.removeProperty('margin-top'),e.style.removeProperty('margin-bottom'),window.setTimeout(()=>{e.style.removeProperty('height'),e.style.removeProperty('overflow'),e.style.removeProperty('transition-duration'),e.style.removeProperty('transition-property')},t)};var slideToggle=(e,t=500)=>('none'===window.getComputedStyle(e).display?slideDown:slideUp)(e,t);
function toggleNavBack(){
    var logo = document.getElementById('header_logo');
    var navback = document.getElementById('nav_back');

    if(logo.classList.contains('in')){
        logo.classList.remove('in');
        setTimeout(function(){logo.style.display='none';},100);
        setTimeout(function(){
            navback.classList.add('showNavBack');
        },250);

    }else{
        navback.classList.remove('showNavBack');
        setTimeout(function(){logo.style.display='inline-block';},100);
        setTimeout(function(){
            logo.classList.add('in');
        },250);
    }
}
function toggleHeaderMenu(){
    slideToggle(document.getElementById('header_nav'), 200);
    toggleNavBack();
}
document.getElementById('menu_togg').addEventListener('click', function() {toggleHeaderMenu();});
document.getElementById('nav_back').addEventListener('click',function(){toggleHeaderMenu();});

/* MODAL */
/*
    modal() parameter MUST have single quotations
    <button onclick=modal('modal_')>button</button>
    <div class=modal fade id=modal_>
        <div class=container></div>
        <div class=modal-backdrop in dontClose[optional]></div>
    </div>
*/
function modal(target){
    var el = document.getElementById(target);
    if(!el.classList.contains('in')){
        el.style.display = 'block';
        el.classList.add('in');
    }
    document.body.style['overflow-y'] = 'hidden';
}
function close_modal(){
    var list = document.querySelectorAll('.modal');
    for (var i = 0; i < list.length; ++i) {
        list[i].classList.remove('in');
        list[i].style.display = 'none';
    }
    document.body.style['overflow-y'] = 'initial';
}
var close_modals = document.querySelectorAll('.close_modal,.modal-backdrop');
for (var i = 0; i < close_modals.length; ++i) {
	close_modals[i].addEventListener('click',function(){
		if(!this.classList.contains('dontClose')){close_modal();}
	});
}


/*### MOBILE/TABLET TOGGLE NAV BUTTON CONTAINERS ###*/
/* //////////////////////////////////////////////// */

$('.navbar-toggle').click(function () {
	var ths = $(this);
	var target = $(this).data('target');
	$('.navbar-toggle').not(this).addClass('collapsed');
	$(this).toggleClass('collapsed');
	$('.collapse-cn').not(target).removeClass('in').slideUp(200,function(){
		$(target).slideToggle(300).toggleClass('in');
	});

	if($('.logo_cn').is(':visible')) {
		$('.logo_cn').fadeOut(250, function(){
			$('#nav_back').show().animate({ 'left': '0px' }, 300, 'swing' );
		});
	}

	var nav_arrow = function(ths){if(ths.hasClass('collapsed')){close_collapse();}};
	setTimeout(nav_arrow, 300, ths);
});

$('#nav_back').click(function(){
	$('.navbar-toggle').addClass('collapsed');
	$('.collapse-cn').hide().removeClass('in');
	close_collapse();
});

function close_collapse(){
	$('#nav_back').animate({ 'left': '-30px' }, 250, 'swing', function() {
		$('.logo_cn').fadeIn(200);$(this).hide();
	});
}

/* #############~~~ PANEL COLLAPSE/OPEN ~~~~###############*/
$('.panel-heading').click(function(){
	$('.panel-body').stop(true,true).slideToggle();
	$('.panel-heading .arrow').stop(true,true).toggleClass('rotate180');
});


/* CONTACT FORM */
function enquiryResizeIframe(obj){obj.style.height = obj.contentWindow.document.body.offsetHeight + 'px';}
function enquiryIframe(el,id,src){
    var iframe = document.querySelector(el + ' .modal-iframe iframe');

    var el = document.querySelector(el);
    if(parseInt(el.getAttribute('data-advert')) !== id){
        iframe.style.opacity = '0';
        iframe.setAttribute('src',src);
    }
    el.setAttribute('data-advert',id);
    iframe.style.opacity = '1';
}
function showEnquirySpinner(){
    document.querySelector('.enquiry_section.in .lds-spinner').style.display = 'inline-block';
}
function hideEnquirySpinner(){
    document.querySelector('.enquiry_section.in .lds-spinner').style.display = 'none';
}

$('.contact-btn').click(function(){
	$('html, body').animate({ scrollTop: $('#contact-big-cn').offset().top-20 }, 1000, 'easeInOutQuad');
});

$(document).on('click','.cant-find-add',function(){
	$('.address-cn').slideDown(287);
});

$(document).on('change','#addresses',function(){
	$('#address1').val($(this).find(':selected').data('ad1'));
	$('#address2').val($(this).find(':selected').data('ad2'));
	$('#town').val($(this).find(':selected').data('twn'));
	$('#county').val($(this).find(':selected').data('cty'));
});

$(document).on('click','.find-address',function(){
	var postcode = $('#postcode').val();
	var pcode = $.ajax({
		url: '/member_register/ajax/postcode.ajax.php',
		type: 'GET',
		data: {postcode: postcode},
	})
	.done(function(msg) {
		$('#select-address').html(msg);
		$('#select-address-cn').slideDown(287);
	})
	.fail(function() {
		console.log('error');
	});
});
$(document).on('click','.find-address2',function(){
	var postcode = $('#postcode').val();
	var pcode = $.ajax({
		url: '/member_register/ajax/postcode.ajax2.php',
		type: 'GET',
		data: {postcode: postcode},
	})
	.done(function(msg) {
		var result = JSON.parse(msg);
		if(result.success==0){
			$('.address-cn').prepend(result.html);
			$('.address-cn').slideDown(287);
		}else{
			$('#select-address').html(result.html);
			$('#select-address-cn').slideDown(287);
		}
	})
	.fail(function() {
		console.log('error');
	});
});

$('.contact-cn').on('click','.go-back',function(){
	var parent = '#'+$(this).closest('.contact-cn').attr('id')+' ';
	var current_step = $(this).closest('.step').data('step');
	var section = $(this).closest('.section').data('section');

	$(parent + '.'+current_step).animate({ top: '+=350', opacity: 0 }, 400, 'easeInSine', function(){
		$(parent +'.step-one').show().animate({ top: '-=350', opacity: 1 }, 400, 'easeOutSine').css({top:0});
		$(parent +'.'+section).hide();
		$(this).hide();
	});

});
/*
$('.contact-cn').on('click','.send-message',function(){
	var contact_cn = $(this).closest('.contact-cn');
	var advert_id = contact_cn.data('adid');
	var parent = '#'+contact_cn.attr('id')+' ';
	var current_step = $(this).closest('.step').data('step');
	var section = $(this).closest('.section').data('section');

	var sect = new Array();
	var step_two_sects = '';
	$(parent + '.step-two > .section').each(function() {sect.push($(this).data('section'));});
	if (sect.length > 0) {step_two_sects = JSON.stringify(sect);}

	/* getting all fields and merging
	var obj = {};
	var form_array = $(this).closest('form').serializeArray();
	$.each(form_array, function() {obj[this.name] = this.value || '';});
	var extra = {advert_id: advert_id, step: current_step, section: section, step_two_sects: step_two_sects};
	var json = $.extend( {}, obj, extra );
	var send = $.ajax({
		url: '/contact_form/V2/business_contact.php',
		type: 'POST',
		data: json
	})
	.done(function(msg) {
		var result = JSON.parse(msg);
		var errors = result.errors;
		var new_step = '.'+result.step;
		var new_section = '.'+result.section;
		var ga_action = result.ga_action;
		console.log(ga_action);
		if(errors!=null){
			$(new_section+' .error_response').html(errors).show();
		}else{
			(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
			(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
			m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
			})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

			ga('create', 'UA-2256305-1', 'auto');
			ga('send','pageview',ga_action);

			$('.'+section+' .error_response').slideUp(150);
			$(parent + '.'+current_step).animate({ top: '+=350', opacity: 0 }, 400, 'easeInSine', function(){
				$(this).hide();
				if ($(parent + new_section)[0]){
					$(parent + new_section).show();
				}else{
					$(parent + new_step).append(result.tpl_html);
				}
				$(parent+new_step).css({top:0,opacity:1}).fadeIn(500, 'easeInOutQuad');
			});
		}

		if(result.sent == true){
			sent();
		}
	})
	.fail(function() {
		console.log('error');
	});
});
*/
$('.contact-cn').on('click','.send-message2',function(){
	var contact_cn = $(this).closest('.contact-cn');
	var advert_id = contact_cn.data('adid');
	var parent = '#'+contact_cn.attr('id')+' ';
	var current_step = $(this).closest('.step').data('step');
	var section = $(this).closest('.section').data('section');

	var sect = new Array();
	var step_two_sects = '';
	$(parent + '.step-two > .section').each(function() {sect.push($(this).data('section'));});
	if (sect.length > 0) {step_two_sects = JSON.stringify(sect);}

	/* getting all fields and merging */
	var obj = {};
	var form_array =  $(this).closest('form').serializeArray();
	$.each(form_array, function() {obj[this.name] = this.value || '';});

	var extra = {advert_id: advert_id, step: current_step, section: section, step_two_sects: step_two_sects};
	var json = $.extend( {}, obj, extra );
	var send = $.ajax({
		url: '/contact_form/V2/business_contact2.php',
		type: 'POST',
		data: json
	})
	.done(function(msg) {
		var result = JSON.parse(msg);
		var errors = result.errors;
		
		var new_step = '.'+result.step;
		var new_section = '.'+result.section;
		var ga_action = result.ga_action;
		if(errors!=null){
			$(new_section+' .error_response').html(errors).show();
		}else{
			$('.'+section+' .error_response').slideUp(150);
			$(parent + '.'+current_step).animate({ top: '+=350', opacity: 0 }, 400, 'easeInSine', function(){
				$(this).hide();
				if ($(parent + new_section)[0]){
					$(parent + new_section).show();
				}else{
					$(parent + new_step).append(result.tpl_html);
				}
				$(parent+new_step).css({top:0,opacity:1}).fadeIn(500, 'easeInOutQuad');
			});
		}
		if(result.sent == true){
			sent();
		}
	})
	.fail(function() {
		console.log('error');
	});
});

$('.contact-cn').on('click','.send-message3.consented',function(){
	var el_focus = $(this).closest('.contact-cn').attr('id');
	$('#modal_consent').data('element',el_focus).data('funnel','contact-form').modal('show');
});

$('#modal_consent').on('click','#continue_consent',function(){
	var id = $(this).data('id');
	$.ajax({
		url: '/contact_form/V2/member-consent.ajax.php',
		type: 'GET',
		data: {id:id},
	})
	.done(function() {
		var el_focus = $('#modal_consent').data('element');
		var funnel = $('#modal_consent').data('funnel');
		if(funnel=='one-click'){	
			$('.tb.request').removeClass('consented').addClass('no-consent');
			$('#'+el_focus+'.tb.request.no-consent').click();
		}else if(funnel=='contact-form'){
			$('.contact-cn .send-message3').removeClass('consented').addClass('no-consent');
			$('#'+el_focus+'.contact-cn .send-message3.no-consent').click();
		}
		$('#modal_consent').modal('hide');
	});
	
});

$('.contact-cn').on('click','.send-message3.no-consent',function(){
	var contact_cn = $(this).closest('.contact-cn');
	var advert_id = contact_cn.data('adid');
	var parent = '#'+contact_cn.attr('id')+' ';
	var current_step = $(this).closest('.step').data('step');
	var section = $(this).closest('.section').data('section');
	var form = $(this).closest('form');

	var sect = new Array();
	var step_two_sects = '';
	form.children('.step-two > .section').each(function() {sect.push($(this).data('section'));});
	if (sect.length > 0) {step_two_sects = JSON.stringify(sect);}

	/* getting all fields and merging */
	var obj = {};
	var form_array = form.serializeArray();
	$.each(form_array, function() {obj[this.name] = this.value || '';});
	var extra = {advert_id: advert_id, step: current_step, section: section, step_two_sects: step_two_sects};
	var json = $.extend( {}, obj, extra );
	var send = $.ajax({
		url: '/contact_form/V2/business_contact3.php',
		type: 'POST',
		data: json
	})
	.done(function(msg) {
		var result = JSON.parse(msg);
		var errors = result.errors;
		var new_step = '.'+result.step;
		var new_section = '.'+result.section;
		var ga_action = result.ga_action;
		if(errors!=null){
			form.find('.error_response').html(errors).show();
		}else{		
			$('.'+section+' .error_response').slideUp(150);
			form.children('.'+current_step).animate({ top: '+=350', opacity: 0 }, 400, 'easeInSine', function(){
				$(parent + '.'+current_step).hide();
				if (form.children(new_section)[0]){
					form.children(new_section).show();
				}else{
					form.children(new_step).append(result.tpl_html);
				}
				form.children(new_step).css({top:0,opacity:1}).fadeIn(500, 'easeInOutQuad');
			});
		}
		if(result.sent == true){
			sent();
		}
	})
	.fail(function() {
		console.log('error');
	});
});

$('.contact-cn').on('click','.send-message4.no-consent',function(){
	var contact_cn = $(this).closest('.contact-cn');
	var advert_id = contact_cn.data('adid');
	var parent = '#'+contact_cn.attr('id')+' ';
	var current_step = $(this).closest('.step').data('step');
	var section = $(this).closest('.section').data('section');
	var form = $(this).closest('form');

	var sect = new Array();
	var step_two_sects = '';
	form.children('.step-two > .section').each(function() {sect.push($(this).data('section'));});
	if (sect.length > 0) {step_two_sects = JSON.stringify(sect);}

	/* getting all fields and merging */
	var obj = {};
	var form_array = form.serializeArray();
	$.each(form_array, function() {obj[this.name] = this.value || '';});
	var extra = {advert_id: advert_id, step: current_step, section: section, step_two_sects: step_two_sects};
	var json = $.extend( {}, obj, extra );
	var send = $.ajax({
		url: '/contact_form/V2/business_contact4.php',
		type: 'POST',
		data: json
	})
	.done(function(msg) {
		var result = JSON.parse(msg);
		var errors = result.errors;
		var new_step = '.'+result.step;
		var new_section = '.'+result.section;
		var ga_action = result.ga_action;
		if(errors!=null){
			form.find('.error_response').html(errors).show();
		}else{
			$('.'+section+' .error_response').slideUp(150);
			form.children('.'+current_step).animate({ top: '+=350', opacity: 0 }, 400, 'easeInSine', function(){
				$(parent + '.'+current_step).hide();
				if (form.children(new_section)[0]){
					form.children(new_section).show();
				}else{
					form.children(new_step).append(result.tpl_html);
				}
				form.children(new_step).css({top:0,opacity:1}).fadeIn(500, 'easeInOutQuad');
			});
		}
		if(result.sent == true){
			sent();
		}

		if(result.redir != null){
			window.location.replace(result.redir);
		}

	})
	.fail(function() {
		console.log('error');
	});
});

var show_more_enquiries = $('.container.main-cn').attr('data-hasaddr');

$(document).ready(function(){
	if(show_more_enquiries == 1){
		$.ajax({
			url: '/view/more_enquiries.ajax.php',
			type: 'POST',
			data: {advert_id : $('.contact-cn').data('adid')}
		}).done(function(msg){
			var l_result = JSON.parse(msg);
			listing_count = l_result.count;
			$('#more-enquiries-listing-cn').append(l_result.listings);
		});
	}
});

$(document).on('click','.contact-cn .send-message5.no-consent',function(){
	var contact_cn = $(this).closest('.contact-cn');
	var advert_id = contact_cn.data('adid');
	var parent = '#'+contact_cn.attr('id')+' ';
	var current_step = $(this).closest('.step').data('step');
	var section = $(this).closest('.section').data('section');
	var form = $(this).closest('form');
    var btn = $(this);

	var sect = new Array();
	var step_two_sects = '';
	form.children('.step-two > .section').each(function() {sect.push($(this).data('section'));});
	if (sect.length > 0) {step_two_sects = JSON.stringify(sect);}

	/* getting all fields and merging */
	var obj = {};
	var form_array = form.serializeArray();
	$.each(form_array, function() {obj[this.name] = this.value || '';});
	var extra = {advert_id: advert_id, step: current_step, section: section, step_two_sects: step_two_sects};
	var json = $.extend( {}, obj, extra );

    btn.removeClass('send-message5');

	var send = $.ajax({
		url: '/contact_form/V2/business_contact5.php',
		type: 'POST',
		data: json
	})
	.done(function(msg){
		var result = JSON.parse(msg);
		var errors = result.errors;
		var new_step = '.'+result.step;
		var new_section = '.'+result.section;
		var ga_action = result.ga_action;

		if(errors!=null){
			form.find('.error_response').html(errors).show();
            btn.addClass('send-message5');
		}else{
			$('.'+section+' .error_response').slideUp(150);
			form.children('.'+current_step).animate({ top: '+=350', opacity: 0 }, 400, 'easeInSine', function(){
				$(parent + '.'+current_step).hide();
				if (form.children(new_section)[0]){
					form.children(new_section).show();
				}else{
					form.children(new_step).append(result.tpl_html);
				}
				form.children(new_step).css({top:0,opacity:1}).fadeIn(500, 'easeInOutQuad');
			});
		}

		if(result.oneclick_sent != null){
			var oneclick_id = $('#request-modal .request-cn').attr('data-id');
			var oneclick_ths = $('#oneclick-' + oneclick_id);
			oneclick_ths.removeClass('request').children('span').text('Request Sent');
			$('.container.main').attr('data-state','1');
			setTimeout(function(){
				$('#request-modal').modal('hide');
			},1250);

		}

		if(result.sent == true){
			if(section == 'register-verify'){
				gtag('event', 'conversion', {'send_to': 'AW-1002183308/ueEPCLbRopgBEIy18N0D'});
			}
			if(section == 'msg-broker-form'){
				gtag('event', 'enquiry_filled_address');
			}

			if(show_more_enquiries == 1 && listing_count > 0){
				setTimeout(function(){
					$('#more-enquiries').modal('show');
				},1000);
			}

			gtag('event', 'enquiry_sent');
			sent();
		}

		if(result.redir != null){
			window.location.replace(result.redir);
		}

	})
	.fail(function() {
		console.log('error');
	});
});

$(document).on('click','.send-message6.no-consent',function(){
	var contact_cn = $(this).closest('.contact-cn');
	var advert_id = contact_cn.data('adid');
	var parent = '#'+contact_cn.attr('id')+' ';
	var current_step = $(this).closest('.step').data('step');
	var section = $(this).closest('.section').data('section');
	var form = $(this).closest('form');

	var sect = new Array();
	var step_two_sects = '';
	form.children('.step-two > .section').each(function() {sect.push($(this).data('section'));});
	if (sect.length > 0) {step_two_sects = JSON.stringify(sect);}

	/* getting all fields and merging */
	var obj = {};
	var form_array = form.serializeArray();
	$.each(form_array, function() {obj[this.name] = this.value || '';});
	var extra = {advert_id: advert_id, step: current_step, section: section, step_two_sects: step_two_sects};
	var json = $.extend( {}, obj, extra );
	var send = $.ajax({
		url: '/contact_form/V2/business_contact5.php',
		type: 'POST',
		data: json
	})
	.done(function(msg){
		var result = JSON.parse(msg);
		var errors = result.errors;
		var new_step = '.'+result.step;
		var new_section = '.'+result.section;
		var ga_action = result.ga_action;

		if(errors!=null){
			form.find('.error_response').html(errors).show();
		}else{
			$('.'+section+' .error_response').slideUp(150);
			form.children('.'+current_step).animate({ top: '+=350', opacity: 0 }, 400, 'easeInSine', function(){
				$(parent + '.'+current_step).hide();
				if (form.children(new_section)[0]){
					form.children(new_section).show();
				}else{
					form.children(new_step).append(result.tpl_html);
				}
				form.children(new_step).css({top:0,opacity:1}).fadeIn(500, 'easeInOutQuad');
			});
		}

		if(result.oneclick_sent != null){
			var oneclick_id = $('#request-modal .request-cn').attr('data-id');
			var oneclick_ths = $('#oneclick-' + oneclick_id);
			oneclick_ths.removeClass('request').children('span').text('Request Sent');
			$('.container.main').attr('data-state','1');
			setTimeout(function(){
				$('#request-modal').modal('hide');
			},1250);

		}

		if(result.sent == true){
			if(section == 'register-verify'){
				gtag('event', 'conversion', {'send_to': 'AW-1002183308/ueEPCLbRopgBEIy18N0D'});
			}
			if(section == 'msg-broker-form'){
				gtag('event', 'enquiry_filled_address');
			}

			if(show_more_enquiries == 1 && listing_count > 0){
				setTimeout(function(){
					$('#more-enquiries').modal('show');
				},1000);
			}

			gtag('event', 'enquiry_sent');
			sent();
		}

		if(result.redir != null){
			window.location.replace(result.redir);
		}

	})
	.fail(function() {
		console.log('error');
	});
});
$('.contact-cn').on('keyup','#contact-email.show-tel',function(){
	$('#contact-email').removeClass('show-tel');
	var el = document.getElementById('before-tel-cn');
	var div = document.createElement('div');
	div.className = 'form-group clearfix col-md-6 tel-cn';
	div.style.cssText = 'float:initial;padding-left:0;display:none;';
	div.innerHTML = '<label for=\'tel\'>Contact number<span class=\'req\'>*</span></label><input placeholder=\'Enter your mobile or telephone number\' class=\'form-control\' type=\'number\' name=\'tel\' id=\'tel\' value=\'\' autocomplete=\'off\' onkeypress=\'return numeric(event)\' style=\'margin-bottom:0;\' required=\'true\'></div>';
	insertAfter(div,el);
	$('.tel-cn').slideDown(255);
});

$('.contact-cn').on('click','.send-message5.show-tel',function(){
	var form = $(this).closest('form');
	var email = form.find('#contact-email').val();
	var msg = form.find('#contact-msg').val();
	var name = form.find('#contact-name').val();

	var errors = new Array();
	if(email == ''){errors.push('Please enter your email.');}
	if(msg == ''){errors.push('Please enter your message.');}
	if(name == ''){errors.push('Please enter your name.');}

	if(errors.length == 0){
		var el = document.getElementById('before-tel-cn');
		var div = document.createElement('div');
		div.className = 'form-group clearfix col-md-6 tel-cn';
		div.style.cssText = 'float:initial;padding-left:0;display:none;';
		div.innerHTML = '<label for=\'tel\'>Contact number<span class=\'req\'>*</span></label><input placeholder=\'Enter your mobile or telephone number\' class=\'form-control\' type=\'number\' name=\'tel\' id=\'tel\' value=\'\' autocomplete=\'off\' onkeypress=\'return numeric(event)\' style=\'margin-bottom:0;\' required=\'true\'></div>';
		insertAfter(div,el);
		$('.tel-cn').slideDown(255);
		$('.send-message5').removeClass('show-tel').addClass('no-consent');

	}else{
		var error_html = '<div class=\'error-alert\'><div class=\'error_title\'>Error</div><ul>';
		$.each( errors, function( key, value ) {
			error_html += '<li>' + value + '</li>';
		});
		error_html += '</ul></div>';
		form.find('.error_response').empty().html(error_html).show();
	}

});

$(document).on('click','.make-offer-toggle .btn',function(){
	$('.contact-seller-form .msg-form').slideUp(283,function(){
		$('.make-offer-toggle').hide();
		$('.make-offer-form .msg-form').slideDown(283,function(){});
	});
	$('.contact-seller-toggle').slideDown(283);
});

$(document).on('click','.contact-seller-toggle .btn',function(){
	$('.make-offer-form .msg-form').slideUp(283,function(){
		$('.contact-seller-toggle').hide();
		$('.contact-seller-form .msg-form').slideDown(283,function(){});
	});
	$('.make-offer-toggle').slideDown(283);
});

/* ####--- AJAX & NAVIGATION KEY ---#### */
/* ///////////////////////////////////// */
function cat_click(e,val){
	$('.search-sector .search-inp').val(val);
	$('.search-sector .stype').val('true');
	$('.search-sector .vtype').val(e);close_suggest();
}

function loc_click(val,isTown){
	$('.search-location .search-inp').val(val);
	$('.search-location .stype').val('true');
	$('.search-location .vtype').val(val);
	if(isTown==1){
		$('#radius_cn').slideDown();
	}else{
		$('#radius_cn').slideUp();
	}
	close_suggest();
}

function check_return(e) {
	var t = e.keyCode;
	if (t == 13 && $('.sbox').val() != '') {
		return true;
	} else if (t == 13) {
		close_suggest();
		return false;
	}
}

function check_frm(){
	$('.search-form .search-btn-cn .btn').addClass('clicked').val('Searching...');
	return true;
}

/* ajax section */
$('.search-inp').keyup(function(e){
	var ths 		 = $(this);
	var str 		 = ths.val();
	var code 		 = (e.keyCode ? e.keyCode : e.which);
	var container	 = ths.siblings('.suggestion');
	var ignore_codes = [40,39,38,37,13];

	if($('.suggestion').not(container).is(':visible')) {
		$('.suggestion').not(container).slideUp(200,function(){
			$('.search-inp').not(ths).removeClass('active');
		});
	}

	if(str=='' || code==27 || code==13){
		close_suggest();
	}else{
		if(jQuery.inArray(code, ignore_codes)== -1){
			ths.siblings('.stype').val('');			
			$.ajax({
				url: '/search/'+(ths.data('type')=='sector' ? 'cats':'area')+'.ajax.2.php',
				method: 'GET',
				data: { hint : escape(str) }
			}).done(function(msg) {
				if(msg!= ''){
					container.html(msg).slideDown(200); 
					ths.addClass('active');
				}
			});
		}
	}
});

/* navigating through suggests with keys */
$('.search-form').on('keydown','.search-inp', function(e) {
	var ths 		= $(this);
	var code 		= (e.keyCode ? e.keyCode : e.which);
	var container 	= ths.siblings('.suggestion');
	var current 	= container.children('.selected');
	var item 		= container.children('div');
	var total 		= (item.length-1);

	switch (code){
		case 40:
			next = ( current.length == 0 ? item.eq(0) : (next.index() == total ? item.eq(0) : next.next()) );
			handleItem(ths,next,current,container);
			return false;
		case 38:
			next = ( current.length == 0 ? item.eq(total) : (next.index() == 0 ? item.eq(total) : next.prev()) );
			handleItem(ths,next,current,container);
			return false;
	}
});

/*  if clicked outside drop-down then close */
$(document).mouseup(function (e){
	var container = $('.suggestion');
	if (container.is(':visible') && (!container.is(e.target) && container.has(e.target).length === 0)){
		close_suggest();
	}
});


function close_suggest(){
	$('.suggestion').slideUp(283);
	$('.search-inp').removeClass('active');
	if($('#search-sector').val()!=''){
		$('.search-location .search-inp').focus();
	}
}

function handleItem(ths,next,current,container){
	current.removeClass('selected');
	next.addClass('selected');
	ths.siblings('.stype').val('true');
	ths.siblings('.vtype').val(next.attr('data-default'));
	ths.val(next.text());
	var isTown = (next.attr('istown')==1 ? 1 : 0);
	if(isTown==1){
		$('#radius_cn').slideDown();
	}else{
		$('#radius_cn').slideUp();
	}

	/* to scroll div into view*/
	if(container[0].scrollHeight >container.height()){
		var itemHeight 	 	= next.outerHeight();
		var itemTop   		= next.position().top; /*position within container*/
		var itemBottom  	= itemTop + itemHeight; 
		var itemTopFull  	= next.get(0).offsetTop; /*position with overflow */
		var itemBottomFull 	= itemTopFull + itemHeight;
		var containerHeight = container.height();

		if(((itemBottom <= containerHeight) && (itemTop >= 0))==false){
			container.animate({scrollTop: itemBottomFull-containerHeight});
		}
	}

}

/* ### OTHER JS ### */
/* ---------------- */

/* close modal stuff */
$(document).on('hidden.bs.modal',function(){
	$('.modal .modal-alert').hide();
});

/* ANIMATION EASING */
jQuery.easing['jswing'] = jQuery.easing['swing'];
jQuery.extend( jQuery.easing,{
	def: 'easeOutQuad',
	swing: function (x, t, b, c, d) {return jQuery.easing[jQuery.easing.def](x, t, b, c, d); },
	easeInQuad: function (x, t, b, c, d) {return c*(t/=d)*t + b; },
	easeOutQuad: function (x, t, b, c, d) {return -c *(t/=d)*(t-2) + b; },
	easeInOutQuad: function (x, t, b, c, d) {if ((t/=d/2) < 1) return c/2*t*t + b; return -c/2 * ((--t)*(t-2) - 1) + b; },
	easeInCubic: function (x, t, b, c, d) {return c*(t/=d)*t*t + b; },
	easeOutCubic: function (x, t, b, c, d) {return c*((t=t/d-1)*t*t + 1) + b; },
	easeInOutCubic: function (x, t, b, c, d) {if ((t/=d/2) < 1) return c/2*t*t*t + b; return c/2*((t-=2)*t*t + 2) + b; },
	easeInQuart: function (x, t, b, c, d) {return c*(t/=d)*t*t*t + b; },
	easeOutQuart: function (x, t, b, c, d) {return -c * ((t=t/d-1)*t*t*t - 1) + b; },
	easeInOutQuart: function (x, t, b, c, d) {if ((t/=d/2) < 1) return c/2*t*t*t*t + b; return -c/2 * ((t-=2)*t*t*t - 2) + b; },
	easeInQuint: function (x, t, b, c, d) {return c*(t/=d)*t*t*t*t + b; },
	easeOutQuint: function (x, t, b, c, d) {return c*((t=t/d-1)*t*t*t*t + 1) + b; },
	easeInOutQuint: function (x, t, b, c, d) {if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b; return c/2*((t-=2)*t*t*t*t + 2) + b; },
	easeInSine: function (x, t, b, c, d) {return -c * Math.cos(t/d * (Math.PI/2)) + c + b; },
	easeOutSine: function (x, t, b, c, d) {return c * Math.sin(t/d * (Math.PI/2)) + b; },
	easeInOutSine: function (x, t, b, c, d) {return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b; },
	easeInExpo: function (x, t, b, c, d) {return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b; },
	easeOutExpo: function (x, t, b, c, d) {return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b; },
	easeInOutExpo: function (x, t, b, c, d) {if (t==0) return b; if (t==d) return b+c; if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b; return c/2 * (-Math.pow(2, -10 * --t) + 2) + b; },
	easeInCirc: function (x, t, b, c, d) {return -c * (Math.sqrt(1 - (t/=d)*t) - 1) + b; },
	easeOutCirc: function (x, t, b, c, d) {return c * Math.sqrt(1 - (t=t/d-1)*t) + b; },
	easeInOutCirc: function (x, t, b, c, d) {if ((t/=d/2) < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b; return c/2 * (Math.sqrt(1 - (t-=2)*t) + 1) + b; },
	easeInElastic: function (x, t, b, c, d) {var s=1.70158;var p=0;var a=c; if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3; if (a < Math.abs(c)) { a=c; var s=p/4; } else var s = p/(2*Math.PI) * Math.asin (c/a); return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b; },
	easeOutElastic: function (x, t, b, c, d) {var s=1.70158;var p=0;var a=c; if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3; if (a < Math.abs(c)) { a=c; var s=p/4; } else var s = p/(2*Math.PI) * Math.asin (c/a); return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b; },
	easeInOutElastic: function (x, t, b, c, d) {var s=1.70158;var p=0;var a=c; if (t==0) return b;  if ((t/=d/2)==2) return b+c;  if (!p) p=d*(.3*1.5); if (a < Math.abs(c)) { a=c; var s=p/4; } else var s = p/(2*Math.PI) * Math.asin (c/a); if (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b; return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*.5 + c + b; },
	easeInBack: function (x, t, b, c, d, s) {if (s == undefined) s = 1.70158; return c*(t/=d)*t*((s+1)*t - s) + b; },
	easeOutBack: function (x, t, b, c, d, s) {if (s == undefined) s = 1.70158; return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b; },
	easeInOutBack: function (x, t, b, c, d, s) {if (s == undefined) s = 1.70158; if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b; return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b; },
	easeInBounce: function (x, t, b, c, d) {return c - jQuery.easing.easeOutBounce (x, d-t, 0, c, d) + b; },
	easeOutBounce: function (x, t, b, c, d) {if ((t/=d) < (1/2.75)) {return c*(7.5625*t*t) + b; } else if (t < (2/2.75)) {return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b; } else if (t < (2.5/2.75)) {return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b; } else {return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b; } },
	easeInOutBounce: function (x, t, b, c, d) {if (t < d/2) return jQuery.easing.easeInBounce (x, t*2, 0, c, d) * .5 + b; return jQuery.easing.easeOutBounce (x, t*2-d, 0, c, d) * .5 + c*.5 + b; }
});

";

/*#### FAQ MODAL ####*/
$js.='

var show_live_chat_banner = false;
 /*
$zopim(function() {
	$zopim.livechat.hideAll();
    $zopim.livechat.setOnStatus(callback);
	function callback(status) {
		if (status == "online") {
			show_live_chat_banner = true;
		}else{
			show_live_chat_banner = false;
		}
	}
});
*/

$(document).on("click","#faq-modal .find-btn",function(){getFaqResults();});
$("#faq-modal .search_inp").keypress(function(e){if(e.which == 13){getFaqResults();}});

$(document).on("click","#faq-modal .answer a[onclick!=\"showContactForm(event)\"]",function(){
	var link = $(this).attr("href");
	window.open(link, "_blank");
	return false;
});


$(document).on("click","#faq-modal .item .faq-heading",function() {
	var parent = $(this).parents(".item");
	parent.toggleClass("show_answer");
	var x = parent.find(".expand");
	var tx = (x.text() == "+" ? x.text("-") : x.text("+"));
});

$(document).on("click","#faq-modal .helpful-btn",function(){
	var action = $(this).data("type");
	var col = action == "yes" ? "satisfied" : "unsatisfied";
	var q = $(this).parents(".ask-helpful").data("val");
	var request = $.ajax({url: "/support/ajax/helpful.ajax.php",method: "GET",data:{q:q,action:action,col:col}})
		.done(function(){
			if(action == "yes"){
				$("#faq-modal .ask-helpful").empty().append("<div style=\"margin-bottom: 0;box-shadow: none;\" class=\"alert alert-success\">Thank you for your feedback!</div>");
			}
			if(action == "no"){
				showContactForm();
			}
		});
});

$(document).on("click","#faq-modal .contact-submit",function(){
	var sect = $(this).parents(".jContainer");
	var form = $(this).parents(".form_cn");
	var form_data = form.children("form").serialize();

	form.css({"opacity" : "0.7"});

	var request = $.ajax({
		url: "/support/ajax/contact.ajax.php",
		method: "GET",
		data: form_data
	}).done(function(msg){
		var result 	  = jQuery.parseJSON(msg);

		form.find(".error_response").empty();
		form.removeClass(function(index, className){return (className.match (/\berror_\S+/g) || []).join(" ");});

		if(result.error != null){
			setTimeout(function(){
				form.addClass(result.error_inps);
				form.find(".error_response").append(result.error);
				form.css({"opacity" : "1"});
			},500);
		}

		if(result.success != null){
			setTimeout(function(){
				sect.children(".search-cn").hide();
				form.css({"opacity" : "1"});
				sect.children(".contact-successful").show();
				if(sect.data("after")=="close"){
					setTimeout(function(){
						$("#faq-modal").modal("hide");
						$("body").removeClass("modal-open");
						$(".modal-backdrop").remove();
					},4000);
				}
			},500);
		}

	});

	return false;
});

$(document).on("click","#faq-modal .live-chat-banner",function(){
	$zopim(function() {
		$zopim.livechat.window.show();
	});
});

$("#faq-modal").on("hidden.bs.modal",function(){
	$("body").css("padding-right","0px");
	$(".modal-backdrop").hide();
	$("#faq-modal .result").empty();
	$("#faq-modal input.search_inp").val("");
	$("#faq-modal .jContainer").children(".search-cn").show();
	$("#faq-modal .jContainer").children(".contact-successful, .contact-us").hide();
	/*$("#faq-modal input.name").val($("#contact-modal input.name").data("value"));
	$("#faq-modal input.email").val($("#contact-modal input.email").data("value"));
	$("#faq-modal input.tel").val($("#contact-modal input.tel").data("value"));*/
});

function showContactForm(event){
	var event = event || "undefined";
	if(event != "undefined"){
		event.preventDefault();
	}
	$("#faq-modal .contact-us textarea").val($(".search_inp").val());
	$("#faq-modal .search-cn").slideUp(250,function(){
		$("#faq-modal .contact-us").slideDown(250);
	});
	return false;
}

function getFaqResults(){
	var faq_modal_qs;

	var query = $("#faq-modal .search_inp").val();
	if(query.length != 0){
		var request = $.ajax({
			url: "/support/ajax/livesearch.php",
			method: "GET",
			data: {q:query}
		}).done(function(msg){
			$("#faq-modal .result").empty().append(msg);
			/*$("#contact-modal .message").val(query);*/
			if(show_live_chat_banner == false){
				$("#faq-modal .live-chat-banner").hide();
			}

		});
	}
}

function insertAfter(newNode, referenceNode) {
	referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}

';

/*smooth scroll*/
//$js.='!function(){function e(){z.keyboardSupport&&m("keydown",a)}function t(){if(!Y&&document.body){Y=!0;var t=document.body,o=document.documentElement,n=window.innerHeight,r=t.scrollHeight;if(A=document.compatMode.indexOf("CSS")>=0?o:t,D=t,e(),top!=self)O=!0;else if(te&&r>n&&(t.offsetHeight<=n||o.offsetHeight<=n)){var a=document.createElement("div");a.style.cssText="position:absolute; z-index:-10000; top:0; left:0; right:0; height:"+A.scrollHeight+"px",document.body.appendChild(a);var i;T=function(){i||(i=setTimeout(function(){L||(a.style.height="0",a.style.height=A.scrollHeight+"px",i=null)},500))},setTimeout(T,10),m("resize",T);var l={attributes:!0,childList:!0,characterData:!1};if(M=new W(T),M.observe(t,l),A.offsetHeight<=n){var c=document.createElement("div");c.style.clear="both",t.appendChild(c)}}z.fixedBackground||L||(t.style.backgroundAttachment="scroll",o.style.backgroundAttachment="scroll")}}function o(){M&&M.disconnect(),w(I,r),w("mousedown",i),w("keydown",a),w("resize",T),w("load",t)}function n(e,t,o){if(p(t,o),1!=z.accelerationMax){var n=Date.now(),r=n-q;if(r<z.accelerationDelta){var a=(1+50/r)/2;a>1&&(a=Math.min(a,z.accelerationMax),t*=a,o*=a)}q=Date.now()}if(R.push({x:t,y:o,lastX:t<0?.99:-.99,lastY:o<0?.99:-.99,start:Date.now()}),!j){var i=e===document.body,l=function(n){for(var r=Date.now(),a=0,c=0,u=0;u<R.length;u++){var d=R[u],s=r-d.start,f=s>=z.animationTime,m=f?1:s/z.animationTime;z.pulseAlgorithm&&(m=x(m));var w=d.x*m-d.lastX>>0,h=d.y*m-d.lastY>>0;a+=w,c+=h,d.lastX+=w,d.lastY+=h,f&&(R.splice(u,1),u--)}i?window.scrollBy(a,c):(a&&(e.scrollLeft+=a),c&&(e.scrollTop+=c)),t||o||(R=[]),R.length?_(l,e,1e3/z.frameRate+1):j=!1};_(l,e,0),j=!0}}function r(e){Y||t();var o=e.target;if(e.defaultPrevented||e.ctrlKey)return!0;if(h(D,"embed")||h(o,"embed")&&/\.pdf/i.test(o.src)||h(D,"object")||o.shadowRoot)return!0;var r=-e.wheelDeltaX||e.deltaX||0,a=-e.wheelDeltaY||e.deltaY||0;N&&(e.wheelDeltaX&&y(e.wheelDeltaX,120)&&(r=-120*(e.wheelDeltaX/Math.abs(e.wheelDeltaX))),e.wheelDeltaY&&y(e.wheelDeltaY,120)&&(a=-120*(e.wheelDeltaY/Math.abs(e.wheelDeltaY)))),r||a||(a=-e.wheelDelta||0),1===e.deltaMode&&(r*=40,a*=40);var i=u(o);return i?!!v(a)||(Math.abs(r)>1.2&&(r*=z.stepSize/120),Math.abs(a)>1.2&&(a*=z.stepSize/120),n(i,r,a),e.preventDefault(),void l()):!O||!J||(Object.defineProperty(e,"target",{value:window.frameElement}),parent.wheel(e))}function a(e){var t=e.target,o=e.ctrlKey||e.altKey||e.metaKey||e.shiftKey&&e.keyCode!==K.spacebar;document.body.contains(D)||(D=document.activeElement);var r=/^(textarea|select|embed|object)$/i,a=/^(button|submit|radio|checkbox|file|color|image)$/i;if(e.defaultPrevented||r.test(t.nodeName)||h(t,"input")&&!a.test(t.type)||h(D,"video")||g(e)||t.isContentEditable||o)return!0;if((h(t,"button")||h(t,"input")&&a.test(t.type))&&e.keyCode===K.spacebar)return!0;if(h(t,"input")&&"radio"==t.type&&P[e.keyCode])return!0;var i,c=0,d=0,s=u(D);if(!s)return!O||!J||parent.keydown(e);var f=s.clientHeight;switch(s==document.body&&(f=window.innerHeight),e.keyCode){case K.up:d=-z.arrowScroll;break;case K.down:d=z.arrowScroll;break;case K.spacebar:i=e.shiftKey?1:-1,d=-i*f*.9;break;case K.pageup:d=.9*-f;break;case K.pagedown:d=.9*f;break;case K.home:d=-s.scrollTop;break;case K.end:var m=s.scrollHeight-s.scrollTop,w=m-f;d=w>0?w+10:0;break;case K.left:c=-z.arrowScroll;break;case K.right:c=z.arrowScroll;break;default:return!0}n(s,c,d),e.preventDefault(),l()}function i(e){D=e.target}function l(){clearTimeout(E),E=setInterval(function(){F={}},1e3)}function c(e,t){for(var o=e.length;o--;)F[V(e[o])]=t;return t}function u(e){var t=[],o=document.body,n=A.scrollHeight;do{var r=F[V(e)];if(r)return c(t,r);if(t.push(e),n===e.scrollHeight){var a=s(A)&&s(o),i=a||f(A);if(O&&d(A)||!O&&i)return c(t,$())}else if(d(e)&&f(e))return c(t,e)}while(e=e.parentElement)}function d(e){return e.clientHeight+10<e.scrollHeight}function s(e){var t=getComputedStyle(e,"").getPropertyValue("overflow-y");return"hidden"!==t}function f(e){var t=getComputedStyle(e,"").getPropertyValue("overflow-y");return"scroll"===t||"auto"===t}function m(e,t){window.addEventListener(e,t,!1)}function w(e,t){window.removeEventListener(e,t,!1)}function h(e,t){return(e.nodeName||"").toLowerCase()===t.toLowerCase()}function p(e,t){e=e>0?1:-1,t=t>0?1:-1,X.x===e&&X.y===t||(X.x=e,X.y=t,R=[],q=0)}function v(e){if(e)return B.length||(B=[e,e,e]),e=Math.abs(e),B.push(e),B.shift(),clearTimeout(C),C=setTimeout(function(){try{localStorage.SS_deltaBuffer=B.join(",")}catch(e){}},1e3),!b(120)&&!b(100)}function y(e,t){return Math.floor(e/t)==e/t}function b(e){return y(B[0],e)&&y(B[1],e)&&y(B[2],e)}function g(e){var t=e.target,o=!1;if(document.URL.indexOf("www.youtube.com/watch")!=-1)do if(o=t.classList&&t.classList.contains("html5-video-controls"))break;while(t=t.parentNode);return o}function S(e){var t,o,n;return e*=z.pulseScale,e<1?t=e-(1-Math.exp(-e)):(o=Math.exp(-1),e-=1,n=1-Math.exp(-e),t=o+n*(1-o)),t*z.pulseNormalize}function x(e){return e>=1?1:e<=0?0:(1==z.pulseNormalize&&(z.pulseNormalize/=S(1)),S(e))}function k(e){for(var t in e)H.hasOwnProperty(t)&&(z[t]=e[t])}var D,M,T,E,C,H={frameRate:150,animationTime:500,stepSize:100,pulseAlgorithm:!0,pulseScale:4,pulseNormalize:1,accelerationDelta:50,accelerationMax:3,keyboardSupport:!0,arrowScroll:50,fixedBackground:!0,excluded:""},z=H,L=!1,O=!1,X={x:0,y:0},Y=!1,A=document.documentElement,B=[],N=/^Mac/.test(navigator.platform),K={left:37,up:38,right:39,down:40,spacebar:32,pageup:33,pagedown:34,end:35,home:36},P={37:1,38:1,39:1,40:1},R=[],j=!1,q=Date.now(),V=function(){var e=0;return function(t){return t.uniqueID||(t.uniqueID=e++)}}(),F={};if(window.localStorage&&localStorage.SS_deltaBuffer)try{B=localStorage.SS_deltaBuffer.split(",")}catch(e){}var I,_=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(e,t,o){window.setTimeout(e,o||1e3/60)}}(),W=window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver,$=function(){var e;return function(){if(!e){var t=document.createElement("div");t.style.cssText="height:10000px;width:1px;",document.body.appendChild(t);var o=document.body.scrollTop;document.documentElement.scrollTop;window.scrollBy(0,3),e=document.body.scrollTop!=o?document.body:document.documentElement,window.scrollBy(0,-3),document.body.removeChild(t)}return e}}(),U=window.navigator.userAgent,G=/Edge/.test(U),J=/chrome/i.test(U)&&!G,Q=/safari/i.test(U)&&!G,Z=/mobile/i.test(U),ee=/Windows NT 6.1/i.test(U)&&/rv:11/i.test(U),te=Q&&(/Version\/8/i.test(U)||/Version\/9/i.test(U)),oe=(J||Q||ee)&&!Z;"onwheel"in document.createElement("div")?I="wheel":"onmousewheel"in document.createElement("div")&&(I="mousewheel"),I&&oe&&(m(I,r),m("mousedown",i),m("load",t)),k.destroy=o,window.SmoothScrollOptions&&k(window.SmoothScrollOptions),"function"==typeof define&&define.amd?define(function(){return k}):"object"==typeof exports?module.exports=k:window.SmoothScroll=k}();';

$js = str_replace(["\t","\n","\r"],"",$js);
$js = preg_replace('#/\*(.*)\*/#Usi','',$js);

echo $js;

?>