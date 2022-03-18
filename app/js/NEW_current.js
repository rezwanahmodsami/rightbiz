var $default_key = 0,
	$ = function() {
		var t = function(t) {
			if (t)
				if ("doc" === t || "document" === t) this.els = [document];
				else if ("body" === t) this.els = [document.body];
			else if ("win" === t || "window" === t) this.els = [window];
			else if ("object" == typeof t) this.els = t.length > 0 ? t : [t];
			else if (t.indexOf("<") > -1) {
				var e = document.createElement("div");
				e.innerHTML = t, this.els = [e]
			} else this.els = document.querySelectorAll(t)
		};
		["length", "each", "el", "index", "not", "attr", "removeAttr", "set", "get", "val", "remove", "empty", "id", "append", "on", "addClass", "hasClass", "removeClass", "addRemoveClass", "toggleClass", "html", "text", "outerHeight", "outerWidth", "height", "width", "scrollTo", "scrollTop", "scrollLeft", "animate", "ajax", "offset", "css", "show", "hide", "serializeArray", "parent", "siblings", "sibling", "children", "first", "findParent", "findChild", "fadeOut", "fadeIn", "slideDown", "slideUp", "slideToggle", "prev", "next"].forEach((function(e) {
			t.prototype[e] = window["$" + e]
		})), t.prototype.off = function(t, e) {
			return this.each((function() {
				this.removeEventListener(t, e)
			})), this
		};
		["mousemove", "mouseup", "mouseover", "mouseout", "mousedown", "mouseenter", "mouseleave", "click", "load", "scroll", "blur", "error"].forEach((function(e) {
			t.prototype[e] = function(t) {
				return this.each((function() {
					this.addEventListener(e, t)
				})), this
			}
		}));
		return ["maxHeight", "pointerEvents", "boxShadow", "opacity", "top", "left", "position", "display", "overflow", "margin", "transform", "transition", "transformOrigin", "zIndex"].forEach((function(e) {
				t.prototype[e] = function(t) {
					return t ? (this.each((function() {
						this.style[e] = t
					})), this) : this[0].style[e]
				}
			})),
			function(e) {
				try {
					$default_key = 0;
					var n = new t(e);
					return 0 != n.els.length && null != n.els && (n[0] = n.els[$default_key], n)
				} catch (t) {}
			}
	}();

function $empty() {
	return this.each((function() {
		this.innerHTML = ""
	})), this
}

function $append(t, e) {
	if (!t && !e) return $("body").append(this.el), this;
	var n = "beforeend";
	const i = {
		before: "beforebegin",
		start: "afterbegin",
		end: "beforeend",
		after: "afterend"
	};
	return t && !e ? (e = t, t = n) : t.toLowerCase() in i == 1 ? t = i[t.toLowerCase()] : t || (t = n), this.each((function() {
		this.insertAdjacentHTML(t, e)
	})), this
}

function $remove() {
	return this.each((function() {
		this.parentNode.removeChild(this)
	})), this
}

function $id(t) {
	return t ? (this.each((function() {
		this.id = t
	})), this) : this.els[$default_key].id
}

function $set(t, e) {
	return this.each((function() {
		this.setAttribute(t, e)
	})), this
}

function $get(t) {
	return this.els[$default_key].getAttribute(t)
}

function $el(t) {
	return $default_key = t, this
}

function $index() {
	var t = this.els[0].parentNode;
	return Array.prototype.slice.call(t.children).indexOf(this.els[0])
}

function $not(t) {
	var e = [];
	return this.each((function() {
		this != t && e.push(this)
	})), new $(e)
}

function $length() {
	return this.els.length
}

function $val(t) {
	return null == t ? this.els[$default_key].value : (this.each((function() {
		this.value = t
	})), this)
}

function $length() {
	return this.els.length
}

function $each(t) {
	[].forEach.call(this.els, (function(e) {
		t.call(e, e)
	}))
}

