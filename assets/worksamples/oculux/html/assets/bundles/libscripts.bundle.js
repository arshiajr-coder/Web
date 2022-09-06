! function(e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, function(E, e) {
    "use strict";
    var t = [],
        T = E.document,
        i = Object.getPrototypeOf,
        a = t.slice,
        g = t.concat,
        l = t.push,
        r = t.indexOf,
        n = {},
        o = n.toString,
        m = n.hasOwnProperty,
        s = m.toString,
        c = s.call(Object),
        v = {},
        y = function(e) {
            return "function" == typeof e && "number" != typeof e.nodeType
        },
        b = function(e) {
            return null != e && e === e.window
        },
        u = {
            type: !0,
            src: !0,
            noModule: !0
        };

    function _(e, t, n) {
        var i, r = (t = t || T).createElement("script");
        if (r.text = e, n)
            for (i in u) n[i] && (r[i] = n[i]);
        t.head.appendChild(r).parentNode.removeChild(r)
    }

    function w(e) {
        return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? n[o.call(e)] || "object" : typeof e
    }
    var C = function(e, t) {
            return new C.fn.init(e, t)
        },
        f = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

    function d(e) {
        var t = !!e && "length" in e && e.length,
            n = w(e);
        return !y(e) && !b(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e)
    }
    C.fn = C.prototype = {
        jquery: "3.3.1",
        constructor: C,
        length: 0,
        toArray: function() {
            return a.call(this)
        },
        get: function(e) {
            return null == e ? a.call(this) : e < 0 ? this[e + this.length] : this[e]
        },
        pushStack: function(e) {
            var t = C.merge(this.constructor(), e);
            return t.prevObject = this, t
        },
        each: function(e) {
            return C.each(this, e)
        },
        map: function(n) {
            return this.pushStack(C.map(this, function(e, t) {
                return n.call(e, t, e)
            }))
        },
        slice: function() {
            return this.pushStack(a.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(e) {
            var t = this.length,
                n = +e + (e < 0 ? t : 0);
            return this.pushStack(0 <= n && n < t ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: l,
        sort: t.sort,
        splice: t.splice
    }, C.extend = C.fn.extend = function() {
        var e, t, n, i, r, o, s = arguments[0] || {},
            a = 1,
            l = arguments.length,
            c = !1;
        for ("boolean" == typeof s && (c = s, s = arguments[a] || {}, a++), "object" == typeof s || y(s) || (s = {}), a === l && (s = this, a--); a < l; a++)
            if (null != (e = arguments[a]))
                for (t in e) n = s[t], s !== (i = e[t]) && (c && i && (C.isPlainObject(i) || (r = Array.isArray(i))) ? (r ? (r = !1, o = n && Array.isArray(n) ? n : []) : o = n && C.isPlainObject(n) ? n : {}, s[t] = C.extend(c, o, i)) : void 0 !== i && (s[t] = i));
        return s
    }, C.extend({
        expando: "jQuery" + ("3.3.1" + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isPlainObject: function(e) {
            var t, n;
            return !(!e || "[object Object]" !== o.call(e) || (t = i(e)) && ("function" != typeof(n = m.call(t, "constructor") && t.constructor) || s.call(n) !== c))
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e) return !1;
            return !0
        },
        globalEval: function(e) {
            _(e)
        },
        each: function(e, t) {
            var n, i = 0;
            if (d(e))
                for (n = e.length; i < n && !1 !== t.call(e[i], i, e[i]); i++);
            else
                for (i in e)
                    if (!1 === t.call(e[i], i, e[i])) break;
            return e
        },
        trim: function(e) {
            return null == e ? "" : (e + "").replace(f, "")
        },
        makeArray: function(e, t) {
            var n = t || [];
            return null != e && (d(Object(e)) ? C.merge(n, "string" == typeof e ? [e] : e) : l.call(n, e)), n
        },
        inArray: function(e, t, n) {
            return null == t ? -1 : r.call(t, e, n)
        },
        merge: function(e, t) {
            for (var n = +t.length, i = 0, r = e.length; i < n; i++) e[r++] = t[i];
            return e.length = r, e
        },
        grep: function(e, t, n) {
            for (var i = [], r = 0, o = e.length, s = !n; r < o; r++) !t(e[r], r) !== s && i.push(e[r]);
            return i
        },
        map: function(e, t, n) {
            var i, r, o = 0,
                s = [];
            if (d(e))
                for (i = e.length; o < i; o++) null != (r = t(e[o], o, n)) && s.push(r);
            else
                for (o in e) null != (r = t(e[o], o, n)) && s.push(r);
            return g.apply([], s)
        },
        guid: 1,
        support: v
    }), "function" == typeof Symbol && (C.fn[Symbol.iterator] = t[Symbol.iterator]), C.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
        n["[object " + t + "]"] = t.toLowerCase()
    });
    var h = function(n) {
        var e, h, _, o, r, p, f, g, w, l, c, x, E, s, T, m, a, u, v, C = "sizzle" + 1 * new Date,
            y = n.document,
            S = 0,
            i = 0,
            d = se(),
            b = se(),
            D = se(),
            k = function(e, t) {
                return e === t && (c = !0), 0
            },
            N = {}.hasOwnProperty,
            t = [],
            A = t.pop,
            j = t.push,
            O = t.push,
            L = t.slice,
            I = function(e, t) {
                for (var n = 0, i = e.length; n < i; n++)
                    if (e[n] === t) return n;
                return -1
            },
            q = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            P = "[\\x20\\t\\r\\n\\f]",
            H = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
            R = "\\[" + P + "*(" + H + ")(?:" + P + "*([*^$|!~]?=)" + P + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + H + "))|)" + P + "*\\]",
            F = ":(" + H + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + R + ")*)|.*)\\)|)",
            M = new RegExp(P + "+", "g"),
            B = new RegExp("^" + P + "+|((?:^|[^\\\\])(?:\\\\.)*)" + P + "+$", "g"),
            W = new RegExp("^" + P + "*," + P + "*"),
            U = new RegExp("^" + P + "*([>+~]|" + P + ")" + P + "*"),
            Q = new RegExp("=" + P + "*([^\\]'\"]*?)" + P + "*\\]", "g"),
            $ = new RegExp(F),
            z = new RegExp("^" + H + "$"),
            V = {
                ID: new RegExp("^#(" + H + ")"),
                CLASS: new RegExp("^\\.(" + H + ")"),
                TAG: new RegExp("^(" + H + "|[*])"),
                ATTR: new RegExp("^" + R),
                PSEUDO: new RegExp("^" + F),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + P + "*(even|odd|(([+-]|)(\\d*)n|)" + P + "*(?:([+-]|)" + P + "*(\\d+)|))" + P + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + q + ")$", "i"),
                needsContext: new RegExp("^" + P + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + P + "*((?:-\\d)?\\d*)" + P + "*\\)|)(?=[^-]|$)", "i")
            },
            X = /^(?:input|select|textarea|button)$/i,
            Y = /^h\d$/i,
            K = /^[^{]+\{\s*\[native \w/,
            G = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            J = /[+~]/,
            Z = new RegExp("\\\\([\\da-f]{1,6}" + P + "?|(" + P + ")|.)", "ig"),
            ee = function(e, t, n) {
                var i = "0x" + t - 65536;
                return i != i || n ? t : i < 0 ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
            },
            te = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            ne = function(e, t) {
                return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
            },
            ie = function() {
                x()
            },
            re = ye(function(e) {
                return !0 === e.disabled && ("form" in e || "label" in e)
            }, {
                dir: "parentNode",
                next: "legend"
            });
        try {
            O.apply(t = L.call(y.childNodes), y.childNodes), t[y.childNodes.length].nodeType
        } catch (n) {
            O = {
                apply: t.length ? function(e, t) {
                    j.apply(e, L.call(t))
                } : function(e, t) {
                    for (var n = e.length, i = 0; e[n++] = t[i++];);
                    e.length = n - 1
                }
            }
        }

        function oe(e, t, n, i) {
            var r, o, s, a, l, c, u, f = t && t.ownerDocument,
                d = t ? t.nodeType : 9;
            if (n = n || [], "string" != typeof e || !e || 1 !== d && 9 !== d && 11 !== d) return n;
            if (!i && ((t ? t.ownerDocument || t : y) !== E && x(t), t = t || E, T)) {
                if (11 !== d && (l = G.exec(e)))
                    if (r = l[1]) {
                        if (9 === d) {
                            if (!(s = t.getElementById(r))) return n;
                            if (s.id === r) return n.push(s), n
                        } else if (f && (s = f.getElementById(r)) && v(t, s) && s.id === r) return n.push(s), n
                    } else {
                        if (l[2]) return O.apply(n, t.getElementsByTagName(e)), n;
                        if ((r = l[3]) && h.getElementsByClassName && t.getElementsByClassName) return O.apply(n, t.getElementsByClassName(r)), n
                    }
                if (h.qsa && !D[e + " "] && (!m || !m.test(e))) {
                    if (1 !== d) f = t, u = e;
                    else if ("object" !== t.nodeName.toLowerCase()) {
                        for ((a = t.getAttribute("id")) ? a = a.replace(te, ne) : t.setAttribute("id", a = C), o = (c = p(e)).length; o--;) c[o] = "#" + a + " " + ve(c[o]);
                        u = c.join(","), f = J.test(e) && ge(t.parentNode) || t
                    }
                    if (u) try {
                        return O.apply(n, f.querySelectorAll(u)), n
                    } catch (e) {} finally {
                        a === C && t.removeAttribute("id")
                    }
                }
            }
            return g(e.replace(B, "$1"), t, n, i)
        }

        function se() {
            var i = [];
            return function e(t, n) {
                return i.push(t + " ") > _.cacheLength && delete e[i.shift()], e[t + " "] = n
            }
        }

        function ae(e) {
            return e[C] = !0, e
        }

        function le(e) {
            var t = E.createElement("fieldset");
            try {
                return !!e(t)
            } catch (e) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function ce(e, t) {
            for (var n = e.split("|"), i = n.length; i--;) _.attrHandle[n[i]] = t
        }

        function ue(e, t) {
            var n = t && e,
                i = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (i) return i;
            if (n)
                for (; n = n.nextSibling;)
                    if (n === t) return -1;
            return e ? 1 : -1
        }

        function fe(t) {
            return function(e) {
                return "input" === e.nodeName.toLowerCase() && e.type === t
            }
        }

        function de(n) {
            return function(e) {
                var t = e.nodeName.toLowerCase();
                return ("input" === t || "button" === t) && e.type === n
            }
        }

        function he(t) {
            return function(e) {
                return "form" in e ? e.parentNode && !1 === e.disabled ? "label" in e ? "label" in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && re(e) === t : e.disabled === t : "label" in e && e.disabled === t
            }
        }

        function pe(s) {
            return ae(function(o) {
                return o = +o, ae(function(e, t) {
                    for (var n, i = s([], e.length, o), r = i.length; r--;) e[n = i[r]] && (e[n] = !(t[n] = e[n]))
                })
            })
        }

        function ge(e) {
            return e && void 0 !== e.getElementsByTagName && e
        }
        for (e in h = oe.support = {}, r = oe.isXML = function(e) {
                var t = e && (e.ownerDocument || e).documentElement;
                return !!t && "HTML" !== t.nodeName
            }, x = oe.setDocument = function(e) {
                var t, n, i = e ? e.ownerDocument || e : y;
                return i !== E && 9 === i.nodeType && i.documentElement && (s = (E = i).documentElement, T = !r(E), y !== E && (n = E.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", ie, !1) : n.attachEvent && n.attachEvent("onunload", ie)), h.attributes = le(function(e) {
                    return e.className = "i", !e.getAttribute("className")
                }), h.getElementsByTagName = le(function(e) {
                    return e.appendChild(E.createComment("")), !e.getElementsByTagName("*").length
                }), h.getElementsByClassName = K.test(E.getElementsByClassName), h.getById = le(function(e) {
                    return s.appendChild(e).id = C, !E.getElementsByName || !E.getElementsByName(C).length
                }), h.getById ? (_.filter.ID = function(e) {
                    var t = e.replace(Z, ee);
                    return function(e) {
                        return e.getAttribute("id") === t
                    }
                }, _.find.ID = function(e, t) {
                    if (void 0 !== t.getElementById && T) {
                        var n = t.getElementById(e);
                        return n ? [n] : []
                    }
                }) : (_.filter.ID = function(e) {
                    var n = e.replace(Z, ee);
                    return function(e) {
                        var t = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                        return t && t.value === n
                    }
                }, _.find.ID = function(e, t) {
                    if (void 0 !== t.getElementById && T) {
                        var n, i, r, o = t.getElementById(e);
                        if (o) {
                            if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
                            for (r = t.getElementsByName(e), i = 0; o = r[i++];)
                                if ((n = o.getAttributeNode("id")) && n.value === e) return [o]
                        }
                        return []
                    }
                }), _.find.TAG = h.getElementsByTagName ? function(e, t) {
                    return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : h.qsa ? t.querySelectorAll(e) : void 0
                } : function(e, t) {
                    var n, i = [],
                        r = 0,
                        o = t.getElementsByTagName(e);
                    if ("*" === e) {
                        for (; n = o[r++];) 1 === n.nodeType && i.push(n);
                        return i
                    }
                    return o
                }, _.find.CLASS = h.getElementsByClassName && function(e, t) {
                    if (void 0 !== t.getElementsByClassName && T) return t.getElementsByClassName(e)
                }, a = [], m = [], (h.qsa = K.test(E.querySelectorAll)) && (le(function(e) {
                    s.appendChild(e).innerHTML = "<a id='" + C + "'></a><select id='" + C + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && m.push("[*^$]=" + P + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || m.push("\\[" + P + "*(?:value|" + q + ")"), e.querySelectorAll("[id~=" + C + "-]").length || m.push("~="), e.querySelectorAll(":checked").length || m.push(":checked"), e.querySelectorAll("a#" + C + "+*").length || m.push(".#.+[+~]")
                }), le(function(e) {
                    e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                    var t = E.createElement("input");
                    t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && m.push("name" + P + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && m.push(":enabled", ":disabled"), s.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && m.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), m.push(",.*:")
                })), (h.matchesSelector = K.test(u = s.matches || s.webkitMatchesSelector || s.mozMatchesSelector || s.oMatchesSelector || s.msMatchesSelector)) && le(function(e) {
                    h.disconnectedMatch = u.call(e, "*"), u.call(e, "[s!='']:x"), a.push("!=", F)
                }), m = m.length && new RegExp(m.join("|")), a = a.length && new RegExp(a.join("|")), t = K.test(s.compareDocumentPosition), v = t || K.test(s.contains) ? function(e, t) {
                    var n = 9 === e.nodeType ? e.documentElement : e,
                        i = t && t.parentNode;
                    return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
                } : function(e, t) {
                    if (t)
                        for (; t = t.parentNode;)
                            if (t === e) return !0;
                    return !1
                }, k = t ? function(e, t) {
                    if (e === t) return c = !0, 0;
                    var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                    return n || (1 & (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !h.sortDetached && t.compareDocumentPosition(e) === n ? e === E || e.ownerDocument === y && v(y, e) ? -1 : t === E || t.ownerDocument === y && v(y, t) ? 1 : l ? I(l, e) - I(l, t) : 0 : 4 & n ? -1 : 1)
                } : function(e, t) {
                    if (e === t) return c = !0, 0;
                    var n, i = 0,
                        r = e.parentNode,
                        o = t.parentNode,
                        s = [e],
                        a = [t];
                    if (!r || !o) return e === E ? -1 : t === E ? 1 : r ? -1 : o ? 1 : l ? I(l, e) - I(l, t) : 0;
                    if (r === o) return ue(e, t);
                    for (n = e; n = n.parentNode;) s.unshift(n);
                    for (n = t; n = n.parentNode;) a.unshift(n);
                    for (; s[i] === a[i];) i++;
                    return i ? ue(s[i], a[i]) : s[i] === y ? -1 : a[i] === y ? 1 : 0
                }), E
            }, oe.matches = function(e, t) {
                return oe(e, null, null, t)
            }, oe.matchesSelector = function(e, t) {
                if ((e.ownerDocument || e) !== E && x(e), t = t.replace(Q, "='$1']"), h.matchesSelector && T && !D[t + " "] && (!a || !a.test(t)) && (!m || !m.test(t))) try {
                    var n = u.call(e, t);
                    if (n || h.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n
                } catch (e) {}
                return 0 < oe(t, E, null, [e]).length
            }, oe.contains = function(e, t) {
                return (e.ownerDocument || e) !== E && x(e), v(e, t)
            }, oe.attr = function(e, t) {
                (e.ownerDocument || e) !== E && x(e);
                var n = _.attrHandle[t.toLowerCase()],
                    i = n && N.call(_.attrHandle, t.toLowerCase()) ? n(e, t, !T) : void 0;
                return void 0 !== i ? i : h.attributes || !T ? e.getAttribute(t) : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
            }, oe.escape = function(e) {
                return (e + "").replace(te, ne)
            }, oe.error = function(e) {
                throw new Error("Syntax error, unrecognized expression: " + e)
            }, oe.uniqueSort = function(e) {
                var t, n = [],
                    i = 0,
                    r = 0;
                if (c = !h.detectDuplicates, l = !h.sortStable && e.slice(0), e.sort(k), c) {
                    for (; t = e[r++];) t === e[r] && (i = n.push(r));
                    for (; i--;) e.splice(n[i], 1)
                }
                return l = null, e
            }, o = oe.getText = function(e) {
                var t, n = "",
                    i = 0,
                    r = e.nodeType;
                if (r) {
                    if (1 === r || 9 === r || 11 === r) {
                        if ("string" == typeof e.textContent) return e.textContent;
                        for (e = e.firstChild; e; e = e.nextSibling) n += o(e)
                    } else if (3 === r || 4 === r) return e.nodeValue
                } else
                    for (; t = e[i++];) n += o(t);
                return n
            }, (_ = oe.selectors = {
                cacheLength: 50,
                createPseudo: ae,
                match: V,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function(e) {
                        return e[1] = e[1].replace(Z, ee), e[3] = (e[3] || e[4] || e[5] || "").replace(Z, ee), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                    },
                    CHILD: function(e) {
                        return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || oe.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && oe.error(e[0]), e
                    },
                    PSEUDO: function(e) {
                        var t, n = !e[6] && e[2];
                        return V.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && $.test(n) && (t = p(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(e) {
                        var t = e.replace(Z, ee).toLowerCase();
                        return "*" === e ? function() {
                            return !0
                        } : function(e) {
                            return e.nodeName && e.nodeName.toLowerCase() === t
                        }
                    },
                    CLASS: function(e) {
                        var t = d[e + " "];
                        return t || (t = new RegExp("(^|" + P + ")" + e + "(" + P + "|$)")) && d(e, function(e) {
                            return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                        })
                    },
                    ATTR: function(n, i, r) {
                        return function(e) {
                            var t = oe.attr(e, n);
                            return null == t ? "!=" === i : !i || (t += "", "=" === i ? t === r : "!=" === i ? t !== r : "^=" === i ? r && 0 === t.indexOf(r) : "*=" === i ? r && -1 < t.indexOf(r) : "$=" === i ? r && t.slice(-r.length) === r : "~=" === i ? -1 < (" " + t.replace(M, " ") + " ").indexOf(r) : "|=" === i && (t === r || t.slice(0, r.length + 1) === r + "-"))
                        }
                    },
                    CHILD: function(p, e, t, g, m) {
                        var v = "nth" !== p.slice(0, 3),
                            y = "last" !== p.slice(-4),
                            b = "of-type" === e;
                        return 1 === g && 0 === m ? function(e) {
                            return !!e.parentNode
                        } : function(e, t, n) {
                            var i, r, o, s, a, l, c = v !== y ? "nextSibling" : "previousSibling",
                                u = e.parentNode,
                                f = b && e.nodeName.toLowerCase(),
                                d = !n && !b,
                                h = !1;
                            if (u) {
                                if (v) {
                                    for (; c;) {
                                        for (s = e; s = s[c];)
                                            if (b ? s.nodeName.toLowerCase() === f : 1 === s.nodeType) return !1;
                                        l = c = "only" === p && !l && "nextSibling"
                                    }
                                    return !0
                                }
                                if (l = [y ? u.firstChild : u.lastChild], y && d) {
                                    for (h = (a = (i = (r = (o = (s = u)[C] || (s[C] = {}))[s.uniqueID] || (o[s.uniqueID] = {}))[p] || [])[0] === S && i[1]) && i[2], s = a && u.childNodes[a]; s = ++a && s && s[c] || (h = a = 0) || l.pop();)
                                        if (1 === s.nodeType && ++h && s === e) {
                                            r[p] = [S, a, h];
                                            break
                                        }
                                } else if (d && (h = a = (i = (r = (o = (s = e)[C] || (s[C] = {}))[s.uniqueID] || (o[s.uniqueID] = {}))[p] || [])[0] === S && i[1]), !1 === h)
                                    for (;
                                        (s = ++a && s && s[c] || (h = a = 0) || l.pop()) && ((b ? s.nodeName.toLowerCase() !== f : 1 !== s.nodeType) || !++h || (d && ((r = (o = s[C] || (s[C] = {}))[s.uniqueID] || (o[s.uniqueID] = {}))[p] = [S, h]), s !== e)););
                                return (h -= m) === g || h % g == 0 && 0 <= h / g
                            }
                        }
                    },
                    PSEUDO: function(e, o) {
                        var t, s = _.pseudos[e] || _.setFilters[e.toLowerCase()] || oe.error("unsupported pseudo: " + e);
                        return s[C] ? s(o) : 1 < s.length ? (t = [e, e, "", o], _.setFilters.hasOwnProperty(e.toLowerCase()) ? ae(function(e, t) {
                            for (var n, i = s(e, o), r = i.length; r--;) e[n = I(e, i[r])] = !(t[n] = i[r])
                        }) : function(e) {
                            return s(e, 0, t)
                        }) : s
                    }
                },
                pseudos: {
                    not: ae(function(e) {
                        var i = [],
                            r = [],
                            a = f(e.replace(B, "$1"));
                        return a[C] ? ae(function(e, t, n, i) {
                            for (var r, o = a(e, null, i, []), s = e.length; s--;)(r = o[s]) && (e[s] = !(t[s] = r))
                        }) : function(e, t, n) {
                            return i[0] = e, a(i, null, n, r), i[0] = null, !r.pop()
                        }
                    }),
                    has: ae(function(t) {
                        return function(e) {
                            return 0 < oe(t, e).length
                        }
                    }),
                    contains: ae(function(t) {
                        return t = t.replace(Z, ee),
                            function(e) {
                                return -1 < (e.textContent || e.innerText || o(e)).indexOf(t)
                            }
                    }),
                    lang: ae(function(n) {
                        return z.test(n || "") || oe.error("unsupported lang: " + n), n = n.replace(Z, ee).toLowerCase(),
                            function(e) {
                                var t;
                                do {
                                    if (t = T ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-")
                                } while ((e = e.parentNode) && 1 === e.nodeType);
                                return !1
                            }
                    }),
                    target: function(e) {
                        var t = n.location && n.location.hash;
                        return t && t.slice(1) === e.id
                    },
                    root: function(e) {
                        return e === s
                    },
                    focus: function(e) {
                        return e === E.activeElement && (!E.hasFocus || E.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                    },
                    enabled: he(!1),
                    disabled: he(!0),
                    checked: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && !!e.checked || "option" === t && !!e.selected
                    },
                    selected: function(e) {
                        return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                    },
                    empty: function(e) {
                        for (e = e.firstChild; e; e = e.nextSibling)
                            if (e.nodeType < 6) return !1;
                        return !0
                    },
                    parent: function(e) {
                        return !_.pseudos.empty(e)
                    },
                    header: function(e) {
                        return Y.test(e.nodeName)
                    },
                    input: function(e) {
                        return X.test(e.nodeName)
                    },
                    button: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && "button" === e.type || "button" === t
                    },
                    text: function(e) {
                        var t;
                        return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                    },
                    first: pe(function() {
                        return [0]
                    }),
                    last: pe(function(e, t) {
                        return [t - 1]
                    }),
                    eq: pe(function(e, t, n) {
                        return [n < 0 ? n + t : n]
                    }),
                    even: pe(function(e, t) {
                        for (var n = 0; n < t; n += 2) e.push(n);
                        return e
                    }),
                    odd: pe(function(e, t) {
                        for (var n = 1; n < t; n += 2) e.push(n);
                        return e
                    }),
                    lt: pe(function(e, t, n) {
                        for (var i = n < 0 ? n + t : n; 0 <= --i;) e.push(i);
                        return e
                    }),
                    gt: pe(function(e, t, n) {
                        for (var i = n < 0 ? n + t : n; ++i < t;) e.push(i);
                        return e
                    })
                }
            }).pseudos.nth = _.pseudos.eq, {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) _.pseudos[e] = fe(e);
        for (e in {
                submit: !0,
                reset: !0
            }) _.pseudos[e] = de(e);

        function me() {}

        function ve(e) {
            for (var t = 0, n = e.length, i = ""; t < n; t++) i += e[t].value;
            return i
        }

        function ye(a, e, t) {
            var l = e.dir,
                c = e.next,
                u = c || l,
                f = t && "parentNode" === u,
                d = i++;
            return e.first ? function(e, t, n) {
                for (; e = e[l];)
                    if (1 === e.nodeType || f) return a(e, t, n);
                return !1
            } : function(e, t, n) {
                var i, r, o, s = [S, d];
                if (n) {
                    for (; e = e[l];)
                        if ((1 === e.nodeType || f) && a(e, t, n)) return !0
                } else
                    for (; e = e[l];)
                        if (1 === e.nodeType || f)
                            if (r = (o = e[C] || (e[C] = {}))[e.uniqueID] || (o[e.uniqueID] = {}), c && c === e.nodeName.toLowerCase()) e = e[l] || e;
                            else {
                                if ((i = r[u]) && i[0] === S && i[1] === d) return s[2] = i[2];
                                if ((r[u] = s)[2] = a(e, t, n)) return !0
                            } return !1
            }
        }

        function be(r) {
            return 1 < r.length ? function(e, t, n) {
                for (var i = r.length; i--;)
                    if (!r[i](e, t, n)) return !1;
                return !0
            } : r[0]
        }

        function _e(e, t, n, i, r) {
            for (var o, s = [], a = 0, l = e.length, c = null != t; a < l; a++)(o = e[a]) && (n && !n(o, i, r) || (s.push(o), c && t.push(a)));
            return s
        }

        function we(h, p, g, m, v, e) {
            return m && !m[C] && (m = we(m)), v && !v[C] && (v = we(v, e)), ae(function(e, t, n, i) {
                var r, o, s, a = [],
                    l = [],
                    c = t.length,
                    u = e || function(e, t, n) {
                        for (var i = 0, r = t.length; i < r; i++) oe(e, t[i], n);
                        return n
                    }(p || "*", n.nodeType ? [n] : n, []),
                    f = !h || !e && p ? u : _e(u, a, h, n, i),
                    d = g ? v || (e ? h : c || m) ? [] : t : f;
                if (g && g(f, d, n, i), m)
                    for (r = _e(d, l), m(r, [], n, i), o = r.length; o--;)(s = r[o]) && (d[l[o]] = !(f[l[o]] = s));
                if (e) {
                    if (v || h) {
                        if (v) {
                            for (r = [], o = d.length; o--;)(s = d[o]) && r.push(f[o] = s);
                            v(null, d = [], r, i)
                        }
                        for (o = d.length; o--;)(s = d[o]) && -1 < (r = v ? I(e, s) : a[o]) && (e[r] = !(t[r] = s))
                    }
                } else d = _e(d === t ? d.splice(c, d.length) : d), v ? v(null, t, d, i) : O.apply(t, d)
            })
        }

        function xe(e) {
            for (var r, t, n, i = e.length, o = _.relative[e[0].type], s = o || _.relative[" "], a = o ? 1 : 0, l = ye(function(e) {
                    return e === r
                }, s, !0), c = ye(function(e) {
                    return -1 < I(r, e)
                }, s, !0), u = [function(e, t, n) {
                    var i = !o && (n || t !== w) || ((r = t).nodeType ? l(e, t, n) : c(e, t, n));
                    return r = null, i
                }]; a < i; a++)
                if (t = _.relative[e[a].type]) u = [ye(be(u), t)];
                else {
                    if ((t = _.filter[e[a].type].apply(null, e[a].matches))[C]) {
                        for (n = ++a; n < i && !_.relative[e[n].type]; n++);
                        return we(1 < a && be(u), 1 < a && ve(e.slice(0, a - 1).concat({
                            value: " " === e[a - 2].type ? "*" : ""
                        })).replace(B, "$1"), t, a < n && xe(e.slice(a, n)), n < i && xe(e = e.slice(n)), n < i && ve(e))
                    }
                    u.push(t)
                }
            return be(u)
        }
        return me.prototype = _.filters = _.pseudos, _.setFilters = new me, p = oe.tokenize = function(e, t) {
            var n, i, r, o, s, a, l, c = b[e + " "];
            if (c) return t ? 0 : c.slice(0);
            for (s = e, a = [], l = _.preFilter; s;) {
                for (o in n && !(i = W.exec(s)) || (i && (s = s.slice(i[0].length) || s), a.push(r = [])), n = !1, (i = U.exec(s)) && (n = i.shift(), r.push({
                        value: n,
                        type: i[0].replace(B, " ")
                    }), s = s.slice(n.length)), _.filter) !(i = V[o].exec(s)) || l[o] && !(i = l[o](i)) || (n = i.shift(), r.push({
                    value: n,
                    type: o,
                    matches: i
                }), s = s.slice(n.length));
                if (!n) break
            }
            return t ? s.length : s ? oe.error(e) : b(e, a).slice(0)
        }, f = oe.compile = function(e, t) {
            var n, m, v, y, b, i, r = [],
                o = [],
                s = D[e + " "];
            if (!s) {
                for (t || (t = p(e)), n = t.length; n--;)(s = xe(t[n]))[C] ? r.push(s) : o.push(s);
                (s = D(e, (m = o, v = r, y = 0 < v.length, b = 0 < m.length, i = function(e, t, n, i, r) {
                    var o, s, a, l = 0,
                        c = "0",
                        u = e && [],
                        f = [],
                        d = w,
                        h = e || b && _.find.TAG("*", r),
                        p = S += null == d ? 1 : Math.random() || .1,
                        g = h.length;
                    for (r && (w = t === E || t || r); c !== g && null != (o = h[c]); c++) {
                        if (b && o) {
                            for (s = 0, t || o.ownerDocument === E || (x(o), n = !T); a = m[s++];)
                                if (a(o, t || E, n)) {
                                    i.push(o);
                                    break
                                }
                            r && (S = p)
                        }
                        y && ((o = !a && o) && l--, e && u.push(o))
                    }
                    if (l += c, y && c !== l) {
                        for (s = 0; a = v[s++];) a(u, f, t, n);
                        if (e) {
                            if (0 < l)
                                for (; c--;) u[c] || f[c] || (f[c] = A.call(i));
                            f = _e(f)
                        }
                        O.apply(i, f), r && !e && 0 < f.length && 1 < l + v.length && oe.uniqueSort(i)
                    }
                    return r && (S = p, w = d), u
                }, y ? ae(i) : i))).selector = e
            }
            return s
        }, g = oe.select = function(e, t, n, i) {
            var r, o, s, a, l, c = "function" == typeof e && e,
                u = !i && p(e = c.selector || e);
            if (n = n || [], 1 === u.length) {
                if (2 < (o = u[0] = u[0].slice(0)).length && "ID" === (s = o[0]).type && 9 === t.nodeType && T && _.relative[o[1].type]) {
                    if (!(t = (_.find.ID(s.matches[0].replace(Z, ee), t) || [])[0])) return n;
                    c && (t = t.parentNode), e = e.slice(o.shift().value.length)
                }
                for (r = V.needsContext.test(e) ? 0 : o.length; r-- && (s = o[r], !_.relative[a = s.type]);)
                    if ((l = _.find[a]) && (i = l(s.matches[0].replace(Z, ee), J.test(o[0].type) && ge(t.parentNode) || t))) {
                        if (o.splice(r, 1), !(e = i.length && ve(o))) return O.apply(n, i), n;
                        break
                    }
            }
            return (c || f(e, u))(i, t, !T, n, !t || J.test(e) && ge(t.parentNode) || t), n
        }, h.sortStable = C.split("").sort(k).join("") === C, h.detectDuplicates = !!c, x(), h.sortDetached = le(function(e) {
            return 1 & e.compareDocumentPosition(E.createElement("fieldset"))
        }), le(function(e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || ce("type|href|height|width", function(e, t, n) {
            if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), h.attributes && le(function(e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || ce("value", function(e, t, n) {
            if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
        }), le(function(e) {
            return null == e.getAttribute("disabled")
        }) || ce(q, function(e, t, n) {
            var i;
            if (!n) return !0 === e[t] ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
        }), oe
    }(E);
    C.find = h, C.expr = h.selectors, C.expr[":"] = C.expr.pseudos, C.uniqueSort = C.unique = h.uniqueSort, C.text = h.getText, C.isXMLDoc = h.isXML, C.contains = h.contains, C.escapeSelector = h.escape;
    var p = function(e, t, n) {
            for (var i = [], r = void 0 !== n;
                (e = e[t]) && 9 !== e.nodeType;)
                if (1 === e.nodeType) {
                    if (r && C(e).is(n)) break;
                    i.push(e)
                }
            return i
        },
        x = function(e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        },
        S = C.expr.match.needsContext;

    function D(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
    }
    var k = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

    function N(e, n, i) {
        return y(n) ? C.grep(e, function(e, t) {
            return !!n.call(e, t, e) !== i
        }) : n.nodeType ? C.grep(e, function(e) {
            return e === n !== i
        }) : "string" != typeof n ? C.grep(e, function(e) {
            return -1 < r.call(n, e) !== i
        }) : C.filter(n, e, i)
    }
    C.filter = function(e, t, n) {
        var i = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? C.find.matchesSelector(i, e) ? [i] : [] : C.find.matches(e, C.grep(t, function(e) {
            return 1 === e.nodeType
        }))
    }, C.fn.extend({
        find: function(e) {
            var t, n, i = this.length,
                r = this;
            if ("string" != typeof e) return this.pushStack(C(e).filter(function() {
                for (t = 0; t < i; t++)
                    if (C.contains(r[t], this)) return !0
            }));
            for (n = this.pushStack([]), t = 0; t < i; t++) C.find(e, r[t], n);
            return 1 < i ? C.uniqueSort(n) : n
        },
        filter: function(e) {
            return this.pushStack(N(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(N(this, e || [], !0))
        },
        is: function(e) {
            return !!N(this, "string" == typeof e && S.test(e) ? C(e) : e || [], !1).length
        }
    });
    var A, j = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (C.fn.init = function(e, t, n) {
        var i, r;
        if (!e) return this;
        if (n = n || A, "string" == typeof e) {
            if (!(i = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : j.exec(e)) || !i[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
            if (i[1]) {
                if (t = t instanceof C ? t[0] : t, C.merge(this, C.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : T, !0)), k.test(i[1]) && C.isPlainObject(t))
                    for (i in t) y(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
                return this
            }
            return (r = T.getElementById(i[2])) && (this[0] = r, this.length = 1), this
        }
        return e.nodeType ? (this[0] = e, this.length = 1, this) : y(e) ? void 0 !== n.ready ? n.ready(e) : e(C) : C.makeArray(e, this)
    }).prototype = C.fn, A = C(T);
    var O = /^(?:parents|prev(?:Until|All))/,
        L = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };

    function I(e, t) {
        for (;
            (e = e[t]) && 1 !== e.nodeType;);
        return e
    }
    C.fn.extend({
        has: function(e) {
            var t = C(e, this),
                n = t.length;
            return this.filter(function() {
                for (var e = 0; e < n; e++)
                    if (C.contains(this, t[e])) return !0
            })
        },
        closest: function(e, t) {
            var n, i = 0,
                r = this.length,
                o = [],
                s = "string" != typeof e && C(e);
            if (!S.test(e))
                for (; i < r; i++)
                    for (n = this[i]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (s ? -1 < s.index(n) : 1 === n.nodeType && C.find.matchesSelector(n, e))) {
                            o.push(n);
                            break
                        }
            return this.pushStack(1 < o.length ? C.uniqueSort(o) : o)
        },
        index: function(e) {
            return e ? "string" == typeof e ? r.call(C(e), this[0]) : r.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(C.uniqueSort(C.merge(this.get(), C(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), C.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return p(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return p(e, "parentNode", n)
        },
        next: function(e) {
            return I(e, "nextSibling")
        },
        prev: function(e) {
            return I(e, "previousSibling")
        },
        nextAll: function(e) {
            return p(e, "nextSibling")
        },
        prevAll: function(e) {
            return p(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return p(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return p(e, "previousSibling", n)
        },
        siblings: function(e) {
            return x((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return x(e.firstChild)
        },
        contents: function(e) {
            return D(e, "iframe") ? e.contentDocument : (D(e, "template") && (e = e.content || e), C.merge([], e.childNodes))
        }
    }, function(i, r) {
        C.fn[i] = function(e, t) {
            var n = C.map(this, r, e);
            return "Until" !== i.slice(-5) && (t = e), t && "string" == typeof t && (n = C.filter(t, n)), 1 < this.length && (L[i] || C.uniqueSort(n), O.test(i) && n.reverse()), this.pushStack(n)
        }
    });
    var q = /[^\x20\t\r\n\f]+/g;

    function P(e) {
        return e
    }

    function H(e) {
        throw e
    }

    function R(e, t, n, i) {
        var r;
        try {
            e && y(r = e.promise) ? r.call(e).done(t).fail(n) : e && y(r = e.then) ? r.call(e, t, n) : t.apply(void 0, [e].slice(i))
        } catch (e) {
            n.apply(void 0, [e])
        }
    }
    C.Callbacks = function(i) {
        var e, n;
        i = "string" == typeof i ? (e = i, n = {}, C.each(e.match(q) || [], function(e, t) {
            n[t] = !0
        }), n) : C.extend({}, i);
        var r, t, o, s, a = [],
            l = [],
            c = -1,
            u = function() {
                for (s = s || i.once, o = r = !0; l.length; c = -1)
                    for (t = l.shift(); ++c < a.length;) !1 === a[c].apply(t[0], t[1]) && i.stopOnFalse && (c = a.length, t = !1);
                i.memory || (t = !1), r = !1, s && (a = t ? [] : "")
            },
            f = {
                add: function() {
                    return a && (t && !r && (c = a.length - 1, l.push(t)), function n(e) {
                        C.each(e, function(e, t) {
                            y(t) ? i.unique && f.has(t) || a.push(t) : t && t.length && "string" !== w(t) && n(t)
                        })
                    }(arguments), t && !r && u()), this
                },
                remove: function() {
                    return C.each(arguments, function(e, t) {
                        for (var n; - 1 < (n = C.inArray(t, a, n));) a.splice(n, 1), n <= c && c--
                    }), this
                },
                has: function(e) {
                    return e ? -1 < C.inArray(e, a) : 0 < a.length
                },
                empty: function() {
                    return a && (a = []), this
                },
                disable: function() {
                    return s = l = [], a = t = "", this
                },
                disabled: function() {
                    return !a
                },
                lock: function() {
                    return s = l = [], t || r || (a = t = ""), this
                },
                locked: function() {
                    return !!s
                },
                fireWith: function(e, t) {
                    return s || (t = [e, (t = t || []).slice ? t.slice() : t], l.push(t), r || u()), this
                },
                fire: function() {
                    return f.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!o
                }
            };
        return f
    }, C.extend({
        Deferred: function(e) {
            var o = [
                    ["notify", "progress", C.Callbacks("memory"), C.Callbacks("memory"), 2],
                    ["resolve", "done", C.Callbacks("once memory"), C.Callbacks("once memory"), 0, "resolved"],
                    ["reject", "fail", C.Callbacks("once memory"), C.Callbacks("once memory"), 1, "rejected"]
                ],
                r = "pending",
                s = {
                    state: function() {
                        return r
                    },
                    always: function() {
                        return a.done(arguments).fail(arguments), this
                    },
                    catch: function(e) {
                        return s.then(null, e)
                    },
                    pipe: function() {
                        var r = arguments;
                        return C.Deferred(function(i) {
                            C.each(o, function(e, t) {
                                var n = y(r[t[4]]) && r[t[4]];
                                a[t[1]](function() {
                                    var e = n && n.apply(this, arguments);
                                    e && y(e.promise) ? e.promise().progress(i.notify).done(i.resolve).fail(i.reject) : i[t[0] + "With"](this, n ? [e] : arguments)
                                })
                            }), r = null
                        }).promise()
                    },
                    then: function(t, n, i) {
                        var l = 0;

                        function c(r, o, s, a) {
                            return function() {
                                var n = this,
                                    i = arguments,
                                    e = function() {
                                        var e, t;
                                        if (!(r < l)) {
                                            if ((e = s.apply(n, i)) === o.promise()) throw new TypeError("Thenable self-resolution");
                                            t = e && ("object" == typeof e || "function" == typeof e) && e.then, y(t) ? a ? t.call(e, c(l, o, P, a), c(l, o, H, a)) : (l++, t.call(e, c(l, o, P, a), c(l, o, H, a), c(l, o, P, o.notifyWith))) : (s !== P && (n = void 0, i = [e]), (a || o.resolveWith)(n, i))
                                        }
                                    },
                                    t = a ? e : function() {
                                        try {
                                            e()
                                        } catch (e) {
                                            C.Deferred.exceptionHook && C.Deferred.exceptionHook(e, t.stackTrace), l <= r + 1 && (s !== H && (n = void 0, i = [e]), o.rejectWith(n, i))
                                        }
                                    };
                                r ? t() : (C.Deferred.getStackHook && (t.stackTrace = C.Deferred.getStackHook()), E.setTimeout(t))
                            }
                        }
                        return C.Deferred(function(e) {
                            o[0][3].add(c(0, e, y(i) ? i : P, e.notifyWith)), o[1][3].add(c(0, e, y(t) ? t : P)), o[2][3].add(c(0, e, y(n) ? n : H))
                        }).promise()
                    },
                    promise: function(e) {
                        return null != e ? C.extend(e, s) : s
                    }
                },
                a = {};
            return C.each(o, function(e, t) {
                var n = t[2],
                    i = t[5];
                s[t[1]] = n.add, i && n.add(function() {
                    r = i
                }, o[3 - e][2].disable, o[3 - e][3].disable, o[0][2].lock, o[0][3].lock), n.add(t[3].fire), a[t[0]] = function() {
                    return a[t[0] + "With"](this === a ? void 0 : this, arguments), this
                }, a[t[0] + "With"] = n.fireWith
            }), s.promise(a), e && e.call(a, a), a
        },
        when: function(e) {
            var n = arguments.length,
                t = n,
                i = Array(t),
                r = a.call(arguments),
                o = C.Deferred(),
                s = function(t) {
                    return function(e) {
                        i[t] = this, r[t] = 1 < arguments.length ? a.call(arguments) : e, --n || o.resolveWith(i, r)
                    }
                };
            if (n <= 1 && (R(e, o.done(s(t)).resolve, o.reject, !n), "pending" === o.state() || y(r[t] && r[t].then))) return o.then();
            for (; t--;) R(r[t], s(t), o.reject);
            return o.promise()
        }
    });
    var F = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    C.Deferred.exceptionHook = function(e, t) {
        E.console && E.console.warn && e && F.test(e.name) && E.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t)
    }, C.readyException = function(e) {
        E.setTimeout(function() {
            throw e
        })
    };
    var M = C.Deferred();

    function B() {
        T.removeEventListener("DOMContentLoaded", B), E.removeEventListener("load", B), C.ready()
    }
    C.fn.ready = function(e) {
        return M.then(e).catch(function(e) {
            C.readyException(e)
        }), this
    }, C.extend({
        isReady: !1,
        readyWait: 1,
        ready: function(e) {
            (!0 === e ? --C.readyWait : C.isReady) || ((C.isReady = !0) !== e && 0 < --C.readyWait || M.resolveWith(T, [C]))
        }
    }), C.ready.then = M.then, "complete" === T.readyState || "loading" !== T.readyState && !T.documentElement.doScroll ? E.setTimeout(C.ready) : (T.addEventListener("DOMContentLoaded", B), E.addEventListener("load", B));
    var W = function(e, t, n, i, r, o, s) {
            var a = 0,
                l = e.length,
                c = null == n;
            if ("object" === w(n))
                for (a in r = !0, n) W(e, t, a, n[a], !0, o, s);
            else if (void 0 !== i && (r = !0, y(i) || (s = !0), c && (s ? (t.call(e, i), t = null) : (c = t, t = function(e, t, n) {
                    return c.call(C(e), n)
                })), t))
                for (; a < l; a++) t(e[a], n, s ? i : i.call(e[a], a, t(e[a], n)));
            return r ? e : c ? t.call(e) : l ? t(e[0], n) : o
        },
        U = /^-ms-/,
        Q = /-([a-z])/g;

    function $(e, t) {
        return t.toUpperCase()
    }

    function z(e) {
        return e.replace(U, "ms-").replace(Q, $)
    }
    var V = function(e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    };

    function X() {
        this.expando = C.expando + X.uid++
    }
    X.uid = 1, X.prototype = {
        cache: function(e) {
            var t = e[this.expando];
            return t || (t = {}, V(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))), t
        },
        set: function(e, t, n) {
            var i, r = this.cache(e);
            if ("string" == typeof t) r[z(t)] = n;
            else
                for (i in t) r[z(i)] = t[i];
            return r
        },
        get: function(e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][z(t)]
        },
        access: function(e, t, n) {
            return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
        },
        remove: function(e, t) {
            var n, i = e[this.expando];
            if (void 0 !== i) {
                if (void 0 !== t) {
                    n = (t = Array.isArray(t) ? t.map(z) : (t = z(t)) in i ? [t] : t.match(q) || []).length;
                    for (; n--;) delete i[t[n]]
                }(void 0 === t || C.isEmptyObject(i)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
            }
        },
        hasData: function(e) {
            var t = e[this.expando];
            return void 0 !== t && !C.isEmptyObject(t)
        }
    };
    var Y = new X,
        K = new X,
        G = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        J = /[A-Z]/g;

    function Z(e, t, n) {
        var i, r;
        if (void 0 === n && 1 === e.nodeType)
            if (i = "data-" + t.replace(J, "-$&").toLowerCase(), "string" == typeof(n = e.getAttribute(i))) {
                try {
                    n = "true" === (r = n) || "false" !== r && ("null" === r ? null : r === +r + "" ? +r : G.test(r) ? JSON.parse(r) : r)
                } catch (e) {}
                K.set(e, t, n)
            } else n = void 0;
        return n
    }
    C.extend({
        hasData: function(e) {
            return K.hasData(e) || Y.hasData(e)
        },
        data: function(e, t, n) {
            return K.access(e, t, n)
        },
        removeData: function(e, t) {
            K.remove(e, t)
        },
        _data: function(e, t, n) {
            return Y.access(e, t, n)
        },
        _removeData: function(e, t) {
            Y.remove(e, t)
        }
    }), C.fn.extend({
        data: function(n, e) {
            var t, i, r, o = this[0],
                s = o && o.attributes;
            if (void 0 === n) {
                if (this.length && (r = K.get(o), 1 === o.nodeType && !Y.get(o, "hasDataAttrs"))) {
                    for (t = s.length; t--;) s[t] && 0 === (i = s[t].name).indexOf("data-") && (i = z(i.slice(5)), Z(o, i, r[i]));
                    Y.set(o, "hasDataAttrs", !0)
                }
                return r
            }
            return "object" == typeof n ? this.each(function() {
                K.set(this, n)
            }) : W(this, function(e) {
                var t;
                if (o && void 0 === e) {
                    if (void 0 !== (t = K.get(o, n))) return t;
                    if (void 0 !== (t = Z(o, n))) return t
                } else this.each(function() {
                    K.set(this, n, e)
                })
            }, null, e, 1 < arguments.length, null, !0)
        },
        removeData: function(e) {
            return this.each(function() {
                K.remove(this, e)
            })
        }
    }), C.extend({
        queue: function(e, t, n) {
            var i;
            if (e) return t = (t || "fx") + "queue", i = Y.get(e, t), n && (!i || Array.isArray(n) ? i = Y.access(e, t, C.makeArray(n)) : i.push(n)), i || []
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = C.queue(e, t),
                i = n.length,
                r = n.shift(),
                o = C._queueHooks(e, t);
            "inprogress" === r && (r = n.shift(), i--), r && ("fx" === t && n.unshift("inprogress"), delete o.stop, r.call(e, function() {
                C.dequeue(e, t)
            }, o)), !i && o && o.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return Y.get(e, n) || Y.access(e, n, {
                empty: C.Callbacks("once memory").add(function() {
                    Y.remove(e, [t + "queue", n])
                })
            })
        }
    }), C.fn.extend({
        queue: function(t, n) {
            var e = 2;
            return "string" != typeof t && (n = t, t = "fx", e--), arguments.length < e ? C.queue(this[0], t) : void 0 === n ? this : this.each(function() {
                var e = C.queue(this, t, n);
                C._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && C.dequeue(this, t)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                C.dequeue(this, e)
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            var n, i = 1,
                r = C.Deferred(),
                o = this,
                s = this.length,
                a = function() {
                    --i || r.resolveWith(o, [o])
                };
            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; s--;)(n = Y.get(o[s], e + "queueHooks")) && n.empty && (i++, n.empty.add(a));
            return a(), r.promise(t)
        }
    });
    var ee = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        te = new RegExp("^(?:([+-])=|)(" + ee + ")([a-z%]*)$", "i"),
        ne = ["Top", "Right", "Bottom", "Left"],
        ie = function(e, t) {
            return "none" === (e = t || e).style.display || "" === e.style.display && C.contains(e.ownerDocument, e) && "none" === C.css(e, "display")
        },
        re = function(e, t, n, i) {
            var r, o, s = {};
            for (o in t) s[o] = e.style[o], e.style[o] = t[o];
            for (o in r = n.apply(e, i || []), t) e.style[o] = s[o];
            return r
        };

    function oe(e, t, n, i) {
        var r, o, s = 20,
            a = i ? function() {
                return i.cur()
            } : function() {
                return C.css(e, t, "")
            },
            l = a(),
            c = n && n[3] || (C.cssNumber[t] ? "" : "px"),
            u = (C.cssNumber[t] || "px" !== c && +l) && te.exec(C.css(e, t));
        if (u && u[3] !== c) {
            for (l /= 2, c = c || u[3], u = +l || 1; s--;) C.style(e, t, u + c), (1 - o) * (1 - (o = a() / l || .5)) <= 0 && (s = 0), u /= o;
            u *= 2, C.style(e, t, u + c), n = n || []
        }
        return n && (u = +u || +l || 0, r = n[1] ? u + (n[1] + 1) * n[2] : +n[2], i && (i.unit = c, i.start = u, i.end = r)), r
    }
    var se = {};

    function ae(e, t) {
        for (var n, i, r = [], o = 0, s = e.length; o < s; o++)(i = e[o]).style && (n = i.style.display, t ? ("none" === n && (r[o] = Y.get(i, "display") || null, r[o] || (i.style.display = "")), "" === i.style.display && ie(i) && (r[o] = (f = c = l = void 0, c = (a = i).ownerDocument, u = a.nodeName, (f = se[u]) || (l = c.body.appendChild(c.createElement(u)), f = C.css(l, "display"), l.parentNode.removeChild(l), "none" === f && (f = "block"), se[u] = f)))) : "none" !== n && (r[o] = "none", Y.set(i, "display", n)));
        var a, l, c, u, f;
        for (o = 0; o < s; o++) null != r[o] && (e[o].style.display = r[o]);
        return e
    }
    C.fn.extend({
        show: function() {
            return ae(this, !0)
        },
        hide: function() {
            return ae(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                ie(this) ? C(this).show() : C(this).hide()
            })
        }
    });
    var le = /^(?:checkbox|radio)$/i,
        ce = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
        ue = /^$|^module$|\/(?:java|ecma)script/i,
        fe = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };

    function de(e, t) {
        var n;
        return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && D(e, t) ? C.merge([e], n) : n
    }

    function he(e, t) {
        for (var n = 0, i = e.length; n < i; n++) Y.set(e[n], "globalEval", !t || Y.get(t[n], "globalEval"))
    }
    fe.optgroup = fe.option, fe.tbody = fe.tfoot = fe.colgroup = fe.caption = fe.thead, fe.th = fe.td;
    var pe, ge, me = /<|&#?\w+;/;

    function ve(e, t, n, i, r) {
        for (var o, s, a, l, c, u, f = t.createDocumentFragment(), d = [], h = 0, p = e.length; h < p; h++)
            if ((o = e[h]) || 0 === o)
                if ("object" === w(o)) C.merge(d, o.nodeType ? [o] : o);
                else if (me.test(o)) {
            for (s = s || f.appendChild(t.createElement("div")), a = (ce.exec(o) || ["", ""])[1].toLowerCase(), l = fe[a] || fe._default, s.innerHTML = l[1] + C.htmlPrefilter(o) + l[2], u = l[0]; u--;) s = s.lastChild;
            C.merge(d, s.childNodes), (s = f.firstChild).textContent = ""
        } else d.push(t.createTextNode(o));
        for (f.textContent = "", h = 0; o = d[h++];)
            if (i && -1 < C.inArray(o, i)) r && r.push(o);
            else if (c = C.contains(o.ownerDocument, o), s = de(f.appendChild(o), "script"), c && he(s), n)
            for (u = 0; o = s[u++];) ue.test(o.type || "") && n.push(o);
        return f
    }
    pe = T.createDocumentFragment().appendChild(T.createElement("div")), (ge = T.createElement("input")).setAttribute("type", "radio"), ge.setAttribute("checked", "checked"), ge.setAttribute("name", "t"), pe.appendChild(ge), v.checkClone = pe.cloneNode(!0).cloneNode(!0).lastChild.checked, pe.innerHTML = "<textarea>x</textarea>", v.noCloneChecked = !!pe.cloneNode(!0).lastChild.defaultValue;
    var ye = T.documentElement,
        be = /^key/,
        _e = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        we = /^([^.]*)(?:\.(.+)|)/;

    function xe() {
        return !0
    }

    function Ee() {
        return !1
    }

    function Te() {
        try {
            return T.activeElement
        } catch (e) {}
    }

    function Ce(e, t, n, i, r, o) {
        var s, a;
        if ("object" == typeof t) {
            for (a in "string" != typeof n && (i = i || n, n = void 0), t) Ce(e, a, n, i, t[a], o);
            return e
        }
        if (null == i && null == r ? (r = n, i = n = void 0) : null == r && ("string" == typeof n ? (r = i, i = void 0) : (r = i, i = n, n = void 0)), !1 === r) r = Ee;
        else if (!r) return e;
        return 1 === o && (s = r, (r = function(e) {
            return C().off(e), s.apply(this, arguments)
        }).guid = s.guid || (s.guid = C.guid++)), e.each(function() {
            C.event.add(this, t, r, i, n)
        })
    }
    C.event = {
        global: {},
        add: function(t, e, n, i, r) {
            var o, s, a, l, c, u, f, d, h, p, g, m = Y.get(t);
            if (m)
                for (n.handler && (n = (o = n).handler, r = o.selector), r && C.find.matchesSelector(ye, r), n.guid || (n.guid = C.guid++), (l = m.events) || (l = m.events = {}), (s = m.handle) || (s = m.handle = function(e) {
                        return void 0 !== C && C.event.triggered !== e.type ? C.event.dispatch.apply(t, arguments) : void 0
                    }), c = (e = (e || "").match(q) || [""]).length; c--;) h = g = (a = we.exec(e[c]) || [])[1], p = (a[2] || "").split(".").sort(), h && (f = C.event.special[h] || {}, h = (r ? f.delegateType : f.bindType) || h, f = C.event.special[h] || {}, u = C.extend({
                    type: h,
                    origType: g,
                    data: i,
                    handler: n,
                    guid: n.guid,
                    selector: r,
                    needsContext: r && C.expr.match.needsContext.test(r),
                    namespace: p.join(".")
                }, o), (d = l[h]) || ((d = l[h] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(t, i, p, s) || t.addEventListener && t.addEventListener(h, s)), f.add && (f.add.call(t, u), u.handler.guid || (u.handler.guid = n.guid)), r ? d.splice(d.delegateCount++, 0, u) : d.push(u), C.event.global[h] = !0)
        },
        remove: function(e, t, n, i, r) {
            var o, s, a, l, c, u, f, d, h, p, g, m = Y.hasData(e) && Y.get(e);
            if (m && (l = m.events)) {
                for (c = (t = (t || "").match(q) || [""]).length; c--;)
                    if (h = g = (a = we.exec(t[c]) || [])[1], p = (a[2] || "").split(".").sort(), h) {
                        for (f = C.event.special[h] || {}, d = l[h = (i ? f.delegateType : f.bindType) || h] || [], a = a[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = o = d.length; o--;) u = d[o], !r && g !== u.origType || n && n.guid !== u.guid || a && !a.test(u.namespace) || i && i !== u.selector && ("**" !== i || !u.selector) || (d.splice(o, 1), u.selector && d.delegateCount--, f.remove && f.remove.call(e, u));
                        s && !d.length && (f.teardown && !1 !== f.teardown.call(e, p, m.handle) || C.removeEvent(e, h, m.handle), delete l[h])
                    } else
                        for (h in l) C.event.remove(e, h + t[c], n, i, !0);
                C.isEmptyObject(l) && Y.remove(e, "handle events")
            }
        },
        dispatch: function(e) {
            var t, n, i, r, o, s, a = C.event.fix(e),
                l = new Array(arguments.length),
                c = (Y.get(this, "events") || {})[a.type] || [],
                u = C.event.special[a.type] || {};
            for (l[0] = a, t = 1; t < arguments.length; t++) l[t] = arguments[t];
            if (a.delegateTarget = this, !u.preDispatch || !1 !== u.preDispatch.call(this, a)) {
                for (s = C.event.handlers.call(this, a, c), t = 0;
                    (r = s[t++]) && !a.isPropagationStopped();)
                    for (a.currentTarget = r.elem, n = 0;
                        (o = r.handlers[n++]) && !a.isImmediatePropagationStopped();) a.rnamespace && !a.rnamespace.test(o.namespace) || (a.handleObj = o, a.data = o.data, void 0 !== (i = ((C.event.special[o.origType] || {}).handle || o.handler).apply(r.elem, l)) && !1 === (a.result = i) && (a.preventDefault(), a.stopPropagation()));
                return u.postDispatch && u.postDispatch.call(this, a), a.result
            }
        },
        handlers: function(e, t) {
            var n, i, r, o, s, a = [],
                l = t.delegateCount,
                c = e.target;
            if (l && c.nodeType && !("click" === e.type && 1 <= e.button))
                for (; c !== this; c = c.parentNode || this)
                    if (1 === c.nodeType && ("click" !== e.type || !0 !== c.disabled)) {
                        for (o = [], s = {}, n = 0; n < l; n++) void 0 === s[r = (i = t[n]).selector + " "] && (s[r] = i.needsContext ? -1 < C(r, this).index(c) : C.find(r, this, null, [c]).length), s[r] && o.push(i);
                        o.length && a.push({
                            elem: c,
                            handlers: o
                        })
                    }
            return c = this, l < t.length && a.push({
                elem: c,
                handlers: t.slice(l)
            }), a
        },
        addProp: function(t, e) {
            Object.defineProperty(C.Event.prototype, t, {
                enumerable: !0,
                configurable: !0,
                get: y(e) ? function() {
                    if (this.originalEvent) return e(this.originalEvent)
                } : function() {
                    if (this.originalEvent) return this.originalEvent[t]
                },
                set: function(e) {
                    Object.defineProperty(this, t, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: e
                    })
                }
            })
        },
        fix: function(e) {
            return e[C.expando] ? e : new C.Event(e)
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== Te() && this.focus) return this.focus(), !1
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    if (this === Te() && this.blur) return this.blur(), !1
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    if ("checkbox" === this.type && this.click && D(this, "input")) return this.click(), !1
                },
                _default: function(e) {
                    return D(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    }, C.removeEvent = function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
    }, C.Event = function(e, t) {
        if (!(this instanceof C.Event)) return new C.Event(e, t);
        e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? xe : Ee, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && C.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[C.expando] = !0
    }, C.Event.prototype = {
        constructor: C.Event,
        isDefaultPrevented: Ee,
        isPropagationStopped: Ee,
        isImmediatePropagationStopped: Ee,
        isSimulated: !1,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = xe, e && !this.isSimulated && e.preventDefault()
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = xe, e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = xe, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, C.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function(e) {
            var t = e.button;
            return null == e.which && be.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && _e.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
        }
    }, C.event.addProp), C.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e, r) {
        C.event.special[e] = {
            delegateType: r,
            bindType: r,
            handle: function(e) {
                var t, n = e.relatedTarget,
                    i = e.handleObj;
                return n && (n === this || C.contains(this, n)) || (e.type = i.origType, t = i.handler.apply(this, arguments), e.type = r), t
            }
        }
    }), C.fn.extend({
        on: function(e, t, n, i) {
            return Ce(this, e, t, n, i)
        },
        one: function(e, t, n, i) {
            return Ce(this, e, t, n, i, 1)
        },
        off: function(e, t, n) {
            var i, r;
            if (e && e.preventDefault && e.handleObj) return i = e.handleObj, C(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
            if ("object" == typeof e) {
                for (r in e) this.off(r, t, e[r]);
                return this
            }
            return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = Ee), this.each(function() {
                C.event.remove(this, e, n, t)
            })
        }
    });
    var Se = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
        De = /<script|<style|<link/i,
        ke = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Ne = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

    function Ae(e, t) {
        return D(e, "table") && D(11 !== t.nodeType ? t : t.firstChild, "tr") && C(e).children("tbody")[0] || e
    }

    function je(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
    }

    function Oe(e) {
        return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e
    }

    function Le(e, t) {
        var n, i, r, o, s, a, l, c;
        if (1 === t.nodeType) {
            if (Y.hasData(e) && (o = Y.access(e), s = Y.set(t, o), c = o.events))
                for (r in delete s.handle, s.events = {}, c)
                    for (n = 0, i = c[r].length; n < i; n++) C.event.add(t, r, c[r][n]);
            K.hasData(e) && (a = K.access(e), l = C.extend({}, a), K.set(t, l))
        }
    }

    function Ie(n, i, r, o) {
        i = g.apply([], i);
        var e, t, s, a, l, c, u = 0,
            f = n.length,
            d = f - 1,
            h = i[0],
            p = y(h);
        if (p || 1 < f && "string" == typeof h && !v.checkClone && ke.test(h)) return n.each(function(e) {
            var t = n.eq(e);
            p && (i[0] = h.call(this, e, t.html())), Ie(t, i, r, o)
        });
        if (f && (t = (e = ve(i, n[0].ownerDocument, !1, n, o)).firstChild, 1 === e.childNodes.length && (e = t), t || o)) {
            for (a = (s = C.map(de(e, "script"), je)).length; u < f; u++) l = e, u !== d && (l = C.clone(l, !0, !0), a && C.merge(s, de(l, "script"))), r.call(n[u], l, u);
            if (a)
                for (c = s[s.length - 1].ownerDocument, C.map(s, Oe), u = 0; u < a; u++) l = s[u], ue.test(l.type || "") && !Y.access(l, "globalEval") && C.contains(c, l) && (l.src && "module" !== (l.type || "").toLowerCase() ? C._evalUrl && C._evalUrl(l.src) : _(l.textContent.replace(Ne, ""), c, l))
        }
        return n
    }

    function qe(e, t, n) {
        for (var i, r = t ? C.filter(t, e) : e, o = 0; null != (i = r[o]); o++) n || 1 !== i.nodeType || C.cleanData(de(i)), i.parentNode && (n && C.contains(i.ownerDocument, i) && he(de(i, "script")), i.parentNode.removeChild(i));
        return e
    }
    C.extend({
        htmlPrefilter: function(e) {
            return e.replace(Se, "<$1></$2>")
        },
        clone: function(e, t, n) {
            var i, r, o, s, a, l, c, u = e.cloneNode(!0),
                f = C.contains(e.ownerDocument, e);
            if (!(v.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || C.isXMLDoc(e)))
                for (s = de(u), i = 0, r = (o = de(e)).length; i < r; i++) a = o[i], l = s[i], void 0, "input" === (c = l.nodeName.toLowerCase()) && le.test(a.type) ? l.checked = a.checked : "input" !== c && "textarea" !== c || (l.defaultValue = a.defaultValue);
            if (t)
                if (n)
                    for (o = o || de(e), s = s || de(u), i = 0, r = o.length; i < r; i++) Le(o[i], s[i]);
                else Le(e, u);
            return 0 < (s = de(u, "script")).length && he(s, !f && de(e, "script")), u
        },
        cleanData: function(e) {
            for (var t, n, i, r = C.event.special, o = 0; void 0 !== (n = e[o]); o++)
                if (V(n)) {
                    if (t = n[Y.expando]) {
                        if (t.events)
                            for (i in t.events) r[i] ? C.event.remove(n, i) : C.removeEvent(n, i, t.handle);
                        n[Y.expando] = void 0
                    }
                    n[K.expando] && (n[K.expando] = void 0)
                }
        }
    }), C.fn.extend({
        detach: function(e) {
            return qe(this, e, !0)
        },
        remove: function(e) {
            return qe(this, e)
        },
        text: function(e) {
            return W(this, function(e) {
                return void 0 === e ? C.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                })
            }, null, e, arguments.length)
        },
        append: function() {
            return Ie(this, arguments, function(e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Ae(this, e).appendChild(e)
            })
        },
        prepend: function() {
            return Ie(this, arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = Ae(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return Ie(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return Ie(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (C.cleanData(de(e, !1)), e.textContent = "");
            return this
        },
        clone: function(e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map(function() {
                return C.clone(this, e, t)
            })
        },
        html: function(e) {
            return W(this, function(e) {
                var t = this[0] || {},
                    n = 0,
                    i = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if ("string" == typeof e && !De.test(e) && !fe[(ce.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = C.htmlPrefilter(e);
                    try {
                        for (; n < i; n++) 1 === (t = this[n] || {}).nodeType && (C.cleanData(de(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (e) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var n = [];
            return Ie(this, arguments, function(e) {
                var t = this.parentNode;
                C.inArray(this, n) < 0 && (C.cleanData(de(this)), t && t.replaceChild(e, this))
            }, n)
        }
    }), C.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, s) {
        C.fn[e] = function(e) {
            for (var t, n = [], i = C(e), r = i.length - 1, o = 0; o <= r; o++) t = o === r ? this : this.clone(!0), C(i[o])[s](t), l.apply(n, t.get());
            return this.pushStack(n)
        }
    });
    var Pe = new RegExp("^(" + ee + ")(?!px)[a-z%]+$", "i"),
        He = function(e) {
            var t = e.ownerDocument.defaultView;
            return t && t.opener || (t = E), t.getComputedStyle(e)
        },
        Re = new RegExp(ne.join("|"), "i");

    function Fe(e, t, n) {
        var i, r, o, s, a = e.style;
        return (n = n || He(e)) && ("" !== (s = n.getPropertyValue(t) || n[t]) || C.contains(e.ownerDocument, e) || (s = C.style(e, t)), !v.pixelBoxStyles() && Pe.test(s) && Re.test(t) && (i = a.width, r = a.minWidth, o = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = n.width, a.width = i, a.minWidth = r, a.maxWidth = o)), void 0 !== s ? s + "" : s
    }

    function Me(e, t) {
        return {
            get: function() {
                if (!e()) return (this.get = t).apply(this, arguments);
                delete this.get
            }
        }
    }! function() {
        function e() {
            if (l) {
                a.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", l.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", ye.appendChild(a).appendChild(l);
                var e = E.getComputedStyle(l);
                n = "1%" !== e.top, s = 12 === t(e.marginLeft), l.style.right = "60%", o = 36 === t(e.right), i = 36 === t(e.width), l.style.position = "absolute", r = 36 === l.offsetWidth || "absolute", ye.removeChild(a), l = null
            }
        }

        function t(e) {
            return Math.round(parseFloat(e))
        }
        var n, i, r, o, s, a = T.createElement("div"),
            l = T.createElement("div");
        l.style && (l.style.backgroundClip = "content-box", l.cloneNode(!0).style.backgroundClip = "", v.clearCloneStyle = "content-box" === l.style.backgroundClip, C.extend(v, {
            boxSizingReliable: function() {
                return e(), i
            },
            pixelBoxStyles: function() {
                return e(), o
            },
            pixelPosition: function() {
                return e(), n
            },
            reliableMarginLeft: function() {
                return e(), s
            },
            scrollboxSize: function() {
                return e(), r
            }
        }))
    }();
    var Be = /^(none|table(?!-c[ea]).+)/,
        We = /^--/,
        Ue = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        Qe = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        $e = ["Webkit", "Moz", "ms"],
        ze = T.createElement("div").style;

    function Ve(e) {
        var t = C.cssProps[e];
        return t || (t = C.cssProps[e] = function(e) {
            if (e in ze) return e;
            for (var t = e[0].toUpperCase() + e.slice(1), n = $e.length; n--;)
                if ((e = $e[n] + t) in ze) return e
        }(e) || e), t
    }

    function Xe(e, t, n) {
        var i = te.exec(t);
        return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t
    }

    function Ye(e, t, n, i, r, o) {
        var s = "width" === t ? 1 : 0,
            a = 0,
            l = 0;
        if (n === (i ? "border" : "content")) return 0;
        for (; s < 4; s += 2) "margin" === n && (l += C.css(e, n + ne[s], !0, r)), i ? ("content" === n && (l -= C.css(e, "padding" + ne[s], !0, r)), "margin" !== n && (l -= C.css(e, "border" + ne[s] + "Width", !0, r))) : (l += C.css(e, "padding" + ne[s], !0, r), "padding" !== n ? l += C.css(e, "border" + ne[s] + "Width", !0, r) : a += C.css(e, "border" + ne[s] + "Width", !0, r));
        return !i && 0 <= o && (l += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - l - a - .5))), l
    }

    function Ke(e, t, n) {
        var i = He(e),
            r = Fe(e, t, i),
            o = "border-box" === C.css(e, "boxSizing", !1, i),
            s = o;
        if (Pe.test(r)) {
            if (!n) return r;
            r = "auto"
        }
        return s = s && (v.boxSizingReliable() || r === e.style[t]), ("auto" === r || !parseFloat(r) && "inline" === C.css(e, "display", !1, i)) && (r = e["offset" + t[0].toUpperCase() + t.slice(1)], s = !0), (r = parseFloat(r) || 0) + Ye(e, t, n || (o ? "border" : "content"), s, i, r) + "px"
    }

    function Ge(e, t, n, i, r) {
        return new Ge.prototype.init(e, t, n, i, r)
    }
    C.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = Fe(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {},
        style: function(e, t, n, i) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var r, o, s, a = z(t),
                    l = We.test(t),
                    c = e.style;
                if (l || (t = Ve(a)), s = C.cssHooks[t] || C.cssHooks[a], void 0 === n) return s && "get" in s && void 0 !== (r = s.get(e, !1, i)) ? r : c[t];
                "string" == (o = typeof n) && (r = te.exec(n)) && r[1] && (n = oe(e, t, r), o = "number"), null != n && n == n && ("number" === o && (n += r && r[3] || (C.cssNumber[a] ? "" : "px")), v.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (c[t] = "inherit"), s && "set" in s && void 0 === (n = s.set(e, n, i)) || (l ? c.setProperty(t, n) : c[t] = n))
            }
        },
        css: function(e, t, n, i) {
            var r, o, s, a = z(t);
            return We.test(t) || (t = Ve(a)), (s = C.cssHooks[t] || C.cssHooks[a]) && "get" in s && (r = s.get(e, !0, n)), void 0 === r && (r = Fe(e, t, i)), "normal" === r && t in Qe && (r = Qe[t]), "" === n || n ? (o = parseFloat(r), !0 === n || isFinite(o) ? o || 0 : r) : r
        }
    }), C.each(["height", "width"], function(e, a) {
        C.cssHooks[a] = {
            get: function(e, t, n) {
                if (t) return !Be.test(C.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? Ke(e, a, n) : re(e, Ue, function() {
                    return Ke(e, a, n)
                })
            },
            set: function(e, t, n) {
                var i, r = He(e),
                    o = "border-box" === C.css(e, "boxSizing", !1, r),
                    s = n && Ye(e, a, n, o, r);
                return o && v.scrollboxSize() === r.position && (s -= Math.ceil(e["offset" + a[0].toUpperCase() + a.slice(1)] - parseFloat(r[a]) - Ye(e, a, "border", !1, r) - .5)), s && (i = te.exec(t)) && "px" !== (i[3] || "px") && (e.style[a] = t, t = C.css(e, a)), Xe(0, t, s)
            }
        }
    }), C.cssHooks.marginLeft = Me(v.reliableMarginLeft, function(e, t) {
        if (t) return (parseFloat(Fe(e, "marginLeft")) || e.getBoundingClientRect().left - re(e, {
            marginLeft: 0
        }, function() {
            return e.getBoundingClientRect().left
        })) + "px"
    }), C.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(r, o) {
        C.cssHooks[r + o] = {
            expand: function(e) {
                for (var t = 0, n = {}, i = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++) n[r + ne[t] + o] = i[t] || i[t - 2] || i[0];
                return n
            }
        }, "margin" !== r && (C.cssHooks[r + o].set = Xe)
    }), C.fn.extend({
        css: function(e, t) {
            return W(this, function(e, t, n) {
                var i, r, o = {},
                    s = 0;
                if (Array.isArray(t)) {
                    for (i = He(e), r = t.length; s < r; s++) o[t[s]] = C.css(e, t[s], !1, i);
                    return o
                }
                return void 0 !== n ? C.style(e, t, n) : C.css(e, t)
            }, e, t, 1 < arguments.length)
        }
    }), ((C.Tween = Ge).prototype = {
        constructor: Ge,
        init: function(e, t, n, i, r, o) {
            this.elem = e, this.prop = n, this.easing = r || C.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = o || (C.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = Ge.propHooks[this.prop];
            return e && e.get ? e.get(this) : Ge.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = Ge.propHooks[this.prop];
            return this.options.duration ? this.pos = t = C.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : Ge.propHooks._default.set(this), this
        }
    }).init.prototype = Ge.prototype, (Ge.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = C.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
            },
            set: function(e) {
                C.fx.step[e.prop] ? C.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[C.cssProps[e.prop]] && !C.cssHooks[e.prop] ? e.elem[e.prop] = e.now : C.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    }).scrollTop = Ge.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, C.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        },
        _default: "swing"
    }, C.fx = Ge.prototype.init, C.fx.step = {};
    var Je, Ze, et, tt, nt = /^(?:toggle|show|hide)$/,
        it = /queueHooks$/;

    function rt() {
        Ze && (!1 === T.hidden && E.requestAnimationFrame ? E.requestAnimationFrame(rt) : E.setTimeout(rt, C.fx.interval), C.fx.tick())
    }

    function ot() {
        return E.setTimeout(function() {
            Je = void 0
        }), Je = Date.now()
    }

    function st(e, t) {
        var n, i = 0,
            r = {
                height: e
            };
        for (t = t ? 1 : 0; i < 4; i += 2 - t) r["margin" + (n = ne[i])] = r["padding" + n] = e;
        return t && (r.opacity = r.width = e), r
    }

    function at(e, t, n) {
        for (var i, r = (lt.tweeners[t] || []).concat(lt.tweeners["*"]), o = 0, s = r.length; o < s; o++)
            if (i = r[o].call(n, t, e)) return i
    }

    function lt(o, e, t) {
        var n, s, i = 0,
            r = lt.prefilters.length,
            a = C.Deferred().always(function() {
                delete l.elem
            }),
            l = function() {
                if (s) return !1;
                for (var e = Je || ot(), t = Math.max(0, c.startTime + c.duration - e), n = 1 - (t / c.duration || 0), i = 0, r = c.tweens.length; i < r; i++) c.tweens[i].run(n);
                return a.notifyWith(o, [c, n, t]), n < 1 && r ? t : (r || a.notifyWith(o, [c, 1, 0]), a.resolveWith(o, [c]), !1)
            },
            c = a.promise({
                elem: o,
                props: C.extend({}, e),
                opts: C.extend(!0, {
                    specialEasing: {},
                    easing: C.easing._default
                }, t),
                originalProperties: e,
                originalOptions: t,
                startTime: Je || ot(),
                duration: t.duration,
                tweens: [],
                createTween: function(e, t) {
                    var n = C.Tween(o, c.opts, e, t, c.opts.specialEasing[e] || c.opts.easing);
                    return c.tweens.push(n), n
                },
                stop: function(e) {
                    var t = 0,
                        n = e ? c.tweens.length : 0;
                    if (s) return this;
                    for (s = !0; t < n; t++) c.tweens[t].run(1);
                    return e ? (a.notifyWith(o, [c, 1, 0]), a.resolveWith(o, [c, e])) : a.rejectWith(o, [c, e]), this
                }
            }),
            u = c.props;
        for (function(e, t) {
                var n, i, r, o, s;
                for (n in e)
                    if (r = t[i = z(n)], o = e[n], Array.isArray(o) && (r = o[1], o = e[n] = o[0]), n !== i && (e[i] = o, delete e[n]), (s = C.cssHooks[i]) && "expand" in s)
                        for (n in o = s.expand(o), delete e[i], o) n in e || (e[n] = o[n], t[n] = r);
                    else t[i] = r
            }(u, c.opts.specialEasing); i < r; i++)
            if (n = lt.prefilters[i].call(c, o, u, c.opts)) return y(n.stop) && (C._queueHooks(c.elem, c.opts.queue).stop = n.stop.bind(n)), n;
        return C.map(u, at, c), y(c.opts.start) && c.opts.start.call(o, c), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always), C.fx.timer(C.extend(l, {
            elem: o,
            anim: c,
            queue: c.opts.queue
        })), c
    }
    C.Animation = C.extend(lt, {
        tweeners: {
            "*": [function(e, t) {
                var n = this.createTween(e, t);
                return oe(n.elem, e, te.exec(t), n), n
            }]
        },
        tweener: function(e, t) {
            y(e) ? (t = e, e = ["*"]) : e = e.match(q);
            for (var n, i = 0, r = e.length; i < r; i++) n = e[i], lt.tweeners[n] = lt.tweeners[n] || [], lt.tweeners[n].unshift(t)
        },
        prefilters: [function(e, t, n) {
            var i, r, o, s, a, l, c, u, f = "width" in t || "height" in t,
                d = this,
                h = {},
                p = e.style,
                g = e.nodeType && ie(e),
                m = Y.get(e, "fxshow");
            for (i in n.queue || (null == (s = C._queueHooks(e, "fx")).unqueued && (s.unqueued = 0, a = s.empty.fire, s.empty.fire = function() {
                    s.unqueued || a()
                }), s.unqueued++, d.always(function() {
                    d.always(function() {
                        s.unqueued--, C.queue(e, "fx").length || s.empty.fire()
                    })
                })), t)
                if (r = t[i], nt.test(r)) {
                    if (delete t[i], o = o || "toggle" === r, r === (g ? "hide" : "show")) {
                        if ("show" !== r || !m || void 0 === m[i]) continue;
                        g = !0
                    }
                    h[i] = m && m[i] || C.style(e, i)
                }
            if ((l = !C.isEmptyObject(t)) || !C.isEmptyObject(h))
                for (i in f && 1 === e.nodeType && (n.overflow = [p.overflow, p.overflowX, p.overflowY], null == (c = m && m.display) && (c = Y.get(e, "display")), "none" === (u = C.css(e, "display")) && (c ? u = c : (ae([e], !0), c = e.style.display || c, u = C.css(e, "display"), ae([e]))), ("inline" === u || "inline-block" === u && null != c) && "none" === C.css(e, "float") && (l || (d.done(function() {
                        p.display = c
                    }), null == c && (u = p.display, c = "none" === u ? "" : u)), p.display = "inline-block")), n.overflow && (p.overflow = "hidden", d.always(function() {
                        p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2]
                    })), l = !1, h) l || (m ? "hidden" in m && (g = m.hidden) : m = Y.access(e, "fxshow", {
                    display: c
                }), o && (m.hidden = !g), g && ae([e], !0), d.done(function() {
                    for (i in g || ae([e]), Y.remove(e, "fxshow"), h) C.style(e, i, h[i])
                })), l = at(g ? m[i] : 0, i, d), i in m || (m[i] = l.start, g && (l.end = l.start, l.start = 0))
        }],
        prefilter: function(e, t) {
            t ? lt.prefilters.unshift(e) : lt.prefilters.push(e)
        }
    }), C.speed = function(e, t, n) {
        var i = e && "object" == typeof e ? C.extend({}, e) : {
            complete: n || !n && t || y(e) && e,
            duration: e,
            easing: n && t || t && !y(t) && t
        };
        return C.fx.off ? i.duration = 0 : "number" != typeof i.duration && (i.duration in C.fx.speeds ? i.duration = C.fx.speeds[i.duration] : i.duration = C.fx.speeds._default), null != i.queue && !0 !== i.queue || (i.queue = "fx"), i.old = i.complete, i.complete = function() {
            y(i.old) && i.old.call(this), i.queue && C.dequeue(this, i.queue)
        }, i
    }, C.fn.extend({
        fadeTo: function(e, t, n, i) {
            return this.filter(ie).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, i)
        },
        animate: function(t, e, n, i) {
            var r = C.isEmptyObject(t),
                o = C.speed(e, n, i),
                s = function() {
                    var e = lt(this, C.extend({}, t), o);
                    (r || Y.get(this, "finish")) && e.stop(!0)
                };
            return s.finish = s, r || !1 === o.queue ? this.each(s) : this.queue(o.queue, s)
        },
        stop: function(r, e, o) {
            var s = function(e) {
                var t = e.stop;
                delete e.stop, t(o)
            };
            return "string" != typeof r && (o = e, e = r, r = void 0), e && !1 !== r && this.queue(r || "fx", []), this.each(function() {
                var e = !0,
                    t = null != r && r + "queueHooks",
                    n = C.timers,
                    i = Y.get(this);
                if (t) i[t] && i[t].stop && s(i[t]);
                else
                    for (t in i) i[t] && i[t].stop && it.test(t) && s(i[t]);
                for (t = n.length; t--;) n[t].elem !== this || null != r && n[t].queue !== r || (n[t].anim.stop(o), e = !1, n.splice(t, 1));
                !e && o || C.dequeue(this, r)
            })
        },
        finish: function(s) {
            return !1 !== s && (s = s || "fx"), this.each(function() {
                var e, t = Y.get(this),
                    n = t[s + "queue"],
                    i = t[s + "queueHooks"],
                    r = C.timers,
                    o = n ? n.length : 0;
                for (t.finish = !0, C.queue(this, s, []), i && i.stop && i.stop.call(this, !0), e = r.length; e--;) r[e].elem === this && r[e].queue === s && (r[e].anim.stop(!0), r.splice(e, 1));
                for (e = 0; e < o; e++) n[e] && n[e].finish && n[e].finish.call(this);
                delete t.finish
            })
        }
    }), C.each(["toggle", "show", "hide"], function(e, i) {
        var r = C.fn[i];
        C.fn[i] = function(e, t, n) {
            return null == e || "boolean" == typeof e ? r.apply(this, arguments) : this.animate(st(i, !0), e, t, n)
        }
    }), C.each({
        slideDown: st("show"),
        slideUp: st("hide"),
        slideToggle: st("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(e, i) {
        C.fn[e] = function(e, t, n) {
            return this.animate(i, e, t, n)
        }
    }), C.timers = [], C.fx.tick = function() {
        var e, t = 0,
            n = C.timers;
        for (Je = Date.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
        n.length || C.fx.stop(), Je = void 0
    }, C.fx.timer = function(e) {
        C.timers.push(e), C.fx.start()
    }, C.fx.interval = 13, C.fx.start = function() {
        Ze || (Ze = !0, rt())
    }, C.fx.stop = function() {
        Ze = null
    }, C.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, C.fn.delay = function(i, e) {
        return i = C.fx && C.fx.speeds[i] || i, e = e || "fx", this.queue(e, function(e, t) {
            var n = E.setTimeout(e, i);
            t.stop = function() {
                E.clearTimeout(n)
            }
        })
    }, et = T.createElement("input"), tt = T.createElement("select").appendChild(T.createElement("option")), et.type = "checkbox", v.checkOn = "" !== et.value, v.optSelected = tt.selected, (et = T.createElement("input")).value = "t", et.type = "radio", v.radioValue = "t" === et.value;
    var ct, ut = C.expr.attrHandle;
    C.fn.extend({
        attr: function(e, t) {
            return W(this, C.attr, e, t, 1 < arguments.length)
        },
        removeAttr: function(e) {
            return this.each(function() {
                C.removeAttr(this, e)
            })
        }
    }), C.extend({
        attr: function(e, t, n) {
            var i, r, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return void 0 === e.getAttribute ? C.prop(e, t, n) : (1 === o && C.isXMLDoc(e) || (r = C.attrHooks[t.toLowerCase()] || (C.expr.match.bool.test(t) ? ct : void 0)), void 0 !== n ? null === n ? void C.removeAttr(e, t) : r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : (e.setAttribute(t, n + ""), n) : r && "get" in r && null !== (i = r.get(e, t)) ? i : null == (i = C.find.attr(e, t)) ? void 0 : i)
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!v.radioValue && "radio" === t && D(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        },
        removeAttr: function(e, t) {
            var n, i = 0,
                r = t && t.match(q);
            if (r && 1 === e.nodeType)
                for (; n = r[i++];) e.removeAttribute(n)
        }
    }), ct = {
        set: function(e, t, n) {
            return !1 === t ? C.removeAttr(e, n) : e.setAttribute(n, n), n
        }
    }, C.each(C.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var s = ut[t] || C.find.attr;
        ut[t] = function(e, t, n) {
            var i, r, o = t.toLowerCase();
            return n || (r = ut[o], ut[o] = i, i = null != s(e, t, n) ? o : null, ut[o] = r), i
        }
    });
    var ft = /^(?:input|select|textarea|button)$/i,
        dt = /^(?:a|area)$/i;

    function ht(e) {
        return (e.match(q) || []).join(" ")
    }

    function pt(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }

    function gt(e) {
        return Array.isArray(e) ? e : "string" == typeof e && e.match(q) || []
    }
    C.fn.extend({
        prop: function(e, t) {
            return W(this, C.prop, e, t, 1 < arguments.length)
        },
        removeProp: function(e) {
            return this.each(function() {
                delete this[C.propFix[e] || e]
            })
        }
    }), C.extend({
        prop: function(e, t, n) {
            var i, r, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return 1 === o && C.isXMLDoc(e) || (t = C.propFix[t] || t, r = C.propHooks[t]), void 0 !== n ? r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : e[t] = n : r && "get" in r && null !== (i = r.get(e, t)) ? i : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = C.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : ft.test(e.nodeName) || dt.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        },
        propFix: {
            for: "htmlFor",
            class: "className"
        }
    }), v.optSelected || (C.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null
        },
        set: function(e) {
            var t = e.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
        }
    }), C.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        C.propFix[this.toLowerCase()] = this
    }), C.fn.extend({
        addClass: function(t) {
            var e, n, i, r, o, s, a, l = 0;
            if (y(t)) return this.each(function(e) {
                C(this).addClass(t.call(this, e, pt(this)))
            });
            if ((e = gt(t)).length)
                for (; n = this[l++];)
                    if (r = pt(n), i = 1 === n.nodeType && " " + ht(r) + " ") {
                        for (s = 0; o = e[s++];) i.indexOf(" " + o + " ") < 0 && (i += o + " ");
                        r !== (a = ht(i)) && n.setAttribute("class", a)
                    }
            return this
        },
        removeClass: function(t) {
            var e, n, i, r, o, s, a, l = 0;
            if (y(t)) return this.each(function(e) {
                C(this).removeClass(t.call(this, e, pt(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ((e = gt(t)).length)
                for (; n = this[l++];)
                    if (r = pt(n), i = 1 === n.nodeType && " " + ht(r) + " ") {
                        for (s = 0; o = e[s++];)
                            for (; - 1 < i.indexOf(" " + o + " ");) i = i.replace(" " + o + " ", " ");
                        r !== (a = ht(i)) && n.setAttribute("class", a)
                    }
            return this
        },
        toggleClass: function(r, t) {
            var o = typeof r,
                s = "string" === o || Array.isArray(r);
            return "boolean" == typeof t && s ? t ? this.addClass(r) : this.removeClass(r) : y(r) ? this.each(function(e) {
                C(this).toggleClass(r.call(this, e, pt(this), t), t)
            }) : this.each(function() {
                var e, t, n, i;
                if (s)
                    for (t = 0, n = C(this), i = gt(r); e = i[t++];) n.hasClass(e) ? n.removeClass(e) : n.addClass(e);
                else void 0 !== r && "boolean" !== o || ((e = pt(this)) && Y.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || !1 === r ? "" : Y.get(this, "__className__") || ""))
            })
        },
        hasClass: function(e) {
            var t, n, i = 0;
            for (t = " " + e + " "; n = this[i++];)
                if (1 === n.nodeType && -1 < (" " + ht(pt(n)) + " ").indexOf(t)) return !0;
            return !1
        }
    });
    var mt = /\r/g;
    C.fn.extend({
        val: function(n) {
            var i, e, r, t = this[0];
            return arguments.length ? (r = y(n), this.each(function(e) {
                var t;
                1 === this.nodeType && (null == (t = r ? n.call(this, e, C(this).val()) : n) ? t = "" : "number" == typeof t ? t += "" : Array.isArray(t) && (t = C.map(t, function(e) {
                    return null == e ? "" : e + ""
                })), (i = C.valHooks[this.type] || C.valHooks[this.nodeName.toLowerCase()]) && "set" in i && void 0 !== i.set(this, t, "value") || (this.value = t))
            })) : t ? (i = C.valHooks[t.type] || C.valHooks[t.nodeName.toLowerCase()]) && "get" in i && void 0 !== (e = i.get(t, "value")) ? e : "string" == typeof(e = t.value) ? e.replace(mt, "") : null == e ? "" : e : void 0
        }
    }), C.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = C.find.attr(e, "value");
                    return null != t ? t : ht(C.text(e))
                }
            },
            select: {
                get: function(e) {
                    var t, n, i, r = e.options,
                        o = e.selectedIndex,
                        s = "select-one" === e.type,
                        a = s ? null : [],
                        l = s ? o + 1 : r.length;
                    for (i = o < 0 ? l : s ? o : 0; i < l; i++)
                        if (((n = r[i]).selected || i === o) && !n.disabled && (!n.parentNode.disabled || !D(n.parentNode, "optgroup"))) {
                            if (t = C(n).val(), s) return t;
                            a.push(t)
                        }
                    return a
                },
                set: function(e, t) {
                    for (var n, i, r = e.options, o = C.makeArray(t), s = r.length; s--;)((i = r[s]).selected = -1 < C.inArray(C.valHooks.option.get(i), o)) && (n = !0);
                    return n || (e.selectedIndex = -1), o
                }
            }
        }
    }), C.each(["radio", "checkbox"], function() {
        C.valHooks[this] = {
            set: function(e, t) {
                if (Array.isArray(t)) return e.checked = -1 < C.inArray(C(e).val(), t)
            }
        }, v.checkOn || (C.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    }), v.focusin = "onfocusin" in E;
    var vt = /^(?:focusinfocus|focusoutblur)$/,
        yt = function(e) {
            e.stopPropagation()
        };
    C.extend(C.event, {
        trigger: function(e, t, n, i) {
            var r, o, s, a, l, c, u, f, d = [n || T],
                h = m.call(e, "type") ? e.type : e,
                p = m.call(e, "namespace") ? e.namespace.split(".") : [];
            if (o = f = s = n = n || T, 3 !== n.nodeType && 8 !== n.nodeType && !vt.test(h + C.event.triggered) && (-1 < h.indexOf(".") && (h = (p = h.split(".")).shift(), p.sort()), l = h.indexOf(":") < 0 && "on" + h, (e = e[C.expando] ? e : new C.Event(h, "object" == typeof e && e)).isTrigger = i ? 2 : 3, e.namespace = p.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), t = null == t ? [e] : C.makeArray(t, [e]), u = C.event.special[h] || {}, i || !u.trigger || !1 !== u.trigger.apply(n, t))) {
                if (!i && !u.noBubble && !b(n)) {
                    for (a = u.delegateType || h, vt.test(a + h) || (o = o.parentNode); o; o = o.parentNode) d.push(o), s = o;
                    s === (n.ownerDocument || T) && d.push(s.defaultView || s.parentWindow || E)
                }
                for (r = 0;
                    (o = d[r++]) && !e.isPropagationStopped();) f = o, e.type = 1 < r ? a : u.bindType || h, (c = (Y.get(o, "events") || {})[e.type] && Y.get(o, "handle")) && c.apply(o, t), (c = l && o[l]) && c.apply && V(o) && (e.result = c.apply(o, t), !1 === e.result && e.preventDefault());
                return e.type = h, i || e.isDefaultPrevented() || u._default && !1 !== u._default.apply(d.pop(), t) || !V(n) || l && y(n[h]) && !b(n) && ((s = n[l]) && (n[l] = null), C.event.triggered = h, e.isPropagationStopped() && f.addEventListener(h, yt), n[h](), e.isPropagationStopped() && f.removeEventListener(h, yt), C.event.triggered = void 0, s && (n[l] = s)), e.result
            }
        },
        simulate: function(e, t, n) {
            var i = C.extend(new C.Event, n, {
                type: e,
                isSimulated: !0
            });
            C.event.trigger(i, null, t)
        }
    }), C.fn.extend({
        trigger: function(e, t) {
            return this.each(function() {
                C.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            if (n) return C.event.trigger(e, t, n, !0)
        }
    }), v.focusin || C.each({
        focus: "focusin",
        blur: "focusout"
    }, function(n, i) {
        var r = function(e) {
            C.event.simulate(i, e.target, C.event.fix(e))
        };
        C.event.special[i] = {
            setup: function() {
                var e = this.ownerDocument || this,
                    t = Y.access(e, i);
                t || e.addEventListener(n, r, !0), Y.access(e, i, (t || 0) + 1)
            },
            teardown: function() {
                var e = this.ownerDocument || this,
                    t = Y.access(e, i) - 1;
                t ? Y.access(e, i, t) : (e.removeEventListener(n, r, !0), Y.remove(e, i))
            }
        }
    });
    var bt = E.location,
        _t = Date.now(),
        wt = /\?/;
    C.parseXML = function(e) {
        var t;
        if (!e || "string" != typeof e) return null;
        try {
            t = (new E.DOMParser).parseFromString(e, "text/xml")
        } catch (e) {
            t = void 0
        }
        return t && !t.getElementsByTagName("parsererror").length || C.error("Invalid XML: " + e), t
    };
    var xt = /\[\]$/,
        Et = /\r?\n/g,
        Tt = /^(?:submit|button|image|reset|file)$/i,
        Ct = /^(?:input|select|textarea|keygen)/i;

    function St(n, e, i, r) {
        var t;
        if (Array.isArray(e)) C.each(e, function(e, t) {
            i || xt.test(n) ? r(n, t) : St(n + "[" + ("object" == typeof t && null != t ? e : "") + "]", t, i, r)
        });
        else if (i || "object" !== w(e)) r(n, e);
        else
            for (t in e) St(n + "[" + t + "]", e[t], i, r)
    }
    C.param = function(e, t) {
        var n, i = [],
            r = function(e, t) {
                var n = y(t) ? t() : t;
                i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
            };
        if (Array.isArray(e) || e.jquery && !C.isPlainObject(e)) C.each(e, function() {
            r(this.name, this.value)
        });
        else
            for (n in e) St(n, e[n], t, r);
        return i.join("&")
    }, C.fn.extend({
        serialize: function() {
            return C.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = C.prop(this, "elements");
                return e ? C.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !C(this).is(":disabled") && Ct.test(this.nodeName) && !Tt.test(e) && (this.checked || !le.test(e))
            }).map(function(e, t) {
                var n = C(this).val();
                return null == n ? null : Array.isArray(n) ? C.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(Et, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(Et, "\r\n")
                }
            }).get()
        }
    });
    var Dt = /%20/g,
        kt = /#.*$/,
        Nt = /([?&])_=[^&]*/,
        At = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        jt = /^(?:GET|HEAD)$/,
        Ot = /^\/\//,
        Lt = {},
        It = {},
        qt = "*/".concat("*"),
        Pt = T.createElement("a");

    function Ht(o) {
        return function(e, t) {
            "string" != typeof e && (t = e, e = "*");
            var n, i = 0,
                r = e.toLowerCase().match(q) || [];
            if (y(t))
                for (; n = r[i++];) "+" === n[0] ? (n = n.slice(1) || "*", (o[n] = o[n] || []).unshift(t)) : (o[n] = o[n] || []).push(t)
        }
    }

    function Rt(t, r, o, s) {
        var a = {},
            l = t === It;

        function c(e) {
            var i;
            return a[e] = !0, C.each(t[e] || [], function(e, t) {
                var n = t(r, o, s);
                return "string" != typeof n || l || a[n] ? l ? !(i = n) : void 0 : (r.dataTypes.unshift(n), c(n), !1)
            }), i
        }
        return c(r.dataTypes[0]) || !a["*"] && c("*")
    }

    function Ft(e, t) {
        var n, i, r = C.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((r[n] ? e : i || (i = {}))[n] = t[n]);
        return i && C.extend(!0, e, i), e
    }
    Pt.href = bt.href, C.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: bt.href,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(bt.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": qt,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": JSON.parse,
                "text xml": C.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? Ft(Ft(e, C.ajaxSettings), t) : Ft(C.ajaxSettings, e)
        },
        ajaxPrefilter: Ht(Lt),
        ajaxTransport: Ht(It),
        ajax: function(e, t) {
            "object" == typeof e && (t = e, e = void 0), t = t || {};
            var u, f, d, n, h, i, p, g, r, o, m = C.ajaxSetup({}, t),
                v = m.context || m,
                y = m.context && (v.nodeType || v.jquery) ? C(v) : C.event,
                b = C.Deferred(),
                _ = C.Callbacks("once memory"),
                w = m.statusCode || {},
                s = {},
                a = {},
                l = "canceled",
                x = {
                    readyState: 0,
                    getResponseHeader: function(e) {
                        var t;
                        if (p) {
                            if (!n)
                                for (n = {}; t = At.exec(d);) n[t[1].toLowerCase()] = t[2];
                            t = n[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    },
                    getAllResponseHeaders: function() {
                        return p ? d : null
                    },
                    setRequestHeader: function(e, t) {
                        return null == p && (e = a[e.toLowerCase()] = a[e.toLowerCase()] || e, s[e] = t), this
                    },
                    overrideMimeType: function(e) {
                        return null == p && (m.mimeType = e), this
                    },
                    statusCode: function(e) {
                        var t;
                        if (e)
                            if (p) x.always(e[x.status]);
                            else
                                for (t in e) w[t] = [w[t], e[t]];
                        return this
                    },
                    abort: function(e) {
                        var t = e || l;
                        return u && u.abort(t), c(0, t), this
                    }
                };
            if (b.promise(x), m.url = ((e || m.url || bt.href) + "").replace(Ot, bt.protocol + "//"), m.type = t.method || t.type || m.method || m.type, m.dataTypes = (m.dataType || "*").toLowerCase().match(q) || [""], null == m.crossDomain) {
                i = T.createElement("a");
                try {
                    i.href = m.url, i.href = i.href, m.crossDomain = Pt.protocol + "//" + Pt.host != i.protocol + "//" + i.host
                } catch (e) {
                    m.crossDomain = !0
                }
            }
            if (m.data && m.processData && "string" != typeof m.data && (m.data = C.param(m.data, m.traditional)), Rt(Lt, m, t, x), p) return x;
            for (r in (g = C.event && m.global) && 0 == C.active++ && C.event.trigger("ajaxStart"), m.type = m.type.toUpperCase(), m.hasContent = !jt.test(m.type), f = m.url.replace(kt, ""), m.hasContent ? m.data && m.processData && 0 === (m.contentType || "").indexOf("application/x-www-form-urlencoded") && (m.data = m.data.replace(Dt, "+")) : (o = m.url.slice(f.length), m.data && (m.processData || "string" == typeof m.data) && (f += (wt.test(f) ? "&" : "?") + m.data, delete m.data), !1 === m.cache && (f = f.replace(Nt, "$1"), o = (wt.test(f) ? "&" : "?") + "_=" + _t++ + o), m.url = f + o), m.ifModified && (C.lastModified[f] && x.setRequestHeader("If-Modified-Since", C.lastModified[f]), C.etag[f] && x.setRequestHeader("If-None-Match", C.etag[f])), (m.data && m.hasContent && !1 !== m.contentType || t.contentType) && x.setRequestHeader("Content-Type", m.contentType), x.setRequestHeader("Accept", m.dataTypes[0] && m.accepts[m.dataTypes[0]] ? m.accepts[m.dataTypes[0]] + ("*" !== m.dataTypes[0] ? ", " + qt + "; q=0.01" : "") : m.accepts["*"]), m.headers) x.setRequestHeader(r, m.headers[r]);
            if (m.beforeSend && (!1 === m.beforeSend.call(v, x, m) || p)) return x.abort();
            if (l = "abort", _.add(m.complete), x.done(m.success), x.fail(m.error), u = Rt(It, m, t, x)) {
                if (x.readyState = 1, g && y.trigger("ajaxSend", [x, m]), p) return x;
                m.async && 0 < m.timeout && (h = E.setTimeout(function() {
                    x.abort("timeout")
                }, m.timeout));
                try {
                    p = !1, u.send(s, c)
                } catch (e) {
                    if (p) throw e;
                    c(-1, e)
                }
            } else c(-1, "No Transport");

            function c(e, t, n, i) {
                var r, o, s, a, l, c = t;
                p || (p = !0, h && E.clearTimeout(h), u = void 0, d = i || "", x.readyState = 0 < e ? 4 : 0, r = 200 <= e && e < 300 || 304 === e, n && (a = function(e, t, n) {
                    for (var i, r, o, s, a = e.contents, l = e.dataTypes;
                        "*" === l[0];) l.shift(), void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
                    if (i)
                        for (r in a)
                            if (a[r] && a[r].test(i)) {
                                l.unshift(r);
                                break
                            }
                    if (l[0] in n) o = l[0];
                    else {
                        for (r in n) {
                            if (!l[0] || e.converters[r + " " + l[0]]) {
                                o = r;
                                break
                            }
                            s || (s = r)
                        }
                        o = o || s
                    }
                    if (o) return o !== l[0] && l.unshift(o), n[o]
                }(m, x, n)), a = function(e, t, n, i) {
                    var r, o, s, a, l, c = {},
                        u = e.dataTypes.slice();
                    if (u[1])
                        for (s in e.converters) c[s.toLowerCase()] = e.converters[s];
                    for (o = u.shift(); o;)
                        if (e.responseFields[o] && (n[e.responseFields[o]] = t), !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = o, o = u.shift())
                            if ("*" === o) o = l;
                            else if ("*" !== l && l !== o) {
                        if (!(s = c[l + " " + o] || c["* " + o]))
                            for (r in c)
                                if ((a = r.split(" "))[1] === o && (s = c[l + " " + a[0]] || c["* " + a[0]])) {
                                    !0 === s ? s = c[r] : !0 !== c[r] && (o = a[0], u.unshift(a[1]));
                                    break
                                }
                        if (!0 !== s)
                            if (s && e.throws) t = s(t);
                            else try {
                                t = s(t)
                            } catch (e) {
                                return {
                                    state: "parsererror",
                                    error: s ? e : "No conversion from " + l + " to " + o
                                }
                            }
                    }
                    return {
                        state: "success",
                        data: t
                    }
                }(m, a, x, r), r ? (m.ifModified && ((l = x.getResponseHeader("Last-Modified")) && (C.lastModified[f] = l), (l = x.getResponseHeader("etag")) && (C.etag[f] = l)), 204 === e || "HEAD" === m.type ? c = "nocontent" : 304 === e ? c = "notmodified" : (c = a.state, o = a.data, r = !(s = a.error))) : (s = c, !e && c || (c = "error", e < 0 && (e = 0))), x.status = e, x.statusText = (t || c) + "", r ? b.resolveWith(v, [o, c, x]) : b.rejectWith(v, [x, c, s]), x.statusCode(w), w = void 0, g && y.trigger(r ? "ajaxSuccess" : "ajaxError", [x, m, r ? o : s]), _.fireWith(v, [x, c]), g && (y.trigger("ajaxComplete", [x, m]), --C.active || C.event.trigger("ajaxStop")))
            }
            return x
        },
        getJSON: function(e, t, n) {
            return C.get(e, t, n, "json")
        },
        getScript: function(e, t) {
            return C.get(e, void 0, t, "script")
        }
    }), C.each(["get", "post"], function(e, r) {
        C[r] = function(e, t, n, i) {
            return y(t) && (i = i || n, n = t, t = void 0), C.ajax(C.extend({
                url: e,
                type: r,
                dataType: i,
                data: t,
                success: n
            }, C.isPlainObject(e) && e))
        }
    }), C._evalUrl = function(e) {
        return C.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            throws: !0
        })
    }, C.fn.extend({
        wrapAll: function(e) {
            var t;
            return this[0] && (y(e) && (e = e.call(this[0])), t = C(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                return e
            }).append(this)), this
        },
        wrapInner: function(n) {
            return y(n) ? this.each(function(e) {
                C(this).wrapInner(n.call(this, e))
            }) : this.each(function() {
                var e = C(this),
                    t = e.contents();
                t.length ? t.wrapAll(n) : e.append(n)
            })
        },
        wrap: function(t) {
            var n = y(t);
            return this.each(function(e) {
                C(this).wrapAll(n ? t.call(this, e) : t)
            })
        },
        unwrap: function(e) {
            return this.parent(e).not("body").each(function() {
                C(this).replaceWith(this.childNodes)
            }), this
        }
    }), C.expr.pseudos.hidden = function(e) {
        return !C.expr.pseudos.visible(e)
    }, C.expr.pseudos.visible = function(e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
    }, C.ajaxSettings.xhr = function() {
        try {
            return new E.XMLHttpRequest
        } catch (e) {}
    };
    var Mt = {
            0: 200,
            1223: 204
        },
        Bt = C.ajaxSettings.xhr();
    v.cors = !!Bt && "withCredentials" in Bt, v.ajax = Bt = !!Bt, C.ajaxTransport(function(r) {
        var o, s;
        if (v.cors || Bt && !r.crossDomain) return {
            send: function(e, t) {
                var n, i = r.xhr();
                if (i.open(r.type, r.url, r.async, r.username, r.password), r.xhrFields)
                    for (n in r.xhrFields) i[n] = r.xhrFields[n];
                for (n in r.mimeType && i.overrideMimeType && i.overrideMimeType(r.mimeType), r.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"), e) i.setRequestHeader(n, e[n]);
                o = function(e) {
                    return function() {
                        o && (o = s = i.onload = i.onerror = i.onabort = i.ontimeout = i.onreadystatechange = null, "abort" === e ? i.abort() : "error" === e ? "number" != typeof i.status ? t(0, "error") : t(i.status, i.statusText) : t(Mt[i.status] || i.status, i.statusText, "text" !== (i.responseType || "text") || "string" != typeof i.responseText ? {
                            binary: i.response
                        } : {
                            text: i.responseText
                        }, i.getAllResponseHeaders()))
                    }
                }, i.onload = o(), s = i.onerror = i.ontimeout = o("error"), void 0 !== i.onabort ? i.onabort = s : i.onreadystatechange = function() {
                    4 === i.readyState && E.setTimeout(function() {
                        o && s()
                    })
                }, o = o("abort");
                try {
                    i.send(r.hasContent && r.data || null)
                } catch (e) {
                    if (o) throw e
                }
            },
            abort: function() {
                o && o()
            }
        }
    }), C.ajaxPrefilter(function(e) {
        e.crossDomain && (e.contents.script = !1)
    }), C.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(e) {
                return C.globalEval(e), e
            }
        }
    }), C.ajaxPrefilter("script", function(e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
    }), C.ajaxTransport("script", function(n) {
        var i, r;
        if (n.crossDomain) return {
            send: function(e, t) {
                i = C("<script>").prop({
                    charset: n.scriptCharset,
                    src: n.url
                }).on("load error", r = function(e) {
                    i.remove(), r = null, e && t("error" === e.type ? 404 : 200, e.type)
                }), T.head.appendChild(i[0])
            },
            abort: function() {
                r && r()
            }
        }
    });
    var Wt, Ut = [],
        Qt = /(=)\?(?=&|$)|\?\?/;
    C.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = Ut.pop() || C.expando + "_" + _t++;
            return this[e] = !0, e
        }
    }), C.ajaxPrefilter("json jsonp", function(e, t, n) {
        var i, r, o, s = !1 !== e.jsonp && (Qt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Qt.test(e.data) && "data");
        if (s || "jsonp" === e.dataTypes[0]) return i = e.jsonpCallback = y(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, s ? e[s] = e[s].replace(Qt, "$1" + i) : !1 !== e.jsonp && (e.url += (wt.test(e.url) ? "&" : "?") + e.jsonp + "=" + i), e.converters["script json"] = function() {
            return o || C.error(i + " was not called"), o[0]
        }, e.dataTypes[0] = "json", r = E[i], E[i] = function() {
            o = arguments
        }, n.always(function() {
            void 0 === r ? C(E).removeProp(i) : E[i] = r, e[i] && (e.jsonpCallback = t.jsonpCallback, Ut.push(i)), o && y(r) && r(o[0]), o = r = void 0
        }), "script"
    }), v.createHTMLDocument = ((Wt = T.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === Wt.childNodes.length), C.parseHTML = function(e, t, n) {
        return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (v.createHTMLDocument ? ((i = (t = T.implementation.createHTMLDocument("")).createElement("base")).href = T.location.href, t.head.appendChild(i)) : t = T), o = !n && [], (r = k.exec(e)) ? [t.createElement(r[1])] : (r = ve([e], t, o), o && o.length && C(o).remove(), C.merge([], r.childNodes)));
        var i, r, o
    }, C.fn.load = function(e, t, n) {
        var i, r, o, s = this,
            a = e.indexOf(" ");
        return -1 < a && (i = ht(e.slice(a)), e = e.slice(0, a)), y(t) ? (n = t, t = void 0) : t && "object" == typeof t && (r = "POST"), 0 < s.length && C.ajax({
            url: e,
            type: r || "GET",
            dataType: "html",
            data: t
        }).done(function(e) {
            o = arguments, s.html(i ? C("<div>").append(C.parseHTML(e)).find(i) : e)
        }).always(n && function(e, t) {
            s.each(function() {
                n.apply(this, o || [e.responseText, t, e])
            })
        }), this
    }, C.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        C.fn[t] = function(e) {
            return this.on(t, e)
        }
    }), C.expr.pseudos.animated = function(t) {
        return C.grep(C.timers, function(e) {
            return t === e.elem
        }).length
    }, C.offset = {
        setOffset: function(e, t, n) {
            var i, r, o, s, a, l, c = C.css(e, "position"),
                u = C(e),
                f = {};
            "static" === c && (e.style.position = "relative"), a = u.offset(), o = C.css(e, "top"), l = C.css(e, "left"), ("absolute" === c || "fixed" === c) && -1 < (o + l).indexOf("auto") ? (s = (i = u.position()).top, r = i.left) : (s = parseFloat(o) || 0, r = parseFloat(l) || 0), y(t) && (t = t.call(e, n, C.extend({}, a))), null != t.top && (f.top = t.top - a.top + s), null != t.left && (f.left = t.left - a.left + r), "using" in t ? t.using.call(e, f) : u.css(f)
        }
    }, C.fn.extend({
        offset: function(t) {
            if (arguments.length) return void 0 === t ? this : this.each(function(e) {
                C.offset.setOffset(this, t, e)
            });
            var e, n, i = this[0];
            return i ? i.getClientRects().length ? (e = i.getBoundingClientRect(), n = i.ownerDocument.defaultView, {
                top: e.top + n.pageYOffset,
                left: e.left + n.pageXOffset
            }) : {
                top: 0,
                left: 0
            } : void 0
        },
        position: function() {
            if (this[0]) {
                var e, t, n, i = this[0],
                    r = {
                        top: 0,
                        left: 0
                    };
                if ("fixed" === C.css(i, "position")) t = i.getBoundingClientRect();
                else {
                    for (t = this.offset(), n = i.ownerDocument, e = i.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === C.css(e, "position");) e = e.parentNode;
                    e && e !== i && 1 === e.nodeType && ((r = C(e).offset()).top += C.css(e, "borderTopWidth", !0), r.left += C.css(e, "borderLeftWidth", !0))
                }
                return {
                    top: t.top - r.top - C.css(i, "marginTop", !0),
                    left: t.left - r.left - C.css(i, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent; e && "static" === C.css(e, "position");) e = e.offsetParent;
                return e || ye
            })
        }
    }), C.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(t, r) {
        var o = "pageYOffset" === r;
        C.fn[t] = function(e) {
            return W(this, function(e, t, n) {
                var i;
                if (b(e) ? i = e : 9 === e.nodeType && (i = e.defaultView), void 0 === n) return i ? i[r] : e[t];
                i ? i.scrollTo(o ? i.pageXOffset : n, o ? n : i.pageYOffset) : e[t] = n
            }, t, e, arguments.length)
        }
    }), C.each(["top", "left"], function(e, n) {
        C.cssHooks[n] = Me(v.pixelPosition, function(e, t) {
            if (t) return t = Fe(e, n), Pe.test(t) ? C(e).position()[n] + "px" : t
        })
    }), C.each({
        Height: "height",
        Width: "width"
    }, function(s, a) {
        C.each({
            padding: "inner" + s,
            content: a,
            "": "outer" + s
        }, function(i, o) {
            C.fn[o] = function(e, t) {
                var n = arguments.length && (i || "boolean" != typeof e),
                    r = i || (!0 === e || !0 === t ? "margin" : "border");
                return W(this, function(e, t, n) {
                    var i;
                    return b(e) ? 0 === o.indexOf("outer") ? e["inner" + s] : e.document.documentElement["client" + s] : 9 === e.nodeType ? (i = e.documentElement, Math.max(e.body["scroll" + s], i["scroll" + s], e.body["offset" + s], i["offset" + s], i["client" + s])) : void 0 === n ? C.css(e, t, r) : C.style(e, t, n, r)
                }, a, n ? e : void 0, n)
            }
        })
    }), C.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, n) {
        C.fn[n] = function(e, t) {
            return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n)
        }
    }), C.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }), C.fn.extend({
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, i) {
            return this.on(t, e, n, i)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    }), C.proxy = function(e, t) {
        var n, i, r;
        if ("string" == typeof t && (n = e[t], t = e, e = n), y(e)) return i = a.call(arguments, 2), (r = function() {
            return e.apply(t || this, i.concat(a.call(arguments)))
        }).guid = e.guid = e.guid || C.guid++, r
    }, C.holdReady = function(e) {
        e ? C.readyWait++ : C.ready(!0)
    }, C.isArray = Array.isArray, C.parseJSON = JSON.parse, C.nodeName = D, C.isFunction = y, C.isWindow = b, C.camelCase = z, C.type = w, C.now = Date.now, C.isNumeric = function(e) {
        var t = C.type(e);
        return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
    }, "function" == typeof define && define.amd && define("jquery", [], function() {
        return C
    });
    var $t = E.jQuery,
        zt = E.$;
    return C.noConflict = function(e) {
        return E.$ === C && (E.$ = zt), e && E.jQuery === C && (E.jQuery = $t), C
    }, e || (E.jQuery = E.$ = C), C
}),
function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? t(exports, require("jquery")) : "function" == typeof define && define.amd ? define(["exports", "jquery"], t) : t((e = e || self).bootstrap = {}, e.jQuery)
}(this, function(e, p) {
    "use strict";

    function i(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
        }
    }

    function s(e, t, n) {
        return t && i(e.prototype, t), n && i(e, n), e
    }

    function t(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(t);
            e && (i = i.filter(function(e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable
            })), n.push.apply(n, i)
        }
        return n
    }

    function l(r) {
        for (var e = 1; e < arguments.length; e++) {
            var o = null != arguments[e] ? arguments[e] : {};
            e % 2 ? t(Object(o), !0).forEach(function(e) {
                var t, n, i;
                t = r, i = o[n = e], n in t ? Object.defineProperty(t, n, {
                    value: i,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[n] = i
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(o)) : t(Object(o)).forEach(function(e) {
                Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(o, e))
            })
        }
        return r
    }
    p = p && Object.prototype.hasOwnProperty.call(p, "default") ? p.default : p;
    var g = {
        TRANSITION_END: "bsTransitionEnd",
        getUID: function(e) {
            for (; e += ~~(1e6 * Math.random()), document.getElementById(e););
            return e
        },
        getSelectorFromElement: function(e) {
            var t = e.getAttribute("data-target");
            if (!t || "#" === t) {
                var n = e.getAttribute("href");
                t = n && "#" !== n ? n.trim() : ""
            }
            try {
                return document.querySelector(t) ? t : null
            } catch (e) {
                return null
            }
        },
        getTransitionDurationFromElement: function(e) {
            if (!e) return 0;
            var t = p(e).css("transition-duration"),
                n = p(e).css("transition-delay"),
                i = parseFloat(t),
                r = parseFloat(n);
            return i || r ? (t = t.split(",")[0], n = n.split(",")[0], 1e3 * (parseFloat(t) + parseFloat(n))) : 0
        },
        reflow: function(e) {
            return e.offsetHeight
        },
        triggerTransitionEnd: function(e) {
            p(e).trigger("transitionend")
        },
        supportsTransitionEnd: function() {
            return Boolean("transitionend")
        },
        isElement: function(e) {
            return (e[0] || e).nodeType
        },
        typeCheckConfig: function(e, t, n) {
            for (var i in n)
                if (Object.prototype.hasOwnProperty.call(n, i)) {
                    var r = n[i],
                        o = t[i],
                        s = o && g.isElement(o) ? "element" : null === (a = o) || void 0 === a ? "" + a : {}.toString.call(a).match(/\s([a-z]+)/i)[1].toLowerCase();
                    if (!new RegExp(r).test(s)) throw new Error(e.toUpperCase() + ': Option "' + i + '" provided type "' + s + '" but expected type "' + r + '".')
                }
            var a
        },
        findShadowRoot: function(e) {
            if (!document.documentElement.attachShadow) return null;
            if ("function" == typeof e.getRootNode) {
                var t = e.getRootNode();
                return t instanceof ShadowRoot ? t : null
            }
            return e instanceof ShadowRoot ? e : e.parentNode ? g.findShadowRoot(e.parentNode) : null
        },
        jQueryDetection: function() {
            if (void 0 === p) throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");
            var e = p.fn.jquery.split(" ")[0].split(".");
            if (e[0] < 2 && e[1] < 9 || 1 === e[0] && 9 === e[1] && e[2] < 1 || 4 <= e[0]) throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")
        }
    };
    g.jQueryDetection(), p.fn.emulateTransitionEnd = function(e) {
        var t = this,
            n = !1;
        return p(this).one(g.TRANSITION_END, function() {
            n = !0
        }), setTimeout(function() {
            n || g.triggerTransitionEnd(t)
        }, e), this
    }, p.event.special[g.TRANSITION_END] = {
        bindType: "transitionend",
        delegateType: "transitionend",
        handle: function(e) {
            if (p(e.target).is(this)) return e.handleObj.handler.apply(this, arguments)
        }
    };
    var n = "alert",
        r = p.fn[n],
        o = function() {
            function i(e) {
                this._element = e
            }
            var e = i.prototype;
            return e.close = function(e) {
                var t = this._element;
                e && (t = this._getRootElement(e)), this._triggerCloseEvent(t).isDefaultPrevented() || this._removeElement(t)
            }, e.dispose = function() {
                p.removeData(this._element, "bs.alert"), this._element = null
            }, e._getRootElement = function(e) {
                var t = g.getSelectorFromElement(e),
                    n = !1;
                return t && (n = document.querySelector(t)), n || (n = p(e).closest(".alert")[0]), n
            }, e._triggerCloseEvent = function(e) {
                var t = p.Event("close.bs.alert");
                return p(e).trigger(t), t
            }, e._removeElement = function(t) {
                var n = this;
                if (p(t).removeClass("show"), p(t).hasClass("fade")) {
                    var e = g.getTransitionDurationFromElement(t);
                    p(t).one(g.TRANSITION_END, function(e) {
                        return n._destroyElement(t, e)
                    }).emulateTransitionEnd(e)
                } else this._destroyElement(t)
            }, e._destroyElement = function(e) {
                p(e).detach().trigger("closed.bs.alert").remove()
            }, i._jQueryInterface = function(n) {
                return this.each(function() {
                    var e = p(this),
                        t = e.data("bs.alert");
                    t || (t = new i(this), e.data("bs.alert", t)), "close" === n && t[n](this)
                })
            }, i._handleDismiss = function(t) {
                return function(e) {
                    e && e.preventDefault(), t.close(this)
                }
            }, s(i, null, [{
                key: "VERSION",
                get: function() {
                    return "4.5.0"
                }
            }]), i
        }();
    p(document).on("click.bs.alert.data-api", '[data-dismiss="alert"]', o._handleDismiss(new o)), p.fn[n] = o._jQueryInterface, p.fn[n].Constructor = o, p.fn[n].noConflict = function() {
        return p.fn[n] = r, o._jQueryInterface
    };
    var a = p.fn.button,
        c = function() {
            function n(e) {
                this._element = e
            }
            var e = n.prototype;
            return e.toggle = function() {
                var e = !0,
                    t = !0,
                    n = p(this._element).closest('[data-toggle="buttons"]')[0];
                if (n) {
                    var i = this._element.querySelector('input:not([type="hidden"])');
                    if (i) {
                        if ("radio" === i.type)
                            if (i.checked && this._element.classList.contains("active")) e = !1;
                            else {
                                var r = n.querySelector(".active");
                                r && p(r).removeClass("active")
                            }
                        e && ("checkbox" !== i.type && "radio" !== i.type || (i.checked = !this._element.classList.contains("active")), p(i).trigger("change")), i.focus(), t = !1
                    }
                }
                this._element.hasAttribute("disabled") || this._element.classList.contains("disabled") || (t && this._element.setAttribute("aria-pressed", !this._element.classList.contains("active")), e && p(this._element).toggleClass("active"))
            }, e.dispose = function() {
                p.removeData(this._element, "bs.button"), this._element = null
            }, n._jQueryInterface = function(t) {
                return this.each(function() {
                    var e = p(this).data("bs.button");
                    e || (e = new n(this), p(this).data("bs.button", e)), "toggle" === t && e[t]()
                })
            }, s(n, null, [{
                key: "VERSION",
                get: function() {
                    return "4.5.0"
                }
            }]), n
        }();
    p(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function(e) {
        var t = e.target,
            n = t;
        if (p(t).hasClass("btn") || (t = p(t).closest(".btn")[0]), !t || t.hasAttribute("disabled") || t.classList.contains("disabled")) e.preventDefault();
        else {
            var i = t.querySelector('input:not([type="hidden"])');
            if (i && (i.hasAttribute("disabled") || i.classList.contains("disabled"))) return void e.preventDefault();
            "LABEL" === n.tagName && i && "checkbox" === i.type && e.preventDefault(), c._jQueryInterface.call(p(t), "toggle")
        }
    }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function(e) {
        var t = p(e.target).closest(".btn")[0];
        p(t).toggleClass("focus", /^focus(in)?$/.test(e.type))
    }), p(window).on("load.bs.button.data-api", function() {
        for (var e = [].slice.call(document.querySelectorAll('[data-toggle="buttons"] .btn')), t = 0, n = e.length; t < n; t++) {
            var i = e[t],
                r = i.querySelector('input:not([type="hidden"])');
            r.checked || r.hasAttribute("checked") ? i.classList.add("active") : i.classList.remove("active")
        }
        for (var o = 0, s = (e = [].slice.call(document.querySelectorAll('[data-toggle="button"]'))).length; o < s; o++) {
            var a = e[o];
            "true" === a.getAttribute("aria-pressed") ? a.classList.add("active") : a.classList.remove("active")
        }
    }), p.fn.button = c._jQueryInterface, p.fn.button.Constructor = c, p.fn.button.noConflict = function() {
        return p.fn.button = a, c._jQueryInterface
    };
    var u = "carousel",
        f = p.fn[u],
        d = {
            interval: 5e3,
            keyboard: !0,
            slide: !1,
            pause: "hover",
            wrap: !0,
            touch: !0
        },
        h = {
            interval: "(number|boolean)",
            keyboard: "boolean",
            slide: "(boolean|string)",
            pause: "(string|boolean)",
            wrap: "boolean",
            touch: "boolean"
        },
        m = {
            TOUCH: "touch",
            PEN: "pen"
        },
        v = function() {
            function o(e, t) {
                this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this.touchTimeout = null, this.touchStartX = 0, this.touchDeltaX = 0, this._config = this._getConfig(t), this._element = e, this._indicatorsElement = this._element.querySelector(".carousel-indicators"), this._touchSupported = "ontouchstart" in document.documentElement || 0 < navigator.maxTouchPoints, this._pointerEvent = Boolean(window.PointerEvent || window.MSPointerEvent), this._addEventListeners()
            }
            var e = o.prototype;
            return e.next = function() {
                this._isSliding || this._slide("next")
            }, e.nextWhenVisible = function() {
                !document.hidden && p(this._element).is(":visible") && "hidden" !== p(this._element).css("visibility") && this.next()
            }, e.prev = function() {
                this._isSliding || this._slide("prev")
            }, e.pause = function(e) {
                e || (this._isPaused = !0), this._element.querySelector(".carousel-item-next, .carousel-item-prev") && (g.triggerTransitionEnd(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null
            }, e.cycle = function(e) {
                e || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval))
            }, e.to = function(e) {
                var t = this;
                this._activeElement = this._element.querySelector(".active.carousel-item");
                var n = this._getItemIndex(this._activeElement);
                if (!(e > this._items.length - 1 || e < 0))
                    if (this._isSliding) p(this._element).one("slid.bs.carousel", function() {
                        return t.to(e)
                    });
                    else {
                        if (n === e) return this.pause(), void this.cycle();
                        var i = n < e ? "next" : "prev";
                        this._slide(i, this._items[e])
                    }
            }, e.dispose = function() {
                p(this._element).off(".bs.carousel"), p.removeData(this._element, "bs.carousel"), this._items = null, this._config = null, this._element = null, this._interval = null, this._isPaused = null, this._isSliding = null, this._activeElement = null, this._indicatorsElement = null
            }, e._getConfig = function(e) {
                return e = l(l({}, d), e), g.typeCheckConfig(u, e, h), e
            }, e._handleSwipe = function() {
                var e = Math.abs(this.touchDeltaX);
                if (!(e <= 40)) {
                    var t = e / this.touchDeltaX;
                    (this.touchDeltaX = 0) < t && this.prev(), t < 0 && this.next()
                }
            }, e._addEventListeners = function() {
                var t = this;
                this._config.keyboard && p(this._element).on("keydown.bs.carousel", function(e) {
                    return t._keydown(e)
                }), "hover" === this._config.pause && p(this._element).on("mouseenter.bs.carousel", function(e) {
                    return t.pause(e)
                }).on("mouseleave.bs.carousel", function(e) {
                    return t.cycle(e)
                }), this._config.touch && this._addTouchEventListeners()
            }, e._addTouchEventListeners = function() {
                var n = this;
                if (this._touchSupported) {
                    var t = function(e) {
                            n._pointerEvent && m[e.originalEvent.pointerType.toUpperCase()] ? n.touchStartX = e.originalEvent.clientX : n._pointerEvent || (n.touchStartX = e.originalEvent.touches[0].clientX)
                        },
                        i = function(e) {
                            n._pointerEvent && m[e.originalEvent.pointerType.toUpperCase()] && (n.touchDeltaX = e.originalEvent.clientX - n.touchStartX), n._handleSwipe(), "hover" === n._config.pause && (n.pause(), n.touchTimeout && clearTimeout(n.touchTimeout), n.touchTimeout = setTimeout(function(e) {
                                return n.cycle(e)
                            }, 500 + n._config.interval))
                        };
                    p(this._element.querySelectorAll(".carousel-item img")).on("dragstart.bs.carousel", function(e) {
                        return e.preventDefault()
                    }), this._pointerEvent ? (p(this._element).on("pointerdown.bs.carousel", function(e) {
                        return t(e)
                    }), p(this._element).on("pointerup.bs.carousel", function(e) {
                        return i(e)
                    }), this._element.classList.add("pointer-event")) : (p(this._element).on("touchstart.bs.carousel", function(e) {
                        return t(e)
                    }), p(this._element).on("touchmove.bs.carousel", function(e) {
                        var t;
                        (t = e).originalEvent.touches && 1 < t.originalEvent.touches.length ? n.touchDeltaX = 0 : n.touchDeltaX = t.originalEvent.touches[0].clientX - n.touchStartX
                    }), p(this._element).on("touchend.bs.carousel", function(e) {
                        return i(e)
                    }))
                }
            }, e._keydown = function(e) {
                if (!/input|textarea/i.test(e.target.tagName)) switch (e.which) {
                    case 37:
                        e.preventDefault(), this.prev();
                        break;
                    case 39:
                        e.preventDefault(), this.next()
                }
            }, e._getItemIndex = function(e) {
                return this._items = e && e.parentNode ? [].slice.call(e.parentNode.querySelectorAll(".carousel-item")) : [], this._items.indexOf(e)
            }, e._getItemByDirection = function(e, t) {
                var n = "next" === e,
                    i = "prev" === e,
                    r = this._getItemIndex(t),
                    o = this._items.length - 1;
                if ((i && 0 === r || n && r === o) && !this._config.wrap) return t;
                var s = (r + ("prev" === e ? -1 : 1)) % this._items.length;
                return -1 === s ? this._items[this._items.length - 1] : this._items[s]
            }, e._triggerSlideEvent = function(e, t) {
                var n = this._getItemIndex(e),
                    i = this._getItemIndex(this._element.querySelector(".active.carousel-item")),
                    r = p.Event("slide.bs.carousel", {
                        relatedTarget: e,
                        direction: t,
                        from: i,
                        to: n
                    });
                return p(this._element).trigger(r), r
            }, e._setActiveIndicatorElement = function(e) {
                if (this._indicatorsElement) {
                    var t = [].slice.call(this._indicatorsElement.querySelectorAll(".active"));
                    p(t).removeClass("active");
                    var n = this._indicatorsElement.children[this._getItemIndex(e)];
                    n && p(n).addClass("active")
                }
            }, e._slide = function(e, t) {
                var n, i, r, o = this,
                    s = this._element.querySelector(".active.carousel-item"),
                    a = this._getItemIndex(s),
                    l = t || s && this._getItemByDirection(e, s),
                    c = this._getItemIndex(l),
                    u = Boolean(this._interval);
                if ("next" === e ? (n = "carousel-item-left", i = "carousel-item-next", r = "left") : (n = "carousel-item-right", i = "carousel-item-prev", r = "right"), l && p(l).hasClass("active")) this._isSliding = !1;
                else if (!this._triggerSlideEvent(l, r).isDefaultPrevented() && s && l) {
                    this._isSliding = !0, u && this.pause(), this._setActiveIndicatorElement(l);
                    var f = p.Event("slid.bs.carousel", {
                        relatedTarget: l,
                        direction: r,
                        from: a,
                        to: c
                    });
                    if (p(this._element).hasClass("slide")) {
                        p(l).addClass(i), g.reflow(l), p(s).addClass(n), p(l).addClass(n);
                        var d = parseInt(l.getAttribute("data-interval"), 10);
                        d ? (this._config.defaultInterval = this._config.defaultInterval || this._config.interval, this._config.interval = d) : this._config.interval = this._config.defaultInterval || this._config.interval;
                        var h = g.getTransitionDurationFromElement(s);
                        p(s).one(g.TRANSITION_END, function() {
                            p(l).removeClass(n + " " + i).addClass("active"), p(s).removeClass("active " + i + " " + n), o._isSliding = !1, setTimeout(function() {
                                return p(o._element).trigger(f)
                            }, 0)
                        }).emulateTransitionEnd(h)
                    } else p(s).removeClass("active"), p(l).addClass("active"), this._isSliding = !1, p(this._element).trigger(f);
                    u && this.cycle()
                }
            }, o._jQueryInterface = function(i) {
                return this.each(function() {
                    var e = p(this).data("bs.carousel"),
                        t = l(l({}, d), p(this).data());
                    "object" == typeof i && (t = l(l({}, t), i));
                    var n = "string" == typeof i ? i : t.slide;
                    if (e || (e = new o(this, t), p(this).data("bs.carousel", e)), "number" == typeof i) e.to(i);
                    else if ("string" == typeof n) {
                        if (void 0 === e[n]) throw new TypeError('No method named "' + n + '"');
                        e[n]()
                    } else t.interval && t.ride && (e.pause(), e.cycle())
                })
            }, o._dataApiClickHandler = function(e) {
                var t = g.getSelectorFromElement(this);
                if (t) {
                    var n = p(t)[0];
                    if (n && p(n).hasClass("carousel")) {
                        var i = l(l({}, p(n).data()), p(this).data()),
                            r = this.getAttribute("data-slide-to");
                        r && (i.interval = !1), o._jQueryInterface.call(p(n), i), r && p(n).data("bs.carousel").to(r), e.preventDefault()
                    }
                }
            }, s(o, null, [{
                key: "VERSION",
                get: function() {
                    return "4.5.0"
                }
            }, {
                key: "Default",
                get: function() {
                    return d
                }
            }]), o
        }();
    p(document).on("click.bs.carousel.data-api", "[data-slide], [data-slide-to]", v._dataApiClickHandler), p(window).on("load.bs.carousel.data-api", function() {
        for (var e = [].slice.call(document.querySelectorAll('[data-ride="carousel"]')), t = 0, n = e.length; t < n; t++) {
            var i = p(e[t]);
            v._jQueryInterface.call(i, i.data())
        }
    }), p.fn[u] = v._jQueryInterface, p.fn[u].Constructor = v, p.fn[u].noConflict = function() {
        return p.fn[u] = f, v._jQueryInterface
    };
    var y = "collapse",
        b = p.fn[y],
        _ = {
            toggle: !0,
            parent: ""
        },
        w = {
            toggle: "boolean",
            parent: "(string|element)"
        },
        x = function() {
            function a(t, e) {
                this._isTransitioning = !1, this._element = t, this._config = this._getConfig(e), this._triggerArray = [].slice.call(document.querySelectorAll('[data-toggle="collapse"][href="#' + t.id + '"],[data-toggle="collapse"][data-target="#' + t.id + '"]'));
                for (var n = [].slice.call(document.querySelectorAll('[data-toggle="collapse"]')), i = 0, r = n.length; i < r; i++) {
                    var o = n[i],
                        s = g.getSelectorFromElement(o),
                        a = [].slice.call(document.querySelectorAll(s)).filter(function(e) {
                            return e === t
                        });
                    null !== s && 0 < a.length && (this._selector = s, this._triggerArray.push(o))
                }
                this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle()
            }
            var e = a.prototype;
            return e.toggle = function() {
                p(this._element).hasClass("show") ? this.hide() : this.show()
            }, e.show = function() {
                var e, t, n = this;
                if (!(this._isTransitioning || p(this._element).hasClass("show") || (this._parent && 0 === (e = [].slice.call(this._parent.querySelectorAll(".show, .collapsing")).filter(function(e) {
                        return "string" == typeof n._config.parent ? e.getAttribute("data-parent") === n._config.parent : e.classList.contains("collapse")
                    })).length && (e = null), e && (t = p(e).not(this._selector).data("bs.collapse")) && t._isTransitioning))) {
                    var i = p.Event("show.bs.collapse");
                    if (p(this._element).trigger(i), !i.isDefaultPrevented()) {
                        e && (a._jQueryInterface.call(p(e).not(this._selector), "hide"), t || p(e).data("bs.collapse", null));
                        var r = this._getDimension();
                        p(this._element).removeClass("collapse").addClass("collapsing"), this._element.style[r] = 0, this._triggerArray.length && p(this._triggerArray).removeClass("collapsed").attr("aria-expanded", !0), this.setTransitioning(!0);
                        var o = "scroll" + (r[0].toUpperCase() + r.slice(1)),
                            s = g.getTransitionDurationFromElement(this._element);
                        p(this._element).one(g.TRANSITION_END, function() {
                            p(n._element).removeClass("collapsing").addClass("collapse show"), n._element.style[r] = "", n.setTransitioning(!1), p(n._element).trigger("shown.bs.collapse")
                        }).emulateTransitionEnd(s), this._element.style[r] = this._element[o] + "px"
                    }
                }
            }, e.hide = function() {
                var e = this;
                if (!this._isTransitioning && p(this._element).hasClass("show")) {
                    var t = p.Event("hide.bs.collapse");
                    if (p(this._element).trigger(t), !t.isDefaultPrevented()) {
                        var n = this._getDimension();
                        this._element.style[n] = this._element.getBoundingClientRect()[n] + "px", g.reflow(this._element), p(this._element).addClass("collapsing").removeClass("collapse show");
                        var i = this._triggerArray.length;
                        if (0 < i)
                            for (var r = 0; r < i; r++) {
                                var o = this._triggerArray[r],
                                    s = g.getSelectorFromElement(o);
                                null !== s && (p([].slice.call(document.querySelectorAll(s))).hasClass("show") || p(o).addClass("collapsed").attr("aria-expanded", !1))
                            }
                        this.setTransitioning(!0), this._element.style[n] = "";
                        var a = g.getTransitionDurationFromElement(this._element);
                        p(this._element).one(g.TRANSITION_END, function() {
                            e.setTransitioning(!1), p(e._element).removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
                        }).emulateTransitionEnd(a)
                    }
                }
            }, e.setTransitioning = function(e) {
                this._isTransitioning = e
            }, e.dispose = function() {
                p.removeData(this._element, "bs.collapse"), this._config = null, this._parent = null, this._element = null, this._triggerArray = null, this._isTransitioning = null
            }, e._getConfig = function(e) {
                return (e = l(l({}, _), e)).toggle = Boolean(e.toggle), g.typeCheckConfig(y, e, w), e
            }, e._getDimension = function() {
                return p(this._element).hasClass("width") ? "width" : "height"
            }, e._getParent = function() {
                var e, n = this;
                g.isElement(this._config.parent) ? (e = this._config.parent, void 0 !== this._config.parent.jquery && (e = this._config.parent[0])) : e = document.querySelector(this._config.parent);
                var t = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]',
                    i = [].slice.call(e.querySelectorAll(t));
                return p(i).each(function(e, t) {
                    n._addAriaAndCollapsedClass(a._getTargetFromElement(t), [t])
                }), e
            }, e._addAriaAndCollapsedClass = function(e, t) {
                var n = p(e).hasClass("show");
                t.length && p(t).toggleClass("collapsed", !n).attr("aria-expanded", n)
            }, a._getTargetFromElement = function(e) {
                var t = g.getSelectorFromElement(e);
                return t ? document.querySelector(t) : null
            }, a._jQueryInterface = function(i) {
                return this.each(function() {
                    var e = p(this),
                        t = e.data("bs.collapse"),
                        n = l(l(l({}, _), e.data()), "object" == typeof i && i ? i : {});
                    if (!t && n.toggle && "string" == typeof i && /show|hide/.test(i) && (n.toggle = !1), t || (t = new a(this, n), e.data("bs.collapse", t)), "string" == typeof i) {
                        if (void 0 === t[i]) throw new TypeError('No method named "' + i + '"');
                        t[i]()
                    }
                })
            }, s(a, null, [{
                key: "VERSION",
                get: function() {
                    return "4.5.0"
                }
            }, {
                key: "Default",
                get: function() {
                    return _
                }
            }]), a
        }();
    p(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function(e) {
        "A" === e.currentTarget.tagName && e.preventDefault();
        var n = p(this),
            t = g.getSelectorFromElement(this),
            i = [].slice.call(document.querySelectorAll(t));
        p(i).each(function() {
            var e = p(this),
                t = e.data("bs.collapse") ? "toggle" : n.data();
            x._jQueryInterface.call(e, t)
        })
    }), p.fn[y] = x._jQueryInterface, p.fn[y].Constructor = x, p.fn[y].noConflict = function() {
        return p.fn[y] = b, x._jQueryInterface
    };
    var E = "undefined" != typeof window && "undefined" != typeof document && "undefined" != typeof navigator,
        T = function() {
            for (var e = ["Edge", "Trident", "Firefox"], t = 0; t < e.length; t += 1)
                if (E && 0 <= navigator.userAgent.indexOf(e[t])) return 1;
            return 0
        }(),
        C = E && window.Promise ? function(e) {
            var t = !1;
            return function() {
                t || (t = !0, window.Promise.resolve().then(function() {
                    t = !1, e()
                }))
            }
        } : function(e) {
            var t = !1;
            return function() {
                t || (t = !0, setTimeout(function() {
                    t = !1, e()
                }, T))
            }
        };

    function S(e) {
        return e && "[object Function]" === {}.toString.call(e)
    }

    function D(e, t) {
        if (1 !== e.nodeType) return [];
        var n = e.ownerDocument.defaultView.getComputedStyle(e, null);
        return t ? n[t] : n
    }

    function k(e) {
        return "HTML" === e.nodeName ? e : e.parentNode || e.host
    }

    function N(e) {
        if (!e) return document.body;
        switch (e.nodeName) {
            case "HTML":
            case "BODY":
                return e.ownerDocument.body;
            case "#document":
                return e.body
        }
        var t = D(e),
            n = t.overflow,
            i = t.overflowX,
            r = t.overflowY;
        return /(auto|scroll|overlay)/.test(n + r + i) ? e : N(k(e))
    }

    function A(e) {
        return e && e.referenceNode ? e.referenceNode : e
    }
    var j = E && !(!window.MSInputMethodContext || !document.documentMode),
        O = E && /MSIE 10/.test(navigator.userAgent);

    function L(e) {
        return 11 === e ? j : 10 === e ? O : j || O
    }

    function I(e) {
        if (!e) return document.documentElement;
        for (var t = L(10) ? document.body : null, n = e.offsetParent || null; n === t && e.nextElementSibling;) n = (e = e.nextElementSibling).offsetParent;
        var i = n && n.nodeName;
        return i && "BODY" !== i && "HTML" !== i ? -1 !== ["TH", "TD", "TABLE"].indexOf(n.nodeName) && "static" === D(n, "position") ? I(n) : n : e ? e.ownerDocument.documentElement : document.documentElement
    }

    function q(e) {
        return null !== e.parentNode ? q(e.parentNode) : e
    }

    function P(e, t) {
        if (!(e && e.nodeType && t && t.nodeType)) return document.documentElement;
        var n = e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING,
            i = n ? e : t,
            r = n ? t : e,
            o = document.createRange();
        o.setStart(i, 0), o.setEnd(r, 0);
        var s, a, l = o.commonAncestorContainer;
        if (e !== l && t !== l || i.contains(r)) return "BODY" === (a = (s = l).nodeName) || "HTML" !== a && I(s.firstElementChild) !== s ? I(l) : l;
        var c = q(e);
        return c.host ? P(c.host, t) : P(e, q(t).host)
    }

    function H(e) {
        var t = "top" === (1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "top") ? "scrollTop" : "scrollLeft",
            n = e.nodeName;
        if ("BODY" === n || "HTML" === n) {
            var i = e.ownerDocument.documentElement;
            return (e.ownerDocument.scrollingElement || i)[t]
        }
        return e[t]
    }

    function R(e, t) {
        var n = "x" === t ? "Left" : "Top",
            i = "Left" === n ? "Right" : "Bottom";
        return parseFloat(e["border" + n + "Width"], 10) + parseFloat(e["border" + i + "Width"], 10)
    }

    function F(e, t, n, i) {
        return Math.max(t["offset" + e], t["scroll" + e], n["client" + e], n["offset" + e], n["scroll" + e], L(10) ? parseInt(n["offset" + e]) + parseInt(i["margin" + ("Height" === e ? "Top" : "Left")]) + parseInt(i["margin" + ("Height" === e ? "Bottom" : "Right")]) : 0)
    }

    function M(e) {
        var t = e.body,
            n = e.documentElement,
            i = L(10) && getComputedStyle(n);
        return {
            height: F("Height", t, n, i),
            width: F("Width", t, n, i)
        }
    }
    var B = function() {
            function i(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                }
            }
            return function(e, t, n) {
                return t && i(e.prototype, t), n && i(e, n), e
            }
        }(),
        W = function(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        },
        U = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
            }
            return e
        };

    function Q(e) {
        return U({}, e, {
            right: e.left + e.width,
            bottom: e.top + e.height
        })
    }

    function $(e) {
        var t = {};
        try {
            if (L(10)) {
                t = e.getBoundingClientRect();
                var n = H(e, "top"),
                    i = H(e, "left");
                t.top += n, t.left += i, t.bottom += n, t.right += i
            } else t = e.getBoundingClientRect()
        } catch (e) {}
        var r = {
                left: t.left,
                top: t.top,
                width: t.right - t.left,
                height: t.bottom - t.top
            },
            o = "HTML" === e.nodeName ? M(e.ownerDocument) : {},
            s = o.width || e.clientWidth || r.width,
            a = o.height || e.clientHeight || r.height,
            l = e.offsetWidth - s,
            c = e.offsetHeight - a;
        if (l || c) {
            var u = D(e);
            l -= R(u, "x"), c -= R(u, "y"), r.width -= l, r.height -= c
        }
        return Q(r)
    }

    function z(e, t) {
        var n = 2 < arguments.length && void 0 !== arguments[2] && arguments[2],
            i = L(10),
            r = "HTML" === t.nodeName,
            o = $(e),
            s = $(t),
            a = N(e),
            l = D(t),
            c = parseFloat(l.borderTopWidth, 10),
            u = parseFloat(l.borderLeftWidth, 10);
        n && r && (s.top = Math.max(s.top, 0), s.left = Math.max(s.left, 0));
        var f = Q({
            top: o.top - s.top - c,
            left: o.left - s.left - u,
            width: o.width,
            height: o.height
        });
        if (f.marginTop = 0, f.marginLeft = 0, !i && r) {
            var d = parseFloat(l.marginTop, 10),
                h = parseFloat(l.marginLeft, 10);
            f.top -= c - d, f.bottom -= c - d, f.left -= u - h, f.right -= u - h, f.marginTop = d, f.marginLeft = h
        }
        return (i && !n ? t.contains(a) : t === a && "BODY" !== a.nodeName) && (f = function(e, t) {
            var n = 2 < arguments.length && void 0 !== arguments[2] && arguments[2],
                i = H(t, "top"),
                r = H(t, "left"),
                o = n ? -1 : 1;
            return e.top += i * o, e.bottom += i * o, e.left += r * o, e.right += r * o, e
        }(f, t)), f
    }

    function V(e) {
        if (!e || !e.parentElement || L()) return document.documentElement;
        for (var t = e.parentElement; t && "none" === D(t, "transform");) t = t.parentElement;
        return t || document.documentElement
    }

    function X(e, t, n, i) {
        var r = 4 < arguments.length && void 0 !== arguments[4] && arguments[4],
            o = {
                top: 0,
                left: 0
            },
            s = r ? V(e) : P(e, A(t));
        if ("viewport" === i) o = function(e) {
            var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
                n = e.ownerDocument.documentElement,
                i = z(e, n),
                r = Math.max(n.clientWidth, window.innerWidth || 0),
                o = Math.max(n.clientHeight, window.innerHeight || 0),
                s = t ? 0 : H(n),
                a = t ? 0 : H(n, "left");
            return Q({
                top: s - i.top + i.marginTop,
                left: a - i.left + i.marginLeft,
                width: r,
                height: o
            })
        }(s, r);
        else {
            var a = void 0;
            "scrollParent" === i ? "BODY" === (a = N(k(t))).nodeName && (a = e.ownerDocument.documentElement) : a = "window" === i ? e.ownerDocument.documentElement : i;
            var l = z(a, s, r);
            if ("HTML" !== a.nodeName || function e(t) {
                    var n = t.nodeName;
                    if ("BODY" === n || "HTML" === n) return !1;
                    if ("fixed" === D(t, "position")) return !0;
                    var i = k(t);
                    return !!i && e(i)
                }(s)) o = l;
            else {
                var c = M(e.ownerDocument),
                    u = c.height,
                    f = c.width;
                o.top += l.top - l.marginTop, o.bottom = u + l.top, o.left += l.left - l.marginLeft, o.right = f + l.left
            }
        }
        var d = "number" == typeof(n = n || 0);
        return o.left += d ? n : n.left || 0, o.top += d ? n : n.top || 0, o.right -= d ? n : n.right || 0, o.bottom -= d ? n : n.bottom || 0, o
    }

    function Y(e, t, i, n, r) {
        var o = 5 < arguments.length && void 0 !== arguments[5] ? arguments[5] : 0;
        if (-1 === e.indexOf("auto")) return e;
        var s = X(i, n, o, r),
            a = {
                top: {
                    width: s.width,
                    height: t.top - s.top
                },
                right: {
                    width: s.right - t.right,
                    height: s.height
                },
                bottom: {
                    width: s.width,
                    height: s.bottom - t.bottom
                },
                left: {
                    width: t.left - s.left,
                    height: s.height
                }
            },
            l = Object.keys(a).map(function(e) {
                return U({
                    key: e
                }, a[e], {
                    area: (t = a[e], t.width * t.height)
                });
                var t
            }).sort(function(e, t) {
                return t.area - e.area
            }),
            c = l.filter(function(e) {
                var t = e.width,
                    n = e.height;
                return t >= i.clientWidth && n >= i.clientHeight
            }),
            u = 0 < c.length ? c[0].key : l[0].key,
            f = e.split("-")[1];
        return u + (f ? "-" + f : "")
    }

    function K(e, t, n) {
        var i = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
        return z(n, i ? V(t) : P(t, A(n)), i)
    }

    function G(e) {
        var t = e.ownerDocument.defaultView.getComputedStyle(e),
            n = parseFloat(t.marginTop || 0) + parseFloat(t.marginBottom || 0),
            i = parseFloat(t.marginLeft || 0) + parseFloat(t.marginRight || 0);
        return {
            width: e.offsetWidth + i,
            height: e.offsetHeight + n
        }
    }

    function J(e) {
        var t = {
            left: "right",
            right: "left",
            bottom: "top",
            top: "bottom"
        };
        return e.replace(/left|right|bottom|top/g, function(e) {
            return t[e]
        })
    }

    function Z(e, t, n) {
        n = n.split("-")[0];
        var i = G(e),
            r = {
                width: i.width,
                height: i.height
            },
            o = -1 !== ["right", "left"].indexOf(n),
            s = o ? "top" : "left",
            a = o ? "left" : "top",
            l = o ? "height" : "width",
            c = o ? "width" : "height";
        return r[s] = t[s] + t[l] / 2 - i[l] / 2, r[a] = n === a ? t[a] - i[c] : t[J(a)], r
    }

    function ee(e, t) {
        return Array.prototype.find ? e.find(t) : e.filter(t)[0]
    }

    function te(e, n, t) {
        return (void 0 === t ? e : e.slice(0, function(e, t, n) {
            if (Array.prototype.findIndex) return e.findIndex(function(e) {
                return e.name === n
            });
            var i = ee(e, function(e) {
                return e.name === n
            });
            return e.indexOf(i)
        }(e, 0, t))).forEach(function(e) {
            e.function && console.warn("`modifier.function` is deprecated, use `modifier.fn`!");
            var t = e.function || e.fn;
            e.enabled && S(t) && (n.offsets.popper = Q(n.offsets.popper), n.offsets.reference = Q(n.offsets.reference), n = t(n, e))
        }), n
    }

    function ne(e, n) {
        return e.some(function(e) {
            var t = e.name;
            return e.enabled && t === n
        })
    }

    function ie(e) {
        for (var t = [!1, "ms", "Webkit", "Moz", "O"], n = e.charAt(0).toUpperCase() + e.slice(1), i = 0; i < t.length; i++) {
            var r = t[i],
                o = r ? "" + r + n : e;
            if (void 0 !== document.body.style[o]) return o
        }
        return null
    }

    function re(e) {
        var t = e.ownerDocument;
        return t ? t.defaultView : window
    }

    function oe() {
        this.state.eventsEnabled || (this.state = function(e, t, n, i) {
            n.updateBound = i, re(e).addEventListener("resize", n.updateBound, {
                passive: !0
            });
            var r = N(e);
            return function e(t, n, i, r) {
                var o = "BODY" === t.nodeName,
                    s = o ? t.ownerDocument.defaultView : t;
                s.addEventListener(n, i, {
                    passive: !0
                }), o || e(N(s.parentNode), n, i, r), r.push(s)
            }(r, "scroll", n.updateBound, n.scrollParents), n.scrollElement = r, n.eventsEnabled = !0, n
        }(this.reference, this.options, this.state, this.scheduleUpdate))
    }

    function se(e) {
        return "" !== e && !isNaN(parseFloat(e)) && isFinite(e)
    }

    function ae(n, i) {
        Object.keys(i).forEach(function(e) {
            var t = ""; - 1 !== ["width", "height", "top", "right", "bottom", "left"].indexOf(e) && se(i[e]) && (t = "px"), n.style[e] = i[e] + t
        })
    }
    var le = E && /Firefox/i.test(navigator.userAgent);

    function ce(e, t, n) {
        var i = ee(e, function(e) {
                return e.name === t
            }),
            r = !!i && e.some(function(e) {
                return e.name === n && e.enabled && e.order < i.order
            });
        if (!r) {
            var o = "`" + t + "`",
                s = "`" + n + "`";
            console.warn(s + " modifier is required by " + o + " modifier in order to work, be sure to include it before " + o + "!")
        }
        return r
    }
    var ue = ["auto-start", "auto", "auto-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start"],
        fe = ue.slice(3);

    function de(e) {
        var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
            n = fe.indexOf(e),
            i = fe.slice(n + 1).concat(fe.slice(0, n));
        return t ? i.reverse() : i
    }
    var he = {
            placement: "bottom",
            positionFixed: !1,
            eventsEnabled: !0,
            removeOnDestroy: !1,
            onCreate: function() {},
            onUpdate: function() {},
            modifiers: {
                shift: {
                    order: 100,
                    enabled: !0,
                    fn: function(e) {
                        var t = e.placement,
                            n = t.split("-")[0],
                            i = t.split("-")[1];
                        if (i) {
                            var r = e.offsets,
                                o = r.reference,
                                s = r.popper,
                                a = -1 !== ["bottom", "top"].indexOf(n),
                                l = a ? "left" : "top",
                                c = a ? "width" : "height",
                                u = {
                                    start: W({}, l, o[l]),
                                    end: W({}, l, o[l] + o[c] - s[c])
                                };
                            e.offsets.popper = U({}, s, u[i])
                        }
                        return e
                    }
                },
                offset: {
                    order: 200,
                    enabled: !0,
                    fn: function(e, t) {
                        var n, i = t.offset,
                            r = e.placement,
                            o = e.offsets,
                            s = o.popper,
                            a = o.reference,
                            l = r.split("-")[0];
                        return n = se(+i) ? [+i, 0] : function(e, r, o, t) {
                            var s = [0, 0],
                                a = -1 !== ["right", "left"].indexOf(t),
                                n = e.split(/(\+|\-)/).map(function(e) {
                                    return e.trim()
                                }),
                                i = n.indexOf(ee(n, function(e) {
                                    return -1 !== e.search(/,|\s/)
                                }));
                            n[i] && -1 === n[i].indexOf(",") && console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");
                            var l = /\s*,\s*|\s+/,
                                c = -1 !== i ? [n.slice(0, i).concat([n[i].split(l)[0]]), [n[i].split(l)[1]].concat(n.slice(i + 1))] : [n];
                            return (c = c.map(function(e, t) {
                                var n = (1 === t ? !a : a) ? "height" : "width",
                                    i = !1;
                                return e.reduce(function(e, t) {
                                    return "" === e[e.length - 1] && -1 !== ["+", "-"].indexOf(t) ? (e[e.length - 1] = t, i = !0, e) : i ? (e[e.length - 1] += t, i = !1, e) : e.concat(t)
                                }, []).map(function(e) {
                                    return function(e, t, n, i) {
                                        var r = e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
                                            o = +r[1],
                                            s = r[2];
                                        if (!o) return e;
                                        if (0 === s.indexOf("%")) {
                                            var a = void 0;
                                            switch (s) {
                                                case "%p":
                                                    a = n;
                                                    break;
                                                case "%":
                                                case "%r":
                                                default:
                                                    a = i
                                            }
                                            return Q(a)[t] / 100 * o
                                        }
                                        return "vh" === s || "vw" === s ? ("vh" === s ? Math.max(document.documentElement.clientHeight, window.innerHeight || 0) : Math.max(document.documentElement.clientWidth, window.innerWidth || 0)) / 100 * o : o
                                    }(e, n, r, o)
                                })
                            })).forEach(function(n, i) {
                                n.forEach(function(e, t) {
                                    se(e) && (s[i] += e * ("-" === n[t - 1] ? -1 : 1))
                                })
                            }), s
                        }(i, s, a, l), "left" === l ? (s.top += n[0], s.left -= n[1]) : "right" === l ? (s.top += n[0], s.left += n[1]) : "top" === l ? (s.left += n[0], s.top -= n[1]) : "bottom" === l && (s.left += n[0], s.top += n[1]), e.popper = s, e
                    },
                    offset: 0
                },
                preventOverflow: {
                    order: 300,
                    enabled: !0,
                    fn: function(e, i) {
                        var t = i.boundariesElement || I(e.instance.popper);
                        e.instance.reference === t && (t = I(t));
                        var n = ie("transform"),
                            r = e.instance.popper.style,
                            o = r.top,
                            s = r.left,
                            a = r[n];
                        r.top = "", r.left = "", r[n] = "";
                        var l = X(e.instance.popper, e.instance.reference, i.padding, t, e.positionFixed);
                        r.top = o, r.left = s, r[n] = a, i.boundaries = l;
                        var c = i.priority,
                            u = e.offsets.popper,
                            f = {
                                primary: function(e) {
                                    var t = u[e];
                                    return u[e] < l[e] && !i.escapeWithReference && (t = Math.max(u[e], l[e])), W({}, e, t)
                                },
                                secondary: function(e) {
                                    var t = "right" === e ? "left" : "top",
                                        n = u[t];
                                    return u[e] > l[e] && !i.escapeWithReference && (n = Math.min(u[t], l[e] - ("right" === e ? u.width : u.height))), W({}, t, n)
                                }
                            };
                        return c.forEach(function(e) {
                            var t = -1 !== ["left", "top"].indexOf(e) ? "primary" : "secondary";
                            u = U({}, u, f[t](e))
                        }), e.offsets.popper = u, e
                    },
                    priority: ["left", "right", "top", "bottom"],
                    padding: 5,
                    boundariesElement: "scrollParent"
                },
                keepTogether: {
                    order: 400,
                    enabled: !0,
                    fn: function(e) {
                        var t = e.offsets,
                            n = t.popper,
                            i = t.reference,
                            r = e.placement.split("-")[0],
                            o = Math.floor,
                            s = -1 !== ["top", "bottom"].indexOf(r),
                            a = s ? "right" : "bottom",
                            l = s ? "left" : "top",
                            c = s ? "width" : "height";
                        return n[a] < o(i[l]) && (e.offsets.popper[l] = o(i[l]) - n[c]), n[l] > o(i[a]) && (e.offsets.popper[l] = o(i[a])), e
                    }
                },
                arrow: {
                    order: 500,
                    enabled: !0,
                    fn: function(e, t) {
                        var n;
                        if (!ce(e.instance.modifiers, "arrow", "keepTogether")) return e;
                        var i = t.element;
                        if ("string" == typeof i) {
                            if (!(i = e.instance.popper.querySelector(i))) return e
                        } else if (!e.instance.popper.contains(i)) return console.warn("WARNING: `arrow.element` must be child of its popper element!"), e;
                        var r = e.placement.split("-")[0],
                            o = e.offsets,
                            s = o.popper,
                            a = o.reference,
                            l = -1 !== ["left", "right"].indexOf(r),
                            c = l ? "height" : "width",
                            u = l ? "Top" : "Left",
                            f = u.toLowerCase(),
                            d = l ? "left" : "top",
                            h = l ? "bottom" : "right",
                            p = G(i)[c];
                        a[h] - p < s[f] && (e.offsets.popper[f] -= s[f] - (a[h] - p)), a[f] + p > s[h] && (e.offsets.popper[f] += a[f] + p - s[h]), e.offsets.popper = Q(e.offsets.popper);
                        var g = a[f] + a[c] / 2 - p / 2,
                            m = D(e.instance.popper),
                            v = parseFloat(m["margin" + u], 10),
                            y = parseFloat(m["border" + u + "Width"], 10),
                            b = g - e.offsets.popper[f] - v - y;
                        return b = Math.max(Math.min(s[c] - p, b), 0), e.arrowElement = i, e.offsets.arrow = (W(n = {}, f, Math.round(b)), W(n, d, ""), n), e
                    },
                    element: "[x-arrow]"
                },
                flip: {
                    order: 600,
                    enabled: !0,
                    fn: function(g, m) {
                        if (ne(g.instance.modifiers, "inner")) return g;
                        if (g.flipped && g.placement === g.originalPlacement) return g;
                        var v = X(g.instance.popper, g.instance.reference, m.padding, m.boundariesElement, g.positionFixed),
                            y = g.placement.split("-")[0],
                            b = J(y),
                            _ = g.placement.split("-")[1] || "",
                            w = [];
                        switch (m.behavior) {
                            case "flip":
                                w = [y, b];
                                break;
                            case "clockwise":
                                w = de(y);
                                break;
                            case "counterclockwise":
                                w = de(y, !0);
                                break;
                            default:
                                w = m.behavior
                        }
                        return w.forEach(function(e, t) {
                            if (y !== e || w.length === t + 1) return g;
                            y = g.placement.split("-")[0], b = J(y);
                            var n = g.offsets.popper,
                                i = g.offsets.reference,
                                r = Math.floor,
                                o = "left" === y && r(n.right) > r(i.left) || "right" === y && r(n.left) < r(i.right) || "top" === y && r(n.bottom) > r(i.top) || "bottom" === y && r(n.top) < r(i.bottom),
                                s = r(n.left) < r(v.left),
                                a = r(n.right) > r(v.right),
                                l = r(n.top) < r(v.top),
                                c = r(n.bottom) > r(v.bottom),
                                u = "left" === y && s || "right" === y && a || "top" === y && l || "bottom" === y && c,
                                f = -1 !== ["top", "bottom"].indexOf(y),
                                d = !!m.flipVariations && (f && "start" === _ && s || f && "end" === _ && a || !f && "start" === _ && l || !f && "end" === _ && c),
                                h = !!m.flipVariationsByContent && (f && "start" === _ && a || f && "end" === _ && s || !f && "start" === _ && c || !f && "end" === _ && l),
                                p = d || h;
                            (o || u || p) && (g.flipped = !0, (o || u) && (y = w[t + 1]), p && (_ = "end" === _ ? "start" : "start" === _ ? "end" : _), g.placement = y + (_ ? "-" + _ : ""), g.offsets.popper = U({}, g.offsets.popper, Z(g.instance.popper, g.offsets.reference, g.placement)), g = te(g.instance.modifiers, g, "flip"))
                        }), g
                    },
                    behavior: "flip",
                    padding: 5,
                    boundariesElement: "viewport",
                    flipVariations: !1,
                    flipVariationsByContent: !1
                },
                inner: {
                    order: 700,
                    enabled: !1,
                    fn: function(e) {
                        var t = e.placement,
                            n = t.split("-")[0],
                            i = e.offsets,
                            r = i.popper,
                            o = i.reference,
                            s = -1 !== ["left", "right"].indexOf(n),
                            a = -1 === ["top", "left"].indexOf(n);
                        return r[s ? "left" : "top"] = o[n] - (a ? r[s ? "width" : "height"] : 0), e.placement = J(t), e.offsets.popper = Q(r), e
                    }
                },
                hide: {
                    order: 800,
                    enabled: !0,
                    fn: function(e) {
                        if (!ce(e.instance.modifiers, "hide", "preventOverflow")) return e;
                        var t = e.offsets.reference,
                            n = ee(e.instance.modifiers, function(e) {
                                return "preventOverflow" === e.name
                            }).boundaries;
                        if (t.bottom < n.top || t.left > n.right || t.top > n.bottom || t.right < n.left) {
                            if (!0 === e.hide) return e;
                            e.hide = !0, e.attributes["x-out-of-boundaries"] = ""
                        } else {
                            if (!1 === e.hide) return e;
                            e.hide = !1, e.attributes["x-out-of-boundaries"] = !1
                        }
                        return e
                    }
                },
                computeStyle: {
                    order: 850,
                    enabled: !0,
                    fn: function(e, t) {
                        var n = t.x,
                            i = t.y,
                            r = e.offsets.popper,
                            o = ee(e.instance.modifiers, function(e) {
                                return "applyStyle" === e.name
                            }).gpuAcceleration;
                        void 0 !== o && console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");
                        var s, a, l, c, u, f, d, h, p, g, m, v, y, b, _, w, x = void 0 !== o ? o : t.gpuAcceleration,
                            E = I(e.instance.popper),
                            T = $(E),
                            C = {
                                position: r.position
                            },
                            S = (l = e, c = window.devicePixelRatio < 2 || !le, u = l.offsets, f = u.popper, d = u.reference, h = Math.round, p = Math.floor, g = function(e) {
                                return e
                            }, m = h(d.width), v = h(f.width), y = -1 !== ["left", "right"].indexOf(l.placement), b = -1 !== l.placement.indexOf("-"), w = c ? h : g, {
                                left: (_ = c ? y || b || m % 2 == v % 2 ? h : p : g)(m % 2 == 1 && v % 2 == 1 && !b && c ? f.left - 1 : f.left),
                                top: w(f.top),
                                bottom: w(f.bottom),
                                right: _(f.right)
                            }),
                            D = "bottom" === n ? "top" : "bottom",
                            k = "right" === i ? "left" : "right",
                            N = ie("transform");
                        if (a = "bottom" === D ? "HTML" === E.nodeName ? -E.clientHeight + S.bottom : -T.height + S.bottom : S.top, s = "right" === k ? "HTML" === E.nodeName ? -E.clientWidth + S.right : -T.width + S.right : S.left, x && N) C[N] = "translate3d(" + s + "px, " + a + "px, 0)", C[D] = 0, C[k] = 0, C.willChange = "transform";
                        else {
                            var A = "bottom" === D ? -1 : 1,
                                j = "right" === k ? -1 : 1;
                            C[D] = a * A, C[k] = s * j, C.willChange = D + ", " + k
                        }
                        var O = {
                            "x-placement": e.placement
                        };
                        return e.attributes = U({}, O, e.attributes), e.styles = U({}, C, e.styles), e.arrowStyles = U({}, e.offsets.arrow, e.arrowStyles), e
                    },
                    gpuAcceleration: !0,
                    x: "bottom",
                    y: "right"
                },
                applyStyle: {
                    order: 900,
                    enabled: !0,
                    fn: function(e) {
                        var t, n;
                        return ae(e.instance.popper, e.styles), t = e.instance.popper, n = e.attributes, Object.keys(n).forEach(function(e) {
                            !1 !== n[e] ? t.setAttribute(e, n[e]) : t.removeAttribute(e)
                        }), e.arrowElement && Object.keys(e.arrowStyles).length && ae(e.arrowElement, e.arrowStyles), e
                    },
                    onLoad: function(e, t, n, i, r) {
                        var o = K(r, t, e, n.positionFixed),
                            s = Y(n.placement, o, t, e, n.modifiers.flip.boundariesElement, n.modifiers.flip.padding);
                        return t.setAttribute("x-placement", s), ae(t, {
                            position: n.positionFixed ? "fixed" : "absolute"
                        }), n
                    },
                    gpuAcceleration: void 0
                }
            }
        },
        pe = function() {
            function o(e, t) {
                var n = this,
                    i = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};
                (function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                })(this, o), this.scheduleUpdate = function() {
                    return requestAnimationFrame(n.update)
                }, this.update = C(this.update.bind(this)), this.options = U({}, o.Defaults, i), this.state = {
                    isDestroyed: !1,
                    isCreated: !1,
                    scrollParents: []
                }, this.reference = e && e.jquery ? e[0] : e, this.popper = t && t.jquery ? t[0] : t, this.options.modifiers = {}, Object.keys(U({}, o.Defaults.modifiers, i.modifiers)).forEach(function(e) {
                    n.options.modifiers[e] = U({}, o.Defaults.modifiers[e] || {}, i.modifiers ? i.modifiers[e] : {})
                }), this.modifiers = Object.keys(this.options.modifiers).map(function(e) {
                    return U({
                        name: e
                    }, n.options.modifiers[e])
                }).sort(function(e, t) {
                    return e.order - t.order
                }), this.modifiers.forEach(function(e) {
                    e.enabled && S(e.onLoad) && e.onLoad(n.reference, n.popper, n.options, e, n.state)
                }), this.update();
                var r = this.options.eventsEnabled;
                r && this.enableEventListeners(), this.state.eventsEnabled = r
            }
            return B(o, [{
                key: "update",
                value: function() {
                    return function() {
                        if (!this.state.isDestroyed) {
                            var e = {
                                instance: this,
                                styles: {},
                                arrowStyles: {},
                                attributes: {},
                                flipped: !1,
                                offsets: {}
                            };
                            e.offsets.reference = K(this.state, this.popper, this.reference, this.options.positionFixed), e.placement = Y(this.options.placement, e.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding), e.originalPlacement = e.placement, e.positionFixed = this.options.positionFixed, e.offsets.popper = Z(this.popper, e.offsets.reference, e.placement), e.offsets.popper.position = this.options.positionFixed ? "fixed" : "absolute", e = te(this.modifiers, e), this.state.isCreated ? this.options.onUpdate(e) : (this.state.isCreated = !0, this.options.onCreate(e))
                        }
                    }.call(this)
                }
            }, {
                key: "destroy",
                value: function() {
                    return function() {
                        return this.state.isDestroyed = !0, ne(this.modifiers, "applyStyle") && (this.popper.removeAttribute("x-placement"), this.popper.style.position = "", this.popper.style.top = "", this.popper.style.left = "", this.popper.style.right = "", this.popper.style.bottom = "", this.popper.style.willChange = "", this.popper.style[ie("transform")] = ""), this.disableEventListeners(), this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper), this
                    }.call(this)
                }
            }, {
                key: "enableEventListeners",
                value: function() {
                    return oe.call(this)
                }
            }, {
                key: "disableEventListeners",
                value: function() {
                    return function() {
                        var e, t;
                        this.state.eventsEnabled && (cancelAnimationFrame(this.scheduleUpdate), this.state = (e = this.reference, t = this.state, re(e).removeEventListener("resize", t.updateBound), t.scrollParents.forEach(function(e) {
                            e.removeEventListener("scroll", t.updateBound)
                        }), t.updateBound = null, t.scrollParents = [], t.scrollElement = null, t.eventsEnabled = !1, t))
                    }.call(this)
                }
            }]), o
        }();
    pe.Utils = ("undefined" != typeof window ? window : global).PopperUtils, pe.placements = ue, pe.Defaults = he;
    var ge = "dropdown",
        me = p.fn[ge],
        ve = new RegExp("38|40|27"),
        ye = {
            offset: 0,
            flip: !0,
            boundary: "scrollParent",
            reference: "toggle",
            display: "dynamic",
            popperConfig: null
        },
        be = {
            offset: "(number|string|function)",
            flip: "boolean",
            boundary: "(string|element)",
            reference: "(string|element)",
            display: "string",
            popperConfig: "(null|object)"
        },
        _e = function() {
            function c(e, t) {
                this._element = e, this._popper = null, this._config = this._getConfig(t), this._menu = this._getMenuElement(), this._inNavbar = this._detectNavbar(), this._addEventListeners()
            }
            var e = c.prototype;
            return e.toggle = function() {
                if (!this._element.disabled && !p(this._element).hasClass("disabled")) {
                    var e = p(this._menu).hasClass("show");
                    c._clearMenus(), e || this.show(!0)
                }
            }, e.show = function(e) {
                if (void 0 === e && (e = !1), !(this._element.disabled || p(this._element).hasClass("disabled") || p(this._menu).hasClass("show"))) {
                    var t = {
                            relatedTarget: this._element
                        },
                        n = p.Event("show.bs.dropdown", t),
                        i = c._getParentFromElement(this._element);
                    if (p(i).trigger(n), !n.isDefaultPrevented()) {
                        if (!this._inNavbar && e) {
                            if (void 0 === pe) throw new TypeError("Bootstrap's dropdowns require Popper.js (https://popper.js.org/)");
                            var r = this._element;
                            "parent" === this._config.reference ? r = i : g.isElement(this._config.reference) && (r = this._config.reference, void 0 !== this._config.reference.jquery && (r = this._config.reference[0])), "scrollParent" !== this._config.boundary && p(i).addClass("position-static"), this._popper = new pe(r, this._menu, this._getPopperConfig())
                        }
                        "ontouchstart" in document.documentElement && 0 === p(i).closest(".navbar-nav").length && p(document.body).children().on("mouseover", null, p.noop), this._element.focus(), this._element.setAttribute("aria-expanded", !0), p(this._menu).toggleClass("show"), p(i).toggleClass("show").trigger(p.Event("shown.bs.dropdown", t))
                    }
                }
            }, e.hide = function() {
                if (!this._element.disabled && !p(this._element).hasClass("disabled") && p(this._menu).hasClass("show")) {
                    var e = {
                            relatedTarget: this._element
                        },
                        t = p.Event("hide.bs.dropdown", e),
                        n = c._getParentFromElement(this._element);
                    p(n).trigger(t), t.isDefaultPrevented() || (this._popper && this._popper.destroy(), p(this._menu).toggleClass("show"), p(n).toggleClass("show").trigger(p.Event("hidden.bs.dropdown", e)))
                }
            }, e.dispose = function() {
                p.removeData(this._element, "bs.dropdown"), p(this._element).off(".bs.dropdown"), this._element = null, (this._menu = null) !== this._popper && (this._popper.destroy(), this._popper = null)
            }, e.update = function() {
                this._inNavbar = this._detectNavbar(), null !== this._popper && this._popper.scheduleUpdate()
            }, e._addEventListeners = function() {
                var t = this;
                p(this._element).on("click.bs.dropdown", function(e) {
                    e.preventDefault(), e.stopPropagation(), t.toggle()
                })
            }, e._getConfig = function(e) {
                return e = l(l(l({}, this.constructor.Default), p(this._element).data()), e), g.typeCheckConfig(ge, e, this.constructor.DefaultType), e
            }, e._getMenuElement = function() {
                if (!this._menu) {
                    var e = c._getParentFromElement(this._element);
                    e && (this._menu = e.querySelector(".dropdown-menu"))
                }
                return this._menu
            }, e._getPlacement = function() {
                var e = p(this._element.parentNode),
                    t = "bottom-start";
                return e.hasClass("dropup") ? t = p(this._menu).hasClass("dropdown-menu-right") ? "top-end" : "top-start" : e.hasClass("dropright") ? t = "right-start" : e.hasClass("dropleft") ? t = "left-start" : p(this._menu).hasClass("dropdown-menu-right") && (t = "bottom-end"), t
            }, e._detectNavbar = function() {
                return 0 < p(this._element).closest(".navbar").length
            }, e._getOffset = function() {
                var t = this,
                    e = {};
                return "function" == typeof this._config.offset ? e.fn = function(e) {
                    return e.offsets = l(l({}, e.offsets), t._config.offset(e.offsets, t._element) || {}), e
                } : e.offset = this._config.offset, e
            }, e._getPopperConfig = function() {
                var e = {
                    placement: this._getPlacement(),
                    modifiers: {
                        offset: this._getOffset(),
                        flip: {
                            enabled: this._config.flip
                        },
                        preventOverflow: {
                            boundariesElement: this._config.boundary
                        }
                    }
                };
                return "static" === this._config.display && (e.modifiers.applyStyle = {
                    enabled: !1
                }), l(l({}, e), this._config.popperConfig)
            }, c._jQueryInterface = function(t) {
                return this.each(function() {
                    var e = p(this).data("bs.dropdown");
                    if (e || (e = new c(this, "object" == typeof t ? t : null), p(this).data("bs.dropdown", e)), "string" == typeof t) {
                        if (void 0 === e[t]) throw new TypeError('No method named "' + t + '"');
                        e[t]()
                    }
                })
            }, c._clearMenus = function(e) {
                if (!e || 3 !== e.which && ("keyup" !== e.type || 9 === e.which))
                    for (var t = [].slice.call(document.querySelectorAll('[data-toggle="dropdown"]')), n = 0, i = t.length; n < i; n++) {
                        var r = c._getParentFromElement(t[n]),
                            o = p(t[n]).data("bs.dropdown"),
                            s = {
                                relatedTarget: t[n]
                            };
                        if (e && "click" === e.type && (s.clickEvent = e), o) {
                            var a = o._menu;
                            if (p(r).hasClass("show") && !(e && ("click" === e.type && /input|textarea/i.test(e.target.tagName) || "keyup" === e.type && 9 === e.which) && p.contains(r, e.target))) {
                                var l = p.Event("hide.bs.dropdown", s);
                                p(r).trigger(l), l.isDefaultPrevented() || ("ontouchstart" in document.documentElement && p(document.body).children().off("mouseover", null, p.noop), t[n].setAttribute("aria-expanded", "false"), o._popper && o._popper.destroy(), p(a).removeClass("show"), p(r).removeClass("show").trigger(p.Event("hidden.bs.dropdown", s)))
                            }
                        }
                    }
            }, c._getParentFromElement = function(e) {
                var t, n = g.getSelectorFromElement(e);
                return n && (t = document.querySelector(n)), t || e.parentNode
            }, c._dataApiKeydownHandler = function(e) {
                if (!(/input|textarea/i.test(e.target.tagName) ? 32 === e.which || 27 !== e.which && (40 !== e.which && 38 !== e.which || p(e.target).closest(".dropdown-menu").length) : !ve.test(e.which)) && !this.disabled && !p(this).hasClass("disabled")) {
                    var t = c._getParentFromElement(this),
                        n = p(t).hasClass("show");
                    if (n || 27 !== e.which) {
                        if (e.preventDefault(), e.stopPropagation(), !n || n && (27 === e.which || 32 === e.which)) return 27 === e.which && p(t.querySelector('[data-toggle="dropdown"]')).trigger("focus"), void p(this).trigger("click");
                        var i = [].slice.call(t.querySelectorAll(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)")).filter(function(e) {
                            return p(e).is(":visible")
                        });
                        if (0 !== i.length) {
                            var r = i.indexOf(e.target);
                            38 === e.which && 0 < r && r--, 40 === e.which && r < i.length - 1 && r++, r < 0 && (r = 0), i[r].focus()
                        }
                    }
                }
            }, s(c, null, [{
                key: "VERSION",
                get: function() {
                    return "4.5.0"
                }
            }, {
                key: "Default",
                get: function() {
                    return ye
                }
            }, {
                key: "DefaultType",
                get: function() {
                    return be
                }
            }]), c
        }();
    p(document).on("keydown.bs.dropdown.data-api", '[data-toggle="dropdown"]', _e._dataApiKeydownHandler).on("keydown.bs.dropdown.data-api", ".dropdown-menu", _e._dataApiKeydownHandler).on("click.bs.dropdown.data-api keyup.bs.dropdown.data-api", _e._clearMenus).on("click.bs.dropdown.data-api", '[data-toggle="dropdown"]', function(e) {
        e.preventDefault(), e.stopPropagation(), _e._jQueryInterface.call(p(this), "toggle")
    }).on("click.bs.dropdown.data-api", ".dropdown form", function(e) {
        e.stopPropagation()
    }), p.fn[ge] = _e._jQueryInterface, p.fn[ge].Constructor = _e, p.fn[ge].noConflict = function() {
        return p.fn[ge] = me, _e._jQueryInterface
    };
    var we = p.fn.modal,
        xe = {
            backdrop: !0,
            keyboard: !0,
            focus: !0,
            show: !0
        },
        Ee = {
            backdrop: "(boolean|string)",
            keyboard: "boolean",
            focus: "boolean",
            show: "boolean"
        },
        Te = function() {
            function r(e, t) {
                this._config = this._getConfig(t), this._element = e, this._dialog = e.querySelector(".modal-dialog"), this._backdrop = null, this._isShown = !1, this._isBodyOverflowing = !1, this._ignoreBackdropClick = !1, this._isTransitioning = !1, this._scrollbarWidth = 0
            }
            var e = r.prototype;
            return e.toggle = function(e) {
                return this._isShown ? this.hide() : this.show(e)
            }, e.show = function(e) {
                var t = this;
                if (!this._isShown && !this._isTransitioning) {
                    p(this._element).hasClass("fade") && (this._isTransitioning = !0);
                    var n = p.Event("show.bs.modal", {
                        relatedTarget: e
                    });
                    p(this._element).trigger(n), this._isShown || n.isDefaultPrevented() || (this._isShown = !0, this._checkScrollbar(), this._setScrollbar(), this._adjustDialog(), this._setEscapeEvent(), this._setResizeEvent(), p(this._element).on("click.dismiss.bs.modal", '[data-dismiss="modal"]', function(e) {
                        return t.hide(e)
                    }), p(this._dialog).on("mousedown.dismiss.bs.modal", function() {
                        p(t._element).one("mouseup.dismiss.bs.modal", function(e) {
                            p(e.target).is(t._element) && (t._ignoreBackdropClick = !0)
                        })
                    }), this._showBackdrop(function() {
                        return t._showElement(e)
                    }))
                }
            }, e.hide = function(e) {
                var t = this;
                if (e && e.preventDefault(), this._isShown && !this._isTransitioning) {
                    var n = p.Event("hide.bs.modal");
                    if (p(this._element).trigger(n), this._isShown && !n.isDefaultPrevented()) {
                        this._isShown = !1;
                        var i = p(this._element).hasClass("fade");
                        if (i && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), p(document).off("focusin.bs.modal"), p(this._element).removeClass("show"), p(this._element).off("click.dismiss.bs.modal"), p(this._dialog).off("mousedown.dismiss.bs.modal"), i) {
                            var r = g.getTransitionDurationFromElement(this._element);
                            p(this._element).one(g.TRANSITION_END, function(e) {
                                return t._hideModal(e)
                            }).emulateTransitionEnd(r)
                        } else this._hideModal()
                    }
                }
            }, e.dispose = function() {
                [window, this._element, this._dialog].forEach(function(e) {
                    return p(e).off(".bs.modal")
                }), p(document).off("focusin.bs.modal"), p.removeData(this._element, "bs.modal"), this._config = null, this._element = null, this._dialog = null, this._backdrop = null, this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null, this._isTransitioning = null, this._scrollbarWidth = null
            }, e.handleUpdate = function() {
                this._adjustDialog()
            }, e._getConfig = function(e) {
                return e = l(l({}, xe), e), g.typeCheckConfig("modal", e, Ee), e
            }, e._triggerBackdropTransition = function() {
                var e = this;
                if ("static" === this._config.backdrop) {
                    var t = p.Event("hidePrevented.bs.modal");
                    if (p(this._element).trigger(t), t.defaultPrevented) return;
                    this._element.classList.add("modal-static");
                    var n = g.getTransitionDurationFromElement(this._element);
                    p(this._element).one(g.TRANSITION_END, function() {
                        e._element.classList.remove("modal-static")
                    }).emulateTransitionEnd(n), this._element.focus()
                } else this.hide()
            }, e._showElement = function(e) {
                var t = this,
                    n = p(this._element).hasClass("fade"),
                    i = this._dialog ? this._dialog.querySelector(".modal-body") : null;
                this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), p(this._dialog).hasClass("modal-dialog-scrollable") && i ? i.scrollTop = 0 : this._element.scrollTop = 0, n && g.reflow(this._element), p(this._element).addClass("show"), this._config.focus && this._enforceFocus();
                var r = p.Event("shown.bs.modal", {
                        relatedTarget: e
                    }),
                    o = function() {
                        t._config.focus && t._element.focus(), t._isTransitioning = !1, p(t._element).trigger(r)
                    };
                if (n) {
                    var s = g.getTransitionDurationFromElement(this._dialog);
                    p(this._dialog).one(g.TRANSITION_END, o).emulateTransitionEnd(s)
                } else o()
            }, e._enforceFocus = function() {
                var t = this;
                p(document).off("focusin.bs.modal").on("focusin.bs.modal", function(e) {
                    document !== e.target && t._element !== e.target && 0 === p(t._element).has(e.target).length && t._element.focus()
                })
            }, e._setEscapeEvent = function() {
                var t = this;
                this._isShown ? p(this._element).on("keydown.dismiss.bs.modal", function(e) {
                    t._config.keyboard && 27 === e.which ? (e.preventDefault(), t.hide()) : t._config.keyboard || 27 !== e.which || t._triggerBackdropTransition()
                }) : this._isShown || p(this._element).off("keydown.dismiss.bs.modal")
            }, e._setResizeEvent = function() {
                var t = this;
                this._isShown ? p(window).on("resize.bs.modal", function(e) {
                    return t.handleUpdate(e)
                }) : p(window).off("resize.bs.modal")
            }, e._hideModal = function() {
                var e = this;
                this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._isTransitioning = !1, this._showBackdrop(function() {
                    p(document.body).removeClass("modal-open"), e._resetAdjustments(), e._resetScrollbar(), p(e._element).trigger("hidden.bs.modal")
                })
            }, e._removeBackdrop = function() {
                this._backdrop && (p(this._backdrop).remove(), this._backdrop = null)
            }, e._showBackdrop = function(e) {
                var t = this,
                    n = p(this._element).hasClass("fade") ? "fade" : "";
                if (this._isShown && this._config.backdrop) {
                    if (this._backdrop = document.createElement("div"), this._backdrop.className = "modal-backdrop", n && this._backdrop.classList.add(n), p(this._backdrop).appendTo(document.body), p(this._element).on("click.dismiss.bs.modal", function(e) {
                            t._ignoreBackdropClick ? t._ignoreBackdropClick = !1 : e.target === e.currentTarget && t._triggerBackdropTransition()
                        }), n && g.reflow(this._backdrop), p(this._backdrop).addClass("show"), !e) return;
                    if (!n) return void e();
                    var i = g.getTransitionDurationFromElement(this._backdrop);
                    p(this._backdrop).one(g.TRANSITION_END, e).emulateTransitionEnd(i)
                } else if (!this._isShown && this._backdrop) {
                    p(this._backdrop).removeClass("show");
                    var r = function() {
                        t._removeBackdrop(), e && e()
                    };
                    if (p(this._element).hasClass("fade")) {
                        var o = g.getTransitionDurationFromElement(this._backdrop);
                        p(this._backdrop).one(g.TRANSITION_END, r).emulateTransitionEnd(o)
                    } else r()
                } else e && e()
            }, e._adjustDialog = function() {
                var e = this._element.scrollHeight > document.documentElement.clientHeight;
                !this._isBodyOverflowing && e && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), this._isBodyOverflowing && !e && (this._element.style.paddingRight = this._scrollbarWidth + "px")
            }, e._resetAdjustments = function() {
                this._element.style.paddingLeft = "", this._element.style.paddingRight = ""
            }, e._checkScrollbar = function() {
                var e = document.body.getBoundingClientRect();
                this._isBodyOverflowing = Math.round(e.left + e.right) < window.innerWidth, this._scrollbarWidth = this._getScrollbarWidth()
            }, e._setScrollbar = function() {
                var r = this;
                if (this._isBodyOverflowing) {
                    var e = [].slice.call(document.querySelectorAll(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top")),
                        t = [].slice.call(document.querySelectorAll(".sticky-top"));
                    p(e).each(function(e, t) {
                        var n = t.style.paddingRight,
                            i = p(t).css("padding-right");
                        p(t).data("padding-right", n).css("padding-right", parseFloat(i) + r._scrollbarWidth + "px")
                    }), p(t).each(function(e, t) {
                        var n = t.style.marginRight,
                            i = p(t).css("margin-right");
                        p(t).data("margin-right", n).css("margin-right", parseFloat(i) - r._scrollbarWidth + "px")
                    });
                    var n = document.body.style.paddingRight,
                        i = p(document.body).css("padding-right");
                    p(document.body).data("padding-right", n).css("padding-right", parseFloat(i) + this._scrollbarWidth + "px")
                }
                p(document.body).addClass("modal-open")
            }, e._resetScrollbar = function() {
                var e = [].slice.call(document.querySelectorAll(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top"));
                p(e).each(function(e, t) {
                    var n = p(t).data("padding-right");
                    p(t).removeData("padding-right"), t.style.paddingRight = n || ""
                });
                var t = [].slice.call(document.querySelectorAll(".sticky-top"));
                p(t).each(function(e, t) {
                    var n = p(t).data("margin-right");
                    void 0 !== n && p(t).css("margin-right", n).removeData("margin-right")
                });
                var n = p(document.body).data("padding-right");
                p(document.body).removeData("padding-right"), document.body.style.paddingRight = n || ""
            }, e._getScrollbarWidth = function() {
                var e = document.createElement("div");
                e.className = "modal-scrollbar-measure", document.body.appendChild(e);
                var t = e.getBoundingClientRect().width - e.clientWidth;
                return document.body.removeChild(e), t
            }, r._jQueryInterface = function(n, i) {
                return this.each(function() {
                    var e = p(this).data("bs.modal"),
                        t = l(l(l({}, xe), p(this).data()), "object" == typeof n && n ? n : {});
                    if (e || (e = new r(this, t), p(this).data("bs.modal", e)), "string" == typeof n) {
                        if (void 0 === e[n]) throw new TypeError('No method named "' + n + '"');
                        e[n](i)
                    } else t.show && e.show(i)
                })
            }, s(r, null, [{
                key: "VERSION",
                get: function() {
                    return "4.5.0"
                }
            }, {
                key: "Default",
                get: function() {
                    return xe
                }
            }]), r
        }();
    p(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(e) {
        var t, n = this,
            i = g.getSelectorFromElement(this);
        i && (t = document.querySelector(i));
        var r = p(t).data("bs.modal") ? "toggle" : l(l({}, p(t).data()), p(this).data());
        "A" !== this.tagName && "AREA" !== this.tagName || e.preventDefault();
        var o = p(t).one("show.bs.modal", function(e) {
            e.isDefaultPrevented() || o.one("hidden.bs.modal", function() {
                p(n).is(":visible") && n.focus()
            })
        });
        Te._jQueryInterface.call(p(t), r, this)
    }), p.fn.modal = Te._jQueryInterface, p.fn.modal.Constructor = Te, p.fn.modal.noConflict = function() {
        return p.fn.modal = we, Te._jQueryInterface
    };
    var Ce = ["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"],
        Se = /^(?:(?:https?|mailto|ftp|tel|file):|[^#&/:?]*(?:[#/?]|$))/gi,
        De = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i;

    function ke(e, s, t) {
        if (0 === e.length) return e;
        if (t && "function" == typeof t) return t(e);
        for (var n = (new window.DOMParser).parseFromString(e, "text/html"), a = Object.keys(s), l = [].slice.call(n.body.querySelectorAll("*")), i = function(e, t) {
                var n = l[e],
                    i = n.nodeName.toLowerCase();
                if (-1 === a.indexOf(n.nodeName.toLowerCase())) return n.parentNode.removeChild(n), "continue";
                var r = [].slice.call(n.attributes),
                    o = [].concat(s["*"] || [], s[i] || []);
                r.forEach(function(e) {
                    (function(e, t) {
                        var n = e.nodeName.toLowerCase();
                        if (-1 !== t.indexOf(n)) return -1 === Ce.indexOf(n) || Boolean(e.nodeValue.match(Se) || e.nodeValue.match(De));
                        for (var i = t.filter(function(e) {
                                return e instanceof RegExp
                            }), r = 0, o = i.length; r < o; r++)
                            if (n.match(i[r])) return !0;
                        return !1
                    })(e, o) || n.removeAttribute(e.nodeName)
                })
            }, r = 0, o = l.length; r < o; r++) i(r);
        return n.body.innerHTML
    }
    var Ne = "tooltip",
        Ae = p.fn[Ne],
        je = new RegExp("(^|\\s)bs-tooltip\\S+", "g"),
        Oe = ["sanitize", "whiteList", "sanitizeFn"],
        Le = {
            animation: "boolean",
            template: "string",
            title: "(string|element|function)",
            trigger: "string",
            delay: "(number|object)",
            html: "boolean",
            selector: "(string|boolean)",
            placement: "(string|function)",
            offset: "(number|string|function)",
            container: "(string|element|boolean)",
            fallbackPlacement: "(string|array)",
            boundary: "(string|element)",
            sanitize: "boolean",
            sanitizeFn: "(null|function)",
            whiteList: "object",
            popperConfig: "(null|object)"
        },
        Ie = {
            AUTO: "auto",
            TOP: "top",
            RIGHT: "right",
            BOTTOM: "bottom",
            LEFT: "left"
        },
        qe = {
            animation: !0,
            template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
            trigger: "hover focus",
            title: "",
            delay: 0,
            html: !1,
            selector: !1,
            placement: "top",
            offset: 0,
            container: !1,
            fallbackPlacement: "flip",
            boundary: "scrollParent",
            sanitize: !0,
            sanitizeFn: null,
            whiteList: {
                "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
                a: ["target", "href", "title", "rel"],
                area: [],
                b: [],
                br: [],
                col: [],
                code: [],
                div: [],
                em: [],
                hr: [],
                h1: [],
                h2: [],
                h3: [],
                h4: [],
                h5: [],
                h6: [],
                i: [],
                img: ["src", "srcset", "alt", "title", "width", "height"],
                li: [],
                ol: [],
                p: [],
                pre: [],
                s: [],
                small: [],
                span: [],
                sub: [],
                sup: [],
                strong: [],
                u: [],
                ul: []
            },
            popperConfig: null
        },
        Pe = {
            HIDE: "hide.bs.tooltip",
            HIDDEN: "hidden.bs.tooltip",
            SHOW: "show.bs.tooltip",
            SHOWN: "shown.bs.tooltip",
            INSERTED: "inserted.bs.tooltip",
            CLICK: "click.bs.tooltip",
            FOCUSIN: "focusin.bs.tooltip",
            FOCUSOUT: "focusout.bs.tooltip",
            MOUSEENTER: "mouseenter.bs.tooltip",
            MOUSELEAVE: "mouseleave.bs.tooltip"
        },
        He = function() {
            function i(e, t) {
                if (void 0 === pe) throw new TypeError("Bootstrap's tooltips require Popper.js (https://popper.js.org/)");
                this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._popper = null, this.element = e, this.config = this._getConfig(t), this.tip = null, this._setListeners()
            }
            var e = i.prototype;
            return e.enable = function() {
                this._isEnabled = !0
            }, e.disable = function() {
                this._isEnabled = !1
            }, e.toggleEnabled = function() {
                this._isEnabled = !this._isEnabled
            }, e.toggle = function(e) {
                if (this._isEnabled)
                    if (e) {
                        var t = this.constructor.DATA_KEY,
                            n = p(e.currentTarget).data(t);
                        n || (n = new this.constructor(e.currentTarget, this._getDelegateConfig()), p(e.currentTarget).data(t, n)), n._activeTrigger.click = !n._activeTrigger.click, n._isWithActiveTrigger() ? n._enter(null, n) : n._leave(null, n)
                    } else {
                        if (p(this.getTipElement()).hasClass("show")) return void this._leave(null, this);
                        this._enter(null, this)
                    }
            }, e.dispose = function() {
                clearTimeout(this._timeout), p.removeData(this.element, this.constructor.DATA_KEY), p(this.element).off(this.constructor.EVENT_KEY), p(this.element).closest(".modal").off("hide.bs.modal", this._hideModalHandler), this.tip && p(this.tip).remove(), this._isEnabled = null, this._timeout = null, this._hoverState = null, this._activeTrigger = null, this._popper && this._popper.destroy(), this._popper = null, this.element = null, this.config = null, this.tip = null
            }, e.show = function() {
                var t = this;
                if ("none" === p(this.element).css("display")) throw new Error("Please use show on visible elements");
                var e = p.Event(this.constructor.Event.SHOW);
                if (this.isWithContent() && this._isEnabled) {
                    p(this.element).trigger(e);
                    var n = g.findShadowRoot(this.element),
                        i = p.contains(null !== n ? n : this.element.ownerDocument.documentElement, this.element);
                    if (e.isDefaultPrevented() || !i) return;
                    var r = this.getTipElement(),
                        o = g.getUID(this.constructor.NAME);
                    r.setAttribute("id", o), this.element.setAttribute("aria-describedby", o), this.setContent(), this.config.animation && p(r).addClass("fade");
                    var s = "function" == typeof this.config.placement ? this.config.placement.call(this, r, this.element) : this.config.placement,
                        a = this._getAttachment(s);
                    this.addAttachmentClass(a);
                    var l = this._getContainer();
                    p(r).data(this.constructor.DATA_KEY, this), p.contains(this.element.ownerDocument.documentElement, this.tip) || p(r).appendTo(l), p(this.element).trigger(this.constructor.Event.INSERTED), this._popper = new pe(this.element, r, this._getPopperConfig(a)), p(r).addClass("show"), "ontouchstart" in document.documentElement && p(document.body).children().on("mouseover", null, p.noop);
                    var c = function() {
                        t.config.animation && t._fixTransition();
                        var e = t._hoverState;
                        t._hoverState = null, p(t.element).trigger(t.constructor.Event.SHOWN), "out" === e && t._leave(null, t)
                    };
                    if (p(this.tip).hasClass("fade")) {
                        var u = g.getTransitionDurationFromElement(this.tip);
                        p(this.tip).one(g.TRANSITION_END, c).emulateTransitionEnd(u)
                    } else c()
                }
            }, e.hide = function(e) {
                var t = this,
                    n = this.getTipElement(),
                    i = p.Event(this.constructor.Event.HIDE),
                    r = function() {
                        "show" !== t._hoverState && n.parentNode && n.parentNode.removeChild(n), t._cleanTipClass(), t.element.removeAttribute("aria-describedby"), p(t.element).trigger(t.constructor.Event.HIDDEN), null !== t._popper && t._popper.destroy(), e && e()
                    };
                if (p(this.element).trigger(i), !i.isDefaultPrevented()) {
                    if (p(n).removeClass("show"), "ontouchstart" in document.documentElement && p(document.body).children().off("mouseover", null, p.noop), this._activeTrigger.click = !1, this._activeTrigger.focus = !1, this._activeTrigger.hover = !1, p(this.tip).hasClass("fade")) {
                        var o = g.getTransitionDurationFromElement(n);
                        p(n).one(g.TRANSITION_END, r).emulateTransitionEnd(o)
                    } else r();
                    this._hoverState = ""
                }
            }, e.update = function() {
                null !== this._popper && this._popper.scheduleUpdate()
            }, e.isWithContent = function() {
                return Boolean(this.getTitle())
            }, e.addAttachmentClass = function(e) {
                p(this.getTipElement()).addClass("bs-tooltip-" + e)
            }, e.getTipElement = function() {
                return this.tip = this.tip || p(this.config.template)[0], this.tip
            }, e.setContent = function() {
                var e = this.getTipElement();
                this.setElementContent(p(e.querySelectorAll(".tooltip-inner")), this.getTitle()), p(e).removeClass("fade show")
            }, e.setElementContent = function(e, t) {
                "object" != typeof t || !t.nodeType && !t.jquery ? this.config.html ? (this.config.sanitize && (t = ke(t, this.config.whiteList, this.config.sanitizeFn)), e.html(t)) : e.text(t) : this.config.html ? p(t).parent().is(e) || e.empty().append(t) : e.text(p(t).text())
            }, e.getTitle = function() {
                var e = this.element.getAttribute("data-original-title");
                return e || (e = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title), e
            }, e._getPopperConfig = function(e) {
                var t = this;
                return l(l({}, {
                    placement: e,
                    modifiers: {
                        offset: this._getOffset(),
                        flip: {
                            behavior: this.config.fallbackPlacement
                        },
                        arrow: {
                            element: ".arrow"
                        },
                        preventOverflow: {
                            boundariesElement: this.config.boundary
                        }
                    },
                    onCreate: function(e) {
                        e.originalPlacement !== e.placement && t._handlePopperPlacementChange(e)
                    },
                    onUpdate: function(e) {
                        return t._handlePopperPlacementChange(e)
                    }
                }), this.config.popperConfig)
            }, e._getOffset = function() {
                var t = this,
                    e = {};
                return "function" == typeof this.config.offset ? e.fn = function(e) {
                    return e.offsets = l(l({}, e.offsets), t.config.offset(e.offsets, t.element) || {}), e
                } : e.offset = this.config.offset, e
            }, e._getContainer = function() {
                return !1 === this.config.container ? document.body : g.isElement(this.config.container) ? p(this.config.container) : p(document).find(this.config.container)
            }, e._getAttachment = function(e) {
                return Ie[e.toUpperCase()]
            }, e._setListeners = function() {
                var i = this;
                this.config.trigger.split(" ").forEach(function(e) {
                    if ("click" === e) p(i.element).on(i.constructor.Event.CLICK, i.config.selector, function(e) {
                        return i.toggle(e)
                    });
                    else if ("manual" !== e) {
                        var t = "hover" === e ? i.constructor.Event.MOUSEENTER : i.constructor.Event.FOCUSIN,
                            n = "hover" === e ? i.constructor.Event.MOUSELEAVE : i.constructor.Event.FOCUSOUT;
                        p(i.element).on(t, i.config.selector, function(e) {
                            return i._enter(e)
                        }).on(n, i.config.selector, function(e) {
                            return i._leave(e)
                        })
                    }
                }), this._hideModalHandler = function() {
                    i.element && i.hide()
                }, p(this.element).closest(".modal").on("hide.bs.modal", this._hideModalHandler), this.config.selector ? this.config = l(l({}, this.config), {}, {
                    trigger: "manual",
                    selector: ""
                }) : this._fixTitle()
            }, e._fixTitle = function() {
                var e = typeof this.element.getAttribute("data-original-title");
                (this.element.getAttribute("title") || "string" !== e) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", ""))
            }, e._enter = function(e, t) {
                var n = this.constructor.DATA_KEY;
                (t = t || p(e.currentTarget).data(n)) || (t = new this.constructor(e.currentTarget, this._getDelegateConfig()), p(e.currentTarget).data(n, t)), e && (t._activeTrigger["focusin" === e.type ? "focus" : "hover"] = !0), p(t.getTipElement()).hasClass("show") || "show" === t._hoverState ? t._hoverState = "show" : (clearTimeout(t._timeout), t._hoverState = "show", t.config.delay && t.config.delay.show ? t._timeout = setTimeout(function() {
                    "show" === t._hoverState && t.show()
                }, t.config.delay.show) : t.show())
            }, e._leave = function(e, t) {
                var n = this.constructor.DATA_KEY;
                (t = t || p(e.currentTarget).data(n)) || (t = new this.constructor(e.currentTarget, this._getDelegateConfig()), p(e.currentTarget).data(n, t)), e && (t._activeTrigger["focusout" === e.type ? "focus" : "hover"] = !1), t._isWithActiveTrigger() || (clearTimeout(t._timeout), t._hoverState = "out", t.config.delay && t.config.delay.hide ? t._timeout = setTimeout(function() {
                    "out" === t._hoverState && t.hide()
                }, t.config.delay.hide) : t.hide())
            }, e._isWithActiveTrigger = function() {
                for (var e in this._activeTrigger)
                    if (this._activeTrigger[e]) return !0;
                return !1
            }, e._getConfig = function(e) {
                var t = p(this.element).data();
                return Object.keys(t).forEach(function(e) {
                    -1 !== Oe.indexOf(e) && delete t[e]
                }), "number" == typeof(e = l(l(l({}, this.constructor.Default), t), "object" == typeof e && e ? e : {})).delay && (e.delay = {
                    show: e.delay,
                    hide: e.delay
                }), "number" == typeof e.title && (e.title = e.title.toString()), "number" == typeof e.content && (e.content = e.content.toString()), g.typeCheckConfig(Ne, e, this.constructor.DefaultType), e.sanitize && (e.template = ke(e.template, e.whiteList, e.sanitizeFn)), e
            }, e._getDelegateConfig = function() {
                var e = {};
                if (this.config)
                    for (var t in this.config) this.constructor.Default[t] !== this.config[t] && (e[t] = this.config[t]);
                return e
            }, e._cleanTipClass = function() {
                var e = p(this.getTipElement()),
                    t = e.attr("class").match(je);
                null !== t && t.length && e.removeClass(t.join(""))
            }, e._handlePopperPlacementChange = function(e) {
                this.tip = e.instance.popper, this._cleanTipClass(), this.addAttachmentClass(this._getAttachment(e.placement))
            }, e._fixTransition = function() {
                var e = this.getTipElement(),
                    t = this.config.animation;
                null === e.getAttribute("x-placement") && (p(e).removeClass("fade"), this.config.animation = !1, this.hide(), this.show(), this.config.animation = t)
            }, i._jQueryInterface = function(n) {
                return this.each(function() {
                    var e = p(this).data("bs.tooltip"),
                        t = "object" == typeof n && n;
                    if ((e || !/dispose|hide/.test(n)) && (e || (e = new i(this, t), p(this).data("bs.tooltip", e)), "string" == typeof n)) {
                        if (void 0 === e[n]) throw new TypeError('No method named "' + n + '"');
                        e[n]()
                    }
                })
            }, s(i, null, [{
                key: "VERSION",
                get: function() {
                    return "4.5.0"
                }
            }, {
                key: "Default",
                get: function() {
                    return qe
                }
            }, {
                key: "NAME",
                get: function() {
                    return Ne
                }
            }, {
                key: "DATA_KEY",
                get: function() {
                    return "bs.tooltip"
                }
            }, {
                key: "Event",
                get: function() {
                    return Pe
                }
            }, {
                key: "EVENT_KEY",
                get: function() {
                    return ".bs.tooltip"
                }
            }, {
                key: "DefaultType",
                get: function() {
                    return Le
                }
            }]), i
        }();
    p.fn[Ne] = He._jQueryInterface, p.fn[Ne].Constructor = He, p.fn[Ne].noConflict = function() {
        return p.fn[Ne] = Ae, He._jQueryInterface
    };
    var Re = "popover",
        Fe = p.fn[Re],
        Me = new RegExp("(^|\\s)bs-popover\\S+", "g"),
        Be = l(l({}, He.Default), {}, {
            placement: "right",
            trigger: "click",
            content: "",
            template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
        }),
        We = l(l({}, He.DefaultType), {}, {
            content: "(string|element|function)"
        }),
        Ue = {
            HIDE: "hide.bs.popover",
            HIDDEN: "hidden.bs.popover",
            SHOW: "show.bs.popover",
            SHOWN: "shown.bs.popover",
            INSERTED: "inserted.bs.popover",
            CLICK: "click.bs.popover",
            FOCUSIN: "focusin.bs.popover",
            FOCUSOUT: "focusout.bs.popover",
            MOUSEENTER: "mouseenter.bs.popover",
            MOUSELEAVE: "mouseleave.bs.popover"
        },
        Qe = function(e) {
            var t, n;

            function i() {
                return e.apply(this, arguments) || this
            }
            n = e, (t = i).prototype = Object.create(n.prototype), (t.prototype.constructor = t).__proto__ = n;
            var r = i.prototype;
            return r.isWithContent = function() {
                return this.getTitle() || this._getContent()
            }, r.addAttachmentClass = function(e) {
                p(this.getTipElement()).addClass("bs-popover-" + e)
            }, r.getTipElement = function() {
                return this.tip = this.tip || p(this.config.template)[0], this.tip
            }, r.setContent = function() {
                var e = p(this.getTipElement());
                this.setElementContent(e.find(".popover-header"), this.getTitle());
                var t = this._getContent();
                "function" == typeof t && (t = t.call(this.element)), this.setElementContent(e.find(".popover-body"), t), e.removeClass("fade show")
            }, r._getContent = function() {
                return this.element.getAttribute("data-content") || this.config.content
            }, r._cleanTipClass = function() {
                var e = p(this.getTipElement()),
                    t = e.attr("class").match(Me);
                null !== t && 0 < t.length && e.removeClass(t.join(""))
            }, i._jQueryInterface = function(n) {
                return this.each(function() {
                    var e = p(this).data("bs.popover"),
                        t = "object" == typeof n ? n : null;
                    if ((e || !/dispose|hide/.test(n)) && (e || (e = new i(this, t), p(this).data("bs.popover", e)), "string" == typeof n)) {
                        if (void 0 === e[n]) throw new TypeError('No method named "' + n + '"');
                        e[n]()
                    }
                })
            }, s(i, null, [{
                key: "VERSION",
                get: function() {
                    return "4.5.0"
                }
            }, {
                key: "Default",
                get: function() {
                    return Be
                }
            }, {
                key: "NAME",
                get: function() {
                    return Re
                }
            }, {
                key: "DATA_KEY",
                get: function() {
                    return "bs.popover"
                }
            }, {
                key: "Event",
                get: function() {
                    return Ue
                }
            }, {
                key: "EVENT_KEY",
                get: function() {
                    return ".bs.popover"
                }
            }, {
                key: "DefaultType",
                get: function() {
                    return We
                }
            }]), i
        }(He);
    p.fn[Re] = Qe._jQueryInterface, p.fn[Re].Constructor = Qe, p.fn[Re].noConflict = function() {
        return p.fn[Re] = Fe, Qe._jQueryInterface
    };
    var $e = "scrollspy",
        ze = p.fn[$e],
        Ve = {
            offset: 10,
            method: "auto",
            target: ""
        },
        Xe = {
            offset: "number",
            method: "string",
            target: "(string|element)"
        },
        Ye = function() {
            function n(e, t) {
                var n = this;
                this._element = e, this._scrollElement = "BODY" === e.tagName ? window : e, this._config = this._getConfig(t), this._selector = this._config.target + " .nav-link," + this._config.target + " .list-group-item," + this._config.target + " .dropdown-item", this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, p(this._scrollElement).on("scroll.bs.scrollspy", function(e) {
                    return n._process(e)
                }), this.refresh(), this._process()
            }
            var e = n.prototype;
            return e.refresh = function() {
                var t = this,
                    e = this._scrollElement === this._scrollElement.window ? "offset" : "position",
                    r = "auto" === this._config.method ? e : this._config.method,
                    o = "position" === r ? this._getScrollTop() : 0;
                this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), [].slice.call(document.querySelectorAll(this._selector)).map(function(e) {
                    var t, n = g.getSelectorFromElement(e);
                    if (n && (t = document.querySelector(n)), t) {
                        var i = t.getBoundingClientRect();
                        if (i.width || i.height) return [p(t)[r]().top + o, n]
                    }
                    return null
                }).filter(function(e) {
                    return e
                }).sort(function(e, t) {
                    return e[0] - t[0]
                }).forEach(function(e) {
                    t._offsets.push(e[0]), t._targets.push(e[1])
                })
            }, e.dispose = function() {
                p.removeData(this._element, "bs.scrollspy"), p(this._scrollElement).off(".bs.scrollspy"), this._element = null, this._scrollElement = null, this._config = null, this._selector = null, this._offsets = null, this._targets = null, this._activeTarget = null, this._scrollHeight = null
            }, e._getConfig = function(e) {
                if ("string" != typeof(e = l(l({}, Ve), "object" == typeof e && e ? e : {})).target && g.isElement(e.target)) {
                    var t = p(e.target).attr("id");
                    t || (t = g.getUID($e), p(e.target).attr("id", t)), e.target = "#" + t
                }
                return g.typeCheckConfig($e, e, Xe), e
            }, e._getScrollTop = function() {
                return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop
            }, e._getScrollHeight = function() {
                return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
            }, e._getOffsetHeight = function() {
                return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height
            }, e._process = function() {
                var e = this._getScrollTop() + this._config.offset,
                    t = this._getScrollHeight(),
                    n = this._config.offset + t - this._getOffsetHeight();
                if (this._scrollHeight !== t && this.refresh(), n <= e) {
                    var i = this._targets[this._targets.length - 1];
                    this._activeTarget !== i && this._activate(i)
                } else {
                    if (this._activeTarget && e < this._offsets[0] && 0 < this._offsets[0]) return this._activeTarget = null, void this._clear();
                    for (var r = this._offsets.length; r--;) this._activeTarget !== this._targets[r] && e >= this._offsets[r] && (void 0 === this._offsets[r + 1] || e < this._offsets[r + 1]) && this._activate(this._targets[r])
                }
            }, e._activate = function(t) {
                this._activeTarget = t, this._clear();
                var e = this._selector.split(",").map(function(e) {
                        return e + '[data-target="' + t + '"],' + e + '[href="' + t + '"]'
                    }),
                    n = p([].slice.call(document.querySelectorAll(e.join(","))));
                n.hasClass("dropdown-item") ? (n.closest(".dropdown").find(".dropdown-toggle").addClass("active"), n.addClass("active")) : (n.addClass("active"), n.parents(".nav, .list-group").prev(".nav-link, .list-group-item").addClass("active"), n.parents(".nav, .list-group").prev(".nav-item").children(".nav-link").addClass("active")), p(this._scrollElement).trigger("activate.bs.scrollspy", {
                    relatedTarget: t
                })
            }, e._clear = function() {
                [].slice.call(document.querySelectorAll(this._selector)).filter(function(e) {
                    return e.classList.contains("active")
                }).forEach(function(e) {
                    return e.classList.remove("active")
                })
            }, n._jQueryInterface = function(t) {
                return this.each(function() {
                    var e = p(this).data("bs.scrollspy");
                    if (e || (e = new n(this, "object" == typeof t && t), p(this).data("bs.scrollspy", e)), "string" == typeof t) {
                        if (void 0 === e[t]) throw new TypeError('No method named "' + t + '"');
                        e[t]()
                    }
                })
            }, s(n, null, [{
                key: "VERSION",
                get: function() {
                    return "4.5.0"
                }
            }, {
                key: "Default",
                get: function() {
                    return Ve
                }
            }]), n
        }();
    p(window).on("load.bs.scrollspy.data-api", function() {
        for (var e = [].slice.call(document.querySelectorAll('[data-spy="scroll"]')), t = e.length; t--;) {
            var n = p(e[t]);
            Ye._jQueryInterface.call(n, n.data())
        }
    }), p.fn[$e] = Ye._jQueryInterface, p.fn[$e].Constructor = Ye, p.fn[$e].noConflict = function() {
        return p.fn[$e] = ze, Ye._jQueryInterface
    };
    var Ke = p.fn.tab,
        Ge = function() {
            function i(e) {
                this._element = e
            }
            var e = i.prototype;
            return e.show = function() {
                var n = this;
                if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && p(this._element).hasClass("active") || p(this._element).hasClass("disabled"))) {
                    var e, i, t = p(this._element).closest(".nav, .list-group")[0],
                        r = g.getSelectorFromElement(this._element);
                    if (t) {
                        var o = "UL" === t.nodeName || "OL" === t.nodeName ? "> li > .active" : ".active";
                        i = (i = p.makeArray(p(t).find(o)))[i.length - 1]
                    }
                    var s = p.Event("hide.bs.tab", {
                            relatedTarget: this._element
                        }),
                        a = p.Event("show.bs.tab", {
                            relatedTarget: i
                        });
                    if (i && p(i).trigger(s), p(this._element).trigger(a), !a.isDefaultPrevented() && !s.isDefaultPrevented()) {
                        r && (e = document.querySelector(r)), this._activate(this._element, t);
                        var l = function() {
                            var e = p.Event("hidden.bs.tab", {
                                    relatedTarget: n._element
                                }),
                                t = p.Event("shown.bs.tab", {
                                    relatedTarget: i
                                });
                            p(i).trigger(e), p(n._element).trigger(t)
                        };
                        e ? this._activate(e, e.parentNode, l) : l()
                    }
                }
            }, e.dispose = function() {
                p.removeData(this._element, "bs.tab"), this._element = null
            }, e._activate = function(e, t, n) {
                var i = this,
                    r = (!t || "UL" !== t.nodeName && "OL" !== t.nodeName ? p(t).children(".active") : p(t).find("> li > .active"))[0],
                    o = n && r && p(r).hasClass("fade"),
                    s = function() {
                        return i._transitionComplete(e, r, n)
                    };
                if (r && o) {
                    var a = g.getTransitionDurationFromElement(r);
                    p(r).removeClass("show").one(g.TRANSITION_END, s).emulateTransitionEnd(a)
                } else s()
            }, e._transitionComplete = function(e, t, n) {
                if (t) {
                    p(t).removeClass("active");
                    var i = p(t.parentNode).find("> .dropdown-menu .active")[0];
                    i && p(i).removeClass("active"), "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !1)
                }
                if (p(e).addClass("active"), "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !0), g.reflow(e), e.classList.contains("fade") && e.classList.add("show"), e.parentNode && p(e.parentNode).hasClass("dropdown-menu")) {
                    var r = p(e).closest(".dropdown")[0];
                    if (r) {
                        var o = [].slice.call(r.querySelectorAll(".dropdown-toggle"));
                        p(o).addClass("active")
                    }
                    e.setAttribute("aria-expanded", !0)
                }
                n && n()
            }, i._jQueryInterface = function(n) {
                return this.each(function() {
                    var e = p(this),
                        t = e.data("bs.tab");
                    if (t || (t = new i(this), e.data("bs.tab", t)), "string" == typeof n) {
                        if (void 0 === t[n]) throw new TypeError('No method named "' + n + '"');
                        t[n]()
                    }
                })
            }, s(i, null, [{
                key: "VERSION",
                get: function() {
                    return "4.5.0"
                }
            }]), i
        }();
    p(document).on("click.bs.tab.data-api", '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]', function(e) {
        e.preventDefault(), Ge._jQueryInterface.call(p(this), "show")
    }), p.fn.tab = Ge._jQueryInterface, p.fn.tab.Constructor = Ge, p.fn.tab.noConflict = function() {
        return p.fn.tab = Ke, Ge._jQueryInterface
    };
    var Je = p.fn.toast,
        Ze = {
            animation: "boolean",
            autohide: "boolean",
            delay: "number"
        },
        et = {
            animation: !0,
            autohide: !0,
            delay: 500
        },
        tt = function() {
            function i(e, t) {
                this._element = e, this._config = this._getConfig(t), this._timeout = null, this._setListeners()
            }
            var e = i.prototype;
            return e.show = function() {
                var e = this,
                    t = p.Event("show.bs.toast");
                if (p(this._element).trigger(t), !t.isDefaultPrevented()) {
                    this._config.animation && this._element.classList.add("fade");
                    var n = function() {
                        e._element.classList.remove("showing"), e._element.classList.add("show"), p(e._element).trigger("shown.bs.toast"), e._config.autohide && (e._timeout = setTimeout(function() {
                            e.hide()
                        }, e._config.delay))
                    };
                    if (this._element.classList.remove("hide"), g.reflow(this._element), this._element.classList.add("showing"), this._config.animation) {
                        var i = g.getTransitionDurationFromElement(this._element);
                        p(this._element).one(g.TRANSITION_END, n).emulateTransitionEnd(i)
                    } else n()
                }
            }, e.hide = function() {
                if (this._element.classList.contains("show")) {
                    var e = p.Event("hide.bs.toast");
                    p(this._element).trigger(e), e.isDefaultPrevented() || this._close()
                }
            }, e.dispose = function() {
                clearTimeout(this._timeout), this._timeout = null, this._element.classList.contains("show") && this._element.classList.remove("show"), p(this._element).off("click.dismiss.bs.toast"), p.removeData(this._element, "bs.toast"), this._element = null, this._config = null
            }, e._getConfig = function(e) {
                return e = l(l(l({}, et), p(this._element).data()), "object" == typeof e && e ? e : {}), g.typeCheckConfig("toast", e, this.constructor.DefaultType), e
            }, e._setListeners = function() {
                var e = this;
                p(this._element).on("click.dismiss.bs.toast", '[data-dismiss="toast"]', function() {
                    return e.hide()
                })
            }, e._close = function() {
                var e = this,
                    t = function() {
                        e._element.classList.add("hide"), p(e._element).trigger("hidden.bs.toast")
                    };
                if (this._element.classList.remove("show"), this._config.animation) {
                    var n = g.getTransitionDurationFromElement(this._element);
                    p(this._element).one(g.TRANSITION_END, t).emulateTransitionEnd(n)
                } else t()
            }, i._jQueryInterface = function(n) {
                return this.each(function() {
                    var e = p(this),
                        t = e.data("bs.toast");
                    if (t || (t = new i(this, "object" == typeof n && n), e.data("bs.toast", t)), "string" == typeof n) {
                        if (void 0 === t[n]) throw new TypeError('No method named "' + n + '"');
                        t[n](this)
                    }
                })
            }, s(i, null, [{
                key: "VERSION",
                get: function() {
                    return "4.5.0"
                }
            }, {
                key: "DefaultType",
                get: function() {
                    return Ze
                }
            }, {
                key: "Default",
                get: function() {
                    return et
                }
            }]), i
        }();
    p.fn.toast = tt._jQueryInterface, p.fn.toast.Constructor = tt, p.fn.toast.noConflict = function() {
        return p.fn.toast = Je, tt._jQueryInterface
    }, e.Alert = o, e.Button = c, e.Carousel = v, e.Collapse = x, e.Dropdown = _e, e.Modal = Te, e.Popover = Qe, e.Scrollspy = Ye, e.Tab = Ge, e.Toast = tt, e.Tooltip = He, e.Util = g, Object.defineProperty(e, "__esModule", {
        value: !0
    })
});