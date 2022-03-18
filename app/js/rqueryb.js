/* ------------- EnQuery Start ------------- */

var $default_key = 0;

var $ = (function () {

    /*get element*/
    var $ = function (q) {
        if(!q){return;}
        if (q === 'doc'||q === 'document') {
            this.els = [document];
        } else if (q === 'body') {
            this.els = [document.body];
        } else if (q === 'win'||q === 'window') {
            this.els= [window];
        } else if (typeof q === 'object') {
            this.els = (q.length > 0 ? q : [q]);
        } else if (q.indexOf('<')>-1) {
            var html=document.createElement('div');
            html.innerHTML=q;
            /* this.els=[html.firstChild]; */
            this.els=[html];
        } else {
            this.els = document.querySelectorAll(q);
        }

    };

    /*assign funcs*/
    var funcs = [
        'length','each','el','index','not','attr','removeAttr','set','get','val','remove','empty','id','append','on','addClass','hasClass','removeClass','addRemoveClass','toggleClass',
        'html','text','outerHeight','outerWidth','height','width','scrollTo','scrollTop','scrollLeft','animate','ajax',
        'offset','css','show','hide','serializeArray','parent','siblings','sibling','children','first','findParent','findChild','fadeOut','fadeIn','slideDown','slideUp','slideToggle', 'prev', 'next'
    ];


    funcs.forEach(function(func){
        $.prototype[func] = window['$'+func];
    });


    $.prototype['off'] = function(event,func){
        this.each(function(){this.removeEventListener(event,func)});
        return this;
    };

    /*addEventListeners*/
    var events = ['mousemove','mouseup','mouseover','mouseout','mousedown','mouseenter','mouseleave','click','load','scroll','blur','error'];
    events.forEach(function(each){
        $.prototype[each] = function(func){
            this.each(function(){
                this.addEventListener(each,func);
            });
            return this;
        };
    });


    /*css*/
    var css = ['maxHeight','pointerEvents','boxShadow','opacity','top','left','position','display','overflow','margin','transform','transition','transformOrigin','zIndex'];
    css.forEach(function(each){
        $.prototype[each] = function(val){
            if(!val){return this[0].style[each];}
            this.each(function(){this.style[each]=val;});
            return this;
        };
    });

    /*return $ function*/
    return function(q){
        try{
            $default_key = 0; /* reset default */
            var new_$ = new $(q);
            if(new_$.els.length==0 || new_$.els==undefined){return false;}
            new_$[0]=new_$.els[$default_key];
            return new_$;
        }catch(e){}
    };
})();

/* ------------ Poly Fill Start ------------ */

/* IE hack for Object.entries */
if (!Object.entries) {
    Object.entries = function( obj ){
    var ownProps = Object.keys( obj ),
        i = ownProps.length,
        resArray = new Array(i); /* preallocate the Array */
    while (i--)
      resArray[i] = [ownProps[i], obj[ownProps[i]]];

    return resArray;
    };
}
/* for matches */
if (!Element.prototype.matches) {
    Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
}

/* ------------ Poly Fill End ------------ */


/*--------- Easing Functions Start ---------*/
/* Parameters
 * ----------
 * t = current time
 * b = start value
 * c = change in value
 * d = duration
 */

Math.linear 		= function (t, b, c, d) {return c*t/d + b;};
Math.easeInQuad 	= function (t, b, c, d) {t /= d;return c*t*t + b;};
Math.easeOutQuad 	= function (t, b, c, d) {t /= d;return -c * t*(t-2) + b;};
Math.easeInOutQuad 	= function (t, b, c, d) {t /= d/2;if (t < 1) return c/2*t*t + b;t--;return -c/2 * (t*(t-2) - 1) + b;};
Math.easeInQuart 	= function (t, b, c, d) {t /= d;return c*t*t*t*t + b;};
Math.easeOutQuart 	= function (t, b, c, d) {t /= d;t--;return -c * (t*t*t*t - 1) + b;};
Math.easeInOutQuart = function (t, b, c, d) {t /= d/2;if (t < 1) return c/2*t*t*t*t + b;t -= 2;return -c/2 * (t*t*t*t - 2) + b;};

/*---------- Easing Functions End ----------*/

function $empty(){
        this.each(function(){
                this.innerHTML = "";
        });
        return this;
}

