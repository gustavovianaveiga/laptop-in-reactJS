const rc = function() {
    const n = document.createElement("link").relList;
    if (n && n.supports && n.supports("modulepreload")) return;
    for (const l of document.querySelectorAll('link[rel="modulepreload"]')) r(l);
    new MutationObserver(l => {
        for (const o of l)
            if (o.type === "childList")
                for (const u of o.addedNodes) u.tagName === "LINK" && u.rel === "modulepreload" && r(u)
    }).observe(document, { childList: !0, subtree: !0 });

    function t(l) { const o = {}; return l.integrity && (o.integrity = l.integrity), l.referrerpolicy && (o.referrerPolicy = l.referrerpolicy), l.crossorigin === "use-credentials" ? o.credentials = "include" : l.crossorigin === "anonymous" ? o.credentials = "omit" : o.credentials = "same-origin", o }

    function r(l) {
        if (l.ep) return;
        l.ep = !0;
        const o = t(l);
        fetch(l.href, o)
    }
};
rc();
var el = { exports: {} },
    L = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Yt = Symbol.for("react.element"),
    lc = Symbol.for("react.portal"),
    oc = Symbol.for("react.fragment"),
    uc = Symbol.for("react.strict_mode"),
    ic = Symbol.for("react.profiler"),
    sc = Symbol.for("react.provider"),
    ac = Symbol.for("react.context"),
    cc = Symbol.for("react.forward_ref"),
    fc = Symbol.for("react.suspense"),
    dc = Symbol.for("react.memo"),
    pc = Symbol.for("react.lazy"),
    Du = Symbol.iterator;

function mc(e) { return e === null || typeof e != "object" ? null : (e = Du && e[Du] || e["@@iterator"], typeof e == "function" ? e : null) }
var Ki = { isMounted: function() { return !1 }, enqueueForceUpdate: function() {}, enqueueReplaceState: function() {}, enqueueSetState: function() {} },
    Yi = Object.assign,
    Xi = {};

function rt(e, n, t) { this.props = e, this.context = n, this.refs = Xi, this.updater = t || Ki }
rt.prototype.isReactComponent = {};
rt.prototype.setState = function(e, n) {
    if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, e, n, "setState")
};
rt.prototype.forceUpdate = function(e) { this.updater.enqueueForceUpdate(this, e, "forceUpdate") };

function Gi() {}
Gi.prototype = rt.prototype;

function $o(e, n, t) { this.props = e, this.context = n, this.refs = Xi, this.updater = t || Ki }
var Vo = $o.prototype = new Gi;
Vo.constructor = $o;
Yi(Vo, rt.prototype);
Vo.isPureReactComponent = !0;
var Iu = Array.isArray,
    Zi = Object.prototype.hasOwnProperty,
    Ao = { current: null },
    Ji = { key: !0, ref: !0, __self: !0, __source: !0 };

function qi(e, n, t) {
    var r, l = {},
        o = null,
        u = null;
    if (n != null)
        for (r in n.ref !== void 0 && (u = n.ref), n.key !== void 0 && (o = "" + n.key), n) Zi.call(n, r) && !Ji.hasOwnProperty(r) && (l[r] = n[r]);
    var i = arguments.length - 2;
    if (i === 1) l.children = t;
    else if (1 < i) {
        for (var s = Array(i), c = 0; c < i; c++) s[c] = arguments[c + 2];
        l.children = s
    }
    if (e && e.defaultProps)
        for (r in i = e.defaultProps, i) l[r] === void 0 && (l[r] = i[r]);
    return { $$typeof: Yt, type: e, key: o, ref: u, props: l, _owner: Ao.current }
}

function hc(e, n) { return { $$typeof: Yt, type: e.type, key: n, ref: e.ref, props: e.props, _owner: e._owner } }

function Bo(e) { return typeof e == "object" && e !== null && e.$$typeof === Yt }

function vc(e) { var n = { "=": "=0", ":": "=2" }; return "$" + e.replace(/[=:]/g, function(t) { return n[t] }) }
var Fu = /\/+/g;

function kl(e, n) { return typeof e == "object" && e !== null && e.key != null ? vc("" + e.key) : n.toString(36) }

function gr(e, n, t, r, l) {
    var o = typeof e;
    (o === "undefined" || o === "boolean") && (e = null);
    var u = !1;
    if (e === null) u = !0;
    else switch (o) {
        case "string":
        case "number":
            u = !0;
            break;
        case "object":
            switch (e.$$typeof) {
                case Yt:
                case lc:
                    u = !0
            }
    }
    if (u) return u = e, l = l(u), e = r === "" ? "." + kl(u, 0) : r, Iu(l) ? (t = "", e != null && (t = e.replace(Fu, "$&/") + "/"), gr(l, n, t, "", function(c) { return c })) : l != null && (Bo(l) && (l = hc(l, t + (!l.key || u && u.key === l.key ? "" : ("" + l.key).replace(Fu, "$&/") + "/") + e)), n.push(l)), 1;
    if (u = 0, r = r === "" ? "." : r + ":", Iu(e))
        for (var i = 0; i < e.length; i++) {
            o = e[i];
            var s = r + kl(o, i);
            u += gr(o, n, t, s, l)
        } else if (s = mc(e), typeof s == "function")
            for (e = s.call(e), i = 0; !(o = e.next()).done;) o = o.value, s = r + kl(o, i++), u += gr(o, n, t, s, l);
        else if (o === "object") throw n = String(e), Error("Objects are not valid as a React child (found: " + (n === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : n) + "). If you meant to render a collection of children, use an array instead.");
    return u
}

function er(e, n, t) {
    if (e == null) return e;
    var r = [],
        l = 0;
    return gr(e, r, "", "", function(o) { return n.call(t, o, l++) }), r
}

function yc(e) {
    if (e._status === -1) {
        var n = e._result;
        n = n(), n.then(function(t) {
            (e._status === 0 || e._status === -1) && (e._status = 1, e._result = t)
        }, function(t) {
            (e._status === 0 || e._status === -1) && (e._status = 2, e._result = t)
        }), e._status === -1 && (e._status = 0, e._result = n)
    }
    if (e._status === 1) return e._result.default;
    throw e._result
}
var ie = { current: null },
    wr = { transition: null },
    gc = { ReactCurrentDispatcher: ie, ReactCurrentBatchConfig: wr, ReactCurrentOwner: Ao };
L.Children = { map: er, forEach: function(e, n, t) { er(e, function() { n.apply(this, arguments) }, t) }, count: function(e) { var n = 0; return er(e, function() { n++ }), n }, toArray: function(e) { return er(e, function(n) { return n }) || [] }, only: function(e) { if (!Bo(e)) throw Error("React.Children.only expected to receive a single React element child."); return e } };
L.Component = rt;
L.Fragment = oc;
L.Profiler = ic;
L.PureComponent = $o;
L.StrictMode = uc;
L.Suspense = fc;
L.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = gc;
L.cloneElement = function(e, n, t) {
    if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
    var r = Yi({}, e.props),
        l = e.key,
        o = e.ref,
        u = e._owner;
    if (n != null) { if (n.ref !== void 0 && (o = n.ref, u = Ao.current), n.key !== void 0 && (l = "" + n.key), e.type && e.type.defaultProps) var i = e.type.defaultProps; for (s in n) Zi.call(n, s) && !Ji.hasOwnProperty(s) && (r[s] = n[s] === void 0 && i !== void 0 ? i[s] : n[s]) }
    var s = arguments.length - 2;
    if (s === 1) r.children = t;
    else if (1 < s) {
        i = Array(s);
        for (var c = 0; c < s; c++) i[c] = arguments[c + 2];
        r.children = i
    }
    return { $$typeof: Yt, type: e.type, key: l, ref: o, props: r, _owner: u }
};
L.createContext = function(e) { return e = { $$typeof: ac, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: sc, _context: e }, e.Consumer = e };
L.createElement = qi;
L.createFactory = function(e) { var n = qi.bind(null, e); return n.type = e, n };
L.createRef = function() { return { current: null } };
L.forwardRef = function(e) { return { $$typeof: cc, render: e } };
L.isValidElement = Bo;
L.lazy = function(e) { return { $$typeof: pc, _payload: { _status: -1, _result: e }, _init: yc } };
L.memo = function(e, n) { return { $$typeof: dc, type: e, compare: n === void 0 ? null : n } };
L.startTransition = function(e) {
    var n = wr.transition;
    wr.transition = {};
    try { e() } finally { wr.transition = n }
};
L.unstable_act = function() { throw Error("act(...) is not supported in production builds of React.") };
L.useCallback = function(e, n) { return ie.current.useCallback(e, n) };
L.useContext = function(e) { return ie.current.useContext(e) };
L.useDebugValue = function() {};
L.useDeferredValue = function(e) { return ie.current.useDeferredValue(e) };
L.useEffect = function(e, n) { return ie.current.useEffect(e, n) };
L.useId = function() { return ie.current.useId() };
L.useImperativeHandle = function(e, n, t) { return ie.current.useImperativeHandle(e, n, t) };
L.useInsertionEffect = function(e, n) { return ie.current.useInsertionEffect(e, n) };
L.useLayoutEffect = function(e, n) { return ie.current.useLayoutEffect(e, n) };
L.useMemo = function(e, n) { return ie.current.useMemo(e, n) };
L.useReducer = function(e, n, t) { return ie.current.useReducer(e, n, t) };
L.useRef = function(e) { return ie.current.useRef(e) };
L.useState = function(e) { return ie.current.useState(e) };
L.useSyncExternalStore = function(e, n, t) { return ie.current.useSyncExternalStore(e, n, t) };
L.useTransition = function() { return ie.current.useTransition() };
L.version = "18.1.0";
el.exports = L;
var wc = el.exports,
    Kl = {},
    bi = { exports: {} },
    ge = {},
    es = { exports: {} },
    ns = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(e) {
    function n(E, N) {
        var z = E.length;
        E.push(N);
        e: for (; 0 < z;) {
            var W = z - 1 >>> 1,
                Z = E[W];
            if (0 < l(Z, N)) E[W] = N, E[z] = Z, z = W;
            else break e
        }
    }

    function t(E) { return E.length === 0 ? null : E[0] }

    function r(E) {
        if (E.length === 0) return null;
        var N = E[0],
            z = E.pop();
        if (z !== N) {
            E[0] = z;
            e: for (var W = 0, Z = E.length, qt = Z >>> 1; W < qt;) {
                var yn = 2 * (W + 1) - 1,
                    wl = E[yn],
                    gn = yn + 1,
                    bt = E[gn];
                if (0 > l(wl, z)) gn < Z && 0 > l(bt, wl) ? (E[W] = bt, E[gn] = z, W = gn) : (E[W] = wl, E[yn] = z, W = yn);
                else if (gn < Z && 0 > l(bt, z)) E[W] = bt, E[gn] = z, W = gn;
                else break e
            }
        }
        return N
    }

    function l(E, N) { var z = E.sortIndex - N.sortIndex; return z !== 0 ? z : E.id - N.id }
    if (typeof performance == "object" && typeof performance.now == "function") {
        var o = performance;
        e.unstable_now = function() { return o.now() }
    } else {
        var u = Date,
            i = u.now();
        e.unstable_now = function() { return u.now() - i }
    }
    var s = [],
        c = [],
        m = 1,
        y = null,
        p = 3,
        w = !1,
        g = !1,
        P = !1,
        F = typeof setTimeout == "function" ? setTimeout : null,
        f = typeof clearTimeout == "function" ? clearTimeout : null,
        a = typeof setImmediate != "undefined" ? setImmediate : null;
    typeof navigator != "undefined" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);

    function d(E) {
        for (var N = t(c); N !== null;) {
            if (N.callback === null) r(c);
            else if (N.startTime <= E) r(c), N.sortIndex = N.expirationTime, n(s, N);
            else break;
            N = t(c)
        }
    }

    function h(E) {
        if (P = !1, d(E), !g)
            if (t(s) !== null) g = !0, yl(k);
            else {
                var N = t(c);
                N !== null && gl(h, N.startTime - E)
            }
    }

    function k(E, N) {
        g = !1, P && (P = !1, f(x), x = -1), w = !0;
        var z = p;
        try {
            for (d(N), y = t(s); y !== null && (!(y.expirationTime > N) || E && !Ne());) {
                var W = y.callback;
                if (typeof W == "function") {
                    y.callback = null, p = y.priorityLevel;
                    var Z = W(y.expirationTime <= N);
                    N = e.unstable_now(), typeof Z == "function" ? y.callback = Z : y === t(s) && r(s), d(N)
                } else r(s);
                y = t(s)
            }
            if (y !== null) var qt = !0;
            else {
                var yn = t(c);
                yn !== null && gl(h, yn.startTime - N), qt = !1
            }
            return qt
        } finally { y = null, p = z, w = !1 }
    }
    var C = !1,
        _ = null,
        x = -1,
        H = 5,
        T = -1;

    function Ne() { return !(e.unstable_now() - T < H) }

    function ut() {
        if (_ !== null) {
            var E = e.unstable_now();
            T = E;
            var N = !0;
            try { N = _(!0, E) } finally { N ? it() : (C = !1, _ = null) }
        } else C = !1
    }
    var it;
    if (typeof a == "function") it = function() { a(ut) };
    else if (typeof MessageChannel != "undefined") {
        var Ou = new MessageChannel,
            tc = Ou.port2;
        Ou.port1.onmessage = ut, it = function() { tc.postMessage(null) }
    } else it = function() { F(ut, 0) };

    function yl(E) { _ = E, C || (C = !0, it()) }

    function gl(E, N) { x = F(function() { E(e.unstable_now()) }, N) }
    e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(E) { E.callback = null }, e.unstable_continueExecution = function() { g || w || (g = !0, yl(k)) }, e.unstable_forceFrameRate = function(E) { 0 > E || 125 < E ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : H = 0 < E ? Math.floor(1e3 / E) : 5 }, e.unstable_getCurrentPriorityLevel = function() { return p }, e.unstable_getFirstCallbackNode = function() { return t(s) }, e.unstable_next = function(E) {
        switch (p) {
            case 1:
            case 2:
            case 3:
                var N = 3;
                break;
            default:
                N = p
        }
        var z = p;
        p = N;
        try { return E() } finally { p = z }
    }, e.unstable_pauseExecution = function() {}, e.unstable_requestPaint = function() {}, e.unstable_runWithPriority = function(E, N) {
        switch (E) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
                break;
            default:
                E = 3
        }
        var z = p;
        p = E;
        try { return N() } finally { p = z }
    }, e.unstable_scheduleCallback = function(E, N, z) {
        var W = e.unstable_now();
        switch (typeof z == "object" && z !== null ? (z = z.delay, z = typeof z == "number" && 0 < z ? W + z : W) : z = W, E) {
            case 1:
                var Z = -1;
                break;
            case 2:
                Z = 250;
                break;
            case 5:
                Z = 1073741823;
                break;
            case 4:
                Z = 1e4;
                break;
            default:
                Z = 5e3
        }
        return Z = z + Z, E = { id: m++, callback: N, priorityLevel: E, startTime: z, expirationTime: Z, sortIndex: -1 }, z > W ? (E.sortIndex = z, n(c, E), t(s) === null && E === t(c) && (P ? (f(x), x = -1) : P = !0, gl(h, z - W))) : (E.sortIndex = Z, n(s, E), g || w || (g = !0, yl(k))), E
    }, e.unstable_shouldYield = Ne, e.unstable_wrapCallback = function(E) {
        var N = p;
        return function() {
            var z = p;
            p = N;
            try { return E.apply(this, arguments) } finally { p = z }
        }
    }
})(ns);
es.exports = ns;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ts = el.exports,
    ye = es.exports;

function v(e) { for (var n = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, t = 1; t < arguments.length; t++) n += "&args[]=" + encodeURIComponent(arguments[t]); return "Minified React error #" + e + "; visit " + n + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings." }
var rs = new Set,
    Tt = {};

function Tn(e, n) { Jn(e, n), Jn(e + "Capture", n) }

function Jn(e, n) { for (Tt[e] = n, e = 0; e < n.length; e++) rs.add(n[e]) }
var Ye = !(typeof window == "undefined" || typeof window.document == "undefined" || typeof window.document.createElement == "undefined"),
    Yl = Object.prototype.hasOwnProperty,
    kc = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    ju = {},
    Uu = {};

function Sc(e) { return Yl.call(Uu, e) ? !0 : Yl.call(ju, e) ? !1 : kc.test(e) ? Uu[e] = !0 : (ju[e] = !0, !1) }

function Ec(e, n, t, r) {
    if (t !== null && t.type === 0) return !1;
    switch (typeof n) {
        case "function":
        case "symbol":
            return !0;
        case "boolean":
            return r ? !1 : t !== null ? !t.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
        default:
            return !1
    }
}

function Cc(e, n, t, r) {
    if (n === null || typeof n == "undefined" || Ec(e, n, t, r)) return !0;
    if (r) return !1;
    if (t !== null) switch (t.type) {
        case 3:
            return !n;
        case 4:
            return n === !1;
        case 5:
            return isNaN(n);
        case 6:
            return isNaN(n) || 1 > n
    }
    return !1
}

function se(e, n, t, r, l, o, u) { this.acceptsBooleans = n === 2 || n === 3 || n === 4, this.attributeName = r, this.attributeNamespace = l, this.mustUseProperty = t, this.propertyName = e, this.type = n, this.sanitizeURL = o, this.removeEmptyString = u }
var ee = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) { ee[e] = new se(e, 0, !1, e, null, !1, !1) });
[
    ["acceptCharset", "accept-charset"],
    ["className", "class"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"]
].forEach(function(e) {
    var n = e[0];
    ee[n] = new se(n, 1, !1, e[1], null, !1, !1)
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) { ee[e] = new se(e, 2, !1, e.toLowerCase(), null, !1, !1) });
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) { ee[e] = new se(e, 2, !1, e, null, !1, !1) });
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) { ee[e] = new se(e, 3, !1, e.toLowerCase(), null, !1, !1) });
["checked", "multiple", "muted", "selected"].forEach(function(e) { ee[e] = new se(e, 3, !0, e, null, !1, !1) });
["capture", "download"].forEach(function(e) { ee[e] = new se(e, 4, !1, e, null, !1, !1) });
["cols", "rows", "size", "span"].forEach(function(e) { ee[e] = new se(e, 6, !1, e, null, !1, !1) });
["rowSpan", "start"].forEach(function(e) { ee[e] = new se(e, 5, !1, e.toLowerCase(), null, !1, !1) });
var Ho = /[\-:]([a-z])/g;

function Wo(e) { return e[1].toUpperCase() }
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var n = e.replace(Ho, Wo);
    ee[n] = new se(n, 1, !1, e, null, !1, !1)
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var n = e.replace(Ho, Wo);
    ee[n] = new se(n, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1)
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var n = e.replace(Ho, Wo);
    ee[n] = new se(n, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1)
});
["tabIndex", "crossOrigin"].forEach(function(e) { ee[e] = new se(e, 1, !1, e.toLowerCase(), null, !1, !1) });
ee.xlinkHref = new se("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) { ee[e] = new se(e, 1, !1, e.toLowerCase(), null, !0, !0) });

function Qo(e, n, t, r) {
    var l = ee.hasOwnProperty(n) ? ee[n] : null;
    (l !== null ? l.type !== 0 : r || !(2 < n.length) || n[0] !== "o" && n[0] !== "O" || n[1] !== "n" && n[1] !== "N") && (Cc(n, t, l, r) && (t = null), r || l === null ? Sc(n) && (t === null ? e.removeAttribute(n) : e.setAttribute(n, "" + t)) : l.mustUseProperty ? e[l.propertyName] = t === null ? l.type === 3 ? !1 : "" : t : (n = l.attributeName, r = l.attributeNamespace, t === null ? e.removeAttribute(n) : (l = l.type, t = l === 3 || l === 4 && t === !0 ? "" : "" + t, r ? e.setAttributeNS(r, n, t) : e.setAttribute(n, t))))
}
var Ze = ts.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    nr = Symbol.for("react.element"),
    On = Symbol.for("react.portal"),
    Dn = Symbol.for("react.fragment"),
    Ko = Symbol.for("react.strict_mode"),
    Xl = Symbol.for("react.profiler"),
    ls = Symbol.for("react.provider"),
    os = Symbol.for("react.context"),
    Yo = Symbol.for("react.forward_ref"),
    Gl = Symbol.for("react.suspense"),
    Zl = Symbol.for("react.suspense_list"),
    Xo = Symbol.for("react.memo"),
    qe = Symbol.for("react.lazy"),
    us = Symbol.for("react.offscreen"),
    $u = Symbol.iterator;

function st(e) { return e === null || typeof e != "object" ? null : (e = $u && e[$u] || e["@@iterator"], typeof e == "function" ? e : null) }
var A = Object.assign,
    Sl;

function yt(e) {
    if (Sl === void 0) try { throw Error() } catch (t) {
        var n = t.stack.trim().match(/\n( *(at )?)/);
        Sl = n && n[1] || ""
    }
    return `
` + Sl + e
}
var El = !1;

function Cl(e, n) {
    if (!e || El) return "";
    El = !0;
    var t = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
        if (n)
            if (n = function() { throw Error() }, Object.defineProperty(n.prototype, "props", { set: function() { throw Error() } }), typeof Reflect == "object" && Reflect.construct) {
                try { Reflect.construct(n, []) } catch (c) { var r = c }
                Reflect.construct(e, [], n)
            } else {
                try { n.call() } catch (c) { r = c }
                e.call(n.prototype)
            }
        else {
            try { throw Error() } catch (c) { r = c }
            e()
        }
    } catch (c) {
        if (c && r && typeof c.stack == "string") {
            for (var l = c.stack.split(`
`), o = r.stack.split(`
`), u = l.length - 1, i = o.length - 1; 1 <= u && 0 <= i && l[u] !== o[i];) i--;
            for (; 1 <= u && 0 <= i; u--, i--)
                if (l[u] !== o[i]) {
                    if (u !== 1 || i !== 1)
                        do
                            if (u--, i--, 0 > i || l[u] !== o[i]) { var s = `
` + l[u].replace(" at new ", " at "); return e.displayName && s.includes("<anonymous>") && (s = s.replace("<anonymous>", e.displayName)), s }
                    while (1 <= u && 0 <= i);
                    break
                }
        }
    } finally { El = !1, Error.prepareStackTrace = t }
    return (e = e ? e.displayName || e.name : "") ? yt(e) : ""
}

function _c(e) {
    switch (e.tag) {
        case 5:
            return yt(e.type);
        case 16:
            return yt("Lazy");
        case 13:
            return yt("Suspense");
        case 19:
            return yt("SuspenseList");
        case 0:
        case 2:
        case 15:
            return e = Cl(e.type, !1), e;
        case 11:
            return e = Cl(e.type.render, !1), e;
        case 1:
            return e = Cl(e.type, !0), e;
        default:
            return ""
    }
}

function Jl(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
        case Dn:
            return "Fragment";
        case On:
            return "Portal";
        case Xl:
            return "Profiler";
        case Ko:
            return "StrictMode";
        case Gl:
            return "Suspense";
        case Zl:
            return "SuspenseList"
    }
    if (typeof e == "object") switch (e.$$typeof) {
        case os:
            return (e.displayName || "Context") + ".Consumer";
        case ls:
            return (e._context.displayName || "Context") + ".Provider";
        case Yo:
            var n = e.render;
            return e = e.displayName, e || (e = n.displayName || n.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case Xo:
            return n = e.displayName || null, n !== null ? n : Jl(e.type) || "Memo";
        case qe:
            n = e._payload, e = e._init;
            try { return Jl(e(n)) } catch {}
    }
    return null
}

function xc(e) {
    var n = e.type;
    switch (e.tag) {
        case 24:
            return "Cache";
        case 9:
            return (n.displayName || "Context") + ".Consumer";
        case 10:
            return (n._context.displayName || "Context") + ".Provider";
        case 18:
            return "DehydratedFragment";
        case 11:
            return e = n.render, e = e.displayName || e.name || "", n.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
        case 7:
            return "Fragment";
        case 5:
            return n;
        case 4:
            return "Portal";
        case 3:
            return "Root";
        case 6:
            return "Text";
        case 16:
            return Jl(n);
        case 8:
            return n === Ko ? "StrictMode" : "Mode";
        case 22:
            return "Offscreen";
        case 12:
            return "Profiler";
        case 21:
            return "Scope";
        case 13:
            return "Suspense";
        case 19:
            return "SuspenseList";
        case 25:
            return "TracingMarker";
        case 1:
        case 0:
        case 17:
        case 2:
        case 14:
        case 15:
            if (typeof n == "function") return n.displayName || n.name || null;
            if (typeof n == "string") return n
    }
    return null
}

function fn(e) {
    switch (typeof e) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
            return e;
        case "object":
            return e;
        default:
            return ""
    }
}

function is(e) { var n = e.type; return (e = e.nodeName) && e.toLowerCase() === "input" && (n === "checkbox" || n === "radio") }

function Pc(e) {
    var n = is(e) ? "checked" : "value",
        t = Object.getOwnPropertyDescriptor(e.constructor.prototype, n),
        r = "" + e[n];
    if (!e.hasOwnProperty(n) && typeof t != "undefined" && typeof t.get == "function" && typeof t.set == "function") {
        var l = t.get,
            o = t.set;
        return Object.defineProperty(e, n, { configurable: !0, get: function() { return l.call(this) }, set: function(u) { r = "" + u, o.call(this, u) } }), Object.defineProperty(e, n, { enumerable: t.enumerable }), { getValue: function() { return r }, setValue: function(u) { r = "" + u }, stopTracking: function() { e._valueTracker = null, delete e[n] } }
    }
}

function tr(e) { e._valueTracker || (e._valueTracker = Pc(e)) }