function $attr(t, e) {
	return null == e ? this.els[$default_key].getAttribute(t) : (this.each((function() {
		this.setAttribute(t, e)
	})), this)
}

function $removeAttr(t) {
	return this.each((function() {
		this.removeAttribute(t)
	})), this
}

function $on(t, e, n = function() {}) {
	if ("function" == typeof e) n = e, e = "", this.each((function() {
		this.addEventListener(t, n)
	}));
	else {
		var i, r, o, s = !1;
		this.each((function(a) {
			this.addEventListener(t, (function(a) {
				var l = (a = a || window.event).target || a.srcElement;
				r = e.charAt(0), o = e.substring(1), "." == r ? (i = " " + l.getAttribute("class") + " ", s = i.replace(/[\s]/g, " ").indexOf(" " + o + " ") > -1) : "#" == r && (s = l.getAttribute("id") == o), 0 == s && (l = $(l).findParent(e)[0], s = 0 != l.length);
				let u = a.relatedTarget;
				if (null != u) {
					var h = u,
						c = !1;
					if (h)
						for (; h;) {
							if (l == h) {
								s = !1, c = !0;
								break
							}
							c = !1, h = h.parentNode
						}
					1 == c && (s = !1)
				}
				1 == s && this.addEventListener(t, n.call(l, a))
			}))
		}))
	}
	return this
}

function $addClass(t) {
	return this.each((function() {
		if (this.classList) this.classList.add(t);
		else {
			let e = null != this.getAttribute("class") ? this.getAttribute("class") : "";
			$(this).hasClass(t) || this.setAttribute("class", (e + " " + t).trim())
		}
	})), this
}

function $hasClass(t) {
	let e, n;
	return this.each((function() {
		e = " " + this.getAttribute("class") + " ", n = e.replace(/[\s]/g, " ").indexOf(" " + t + " ") > -1
	})), n
}

function $removeClass(t) {
	return this.each((function() {
		let e = this.getAttribute("class");
		e && $(this).hasClass(t) && (e = e.split(t).join("").replace(/[\s]+/g, " ").trim(), this.setAttribute("class", e)), "" == this.getAttribute("class") && this.removeAttribute("class")
	})), this
}

function $toggleClass(t) {
	this.each((function() {
		$(this).hasClass(t) ? $(this).removeClass(t) : $(this).addClass(t)
	}))
}

function $addRemoveClass(t, e) {
	return this.each((function() {
		if (!$(this).hasClass(t)) {
			this.setAttribute("class", (this.className + " " + t).trim());
			var n = this;
			setTimeout((function() {
				$(n).removeClass(t)
			}), e)
		}
	})), this
}

function $parent(t) {
	var e, n = [];
	return this.each((function() {
		e = this.parentNode, t ? e.matches(t) && n.push(e) : n.push(e)
	})), new $(n)
}

function $findParent(t) {
	var e, n = [];
	return this.each((function() {
		if (e = this.parentNode, t)
			for (; e !== document;) {
				if (e.matches(t)) {
					n.push(e);
					break
				}
				e = e.parentNode
			} else n.push(e)
	})), new $(n)
}

function $findChild(t) {
	var e = [];
	return this.each((function() {
		children = this.querySelectorAll(t);
		for (var n = 0; n < children.length; n++) e.push(children[n])
	})), new $(e)
}

function $children(t) {
	var e = [],
		n = (t = t || "*", []);
	return this.each((function(i) {
		e = i.children;
		for (var r = 0; r < e.length; r++) e[r].matches(t) && n.push(e[r])
	})), 0 !== n.length && new $(n)
}

function $next() {
	return new $(this[0].nextElementSibling)
}

function $prev() {
	return new $(this[0].previousElementSibling)
}

function $siblings(t) {
	return this.sibling(t)
}

function $sibling(t) {
	var e = [],
		n = (t = t || "*", []);
	return this.each((function(i) {
		e = i.parentNode.children;
		for (var r = 0; r < e.length; r++) i != e[r] && e[r].matches(t) && n.push(e[r])
	})), 0 !== n.length && new $(n)
}

