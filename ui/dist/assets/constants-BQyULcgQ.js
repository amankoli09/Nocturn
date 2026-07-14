import { aE as vt, __tla as __tla_0 } from "./index-D3sxZXAj.js";
let I, A, M, w, ro, oo, R, io, _o, so, j, Bt, po, O, At, ut, pt, T, St, ft, dt, V, st, ot, Ft, to, Zi, ct, Xi, eo, Tt, Ot, no, kt, fo, wo, uo, co, bo, lo, ao, go;
let __tla = Promise.all([
    (()=>{
        try {
            return __tla_0;
        } catch  {}
    })()
]).then(async ()=>{
    var it = function(r, t) {
        return it = Object.setPrototypeOf || {
            __proto__: []
        } instanceof Array && function(e, n) {
            e.__proto__ = n;
        } || function(e, n) {
            for(var _ in n)Object.prototype.hasOwnProperty.call(n, _) && (e[_] = n[_]);
        }, it(r, t);
    };
    ut = function(r, t) {
        if (typeof t != "function" && t !== null) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
        it(r, t);
        function e() {
            this.constructor = r;
        }
        r.prototype = t === null ? Object.create(t) : (e.prototype = t.prototype, new e);
    };
    Xi = function(r, t, e, n) {
        function _(o) {
            return o instanceof e ? o : new e(function(c) {
                c(o);
            });
        }
        return new (e || (e = Promise))(function(o, c) {
            function u(l) {
                try {
                    a(n.next(l));
                } catch (F) {
                    c(F);
                }
            }
            function f(l) {
                try {
                    a(n.throw(l));
                } catch (F) {
                    c(F);
                }
            }
            function a(l) {
                l.done ? o(l.value) : _(l.value).then(u, f);
            }
            a((n = n.apply(r, t || [])).next());
        });
    };
    Zi = function(r, t) {
        var e = {
            label: 0,
            sent: function() {
                if (o[0] & 1) throw o[1];
                return o[1];
            },
            trys: [],
            ops: []
        }, n, _, o, c = Object.create((typeof Iterator == "function" ? Iterator : Object).prototype);
        return c.next = u(0), c.throw = u(1), c.return = u(2), typeof Symbol == "function" && (c[Symbol.iterator] = function() {
            return this;
        }), c;
        function u(a) {
            return function(l) {
                return f([
                    a,
                    l
                ]);
            };
        }
        function f(a) {
            if (n) throw new TypeError("Generator is already executing.");
            for(; c && (c = 0, a[0] && (e = 0)), e;)try {
                if (n = 1, _ && (o = a[0] & 2 ? _.return : a[0] ? _.throw || ((o = _.return) && o.call(_), 0) : _.next) && !(o = o.call(_, a[1])).done) return o;
                switch(_ = 0, o && (a = [
                    a[0] & 2,
                    o.value
                ]), a[0]){
                    case 0:
                    case 1:
                        o = a;
                        break;
                    case 4:
                        return e.label++, {
                            value: a[1],
                            done: !1
                        };
                    case 5:
                        e.label++, _ = a[1], a = [
                            0
                        ];
                        continue;
                    case 7:
                        a = e.ops.pop(), e.trys.pop();
                        continue;
                    default:
                        if (o = e.trys, !(o = o.length > 0 && o[o.length - 1]) && (a[0] === 6 || a[0] === 2)) {
                            e = 0;
                            continue;
                        }
                        if (a[0] === 3 && (!o || a[1] > o[0] && a[1] < o[3])) {
                            e.label = a[1];
                            break;
                        }
                        if (a[0] === 6 && e.label < o[1]) {
                            e.label = o[1], o = a;
                            break;
                        }
                        if (o && e.label < o[2]) {
                            e.label = o[2], e.ops.push(a);
                            break;
                        }
                        o[2] && e.ops.pop(), e.trys.pop();
                        continue;
                }
                a = t.call(r, e);
            } catch (l) {
                a = [
                    6,
                    l
                ], _ = 0;
            } finally{
                n = o = 0;
            }
            if (a[0] & 5) throw a[1];
            return {
                value: a[0] ? a[1] : void 0,
                done: !0
            };
        }
    };
    V = function(r) {
        var t = typeof Symbol == "function" && Symbol.iterator, e = t && r[t], n = 0;
        if (e) return e.call(r);
        if (r && typeof r.length == "number") return {
            next: function() {
                return r && n >= r.length && (r = void 0), {
                    value: r && r[n++],
                    done: !r
                };
            }
        };
        throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
    };
    ot = function(r, t) {
        var e = typeof Symbol == "function" && r[Symbol.iterator];
        if (!e) return r;
        var n = e.call(r), _, o = [], c;
        try {
            for(; (t === void 0 || t-- > 0) && !(_ = n.next()).done;)o.push(_.value);
        } catch (u) {
            c = {
                error: u
            };
        } finally{
            try {
                _ && !_.done && (e = n.return) && e.call(n);
            } finally{
                if (c) throw c.error;
            }
        }
        return o;
    };
    st = function(r, t, e) {
        if (e || arguments.length === 2) for(var n = 0, _ = t.length, o; n < _; n++)(o || !(n in t)) && (o || (o = Array.prototype.slice.call(t, 0, n)), o[n] = t[n]);
        return r.concat(o || Array.prototype.slice.call(t));
    };
    ct = function(r) {
        return this instanceof ct ? (this.v = r, this) : new ct(r);
    };
    to = function(r, t, e) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var n = e.apply(r, t || []), _, o = [];
        return _ = Object.create((typeof AsyncIterator == "function" ? AsyncIterator : Object).prototype), u("next"), u("throw"), u("return", c), _[Symbol.asyncIterator] = function() {
            return this;
        }, _;
        function c(b) {
            return function(v) {
                return Promise.resolve(v).then(b, F);
            };
        }
        function u(b, v) {
            n[b] && (_[b] = function(p) {
                return new Promise(function(ht, mt) {
                    o.push([
                        b,
                        p,
                        ht,
                        mt
                    ]) > 1 || f(b, p);
                });
            }, v && (_[b] = v(_[b])));
        }
        function f(b, v) {
            try {
                a(n[b](v));
            } catch (p) {
                C(o[0][3], p);
            }
        }
        function a(b) {
            b.value instanceof ct ? Promise.resolve(b.value.v).then(l, F) : C(o[0][2], b);
        }
        function l(b) {
            f("next", b);
        }
        function F(b) {
            f("throw", b);
        }
        function C(b, v) {
            b(v), o.shift(), o.length && f(o[0][0], o[0][1]);
        }
    };
    eo = function(r) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var t = r[Symbol.asyncIterator], e;
        return t ? t.call(r) : (r = typeof V == "function" ? V(r) : r[Symbol.iterator](), e = {}, n("next"), n("throw"), n("return"), e[Symbol.asyncIterator] = function() {
            return this;
        }, e);
        function n(o) {
            e[o] = r[o] && function(c) {
                return new Promise(function(u, f) {
                    c = r[o](c), _(u, f, c.done, c.value);
                });
            };
        }
        function _(o, c, u, f) {
            Promise.resolve(f).then(function(a) {
                o({
                    value: a,
                    done: u
                });
            }, c);
        }
    };
    T = function(r) {
        return typeof r == "function";
    };
    St = function(r) {
        var t = function(n) {
            Error.call(n), n.stack = new Error().stack;
        }, e = r(t);
        return e.prototype = Object.create(Error.prototype), e.prototype.constructor = e, e;
    };
    var W = St(function(r) {
        return function(e) {
            r(this), this.message = e ? e.length + ` errors occurred during unsubscription:
` + e.map(function(n, _) {
                return _ + 1 + ") " + n.toString();
            }).join(`
  `) : "", this.name = "UnsubscriptionError", this.errors = e;
        };
    });
    dt = function(r, t) {
        if (r) {
            var e = r.indexOf(t);
            0 <= e && r.splice(e, 1);
        }
    };
    ft = function() {
        function r(t) {
            this.initialTeardown = t, this.closed = !1, this._parentage = null, this._finalizers = null;
        }
        return r.prototype.unsubscribe = function() {
            var t, e, n, _, o;
            if (!this.closed) {
                this.closed = !0;
                var c = this._parentage;
                if (c) if (this._parentage = null, Array.isArray(c)) try {
                    for(var u = V(c), f = u.next(); !f.done; f = u.next()){
                        var a = f.value;
                        a.remove(this);
                    }
                } catch (p) {
                    t = {
                        error: p
                    };
                } finally{
                    try {
                        f && !f.done && (e = u.return) && e.call(u);
                    } finally{
                        if (t) throw t.error;
                    }
                }
                else c.remove(this);
                var l = this.initialTeardown;
                if (T(l)) try {
                    l();
                } catch (p) {
                    o = p instanceof W ? p.errors : [
                        p
                    ];
                }
                var F = this._finalizers;
                if (F) {
                    this._finalizers = null;
                    try {
                        for(var C = V(F), b = C.next(); !b.done; b = C.next()){
                            var v = b.value;
                            try {
                                gt(v);
                            } catch (p) {
                                o = o ?? [], p instanceof W ? o = st(st([], ot(o)), ot(p.errors)) : o.push(p);
                            }
                        }
                    } catch (p) {
                        n = {
                            error: p
                        };
                    } finally{
                        try {
                            b && !b.done && (_ = C.return) && _.call(C);
                        } finally{
                            if (n) throw n.error;
                        }
                    }
                }
                if (o) throw new W(o);
            }
        }, r.prototype.add = function(t) {
            var e;
            if (t && t !== this) if (this.closed) gt(t);
            else {
                if (t instanceof r) {
                    if (t.closed || t._hasParent(this)) return;
                    t._addParent(this);
                }
                (this._finalizers = (e = this._finalizers) !== null && e !== void 0 ? e : []).push(t);
            }
        }, r.prototype._hasParent = function(t) {
            var e = this._parentage;
            return e === t || Array.isArray(e) && e.includes(t);
        }, r.prototype._addParent = function(t) {
            var e = this._parentage;
            this._parentage = Array.isArray(e) ? (e.push(t), e) : e ? [
                e,
                t
            ] : t;
        }, r.prototype._removeParent = function(t) {
            var e = this._parentage;
            e === t ? this._parentage = null : Array.isArray(e) && dt(e, t);
        }, r.prototype.remove = function(t) {
            var e = this._finalizers;
            e && dt(e, t), t instanceof r && t._removeParent(this);
        }, r.EMPTY = function() {
            var t = new r;
            return t.closed = !0, t;
        }(), r;
    }();
    ro = ft.EMPTY;
    Ft = function(r) {
        return r instanceof ft || r && "closed" in r && T(r.remove) && T(r.add) && T(r.unsubscribe);
    };
    function gt(r) {
        T(r) ? r() : r.unsubscribe();
    }
    var xt = {
        setTimeout: function(r, t) {
            for(var e = [], n = 2; n < arguments.length; n++)e[n - 2] = arguments[n];
            return setTimeout.apply(void 0, st([
                r,
                t
            ], ot(e)));
        },
        clearTimeout: function(r) {
            return clearTimeout(r);
        },
        delegate: void 0
    };
    kt = function(r) {
        xt.setTimeout(function() {
            throw r;
        });
    };
    function lt() {}
    let qt;
    pt = function(r) {
        ut(t, r);
        function t(e) {
            var n = r.call(this) || this;
            return n.isStopped = !1, e ? (n.destination = e, Ft(e) && e.add(n)) : n.destination = zt, n;
        }
        return t.create = function(e, n, _) {
            return new At(e, n, _);
        }, t.prototype.next = function(e) {
            this.isStopped || this._next(e);
        }, t.prototype.error = function(e) {
            this.isStopped || (this.isStopped = !0, this._error(e));
        }, t.prototype.complete = function() {
            this.isStopped || (this.isStopped = !0, this._complete());
        }, t.prototype.unsubscribe = function() {
            this.closed || (this.isStopped = !0, r.prototype.unsubscribe.call(this), this.destination = null);
        }, t.prototype._next = function(e) {
            this.destination.next(e);
        }, t.prototype._error = function(e) {
            try {
                this.destination.error(e);
            } finally{
                this.unsubscribe();
            }
        }, t.prototype._complete = function() {
            try {
                this.destination.complete();
            } finally{
                this.unsubscribe();
            }
        }, t;
    }(ft);
    qt = function() {
        function r(t) {
            this.partialObserver = t;
        }
        return r.prototype.next = function(t) {
            var e = this.partialObserver;
            if (e.next) try {
                e.next(t);
            } catch (n) {
                $(n);
            }
        }, r.prototype.error = function(t) {
            var e = this.partialObserver;
            if (e.error) try {
                e.error(t);
            } catch (n) {
                $(n);
            }
            else $(t);
        }, r.prototype.complete = function() {
            var t = this.partialObserver;
            if (t.complete) try {
                t.complete();
            } catch (e) {
                $(e);
            }
        }, r;
    }();
    At = function(r) {
        ut(t, r);
        function t(e, n, _) {
            var o = r.call(this) || this, c;
            return T(e) || !e ? c = {
                next: e ?? void 0,
                error: n ?? void 0,
                complete: _ ?? void 0
            } : c = e, o.destination = new qt(c), o;
        }
        return t;
    }(pt);
    function $(r) {
        kt(r);
    }
    function It(r) {
        throw r;
    }
    var zt = {
        closed: !0,
        next: lt,
        error: It,
        complete: lt
    };
    function Ct(r) {
        return T(r?.lift);
    }
    Tt = function(r) {
        return function(t) {
            if (Ct(t)) return t.lift(function(e) {
                try {
                    return r(e, this);
                } catch (n) {
                    this.error(n);
                }
            });
            throw new TypeError("Unable to lift unknown Observable type");
        };
    };
    Ot = function(r, t, e, n, _) {
        return new Rt(r, t, e, n, _);
    };
    var Rt = function(r) {
        ut(t, r);
        function t(e, n, _, o, c, u) {
            var f = r.call(this, e) || this;
            return f.onFinalize = c, f.shouldUnsubscribe = u, f._next = n ? function(a) {
                try {
                    n(a);
                } catch (l) {
                    e.error(l);
                }
            } : r.prototype._next, f._error = o ? function(a) {
                try {
                    o(a);
                } catch (l) {
                    e.error(l);
                } finally{
                    this.unsubscribe();
                }
            } : r.prototype._error, f._complete = _ ? function() {
                try {
                    _();
                } catch (a) {
                    e.error(a);
                } finally{
                    this.unsubscribe();
                }
            } : r.prototype._complete, f;
        }
        return t.prototype.unsubscribe = function() {
            var e;
            if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
                var n = this.closed;
                r.prototype.unsubscribe.call(this), !n && ((e = this.onFinalize) === null || e === void 0 || e.call(this));
            }
        }, t;
    }(pt);
    no = function(r, t) {
        return Tt(function(e, n) {
            var _ = 0;
            e.subscribe(Ot(n, function(o) {
                n.next(r.call(t, o, _++));
            }));
        });
    };
    const jt = "/assets/midnight_onchain_runtime_wasm_bg-D2U4EkPt.wasm";
    let i;
    function Et(r) {
        i = r;
    }
    function z(r) {
        const t = i.__externref_table_alloc();
        return i.__wbindgen_export_2.set(t, r), t;
    }
    function h(r, t) {
        try {
            return r.apply(this, t);
        } catch (e) {
            const n = z(e);
            i.__wbindgen_exn_store(n);
        }
    }
    let D = null;
    function P() {
        return (D === null || D.byteLength === 0) && (D = new Uint8Array(i.memory.buffer)), D;
    }
    let K = new TextDecoder("utf-8", {
        ignoreBOM: !0,
        fatal: !0
    });
    K.decode();
    const Mt = 2146435072;
    let G = 0;
    function Pt(r, t) {
        return G += t, G >= Mt && (K = new TextDecoder("utf-8", {
            ignoreBOM: !0,
            fatal: !0
        }), K.decode(), G = t), K.decode(P().subarray(r, r + t));
    }
    function g(r, t) {
        return r = r >>> 0, Pt(r, t);
    }
    let S = 0;
    const U = new TextEncoder;
    "encodeInto" in U || (U.encodeInto = function(r, t) {
        const e = U.encode(r);
        return t.set(e), {
            read: r.length,
            written: e.length
        };
    });
    function q(r, t, e) {
        if (e === void 0) {
            const u = U.encode(r), f = t(u.length, 1) >>> 0;
            return P().subarray(f, f + u.length).set(u), S = u.length, f;
        }
        let n = r.length, _ = t(n, 1) >>> 0;
        const o = P();
        let c = 0;
        for(; c < n; c++){
            const u = r.charCodeAt(c);
            if (u > 127) break;
            o[_ + c] = u;
        }
        if (c !== n) {
            c !== 0 && (r = r.slice(c)), _ = e(_, n, n = c + r.length * 3, 1) >>> 0;
            const u = P().subarray(_ + c, _ + n), f = U.encodeInto(r, u);
            c += f.written, _ = e(_, n, c, 1) >>> 0;
        }
        return S = c, _;
    }
    let E = null;
    function m() {
        return (E === null || E.buffer.detached === !0 || E.buffer.detached === void 0 && E.buffer !== i.memory.buffer) && (E = new DataView(i.memory.buffer)), E;
    }
    function d(r) {
        return r == null;
    }
    function N(r, t) {
        return r = r >>> 0, P().subarray(r / 1, r / 1 + t);
    }
    function at(r) {
        const t = typeof r;
        if (t == "number" || t == "boolean" || r == null) return `${r}`;
        if (t == "string") return `"${r}"`;
        if (t == "symbol") {
            const _ = r.description;
            return _ == null ? "Symbol" : `Symbol(${_})`;
        }
        if (t == "function") {
            const _ = r.name;
            return typeof _ == "string" && _.length > 0 ? `Function(${_})` : "Function";
        }
        if (Array.isArray(r)) {
            const _ = r.length;
            let o = "[";
            _ > 0 && (o += at(r[0]));
            for(let c = 1; c < _; c++)o += ", " + at(r[c]);
            return o += "]", o;
        }
        const e = /\[object ([^\]]+)\]/.exec(toString.call(r));
        let n;
        if (e && e.length > 1) n = e[1];
        else return toString.call(r);
        if (n == "Object") try {
            return "Object(" + JSON.stringify(r) + ")";
        } catch  {
            return "Object";
        }
        return r instanceof Error ? `${r.name}: ${r.message}
${r.stack}` : n;
    }
    const wt = typeof FinalizationRegistry > "u" ? {
        register: ()=>{},
        unregister: ()=>{}
    } : new FinalizationRegistry((r)=>{
        i.__wbindgen_export_5.get(r.dtor)(r.a, r.b);
    });
    function Ut(r, t, e, n) {
        const _ = {
            a: r,
            b: t,
            cnt: 1,
            dtor: e
        }, o = (...c)=>{
            _.cnt++;
            const u = _.a;
            _.a = 0;
            try {
                return n(u, _.b, ...c);
            } finally{
                --_.cnt === 0 ? (i.__wbindgen_export_5.get(_.dtor)(u, _.b), wt.unregister(_)) : _.a = u;
            }
        };
        return o.original = _, wt.register(o, _, _), o;
    }
    function s(r) {
        const t = i.__wbindgen_export_2.get(r);
        return i.__externref_table_dealloc(r), t;
    }
    Bt = function() {
        let r, t;
        try {
            const _ = i.dummyContractAddress();
            var e = _[0], n = _[1];
            if (_[3]) throw e = 0, n = 0, s(_[2]);
            return r = e, t = n, g(e, n);
        } finally{
            i.__wbindgen_free(r, t, 1);
        }
    };
    _o = function(r) {
        const t = i.bigIntToValue(r);
        if (t[2]) throw s(t[1]);
        return s(t[0]);
    };
    io = function(r) {
        let t, e;
        try {
            const o = q(r, i.__wbindgen_malloc, i.__wbindgen_realloc), c = S, u = i.signatureVerifyingKey(o, c);
            var n = u[0], _ = u[1];
            if (u[3]) throw n = 0, _ = 0, s(u[2]);
            return t = n, e = _, g(n, _);
        } finally{
            i.__wbindgen_free(t, e, 1);
        }
    };
    function Lt() {
        const r = i.maxField();
        if (r[2]) throw s(r[1]);
        return s(r[0]);
    }
    oo = function() {
        let r, t;
        try {
            const _ = i.sampleSigningKey();
            var e = _[0], n = _[1];
            if (_[3]) throw e = 0, n = 0, s(_[2]);
            return r = e, t = n, g(e, n);
        } finally{
            i.__wbindgen_free(r, t, 1);
        }
    };
    so = function(r) {
        const t = i.valueToBigInt(r);
        if (t[2]) throw s(t[1]);
        return s(t[0]);
    };
    co = function(r) {
        const t = q(r, i.__wbindgen_malloc, i.__wbindgen_realloc), e = S, n = i.encodeContractAddress(t, e);
        if (n[2]) throw s(n[1]);
        return s(n[0]);
    };
    ao = function(r) {
        let t, e;
        try {
            const o = i.decodeCoinPublicKey(r);
            var n = o[0], _ = o[1];
            if (o[3]) throw n = 0, _ = 0, s(o[2]);
            return t = n, e = _, g(n, _);
        } finally{
            i.__wbindgen_free(t, e, 1);
        }
    };
    uo = function(r) {
        const t = q(r, i.__wbindgen_malloc, i.__wbindgen_realloc), e = S, n = i.encodeCoinPublicKey(t, e);
        if (n[2]) throw s(n[1]);
        return s(n[0]);
    };
    fo = function(r) {
        const t = i.encodeShieldedCoinInfo(r);
        if (t[2]) throw s(t[1]);
        return s(t[0]);
    };
    bo = function(r) {
        const t = i.decodeShieldedCoinInfo(r);
        if (t[2]) throw s(t[1]);
        return s(t[0]);
    };
    go = function(r) {
        let t, e;
        try {
            const o = i.decodeContractAddress(r);
            var n = o[0], _ = o[1];
            if (o[3]) throw n = 0, _ = 0, s(o[2]);
            return t = n, e = _, g(n, _);
        } finally{
            i.__wbindgen_free(t, e, 1);
        }
    };
    lo = function(r) {
        const t = i.decodeQualifiedShieldedCoinInfo(r);
        if (t[2]) throw s(t[1]);
        return s(t[0]);
    };
    wo = function(r) {
        const t = i.encodeQualifiedShieldedCoinInfo(r);
        if (t[2]) throw s(t[1]);
        return s(t[0]);
    };
    function y(r, t) {
        if (!(r instanceof t)) throw new Error(`expected instance of ${t.name}`);
    }
    function bt(r, t) {
        r = r >>> 0;
        const e = m(), n = [];
        for(let _ = r; _ < r + 4 * t; _ += 4)n.push(i.__wbindgen_export_2.get(e.getUint32(_, !0)));
        return i.__externref_drop_slice(r, t), n;
    }
    function $t(r, t, e) {
        i.closure690_externref_shim(r, t, e);
    }
    function Dt(r, t, e, n) {
        i.closure730_externref_shim(r, t, e, n);
    }
    const H = typeof FinalizationRegistry > "u" ? {
        register: ()=>{},
        unregister: ()=>{}
    } : new FinalizationRegistry((r)=>i.__wbg_chargedstate_free(r >>> 0, 1));
    A = class {
        static __wrap(t) {
            t = t >>> 0;
            const e = Object.create(A.prototype);
            return e.__wbg_ptr = t, H.register(e, e.__wbg_ptr, e), e;
        }
        __destroy_into_raw() {
            const t = this.__wbg_ptr;
            return this.__wbg_ptr = 0, H.unregister(this), t;
        }
        free() {
            const t = this.__destroy_into_raw();
            i.__wbg_chargedstate_free(t, 0);
        }
        constructor(t){
            y(t, w);
            const e = i.chargedstate_new(t.__wbg_ptr);
            return this.__wbg_ptr = e >>> 0, H.register(this, this.__wbg_ptr, this), this;
        }
        get state() {
            const t = i.chargedstate_state(this.__wbg_ptr);
            return w.__wrap(t);
        }
        toString(t) {
            let e, n;
            try {
                const _ = i.chargedstate_toString(this.__wbg_ptr, d(t) ? 16777215 : t ? 1 : 0);
                return e = _[0], n = _[1], g(_[0], _[1]);
            } finally{
                i.__wbindgen_free(e, n, 1);
            }
        }
    };
    Symbol.dispose && (A.prototype[Symbol.dispose] = A.prototype.free);
    const Q = typeof FinalizationRegistry > "u" ? {
        register: ()=>{},
        unregister: ()=>{}
    } : new FinalizationRegistry((r)=>i.__wbg_contractmaintenanceauthority_free(r >>> 0, 1));
    R = class {
        static __wrap(t) {
            t = t >>> 0;
            const e = Object.create(R.prototype);
            return e.__wbg_ptr = t, Q.register(e, e.__wbg_ptr, e), e;
        }
        __destroy_into_raw() {
            const t = this.__wbg_ptr;
            return this.__wbg_ptr = 0, Q.unregister(this), t;
        }
        free() {
            const t = this.__destroy_into_raw();
            i.__wbg_contractmaintenanceauthority_free(t, 0);
        }
        static deserialize(t) {
            const e = i.contractmaintenanceauthority_deserialize(t);
            if (e[2]) throw s(e[1]);
            return R.__wrap(e[0]);
        }
        constructor(t, e, n){
            const _ = i.contractmaintenanceauthority_new(t, e, d(n) ? 0 : z(n));
            if (_[2]) throw s(_[1]);
            return this.__wbg_ptr = _[0] >>> 0, Q.register(this, this.__wbg_ptr, this), this;
        }
        get counter() {
            return i.contractmaintenanceauthority_counter(this.__wbg_ptr);
        }
        get committee() {
            const t = i.contractmaintenanceauthority_committee(this.__wbg_ptr);
            if (t[2]) throw s(t[1]);
            return s(t[0]);
        }
        serialize() {
            const t = i.contractmaintenanceauthority_serialize(this.__wbg_ptr);
            if (t[2]) throw s(t[1]);
            return s(t[0]);
        }
        get threshold() {
            return i.contractmaintenanceauthority_threshold(this.__wbg_ptr) >>> 0;
        }
        toString(t) {
            let e, n;
            try {
                const _ = i.contractmaintenanceauthority_toString(this.__wbg_ptr, d(t) ? 16777215 : t ? 1 : 0);
                return e = _[0], n = _[1], g(_[0], _[1]);
            } finally{
                i.__wbindgen_free(e, n, 1);
            }
        }
    };
    Symbol.dispose && (R.prototype[Symbol.dispose] = R.prototype.free);
    const Y = typeof FinalizationRegistry > "u" ? {
        register: ()=>{},
        unregister: ()=>{}
    } : new FinalizationRegistry((r)=>i.__wbg_contractoperation_free(r >>> 0, 1));
    j = class {
        static __wrap(t) {
            t = t >>> 0;
            const e = Object.create(j.prototype);
            return e.__wbg_ptr = t, Y.register(e, e.__wbg_ptr, e), e;
        }
        __destroy_into_raw() {
            const t = this.__wbg_ptr;
            return this.__wbg_ptr = 0, Y.unregister(this), t;
        }
        free() {
            const t = this.__destroy_into_raw();
            i.__wbg_contractoperation_free(t, 0);
        }
        static deserialize(t) {
            const e = i.contractoperation_deserialize(t);
            if (e[2]) throw s(e[1]);
            return j.__wrap(e[0]);
        }
        get verifierKey() {
            const t = i.contractoperation_verifier_key(this.__wbg_ptr);
            if (t[2]) throw s(t[1]);
            return s(t[0]);
        }
        set verifierKey(t) {
            const e = i.contractoperation_set_verifier_key(this.__wbg_ptr, t);
            if (e[1]) throw s(e[0]);
        }
        constructor(){
            const t = i.contractoperation_new();
            if (t[2]) throw s(t[1]);
            return this.__wbg_ptr = t[0] >>> 0, Y.register(this, this.__wbg_ptr, this), this;
        }
        serialize() {
            const t = i.contractoperation_serialize(this.__wbg_ptr);
            if (t[2]) throw s(t[1]);
            return s(t[0]);
        }
        toString(t) {
            let e, n;
            try {
                const _ = i.contractoperation_toString(this.__wbg_ptr, d(t) ? 16777215 : t ? 1 : 0);
                return e = _[0], n = _[1], g(_[0], _[1]);
            } finally{
                i.__wbindgen_free(e, n, 1);
            }
        }
    };
    Symbol.dispose && (j.prototype[Symbol.dispose] = j.prototype.free);
    const J = typeof FinalizationRegistry > "u" ? {
        register: ()=>{},
        unregister: ()=>{}
    } : new FinalizationRegistry((r)=>i.__wbg_contractstate_free(r >>> 0, 1));
    M = class {
        static __wrap(t) {
            t = t >>> 0;
            const e = Object.create(M.prototype);
            return e.__wbg_ptr = t, J.register(e, e.__wbg_ptr, e), e;
        }
        __destroy_into_raw() {
            const t = this.__wbg_ptr;
            return this.__wbg_ptr = 0, J.unregister(this), t;
        }
        free() {
            const t = this.__destroy_into_raw();
            i.__wbg_contractstate_free(t, 0);
        }
        operations() {
            const t = i.contractstate_operations(this.__wbg_ptr);
            var e = bt(t[0], t[1]).slice();
            return i.__wbindgen_free(t[0], t[1] * 4, 4), e;
        }
        static deserialize(t) {
            const e = i.contractstate_deserialize(t);
            if (e[2]) throw s(e[1]);
            return M.__wrap(e[0]);
        }
        set balance(t) {
            const e = i.contractstate_set_balance(this.__wbg_ptr, t);
            if (e[1]) throw s(e[0]);
        }
        setOperation(t, e) {
            y(e, j);
            const n = i.contractstate_setOperation(this.__wbg_ptr, t, e.__wbg_ptr);
            if (n[1]) throw s(n[0]);
        }
        get maintenanceAuthority() {
            const t = i.contractstate_maintenance_authority(this.__wbg_ptr);
            return R.__wrap(t);
        }
        set maintenanceAuthority(t) {
            y(t, R), i.contractstate_set_maintenance_authority(this.__wbg_ptr, t.__wbg_ptr);
        }
        constructor(){
            const t = i.contractstate_new();
            return this.__wbg_ptr = t >>> 0, J.register(this, this.__wbg_ptr, this), this;
        }
        get data() {
            const t = i.contractstate_data(this.__wbg_ptr);
            return A.__wrap(t);
        }
        query(t, e) {
            y(e, I);
            const n = i.contractstate_query(this.__wbg_ptr, t, e.__wbg_ptr);
            if (n[2]) throw s(n[1]);
            return s(n[0]);
        }
        get balance() {
            const t = i.contractstate_balance(this.__wbg_ptr);
            if (t[2]) throw s(t[1]);
            return s(t[0]);
        }
        set data(t) {
            y(t, A), i.contractstate_set_data(this.__wbg_ptr, t.__wbg_ptr);
        }
        operation(t) {
            const e = i.contractstate_operation(this.__wbg_ptr, t);
            if (e[2]) throw s(e[1]);
            return e[0] === 0 ? void 0 : j.__wrap(e[0]);
        }
        serialize() {
            const t = i.contractstate_serialize(this.__wbg_ptr);
            if (t[2]) throw s(t[1]);
            return s(t[0]);
        }
        toString(t) {
            let e, n;
            try {
                const _ = i.contractstate_toString(this.__wbg_ptr, d(t) ? 16777215 : t ? 1 : 0);
                return e = _[0], n = _[1], g(_[0], _[1]);
            } finally{
                i.__wbindgen_free(e, n, 1);
            }
        }
    };
    Symbol.dispose && (M.prototype[Symbol.dispose] = M.prototype.free);
    const X = typeof FinalizationRegistry > "u" ? {
        register: ()=>{},
        unregister: ()=>{}
    } : new FinalizationRegistry((r)=>i.__wbg_costmodel_free(r >>> 0, 1));
    I = class {
        static __wrap(t) {
            t = t >>> 0;
            const e = Object.create(I.prototype);
            return e.__wbg_ptr = t, X.register(e, e.__wbg_ptr, e), e;
        }
        __destroy_into_raw() {
            const t = this.__wbg_ptr;
            return this.__wbg_ptr = 0, X.unregister(this), t;
        }
        free() {
            const t = this.__destroy_into_raw();
            i.__wbg_costmodel_free(t, 0);
        }
        static initialCostModel() {
            const t = i.costmodel_initialCostModel();
            return I.__wrap(t);
        }
        constructor(){
            const t = i.costmodel_new();
            if (t[2]) throw s(t[1]);
            return this.__wbg_ptr = t[0] >>> 0, X.register(this, this.__wbg_ptr, this), this;
        }
        toString(t) {
            let e, n;
            try {
                const _ = i.costmodel_toString(this.__wbg_ptr, d(t) ? 16777215 : t ? 1 : 0);
                return e = _[0], n = _[1], g(_[0], _[1]);
            } finally{
                i.__wbindgen_free(e, n, 1);
            }
        }
    };
    Symbol.dispose && (I.prototype[Symbol.dispose] = I.prototype.free);
    typeof FinalizationRegistry > "u" || new FinalizationRegistry((r)=>i.__wbg_intounderlyingbytesource_free(r >>> 0, 1));
    typeof FinalizationRegistry > "u" || new FinalizationRegistry((r)=>i.__wbg_intounderlyingsink_free(r >>> 0, 1));
    typeof FinalizationRegistry > "u" || new FinalizationRegistry((r)=>i.__wbg_intounderlyingsource_free(r >>> 0, 1));
    const Z = typeof FinalizationRegistry > "u" ? {
        register: ()=>{},
        unregister: ()=>{}
    } : new FinalizationRegistry((r)=>i.__wbg_querycontext_free(r >>> 0, 1));
    O = class {
        static __wrap(t) {
            t = t >>> 0;
            const e = Object.create(O.prototype);
            return e.__wbg_ptr = t, Z.register(e, e.__wbg_ptr, e), e;
        }
        __destroy_into_raw() {
            const t = this.__wbg_ptr;
            return this.__wbg_ptr = 0, Z.unregister(this), t;
        }
        free() {
            const t = this.__destroy_into_raw();
            i.__wbg_querycontext_free(t, 0);
        }
        get comIndices() {
            const t = i.querycontext_com_indices(this.__wbg_ptr);
            if (t[2]) throw s(t[1]);
            return s(t[0]);
        }
        set effects(t) {
            const e = i.querycontext_set_effects(this.__wbg_ptr, t);
            if (e[1]) throw s(e[0]);
        }
        toVmStack() {
            const t = i.querycontext_toVmStack(this.__wbg_ptr);
            return L.__wrap(t);
        }
        runTranscript(t, e) {
            y(e, I);
            const n = i.querycontext_runTranscript(this.__wbg_ptr, t, e.__wbg_ptr);
            if (n[2]) throw s(n[1]);
            return O.__wrap(n[0]);
        }
        insertCommitment(t, e) {
            const n = q(t, i.__wbindgen_malloc, i.__wbindgen_realloc), _ = S, o = i.querycontext_insertCommitment(this.__wbg_ptr, n, _, e);
            if (o[2]) throw s(o[1]);
            return O.__wrap(o[0]);
        }
        constructor(t, e){
            y(t, A);
            const n = q(e, i.__wbindgen_malloc, i.__wbindgen_realloc), _ = S, o = i.querycontext_new(t.__wbg_ptr, n, _);
            if (o[2]) throw s(o[1]);
            return this.__wbg_ptr = o[0] >>> 0, Z.register(this, this.__wbg_ptr, this), this;
        }
        get block() {
            const t = i.querycontext_block(this.__wbg_ptr);
            if (t[2]) throw s(t[1]);
            return s(t[0]);
        }
        query(t, e, n) {
            y(e, I);
            const _ = i.querycontext_query(this.__wbg_ptr, t, e.__wbg_ptr, n);
            if (_[2]) throw s(_[1]);
            return B.__wrap(_[0]);
        }
        get state() {
            const t = i.querycontext_state(this.__wbg_ptr);
            return A.__wrap(t);
        }
        get address() {
            let t, e;
            try {
                const o = i.querycontext_address(this.__wbg_ptr);
                var n = o[0], _ = o[1];
                if (o[3]) throw n = 0, _ = 0, s(o[2]);
                return t = n, e = _, g(n, _);
            } finally{
                i.__wbindgen_free(t, e, 1);
            }
        }
        get effects() {
            const t = i.querycontext_effects(this.__wbg_ptr);
            if (t[2]) throw s(t[1]);
            return s(t[0]);
        }
        qualify(t) {
            const e = i.querycontext_qualify(this.__wbg_ptr, t);
            if (e[2]) throw s(e[1]);
            return s(e[0]);
        }
        set block(t) {
            const e = i.querycontext_set_block(this.__wbg_ptr, t);
            if (e[1]) throw s(e[0]);
        }
        toString(t) {
            let e, n;
            try {
                const _ = i.querycontext_toString(this.__wbg_ptr, d(t) ? 16777215 : t ? 1 : 0);
                return e = _[0], n = _[1], g(_[0], _[1]);
            } finally{
                i.__wbindgen_free(e, n, 1);
            }
        }
    };
    Symbol.dispose && (O.prototype[Symbol.dispose] = O.prototype.free);
    const tt = typeof FinalizationRegistry > "u" ? {
        register: ()=>{},
        unregister: ()=>{}
    } : new FinalizationRegistry((r)=>i.__wbg_queryresults_free(r >>> 0, 1));
    class B {
        static __wrap(t) {
            t = t >>> 0;
            const e = Object.create(B.prototype);
            return e.__wbg_ptr = t, tt.register(e, e.__wbg_ptr, e), e;
        }
        __destroy_into_raw() {
            const t = this.__wbg_ptr;
            return this.__wbg_ptr = 0, tt.unregister(this), t;
        }
        free() {
            const t = this.__destroy_into_raw();
            i.__wbg_queryresults_free(t, 0);
        }
        constructor(){
            const t = i.queryresults_new();
            if (t[2]) throw s(t[1]);
            return this.__wbg_ptr = t[0] >>> 0, tt.register(this, this.__wbg_ptr, this), this;
        }
        get events() {
            const t = i.queryresults_events(this.__wbg_ptr);
            if (t[2]) throw s(t[1]);
            return s(t[0]);
        }
        get context() {
            const t = i.queryresults_context(this.__wbg_ptr);
            return O.__wrap(t);
        }
        get gasCost() {
            const t = i.queryresults_gas_cost(this.__wbg_ptr);
            if (t[2]) throw s(t[1]);
            return s(t[0]);
        }
        toString(t) {
            let e, n;
            try {
                const _ = i.queryresults_toString(this.__wbg_ptr, d(t) ? 16777215 : t ? 1 : 0);
                return e = _[0], n = _[1], g(_[0], _[1]);
            } finally{
                i.__wbindgen_free(e, n, 1);
            }
        }
    }
    Symbol.dispose && (B.prototype[Symbol.dispose] = B.prototype.free);
    const et = typeof FinalizationRegistry > "u" ? {
        register: ()=>{},
        unregister: ()=>{}
    } : new FinalizationRegistry((r)=>i.__wbg_stateboundedmerkletree_free(r >>> 0, 1));
    class x {
        static __wrap(t) {
            t = t >>> 0;
            const e = Object.create(x.prototype);
            return e.__wbg_ptr = t, et.register(e, e.__wbg_ptr, e), e;
        }
        __destroy_into_raw() {
            const t = this.__wbg_ptr;
            return this.__wbg_ptr = 0, et.unregister(this), t;
        }
        free() {
            const t = this.__destroy_into_raw();
            i.__wbg_stateboundedmerkletree_free(t, 0);
        }
        pathForLeaf(t, e) {
            const n = i.stateboundedmerkletree_pathForLeaf(this.__wbg_ptr, t, e);
            if (n[2]) throw s(n[1]);
            return s(n[0]);
        }
        findPathForLeaf(t) {
            const e = i.stateboundedmerkletree_findPathForLeaf(this.__wbg_ptr, t);
            if (e[2]) throw s(e[1]);
            return s(e[0]);
        }
        root() {
            const t = i.stateboundedmerkletree_root(this.__wbg_ptr);
            if (t[2]) throw s(t[1]);
            return s(t[0]);
        }
        constructor(t){
            const e = i.stateboundedmerkletree_blank(t);
            return this.__wbg_ptr = e >>> 0, et.register(this, this.__wbg_ptr, this), this;
        }
        get height() {
            return i.stateboundedmerkletree_height(this.__wbg_ptr);
        }
        rehash() {
            const t = i.stateboundedmerkletree_rehash(this.__wbg_ptr);
            return x.__wrap(t);
        }
        update(t, e) {
            const n = i.stateboundedmerkletree_update(this.__wbg_ptr, t, e);
            if (n[2]) throw s(n[1]);
            return x.__wrap(n[0]);
        }
        collapse(t, e) {
            const n = i.stateboundedmerkletree_collapse(this.__wbg_ptr, t, e);
            return x.__wrap(n);
        }
        toString(t) {
            let e, n;
            try {
                const _ = i.stateboundedmerkletree_toString(this.__wbg_ptr, d(t) ? 16777215 : t ? 1 : 0);
                return e = _[0], n = _[1], g(_[0], _[1]);
            } finally{
                i.__wbindgen_free(e, n, 1);
            }
        }
    }
    Symbol.dispose && (x.prototype[Symbol.dispose] = x.prototype.free);
    const rt = typeof FinalizationRegistry > "u" ? {
        register: ()=>{},
        unregister: ()=>{}
    } : new FinalizationRegistry((r)=>i.__wbg_statemap_free(r >>> 0, 1));
    class k {
        static __wrap(t) {
            t = t >>> 0;
            const e = Object.create(k.prototype);
            return e.__wbg_ptr = t, rt.register(e, e.__wbg_ptr, e), e;
        }
        __destroy_into_raw() {
            const t = this.__wbg_ptr;
            return this.__wbg_ptr = 0, rt.unregister(this), t;
        }
        free() {
            const t = this.__destroy_into_raw();
            i.__wbg_statemap_free(t, 0);
        }
        get(t) {
            const e = i.statemap_get(this.__wbg_ptr, t);
            if (e[2]) throw s(e[1]);
            return e[0] === 0 ? void 0 : w.__wrap(e[0]);
        }
        constructor(){
            const t = i.statemap_new();
            return this.__wbg_ptr = t >>> 0, rt.register(this, this.__wbg_ptr, this), this;
        }
        keys() {
            const t = i.statemap_keys(this.__wbg_ptr);
            if (t[3]) throw s(t[2]);
            var e = bt(t[0], t[1]).slice();
            return i.__wbindgen_free(t[0], t[1] * 4, 4), e;
        }
        insert(t, e) {
            y(e, w);
            const n = i.statemap_insert(this.__wbg_ptr, t, e.__wbg_ptr);
            if (n[2]) throw s(n[1]);
            return k.__wrap(n[0]);
        }
        remove(t) {
            const e = i.statemap_remove(this.__wbg_ptr, t);
            if (e[2]) throw s(e[1]);
            return k.__wrap(e[0]);
        }
        toString(t) {
            let e, n;
            try {
                const _ = i.statemap_toString(this.__wbg_ptr, d(t) ? 16777215 : t ? 1 : 0);
                return e = _[0], n = _[1], g(_[0], _[1]);
            } finally{
                i.__wbindgen_free(e, n, 1);
            }
        }
    }
    Symbol.dispose && (k.prototype[Symbol.dispose] = k.prototype.free);
    const nt = typeof FinalizationRegistry > "u" ? {
        register: ()=>{},
        unregister: ()=>{}
    } : new FinalizationRegistry((r)=>i.__wbg_statevalue_free(r >>> 0, 1));
    w = class {
        static __wrap(t) {
            t = t >>> 0;
            const e = Object.create(w.prototype);
            return e.__wbg_ptr = t, nt.register(e, e.__wbg_ptr, e), e;
        }
        __destroy_into_raw() {
            const t = this.__wbg_ptr;
            return this.__wbg_ptr = 0, nt.unregister(this), t;
        }
        free() {
            const t = this.__destroy_into_raw();
            i.__wbg_statevalue_free(t, 0);
        }
        arrayPush(t) {
            y(t, w);
            const e = i.statevalue_arrayPush(this.__wbg_ptr, t.__wbg_ptr);
            if (e[2]) throw s(e[1]);
            return w.__wrap(e[0]);
        }
        asBoundedMerkleTree() {
            const t = i.statevalue_asBoundedMerkleTree(this.__wbg_ptr);
            if (t[2]) throw s(t[1]);
            return t[0] === 0 ? void 0 : x.__wrap(t[0]);
        }
        static newBoundedMerkleTree(t) {
            y(t, x);
            const e = i.statevalue_newBoundedMerkleTree(t.__wbg_ptr);
            return w.__wrap(e);
        }
        constructor(){
            const t = i.statevalue_new();
            if (t[2]) throw s(t[1]);
            return this.__wbg_ptr = t[0] >>> 0, nt.register(this, this.__wbg_ptr, this), this;
        }
        type() {
            let t, e;
            try {
                const n = i.statevalue_type(this.__wbg_ptr);
                return t = n[0], e = n[1], g(n[0], n[1]);
            } finally{
                i.__wbindgen_free(t, e, 1);
            }
        }
        asMap() {
            const t = i.statevalue_asMap(this.__wbg_ptr);
            if (t[2]) throw s(t[1]);
            return t[0] === 0 ? void 0 : k.__wrap(t[0]);
        }
        static decode(t) {
            const e = i.statevalue_decode(t);
            if (e[2]) throw s(e[1]);
            return w.__wrap(e[0]);
        }
        encode() {
            const t = i.statevalue_encode(this.__wbg_ptr);
            if (t[2]) throw s(t[1]);
            return s(t[0]);
        }
        asCell() {
            const t = i.statevalue_asCell(this.__wbg_ptr);
            if (t[2]) throw s(t[1]);
            return s(t[0]);
        }
        static newMap(t) {
            y(t, k);
            const e = i.statevalue_newMap(t.__wbg_ptr);
            return w.__wrap(e);
        }
        asArray() {
            const t = i.statevalue_asArray(this.__wbg_ptr);
            if (t[3]) throw s(t[2]);
            let e;
            return t[0] !== 0 && (e = bt(t[0], t[1]).slice(), i.__wbindgen_free(t[0], t[1] * 4, 4)), e;
        }
        logSize() {
            return i.statevalue_logSize(this.__wbg_ptr) >>> 0;
        }
        static newCell(t) {
            const e = i.statevalue_newCell(t);
            if (e[2]) throw s(e[1]);
            return w.__wrap(e[0]);
        }
        static newNull() {
            const t = i.statevalue_newNull();
            return w.__wrap(t);
        }
        static newArray() {
            const t = i.statevalue_newArray();
            return w.__wrap(t);
        }
        toString(t) {
            let e, n;
            try {
                const _ = i.statevalue_toString(this.__wbg_ptr, d(t) ? 16777215 : t ? 1 : 0);
                return e = _[0], n = _[1], g(_[0], _[1]);
            } finally{
                i.__wbindgen_free(e, n, 1);
            }
        }
    };
    Symbol.dispose && (w.prototype[Symbol.dispose] = w.prototype.free);
    typeof FinalizationRegistry > "u" || new FinalizationRegistry((r)=>i.__wbg_vmresults_free(r >>> 0, 1));
    const _t = typeof FinalizationRegistry > "u" ? {
        register: ()=>{},
        unregister: ()=>{}
    } : new FinalizationRegistry((r)=>i.__wbg_vmstack_free(r >>> 0, 1));
    class L {
        static __wrap(t) {
            t = t >>> 0;
            const e = Object.create(L.prototype);
            return e.__wbg_ptr = t, _t.register(e, e.__wbg_ptr, e), e;
        }
        __destroy_into_raw() {
            const t = this.__wbg_ptr;
            return this.__wbg_ptr = 0, _t.unregister(this), t;
        }
        free() {
            const t = this.__destroy_into_raw();
            i.__wbg_vmstack_free(t, 0);
        }
        removeLast() {
            i.vmstack_removeLast(this.__wbg_ptr);
        }
        get(t) {
            const e = i.vmstack_get(this.__wbg_ptr, t);
            return e === 0 ? void 0 : w.__wrap(e);
        }
        constructor(){
            const t = i.vmstack_new();
            return this.__wbg_ptr = t >>> 0, _t.register(this, this.__wbg_ptr, this), this;
        }
        push(t, e) {
            y(t, w), i.vmstack_push(this.__wbg_ptr, t.__wbg_ptr, e);
        }
        length() {
            return i.vmstack_length(this.__wbg_ptr) >>> 0;
        }
        isStrong(t) {
            const e = i.vmstack_isStrong(this.__wbg_ptr, t);
            return e === 16777215 ? void 0 : e !== 0;
        }
        toString(t) {
            let e, n;
            try {
                const _ = i.vmstack_toString(this.__wbg_ptr, d(t) ? 16777215 : t ? 1 : 0);
                return e = _[0], n = _[1], g(_[0], _[1]);
            } finally{
                i.__wbindgen_free(e, n, 1);
            }
        }
    }
    Symbol.dispose && (L.prototype[Symbol.dispose] = L.prototype.free);
    function Kt() {
        return h(function(r) {
            return BigInt(r);
        }, arguments);
    }
    function Vt(r) {
        return BigInt(r);
    }
    function Nt(r, t) {
        return Error(g(r, t));
    }
    function Wt(r) {
        return Number(r);
    }
    function Gt(r, t) {
        const e = String(t), n = q(e, i.__wbindgen_malloc, i.__wbindgen_realloc), _ = S;
        m().setInt32(r + 4 * 1, _, !0), m().setInt32(r + 4 * 0, n, !0);
    }
    function Ht(r) {
        return r.buffer;
    }
    function Qt(r) {
        const t = r.byobRequest;
        return d(t) ? 0 : z(t);
    }
    function Yt(r) {
        return r.byteLength;
    }
    function Jt(r) {
        return r.byteOffset;
    }
    function Xt() {
        return h(function(r, t) {
            return r.call(t);
        }, arguments);
    }
    function Zt() {
        return h(function(r, t, e) {
            return r.call(t, e);
        }, arguments);
    }
    function te() {
        return h(function(r) {
            r.close();
        }, arguments);
    }
    function ee() {
        return h(function(r) {
            r.close();
        }, arguments);
    }
    function re(r) {
        return M.__wrap(r);
    }
    function ne(r) {
        return r.crypto;
    }
    function _e(r) {
        return r.done;
    }
    function ie() {
        return h(function(r, t) {
            r.enqueue(t);
        }, arguments);
    }
    function oe(r) {
        return Object.entries(r);
    }
    function se(r) {
        return Array.from(r);
    }
    function ce() {
        return h(function(r, t) {
            r.getRandomValues(t);
        }, arguments);
    }
    function ae(r, t) {
        return r[t >>> 0];
    }
    function ue() {
        return h(function(r, t) {
            return Reflect.get(r, t);
        }, arguments);
    }
    function fe(r, t) {
        return r.get(t);
    }
    function be(r, t) {
        return r[t];
    }
    function de(r) {
        let t;
        try {
            t = r instanceof ArrayBuffer;
        } catch  {
            t = !1;
        }
        return t;
    }
    function ge(r) {
        let t;
        try {
            t = r instanceof Map;
        } catch  {
            t = !1;
        }
        return t;
    }
    function le(r) {
        let t;
        try {
            t = r instanceof Uint8Array;
        } catch  {
            t = !1;
        }
        return t;
    }
    function we(r) {
        return Array.isArray(r);
    }
    function pe(r) {
        return Number.isSafeInteger(r);
    }
    function ye() {
        return Symbol.iterator;
    }
    function he(r) {
        return r.keys();
    }
    function me(r) {
        return r.length;
    }
    function ve(r) {
        return r.length;
    }
    function Se(r) {
        return r.msCrypto;
    }
    function Fe() {
        return new Object;
    }
    function xe() {
        return new Array;
    }
    function ke(r, t) {
        try {
            var e = {
                a: r,
                b: t
            }, n = (o, c)=>{
                const u = e.a;
                e.a = 0;
                try {
                    return Dt(u, e.b, o, c);
                } finally{
                    e.a = u;
                }
            };
            return new Promise(n);
        } finally{
            e.a = e.b = 0;
        }
    }
    function qe() {
        return new Map;
    }
    function Ae(r) {
        return new Uint8Array(r);
    }
    function Ie(r, t) {
        return new Error(g(r, t));
    }
    function ze(r, t) {
        return new Uint8Array(N(r, t));
    }
    function Ce(r, t) {
        return new Function(g(r, t));
    }
    function Te(r, t, e) {
        return new Uint8Array(r, t >>> 0, e >>> 0);
    }
    function Oe(r) {
        return new Uint8Array(r >>> 0);
    }
    function Re(r) {
        return r.next;
    }
    function je() {
        return h(function(r) {
            return r.next();
        }, arguments);
    }
    function Ee(r) {
        return r.node;
    }
    function Me(r) {
        return r.process;
    }
    function Pe(r, t, e) {
        Uint8Array.prototype.set.call(N(r, t), e);
    }
    function Ue(r, t) {
        return r.push(t);
    }
    function Be(r) {
        queueMicrotask(r);
    }
    function Le(r) {
        return r.queueMicrotask;
    }
    function $e() {
        return h(function(r, t) {
            r.randomFillSync(t);
        }, arguments);
    }
    function De() {
        return h(function() {
            return module.require;
        }, arguments);
    }
    function Ke(r) {
        return Promise.resolve(r);
    }
    function Ve() {
        return h(function(r, t) {
            r.respond(t >>> 0);
        }, arguments);
    }
    function Ne(r, t, e) {
        r.set(N(t, e));
    }
    function We(r, t, e) {
        r[t] = e;
    }
    function Ge(r, t, e) {
        r[t >>> 0] = e;
    }
    function He(r, t, e) {
        return r.set(t, e);
    }
    function Qe(r) {
        return w.__wrap(r);
    }
    function Ye() {
        const r = typeof global > "u" ? null : global;
        return d(r) ? 0 : z(r);
    }
    function Je() {
        const r = typeof globalThis > "u" ? null : globalThis;
        return d(r) ? 0 : z(r);
    }
    function Xe() {
        const r = typeof self > "u" ? null : self;
        return d(r) ? 0 : z(r);
    }
    function Ze() {
        const r = typeof window > "u" ? null : window;
        return d(r) ? 0 : z(r);
    }
    function tr(r, t, e) {
        return r.subarray(t >>> 0, e >>> 0);
    }
    function er(r, t) {
        return r.then(t);
    }
    function rr() {
        return h(function(r, t) {
            return r.toString(t);
        }, arguments);
    }
    function nr(r) {
        return r.toString();
    }
    function _r(r) {
        return r.value;
    }
    function ir(r) {
        return r.versions;
    }
    function or(r) {
        const t = r.view;
        return d(t) ? 0 : z(t);
    }
    function sr(r, t) {
        const e = t, n = typeof e == "bigint" ? e : void 0;
        m().setBigInt64(r + 8 * 1, d(n) ? BigInt(0) : n, !0), m().setInt32(r + 4 * 0, !d(n), !0);
    }
    function cr(r) {
        const t = r, e = typeof t == "boolean" ? t : void 0;
        return d(e) ? 16777215 : e ? 1 : 0;
    }
    function ar(r) {
        const t = r.original;
        return t.cnt-- == 1 ? (t.a = 0, !0) : !1;
    }
    function ur(r, t) {
        const e = at(t), n = q(e, i.__wbindgen_malloc, i.__wbindgen_realloc), _ = S;
        m().setInt32(r + 4 * 1, _, !0), m().setInt32(r + 4 * 0, n, !0);
    }
    function fr(r, t) {
        return r in t;
    }
    function br(r) {
        return typeof r == "bigint";
    }
    function dr(r) {
        return typeof r == "function";
    }
    function gr(r) {
        return r === null;
    }
    function lr(r) {
        const t = r;
        return typeof t == "object" && t !== null;
    }
    function wr(r) {
        return typeof r == "string";
    }
    function pr(r) {
        return r === void 0;
    }
    function yr(r, t) {
        return r === t;
    }
    function hr(r, t) {
        return r == t;
    }
    function mr(r, t) {
        const e = t, n = typeof e == "number" ? e : void 0;
        m().setFloat64(r + 8 * 1, d(n) ? 0 : n, !0), m().setInt32(r + 4 * 0, !d(n), !0);
    }
    function vr(r, t) {
        return r >> t;
    }
    function Sr(r, t) {
        const e = t, n = typeof e == "string" ? e : void 0;
        var _ = d(n) ? 0 : q(n, i.__wbindgen_malloc, i.__wbindgen_realloc), o = S;
        m().setInt32(r + 4 * 1, o, !0), m().setInt32(r + 4 * 0, _, !0);
    }
    function Fr(r, t) {
        throw new Error(g(r, t));
    }
    function xr(r, t) {
        return g(r, t);
    }
    function kr(r) {
        return BigInt.asUintN(64, r);
    }
    function qr(r) {
        return r;
    }
    function Ar(r, t) {
        return Ut(r, t, 689, $t);
    }
    function Ir(r, t) {
        return N(r, t);
    }
    function zr(r) {
        return r;
    }
    function Cr(r, t) {
        return BigInt.asUintN(64, r) | BigInt.asUintN(64, t) << BigInt(64);
    }
    function Tr() {
        const r = i.__wbindgen_export_2, t = r.grow(4);
        r.set(0, void 0), r.set(t + 0, void 0), r.set(t + 1, null), r.set(t + 2, !0), r.set(t + 3, !1);
    }
    URL = globalThis.URL;
    const Or = await vt({
        "./midnight_onchain_runtime_wasm_bg.js": {
            __wbg_statevalue_new: Qe,
            __wbg_contractstate_new: re,
            __wbg_getwithrefkey_1dc361bd10053bfe: be,
            __wbg_set_3f1d0b984ed272ed: We,
            __wbg_String_8f0eb39a4a4c2f66: Gt,
            __wbg_queueMicrotask_25d0739ac89e8c88: Be,
            __wbg_queueMicrotask_4488407636f5bf24: Le,
            __wbg_respond_6c2c4e20ef85138e: Ve,
            __wbg_view_91cc97d57ab30530: or,
            __wbg_byobRequest_2c036bceca1e6037: Qt,
            __wbg_close_cccada6053ee3a65: te,
            __wbg_enqueue_452bc2343d1c2ff9: ie,
            __wbg_close_d71a78219dc23e91: ee,
            __wbg_crypto_86f2631e91b51511: ne,
            __wbg_process_3975fd6c72f520aa: Me,
            __wbg_versions_4e31226f5e8dc909: ir,
            __wbg_node_e1f24f89a7336c2e: Ee,
            __wbg_require_b74f47fc2d022fd6: De,
            __wbg_msCrypto_d562bbe83e0d4b91: Se,
            __wbg_getRandomValues_b3f15fcbfabb0f8b: ce,
            __wbg_randomFillSync_f8c153b79f285817: $e,
            __wbg_byteLength_331a6b5545834024: Yt,
            __wbg_byteOffset_49a5b5608000358b: Jt,
            __wbg_newfromslice_074c56947bd43469: ze,
            __wbg_newwithlength_a167dcc7aaa3ba77: Oe,
            __wbg_newwithbyteoffsetandlength_e8f53910b4d42b45: Te,
            __wbg_new_638ebfaedbf32a5e: Ae,
            __wbg_buffer_8d40b1d762fb3c66: Ht,
            __wbg_length_6bb7e81f9d7713e4: ve,
            __wbg_prototypesetcall_3d4a26c1ed734349: Pe,
            __wbg_subarray_70fd07feefe14294: tr,
            __wbg_set_1353b2a5e96bc48c: Ne,
            __wbg_BigInt_40a77d45cca49470: Kt,
            __wbg_done_75ed0ee6dd243d9d: _e,
            __wbg_value_dd9372230531eade: _r,
            __wbg_instanceof_Map_ebb01a5b6b5ffd0b: ge,
            __wbg_instanceof_Uint8Array_9a8378d955933db7: le,
            __wbg_instanceof_ArrayBuffer_67f3012529f6a2dd: de,
            __wbg_BigInt_6adbfd8eb0f7ec07: Vt,
            __wbg_get_5ee3191755594360: fe,
            __wbg_new_2ff1f68f3676ea53: qe,
            __wbg_set_b7f1cf4fae26fe2a: He,
            __wbg_keys_822161a7faf55538: he,
            __wbg_get_0da715ceaecea5c8: ae,
            __wbg_new_1f3a344cf3123716: xe,
            __wbg_set_90f6c0f7bd8c0415: Ge,
            __wbg_from_88bc52ce20ba6318: se,
            __wbg_push_330b2eb93e4e1212: Ue,
            __wbg_length_186546c51cd61acd: me,
            __wbg_isArray_030cce220591fb41: we,
            __wbg_new_da9dc54c5db29dfa: Ie,
            __wbg_toString_d8f537919ef401d6: nr,
            __wbg_toString_7268338f40012a03: rr,
            __wbg_isSafeInteger_1c0d1af5542e102a: pe,
            __wbg_new_19c25a3f2fa63a02: Fe,
            __wbg_entries_2be2f15bd5554996: oe,
            __wbg_iterator_f370b34483c71a1c: ye,
            __wbg_static_accessor_GLOBAL_THIS_f0a4409105898184: Je,
            __wbg_static_accessor_SELF_995b214ae681ff99: Xe,
            __wbg_static_accessor_GLOBAL_8921f820c2ce3f12: Ye,
            __wbg_static_accessor_WINDOW_cde3890479c675ea: Ze,
            __wbg_new_2e3c58a15f39f5f9: ke,
            __wbg_then_e22500defe16819f: er,
            __wbg_resolve_4055c623acdd6a1b: Ke,
            __wbg_get_458e874b43b18b25: ue,
            __wbg_newnoargs_254190557c45b4ec: Ce,
            __wbg_call_13410aac570ffff7: Xt,
            __wbg_call_a5400b25a865cfd8: Zt,
            __wbg_next_5b3530e612fde77d: Re,
            __wbg_next_692e82279131b03c: je,
            __wbg_wbindgenin_d7a1ee10933d2d55: fr,
            __wbg_wbindgenshr_7d2aae6044c0dab1: vr,
            __wbg_wbindgenthrow_451ec1a8469d7eb6: Fr,
            __wbg_wbindgencbdrop_eb10308566512b88: ar,
            __wbg_wbindgenisnull_f3037694abe4d97a: gr,
            __wbg_wbindgenjsvaleq_e6f2ad59ccae1b58: yr,
            __wbg_Number_998bea33bd87c3e0: Wt,
            __wbg_Error_e17e777aac105295: Nt,
            __wbg_wbindgenisbigint_ecb90cc08a5a9154: br,
            __wbg_wbindgenisobject_307a53c6bd97fbf8: lr,
            __wbg_wbindgenisstring_d4fa939789f003b0: wr,
            __wbg_wbindgennumberget_f74b4c7525ac05cb: mr,
            __wbg_wbindgenstringget_0f16a6ddddef376f: Sr,
            __wbg_wbindgenbooleanget_3fe6f642c7d97746: cr,
            __wbg_wbindgenisfunction_8cee7dce3725ae74: dr,
            __wbg_wbindgenisundefined_c4b71d073b92f3c5: pr,
            __wbg_wbindgenjsvallooseeq_9bec8c9be826bed1: hr,
            __wbg_wbindgenbigintgetasi64_ac743ece6ab9bba1: sr,
            __wbg_wbindgendebugstring_99ef257a3ddda34d: ur,
            __wbindgen_init_externref_table: Tr,
            __wbindgen_cast_e7b45dd881f38ce3: Cr,
            __wbindgen_cast_2241b6af4c4b2941: xr,
            __wbindgen_cast_9ae0607507abb057: qr,
            __wbindgen_cast_4625c577ab2ec9ee: kr,
            __wbindgen_cast_9f23747c70687cbf: Ar,
            __wbindgen_cast_cb9088102bce6b30: Ir,
            __wbindgen_cast_d6cd19b81560fd6e: zr
        }
    }, jt), { memory: Rr, __wbg_chargedstate_free: jr, __wbg_contractmaintenanceauthority_free: Er, __wbg_contractoperation_free: Mr, __wbg_contractstate_free: Pr, __wbg_costmodel_free: Ur, __wbg_querycontext_free: Br, __wbg_queryresults_free: Lr, __wbg_stateboundedmerkletree_free: $r, __wbg_statemap_free: Dr, __wbg_statevalue_free: Kr, __wbg_vmresults_free: Vr, __wbg_vmstack_free: Nr, bigIntModFr: Wr, bigIntToValue: Gr, chargedstate_new: Hr, chargedstate_state: Qr, chargedstate_toString: Yr, communicationCommitment: Jr, communicationCommitmentRandomness: Xr, contractmaintenanceauthority_committee: Zr, contractmaintenanceauthority_counter: tn, contractmaintenanceauthority_deserialize: en, contractmaintenanceauthority_new: rn, contractmaintenanceauthority_serialize: nn, contractmaintenanceauthority_threshold: _n, contractmaintenanceauthority_toString: on, contractoperation_deserialize: sn, contractoperation_new: cn, contractoperation_serialize: an, contractoperation_set_verifier_key: un, contractoperation_toString: fn, contractoperation_verifier_key: bn, contractstate_balance: dn, contractstate_data: gn, contractstate_deserialize: ln, contractstate_maintenance_authority: wn, contractstate_new: pn, contractstate_operation: yn, contractstate_operations: hn, contractstate_query: mn, contractstate_serialize: vn, contractstate_setOperation: Sn, contractstate_set_balance: Fn, contractstate_set_data: xn, contractstate_set_maintenance_authority: kn, contractstate_toString: qn, costmodel_initialCostModel: An, costmodel_new: In, costmodel_toString: zn, decodeCoinPublicKey: Cn, decodeContractAddress: Tn, decodeQualifiedShieldedCoinInfo: On, decodeRawTokenType: Rn, decodeShieldedCoinInfo: jn, decodeUserAddress: En, degradeToTransient: Mn, dummyContractAddress: Pn, dummyUserAddress: Un, ecAdd: Bn, ecMul: Ln, ecMulGenerator: $n, encodeCoinPublicKey: Dn, encodeContractAddress: Kn, encodeQualifiedShieldedCoinInfo: Vn, encodeRawTokenType: Nn, encodeShieldedCoinInfo: Wn, encodeUserAddress: Gn, entryPointHash: Hn, hashToCurve: Qn, leafHash: Yn, maxAlignedSize: Jn, maxField: Xn, persistentCommit: Zn, persistentHash: t_, proofDataIntoSerializedPreimage: e_, querycontext_address: r_, querycontext_block: n_, querycontext_com_indices: __, querycontext_effects: i_, querycontext_insertCommitment: o_, querycontext_new: s_, querycontext_qualify: c_, querycontext_query: a_, querycontext_runTranscript: u_, querycontext_set_block: f_, querycontext_set_effects: b_, querycontext_state: d_, querycontext_toString: g_, querycontext_toVmStack: l_, queryresults_context: w_, queryresults_events: p_, queryresults_gas_cost: y_, queryresults_new: h_, queryresults_toString: m_, rawTokenType: v_, runProgram: S_, runtimeCoinCommitment: F_, runtimeCoinNullifier: x_, sampleContractAddress: k_, sampleRawTokenType: q_, sampleSigningKey: A_, sampleUserAddress: I_, signData: z_, signatureVerifyingKey: C_, signingKeyFromBip340: T_, stateboundedmerkletree_blank: O_, stateboundedmerkletree_collapse: R_, stateboundedmerkletree_findPathForLeaf: j_, stateboundedmerkletree_height: E_, stateboundedmerkletree_pathForLeaf: M_, stateboundedmerkletree_rehash: P_, stateboundedmerkletree_root: U_, stateboundedmerkletree_toString: B_, stateboundedmerkletree_update: L_, statemap_get: $_, statemap_insert: D_, statemap_keys: K_, statemap_new: V_, statemap_remove: N_, statemap_toString: W_, statevalue_arrayPush: G_, statevalue_asArray: H_, statevalue_asBoundedMerkleTree: Q_, statevalue_asCell: Y_, statevalue_asMap: J_, statevalue_decode: X_, statevalue_encode: Z_, statevalue_logSize: ti, statevalue_new: ei, statevalue_newArray: ri, statevalue_newBoundedMerkleTree: ni, statevalue_newCell: _i, statevalue_newMap: ii, statevalue_newNull: oi, statevalue_toString: si, statevalue_type: ci, transientCommit: ai, transientHash: ui, upgradeFromTransient: fi, valueToBigInt: bi, verifySignature: di, vmresults_events: gi, vmresults_gas_cost: li, vmresults_new: wi, vmresults_stack: pi, vmresults_toString: yi, vmstack_get: hi, vmstack_isStrong: mi, vmstack_length: vi, vmstack_new: Si, vmstack_push: Fi, vmstack_removeLast: xi, vmstack_toString: ki, __wbg_intounderlyingbytesource_free: qi, __wbg_intounderlyingsink_free: Ai, __wbg_intounderlyingsource_free: Ii, intounderlyingbytesource_autoAllocateChunkSize: zi, intounderlyingbytesource_cancel: Ci, intounderlyingbytesource_pull: Ti, intounderlyingbytesource_start: Oi, intounderlyingbytesource_type: Ri, intounderlyingsink_abort: ji, intounderlyingsink_close: Ei, intounderlyingsink_write: Mi, intounderlyingsource_cancel: Pi, intounderlyingsource_pull: Ui, __wbindgen_exn_store: Bi, __externref_table_alloc: Li, __wbindgen_export_2: $i, __wbindgen_malloc: Di, __wbindgen_realloc: Ki, __wbindgen_export_5: Vi, __externref_table_dealloc: Ni, __wbindgen_free: Wi, __externref_drop_slice: Gi, closure690_externref_shim: Hi, closure730_externref_shim: Qi, __wbindgen_start: yt } = Or, Yi = Object.freeze(Object.defineProperty({
        __proto__: null,
        __externref_drop_slice: Gi,
        __externref_table_alloc: Li,
        __externref_table_dealloc: Ni,
        __wbg_chargedstate_free: jr,
        __wbg_contractmaintenanceauthority_free: Er,
        __wbg_contractoperation_free: Mr,
        __wbg_contractstate_free: Pr,
        __wbg_costmodel_free: Ur,
        __wbg_intounderlyingbytesource_free: qi,
        __wbg_intounderlyingsink_free: Ai,
        __wbg_intounderlyingsource_free: Ii,
        __wbg_querycontext_free: Br,
        __wbg_queryresults_free: Lr,
        __wbg_stateboundedmerkletree_free: $r,
        __wbg_statemap_free: Dr,
        __wbg_statevalue_free: Kr,
        __wbg_vmresults_free: Vr,
        __wbg_vmstack_free: Nr,
        __wbindgen_exn_store: Bi,
        __wbindgen_export_2: $i,
        __wbindgen_export_5: Vi,
        __wbindgen_free: Wi,
        __wbindgen_malloc: Di,
        __wbindgen_realloc: Ki,
        __wbindgen_start: yt,
        bigIntModFr: Wr,
        bigIntToValue: Gr,
        chargedstate_new: Hr,
        chargedstate_state: Qr,
        chargedstate_toString: Yr,
        closure690_externref_shim: Hi,
        closure730_externref_shim: Qi,
        communicationCommitment: Jr,
        communicationCommitmentRandomness: Xr,
        contractmaintenanceauthority_committee: Zr,
        contractmaintenanceauthority_counter: tn,
        contractmaintenanceauthority_deserialize: en,
        contractmaintenanceauthority_new: rn,
        contractmaintenanceauthority_serialize: nn,
        contractmaintenanceauthority_threshold: _n,
        contractmaintenanceauthority_toString: on,
        contractoperation_deserialize: sn,
        contractoperation_new: cn,
        contractoperation_serialize: an,
        contractoperation_set_verifier_key: un,
        contractoperation_toString: fn,
        contractoperation_verifier_key: bn,
        contractstate_balance: dn,
        contractstate_data: gn,
        contractstate_deserialize: ln,
        contractstate_maintenance_authority: wn,
        contractstate_new: pn,
        contractstate_operation: yn,
        contractstate_operations: hn,
        contractstate_query: mn,
        contractstate_serialize: vn,
        contractstate_setOperation: Sn,
        contractstate_set_balance: Fn,
        contractstate_set_data: xn,
        contractstate_set_maintenance_authority: kn,
        contractstate_toString: qn,
        costmodel_initialCostModel: An,
        costmodel_new: In,
        costmodel_toString: zn,
        decodeCoinPublicKey: Cn,
        decodeContractAddress: Tn,
        decodeQualifiedShieldedCoinInfo: On,
        decodeRawTokenType: Rn,
        decodeShieldedCoinInfo: jn,
        decodeUserAddress: En,
        degradeToTransient: Mn,
        dummyContractAddress: Pn,
        dummyUserAddress: Un,
        ecAdd: Bn,
        ecMul: Ln,
        ecMulGenerator: $n,
        encodeCoinPublicKey: Dn,
        encodeContractAddress: Kn,
        encodeQualifiedShieldedCoinInfo: Vn,
        encodeRawTokenType: Nn,
        encodeShieldedCoinInfo: Wn,
        encodeUserAddress: Gn,
        entryPointHash: Hn,
        hashToCurve: Qn,
        intounderlyingbytesource_autoAllocateChunkSize: zi,
        intounderlyingbytesource_cancel: Ci,
        intounderlyingbytesource_pull: Ti,
        intounderlyingbytesource_start: Oi,
        intounderlyingbytesource_type: Ri,
        intounderlyingsink_abort: ji,
        intounderlyingsink_close: Ei,
        intounderlyingsink_write: Mi,
        intounderlyingsource_cancel: Pi,
        intounderlyingsource_pull: Ui,
        leafHash: Yn,
        maxAlignedSize: Jn,
        maxField: Xn,
        memory: Rr,
        persistentCommit: Zn,
        persistentHash: t_,
        proofDataIntoSerializedPreimage: e_,
        querycontext_address: r_,
        querycontext_block: n_,
        querycontext_com_indices: __,
        querycontext_effects: i_,
        querycontext_insertCommitment: o_,
        querycontext_new: s_,
        querycontext_qualify: c_,
        querycontext_query: a_,
        querycontext_runTranscript: u_,
        querycontext_set_block: f_,
        querycontext_set_effects: b_,
        querycontext_state: d_,
        querycontext_toString: g_,
        querycontext_toVmStack: l_,
        queryresults_context: w_,
        queryresults_events: p_,
        queryresults_gas_cost: y_,
        queryresults_new: h_,
        queryresults_toString: m_,
        rawTokenType: v_,
        runProgram: S_,
        runtimeCoinCommitment: F_,
        runtimeCoinNullifier: x_,
        sampleContractAddress: k_,
        sampleRawTokenType: q_,
        sampleSigningKey: A_,
        sampleUserAddress: I_,
        signData: z_,
        signatureVerifyingKey: C_,
        signingKeyFromBip340: T_,
        stateboundedmerkletree_blank: O_,
        stateboundedmerkletree_collapse: R_,
        stateboundedmerkletree_findPathForLeaf: j_,
        stateboundedmerkletree_height: E_,
        stateboundedmerkletree_pathForLeaf: M_,
        stateboundedmerkletree_rehash: P_,
        stateboundedmerkletree_root: U_,
        stateboundedmerkletree_toString: B_,
        stateboundedmerkletree_update: L_,
        statemap_get: $_,
        statemap_insert: D_,
        statemap_keys: K_,
        statemap_new: V_,
        statemap_remove: N_,
        statemap_toString: W_,
        statevalue_arrayPush: G_,
        statevalue_asArray: H_,
        statevalue_asBoundedMerkleTree: Q_,
        statevalue_asCell: Y_,
        statevalue_asMap: J_,
        statevalue_decode: X_,
        statevalue_encode: Z_,
        statevalue_logSize: ti,
        statevalue_new: ei,
        statevalue_newArray: ri,
        statevalue_newBoundedMerkleTree: ni,
        statevalue_newCell: _i,
        statevalue_newMap: ii,
        statevalue_newNull: oi,
        statevalue_toString: si,
        statevalue_type: ci,
        transientCommit: ai,
        transientHash: ui,
        upgradeFromTransient: fi,
        valueToBigInt: bi,
        verifySignature: di,
        vmresults_events: gi,
        vmresults_gas_cost: li,
        vmresults_new: wi,
        vmresults_stack: pi,
        vmresults_toString: yi,
        vmstack_get: hi,
        vmstack_isStrong: mi,
        vmstack_length: vi,
        vmstack_new: Si,
        vmstack_push: Fi,
        vmstack_removeLast: xi,
        vmstack_toString: ki
    }, Symbol.toStringTag, {
        value: "Module"
    }));
    Et(Yi);
    yt();
    po = Lt();
    Bt();
});
export { I as A, A as B, M as C, w as D, ro as E, oo as F, R as G, io as H, _o as I, so as J, j as K, Bt as L, po as M, O as Q, At as S, ut as _, pt as a, T as b, St as c, ft as d, dt as e, V as f, st as g, ot as h, Ft as i, to as j, Zi as k, ct as l, Xi as m, eo as n, Tt as o, Ot as p, no as q, kt as r, fo as s, wo as t, uo as u, co as v, bo as w, lo as x, ao as y, go as z, __tla };
