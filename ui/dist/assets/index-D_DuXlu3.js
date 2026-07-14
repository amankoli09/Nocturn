import { e as x, M as An, m as B, E as ce, n as Tn, o as Gt, v as rn, q as On, P as zt, __tla as __tla_0 } from "./index-D3sxZXAj.js";
import { __tla as __tla_1 } from "./index-IsGXemPy.js";
let xs, L, dr, wc, mc;
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
    })()
]).then(async ()=>{
    function Ls(t) {
        return t instanceof Uint8Array || ArrayBuffer.isView(t) && t.constructor.name === "Uint8Array" && "BYTES_PER_ELEMENT" in t && t.BYTES_PER_ELEMENT === 1;
    }
    function ge(t, e = "") {
        if (typeof t != "number") {
            const n = e && `"${e}" `;
            throw new TypeError(`${n}expected number, got ${typeof t}`);
        }
        if (!Number.isSafeInteger(t) || t < 0) {
            const n = e && `"${e}" `;
            throw new RangeError(`${n}expected integer >= 0, got ${t}`);
        }
    }
    function De(t, e, n = "") {
        const r = Ls(t), s = t?.length;
        if (!r || e !== void 0) {
            const i = n && `"${n}" `, a = "", c = r ? `length=${s}` : `type=${typeof t}`, u = i + "expected Uint8Array" + a + ", got " + c;
            throw r ? new RangeError(u) : new TypeError(u);
        }
        return t;
    }
    function Sr(t) {
        if (typeof t != "function" || typeof t.create != "function") throw new TypeError("Hash must wrapped by utils.createHasher");
        if (ge(t.outputLen), ge(t.blockLen), t.outputLen < 1) throw new Error('"outputLen" must be >= 1');
        if (t.blockLen < 1) throw new Error('"blockLen" must be >= 1');
    }
    function rt(t, e = !0) {
        if (t.destroyed) throw new Error("Hash instance has been destroyed");
        if (e && t.finished) throw new Error("Hash#digest() has already been called");
    }
    function Ar(t, e) {
        De(t, void 0, "digestInto() output");
        const n = e.outputLen;
        if (t.length < n) throw new RangeError('"digestInto() output" expected to be of length >=' + n);
    }
    function Ie(...t) {
        for(let e = 0; e < t.length; e++)t[e].fill(0);
    }
    function et(t) {
        return new DataView(t.buffer, t.byteOffset, t.byteLength);
    }
    function $(t, e) {
        return t << 32 - e | t >>> e;
    }
    const Is = typeof Uint8Array.from([]).toHex == "function" && typeof Uint8Array.fromHex == "function", Ps = Array.from({
        length: 256
    }, (t, e)=>e.toString(16).padStart(2, "0"));
    function Ks(t) {
        if (De(t), Is) return t.toHex();
        let e = "";
        for(let n = 0; n < t.length; n++)e += Ps[t[n]];
        return e;
    }
    function Rs(t) {
        if (typeof t != "string") throw new TypeError("string expected");
        return new Uint8Array(new TextEncoder().encode(t));
    }
    function Ln(t, e = "") {
        return typeof t == "string" ? Rs(t) : De(t, void 0, e);
    }
    function Ns(t, e) {
        if (e !== void 0 && {}.toString.call(e) !== "[object Object]") throw new TypeError("options must be object or undefined");
        return Object.assign(t, e);
    }
    function Bs(t, e = {}) {
        const n = (s, o)=>t(o).update(s).digest(), r = t(void 0);
        return n.outputLen = r.outputLen, n.blockLen = r.blockLen, n.canXOF = r.canXOF, n.create = (s)=>t(s), Object.assign(n, e), Object.freeze(n);
    }
    function Tr(t = 32) {
        ge(t, "bytesLength");
        const e = typeof globalThis == "object" ? globalThis.crypto : null;
        if (typeof e?.getRandomValues != "function") throw new Error("crypto.getRandomValues must be defined");
        if (t > 65536) throw new RangeError(`"bytesLength" expected <= 65536, got ${t}`);
        return e.getRandomValues(new Uint8Array(t));
    }
    const $s = (t)=>({
            oid: Uint8Array.from([
                6,
                9,
                96,
                134,
                72,
                1,
                101,
                3,
                4,
                2,
                t
            ])
        });
    function Vs(t, e, n) {
        return t & e ^ ~t & n;
    }
    function Ds(t, e, n) {
        return t & e ^ t & n ^ e & n;
    }
    class Cs {
        blockLen;
        outputLen;
        canXOF = !1;
        padOffset;
        isLE;
        buffer;
        view;
        finished = !1;
        length = 0;
        pos = 0;
        destroyed = !1;
        constructor(e, n, r, s){
            this.blockLen = e, this.outputLen = n, this.padOffset = r, this.isLE = s, this.buffer = new Uint8Array(e), this.view = et(this.buffer);
        }
        update(e) {
            rt(this), De(e);
            const { view: n, buffer: r, blockLen: s } = this, o = e.length;
            for(let i = 0; i < o;){
                const a = Math.min(s - this.pos, o - i);
                if (a === s) {
                    const c = et(e);
                    for(; s <= o - i; i += s)this.process(c, i);
                    continue;
                }
                r.set(e.subarray(i, i + a), this.pos), this.pos += a, i += a, this.pos === s && (this.process(n, 0), this.pos = 0);
            }
            return this.length += e.length, this.roundClean(), this;
        }
        digestInto(e) {
            rt(this), Ar(e, this), this.finished = !0;
            const { buffer: n, view: r, blockLen: s, isLE: o } = this;
            let { pos: i } = this;
            n[i++] = 128, Ie(this.buffer.subarray(i)), this.padOffset > s - i && (this.process(r, 0), i = 0);
            for(let f = i; f < s; f++)n[f] = 0;
            r.setBigUint64(s - 8, BigInt(this.length * 8), o), this.process(r, 0);
            const a = et(e), c = this.outputLen;
            if (c % 4) throw new Error("_sha2: outputLen must be aligned to 32bit");
            const u = c / 4, l = this.get();
            if (u > l.length) throw new Error("_sha2: outputLen bigger than state");
            for(let f = 0; f < u; f++)a.setUint32(4 * f, l[f], o);
        }
        digest() {
            const { buffer: e, outputLen: n } = this;
            this.digestInto(e);
            const r = e.slice(0, n);
            return this.destroy(), r;
        }
        _cloneInto(e) {
            e ||= new this.constructor, e.set(...this.get());
            const { blockLen: n, buffer: r, length: s, finished: o, destroyed: i, pos: a } = this;
            return e.destroyed = i, e.finished = o, e.length = s, e.pos = a, s % n && e.buffer.set(r), e;
        }
        clone() {
            return this._cloneInto();
        }
    }
    const Y = Uint32Array.from([
        1779033703,
        3144134277,
        1013904242,
        2773480762,
        1359893119,
        2600822924,
        528734635,
        1541459225
    ]), Us = Uint32Array.from([
        1116352408,
        1899447441,
        3049323471,
        3921009573,
        961987163,
        1508970993,
        2453635748,
        2870763221,
        3624381080,
        310598401,
        607225278,
        1426881987,
        1925078388,
        2162078206,
        2614888103,
        3248222580,
        3835390401,
        4022224774,
        264347078,
        604807628,
        770255983,
        1249150122,
        1555081692,
        1996064986,
        2554220882,
        2821834349,
        2952996808,
        3210313671,
        3336571891,
        3584528711,
        113926993,
        338241895,
        666307205,
        773529912,
        1294757372,
        1396182291,
        1695183700,
        1986661051,
        2177026350,
        2456956037,
        2730485921,
        2820302411,
        3259730800,
        3345764771,
        3516065817,
        3600352804,
        4094571909,
        275423344,
        430227734,
        506948616,
        659060556,
        883997877,
        958139571,
        1322822218,
        1537002063,
        1747873779,
        1955562222,
        2024104815,
        2227730452,
        2361852424,
        2428436474,
        2756734187,
        3204031479,
        3329325298
    ]), X = new Uint32Array(64);
    class Ms extends Cs {
        constructor(e){
            super(64, e, 8, !1);
        }
        get() {
            const { A: e, B: n, C: r, D: s, E: o, F: i, G: a, H: c } = this;
            return [
                e,
                n,
                r,
                s,
                o,
                i,
                a,
                c
            ];
        }
        set(e, n, r, s, o, i, a, c) {
            this.A = e | 0, this.B = n | 0, this.C = r | 0, this.D = s | 0, this.E = o | 0, this.F = i | 0, this.G = a | 0, this.H = c | 0;
        }
        process(e, n) {
            for(let f = 0; f < 16; f++, n += 4)X[f] = e.getUint32(n, !1);
            for(let f = 16; f < 64; f++){
                const h = X[f - 15], y = X[f - 2], p = $(h, 7) ^ $(h, 18) ^ h >>> 3, w = $(y, 17) ^ $(y, 19) ^ y >>> 10;
                X[f] = w + X[f - 7] + p + X[f - 16] | 0;
            }
            let { A: r, B: s, C: o, D: i, E: a, F: c, G: u, H: l } = this;
            for(let f = 0; f < 64; f++){
                const h = $(a, 6) ^ $(a, 11) ^ $(a, 25), y = l + h + Vs(a, c, u) + Us[f] + X[f] | 0, w = ($(r, 2) ^ $(r, 13) ^ $(r, 22)) + Ds(r, s, o) | 0;
                l = u, u = c, c = a, a = i + y | 0, i = o, o = s, s = r, r = y + w | 0;
            }
            r = r + this.A | 0, s = s + this.B | 0, o = o + this.C | 0, i = i + this.D | 0, a = a + this.E | 0, c = c + this.F | 0, u = u + this.G | 0, l = l + this.H | 0, this.set(r, s, o, i, a, c, u, l);
        }
        roundClean() {
            Ie(X);
        }
        destroy() {
            this.destroyed = !0, this.set(0, 0, 0, 0, 0, 0, 0, 0), Ie(this.buffer);
        }
    }
    class Fs extends Ms {
        A = Y[0] | 0;
        B = Y[1] | 0;
        C = Y[2] | 0;
        D = Y[3] | 0;
        E = Y[4] | 0;
        F = Y[5] | 0;
        G = Y[6] | 0;
        H = Y[7] | 0;
        constructor(){
            super(32);
        }
    }
    const Wt = Bs(()=>new Fs, $s(1));
    var Or = {}, q = {}, ft = {}, Lr = {};
    Lr.supports = function(...e) {
        const n = e.reduce((o, i)=>Object.assign(o, i), {}), r = n.implicitSnapshots || n.snapshots || !1, s = n.explicitSnapshots || !1;
        return Object.assign(n, {
            implicitSnapshots: r,
            explicitSnapshots: s,
            snapshots: r,
            has: n.has || !1,
            permanence: n.permanence || !1,
            seek: n.seek || !1,
            createIfMissing: n.createIfMissing || !1,
            errorIfExists: n.errorIfExists || !1,
            deferredOpen: n.deferredOpen || !1,
            streams: n.streams || !1,
            encodings: Object.assign({}, n.encodings),
            events: Object.assign({}, n.events),
            additionalMethods: Object.assign({}, n.additionalMethods),
            signals: Object.assign({}, n.signals)
        });
    };
    var Ir = {}, F = class extends Error {
        constructor(e, n){
            super(e || ""), typeof n == "object" && n !== null && (n.code && (this.code = String(n.code)), n.expected && (this.expected = !0), n.transient && (this.transient = !0), n.cause && (this.cause = n.cause)), Error.captureStackTrace && Error.captureStackTrace(this, this.constructor);
        }
    }, ae = {};
    let _t = null;
    var Pr = function() {
        return _t === null && (_t = {
            textEncoder: new TextEncoder,
            textDecoder: new TextDecoder
        }), _t;
    }, Ce = {}, sn = {};
    const kt = F, Hs = new Set([
        "buffer",
        "view",
        "utf8"
    ]);
    let js = class {
        constructor(e){
            if (this.encode = e.encode || this.encode, this.decode = e.decode || this.decode, this.name = e.name || this.name, this.format = e.format || this.format, typeof this.encode != "function") throw new TypeError("The 'encode' property must be a function");
            if (typeof this.decode != "function") throw new TypeError("The 'decode' property must be a function");
            if (this.encode = this.encode.bind(this), this.decode = this.decode.bind(this), typeof this.name != "string" || this.name === "") throw new TypeError("The 'name' property must be a string");
            if (typeof this.format != "string" || !Hs.has(this.format)) throw new TypeError("The 'format' property must be one of 'buffer', 'view', 'utf8'");
            e.createViewTranscoder && (this.createViewTranscoder = e.createViewTranscoder), e.createBufferTranscoder && (this.createBufferTranscoder = e.createBufferTranscoder), e.createUTF8Transcoder && (this.createUTF8Transcoder = e.createUTF8Transcoder);
        }
        get commonName() {
            return this.name.split("+")[0];
        }
        createBufferTranscoder() {
            throw new kt(`Encoding '${this.name}' cannot be transcoded to 'buffer'`, {
                code: "LEVEL_ENCODING_NOT_SUPPORTED"
            });
        }
        createViewTranscoder() {
            throw new kt(`Encoding '${this.name}' cannot be transcoded to 'view'`, {
                code: "LEVEL_ENCODING_NOT_SUPPORTED"
            });
        }
        createUTF8Transcoder() {
            throw new kt(`Encoding '${this.name}' cannot be transcoded to 'utf8'`, {
                code: "LEVEL_ENCODING_NOT_SUPPORTED"
            });
        }
    };
    sn.Encoding = js;
    const { Buffer: on } = x || {}, { Encoding: an } = sn, Gs = Pr;
    let cn = class extends an {
        constructor(e){
            super({
                ...e,
                format: "buffer"
            });
        }
        createViewTranscoder() {
            return new un({
                encode: this.encode,
                decode: (e)=>this.decode(on.from(e.buffer, e.byteOffset, e.byteLength)),
                name: `${this.name}+view`
            });
        }
        createBufferTranscoder() {
            return this;
        }
    }, un = class extends an {
        constructor(e){
            super({
                ...e,
                format: "view"
            });
        }
        createBufferTranscoder() {
            return new cn({
                encode: (e)=>{
                    const n = this.encode(e);
                    return on.from(n.buffer, n.byteOffset, n.byteLength);
                },
                decode: this.decode,
                name: `${this.name}+buffer`
            });
        }
        createViewTranscoder() {
            return this;
        }
    }, zs = class extends an {
        constructor(e){
            super({
                ...e,
                format: "utf8"
            });
        }
        createBufferTranscoder() {
            return new cn({
                encode: (e)=>on.from(this.encode(e), "utf8"),
                decode: (e)=>this.decode(e.toString("utf8")),
                name: `${this.name}+buffer`
            });
        }
        createViewTranscoder() {
            const { textEncoder: e, textDecoder: n } = Gs();
            return new un({
                encode: (r)=>e.encode(this.encode(r)),
                decode: (r)=>this.decode(n.decode(r)),
                name: `${this.name}+view`
            });
        }
        createUTF8Transcoder() {
            return this;
        }
    };
    Ce.BufferFormat = cn;
    Ce.ViewFormat = un;
    Ce.UTF8Format = zs;
    const { Buffer: O } = x || {
        Buffer: {
            isBuffer: ()=>!1
        }
    }, { textEncoder: Kr, textDecoder: In } = Pr(), { BufferFormat: Ue, ViewFormat: ln, UTF8Format: Rr } = Ce, st = (t)=>t;
    ae.utf8 = new Rr({
        encode: function(t) {
            return O.isBuffer(t) ? t.toString("utf8") : ArrayBuffer.isView(t) ? In.decode(t) : String(t);
        },
        decode: st,
        name: "utf8",
        createViewTranscoder () {
            return new ln({
                encode: function(t) {
                    return ArrayBuffer.isView(t) ? t : Kr.encode(t);
                },
                decode: function(t) {
                    return In.decode(t);
                },
                name: `${this.name}+view`
            });
        },
        createBufferTranscoder () {
            return new Ue({
                encode: function(t) {
                    return O.isBuffer(t) ? t : ArrayBuffer.isView(t) ? O.from(t.buffer, t.byteOffset, t.byteLength) : O.from(String(t), "utf8");
                },
                decode: function(t) {
                    return t.toString("utf8");
                },
                name: `${this.name}+buffer`
            });
        }
    });
    ae.json = new Rr({
        encode: JSON.stringify,
        decode: JSON.parse,
        name: "json"
    });
    ae.buffer = new Ue({
        encode: function(t) {
            return O.isBuffer(t) ? t : ArrayBuffer.isView(t) ? O.from(t.buffer, t.byteOffset, t.byteLength) : O.from(String(t), "utf8");
        },
        decode: st,
        name: "buffer",
        createViewTranscoder () {
            return new ln({
                encode: function(t) {
                    return ArrayBuffer.isView(t) ? t : O.from(String(t), "utf8");
                },
                decode: function(t) {
                    return O.from(t.buffer, t.byteOffset, t.byteLength);
                },
                name: `${this.name}+view`
            });
        }
    });
    ae.view = new ln({
        encode: function(t) {
            return ArrayBuffer.isView(t) ? t : Kr.encode(t);
        },
        decode: st,
        name: "view",
        createBufferTranscoder () {
            return new Ue({
                encode: function(t) {
                    return O.isBuffer(t) ? t : ArrayBuffer.isView(t) ? O.from(t.buffer, t.byteOffset, t.byteLength) : O.from(String(t), "utf8");
                },
                decode: st,
                name: `${this.name}+buffer`
            });
        }
    });
    ae.hex = new Ue({
        encode: function(t) {
            return O.isBuffer(t) ? t : O.from(String(t), "hex");
        },
        decode: function(t) {
            return t.toString("hex");
        },
        name: "hex"
    });
    ae.base64 = new Ue({
        encode: function(t) {
            return O.isBuffer(t) ? t : O.from(String(t), "base64");
        },
        decode: function(t) {
            return t.toString("base64");
        },
        name: "base64"
    });
    const Pn = F, ot = ae, { Encoding: Ws } = sn, { BufferFormat: qs, ViewFormat: Ys, UTF8Format: Xs } = Ce, Ee = Symbol("formats"), He = Symbol("encodings"), Qs = new Set([
        "buffer",
        "view",
        "utf8"
    ]);
    let Zs = class {
        constructor(e){
            if (Array.isArray(e)) {
                if (!e.every((n)=>Qs.has(n))) throw new TypeError("Format must be one of 'buffer', 'view', 'utf8'");
            } else throw new TypeError("The first argument 'formats' must be an array");
            this[He] = new Map, this[Ee] = new Set(e);
            for(const n in ot)try {
                this.encoding(n);
            } catch (r) {
                if (r.code !== "LEVEL_ENCODING_NOT_SUPPORTED") throw r;
            }
        }
        encodings() {
            return Array.from(new Set(this[He].values()));
        }
        encoding(e) {
            let n = this[He].get(e);
            if (n === void 0) {
                if (typeof e == "string" && e !== "") {
                    if (n = no[e], !n) throw new Pn(`Encoding '${e}' is not found`, {
                        code: "LEVEL_ENCODING_NOT_FOUND"
                    });
                } else {
                    if (typeof e != "object" || e === null) throw new TypeError("First argument 'encoding' must be a string or object");
                    n = Js(e);
                }
                const { name: r, format: s } = n;
                if (!this[Ee].has(s)) if (this[Ee].has("view")) n = n.createViewTranscoder();
                else if (this[Ee].has("buffer")) n = n.createBufferTranscoder();
                else if (this[Ee].has("utf8")) n = n.createUTF8Transcoder();
                else throw new Pn(`Encoding '${r}' cannot be transcoded`, {
                    code: "LEVEL_ENCODING_NOT_SUPPORTED"
                });
                for (const o of [
                    e,
                    r,
                    n.name,
                    n.commonName
                ])this[He].set(o, n);
            }
            return n;
        }
    };
    Ir.Transcoder = Zs;
    function Js(t) {
        if (t instanceof Ws) return t;
        const e = "type" in t && typeof t.type == "string" ? t.type : void 0, n = t.name || e || `anonymous-${ro++}`;
        switch(eo(t)){
            case "view":
                return new Ys({
                    ...t,
                    name: n
                });
            case "utf8":
                return new Xs({
                    ...t,
                    name: n
                });
            case "buffer":
                return new qs({
                    ...t,
                    name: n
                });
            default:
                throw new TypeError("Format must be one of 'buffer', 'view', 'utf8'");
        }
    }
    function eo(t) {
        return "format" in t && t.format !== void 0 ? t.format : "buffer" in t && typeof t.buffer == "boolean" ? t.buffer ? "buffer" : "utf8" : "code" in t && Number.isInteger(t.code) ? "view" : "buffer";
    }
    const to = {
        binary: ot.buffer,
        "utf-8": ot.utf8
    }, no = {
        ...ot,
        ...to
    };
    let ro = 0;
    var fn = {
        exports: {}
    }, pe = typeof Reflect == "object" ? Reflect : null, Kn = pe && typeof pe.apply == "function" ? pe.apply : function(e, n, r) {
        return Function.prototype.apply.call(e, n, r);
    }, tt;
    pe && typeof pe.ownKeys == "function" ? tt = pe.ownKeys : Object.getOwnPropertySymbols ? tt = function(e) {
        return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e));
    } : tt = function(e) {
        return Object.getOwnPropertyNames(e);
    };
    function so(t) {
        console && console.warn && console.warn(t);
    }
    var Nr = Number.isNaN || function(e) {
        return e !== e;
    };
    function k() {
        k.init.call(this);
    }
    fn.exports = k;
    fn.exports.once = co;
    k.EventEmitter = k;
    k.prototype._events = void 0;
    k.prototype._eventsCount = 0;
    k.prototype._maxListeners = void 0;
    var Rn = 10;
    function ht(t) {
        if (typeof t != "function") throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof t);
    }
    Object.defineProperty(k, "defaultMaxListeners", {
        enumerable: !0,
        get: function() {
            return Rn;
        },
        set: function(t) {
            if (typeof t != "number" || t < 0 || Nr(t)) throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + t + ".");
            Rn = t;
        }
    });
    k.init = function() {
        (this._events === void 0 || this._events === Object.getPrototypeOf(this)._events) && (this._events = Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0;
    };
    k.prototype.setMaxListeners = function(e) {
        if (typeof e != "number" || e < 0 || Nr(e)) throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + e + ".");
        return this._maxListeners = e, this;
    };
    function Br(t) {
        return t._maxListeners === void 0 ? k.defaultMaxListeners : t._maxListeners;
    }
    k.prototype.getMaxListeners = function() {
        return Br(this);
    };
    k.prototype.emit = function(e) {
        for(var n = [], r = 1; r < arguments.length; r++)n.push(arguments[r]);
        var s = e === "error", o = this._events;
        if (o !== void 0) s = s && o.error === void 0;
        else if (!s) return !1;
        if (s) {
            var i;
            if (n.length > 0 && (i = n[0]), i instanceof Error) throw i;
            var a = new Error("Unhandled error." + (i ? " (" + i.message + ")" : ""));
            throw a.context = i, a;
        }
        var c = o[e];
        if (c === void 0) return !1;
        if (typeof c == "function") Kn(c, this, n);
        else for(var u = c.length, l = Ur(c, u), r = 0; r < u; ++r)Kn(l[r], this, n);
        return !0;
    };
    function $r(t, e, n, r) {
        var s, o, i;
        if (ht(n), o = t._events, o === void 0 ? (o = t._events = Object.create(null), t._eventsCount = 0) : (o.newListener !== void 0 && (t.emit("newListener", e, n.listener ? n.listener : n), o = t._events), i = o[e]), i === void 0) i = o[e] = n, ++t._eventsCount;
        else if (typeof i == "function" ? i = o[e] = r ? [
            n,
            i
        ] : [
            i,
            n
        ] : r ? i.unshift(n) : i.push(n), s = Br(t), s > 0 && i.length > s && !i.warned) {
            i.warned = !0;
            var a = new Error("Possible EventEmitter memory leak detected. " + i.length + " " + String(e) + " listeners added. Use emitter.setMaxListeners() to increase limit");
            a.name = "MaxListenersExceededWarning", a.emitter = t, a.type = e, a.count = i.length, so(a);
        }
        return t;
    }
    k.prototype.addListener = function(e, n) {
        return $r(this, e, n, !1);
    };
    k.prototype.on = k.prototype.addListener;
    k.prototype.prependListener = function(e, n) {
        return $r(this, e, n, !0);
    };
    function oo() {
        if (!this.fired) return this.target.removeListener(this.type, this.wrapFn), this.fired = !0, arguments.length === 0 ? this.listener.call(this.target) : this.listener.apply(this.target, arguments);
    }
    function Vr(t, e, n) {
        var r = {
            fired: !1,
            wrapFn: void 0,
            target: t,
            type: e,
            listener: n
        }, s = oo.bind(r);
        return s.listener = n, r.wrapFn = s, s;
    }
    k.prototype.once = function(e, n) {
        return ht(n), this.on(e, Vr(this, e, n)), this;
    };
    k.prototype.prependOnceListener = function(e, n) {
        return ht(n), this.prependListener(e, Vr(this, e, n)), this;
    };
    k.prototype.removeListener = function(e, n) {
        var r, s, o, i, a;
        if (ht(n), s = this._events, s === void 0) return this;
        if (r = s[e], r === void 0) return this;
        if (r === n || r.listener === n) --this._eventsCount === 0 ? this._events = Object.create(null) : (delete s[e], s.removeListener && this.emit("removeListener", e, r.listener || n));
        else if (typeof r != "function") {
            for(o = -1, i = r.length - 1; i >= 0; i--)if (r[i] === n || r[i].listener === n) {
                a = r[i].listener, o = i;
                break;
            }
            if (o < 0) return this;
            o === 0 ? r.shift() : io(r, o), r.length === 1 && (s[e] = r[0]), s.removeListener !== void 0 && this.emit("removeListener", e, a || n);
        }
        return this;
    };
    k.prototype.off = k.prototype.removeListener;
    k.prototype.removeAllListeners = function(e) {
        var n, r, s;
        if (r = this._events, r === void 0) return this;
        if (r.removeListener === void 0) return arguments.length === 0 ? (this._events = Object.create(null), this._eventsCount = 0) : r[e] !== void 0 && (--this._eventsCount === 0 ? this._events = Object.create(null) : delete r[e]), this;
        if (arguments.length === 0) {
            var o = Object.keys(r), i;
            for(s = 0; s < o.length; ++s)i = o[s], i !== "removeListener" && this.removeAllListeners(i);
            return this.removeAllListeners("removeListener"), this._events = Object.create(null), this._eventsCount = 0, this;
        }
        if (n = r[e], typeof n == "function") this.removeListener(e, n);
        else if (n !== void 0) for(s = n.length - 1; s >= 0; s--)this.removeListener(e, n[s]);
        return this;
    };
    function Dr(t, e, n) {
        var r = t._events;
        if (r === void 0) return [];
        var s = r[e];
        return s === void 0 ? [] : typeof s == "function" ? n ? [
            s.listener || s
        ] : [
            s
        ] : n ? ao(s) : Ur(s, s.length);
    }
    k.prototype.listeners = function(e) {
        return Dr(this, e, !0);
    };
    k.prototype.rawListeners = function(e) {
        return Dr(this, e, !1);
    };
    k.listenerCount = function(t, e) {
        return typeof t.listenerCount == "function" ? t.listenerCount(e) : Cr.call(t, e);
    };
    k.prototype.listenerCount = Cr;
    function Cr(t) {
        var e = this._events;
        if (e !== void 0) {
            var n = e[t];
            if (typeof n == "function") return 1;
            if (n !== void 0) return n.length;
        }
        return 0;
    }
    k.prototype.eventNames = function() {
        return this._eventsCount > 0 ? tt(this._events) : [];
    };
    function Ur(t, e) {
        for(var n = new Array(e), r = 0; r < e; ++r)n[r] = t[r];
        return n;
    }
    function io(t, e) {
        for(; e + 1 < t.length; e++)t[e] = t[e + 1];
        t.pop();
    }
    function ao(t) {
        for(var e = new Array(t.length), n = 0; n < e.length; ++n)e[n] = t[n].listener || t[n];
        return e;
    }
    function co(t, e) {
        return new Promise(function(n, r) {
            function s(i) {
                t.removeListener(e, o), r(i);
            }
            function o() {
                typeof t.removeListener == "function" && t.removeListener("error", s), n([].slice.call(arguments));
            }
            Mr(t, e, o, {
                once: !0
            }), e !== "error" && uo(t, s, {
                once: !0
            });
        });
    }
    function uo(t, e, n) {
        typeof t.on == "function" && Mr(t, "error", e, n);
    }
    function Mr(t, e, n, r) {
        if (typeof t.on == "function") r.once ? t.once(e, n) : t.on(e, n);
        else if (typeof t.addEventListener == "function") t.addEventListener(e, function s(o) {
            r.once && t.removeEventListener(e, s), n(o);
        });
        else throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof t);
    }
    var lo = fn.exports;
    const Nn = Symbol("kErrors");
    var hn = function(t) {
        if (t = t.filter(ho), t.length !== 0) return t.length === 1 ? t[0] : new fo(t);
    };
    class fo extends Error {
        constructor(e){
            const n = new Set(e.map(yo).filter(Boolean)), r = Array.from(n).join("; ");
            super(r), Bn(this, "name", "CombinedError"), Bn(this, Nn, e), xt(this, "stack", ()=>e.map(go).join(`

`)), xt(this, "transient", ()=>e.length > 0 && e.every(po)), xt(this, "expected", ()=>e.length > 0 && e.every(wo));
        }
        [Symbol.iterator]() {
            return this[Nn][Symbol.iterator]();
        }
    }
    function Bn(t, e, n) {
        Object.defineProperty(t, e, {
            value: n
        });
    }
    function xt(t, e, n) {
        Object.defineProperty(t, e, {
            get: n
        });
    }
    function ho(t) {
        return t != null;
    }
    function yo(t) {
        return t.message;
    }
    function go(t) {
        return t.stack;
    }
    function po(t) {
        return t.transient === !0;
    }
    function wo(t) {
        return t.expected === !0;
    }
    var H = {}, R = {};
    const mo = F, $n = new Set;
    R.getOptions = function(t, e) {
        return typeof t == "object" && t !== null ? t : e !== void 0 ? e : {};
    };
    R.emptyOptions = Object.freeze({});
    R.noop = function() {};
    R.resolvedPromise = Promise.resolve();
    R.deprecate = function(t) {
        if (!$n.has(t)) {
            $n.add(t);
            const e = globalThis.console;
            typeof e < "u" && typeof e.warn == "function" && e.warn(new mo(t, {
                code: "LEVEL_LEGACY"
            }));
        }
    };
    var dn = {};
    const bo = F;
    let Eo = class extends bo {
        constructor(e){
            super("Operation has been aborted", {
                code: "LEVEL_ABORTED",
                cause: e
            });
        }
        get name() {
            return "AbortError";
        }
    };
    dn.AbortError = Eo;
    const xe = F, vo = hn, { getOptions: St, emptyOptions: At, noop: _o } = R, { AbortError: ko } = dn, dt = Symbol("decodeOne"), Pe = Symbol("decodeMany"), Q = Symbol("keyEncoding"), ie = Symbol("valueEncoding");
    class yt {
        #e = !1;
        #t = null;
        #n = null;
        #o = 0;
        #a;
        #r;
        #i;
        #s;
        constructor(e, n){
            if (typeof e != "object" || e === null) {
                const r = e === null ? "null" : typeof e;
                throw new TypeError(`The first argument must be an abstract-level database, received ${r}`);
            }
            if (typeof n != "object" || n === null) throw new TypeError("The second argument must be an options object");
            this[Q] = n[Q], this[ie] = n[ie], this.#r = Number.isInteger(n.limit) && n.limit >= 0 ? n.limit : 1 / 0, this.#a = n.signal != null ? n.signal : null, this.#s = n.snapshot != null ? n.snapshot : null, this.#i = !1, this.db = e, this.db.attachResource(this);
        }
        get count() {
            return this.#o;
        }
        get limit() {
            return this.#r;
        }
        async next() {
            this.#u();
            try {
                if (this.#i || this.#o >= this.#r) {
                    this.#i = !0;
                    return;
                }
                let e = await this._next();
                if (e === void 0) {
                    this.#i = !0;
                    return;
                }
                try {
                    e = this[dt](e);
                } catch (n) {
                    throw new Tt(n);
                }
                return this.#o++, e;
            } finally{
                this.#c();
            }
        }
        async _next() {}
        async nextv(e, n) {
            if (!Number.isInteger(e)) throw new TypeError("The first argument 'size' must be an integer");
            n = St(n, At), e < 1 && (e = 1), this.#r < 1 / 0 && (e = Math.min(e, this.#r - this.#o)), this.#u();
            try {
                if (this.#i || e <= 0) return this.#i = !0, [];
                const r = await this._nextv(e, n);
                if (r.length === 0) return this.#i = !0, r;
                try {
                    this[Pe](r);
                } catch (s) {
                    throw new Tt(s);
                }
                return this.#o += r.length, r;
            } finally{
                this.#c();
            }
        }
        async _nextv(e, n) {
            const r = [];
            for(; r.length < e;){
                const s = await this._next(n);
                if (s !== void 0) r.push(s);
                else {
                    this.#i = !0;
                    break;
                }
            }
            return r;
        }
        async all(e) {
            e = St(e, At), this.#u();
            try {
                if (this.#i || this.#o >= this.#r) return [];
                const n = await this._all(e);
                try {
                    this[Pe](n);
                } catch (r) {
                    throw new Tt(r);
                }
                return this.#o += n.length, n;
            } catch (n) {
                this.#c(), await this.#h(n);
            } finally{
                this.#i = !0, this.#e && (this.#c(), await this.close());
            }
        }
        async _all(e) {
            let n = this.#o;
            const r = [];
            for(;;){
                const s = this.#r < 1 / 0 ? Math.min(1e3, this.#r - n) : 1e3;
                if (s <= 0) return r;
                const o = await this._nextv(s, e);
                if (o.length === 0) return r;
                r.push.apply(r, o), n += o.length;
            }
        }
        seek(e, n) {
            if (n = St(n, At), this.#n === null) {
                if (this.#e) throw new xe("Iterator is busy: cannot call seek() until next() has completed", {
                    code: "LEVEL_ITERATOR_BUSY"
                });
                {
                    const r = this.db.keyEncoding(n.keyEncoding || this[Q]), s = r.format;
                    n.keyEncoding !== s && (n = {
                        ...n,
                        keyEncoding: s
                    });
                    const o = this.db.prefixKey(r.encode(e), s, !1);
                    this._seek(o, n), this.#i = !1;
                }
            }
        }
        _seek(e, n) {
            throw new xe("Iterator does not implement seek()", {
                code: "LEVEL_NOT_SUPPORTED"
            });
        }
        async close() {
            return this.#n !== null ? this.#n.catch(_o) : (this.#n = new Promise((e, n)=>{
                this.#t = ()=>{
                    this.#t = null, this.#f().then(e, n);
                };
            }), this.#e || this.#t(), this.#n);
        }
        async _close() {}
        async *[Symbol.asyncIterator]() {
            try {
                let e;
                for(; (e = await this.next()) !== void 0;)yield e;
            } catch (e) {
                await this.#h(e);
            } finally{
                await this.close();
            }
        }
        #u() {
            if (this.#n !== null) throw new xe("Iterator is not open: cannot read after close()", {
                code: "LEVEL_ITERATOR_NOT_OPEN"
            });
            if (this.#e) throw new xe("Iterator is busy: cannot read until previous read has completed", {
                code: "LEVEL_ITERATOR_BUSY"
            });
            if (this.#a?.aborted) throw new ko;
            this.#s?.ref(), this.#e = !0;
        }
        #c() {
            this.#e = !1, this.#t?.(), this.#s?.unref();
        }
        async #f() {
            await this._close(), this.db.detachResource(this);
        }
        async #h(e) {
            try {
                await this.close();
            } catch (n) {
                throw vo([
                    e,
                    n
                ]);
            }
            throw e;
        }
    }
    typeof Symbol.asyncDispose == "symbol" && (yt.prototype[Symbol.asyncDispose] = async function() {
        return this.close();
    });
    let yn = class extends yt {
        #e;
        #t;
        constructor(e, n){
            super(e, n), this.#e = n.keys !== !1, this.#t = n.values !== !1;
        }
        [dt](e) {
            const n = e[0], r = e[1];
            return n !== void 0 && (e[0] = this.#e ? this[Q].decode(n) : void 0), r !== void 0 && (e[1] = this.#t ? this[ie].decode(r) : void 0), e;
        }
        [Pe](e) {
            const n = this[Q], r = this[ie];
            for (const s of e){
                const o = s[0], i = s[1];
                o !== void 0 && (s[0] = this.#e ? n.decode(o) : void 0), i !== void 0 && (s[1] = this.#t ? r.decode(i) : void 0);
            }
        }
    }, xo = class extends yt {
        [dt](e) {
            return this[Q].decode(e);
        }
        [Pe](e) {
            const n = this[Q];
            for(let r = 0; r < e.length; r++){
                const s = e[r];
                s !== void 0 && (e[r] = n.decode(s));
            }
        }
    }, So = class extends yt {
        [dt](e) {
            return this[ie].decode(e);
        }
        [Pe](e) {
            const n = this[ie];
            for(let r = 0; r < e.length; r++){
                const s = e[r];
                s !== void 0 && (e[r] = n.decode(s));
            }
        }
    };
    class Tt extends xe {
        constructor(e){
            super("Iterator could not decode data", {
                code: "LEVEL_DECODE_ERROR",
                cause: e
            });
        }
    }
    yn.keyEncoding = Q;
    yn.valueEncoding = ie;
    H.AbstractIterator = yn;
    H.AbstractKeyIterator = xo;
    H.AbstractValueIterator = So;
    var gn = {};
    const { AbstractKeyIterator: Ao, AbstractValueIterator: To } = H, re = Symbol("iterator"), pn = Symbol("handleOne"), it = Symbol("handleMany");
    let Fr = class extends Ao {
        constructor(e, n){
            super(e, n), this[re] = e.iterator({
                ...n,
                keys: !0,
                values: !1
            });
        }
        [pn](e) {
            return e[0];
        }
        [it](e) {
            for(let n = 0; n < e.length; n++)e[n] = e[n][0];
        }
    }, Hr = class extends To {
        constructor(e, n){
            super(e, n), this[re] = e.iterator({
                ...n,
                keys: !1,
                values: !0
            });
        }
        [pn](e) {
            return e[1];
        }
        [it](e) {
            for(let n = 0; n < e.length; n++)e[n] = e[n][1];
        }
    };
    for (const t of [
        Fr,
        Hr
    ])t.prototype._next = async function() {
        const e = await this[re].next();
        return e === void 0 ? e : this[pn](e);
    }, t.prototype._nextv = async function(e, n) {
        const r = await this[re].nextv(e, n);
        return this[it](r), r;
    }, t.prototype._all = async function(e) {
        const n = await this[re].all(e);
        return this[it](n), n;
    }, t.prototype._seek = function(e, n) {
        this[re].seek(e, n);
    }, t.prototype._close = async function() {
        return this[re].close();
    };
    gn.DefaultKeyIterator = Fr;
    gn.DefaultValueIterator = Hr;
    var gt = {};
    const { AbstractIterator: Oo, AbstractKeyIterator: Lo, AbstractValueIterator: Io } = H, Ot = F, I = Symbol("nut"), pt = Symbol("undefer"), wt = Symbol("factory"), U = Symbol("signalOptions");
    let jr = class extends Oo {
        constructor(e, n){
            super(e, n), this[I] = null, this[wt] = ()=>e.iterator(n), this[U] = {
                signal: n.signal
            }, this.db.defer(()=>this[pt](), this[U]);
        }
    }, Gr = class extends Lo {
        constructor(e, n){
            super(e, n), this[I] = null, this[wt] = ()=>e.keys(n), this[U] = {
                signal: n.signal
            }, this.db.defer(()=>this[pt](), this[U]);
        }
    }, zr = class extends Io {
        constructor(e, n){
            super(e, n), this[I] = null, this[wt] = ()=>e.values(n), this[U] = {
                signal: n.signal
            }, this.db.defer(()=>this[pt](), this[U]);
        }
    };
    for (const t of [
        jr,
        Gr,
        zr
    ])t.prototype[pt] = function() {
        this.db.status === "open" && (this[I] = this[wt]());
    }, t.prototype._next = async function() {
        if (this[I] !== null) return this[I].next();
        if (this.db.status === "opening") return this.db.deferAsync(()=>this._next(), this[U]);
        throw new Ot("Iterator is not open: cannot call next() after close()", {
            code: "LEVEL_ITERATOR_NOT_OPEN"
        });
    }, t.prototype._nextv = async function(e, n) {
        if (this[I] !== null) return this[I].nextv(e, n);
        if (this.db.status === "opening") return this.db.deferAsync(()=>this._nextv(e, n), this[U]);
        throw new Ot("Iterator is not open: cannot call nextv() after close()", {
            code: "LEVEL_ITERATOR_NOT_OPEN"
        });
    }, t.prototype._all = async function(e) {
        if (this[I] !== null) return this[I].all();
        if (this.db.status === "opening") return this.db.deferAsync(()=>this._all(e), this[U]);
        throw new Ot("Iterator is not open: cannot call all() after close()", {
            code: "LEVEL_ITERATOR_NOT_OPEN"
        });
    }, t.prototype._seek = function(e, n) {
        this[I] !== null ? this[I]._seek(e, n) : this.db.status === "opening" && this.db.defer(()=>this._seek(e, n), this[U]);
    }, t.prototype._close = async function() {
        if (this[I] !== null) return this[I].close();
        if (this.db.status === "opening") return this.db.deferAsync(()=>this._close());
    };
    gt.DeferredIterator = jr;
    gt.DeferredKeyIterator = Gr;
    gt.DeferredValueIterator = zr;
    var Wr = {}, wn = {}, Me = {};
    Me.prefixDescendantKey = function(t, e, n, r) {
        for(; n !== null && n !== r;)t = n.prefixKey(t, e, !0), n = n.parent;
        return t;
    };
    Me.isDescendant = function(t, e) {
        for(;;){
            if (t.parent == null) return !1;
            if (t.parent === e) return !0;
            t = t.parent;
        }
    };
    var mn = {};
    const { prefixDescendantKey: Po, isDescendant: Ko } = Me;
    let Ro = class {
        #e;
        #t;
        #n;
        constructor(e, n, r){
            this.#e = e, this.#t = n, this.#n = r;
        }
        add(e) {
            const n = e.type === "put", r = e.sublevel != null, s = r ? e.sublevel : this.#e;
            if (s._assertValidKey(e.key), e.keyEncoding = s.keyEncoding(e.keyEncoding), n) s._assertValidValue(e.value), e.valueEncoding = s.valueEncoding(e.valueEncoding);
            else if (e.type !== "del") throw new TypeError("A batch operation must have a type property that is 'put' or 'del'");
            const o = e.keyEncoding, i = o.encode(e.key), a = o.format, c = r && !Ko(e.sublevel, this.#e) && e.sublevel !== this.#e, u = r && !c ? Po(i, a, s, this.#e) : i;
            r && !c && (e.sublevel = null);
            let l = null;
            if (this.#n !== null && !c && (l = {
                ...e
            }, l.encodedKey = u, r && (l.key = u, l.keyEncoding = this.#e.keyEncoding(a)), this.#n.push(l)), e.key = c ? u : this.#e.prefixKey(u, a, !0), e.keyEncoding = a, n) {
                const f = e.valueEncoding, h = f.encode(e.value), y = f.format;
                e.value = h, e.valueEncoding = y, l !== null && (l.encodedValue = h, r && (l.value = h, l.valueEncoding = this.#e.valueEncoding(y)));
            }
            return this.#t.push(e), this;
        }
    };
    mn.PrewriteBatch = Ro;
    const No = hn, je = F, { getOptions: Ge, emptyOptions: Lt, noop: Bo } = R, { prefixDescendantKey: Vn, isDescendant: $o } = Me, { PrewriteBatch: Vo } = mn, at = Symbol("publicOperations"), Ae = Symbol("privateOperations");
    let qr = class {
        #e = "open";
        #t = 0;
        #n = null;
        #o;
        #a;
        #r;
        #i;
        #s;
        constructor(e, n){
            if (typeof e != "object" || e === null) {
                const o = e === null ? "null" : typeof e;
                throw new TypeError(`The first argument must be an abstract-level database, received ${o}`);
            }
            const r = e.listenerCount("write") > 0, s = !e.hooks.prewrite.noop;
            if (this.#o = r ? [] : null, this.#s = Ge(n, Lt).add === !0, s) {
                const o = new Do([], r ? [] : null);
                this.#i = o, this.#r = new Vo(e, o[Ae], o[at]), this.#a = e.hooks.prewrite.run;
            } else this.#i = null, this.#r = null, this.#a = null;
            this.db = e, this.db.attachResource(this);
        }
        get length() {
            return this.#i !== null ? this.#t + this.#i.length : this.#t;
        }
        put(e, n, r) {
            this.#u(), r = Ge(r, Lt);
            const s = r.sublevel != null, o = s ? r.sublevel : this.db;
            o._assertValidKey(e), o._assertValidValue(n);
            const i = {
                ...r,
                type: "put",
                key: e,
                value: n,
                keyEncoding: o.keyEncoding(r.keyEncoding),
                valueEncoding: o.valueEncoding(r.valueEncoding)
            };
            if (this.#a !== null) try {
                this.#a(i, this.#r), i.keyEncoding = o.keyEncoding(i.keyEncoding), i.valueEncoding = o.valueEncoding(i.valueEncoding);
            } catch (w) {
                throw new je("The prewrite hook failed on batch.put()", {
                    code: "LEVEL_HOOK_ERROR",
                    cause: w
                });
            }
            const a = i.keyEncoding, c = a.encode(i.key), u = a.format, l = s && !$o(i.sublevel, this.db) && i.sublevel !== this.db, f = s && !l ? Vn(c, u, o, this.db) : c, h = i.valueEncoding, y = h.encode(i.value), p = h.format;
            if (s && !l && (i.sublevel = null), this.#o !== null && !l) {
                const w = {
                    ...i
                };
                w.encodedKey = f, w.encodedValue = y, s && (w.key = f, w.value = y, w.keyEncoding = this.db.keyEncoding(u), w.valueEncoding = this.db.valueEncoding(p)), this.#o.push(w);
            }
            return i.key = l ? f : this.db.prefixKey(f, u, !0), i.value = y, i.keyEncoding = u, i.valueEncoding = p, this.#s ? this._add(i) : this._put(i.key, y, i), this.#t++, this;
        }
        _put(e, n, r) {}
        del(e, n) {
            this.#u(), n = Ge(n, Lt);
            const r = n.sublevel != null, s = r ? n.sublevel : this.db;
            s._assertValidKey(e);
            const o = {
                ...n,
                type: "del",
                key: e,
                keyEncoding: s.keyEncoding(n.keyEncoding)
            };
            if (this.#a !== null) try {
                this.#a(o, this.#r), o.keyEncoding = s.keyEncoding(o.keyEncoding);
            } catch (l) {
                throw new je("The prewrite hook failed on batch.del()", {
                    code: "LEVEL_HOOK_ERROR",
                    cause: l
                });
            }
            const i = o.keyEncoding, a = i.encode(o.key), c = i.format, u = r ? Vn(a, c, s, this.db) : a;
            if (r && (o.sublevel = null), this.#o !== null) {
                const l = {
                    ...o
                };
                l.encodedKey = u, r && (l.key = u, l.keyEncoding = this.db.keyEncoding(c)), this.#o.push(l);
            }
            return o.key = this.db.prefixKey(u, c, !0), o.keyEncoding = c, this.#s ? this._add(o) : this._del(o.key, o), this.#t++, this;
        }
        _del(e, n) {}
        _add(e) {}
        clear() {
            return this.#u(), this._clear(), this.#o !== null && (this.#o = []), this.#i !== null && this.#i.clear(), this.#t = 0, this;
        }
        _clear() {}
        async write(e) {
            if (this.#u(), e = Ge(e), this.#t === 0) return this.close();
            {
                this.#e = "writing";
                const n = this.#c();
                try {
                    if (this.#i !== null) {
                        const r = this.#i[at], s = this.#i[Ae], o = this.#i.length;
                        for(let i = 0; i < o; i++){
                            const a = s[i];
                            this.#s ? this._add(a) : a.type === "put" ? this._put(a.key, a.value, a) : this._del(a.key, a);
                        }
                        r !== null && o !== 0 && (this.#o = this.#o.concat(r));
                    }
                    await this._write(e);
                } catch (r) {
                    n();
                    try {
                        await this.#n;
                    } catch (s) {
                        r = No([
                            r,
                            s
                        ]);
                    }
                    throw r;
                }
                return n(), this.#o !== null && this.db.emit("write", this.#o), this.#n;
            }
        }
        async _write(e) {}
        async close() {
            return this.#n !== null ? this.#n.catch(Bo) : (this.#c()(), this.#n);
        }
        async _close() {}
        #u() {
            if (this.#e !== "open") throw new je("Batch is not open: cannot change operations after write() or close()", {
                code: "LEVEL_BATCH_NOT_OPEN"
            });
            if (this.db.status !== "open") throw new je("Database is not open", {
                code: "LEVEL_DATABASE_NOT_OPEN"
            });
        }
        #c() {
            let e;
            return this.#n = new Promise((n, r)=>{
                e = ()=>{
                    this.#f().then(n, r);
                };
            }), e;
        }
        async #f() {
            this.#e = "closing", await this._close(), this.db.detachResource(this);
        }
    };
    typeof Symbol.asyncDispose == "symbol" && (qr.prototype[Symbol.asyncDispose] = async function() {
        return this.close();
    });
    class Do {
        constructor(e, n){
            this[Ae] = e, this[at] = n;
        }
        get length() {
            return this[Ae].length;
        }
        clear() {
            for (const e of [
                at,
                Ae
            ]){
                const n = this[e];
                n !== null && n.splice(0, n.length);
            }
        }
    }
    wn.AbstractChainedBatch = qr;
    const { AbstractChainedBatch: Co } = wn;
    let Uo = class extends Co {
        #e = [];
        constructor(e){
            super(e, {
                add: !0
            });
        }
        _add(e) {
            this.#e.push(e);
        }
        _clear() {
            this.#e = [];
        }
        async _write(e) {
            return this.db._batch(this.#e, e);
        }
    };
    Wr.DefaultChainedBatch = Uo;
    var Yr = {};
    const { noop: Mo } = R;
    let Fo = class {
        constructor(){
            this.postopen = new It({
                async: !0
            }), this.prewrite = new It({
                async: !1
            }), this.newsub = new It({
                async: !1
            });
        }
    };
    class It {
        #e = new Set;
        #t;
        constructor(e){
            this.#t = e.async, this.noop = !0, this.run = this.#n();
        }
        add(e) {
            Dn(e), this.#e.add(e), this.noop = !1, this.run = this.#n();
        }
        delete(e) {
            Dn(e), this.#e.delete(e), this.noop = this.#e.size === 0, this.run = this.#n();
        }
        #n() {
            if (this.noop) return Mo;
            if (this.#e.size === 1) {
                const [e] = this.#e;
                return e;
            } else return this.#t ? async function(n, ...r) {
                for (const s of n)await s(...r);
            }.bind(null, Array.from(this.#e)) : function(n, ...r) {
                for (const s of n)s(...r);
            }.bind(null, Array.from(this.#e));
        }
    }
    const Dn = function(t) {
        if (typeof t != "function") {
            const e = t === null ? "null" : typeof t;
            throw new TypeError(`The first argument must be a function, received ${e}`);
        }
    };
    Yr.DatabaseHooks = Fo;
    var Xr = {};
    const { deprecate: Ho } = R;
    Xr.EventMonitor = class {
        constructor(e){
            this.write = !1;
            const n = (s)=>{
                s === "write" && (this.write = !0), (s === "put" || s === "del" || s === "batch") && Ho(`The '${s}' event has been removed in favor of 'write'`);
            }, r = (s)=>{
                s === "write" && (this.write = e.listenerCount("write") > 0);
            };
            e.on("newListener", n), e.on("removeListener", r);
        }
    };
    var Qr = {};
    const { getOptions: jo, emptyOptions: Go } = R, { AbortError: Cn } = dn;
    class Un {
        constructor(e, n){
            this.fn = e, this.signal = n;
        }
    }
    let zo = class {
        #e;
        #t;
        constructor(){
            this.#e = [], this.#t = new Set;
        }
        add(e, n) {
            n = jo(n, Go);
            const r = n.signal;
            if (r == null) {
                this.#e.push(new Un(e, null));
                return;
            }
            if (r.aborted) {
                e(new Cn);
                return;
            }
            this.#t.has(r) || (this.#t.add(r), r.addEventListener("abort", this.#n, {
                once: !0
            })), this.#e.push(new Un(e, r));
        }
        drain() {
            const e = this.#e, n = this.#t;
            this.#e = [], this.#t = new Set;
            for (const r of n)r.removeEventListener("abort", this.#n);
            for (const r of e)r.fn.call(null);
        }
        #n = (e)=>{
            const n = e.target, r = new Cn, s = [];
            this.#e = this.#e.filter(function(o) {
                return o.signal !== null && o.signal === n ? (s.push(o), !1) : !0;
            }), this.#t.delete(n);
            for (const o of s)o.fn.call(null, r);
        };
    };
    Qr.DeferredQueue = zo;
    const Wo = Object.prototype.hasOwnProperty, qo = new Set([
        "lt",
        "lte",
        "gt",
        "gte"
    ]);
    var Yo = function(t, e) {
        const n = {};
        for(const r in t)Wo.call(t, r) && (r === "keyEncoding" || r === "valueEncoding" || (qo.has(r) ? n[r] = e.encode(t[r]) : n[r] = t[r]));
        return n.reverse = !!n.reverse, n.limit = Number.isInteger(n.limit) && n.limit >= 0 ? n.limit : -1, n;
    }, ve = {}, Mn;
    function Xo() {
        if (Mn) return ve;
        Mn = 1;
        const { AbstractIterator: t, AbstractKeyIterator: e, AbstractValueIterator: n } = H;
        class r extends t {
            #e;
            #t;
            constructor(a, c, u, l){
                super(a, c), this.#e = u, this.#t = l;
            }
            async _next() {
                const a = await this.#e.next();
                if (a !== void 0) {
                    const c = a[0];
                    c !== void 0 && (a[0] = this.#t(c));
                }
                return a;
            }
            async _nextv(a, c) {
                const u = await this.#e.nextv(a, c), l = this.#t;
                for (const f of u){
                    const h = f[0];
                    h !== void 0 && (f[0] = l(h));
                }
                return u;
            }
            async _all(a) {
                const c = await this.#e.all(a), u = this.#t;
                for (const l of c){
                    const f = l[0];
                    f !== void 0 && (l[0] = u(f));
                }
                return c;
            }
            _seek(a, c) {
                this.#e.seek(a, c);
            }
            async _close() {
                return this.#e.close();
            }
        }
        class s extends e {
            #e;
            #t;
            constructor(a, c, u, l){
                super(a, c), this.#e = u, this.#t = l;
            }
            async _next() {
                const a = await this.#e.next();
                return a === void 0 ? a : this.#t(a);
            }
            async _nextv(a, c) {
                const u = await this.#e.nextv(a, c), l = this.#t;
                for(let f = 0; f < u.length; f++){
                    const h = u[f];
                    h !== void 0 && (u[f] = l(h));
                }
                return u;
            }
            async _all(a) {
                const c = await this.#e.all(a), u = this.#t;
                for(let l = 0; l < c.length; l++){
                    const f = c[l];
                    f !== void 0 && (c[l] = u(f));
                }
                return c;
            }
            _seek(a, c) {
                this.#e.seek(a, c);
            }
            async _close() {
                return this.#e.close();
            }
        }
        class o extends n {
            #e;
            constructor(a, c, u){
                super(a, c), this.#e = u;
            }
            async _next() {
                return this.#e.next();
            }
            async _nextv(a, c) {
                return this.#e.nextv(a, c);
            }
            async _all(a) {
                return this.#e.all(a);
            }
            _seek(a, c) {
                this.#e.seek(a, c);
            }
            async _close() {
                return this.#e.close();
            }
        }
        return ve.AbstractSublevelIterator = r, ve.AbstractSublevelKeyIterator = s, ve.AbstractSublevelValueIterator = o, ve;
    }
    var Pt, Fn;
    function Qo() {
        if (Fn) return Pt;
        Fn = 1;
        const t = F, { Buffer: e } = x || {}, { AbstractSublevelIterator: n, AbstractSublevelKeyIterator: r, AbstractSublevelValueIterator: s } = Xo(), o = Symbol("root"), i = new TextEncoder, a = {
            separator: "!"
        };
        Pt = function({ AbstractLevel: y }) {
            class p extends y {
                #e;
                #t;
                #n;
                #o;
                #a;
                #r;
                #i;
                static defaults(d) {
                    return d == null ? a : d.separator ? d : {
                        ...d,
                        separator: "!"
                    };
                }
                constructor(d, g, m){
                    const { separator: b, manifest: E, ...v } = p.defaults(m), T = [].concat(g).map((be)=>h(be, b)), me = b.charCodeAt(0) + 1, vt = d[o] || d;
                    if (!T.every((be)=>i.encode(be).every((Sn)=>Sn > me && Sn < 127))) throw new t(`Sublevel name must use bytes > ${me} < 127`, {
                        code: "LEVEL_INVALID_PREFIX"
                    });
                    super(c(d, E), v);
                    const Fe = T.map((be)=>b + be + b).join(""), xn = (d.prefix || "") + Fe, Os = xn.slice(0, -1) + String.fromCharCode(me);
                    this[o] = vt, this.#r = d, this.#n = T, this.#o = d.prefix ? d.path().concat(T) : T, this.#e = new l(xn), this.#a = new l(Os), this.#t = new l(Fe), this.#i = new f;
                }
                prefixKey(d, g, m) {
                    const b = m ? this.#t : this.#e;
                    if (g === "utf8") return b.utf8 + d;
                    if (d.byteLength === 0) return b[g];
                    if (g === "view") {
                        const E = b.view, v = new Uint8Array(E.byteLength + d.byteLength);
                        return v.set(E, 0), v.set(d, E.byteLength), v;
                    } else {
                        const E = b.buffer;
                        return e.concat([
                            E,
                            d
                        ], E.byteLength + d.byteLength);
                    }
                }
                #s(d, g) {
                    d.gte !== void 0 ? d.gte = this.prefixKey(d.gte, g, !1) : d.gt !== void 0 ? d.gt = this.prefixKey(d.gt, g, !1) : d.gte = this.#e[g], d.lte !== void 0 ? d.lte = this.prefixKey(d.lte, g, !1) : d.lt !== void 0 ? d.lt = this.prefixKey(d.lt, g, !1) : d.lte = this.#a[g];
                }
                get prefix() {
                    return this.#e.utf8;
                }
                get db() {
                    return this[o];
                }
                get parent() {
                    return this.#r;
                }
                path(d = !1) {
                    return d ? this.#n : this.#o;
                }
                async _open(d) {
                    await this.#r.open({
                        passive: !0
                    }), this.#r.attachResource(this);
                }
                async _close() {
                    this.#r.detachResource(this);
                }
                async _put(d, g, m) {
                    return this.#r.put(d, g, m);
                }
                async _get(d, g) {
                    return this.#r.get(d, g);
                }
                _getSync(d, g) {
                    return this.#r.getSync(d, g);
                }
                async _getMany(d, g) {
                    return this.#r.getMany(d, g);
                }
                async _has(d, g) {
                    return this.#r.has(d, g);
                }
                async _hasMany(d, g) {
                    return this.#r.hasMany(d, g);
                }
                async _del(d, g) {
                    return this.#r.del(d, g);
                }
                async _batch(d, g) {
                    return this.#r.batch(d, g);
                }
                async _clear(d) {
                    return this.#s(d, d.keyEncoding), this[o].clear(d);
                }
                _iterator(d) {
                    this.#s(d, d.keyEncoding);
                    const g = this[o].iterator(d), m = this.#i.get(this.#e.utf8.length, d.keyEncoding);
                    return new n(this, d, g, m);
                }
                _keys(d) {
                    this.#s(d, d.keyEncoding);
                    const g = this[o].keys(d), m = this.#i.get(this.#e.utf8.length, d.keyEncoding);
                    return new r(this, d, g, m);
                }
                _values(d) {
                    this.#s(d, d.keyEncoding);
                    const g = this[o].values(d);
                    return new s(this, d, g);
                }
                _snapshot(d) {
                    return this[o].snapshot(d);
                }
            }
            return {
                AbstractSublevel: p
            };
        };
        const c = function(y, p) {
            return {
                ...y.supports,
                createIfMissing: !1,
                errorIfExists: !1,
                events: {},
                additionalMethods: {},
                ...p,
                encodings: {
                    utf8: u(y, "utf8"),
                    buffer: u(y, "buffer"),
                    view: u(y, "view")
                }
            };
        }, u = function(y, p) {
            return y.supports.encodings[p] ? y.keyEncoding(p).name === p : !1;
        };
        class l {
            constructor(p){
                this.utf8 = p, this.view = i.encode(p), this.buffer = e ? e.from(this.view.buffer, 0, this.view.byteLength) : {};
            }
        }
        class f {
            constructor(){
                this.cache = new Map;
            }
            get(p, w) {
                let d = this.cache.get(w);
                return d === void 0 && (w === "view" ? d = function(g, m) {
                    return m.subarray(g);
                }.bind(null, p) : d = function(g, m) {
                    return m.slice(g);
                }.bind(null, p), this.cache.set(w, d)), d;
            }
        }
        const h = function(y, p) {
            let w = 0, d = y.length;
            for(; w < d && y[w] === p;)w++;
            for(; d > w && y[d - 1] === p;)d--;
            return y.slice(w, d);
        };
        return Pt;
    }
    const { supports: Zo } = Lr, { Transcoder: Jo } = Ir, { EventEmitter: ei } = lo, A = F, Kt = hn, { AbstractIterator: ee } = H, { DefaultKeyIterator: ti, DefaultValueIterator: ni } = gn, { DeferredIterator: ri, DeferredKeyIterator: si, DeferredValueIterator: oi } = gt, { DefaultChainedBatch: ii } = Wr, { DatabaseHooks: ai } = Yr, { PrewriteBatch: ci } = mn, { EventMonitor: ui } = Xr, { getOptions: V, noop: Rt, emptyOptions: li, resolvedPromise: Hn } = R, { prefixDescendantKey: fi, isDescendant: hi } = Me, { DeferredQueue: di } = Qr, ze = Yo;
    let bn = class extends ei {
        #e = "opening";
        #t = !0;
        #n = null;
        #o = !1;
        #a;
        #r;
        #i;
        #s;
        #u;
        #c;
        #f;
        #h;
        constructor(e, n){
            if (super(), typeof e != "object" || e === null) throw new TypeError("The first argument 'manifest' must be an object");
            n = V(n);
            const { keyEncoding: r, valueEncoding: s, passive: o, ...i } = n;
            this.#a = new Set, this.#r = new di, this.#i = i;
            const a = e.snapshots !== !1 && e.implicitSnapshots !== !1;
            this.hooks = new ai, this.supports = Zo(e, {
                deferredOpen: !0,
                seek: !0,
                implicitSnapshots: a,
                permanence: e.permanence !== !1,
                encodings: e.encodings || {},
                events: {
                    ...e.events,
                    opening: !0,
                    open: !0,
                    closing: !0,
                    closed: !0,
                    write: !0,
                    clear: !0
                }
            }), this.#h = new ui(this), this.#u = new Jo(yi(this)), this.#c = this.#u.encoding(r || "utf8"), this.#f = this.#u.encoding(s || "utf8");
            for (const c of this.#u.encodings())this.supports.encodings[c.commonName] || (this.supports.encodings[c.commonName] = !0);
            this.#s = {
                empty: li,
                entry: Object.freeze({
                    keyEncoding: this.#c.commonName,
                    valueEncoding: this.#f.commonName
                }),
                entryFormat: Object.freeze({
                    keyEncoding: this.#c.format,
                    valueEncoding: this.#f.format
                }),
                key: Object.freeze({
                    keyEncoding: this.#c.commonName
                }),
                keyFormat: Object.freeze({
                    keyEncoding: this.#c.format
                }),
                owner: Object.freeze({
                    owner: this
                })
            }, queueMicrotask(()=>{
                this.#t && this.open({
                    passive: !1
                }).catch(Rt);
            });
        }
        get status() {
            return this.#e;
        }
        get parent() {
            return null;
        }
        keyEncoding(e) {
            return this.#u.encoding(e ?? this.#c);
        }
        valueEncoding(e) {
            return this.#u.encoding(e ?? this.#f);
        }
        async open(e) {
            e = {
                ...this.#i,
                ...V(e)
            }, e.createIfMissing = e.createIfMissing !== !1, e.errorIfExists = !!e.errorIfExists;
            const n = this.hooks.postopen.noop ? null : this.hooks.postopen.run, r = e.passive;
            for(r && this.#t && await void 0, this.#d(); this.#n !== null;)await this.#n.catch(Rt);
            if (this.#d(), r) {
                if (this.#e !== "open") throw new Nt;
            } else if (this.#e === "closed" || this.#t) {
                this.#t = !1, this.#n = Hn, this.#n = (async ()=>{
                    this.#e = "opening";
                    try {
                        this.emit("opening"), await this._open(e);
                    } catch (s) {
                        this.#e = "closed", this.#r.drain();
                        try {
                            await this.#y();
                        } catch (o) {
                            s = Kt([
                                s,
                                o
                            ]);
                        }
                        throw new Nt(s);
                    }
                    if (this.#e = "open", n !== null) {
                        let s;
                        try {
                            this.#o = !0, await n(e);
                        } catch (o) {
                            s = jn(o);
                        } finally{
                            this.#o = !1;
                        }
                        if (s) {
                            this.#e = "closing", this.#r.drain();
                            try {
                                await this.#y(), await this._close();
                            } catch (o) {
                                this.#o = !0, s = Kt([
                                    s,
                                    o
                                ]);
                            }
                            throw this.#e = "closed", new A("The postopen hook failed on open()", {
                                code: "LEVEL_HOOK_ERROR",
                                cause: s
                            });
                        }
                    }
                    this.#r.drain(), this.emit("open");
                })();
                try {
                    await this.#n;
                } finally{
                    this.#n = null;
                }
            } else if (this.#e !== "open") throw new Nt;
        }
        async _open(e) {}
        async close() {
            for(this.#d(); this.#n !== null;)await this.#n.catch(Rt);
            if (this.#d(), this.#e === "open" || this.#t) {
                const e = this.#t;
                this.#t = !1, this.#n = Hn, this.#n = (async ()=>{
                    this.#e = "closing", this.#r.drain();
                    try {
                        this.emit("closing"), await this.#y(), e || await this._close();
                    } catch (n) {
                        throw this.#e = "open", this.#r.drain(), new Gn(n);
                    }
                    this.#e = "closed", this.#r.drain(), this.emit("closed");
                })();
                try {
                    await this.#n;
                } finally{
                    this.#n = null;
                }
            } else if (this.#e !== "closed") throw new Gn;
        }
        async #y() {
            if (this.#a.size === 0) return;
            const e = Array.from(this.#a), n = e.map(gi), r = await Promise.allSettled(n), s = [];
            for(let o = 0; o < r.length; o++)r[o].status === "fulfilled" ? this.#a.delete(e[o]) : s.push(jn(r[o].reason));
            if (s.length > 0) throw Kt(s);
        }
        async _close() {}
        async get(e, n) {
            if (n = V(n, this.#s.entry), this.#e === "opening") return this.deferAsync(()=>this.get(e, n));
            this.#l(), this._assertValidKey(e);
            const r = n.snapshot, s = this.keyEncoding(n.keyEncoding), o = this.valueEncoding(n.valueEncoding), i = s.format, a = o.format;
            n === this.#s.entry ? n = this.#s.entryFormat : (n.keyEncoding !== i || n.valueEncoding !== a) && (n = {
                ...n,
                keyEncoding: i,
                valueEncoding: a
            });
            const c = s.encode(e), u = this.prefixKey(c, i, !0);
            r?.ref();
            let l;
            try {
                l = await this._get(u, n);
            } finally{
                r?.unref();
            }
            try {
                return l === void 0 ? l : o.decode(l);
            } catch (f) {
                throw new A("Could not decode value", {
                    code: "LEVEL_DECODE_ERROR",
                    cause: f
                });
            }
        }
        async _get(e, n) {}
        getSync(e, n) {
            if (this.status !== "open") throw new A("Database is not open", {
                code: "LEVEL_DATABASE_NOT_OPEN"
            });
            if (this._assertValidKey(e), n == null) {
                const f = this.#c.encode(e), h = this.prefixKey(f, this.#c.format, !0), y = this._getSync(h, this.#s.entryFormat);
                try {
                    return y !== void 0 ? this.#f.decode(y) : void 0;
                } catch (p) {
                    throw new A("Could not decode value", {
                        code: "LEVEL_DECODE_ERROR",
                        cause: p
                    });
                }
            }
            const r = n.snapshot, s = this.keyEncoding(n.keyEncoding), o = this.valueEncoding(n.valueEncoding), i = s.format, a = o.format;
            (n.keyEncoding !== i || n.valueEncoding !== a) && (n = {
                ...n,
                keyEncoding: i,
                valueEncoding: a
            });
            const c = s.encode(e), u = this.prefixKey(c, i, !0);
            let l;
            r?.ref();
            try {
                l = this._getSync(u, n);
            } finally{
                r?.unref();
            }
            try {
                return l !== void 0 ? o.decode(l) : void 0;
            } catch (f) {
                throw new A("Could not decode value", {
                    code: "LEVEL_DECODE_ERROR",
                    cause: f
                });
            }
        }
        _getSync(e, n) {
            throw new A("Database does not support getSync()", {
                code: "LEVEL_NOT_SUPPORTED"
            });
        }
        async getMany(e, n) {
            if (n = V(n, this.#s.entry), this.#e === "opening") return this.deferAsync(()=>this.getMany(e, n));
            if (this.#l(), !Array.isArray(e)) throw new TypeError("The first argument 'keys' must be an array");
            if (e.length === 0) return [];
            const r = n.snapshot, s = this.keyEncoding(n.keyEncoding), o = this.valueEncoding(n.valueEncoding), i = s.format, a = o.format;
            n === this.#s.entry ? n = this.#s.entryFormat : (n.keyEncoding !== i || n.valueEncoding !== a) && (n = {
                ...n,
                keyEncoding: i,
                valueEncoding: a
            });
            const c = new Array(e.length);
            for(let l = 0; l < e.length; l++){
                const f = e[l];
                this._assertValidKey(f), c[l] = this.prefixKey(s.encode(f), i, !0);
            }
            r?.ref();
            let u;
            try {
                u = await this._getMany(c, n);
            } finally{
                r?.unref();
            }
            try {
                for(let l = 0; l < u.length; l++)u[l] !== void 0 && (u[l] = o.decode(u[l]));
            } catch (l) {
                throw new A(`Could not decode one or more of ${u.length} value(s)`, {
                    code: "LEVEL_DECODE_ERROR",
                    cause: l
                });
            }
            return u;
        }
        async _getMany(e, n) {
            return new Array(e.length).fill(void 0);
        }
        async has(e, n) {
            if (n = V(n, this.#s.key), this.#e === "opening") return this.deferAsync(()=>this.has(e, n));
            this.#l(), this._assertValidKey(e);
            const r = n.snapshot, s = this.keyEncoding(n.keyEncoding), o = s.format;
            n === this.#s.key ? n = this.#s.keyFormat : n.keyEncoding !== o && (n = {
                ...n,
                keyEncoding: o
            });
            const i = s.encode(e), a = this.prefixKey(i, o, !0);
            r?.ref();
            try {
                return this._has(a, n);
            } finally{
                r?.unref();
            }
        }
        async _has(e, n) {
            throw new A("Database does not support has()", {
                code: "LEVEL_NOT_SUPPORTED"
            });
        }
        async hasMany(e, n) {
            if (n = V(n, this.#s.key), this.#e === "opening") return this.deferAsync(()=>this.hasMany(e, n));
            if (this.#l(), !Array.isArray(e)) throw new TypeError("The first argument 'keys' must be an array");
            if (e.length === 0) return [];
            const r = n.snapshot, s = this.keyEncoding(n.keyEncoding), o = s.format;
            n === this.#s.key ? n = this.#s.keyFormat : n.keyEncoding !== o && (n = {
                ...n,
                keyEncoding: o
            });
            const i = new Array(e.length);
            for(let a = 0; a < e.length; a++){
                const c = e[a];
                this._assertValidKey(c), i[a] = this.prefixKey(s.encode(c), o, !0);
            }
            r?.ref();
            try {
                return this._hasMany(i, n);
            } finally{
                r?.unref();
            }
        }
        async _hasMany(e, n) {
            throw new A("Database does not support hasMany()", {
                code: "LEVEL_NOT_SUPPORTED"
            });
        }
        async put(e, n, r) {
            if (!this.hooks.prewrite.noop) return this.batch([
                {
                    type: "put",
                    key: e,
                    value: n
                }
            ], r);
            if (r = V(r, this.#s.entry), this.#e === "opening") return this.deferAsync(()=>this.put(e, n, r));
            this.#l(), this._assertValidKey(e), this._assertValidValue(n);
            const s = this.keyEncoding(r.keyEncoding), o = this.valueEncoding(r.valueEncoding), i = s.format, a = o.format, c = this.#h.write, u = r;
            r === this.#s.entry ? r = this.#s.entryFormat : (r.keyEncoding !== i || r.valueEncoding !== a) && (r = {
                ...r,
                keyEncoding: i,
                valueEncoding: a
            });
            const l = s.encode(e), f = this.prefixKey(l, i, !0), h = o.encode(n);
            if (await this._put(f, h, r), c) {
                const y = {
                    ...u,
                    type: "put",
                    key: e,
                    value: n,
                    keyEncoding: s,
                    valueEncoding: o,
                    encodedKey: l,
                    encodedValue: h
                };
                this.emit("write", [
                    y
                ]);
            }
        }
        async _put(e, n, r) {}
        async del(e, n) {
            if (!this.hooks.prewrite.noop) return this.batch([
                {
                    type: "del",
                    key: e
                }
            ], n);
            if (n = V(n, this.#s.key), this.#e === "opening") return this.deferAsync(()=>this.del(e, n));
            this.#l(), this._assertValidKey(e);
            const r = this.keyEncoding(n.keyEncoding), s = r.format, o = this.#h.write, i = n;
            n === this.#s.key ? n = this.#s.keyFormat : n.keyEncoding !== s && (n = {
                ...n,
                keyEncoding: s
            });
            const a = r.encode(e), c = this.prefixKey(a, s, !0);
            if (await this._del(c, n), o) {
                const u = {
                    ...i,
                    type: "del",
                    key: e,
                    keyEncoding: r,
                    encodedKey: a
                };
                this.emit("write", [
                    u
                ]);
            }
        }
        async _del(e, n) {}
        batch(e, n) {
            return arguments.length ? (n = V(n, this.#s.empty), this.#g(e, n)) : (this.#l(), this._chainedBatch());
        }
        async #g(e, n) {
            if (this.#e === "opening") return this.deferAsync(()=>this.#g(e, n));
            if (this.#l(), !Array.isArray(e)) throw new TypeError("The first argument 'operations' must be an array");
            if (e.length === 0) return;
            const r = e.length, s = !this.hooks.prewrite.noop, o = this.#h.write, i = o ? new Array(r) : null, a = new Array(r), c = s ? new ci(this, a, i) : null;
            for(let u = 0; u < r; u++){
                const l = {
                    ...n,
                    ...e[u]
                }, f = l.type === "put", h = l.sublevel != null, y = h ? l.sublevel : this;
                if (y._assertValidKey(l.key), l.keyEncoding = y.keyEncoding(l.keyEncoding), f) y._assertValidValue(l.value), l.valueEncoding = y.valueEncoding(l.valueEncoding);
                else if (l.type !== "del") throw new TypeError("A batch operation must have a type property that is 'put' or 'del'");
                if (s) try {
                    this.hooks.prewrite.run(l, c), l.keyEncoding = y.keyEncoding(l.keyEncoding), f && (l.valueEncoding = y.valueEncoding(l.valueEncoding));
                } catch (E) {
                    throw new A("The prewrite hook failed on batch()", {
                        code: "LEVEL_HOOK_ERROR",
                        cause: E
                    });
                }
                const p = l.keyEncoding, w = p.encode(l.key), d = p.format, g = h && !hi(l.sublevel, this) && l.sublevel !== this, m = h && !g ? fi(w, d, y, this) : w;
                h && !g && (l.sublevel = null);
                let b = null;
                if (o && !g && (b = {
                    ...l
                }, b.encodedKey = m, h && (b.key = m, b.keyEncoding = this.keyEncoding(d)), i[u] = b), l.key = g ? m : this.prefixKey(m, d, !0), l.keyEncoding = d, f) {
                    const E = l.valueEncoding, v = E.encode(l.value), T = E.format;
                    l.value = v, l.valueEncoding = T, o && !g && (b.encodedValue = v, h && (b.value = v, b.valueEncoding = this.valueEncoding(T)));
                }
                a[u] = l;
            }
            await this._batch(a, n), o && this.emit("write", i);
        }
        async _batch(e, n) {}
        sublevel(e, n) {
            const r = qt.defaults(n), s = this._sublevel(e, r);
            if (!this.hooks.newsub.noop) try {
                this.hooks.newsub.run(s, r);
            } catch (o) {
                throw new A("The newsub hook failed on sublevel()", {
                    code: "LEVEL_HOOK_ERROR",
                    cause: o
                });
            }
            return s;
        }
        _sublevel(e, n) {
            return new qt(this, e, n);
        }
        prefixKey(e, n, r) {
            return e;
        }
        async clear(e) {
            if (e = V(e, this.#s.empty), this.#e === "opening") return this.deferAsync(()=>this.clear(e));
            this.#l();
            const n = e, r = this.keyEncoding(e.keyEncoding), s = e.snapshot;
            if (e = ze(e, r), e.keyEncoding = r.format, e.limit !== 0) {
                s?.ref();
                try {
                    await this._clear(e);
                } finally{
                    s?.unref();
                }
                this.emit("clear", n);
            }
        }
        async _clear(e) {}
        iterator(e) {
            const n = this.keyEncoding(e?.keyEncoding), r = this.valueEncoding(e?.valueEncoding);
            return e = ze(e, n), e.keys = e.keys !== !1, e.values = e.values !== !1, e[ee.keyEncoding] = n, e[ee.valueEncoding] = r, e.keyEncoding = n.format, e.valueEncoding = r.format, this.#e === "opening" ? new ri(this, e) : (this.#l(), this._iterator(e));
        }
        _iterator(e) {
            return new ee(this, e);
        }
        keys(e) {
            const n = this.keyEncoding(e?.keyEncoding), r = this.valueEncoding(e?.valueEncoding);
            return e = ze(e, n), e[ee.keyEncoding] = n, e[ee.valueEncoding] = r, e.keyEncoding = n.format, e.valueEncoding = r.format, this.#e === "opening" ? new si(this, e) : (this.#l(), this._keys(e));
        }
        _keys(e) {
            return new ti(this, e);
        }
        values(e) {
            const n = this.keyEncoding(e?.keyEncoding), r = this.valueEncoding(e?.valueEncoding);
            return e = ze(e, n), e[ee.keyEncoding] = n, e[ee.valueEncoding] = r, e.keyEncoding = n.format, e.valueEncoding = r.format, this.#e === "opening" ? new oi(this, e) : (this.#l(), this._values(e));
        }
        _values(e) {
            return new ni(this, e);
        }
        snapshot(e) {
            return this.#l(), typeof e != "object" || e === null ? e = this.#s.owner : e.owner == null && (e = {
                ...e,
                owner: this
            }), this._snapshot(e);
        }
        _snapshot(e) {
            throw new A("Database does not support explicit snapshots", {
                code: "LEVEL_NOT_SUPPORTED"
            });
        }
        defer(e, n) {
            if (typeof e != "function") throw new TypeError("The first argument must be a function");
            this.#r.add(function(r) {
                r || e();
            }, n);
        }
        deferAsync(e, n) {
            if (typeof e != "function") throw new TypeError("The first argument must be a function");
            return new Promise((r, s)=>{
                this.#r.add(function(o) {
                    o ? s(o) : e().then(r, s);
                }, n);
            });
        }
        attachResource(e) {
            if (typeof e != "object" || e === null || typeof e.close != "function") throw new TypeError("The first argument must be a resource object");
            this.#a.add(e);
        }
        detachResource(e) {
            this.#a.delete(e);
        }
        _chainedBatch() {
            return new ii(this);
        }
        _assertValidKey(e) {
            if (e == null) throw new A("Key cannot be null or undefined", {
                code: "LEVEL_INVALID_KEY"
            });
        }
        _assertValidValue(e) {
            if (e == null) throw new A("Value cannot be null or undefined", {
                code: "LEVEL_INVALID_VALUE"
            });
        }
        #l() {
            if (this.#e !== "open") throw new A("Database is not open", {
                code: "LEVEL_DATABASE_NOT_OPEN"
            });
        }
        #d() {
            if (this.#o) throw new A("Database status is locked", {
                code: "LEVEL_STATUS_LOCKED"
            });
        }
    };
    const { AbstractSublevel: qt } = Qo()({
        AbstractLevel: bn
    });
    ft.AbstractLevel = bn;
    ft.AbstractSublevel = qt;
    typeof Symbol.asyncDispose == "symbol" && (bn.prototype[Symbol.asyncDispose] = async function() {
        return this.close();
    });
    const yi = function(t) {
        return Object.keys(t.supports.encodings).filter((e)=>!!t.supports.encodings[e]);
    }, gi = function(t) {
        return t.close();
    }, jn = function(t) {
        if (t instanceof Error || Object.prototype.toString.call(t) === "[object Error]") return t;
        const n = `Promise rejection reason must be an Error, received ${t === null ? "null" : typeof t}`;
        return new TypeError(n);
    };
    class Nt extends A {
        constructor(e){
            super("Database failed to open", {
                code: "LEVEL_DATABASE_NOT_OPEN",
                cause: e
            });
        }
    }
    class Gn extends A {
        constructor(e){
            super("Database failed to close", {
                code: "LEVEL_DATABASE_NOT_CLOSED",
                cause: e
            });
        }
    }
    var Zr = {};
    const pi = F, { noop: wi } = R;
    class Jr {
        #e = !0;
        #t = 0;
        #n = null;
        #o = null;
        #a;
        constructor(e){
            const n = e.owner;
            if (typeof n != "object" || n === null) {
                const r = n === null ? "null" : typeof n;
                throw new TypeError(`Owner must be an abstract-level database, received ${r}`);
            }
            this.#a = n, this.#a.attachResource(this);
        }
        ref() {
            if (!this.#e) throw new pi("Snapshot is not open: cannot use snapshot after close()", {
                code: "LEVEL_SNAPSHOT_NOT_OPEN"
            });
            this.#t++;
        }
        unref() {
            --this.#t === 0 && this.#n?.();
        }
        async close() {
            return this.#o !== null ? this.#o.catch(wi) : (this.#e = !1, this.#o = new Promise((e, n)=>{
                this.#n = ()=>{
                    this.#n = null, mi(this, this.#a).then(e, n);
                };
            }), this.#t === 0 && this.#n(), this.#o);
        }
        async _close() {}
    }
    typeof Symbol.asyncDispose == "symbol" && (Jr.prototype[Symbol.asyncDispose] = async function() {
        return this.close();
    });
    const mi = async function(t, e) {
        await t._close(), e.detachResource(t);
    };
    Zr.AbstractSnapshot = Jr;
    q.AbstractLevel = ft.AbstractLevel;
    q.AbstractSublevel = ft.AbstractSublevel;
    q.AbstractIterator = H.AbstractIterator;
    q.AbstractKeyIterator = H.AbstractKeyIterator;
    q.AbstractValueIterator = H.AbstractValueIterator;
    q.AbstractChainedBatch = wn.AbstractChainedBatch;
    q.AbstractSnapshot = Zr.AbstractSnapshot;
    var es = {}, ts = function(e) {
        const n = e.gte !== void 0 ? e.gte : e.gt !== void 0 ? e.gt : void 0, r = e.lte !== void 0 ? e.lte : e.lt !== void 0 ? e.lt : void 0, s = e.gte === void 0, o = e.lte === void 0;
        return n !== void 0 && r !== void 0 ? IDBKeyRange.bound(n, r, s, o) : n !== void 0 ? IDBKeyRange.lowerBound(n, s) : r !== void 0 ? IDBKeyRange.upperBound(r, o) : null;
    };
    const bi = new TextEncoder;
    var ns = function(t) {
        return t === void 0 || t instanceof Uint8Array ? t : t instanceof ArrayBuffer ? new Uint8Array(t) : bi.encode(t);
    };
    const { AbstractIterator: Ei } = q, zn = ts, We = ns, N = Symbol("cache"), j = Symbol("finished"), K = Symbol("options"), G = Symbol("currentOptions"), te = Symbol("position"), Bt = Symbol("location"), ue = Symbol("first"), Wn = {};
    let vi = class extends Ei {
        constructor(e, n, r){
            super(e, r), this[N] = [], this[j] = this.limit === 0, this[K] = r, this[G] = {
                ...r
            }, this[te] = void 0, this[Bt] = n, this[ue] = !0;
        }
        async _nextv(e, n) {
            if (this[ue] = !1, this[j]) return [];
            if (this[N].length > 0) return e = Math.min(e, this[N].length), this[N].splice(0, e);
            this[te] !== void 0 && (this[K].reverse ? (this[G].lt = this[te], this[G].lte = void 0) : (this[G].gt = this[te], this[G].gte = void 0));
            let r;
            try {
                r = zn(this[G]);
            } catch  {
                return this[j] = !0, [];
            }
            const s = this.db.db.transaction([
                this[Bt]
            ], "readonly"), o = s.objectStore(this[Bt]), i = [], a = new Promise(function(c, u) {
                s.onabort = ()=>{
                    u(s.error || new Error("aborted by user"));
                }, s.oncomplete = ()=>{
                    c(i);
                };
            });
            if (this[K].reverse) {
                const c = !this[K].values && o.openKeyCursor ? "openKeyCursor" : "openCursor";
                o[c](r, "prev").onsuccess = (u)=>{
                    const l = u.target.result;
                    if (l) {
                        const { key: f, value: h } = l;
                        this[te] = f, i.push([
                            this[K].keys && f !== void 0 ? We(f) : void 0,
                            this[K].values && h !== void 0 ? We(h) : void 0
                        ]), i.length < e ? l.continue() : qn(s);
                    } else this[j] = !0;
                };
            } else {
                let c, u;
                const l = ()=>{
                    if (c === void 0 || u === void 0) return;
                    const f = Math.max(c.length, u.length);
                    f === 0 || e === 1 / 0 ? this[j] = !0 : this[te] = c[f - 1], i.length = f;
                    for(let h = 0; h < f; h++){
                        const y = c[h], p = u[h];
                        i[h] = [
                            this[K].keys ? We(y) : void 0,
                            this[K].values ? We(p) : void 0
                        ];
                    }
                    qn(s);
                };
                this[K].keys || e < 1 / 0 ? o.getAllKeys(r, e < 1 / 0 ? e : void 0).onsuccess = (f)=>{
                    c = f.target.result, l();
                } : (c = [], l()), this[K].values ? o.getAll(r, e < 1 / 0 ? e : void 0).onsuccess = (f)=>{
                    u = f.target.result, l();
                } : (u = [], l());
            }
            return a;
        }
        async _next() {
            if (this[N].length > 0) return this[N].shift();
            if (!this[j]) {
                let e = Math.min(100, this.limit - this.count);
                return this[ue] && (this[ue] = !1, e = 1), this[N] = await this._nextv(e, Wn), this[N].shift();
            }
        }
        async _all(e) {
            this[ue] = !1;
            const n = this[N].splice(0, this[N].length), r = this.limit - this.count - n.length;
            if (r <= 0) return n;
            let s = await this._nextv(r, Wn);
            return n.length > 0 && (s = n.concat(s)), s;
        }
        _seek(e, n) {
            this[ue] = !0, this[N] = [], this[j] = !1, this[te] = void 0, this[G] = {
                ...this[K]
            };
            let r;
            try {
                r = zn(this[K]);
            } catch  {
                this[j] = !0;
                return;
            }
            r !== null && !r.includes(e) ? this[j] = !0 : this[K].reverse ? this[G].lte = e : this[G].gte = e;
        }
    };
    es.Iterator = vi;
    function qn(t) {
        typeof t.commit == "function" && t.commit();
    }
    var _i = async function(e, n, r, s) {
        if (s.limit === 0) return;
        const o = e.db.transaction([
            n
        ], "readwrite"), i = o.objectStore(n);
        let a = 0;
        const c = new Promise(function(f, h) {
            o.oncomplete = f, o.onabort = function() {
                h(o.error || new Error("aborted by user"));
            };
        }), u = i.openKeyCursor ? "openKeyCursor" : "openCursor", l = s.reverse ? "prev" : "next";
        return i[u](r, l).onsuccess = function(f) {
            const h = f.target.result;
            h && (i.delete(h.key).onsuccess = function() {
                (s.limit <= 0 || ++a < s.limit) && h.continue();
            });
        }, c;
    };
    const { AbstractLevel: ki } = q, { Iterator: xi } = es, Yn = ns, Si = _i, Ai = ts, rs = "level-js-", _e = Symbol("idb"), $t = Symbol("namePrefix"), z = Symbol("location"), Vt = Symbol("version"), W = Symbol("store"), le = Symbol("onComplete");
    class ss extends ki {
        constructor(e, n){
            const { prefix: r, version: s, ...o } = n || {};
            if (super({
                encodings: {
                    view: !0
                },
                snapshots: !1,
                createIfMissing: !1,
                errorIfExists: !1,
                seek: !0,
                has: !0,
                getSync: !1
            }, o), typeof e != "string" || e === "") throw new TypeError("The first argument 'location' must be a non-empty string");
            this[z] = e, this[$t] = r ?? rs, this[Vt] = parseInt(s || 1, 10), this[_e] = null;
        }
        get location() {
            return this[z];
        }
        get namePrefix() {
            return this[$t];
        }
        get version() {
            return this[Vt];
        }
        get db() {
            return this[_e];
        }
        get type() {
            return "browser-level";
        }
        async _open(e) {
            const n = indexedDB.open(this[$t] + this[z], this[Vt]);
            return n.onupgradeneeded = (r)=>{
                const s = r.target.result;
                s.objectStoreNames.contains(this[z]) || s.createObjectStore(this[z]);
            }, new Promise((r, s)=>{
                n.onerror = function() {
                    s(n.error || new Error("unknown error"));
                }, n.onsuccess = ()=>{
                    this[_e] = n.result, r();
                };
            });
        }
        [W](e) {
            return this[_e].transaction([
                this[z]
            ], e).objectStore(this[z]);
        }
        [le](e) {
            const n = e.transaction;
            return new Promise(function(r, s) {
                n.onabort = function() {
                    s(n.error || new Error("aborted by user"));
                }, n.oncomplete = function() {
                    r(e.result);
                };
            });
        }
        async _get(e, n) {
            const s = this[W]("readonly").get(e), o = await this[le](s);
            return Yn(o);
        }
        async _getMany(e, n) {
            const r = this[W]("readonly"), s = e.values(), o = Math.min(16, e.length), i = new Array(o), a = new Array(e.length);
            let c = 0, u = !1;
            const l = async function() {
                try {
                    for (const f of s){
                        if (u) break;
                        const h = c++, y = r.get(f);
                        await new Promise(function(p, w) {
                            y.onsuccess = ()=>{
                                a[h] = Yn(y.result), p();
                            }, y.onerror = (d)=>{
                                d.stopPropagation(), w(y.error);
                            };
                        });
                    }
                } catch (f) {
                    throw u = !0, f;
                }
            };
            for(let f = 0; f < o; f++)i[f] = l();
            return await Promise.allSettled(i), a;
        }
        async _has(e, n) {
            const s = this[W]("readonly").count(e);
            return await this[le](s) === 1;
        }
        async _hasMany(e, n) {
            const r = this[W]("readonly"), s = e.values(), o = Math.min(16, e.length), i = new Array(o), a = new Array(e.length);
            let c = 0, u = !1;
            const l = async function() {
                try {
                    for (const f of s){
                        if (u) break;
                        const h = c++, y = r.count(f);
                        await new Promise(function(p, w) {
                            y.onsuccess = ()=>{
                                a[h] = y.result === 1, p();
                            }, y.onerror = (d)=>{
                                d.stopPropagation(), w(y.error);
                            };
                        });
                    }
                } catch (f) {
                    throw u = !0, f;
                }
            };
            for(let f = 0; f < o; f++)i[f] = l();
            return await Promise.allSettled(i), a;
        }
        async _del(e, n) {
            const s = this[W]("readwrite").delete(e);
            return this[le](s);
        }
        async _put(e, n, r) {
            const o = this[W]("readwrite").put(n, e);
            return this[le](o);
        }
        _iterator(e) {
            return new xi(this, this[z], e);
        }
        async _batch(e, n) {
            const r = this[W]("readwrite"), s = r.transaction;
            let o = 0, i;
            const a = new Promise(function(u, l) {
                s.onabort = function() {
                    l(i || s.error || new Error("aborted by user"));
                }, s.oncomplete = u;
            });
            function c() {
                const u = e[o++], l = u.key;
                let f;
                try {
                    f = u.type === "del" ? r.delete(l) : r.put(u.value, l);
                } catch (h) {
                    i = h, s.abort();
                    return;
                }
                o < e.length ? f.onsuccess = c : typeof s.commit == "function" && s.commit();
            }
            return c(), a;
        }
        async _clear(e) {
            let n;
            try {
                n = Ai(e);
            } catch  {
                return;
            }
            if (e.limit >= 0) return Si(this, this[z], n, e);
            const r = this[W]("readwrite"), s = n ? r.delete(n) : r.clear();
            return this[le](s);
        }
        async _close() {
            this[_e].close();
        }
    }
    ss.destroy = async function(t, e) {
        e == null && (e = rs);
        const n = indexedDB.deleteDatabase(e + t);
        return new Promise(function(r, s) {
            n.onsuccess = r, n.onerror = s;
        });
    };
    Or.BrowserLevel = ss;
    var Ti = Or.BrowserLevel;
    class Oi {
        constructor(){
            this.keyToValue = new Map, this.valueToKey = new Map;
        }
        set(e, n) {
            this.keyToValue.set(e, n), this.valueToKey.set(n, e);
        }
        getByKey(e) {
            return this.keyToValue.get(e);
        }
        getByValue(e) {
            return this.valueToKey.get(e);
        }
        clear() {
            this.keyToValue.clear(), this.valueToKey.clear();
        }
    }
    class os {
        constructor(e){
            this.generateIdentifier = e, this.kv = new Oi;
        }
        register(e, n) {
            this.kv.getByValue(e) || (n || (n = this.generateIdentifier(e)), this.kv.set(n, e));
        }
        clear() {
            this.kv.clear();
        }
        getIdentifier(e) {
            return this.kv.getByValue(e);
        }
        getValue(e) {
            return this.kv.getByKey(e);
        }
    }
    class Li extends os {
        constructor(){
            super((e)=>e.name), this.classToAllowedProps = new Map;
        }
        register(e, n) {
            typeof n == "object" ? (n.allowProps && this.classToAllowedProps.set(e, n.allowProps), super.register(e, n.identifier)) : super.register(e, n);
        }
        getAllowedProps(e) {
            return this.classToAllowedProps.get(e);
        }
    }
    function Ii(t) {
        if ("values" in Object) return Object.values(t);
        const e = [];
        for(const n in t)t.hasOwnProperty(n) && e.push(t[n]);
        return e;
    }
    function Pi(t, e) {
        const n = Ii(t);
        if ("find" in n) return n.find(e);
        const r = n;
        for(let s = 0; s < r.length; s++){
            const o = r[s];
            if (e(o)) return o;
        }
    }
    function we(t, e) {
        Object.entries(t).forEach(([n, r])=>e(r, n));
    }
    function nt(t, e) {
        return t.indexOf(e) !== -1;
    }
    function Xn(t, e) {
        for(let n = 0; n < t.length; n++){
            const r = t[n];
            if (e(r)) return r;
        }
    }
    class Ki {
        constructor(){
            this.transfomers = {};
        }
        register(e) {
            this.transfomers[e.name] = e;
        }
        findApplicable(e) {
            return Pi(this.transfomers, (n)=>n.isApplicable(e));
        }
        findByName(e) {
            return this.transfomers[e];
        }
    }
    const Ri = (t)=>Object.prototype.toString.call(t).slice(8, -1), is = (t)=>typeof t > "u", Ni = (t)=>t === null, Ke = (t)=>typeof t != "object" || t === null || t === Object.prototype ? !1 : Object.getPrototypeOf(t) === null ? !0 : Object.getPrototypeOf(t) === Object.prototype, Yt = (t)=>Ke(t) && Object.keys(t).length === 0, J = (t)=>Array.isArray(t), Bi = (t)=>typeof t == "string", $i = (t)=>typeof t == "number" && !isNaN(t), Vi = (t)=>typeof t == "boolean", Di = (t)=>t instanceof RegExp, Re = (t)=>t instanceof Map, Ne = (t)=>t instanceof Set, as = (t)=>Ri(t) === "Symbol", Ci = (t)=>t instanceof Date && !isNaN(t.valueOf()), cs = (t)=>t instanceof Error, Qn = (t)=>typeof t == "number" && isNaN(t), Ui = (t)=>Vi(t) || Ni(t) || is(t) || $i(t) || Bi(t) || as(t), Mi = (t)=>typeof t == "bigint", Fi = (t)=>t === 1 / 0 || t === -1 / 0, Hi = (t)=>ArrayBuffer.isView(t) && !(t instanceof DataView), ji = (t)=>t instanceof URL, Xt = (t)=>t.replace(/\\/g, "\\\\").replace(/\./g, "\\."), Dt = (t)=>t.map(String).map(Xt).join("."), Te = (t, e)=>{
        const n = [];
        let r = "";
        for(let o = 0; o < t.length; o++){
            let i = t.charAt(o);
            if (!e && i === "\\") {
                const u = t.charAt(o + 1);
                if (u === "\\") {
                    r += "\\", o++;
                    continue;
                } else if (u !== ".") throw Error("invalid path");
            }
            if (i === "\\" && t.charAt(o + 1) === ".") {
                r += ".", o++;
                continue;
            }
            if (i === ".") {
                n.push(r), r = "";
                continue;
            }
            r += i;
        }
        const s = r;
        return n.push(s), n;
    };
    function D(t, e, n, r) {
        return {
            isApplicable: t,
            annotation: e,
            transform: n,
            untransform: r
        };
    }
    const us = [
        D(is, "undefined", ()=>null, ()=>{}),
        D(Mi, "bigint", (t)=>t.toString(), (t)=>typeof BigInt < "u" ? BigInt(t) : (console.error("Please add a BigInt polyfill."), t)),
        D(Ci, "Date", (t)=>t.toISOString(), (t)=>new Date(t)),
        D(cs, "Error", (t, e)=>{
            const n = {
                name: t.name,
                message: t.message
            };
            return "cause" in t && (n.cause = t.cause), e.allowedErrorProps.forEach((r)=>{
                n[r] = t[r];
            }), n;
        }, (t, e)=>{
            const n = new Error(t.message, {
                cause: t.cause
            });
            return n.name = t.name, n.stack = t.stack, e.allowedErrorProps.forEach((r)=>{
                n[r] = t[r];
            }), n;
        }),
        D(Di, "regexp", (t)=>"" + t, (t)=>{
            const e = t.slice(1, t.lastIndexOf("/")), n = t.slice(t.lastIndexOf("/") + 1);
            return new RegExp(e, n);
        }),
        D(Ne, "set", (t)=>[
                ...t.values()
            ], (t)=>new Set(t)),
        D(Re, "map", (t)=>[
                ...t.entries()
            ], (t)=>new Map(t)),
        D((t)=>Qn(t) || Fi(t), "number", (t)=>Qn(t) ? "NaN" : t > 0 ? "Infinity" : "-Infinity", Number),
        D((t)=>t === 0 && 1 / t === -1 / 0, "number", ()=>"-0", Number),
        D(ji, "URL", (t)=>t.toString(), (t)=>new URL(t))
    ];
    function mt(t, e, n, r) {
        return {
            isApplicable: t,
            annotation: e,
            transform: n,
            untransform: r
        };
    }
    const ls = mt((t, e)=>as(t) ? !!e.symbolRegistry.getIdentifier(t) : !1, (t, e)=>[
            "symbol",
            e.symbolRegistry.getIdentifier(t)
        ], (t)=>t.description, (t, e, n)=>{
        const r = n.symbolRegistry.getValue(e[1]);
        if (!r) throw new Error("Trying to deserialize unknown symbol");
        return r;
    }), Gi = [
        Int8Array,
        Uint8Array,
        Int16Array,
        Uint16Array,
        Int32Array,
        Uint32Array,
        Float32Array,
        Float64Array,
        Uint8ClampedArray
    ].reduce((t, e)=>(t[e.name] = e, t), {}), fs = mt(Hi, (t)=>[
            "typed-array",
            t.constructor.name
        ], (t)=>[
            ...t
        ], (t, e)=>{
        const n = Gi[e[1]];
        if (!n) throw new Error("Trying to deserialize unknown typed array");
        return new n(t);
    });
    function hs(t, e) {
        return t?.constructor ? !!e.classRegistry.getIdentifier(t.constructor) : !1;
    }
    const ds = mt(hs, (t, e)=>[
            "class",
            e.classRegistry.getIdentifier(t.constructor)
        ], (t, e)=>{
        const n = e.classRegistry.getAllowedProps(t.constructor);
        if (!n) return {
            ...t
        };
        const r = {};
        return n.forEach((s)=>{
            r[s] = t[s];
        }), r;
    }, (t, e, n)=>{
        const r = n.classRegistry.getValue(e[1]);
        if (!r) throw new Error(`Trying to deserialize unknown class '${e[1]}' - check https://github.com/blitz-js/superjson/issues/116#issuecomment-773996564`);
        return Object.assign(Object.create(r.prototype), t);
    }), ys = mt((t, e)=>!!e.customTransformerRegistry.findApplicable(t), (t, e)=>[
            "custom",
            e.customTransformerRegistry.findApplicable(t).name
        ], (t, e)=>e.customTransformerRegistry.findApplicable(t).serialize(t), (t, e, n)=>{
        const r = n.customTransformerRegistry.findByName(e[1]);
        if (!r) throw new Error("Trying to deserialize unknown custom value");
        return r.deserialize(t);
    }), zi = [
        ds,
        ls,
        ys,
        fs
    ], Zn = (t, e)=>{
        const n = Xn(zi, (s)=>s.isApplicable(t, e));
        if (n) return {
            value: n.transform(t, e),
            type: n.annotation(t, e)
        };
        const r = Xn(us, (s)=>s.isApplicable(t, e));
        if (r) return {
            value: r.transform(t, e),
            type: r.annotation
        };
    }, gs = {};
    us.forEach((t)=>{
        gs[t.annotation] = t;
    });
    const Wi = (t, e, n)=>{
        if (J(e)) switch(e[0]){
            case "symbol":
                return ls.untransform(t, e, n);
            case "class":
                return ds.untransform(t, e, n);
            case "custom":
                return ys.untransform(t, e, n);
            case "typed-array":
                return fs.untransform(t, e, n);
            default:
                throw new Error("Unknown transformation: " + e);
        }
        else {
            const r = gs[e];
            if (!r) throw new Error("Unknown transformation: " + e);
            return r.untransform(t, n);
        }
    }, he = (t, e)=>{
        if (e > t.size) throw new Error("index out of bounds");
        const n = t.keys();
        for(; e > 0;)n.next(), e--;
        return n.next().value;
    };
    function ps(t) {
        if (nt(t, "__proto__")) throw new Error("__proto__ is not allowed as a property");
        if (nt(t, "prototype")) throw new Error("prototype is not allowed as a property");
        if (nt(t, "constructor")) throw new Error("constructor is not allowed as a property");
    }
    const qi = (t, e)=>{
        ps(e);
        for(let n = 0; n < e.length; n++){
            const r = e[n];
            if (Ne(t)) t = he(t, +r);
            else if (Re(t)) {
                const s = +r, o = +e[++n] == 0 ? "key" : "value", i = he(t, s);
                switch(o){
                    case "key":
                        t = i;
                        break;
                    case "value":
                        t = t.get(i);
                        break;
                }
            } else t = t[r];
        }
        return t;
    }, Qt = (t, e, n)=>{
        if (ps(e), e.length === 0) return n(t);
        let r = t;
        for(let o = 0; o < e.length - 1; o++){
            const i = e[o];
            if (J(r)) {
                const a = +i;
                r = r[a];
            } else if (Ke(r)) r = r[i];
            else if (Ne(r)) {
                const a = +i;
                r = he(r, a);
            } else if (Re(r)) {
                if (o === e.length - 2) break;
                const c = +i, u = +e[++o] == 0 ? "key" : "value", l = he(r, c);
                switch(u){
                    case "key":
                        r = l;
                        break;
                    case "value":
                        r = r.get(l);
                        break;
                }
            }
        }
        const s = e[e.length - 1];
        if (J(r) ? r[+s] = n(r[+s]) : Ke(r) && (r[s] = n(r[s])), Ne(r)) {
            const o = he(r, +s), i = n(o);
            o !== i && (r.delete(o), r.add(i));
        }
        if (Re(r)) {
            const o = +e[e.length - 2], i = he(r, o);
            switch(+s == 0 ? "key" : "value"){
                case "key":
                    {
                        const c = n(i);
                        r.set(c, r.get(i)), c !== i && r.delete(i);
                        break;
                    }
                case "value":
                    {
                        r.set(i, n(r.get(i)));
                        break;
                    }
            }
        }
        return t;
    }, ws = (t)=>t < 1;
    function Zt(t, e, n, r = []) {
        if (!t) return;
        const s = ws(n);
        if (!J(t)) {
            we(t, (a, c)=>Zt(a, e, n, [
                    ...r,
                    ...Te(c, s)
                ]));
            return;
        }
        const [o, i] = t;
        i && we(i, (a, c)=>{
            Zt(a, e, n, [
                ...r,
                ...Te(c, s)
            ]);
        }), e(o, r);
    }
    function Yi(t, e, n, r) {
        return Zt(e, (s, o)=>{
            t = Qt(t, o, (i)=>Wi(i, s, r));
        }, n), t;
    }
    function Xi(t, e, n) {
        const r = ws(n);
        function s(o, i) {
            const a = qi(t, Te(i, r));
            o.map((c)=>Te(c, r)).forEach((c)=>{
                t = Qt(t, c, ()=>a);
            });
        }
        if (J(e)) {
            const [o, i] = e;
            o.forEach((a)=>{
                t = Qt(t, Te(a, r), ()=>t);
            }), i && we(i, s);
        } else we(e, s);
        return t;
    }
    const Qi = (t, e)=>Ke(t) || J(t) || Re(t) || Ne(t) || cs(t) || hs(t, e);
    function Zi(t, e, n) {
        const r = n.get(t);
        r ? r.push(e) : n.set(t, [
            e
        ]);
    }
    function Ji(t, e) {
        const n = {};
        let r;
        return t.forEach((s)=>{
            if (s.length <= 1) return;
            e || (s = s.map((a)=>a.map(String)).sort((a, c)=>a.length - c.length));
            const [o, ...i] = s;
            o.length === 0 ? r = i.map(Dt) : n[Dt(o)] = i.map(Dt);
        }), r ? Yt(n) ? [
            r
        ] : [
            r,
            n
        ] : Yt(n) ? void 0 : n;
    }
    const ms = (t, e, n, r, s = [], o = [], i = new Map)=>{
        const a = Ui(t);
        if (!a) {
            Zi(t, s, e);
            const y = i.get(t);
            if (y) return r ? {
                transformedValue: null
            } : y;
        }
        if (!Qi(t, n)) {
            const y = Zn(t, n), p = y ? {
                transformedValue: y.value,
                annotations: [
                    y.type
                ]
            } : {
                transformedValue: t
            };
            return a || i.set(t, p), p;
        }
        if (nt(o, t)) return {
            transformedValue: null
        };
        const c = Zn(t, n), u = c?.value ?? t, l = J(u) ? [] : {}, f = {};
        we(u, (y, p)=>{
            if (p === "__proto__" || p === "constructor" || p === "prototype") throw new Error(`Detected property ${p}. This is a prototype pollution risk, please remove it from your object.`);
            const w = ms(y, e, n, r, [
                ...s,
                p
            ], [
                ...o,
                t
            ], i);
            l[p] = w.transformedValue, J(w.annotations) ? f[Xt(p)] = w.annotations : Ke(w.annotations) && we(w.annotations, (d, g)=>{
                f[Xt(p) + "." + g] = d;
            });
        });
        const h = Yt(f) ? {
            transformedValue: l,
            annotations: c ? [
                c.type
            ] : void 0
        } : {
            transformedValue: l,
            annotations: c ? [
                c.type,
                f
            ] : f
        };
        return a || i.set(t, h), h;
    };
    function bs(t) {
        return Object.prototype.toString.call(t).slice(8, -1);
    }
    function Jn(t) {
        return bs(t) === "Array";
    }
    function ea(t) {
        if (bs(t) !== "Object") return !1;
        const e = Object.getPrototypeOf(t);
        return !!e && e.constructor === Object && e === Object.prototype;
    }
    function ta(t, e, n, r, s) {
        const o = {}.propertyIsEnumerable.call(r, e) ? "enumerable" : "nonenumerable";
        o === "enumerable" && (t[e] = n), s && o === "nonenumerable" && Object.defineProperty(t, e, {
            value: n,
            enumerable: !1,
            writable: !0,
            configurable: !0
        });
    }
    function Jt(t, e = {}) {
        if (Jn(t)) return t.map((s)=>Jt(s, e));
        if (!ea(t)) return t;
        const n = Object.getOwnPropertyNames(t), r = Object.getOwnPropertySymbols(t);
        return [
            ...n,
            ...r
        ].reduce((s, o)=>{
            if (o === "__proto__" || Jn(e.props) && !e.props.includes(o)) return s;
            const i = t[o], a = Jt(i, e);
            return ta(s, o, a, t, e.nonenumerable), s;
        }, {});
    }
    class _ {
        constructor({ dedupe: e = !1 } = {}){
            this.classRegistry = new Li, this.symbolRegistry = new os((n)=>n.description ?? ""), this.customTransformerRegistry = new Ki, this.allowedErrorProps = [], this.dedupe = e;
        }
        serialize(e) {
            const n = new Map, r = ms(e, n, this, this.dedupe), s = {
                json: r.transformedValue
            };
            r.annotations && (s.meta = {
                ...s.meta,
                values: r.annotations
            });
            const o = Ji(n, this.dedupe);
            return o && (s.meta = {
                ...s.meta,
                referentialEqualities: o
            }), s.meta && (s.meta.v = 1), s;
        }
        deserialize(e, n) {
            const { json: r, meta: s } = e;
            let o = n?.inPlace ? r : Jt(r);
            return s?.values && (o = Yi(o, s.values, s.v ?? 0, this)), s?.referentialEqualities && (o = Xi(o, s.referentialEqualities, s.v ?? 0)), o;
        }
        stringify(e) {
            return JSON.stringify(this.serialize(e));
        }
        parse(e) {
            return this.deserialize(JSON.parse(e), {
                inPlace: !0
            });
        }
        registerClass(e, n) {
            this.classRegistry.register(e, n);
        }
        registerSymbol(e, n) {
            this.symbolRegistry.register(e, n);
        }
        registerCustom(e, n) {
            this.customTransformerRegistry.register({
                name: n,
                ...e
            });
        }
        allowErrorProps(...e) {
            this.allowedErrorProps.push(...e);
        }
    }
    _.defaultInstance = new _;
    _.serialize = _.defaultInstance.serialize.bind(_.defaultInstance);
    _.deserialize = _.defaultInstance.deserialize.bind(_.defaultInstance);
    _.stringify = _.defaultInstance.stringify.bind(_.defaultInstance);
    _.parse = _.defaultInstance.parse.bind(_.defaultInstance);
    _.registerClass = _.defaultInstance.registerClass.bind(_.defaultInstance);
    _.registerSymbol = _.defaultInstance.registerSymbol.bind(_.defaultInstance);
    _.registerCustom = _.defaultInstance.registerCustom.bind(_.defaultInstance);
    _.allowErrorProps = _.defaultInstance.allowErrorProps.bind(_.defaultInstance);
    const Ct = _.stringify, En = _.parse, na = _.registerCustom;
    function ra(t) {
        return t instanceof Uint8Array || ArrayBuffer.isView(t) && t.constructor.name === "Uint8Array" && "BYTES_PER_ELEMENT" in t && t.BYTES_PER_ELEMENT === 1;
    }
    function er(t) {
        if (typeof t != "number") throw new TypeError("number expected, got " + typeof t);
        if (!Number.isSafeInteger(t) || t < 0) throw new RangeError("positive integer expected, got " + t);
    }
    function P(t, e, n = "") {
        const r = ra(t), s = t?.length, o = e !== void 0;
        if (!r || o && s !== e) {
            const i = n && `"${n}" `, a = o ? ` of length ${e}` : "", c = r ? `length=${s}` : `type=${typeof t}`, u = i + "expected Uint8Array" + a + ", got " + c;
            throw r ? new RangeError(u) : new TypeError(u);
        }
        return t;
    }
    function tr(t, e = !0) {
        if (t.destroyed) throw new Error("Hash instance has been destroyed");
        if (e && t.finished) throw new Error("Hash#digest() has already been called");
    }
    function sa(t, e, n = !1) {
        P(t, void 0, "output");
        const r = e.outputLen;
        if (t.length < r) throw new RangeError("digestInto() expects output buffer of length at least " + r);
        if (n && !Be(t)) throw new Error("invalid output, must be aligned");
    }
    function oa(t) {
        return new Uint8Array(t.buffer, t.byteOffset, t.byteLength);
    }
    function oe(t) {
        return new Uint32Array(t.buffer, t.byteOffset, Math.floor(t.byteLength / 4));
    }
    function Z(...t) {
        for(let e = 0; e < t.length; e++)t[e].fill(0);
    }
    function bt(t) {
        return new DataView(t.buffer, t.byteOffset, t.byteLength);
    }
    const vn = new Uint8Array(new Uint32Array([
        287454020
    ]).buffer)[0] === 68, Es = (t)=>t << 24 & 4278190080 | t << 8 & 16711680 | t >>> 8 & 65280 | t >>> 24 & 255, S = vn ? (t)=>t : (t)=>Es(t) >>> 0, ia = (t)=>{
        for(let e = 0; e < t.length; e++)t[e] = Es(t[e]);
        return t;
    }, _n = vn ? (t)=>t : ia;
    function aa(t, e) {
        if (t.length !== e.length) return !1;
        let n = 0;
        for(let r = 0; r < t.length; r++)n |= t[r] ^ e[r];
        return n === 0;
    }
    function ca(t, e, n) {
        const r = e, s = n || (()=>[]), o = (a, c)=>r(c, ...s(a)).update(a).digest(), i = r(new Uint8Array(t), ...s(new Uint8Array(0)));
        return o.outputLen = i.outputLen, o.blockLen = i.blockLen, o.create = (a, ...c)=>r(a, ...c), o;
    }
    const ua = (t, e)=>{
        function n(r, ...s) {
            if (P(r, void 0, "key"), t.nonceLength !== void 0) {
                const l = s[0];
                P(l, t.varSizeNonce ? void 0 : t.nonceLength, "nonce");
            }
            const o = t.tagLength;
            o && s[1] !== void 0 && P(s[1], void 0, "AAD");
            const i = e(r, ...s), a = (l, f)=>{
                if (f !== void 0) {
                    if (l !== 2) throw new Error("cipher output not supported");
                    P(f, void 0, "output");
                }
            };
            let c = !1;
            return {
                encrypt (l, f) {
                    if (c) throw new Error("cannot encrypt() twice with same key + nonce");
                    return c = !0, P(l), a(i.encrypt.length, f), i.encrypt(l, f);
                },
                decrypt (l, f) {
                    if (P(l), o && l.length < o) throw new Error('"ciphertext" expected length bigger than tagLength=' + o);
                    return a(i.decrypt.length, f), i.decrypt(l, f);
                }
            };
        }
        return Object.assign(n, t), n;
    };
    function la(t, e, n = !0) {
        if (e === void 0) return new Uint8Array(t);
        if (P(e, void 0, "output"), e.length !== t) throw new Error('"output" expected Uint8Array of length ' + t + ", got: " + e.length);
        if (n && !Be(e)) throw new Error("invalid output, must be aligned");
        return e;
    }
    function fa(t, e, n) {
        er(t), er(e);
        const r = new Uint8Array(16), s = bt(r);
        return s.setBigUint64(0, BigInt(e), n), s.setBigUint64(8, BigInt(t), n), r;
    }
    function Be(t) {
        return t.byteOffset % 4 === 0;
    }
    function $e(t) {
        return Uint8Array.from(P(t));
    }
    const fe = 16, vs = new Uint8Array(16), ke = oe(vs), ha = 225, da = (t, e, n, r)=>{
        const s = r & 1;
        return {
            s3: n << 31 | r >>> 1,
            s2: e << 31 | n >>> 1,
            s1: t << 31 | e >>> 1,
            s0: t >>> 1 ^ ha << 24 & -(s & 1)
        };
    }, qe = (t)=>(t >>> 0 & 255) << 24 | (t >>> 8 & 255) << 16 | (t >>> 16 & 255) << 8 | t >>> 24 & 255 | 0, ya = (t)=>t > 64 * 1024 ? 8 : t > 1024 ? 4 : 2;
    class ga {
        blockLen = fe;
        outputLen = fe;
        s0 = 0;
        s1 = 0;
        s2 = 0;
        s3 = 0;
        finished = !1;
        destroyed = !1;
        t;
        W;
        windowSize;
        constructor(e, n){
            P(e, 16, "key"), e = $e(e);
            const r = bt(e);
            let s = r.getUint32(0, !1), o = r.getUint32(4, !1), i = r.getUint32(8, !1), a = r.getUint32(12, !1);
            const c = [];
            for(let p = 0; p < 128; p++)c.push({
                s0: qe(s),
                s1: qe(o),
                s2: qe(i),
                s3: qe(a)
            }), { s0: s, s1: o, s2: i, s3: a } = da(s, o, i, a);
            const u = ya(n || 1024);
            if (![
                1,
                2,
                4,
                8
            ].includes(u)) throw new Error("ghash: invalid window size, expected 2, 4 or 8");
            this.W = u;
            const f = 128 / u, h = this.windowSize = 2 ** u, y = [];
            for(let p = 0; p < f; p++)for(let w = 0; w < h; w++){
                let d = 0, g = 0, m = 0, b = 0;
                for(let E = 0; E < u; E++){
                    if (!(w >>> u - E - 1 & 1)) continue;
                    const { s0: T, s1: me, s2: vt, s3: Fe } = c[u * p + E];
                    d ^= T, g ^= me, m ^= vt, b ^= Fe;
                }
                y.push({
                    s0: d,
                    s1: g,
                    s2: m,
                    s3: b
                });
            }
            this.t = y;
        }
        _updateBlock(e, n, r, s) {
            e ^= this.s0, n ^= this.s1, r ^= this.s2, s ^= this.s3;
            const { W: o, t: i, windowSize: a } = this;
            let c = 0, u = 0, l = 0, f = 0;
            const h = (1 << o) - 1;
            let y = 0;
            for (const p of [
                e,
                n,
                r,
                s
            ])for(let w = 0; w < 4; w++){
                const d = p >>> 8 * w & 255;
                for(let g = 8 / o - 1; g >= 0; g--){
                    const m = d >>> o * g & h, { s0: b, s1: E, s2: v, s3: T } = i[y * a + m];
                    c ^= b, u ^= E, l ^= v, f ^= T, y += 1;
                }
            }
            this.s0 = c, this.s1 = u, this.s2 = l, this.s3 = f;
        }
        update(e) {
            tr(this), P(e), e = $e(e);
            const n = oe(e), r = Math.floor(e.length / fe), s = e.length % fe;
            for(let o = 0; o < r; o++)this._updateBlock(S(n[o * 4 + 0]), S(n[o * 4 + 1]), S(n[o * 4 + 2]), S(n[o * 4 + 3]));
            return s && (vs.set(e.subarray(r * fe)), this._updateBlock(S(ke[0]), S(ke[1]), S(ke[2]), S(ke[3])), Z(ke)), this;
        }
        destroy() {
            this.destroyed = !0;
            const { t: e } = this;
            for (const n of e)n.s0 = 0, n.s1 = 0, n.s2 = 0, n.s3 = 0;
        }
        digestInto(e) {
            tr(this), sa(e, this, !0), this.finished = !0;
            const { s0: n, s1: r, s2: s, s3: o } = this, i = oe(e);
            i[0] = n, i[1] = r, i[2] = s, i[3] = o, _n(i);
        }
        digest() {
            const e = new Uint8Array(fe);
            return this.digestInto(e), this.destroy(), e;
        }
    }
    const nr = ca(16, (t, e)=>new ga(t, e), (t)=>[
            t.length
        ]), en = 16, pa = 4, Ye = new Uint8Array(en), wa = 283;
    function ma(t) {
        if (![
            16,
            24,
            32
        ].includes(t.length)) throw new Error('"aes key" expected Uint8Array of length 16/24/32, got length=' + t.length);
    }
    function kn(t) {
        return t << 1 ^ wa & -(t >> 7);
    }
    function rr(t, e) {
        let n = 0;
        for(; e > 0; e >>= 1)n ^= t & -(e & 1), t = kn(t);
        return n;
    }
    const ba = (()=>{
        const t = new Uint8Array(256);
        for(let n = 0, r = 1; n < 256; n++, r ^= kn(r))t[n] = r;
        const e = new Uint8Array(256);
        e[0] = 99;
        for(let n = 0; n < 255; n++){
            let r = t[255 - n];
            r |= r << 8, e[t[n]] = (r ^ r >> 4 ^ r >> 5 ^ r >> 6 ^ r >> 7 ^ 99) & 255;
        }
        return Z(t), e;
    })(), Ea = (t)=>t << 24 | t >>> 8, Ut = (t)=>t << 8 | t >>> 24;
    function va(t, e) {
        if (t.length !== 256) throw new Error("Wrong sbox length");
        const n = new Uint32Array(256).map((u, l)=>e(t[l])), r = n.map(Ut), s = r.map(Ut), o = s.map(Ut), i = new Uint32Array(256 * 256), a = new Uint32Array(256 * 256), c = new Uint16Array(256 * 256);
        for(let u = 0; u < 256; u++)for(let l = 0; l < 256; l++){
            const f = u * 256 + l;
            i[f] = n[u] ^ r[l], a[f] = s[u] ^ o[l], c[f] = t[u] << 8 | t[l];
        }
        return {
            sbox: t,
            sbox2: c,
            T0: n,
            T1: r,
            T2: s,
            T3: o,
            T01: i,
            T23: a
        };
    }
    const _s = va(ba, (t)=>rr(t, 3) << 24 | t << 16 | t << 8 | rr(t, 2)), _a = (()=>{
        const t = new Uint8Array(16);
        for(let e = 0, n = 1; e < 16; e++, n = kn(n))t[e] = n;
        return t;
    })();
    function ka(t) {
        P(t);
        const e = t.length;
        ma(t);
        const { sbox2: n } = _s, r = [];
        (!vn || !Be(t)) && r.push(t = $e(t));
        const s = _n(oe(t)), o = s.length, i = (c)=>Se(n, c, c, c, c), a = new Uint32Array(e + 28);
        a.set(s);
        for(let c = o; c < a.length; c++){
            let u = a[c - 1];
            c % o === 0 ? u = i(Ea(u)) ^ _a[c / o - 1] : o > 6 && c % o === 4 && (u = i(u)), a[c] = a[c - o] ^ u;
        }
        return Z(...r), a;
    }
    function Xe(t, e, n, r, s, o) {
        return t[n << 8 & 65280 | r >>> 8 & 255] ^ e[s >>> 8 & 65280 | o >>> 24 & 255];
    }
    function Se(t, e, n, r, s) {
        return t[e & 255 | n & 65280] | t[r >>> 16 & 255 | s >>> 16 & 65280] << 16;
    }
    function sr(t, e, n, r, s) {
        const { sbox2: o, T01: i, T23: a } = _s;
        let c = 0;
        e ^= t[c++], n ^= t[c++], r ^= t[c++], s ^= t[c++];
        const u = t.length / 4 - 2;
        for(let p = 0; p < u; p++){
            const w = t[c++] ^ Xe(i, a, e, n, r, s), d = t[c++] ^ Xe(i, a, n, r, s, e), g = t[c++] ^ Xe(i, a, r, s, e, n), m = t[c++] ^ Xe(i, a, s, e, n, r);
            e = w, n = d, r = g, s = m;
        }
        const l = t[c++] ^ Se(o, e, n, r, s), f = t[c++] ^ Se(o, n, r, s, e), h = t[c++] ^ Se(o, r, s, e, n), y = t[c++] ^ Se(o, s, e, n, r);
        return {
            s0: l,
            s1: f,
            s2: h,
            s3: y
        };
    }
    function Qe(t, e, n, r, s) {
        P(n, en, "nonce"), P(r), s = la(r.length, s);
        const o = n, i = oe(o), a = bt(o), c = oe(r), u = oe(s), l = e ? 0 : 12, f = r.length;
        let h = a.getUint32(l, e), { s0: y, s1: p, s2: w, s3: d } = sr(t, S(i[0]), S(i[1]), S(i[2]), S(i[3]));
        for(let m = 0; m + 4 <= c.length; m += 4)u[m + 0] = c[m + 0] ^ S(y), u[m + 1] = c[m + 1] ^ S(p), u[m + 2] = c[m + 2] ^ S(w), u[m + 3] = c[m + 3] ^ S(d), h = h + 1 >>> 0, a.setUint32(l, h, e), { s0: y, s1: p, s2: w, s3: d } = sr(t, S(i[0]), S(i[1]), S(i[2]), S(i[3]));
        const g = en * Math.floor(c.length / pa);
        if (g < f) {
            const m = new Uint32Array([
                y,
                p,
                w,
                d
            ]);
            _n(m);
            const b = oa(m);
            for(let E = g, v = 0; E < f; E++, v++)s[E] = r[E] ^ b[v];
            Z(m);
        }
        return s;
    }
    function xa(t, e, n, r, s) {
        const o = s ? s.length : 0, i = t.create(n, r.length + o);
        s && i.update(s);
        const a = fa(8 * r.length, 8 * o, e);
        i.update(r), i.update(a);
        const c = i.digest();
        return Z(a), c;
    }
    const or = ua({
        blockSize: 16,
        nonceLength: 12,
        tagLength: 16,
        varSizeNonce: !0
    }, function(e, n, r) {
        if (n.length < 8) throw new Error("aes/gcm: invalid nonce length");
        const s = 16;
        function o(a, c, u) {
            const l = xa(nr, !1, a, u, r);
            for(let f = 0; f < c.length; f++)l[f] ^= c[f];
            return l;
        }
        function i() {
            const a = ka(e), c = Ye.slice(), u = Ye.slice();
            if (Qe(a, !1, u, u, c), n.length === 12) u.set(n);
            else {
                const f = Ye.slice();
                bt(f).setBigUint64(8, BigInt(n.length * 8), !1);
                const y = nr.create(c).update(n).update(f);
                y.digestInto(u), y.destroy();
            }
            const l = Qe(a, !1, u, Ye);
            return {
                xk: a,
                authKey: c,
                counter: u,
                tagMask: l
            };
        }
        return {
            encrypt (a) {
                const { xk: c, authKey: u, counter: l, tagMask: f } = i(), h = new Uint8Array(a.length + s), y = [
                    c,
                    u,
                    l,
                    f
                ];
                Be(a) || y.push(a = $e(a)), Qe(c, !1, l, a, h.subarray(0, a.length));
                const p = o(u, f, h.subarray(0, h.length - s));
                return y.push(p), h.set(p, a.length), Z(...y), h;
            },
            decrypt (a) {
                const { xk: c, authKey: u, counter: l, tagMask: f } = i(), h = [
                    c,
                    u,
                    f,
                    l
                ];
                Be(a) || h.push(a = $e(a));
                const y = a.subarray(0, -s), p = a.subarray(-s), w = o(u, f, y);
                if (h.push(w), !aa(w, p)) throw Z(...h), new Error("aes/gcm: invalid ghash tag");
                const d = Qe(c, !1, l, y);
                return Z(...h), d;
            }
        };
    });
    class ir {
        oHash;
        iHash;
        blockLen;
        outputLen;
        canXOF = !1;
        finished = !1;
        destroyed = !1;
        constructor(e, n){
            if (Sr(e), De(n, void 0, "key"), this.iHash = e.create(), typeof this.iHash.update != "function") throw new Error("Expected instance of class which extends utils.Hash");
            this.blockLen = this.iHash.blockLen, this.outputLen = this.iHash.outputLen;
            const r = this.blockLen, s = new Uint8Array(r);
            s.set(n.length > r ? e.create().update(n).digest() : n);
            for(let o = 0; o < s.length; o++)s[o] ^= 54;
            this.iHash.update(s), this.oHash = e.create();
            for(let o = 0; o < s.length; o++)s[o] ^= 106;
            this.oHash.update(s), Ie(s);
        }
        update(e) {
            return rt(this), this.iHash.update(e), this;
        }
        digestInto(e) {
            rt(this), Ar(e, this), this.finished = !0;
            const n = e.subarray(0, this.outputLen);
            this.iHash.digestInto(n), this.oHash.update(n), this.oHash.digestInto(n), this.destroy();
        }
        digest() {
            const e = new Uint8Array(this.oHash.outputLen);
            return this.digestInto(e), e;
        }
        _cloneInto(e) {
            e ||= Object.create(Object.getPrototypeOf(this), {});
            const { oHash: n, iHash: r, finished: s, destroyed: o, blockLen: i, outputLen: a } = this;
            return e = e, e.finished = s, e.destroyed = o, e.blockLen = i, e.outputLen = a, e.oHash = n._cloneInto(e.oHash), e.iHash = r._cloneInto(e.iHash), e;
        }
        clone() {
            return this._cloneInto();
        }
        destroy() {
            this.destroyed = !0, this.oHash.destroy(), this.iHash.destroy();
        }
    }
    const Sa = (()=>{
        const t = (e, n, r)=>new ir(e, n).update(r).digest();
        return t.create = (e, n)=>new ir(e, n), t;
    })();
    function Aa(t, e, n, r) {
        Sr(t);
        const s = Ns({
            dkLen: 32,
            asyncTick: 10
        }, r), { c: o, dkLen: i, asyncTick: a } = s;
        if (ge(o, "c"), ge(i, "dkLen"), ge(a, "asyncTick"), o < 1) throw new Error("iterations (c) must be >= 1");
        if (i < 1) throw new Error('"dkLen" must be >= 1');
        if (i > (2 ** 32 - 1) * t.outputLen) throw new Error("derived key too long");
        const c = Ln(e, "password"), u = Ln(n, "salt"), l = new Uint8Array(i), f = Sa.create(t, c), h = f._cloneInto().update(u);
        return {
            c: o,
            dkLen: i,
            asyncTick: a,
            DK: l,
            PRF: f,
            PRFSalt: h
        };
    }
    function Ta(t, e, n, r, s) {
        return t.destroy(), e.destroy(), r && r.destroy(), Ie(s), n;
    }
    function Oa(t, e, n, r) {
        const { c: s, dkLen: o, DK: i, PRF: a, PRFSalt: c } = Aa(t, e, n, r);
        let u;
        const l = new Uint8Array(4), f = et(l), h = new Uint8Array(a.outputLen);
        for(let y = 1, p = 0; p < o; y++, p += a.outputLen){
            const w = i.subarray(p, p + a.outputLen);
            f.setInt32(0, y, !1), (u = c._cloneInto(u)).update(l).digestInto(h), w.set(h.subarray(0, w.length));
            for(let d = 1; d < s; d++){
                a._cloneInto(u).update(h).digestInto(h);
                for(let g = 0; g < w.length; g++)w[g] ^= h[g];
            }
        }
        return Ta(a, c, i, u, h);
    }
    const ar = 16;
    class cr {
        randomBytes(e) {
            return Tr(e);
        }
        async sha256(e) {
            return Wt(e);
        }
        async pbkdf2(e, n, r, s) {
            return Oa(Wt, e, n, {
                c: r,
                dkLen: s
            });
        }
        async aesGcmEncrypt(e, n, r) {
            const s = or(e, n).encrypt(r), o = s.slice(0, s.length - ar), i = s.slice(s.length - ar);
            return {
                ciphertext: o,
                authTag: i
            };
        }
        async aesGcmDecrypt(e, n, r, s) {
            const o = new Uint8Array(r.length + s.length);
            return o.set(r, 0), o.set(s, r.length), or(e, n).decrypt(o);
        }
    }
    const Ze = 16;
    class ur {
        randomBytes(e) {
            return globalThis.crypto.getRandomValues(new Uint8Array(e));
        }
        async sha256(e) {
            const n = await globalThis.crypto.subtle.digest("SHA-256", e);
            return new Uint8Array(n);
        }
        async pbkdf2(e, n, r, s) {
            const o = await globalThis.crypto.subtle.importKey("raw", e, "PBKDF2", !1, [
                "deriveBits"
            ]), i = await globalThis.crypto.subtle.deriveBits({
                name: "PBKDF2",
                salt: n,
                iterations: r,
                hash: "SHA-256"
            }, o, s * 8);
            return new Uint8Array(i);
        }
        async aesGcmEncrypt(e, n, r) {
            const s = await globalThis.crypto.subtle.importKey("raw", e, "AES-GCM", !1, [
                "encrypt"
            ]), o = await globalThis.crypto.subtle.encrypt({
                name: "AES-GCM",
                iv: n,
                tagLength: Ze * 8
            }, s, r), i = new Uint8Array(o), a = i.slice(0, i.length - Ze), c = i.slice(i.length - Ze);
            return {
                ciphertext: a,
                authTag: c
            };
        }
        async aesGcmDecrypt(e, n, r, s) {
            const o = await globalThis.crypto.subtle.importKey("raw", e, "AES-GCM", !1, [
                "decrypt"
            ]), i = new Uint8Array(r.length + s.length);
            i.set(r, 0), i.set(s, r.length);
            const a = await globalThis.crypto.subtle.decrypt({
                name: "AES-GCM",
                iv: n,
                tagLength: Ze * 8
            }, o, i);
            return new Uint8Array(a);
        }
    }
    const lr = ()=>typeof globalThis.crypto < "u" && typeof globalThis.crypto.subtle < "u", La = (t)=>{
        if (t === "noble") return new cr;
        if (t === "webcrypto") {
            if (!lr()) throw new Error("Web Crypto API is not available. Use the 'noble' crypto backend or run in a secure context (HTTPS or localhost).");
            return new ur;
        }
        return lr() ? new ur : new cr;
    }, Ia = 32, Oe = 12, ks = 16, se = 32, Pa = 1e5, tn = 6e5, ct = 1, Et = 2, fr = Et, ne = 1, nn = ne + se + Oe + ks, hr = (t)=>{
        if (t.length < nn) throw new Error("Invalid encrypted data: too short");
        const e = t[0];
        if (e !== ct && e !== Et) throw new Error(`Unsupported encryption version: ${e}`);
        return {
            version: e,
            salt: t.subarray(ne, ne + se),
            iv: t.subarray(ne + se, ne + se + Oe),
            authTag: t.subarray(ne + se + Oe, ne + se + Oe + ks),
            encrypted: t.subarray(nn)
        };
    }, Ka = (t)=>{
        switch(t){
            case ct:
                return Pa;
            case Et:
                return tn;
            default:
                throw new Error(`Unsupported encryption version: ${t}`);
        }
    }, Mt = async (t, e, n, r)=>{
        const s = new TextEncoder().encode(e);
        return t.pbkdf2(s, n, r, Ia);
    }, Ra = (t, e)=>{
        if (t.length !== e.length) throw new RangeError("Input buffers must have the same byte length");
        let n = 0;
        for(let r = 0; r < t.length; r++)n |= t[r] ^ e[r];
        return n === 0;
    }, Ft = (t, e)=>{
        const n = x.Buffer.isBuffer(t) ? t : x.Buffer.from(t), r = x.Buffer.isBuffer(e) ? e : x.Buffer.from(e);
        return Ra(n, r);
    };
    L = class {
        encryptionKey;
        salt;
        backend;
        constructor(e, n, r){
            this.encryptionKey = e, this.salt = n, this.backend = r;
        }
        static async create(e, n) {
            const r = La(n?.cryptoBackend), s = n?.existingSalt ? new Uint8Array(n.existingSalt) : r.randomBytes(se), o = await Mt(r, e, s, tn);
            return new L(o, s, r);
        }
        async verifyPassword(e) {
            const n = await Mt(this.backend, e, this.salt, tn);
            return Ft(n, this.encryptionKey);
        }
        async encrypt(e) {
            const n = new TextEncoder().encode(e), r = this.backend.randomBytes(Oe), { ciphertext: s, authTag: o } = await this.backend.aesGcmEncrypt(this.encryptionKey, r, n), i = new Uint8Array([
                fr
            ]);
            return x.Buffer.concat([
                i,
                this.salt,
                r,
                o,
                s
            ]).toString("base64");
        }
        async decrypt(e) {
            const n = x.Buffer.from(e, "base64"), { version: r, salt: s, iv: o, authTag: i, encrypted: a } = hr(n);
            if (r === ct) throw new Error("V1 encrypted data requires password for decryption. Use decryptWithPassword() instead.");
            if (!Ft(x.Buffer.from(this.salt), s)) throw new Error("Salt mismatch: data was encrypted with a different password");
            const c = await this.backend.aesGcmDecrypt(this.encryptionKey, o, a, i);
            return x.Buffer.from(c).toString("utf-8");
        }
        async decryptWithPassword(e, n) {
            const r = x.Buffer.from(e, "base64"), { version: s, salt: o, iv: i, authTag: a, encrypted: c } = hr(r);
            if (!Ft(x.Buffer.from(this.salt), o)) throw new Error("Salt mismatch: data was encrypted with a different password");
            const u = Ka(s), l = s === fr ? this.encryptionKey : await Mt(this.backend, n, o, u), f = await this.backend.aesGcmDecrypt(l, i, c, a);
            return x.Buffer.from(f).toString("utf-8");
        }
        static isEncrypted(e) {
            const n = x.Buffer.from(e, "base64"), r = n[0];
            return n.length >= nn && (r === ct || r === Et);
        }
        static getVersion(e) {
            const n = x.Buffer.from(e, "base64");
            if (n.length < 1) throw new Error("Invalid encrypted data: too short");
            return n[0];
        }
        getSalt() {
            return x.Buffer.from(this.salt);
        }
    };
    let M, Na, Ba, $a;
    M = async (t)=>{
        const e = await t();
        return rn(e), e;
    };
    dr = async (t, e, n)=>{
        if (!L.isEncrypted(t)) throw new Error("Unrecognized or unencrypted data encountered during decryption");
        return L.getVersion(t) === 1 ? e.decryptWithPassword(t, n) : e.decrypt(t);
    };
    Na = "midnight-level-db";
    Ba = "private-states";
    $a = "signing-keys";
    xs = {
        midnightDbName: Na,
        privateStateStoreName: Ba,
        signingKeyStoreName: $a
    };
    na({
        isApplicable: (t)=>t instanceof x.Buffer,
        serialize: (t)=>t.toString("hex"),
        deserialize: (t)=>x.Buffer.from(t, "hex")
    }, "buffer");
    let Va, Da, ut, Ss, C, Ve, yr, Ht, de, Le, As, lt, jt, Ts, gr, ye, Ca, pr, wr, mr, br, Je, Ua, Er, vr, _r, Ma, Fa, kr, Ha, ja, Ga, xr;
    Va = 32;
    Da = (t)=>{
        const e = new TextEncoder().encode(t);
        return Ks(Wt(e)).substring(0, Va);
    };
    ut = (t, e)=>{
        const n = Da(e);
        return `${t}:${n}`;
    };
    Ss = (t)=>new Ti(t, {
            createIfMissing: !0
        });
    C = async (t, e, n)=>{
        const r = t.createLevel(t.dbName), s = r.sublevel(e, {
            valueEncoding: "utf-8"
        });
        try {
            return await r.open(), await s.open(), await n(s);
        } finally{
            await s.close(), await r.close();
        }
    };
    Ve = "__midnight_encryption_metadata__";
    yr = 1e4;
    Ht = new Map;
    de = new Map;
    Le = new Map;
    As = async (t, e)=>{
        const n = `${t.dbName}:${e}`, r = Ht.get(n);
        if (r) return r;
        const s = C(t, e, async (o)=>{
            try {
                const c = await o.get(Ve);
                if (c) {
                    const u = JSON.parse(c);
                    return x.Buffer.from(u.salt, "hex");
                }
            } catch (c) {
                if (!(c && typeof c == "object" && "code" in c && c.code === "LEVEL_NOT_FOUND")) throw c;
            }
            const i = x.Buffer.from(Tr(32)), a = {
                salt: i.toString("hex"),
                version: 1
            };
            return await o.put(Ve, JSON.stringify(a)), i;
        });
        Ht.set(n, s);
        try {
            return await s;
        } finally{
            Ht.delete(n);
        }
    };
    lt = async (t, e, n)=>{
        const r = `${t.dbName}:${e}`, s = await As(t, e), o = s.toString("hex"), i = Le.get(r);
        if (i && i.saltHex === o) {
            const u = await M(n);
            if (await i.encryption.verifyPassword(u)) return i.encryption;
            const l = await L.create(u, {
                existingSalt: s,
                cryptoBackend: t.cryptoBackend
            });
            return Le.set(r, {
                encryption: l,
                saltHex: o
            }), l;
        }
        const a = await M(n), c = await L.create(a, {
            existingSalt: s,
            cryptoBackend: t.cryptoBackend
        });
        return Le.set(r, {
            encryption: c,
            saltHex: o
        }), c;
    };
    jt = (t, e, n)=>{
        const r = `${t}:${e}`, s = `${t}:${n}`;
        Le.delete(r), Le.delete(s);
    };
    Ts = 3e5;
    gr = async (t, e, n = Ts)=>{
        const r = Date.now();
        for(; de.has(t);){
            if (Date.now() - r > n) throw new Error(`Timed out waiting for password rotation lock on "${t}". Another rotation may be stuck or taking longer than ${n}ms.`);
            await de.get(t);
        }
        let s;
        const o = new Promise((i)=>{
            s = i;
        });
        de.set(t, o);
        try {
            return await e();
        } finally{
            de.delete(t), s();
        }
    };
    ye = async (t, e, n = Ts)=>{
        const r = `${t}:${e}`, s = Date.now();
        for(; de.has(r);){
            if (Date.now() - s > n) throw new Error(`Timed out waiting for password rotation to complete on "${r}". The rotation may be stuck or taking longer than ${n}ms.`);
            await de.get(r);
        }
    };
    Ca = (t)=>{
        if (!(t instanceof Error)) return !1;
        if ("name" in t && t.name === "OperationError") return !0;
        const e = t.message.toLowerCase();
        return e.includes("unsupported state") || e.includes("salt mismatch") || e.includes("invalid encrypted data") || e.includes("bad decrypt") || e.includes("invalid tag") || e.includes("unable to authenticate");
    };
    pr = async (t)=>{
        const { ctx: e, storeName: n, oldPasswordProvider: r, newPasswordProvider: s, maxEntries: o, shouldProceed: i } = t, a = await M(r), c = await M(s), u = await As(e, n), l = await L.create(a, {
            existingSalt: u,
            cryptoBackend: e.cryptoBackend
        }), f = await L.create(c, {
            cryptoBackend: e.cryptoBackend
        }), h = f.getSalt();
        return C(e, n, async (y)=>{
            const p = [];
            let w = !1, d = !1;
            for await (const [b, E] of y.iterator())if (b !== Ve) {
                if (p.length >= o) throw new Error(`Entry count exceeds maximum allowed (${o}). Use the maxEntries option to increase the limit if needed.`);
                if (i && i(b) && (w = !0), !d) {
                    try {
                        await dr(E, l, a);
                    } catch (v) {
                        throw Ca(v) ? new Error("Old password is incorrect: failed to decrypt existing data", {
                            cause: v
                        }) : v;
                    }
                    d = !0;
                }
                try {
                    const v = await dr(E, l, a);
                    p.push({
                        key: b,
                        decryptedValue: v
                    });
                } catch (v) {
                    const T = v instanceof Error ? v.message : "Unknown error";
                    throw new Error(`Failed to decrypt entry "${b}": ${T}. Successfully processed ${p.length} entries before failure.`, {
                        cause: v
                    });
                }
            }
            if (p.length === 0) return {
                entriesMigrated: 0
            };
            if (i && !w) return {
                entriesMigrated: 0
            };
            const g = [];
            for (const { key: b, decryptedValue: E } of p)try {
                const v = await f.encrypt(E);
                g.push({
                    type: "put",
                    key: b,
                    value: v
                });
            } catch (v) {
                const T = v instanceof Error ? v.message : "Unknown error";
                throw new Error(`Failed to re-encrypt entry "${b}": ${T}. Original data is still encrypted with old password.`, {
                    cause: v
                });
            }
            const m = {
                salt: h.toString("hex"),
                version: 1
            };
            g.push({
                type: "put",
                key: Ve,
                value: JSON.stringify(m)
            });
            try {
                await y.batch(g);
            } catch (b) {
                const E = b instanceof Error ? b.message : "Unknown error";
                throw new Error(`Failed to write re-encrypted data: ${E}. Your data may be in an inconsistent state. Keep both old and new passwords until you can verify data integrity.`, {
                    cause: b
                });
            }
            return {
                entriesMigrated: p.length
            };
        });
    };
    wr = async (t, e, n, r)=>{
        await ye(t.dbName, e);
        const s = await lt(t, e, r);
        return C(t, e, async (o)=>{
            try {
                const i = await o.get(n);
                if (i === void 0) return null;
                let a;
                if (L.isEncrypted(i)) if (L.getVersion(i) === 1) {
                    const l = await M(r);
                    a = await s.decryptWithPassword(i, l);
                    const f = await s.encrypt(a);
                    await o.put(n, f);
                } else a = await s.decrypt(i);
                else {
                    a = i;
                    const u = await s.encrypt(i);
                    await o.put(n, u);
                }
                const c = En(a);
                return c === void 0 ? null : c;
            } catch (i) {
                if (i && typeof i == "object" && "code" in i && i.code === "LEVEL_NOT_FOUND") return null;
                throw i;
            }
        });
    };
    mr = async (t, e, n)=>{
        await ye(t.dbName, e);
        const r = await lt(t, e, n);
        return C(t, e, async (s)=>{
            const o = new Map;
            let i = null;
            for await (const [a, c] of s.iterator()){
                if (a === Ve) continue;
                let u, l = !1;
                if (L.isEncrypted(c) ? L.getVersion(c) === 1 ? (i === null && (i = await M(n)), u = await r.decryptWithPassword(c, i), l = !0) : u = await r.decrypt(c) : (u = c, l = !0), l) {
                    const h = await r.encrypt(u);
                    await s.put(a, h);
                }
                const f = En(u);
                o.set(a, f);
            }
            return o;
        });
    };
    br = 1;
    Je = [
        1
    ];
    Ua = 64;
    Er = (t)=>{
        try {
            rn(t);
        } catch (e) {
            const n = e instanceof Error ? e.message : "Invalid export password";
            throw new zt(n, {
                cause: e
            });
        }
    };
    vr = (t)=>{
        try {
            rn(t);
        } catch (e) {
            const n = e instanceof Error ? e.message : "Invalid export password";
            throw new Gt(n, {
                cause: e
            });
        }
    };
    _r = (t)=>{
        if (t.length !== Ua) throw new B("Invalid salt length");
        if (!/^[0-9a-fA-F]+$/.test(t)) throw new B("Invalid salt format");
    };
    Ma = 6;
    Fa = (t)=>{
        if (typeof t != "string" || t.length < Ma || t.length % 2 !== 0 || !/^[0-9a-fA-F]+$/.test(t)) throw new B("Invalid signing key value");
    };
    kr = "__midnight_browser_warning_shown__";
    Ha = ()=>{
        const t = globalThis;
        return typeof globalThis < "u" && "window" in globalThis && t.window !== void 0 && "document" in globalThis && t.document !== void 0;
    };
    ja = ()=>{
        if (typeof globalThis < "u" && "sessionStorage" in globalThis) return globalThis.sessionStorage;
    };
    Ga = ()=>{
        if (Ha()) {
            try {
                const t = ja();
                if (t) {
                    if (t.getItem(kr)) return;
                    t.setItem(kr, "true");
                }
            } catch (t) {
                console.debug("MIDNIGHT: Could not access sessionStorage for warning deduplication:", t instanceof Error ? t.message : "Unknown error");
            }
            console.warn(`⚠️ MIDNIGHT: Private state and signing keys are stored in browser storage.
Clearing browser cache or storage will permanently destroy this data.
For assets with real-world value, this may result in irreversible financial loss.
Use exportPrivateStates() and exportSigningKeys() to create backups.`);
        }
    };
    wc = (t)=>{
        const e = {
            ...xs,
            ...t
        };
        if (!t.privateStoragePasswordProvider) throw new Error(`privateStoragePasswordProvider is required.
Provide a function that returns a strong, secret password (minimum 16 characters).`);
        if (!t.accountId || t.accountId.trim().length === 0) throw new Error(`accountId is required.
Provide an account identifier (e.g., wallet address) to scope storage and prevent cross-account data access.`);
        const n = t.privateStoragePasswordProvider, r = {
            dbName: e.midnightDbName,
            createLevel: e.levelFactory ?? Ss,
            cryptoBackend: t.cryptoBackend
        }, s = {
            privateState: ut(e.privateStateStoreName, t.accountId),
            signingKey: ut(e.signingKeyStoreName, t.accountId)
        };
        Ga();
        let o = null;
        const i = (a)=>{
            if (o === null) throw new Error("Contract address not set. Call setContractAddress() before accessing private state.");
            return `${o}:${a}`;
        };
        return {
            setContractAddress (a) {
                o = a;
            },
            async get (a) {
                const { privateState: c } = s, u = i(a);
                return wr(r, c, u, n);
            },
            async remove (a) {
                const { privateState: c } = s;
                await ye(r.dbName, c);
                const u = i(a);
                return C(r, c, (l)=>l.del(u));
            },
            async set (a, c) {
                const { privateState: u } = s;
                await ye(r.dbName, u);
                const l = i(a), f = await lt(r, u, n), h = Ct(c), y = await f.encrypt(h);
                return C(r, u, (p)=>p.put(l, y));
            },
            async clear () {
                if (o === null) throw new Error("Contract address not set. Call setContractAddress() before accessing private state.");
                const { privateState: a } = s;
                return C(r, a, (c)=>c.clear());
            },
            async getSigningKey (a) {
                const { signingKey: c } = s;
                return wr(r, c, a, n);
            },
            async removeSigningKey (a) {
                const { signingKey: c } = s;
                return await ye(r.dbName, c), C(r, c, (u)=>u.del(a));
            },
            async setSigningKey (a, c) {
                const { signingKey: u } = s;
                await ye(r.dbName, u);
                const l = await lt(r, u, n), f = Ct(c), h = await l.encrypt(f);
                return C(r, u, (y)=>y.put(a, h));
            },
            async clearSigningKeys () {
                const { signingKey: a } = s;
                return C(r, a, (c)=>c.clear());
            },
            async exportPrivateStates (a) {
                if (o === null) throw new Error("Contract address not set. Call setContractAddress() before exporting private states.");
                const c = a?.maxStates ?? On;
                a?.password !== void 0 && Er(a.password);
                const u = a?.password ?? await M(n), { privateState: l } = s, f = await mr(r, l, n), h = `${o}:`, y = new Map;
                for (const [g, m] of f.entries())if (g.startsWith(h)) {
                    const b = g.slice(h.length);
                    y.set(b, m);
                }
                if (y.size === 0) throw new zt("No private states to export");
                if (y.size > c) throw new zt(`Too many states to export (${y.size}). Maximum allowed: ${c}`);
                const p = {
                    version: br,
                    exportedAt: new Date().toISOString(),
                    stateCount: y.size,
                    states: Object.fromEntries(Array.from(y.entries()).map(([g, m])=>[
                            g,
                            Ct(m)
                        ]))
                }, w = await L.create(u, {
                    cryptoBackend: r.cryptoBackend
                });
                return {
                    format: "midnight-private-state-export",
                    encryptedPayload: await w.encrypt(JSON.stringify(p)),
                    salt: w.getSalt().toString("hex")
                };
            },
            async importPrivateStates (a, c) {
                if (o === null) throw new Error("Contract address not set. Call setContractAddress() before importing private states.");
                const u = c?.conflictStrategy ?? "error", l = c?.maxStates ?? On;
                if (a.format !== "midnight-private-state-export") throw new B("Unrecognized export format");
                if (!a.encryptedPayload || !a.salt) throw new B("Missing required fields");
                _r(a.salt), c?.password !== void 0 && Er(c.password);
                const f = c?.password ?? await M(n);
                let h;
                try {
                    const g = x.Buffer.from(a.salt, "hex"), b = await (await L.create(f, {
                        existingSalt: g,
                        cryptoBackend: r.cryptoBackend
                    })).decrypt(a.encryptedPayload);
                    h = JSON.parse(b);
                } catch  {
                    throw new ce;
                }
                if (!h.states || typeof h.states != "object" || typeof h.version != "number" || typeof h.stateCount != "number") throw new ce;
                if (!Je.includes(h.version)) throw new B(`Export version ${h.version} is not supported. Supported versions: ${Je.join(", ")}`);
                const y = Object.keys(h.states);
                if (y.length !== h.stateCount) throw new ce;
                if (y.length > l) throw new B(`Too many states in export (${y.length}). Maximum allowed: ${l}`);
                if (u === "error") {
                    let g = 0;
                    for (const m of y)await this.get(m) !== null && g++;
                    if (g > 0) throw new Tn(g);
                }
                let p = 0, w = 0, d = 0;
                for (const g of y){
                    const m = h.states[g], b = await this.get(g);
                    if (b !== null) if (u === "skip") {
                        w++;
                        continue;
                    } else u === "overwrite" && d++;
                    const E = En(m);
                    await this.set(g, E), b === null && p++;
                }
                return {
                    imported: p,
                    skipped: w,
                    overwritten: d
                };
            },
            async exportSigningKeys (a) {
                const c = a?.maxKeys ?? An;
                a?.password !== void 0 && vr(a.password);
                const u = a?.password ?? await M(n), { signingKey: l } = s, f = await mr(r, l, n);
                if (f.size === 0) throw new Gt("No signing keys to export");
                if (f.size > c) throw new Gt(`Too many keys to export (${f.size}). Maximum allowed: ${c}`);
                const h = {
                    version: br,
                    exportedAt: new Date().toISOString(),
                    keyCount: f.size,
                    keys: Object.fromEntries(f.entries())
                }, y = await L.create(u, {
                    cryptoBackend: r.cryptoBackend
                });
                return {
                    format: "midnight-signing-key-export",
                    encryptedPayload: await y.encrypt(JSON.stringify(h)),
                    salt: y.getSalt().toString("hex")
                };
            },
            async importSigningKeys (a, c) {
                const u = c?.conflictStrategy ?? "error", l = c?.maxKeys ?? An;
                if (a.format !== "midnight-signing-key-export") throw new B("Unrecognized export format");
                if (!a.encryptedPayload || !a.salt) throw new B("Missing required fields");
                _r(a.salt), c?.password !== void 0 && vr(c.password);
                const f = c?.password ?? await M(n);
                let h;
                try {
                    const g = x.Buffer.from(a.salt, "hex"), b = await (await L.create(f, {
                        existingSalt: g,
                        cryptoBackend: r.cryptoBackend
                    })).decrypt(a.encryptedPayload);
                    h = JSON.parse(b);
                } catch  {
                    throw new ce;
                }
                if (!h.keys || typeof h.keys != "object" || typeof h.version != "number" || typeof h.keyCount != "number") throw new ce;
                if (!Je.includes(h.version)) throw new B(`Export version ${h.version} is not supported. Supported versions: ${Je.join(", ")}`);
                const y = Object.keys(h.keys);
                if (y.length !== h.keyCount) throw new ce;
                if (y.length > l) throw new B(`Too many keys in export (${y.length}). Maximum allowed: ${l}`);
                for (const g of y)Fa(h.keys[g]);
                if (u === "error") {
                    let g = 0;
                    for (const m of y)await this.getSigningKey(m) !== null && g++;
                    if (g > 0) throw new Tn(g, "signing key");
                }
                let p = 0, w = 0, d = 0;
                for (const g of y){
                    const m = h.keys[g], b = await this.getSigningKey(g);
                    if (b !== null) if (u === "skip") {
                        w++;
                        continue;
                    } else u === "overwrite" && d++;
                    await this.setSigningKey(g, m), b === null && p++;
                }
                return {
                    imported: p,
                    skipped: w,
                    overwritten: d
                };
            },
            async changePassword (a, c, u) {
                if (o === null) throw new Error("Contract address not set. Call setContractAddress() before changing password.");
                const { privateState: l, signingKey: f } = s, h = `${r.dbName}:${l}`, y = `${o}:`;
                return gr(h, async ()=>{
                    const p = await pr({
                        ctx: r,
                        storeName: l,
                        oldPasswordProvider: a,
                        newPasswordProvider: c,
                        maxEntries: u?.maxEntries ?? yr,
                        shouldProceed: (w)=>w.startsWith(y)
                    });
                    return jt(r.dbName, l, f), p;
                });
            },
            async changeSigningKeysPassword (a, c, u) {
                const { privateState: l, signingKey: f } = s, h = `${r.dbName}:${f}`;
                return gr(h, async ()=>{
                    const y = await pr({
                        ctx: r,
                        storeName: f,
                        oldPasswordProvider: a,
                        newPasswordProvider: c,
                        maxEntries: u?.maxEntries ?? yr
                    });
                    return jt(r.dbName, l, f), y;
                });
            },
            async invalidateEncryptionCache () {
                const { privateState: a, signingKey: c } = s;
                jt(r.dbName, a, c);
            }
        };
    };
    xr = async (t, e, n)=>{
        const r = t.createLevel(t.dbName);
        try {
            await r.open();
            const s = r.sublevel(e, {
                valueEncoding: "utf-8"
            }), o = r.sublevel(n, {
                valueEncoding: "utf-8"
            });
            try {
                await s.open();
            } catch (c) {
                const u = c instanceof Error ? c.message : "Unknown error";
                throw new Error(`Failed to open source sublevel "${e}": ${u}. Ensure no other process is accessing the database.`, {
                    cause: c
                });
            }
            try {
                await o.open();
            } catch (c) {
                const u = c instanceof Error ? c.message : "Unknown error";
                throw new Error(`Failed to open target sublevel "${n}": ${u}. Ensure no other process is accessing the database.`, {
                    cause: c
                });
            }
            let i = 0;
            const a = [];
            try {
                for await (const [c, u] of s.iterator())a.push({
                    type: "put",
                    key: c,
                    value: u
                }), i++;
            } catch (c) {
                const u = c instanceof Error ? c.message : "Unknown error";
                throw new Error(`Failed to read data from source sublevel "${e}" after ${i} entries: ${u}. Migration incomplete. Source data is unchanged.`, {
                    cause: c
                });
            }
            if (a.length > 0) try {
                await o.batch(a);
            } catch (c) {
                const u = c instanceof Error ? c.message : "Unknown error";
                throw new Error(`Failed to write ${a.length} entries to target sublevel "${n}": ${u}. Migration incomplete. Target sublevel may contain partial data. Source data at "${e}" is unchanged.`, {
                    cause: c
                });
            }
            return await o.close(), await s.close(), i;
        } finally{
            try {
                await r.close();
            } catch  {}
        }
    };
    mc = async (t)=>{
        const e = {
            ...xs,
            ...t
        }, n = {
            dbName: e.midnightDbName,
            createLevel: e.levelFactory ?? Ss
        };
        if (!t.accountId || t.accountId.trim().length === 0) throw new Error("accountId is required for migration");
        const r = ut(e.privateStateStoreName, t.accountId), s = ut(e.signingKeyStoreName, t.accountId);
        let o;
        try {
            o = await xr(n, e.privateStateStoreName, r);
        } catch (a) {
            const c = a instanceof Error ? a.message : "Unknown error";
            throw new Error(`Migration failed during private states copy: ${c}. No data has been migrated. Source data is unchanged.`, {
                cause: a
            });
        }
        let i;
        try {
            i = await xr(n, e.signingKeyStoreName, s);
        } catch (a) {
            const c = a instanceof Error ? a.message : "Unknown error";
            throw new Error(`Migration failed during signing keys copy: ${c}. WARNING: ${o} private states were already migrated to scoped location. Signing keys remain at original location. Manual intervention may be required.`, {
                cause: a
            });
        }
        return {
            privateStatesMigrated: o,
            signingKeysMigrated: i
        };
    };
});
export { xs as DEFAULT_CONFIG, L as StorageEncryption, dr as decryptValue, wc as levelPrivateStateProvider, mc as migrateToAccountScoped, __tla };