function $first(t) {
	var e;
	return t || (t = "*"), this.each((function() {
		e = this.parentNode.querySelectorAll(t)[0]
	})), new $(e)
}

function $html(t) {
	return t ? (this.each((function() {
		this.innerHTML = t
	})), this) : this.els[0].innerHTML
}

function $text(t) {
	return t ? (this.each((function() {
		this.textContent = t
	})), this) : this.els[0].textContent
}

function $outerHeight() {
	let t, e;
	return this.each((function() {
		e = window.getComputedStyle(this), t = this.offsetHeight + parseFloat(e.marginTop) + parseFloat(e.marginBottom)
	})), t
}

function $outerWidth() {
	let t, e;
	return this.each((function() {
		e = window.getComputedStyle(this), t = this.offsetWidth + parseFloat(e.marginRight) + parseFloat(e.marginLeft)
	})), t
}

function $width() {
	let t, e;
	return this.each((function() {
		e = window.getComputedStyle(this), t = parseFloat(e.width)
	})), t
}

function $height() {
	let t, e;
	return this.each((function() {
		e = window.getComputedStyle(this), t = parseFloat(e.height)
	})), t
}

function $fadeIn(t, e = "linear", n = function() {}) {
	var i, r, o;
	return "function" == typeof e && (n = e, e = "linear"), this.each((function() {
		var s = this;
		"none" == $(this).css("display") && (this.style.display = "block", this.style.opacity = .1), i = 100 * $(this).css("opacity"), 100, r = 100 - i, o = 0, 10;
		var a = function() {
			o += 10;
			var l = Math[e](o, i, r, t) / 100;
			s.style.opacity = l, 100 * l >= 100 ? n.call(s) : o < t && setTimeout(a, 10)
		};
		a()
	})), this
}

function $fadeOut(t, e = "linear", n = function(t) {}) {
	var i, r, o;
	return "function" == typeof e && (n = e, e = "linear"), this.each((function() {
		var s = this;
		i = 100 * $(s).css("opacity"), 0, r = 0 - i, o = 0, 10;
		var a = function() {
			o += 10;
			var l = Math[e](o, i, r, t) / 100;
			if (l <= 0) return s.style.display = "none", s.style.opacity = 0, void n.call(s);
			s.style.opacity = l, o < t && setTimeout(a, 10)
		};
		a()
	})), this
}

function $slideDown(t = 500, e = function(t) {}) {
	return this.each((function() {
		var e = this;
		! function() {
			e.style.removeProperty("display");
			let n = window.getComputedStyle(e).display;
			if ("none" === n) {
				e.classList.remove("hide"), n = "block", e.style.display = n;
				let i = e.offsetHeight;
				e.style.overflow = "hidden", e.style.height = 0, e.style.paddingTop = 0, e.style.paddingBottom = 0, e.style.marginTop = 0, e.style.marginBottom = 0, e.offsetHeight, e.style.boxSizing = "border-box", e.style.transitionProperty = "height, margin, padding", e.style.transitionDuration = t + "ms", e.style.height = i + "px", e.style.removeProperty("padding-top"), e.style.removeProperty("padding-bottom"), e.style.removeProperty("margin-top"), e.style.removeProperty("margin-bottom"), window.setTimeout((() => {
					e.style.display = "block", e.style.removeProperty("height"), e.style.removeProperty("overflow"), e.style.removeProperty("transition-duration"), e.style.removeProperty("transition-property")
				}), t)
			}
		}()
	})), this
}