function ss(e) {
    if (!e) return !1;
    var n = e._valueTracker;
    if (!n) return !0;
    var t = n.getValue(),
        r = "";
    return e && (r = is(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== t ? (n.setValue(e), !0) : !1
}

function Lr(e) { if (e = e || (typeof document != "undefined" ? document : void 0), typeof e == "undefined") return null; try { return e.activeElement || e.body } catch { return e.body } }

function ql(e, n) { var t = n.checked; return A({}, n, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: t != null ? t : e._wrapperState.initialChecked }) }

function Vu(e, n) {
    var t = n.defaultValue == null ? "" : n.defaultValue,
        r = n.checked != null ? n.checked : n.defaultChecked;
    t = fn(n.value != null ? n.value : t), e._wrapperState = { initialChecked: r, initialValue: t, controlled: n.type === "checkbox" || n.type === "radio" ? n.checked != null : n.value != null }
}

function as(e, n) { n = n.checked, n != null && Qo(e, "checked", n, !1) }

function bl(e, n) {
    as(e, n);
    var t = fn(n.value),
        r = n.type;
    if (t != null) r === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + t) : e.value !== "" + t && (e.value = "" + t);
    else if (r === "submit" || r === "reset") { e.removeAttribute("value"); return }
    n.hasOwnProperty("value") ? eo(e, n.type, t) : n.hasOwnProperty("defaultValue") && eo(e, n.type, fn(n.defaultValue)), n.checked == null && n.defaultChecked != null && (e.defaultChecked = !!n.defaultChecked)
}

function Au(e, n, t) {
    if (n.hasOwnProperty("value") || n.hasOwnProperty("defaultValue")) {
        var r = n.type;
        if (!(r !== "submit" && r !== "reset" || n.value !== void 0 && n.value !== null)) return;
        n = "" + e._wrapperState.initialValue, t || n === e.value || (e.value = n), e.defaultValue = n
    }
    t = e.name, t !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, t !== "" && (e.name = t)
}

function eo(e, n, t) {
    (n !== "number" || Lr(e.ownerDocument) !== e) && (t == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + t && (e.defaultValue = "" + t))
}
var gt = Array.isArray;

function Qn(e, n, t, r) {
    if (e = e.options, n) { n = {}; for (var l = 0; l < t.length; l++) n["$" + t[l]] = !0; for (t = 0; t < e.length; t++) l = n.hasOwnProperty("$" + e[t].value), e[t].selected !== l && (e[t].selected = l), l && r && (e[t].defaultSelected = !0) } else {
        for (t = "" + fn(t), n = null, l = 0; l < e.length; l++) {
            if (e[l].value === t) { e[l].selected = !0, r && (e[l].defaultSelected = !0); return }
            n !== null || e[l].disabled || (n = e[l])
        }
        n !== null && (n.selected = !0)
    }
}

function no(e, n) { if (n.dangerouslySetInnerHTML != null) throw Error(v(91)); return A({}, n, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue }) }

function Bu(e, n) {
    var t = n.value;
    if (t == null) {
        if (t = n.children, n = n.defaultValue, t != null) {
            if (n != null) throw Error(v(92));
            if (gt(t)) {
                if (1 < t.length) throw Error(v(93));
                t = t[0]
            }
            n = t
        }
        n == null && (n = ""), t = n
    }
    e._wrapperState = { initialValue: fn(t) }
}

function cs(e, n) {
    var t = fn(n.value),
        r = fn(n.defaultValue);
    t != null && (t = "" + t, t !== e.value && (e.value = t), n.defaultValue == null && e.defaultValue !== t && (e.defaultValue = t)), r != null && (e.defaultValue = "" + r)
}

function Hu(e) {
    var n = e.textContent;
    n === e._wrapperState.initialValue && n !== "" && n !== null && (e.value = n)
}

function fs(e) {
    switch (e) {
        case "svg":
            return "http://www.w3.org/2000/svg";
        case "math":
            return "http://www.w3.org/1998/Math/MathML";
        default:
            return "http://www.w3.org/1999/xhtml"
    }
}

function to(e, n) { return e == null || e === "http://www.w3.org/1999/xhtml" ? fs(n) : e === "http://www.w3.org/2000/svg" && n === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e }
var rr, ds = function(e) { return typeof MSApp != "undefined" && MSApp.execUnsafeLocalFunction ? function(n, t, r, l) { MSApp.execUnsafeLocalFunction(function() { return e(n, t, r, l) }) } : e }(function(e, n) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = n;
    else { for (rr = rr || document.createElement("div"), rr.innerHTML = "<svg>" + n.valueOf().toString() + "</svg>", n = rr.firstChild; e.firstChild;) e.removeChild(e.firstChild); for (; n.firstChild;) e.appendChild(n.firstChild) }
});

function Rt(e, n) {
    if (n) { var t = e.firstChild; if (t && t === e.lastChild && t.nodeType === 3) { t.nodeValue = n; return } }
    e.textContent = n
}
var St = { animationIterationCount: !0, aspectRatio: !0, borderImageOutset: !0, borderImageSlice: !0, borderImageWidth: !0, boxFlex: !0, boxFlexGroup: !0, boxOrdinalGroup: !0, columnCount: !0, columns: !0, flex: !0, flexGrow: !0, flexPositive: !0, flexShrink: !0, flexNegative: !0, flexOrder: !0, gridArea: !0, gridRow: !0, gridRowEnd: !0, gridRowSpan: !0, gridRowStart: !0, gridColumn: !0, gridColumnEnd: !0, gridColumnSpan: !0, gridColumnStart: !0, fontWeight: !0, lineClamp: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, tabSize: !0, widows: !0, zIndex: !0, zoom: !0, fillOpacity: !0, floodOpacity: !0, stopOpacity: !0, strokeDasharray: !0, strokeDashoffset: !0, strokeMiterlimit: !0, strokeOpacity: !0, strokeWidth: !0 },
    Nc = ["Webkit", "ms", "Moz", "O"];
Object.keys(St).forEach(function(e) { Nc.forEach(function(n) { n = n + e.charAt(0).toUpperCase() + e.substring(1), St[n] = St[e] }) });

function ps(e, n, t) { return n == null || typeof n == "boolean" || n === "" ? "" : t || typeof n != "number" || n === 0 || St.hasOwnProperty(e) && St[e] ? ("" + n).trim() : n + "px" }

function ms(e, n) {
    e = e.style;
    for (var t in n)
        if (n.hasOwnProperty(t)) {
            var r = t.indexOf("--") === 0,
                l = ps(t, n[t], r);
            t === "float" && (t = "cssFloat"), r ? e.setProperty(t, l) : e[t] = l
        }
}
var zc = A({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });

function ro(e, n) { if (n) { if (zc[e] && (n.children != null || n.dangerouslySetInnerHTML != null)) throw Error(v(137, e)); if (n.dangerouslySetInnerHTML != null) { if (n.children != null) throw Error(v(60)); if (typeof n.dangerouslySetInnerHTML != "object" || !("__html" in n.dangerouslySetInnerHTML)) throw Error(v(61)) } if (n.style != null && typeof n.style != "object") throw Error(v(62)) } }

function lo(e, n) {
    if (e.indexOf("-") === -1) return typeof n.is == "string";
    switch (e) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
            return !1;
        default:
            return !0
    }
}
var oo = null;

function Go(e) { return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e }
var uo = null,
    Kn = null,
    Yn = null;

function Wu(e) {
    if (e = Zt(e)) {
        if (typeof uo != "function") throw Error(v(280));
        var n = e.stateNode;
        n && (n = ol(n), uo(e.stateNode, e.type, n))
    }
}

function hs(e) { Kn ? Yn ? Yn.push(e) : Yn = [e] : Kn = e }

function vs() {
    if (Kn) {
        var e = Kn,
            n = Yn;
        if (Yn = Kn = null, Wu(e), n)
            for (e = 0; e < n.length; e++) Wu(n[e])
    }
}

function ys(e, n) { return e(n) }

function gs() {}
var _l = !1;

function ws(e, n, t) {
    if (_l) return e(n, t);
    _l = !0;
    try { return ys(e, n, t) } finally { _l = !1, (Kn !== null || Yn !== null) && (gs(), vs()) }
}

function Mt(e, n) {
    var t = e.stateNode;
    if (t === null) return null;
    var r = ol(t);
    if (r === null) return null;
    t = r[n];
    e: switch (n) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
            (r = !r.disabled) || (e = e.type, r = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !r;
            break e;
        default:
            e = !1
    }
    if (e) return null;
    if (t && typeof t != "function") throw Error(v(231, n, typeof t));
    return t
}
var io = !1;
if (Ye) try {
    var at = {};
    Object.defineProperty(at, "passive", { get: function() { io = !0 } }), window.addEventListener("test", at, at), window.removeEventListener("test", at, at)
} catch { io = !1 }

function Lc(e, n, t, r, l, o, u, i, s) { var c = Array.prototype.slice.call(arguments, 3); try { n.apply(t, c) } catch (m) { this.onError(m) } }
var Et = !1,
    Tr = null,
    Rr = !1,
    so = null,
    Tc = { onError: function(e) { Et = !0, Tr = e } };

function Rc(e, n, t, r, l, o, u, i, s) { Et = !1, Tr = null, Lc.apply(Tc, arguments) }

function Mc(e, n, t, r, l, o, u, i, s) {
    if (Rc.apply(this, arguments), Et) {
        if (Et) {
            var c = Tr;
            Et = !1, Tr = null
        } else throw Error(v(198));
        Rr || (Rr = !0, so = c)
    }
}

function Rn(e) {
    var n = e,
        t = e;
    if (e.alternate)
        for (; n.return;) n = n.return;
    else {
        e = n;
        do n = e, (n.flags & 4098) !== 0 && (t = n.return), e = n.return; while (e)
    }
    return n.tag === 3 ? t : null
}

function ks(e) { if (e.tag === 13) { var n = e.memoizedState; if (n === null && (e = e.alternate, e !== null && (n = e.memoizedState)), n !== null) return n.dehydrated } return null }

function Qu(e) { if (Rn(e) !== e) throw Error(v(188)) }

function Oc(e) {
    var n = e.alternate;
    if (!n) { if (n = Rn(e), n === null) throw Error(v(188)); return n !== e ? null : e }
    for (var t = e, r = n;;) {
        var l = t.return;
        if (l === null) break;
        var o = l.alternate;
        if (o === null) { if (r = l.return, r !== null) { t = r; continue } break }
        if (l.child === o.child) {
            for (o = l.child; o;) {
                if (o === t) return Qu(l), e;
                if (o === r) return Qu(l), n;
                o = o.sibling
            }
            throw Error(v(188))
        }
        if (t.return !== r.return) t = l, r = o;
        else {
            for (var u = !1, i = l.child; i;) {
                if (i === t) { u = !0, t = l, r = o; break }
                if (i === r) { u = !0, r = l, t = o; break }
                i = i.sibling
            }
            if (!u) {
                for (i = o.child; i;) {
                    if (i === t) { u = !0, t = o, r = l; break }
                    if (i === r) { u = !0, r = o, t = l; break }
                    i = i.sibling
                }
                if (!u) throw Error(v(189))
            }
        }
        if (t.alternate !== r) throw Error(v(190))
    }
    if (t.tag !== 3) throw Error(v(188));
    return t.stateNode.current === t ? e : n
}

function Ss(e) { return e = Oc(e), e !== null ? Es(e) : null }

function Es(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null;) {
        var n = Es(e);
        if (n !== null) return n;
        e = e.sibling
    }
    return null
}
var Cs = ye.unstable_scheduleCallback,
    Ku = ye.unstable_cancelCallback,
    Dc = ye.unstable_shouldYield,
    Ic = ye.unstable_requestPaint,
    Q = ye.unstable_now,
    Fc = ye.unstable_getCurrentPriorityLevel,
    Zo = ye.unstable_ImmediatePriority,
    _s = ye.unstable_UserBlockingPriority,
    Mr = ye.unstable_NormalPriority,
    jc = ye.unstable_LowPriority,
    xs = ye.unstable_IdlePriority,
    nl = null,
    Ue = null;

function Uc(e) { if (Ue && typeof Ue.onCommitFiberRoot == "function") try { Ue.onCommitFiberRoot(nl, e, void 0, (e.current.flags & 128) === 128) } catch {} }
var Oe = Math.clz32 ? Math.clz32 : Ac,
    $c = Math.log,
    Vc = Math.LN2;

function Ac(e) { return e >>>= 0, e === 0 ? 32 : 31 - ($c(e) / Vc | 0) | 0 }
var lr = 64,
    or = 4194304;

function wt(e) {
    switch (e & -e) {
        case 1:
            return 1;
        case 2:
            return 2;
        case 4:
            return 4;
        case 8:
            return 8;
        case 16:
            return 16;
        case 32:
            return 32;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return e & 4194240;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
            return e & 130023424;
        case 134217728:
            return 134217728;
        case 268435456:
            return 268435456;
        case 536870912:
            return 536870912;
        case 1073741824:
            return 1073741824;
        default:
            return e
    }
}

function Or(e, n) {
    var t = e.pendingLanes;
    if (t === 0) return 0;
    var r = 0,
        l = e.suspendedLanes,
        o = e.pingedLanes,
        u = t & 268435455;
    if (u !== 0) {
        var i = u & ~l;
        i !== 0 ? r = wt(i) : (o &= u, o !== 0 && (r = wt(o)))
    } else u = t & ~l, u !== 0 ? r = wt(u) : o !== 0 && (r = wt(o));
    if (r === 0) return 0;
    if (n !== 0 && n !== r && (n & l) === 0 && (l = r & -r, o = n & -n, l >= o || l === 16 && (o & 4194240) !== 0)) return n;
    if ((r & 4) !== 0 && (r |= t & 16), n = e.entangledLanes, n !== 0)
        for (e = e.entanglements, n &= r; 0 < n;) t = 31 - Oe(n), l = 1 << t, r |= e[t], n &= ~l;
    return r
}

function Bc(e, n) {
    switch (e) {
        case 1:
        case 2:
        case 4:
            return n + 250;
        case 8:
        case 16:
        case 32:
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return n + 5e3;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
            return -1;
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
            return -1;
        default:
            return -1
    }
}

function Hc(e, n) {
    for (var t = e.suspendedLanes, r = e.pingedLanes, l = e.expirationTimes, o = e.pendingLanes; 0 < o;) {
        var u = 31 - Oe(o),
            i = 1 << u,
            s = l[u];
        s === -1 ? ((i & t) === 0 || (i & r) !== 0) && (l[u] = Bc(i, n)) : s <= n && (e.expiredLanes |= i), o &= ~i
    }
}

function ao(e) { return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0 }

function Ps() { var e = lr; return lr <<= 1, (lr & 4194240) === 0 && (lr = 64), e }

function xl(e) { for (var n = [], t = 0; 31 > t; t++) n.push(e); return n }

function Xt(e, n, t) { e.pendingLanes |= n, n !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, n = 31 - Oe(n), e[n] = t }

function Wc(e, n) {
    var t = e.pendingLanes & ~n;
    e.pendingLanes = n, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= n, e.mutableReadLanes &= n, e.entangledLanes &= n, n = e.entanglements;
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < t;) {
        var l = 31 - Oe(t),
            o = 1 << l;
        n[l] = 0, r[l] = -1, e[l] = -1, t &= ~o
    }
}

function Jo(e, n) {
    var t = e.entangledLanes |= n;
    for (e = e.entanglements; t;) {
        var r = 31 - Oe(t),
            l = 1 << r;
        l & n | e[r] & n && (e[r] |= n), t &= ~l
    }
}
var M = 0;

function Ns(e) { return e &= -e, 1 < e ? 4 < e ? (e & 268435455) !== 0 ? 16 : 536870912 : 4 : 1 }
var zs, qo, Ls, Ts, Rs, co = !1,
    ur = [],
    ln = null,
    on = null,
    un = null,
    Ot = new Map,
    Dt = new Map,
    en = [],
    Qc = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");

function Yu(e, n) {
    switch (e) {
        case "focusin":
        case "focusout":
            ln = null;
            break;
        case "dragenter":
        case "dragleave":
            on = null;
            break;
        case "mouseover":
        case "mouseout":
            un = null;
            break;
        case "pointerover":
        case "pointerout":
            Ot.delete(n.pointerId);
            break;
        case "gotpointercapture":
        case "lostpointercapture":
            Dt.delete(n.pointerId)
    }
}

function ct(e, n, t, r, l, o) { return e === null || e.nativeEvent !== o ? (e = { blockedOn: n, domEventName: t, eventSystemFlags: r, nativeEvent: o, targetContainers: [l] }, n !== null && (n = Zt(n), n !== null && qo(n)), e) : (e.eventSystemFlags |= r, n = e.targetContainers, l !== null && n.indexOf(l) === -1 && n.push(l), e) }

function Kc(e, n, t, r, l) {
    switch (n) {
        case "focusin":
            return ln = ct(ln, e, n, t, r, l), !0;
        case "dragenter":
            return on = ct(on, e, n, t, r, l), !0;
        case "mouseover":
            return un = ct(un, e, n, t, r, l), !0;
        case "pointerover":
            var o = l.pointerId;
            return Ot.set(o, ct(Ot.get(o) || null, e, n, t, r, l)), !0;
        case "gotpointercapture":
            return o = l.pointerId, Dt.set(o, ct(Dt.get(o) || null, e, n, t, r, l)), !0
    }
    return !1
}

function Ms(e) {
    var n = Sn(e.target);
    if (n !== null) { var t = Rn(n); if (t !== null) { if (n = t.tag, n === 13) { if (n = ks(t), n !== null) { e.blockedOn = n, Rs(e.priority, function() { Ls(t) }); return } } else if (n === 3 && t.stateNode.current.memoizedState.isDehydrated) { e.blockedOn = t.tag === 3 ? t.stateNode.containerInfo : null; return } } }
    e.blockedOn = null
}

function kr(e) {
    if (e.blockedOn !== null) return !1;
    for (var n = e.targetContainers; 0 < n.length;) {
        var t = fo(e.domEventName, e.eventSystemFlags, n[0], e.nativeEvent);
        if (t === null) {
            t = e.nativeEvent;
            var r = new t.constructor(t.type, t);
            oo = r, t.target.dispatchEvent(r), oo = null
        } else return n = Zt(t), n !== null && qo(n), e.blockedOn = t, !1;
        n.shift()
    }
    return !0
}

function Xu(e, n, t) { kr(e) && t.delete(n) }

function Yc() { co = !1, ln !== null && kr(ln) && (ln = null), on !== null && kr(on) && (on = null), un !== null && kr(un) && (un = null), Ot.forEach(Xu), Dt.forEach(Xu) }

function ft(e, n) { e.blockedOn === n && (e.blockedOn = null, co || (co = !0, ye.unstable_scheduleCallback(ye.unstable_NormalPriority, Yc))) }

function It(e) {
    function n(l) { return ft(l, e) }
    if (0 < ur.length) {
        ft(ur[0], e);
        for (var t = 1; t < ur.length; t++) {
            var r = ur[t];
            r.blockedOn === e && (r.blockedOn = null)
        }
    }
    for (ln !== null && ft(ln, e), on !== null && ft(on, e), un !== null && ft(un, e), Ot.forEach(n), Dt.forEach(n), t = 0; t < en.length; t++) r = en[t], r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < en.length && (t = en[0], t.blockedOn === null);) Ms(t), t.blockedOn === null && en.shift()
}
var Xn = Ze.ReactCurrentBatchConfig,
    Dr = !0;

function Xc(e, n, t, r) {
    var l = M,
        o = Xn.transition;
    Xn.transition = null;
    try { M = 1, bo(e, n, t, r) } finally { M = l, Xn.transition = o }
}

function Gc(e, n, t, r) {
    var l = M,
        o = Xn.transition;
    Xn.transition = null;
    try { M = 4, bo(e, n, t, r) } finally { M = l, Xn.transition = o }
}

function bo(e, n, t, r) {
    if (Dr) {
        var l = fo(e, n, t, r);
        if (l === null) Il(e, n, r, Ir, t), Yu(e, r);
        else if (Kc(l, e, n, t, r)) r.stopPropagation();
        else if (Yu(e, r), n & 4 && -1 < Qc.indexOf(e)) {
            for (; l !== null;) {
                var o = Zt(l);
                if (o !== null && zs(o), o = fo(e, n, t, r), o === null && Il(e, n, r, Ir, t), o === l) break;
                l = o
            }
            l !== null && r.stopPropagation()
        } else Il(e, n, r, null, t)
    }
}
var Ir = null;

function fo(e, n, t, r) {
    if (Ir = null, e = Go(r), e = Sn(e), e !== null)
        if (n = Rn(e), n === null) e = null;
        else if (t = n.tag, t === 13) {
        if (e = ks(n), e !== null) return e;
        e = null
    } else if (t === 3) {
        if (n.stateNode.current.memoizedState.isDehydrated) return n.tag === 3 ? n.stateNode.containerInfo : null;
        e = null
    } else n !== e && (e = null);
    return Ir = e, null
}

function Os(e) {
    switch (e) {
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        case "beforeblur":
        case "afterblur":
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
            return 1;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "toggle":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
            return 4;
        case "message":
            switch (Fc()) {
                case Zo:
                    return 1;
                case _s:
                    return 4;
                case Mr:
                case jc:
                    return 16;
                case xs:
                    return 536870912;
                default:
                    return 16
            }
        default:
            return 16
    }
}
var tn = null,
    eu = null,
    Sr = null;

function Ds() {
    if (Sr) return Sr;
    var e, n = eu,
        t = n.length,
        r, l = "value" in tn ? tn.value : tn.textContent,
        o = l.length;
    for (e = 0; e < t && n[e] === l[e]; e++);
    var u = t - e;
    for (r = 1; r <= u && n[t - r] === l[o - r]; r++);
    return Sr = l.slice(e, 1 < r ? 1 - r : void 0)
}

function Er(e) { var n = e.keyCode; return "charCode" in e ? (e = e.charCode, e === 0 && n === 13 && (e = 13)) : e = n, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0 }

function ir() { return !0 }

function Gu() { return !1 }

function we(e) {
    function n(t, r, l, o, u) { this._reactName = t, this._targetInst = l, this.type = r, this.nativeEvent = o, this.target = u, this.currentTarget = null; for (var i in e) e.hasOwnProperty(i) && (t = e[i], this[i] = t ? t(o) : o[i]); return this.isDefaultPrevented = (o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1) ? ir : Gu, this.isPropagationStopped = Gu, this }
    return A(n.prototype, {
        preventDefault: function() {
            this.defaultPrevented = !0;
            var t = this.nativeEvent;
            t && (t.preventDefault ? t.preventDefault() : typeof t.returnValue != "unknown" && (t.returnValue = !1), this.isDefaultPrevented = ir)
        },
        stopPropagation: function() {
            var t = this.nativeEvent;
            t && (t.stopPropagation ? t.stopPropagation() : typeof t.cancelBubble != "unknown" && (t.cancelBubble = !0), this.isPropagationStopped = ir)
        },
        persist: function() {},
        isPersistent: ir
    }), n
}
var lt = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) { return e.timeStamp || Date.now() }, defaultPrevented: 0, isTrusted: 0 },
    nu = we(lt),
    Gt = A({}, lt, { view: 0, detail: 0 }),
    Zc = we(Gt),
    Pl, Nl, dt, tl = A({}, Gt, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: tu, button: 0, buttons: 0, relatedTarget: function(e) { return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget }, movementX: function(e) { return "movementX" in e ? e.movementX : (e !== dt && (dt && e.type === "mousemove" ? (Pl = e.screenX - dt.screenX, Nl = e.screenY - dt.screenY) : Nl = Pl = 0, dt = e), Pl) }, movementY: function(e) { return "movementY" in e ? e.movementY : Nl } }),
    Zu = we(tl),
    Jc = A({}, tl, { dataTransfer: 0 }),
    qc = we(Jc),
    bc = A({}, Gt, { relatedTarget: 0 }),
    zl = we(bc),
    ef = A({}, lt, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    nf = we(ef),
    tf = A({}, lt, { clipboardData: function(e) { return "clipboardData" in e ? e.clipboardData : window.clipboardData } }),
    rf = we(tf),
    lf = A({}, lt, { data: 0 }),
    Ju = we(lf),
    of = { Esc: "Escape", Spacebar: " ", Left: "ArrowLeft", Up: "ArrowUp", Right: "ArrowRight", Down: "ArrowDown", Del: "Delete", Win: "OS", Menu: "ContextMenu", Apps: "ContextMenu", Scroll: "ScrollLock", MozPrintableKey: "Unidentified" },
    uf = { 8: "Backspace", 9: "Tab", 12: "Clear", 13: "Enter", 16: "Shift", 17: "Control", 18: "Alt", 19: "Pause", 20: "CapsLock", 27: "Escape", 32: " ", 33: "PageUp", 34: "PageDown", 35: "End", 36: "Home", 37: "ArrowLeft", 38: "ArrowUp", 39: "ArrowRight", 40: "ArrowDown", 45: "Insert", 46: "Delete", 112: "F1", 113: "F2", 114: "F3", 115: "F4", 116: "F5", 117: "F6", 118: "F7", 119: "F8", 120: "F9", 121: "F10", 122: "F11", 123: "F12", 144: "NumLock", 145: "ScrollLock", 224: "Meta" },
    sf = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };

function af(e) { var n = this.nativeEvent; return n.getModifierState ? n.getModifierState(e) : (e = sf[e]) ? !!n[e] : !1 }

