
  /*! lazysizes - v4.0.1 */
  !function (a, b) {var c = b(a, a.document);a.lazySizes = c, "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports && (module.exports = c);}(window, function (a, b) {"use strict";if (b.getElementsByClassName) {var c,d,e = b.documentElement,f = a.Date,g = a.HTMLPictureElement,h = "addEventListener",i = "getAttribute",j = a[h],k = a.setTimeout,l = a.requestAnimationFrame || k,m = a.requestIdleCallback,n = /^picture$/i,o = ["load", "error", "lazyincluded", "_lazyloaded"],p = {},q = Array.prototype.forEach,r = function r(a, b) {return p[b] || (p[b] = new RegExp("(\\s|^)" + b + "(\\s|$)")), p[b].test(a[i]("class") || "") && p[b];},s = function s(a, b) {r(a, b) || a.setAttribute("class", (a[i]("class") || "").trim() + " " + b);},t = function t(a, b) {var c;(c = r(a, b)) && a.setAttribute("class", (a[i]("class") || "").replace(c, " "));},u = function u(a, b, c) {var d = c ? h : "removeEventListener";c && u(a, b), o.forEach(function (c) {a[d](c, b);});},v = function v(a, d, e, f, g) {var h = b.createEvent("CustomEvent");return e || (e = {}), e.instance = c, h.initCustomEvent(d, !f, !g, e), a.dispatchEvent(h), h;},w = function w(b, c) {var e;!g && (e = a.picturefill || d.pf) ? e({ reevaluate: !0, elements: [b] }) : c && c.src && (b.src = c.src);},x = function x(a, b) {return (getComputedStyle(a, null) || {})[b];},y = function y(a, b, c) {for (c = c || a.offsetWidth; c < d.minSize && b && !a._lazysizesWidth;) {c = b.offsetWidth, b = b.parentNode;}return c;},z = function () {var a,c,d = [],e = [],f = d,g = function g() {var b = f;for (f = d.length ? e : d, a = !0, c = !1; b.length;) {b.shift()();}a = !1;},h = function h(d, e) {a && !e ? d.apply(this, arguments) : (f.push(d), c || (c = !0, (b.hidden ? k : l)(g)));};return h._lsFlush = g, h;}(),A = function A(a, b) {return b ? function () {z(a);} : function () {var b = this,c = arguments;z(function () {a.apply(b, c);});};},B = function B(a) {var b,c = 0,e = 125,g = d.ricTimeout,h = function h() {b = !1, c = f.now(), a();},i = m && d.ricTimeout ? function () {m(h, { timeout: g }), g !== d.ricTimeout && (g = d.ricTimeout);} : A(function () {k(h);}, !0);return function (a) {var d;(a = a === !0) && (g = 33), b || (b = !0, d = e - (f.now() - c), 0 > d && (d = 0), a || 9 > d && m ? i() : k(i, d));};},C = function C(a) {var b,c,d = 99,e = function e() {b = null, a();},g = function g() {var a = f.now() - c;d > a ? k(g, d - a) : (m || e)(e);};return function () {c = f.now(), b || (b = k(g, d));};};!function () {var b,c = { lazyClass: "lazyload", loadedClass: "lazyloaded", loadingClass: "lazyloading", preloadClass: "lazypreload", errorClass: "lazyerror", autosizesClass: "lazyautosizes", srcAttr: "data-src", srcsetAttr: "data-srcset", sizesAttr: "data-sizes", minSize: 40, customMedia: {}, init: !0, expFactor: 1.5, hFac: .8, loadMode: 2, loadHidden: !0, ricTimeout: 300 };d = a.lazySizesConfig || a.lazysizesConfig || {};for (b in c) {b in d || (d[b] = c[b]);}a.lazySizesConfig = d, k(function () {d.init && F();});}();var D = function () {var g,l,m,o,p,y,D,F,G,H,I,J,K,L,M = /^img$/i,N = /^iframe$/i,O = "onscroll" in a && !/glebot/.test(navigator.userAgent),P = 0,Q = 0,R = 0,S = -1,T = function T(a) {R--, a && a.target && u(a.target, T), (!a || 0 > R || !a.target) && (R = 0);},U = function U(a, c) {var d,f = a,g = "hidden" == x(b.body, "visibility") || "hidden" != x(a, "visibility");for (F -= c, I += c, G -= c, H += c; g && (f = f.offsetParent) && f != b.body && f != e;) {g = (x(f, "opacity") || 1) > 0, g && "visible" != x(f, "overflow") && (d = f.getBoundingClientRect(), g = H > d.left && G < d.right && I > d.top - 1 && F < d.bottom + 1);}return g;},V = function V() {var a,f,h,j,k,m,n,p,q,r = c.elements;if ((o = d.loadMode) && 8 > R && (a = r.length)) {f = 0, S++, null == K && ("expand" in d || (d.expand = e.clientHeight > 500 && e.clientWidth > 500 ? 500 : 370), J = d.expand, K = J * d.expFactor), K > Q && 1 > R && S > 2 && o > 2 && !b.hidden ? (Q = K, S = 0) : Q = o > 1 && S > 1 && 6 > R ? J : P;for (; a > f; f++) {if (r[f] && !r[f]._lazyRace) if (O) {if ((p = r[f][i]("data-expand")) && (m = 1 * p) || (m = Q), q !== m && (y = innerWidth + m * L, D = innerHeight + m, n = -1 * m, q = m), h = r[f].getBoundingClientRect(), (I = h.bottom) >= n && (F = h.top) <= D && (H = h.right) >= n * L && (G = h.left) <= y && (I || H || G || F) && (d.loadHidden || "hidden" != x(r[f], "visibility")) && (l && 3 > R && !p && (3 > o || 4 > S) || U(r[f], m))) {if (ba(r[f]), k = !0, R > 9) break;} else !k && l && !j && 4 > R && 4 > S && o > 2 && (g[0] || d.preloadAfterLoad) && (g[0] || !p && (I || H || G || F || "auto" != r[f][i](d.sizesAttr))) && (j = g[0] || r[f]);} else ba(r[f]);}j && !k && ba(j);}},W = B(V),X = function X(a) {s(a.target, d.loadedClass), t(a.target, d.loadingClass), u(a.target, Z), v(a.target, "lazyloaded");},Y = A(X),Z = function Z(a) {Y({ target: a.target });},$ = function $(a, b) {try {a.contentWindow.location.replace(b);} catch (c) {a.src = b;}},_ = function _(a) {var b,c = a[i](d.srcsetAttr);(b = d.customMedia[a[i]("data-media") || a[i]("media")]) && a.setAttribute("media", b), c && a.setAttribute("srcset", c);},aa = A(function (a, b, c, e, f) {var g, h, j, l, o, p;(o = v(a, "lazybeforeunveil", b)).defaultPrevented || (e && (c ? s(a, d.autosizesClass) : a.setAttribute("sizes", e)), h = a[i](d.srcsetAttr), g = a[i](d.srcAttr), f && (j = a.parentNode, l = j && n.test(j.nodeName || "")), p = b.firesLoad || "src" in a && (h || g || l), o = { target: a }, p && (u(a, T, !0), clearTimeout(m), m = k(T, 2500), s(a, d.loadingClass), u(a, Z, !0)), l && q.call(j.getElementsByTagName("source"), _), h ? a.setAttribute("srcset", h) : g && !l && (N.test(a.nodeName) ? $(a, g) : a.src = g), f && (h || l) && w(a, { src: g })), a._lazyRace && delete a._lazyRace, t(a, d.lazyClass), z(function () {(!p || a.complete && a.naturalWidth > 1) && (p ? T(o) : R--, X(o));}, !0);}),ba = function ba(a) {var b,c = M.test(a.nodeName),e = c && (a[i](d.sizesAttr) || a[i]("sizes")),f = "auto" == e;(!f && l || !c || !a[i]("src") && !a.srcset || a.complete || r(a, d.errorClass) || !r(a, d.lazyClass)) && (b = v(a, "lazyunveilread").detail, f && E.updateElem(a, !0, a.offsetWidth), a._lazyRace = !0, R++, aa(a, b, f, e, c));},ca = function ca() {if (!l) {if (f.now() - p < 999) return void k(ca, 999);var a = C(function () {d.loadMode = 3, W();});l = !0, d.loadMode = 3, W(), j("scroll", function () {3 == d.loadMode && (d.loadMode = 2), a();}, !0);}};return { _: function _() {p = f.now(), c.elements = b.getElementsByClassName(d.lazyClass), g = b.getElementsByClassName(d.lazyClass + " " + d.preloadClass), L = d.hFac, j("scroll", W, !0), j("resize", W, !0), a.MutationObserver ? new MutationObserver(W).observe(e, { childList: !0, subtree: !0, attributes: !0 }) : (e[h]("DOMNodeInserted", W, !0), e[h]("DOMAttrModified", W, !0), setInterval(W, 999)), j("hashchange", W, !0), ["focus", "mouseover", "click", "load", "transitionend", "animationend", "webkitAnimationEnd"].forEach(function (a) {b[h](a, W, !0);}), /d$|^c/.test(b.readyState) ? ca() : (j("load", ca), b[h]("DOMContentLoaded", W), k(ca, 2e4)), c.elements.length ? (V(), z._lsFlush()) : W();}, checkElems: W, unveil: ba };}(),E = function () {var a,c = A(function (a, b, c, d) {var e, f, g;if (a._lazysizesWidth = d, d += "px", a.setAttribute("sizes", d), n.test(b.nodeName || "")) for (e = b.getElementsByTagName("source"), f = 0, g = e.length; g > f; f++) {e[f].setAttribute("sizes", d);}c.detail.dataAttr || w(a, c.detail);}),e = function e(a, b, d) {var e,f = a.parentNode;f && (d = y(a, f, d), e = v(a, "lazybeforesizes", { width: d, dataAttr: !!b }), e.defaultPrevented || (d = e.detail.width, d && d !== a._lazysizesWidth && c(a, f, e, d)));},f = function f() {var b,c = a.length;if (c) for (b = 0; c > b; b++) {e(a[b]);}},g = C(f);return { _: function _() {a = b.getElementsByClassName(d.autosizesClass), j("resize", g);}, checkElems: g, updateElem: e };}(),F = function F() {F.i || (F.i = !0, E._(), D._());};return c = { cfg: d, autoSizer: E, loader: D, init: F, uP: w, aC: s, rC: t, hC: r, fire: v, gW: y, rAF: z };}});
  /*! lazysizes - rias */
  !function (a, b) {var c = function c() {b(a.lazySizes), a.removeEventListener("lazyunveilread", c, !0);};b = b.bind(null, a, a.document), "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? b(require("lazysizes")) : a.lazySizes ? c() : a.addEventListener("lazyunveilread", c, !0);}(window, function (a, b, c) {"use strict";function d(b, c) {var d,e,f,g,h = a.getComputedStyle(b);e = b.parentNode, g = { isPicture: !(!e || !m.test(e.nodeName || "")) }, f = function f(a, c) {var d = b.getAttribute("data-" + a);if (!d) {var e = h.getPropertyValue("--ls-" + a);e && (d = e.trim());}if (d) {if ("true" == d) d = !0;else if ("false" == d) d = !1;else if (l.test(d)) d = parseFloat(d);else if ("function" == typeof j[a]) d = j[a](b, d);else if (q.test(d)) try {d = JSON.parse(d);} catch (f) {}g[a] = d;} else a in j && "function" != typeof j[a] ? g[a] = j[a] : c && "function" == typeof j[a] && (g[a] = j[a](b, d));};for (d in j) {f(d);}return c.replace(p, function (a, b) {b in g || f(b, !0);}), g;}function e(a, b) {var c = [],d = function d(a, c) {return k[_typeof(b[c])] ? b[c] : a;};return c.srcset = [], b.absUrl && (s.setAttribute("href", a), a = s.href), a = ((b.prefix || "") + a + (b.postfix || "")).replace(p, d), b.widths.forEach(function (d) {var e = b.widthmap[d] || d,f = { u: a.replace(n, e).replace(o, b.ratio ? Math.round(d * b.ratio) : ""), w: d };c.push(f), c.srcset.push(f.c = f.u + " " + d + "w");}), c;}function f(a, c, d) {var f = 0,g = 0,h = d;if (a) {if ("container" === c.ratio) {for (f = h.scrollWidth, g = h.scrollHeight; !(f && g || h === b);) {h = h.parentNode, f = h.scrollWidth, g = h.scrollHeight;}f && g && (c.ratio = g / f);}a = e(a, c), a.isPicture = c.isPicture, u && "IMG" == d.nodeName.toUpperCase() ? d.removeAttribute(i.srcsetAttr) : d.setAttribute(i.srcsetAttr, a.srcset.join(", ")), Object.defineProperty(d, "_lazyrias", { value: a, writable: !0 });}}function g(a, b) {var e = d(a, b);return j.modifyOptions.call(a, { target: a, details: e, detail: e }), c.fire(a, "lazyriasmodifyoptions", e), e;}function h(a) {return a.getAttribute(a.getAttribute("data-srcattr") || j.srcAttr) || a.getAttribute(i.srcsetAttr) || a.getAttribute(i.srcAttr) || a.getAttribute("data-pfsrcset") || "";}var i,j,k = { string: 1, number: 1 },l = /^\-*\+*\d+\.*\d*$/,m = /^picture$/i,n = /\s*\{\s*width\s*\}\s*/i,o = /\s*\{\s*height\s*\}\s*/i,p = /\s*\{\s*([a-z0-9]+)\s*\}\s*/gi,q = /^\[.*\]|\{.*\}$/,r = /^(?:auto|\d+(px)?)$/,s = b.createElement("a"),t = b.createElement("img"),u = "srcset" in t && !("sizes" in t),v = !!a.HTMLPictureElement && !u;!function () {var b,d = function d() {},e = { prefix: "", postfix: "", srcAttr: "data-src", absUrl: !1, modifyOptions: d, widthmap: {}, ratio: !1 };i = c && c.cfg || a.lazySizesConfig, i || (i = {}, a.lazySizesConfig = i), i.supportsType || (i.supportsType = function (a) {return !a;}), i.rias || (i.rias = {}), j = i.rias, "widths" in j || (j.widths = [], function (a) {for (var b, c = 0; !b || 3e3 > b;) {c += 5, c > 30 && (c += 1), b = 36 * c, a.push(b);}}(j.widths));for (b in e) {b in j || (j[b] = e[b]);}}(), addEventListener("lazybeforesizes", function (a) {if (a.detail.instance == c) {var b, d, e, k, l, m, o, p, q, s, t, u, x;if (b = a.target, a.detail.dataAttr && !a.defaultPrevented && !j.disabled && (q = b.getAttribute(i.sizesAttr) || b.getAttribute("sizes")) && r.test(q)) {if (d = h(b), e = g(b, d), t = n.test(e.prefix) || n.test(e.postfix), e.isPicture && (k = b.parentNode)) for (l = k.getElementsByTagName("source"), m = 0, o = l.length; o > m; m++) {(t || n.test(p = h(l[m]))) && (f(p, e, l[m]), u = !0);}t || n.test(d) ? (f(d, e, b), u = !0) : u && (x = [], x.srcset = [], x.isPicture = !0, Object.defineProperty(b, "_lazyrias", { value: x, writable: !0 })), u && (v ? b.removeAttribute(i.srcAttr) : "auto" != q && (s = { width: parseInt(q, 10) }, w({ target: b, detail: s })));}}}, !0);var w = function () {var d = function d(a, b) {return a.w - b.w;},e = function e(a) {var b,c,d = a.length,e = a[d - 1],f = 0;for (f; d > f; f++) {if (e = a[f], e.d = e.w / a.w, e.d >= a.d) {!e.cached && (b = a[f - 1]) && b.d > a.d - .13 * Math.pow(a.d, 2.2) && (c = Math.pow(b.d - .6, 1.6), b.cached && (b.d += .15 * c), b.d + (e.d - a.d) * c > a.d && (e = b));break;}}return e;},f = function f(a, b) {var d;return !a._lazyrias && c.pWS && (d = c.pWS(a.getAttribute(i.srcsetAttr || ""))).length && (Object.defineProperty(a, "_lazyrias", { value: d, writable: !0 }), b && a.parentNode && (d.isPicture = "PICTURE" == a.parentNode.nodeName.toUpperCase())), a._lazyrias;},g = function g(b) {var d = a.devicePixelRatio || 1,e = c.getX && c.getX(b);return Math.min(e || d, 2.4, d);},h = function h(b, c) {var h, i, j, k, l, m;if (l = b._lazyrias, l.isPicture && a.matchMedia) for (i = 0, h = b.parentNode.getElementsByTagName("source"), j = h.length; j > i; i++) {if (f(h[i]) && !h[i].getAttribute("type") && (!(k = h[i].getAttribute("media")) || (matchMedia(k) || {}).matches)) {l = h[i]._lazyrias;break;}}return (!l.w || l.w < c) && (l.w = c, l.d = g(b), m = e(l.sort(d))), m;},_j = function j(d) {if (d.detail.instance == c) {var e,g = d.target;return !u && (a.respimage || a.picturefill || lazySizesConfig.pf) ? void b.removeEventListener("lazybeforesizes", _j) : void (("_lazyrias" in g || d.detail.dataAttr && f(g, !0)) && (e = h(g, d.detail.width), e && e.u && g._lazyrias.cur != e.u && (g._lazyrias.cur = e.u, e.cached = !0, c.rAF(function () {g.setAttribute(i.srcAttr, e.u), g.setAttribute("src", e.u);}))));}};return v ? _j = function _j() {} : addEventListener("lazybeforesizes", _j), _j;}();});
  /* lazysizes - optimumx */
  !function (a, b, c) {"use strict";if (a.addEventListener) {var d,e = /^picture$/i,f = b.documentElement,g = function () {var a,b = /(([^,\s].[^\s]+)\s+(\d+)(w|h)(\s+(\d+)(w|h))?)/g,c = function c(b, _c, d, e, f, g, h, i) {a.push({ c: _c, u: d, w: 1 * ("w" == i ? h : e) });};return function (d) {return a = [], d.replace(b, c), a;};}(),h = function () {var a = function a(_a, b) {return _a.w - b.w;},b = function b(_b, c) {var d = { srcset: _b.getAttribute(lazySizes.cfg.srcsetAttr) || "" },e = g(d.srcset);return Object.defineProperty(_b, c, { value: d, writable: !0 }), d.cands = e, d.index = 0, d.dirty = !1, e[0] && e[0].w ? (e.sort(a), d.cSrcset = [e[d.index].c]) : (d.cSrcset = d.srcset ? [d.srcset] : [], d.cands = []), d;};return function (a, c) {var d, f, g, h;if (!a[c] && (h = a.parentNode || {}, a[c] = b(a, c), a[c].isImg = !0, e.test(h.nodeName || ""))) for (a[c].picture = !0, d = h.getElementsByTagName("source"), f = 0, g = d.length; g > f; f++) {b(d[f], c).isImg = !1;}return a[c];};}(),i = { _lazyOptimumx: function () {var a = function a(_a2, b, c) {var d, e, f;return _a2 && _a2.d ? (f = c > .7 ? .6 : .4, _a2.d >= c ? !1 : (e = Math.pow(_a2.d - f, 1.6) || .1, .1 > e ? e = .1 : e > 3 && (e = 3), d = _a2.d + (b - c) * e, c > d)) : !0;};return function (b, c, d) {var e, f;for (e = 0; e < b.cands.length; e++) {if (f = b.cands[e], f.d = (f.w || 1) / c, !(b.index >= e)) {if (!(f.d <= d || a(b.cands[e - 1], f.d, d))) break;b.cSrcset.push(f.c), b.index = e;}}};}() },j = function () {var a = function a(_a3, b, c, d, e) {var f,g = _a3[e];g && (f = g.index, i[e](g, b, c), g.dirty && f == g.index || (g.cSrcset.join(", "), _a3.setAttribute(d, g.cSrcset.join(", ")), g.dirty = !0));};return function (b, c, d, e, f) {var g,h,i,j,k = b[f];if (k.width = c, k.picture && (h = b.parentNode)) for (g = h.getElementsByTagName("source"), j = 0, i = g.length; i > j; j++) {a(g[j], c, d, e, f);}a(b, c, d, e, f);};}(),k = function k(a) {var b = a.getAttribute("data-optimumx") || a.getAttribute("data-maxdpr");return !b && d.constrainPixelDensity && (b = "auto"), b && (b = "auto" == b ? d.getOptimumX(a) : parseFloat(b, 10)), b;},l = function l() {a.lazySizes && !a.lazySizes.getOptimumX && (lazySizes.getX = k, lazySizes.pWS = g, f.removeEventListener("lazybeforeunveil", l));};f.addEventListener("lazybeforeunveil", l), setTimeout(l), d = a.lazySizes && lazySizes.cfg || a.lazySizesConfig, d || (d = {}, a.lazySizesConfig = d), "function" != typeof d.getOptimumX && (d.getOptimumX = function () {var b = a.devicePixelRatio || 1;return b > 2.6 ? b *= .6 : b > 1.9 ? b *= .8 : b -= .01, Math.min(Math.round(100 * b) / 100, 2);}), a.devicePixelRatio && addEventListener("lazybeforesizes", function (a) {var b,c,e,f,g = a.target,i = a.detail,l = i.dataAttr;a.defaultPrevented || !(b = k(g)) || b >= devicePixelRatio || (!l || !g._lazyOptimumx || i.reloaded || d.unloadedClass && lazySizes.hC(g, d.unloadedClass) || (g._lazyOptimumx = null), c = h(g, "_lazyOptimumx"), e = i.width, e && (c.width || 0) < e && (f = l ? lazySizes.cfg.srcsetAttr : "srcset", lazySizes.rAF(function () {j(g, e, b, f, "_lazyOptimumx");})));});}}(window, document);
  /* lazysizes - progressive */
  !function (a, b) {var c = function c() {b(a.lazySizes), a.removeEventListener("lazyunveilread", c, !0);};b = b.bind(null, a, a.document), "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? b(require("lazysizes")) : a.lazySizes ? c() : a.addEventListener("lazyunveilread", c, !0);}(window, function (a, b, c) {"use strict";var d, _e2;"srcset" in b.createElement("img") && (d = /^img$/i, _e2 = function e(a) {a.target.style.backgroundSize = "", a.target.style.backgroundImage = "", a.target.removeEventListener(a.type, _e2);}, b.addEventListener("lazybeforeunveil", function (a) {if (a.detail.instance == c) {var b = a.target;if (d.test(b.nodeName)) {var f = b.getAttribute("src");f && (b.style.backgroundSize = "100% 100%", b.style.backgroundImage = "url(" + f + ")", b.removeAttribute("src"), b.addEventListener("load", _e2));}}}, !1));});
  /* lazysizes - parent-fit */
  !function (a, b) {var c = function c() {b(a.lazySizes), a.removeEventListener("lazyunveilread", c, !0);};b = b.bind(null, a, a.document), "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? b(require("lazysizes")) : a.lazySizes ? c() : a.addEventListener("lazyunveilread", c, !0);}(window, function (a, b, c) {"use strict";if (a.addEventListener) {var d = /\s+(\d+)(w|h)\s+(\d+)(w|h)/,e = /parent-fit["']*\s*:\s*["']*(contain|cover|width)/,f = /parent-container["']*\s*:\s*["']*(.+?)(?=(\s|$|,|'|"|;))/,g = /^picture$/i,h = function h(a) {return getComputedStyle(a, null) || {};},i = { getParent: function getParent(b, c) {var d = b,e = b.parentNode;return c && "prev" != c || !e || !g.test(e.nodeName || "") || (e = e.parentNode), "self" != c && (d = "prev" == c ? b.previousElementSibling : c && (e.closest || a.jQuery) ? (e.closest ? e.closest(c) : jQuery(e).closest(c)[0]) || e : e), d;}, getFit: function getFit(a) {var b,c,d = h(a),g = d.content || d.fontFamily,j = { fit: a._lazysizesParentFit || a.getAttribute("data-parent-fit") };return !j.fit && g && (b = g.match(e)) && (j.fit = b[1]), j.fit ? (c = a._lazysizesParentContainer || a.getAttribute("data-parent-container"), !c && g && (b = g.match(f)) && (c = b[1]), j.parent = i.getParent(a, c)) : j.fit = d.objectFit, j;}, getImageRatio: function getImageRatio(b) {var c,e,f,h,i = b.parentNode,j = i && g.test(i.nodeName || "") ? i.querySelectorAll("source, img") : [b];for (c = 0; c < j.length; c++) {if (b = j[c], e = b.getAttribute(lazySizesConfig.srcsetAttr) || b.getAttribute("srcset") || b.getAttribute("data-pfsrcset") || b.getAttribute("data-risrcset") || "", f = b._lsMedia || b.getAttribute("media"), f = lazySizesConfig.customMedia[b.getAttribute("data-media") || f] || f, e && (!f || (a.matchMedia && matchMedia(f) || {}).matches)) {h = parseFloat(b.getAttribute("data-aspectratio")), !h && e.match(d) && (h = "w" == RegExp.$2 ? RegExp.$1 / RegExp.$3 : RegExp.$3 / RegExp.$1);break;}}return h;}, calculateSize: function calculateSize(a, b) {var c,d,e,f,g = this.getFit(a),h = g.fit,i = g.parent;return "width" == h || ("contain" == h || "cover" == h) && (e = this.getImageRatio(a)) ? (i ? b = i.clientWidth : i = a, f = b, "width" == h ? f = b : (d = i.clientHeight, d > 40 && (c = b / d) && ("cover" == h && e > c || "contain" == h && c > e) && (f = b * (e / c))), f) : b;} };c.parentFit = i, b.addEventListener("lazybeforesizes", function (a) {if (!a.defaultPrevented && a.detail.instance == c) {var b = a.target;a.detail.width = i.calculateSize(b, a.detail.width);}});}});
  /*! lazysizes - respimg */
  !function (a, b) {var c = function c() {b(a.lazySizes), a.removeEventListener("lazyunveilread", c, !0);};b = b.bind(null, a, a.document), "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? b(require("lazysizes"), require("../fix-ios-sizes/fix-ios-sizes")) : a.lazySizes ? c() : a.addEventListener("lazyunveilread", c, !0);}(window, function (a, b, c) {"use strict";var d,e = c && c.cfg || a.lazySizesConfig,f = b.createElement("img"),g = "sizes" in f && "srcset" in f,h = /\s+\d+h/g,i = function () {var a = /\s+(\d+)(w|h)\s+(\d+)(w|h)/,c = Array.prototype.forEach;return function (d) {var e = b.createElement("img"),f = function f(b) {var c,d,e = b.getAttribute(lazySizesConfig.srcsetAttr);e && ((d = e.match(a)) && (c = "w" == d[2] ? d[1] / d[3] : d[3] / d[1], c && b.setAttribute("data-aspectratio", c)), b.setAttribute(lazySizesConfig.srcsetAttr, e.replace(h, "")));},g = function g(a) {var b = a.target.parentNode;b && "PICTURE" == b.nodeName && c.call(b.getElementsByTagName("source"), f), f(a.target);},i = function i() {e.currentSrc && b.removeEventListener("lazybeforeunveil", g);};d[1] && (b.addEventListener("lazybeforeunveil", g), e.onload = i, e.onerror = i, e.srcset = "data:,a 1w 1h", e.complete && i());};}();if (e || (e = {}, a.lazySizesConfig = e), e.supportsType || (e.supportsType = function (a) {return !a;}), !a.picturefill && !e.pf) {if (a.HTMLPictureElement && g) return b.msElementsFromPoint && i(navigator.userAgent.match(/Edge\/(\d+)/)), void (e.pf = function () {});e.pf = function (b) {var c, e;if (!a.picturefill) for (c = 0, e = b.elements.length; e > c; c++) {d(b.elements[c]);}}, d = function () {var f = function f(a, b) {return a.w - b.w;},i = /^\s*\d+\.*\d*px\s*$/,j = function j(a) {var b,c,d = a.length,e = a[d - 1],f = 0;for (f; d > f; f++) {if (e = a[f], e.d = e.w / a.w, e.d >= a.d) {!e.cached && (b = a[f - 1]) && b.d > a.d - .13 * Math.pow(a.d, 2.2) && (c = Math.pow(b.d - .6, 1.6), b.cached && (b.d += .15 * c), b.d + (e.d - a.d) * c > a.d && (e = b));break;}}return e;},k = function () {var a,b = /(([^,\s].[^\s]+)\s+(\d+)w)/g,c = /\s/,d = function d(b, c, _d, e) {a.push({ c: c, u: _d, w: 1 * e });};return function (e) {return a = [], e = e.trim(), e.replace(h, "").replace(b, d), a.length || !e || c.test(e) || a.push({ c: e, u: e, w: 99 }), a;};}(),l = function l() {l.init || (l.init = !0, addEventListener("resize", function () {var a,c = b.getElementsByClassName("lazymatchmedia"),e = function e() {var a, b;for (a = 0, b = c.length; b > a; a++) {d(c[a]);}};return function () {clearTimeout(a), a = setTimeout(e, 66);};}()));},m = function m(b, d) {var f,g = b.getAttribute("srcset") || b.getAttribute(e.srcsetAttr);!g && d && (g = b._lazypolyfill ? b._lazypolyfill._set : b.getAttribute(e.srcAttr) || b.getAttribute("src")), b._lazypolyfill && b._lazypolyfill._set == g || (f = k(g || ""), d && b.parentNode && (f.isPicture = "PICTURE" == b.parentNode.nodeName.toUpperCase(), f.isPicture && a.matchMedia && (c.aC(b, "lazymatchmedia"), l())), f._set = g, Object.defineProperty(b, "_lazypolyfill", { value: f, writable: !0 }));},n = function n(b) {var d = a.devicePixelRatio || 1,e = c.getX && c.getX(b);return Math.min(e || d, 2.5, d);},_o2 = function o(b) {return a.matchMedia ? (_o2 = function o(a) {return !a || (matchMedia(a) || {}).matches;})(b) : !b;},p = function p(a) {var b, d, g, h, k, l, p;if (h = a, m(h, !0), k = h._lazypolyfill, k.isPicture) for (d = 0, b = a.parentNode.getElementsByTagName("source"), g = b.length; g > d; d++) {if (e.supportsType(b[d].getAttribute("type"), a) && _o2(b[d].getAttribute("media"))) {h = b[d], m(h), k = h._lazypolyfill;break;}}return k.length > 1 ? (p = h.getAttribute("sizes") || "", p = i.test(p) && parseInt(p, 10) || c.gW(a, a.parentNode), k.d = n(a), !k.src || !k.w || k.w < p ? (k.w = p, l = j(k.sort(f)), k.src = l) : l = k.src) : l = k[0], l;},q = function q(a) {if (!g || !a.parentNode || "PICTURE" == a.parentNode.nodeName.toUpperCase()) {var b = p(a);b && b.u && a._lazypolyfill.cur != b.u && (a._lazypolyfill.cur = b.u, b.cached = !0, a.setAttribute(e.srcAttr, b.u), a.setAttribute("src", b.u));}};return q.parse = k, q;}(), e.loadedClass && e.loadingClass && !function () {var a = [];['img[sizes$="px"][srcset].', "picture > img:not([srcset])."].forEach(function (b) {a.push(b + e.loadedClass), a.push(b + e.loadingClass);}), e.pf({ elements: b.querySelectorAll(a.join(", ")) });}();}});
  /*! lazysizes - bgset */
  !function (a, b) {var c = function c() {b(a.lazySizes), a.removeEventListener("lazyunveilread", c, !0);};b = b.bind(null, a, a.document), "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? b(require("lazysizes")) : a.lazySizes ? c() : a.addEventListener("lazyunveilread", c, !0);}(window, function (a, b, c) {"use strict";if (a.addEventListener) {var d = /\s+/g,e = /\s*\|\s+|\s+\|\s*/g,f = /^(.+?)(?:\s+\[\s*(.+?)\s*\])?$/,g = /\(|\)|'/,h = { contain: 1, cover: 1 },i = function i(a) {var b = c.gW(a, a.parentNode);return (!a._lazysizesWidth || b > a._lazysizesWidth) && (a._lazysizesWidth = b), a._lazysizesWidth;},j = function j(a) {var b;return b = (getComputedStyle(a) || { getPropertyValue: function getPropertyValue() {} }).getPropertyValue("background-size"), !h[b] && h[a.style.backgroundSize] && (b = a.style.backgroundSize), b;},k = function k(a, c, g) {var h = b.createElement("picture"),i = c.getAttribute(lazySizesConfig.sizesAttr),j = c.getAttribute("data-ratio"),k = c.getAttribute("data-optimumx");c._lazybgset && c._lazybgset.parentNode == c && c.removeChild(c._lazybgset), Object.defineProperty(g, "_lazybgset", { value: c, writable: !0 }), Object.defineProperty(c, "_lazybgset", { value: h, writable: !0 }), a = a.replace(d, " ").split(e), h.style.display = "none", g.className = lazySizesConfig.lazyClass, 1 != a.length || i || (i = "auto"), a.forEach(function (a) {var c = b.createElement("source");i && "auto" != i && c.setAttribute("sizes", i), a.match(f) && (c.setAttribute(lazySizesConfig.srcsetAttr, RegExp.$1), RegExp.$2 && c.setAttribute("media", lazySizesConfig.customMedia[RegExp.$2] || RegExp.$2)), h.appendChild(c);}), i && (g.setAttribute(lazySizesConfig.sizesAttr, i), c.removeAttribute(lazySizesConfig.sizesAttr), c.removeAttribute("sizes")), k && g.setAttribute("data-optimumx", k), j && g.setAttribute("data-ratio", j), h.appendChild(g), c.appendChild(h);},l = function l(a) {if (a.target._lazybgset) {var b = a.target,d = b._lazybgset,e = b.currentSrc || b.src;e && (d.style.backgroundImage = "url(" + (g.test(e) ? JSON.stringify(e) : e) + ")"), b._lazybgsetLoading && (c.fire(d, "_lazyloaded", {}, !1, !0), delete b._lazybgsetLoading);}};addEventListener("lazybeforeunveil", function (a) {var d, e, f;!a.defaultPrevented && (d = a.target.getAttribute("data-bgset")) && (f = a.target, e = b.createElement("img"), e.alt = "", e._lazybgsetLoading = !0, a.detail.firesLoad = !0, k(d, f, e), setTimeout(function () {c.loader.unveil(e), c.rAF(function () {c.fire(e, "_lazyloaded", {}, !0, !0), e.complete && l({ target: e });});}));}), b.addEventListener("load", l, !0), a.addEventListener("lazybeforesizes", function (a) {if (a.detail.instance == c && a.target._lazybgset && a.detail.dataAttr) {var b = a.target._lazybgset,d = j(b);h[d] && (a.target._lazysizesParentFit = d, c.rAF(function () {a.target.setAttribute("data-parent-fit", d), a.target._lazysizesParentFit && delete a.target._lazysizesParentFit;}));}}, !0), b.documentElement.addEventListener("lazybeforesizes", function (a) {!a.defaultPrevented && a.target._lazybgset && a.detail.instance == c && (a.detail.width = i(a.target._lazybgset));});}});
  /* lazysizes placeholder removal */
  document.addEventListener('lazyloaded', function (e) {
    e.target.parentElement.className = e.target.parentElement.className.replace('lazyload--placeholder', '');
  });