function $slideUp(t = 500, e = function(t) {}) {
	return this.each((function() {
		var e = this;
		e.classList.remove("show"), e.style.transitionProperty = "height, margin, padding", e.style.transitionDuration = t + "ms", e.style.boxSizing = "border-box", e.style.height = e.offsetHeight + "px", e.offsetHeight, e.style.overflow = "hidden", e.style.height = 0, e.style.paddingTop = 0, e.style.paddingBottom = 0, e.style.marginTop = 0, e.style.marginBottom = 0, window.setTimeout((() => {
			e.style.display = "none", e.style.removeProperty("height"), e.style.removeProperty("padding-top"), e.style.removeProperty("padding-bottom"), e.style.removeProperty("margin-top"), e.style.removeProperty("margin-bottom"), e.style.removeProperty("overflow"), e.style.removeProperty("transition-duration"), e.style.removeProperty("transition-property")
		}), t)
	})), this
}

function $slideToggle(t = 500, e = function(t) {}) {
	return this.each((function() {
		var t = this;
		"none" == $(t).css("display") ? $(t).slideDown(200) : $(t).slideUp(200)
	})), this
}

function $scrollTo(t, e, n = "easeOutQuart") {
	var i = this.els[$default_key],
		r = 1 === i.nodeType ? i.scrollTop : document.documentElement.scrollTop,
		o = t - r,
		s = 0,
		a = function() {
			s += 20;
			var t = Math[n](s, r, o, e);
			1 === i.nodeType ? i.scrollTop = t : document.documentElement.scrollTop = t, s < e && setTimeout(a, 20)
		};
	return a(), this
}

function $animate(t, e, n = "easeOutQuart") {
	var i = this.els[$default_key],
		r = (e = e || 500, 0),
		o = function() {
			for (var s in r += 20, t)
				if (t.hasOwnProperty(s)) {
					var a = 1 === i.nodeType ? i[s] : document.documentElement[s],
						l = t[s],
						u = l - a,
						h = Math[n](r, a, u, e);
					window.e = {
						el: i,
						property: s,
						to: l,
						duration: e,
						easing: n,
						change: u,
						currentTime: r
					}, 1 === i.nodeType ? i[s] = h : document.documentElement[s] = h
				} r < e && setTimeout(o, 20)
		};
	return o(), this
}

function $scrollTop(t) {
	let e;
	return this.each((function() {
		t >= 0 ? 1 === this.nodeType ? this.scrollTop = t : document.documentElement.scrollTop = t : e = 1 === this.nodeType ? this.scrollTop : document.documentElement.scrollTop
	})), e
}

function $scrollLeft(t) {
	let e;
	return this.each((function() {
		t >= 0 ? 1 === this.nodeType ? this.scrollLeft = t : document.documentElement.scrollLeft = t : e = 1 === this.nodeType ? this.scrollLeft : document.documentElement.scrollLeft
	})), e
}

function $offset() {
	let t, e;
	return this.each((function() {
		t = this.getBoundingClientRect(), e = document.documentElement, off_top = t.top + window.pageYOffset - e.clientTop, off_left = t.left + window.pageXOffset - e.clientLeft
	})), {
		top: off_top,
		left: off_left
	}
}

function $css(t) {
	if ("string" == typeof t) return getComputedStyle(this.els[$default_key], null).getPropertyValue(t);
	return this.each((function() {
		var e, n = this;
		Object.keys(t).forEach((function(i) {
			e = "", -1 !== t[i].indexOf("!important") && (e = "important", t[i] = t[i].replace("!important", "")), n.style.setProperty(i, t[i], e)
		}))
	})), this
}

function $show() {
	return this.each((function() {
		"none" == getComputedStyle(this, null).getPropertyValue("display") && (this.style.display = "block")
	})), this
}

function $hide() {
	return this.each((function() {
		let t = getComputedStyle(this, null).getPropertyValue("display");
		"block" != t && "inline-block" != t && "inline" != t || (this.style.display = "none")
	})), this
}

function $serializeArray() {
	var t = [];
	return this.each((function() {
		this.getAttribute("name") && t.push({
			name: this.getAttribute("name"),
			value: this.getAttribute("value")
		})
	})), t
}

function $log(t) {
	console.log(t)
}