function tu() { return af }
var cf = A({}, Gt, { key: function(e) { if (e.key) { var n = of[e.key] || e.key; if (n !== "Unidentified") return n } return e.type === "keypress" ? (e = Er(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? uf[e.keyCode] || "Unidentified" : "" }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: tu, charCode: function(e) { return e.type === "keypress" ? Er(e) : 0 }, keyCode: function(e) { return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0 }, which: function(e) { return e.type === "keypress" ? Er(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0 } }),
    ff = we(cf),
    df = A({}, tl, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }),
    qu = we(df),
    pf = A({}, Gt, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: tu }),
    mf = we(pf),
    hf = A({}, lt, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    vf = we(hf),
    yf = A({}, tl, { deltaX: function(e) { return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0 }, deltaY: function(e) { return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0 }, deltaZ: 0, deltaMode: 0 }),
    gf = we(yf),
    wf = [9, 13, 27, 32],
    ru = Ye && "CompositionEvent" in window,
    Ct = null;
Ye && "documentMode" in document && (Ct = document.documentMode);
var kf = Ye && "TextEvent" in window && !Ct,
    Is = Ye && (!ru || Ct && 8 < Ct && 11 >= Ct),
    bu = String.fromCharCode(32),
    ei = !1;

function Fs(e, n) {
    switch (e) {
        case "keyup":
            return wf.indexOf(n.keyCode) !== -1;
        case "keydown":
            return n.keyCode !== 229;
        case "keypress":
        case "mousedown":
        case "focusout":
            return !0;
        default:
            return !1
    }
}

function js(e) { return e = e.detail, typeof e == "object" && "data" in e ? e.data : null }
var In = !1;

function Sf(e, n) {
    switch (e) {
        case "compositionend":
            return js(n);
        case "keypress":
            return n.which !== 32 ? null : (ei = !0, bu);
        case "textInput":
            return e = n.data, e === bu && ei ? null : e;
        default:
            return null
    }
}

function Ef(e, n) {
    if (In) return e === "compositionend" || !ru && Fs(e, n) ? (e = Ds(), Sr = eu = tn = null, In = !1, e) : null;
    switch (e) {
        case "paste":
            return null;
        case "keypress":
            if (!(n.ctrlKey || n.altKey || n.metaKey) || n.ctrlKey && n.altKey) { if (n.char && 1 < n.char.length) return n.char; if (n.which) return String.fromCharCode(n.which) }
            return null;
        case "compositionend":
            return Is && n.locale !== "ko" ? null : n.data;
        default:
            return null
    }
}
var Cf = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };

function ni(e) { var n = e && e.nodeName && e.nodeName.toLowerCase(); return n === "input" ? !!Cf[e.type] : n === "textarea" }

function Us(e, n, t, r) { hs(r), n = Fr(n, "onChange"), 0 < n.length && (t = new nu("onChange", "change", null, t, r), e.push({ event: t, listeners: n })) }
var _t = null,
    Ft = null;

function _f(e) { Gs(e, 0) }

function rl(e) { var n = Un(e); if (ss(n)) return e }

function xf(e, n) { if (e === "change") return n }
var $s = !1;
if (Ye) {
    var Ll;
    if (Ye) {
        var Tl = "oninput" in document;
        if (!Tl) {
            var ti = document.createElement("div");
            ti.setAttribute("oninput", "return;"), Tl = typeof ti.oninput == "function"
        }
        Ll = Tl
    } else Ll = !1;
    $s = Ll && (!document.documentMode || 9 < document.documentMode)
}

function ri() { _t && (_t.detachEvent("onpropertychange", Vs), Ft = _t = null) }

function Vs(e) {
    if (e.propertyName === "value" && rl(Ft)) {
        var n = [];
        Us(n, Ft, e, Go(e)), ws(_f, n)
    }
}

function Pf(e, n, t) { e === "focusin" ? (ri(), _t = n, Ft = t, _t.attachEvent("onpropertychange", Vs)) : e === "focusout" && ri() }

function Nf(e) { if (e === "selectionchange" || e === "keyup" || e === "keydown") return rl(Ft) }

function zf(e, n) { if (e === "click") return rl(n) }

function Lf(e, n) { if (e === "input" || e === "change") return rl(n) }

function Tf(e, n) { return e === n && (e !== 0 || 1 / e === 1 / n) || e !== e && n !== n }
var De = typeof Object.is == "function" ? Object.is : Tf;

function jt(e, n) {
    if (De(e, n)) return !0;
    if (typeof e != "object" || e === null || typeof n != "object" || n === null) return !1;
    var t = Object.keys(e),
        r = Object.keys(n);
    if (t.length !== r.length) return !1;
    for (r = 0; r < t.length; r++) { var l = t[r]; if (!Yl.call(n, l) || !De(e[l], n[l])) return !1 }
    return !0
}

function li(e) { for (; e && e.firstChild;) e = e.firstChild; return e }

function oi(e, n) {
    var t = li(e);
    e = 0;
    for (var r; t;) {
        if (t.nodeType === 3) {
            if (r = e + t.textContent.length, e <= n && r >= n) return { node: t, offset: n - e };
            e = r
        }
        e: {
            for (; t;) {
                if (t.nextSibling) { t = t.nextSibling; break e }
                t = t.parentNode
            }
            t = void 0
        }
        t = li(t)
    }
}

function As(e, n) { return e && n ? e === n ? !0 : e && e.nodeType === 3 ? !1 : n && n.nodeType === 3 ? As(e, n.parentNode) : "contains" in e ? e.contains(n) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(n) & 16) : !1 : !1 }

function Bs() {
    for (var e = window, n = Lr(); n instanceof e.HTMLIFrameElement;) {
        try { var t = typeof n.contentWindow.location.href == "string" } catch { t = !1 }
        if (t) e = n.contentWindow;
        else break;
        n = Lr(e.document)
    }
    return n
}

function lu(e) { var n = e && e.nodeName && e.nodeName.toLowerCase(); return n && (n === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || n === "textarea" || e.contentEditable === "true") }

function Rf(e) {
    var n = Bs(),
        t = e.focusedElem,
        r = e.selectionRange;
    if (n !== t && t && t.ownerDocument && As(t.ownerDocument.documentElement, t)) {
        if (r !== null && lu(t)) {
            if (n = r.start, e = r.end, e === void 0 && (e = n), "selectionStart" in t) t.selectionStart = n, t.selectionEnd = Math.min(e, t.value.length);
            else if (e = (n = t.ownerDocument || document) && n.defaultView || window, e.getSelection) {
                e = e.getSelection();
                var l = t.textContent.length,
                    o = Math.min(r.start, l);
                r = r.end === void 0 ? o : Math.min(r.end, l), !e.extend && o > r && (l = r, r = o, o = l), l = oi(t, o);
                var u = oi(t, r);
                l && u && (e.rangeCount !== 1 || e.anchorNode !== l.node || e.anchorOffset !== l.offset || e.focusNode !== u.node || e.focusOffset !== u.offset) && (n = n.createRange(), n.setStart(l.node, l.offset), e.removeAllRanges(), o > r ? (e.addRange(n), e.extend(u.node, u.offset)) : (n.setEnd(u.node, u.offset), e.addRange(n)))
            }
        }
        for (n = [], e = t; e = e.parentNode;) e.nodeType === 1 && n.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
        for (typeof t.focus == "function" && t.focus(), t = 0; t < n.length; t++) e = n[t], e.element.scrollLeft = e.left, e.element.scrollTop = e.top
    }
}
var Mf = Ye && "documentMode" in document && 11 >= document.documentMode,
    Fn = null,
    po = null,
    xt = null,
    mo = !1;

function ui(e, n, t) {
    var r = t.window === t ? t.document : t.nodeType === 9 ? t : t.ownerDocument;
    mo || Fn == null || Fn !== Lr(r) || (r = Fn, "selectionStart" in r && lu(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), xt && jt(xt, r) || (xt = r, r = Fr(po, "onSelect"), 0 < r.length && (n = new nu("onSelect", "select", null, n, t), e.push({ event: n, listeners: r }), n.target = Fn)))
}

function sr(e, n) { var t = {}; return t[e.toLowerCase()] = n.toLowerCase(), t["Webkit" + e] = "webkit" + n, t["Moz" + e] = "moz" + n, t }
var jn = { animationend: sr("Animation", "AnimationEnd"), animationiteration: sr("Animation", "AnimationIteration"), animationstart: sr("Animation", "AnimationStart"), transitionend: sr("Transition", "TransitionEnd") },
    Rl = {},
    Hs = {};
Ye && (Hs = document.createElement("div").style, "AnimationEvent" in window || (delete jn.animationend.animation, delete jn.animationiteration.animation, delete jn.animationstart.animation), "TransitionEvent" in window || delete jn.transitionend.transition);

function ll(e) {
    if (Rl[e]) return Rl[e];
    if (!jn[e]) return e;
    var n = jn[e],
        t;
    for (t in n)
        if (n.hasOwnProperty(t) && t in Hs) return Rl[e] = n[t];
    return e
}
var Ws = ll("animationend"),
    Qs = ll("animationiteration"),
    Ks = ll("animationstart"),
    Ys = ll("transitionend"),
    Xs = new Map,
    ii = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");

function mn(e, n) { Xs.set(e, n), Tn(n, [e]) }
for (var Ml = 0; Ml < ii.length; Ml++) {
    var Ol = ii[Ml],
        Of = Ol.toLowerCase(),
        Df = Ol[0].toUpperCase() + Ol.slice(1);
    mn(Of, "on" + Df)
}
mn(Ws, "onAnimationEnd");
mn(Qs, "onAnimationIteration");
mn(Ks, "onAnimationStart");
mn("dblclick", "onDoubleClick");
mn("focusin", "onFocus");
mn("focusout", "onBlur");
mn(Ys, "onTransitionEnd");
Jn("onMouseEnter", ["mouseout", "mouseover"]);
Jn("onMouseLeave", ["mouseout", "mouseover"]);
Jn("onPointerEnter", ["pointerout", "pointerover"]);
Jn("onPointerLeave", ["pointerout", "pointerover"]);
Tn("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
Tn("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
Tn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Tn("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
Tn("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
Tn("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var kt = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
    If = new Set("cancel close invalid load scroll toggle".split(" ").concat(kt));

function si(e, n, t) {
    var r = e.type || "unknown-event";
    e.currentTarget = t, Mc(r, n, void 0, e), e.currentTarget = null
}

function Gs(e, n) {
    n = (n & 4) !== 0;
    for (var t = 0; t < e.length; t++) {
        var r = e[t],
            l = r.event;
        r = r.listeners;
        e: {
            var o = void 0;
            if (n)
                for (var u = r.length - 1; 0 <= u; u--) {
                    var i = r[u],
                        s = i.instance,
                        c = i.currentTarget;
                    if (i = i.listener, s !== o && l.isPropagationStopped()) break e;
                    si(l, i, c), o = s
                } else
                    for (u = 0; u < r.length; u++) {
                        if (i = r[u], s = i.instance, c = i.currentTarget, i = i.listener, s !== o && l.isPropagationStopped()) break e;
                        si(l, i, c), o = s
                    }
        }
    }
    if (Rr) throw e = so, Rr = !1, so = null, e
}

function D(e, n) {
    var t = n[wo];
    t === void 0 && (t = n[wo] = new Set);
    var r = e + "__bubble";
    t.has(r) || (Zs(n, e, 2, !1), t.add(r))
}

function Dl(e, n, t) {
    var r = 0;
    n && (r |= 4), Zs(t, e, r, n)
}
var ar = "_reactListening" + Math.random().toString(36).slice(2);

function Ut(e) {
    if (!e[ar]) {
        e[ar] = !0, rs.forEach(function(t) { t !== "selectionchange" && (If.has(t) || Dl(t, !1, e), Dl(t, !0, e)) });
        var n = e.nodeType === 9 ? e : e.ownerDocument;
        n === null || n[ar] || (n[ar] = !0, Dl("selectionchange", !1, n))
    }
}

function Zs(e, n, t, r) {
    switch (Os(n)) {
        case 1:
            var l = Xc;
            break;
        case 4:
            l = Gc;
            break;
        default:
            l = bo
    }
    t = l.bind(null, n, t, e), l = void 0, !io || n !== "touchstart" && n !== "touchmove" && n !== "wheel" || (l = !0), r ? l !== void 0 ? e.addEventListener(n, t, { capture: !0, passive: l }) : e.addEventListener(n, t, !0) : l !== void 0 ? e.addEventListener(n, t, { passive: l }) : e.addEventListener(n, t, !1)
}

function Il(e, n, t, r, l) {
    var o = r;
    if ((n & 1) === 0 && (n & 2) === 0 && r !== null) e: for (;;) {
        if (r === null) return;
        var u = r.tag;
        if (u === 3 || u === 4) {
            var i = r.stateNode.containerInfo;
            if (i === l || i.nodeType === 8 && i.parentNode === l) break;
            if (u === 4)
                for (u = r.return; u !== null;) {
                    var s = u.tag;
                    if ((s === 3 || s === 4) && (s = u.stateNode.containerInfo, s === l || s.nodeType === 8 && s.parentNode === l)) return;
                    u = u.return
                }
            for (; i !== null;) {
                if (u = Sn(i), u === null) return;
                if (s = u.tag, s === 5 || s === 6) { r = o = u; continue e }
                i = i.parentNode
            }
        }
        r = r.return
    }
    ws(function() {
        var c = o,
            m = Go(t),
            y = [];
        e: {
            var p = Xs.get(e);
            if (p !== void 0) {
                var w = nu,
                    g = e;
                switch (e) {
                    case "keypress":
                        if (Er(t) === 0) break e;
                    case "keydown":
                    case "keyup":
                        w = ff;
                        break;
                    case "focusin":
                        g = "focus", w = zl;
                        break;
                    case "focusout":
                        g = "blur", w = zl;
                        break;
                    case "beforeblur":
                    case "afterblur":
                        w = zl;
                        break;
                    case "click":
                        if (t.button === 2) break e;
                    case "auxclick":
                    case "dblclick":
                    case "mousedown":
                    case "mousemove":
                    case "mouseup":
                    case "mouseout":
                    case "mouseover":
                    case "contextmenu":
                        w = Zu;
                        break;
                    case "drag":
                    case "dragend":
                    case "dragenter":
                    case "dragexit":
                    case "dragleave":
                    case "dragover":
                    case "dragstart":
                    case "drop":
                        w = qc;
                        break;
                    case "touchcancel":
                    case "touchend":
                    case "touchmove":
                    case "touchstart":
                        w = mf;
                        break;
                    case Ws:
                    case Qs:
                    case Ks:
                        w = nf;
                        break;
                    case Ys:
                        w = vf;
                        break;
                    case "scroll":
                        w = Zc;
                        break;
                    case "wheel":
                        w = gf;
                        break;
                    case "copy":
                    case "cut":
                    case "paste":
                        w = rf;
                        break;
                    case "gotpointercapture":
                    case "lostpointercapture":
                    case "pointercancel":
                    case "pointerdown":
                    case "pointermove":
                    case "pointerout":
                    case "pointerover":
                    case "pointerup":
                        w = qu
                }
                var P = (n & 4) !== 0,
                    F = !P && e === "scroll",
                    f = P ? p !== null ? p + "Capture" : null : p;
                P = [];
                for (var a = c, d; a !== null;) {
                    d = a;
                    var h = d.stateNode;
                    if (d.tag === 5 && h !== null && (d = h, f !== null && (h = Mt(a, f), h != null && P.push($t(a, h, d)))), F) break;
                    a = a.return
                }
                0 < P.length && (p = new w(p, g, null, t, m), y.push({ event: p, listeners: P }))
            }
        }
        if ((n & 7) === 0) {
            e: {
                if (p = e === "mouseover" || e === "pointerover", w = e === "mouseout" || e === "pointerout", p && t !== oo && (g = t.relatedTarget || t.fromElement) && (Sn(g) || g[Xe])) break e;
                if ((w || p) && (p = m.window === m ? m : (p = m.ownerDocument) ? p.defaultView || p.parentWindow : window, w ? (g = t.relatedTarget || t.toElement, w = c, g = g ? Sn(g) : null, g !== null && (F = Rn(g), g !== F || g.tag !== 5 && g.tag !== 6) && (g = null)) : (w = null, g = c), w !== g)) {
                    if (P = Zu, h = "onMouseLeave", f = "onMouseEnter", a = "mouse", (e === "pointerout" || e === "pointerover") && (P = qu, h = "onPointerLeave", f = "onPointerEnter", a = "pointer"), F = w == null ? p : Un(w), d = g == null ? p : Un(g), p = new P(h, a + "leave", w, t, m), p.target = F, p.relatedTarget = d, h = null, Sn(m) === c && (P = new P(f, a + "enter", g, t, m), P.target = d, P.relatedTarget = F, h = P), F = h, w && g) n: {
                        for (P = w, f = g, a = 0, d = P; d; d = Mn(d)) a++;
                        for (d = 0, h = f; h; h = Mn(h)) d++;
                        for (; 0 < a - d;) P = Mn(P),
                        a--;
                        for (; 0 < d - a;) f = Mn(f),
                        d--;
                        for (; a--;) {
                            if (P === f || f !== null && P === f.alternate) break n;
                            P = Mn(P), f = Mn(f)
                        }
                        P = null
                    }
                    else P = null;
                    w !== null && ai(y, p, w, P, !1), g !== null && F !== null && ai(y, F, g, P, !0)
                }
            }
            e: {
                if (p = c ? Un(c) : window, w = p.nodeName && p.nodeName.toLowerCase(), w === "select" || w === "input" && p.type === "file") var k = xf;
                else if (ni(p))
                    if ($s) k = Lf;
                    else { k = Nf; var C = Pf }
                else(w = p.nodeName) && w.toLowerCase() === "input" && (p.type === "checkbox" || p.type === "radio") && (k = zf);
                if (k && (k = k(e, c))) { Us(y, k, t, m); break e }
                C && C(e, p, c),
                e === "focusout" && (C = p._wrapperState) && C.controlled && p.type === "number" && eo(p, "number", p.value)
            }
            switch (C = c ? Un(c) : window, e) {
                case "focusin":
                    (ni(C) || C.contentEditable === "true") && (Fn = C, po = c, xt = null);
                    break;
                case "focusout":
                    xt = po = Fn = null;
                    break;
                case "mousedown":
                    mo = !0;
                    break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                    mo = !1, ui(y, t, m);
                    break;
                case "selectionchange":
                    if (Mf) break;
                case "keydown":
                case "keyup":
                    ui(y, t, m)
            }
            var _;
            if (ru) e: {
                switch (e) {
                    case "compositionstart":
                        var x = "onCompositionStart";
                        break e;
                    case "compositionend":
                        x = "onCompositionEnd";
                        break e;
                    case "compositionupdate":
                        x = "onCompositionUpdate";
                        break e
                }
                x = void 0
            }
            else In ? Fs(e, t) && (x = "onCompositionEnd") : e === "keydown" && t.keyCode === 229 && (x = "onCompositionStart");x && (Is && t.locale !== "ko" && (In || x !== "onCompositionStart" ? x === "onCompositionEnd" && In && (_ = Ds()) : (tn = m, eu = "value" in tn ? tn.value : tn.textContent, In = !0)), C = Fr(c, x), 0 < C.length && (x = new Ju(x, e, null, t, m), y.push({ event: x, listeners: C }), _ ? x.data = _ : (_ = js(t), _ !== null && (x.data = _)))),
            (_ = kf ? Sf(e, t) : Ef(e, t)) && (c = Fr(c, "onBeforeInput"), 0 < c.length && (m = new Ju("onBeforeInput", "beforeinput", null, t, m), y.push({ event: m, listeners: c }), m.data = _))
        }
        Gs(y, n)
    })
}

function $t(e, n, t) { return { instance: e, listener: n, currentTarget: t } }

function Fr(e, n) {
    for (var t = n + "Capture", r = []; e !== null;) {
        var l = e,
            o = l.stateNode;
        l.tag === 5 && o !== null && (l = o, o = Mt(e, t), o != null && r.unshift($t(e, o, l)), o = Mt(e, n), o != null && r.push($t(e, o, l))), e = e.return
    }
    return r
}

function Mn(e) {
    if (e === null) return null;
    do e = e.return; while (e && e.tag !== 5);
    return e || null
}

function ai(e, n, t, r, l) {
    for (var o = n._reactName, u = []; t !== null && t !== r;) {
        var i = t,
            s = i.alternate,
            c = i.stateNode;
        if (s !== null && s === r) break;
        i.tag === 5 && c !== null && (i = c, l ? (s = Mt(t, o), s != null && u.unshift($t(t, s, i))) : l || (s = Mt(t, o), s != null && u.push($t(t, s, i)))), t = t.return
    }
    u.length !== 0 && e.push({ event: n, listeners: u })
}
var Ff = /\r\n?/g,
    jf = /\u0000|\uFFFD/g;

function ci(e) { return (typeof e == "string" ? e : "" + e).replace(Ff, `
`).replace(jf, "") }

function cr(e, n, t) { if (n = ci(n), ci(e) !== n && t) throw Error(v(425)) }

function jr() {}
var ho = null,
    vo = null;

function yo(e, n) { return e === "textarea" || e === "noscript" || typeof n.children == "string" || typeof n.children == "number" || typeof n.dangerouslySetInnerHTML == "object" && n.dangerouslySetInnerHTML !== null && n.dangerouslySetInnerHTML.__html != null }
var go = typeof setTimeout == "function" ? setTimeout : void 0,
    Uf = typeof clearTimeout == "function" ? clearTimeout : void 0,
    fi = typeof Promise == "function" ? Promise : void 0,
    $f = typeof queueMicrotask == "function" ? queueMicrotask : typeof fi != "undefined" ? function(e) { return fi.resolve(null).then(e).catch(Vf) } : go;

function Vf(e) { setTimeout(function() { throw e }) }

function Fl(e, n) {
    var t = n,
        r = 0;
    do {
        var l = t.nextSibling;
        if (e.removeChild(t), l && l.nodeType === 8)
            if (t = l.data, t === "/$") {
                if (r === 0) { e.removeChild(l), It(n); return }
                r--
            } else t !== "$" && t !== "$?" && t !== "$!" || r++;
        t = l
    } while (t);
    It(n)
}

function He(e) { for (; e != null; e = e.nextSibling) { var n = e.nodeType; if (n === 1 || n === 3) break; if (n === 8) { if (n = e.data, n === "$" || n === "$!" || n === "$?") break; if (n === "/$") return null } } return e }

function di(e) {
    e = e.previousSibling;
    for (var n = 0; e;) {
        if (e.nodeType === 8) {
            var t = e.data;
            if (t === "$" || t === "$!" || t === "$?") {
                if (n === 0) return e;
                n--
            } else t === "/$" && n++
        }
        e = e.previousSibling
    }
    return null
}
var ot = Math.random().toString(36).slice(2),
    je = "__reactFiber$" + ot,
    Vt = "__reactProps$" + ot,
    Xe = "__reactContainer$" + ot,
    wo = "__reactEvents$" + ot,
    Af = "__reactListeners$" + ot,
    Bf = "__reactHandles$" + ot;

function Sn(e) {
    var n = e[je];
    if (n) return n;
    for (var t = e.parentNode; t;) {
        if (n = t[Xe] || t[je]) {
            if (t = n.alternate, n.child !== null || t !== null && t.child !== null)
                for (e = di(e); e !== null;) {
                    if (t = e[je]) return t;
                    e = di(e)
                }
            return n
        }
        e = t, t = e.parentNode
    }
    return null
}

function Zt(e) { return e = e[je] || e[Xe], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e }

function Un(e) { if (e.tag === 5 || e.tag === 6) return e.stateNode; throw Error(v(33)) }

function ol(e) { return e[Vt] || null }
var ko = [],
    $n = -1;

function hn(e) { return { current: e } }

function I(e) { 0 > $n || (e.current = ko[$n], ko[$n] = null, $n--) }

function O(e, n) { $n++, ko[$n] = e.current, e.current = n }
var dn = {},
    le = hn(dn),
    de = hn(!1),
    xn = dn;

function qn(e, n) {
    var t = e.type.contextTypes;
    if (!t) return dn;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === n) return r.__reactInternalMemoizedMaskedChildContext;
    var l = {},
        o;
    for (o in t) l[o] = n[o];
    return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = n, e.__reactInternalMemoizedMaskedChildContext = l), l
}

function pe(e) { return e = e.childContextTypes, e != null }

function Ur() { I(de), I(le) }

function pi(e, n, t) {
    if (le.current !== dn) throw Error(v(168));
    O(le, n), O(de, t)
}

function Js(e, n, t) {
    var r = e.stateNode;
    if (n = n.childContextTypes, typeof r.getChildContext != "function") return t;
    r = r.getChildContext();
    for (var l in r)
        if (!(l in n)) throw Error(v(108, xc(e) || "Unknown", l));
    return A({}, t, r)
}

function $r(e) { return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || dn, xn = le.current, O(le, e), O(de, de.current), !0 }

function mi(e, n, t) {
    var r = e.stateNode;
    if (!r) throw Error(v(169));
    t ? (e = Js(e, n, xn), r.__reactInternalMemoizedMergedChildContext = e, I(de), I(le), O(le, e)) : I(de), O(de, t)
}
var Ae = null,
    ul = !1,
    jl = !1;

function qs(e) { Ae === null ? Ae = [e] : Ae.push(e) }

function Hf(e) { ul = !0, qs(e) }

function vn() {
    if (!jl && Ae !== null) {
        jl = !0;
        var e = 0,
            n = M;
        try {
            var t = Ae;
            for (M = 1; e < t.length; e++) {
                var r = t[e];
                do r = r(!0); while (r !== null)
            }
            Ae = null, ul = !1
        } catch (l) { throw Ae !== null && (Ae = Ae.slice(e + 1)), Cs(Zo, vn), l } finally { M = n, jl = !1 }
    }
    return null
}
var Wf = Ze.ReactCurrentBatchConfig;

function Le(e, n) { if (e && e.defaultProps) { n = A({}, n), e = e.defaultProps; for (var t in e) n[t] === void 0 && (n[t] = e[t]); return n } return n }
var Vr = hn(null),
    Ar = null,
    Vn = null,
    ou = null;

function uu() { ou = Vn = Ar = null }

function iu(e) {
    var n = Vr.current;
    I(Vr), e._currentValue = n
}

function So(e, n, t) {
    for (; e !== null;) {
        var r = e.alternate;
        if ((e.childLanes & n) !== n ? (e.childLanes |= n, r !== null && (r.childLanes |= n)) : r !== null && (r.childLanes & n) !== n && (r.childLanes |= n), e === t) break;
        e = e.return
    }
}

function Gn(e, n) { Ar = e, ou = Vn = null, e = e.dependencies, e !== null && e.firstContext !== null && ((e.lanes & n) !== 0 && (fe = !0), e.firstContext = null) }

function xe(e) {
    var n = e._currentValue;
    if (ou !== e)
        if (e = { context: e, memoizedValue: n, next: null }, Vn === null) {
            if (Ar === null) throw Error(v(308));
            Vn = e, Ar.dependencies = { lanes: 0, firstContext: e }
        } else Vn = Vn.next = e;
    return n
}
var Me = null,
    be = !1;

function su(e) { e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null } }

function bs(e, n) { e = e.updateQueue, n.updateQueue === e && (n.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects }) }

function Ke(e, n) { return { eventTime: e, lane: n, tag: 0, payload: null, callback: null, next: null } }

function sn(e, n) {
    var t = e.updateQueue;
    t !== null && (t = t.shared, Ba(e) ? (e = t.interleaved, e === null ? (n.next = n, Me === null ? Me = [t] : Me.push(t)) : (n.next = e.next, e.next = n), t.interleaved = n) : (e = t.pending, e === null ? n.next = n : (n.next = e.next, e.next = n), t.pending = n))
}

function Cr(e, n, t) {
    if (n = n.updateQueue, n !== null && (n = n.shared, (t & 4194240) !== 0)) {
        var r = n.lanes;
        r &= e.pendingLanes, t |= r, n.lanes = t, Jo(e, t)
    }
}

function hi(e, n) {
    var t = e.updateQueue,
        r = e.alternate;
    if (r !== null && (r = r.updateQueue, t === r)) {
        var l = null,
            o = null;
        if (t = t.firstBaseUpdate, t !== null) {
            do {
                var u = { eventTime: t.eventTime, lane: t.lane, tag: t.tag, payload: t.payload, callback: t.callback, next: null };
                o === null ? l = o = u : o = o.next = u, t = t.next
            } while (t !== null);
            o === null ? l = o = n : o = o.next = n
        } else l = o = n;
        t = { baseState: r.baseState, firstBaseUpdate: l, lastBaseUpdate: o, shared: r.shared, effects: r.effects }, e.updateQueue = t;
        return
    }
    e = t.lastBaseUpdate, e === null ? t.firstBaseUpdate = n : e.next = n, t.lastBaseUpdate = n
}

function Br(e, n, t, r) {
    var l = e.updateQueue;
    be = !1;
    var o = l.firstBaseUpdate,
        u = l.lastBaseUpdate,
        i = l.shared.pending;
    if (i !== null) {
        l.shared.pending = null;
        var s = i,
            c = s.next;
        s.next = null, u === null ? o = c : u.next = c, u = s;
        var m = e.alternate;
        m !== null && (m = m.updateQueue, i = m.lastBaseUpdate, i !== u && (i === null ? m.firstBaseUpdate = c : i.next = c, m.lastBaseUpdate = s))
    }
    if (o !== null) {
        var y = l.baseState;
        u = 0, m = c = s = null, i = o;
        do {
            var p = i.lane,
                w = i.eventTime;
            if ((r & p) === p) {
                m !== null && (m = m.next = { eventTime: w, lane: 0, tag: i.tag, payload: i.payload, callback: i.callback, next: null });
                e: {
                    var g = e,
                        P = i;
                    switch (p = n, w = t, P.tag) {
                        case 1:
                            if (g = P.payload, typeof g == "function") { y = g.call(w, y, p); break e }
                            y = g;
                            break e;
                        case 3:
                            g.flags = g.flags & -65537 | 128;
                        case 0:
                            if (g = P.payload, p = typeof g == "function" ? g.call(w, y, p) : g, p == null) break e;
                            y = A({}, y, p);
                            break e;
                        case 2:
                            be = !0
                    }
                }
                i.callback !== null && i.lane !== 0 && (e.flags |= 64, p = l.effects, p === null ? l.effects = [i] : p.push(i))
            } else w = { eventTime: w, lane: p, tag: i.tag, payload: i.payload, callback: i.callback, next: null }, m === null ? (c = m = w, s = y) : m = m.next = w, u |= p;
            if (i = i.next, i === null) {
                if (i = l.shared.pending, i === null) break;
                p = i, i = p.next, p.next = null, l.lastBaseUpdate = p, l.shared.pending = null
            }
        } while (1);
        if (m === null && (s = y), l.baseState = s, l.firstBaseUpdate = c, l.lastBaseUpdate = m, n = l.shared.interleaved, n !== null) {
            l = n;
            do u |= l.lane, l = l.next; while (l !== n)
        } else o === null && (l.shared.lanes = 0);
        zn |= u, e.lanes = u, e.memoizedState = y
    }
}

function vi(e, n, t) {
    if (e = n.effects, n.effects = null, e !== null)
        for (n = 0; n < e.length; n++) {
            var r = e[n],
                l = r.callback;
            if (l !== null) {
                if (r.callback = null, r = t, typeof l != "function") throw Error(v(191, l));
                l.call(r)
            }
        }
}
var ea = new ts.Component().refs;

function Eo(e, n, t, r) { n = e.memoizedState, t = t(r, n), t = t == null ? n : A({}, n, t), e.memoizedState = t, e.lanes === 0 && (e.updateQueue.baseState = t) }
var il = {
    isMounted: function(e) { return (e = e._reactInternals) ? Rn(e) === e : !1 },
    enqueueSetState: function(e, n, t) {
        e = e._reactInternals;
        var r = ue(),
            l = cn(e),
            o = Ke(r, l);
        o.payload = n, t != null && (o.callback = t), sn(e, o), n = _e(e, l, r), n !== null && Cr(n, e, l)
    },
    enqueueReplaceState: function(e, n, t) {
        e = e._reactInternals;
        var r = ue(),
            l = cn(e),
            o = Ke(r, l);
        o.tag = 1, o.payload = n, t != null && (o.callback = t), sn(e, o), n = _e(e, l, r), n !== null && Cr(n, e, l)
    },
    enqueueForceUpdate: function(e, n) {
        e = e._reactInternals;
        var t = ue(),
            r = cn(e),
            l = Ke(t, r);
        l.tag = 2, n != null && (l.callback = n), sn(e, l), n = _e(e, r, t), n !== null && Cr(n, e, r)
    }
};

function yi(e, n, t, r, l, o, u) { return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, o, u) : n.prototype && n.prototype.isPureReactComponent ? !jt(t, r) || !jt(l, o) : !0 }