function $append (placement, el){
    /* if append element stated in selector */
    if(!placement && !el){ $('body').append(this.el); return this; }

    var default_placement = "beforeend";
    const placements	  = {'before':'beforebegin', 'start':'afterbegin', 'end':'beforeend', 'after':'afterend'};

    if(placement && !el){
        /* placement is not specified */
        el = placement;
        placement = default_placement;
    }else if(placement.toLowerCase() in placements == true){
        /* custom name placement */
        placement = placements[placement.toLowerCase()];
    }else if(!placement){
        placement = default_placement;
    }


    this.each(function(){
        this.insertAdjacentHTML(placement, el);
    });
    return this;
}


function $remove(){
    this.each(function(){
        this.parentNode.removeChild(this);
    });
    return this;
}

function $id(id){
    if(!id){return this.els[$default_key].id;}
    this.each(function(){
        this.id=id;
    });
    return this;
}

function $set(key,val){
    this.each(function(){
        this.setAttribute(key,val);
    });
    return this;
}

function $get(key){
    return this.els[$default_key].getAttribute(key);
}

function $el(key){
    $default_key = key;
    return this;
}

function $index(){
    var parent = this.els[0].parentNode;
    var nodes = Array.prototype.slice.call( parent.children );
    return nodes.indexOf( this.els[0] );
}

function $not(selector){
    var new_els = [];

    this.each(function () {
        if(this!=selector){
            new_els.push(this);
        }
    });

    return new $(new_els);
}

function $length() {
    return this.els.length;
}

function $val(val){
    if(val==undefined){
        return this.els[$default_key].value;
    }else{
        this.each(function(){
            this.value = val;
        });
        return this;
    }
}

function $length() {
    return this.els.length;
}

function $each(func) {
    [].forEach.call(this.els,function(el){
        func.call(el,el);
    });
}

function $attr(key,val) {
    /*return attribute value only*/
    if(val==undefined){
        return this.els[$default_key].getAttribute(key);
    }

    /*set the attribute*/
    this.each(function(){
        this.setAttribute(key,val);
    });
    return this;
}

function $removeAttr(key) {
    /*remove the attribute*/
    this.each(function(){
        this.removeAttribute(key);
    });
    return this;
}


/* function $on(event,func){
    this.each(function(){
        this.addEventListener(event,func);
    });
    return this;
} */

function $on(event, selector, func=function(){}){

    if(typeof selector=='function'){
        /* no selector provided */
        func 		= selector;
        selector 	= '';

        this.each(function(){
            this.addEventListener(event, func);
        });
    }else{

        /* with selector */
        var el_class, type, selector2;
        var found = false;
        this.each(function(e){
            this.addEventListener(event, function(e){
                e = e || window.event;
                var target = e.target || e.srcElement;
                type = selector.charAt(0);
                selector2 = selector.substring(1);

                if(type=='.'){
                    /* for class selector */
                    el_class = (' ' + target.getAttribute('class') + ' ');
                    found = ( el_class.replace(/[\s]/g, " ").indexOf(' '+selector2+' ') > -1 );
                }else if(type=='#'){
                    /* for id selector */
                    found = (target.getAttribute('id')==selector2);
                }

                if(found==false){
                    /* bubble to find parent */
                    target = $(target).findParent(selector)[0];
                    found = target.length!=0 ? true : false;
                }

                /*---------------------------------------------------*/

                /* for mouseout/mouseover */
                let relatedTarget = e.relatedTarget;
                if(relatedTarget!=null){
                    var parent = relatedTarget;
                    var within_target = false;

                    if(parent){
                        /* bubbling to check if within target */
          				while (parent){
                            if (target == parent) {
                                found=false;
                                within_target=true;
                                break;
                            } else {
                                within_target=false;
                                parent = parent.parentNode;
                            }
                        }
                    }

                    /* check if current target is withing selector */
                    if(within_target==true){
                        found=false;
                    }
                }

                /*---------------------------------------------------*/

                if(found==true){
                    /* adding event listener to selector */
                    this.addEventListener(event, func.call(target,e));
                }

            });
        });
    }

    return this;
}



/* CLASS MANIPULATION - START */
function $addClass(name) {
    this.each(function () {
        if (this.classList) {
            this.classList.add(name);
        }else{
            let el_class = (this.getAttribute('class')!=null ? this.getAttribute('class') : ''); /* check if element has class */

            /* add new class if it doesn't exist and concatenate, then trim */
            if(!$(this).hasClass(name)){
                this.setAttribute('class', (el_class + ' ' + name).trim());
            }
        }
    });
    return this;
}


