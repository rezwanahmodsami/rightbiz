<?
ob_start("ob_gzhandler");
header("Content-type: text/javascript; charset: UTF-8");

?>
/* popover - this requires css */
+function(t){"use strict";function e(e){return this.each(function(){var i=t(this),n=i.data("bs.popover"),s="object"==typeof e&&e;!n&&/destroy|hide/.test(e)||(n||i.data("bs.popover",n=new o(this,s)),"string"==typeof e&&n[e]())})}var o=function(t,e){this.init("popover",t,e)};if(!t.fn.tooltip)throw new Error("Popover requires tooltip.js");o.VERSION="3.3.7",o.DEFAULTS=t.extend({},t.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),o.prototype=t.extend({},t.fn.tooltip.Constructor.prototype),o.prototype.constructor=o,o.prototype.getDefaults=function(){return o.DEFAULTS},o.prototype.setContent=function(){var t=this.tip(),e=this.getTitle(),o=this.getContent();t.find(".popover-title")[this.options.html?"html":"text"](e),t.find(".popover-content").children().detach().end()[this.options.html?"string"==typeof o?"html":"append":"text"](o),t.removeClass("fade top bottom left right in"),t.find(".popover-title").html()||t.find(".popover-title").hide()},o.prototype.hasContent=function(){return this.getTitle()||this.getContent()},o.prototype.getContent=function(){var t=this.$element,e=this.options;return t.attr("data-content")||("function"==typeof e.content?e.content.call(t[0]):e.content)},o.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")};var i=t.fn.popover;t.fn.popover=e,t.fn.popover.Constructor=o,t.fn.popover.noConflict=function(){return t.fn.popover=i,this}}(jQuery);
$(function () { $('.pover').popover({container:'body',placement:'right',trigger:'focus'}); });

/* buy btn clicked */
$('.buy-btn').click(function(){$('#p_id').val($(this).data('id'));$('#form-package').submit();});

/* buy btn clicked */
$('.buy-btn-sell').click(function(){

	if($('#user_logged').val()!='logged'){
		var connect = $('#connect').val();
		$('#connect').val(connect.replace('{p_id}',$(this).data('id')));
		$('#form-package').submit();
	}

	$('#p_id').val($(this).data('id'));
	var user_id = $('#user_id').val();
	var user_email = $('#user_email').val();
	var user_name = $('#user_name').val();
	var user_tel = $('#user_tel').val();
	var user_type = $('#user_type').val();
	var user_broker = $('#user_broker').val();

	$.ajax({
		url: '/sell_business/V2/create_ad.ajax.php',
		type: 'POST',
		data: {user_id:user_id,user_email:user_email,user_name:user_name,user_tel:user_tel,user_type:user_type,user_broker:user_broker},
	})
	.done(function(msg) {
		var result = JSON.parse(msg);
		$('#item_number').val(result.advert_id);
		$('#mkey').val(result.advert_key);
		$('#form-package').submit();
	});
});