function $isJson(t) {
	t = t.replace(/'/g, '"');
	try {
		return "object" == typeof JSON.parse(t)
	} catch (t) {
		return !1
	}
}

function $arrayCompare(t, e) {
	try {
		var n = Object.keys(t).length,
			i = Object.keys(e).length
	} catch (t) {
		return !1
	}
	if (n != i) return !1;
	for (var r = 0; r < i; r++)
		if (t[r] !== e[r]) return !1;
	return !0
}

function $inArray(t, e) {
	var n = !!Array.isArray(t);
	for (i in e)
		if ("object" == typeof e[i]) {
			if ($inArray(t, e[i])) return !0;
			if (1 == n && $arrayCompare(e[i], t)) return !0
		} else if (e[i] == t) return !0;
	return !1
}

function $throttle(t, e) {
	var n, i;
	return function() {
		var r = (new Date).getTime();
		n && r < n + e ? (clearTimeout(i), i = setTimeout((function() {
			n = r, t.call()
		}), e - (r - n))) : (n = r, t.call())
	}
}

function $setCookie(t, e, n) {
	var i = "";
	if (n) {
		var r = new Date;
		r.setTime(r.getTime() + 24 * n * 60 * 60 * 1e3), i = "; expires=" + r.toUTCString()
	}
	document.cookie = t + "=" + (e || "") + i + "; path=/"
}

function $getCookie(t) {
	for (var e = t + "=", n = document.cookie.split(";"), i = 0; i < n.length; i++) {
		for (var r = n[i];
			" " == r.charAt(0);) r = r.substring(1, r.length);
		if (0 == r.indexOf(e)) return r.substring(e.length, r.length)
	}
	return null
}

function $removeCookie(t) {
	document.cookie = t + "=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;"
}

function $ajax(t) {
	var e;
	if (e = t.type ? t.type.toUpperCase() : t.method ? t.method.toUpperCase() : "GET", t.data) {
		var n = t.data,
			i = Object.keys(n).map((function(t) {
				return t + "=" + encodeURIComponent(n[t])
			})).join("&");
		if ("GET" == e) {
			var r = -1 != t.url.indexOf("?") ? "&" : "?";
			t.url = t.url + r + i
		}
	}
	var o = new XMLHttpRequest;
	return o.onreadystatechange = function() {
		4 == this.readyState && (200 != this.status && t.fail && t.fail(this), 200 == this.status && t.success && (t.success(this), t.enablescripts && this.responseText.indexOf("<script>") > -1 && this.responseText.match(/<script>(.*?)<\/script>/g).forEach((function(t) {
			window.eval(t.substring(8, t.length - 9))
		}))), t.always && t.always(this))
	}, o.open(e, t.url, !0), o.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), o.send(i), o
}
Object.entries || (Object.entries = function(t) {
	for (var e = Object.keys(t), n = e.length, i = new Array(n); n--;) i[n] = [e[n], t[e[n]]];
	return i
}), Element.prototype.matches || (Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector), Math.linear = function(t, e, n, i) {
	return n * t / i + e
}, Math.easeInQuad = function(t, e, n, i) {
	return n * (t /= i) * t + e
}, Math.easeOutQuad = function(t, e, n, i) {
	return -n * (t /= i) * (t - 2) + e
}, Math.easeInOutQuad = function(t, e, n, i) {
	return (t /= i / 2) < 1 ? n / 2 * t * t + e : -n / 2 * (--t * (t - 2) - 1) + e
}, Math.easeInQuart = function(t, e, n, i) {
	return n * (t /= i) * t * t * t + e
}, Math.easeOutQuart = function(t, e, n, i) {
	return t /= i, -n * (--t * t * t * t - 1) + e
}, Math.easeInOutQuart = function(t, e, n, i) {
	return (t /= i / 2) < 1 ? n / 2 * t * t * t * t + e : -n / 2 * ((t -= 2) * t * t * t - 2) + e
};