function $hasClass(name) {
    let el_class, has_class;
    this.each(function () {
        el_class = (' ' + this.getAttribute('class') + ' ');
        has_class = ( el_class.replace(/[\s]/g, " ").indexOf(' '+name+' ') > -1 );
    });

    return has_class;
}


function $removeClass(name) {
    this.each(function () {
        let cls = this.getAttribute('class');
        if(cls){
            /* check if class exists, then remove */
            if($(this).hasClass(name)){
                cls = cls.split(name).join('').replace(/[\s]+/g, " ").trim();
                this.setAttribute('class', cls);
            }
        }

        /* remove attribute if no classes */
        if(this.getAttribute('class')==''){
            this.removeAttribute('class');
        }
    });
    return this;
}

function $toggleClass(name){
    this.each(function () {
        if($(this).hasClass(name)){
            $(this).removeClass(name);
        }else{
            $(this).addClass(name);
        }
    });
}

function $addRemoveClass(name,ms) {
    this.each(function () {
        if(!$(this).hasClass(name)){
            this.setAttribute('class',(this.className+' '+name).trim());
            var temp=this;
            setTimeout(function(){$(temp).removeClass(name);},ms);
        }
    });
    return this;
}

/* CLASS MANIPULATION - END */

function $parent(selector){
    var parents = [];
    var parent;

    this.each(function () {
        parent = this.parentNode;
        if(!selector){
            parents.push(parent);
        }else if( parent.matches(selector) ){
            parents.push(parent);
        }
    });
    return new $(parents);
}

function $findParent(selector){
    var initial;
    var parents = [];

    this.each(function () {
        initial = this.parentNode;
        if(!selector){
            /* if no selector return the first parent */
            parents.push(initial);
        }else{

            /* escalate through each parent until seletor found */
            while(initial !== document){
                if ( initial.matches( selector ) ) {
                    parents.push(initial);
                    break;
                }
                initial = initial.parentNode;
            }
        }
    });
    return new $(parents);
}

function $findChild(selector){
    var initial;
    var childs = [];

    this.each(function () {
        children = this.querySelectorAll(selector);

        /* loop through each child of initial selector */
        for (var x = 0; x < children.length; x++) {
            childs.push(children[x]);
        }
    });
    return new $(childs);
}

function $children(selector){
    var children_arr = [],
        selector = selector || '*',
        found_children = [];
    
    this.each(function (item) {
        children_arr = item.children;
        
        /* loop through each child of initial selector except itself */
        for (var x = 0; x < children_arr.length; x++) {
            if(!children_arr[x].matches(selector)){continue;}        
            
            found_children.push(children_arr[x]);
        }
    }); 

    if(found_children.length === 0){
        return false;
    }

    return new $(found_children);
}


function $next(){    
    return new $(this[0].nextElementSibling);    
}

function $prev(){    
    return new $(this[0].previousElementSibling);    
}

/* ALIAS */
function $siblings(selector){
    return this.sibling(selector);
}

function $sibling(selector){
    var sibling_arr = [],
        selector = selector || '*',
        found_siblings = [];
        
    this.each(function (item) {
        sibling_arr = item.parentNode.children;
        
        /* loop through each child of initial selector except itself */
        for (var x = 0; x < sibling_arr.length; x++) {
            if(item == sibling_arr[x]){continue;}
            if(!sibling_arr[x].matches(selector)){continue;}
            
            
            found_siblings.push(sibling_arr[x]);
        }
    }); 

    if(found_siblings.length === 0){
        return false;
    }

    return new $(found_siblings);
}

function $first(selector){
    var first, initial;
    if(!selector) { selector = '*';}

    this.each(function () {
        first = this.parentNode.querySelectorAll(selector)[0];
    });
    return new $(first);
}

function $html(html) {
    if(!html){ return this.els[0].innerHTML;}
    this.each(function () {
        this.innerHTML=html;
    });
    return this;
}


function $text(text){
    if(!text){ return this.els[0].textContent;}
    this.each(function () {
        this.textContent=text;
    });

    return this;
}

function $outerHeight() {
    let outerHeight, styles;
    this.each(function () {
        styles 		= window.getComputedStyle(this);
        outerHeight =  this.offsetHeight + parseFloat(styles['marginTop']) + parseFloat(styles['marginBottom']);
    });
    return outerHeight;
}