function na(e, n, t) {
    var r = !1,
        l = dn,
        o = n.contextType;
    return typeof o == "object" && o !== null ? o = xe(o) : (l = pe(n) ? xn : le.current, r = n.contextTypes, o = (r = r != null) ? qn(e, l) : dn), n = new n(t, o), e.memoizedState = n.state !== null && n.state !== void 0 ? n.state : null, n.updater = il, e.stateNode = n, n._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = l, e.__reactInternalMemoizedMaskedChildContext = o), n
}

function gi(e, n, t, r) { e = n.state, typeof n.componentWillReceiveProps == "function" && n.componentWillReceiveProps(t, r), typeof n.UNSAFE_componentWillReceiveProps == "function" && n.UNSAFE_componentWillReceiveProps(t, r), n.state !== e && il.enqueueReplaceState(n, n.state, null) }

function Co(e, n, t, r) {
    var l = e.stateNode;
    l.props = t, l.state = e.memoizedState, l.refs = ea, su(e);
    var o = n.contextType;
    typeof o == "object" && o !== null ? l.context = xe(o) : (o = pe(n) ? xn : le.current, l.context = qn(e, o)), l.state = e.memoizedState, o = n.getDerivedStateFromProps, typeof o == "function" && (Eo(e, n, o, t), l.state = e.memoizedState), typeof n.getDerivedStateFromProps == "function" || typeof l.getSnapshotBeforeUpdate == "function" || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (n = l.state, typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(), n !== l.state && il.enqueueReplaceState(l, l.state, null), Br(e, t, l, r), l.state = e.memoizedState), typeof l.componentDidMount == "function" && (e.flags |= 4194308)
}
var An = [],
    Bn = 0,
    Hr = null,
    Wr = 0,
    ke = [],
    Se = 0,
    Pn = null,
    We = 1,
    Qe = "";

function wn(e, n) { An[Bn++] = Wr, An[Bn++] = Hr, Hr = e, Wr = n }

function ta(e, n, t) {
    ke[Se++] = We, ke[Se++] = Qe, ke[Se++] = Pn, Pn = e;
    var r = We;
    e = Qe;
    var l = 32 - Oe(r) - 1;
    r &= ~(1 << l), t += 1;
    var o = 32 - Oe(n) + l;
    if (30 < o) {
        var u = l - l % 5;
        o = (r & (1 << u) - 1).toString(32), r >>= u, l -= u, We = 1 << 32 - Oe(n) + l | t << l | r, Qe = o + e
    } else We = 1 << o | t << l | r, Qe = e
}

function au(e) { e.return !== null && (wn(e, 1), ta(e, 1, 0)) }

function cu(e) { for (; e === Hr;) Hr = An[--Bn], An[Bn] = null, Wr = An[--Bn], An[Bn] = null; for (; e === Pn;) Pn = ke[--Se], ke[Se] = null, Qe = ke[--Se], ke[Se] = null, We = ke[--Se], ke[Se] = null }
var ve = null,
    ce = null,
    j = !1,
    Re = null;

function ra(e, n) {
    var t = Ee(5, null, null, 0);
    t.elementType = "DELETED", t.stateNode = n, t.return = e, n = e.deletions, n === null ? (e.deletions = [t], e.flags |= 16) : n.push(t)
}

function wi(e, n) {
    switch (e.tag) {
        case 5:
            var t = e.type;
            return n = n.nodeType !== 1 || t.toLowerCase() !== n.nodeName.toLowerCase() ? null : n, n !== null ? (e.stateNode = n, ve = e, ce = He(n.firstChild), !0) : !1;
        case 6:
            return n = e.pendingProps === "" || n.nodeType !== 3 ? null : n, n !== null ? (e.stateNode = n, ve = e, ce = null, !0) : !1;
        case 13:
            return n = n.nodeType !== 8 ? null : n, n !== null ? (t = Pn !== null ? { id: We, overflow: Qe } : null, e.memoizedState = { dehydrated: n, treeContext: t, retryLane: 1073741824 }, t = Ee(18, null, null, 0), t.stateNode = n, t.return = e, e.child = t, ve = e, ce = null, !0) : !1;
        default:
            return !1
    }
}

function _o(e) { return (e.mode & 1) !== 0 && (e.flags & 128) === 0 }

function xo(e) {
    if (j) {
        var n = ce;
        if (n) {
            var t = n;
            if (!wi(e, n)) {
                if (_o(e)) throw Error(v(418));
                n = He(t.nextSibling);
                var r = ve;
                n && wi(e, n) ? ra(r, t) : (e.flags = e.flags & -4097 | 2, j = !1, ve = e)
            }
        } else {
            if (_o(e)) throw Error(v(418));
            e.flags = e.flags & -4097 | 2, j = !1, ve = e
        }
    }
}

function ki(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;) e = e.return;
    ve = e
}

function pt(e) {
    if (e !== ve) return !1;
    if (!j) return ki(e), j = !0, !1;
    var n;
    if ((n = e.tag !== 3) && !(n = e.tag !== 5) && (n = e.type, n = n !== "head" && n !== "body" && !yo(e.type, e.memoizedProps)), n && (n = ce)) { if (_o(e)) { for (e = ce; e;) e = He(e.nextSibling); throw Error(v(418)) } for (; n;) ra(e, n), n = He(n.nextSibling) }
    if (ki(e), e.tag === 13) {
        if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(v(317));
        e: {
            for (e = e.nextSibling, n = 0; e;) {
                if (e.nodeType === 8) {
                    var t = e.data;
                    if (t === "/$") {
                        if (n === 0) { ce = He(e.nextSibling); break e }
                        n--
                    } else t !== "$" && t !== "$!" && t !== "$?" || n++
                }
                e = e.nextSibling
            }
            ce = null
        }
    } else ce = ve ? He(e.stateNode.nextSibling) : null;
    return !0
}

function bn() { ce = ve = null, j = !1 }

function fu(e) { Re === null ? Re = [e] : Re.push(e) }

function mt(e, n, t) {
    if (e = t.ref, e !== null && typeof e != "function" && typeof e != "object") {
        if (t._owner) {
            if (t = t._owner, t) { if (t.tag !== 1) throw Error(v(309)); var r = t.stateNode }
            if (!r) throw Error(v(147, e));
            var l = r,
                o = "" + e;
            return n !== null && n.ref !== null && typeof n.ref == "function" && n.ref._stringRef === o ? n.ref : (n = function(u) {
                var i = l.refs;
                i === ea && (i = l.refs = {}), u === null ? delete i[o] : i[o] = u
            }, n._stringRef = o, n)
        }
        if (typeof e != "string") throw Error(v(284));
        if (!t._owner) throw Error(v(290, e))
    }
    return e
}

function fr(e, n) { throw e = Object.prototype.toString.call(n), Error(v(31, e === "[object Object]" ? "object with keys {" + Object.keys(n).join(", ") + "}" : e)) }

function Si(e) { var n = e._init; return n(e._payload) }

function la(e) {
    function n(f, a) {
        if (e) {
            var d = f.deletions;
            d === null ? (f.deletions = [a], f.flags |= 16) : d.push(a)
        }
    }

    function t(f, a) { if (!e) return null; for (; a !== null;) n(f, a), a = a.sibling; return null }

    function r(f, a) { for (f = new Map; a !== null;) a.key !== null ? f.set(a.key, a) : f.set(a.index, a), a = a.sibling; return f }

    function l(f, a) { return f = pn(f, a), f.index = 0, f.sibling = null, f }

    function o(f, a, d) { return f.index = d, e ? (d = f.alternate, d !== null ? (d = d.index, d < a ? (f.flags |= 2, a) : d) : (f.flags |= 2, a)) : (f.flags |= 1048576, a) }

    function u(f) { return e && f.alternate === null && (f.flags |= 2), f }

    function i(f, a, d, h) { return a === null || a.tag !== 6 ? (a = Hl(d, f.mode, h), a.return = f, a) : (a = l(a, d), a.return = f, a) }

    function s(f, a, d, h) { var k = d.type; return k === Dn ? m(f, a, d.props.children, h, d.key) : a !== null && (a.elementType === k || typeof k == "object" && k !== null && k.$$typeof === qe && Si(k) === a.type) ? (h = l(a, d.props), h.ref = mt(f, a, d), h.return = f, h) : (h = zr(d.type, d.key, d.props, null, f.mode, h), h.ref = mt(f, a, d), h.return = f, h) }

    function c(f, a, d, h) { return a === null || a.tag !== 4 || a.stateNode.containerInfo !== d.containerInfo || a.stateNode.implementation !== d.implementation ? (a = Wl(d, f.mode, h), a.return = f, a) : (a = l(a, d.children || []), a.return = f, a) }

    function m(f, a, d, h, k) { return a === null || a.tag !== 7 ? (a = _n(d, f.mode, h, k), a.return = f, a) : (a = l(a, d), a.return = f, a) }

    function y(f, a, d) {
        if (typeof a == "string" && a !== "" || typeof a == "number") return a = Hl("" + a, f.mode, d), a.return = f, a;
        if (typeof a == "object" && a !== null) {
            switch (a.$$typeof) {
                case nr:
                    return d = zr(a.type, a.key, a.props, null, f.mode, d), d.ref = mt(f, null, a), d.return = f, d;
                case On:
                    return a = Wl(a, f.mode, d), a.return = f, a;
                case qe:
                    var h = a._init;
                    return y(f, h(a._payload), d)
            }
            if (gt(a) || st(a)) return a = _n(a, f.mode, d, null), a.return = f, a;
            fr(f, a)
        }
        return null
    }

    function p(f, a, d, h) {
        var k = a !== null ? a.key : null;
        if (typeof d == "string" && d !== "" || typeof d == "number") return k !== null ? null : i(f, a, "" + d, h);
        if (typeof d == "object" && d !== null) {
            switch (d.$$typeof) {
                case nr:
                    return d.key === k ? s(f, a, d, h) : null;
                case On:
                    return d.key === k ? c(f, a, d, h) : null;
                case qe:
                    return k = d._init, p(f, a, k(d._payload), h)
            }
            if (gt(d) || st(d)) return k !== null ? null : m(f, a, d, h, null);
            fr(f, d)
        }
        return null
    }

    function w(f, a, d, h, k) {
        if (typeof h == "string" && h !== "" || typeof h == "number") return f = f.get(d) || null, i(a, f, "" + h, k);
        if (typeof h == "object" && h !== null) {
            switch (h.$$typeof) {
                case nr:
                    return f = f.get(h.key === null ? d : h.key) || null, s(a, f, h, k);
                case On:
                    return f = f.get(h.key === null ? d : h.key) || null, c(a, f, h, k);
                case qe:
                    var C = h._init;
                    return w(f, a, d, C(h._payload), k)
            }
            if (gt(h) || st(h)) return f = f.get(d) || null, m(a, f, h, k, null);
            fr(a, h)
        }
        return null
    }

    function g(f, a, d, h) {
        for (var k = null, C = null, _ = a, x = a = 0, H = null; _ !== null && x < d.length; x++) {
            _.index > x ? (H = _, _ = null) : H = _.sibling;
            var T = p(f, _, d[x], h);
            if (T === null) { _ === null && (_ = H); break }
            e && _ && T.alternate === null && n(f, _), a = o(T, a, x), C === null ? k = T : C.sibling = T, C = T, _ = H
        }
        if (x === d.length) return t(f, _), j && wn(f, x), k;
        if (_ === null) { for (; x < d.length; x++) _ = y(f, d[x], h), _ !== null && (a = o(_, a, x), C === null ? k = _ : C.sibling = _, C = _); return j && wn(f, x), k }
        for (_ = r(f, _); x < d.length; x++) H = w(_, f, x, d[x], h), H !== null && (e && H.alternate !== null && _.delete(H.key === null ? x : H.key), a = o(H, a, x), C === null ? k = H : C.sibling = H, C = H);
        return e && _.forEach(function(Ne) { return n(f, Ne) }), j && wn(f, x), k
    }

    function P(f, a, d, h) {
        var k = st(d);
        if (typeof k != "function") throw Error(v(150));
        if (d = k.call(d), d == null) throw Error(v(151));
        for (var C = k = null, _ = a, x = a = 0, H = null, T = d.next(); _ !== null && !T.done; x++, T = d.next()) {
            _.index > x ? (H = _, _ = null) : H = _.sibling;
            var Ne = p(f, _, T.value, h);
            if (Ne === null) { _ === null && (_ = H); break }
            e && _ && Ne.alternate === null && n(f, _), a = o(Ne, a, x), C === null ? k = Ne : C.sibling = Ne, C = Ne, _ = H
        }
        if (T.done) return t(f, _), j && wn(f, x), k;
        if (_ === null) { for (; !T.done; x++, T = d.next()) T = y(f, T.value, h), T !== null && (a = o(T, a, x), C === null ? k = T : C.sibling = T, C = T); return j && wn(f, x), k }
        for (_ = r(f, _); !T.done; x++, T = d.next()) T = w(_, f, x, T.value, h), T !== null && (e && T.alternate !== null && _.delete(T.key === null ? x : T.key), a = o(T, a, x), C === null ? k = T : C.sibling = T, C = T);
        return e && _.forEach(function(ut) { return n(f, ut) }), j && wn(f, x), k
    }

    function F(f, a, d, h) {
        if (typeof d == "object" && d !== null && d.type === Dn && d.key === null && (d = d.props.children), typeof d == "object" && d !== null) {
            switch (d.$$typeof) {
                case nr:
                    e: {
                        for (var k = d.key, C = a; C !== null;) {
                            if (C.key === k) {
                                if (k = d.type, k === Dn) { if (C.tag === 7) { t(f, C.sibling), a = l(C, d.props.children), a.return = f, f = a; break e } } else if (C.elementType === k || typeof k == "object" && k !== null && k.$$typeof === qe && Si(k) === C.type) { t(f, C.sibling), a = l(C, d.props), a.ref = mt(f, C, d), a.return = f, f = a; break e }
                                t(f, C);
                                break
                            } else n(f, C);
                            C = C.sibling
                        }
                        d.type === Dn ? (a = _n(d.props.children, f.mode, h, d.key), a.return = f, f = a) : (h = zr(d.type, d.key, d.props, null, f.mode, h), h.ref = mt(f, a, d), h.return = f, f = h)
                    }
                    return u(f);
                case On:
                    e: {
                        for (C = d.key; a !== null;) {
                            if (a.key === C)
                                if (a.tag === 4 && a.stateNode.containerInfo === d.containerInfo && a.stateNode.implementation === d.implementation) { t(f, a.sibling), a = l(a, d.children || []), a.return = f, f = a; break e } else { t(f, a); break }
                            else n(f, a);
                            a = a.sibling
                        }
                        a = Wl(d, f.mode, h),
                        a.return = f,
                        f = a
                    }
                    return u(f);
                case qe:
                    return C = d._init, F(f, a, C(d._payload), h)
            }
            if (gt(d)) return g(f, a, d, h);
            if (st(d)) return P(f, a, d, h);
            fr(f, d)
        }
        return typeof d == "string" && d !== "" || typeof d == "number" ? (d = "" + d, a !== null && a.tag === 6 ? (t(f, a.sibling), a = l(a, d), a.return = f, f = a) : (t(f, a), a = Hl(d, f.mode, h), a.return = f, f = a), u(f)) : t(f, a)
    }
    return F
}
var et = la(!0),
    oa = la(!1),
    Jt = {},
    $e = hn(Jt),
    At = hn(Jt),
    Bt = hn(Jt);

function En(e) { if (e === Jt) throw Error(v(174)); return e }

function du(e, n) {
    switch (O(Bt, n), O(At, e), O($e, Jt), e = n.nodeType, e) {
        case 9:
        case 11:
            n = (n = n.documentElement) ? n.namespaceURI : to(null, "");
            break;
        default:
            e = e === 8 ? n.parentNode : n, n = e.namespaceURI || null, e = e.tagName, n = to(n, e)
    }
    I($e), O($e, n)
}

function nt() { I($e), I(At), I(Bt) }

function ua(e) {
    En(Bt.current);
    var n = En($e.current),
        t = to(n, e.type);
    n !== t && (O(At, e), O($e, t))
}

function pu(e) { At.current === e && (I($e), I(At)) }
var U = hn(0);

function Qr(e) {
    for (var n = e; n !== null;) {
        if (n.tag === 13) { var t = n.memoizedState; if (t !== null && (t = t.dehydrated, t === null || t.data === "$?" || t.data === "$!")) return n } else if (n.tag === 19 && n.memoizedProps.revealOrder !== void 0) { if ((n.flags & 128) !== 0) return n } else if (n.child !== null) { n.child.return = n, n = n.child; continue }
        if (n === e) break;
        for (; n.sibling === null;) {
            if (n.return === null || n.return === e) return null;
            n = n.return
        }
        n.sibling.return = n.return, n = n.sibling
    }
    return null
}
var Ul = [];

function mu() {
    for (var e = 0; e < Ul.length; e++) Ul[e]._workInProgressVersionPrimary = null;
    Ul.length = 0
}
var _r = Ze.ReactCurrentDispatcher,
    $l = Ze.ReactCurrentBatchConfig,
    Nn = 0,
    V = null,
    Y = null,
    J = null,
    Kr = !1,
    Pt = !1,
    Ht = 0,
    Qf = 0;

function ne() { throw Error(v(321)) }

function hu(e, n) {
    if (n === null) return !1;
    for (var t = 0; t < n.length && t < e.length; t++)
        if (!De(e[t], n[t])) return !1;
    return !0
}

function vu(e, n, t, r, l, o) {
    if (Nn = o, V = n, n.memoizedState = null, n.updateQueue = null, n.lanes = 0, _r.current = e === null || e.memoizedState === null ? Gf : Zf, e = t(r, l), Pt) {
        o = 0;
        do {
            if (Pt = !1, Ht = 0, 25 <= o) throw Error(v(301));
            o += 1, J = Y = null, n.updateQueue = null, _r.current = Jf, e = t(r, l)
        } while (Pt)
    }
    if (_r.current = Yr, n = Y !== null && Y.next !== null, Nn = 0, J = Y = V = null, Kr = !1, n) throw Error(v(300));
    return e
}

function yu() { var e = Ht !== 0; return Ht = 0, e }

function Fe() { var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null }; return J === null ? V.memoizedState = J = e : J = J.next = e, J }

function Pe() {
    if (Y === null) {
        var e = V.alternate;
        e = e !== null ? e.memoizedState : null
    } else e = Y.next;
    var n = J === null ? V.memoizedState : J.next;
    if (n !== null) J = n, Y = e;
    else {
        if (e === null) throw Error(v(310));
        Y = e, e = { memoizedState: Y.memoizedState, baseState: Y.baseState, baseQueue: Y.baseQueue, queue: Y.queue, next: null }, J === null ? V.memoizedState = J = e : J = J.next = e
    }
    return J
}

function Wt(e, n) { return typeof n == "function" ? n(e) : n }

function Vl(e) {
    var n = Pe(),
        t = n.queue;
    if (t === null) throw Error(v(311));
    t.lastRenderedReducer = e;
    var r = Y,
        l = r.baseQueue,
        o = t.pending;
    if (o !== null) {
        if (l !== null) {
            var u = l.next;
            l.next = o.next, o.next = u
        }
        r.baseQueue = l = o, t.pending = null
    }
    if (l !== null) {
        o = l.next, r = r.baseState;
        var i = u = null,
            s = null,
            c = o;
        do {
            var m = c.lane;
            if ((Nn & m) === m) s !== null && (s = s.next = { lane: 0, action: c.action, hasEagerState: c.hasEagerState, eagerState: c.eagerState, next: null }), r = c.hasEagerState ? c.eagerState : e(r, c.action);
            else {
                var y = { lane: m, action: c.action, hasEagerState: c.hasEagerState, eagerState: c.eagerState, next: null };
                s === null ? (i = s = y, u = r) : s = s.next = y, V.lanes |= m, zn |= m
            }
            c = c.next
        } while (c !== null && c !== o);
        s === null ? u = r : s.next = i, De(r, n.memoizedState) || (fe = !0), n.memoizedState = r, n.baseState = u, n.baseQueue = s, t.lastRenderedState = r
    }
    if (e = t.interleaved, e !== null) {
        l = e;
        do o = l.lane, V.lanes |= o, zn |= o, l = l.next; while (l !== e)
    } else l === null && (t.lanes = 0);
    return [n.memoizedState, t.dispatch]
}

