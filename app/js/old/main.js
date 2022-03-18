<?
ob_start("ob_gzhandler");
// cache control
$expires = 60*60*24*30; // how long to cache in seconds
header("Pragma: public");
header("Cache-Control: maxage=".$expires);
header('Expires: ' . gmdate('D, d M Y H:i:s', time()+$expires) . ' GMT');
header("Content-type: text/javascript; charset: UTF-8");

$js ="
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
$('.contact-btn').click(function(){
	$('html, body').animate({ scrollTop: $('#contact-big-cn').offset().top-20 }, 1000, 'easeInOutQuad');
});

$('.contact-cn').on('click','.cant-find-add',function(){
	$('.address-cn').slideDown(287);
});

$('.contact-cn').on('change','#addresses',function(){
	$('#address1').val($(this).find(':selected').data('ad1'));
	$('#address2').val($(this).find(':selected').data('ad2'));
	$('#town').val($(this).find(':selected').data('twn'));
	$('#county').val($(this).find(':selected').data('cty'));
});

$('.contact-cn').on('click','.find-address',function(){
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

	/* getting all fields and merging */
	var obj = {};
	var form_array = $(parent + '> form').serializeArray();
	$.each(form_array, function() {obj[this.name] = this.value || '';});
	var extra = {advert_id: advert_id, step: current_step, section: section, step_two_sects: step_two_sects};
	var json = $.extend( {}, obj, extra );
	var send = $.ajax({
		url: '/contact_form/V2/business_contact.php',
		type: 'POST',
		data: json ,
	})
	.done(function(msg) {
		var result = JSON.parse(msg);
		var errors = result.errors;
		var new_step = '.'+result.step;
		var new_section = '.'+result.section;

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
	}close_suggest();
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

$js = str_replace(["\t","\n","\r"],"",$js);
$js = preg_replace('#/\*(.*)\*/#Usi','',$js);

echo $js;

?>