const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-BuZ43s08.js","assets/constants-BQyULcgQ.js","assets/index-D3sxZXAj.js","assets/index-IsGXemPy.js","assets/index-CrCLJYnd.css"])))=>i.map(i=>d[i]);
import { g as en, c as Vt, _ as nn, __tla as __tla_0 } from "./index-IsGXemPy.js";
import { r as rn, s as an, t as Te, u as ut, x as cn, y as U, A as on, B as sn, D as K, G as Bt, H as L, J as Zt, K as Qt, N as Ht, O as Gt, Q as j, R as un, U as ln, V as fn, W as D, X as Jt, Y as dn, _ as pn, $ as yn, a0 as gn, a1 as N, a2 as Yt, a3 as mn, a4 as Sn, a5 as hn, a6 as vn, a7 as wn, a8 as Cn, a9 as bn, aa as Tn, ab as Pn, L as xn, ac as In, ad as En, ae as On, af as Kn, b as m, ag as y, c as Z, ah as w, ai as Xt, aj as Q, ak as Pe, al as $n, am as jt, an as _n, T as Et, ao as Ot, ap as Kt, aq as $t, ar as Mn, as as _t, at as kn, au as An, av as tt, aw as Dn, ax as te, ay as Rn, az as lt, aA as zn, aB as Un, aC as Ln, aD as ee, __tla as __tla_1 } from "./index-D3sxZXAj.js";
import { s as Nn, t as Fn, u as Mt, v as Wn, w as qn, x as Vn, y as xe, z as Bn, A as Zn, Q as Qn, C as kt, B as St, D as Hn, F as At, G as Gn, H as Jn, q as Yn, __tla as __tla_2 } from "./constants-BQyULcgQ.js";
let at, Dr, Ga, Ya, Ja, Ha;
let __tla = Promise.all([
    (()=>{
        try {
            return __tla_0;
        } catch  {}
    })(),
    (()=>{
        try {
            return __tla_1;
        } catch  {}
    })(),
    (()=>{
        try {
            return __tla_2;
        } catch  {}
    })()
]).then(async ()=>{
    var Dt = typeof Map == "function" && Map.prototype, ft = Object.getOwnPropertyDescriptor && Dt ? Object.getOwnPropertyDescriptor(Map.prototype, "size") : null, et = Dt && ft && typeof ft.get == "function" ? ft.get : null, ne = Dt && Map.prototype.forEach, Rt = typeof Set == "function" && Set.prototype, dt = Object.getOwnPropertyDescriptor && Rt ? Object.getOwnPropertyDescriptor(Set.prototype, "size") : null, nt = Rt && dt && typeof dt.get == "function" ? dt.get : null, re = Rt && Set.prototype.forEach, Xn = typeof WeakMap == "function" && WeakMap.prototype, q = Xn ? WeakMap.prototype.has : null, jn = typeof WeakSet == "function" && WeakSet.prototype, V = jn ? WeakSet.prototype.has : null, tr = typeof WeakRef == "function" && WeakRef.prototype, ae = tr ? WeakRef.prototype.deref : null, er = Boolean.prototype.valueOf, nr = Object.prototype.toString, rr = Function.prototype.toString, ar = String.prototype.match, zt = String.prototype.slice, x = String.prototype.replace, ir = String.prototype.toUpperCase, ie = String.prototype.toLowerCase, Ie = RegExp.prototype.test, ce = Array.prototype.concat, v = Array.prototype.join, cr = Array.prototype.slice, oe = Math.floor, ht = typeof BigInt == "function" ? BigInt.prototype.valueOf : null, pt = Object.getOwnPropertySymbols, vt = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Symbol.prototype.toString : null, R = typeof Symbol == "function" && typeof Symbol.iterator == "object", B = typeof Symbol == "function" && Symbol.toStringTag && (typeof Symbol.toStringTag === R || !0) ? Symbol.toStringTag : null, Ee = Object.prototype.propertyIsEnumerable, se = (typeof Reflect == "function" ? Reflect.getPrototypeOf : Object.getPrototypeOf) || ([].__proto__ === Array.prototype ? function(t) {
        return t.__proto__;
    } : null);
    function ue(t, e) {
        if (t === 1 / 0 || t === -1 / 0 || t !== t || t && t > -1e3 && t < 1e3 || Ie.call(/e/, e)) return e;
        var n = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
        if (typeof t == "number") {
            var r = t < 0 ? -oe(-t) : oe(t);
            if (r !== t) {
                var a = String(r), i = zt.call(e, a.length + 1);
                return x.call(a, n, "$&_") + "." + x.call(x.call(i, /([0-9]{3})/g, "$&_"), /_$/, "");
            }
        }
        return x.call(e, n, "$&_");
    }
    var wt = rn, le = wt.custom, fe = $e(le) ? le : null, Oe = {
        __proto__: null,
        double: '"',
        single: "'"
    }, or = {
        __proto__: null,
        double: /(["\\])/g,
        single: /(['\\])/g
    }, sr = function t(e, n, r, a) {
        var i = n || {};
        if (P(i, "quoteStyle") && !P(Oe, i.quoteStyle)) throw new TypeError('option "quoteStyle" must be "single" or "double"');
        if (P(i, "maxStringLength") && (typeof i.maxStringLength == "number" ? i.maxStringLength < 0 && i.maxStringLength !== 1 / 0 : i.maxStringLength !== null)) throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
        var c = P(i, "customInspect") ? i.customInspect : !0;
        if (typeof c != "boolean" && c !== "symbol") throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");
        if (P(i, "indent") && i.indent !== null && i.indent !== "	" && !(parseInt(i.indent, 10) === i.indent && i.indent > 0)) throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');
        if (P(i, "numericSeparator") && typeof i.numericSeparator != "boolean") throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');
        var o = i.numericSeparator;
        if (typeof e > "u") return "undefined";
        if (e === null) return "null";
        if (typeof e == "boolean") return e ? "true" : "false";
        if (typeof e == "string") return Me(e, i);
        if (typeof e == "number") {
            if (e === 0) return 1 / 0 / e > 0 ? "0" : "-0";
            var s = String(e);
            return o ? ue(e, s) : s;
        }
        if (typeof e == "bigint") {
            var u = String(e) + "n";
            return o ? ue(e, u) : u;
        }
        var p = typeof i.depth > "u" ? 5 : i.depth;
        if (typeof r > "u" && (r = 0), r >= p && p > 0 && typeof e == "object") return Ct(e) ? "[Array]" : "[Object]";
        var d = Ir(i, r);
        if (typeof a > "u") a = [];
        else if (_e(a, e) >= 0) return "[Circular]";
        function l(k, Y, tn) {
            if (Y && (a = cr.call(a), a.push(Y)), tn) {
                var qt = {
                    depth: i.depth
                };
                return P(i, "quoteStyle") && (qt.quoteStyle = i.quoteStyle), t(k, qt, r + 1, a);
            }
            return t(k, i, r + 1, a);
        }
        if (typeof e == "function" && !de(e)) {
            var g = Sr(e), f = X(e, l);
            return "[Function" + (g ? ": " + g : " (anonymous)") + "]" + (f.length > 0 ? " { " + v.call(f, ", ") + " }" : "");
        }
        if ($e(e)) {
            var b = R ? x.call(String(e), /^(Symbol\(.*\))_[^)]*$/, "$1") : vt.call(e);
            return typeof e == "object" && !R ? F(b) : b;
        }
        if (Tr(e)) {
            for(var T = "<" + ie.call(String(e.nodeName)), _ = e.attributes || [], E = 0; E < _.length; E++)T += " " + _[E].name + "=" + Ke(ur(_[E].value), "double", i);
            return T += ">", e.childNodes && e.childNodes.length && (T += "..."), T += "</" + ie.call(String(e.nodeName)) + ">", T;
        }
        if (Ct(e)) {
            if (e.length === 0) return "[]";
            var z = X(e, l);
            return d && !xr(z) ? "[" + bt(z, d) + "]" : "[ " + v.call(z, ", ") + " ]";
        }
        if (fr(e)) {
            var M = X(e, l);
            return !("cause" in Error.prototype) && "cause" in e && !Ee.call(e, "cause") ? "{ [" + String(e) + "] " + v.call(ce.call("[cause]: " + l(e.cause), M), ", ") + " }" : M.length === 0 ? "[" + String(e) + "]" : "{ [" + String(e) + "] " + v.call(M, ", ") + " }";
        }
        if (typeof e == "object" && c) {
            if (fe && typeof e[fe] == "function" && wt) return wt(e, {
                depth: p - r
            });
            if (c !== "symbol" && typeof e.inspect == "function") return e.inspect();
        }
        if (hr(e)) {
            var J = [];
            return ne && ne.call(e, function(k, Y) {
                J.push(l(Y, e, !0) + " => " + l(k, e));
            }), pe("Map", et.call(e), J, d);
        }
        if (Cr(e)) {
            var O = [];
            return re && re.call(e, function(k) {
                O.push(l(k, e));
            }), pe("Set", nt.call(e), O, d);
        }
        if (vr(e)) return yt("WeakMap");
        if (br(e)) return yt("WeakSet");
        if (wr(e)) return yt("WeakRef");
        if (pr(e)) return F(l(Number(e)));
        if (gr(e)) return F(l(ht.call(e)));
        if (yr(e)) return F(er.call(e));
        if (dr(e)) return F(l(String(e)));
        if (typeof window < "u" && e === window) return "{ [object Window] }";
        if (typeof globalThis < "u" && e === globalThis || typeof Vt < "u" && e === Vt) return "{ [object globalThis] }";
        if (!lr(e) && !de(e)) {
            var ct = X(e, l), Ft = se ? se(e) === Object.prototype : e instanceof Object || e.constructor === Object, ot = e instanceof Object ? "" : "null prototype", Wt = !Ft && B && Object(e) === e && B in e ? zt.call(I(e), 8, -1) : ot ? "Object" : "", je = Ft || typeof e.constructor != "function" ? "" : e.constructor.name ? e.constructor.name + " " : "", st = je + (Wt || ot ? "[" + v.call(ce.call([], Wt || [], ot || []), ": ") + "] " : "");
            return ct.length === 0 ? st + "{}" : d ? st + "{" + bt(ct, d) + "}" : st + "{ " + v.call(ct, ", ") + " }";
        }
        return String(e);
    };
    function Ke(t, e, n) {
        var r = n.quoteStyle || e, a = Oe[r];
        return a + t + a;
    }
    function ur(t) {
        return x.call(String(t), /"/g, "&quot;");
    }
    function $(t) {
        return !B || !(typeof t == "object" && (B in t || typeof t[B] < "u"));
    }
    function Ct(t) {
        return I(t) === "[object Array]" && $(t);
    }
    function lr(t) {
        return I(t) === "[object Date]" && $(t);
    }
    function de(t) {
        return I(t) === "[object RegExp]" && $(t);
    }
    function fr(t) {
        return I(t) === "[object Error]" && $(t);
    }
    function dr(t) {
        return I(t) === "[object String]" && $(t);
    }
    function pr(t) {
        return I(t) === "[object Number]" && $(t);
    }
    function yr(t) {
        return I(t) === "[object Boolean]" && $(t);
    }
    function $e(t) {
        if (R) return t && typeof t == "object" && t instanceof Symbol;
        if (typeof t == "symbol") return !0;
        if (!t || typeof t != "object" || !vt) return !1;
        try {
            return vt.call(t), !0;
        } catch  {}
        return !1;
    }
    function gr(t) {
        if (!t || typeof t != "object" || !ht) return !1;
        try {
            return ht.call(t), !0;
        } catch  {}
        return !1;
    }
    var mr = Object.prototype.hasOwnProperty || function(t) {
        return t in this;
    };
    function P(t, e) {
        return mr.call(t, e);
    }
    function I(t) {
        return nr.call(t);
    }
    function Sr(t) {
        if (t.name) return t.name;
        var e = ar.call(rr.call(t), /^function\s*([\w$]+)/);
        return e ? e[1] : null;
    }
    function _e(t, e) {
        if (t.indexOf) return t.indexOf(e);
        for(var n = 0, r = t.length; n < r; n++)if (t[n] === e) return n;
        return -1;
    }
    function hr(t) {
        if (!et || !t || typeof t != "object") return !1;
        try {
            et.call(t);
            try {
                nt.call(t);
            } catch  {
                return !0;
            }
            return t instanceof Map;
        } catch  {}
        return !1;
    }
    function vr(t) {
        if (!q || !t || typeof t != "object") return !1;
        try {
            q.call(t, q);
            try {
                V.call(t, V);
            } catch  {
                return !0;
            }
            return t instanceof WeakMap;
        } catch  {}
        return !1;
    }
    function wr(t) {
        if (!ae || !t || typeof t != "object") return !1;
        try {
            return ae.call(t), !0;
        } catch  {}
        return !1;
    }
    function Cr(t) {
        if (!nt || !t || typeof t != "object") return !1;
        try {
            nt.call(t);
            try {
                et.call(t);
            } catch  {
                return !0;
            }
            return t instanceof Set;
        } catch  {}
        return !1;
    }
    function br(t) {
        if (!V || !t || typeof t != "object") return !1;
        try {
            V.call(t, V);
            try {
                q.call(t, q);
            } catch  {
                return !0;
            }
            return t instanceof WeakSet;
        } catch  {}
        return !1;
    }
    function Tr(t) {
        return !t || typeof t != "object" ? !1 : typeof HTMLElement < "u" && t instanceof HTMLElement ? !0 : typeof t.nodeName == "string" && typeof t.getAttribute == "function";
    }
    function Me(t, e) {
        if (t.length > e.maxStringLength) {
            var n = t.length - e.maxStringLength, r = "... " + n + " more character" + (n > 1 ? "s" : "");
            return Me(zt.call(t, 0, e.maxStringLength), e) + r;
        }
        var a = or[e.quoteStyle || "single"];
        a.lastIndex = 0;
        var i = x.call(x.call(t, a, "\\$1"), /[\x00-\x1f]/g, Pr);
        return Ke(i, "single", e);
    }
    function Pr(t) {
        var e = t.charCodeAt(0), n = {
            8: "b",
            9: "t",
            10: "n",
            12: "f",
            13: "r"
        }[e];
        return n ? "\\" + n : "\\x" + (e < 16 ? "0" : "") + ir.call(e.toString(16));
    }
    function F(t) {
        return "Object(" + t + ")";
    }
    function yt(t) {
        return t + " { ? }";
    }
    function pe(t, e, n, r) {
        var a = r ? bt(n, r) : v.call(n, ", ");
        return t + " (" + e + ") {" + a + "}";
    }
    function xr(t) {
        for(var e = 0; e < t.length; e++)if (_e(t[e], `
`) >= 0) return !1;
        return !0;
    }
    function Ir(t, e) {
        var n;
        if (t.indent === "	") n = "	";
        else if (typeof t.indent == "number" && t.indent > 0) n = v.call(Array(t.indent + 1), " ");
        else return null;
        return {
            base: n,
            prev: v.call(Array(e + 1), n)
        };
    }
    function bt(t, e) {
        if (t.length === 0) return "";
        var n = `
` + e.prev + e.base;
        return n + v.call(t, "," + n) + `
` + e.prev;
    }
    function X(t, e) {
        var n = Ct(t), r = [];
        if (n) {
            r.length = t.length;
            for(var a = 0; a < t.length; a++)r[a] = P(t, a) ? e(t[a], t) : "";
        }
        var i = typeof pt == "function" ? pt(t) : [], c;
        if (R) {
            c = {};
            for(var o = 0; o < i.length; o++)c["$" + i[o]] = i[o];
        }
        for(var s in t)P(t, s) && (n && String(Number(s)) === s && s < t.length || R && c["$" + s] instanceof Symbol || (Ie.call(/[^\w$]/, s) ? r.push(e(s, t) + ": " + e(t[s], t)) : r.push(s + ": " + e(t[s], t))));
        if (typeof pt == "function") for(var u = 0; u < i.length; u++)Ee.call(t, i[u]) && r.push("[" + e(i[u]) + "]: " + e(t[i[u]], t));
        return r;
    }
    const Er = en(sr);
    at = class extends Error {
        constructor(e){
            super(e), this.name = "CompactError";
        }
    };
    Ha = function(t, e, n, r, a) {
        const i = `type error: ${t} ${e} at ${n}; expected value of type ${r} but received ${Er(a)}`;
        throw new at(i);
    };
    let Ut, Or, Kr, ke, ye, $r, _r, Mr, kr, Ar, Rr, zr, Ur, Lr;
    Ut = (t)=>({
            coinPublicKey: typeof t == "string" ? {
                bytes: Mt(t)
            } : t,
            currentIndex: 0n,
            inputs: [],
            outputs: []
        });
    Or = ({ is_left: t, left: e, right: n })=>({
            is_left: t,
            left: {
                bytes: Mt(e)
            },
            right: {
                bytes: Wn(n)
            }
        });
    Kr = ({ is_left: t, left: e, right: n })=>({
            is_left: t,
            left: xe(e.bytes),
            right: Bn(n.bytes)
        });
    ke = (t)=>({
            coinPublicKey: {
                bytes: Mt(t.coinPublicKey)
            },
            currentIndex: t.currentIndex,
            inputs: t.inputs.map(Fn),
            outputs: t.outputs.map(({ coinInfo: e, recipient: n })=>({
                    coinInfo: Nn(e),
                    recipient: Or(n)
                }))
        });
    ye = (t)=>({
            coinPublicKey: xe(t.coinPublicKey.bytes),
            currentIndex: t.currentIndex,
            inputs: t.inputs.map(Vn),
            outputs: t.outputs.map(({ coinInfo: e, recipient: n })=>({
                    coinInfo: qn(e),
                    recipient: Kr(n)
                }))
        });
    $r = (t, e)=>({
            initialPrivateState: t,
            initialZswapLocalState: Ut(e)
        });
    _r = (t)=>{
        let e;
        if (t instanceof St) e = t;
        else if (t instanceof kt) e = t.data;
        else if (t instanceof Hn) e = new St(t);
        else throw new at(`'contractState' parameter ${t} has unexpected type`);
        return e;
    };
    Mr = (t, e, n)=>{
        const r = new Qn(_r(t), e), a = t instanceof kt ? t.balance : new Map;
        return r.block = {
            ...r.block,
            balance: a,
            ownAddress: e,
            secondsSinceEpoch: BigInt(Math.floor(Date.now() / 1e3))
        }, r;
    };
    kr = (t)=>typeof t == "object" && t !== null && "coinPublicKey" in t && typeof t.coinPublicKey == "string" && "currentIndex" in t && "inputs" in t && "outputs" in t;
    Ar = (t)=>typeof t == "object" && t !== null && "coinPublicKey" in t && typeof t.coinPublicKey == "object" && t.coinPublicKey !== null && "bytes" in t.coinPublicKey && "currentIndex" in t && "inputs" in t && "outputs" in t;
    Dr = (t, e, n, r, a, i, c)=>{
        const o = Mr(n, t);
        let s;
        return kr(e) ? s = ke(e) : Ar(e) ? s = e : s = Ut(e), {
            currentPrivateState: r,
            currentZswapLocalState: s,
            currentQueryContext: o,
            costModel: Zn.initialCostModel(),
            gasLimit: a
        };
    };
    Ga = ()=>({
            readTime: 0n,
            computeTime: 0n,
            bytesWritten: 0n,
            bytesDeleted: 0n
        });
    Ja = (t, e, n)=>{
        try {
            const r = t.currentQueryContext.query(n, t.costModel, t.gasLimit);
            t.currentQueryContext = r.context, t.gasCost = r.gasCost;
            const a = r.events.filter((c)=>c.tag === "read");
            let i = 0;
            if (e.publicTranscript = e.publicTranscript.concat(n.map((c)=>typeof c == "object" && "popeq" in c ? {
                    popeq: {
                        ...c.popeq,
                        result: a[i++].content
                    }
                } : c)), r.events.length === 1) {
                const c = r.events[0];
                if (c.tag === "read") return c.content;
            }
            return r.events;
        } catch (r) {
            throw r instanceof Error ? new at(r.toString()) : r;
        }
    };
    Rr = Symbol();
    zr = (t)=>t[Rr];
    Ur = (t)=>an(()=>{
            const e = zr(t);
            if (!e.ctor) throw new Error("Invalid CompactContext (missing constructor)");
            return new e.ctor(e.witnesses);
        });
    Lr = Symbol.for("compact-js/effect/ContractConfigurationError");
    class Nr extends Te(Lr, "ContractConfigurationError") {
    }
    const A = (t, e, n)=>new Nr({
            message: t,
            contractState: e,
            cause: n
        }), Fr = Symbol.for("compact-js/effect/ContractRuntimeError");
    class Wr extends Te(Fr, "ContractRuntimeError") {
    }
    const gt = (t, e)=>new Wr({
            message: t,
            cause: e
        }), qr = 1, Vr = 0n, Br = (t)=>{
        const e = En.decode(t.state.state.encode()), n = new On(new Kn(e), t.address);
        return n.block = t.block, n.effects = t.effects, n;
    }, Zr = (t, e, n, r)=>{
        const a = Pn([
            new In(Array.from(e.comIndices).reduce((i, c)=>i.insertCommitment(...c), Br(t)), n)
        ], r ?? xn.initialParameters());
        return a.length === 1 ? D(a[0]) : j(new Error(`Expected one transcript partition pair, received: ${a.length}`));
    };
    class Ae {
        compiledContract;
        transform;
        constructor(e, n = ut){
            this.compiledContract = e, this.transform = n;
        }
        pipe() {
            return cn(this, arguments);
        }
        initialize(e, ...n) {
            return U({
                zkConfigReader: on.pipe(sn((r)=>r.createReader(this.compiledContract))),
                keyConfig: N,
                contract: this.createContract()
            }).pipe(K(({ zkConfigReader: r, keyConfig: a, contract: i })=>Bt({
                    try: ()=>{
                        const { currentContractState: c, currentPrivateState: o, currentZswapLocalState: s } = i.initialState($r(e, Yt(a.coinPublicKey)), ...n);
                        return {
                            contractState: c,
                            privateState: o,
                            zswapLocalState: ye(s)
                        };
                    },
                    catch: (c)=>c instanceof at ? gt("Failed to initialize contract", c) : A("Failed to configure constructor context with coin public key", void 0, c)
                }).pipe(K(({ contractState: c, privateState: o, zswapLocalState: s })=>L(this, function*() {
                        const u = yield* r.getVerifierKeys(Qt(i));
                        for (const [l, g] of u){
                            if (Gt(g)) return yield* A(`Failed to find a verifier key for circuit '${l}'`, c);
                            const f = c.operation(l);
                            if (!f) return yield* A(`Circuit '${l}' is undefined for the given contract state`, c);
                            try {
                                f.verifierKey = g.value, c.setOperation(l, f);
                            } catch (b) {
                                return yield* A(`Failed to configure verifier key for circuit '${l}' for the given contract state`, c, b);
                            }
                        }
                        const [p, d] = yield* this.createMaintenanceAuthority(a.getSigningKey());
                        return c.maintenanceAuthority = p, {
                            public: {
                                contractState: c
                            },
                            private: {
                                signingKey: d,
                                privateState: o,
                                zswapLocalState: s
                            }
                        };
                    })))), this.transform);
        }
        circuit(e, n, ...r) {
            return U({
                keyConfig: N,
                contract: this.createContract()
            }).pipe(K(({ keyConfig: a, contract: i })=>Bt({
                    try: ()=>{
                        const c = i.provableCircuits[e];
                        if (!c) throw new Error(`Circuit ${this.compiledContract.tag}#${e} could not be found.`);
                        const o = n.zswapLocalState ? ke(n.zswapLocalState) : Ut(Yt(a.coinPublicKey)), s = Dr(n.address, o, n.contractState, n.privateState), u = s.currentQueryContext;
                        return {
                            ...c(s, ...r),
                            initialTxContext: u
                        };
                    },
                    catch: ut
                }).pipe(K(({ initialTxContext: c, result: o, context: s, proofData: u })=>L(function*() {
                        return {
                            public: {
                                contractState: s.currentQueryContext.state.state,
                                publicTranscript: u.publicTranscript,
                                partitionedTranscript: yield* Zr(c, s.currentQueryContext, u.publicTranscript, n.ledgerParameters)
                            },
                            private: {
                                result: o,
                                input: u.input,
                                output: u.output,
                                privateTranscriptOutputs: u.privateTranscriptOutputs,
                                privateState: s.currentPrivateState,
                                zswapLocalState: ye(s.currentZswapLocalState)
                            }
                        };
                    })), Zt((c)=>gt(`Error executing circuit '${e}'`, c)))), this.transform);
        }
        getProvableCircuitIds() {
            return Qt(Ht(this.createContract()));
        }
        replaceContractMaintenanceAuthority(e, n) {
            return U({
                keyConfig: N
            }).pipe(K(({ keyConfig: r })=>L(this, function*() {
                    const { contractState: a } = n, [i, c] = yield* this.createMaintenanceAuthority(e, a), o = mn.deserialize(i.serialize()), s = yield* this.createSignedMaintenanceUpdate(()=>D([
                            new Sn(o)
                        ]), r, n);
                    return {
                        ...s,
                        private: {
                            ...s.private,
                            signingKey: c
                        }
                    };
                })), this.transform);
        }
        removeContractOperation(e, n) {
            return U({
                keyConfig: N
            }).pipe(K(({ keyConfig: r })=>L(this, function*() {
                    return yield* this.createSignedMaintenanceUpdate(()=>D([
                            new hn(e, new vn("v3"))
                        ]), r, n);
                })), this.transform);
        }
        addOrReplaceContractOperation(e, n, r) {
            return U({
                keyConfig: N
            }).pipe(K(({ keyConfig: a })=>L(this, function*() {
                    return yield* this.createSignedMaintenanceUpdate(()=>D([
                            new wn(e, new Cn("v3", n))
                        ]), a, r);
                })), this.transform);
        }
        createSignedMaintenanceUpdate(e, n, r) {
            const { address: a, contractState: i } = r, c = n.getSigningKey();
            if (Gt(c)) return j(A("Signing key required to authorize contract maintenance update", i));
            const o = e();
            if (un(o)) return j(o.left);
            const s = new ln(a, fn(o), i.maintenanceAuthority.counter);
            return D({
                public: {
                    maintenanceUpdate: s.addSignature(Vr, dn(Jt(c), s.dataToSign))
                },
                private: {
                    signingKey: Jt(c)
                }
            });
        }
        createMaintenanceAuthority(e, n) {
            const r = pn(e, {
                onSome: ut,
                onNone: ()=>yn(At())
            });
            try {
                return D([
                    new Gn([
                        Jn(r)
                    ], qr, n ? n.maintenanceAuthority.counter + 1n : 0n),
                    r
                ]);
            } catch (a) {
                return j(A(`Failed to create a signature verifying key for signing key '${r}'`, n, a));
            }
        }
        createContract() {
            return this.contract ??= Ur(this.compiledContract).pipe(Zt((e)=>gt(String(e), e)), gn, Ht);
        }
        contract;
    }
    const S = (t)=>new Ae(t);
    bn(2, (t, e)=>new Ae(t.compiledContract, (n)=>Tn(n, e)));
    const C = ()=>{
        throw new Error("Network ID has not been configured. Call setNetworkId() before any wallet or contract operation.");
    };
    async function Qr(t, e) {
        const n = await t.proofProvider.proveTx(e.unprovenTx), r = await t.walletProvider.balanceTx(n);
        return t.midnightProvider.submitTx(r);
    }
    const H = async (t, e)=>{
        const n = await Qr(t, e);
        return t.publicDataProvider.watchForTxData(n);
    }, De = (t)=>typeof t == "object" && t !== null && "_tag" in t && "cause" in t && typeof t.cause == "object" && t.cause !== null && "name" in t.cause && "message" in t.cause;
    class G extends Error {
        finalizedTxData;
        circuitId;
        constructor(e, n){
            super("Transaction failed"), this.finalizedTxData = e, this.circuitId = n, this.message = JSON.stringify({
                ...n && {
                    circuitId: n
                },
                ...e
            }, (r, a)=>typeof a == "bigint" ? a.toString() : a instanceof Map ? Object.fromEntries(a) : a, "	");
        }
    }
    class Hr extends G {
        constructor(e){
            super(e), this.name = "DeployTxFailedError";
        }
    }
    class Re extends G {
        constructor(e, n){
            super(e, n), this.name = "CallTxFailedError";
        }
    }
    class Gr extends TypeError {
        contractState;
        circuitIds;
        constructor(e, n){
            super(`Following operations: ${n.join(", ")}, are undefined or have mismatched verifier keys for contract state ${e.toString(!1)}`), this.contractState = e, this.circuitIds = n;
        }
    }
    class ze extends Error {
        constructor(){
            super("Incorrect call transaction configuration"), this.message = "'privateStateId' was defined for call transaction while 'privateStateProvider' was undefined";
        }
    }
    class Jr extends Error {
        constructor(){
            super("Incorrect find contract configuration"), this.message = "'initialPrivateState' was defined for contract find while 'privateStateId' was undefined";
        }
    }
    class Yr extends Error {
        cached;
        requested;
        constructor(e, n){
            super("Scoped transaction identity mismatch"), this.cached = e, this.requested = n, this.name = "ScopedTransactionIdentityMismatchError", this.message = `Cannot use cached states from contract '${e.contractAddress}'` + (e.privateStateId ? ` (privateStateId: '${e.privateStateId}')` : "") + ` for contract '${n.contractAddress}'` + (n.privateStateId ? ` (privateStateId: '${n.privateStateId}')` : "") + ". Scoped transactions must target the same contract and private state identity.";
        }
    }
    class Xr extends G {
        constructor(e){
            super(e), this.name = "ReplaceMaintenanceAuthorityTxFailedError";
        }
    }
    class jr extends G {
        constructor(e){
            super(e), this.name = "RemoveVerifierKeyTxFailedError";
        }
    }
    class ta extends G {
        constructor(e){
            super(e), this.name = "InsertVerifierKeyTxFailedError";
        }
    }
    const Lt = async (t)=>Et.fromParts(C(), void 0, void 0, Ot.new(Kt()).addMaintenanceUpdate(await t())), ea = (t, e, n, r, a, i, c)=>{
        const o = S(e), s = Q(t, {
            coinPublicKey: c,
            signingKey: i
        });
        return Lt(async ()=>(await s.runPromise(o.replaceContractMaintenanceAuthority(Rn(r), {
                address: _t(n),
                contractState: a
            }))).public.maintenanceUpdate);
    }, na = (t, e, n, r, a, i, c)=>{
        const o = S(e), s = Q(t, {
            coinPublicKey: c,
            signingKey: i
        });
        return Lt(async ()=>(await s.runPromise(o.removeContractOperation($t(r), {
                address: _t(n),
                contractState: a
            }))).public.maintenanceUpdate);
    }, ra = (t, e, n, r, a, i, c, o)=>{
        const s = S(e), u = Q(t, {
            coinPublicKey: o,
            signingKey: c
        });
        return Lt(async ()=>(await u.runPromise(s.addOrReplaceContractOperation($t(r), Mn(a), {
                address: _t(n),
                contractState: i
            }))).public.maintenanceUpdate);
    }, aa = async (t, e, n, r, a)=>{
        m(n);
        const i = await t.publicDataProvider.queryContractState(n);
        y(i, `No contract state found on chain for contract address '${n}'`), $n(i.operation(r), `Circuit '${r}' is already defined for contract at address '${n}'`);
        const c = await t.privateStateProvider.getSigningKey(n);
        y(c, `Signing key for contract address '${n}' not found`);
        const o = await ra(t.zkConfigProvider, e, n, r, a, i, c, t.walletProvider.getCoinPublicKey()), s = await H(t, {
            unprovenTx: o
        });
        if (s.status !== Z) throw new ta(s);
        return s;
    }, ia = async (t, e, n, r)=>{
        m(n);
        const a = await t.publicDataProvider.queryContractState(n);
        y(a, `No contract state found on chain for contract address '${n}'`), y(a.operation(r), `Circuit '${r}' not found for contract at address '${n}'`);
        const i = await t.privateStateProvider.getSigningKey(n);
        y(i, `Signing key for contract address '${n}' not found`);
        const c = await na(t.zkConfigProvider, e, n, r, a, i, t.walletProvider.getCoinPublicKey()), o = await H(t, {
            unprovenTx: c
        });
        if (o.status !== Z) throw new jr(o);
        return o;
    }, ca = (t, e, n)=>async (r)=>{
            m(n);
            const a = await t.publicDataProvider.queryContractState(n);
            y(a, `No contract state found on chain for contract address '${n}'`);
            const i = await t.privateStateProvider.getSigningKey(n);
            y(i, `Signing key for contract address '${n}' not found`);
            const c = await ea(t.zkConfigProvider, e, n, r, a, i, t.walletProvider.getCoinPublicKey()), o = await H(t, {
                unprovenTx: c
            });
            if (o.status !== Z) throw new Xr(o);
            return await t.privateStateProvider.setSigningKey(n, r), o;
        }, oa = (t, e, n, r)=>(m(r), {
            removeVerifierKey () {
                return ia(t, n, r, e);
            },
            insertVerifierKey (a) {
                return aa(t, n, r, e, a);
            }
        }), Ue = (t, e, n)=>(m(n), S(e).getProvableCircuitIds().reduce((r, a)=>({
                ...r,
                [a]: oa(t, a, e, n)
            }), {})), Le = (t, e, n)=>(m(n), {
            replaceAuthority: ca(t, e, n)
        }), sa = "0".repeat(64), ua = "f5b9fa49d3c4f06582dab6ba45c85f6b1927873105b4c8cf363b9b57ca910f65", Ne = (t, e, n)=>{
        const r = C(), a = w(t, r), i = jt(e, r), c = n ? new Map(Array.from(n, ([o, s])=>[
                w(o, r),
                jt(s, r)
            ])) : void 0;
        return (o)=>{
            const s = w(o, r);
            return s === a ? i : s === sa ? ua : c?.get(s);
        };
    }, Fe = (t)=>Object.keys(t).forEach((e)=>{
            if (e !== "value" && e !== "type" && e !== "nonce") throw new TypeError(`Key '${e}' should not be present in output data ${t}`);
        }), Tt = (t)=>(Fe(t), JSON.stringify({
            ...t,
            value: {
                __big_int_val__: t.value.toString()
            }
        })), la = (t)=>{
        const { mt_index: e, ...n } = t;
        return Tt(n);
    }, fa = (t)=>{
        const e = JSON.parse(t, (n, r)=>n === "value" && r != null && typeof r == "object" && "__big_int_val__" in r && typeof r.__big_int_val__ == "string" ? BigInt(r.__big_int_val__) : r);
        return Fe(e), e;
    }, da = ({ coinInfo: t, recipient: e }, n, r = 0)=>{
        if (!e.is_left) return tt.newContractOwned(t, r, e.right);
        const a = n(e.left);
        if (!a) throw new Error(`Unable to resolve encryption public key for recipient ${e.left}. Provide a mapping via the encryptionPublicKeyResolver.`);
        return tt.new(t, r, e.left, a);
    }, pa = ([t, e], n)=>{
        const { type: r, value: a } = fa(t);
        return n(e, r, a);
    }, mt = (t, e)=>t.size === 0 ? void 0 : Array.from(t, (r)=>pa(r, e)).reduce((r, a)=>r.merge(a)), We = (t, e)=>e.outputs.filter((n)=>n.recipient.left === t).map(({ coinInfo: n })=>n), ya = (t, e, n, r)=>{
        const a = C(), i = w(e, a);
        if (w(t.coinPublicKey, a) !== i) throw new Error("Unable to lookup encryption public key (Unsupported coin)");
        return Ne(e, n, r);
    }, h = 0, W = 1, ge = ()=>({
            outputs: new Map,
            inputs: new Map,
            transients: new Map
        }), qe = (t, e, n)=>{
        const [r, a] = e;
        if (r !== void 0 && t(r)) return h;
        if (a !== void 0 && t(a)) return W;
        if (r !== void 0 && a !== void 0) throw new Error(`${n} not present in either segment of the partitioned transcript. Local zswap state does not match the contract's declared effects.`);
        return h;
    }, me = (t, e)=>qe((n)=>n.effects.claimedShieldedReceives.includes(t) || n.effects.claimedShieldedSpends.includes(t), e, `Shielded commitment ${t}`), ga = (t, e)=>qe((n)=>n.effects.claimedNullifiers.includes(t), e, `Shielded nullifier ${t}`), ma = (...t)=>{
        const e = t.filter((n)=>n != null);
        if (e.length !== 0) return e.reduce((n, r)=>n.merge(r));
    }, Se = (t)=>ma(mt(t.inputs, lt.fromInput), mt(t.outputs, lt.fromOutput), mt(t.transients, lt.fromTransient)), Ve = (t, e, n, r = [
        void 0,
        void 0
    ])=>{
        const a = typeof e == "function" ? e : ()=>e, i = {
            [h]: ge(),
            [W]: ge()
        }, c = n?.zswapChainState.postBlockUpdate(new Date);
        for (const o of t.outputs)if (o.recipient.is_left) {
            const s = An(o.coinInfo, o.recipient.left), u = me(s, r);
            i[u].outputs.set(Tt(o.coinInfo), da(o, a, u));
        } else {
            const s = o.recipient.right, u = tt.newContractOwned(o.coinInfo, h, s), p = me(u.commitment, r), d = p === h ? u : tt.newContractOwned(o.coinInfo, p, s);
            i[p].outputs.set(Tt(o.coinInfo), d);
        }
        for (const o of t.inputs){
            const s = la(o), u = i[h].outputs.get(s), p = i[W].outputs.get(s);
            if (u !== void 0 && p !== void 0) throw new Error(`Ambiguous transient: outputs with serialized coin info ${s} exist in both segments — wallet-owned input cannot pair unambiguously.`);
            if (u !== void 0 || p !== void 0) {
                const g = u !== void 0 ? h : W, f = u ?? p;
                i[g].transients.set(s, Dn.newFromContractOwnedOutput(o, g, f)), i[g].outputs.delete(s);
                continue;
            }
            y(n, "Wallet-owned input requires a chain state for ZswapInput.newContractOwned"), y(c, "Wallet-owned input requires a chain state for ZswapInput.newContractOwned"), m(n.contractAddress);
            const d = te.newContractOwned(o, h, n.contractAddress, c), l = ga(d.nullifier, r);
            i[l].inputs.set(s, l === h ? d : te.newContractOwned(o, l, n.contractAddress, c));
        }
        return {
            guaranteed: Se(i[h]),
            fallible: Se(i[W])
        };
    }, Sa = (t, e, n)=>Ve(t, e, n).guaranteed, Be = (t)=>kn.deserialize(t.serialize()), ha = (t)=>kt.deserialize(t.serialize()), va = (t, e, n)=>{
        const r = new _n(Be(t));
        return [
            r.address,
            ha(r.initialState),
            Et.fromParts(C(), Sa(e, n), void 0, Ot.new(Kt()).addDeploy(r))
        ];
    }, he = (t)=>{
        if (!t) return [];
        const e = [];
        for (const [[n, r], a] of t.effects.claimedUnshieldedSpends)r.tag === "user" && n.tag !== "dust" && e.push({
            value: a,
            owner: r.address,
            type: n.raw
        });
        return e;
    }, wa = (t, e, n, r, a, i, c, o, s, u)=>{
        const p = Be(n).operation(t);
        y(p, `Operation '${t}' is undefined for contract state ${n.toString(!1)}`);
        const d = Ot.new(Kt()).addCall(new Un(e, t, p, a[0], a[1], i, c, o, Ln(), t)), l = he(a[0]);
        l.length > 0 && (d.guaranteedUnshieldedOffer = ee.new([], l, []));
        const g = he(a[1]);
        g.length > 0 && (d.fallibleUnshieldedOffer = ee.new([], g, []));
        const f = Ve(s, u, {
            contractAddress: e,
            zswapChainState: r
        }, a);
        return Et.fromPartsRandomized(C(), f.guaranteed, f.fallible, d);
    };
    async function Ca(t, e, n, r) {
        const a = S(n.compiledContract), i = Q(t, {
            coinPublicKey: e,
            signingKey: n.signingKey
        }), c = "initialPrivateState" in n ? n.initialPrivateState : void 0, o = "args" in n ? n.args : [], s = await i.runPromiseExit(a.initialize(c, ...o));
        try {
            const { public: { contractState: u }, private: { privateState: p, signingKey: d, zswapLocalState: l } } = Pe(s), g = Ne(e, r, n.additionalCoinEncPublicKeyMappings), [f, b, T] = va(u, l, g);
            return {
                public: {
                    contractAddress: f,
                    initialContractState: b
                },
                private: {
                    signingKey: d,
                    initialPrivateState: p,
                    initialZswapState: l,
                    unprovenTx: T,
                    newCoins: We(e, l)
                }
            };
        } catch (u) {
            throw !De(u) || u._tag !== "ContractRuntimeError" && u._tag !== "ContractConfigurationError" || u.cause.name !== "CompactError" ? u : new Error(u.cause.message, {
                cause: u
            });
        }
    }
    async function ba(t, e) {
        return Ca(t.zkConfigProvider, w(t.walletProvider.getCoinPublicKey(), C()), e, t.walletProvider.getEncryptionPublicKey());
    }
    async function Ta(t, e) {
        const n = await ba(t, e), r = await H(t, {
            unprovenTx: n.private.unprovenTx
        });
        if (r.status !== Z) throw new Hr(r);
        return t.privateStateProvider.setContractAddress(n.public.contractAddress), "privateStateId" in e && await t.privateStateProvider.set(e.privateStateId, n.private.initialPrivateState), await t.privateStateProvider.setSigningKey(n.public.contractAddress, n.private.signingKey), {
            private: n.private,
            public: {
                ...r,
                ...n.public
            }
        };
    }
    const Pt = Symbol.for("@midnight-ntwrk/midnight-js#Transaction"), Ze = Symbol.for("@midnight-ntwrk/midnight-js#Transaction/Submit"), Qe = Symbol.for("@midnight-ntwrk/midnight-js#Transaction/MergeUnsubmittedCallTxData"), rt = Symbol.for("@midnight-ntwrk/midnight-js#Transaction/CacheStates"), Nt = Symbol.for("@midnight-ntwrk/midnight-js#Transaction/GetCurrentStatesForIdentity"), Pa = (t, e)=>{
        if (!t) return e;
        const n = new Set([
            ...Array.isArray(t.circuitId) ? t.circuitId : [
                t.circuitId
            ],
            ...Array.isArray(e.circuitId) ? e.circuitId : [
                e.circuitId
            ]
        ]);
        return {
            unprovenTx: t.unprovenTx.merge(e.unprovenTx),
            circuitId: Array.from(n)
        };
    };
    class xa {
        [Pt] = Pt;
        providers;
        options;
        cachedStates = void 0;
        currentUnsubmittedCall;
        submitTxOptions = void 0;
        constructor(e, n){
            this.providers = e, this.options = n;
        }
        getAdditionalMappings() {
            return this.options?.additionalCoinEncPublicKeyMappings;
        }
        getCurrentStates() {
            return this.cachedStates?.states;
        }
        [Nt](e) {
            if (!this.cachedStates) return;
            const n = this.cachedStates.identity;
            if (n.contractAddress !== e.contractAddress || n.privateStateId !== e.privateStateId) throw new Yr({
                contractAddress: n.contractAddress,
                privateStateId: n.privateStateId
            }, {
                contractAddress: e.contractAddress,
                privateStateId: e.privateStateId
            });
            return this.cachedStates.states;
        }
        getLastUnsubmittedCallTxDataToTransact() {
            return this.currentUnsubmittedCall;
        }
        async [Ze]() {
            const [e, n] = this.getLastUnsubmittedCallTxDataToTransact() ?? [];
            if (!e) throw new Error("No calls were submitted.");
            const r = await H(this.providers, this.submitTxOptions);
            if (r.status !== Z) throw new Re(r, this.submitTxOptions.circuitId);
            return n && await this.providers.privateStateProvider.set(n, e.private.nextPrivateState), {
                private: e.private,
                public: {
                    ...e.public,
                    ...r
                }
            };
        }
        [rt](e, n) {
            this.cachedStates = {
                states: e,
                identity: n
            };
        }
        [Qe](e, n, r) {
            if (this.currentUnsubmittedCall = [
                n,
                r
            ], this.submitTxOptions = Pa(this.submitTxOptions, {
                unprovenTx: n.private.unprovenTx,
                circuitId: e
            }), !this.cachedStates) return;
            const a = n.private.nextPrivateState, i = this.cachedStates.states.contractState, c = this.cachedStates.states.zswapChainState, o = this.cachedStates.states.ledgerParameters;
            i.data = new St(n.public.nextContractState), this[rt]({
                contractState: i,
                zswapChainState: c,
                ledgerParameters: o,
                privateState: a
            }, this.cachedStates.identity);
        }
    }
    const Ia = (t, e, n, r)=>{
        t[Qe](e, n, r);
    }, xt = (t)=>typeof t == "object" && t != null && Pt in t, ve = async (t, e, n, r)=>{
        const a = xt(n) ? n : void 0, i = xt(n) ? r : n, c = a ?? new xa(t, i);
        try {
            await e(c);
        } catch (o) {
            if (a) throw o;
            const s = new Error(`Unexpected error executing scoped transaction '${i?.scopeName ?? "<unnamed>"}': ${String(o)}`, {
                cause: o
            });
            throw t?.loggerProvider?.error?.call(t.loggerProvider, s.message), s;
        }
        try {
            if (!a) return await c[Ze]();
            const [o] = c.getLastUnsubmittedCallTxDataToTransact() ?? [];
            if (!o) throw new Error("No calls were submitted.");
            return {
                public: {
                    nextContractState: o.public.nextContractState,
                    partitionedTranscript: o.public.partitionedTranscript,
                    publicTranscript: o.public.publicTranscript
                },
                private: {
                    input: o.private.input,
                    output: o.private.output,
                    privateTranscriptOutputs: o.private.privateTranscriptOutputs,
                    result: o.private.result,
                    nextPrivateState: o.private.nextPrivateState,
                    nextZswapLocalState: o.private.nextZswapLocalState
                }
            };
        } catch (o) {
            if (o instanceof Re || a) throw o;
            const s = new Error(`Unexpected error submitting scoped transaction '${i?.scopeName ?? "<unnamed>"}': ${String(o)}`, {
                cause: o
            });
            throw t?.loggerProvider?.error?.call(t.loggerProvider, s.message), s;
        }
    }, He = async (t, e)=>{
        m(e);
        const n = await t.queryZSwapAndContractState(e);
        y(n, `No public state found at contract address '${e}'`);
        const [r, a, i] = n;
        return {
            contractState: a,
            zswapChainState: r,
            ledgerParameters: i
        };
    }, Ea = async (t, e, n, r)=>{
        const a = await He(t, n), i = await e.get(r);
        return y(i, `No private state found at private state ID '${r}'`), {
            ...a,
            privateState: i
        };
    };
    async function we(t, e, n) {
        const { compiledContract: r, contractAddress: a, coinPublicKey: i, initialContractState: c, initialZswapChainState: o, ledgerParameters: s } = e;
        m(a), y(S(e.compiledContract).getProvableCircuitIds().find((f)=>f === e.circuitId), `Circuit '${e.circuitId}' is undefined`);
        const u = S(r), p = Q(t, {
            coinPublicKey: e.coinPublicKey
        }), d = "initialPrivateState" in e ? e.initialPrivateState : void 0, l = "args" in e ? e.args : [], g = await p.runPromiseExit(u.circuit($t(e.circuitId), {
            address: zn(a),
            contractState: c,
            privateState: d,
            ledgerParameters: s
        }, ...l));
        try {
            const { public: { contractState: f, partitionedTranscript: b, publicTranscript: T }, private: { input: _, output: E, privateState: z, privateTranscriptOutputs: M, result: J, zswapLocalState: O } } = Pe(g);
            return {
                public: {
                    nextContractState: f,
                    partitionedTranscript: b,
                    publicTranscript: T
                },
                private: {
                    input: _,
                    output: E,
                    result: J,
                    nextPrivateState: z,
                    nextZswapLocalState: O,
                    privateTranscriptOutputs: M,
                    unprovenTx: wa(e.circuitId, a, c, o, b, M, _, E, O, ya(O, e.coinPublicKey, n, e.additionalCoinEncPublicKeyMappings)),
                    newCoins: We(w(i, C()), O)
                }
            };
        } catch (f) {
            throw !De(f) || f._tag !== "ContractRuntimeError" || f.cause.name !== "CompactError" ? f : new Error(f.cause.message, {
                cause: f
            });
        }
    }
    const Ce = (t, e, n, r, a, i)=>{
        const c = {
            additionalCoinEncPublicKeyMappings: t.additionalCoinEncPublicKeyMappings,
            compiledContract: t.compiledContract,
            contractAddress: t.contractAddress,
            circuitId: t.circuitId
        }, s = {
            ..."args" in t ? {
                ...c,
                args: t.args
            } : c,
            coinPublicKey: w(e, C()),
            initialContractState: r,
            initialZswapChainState: a,
            ledgerParameters: n
        };
        return i ? {
            ...s,
            initialPrivateState: i
        } : s;
    }, Oa = async (t, e, n)=>{
        const r = {
            contractAddress: e.contractAddress,
            privateStateId: e.privateStateId
        }, a = n?.[Nt](r);
        if (a) return a;
        const i = await Ea(t.publicDataProvider, t.privateStateProvider, e.contractAddress, e.privateStateId);
        return n && n[rt](i, r), i;
    }, Ka = async (t, e, n)=>{
        const r = {
            contractAddress: e.contractAddress
        }, a = n?.[Nt](r);
        if (a) return a;
        const i = await He(t.publicDataProvider, e.contractAddress);
        return n && n[rt]({
            ...i,
            privateState: void 0
        }, r), i;
    };
    async function $a(t, e, n) {
        m(e.contractAddress), y(S(e.compiledContract).getProvableCircuitIds().find((s)=>s === e.circuitId), `Circuit '${e.circuitId}' is undefined`);
        const r = "privateStateProvider" in t, a = "privateStateId" in e;
        if (a && !r) throw new ze;
        if (a && r) {
            const { zswapChainState: s, contractState: u, privateState: p, ledgerParameters: d } = await Oa(t, e, n);
            return we(t.zkConfigProvider, Ce(e, w(t.walletProvider.getCoinPublicKey(), C()), d, u, s, p), t.walletProvider.getEncryptionPublicKey());
        }
        const { zswapChainState: i, contractState: c, ledgerParameters: o } = await Ka(t, e, n);
        return we(t.zkConfigProvider, Ce(e, w(t.walletProvider.getCoinPublicKey(), C()), o, c, i), t.walletProvider.getEncryptionPublicKey());
    }
    async function be(t, e, n) {
        m(e.contractAddress), y(S(e.compiledContract).getProvableCircuitIds().find((c)=>c === e.circuitId), `Circuit '${e.circuitId}' is undefined`);
        const r = "privateStateProvider" in t, a = "privateStateId" in e;
        if (a && !r) throw new ze;
        r && t.privateStateProvider.setContractAddress(e.contractAddress);
        const i = async (c)=>{
            Ia(c, e.circuitId, await $a(t, e, c), a ? e.privateStateId : void 0);
        };
        return n ? ve(t, i, n) : ve(t, i);
    }
    const _a = xt, Ma = (t, e, n, r, a, i)=>{
        const c = {
            additionalCoinEncPublicKeyMappings: a,
            compiledContract: t,
            circuitId: e,
            contractAddress: n
        }, o = i.length !== 0 ? {
            ...c,
            args: i
        } : c;
        return r ? {
            ...o,
            privateStateId: r
        } : o;
    }, Ge = (t, e, n, r)=>(m(n), t.privateStateProvider.setContractAddress(n), S(e).getProvableCircuitIds().reduce((a, i)=>({
                ...a,
                [i]: (...c)=>{
                    const o = c.length > 0 && _a(c[0]) ? c[0] : void 0, s = o ? c.slice(1) : c, u = Ma(e, i, n, r, o?.getAdditionalMappings(), s);
                    return o ? be(t, u, o) : be(t, u);
                }
            }), {})), ka = (t)=>{
        const e = {
            ...t,
            signingKey: t.signingKey ?? At()
        };
        return "privateStateId" in t ? {
            ...e,
            privateStateId: t.privateStateId,
            initialPrivateState: t.initialPrivateState
        } : e;
    };
    async function Aa(t, e) {
        const n = await Ta(t, ka(e));
        return {
            deployTxData: n,
            callTx: Ge(t, e.compiledContract, n.public.contractAddress, "privateStateId" in e ? e.privateStateId : void 0),
            circuitMaintenanceTx: Ue(t, e.compiledContract, n.public.contractAddress),
            contractMaintenanceTx: Le(t, e.compiledContract, n.public.contractAddress)
        };
    }
    const Da = async (t, e)=>{
        if (e.signingKey) return await t.setSigningKey(e.contractAddress, e.signingKey), e.signingKey;
        const n = await t.getSigningKey(e.contractAddress);
        if (n) return n;
        const r = At();
        return await t.setSigningKey(e.contractAddress, r), r;
    }, Ra = async (t, e)=>{
        const n = "privateStateId" in e, r = "initialPrivateState" in e;
        if (n) {
            if (r) return await t.set(e.privateStateId, e.initialPrivateState), e.initialPrivateState;
            const a = await t.get(e.privateStateId);
            return y(a, `No private state found at private state ID '${e.privateStateId}'`), a;
        }
        if (r) throw new Jr;
    }, za = (t, e)=>t.length === e.length && Xt(t) === Xt(e), Ua = (t, e)=>{
        const n = t.reduce((r, [a, i])=>!e.operation(a) || !za(i, e.operation(a).verifierKey) ? [
                ...r,
                a
            ] : r, []);
        if (n.length > 0) throw new Gr(e, n);
    };
    async function La(t, e) {
        const { compiledContract: n, contractAddress: r } = e;
        m(r), t.privateStateProvider.setContractAddress(r);
        const a = await t.publicDataProvider.watchForDeployTxData(r), i = await t.publicDataProvider.queryDeployContractState(r);
        y(i, `No contract deployed at contract address '${r}'`);
        const c = await t.publicDataProvider.queryContractState(r);
        y(c, `No contract deployed at contract address '${r}'`);
        const o = await t.zkConfigProvider.getVerifierKeys(S(n).getProvableCircuitIds());
        Ua(o, c);
        const s = await Da(t.privateStateProvider, e), u = await Ra(t.privateStateProvider, e);
        return {
            deployTxData: {
                private: {
                    signingKey: s,
                    initialPrivateState: u
                },
                public: {
                    ...a,
                    contractAddress: r,
                    initialContractState: i
                }
            },
            callTx: Ge(t, n, r, "privateStateId" in e ? e.privateStateId : void 0),
            circuitMaintenanceTx: Ue(t, n, r),
            contractMaintenanceTx: Le(t, n, r)
        };
    }
    function Je(t, e) {
        return {
            buyerMaxPrice: ()=>t,
            sellerMinPrice: ()=>e
        };
    }
    function it() {
        return {
            buyerMaxPrice: ()=>0n,
            sellerMinPrice: ()=>0n
        };
    }
    const Na = {
        0: "Pending",
        1: "Matched",
        2: "Failed"
    };
    function It(t) {
        return Na[Number(t)] ?? "Pending";
    }
    const Fa = {
        proofServerUrl: "http://127.0.0.1:6300",
        indexerUri: "https://indexer.preprod.midnight.network/api/v4/graphql",
        indexerWsUri: "wss://indexer.preprod.midnight.network/api/v4/graphql/ws",
        nodeUri: "https://rpc.preprod.midnight.network",
        networkId: "preprod"
    };
    async function Ye() {
        try {
            return await nn(()=>import("./index-BuZ43s08.js").then(async (m)=>{
                    await m.__tla;
                    return m;
                }), __vite__mapDeps([0,1,2,3,4]));
        } catch  {
            return console.warn("[nocturn/api] managed/negotiation not found — using mock contract.\nRun `bash scripts/compile.sh` to generate real artifacts."), null;
        }
    }
    function Wa(t, e, n) {
        return e.publicDataProvider.contractStateObservable(t, {
            type: "latest"
        }).pipe(Yn((r)=>{
            try {
                const a = n(r);
                return {
                    status: It(a.negotiationStatus),
                    agreedPrice: a.agreedPrice,
                    contractAddress: t
                };
            } catch  {
                return {
                    status: It(0n),
                    agreedPrice: 0n,
                    contractAddress: t
                };
            }
        }));
    }
    function Xe(t, e, n, r) {
        const a = Wa(t, n, r);
        return {
            contractAddress: t,
            state$: a,
            async openNegotiation () {
                await e.callTx.openNegotiation();
            },
            async matchOffer (i, c) {
                e.witnesses = Je(i, c), await e.callTx.matchOffer(), e.witnesses = it();
            }
        };
    }
    async function qa(t) {
        const e = await Ye();
        if (!e) throw new Error("Contract artifacts not found. Run: bash scripts/compile.sh");
        const { Contract: n, ledger: r } = e, a = await Aa(t, {
            compiledContract: new n(it()),
            privateStateId: "nocturn-negotiation",
            initialPrivateState: {}
        }), i = a.deployTxData.public.contractAddress;
        return console.log(`[nocturn] Deployed contract address: ${i}`), Xe(i, a, t, r);
    }
    async function Va(t, e) {
        const n = await Ye();
        if (!n) throw new Error("Contract artifacts not found. Run: bash scripts/compile.sh");
        const { Contract: r, ledger: a } = n, i = await La(t, {
            compiledContract: new r(it()),
            contractAddress: e,
            privateStateId: "nocturn-negotiation",
            initialPrivateState: {}
        });
        return Xe(e, i, t, a);
    }
    Ya = Object.freeze(Object.defineProperty({
        __proto__: null,
        PREPROD_CONFIG: Fa,
        createStubWitnesses: it,
        createWitnesses: Je,
        decodeStatus: It,
        deployNegotiation: qa,
        joinNegotiation: Va
    }, Symbol.toStringTag, {
        value: "Module"
    }));
});
export { at as C, Dr as c, Ga as e, Ya as i, Ja as q, Ha as t, __tla };