function Al(e) {
    var n = Pe(),
        t = n.queue;
    if (t === null) throw Error(v(311));
    t.lastRenderedReducer = e;
    var r = t.dispatch,
        l = t.pending,
        o = n.memoizedState;
    if (l !== null) {
        t.pending = null;
        var u = l = l.next;
        do o = e(o, u.action), u = u.next; while (u !== l);
        De(o, n.memoizedState) || (fe = !0), n.memoizedState = o, n.baseQueue === null && (n.baseState = o), t.lastRenderedState = o
    }
    return [o, r]
}

function ia() {}

function sa(e, n) {
    var t = V,
        r = Pe(),
        l = n(),
        o = !De(r.memoizedState, l);
    if (o && (r.memoizedState = l, fe = !0), r = r.queue, gu(fa.bind(null, t, r, e), [e]), r.getSnapshot !== n || o || J !== null && J.memoizedState.tag & 1) {
        if (t.flags |= 2048, Qt(9, ca.bind(null, t, r, l, n), void 0, null), G === null) throw Error(v(349));
        (Nn & 30) !== 0 || aa(t, n, l)
    }
    return l
}

function aa(e, n, t) { e.flags |= 16384, e = { getSnapshot: n, value: t }, n = V.updateQueue, n === null ? (n = { lastEffect: null, stores: null }, V.updateQueue = n, n.stores = [e]) : (t = n.stores, t === null ? n.stores = [e] : t.push(e)) }

function ca(e, n, t, r) { n.value = t, n.getSnapshot = r, da(n) && _e(e, 1, -1) }

function fa(e, n, t) { return t(function() { da(n) && _e(e, 1, -1) }) }

function da(e) {
    var n = e.getSnapshot;
    e = e.value;
    try { var t = n(); return !De(e, t) } catch { return !0 }
}

function Ei(e) { var n = Fe(); return typeof e == "function" && (e = e()), n.memoizedState = n.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Wt, lastRenderedState: e }, n.queue = e, e = e.dispatch = Xf.bind(null, V, e), [n.memoizedState, e] }

function Qt(e, n, t, r) { return e = { tag: e, create: n, destroy: t, deps: r, next: null }, n = V.updateQueue, n === null ? (n = { lastEffect: null, stores: null }, V.updateQueue = n, n.lastEffect = e.next = e) : (t = n.lastEffect, t === null ? n.lastEffect = e.next = e : (r = t.next, t.next = e, e.next = r, n.lastEffect = e)), e }

function pa() { return Pe().memoizedState }

function xr(e, n, t, r) {
    var l = Fe();
    V.flags |= e, l.memoizedState = Qt(1 | n, t, void 0, r === void 0 ? null : r)
}

function sl(e, n, t, r) {
    var l = Pe();
    r = r === void 0 ? null : r;
    var o = void 0;
    if (Y !== null) { var u = Y.memoizedState; if (o = u.destroy, r !== null && hu(r, u.deps)) { l.memoizedState = Qt(n, t, o, r); return } }
    V.flags |= e, l.memoizedState = Qt(1 | n, t, o, r)
}

function Ci(e, n) { return xr(8390656, 8, e, n) }

function gu(e, n) { return sl(2048, 8, e, n) }

function ma(e, n) { return sl(4, 2, e, n) }

function ha(e, n) { return sl(4, 4, e, n) }

function va(e, n) {
    if (typeof n == "function") return e = e(), n(e),
        function() { n(null) };
    if (n != null) return e = e(), n.current = e,
        function() { n.current = null }
}

function ya(e, n, t) { return t = t != null ? t.concat([e]) : null, sl(4, 4, va.bind(null, n, e), t) }

function wu() {}

function ga(e, n) {
    var t = Pe();
    n = n === void 0 ? null : n;
    var r = t.memoizedState;
    return r !== null && n !== null && hu(n, r[1]) ? r[0] : (t.memoizedState = [e, n], e)
}

function wa(e, n) {
    var t = Pe();
    n = n === void 0 ? null : n;
    var r = t.memoizedState;
    return r !== null && n !== null && hu(n, r[1]) ? r[0] : (e = e(), t.memoizedState = [e, n], e)
}

function ka(e, n, t) { return (Nn & 21) === 0 ? (e.baseState && (e.baseState = !1, fe = !0), e.memoizedState = t) : (De(t, n) || (t = Ps(), V.lanes |= t, zn |= t, e.baseState = !0), n) }

function Kf(e, n) {
    var t = M;
    M = t !== 0 && 4 > t ? t : 4, e(!0);
    var r = $l.transition;
    $l.transition = {};
    try { e(!1), n() } finally { M = t, $l.transition = r }
}

function Sa() { return Pe().memoizedState }

function Yf(e, n, t) {
    var r = cn(e);
    t = { lane: r, action: t, hasEagerState: !1, eagerState: null, next: null }, Ea(e) ? Ca(n, t) : (_a(e, n, t), t = ue(), e = _e(e, r, t), e !== null && xa(e, n, r))
}

function Xf(e, n, t) {
    var r = cn(e),
        l = { lane: r, action: t, hasEagerState: !1, eagerState: null, next: null };
    if (Ea(e)) Ca(n, l);
    else {
        _a(e, n, l);
        var o = e.alternate;
        if (e.lanes === 0 && (o === null || o.lanes === 0) && (o = n.lastRenderedReducer, o !== null)) try {
            var u = n.lastRenderedState,
                i = o(u, t);
            if (l.hasEagerState = !0, l.eagerState = i, De(i, u)) return
        } catch {} finally {}
        t = ue(), e = _e(e, r, t), e !== null && xa(e, n, r)
    }
}

function Ea(e) { var n = e.alternate; return e === V || n !== null && n === V }

function Ca(e, n) {
    Pt = Kr = !0;
    var t = e.pending;
    t === null ? n.next = n : (n.next = t.next, t.next = n), e.pending = n
}

function _a(e, n, t) { Ba(e) ? (e = n.interleaved, e === null ? (t.next = t, Me === null ? Me = [n] : Me.push(n)) : (t.next = e.next, e.next = t), n.interleaved = t) : (e = n.pending, e === null ? t.next = t : (t.next = e.next, e.next = t), n.pending = t) }

function xa(e, n, t) {
    if ((t & 4194240) !== 0) {
        var r = n.lanes;
        r &= e.pendingLanes, t |= r, n.lanes = t, Jo(e, t)
    }
}
var Yr = { readContext: xe, useCallback: ne, useContext: ne, useEffect: ne, useImperativeHandle: ne, useInsertionEffect: ne, useLayoutEffect: ne, useMemo: ne, useReducer: ne, useRef: ne, useState: ne, useDebugValue: ne, useDeferredValue: ne, useTransition: ne, useMutableSource: ne, useSyncExternalStore: ne, useId: ne, unstable_isNewReconciler: !1 },
    Gf = {
        readContext: xe,
        useCallback: function(e, n) { return Fe().memoizedState = [e, n === void 0 ? null : n], e },
        useContext: xe,
        useEffect: Ci,
        useImperativeHandle: function(e, n, t) { return t = t != null ? t.concat([e]) : null, xr(4194308, 4, va.bind(null, n, e), t) },
        useLayoutEffect: function(e, n) { return xr(4194308, 4, e, n) },
        useInsertionEffect: function(e, n) { return xr(4, 2, e, n) },
        useMemo: function(e, n) { var t = Fe(); return n = n === void 0 ? null : n, e = e(), t.memoizedState = [e, n], e },
        useReducer: function(e, n, t) { var r = Fe(); return n = t !== void 0 ? t(n) : n, r.memoizedState = r.baseState = n, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: n }, r.queue = e, e = e.dispatch = Yf.bind(null, V, e), [r.memoizedState, e] },
        useRef: function(e) { var n = Fe(); return e = { current: e }, n.memoizedState = e },
        useState: Ei,
        useDebugValue: wu,
        useDeferredValue: function(e) { return Fe().memoizedState = e },
        useTransition: function() {
            var e = Ei(!1),
                n = e[0];
            return e = Kf.bind(null, e[1]), Fe().memoizedState = e, [n, e]
        },
        useMutableSource: function() {},
        useSyncExternalStore: function(e, n, t) {
            var r = V,
                l = Fe();
            if (j) {
                if (t === void 0) throw Error(v(407));
                t = t()
            } else {
                if (t = n(), G === null) throw Error(v(349));
                (Nn & 30) !== 0 || aa(r, n, t)
            }
            l.memoizedState = t;
            var o = { value: t, getSnapshot: n };
            return l.queue = o, Ci(fa.bind(null, r, o, e), [e]), r.flags |= 2048, Qt(9, ca.bind(null, r, o, t, n), void 0, null), t
        },
        useId: function() {
            var e = Fe(),
                n = G.identifierPrefix;
            if (j) {
                var t = Qe,
                    r = We;
                t = (r & ~(1 << 32 - Oe(r) - 1)).toString(32) + t, n = ":" + n + "R" + t, t = Ht++, 0 < t && (n += "H" + t.toString(32)), n += ":"
            } else t = Qf++, n = ":" + n + "r" + t.toString(32) + ":";
            return e.memoizedState = n
        },
        unstable_isNewReconciler: !1
    },
    Zf = {
        readContext: xe,
        useCallback: ga,
        useContext: xe,
        useEffect: gu,
        useImperativeHandle: ya,
        useInsertionEffect: ma,
        useLayoutEffect: ha,
        useMemo: wa,
        useReducer: Vl,
        useRef: pa,
        useState: function() { return Vl(Wt) },
        useDebugValue: wu,
        useDeferredValue: function(e) { var n = Pe(); return ka(n, Y.memoizedState, e) },
        useTransition: function() {
            var e = Vl(Wt)[0],
                n = Pe().memoizedState;
            return [e, n]
        },
        useMutableSource: ia,
        useSyncExternalStore: sa,
        useId: Sa,
        unstable_isNewReconciler: !1
    },
    Jf = {
        readContext: xe,
        useCallback: ga,
        useContext: xe,
        useEffect: gu,
        useImperativeHandle: ya,
        useInsertionEffect: ma,
        useLayoutEffect: ha,
        useMemo: wa,
        useReducer: Al,
        useRef: pa,
        useState: function() { return Al(Wt) },
        useDebugValue: wu,
        useDeferredValue: function(e) { var n = Pe(); return Y === null ? n.memoizedState = e : ka(n, Y.memoizedState, e) },
        useTransition: function() {
            var e = Al(Wt)[0],
                n = Pe().memoizedState;
            return [e, n]
        },
        useMutableSource: ia,
        useSyncExternalStore: sa,
        useId: Sa,
        unstable_isNewReconciler: !1
    };

function ku(e, n) {
    try {
        var t = "",
            r = n;
        do t += _c(r), r = r.return; while (r);
        var l = t
    } catch (o) { l = `
Error generating stack: ` + o.message + `
` + o.stack }
    return { value: e, source: n, stack: l }
}

function Po(e, n) { try { console.error(n.value) } catch (t) { setTimeout(function() { throw t }) } }
var qf = typeof WeakMap == "function" ? WeakMap : Map;

function Pa(e, n, t) { t = Ke(-1, t), t.tag = 3, t.payload = { element: null }; var r = n.value; return t.callback = function() { Gr || (Gr = !0, Io = r), Po(e, n) }, t }

function Na(e, n, t) {
    t = Ke(-1, t), t.tag = 3;
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
        var l = n.value;
        t.payload = function() { return r(l) }, t.callback = function() { Po(e, n) }
    }
    var o = e.stateNode;
    return o !== null && typeof o.componentDidCatch == "function" && (t.callback = function() {
        Po(e, n), typeof r != "function" && (an === null ? an = new Set([this]) : an.add(this));
        var u = n.stack;
        this.componentDidCatch(n.value, { componentStack: u !== null ? u : "" })
    }), t
}

function _i(e, n, t) {
    var r = e.pingCache;
    if (r === null) {
        r = e.pingCache = new qf;
        var l = new Set;
        r.set(n, l)
    } else l = r.get(n), l === void 0 && (l = new Set, r.set(n, l));
    l.has(t) || (l.add(t), e = fd.bind(null, e, n, t), n.then(e, e))
}

function xi(e) {
    do {
        var n;
        if ((n = e.tag === 13) && (n = e.memoizedState, n = n !== null ? n.dehydrated !== null : !0), n) return e;
        e = e.return
    } while (e !== null);
    return null
}

function Pi(e, n, t, r, l) { return (e.mode & 1) === 0 ? (e === n ? e.flags |= 65536 : (e.flags |= 128, t.flags |= 131072, t.flags &= -52805, t.tag === 1 && (t.alternate === null ? t.tag = 17 : (n = Ke(-1, 1), n.tag = 2, sn(t, n))), t.lanes |= 1), e) : (e.flags |= 65536, e.lanes = l, e) }
var za, No, La, Ta;
za = function(e, n) {
    for (var t = n.child; t !== null;) {
        if (t.tag === 5 || t.tag === 6) e.appendChild(t.stateNode);
        else if (t.tag !== 4 && t.child !== null) { t.child.return = t, t = t.child; continue }
        if (t === n) break;
        for (; t.sibling === null;) {
            if (t.return === null || t.return === n) return;
            t = t.return
        }
        t.sibling.return = t.return, t = t.sibling
    }
};
No = function() {};
La = function(e, n, t, r) {
    var l = e.memoizedProps;
    if (l !== r) {
        e = n.stateNode, En($e.current);
        var o = null;
        switch (t) {
            case "input":
                l = ql(e, l), r = ql(e, r), o = [];
                break;
            case "select":
                l = A({}, l, { value: void 0 }), r = A({}, r, { value: void 0 }), o = [];
                break;
            case "textarea":
                l = no(e, l), r = no(e, r), o = [];
                break;
            default:
                typeof l.onClick != "function" && typeof r.onClick == "function" && (e.onclick = jr)
        }
        ro(t, r);
        var u;
        t = null;
        for (c in l)
            if (!r.hasOwnProperty(c) && l.hasOwnProperty(c) && l[c] != null)
                if (c === "style") { var i = l[c]; for (u in i) i.hasOwnProperty(u) && (t || (t = {}), t[u] = "") } else c !== "dangerouslySetInnerHTML" && c !== "children" && c !== "suppressContentEditableWarning" && c !== "suppressHydrationWarning" && c !== "autoFocus" && (Tt.hasOwnProperty(c) ? o || (o = []) : (o = o || []).push(c, null));
        for (c in r) {
            var s = r[c];
            if (i = l != null ? l[c] : void 0, r.hasOwnProperty(c) && s !== i && (s != null || i != null))
                if (c === "style")
                    if (i) { for (u in i) !i.hasOwnProperty(u) || s && s.hasOwnProperty(u) || (t || (t = {}), t[u] = ""); for (u in s) s.hasOwnProperty(u) && i[u] !== s[u] && (t || (t = {}), t[u] = s[u]) } else t || (o || (o = []), o.push(c, t)), t = s;
            else c === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, i = i ? i.__html : void 0, s != null && i !== s && (o = o || []).push(c, s)) : c === "children" ? typeof s != "string" && typeof s != "number" || (o = o || []).push(c, "" + s) : c !== "suppressContentEditableWarning" && c !== "suppressHydrationWarning" && (Tt.hasOwnProperty(c) ? (s != null && c === "onScroll" && D("scroll", e), o || i === s || (o = [])) : (o = o || []).push(c, s))
        }
        t && (o = o || []).push("style", t);
        var c = o;
        (n.updateQueue = c) && (n.flags |= 4)
    }
};
Ta = function(e, n, t, r) { t !== r && (n.flags |= 4) };

function ht(e, n) {
    if (!j) switch (e.tailMode) {
        case "hidden":
            n = e.tail;
            for (var t = null; n !== null;) n.alternate !== null && (t = n), n = n.sibling;
            t === null ? e.tail = null : t.sibling = null;
            break;
        case "collapsed":
            t = e.tail;
            for (var r = null; t !== null;) t.alternate !== null && (r = t), t = t.sibling;
            r === null ? n || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null
    }
}

function te(e) {
    var n = e.alternate !== null && e.alternate.child === e.child,
        t = 0,
        r = 0;
    if (n)
        for (var l = e.child; l !== null;) t |= l.lanes | l.childLanes, r |= l.subtreeFlags & 14680064, r |= l.flags & 14680064, l.return = e, l = l.sibling;
    else
        for (l = e.child; l !== null;) t |= l.lanes | l.childLanes, r |= l.subtreeFlags, r |= l.flags, l.return = e, l = l.sibling;
    return e.subtreeFlags |= r, e.childLanes = t, n
}

function bf(e, n, t) {
    var r = n.pendingProps;
    switch (cu(n), n.tag) {
        case 2:
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
            return te(n), null;
        case 1:
            return pe(n.type) && Ur(), te(n), null;
        case 3:
            return r = n.stateNode, nt(), I(de), I(le), mu(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (pt(n) ? n.flags |= 4 : e === null || e.memoizedState.isDehydrated && (n.flags & 256) === 0 || (n.flags |= 1024, Re !== null && (Uo(Re), Re = null))), No(e, n), te(n), null;
        case 5:
            pu(n);
            var l = En(Bt.current);
            if (t = n.type, e !== null && n.stateNode != null) La(e, n, t, r, l), e.ref !== n.ref && (n.flags |= 512, n.flags |= 2097152);
            else {
                if (!r) { if (n.stateNode === null) throw Error(v(166)); return te(n), null }
                if (e = En($e.current), pt(n)) {
                    r = n.stateNode, t = n.type;
                    var o = n.memoizedProps;
                    switch (r[je] = n, r[Vt] = o, e = (n.mode & 1) !== 0, t) {
                        case "dialog":
                            D("cancel", r), D("close", r);
                            break;
                        case "iframe":
                        case "object":
                        case "embed":
                            D("load", r);
                            break;
                        case "video":
                        case "audio":
                            for (l = 0; l < kt.length; l++) D(kt[l], r);
                            break;
                        case "source":
                            D("error", r);
                            break;
                        case "img":
                        case "image":
                        case "link":
                            D("error", r), D("load", r);
                            break;
                        case "details":
                            D("toggle", r);
                            break;
                        case "input":
                            Vu(r, o), D("invalid", r);
                            break;
                        case "select":
                            r._wrapperState = { wasMultiple: !!o.multiple }, D("invalid", r);
                            break;
                        case "textarea":
                            Bu(r, o), D("invalid", r)
                    }
                    ro(t, o), l = null;
                    for (var u in o)
                        if (o.hasOwnProperty(u)) {
                            var i = o[u];
                            u === "children" ? typeof i == "string" ? r.textContent !== i && (o.suppressHydrationWarning !== !0 && cr(r.textContent, i, e), l = ["children", i]) : typeof i == "number" && r.textContent !== "" + i && (o.suppressHydrationWarning !== !0 && cr(r.textContent, i, e), l = ["children", "" + i]) : Tt.hasOwnProperty(u) && i != null && u === "onScroll" && D("scroll", r)
                        }
                    switch (t) {
                        case "input":
                            tr(r), Au(r, o, !0);
                            break;
                        case "textarea":
                            tr(r), Hu(r);
                            break;
                        case "select":
                        case "option":
                            break;
                        default:
                            typeof o.onClick == "function" && (r.onclick = jr)
                    }
                    r = l, n.updateQueue = r, r !== null && (n.flags |= 4)
                } else {
                    u = l.nodeType === 9 ? l : l.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = fs(t)), e === "http://www.w3.org/1999/xhtml" ? t === "script" ? (e = u.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = u.createElement(t, { is: r.is }) : (e = u.createElement(t), t === "select" && (u = e, r.multiple ? u.multiple = !0 : r.size && (u.size = r.size))) : e = u.createElementNS(e, t), e[je] = n, e[Vt] = r, za(e, n, !1, !1), n.stateNode = e;
                    e: {
                        switch (u = lo(t, r), t) {
                            case "dialog":
                                D("cancel", e), D("close", e), l = r;
                                break;
                            case "iframe":
                            case "object":
                            case "embed":
                                D("load", e), l = r;
                                break;
                            case "video":
                            case "audio":
                                for (l = 0; l < kt.length; l++) D(kt[l], e);
                                l = r;
                                break;
                            case "source":
                                D("error", e), l = r;
                                break;
                            case "img":
                            case "image":
                            case "link":
                                D("error", e), D("load", e), l = r;
                                break;
                            case "details":
                                D("toggle", e), l = r;
                                break;
                            case "input":
                                Vu(e, r), l = ql(e, r), D("invalid", e);
                                break;
                            case "option":
                                l = r;
                                break;
                            case "select":
                                e._wrapperState = { wasMultiple: !!r.multiple }, l = A({}, r, { value: void 0 }), D("invalid", e);
                                break;
                            case "textarea":
                                Bu(e, r), l = no(e, r), D("invalid", e);
                                break;
                            default:
                                l = r
                        }
                        ro(t, l),
                        i = l;
                        for (o in i)
                            if (i.hasOwnProperty(o)) {
                                var s = i[o];
                                o === "style" ? ms(e, s) : o === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, s != null && ds(e, s)) : o === "children" ? typeof s == "string" ? (t !== "textarea" || s !== "") && Rt(e, s) : typeof s == "number" && Rt(e, "" + s) : o !== "suppressContentEditableWarning" && o !== "suppressHydrationWarning" && o !== "autoFocus" && (Tt.hasOwnProperty(o) ? s != null && o === "onScroll" && D("scroll", e) : s != null && Qo(e, o, s, u))
                            }
                        switch (t) {
                            case "input":
                                tr(e), Au(e, r, !1);
                                break;
                            case "textarea":
                                tr(e), Hu(e);
                                break;
                            case "option":
                                r.value != null && e.setAttribute("value", "" + fn(r.value));
                                break;
                            case "select":
                                e.multiple = !!r.multiple, o = r.value, o != null ? Qn(e, !!r.multiple, o, !1) : r.defaultValue != null && Qn(e, !!r.multiple, r.defaultValue, !0);
                                break;
                            default:
                                typeof l.onClick == "function" && (e.onclick = jr)
                        }
                        switch (t) {
                            case "button":
                            case "input":
                            case "select":
                            case "textarea":
                                r = !!r.autoFocus;
                                break e;
                            case "img":
                                r = !0;
                                break e;
                            default:
                                r = !1
                        }
                    }
                    r && (n.flags |= 4)
                }
                n.ref !== null && (n.flags |= 512, n.flags |= 2097152)
            }
            return te(n), null;
        case 6:
            if (e && n.stateNode != null) Ta(e, n, e.memoizedProps, r);
            else {
                if (typeof r != "string" && n.stateNode === null) throw Error(v(166));
                if (t = En(Bt.current), En($e.current), pt(n)) {
                    if (r = n.stateNode, t = n.memoizedProps, r[je] = n, (o = r.nodeValue !== t) && (e = ve, e !== null)) switch (e.tag) {
                        case 3:
                            cr(r.nodeValue, t, (e.mode & 1) !== 0);
                            break;
                        case 5:
                            e.memoizedProps.suppressHydrationWarning !== !0 && cr(r.nodeValue, t, (e.mode & 1) !== 0)
                    }
                    o && (n.flags |= 4)
                } else r = (t.nodeType === 9 ? t : t.ownerDocument).createTextNode(r), r[je] = n, n.stateNode = r
            }
            return te(n), null;
        case 13:
            if (I(U), r = n.memoizedState, j && ce !== null && (n.mode & 1) !== 0 && (n.flags & 128) === 0) { for (r = ce; r;) r = He(r.nextSibling); return bn(), n.flags |= 98560, n }
            if (r !== null && r.dehydrated !== null) {
                if (r = pt(n), e === null) {
                    if (!r) throw Error(v(318));
                    if (r = n.memoizedState, r = r !== null ? r.dehydrated : null, !r) throw Error(v(317));
                    r[je] = n
                } else bn(), (n.flags & 128) === 0 && (n.memoizedState = null), n.flags |= 4;
                return te(n), null
            }
            return Re !== null && (Uo(Re), Re = null), (n.flags & 128) !== 0 ? (n.lanes = t, n) : (r = r !== null, t = !1, e === null ? pt(n) : t = e.memoizedState !== null, r !== t && r && (n.child.flags |= 8192, (n.mode & 1) !== 0 && (e === null || (U.current & 1) !== 0 ? X === 0 && (X = 3) : Pu())), n.updateQueue !== null && (n.flags |= 4), te(n), null);
        case 4:
            return nt(), No(e, n), e === null && Ut(n.stateNode.containerInfo), te(n), null;
        case 10:
            return iu(n.type._context), te(n), null;
        case 17:
            return pe(n.type) && Ur(), te(n), null;
        case 19:
            if (I(U), o = n.memoizedState, o === null) return te(n), null;
            if (r = (n.flags & 128) !== 0, u = o.rendering, u === null)
                if (r) ht(o, !1);
                else {
                    if (X !== 0 || e !== null && (e.flags & 128) !== 0)
                        for (e = n.child; e !== null;) {
                            if (u = Qr(e), u !== null) { for (n.flags |= 128, ht(o, !1), r = u.updateQueue, r !== null && (n.updateQueue = r, n.flags |= 4), n.subtreeFlags = 0, r = t, t = n.child; t !== null;) o = t, e = r, o.flags &= 14680066, u = o.alternate, u === null ? (o.childLanes = 0, o.lanes = e, o.child = null, o.subtreeFlags = 0, o.memoizedProps = null, o.memoizedState = null, o.updateQueue = null, o.dependencies = null, o.stateNode = null) : (o.childLanes = u.childLanes, o.lanes = u.lanes, o.child = u.child, o.subtreeFlags = 0, o.deletions = null, o.memoizedProps = u.memoizedProps, o.memoizedState = u.memoizedState, o.updateQueue = u.updateQueue, o.type = u.type, e = u.dependencies, o.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), t = t.sibling; return O(U, U.current & 1 | 2), n.child }
                            e = e.sibling
                        }
                    o.tail !== null && Q() > tt && (n.flags |= 128, r = !0, ht(o, !1), n.lanes = 4194304)
                }
            else {
                if (!r)
                    if (e = Qr(u), e !== null) { if (n.flags |= 128, r = !0, t = e.updateQueue, t !== null && (n.updateQueue = t, n.flags |= 4), ht(o, !0), o.tail === null && o.tailMode === "hidden" && !u.alternate && !j) return te(n), null } else 2 * Q() - o.renderingStartTime > tt && t !== 1073741824 && (n.flags |= 128, r = !0, ht(o, !1), n.lanes = 4194304);
                o.isBackwards ? (u.sibling = n.child, n.child = u) : (t = o.last, t !== null ? t.sibling = u : n.child = u, o.last = u)
            }
            return o.tail !== null ? (n = o.tail, o.rendering = n, o.tail = n.sibling, o.renderingStartTime = Q(), n.sibling = null, t = U.current, O(U, r ? t & 1 | 2 : t & 1), n) : (te(n), null);
        case 22:
        case 23:
            return xu(), r = n.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (n.flags |= 8192), r && (n.mode & 1) !== 0 ? (he & 1073741824) !== 0 && (te(n), n.subtreeFlags & 6 && (n.flags |= 8192)) : te(n), null;
        case 24:
            return null;
        case 25:
            return null
    }
    throw Error(v(156, n.tag))
}
var ed = Ze.ReactCurrentOwner,
    fe = !1;