function $outerWidth() {
    let outerWidth, styles;
    this.each(function () {
        styles 	   = window.getComputedStyle(this);
        outerWidth =  this.offsetWidth + parseFloat(styles['marginRight']) + parseFloat(styles['marginLeft']);
    });
    return outerWidth;
}


function $width() {
    let width,styles;
    this.each(function () {
        styles = window.getComputedStyle(this);
        width  =  parseFloat(styles['width']);
    });
    return width;
}


function $height() {
	let height,styles;
	this.each(function () {
		styles = window.getComputedStyle(this);
		height =  parseFloat(styles['height']);
	});
	return height;
}



/* get or set scroll top */
function $fadeIn(duration, easing='linear', func=function(){}){
    var start,to,change,currentTime,increment;

    if(typeof easing=='function'){
        func 	= easing;
        easing 	= 'linear';
    }

    this.each(function () {
        var el = this;

        /* if element is hidden */
        if($(this).css('display')=='none'){
            this.style.display = 'block';
            this.style.opacity = 0.1;
        }

        start 		= $(this).css('opacity')*100;
        to 			= 100;
        change 		= to - start;
        currentTime = 0;
        increment 	= 10;
        var animateFadeIn = function(){
            currentTime += increment;
            var val = Math[easing](currentTime, start, change, duration)/100;
            el.style.opacity = val;

            /* completion */
            if(val*100>=to){
                func.call(el);
                return;
            }

            if(currentTime < duration) {
                setTimeout(animateFadeIn, increment);
            }
        };
        animateFadeIn();
    });

    return this;
}


/* get or set scroll top */
function $fadeOut(duration, easing='linear', func=function(e){}){
    var start,to,change,currentTime,increment;

    if(typeof easing=='function'){
        func 	= easing;
        easing 	= 'linear';
    }

    this.each(function () {
        var el 		= this;
        start 		= $(el).css('opacity')*100;
        to 			= 0;
        change 		= to - start;
        currentTime = 0;
        increment 	= 10;
        var animateFadeOut = function(){
            currentTime += increment;
            var val = Math[easing](currentTime, start, change, duration) / 100;

            /* completion */
            if(val <= to){
                el.style.display = 'none';
                el.style.opacity = 0;
                func.call(el);
                return;
            }

            el.style.opacity = val;
            if(currentTime < duration) {
                setTimeout(animateFadeOut, increment);
            }
        };
        animateFadeOut();

    });

    return this;
}

function $slideDown(duration=500, func=function(e){}){

    this.each(function () {
        var el 		= this;
                var animateSlideDown = function(){
                        el.style.removeProperty('display');
                        let display = window.getComputedStyle(el).display;

                        if (display === 'none'){
                                el.classList.remove('hide');
                                display = 'block';
                                el.style.display = display;
                                let height = el.offsetHeight;
                                el.style.overflow = 'hidden';
                                el.style.height = 0;
                                el.style.paddingTop = 0;
                                el.style.paddingBottom = 0;
                                el.style.marginTop = 0;
                                el.style.marginBottom = 0;
                                el.offsetHeight;
                                el.style.boxSizing = 'border-box';
                                el.style.transitionProperty = "height, margin, padding";
                                el.style.transitionDuration = duration + 'ms';
                                el.style.height = height + 'px';
                                el.style.removeProperty('padding-top');
                                el.style.removeProperty('padding-bottom');
                                el.style.removeProperty('margin-top');
                                el.style.removeProperty('margin-bottom');
                                window.setTimeout( () => {
                                        el.style.display = 'block';
                                        el.style.removeProperty('height');
                                        el.style.removeProperty('overflow');
                                        el.style.removeProperty('transition-duration');
                                        el.style.removeProperty('transition-property');
                                }, duration);
                        }
                };
                animateSlideDown();

        });
    return this;
}

function $slideUp(duration=500, func=function(e){}){
    this.each(function () {
        var el 	  = this;
                var animateSlideUp = function(){
                        el.classList.remove('show');
                        el.style.transitionProperty = 'height, margin, padding';
                        el.style.transitionDuration = duration + 'ms';
                        el.style.boxSizing = 'border-box';
                        el.style.height = el.offsetHeight + 'px';
                        el.offsetHeight;
                        el.style.overflow = 'hidden';
                        el.style.height = 0;
                        el.style.paddingTop = 0;
                        el.style.paddingBottom = 0;
                        el.style.marginTop = 0;
                        el.style.marginBottom = 0;
                        window.setTimeout( () => {
                                                el.style.display = 'none';
                                                el.style.removeProperty('height');
                                                el.style.removeProperty('padding-top');
                                                el.style.removeProperty('padding-bottom');
                                                el.style.removeProperty('margin-top');
                                                el.style.removeProperty('margin-bottom');
                                                el.style.removeProperty('overflow');
                                                el.style.removeProperty('transition-duration');
                                                el.style.removeProperty('transition-property');
                        }, duration);
                }
                animateSlideUp();

        });
    return this;
}

