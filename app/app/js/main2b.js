/*GOOGLE ADD WEBSITE TO PHONE HOMESCREEN*/
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

/* MODAL
    modal() parameter MUST have single quotations
    <button onclick="modal('modal_')">button</button>
    <div class="modal fade" id="modal_">
        <div class="container"></div>
        <div class="modal-backdrop in dontClose[optional]"></div>
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

/* HEADER */
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
    $('#header_nav').slideToggle(200);
    toggleNavBack();
}
document.getElementById('menu_togg').addEventListener('click', function() {toggleHeaderMenu();});
document.getElementById('nav_back').addEventListener('click',function(){toggleHeaderMenu();});


/* ENQUIRY */
function enquiryIframe(el,id,src){
    var iframe = document.querySelector(el + ' .modal-iframe iframe');

    var el = document.querySelector(el);
    if(parseInt(el.getAttribute('data-advert')) !== id){
        iframe.setAttribute('src','about:none;');
        iframe.style.opacity = '0';
        setTimeout(function(){
            iframe.setAttribute('src',src);
        }, 10);
    }
    el.setAttribute('data-advert',id);
    iframe.style.opacity = '1';

    gtag('event', 'results_page', { 'method' : 'contact_modal'});

}

function enquiryResizeIframe(obj) {
    obj.style.height = obj.contentWindow.document.body.offsetHeight + 'px';
}
function showEnquirySpinner(){
    document.querySelector('.enquiry_section.in .lds-spinner').style.display = 'inline-block';
}
function hideEnquirySpinner(){
    document.querySelector('.enquiry_section.in .lds-spinner').style.display = 'none';
}


/* BUSINESS SEARCH */
$(document).on('keyup','.search-inp',function(e){
    var ths 		 = $(this);
    var str 		 = ths.val();
    var code 		 = e.key;
    var container	 = ths.siblings('.suggestion');
    var ignore_codes = ['ArrowDown','ArrowRight','ArrowLeft','ArrowUp','Enter'];

    if(str=='' || code==27 || code==13){
        close_suggest();
    }else{
        if(!$inArray(code, ignore_codes)){
            ths.siblings('.stype').val('');
            $(document).ajax({
                type:'GET',
                url:'/search/'+(ths.attr('data-type')=='sector' ? 'cats':'area')+'.ajax.2.php',
                data:{ 'hint' : escape(str) },
                success:function(msg){
                    var results = msg.responseText;
                    if(results!= ''){
                        container.html(results);
                        next=null;
                        if(container.css('display') !== 'block'){
                            container.slideDown(200);
                            container[0].classList.add('active');
                        }
                    }
                }
            });

        }
    }
});

/* navigating through suggests with keys */
var next;
$(document).on('keydown','.search-inp', function(e) {
	var ths 		= $(this);
	var code 		= e.key;
	var container 	= ths.siblings('.suggestion');
	var current 	= container.children('.selected');
    var item 		= container.children('div');
    var total = item.els ? (item.els.length) - 1 : 0;
    next = next || item;

	switch (code){
        case 'ArrowDown':
            next = next.index() == total ? $(item[0]) : next.next() ;
            handleItem(ths,next,current,container);
            return;
        case 'ArrowUp':
            next = next.index() == 0 ? $(item.els[total]) : next.prev();
            handleItem(ths,next,current,container);
            return;
	}
});

/*  if clicked outside drop-down then close */
$(document).on('mouseup', function (e){
    var target= e.target;window.t = target;
    if($('.suggestion.active').length == 0){ return; }
    var sibling = $(target).sibling('.suggestion.active');

    if (! target.closest('.suggestion') && !sibling){
        close_suggest();
        return false;
    }

});

function check_return(e) {
    var t = e.key;console.log(t);
    if(!['Enter'].includes(t)){return true;}

    if($('.sbox').val() != ''){return true;}

    close_suggest();
    return false;
}

function close_suggest(){
    next=null;
    $('.suggestion').slideUp(283);

    if($('.suggestion.active .selected')){
        var isTown = $('suggestion.active .selected').attr('istown')==1 ? 1 : 0;
        if($('#radius_cn')){
            if(isTown==1){
                $('#radius_cn').slideDown();
            }else{
                $('#radius_cn').slideUp();
            }
        }

        $('.suggestion').removeClass('active');
    }
}

function cat_click(e,val){
	$('.search-sector .search-inp').val(val);
	$('.search-sector .stype').val('true');
	$('.search-sector .vtype').val(e);
    if(document.body.contains($('#search_biz_count')[0]) === true){
        $('#search_biz_count').hide();
    }
    close_suggest();
}

function loc_click(val,isTown){
	$('.search-location .search-inp').val(val);
	$('.search-location .stype').val('true');
    $('.search-location .vtype').val(val);
    if(document.body.contains($('#search_biz_count')[0]) === true){
        $('#search_biz_count').hide();
    }

    if($('#radius_cn')){
        if(isTown==1){
            $('#radius_cn').slideDown();
        }else{
            $('#radius_cn').slideUp();
        }
    }
	close_suggest();
}


function handleItem(ths,next,current,container){window.l = {ths,next,current,container};
	if(current){current.removeClass('selected');}
    next.addClass('selected');
	ths.siblings('.stype').val('true');
	ths.siblings('.vtype').val(next.attr('data-default'));
	ths.val(next.text());

    /* to scroll div into view*/
	if(container[0].scrollHeight > container.height()){
        if(next[0].offsetTop > container[0].scrollTop + container.height()){
            /* move down */
            var scrollOffset = next[0].offsetTop - container.height() + next.height();
            if(scrollOffset > 0){
                container[0].scrollTop = scrollOffset;
            }
        }else if(next[0].offsetTop < container[0].scrollTop){
            /* move up */
            var scrollOffset = container[0].scrollTop - next[0].offsetTop;
            container[0].scrollTop -= scrollOffset;
        }

	}

}

/* HELPER FUNCTIONS */
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

function query_string(key, value) {
    var uri = encodeURI('{file_path}{query_string}');

    var re = new RegExp('([?&])' + key + '=.*?(&|$)', 'i');
    var separator = uri.indexOf('?') !== -1 ? '&' : '?';
    if (uri.match(re)) {
        return uri.replace(re, '$1' + key + '=' + value + '$2');
    }
    else {
        return uri + separator + key + '=' + value;
    }
}

function decode_utf8(s) {
    return decodeURIComponent(escape(s));
}

function scrollToEl(el, time = 150, easing = 'easeOutQuart'){
    var scrollVal;
    var easing = easing || 'easeInOutSine';

    if(el == 'top'){
        scrollVal = document.offsetTop;
    }else if(el == 'bottom'){
        scrollVal = document.body.scrollHeight;
    }else{
        scrollVal = $(el).offset().top;
    }

    $(document).animate({ scrollTop: scrollVal }, time, easing);
}


if($('.scroll-to-top')){$('.scroll-to-top').click(function(){scrollToEl('top');});}
if($('.scroll-to-bottom')){$('.scroll-to-bottom').click(function(){scrollToEl('bottom');});}

var script = document.createElement('script');
script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/4.1.8/lazysizes.min.js';
document.body.appendChild(script);