function oe(e, n, t, r) { n.child = e === null ? oa(n, null, t, r) : et(n, e.child, t, r) }

function Ni(e, n, t, r, l) { t = t.render; var o = n.ref; return Gn(n, l), r = vu(e, n, t, r, o, l), t = yu(), e !== null && !fe ? (n.updateQueue = e.updateQueue, n.flags &= -2053, e.lanes &= ~l, Ge(e, n, l)) : (j && t && au(n), n.flags |= 1, oe(e, n, r, l), n.child) }

function zi(e, n, t, r, l) { if (e === null) { var o = t.type; return typeof o == "function" && !Nu(o) && o.defaultProps === void 0 && t.compare === null && t.defaultProps === void 0 ? (n.tag = 15, n.type = o, Ra(e, n, o, r, l)) : (e = zr(t.type, null, r, n, n.mode, l), e.ref = n.ref, e.return = n, n.child = e) } if (o = e.child, (e.lanes & l) === 0) { var u = o.memoizedProps; if (t = t.compare, t = t !== null ? t : jt, t(u, r) && e.ref === n.ref) return Ge(e, n, l) } return n.flags |= 1, e = pn(o, r), e.ref = n.ref, e.return = n, n.child = e }

function Ra(e, n, t, r, l) {
    if (e !== null) {
        var o = e.memoizedProps;
        if (jt(o, r) && e.ref === n.ref)
            if (fe = !1, n.pendingProps = r = o, (e.lanes & l) !== 0)(e.flags & 131072) !== 0 && (fe = !0);
            else return n.lanes = e.lanes, Ge(e, n, l)
    }
    return zo(e, n, t, r, l)
}

function Ma(e, n, t) {
    var r = n.pendingProps,
        l = r.children,
        o = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
        if ((n.mode & 1) === 0) n.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, O(Wn, he), he |= t;
        else if ((t & 1073741824) !== 0) n.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = o !== null ? o.baseLanes : t, O(Wn, he), he |= r;
    else return e = o !== null ? o.baseLanes | t : t, n.lanes = n.childLanes = 1073741824, n.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, n.updateQueue = null, O(Wn, he), he |= e, null;
    else o !== null ? (r = o.baseLanes | t, n.memoizedState = null) : r = t, O(Wn, he), he |= r;
    return oe(e, n, l, t), n.child
}

function Oa(e, n) {
    var t = n.ref;
    (e === null && t !== null || e !== null && e.ref !== t) && (n.flags |= 512, n.flags |= 2097152)
}

function zo(e, n, t, r, l) { var o = pe(t) ? xn : le.current; return o = qn(n, o), Gn(n, l), t = vu(e, n, t, r, o, l), r = yu(), e !== null && !fe ? (n.updateQueue = e.updateQueue, n.flags &= -2053, e.lanes &= ~l, Ge(e, n, l)) : (j && r && au(n), n.flags |= 1, oe(e, n, t, l), n.child) }

function Li(e, n, t, r, l) {
    if (pe(t)) {
        var o = !0;
        $r(n)
    } else o = !1;
    if (Gn(n, l), n.stateNode === null) e !== null && (e.alternate = null, n.alternate = null, n.flags |= 2), na(n, t, r), Co(n, t, r, l), r = !0;
    else if (e === null) {
        var u = n.stateNode,
            i = n.memoizedProps;
        u.props = i;
        var s = u.context,
            c = t.contextType;
        typeof c == "object" && c !== null ? c = xe(c) : (c = pe(t) ? xn : le.current, c = qn(n, c));
        var m = t.getDerivedStateFromProps,
            y = typeof m == "function" || typeof u.getSnapshotBeforeUpdate == "function";
        y || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (i !== r || s !== c) && gi(n, u, r, c), be = !1;
        var p = n.memoizedState;
        u.state = p, Br(n, r, u, l), s = n.memoizedState, i !== r || p !== s || de.current || be ? (typeof m == "function" && (Eo(n, t, m, r), s = n.memoizedState), (i = be || yi(n, t, i, r, p, s, c)) ? (y || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()), typeof u.componentDidMount == "function" && (n.flags |= 4194308)) : (typeof u.componentDidMount == "function" && (n.flags |= 4194308), n.memoizedProps = r, n.memoizedState = s), u.props = r, u.state = s, u.context = c, r = i) : (typeof u.componentDidMount == "function" && (n.flags |= 4194308), r = !1)
    } else {
        u = n.stateNode, bs(e, n), i = n.memoizedProps, c = n.type === n.elementType ? i : Le(n.type, i), u.props = c, y = n.pendingProps, p = u.context, s = t.contextType, typeof s == "object" && s !== null ? s = xe(s) : (s = pe(t) ? xn : le.current, s = qn(n, s));
        var w = t.getDerivedStateFromProps;
        (m = typeof w == "function" || typeof u.getSnapshotBeforeUpdate == "function") || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (i !== y || p !== s) && gi(n, u, r, s), be = !1, p = n.memoizedState, u.state = p, Br(n, r, u, l);
        var g = n.memoizedState;
        i !== y || p !== g || de.current || be ? (typeof w == "function" && (Eo(n, t, w, r), g = n.memoizedState), (c = be || yi(n, t, c, r, p, g, s) || !1) ? (m || typeof u.UNSAFE_componentWillUpdate != "function" && typeof u.componentWillUpdate != "function" || (typeof u.componentWillUpdate == "function" && u.componentWillUpdate(r, g, s), typeof u.UNSAFE_componentWillUpdate == "function" && u.UNSAFE_componentWillUpdate(r, g, s)), typeof u.componentDidUpdate == "function" && (n.flags |= 4), typeof u.getSnapshotBeforeUpdate == "function" && (n.flags |= 1024)) : (typeof u.componentDidUpdate != "function" || i === e.memoizedProps && p === e.memoizedState || (n.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || i === e.memoizedProps && p === e.memoizedState || (n.flags |= 1024), n.memoizedProps = r, n.memoizedState = g), u.props = r, u.state = g, u.context = s, r = c) : (typeof u.componentDidUpdate != "function" || i === e.memoizedProps && p === e.memoizedState || (n.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || i === e.memoizedProps && p === e.memoizedState || (n.flags |= 1024), r = !1)
    }
    return Lo(e, n, t, r, o, l)
}

function Lo(e, n, t, r, l, o) {
    Oa(e, n);
    var u = (n.flags & 128) !== 0;
    if (!r && !u) return l && mi(n, t, !1), Ge(e, n, o);
    r = n.stateNode, ed.current = n;
    var i = u && typeof t.getDerivedStateFromError != "function" ? null : r.render();
    return n.flags |= 1, e !== null && u ? (n.child = et(n, e.child, null, o), n.child = et(n, null, i, o)) : oe(e, n, i, o), n.memoizedState = r.state, l && mi(n, t, !0), n.child
}

function Da(e) {
    var n = e.stateNode;
    n.pendingContext ? pi(e, n.pendingContext, n.pendingContext !== n.context) : n.context && pi(e, n.context, !1), du(e, n.containerInfo)
}

function Ti(e, n, t, r, l) { return bn(), fu(l), n.flags |= 256, oe(e, n, t, r), n.child }
var dr = { dehydrated: null, treeContext: null, retryLane: 0 };

function pr(e) { return { baseLanes: e, cachePool: null, transitions: null } }

function Ri(e, n) { return { baseLanes: e.baseLanes | n, cachePool: null, transitions: e.transitions } }

function Ia(e, n, t) {
    var r = n.pendingProps,
        l = U.current,
        o = !1,
        u = (n.flags & 128) !== 0,
        i;
    if ((i = u) || (i = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0), i ? (o = !0, n.flags &= -129) : (e === null || e.memoizedState !== null) && (l |= 1), O(U, l & 1), e === null) return xo(n), e = n.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? ((n.mode & 1) === 0 ? n.lanes = 1 : e.data === "$!" ? n.lanes = 8 : n.lanes = 1073741824, null) : (l = r.children, e = r.fallback, o ? (r = n.mode, o = n.child, l = { mode: "hidden", children: l }, (r & 1) === 0 && o !== null ? (o.childLanes = 0, o.pendingProps = l) : o = qr(l, r, 0, null), e = _n(e, r, t, null), o.return = n, e.return = n, o.sibling = e, n.child = o, n.child.memoizedState = pr(t), n.memoizedState = dr, e) : To(n, l));
    if (l = e.memoizedState, l !== null) {
        if (i = l.dehydrated, i !== null) {
            if (u) return n.flags & 256 ? (n.flags &= -257, mr(e, n, t, Error(v(422)))) : n.memoizedState !== null ? (n.child = e.child, n.flags |= 128, null) : (o = r.fallback, l = n.mode, r = qr({ mode: "visible", children: r.children }, l, 0, null), o = _n(o, l, t, null), o.flags |= 2, r.return = n, o.return = n, r.sibling = o, n.child = r, (n.mode & 1) !== 0 && et(n, e.child, null, t), n.child.memoizedState = pr(t), n.memoizedState = dr, o);
            if ((n.mode & 1) === 0) n = mr(e, n, t, null);
            else if (i.data === "$!") n = mr(e, n, t, Error(v(419)));
            else if (r = (t & e.childLanes) !== 0, fe || r) {
                if (r = G, r !== null) {
                    switch (t & -t) {
                        case 4:
                            o = 2;
                            break;
                        case 16:
                            o = 8;
                            break;
                        case 64:
                        case 128:
                        case 256:
                        case 512:
                        case 1024:
                        case 2048:
                        case 4096:
                        case 8192:
                        case 16384:
                        case 32768:
                        case 65536:
                        case 131072:
                        case 262144:
                        case 524288:
                        case 1048576:
                        case 2097152:
                        case 4194304:
                        case 8388608:
                        case 16777216:
                        case 33554432:
                        case 67108864:
                            o = 32;
                            break;
                        case 536870912:
                            o = 268435456;
                            break;
                        default:
                            o = 0
                    }
                    r = (o & (r.suspendedLanes | t)) !== 0 ? 0 : o, r !== 0 && r !== l.retryLane && (l.retryLane = r, _e(e, r, -1))
                }
                Pu(), n = mr(e, n, t, Error(v(421)))
            } else i.data === "$?" ? (n.flags |= 128, n.child = e.child, n = dd.bind(null, e), i._reactRetry = n, n = null) : (t = l.treeContext, ce = He(i.nextSibling), ve = n, j = !0, Re = null, t !== null && (ke[Se++] = We, ke[Se++] = Qe, ke[Se++] = Pn, We = t.id, Qe = t.overflow, Pn = n), n = To(n, n.pendingProps.children), n.flags |= 4096);
            return n
        }
        return o ? (r = Oi(e, n, r.children, r.fallback, t), o = n.child, l = e.child.memoizedState, o.memoizedState = l === null ? pr(t) : Ri(l, t), o.childLanes = e.childLanes & ~t, n.memoizedState = dr, r) : (t = Mi(e, n, r.children, t), n.memoizedState = null, t)
    }
    return o ? (r = Oi(e, n, r.children, r.fallback, t), o = n.child, l = e.child.memoizedState, o.memoizedState = l === null ? pr(t) : Ri(l, t), o.childLanes = e.childLanes & ~t, n.memoizedState = dr, r) : (t = Mi(e, n, r.children, t), n.memoizedState = null, t)
}

function To(e, n) { return n = qr({ mode: "visible", children: n }, e.mode, 0, null), n.return = e, e.child = n }

function Mi(e, n, t, r) { var l = e.child; return e = l.sibling, t = pn(l, { mode: "visible", children: t }), (n.mode & 1) === 0 && (t.lanes = r), t.return = n, t.sibling = null, e !== null && (r = n.deletions, r === null ? (n.deletions = [e], n.flags |= 16) : r.push(e)), n.child = t }

function Oi(e, n, t, r, l) {
    var o = n.mode;
    e = e.child;
    var u = e.sibling,
        i = { mode: "hidden", children: t };
    return (o & 1) === 0 && n.child !== e ? (t = n.child, t.childLanes = 0, t.pendingProps = i, n.deletions = null) : (t = pn(e, i), t.subtreeFlags = e.subtreeFlags & 14680064), u !== null ? r = pn(u, r) : (r = _n(r, o, l, null), r.flags |= 2), r.return = n, t.return = n, t.sibling = r, n.child = t, r
}

function mr(e, n, t, r) { return r !== null && fu(r), et(n, e.child, null, t), e = To(n, n.pendingProps.children), e.flags |= 2, n.memoizedState = null, e }

function Di(e, n, t) {
    e.lanes |= n;
    var r = e.alternate;
    r !== null && (r.lanes |= n), So(e.return, n, t)
}

function Bl(e, n, t, r, l) {
    var o = e.memoizedState;
    o === null ? e.memoizedState = { isBackwards: n, rendering: null, renderingStartTime: 0, last: r, tail: t, tailMode: l } : (o.isBackwards = n, o.rendering = null, o.renderingStartTime = 0, o.last = r, o.tail = t, o.tailMode = l)
}

function Fa(e, n, t) {
    var r = n.pendingProps,
        l = r.revealOrder,
        o = r.tail;
    if (oe(e, n, r.children, t), r = U.current, (r & 2) !== 0) r = r & 1 | 2, n.flags |= 128;
    else {
        if (e !== null && (e.flags & 128) !== 0) e: for (e = n.child; e !== null;) {
            if (e.tag === 13) e.memoizedState !== null && Di(e, t, n);
            else if (e.tag === 19) Di(e, t, n);
            else if (e.child !== null) { e.child.return = e, e = e.child; continue }
            if (e === n) break e;
            for (; e.sibling === null;) {
                if (e.return === null || e.return === n) break e;
                e = e.return
            }
            e.sibling.return = e.return, e = e.sibling
        }
        r &= 1
    }
    if (O(U, r), (n.mode & 1) === 0) n.memoizedState = null;
    else switch (l) {
        case "forwards":
            for (t = n.child, l = null; t !== null;) e = t.alternate, e !== null && Qr(e) === null && (l = t), t = t.sibling;
            t = l, t === null ? (l = n.child, n.child = null) : (l = t.sibling, t.sibling = null), Bl(n, !1, l, t, o);
            break;
        case "backwards":
            for (t = null, l = n.child, n.child = null; l !== null;) {
                if (e = l.alternate, e !== null && Qr(e) === null) { n.child = l; break }
                e = l.sibling, l.sibling = t, t = l, l = e
            }
            Bl(n, !0, t, null, o);
            break;
        case "together":
            Bl(n, !1, null, null, void 0);
            break;
        default:
            n.memoizedState = null
    }
    return n.child
}

function Ge(e, n, t) {
    if (e !== null && (n.dependencies = e.dependencies), zn |= n.lanes, (t & n.childLanes) === 0) return null;
    if (e !== null && n.child !== e.child) throw Error(v(153));
    if (n.child !== null) {
        for (e = n.child, t = pn(e, e.pendingProps), n.child = t, t.return = n; e.sibling !== null;) e = e.sibling, t = t.sibling = pn(e, e.pendingProps), t.return = n;
        t.sibling = null
    }
    return n.child
}

function nd(e, n, t) {
    switch (n.tag) {
        case 3:
            Da(n), bn();
            break;
        case 5:
            ua(n);
            break;
        case 1:
            pe(n.type) && $r(n);
            break;
        case 4:
            du(n, n.stateNode.containerInfo);
            break;
        case 10:
            var r = n.type._context,
                l = n.memoizedProps.value;
            O(Vr, r._currentValue), r._currentValue = l;
            break;
        case 13:
            if (r = n.memoizedState, r !== null) return r.dehydrated !== null ? (O(U, U.current & 1), n.flags |= 128, null) : (t & n.child.childLanes) !== 0 ? Ia(e, n, t) : (O(U, U.current & 1), e = Ge(e, n, t), e !== null ? e.sibling : null);
            O(U, U.current & 1);
            break;
        case 19:
            if (r = (t & n.childLanes) !== 0, (e.flags & 128) !== 0) {
                if (r) return Fa(e, n, t);
                n.flags |= 128
            }
            if (l = n.memoizedState, l !== null && (l.rendering = null, l.tail = null, l.lastEffect = null), O(U, U.current), r) break;
            return null;
        case 22:
        case 23:
            return n.lanes = 0, Ma(e, n, t)
    }
    return Ge(e, n, t)
}

function td(e, n) {
    switch (cu(n), n.tag) {
        case 1:
            return pe(n.type) && Ur(), e = n.flags, e & 65536 ? (n.flags = e & -65537 | 128, n) : null;
        case 3:
            return nt(), I(de), I(le), mu(), e = n.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (n.flags = e & -65537 | 128, n) : null;
        case 5:
            return pu(n), null;
        case 13:
            if (I(U), e = n.memoizedState, e !== null && e.dehydrated !== null) {
                if (n.alternate === null) throw Error(v(340));
                bn()
            }
            return e = n.flags, e & 65536 ? (n.flags = e & -65537 | 128, n) : null;
        case 19:
            return I(U), null;
        case 4:
            return nt(), null;
        case 10:
            return iu(n.type._context), null;
        case 22:
        case 23:
            return xu(), null;
        case 24:
            return null;
        default:
            return null
    }
}
var hr = !1,
    re = !1,
    rd = typeof WeakSet == "function" ? WeakSet : Set,
    S = null;

function Hn(e, n) {
    var t = e.ref;
    if (t !== null)
        if (typeof t == "function") try { t(null) } catch (r) { B(e, n, r) } else t.current = null
}

function Ro(e, n, t) { try { t() } catch (r) { B(e, n, r) } }
var Ii = !1;

function ld(e, n) {
    if (ho = Dr, e = Bs(), lu(e)) {
        if ("selectionStart" in e) var t = { start: e.selectionStart, end: e.selectionEnd };
        else e: {
            t = (t = e.ownerDocument) && t.defaultView || window;
            var r = t.getSelection && t.getSelection();
            if (r && r.rangeCount !== 0) {
                t = r.anchorNode;
                var l = r.anchorOffset,
                    o = r.focusNode;
                r = r.focusOffset;
                try { t.nodeType, o.nodeType } catch { t = null; break e }
                var u = 0,
                    i = -1,
                    s = -1,
                    c = 0,
                    m = 0,
                    y = e,
                    p = null;
                n: for (;;) {
                    for (var w; y !== t || l !== 0 && y.nodeType !== 3 || (i = u + l), y !== o || r !== 0 && y.nodeType !== 3 || (s = u + r), y.nodeType === 3 && (u += y.nodeValue.length), (w = y.firstChild) !== null;) p = y, y = w;
                    for (;;) {
                        if (y === e) break n;
                        if (p === t && ++c === l && (i = u), p === o && ++m === r && (s = u), (w = y.nextSibling) !== null) break;
                        y = p, p = y.parentNode
                    }
                    y = w
                }
                t = i === -1 || s === -1 ? null : { start: i, end: s }
            } else t = null
        }
        t = t || { start: 0, end: 0 }
    } else t = null;
    for (vo = { focusedElem: e, selectionRange: t }, Dr = !1, S = n; S !== null;)
        if (n = S, e = n.child, (n.subtreeFlags & 1028) !== 0 && e !== null) e.return = n, S = e;
        else
            for (; S !== null;) {
                n = S;
                try {
                    var g = n.alternate;
                    if ((n.flags & 1024) !== 0) switch (n.tag) {
                        case 0:
                        case 11:
                        case 15:
                            break;
                        case 1:
                            if (g !== null) {
                                var P = g.memoizedProps,
                                    F = g.memoizedState,
                                    f = n.stateNode,
                                    a = f.getSnapshotBeforeUpdate(n.elementType === n.type ? P : Le(n.type, P), F);
                                f.__reactInternalSnapshotBeforeUpdate = a
                            }
                            break;
                        case 3:
                            var d = n.stateNode.containerInfo;
                            if (d.nodeType === 1) d.textContent = "";
                            else if (d.nodeType === 9) {
                                var h = d.body;
                                h != null && (h.textContent = "")
                            }
                            break;
                        case 5:
                        case 6:
                        case 4:
                        case 17:
                            break;
                        default:
                            throw Error(v(163))
                    }
                } catch (k) { B(n, n.return, k) }
                if (e = n.sibling, e !== null) { e.return = n.return, S = e; break }
                S = n.return
            }
    return g = Ii, Ii = !1, g
}

function Nt(e, n, t) {
    var r = n.updateQueue;
    if (r = r !== null ? r.lastEffect : null, r !== null) {
        var l = r = r.next;
        do {
            if ((l.tag & e) === e) {
                var o = l.destroy;
                l.destroy = void 0, o !== void 0 && Ro(n, t, o)
            }
            l = l.next
        } while (l !== r)
    }
}

function al(e, n) {
    if (n = n.updateQueue, n = n !== null ? n.lastEffect : null, n !== null) {
        var t = n = n.next;
        do {
            if ((t.tag & e) === e) {
                var r = t.create;
                t.destroy = r()
            }
            t = t.next
        } while (t !== n)
    }
}

function Mo(e) {
    var n = e.ref;
    if (n !== null) {
        var t = e.stateNode;
        switch (e.tag) {
            case 5:
                e = t;
                break;
            default:
                e = t
        }
        typeof n == "function" ? n(e) : n.current = e
    }
}

function ja(e) {
    var n = e.alternate;
    n !== null && (e.alternate = null, ja(n)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (n = e.stateNode, n !== null && (delete n[je], delete n[Vt], delete n[wo], delete n[Af], delete n[Bf])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null
}

function Ua(e) { return e.tag === 5 || e.tag === 3 || e.tag === 4 }

function Fi(e) {
    e: for (;;) {
        for (; e.sibling === null;) {
            if (e.return === null || Ua(e.return)) return null;
            e = e.return
        }
        for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18;) {
            if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
            e.child.return = e, e = e.child
        }
        if (!(e.flags & 2)) return e.stateNode
    }
}

function Oo(e, n, t) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, n ? t.nodeType === 8 ? t.parentNode.insertBefore(e, n) : t.insertBefore(e, n) : (t.nodeType === 8 ? (n = t.parentNode, n.insertBefore(e, t)) : (n = t, n.appendChild(e)), t = t._reactRootContainer, t != null || n.onclick !== null || (n.onclick = jr));
    else if (r !== 4 && (e = e.child, e !== null))
        for (Oo(e, n, t), e = e.sibling; e !== null;) Oo(e, n, t), e = e.sibling
}

function Do(e, n, t) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, n ? t.insertBefore(e, n) : t.appendChild(e);
    else if (r !== 4 && (e = e.child, e !== null))
        for (Do(e, n, t), e = e.sibling; e !== null;) Do(e, n, t), e = e.sibling
}
var q = null,
    Te = !1;

function Je(e, n, t) { for (t = t.child; t !== null;) $a(e, n, t), t = t.sibling }