function $slideToggle(duration=500, func=function(e){}){
        this.each(function () {
                var el = this;
                var animateSlideToggle = function(){
                        if($(el).css('display') == 'none'){
                                $(el).slideDown(200);
                        }else{
                                $(el).slideUp(200);
                        }
                }
                animateSlideToggle();
        });
    return this;
}

/* scroll document/element to position with easing */
function $scrollTo(to, duration, easing='easeOutQuart'){
    var el 			= this.els[$default_key];
    var start 		= (el.nodeType === 1 ? el.scrollTop : document.documentElement.scrollTop);
    var change 		= to - start;
    var currentTime = 0;
    var increment 	= 20;

    var animateScroll = function(){
        currentTime += increment;
        var val = Math[easing](currentTime, start, change, duration);
        if(el.nodeType === 1){
            /* element */
            el.scrollTop = val;
        }else{
            /* document / window */
            document.documentElement.scrollTop = val;
        }

        if(currentTime < duration) {
            setTimeout(animateScroll, increment);
        }
    };

    animateScroll();
    return this;
}

function $animate(property_arr, duration, easing='easeOutQuart'){
    var el 			= this.els[$default_key];
    var duration = duration || 500;
    var currentTime = 0;
    var increment 	= 20;

    var animateScroll = function(){
        currentTime += increment;

        for (var property in property_arr) {
            if (!property_arr.hasOwnProperty(property)){continue;} /*for object functions*/

            var start = (el.nodeType === 1 ? el[property] : document.documentElement[property]);
            var to = property_arr[property];
            var change = to - start;
            var val = Math[easing](currentTime, start, change, duration);

            window.e = {el,property,to,duration,easing, change, currentTime};

            if(el.nodeType === 1){
                /* element */
                el[property] = val;
            }else{
                /* document / window */
                document.documentElement[property] = val;
            }
        }

        if(currentTime < duration) {
            setTimeout(animateScroll, increment);
        }
    };

    animateScroll();
    return this;
}


/* get or set scroll left */
function $scrollTop(val){
    let scroll_top;
    this.each(function () {
        /* setting scroll value */
        if(val >= 0){
            if(this.nodeType === 1 ){
                this.scrollTop = val; /*element*/
            }else{
                document.documentElement.scrollTop = val; /*document / window */
            }

            return;
        }

        /* if node is element use elements scroll else use documents */
        scroll_top = (this.nodeType === 1 ? this.scrollTop : document.documentElement.scrollTop);
    });
    return scroll_top;
}


/* get or set scroll left */
function $scrollLeft(val){
    let scroll_left;
    this.each(function () {
        /* setting scroll value */
        if(val >= 0){
            if(this.nodeType === 1 ){
                this.scrollLeft = val; /*element*/
            }else{
                document.documentElement.scrollLeft = val; /*document / window */
            }

            return;
        }

        /* if node is element use elements scroll else use documents */
        scroll_left = (this.nodeType === 1 ? this.scrollLeft : document.documentElement.scrollLeft);
    });
    return scroll_left;
}


/* get current position of an element */
function $offset() {
    let offset, docElem;
    this.each(function () {
        offset   = this.getBoundingClientRect();
        docElem  = document.documentElement;

        off_top  = offset.top + window.pageYOffset - docElem.clientTop;
        off_left = offset.left + window.pageXOffset - docElem.clientLeft;
    });

    return {
        top: off_top,
        left: off_left
    };
}


/* get current position of an element */
function $css(values) {

    /* return css value*/
    if(typeof values === 'string'){
        return getComputedStyle(this.els[$default_key], null).getPropertyValue(values);
    }


    /* set css value */
    this.each(function () {
        var el = this;
        var priority, value;
        Object.keys(values).forEach(function(key) {
            priority = '';
            if(values[key].indexOf("!important") !== -1){
                priority = "important";
                values[key] = values[key].replace("!important", "");
            }
            el.style.setProperty(key, values[key], priority);
        });
    });


    function implode_css(concat_string, a){
        return concat_string + a[0]+':'+ a[1]+ ';';
    }

    return this;
}