function $a(e, n, t) {
    if (Ue && typeof Ue.onCommitFiberUnmount == "function") try { Ue.onCommitFiberUnmount(nl, t) } catch {}
    switch (t.tag) {
        case 5:
            re || Hn(t, n);
        case 6:
            var r = q,
                l = Te;
            q = null, Je(e, n, t), q = r, Te = l, q !== null && (Te ? (e = q, t = t.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(t) : e.removeChild(t)) : q.removeChild(t.stateNode));
            break;
        case 18:
            q !== null && (Te ? (e = q, t = t.stateNode, e.nodeType === 8 ? Fl(e.parentNode, t) : e.nodeType === 1 && Fl(e, t), It(e)) : Fl(q, t.stateNode));
            break;
        case 4:
            r = q, l = Te, q = t.stateNode.containerInfo, Te = !0, Je(e, n, t), q = r, Te = l;
            break;
        case 0:
        case 11:
        case 14:
        case 15:
            if (!re && (r = t.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
                l = r = r.next;
                do {
                    var o = l,
                        u = o.destroy;
                    o = o.tag, u !== void 0 && ((o & 2) !== 0 || (o & 4) !== 0) && Ro(t, n, u), l = l.next
                } while (l !== r)
            }
            Je(e, n, t);
            break;
        case 1:
            if (!re && (Hn(t, n), r = t.stateNode, typeof r.componentWillUnmount == "function")) try { r.props = t.memoizedProps, r.state = t.memoizedState, r.componentWillUnmount() } catch (i) { B(t, n, i) }
            Je(e, n, t);
            break;
        case 21:
            Je(e, n, t);
            break;
        case 22:
            t.mode & 1 ? (re = (r = re) || t.memoizedState !== null, Je(e, n, t), re = r) : Je(e, n, t);
            break;
        default:
            Je(e, n, t)
    }
}

function ji(e) {
    var n = e.updateQueue;
    if (n !== null) {
        e.updateQueue = null;
        var t = e.stateNode;
        t === null && (t = e.stateNode = new rd), n.forEach(function(r) {
            var l = pd.bind(null, e, r);
            t.has(r) || (t.add(r), r.then(l, l))
        })
    }
}

function ze(e, n) {
    var t = n.deletions;
    if (t !== null)
        for (var r = 0; r < t.length; r++) {
            var l = t[r];
            try {
                var o = e,
                    u = n,
                    i = u;
                e: for (; i !== null;) {
                    switch (i.tag) {
                        case 5:
                            q = i.stateNode, Te = !1;
                            break e;
                        case 3:
                            q = i.stateNode.containerInfo, Te = !0;
                            break e;
                        case 4:
                            q = i.stateNode.containerInfo, Te = !0;
                            break e
                    }
                    i = i.return
                }
                if (q === null) throw Error(v(160));
                $a(o, u, l), q = null, Te = !1;
                var s = l.alternate;
                s !== null && (s.return = null), l.return = null
            } catch (c) { B(l, n, c) }
        }
    if (n.subtreeFlags & 12854)
        for (n = n.child; n !== null;) Va(n, e), n = n.sibling
}

function Va(e, n) {
    var t = e.alternate,
        r = e.flags;
    switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
            if (ze(n, e), Ie(e), r & 4) { try { Nt(3, e, e.return), al(3, e) } catch (g) { B(e, e.return, g) } try { Nt(5, e, e.return) } catch (g) { B(e, e.return, g) } }
            break;
        case 1:
            ze(n, e), Ie(e), r & 512 && t !== null && Hn(t, t.return);
            break;
        case 5:
            if (ze(n, e), Ie(e), r & 512 && t !== null && Hn(t, t.return), e.flags & 32) { var l = e.stateNode; try { Rt(l, "") } catch (g) { B(e, e.return, g) } }
            if (r & 4 && (l = e.stateNode, l != null)) {
                var o = e.memoizedProps,
                    u = t !== null ? t.memoizedProps : o,
                    i = e.type,
                    s = e.updateQueue;
                if (e.updateQueue = null, s !== null) try {
                    i === "input" && o.type === "radio" && o.name != null && as(l, o), lo(i, u);
                    var c = lo(i, o);
                    for (u = 0; u < s.length; u += 2) {
                        var m = s[u],
                            y = s[u + 1];
                        m === "style" ? ms(l, y) : m === "dangerouslySetInnerHTML" ? ds(l, y) : m === "children" ? Rt(l, y) : Qo(l, m, y, c)
                    }
                    switch (i) {
                        case "input":
                            bl(l, o);
                            break;
                        case "textarea":
                            cs(l, o);
                            break;
                        case "select":
                            var p = l._wrapperState.wasMultiple;
                            l._wrapperState.wasMultiple = !!o.multiple;
                            var w = o.value;
                            w != null ? Qn(l, !!o.multiple, w, !1) : p !== !!o.multiple && (o.defaultValue != null ? Qn(l, !!o.multiple, o.defaultValue, !0) : Qn(l, !!o.multiple, o.multiple ? [] : "", !1))
                    }
                    l[Vt] = o
                } catch (g) { B(e, e.return, g) }
            }
            break;
        case 6:
            if (ze(n, e), Ie(e), r & 4) {
                if (e.stateNode === null) throw Error(v(162));
                c = e.stateNode, m = e.memoizedProps;
                try { c.nodeValue = m } catch (g) { B(e, e.return, g) }
            }
            break;
        case 3:
            if (ze(n, e), Ie(e), r & 4 && t !== null && t.memoizedState.isDehydrated) try { It(n.containerInfo) } catch (g) { B(e, e.return, g) }
            break;
        case 4:
            ze(n, e), Ie(e);
            break;
        case 13:
            ze(n, e), Ie(e), c = e.child, c.flags & 8192 && c.memoizedState !== null && (c.alternate === null || c.alternate.memoizedState === null) && (Cu = Q()), r & 4 && ji(e);
            break;
        case 22:
            if (c = t !== null && t.memoizedState !== null, e.mode & 1 ? (re = (m = re) || c, ze(n, e), re = m) : ze(n, e), Ie(e), r & 8192) {
                m = e.memoizedState !== null;
                e: for (y = null, p = e;;) {
                    if (p.tag === 5) { if (y === null) { y = p; try { l = p.stateNode, m ? (o = l.style, typeof o.setProperty == "function" ? o.setProperty("display", "none", "important") : o.display = "none") : (i = p.stateNode, s = p.memoizedProps.style, u = s != null && s.hasOwnProperty("display") ? s.display : null, i.style.display = ps("display", u)) } catch (g) { B(e, e.return, g) } } } else if (p.tag === 6) { if (y === null) try { p.stateNode.nodeValue = m ? "" : p.memoizedProps } catch (g) { B(e, e.return, g) } } else if ((p.tag !== 22 && p.tag !== 23 || p.memoizedState === null || p === e) && p.child !== null) { p.child.return = p, p = p.child; continue }
                    if (p === e) break e;
                    for (; p.sibling === null;) {
                        if (p.return === null || p.return === e) break e;
                        y === p && (y = null), p = p.return
                    }
                    y === p && (y = null), p.sibling.return = p.return, p = p.sibling
                }
                if (m && !c && (e.mode & 1) !== 0)
                    for (S = e, e = e.child; e !== null;) {
                        for (c = S = e; S !== null;) {
                            switch (m = S, y = m.child, m.tag) {
                                case 0:
                                case 11:
                                case 14:
                                case 15:
                                    Nt(4, m, m.return);
                                    break;
                                case 1:
                                    if (Hn(m, m.return), o = m.stateNode, typeof o.componentWillUnmount == "function") { p = m, w = m.return; try { l = p, o.props = l.memoizedProps, o.state = l.memoizedState, o.componentWillUnmount() } catch (g) { B(p, w, g) } }
                                    break;
                                case 5:
                                    Hn(m, m.return);
                                    break;
                                case 22:
                                    if (m.memoizedState !== null) { $i(c); continue }
                            }
                            y !== null ? (y.return = m, S = y) : $i(c)
                        }
                        e = e.sibling
                    }
            }
            break;
        case 19:
            ze(n, e), Ie(e), r & 4 && ji(e);
            break;
        case 21:
            break;
        default:
            ze(n, e), Ie(e)
    }
}

function Ie(e) {
    var n = e.flags;
    if (n & 2) {
        try {
            e: {
                for (var t = e.return; t !== null;) {
                    if (Ua(t)) { var r = t; break e }
                    t = t.return
                }
                throw Error(v(160))
            }
            switch (r.tag) {
                case 5:
                    var l = r.stateNode;
                    r.flags & 32 && (Rt(l, ""), r.flags &= -33);
                    var o = Fi(e);
                    Do(e, o, l);
                    break;
                case 3:
                case 4:
                    var u = r.stateNode.containerInfo,
                        i = Fi(e);
                    Oo(e, i, u);
                    break;
                default:
                    throw Error(v(161))
            }
        }
        catch (s) { B(e, e.return, s) }
        e.flags &= -3
    }
    n & 4096 && (e.flags &= -4097)
}

function od(e, n, t) { S = e, Aa(e) }

function Aa(e, n, t) {
    for (var r = (e.mode & 1) !== 0; S !== null;) {
        var l = S,
            o = l.child;
        if (l.tag === 22 && r) {
            var u = l.memoizedState !== null || hr;
            if (!u) {
                var i = l.alternate,
                    s = i !== null && i.memoizedState !== null || re;
                i = hr;
                var c = re;
                if (hr = u, (re = s) && !c)
                    for (S = l; S !== null;) u = S, s = u.child, u.tag === 22 && u.memoizedState !== null ? Vi(l) : s !== null ? (s.return = u, S = s) : Vi(l);
                for (; o !== null;) S = o, Aa(o), o = o.sibling;
                S = l, hr = i, re = c
            }
            Ui(e)
        } else(l.subtreeFlags & 8772) !== 0 && o !== null ? (o.return = l, S = o) : Ui(e)
    }
}

function Ui(e) {
    for (; S !== null;) {
        var n = S;
        if ((n.flags & 8772) !== 0) {
            var t = n.alternate;
            try {
                if ((n.flags & 8772) !== 0) switch (n.tag) {
                    case 0:
                    case 11:
                    case 15:
                        re || al(5, n);
                        break;
                    case 1:
                        var r = n.stateNode;
                        if (n.flags & 4 && !re)
                            if (t === null) r.componentDidMount();
                            else {
                                var l = n.elementType === n.type ? t.memoizedProps : Le(n.type, t.memoizedProps);
                                r.componentDidUpdate(l, t.memoizedState, r.__reactInternalSnapshotBeforeUpdate)
                            }
                        var o = n.updateQueue;
                        o !== null && vi(n, o, r);
                        break;
                    case 3:
                        var u = n.updateQueue;
                        if (u !== null) {
                            if (t = null, n.child !== null) switch (n.child.tag) {
                                case 5:
                                    t = n.child.stateNode;
                                    break;
                                case 1:
                                    t = n.child.stateNode
                            }
                            vi(n, u, t)
                        }
                        break;
                    case 5:
                        var i = n.stateNode;
                        if (t === null && n.flags & 4) {
                            t = i;
                            var s = n.memoizedProps;
                            switch (n.type) {
                                case "button":
                                case "input":
                                case "select":
                                case "textarea":
                                    s.autoFocus && t.focus();
                                    break;
                                case "img":
                                    s.src && (t.src = s.src)
                            }
                        }
                        break;
                    case 6:
                        break;
                    case 4:
                        break;
                    case 12:
                        break;
                    case 13:
                        if (n.memoizedState === null) {
                            var c = n.alternate;
                            if (c !== null) {
                                var m = c.memoizedState;
                                if (m !== null) {
                                    var y = m.dehydrated;
                                    y !== null && It(y)
                                }
                            }
                        }
                        break;
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                        break;
                    default:
                        throw Error(v(163))
                }
                re || n.flags & 512 && Mo(n)
            } catch (p) { B(n, n.return, p) }
        }
        if (n === e) { S = null; break }
        if (t = n.sibling, t !== null) { t.return = n.return, S = t; break }
        S = n.return
    }
}

function $i(e) {
    for (; S !== null;) {
        var n = S;
        if (n === e) { S = null; break }
        var t = n.sibling;
        if (t !== null) { t.return = n.return, S = t; break }
        S = n.return
    }
}

function Vi(e) {
    for (; S !== null;) {
        var n = S;
        try {
            switch (n.tag) {
                case 0:
                case 11:
                case 15:
                    var t = n.return;
                    try { al(4, n) } catch (s) { B(n, t, s) }
                    break;
                case 1:
                    var r = n.stateNode;
                    if (typeof r.componentDidMount == "function") { var l = n.return; try { r.componentDidMount() } catch (s) { B(n, l, s) } }
                    var o = n.return;
                    try { Mo(n) } catch (s) { B(n, o, s) }
                    break;
                case 5:
                    var u = n.return;
                    try { Mo(n) } catch (s) { B(n, u, s) }
            }
        } catch (s) { B(n, n.return, s) }
        if (n === e) { S = null; break }
        var i = n.sibling;
        if (i !== null) { i.return = n.return, S = i; break }
        S = n.return
    }
}
var ud = Math.ceil,
    Xr = Ze.ReactCurrentDispatcher,
    Su = Ze.ReactCurrentOwner,
    Ce = Ze.ReactCurrentBatchConfig,
    R = 0,
    G = null,
    K = null,
    b = 0,
    he = 0,
    Wn = hn(0),
    X = 0,
    Kt = null,
    zn = 0,
    cl = 0,
    Eu = 0,
    zt = null,
    ae = null,
    Cu = 0,
    tt = 1 / 0,
    Ve = null,
    Gr = !1,
    Io = null,
    an = null,
    vr = !1,
    rn = null,
    Zr = 0,
    Lt = 0,
    Fo = null,
    Pr = -1,
    Nr = 0;

function ue() { return (R & 6) !== 0 ? Q() : Pr !== -1 ? Pr : Pr = Q() }

function cn(e) { return (e.mode & 1) === 0 ? 1 : (R & 2) !== 0 && b !== 0 ? b & -b : Wf.transition !== null ? (Nr === 0 && (Nr = Ps()), Nr) : (e = M, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Os(e.type)), e) }

function _e(e, n, t) { if (50 < Lt) throw Lt = 0, Fo = null, Error(v(185)); var r = fl(e, n); return r === null ? null : (Xt(r, n, t), ((R & 2) === 0 || r !== G) && (r === G && ((R & 2) === 0 && (cl |= n), X === 4 && nn(r, b)), me(r, t), n === 1 && R === 0 && (e.mode & 1) === 0 && (tt = Q() + 500, ul && vn())), r) }

function fl(e, n) { e.lanes |= n; var t = e.alternate; for (t !== null && (t.lanes |= n), t = e, e = e.return; e !== null;) e.childLanes |= n, t = e.alternate, t !== null && (t.childLanes |= n), t = e, e = e.return; return t.tag === 3 ? t.stateNode : null }

function Ba(e) { return (G !== null || Me !== null) && (e.mode & 1) !== 0 && (R & 2) === 0 }

function me(e, n) {
    var t = e.callbackNode;
    Hc(e, n);
    var r = Or(e, e === G ? b : 0);
    if (r === 0) t !== null && Ku(t), e.callbackNode = null, e.callbackPriority = 0;
    else if (n = r & -r, e.callbackPriority !== n) {
        if (t != null && Ku(t), n === 1) e.tag === 0 ? Hf(Ai.bind(null, e)) : qs(Ai.bind(null, e)), $f(function() { R === 0 && vn() }), t = null;
        else {
            switch (Ns(r)) {
                case 1:
                    t = Zo;
                    break;
                case 4:
                    t = _s;
                    break;
                case 16:
                    t = Mr;
                    break;
                case 536870912:
                    t = xs;
                    break;
                default:
                    t = Mr
            }
            t = Za(t, Ha.bind(null, e))
        }
        e.callbackPriority = n, e.callbackNode = t
    }
}

function Ha(e, n) {
    if (Pr = -1, Nr = 0, (R & 6) !== 0) throw Error(v(327));
    var t = e.callbackNode;
    if (Zn() && e.callbackNode !== t) return null;
    var r = Or(e, e === G ? b : 0);
    if (r === 0) return null;
    if ((r & 30) !== 0 || (r & e.expiredLanes) !== 0 || n) n = Jr(e, r);
    else {
        n = r;
        var l = R;
        R |= 2;
        var o = Qa();
        (G !== e || b !== n) && (Ve = null, tt = Q() + 500, Cn(e, n));
        do try { ad(); break } catch (i) { Wa(e, i) }
        while (1);
        uu(), Xr.current = o, R = l, K !== null ? n = 0 : (G = null, b = 0, n = X)
    }
    if (n !== 0) {
        if (n === 2 && (l = ao(e), l !== 0 && (r = l, n = jo(e, l))), n === 1) throw t = Kt, Cn(e, 0), nn(e, r), me(e, Q()), t;
        if (n === 6) nn(e, r);
        else {
            if (l = e.current.alternate, (r & 30) === 0 && !id(l) && (n = Jr(e, r), n === 2 && (o = ao(e), o !== 0 && (r = o, n = jo(e, o))), n === 1)) throw t = Kt, Cn(e, 0), nn(e, r), me(e, Q()), t;
            switch (e.finishedWork = l, e.finishedLanes = r, n) {
                case 0:
                case 1:
                    throw Error(v(345));
                case 2:
                    kn(e, ae, Ve);
                    break;
                case 3:
                    if (nn(e, r), (r & 130023424) === r && (n = Cu + 500 - Q(), 10 < n)) {
                        if (Or(e, 0) !== 0) break;
                        if (l = e.suspendedLanes, (l & r) !== r) { ue(), e.pingedLanes |= e.suspendedLanes & l; break }
                        e.timeoutHandle = go(kn.bind(null, e, ae, Ve), n);
                        break
                    }
                    kn(e, ae, Ve);
                    break;
                case 4:
                    if (nn(e, r), (r & 4194240) === r) break;
                    for (n = e.eventTimes, l = -1; 0 < r;) {
                        var u = 31 - Oe(r);
                        o = 1 << u, u = n[u], u > l && (l = u), r &= ~o
                    }
                    if (r = l, r = Q() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * ud(r / 1960)) - r, 10 < r) { e.timeoutHandle = go(kn.bind(null, e, ae, Ve), r); break }
                    kn(e, ae, Ve);
                    break;
                case 5:
                    kn(e, ae, Ve);
                    break;
                default:
                    throw Error(v(329))
            }
        }
    }
    return me(e, Q()), e.callbackNode === t ? Ha.bind(null, e) : null
}

function jo(e, n) { var t = zt; return e.current.memoizedState.isDehydrated && (Cn(e, n).flags |= 256), e = Jr(e, n), e !== 2 && (n = ae, ae = t, n !== null && Uo(n)), e }

function Uo(e) { ae === null ? ae = e : ae.push.apply(ae, e) }

function id(e) {
    for (var n = e;;) {
        if (n.flags & 16384) {
            var t = n.updateQueue;
            if (t !== null && (t = t.stores, t !== null))
                for (var r = 0; r < t.length; r++) {
                    var l = t[r],
                        o = l.getSnapshot;
                    l = l.value;
                    try { if (!De(o(), l)) return !1 } catch { return !1 }
                }
        }
        if (t = n.child, n.subtreeFlags & 16384 && t !== null) t.return = n, n = t;
        else {
            if (n === e) break;
            for (; n.sibling === null;) {
                if (n.return === null || n.return === e) return !0;
                n = n.return
            }
            n.sibling.return = n.return, n = n.sibling
        }
    }
    return !0
}

function nn(e, n) {
    for (n &= ~Eu, n &= ~cl, e.suspendedLanes |= n, e.pingedLanes &= ~n, e = e.expirationTimes; 0 < n;) {
        var t = 31 - Oe(n),
            r = 1 << t;
        e[t] = -1, n &= ~r
    }
}

function Ai(e) {
    if ((R & 6) !== 0) throw Error(v(327));
    Zn();
    var n = Or(e, 0);
    if ((n & 1) === 0) return me(e, Q()), null;
    var t = Jr(e, n);
    if (e.tag !== 0 && t === 2) {
        var r = ao(e);
        r !== 0 && (n = r, t = jo(e, r))
    }
    if (t === 1) throw t = Kt, Cn(e, 0), nn(e, n), me(e, Q()), t;
    if (t === 6) throw Error(v(345));
    return e.finishedWork = e.current.alternate, e.finishedLanes = n, kn(e, ae, Ve), me(e, Q()), null
}

function _u(e, n) {
    var t = R;
    R |= 1;
    try { return e(n) } finally { R = t, R === 0 && (tt = Q() + 500, ul && vn()) }
}

function Ln(e) {
    rn !== null && rn.tag === 0 && (R & 6) === 0 && Zn();
    var n = R;
    R |= 1;
    var t = Ce.transition,
        r = M;
    try { if (Ce.transition = null, M = 1, e) return e() } finally { M = r, Ce.transition = t, R = n, (R & 6) === 0 && vn() }
}

function xu() { he = Wn.current, I(Wn) }

function Cn(e, n) {
    e.finishedWork = null, e.finishedLanes = 0;
    var t = e.timeoutHandle;
    if (t !== -1 && (e.timeoutHandle = -1, Uf(t)), K !== null)
        for (t = K.return; t !== null;) {
            var r = t;
            switch (cu(r), r.tag) {
                case 1:
                    r = r.type.childContextTypes, r != null && Ur();
                    break;
                case 3:
                    nt(), I(de), I(le), mu();
                    break;
                case 5:
                    pu(r);
                    break;
                case 4:
                    nt();
                    break;
                case 13:
                    I(U);
                    break;
                case 19:
                    I(U);
                    break;
                case 10:
                    iu(r.type._context);
                    break;
                case 22:
                case 23:
                    xu()
            }
            t = t.return
        }
    if (G = e, K = e = pn(e.current, null), b = he = n, X = 0, Kt = null, Eu = cl = zn = 0, ae = zt = null, Me !== null) {
        for (n = 0; n < Me.length; n++)
            if (t = Me[n], r = t.interleaved, r !== null) {
                t.interleaved = null;
                var l = r.next,
                    o = t.pending;
                if (o !== null) {
                    var u = o.next;
                    o.next = l, r.next = u
                }
                t.pending = r
            }
        Me = null
    }
    return e
}

function Wa(e, n) {
    do {
        var t = K;
        try {
            if (uu(), _r.current = Yr, Kr) {
                for (var r = V.memoizedState; r !== null;) {
                    var l = r.queue;
                    l !== null && (l.pending = null), r = r.next
                }
                Kr = !1
            }
            if (Nn = 0, J = Y = V = null, Pt = !1, Ht = 0, Su.current = null, t === null || t.return === null) { X = 1, Kt = n, K = null; break }
            e: {
                var o = e,
                    u = t.return,
                    i = t,
                    s = n;
                if (n = b, i.flags |= 32768, s !== null && typeof s == "object" && typeof s.then == "function") {
                    var c = s,
                        m = i,
                        y = m.tag;
                    if ((m.mode & 1) === 0 && (y === 0 || y === 11 || y === 15)) {
                        var p = m.alternate;
                        p ? (m.updateQueue = p.updateQueue, m.memoizedState = p.memoizedState, m.lanes = p.lanes) : (m.updateQueue = null, m.memoizedState = null)
                    }
                    var w = xi(u);
                    if (w !== null) {
                        w.flags &= -257, Pi(w, u, i, o, n), w.mode & 1 && _i(o, c, n), n = w, s = c;
                        var g = n.updateQueue;
                        if (g === null) {
                            var P = new Set;
                            P.add(s), n.updateQueue = P
                        } else g.add(s);
                        break e
                    } else {
                        if ((n & 1) === 0) { _i(o, c, n), Pu(); break e }
                        s = Error(v(426))
                    }
                } else if (j && i.mode & 1) {
                    var F = xi(u);
                    if (F !== null) {
                        (F.flags & 65536) === 0 && (F.flags |= 256), Pi(F, u, i, o, n), fu(s);
                        break e
                    }
                }
                o = s,
                X !== 4 && (X = 2),
                zt === null ? zt = [o] : zt.push(o),
                s = ku(s, i),
                i = u;do {
                    switch (i.tag) {
                        case 3:
                            i.flags |= 65536, n &= -n, i.lanes |= n;
                            var f = Pa(i, s, n);
                            hi(i, f);
                            break e;
                        case 1:
                            o = s;
                            var a = i.type,
                                d = i.stateNode;
                            if ((i.flags & 128) === 0 && (typeof a.getDerivedStateFromError == "function" || d !== null && typeof d.componentDidCatch == "function" && (an === null || !an.has(d)))) {
                                i.flags |= 65536, n &= -n, i.lanes |= n;
                                var h = Na(i, o, n);
                                hi(i, h);
                                break e
                            }
                    }
                    i = i.return
                } while (i !== null)
            }
            Ya(t)
        } catch (k) { n = k, K === t && t !== null && (K = t = t.return); continue }
        break
    } while (1)
}

function Qa() { var e = Xr.current; return Xr.current = Yr, e === null ? Yr : e }

function Pu() {
    (X === 0 || X === 3 || X === 2) && (X = 4), G === null || (zn & 268435455) === 0 && (cl & 268435455) === 0 || nn(G, b)
}

function Jr(e, n) {
    var t = R;
    R |= 2;
    var r = Qa();
    (G !== e || b !== n) && (Ve = null, Cn(e, n));
    do try { sd(); break } catch (l) { Wa(e, l) }
    while (1);
    if (uu(), R = t, Xr.current = r, K !== null) throw Error(v(261));
    return G = null, b = 0, X
}

function sd() { for (; K !== null;) Ka(K) }

function ad() { for (; K !== null && !Dc();) Ka(K) }

function Ka(e) {
    var n = Ga(e.alternate, e, he);
    e.memoizedProps = e.pendingProps, n === null ? Ya(e) : K = n, Su.current = null
}

function Ya(e) {
    var n = e;
    do {
        var t = n.alternate;
        if (e = n.return, (n.flags & 32768) === 0) { if (t = bf(t, n, he), t !== null) { K = t; return } } else {
            if (t = td(t, n), t !== null) { t.flags &= 32767, K = t; return }
            if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
            else { X = 6, K = null; return }
        }
        if (n = n.sibling, n !== null) { K = n; return }
        K = n = e
    } while (n !== null);
    X === 0 && (X = 5)
}

function kn(e, n, t) {
    var r = M,
        l = Ce.transition;
    try { Ce.transition = null, M = 1, cd(e, n, t, r) } finally { Ce.transition = l, M = r }
    return null
}

function cd(e, n, t, r) {
    do Zn(); while (rn !== null);
    if ((R & 6) !== 0) throw Error(v(327));
    t = e.finishedWork;
    var l = e.finishedLanes;
    if (t === null) return null;
    if (e.finishedWork = null, e.finishedLanes = 0, t === e.current) throw Error(v(177));
    e.callbackNode = null, e.callbackPriority = 0;
    var o = t.lanes | t.childLanes;
    if (Wc(e, o), e === G && (K = G = null, b = 0), (t.subtreeFlags & 2064) === 0 && (t.flags & 2064) === 0 || vr || (vr = !0, Za(Mr, function() { return Zn(), null })), o = (t.flags & 15990) !== 0, (t.subtreeFlags & 15990) !== 0 || o) {
        o = Ce.transition, Ce.transition = null;
        var u = M;
        M = 1;
        var i = R;
        R |= 4, Su.current = null, ld(e, t), Va(t, e), Rf(vo), Dr = !!ho, vo = ho = null, e.current = t, od(t), Ic(), R = i, M = u, Ce.transition = o
    } else e.current = t;
    if (vr && (vr = !1, rn = e, Zr = l), o = e.pendingLanes, o === 0 && (an = null), Uc(t.stateNode), me(e, Q()), n !== null)
        for (r = e.onRecoverableError, t = 0; t < n.length; t++) r(n[t]);
    if (Gr) throw Gr = !1, e = Io, Io = null, e;
    return (Zr & 1) !== 0 && e.tag !== 0 && Zn(), o = e.pendingLanes, (o & 1) !== 0 ? e === Fo ? Lt++ : (Lt = 0, Fo = e) : Lt = 0, vn(), null
}

function Zn() {
    if (rn !== null) {
        var e = Ns(Zr),
            n = Ce.transition,
            t = M;
        try {
            if (Ce.transition = null, M = 16 > e ? 16 : e, rn === null) var r = !1;
            else {
                if (e = rn, rn = null, Zr = 0, (R & 6) !== 0) throw Error(v(331));
                var l = R;
                for (R |= 4, S = e.current; S !== null;) {
                    var o = S,
                        u = o.child;
                    if ((S.flags & 16) !== 0) {
                        var i = o.deletions;
                        if (i !== null) {
                            for (var s = 0; s < i.length; s++) {
                                var c = i[s];
                                for (S = c; S !== null;) {
                                    var m = S;
                                    switch (m.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            Nt(8, m, o)
                                    }
                                    var y = m.child;
                                    if (y !== null) y.return = m, S = y;
                                    else
                                        for (; S !== null;) {
                                            m = S;
                                            var p = m.sibling,
                                                w = m.return;
                                            if (ja(m), m === c) { S = null; break }
                                            if (p !== null) { p.return = w, S = p; break }
                                            S = w
                                        }
                                }
                            }
                            var g = o.alternate;
                            if (g !== null) {
                                var P = g.child;
                                if (P !== null) {
                                    g.child = null;
                                    do {
                                        var F = P.sibling;
                                        P.sibling = null, P = F
                                    } while (P !== null)
                                }
                            }
                            S = o
                        }
                    }
                    if ((o.subtreeFlags & 2064) !== 0 && u !== null) u.return = o, S = u;
                    else e: for (; S !== null;) {
                        if (o = S, (o.flags & 2048) !== 0) switch (o.tag) {
                            case 0:
                            case 11:
                            case 15:
                                Nt(9, o, o.return)
                        }
                        var f = o.sibling;
                        if (f !== null) { f.return = o.return, S = f; break e }
                        S = o.return
                    }
                }
                var a = e.current;
                for (S = a; S !== null;) {
                    u = S;
                    var d = u.child;
                    if ((u.subtreeFlags & 2064) !== 0 && d !== null) d.return = u, S = d;
                    else e: for (u = a; S !== null;) {
                        if (i = S, (i.flags & 2048) !== 0) try {
                            switch (i.tag) {
                                case 0:
                                case 11:
                                case 15:
                                    al(9, i)
                            }
                        } catch (k) { B(i, i.return, k) }
                        if (i === u) { S = null; break e }
                        var h = i.sibling;
                        if (h !== null) { h.return = i.return, S = h; break e }
                        S = i.return
                    }
                }
                if (R = l, vn(), Ue && typeof Ue.onPostCommitFiberRoot == "function") try { Ue.onPostCommitFiberRoot(nl, e) } catch {}
                r = !0
            }
            return r
        } finally { M = t, Ce.transition = n }
    }
    return !1
}

function Bi(e, n, t) { n = ku(t, n), n = Pa(e, n, 1), sn(e, n), n = ue(), e = fl(e, 1), e !== null && (Xt(e, 1, n), me(e, n)) }

function B(e, n, t) {
    if (e.tag === 3) Bi(e, e, t);
    else
        for (; n !== null;) {
            if (n.tag === 3) { Bi(n, e, t); break } else if (n.tag === 1) { var r = n.stateNode; if (typeof n.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (an === null || !an.has(r))) { e = ku(t, e), e = Na(n, e, 1), sn(n, e), e = ue(), n = fl(n, 1), n !== null && (Xt(n, 1, e), me(n, e)); break } }
            n = n.return
        }
}

function fd(e, n, t) {
    var r = e.pingCache;
    r !== null && r.delete(n), n = ue(), e.pingedLanes |= e.suspendedLanes & t, G === e && (b & t) === t && (X === 4 || X === 3 && (b & 130023424) === b && 500 > Q() - Cu ? Cn(e, 0) : Eu |= t), me(e, n)
}

function Xa(e, n) {
    n === 0 && ((e.mode & 1) === 0 ? n = 1 : (n = or, or <<= 1, (or & 130023424) === 0 && (or = 4194304)));
    var t = ue();
    e = fl(e, n), e !== null && (Xt(e, n, t), me(e, t))
}

function dd(e) {
    var n = e.memoizedState,
        t = 0;
    n !== null && (t = n.retryLane), Xa(e, t)
}

function pd(e, n) {
    var t = 0;
    switch (e.tag) {
        case 13:
            var r = e.stateNode,
                l = e.memoizedState;
            l !== null && (t = l.retryLane);
            break;
        case 19:
            r = e.stateNode;
            break;
        default:
            throw Error(v(314))
    }
    r !== null && r.delete(n), Xa(e, t)
}
var Ga;
Ga = function(e, n, t) {
    if (e !== null)
        if (e.memoizedProps !== n.pendingProps || de.current) fe = !0;
        else {
            if ((e.lanes & t) === 0 && (n.flags & 128) === 0) return fe = !1, nd(e, n, t);
            fe = (e.flags & 131072) !== 0
        }
    else fe = !1, j && (n.flags & 1048576) !== 0 && ta(n, Wr, n.index);
    switch (n.lanes = 0, n.tag) {
        case 2:
            var r = n.type;
            e !== null && (e.alternate = null, n.alternate = null, n.flags |= 2), e = n.pendingProps;
            var l = qn(n, le.current);
            Gn(n, t), l = vu(null, n, r, e, l, t);
            var o = yu();
            return n.flags |= 1, typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0 ? (n.tag = 1, n.memoizedState = null, n.updateQueue = null, pe(r) ? (o = !0, $r(n)) : o = !1, n.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null, su(n), l.updater = il, n.stateNode = l, l._reactInternals = n, Co(n, r, e, t), n = Lo(null, n, r, !0, o, t)) : (n.tag = 0, j && o && au(n), oe(null, n, l, t), n = n.child), n;
        case 16:
            r = n.elementType;
            e: {
                switch (e !== null && (e.alternate = null, n.alternate = null, n.flags |= 2), e = n.pendingProps, l = r._init, r = l(r._payload), n.type = r, l = n.tag = hd(r), e = Le(r, e), l) {
                    case 0:
                        n = zo(null, n, r, e, t);
                        break e;
                    case 1:
                        n = Li(null, n, r, e, t);
                        break e;
                    case 11:
                        n = Ni(null, n, r, e, t);
                        break e;
                    case 14:
                        n = zi(null, n, r, Le(r.type, e), t);
                        break e
                }
                throw Error(v(306, r, ""))
            }
            return n;
        case 0:
            return r = n.type, l = n.pendingProps, l = n.elementType === r ? l : Le(r, l), zo(e, n, r, l, t);
        case 1:
            return r = n.type, l = n.pendingProps, l = n.elementType === r ? l : Le(r, l), Li(e, n, r, l, t);
        case 3:
            e: {
                if (Da(n), e === null) throw Error(v(387));r = n.pendingProps,
                o = n.memoizedState,
                l = o.element,
                bs(e, n),
                Br(n, r, null, t);
                var u = n.memoizedState;
                if (r = u.element, o.isDehydrated)
                    if (o = { element: r, isDehydrated: !1, cache: u.cache, pendingSuspenseBoundaries: u.pendingSuspenseBoundaries, transitions: u.transitions }, n.updateQueue.baseState = o, n.memoizedState = o, n.flags & 256) { l = Error(v(423)), n = Ti(e, n, r, t, l); break e } else if (r !== l) { l = Error(v(424)), n = Ti(e, n, r, t, l); break e } else
                    for (ce = He(n.stateNode.containerInfo.firstChild), ve = n, j = !0, Re = null, t = oa(n, null, r, t), n.child = t; t;) t.flags = t.flags & -3 | 4096, t = t.sibling;
                else {
                    if (bn(), r === l) { n = Ge(e, n, t); break e }
                    oe(e, n, r, t)
                }
                n = n.child
            }
            return n;
        case 5:
            return ua(n), e === null && xo(n), r = n.type, l = n.pendingProps, o = e !== null ? e.memoizedProps : null, u = l.children, yo(r, l) ? u = null : o !== null && yo(r, o) && (n.flags |= 32), Oa(e, n), oe(e, n, u, t), n.child;
        case 6:
            return e === null && xo(n), null;
        case 13:
            return Ia(e, n, t);
        case 4:
            return du(n, n.stateNode.containerInfo), r = n.pendingProps, e === null ? n.child = et(n, null, r, t) : oe(e, n, r, t), n.child;
        case 11:
            return r = n.type, l = n.pendingProps, l = n.elementType === r ? l : Le(r, l), Ni(e, n, r, l, t);
        case 7:
            return oe(e, n, n.pendingProps, t), n.child;
        case 8:
            return oe(e, n, n.pendingProps.children, t), n.child;
        case 12:
            return oe(e, n, n.pendingProps.children, t), n.child;
        case 10:
            e: {
                if (r = n.type._context, l = n.pendingProps, o = n.memoizedProps, u = l.value, O(Vr, r._currentValue), r._currentValue = u, o !== null)
                    if (De(o.value, u)) { if (o.children === l.children && !de.current) { n = Ge(e, n, t); break e } } else
                        for (o = n.child, o !== null && (o.return = n); o !== null;) {
                            var i = o.dependencies;
                            if (i !== null) {
                                u = o.child;
                                for (var s = i.firstContext; s !== null;) {
                                    if (s.context === r) {
                                        if (o.tag === 1) {
                                            s = Ke(-1, t & -t), s.tag = 2;
                                            var c = o.updateQueue;
                                            if (c !== null) {
                                                c = c.shared;
                                                var m = c.pending;
                                                m === null ? s.next = s : (s.next = m.next, m.next = s), c.pending = s
                                            }
                                        }
                                        o.lanes |= t, s = o.alternate, s !== null && (s.lanes |= t), So(o.return, t, n), i.lanes |= t;
                                        break
                                    }
                                    s = s.next
                                }
                            } else if (o.tag === 10) u = o.type === n.type ? null : o.child;
                            else if (o.tag === 18) {
                                if (u = o.return, u === null) throw Error(v(341));
                                u.lanes |= t, i = u.alternate, i !== null && (i.lanes |= t), So(u, t, n), u = o.sibling
                            } else u = o.child;
                            if (u !== null) u.return = o;
                            else
                                for (u = o; u !== null;) {
                                    if (u === n) { u = null; break }
                                    if (o = u.sibling, o !== null) { o.return = u.return, u = o; break }
                                    u = u.return
                                }
                            o = u
                        }
                oe(e, n, l.children, t),
                n = n.child
            }
            return n;
        case 9:
            return l = n.type, r = n.pendingProps.children, Gn(n, t), l = xe(l), r = r(l), n.flags |= 1, oe(e, n, r, t), n.child;
        case 14:
            return r = n.type, l = Le(r, n.pendingProps), l = Le(r.type, l), zi(e, n, r, l, t);
        case 15:
            return Ra(e, n, n.type, n.pendingProps, t);
        case 17:
            return r = n.type, l = n.pendingProps, l = n.elementType === r ? l : Le(r, l), e !== null && (e.alternate = null, n.alternate = null, n.flags |= 2), n.tag = 1, pe(r) ? (e = !0, $r(n)) : e = !1, Gn(n, t), na(n, r, l), Co(n, r, l, t), Lo(null, n, r, !0, e, t);
        case 19:
            return Fa(e, n, t);
        case 22:
            return Ma(e, n, t)
    }
    throw Error(v(156, n.tag))
};

function Za(e, n) { return Cs(e, n) }

function md(e, n, t, r) { this.tag = e, this.key = t, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = n, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null }

function Ee(e, n, t, r) { return new md(e, n, t, r) }

function Nu(e) { return e = e.prototype, !(!e || !e.isReactComponent) }

function hd(e) { if (typeof e == "function") return Nu(e) ? 1 : 0; if (e != null) { if (e = e.$$typeof, e === Yo) return 11; if (e === Xo) return 14 } return 2 }

function pn(e, n) { var t = e.alternate; return t === null ? (t = Ee(e.tag, n, e.key, e.mode), t.elementType = e.elementType, t.type = e.type, t.stateNode = e.stateNode, t.alternate = e, e.alternate = t) : (t.pendingProps = n, t.type = e.type, t.flags = 0, t.subtreeFlags = 0, t.deletions = null), t.flags = e.flags & 14680064, t.childLanes = e.childLanes, t.lanes = e.lanes, t.child = e.child, t.memoizedProps = e.memoizedProps, t.memoizedState = e.memoizedState, t.updateQueue = e.updateQueue, n = e.dependencies, t.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }, t.sibling = e.sibling, t.index = e.index, t.ref = e.ref, t }

function zr(e, n, t, r, l, o) {
    var u = 2;
    if (r = e, typeof e == "function") Nu(e) && (u = 1);
    else if (typeof e == "string") u = 5;
    else e: switch (e) {
        case Dn:
            return _n(t.children, l, o, n);
        case Ko:
            u = 8, l |= 8;
            break;
        case Xl:
            return e = Ee(12, t, n, l | 2), e.elementType = Xl, e.lanes = o, e;
        case Gl:
            return e = Ee(13, t, n, l), e.elementType = Gl, e.lanes = o, e;
        case Zl:
            return e = Ee(19, t, n, l), e.elementType = Zl, e.lanes = o, e;
        case us:
            return qr(t, l, o, n);
        default:
            if (typeof e == "object" && e !== null) switch (e.$$typeof) {
                case ls:
                    u = 10;
                    break e;
                case os:
                    u = 9;
                    break e;
                case Yo:
                    u = 11;
                    break e;
                case Xo:
                    u = 14;
                    break e;
                case qe:
                    u = 16, r = null;
                    break e
            }
            throw Error(v(130, e == null ? e : typeof e, ""))
    }
    return n = Ee(u, t, n, l), n.elementType = e, n.type = r, n.lanes = o, n
}

function _n(e, n, t, r) { return e = Ee(7, e, r, n), e.lanes = t, e }

function qr(e, n, t, r) { return e = Ee(22, e, r, n), e.elementType = us, e.lanes = t, e.stateNode = {}, e }

function Hl(e, n, t) { return e = Ee(6, e, null, n), e.lanes = t, e }

function Wl(e, n, t) { return n = Ee(4, e.children !== null ? e.children : [], e.key, n), n.lanes = t, n.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, n }

function vd(e, n, t, r, l) { this.tag = n, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = xl(0), this.expirationTimes = xl(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = xl(0), this.identifierPrefix = r, this.onRecoverableError = l, this.mutableSourceEagerHydrationData = null }

function zu(e, n, t, r, l, o, u, i, s) { return e = new vd(e, n, t, i, s), n === 1 ? (n = 1, o === !0 && (n |= 8)) : n = 0, o = Ee(3, null, null, n), e.current = o, o.stateNode = e, o.memoizedState = { element: r, isDehydrated: t, cache: null, transitions: null, pendingSuspenseBoundaries: null }, su(o), e }

function yd(e, n, t) { var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null; return { $$typeof: On, key: r == null ? null : "" + r, children: e, containerInfo: n, implementation: t } }

function Ja(e) {
    if (!e) return dn;
    e = e._reactInternals;
    e: {
        if (Rn(e) !== e || e.tag !== 1) throw Error(v(170));
        var n = e;do {
            switch (n.tag) {
                case 3:
                    n = n.stateNode.context;
                    break e;
                case 1:
                    if (pe(n.type)) { n = n.stateNode.__reactInternalMemoizedMergedChildContext; break e }
            }
            n = n.return
        } while (n !== null);
        throw Error(v(171))
    }
    if (e.tag === 1) { var t = e.type; if (pe(t)) return Js(e, t, n) }
    return n
}

function qa(e, n, t, r, l, o, u, i, s) { return e = zu(t, r, !0, e, l, o, u, i, s), e.context = Ja(null), t = e.current, r = ue(), l = cn(t), o = Ke(r, l), o.callback = n != null ? n : null, sn(t, o), e.current.lanes = l, Xt(e, l, r), me(e, r), e }

function dl(e, n, t, r) {
    var l = n.current,
        o = ue(),
        u = cn(l);
    return t = Ja(t), n.context === null ? n.context = t : n.pendingContext = t, n = Ke(o, u), n.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (n.callback = r), sn(l, n), e = _e(l, u, o), e !== null && Cr(e, l, u), u
}

function br(e) {
    if (e = e.current, !e.child) return null;
    switch (e.child.tag) {
        case 5:
            return e.child.stateNode;
        default:
            return e.child.stateNode
    }
}

function Hi(e, n) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
        var t = e.retryLane;
        e.retryLane = t !== 0 && t < n ? t : n
    }
}

function Lu(e, n) { Hi(e, n), (e = e.alternate) && Hi(e, n) }

function gd() { return null }
var ba = typeof reportError == "function" ? reportError : function(e) { console.error(e) };

function Tu(e) { this._internalRoot = e }
pl.prototype.render = Tu.prototype.render = function(e) {
    var n = this._internalRoot;
    if (n === null) throw Error(v(409));
    dl(e, n, null, null)
};
pl.prototype.unmount = Tu.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
        this._internalRoot = null;
        var n = e.containerInfo;
        Ln(function() { dl(null, e, null, null) }), n[Xe] = null
    }
};

function pl(e) { this._internalRoot = e }
pl.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
        var n = Ts();
        e = { blockedOn: null, target: e, priority: n };
        for (var t = 0; t < en.length && n !== 0 && n < en[t].priority; t++);
        en.splice(t, 0, e), t === 0 && Ms(e)
    }
};

function Ru(e) { return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11) }

function ml(e) { return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable ")) }

function Wi() {}

function wd(e, n, t, r, l) {
    if (l) {
        if (typeof r == "function") {
            var o = r;
            r = function() {
                var c = br(u);
                o.call(c)
            }
        }
        var u = qa(n, r, e, 0, null, !1, !1, "", Wi);
        return e._reactRootContainer = u, e[Xe] = u.current, Ut(e.nodeType === 8 ? e.parentNode : e), Ln(), u
    }
    for (; l = e.lastChild;) e.removeChild(l);
    if (typeof r == "function") {
        var i = r;
        r = function() {
            var c = br(s);
            i.call(c)
        }
    }
    var s = zu(e, 0, !1, null, null, !1, !1, "", Wi);
    return e._reactRootContainer = s, e[Xe] = s.current, Ut(e.nodeType === 8 ? e.parentNode : e), Ln(function() { dl(n, s, t, r) }), s
}

function hl(e, n, t, r, l) {
    var o = t._reactRootContainer;
    if (o) {
        var u = o;
        if (typeof l == "function") {
            var i = l;
            l = function() {
                var s = br(u);
                i.call(s)
            }
        }
        dl(n, u, e, l)
    } else u = wd(t, n, e, l, r);
    return br(u)
}
zs = function(e) {
    switch (e.tag) {
        case 3:
            var n = e.stateNode;
            if (n.current.memoizedState.isDehydrated) {
                var t = wt(n.pendingLanes);
                t !== 0 && (Jo(n, t | 1), me(n, Q()), (R & 6) === 0 && (tt = Q() + 500, vn()))
            }
            break;
        case 13:
            var r = ue();
            Ln(function() { return _e(e, 1, r) }), Lu(e, 1)
    }
};
qo = function(e) {
    if (e.tag === 13) {
        var n = ue();
        _e(e, 134217728, n), Lu(e, 134217728)
    }
};
Ls = function(e) {
    if (e.tag === 13) {
        var n = ue(),
            t = cn(e);
        _e(e, t, n), Lu(e, t)
    }
};
Ts = function() { return M };
Rs = function(e, n) { var t = M; try { return M = e, n() } finally { M = t } };
uo = function(e, n, t) {
    switch (n) {
        case "input":
            if (bl(e, t), n = t.name, t.type === "radio" && n != null) {
                for (t = e; t.parentNode;) t = t.parentNode;
                for (t = t.querySelectorAll("input[name=" + JSON.stringify("" + n) + '][type="radio"]'), n = 0; n < t.length; n++) {
                    var r = t[n];
                    if (r !== e && r.form === e.form) {
                        var l = ol(r);
                        if (!l) throw Error(v(90));
                        ss(r), bl(r, l)
                    }
                }
            }
            break;
        case "textarea":
            cs(e, t);
            break;
        case "select":
            n = t.value, n != null && Qn(e, !!t.multiple, n, !1)
    }
};
ys = _u;
gs = Ln;
var kd = { usingClientEntryPoint: !1, Events: [Zt, Un, ol, hs, vs, _u] },
    vt = { findFiberByHostInstance: Sn, bundleType: 0, version: "18.1.0", rendererPackageName: "react-dom" },
    Sd = { bundleType: vt.bundleType, version: vt.version, rendererPackageName: vt.rendererPackageName, rendererConfig: vt.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: Ze.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) { return e = Ss(e), e === null ? null : e.stateNode }, findFiberByHostInstance: vt.findFiberByHostInstance || gd, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.1.0-next-22edb9f77-20220426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ != "undefined") { var yr = __REACT_DEVTOOLS_GLOBAL_HOOK__; if (!yr.isDisabled && yr.supportsFiber) try { nl = yr.inject(Sd), Ue = yr } catch {} }
ge.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = kd;
ge.createPortal = function(e, n) { var t = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null; if (!Ru(n)) throw Error(v(200)); return yd(e, n, null, t) };
ge.createRoot = function(e, n) {
    if (!Ru(e)) throw Error(v(299));
    var t = !1,
        r = "",
        l = ba;
    return n != null && (n.unstable_strictMode === !0 && (t = !0), n.identifierPrefix !== void 0 && (r = n.identifierPrefix), n.onRecoverableError !== void 0 && (l = n.onRecoverableError)), n = zu(e, 1, !1, null, null, t, !1, r, l), e[Xe] = n.current, Ut(e.nodeType === 8 ? e.parentNode : e), new Tu(n)
};
ge.findDOMNode = function(e) { if (e == null) return null; if (e.nodeType === 1) return e; var n = e._reactInternals; if (n === void 0) throw typeof e.render == "function" ? Error(v(188)) : (e = Object.keys(e).join(","), Error(v(268, e))); return e = Ss(n), e = e === null ? null : e.stateNode, e };
ge.flushSync = function(e) { return Ln(e) };
ge.hydrate = function(e, n, t) { if (!ml(n)) throw Error(v(200)); return hl(null, e, n, !0, t) };
ge.hydrateRoot = function(e, n, t) {
    if (!Ru(e)) throw Error(v(405));
    var r = t != null && t.hydratedSources || null,
        l = !1,
        o = "",
        u = ba;
    if (t != null && (t.unstable_strictMode === !0 && (l = !0), t.identifierPrefix !== void 0 && (o = t.identifierPrefix), t.onRecoverableError !== void 0 && (u = t.onRecoverableError)), n = qa(n, null, e, 1, t != null ? t : null, l, !1, o, u), e[Xe] = n.current, Ut(e), r)
        for (e = 0; e < r.length; e++) t = r[e], l = t._getVersion, l = l(t._source), n.mutableSourceEagerHydrationData == null ? n.mutableSourceEagerHydrationData = [t, l] : n.mutableSourceEagerHydrationData.push(t, l);
    return new pl(n)
};
ge.render = function(e, n, t) { if (!ml(n)) throw Error(v(200)); return hl(null, e, n, !1, t) };
ge.unmountComponentAtNode = function(e) { if (!ml(e)) throw Error(v(40)); return e._reactRootContainer ? (Ln(function() { hl(null, null, e, !1, function() { e._reactRootContainer = null, e[Xe] = null }) }), !0) : !1 };
ge.unstable_batchedUpdates = _u;
ge.unstable_renderSubtreeIntoContainer = function(e, n, t, r) { if (!ml(t)) throw Error(v(200)); if (e == null || e._reactInternals === void 0) throw Error(v(38)); return hl(e, n, t, !1, r) };
ge.version = "18.1.0-next-22edb9f77-20220426";

function ec() { if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ == "undefined" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try { __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ec) } catch (e) { console.error(e) } }
ec(), bi.exports = ge;
var Qi = bi.exports;
Kl.createRoot = Qi.createRoot, Kl.hydrateRoot = Qi.hydrateRoot;
var Mu = { exports: {} },
    vl = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ed = el.exports,
    Cd = Symbol.for("react.element"),
    _d = Symbol.for("react.fragment"),
    xd = Object.prototype.hasOwnProperty,
    Pd = Ed.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    Nd = { key: !0, ref: !0, __self: !0, __source: !0 };

function nc(e, n, t) {
    var r, l = {},
        o = null,
        u = null;
    t !== void 0 && (o = "" + t), n.key !== void 0 && (o = "" + n.key), n.ref !== void 0 && (u = n.ref);
    for (r in n) xd.call(n, r) && !Nd.hasOwnProperty(r) && (l[r] = n[r]);
    if (e && e.defaultProps)
        for (r in n = e.defaultProps, n) l[r] === void 0 && (l[r] = n[r]);
    return { $$typeof: Cd, type: e, key: o, ref: u, props: l, _owner: Pd.current }
}
vl.Fragment = _d;
vl.jsx = nc;
vl.jsxs = nc;
Mu.exports = vl;
const Be = Mu.exports.jsx,
    Ql = Mu.exports.jsxs;

function zd() {
    function e() {
        const n = window.innerHeight,
            t = window.innerWidth;
        $(".f11").css({ display: "none" }), $("#iconReact").css({ display: "none" }), $("#laptop").css({ width: t, height: n }), $("#tela").css({ width: t, height: n, border: "none", "border-radius": "0%", "background-size": "101% 100%" }), $(".teclado").css({ height: "0px" }), t < n && alert("Vire o seu dispositivo!")
    }
    return Be("div", { className: "global", children: Ql("div", { className: "tamanho", children: [Ql("h1", { className: "f11", children: ["F11 for a better experience. ", Be("br", {}), " (fullscreen)"] }), Ql("div", { id: "laptop", children: [Be("div", { id: "tela", onClick: e, children: Be("img", { src: "./assets/iconReact.png", id: "iconReact" }) }), Be("div", { className: "teclado" })] })] }) })
}

function Ld() { return Be("div", { children: Be(zd, {}) }) }
Kl.createRoot(document.getElementById("root")).render(Be(wc.StrictMode, { children: Be(Ld, {}) }));