function $show(){
    this.each(function () {
        let display = getComputedStyle(this, null).getPropertyValue('display');
        if(display=='none'){
            this.style.display = 'block';
        }
    });
    return this;
}

function $hide(){
    this.each(function () {
        let display = getComputedStyle(this, null).getPropertyValue('display');
        if(display=='block' || display=='inline-block' || display=='inline'){
            this.style.display = 'none';
        }
    });
    return this;
}

function $serializeArray() {
    var objects = [];
    this.each(function () {
        if(this.getAttribute("name")){
            objects.push({ name: this.getAttribute("name"), value: this.getAttribute("value") });
        }
    });

    return objects;
}


function $log(text) {
    console.log(text);
}

function $isJson(str) {
    str = str.replace(/'/g, '"');
    /* hack to convert ' to " */
    try {
        var json = JSON.parse(str);
        return (typeof json === 'object');
    } catch (e) {
        return false;
    }
}

/* compare arrays - checks if arrays are identical */
function $arrayCompare(a1, a2) {

    try {
        var a1_len = Object.keys(a1).length;
        var a2_len = Object.keys(a2).length;
    }catch(err) {
        return false;
    }

    /*---------------------------------------------------*/
    if (a1_len != a2_len) return false;
    /*---------------------------------------------------*/
    for (var i = 0; i < a2_len; i++) {
        if (a1[i] !== a2[i]) return false;
    }
    /*---------------------------------------------------*/

    return true;
}

/* in array - checks multidimensional objects + array against array */
function $inArray(needle, haystack) {
    var needleArray = (Array.isArray(needle) ? true : false);

    for (i in haystack) {
        if(typeof haystack[i] == 'object') {
            if($inArray(needle, haystack[i])) return true;
            if(needleArray==true){
                if($arrayCompare(haystack[i], needle)) return true;
            }
        } else {
            if(haystack[i] == needle) return true;
        }
    }
    return false;
}


/* throttling on functions */
function $throttle(fn, interval) {
    var lastCall, timeoutId;
    return function () {
        var now = new Date().getTime();
        if (lastCall && now < (lastCall + interval) ) {
            /* if we are inside the interval we wait */
            clearTimeout(timeoutId);
            timeoutId = setTimeout(function () {
                lastCall = now;
                fn.call();
            }, interval - (now - lastCall) );
        } else {
            /* otherwise, we directly call the function */
            lastCall = now;
            fn.call();
        }
    };
}

function $setCookie(name,value,days) {
        var expires = "";
        if (days) {
                var date = new Date();
                date.setTime(date.getTime() + (days*24*60*60*1000));
                expires = "; expires=" + date.toUTCString();
        }
        document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}

function $getCookie(name) {
        var nameEQ = name + "=";
        var ca = document.cookie.split(';');
        for(var i=0;i < ca.length;i++) {
                var c = ca[i];
                while (c.charAt(0)==' ') c = c.substring(1,c.length);
                if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
        }
        return null;
}

function $removeCookie(name) {
        document.cookie = name +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}

function $ajax(options){
    /* sorting type/method - default GET */
    var type, data;
    if(options.type){
        type = options.type.toUpperCase();
    }else if(options.method){
        type = options.method.toUpperCase();
    }else{
        type = 'GET';
    }

    if(options.data){
        var params = options.data;
        var data   = Object.keys(params).map(function(key) {
            return key + '=' + encodeURIComponent(params[key])
        }).join('&');

        if(type=='GET'){
            var operator = (options.url.indexOf('?') != -1 ? '&' : '?');
            options.url = options.url+operator+data;
        }
    }

    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
        if(this.readyState==4) {

            if(this.status!=200){
                if(options.fail){
                    options.fail(this);
                }
            }

            if(this.status==200){
                if(options.success){
                    options.success(this);
                    if(options.enablescripts && this.responseText.indexOf('<script>')>-1){
                        this.responseText.match(/<script>(.*?)<\/script>/g).forEach(function(script){ window.eval(script.substring(8,script.length-9)); });
                    }
                }
            }

            if(options.always){
                options.always(this);
            }
        }

        return;
    };

    xhr.open(type, options.url, true);
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.send(data);


    return xhr;
}