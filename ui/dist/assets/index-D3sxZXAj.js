import { a as Xm, c as Dt, __tla as __tla_0 } from "./index-IsGXemPy.js";
let HK, ap, zq, nr, Je, Hq, r9, vq, sd, Dq, EL, Nq, be, i9, RL, Ct, qq, K, Ft, t9, Tt, Ur, u3, J, kq, Fq, he, se, Zq, Rq, ip, Bq, mr, Fs, Rs, fs, Is, ds, w, rD, ou, Sq, er, t0, Cq, hq, sa, Mt, Ar, yr, c9, f9, l9, Uq, jq, _9, d9, pn, le, u9, IK, xK, Kq, Fr, bq, Ce, pr, gr, Lq, Kt, w9, n9, e9, Fc, o9, p9, Gq, Yq, Xq, mq, yq, Jq, Wq, Vq, wq, s9, zn, Tq, mm, _t, g9, h9, q, Oq, Qq;
let __tla = Promise.all([
    (()=>{
        try {
            return __tla_0;
        } catch  {}
    })()
]).then(async ()=>{
    let Qm, Zm, e0;
    Qm = {};
    Zm = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: Qm
    }, Symbol.toStringTag, {
        value: "Module"
    }));
    zn = Xm(Zm);
    t0 = async (e = {}, t)=>{
        let r;
        if (t.startsWith("data:")) {
            const n = t.replace(/^data:.*?base64,/, "");
            let s;
            if (typeof Buffer == "function" && typeof Buffer.from == "function") s = Buffer.from(n, "base64");
            else if (typeof atob == "function") {
                const i = atob(n);
                s = new Uint8Array(i.length);
                for(let a = 0; a < i.length; a++)s[a] = i.charCodeAt(a);
            } else throw new Error("Cannot decode base64-encoded data URL");
            r = await WebAssembly.instantiate(s, e);
        } else {
            const n = await fetch(t), s = n.headers.get("Content-Type") || "";
            if ("instantiateStreaming" in WebAssembly && s.startsWith("application/wasm")) r = await WebAssembly.instantiateStreaming(n, e);
            else {
                const i = await n.arrayBuffer();
                r = await WebAssembly.instantiate(i, e);
            }
        }
        return r.instance.exports;
    };
    e0 = "/assets/midnight_ledger_wasm_bg-D5swusBh.wasm";
    let o;
    function r0(e) {
        o = e;
    }
    function pt(e) {
        const t = o.__externref_table_alloc();
        return o.__wbindgen_export_2.set(t, e), t;
    }
    function Zt(e, t) {
        try {
            return e.apply(this, t);
        } catch (r) {
            const n = pt(r);
            o.__wbindgen_exn_store(n);
        }
    }
    let Co = null;
    function ss() {
        return (Co === null || Co.byteLength === 0) && (Co = new Uint8Array(o.memory.buffer)), Co;
    }
    let Do = new TextDecoder("utf-8", {
        ignoreBOM: !0,
        fatal: !0
    });
    Do.decode();
    const n0 = 2146435072;
    let Oc = 0;
    function s0(e, t) {
        return Oc += t, Oc >= n0 && (Do = new TextDecoder("utf-8", {
            ignoreBOM: !0,
            fatal: !0
        }), Do.decode(), Oc = t), Do.decode(ss().subarray(e, e + t));
    }
    function R(e, t) {
        return e = e >>> 0, s0(e, t);
    }
    let O = 0;
    const Fi = new TextEncoder;
    "encodeInto" in Fi || (Fi.encodeInto = function(e, t) {
        const r = Fi.encode(e);
        return t.set(r), {
            read: e.length,
            written: r.length
        };
    });
    function A(e, t, r) {
        if (r === void 0) {
            const _ = Fi.encode(e), f = t(_.length, 1) >>> 0;
            return ss().subarray(f, f + _.length).set(_), O = _.length, f;
        }
        let n = e.length, s = t(n, 1) >>> 0;
        const i = ss();
        let a = 0;
        for(; a < n; a++){
            const _ = e.charCodeAt(a);
            if (_ > 127) break;
            i[s + a] = _;
        }
        if (a !== n) {
            a !== 0 && (e = e.slice(a)), s = r(s, n, n = a + e.length * 3, 1) >>> 0;
            const _ = ss().subarray(s + a, s + n), f = Fi.encodeInto(e, _);
            a += f.written, s = r(s, n, a, 1) >>> 0;
        }
        return O = a, s;
    }
    let Vn = null;
    function ze() {
        return (Vn === null || Vn.buffer.detached === !0 || Vn.buffer.detached === void 0 && Vn.buffer !== o.memory.buffer) && (Vn = new DataView(o.memory.buffer)), Vn;
    }
    function I(e) {
        return e == null;
    }
    function Pa(e, t) {
        return e = e >>> 0, ss().subarray(e / 1, e / 1 + t);
    }
    function iu(e) {
        const t = typeof e;
        if (t == "number" || t == "boolean" || e == null) return `${e}`;
        if (t == "string") return `"${e}"`;
        if (t == "symbol") {
            const s = e.description;
            return s == null ? "Symbol" : `Symbol(${s})`;
        }
        if (t == "function") {
            const s = e.name;
            return typeof s == "string" && s.length > 0 ? `Function(${s})` : "Function";
        }
        if (Array.isArray(e)) {
            const s = e.length;
            let i = "[";
            s > 0 && (i += iu(e[0]));
            for(let a = 1; a < s; a++)i += ", " + iu(e[a]);
            return i += "]", i;
        }
        const r = /\[object ([^\]]+)\]/.exec(toString.call(e));
        let n;
        if (r && r.length > 1) n = r[1];
        else return toString.call(e);
        if (n == "Object") try {
            return "Object(" + JSON.stringify(e) + ")";
        } catch  {
            return "Object";
        }
        return e instanceof Error ? `${e.name}: ${e.message}
${e.stack}` : n;
    }
    function vt(e, t) {
        e = e >>> 0;
        const r = ze(), n = [];
        for(let s = e; s < e + 4 * t; s += 4)n.push(o.__wbindgen_export_2.get(r.getUint32(s, !0)));
        return o.__externref_drop_slice(e, t), n;
    }
    const kd = typeof FinalizationRegistry > "u" ? {
        register: ()=>{},
        unregister: ()=>{}
    } : new FinalizationRegistry((e)=>{
        o.__wbindgen_export_7.get(e.dtor)(e.a, e.b);
    });
    function i0(e, t, r, n) {
        const s = {
            a: e,
            b: t,
            cnt: 1,
            dtor: r
        }, i = (...a)=>{
            s.cnt++;
            const _ = s.a;
            s.a = 0;
            try {
                return n(_, s.b, ...a);
            } finally{
                --s.cnt === 0 ? (o.__wbindgen_export_7.get(s.dtor)(_, s.b), kd.unregister(s)) : s.a = _;
            }
        };
        return i.original = s, kd.register(i, s, s), i;
    }
    function v(e, t) {
        if (!(e instanceof t)) throw new Error(`expected instance of ${t.name}`);
    }
    function l(e) {
        const t = o.__wbindgen_export_2.get(e);
        return o.__externref_table_dealloc(e), t;
    }
    function we(e, t) {
        const r = t(e.length * 4, 4) >>> 0;
        for(let n = 0; n < e.length; n++){
            const s = pt(e[n]);
            ze().setUint32(r + 4 * n, s, !0);
        }
        return O = e.length, r;
    }
    hq = function(e, t) {
        const r = we(e, o.__wbindgen_malloc), n = O;
        v(t, be);
        const s = o.partitionTranscripts(r, n, t.__wbg_ptr);
        if (s[2]) throw l(s[1]);
        return l(s[0]);
    };
    function Ep(e, t) {
        const r = t(e.length * 1, 1) >>> 0;
        return ss().set(e, r / 1), O = e.length, r;
    }
    wq = function(e) {
        const t = o.parseCheckResult(e);
        if (t[2]) throw l(t[1]);
        return l(t[0]);
    };
    bq = function(e, t) {
        let r, n;
        try {
            const a = A(t, o.__wbindgen_malloc, o.__wbindgen_realloc), _ = O, f = o.coinCommitment(e, a, _);
            var s = f[0], i = f[1];
            if (f[3]) throw s = 0, i = 0, l(f[2]);
            return r = s, n = i, R(s, i);
        } finally{
            o.__wbindgen_free(r, n, 1);
        }
    };
    yq = function(e, t) {
        const r = o.createCheckPayload(e, I(t) ? 0 : pt(t));
        if (r[2]) throw l(r[1]);
        return l(r[0]);
    };
    mq = function(e, t, r) {
        const n = o.createProvingPayload(e, I(t) ? 0 : pt(t), r);
        if (n[2]) throw l(n[1]);
        return l(n[0]);
    };
    Sq = function() {
        let e, t;
        try {
            const s = o.communicationCommitmentRandomness();
            var r = s[0], n = s[1];
            if (s[3]) throw r = 0, n = 0, l(s[2]);
            return e = r, t = n, R(r, n);
        } finally{
            o.__wbindgen_free(e, t, 1);
        }
    };
    Fq = function(e, t) {
        let r, n;
        try {
            const a = A(e, o.__wbindgen_malloc, o.__wbindgen_realloc), _ = O, f = o.signData(a, _, t);
            var s = f[0], i = f[1];
            if (f[3]) throw s = 0, i = 0, l(f[2]);
            return r = s, n = i, R(s, i);
        } finally{
            o.__wbindgen_free(r, n, 1);
        }
    };
    function o0(e, t, r) {
        o.closure3101_externref_shim(e, t, r);
    }
    function a0(e, t, r, n, s) {
        o.closure3148_externref_shim(e, t, r, n, s);
    }
    function Ip(e, t, r, n) {
        o.closure3146_externref_shim(e, t, r, n);
    }
    typeof FinalizationRegistry > "u" || new FinalizationRegistry((e)=>o.__wbg_authorizedclaim_free(e >>> 0, 1));
    const Tc = typeof FinalizationRegistry > "u" ? {
        register: ()=>{},
        unregister: ()=>{}
    } : new FinalizationRegistry((e)=>o.__wbg_binding_free(e >>> 0, 1));
    class ls {
        static __wrap(t) {
            t = t >>> 0;
            const r = Object.create(ls.prototype);
            return r.__wbg_ptr = t, Tc.register(r, r.__wbg_ptr, r), r;
        }
        __destroy_into_raw() {
            const t = this.__wbg_ptr;
            return this.__wbg_ptr = 0, Tc.unregister(this), t;
        }
        free() {
            const t = this.__destroy_into_raw();
            o.__wbg_binding_free(t, 0);
        }
        static deserialize(t) {
            const r = o.binding_deserialize(t);
            if (r[2]) throw l(r[1]);
            return ls.__wrap(r[0]);
        }
        constructor(t){
            const r = A(t, o.__wbindgen_malloc, o.__wbindgen_realloc), n = O, s = o.binding_new(r, n);
            if (s[2]) throw l(s[1]);
            return this.__wbg_ptr = s[0] >>> 0, Tc.register(this, this.__wbg_ptr, this), this;
        }
        get instance() {
            let t, r;
            try {
                const n = o.binding_instance(this.__wbg_ptr);
                return t = n[0], r = n[1], R(n[0], n[1]);
            } finally{
                o.__wbindgen_free(t, r, 1);
            }
        }
        serialize() {
            const t = o.binding_serialize(this.__wbg_ptr);
            if (t[2]) throw l(t[1]);
            return l(t[0]);
        }
        toString(t) {
            let r, n;
            try {
                const s = o.binding_toString(this.__wbg_ptr, I(t) ? 16777215 : t ? 1 : 0);
                return r = s[0], n = s[1], R(s[0], s[1]);
            } finally{
                o.__wbindgen_free(r, n, 1);
            }
        }
    }
    Symbol.dispose && (ls.prototype[Symbol.dispose] = ls.prototype.free);
    const vc = typeof FinalizationRegistry > "u" ? {
        register: ()=>{},
        unregister: ()=>{}
    } : new FinalizationRegistry((e)=>o.__wbg_chargedstate_free(e >>> 0, 1));
    yr = class {
        static __wrap(t) {
            t = t >>> 0;
            const r = Object.create(yr.prototype);
            return r.__wbg_ptr = t, vc.register(r, r.__wbg_ptr, r), r;
        }
        __destroy_into_raw() {
            const t = this.__wbg_ptr;
            return this.__wbg_ptr = 0, vc.unregister(this), t;
        }
        free() {
            const t = this.__destroy_into_raw();
            o.__wbg_chargedstate_free(t, 0);
        }
        constructor(t){
            v(t, Mt);
            const r = o.chargedstate_new(t.__wbg_ptr);
            return this.__wbg_ptr = r >>> 0, vc.register(this, this.__wbg_ptr, this), this;
        }
        get state() {
            const t = o.chargedstate_state(this.__wbg_ptr);
            return Mt.__wrap(t);
        }
        toString(t) {
            let r, n;
            try {
                const s = o.chargedstate_toString(this.__wbg_ptr, I(t) ? 16777215 : t ? 1 : 0);
                return r = s[0], n = s[1], R(s[0], s[1]);
            } finally{
                o.__wbindgen_free(r, n, 1);
            }
        }
    };
    Symbol.dispose && (yr.prototype[Symbol.dispose] = yr.prototype.free);
    const Cc = typeof FinalizationRegistry > "u" ? {
        register: ()=>{},
        unregister: ()=>{}
    } : new FinalizationRegistry((e)=>o.__wbg_claimrewardstransaction_free(e >>> 0, 1));
    class Qe {
        static __wrap(t) {
            t = t >>> 0;
            const r = Object.create(Qe.prototype);
            return r.__wbg_ptr = t, Cc.register(r, r.__wbg_ptr, r), r;
        }
        __destroy_into_raw() {
            const t = this.__wbg_ptr;
            return this.__wbg_ptr = 0, Cc.unregister(this), t;
        }
        free() {
            const t = this.__destroy_into_raw();
            o.__wbg_claimrewardstransaction_free(t, 0);
        }
        static deserialize(t, r) {
            const n = A(t, o.__wbindgen_malloc, o.__wbindgen_realloc), s = O, i = o.claimrewardstransaction_deserialize(n, s, r);
            if (i[2]) throw l(i[1]);
            return Qe.__wrap(i[0]);
        }
        get dataToSign() {
            return o.claimrewardstransaction_dataToSign(this.__wbg_ptr);
        }
        addSignature(t) {
            const r = A(t, o.__wbindgen_malloc, o.__wbindgen_realloc), n = O, s = o.claimrewardstransaction_addSignature(this.__wbg_ptr, r, n);
            if (s[2]) throw l(s[1]);
            return Qe.__wrap(s[0]);
        }
        eraseSignatures() {
            const t = o.claimrewardstransaction_eraseSignatures(this.__wbg_ptr);
            if (t[2]) throw l(t[1]);
            return Qe.__wrap(t[0]);
        }
        static new(t, r, n, s, i) {
            const a = A(t, o.__wbindgen_malloc, o.__wbindgen_realloc), _ = O, f = A(n, o.__wbindgen_malloc, o.__wbindgen_realloc), g = O, h = A(s, o.__wbindgen_malloc, o.__wbindgen_realloc), b = O, S = A(i, o.__wbindgen_malloc, o.__wbindgen_realloc), k = O, x = o.claimrewardstransaction_new(a, _, r, f, g, h, b, S, k);
            if (x[2]) throw l(x[1]);
            return Qe.__wrap(x[0]);
        }
        get kind() {
            let t, r;
            try {
                const n = o.claimrewardstransaction_kind(this.__wbg_ptr);
                return t = n[0], r = n[1], R(n[0], n[1]);
            } finally{
                o.__wbindgen_free(t, r, 1);
            }
        }
        get nonce() {
            let t, r;
            try {
                const i = o.claimrewardstransaction_nonce(this.__wbg_ptr);
                var n = i[0], s = i[1];
                if (i[3]) throw n = 0, s = 0, l(i[2]);
                return t = n, r = s, R(n, s);
            } finally{
                o.__wbindgen_free(t, r, 1);
            }
        }
        get owner() {
            let t, r;
            try {
                const i = o.claimrewardstransaction_owner(this.__wbg_ptr);
                var n = i[0], s = i[1];
                if (i[3]) throw n = 0, s = 0, l(i[2]);
                return t = n, r = s, R(n, s);
            } finally{
                o.__wbindgen_free(t, r, 1);
            }
        }
        get value() {
            return o.claimrewardstransaction_value(this.__wbg_ptr);
        }
        constructor(t, r, n, s, i, a, _){
            const f = A(t, o.__wbindgen_malloc, o.__wbindgen_realloc), g = O, h = A(r, o.__wbindgen_malloc, o.__wbindgen_realloc), b = O, S = A(s, o.__wbindgen_malloc, o.__wbindgen_realloc), k = O, x = A(i, o.__wbindgen_malloc, o.__wbindgen_realloc), $ = O, C = o.claimrewardstransaction_construct(f, g, h, b, n, S, k, x, $, a, _);
            if (C[2]) throw l(C[1]);
            return this.__wbg_ptr = C[0] >>> 0, Cc.register(this, this.__wbg_ptr, this), this;
        }
        serialize() {
            const t = o.claimrewardstransaction_serialize(this.__wbg_ptr);
            if (t[2]) throw l(t[1]);
            return l(t[0]);
        }
        get signature() {
            const t = o.claimrewardstransaction_signature(this.__wbg_ptr);
            if (t[2]) throw l(t[1]);
            return l(t[0]);
        }
        toString(t) {
            let r, n;
            try {
                const s = o.claimrewardstransaction_toString(this.__wbg_ptr, I(t) ? 16777215 : t ? 1 : 0);
                return r = s[0], n = s[1], R(s[0], s[1]);
            } finally{
                o.__wbindgen_free(r, n, 1);
            }
        }
    }
    Symbol.dispose && (Qe.prototype[Symbol.dispose] = Qe.prototype.free);
    const zc = typeof FinalizationRegistry > "u" ? {
        register: ()=>{},
        unregister: ()=>{}
    } : new FinalizationRegistry((e)=>o.__wbg_coinsecretkey_free(e >>> 0, 1));
    class Ai {
        static __wrap(t) {
            t = t >>> 0;
            const r = Object.create(Ai.prototype);
            return r.__wbg_ptr = t, zc.register(r, r.__wbg_ptr, r), r;
        }
        __destroy_into_raw() {
            const t = this.__wbg_ptr;
            return this.__wbg_ptr = 0, zc.unregister(this), t;
        }
        free() {
            const t = this.__destroy_into_raw();
            o.__wbg_coinsecretkey_free(t, 0);
        }
        public_key() {
            let t, r;
            try {
                const i = o.coinsecretkey_public_key(this.__wbg_ptr);
                var n = i[0], s = i[1];
                if (i[3]) throw n = 0, s = 0, l(i[2]);
                return t = n, r = s, R(n, s);
            } finally{
                o.__wbindgen_free(t, r, 1);
            }
        }
        constructor(){
            const t = o.coinsecretkey_new();
            if (t[2]) throw l(t[1]);
            return this.__wbg_ptr = t[0] >>> 0, zc.register(this, this.__wbg_ptr, this), this;
        }
        clear() {
            o.coinsecretkey_clear(this.__wbg_ptr);
        }
        yesIKnowTheSecurityImplicationsOfThis_serialize() {
            const t = o.coinsecretkey_yesIKnowTheSecurityImplicationsOfThis_serialize(this.__wbg_ptr);
            if (t[2]) throw l(t[1]);
            return l(t[0]);
        }
    }
    Symbol.dispose && (Ai.prototype[Symbol.dispose] = Ai.prototype.free);
    const Ac = typeof FinalizationRegistry > "u" ? {
        register: ()=>{},
        unregister: ()=>{}
    } : new FinalizationRegistry((e)=>o.__wbg_contractcall_free(e >>> 0, 1));
    class gn {
        static __wrap(t) {
            t = t >>> 0;
            const r = Object.create(gn.prototype);
            return r.__wbg_ptr = t, Ac.register(r, r.__wbg_ptr, r), r;
        }
        __destroy_into_raw() {
            const t = this.__wbg_ptr;
            return this.__wbg_ptr = 0, Ac.unregister(this), t;
        }
        free() {
            const t = this.__destroy_into_raw();
            o.__wbg_contractcall_free(t, 0);
        }
        get entryPoint() {
            const t = o.contractcall_entryPoint(this.__wbg_ptr);
            if (t[2]) throw l(t[1]);
            return l(t[0]);
        }
        get fallibleTranscript() {
            const t = o.contractcall_fallibleTranscript(this.__wbg_ptr);
            if (t[2]) throw l(t[1]);
            return l(t[0]);
        }
        get guaranteedTranscript() {
            const t = o.contractcall_guaranteedTranscript(this.__wbg_ptr);
            if (t[2]) throw l(t[1]);
            return l(t[0]);
        }
        get communicationCommitment() {
            const t = o.contractcall_communicationCommitment(this.__wbg_ptr);
            if (t[2]) throw l(t[1]);
            return l(t[0]);
        }
        constructor(){
            const t = o.contractcall_new();
            if (t[2]) throw l(t[1]);
            return this.__wbg_ptr = t[0] >>> 0, Ac.register(this, this.__wbg_ptr, this), this;
        }
        get proof() {
            const t = o.contractcall_proof(this.__wbg_ptr);
            if (t[2]) throw l(t[1]);
            return l(t[0]);
        }
        get address() {
            let t, r;
            try {
                const i = o.contractcall_address(this.__wbg_ptr);
                var n = i[0], s = i[1];
                if (i[3]) throw n = 0, s = 0, l(i[2]);
                return t = n, r = s, R(n, s);
            } finally{
                o.__wbindgen_free(t, r, 1);
            }
        }
        toString(t) {
            let r, n;
            try {
                const s = o.contractcall_toString(this.__wbg_ptr, I(t) ? 16777215 : t ? 1 : 0);
                return r = s[0], n = s[1], R(s[0], s[1]);
            } finally{
                o.__wbindgen_free(r, n, 1);
            }
        }
    }
    Symbol.dispose && (gn.prototype[Symbol.dispose] = gn.prototype.free);
    const xd = typeof FinalizationRegistry > "u" ? {
        register: ()=>{},
        unregister: ()=>{}
    } : new FinalizationRegistry((e)=>o.__wbg_contractcallprototype_free(e >>> 0, 1));
    ou = class {
        __destroy_into_raw() {
            const t = this.__wbg_ptr;
            return this.__wbg_ptr = 0, xd.unregister(this), t;
        }
        free() {
            const t = this.__destroy_into_raw();
            o.__wbg_contractcallprototype_free(t, 0);
        }
        constructor(t, r, n, s, i, a, _, f, g, h){
            const b = A(t, o.__wbindgen_malloc, o.__wbindgen_realloc), S = O;
            v(n, Sr);
            const k = we(a, o.__wbindgen_malloc), x = O, $ = A(g, o.__wbindgen_malloc, o.__wbindgen_realloc), C = O, z = A(h, o.__wbindgen_malloc, o.__wbindgen_realloc), V = O, B = o.contractcallprototype_new(b, S, r, n.__wbg_ptr, s, i, k, x, _, f, $, C, z, V);
            if (B[2]) throw l(B[1]);
            return this.__wbg_ptr = B[0] >>> 0, xd.register(this, this.__wbg_ptr, this), this;
        }
        intoCall(t) {
            const r = o.contractcallprototype_intoCall(this.__wbg_ptr, t);
            if (r[2]) throw l(r[1]);
            return gn.__wrap(r[0]);
        }
        toString(t) {
            let r, n;
            try {
                const s = o.contractcallprototype_toString(this.__wbg_ptr, I(t) ? 16777215 : t ? 1 : 0);
                return r = s[0], n = s[1], R(s[0], s[1]);
            } finally{
                o.__wbindgen_free(r, n, 1);
            }
        }
    };
    Symbol.dispose && (ou.prototype[Symbol.dispose] = ou.prototype.free);
    const $c = typeof FinalizationRegistry > "u" ? {
        register: ()=>{},
        unregister: ()=>{}
    } : new FinalizationRegistry((e)=>o.__wbg_contractdeploy_free(e >>> 0, 1));
    pn = class {
        static __wrap(t) {
            t = t >>> 0;
            const r = Object.create(pn.prototype);
            return r.__wbg_ptr = t, $c.register(r, r.__wbg_ptr, r), r;
        }
        __destroy_into_raw() {
            const t = this.__wbg_ptr;
            return this.__wbg_ptr = 0, $c.unregister(this), t;
        }
        free() {
            const t = this.__destroy_into_raw();
            o.__wbg_contractdeploy_free(t, 0);
        }
        get initialState() {
            const t = o.contractdeploy_initialState(this.__wbg_ptr);
            return Fr.__wrap(t);
        }
        constructor(t){
            v(t, Fr);
            const r = o.contractdeploy_new(t.__wbg_ptr);
            return this.__wbg_ptr = r >>> 0, $c.register(this, this.__wbg_ptr, this), this;
        }
        get address() {
            let t, r;
            try {
                const i = o.contractdeploy_address(this.__wbg_ptr);
                var n = i[0], s = i[1];
                if (i[3]) throw n = 0, s = 0, l(i[2]);
                return t = n, r = s, R(n, s);
            } finally{
                o.__wbindgen_free(t, r, 1);
            }
        }
        toString(t) {
            let r, n;
            try {
                const s = o.contractdeploy_toString(this.__wbg_ptr, I(t) ? 16777215 : t ? 1 : 0);
                return r = s[0], n = s[1], R(s[0], s[1]);
            } finally{
                o.__wbindgen_free(r, n, 1);
            }
        }
    };
    Symbol.dispose && (pn.prototype[Symbol.dispose] = pn.prototype.free);
    const Pc = typeof FinalizationRegistry > "u" ? {
        register: ()=>{},
        unregister: ()=>{}
    } : new FinalizationRegistry((e)=>o.__wbg_contractmaintenanceauthority_free(e >>> 0, 1));
    mr = class {
        static __wrap(t) {
            t = t >>> 0;
            const r = Object.create(mr.prototype);
            return r.__wbg_ptr = t, Pc.register(r, r.__wbg_ptr, r), r;
        }
        __destroy_into_raw() {
            const t = this.__wbg_ptr;
            return this.__wbg_ptr = 0, Pc.unregister(this), t;
        }
        free() {
            const t = this.__destroy_into_raw();
            o.__wbg_contractmaintenanceauthority_free(t, 0);
        }
        static deserialize(t) {
            const r = o.contractmaintenanceauthority_deserialize(t);
            if (r[2]) throw l(r[1]);
            return mr.__wrap(r[0]);
        }
        constructor(t, r, n){
            const s = o.contractmaintenanceauthority_new(t, r, I(n) ? 0 : pt(n));
            if (s[2]) throw l(s[1]);
            return this.__wbg_ptr = s[0] >>> 0, Pc.register(this, this.__wbg_ptr, this), this;
        }
        get counter() {
            return o.contractmaintenanceauthority_counter(this.__wbg_ptr);
        }
        get committee() {
            const t = o.contractmaintenanceauthority_committee(this.__wbg_ptr);
            if (t[2]) throw l(t[1]);
            return l(t[0]);
        }
        serialize() {
            const t = o.contractmaintenanceauthority_serialize(this.__wbg_ptr);
            if (t[2]) throw l(t[1]);
            return l(t[0]);
        }
        get threshold() {
            return o.contractmaintenanceauthority_threshold(this.__wbg_ptr) >>> 0;
        }
        toString(t) {
            let r, n;
            try {
                const s = o.contractmaintenanceauthority_toString(this.__wbg_ptr, I(t) ? 16777215 : t ? 1 : 0);
                return r = s[0], n = s[1], R(s[0], s[1]);
            } finally{
                o.__wbindgen_free(r, n, 1);
            }
        }
    };
    Symbol.dispose && (mr.prototype[Symbol.dispose] = mr.prototype.free);
    const Mc = typeof FinalizationRegistry > "u" ? {
        register: ()=>{},
        unregister: ()=>{}
    } : new FinalizationRegistry((e)=>o.__wbg_contractoperation_free(e >>> 0, 1));
    class Sr {
        static __wrap(t) {
            t = t >>> 0;
            const r = Object.create(Sr.prototype);
            return r.__wbg_ptr = t, Mc.register(r, r.__wbg_ptr, r), r;
        }
        __destroy_into_raw() {
            const t = this.__wbg_ptr;
            return this.__wbg_ptr = 0, Mc.unregister(this), t;
        }
        free() {
            const t = this.__destroy_into_raw();
            o.__wbg_contractoperation_free(t, 0);
        }
        static deserialize(t) {
            const r = o.contractoperation_deserialize(t);
            if (r[2]) throw l(r[1]);
            return Sr.__wrap(r[0]);
        }
        get verifierKey() {
            const t = o.contractoperation_verifier_key(this.__wbg_ptr);
            if (t[2]) throw l(t[1]);
            return l(t[0]);
        }
        set verifierKey(t) {
            const r = o.contractoperation_set_verifier_key(this.__wbg_ptr, t);
            if (r[1]) throw l(r[0]);
        }
        constructor(){
            const t = o.contractoperation_new();
            if (t[2]) throw l(t[1]);
            return this.__wbg_ptr = t[0] >>> 0, Mc.register(this, this.__wbg_ptr, this), this;
        }
        serialize() {
            const t = o.contractoperation_serialize(this.__wbg_ptr);
            if (t[2]) throw l(t[1]);
            return l(t[0]);
        }
        toString(t) {
            let r, n;
            try {
                const s = o.contractoperation_toString(this.__wbg_ptr, I(t) ? 16777215 : t ? 1 : 0);
                return r = s[0], n = s[1], R(s[0], s[1]);
            } finally{
                o.__wbindgen_free(r, n, 1);
            }
        }
    }
    Symbol.dispose && (Sr.prototype[Symbol.dispose] = Sr.prototype.free);
    const Nc = typeof FinalizationRegistry > "u" ? {
        register: ()=>{},
        unregister: ()=>{}
    } : new FinalizationRegistry((e)=>o.__wbg_contractoperationversion_free(e >>> 0, 1));
    fs = class {
        static __wrap(t) {
            t = t >>> 0;
            const r = Object.create(fs.prototype);
            return r.__wbg_ptr = t, Nc.register(r, r.__wbg_ptr, r), r;
        }
        __destroy_into_raw() {
            const t = this.__wbg_ptr;
            return this.__wbg_ptr = 0, Nc.unregister(this), t;
        }
        free() {
            const t = this.__destroy_into_raw();
            o.__wbg_contractoperationversion_free(t, 0);
        }
        constructor(t){
            const r = A(t, o.__wbindgen_malloc, o.__wbindgen_realloc), n = O, s = o.contractoperationversion_new(r, n);
            if (s[2]) throw l(s[1]);
            return this.__wbg_ptr = s[0] >>> 0, Nc.register(this, this.__wbg_ptr, this), this;
        }
        get version() {
            let t, r;
            try {
                const n = o.contractoperationversion_version(this.__wbg_ptr);
                return t = n[0], r = n[1], R(n[0], n[1]);
            } finally{
                o.__wbindgen_free(t, r, 1);
            }
        }
        toString(t) {
            let r, n;
            try {
                const s = o.contractoperationversion_toString(this.__wbg_ptr, I(t) ? 16777215 : t ? 1 : 0);
                return r = s[0], n = s[1], R(s[0], s[1]);
            } finally{
                o.__wbindgen_free(r, n, 1);
            }
        }
    };
    Symbol.dispose && (fs.prototype[Symbol.dispose] = fs.prototype.free);
    const Bc = typeof FinalizationRegistry > "u" ? {
        register: ()=>{},
        unregister: ()=>{}
    } : new FinalizationRegistry((e)=>o.__wbg_contractoperationversionedverifierkey_free(e >>> 0, 1));
    ds = class {
        static __wrap(t) {
            t = t >>> 0;
            const r = Object.create(ds.prototype);
            return r.__wbg_ptr = t, Bc.register(r, r.__wbg_ptr, r), r;
        }
        __destroy_into_raw() {
            const t = this.__wbg_ptr;
            return this.__wbg_ptr = 0, Bc.unregister(this), t;
        }
        free() {
            const t = this.__destroy_into_raw();
            o.__wbg_contractoperationversionedverifierkey_free(t, 0);
        }
        constructor(t, r){
            const n = A(t, o.__wbindgen_malloc, o.__wbindgen_realloc), s = O, i = o.contractoperationversionedverifierkey_new(n, s, r);
            if (i[2]) throw l(i[1]);
            return this.__wbg_ptr = i[0] >>> 0, Bc.register(this, this.__wbg_ptr, this), this;
        }
        get rawVk() {
            const t = o.contractoperationversionedverifierkey_raw_vk(this.__wbg_ptr);
            if (t[2]) throw l(t[1]);
            return l(t[0]);
        }
        get version() {
            let t, r;
            try {
                const n = o.contractoperationversionedverifierkey_version(this.__wbg_ptr);
                return t = n[0], r = n[1], R(n[0], n[1]);
            } finally{
                o.__wbindgen_free(t, r, 1);
            }
        }
        toString(t) {
            let r, n;
            try {
                const s = o.contractoperationversionedverifierkey_toString(this.__wbg_ptr, I(t) ? 16777215 : t ? 1 : 0);
                return r = s[0], n = s[1], R(s[0], s[1]);
            } finally{
                o.__wbindgen_free(r, n, 1);
            }
        }
    };
    Symbol.dispose && (ds.prototype[Symbol.dispose] = ds.prototype.free);
    const Uc = typeof FinalizationRegistry > "u" ? {
        register: ()=>{},
        unregister: ()=>{}
    } : new FinalizationRegistry((e)=>o.__wbg_contractstate_free(e >>> 0, 1));
    Fr = class {
        static __wrap(t) {
            t = t >>> 0;
            const r = Object.create(Fr.prototype);
            return r.__wbg_ptr = t, Uc.register(r, r.__wbg_ptr, r), r;
        }
        __destroy_into_raw() {
            const t = this.__wbg_ptr;
            return this.__wbg_ptr = 0, Uc.unregister(this), t;
        }
        free() {
            const t = this.__destroy_into_raw();
            o.__wbg_contractstate_free(t, 0);
        }
        operations() {
            const t = o.contractstate_operations(this.__wbg_ptr);
            var r = vt(t[0], t[1]).slice();
            return o.__wbindgen_free(t[0], t[1] * 4, 4), r;
        }
        static deserialize(t) {
            const r = o.contractstate_deserialize(t);
            if (r[2]) throw l(r[1]);
            return Fr.__wrap(r[0]);
        }
        set balance(t) {
            const r = o.contractstate_set_balance(this.__wbg_ptr, t);
            if (r[1]) throw l(r[0]);
        }
        setOperation(t, r) {
            v(r, Sr);
            const n = o.contractstate_setOperation(this.__wbg_ptr, t, r.__wbg_ptr);
            if (n[1]) throw l(n[0]);
        }
        get maintenanceAuthority() {
            const t = o.contractstate_maintenance_authority(this.__wbg_ptr);
            return mr.__wrap(t);
        }
        set maintenanceAuthority(t) {
            v(t, mr), o.contractstate_set_maintenance_authority(this.__wbg_ptr, t.__wbg_ptr);
        }
        constructor(){
            const t = o.contractstate_new();
            return this.__wbg_ptr = t >>> 0, Uc.register(this, this.__wbg_ptr, this), this;
        }
        get data() {
            const t = o.contractstate_data(this.__wbg_ptr);
            return yr.__wrap(t);
        }
        query(t, r) {
            v(r, nr);
            const n = o.contractstate_query(this.__wbg_ptr, t, r.__wbg_ptr);
            if (n[2]) throw l(n[1]);
            return l(n[0]);
        }
        get balance() {
            const t = o.contractstate_balance(this.__wbg_ptr);
            if (t[2]) throw l(t[1]);
            return l(t[0]);
        }
        set data(t) {
            v(t, yr), o.contractstate_set_data(this.__wbg_ptr, t.__wbg_ptr);
        }
        operation(t) {
            const r = o.contractstate_operation(this.__wbg_ptr, t);
            if (r[2]) throw l(r[1]);
            return r[0] === 0 ? void 0 : Sr.__wrap(r[0]);
        }
        serialize() {
            const t = o.contractstate_serialize(this.__wbg_ptr);
            if (t[2]) throw l(t[1]);
            return l(t[0]);
        }
        toString(t) {
            let r, n;
            try {
                const s = o.contractstate_toString(this.__wbg_ptr, I(t) ? 16777215 : t ? 1 : 0);
                return r = s[0], n = s[1], R(s[0], s[1]);
            } finally{
                o.__wbindgen_free(r, n, 1);
            }
        }
    };
    Symbol.dispose && (Fr.prototype[Symbol.dispose] = Fr.prototype.free);
    const jc = typeof FinalizationRegistry > "u" ? {
        register: ()=>{},
        unregister: ()=>{}
    } : new FinalizationRegistry((e)=>o.__wbg_costmodel_free(e >>> 0, 1));
    nr = class {
        static __wrap(t) {
            t = t >>> 0;
            const r = Object.create(nr.prototype);
            return r.__wbg_ptr = t, jc.register(r, r.__wbg_ptr, r), r;
        }
        __destroy_into_raw() {
            const t = this.__wbg_ptr;
            return this.__wbg_ptr = 0, jc.unregister(this), t;
        }
        free() {
            const t = this.__destroy_into_raw();
            o.__wbg_costmodel_free(t, 0);
        }
        static initialCostModel() {
            const t = o.costmodel_initialCostModel();
            return nr.__wrap(t);
        }
        constructor(){
            const t = o.costmodel_new();
            if (t[2]) throw l(t[1]);
            return this.__wbg_ptr = t[0] >>> 0, jc.register(this, this.__wbg_ptr, this), this;
        }
        toString(t) {
            let r, n;
            try {
                const s = o.costmodel_toString(this.__wbg_ptr, I(t) ? 16777215 : t ? 1 : 0);
                return r = s[0], n = s[1], R(s[0], s[1]);
            } finally{
                o.__wbindgen_free(r, n, 1);
            }
        }
    };
    Symbol.dispose && (nr.prototype[Symbol.dispose] = nr.prototype.free);
    const Lc = typeof FinalizationRegistry > "u" ? {
        register: ()=>{},
        unregister: ()=>{}
    } : new FinalizationRegistry((e)=>o.__wbg_dustactions_free(e >>> 0, 1));
    class hn {
        static __wrap(t) {
            t = t >>> 0;
            const r = Object.create(hn.prototype);
            return r.__wbg_ptr = t, Lc.register(r, r.__wbg_ptr, r), r;
        }
        __destroy_into_raw() {
            const t = this.__wbg_ptr;
            return this.__wbg_ptr = 0, Lc.unregister(this), t;
        }
        free() {
            const t = this.__destroy_into_raw();
            o.__wbg_dustactions_free(t, 0);
        }
        set spends(t) {
            const r = o.dustactions_set_spends(this.__wbg_ptr, t);
            if (r[1]) throw l(r[0]);
        }
        static deserialize(t, r, n) {
            const s = A(t, o.__wbindgen_malloc, o.__wbindgen_realloc), i = O, a = A(r, o.__wbindgen_malloc, o.__wbindgen_realloc), _ = O, f = o.dustactions_deserialize(s, i, a, _, n);
            if (f[2]) throw l(f[1]);
            return hn.__wrap(f[0]);
        }
        get registrations() {
            const t = o.dustactions_registrations(this.__wbg_ptr);
            if (t[3]) throw l(t[2]);
            var r = vt(t[0], t[1]).slice();
            return o.__wbindgen_free(t[0], t[1] * 4, 4), r;
        }
        set registrations(t) {
            const r = o.dustactions_set_registrations(this.__wbg_ptr, t);
            if (r[1]) throw l(r[0]);
        }
        constructor(t, r, n, s, i){
            const a = A(t, o.__wbindgen_malloc, o.__wbindgen_realloc), _ = O, f = A(r, o.__wbindgen_malloc, o.__wbindgen_realloc), g = O, h = o.dustactions_new(a, _, f, g, n, s, i);
            if (h[2]) throw l(h[1]);
            return this.__wbg_ptr = h[0] >>> 0, Lc.register(this, this.__wbg_ptr, this), this;
        }
        get ctime() {
            return o.dustactions_ctime(this.__wbg_ptr);
        }
        get spends() {
            const t = o.dustactions_spends(this.__wbg_ptr);
            if (t[3]) throw l(t[2]);
            var r = vt(t[0], t[1]).slice();
            return o.__wbindgen_free(t[0], t[1] * 4, 4), r;
        }
        serialize() {
            const t = o.dustactions_serialize(this.__wbg_ptr);
            if (t[2]) throw l(t[1]);
            return l(t[0]);
        }
        set ctime(t) {
            const r = o.dustactions_set_ctime(this.__wbg_ptr, t);
            if (r[1]) throw l(r[0]);
        }
        toString(t) {
            let r, n;
            try {
                const s = o.dustactions_toString(this.__wbg_ptr, I(t) ? 16777215 : t ? 1 : 0);
                return r = s[0], n = s[1], R(s[0], s[1]);
            } finally{
                o.__wbindgen_free(r, n, 1);
            }
        }
    }
    Symbol.dispose && (hn.prototype[Symbol.dispose] = hn.prototype.free);
    const Kc = typeof FinalizationRegistry > "u" ? {
        register: ()=>{},
        unregister: ()=>{}
    } : new FinalizationRegistry((e)=>o.__wbg_dustgenerationstate_free(e >>> 0, 1));
    class wn {
        static __wrap(t) {
            t = t >>> 0;
            const r = Object.create(wn.prototype);
            return r.__wbg_ptr = t, Kc.register(r, r.__wbg_ptr, r), r;
        }
        __destroy_into_raw() {
            const t = this.__wbg_ptr;
            return this.__wbg_ptr = 0, Kc.unregister(this), t;
        }
        free() {
            const t = this.__destroy_into_raw();
            o.__wbg_dustgenerationstate_free(t, 0);
        }
        static deserialize(t) {
            const r = o.dustgenerationstate_deserialize(t);
            if (r[2]) throw l(r[1]);
            return wn.__wrap(r[0]);
        }
        constructor(){
            const t = o.dustgenerationstate_new();
            if (t[2]) throw l(t[1]);
            return this.__wbg_ptr = t[0] >>> 0, Kc.register(this, this.__wbg_ptr, this), this;
        }
        serialize() {
            const t = o.dustgenerationstate_serialize(this.__wbg_ptr);
            if (t[2]) throw l(t[1]);
            return l(t[0]);
        }
        toString(t) {
            let r, n;
            try {
                const s = o.dustgenerationstate_toString(this.__wbg_ptr, I(t) ? 16777215 : t ? 1 : 0);
                return r = s[0], n = s[1], R(s[0], s[1]);
            } finally{
                o.__wbindgen_free(r, n, 1);
            }
        }
    }
    Symbol.dispose && (wn.prototype[Symbol.dispose] = wn.prototype.free);
    const Dc = typeof FinalizationRegistry > "u" ? {
        register: ()=>{},
        unregister: ()=>{}
    } : new FinalizationRegistry((e)=>o.__wbg_dustlocalstate_free(e >>> 0, 1));
    class $t {
        static __wrap(t) {
            t = t >>> 0;
            const r = Object.create($t.prototype);
            return r.__wbg_ptr = t, Dc.register(r, r.__wbg_ptr, r), r;
        }
        __destroy_into_raw() {
            const t = this.__wbg_ptr;
            return this.__wbg_ptr = 0, Dc.unregister(this), t;
        }
        free() {
            const t = this.__destroy_into_raw();
            o.__wbg_dustlocalstate_free(t, 0);
        }
        static deserialize(t) {
            const r = o.dustlocalstate_deserialize(t);
            if (r[2]) throw l(r[1]);
            return $t.__wrap(r[0]);
        }
        removeUtxo(t) {
            const r = o.dustlocalstate_removeUtxo(this.__wbg_ptr, t);
            if (r[2]) throw l(r[1]);
            return $t.__wrap(r[0]);
        }
        processTtls(t) {
            const r = o.dustlocalstate_processTtls(this.__wbg_ptr, t);
            if (r[2]) throw l(r[1]);
            return $t.__wrap(r[0]);
        }
        replayEvents(t, r) {
            v(t, Ne);
            const n = we(r, o.__wbindgen_malloc), s = O, i = o.dustlocalstate_replayEvents(this.__wbg_ptr, t.__wbg_ptr, n, s);
            if (i[2]) throw l(i[1]);
            return $t.__wrap(i[0]);
        }
        successorUtxo(t, r, n, s, i) {
            v(i, Ne);
            const a = o.dustlocalstate_successorUtxo(this.__wbg_ptr, t, r, n, s, i.__wbg_ptr);
            if (a[2]) throw l(a[1]);
            return l(a[0]);
        }
        walletBalance(t) {
            return o.dustlocalstate_walletBalance(this.__wbg_ptr, t);
        }
        generationInfo(t) {
            const r = o.dustlocalstate_generationInfo(this.__wbg_ptr, t);
            if (r[2]) throw l(r[1]);
            return l(r[0]);
        }
        insertCommitment(t, r, n) {
            const s = o.dustlocalstate_insertCommitment(this.__wbg_ptr, t, r, n);
            if (s[2]) throw l(s[1]);
            return $t.__wrap(s[0]);
        }
        removeCommitment(t) {
            const r = o.dustlocalstate_removeCommitment(this.__wbg_ptr, t);
            if (r[2]) throw l(r[1]);
            return $t.__wrap(r[0]);
        }
        replayRawEvents(t, r) {
            v(t, Ne);
            const n = Ep(r, o.__wbindgen_malloc), s = O, i = o.dustlocalstate_replayRawEvents(this.__wbg_ptr, t.__wbg_ptr, n, s);
            if (i[2]) throw l(i[1]);
            return gs.__wrap(i[0]);
        }
        commitmentTreeRoot() {
            const t = o.dustlocalstate_commitmentTreeRoot(this.__wbg_ptr);
            if (t[2]) throw l(t[1]);
            return l(t[0]);
        }
        generatingTreeRoot() {
            const t = o.dustlocalstate_generatingTreeRoot(this.__wbg_ptr);
            if (t[2]) throw l(t[1]);
            return l(t[0]);
        }
        findUtxoByNullifier(t) {
            const r = o.dustlocalstate_findUtxoByNullifier(this.__wbg_ptr, t);
            if (r[2]) throw l(r[1]);
            return l(r[0]);
        }
        insertGenerationInfo(t, r, n) {
            var s = I(n) ? 0 : A(n, o.__wbindgen_malloc, o.__wbindgen_realloc), i = O;
            const a = o.dustlocalstate_insertGenerationInfo(this.__wbg_ptr, t, r, s, i);
            if (a[2]) throw l(a[1]);
            return $t.__wrap(a[0]);
        }
        removeGenerationInfo(t, r) {
            const n = o.dustlocalstate_removeGenerationInfo(this.__wbg_ptr, t, r);
            if (n[2]) throw l(n[1]);
            return $t.__wrap(n[0]);
        }
        collapseCommitmentTree(t, r) {
            const n = o.dustlocalstate_collapseCommitmentTree(this.__wbg_ptr, t, r);
            if (n[2]) throw l(n[1]);
            return $t.__wrap(n[0]);
        }
        collapseGenerationTree(t, r) {
            const n = o.dustlocalstate_collapseGenerationTree(this.__wbg_ptr, t, r);
            if (n[2]) throw l(n[1]);
            return $t.__wrap(n[0]);
        }
        replayEventsWithChanges(t, r) {
            v(t, Ne);
            const n = we(r, o.__wbindgen_malloc), s = O, i = o.dustlocalstate_replayEventsWithChanges(this.__wbg_ptr, t.__wbg_ptr, n, s);
            if (i[2]) throw l(i[1]);
            return gs.__wrap(i[0]);
        }
        applyCommitmentCollapsedUpdate(t) {
            v(t, ur);
            const r = o.dustlocalstate_applyCommitmentCollapsedUpdate(this.__wbg_ptr, t.__wbg_ptr);
            if (r[2]) throw l(r[1]);
            return $t.__wrap(r[0]);
        }
        applyGenerationCollapsedUpdate(t) {
            v(t, ur);
            const r = o.dustlocalstate_applyGenerationCollapsedUpdate(this.__wbg_ptr, t.__wbg_ptr);
            if (r[2]) throw l(r[1]);
            return $t.__wrap(r[0]);
        }
        constructor(t){
            v(t, Br);
            const r = o.dustlocalstate_new(t.__wbg_ptr);
            return this.__wbg_ptr = r >>> 0, Dc.register(this, this.__wbg_ptr, this), this;
        }
        spend(t, r, n, s) {
            v(t, Ne);
            const i = o.dustlocalstate_spend(this.__wbg_ptr, t.__wbg_ptr, r, n, s);
            if (i[2]) throw l(i[1]);
            return l(i[0]);
        }
        get utxos() {
            const t = o.dustlocalstate_utxos(this.__wbg_ptr);
            if (t[3]) throw l(t[2]);
            var r = vt(t[0], t[1]).slice();
            return o.__wbindgen_free(t[0], t[1] * 4, 4), r;
        }
        get params() {
            const t = o.dustlocalstate_params(this.__wbg_ptr);
            if (t[2]) throw l(t[1]);
            return Br.__wrap(t[0]);
        }
        addUtxo(t, r, n) {
            const s = o.dustlocalstate_addUtxo(this.__wbg_ptr, t, r, I(n) ? 0 : pt(n));
            if (s[2]) throw l(s[1]);
            return $t.__wrap(s[0]);
        }
        serialize() {
            const t = o.dustlocalstate_serialize(this.__wbg_ptr);
            if (t[2]) throw l(t[1]);
            return l(t[0]);
        }
        get syncTime() {
            return o.dustlocalstate_syncTime(this.__wbg_ptr);
        }
        toString(t) {
            let r, n;
            try {
                const s = o.dustlocalstate_toString(this.__wbg_ptr, I(t) ? 16777215 : t ? 1 : 0);
                return r = s[0], n = s[1], R(s[0], s[1]);
            } finally{
                o.__wbindgen_free(r, n, 1);
            }
        }
    }
    Symbol.dispose && ($t.prototype[Symbol.dispose] = $t.prototype.free);
    const Ed = typeof FinalizationRegistry > "u" ? {
        register: ()=>{},
        unregister: ()=>{}
    } : new FinalizationRegistry((e)=>o.__wbg_dustlocalstatewithchanges_free(e >>> 0, 1));
    class gs {
        static __wrap(t) {
            t = t >>> 0;
            const r = Object.create(gs.prototype);
            return r.__wbg_ptr = t, Ed.register(r, r.__wbg_ptr, r), r;
        }
        __destroy_into_raw() {
            const t = this.__wbg_ptr;
            return this.__wbg_ptr = 0, Ed.unregister(this), t;
        }
        free() {
            const t = this.__destroy_into_raw();
            o.__wbg_dustlocalstatewithchanges_free(t, 0);
        }
        get state() {
            const t = o.dustlocalstatewithchanges_state(this.__wbg_ptr);
            return $t.__wrap(t);
        }
        get changes() {
            const t = o.dustlocalstatewithchanges_changes(this.__wbg_ptr);
            var r = vt(t[0], t[1]).slice();
            return o.__wbindgen_free(t[0], t[1] * 4, 4), r;
        }
    }
    Symbol.dispose && (gs.prototype[Symbol.dispose] = gs.prototype.free);
    const qc = typeof FinalizationRegistry > "u" ? {
        register: ()=>{},
        unregister: ()=>{}
    } : new FinalizationRegistry((e)=>o.__wbg_dustparameters_free(e >>> 0, 1));
    class Br {
        static __wrap(t) {
            t = t >>> 0;
            const r = Object.create(Br.prototype);
            return r.__wbg_ptr = t, qc.register(r, r.__wbg_ptr, r), r;
        }
        __destroy_into_raw() {
            const t = this.__wbg_ptr;
            return this.__wbg_ptr = 0, qc.unregister(this), t;
        }
        free() {
            const t = this.__destroy_into_raw();
            o.__wbg_dustparameters_free(t, 0);
        }
        static deserialize(t) {
            const r = o.dustparameters_deserialize(t);
            if (r[2]) throw l(r[1]);
            return Br.__wrap(r[0]);
        }
        get nightDustRatio() {
            return o.dustparameters_nightDustRatio(this.__wbg_ptr);
        }
        get timeToCapSeconds() {
            return o.dustparameters_timeToCapSeconds(this.__wbg_ptr);
        }
        set nightDustRatio(t) {
            const r = o.dustparameters_set_nightDustRatio(this.__wbg_ptr, t);
            if (r[1]) throw l(r[0]);
        }
        get generationDecayRate() {
            return o.dustparameters_generationDecayRate(this.__wbg_ptr);
        }
        get dustGracePeriodSeconds() {
            return o.dustparameters_dustGracePeriodSeconds(this.__wbg_ptr);
        }
        set generationDecayRate(t) {
            const r = o.dustparameters_set_generationDecayRate(this.__wbg_ptr, t);
            if (r[1]) throw l(r[0]);
        }
        set dustGracePeriodSeconds(t) {
            const r = o.dustparameters_set_dustGracePeriodSeconds(this.__wbg_ptr, t);
            if (r[1]) throw l(r[0]);
        }
        constructor(t, r, n){
            const s = o.dustparameters_new(t, r, n);
            if (s[2]) throw l(s[1]);
            return this.__wbg_ptr = s[0] >>> 0, qc.register(this, this.__wbg_ptr, this), this;
        }
        serialize() {
            const t = o.dustparameters_serialize(this.__wbg_ptr);
            if (t[2]) throw l(t[1]);
            return l(t[0]);
        }
        toString(t) {
            let r, n;
            try {
                const s = o.dustparameters_toString(this.__wbg_ptr, I(t) ? 16777215 : t ? 1 : 0);
                return r = s[0], n = s[1], R(s[0], s[1]);
            } finally{
                o.__wbindgen_free(r, n, 1);
            }
        }
    }
    Symbol.dispose && (Br.prototype[Symbol.dispose] = Br.prototype.free);
    const Vc = typeof FinalizationRegistry > "u" ? {
        register: ()=>{},
        unregister: ()=>{}
    } : new FinalizationRegistry((e)=>o.__wbg_dustregistration_free(e >>> 0, 1));
    class bn {
        static __wrap(t) {
            t = t >>> 0;
            const r = Object.create(bn.prototype);
            return r.__wbg_ptr = t, Vc.register(r, r.__wbg_ptr, r), r;
        }
        __destroy_into_raw() {
            const t = this.__wbg_ptr;
            return this.__wbg_ptr = 0, Vc.unregister(this), t;
        }
        free() {
            const t = this.__destroy_into_raw();
            o.__wbg_dustregistration_free(t, 0);
        }
        static deserialize(t, r) {
            const n = A(t, o.__wbindgen_malloc, o.__wbindgen_realloc), s = O, i = o.dustregistration_deserialize(n, s, r);
            if (i[2]) throw l(i[1]);
            return bn.__wrap(i[0]);
        }
        get dustAddress() {
            return o.dustregistration_dustAddress(this.__wbg_ptr);
        }
        set nightKey(t) {
            const r = A(t, o.__wbindgen_malloc, o.__wbindgen_realloc), n = O, s = o.dustregistration_set_nightKey(this.__wbg_ptr, r, n);
            if (s[1]) throw l(s[0]);
        }
        set signature(t) {
            const r = o.dustregistration_set_signature(this.__wbg_ptr, t);
            if (r[1]) throw l(r[0]);
        }
        set dustAddress(t) {
            const r = o.dustregistration_set_dustAddress(this.__wbg_ptr, I(t) ? 0 : pt(t));
            if (r[1]) throw l(r[0]);
        }
        get allowFeePayment() {
            return o.dustregistration_allowFeePayment(this.__wbg_ptr);
        }
        set allowFeePayment(t) {
            const r = o.dustregistration_set_allowFeePayment(this.__wbg_ptr, t);
            if (r[1]) throw l(r[0]);
        }
        constructor(t, r, n, s, i){
            const a = A(t, o.__wbindgen_malloc, o.__wbindgen_realloc), _ = O, f = A(r, o.__wbindgen_malloc, o.__wbindgen_realloc), g = O, h = o.dustregistration_new(a, _, f, g, I(n) ? 0 : pt(n), s, i);
            if (h[2]) throw l(h[1]);
            return this.__wbg_ptr = h[0] >>> 0, Vc.register(this, this.__wbg_ptr, this), this;
        }
        get nightKey() {
            let t, r;
            try {
                const i = o.dustregistration_nightKey(this.__wbg_ptr);
                var n = i[0], s = i[1];
                if (i[3]) throw n = 0, s = 0, l(i[2]);
                return t = n, r = s, R(n, s);
            } finally{
                o.__wbindgen_free(t, r, 1);
            }
        }
        serialize() {
            const t = o.dustregistration_serialize(this.__wbg_ptr);
            if (t[2]) throw l(t[1]);
            return l(t[0]);
        }
        get signature() {
            const t = o.dustregistration_signature(this.__wbg_ptr);
            if (t[2]) throw l(t[1]);
            return l(t[0]);
        }
        toString(t) {
            let r, n;
            try {
                const s = o.dustregistration_toString(this.__wbg_ptr, I(t) ? 16777215 : t ? 1 : 0);
                return r = s[0], n = s[1], R(s[0], s[1]);
            } finally{
                o.__wbindgen_free(r, n, 1);
            }
        }
    }
    Symbol.dispose && (bn.prototype[Symbol.dispose] = bn.prototype.free);
    const Hc = typeof FinalizationRegistry > "u" ? {
        register: ()=>{},
        unregister: ()=>{}
    } : new FinalizationRegistry((e)=>o.__wbg_dustsecretkey_free(e >>> 0, 1));
    class Ne {
        static __wrap(t) {
            t = t >>> 0;
            const r = Object.create(Ne.prototype);
            return r.__wbg_ptr = t, Hc.register(r, r.__wbg_ptr, r), r;
        }
        __destroy_into_raw() {
            const t = this.__wbg_ptr;
            return this.__wbg_ptr = 0, Hc.unregister(this), t;
        }
        free() {
            const t = this.__destroy_into_raw();
            o.__wbg_dustsecretkey_free(t, 0);
        }
        get publicKey() {
            const t = o.dustsecretkey_publicKey(this.__wbg_ptr);
            if (t[2]) throw l(t[1]);
            return l(t[0]);
        }
        static fromBigint(t) {
            const r = o.dustsecretkey_fromBigint(t);
            if (r[2]) throw l(r[1]);
            return Ne.__wrap(r[0]);
        }
        constructor(){
            const t = o.dustsecretkey_new();
            if (t[2]) throw l(t[1]);
            return this.__wbg_ptr = t[0] >>> 0, Hc.register(this, this.__wbg_ptr, this), this;
        }
        clear() {
            o.dustsecretkey_clear(this.__wbg_ptr);
        }
        static fromSeed(t) {
            const r = o.dustsecretkey_fromSeed(t);
            if (r[2]) throw l(r[1]);
            return Ne.__wrap(r[0]);
        }
    }
    Symbol.dispose && (Ne.prototype[Symbol.dispose] = Ne.prototype.free);
    const Jc = typeof FinalizationRegistry > "u" ? {
        register: ()=>{},
        unregister: ()=>{}
    } : new FinalizationRegistry((e)=>o.__wbg_dustspend_free(e >>> 0, 1));
    class ps {
        static __wrap(t) {
            t = t >>> 0;
            const r = Object.create(ps.prototype);
            return r.__wbg_ptr = t, Jc.register(r, r.__wbg_ptr, r), r;
        }
        __destroy_into_raw() {
            const t = this.__wbg_ptr;
            return this.__wbg_ptr = 0, Jc.unregister(this), t;
        }
        free() {
            const t = this.__destroy_into_raw();
            o.__wbg_dustspend_free(t, 0);
        }
        get oldNullifier() {
            return o.dustspend_oldNullifier(this.__wbg_ptr);
        }
        get newCommitment() {
            return o.dustspend_newCommitment(this.__wbg_ptr);
        }
        constructor(){
            const t = o.dustspend_new();
            if (t[2]) throw l(t[1]);
            return this.__wbg_ptr = t[0] >>> 0, Jc.register(this, this.__wbg_ptr, this), this;
        }
        get proof() {
            const t = o.dustspend_proof(this.__wbg_ptr);
            if (t[2]) throw l(t[1]);
            return l(t[0]);
        }
        get vFee() {
            return o.dustspend_vFee(this.__wbg_ptr);
        }
        toString(t) {
            let r, n;
            try {
                const s = o.dustspend_toString(this.__wbg_ptr, I(t) ? 16777215 : t ? 1 : 0);
                return r = s[0], n = s[1], R(s[0], s[1]);
            } finally{
                o.__wbindgen_free(r, n, 1);
            }
        }
    }
    Symbol.dispose && (ps.prototype[Symbol.dispose] = ps.prototype.free);
    const Wc = typeof FinalizationRegistry > "u" ? {
        register: ()=>{},
        unregister: ()=>{}
    } : new FinalizationRegistry((e)=>o.__wbg_duststate_free(e >>> 0, 1));
    class hs {
        static __wrap(t) {
            t = t >>> 0;
            const r = Object.create(hs.prototype);
            return r.__wbg_ptr = t, Wc.register(r, r.__wbg_ptr, r), r;
        }
        __destroy_into_raw() {
            const t = this.__wbg_ptr;
            return this.__wbg_ptr = 0, Wc.unregister(this), t;
        }
        free() {
            const t = this.__destroy_into_raw();
            o.__wbg_duststate_free(t, 0);
        }
        get generation() {
            const t = o.duststate_generation(this.__wbg_ptr);
            if (t[2]) throw l(t[1]);
            return wn.__wrap(t[0]);
        }
        static deserialize(t) {
            const r = o.duststate_deserialize(t);
            if (r[2]) throw l(r[1]);
            return hs.__wrap(r[0]);
        }
        constructor(){
            const t = o.duststate_new();
            if (t[2]) throw l(t[1]);
            return this.__wbg_ptr = t[0] >>> 0, Wc.register(this, this.__wbg_ptr, this), this;
        }
        get utxo() {
            const t = o.duststate_utxo(this.__wbg_ptr);
            if (t[2]) throw l(t[1]);
            return yn.__wrap(t[0]);
        }
        serialize() {
            const t = o.duststate_serialize(this.__wbg_ptr);
            if (t[2]) throw l(t[1]);
            return l(t[0]);
        }
        toString(t) {
            let r, n;
            try {
                const s = o.duststate_toString(this.__wbg_ptr, I(t) ? 16777215 : t ? 1 : 0);
                return r = s[0], n = s[1], R(s[0], s[1]);
            } finally{
                o.__wbindgen_free(r, n, 1);
            }
        }
    }
    Symbol.dispose && (hs.prototype[Symbol.dispose] = hs.prototype.free);
    const Id = typeof FinalizationRegistry > "u" ? {
        register: ()=>{},
        unregister: ()=>{}
    } : new FinalizationRegistry((e)=>o.__wbg_duststatechanges_free(e >>> 0, 1));
    class $i {
        static __wrap(t) {
            t = t >>> 0;
            const r = Object.create($i.prototype);
            return r.__wbg_ptr = t, Id.register(r, r.__wbg_ptr, r), r;
        }
        __destroy_into_raw() {
            const t = this.__wbg_ptr;
            return this.__wbg_ptr = 0, Id.unregister(this), t;
        }
        free() {
            const t = this.__destroy_into_raw();
            o.__wbg_duststatechanges_free(t, 0);
        }
        get spentUtxos() {
            const t = o.duststatechanges_spentUtxos(this.__wbg_ptr);
            if (t[2]) throw l(t[1]);
            return l(t[0]);
        }
        get receivedUtxos() {
            const t = o.duststatechanges_receivedUtxos(this.__wbg_ptr);
            if (t[2]) throw l(t[1]);
            return l(t[0]);
        }
        get source() {
            let t, r;
            try {
                const i = o.duststatechanges_source(this.__wbg_ptr);
                var n = i[0], s = i[1];
                if (i[3]) throw n = 0, s = 0, l(i[2]);
                return t = n, r = s, R(n, s);
            } finally{
                o.__wbindgen_free(t, r, 1);
            }
        }
    }
    Symbol.dispose && ($i.prototype[Symbol.dispose] = $i.prototype.free);
    const Gc = typeof FinalizationRegistry > "u" ? {
        register: ()=>{},
        unregister: ()=>{}
    } : new FinalizationRegistry((e)=>o.__wbg_duststatemerkletreecollapsedupdate_free(e >>> 0, 1));
    class ur {
        static __wrap(t) {
            t = t >>> 0;
            const r = Object.create(ur.prototype);
            return r.__wbg_ptr = t, Gc.register(r, r.__wbg_ptr, r), r;
        }
        __destroy_into_raw() {
            const t = this.__wbg_ptr;
            return this.__wbg_ptr = 0, Gc.unregister(this), t;
        }
        free() {
            const t = this.__destroy_into_raw();
            o.__wbg_duststatemerkletreecollapsedupdate_free(t, 0);
        }
        static deserialize(t) {
            const r = o.duststatemerkletreecollapsedupdate_deserialize(t);
            if (r[2]) throw l(r[1]);
            return ur.__wrap(r[0]);
        }
        static newFromCommitmentTree(t, r, n) {
            v(t, yn);
            const s = o.duststatemerkletreecollapsedupdate_newFromCommitmentTree(t.__wbg_ptr, r, n);
            if (s[2]) throw l(s[1]);
            return ur.__wrap(s[0]);
        }
        static newFromGenerationTree(t, r, n) {
            v(t, wn);
            const s = o.duststatemerkletreecollapsedupdate_newFromGenerationTree(t.__wbg_ptr, r, n);
            if (s[2]) throw l(s[1]);
            return ur.__wrap(s[0]);
        }
        constructor(){
            const t = o.duststatemerkletreecollapsedupdate_new();
            if (t[2]) throw l(t[1]);
            return this.__wbg_ptr = t[0] >>> 0, Gc.register(this, this.__wbg_ptr, this), this;
        }
        serialize() {
            const t = o.duststatemerkletreecollapsedupdate_serialize(this.__wbg_ptr);
            if (t[2]) throw l(t[1]);
            return l(t[0]);
        }
        toString(t) {
            let r, n;
            try {
                const s = o.duststatemerkletreecollapsedupdate_toString(this.__wbg_ptr, I(t) ? 16777215 : t ? 1 : 0);
                return r = s[0], n = s[1], R(s[0], s[1]);
            } finally{
                o.__wbindgen_free(r, n, 1);
            }
        }
    }
    Symbol.dispose && (ur.prototype[Symbol.dispose] = ur.prototype.free);
    const Yc = typeof FinalizationRegistry > "u" ? {
        register: ()=>{},
        unregister: ()=>{}
    } : new FinalizationRegistry((e)=>o.__wbg_dustutxostate_free(e >>> 0, 1));
    class yn {
        static __wrap(t) {
            t = t >>> 0;
            const r = Object.create(yn.prototype);
            return r.__wbg_ptr = t, Yc.register(r, r.__wbg_ptr, r), r;
        }
        __destroy_into_raw() {
            const t = this.__wbg_ptr;
            return this.__wbg_ptr = 0, Yc.unregister(this), t;
        }
        free() {
            const t = this.__destroy_into_raw();
            o.__wbg_dustutxostate_free(t, 0);
        }
        static deserialize(t) {
            const r = o.dustutxostate_deserialize(t);
            if (r[2]) throw l(r[1]);
            return yn.__wrap(r[0]);
        }
        constructor(){
            const t = o.dustutxostate_new();
            if (t[2]) throw l(t[1]);
            return this.__wbg_ptr = t[0] >>> 0, Yc.register(this, this.__wbg_ptr, this), this;
        }
        serialize() {
            const t = o.dustutxostate_serialize(this.__wbg_ptr);
            if (t[2]) throw l(t[1]);
            return l(t[0]);
        }
        toString(t) {
            let r, n;
            try {
                const s = o.dustutxostate_toString(this.__wbg_ptr, I(t) ? 16777215 : t ? 1 : 0);
                return r = s[0], n = s[1], R(s[0], s[1]);
            } finally{
                o.__wbindgen_free(r, n, 1);
            }
        }
    }
    Symbol.dispose && (yn.prototype[Symbol.dispose] = yn.prototype.free);
    const Xc = typeof FinalizationRegistry > "u" ? {
        register: ()=>{},
        unregister: ()=>{}
    } : new FinalizationRegistry((e)=>o.__wbg_encryptionsecretkey_free(e >>> 0, 1));
    class rn {
        static __wrap(t) {
            t = t >>> 0;
            const r = Object.create(rn.prototype);
            return r.__wbg_ptr = t, Xc.register(r, r.__wbg_ptr, r), r;
        }
        __destroy_into_raw() {
            const t = this.__wbg_ptr;
            return this.__wbg_ptr = 0, Xc.unregister(this), t;
        }
        free() {
            const t = this.__destroy_into_raw();
            o.__wbg_encryptionsecretkey_free(t, 0);
        }
        public_key() {
            let t, r;
            try {
                const i = o.encryptionsecretkey_public_key(this.__wbg_ptr);
                var n = i[0], s = i[1];
                if (i[3]) throw n = 0, s = 0, l(i[2]);
                return t = n, r = s, R(n, s);
            } finally{
                o.__wbindgen_free(t, r, 1);
            }
        }
        static deserialize(t) {
            const r = o.encryptionsecretkey_deserialize(t);
            if (r[2]) throw l(r[1]);
            return rn.__wrap(r[0]);
        }
        yesIKnowTheSecurityImplicationsOfThis_taggedSerialize() {
            const t = o.encryptionsecretkey_yesIKnowTheSecurityImplicationsOfThis_taggedSerialize(this.__wbg_ptr);
            if (t[2]) throw l(t[1]);
            return l(t[0]);
        }
        static taggedDeserialize(t) {
            const r = o.encryptionsecretkey_taggedDeserialize(t);
            if (r[2]) throw l(r[1]);
            return rn.__wrap(r[0]);
        }
        constructor(){
            const t = o.encryptionsecretkey_new();
            if (t[2]) throw l(t[1]);
            return this.__wbg_ptr = t[0] >>> 0, Xc.register(this, this.__wbg_ptr, this), this;
        }
        test(t) {
            v(t, Kt);
            const r = o.encryptionsecretkey_test(this.__wbg_ptr, t.__wbg_ptr);
            if (r[2]) throw l(r[1]);
            return r[0] !== 0;
        }
        clear() {
            o.encryptionsecretkey_clear(this.__wbg_ptr);
        }
        yesIKnowTheSecurityImplicationsOfThis_serialize() {
            const t = o.encryptionsecretkey_yesIKnowTheSecurityImplicationsOfThis_serialize(this.__wbg_ptr);
            if (t[2]) throw l(t[1]);
            return l(t[0]);
        }
    }
    Symbol.dispose && (rn.prototype[Symbol.dispose] = rn.prototype.free);
    const Qc = typeof FinalizationRegistry > "u" ? {
        register: ()=>{},
        unregister: ()=>{}
    } : new FinalizationRegistry((e)=>o.__wbg_event_free(e >>> 0, 1));
    class zr {
        static __wrap(t) {
            t = t >>> 0;
            const r = Object.create(zr.prototype);
            return r.__wbg_ptr = t, Qc.register(r, r.__wbg_ptr, r), r;
        }
        static __unwrap(t) {
            return t instanceof zr ? t.__destroy_into_raw() : 0;
        }
        __destroy_into_raw() {
            const t = this.__wbg_ptr;
            return this.__wbg_ptr = 0, Qc.unregister(this), t;
        }
        free() {
            const t = this.__destroy_into_raw();
            o.__wbg_event_free(t, 0);
        }
        static deserialize(t) {
            const r = o.event_deserialize(t);
            if (r[2]) throw l(r[1]);
            return zr.__wrap(r[0]);
        }
        constructor(){
            const t = o.event_new();
            if (t[2]) throw l(t[1]);
            return this.__wbg_ptr = t[0] >>> 0, Qc.register(this, this.__wbg_ptr, this), this;
        }
        get source() {
            const t = o.event_source(this.__wbg_ptr);
            if (t[2]) throw l(t[1]);
            return l(t[0]);
        }
        get content() {
            const t = o.event_content(this.__wbg_ptr);
            if (t[2]) throw l(t[1]);
            return l(t[0]);
        }
        serialize() {
            const t = o.event_serialize(this.__wbg_ptr);
            if (t[2]) throw l(t[1]);
            return l(t[0]);
        }
        toString(t) {
            let r, n;
            try {
                const s = o.event_toString(this.__wbg_ptr, I(t) ? 16777215 : t ? 1 : 0);
                return r = s[0], n = s[1], R(s[0], s[1]);
            } finally{
                o.__wbindgen_free(r, n, 1);
            }
        }
    }
    Symbol.dispose && (zr.prototype[Symbol.dispose] = zr.prototype.free);
    const Zc = typeof FinalizationRegistry > "u" ? {
        register: ()=>{},
        unregister: ()=>{}
    } : new FinalizationRegistry((e)=>o.__wbg_intent_free(e >>> 0, 1));
    le = class {
        static __wrap(t) {
            t = t >>> 0;
            const r = Object.create(le.prototype);
            return r.__wbg_ptr = t, Zc.register(r, r.__wbg_ptr, r), r;
        }
        __destroy_into_raw() {
            const t = this.__wbg_ptr;
            return this.__wbg_ptr = 0, Zc.unregister(this), t;
        }
        free() {
            const t = this.__destroy_into_raw();
            o.__wbg_intent_free(t, 0);
        }
        addDeploy(t) {
            v(t, pn);
            const r = o.intent_addDeploy(this.__wbg_ptr, t.__wbg_ptr);
            if (r[2]) throw l(r[1]);
            return le.__wrap(r[0]);
        }
        static deserialize(t, r, n, s) {
            const i = A(t, o.__wbindgen_malloc, o.__wbindgen_realloc), a = O, _ = A(r, o.__wbindgen_malloc, o.__wbindgen_realloc), f = O, g = A(n, o.__wbindgen_malloc, o.__wbindgen_realloc), h = O, b = o.intent_deserialize(i, a, _, f, g, h, s);
            if (b[2]) throw l(b[1]);
            return le.__wrap(b[0]);
        }
        intentHash(t) {
            let r, n;
            try {
                const a = o.intent_intentHash(this.__wbg_ptr, t);
                var s = a[0], i = a[1];
                if (a[3]) throw s = 0, i = 0, l(a[2]);
                return r = s, n = i, R(s, i);
            } finally{
                o.__wbindgen_free(r, n, 1);
            }
        }
        set actions(t) {
            const r = we(t, o.__wbindgen_malloc), n = O, s = o.intent_set_actions(this.__wbg_ptr, r, n);
            if (s[1]) throw l(s[0]);
        }
        get dustActions() {
            const t = o.intent_dustActions(this.__wbg_ptr);
            if (t[2]) throw l(t[1]);
            return l(t[0]);
        }
        eraseProofs() {
            const t = o.intent_eraseProofs(this.__wbg_ptr);
            if (t[2]) throw l(t[1]);
            return le.__wrap(t[0]);
        }
        signatureData(t) {
            return o.intent_signatureData(this.__wbg_ptr, t);
        }
        eraseSignatures() {
            const t = o.intent_eraseSignatures(this.__wbg_ptr);
            if (t[2]) throw l(t[1]);
            return le.__wrap(t[0]);
        }
        set dustActions(t) {
            const r = o.intent_set_dustActions(this.__wbg_ptr, t);
            if (r[1]) throw l(r[0]);
        }
        has_fallible_offers() {
            return o.intent_has_fallible_offers(this.__wbg_ptr) !== 0;
        }
        addMaintenanceUpdate(t) {
            v(t, Ur);
            const r = o.intent_addMaintenanceUpdate(this.__wbg_ptr, t.__wbg_ptr);
            if (r[2]) throw l(r[1]);
            return le.__wrap(r[0]);
        }
        has_contract_deployments() {
            return o.intent_has_contract_deployments(this.__wbg_ptr) !== 0;
        }
        has_fallible_transcripts() {
            return o.intent_has_fallible_transcripts(this.__wbg_ptr) !== 0;
        }
        get fallibleUnshieldedOffer() {
            const t = o.intent_fallibleUnshieldedOffer(this.__wbg_ptr);
            return t === 0 ? void 0 : er.__wrap(t);
        }
        get guaranteedUnshieldedOffer() {
            const t = o.intent_guaranteedUnshieldedOffer(this.__wbg_ptr);
            return t === 0 ? void 0 : er.__wrap(t);
        }
        set fallibleUnshieldedOffer(t) {
            const r = o.intent_set_fallibleUnshieldedOffer(this.__wbg_ptr, t);
            if (r[1]) throw l(r[0]);
        }
        set guaranteedUnshieldedOffer(t) {
            const r = o.intent_set_guaranteedUnshieldedOffer(this.__wbg_ptr, t);
            if (r[1]) throw l(r[0]);
        }
        static new(t) {
            const r = o.intent_new(t);
            if (r[2]) throw l(r[1]);
            return le.__wrap(r[0]);
        }
        get ttl() {
            return o.intent_ttl(this.__wbg_ptr);
        }
        bind(t) {
            const r = o.intent_bind(this.__wbg_ptr, t);
            if (r[2]) throw l(r[1]);
            return le.__wrap(r[0]);
        }
        get actions() {
            const t = o.intent_actions(this.__wbg_ptr);
            var r = vt(t[0], t[1]).slice();
            return o.__wbindgen_free(t[0], t[1] * 4, 4), r;
        }
        get binding() {
            const t = o.intent_binding(this.__wbg_ptr);
            if (t[2]) throw l(t[1]);
            return l(t[0]);
        }
        set ttl(t) {
            o.intent_set_ttl(this.__wbg_ptr, t);
        }
        addCall(t) {
            v(t, ou);
            const r = o.intent_addCall(this.__wbg_ptr, t.__wbg_ptr);
            if (r[2]) throw l(r[1]);
            return le.__wrap(r[0]);
        }
        constructor(){
            const t = o.intent_construct();
            if (t[2]) throw l(t[1]);
            return this.__wbg_ptr = t[0] >>> 0, Zc.register(this, this.__wbg_ptr, this), this;
        }
        serialize() {
            const t = o.intent_serialize(this.__wbg_ptr);
            if (t[2]) throw l(t[1]);
            return l(t[0]);
        }
        toString(t) {
            let r, n;
            try {
                const s = o.intent_toString(this.__wbg_ptr, I(t) ? 16777215 : t ? 1 : 0);
                return r = s[0], n = s[1], R(s[0], s[1]);
            } finally{
                o.__wbindgen_free(r, n, 1);
            }
        }
    };
    Symbol.dispose && (le.prototype[Symbol.dispose] = le.prototype.free);
    typeof FinalizationRegistry > "u" || new FinalizationRegistry((e)=>o.__wbg_intounderlyingbytesource_free(e >>> 0, 1));
    typeof FinalizationRegistry > "u" || new FinalizationRegistry((e)=>o.__wbg_intounderlyingsink_free(e >>> 0, 1));
    typeof FinalizationRegistry > "u" || new FinalizationRegistry((e)=>o.__wbg_intounderlyingsource_free(e >>> 0, 1));
    const t_ = typeof FinalizationRegistry > "u" ? {
        register: ()=>{},
        unregister: ()=>{}
    } : new FinalizationRegistry((e)=>o.__wbg_ledgerparameters_free(e >>> 0, 1));
    be = class {
        static __wrap(t) {
            t = t >>> 0;
            const r = Object.create(be.prototype);
            return r.__wbg_ptr = t, t_.register(r, r.__wbg_ptr, r), r;
        }
        __destroy_into_raw() {
            const t = this.__wbg_ptr;
            return this.__wbg_ptr = 0, t_.unregister(this), t;
        }
        free() {
            const t = this.__destroy_into_raw();
            o.__wbg_ledgerparameters_free(t, 0);
        }
        get feePrices() {
            const t = o.ledgerparameters_feePrices(this.__wbg_ptr);
            if (t[2]) throw l(t[1]);
            return l(t[0]);
        }
        static deserialize(t) {
            const r = o.ledgerparameters_deserialize(t);
            if (r[2]) throw l(r[1]);
            return be.__wrap(r[0]);
        }
        static initialParameters() {
            const t = o.ledgerparameters_initialParameters();
            return be.__wrap(t);
        }
        normalizeFullness(t) {
            const r = o.ledgerparameters_normalizeFullness(this.__wbg_ptr, t);
            if (r[2]) throw l(r[1]);
            return l(r[0]);
        }
        maxPriceAdjustment() {
            return o.ledgerparameters_maxPriceAdjustment(this.__wbg_ptr);
        }
        get transactionCostModel() {
            const t = o.ledgerparameters_transactionCostModel(this.__wbg_ptr);
            return nn.__wrap(t);
        }
        constructor(){
            const t = o.ledgerparameters_new();
            if (t[2]) throw l(t[1]);
            return this.__wbg_ptr = t[0] >>> 0, t_.register(this, this.__wbg_ptr, this), this;
        }
        get dust() {
            const t = o.ledgerparameters_dust(this.__wbg_ptr);
            if (t[2]) throw l(t[1]);
            return Br.__wrap(t[0]);
        }
        serialize() {
            const t = o.ledgerparameters_serialize(this.__wbg_ptr);
            if (t[2]) throw l(t[1]);
            return l(t[0]);
        }
        toString(t) {
            let r, n;
            try {
                const s = o.ledgerparameters_toString(this.__wbg_ptr, I(t) ? 16777215 : t ? 1 : 0);
                return r = s[0], n = s[1], R(s[0], s[1]);
            } finally{
                o.__wbindgen_free(r, n, 1);
            }
        }
    };
    Symbol.dispose && (be.prototype[Symbol.dispose] = be.prototype.free);
    const e_ = typeof FinalizationRegistry > "u" ? {
        register: ()=>{},
        unregister: ()=>{}
    } : new FinalizationRegistry((e)=>o.__wbg_ledgerstate_free(e >>> 0, 1));
    class Te {
        static __wrap(t) {
            t = t >>> 0;
            const r = Object.create(Te.prototype);
            return r.__wbg_ptr = t, e_.register(r, r.__wbg_ptr, r), r;
        }
        __destroy_into_raw() {
            const t = this.__wbg_ptr;
            return this.__wbg_ptr = 0, e_.unregister(this), t;
        }
        free() {
            const t = this.__destroy_into_raw();
            o.__wbg_ledgerstate_free(t, 0);
        }
        get parameters() {
            const t = o.ledgerstate_parameters(this.__wbg_ptr);
            return be.__wrap(t);
        }
        static deserialize(t) {
            const r = o.ledgerstate_deserialize(t);
            if (r[2]) throw l(r[1]);
            return Te.__wrap(r[0]);
        }
        get lockedPool() {
            return o.ledgerstate_locked_pool(this.__wbg_ptr);
        }
        get reservePool() {
            return o.ledgerstate_reserve_pool(this.__wbg_ptr);
        }
        updateIndex(t, r, n) {
            const s = A(t, o.__wbindgen_malloc, o.__wbindgen_realloc), i = O;
            v(r, yr);
            const a = o.ledgerstate_updateIndex(this.__wbg_ptr, s, i, r.__wbg_ptr, n);
            if (a[2]) throw l(a[1]);
            return Te.__wrap(a[0]);
        }
        set parameters(t) {
            v(t, be), o.ledgerstate_set_parameters(this.__wbg_ptr, t.__wbg_ptr);
        }
        applySystemTx(t, r) {
            v(t, xs);
            const n = o.ledgerstate_applySystemTx(this.__wbg_ptr, t.__wbg_ptr, r);
            if (n[2]) throw l(n[1]);
            return l(n[0]);
        }
        bridgeReceiving(t) {
            const r = A(t, o.__wbindgen_malloc, o.__wbindgen_realloc), n = O, s = o.ledgerstate_bridgeReceiving(this.__wbg_ptr, r, n);
            if (s[2]) throw l(s[1]);
            return l(s[0]);
        }
        testingDistributeNight(t, r, n) {
            const s = A(t, o.__wbindgen_malloc, o.__wbindgen_realloc), i = O, a = o.ledgerstate_testingDistributeNight(this.__wbg_ptr, s, i, r, n);
            if (a[2]) throw l(a[1]);
            return Te.__wrap(a[0]);
        }
        treasuryBalance(t) {
            const r = o.ledgerstate_treasuryBalance(this.__wbg_ptr, t);
            if (r[2]) throw l(r[1]);
            return l(r[0]);
        }
        get blockRewardPool() {
            return o.ledgerstate_block_reward_pool(this.__wbg_ptr);
        }
        postBlockUpdate(t, r, n) {
            const s = o.ledgerstate_postBlockUpdate(this.__wbg_ptr, t, r, n);
            if (s[2]) throw l(s[1]);
            return Te.__wrap(s[0]);
        }
        unclaimedBlockRewards(t) {
            const r = A(t, o.__wbindgen_malloc, o.__wbindgen_realloc), n = O, s = o.ledgerstate_unclaimedBlockRewards(this.__wbg_ptr, r, n);
            if (s[2]) throw l(s[1]);
            return l(s[0]);
        }
        constructor(t, r){
            const n = A(t, o.__wbindgen_malloc, o.__wbindgen_realloc), s = O;
            v(r, he);
            const i = o.ledgerstate_new(n, s, r.__wbg_ptr);
            return this.__wbg_ptr = i >>> 0, e_.register(this, this.__wbg_ptr, this), this;
        }
        get dust() {
            const t = o.ledgerstate_dust(this.__wbg_ptr);
            return hs.__wrap(t);
        }
        get utxo() {
            const t = o.ledgerstate_utxo(this.__wbg_ptr);
            return sn.__wrap(t);
        }
        apply(t, r) {
            return v(t, Es), v(r, cu), o.ledgerstate_apply(this.__wbg_ptr, t.__wbg_ptr, r.__wbg_ptr);
        }
        static blank(t) {
            const r = A(t, o.__wbindgen_malloc, o.__wbindgen_realloc), n = O, s = o.ledgerstate_blank(r, n);
            return Te.__wrap(s);
        }
        index(t) {
            const r = A(t, o.__wbindgen_malloc, o.__wbindgen_realloc), n = O, s = o.ledgerstate_index(this.__wbg_ptr, r, n);
            if (s[2]) throw l(s[1]);
            return s[0] === 0 ? void 0 : Fr.__wrap(s[0]);
        }
        get zswap() {
            const t = o.ledgerstate_zswap(this.__wbg_ptr);
            return he.__wrap(t);
        }
        serialize() {
            const t = o.ledgerstate_serialize(this.__wbg_ptr);
            if (t[2]) throw l(t[1]);
            return l(t[0]);
        }
        toString(t) {
            let r, n;
            try {
                const s = o.ledgerstate_toString(this.__wbg_ptr, I(t) ? 16777215 : t ? 1 : 0);
                return r = s[0], n = s[1], R(s[0], s[1]);
            } finally{
                o.__wbindgen_free(r, n, 1);
            }
        }
    }
    Symbol.dispose && (Te.prototype[Symbol.dispose] = Te.prototype.free);
    const r_ = typeof FinalizationRegistry > "u" ? {
        register: ()=>{},
        unregister: ()=>{}
    } : new FinalizationRegistry((e)=>o.__wbg_maintenanceupdate_free(e >>> 0, 1));
    Ur = class {
        static __wrap(t) {
            t = t >>> 0;
            const r = Object.create(Ur.prototype);
            return r.__wbg_ptr = t, r_.register(r, r.__wbg_ptr, r), r;
        }
        __destroy_into_raw() {
            const t = this.__wbg_ptr;
            return this.__wbg_ptr = 0, r_.unregister(this), t;
        }
        free() {
            const t = this.__destroy_into_raw();
            o.__wbg_maintenanceupdate_free(t, 0);
        }
        get signatures() {
            const t = o.maintenanceupdate_signatures(this.__wbg_ptr);
            if (t[3]) throw l(t[2]);
            var r = vt(t[0], t[1]).slice();
            return o.__wbindgen_free(t[0], t[1] * 4, 4), r;
        }
        get dataToSign() {
            return o.maintenanceupdate_data_to_sign(this.__wbg_ptr);
        }
        addSignature(t, r) {
            const n = A(r, o.__wbindgen_malloc, o.__wbindgen_realloc), s = O, i = o.maintenanceupdate_addSignature(this.__wbg_ptr, t, n, s);
            if (i[2]) throw l(i[1]);
            return Ur.__wrap(i[0]);
        }
        constructor(t, r, n){
            const s = A(t, o.__wbindgen_malloc, o.__wbindgen_realloc), i = O, a = we(r, o.__wbindgen_malloc), _ = O, f = o.maintenanceupdate_new(s, i, a, _, n);
            if (f[2]) throw l(f[1]);
            return this.__wbg_ptr = f[0] >>> 0, r_.register(this, this.__wbg_ptr, this), this;
        }
        get address() {
            let t, r;
            try {
                const i = o.maintenanceupdate_address(this.__wbg_ptr);
                var n = i[0], s = i[1];
                if (i[3]) throw n = 0, s = 0, l(i[2]);
                return t = n, r = s, R(n, s);
            } finally{
                o.__wbindgen_free(t, r, 1);
            }
        }
        get counter() {
            const t = o.maintenanceupdate_counter(this.__wbg_ptr);
            return BigInt.asUintN(64, t);
        }
        get updates() {
            const t = o.maintenanceupdate_updates(this.__wbg_ptr);
            var r = vt(t[0], t[1]).slice();
            return o.__wbindgen_free(t[0], t[1] * 4, 4), r;
        }
        toString(t) {
            let r, n;
            try {
                const s = o.maintenanceupdate_toString(this.__wbg_ptr, I(t) ? 16777215 : t ? 1 : 0);
                return r = s[0], n = s[1], R(s[0], s[1]);
            } finally{
                o.__wbindgen_free(r, n, 1);
            }
        }
    };
    Symbol.dispose && (Ur.prototype[Symbol.dispose] = Ur.prototype.free);
    const n_ = typeof FinalizationRegistry > "u" ? {
        register: ()=>{},
        unregister: ()=>{}
    } : new FinalizationRegistry((e)=>o.__wbg_merkletreecollapsedupdate_free(e >>> 0, 1));
    class ws {
        static __wrap(t) {
            t = t >>> 0;
            const r = Object.create(ws.prototype);
            return r.__wbg_ptr = t, n_.register(r, r.__wbg_ptr, r), r;
        }
        __destroy_into_raw() {
            const t = this.__wbg_ptr;
            return this.__wbg_ptr = 0, n_.unregister(this), t;
        }
        free() {
            const t = this.__destroy_into_raw();
            o.__wbg_merkletreecollapsedupdate_free(t, 0);
        }
        static deserialize(t) {
            const r = o.merkletreecollapsedupdate_deserialize(t);
            if (r[2]) throw l(r[1]);
            return ws.__wrap(r[0]);
        }
        constructor(t, r, n){
            v(t, he);
            const s = o.merkletreecollapsedupdate_new(t.__wbg_ptr, r, n);
            if (s[2]) throw l(s[1]);
            return this.__wbg_ptr = s[0] >>> 0, n_.register(this, this.__wbg_ptr, this), this;
        }
        serialize() {
            const t = o.merkletreecollapsedupdate_serialize(this.__wbg_ptr);
            if (t[2]) throw l(t[1]);
            return l(t[0]);
        }
        toString(t) {
            let r, n;
            try {
                const s = o.merkletreecollapsedupdate_toString(this.__wbg_ptr, I(t) ? 16777215 : t ? 1 : 0);
                return r = s[0], n = s[1], R(s[0], s[1]);
            } finally{
                o.__wbindgen_free(r, n, 1);
            }
        }
    }
    Symbol.dispose && (ws.prototype[Symbol.dispose] = ws.prototype.free);
    const s_ = typeof FinalizationRegistry > "u" ? {
        register: ()=>{},
        unregister: ()=>{}
    } : new FinalizationRegistry((e)=>o.__wbg_nobinding_free(e >>> 0, 1));
    class bs {
        static __wrap(t) {
            t = t >>> 0;
            const r = Object.create(bs.prototype);
            return r.__wbg_ptr = t, s_.register(r, r.__wbg_ptr, r), r;
        }
        __destroy_into_raw() {
            const t = this.__wbg_ptr;
            return this.__wbg_ptr = 0, s_.unregister(this), t;
        }
        free() {
            const t = this.__destroy_into_raw();
            o.__wbg_nobinding_free(t, 0);
        }
        static deserialize(t) {
            const r = o.nobinding_deserialize(t);
            if (r[2]) throw l(r[1]);
            return bs.__wrap(r[0]);
        }
        constructor(t){
            const r = A(t, o.__wbindgen_malloc, o.__wbindgen_realloc), n = O, s = o.nobinding_new(r, n);
            if (s[2]) throw l(s[1]);
            return this.__wbg_ptr = s[0] >>> 0, s_.register(this, this.__wbg_ptr, this), this;
        }
        get instance() {
            let t, r;
            try {
                const n = o.nobinding_instance(this.__wbg_ptr);
                return t = n[0], r = n[1], R(n[0], n[1]);
            } finally{
                o.__wbindgen_free(t, r, 1);
            }
        }
        serialize() {
            const t = o.nobinding_serialize(this.__wbg_ptr);
            if (t[2]) throw l(t[1]);
            return l(t[0]);
        }
        toString(t) {
            let r, n;
            try {
                const s = o.nobinding_toString(this.__wbg_ptr, I(t) ? 16777215 : t ? 1 : 0);
                return r = s[0], n = s[1], R(s[0], s[1]);
            } finally{
                o.__wbindgen_free(r, n, 1);
            }
        }
    }
    Symbol.dispose && (bs.prototype[Symbol.dispose] = bs.prototype.free);
    const i_ = typeof FinalizationRegistry > "u" ? {
        register: ()=>{},
        unregister: ()=>{}
    } : new FinalizationRegistry((e)=>o.__wbg_noproof_free(e >>> 0, 1));
    class Pi {
        static __wrap(t) {
            t = t >>> 0;
            const r = Object.create(Pi.prototype);
            return r.__wbg_ptr = t, i_.register(r, r.__wbg_ptr, r), r;
        }
        __destroy_into_raw() {
            const t = this.__wbg_ptr;
            return this.__wbg_ptr = 0, i_.unregister(this), t;
        }
        free() {
            const t = this.__destroy_into_raw();
            o.__wbg_noproof_free(t, 0);
        }
        constructor(){
            const t = o.noproof_new();
            if (t[2]) throw l(t[1]);
            return this.__wbg_ptr = t[0] >>> 0, i_.register(this, this.__wbg_ptr, this), this;
        }
        get instance() {
            let t, r;
            try {
                const n = o.noproof_instance(this.__wbg_ptr);
                return t = n[0], r = n[1], R(n[0], n[1]);
            } finally{
                o.__wbindgen_free(t, r, 1);
            }
        }
        toString(t) {
            let r, n;
            try {
                const s = o.noproof_toString(this.__wbg_ptr, I(t) ? 16777215 : t ? 1 : 0);
                return r = s[0], n = s[1], R(s[0], s[1]);
            } finally{
                o.__wbindgen_free(r, n, 1);
            }
        }
    }
    Symbol.dispose && (Pi.prototype[Symbol.dispose] = Pi.prototype.free);
    const o_ = typeof FinalizationRegistry > "u" ? {
        register: ()=>{},
        unregister: ()=>{}
    } : new FinalizationRegistry((e)=>o.__wbg_prebinding_free(e >>> 0, 1));
    class ys {
        static __wrap(t) {
            t = t >>> 0;
            const r = Object.create(ys.prototype);
            return r.__wbg_ptr = t, o_.register(r, r.__wbg_ptr, r), r;
        }
        __destroy_into_raw() {
            const t = this.__wbg_ptr;
            return this.__wbg_ptr = 0, o_.unregister(this), t;
        }
        free() {
            const t = this.__destroy_into_raw();
            o.__wbg_prebinding_free(t, 0);
        }
        static deserialize(t) {
            const r = o.prebinding_deserialize(t);
            if (r[2]) throw l(r[1]);
            return ys.__wrap(r[0]);
        }
        constructor(t){
            const r = A(t, o.__wbindgen_malloc, o.__wbindgen_realloc), n = O, s = o.prebinding_new(r, n);
            if (s[2]) throw l(s[1]);
            return this.__wbg_ptr = s[0] >>> 0, o_.register(this, this.__wbg_ptr, this), this;
        }
        get instance() {
            let t, r;
            try {
                const n = o.prebinding_instance(this.__wbg_ptr);
                return t = n[0], r = n[1], R(n[0], n[1]);
            } finally{
                o.__wbindgen_free(t, r, 1);
            }
        }
        serialize() {
            const t = o.prebinding_serialize(this.__wbg_ptr);
            if (t[2]) throw l(t[1]);
            return l(t[0]);
        }
        toString(t) {
            let r, n;
            try {
                const s = o.prebinding_toString(this.__wbg_ptr, I(t) ? 16777215 : t ? 1 : 0);
                return r = s[0], n = s[1], R(s[0], s[1]);
            } finally{
                o.__wbindgen_free(r, n, 1);
            }
        }
    }
    Symbol.dispose && (ys.prototype[Symbol.dispose] = ys.prototype.free);
    const Rd = typeof FinalizationRegistry > "u" ? {
        register: ()=>{},
        unregister: ()=>{}
    } : new FinalizationRegistry((e)=>o.__wbg_prepartitioncontractcall_free(e >>> 0, 1));
    class au {
        __destroy_into_raw() {
            const t = this.__wbg_ptr;
            return this.__wbg_ptr = 0, Rd.unregister(this), t;
        }
        free() {
            const t = this.__destroy_into_raw();
            o.__wbg_prepartitioncontractcall_free(t, 0);
        }
        constructor(t, r, n, s, i, a, _, f, g){
            const h = A(t, o.__wbindgen_malloc, o.__wbindgen_realloc), b = O;
            v(n, Sr), v(s, sa);
            const S = we(i, o.__wbindgen_malloc), k = O, x = A(f, o.__wbindgen_malloc, o.__wbindgen_realloc), $ = O, C = A(g, o.__wbindgen_malloc, o.__wbindgen_realloc), z = O, V = o.prepartitioncontractcall_new(h, b, r, n.__wbg_ptr, s.__wbg_ptr, S, k, a, _, x, $, C, z);
            if (V[2]) throw l(V[1]);
            return this.__wbg_ptr = V[0] >>> 0, Rd.register(this, this.__wbg_ptr, this), this;
        }
        toString(t) {
            let r, n;
            try {
                const s = o.prepartitioncontractcall_toString(this.__wbg_ptr, I(t) ? 16777215 : t ? 1 : 0);
                return r = s[0], n = s[1], R(s[0], s[1]);
            } finally{
                o.__wbindgen_free(r, n, 1);
            }
        }
    }
    Symbol.dispose && (au.prototype[Symbol.dispose] = au.prototype.free);
    const a_ = typeof FinalizationRegistry > "u" ? {
        register: ()=>{},
        unregister: ()=>{}
    } : new FinalizationRegistry((e)=>o.__wbg_preproof_free(e >>> 0, 1));
    class ms {
        static __wrap(t) {
            t = t >>> 0;
            const r = Object.create(ms.prototype);
            return r.__wbg_ptr = t, a_.register(r, r.__wbg_ptr, r), r;
        }
        __destroy_into_raw() {
            const t = this.__wbg_ptr;
            return this.__wbg_ptr = 0, a_.unregister(this), t;
        }
        free() {
            const t = this.__destroy_into_raw();
            o.__wbg_preproof_free(t, 0);
        }
        static deserialize(t) {
            const r = o.preproof_deserialize(t);
            if (r[2]) throw l(r[1]);
            return ms.__wrap(r[0]);
        }
        constructor(t){
            const r = A(t, o.__wbindgen_malloc, o.__wbindgen_realloc), n = O, s = o.preproof_new(r, n);
            if (s[2]) throw l(s[1]);
            return this.__wbg_ptr = s[0] >>> 0, a_.register(this, this.__wbg_ptr, this), this;
        }
        get instance() {
            let t, r;
            try {
                const n = o.preproof_instance(this.__wbg_ptr);
                return t = n[0], r = n[1], R(n[0], n[1]);
            } finally{
                o.__wbindgen_free(t, r, 1);
            }
        }
        serialize() {
            const t = o.preproof_serialize(this.__wbg_ptr);
            if (t[2]) throw l(t[1]);
            return l(t[0]);
        }
        toString(t) {
            let r, n;
            try {
                const s = o.preproof_toString(this.__wbg_ptr, I(t) ? 16777215 : t ? 1 : 0);
                return r = s[0], n = s[1], R(s[0], s[1]);
            } finally{
                o.__wbindgen_free(r, n, 1);
            }
        }
    }
    Symbol.dispose && (ms.prototype[Symbol.dispose] = ms.prototype.free);
    const Od = typeof FinalizationRegistry > "u" ? {
        register: ()=>{},
        unregister: ()=>{}
    } : new FinalizationRegistry((e)=>o.__wbg_pretranscript_free(e >>> 0, 1));
    sa = class {
        __destroy_into_raw() {
            const t = this.__wbg_ptr;
            return this.__wbg_ptr = 0, Od.unregister(this), t;
        }
        free() {
            const t = this.__destroy_into_raw();
            o.__wbg_pretranscript_free(t, 0);
        }
        constructor(t, r, n){
            v(t, Ar);
            const s = o.pretranscript_new(t.__wbg_ptr, r, n);
            if (s[2]) throw l(s[1]);
            return this.__wbg_ptr = s[0] >>> 0, Od.register(this, this.__wbg_ptr, this), this;
        }
        toString(t) {
            let r, n;
            try {
                const s = o.pretranscript_toString(this.__wbg_ptr, I(t) ? 16777215 : t ? 1 : 0);
                return r = s[0], n = s[1], R(s[0], s[1]);
            } finally{
                o.__wbindgen_free(r, n, 1);
            }
        }
    };
    Symbol.dispose && (sa.prototype[Symbol.dispose] = sa.prototype.free);
    const c_ = typeof FinalizationRegistry > "u" ? {
        register: ()=>{},
        unregister: ()=>{}
    } : new FinalizationRegistry((e)=>o.__wbg_proof_free(e >>> 0, 1));
    class Ss {
        static __wrap(t) {
            t = t >>> 0;
            const r = Object.create(Ss.prototype);
            return r.__wbg_ptr = t, c_.register(r, r.__wbg_ptr, r), r;
        }
        __destroy_into_raw() {
            const t = this.__wbg_ptr;
            return this.__wbg_ptr = 0, c_.unregister(this), t;
        }
        free() {
            const t = this.__destroy_into_raw();
            o.__wbg_proof_free(t, 0);
        }
        static deserialize(t) {
            const r = o.proof_deserialize(t);
            if (r[2]) throw l(r[1]);
            return Ss.__wrap(r[0]);
        }
        constructor(t){
            const r = A(t, o.__wbindgen_malloc, o.__wbindgen_realloc), n = O, s = o.proof_new(r, n);
            if (s[2]) throw l(s[1]);
            return this.__wbg_ptr = s[0] >>> 0, c_.register(this, this.__wbg_ptr, this), this;
        }
        get instance() {
            let t, r;
            try {
                const n = o.proof_instance(this.__wbg_ptr);
                return t = n[0], r = n[1], R(n[0], n[1]);
            } finally{
                o.__wbindgen_free(t, r, 1);
            }
        }
        serialize() {
            const t = o.proof_serialize(this.__wbg_ptr);
            if (t[2]) throw l(t[1]);
            return l(t[0]);
        }
        toString(t) {
            let r, n;
            try {
                const s = o.proof_toString(this.__wbg_ptr, I(t) ? 16777215 : t ? 1 : 0);
                return r = s[0], n = s[1], R(s[0], s[1]);
            } finally{
                o.__wbindgen_free(r, n, 1);
            }
        }
    }
    Symbol.dispose && (Ss.prototype[Symbol.dispose] = Ss.prototype.free);
    const __ = typeof FinalizationRegistry > "u" ? {
        register: ()=>{},
        unregister: ()=>{}
    } : new FinalizationRegistry((e)=>o.__wbg_querycontext_free(e >>> 0, 1));
    Ar = class {
        static __wrap(t) {
            t = t >>> 0;
            const r = Object.create(Ar.prototype);
            return r.__wbg_ptr = t, __.register(r, r.__wbg_ptr, r), r;
        }
        __destroy_into_raw() {
            const t = this.__wbg_ptr;
            return this.__wbg_ptr = 0, __.unregister(this), t;
        }
        free() {
            const t = this.__destroy_into_raw();
            o.__wbg_querycontext_free(t, 0);
        }
        get comIndices() {
            const t = o.querycontext_com_indices(this.__wbg_ptr);
            if (t[2]) throw l(t[1]);
            return l(t[0]);
        }
        set effects(t) {
            const r = o.querycontext_set_effects(this.__wbg_ptr, t);
            if (r[1]) throw l(r[0]);
        }
        toVmStack() {
            const t = o.querycontext_toVmStack(this.__wbg_ptr);
            return Ui.__wrap(t);
        }
        runTranscript(t, r) {
            v(r, nr);
            const n = o.querycontext_runTranscript(this.__wbg_ptr, t, r.__wbg_ptr);
            if (n[2]) throw l(n[1]);
            return Ar.__wrap(n[0]);
        }
        insertCommitment(t, r) {
            const n = A(t, o.__wbindgen_malloc, o.__wbindgen_realloc), s = O, i = o.querycontext_insertCommitment(this.__wbg_ptr, n, s, r);
            if (i[2]) throw l(i[1]);
            return Ar.__wrap(i[0]);
        }
        constructor(t, r){
            v(t, yr);
            const n = A(r, o.__wbindgen_malloc, o.__wbindgen_realloc), s = O, i = o.querycontext_new(t.__wbg_ptr, n, s);
            if (i[2]) throw l(i[1]);
            return this.__wbg_ptr = i[0] >>> 0, __.register(this, this.__wbg_ptr, this), this;
        }
        get block() {
            const t = o.querycontext_block(this.__wbg_ptr);
            if (t[2]) throw l(t[1]);
            return l(t[0]);
        }
        query(t, r, n) {
            v(r, nr);
            const s = o.querycontext_query(this.__wbg_ptr, t, r.__wbg_ptr, n);
            if (s[2]) throw l(s[1]);
            return Mi.__wrap(s[0]);
        }
        get state() {
            const t = o.querycontext_state(this.__wbg_ptr);
            return yr.__wrap(t);
        }
        get address() {
            let t, r;
            try {
                const i = o.querycontext_address(this.__wbg_ptr);
                var n = i[0], s = i[1];
                if (i[3]) throw n = 0, s = 0, l(i[2]);
                return t = n, r = s, R(n, s);
            } finally{
                o.__wbindgen_free(t, r, 1);
            }
        }
        get effects() {
            const t = o.querycontext_effects(this.__wbg_ptr);
            if (t[2]) throw l(t[1]);
            return l(t[0]);
        }
        qualify(t) {
            const r = o.querycontext_qualify(this.__wbg_ptr, t);
            if (r[2]) throw l(r[1]);
            return l(r[0]);
        }
        set block(t) {
            const r = o.querycontext_set_block(this.__wbg_ptr, t);
            if (r[1]) throw l(r[0]);
        }
        toString(t) {
            let r, n;
            try {
                const s = o.querycontext_toString(this.__wbg_ptr, I(t) ? 16777215 : t ? 1 : 0);
                return r = s[0], n = s[1], R(s[0], s[1]);
            } finally{
                o.__wbindgen_free(r, n, 1);
            }
        }
    };
    Symbol.dispose && (Ar.prototype[Symbol.dispose] = Ar.prototype.free);
    const u_ = typeof FinalizationRegistry > "u" ? {
        register: ()=>{},
        unregister: ()=>{}
    } : new FinalizationRegistry((e)=>o.__wbg_queryresults_free(e >>> 0, 1));
    class Mi {
        static __wrap(t) {
            t = t >>> 0;
            const r = Object.create(Mi.prototype);
            return r.__wbg_ptr = t, u_.register(r, r.__wbg_ptr, r), r;
        }
        __destroy_into_raw() {
            const t = this.__wbg_ptr;
            return this.__wbg_ptr = 0, u_.unregister(this), t;
        }
        free() {
            const t = this.__destroy_into_raw();
            o.__wbg_queryresults_free(t, 0);
        }
        constructor(){
            const t = o.queryresults_new();
            if (t[2]) throw l(t[1]);
            return this.__wbg_ptr = t[0] >>> 0, u_.register(this, this.__wbg_ptr, this), this;
        }
        get events() {
            const t = o.queryresults_events(this.__wbg_ptr);
            if (t[2]) throw l(t[1]);
            return l(t[0]);
        }
        get context() {
            const t = o.queryresults_context(this.__wbg_ptr);
            return Ar.__wrap(t);
        }
        get gasCost() {
            const t = o.queryresults_gas_cost(this.__wbg_ptr);
            if (t[2]) throw l(t[1]);
            return l(t[0]);
        }
        toString(t) {
            let r, n;
            try {
                const s = o.queryresults_toString(this.__wbg_ptr, I(t) ? 16777215 : t ? 1 : 0);
                return r = s[0], n = s[1], R(s[0], s[1]);
            } finally{
                o.__wbindgen_free(r, n, 1);
            }
        }
    }
    Symbol.dispose && (Mi.prototype[Symbol.dispose] = Mi.prototype.free);
    const l_ = typeof FinalizationRegistry > "u" ? {
        register: ()=>{},
        unregister: ()=>{}
    } : new FinalizationRegistry((e)=>o.__wbg_replaceauthority_free(e >>> 0, 1));
    Fs = class {
        static __wrap(t) {
            t = t >>> 0;
            const r = Object.create(Fs.prototype);
            return r.__wbg_ptr = t, l_.register(r, r.__wbg_ptr, r), r;
        }
        __destroy_into_raw() {
            const t = this.__wbg_ptr;
            return this.__wbg_ptr = 0, l_.unregister(this), t;
        }
        free() {
            const t = this.__destroy_into_raw();
            o.__wbg_replaceauthority_free(t, 0);
        }
        constructor(t){
            v(t, mr);
            const r = o.replaceauthority_new(t.__wbg_ptr);
            return this.__wbg_ptr = r >>> 0, l_.register(this, this.__wbg_ptr, this), this;
        }
        get authority() {
            const t = o.replaceauthority_authority(this.__wbg_ptr);
            return mr.__wrap(t);
        }
        toString(t) {
            let r, n;
            try {
                const s = o.replaceauthority_toString(this.__wbg_ptr, I(t) ? 16777215 : t ? 1 : 0);
                return r = s[0], n = s[1], R(s[0], s[1]);
            } finally{
                o.__wbindgen_free(r, n, 1);
            }
        }
    };
    Symbol.dispose && (Fs.prototype[Symbol.dispose] = Fs.prototype.free);
    const f_ = typeof FinalizationRegistry > "u" ? {
        register: ()=>{},
        unregister: ()=>{}
    } : new FinalizationRegistry((e)=>o.__wbg_signatureenabled_free(e >>> 0, 1));
    class mn {
        static __wrap(t) {
            t = t >>> 0;
            const r = Object.create(mn.prototype);
            return r.__wbg_ptr = t, f_.register(r, r.__wbg_ptr, r), r;
        }
        __destroy_into_raw() {
            const t = this.__wbg_ptr;
            return this.__wbg_ptr = 0, f_.unregister(this), t;
        }
        free() {
            const t = this.__destroy_into_raw();
            o.__wbg_signatureenabled_free(t, 0);
        }
        static deserialize(t) {
            const r = o.signatureenabled_deserialize(t);
            if (r[2]) throw l(r[1]);
            return mn.__wrap(r[0]);
        }
        constructor(t){
            const r = A(t, o.__wbindgen_malloc, o.__wbindgen_realloc), n = O, s = o.signatureenabled_new(r, n);
            if (s[2]) throw l(s[1]);
            return this.__wbg_ptr = s[0] >>> 0, f_.register(this, this.__wbg_ptr, this), this;
        }
        get instance() {
            let t, r;
            try {
                const n = o.signatureenabled_instance(this.__wbg_ptr);
                return t = n[0], r = n[1], R(n[0], n[1]);
            } finally{
                o.__wbindgen_free(t, r, 1);
            }
        }
        serialize() {
            const t = o.signatureenabled_serialize(this.__wbg_ptr);
            if (t[2]) throw l(t[1]);
            return l(t[0]);
        }
        toString(t) {
            let r, n;
            try {
                const s = o.signatureenabled_toString(this.__wbg_ptr, I(t) ? 16777215 : t ? 1 : 0);
                return r = s[0], n = s[1], R(s[0], s[1]);
            } finally{
                o.__wbindgen_free(r, n, 1);
            }
        }
    }
    Symbol.dispose && (mn.prototype[Symbol.dispose] = mn.prototype.free);
    const d_ = typeof FinalizationRegistry > "u" ? {
        register: ()=>{},
        unregister: ()=>{}
    } : new FinalizationRegistry((e)=>o.__wbg_signatureerased_free(e >>> 0, 1));
    class ks {
        static __wrap(t) {
            t = t >>> 0;
            const r = Object.create(ks.prototype);
            return r.__wbg_ptr = t, d_.register(r, r.__wbg_ptr, r), r;
        }
        __destroy_into_raw() {
            const t = this.__wbg_ptr;
            return this.__wbg_ptr = 0, d_.unregister(this), t;
        }
        free() {
            const t = this.__destroy_into_raw();
            o.__wbg_signatureerased_free(t, 0);
        }
        constructor(){
            const t = o.signatureerased_new();
            if (t[2]) throw l(t[1]);
            return this.__wbg_ptr = t[0] >>> 0, d_.register(this, this.__wbg_ptr, this), this;
        }
        get instance() {
            let t, r;
            try {
                const n = o.signatureerased_instance(this.__wbg_ptr);
                return t = n[0], r = n[1], R(n[0], n[1]);
            } finally{
                o.__wbindgen_free(t, r, 1);
            }
        }
        toString(t) {
            let r, n;
            try {
                const s = o.signatureerased_toString(this.__wbg_ptr, I(t) ? 16777215 : t ? 1 : 0);
                return r = s[0], n = s[1], R(s[0], s[1]);
            } finally{
                o.__wbindgen_free(r, n, 1);
            }
        }
    }
    Symbol.dispose && (ks.prototype[Symbol.dispose] = ks.prototype.free);
    const g_ = typeof FinalizationRegistry > "u" ? {
        register: ()=>{},
        unregister: ()=>{}
    } : new FinalizationRegistry((e)=>o.__wbg_stateboundedmerkletree_free(e >>> 0, 1));
    class lr {
        static __wrap(t) {
            t = t >>> 0;
            const r = Object.create(lr.prototype);
            return r.__wbg_ptr = t, g_.register(r, r.__wbg_ptr, r), r;
        }
        __destroy_into_raw() {
            const t = this.__wbg_ptr;
            return this.__wbg_ptr = 0, g_.unregister(this), t;
        }
        free() {
            const t = this.__destroy_into_raw();
            o.__wbg_stateboundedmerkletree_free(t, 0);
        }
        pathForLeaf(t, r) {
            const n = o.stateboundedmerkletree_pathForLeaf(this.__wbg_ptr, t, r);
            if (n[2]) throw l(n[1]);
            return l(n[0]);
        }
        findPathForLeaf(t, r, n, s) {
            const i = o.stateboundedmerkletree_findPathForLeaf(this.__wbg_ptr, t, !I(r), I(r) ? BigInt(0) : r, !I(n), I(n) ? BigInt(0) : n, I(s) ? 16777215 : s ? 1 : 0);
            if (i[2]) throw l(i[1]);
            return l(i[0]);
        }
        root() {
            const t = o.stateboundedmerkletree_root(this.__wbg_ptr);
            if (t[2]) throw l(t[1]);
            return l(t[0]);
        }
        constructor(t){
            const r = o.stateboundedmerkletree_blank(t);
            return this.__wbg_ptr = r >>> 0, g_.register(this, this.__wbg_ptr, this), this;
        }
        get height() {
            return o.stateboundedmerkletree_height(this.__wbg_ptr);
        }
        rehash() {
            const t = o.stateboundedmerkletree_rehash(this.__wbg_ptr);
            return lr.__wrap(t);
        }
        update(t, r) {
            const n = o.stateboundedmerkletree_update(this.__wbg_ptr, t, r);
            if (n[2]) throw l(n[1]);
            return lr.__wrap(n[0]);
        }
        collapse(t, r) {
            const n = o.stateboundedmerkletree_collapse(this.__wbg_ptr, t, r);
            return lr.__wrap(n);
        }
        toString(t) {
            let r, n;
            try {
                const s = o.stateboundedmerkletree_toString(this.__wbg_ptr, I(t) ? 16777215 : t ? 1 : 0);
                return r = s[0], n = s[1], R(s[0], s[1]);
            } finally{
                o.__wbindgen_free(r, n, 1);
            }
        }
    }
    Symbol.dispose && (lr.prototype[Symbol.dispose] = lr.prototype.free);
    const p_ = typeof FinalizationRegistry > "u" ? {
        register: ()=>{},
        unregister: ()=>{}
    } : new FinalizationRegistry((e)=>o.__wbg_statemap_free(e >>> 0, 1));
    class $r {
        static __wrap(t) {
            t = t >>> 0;
            const r = Object.create($r.prototype);
            return r.__wbg_ptr = t, p_.register(r, r.__wbg_ptr, r), r;
        }
        __destroy_into_raw() {
            const t = this.__wbg_ptr;
            return this.__wbg_ptr = 0, p_.unregister(this), t;
        }
        free() {
            const t = this.__destroy_into_raw();
            o.__wbg_statemap_free(t, 0);
        }
        get(t) {
            const r = o.statemap_get(this.__wbg_ptr, t);
            if (r[2]) throw l(r[1]);
            return r[0] === 0 ? void 0 : Mt.__wrap(r[0]);
        }
        constructor(){
            const t = o.statemap_new();
            return this.__wbg_ptr = t >>> 0, p_.register(this, this.__wbg_ptr, this), this;
        }
        keys() {
            const t = o.statemap_keys(this.__wbg_ptr);
            if (t[3]) throw l(t[2]);
            var r = vt(t[0], t[1]).slice();
            return o.__wbindgen_free(t[0], t[1] * 4, 4), r;
        }
        insert(t, r) {
            v(r, Mt);
            const n = o.statemap_insert(this.__wbg_ptr, t, r.__wbg_ptr);
            if (n[2]) throw l(n[1]);
            return $r.__wrap(n[0]);
        }
        remove(t) {
            const r = o.statemap_remove(this.__wbg_ptr, t);
            if (r[2]) throw l(r[1]);
            return $r.__wrap(r[0]);
        }
        toString(t) {
            let r, n;
            try {
                const s = o.statemap_toString(this.__wbg_ptr, I(t) ? 16777215 : t ? 1 : 0);
                return r = s[0], n = s[1], R(s[0], s[1]);
            } finally{
                o.__wbindgen_free(r, n, 1);
            }
        }
    }
    Symbol.dispose && ($r.prototype[Symbol.dispose] = $r.prototype.free);
    const h_ = typeof FinalizationRegistry > "u" ? {
        register: ()=>{},
        unregister: ()=>{}
    } : new FinalizationRegistry((e)=>o.__wbg_statevalue_free(e >>> 0, 1));
    Mt = class {
        static __wrap(t) {
            t = t >>> 0;
            const r = Object.create(Mt.prototype);
            return r.__wbg_ptr = t, h_.register(r, r.__wbg_ptr, r), r;
        }
        __destroy_into_raw() {
            const t = this.__wbg_ptr;
            return this.__wbg_ptr = 0, h_.unregister(this), t;
        }
        free() {
            const t = this.__destroy_into_raw();
            o.__wbg_statevalue_free(t, 0);
        }
        arrayPush(t) {
            v(t, Mt);
            const r = o.statevalue_arrayPush(this.__wbg_ptr, t.__wbg_ptr);
            if (r[2]) throw l(r[1]);
            return Mt.__wrap(r[0]);
        }
        asBoundedMerkleTree() {
            const t = o.statevalue_asBoundedMerkleTree(this.__wbg_ptr);
            if (t[2]) throw l(t[1]);
            return t[0] === 0 ? void 0 : lr.__wrap(t[0]);
        }
        static newBoundedMerkleTree(t) {
            v(t, lr);
            const r = o.statevalue_newBoundedMerkleTree(t.__wbg_ptr);
            return Mt.__wrap(r);
        }
        constructor(){
            const t = o.statevalue_new();
            if (t[2]) throw l(t[1]);
            return this.__wbg_ptr = t[0] >>> 0, h_.register(this, this.__wbg_ptr, this), this;
        }
        type() {
            let t, r;
            try {
                const n = o.statevalue_type(this.__wbg_ptr);
                return t = n[0], r = n[1], R(n[0], n[1]);
            } finally{
                o.__wbindgen_free(t, r, 1);
            }
        }
        asMap() {
            const t = o.statevalue_asMap(this.__wbg_ptr);
            if (t[2]) throw l(t[1]);
            return t[0] === 0 ? void 0 : $r.__wrap(t[0]);
        }
        static decode(t) {
            const r = o.statevalue_decode(t);
            if (r[2]) throw l(r[1]);
            return Mt.__wrap(r[0]);
        }
        encode() {
            const t = o.statevalue_encode(this.__wbg_ptr);
            if (t[2]) throw l(t[1]);
            return l(t[0]);
        }
        asCell() {
            const t = o.statevalue_asCell(this.__wbg_ptr);
            if (t[2]) throw l(t[1]);
            return l(t[0]);
        }
        static newMap(t) {
            v(t, $r);
            const r = o.statevalue_newMap(t.__wbg_ptr);
            return Mt.__wrap(r);
        }
        asArray() {
            const t = o.statevalue_asArray(this.__wbg_ptr);
            if (t[3]) throw l(t[2]);
            let r;
            return t[0] !== 0 && (r = vt(t[0], t[1]).slice(), o.__wbindgen_free(t[0], t[1] * 4, 4)), r;
        }
        logSize() {
            return o.statevalue_logSize(this.__wbg_ptr) >>> 0;
        }
        static newCell(t) {
            const r = o.statevalue_newCell(t);
            if (r[2]) throw l(r[1]);
            return Mt.__wrap(r[0]);
        }
        static newNull() {
            const t = o.statevalue_newNull();
            return Mt.__wrap(t);
        }
        static newArray() {
            const t = o.statevalue_newArray();
            return Mt.__wrap(t);
        }
        toString(t) {
            let r, n;
            try {
                const s = o.statevalue_toString(this.__wbg_ptr, I(t) ? 16777215 : t ? 1 : 0);
                return r = s[0], n = s[1], R(s[0], s[1]);
            } finally{
                o.__wbindgen_free(r, n, 1);
            }
        }
    };
    Symbol.dispose && (Mt.prototype[Symbol.dispose] = Mt.prototype.free);
    const w_ = typeof FinalizationRegistry > "u" ? {
        register: ()=>{},
        unregister: ()=>{}
    } : new FinalizationRegistry((e)=>o.__wbg_systemtransaction_free(e >>> 0, 1));
    class xs {
        static __wrap(t) {
            t = t >>> 0;
            const r = Object.create(xs.prototype);
            return r.__wbg_ptr = t, w_.register(r, r.__wbg_ptr, r), r;
        }
        __destroy_into_raw() {
            const t = this.__wbg_ptr;
            return this.__wbg_ptr = 0, w_.unregister(this), t;
        }
        free() {
            const t = this.__destroy_into_raw();
            o.__wbg_systemtransaction_free(t, 0);
        }
        static deserialize(t) {
            const r = o.systemtransaction_deserialize(t);
            if (r[2]) throw l(r[1]);
            return xs.__wrap(r[0]);
        }
        constructor(){
            const t = o.systemtransaction_new();
            if (t[2]) throw l(t[1]);
            return this.__wbg_ptr = t[0] >>> 0, w_.register(this, this.__wbg_ptr, this), this;
        }
        serialize() {
            const t = o.systemtransaction_serialize(this.__wbg_ptr);
            if (t[2]) throw l(t[1]);
            return l(t[0]);
        }
        toString(t) {
            let r, n;
            try {
                const s = o.systemtransaction_toString(this.__wbg_ptr, I(t) ? 16777215 : t ? 1 : 0);
                return r = s[0], n = s[1], R(s[0], s[1]);
            } finally{
                o.__wbindgen_free(r, n, 1);
            }
        }
    }
    Symbol.dispose && (xs.prototype[Symbol.dispose] = xs.prototype.free);
    const b_ = typeof FinalizationRegistry > "u" ? {
        register: ()=>{},
        unregister: ()=>{}
    } : new FinalizationRegistry((e)=>o.__wbg_transaction_free(e >>> 0, 1));
    Tt = class {
        static __wrap(t) {
            t = t >>> 0;
            const r = Object.create(Tt.prototype);
            return r.__wbg_ptr = t, b_.register(r, r.__wbg_ptr, r), r;
        }
        __destroy_into_raw() {
            const t = this.__wbg_ptr;
            return this.__wbg_ptr = 0, b_.unregister(this), t;
        }
        free() {
            const t = this.__destroy_into_raw();
            o.__wbg_transaction_free(t, 0);
        }
        addIntent(t, r) {
            const n = o.transaction_addIntent(this.__wbg_ptr, t, r);
            if (n[2]) throw l(n[1]);
            return Tt.__wrap(n[0]);
        }
        static fromParts(t, r, n, s) {
            const i = A(t, o.__wbindgen_malloc, o.__wbindgen_realloc), a = O, _ = o.transaction_fromParts(i, a, r, n, s);
            if (_[2]) throw l(_[1]);
            return Tt.__wrap(_[0]);
        }
        imbalances(t, r) {
            const n = o.transaction_imbalances(this.__wbg_ptr, t, I(r) ? 0 : pt(r));
            if (n[2]) throw l(n[1]);
            return l(n[0]);
        }
        mockProve() {
            const t = o.transaction_mockProve(this.__wbg_ptr);
            if (t[2]) throw l(t[1]);
            return Tt.__wrap(t[0]);
        }
        static deserialize(t, r, n, s) {
            const i = A(t, o.__wbindgen_malloc, o.__wbindgen_realloc), a = O, _ = A(r, o.__wbindgen_malloc, o.__wbindgen_realloc), f = O, g = A(n, o.__wbindgen_malloc, o.__wbindgen_realloc), h = O, b = o.transaction_deserialize(i, a, _, f, g, h, s);
            if (b[2]) throw l(b[1]);
            return Tt.__wrap(b[0]);
        }
        identifiers() {
            const t = o.transaction_identifiers(this.__wbg_ptr);
            if (t[3]) throw l(t[2]);
            var r = vt(t[0], t[1]).slice();
            return o.__wbindgen_free(t[0], t[1] * 4, 4), r;
        }
        set intents(t) {
            const r = o.transaction_set_intents(this.__wbg_ptr, I(t) ? 0 : pt(t));
            if (r[1]) throw l(r[0]);
        }
        wellFormed(t, r, n) {
            v(t, Te), v(r, _u);
            const s = o.transaction_wellFormed(this.__wbg_ptr, t.__wbg_ptr, r.__wbg_ptr, n);
            if (s[2]) throw l(s[1]);
            return Es.__wrap(s[0]);
        }
        eraseProofs() {
            const t = o.transaction_eraseProofs(this.__wbg_ptr);
            return Tt.__wrap(t);
        }
        static fromRewards(t) {
            v(t, Qe);
            const r = o.transaction_fromRewards(t.__wbg_ptr);
            return Tt.__wrap(r);
        }
        get fallibleOffer() {
            return o.transaction_fallibleOffer(this.__wbg_ptr);
        }
        addZswapOffer(t, r) {
            const n = o.transaction_addZswapOffer(this.__wbg_ptr, t, r);
            if (n[2]) throw l(n[1]);
            return Tt.__wrap(n[0]);
        }
        eraseSignatures() {
            const t = o.transaction_eraseSignatures(this.__wbg_ptr);
            if (t[2]) throw l(t[1]);
            return Tt.__wrap(t[0]);
        }
        feesWithMargin(t, r) {
            v(t, be);
            const n = o.transaction_feesWithMargin(this.__wbg_ptr, t.__wbg_ptr, r);
            if (n[2]) throw l(n[1]);
            return l(n[0]);
        }
        get guaranteedOffer() {
            const t = o.transaction_guaranteedOffer(this.__wbg_ptr);
            return t === 0 ? void 0 : Kt.__wrap(t);
        }
        transactionHash() {
            let t, r;
            try {
                const i = o.transaction_transactionHash(this.__wbg_ptr);
                var n = i[0], s = i[1];
                if (i[3]) throw n = 0, s = 0, l(i[2]);
                return t = n, r = s, R(n, s);
            } finally{
                o.__wbindgen_free(t, r, 1);
            }
        }
        get bindingRandomness() {
            const t = o.transaction_bindingRandomness(this.__wbg_ptr);
            if (t[2]) throw l(t[1]);
            return l(t[0]);
        }
        set fallibleOffer(t) {
            const r = o.transaction_set_fallibleOffer(this.__wbg_ptr, I(t) ? 0 : pt(t));
            if (r[1]) throw l(r[0]);
        }
        set guaranteedOffer(t) {
            const r = o.transaction_set_guaranteedOffer(this.__wbg_ptr, t);
            if (r[1]) throw l(r[0]);
        }
        static fromPartsRandomized(t, r, n, s) {
            const i = A(t, o.__wbindgen_malloc, o.__wbindgen_realloc), a = O, _ = o.transaction_fromPartsRandomized(i, a, r, n, s);
            if (_[2]) throw l(_[1]);
            return Tt.__wrap(_[0]);
        }
        constructor(){
            const t = o.transaction_new();
            if (t[2]) throw l(t[1]);
            return this.__wbg_ptr = t[0] >>> 0, b_.register(this, this.__wbg_ptr, this), this;
        }
        bind() {
            const t = o.transaction_bind(this.__wbg_ptr);
            if (t[2]) throw l(t[1]);
            return Tt.__wrap(t[0]);
        }
        cost(t, r) {
            v(t, be);
            const n = o.transaction_cost(this.__wbg_ptr, t.__wbg_ptr, I(r) ? 16777215 : r ? 1 : 0);
            if (n[2]) throw l(n[1]);
            return l(n[0]);
        }
        fees(t, r) {
            v(t, be);
            const n = o.transaction_fees(this.__wbg_ptr, t.__wbg_ptr, I(r) ? 16777215 : r ? 1 : 0);
            if (n[2]) throw l(n[1]);
            return l(n[0]);
        }
        merge(t) {
            v(t, Tt);
            const r = o.transaction_merge(this.__wbg_ptr, t.__wbg_ptr);
            if (r[2]) throw l(r[1]);
            return Tt.__wrap(r[0]);
        }
        prove(t, r) {
            return v(r, nr), o.transaction_prove(this.__wbg_ptr, t, r.__wbg_ptr);
        }
        get intents() {
            return o.transaction_intents(this.__wbg_ptr);
        }
        get rewards() {
            const t = o.transaction_rewards(this.__wbg_ptr);
            return t === 0 ? void 0 : Qe.__wrap(t);
        }
        addCalls(t, r, n, s, i, a, _) {
            v(n, be);
            const f = o.transaction_addCalls(this.__wbg_ptr, t, r, n.__wbg_ptr, s, I(i) ? 0 : pt(i), I(a) ? 0 : pt(a), I(_) ? 0 : pt(_));
            if (f[2]) throw l(f[1]);
            return Tt.__wrap(f[0]);
        }
        serialize() {
            const t = o.transaction_serialize(this.__wbg_ptr);
            if (t[2]) throw l(t[1]);
            return l(t[0]);
        }
        toString(t) {
            let r, n;
            try {
                const s = o.transaction_toString(this.__wbg_ptr, I(t) ? 16777215 : t ? 1 : 0);
                return r = s[0], n = s[1], R(s[0], s[1]);
            } finally{
                o.__wbindgen_free(r, n, 1);
            }
        }
    };
    Symbol.dispose && (Tt.prototype[Symbol.dispose] = Tt.prototype.free);
    const Td = typeof FinalizationRegistry > "u" ? {
        register: ()=>{},
        unregister: ()=>{}
    } : new FinalizationRegistry((e)=>o.__wbg_transactioncontext_free(e >>> 0, 1));
    class cu {
        __destroy_into_raw() {
            const t = this.__wbg_ptr;
            return this.__wbg_ptr = 0, Td.unregister(this), t;
        }
        free() {
            const t = this.__destroy_into_raw();
            o.__wbg_transactioncontext_free(t, 0);
        }
        constructor(t, r, n){
            v(t, Te);
            const s = o.transactioncontext_new(t.__wbg_ptr, r, n);
            if (s[2]) throw l(s[1]);
            return this.__wbg_ptr = s[0] >>> 0, Td.register(this, this.__wbg_ptr, this), this;
        }
        toString(t) {
            let r, n;
            try {
                const s = o.transactioncontext_toString(this.__wbg_ptr, I(t) ? 16777215 : t ? 1 : 0);
                return r = s[0], n = s[1], R(s[0], s[1]);
            } finally{
                o.__wbindgen_free(r, n, 1);
            }
        }
    }
    Symbol.dispose && (cu.prototype[Symbol.dispose] = cu.prototype.free);
    const y_ = typeof FinalizationRegistry > "u" ? {
        register: ()=>{},
        unregister: ()=>{}
    } : new FinalizationRegistry((e)=>o.__wbg_transactioncostmodel_free(e >>> 0, 1));
    class nn {
        static __wrap(t) {
            t = t >>> 0;
            const r = Object.create(nn.prototype);
            return r.__wbg_ptr = t, y_.register(r, r.__wbg_ptr, r), r;
        }
        __destroy_into_raw() {
            const t = this.__wbg_ptr;
            return this.__wbg_ptr = 0, y_.unregister(this), t;
        }
        free() {
            const t = this.__destroy_into_raw();
            o.__wbg_transactioncostmodel_free(t, 0);
        }
        static deserialize(t) {
            const r = o.transactioncostmodel_deserialize(t);
            if (r[2]) throw l(r[1]);
            return nn.__wrap(r[0]);
        }
        get baselineCost() {
            const t = o.transactioncostmodel_baselineCost(this.__wbg_ptr);
            if (t[2]) throw l(t[1]);
            return l(t[0]);
        }
        get runtimeCostModel() {
            const t = o.transactioncostmodel_runtimeCostModel(this.__wbg_ptr);
            return nr.__wrap(t);
        }
        static initialTransactionCostModel() {
            const t = o.transactioncostmodel_initialTransactionCostModel();
            return nn.__wrap(t);
        }
        constructor(){
            const t = o.transactioncostmodel_new();
            if (t[2]) throw l(t[1]);
            return this.__wbg_ptr = t[0] >>> 0, y_.register(this, this.__wbg_ptr, this), this;
        }
        serialize() {
            const t = o.transactioncostmodel_serialize(this.__wbg_ptr);
            if (t[2]) throw l(t[1]);
            return l(t[0]);
        }
        toString(t) {
            let r, n;
            try {
                const s = o.transactioncostmodel_toString(this.__wbg_ptr, I(t) ? 16777215 : t ? 1 : 0);
                return r = s[0], n = s[1], R(s[0], s[1]);
            } finally{
                o.__wbindgen_free(r, n, 1);
            }
        }
    }
    Symbol.dispose && (nn.prototype[Symbol.dispose] = nn.prototype.free);
    const m_ = typeof FinalizationRegistry > "u" ? {
        register: ()=>{},
        unregister: ()=>{}
    } : new FinalizationRegistry((e)=>o.__wbg_transactionresult_free(e >>> 0, 1));
    class Ni {
        static __wrap(t) {
            t = t >>> 0;
            const r = Object.create(Ni.prototype);
            return r.__wbg_ptr = t, m_.register(r, r.__wbg_ptr, r), r;
        }
        __destroy_into_raw() {
            const t = this.__wbg_ptr;
            return this.__wbg_ptr = 0, m_.unregister(this), t;
        }
        free() {
            const t = this.__destroy_into_raw();
            o.__wbg_transactionresult_free(t, 0);
        }
        get successfulSegments() {
            return o.transactionresult_successfulSegments(this.__wbg_ptr);
        }
        constructor(){
            const t = o.transactionresult_new();
            if (t[2]) throw l(t[1]);
            return this.__wbg_ptr = t[0] >>> 0, m_.register(this, this.__wbg_ptr, this), this;
        }
        get error() {
            const t = o.transactionresult_error(this.__wbg_ptr);
            let r;
            return t[0] !== 0 && (r = R(t[0], t[1]).slice(), o.__wbindgen_free(t[0], t[1] * 1, 1)), r;
        }
        get type() {
            let t, r;
            try {
                const n = o.transactionresult_type_(this.__wbg_ptr);
                return t = n[0], r = n[1], R(n[0], n[1]);
            } finally{
                o.__wbindgen_free(t, r, 1);
            }
        }
        get events() {
            const t = o.transactionresult_events(this.__wbg_ptr);
            var r = vt(t[0], t[1]).slice();
            return o.__wbindgen_free(t[0], t[1] * 4, 4), r;
        }
        toString(t) {
            let r, n;
            try {
                const s = o.transactionresult_toString(this.__wbg_ptr, I(t) ? 16777215 : t ? 1 : 0);
                return r = s[0], n = s[1], R(s[0], s[1]);
            } finally{
                o.__wbindgen_free(r, n, 1);
            }
        }
    }
    Symbol.dispose && (Ni.prototype[Symbol.dispose] = Ni.prototype.free);
    const S_ = typeof FinalizationRegistry > "u" ? {
        register: ()=>{},
        unregister: ()=>{}
    } : new FinalizationRegistry((e)=>o.__wbg_unshieldedoffer_free(e >>> 0, 1));
    er = class {
        static __wrap(t) {
            t = t >>> 0;
            const r = Object.create(er.prototype);
            return r.__wbg_ptr = t, S_.register(r, r.__wbg_ptr, r), r;
        }
        __destroy_into_raw() {
            const t = this.__wbg_ptr;
            return this.__wbg_ptr = 0, S_.unregister(this), t;
        }
        free() {
            const t = this.__destroy_into_raw();
            o.__wbg_unshieldedoffer_free(t, 0);
        }
        get signatures() {
            const t = o.unshieldedoffer_signatures(this.__wbg_ptr);
            if (t[3]) throw l(t[2]);
            var r = vt(t[0], t[1]).slice();
            return o.__wbindgen_free(t[0], t[1] * 4, 4), r;
        }
        addSignatures(t) {
            const r = we(t, o.__wbindgen_malloc), n = O, s = o.unshieldedoffer_addSignatures(this.__wbg_ptr, r, n);
            if (s[2]) throw l(s[1]);
            return er.__wrap(s[0]);
        }
        eraseSignatures() {
            const t = o.unshieldedoffer_eraseSignatures(this.__wbg_ptr);
            if (t[2]) throw l(t[1]);
            return er.__wrap(t[0]);
        }
        static new(t, r, n) {
            const s = we(t, o.__wbindgen_malloc), i = O, a = we(r, o.__wbindgen_malloc), _ = O, f = we(n, o.__wbindgen_malloc), g = O, h = o.unshieldedoffer_new(s, i, a, _, f, g);
            if (h[2]) throw l(h[1]);
            return er.__wrap(h[0]);
        }
        get inputs() {
            const t = o.unshieldedoffer_inputs(this.__wbg_ptr);
            if (t[3]) throw l(t[2]);
            var r = vt(t[0], t[1]).slice();
            return o.__wbindgen_free(t[0], t[1] * 4, 4), r;
        }
        get outputs() {
            const t = o.unshieldedoffer_outputs(this.__wbg_ptr);
            if (t[3]) throw l(t[2]);
            var r = vt(t[0], t[1]).slice();
            return o.__wbindgen_free(t[0], t[1] * 4, 4), r;
        }
        constructor(){
            const t = o.unshieldedoffer_construct();
            if (t[2]) throw l(t[1]);
            return this.__wbg_ptr = t[0] >>> 0, S_.register(this, this.__wbg_ptr, this), this;
        }
        toString(t) {
            let r, n;
            try {
                const s = o.unshieldedoffer_toString(this.__wbg_ptr, I(t) ? 16777215 : t ? 1 : 0);
                return r = s[0], n = s[1], R(s[0], s[1]);
            } finally{
                o.__wbindgen_free(r, n, 1);
            }
        }
    };
    Symbol.dispose && (er.prototype[Symbol.dispose] = er.prototype.free);
    const F_ = typeof FinalizationRegistry > "u" ? {
        register: ()=>{},
        unregister: ()=>{}
    } : new FinalizationRegistry((e)=>o.__wbg_utxometa_free(e >>> 0, 1));
    class Bi {
        static __wrap(t) {
            t = t >>> 0;
            const r = Object.create(Bi.prototype);
            return r.__wbg_ptr = t, F_.register(r, r.__wbg_ptr, r), r;
        }
        __destroy_into_raw() {
            const t = this.__wbg_ptr;
            return this.__wbg_ptr = 0, F_.unregister(this), t;
        }
        free() {
            const t = this.__destroy_into_raw();
            o.__wbg_utxometa_free(t, 0);
        }
        constructor(t){
            const r = o.utxometa_new(t);
            return this.__wbg_ptr = r >>> 0, F_.register(this, this.__wbg_ptr, this), this;
        }
        get ctime() {
            return o.utxometa_ctime(this.__wbg_ptr);
        }
        set ctime(t) {
            const r = o.utxometa_set_ctime(this.__wbg_ptr, t);
            if (r[1]) throw l(r[0]);
        }
    }
    Symbol.dispose && (Bi.prototype[Symbol.dispose] = Bi.prototype.free);
    const vd = typeof FinalizationRegistry > "u" ? {
        register: ()=>{},
        unregister: ()=>{}
    } : new FinalizationRegistry((e)=>o.__wbg_utxostate_free(e >>> 0, 1));
    class sn {
        static __wrap(t) {
            t = t >>> 0;
            const r = Object.create(sn.prototype);
            return r.__wbg_ptr = t, vd.register(r, r.__wbg_ptr, r), r;
        }
        __destroy_into_raw() {
            const t = this.__wbg_ptr;
            return this.__wbg_ptr = 0, vd.unregister(this), t;
        }
        free() {
            const t = this.__destroy_into_raw();
            o.__wbg_utxostate_free(t, 0);
        }
        lookupMeta(t) {
            const r = o.utxostate_lookupMeta(this.__wbg_ptr, t);
            if (r[2]) throw l(r[1]);
            return r[0] === 0 ? void 0 : Bi.__wrap(r[0]);
        }
        static new(t) {
            const r = o.utxostate_new(t);
            if (r[2]) throw l(r[1]);
            return sn.__wrap(r[0]);
        }
        delta(t, r) {
            v(t, sn);
            const n = o.utxostate_delta(this.__wbg_ptr, t.__wbg_ptr, I(r) ? 0 : pt(r));
            if (n[2]) throw l(n[1]);
            return l(n[0]);
        }
        get utxos() {
            const t = o.utxostate_utxos(this.__wbg_ptr);
            if (t[2]) throw l(t[1]);
            return l(t[0]);
        }
        filter(t) {
            const r = A(t, o.__wbindgen_malloc, o.__wbindgen_realloc), n = O, s = o.utxostate_filter(this.__wbg_ptr, r, n);
            if (s[2]) throw l(s[1]);
            return l(s[0]);
        }
    }
    Symbol.dispose && (sn.prototype[Symbol.dispose] = sn.prototype.free);
    const Cd = typeof FinalizationRegistry > "u" ? {
        register: ()=>{},
        unregister: ()=>{}
    } : new FinalizationRegistry((e)=>o.__wbg_verifiedtransaction_free(e >>> 0, 1));
    class Es {
        static __wrap(t) {
            t = t >>> 0;
            const r = Object.create(Es.prototype);
            return r.__wbg_ptr = t, Cd.register(r, r.__wbg_ptr, r), r;
        }
        __destroy_into_raw() {
            const t = this.__wbg_ptr;
            return this.__wbg_ptr = 0, Cd.unregister(this), t;
        }
        free() {
            const t = this.__destroy_into_raw();
            o.__wbg_verifiedtransaction_free(t, 0);
        }
        get transaction() {
            const t = o.verifiedtransaction_transaction(this.__wbg_ptr);
            return Tt.__wrap(t);
        }
    }
    Symbol.dispose && (Es.prototype[Symbol.dispose] = Es.prototype.free);
    const k_ = typeof FinalizationRegistry > "u" ? {
        register: ()=>{},
        unregister: ()=>{}
    } : new FinalizationRegistry((e)=>o.__wbg_verifierkeyinsert_free(e >>> 0, 1));
    Is = class {
        static __wrap(t) {
            t = t >>> 0;
            const r = Object.create(Is.prototype);
            return r.__wbg_ptr = t, k_.register(r, r.__wbg_ptr, r), r;
        }
        __destroy_into_raw() {
            const t = this.__wbg_ptr;
            return this.__wbg_ptr = 0, k_.unregister(this), t;
        }
        free() {
            const t = this.__destroy_into_raw();
            o.__wbg_verifierkeyinsert_free(t, 0);
        }
        get vk() {
            const t = o.verifierkeyinsert_vk(this.__wbg_ptr);
            return ds.__wrap(t);
        }
        constructor(t, r){
            v(r, ds);
            const n = o.verifierkeyinsert_new(t, r.__wbg_ptr);
            if (n[2]) throw l(n[1]);
            return this.__wbg_ptr = n[0] >>> 0, k_.register(this, this.__wbg_ptr, this), this;
        }
        get operation() {
            return o.verifierkeyinsert_operation(this.__wbg_ptr);
        }
        toString(t) {
            let r, n;
            try {
                const s = o.verifierkeyinsert_toString(this.__wbg_ptr, I(t) ? 16777215 : t ? 1 : 0);
                return r = s[0], n = s[1], R(s[0], s[1]);
            } finally{
                o.__wbindgen_free(r, n, 1);
            }
        }
    };
    Symbol.dispose && (Is.prototype[Symbol.dispose] = Is.prototype.free);
    const x_ = typeof FinalizationRegistry > "u" ? {
        register: ()=>{},
        unregister: ()=>{}
    } : new FinalizationRegistry((e)=>o.__wbg_verifierkeyremove_free(e >>> 0, 1));
    Rs = class {
        static __wrap(t) {
            t = t >>> 0;
            const r = Object.create(Rs.prototype);
            return r.__wbg_ptr = t, x_.register(r, r.__wbg_ptr, r), r;
        }
        __destroy_into_raw() {
            const t = this.__wbg_ptr;
            return this.__wbg_ptr = 0, x_.unregister(this), t;
        }
        free() {
            const t = this.__destroy_into_raw();
            o.__wbg_verifierkeyremove_free(t, 0);
        }
        constructor(t, r){
            v(r, fs);
            const n = o.verifierkeyremove_new(t, r.__wbg_ptr);
            if (n[2]) throw l(n[1]);
            return this.__wbg_ptr = n[0] >>> 0, x_.register(this, this.__wbg_ptr, this), this;
        }
        get version() {
            const t = o.verifierkeyremove_version(this.__wbg_ptr);
            return fs.__wrap(t);
        }
        get operation() {
            return o.verifierkeyremove_operation(this.__wbg_ptr);
        }
        toString(t) {
            let r, n;
            try {
                const s = o.verifierkeyremove_toString(this.__wbg_ptr, I(t) ? 16777215 : t ? 1 : 0);
                return r = s[0], n = s[1], R(s[0], s[1]);
            } finally{
                o.__wbindgen_free(r, n, 1);
            }
        }
    };
    Symbol.dispose && (Rs.prototype[Symbol.dispose] = Rs.prototype.free);
    typeof FinalizationRegistry > "u" || new FinalizationRegistry((e)=>o.__wbg_vmresults_free(e >>> 0, 1));
    const E_ = typeof FinalizationRegistry > "u" ? {
        register: ()=>{},
        unregister: ()=>{}
    } : new FinalizationRegistry((e)=>o.__wbg_vmstack_free(e >>> 0, 1));
    class Ui {
        static __wrap(t) {
            t = t >>> 0;
            const r = Object.create(Ui.prototype);
            return r.__wbg_ptr = t, E_.register(r, r.__wbg_ptr, r), r;
        }
        __destroy_into_raw() {
            const t = this.__wbg_ptr;
            return this.__wbg_ptr = 0, E_.unregister(this), t;
        }
        free() {
            const t = this.__destroy_into_raw();
            o.__wbg_vmstack_free(t, 0);
        }
        removeLast() {
            o.vmstack_removeLast(this.__wbg_ptr);
        }
        get(t) {
            const r = o.vmstack_get(this.__wbg_ptr, t);
            return r === 0 ? void 0 : Mt.__wrap(r);
        }
        constructor(){
            const t = o.vmstack_new();
            return this.__wbg_ptr = t >>> 0, E_.register(this, this.__wbg_ptr, this), this;
        }
        push(t, r) {
            v(t, Mt), o.vmstack_push(this.__wbg_ptr, t.__wbg_ptr, r);
        }
        length() {
            return o.vmstack_length(this.__wbg_ptr) >>> 0;
        }
        isStrong(t) {
            const r = o.vmstack_isStrong(this.__wbg_ptr, t);
            return r === 16777215 ? void 0 : r !== 0;
        }
        toString(t) {
            let r, n;
            try {
                const s = o.vmstack_toString(this.__wbg_ptr, I(t) ? 16777215 : t ? 1 : 0);
                return r = s[0], n = s[1], R(s[0], s[1]);
            } finally{
                o.__wbindgen_free(r, n, 1);
            }
        }
    }
    Symbol.dispose && (Ui.prototype[Symbol.dispose] = Ui.prototype.free);
    const zd = typeof FinalizationRegistry > "u" ? {
        register: ()=>{},
        unregister: ()=>{}
    } : new FinalizationRegistry((e)=>o.__wbg_wellformedstrictness_free(e >>> 0, 1));
    class _u {
        __destroy_into_raw() {
            const t = this.__wbg_ptr;
            return this.__wbg_ptr = 0, zd.unregister(this), t;
        }
        free() {
            const t = this.__destroy_into_raw();
            o.__wbg_wellformedstrictness_free(t, 0);
        }
        get enforceLimits() {
            return o.wellformedstrictness_enforce_limits(this.__wbg_ptr) !== 0;
        }
        get enforceBalancing() {
            return o.wellformedstrictness_enforce_balancing(this.__wbg_ptr) !== 0;
        }
        get verifySignatures() {
            return o.wellformedstrictness_verify_signatures(this.__wbg_ptr) !== 0;
        }
        set enforceLimits(t) {
            o.wellformedstrictness_set_enforce_limits(this.__wbg_ptr, t);
        }
        get verifyNativeProofs() {
            return o.wellformedstrictness_verify_native_proofs(this.__wbg_ptr) !== 0;
        }
        set enforceBalancing(t) {
            o.wellformedstrictness_set_enforce_balancing(this.__wbg_ptr, t);
        }
        set verifySignatures(t) {
            o.wellformedstrictness_set_verify_signatures(this.__wbg_ptr, t);
        }
        get verifyContractProofs() {
            return o.wellformedstrictness_verify_contract_proofs(this.__wbg_ptr) !== 0;
        }
        set verifyNativeProofs(t) {
            o.wellformedstrictness_set_verify_native_proofs(this.__wbg_ptr, t);
        }
        set verifyContractProofs(t) {
            o.wellformedstrictness_set_verify_contract_proofs(this.__wbg_ptr, t);
        }
        constructor(){
            const t = o.wellformedstrictness_new();
            return this.__wbg_ptr = t >>> 0, zd.register(this, this.__wbg_ptr, this), this;
        }
    }
    Symbol.dispose && (_u.prototype[Symbol.dispose] = _u.prototype.free);
    const I_ = typeof FinalizationRegistry > "u" ? {
        register: ()=>{},
        unregister: ()=>{}
    } : new FinalizationRegistry((e)=>o.__wbg_zswapchainstate_free(e >>> 0, 1));
    he = class {
        static __wrap(t) {
            t = t >>> 0;
            const r = Object.create(he.prototype);
            return r.__wbg_ptr = t, I_.register(r, r.__wbg_ptr, r), r;
        }
        __destroy_into_raw() {
            const t = this.__wbg_ptr;
            return this.__wbg_ptr = 0, I_.unregister(this), t;
        }
        free() {
            const t = this.__destroy_into_raw();
            o.__wbg_zswapchainstate_free(t, 0);
        }
        get firstFree() {
            const t = o.zswapchainstate_firstFree(this.__wbg_ptr);
            return BigInt.asUintN(64, t);
        }
        static deserialize(t) {
            const r = o.zswapchainstate_deserialize(t);
            if (r[2]) throw l(r[1]);
            return he.__wrap(r[0]);
        }
        postBlockUpdate(t) {
            const r = o.zswapchainstate_postBlockUpdate(this.__wbg_ptr, t);
            return he.__wrap(r);
        }
        static deserializeFromLedgerState(t) {
            const r = o.zswapchainstate_deserializeFromLedgerState(t);
            if (r[2]) throw l(r[1]);
            return he.__wrap(r[0]);
        }
        constructor(){
            const t = o.zswapchainstate_new();
            return this.__wbg_ptr = t >>> 0, I_.register(this, this.__wbg_ptr, this), this;
        }
        filter(t) {
            const r = A(t, o.__wbindgen_malloc, o.__wbindgen_realloc), n = O, s = o.zswapchainstate_filter(this.__wbg_ptr, r, n);
            if (s[2]) throw l(s[1]);
            return he.__wrap(s[0]);
        }
        serialize() {
            const t = o.zswapchainstate_serialize(this.__wbg_ptr);
            if (t[2]) throw l(t[1]);
            return l(t[0]);
        }
        toString(t) {
            let r, n;
            try {
                const s = o.zswapchainstate_toString(this.__wbg_ptr, I(t) ? 16777215 : t ? 1 : 0);
                return r = s[0], n = s[1], R(s[0], s[1]);
            } finally{
                o.__wbindgen_free(r, n, 1);
            }
        }
        tryApply(t, r) {
            v(t, Kt);
            const n = o.zswapchainstate_tryApply(this.__wbg_ptr, t.__wbg_ptr, r);
            if (n[2]) throw l(n[1]);
            return l(n[0]);
        }
    };
    Symbol.dispose && (he.prototype[Symbol.dispose] = he.prototype.free);
    const R_ = typeof FinalizationRegistry > "u" ? {
        register: ()=>{},
        unregister: ()=>{}
    } : new FinalizationRegistry((e)=>o.__wbg_zswapinput_free(e >>> 0, 1));
    gr = class {
        static __wrap(t) {
            t = t >>> 0;
            const r = Object.create(gr.prototype);
            return r.__wbg_ptr = t, R_.register(r, r.__wbg_ptr, r), r;
        }
        __destroy_into_raw() {
            const t = this.__wbg_ptr;
            return this.__wbg_ptr = 0, R_.unregister(this), t;
        }
        free() {
            const t = this.__destroy_into_raw();
            o.__wbg_zswapinput_free(t, 0);
        }
        static deserialize(t, r) {
            const n = A(t, o.__wbindgen_malloc, o.__wbindgen_realloc), s = O, i = o.zswapinput_deserialize(n, s, r);
            if (i[2]) throw l(i[1]);
            return gr.__wrap(i[0]);
        }
        get contractAddress() {
            const t = o.zswapinput_contractAddress(this.__wbg_ptr);
            if (t[3]) throw l(t[2]);
            let r;
            return t[0] !== 0 && (r = R(t[0], t[1]).slice(), o.__wbindgen_free(t[0], t[1] * 1, 1)), r;
        }
        static newContractOwned(t, r, n, s) {
            const i = A(n, o.__wbindgen_malloc, o.__wbindgen_realloc), a = O;
            v(s, he);
            const _ = o.zswapinput_newContractOwned(t, I(r) ? 16777215 : r, i, a, s.__wbg_ptr);
            if (_[2]) throw l(_[1]);
            return gr.__wrap(_[0]);
        }
        constructor(){
            const t = o.zswapinput_new();
            if (t[2]) throw l(t[1]);
            return this.__wbg_ptr = t[0] >>> 0, R_.register(this, this.__wbg_ptr, this), this;
        }
        get proof() {
            const t = o.zswapinput_proof(this.__wbg_ptr);
            if (t[2]) throw l(t[1]);
            return l(t[0]);
        }
        get nullifier() {
            let t, r;
            try {
                const i = o.zswapinput_nullifier(this.__wbg_ptr);
                var n = i[0], s = i[1];
                if (i[3]) throw n = 0, s = 0, l(i[2]);
                return t = n, r = s, R(n, s);
            } finally{
                o.__wbindgen_free(t, r, 1);
            }
        }
        serialize() {
            const t = o.zswapinput_serialize(this.__wbg_ptr);
            if (t[2]) throw l(t[1]);
            return l(t[0]);
        }
        toString(t) {
            let r, n;
            try {
                const s = o.zswapinput_toString(this.__wbg_ptr, I(t) ? 16777215 : t ? 1 : 0);
                return r = s[0], n = s[1], R(s[0], s[1]);
            } finally{
                o.__wbindgen_free(r, n, 1);
            }
        }
    };
    Symbol.dispose && (gr.prototype[Symbol.dispose] = gr.prototype.free);
    const O_ = typeof FinalizationRegistry > "u" ? {
        register: ()=>{},
        unregister: ()=>{}
    } : new FinalizationRegistry((e)=>o.__wbg_zswaplocalstate_free(e >>> 0, 1));
    class Gt {
        static __wrap(t) {
            t = t >>> 0;
            const r = Object.create(Gt.prototype);
            return r.__wbg_ptr = t, O_.register(r, r.__wbg_ptr, r), r;
        }
        __destroy_into_raw() {
            const t = this.__wbg_ptr;
            return this.__wbg_ptr = 0, O_.unregister(this), t;
        }
        free() {
            const t = this.__destroy_into_raw();
            o.__wbg_zswaplocalstate_free(t, 0);
        }
        get firstFree() {
            const t = o.zswaplocalstate_firstFree(this.__wbg_ptr);
            return BigInt.asUintN(64, t);
        }
        static deserialize(t) {
            const r = o.zswaplocalstate_deserialize(t);
            if (r[2]) throw l(r[1]);
            return Gt.__wrap(r[0]);
        }
        insertCoin(t, r) {
            v(t, fe);
            const n = o.zswaplocalstate_insertCoin(this.__wbg_ptr, t.__wbg_ptr, r);
            if (n[2]) throw l(n[1]);
            return Gt.__wrap(n[0]);
        }
        applyFailed(t) {
            v(t, Kt);
            const r = o.zswaplocalstate_applyFailed(this.__wbg_ptr, t.__wbg_ptr);
            return Gt.__wrap(r);
        }
        clearPending(t) {
            const r = o.zswaplocalstate_clearPending(this.__wbg_ptr, t);
            return Gt.__wrap(r);
        }
        replayEvents(t, r) {
            v(t, fe);
            const n = we(r, o.__wbindgen_malloc), s = O, i = o.zswaplocalstate_replayEvents(this.__wbg_ptr, t.__wbg_ptr, n, s);
            if (i[2]) throw l(i[1]);
            return Gt.__wrap(i[0]);
        }
        get pendingSpends() {
            const t = o.zswaplocalstate_pendingSpends(this.__wbg_ptr);
            if (t[2]) throw l(t[1]);
            return l(t[0]);
        }
        get pendingOutputs() {
            const t = o.zswaplocalstate_pendingOutputs(this.__wbg_ptr);
            if (t[2]) throw l(t[1]);
            return l(t[0]);
        }
        get merkleTreeRoot() {
            return o.zswaplocalstate_merkle_tree_root(this.__wbg_ptr);
        }
        replayRawEvents(t, r) {
            v(t, fe);
            const n = Ep(r, o.__wbindgen_malloc), s = O, i = o.zswaplocalstate_replayRawEvents(this.__wbg_ptr, t.__wbg_ptr, n, s);
            if (i[2]) throw l(i[1]);
            return on.__wrap(i[0]);
        }
        spendFromOutput(t, r, n, s, i) {
            v(t, fe), v(s, Ce);
            const a = o.zswaplocalstate_spendFromOutput(this.__wbg_ptr, t.__wbg_ptr, r, I(n) ? 16777215 : n, s.__wbg_ptr, I(i) ? 0 : pt(i));
            if (a[2]) throw l(a[1]);
            return l(a[0]);
        }
        applyWithChanges(t, r) {
            v(t, fe), v(r, Kt);
            const n = o.zswaplocalstate_applyWithChanges(this.__wbg_ptr, t.__wbg_ptr, r.__wbg_ptr);
            if (n[2]) throw l(n[1]);
            return on.__wrap(n[0]);
        }
        revertTransaction(t) {
            v(t, Tt);
            const r = o.zswaplocalstate_revertTransaction(this.__wbg_ptr, t.__wbg_ptr);
            return Gt.__wrap(r);
        }
        applyCollapsedUpdate(t) {
            v(t, ws);
            const r = o.zswaplocalstate_applyCollapsedUpdate(this.__wbg_ptr, t.__wbg_ptr);
            if (r[2]) throw l(r[1]);
            return Gt.__wrap(r[0]);
        }
        removeCoinByNullifier(t) {
            const r = A(t, o.__wbindgen_malloc, o.__wbindgen_realloc), n = O, s = o.zswaplocalstate_removeCoinByNullifier(this.__wbg_ptr, r, n);
            if (s[2]) throw l(s[1]);
            return Gt.__wrap(s[0]);
        }
        replayEventsWithChanges(t, r) {
            v(t, fe);
            const n = we(r, o.__wbindgen_malloc), s = O, i = o.zswaplocalstate_replayEventsWithChanges(this.__wbg_ptr, t.__wbg_ptr, n, s);
            if (i[2]) throw l(i[1]);
            return on.__wrap(i[0]);
        }
        constructor(){
            const t = o.zswaplocalstate_new();
            return this.__wbg_ptr = t >>> 0, O_.register(this, this.__wbg_ptr, this), this;
        }
        apply(t, r) {
            v(t, fe), v(r, Kt);
            const n = o.zswaplocalstate_apply(this.__wbg_ptr, t.__wbg_ptr, r.__wbg_ptr);
            if (n[2]) throw l(n[1]);
            return Gt.__wrap(n[0]);
        }
        get coins() {
            const t = o.zswaplocalstate_coins(this.__wbg_ptr);
            if (t[2]) throw l(t[1]);
            return l(t[0]);
        }
        spend(t, r, n, s) {
            v(t, fe);
            const i = o.zswaplocalstate_spend(this.__wbg_ptr, t.__wbg_ptr, r, I(n) ? 16777215 : n, I(s) ? 0 : pt(s));
            if (i[2]) throw l(i[1]);
            return l(i[0]);
        }
        serialize() {
            const t = o.zswaplocalstate_serialize(this.__wbg_ptr);
            if (t[2]) throw l(t[1]);
            return l(t[0]);
        }
        toString(t) {
            let r, n;
            try {
                const s = o.zswaplocalstate_toString(this.__wbg_ptr, I(t) ? 16777215 : t ? 1 : 0);
                return r = s[0], n = s[1], R(s[0], s[1]);
            } finally{
                o.__wbindgen_free(r, n, 1);
            }
        }
        watchFor(t, r) {
            const n = A(t, o.__wbindgen_malloc, o.__wbindgen_realloc), s = O, i = o.zswaplocalstate_watchFor(this.__wbg_ptr, n, s, r);
            if (i[2]) throw l(i[1]);
            return Gt.__wrap(i[0]);
        }
    }
    Symbol.dispose && (Gt.prototype[Symbol.dispose] = Gt.prototype.free);
    const Ad = typeof FinalizationRegistry > "u" ? {
        register: ()=>{},
        unregister: ()=>{}
    } : new FinalizationRegistry((e)=>o.__wbg_zswaplocalstatewithchanges_free(e >>> 0, 1));
    class on {
        static __wrap(t) {
            t = t >>> 0;
            const r = Object.create(on.prototype);
            return r.__wbg_ptr = t, Ad.register(r, r.__wbg_ptr, r), r;
        }
        __destroy_into_raw() {
            const t = this.__wbg_ptr;
            return this.__wbg_ptr = 0, Ad.unregister(this), t;
        }
        free() {
            const t = this.__destroy_into_raw();
            o.__wbg_zswaplocalstatewithchanges_free(t, 0);
        }
        get state() {
            const t = o.zswaplocalstatewithchanges_state(this.__wbg_ptr);
            return Gt.__wrap(t);
        }
        get changes() {
            const t = o.zswaplocalstatewithchanges_changes(this.__wbg_ptr);
            var r = vt(t[0], t[1]).slice();
            return o.__wbindgen_free(t[0], t[1] * 4, 4), r;
        }
    }
    Symbol.dispose && (on.prototype[Symbol.dispose] = on.prototype.free);
    const T_ = typeof FinalizationRegistry > "u" ? {
        register: ()=>{},
        unregister: ()=>{}
    } : new FinalizationRegistry((e)=>o.__wbg_zswapoffer_free(e >>> 0, 1));
    Kt = class {
        static __wrap(t) {
            t = t >>> 0;
            const r = Object.create(Kt.prototype);
            return r.__wbg_ptr = t, T_.register(r, r.__wbg_ptr, r), r;
        }
        __destroy_into_raw() {
            const t = this.__wbg_ptr;
            return this.__wbg_ptr = 0, T_.unregister(this), t;
        }
        free() {
            const t = this.__destroy_into_raw();
            o.__wbg_zswapoffer_free(t, 0);
        }
        static fromInput(t, r, n) {
            v(t, gr);
            var s = I(r) ? 0 : A(r, o.__wbindgen_malloc, o.__wbindgen_realloc), i = O;
            const a = o.zswapoffer_fromInput(t.__wbg_ptr, s, i, I(n) ? 0 : pt(n));
            if (a[2]) throw l(a[1]);
            return Kt.__wrap(a[0]);
        }
        get transients() {
            const t = o.zswapoffer_transients(this.__wbg_ptr);
            var r = vt(t[0], t[1]).slice();
            return o.__wbindgen_free(t[0], t[1] * 4, 4), r;
        }
        static deserialize(t, r) {
            const n = A(t, o.__wbindgen_malloc, o.__wbindgen_realloc), s = O, i = o.zswapoffer_deserialize(n, s, r);
            if (i[2]) throw l(i[1]);
            return Kt.__wrap(i[0]);
        }
        static fromOutput(t, r, n) {
            v(t, Ce);
            var s = I(r) ? 0 : A(r, o.__wbindgen_malloc, o.__wbindgen_realloc), i = O;
            const a = o.zswapoffer_fromOutput(t.__wbg_ptr, s, i, I(n) ? 0 : pt(n));
            if (a[2]) throw l(a[1]);
            return Kt.__wrap(a[0]);
        }
        static fromTransient(t) {
            v(t, pr);
            const r = o.zswapoffer_fromTransient(t.__wbg_ptr);
            if (r[2]) throw l(r[1]);
            return Kt.__wrap(r[0]);
        }
        constructor(){
            const t = o.zswapoffer_new();
            if (t[2]) throw l(t[1]);
            return this.__wbg_ptr = t[0] >>> 0, T_.register(this, this.__wbg_ptr, this), this;
        }
        merge(t) {
            v(t, Kt);
            const r = o.zswapoffer_merge(this.__wbg_ptr, t.__wbg_ptr);
            if (r[2]) throw l(r[1]);
            return Kt.__wrap(r[0]);
        }
        get deltas() {
            const t = o.zswapoffer_deltas(this.__wbg_ptr);
            if (t[2]) throw l(t[1]);
            return l(t[0]);
        }
        get inputs() {
            const t = o.zswapoffer_inputs(this.__wbg_ptr);
            var r = vt(t[0], t[1]).slice();
            return o.__wbindgen_free(t[0], t[1] * 4, 4), r;
        }
        get outputs() {
            const t = o.zswapoffer_outputs(this.__wbg_ptr);
            var r = vt(t[0], t[1]).slice();
            return o.__wbindgen_free(t[0], t[1] * 4, 4), r;
        }
        serialize() {
            const t = o.zswapoffer_serialize(this.__wbg_ptr);
            if (t[2]) throw l(t[1]);
            return l(t[0]);
        }
        toString(t) {
            let r, n;
            try {
                const s = o.zswapoffer_toString(this.__wbg_ptr, I(t) ? 16777215 : t ? 1 : 0);
                return r = s[0], n = s[1], R(s[0], s[1]);
            } finally{
                o.__wbindgen_free(r, n, 1);
            }
        }
    };
    Symbol.dispose && (Kt.prototype[Symbol.dispose] = Kt.prototype.free);
    const v_ = typeof FinalizationRegistry > "u" ? {
        register: ()=>{},
        unregister: ()=>{}
    } : new FinalizationRegistry((e)=>o.__wbg_zswapoutput_free(e >>> 0, 1));
    Ce = class {
        static __wrap(t) {
            t = t >>> 0;
            const r = Object.create(Ce.prototype);
            return r.__wbg_ptr = t, v_.register(r, r.__wbg_ptr, r), r;
        }
        __destroy_into_raw() {
            const t = this.__wbg_ptr;
            return this.__wbg_ptr = 0, v_.unregister(this), t;
        }
        free() {
            const t = this.__destroy_into_raw();
            o.__wbg_zswapoutput_free(t, 0);
        }
        get commitment() {
            let t, r;
            try {
                const i = o.zswapoutput_commitment(this.__wbg_ptr);
                var n = i[0], s = i[1];
                if (i[3]) throw n = 0, s = 0, l(i[2]);
                return t = n, r = s, R(n, s);
            } finally{
                o.__wbindgen_free(t, r, 1);
            }
        }
        static deserialize(t, r) {
            const n = A(t, o.__wbindgen_malloc, o.__wbindgen_realloc), s = O, i = o.zswapoutput_deserialize(n, s, r);
            if (i[2]) throw l(i[1]);
            return Ce.__wrap(i[0]);
        }
        get contractAddress() {
            const t = o.zswapoutput_contractAddress(this.__wbg_ptr);
            if (t[3]) throw l(t[2]);
            let r;
            return t[0] !== 0 && (r = R(t[0], t[1]).slice(), o.__wbindgen_free(t[0], t[1] * 1, 1)), r;
        }
        static newContractOwned(t, r, n) {
            const s = A(n, o.__wbindgen_malloc, o.__wbindgen_realloc), i = O, a = o.zswapoutput_newContractOwned(t, I(r) ? 16777215 : r, s, i);
            if (a[2]) throw l(a[1]);
            return Ce.__wrap(a[0]);
        }
        static new(t, r, n, s) {
            const i = A(n, o.__wbindgen_malloc, o.__wbindgen_realloc), a = O, _ = A(s, o.__wbindgen_malloc, o.__wbindgen_realloc), f = O, g = o.zswapoutput_new(t, I(r) ? 16777215 : r, i, a, _, f);
            if (g[2]) throw l(g[1]);
            return Ce.__wrap(g[0]);
        }
        get proof() {
            const t = o.zswapoutput_proof(this.__wbg_ptr);
            if (t[2]) throw l(t[1]);
            return l(t[0]);
        }
        constructor(){
            const t = o.zswapoutput_construct();
            if (t[2]) throw l(t[1]);
            return this.__wbg_ptr = t[0] >>> 0, v_.register(this, this.__wbg_ptr, this), this;
        }
        serialize() {
            const t = o.zswapoutput_serialize(this.__wbg_ptr);
            if (t[2]) throw l(t[1]);
            return l(t[0]);
        }
        toString(t) {
            let r, n;
            try {
                const s = o.zswapoutput_toString(this.__wbg_ptr, I(t) ? 16777215 : t ? 1 : 0);
                return r = s[0], n = s[1], R(s[0], s[1]);
            } finally{
                o.__wbindgen_free(r, n, 1);
            }
        }
    };
    Symbol.dispose && (Ce.prototype[Symbol.dispose] = Ce.prototype.free);
    const C_ = typeof FinalizationRegistry > "u" ? {
        register: ()=>{},
        unregister: ()=>{}
    } : new FinalizationRegistry((e)=>o.__wbg_zswapsecretkeys_free(e >>> 0, 1));
    class fe {
        static __wrap(t) {
            t = t >>> 0;
            const r = Object.create(fe.prototype);
            return r.__wbg_ptr = t, C_.register(r, r.__wbg_ptr, r), r;
        }
        __destroy_into_raw() {
            const t = this.__wbg_ptr;
            return this.__wbg_ptr = 0, C_.unregister(this), t;
        }
        free() {
            const t = this.__destroy_into_raw();
            o.__wbg_zswapsecretkeys_free(t, 0);
        }
        static fromSeedRng(t) {
            const r = o.zswapsecretkeys_fromSeedRng(t);
            if (r[2]) throw l(r[1]);
            return fe.__wrap(r[0]);
        }
        get coinPublicKey() {
            let t, r;
            try {
                const i = o.zswapsecretkeys_coinPublicKey(this.__wbg_ptr);
                var n = i[0], s = i[1];
                if (i[3]) throw n = 0, s = 0, l(i[2]);
                return t = n, r = s, R(n, s);
            } finally{
                o.__wbindgen_free(t, r, 1);
            }
        }
        get coinSecretKey() {
            const t = o.zswapsecretkeys_coinSecretKey(this.__wbg_ptr);
            if (t[2]) throw l(t[1]);
            return Ai.__wrap(t[0]);
        }
        get encryptionPublicKey() {
            let t, r;
            try {
                const i = o.zswapsecretkeys_encryptionPublicKey(this.__wbg_ptr);
                var n = i[0], s = i[1];
                if (i[3]) throw n = 0, s = 0, l(i[2]);
                return t = n, r = s, R(n, s);
            } finally{
                o.__wbindgen_free(t, r, 1);
            }
        }
        get encryptionSecretKey() {
            const t = o.zswapsecretkeys_encryptionSecretKey(this.__wbg_ptr);
            if (t[2]) throw l(t[1]);
            return rn.__wrap(t[0]);
        }
        constructor(){
            const t = o.zswapsecretkeys_new();
            if (t[2]) throw l(t[1]);
            return this.__wbg_ptr = t[0] >>> 0, C_.register(this, this.__wbg_ptr, this), this;
        }
        clear() {
            o.zswapsecretkeys_clear(this.__wbg_ptr);
        }
        static fromSeed(t) {
            const r = o.zswapsecretkeys_fromSeed(t);
            if (r[2]) throw l(r[1]);
            return fe.__wrap(r[0]);
        }
    }
    Symbol.dispose && (fe.prototype[Symbol.dispose] = fe.prototype.free);
    const $d = typeof FinalizationRegistry > "u" ? {
        register: ()=>{},
        unregister: ()=>{}
    } : new FinalizationRegistry((e)=>o.__wbg_zswapstatechanges_free(e >>> 0, 1));
    class ji {
        static __wrap(t) {
            t = t >>> 0;
            const r = Object.create(ji.prototype);
            return r.__wbg_ptr = t, $d.register(r, r.__wbg_ptr, r), r;
        }
        __destroy_into_raw() {
            const t = this.__wbg_ptr;
            return this.__wbg_ptr = 0, $d.unregister(this), t;
        }
        free() {
            const t = this.__destroy_into_raw();
            o.__wbg_zswapstatechanges_free(t, 0);
        }
        get spentCoins() {
            const t = o.zswapstatechanges_spentCoins(this.__wbg_ptr);
            if (t[2]) throw l(t[1]);
            return l(t[0]);
        }
        get receivedCoins() {
            const t = o.zswapstatechanges_receivedCoins(this.__wbg_ptr);
            if (t[2]) throw l(t[1]);
            return l(t[0]);
        }
        get source() {
            let t, r;
            try {
                const i = o.zswapstatechanges_source(this.__wbg_ptr);
                var n = i[0], s = i[1];
                if (i[3]) throw n = 0, s = 0, l(i[2]);
                return t = n, r = s, R(n, s);
            } finally{
                o.__wbindgen_free(t, r, 1);
            }
        }
    }
    Symbol.dispose && (ji.prototype[Symbol.dispose] = ji.prototype.free);
    const z_ = typeof FinalizationRegistry > "u" ? {
        register: ()=>{},
        unregister: ()=>{}
    } : new FinalizationRegistry((e)=>o.__wbg_zswaptransient_free(e >>> 0, 1));
    pr = class {
        static __wrap(t) {
            t = t >>> 0;
            const r = Object.create(pr.prototype);
            return r.__wbg_ptr = t, z_.register(r, r.__wbg_ptr, r), r;
        }
        __destroy_into_raw() {
            const t = this.__wbg_ptr;
            return this.__wbg_ptr = 0, z_.unregister(this), t;
        }
        free() {
            const t = this.__destroy_into_raw();
            o.__wbg_zswaptransient_free(t, 0);
        }
        get commitment() {
            let t, r;
            try {
                const i = o.zswaptransient_commitment(this.__wbg_ptr);
                var n = i[0], s = i[1];
                if (i[3]) throw n = 0, s = 0, l(i[2]);
                return t = n, r = s, R(n, s);
            } finally{
                o.__wbindgen_free(t, r, 1);
            }
        }
        static deserialize(t, r) {
            const n = A(t, o.__wbindgen_malloc, o.__wbindgen_realloc), s = O, i = o.zswaptransient_deserialize(n, s, r);
            if (i[2]) throw l(i[1]);
            return pr.__wrap(i[0]);
        }
        get inputProof() {
            const t = o.zswaptransient_inputProof(this.__wbg_ptr);
            if (t[2]) throw l(t[1]);
            return l(t[0]);
        }
        get outputProof() {
            const t = o.zswaptransient_outputProof(this.__wbg_ptr);
            if (t[2]) throw l(t[1]);
            return l(t[0]);
        }
        get contractAddress() {
            const t = o.zswaptransient_contractAddress(this.__wbg_ptr);
            if (t[3]) throw l(t[2]);
            let r;
            return t[0] !== 0 && (r = R(t[0], t[1]).slice(), o.__wbindgen_free(t[0], t[1] * 1, 1)), r;
        }
        static newFromContractOwnedOutput(t, r, n) {
            v(n, Ce);
            const s = o.zswaptransient_newFromContractOwnedOutput(t, I(r) ? 16777215 : r, n.__wbg_ptr);
            if (s[2]) throw l(s[1]);
            return pr.__wrap(s[0]);
        }
        constructor(){
            const t = o.zswaptransient_new();
            if (t[2]) throw l(t[1]);
            return this.__wbg_ptr = t[0] >>> 0, z_.register(this, this.__wbg_ptr, this), this;
        }
        get nullifier() {
            let t, r;
            try {
                const i = o.zswaptransient_nullifier(this.__wbg_ptr);
                var n = i[0], s = i[1];
                if (i[3]) throw n = 0, s = 0, l(i[2]);
                return t = n, r = s, R(n, s);
            } finally{
                o.__wbindgen_free(t, r, 1);
            }
        }
        serialize() {
            const t = o.zswaptransient_serialize(this.__wbg_ptr);
            if (t[2]) throw l(t[1]);
            return l(t[0]);
        }
        toString(t) {
            let r, n;
            try {
                const s = o.zswaptransient_toString(this.__wbg_ptr, I(t) ? 16777215 : t ? 1 : 0);
                return r = s[0], n = s[1], R(s[0], s[1]);
            } finally{
                o.__wbindgen_free(r, n, 1);
            }
        }
    };
    Symbol.dispose && (pr.prototype[Symbol.dispose] = pr.prototype.free);
    function c0() {
        return Zt(function(e) {
            return BigInt(e);
        }, arguments);
    }
    function _0(e) {
        return BigInt(e);
    }
    function u0(e, t) {
        return Error(R(e, t));
    }
    function l0(e) {
        return Number(e);
    }
    function f0(e, t) {
        const r = String(t), n = A(r, o.__wbindgen_malloc, o.__wbindgen_realloc), s = O;
        ze().setInt32(e + 4 * 1, s, !0), ze().setInt32(e + 4 * 0, n, !0);
    }
    function d0(e, t) {
        return e.add(t);
    }
    function g0(e) {
        return ls.__wrap(e);
    }
    function p0(e) {
        return e.buffer;
    }
    function h0(e) {
        const t = e.byobRequest;
        return I(t) ? 0 : pt(t);
    }
    function w0(e) {
        return e.byteLength;
    }
    function b0(e) {
        return e.byteOffset;
    }
    function y0() {
        return Zt(function(e, t) {
            return e.call(t);
        }, arguments);
    }
    function m0() {
        return Zt(function(e, t, r, n) {
            return e.call(t, r, n);
        }, arguments);
    }
    function S0() {
        return Zt(function(e, t, r) {
            return e.call(t, r);
        }, arguments);
    }
    function F0() {
        return Zt(function(e, t, r, n, s) {
            return e.call(t, r, n, s);
        }, arguments);
    }
    function k0() {
        return Zt(function(e) {
            e.close();
        }, arguments);
    }
    function x0() {
        return Zt(function(e) {
            e.close();
        }, arguments);
    }
    function E0(e) {
        return gn.__wrap(e);
    }
    function I0(e) {
        return pn.__wrap(e);
    }
    function R0(e) {
        return Fr.__wrap(e);
    }
    function O0(e) {
        return e.crypto;
    }
    function T0(e, t) {
        return e.delete(t);
    }
    function v0(e) {
        return e.done;
    }
    function C0(e) {
        return hn.__wrap(e);
    }
    function z0(e) {
        return $t.__wrap(e);
    }
    function A0(e) {
        return bn.__wrap(e);
    }
    function $0(e) {
        return ps.__wrap(e);
    }
    function P0(e) {
        return $i.__wrap(e);
    }
    function M0() {
        return Zt(function(e, t) {
            e.enqueue(t);
        }, arguments);
    }
    function N0(e) {
        return Object.entries(e);
    }
    function B0(e) {
        return zr.__wrap(e);
    }
    function U0(e) {
        return zr.__unwrap(e);
    }
    function j0(e, t, r) {
        try {
            var n = {
                a: t,
                b: r
            }, s = (i, a, _)=>{
                const f = n.a;
                n.a = 0;
                try {
                    return a0(f, n.b, i, a, _);
                } finally{
                    n.a = f;
                }
            };
            e.forEach(s);
        } finally{
            n.a = n.b = 0;
        }
    }
    function L0(e, t, r) {
        try {
            var n = {
                a: t,
                b: r
            }, s = (i, a)=>{
                const _ = n.a;
                n.a = 0;
                try {
                    return Ip(_, n.b, i, a);
                } finally{
                    n.a = _;
                }
            };
            e.forEach(s);
        } finally{
            n.a = n.b = 0;
        }
    }
    function K0(e) {
        return Array.from(e);
    }
    function D0() {
        return Zt(function(e) {
            return Reflect.getPrototypeOf(e);
        }, arguments);
    }
    function q0() {
        return Zt(function(e, t) {
            e.getRandomValues(t);
        }, arguments);
    }
    function V0(e) {
        return e.getTime();
    }
    function H0(e, t) {
        return e[t >>> 0];
    }
    function J0() {
        return Zt(function(e, t) {
            return Reflect.get(e, t);
        }, arguments);
    }
    function W0(e, t) {
        return e.get(t);
    }
    function G0(e, t) {
        return e[t];
    }
    function Y0(e, t) {
        return e.has(t);
    }
    function X0(e) {
        let t;
        try {
            t = e instanceof ArrayBuffer;
        } catch  {
            t = !1;
        }
        return t;
    }
    function Q0(e) {
        let t;
        try {
            t = e instanceof Date;
        } catch  {
            t = !1;
        }
        return t;
    }
    function Z0(e) {
        let t;
        try {
            t = e instanceof Map;
        } catch  {
            t = !1;
        }
        return t;
    }
    function t1(e) {
        let t;
        try {
            t = e instanceof Promise;
        } catch  {
            t = !1;
        }
        return t;
    }
    function e1(e) {
        let t;
        try {
            t = e instanceof Set;
        } catch  {
            t = !1;
        }
        return t;
    }
    function r1(e) {
        let t;
        try {
            t = e instanceof Uint8Array;
        } catch  {
            t = !1;
        }
        return t;
    }
    function n1(e) {
        return le.__wrap(e);
    }
    function s1(e) {
        return Array.isArray(e);
    }
    function i1(e) {
        return Number.isSafeInteger(e);
    }
    function o1() {
        return Symbol.iterator;
    }
    function a1(e) {
        return e.keys();
    }
    function c1(e) {
        return Te.__wrap(e);
    }
    function _1(e) {
        return e.length;
    }
    function u1(e) {
        return e.length;
    }
    function l1(e) {
        return Ur.__wrap(e);
    }
    function f1(e) {
        return e.msCrypto;
    }
    function d1() {
        return new Date;
    }
    function g1(e) {
        return new Set(e);
    }
    function p1() {
        return new Object;
    }
    function h1() {
        return new Array;
    }
    function w1(e, t) {
        try {
            var r = {
                a: e,
                b: t
            }, n = (i, a)=>{
                const _ = r.a;
                r.a = 0;
                try {
                    return Ip(_, r.b, i, a);
                } finally{
                    r.a = _;
                }
            };
            return new Promise(n);
        } finally{
            r.a = r.b = 0;
        }
    }
    function b1() {
        return new Map;
    }
    function y1(e) {
        return new Uint8Array(e);
    }
    function m1(e, t) {
        return new Error(R(e, t));
    }
    function S1(e, t) {
        return new Uint8Array(Pa(e, t));
    }
    function F1(e, t) {
        return new Function(R(e, t));
    }
    function k1(e, t, r) {
        return new Uint8Array(e, t >>> 0, r >>> 0);
    }
    function x1(e) {
        return new Uint8Array(e >>> 0);
    }
    function E1(e) {
        return e.next;
    }
    function I1() {
        return Zt(function(e) {
            return e.next();
        }, arguments);
    }
    function R1(e) {
        return bs.__wrap(e);
    }
    function O1(e) {
        return e.node;
    }
    function T1(e) {
        return Pi.__wrap(e);
    }
    function v1(e) {
        return ys.__wrap(e);
    }
    function C1(e) {
        return ms.__wrap(e);
    }
    function z1(e) {
        return e.process;
    }
    function A1(e) {
        return Ss.__wrap(e);
    }
    function $1(e, t, r) {
        Uint8Array.prototype.set.call(Pa(e, t), r);
    }
    function P1(e, t) {
        return e.push(t);
    }
    function M1(e) {
        queueMicrotask(e);
    }
    function N1(e) {
        return e.queueMicrotask;
    }
    function B1() {
        return Zt(function(e, t) {
            e.randomFillSync(t);
        }, arguments);
    }
    function U1(e) {
        return Fs.__wrap(e);
    }
    function j1() {
        return Zt(function() {
            return module.require;
        }, arguments);
    }
    function L1(e) {
        return Promise.resolve(e);
    }
    function K1() {
        return Zt(function(e, t) {
            e.respond(t >>> 0);
        }, arguments);
    }
    function D1(e, t) {
        return e.setTime(t);
    }
    function q1(e, t, r) {
        e.set(Pa(t, r));
    }
    function V1(e, t, r) {
        e[t] = r;
    }
    function H1(e, t, r) {
        e[t >>> 0] = r;
    }
    function J1(e, t, r) {
        return e.set(t, r);
    }
    function W1(e) {
        return mn.__wrap(e);
    }
    function G1(e) {
        return ks.__wrap(e);
    }
    function Y1(e) {
        return e.size;
    }
    function X1(e) {
        return Mt.__wrap(e);
    }
    function Q1() {
        const e = typeof global > "u" ? null : global;
        return I(e) ? 0 : pt(e);
    }
    function Z1() {
        const e = typeof globalThis > "u" ? null : globalThis;
        return I(e) ? 0 : pt(e);
    }
    function tS() {
        const e = typeof self > "u" ? null : self;
        return I(e) ? 0 : pt(e);
    }
    function eS() {
        const e = typeof window > "u" ? null : window;
        return I(e) ? 0 : pt(e);
    }
    function rS(e, t, r) {
        return e.subarray(t >>> 0, r >>> 0);
    }
    function nS(e, t, r) {
        return e.then(t, r);
    }
    function sS(e, t) {
        return e.then(t);
    }
    function iS() {
        return Zt(function(e, t) {
            return e.toString(t);
        }, arguments);
    }
    function oS(e) {
        return e.toString();
    }
    function aS(e) {
        return Tt.__wrap(e);
    }
    function cS(e) {
        return Ni.__wrap(e);
    }
    function _S(e) {
        return e.valueOf();
    }
    function uS(e) {
        return e.value;
    }
    function lS(e) {
        return Is.__wrap(e);
    }
    function fS(e) {
        return Rs.__wrap(e);
    }
    function dS(e) {
        return e.versions;
    }
    function gS(e) {
        const t = e.view;
        return I(t) ? 0 : pt(t);
    }
    function pS(e, t) {
        const r = t, n = typeof r == "bigint" ? r : void 0;
        ze().setBigInt64(e + 8 * 1, I(n) ? BigInt(0) : n, !0), ze().setInt32(e + 4 * 0, !I(n), !0);
    }
    function hS(e) {
        const t = e, r = typeof t == "boolean" ? t : void 0;
        return I(r) ? 16777215 : r ? 1 : 0;
    }
    function wS(e) {
        const t = e.original;
        return t.cnt-- == 1 ? (t.a = 0, !0) : !1;
    }
    function bS(e, t) {
        const r = iu(t), n = A(r, o.__wbindgen_malloc, o.__wbindgen_realloc), s = O;
        ze().setInt32(e + 4 * 1, s, !0), ze().setInt32(e + 4 * 0, n, !0);
    }
    function yS(e, t) {
        return e in t;
    }
    function mS(e) {
        return typeof e == "bigint";
    }
    function SS(e) {
        return typeof e == "function";
    }
    function FS(e) {
        return e === null;
    }
    function kS(e) {
        const t = e;
        return typeof t == "object" && t !== null;
    }
    function xS(e) {
        return typeof e == "string";
    }
    function ES(e) {
        return e === void 0;
    }
    function IS(e, t) {
        return e === t;
    }
    function RS(e, t) {
        return e == t;
    }
    function OS(e, t) {
        const r = t, n = typeof r == "number" ? r : void 0;
        ze().setFloat64(e + 8 * 1, I(n) ? 0 : n, !0), ze().setInt32(e + 4 * 0, !I(n), !0);
    }
    function TS(e, t) {
        return e >> t;
    }
    function vS(e, t) {
        const r = t, n = typeof r == "string" ? r : void 0;
        var s = I(n) ? 0 : A(n, o.__wbindgen_malloc, o.__wbindgen_realloc), i = O;
        ze().setInt32(e + 4 * 1, i, !0), ze().setInt32(e + 4 * 0, s, !0);
    }
    function CS(e, t) {
        throw new Error(R(e, t));
    }
    function zS(e) {
        return he.__wrap(e);
    }
    function AS(e) {
        return gr.__wrap(e);
    }
    function $S(e) {
        return Gt.__wrap(e);
    }
    function PS(e) {
        return Kt.__wrap(e);
    }
    function MS(e) {
        return Ce.__wrap(e);
    }
    function NS(e) {
        return ji.__wrap(e);
    }
    function BS(e) {
        return pr.__wrap(e);
    }
    function US(e, t) {
        var r = vt(e, t).slice();
        return o.__wbindgen_free(e, t * 4, 4), r;
    }
    function jS(e, t) {
        return R(e, t);
    }
    function LS(e, t) {
        return BigInt.asUintN(64, e) | t << BigInt(64);
    }
    function KS(e) {
        return BigInt.asUintN(64, e);
    }
    function DS(e, t) {
        return i0(e, t, 3100, o0);
    }
    function qS(e) {
        return e;
    }
    function VS(e, t) {
        return Pa(e, t);
    }
    function HS(e) {
        return e;
    }
    function JS(e, t) {
        return BigInt.asUintN(64, e) | BigInt.asUintN(64, t) << BigInt(64);
    }
    function WS() {
        const e = o.__wbindgen_export_2, t = e.grow(4);
        e.set(0, void 0), e.set(t + 0, void 0), e.set(t + 1, null), e.set(t + 2, !0), e.set(t + 3, !1);
    }
    function GS() {
        return sa;
    }
    function YS() {
        return er;
    }
    function XS() {
        return gr;
    }
    function QS() {
        return Kt;
    }
    function ZS() {
        return Ce;
    }
    function t2() {
        return pr;
    }
    function e2() {
        return au;
    }
    function r2() {
        return ps;
    }
    function n2() {
        return hn;
    }
    function s2() {
        return bn;
    }
    function i2() {
        return ks;
    }
    function o2() {
        return mn;
    }
    function a2() {
        return le;
    }
    function c2() {
        return gn;
    }
    function _2() {
        return pn;
    }
    function u2() {
        return Fs;
    }
    function l2() {
        return Ur;
    }
    function f2() {
        return Is;
    }
    function d2() {
        return Rs;
    }
    URL = globalThis.URL;
    const g2 = await t0({
        "./midnight_ledger_wasm_bg.js": {
            __wbg_event_unwrap: U0,
            __wbg_zswapinput_new: AS,
            __wbg_zswapoffer_new: PS,
            __wbg_zswapoutput_new: MS,
            __wbg_zswaptransient_new: BS,
            __wbg_zswapchainstate_new: zS,
            __wbg_zswaplocalstate_new: $S,
            __wbg_duststatechanges_new: P0,
            __wbg_zswapstatechanges_new: NS,
            __wbg_transaction_new: aS,
            __wbg_transactionresult_new: cS,
            __wbg_dustspend_new: $0,
            __wbg_dustactions_new: C0,
            __wbg_dustlocalstate_new: z0,
            __wbg_dustregistration_new: A0,
            __wbg_ledgerstate_new: c1,
            __wbg_proof_new: A1,
            __wbg_binding_new: g0,
            __wbg_noproof_new: T1,
            __wbg_preproof_new: C1,
            __wbg_nobinding_new: R1,
            __wbg_prebinding_new: v1,
            __wbg_signatureerased_new: G1,
            __wbg_signatureenabled_new: W1,
            __wbg_event_new: B0,
            __wbg_intent_new: n1,
            __wbg_contractcall_new: E0,
            __wbg_contractdeploy_new: I0,
            __wbg_replaceauthority_new: U1,
            __wbg_maintenanceupdate_new: l1,
            __wbg_verifierkeyinsert_new: lS,
            __wbg_verifierkeyremove_new: fS,
            __wbg_statevalue_new: X1,
            __wbg_contractstate_new: R0,
            __wbg_getwithrefkey_1dc361bd10053bfe: G0,
            __wbg_set_3f1d0b984ed272ed: V1,
            __wbg_String_8f0eb39a4a4c2f66: f0,
            __wbg_queueMicrotask_25d0739ac89e8c88: M1,
            __wbg_queueMicrotask_4488407636f5bf24: N1,
            __wbg_respond_6c2c4e20ef85138e: K1,
            __wbg_view_91cc97d57ab30530: gS,
            __wbg_byobRequest_2c036bceca1e6037: h0,
            __wbg_close_cccada6053ee3a65: k0,
            __wbg_enqueue_452bc2343d1c2ff9: M0,
            __wbg_close_d71a78219dc23e91: x0,
            __wbg_crypto_86f2631e91b51511: O0,
            __wbg_process_3975fd6c72f520aa: z1,
            __wbg_versions_4e31226f5e8dc909: dS,
            __wbg_node_e1f24f89a7336c2e: O1,
            __wbg_require_b74f47fc2d022fd6: j1,
            __wbg_msCrypto_d562bbe83e0d4b91: f1,
            __wbg_getRandomValues_b3f15fcbfabb0f8b: q0,
            __wbg_randomFillSync_f8c153b79f285817: B1,
            __wbg_byteLength_331a6b5545834024: w0,
            __wbg_byteOffset_49a5b5608000358b: b0,
            __wbg_newfromslice_074c56947bd43469: S1,
            __wbg_newwithlength_a167dcc7aaa3ba77: x1,
            __wbg_newwithbyteoffsetandlength_e8f53910b4d42b45: k1,
            __wbg_new_638ebfaedbf32a5e: y1,
            __wbg_buffer_8d40b1d762fb3c66: p0,
            __wbg_length_6bb7e81f9d7713e4: u1,
            __wbg_prototypesetcall_3d4a26c1ed734349: $1,
            __wbg_subarray_70fd07feefe14294: rS,
            __wbg_set_1353b2a5e96bc48c: q1,
            __wbg_BigInt_40a77d45cca49470: c0,
            __wbg_done_75ed0ee6dd243d9d: v0,
            __wbg_value_dd9372230531eade: uS,
            __wbg_instanceof_Map_ebb01a5b6b5ffd0b: Z0,
            __wbg_instanceof_Set_b0e0ca8a8b2062e8: e1,
            __wbg_instanceof_Date_c0cdff0c3b978b0e: Q0,
            __wbg_instanceof_Promise_3ec9e849bf41bdb6: t1,
            __wbg_instanceof_Uint8Array_9a8378d955933db7: r1,
            __wbg_instanceof_ArrayBuffer_67f3012529f6a2dd: X0,
            __wbg_BigInt_6adbfd8eb0f7ec07: _0,
            __wbg_get_5ee3191755594360: W0,
            __wbg_has_6a9bff5f4208cfca: Y0,
            __wbg_new_2ff1f68f3676ea53: b1,
            __wbg_set_b7f1cf4fae26fe2a: J1,
            __wbg_keys_822161a7faf55538: a1,
            __wbg_size_af8602b0b838d49e: Y1,
            __wbg_delete_ded22f5899363180: T0,
            __wbg_forEach_859dfd887a0f866c: L0,
            __wbg_add_bd7fa428f539a577: d0,
            __wbg_new_0dc86f3faa8a3b53: g1,
            __wbg_forEach_48feffedd75c5b94: j0,
            __wbg_new0_b0a0a38c201e6df5: d1,
            __wbg_getTime_6bb3f64e0f18f817: V0,
            __wbg_setTime_fb96d30252f92656: D1,
            __wbg_get_0da715ceaecea5c8: H0,
            __wbg_new_1f3a344cf3123716: h1,
            __wbg_set_90f6c0f7bd8c0415: H1,
            __wbg_from_88bc52ce20ba6318: K0,
            __wbg_push_330b2eb93e4e1212: P1,
            __wbg_length_186546c51cd61acd: _1,
            __wbg_isArray_030cce220591fb41: s1,
            __wbg_new_da9dc54c5db29dfa: m1,
            __wbg_toString_d8f537919ef401d6: oS,
            __wbg_toString_7268338f40012a03: iS,
            __wbg_isSafeInteger_1c0d1af5542e102a: i1,
            __wbg_new_19c25a3f2fa63a02: p1,
            __wbg_entries_2be2f15bd5554996: N0,
            __wbg_iterator_f370b34483c71a1c: o1,
            __wbg_static_accessor_GLOBAL_THIS_f0a4409105898184: Z1,
            __wbg_static_accessor_SELF_995b214ae681ff99: tS,
            __wbg_static_accessor_GLOBAL_8921f820c2ce3f12: Q1,
            __wbg_static_accessor_WINDOW_cde3890479c675ea: eS,
            __wbg_valueOf_7785fbf48c0e02e4: _S,
            __wbg_new_2e3c58a15f39f5f9: w1,
            __wbg_then_e22500defe16819f: sS,
            __wbg_then_b33a773d723afa3e: nS,
            __wbg_resolve_4055c623acdd6a1b: L1,
            __wbg_getPrototypeOf_1b3ce3e146539859: D0,
            __wbg_get_458e874b43b18b25: J0,
            __wbg_newnoargs_254190557c45b4ec: F1,
            __wbg_call_13410aac570ffff7: y0,
            __wbg_call_a5400b25a865cfd8: S0,
            __wbg_call_641db1bb5db5a579: m0,
            __wbg_call_f1fd202ba222e0ec: F0,
            __wbg_next_5b3530e612fde77d: E1,
            __wbg_next_692e82279131b03c: I1,
            __wbg_wbindgenin_d7a1ee10933d2d55: yS,
            __wbg_wbindgenshr_7d2aae6044c0dab1: TS,
            __wbg_wbindgenthrow_451ec1a8469d7eb6: CS,
            __wbg_wbindgencbdrop_eb10308566512b88: wS,
            __wbg_wbindgenisnull_f3037694abe4d97a: FS,
            __wbg_wbindgenjsvaleq_e6f2ad59ccae1b58: IS,
            __wbg_Number_998bea33bd87c3e0: l0,
            __wbg_Error_e17e777aac105295: u0,
            __wbg_wbindgenisbigint_ecb90cc08a5a9154: mS,
            __wbg_wbindgenisobject_307a53c6bd97fbf8: kS,
            __wbg_wbindgenisstring_d4fa939789f003b0: xS,
            __wbg_wbindgennumberget_f74b4c7525ac05cb: OS,
            __wbg_wbindgenstringget_0f16a6ddddef376f: vS,
            __wbg_wbindgenbooleanget_3fe6f642c7d97746: hS,
            __wbg_wbindgenisfunction_8cee7dce3725ae74: SS,
            __wbg_wbindgenisundefined_c4b71d073b92f3c5: ES,
            __wbg_wbindgenjsvallooseeq_9bec8c9be826bed1: RS,
            __wbg_wbindgenbigintgetasi64_ac743ece6ab9bba1: pS,
            __wbg_wbindgendebugstring_99ef257a3ddda34d: bS,
            __wbindgen_init_externref_table: WS,
            __wbindgen_cast_9ae0607507abb057: qS,
            __wbindgen_cast_2241b6af4c4b2941: jS,
            __wbindgen_cast_2ddd8a25ff58642a: LS,
            __wbindgen_cast_cb9088102bce6b30: VS,
            __wbindgen_cast_e7b45dd881f38ce3: JS,
            __wbindgen_cast_6141ab5ed7fb2796: DS,
            __wbindgen_cast_4625c577ab2ec9ee: KS,
            __wbindgen_cast_d6cd19b81560fd6e: HS,
            __wbindgen_cast_0be206197f6586af: US
        },
        "./snippets/midnight-ledger-wasm-9f71df61dc0427fb/inline0.js": {
            PreTranscript_: GS
        },
        "./snippets/midnight-ledger-wasm-9f71df61dc0427fb/inline1.js": {
            UnshieldedOffer_: YS
        },
        "./snippets/midnight-ledger-wasm-9f71df61dc0427fb/inline2.js": {
            ZswapInput_: XS
        },
        "./snippets/midnight-ledger-wasm-9f71df61dc0427fb/inline4.js": {
            ZswapOffer_: QS
        },
        "./snippets/midnight-ledger-wasm-9f71df61dc0427fb/inline5.js": {
            ZswapOutput_: ZS
        },
        "./snippets/midnight-ledger-wasm-9f71df61dc0427fb/inline3.js": {
            ZswapTransient_: t2
        },
        "./snippets/midnight-ledger-wasm-9f71df61dc0427fb/inline6.js": {
            PrePartitionContractCall_: e2
        },
        "./snippets/midnight-ledger-wasm-9f71df61dc0427fb/inline7.js": {
            DustSpend_: r2
        },
        "./snippets/midnight-ledger-wasm-9f71df61dc0427fb/inline8.js": {
            DustActions_: n2
        },
        "./snippets/midnight-ledger-wasm-9f71df61dc0427fb/inline9.js": {
            DustRegistration_: s2
        },
        "./snippets/midnight-ledger-wasm-9f71df61dc0427fb/inline11.js": {
            SignatureErased_: i2
        },
        "./snippets/midnight-ledger-wasm-9f71df61dc0427fb/inline13.js": {
            SignatureEnabled_: o2
        },
        "./snippets/midnight-ledger-wasm-9f71df61dc0427fb/inline17.js": {
            Intent_: a2
        },
        "./snippets/midnight-ledger-wasm-9f71df61dc0427fb/inline18.js": {
            ContractCall_: c2
        },
        "./snippets/midnight-ledger-wasm-9f71df61dc0427fb/inline23.js": {
            ContractDeploy_: _2
        },
        "./snippets/midnight-ledger-wasm-9f71df61dc0427fb/inline19.js": {
            ReplaceAuthority_: u2
        },
        "./snippets/midnight-ledger-wasm-9f71df61dc0427fb/inline20.js": {
            MaintenanceUpdate_: l2
        },
        "./snippets/midnight-ledger-wasm-9f71df61dc0427fb/inline21.js": {
            VerifierKeyInsert_: f2
        },
        "./snippets/midnight-ledger-wasm-9f71df61dc0427fb/inline22.js": {
            VerifierKeyRemove_: d2
        }
    }, e0), { memory: p2, __wbg_authorizedclaim_free: h2, __wbg_binding_free: w2, __wbg_claimrewardstransaction_free: b2, __wbg_coinsecretkey_free: y2, __wbg_contractcall_free: m2, __wbg_contractcallprototype_free: S2, __wbg_contractdeploy_free: F2, __wbg_contractoperationversion_free: k2, __wbg_contractoperationversionedverifierkey_free: x2, __wbg_dustactions_free: E2, __wbg_dustgenerationstate_free: I2, __wbg_dustlocalstate_free: R2, __wbg_dustlocalstatewithchanges_free: O2, __wbg_dustparameters_free: T2, __wbg_dustregistration_free: v2, __wbg_dustsecretkey_free: C2, __wbg_dustspend_free: z2, __wbg_duststate_free: A2, __wbg_duststatechanges_free: $2, __wbg_duststatemerkletreecollapsedupdate_free: P2, __wbg_dustutxostate_free: M2, __wbg_encryptionsecretkey_free: N2, __wbg_event_free: B2, __wbg_intent_free: U2, __wbg_ledgerparameters_free: j2, __wbg_ledgerstate_free: L2, __wbg_maintenanceupdate_free: K2, __wbg_nobinding_free: D2, __wbg_prebinding_free: q2, __wbg_prepartitioncontractcall_free: V2, __wbg_preproof_free: H2, __wbg_pretranscript_free: J2, __wbg_proof_free: W2, __wbg_replaceauthority_free: G2, __wbg_signatureenabled_free: Y2, __wbg_systemtransaction_free: X2, __wbg_transaction_free: Q2, __wbg_transactioncontext_free: Z2, __wbg_transactioncostmodel_free: tF, __wbg_transactionresult_free: eF, __wbg_unshieldedoffer_free: rF, __wbg_utxometa_free: nF, __wbg_utxostate_free: sF, __wbg_verifiedtransaction_free: iF, __wbg_verifierkeyinsert_free: oF, __wbg_wellformedstrictness_free: aF, __wbg_zswapchainstate_free: cF, __wbg_zswapinput_free: _F, __wbg_zswaplocalstate_free: uF, __wbg_zswaplocalstatewithchanges_free: lF, __wbg_zswapoffer_free: fF, __wbg_zswapoutput_free: dF, __wbg_zswapsecretkeys_free: gF, __wbg_zswapstatechanges_free: pF, __wbg_zswaptransient_free: hF, addressFromKey: wF, authorizedclaim_coin: bF, authorizedclaim_deserialize: yF, authorizedclaim_eraseProof: mF, authorizedclaim_new: SF, authorizedclaim_recipient: FF, authorizedclaim_serialize: kF, authorizedclaim_toString: xF, binding_deserialize: EF, binding_instance: IF, binding_new: RF, binding_serialize: OF, binding_toString: TF, claimrewardstransaction_addSignature: vF, claimrewardstransaction_construct: CF, claimrewardstransaction_dataToSign: zF, claimrewardstransaction_deserialize: AF, claimrewardstransaction_eraseSignatures: $F, claimrewardstransaction_kind: PF, claimrewardstransaction_new: MF, claimrewardstransaction_nonce: NF, claimrewardstransaction_owner: BF, claimrewardstransaction_serialize: UF, claimrewardstransaction_signature: jF, claimrewardstransaction_toString: LF, claimrewardstransaction_value: KF, coinCommitment: DF, coinNullifier: qF, coinsecretkey_clear: VF, coinsecretkey_new: HF, coinsecretkey_public_key: JF, coinsecretkey_yesIKnowTheSecurityImplicationsOfThis_serialize: WF, contractcall_address: GF, contractcall_communicationCommitment: YF, contractcall_entryPoint: XF, contractcall_fallibleTranscript: QF, contractcall_guaranteedTranscript: ZF, contractcall_new: tk, contractcall_proof: ek, contractcall_toString: rk, contractcallprototype_intoCall: nk, contractcallprototype_new: sk, contractcallprototype_toString: ik, contractdeploy_address: ok, contractdeploy_initialState: ak, contractdeploy_new: ck, contractdeploy_toString: _k, contractoperationversion_new: uk, contractoperationversion_toString: lk, contractoperationversion_version: fk, contractoperationversionedverifierkey_new: dk, contractoperationversionedverifierkey_raw_vk: gk, contractoperationversionedverifierkey_toString: pk, contractoperationversionedverifierkey_version: hk, createCheckPayload: wk, createCoinInfo: bk, createProvingPayload: yk, createProvingTransactionPayload: mk, createShieldedCoinInfo: Sk, dustCommitment: Fk, dustInitialNonce: kk, dustNonce: xk, dustNullifier: Ek, dustactions_ctime: Ik, dustactions_deserialize: Rk, dustactions_new: Ok, dustactions_registrations: Tk, dustactions_serialize: vk, dustactions_set_ctime: Ck, dustactions_set_registrations: zk, dustactions_set_spends: Ak, dustactions_spends: $k, dustactions_toString: Pk, dustgenerationstate_deserialize: Mk, dustgenerationstate_new: Nk, dustgenerationstate_serialize: Bk, dustgenerationstate_toString: Uk, dustlocalstate_addUtxo: jk, dustlocalstate_applyCommitmentCollapsedUpdate: Lk, dustlocalstate_applyGenerationCollapsedUpdate: Kk, dustlocalstate_collapseCommitmentTree: Dk, dustlocalstate_collapseGenerationTree: qk, dustlocalstate_commitmentTreeRoot: Vk, dustlocalstate_deserialize: Hk, dustlocalstate_findUtxoByNullifier: Jk, dustlocalstate_generatingTreeRoot: Wk, dustlocalstate_generationInfo: Gk, dustlocalstate_insertCommitment: Yk, dustlocalstate_insertGenerationInfo: Xk, dustlocalstate_new: Qk, dustlocalstate_params: Zk, dustlocalstate_processTtls: tx, dustlocalstate_removeCommitment: ex, dustlocalstate_removeGenerationInfo: rx, dustlocalstate_removeUtxo: nx, dustlocalstate_replayEvents: sx, dustlocalstate_replayEventsWithChanges: ix, dustlocalstate_replayRawEvents: ox, dustlocalstate_serialize: ax, dustlocalstate_spend: cx, dustlocalstate_successorUtxo: _x, dustlocalstate_syncTime: ux, dustlocalstate_toString: lx, dustlocalstate_utxos: fx, dustlocalstate_walletBalance: dx, dustlocalstatewithchanges_changes: gx, dustlocalstatewithchanges_state: px, dustparameters_deserialize: hx, dustparameters_dustGracePeriodSeconds: wx, dustparameters_generationDecayRate: bx, dustparameters_new: yx, dustparameters_nightDustRatio: mx, dustparameters_serialize: Sx, dustparameters_set_dustGracePeriodSeconds: Fx, dustparameters_set_generationDecayRate: kx, dustparameters_set_nightDustRatio: xx, dustparameters_timeToCapSeconds: Ex, dustparameters_toString: Ix, dustregistration_allowFeePayment: Rx, dustregistration_deserialize: Ox, dustregistration_dustAddress: Tx, dustregistration_new: vx, dustregistration_nightKey: Cx, dustregistration_serialize: zx, dustregistration_set_allowFeePayment: Ax, dustregistration_set_dustAddress: $x, dustregistration_set_nightKey: Px, dustregistration_set_signature: Mx, dustregistration_signature: Nx, dustregistration_toString: Bx, dustsecretkey_clear: Ux, dustsecretkey_fromBigint: jx, dustsecretkey_fromSeed: Lx, dustsecretkey_new: Kx, dustsecretkey_publicKey: Dx, dustspend_new: qx, dustspend_newCommitment: Vx, dustspend_oldNullifier: Hx, dustspend_proof: Jx, dustspend_toString: Wx, dustspend_vFee: Gx, duststate_deserialize: Yx, duststate_generation: Xx, duststate_new: Qx, duststate_serialize: Zx, duststate_toString: tE, duststate_utxo: eE, duststatechanges_receivedUtxos: rE, duststatechanges_source: nE, duststatechanges_spentUtxos: sE, duststatemerkletreecollapsedupdate_deserialize: iE, duststatemerkletreecollapsedupdate_new: oE, duststatemerkletreecollapsedupdate_newFromCommitmentTree: aE, duststatemerkletreecollapsedupdate_newFromGenerationTree: cE, duststatemerkletreecollapsedupdate_serialize: _E, duststatemerkletreecollapsedupdate_toString: uE, dustutxostate_deserialize: lE, dustutxostate_new: fE, dustutxostate_serialize: dE, dustutxostate_toString: gE, encryptionsecretkey_clear: pE, encryptionsecretkey_deserialize: hE, encryptionsecretkey_new: wE, encryptionsecretkey_public_key: bE, encryptionsecretkey_taggedDeserialize: yE, encryptionsecretkey_test: mE, encryptionsecretkey_yesIKnowTheSecurityImplicationsOfThis_serialize: SE, encryptionsecretkey_yesIKnowTheSecurityImplicationsOfThis_taggedSerialize: FE, event_content: kE, event_deserialize: xE, event_new: EE, event_serialize: IE, event_source: RE, event_toString: OE, feeToken: TE, intent_actions: vE, intent_addCall: CE, intent_addDeploy: zE, intent_addMaintenanceUpdate: AE, intent_bind: $E, intent_binding: PE, intent_construct: ME, intent_deserialize: NE, intent_dustActions: BE, intent_eraseProofs: UE, intent_eraseSignatures: jE, intent_fallibleUnshieldedOffer: LE, intent_guaranteedUnshieldedOffer: KE, intent_has_contract_deployments: DE, intent_has_fallible_offers: qE, intent_has_fallible_transcripts: VE, intent_intentHash: HE, intent_new: JE, intent_serialize: WE, intent_set_actions: GE, intent_set_dustActions: YE, intent_set_fallibleUnshieldedOffer: XE, intent_set_guaranteedUnshieldedOffer: QE, intent_set_ttl: ZE, intent_signatureData: tI, intent_toString: eI, intent_ttl: rI, ledgerparameters_deserialize: nI, ledgerparameters_dust: sI, ledgerparameters_feePrices: iI, ledgerparameters_initialParameters: oI, ledgerparameters_maxPriceAdjustment: aI, ledgerparameters_new: cI, ledgerparameters_normalizeFullness: _I, ledgerparameters_serialize: uI, ledgerparameters_toString: lI, ledgerparameters_transactionCostModel: fI, ledgerstate_apply: dI, ledgerstate_applySystemTx: gI, ledgerstate_blank: pI, ledgerstate_block_reward_pool: hI, ledgerstate_bridgeReceiving: wI, ledgerstate_deserialize: bI, ledgerstate_dust: yI, ledgerstate_index: mI, ledgerstate_locked_pool: SI, ledgerstate_new: FI, ledgerstate_parameters: kI, ledgerstate_postBlockUpdate: xI, ledgerstate_reserve_pool: EI, ledgerstate_serialize: II, ledgerstate_set_parameters: RI, ledgerstate_testingDistributeNight: OI, ledgerstate_toString: TI, ledgerstate_treasuryBalance: vI, ledgerstate_unclaimedBlockRewards: CI, ledgerstate_updateIndex: zI, ledgerstate_utxo: AI, ledgerstate_zswap: $I, maintenanceupdate_addSignature: PI, maintenanceupdate_address: MI, maintenanceupdate_counter: NI, maintenanceupdate_data_to_sign: BI, maintenanceupdate_new: UI, maintenanceupdate_signatures: jI, maintenanceupdate_toString: LI, maintenanceupdate_updates: KI, merkletreecollapsedupdate_deserialize: DI, merkletreecollapsedupdate_new: qI, nativeToken: VI, nobinding_deserialize: HI, nobinding_instance: JI, nobinding_new: WI, nobinding_serialize: GI, nobinding_toString: YI, noproof_instance: XI, noproof_new: QI, noproof_toString: ZI, parseCheckResult: tR, partitionTranscripts: eR, prebinding_deserialize: rR, prebinding_instance: nR, prebinding_new: sR, prebinding_serialize: iR, prebinding_toString: oR, prepartitioncontractcall_new: aR, prepartitioncontractcall_toString: cR, preproof_deserialize: _R, preproof_instance: uR, preproof_new: lR, preproof_serialize: fR, preproof_toString: dR, pretranscript_new: gR, pretranscript_toString: pR, proof_deserialize: hR, proof_instance: wR, proof_new: bR, proof_serialize: yR, proof_toString: mR, replaceauthority_authority: SR, replaceauthority_new: FR, replaceauthority_toString: kR, sampleCoinPublicKey: xR, sampleDustSecretKey: ER, sampleEncryptionPublicKey: IR, sampleIntentHash: RR, shieldedToken: OR, signatureenabled_deserialize: TR, signatureenabled_instance: vR, signatureenabled_new: CR, signatureenabled_serialize: zR, signatureenabled_toString: AR, signatureerased_instance: $R, signatureerased_toString: PR, systemtransaction_deserialize: MR, systemtransaction_new: NR, systemtransaction_serialize: BR, systemtransaction_toString: UR, transaction_addCalls: jR, transaction_addIntent: LR, transaction_addZswapOffer: KR, transaction_bind: DR, transaction_bindingRandomness: qR, transaction_cost: VR, transaction_deserialize: HR, transaction_eraseProofs: JR, transaction_eraseSignatures: WR, transaction_fallibleOffer: GR, transaction_fees: YR, transaction_feesWithMargin: XR, transaction_fromParts: QR, transaction_fromPartsRandomized: ZR, transaction_fromRewards: tO, transaction_guaranteedOffer: eO, transaction_identifiers: rO, transaction_imbalances: nO, transaction_intents: sO, transaction_merge: iO, transaction_mockProve: oO, transaction_new: aO, transaction_prove: cO, transaction_rewards: _O, transaction_serialize: uO, transaction_set_fallibleOffer: lO, transaction_set_guaranteedOffer: fO, transaction_set_intents: dO, transaction_toString: gO, transaction_transactionHash: pO, transaction_wellFormed: hO, transactioncontext_new: wO, transactioncontext_toString: bO, transactioncostmodel_baselineCost: yO, transactioncostmodel_deserialize: mO, transactioncostmodel_initialTransactionCostModel: SO, transactioncostmodel_new: FO, transactioncostmodel_runtimeCostModel: kO, transactioncostmodel_serialize: xO, transactioncostmodel_toString: EO, transactionresult_error: IO, transactionresult_events: RO, transactionresult_new: OO, transactionresult_successfulSegments: TO, transactionresult_toString: vO, transactionresult_type_: CO, unshieldedoffer_addSignatures: zO, unshieldedoffer_construct: AO, unshieldedoffer_eraseSignatures: $O, unshieldedoffer_inputs: PO, unshieldedoffer_new: MO, unshieldedoffer_outputs: NO, unshieldedoffer_signatures: BO, unshieldedoffer_toString: UO, updatedValue: jO, utxometa_ctime: LO, utxometa_new: KO, utxometa_set_ctime: DO, utxostate_delta: qO, utxostate_filter: VO, utxostate_lookupMeta: HO, utxostate_new: JO, utxostate_utxos: WO, verifiedtransaction_transaction: GO, verifierkeyinsert_new: YO, verifierkeyinsert_operation: XO, verifierkeyinsert_toString: QO, verifierkeyinsert_vk: ZO, verifierkeyremove_new: tT, verifierkeyremove_operation: eT, verifierkeyremove_toString: rT, verifierkeyremove_version: nT, wellformedstrictness_enforce_balancing: sT, wellformedstrictness_enforce_limits: iT, wellformedstrictness_new: oT, wellformedstrictness_set_enforce_balancing: aT, wellformedstrictness_set_enforce_limits: cT, wellformedstrictness_set_verify_contract_proofs: _T, wellformedstrictness_set_verify_native_proofs: uT, wellformedstrictness_set_verify_signatures: lT, wellformedstrictness_verify_contract_proofs: fT, wellformedstrictness_verify_native_proofs: dT, wellformedstrictness_verify_signatures: gT, zswapchainstate_deserialize: pT, zswapchainstate_deserializeFromLedgerState: hT, zswapchainstate_filter: wT, zswapchainstate_firstFree: bT, zswapchainstate_new: yT, zswapchainstate_postBlockUpdate: mT, zswapchainstate_serialize: ST, zswapchainstate_toString: FT, zswapchainstate_tryApply: kT, zswapinput_contractAddress: xT, zswapinput_deserialize: ET, zswapinput_new: IT, zswapinput_newContractOwned: RT, zswapinput_nullifier: OT, zswapinput_proof: TT, zswapinput_serialize: vT, zswapinput_toString: CT, zswaplocalstate_apply: zT, zswaplocalstate_applyCollapsedUpdate: AT, zswaplocalstate_applyFailed: $T, zswaplocalstate_applyWithChanges: PT, zswaplocalstate_clearPending: MT, zswaplocalstate_coins: NT, zswaplocalstate_deserialize: BT, zswaplocalstate_firstFree: UT, zswaplocalstate_insertCoin: jT, zswaplocalstate_merkle_tree_root: LT, zswaplocalstate_new: KT, zswaplocalstate_pendingOutputs: DT, zswaplocalstate_pendingSpends: qT, zswaplocalstate_removeCoinByNullifier: VT, zswaplocalstate_replayEvents: HT, zswaplocalstate_replayEventsWithChanges: JT, zswaplocalstate_replayRawEvents: WT, zswaplocalstate_revertTransaction: GT, zswaplocalstate_serialize: YT, zswaplocalstate_spend: XT, zswaplocalstate_spendFromOutput: QT, zswaplocalstate_toString: ZT, zswaplocalstate_watchFor: tv, zswaplocalstatewithchanges_changes: ev, zswaplocalstatewithchanges_state: rv, zswapoffer_deltas: nv, zswapoffer_deserialize: sv, zswapoffer_fromInput: iv, zswapoffer_fromOutput: ov, zswapoffer_fromTransient: av, zswapoffer_inputs: cv, zswapoffer_merge: _v, zswapoffer_new: uv, zswapoffer_outputs: lv, zswapoffer_serialize: fv, zswapoffer_toString: dv, zswapoffer_transients: gv, zswapoutput_commitment: pv, zswapoutput_construct: hv, zswapoutput_contractAddress: wv, zswapoutput_deserialize: bv, zswapoutput_new: yv, zswapoutput_newContractOwned: mv, zswapoutput_proof: Sv, zswapoutput_serialize: Fv, zswapoutput_toString: kv, zswapsecretkeys_clear: xv, zswapsecretkeys_coinPublicKey: Ev, zswapsecretkeys_coinSecretKey: Iv, zswapsecretkeys_encryptionPublicKey: Rv, zswapsecretkeys_encryptionSecretKey: Ov, zswapsecretkeys_fromSeed: Tv, zswapsecretkeys_fromSeedRng: vv, zswapsecretkeys_new: Cv, zswapstatechanges_receivedCoins: zv, zswapstatechanges_source: Av, zswapstatechanges_spentCoins: $v, zswaptransient_commitment: Pv, zswaptransient_contractAddress: Mv, zswaptransient_deserialize: Nv, zswaptransient_inputProof: Bv, zswaptransient_new: Uv, zswaptransient_newFromContractOwnedOutput: jv, zswaptransient_nullifier: Lv, zswaptransient_outputProof: Kv, zswaptransient_serialize: Dv, zswaptransient_toString: qv, signatureerased_new: Vv, unshieldedToken: Hv, __wbg_noproof_free: Jv, __wbg_signatureerased_free: Wv, __wbg_merkletreecollapsedupdate_free: Gv, __wbg_verifierkeyremove_free: Yv, merkletreecollapsedupdate_toString: Xv, merkletreecollapsedupdate_serialize: Qv, __wbg_chargedstate_free: Zv, __wbg_contractmaintenanceauthority_free: tC, __wbg_contractoperation_free: eC, __wbg_contractstate_free: rC, __wbg_costmodel_free: nC, __wbg_querycontext_free: sC, __wbg_queryresults_free: iC, __wbg_stateboundedmerkletree_free: oC, __wbg_statemap_free: aC, __wbg_statevalue_free: cC, __wbg_vmresults_free: _C, __wbg_vmstack_free: uC, bigIntModFr: lC, bigIntToValue: fC, chargedstate_new: dC, chargedstate_state: gC, chargedstate_toString: pC, communicationCommitment: hC, communicationCommitmentRandomness: wC, contractmaintenanceauthority_committee: bC, contractmaintenanceauthority_counter: yC, contractmaintenanceauthority_deserialize: mC, contractmaintenanceauthority_new: SC, contractmaintenanceauthority_serialize: FC, contractmaintenanceauthority_threshold: kC, contractmaintenanceauthority_toString: xC, contractoperation_deserialize: EC, contractoperation_new: IC, contractoperation_serialize: RC, contractoperation_set_verifier_key: OC, contractoperation_toString: TC, contractoperation_verifier_key: vC, contractstate_balance: CC, contractstate_data: zC, contractstate_deserialize: AC, contractstate_maintenance_authority: $C, contractstate_new: PC, contractstate_operation: MC, contractstate_operations: NC, contractstate_query: BC, contractstate_serialize: UC, contractstate_setOperation: jC, contractstate_set_balance: LC, contractstate_set_data: KC, contractstate_set_maintenance_authority: DC, contractstate_toString: qC, costmodel_initialCostModel: VC, costmodel_new: HC, costmodel_toString: JC, decodeCoinPublicKey: WC, decodeContractAddress: GC, decodeQualifiedShieldedCoinInfo: YC, decodeRawTokenType: XC, decodeShieldedCoinInfo: QC, decodeUserAddress: ZC, degradeToTransient: tz, dummyContractAddress: ez, dummyUserAddress: rz, ecAdd: nz, ecMul: sz, ecMulGenerator: iz, encodeCoinPublicKey: oz, encodeContractAddress: az, encodeQualifiedShieldedCoinInfo: cz, encodeRawTokenType: _z, encodeShieldedCoinInfo: uz, encodeUserAddress: lz, entryPointHash: fz, hashToCurve: dz, leafHash: gz, maxAlignedSize: pz, maxField: hz, persistentCommit: wz, persistentHash: bz, proofDataIntoSerializedPreimage: yz, querycontext_address: mz, querycontext_block: Sz, querycontext_com_indices: Fz, querycontext_effects: kz, querycontext_insertCommitment: xz, querycontext_new: Ez, querycontext_qualify: Iz, querycontext_query: Rz, querycontext_runTranscript: Oz, querycontext_set_block: Tz, querycontext_set_effects: vz, querycontext_state: Cz, querycontext_toString: zz, querycontext_toVmStack: Az, queryresults_context: $z, queryresults_events: Pz, queryresults_gas_cost: Mz, queryresults_new: Nz, queryresults_toString: Bz, rawTokenType: Uz, runProgram: jz, runtimeCoinCommitment: Lz, runtimeCoinNullifier: Kz, sampleContractAddress: Dz, sampleRawTokenType: qz, sampleSigningKey: Vz, sampleUserAddress: Hz, signData: Jz, signatureVerifyingKey: Wz, signingKeyFromBip340: Gz, stateboundedmerkletree_blank: Yz, stateboundedmerkletree_collapse: Xz, stateboundedmerkletree_findPathForLeaf: Qz, stateboundedmerkletree_height: Zz, stateboundedmerkletree_pathForLeaf: tA, stateboundedmerkletree_rehash: eA, stateboundedmerkletree_root: rA, stateboundedmerkletree_toString: nA, stateboundedmerkletree_update: sA, statemap_get: iA, statemap_insert: oA, statemap_keys: aA, statemap_new: cA, statemap_remove: _A, statemap_toString: uA, statevalue_arrayPush: lA, statevalue_asArray: fA, statevalue_asBoundedMerkleTree: dA, statevalue_asCell: gA, statevalue_asMap: pA, statevalue_decode: hA, statevalue_encode: wA, statevalue_logSize: bA, statevalue_new: yA, statevalue_newArray: mA, statevalue_newBoundedMerkleTree: SA, statevalue_newCell: FA, statevalue_newMap: kA, statevalue_newNull: xA, statevalue_toString: EA, statevalue_type: IA, transientCommit: RA, transientHash: OA, upgradeFromTransient: TA, valueToBigInt: vA, verifySignature: CA, vmresults_events: zA, vmresults_gas_cost: AA, vmresults_new: $A, vmresults_stack: PA, vmresults_toString: MA, vmstack_get: NA, vmstack_isStrong: BA, vmstack_length: UA, vmstack_new: jA, vmstack_push: LA, vmstack_removeLast: KA, vmstack_toString: DA, __wbg_intounderlyingbytesource_free: qA, __wbg_intounderlyingsink_free: VA, __wbg_intounderlyingsource_free: HA, intounderlyingbytesource_autoAllocateChunkSize: JA, intounderlyingbytesource_cancel: WA, intounderlyingbytesource_pull: GA, intounderlyingbytesource_start: YA, intounderlyingbytesource_type: XA, intounderlyingsink_abort: QA, intounderlyingsink_close: ZA, intounderlyingsink_write: t$, intounderlyingsource_cancel: e$, intounderlyingsource_pull: r$, __wbindgen_exn_store: n$, __externref_table_alloc: s$, __wbindgen_export_2: i$, __wbindgen_malloc: o$, __wbindgen_realloc: a$, __externref_drop_slice: c$, __wbindgen_free: _$, __wbindgen_export_7: u$, __externref_table_dealloc: l$, closure3101_externref_shim: f$, closure3148_externref_shim: d$, closure3146_externref_shim: g$, __wbindgen_start: Rp } = g2, p$ = Object.freeze(Object.defineProperty({
        __proto__: null,
        __externref_drop_slice: c$,
        __externref_table_alloc: s$,
        __externref_table_dealloc: l$,
        __wbg_authorizedclaim_free: h2,
        __wbg_binding_free: w2,
        __wbg_chargedstate_free: Zv,
        __wbg_claimrewardstransaction_free: b2,
        __wbg_coinsecretkey_free: y2,
        __wbg_contractcall_free: m2,
        __wbg_contractcallprototype_free: S2,
        __wbg_contractdeploy_free: F2,
        __wbg_contractmaintenanceauthority_free: tC,
        __wbg_contractoperation_free: eC,
        __wbg_contractoperationversion_free: k2,
        __wbg_contractoperationversionedverifierkey_free: x2,
        __wbg_contractstate_free: rC,
        __wbg_costmodel_free: nC,
        __wbg_dustactions_free: E2,
        __wbg_dustgenerationstate_free: I2,
        __wbg_dustlocalstate_free: R2,
        __wbg_dustlocalstatewithchanges_free: O2,
        __wbg_dustparameters_free: T2,
        __wbg_dustregistration_free: v2,
        __wbg_dustsecretkey_free: C2,
        __wbg_dustspend_free: z2,
        __wbg_duststate_free: A2,
        __wbg_duststatechanges_free: $2,
        __wbg_duststatemerkletreecollapsedupdate_free: P2,
        __wbg_dustutxostate_free: M2,
        __wbg_encryptionsecretkey_free: N2,
        __wbg_event_free: B2,
        __wbg_intent_free: U2,
        __wbg_intounderlyingbytesource_free: qA,
        __wbg_intounderlyingsink_free: VA,
        __wbg_intounderlyingsource_free: HA,
        __wbg_ledgerparameters_free: j2,
        __wbg_ledgerstate_free: L2,
        __wbg_maintenanceupdate_free: K2,
        __wbg_merkletreecollapsedupdate_free: Gv,
        __wbg_nobinding_free: D2,
        __wbg_noproof_free: Jv,
        __wbg_prebinding_free: q2,
        __wbg_prepartitioncontractcall_free: V2,
        __wbg_preproof_free: H2,
        __wbg_pretranscript_free: J2,
        __wbg_proof_free: W2,
        __wbg_querycontext_free: sC,
        __wbg_queryresults_free: iC,
        __wbg_replaceauthority_free: G2,
        __wbg_signatureenabled_free: Y2,
        __wbg_signatureerased_free: Wv,
        __wbg_stateboundedmerkletree_free: oC,
        __wbg_statemap_free: aC,
        __wbg_statevalue_free: cC,
        __wbg_systemtransaction_free: X2,
        __wbg_transaction_free: Q2,
        __wbg_transactioncontext_free: Z2,
        __wbg_transactioncostmodel_free: tF,
        __wbg_transactionresult_free: eF,
        __wbg_unshieldedoffer_free: rF,
        __wbg_utxometa_free: nF,
        __wbg_utxostate_free: sF,
        __wbg_verifiedtransaction_free: iF,
        __wbg_verifierkeyinsert_free: oF,
        __wbg_verifierkeyremove_free: Yv,
        __wbg_vmresults_free: _C,
        __wbg_vmstack_free: uC,
        __wbg_wellformedstrictness_free: aF,
        __wbg_zswapchainstate_free: cF,
        __wbg_zswapinput_free: _F,
        __wbg_zswaplocalstate_free: uF,
        __wbg_zswaplocalstatewithchanges_free: lF,
        __wbg_zswapoffer_free: fF,
        __wbg_zswapoutput_free: dF,
        __wbg_zswapsecretkeys_free: gF,
        __wbg_zswapstatechanges_free: pF,
        __wbg_zswaptransient_free: hF,
        __wbindgen_exn_store: n$,
        __wbindgen_export_2: i$,
        __wbindgen_export_7: u$,
        __wbindgen_free: _$,
        __wbindgen_malloc: o$,
        __wbindgen_realloc: a$,
        __wbindgen_start: Rp,
        addressFromKey: wF,
        authorizedclaim_coin: bF,
        authorizedclaim_deserialize: yF,
        authorizedclaim_eraseProof: mF,
        authorizedclaim_new: SF,
        authorizedclaim_recipient: FF,
        authorizedclaim_serialize: kF,
        authorizedclaim_toString: xF,
        bigIntModFr: lC,
        bigIntToValue: fC,
        binding_deserialize: EF,
        binding_instance: IF,
        binding_new: RF,
        binding_serialize: OF,
        binding_toString: TF,
        chargedstate_new: dC,
        chargedstate_state: gC,
        chargedstate_toString: pC,
        claimrewardstransaction_addSignature: vF,
        claimrewardstransaction_construct: CF,
        claimrewardstransaction_dataToSign: zF,
        claimrewardstransaction_deserialize: AF,
        claimrewardstransaction_eraseSignatures: $F,
        claimrewardstransaction_kind: PF,
        claimrewardstransaction_new: MF,
        claimrewardstransaction_nonce: NF,
        claimrewardstransaction_owner: BF,
        claimrewardstransaction_serialize: UF,
        claimrewardstransaction_signature: jF,
        claimrewardstransaction_toString: LF,
        claimrewardstransaction_value: KF,
        closure3101_externref_shim: f$,
        closure3146_externref_shim: g$,
        closure3148_externref_shim: d$,
        coinCommitment: DF,
        coinNullifier: qF,
        coinsecretkey_clear: VF,
        coinsecretkey_new: HF,
        coinsecretkey_public_key: JF,
        coinsecretkey_yesIKnowTheSecurityImplicationsOfThis_serialize: WF,
        communicationCommitment: hC,
        communicationCommitmentRandomness: wC,
        contractcall_address: GF,
        contractcall_communicationCommitment: YF,
        contractcall_entryPoint: XF,
        contractcall_fallibleTranscript: QF,
        contractcall_guaranteedTranscript: ZF,
        contractcall_new: tk,
        contractcall_proof: ek,
        contractcall_toString: rk,
        contractcallprototype_intoCall: nk,
        contractcallprototype_new: sk,
        contractcallprototype_toString: ik,
        contractdeploy_address: ok,
        contractdeploy_initialState: ak,
        contractdeploy_new: ck,
        contractdeploy_toString: _k,
        contractmaintenanceauthority_committee: bC,
        contractmaintenanceauthority_counter: yC,
        contractmaintenanceauthority_deserialize: mC,
        contractmaintenanceauthority_new: SC,
        contractmaintenanceauthority_serialize: FC,
        contractmaintenanceauthority_threshold: kC,
        contractmaintenanceauthority_toString: xC,
        contractoperation_deserialize: EC,
        contractoperation_new: IC,
        contractoperation_serialize: RC,
        contractoperation_set_verifier_key: OC,
        contractoperation_toString: TC,
        contractoperation_verifier_key: vC,
        contractoperationversion_new: uk,
        contractoperationversion_toString: lk,
        contractoperationversion_version: fk,
        contractoperationversionedverifierkey_new: dk,
        contractoperationversionedverifierkey_raw_vk: gk,
        contractoperationversionedverifierkey_toString: pk,
        contractoperationversionedverifierkey_version: hk,
        contractstate_balance: CC,
        contractstate_data: zC,
        contractstate_deserialize: AC,
        contractstate_maintenance_authority: $C,
        contractstate_new: PC,
        contractstate_operation: MC,
        contractstate_operations: NC,
        contractstate_query: BC,
        contractstate_serialize: UC,
        contractstate_setOperation: jC,
        contractstate_set_balance: LC,
        contractstate_set_data: KC,
        contractstate_set_maintenance_authority: DC,
        contractstate_toString: qC,
        costmodel_initialCostModel: VC,
        costmodel_new: HC,
        costmodel_toString: JC,
        createCheckPayload: wk,
        createCoinInfo: bk,
        createProvingPayload: yk,
        createProvingTransactionPayload: mk,
        createShieldedCoinInfo: Sk,
        decodeCoinPublicKey: WC,
        decodeContractAddress: GC,
        decodeQualifiedShieldedCoinInfo: YC,
        decodeRawTokenType: XC,
        decodeShieldedCoinInfo: QC,
        decodeUserAddress: ZC,
        degradeToTransient: tz,
        dummyContractAddress: ez,
        dummyUserAddress: rz,
        dustCommitment: Fk,
        dustInitialNonce: kk,
        dustNonce: xk,
        dustNullifier: Ek,
        dustactions_ctime: Ik,
        dustactions_deserialize: Rk,
        dustactions_new: Ok,
        dustactions_registrations: Tk,
        dustactions_serialize: vk,
        dustactions_set_ctime: Ck,
        dustactions_set_registrations: zk,
        dustactions_set_spends: Ak,
        dustactions_spends: $k,
        dustactions_toString: Pk,
        dustgenerationstate_deserialize: Mk,
        dustgenerationstate_new: Nk,
        dustgenerationstate_serialize: Bk,
        dustgenerationstate_toString: Uk,
        dustlocalstate_addUtxo: jk,
        dustlocalstate_applyCommitmentCollapsedUpdate: Lk,
        dustlocalstate_applyGenerationCollapsedUpdate: Kk,
        dustlocalstate_collapseCommitmentTree: Dk,
        dustlocalstate_collapseGenerationTree: qk,
        dustlocalstate_commitmentTreeRoot: Vk,
        dustlocalstate_deserialize: Hk,
        dustlocalstate_findUtxoByNullifier: Jk,
        dustlocalstate_generatingTreeRoot: Wk,
        dustlocalstate_generationInfo: Gk,
        dustlocalstate_insertCommitment: Yk,
        dustlocalstate_insertGenerationInfo: Xk,
        dustlocalstate_new: Qk,
        dustlocalstate_params: Zk,
        dustlocalstate_processTtls: tx,
        dustlocalstate_removeCommitment: ex,
        dustlocalstate_removeGenerationInfo: rx,
        dustlocalstate_removeUtxo: nx,
        dustlocalstate_replayEvents: sx,
        dustlocalstate_replayEventsWithChanges: ix,
        dustlocalstate_replayRawEvents: ox,
        dustlocalstate_serialize: ax,
        dustlocalstate_spend: cx,
        dustlocalstate_successorUtxo: _x,
        dustlocalstate_syncTime: ux,
        dustlocalstate_toString: lx,
        dustlocalstate_utxos: fx,
        dustlocalstate_walletBalance: dx,
        dustlocalstatewithchanges_changes: gx,
        dustlocalstatewithchanges_state: px,
        dustparameters_deserialize: hx,
        dustparameters_dustGracePeriodSeconds: wx,
        dustparameters_generationDecayRate: bx,
        dustparameters_new: yx,
        dustparameters_nightDustRatio: mx,
        dustparameters_serialize: Sx,
        dustparameters_set_dustGracePeriodSeconds: Fx,
        dustparameters_set_generationDecayRate: kx,
        dustparameters_set_nightDustRatio: xx,
        dustparameters_timeToCapSeconds: Ex,
        dustparameters_toString: Ix,
        dustregistration_allowFeePayment: Rx,
        dustregistration_deserialize: Ox,
        dustregistration_dustAddress: Tx,
        dustregistration_new: vx,
        dustregistration_nightKey: Cx,
        dustregistration_serialize: zx,
        dustregistration_set_allowFeePayment: Ax,
        dustregistration_set_dustAddress: $x,
        dustregistration_set_nightKey: Px,
        dustregistration_set_signature: Mx,
        dustregistration_signature: Nx,
        dustregistration_toString: Bx,
        dustsecretkey_clear: Ux,
        dustsecretkey_fromBigint: jx,
        dustsecretkey_fromSeed: Lx,
        dustsecretkey_new: Kx,
        dustsecretkey_publicKey: Dx,
        dustspend_new: qx,
        dustspend_newCommitment: Vx,
        dustspend_oldNullifier: Hx,
        dustspend_proof: Jx,
        dustspend_toString: Wx,
        dustspend_vFee: Gx,
        duststate_deserialize: Yx,
        duststate_generation: Xx,
        duststate_new: Qx,
        duststate_serialize: Zx,
        duststate_toString: tE,
        duststate_utxo: eE,
        duststatechanges_receivedUtxos: rE,
        duststatechanges_source: nE,
        duststatechanges_spentUtxos: sE,
        duststatemerkletreecollapsedupdate_deserialize: iE,
        duststatemerkletreecollapsedupdate_new: oE,
        duststatemerkletreecollapsedupdate_newFromCommitmentTree: aE,
        duststatemerkletreecollapsedupdate_newFromGenerationTree: cE,
        duststatemerkletreecollapsedupdate_serialize: _E,
        duststatemerkletreecollapsedupdate_toString: uE,
        dustutxostate_deserialize: lE,
        dustutxostate_new: fE,
        dustutxostate_serialize: dE,
        dustutxostate_toString: gE,
        ecAdd: nz,
        ecMul: sz,
        ecMulGenerator: iz,
        encodeCoinPublicKey: oz,
        encodeContractAddress: az,
        encodeQualifiedShieldedCoinInfo: cz,
        encodeRawTokenType: _z,
        encodeShieldedCoinInfo: uz,
        encodeUserAddress: lz,
        encryptionsecretkey_clear: pE,
        encryptionsecretkey_deserialize: hE,
        encryptionsecretkey_new: wE,
        encryptionsecretkey_public_key: bE,
        encryptionsecretkey_taggedDeserialize: yE,
        encryptionsecretkey_test: mE,
        encryptionsecretkey_yesIKnowTheSecurityImplicationsOfThis_serialize: SE,
        encryptionsecretkey_yesIKnowTheSecurityImplicationsOfThis_taggedSerialize: FE,
        entryPointHash: fz,
        event_content: kE,
        event_deserialize: xE,
        event_new: EE,
        event_serialize: IE,
        event_source: RE,
        event_toString: OE,
        feeToken: TE,
        hashToCurve: dz,
        intent_actions: vE,
        intent_addCall: CE,
        intent_addDeploy: zE,
        intent_addMaintenanceUpdate: AE,
        intent_bind: $E,
        intent_binding: PE,
        intent_construct: ME,
        intent_deserialize: NE,
        intent_dustActions: BE,
        intent_eraseProofs: UE,
        intent_eraseSignatures: jE,
        intent_fallibleUnshieldedOffer: LE,
        intent_guaranteedUnshieldedOffer: KE,
        intent_has_contract_deployments: DE,
        intent_has_fallible_offers: qE,
        intent_has_fallible_transcripts: VE,
        intent_intentHash: HE,
        intent_new: JE,
        intent_serialize: WE,
        intent_set_actions: GE,
        intent_set_dustActions: YE,
        intent_set_fallibleUnshieldedOffer: XE,
        intent_set_guaranteedUnshieldedOffer: QE,
        intent_set_ttl: ZE,
        intent_signatureData: tI,
        intent_toString: eI,
        intent_ttl: rI,
        intounderlyingbytesource_autoAllocateChunkSize: JA,
        intounderlyingbytesource_cancel: WA,
        intounderlyingbytesource_pull: GA,
        intounderlyingbytesource_start: YA,
        intounderlyingbytesource_type: XA,
        intounderlyingsink_abort: QA,
        intounderlyingsink_close: ZA,
        intounderlyingsink_write: t$,
        intounderlyingsource_cancel: e$,
        intounderlyingsource_pull: r$,
        leafHash: gz,
        ledgerparameters_deserialize: nI,
        ledgerparameters_dust: sI,
        ledgerparameters_feePrices: iI,
        ledgerparameters_initialParameters: oI,
        ledgerparameters_maxPriceAdjustment: aI,
        ledgerparameters_new: cI,
        ledgerparameters_normalizeFullness: _I,
        ledgerparameters_serialize: uI,
        ledgerparameters_toString: lI,
        ledgerparameters_transactionCostModel: fI,
        ledgerstate_apply: dI,
        ledgerstate_applySystemTx: gI,
        ledgerstate_blank: pI,
        ledgerstate_block_reward_pool: hI,
        ledgerstate_bridgeReceiving: wI,
        ledgerstate_deserialize: bI,
        ledgerstate_dust: yI,
        ledgerstate_index: mI,
        ledgerstate_locked_pool: SI,
        ledgerstate_new: FI,
        ledgerstate_parameters: kI,
        ledgerstate_postBlockUpdate: xI,
        ledgerstate_reserve_pool: EI,
        ledgerstate_serialize: II,
        ledgerstate_set_parameters: RI,
        ledgerstate_testingDistributeNight: OI,
        ledgerstate_toString: TI,
        ledgerstate_treasuryBalance: vI,
        ledgerstate_unclaimedBlockRewards: CI,
        ledgerstate_updateIndex: zI,
        ledgerstate_utxo: AI,
        ledgerstate_zswap: $I,
        maintenanceupdate_addSignature: PI,
        maintenanceupdate_address: MI,
        maintenanceupdate_counter: NI,
        maintenanceupdate_data_to_sign: BI,
        maintenanceupdate_new: UI,
        maintenanceupdate_signatures: jI,
        maintenanceupdate_toString: LI,
        maintenanceupdate_updates: KI,
        maxAlignedSize: pz,
        maxField: hz,
        memory: p2,
        merkletreecollapsedupdate_deserialize: DI,
        merkletreecollapsedupdate_new: qI,
        merkletreecollapsedupdate_serialize: Qv,
        merkletreecollapsedupdate_toString: Xv,
        nativeToken: VI,
        nobinding_deserialize: HI,
        nobinding_instance: JI,
        nobinding_new: WI,
        nobinding_serialize: GI,
        nobinding_toString: YI,
        noproof_instance: XI,
        noproof_new: QI,
        noproof_toString: ZI,
        parseCheckResult: tR,
        partitionTranscripts: eR,
        persistentCommit: wz,
        persistentHash: bz,
        prebinding_deserialize: rR,
        prebinding_instance: nR,
        prebinding_new: sR,
        prebinding_serialize: iR,
        prebinding_toString: oR,
        prepartitioncontractcall_new: aR,
        prepartitioncontractcall_toString: cR,
        preproof_deserialize: _R,
        preproof_instance: uR,
        preproof_new: lR,
        preproof_serialize: fR,
        preproof_toString: dR,
        pretranscript_new: gR,
        pretranscript_toString: pR,
        proofDataIntoSerializedPreimage: yz,
        proof_deserialize: hR,
        proof_instance: wR,
        proof_new: bR,
        proof_serialize: yR,
        proof_toString: mR,
        querycontext_address: mz,
        querycontext_block: Sz,
        querycontext_com_indices: Fz,
        querycontext_effects: kz,
        querycontext_insertCommitment: xz,
        querycontext_new: Ez,
        querycontext_qualify: Iz,
        querycontext_query: Rz,
        querycontext_runTranscript: Oz,
        querycontext_set_block: Tz,
        querycontext_set_effects: vz,
        querycontext_state: Cz,
        querycontext_toString: zz,
        querycontext_toVmStack: Az,
        queryresults_context: $z,
        queryresults_events: Pz,
        queryresults_gas_cost: Mz,
        queryresults_new: Nz,
        queryresults_toString: Bz,
        rawTokenType: Uz,
        replaceauthority_authority: SR,
        replaceauthority_new: FR,
        replaceauthority_toString: kR,
        runProgram: jz,
        runtimeCoinCommitment: Lz,
        runtimeCoinNullifier: Kz,
        sampleCoinPublicKey: xR,
        sampleContractAddress: Dz,
        sampleDustSecretKey: ER,
        sampleEncryptionPublicKey: IR,
        sampleIntentHash: RR,
        sampleRawTokenType: qz,
        sampleSigningKey: Vz,
        sampleUserAddress: Hz,
        shieldedToken: OR,
        signData: Jz,
        signatureVerifyingKey: Wz,
        signatureenabled_deserialize: TR,
        signatureenabled_instance: vR,
        signatureenabled_new: CR,
        signatureenabled_serialize: zR,
        signatureenabled_toString: AR,
        signatureerased_instance: $R,
        signatureerased_new: Vv,
        signatureerased_toString: PR,
        signingKeyFromBip340: Gz,
        stateboundedmerkletree_blank: Yz,
        stateboundedmerkletree_collapse: Xz,
        stateboundedmerkletree_findPathForLeaf: Qz,
        stateboundedmerkletree_height: Zz,
        stateboundedmerkletree_pathForLeaf: tA,
        stateboundedmerkletree_rehash: eA,
        stateboundedmerkletree_root: rA,
        stateboundedmerkletree_toString: nA,
        stateboundedmerkletree_update: sA,
        statemap_get: iA,
        statemap_insert: oA,
        statemap_keys: aA,
        statemap_new: cA,
        statemap_remove: _A,
        statemap_toString: uA,
        statevalue_arrayPush: lA,
        statevalue_asArray: fA,
        statevalue_asBoundedMerkleTree: dA,
        statevalue_asCell: gA,
        statevalue_asMap: pA,
        statevalue_decode: hA,
        statevalue_encode: wA,
        statevalue_logSize: bA,
        statevalue_new: yA,
        statevalue_newArray: mA,
        statevalue_newBoundedMerkleTree: SA,
        statevalue_newCell: FA,
        statevalue_newMap: kA,
        statevalue_newNull: xA,
        statevalue_toString: EA,
        statevalue_type: IA,
        systemtransaction_deserialize: MR,
        systemtransaction_new: NR,
        systemtransaction_serialize: BR,
        systemtransaction_toString: UR,
        transaction_addCalls: jR,
        transaction_addIntent: LR,
        transaction_addZswapOffer: KR,
        transaction_bind: DR,
        transaction_bindingRandomness: qR,
        transaction_cost: VR,
        transaction_deserialize: HR,
        transaction_eraseProofs: JR,
        transaction_eraseSignatures: WR,
        transaction_fallibleOffer: GR,
        transaction_fees: YR,
        transaction_feesWithMargin: XR,
        transaction_fromParts: QR,
        transaction_fromPartsRandomized: ZR,
        transaction_fromRewards: tO,
        transaction_guaranteedOffer: eO,
        transaction_identifiers: rO,
        transaction_imbalances: nO,
        transaction_intents: sO,
        transaction_merge: iO,
        transaction_mockProve: oO,
        transaction_new: aO,
        transaction_prove: cO,
        transaction_rewards: _O,
        transaction_serialize: uO,
        transaction_set_fallibleOffer: lO,
        transaction_set_guaranteedOffer: fO,
        transaction_set_intents: dO,
        transaction_toString: gO,
        transaction_transactionHash: pO,
        transaction_wellFormed: hO,
        transactioncontext_new: wO,
        transactioncontext_toString: bO,
        transactioncostmodel_baselineCost: yO,
        transactioncostmodel_deserialize: mO,
        transactioncostmodel_initialTransactionCostModel: SO,
        transactioncostmodel_new: FO,
        transactioncostmodel_runtimeCostModel: kO,
        transactioncostmodel_serialize: xO,
        transactioncostmodel_toString: EO,
        transactionresult_error: IO,
        transactionresult_events: RO,
        transactionresult_new: OO,
        transactionresult_successfulSegments: TO,
        transactionresult_toString: vO,
        transactionresult_type_: CO,
        transientCommit: RA,
        transientHash: OA,
        unshieldedToken: Hv,
        unshieldedoffer_addSignatures: zO,
        unshieldedoffer_construct: AO,
        unshieldedoffer_eraseSignatures: $O,
        unshieldedoffer_inputs: PO,
        unshieldedoffer_new: MO,
        unshieldedoffer_outputs: NO,
        unshieldedoffer_signatures: BO,
        unshieldedoffer_toString: UO,
        updatedValue: jO,
        upgradeFromTransient: TA,
        utxometa_ctime: LO,
        utxometa_new: KO,
        utxometa_set_ctime: DO,
        utxostate_delta: qO,
        utxostate_filter: VO,
        utxostate_lookupMeta: HO,
        utxostate_new: JO,
        utxostate_utxos: WO,
        valueToBigInt: vA,
        verifiedtransaction_transaction: GO,
        verifierkeyinsert_new: YO,
        verifierkeyinsert_operation: XO,
        verifierkeyinsert_toString: QO,
        verifierkeyinsert_vk: ZO,
        verifierkeyremove_new: tT,
        verifierkeyremove_operation: eT,
        verifierkeyremove_toString: rT,
        verifierkeyremove_version: nT,
        verifySignature: CA,
        vmresults_events: zA,
        vmresults_gas_cost: AA,
        vmresults_new: $A,
        vmresults_stack: PA,
        vmresults_toString: MA,
        vmstack_get: NA,
        vmstack_isStrong: BA,
        vmstack_length: UA,
        vmstack_new: jA,
        vmstack_push: LA,
        vmstack_removeLast: KA,
        vmstack_toString: DA,
        wellformedstrictness_enforce_balancing: sT,
        wellformedstrictness_enforce_limits: iT,
        wellformedstrictness_new: oT,
        wellformedstrictness_set_enforce_balancing: aT,
        wellformedstrictness_set_enforce_limits: cT,
        wellformedstrictness_set_verify_contract_proofs: _T,
        wellformedstrictness_set_verify_native_proofs: uT,
        wellformedstrictness_set_verify_signatures: lT,
        wellformedstrictness_verify_contract_proofs: fT,
        wellformedstrictness_verify_native_proofs: dT,
        wellformedstrictness_verify_signatures: gT,
        zswapchainstate_deserialize: pT,
        zswapchainstate_deserializeFromLedgerState: hT,
        zswapchainstate_filter: wT,
        zswapchainstate_firstFree: bT,
        zswapchainstate_new: yT,
        zswapchainstate_postBlockUpdate: mT,
        zswapchainstate_serialize: ST,
        zswapchainstate_toString: FT,
        zswapchainstate_tryApply: kT,
        zswapinput_contractAddress: xT,
        zswapinput_deserialize: ET,
        zswapinput_new: IT,
        zswapinput_newContractOwned: RT,
        zswapinput_nullifier: OT,
        zswapinput_proof: TT,
        zswapinput_serialize: vT,
        zswapinput_toString: CT,
        zswaplocalstate_apply: zT,
        zswaplocalstate_applyCollapsedUpdate: AT,
        zswaplocalstate_applyFailed: $T,
        zswaplocalstate_applyWithChanges: PT,
        zswaplocalstate_clearPending: MT,
        zswaplocalstate_coins: NT,
        zswaplocalstate_deserialize: BT,
        zswaplocalstate_firstFree: UT,
        zswaplocalstate_insertCoin: jT,
        zswaplocalstate_merkle_tree_root: LT,
        zswaplocalstate_new: KT,
        zswaplocalstate_pendingOutputs: DT,
        zswaplocalstate_pendingSpends: qT,
        zswaplocalstate_removeCoinByNullifier: VT,
        zswaplocalstate_replayEvents: HT,
        zswaplocalstate_replayEventsWithChanges: JT,
        zswaplocalstate_replayRawEvents: WT,
        zswaplocalstate_revertTransaction: GT,
        zswaplocalstate_serialize: YT,
        zswaplocalstate_spend: XT,
        zswaplocalstate_spendFromOutput: QT,
        zswaplocalstate_toString: ZT,
        zswaplocalstate_watchFor: tv,
        zswaplocalstatewithchanges_changes: ev,
        zswaplocalstatewithchanges_state: rv,
        zswapoffer_deltas: nv,
        zswapoffer_deserialize: sv,
        zswapoffer_fromInput: iv,
        zswapoffer_fromOutput: ov,
        zswapoffer_fromTransient: av,
        zswapoffer_inputs: cv,
        zswapoffer_merge: _v,
        zswapoffer_new: uv,
        zswapoffer_outputs: lv,
        zswapoffer_serialize: fv,
        zswapoffer_toString: dv,
        zswapoffer_transients: gv,
        zswapoutput_commitment: pv,
        zswapoutput_construct: hv,
        zswapoutput_contractAddress: wv,
        zswapoutput_deserialize: bv,
        zswapoutput_new: yv,
        zswapoutput_newContractOwned: mv,
        zswapoutput_proof: Sv,
        zswapoutput_serialize: Fv,
        zswapoutput_toString: kv,
        zswapsecretkeys_clear: xv,
        zswapsecretkeys_coinPublicKey: Ev,
        zswapsecretkeys_coinSecretKey: Iv,
        zswapsecretkeys_encryptionPublicKey: Rv,
        zswapsecretkeys_encryptionSecretKey: Ov,
        zswapsecretkeys_fromSeed: Tv,
        zswapsecretkeys_fromSeedRng: vv,
        zswapsecretkeys_new: Cv,
        zswapstatechanges_receivedCoins: zv,
        zswapstatechanges_source: Av,
        zswapstatechanges_spentCoins: $v,
        zswaptransient_commitment: Pv,
        zswaptransient_contractAddress: Mv,
        zswaptransient_deserialize: Nv,
        zswaptransient_inputProof: Bv,
        zswaptransient_new: Uv,
        zswaptransient_newFromContractOwnedOutput: jv,
        zswaptransient_nullifier: Lv,
        zswaptransient_outputProof: Kv,
        zswaptransient_serialize: Dv,
        zswaptransient_toString: qv
    }, Symbol.toStringTag, {
        value: "Module"
    }));
    r0(p$);
    Rp();
    let h$, Ma, uu, an, Op, w$;
    h$ = (e)=>typeof e == "function";
    w = function(e, t) {
        if (typeof e == "function") return function() {
            return e(arguments) ? t.apply(this, arguments) : (r)=>t(r, ...arguments);
        };
        switch(e){
            case 0:
            case 1:
                throw new RangeError(`Invalid arity ${e}`);
            case 2:
                return function(r, n) {
                    return arguments.length >= 2 ? t(r, n) : function(s) {
                        return t(s, r);
                    };
                };
            case 3:
                return function(r, n, s) {
                    return arguments.length >= 3 ? t(r, n, s) : function(i) {
                        return t(i, r, n);
                    };
                };
            case 4:
                return function(r, n, s, i) {
                    return arguments.length >= 4 ? t(r, n, s, i) : function(a) {
                        return t(a, r, n, s);
                    };
                };
            case 5:
                return function(r, n, s, i, a) {
                    return arguments.length >= 5 ? t(r, n, s, i, a) : function(_) {
                        return t(_, r, n, s, i);
                    };
                };
            default:
                return function() {
                    if (arguments.length >= e) return t.apply(this, arguments);
                    const r = arguments;
                    return function(n) {
                        return t(n, ...r);
                    };
                };
        }
    };
    _t = (e)=>e;
    Ma = (e)=>()=>e;
    uu = Ma(!0);
    an = Ma(!1);
    Op = Ma(void 0);
    w$ = Op;
    function m(e, t, r, n, s, i, a, _, f) {
        switch(arguments.length){
            case 1:
                return e;
            case 2:
                return t(e);
            case 3:
                return r(t(e));
            case 4:
                return n(r(t(e)));
            case 5:
                return s(n(r(t(e))));
            case 6:
                return i(s(n(r(t(e)))));
            case 7:
                return a(i(s(n(r(t(e))))));
            case 8:
                return _(a(i(s(n(r(t(e)))))));
            case 9:
                return f(_(a(i(s(n(r(t(e))))))));
            default:
                {
                    let g = arguments[0];
                    for(let h = 1; h < arguments.length; h++)g = arguments[h](g);
                    return g;
                }
        }
    }
    let Na, b$, Tp, y$, Pd, vp, m$, Md, Nd;
    q = (e, t)=>{
        switch(t.length){
            case 0:
                return e;
            case 1:
                return t[0](e);
            case 2:
                return t[1](t[0](e));
            case 3:
                return t[2](t[1](t[0](e)));
            case 4:
                return t[3](t[2](t[1](t[0](e))));
            case 5:
                return t[4](t[3](t[2](t[1](t[0](e)))));
            case 6:
                return t[5](t[4](t[3](t[2](t[1](t[0](e))))));
            case 7:
                return t[6](t[5](t[4](t[3](t[2](t[1](t[0](e)))))));
            case 8:
                return t[7](t[6](t[5](t[4](t[3](t[2](t[1](t[0](e))))))));
            case 9:
                return t[8](t[7](t[6](t[5](t[4](t[3](t[2](t[1](t[0](e)))))))));
            default:
                {
                    let r = e;
                    for(let n = 0, s = t.length; n < s; n++)r = t[n](r);
                    return r;
                }
        }
    };
    Na = (e)=>(t, r)=>t === r || e(t, r);
    b$ = (e, t)=>e === t;
    Tp = ()=>b$;
    y$ = Tp();
    Pd = Tp();
    vp = w(2, (e, t)=>Na((r, n)=>e(t(r), t(n))));
    m$ = (e)=>Na((t, r)=>{
            if (t.length !== r.length) return !1;
            for(let n = 0; n < t.length; n++)if (!e(t[n], r[n])) return !1;
            return !0;
        });
    Md = (e)=>{
        const t = Object.keys(e);
        return Na((r, n)=>{
            for (const s of t)if (!e[s](r[s], n[s])) return !1;
            return !0;
        });
    };
    Nd = "effect/GlobalValue";
    let ui;
    const rt = (e, t)=>(ui || (globalThis[Nd] ??= new Map, ui = globalThis[Nd]), ui.has(e) || ui.set(e, t()), ui.get(e)), kr = (e)=>typeof e == "string", hr = (e)=>typeof e == "number", wl = (e)=>typeof e == "boolean", Ba = (e)=>typeof e == "bigint", lu = (e)=>typeof e == "symbol", eo = h$, S$ = (e)=>e === void 0, F$ = (e)=>!1, bl = (e)=>typeof e == "object" && e !== null, Xs = (e)=>bl(e) || eo(e), W = w(2, (e, t)=>Xs(e) && t in e), Cp = w(2, (e, t)=>W(e, "_tag") && e._tag === t), Hn = (e)=>e == null, k$ = (e)=>e != null, x$ = (e)=>e instanceof Date, zp = (e)=>typeof e == "string" || W(e, Symbol.iterator), E$ = (e)=>bl(e) && !Array.isArray(e), Ap = (e)=>W(e, "then") && eo(e.then), Ua = (e)=>`BUG: ${e} - please report an issue at https://github.com/Effect-TS/effect/issues`;
    let $p = class Pp {
        self;
        called = !1;
        constructor(t){
            this.self = t;
        }
        next(t) {
            return this.called ? {
                value: t,
                done: !0
            } : (this.called = !0, {
                value: this.self,
                done: !1
            });
        }
        return(t) {
            return {
                value: t,
                done: !0
            };
        }
        throw(t) {
            throw t;
        }
        [Symbol.iterator]() {
            return new Pp(this.self);
        }
    };
    const I$ = 335903614, R$ = 4150755663, O$ = 1481765933, T$ = 1284865837, v$ = 9007199254740992, C$ = 134217728;
    class z$ {
        _state;
        constructor(t, r, n, s){
            return Hn(r) && Hn(t) ? (r = Math.random() * 4294967295 >>> 0, t = 0) : Hn(r) && (r = t, t = 0), Hn(s) && Hn(n) ? (s = this._state ? this._state[3] : R$, n = this._state ? this._state[2] : I$) : Hn(s) && (s = n, n = 0), this._state = new Int32Array([
                0,
                0,
                n >>> 0,
                ((s || 0) | 1) >>> 0
            ]), this._next(), Bd(this._state, this._state[0], this._state[1], t >>> 0, r >>> 0), this._next(), this;
        }
        getState() {
            return [
                this._state[0],
                this._state[1],
                this._state[2],
                this._state[3]
            ];
        }
        setState(t) {
            this._state[0] = t[0], this._state[1] = t[1], this._state[2] = t[2], this._state[3] = t[3] | 1;
        }
        integer(t) {
            return Math.round(this.number() * Number.MAX_SAFE_INTEGER) % t;
        }
        number() {
            const t = (this._next() & 67108863) * 1, r = (this._next() & 134217727) * 1;
            return (t * C$ + r) / v$;
        }
        _next() {
            const t = this._state[0] >>> 0, r = this._state[1] >>> 0;
            A$(this._state, t, r, O$, T$), Bd(this._state, this._state[0], this._state[1], this._state[2], this._state[3]);
            let n = t >>> 18, s = (r >>> 18 | t << 14) >>> 0;
            n = (n ^ t) >>> 0, s = (s ^ r) >>> 0;
            const i = (s >>> 27 | n << 5) >>> 0, a = t >>> 27, _ = (-a >>> 0 & 31) >>> 0;
            return (i >>> a | i << _) >>> 0;
        }
    }
    function A$(e, t, r, n, s) {
        let i = (r >>> 16) * (s & 65535) >>> 0, a = (r & 65535) * (s >>> 16) >>> 0, _ = (r & 65535) * (s & 65535) >>> 0, f = (r >>> 16) * (s >>> 16) + ((a >>> 16) + (i >>> 16)) >>> 0;
        a = a << 16 >>> 0, _ = _ + a >>> 0, _ >>> 0 < a >>> 0 && (f = f + 1 >>> 0), i = i << 16 >>> 0, _ = _ + i >>> 0, _ >>> 0 < i >>> 0 && (f = f + 1 >>> 0), f = f + Math.imul(r, n) >>> 0, f = f + Math.imul(t, s) >>> 0, e[0] = f, e[1] = _;
    }
    function Bd(e, t, r, n, s) {
        let i = t + n >>> 0;
        const a = r + s >>> 0;
        a >>> 0 < r >>> 0 && (i = i + 1 | 0), e[0] = i, e[1] = a;
    }
    const fu = Symbol.for("effect/Utils/YieldWrap");
    class ro {
        #t;
        constructor(t){
            this.#t = t;
        }
        [fu]() {
            return this.#t;
        }
    }
    function $$(e) {
        if (typeof e == "object" && e !== null && fu in e) return e[fu]();
        throw new Error(Ua("yieldWrapGet"));
    }
    const ke = rt("effect/Utils/isStructuralRegion", ()=>({
            enabled: !1,
            tester: void 0
        })), Mp = {
        effect_internal_function: (e)=>e()
    }, P$ = {
        effect_internal_function: (e)=>{
            try {
                return e();
            } finally{}
        }
    }, M$ = Mp.effect_internal_function(()=>new Error().stack)?.includes("effect_internal_function") === !0, Jt = M$ ? Mp.effect_internal_function : P$.effect_internal_function, A_ = rt(Symbol.for("effect/Hash/randomHashCache"), ()=>new WeakMap), tt = Symbol.for("effect/Hash"), U = (e)=>{
        if (ke.enabled === !0) return 0;
        switch(typeof e){
            case "number":
                return ml(e);
            case "bigint":
                return kt(e.toString(10));
            case "boolean":
                return kt(String(e));
            case "symbol":
                return kt(String(e));
            case "string":
                return kt(e);
            case "undefined":
                return kt("undefined");
            case "function":
            case "object":
                return e === null ? kt("null") : e instanceof Date ? Number.isNaN(e.getTime()) ? kt("Invalid Date") : U(e.toISOString()) : e instanceof URL ? U(e.href) : N$(e) ? e[tt]() : yl(e);
            default:
                throw new Error(`BUG: unhandled typeof ${typeof e} - please report an issue at https://github.com/Effect-TS/effect/issues`);
        }
    }, yl = (e)=>(A_.has(e) || A_.set(e, ml(Math.floor(Math.random() * Number.MAX_SAFE_INTEGER))), A_.get(e)), nt = (e)=>(t)=>t * 53 ^ e, ja = (e)=>e & 3221225471 | e >>> 1 & 1073741824, N$ = (e)=>W(e, tt), ml = (e)=>{
        if (e !== e || e === 1 / 0) return 0;
        let t = e | 0;
        for(t !== e && (t ^= e * 4294967295); e > 4294967295;)t ^= e /= 4294967295;
        return ja(t);
    }, kt = (e)=>{
        let t = 5381, r = e.length;
        for(; r;)t = t * 33 ^ e.charCodeAt(--r);
        return ja(t);
    }, B$ = (e, t)=>{
        let r = 12289;
        for(let n = 0; n < t.length; n++)r ^= m(kt(t[n]), nt(U(e[t[n]])));
        return ja(r);
    }, Sl = (e)=>B$(e, Object.keys(e)), no = (e)=>{
        let t = 6151;
        for(let r = 0; r < e.length; r++)t = m(t, nt(U(e[r])));
        return ja(t);
    }, yt = function() {
        if (arguments.length === 1) {
            const r = arguments[0];
            return function(n) {
                return Object.defineProperty(r, tt, {
                    value () {
                        return n;
                    },
                    enumerable: !1
                }), n;
            };
        }
        const e = arguments[0], t = arguments[1];
        return Object.defineProperty(e, tt, {
            value () {
                return t;
            },
            enumerable: !1
        }), t;
    }, Y = Symbol.for("effect/Equal");
    function Q() {
        return arguments.length === 1 ? (e)=>ia(e, arguments[0]) : ia(arguments[0], arguments[1]);
    }
    function ia(e, t) {
        if (e === t) return !0;
        const r = typeof e;
        if (r !== typeof t) return !1;
        if (r === "object" || r === "function") {
            if (e !== null && t !== null) {
                if (oa(e) && oa(t)) return U(e) === U(t) && e[Y](t) ? !0 : ke.enabled && ke.tester ? ke.tester(e, t) : !1;
                if (e instanceof Date && t instanceof Date) {
                    const n = e.getTime(), s = t.getTime();
                    return n === s || Number.isNaN(n) && Number.isNaN(s);
                } else if (e instanceof URL && t instanceof URL) return e.href === t.href;
            }
            if (ke.enabled) {
                if (e === null || t === null) return !1;
                if (Array.isArray(e) && Array.isArray(t)) return e.length === t.length && e.every((n, s)=>ia(n, t[s]));
                if (Object.getPrototypeOf(e) === Object.prototype && Object.getPrototypeOf(t) === Object.prototype) {
                    const n = Object.keys(e), s = Object.keys(t);
                    if (n.length === s.length) {
                        for (const i of n)if (!(i in t && ia(e[i], t[i]))) return ke.tester ? ke.tester(e, t) : !1;
                        return !0;
                    }
                }
                return ke.tester ? ke.tester(e, t) : !1;
            }
        }
        return ke.enabled && ke.tester ? ke.tester(e, t) : !1;
    }
    const oa = (e)=>W(e, Y), Fl = ()=>Q, dt = Symbol.for("nodejs.util.inspect.custom"), Ut = (e)=>{
        try {
            if (W(e, "toJSON") && eo(e.toJSON) && e.toJSON.length === 0) return e.toJSON();
            if (Array.isArray(e)) return e.map(Ut);
        } catch  {
            return {};
        }
        return K$(e);
    }, $_ = "[Circular]";
    function U$(e) {
        try {
            return e.toISOString();
        } catch  {
            return "Invalid Date";
        }
    }
    function j$(e) {
        try {
            const t = e.toString();
            return typeof t == "string" ? t : String(t);
        } catch  {
            return "[toString threw]";
        }
    }
    function Np(e) {
        return kr(e) ? JSON.stringify(e) : String(e);
    }
    function so(e, t) {
        const r = new WeakSet, n = (a, _)=>{
            const f = a?.constructor;
            return f && f !== Object.prototype.constructor && f.name ? `${f.name}(${_})` : _;
        }, s = (a)=>{
            try {
                return Reflect.ownKeys(a);
            } catch  {
                return [
                    "[ownKeys threw]"
                ];
            }
        };
        function i(a, _ = 0) {
            if (Array.isArray(a)) return r.has(a) ? $_ : (r.add(a), `[${a.map((f)=>i(f, _)).join(",")}]`);
            if (x$(a)) return U$(a);
            if (W(a, "toString") && eo(a.toString) && a.toString !== Object.prototype.toString && a.toString !== Array.prototype.toString) {
                const f = j$(a);
                return a instanceof Error && a.cause ? `${f} (cause: ${i(a.cause, _)})` : f;
            }
            if (kr(a)) return JSON.stringify(a);
            if (hr(a) || a == null || wl(a) || lu(a)) return String(a);
            if (Ba(a)) return String(a) + "n";
            if (a instanceof Set || a instanceof Map) return r.has(a) ? $_ : (r.add(a), `${a.constructor.name}(${i(Array.from(a), _)})`);
            if (Xs(a)) {
                if (r.has(a)) return $_;
                r.add(a);
                const f = s(a);
                {
                    const g = `{${f.map((h)=>`${Np(h)}:${i(a[h], _)}`).join(",")}}`;
                    return n(a, g);
                }
            }
            return String(a);
        }
        return i(e, 0);
    }
    const qt = (e)=>JSON.stringify(e, null, 2), Os = (e, t = 2)=>{
        if (typeof e == "string") return e;
        try {
            return typeof e == "object" ? Bp(e, t) : String(e);
        } catch  {
            return String(e);
        }
    }, Bp = (e, t)=>{
        let r = [];
        const n = JSON.stringify(e, (s, i)=>typeof i == "object" && i !== null ? r.includes(i) ? void 0 : r.push(i) && (cn.fiberRefs !== void 0 && Up(i) ? i[kl](cn.fiberRefs) : i) : i, t);
        return r = void 0, n;
    }, kl = Symbol.for("effect/Inspectable/Redactable"), Up = (e)=>typeof e == "object" && e !== null && kl in e, cn = rt("effect/Inspectable/redactableState", ()=>({
            fiberRefs: void 0
        })), L$ = (e, t)=>{
        const r = cn.fiberRefs;
        cn.fiberRefs = e;
        try {
            return t();
        } finally{
            cn.fiberRefs = r;
        }
    }, K$ = (e)=>Up(e) && cn.fiberRefs !== void 0 ? e[kl](cn.fiberRefs) : e, ki = "Async", La = "Commit", Yt = "Failure", P_ = "OnFailure", aa = "OnSuccess", ca = "OnSuccessAndFailure", Xt = "Success", jp = "Sync", D$ = "Tag", Qs = "UpdateRuntimeFlags", _a = "While", xi = "Iterator", Lp = "WithRuntime", qo = "Yield", xl = "RevertFlags";
    let q$ = "3.21.4";
    let El, V$, H$, J$, W$, Ts, G$, Y$, io, Il, An, X$, Q$, Kp, Dp, Z$, t3, e3, qp, Vp, Hp, Rl, ua, Jp, Wp, r3, n3, Ol, Tl, Gp, s3, i3, o3, a3, Be, Yp, c3, oo, _3, vl, Xp, Qp, l3, Zp, f3, M, N, Vt, th, zt, Pr, d3, Ka, Ye, g3, p3, Ei, Zs, h3, w3, b3, y3, m3, S3, F3, k3, Da, x3, Et, E3, I3, la, R3, eh, O3, T3, v3, Vo, Qt, rh, C3, z3, Cl, Ii, ne, A3, nh, Sn, $3, P3, M3, Ud, Li, jd, N3, B3, U3, j3, yi, L3, Ho, vs, Oe, is, zl, K3, sh, Ld, Al, ih, D3, $n, oh, ah, ch, Kd, q3, qa, Dd, V3, H3, J3, Cs, fa, W3, G3, Y3, _h, uh, $l, ti, X3, Pl, lh, fh, dh, gh, ph, hh, Q3, wh, bh, yh, mh, Sh, Fh, Z3, oe, tP, eP, rP, kh, xh, Va, Eh, nP, sP, iP, oP, aP, Ih, cP, _P, Rh, uP, lP;
    El = ()=>q$;
    V$ = Symbol.for("effect/Effect");
    H$ = Symbol.for("effect/Stream");
    J$ = Symbol.for("effect/Sink");
    W$ = Symbol.for("effect/Channel");
    Ts = {
        _R: (e)=>e,
        _E: (e)=>e,
        _A: (e)=>e,
        _V: El()
    };
    G$ = {
        _A: (e)=>e,
        _In: (e)=>e,
        _L: (e)=>e,
        _E: (e)=>e,
        _R: (e)=>e
    };
    Y$ = {
        _Env: (e)=>e,
        _InErr: (e)=>e,
        _InElem: (e)=>e,
        _InDone: (e)=>e,
        _OutErr: (e)=>e,
        _OutElem: (e)=>e,
        _OutDone: (e)=>e
    };
    io = {
        [V$]: Ts,
        [H$]: Ts,
        [J$]: G$,
        [W$]: Y$,
        [Y] (e) {
            return this === e;
        },
        [tt] () {
            return yt(this, yl(this));
        },
        [Symbol.iterator] () {
            return new $p(new ro(this));
        },
        pipe () {
            return q(this, arguments);
        }
    };
    Il = {
        [tt] () {
            return yt(this, Sl(this));
        },
        [Y] (e) {
            const t = Object.keys(this), r = Object.keys(e);
            if (t.length !== r.length) return !1;
            for (const n of t)if (!(n in e && Q(this[n], e[n]))) return !1;
            return !0;
        }
    };
    An = {
        ...io,
        _op: La
    };
    X$ = {
        ...An,
        ...Il
    };
    Q$ = function() {
        function e() {}
        return e.prototype = An, e;
    }();
    Kp = Symbol.for("effect/Option");
    Dp = {
        ...io,
        [Kp]: {
            _A: (e)=>e
        },
        [dt] () {
            return this.toJSON();
        },
        toString () {
            return qt(this.toJSON());
        }
    };
    Z$ = Object.assign(Object.create(Dp), {
        _tag: "Some",
        _op: "Some",
        [Y] (e) {
            return qp(e) && Hp(e) && Q(this.value, e.value);
        },
        [tt] () {
            return yt(this, nt(U(this._tag))(U(this.value)));
        },
        toJSON () {
            return {
                _id: "Option",
                _tag: this._tag,
                value: Ut(this.value)
            };
        }
    });
    t3 = U("None");
    e3 = Object.assign(Object.create(Dp), {
        _tag: "None",
        _op: "None",
        [Y] (e) {
            return qp(e) && Vp(e);
        },
        [tt] () {
            return t3;
        },
        toJSON () {
            return {
                _id: "Option",
                _tag: this._tag
            };
        }
    });
    qp = (e)=>W(e, Kp);
    Vp = (e)=>e._tag === "None";
    Hp = (e)=>e._tag === "Some";
    Rl = Object.create(e3);
    ua = (e)=>{
        const t = Object.create(Z$);
        return t.value = e, t;
    };
    Jp = Symbol.for("effect/Either");
    Wp = {
        ...io,
        [Jp]: {
            _R: (e)=>e
        },
        [dt] () {
            return this.toJSON();
        },
        toString () {
            return qt(this.toJSON());
        }
    };
    r3 = Object.assign(Object.create(Wp), {
        _tag: "Right",
        _op: "Right",
        [Y] (e) {
            return Ol(e) && Gp(e) && Q(this.right, e.right);
        },
        [tt] () {
            return nt(U(this._tag))(U(this.right));
        },
        toJSON () {
            return {
                _id: "Either",
                _tag: this._tag,
                right: Ut(this.right)
            };
        }
    });
    n3 = Object.assign(Object.create(Wp), {
        _tag: "Left",
        _op: "Left",
        [Y] (e) {
            return Ol(e) && Tl(e) && Q(this.left, e.left);
        },
        [tt] () {
            return nt(U(this._tag))(U(this.left));
        },
        toJSON () {
            return {
                _id: "Either",
                _tag: this._tag,
                left: Ut(this.left)
            };
        }
    });
    Ol = (e)=>W(e, Jp);
    Tl = (e)=>e._tag === "Left";
    Gp = (e)=>e._tag === "Right";
    s3 = (e)=>{
        const t = Object.create(n3);
        return t.left = e, t;
    };
    i3 = (e)=>{
        const t = Object.create(r3);
        return t.right = e, t;
    };
    o3 = (e)=>Tl(e) ? Rl : ua(e.right);
    J = i3;
    K = s3;
    a3 = Ol;
    Ft = Tl;
    Be = Gp;
    Yp = w(2, (e, t)=>Ft(e) ? K(t(e.left)) : J(e.right));
    c3 = w(2, (e, t)=>Be(e) ? J(t(e.right)) : K(e.left));
    oo = w(2, (e, { onLeft: t, onRight: r })=>Ft(e) ? t(e.left) : r(e.right));
    _3 = oo({
        onLeft: _t,
        onRight: _t
    });
    vl = w(2, (e, t)=>{
        if (Be(e)) return e.right;
        throw t(e.left);
    });
    u3 = vl(()=>new Error("getOrThrow called on a Left"));
    Xp = (e)=>e.length > 0;
    Qp = (e)=>(t, r)=>t === r ? 0 : e(t, r);
    l3 = Qp((e, t)=>e < t ? -1 : 1);
    Zp = w(2, (e, t)=>Qp((r, n)=>e(t(r), t(n))));
    f3 = (e)=>w(2, (t, r)=>e(t, r) === 1);
    M = ()=>Rl;
    N = ua;
    Ct = Vp;
    Vt = Hp;
    se = w(2, (e, { onNone: t, onSome: r })=>Ct(e) ? t() : r(e.value));
    th = o3;
    zt = w(2, (e, t)=>Ct(e) ? t() : e.value);
    Pr = w(2, (e, t)=>Ct(e) ? t() : e);
    d3 = w(2, (e, t)=>Ct(e) ? N(t()) : e);
    Ka = (e)=>e == null ? M() : N(e);
    Ye = zt(Op);
    g3 = (e)=>(...t)=>{
            try {
                return N(e(...t));
            } catch  {
                return M();
            }
        };
    p3 = w(2, (e, t)=>{
        if (Vt(e)) return e.value;
        throw t();
    });
    kq = p3(()=>new Error("getOrThrow called on a None"));
    Ei = w(2, (e, t)=>Ct(e) ? M() : N(t(e.value)));
    Zs = w(2, (e, t)=>Ct(e) ? M() : t(e.value));
    h3 = w(2, (e, t)=>Ct(e) ? M() : Ka(t(e.value)));
    w3 = (e)=>{
        if (Symbol.iterator in e) {
            const r = [];
            for (const n of e){
                if (Ct(n)) return M();
                r.push(n.value);
            }
            return N(r);
        }
        const t = {};
        for (const r of Object.keys(e)){
            const n = e[r];
            if (Ct(n)) return M();
            t[r] = n.value;
        }
        return N(t);
    };
    b3 = (e)=>w(2, (t, r)=>Ct(t) ? !1 : e(t.value, r));
    y3 = Fl();
    m3 = b3(y3);
    S3 = w(2, (e, t)=>Ct(e) ? !1 : t(e.value));
    F3 = (...e)=>e;
    k3 = (...e)=>e;
    Da = (e)=>new Array(e);
    x3 = w(2, (e, t)=>{
        const r = Math.max(1, Math.floor(e)), n = new Array(r);
        for(let s = 0; s < r; s++)n[s] = t(s);
        return n;
    });
    Et = (e)=>Array.isArray(e) ? e : Array.from(e);
    E3 = (e)=>Array.isArray(e) ? e : [
            e
        ];
    I3 = w(2, (e, { onEmpty: t, onNonEmpty: r })=>Qt(e) ? r(ne(e), Sn(e)) : t());
    la = w(2, (e, t)=>[
            t,
            ...e
        ]);
    R3 = w(2, (e, t)=>[
            ...e,
            t
        ]);
    eh = w(2, (e, t)=>Et(e).concat(Et(t)));
    O3 = Array.isArray;
    T3 = (e)=>e.length === 0;
    v3 = T3;
    Vo = Xp;
    Qt = Xp;
    rh = (e, t)=>e < 0 || e >= t.length;
    C3 = (e, t)=>Math.floor(Math.min(Math.max(0, e), t.length));
    z3 = w(2, (e, t)=>{
        const r = Math.floor(t);
        return rh(r, e) ? M() : N(e[r]);
    });
    Cl = w(2, (e, t)=>{
        const r = Math.floor(t);
        if (rh(r, e)) throw new Error(`Index ${r} out of bounds`);
        return e[r];
    });
    Ii = z3(0);
    ne = Cl(0);
    A3 = (e)=>Qt(e) ? N(nh(e)) : M();
    nh = (e)=>e[e.length - 1];
    Sn = (e)=>e.slice(1);
    $3 = (e, t)=>{
        let r = 0;
        for (const n of e){
            if (!t(n, r)) break;
            r++;
        }
        return r;
    };
    P3 = w(2, (e, t)=>U3(e, $3(e, t)));
    M3 = w(2, (e, t)=>{
        const r = Et(e);
        return r.slice(C3(t, r), r.length);
    });
    Ud = (e)=>Array.from(e).reverse();
    Li = w(2, (e, t)=>{
        const r = Array.from(e);
        return r.sort(t), r;
    });
    jd = w(2, (e, t)=>N3(e, t, F3));
    N3 = w(3, (e, t, r)=>{
        const n = Et(e), s = Et(t);
        if (Qt(n) && Qt(s)) {
            const i = [
                r(ne(n), ne(s))
            ], a = Math.min(n.length, s.length);
            for(let _ = 1; _ < a; _++)i[_] = r(n[_], s[_]);
            return i;
        }
        return [];
    });
    B3 = Fl();
    U3 = w(2, (e, t)=>{
        const r = Array.from(e), n = Math.floor(t);
        return Qt(r) ? n >= 1 ? j3(r, n) : [
            [],
            r
        ] : [
            r,
            []
        ];
    });
    j3 = w(2, (e, t)=>{
        const r = Math.max(1, Math.floor(t));
        return r >= e.length ? [
            yi(e),
            []
        ] : [
            la(e.slice(1, r), ne(e)),
            e.slice(r)
        ];
    });
    yi = (e)=>e.slice();
    L3 = w(3, (e, t, r)=>{
        const n = Et(e), s = Et(t);
        return Qt(n) ? Qt(s) ? ih(r)(eh(n, s)) : n : s;
    });
    Ho = w(2, (e, t)=>L3(e, t, B3));
    vs = ()=>[];
    Oe = (e)=>[
            e
        ];
    is = w(2, (e, t)=>e.map(t));
    zl = w(2, (e, t)=>{
        if (v3(e)) return [];
        const r = [];
        for(let n = 0; n < e.length; n++){
            const s = t(e[n], n);
            for(let i = 0; i < s.length; i++)r.push(s[i]);
        }
        return r;
    });
    K3 = zl(_t);
    sh = w(3, (e, t, r)=>Et(e).reduce((n, s, i)=>r(n, s, i), t));
    Ld = (e, t)=>{
        const r = [];
        let n = e, s;
        for(; Vt(s = t(n));){
            const [i, a] = s.value;
            r.push(i), n = a;
        }
        return r;
    };
    Al = m$;
    ih = w(2, (e, t)=>{
        const r = Et(e);
        if (Qt(r)) {
            const n = [
                ne(r)
            ], s = Sn(r);
            for (const i of s)n.every((a)=>!t(i, a)) && n.push(i);
            return n;
        }
        return [];
    });
    D3 = (e)=>ih(e, Fl());
    $n = w(2, (e, t)=>Et(e).join(t));
    oh = (e, t)=>{
        switch(t._tag){
            case "StringKeyword":
            case "TemplateLiteral":
                return Object.keys(e);
            case "SymbolKeyword":
                return Object.getOwnPropertySymbols(e);
            case "Refinement":
                return oh(e, t.from);
        }
    };
    ah = (e)=>{
        let t = !1, r;
        return ()=>(t || (r = e(), t = !0), r);
    };
    ch = (e)=>Array.isArray(e);
    Kd = (e)=>`[${Np(e)}]`;
    q3 = (e)=>ch(e) ? e.map(Kd).join("") : Kd(e);
    qa = (e, t, r, n)=>{
        let s = e;
        return t !== void 0 && (s += `
details: ${t}`), s;
    };
    Dd = (e)=>qa("Duplicate index signature", `${e} index signature`);
    V3 = qa("Unsupported index signature parameter", "An index signature parameter type must be `string`, `symbol`, a template literal type or a refinement of the previous types");
    H3 = qa("Invalid element", "A required element cannot follow an optional element. ts(1257)");
    J3 = (e)=>qa("Duplicate property signature", `Duplicate key ${so(e)}`);
    Cs = l3;
    fa = (e)=>e.replace(/[/\\^$*+?.()|[\]{}]/g, "\\$&");
    W3 = Symbol.for("effect/annotation/TypeConstructor");
    G3 = Symbol.for("effect/annotation/Brand");
    Y3 = Symbol.for("effect/annotation/SchemaId");
    _h = Symbol.for("effect/annotation/Message");
    uh = Symbol.for("effect/annotation/MissingMessage");
    $l = Symbol.for("effect/annotation/Identifier");
    ti = Symbol.for("effect/annotation/Title");
    X3 = Symbol.for("effect/annotation/AutoTitle");
    Pl = Symbol.for("effect/annotation/Description");
    lh = Symbol.for("effect/annotation/Examples");
    fh = Symbol.for("effect/annotation/Default");
    dh = Symbol.for("effect/annotation/JSONSchema");
    gh = Symbol.for("effect/annotation/Arbitrary");
    ph = Symbol.for("effect/annotation/Pretty");
    hh = Symbol.for("effect/annotation/Equivalence");
    Q3 = Symbol.for("effect/annotation/Documentation");
    wh = Symbol.for("effect/annotation/Concurrency");
    bh = Symbol.for("effect/annotation/Batching");
    yh = Symbol.for("effect/annotation/ParseIssueTitle");
    mh = Symbol.for("effect/annotation/ParseOptions");
    Sh = Symbol.for("effect/annotation/DecodingFallback");
    Fh = Symbol.for("effect/annotation/Surrogate");
    Z3 = Symbol.for("effect/annotation/StableFilter");
    oe = w(2, (e, t)=>Object.prototype.hasOwnProperty.call(e.annotations, t) ? N(e.annotations[t]) : M());
    tP = oe(G3);
    eP = oe(_h);
    rP = oe(uh);
    kh = oe(ti);
    xh = oe(X3);
    Va = oe($l);
    Eh = oe(Pl);
    nP = oe(wh);
    sP = oe(bh);
    iP = oe(yh);
    oP = oe(mh);
    aP = oe(Sh);
    Ih = oe(Fh);
    cP = oe(Z3);
    _P = (e)=>S3(cP(e), (t)=>t === !0);
    Rh = Symbol.for("effect/annotation/JSONIdentifier");
    uP = oe(Rh);
    lP = (e)=>Pr(uP(e), ()=>Va(e));
    class Oh {
        typeParameters;
        decodeUnknown;
        encodeUnknown;
        annotations;
        _tag = "Declaration";
        constructor(t, r, n, s = {}){
            this.typeParameters = t, this.decodeUnknown = r, this.encodeUnknown = n, this.annotations = s;
        }
        toString() {
            return zt(xr(this), ()=>"<declaration schema>");
        }
        toJSON() {
            return {
                _tag: this._tag,
                typeParameters: this.typeParameters.map((t)=>t.toJSON()),
                annotations: ae(this.annotations)
            };
        }
    }
    const ao = (e)=>(t)=>t._tag === e;
    class fP {
        literal;
        annotations;
        _tag = "Literal";
        constructor(t, r = {}){
            this.literal = t, this.annotations = r;
        }
        toString() {
            return zt(xr(this), ()=>so(this.literal));
        }
        toJSON() {
            return {
                _tag: this._tag,
                literal: Ba(this.literal) ? String(this.literal) : this.literal,
                annotations: ae(this.annotations)
            };
        }
    }
    const qd = ao("Literal");
    class dP {
        symbol;
        annotations;
        _tag = "UniqueSymbol";
        constructor(t, r = {}){
            this.symbol = t, this.annotations = r;
        }
        toString() {
            return zt(xr(this), ()=>so(this.symbol));
        }
        toJSON() {
            return {
                _tag: this._tag,
                symbol: String(this.symbol),
                annotations: ae(this.annotations)
            };
        }
    }
    class gP {
        annotations;
        _tag = "NeverKeyword";
        constructor(t = {}){
            this.annotations = t;
        }
        toString() {
            return Ha(this);
        }
        toJSON() {
            return {
                _tag: this._tag,
                annotations: ae(this.annotations)
            };
        }
    }
    const Th = new gP({
        [ti]: "never"
    });
    class pP {
        annotations;
        _tag = "UnknownKeyword";
        constructor(t = {}){
            this.annotations = t;
        }
        toString() {
            return Ha(this);
        }
        toJSON() {
            return {
                _tag: this._tag,
                annotations: ae(this.annotations)
            };
        }
    }
    const hP = new pP({
        [ti]: "unknown"
    });
    class wP {
        annotations;
        _tag = "AnyKeyword";
        constructor(t = {}){
            this.annotations = t;
        }
        toString() {
            return Ha(this);
        }
        toJSON() {
            return {
                _tag: this._tag,
                annotations: ae(this.annotations)
            };
        }
    }
    const bP = new wP({
        [ti]: "any"
    });
    class yP {
        annotations;
        _tag = "StringKeyword";
        constructor(t = {}){
            this.annotations = t;
        }
        toString() {
            return Ha(this);
        }
        toJSON() {
            return {
                _tag: this._tag,
                annotations: ae(this.annotations)
            };
        }
    }
    const mP = new yP({
        [ti]: "string",
        [Pl]: "a string"
    }), SP = ao("StringKeyword"), FP = ao("SymbolKeyword");
    let Ml = class {
        type;
        annotations;
        constructor(t, r = {}){
            this.type = t, this.annotations = r;
        }
        toJSON() {
            return {
                type: this.type.toJSON(),
                annotations: ae(this.annotations)
            };
        }
        toString() {
            return String(this.type);
        }
    };
    class Nl extends Ml {
        isOptional;
        constructor(t, r, n = {}){
            super(t, n), this.isOptional = r;
        }
        toJSON() {
            return {
                type: this.type.toJSON(),
                isOptional: this.isOptional,
                annotations: ae(this.annotations)
            };
        }
        toString() {
            return String(this.type) + (this.isOptional ? "?" : "");
        }
    }
    const vh = (e)=>e.map((t)=>t.type);
    class Ch {
        elements;
        rest;
        isReadonly;
        annotations;
        _tag = "TupleType";
        constructor(t, r, n, s = {}){
            this.elements = t, this.rest = r, this.isReadonly = n, this.annotations = s;
            let i = !1, a = !1;
            for (const _ of t)if (_.isOptional) i = !0;
            else if (i) {
                a = !0;
                break;
            }
            if (a || i && r.length > 1) throw new Error(H3);
        }
        toString() {
            return zt(xr(this), ()=>kP(this));
        }
        toJSON() {
            return {
                _tag: this._tag,
                elements: this.elements.map((t)=>t.toJSON()),
                rest: this.rest.map((t)=>t.toJSON()),
                isReadonly: this.isReadonly,
                annotations: ae(this.annotations)
            };
        }
    }
    const kP = (e)=>{
        const t = e.elements.map(String).join(", ");
        return I3(e.rest, {
            onEmpty: ()=>`readonly [${t}]`,
            onNonEmpty: (r, n)=>{
                const s = String(r), i = s.includes(" | ") ? `(${s})` : s;
                if (n.length > 0) {
                    const a = n.map(String).join(", ");
                    return e.elements.length > 0 ? `readonly [${t}, ...${i}[], ${a}]` : `readonly [...${i}[], ${a}]`;
                } else return e.elements.length > 0 ? `readonly [${t}, ...${i}[]]` : `ReadonlyArray<${s}>`;
            }
        });
    };
    class da extends Nl {
        name;
        isReadonly;
        constructor(t, r, n, s, i){
            super(r, n, i), this.name = t, this.isReadonly = s;
        }
        toString() {
            return (this.isReadonly ? "readonly " : "") + String(this.name) + (this.isOptional ? "?" : "") + ": " + this.type;
        }
        toJSON() {
            return {
                name: String(this.name),
                type: this.type.toJSON(),
                isOptional: this.isOptional,
                isReadonly: this.isReadonly,
                annotations: ae(this.annotations)
            };
        }
    }
    const zh = (e)=>{
        switch(e._tag){
            case "StringKeyword":
            case "SymbolKeyword":
            case "TemplateLiteral":
                return !0;
            case "Refinement":
                return zh(e.from);
        }
        return !1;
    };
    class Ah {
        type;
        isReadonly;
        parameter;
        constructor(t, r, n){
            if (this.type = r, this.isReadonly = n, zh(t)) this.parameter = t;
            else throw new Error(V3);
        }
        toString() {
            return (this.isReadonly ? "readonly " : "") + `[x: ${this.parameter}]: ${this.type}`;
        }
        toJSON() {
            return {
                parameter: this.parameter.toJSON(),
                type: this.type.toJSON(),
                isReadonly: this.isReadonly
            };
        }
    }
    class ga {
        annotations;
        _tag = "TypeLiteral";
        propertySignatures;
        indexSignatures;
        constructor(t, r, n = {}){
            this.annotations = n;
            const s = {};
            for(let a = 0; a < t.length; a++){
                const _ = t[a].name;
                if (Object.prototype.hasOwnProperty.call(s, _)) throw new Error(J3(_));
                s[_] = null;
            }
            const i = {
                string: !1,
                symbol: !1
            };
            for(let a = 0; a < r.length; a++){
                const _ = Kh(r[a].parameter);
                if (SP(_)) {
                    if (i.string) throw new Error(Dd("string"));
                    i.string = !0;
                } else if (FP(_)) {
                    if (i.symbol) throw new Error(Dd("symbol"));
                    i.symbol = !0;
                }
            }
            this.propertySignatures = t, this.indexSignatures = r;
        }
        toString() {
            return zt(xr(this), ()=>xP(this));
        }
        toJSON() {
            return {
                _tag: this._tag,
                propertySignatures: this.propertySignatures.map((t)=>t.toJSON()),
                indexSignatures: this.indexSignatures.map((t)=>t.toJSON()),
                annotations: ae(this.annotations)
            };
        }
    }
    const Vd = (e)=>e.map(String).join("; "), xP = (e)=>{
        if (e.propertySignatures.length > 0) {
            const t = e.propertySignatures.map(String).join("; ");
            return e.indexSignatures.length > 0 ? `{ ${t}; ${Vd(e.indexSignatures)} }` : `{ ${t} }`;
        } else return e.indexSignatures.length > 0 ? `{ ${Vd(e.indexSignatures)} }` : "{}";
    }, EP = Li(Zp(Cs, (e)=>{
        switch(e._tag){
            case "AnyKeyword":
                return 0;
            case "UnknownKeyword":
                return 1;
            case "ObjectKeyword":
                return 2;
            case "StringKeyword":
            case "NumberKeyword":
            case "BooleanKeyword":
            case "BigIntKeyword":
            case "SymbolKeyword":
                return 3;
        }
        return 4;
    })), IP = {
        string: "StringKeyword",
        number: "NumberKeyword",
        boolean: "BooleanKeyword",
        bigint: "BigIntKeyword"
    }, $h = (e)=>zl(e, (t)=>Mh(t) ? $h(t.types) : [
                t
            ]), RP = (e)=>{
        const t = EP(e), r = [], n = {}, s = [];
        for (const i of t)switch(i._tag){
            case "NeverKeyword":
                break;
            case "AnyKeyword":
                return [
                    bP
                ];
            case "UnknownKeyword":
                return [
                    hP
                ];
            case "ObjectKeyword":
            case "UndefinedKeyword":
            case "VoidKeyword":
            case "StringKeyword":
            case "NumberKeyword":
            case "BooleanKeyword":
            case "BigIntKeyword":
            case "SymbolKeyword":
                {
                    n[i._tag] || (n[i._tag] = i, r.push(i));
                    break;
                }
            case "Literal":
                {
                    const a = typeof i.literal;
                    switch(a){
                        case "string":
                        case "number":
                        case "bigint":
                        case "boolean":
                            {
                                const _ = IP[a];
                                !n[_] && !s.includes(i.literal) && (s.push(i.literal), r.push(i));
                                break;
                            }
                        case "object":
                            {
                                s.includes(i.literal) || (s.push(i.literal), r.push(i));
                                break;
                            }
                    }
                    break;
                }
            case "UniqueSymbol":
                {
                    !n.SymbolKeyword && !s.includes(i.symbol) && (s.push(i.symbol), r.push(i));
                    break;
                }
            case "TupleType":
                {
                    n.ObjectKeyword || r.push(i);
                    break;
                }
            case "TypeLiteral":
                {
                    i.propertySignatures.length === 0 && i.indexSignatures.length === 0 ? n["{}"] || (n["{}"] = i, r.push(i)) : n.ObjectKeyword || r.push(i);
                    break;
                }
            default:
                r.push(i);
        }
        return r;
    };
    let cr = class du {
        types;
        annotations;
        static make = (t, r)=>Ph(t) ? new du(t, r) : t.length === 1 ? t[0] : Th;
        static unify = (t, r)=>du.make(RP($h(t)), r);
        _tag = "Union";
        constructor(t, r = {}){
            this.types = t, this.annotations = r;
        }
        toString() {
            return zt(xr(this), ()=>this.types.map(String).join(" | "));
        }
        toJSON() {
            return {
                _tag: this._tag,
                types: this.types.map((t)=>t.toJSON()),
                annotations: ae(this.annotations)
            };
        }
    };
    const Ph = (e)=>e.length > 1, Mh = ao("Union"), M_ = rt(Symbol.for("effect/Schema/AST/toJSONMemoMap"), ()=>new WeakMap);
    class Nh {
        f;
        annotations;
        _tag = "Suspend";
        constructor(t, r = {}){
            this.f = t, this.annotations = r, this.f = ah(t);
        }
        toString() {
            return xr(this).pipe(Pr(()=>Zs(g3(this.f)(), (t)=>xr(t))), zt(()=>"<suspended schema>"));
        }
        toJSON() {
            const t = this.f();
            let r = M_.get(t);
            return r || (M_.set(t, {
                _tag: this._tag
            }), r = {
                _tag: this._tag,
                ast: t.toJSON(),
                annotations: ae(this.annotations)
            }, M_.set(t, r), r);
        }
    }
    let Bh = class {
        from;
        filter;
        annotations;
        _tag = "Refinement";
        constructor(t, r, n = {}){
            this.from = t, this.filter = r, this.annotations = n;
        }
        toString() {
            return Va(this).pipe(zt(()=>se(Dh(this), {
                    onNone: ()=>`{ ${this.from} | filter }`,
                    onSome: (t)=>Uh(this.from) ? String(this.from) + " & " + t : t
                })));
        }
        toJSON() {
            return {
                _tag: this._tag,
                from: this.from.toJSON(),
                annotations: ae(this.annotations)
            };
        }
    };
    const Uh = ao("Refinement"), N_ = {}, Bl = (e, t)=>{
        const r = Object.getOwnPropertyDescriptors(e), n = {
            ...e.annotations
        };
        delete n[$l];
        const s = {
            ...n,
            ...t
        }, i = Ih(e);
        return Vt(i) && (s[Fh] = Bl(i.value, t)), r.annotations.value = s, Object.create(Object.getPrototypeOf(e), r);
    }, OP = "[\\s\\S]*?", TP = "[+-]?\\d*\\.?\\d+(?:[Ee][+-]?\\d+)?", jh = (e, t)=>{
        switch(e._tag){
            case "Literal":
                return fa(String(e.literal));
            case "StringKeyword":
                return OP;
            case "NumberKeyword":
                return TP;
            case "TemplateLiteral":
                return Lh(e);
            case "Union":
                return e.types.map((r)=>jh(r)).join("|");
        }
    }, vP = (e, t, r, n)=>Mh(e) ? `(${t})` : t, Lh = (e, t, r)=>{
        let n = "";
        if (e.head !== "") {
            const s = fa(e.head);
            n += s;
        }
        for (const s of e.spans){
            const i = jh(s.type);
            if (n += vP(s.type, i), s.literal !== "") {
                const a = fa(s.literal);
                n += a;
            }
        }
        return n;
    }, CP = (e)=>new RegExp(`^${Lh(e)}$`), zP = (e)=>(t)=>{
            let r;
            for (const n of e)Object.prototype.hasOwnProperty.call(t.annotations, n) && (r === void 0 && (r = {}), r[n] = t.annotations[n]);
            return r;
        }, AP = zP([
        lh,
        fh,
        dh,
        gh,
        ph,
        hh
    ]), Ve = (e)=>{
        switch(e._tag){
            case "Declaration":
                {
                    const t = ve(e.typeParameters, Ve);
                    return t === e.typeParameters ? e : new Oh(t, e.decodeUnknown, e.encodeUnknown, e.annotations);
                }
            case "TupleType":
                {
                    const t = ve(e.elements, (s)=>{
                        const i = Ve(s.type);
                        return i === s.type ? s : new Nl(i, s.isOptional);
                    }), r = vh(e.rest), n = ve(r, Ve);
                    return t === e.elements && n === r ? e : new Ch(t, n.map((s)=>new Ml(s)), e.isReadonly, e.annotations);
                }
            case "TypeLiteral":
                {
                    const t = ve(e.propertySignatures, (n)=>{
                        const s = Ve(n.type);
                        return s === n.type ? n : new da(n.name, s, n.isOptional, n.isReadonly);
                    }), r = ve(e.indexSignatures, (n)=>{
                        const s = Ve(n.type);
                        return s === n.type ? n : new Ah(n.parameter, s, n.isReadonly);
                    });
                    return t === e.propertySignatures && r === e.indexSignatures ? e : new ga(t, r, e.annotations);
                }
            case "Union":
                {
                    const t = ve(e.types, Ve);
                    return t === e.types ? e : cr.make(t, e.annotations);
                }
            case "Suspend":
                return new Nh(()=>Ve(e.f()), e.annotations);
            case "Refinement":
                {
                    const t = Ve(e.from);
                    return t === e.from ? e : new Bh(t, e.filter, e.annotations);
                }
            case "Transformation":
                {
                    const t = AP(e);
                    return Ve(t !== void 0 ? Bl(e.to, t) : e.to);
                }
        }
        return e;
    };
    function ve(e, t) {
        let r = !1;
        const n = Da(e.length);
        for(let s = 0; s < e.length; s++){
            const i = e[s], a = t(i);
            a !== i && (r = !0), n[s] = a;
        }
        return r ? n : e;
    }
    const He = (e, t)=>{
        switch(e._tag){
            case "Declaration":
                {
                    const r = ve(e.typeParameters, (n)=>He(n));
                    return r === e.typeParameters ? e : new Oh(r, e.decodeUnknown, e.encodeUnknown);
                }
            case "TupleType":
                {
                    const r = ve(e.elements, (i)=>{
                        const a = He(i.type);
                        return a === i.type ? i : new Nl(a, i.isOptional);
                    }), n = vh(e.rest), s = ve(n, (i)=>He(i));
                    return r === e.elements && s === n ? e : new Ch(r, s.map((i)=>new Ml(i)), e.isReadonly);
                }
            case "TypeLiteral":
                {
                    const r = ve(e.propertySignatures, (s)=>{
                        const i = He(s.type);
                        return i === s.type ? s : new da(s.name, i, s.isOptional, s.isReadonly);
                    }), n = ve(e.indexSignatures, (s)=>{
                        const i = He(s.type);
                        return i === s.type ? s : new Ah(s.parameter, i, s.isReadonly);
                    });
                    return r === e.propertySignatures && n === e.indexSignatures ? e : new ga(r, n);
                }
            case "Union":
                {
                    const r = ve(e.types, (n)=>He(n));
                    return r === e.types ? e : cr.make(r);
                }
            case "Suspend":
                {
                    let r;
                    const n = lP(e);
                    if (Vt(n)) {
                        const s = "";
                        r = {
                            [Rh]: `${n.value}Encoded${s}`
                        };
                    }
                    return new Nh(()=>He(e.f()), r);
                }
            case "Refinement":
                return He(e.from);
            case "Transformation":
                return He(e.from);
        }
        return e;
    }, Hd = (e)=>He(e), ae = (e)=>{
        const t = {};
        for (const r of Object.getOwnPropertySymbols(e))t[String(r)] = e[r];
        return t;
    }, Kh = (e)=>{
        switch(e._tag){
            case "StringKeyword":
            case "SymbolKeyword":
            case "TemplateLiteral":
                return e;
            case "Refinement":
                return Kh(e.from);
        }
    }, Ha = (e)=>zt(xr(e), ()=>e._tag);
    function $P(e) {
        return se(tP(e), {
            onNone: ()=>"",
            onSome: (t)=>t.map((r)=>` & Brand<${so(r)}>`).join("")
        });
    }
    const Dh = (e)=>kh(e).pipe(Pr(()=>Eh(e)), Pr(()=>xh(e)), Ei((t)=>t + $P(e))), xr = (e)=>Pr(Va(e), ()=>Dh(e)), zs = Symbol.for("effect/Brand/Refined"), mi = (e, t)=>[
            {
                message: e,
                meta: t
            }
        ];
    function qh(...e) {
        const t = e.length === 2 ? (r)=>e[0](r) ? J(r) : K(e[1](r)) : (r)=>se(e[0](r), {
                onNone: ()=>J(r),
                onSome: K
            });
        return Object.assign((r)=>vl(t(r), _t), {
            [zs]: zs,
            option: (r)=>th(t(r)),
            either: t,
            is: (r)=>Be(t(r))
        });
    }
    const Pn = ()=>Object.assign((e)=>e, {
            [zs]: zs,
            option: (e)=>N(e),
            either: (e)=>J(e),
            is: (e)=>!0
        }), Ul = (...e)=>{
        const t = (r)=>{
            let n = J(r);
            for (const s of e){
                const i = s.either(r);
                Ft(n) && Ft(i) ? n = K([
                    ...n.left,
                    ...i.left
                ]) : n = Ft(n) ? n : i;
            }
            return n;
        };
        return Object.assign((r)=>oo(t(r), {
                onLeft: (n)=>{
                    throw n;
                },
                onRight: _t
            }), {
            [zs]: zs,
            option: (r)=>th(t(r)),
            either: t,
            is: (r)=>Be(t(r))
        });
    }, Vh = Symbol.for("effect/Context/Tag"), pa = Symbol.for("effect/Context/Reference"), PP = "effect/STM", MP = Symbol.for(PP), jl = {
        ...io,
        _op: "Tag",
        [MP]: Ts,
        [Vh]: {
            _Service: (e)=>e,
            _Identifier: (e)=>e
        },
        toString () {
            return qt(this.toJSON());
        },
        toJSON () {
            return {
                _id: "Tag",
                key: this.key,
                stack: this.stack
            };
        },
        [dt] () {
            return this.toJSON();
        },
        of (e) {
            return e;
        },
        context (e) {
            return Wh(this, e);
        }
    }, NP = {
        ...jl,
        [pa]: pa
    }, BP = (e)=>{
        const t = Error.stackTraceLimit;
        Error.stackTraceLimit = 2;
        const r = new Error;
        Error.stackTraceLimit = t;
        const n = Object.create(jl);
        return Object.defineProperty(n, "stack", {
            get () {
                return r.stack;
            }
        }), n.key = e, n;
    }, UP = (e)=>()=>{
            const t = Error.stackTraceLimit;
            Error.stackTraceLimit = 2;
            const r = new Error;
            Error.stackTraceLimit = t;
            function n() {}
            return Object.setPrototypeOf(n, jl), n.key = e, Object.defineProperty(n, "stack", {
                get () {
                    return r.stack;
                }
            }), n;
        }, jP = ()=>(e, t)=>{
            const r = Error.stackTraceLimit;
            Error.stackTraceLimit = 2;
            const n = new Error;
            Error.stackTraceLimit = r;
            function s() {}
            return Object.setPrototypeOf(s, NP), s.key = e, s.defaultValue = t.defaultValue, Object.defineProperty(s, "stack", {
                get () {
                    return n.stack;
                }
            }), s;
        }, Hh = Symbol.for("effect/Context"), LP = {
        [Hh]: {
            _Services: (e)=>e
        },
        [Y] (e) {
            if (Jh(e) && this.unsafeMap.size === e.unsafeMap.size) {
                for (const t of this.unsafeMap.keys())if (!e.unsafeMap.has(t) || !Q(this.unsafeMap.get(t), e.unsafeMap.get(t))) return !1;
                return !0;
            }
            return !1;
        },
        [tt] () {
            return yt(this, ml(this.unsafeMap.size));
        },
        pipe () {
            return q(this, arguments);
        },
        toString () {
            return qt(this.toJSON());
        },
        toJSON () {
            return {
                _id: "Context",
                services: Array.from(this.unsafeMap).map(Ut)
            };
        },
        [dt] () {
            return this.toJSON();
        }
    }, Fn = (e)=>{
        const t = Object.create(LP);
        return t.unsafeMap = e, t;
    }, KP = (e)=>{
        const t = new Error(`Service not found${e.key ? `: ${String(e.key)}` : ""}`);
        if (e.stack) {
            const r = e.stack.split(`
`);
            if (r.length > 2) {
                const n = r[2].match(/at (.*)/);
                n && (t.message = t.message + ` (defined at ${n[1]})`);
            }
        }
        if (t.stack) {
            const r = t.stack.split(`
`);
            r.splice(1, 3), t.stack = r.join(`
`);
        }
        return t;
    }, Jh = (e)=>W(e, Hh), DP = (e)=>W(e, Vh), qP = (e)=>W(e, pa), VP = Fn(new Map), HP = ()=>VP, Wh = (e, t)=>Fn(new Map([
            [
                e.key,
                t
            ]
        ])), JP = w(3, (e, t, r)=>{
        const n = new Map(e.unsafeMap);
        return n.set(t.key, r), Fn(n);
    }), B_ = rt("effect/Context/defaultValueCache", ()=>new Map), Ll = (e)=>{
        if (B_.has(e.key)) return B_.get(e.key);
        const t = e.defaultValue();
        return B_.set(e.key, t), t;
    }, WP = (e, t)=>e.unsafeMap.has(t.key) ? e.unsafeMap.get(t.key) : Ll(t), Gh = w(2, (e, t)=>{
        if (!e.unsafeMap.has(t.key)) {
            if (pa in t) return Ll(t);
            throw KP(t);
        }
        return e.unsafeMap.get(t.key);
    }), GP = Gh, YP = w(2, (e, t)=>e.unsafeMap.has(t.key) ? ua(e.unsafeMap.get(t.key)) : qP(t) ? ua(Ll(t)) : Rl), XP = w(2, (e, t)=>{
        const r = new Map(e.unsafeMap);
        for (const [n, s] of t.unsafeMap)r.set(n, s);
        return Fn(r);
    }), QP = (...e)=>{
        const t = new Map;
        for(let r = 0; r < e.length; r++)e[r].unsafeMap.forEach((n, s)=>{
            t.set(s, n);
        });
        return Fn(t);
    }, Mn = BP, ZP = Jh, Yh = DP, Ja = HP, Kl = Wh, Xr = JP, Dl = GP, Xh = Gh, co = YP, _o = XP, tM = QP, ql = UP, Wa = jP, Qh = Symbol.for("effect/Chunk");
    function eM(e, t, r, n, s) {
        for(let i = t; i < Math.min(e.length, t + s); i++)r[n + i - t] = e[i];
        return r;
    }
    const Zh = [], rM = (e)=>Na((t, r)=>t.length === r.length && _n(t).every((n, s)=>e(n, os(r, s)))), nM = rM(Q), sM = {
        [Qh]: {
            _A: (e)=>e
        },
        toString () {
            return qt(this.toJSON());
        },
        toJSON () {
            return {
                _id: "Chunk",
                values: _n(this).map(Ut)
            };
        },
        [dt] () {
            return this.toJSON();
        },
        [Y] (e) {
            return tw(e) && nM(this, e);
        },
        [tt] () {
            return yt(this, no(_n(this)));
        },
        [Symbol.iterator] () {
            switch(this.backing._tag){
                case "IArray":
                    return this.backing.array[Symbol.iterator]();
                case "IEmpty":
                    return Zh[Symbol.iterator]();
                default:
                    return _n(this)[Symbol.iterator]();
            }
        },
        pipe () {
            return q(this, arguments);
        }
    }, Pt = (e)=>{
        const t = Object.create(sM);
        switch(t.backing = e, e._tag){
            case "IEmpty":
                {
                    t.length = 0, t.depth = 0, t.left = t, t.right = t;
                    break;
                }
            case "IConcat":
                {
                    t.length = e.left.length + e.right.length, t.depth = 1 + Math.max(e.left.depth, e.right.depth), t.left = e.left, t.right = e.right;
                    break;
                }
            case "IArray":
                {
                    t.length = e.array.length, t.depth = 0, t.left = Xe, t.right = Xe;
                    break;
                }
            case "ISingleton":
                {
                    t.length = 1, t.depth = 0, t.left = Xe, t.right = Xe;
                    break;
                }
            case "ISlice":
                {
                    t.length = e.length, t.depth = e.chunk.depth + 1, t.left = Xe, t.right = Xe;
                    break;
                }
        }
        return t;
    }, tw = (e)=>W(e, Qh), Xe = Pt({
        _tag: "IEmpty"
    }), Er = ()=>Xe, U_ = (...e)=>aM(e), me = (e)=>Pt({
            _tag: "ISingleton",
            a: e
        }), ew = (e)=>tw(e) ? e : Ga(Et(e)), gu = (e, t, r)=>{
        switch(e.backing._tag){
            case "IArray":
                {
                    eM(e.backing.array, 0, t, r, e.length);
                    break;
                }
            case "IConcat":
                {
                    gu(e.left, t, r), gu(e.right, t, r + e.left.length);
                    break;
                }
            case "ISingleton":
                {
                    t[r] = e.backing.a;
                    break;
                }
            case "ISlice":
                {
                    let n = 0, s = r;
                    for(; n < e.length;)t[s] = os(e, n), n += 1, s += 1;
                    break;
                }
        }
    }, iM = (e)=>{
        switch(e.backing._tag){
            case "IEmpty":
                return Zh;
            case "IArray":
                return e.backing.array;
            default:
                {
                    const t = new Array(e.length);
                    return gu(e, t, 0), e.backing = {
                        _tag: "IArray",
                        array: t
                    }, e.left = Xe, e.right = Xe, e.depth = 0, t;
                }
        }
    }, _n = iM, oM = (e)=>{
        switch(e.backing._tag){
            case "IEmpty":
            case "ISingleton":
                return e;
            case "IArray":
                return Pt({
                    _tag: "IArray",
                    array: Ud(e.backing.array)
                });
            case "IConcat":
                return Pt({
                    _tag: "IConcat",
                    left: As(e.backing.right),
                    right: As(e.backing.left)
                });
            case "ISlice":
                return Ga(Ud(_n(e)));
        }
    }, As = oM, Ga = (e)=>e.length === 0 ? Er() : e.length === 1 ? me(e[0]) : Pt({
            _tag: "IArray",
            array: e
        }), aM = (e)=>Ga(e), os = w(2, (e, t)=>{
        switch(e.backing._tag){
            case "IEmpty":
                throw new Error("Index out of bounds");
            case "ISingleton":
                {
                    if (t !== 0) throw new Error("Index out of bounds");
                    return e.backing.a;
                }
            case "IArray":
                {
                    if (t >= e.length || t < 0) throw new Error("Index out of bounds");
                    return e.backing.array[t];
                }
            case "IConcat":
                return t < e.left.length ? os(e.left, t) : os(e.right, t - e.left.length);
            case "ISlice":
                return os(e.backing.chunk, t + e.backing.offset);
        }
    }), cM = w(2, (e, t)=>Ue(e, me(t))), Ke = w(2, (e, t)=>Ue(me(t), e)), pu = w(2, (e, t)=>{
        if (t <= 0) return e;
        if (t >= e.length) return Xe;
        switch(e.backing._tag){
            case "ISlice":
                return Pt({
                    _tag: "ISlice",
                    chunk: e.backing.chunk,
                    offset: e.backing.offset + t,
                    length: e.backing.length - t
                });
            case "IConcat":
                return t > e.left.length ? pu(e.right, t - e.left.length) : Pt({
                    _tag: "IConcat",
                    left: pu(e.left, t),
                    right: e.right
                });
            default:
                return Pt({
                    _tag: "ISlice",
                    chunk: e,
                    offset: t,
                    length: e.length - t
                });
        }
    }), Ue = w(2, (e, t)=>{
        if (e.backing._tag === "IEmpty") return t;
        if (t.backing._tag === "IEmpty") return e;
        const r = t.depth - e.depth;
        if (Math.abs(r) <= 1) return Pt({
            _tag: "IConcat",
            left: e,
            right: t
        });
        if (r < -1) if (e.left.depth >= e.right.depth) {
            const n = Ue(e.right, t);
            return Pt({
                _tag: "IConcat",
                left: e.left,
                right: n
            });
        } else {
            const n = Ue(e.right.right, t);
            if (n.depth === e.depth - 3) {
                const s = Pt({
                    _tag: "IConcat",
                    left: e.right.left,
                    right: n
                });
                return Pt({
                    _tag: "IConcat",
                    left: e.left,
                    right: s
                });
            } else {
                const s = Pt({
                    _tag: "IConcat",
                    left: e.left,
                    right: e.right.left
                });
                return Pt({
                    _tag: "IConcat",
                    left: s,
                    right: n
                });
            }
        }
        else if (t.right.depth >= t.left.depth) {
            const n = Ue(e, t.left);
            return Pt({
                _tag: "IConcat",
                left: n,
                right: t.right
            });
        } else {
            const n = Ue(e, t.left.left);
            if (n.depth === t.depth - 3) {
                const s = Pt({
                    _tag: "IConcat",
                    left: n,
                    right: t.left.right
                });
                return Pt({
                    _tag: "IConcat",
                    left: s,
                    right: t.right
                });
            } else {
                const s = Pt({
                    _tag: "IConcat",
                    left: t.left.right,
                    right: t.right
                });
                return Pt({
                    _tag: "IConcat",
                    left: n,
                    right: s
                });
            }
        }
    }), _M = (e)=>e.length === 0, $s = (e)=>e.length > 0, rw = (e)=>os(e, 0), Ps = rw, Zr = (e)=>pu(e, 1), hu = Symbol.for("effect/Duration"), nw = BigInt(0), Jd = BigInt(24), zo = BigInt(60), wu = BigInt(1e3), Wd = BigInt(1e6), Gd = BigInt(1e9), uM = /^(-?\d+(?:\.\d+)?)\s+(nanos?|micros?|millis?|seconds?|minutes?|hours?|days?|weeks?)$/, Ir = (e)=>{
        if (sw(e)) return e;
        if (hr(e)) return bu(e);
        if (Ba(e)) return j_(e);
        if (Array.isArray(e) && e.length === 2 && e.every(hr)) return e[0] === -1 / 0 || e[1] === -1 / 0 || Number.isNaN(e[0]) || Number.isNaN(e[1]) ? iw : e[0] === 1 / 0 || e[1] === 1 / 0 ? gM : j_(BigInt(Math.round(e[0] * 1e9)) + BigInt(Math.round(e[1])));
        if (kr(e)) {
            const t = uM.exec(e);
            if (t) {
                const [r, n, s] = t, i = Number(n);
                switch(s){
                    case "nano":
                    case "nanos":
                        return j_(BigInt(n));
                    case "micro":
                    case "micros":
                        return pM(BigInt(n));
                    case "milli":
                    case "millis":
                        return bu(i);
                    case "second":
                    case "seconds":
                        return hM(i);
                    case "minute":
                    case "minutes":
                        return wM(i);
                    case "hour":
                    case "hours":
                        return bM(i);
                    case "day":
                    case "days":
                        return yM(i);
                    case "week":
                    case "weeks":
                        return mM(i);
                }
            }
        }
        throw new Error("Invalid DurationInput");
    }, Yd = {
        _tag: "Millis",
        millis: 0
    }, lM = {
        _tag: "Infinity"
    }, fM = {
        [hu]: hu,
        [tt] () {
            return yt(this, Sl(this.value));
        },
        [Y] (e) {
            return sw(e) && RM(this, e);
        },
        toString () {
            return `Duration(${TM(this)})`;
        },
        toJSON () {
            switch(this.value._tag){
                case "Millis":
                    return {
                        _id: "Duration",
                        _tag: "Millis",
                        millis: this.value.millis
                    };
                case "Nanos":
                    return {
                        _id: "Duration",
                        _tag: "Nanos",
                        hrtime: FM(this)
                    };
                case "Infinity":
                    return {
                        _id: "Duration",
                        _tag: "Infinity"
                    };
            }
        },
        [dt] () {
            return this.toJSON();
        },
        pipe () {
            return q(this, arguments);
        }
    }, ir = (e)=>{
        const t = Object.create(fM);
        return hr(e) ? isNaN(e) || e <= 0 ? t.value = Yd : Number.isFinite(e) ? Number.isInteger(e) ? t.value = {
            _tag: "Millis",
            millis: e
        } : t.value = {
            _tag: "Nanos",
            nanos: BigInt(Math.round(e * 1e6))
        } : t.value = lM : e <= nw ? t.value = Yd : t.value = {
            _tag: "Nanos",
            nanos: e
        }, t;
    }, sw = (e)=>W(e, hu), dM = (e)=>{
        switch(e.value._tag){
            case "Millis":
                return e.value.millis === 0;
            case "Nanos":
                return e.value.nanos === nw;
            case "Infinity":
                return !1;
        }
    }, iw = ir(0), gM = ir(1 / 0), j_ = (e)=>ir(e), pM = (e)=>ir(e * wu), bu = (e)=>ir(e), hM = (e)=>ir(e * 1e3), wM = (e)=>ir(e * 6e4), bM = (e)=>ir(e * 36e5), yM = (e)=>ir(e * 864e5), mM = (e)=>ir(e * 6048e5), yu = (e)=>kM(e, {
            onMillis: (t)=>t,
            onNanos: (t)=>Number(t) / 1e6
        }), SM = (e)=>{
        const t = Ir(e);
        switch(t.value._tag){
            case "Infinity":
                throw new Error("Cannot convert infinite duration to nanos");
            case "Nanos":
                return t.value.nanos;
            case "Millis":
                return BigInt(Math.round(t.value.millis * 1e6));
        }
    }, FM = (e)=>{
        const t = Ir(e);
        switch(t.value._tag){
            case "Infinity":
                return [
                    1 / 0,
                    0
                ];
            case "Nanos":
                return [
                    Number(t.value.nanos / Gd),
                    Number(t.value.nanos % Gd)
                ];
            case "Millis":
                return [
                    Math.floor(t.value.millis / 1e3),
                    Math.round(t.value.millis % 1e3 * 1e6)
                ];
        }
    }, kM = w(2, (e, t)=>{
        const r = Ir(e);
        switch(r.value._tag){
            case "Nanos":
                return t.onNanos(r.value.nanos);
            case "Infinity":
                return t.onMillis(1 / 0);
            case "Millis":
                return t.onMillis(r.value.millis);
        }
    }), Vl = w(3, (e, t, r)=>{
        const n = Ir(e), s = Ir(t);
        if (n.value._tag === "Infinity" || s.value._tag === "Infinity") return r.onMillis(yu(n), yu(s));
        if (n.value._tag === "Nanos" || s.value._tag === "Nanos") {
            const i = n.value._tag === "Nanos" ? n.value.nanos : BigInt(Math.round(n.value.millis * 1e6)), a = s.value._tag === "Nanos" ? s.value.nanos : BigInt(Math.round(s.value.millis * 1e6));
            return r.onNanos(i, a);
        }
        return r.onMillis(n.value.millis, s.value.millis);
    }), xM = (e, t)=>Vl(e, t, {
            onMillis: (r, n)=>r === n,
            onNanos: (r, n)=>r === n
        }), EM = w(2, (e, t)=>Vl(e, t, {
            onMillis: (r, n)=>r <= n,
            onNanos: (r, n)=>r <= n
        })), IM = w(2, (e, t)=>Vl(e, t, {
            onMillis: (r, n)=>r >= n,
            onNanos: (r, n)=>r >= n
        })), RM = w(2, (e, t)=>xM(Ir(e), Ir(t))), OM = (e)=>{
        const t = Ir(e);
        if (t.value._tag === "Infinity") return {
            days: 1 / 0,
            hours: 1 / 0,
            minutes: 1 / 0,
            seconds: 1 / 0,
            millis: 1 / 0,
            nanos: 1 / 0
        };
        const r = SM(t), n = r / Wd, s = n / wu, i = s / zo, a = i / zo, _ = a / Jd;
        return {
            days: Number(_),
            hours: Number(a % Jd),
            minutes: Number(i % zo),
            seconds: Number(s % zo),
            millis: Number(n % wu),
            nanos: Number(r % Wd)
        };
    }, TM = (e)=>{
        const t = Ir(e);
        if (t.value._tag === "Infinity") return "Infinity";
        if (dM(t)) return "0";
        const r = OM(t), n = [];
        return r.days !== 0 && n.push(`${r.days}d`), r.hours !== 0 && n.push(`${r.hours}h`), r.minutes !== 0 && n.push(`${r.minutes}m`), r.seconds !== 0 && n.push(`${r.seconds}s`), r.millis !== 0 && n.push(`${r.millis}ms`), r.nanos !== 0 && n.push(`${r.nanos}ns`), n.join(" ");
    }, kn = 5, Hl = Math.pow(2, kn), vM = Hl - 1, CM = Hl / 2, zM = Hl / 4;
    function AM(e) {
        return e -= e >> 1 & 1431655765, e = (e & 858993459) + (e >> 2 & 858993459), e = e + (e >> 4) & 252645135, e += e >> 8, e += e >> 16, e & 127;
    }
    function Ms(e, t) {
        return t >>> e & vM;
    }
    function es(e) {
        return 1 << e;
    }
    function ow(e, t) {
        return AM(e & t - 1);
    }
    const $M = (e, t)=>({
            value: e,
            previous: t
        });
    function as(e, t, r, n) {
        let s = n;
        if (!e) {
            const i = n.length;
            s = new Array(i);
            for(let a = 0; a < i; ++a)s[a] = n[a];
        }
        return s[t] = r, s;
    }
    function aw(e, t, r) {
        const n = r.length - 1;
        let s = 0, i = 0, a = r;
        if (e) s = i = t;
        else for(a = new Array(n); s < t;)a[i++] = r[s++];
        for(++s; s <= n;)a[i++] = r[s++];
        return e && (a.length = n), a;
    }
    function PM(e, t, r, n) {
        const s = n.length;
        if (e) {
            let f = s;
            for(; f >= t;)n[f--] = n[f];
            return n[t] = r, n;
        }
        let i = 0, a = 0;
        const _ = new Array(s + 1);
        for(; i < t;)_[a++] = n[i++];
        for(_[t] = r; i < s;)_[++a] = n[i++];
        return _;
    }
    class jr {
        _tag = "EmptyNode";
        modify(t, r, n, s, i, a) {
            const _ = n(M());
            return Ct(_) ? new jr : (++a.value, new un(t, s, i, _));
        }
    }
    function je(e) {
        return Cp(e, "EmptyNode");
    }
    function MM(e) {
        return je(e) || e._tag === "LeafNode" || e._tag === "CollisionNode";
    }
    function Ya(e, t) {
        return je(e) ? !1 : t === e.edit;
    }
    class un {
        edit;
        hash;
        key;
        value;
        _tag = "LeafNode";
        constructor(t, r, n, s){
            this.edit = t, this.hash = r, this.key = n, this.value = s;
        }
        modify(t, r, n, s, i, a) {
            if (Q(i, this.key)) {
                const f = n(this.value);
                return f === this.value ? this : Ct(f) ? (--a.value, new jr) : Ya(this, t) ? (this.value = f, this) : new un(t, s, i, f);
            }
            const _ = n(M());
            return Ct(_) ? this : (++a.value, cw(t, r, this.hash, this, s, new un(t, s, i, _)));
        }
    }
    class Jl {
        edit;
        hash;
        children;
        _tag = "CollisionNode";
        constructor(t, r, n){
            this.edit = t, this.hash = r, this.children = n;
        }
        modify(t, r, n, s, i, a) {
            if (s === this.hash) {
                const f = Ya(this, t), g = this.updateCollisionList(f, t, this.hash, this.children, n, i, a);
                return g === this.children ? this : g.length > 1 ? new Jl(t, this.hash, g) : g[0];
            }
            const _ = n(M());
            return Ct(_) ? this : (++a.value, cw(t, r, this.hash, this, s, new un(t, s, i, _)));
        }
        updateCollisionList(t, r, n, s, i, a, _) {
            const f = s.length;
            for(let h = 0; h < f; ++h){
                const b = s[h];
                if ("key" in b && Q(a, b.key)) {
                    const S = b.value, k = i(S);
                    return k === S ? s : Ct(k) ? (--_.value, aw(t, h, s)) : as(t, h, new un(r, n, a, k), s);
                }
            }
            const g = i(M());
            return Ct(g) ? s : (++_.value, as(t, f, new un(r, n, a, g), s));
        }
    }
    class Ns {
        edit;
        mask;
        children;
        _tag = "IndexedNode";
        constructor(t, r, n){
            this.edit = t, this.mask = r, this.children = n;
        }
        modify(t, r, n, s, i, a) {
            const _ = this.mask, f = this.children, g = Ms(r, s), h = es(g), b = ow(_, h), S = _ & h, k = Ya(this, t);
            if (!S) {
                const V = new jr().modify(t, r + kn, n, s, i, a);
                return V ? f.length >= CM ? BM(t, g, V, _, f) : new Ns(t, _ | h, PM(k, b, V, f)) : this;
            }
            const x = f[b], $ = x.modify(t, r + kn, n, s, i, a);
            if (x === $) return this;
            let C = _, z;
            if (je($)) {
                if (C &= ~h, !C) return new jr;
                if (f.length <= 2 && MM(f[b ^ 1])) return f[b ^ 1];
                z = aw(k, b, f);
            } else z = as(k, b, $, f);
            return k ? (this.mask = C, this.children = z, this) : new Ns(t, C, z);
        }
    }
    class Wl {
        edit;
        size;
        children;
        _tag = "ArrayNode";
        constructor(t, r, n){
            this.edit = t, this.size = r, this.children = n;
        }
        modify(t, r, n, s, i, a) {
            let _ = this.size;
            const f = this.children, g = Ms(r, s), h = f[g], b = (h || new jr).modify(t, r + kn, n, s, i, a);
            if (h === b) return this;
            const S = Ya(this, t);
            let k;
            if (je(h) && !je(b)) ++_, k = as(S, g, b, f);
            else if (!je(h) && je(b)) {
                if (--_, _ <= zM) return NM(t, _, g, f);
                k = as(S, g, new jr, f);
            } else k = as(S, g, b, f);
            return S ? (this.size = _, this.children = k, this) : new Wl(t, _, k);
        }
    }
    function NM(e, t, r, n) {
        const s = new Array(t - 1);
        let i = 0, a = 0;
        for(let _ = 0, f = n.length; _ < f; ++_)if (_ !== r) {
            const g = n[_];
            g && !je(g) && (s[i++] = g, a |= 1 << _);
        }
        return new Ns(e, a, s);
    }
    function BM(e, t, r, n, s) {
        const i = [];
        let a = n, _ = 0;
        for(let f = 0; a; ++f)a & 1 && (i[f] = s[_++]), a >>>= 1;
        return i[t] = r, new Wl(e, _ + 1, i);
    }
    function UM(e, t, r, n, s, i) {
        if (r === s) return new Jl(e, r, [
            i,
            n
        ]);
        const a = Ms(t, r), _ = Ms(t, s);
        if (a === _) return (f)=>new Ns(e, es(a) | es(_), [
                f
            ]);
        {
            const f = a < _ ? [
                n,
                i
            ] : [
                i,
                n
            ];
            return new Ns(e, es(a) | es(_), f);
        }
    }
    function cw(e, t, r, n, s, i) {
        let a, _ = t;
        for(;;){
            const f = UM(e, _, r, n, s, i);
            if (typeof f == "function") a = $M(f, a), _ = _ + kn;
            else {
                let g = f;
                for(; a != null;)g = a.value(g), a = a.previous;
                return g;
            }
        }
    }
    const _w = "effect/HashMap", mu = Symbol.for(_w), jM = {
        [mu]: mu,
        [Symbol.iterator] () {
            return new Xa(this, (e, t)=>[
                    e,
                    t
                ]);
        },
        [tt] () {
            let e = U(_w);
            for (const t of this)e ^= m(U(t[0]), nt(U(t[1])));
            return yt(this, e);
        },
        [Y] (e) {
            if (DM(e)) {
                if (e._size !== this._size) return !1;
                for (const t of this){
                    const r = m(e, Yl(t[0], U(t[0])));
                    if (Ct(r)) return !1;
                    if (!Q(t[1], r.value)) return !1;
                }
                return !0;
            }
            return !1;
        },
        toString () {
            return qt(this.toJSON());
        },
        toJSON () {
            return {
                _id: "HashMap",
                values: Array.from(this).map(Ut)
            };
        },
        [dt] () {
            return this.toJSON();
        },
        pipe () {
            return q(this, arguments);
        }
    }, Gl = (e, t, r, n)=>{
        const s = Object.create(jM);
        return s._editable = e, s._edit = t, s._root = r, s._size = n, s;
    };
    class Xa {
        map;
        f;
        v;
        constructor(t, r){
            this.map = t, this.f = r, this.v = uw(this.map._root, this.f, void 0);
        }
        next() {
            if (Ct(this.v)) return {
                done: !0,
                value: void 0
            };
            const t = this.v.value;
            return this.v = ha(t.cont), {
                done: !1,
                value: t.value
            };
        }
        [Symbol.iterator]() {
            return new Xa(this.map, this.f);
        }
    }
    const ha = (e)=>e ? lw(e[0], e[1], e[2], e[3], e[4]) : M(), uw = (e, t, r = void 0)=>{
        switch(e._tag){
            case "LeafNode":
                return Vt(e.value) ? N({
                    value: t(e.key, e.value.value),
                    cont: r
                }) : ha(r);
            case "CollisionNode":
            case "ArrayNode":
            case "IndexedNode":
                {
                    const n = e.children;
                    return lw(n.length, n, 0, t, r);
                }
            default:
                return ha(r);
        }
    }, lw = (e, t, r, n, s)=>{
        for(; r < e;){
            const i = t[r++];
            if (i && !je(i)) return uw(i, n, [
                e,
                t,
                r,
                n,
                s
            ]);
        }
        return ha(s);
    }, LM = Gl(!1, 0, new jr, 0), Qa = ()=>LM, KM = (e)=>{
        const t = dw(Qa());
        for (const r of e)Ki(t, r[0], r[1]);
        return WM(t);
    }, DM = (e)=>W(e, mu), qM = (e)=>e && je(e._root), VM = w(2, (e, t)=>Yl(e, t, U(t))), Yl = w(3, (e, t, r)=>{
        let n = e._root, s = 0;
        for(;;)switch(n._tag){
            case "LeafNode":
                return Q(t, n.key) ? n.value : M();
            case "CollisionNode":
                {
                    if (r === n.hash) {
                        const i = n.children;
                        for(let a = 0, _ = i.length; a < _; ++a){
                            const f = i[a];
                            if ("key" in f && Q(t, f.key)) return f.value;
                        }
                    }
                    return M();
                }
            case "IndexedNode":
                {
                    const i = Ms(s, r), a = es(i);
                    if (n.mask & a) {
                        n = n.children[ow(n.mask, a)], s += kn;
                        break;
                    }
                    return M();
                }
            case "ArrayNode":
                {
                    if (n = n.children[Ms(s, r)], n) {
                        s += kn;
                        break;
                    }
                    return M();
                }
            default:
                return M();
        }
    }), HM = w(2, (e, t)=>Vt(Yl(e, t, U(t)))), Ki = w(3, (e, t, r)=>Xl(e, t, ()=>N(r))), JM = w(3, (e, t, r)=>e._editable ? (e._root = t, e._size = r, e) : t === e._root ? e : Gl(e._editable, e._edit, t, r)), fw = (e)=>new Xa(e, (t)=>t), Su = (e)=>e._size, dw = (e)=>Gl(!0, e._edit + 1, e._root, e._size), WM = (e)=>(e._editable = !1, e), Xl = w(3, (e, t, r)=>GM(e, t, U(t), r)), GM = w(4, (e, t, r, n)=>{
        const s = {
            value: e._size
        }, i = e._root.modify(e._editable ? e._edit : NaN, 0, n, r, t, s);
        return m(e, JM(i, s.value));
    }), Xd = w(2, (e, t)=>Xl(e, t, M)), YM = w(2, (e, t)=>Za(e, Qa(), (r, n, s)=>Ki(r, s, t(n, s)))), XM = w(2, (e, t)=>Za(e, void 0, (r, n, s)=>t(n, s))), Za = w(3, (e, t, r)=>{
        const n = e._root;
        if (n._tag === "LeafNode") return Vt(n.value) ? r(t, n.value.value, n.key) : t;
        if (n._tag === "EmptyNode") return t;
        const s = [
            n.children
        ];
        let i;
        for(; i = s.pop();)for(let a = 0, _ = i.length; a < _;){
            const f = i[a++];
            f && !je(f) && (f._tag === "LeafNode" ? Vt(f.value) && (t = r(t, f.value.value, f.key)) : s.push(f.children));
        }
        return t;
    }), gw = "effect/HashSet", Fu = Symbol.for(gw), QM = {
        [Fu]: Fu,
        [Symbol.iterator] () {
            return fw(this._keyMap);
        },
        [tt] () {
            return yt(this, nt(U(this._keyMap))(U(gw)));
        },
        [Y] (e) {
            return ZM(e) ? Su(this._keyMap) === Su(e._keyMap) && Q(this._keyMap, e._keyMap) : !1;
        },
        toString () {
            return qt(this.toJSON());
        },
        toJSON () {
            return {
                _id: "HashSet",
                values: Array.from(this).map(Ut)
            };
        },
        [dt] () {
            return this.toJSON();
        },
        pipe () {
            return q(this, arguments);
        }
    }, tc = (e)=>{
        const t = Object.create(QM);
        return t._keyMap = e, t;
    }, ZM = (e)=>W(e, Fu), tN = tc(Qa()), ec = ()=>tN, eN = (e)=>{
        const t = Ql(ec());
        for (const r of e)Di(t, r);
        return Zl(t);
    }, rN = (...e)=>{
        const t = Ql(ec());
        for (const r of e)Di(t, r);
        return Zl(t);
    }, nN = w(2, (e, t)=>HM(e._keyMap, t)), sN = (e)=>Su(e._keyMap), Ql = (e)=>tc(dw(e._keyMap)), Zl = (e)=>(e._keyMap._editable = !1, e), pw = w(2, (e, t)=>{
        const r = Ql(e);
        return t(r), Zl(r);
    }), Di = w(2, (e, t)=>e._keyMap._editable ? (Ki(t, !0)(e._keyMap), e) : tc(Ki(t, !0)(e._keyMap))), hw = w(2, (e, t)=>e._keyMap._editable ? (Xd(t)(e._keyMap), e) : tc(Xd(t)(e._keyMap))), iN = w(2, (e, t)=>pw(e, (r)=>{
            for (const n of t)hw(r, n);
        })), oN = w(2, (e, t)=>pw(ec(), (r)=>{
            aN(e, (n)=>Di(r, n));
            for (const n of t)Di(r, n);
        })), aN = w(2, (e, t)=>XM(e._keyMap, (r, n)=>t(n))), cN = w(3, (e, t, r)=>Za(e._keyMap, t, (n, s, i)=>r(n, i))), xn = ec, ww = eN, tf = rN, _N = nN, bw = sN, Ri = Di, yw = hw, Qd = iN, qi = oN, wa = cN, Zd = Symbol.for("effect/MutableRef"), uN = {
        [Zd]: Zd,
        toString () {
            return qt(this.toJSON());
        },
        toJSON () {
            return {
                _id: "MutableRef",
                current: Ut(this.current)
            };
        },
        [dt] () {
            return this.toJSON();
        },
        pipe () {
            return q(this, arguments);
        }
    }, ef = (e)=>{
        const t = Object.create(uN);
        return t.current = e, t;
    }, En = (e)=>e.current, rc = w(2, (e, t)=>(e.current = t, e)), rf = "effect/FiberId", Vi = Symbol.for(rf), ba = "None", ku = "Runtime", lN = "Composite", fN = kt(`${rf}-${ba}`);
    let dN = class {
        [Vi] = Vi;
        _tag = ba;
        id = -1;
        startTimeMillis = -1;
        [tt]() {
            return fN;
        }
        [Y](t) {
            return mw(t) && t._tag === ba;
        }
        toString() {
            return qt(this.toJSON());
        }
        toJSON() {
            return {
                _id: "FiberId",
                _tag: this._tag
            };
        }
        [dt]() {
            return this.toJSON();
        }
    };
    class gN {
        id;
        startTimeMillis;
        [Vi] = Vi;
        _tag = ku;
        constructor(t, r){
            this.id = t, this.startTimeMillis = r;
        }
        [tt]() {
            return yt(this, kt(`${rf}-${this._tag}-${this.id}-${this.startTimeMillis}`));
        }
        [Y](t) {
            return mw(t) && t._tag === ku && this.id === t.id && this.startTimeMillis === t.startTimeMillis;
        }
        toString() {
            return qt(this.toJSON());
        }
        toJSON() {
            return {
                _id: "FiberId",
                _tag: this._tag,
                id: this.id,
                startTimeMillis: this.startTimeMillis
            };
        }
        [dt]() {
            return this.toJSON();
        }
    }
    const pN = new dN, mw = (e)=>W(e, Vi), xu = (e)=>{
        switch(e._tag){
            case ba:
                return xn();
            case ku:
                return tf(e.id);
            case lN:
                return m(xu(e.left), qi(xu(e.right)));
        }
    }, tg = rt(Symbol.for("effect/Fiber/Id/_fiberCounter"), ()=>ef(0)), Sw = (e)=>Array.from(xu(e)).map((r)=>`#${r}`).join(","), hN = ()=>{
        const e = En(tg);
        return m(tg, rc(e + 1)), new gN(e, Date.now());
    }, In = pN, wN = Sw, Fw = hN, nf = Qa, bN = KM, yN = qM, kw = VM, xw = Ki, Ew = fw, mN = Xl, SN = YM, Iw = Za, Hi = Symbol.for("effect/List"), Eu = (e)=>Et(e), FN = (e)=>vp(Al(e), Eu), kN = FN(Q), xN = {
        [Hi]: Hi,
        _tag: "Cons",
        toString () {
            return qt(this.toJSON());
        },
        toJSON () {
            return {
                _id: "List",
                _tag: "Cons",
                values: Eu(this).map(Ut)
            };
        },
        [dt] () {
            return this.toJSON();
        },
        [Y] (e) {
            return Ow(e) && this._tag === e._tag && kN(this, e);
        },
        [tt] () {
            return yt(this, no(Eu(this)));
        },
        [Symbol.iterator] () {
            let e = !1, t = this;
            return {
                next () {
                    if (e) return this.return();
                    if (t._tag === "Nil") return e = !0, this.return();
                    const r = t.head;
                    return t = t.tail, {
                        done: e,
                        value: r
                    };
                },
                return (r) {
                    return e || (e = !0), {
                        done: !0,
                        value: r
                    };
                }
            };
        },
        pipe () {
            return q(this, arguments);
        }
    }, ya = (e, t)=>{
        const r = Object.create(xN);
        return r.head = e, r.tail = t, r;
    }, EN = kt("Nil"), IN = {
        [Hi]: Hi,
        _tag: "Nil",
        toString () {
            return qt(this.toJSON());
        },
        toJSON () {
            return {
                _id: "List",
                _tag: "Nil"
            };
        },
        [dt] () {
            return this.toJSON();
        },
        [tt] () {
            return EN;
        },
        [Y] (e) {
            return Ow(e) && this._tag === e._tag;
        },
        [Symbol.iterator] () {
            return {
                next () {
                    return {
                        done: !0,
                        value: void 0
                    };
                }
            };
        },
        pipe () {
            return q(this, arguments);
        }
    }, Rw = Object.create(IN), Ow = (e)=>W(e, Hi), wr = (e)=>e._tag === "Nil", RN = (e)=>e._tag === "Cons", ON = ()=>Rw, Rn = (e, t)=>ya(e, t), Bs = ON, sf = (e)=>ya(e, Rw), TN = w(2, (e, t)=>CN(t, e)), vN = w(2, (e, t)=>Rn(t, e)), CN = w(2, (e, t)=>{
        if (wr(e)) return t;
        if (wr(t)) return e;
        {
            const r = ya(t.head, e);
            let n = r, s = t.tail;
            for(; !wr(s);){
                const i = ya(s.head, e);
                n.tail = i, n = i, s = s.tail;
            }
            return r;
        }
    }), zN = w(3, (e, t, r)=>{
        let n = t, s = e;
        for(; !wr(s);)n = r(n, s.head), s = s.tail;
        return n;
    }), AN = (e)=>{
        let t = Bs(), r = e;
        for(; !wr(r);)t = vN(t, r.head), r = r.tail;
        return t;
    }, of = function() {
        function e(t) {
            t && Object.assign(this, t);
        }
        return e.prototype = Il, e;
    }(), $N = Symbol.for("effect/DifferContextPatch");
    function eg(e) {
        return e;
    }
    const uo = {
        ...of.prototype,
        [$N]: {
            _Value: eg,
            _Patch: eg
        }
    }, PN = Object.assign(Object.create(uo), {
        _tag: "Empty"
    }), MN = Object.create(PN), Tw = ()=>MN, NN = Object.assign(Object.create(uo), {
        _tag: "AndThen"
    }), BN = (e, t)=>{
        const r = Object.create(NN);
        return r.first = e, r.second = t, r;
    }, UN = Object.assign(Object.create(uo), {
        _tag: "AddService"
    }), jN = (e, t)=>{
        const r = Object.create(UN);
        return r.key = e, r.service = t, r;
    }, LN = Object.assign(Object.create(uo), {
        _tag: "RemoveService"
    }), KN = (e)=>{
        const t = Object.create(LN);
        return t.key = e, t;
    }, DN = Object.assign(Object.create(uo), {
        _tag: "UpdateService"
    }), qN = (e, t)=>{
        const r = Object.create(DN);
        return r.key = e, r.update = t, r;
    }, VN = (e, t)=>{
        const r = new Map(e.unsafeMap);
        let n = Tw();
        for (const [s, i] of t.unsafeMap.entries())if (r.has(s)) {
            const a = r.get(s);
            r.delete(s), Q(a, i) || (n = Jo(qN(s, ()=>i))(n));
        } else r.delete(s), n = Jo(jN(s, i))(n);
        for (const [s] of r.entries())n = Jo(KN(s))(n);
        return n;
    }, Jo = w(2, (e, t)=>BN(e, t)), HN = w(2, (e, t)=>{
        if (e._tag === "Empty") return t;
        let r = !1, n = me(e);
        const s = new Map(t.unsafeMap);
        for(; $s(n);){
            const a = Ps(n), _ = Zr(n);
            switch(a._tag){
                case "Empty":
                    {
                        n = _;
                        break;
                    }
                case "AddService":
                    {
                        s.set(a.key, a.service), n = _;
                        break;
                    }
                case "AndThen":
                    {
                        n = Ke(Ke(_, a.second), a.first);
                        break;
                    }
                case "RemoveService":
                    {
                        s.delete(a.key), n = _;
                        break;
                    }
                case "UpdateService":
                    {
                        s.set(a.key, a.update(s.get(a.key))), r = !0, n = _;
                        break;
                    }
            }
        }
        if (!r) return Fn(s);
        const i = new Map;
        for (const [a] of t.unsafeMap)s.has(a) && (i.set(a, s.get(a)), s.delete(a));
        for (const [a, _] of s)i.set(a, _);
        return Fn(i);
    }), JN = Symbol.for("effect/DifferHashSetPatch");
    function L_(e) {
        return e;
    }
    const nc = {
        ...of.prototype,
        [JN]: {
            _Value: L_,
            _Key: L_,
            _Patch: L_
        }
    }, WN = Object.assign(Object.create(nc), {
        _tag: "Empty"
    }), GN = Object.create(WN), vw = ()=>GN, YN = Object.assign(Object.create(nc), {
        _tag: "AndThen"
    }), XN = (e, t)=>{
        const r = Object.create(YN);
        return r.first = e, r.second = t, r;
    }, QN = Object.assign(Object.create(nc), {
        _tag: "Add"
    }), ZN = (e)=>{
        const t = Object.create(QN);
        return t.value = e, t;
    }, tB = Object.assign(Object.create(nc), {
        _tag: "Remove"
    }), eB = (e)=>{
        const t = Object.create(tB);
        return t.value = e, t;
    }, rB = (e, t)=>{
        const [r, n] = wa([
            e,
            vw()
        ], ([s, i], a)=>_N(a)(s) ? [
                yw(a)(s),
                i
            ] : [
                s,
                Iu(ZN(a))(i)
            ])(t);
        return wa(n, (s, i)=>Iu(eB(i))(s))(r);
    }, Iu = w(2, (e, t)=>XN(e, t)), nB = w(2, (e, t)=>{
        if (e._tag === "Empty") return t;
        let r = t, n = me(e);
        for(; $s(n);){
            const s = Ps(n), i = Zr(n);
            switch(s._tag){
                case "Empty":
                    {
                        n = i;
                        break;
                    }
                case "AndThen":
                    {
                        n = Ke(s.first)(Ke(s.second)(i));
                        break;
                    }
                case "Add":
                    {
                        r = Ri(s.value)(r), n = i;
                        break;
                    }
                case "Remove":
                    r = yw(s.value)(r), n = i;
            }
        }
        return r;
    }), sB = Symbol.for("effect/DifferReadonlyArrayPatch");
    function rg(e) {
        return e;
    }
    const lo = {
        ...of.prototype,
        [sB]: {
            _Value: rg,
            _Patch: rg
        }
    }, iB = Object.assign(Object.create(lo), {
        _tag: "Empty"
    }), oB = Object.create(iB), Cw = ()=>oB, aB = Object.assign(Object.create(lo), {
        _tag: "AndThen"
    }), cB = (e, t)=>{
        const r = Object.create(aB);
        return r.first = e, r.second = t, r;
    }, _B = Object.assign(Object.create(lo), {
        _tag: "Append"
    }), uB = (e)=>{
        const t = Object.create(_B);
        return t.values = e, t;
    }, lB = Object.assign(Object.create(lo), {
        _tag: "Slice"
    }), fB = (e, t)=>{
        const r = Object.create(lB);
        return r.from = e, r.until = t, r;
    }, dB = Object.assign(Object.create(lo), {
        _tag: "Update"
    }), gB = (e, t)=>{
        const r = Object.create(dB);
        return r.index = e, r.patch = t, r;
    }, pB = (e)=>{
        let t = 0, r = Cw();
        for(; t < e.oldValue.length && t < e.newValue.length;){
            const n = e.oldValue[t], s = e.newValue[t], i = e.differ.diff(n, s);
            Q(i, e.differ.empty) || (r = Wo(r, gB(t, i))), t = t + 1;
        }
        return t < e.oldValue.length && (r = Wo(r, fB(0, t))), t < e.newValue.length && (r = Wo(r, uB(M3(t)(e.newValue)))), r;
    }, Wo = w(2, (e, t)=>cB(e, t)), hB = w(3, (e, t, r)=>{
        if (e._tag === "Empty") return t;
        let n = t.slice(), s = Oe(e);
        for(; Vo(s);){
            const i = ne(s), a = Sn(s);
            switch(i._tag){
                case "Empty":
                    {
                        s = a;
                        break;
                    }
                case "AndThen":
                    {
                        a.unshift(i.first, i.second), s = a;
                        break;
                    }
                case "Append":
                    {
                        for (const _ of i.values)n.push(_);
                        s = a;
                        break;
                    }
                case "Slice":
                    {
                        n = n.slice(i.from, i.until), s = a;
                        break;
                    }
                case "Update":
                    {
                        n[i.index] = r.patch(i.patch, n[i.index]), s = a;
                        break;
                    }
            }
        }
        return n;
    }), wB = Symbol.for("effect/Differ"), bB = {
        [wB]: {
            _P: _t,
            _V: _t
        },
        pipe () {
            return q(this, arguments);
        }
    }, ei = (e)=>{
        const t = Object.create(bB);
        return t.empty = e.empty, t.diff = e.diff, t.combine = e.combine, t.patch = e.patch, t;
    }, yB = ()=>ei({
            empty: Tw(),
            combine: (e, t)=>Jo(t)(e),
            diff: (e, t)=>VN(e, t),
            patch: (e, t)=>HN(t)(e)
        }), mB = ()=>ei({
            empty: vw(),
            combine: (e, t)=>Iu(t)(e),
            diff: (e, t)=>rB(e, t),
            patch: (e, t)=>nB(t)(e)
        }), SB = (e)=>ei({
            empty: Cw(),
            combine: (t, r)=>Wo(t, r),
            diff: (t, r)=>pB({
                    oldValue: t,
                    newValue: r,
                    differ: e
                }),
            patch: (t, r)=>hB(t, r, e)
        }), zw = ()=>FB((e, t)=>t), FB = (e)=>ei({
            empty: _t,
            combine: (t, r)=>t === _t ? r : r === _t ? t : (n)=>r(t(n)),
            diff: (t, r)=>Q(t, r) ? _t : Ma(r),
            patch: (t, r)=>e(r, t(r))
        }), Ji = 255, Aw = 8, Ru = (e)=>e & Ji, Ou = (e)=>e >> Aw & Ji, fo = (e, t)=>(e & Ji) + ((t & e & Ji) << Aw), kB = fo(0, 0), xB = (e)=>fo(e, e), EB = (e)=>fo(e, 0), IB = w(2, (e, t)=>fo(Ru(e) & ~t, Ou(e))), RB = w(2, (e, t)=>e | t), OB = (e)=>~e >>> 0 & Ji, TB = 0, Nn = 1, vB = 2, $w = 4, Tu = 16, Pw = 32, CB = (e)=>sc(e, Pw), zB = w(2, (e, t)=>e & ~t), AB = w(2, (e, t)=>e | t), vr = (e)=>Mw(e) && !PB(e), Mw = (e)=>sc(e, Nn), sc = w(2, (e, t)=>(e & t) !== 0), Nw = (...e)=>e.reduce((t, r)=>t | r, 0), $B = Nw(TB), ng = (e)=>sc(e, $w), PB = (e)=>sc(e, Tu), Mr = w(2, (e, t)=>fo(e ^ t, t)), cs = w(2, (e, t)=>e & (OB(Ru(t)) | Ou(t)) | Ru(t) & Ou(t)), sg = ei({
        empty: kB,
        diff: (e, t)=>Mr(e, t),
        combine: (e, t)=>RB(t)(e),
        patch: (e, t)=>cs(t, e)
    }), MB = xB, Bw = EB, ig = IB, Uw = (e, t)=>({
            _tag: "Par",
            left: e,
            right: t
        }), Ao = (e, t)=>({
            _tag: "Seq",
            left: e,
            right: t
        }), NB = (e)=>{
        let t = sf(e), r = Bs();
        for(;;){
            const [n, s] = zN(t, [
                jw(),
                Bs()
            ], ([i, a], _)=>{
                const [f, g] = BB(_);
                return [
                    DB(i, f),
                    TN(a, g)
                ];
            });
            if (r = UB(r, n), wr(s)) return AN(r);
            t = s;
        }
        throw new Error("BUG: BlockedRequests.flatten - please report an issue at https://github.com/Effect-TS/effect/issues");
    }, BB = (e)=>{
        let t = e, r = jw(), n = Bs(), s = Bs();
        for(;;)switch(t._tag){
            case "Empty":
                {
                    if (wr(n)) return [
                        r,
                        s
                    ];
                    t = n.head, n = n.tail;
                    break;
                }
            case "Par":
                {
                    n = Rn(t.right, n), t = t.left;
                    break;
                }
            case "Seq":
                {
                    const i = t.left, a = t.right;
                    switch(i._tag){
                        case "Empty":
                            {
                                t = a;
                                break;
                            }
                        case "Par":
                            {
                                const _ = i.left, f = i.right;
                                t = Uw(Ao(_, a), Ao(f, a));
                                break;
                            }
                        case "Seq":
                            {
                                const _ = i.left, f = i.right;
                                t = Ao(_, Ao(f, a));
                                break;
                            }
                        case "Single":
                            {
                                t = i, s = Rn(a, s);
                                break;
                            }
                    }
                    break;
                }
            case "Single":
                {
                    if (r = KB(r, t), wr(n)) return [
                        r,
                        s
                    ];
                    t = n.head, n = n.tail;
                    break;
                }
        }
        throw new Error("BUG: BlockedRequests.step - please report an issue at https://github.com/Effect-TS/effect/issues");
    }, UB = (e, t)=>{
        if (wr(e)) return sf(K_(t));
        if (qB(t)) return e;
        const r = YB(e.head), n = VB(t);
        return r.length === 1 && n.length === 1 && Q(r[0], n[0]) ? Rn(GB(e.head, K_(t)), e.tail) : Rn(K_(t), e);
    }, jB = Symbol.for("effect/RequestBlock/RequestBlockParallel"), LB = {
        _R: (e)=>e
    };
    class af {
        map;
        [jB] = LB;
        constructor(t){
            this.map = t;
        }
    }
    const jw = ()=>new af(nf()), KB = (e, t)=>new af(mN(e.map, t.dataSource, (r)=>d3(Ei(r, cM(t.blockedRequest)), ()=>me(t.blockedRequest)))), DB = (e, t)=>new af(Iw(e.map, t.map, (r, n, s)=>xw(r, s, se(kw(r, s), {
                onNone: ()=>n,
                onSome: (i)=>Ue(n, i)
            })))), qB = (e)=>yN(e.map), VB = (e)=>Array.from(Ew(e.map)), K_ = (e)=>WB(SN(e.map, (t)=>me(t))), HB = Symbol.for("effect/RequestBlock/RequestBlockSequential"), JB = {
        _R: (e)=>e
    };
    class Lw {
        map;
        [HB] = JB;
        constructor(t){
            this.map = t;
        }
    }
    const WB = (e)=>new Lw(e), GB = (e, t)=>new Lw(Iw(t.map, e.map, (r, n, s)=>xw(r, s, se(kw(r, s), {
                onNone: ()=>Er(),
                onSome: (i)=>Ue(i, n)
            })))), YB = (e)=>Array.from(Ew(e.map)), XB = (e)=>Array.from(e.map), go = "Die", On = "Empty", Bn = "Fail", ri = "Interrupt", Us = "Parallel", js = "Sequential", Kw = "effect/Cause", Dw = Symbol.for(Kw), QB = {
        _E: (e)=>e
    }, ni = {
        [Dw]: QB,
        [tt] () {
            return m(U(Kw), nt(U(f4(this))), yt(this));
        },
        [Y] (e) {
            return ZB(e) && l4(this, e);
        },
        pipe () {
            return q(this, arguments);
        },
        toJSON () {
            switch(this._tag){
                case "Empty":
                    return {
                        _id: "Cause",
                        _tag: this._tag
                    };
                case "Die":
                    return {
                        _id: "Cause",
                        _tag: this._tag,
                        defect: Ut(this.defect)
                    };
                case "Interrupt":
                    return {
                        _id: "Cause",
                        _tag: this._tag,
                        fiberId: this.fiberId.toJSON()
                    };
                case "Fail":
                    return {
                        _id: "Cause",
                        _tag: this._tag,
                        failure: Ut(this.error)
                    };
                case "Sequential":
                case "Parallel":
                    return {
                        _id: "Cause",
                        _tag: this._tag,
                        left: Ut(this.left),
                        right: Ut(this.right)
                    };
            }
        },
        toString () {
            return si(this);
        },
        [dt] () {
            return this.toJSON();
        }
    }, Ls = (()=>{
        const e = Object.create(ni);
        return e._tag = On, e;
    })(), ma = (e)=>{
        const t = Object.create(ni);
        return t._tag = Bn, t.error = e, t;
    }, rr = (e)=>{
        const t = Object.create(ni);
        return t._tag = go, t.defect = e, t;
    }, Cr = (e)=>{
        const t = Object.create(ni);
        return t._tag = ri, t.fiberId = e, t;
    }, ic = (e, t)=>{
        const r = Object.create(ni);
        return r._tag = Us, r.left = e, r.right = t, r;
    }, ye = (e, t)=>{
        const r = Object.create(ni);
        return r._tag = js, r.left = e, r.right = t, r;
    }, ZB = (e)=>W(e, Dw), t4 = (e)=>e._tag === On, e4 = (e)=>e._tag === Bn, r4 = (e)=>e._tag === On ? !0 : Ks(e, !0, (t, r)=>{
            switch(r._tag){
                case On:
                    return N(t);
                case go:
                case Bn:
                case ri:
                    return N(!1);
                default:
                    return M();
            }
        }), n4 = (e)=>Vt(_4(e)), cf = (e)=>_f(void 0, g4)(e), s4 = (e)=>As(Ks(e, Er(), (t, r)=>r._tag === Bn ? N(m(t, Ke(r.error))) : M())), i4 = (e)=>As(Ks(e, Er(), (t, r)=>r._tag === go ? N(m(t, Ke(r.defect))) : M())), o4 = (e)=>Ks(e, xn(), (t, r)=>r._tag === ri ? N(m(t, Ri(r.fiberId))) : M()), a4 = (e)=>qw(e, (t)=>t._tag === Bn ? N(t.error) : M()), c4 = (e)=>{
        const t = a4(e);
        switch(t._tag){
            case "None":
                return J(e);
            case "Some":
                return K(t.value);
        }
    }, _4 = (e)=>qw(e, (t)=>t._tag === ri ? N(t.fiberId) : M()), og = (e)=>Vw(e, {
            onEmpty: Ls,
            onFail: ()=>Ls,
            onDie: rr,
            onInterrupt: Cr,
            onSequential: ye,
            onParallel: ic
        }), u4 = (e)=>Vw(e, {
            onEmpty: Ls,
            onFail: rr,
            onDie: rr,
            onInterrupt: Cr,
            onSequential: ye,
            onParallel: ic
        }), l4 = (e, t)=>{
        let r = me(e), n = me(t);
        for(; $s(r) && $s(n);){
            const [s, i] = m(Ps(r), Ks([
                xn(),
                Er()
            ], ([f, g], h)=>{
                const [b, S] = vu(h);
                return N([
                    m(f, qi(b)),
                    m(g, Ue(S))
                ]);
            })), [a, _] = m(Ps(n), Ks([
                xn(),
                Er()
            ], ([f, g], h)=>{
                const [b, S] = vu(h);
                return N([
                    m(f, qi(b)),
                    m(g, Ue(S))
                ]);
            }));
            if (!Q(s, a)) return !1;
            r = i, n = _;
        }
        return !0;
    }, f4 = (e)=>d4(me(e), Er()), d4 = (e, t)=>{
        for(;;){
            const [r, n] = m(e, sh([
                xn(),
                Er()
            ], ([i, a], _)=>{
                const [f, g] = vu(_);
                return [
                    m(i, qi(f)),
                    m(a, Ue(g))
                ];
            })), s = bw(r) > 0 ? m(t, Ke(r)) : t;
            if (_M(n)) return As(s);
            e = n, t = s;
        }
        throw new Error(Ua("Cause.flattenCauseLoop"));
    }, qw = w(2, (e, t)=>{
        const r = [
            e
        ];
        for(; r.length > 0;){
            const n = r.pop(), s = t(n);
            switch(s._tag){
                case "None":
                    {
                        switch(n._tag){
                            case js:
                            case Us:
                                {
                                    r.push(n.right), r.push(n.left);
                                    break;
                                }
                        }
                        break;
                    }
                case "Some":
                    return s;
            }
        }
        return M();
    }), vu = (e)=>{
        let t = e;
        const r = [];
        let n = xn(), s = Er();
        for(; t !== void 0;)switch(t._tag){
            case On:
                {
                    if (r.length === 0) return [
                        n,
                        s
                    ];
                    t = r.pop();
                    break;
                }
            case Bn:
                {
                    if (n = Ri(n, U_(t._tag, t.error)), r.length === 0) return [
                        n,
                        s
                    ];
                    t = r.pop();
                    break;
                }
            case go:
                {
                    if (n = Ri(n, U_(t._tag, t.defect)), r.length === 0) return [
                        n,
                        s
                    ];
                    t = r.pop();
                    break;
                }
            case ri:
                {
                    if (n = Ri(n, U_(t._tag, t.fiberId)), r.length === 0) return [
                        n,
                        s
                    ];
                    t = r.pop();
                    break;
                }
            case js:
                {
                    switch(t.left._tag){
                        case On:
                            {
                                t = t.right;
                                break;
                            }
                        case js:
                            {
                                t = ye(t.left.left, ye(t.left.right, t.right));
                                break;
                            }
                        case Us:
                            {
                                t = ic(ye(t.left.left, t.right), ye(t.left.right, t.right));
                                break;
                            }
                        default:
                            {
                                s = Ke(s, t.right), t = t.left;
                                break;
                            }
                    }
                    break;
                }
            case Us:
                {
                    r.push(t.right), t = t.left;
                    break;
                }
        }
        throw new Error(Ua("Cause.evaluateCauseLoop"));
    }, g4 = {
        emptyCase: uu,
        failCase: an,
        dieCase: an,
        interruptCase: uu,
        sequentialCase: (e, t, r)=>t && r,
        parallelCase: (e, t, r)=>t && r
    }, ag = "SequentialCase", cg = "ParallelCase", Vw = w(2, (e, { onDie: t, onEmpty: r, onFail: n, onInterrupt: s, onParallel: i, onSequential: a })=>_f(e, void 0, {
            emptyCase: ()=>r,
            failCase: (_, f)=>n(f),
            dieCase: (_, f)=>t(f),
            interruptCase: (_, f)=>s(f),
            sequentialCase: (_, f, g)=>a(f, g),
            parallelCase: (_, f, g)=>i(f, g)
        })), Ks = w(3, (e, t, r)=>{
        let n = t, s = e;
        const i = [];
        for(; s !== void 0;){
            const a = r(n, s);
            switch(n = Vt(a) ? a.value : n, s._tag){
                case js:
                    {
                        i.push(s.right), s = s.left;
                        break;
                    }
                case Us:
                    {
                        i.push(s.right), s = s.left;
                        break;
                    }
                default:
                    {
                        s = void 0;
                        break;
                    }
            }
            s === void 0 && i.length > 0 && (s = i.pop());
        }
        return n;
    }), _f = w(3, (e, t, r)=>{
        const n = [
            e
        ], s = [];
        for(; n.length > 0;){
            const a = n.pop();
            switch(a._tag){
                case On:
                    {
                        s.push(J(r.emptyCase(t)));
                        break;
                    }
                case Bn:
                    {
                        s.push(J(r.failCase(t, a.error)));
                        break;
                    }
                case go:
                    {
                        s.push(J(r.dieCase(t, a.defect)));
                        break;
                    }
                case ri:
                    {
                        s.push(J(r.interruptCase(t, a.fiberId)));
                        break;
                    }
                case js:
                    {
                        n.push(a.right), n.push(a.left), s.push(K({
                            _tag: ag
                        }));
                        break;
                    }
                case Us:
                    {
                        n.push(a.right), n.push(a.left), s.push(K({
                            _tag: cg
                        }));
                        break;
                    }
            }
        }
        const i = [];
        for(; s.length > 0;){
            const a = s.pop();
            switch(a._tag){
                case "Left":
                    {
                        switch(a.left._tag){
                            case ag:
                                {
                                    const _ = i.pop(), f = i.pop(), g = r.sequentialCase(t, _, f);
                                    i.push(g);
                                    break;
                                }
                            case cg:
                                {
                                    const _ = i.pop(), f = i.pop(), g = r.parallelCase(t, _, f);
                                    i.push(g);
                                    break;
                                }
                        }
                        break;
                    }
                case "Right":
                    {
                        i.push(a.right);
                        break;
                    }
            }
        }
        if (i.length === 0) throw new Error("BUG: Cause.reduceWithContext - please report an issue at https://github.com/Effect-TS/effect/issues");
        return i.pop();
    }), si = (e, t)=>cf(e) ? "All fibers interrupted without errors." : Jw(e).map(function(r) {
            return t?.renderErrorCause !== !0 || r.cause === void 0 ? r.stack : `${r.stack} {
${Hw(r.cause, "  ")}
}`;
        }).join(`
`), Hw = (e, t)=>{
        const r = e.stack.split(`
`);
        let n = `${t}[cause]: ${r[0]}`;
        for(let s = 1, i = r.length; s < i; s++)n += `
${t}${r[s]}`;
        return e.cause && (n += ` {
${Hw(e.cause, `${t}  `)}
${t}}`), n;
    }, Cu = (e)=>{
        const t = typeof e == "object" && e !== null, r = Error.stackTraceLimit;
        Error.stackTraceLimit = 1;
        const n = new Error(p4(e), t && "cause" in e && typeof e.cause < "u" ? {
            cause: Cu(e.cause)
        } : void 0);
        return Error.stackTraceLimit = r, n.message === "" && (n.message = "An error has occurred"), Error.stackTraceLimit = r, n.name = e instanceof Error ? e.name : "Error", t && (Ds in e && (n.span = e[Ds]), Object.keys(e).forEach((s)=>{
            s in n || (n[s] = e[s]);
        })), n.stack = b4(`${n.name}: ${n.message}`, e instanceof Error && e.stack ? e.stack : "", n.span), n;
    }, p4 = (e)=>{
        if (typeof e == "string") return e;
        if (typeof e == "object" && e !== null && e instanceof Error) return e.message;
        try {
            if (W(e, "toString") && eo(e.toString) && e.toString !== Object.prototype.toString && e.toString !== globalThis.Array.prototype.toString) return e.toString();
        } catch  {}
        return Bp(e);
    }, h4 = /\((.*)\)/g, w4 = rt("effect/Tracer/spanToTrace", ()=>new WeakMap), b4 = (e, t, r)=>{
        const n = [
            e
        ], s = t.startsWith(e) ? t.slice(e.length).split(`
`) : t.split(`
`);
        for(let i = 1; i < s.length; i++){
            if (s[i].includes(" at new BaseEffectError") || s[i].includes(" at new YieldableError")) {
                i++;
                continue;
            }
            if (s[i].includes("Generator.next") || s[i].includes("effect_internal_function")) break;
            n.push(s[i].replace(/at .*effect_instruction_i.*\((.*)\)/, "at $1").replace(/EffectPrimitive\.\w+/, "<anonymous>"));
        }
        if (r) {
            let i = r, a = 0;
            for(; i && i._tag === "Span" && a < 10;){
                const _ = w4.get(i);
                if (typeof _ == "function") {
                    const f = _();
                    if (typeof f == "string") {
                        const g = f.matchAll(h4);
                        let h = !1;
                        for (const [, b] of g)h = !0, n.push(`    at ${i.name} (${b})`);
                        h || n.push(`    at ${i.name} (${f.replace(/^at /, "")})`);
                    } else n.push(`    at ${i.name}`);
                } else n.push(`    at ${i.name}`);
                i = Ye(i.parent), a++;
            }
        }
        return n.join(`
`);
    }, Ds = Symbol.for("effect/SpanAnnotation"), Jw = (e)=>_f(e, void 0, {
            emptyCase: ()=>[],
            dieCase: (t, r)=>[
                    Cu(r)
                ],
            failCase: (t, r)=>[
                    Cu(r)
                ],
            interruptCase: ()=>[],
            parallelCase: (t, r, n)=>[
                    ...r,
                    ...n
                ],
            sequentialCase: (t, r, n)=>[
                    ...r,
                    ...n
                ]
        }), po = "Pending", uf = "Done", y4 = "effect/Deferred", m4 = Symbol.for(y4), S4 = {
        _E: (e)=>e,
        _A: (e)=>e
    }, F4 = (e)=>({
            _tag: po,
            joiners: e
        }), Ww = (e)=>({
            _tag: uf,
            effect: e
        });
    class ho {
        self;
        called = !1;
        constructor(t){
            this.self = t;
        }
        next(t) {
            return this.called ? {
                value: t,
                done: !0
            } : (this.called = !0, {
                value: this.self,
                done: !1
            });
        }
        return(t) {
            return {
                value: t,
                done: !0
            };
        }
        throw(t) {
            throw t;
        }
        [Symbol.iterator]() {
            return new ho(this.self);
        }
    }
    const Gw = (e, t)=>{
        const r = new jt("Blocked");
        return r.effect_instruction_i0 = e, r.effect_instruction_i1 = t, r;
    }, k4 = (e)=>{
        const t = new jt("RunBlocked");
        return t.effect_instruction_i0 = e, t;
    }, qs = Symbol.for("effect/Effect");
    class x4 {
        patch;
        op;
        _op = xl;
        constructor(t, r){
            this.patch = t, this.op = r;
        }
    }
    class jt {
        _op;
        effect_instruction_i0 = void 0;
        effect_instruction_i1 = void 0;
        effect_instruction_i2 = void 0;
        trace = void 0;
        [qs] = Ts;
        constructor(t){
            this._op = t;
        }
        [Y](t) {
            return this === t;
        }
        [tt]() {
            return yt(this, yl(this));
        }
        pipe() {
            return q(this, arguments);
        }
        toJSON() {
            return {
                _id: "Effect",
                _op: this._op,
                effect_instruction_i0: Ut(this.effect_instruction_i0),
                effect_instruction_i1: Ut(this.effect_instruction_i1),
                effect_instruction_i2: Ut(this.effect_instruction_i2)
            };
        }
        toString() {
            return qt(this.toJSON());
        }
        [dt]() {
            return this.toJSON();
        }
        [Symbol.iterator]() {
            return new ho(new ro(this));
        }
    }
    class Yw {
        _op;
        effect_instruction_i0 = void 0;
        effect_instruction_i1 = void 0;
        effect_instruction_i2 = void 0;
        trace = void 0;
        [qs] = Ts;
        constructor(t){
            this._op = t, this._tag = t;
        }
        [Y](t) {
            return lc(t) && t._op === "Failure" && Q(this.effect_instruction_i0, t.effect_instruction_i0);
        }
        [tt]() {
            return m(kt(this._tag), nt(U(this.effect_instruction_i0)), yt(this));
        }
        get cause() {
            return this.effect_instruction_i0;
        }
        pipe() {
            return q(this, arguments);
        }
        toJSON() {
            return {
                _id: "Exit",
                _tag: this._op,
                cause: this.cause.toJSON()
            };
        }
        toString() {
            return qt(this.toJSON());
        }
        [dt]() {
            return this.toJSON();
        }
        [Symbol.iterator]() {
            return new ho(new ro(this));
        }
    }
    class Xw {
        _op;
        effect_instruction_i0 = void 0;
        effect_instruction_i1 = void 0;
        effect_instruction_i2 = void 0;
        trace = void 0;
        [qs] = Ts;
        constructor(t){
            this._op = t, this._tag = t;
        }
        [Y](t) {
            return lc(t) && t._op === "Success" && Q(this.effect_instruction_i0, t.effect_instruction_i0);
        }
        [tt]() {
            return m(kt(this._tag), nt(U(this.effect_instruction_i0)), yt(this));
        }
        get value() {
            return this.effect_instruction_i0;
        }
        pipe() {
            return q(this, arguments);
        }
        toJSON() {
            return {
                _id: "Exit",
                _tag: this._op,
                value: Ut(this.value)
            };
        }
        toString() {
            return qt(this.toJSON());
        }
        [dt]() {
            return this.toJSON();
        }
        [Symbol.iterator]() {
            return new ho(new ro(this));
        }
    }
    const Un = (e)=>W(e, qs), ht = (e)=>{
        const t = new jt(Lp);
        return t.effect_instruction_i0 = e, t;
    }, E4 = w(3, (e, t, r)=>sr((n)=>T(e, (s)=>T(ln(ct(()=>n(t(s)))), (i)=>ct(()=>r(s, i)).pipe(Rr({
                        onFailure: (a)=>{
                            switch(i._tag){
                                case Yt:
                                    return ie(ye(i.effect_instruction_i0, a));
                                case Xt:
                                    return ie(a);
                            }
                        },
                        onSuccess: ()=>i
                    })))))), Ae = w(2, (e, t)=>T(e, ()=>G(t))), Or = (e)=>Ae(e, void 0), Qw = function() {
        const e = new jt(La);
        switch(arguments.length){
            case 2:
                {
                    e.effect_instruction_i0 = arguments[0], e.commit = arguments[1];
                    break;
                }
            case 3:
                {
                    e.effect_instruction_i0 = arguments[0], e.effect_instruction_i1 = arguments[1], e.commit = arguments[2];
                    break;
                }
            case 4:
                {
                    e.effect_instruction_i0 = arguments[0], e.effect_instruction_i1 = arguments[1], e.effect_instruction_i2 = arguments[2], e.commit = arguments[3];
                    break;
                }
            default:
                throw new Error(Ua("you're not supposed to end up here"));
        }
        return e;
    }, Wi = (e, t = In)=>{
        const r = new jt(ki);
        let n;
        return r.effect_instruction_i0 = (s)=>{
            n = e(s);
        }, r.effect_instruction_i1 = t, sb(r, (s)=>Un(n) ? n : It);
    }, Zw = (e, t = In)=>ct(()=>Wi(e, t)), Tn = (e, t = In)=>Qw(e, function() {
            let r, n;
            function s(f) {
                r ? r(f) : n === void 0 && (n = f);
            }
            const i = new jt(ki);
            i.effect_instruction_i0 = (f)=>{
                r = f, n && f(n);
            }, i.effect_instruction_i1 = t;
            let a, _;
            return this.effect_instruction_i0.length !== 1 ? (_ = new AbortController, a = Jt(()=>this.effect_instruction_i0(s, _.signal))) : a = Jt(()=>this.effect_instruction_i0(s)), a || _ ? sb(i, (f)=>(_ && _.abort(), a ?? It)) : i;
        }), zu = w(2, (e, t)=>df(e, {
            onFailure: t,
            onSuccess: G
        })), _g = Symbol.for("effect/OriginalAnnotation"), lf = (e, t)=>Vt(t) ? new Proxy(e, {
            has (r, n) {
                return n === Ds || n === _g || n in r;
            },
            get (r, n) {
                return n === Ds ? t.value : n === _g ? e : r[n];
            }
        }) : e, Au = (e)=>Xs(e) && !(Ds in e) ? ht((t)=>ie(rr(lf(e, Ff(t))))) : ie(rr(e)), I4 = (e)=>R4(()=>rr(new o8(e))), Vs = (e)=>df(e, {
            onFailure: (t)=>G(K(t)),
            onSuccess: (t)=>G(J(t))
        }), ln = (e)=>v4(e, {
            onFailure: ft,
            onSuccess: xt
        }), Nt = (e)=>Xs(e) && !(Ds in e) ? ht((t)=>ie(ma(lf(e, Ff(t))))) : ie(ma(e)), ff = (e)=>T(P(e), Nt), ie = (e)=>{
        const t = new Yw(Yt);
        return t.effect_instruction_i0 = e, t;
    }, R4 = (e)=>T(P(e), ie), tb = ht((e)=>G(e.id())), eb = (e)=>ht((t)=>e(t.id())), T = w(2, (e, t)=>{
        const r = new jt(aa);
        return r.effect_instruction_i0 = e, r.effect_instruction_i1 = t, r;
    }), O4 = w(2, (e, t)=>T(e, (r)=>{
            const n = typeof t == "function" ? t(r) : t;
            return Un(n) ? n : Ap(n) ? Wi((s)=>{
                n.then((i)=>s(G(i)), (i)=>s(Nt(new uc(i, "An unknown error occurred in Effect.andThen"))));
            }) : G(n);
        })), T4 = (e)=>{
        const t = new jt("OnStep");
        return t.effect_instruction_i0 = e, t;
    }, oc = (e)=>T(e, _t), v4 = w(2, (e, t)=>Rr(e, {
            onFailure: (r)=>G(t.onFailure(r)),
            onSuccess: (r)=>G(t.onSuccess(r))
        })), Rr = w(2, (e, t)=>{
        const r = new jt(ca);
        return r.effect_instruction_i0 = e, r.effect_instruction_i1 = t.onFailure, r.effect_instruction_i2 = t.onSuccess, r;
    }), df = w(2, (e, t)=>Rr(e, {
            onFailure: (r)=>{
                if (i4(r).length > 0) return ie(u4(r));
                const s = s4(r);
                return s.length > 0 ? t.onFailure(rw(s)) : ie(r);
            },
            onSuccess: t.onSuccess
        })), fr = w(2, (e, t)=>ct(()=>{
            const r = Et(e), n = Da(r.length);
            let s = 0;
            return Ae(hf({
                while: ()=>s < r.length,
                body: ()=>t(r[s], s),
                step: (i)=>{
                    n[s++] = i;
                }
            }), n);
        })), ac = w(2, (e, t)=>ct(()=>{
            const r = Et(e);
            let n = 0;
            return hf({
                while: ()=>n < r.length,
                body: ()=>t(r[n], n),
                step: ()=>{
                    n++;
                }
            });
        })), rb = (e)=>{
        const t = new jt(Qs);
        return t.effect_instruction_i0 = MB(Nn), t.effect_instruction_i1 = ()=>e, t;
    }, C4 = w(2, (e, t)=>sr((r)=>T(ln(r(e)), (n)=>y8(t, n)))), ut = w(2, (e, t)=>T(e, (r)=>P(()=>t(r)))), nb = w(2, (e, t)=>df(e, {
            onFailure: (r)=>ff(()=>t.onFailure(r)),
            onSuccess: (r)=>P(()=>t.onSuccess(r))
        })), wo = w(2, (e, t)=>Rr(e, {
            onFailure: (r)=>{
                const n = c4(r);
                switch(n._tag){
                    case "Left":
                        return ff(()=>t(n.left));
                    case "Right":
                        return ie(n.right);
                }
            },
            onSuccess: G
        })), Hs = w(2, (e, t)=>sr((r)=>Rr(r(e), {
                onFailure: (n)=>{
                    const s = ft(n);
                    return Rr(t(s), {
                        onFailure: (i)=>ft(ye(n, i)),
                        onSuccess: ()=>s
                    });
                },
                onSuccess: (n)=>{
                    const s = xt(n);
                    return Me(t(s), s);
                }
            }))), sb = w(2, (e, t)=>Hs(e, fc({
            onFailure: (r)=>cf(r) ? Or(t(o4(r))) : It,
            onSuccess: ()=>It
        }))), z4 = ht((e, t)=>G(t.runtimeFlags)), G = (e)=>{
        const t = new Xw(Xt);
        return t.effect_instruction_i0 = e, t;
    }, ct = (e)=>{
        const t = new jt(La);
        return t.commit = e, t;
    }, P = (e)=>{
        const t = new jt(jp);
        return t.effect_instruction_i0 = e, t;
    }, gf = w((e)=>e.length === 3 || e.length === 2 && !(Xs(e[1]) && "onlyEffect" in e[1]), (e, t)=>T(e, (r)=>{
            const n = typeof t == "function" ? t(r) : t;
            return Un(n) ? Ae(n, r) : Ap(n) ? Wi((s)=>{
                n.then((i)=>s(G(r)), (i)=>s(Nt(new uc(i, "An unknown error occurred in Effect.tap"))));
            }) : G(r);
        })), A4 = (e)=>ht((t)=>{
            const r = t.getFiberRef(Mu), n = m(r, zt(()=>t.scope()));
            return e(yo(Mu, N(n)));
        }), pf = (e)=>{
        const t = new jt(Qs);
        return t.effect_instruction_i0 = Bw(Nn), t.effect_instruction_i1 = ()=>e, t;
    }, sr = (e)=>Qw(e, function() {
            const t = new jt(Qs);
            return t.effect_instruction_i0 = Bw(Nn), t.effect_instruction_i1 = (r)=>Mw(r) ? Jt(()=>this.effect_instruction_i0(rb)) : Jt(()=>this.effect_instruction_i0(pf)), t;
        }), It = G(void 0), ib = (e)=>{
        const t = new jt(Qs);
        return t.effect_instruction_i0 = e, t.effect_instruction_i1 = void 0, t;
    }, ob = w(2, (e, t)=>T(t, (r)=>r ? m(e, ut(N)) : G(M()))), hf = (e)=>{
        const t = new jt(_a);
        return t.effect_instruction_i0 = e.while, t.effect_instruction_i1 = e.body, t.effect_instruction_i2 = e.step, t;
    }, $u = (e)=>ct(()=>{
            const t = new jt(xi);
            return t.effect_instruction_i0 = e(), t;
        }), ab = function() {
        const e = arguments.length === 1 ? arguments[0] : arguments[1].bind(arguments[0]);
        return $u(()=>e(m));
    }, $4 = (e, ...t)=>Object.defineProperty(t.length === 0 ? function(...r) {
            return $u(()=>e.apply(this, r));
        } : function(...r) {
            let n = $u(()=>e.apply(this, r));
            for (const s of t)n = s(n, ...r);
            return n;
        }, "length", {
            value: e.length,
            configurable: !0
        }), P4 = w(2, (e, t)=>{
        const r = new jt(Qs);
        return r.effect_instruction_i0 = t, r.effect_instruction_i1 = ()=>e, r;
    }), wf = (e)=>{
        const t = new jt(qo);
        return typeof e?.priority < "u" ? t8(t, e.priority) : t;
    }, cc = w(2, (e, t)=>T(e, (r)=>ut(t, (n)=>[
                    r,
                    n
                ]))), cb = w(2, (e, t)=>T(e, (r)=>Ae(t, r))), Me = w(2, (e, t)=>T(e, ()=>t)), M4 = w(3, (e, t, r)=>T(e, (n)=>ut(t, (s)=>r(n, s)))), N4 = (e)=>T(tb, (t)=>m(e, bf(t))), bf = w(2, (e, t)=>T(e.interruptAsFork(t), ()=>e.await)), B4 = {
        _tag: "All",
        syslog: 0,
        label: "ALL",
        ordinal: Number.MIN_SAFE_INTEGER,
        pipe () {
            return q(this, arguments);
        }
    }, U4 = {
        _tag: "Fatal",
        syslog: 2,
        label: "FATAL",
        ordinal: 5e4,
        pipe () {
            return q(this, arguments);
        }
    }, j4 = {
        _tag: "Error",
        syslog: 3,
        label: "ERROR",
        ordinal: 4e4,
        pipe () {
            return q(this, arguments);
        }
    }, _b = {
        _tag: "Warning",
        syslog: 4,
        label: "WARN",
        ordinal: 3e4,
        pipe () {
            return q(this, arguments);
        }
    }, ub = {
        _tag: "Info",
        syslog: 6,
        label: "INFO",
        ordinal: 2e4,
        pipe () {
            return q(this, arguments);
        }
    }, lb = {
        _tag: "Debug",
        syslog: 7,
        label: "DEBUG",
        ordinal: 1e4,
        pipe () {
            return q(this, arguments);
        }
    }, L4 = {
        _tag: "Trace",
        syslog: 7,
        label: "TRACE",
        ordinal: 0,
        pipe () {
            return q(this, arguments);
        }
    }, K4 = {
        _tag: "None",
        syslog: 7,
        label: "OFF",
        ordinal: Number.MAX_SAFE_INTEGER,
        pipe () {
            return q(this, arguments);
        }
    }, D4 = "effect/FiberRef", q4 = Symbol.for(D4), V4 = {
        _A: (e)=>e
    }, _c = (e)=>ht((t)=>xt(t.getFiberRef(e))), bo = w(2, (e, t)=>T(_c(e), t)), Sa = w(2, (e, t)=>H4(e, ()=>[
                void 0,
                t
            ])), H4 = w(2, (e, t)=>ht((r)=>{
            const [n, s] = t(r.getFiberRef(e));
            return r.setFiberRef(e, s), G(n);
        })), yo = w(3, (e, t, r)=>E4(cb(_c(t), Sa(t, r)), ()=>e, (n)=>Sa(t, n))), J4 = w(3, (e, t, r)=>bo(t, (n)=>yo(e, t, r(n)))), ge = (e, t)=>ii(e, {
            differ: zw(),
            fork: t?.fork ?? _t,
            join: t?.join
        }), W4 = (e)=>{
        const t = mB();
        return ii(e, {
            differ: t,
            fork: t.empty
        });
    }, G4 = (e)=>{
        const t = SB(zw());
        return ii(e, {
            differ: t,
            fork: t.empty
        });
    }, fb = (e)=>{
        const t = yB();
        return ii(e, {
            differ: t,
            fork: t.empty
        });
    }, ii = (e, t)=>({
            ...An,
            [q4]: V4,
            initial: e,
            commit () {
                return _c(this);
            },
            diff: (n, s)=>t.differ.diff(n, s),
            combine: (n, s)=>t.differ.combine(n, s),
            patch: (n)=>(s)=>t.differ.patch(n, s),
            fork: t.fork,
            join: t.join ?? ((n, s)=>s)
        }), Y4 = (e)=>ii(e, {
            differ: sg,
            fork: sg.empty
        }), Hr = rt(Symbol.for("effect/FiberRef/currentContext"), ()=>fb(Ja())), mo = rt(Symbol.for("effect/FiberRef/currentSchedulingPriority"), ()=>ge(0)), db = rt(Symbol.for("effect/FiberRef/currentMaxOpsBeforeYield"), ()=>ge(2048)), X4 = rt(Symbol.for("effect/FiberRef/currentLogAnnotation"), ()=>ge(nf())), Q4 = rt(Symbol.for("effect/FiberRef/currentLogLevel"), ()=>ge(ub)), Z4 = rt(Symbol.for("effect/FiberRef/currentLogSpan"), ()=>ge(Bs())), t8 = w(2, (e, t)=>yo(e, mo, t)), e8 = rt(Symbol.for("effect/FiberRef/currentConcurrency"), ()=>ge("unbounded")), r8 = rt(Symbol.for("effect/FiberRef/currentRequestBatching"), ()=>ge(!0)), n8 = rt(Symbol.for("effect/FiberRef/currentUnhandledErrorLogLevel"), ()=>ge(N(lb))), s8 = rt(Symbol.for("effect/FiberRef/versionMismatchErrorLogLevel"), ()=>ge(N(_b))), Pu = rt(Symbol.for("effect/FiberRef/currentMetricLabels"), ()=>G4(vs())), Mu = rt(Symbol.for("effect/FiberRef/currentForkScopeOverride"), ()=>ge(M(), {
            fork: ()=>M(),
            join: (e, t)=>e
        })), $o = rt(Symbol.for("effect/FiberRef/currentInterruptedCause"), ()=>ge(Ls, {
            fork: ()=>Ls,
            join: (e, t)=>e
        })), ug = Symbol.for("effect/Scope"), lg = Symbol.for("effect/CloseableScope"), i8 = (e, t)=>e.addFinalizer(()=>Or(t)), Nu = (e, t)=>e.addFinalizer(t), Bu = (e, t)=>e.close(t), _r = (e, t)=>e.fork(t), yf = function() {
        class e extends globalThis.Error {
            commit() {
                return Nt(this);
            }
            toJSON() {
                const r = {
                    ...this
                };
                return this.message && (r.message = this.message), this.cause && (r.cause = this.cause), r;
            }
            [dt]() {
                return this.toString !== globalThis.Error.prototype.toString ? this.stack ? `${this.toString()}
${this.stack.split(`
`).slice(1).join(`
`)}` : this.toString() : "Bun" in globalThis ? si(ma(this), {
                    renderErrorCause: !0
                }) : this;
            }
        }
        return Object.assign(e.prototype, X$), e;
    }(), gb = (e, t)=>{
        class r extends yf {
            _tag = t;
        }
        return Object.assign(r.prototype, e), r.prototype.name = t, r;
    }, fg = Symbol.for("effect/Cause/errors/RuntimeException"), o8 = gb({
        [fg]: fg
    }, "RuntimeException"), a8 = Symbol.for("effect/Cause/errors/InterruptedException"), c8 = (e)=>W(e, a8), dg = Symbol.for("effect/Cause/errors/NoSuchElement"), pb = gb({
        [dg]: dg
    }, "NoSuchElementException"), gg = Symbol.for("effect/Cause/errors/UnknownException"), uc = function() {
        class e extends yf {
            _tag = "UnknownException";
            error;
            constructor(r, n){
                super(n ?? "An unknown error occurred", {
                    cause: r
                }), this.error = r;
            }
        }
        return Object.assign(e.prototype, {
            [gg]: gg,
            name: "UnknownException"
        }), e;
    }(), lc = (e)=>Un(e) && "_tag" in e && (e._tag === "Success" || e._tag === "Failure"), _8 = (e)=>e._tag === "Success", u8 = w(2, (e, t)=>{
        switch(e._tag){
            case Yt:
                return ft(e.effect_instruction_i0);
            case Xt:
                return xt(t);
        }
    }), D_ = (e)=>u8(e, void 0), Oi = (e, t)=>w8(e, t?.parallel ? ic : ye), l8 = (e)=>ft(rr(e)), pg = (e)=>ft(ma(e)), ft = (e)=>{
        const t = new Yw(Yt);
        return t.effect_instruction_i0 = e, t;
    }, f8 = w(2, (e, t)=>{
        switch(e._tag){
            case Yt:
                return ft(e.effect_instruction_i0);
            case Xt:
                return t(e.effect_instruction_i0);
        }
    }), d8 = (e)=>m(e, f8(_t)), g8 = (e)=>ft(Cr(e)), q_ = w(2, (e, t)=>{
        switch(e._tag){
            case Yt:
                return ft(e.effect_instruction_i0);
            case Xt:
                return xt(t(e.effect_instruction_i0));
        }
    }), fc = w(2, (e, { onFailure: t, onSuccess: r })=>{
        switch(e._tag){
            case Yt:
                return t(e.effect_instruction_i0);
            case Xt:
                return r(e.effect_instruction_i0);
        }
    }), p8 = w(2, (e, { onFailure: t, onSuccess: r })=>{
        switch(e._tag){
            case Yt:
                return t(e.effect_instruction_i0);
            case Xt:
                return r(e.effect_instruction_i0);
        }
    }), xt = (e)=>{
        const t = new Xw(Xt);
        return t.effect_instruction_i0 = e, t;
    }, Le = xt(void 0), h8 = w(3, (e, t, { onFailure: r, onSuccess: n })=>{
        switch(e._tag){
            case Yt:
                switch(t._tag){
                    case Xt:
                        return ft(e.effect_instruction_i0);
                    case Yt:
                        return ft(r(e.effect_instruction_i0, t.effect_instruction_i0));
                }
            case Xt:
                switch(t._tag){
                    case Xt:
                        return xt(n(e.effect_instruction_i0, t.effect_instruction_i0));
                    case Yt:
                        return ft(t.effect_instruction_i0);
                }
        }
    }), w8 = (e, t)=>{
        const r = ew(e);
        return $s(r) ? m(Zr(r), sh(m(Ps(r), q_(me)), (n, s)=>m(n, h8(s, {
                onSuccess: (i, a)=>m(i, Ke(a)),
                onFailure: t
            }))), q_(As), q_((n)=>_n(n)), N) : M();
    }, hb = (e)=>({
            ...An,
            [m4]: S4,
            state: ef(F4([])),
            commit () {
                return dc(this);
            },
            blockingOn: e
        }), wb = ()=>T(tb, (e)=>b8(e)), b8 = (e)=>P(()=>hb(e)), dc = (e)=>Zw((t)=>{
            const r = En(e.state);
            switch(r._tag){
                case uf:
                    return t(r.effect);
                case po:
                    return r.joiners.push(t), F8(e, t);
            }
        }, e.blockingOn), mf = w(2, (e, t)=>P(()=>{
            const r = En(e.state);
            switch(r._tag){
                case uf:
                    return !1;
                case po:
                    {
                        rc(e.state, Ww(t));
                        for(let n = 0, s = r.joiners.length; n < s; n++)r.joiners[n](t);
                        return !0;
                    }
            }
        })), y8 = w(2, (e, t)=>mf(e, t)), m8 = w(2, (e, t)=>mf(e, ie(t))), S8 = w(2, (e, t)=>mf(e, G(t))), bb = (e, t)=>{
        const r = En(e.state);
        if (r._tag === po) {
            rc(e.state, Ww(t));
            for(let n = 0, s = r.joiners.length; n < s; n++)r.joiners[n](t);
        }
    }, F8 = (e, t)=>P(()=>{
            const r = En(e.state);
            if (r._tag === po) {
                const n = r.joiners.indexOf(t);
                n >= 0 && r.joiners.splice(n, 1);
            }
        }), k8 = ht((e)=>xt(e.currentContext)), yb = ()=>k8, oi = (e)=>T(yb(), e), So = w(2, (e, t)=>yo(Hr, t)(e)), Sf = w(2, (e, t)=>J4(Hr, (r)=>_o(r, t))(e)), x8 = w(2, (e, t)=>oi((r)=>So(e, t(r)))), Ff = (e)=>{
        const t = e.currentSpan;
        return t !== void 0 && t._tag === "Span" ? N(t) : M();
    }, E8 = _8, I8 = d8, R8 = fc, hg = Symbol.for("effect/MutableHashMap"), O8 = {
        [hg]: hg,
        [Symbol.iterator] () {
            return new kf(this);
        },
        toString () {
            return qt(this.toJSON());
        },
        toJSON () {
            return {
                _id: "MutableHashMap",
                values: Array.from(this).map(Ut)
            };
        },
        [dt] () {
            return this.toJSON();
        },
        pipe () {
            return q(this, arguments);
        }
    };
    class kf {
        self;
        referentialIterator;
        bucketIterator;
        constructor(t){
            this.self = t, this.referentialIterator = t.referential[Symbol.iterator]();
        }
        next() {
            if (this.bucketIterator !== void 0) return this.bucketIterator.next();
            const t = this.referentialIterator.next();
            return t.done ? (this.bucketIterator = new T8(this.self.buckets.values()), this.next()) : t;
        }
        [Symbol.iterator]() {
            return new kf(this.self);
        }
    }
    class T8 {
        backing;
        constructor(t){
            this.backing = t;
        }
        currentBucket;
        next() {
            if (this.currentBucket === void 0) {
                const r = this.backing.next();
                if (r.done) return r;
                this.currentBucket = r.value[Symbol.iterator]();
            }
            const t = this.currentBucket.next();
            return t.done ? (this.currentBucket = void 0, this.next()) : t;
        }
    }
    const v8 = ()=>{
        const e = Object.create(O8);
        return e.referential = new Map, e.buckets = new Map, e.bucketsSize = 0, e;
    }, Yr = w(2, (e, t)=>{
        if (oa(t) === !1) return e.referential.has(t) ? N(e.referential.get(t)) : M();
        const r = t[tt](), n = e.buckets.get(r);
        return n === void 0 ? M() : C8(e, n, t);
    }), C8 = (e, t, r, n = !1)=>{
        for(let s = 0, i = t.length; s < i; s++)if (r[Y](t[s][0])) {
            const a = t[s][1];
            return n && (t.splice(s, 1), e.bucketsSize--), N(a);
        }
        return M();
    }, li = w(2, (e, t)=>Vt(Yr(e, t))), fi = w(3, (e, t, r)=>{
        if (oa(t) === !1) return e.referential.set(t, r), e;
        const n = t[tt](), s = e.buckets.get(n);
        return s === void 0 ? (e.buckets.set(n, [
            [
                t,
                r
            ]
        ]), e.bucketsSize++, e) : (z8(e, s, t), s.push([
            t,
            r
        ]), e.bucketsSize++, e);
    }), z8 = (e, t, r)=>{
        for(let n = 0, s = t.length; n < s; n++)if (r[Y](t[n][0])) {
            t.splice(n, 1), e.bucketsSize--;
            return;
        }
    }, A8 = "effect/Clock", wg = Symbol.for(A8), xf = Mn("effect/Clock"), $8 = 2 ** 31 - 1, bg = {
        unsafeSchedule (e, t) {
            const r = yu(t);
            if (r > $8) return an;
            let n = !1;
            const s = setTimeout(()=>{
                n = !0, e();
            }, r);
            return ()=>(clearTimeout(s), !n);
        }
    }, yg = function() {
        const e = BigInt(1e6);
        if (typeof performance > "u" || typeof performance.now != "function") return ()=>BigInt(Date.now()) * e;
        let t;
        return ()=>(t === void 0 && (t = BigInt(Date.now()) * e - BigInt(Math.round(performance.now() * 1e6))), t + BigInt(Math.round(performance.now() * 1e6)));
    }(), P8 = function() {
        const e = typeof process == "object" && "hrtime" in process && typeof process.hrtime.bigint == "function" ? process.hrtime : void 0;
        if (!e) return yg;
        const t = yg() - e.bigint();
        return ()=>t + e.bigint();
    }();
    class M8 {
        [wg] = wg;
        unsafeCurrentTimeMillis() {
            return Date.now();
        }
        unsafeCurrentTimeNanos() {
            return P8();
        }
        currentTimeMillis = P(()=>this.unsafeCurrentTimeMillis());
        currentTimeNanos = P(()=>this.unsafeCurrentTimeNanos());
        scheduler() {
            return G(bg);
        }
        sleep(t) {
            return Tn((r)=>{
                const n = bg.unsafeSchedule(()=>r(It), t);
                return Or(P(n));
            });
        }
    }
    const N8 = ()=>new M8, Ef = "And", If = "Or", Rf = "InvalidData", Of = "MissingData", Tf = "SourceUnavailable", vf = "Unsupported", B8 = "effect/ConfigError", mg = Symbol.for(B8), ai = {
        _tag: "ConfigError",
        [mg]: mg
    }, mb = (e, t)=>{
        const r = Object.create(ai);
        return r._op = Ef, r.left = e, r.right = t, Object.defineProperty(r, "toString", {
            enumerable: !1,
            value () {
                return `${this.left} and ${this.right}`;
            }
        }), Object.defineProperty(r, "message", {
            enumerable: !1,
            get () {
                return this.toString();
            }
        }), r;
    }, Sb = (e, t)=>{
        const r = Object.create(ai);
        return r._op = If, r.left = e, r.right = t, Object.defineProperty(r, "toString", {
            enumerable: !1,
            value () {
                return `${this.left} or ${this.right}`;
            }
        }), Object.defineProperty(r, "message", {
            enumerable: !1,
            get () {
                return this.toString();
            }
        }), r;
    }, Fb = (e, t, r = {
        pathDelim: "."
    })=>{
        const n = Object.create(ai);
        return n._op = Rf, n.path = e, n.message = t, Object.defineProperty(n, "toString", {
            enumerable: !1,
            value () {
                return `(Invalid data at ${m(this.path, $n(r.pathDelim))}: "${this.message}")`;
            }
        }), n;
    }, Lr = (e, t, r = {
        pathDelim: "."
    })=>{
        const n = Object.create(ai);
        return n._op = Of, n.path = e, n.message = t, Object.defineProperty(n, "toString", {
            enumerable: !1,
            value () {
                return `(Missing data at ${m(this.path, $n(r.pathDelim))}: "${this.message}")`;
            }
        }), n;
    }, U8 = (e, t, r, n = {
        pathDelim: "."
    })=>{
        const s = Object.create(ai);
        return s._op = Tf, s.path = e, s.message = t, s.cause = r, Object.defineProperty(s, "toString", {
            enumerable: !1,
            value () {
                return `(Source unavailable at ${m(this.path, $n(n.pathDelim))}: "${this.message}")`;
            }
        }), s;
    }, j8 = (e, t, r = {
        pathDelim: "."
    })=>{
        const n = Object.create(ai);
        return n._op = vf, n.path = e, n.message = t, Object.defineProperty(n, "toString", {
            enumerable: !1,
            value () {
                return `(Unsupported operation at ${m(this.path, $n(r.pathDelim))}: "${this.message}")`;
            }
        }), n;
    }, tn = w(2, (e, t)=>{
        switch(e._op){
            case Ef:
                return mb(tn(e.left, t), tn(e.right, t));
            case If:
                return Sb(tn(e.left, t), tn(e.right, t));
            case Rf:
                return Fb([
                    ...t,
                    ...e.path
                ], e.message);
            case Of:
                return Lr([
                    ...t,
                    ...e.path
                ], e.message);
            case Tf:
                return U8([
                    ...t,
                    ...e.path
                ], e.message, e.cause);
            case vf:
                return j8([
                    ...t,
                    ...e.path
                ], e.message);
        }
    }), L8 = {
        andCase: (e, t, r)=>t && r,
        orCase: (e, t, r)=>t && r,
        invalidDataCase: an,
        missingDataCase: uu,
        sourceUnavailableCase: an,
        unsupportedCase: an
    }, K8 = w(3, (e, t, r)=>{
        const n = [
            e
        ], s = [];
        for(; n.length > 0;){
            const a = n.pop();
            switch(a._op){
                case Ef:
                    {
                        n.push(a.right), n.push(a.left), s.push(K({
                            _op: "AndCase"
                        }));
                        break;
                    }
                case If:
                    {
                        n.push(a.right), n.push(a.left), s.push(K({
                            _op: "OrCase"
                        }));
                        break;
                    }
                case Rf:
                    {
                        s.push(J(r.invalidDataCase(t, a.path, a.message)));
                        break;
                    }
                case Of:
                    {
                        s.push(J(r.missingDataCase(t, a.path, a.message)));
                        break;
                    }
                case Tf:
                    {
                        s.push(J(r.sourceUnavailableCase(t, a.path, a.message, a.cause)));
                        break;
                    }
                case vf:
                    {
                        s.push(J(r.unsupportedCase(t, a.path, a.message)));
                        break;
                    }
            }
        }
        const i = [];
        for(; s.length > 0;){
            const a = s.pop();
            switch(a._op){
                case "Left":
                    {
                        switch(a.left._op){
                            case "AndCase":
                                {
                                    const _ = i.pop(), f = i.pop(), g = r.andCase(t, _, f);
                                    i.push(g);
                                    break;
                                }
                            case "OrCase":
                                {
                                    const _ = i.pop(), f = i.pop(), g = r.orCase(t, _, f);
                                    i.push(g);
                                    break;
                                }
                        }
                        break;
                    }
                case "Right":
                    {
                        i.push(a.right);
                        break;
                    }
            }
        }
        if (i.length === 0) throw new Error("BUG: ConfigError.reduceWithContext - please report an issue at https://github.com/Effect-TS/effect/issues");
        return i.pop();
    }), D8 = (e)=>K8(e, void 0, L8), kb = {
        _tag: "Empty"
    }, q8 = w(2, (e, t)=>({
            _tag: "AndThen",
            first: e,
            second: t
        })), V8 = w(2, (e, t)=>q8(e, {
            _tag: "MapName",
            f: t
        })), V_ = w(2, (e, t)=>{
        let r = sf(t), n = e;
        for(; RN(r);){
            const s = r.head;
            switch(s._tag){
                case "Empty":
                    {
                        r = r.tail;
                        break;
                    }
                case "AndThen":
                    {
                        r = Rn(s.first, Rn(s.second, r.tail));
                        break;
                    }
                case "MapName":
                    {
                        n = is(n, s.f), r = r.tail;
                        break;
                    }
                case "Nested":
                    {
                        n = la(n, s.name), r = r.tail;
                        break;
                    }
                case "Unnested":
                    {
                        if (m(Ii(n), m3(s.name))) n = Sn(n), r = r.tail;
                        else return K(Lr(n, `Expected ${s.name} to be in path in ConfigProvider#unnested`));
                        break;
                    }
            }
        }
        return J(n);
    }), xb = "Constant", H8 = "Fail", Eb = "Fallback", J8 = "Described", Ib = "Lazy", Rb = "MapOrFail", Ob = "Nested", Tb = "Primitive", W8 = "Sequence", G8 = "HashMap", vb = "ZipWith", Y8 = (e)=>e.toLowerCase(), X8 = (e)=>e.toUpperCase(), Sg = (e, t, r)=>t instanceof RegExp ? e.replace(t, r) : t.reduce((n, s)=>n.replace(s, r), e), Q8 = [
        /([a-z0-9])([A-Z])/g,
        /([A-Z])([A-Z][a-z])/g
    ], Z8 = /[^A-Z0-9]+/gi, t6 = (e, t = {})=>{
        const { delimiter: r = " ", splitRegexp: n = Q8, stripRegexp: s = Z8, transform: i = Y8 } = t, a = Sg(Sg(e, n, "$1\0$2"), s, "\0");
        let _ = 0, f = a.length;
        for(; a.charAt(_) === "\0";)_++;
        for(; a.charAt(f - 1) === "\0";)f--;
        return a.slice(_, f).split("\0").map(i).join(r);
    }, e6 = (e, t)=>t6(e, {
            delimiter: "_",
            transform: X8,
            ...t
        });
    var Fg = {};
    const Fa = (e, t)=>[
            ...e,
            ...t
        ], r6 = "effect/ConfigProvider", kg = Symbol.for(r6), Cf = Mn("effect/ConfigProvider"), n6 = "effect/ConfigProviderFlat", xg = Symbol.for(n6), s6 = (e)=>({
            [kg]: kg,
            pipe () {
                return q(this, arguments);
            },
            ...e
        }), zf = (e)=>({
            [xg]: xg,
            patch: e.patch,
            load: (t, r, n = !0)=>e.load(t, r, n),
            enumerateChildren: e.enumerateChildren
        }), Af = (e)=>s6({
            load: (t)=>T(xe(e, vs(), t, !1), (r)=>se(Ii(r), {
                        onNone: ()=>Nt(Lr(vs(), `Expected a single value having structure: ${t}`)),
                        onSome: G
                    })),
            flattened: e
        }), i6 = (e)=>{
        const { pathDelim: t, seqDelim: r } = Object.assign({}, {
            pathDelim: "_",
            seqDelim: ","
        }, e), n = (f)=>m(f, $n(t)), s = (f)=>f.split(t), i = ()=>typeof process < "u" && "env" in process && typeof Fg == "object" ? Fg : {};
        return Af(zf({
            load: (f, g, h = !0)=>{
                const b = n(f), S = i(), k = b in S ? N(S[b]) : M();
                return m(k, wo(()=>Lr(f, `Expected ${b} to exist in the process context`)), T((x)=>Cb(x, f, g, r, h)));
            },
            enumerateChildren: (f)=>P(()=>{
                    const g = i(), S = Object.keys(g).map((k)=>s(k.toUpperCase())).filter((k)=>{
                        for(let x = 0; x < f.length; x++){
                            const $ = m(f, Cl(x)), C = k[x];
                            if (C === void 0 || $ !== C) return !1;
                        }
                        return !0;
                    }).flatMap((k)=>k.slice(f.length, f.length + 1));
                    return ww(S);
                }),
            patch: kb
        }));
    }, o6 = (e, t)=>{
        const { pathDelim: r, seqDelim: n } = Object.assign({
            seqDelim: ",",
            pathDelim: "."
        }, t), s = (g)=>m(g, $n(r)), i = (g)=>g.split(r), a = y6(e, (g)=>i(g), s);
        return Af(zf({
            load: (g, h, b = !0)=>{
                const S = s(g), k = a.has(S) ? N(a.get(S)) : M();
                return m(k, wo(()=>Lr(g, `Expected ${S} to exist in the provided map`)), T((x)=>Cb(x, g, h, n, b)));
            },
            enumerateChildren: (g)=>P(()=>{
                    const b = Et(a.keys()).map(i).filter((S)=>{
                        for(let k = 0; k < g.length; k++){
                            const x = m(g, Cl(k)), $ = S[k];
                            if ($ === void 0 || x !== $) return !1;
                        }
                        return !0;
                    }).flatMap((S)=>S.slice(g.length, g.length + 1));
                    return ww(b);
                }),
            patch: kb
        }));
    }, a6 = (e, t, r, n)=>{
        const s = Ld(r.length, (f)=>f >= n.length ? M() : N([
                e(f),
                f + 1
            ])), i = Ld(n.length, (f)=>f >= r.length ? M() : N([
                t(f),
                f + 1
            ])), a = Fa(r, s), _ = Fa(n, i);
        return [
            a,
            _
        ];
    }, c6 = (e, t)=>{
        let r = t;
        if (r._tag === "Nested") {
            const n = e.slice();
            for(; r._tag === "Nested";)n.push(r.name), r = r.config;
            return n;
        }
        return e;
    }, xe = (e, t, r, n)=>{
        const s = r;
        switch(s._tag){
            case xb:
                return G(Oe(s.value));
            case J8:
                return ct(()=>xe(e, t, s.config, n));
            case H8:
                return Nt(Lr(t, s.message));
            case Eb:
                return m(ct(()=>xe(e, t, s.first, n)), zu((i)=>s.condition(i) ? m(xe(e, t, s.second, n), zu((a)=>Nt(Sb(i, a)))) : Nt(i)));
            case Ib:
                return ct(()=>xe(e, t, s.config(), n));
            case Rb:
                return ct(()=>m(xe(e, t, s.original, n), T(fr((i)=>m(s.mapOrFail(i), wo(tn(c6(t, s.original))))))));
            case Ob:
                return ct(()=>xe(e, Fa(t, Oe(s.name)), s.config, n));
            case Tb:
                return m(V_(t, e.patch), T((i)=>m(e.load(i, s, n), T((a)=>{
                        if (a.length === 0) {
                            const _ = m(A3(i), zt(()=>"<n/a>"));
                            return Nt(Lr([], `Expected ${s.description} with name ${_}`));
                        }
                        return G(a);
                    }))));
            case W8:
                return m(V_(t, e.patch), T((i)=>m(e.enumerateChildren(i), T(p6), T((a)=>a.length === 0 ? ct(()=>ut(xe(e, t, s.config, !0), Oe)) : m(fr(a, (_)=>xe(e, R3(t, `[${_}]`), s.config, !0)), ut((_)=>{
                            const f = K3(_);
                            return f.length === 0 ? Oe(vs()) : Oe(f);
                        }))))));
            case G8:
                return ct(()=>m(V_(t, e.patch), T((i)=>m(e.enumerateChildren(i), T((a)=>m(a, fr((_)=>xe(e, Fa(i, Oe(_)), s.valueConfig, n)), ut((_)=>_.length === 0 ? Oe(nf()) : m(g6(_), is((f)=>bN(jd(Et(a), f)))))))))));
            case vb:
                return ct(()=>m(xe(e, t, s.left, n), Vs, T((i)=>m(xe(e, t, s.right, n), Vs, T((a)=>{
                            if (Ft(i) && Ft(a)) return Nt(mb(i.left, a.left));
                            if (Ft(i) && Be(a)) return Nt(i.left);
                            if (Be(i) && Ft(a)) return Nt(a.left);
                            if (Be(i) && Be(a)) {
                                const _ = m(t, $n(".")), f = _6(t, _), [g, h] = a6(f, f, m(i.right, is(J)), m(a.right, is(J)));
                                return m(g, jd(h), fr(([b, S])=>m(cc(b, S), ut(([k, x])=>s.zip(k, x)))));
                            }
                            throw new Error("BUG: ConfigProvider.fromFlatLoop - please report an issue at https://github.com/Effect-TS/effect/issues");
                        })))));
        }
    }, _6 = (e, t)=>(r)=>K(Lr(e, `The element at index ${r} in a sequence at path "${t}" was missing`)), u6 = w(2, (e, t)=>Af(l6(e.flattened, t))), l6 = (e, t)=>zf({
            load: (r, n, s = !0)=>e.load(r, n, s),
            enumerateChildren: (r)=>e.enumerateChildren(r),
            patch: V8(e.patch, t)
        }), f6 = (e)=>u6(e, e6), d6 = (e, t)=>e.split(new RegExp(`\\s*${fa(t)}\\s*`)), Cb = (e, t, r, n, s)=>s ? m(d6(e, n), fr((i)=>r.parse(i.trim())), wo(tn(t))) : m(r.parse(e), nb({
            onFailure: tn(t),
            onSuccess: Oe
        })), g6 = (e)=>Object.keys(e[0]).map((t)=>e.map((r)=>r[t])), p6 = (e)=>m(fr(e, b6), nb({
            onFailure: ()=>vs(),
            onSuccess: Li(Cs)
        }), Vs, ut(_3)), h6 = /(^.+)(\[(\d+)\])$/, w6 = /^(\[(\d+)\])$/, b6 = (e)=>{
        const t = e.match(w6);
        if (t !== null) {
            const r = t[2];
            return m(r !== void 0 && r.length > 0 ? N(r) : M(), Zs(zb));
        }
        return M();
    }, y6 = (e, t, r)=>{
        const n = new Map;
        for (const [s, i] of e){
            const a = m(t(s), zl((_)=>se(m6(_), {
                    onNone: ()=>Oe(_),
                    onSome: ([f, g])=>k3(f, `[${g}]`)
                })));
            n.set(r(a), i);
        }
        return n;
    }, m6 = (e)=>{
        const t = e.match(h6);
        if (t !== null) {
            const r = t[1], n = t[3], s = r !== void 0 && r.length > 0 ? N(r) : M(), i = m(n !== void 0 && n.length > 0 ? N(n) : M(), Zs(zb));
            return w3([
                s,
                i
            ]);
        }
        return M();
    }, zb = (e)=>{
        const t = Number.parseInt(e);
        return Number.isNaN(t) ? M() : N(t);
    }, Eg = Symbol.for("effect/Console"), Ab = Mn("effect/Console"), S6 = {
        [Eg]: Eg,
        assert (e, ...t) {
            return P(()=>{
                console.assert(e, ...t);
            });
        },
        clear: P(()=>{
            console.clear();
        }),
        count (e) {
            return P(()=>{
                console.count(e);
            });
        },
        countReset (e) {
            return P(()=>{
                console.countReset(e);
            });
        },
        debug (...e) {
            return P(()=>{
                console.debug(...e);
            });
        },
        dir (e, t) {
            return P(()=>{
                console.dir(e, t);
            });
        },
        dirxml (...e) {
            return P(()=>{
                console.dirxml(...e);
            });
        },
        error (...e) {
            return P(()=>{
                console.error(...e);
            });
        },
        group (e) {
            return e?.collapsed ? P(()=>console.groupCollapsed(e?.label)) : P(()=>console.group(e?.label));
        },
        groupEnd: P(()=>{
            console.groupEnd();
        }),
        info (...e) {
            return P(()=>{
                console.info(...e);
            });
        },
        log (...e) {
            return P(()=>{
                console.log(...e);
            });
        },
        table (e, t) {
            return P(()=>{
                console.table(e, t);
            });
        },
        time (e) {
            return P(()=>console.time(e));
        },
        timeEnd (e) {
            return P(()=>console.timeEnd(e));
        },
        timeLog (e, ...t) {
            return P(()=>{
                console.timeLog(e, ...t);
            });
        },
        trace (...e) {
            return P(()=>{
                console.trace(...e);
            });
        },
        warn (...e) {
            return P(()=>{
                console.warn(...e);
            });
        },
        unsafe: console
    }, F6 = "effect/Random", Ig = Symbol.for(F6), k6 = Mn("effect/Random");
    class x6 {
        seed;
        [Ig] = Ig;
        PRNG;
        constructor(t){
            this.seed = t, this.PRNG = new z$(t);
        }
        get next() {
            return P(()=>this.PRNG.number());
        }
        get nextBoolean() {
            return ut(this.next, (t)=>t > .5);
        }
        get nextInt() {
            return P(()=>this.PRNG.integer(Number.MAX_SAFE_INTEGER));
        }
        nextRange(t, r) {
            return ut(this.next, (n)=>(r - t) * n + t);
        }
        nextIntBetween(t, r) {
            return P(()=>this.PRNG.integer(r - t) + t);
        }
        shuffle(t) {
            return E6(t, (r)=>this.nextIntBetween(0, r));
        }
    }
    const E6 = (e, t)=>ct(()=>m(P(()=>Array.from(e)), T((r)=>{
                const n = [];
                for(let s = r.length; s >= 2; s = s - 1)n.push(s);
                return m(n, ac((s)=>m(t(s), ut((i)=>I6(r, s - 1, i)))), Ae(ew(r)));
            }))), I6 = (e, t, r)=>{
        const n = e[t];
        return e[t] = e[r], e[r] = n, e;
    }, R6 = (e)=>new x6(U(e)), Rg = Symbol.for("effect/Tracer"), O6 = (e)=>({
            [Rg]: Rg,
            ...e
        }), $b = Mn("effect/Tracer"), Pb = Mn("effect/ParentSpan"), Og = function() {
        const e = "abcdef0123456789", t = e.length;
        return function(r) {
            let n = "";
            for(let s = 0; s < r; s++)n += e.charAt(Math.floor(Math.random() * t));
            return n;
        };
    }();
    class T6 {
        name;
        parent;
        context;
        startTime;
        kind;
        _tag = "Span";
        spanId;
        traceId = "native";
        sampled = !0;
        status;
        attributes;
        events = [];
        links;
        constructor(t, r, n, s, i, a){
            this.name = t, this.parent = r, this.context = n, this.startTime = i, this.kind = a, this.status = {
                _tag: "Started",
                startTime: i
            }, this.attributes = new Map, this.traceId = r._tag === "Some" ? r.value.traceId : Og(32), this.spanId = Og(16), this.links = Array.from(s);
        }
        end(t, r) {
            this.status = {
                _tag: "Ended",
                endTime: t,
                exit: r,
                startTime: this.status.startTime
            };
        }
        attribute(t, r) {
            this.attributes.set(t, r);
        }
        event(t, r, n) {
            this.events.push([
                t,
                r,
                n ?? {}
            ]);
        }
        addLinks(t) {
            this.links.push(...t);
        }
    }
    const v6 = O6({
        span: (e, t, r, n, s, i)=>new T6(e, t, r, n, s, i),
        context: (e)=>e()
    }), C6 = Wa()("effect/Tracer/DisablePropagation", {
        defaultValue: an
    }), z6 = m(Ja(), Xr(xf, N8()), Xr(Ab, S6), Xr(k6, R6(Math.random())), Xr(Cf, i6()), Xr($b, v6)), Gi = rt(Symbol.for("effect/DefaultServices/currentServices"), ()=>fb(z6)), A6 = (e)=>ht((t)=>e(t.currentDefaultServices)), $6 = (e)=>A6((t)=>e(t.unsafeMap.get(Cf.key))), P6 = (e)=>$6((t)=>t.load(e));
    function M6(e) {
        return new Kr(e);
    }
    function N6() {
        return M6(new Map);
    }
    const Tg = Symbol.for("effect/FiberRefs");
    class Kr {
        locals;
        [Tg] = Tg;
        constructor(t){
            this.locals = t;
        }
        pipe() {
            return q(this, arguments);
        }
    }
    const B6 = (e, t, r, n = !1)=>{
        const s = e;
        let i = t, a = r, _ = n, f;
        for(; f === void 0;)if (Qt(i) && Qt(a)) {
            const g = ne(i)[0], h = Sn(i), b = ne(a)[0], S = ne(a)[1], k = Sn(a);
            g.startTimeMillis < b.startTimeMillis ? (a = k, _ = !0) : g.startTimeMillis > b.startTimeMillis ? i = h : g.id < b.id ? (a = k, _ = !0) : g.id > b.id ? i = h : f = [
                S,
                _
            ];
        } else f = [
            s.initial,
            !0
        ];
        return f;
    }, U6 = w(3, (e, t, r)=>{
        const n = new Map(e.locals);
        return r.locals.forEach((s, i)=>{
            const a = s[0][1];
            if (!s[0][0][Y](t)) {
                if (!n.has(i)) {
                    if (Q(a, i.initial)) return;
                    n.set(i, [
                        [
                            t,
                            i.join(i.initial, a)
                        ]
                    ]);
                    return;
                }
                const _ = n.get(i), [f, g] = B6(i, _, s);
                if (g) {
                    const h = i.diff(f, a), b = _[0][1], S = i.join(b, i.patch(h)(b));
                    if (!Q(b, S)) {
                        let k;
                        const x = _[0][0];
                        x[Y](t) ? k = [
                            [
                                x,
                                S
                            ],
                            ..._.slice(1)
                        ] : k = [
                            [
                                t,
                                S
                            ],
                            ..._
                        ], n.set(i, k);
                    }
                }
            }
        }), new Kr(n);
    }), j6 = w(2, (e, t)=>{
        const r = new Map;
        return Mb(e, r, t), new Kr(r);
    }), Mb = (e, t, r)=>{
        e.locals.forEach((n, s)=>{
            const i = n[0][1], a = s.patch(s.fork)(i);
            Q(i, a) ? t.set(s, n) : t.set(s, [
                [
                    r,
                    a
                ],
                ...n
            ]);
        });
    }, Nb = w(2, (e, t)=>{
        const r = new Map(e.locals);
        return r.delete(t), new Kr(r);
    }), L6 = w(2, (e, t)=>e.locals.has(t) ? N(ne(e.locals.get(t))[1]) : M()), Yi = w(2, (e, t)=>m(L6(e, t), zt(()=>t.initial))), Uu = w(2, (e, { fiberId: t, fiberRef: r, value: n })=>{
        if (e.locals.size === 0) return new Kr(new Map([
            [
                r,
                [
                    [
                        t,
                        n
                    ]
                ]
            ]
        ]));
        const s = new Map(e.locals);
        return ju(s, t, r, n), new Kr(s);
    }), ju = (e, t, r, n)=>{
        const s = e.get(r) ?? [];
        let i;
        if (Qt(s)) {
            const [a, _] = ne(s);
            if (a[Y](t)) {
                if (Q(_, n)) return;
                i = [
                    [
                        t,
                        n
                    ],
                    ...s.slice(1)
                ];
            } else i = [
                [
                    t,
                    n
                ],
                ...s
            ];
        } else i = [
            [
                t,
                n
            ]
        ];
        e.set(r, i);
    }, K6 = w(2, (e, { entries: t, forkAs: r })=>{
        if (e.locals.size === 0) return new Kr(new Map(t));
        const n = new Map(e.locals);
        return r !== void 0 && Mb(e, n, r), t.forEach(([s, i])=>{
            i.length === 1 ? ju(n, i[0][0], s, i[0][1]) : i.forEach(([a, _])=>{
                ju(n, a, s, _);
            });
        }), new Kr(n);
    }), D6 = Yi, q6 = K6, V6 = N6, H6 = B4, J6 = U4, W6 = j4, G6 = _b, Y6 = ub, X6 = lb, Q6 = L4, Z6 = K4, tU = m(Cs, Zp((e)=>e.ordinal)), eU = f3(tU), rU = (e)=>{
        switch(e){
            case "All":
                return H6;
            case "Debug":
                return X6;
            case "Error":
                return W6;
            case "Fatal":
                return J6;
            case "Info":
                return Y6;
            case "Trace":
                return Q6;
            case "None":
                return Z6;
            case "Warning":
                return G6;
        }
    }, Bb = (e)=>e.replace(/[\s="]/g, "_"), nU = (e)=>(t)=>`${Bb(t.label)}=${e - t.startTime}ms`, sU = io, iU = An, oU = Q$;
    class $f extends oU {
    }
    const ka = Symbol.for("effect/Readable"), Ub = Symbol.for("effect/Ref"), jb = {
        _A: (e)=>e
    };
    class aU extends $f {
        ref;
        commit() {
            return this.get;
        }
        [Ub] = jb;
        [ka] = ka;
        constructor(t){
            super(), this.ref = t, this.get = P(()=>En(this.ref));
        }
        get;
        modify(t) {
            return P(()=>{
                const r = En(this.ref), [n, s] = t(r);
                return r !== s && rc(s)(this.ref), n;
            });
        }
    }
    const Lb = (e)=>new aU(ef(e)), Lu = (e)=>P(()=>Lb(e)), xa = (e)=>e.get, Kb = w(2, (e, t)=>e.modify(()=>[
                void 0,
                t
            ])), cU = w(2, (e, t)=>e.modify((r)=>[
                r,
                t
            ])), _U = w(2, (e, t)=>e.modify(t)), vg = w(2, (e, t)=>e.modify((r)=>[
                void 0,
                t(r)
            ])), uU = Lu, lU = cU, Db = "Empty", qb = "Add", Vb = "Remove", Hb = "Update", Jb = "AndThen", fU = {
        _tag: Db
    }, Pf = (e, t)=>{
        const r = new Map(e.locals);
        let n = fU;
        for (const [s, i] of t.locals.entries()){
            const a = ne(i)[1], _ = r.get(s);
            if (_ !== void 0) {
                const f = ne(_)[1];
                Q(f, a) || (n = H_({
                    _tag: Hb,
                    fiberRef: s,
                    patch: s.diff(f, a)
                })(n));
            } else n = H_({
                _tag: qb,
                fiberRef: s,
                value: a
            })(n);
            r.delete(s);
        }
        for (const [s] of r.entries())n = H_({
            _tag: Vb,
            fiberRef: s
        })(n);
        return n;
    }, H_ = w(2, (e, t)=>({
            _tag: Jb,
            first: e,
            second: t
        })), Wb = w(3, (e, t, r)=>{
        let n = r, s = Oe(e);
        for(; Qt(s);){
            const i = ne(s), a = Sn(s);
            switch(i._tag){
                case Db:
                    {
                        s = a;
                        break;
                    }
                case qb:
                    {
                        n = Uu(n, {
                            fiberId: t,
                            fiberRef: i.fiberRef,
                            value: i.value
                        }), s = a;
                        break;
                    }
                case Vb:
                    {
                        n = Nb(n, i.fiberRef), s = a;
                        break;
                    }
                case Hb:
                    {
                        const _ = Yi(n, i.fiberRef);
                        n = Uu(n, {
                            fiberId: t,
                            fiberRef: i.fiberRef,
                            value: i.fiberRef.patch(i.patch)(_)
                        }), s = a;
                        break;
                    }
                case Jb:
                    {
                        s = la(i.first)(la(i.second)(a));
                        break;
                    }
            }
        }
        return n;
    }), Gb = "effect/MetricLabel", Ku = Symbol.for(Gb);
    class dU {
        key;
        value;
        [Ku] = Ku;
        _hash;
        constructor(t, r){
            this.key = t, this.value = r, this._hash = kt(Gb + this.key + this.value);
        }
        [tt]() {
            return this._hash;
        }
        [Y](t) {
            return pU(t) && this.key === t.key && this.value === t.value;
        }
        pipe() {
            return q(this, arguments);
        }
    }
    const gU = (e, t)=>new dU(e, t), pU = (e)=>W(e, Ku), hU = (e)=>ut(e, N), wU = (e)=>{
        let t, r;
        return typeof e == "function" ? t = e : (t = e.try, r = e.catch), ct(()=>{
            try {
                return G(Jt(t));
            } catch (n) {
                return Nt(r ? Jt(()=>r(n)) : new uc(n, "An unknown error occurred in Effect.try"));
            }
        });
    }, bU = (e)=>Qb(e, Yb, Pf), yU = (e)=>Qb(e, cc(Yb, z4), ([t, r], [n, s])=>[
                Pf(t, n),
                Mr(r, s)
            ]), Yb = ht((e)=>G(e.getFiberRefs())), mU = (e)=>m(wb(), T((t)=>m(yU(e), C4(t), SU, ut((r)=>Me(r, m(dc(t), T(([n, s])=>Ae(cc(Xb(n[0]), ib(n[1])), s)))))))), SU = (e)=>ut(uU(!0), (t)=>Or(ob(e, lU(t, !1)))), Xb = (e)=>EU((t, r)=>m(e, Wb(t, r))), FU = w(3, (e, t, r)=>oi((n)=>So(e, Xr(n, t, r)))), kU = G(M()), Qb = w(3, (e, t, r)=>T(t, (n)=>T(e, (s)=>ut(t, (i)=>[
                        r(n, i),
                        s
                    ])))), xU = (e)=>{
        let t, r;
        typeof e == "function" ? t = e : (t = e.try, r = e.catch);
        const n = (s)=>r ? ff(()=>r(s)) : Nt(new uc(s, "An unknown error occurred in Effect.tryPromise"));
        return t.length >= 1 ? Tn((s, i)=>{
            try {
                t(i).then((a)=>s(G(a)), (a)=>s(n(a)));
            } catch (a) {
                s(n(a));
            }
        }) : Tn((s)=>{
            try {
                t().then((i)=>s(G(i)), (i)=>s(n(i)));
            } catch (i) {
                s(n(i));
            }
        });
    }, EU = (e)=>ht((t)=>(t.setFiberRefs(e(t.id(), t.getFiberRefs())), It)), Zb = Zs((e)=>Dl(e.context, C6) ? e._tag === "Span" ? Zb(e.parent) : M() : N(e)), ty = "Sequential", ey = "Parallel", IU = "ParallelN", fn = {
        _tag: ty
    }, Du = {
        _tag: ey
    }, RU = (e)=>({
            _tag: IU,
            parallelism: e
        }), OU = (e)=>e._tag === ty, TU = (e)=>e._tag === ey, qu = fn, Vu = Du, Hu = RU, Xi = Pf, Qi = Wb, gc = "effect/FiberStatus", vn = Symbol.for(gc), Ea = "Done", Cg = "Running", zg = "Suspended", vU = kt(`${gc}-${Ea}`);
    class CU {
        [vn] = vn;
        _tag = Ea;
        [tt]() {
            return vU;
        }
        [Y](t) {
            return Mf(t) && t._tag === Ea;
        }
    }
    class zU {
        runtimeFlags;
        [vn] = vn;
        _tag = Cg;
        constructor(t){
            this.runtimeFlags = t;
        }
        [tt]() {
            return m(U(gc), nt(U(this._tag)), nt(U(this.runtimeFlags)), yt(this));
        }
        [Y](t) {
            return Mf(t) && t._tag === Cg && this.runtimeFlags === t.runtimeFlags;
        }
    }
    class AU {
        runtimeFlags;
        blockingOn;
        [vn] = vn;
        _tag = zg;
        constructor(t, r){
            this.runtimeFlags = t, this.blockingOn = r;
        }
        [tt]() {
            return m(U(gc), nt(U(this._tag)), nt(U(this.runtimeFlags)), nt(U(this.blockingOn)), yt(this));
        }
        [Y](t) {
            return Mf(t) && t._tag === zg && this.runtimeFlags === t.runtimeFlags && Q(this.blockingOn, t.blockingOn);
        }
    }
    const $U = new CU, PU = (e)=>new zU(e), MU = (e, t)=>new AU(e, t), Mf = (e)=>W(e, vn), NU = (e)=>e._tag === Ea, BU = $U, ry = PU, UU = MU, jU = NU, LU = Symbol.for("effect/Micro"), Ia = Symbol.for("effect/Micro/MicroExit"), Ag = Symbol.for("effect/Micro/MicroCause"), KU = {
        _E: _t
    };
    class ny extends globalThis.Error {
        _tag;
        traces;
        [Ag];
        constructor(t, r, n){
            const s = `MicroCause.${t}`;
            let i, a, _;
            if (r instanceof globalThis.Error) {
                i = `(${s}) ${r.name}`, a = r.message;
                const f = a.split(`
`).length;
                _ = r.stack ? `(${s}) ${r.stack.split(`
`).slice(0, f + 3).join(`
`)}` : `${i}: ${a}`;
            } else i = s, a = Os(r, 0), _ = `${i}: ${a}`;
            n.length > 0 && (_ += `
    ${n.join(`
    `)}`), super(a), this._tag = t, this.traces = n, this[Ag] = KU, this.name = i, this.stack = _;
        }
        pipe() {
            return q(this, arguments);
        }
        toString() {
            return this.stack;
        }
        [dt]() {
            return this.stack;
        }
    }
    class DU extends ny {
        defect;
        constructor(t, r = []){
            super("Die", t, r), this.defect = t;
        }
    }
    const qU = (e, t = [])=>new DU(e, t);
    class VU extends ny {
        constructor(t = []){
            super("Interrupt", "interrupted", t);
        }
    }
    const HU = (e = [])=>new VU(e), JU = (e)=>e._tag === "Interrupt", $g = Symbol.for("effect/Micro/MicroFiber"), WU = {
        _A: _t,
        _E: _t
    };
    class GU {
        context;
        interruptible;
        [$g];
        _stack = [];
        _observers = [];
        _exit;
        _children;
        currentOpCount = 0;
        constructor(t, r = !0){
            this.context = t, this.interruptible = r, this[$g] = WU;
        }
        getRef(t) {
            return WP(this.context, t);
        }
        addObserver(t) {
            return this._exit ? (t(this._exit), w$) : (this._observers.push(t), ()=>{
                const r = this._observers.indexOf(t);
                r >= 0 && this._observers.splice(r, 1);
            });
        }
        _interrupted = !1;
        unsafeInterrupt() {
            this._exit || (this._interrupted = !0, this.interruptible && this.evaluate(Lf));
        }
        unsafePoll() {
            return this._exit;
        }
        evaluate(t) {
            if (this._exit) return;
            if (this._yielded !== void 0) {
                const s = this._yielded;
                this._yielded = void 0, s();
            }
            const r = this.runLoop(t);
            if (r === Po) return;
            const n = Pg.interruptChildren && Pg.interruptChildren(this);
            if (n !== void 0) return this.evaluate(Oa(n, ()=>r));
            this._exit = r;
            for(let s = 0; s < this._observers.length; s++)this._observers[s](r);
            this._observers.length = 0;
        }
        runLoop(t) {
            let r = !1, n = t;
            this.currentOpCount = 0;
            try {
                for(;;){
                    if (this.currentOpCount++, !r && this.getRef(Kf).shouldYield(this)) {
                        r = !0;
                        const s = n;
                        n = Oa(tj, ()=>s);
                    }
                    if (n = n[Ju](this), n === Po) {
                        const s = this._yielded;
                        return Ia in s ? (this._yielded = void 0, s) : Po;
                    }
                }
            } catch (s) {
                return W(n, Ju) ? Wu(s) : Wu(`MicroFiber.runLoop: Not a valid effect: ${String(n)}`);
            }
        }
        getCont(t) {
            for(;;){
                const r = this._stack.pop();
                if (!r) return;
                const n = r[Ra] && r[Ra](this);
                if (n) return {
                    [t]: n
                };
                if (r[t]) return r;
            }
        }
        _yielded = void 0;
        yieldWith(t) {
            return this._yielded = t, Po;
        }
        children() {
            return this._children ??= new Set;
        }
    }
    const Pg = rt("effect/Micro/fiberMiddleware", ()=>({
            interruptChildren: void 0
        })), sy = Symbol.for("effect/Micro/identifier"), Bt = Symbol.for("effect/Micro/args"), Ju = Symbol.for("effect/Micro/evaluate"), Js = Symbol.for("effect/Micro/successCont"), _s = Symbol.for("effect/Micro/failureCont"), Ra = Symbol.for("effect/Micro/ensureCont"), Po = Symbol.for("effect/Micro/Yield"), YU = {
        _A: _t,
        _E: _t,
        _R: _t
    }, XU = {
        ...sU,
        _op: "Micro",
        [LU]: YU,
        pipe () {
            return q(this, arguments);
        },
        [Symbol.iterator] () {
            return new $p(new ro(this));
        },
        toJSON () {
            return {
                _id: "Micro",
                op: this[sy],
                ...Bt in this ? {
                    args: this[Bt]
                } : void 0
            };
        },
        toString () {
            return qt(this);
        },
        [dt] () {
            return qt(this);
        }
    };
    function QU(e) {
        return Wu("Micro.evaluate: Not implemented");
    }
    const pc = (e)=>({
            ...XU,
            [sy]: e.op,
            [Ju]: e.eval ?? QU,
            [Js]: e.contA,
            [_s]: e.contE,
            [Ra]: e.ensure
        }), Nf = (e)=>{
        const t = pc(e);
        return function() {
            const r = Object.create(t);
            return r[Bt] = e.single === !1 ? arguments : arguments[0], r;
        };
    }, iy = (e)=>{
        const t = {
            ...pc(e),
            [Ia]: Ia,
            _tag: e.op,
            get [e.prop] () {
                return this[Bt];
            },
            toJSON () {
                return {
                    _id: "MicroExit",
                    _tag: e.op,
                    [e.prop]: this[Bt]
                };
            },
            [Y] (r) {
                return nj(r) && r._tag === e.op && Q(this[Bt], r[Bt]);
            },
            [tt] () {
                return yt(this, nt(kt(e.op))(U(this[Bt])));
            }
        };
        return function(r) {
            const n = Object.create(t);
            return n[Bt] = r, n[Js] = void 0, n[_s] = void 0, n[Ra] = void 0, n;
        };
    }, Bf = iy({
        op: "Success",
        prop: "value",
        eval (e) {
            const t = e.getCont(Js);
            return t ? t[Js](this[Bt], e) : e.yieldWith(this);
        }
    }), oy = iy({
        op: "Failure",
        prop: "cause",
        eval (e) {
            let t = e.getCont(_s);
            for(; JU(this[Bt]) && t && e.interruptible;)t = e.getCont(_s);
            return t ? t[_s](this[Bt], e) : e.yieldWith(this);
        }
    }), ZU = Nf({
        op: "Yield",
        eval (e) {
            let t = !1;
            return e.getRef(Kf).scheduleTask(()=>{
                t || e.evaluate(sj);
            }, this[Bt] ?? 0), e.yieldWith(()=>{
                t = !0;
            });
        }
    }), tj = ZU(0), ej = Bf(void 0), Uf = Nf({
        op: "WithMicroFiber",
        eval (e) {
            return this[Bt](e);
        }
    }), Oa = w(2, (e, t)=>{
        const r = Object.create(rj);
        return r[Bt] = e, r[Js] = t, r;
    }), rj = pc({
        op: "OnSuccess",
        eval (e) {
            return e._stack.push(this), this[Bt];
        }
    }), nj = (e)=>W(e, Ia), ay = Bf, jf = oy, Lf = jf(HU()), Wu = (e)=>jf(qU(e)), sj = ay(void 0), ij = "setImmediate" in globalThis ? globalThis.setImmediate : (e)=>setTimeout(e, 0);
    class cy {
        tasks = [];
        running = !1;
        scheduleTask(t, r) {
            this.tasks.push(t), this.running || (this.running = !0, ij(this.afterScheduled));
        }
        afterScheduled = ()=>{
            this.running = !1, this.runTasks();
        };
        runTasks() {
            const t = this.tasks;
            this.tasks = [];
            for(let r = 0, n = t.length; r < n; r++)t[r]();
        }
        shouldYield(t) {
            return t.currentOpCount >= t.getRef(cj);
        }
        flush() {
            for(; this.tasks.length > 0;)this.runTasks();
        }
    }
    const oj = w(2, (e, t)=>Uf((r)=>{
            const n = r.context;
            return r.context = t(n), lj(e, ()=>(r.context = n, ej));
        })), aj = w(2, (e, t)=>oj(e, _o(t)));
    class cj extends Wa()("effect/Micro/currentMaxOpsBeforeYield", {
        defaultValue: ()=>2048
    }) {
    }
    class Kf extends Wa()("effect/Micro/currentScheduler", {
        defaultValue: ()=>new cy
    }) {
    }
    const _j = w(2, (e, t)=>{
        const r = Object.create(uj);
        return r[Bt] = e, r[Js] = t.onSuccess, r[_s] = t.onFailure, r;
    }), uj = pc({
        op: "OnSuccessAndFailure",
        eval (e) {
            return e._stack.push(this), this[Bt];
        }
    }), lj = w(2, (e, t)=>dj((r)=>_j(r(e), {
                onFailure: (n)=>Oa(t(jf(n)), ()=>oy(n)),
                onSuccess: (n)=>Oa(t(ay(n)), ()=>Bf(n))
            }))), _y = Nf({
        op: "SetInterruptible",
        ensure (e) {
            if (e.interruptible = this[Bt], e._interrupted && e.interruptible) return ()=>Lf;
        }
    }), fj = (e)=>Uf((t)=>t.interruptible ? e : (t.interruptible = !0, t._stack.push(_y(!1)), t._interrupted ? Lf : e)), dj = (e)=>Uf((t)=>t.interruptible ? (t.interruptible = !1, t._stack.push(_y(!0)), e(fj)) : e(_t)), gj = (e, t)=>{
        const r = new GU(Kf.context(new cy));
        return r.evaluate(e), r;
    };
    class Ta {
        scheduleDrain;
        running = !1;
        tasks = new uy;
        constructor(t){
            this.scheduleDrain = t;
        }
        starveInternal = (t)=>{
            const r = this.tasks.buckets;
            this.tasks.buckets = [];
            for (const [n, s] of r)for(let i = 0; i < s.length; i++)s[i]();
            this.tasks.buckets.length === 0 ? this.running = !1 : this.starve(t);
        };
        starve(t = 0) {
            this.scheduleDrain(t, this.starveInternal);
        }
        scheduleTask(t, r) {
            this.tasks.scheduleTask(t, r), this.running || (this.running = !0, this.starve());
        }
        static cached(t) {
            const r = new Ta(t), n = new WeakMap;
            return (s)=>{
                if (s === void 0) return r;
                let i = n.get(s);
                return i === void 0 && (i = new Ta(t), n.set(s, i)), i;
            };
        }
    }
    class uy {
        buckets = [];
        scheduleTask(t, r) {
            const n = this.buckets.length;
            let s, i = 0;
            for(; i < n && this.buckets[i][0] <= r; i++)s = this.buckets[i];
            s && s[0] === r ? s[1].push(t) : i === n ? this.buckets.push([
                r,
                [
                    t
                ]
            ]) : this.buckets.splice(i, 0, [
                r,
                [
                    t
                ]
            ]);
        }
    }
    class pj {
        maxNextTickBeforeTimer;
        getRunner = Ta.cached((t, r)=>{
            t >= this.maxNextTickBeforeTimer ? setTimeout(()=>r(0), 0) : Promise.resolve(void 0).then(()=>r(t + 1));
        });
        constructor(t){
            this.maxNextTickBeforeTimer = t;
        }
        shouldYield(t) {
            return t.currentOpCount > t.getFiberRef(db) ? t.getFiberRef(mo) : !1;
        }
        scheduleTask(t, r, n) {
            this.getRunner(n).scheduleTask(t, r);
        }
    }
    const ly = rt(Symbol.for("effect/Scheduler/defaultScheduler"), ()=>new pj(2048));
    class Df {
        tasks = new uy;
        deferred = !1;
        scheduleTask(t, r, n) {
            this.deferred ? ly.scheduleTask(t, r, n) : this.tasks.scheduleTask(t, r);
        }
        shouldYield(t) {
            return t.currentOpCount > t.getFiberRef(db) ? t.getFiberRef(mo) : !1;
        }
        flush() {
            for(; this.tasks.buckets.length > 0;){
                const t = this.tasks.buckets;
                this.tasks.buckets = [];
                for (const [r, n] of t)for(let s = 0; s < n.length; s++)n[s]();
            }
            this.deferred = !0;
        }
    }
    const qf = rt(Symbol.for("effect/FiberRef/currentScheduler"), ()=>ge(ly)), fy = rt(Symbol.for("effect/FiberRef/currentRequestMap"), ()=>ge(new Map)), Mg = (e, t, r, n)=>{
        switch(e){
            case void 0:
                return t();
            case "unbounded":
                return r();
            case "inherit":
                return bo(e8, (s)=>s === "unbounded" ? r() : s > 1 ? n(s) : t());
            default:
                return e > 1 ? n(e) : t();
        }
    }, Vf = "InterruptSignal", Hf = "Stateful", Jf = "Resume", Wf = "YieldNow", J_ = (e)=>({
            _tag: Vf,
            cause: e
        }), Go = (e)=>({
            _tag: Hf,
            onFiber: e
        }), Jn = (e)=>({
            _tag: Jf,
            effect: e
        }), hj = ()=>({
            _tag: Wf
        }), wj = "effect/FiberScope", va = Symbol.for(wj);
    class bj {
        [va] = va;
        fiberId = In;
        roots = new Set;
        add(t, r) {
            this.roots.add(r), r.addObserver(()=>{
                this.roots.delete(r);
            });
        }
    }
    class yj {
        fiberId;
        parent;
        [va] = va;
        constructor(t, r){
            this.fiberId = t, this.parent = r;
        }
        add(t, r) {
            this.parent.tell(Go((n)=>{
                n.addChild(r), r.addObserver(()=>{
                    n.removeChild(r);
                });
            }));
        }
    }
    const mj = (e)=>new yj(e.id(), e), Gf = rt(Symbol.for("effect/FiberScope/Global"), ()=>new bj), Sj = "effect/Fiber", Fj = Symbol.for(Sj), kj = {
        _E: (e)=>e,
        _A: (e)=>e
    }, xj = "effect/Fiber", Ej = Symbol.for(xj), dy = (e)=>cb(oc(e.await), e.inheritAll);
    ({
        ...An
    });
    const Gr = "effect/FiberCurrent", Ij = "effect/Logger", Rj = Symbol.for(Ij), Oj = {
        _Message: (e)=>e,
        _Output: (e)=>e
    }, Yf = (e)=>({
            [Rj]: Oj,
            log: e,
            pipe () {
                return q(this, arguments);
            }
        }), Tj = /^[^\s"=]*$/, vj = (e, t)=>({ annotations: r, cause: n, date: s, fiberId: i, logLevel: a, message: _, spans: f })=>{
            const g = (x)=>x.match(Tj) ? x : e(x), h = (x, $)=>`${Bb(x)}=${g($)}`, b = (x, $)=>" " + h(x, $);
            let S = h("timestamp", s.toISOString());
            S += b("level", a.label), S += b("fiber", Sw(i));
            const k = E3(_);
            for(let x = 0; x < k.length; x++)S += b("message", Os(k[x], t));
            t4(n) || (S += b("cause", si(n, {
                renderErrorCause: !0
            })));
            for (const x of f)S += " " + nU(s.getTime())(x);
            for (const [x, $] of r)S += b(x, Os($, t));
            return S;
        }, Cj = (e)=>`"${e.replace(/\\([\s\S])|(")/g, "\\$1$2")}"`, zj = Yf(vj(Cj)), Aj = typeof process == "object" && process !== null && typeof process.stdout == "object" && process.stdout !== null;
    Aj && process.stdout.isTTY;
    const gy = "effect/MetricBoundaries", Gu = Symbol.for(gy);
    class $j {
        values;
        [Gu] = Gu;
        constructor(t){
            this.values = t, this._hash = m(kt(gy), nt(no(this.values)));
        }
        _hash;
        [tt]() {
            return this._hash;
        }
        [Y](t) {
            return Pj(t) && Q(this.values, t.values);
        }
        pipe() {
            return q(this, arguments);
        }
    }
    const Pj = (e)=>W(e, Gu), Mj = (e)=>{
        const t = m(e, eh(me(Number.POSITIVE_INFINITY)), D3);
        return new $j(t);
    }, Nj = (e)=>m(x3(e.count - 1, (t)=>e.start * Math.pow(e.factor, t)), Ga, Mj), Bj = "effect/MetricKeyType", py = Symbol.for(Bj), hy = "effect/MetricKeyType/Counter", Yu = Symbol.for(hy), Uj = "effect/MetricKeyType/Frequency", jj = Symbol.for(Uj), Lj = "effect/MetricKeyType/Gauge", Kj = Symbol.for(Lj), wy = "effect/MetricKeyType/Histogram", Xu = Symbol.for(wy), Dj = "effect/MetricKeyType/Summary", qj = Symbol.for(Dj), by = {
        _In: (e)=>e,
        _Out: (e)=>e
    };
    class Vj {
        incremental;
        bigint;
        [py] = by;
        [Yu] = Yu;
        constructor(t, r){
            this.incremental = t, this.bigint = r, this._hash = kt(hy);
        }
        _hash;
        [tt]() {
            return this._hash;
        }
        [Y](t) {
            return yy(t);
        }
        pipe() {
            return q(this, arguments);
        }
    }
    class Hj {
        boundaries;
        [py] = by;
        [Xu] = Xu;
        constructor(t){
            this.boundaries = t, this._hash = m(kt(wy), nt(U(this.boundaries)));
        }
        _hash;
        [tt]() {
            return this._hash;
        }
        [Y](t) {
            return my(t) && Q(this.boundaries, t.boundaries);
        }
        pipe() {
            return q(this, arguments);
        }
    }
    const Jj = (e)=>new Vj(e?.incremental ?? !1, e?.bigint ?? !1), Wj = (e)=>new Hj(e), yy = (e)=>W(e, Yu), Gj = (e)=>W(e, jj), Yj = (e)=>W(e, Kj), my = (e)=>W(e, Xu), Xj = (e)=>W(e, qj), Qj = "effect/MetricKey", Sy = Symbol.for(Qj), Zj = {
        _Type: (e)=>e
    }, t5 = Al(Q);
    class Xf {
        name;
        keyType;
        description;
        tags;
        [Sy] = Zj;
        constructor(t, r, n, s = []){
            this.name = t, this.keyType = r, this.description = n, this.tags = s, this._hash = m(kt(this.name + this.description), nt(U(this.keyType)), nt(no(this.tags)));
        }
        _hash;
        [tt]() {
            return this._hash;
        }
        [Y](t) {
            return e5(t) && this.name === t.name && Q(this.keyType, t.keyType) && Q(this.description, t.description) && t5(this.tags, t.tags);
        }
        pipe() {
            return q(this, arguments);
        }
    }
    const e5 = (e)=>W(e, Sy), r5 = (e, t)=>new Xf(e, Jj(t), Ka(t?.description)), n5 = (e, t, r)=>new Xf(e, Wj(t), Ka(r)), s5 = w(2, (e, t)=>t.length === 0 ? e : new Xf(e.name, e.keyType, e.description, Ho(e.tags, t))), i5 = "effect/MetricState", Fo = Symbol.for(i5), Fy = "effect/MetricState/Counter", Qu = Symbol.for(Fy), ky = "effect/MetricState/Frequency", Zu = Symbol.for(ky), xy = "effect/MetricState/Gauge", tl = Symbol.for(xy), Ey = "effect/MetricState/Histogram", el = Symbol.for(Ey), Iy = "effect/MetricState/Summary", rl = Symbol.for(Iy), ko = {
        _A: (e)=>e
    };
    class o5 {
        count;
        [Fo] = ko;
        [Qu] = Qu;
        constructor(t){
            this.count = t;
        }
        [tt]() {
            return m(U(Fy), nt(U(this.count)), yt(this));
        }
        [Y](t) {
            return w5(t) && this.count === t.count;
        }
        pipe() {
            return q(this, arguments);
        }
    }
    const a5 = Al(Q);
    class c5 {
        occurrences;
        [Fo] = ko;
        [Zu] = Zu;
        constructor(t){
            this.occurrences = t;
        }
        _hash;
        [tt]() {
            return m(kt(ky), nt(no(Et(this.occurrences.entries()))), yt(this));
        }
        [Y](t) {
            return b5(t) && a5(Et(this.occurrences.entries()), Et(t.occurrences.entries()));
        }
        pipe() {
            return q(this, arguments);
        }
    }
    class _5 {
        value;
        [Fo] = ko;
        [tl] = tl;
        constructor(t){
            this.value = t;
        }
        [tt]() {
            return m(U(xy), nt(U(this.value)), yt(this));
        }
        [Y](t) {
            return y5(t) && this.value === t.value;
        }
        pipe() {
            return q(this, arguments);
        }
    }
    class u5 {
        buckets;
        count;
        min;
        max;
        sum;
        [Fo] = ko;
        [el] = el;
        constructor(t, r, n, s, i){
            this.buckets = t, this.count = r, this.min = n, this.max = s, this.sum = i;
        }
        [tt]() {
            return m(U(Ey), nt(U(this.buckets)), nt(U(this.count)), nt(U(this.min)), nt(U(this.max)), nt(U(this.sum)), yt(this));
        }
        [Y](t) {
            return m5(t) && Q(this.buckets, t.buckets) && this.count === t.count && this.min === t.min && this.max === t.max && this.sum === t.sum;
        }
        pipe() {
            return q(this, arguments);
        }
    }
    class l5 {
        error;
        quantiles;
        count;
        min;
        max;
        sum;
        [Fo] = ko;
        [rl] = rl;
        constructor(t, r, n, s, i, a){
            this.error = t, this.quantiles = r, this.count = n, this.min = s, this.max = i, this.sum = a;
        }
        [tt]() {
            return m(U(Iy), nt(U(this.error)), nt(U(this.quantiles)), nt(U(this.count)), nt(U(this.min)), nt(U(this.max)), nt(U(this.sum)), yt(this));
        }
        [Y](t) {
            return S5(t) && this.error === t.error && Q(this.quantiles, t.quantiles) && this.count === t.count && this.min === t.min && this.max === t.max && this.sum === t.sum;
        }
        pipe() {
            return q(this, arguments);
        }
    }
    const f5 = (e)=>new o5(e), d5 = (e)=>new c5(e), g5 = (e)=>new _5(e), p5 = (e)=>new u5(e.buckets, e.count, e.min, e.max, e.sum), h5 = (e)=>new l5(e.error, e.quantiles, e.count, e.min, e.max, e.sum), w5 = (e)=>W(e, Qu), b5 = (e)=>W(e, Zu), y5 = (e)=>W(e, tl), m5 = (e)=>W(e, el), S5 = (e)=>W(e, rl), F5 = "effect/MetricHook", k5 = Symbol.for(F5), x5 = {
        _In: (e)=>e,
        _Out: (e)=>e
    }, xo = (e)=>({
            [k5]: x5,
            pipe () {
                return q(this, arguments);
            },
            ...e
        }), Ng = BigInt(0), E5 = (e)=>{
        let t = e.keyType.bigint ? Ng : 0;
        const r = e.keyType.incremental ? e.keyType.bigint ? (s)=>s >= Ng : (s)=>s >= 0 : (s)=>!0, n = (s)=>{
            r(s) && (t = t + s);
        };
        return xo({
            get: ()=>f5(t),
            update: n,
            modify: n
        });
    }, I5 = (e)=>{
        const t = new Map;
        for (const n of e.keyType.preregisteredWords)t.set(n, 0);
        const r = (n)=>{
            const s = t.get(n) ?? 0;
            t.set(n, s + 1);
        };
        return xo({
            get: ()=>d5(t),
            update: r,
            modify: r
        });
    }, R5 = (e, t)=>{
        let r = t;
        return xo({
            get: ()=>g5(r),
            update: (n)=>{
                r = n;
            },
            modify: (n)=>{
                r = r + n;
            }
        });
    }, O5 = (e)=>{
        const t = e.keyType.boundaries.values, r = t.length, n = new Uint32Array(r + 1), s = new Float64Array(r);
        let i = 0, a = 0, _ = Number.MAX_VALUE, f = Number.MIN_VALUE;
        m(t, Li(Cs), is((b, S)=>{
            s[S] = b;
        }));
        const g = (b)=>{
            let S = 0, k = r;
            for(; S !== k;){
                const x = Math.floor(S + (k - S) / 2), $ = s[x];
                b <= $ ? k = x : S = x, k === S + 1 && (b <= s[S] ? k = S : S = k);
            }
            n[S] = n[S] + 1, i = i + 1, a = a + b, b < _ && (_ = b), b > f && (f = b);
        }, h = ()=>{
            const b = Da(r);
            let S = 0;
            for(let k = 0; k < r; k++){
                const x = s[k], $ = n[k];
                S = S + $, b[k] = [
                    x,
                    S
                ];
            }
            return b;
        };
        return xo({
            get: ()=>p5({
                    buckets: h(),
                    count: i,
                    min: _,
                    max: f,
                    sum: a
                }),
            update: g,
            modify: g
        });
    }, T5 = (e)=>{
        const { error: t, maxAge: r, maxSize: n, quantiles: s } = e.keyType, i = m(s, Li(Cs)), a = Da(n);
        let _ = 0, f = 0, g = 0, h = 0, b = 0;
        const S = (x)=>{
            const $ = [];
            let C = 0;
            for(; C !== n - 1;){
                const z = a[C];
                if (z != null) {
                    const [V, B] = z, D = bu(x - V);
                    IM(D, iw) && EM(D, r) && $.push(B);
                }
                C = C + 1;
            }
            return v5(t, i, Li($, Cs));
        }, k = (x, $)=>{
            if (n > 0) {
                _ = _ + 1;
                const C = _ % n;
                a[C] = [
                    $,
                    x
                ];
            }
            h = f === 0 ? x : Math.min(h, x), b = f === 0 ? x : Math.max(b, x), f = f + 1, g = g + x;
        };
        return xo({
            get: ()=>h5({
                    error: t,
                    quantiles: S(Date.now()),
                    count: f,
                    min: h,
                    max: b,
                    sum: g
                }),
            update: ([x, $])=>k(x, $),
            modify: ([x, $])=>k(x, $)
        });
    }, v5 = (e, t, r)=>{
        const n = r.length;
        if (!Qt(t)) return vs();
        const s = t[0], i = t.slice(1), a = Bg(e, n, M(), 0, s, r), _ = Oe(a);
        return i.forEach((f)=>{
            _.push(Bg(e, n, a.value, a.consumed, f, a.rest));
        }), is(_, (f)=>[
                f.quantile,
                f.value
            ]);
    }, Bg = (e, t, r, n, s, i)=>{
        let a = e, _ = t, f = r, g = n, h = s, b = i, S = e, k = t, x = r, $ = n, C = s, z = i;
        for(;;){
            if (!Qt(b)) return {
                quantile: h,
                value: M(),
                consumed: g,
                rest: []
            };
            if (h === 1) return {
                quantile: h,
                value: N(nh(b)),
                consumed: g + b.length,
                rest: []
            };
            const V = ne(b), B = P3(b, (j)=>j === V), D = h * _, H = a / 2 * D, L = g + B[0].length, Z = Math.abs(L - D);
            if (L < D - H) {
                S = a, k = _, x = Ii(b), $ = L, C = h, z = B[1], a = S, _ = k, f = x, g = $, h = C, b = z;
                continue;
            }
            if (L > D + H) {
                const j = Ct(f) ? N(V) : f;
                return {
                    quantile: h,
                    value: j,
                    consumed: g,
                    rest: b
                };
            }
            switch(f._tag){
                case "None":
                    {
                        S = a, k = _, x = Ii(b), $ = L, C = h, z = B[1], a = S, _ = k, f = x, g = $, h = C, b = z;
                        continue;
                    }
                case "Some":
                    {
                        const j = Math.abs(D - f.value);
                        if (Z < j) {
                            S = a, k = _, x = Ii(b), $ = L, C = h, z = B[1], a = S, _ = k, f = x, g = $, h = C, b = z;
                            continue;
                        }
                        return {
                            quantile: h,
                            value: N(f.value),
                            consumed: g,
                            rest: b
                        };
                    }
            }
        }
        throw new Error("BUG: MetricHook.resolveQuantiles - please report an issue at https://github.com/Effect-TS/effect/issues");
    }, C5 = "effect/MetricPair", z5 = Symbol.for(C5), A5 = {
        _Type: (e)=>e
    }, $5 = (e, t)=>({
            [z5]: A5,
            metricKey: e,
            metricState: t,
            pipe () {
                return q(this, arguments);
            }
        }), P5 = "effect/MetricRegistry", Ug = Symbol.for(P5);
    class M5 {
        [Ug] = Ug;
        map = v8();
        snapshot() {
            const t = [];
            for (const [r, n] of this.map)t.push($5(r, n.get()));
            return t;
        }
        get(t) {
            const r = m(this.map, Yr(t), Ye);
            if (r == null) {
                if (yy(t.keyType)) return this.getCounter(t);
                if (Yj(t.keyType)) return this.getGauge(t);
                if (Gj(t.keyType)) return this.getFrequency(t);
                if (my(t.keyType)) return this.getHistogram(t);
                if (Xj(t.keyType)) return this.getSummary(t);
                throw new Error("BUG: MetricRegistry.get - unknown MetricKeyType - please report an issue at https://github.com/Effect-TS/effect/issues");
            } else return r;
        }
        getCounter(t) {
            let r = m(this.map, Yr(t), Ye);
            if (r == null) {
                const n = E5(t);
                m(this.map, li(t)) || m(this.map, fi(t, n)), r = n;
            }
            return r;
        }
        getFrequency(t) {
            let r = m(this.map, Yr(t), Ye);
            if (r == null) {
                const n = I5(t);
                m(this.map, li(t)) || m(this.map, fi(t, n)), r = n;
            }
            return r;
        }
        getGauge(t) {
            let r = m(this.map, Yr(t), Ye);
            if (r == null) {
                const n = R5(t, t.keyType.bigint ? BigInt(0) : 0);
                m(this.map, li(t)) || m(this.map, fi(t, n)), r = n;
            }
            return r;
        }
        getHistogram(t) {
            let r = m(this.map, Yr(t), Ye);
            if (r == null) {
                const n = O5(t);
                m(this.map, li(t)) || m(this.map, fi(t, n)), r = n;
            }
            return r;
        }
        getSummary(t) {
            let r = m(this.map, Yr(t), Ye);
            if (r == null) {
                const n = T5(t);
                m(this.map, li(t)) || m(this.map, fi(t, n)), r = n;
            }
            return r;
        }
    }
    const N5 = ()=>new M5, B5 = "effect/Metric", U5 = Symbol.for(B5), j5 = {
        _Type: (e)=>e,
        _In: (e)=>e,
        _Out: (e)=>e
    }, jg = rt(Symbol.for("effect/Metric/globalMetricRegistry"), ()=>N5()), Ry = function(e, t, r, n) {
        const s = Object.assign((i)=>gf(i, (a)=>q5(s, a)), {
            [U5]: j5,
            keyType: e,
            unsafeUpdate: t,
            unsafeValue: r,
            unsafeModify: n,
            register () {
                return this.unsafeValue([]), this;
            },
            pipe () {
                return q(this, arguments);
            }
        });
        return s;
    }, hc = (e, t)=>Oy(r5(e, t)), Oy = (e)=>{
        let t;
        const r = new WeakMap, n = (s)=>{
            if (s.length === 0) return t !== void 0 || (t = jg.get(e)), t;
            let i = r.get(s);
            return i !== void 0 || (i = jg.get(s5(e, s)), r.set(s, i)), i;
        };
        return Ry(e.keyType, (s, i)=>n(i).update(s), (s)=>n(s).get(), (s, i)=>n(i).modify(s));
    }, L5 = (e, t, r)=>Oy(n5(e, t, r)), K5 = w(3, (e, t, r)=>D5(e, [
            gU(t, r)
        ])), D5 = w(2, (e, t)=>Ry(e.keyType, (r, n)=>e.unsafeUpdate(r, Ho(t, n)), (r)=>e.unsafeValue(Ho(t, r)), (r, n)=>e.unsafeModify(r, Ho(t, n)))), q5 = w(2, (e, t)=>bo(Pu, (r)=>P(()=>e.unsafeUpdate(t, r))));
    ({
        ...Il
    });
    const V5 = w(2, (e, t)=>bo(fy, (r)=>P(()=>{
                if (r.has(e)) {
                    const n = r.get(e);
                    n.state.completed || (n.state.completed = !0, bb(n.result, t));
                }
            }))), H5 = "effect/Supervisor", wc = Symbol.for(H5), Qf = {
        _T: (e)=>e
    };
    class bc {
        underlying;
        value0;
        [wc] = Qf;
        constructor(t, r){
            this.underlying = t, this.value0 = r;
        }
        get value() {
            return this.value0;
        }
        onStart(t, r, n, s) {
            this.underlying.onStart(t, r, n, s);
        }
        onEnd(t, r) {
            this.underlying.onEnd(t, r);
        }
        onEffect(t, r) {
            this.underlying.onEffect(t, r);
        }
        onSuspend(t) {
            this.underlying.onSuspend(t);
        }
        onResume(t) {
            this.underlying.onResume(t);
        }
        map(t) {
            return new bc(this, m(this.value, ut(t)));
        }
        zip(t) {
            return new yc(this, t);
        }
    }
    class yc {
        left;
        right;
        _tag = "Zip";
        [wc] = Qf;
        constructor(t, r){
            this.left = t, this.right = r;
        }
        get value() {
            return cc(this.left.value, this.right.value);
        }
        onStart(t, r, n, s) {
            this.left.onStart(t, r, n, s), this.right.onStart(t, r, n, s);
        }
        onEnd(t, r) {
            this.left.onEnd(t, r), this.right.onEnd(t, r);
        }
        onEffect(t, r) {
            this.left.onEffect(t, r), this.right.onEffect(t, r);
        }
        onSuspend(t) {
            this.left.onSuspend(t), this.right.onSuspend(t);
        }
        onResume(t) {
            this.left.onResume(t), this.right.onResume(t);
        }
        map(t) {
            return new bc(this, m(this.value, ut(t)));
        }
        zip(t) {
            return new yc(this, t);
        }
    }
    const Ty = (e)=>W(e, wc) && Cp(e, "Zip");
    class J5 {
        effect;
        [wc] = Qf;
        constructor(t){
            this.effect = t;
        }
        get value() {
            return this.effect;
        }
        onStart(t, r, n, s) {}
        onEnd(t, r) {}
        onEffect(t, r) {}
        onSuspend(t) {}
        onResume(t) {}
        map(t) {
            return new bc(this, m(this.value, ut(t)));
        }
        zip(t) {
            return new yc(this, t);
        }
        onRun(t, r) {
            return t();
        }
    }
    const W5 = (e)=>new J5(e), mc = rt("effect/Supervisor/none", ()=>W5(It)), G5 = ei, vy = "Empty", Cy = "AddSupervisor", zy = "RemoveSupervisor", Ay = "AndThen", Ti = {
        _tag: vy
    }, Yo = (e, t)=>({
            _tag: Ay,
            first: e,
            second: t
        }), Y5 = (e, t)=>X5(t, me(e)), X5 = (e, t)=>{
        let r = e, n = t;
        for(; $s(n);){
            const s = Ps(n);
            switch(s._tag){
                case vy:
                    {
                        n = Zr(n);
                        break;
                    }
                case Cy:
                    {
                        r = r.zip(s.supervisor), n = Zr(n);
                        break;
                    }
                case zy:
                    {
                        r = nl(r, s.supervisor), n = Zr(n);
                        break;
                    }
                case Ay:
                    {
                        n = Ke(s.first)(Ke(s.second)(Zr(n)));
                        break;
                    }
            }
        }
        return r;
    }, nl = (e, t)=>Q(e, t) ? mc : Ty(e) ? nl(e.left, t).zip(nl(e.right, t)) : e, Ca = (e)=>Q(e, mc) ? xn() : Ty(e) ? m(Ca(e.left), qi(Ca(e.right))) : tf(e), Q5 = (e, t)=>{
        if (Q(e, t)) return Ti;
        const r = Ca(e), n = Ca(t), s = m(n, Qd(r), wa(Ti, (a, _)=>Yo(a, {
                _tag: Cy,
                supervisor: _
            }))), i = m(r, Qd(n), wa(Ti, (a, _)=>Yo(a, {
                _tag: zy,
                supervisor: _
            })));
        return Yo(s, i);
    }, Z5 = G5({
        empty: Ti,
        patch: Y5,
        combine: Yo,
        diff: Q5
    }), t7 = hc("effect_fiber_started", {
        incremental: !0
    }), Lg = hc("effect_fiber_active"), e7 = hc("effect_fiber_successes", {
        incremental: !0
    }), r7 = hc("effect_fiber_failures", {
        incremental: !0
    }), n7 = K5(L5("effect_fiber_lifetimes", Nj({
        start: .5,
        factor: 2,
        count: 35
    })), "time_unit", "milliseconds"), di = "Continue", s7 = "Done", Kg = "Yield", i7 = {
        _E: (e)=>e,
        _A: (e)=>e
    }, Mo = (e)=>{
        throw new Error(`BUG: FiberRuntime - ${Os(e)} - please report an issue at https://github.com/Effect-TS/effect/issues`);
    }, or = Symbol.for("effect/internal/fiberRuntime/YieldedOp"), ar = rt("effect/internal/fiberRuntime/yieldedOpChannel", ()=>({
            currentOp: null
        })), gi = {
        [aa]: (e, t, r)=>Jt(()=>t.effect_instruction_i1(r)),
        OnStep: (e, t, r)=>xt(xt(r)),
        [ca]: (e, t, r)=>Jt(()=>t.effect_instruction_i2(r)),
        [xl]: (e, t, r)=>(e.patchRuntimeFlags(e.currentRuntimeFlags, t.patch), vr(e.currentRuntimeFlags) && e.isInterrupted() ? ft(e.getInterruptedCause()) : xt(r)),
        [_a]: (e, t, r)=>(Jt(()=>t.effect_instruction_i2(r)), Jt(()=>t.effect_instruction_i0()) ? (e.pushStack(t), Jt(()=>t.effect_instruction_i1())) : It),
        [xi]: (e, t, r)=>{
            for(;;){
                const n = Jt(()=>t.effect_instruction_i0.next(r));
                if (n.done) return xt(n.value);
                const s = $$(n.value);
                if (lc(s)) {
                    if (s._tag === "Failure") return s;
                } else return e.pushStack(t), s;
                r = s.value;
            }
        }
    }, o7 = {
        [Vf]: (e, t, r, n)=>(e.processNewInterruptSignal(n.cause), vr(t) ? ft(n.cause) : r),
        [Jf]: (e, t, r, n)=>{
            throw new Error("It is illegal to have multiple concurrent run loops in a single fiber");
        },
        [Hf]: (e, t, r, n)=>(n.onFiber(e, ry(t)), r),
        [Wf]: (e, t, r, n)=>T(wf(), ()=>r)
    }, a7 = (e)=>ac(NB(e), (t)=>Nr(XB(t), ([r, n])=>{
                const s = new Map, i = [];
                for (const _ of n){
                    i.push(_n(_));
                    for (const f of _)s.set(f.request, f);
                }
                const a = i.flat();
                return yo(z7(r.runAll(i), a, ()=>a.forEach((_)=>{
                        _.listeners.interrupted = !0;
                    })), fy, s);
            }, !1, !1)), c7 = El();
    class $y extends $f {
        [Fj] = kj;
        [Ej] = i7;
        _fiberRefs;
        _fiberId;
        _queue = new Array;
        _children = null;
        _observers = new Array;
        _running = !1;
        _stack = [];
        _asyncInterruptor = null;
        _asyncBlockingOn = null;
        _exitValue = null;
        _steps = [];
        _isYielding = !1;
        currentRuntimeFlags;
        currentOpCount = 0;
        currentSupervisor;
        currentScheduler;
        currentTracer;
        currentSpan;
        currentContext;
        currentDefaultServices;
        constructor(t, r, n){
            if (super(), this.currentRuntimeFlags = n, this._fiberId = t, this._fiberRefs = r, ng(n)) {
                const s = this.getFiberRef(Pu);
                t7.unsafeUpdate(1, s), Lg.unsafeUpdate(1, s);
            }
            this.refreshRefCache();
        }
        commit() {
            return dy(this);
        }
        id() {
            return this._fiberId;
        }
        resume(t) {
            this.tell(Jn(t));
        }
        get status() {
            return this.ask((t, r)=>r);
        }
        get runtimeFlags() {
            return this.ask((t, r)=>jU(r) ? t.currentRuntimeFlags : r.runtimeFlags);
        }
        scope() {
            return mj(this);
        }
        get children() {
            return this.ask((t)=>Array.from(t.getChildren()));
        }
        getChildren() {
            return this._children === null && (this._children = new Set), this._children;
        }
        getInterruptedCause() {
            return this.getFiberRef($o);
        }
        fiberRefs() {
            return this.ask((t)=>t.getFiberRefs());
        }
        ask(t) {
            return ct(()=>{
                const r = hb(this._fiberId);
                return this.tell(Go((n, s)=>{
                    bb(r, P(()=>t(n, s)));
                })), dc(r);
            });
        }
        tell(t) {
            this._queue.push(t), this._running || (this._running = !0, this.drainQueueLaterOnExecutor());
        }
        get await() {
            return Tn((t)=>{
                const r = (n)=>t(G(n));
                if (this._exitValue !== null) {
                    r(this._exitValue);
                    return;
                }
                return this.tell(Go((n, s)=>{
                    n._exitValue !== null ? r(this._exitValue) : n.addObserver(r);
                })), P(()=>this.tell(Go((n, s)=>{
                        n.removeObserver(r);
                    })));
            }, this.id());
        }
        get inheritAll() {
            return ht((t, r)=>{
                const n = t.id(), s = t.getFiberRefs(), i = r.runtimeFlags, a = this.getFiberRefs(), _ = U6(s, n, a);
                t.setFiberRefs(_);
                const f = t.getFiberRef(Hg), g = m(Mr(i, f), ig(Nn), ig(Tu));
                return ib(g);
            });
        }
        get poll() {
            return P(()=>Ka(this._exitValue));
        }
        unsafePoll() {
            return this._exitValue;
        }
        interruptAsFork(t) {
            return P(()=>this.tell(J_(Cr(t))));
        }
        unsafeInterruptAsFork(t) {
            this.tell(J_(Cr(t)));
        }
        addObserver(t) {
            this._exitValue !== null ? t(this._exitValue) : this._observers.push(t);
        }
        removeObserver(t) {
            this._observers = this._observers.filter((r)=>r !== t);
        }
        getFiberRefs() {
            return this.setFiberRef(Hg, this.currentRuntimeFlags), this._fiberRefs;
        }
        unsafeDeleteFiberRef(t) {
            this._fiberRefs = Nb(this._fiberRefs, t);
        }
        getFiberRef(t) {
            return this._fiberRefs.locals.has(t) ? this._fiberRefs.locals.get(t)[0][1] : t.initial;
        }
        setFiberRef(t, r) {
            this._fiberRefs = Uu(this._fiberRefs, {
                fiberId: this._fiberId,
                fiberRef: t,
                value: r
            }), this.refreshRefCache();
        }
        refreshRefCache() {
            this.currentDefaultServices = this.getFiberRef(Gi), this.currentTracer = this.currentDefaultServices.unsafeMap.get($b.key), this.currentSupervisor = this.getFiberRef(C7), this.currentScheduler = this.getFiberRef(qf), this.currentContext = this.getFiberRef(Hr), this.currentSpan = this.currentContext.unsafeMap.get(Pb.key);
        }
        setFiberRefs(t) {
            this._fiberRefs = t, this.refreshRefCache();
        }
        addChild(t) {
            this.getChildren().add(t);
        }
        removeChild(t) {
            this.getChildren().delete(t);
        }
        transferChildren(t) {
            const r = this._children;
            if (this._children = null, r !== null && r.size > 0) for (const n of r)n._exitValue === null && t.add(this.currentRuntimeFlags, n);
        }
        drainQueueOnCurrentThread() {
            let t = !0;
            for(; t;){
                let r = di;
                const n = globalThis[Gr];
                globalThis[Gr] = this;
                try {
                    for(; r === di;)r = this._queue.length === 0 ? s7 : this.evaluateMessageWhileSuspended(this._queue.splice(0, 1)[0]);
                } finally{
                    this._running = !1, globalThis[Gr] = n;
                }
                this._queue.length > 0 && !this._running ? (this._running = !0, r === Kg ? (this.drainQueueLaterOnExecutor(), t = !1) : t = !0) : t = !1;
            }
        }
        drainQueueLaterOnExecutor() {
            this.currentScheduler.scheduleTask(this.run, this.getFiberRef(mo), this);
        }
        drainQueueWhileRunning(t, r) {
            let n = r;
            for(; this._queue.length > 0;){
                const s = this._queue.splice(0, 1)[0];
                n = o7[s._tag](this, t, n, s);
            }
            return n;
        }
        isInterrupted() {
            return !r4(this.getFiberRef($o));
        }
        addInterruptedCause(t) {
            const r = this.getFiberRef($o);
            this.setFiberRef($o, ye(r, t));
        }
        processNewInterruptSignal(t) {
            this.addInterruptedCause(t), this.sendInterruptSignalToAllChildren();
        }
        sendInterruptSignalToAllChildren() {
            if (this._children === null || this._children.size === 0) return !1;
            let t = !1;
            for (const r of this._children)r.tell(J_(Cr(this.id()))), t = !0;
            return t;
        }
        interruptAllChildren() {
            if (this.sendInterruptSignalToAllChildren()) {
                const t = this._children.values();
                this._children = null;
                let r = !1;
                return hf({
                    while: ()=>!r,
                    body: ()=>{
                        const s = t.next();
                        return s.done ? P(()=>{
                            r = !0;
                        }) : Or(s.value.await);
                    },
                    step: ()=>{}
                });
            }
            return null;
        }
        reportExitValue(t) {
            if (ng(this.currentRuntimeFlags)) {
                const r = this.getFiberRef(Pu), n = this.id().startTimeMillis, s = Date.now();
                switch(n7.unsafeUpdate(s - n, r), Lg.unsafeUpdate(-1, r), t._tag){
                    case Xt:
                        {
                            e7.unsafeUpdate(1, r);
                            break;
                        }
                    case Yt:
                        {
                            r7.unsafeUpdate(1, r);
                            break;
                        }
                }
            }
            if (t._tag === "Failure") {
                const r = this.getFiberRef(n8);
                !cf(t.cause) && r._tag === "Some" && this.log("Fiber terminated with an unhandled error", t.cause, r);
            }
        }
        setExitValue(t) {
            this._exitValue = t, this.reportExitValue(t);
            for(let r = this._observers.length - 1; r >= 0; r--)this._observers[r](t);
            this._observers = [];
        }
        getLoggers() {
            return this.getFiberRef(d7);
        }
        log(t, r, n) {
            const s = Vt(n) ? n.value : this.getFiberRef(Q4), i = this.getFiberRef(_7);
            if (eU(i, s)) return;
            const a = this.getFiberRef(Z4), _ = this.getFiberRef(X4), f = this.getLoggers(), g = this.getFiberRefs();
            if (bw(f) > 0) {
                const h = Dl(this.getFiberRef(Gi), xf), b = new Date(h.unsafeCurrentTimeMillis());
                L$(g, ()=>{
                    for (const S of f)S.log({
                        fiberId: this.id(),
                        logLevel: s,
                        message: t,
                        cause: r,
                        context: g,
                        spans: a,
                        annotations: _,
                        date: b
                    });
                });
            }
        }
        evaluateMessageWhileSuspended(t) {
            switch(t._tag){
                case Wf:
                    return Kg;
                case Vf:
                    return this.processNewInterruptSignal(t.cause), this._asyncInterruptor !== null && (this._asyncInterruptor(ft(t.cause)), this._asyncInterruptor = null), di;
                case Jf:
                    return this._asyncInterruptor = null, this._asyncBlockingOn = null, this.evaluateEffect(t.effect), di;
                case Hf:
                    return t.onFiber(this, this._exitValue !== null ? BU : UU(this.currentRuntimeFlags, this._asyncBlockingOn)), di;
                default:
                    return Mo(t);
            }
        }
        evaluateEffect(t) {
            this.currentSupervisor.onResume(this);
            try {
                let r = vr(this.currentRuntimeFlags) && this.isInterrupted() ? ft(this.getInterruptedCause()) : t;
                for(; r !== null;){
                    const n = r, s = this.runLoop(n);
                    if (s === or) {
                        const i = ar.currentOp;
                        ar.currentOp = null, i._op === qo ? CB(this.currentRuntimeFlags) ? (this.tell(hj()), this.tell(Jn(Le)), r = null) : r = Le : i._op === ki && (r = null);
                    } else {
                        this.currentRuntimeFlags = m(this.currentRuntimeFlags, AB(Tu));
                        const i = this.interruptAllChildren();
                        i !== null ? r = T(i, ()=>s) : (this._queue.length === 0 ? this.setExitValue(s) : this.tell(Jn(s)), r = null);
                    }
                }
            } finally{
                this.currentSupervisor.onSuspend(this);
            }
        }
        start(t) {
            if (this._running) this.tell(Jn(t));
            else {
                this._running = !0;
                const r = globalThis[Gr];
                globalThis[Gr] = this;
                try {
                    this.evaluateEffect(t);
                } finally{
                    this._running = !1, globalThis[Gr] = r, this._queue.length > 0 && this.drainQueueLaterOnExecutor();
                }
            }
        }
        startFork(t) {
            this.tell(Jn(t));
        }
        patchRuntimeFlags(t, r) {
            const n = cs(t, r);
            return globalThis[Gr] = this, this.currentRuntimeFlags = n, n;
        }
        initiateAsync(t, r) {
            let n = !1;
            const s = (i)=>{
                n || (n = !0, this.tell(Jn(i)));
            };
            vr(t) && (this._asyncInterruptor = s);
            try {
                r(s);
            } catch (i) {
                s(ie(rr(i)));
            }
        }
        pushStack(t) {
            this._stack.push(t), t._op === "OnStep" && this._steps.push({
                refs: this.getFiberRefs(),
                flags: this.currentRuntimeFlags
            });
        }
        popStack() {
            const t = this._stack.pop();
            if (t) return t._op === "OnStep" && this._steps.pop(), t;
        }
        getNextSuccessCont() {
            let t = this.popStack();
            for(; t;){
                if (t._op !== P_) return t;
                t = this.popStack();
            }
        }
        getNextFailCont() {
            let t = this.popStack();
            for(; t;){
                if (t._op !== aa && t._op !== _a && t._op !== xi) return t;
                t = this.popStack();
            }
        }
        [D$](t) {
            return P(()=>Xh(this.currentContext, t));
        }
        Left(t) {
            return Nt(t.left);
        }
        None(t) {
            return Nt(new pb);
        }
        Right(t) {
            return xt(t.right);
        }
        Some(t) {
            return xt(t.value);
        }
        Micro(t) {
            return Wi((r)=>{
                let n = r;
                const s = gj(aj(t, this.currentContext));
                return s.addObserver((i)=>{
                    if (i._tag === "Success") return n(xt(i.value));
                    switch(i.cause._tag){
                        case "Interrupt":
                            return n(ft(Cr(In)));
                        case "Fail":
                            return n(Nt(i.cause.error));
                        case "Die":
                            return n(Au(i.cause.defect));
                    }
                }), Wi((i)=>{
                    n = (a)=>{
                        i(It);
                    }, s.unsafeInterrupt();
                });
            });
        }
        [jp](t) {
            const r = Jt(()=>t.effect_instruction_i0()), n = this.getNextSuccessCont();
            return n !== void 0 ? (n._op in gi || Mo(n), gi[n._op](this, n, r)) : (ar.currentOp = xt(r), or);
        }
        [Xt](t) {
            const r = t, n = this.getNextSuccessCont();
            return n !== void 0 ? (n._op in gi || Mo(n), gi[n._op](this, n, r.effect_instruction_i0)) : (ar.currentOp = r, or);
        }
        [Yt](t) {
            const r = t.effect_instruction_i0, n = this.getNextFailCont();
            if (n !== void 0) switch(n._op){
                case P_:
                case ca:
                    return vr(this.currentRuntimeFlags) && this.isInterrupted() ? ft(og(r)) : Jt(()=>n.effect_instruction_i1(r));
                case "OnStep":
                    return vr(this.currentRuntimeFlags) && this.isInterrupted() ? ft(og(r)) : xt(ft(r));
                case xl:
                    return this.patchRuntimeFlags(this.currentRuntimeFlags, n.patch), vr(this.currentRuntimeFlags) && this.isInterrupted() ? ft(ye(r, this.getInterruptedCause())) : ft(r);
                default:
                    Mo(n);
            }
            else return ar.currentOp = ft(r), or;
        }
        [Lp](t) {
            return Jt(()=>t.effect_instruction_i0(this, ry(this.currentRuntimeFlags)));
        }
        Blocked(t) {
            const r = this.getFiberRefs(), n = this.currentRuntimeFlags;
            if (this._steps.length > 0) {
                const s = [], i = this._steps[this._steps.length - 1];
                let a = this.popStack();
                for(; a && a._op !== "OnStep";)s.push(a), a = this.popStack();
                this.setFiberRefs(i.refs), this.currentRuntimeFlags = i.flags;
                const _ = Xi(i.refs, r), f = Mr(i.flags, n);
                return xt(Gw(t.effect_instruction_i0, ht((g)=>{
                    for(; s.length > 0;)g.pushStack(s.pop());
                    return g.setFiberRefs(Qi(g.id(), g.getFiberRefs())(_)), g.currentRuntimeFlags = cs(f)(g.currentRuntimeFlags), t.effect_instruction_i1;
                })));
            }
            return sr((s)=>T(Ny(k4(t.effect_instruction_i0)), ()=>s(t.effect_instruction_i1)));
        }
        RunBlocked(t) {
            return a7(t.effect_instruction_i0);
        }
        [Qs](t) {
            const r = t.effect_instruction_i0, n = this.currentRuntimeFlags, s = cs(n, r);
            if (vr(s) && this.isInterrupted()) return ft(this.getInterruptedCause());
            if (this.patchRuntimeFlags(this.currentRuntimeFlags, r), t.effect_instruction_i1) {
                const i = Mr(s, n);
                return this.pushStack(new x4(i, t)), Jt(()=>t.effect_instruction_i1(n));
            } else return Le;
        }
        [aa](t) {
            return this.pushStack(t), t.effect_instruction_i0;
        }
        OnStep(t) {
            return this.pushStack(t), t.effect_instruction_i0;
        }
        [P_](t) {
            return this.pushStack(t), t.effect_instruction_i0;
        }
        [ca](t) {
            return this.pushStack(t), t.effect_instruction_i0;
        }
        [ki](t) {
            return this._asyncBlockingOn = t.effect_instruction_i1, this.initiateAsync(this.currentRuntimeFlags, t.effect_instruction_i0), ar.currentOp = t, or;
        }
        [qo](t) {
            return this._isYielding = !1, ar.currentOp = t, or;
        }
        [_a](t) {
            const r = t.effect_instruction_i0, n = t.effect_instruction_i1;
            return r() ? (this.pushStack(t), n()) : Le;
        }
        [xi](t) {
            return gi[xi](this, t, void 0);
        }
        [La](t) {
            return Jt(()=>t.commit());
        }
        runLoop(t) {
            let r = t;
            for(this.currentOpCount = 0;;){
                if (this.currentRuntimeFlags & vB && this.currentSupervisor.onEffect(this, r), this._queue.length > 0 && (r = this.drainQueueWhileRunning(this.currentRuntimeFlags, r)), !this._isYielding) {
                    this.currentOpCount += 1;
                    const n = this.currentScheduler.shouldYield(this);
                    if (n !== !1) {
                        this._isYielding = !0, this.currentOpCount = 0;
                        const s = r;
                        r = T(wf({
                            priority: n
                        }), ()=>s);
                    }
                }
                try {
                    if (r = this.currentTracer.context(()=>{
                        if (c7 !== r[qs]._V) {
                            const n = this.getFiberRef(s8);
                            if (n._tag === "Some") {
                                const s = r[qs]._V;
                                this.log(`Executing an Effect versioned ${s} with a Runtime of version ${El()}, you may want to dedupe the effect dependencies, you can use the language service plugin to detect this at compile time: https://github.com/Effect-TS/language-service`, Ls, n);
                            }
                        }
                        return this[r._op](r);
                    }, this), r === or) {
                        const n = ar.currentOp;
                        return n._op === qo || n._op === ki ? or : (ar.currentOp = null, n._op === Xt || n._op === Yt ? n : ft(rr(n)));
                    }
                } catch (n) {
                    r !== or && !W(r, "_op") || !(r._op in this) ? r = I4(`Not a valid effect: ${Os(r)}`) : c8(n) ? r = ft(ye(rr(n), Cr(In))) : r = Au(n);
                }
            }
        }
        run = ()=>{
            this.drainQueueOnCurrentThread();
        };
    }
    const _7 = rt("effect/FiberRef/currentMinimumLogLevel", ()=>ge(rU("Info"))), u7 = (e)=>Yf((t)=>{
            const r = D6(t.context, Gi);
            Dl(r, Ab).unsafe.log(e.log(t));
        }), l7 = rt(Symbol.for("effect/Logger/defaultLogger"), ()=>u7(zj)), f7 = rt(Symbol.for("effect/Logger/tracerLogger"), ()=>Yf(({ annotations: e, cause: t, context: r, fiberId: n, logLevel: s, message: i })=>{
            const a = Zb(co(Yi(r, Hr), Pb));
            if (a._tag === "None" || a.value._tag === "ExternalSpan") return;
            const _ = Xh(Yi(r, Gi), xf), f = {};
            for (const [g, h] of e)f[g] = h;
            f["effect.fiberId"] = wN(n), f["effect.logLevel"] = s.label, t !== null && t._tag !== "Empty" && (f["effect.cause"] = si(t, {
                renderErrorCause: !0
            })), a.value.event(Os(Array.isArray(i) && i.length === 1 ? i[0] : i), _.unsafeCurrentTimeNanos(), f);
        })), d7 = rt(Symbol.for("effect/FiberRef/currentLoggers"), ()=>W4(tf(l7, f7))), g7 = w((e)=>Un(e[0]), (e, t)=>pf(gf(e, (r)=>p7((n)=>t(r, n))))), p7 = (e)=>ht((t)=>{
            const r = t.getFiberRefs(), n = zB(t.currentRuntimeFlags, Nn);
            return T(E7, (s)=>Nu(s, (i)=>ht((a)=>{
                        const _ = a.getFiberRefs(), f = a.currentRuntimeFlags, g = Xi(_, r), h = Mr(f, n), b = Xi(r, _);
                        return a.setFiberRefs(Qi(g, a.id(), r)), Zi(P4(e(i), h), P(()=>{
                            a.setFiberRefs(Qi(b, a.id(), a.getFiberRefs()));
                        }));
                    })));
        }), h7 = (e)=>{
        if (Array.isArray(e) || zp(e)) return [
            e,
            M()
        ];
        const t = Object.keys(e), r = t.length;
        return [
            t.map((n)=>e[n]),
            N((n)=>{
                const s = {};
                for(let i = 0; i < r; i++)s[t[i]] = n[i];
                return s;
            })
        ];
    }, w7 = (e, t, r)=>{
        const n = [];
        for (const s of e)n.push(Vs(s));
        return T(Ws(n, _t, {
            concurrency: r?.concurrency,
            batching: r?.batching,
            concurrentFinalizers: r?.concurrentFinalizers
        }), (s)=>{
            const i = M(), a = s.length, _ = new Array(a), f = new Array(a);
            let g = !1;
            for(let h = 0; h < a; h++){
                const b = s[h];
                b._tag === "Left" ? (_[h] = N(b.left), g = !0) : (f[h] = b.right, _[h] = i);
            }
            return g ? t._tag === "Some" ? Nt(t.value(_)) : Nt(_) : r?.discard ? It : t._tag === "Some" ? G(t.value(f)) : G(f);
        });
    }, b7 = (e, t, r)=>{
        const n = [];
        for (const s of e)n.push(Vs(s));
        return r?.discard ? Ws(n, _t, {
            concurrency: r?.concurrency,
            batching: r?.batching,
            discard: !0,
            concurrentFinalizers: r?.concurrentFinalizers
        }) : ut(Ws(n, _t, {
            concurrency: r?.concurrency,
            batching: r?.batching,
            concurrentFinalizers: r?.concurrentFinalizers
        }), (s)=>t._tag === "Some" ? t.value(s) : s);
    }, Py = (e, t)=>{
        const [r, n] = h7(e);
        return t?.mode === "validate" ? w7(r, n, t) : t?.mode === "either" ? b7(r, n, t) : t?.discard !== !0 && n._tag === "Some" ? ut(Ws(r, _t, t), n.value) : Ws(r, _t, t);
    }, Ws = w((e)=>zp(e[0]), (e, t, r)=>ht((n)=>{
            const s = r?.batching === !0 || r?.batching === "inherit" && n.getFiberRef(r8);
            return r?.discard ? Mg(r.concurrency, ()=>Wn(qu, r?.concurrentFinalizers)((i)=>s ? Nr(e, (a, _)=>i(t(a, _)), !0, !1, 1) : ac(e, (a, _)=>i(t(a, _)))), ()=>Wn(Vu, r?.concurrentFinalizers)((i)=>Nr(e, (a, _)=>i(t(a, _)), s, !1)), (i)=>Wn(Hu(i), r?.concurrentFinalizers)((a)=>Nr(e, (_, f)=>a(t(_, f)), s, !1, i))) : Mg(r?.concurrency, ()=>Wn(qu, r?.concurrentFinalizers)((i)=>s ? sl(e, 1, (a, _)=>i(t(a, _)), !0) : fr(e, (a, _)=>i(t(a, _)))), ()=>Wn(Vu, r?.concurrentFinalizers)((i)=>My(e, (a, _)=>i(t(a, _)), s)), (i)=>Wn(Hu(i), r?.concurrentFinalizers)((a)=>sl(e, i, (_, f)=>a(t(_, f)), s)));
        })), My = (e, t, r)=>ct(()=>{
            const n = Et(e), s = new Array(n.length);
            return Me(Nr(n, (a, _)=>T(t(a, _), (f)=>P(()=>s[_] = f)), r, !1), G(s));
        }), Nr = (e, t, r, n, s)=>sr((i)=>A4((a)=>ht((_)=>{
                    let f = Array.from(e).reverse(), g = f.length;
                    if (g === 0) return It;
                    let h = 0, b = !1;
                    const S = s ? Math.min(f.length, s) : f.length, k = new Set, x = new Array, $ = ()=>k.forEach((j)=>{
                            j.currentScheduler.scheduleTask(()=>{
                                j.unsafeInterruptAsFork(_.id());
                            }, 0, j);
                        }), C = new Array, z = new Array, V = new Array, B = ()=>{
                        const j = x.filter(({ exit: st })=>st._tag === "Failure").sort((st, it)=>st.index < it.index ? -1 : st.index === it.index ? 0 : 1).map(({ exit: st })=>st);
                        return j.length === 0 && j.push(Le), j;
                    }, D = (j, st = !1)=>{
                        const it = pf(a(j)), X = m7(it, _, _.currentRuntimeFlags, Gf);
                        return _.currentScheduler.scheduleTask(()=>{
                            st && X.unsafeInterruptAsFork(_.id()), X.resume(it);
                        }, 0, X), X;
                    }, H = ()=>{
                        n || (g -= f.length, f = []), b = !0, $();
                    }, L = r ? T4 : ln, Z = D(Tn((j)=>{
                        const st = (X, gt)=>{
                            X._op === "Blocked" ? V.push(X) : (x.push({
                                index: gt,
                                exit: X
                            }), X._op === "Failure" && !b && H());
                        }, it = ()=>{
                            if (f.length > 0) {
                                const X = f.pop();
                                let gt = h++;
                                const te = ()=>{
                                    const Rt = f.pop();
                                    return gt = h++, T(wf(), ()=>T(L(i(t(Rt, gt))), Ht));
                                }, Ht = (Rt)=>f.length > 0 && (st(Rt, gt), f.length > 0) ? te() : G(Rt), Se = T(L(i(t(X, gt))), Ht), At = D(Se);
                                C.push(At), k.add(At), b && At.currentScheduler.scheduleTask(()=>{
                                    At.unsafeInterruptAsFork(_.id());
                                }, 0, At), At.addObserver((Rt)=>{
                                    let $e;
                                    if (Rt._op === "Failure" ? $e = Rt : $e = Rt.effect_instruction_i0, z.push(At), k.delete(At), st($e, gt), x.length === g) j(G(zt(Oi(B(), {
                                        parallel: !0
                                    }), ()=>Le)));
                                    else if (V.length + x.length === g) {
                                        const Wr = B(), xc = V.map((wt)=>wt.effect_instruction_i0).reduce(Uw);
                                        j(G(Gw(xc, Nr([
                                            zt(Oi(Wr, {
                                                parallel: !0
                                            }), ()=>Le),
                                            ...V.map((wt)=>wt.effect_instruction_i1)
                                        ], (wt)=>wt, r, !0, s))));
                                    } else it();
                                });
                            }
                        };
                        for(let X = 0; X < S; X++)it();
                    }));
                    return Or(Hs(oc(i(dy(Z))), fc({
                        onFailure: (j)=>{
                            H();
                            const st = V.length + 1, it = Math.min(typeof s == "number" ? s : V.length, V.length), X = Array.from(V);
                            return Tn((gt)=>{
                                let te = 0, Ht = 0;
                                const Se = (Rt, $e)=>(Wr)=>{
                                        te++, te === st && gt(xt(ft(j))), X.length > 0 && $e && At();
                                    }, At = ()=>{
                                    D(X.pop(), !0).addObserver(Se(Ht, !0)), Ht++;
                                };
                                Z.addObserver(Se(Ht, !1)), Ht++;
                                for(let Rt = 0; Rt < it; Rt++)At();
                            });
                        },
                        onSuccess: ()=>fr(z, (j)=>j.inheritAll)
                    })));
                }))), sl = (e, t, r, n)=>ct(()=>{
            const s = Et(e), i = new Array(s.length);
            return Me(Nr(s, (_, f)=>ut(r(_, f), (g)=>i[f] = g), n, !1, t), G(i));
        }), Ny = (e)=>S7(e, Gf), y7 = (e, t, r, n = null)=>{
        const s = By(e, t, r, n);
        return s.resume(e), s;
    }, m7 = (e, t, r, n = null)=>By(e, t, r, n), By = (e, t, r, n = null)=>{
        const s = Fw(), i = t.getFiberRefs(), a = j6(i, s), _ = new $y(s, a, r), f = Yi(a, Hr), g = _.currentSupervisor;
        return g.onStart(f, e, N(t), _), _.addObserver((b)=>g.onEnd(b, _)), (n !== null ? n : m(t.getFiberRef(Mu), zt(()=>t.scope()))).add(r, _), _;
    }, S7 = (e, t)=>ht((r, n)=>G(y7(e, r, n.runtimeFlags, t))), Dg = (e)=>oi((t)=>se(co(t, jn), {
                onNone: ()=>e,
                onSome: (r)=>{
                    switch(r.strategy._tag){
                        case "Parallel":
                            return e;
                        case "Sequential":
                        case "ParallelN":
                            return T(_r(r, Vu), (n)=>Eo(e, n));
                    }
                }
            })), qg = (e)=>(t)=>oi((r)=>se(co(r, jn), {
                    onNone: ()=>t,
                    onSome: (n)=>n.strategy._tag === "ParallelN" && n.strategy.parallelism === e ? t : T(_r(n, Hu(e)), (s)=>Eo(t, s))
                })), Wn = (e, t)=>(r)=>oi((n)=>se(co(n, jn), {
                    onNone: ()=>r(_t),
                    onSome: (s)=>{
                        if (t === !0) {
                            const i = e._tag === "Parallel" ? Dg : e._tag === "Sequential" ? Vg : qg(e.parallelism);
                            switch(s.strategy._tag){
                                case "Parallel":
                                    return i(r(Dg));
                                case "Sequential":
                                    return i(r(Vg));
                                case "ParallelN":
                                    return i(r(qg(s.strategy.parallelism)));
                            }
                        } else return r(_t);
                    }
                })), Uy = (e)=>T(jn, e), F7 = (e)=>T(Zf(), (t)=>Hs(e(t), (r)=>t.close(r))), Vg = (e)=>oi((t)=>se(co(t, jn), {
                onNone: ()=>e,
                onSome: (r)=>{
                    switch(r.strategy._tag){
                        case "Sequential":
                            return e;
                        case "Parallel":
                        case "ParallelN":
                            return T(_r(r, qu), (n)=>Eo(e, n));
                    }
                }
            })), k7 = (e)=>v7(Gi, Xr(Cf, e)), x7 = w((e)=>Un(e[1]), (e, t, r, n)=>ut(Py([
            e,
            t
        ], {
            concurrency: n?.concurrent ? 2 : 1,
            batching: n?.batching,
            concurrentFinalizers: n?.concurrentFinalizers
        }), ([s, i])=>r(s, i))), jn = Mn("effect/Scope"), E7 = jn, I7 = (e, t)=>{
        e.state._tag === "Open" && e.state.finalizers.set({}, t);
    }, R7 = {
        [ug]: ug,
        [lg]: lg,
        pipe () {
            return q(this, arguments);
        },
        fork (e) {
            return P(()=>{
                const t = jy(e);
                if (this.state._tag === "Closed") return t.state = this.state, t;
                const r = {}, n = (s)=>t.close(s);
                return this.state.finalizers.set(r, n), I7(t, (s)=>P(()=>{
                        this.state._tag === "Open" && this.state.finalizers.delete(r);
                    })), t;
            });
        },
        close (e) {
            return ct(()=>{
                if (this.state._tag === "Closed") return It;
                const t = Array.from(this.state.finalizers.values()).reverse();
                return this.state = {
                    _tag: "Closed",
                    exit: e
                }, t.length === 0 ? It : OU(this.strategy) ? m(fr(t, (r)=>ln(r(e))), T((r)=>m(Oi(r), Ei(D_), zt(()=>Le)))) : TU(this.strategy) ? m(My(t, (r)=>ln(r(e)), !1), T((r)=>m(Oi(r, {
                        parallel: !0
                    }), Ei(D_), zt(()=>Le)))) : m(sl(t, this.strategy.parallelism, (r)=>ln(r(e)), !1), T((r)=>m(Oi(r, {
                        parallel: !0
                    }), Ei(D_), zt(()=>Le))));
            });
        },
        addFinalizer (e) {
            return ct(()=>this.state._tag === "Closed" ? e(this.state.exit) : (this.state.finalizers.set({}, e), It));
        }
    }, jy = (e = fn)=>{
        const t = Object.create(R7);
        return t.strategy = e, t.state = {
            _tag: "Open",
            finalizers: new Map
        }, t;
    }, Zf = (e = fn)=>P(()=>jy(e)), Eo = w(2, (e, t)=>x8(e, _o(Kl(jn, t)))), O7 = (e)=>ii(e, {
            differ: Z5,
            fork: Ti
        }), T7 = w(2, (e, t)=>Or(g7(T(_c(e), (r)=>Ae(Sa(e, t), r)), (r)=>Sa(e, r)))), v7 = w(2, (e, t)=>bo(e, (r)=>T7(e, t(r)))), Hg = Y4($B), C7 = O7(mc), Zi = w(2, (e, t)=>sr((r)=>Rr(r(e), {
                onFailure: (n)=>Rr(t, {
                        onFailure: (s)=>ie(ye(n, s)),
                        onSuccess: ()=>ie(n)
                    }),
                onSuccess: (n)=>Ae(t, n)
            }))), z7 = (e, t, r)=>eb((n)=>Zi(T(Ny(rb(e)), (s)=>Tn((i)=>{
                    const a = t.map((g)=>g.listeners.count), _ = ()=>{
                        a.every((g)=>g === 0) && t.every((g)=>g.result.state.current._tag === "Pending" ? !0 : !!(g.result.state.current._tag === "Done" && lc(g.result.state.current.effect) && g.result.state.current.effect._tag === "Failure" && n4(g.result.state.current.effect.cause))) && (f.forEach((g)=>g()), r?.(), i(N4(s)));
                    };
                    s.addObserver((g)=>{
                        f.forEach((h)=>h()), i(g);
                    });
                    const f = t.map((g, h)=>{
                        const b = (S)=>{
                            a[h] = S, _();
                        };
                        return g.listeners.addObserver(b), ()=>g.listeners.removeObserver(b);
                    });
                    return _(), P(()=>{
                        f.forEach((g)=>g());
                    });
                })), ct(()=>{
                const s = t.flatMap((i)=>i.state.completed ? [] : [
                        i
                    ]);
                return ac(s, (i)=>V5(i.request, g8(n)));
            }))), Ly = e4, Ky = si, Dy = Bu, A7 = Eo, $7 = _r;
    class P7 {
        permits;
        waiters = new Set;
        taken = 0;
        constructor(t){
            this.permits = t;
        }
        get free() {
            return this.permits - this.taken;
        }
        take = (t)=>Zw((r)=>{
                if (this.free < t) {
                    const n = ()=>{
                        this.free < t || (this.waiters.delete(n), r(ct(()=>this.free < t ? this.take(t) : (this.taken += t, G(t)))));
                    };
                    return this.waiters.add(n), P(()=>{
                        this.waiters.delete(n);
                    });
                }
                r(ct(()=>this.free < t ? this.take(t) : (this.taken += t, G(t))));
            });
        updateTakenUnsafe(t, r) {
            return this.taken = r(this.taken), this.waiters.size > 0 && t.getFiberRef(qf).scheduleTask(()=>{
                const n = this.waiters.values();
                let s = n.next();
                for(; s.done === !1 && this.free > 0;)s.value(), s = n.next();
            }, t.getFiberRef(mo), t), G(this.free);
        }
        updateTaken(t) {
            return ht((r)=>this.updateTakenUnsafe(r, t));
        }
        resize = (t)=>Or(ht((r)=>(this.permits = t, this.free < 0 ? It : this.updateTakenUnsafe(r, (n)=>n))));
        release = (t)=>this.updateTaken((r)=>r - t);
        releaseAll = this.updateTaken((t)=>0);
        withPermits = (t)=>(r)=>sr((n)=>T(n(this.take(t)), (s)=>Zi(n(r), this.release(s))));
        withPermitsIfAvailable = (t)=>(r)=>sr((n)=>ct(()=>this.free < t ? kU : (this.taken += t, Zi(n(hU(r)), this.release(t)))));
    }
    const M7 = (e)=>new P7(e), N7 = "effect/Ref/SynchronizedRef", B7 = Symbol.for(N7), U7 = {
        _A: (e)=>e
    };
    class j7 extends $f {
        ref;
        withLock;
        [B7] = U7;
        [Ub] = jb;
        [ka] = ka;
        constructor(t, r){
            super(), this.ref = t, this.withLock = r, this.get = xa(this.ref);
        }
        get;
        commit() {
            return this.get;
        }
        modify(t) {
            return this.modifyEffect((r)=>G(t(r)));
        }
        modifyEffect(t) {
            return this.withLock(m(T(xa(this.ref), t), T(([r, n])=>Ae(Kb(this.ref, n), r))));
        }
    }
    const L7 = (e)=>P(()=>qy(e)), qy = (e)=>{
        const t = Lb(e), r = M7(1);
        return new j7(t, r.withPermits(1));
    }, il = Symbol.for("effect/ManagedRuntime"), K7 = "Fresh", D7 = "FromEffect", q7 = "Scoped", V7 = "Suspend", H7 = "Provide", J7 = "ProvideMerge", W7 = "MergeAll", G7 = bf, ci = (e)=>function() {
            if (arguments.length === 1) {
                const t = arguments[0];
                return (r, ...n)=>e(t, r, ...n);
            }
            return e.apply(this, arguments);
        }, Io = ci((e, t, r)=>{
        const n = Fw(), s = [
            [
                Hr,
                [
                    [
                        n,
                        e.context
                    ]
                ]
            ]
        ];
        r?.scheduler && s.push([
            qf,
            [
                [
                    n,
                    r.scheduler
                ]
            ]
        ]);
        let i = q6(e.fiberRefs, {
            entries: s,
            forkAs: n
        });
        r?.updateRefs && (i = r.updateRefs(i, n));
        const a = new $y(n, i, e.runtimeFlags);
        let _ = t;
        r?.scope && (_ = T($7(r.scope, fn), (g)=>Me(i8(g, eb((h)=>Q(h, a.id()) ? It : bf(a, h))), Hs(t, (h)=>Dy(g, h)))));
        const f = a.currentSupervisor;
        return f !== mc && (f.onStart(e.context, _, M(), a), a.addObserver((g)=>f.onEnd(g, a))), Gf.add(e.runtimeFlags, a), r?.immediate === !1 ? a.resume(_) : a.start(_), a;
    }), ol = ci((e, t, r = {})=>{
        const n = Io(e, t, r);
        return r.onExit && n.addObserver((s)=>{
            r.onExit(s);
        }), (s, i)=>ol(e)(m(n, G7(s ?? In)), {
                ...i,
                onExit: i?.onExit ? (a)=>i.onExit(I8(a)) : void 0
            });
    }), Vy = ci((e, t)=>{
        const r = td(e)(t);
        if (r._tag === "Failure") throw Hy(r.effect_instruction_i0);
        return r.effect_instruction_i0;
    });
    class Y7 extends Error {
        fiber;
        _tag = "AsyncFiberException";
        constructor(t){
            super(`Fiber #${t.id().id} cannot be resolved synchronously. This is caused by using runSync on an effect that performs async work`), this.fiber = t, this.name = this._tag, this.stack = this.message;
        }
    }
    const X7 = (e)=>{
        const t = Error.stackTraceLimit;
        Error.stackTraceLimit = 0;
        const r = new Y7(e);
        return Error.stackTraceLimit = t, r;
    }, W_ = Symbol.for("effect/Runtime/FiberFailure"), No = Symbol.for("effect/Runtime/FiberFailure/Cause");
    class Q7 extends Error {
        [W_];
        [No];
        constructor(t){
            const r = Jw(t)[0];
            super(r?.message || "An error has occurred"), this[W_] = W_, this[No] = t, this.name = r ? `(FiberFailure) ${r.name}` : "FiberFailure", r?.stack && (this.stack = r.stack);
        }
        toJSON() {
            return {
                _id: "FiberFailure",
                cause: this[No].toJSON()
            };
        }
        toString() {
            return "(FiberFailure) " + si(this[No], {
                renderErrorCause: !0
            });
        }
        [dt]() {
            return this.toString();
        }
    }
    const Hy = (e)=>{
        const t = Error.stackTraceLimit;
        Error.stackTraceLimit = 0;
        const r = new Q7(e);
        return Error.stackTraceLimit = t, r;
    }, Jy = (e)=>{
        const t = e;
        switch(t._op){
            case "Failure":
            case "Success":
                return t;
            case "Left":
                return pg(t.left);
            case "Right":
                return xt(t.right);
            case "Some":
                return xt(t.value);
            case "None":
                return pg(new pb);
        }
    }, td = ci((e, t)=>{
        const r = Jy(t);
        if (r) return r;
        const n = new Df, s = Io(e)(t, {
            scheduler: n
        });
        n.flush();
        const i = s.unsafePoll();
        return i || l8(lf(X7(s), Ff(s)));
    }), Wy = ci((e, t, r)=>ed(e, t, r).then((n)=>{
            switch(n._tag){
                case Xt:
                    return n.effect_instruction_i0;
                case Yt:
                    throw Hy(n.effect_instruction_i0);
            }
        })), ed = ci((e, t, r)=>new Promise((n)=>{
            const s = Jy(t);
            s && n(s);
            const i = Io(e)(t);
            i.addObserver((a)=>{
                n(a);
            }), r?.signal !== void 0 && (r.signal.aborted ? i.unsafeInterruptAsFork(i.id()) : r.signal.addEventListener("abort", ()=>{
                i.unsafeInterruptAsFork(i.id());
            }, {
                once: !0
            }));
        }));
    class Gy {
        context;
        runtimeFlags;
        fiberRefs;
        constructor(t, r, n){
            this.context = t, this.runtimeFlags = r, this.fiberRefs = n;
        }
        pipe() {
            return q(this, arguments);
        }
    }
    const Z7 = (e)=>new Gy(e.context, e.runtimeFlags, e.fiberRefs), tL = ()=>ht((e, t)=>G(new Gy(e.getFiberRef(Hr), t.runtimeFlags, e.getFiberRefs()))), eL = Nw(Nn, Pw, $w), Dr = Z7({
        context: Ja(),
        runtimeFlags: eL,
        fiberRefs: V6()
    }), al = Io(Dr), G_ = Wy(Dr), rL = ed(Dr), cl = Vy(Dr), nL = td(Dr), sL = w(2, (e, t)=>e.modifyEffect(t)), iL = "effect/Layer", Yy = Symbol.for(iL), oL = {
        _RIn: (e)=>e,
        _E: (e)=>e,
        _ROut: (e)=>e
    }, Gs = {
        [Yy]: oL,
        pipe () {
            return q(this, arguments);
        }
    }, aL = "effect/Layer/MemoMap", Y_ = Symbol.for(aL), cL = Wa()("effect/Layer/CurrentMemoMap", {
        defaultValue: ()=>Qy()
    }), _L = (e)=>W(e, Yy), uL = (e)=>e._op_layer === K7;
    class Xy {
        ref;
        [Y_];
        constructor(t){
            this.ref = t, this[Y_] = Y_;
        }
        getOrElseMemoize(t, r) {
            return m(sL(this.ref, (n)=>{
                const s = n.get(t);
                if (s !== void 0) {
                    const [i, a] = s, _ = m(i, T(([f, g])=>m(Xb(f), Ae(g))), Hs(fc({
                        onFailure: ()=>It,
                        onSuccess: ()=>Nu(r, a)
                    })));
                    return G([
                        _,
                        n
                    ]);
                }
                return m(Lu(0), T((i)=>m(wb(), T((a)=>m(Lu(()=>It), ut((_)=>{
                            const f = sr((h)=>m(Zf(), T((b)=>m(h(T(em(t, b, !0), (S)=>bU(S(this)))), ln, T((S)=>{
                                        switch(S._tag){
                                            case Yt:
                                                return m(m8(a, S.effect_instruction_i0), Me(Bu(b, S)), Me(ie(S.effect_instruction_i0)));
                                            case Xt:
                                                return m(Kb(_, (k)=>m(Bu(b, k), ob(_U(i, (x)=>[
                                                            x === 1,
                                                            x - 1
                                                        ])), Or)), Me(vg(i, (k)=>k + 1)), Me(Nu(r, (k)=>m(P(()=>n.delete(t)), Me(xa(_)), T((x)=>x(k))))), Me(S8(a, S.effect_instruction_i0)), Ae(S.effect_instruction_i0[1]));
                                        }
                                    }))))), g = [
                                m(dc(a), Hs(p8({
                                    onFailure: ()=>It,
                                    onSuccess: ()=>vg(i, (h)=>h + 1)
                                }))),
                                (h)=>m(xa(_), T((b)=>b(h)))
                            ];
                            return [
                                f,
                                uL(t) ? n : n.set(t, g)
                            ];
                        }))))));
            }), oc);
        }
    }
    const lL = ct(()=>ut(L7(new Map), (e)=>new Xy(e))), Qy = ()=>new Xy(qy(new Map)), Zy = w(2, (e, t)=>T(lL, (r)=>tm(e, r, t))), tm = w(3, (e, t, r)=>T(em(e, r), (n)=>FU(n(t), cL, t))), em = (e, t, r = !1)=>{
        const n = e;
        switch(n._op_layer){
            case "Locally":
                return P(()=>(s)=>n.f(s.getOrElseMemoize(n.self, t)));
            case "ExtendScope":
                return P(()=>(s)=>Uy((i)=>s.getOrElseMemoize(n.layer, i)));
            case "Fold":
                return P(()=>(s)=>m(s.getOrElseMemoize(n.layer, t), Rr({
                            onFailure: (i)=>s.getOrElseMemoize(n.failureK(i), t),
                            onSuccess: (i)=>s.getOrElseMemoize(n.successK(i), t)
                        })));
            case "Fresh":
                return P(()=>(s)=>m(n.layer, Zy(t)));
            case "FromEffect":
                return P(r ? ()=>(s)=>n.effect : ()=>(s)=>s.getOrElseMemoize(e, t));
            case "Provide":
                return P(()=>(s)=>m(s.getOrElseMemoize(n.first, t), T((i)=>m(s.getOrElseMemoize(n.second, t), So(i)))));
            case "Scoped":
                return P(r ? ()=>(s)=>Eo(n.effect, t) : ()=>(s)=>s.getOrElseMemoize(e, t));
            case "Suspend":
                return P(()=>(s)=>s.getOrElseMemoize(n.evaluate(), t));
            case "ProvideMerge":
                return P(()=>(s)=>m(s.getOrElseMemoize(n.first, t), M4(s.getOrElseMemoize(n.second, t), n.zipK)));
            case "ZipWith":
                return ab(function*() {
                    const s = yield* _r(t, Du), i = yield* _r(s, fn), a = yield* _r(s, fn);
                    return (_)=>m(_.getOrElseMemoize(n.first, i), x7(_.getOrElseMemoize(n.second, a), n.zipK, {
                            concurrent: !0
                        }));
                });
            case "MergeAll":
                {
                    const s = n.layers;
                    return ut(_r(t, Du), (i)=>(a)=>{
                            const _ = new Array(s.length);
                            return ut(Nr(s, $4(function*(f, g) {
                                const h = yield* _r(i, fn), b = yield* a.getOrElseMemoize(f, h);
                                _[g] = b;
                            }), !1, !1), ()=>tM(..._));
                        });
                }
        }
    }, fL = ()=>rd(yb()), dL = w(2, (e, t)=>{
        const r = Yh(e), n = r ? e : t;
        return rd(ut(r ? t : e, (i)=>Kl(n, i)));
    });
    function rd(e) {
        const t = Object.create(Gs);
        return t._op_layer = D7, t.effect = e, t;
    }
    let nd, gL, pL, hL, wL, bL, yL, Jg, Wg, mL, rm, SL, FL, vi, Bo, Fe, kL, xL, za, Gn, IL, OL, nm, sm, TL, vL, CL, zL, AL, $L, PL, ML, Ln, Aa, im, om, NL, BL, UL, jL, LL, KL, am, DL, Gg, cm, qL, VL, HL, _m, JL, WL, GL;
    nd = (...e)=>{
        const t = Object.create(Gs);
        return t._op_layer = W7, t.layers = e, t;
    };
    gL = (e)=>pL(m(e, Ae(Ja())));
    pL = (e)=>{
        const t = Object.create(Gs);
        return t._op_layer = q7, t.effect = e, t;
    };
    hL = w(2, (e, t)=>{
        const r = Yh(e);
        return rd(G(Kl(r ? e : t, r ? t : e)));
    });
    wL = (e)=>{
        const t = Object.create(Gs);
        return t._op_layer = V7, t.evaluate = e, t;
    };
    bL = w(2, (e, t)=>T(Uy((r)=>tm(e, t, r)), (r)=>m(tL(), So(r))));
    yL = w(2, (e, t)=>wL(()=>{
            const r = Object.create(Gs);
            return r._op_layer = H7, r.first = Object.create(Gs, {
                _op_layer: {
                    value: J7,
                    enumerable: !0
                },
                first: {
                    value: fL(),
                    enumerable: !0
                },
                second: {
                    value: Array.isArray(t) ? nd(...t) : t
                },
                zipK: {
                    value: (n, s)=>m(n, _o(s))
                }
            }), r.second = e, r;
        }));
    Jg = w(2, (e, t)=>F7((r)=>T(Zy(t, r), (n)=>Sf(e, n))));
    Wg = w(2, (e, t)=>{
        const r = Xi(Dr.fiberRefs, t.fiberRefs), n = Mr(Dr.runtimeFlags, t.runtimeFlags);
        return sr((s)=>ht((i)=>{
                const a = i.getFiberRef(Hr), _ = i.getFiberRefs(), f = Qi(i.id(), _)(r), g = i.currentRuntimeFlags, h = cs(n)(g), b = Xi(f, _), S = Mr(h, g);
                return i.setFiberRefs(f), i.currentRuntimeFlags = h, Zi(Sf(s(e), _o(a, t.context)), ht((k)=>(k.setFiberRefs(Qi(k.id(), k.getFiberRefs())(b)), k.currentRuntimeFlags = cs(S)(k.currentRuntimeFlags), It)));
            }));
    });
    mL = w(2, (e, t)=>Array.isArray(t) ? Jg(e, nd(...t)) : _L(t) ? Jg(e, t) : ZP(t) ? Sf(e, t) : il in t ? T(t.runtimeEffect, (r)=>Wg(e, r)) : Wg(e, t));
    rm = function() {
        const e = Symbol.for("effect/Data/Error/plainArgs");
        return {
            BaseEffectError: class extends yf {
                constructor(r){
                    super(r?.message, r?.cause ? {
                        cause: r.cause
                    } : void 0), r && (Object.assign(this, r), Object.defineProperty(this, e, {
                        value: r,
                        enumerable: !1
                    }));
                }
                toJSON() {
                    return {
                        ...this[e],
                        ...this
                    };
                }
            }
        }.BaseEffectError;
    }();
    SL = (e)=>{
        const t = {
            BaseEffectError: class extends rm {
                _tag = e;
            }
        };
        return t.BaseEffectError.prototype.name = e, t.BaseEffectError;
    };
    FL = Un;
    Rq = mU;
    Oq = Py;
    vi = Ws;
    sd = ab;
    Bo = ct;
    Tq = P;
    Fe = It;
    kL = zu;
    vq = wU;
    xL = xU;
    za = ut;
    EL = wo;
    Cq = mL;
    Gn = Vs;
    Je = T;
    zq = O4;
    IL = al;
    RL = cl;
    OL = (e)=>gL(k7(e));
    nm = dL;
    sm = nd;
    TL = hL;
    vL = yL;
    CL = OL;
    zL = Fb;
    AL = D8;
    $L = "effect/Config";
    PL = Symbol.for($L);
    ML = {
        _A: (e)=>e
    };
    Ln = {
        ...An,
        [PL]: ML,
        commit () {
            return P6(this);
        }
    };
    Aa = w(2, (e, t)=>im(e, (r)=>J(t(r))));
    im = w(2, (e, t)=>{
        const r = Object.create(Ln);
        return r._tag = Rb, r.original = e, r.mapOrFail = t, r;
    });
    om = w(2, (e, t)=>{
        const r = Object.create(Ln);
        return r._tag = Ob, r.name = t, r.config = e, r;
    });
    NL = w(2, (e, t)=>{
        const r = Object.create(Ln);
        return r._tag = Eb, r.first = e, r.second = DL(t.orElse), r.condition = t.if, r;
    });
    BL = (e)=>m(e, Aa(N), NL({
            orElse: ()=>am(M()),
            if: AL
        }));
    UL = (e, t)=>{
        const r = Object.create(Ln);
        return r._tag = Tb, r.description = e, r.parse = t, r;
    };
    jL = (e)=>{
        const t = UL("a text property", J);
        return e === void 0 ? t : om(t, e);
    };
    LL = (e)=>Array.isArray(e) ? Gg(e) : Symbol.iterator in e ? Gg([
            ...e
        ]) : KL(e);
    KL = (e)=>{
        const t = Object.entries(e);
        let r = m(t[0][1], Aa((s)=>({
                [t[0][0]]: s
            })));
        if (t.length === 1) return r;
        const n = t.slice(1);
        for (const [s, i] of n)r = m(r, cm(i, (a, _)=>({
                ...a,
                [s]: _
            })));
        return r;
    };
    am = (e)=>{
        const t = Object.create(Ln);
        return t._tag = xb, t.value = e, t.parse = ()=>J(e), t;
    };
    DL = (e)=>{
        const t = Object.create(Ln);
        return t._tag = Ib, t.config = e, t;
    };
    Gg = (e)=>{
        if (e.length === 0) return am([]);
        if (e.length === 1) return Aa(e[0], (r)=>[
                r
            ]);
        let t = Aa(e[0], (r)=>[
                r
            ]);
        for(let r = 1; r < e.length; r++){
            const n = e[r];
            t = m(t, cm(n, (s, i)=>[
                    ...s,
                    i
                ]));
        }
        return t;
    };
    cm = w(3, (e, t, r)=>{
        const n = Object.create(Ln);
        return n._tag = vb, n.left = e, n.right = t, n.zip = r, n;
    });
    qL = LL;
    VL = im;
    HL = om;
    _m = BL;
    JL = jL;
    WL = o6;
    GL = f6;
    class Wt {
        path;
        actual;
        issue;
        _tag = "Pointer";
        constructor(t, r, n){
            this.path = t, this.actual = r, this.issue = n;
        }
    }
    class Yg {
        actual;
        message;
        _tag = "Unexpected";
        constructor(t, r){
            this.actual = t, this.message = r;
        }
    }
    class pi {
        ast;
        message;
        _tag = "Missing";
        actual = void 0;
        constructor(t, r){
            this.ast = t, this.message = r;
        }
    }
    class Ot {
        ast;
        actual;
        issues;
        output;
        _tag = "Composite";
        constructor(t, r, n, s){
            this.ast = t, this.actual = r, this.issues = n, this.output = s;
        }
    }
    class X_ {
        ast;
        actual;
        kind;
        issue;
        _tag = "Refinement";
        constructor(t, r, n, s){
            this.ast = t, this.actual = r, this.kind = n, this.issue = s;
        }
    }
    class Q_ {
        ast;
        actual;
        kind;
        issue;
        _tag = "Transformation";
        constructor(t, r, n, s){
            this.ast = t, this.actual = r, this.kind = n, this.issue = s;
        }
    }
    class Qr {
        ast;
        actual;
        message;
        _tag = "Type";
        constructor(t, r, n){
            this.ast = t, this.actual = r, this.message = n;
        }
    }
    class Xg {
        ast;
        actual;
        message;
        _tag = "Forbidden";
        constructor(t, r, n){
            this.ast = t, this.actual = r, this.message = n;
        }
    }
    const Qg = Symbol.for("effect/Schema/ParseErrorTypeId");
    let YL = class extends SL("ParseError") {
        [Qg] = Qg;
        get message() {
            return this.toString();
        }
        toString() {
            return Ci.formatIssueSync(this.issue);
        }
        toJSON() {
            return {
                _id: "ParseError",
                message: this.toString()
            };
        }
        [dt]() {
            return this.toJSON();
        }
    };
    const XL = (e)=>new YL({
            issue: e
        }), de = a3, dn = w(2, (e, t)=>de(e) ? oo(e, {
            onLeft: K,
            onRight: t
        }) : Je(e, t)), We = w(2, (e, t)=>de(e) ? c3(e, t) : za(e, t)), Z_ = w(2, (e, t)=>de(e) ? Yp(e, t) : EL(e, t)), um = w(2, (e, t)=>de(e) ? oo(e, {
            onLeft: t,
            onRight: J
        }) : kL(e, t)), lm = (e, t)=>t === void 0 || hr(t) ? e : e === void 0 ? t : {
            ...e,
            ...t
        }, fm = (e, t, r)=>{
        const n = Ee(e, t);
        return (s, i)=>n(s, lm(r, i));
    }, QL = (e, t, r)=>{
        const n = fm(e, t, r);
        return (s, i)=>vl(n(s, i), XL);
    }, ZL = (e, t)=>fm(e.ast, !0, t), tK = (e, t)=>QL(Ve(e.ast), !0, t), eK = rt(Symbol.for("effect/ParseResult/decodeMemoMap"), ()=>new WeakMap), rK = rt(Symbol.for("effect/ParseResult/encodeMemoMap"), ()=>new WeakMap), Ee = (e, t)=>{
        const r = t ? eK : rK, n = r.get(e);
        if (n) return n;
        const s = nK(e, t), i = oP(e), a = Vt(i) ? (g, h)=>s(g, lm(h, i.value)) : s, _ = aP(e), f = t && Vt(_) ? (g, h)=>Xo(um(a(g, h), _.value), e, g, h) : a;
        return r.set(e, f), f;
    }, tu = (e)=>Ye(nP(e)), eu = (e)=>Ye(sP(e)), nK = (e, t)=>{
        switch(e._tag){
            case "Refinement":
                {
                    const r = Ee(e.from, !0);
                    return (n, s)=>{
                        s = s ?? N_;
                        const i = s?.errors === "all", a = dn(um(r(n, s), (_)=>{
                            const f = new X_(e, n, "From", _);
                            return i && _P(e) && pm(_) ? se(e.filter(n, s, e), {
                                onNone: ()=>K(f),
                                onSome: (g)=>K(new Ot(e, n, [
                                        f,
                                        new X_(e, n, "Predicate", g)
                                    ]))
                            }) : K(f);
                        }), (_)=>se(e.filter(_, s, e), {
                                onNone: ()=>J(_),
                                onSome: (f)=>K(new X_(e, n, "Predicate", f))
                            }));
                        return Xo(a, e, n, s);
                    };
                }
            case "Transformation":
                {
                    const r = oK(e.transformation), n = Ee(e.from, !0), s = Ee(e.to, !0);
                    return (i, a)=>Xo(dn(Z_(n(i, a), (_)=>new Q_(e, i, "Encoded", _)), (_)=>dn(Z_(r(_, a ?? N_, e, i), (f)=>new Q_(e, i, "Transformation", f)), (f)=>Z_(s(f, a), (g)=>new Q_(e, i, "Type", g)))), e, i, a);
                }
            case "Declaration":
                {
                    const r = e.decodeUnknown(...e.typeParameters);
                    return (n, s)=>Xo(r(n, s ?? N_, e), e, n, s);
                }
            case "Literal":
                return pe(e, (r)=>r === e.literal);
            case "UniqueSymbol":
                return pe(e, (r)=>r === e.symbol);
            case "UndefinedKeyword":
                return pe(e, S$);
            case "NeverKeyword":
                return pe(e, F$);
            case "UnknownKeyword":
            case "AnyKeyword":
            case "VoidKeyword":
                return J;
            case "StringKeyword":
                return pe(e, kr);
            case "NumberKeyword":
                return pe(e, hr);
            case "BooleanKeyword":
                return pe(e, wl);
            case "BigIntKeyword":
                return pe(e, Ba);
            case "SymbolKeyword":
                return pe(e, lu);
            case "ObjectKeyword":
                return pe(e, Xs);
            case "Enums":
                return pe(e, (r)=>e.enums.some(([n, s])=>s === r));
            case "TemplateLiteral":
                {
                    const r = CP(e);
                    return pe(e, (n)=>kr(n) && r.test(n));
                }
            case "TupleType":
                {
                    const r = e.elements.map((g)=>Ee(g.type, t)), n = e.rest.map((g)=>Ee(g.type, t));
                    let s = e.elements.filter((g)=>!g.isOptional);
                    e.rest.length > 0 && (s = s.concat(e.rest.slice(1)));
                    const i = s.length, a = e.elements.length > 0 ? e.elements.map((g, h)=>h).join(" | ") : "never", _ = tu(e), f = eu(e);
                    return (g, h)=>{
                        if (!O3(g)) return K(new Qr(e, g));
                        const b = h?.errors === "all", S = [];
                        let k = 0;
                        const x = [], $ = g.length;
                        for(let B = $; B <= i - 1; B++){
                            const D = new Wt(B, g, new pi(s[B - $]));
                            if (b) {
                                S.push([
                                    k++,
                                    D
                                ]);
                                continue;
                            } else return K(new Ot(e, g, D, x));
                        }
                        if (e.rest.length === 0) for(let B = e.elements.length; B <= $ - 1; B++){
                            const D = new Wt(B, g, new Yg(g[B], `is unexpected, expected: ${a}`));
                            if (b) {
                                S.push([
                                    k++,
                                    D
                                ]);
                                continue;
                            } else return K(new Ot(e, g, D, x));
                        }
                        let C = 0, z;
                        for(; C < r.length; C++)if ($ < C + 1) {
                            if (e.elements[C].isOptional) continue;
                        } else {
                            const B = r[C], D = B(g[C], h);
                            if (de(D)) {
                                if (Ft(D)) {
                                    const H = new Wt(C, g, D.left);
                                    if (b) {
                                        S.push([
                                            k++,
                                            H
                                        ]);
                                        continue;
                                    } else return K(new Ot(e, g, H, Pe(x)));
                                }
                                x.push([
                                    k++,
                                    D.right
                                ]);
                            } else {
                                const H = k++, L = C;
                                z || (z = []), z.push(({ es: Z, output: j })=>Je(Gn(D), (st)=>{
                                        if (Ft(st)) {
                                            const it = new Wt(L, g, st.left);
                                            return b ? (Z.push([
                                                H,
                                                it
                                            ]), Fe) : K(new Ot(e, g, it, Pe(j)));
                                        }
                                        return j.push([
                                            H,
                                            st.right
                                        ]), Fe;
                                    }));
                            }
                        }
                        if (Qt(n)) {
                            const [B, ...D] = n;
                            for(; C < $ - D.length; C++){
                                const H = B(g[C], h);
                                if (de(H)) if (Ft(H)) {
                                    const L = new Wt(C, g, H.left);
                                    if (b) {
                                        S.push([
                                            k++,
                                            L
                                        ]);
                                        continue;
                                    } else return K(new Ot(e, g, L, Pe(x)));
                                } else x.push([
                                    k++,
                                    H.right
                                ]);
                                else {
                                    const L = k++, Z = C;
                                    z || (z = []), z.push(({ es: j, output: st })=>Je(Gn(H), (it)=>{
                                            if (Ft(it)) {
                                                const X = new Wt(Z, g, it.left);
                                                return b ? (j.push([
                                                    L,
                                                    X
                                                ]), Fe) : K(new Ot(e, g, X, Pe(st)));
                                            } else return st.push([
                                                L,
                                                it.right
                                            ]), Fe;
                                        }));
                                }
                            }
                            for(let H = 0; H < D.length; H++){
                                const L = C + H;
                                if (!($ < L + 1)) {
                                    const Z = D[H](g[L], h);
                                    if (de(Z)) {
                                        if (Ft(Z)) {
                                            const j = new Wt(L, g, Z.left);
                                            if (b) {
                                                S.push([
                                                    k++,
                                                    j
                                                ]);
                                                continue;
                                            } else return K(new Ot(e, g, j, Pe(x)));
                                        }
                                        x.push([
                                            k++,
                                            Z.right
                                        ]);
                                    } else {
                                        const j = k++;
                                        z || (z = []), z.push(({ es: st, output: it })=>Je(Gn(Z), (X)=>{
                                                if (Ft(X)) {
                                                    const gt = new Wt(L, g, X.left);
                                                    return b ? (st.push([
                                                        j,
                                                        gt
                                                    ]), Fe) : K(new Ot(e, g, gt, Pe(it)));
                                                }
                                                return it.push([
                                                    j,
                                                    X.right
                                                ]), Fe;
                                            }));
                                    }
                                }
                            }
                        }
                        const V = ({ es: B, output: D })=>Vo(B) ? K(new Ot(e, g, Pe(B), Pe(D))) : J(Pe(D));
                        if (z && z.length > 0) {
                            const B = z;
                            return Bo(()=>{
                                const D = {
                                    es: yi(S),
                                    output: yi(x)
                                };
                                return Je(vi(B, (H)=>H(D), {
                                    concurrency: _,
                                    batching: f,
                                    discard: !0
                                }), ()=>V(D));
                            });
                        }
                        return V({
                            output: x,
                            es: S
                        });
                    };
                }
            case "TypeLiteral":
                {
                    if (e.propertySignatures.length === 0 && e.indexSignatures.length === 0) return pe(e, k$);
                    const r = [], n = {}, s = [];
                    for (const h of e.propertySignatures)r.push([
                        Ee(h.type, t),
                        h
                    ]), n[h.name] = null, s.push(h.name);
                    const i = e.indexSignatures.map((h)=>[
                            Ee(h.parameter, t),
                            Ee(h.type, t),
                            h.parameter
                        ]), a = cr.make(e.indexSignatures.map((h)=>h.parameter).concat(s.map((h)=>lu(h) ? new dP(h) : new fP(h)))), _ = Ee(a, t), f = tu(e), g = eu(e);
                    return (h, b)=>{
                        if (!E$(h)) return K(new Qr(e, h));
                        const S = b?.errors === "all", k = [];
                        let x = 0;
                        const $ = b?.onExcessProperty === "error", C = b?.onExcessProperty === "preserve", z = {};
                        let V;
                        if ($ || C) {
                            V = Reflect.ownKeys(h);
                            for (const L of V){
                                const Z = _(L, b);
                                if (de(Z) && Ft(Z)) if ($) {
                                    const j = new Wt(L, h, new Yg(h[L], `is unexpected, expected: ${String(a)}`));
                                    if (S) {
                                        k.push([
                                            x++,
                                            j
                                        ]);
                                        continue;
                                    } else return K(new Ot(e, h, j, z));
                                } else z[L] = h[L];
                            }
                        }
                        let B;
                        const D = b?.exact === !0;
                        for(let L = 0; L < r.length; L++){
                            const Z = r[L][1], j = Z.name, st = Object.prototype.hasOwnProperty.call(h, j);
                            if (!st) {
                                if (Z.isOptional) continue;
                                if (D) {
                                    const gt = new Wt(j, h, new pi(Z));
                                    if (S) {
                                        k.push([
                                            x++,
                                            gt
                                        ]);
                                        continue;
                                    } else return K(new Ot(e, h, gt, z));
                                }
                            }
                            const it = r[L][0], X = it(h[j], b);
                            if (de(X)) {
                                if (Ft(X)) {
                                    const gt = new Wt(j, h, st ? X.left : new pi(Z));
                                    if (S) {
                                        k.push([
                                            x++,
                                            gt
                                        ]);
                                        continue;
                                    } else return K(new Ot(e, h, gt, z));
                                }
                                z[j] = X.right;
                            } else {
                                const gt = x++, te = j;
                                B || (B = []), B.push(({ es: Ht, output: Se })=>Je(Gn(X), (At)=>{
                                        if (Ft(At)) {
                                            const Rt = new Wt(te, h, st ? At.left : new pi(Z));
                                            return S ? (Ht.push([
                                                gt,
                                                Rt
                                            ]), Fe) : K(new Ot(e, h, Rt, Se));
                                        }
                                        return Se[te] = At.right, Fe;
                                    }));
                            }
                        }
                        for(let L = 0; L < i.length; L++){
                            const Z = i[L], j = Z[0], st = Z[1], it = oh(h, Z[2]);
                            for (const X of it){
                                const gt = j(X, b);
                                if (de(gt) && Be(gt)) {
                                    const te = st(h[X], b);
                                    if (de(te)) if (Ft(te)) {
                                        const Ht = new Wt(X, h, te.left);
                                        if (S) {
                                            k.push([
                                                x++,
                                                Ht
                                            ]);
                                            continue;
                                        } else return K(new Ot(e, h, Ht, z));
                                    } else Object.prototype.hasOwnProperty.call(n, X) || (z[X] = te.right);
                                    else {
                                        const Ht = x++, Se = X;
                                        B || (B = []), B.push(({ es: At, output: Rt })=>Je(Gn(te), ($e)=>{
                                                if (Ft($e)) {
                                                    const Wr = new Wt(Se, h, $e.left);
                                                    return S ? (At.push([
                                                        Ht,
                                                        Wr
                                                    ]), Fe) : K(new Ot(e, h, Wr, Rt));
                                                } else return Object.prototype.hasOwnProperty.call(n, X) || (Rt[X] = $e.right), Fe;
                                            }));
                                    }
                                }
                            }
                        }
                        const H = ({ es: L, output: Z })=>{
                            if (Vo(L)) return K(new Ot(e, h, Pe(L), Z));
                            if (b?.propertyOrder === "original") {
                                const j = V || Reflect.ownKeys(h);
                                for (const it of s)j.indexOf(it) === -1 && j.push(it);
                                const st = {};
                                for (const it of j)Object.prototype.hasOwnProperty.call(Z, it) && (st[it] = Z[it]);
                                return J(st);
                            }
                            return J(Z);
                        };
                        if (B && B.length > 0) {
                            const L = B;
                            return Bo(()=>{
                                const Z = {
                                    es: yi(k),
                                    output: Object.assign({}, z)
                                };
                                return Je(vi(L, (j)=>j(Z), {
                                    concurrency: f,
                                    batching: g,
                                    discard: !0
                                }), ()=>H(Z));
                            });
                        }
                        return H({
                            es: k,
                            output: z
                        });
                    };
                }
            case "Union":
                {
                    const r = sK(e.types), n = Reflect.ownKeys(r.keys), s = n.length, i = e.types.length, a = new Map;
                    for(let g = 0; g < i; g++)a.set(e.types[g], Ee(e.types[g], t));
                    const _ = tu(e) ?? 1, f = eu(e);
                    return (g, h)=>{
                        const b = [];
                        let S = 0, k = [];
                        if (s > 0) if (bl(g)) for(let C = 0; C < s; C++){
                            const z = n[C], V = r.keys[z].buckets;
                            if (Object.prototype.hasOwnProperty.call(g, z)) {
                                const B = String(g[z]);
                                if (Object.prototype.hasOwnProperty.call(V, B)) k = k.concat(V[B]);
                                else {
                                    const { candidates: D, literals: H } = r.keys[z], L = cr.make(H), Z = D.length === i ? new ga([
                                        new da(z, L, !1, !0)
                                    ], []) : cr.make(D);
                                    b.push([
                                        S++,
                                        new Ot(Z, g, new Wt(z, g, new Qr(L, g[z])))
                                    ]);
                                }
                            } else {
                                const { candidates: B, literals: D } = r.keys[z], H = new da(z, cr.make(D), !1, !0), L = B.length === i ? new ga([
                                    H
                                ], []) : cr.make(B);
                                b.push([
                                    S++,
                                    new Ot(L, g, new Wt(z, g, new pi(H)))
                                ]);
                            }
                        }
                        else {
                            const C = r.candidates.length === i ? e : cr.make(r.candidates);
                            b.push([
                                S++,
                                new Qr(C, g)
                            ]);
                        }
                        r.otherwise.length > 0 && (k = k.concat(r.otherwise));
                        let x;
                        for(let C = 0; C < k.length; C++){
                            const z = k[C], V = a.get(z)(g, h);
                            if (de(V) && (!x || x.length === 0)) {
                                if (Be(V)) return V;
                                b.push([
                                    S++,
                                    V.left
                                ]);
                            } else {
                                const B = S++;
                                x || (x = []), x.push((D)=>Bo(()=>"finalResult" in D ? Fe : Je(Gn(V), (H)=>(Be(H) ? D.finalResult = H : D.es.push([
                                                B,
                                                H.left
                                            ]), Fe))));
                            }
                        }
                        const $ = (C)=>Vo(C) ? C.length === 1 && C[0][1]._tag === "Type" ? K(C[0][1]) : K(new Ot(e, g, Pe(C))) : K(new Qr(e, g));
                        if (x && x.length > 0) {
                            const C = x;
                            return Bo(()=>{
                                const z = {
                                    es: yi(b)
                                };
                                return Je(vi(C, (V)=>V(z), {
                                    concurrency: _,
                                    batching: f,
                                    discard: !0
                                }), ()=>"finalResult" in z ? z.finalResult : $(z.es));
                            });
                        }
                        return $(b);
                    };
                }
            case "Suspend":
                {
                    const r = ah(()=>Ee(e.f(), t));
                    return (n, s)=>r()(n, s);
                }
        }
    }, pe = (e, t)=>(r)=>t(r) ? J(r) : K(new Qr(e, r)), Si = (e, t)=>{
        switch(e._tag){
            case "Declaration":
                {
                    const r = Ih(e);
                    if (Vt(r)) return Si(r.value);
                    break;
                }
            case "TypeLiteral":
                {
                    const r = [];
                    for(let n = 0; n < e.propertySignatures.length; n++){
                        const s = e.propertySignatures[n], i = Hd(s.type);
                        qd(i) && !s.isOptional && r.push([
                            s.name,
                            i
                        ]);
                    }
                    return r;
                }
            case "TupleType":
                {
                    const r = [];
                    for(let n = 0; n < e.elements.length; n++){
                        const s = e.elements[n], i = Hd(s.type);
                        qd(i) && !s.isOptional && r.push([
                            n,
                            i
                        ]);
                    }
                    return r;
                }
            case "Refinement":
                return Si(e.from);
            case "Suspend":
                return Si(e.f());
            case "Transformation":
                return Si(e.from);
        }
        return [];
    }, sK = (e, t)=>{
        const r = {}, n = [], s = [];
        for(let i = 0; i < e.length; i++){
            const a = e[i], _ = Si(a);
            if (_.length > 0) {
                s.push(a);
                for(let f = 0; f < _.length; f++){
                    const [g, h] = _[f], b = String(h.literal);
                    r[g] = r[g] || {
                        buckets: {},
                        literals: [],
                        candidates: []
                    };
                    const S = r[g].buckets;
                    if (Object.prototype.hasOwnProperty.call(S, b)) {
                        if (f < _.length - 1) continue;
                        S[b].push(a), r[g].literals.push(h), r[g].candidates.push(a);
                    } else {
                        S[b] = [
                            a
                        ], r[g].literals.push(h), r[g].candidates.push(a);
                        break;
                    }
                }
            } else n.push(a);
        }
        return {
            keys: r,
            otherwise: n,
            candidates: s
        };
    }, Xo = (e, t, r, n)=>{
        if (n?.isEffectAllowed === !0 || de(e)) return e;
        const s = new Df, i = IL(e, {
            scheduler: s
        });
        s.flush();
        const a = i.unsafePoll();
        if (a) {
            if (E8(a)) return J(a.value);
            const _ = a.cause;
            return Ly(_) ? K(_.error) : K(new Xg(t, r, Ky(_)));
        }
        return K(new Xg(t, r, "cannot be be resolved synchronously, this is caused by using runSync on an effect that performs async work"));
    }, iK = ([e], [t])=>e > t ? 1 : e < t ? -1 : 0;
    function Pe(e) {
        return e.sort(iK).map((t)=>t[1]);
    }
    const oK = (e, t)=>{
        switch(e._tag){
            case "FinalTransformation":
                return e.decode;
            case "ComposeTransformation":
                return J;
            case "TypeLiteralTransformation":
                return (r)=>{
                    let n = J(r);
                    for (const s of e.propertySignatureTransformations){
                        const [i, a] = [
                            s.from,
                            s.to
                        ], _ = s.decode;
                        n = We(n, (g)=>{
                            const h = _(Object.prototype.hasOwnProperty.call(g, i) ? N(g[i]) : M());
                            return delete g[i], Vt(h) && (g[a] = h.value), g;
                        });
                    }
                    return n;
                };
        }
    }, ee = (e, t = [])=>({
            value: e,
            forest: t
        }), Ci = {
        formatIssue: (e)=>We(Qn(e), aK),
        formatIssueSync: (e)=>{
            const t = Ci.formatIssue(e);
            return de(t) ? u3(t) : RL(t);
        },
        formatError: (e)=>Ci.formatIssue(e.issue),
        formatErrorSync: (e)=>Ci.formatIssueSync(e.issue)
    }, aK = (e)=>e.value + dm(`
`, e.forest), dm = (e, t)=>{
        let r = "";
        const n = t.length;
        let s;
        for(let i = 0; i < n; i++){
            s = t[i];
            const a = i === n - 1;
            r += e + (a ? "└" : "├") + "─ " + s.value, r += dm(e + (n > 1 && !a ? "│  " : "   "), s.forest);
        }
        return r;
    }, cK = (e)=>{
        switch(e){
            case "Encoded":
                return "Encoded side transformation failure";
            case "Transformation":
                return "Transformation process failure";
            case "Type":
                return "Type side transformation failure";
        }
    }, _K = (e)=>{
        switch(e){
            case "From":
                return "From side refinement failure";
            case "Predicate":
                return "Predicate refinement failure";
        }
    }, gm = (e)=>"ast" in e ? N(e.ast) : M(), _l = J(void 0), uK = (e)=>gm(e).pipe(Zs(eP), se({
            onNone: ()=>_l,
            onSome: (t)=>{
                const r = t(e);
                return kr(r) ? J({
                    message: r,
                    override: !1
                }) : FL(r) ? za(r, (n)=>({
                        message: n,
                        override: !1
                    })) : kr(r.message) ? J({
                    message: r.message,
                    override: r.override
                }) : za(r.message, (n)=>({
                        message: n,
                        override: r.override
                    }));
            }
        })), id = (e)=>(t)=>t._tag === e, pm = id("Composite"), Zg = id("Refinement"), tp = id("Transformation"), zi = (e)=>dn(uK(e), (t)=>t !== void 0 ? !t.override && (pm(e) || Zg(e) && e.kind === "From" || tp(e) && e.kind !== "Transformation") ? tp(e) || Zg(e) ? zi(e.issue) : _l : J(t.message) : _l), hm = (e)=>gm(e).pipe(Zs(iP), h3((t)=>t(e)), Ye);
    function lK(e) {
        return Eh(e).pipe(Pr(()=>kh(e)), Pr(()=>xh(e)), Pr(()=>Va(e)), zt(()=>`{ ${e.from} | filter }`));
    }
    function fK(e) {
        return e.message !== void 0 ? e.message : `Expected ${Uh(e.ast) ? lK(e.ast) : String(e.ast)}, actual ${so(e.actual)}`;
    }
    const dK = (e)=>We(zi(e), (t)=>t ?? hm(e) ?? fK(e)), Uo = (e)=>hm(e) ?? String(e.ast), gK = (e)=>e.message ?? "is forbidden", pK = (e)=>e.message ?? "is unexpected", hK = (e)=>{
        const t = rP(e.ast);
        if (Vt(t)) {
            const r = t.value();
            return kr(r) ? J(r) : r;
        }
        return J(e.message ?? "is missing");
    }, Qn = (e)=>{
        switch(e._tag){
            case "Type":
                return We(dK(e), ee);
            case "Forbidden":
                return J(ee(Uo(e), [
                    ee(gK(e))
                ]));
            case "Unexpected":
                return J(ee(pK(e)));
            case "Missing":
                return We(hK(e), ee);
            case "Transformation":
                return dn(zi(e), (t)=>t !== void 0 ? J(ee(t)) : We(Qn(e.issue), (r)=>ee(Uo(e), [
                            ee(cK(e.kind), [
                                r
                            ])
                        ])));
            case "Refinement":
                return dn(zi(e), (t)=>t !== void 0 ? J(ee(t)) : We(Qn(e.issue), (r)=>ee(Uo(e), [
                            ee(_K(e.kind), [
                                r
                            ])
                        ])));
            case "Pointer":
                return We(Qn(e.issue), (t)=>ee(q3(e.path), [
                        t
                    ]));
            case "Composite":
                return dn(zi(e), (t)=>{
                    if (t !== void 0) return J(ee(t));
                    const r = Uo(e);
                    return ch(e.issues) ? We(vi(e.issues, Qn), (n)=>ee(r, n)) : We(Qn(e.issues), (n)=>ee(r, [
                            n
                        ]));
                });
        }
    };
    function Yn(e, t) {
        return T(e.runtimeEffect, (r)=>ht((n)=>(n.setFiberRefs(r.fiberRefs), n.currentRuntimeFlags = r.runtimeFlags, So(t, r.context))));
    }
    const wK = {
        ...iU,
        [il]: il,
        pipe () {
            return q(this, arguments);
        },
        commit () {
            return this.runtimeEffect;
        }
    }, bK = (e, t)=>{
        t = t ?? Qy();
        const r = cl(Zf());
        let n;
        const s = ct(()=>{
            if (!n) {
                const a = new Df;
                n = al(gf(A7(bL(e, t), r), (_)=>{
                    i.cachedRuntime = _;
                }), {
                    scope: r,
                    scheduler: a
                }), a.flush();
            }
            return oc(n.await);
        }), i = Object.assign(Object.create(wK), {
            memoMap: t,
            scope: r,
            runtimeEffect: s,
            cachedRuntime: void 0,
            runtime () {
                return i.cachedRuntime === void 0 ? G_(i.runtimeEffect) : Promise.resolve(i.cachedRuntime);
            },
            dispose () {
                return G_(i.disposeEffect);
            },
            disposeEffect: ct(()=>(i.runtimeEffect = Au("ManagedRuntime disposed"), i.cachedRuntime = void 0, Dy(i.scope, Le))),
            runFork (a, _) {
                return i.cachedRuntime === void 0 ? al(Yn(i, a), _) : Io(i.cachedRuntime)(a, _);
            },
            runSyncExit (a) {
                return i.cachedRuntime === void 0 ? nL(Yn(i, a)) : td(i.cachedRuntime)(a);
            },
            runSync (a) {
                return i.cachedRuntime === void 0 ? cl(Yn(i, a)) : Vy(i.cachedRuntime)(a);
            },
            runPromiseExit (a, _) {
                return i.cachedRuntime === void 0 ? rL(Yn(i, a), _) : ed(i.cachedRuntime)(a, _);
            },
            runCallback (a, _) {
                return i.cachedRuntime === void 0 ? ol(Dr)(Yn(i, a), _) : ol(i.cachedRuntime)(a, _);
            },
            runPromise (a, _) {
                return i.cachedRuntime === void 0 ? G_(Yn(i, a), _) : Wy(i.cachedRuntime)(a, _);
            }
        });
        return i;
    }, yK = bK, ep = Symbol.for("effect/Schema");
    function Ro(e) {
        return class {
            [ep] = rp;
            static ast = e;
            static annotations(r) {
                return Ro(od(this.ast, r));
            }
            static pipe() {
                return q(this, arguments);
            }
            static toString() {
                return String(e);
            }
            static Type;
            static Encoded;
            static Context;
            static [ep] = rp;
        };
    }
    const rp = {
        _A: (e)=>e,
        _I: (e)=>e,
        _R: (e)=>e
    }, np = {
        typeConstructor: W3,
        schemaId: Y3,
        message: _h,
        missingMessage: uh,
        identifier: $l,
        title: ti,
        description: Pl,
        examples: lh,
        default: fh,
        documentation: Q3,
        jsonSchema: dh,
        arbitrary: gh,
        pretty: ph,
        equivalence: hh,
        concurrency: wh,
        batching: bh,
        parseIssueTitle: yh,
        parseOptions: mh,
        decodingFallback: Sh
    }, wm = (e)=>{
        if (!e) return {};
        const t = {
            ...e
        };
        for(const r in np)if (r in e) {
            const n = np[r];
            t[n] = e[r], delete t[r];
        }
        return t;
    }, od = (e, t)=>Bl(e, wm(t)), sp = Symbol.for("effect/SchemaId/Brand"), Qo = (e, t)=>(r)=>ym(r, new Bh(r.ast, function(i, a, _) {
                const f = e.either(i);
                return Ft(f) ? N(new Qr(_, i, f.left.map((g)=>g.message).join(", "))) : M();
            }, wm({
                schemaId: sp,
                [sp]: {
                    constructor: e
                },
                ...t
            })));
    class mK extends Ro(Th) {
    }
    class Zo extends Ro(mP) {
    }
    const SK = (e)=>cr.make(e.map((t)=>t.ast));
    function bm(e, t = SK(e)) {
        return class extends Ro(t) {
            static annotations(n) {
                return bm(this.members, od(this.ast, n));
            }
            static members = [
                ...e
            ];
        };
    }
    function FK(...e) {
        return Ph(e) ? bm(e) : Qt(e) ? e[0] : mK;
    }
    function ym(e, t) {
        return class extends Ro(t) {
            static annotations(n) {
                return ym(this.from, od(this.ast, n));
            }
            static make = (n, s)=>kK(s) ? n : tK(this)(n);
            static from = e;
        };
    }
    function kK(e) {
        return wl(e) ? e : e?.disableValidation ?? !1;
    }
    let ul;
    ul = (e, t)=>{
        const r = ZL(t);
        return JL(e).pipe(VL((n)=>r(n).pipe(Yp((s)=>zL([], Ci.formatIssueSync(s))))));
    };
    xK = Pn();
    Pn();
    let EK, ll, RK, ad, OK, TK, Sm, Fm, vK, CK, zK, AK, $K;
    EK = Pn();
    IK = (e)=>EK(e);
    Nq = (e)=>Object.keys(e.provableCircuits).map(IK);
    mm = (e, t)=>{
        class r extends rm {
            _tag = t;
        }
        return r.prototype[e] = e, r.prototype.name = t, r;
    };
    ll = Symbol.for("platform-js/effect/IntegerRange");
    RK = Md({
        value: Md({
            _tag: y$,
            min: Pd,
            max: Pd
        })
    });
    ad = (e)=>W(e, ll);
    OK = (e)=>e.value._tag === "Inclusive";
    TK = w(2, (e, t)=>RK(e, t));
    Sm = w(2, (e, t)=>{
        if (OK(e)) return Sm(Fm([
            e.value.min,
            e.value.max + 1
        ]), t);
        const { min: r, max: n } = e.value;
        return t >= r && t < n;
    });
    Fm = (e)=>AK(e);
    vK = /(?<n>\d*)\.\.(?<inc>\=?)(?<x>\d*)/;
    CK = "Exclusive";
    zK = {
        [ll]: ll,
        [tt] () {
            return yt(this, Sl(this.value));
        },
        [Y] (e) {
            return ad(e) && TK(this, e);
        },
        toString () {
            const { min: e, max: t, _tag: r } = this.value;
            return `${e}${r === "Inclusive" ? "..=" : ".."}${t}`;
        },
        toJSON () {
            return {
                _id: "IntegerRange",
                ...this.value
            };
        },
        [dt] () {
            return this.toJSON();
        },
        pipe () {
            return q(this, arguments);
        }
    };
    AK = (e, t)=>{
        const r = Object.create(zK);
        if (ad(e)) r.value = e.value;
        else if (Array.isArray(e) && e.length === 2 && e.every(hr)) {
            const [n, s] = e;
            r.value = {
                _tag: CK,
                min: n,
                max: s
            };
        } else if (kr(e)) {
            const n = e.match(vK);
            if (!n || !n.groups) throw new Error(`Invalid IntegerRange: ${e}`);
            const { n: s, inc: i, x: a } = n.groups, _ = Number(s), f = Number(a);
            if (!hr(_) || !hr(f)) throw new TypeError(`Invalid IntegerRange: ${e}`);
            r.value = {
                _tag: i === "=" ? "Inclusive" : "Exclusive",
                min: _,
                max: f
            };
        } else throw new Error("Invalid IntegerRange");
        return r;
    };
    $K = Symbol.for("platform-js/effect/ParseError");
    class PK extends mm($K, "ParseError") {
    }
    const hi = (e, t, r, n)=>new PK({
            message: e,
            source: t,
            meta: r,
            cause: n
        }), MK = /^(?<prefix>(0x)?)(?<byteChars>([0-9A-Fa-f]{2})*)(?<incompleteChars>.*)$/, NK = (e)=>{
        if (!e) return K(hi("Source string must have non-zero length", e));
        const t = e.match(MK);
        if (!t || !t.groups) return K(hi(`Source string '${e}' is not a valid hex-string`, e));
        const { prefix: r, byteChars: n, incompleteChars: s } = t.groups, i = {
            hasPrefix: !!r,
            byteChars: n || "",
            incompleteChars: s || "",
            toString: ()=>`${r}${n}..[${s ?? "<none>"}]`,
            toJSON: ()=>t.groups,
            [dt]: ()=>t.groups
        };
        if (i.incompleteChars) {
            if (i.incompleteChars.length % 2 > 0) return K(hi(`Last byte of source string '${e}' is incomplete`, e, i));
            const a = i.byteChars.length + (i.hasPrefix ? 2 : 0);
            return K(hi(`Invalid hex-digit '${e[a]}' found in source string at index ${a}`, e, i));
        }
        return i.byteChars ? J(i) : K(hi(`Source string '${e}' is not a valid hex-string`, e, i));
    }, BK = {
        requirePrefix: !1
    }, cd = (e)=>{
        const t = {
            ...BK,
            ...e
        };
        return qh((r)=>oo(NK(r), {
                onLeft: (n)=>N(mi(n.message, n.meta)),
                onRight: (n)=>{
                    if (t.requirePrefix && !n.hasPrefix) return N(mi(`Source string '${r}' requires a '0x' prefix`));
                    if (!t.requirePrefix && n.hasPrefix) return N(mi(`Source string '${r}' has a '0x' prefix but prefixes are not allowed`));
                    if (t.byteLength) {
                        const s = ad(t.byteLength) ? t.byteLength : Fm(t.byteLength), i = n.byteChars.length / 2;
                        if (!Sm(s, i)) return N(mi(`Source string '${r}' has a byte length of ${i}, but expected ${s.toString()}`));
                    }
                    return M();
                }
            }));
    };
    cd({
        requirePrefix: !0
    });
    let UK, km, ta, xm, jK, Em, LK, fl, rs, KK, Im, DK, Rm, qK, VK;
    UK = cd({
        requirePrefix: !1
    });
    km = (e)=>cd({
            requirePrefix: !1,
            ...e
        });
    ta = Ul(Pn(), UK);
    xm = Pn();
    Bq = (e)=>ta.is(e) ? e : (xm.is(e), ta(e));
    jK = /^[a-zA-Z0-9-]+$/;
    Em = qh((e)=>e.match(jK) ? M() : N(mi(`Source string '${e}' is not a valid network identifier`)));
    LK = Em("main");
    fl = Symbol.for("platform-js/effect/NetworkId");
    rs = Symbol.for("platform-js/effect/NetworkId#NetworkMoniker");
    KK = vp((e, t)=>Q(e, t), (e)=>e[rs]);
    Im = (e)=>W(e, fl);
    DK = w(2, (e, t)=>KK(e, t));
    Rm = (e)=>({
            [fl]: fl,
            [Y] (t) {
                return Im(t) && DK(this, t);
            },
            toString () {
                return this[rs] === !0 ? LK : this[rs];
            },
            toJSON () {
                return {
                    _id: "NetworkId",
                    moniker: this.toString()
                };
            },
            [dt] () {
                return this.toJSON();
            },
            [rs]: e,
            isMainNet () {
                return this[rs] === !0;
            }
        });
    qK = Object.create(Rm(!0));
    VK = (e)=>Object.create(Rm(Im(e) ? e[rs] : e));
    HK = Ul(Pn(), km({
        byteLength: "32..=35"
    }));
    ip = class extends ql("@midnight-ntwrk/platform-js/Configuration#Keys")() {
    };
    class op extends ql("@midnight-ntwrk/platform-js/Configuration#Network")() {
    }
    const JK = qL([
        ul("coinPublic", FK(Zo.pipe(Qo(ta)), Zo.pipe(Qo(xm)))),
        _m(ul("signing", Zo.pipe(Qo(HK))))
    ]).pipe(HL("keys")), WK = _m(ul("network", Zo.pipe(Qo(Em)))), GK = ()=>nm(ip, sd(function*() {
            const [e, t] = yield* JK;
            return ip.of({
                coinPublicKey: e,
                getSigningKey: ()=>t
            });
        })), YK = ()=>nm(op, sd(function*() {
            return op.of(VK(se(yield* WK, {
                onSome: _t,
                onNone: ()=>qK
            })));
        })), XK = sm(GK(), YK());
    ap = class extends ql("compact-js/ZKConfiguration")() {
    };
    const QK = (e)=>yK(e), ZK = Symbol.for("compact-js/effect/ZKConfigurationReadError");
    class tD extends mm(ZK, "ZKConfigurationReadError") {
    }
    let eD, nD, sD;
    eD = (e, t, r, n)=>new tD({
            contractTag: e,
            provableCircuitId: t,
            assetType: r,
            message: `Failed to read ${r.replaceAll("-", " ")} for ${e}#${t}`,
            cause: n
        });
    rD = Ul(Pn(), km({
        byteLength: "32..=32"
    }));
    nD = (e)=>(t)=>sd(function*() {
                const r = (n)=>xL({
                        try: ()=>e.getVerifierKey(n).then((s)=>N(xK(s))),
                        catch: (s)=>eD(t.tag, n, "verifier-key", s)
                    });
                return {
                    getVerifierKey: r,
                    getVerifierKeys: (n)=>vi(n, (s)=>r(s).pipe(za((i)=>[
                                    s,
                                    i
                                ])), {
                            concurrency: "unbounded",
                            discard: !1
                        })
                };
            });
    sD = (e, t)=>sm(TL(ap, ap.of({
            createReader: nD(e)
        })), XK).pipe(vL(CL(WL(t, {
            pathDelim: "_"
        }).pipe(GL))));
    Uq = (e, t)=>{
        let r = [
            [
                "KEYS_COIN_PUBLIC",
                t.coinPublicKey
            ]
        ];
        return t.signingKey && (r = r.concat([
            [
                "KEYS_SIGNING",
                t.signingKey
            ]
        ])), QK(sD(e, new Map(r)));
    };
    jq = (e)=>R8(e, {
            onSuccess: (t)=>t,
            onFailure: (t)=>{
                throw Ly(t) ? t.error : new Error(`Unexpected error: ${Ky(t)}`);
            }
        });
    Lq = (e)=>N(e);
    Kq = (e)=>rD(e);
    Dq = class extends Error {
        invalidScheme;
        allowableSchemes;
        constructor(t, r){
            super(`Invalid protocol scheme: '${t}'. Allowable schemes are one of: ${r.join(",")}`), this.invalidScheme = t, this.allowableSchemes = r;
        }
    };
    qq = class extends Error {
        constructor(t, r){
            super(t, r), this.name = "PrivateStateExportError";
        }
    };
    Vq = class extends Error {
        constructor(t, r){
            super(t, r), this.name = "SigningKeyExportError";
        }
    };
    class _d extends Error {
        cause;
        constructor(t, r){
            super(t), this.cause = r, this.name = "PrivateStateImportError";
        }
    }
    Hq = class extends _d {
        constructor(){
            super("Failed to decrypt export data. The password may be incorrect or the data may be corrupted.", "decryption_failed"), this.name = "ExportDecryptionError";
        }
    };
    Jq = class extends _d {
        constructor(t = "Invalid export format"){
            super(t, "invalid_format"), this.name = "InvalidExportFormatError";
        }
    };
    Wq = class extends _d {
        conflictCount;
        constructor(t, r = "private state"){
            super(`Import conflicts with ${t} existing ${r}${t === 1 ? "" : "s"}`, "conflict"), this.conflictCount = t, this.name = "ImportConflictError";
        }
    };
    var cp;
    (function(e) {
        e.INFO = "info", e.WARN = "warn", e.ERROR = "error", e.FATAL = "fatal", e.DEBUG = "debug", e.TRACE = "trace";
    })(cp || (cp = {}));
    Gq = (e)=>e;
    Yq = (e)=>e;
    Xq = (e)=>e;
    Qq = (e)=>({
            proverKey: e.proverKey,
            verifierKey: e.verifierKey,
            ir: e.zkir
        });
    Zq = "SegmentFail";
    t9 = "SegmentSuccess";
    e9 = "FailEntirely";
    r9 = "FailFallible";
    n9 = "SucceedEntirely";
    s9 = 1e4;
    i9 = 1e4;
    o9 = class {
        async getVerifierKeys(t) {
            return Promise.all(t.map(async (r)=>{
                const n = await this.getVerifierKey(r);
                return [
                    r,
                    n
                ];
            }));
        }
        async get(t) {
            return {
                circuitId: t,
                proverKey: await this.getProverKey(t),
                verifierKey: await this.getVerifierKey(t),
                zkir: await this.getZKIR(t)
            };
        }
        asKeyMaterialProvider() {
            return this;
        }
    };
    function Om(e) {
        return e instanceof Uint8Array || ArrayBuffer.isView(e) && e.constructor.name === "Uint8Array" && "BYTES_PER_ELEMENT" in e && e.BYTES_PER_ELEMENT === 1;
    }
    function Tm(e, t) {
        return Array.isArray(t) ? t.length === 0 ? !0 : e ? t.every((r)=>typeof r == "string") : t.every((r)=>Number.isSafeInteger(r)) : !1;
    }
    function iD(e) {
        if (typeof e != "function") throw new TypeError("function expected");
        return !0;
    }
    function to(e, t) {
        if (typeof t != "string") throw new TypeError(`${e}: string expected`);
        return !0;
    }
    function vm(e) {
        if (typeof e != "number") throw new TypeError(`number expected, got ${typeof e}`);
        if (!Number.isSafeInteger(e)) throw new RangeError(`invalid integer: ${e}`);
    }
    function dl(e) {
        if (!Array.isArray(e)) throw new TypeError("array expected");
    }
    function Cm(e, t) {
        if (!Tm(!0, t)) throw new TypeError(`${e}: array of strings expected`);
    }
    function zm(e, t) {
        if (!Tm(!1, t)) throw new TypeError(`${e}: array of numbers expected`);
    }
    function oD(...e) {
        const t = (i)=>i, r = (i, a)=>(_)=>i(a(_)), n = e.map((i)=>i.encode).reduceRight(r, t), s = e.map((i)=>i.decode).reduce(r, t);
        return {
            encode: n,
            decode: s
        };
    }
    function aD(e) {
        const t = typeof e == "string" ? e.split("") : e, r = t.length;
        Cm("alphabet", t);
        const n = new Map(t.map((s, i)=>[
                s,
                i
            ]));
        return {
            encode: (s)=>(dl(s), s.map((i)=>{
                    if (!Number.isSafeInteger(i) || i < 0 || i >= r) throw new Error(`alphabet.encode: digit index outside alphabet "${i}". Allowed: ${e}`);
                    return t[i];
                })),
            decode: (s)=>(dl(s), s.map((i)=>{
                    to("alphabet.decode", i);
                    const a = n.get(i);
                    if (a === void 0) throw new Error(`Unknown letter: "${i}". Allowed: ${e}`);
                    return a;
                }))
        };
    }
    function cD(e = "") {
        return to("join", e), {
            encode: (t)=>(Cm("join.decode", t), t.join(e)),
            decode: (t)=>(to("join.decode", t), t.split(e))
        };
    }
    const Am = (e, t)=>t === 0 ? e : Am(t, e % t), $a = (e, t)=>e + (t - Am(e, t)), ea = (()=>{
        let e = [];
        for(let t = 0; t < 40; t++)e.push(2 ** t);
        return e;
    })();
    function gl(e, t, r, n) {
        if (dl(e), t <= 0 || t > 32) throw new RangeError(`convertRadix2: wrong from=${t}`);
        if (r <= 0 || r > 32) throw new RangeError(`convertRadix2: wrong to=${r}`);
        if ($a(t, r) > 32) throw new Error(`convertRadix2: carry overflow from=${t} to=${r} carryBits=${$a(t, r)}`);
        let s = 0, i = 0;
        const a = ea[t], _ = ea[r] - 1, f = [];
        for (const g of e){
            if (vm(g), g >= a) throw new Error(`convertRadix2: invalid data word=${g} from=${t}`);
            if (s = s << t | g, i + t > 32) throw new Error(`convertRadix2: carry overflow pos=${i} from=${t}`);
            for(i += t; i >= r; i -= r)f.push((s >> i - r & _) >>> 0);
            const h = ea[i];
            if (h === void 0) throw new Error("invalid carry");
            s &= h - 1;
        }
        if (s = s << r - i & _, !n && i >= t) throw new Error("Excess padding");
        if (!n && s > 0) throw new Error(`Non-zero padding: ${s}`);
        return n && i > 0 && f.push(s >>> 0), f;
    }
    function _D(e, t = !1) {
        if (vm(e), e <= 0 || e > 32) throw new RangeError("radix2: bits should be in (0..32]");
        if ($a(8, e) > 32 || $a(e, 8) > 32) throw new RangeError("radix2: carry overflow");
        return {
            encode: (r)=>{
                if (!Om(r)) throw new TypeError("radix2.encode input should be Uint8Array");
                return gl(Array.from(r), 8, e, !t);
            },
            decode: (r)=>(zm("radix2.decode", r), Uint8Array.from(gl(r, e, 8, t)))
        };
    }
    function _p(e) {
        return iD(e), function(...t) {
            try {
                return e.apply(null, t);
            } catch  {}
        };
    }
    const pl = oD(aD("qpzry9x8gf2tvdw0s3jn54khce6mua7l"), cD("")), up = [
        996825010,
        642813549,
        513874426,
        1027748829,
        705979059
    ];
    function wi(e) {
        const t = e >> 25;
        let r = (e & 33554431) << 5;
        for(let n = 0; n < up.length; n++)(t >> n & 1) === 1 && (r ^= up[n]);
        return r;
    }
    function lp(e, t, r = 1) {
        const n = e.length;
        let s = 1;
        for(let i = 0; i < n; i++){
            const a = e.charCodeAt(i);
            if (a < 33 || a > 126) throw new Error(`Invalid prefix (${e})`);
            s = wi(s) ^ a >> 5;
        }
        s = wi(s);
        for(let i = 0; i < n; i++)s = wi(s) ^ e.charCodeAt(i) & 31;
        for (let i of t)s = wi(s) ^ i;
        for(let i = 0; i < 6; i++)s = wi(s);
        return s ^= r, pl.encode(gl([
            s % ea[30]
        ], 30, 5, !1));
    }
    function uD(e) {
        const t = e === "bech32" ? 1 : 734539939, r = _D(5), n = r.decode, s = r.encode, i = _p(n);
        function a(b, S, k = 90) {
            to("bech32.encode prefix", b), Om(S) && (S = Array.from(S)), zm("bech32.encode", S);
            const x = b.length;
            if (x === 0) throw new TypeError(`Invalid prefix length ${x}`);
            const $ = x + 7 + S.length;
            if (k !== !1 && $ > k) throw new TypeError(`Length ${$} exceeds limit ${k}`);
            const C = b.toLowerCase(), z = lp(C, S, t);
            return `${C}1${pl.encode(S)}${z}`;
        }
        function _(b, S = 90) {
            to("bech32.decode input", b);
            const k = b.length;
            if (k < 8 || S !== !1 && k > S) throw new TypeError(`invalid string length: ${k} (${b}). Expected (8..${S})`);
            const x = b.toLowerCase();
            if (b !== x && b !== b.toUpperCase()) throw new Error("String must be lowercase or uppercase");
            const $ = x.lastIndexOf("1");
            if ($ === 0 || $ === -1) throw new Error('Letter "1" must be present between prefix and data only');
            const C = x.slice(0, $), z = x.slice($ + 1);
            if (z.length < 6) throw new Error("Data must be at least 6 characters long");
            const V = pl.decode(z).slice(0, -6), B = lp(C, V, t);
            if (!z.endsWith(B)) throw new Error(`Invalid checksum in ${b}: expected "${B}"`);
            return {
                prefix: C,
                words: V
            };
        }
        const f = _p(_);
        function g(b) {
            const { prefix: S, words: k } = _(b, !1);
            return {
                prefix: S,
                words: k,
                bytes: n(k)
            };
        }
        function h(b, S) {
            return a(b, s(S));
        }
        return {
            encode: a,
            decode: _,
            encodeFromBytes: h,
            decodeToBytes: g,
            decodeUnsafe: f,
            fromWords: n,
            fromWordsUnsafe: i,
            toWords: s
        };
    }
    const ru = Object.freeze(uD("bech32m"));
    var hl = {}, Kn = {};
    Object.defineProperty(Kn, "__esModule", {
        value: !0
    });
    Kn.TypeKind = void 0;
    var fp;
    (function(e) {
        e[e.Primitive = 0] = "Primitive", e[e.Compact = 1] = "Compact", e[e.Sequence = 2] = "Sequence", e[e.BitSequence = 3] = "BitSequence", e[e.Array = 4] = "Array", e[e.Tuple = 5] = "Tuple", e[e.Composite = 6] = "Composite", e[e.Variant = 7] = "Variant", e[e.Option = 8] = "Option", e[e.DoNotConstruct = 9] = "DoNotConstruct", e[e.BooleanOption = 10] = "BooleanOption", e[e.Bytes = 11] = "Bytes", e[e.BytesArray = 12] = "BytesArray", e[e.HexBytes = 13] = "HexBytes", e[e.HexBytesArray = 14] = "HexBytesArray", e[e.Struct = 15] = "Struct";
    })(fp || (Kn.TypeKind = fp = {}));
    var Oo = {}, Jr = {}, lD = Dt && Dt.__importDefault || function(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    };
    Object.defineProperty(Jr, "__esModule", {
        value: !0
    });
    Jr.toHex = dD;
    Jr.isHex = $m;
    Jr.decodeHex = gD;
    const fD = lD(zn);
    function dD(e, t = 0, r = e.length - t) {
        return `0x${Buffer.from(e.buffer, e.byteOffset + t, r).toString("hex")}`;
    }
    function $m(e) {
        return typeof e == "string" && e.length % 2 == 0 && /^0x[a-f\d]*$/i.test(e);
    }
    function gD(e) {
        return (0, fD.default)($m(e)), Buffer.from(e.slice(2), "hex");
    }
    var ot = {}, pD = Dt && Dt.__importDefault || function(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    };
    Object.defineProperty(ot, "__esModule", {
        value: !0
    });
    ot.isObject = ot.unsignedIntByteLength = ot.UTF8_ENCODER = ot.UTF8_DECODER = ot.toUnsignedBigInt = ot.toSignedBigInt = ot.checkUnsignedBigInt = ot.checkUnsignedInt = ot.checkSignedBigInt = ot.checkSignedInt = ot.throwUnexpectedCase = ot.assertNotNull = void 0;
    const ud = pD(zn);
    function hD(e, t) {
        return (0, ud.default)(e != null, t), e;
    }
    ot.assertNotNull = hD;
    function To(e) {
        throw new Error(e ? `Unexpected case: ${e}` : "Unexpected case");
    }
    ot.throwUnexpectedCase = To;
    function Pm(e, t, r, n, s) {
        if (!(Number.isInteger(e) && n <= e && s >= e)) throw new Error(`Invalid ${t}${r}: ${e}`);
    }
    function Mm(e, t, r, n, s) {
        if (!(typeof e == "bigint" && n <= e && s >= e)) throw new Error(`Invalid ${t}${r}: ${e}`);
    }
    function wD(e, t) {
        let r, n;
        switch(t){
            case 8:
                r = -128, n = 127;
                break;
            case 16:
                r = -32768, n = 32767;
                break;
            case 32:
                r = -2147483648, n = 2147483647;
                break;
            default:
                To(t);
        }
        Pm(e, "I", t, r, n);
    }
    ot.checkSignedInt = wD;
    function Nm(e, t) {
        let r, n;
        switch(t){
            case 64:
                r = -(2n ** 63n), n = 2n ** 63n - 1n;
                break;
            case 128:
                r = -(2n ** 127n), n = 2n ** 127n - 1n;
                break;
            case 256:
                r = -(2n ** 255n), n = 2n ** 255n - 1n;
                break;
            default:
                To(t);
        }
        Mm(e, "I", t, r, n);
    }
    ot.checkSignedBigInt = Nm;
    function bD(e, t) {
        let r;
        switch(t){
            case 8:
                r = 255;
                break;
            case 16:
                r = 65535;
                break;
            case 32:
                r = 4294967295;
                break;
            default:
                To(t);
        }
        Pm(e, "U", t, 0, r);
    }
    ot.checkUnsignedInt = bD;
    function Bm(e, t) {
        let r;
        switch(t){
            case 64:
                r = 0xffffffffffffffffn;
                break;
            case 128:
                r = 2n ** 128n - 1n;
                break;
            case 256:
                r = 2n ** 256n - 1n;
                break;
            default:
                To(t);
        }
        Mm(e, "U", t, 0n, r);
    }
    ot.checkUnsignedBigInt = Bm;
    function yD(e, t) {
        return (0, ud.default)(typeof e == "string" || typeof e == "number"), e = BigInt(e), Nm(e, t), e;
    }
    ot.toSignedBigInt = yD;
    function mD(e, t) {
        return (0, ud.default)(typeof e == "string" || typeof e == "number"), e = BigInt(e), Bm(e, t), e;
    }
    ot.toUnsignedBigInt = mD;
    ot.UTF8_DECODER = new TextDecoder("utf-8", {
        fatal: !0,
        ignoreBOM: !1
    });
    ot.UTF8_ENCODER = new TextEncoder;
    function SD(e) {
        let t = 0;
        for(; e > 0n;)e = e >> 8n, t += 1;
        return t;
    }
    ot.unsignedIntByteLength = SD;
    function FD(e) {
        return e != null && typeof e == "object";
    }
    ot.isObject = FD;
    var kD = Dt && Dt.__importDefault || function(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    };
    Object.defineProperty(Oo, "__esModule", {
        value: !0
    });
    Oo.Src = void 0;
    const xD = Jr, ED = kD(zn), ID = ot;
    class RD {
        constructor(t){
            this.idx = 0, typeof t == "string" ? this.buf = (0, xD.decodeHex)(t) : this.buf = t;
        }
        byte() {
            let t = this.buf[this.idx];
            if (t === void 0) throw dp();
            return this.idx += 1, t;
        }
        i8() {
            let t = this.byte();
            return t | (t & 2 ** 7) * 33554430;
        }
        u8() {
            return this.byte();
        }
        i16() {
            let t = this.u16();
            return t | (t & 2 ** 15) * 131070;
        }
        u16() {
            let t = this.byte(), r = this.byte();
            return t + r * 2 ** 8;
        }
        i32() {
            return this.byte() + this.byte() * 2 ** 8 + this.byte() * 2 ** 16 + (this.byte() << 24);
        }
        u32() {
            return this.byte() + this.byte() * 2 ** 8 + this.byte() * 2 ** 16 + this.byte() * 2 ** 24;
        }
        i64() {
            let t = this.u32(), r = this.i32();
            return BigInt(t) + (BigInt(r) << 32n);
        }
        u64() {
            let t = this.u32(), r = this.u32();
            return BigInt(t) + (BigInt(r) << 32n);
        }
        i128() {
            let t = this.u64(), r = this.i64();
            return t + (r << 64n);
        }
        u128() {
            let t = this.u64(), r = this.u64();
            return t + (r << 64n);
        }
        i256() {
            let t = this.u128(), r = this.i128();
            return t + (r << 128n);
        }
        u256() {
            let t = this.u128(), r = this.u128();
            return t + (r << 128n);
        }
        compact() {
            let t = this.byte();
            switch(t & 3){
                case 0:
                    return t >> 2;
                case 1:
                    return (t >> 2) + this.byte() * 2 ** 6;
                case 2:
                    return (t >> 2) + this.byte() * 2 ** 6 + this.byte() * 2 ** 14 + this.byte() * 2 ** 22;
                case 3:
                    return this.bigCompact(t >> 2);
                default:
                    throw new Error("Reached unreachable statement");
            }
        }
        bigCompact(t) {
            let r = this.u32();
            switch(t){
                case 0:
                    return r;
                case 1:
                    return r + this.byte() * 2 ** 32;
                case 2:
                    return r + this.byte() * 2 ** 32 + this.byte() * 2 ** 40;
            }
            let n = BigInt(r), s = 32n;
            for(; t--;)n += BigInt(this.byte()) << s, s += 8n;
            return n;
        }
        compactLength() {
            let t = this.compact();
            return (0, ED.default)(typeof t == "number"), t;
        }
        str() {
            let t = this.compactLength(), r = this.bytes(t);
            return ID.UTF8_DECODER.decode(r);
        }
        bytes(t) {
            let r = this.idx, n = this.idx += t;
            if (this.buf.length < n) throw dp();
            return this.buf.subarray(r, n);
        }
        skip(t) {
            this.idx += t;
        }
        bool() {
            return !!this.byte();
        }
        hasBytes() {
            return this.buf.length > this.idx;
        }
        assertEOF() {
            if (this.hasBytes()) throw new Error("Unprocessed data left");
        }
    }
    Oo.Src = RD;
    function dp() {
        return new Error("Unexpected EOF");
    }
    var br = {}, OD = Dt && Dt.__importDefault || function(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    };
    Object.defineProperty(br, "__esModule", {
        value: !0
    });
    br.ByteSink = br.HexSink = br.Sink = void 0;
    const nu = OD(zn), _e = ot;
    class ld {
        uncheckedU16(t) {
            this.write(t & 255), this.write(t >>> 8);
        }
        uncheckedU32(t) {
            this.write(t & 255), this.write(t >>> 8 & 255), this.write(t >>> 16 & 255), this.write(t >>> 24);
        }
        uncheckedU64(t) {
            this.uncheckedU32(Number(t & 0xffffffffn)), this.uncheckedU32(Number(t >> 32n));
        }
        uncheckedU128(t) {
            this.uncheckedU64(t & 0xffffffffffffffffn), this.uncheckedU64(t >> 64n);
        }
        uncheckedU256(t) {
            this.uncheckedU128(t & 2n ** 128n - 1n), this.uncheckedU128(t >> 128n);
        }
        u8(t) {
            (0, _e.checkUnsignedInt)(t, 8), this.write(t);
        }
        u16(t) {
            (0, _e.checkUnsignedInt)(t, 16), this.uncheckedU16(t);
        }
        u32(t) {
            (0, _e.checkUnsignedInt)(t, 32), this.uncheckedU32(t);
        }
        u64(t) {
            (0, _e.checkUnsignedBigInt)(t, 64), this.uncheckedU64(t);
        }
        u128(t) {
            (0, _e.checkUnsignedBigInt)(t, 128), this.uncheckedU128(t);
        }
        u256(t) {
            (0, _e.checkUnsignedBigInt)(t, 256), this.uncheckedU256(t);
        }
        i8(t) {
            (0, _e.checkSignedInt)(t, 8), this.write((t + 256) % 256);
        }
        i16(t) {
            (0, _e.checkSignedInt)(t, 16);
            let r = 2 ** 16;
            t = (t + r) % r, this.uncheckedU16(t);
        }
        i32(t) {
            (0, _e.checkSignedInt)(t, 32);
            let r = 2 ** 32;
            t = (t + r) % r, this.uncheckedU32(t);
        }
        i64(t) {
            (0, _e.checkSignedBigInt)(t, 64);
            let r = 2n ** 64n;
            t = (t + r) % r, this.uncheckedU64(t);
        }
        i128(t) {
            (0, _e.checkSignedBigInt)(t, 128);
            let r = 2n ** 128n;
            t = (t + r) % r, this.uncheckedU128(t);
        }
        i256(t) {
            (0, _e.checkSignedBigInt)(t, 256);
            let r = 2n ** 256n;
            t = (t + r) % r, this.uncheckedU256(t);
        }
        str(t) {
            (0, nu.default)(typeof t == "string");
            let r = _e.UTF8_ENCODER.encode(t);
            this.compact(r.length), this.bytes(r);
        }
        bool(t) {
            (0, nu.default)(typeof t == "boolean"), this.write(Number(t));
        }
        compact(t) {
            if ((0, nu.default)((typeof t == "number" || typeof t == "bigint") && t >= 0, "invalid compact"), t < 64) this.write(Number(t) * 4);
            else if (t < 2 ** 14) t = Number(t), this.write((t & 63) * 4 + 1), this.write(t >>> 6);
            else if (t < 2 ** 30) t = Number(t), this.write((t & 63) * 4 + 2), this.write(t >>> 6 & 255), this.uncheckedU16(t >>> 14);
            else if (t < 2n ** 536n) for(t = BigInt(t), this.write((0, _e.unsignedIntByteLength)(t) * 4 - 13); t > 0;)this.write(Number(t & 0xffn)), t = t >> 8n;
            else throw new Error(`${t.toString(16)} is too large for a compact`);
        }
    }
    br.Sink = ld;
    class TD extends ld {
        constructor(){
            super(...arguments), this.out = "0x";
        }
        write(t) {
            this.out += (t >>> 4).toString(16), this.out += (t & 15).toString(16);
        }
        bytes(t) {
            Buffer.isBuffer(t) ? this.out += t.toString("hex") : this.out += Buffer.from(t.buffer, t.byteOffset, t.byteLength).toString("hex");
        }
        toHex() {
            return this.out;
        }
    }
    br.HexSink = TD;
    class vD extends ld {
        constructor(){
            super(...arguments), this.buf = Buffer.allocUnsafe(128), this.pos = 0;
        }
        alloc(t) {
            if (this.buf.length - this.pos < t) {
                let r = Buffer.allocUnsafe(Math.max(t, this.buf.length) * 2);
                r.set(this.buf), this.buf = r;
            }
        }
        write(t) {
            this.alloc(1), this.buf[this.pos] = t, this.pos += 1;
        }
        bytes(t) {
            this.alloc(t.length), this.buf.set(t, this.pos), this.pos += t.length;
        }
        toBytes() {
            return this.buf.subarray(0, this.pos);
        }
    }
    br.ByteSink = vD;
    var Sc = {}, Cn = {}, CD = Dt && Dt.__importDefault || function(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    };
    Object.defineProperty(Cn, "__esModule", {
        value: !0
    });
    Cn.toCodecTypes = Cn.getCodecType = void 0;
    const jo = CD(zn), qe = Kn, gp = ot;
    function Um(e, t) {
        let r = e[t];
        switch(r.kind){
            case qe.TypeKind.Compact:
                {
                    let n = e[r.type];
                    return (0, jo.default)(n.kind == qe.TypeKind.Primitive), (0, jo.default)(n.primitive[0] == "U"), {
                        kind: qe.TypeKind.Compact,
                        integer: n.primitive
                    };
                }
            case qe.TypeKind.Composite:
                return r.fields.length == 0 || r.fields[0].name == null ? {
                    kind: qe.TypeKind.Tuple,
                    tuple: r.fields.map((n)=>((0, jo.default)(n.name == null), n.type))
                } : {
                    kind: qe.TypeKind.Struct,
                    fields: r.fields.map((n)=>({
                            name: (0, gp.assertNotNull)(n.name),
                            type: n.type
                        }))
                };
            case qe.TypeKind.Variant:
                {
                    let n = r.variants.filter((f)=>f != null), s = {};
                    if (new Set(n.map((f)=>f.index)).size != n.length) throw new Error(`Variant type ${t} has duplicate case indexes`);
                    let a = n.reduce((f, g)=>Math.max(f, g.index), 0) + 1, _ = new Array(a);
                    return n.forEach((f)=>{
                        let g;
                        if (f.fields[0]?.name == null) switch(f.fields.length){
                            case 0:
                                g = {
                                    kind: "empty",
                                    name: f.name,
                                    index: f.index
                                };
                                break;
                            case 1:
                                g = {
                                    kind: "value",
                                    name: f.name,
                                    index: f.index,
                                    type: f.fields[0].type
                                };
                                break;
                            default:
                                g = {
                                    kind: "tuple",
                                    name: f.name,
                                    index: f.index,
                                    def: {
                                        kind: qe.TypeKind.Tuple,
                                        tuple: f.fields.map((h)=>((0, jo.default)(h.name == null), h.type))
                                    }
                                };
                        }
                        else g = {
                            kind: "struct",
                            name: f.name,
                            index: f.index,
                            def: {
                                kind: qe.TypeKind.Struct,
                                fields: f.fields.map((h)=>({
                                        name: (0, gp.assertNotNull)(h.name),
                                        type: h.type
                                    }))
                            }
                        };
                        _[f.index] = g, s[g.name] = g;
                    }), {
                        kind: qe.TypeKind.Variant,
                        variants: _,
                        variantsByName: s
                    };
                }
            default:
                return r;
        }
    }
    Cn.getCodecType = Um;
    function zD(e) {
        let t = new Array(e.length);
        for(let r = 0; r < e.length; r++)t[r] = Um(e, r);
        return t;
    }
    Cn.toCodecTypes = zD;
    var AD = Dt && Dt.__importDefault || function(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    };
    Object.defineProperty(Sc, "__esModule", {
        value: !0
    });
    Sc.Codec = void 0;
    const Lo = Jr, Ze = AD(zn), pp = br, $D = Oo, at = Kn, PD = Cn, Ge = ot;
    class MD {
        constructor(t){
            this.types = (0, PD.toCodecTypes)(t);
        }
        decodeBinary(t, r) {
            let n = new $D.Src(r), s = this.decode(t, n);
            return n.assertEOF(), s;
        }
        encodeToHex(t, r) {
            let n = new pp.HexSink;
            return this.encode(t, r, n), n.toHex();
        }
        encodeToBinary(t, r) {
            let n = new pp.ByteSink;
            return this.encode(t, r, n), n.toBytes();
        }
        decode(t, r) {
            let n = this.types[t];
            switch(n.kind){
                case at.TypeKind.Primitive:
                    return KD(n.primitive, r);
                case at.TypeKind.Compact:
                    return LD(n, r);
                case at.TypeKind.BitSequence:
                    return ND(r);
                case at.TypeKind.Array:
                    return this.decodeArray(n, r);
                case at.TypeKind.Sequence:
                    return this.decodeSequence(n, r);
                case at.TypeKind.Tuple:
                    return this.decodeTuple(n, r);
                case at.TypeKind.Struct:
                    return this.decodeStruct(n, r);
                case at.TypeKind.Variant:
                    return this.decodeVariant(n, r);
                case at.TypeKind.Option:
                    return this.decodeOption(n, r);
                case at.TypeKind.BooleanOption:
                    return UD(r);
                case at.TypeKind.Bytes:
                    return hp(r);
                case at.TypeKind.BytesArray:
                    return r.bytes(n.len);
                case at.TypeKind.HexBytes:
                    return (0, Lo.toHex)(hp(r));
                case at.TypeKind.HexBytesArray:
                    return (0, Lo.toHex)(r.bytes(n.len));
                case at.TypeKind.DoNotConstruct:
                    (0, Ge.throwUnexpectedCase)("DoNotConstruct type reached");
                default:
                    (0, Ge.throwUnexpectedCase)(n.kind);
            }
        }
        decodeArray(t, r) {
            let { len: n, type: s } = t, i = new Array(n);
            for(let a = 0; a < n; a++)i[a] = this.decode(s, r);
            return i;
        }
        decodeSequence(t, r) {
            let n = r.compactLength(), s = new Array(n);
            for(let i = 0; i < n; i++)s[i] = this.decode(t.type, r);
            return s;
        }
        decodeTuple(t, r) {
            if (t.tuple.length == 0) return null;
            let n = new Array(t.tuple.length);
            for(let s = 0; s < t.tuple.length; s++)n[s] = this.decode(t.tuple[s], r);
            return n;
        }
        decodeStruct(t, r) {
            let n = {};
            for(let s = 0; s < t.fields.length; s++){
                let i = t.fields[s];
                n[i.name] = this.decode(i.type, r);
            }
            return n;
        }
        decodeVariant(t, r) {
            let n = r.u8(), s = t.variants[n];
            switch(s == null && (0, Ge.throwUnexpectedCase)(`unknown variant index: ${n}`), s.kind){
                case "empty":
                    return {
                        __kind: s.name
                    };
                case "tuple":
                    return {
                        __kind: s.name,
                        value: this.decodeTuple(s.def, r)
                    };
                case "value":
                    return {
                        __kind: s.name,
                        value: this.decode(s.type, r)
                    };
                case "struct":
                    {
                        let i = this.decodeStruct(s.def, r);
                        return i.__kind = s.name, i;
                    }
                default:
                    (0, Ge.throwUnexpectedCase)();
            }
        }
        decodeOption(t, r) {
            let n = r.u8();
            switch(n){
                case 0:
                    return;
                case 1:
                    return this.decode(t.type, r);
                default:
                    (0, Ge.throwUnexpectedCase)(n.toString());
            }
        }
        encode(t, r, n) {
            let s = this.types[t];
            switch(s.kind){
                case at.TypeKind.Primitive:
                    DD(s.primitive, r, n);
                    break;
                case at.TypeKind.Compact:
                    n.compact(r);
                    break;
                case at.TypeKind.BitSequence:
                    BD(r, n);
                    break;
                case at.TypeKind.Array:
                    this.encodeArray(s, r, n);
                    break;
                case at.TypeKind.Sequence:
                    this.encodeSequence(s, r, n);
                    break;
                case at.TypeKind.Tuple:
                    this.encodeTuple(s, r, n);
                    break;
                case at.TypeKind.Struct:
                    this.encodeStruct(s, r, n);
                    break;
                case at.TypeKind.Variant:
                    this.encodeVariant(s, r, n);
                    break;
                case at.TypeKind.BytesArray:
                    bp(s, r, n);
                    break;
                case at.TypeKind.HexBytesArray:
                    bp(s, (0, Lo.decodeHex)(r), n);
                    break;
                case at.TypeKind.Bytes:
                    wp(r, n);
                    break;
                case at.TypeKind.HexBytes:
                    wp((0, Lo.decodeHex)(r), n);
                    break;
                case at.TypeKind.BooleanOption:
                    jD(r, n);
                    break;
                case at.TypeKind.Option:
                    this.encodeOption(s, r, n);
                    break;
                default:
                    (0, Ge.throwUnexpectedCase)(s.kind);
            }
        }
        encodeArray(t, r, n) {
            (0, Ze.default)(Array.isArray(r) && r.length == t.len);
            for(let s = 0; s < r.length; s++)this.encode(t.type, r[s], n);
        }
        encodeSequence(t, r, n) {
            (0, Ze.default)(Array.isArray(r)), n.compact(r.length);
            for(let s = 0; s < r.length; s++)this.encode(t.type, r[s], n);
        }
        encodeTuple(t, r, n) {
            if (t.tuple.length == 0) {
                (0, Ze.default)(r == null);
                return;
            }
            (0, Ze.default)(Array.isArray(r) && t.tuple.length == r.length);
            for(let s = 0; s < r.length; s++)this.encode(t.tuple[s], r[s], n);
        }
        encodeStruct(t, r, n) {
            for(let s = 0; s < t.fields.length; s++){
                let i = t.fields[s];
                this.encode(i.type, r[i.name], n);
            }
        }
        encodeVariant(t, r, n) {
            (0, Ze.default)(typeof r?.__kind == "string", "not a variant type value");
            let s = t.variantsByName[r.__kind];
            if (s == null) throw new Error(`Unknown variant: ${r.__kind}`);
            switch(n.u8(s.index), s.kind){
                case "empty":
                    break;
                case "value":
                    this.encode(s.type, r.value, n);
                    break;
                case "tuple":
                    this.encodeTuple(s.def, r.value, n);
                    break;
                case "struct":
                    this.encodeStruct(s.def, r, n);
                    break;
                default:
                    (0, Ge.throwUnexpectedCase)();
            }
        }
        encodeOption(t, r, n) {
            r === void 0 ? n.u8(0) : (n.u8(1), this.encode(t.type, r, n));
        }
    }
    Sc.Codec = MD;
    function hp(e) {
        let t = e.compactLength();
        return e.bytes(t);
    }
    function wp(e, t) {
        (0, Ze.default)(e instanceof Uint8Array), t.compact(e.length), t.bytes(e);
    }
    function bp(e, t, r) {
        (0, Ze.default)(t instanceof Uint8Array && t.length == e.len), r.bytes(t);
    }
    function ND(e) {
        let t = e.compactLength(), r = Math.ceil(t / 8);
        return {
            bytes: e.bytes(r),
            bitLength: t
        };
    }
    function BD(e, t) {
        (0, Ze.default)(e && typeof e == "object" && Number.isInteger(e.bitLength) && e.bytes instanceof Uint8Array);
        let r = e;
        (0, Ze.default)(Math.ceil(r.bitLength / 8) == r.bytes.length), t.compact(r.bitLength), t.bytes(r.bytes);
    }
    function UD(e) {
        let t = e.u8();
        switch(t){
            case 0:
                return null;
            case 1:
                return !0;
            case 2:
                return !1;
            default:
                (0, Ge.throwUnexpectedCase)(t.toString());
        }
    }
    function jD(e, t) {
        e == null ? t.u8(0) : ((0, Ze.default)(typeof e == "boolean"), t.u8(e ? 1 : 2));
    }
    function LD(e, t) {
        let r = t.compact();
        switch(e.integer){
            case "U8":
            case "U16":
            case "U32":
                return r;
            default:
                return BigInt(r);
        }
    }
    function KD(e, t) {
        switch(e){
            case "I8":
                return t.i8();
            case "U8":
                return t.u8();
            case "I16":
                return t.i16();
            case "U16":
                return t.u16();
            case "I32":
                return t.i32();
            case "U32":
                return t.u32();
            case "I64":
                return t.i64();
            case "U64":
                return t.u64();
            case "I128":
                return t.i128();
            case "U128":
                return t.u128();
            case "I256":
                return t.i256();
            case "U256":
                return t.u256();
            case "Bool":
                return t.bool();
            case "Str":
                return t.str();
            default:
                (0, Ge.throwUnexpectedCase)(e);
        }
    }
    function DD(e, t, r) {
        switch(e){
            case "I8":
                r.i8(t);
                break;
            case "U8":
                r.u8(t);
                break;
            case "I16":
                r.i16(t);
                break;
            case "U16":
                r.u16(t);
                break;
            case "I32":
                r.i32(t);
                break;
            case "U32":
                r.u32(t);
                break;
            case "I64":
                r.i64(t);
                break;
            case "U64":
                r.u64(t);
                break;
            case "I128":
                r.i128(t);
                break;
            case "U128":
                r.u128(t);
                break;
            case "I256":
                r.i256(t);
                break;
            case "U256":
                r.u256(t);
                break;
            case "Bool":
                r.bool(t);
                break;
            case "Str":
                r.str(t);
                break;
            default:
                (0, Ge.throwUnexpectedCase)(e);
        }
    }
    var Ys = {}, fd = {};
    Object.defineProperty(fd, "__esModule", {
        value: !0
    });
    fd.toJSON = en;
    const qD = Jr;
    function en(e) {
        let t;
        switch(typeof e){
            case "bigint":
                return e.toString();
            case "object":
                if (e == null) return null;
                if (e instanceof Uint8Array) return (0, qD.toHex)(e);
                if (e instanceof Date) return e.toISOString();
                if (typeof e.toJSON == "function" && (t = e.toJSON()) !== e) return en(t);
                if (e instanceof Error) return t = {}, e.stack ? t.stack = e.stack : t.stack = e.toString(), e.cause != null && (t.cause = en(e.cause)), t = yp(e, t), t;
                if (e instanceof Map) {
                    let r = [];
                    for (let [n, s] of e.entries())r.push({
                        k: n,
                        v: s
                    });
                    return en({
                        map: r
                    });
                } else return e instanceof Set ? en({
                    set: [
                        ...e
                    ]
                }) : Array.isArray(e) ? VD(e) : yp(e);
            default:
                return e;
        }
    }
    function VD(e) {
        let t = new Array(e.length);
        for(let r = 0; r < e.length; r++)t[r] = en(e[r]);
        return t;
    }
    function yp(e, t) {
        t = t || {};
        for(let r in e)t[r] = en(e[r]);
        return t;
    }
    var HD = Dt && Dt.__importDefault || function(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    };
    Object.defineProperty(Ys, "__esModule", {
        value: !0
    });
    Ys.decodeBinaryArray = Ys.JsonCodec = void 0;
    const ra = Jr, JD = fd, ue = HD(zn), re = Kn, WD = Cn, Lt = ot;
    class GD {
        static encode(t) {
            return (0, JD.toJSON)(t);
        }
        constructor(t){
            this.types = (0, WD.toCodecTypes)(t);
        }
        decode(t, r) {
            let n = this.types[t];
            switch(n.kind){
                case re.TypeKind.Primitive:
                    return mp(n.primitive, r);
                case re.TypeKind.Compact:
                    return mp(n.integer, r);
                case re.TypeKind.BitSequence:
                    return (0, ra.decodeHex)(r);
                case re.TypeKind.Array:
                    return this.decodeArray(n, r);
                case re.TypeKind.Sequence:
                    return this.decodeSequence(n, r);
                case re.TypeKind.Tuple:
                    return this.decodeTuple(n, r);
                case re.TypeKind.Struct:
                    return this.decodeStruct(n, r);
                case re.TypeKind.Variant:
                    return this.decodeVariant(n, r);
                case re.TypeKind.Option:
                    return this.decodeOption(n, r);
                case re.TypeKind.BooleanOption:
                    return YD(r);
                case re.TypeKind.Bytes:
                    return (0, ra.decodeHex)(r);
                case re.TypeKind.BytesArray:
                    return jm(n.len, r);
                case re.TypeKind.HexBytes:
                case re.TypeKind.HexBytesArray:
                    return (0, ue.default)((0, ra.isHex)(r)), r;
                case re.TypeKind.DoNotConstruct:
                    (0, Lt.throwUnexpectedCase)("DoNotConstruct type reached");
                default:
                    (0, Lt.throwUnexpectedCase)();
            }
        }
        decodeArray(t, r) {
            let { len: n, type: s } = t;
            (0, ue.default)(Array.isArray(r)), (0, ue.default)(r.length == n);
            let i = new Array(n);
            for(let a = 0; a < n; a++)i[a] = this.decode(s, r[a]);
            return i;
        }
        decodeSequence(t, r) {
            (0, ue.default)(Array.isArray(r));
            let n = new Array(r.length);
            for(let s = 0; s < r.length; s++)n[s] = this.decode(t.type, r[s]);
            return n;
        }
        decodeTuple(t, r) {
            let n = t.tuple;
            if (n.length == 0) return (0, ue.default)(r == null || Array.isArray(r) && r.length == 0), null;
            {
                (0, ue.default)(Array.isArray(r)), (0, ue.default)(r.length == n.length);
                let s = new Array(n.length);
                for(let i = 0; i < n.length; i++)s[i] = this.decode(n[i], r[i]);
                return s;
            }
        }
        decodeStruct(t, r) {
            (0, ue.default)((0, Lt.isObject)(r));
            let n = {};
            for(let s = 0; s < t.fields.length; s++){
                let i = t.fields[s];
                n[i.name] = this.decode(i.type, r[i.name]);
            }
            return n;
        }
        decodeVariant(t, r) {
            (0, ue.default)((0, Lt.isObject)(r)), (0, ue.default)(typeof r.__kind == "string");
            let n = t.variantsByName[r.__kind];
            if (n == null) throw new Error(`Unknown variant ${r.__kind}`);
            switch(n.kind){
                case "empty":
                    return {
                        __kind: r.__kind
                    };
                case "value":
                    return {
                        __kind: r.__kind,
                        value: this.decode(n.type, r.value)
                    };
                case "tuple":
                    return {
                        __kind: r.__kind,
                        value: this.decodeTuple(n.def, r.value)
                    };
                case "struct":
                    {
                        let s = this.decodeStruct(n.def, r);
                        return s.__kind = r.__kind, s;
                    }
                default:
                    (0, Lt.throwUnexpectedCase)(n.kind);
            }
        }
        decodeOption(t, r) {
            return r == null ? void 0 : this.decode(t.type, r);
        }
    }
    Ys.JsonCodec = GD;
    function mp(e, t) {
        switch(e){
            case "I8":
                return (0, Lt.checkSignedInt)(t, 8), t;
            case "I16":
                return (0, Lt.checkSignedInt)(t, 16), t;
            case "I32":
                return (0, Lt.checkSignedInt)(t, 32), t;
            case "I64":
                return (0, Lt.toSignedBigInt)(t, 64);
            case "I128":
                return (0, Lt.toSignedBigInt)(t, 128);
            case "I256":
                return (0, Lt.toSignedBigInt)(t, 256);
            case "U8":
                return (0, Lt.checkUnsignedInt)(t, 8), t;
            case "U16":
                return (0, Lt.checkUnsignedInt)(t, 16), t;
            case "U32":
                return (0, Lt.checkUnsignedInt)(t, 32), t;
            case "U64":
                return (0, Lt.toUnsignedBigInt)(t, 64);
            case "U128":
                return (0, Lt.toUnsignedBigInt)(t, 128);
            case "U256":
                return (0, Lt.toUnsignedBigInt)(t, 256);
            case "Bool":
                return (0, ue.default)(typeof t == "boolean"), t;
            case "Str":
                return (0, ue.default)(typeof t == "string"), t;
            default:
                (0, Lt.throwUnexpectedCase)(e);
        }
    }
    function YD(e) {
        if (e != null) return (0, ue.default)(typeof e == "boolean"), e;
    }
    function jm(e, t) {
        let r = (0, ra.decodeHex)(t);
        return (0, ue.default)(r.length == e), r;
    }
    Ys.decodeBinaryArray = jm;
    (function(e) {
        var t = Dt && Dt.__createBinding || (Object.create ? function(n, s, i, a) {
            a === void 0 && (a = i);
            var _ = Object.getOwnPropertyDescriptor(s, i);
            (!_ || ("get" in _ ? !s.__esModule : _.writable || _.configurable)) && (_ = {
                enumerable: !0,
                get: function() {
                    return s[i];
                }
            }), Object.defineProperty(n, a, _);
        } : function(n, s, i, a) {
            a === void 0 && (a = i), n[a] = s[i];
        }), r = Dt && Dt.__exportStar || function(n, s) {
            for(var i in n)i !== "default" && !Object.prototype.hasOwnProperty.call(s, i) && t(s, n, i);
        };
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), r(Kn, e), r(Oo, e), r(br, e), r(Sc, e), r(Ys, e);
    })(hl);
    const ns = Symbol("Mainnet"), Sp = {
        toString: (e)=>e === ns ? "mainnet" : e
    }, XD = {
        modulus: BigInt("0x73eda753299d7d483339d80809a1d80553bda402fffe5bfeffffffff00000001")
    }, Fp = {
        encode: (e)=>{
            const t = new hl.ByteSink;
            return t.compact(e), Buffer.from(t.toBytes());
        },
        decode: (e)=>{
            const t = new hl.Src(e), r = t.compact();
            return t.assertEOF(), BigInt(r);
        }
    }, qr = Symbol("MidnightBech32m");
    class Re {
        static prefix = "mn";
        static encode(t, r) {
            return r[qr].encode(t, r);
        }
        static validateSegment(t, r) {
            if (!/^[A-Za-z1-9-]+$/.test(r)) throw new Error(`Segment ${t}: ${r} contains disallowed characters. Allowed characters are only numbers, latin letters and a hyphen`);
        }
        static parse(t) {
            const r = ru.decodeToBytes(t), [n, s, i = ns] = r.prefix.split("_");
            if (n != Re.prefix) throw new Error(`Expected prefix ${Re.prefix}`);
            return Re.validateSegment("type", s), i != ns && Re.validateSegment("network", i), new Re(s, i, Buffer.from(r.bytes));
        }
        type;
        network;
        data;
        constructor(t, r, n){
            this.data = n, this.network = r, this.type = t, Re.validateSegment("type", t), r != ns && Re.validateSegment("network", r);
        }
        decode(t, r) {
            return t[qr].decode(r, this);
        }
        asString() {
            const t = this.network == ns ? "" : `_${this.network}`;
            return ru.encode(`${Re.prefix}_${this.type}${t}`, ru.toWords(this.data), !1);
        }
        toString() {
            return this.asString();
        }
    }
    class Vr {
        type;
        dataToBytes;
        dataFromBytes;
        constructor(t, r, n){
            this.dataFromBytes = n, this.dataToBytes = r, this.type = t;
        }
        encode(t, r) {
            const n = Vr.createContext(t);
            return new Re(this.type, n.networkId, this.dataToBytes(r));
        }
        decode(t, r) {
            const n = Vr.createContext(t);
            if (r.type != this.type) throw new Error(`Expected type ${this.type}, got ${r.type}`);
            if (n.networkId != r.network) throw new Error(`Expected ${Sp.toString(n.networkId)} address, got ${Sp.toString(r.network)} one`);
            return this.dataFromBytes(r.data);
        }
        static createContext(t) {
            return t === "mainnet" ? {
                networkId: ns
            } : {
                networkId: t
            };
        }
    }
    class na {
        static codec = new Vr("shield-addr", (t)=>Buffer.concat([
                t.coinPublicKey.data,
                t.encryptionPublicKey.data
            ]), (t)=>{
            const r = new dr(t.subarray(0, dr.keyLength)), n = new us(t.subarray(dr.keyLength));
            return new na(r, n);
        });
        static [qr] = na.codec;
        [qr] = na.codec;
        coinPublicKey;
        encryptionPublicKey;
        constructor(t, r){
            this.encryptionPublicKey = r, this.coinPublicKey = t;
        }
        coinPublicKeyString() {
            return this.coinPublicKey.data.toString("hex");
        }
        encryptionPublicKeyString() {
            return this.encryptionPublicKey.data.toString("hex");
        }
        equals(t) {
            return this.coinPublicKey.equals(t.coinPublicKey) && this.encryptionPublicKey.equals(t.encryptionPublicKey);
        }
    }
    class dr {
        static keyLength = 32;
        static codec = new Vr("shield-cpk", (t)=>t.data, (t)=>new dr(t));
        static fromHexString(t) {
            return new dr(Buffer.from(t, "hex"));
        }
        data;
        constructor(t){
            if (this.data = t, t.length != dr.keyLength) throw new Error("Coin public key needs to be 32 bytes long");
        }
        toHexString() {
            return this.data.toString("hex");
        }
        equals(t) {
            return (typeof t == "string" ? dr.fromHexString(t) : t).data.equals(this.data);
        }
    }
    class us {
        static keyLength = 32;
        static codec = new Vr("shield-epk", (t)=>t.data, (t)=>new us(t));
        static fromHexString(t) {
            return new us(Buffer.from(t, "hex"));
        }
        data;
        constructor(t){
            this.data = t;
        }
        toHexString() {
            return this.data.toString("hex");
        }
        equals(t) {
            return (typeof t == "string" ? us.fromHexString(t) : t).data.equals(this.data);
        }
    }
    class Zn {
        data;
        static keyLength = 32;
        static codec = new Vr("addr", (t)=>t.data, (t)=>new Zn(t));
        static [qr] = Zn.codec;
        [qr] = Zn.codec;
        constructor(t){
            if (t.length != Zn.keyLength) throw new Error("Unshielded address needs to be 32 bytes long");
            this.data = t;
        }
        get hexString() {
            return this.data.toString("hex");
        }
        equals(t) {
            return (typeof t == "string" ? new Zn(Buffer.from(t, "hex")) : t).data.equals(this.data);
        }
    }
    class ts {
        data;
        static codec = new Vr("dust", (t)=>t.serialize(), (t)=>new ts(Fp.decode(t)));
        static [qr] = ts.codec;
        [qr] = ts.codec;
        static encodePublicKey = (t, r)=>ts.codec.encode(t, new ts(r)).asString();
        constructor(t){
            if (t >= XD.modulus) throw new Error("Dust address is too large");
            this.data = t;
        }
        serialize() {
            return Fp.encode(this.data);
        }
        equals(t) {
            return (typeof t == "bigint" ? t : t.data) === this.data;
        }
    }
    let kc;
    Fc = {};
    kc = {};
    kc.byteLength = tq;
    kc.toByteArray = rq;
    kc.fromByteArray = iq;
    var tr = [], Ie = [], QD = typeof Uint8Array < "u" ? Uint8Array : Array, su = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    for(var Xn = 0, ZD = su.length; Xn < ZD; ++Xn)tr[Xn] = su[Xn], Ie[su.charCodeAt(Xn)] = Xn;
    Ie[45] = 62;
    Ie[95] = 63;
    function Lm(e) {
        var t = e.length;
        if (t % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
        var r = e.indexOf("=");
        r === -1 && (r = t);
        var n = r === t ? 0 : 4 - r % 4;
        return [
            r,
            n
        ];
    }
    function tq(e) {
        var t = Lm(e), r = t[0], n = t[1];
        return (r + n) * 3 / 4 - n;
    }
    function eq(e, t, r) {
        return (t + r) * 3 / 4 - r;
    }
    function rq(e) {
        var t, r = Lm(e), n = r[0], s = r[1], i = new QD(eq(e, n, s)), a = 0, _ = s > 0 ? n - 4 : n, f;
        for(f = 0; f < _; f += 4)t = Ie[e.charCodeAt(f)] << 18 | Ie[e.charCodeAt(f + 1)] << 12 | Ie[e.charCodeAt(f + 2)] << 6 | Ie[e.charCodeAt(f + 3)], i[a++] = t >> 16 & 255, i[a++] = t >> 8 & 255, i[a++] = t & 255;
        return s === 2 && (t = Ie[e.charCodeAt(f)] << 2 | Ie[e.charCodeAt(f + 1)] >> 4, i[a++] = t & 255), s === 1 && (t = Ie[e.charCodeAt(f)] << 10 | Ie[e.charCodeAt(f + 1)] << 4 | Ie[e.charCodeAt(f + 2)] >> 2, i[a++] = t >> 8 & 255, i[a++] = t & 255), i;
    }
    function nq(e) {
        return tr[e >> 18 & 63] + tr[e >> 12 & 63] + tr[e >> 6 & 63] + tr[e & 63];
    }
    function sq(e, t, r) {
        for(var n, s = [], i = t; i < r; i += 3)n = (e[i] << 16 & 16711680) + (e[i + 1] << 8 & 65280) + (e[i + 2] & 255), s.push(nq(n));
        return s.join("");
    }
    function iq(e) {
        for(var t, r = e.length, n = r % 3, s = [], i = 16383, a = 0, _ = r - n; a < _; a += i)s.push(sq(e, a, a + i > _ ? _ : a + i));
        return n === 1 ? (t = e[r - 1], s.push(tr[t >> 2] + tr[t << 4 & 63] + "==")) : n === 2 && (t = (e[r - 2] << 8) + e[r - 1], s.push(tr[t >> 10] + tr[t >> 4 & 63] + tr[t << 2 & 63] + "=")), s.join("");
    }
    var dd = {};
    dd.read = function(e, t, r, n, s) {
        var i, a, _ = s * 8 - n - 1, f = (1 << _) - 1, g = f >> 1, h = -7, b = r ? s - 1 : 0, S = r ? -1 : 1, k = e[t + b];
        for(b += S, i = k & (1 << -h) - 1, k >>= -h, h += _; h > 0; i = i * 256 + e[t + b], b += S, h -= 8);
        for(a = i & (1 << -h) - 1, i >>= -h, h += n; h > 0; a = a * 256 + e[t + b], b += S, h -= 8);
        if (i === 0) i = 1 - g;
        else {
            if (i === f) return a ? NaN : (k ? -1 : 1) * (1 / 0);
            a = a + Math.pow(2, n), i = i - g;
        }
        return (k ? -1 : 1) * a * Math.pow(2, i - n);
    };
    dd.write = function(e, t, r, n, s, i) {
        var a, _, f, g = i * 8 - s - 1, h = (1 << g) - 1, b = h >> 1, S = s === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0, k = n ? 0 : i - 1, x = n ? 1 : -1, $ = t < 0 || t === 0 && 1 / t < 0 ? 1 : 0;
        for(t = Math.abs(t), isNaN(t) || t === 1 / 0 ? (_ = isNaN(t) ? 1 : 0, a = h) : (a = Math.floor(Math.log(t) / Math.LN2), t * (f = Math.pow(2, -a)) < 1 && (a--, f *= 2), a + b >= 1 ? t += S / f : t += S * Math.pow(2, 1 - b), t * f >= 2 && (a++, f /= 2), a + b >= h ? (_ = 0, a = h) : a + b >= 1 ? (_ = (t * f - 1) * Math.pow(2, s), a = a + b) : (_ = t * Math.pow(2, b - 1) * Math.pow(2, s), a = 0)); s >= 8; e[r + k] = _ & 255, k += x, _ /= 256, s -= 8);
        for(a = a << s | _, g += s; g > 0; e[r + k] = a & 255, k += x, a /= 256, g -= 8);
        e[r + k - x] |= $ * 128;
    };
    (function(e) {
        const t = kc, r = dd, n = typeof Symbol == "function" && typeof Symbol.for == "function" ? Symbol.for("nodejs.util.inspect.custom") : null;
        e.Buffer = _, e.SlowBuffer = V, e.INSPECT_MAX_BYTES = 50;
        const s = 2147483647;
        e.kMaxLength = s, _.TYPED_ARRAY_SUPPORT = i(), !_.TYPED_ARRAY_SUPPORT && typeof console < "u" && typeof console.error == "function" && console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");
        function i() {
            try {
                const d = new Uint8Array(1), c = {
                    foo: function() {
                        return 42;
                    }
                };
                return Object.setPrototypeOf(c, Uint8Array.prototype), Object.setPrototypeOf(d, c), d.foo() === 42;
            } catch  {
                return !1;
            }
        }
        Object.defineProperty(_.prototype, "parent", {
            enumerable: !0,
            get: function() {
                if (_.isBuffer(this)) return this.buffer;
            }
        }), Object.defineProperty(_.prototype, "offset", {
            enumerable: !0,
            get: function() {
                if (_.isBuffer(this)) return this.byteOffset;
            }
        });
        function a(d) {
            if (d > s) throw new RangeError('The value "' + d + '" is invalid for option "size"');
            const c = new Uint8Array(d);
            return Object.setPrototypeOf(c, _.prototype), c;
        }
        function _(d, c, u) {
            if (typeof d == "number") {
                if (typeof c == "string") throw new TypeError('The "string" argument must be of type string. Received type number');
                return b(d);
            }
            return f(d, c, u);
        }
        _.poolSize = 8192;
        function f(d, c, u) {
            if (typeof d == "string") return S(d, c);
            if (ArrayBuffer.isView(d)) return x(d);
            if (d == null) throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof d);
            if (De(d, ArrayBuffer) || d && De(d.buffer, ArrayBuffer) || typeof SharedArrayBuffer < "u" && (De(d, SharedArrayBuffer) || d && De(d.buffer, SharedArrayBuffer))) return $(d, c, u);
            if (typeof d == "number") throw new TypeError('The "value" argument must not be of type number. Received type number');
            const p = d.valueOf && d.valueOf();
            if (p != null && p !== d) return _.from(p, c, u);
            const y = C(d);
            if (y) return y;
            if (typeof Symbol < "u" && Symbol.toPrimitive != null && typeof d[Symbol.toPrimitive] == "function") return _.from(d[Symbol.toPrimitive]("string"), c, u);
            throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof d);
        }
        _.from = function(d, c, u) {
            return f(d, c, u);
        }, Object.setPrototypeOf(_.prototype, Uint8Array.prototype), Object.setPrototypeOf(_, Uint8Array);
        function g(d) {
            if (typeof d != "number") throw new TypeError('"size" argument must be of type number');
            if (d < 0) throw new RangeError('The value "' + d + '" is invalid for option "size"');
        }
        function h(d, c, u) {
            return g(d), d <= 0 ? a(d) : c !== void 0 ? typeof u == "string" ? a(d).fill(c, u) : a(d).fill(c) : a(d);
        }
        _.alloc = function(d, c, u) {
            return h(d, c, u);
        };
        function b(d) {
            return g(d), a(d < 0 ? 0 : z(d) | 0);
        }
        _.allocUnsafe = function(d) {
            return b(d);
        }, _.allocUnsafeSlow = function(d) {
            return b(d);
        };
        function S(d, c) {
            if ((typeof c != "string" || c === "") && (c = "utf8"), !_.isEncoding(c)) throw new TypeError("Unknown encoding: " + c);
            const u = B(d, c) | 0;
            let p = a(u);
            const y = p.write(d, c);
            return y !== u && (p = p.slice(0, y)), p;
        }
        function k(d) {
            const c = d.length < 0 ? 0 : z(d.length) | 0, u = a(c);
            for(let p = 0; p < c; p += 1)u[p] = d[p] & 255;
            return u;
        }
        function x(d) {
            if (De(d, Uint8Array)) {
                const c = new Uint8Array(d);
                return $(c.buffer, c.byteOffset, c.byteLength);
            }
            return k(d);
        }
        function $(d, c, u) {
            if (c < 0 || d.byteLength < c) throw new RangeError('"offset" is outside of buffer bounds');
            if (d.byteLength < c + (u || 0)) throw new RangeError('"length" is outside of buffer bounds');
            let p;
            return c === void 0 && u === void 0 ? p = new Uint8Array(d) : u === void 0 ? p = new Uint8Array(d, c) : p = new Uint8Array(d, c, u), Object.setPrototypeOf(p, _.prototype), p;
        }
        function C(d) {
            if (_.isBuffer(d)) {
                const c = z(d.length) | 0, u = a(c);
                return u.length === 0 || d.copy(u, 0, 0, c), u;
            }
            if (d.length !== void 0) return typeof d.length != "number" || Rc(d.length) ? a(0) : k(d);
            if (d.type === "Buffer" && Array.isArray(d.data)) return k(d.data);
        }
        function z(d) {
            if (d >= s) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + s.toString(16) + " bytes");
            return d | 0;
        }
        function V(d) {
            return +d != d && (d = 0), _.alloc(+d);
        }
        _.isBuffer = function(c) {
            return c != null && c._isBuffer === !0 && c !== _.prototype;
        }, _.compare = function(c, u) {
            if (De(c, Uint8Array) && (c = _.from(c, c.offset, c.byteLength)), De(u, Uint8Array) && (u = _.from(u, u.offset, u.byteLength)), !_.isBuffer(c) || !_.isBuffer(u)) throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
            if (c === u) return 0;
            let p = c.length, y = u.length;
            for(let F = 0, E = Math.min(p, y); F < E; ++F)if (c[F] !== u[F]) {
                p = c[F], y = u[F];
                break;
            }
            return p < y ? -1 : y < p ? 1 : 0;
        }, _.isEncoding = function(c) {
            switch(String(c).toLowerCase()){
                case "hex":
                case "utf8":
                case "utf-8":
                case "ascii":
                case "latin1":
                case "binary":
                case "base64":
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                    return !0;
                default:
                    return !1;
            }
        }, _.concat = function(c, u) {
            if (!Array.isArray(c)) throw new TypeError('"list" argument must be an Array of Buffers');
            if (c.length === 0) return _.alloc(0);
            let p;
            if (u === void 0) for(u = 0, p = 0; p < c.length; ++p)u += c[p].length;
            const y = _.allocUnsafe(u);
            let F = 0;
            for(p = 0; p < c.length; ++p){
                let E = c[p];
                if (De(E, Uint8Array)) F + E.length > y.length ? (_.isBuffer(E) || (E = _.from(E)), E.copy(y, F)) : Uint8Array.prototype.set.call(y, E, F);
                else if (_.isBuffer(E)) E.copy(y, F);
                else throw new TypeError('"list" argument must be an Array of Buffers');
                F += E.length;
            }
            return y;
        };
        function B(d, c) {
            if (_.isBuffer(d)) return d.length;
            if (ArrayBuffer.isView(d) || De(d, ArrayBuffer)) return d.byteLength;
            if (typeof d != "string") throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof d);
            const u = d.length, p = arguments.length > 2 && arguments[2] === !0;
            if (!p && u === 0) return 0;
            let y = !1;
            for(;;)switch(c){
                case "ascii":
                case "latin1":
                case "binary":
                    return u;
                case "utf8":
                case "utf-8":
                    return Ic(d).length;
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                    return u * 2;
                case "hex":
                    return u >>> 1;
                case "base64":
                    return Fd(d).length;
                default:
                    if (y) return p ? -1 : Ic(d).length;
                    c = ("" + c).toLowerCase(), y = !0;
            }
        }
        _.byteLength = B;
        function D(d, c, u) {
            let p = !1;
            if ((c === void 0 || c < 0) && (c = 0), c > this.length || ((u === void 0 || u > this.length) && (u = this.length), u <= 0) || (u >>>= 0, c >>>= 0, u <= c)) return "";
            for(d || (d = "utf8");;)switch(d){
                case "hex":
                    return Wr(this, c, u);
                case "utf8":
                case "utf-8":
                    return Ht(this, c, u);
                case "ascii":
                    return Rt(this, c, u);
                case "latin1":
                case "binary":
                    return $e(this, c, u);
                case "base64":
                    return te(this, c, u);
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                    return xc(this, c, u);
                default:
                    if (p) throw new TypeError("Unknown encoding: " + d);
                    d = (d + "").toLowerCase(), p = !0;
            }
        }
        _.prototype._isBuffer = !0;
        function H(d, c, u) {
            const p = d[c];
            d[c] = d[u], d[u] = p;
        }
        _.prototype.swap16 = function() {
            const c = this.length;
            if (c % 2 !== 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
            for(let u = 0; u < c; u += 2)H(this, u, u + 1);
            return this;
        }, _.prototype.swap32 = function() {
            const c = this.length;
            if (c % 4 !== 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
            for(let u = 0; u < c; u += 4)H(this, u, u + 3), H(this, u + 1, u + 2);
            return this;
        }, _.prototype.swap64 = function() {
            const c = this.length;
            if (c % 8 !== 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
            for(let u = 0; u < c; u += 8)H(this, u, u + 7), H(this, u + 1, u + 6), H(this, u + 2, u + 5), H(this, u + 3, u + 4);
            return this;
        }, _.prototype.toString = function() {
            const c = this.length;
            return c === 0 ? "" : arguments.length === 0 ? Ht(this, 0, c) : D.apply(this, arguments);
        }, _.prototype.toLocaleString = _.prototype.toString, _.prototype.equals = function(c) {
            if (!_.isBuffer(c)) throw new TypeError("Argument must be a Buffer");
            return this === c ? !0 : _.compare(this, c) === 0;
        }, _.prototype.inspect = function() {
            let c = "";
            const u = e.INSPECT_MAX_BYTES;
            return c = this.toString("hex", 0, u).replace(/(.{2})/g, "$1 ").trim(), this.length > u && (c += " ... "), "<Buffer " + c + ">";
        }, n && (_.prototype[n] = _.prototype.inspect), _.prototype.compare = function(c, u, p, y, F) {
            if (De(c, Uint8Array) && (c = _.from(c, c.offset, c.byteLength)), !_.isBuffer(c)) throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof c);
            if (u === void 0 && (u = 0), p === void 0 && (p = c ? c.length : 0), y === void 0 && (y = 0), F === void 0 && (F = this.length), u < 0 || p > c.length || y < 0 || F > this.length) throw new RangeError("out of range index");
            if (y >= F && u >= p) return 0;
            if (y >= F) return -1;
            if (u >= p) return 1;
            if (u >>>= 0, p >>>= 0, y >>>= 0, F >>>= 0, this === c) return 0;
            let E = F - y, et = p - u;
            const mt = Math.min(E, et), bt = this.slice(y, F), St = c.slice(u, p);
            for(let lt = 0; lt < mt; ++lt)if (bt[lt] !== St[lt]) {
                E = bt[lt], et = St[lt];
                break;
            }
            return E < et ? -1 : et < E ? 1 : 0;
        };
        function L(d, c, u, p, y) {
            if (d.length === 0) return -1;
            if (typeof u == "string" ? (p = u, u = 0) : u > 2147483647 ? u = 2147483647 : u < -2147483648 && (u = -2147483648), u = +u, Rc(u) && (u = y ? 0 : d.length - 1), u < 0 && (u = d.length + u), u >= d.length) {
                if (y) return -1;
                u = d.length - 1;
            } else if (u < 0) if (y) u = 0;
            else return -1;
            if (typeof c == "string" && (c = _.from(c, p)), _.isBuffer(c)) return c.length === 0 ? -1 : Z(d, c, u, p, y);
            if (typeof c == "number") return c = c & 255, typeof Uint8Array.prototype.indexOf == "function" ? y ? Uint8Array.prototype.indexOf.call(d, c, u) : Uint8Array.prototype.lastIndexOf.call(d, c, u) : Z(d, [
                c
            ], u, p, y);
            throw new TypeError("val must be string, number or Buffer");
        }
        function Z(d, c, u, p, y) {
            let F = 1, E = d.length, et = c.length;
            if (p !== void 0 && (p = String(p).toLowerCase(), p === "ucs2" || p === "ucs-2" || p === "utf16le" || p === "utf-16le")) {
                if (d.length < 2 || c.length < 2) return -1;
                F = 2, E /= 2, et /= 2, u /= 2;
            }
            function mt(St, lt) {
                return F === 1 ? St[lt] : St.readUInt16BE(lt * F);
            }
            let bt;
            if (y) {
                let St = -1;
                for(bt = u; bt < E; bt++)if (mt(d, bt) === mt(c, St === -1 ? 0 : bt - St)) {
                    if (St === -1 && (St = bt), bt - St + 1 === et) return St * F;
                } else St !== -1 && (bt -= bt - St), St = -1;
            } else for(u + et > E && (u = E - et), bt = u; bt >= 0; bt--){
                let St = !0;
                for(let lt = 0; lt < et; lt++)if (mt(d, bt + lt) !== mt(c, lt)) {
                    St = !1;
                    break;
                }
                if (St) return bt;
            }
            return -1;
        }
        _.prototype.includes = function(c, u, p) {
            return this.indexOf(c, u, p) !== -1;
        }, _.prototype.indexOf = function(c, u, p) {
            return L(this, c, u, p, !0);
        }, _.prototype.lastIndexOf = function(c, u, p) {
            return L(this, c, u, p, !1);
        };
        function j(d, c, u, p) {
            u = Number(u) || 0;
            const y = d.length - u;
            p ? (p = Number(p), p > y && (p = y)) : p = y;
            const F = c.length;
            p > F / 2 && (p = F / 2);
            let E;
            for(E = 0; E < p; ++E){
                const et = parseInt(c.substr(E * 2, 2), 16);
                if (Rc(et)) return E;
                d[u + E] = et;
            }
            return E;
        }
        function st(d, c, u, p) {
            return vo(Ic(c, d.length - u), d, u, p);
        }
        function it(d, c, u, p) {
            return vo(Jm(c), d, u, p);
        }
        function X(d, c, u, p) {
            return vo(Fd(c), d, u, p);
        }
        function gt(d, c, u, p) {
            return vo(Wm(c, d.length - u), d, u, p);
        }
        _.prototype.write = function(c, u, p, y) {
            if (u === void 0) y = "utf8", p = this.length, u = 0;
            else if (p === void 0 && typeof u == "string") y = u, p = this.length, u = 0;
            else if (isFinite(u)) u = u >>> 0, isFinite(p) ? (p = p >>> 0, y === void 0 && (y = "utf8")) : (y = p, p = void 0);
            else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
            const F = this.length - u;
            if ((p === void 0 || p > F) && (p = F), c.length > 0 && (p < 0 || u < 0) || u > this.length) throw new RangeError("Attempt to write outside buffer bounds");
            y || (y = "utf8");
            let E = !1;
            for(;;)switch(y){
                case "hex":
                    return j(this, c, u, p);
                case "utf8":
                case "utf-8":
                    return st(this, c, u, p);
                case "ascii":
                case "latin1":
                case "binary":
                    return it(this, c, u, p);
                case "base64":
                    return X(this, c, u, p);
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                    return gt(this, c, u, p);
                default:
                    if (E) throw new TypeError("Unknown encoding: " + y);
                    y = ("" + y).toLowerCase(), E = !0;
            }
        }, _.prototype.toJSON = function() {
            return {
                type: "Buffer",
                data: Array.prototype.slice.call(this._arr || this, 0)
            };
        };
        function te(d, c, u) {
            return c === 0 && u === d.length ? t.fromByteArray(d) : t.fromByteArray(d.slice(c, u));
        }
        function Ht(d, c, u) {
            u = Math.min(d.length, u);
            const p = [];
            let y = c;
            for(; y < u;){
                const F = d[y];
                let E = null, et = F > 239 ? 4 : F > 223 ? 3 : F > 191 ? 2 : 1;
                if (y + et <= u) {
                    let mt, bt, St, lt;
                    switch(et){
                        case 1:
                            F < 128 && (E = F);
                            break;
                        case 2:
                            mt = d[y + 1], (mt & 192) === 128 && (lt = (F & 31) << 6 | mt & 63, lt > 127 && (E = lt));
                            break;
                        case 3:
                            mt = d[y + 1], bt = d[y + 2], (mt & 192) === 128 && (bt & 192) === 128 && (lt = (F & 15) << 12 | (mt & 63) << 6 | bt & 63, lt > 2047 && (lt < 55296 || lt > 57343) && (E = lt));
                            break;
                        case 4:
                            mt = d[y + 1], bt = d[y + 2], St = d[y + 3], (mt & 192) === 128 && (bt & 192) === 128 && (St & 192) === 128 && (lt = (F & 15) << 18 | (mt & 63) << 12 | (bt & 63) << 6 | St & 63, lt > 65535 && lt < 1114112 && (E = lt));
                    }
                }
                E === null ? (E = 65533, et = 1) : E > 65535 && (E -= 65536, p.push(E >>> 10 & 1023 | 55296), E = 56320 | E & 1023), p.push(E), y += et;
            }
            return At(p);
        }
        const Se = 4096;
        function At(d) {
            const c = d.length;
            if (c <= Se) return String.fromCharCode.apply(String, d);
            let u = "", p = 0;
            for(; p < c;)u += String.fromCharCode.apply(String, d.slice(p, p += Se));
            return u;
        }
        function Rt(d, c, u) {
            let p = "";
            u = Math.min(d.length, u);
            for(let y = c; y < u; ++y)p += String.fromCharCode(d[y] & 127);
            return p;
        }
        function $e(d, c, u) {
            let p = "";
            u = Math.min(d.length, u);
            for(let y = c; y < u; ++y)p += String.fromCharCode(d[y]);
            return p;
        }
        function Wr(d, c, u) {
            const p = d.length;
            (!c || c < 0) && (c = 0), (!u || u < 0 || u > p) && (u = p);
            let y = "";
            for(let F = c; F < u; ++F)y += Gm[d[F]];
            return y;
        }
        function xc(d, c, u) {
            const p = d.slice(c, u);
            let y = "";
            for(let F = 0; F < p.length - 1; F += 2)y += String.fromCharCode(p[F] + p[F + 1] * 256);
            return y;
        }
        _.prototype.slice = function(c, u) {
            const p = this.length;
            c = ~~c, u = u === void 0 ? p : ~~u, c < 0 ? (c += p, c < 0 && (c = 0)) : c > p && (c = p), u < 0 ? (u += p, u < 0 && (u = 0)) : u > p && (u = p), u < c && (u = c);
            const y = this.subarray(c, u);
            return Object.setPrototypeOf(y, _.prototype), y;
        };
        function wt(d, c, u) {
            if (d % 1 !== 0 || d < 0) throw new RangeError("offset is not uint");
            if (d + c > u) throw new RangeError("Trying to access beyond buffer length");
        }
        _.prototype.readUintLE = _.prototype.readUIntLE = function(c, u, p) {
            c = c >>> 0, u = u >>> 0, p || wt(c, u, this.length);
            let y = this[c], F = 1, E = 0;
            for(; ++E < u && (F *= 256);)y += this[c + E] * F;
            return y;
        }, _.prototype.readUintBE = _.prototype.readUIntBE = function(c, u, p) {
            c = c >>> 0, u = u >>> 0, p || wt(c, u, this.length);
            let y = this[c + --u], F = 1;
            for(; u > 0 && (F *= 256);)y += this[c + --u] * F;
            return y;
        }, _.prototype.readUint8 = _.prototype.readUInt8 = function(c, u) {
            return c = c >>> 0, u || wt(c, 1, this.length), this[c];
        }, _.prototype.readUint16LE = _.prototype.readUInt16LE = function(c, u) {
            return c = c >>> 0, u || wt(c, 2, this.length), this[c] | this[c + 1] << 8;
        }, _.prototype.readUint16BE = _.prototype.readUInt16BE = function(c, u) {
            return c = c >>> 0, u || wt(c, 2, this.length), this[c] << 8 | this[c + 1];
        }, _.prototype.readUint32LE = _.prototype.readUInt32LE = function(c, u) {
            return c = c >>> 0, u || wt(c, 4, this.length), (this[c] | this[c + 1] << 8 | this[c + 2] << 16) + this[c + 3] * 16777216;
        }, _.prototype.readUint32BE = _.prototype.readUInt32BE = function(c, u) {
            return c = c >>> 0, u || wt(c, 4, this.length), this[c] * 16777216 + (this[c + 1] << 16 | this[c + 2] << 8 | this[c + 3]);
        }, _.prototype.readBigUInt64LE = Tr(function(c) {
            c = c >>> 0, qn(c, "offset");
            const u = this[c], p = this[c + 7];
            (u === void 0 || p === void 0) && _i(c, this.length - 8);
            const y = u + this[++c] * 2 ** 8 + this[++c] * 2 ** 16 + this[++c] * 2 ** 24, F = this[++c] + this[++c] * 2 ** 8 + this[++c] * 2 ** 16 + p * 2 ** 24;
            return BigInt(y) + (BigInt(F) << BigInt(32));
        }), _.prototype.readBigUInt64BE = Tr(function(c) {
            c = c >>> 0, qn(c, "offset");
            const u = this[c], p = this[c + 7];
            (u === void 0 || p === void 0) && _i(c, this.length - 8);
            const y = u * 2 ** 24 + this[++c] * 2 ** 16 + this[++c] * 2 ** 8 + this[++c], F = this[++c] * 2 ** 24 + this[++c] * 2 ** 16 + this[++c] * 2 ** 8 + p;
            return (BigInt(y) << BigInt(32)) + BigInt(F);
        }), _.prototype.readIntLE = function(c, u, p) {
            c = c >>> 0, u = u >>> 0, p || wt(c, u, this.length);
            let y = this[c], F = 1, E = 0;
            for(; ++E < u && (F *= 256);)y += this[c + E] * F;
            return F *= 128, y >= F && (y -= Math.pow(2, 8 * u)), y;
        }, _.prototype.readIntBE = function(c, u, p) {
            c = c >>> 0, u = u >>> 0, p || wt(c, u, this.length);
            let y = u, F = 1, E = this[c + --y];
            for(; y > 0 && (F *= 256);)E += this[c + --y] * F;
            return F *= 128, E >= F && (E -= Math.pow(2, 8 * u)), E;
        }, _.prototype.readInt8 = function(c, u) {
            return c = c >>> 0, u || wt(c, 1, this.length), this[c] & 128 ? (255 - this[c] + 1) * -1 : this[c];
        }, _.prototype.readInt16LE = function(c, u) {
            c = c >>> 0, u || wt(c, 2, this.length);
            const p = this[c] | this[c + 1] << 8;
            return p & 32768 ? p | 4294901760 : p;
        }, _.prototype.readInt16BE = function(c, u) {
            c = c >>> 0, u || wt(c, 2, this.length);
            const p = this[c + 1] | this[c] << 8;
            return p & 32768 ? p | 4294901760 : p;
        }, _.prototype.readInt32LE = function(c, u) {
            return c = c >>> 0, u || wt(c, 4, this.length), this[c] | this[c + 1] << 8 | this[c + 2] << 16 | this[c + 3] << 24;
        }, _.prototype.readInt32BE = function(c, u) {
            return c = c >>> 0, u || wt(c, 4, this.length), this[c] << 24 | this[c + 1] << 16 | this[c + 2] << 8 | this[c + 3];
        }, _.prototype.readBigInt64LE = Tr(function(c) {
            c = c >>> 0, qn(c, "offset");
            const u = this[c], p = this[c + 7];
            (u === void 0 || p === void 0) && _i(c, this.length - 8);
            const y = this[c + 4] + this[c + 5] * 2 ** 8 + this[c + 6] * 2 ** 16 + (p << 24);
            return (BigInt(y) << BigInt(32)) + BigInt(u + this[++c] * 2 ** 8 + this[++c] * 2 ** 16 + this[++c] * 2 ** 24);
        }), _.prototype.readBigInt64BE = Tr(function(c) {
            c = c >>> 0, qn(c, "offset");
            const u = this[c], p = this[c + 7];
            (u === void 0 || p === void 0) && _i(c, this.length - 8);
            const y = (u << 24) + this[++c] * 2 ** 16 + this[++c] * 2 ** 8 + this[++c];
            return (BigInt(y) << BigInt(32)) + BigInt(this[++c] * 2 ** 24 + this[++c] * 2 ** 16 + this[++c] * 2 ** 8 + p);
        }), _.prototype.readFloatLE = function(c, u) {
            return c = c >>> 0, u || wt(c, 4, this.length), r.read(this, c, !0, 23, 4);
        }, _.prototype.readFloatBE = function(c, u) {
            return c = c >>> 0, u || wt(c, 4, this.length), r.read(this, c, !1, 23, 4);
        }, _.prototype.readDoubleLE = function(c, u) {
            return c = c >>> 0, u || wt(c, 8, this.length), r.read(this, c, !0, 52, 8);
        }, _.prototype.readDoubleBE = function(c, u) {
            return c = c >>> 0, u || wt(c, 8, this.length), r.read(this, c, !1, 52, 8);
        };
        function ce(d, c, u, p, y, F) {
            if (!_.isBuffer(d)) throw new TypeError('"buffer" argument must be a Buffer instance');
            if (c > y || c < F) throw new RangeError('"value" argument is out of bounds');
            if (u + p > d.length) throw new RangeError("Index out of range");
        }
        _.prototype.writeUintLE = _.prototype.writeUIntLE = function(c, u, p, y) {
            if (c = +c, u = u >>> 0, p = p >>> 0, !y) {
                const et = Math.pow(2, 8 * p) - 1;
                ce(this, c, u, p, et, 0);
            }
            let F = 1, E = 0;
            for(this[u] = c & 255; ++E < p && (F *= 256);)this[u + E] = c / F & 255;
            return u + p;
        }, _.prototype.writeUintBE = _.prototype.writeUIntBE = function(c, u, p, y) {
            if (c = +c, u = u >>> 0, p = p >>> 0, !y) {
                const et = Math.pow(2, 8 * p) - 1;
                ce(this, c, u, p, et, 0);
            }
            let F = p - 1, E = 1;
            for(this[u + F] = c & 255; --F >= 0 && (E *= 256);)this[u + F] = c / E & 255;
            return u + p;
        }, _.prototype.writeUint8 = _.prototype.writeUInt8 = function(c, u, p) {
            return c = +c, u = u >>> 0, p || ce(this, c, u, 1, 255, 0), this[u] = c & 255, u + 1;
        }, _.prototype.writeUint16LE = _.prototype.writeUInt16LE = function(c, u, p) {
            return c = +c, u = u >>> 0, p || ce(this, c, u, 2, 65535, 0), this[u] = c & 255, this[u + 1] = c >>> 8, u + 2;
        }, _.prototype.writeUint16BE = _.prototype.writeUInt16BE = function(c, u, p) {
            return c = +c, u = u >>> 0, p || ce(this, c, u, 2, 65535, 0), this[u] = c >>> 8, this[u + 1] = c & 255, u + 2;
        }, _.prototype.writeUint32LE = _.prototype.writeUInt32LE = function(c, u, p) {
            return c = +c, u = u >>> 0, p || ce(this, c, u, 4, 4294967295, 0), this[u + 3] = c >>> 24, this[u + 2] = c >>> 16, this[u + 1] = c >>> 8, this[u] = c & 255, u + 4;
        }, _.prototype.writeUint32BE = _.prototype.writeUInt32BE = function(c, u, p) {
            return c = +c, u = u >>> 0, p || ce(this, c, u, 4, 4294967295, 0), this[u] = c >>> 24, this[u + 1] = c >>> 16, this[u + 2] = c >>> 8, this[u + 3] = c & 255, u + 4;
        };
        function pd(d, c, u, p, y) {
            Sd(c, p, y, d, u, 7);
            let F = Number(c & BigInt(4294967295));
            d[u++] = F, F = F >> 8, d[u++] = F, F = F >> 8, d[u++] = F, F = F >> 8, d[u++] = F;
            let E = Number(c >> BigInt(32) & BigInt(4294967295));
            return d[u++] = E, E = E >> 8, d[u++] = E, E = E >> 8, d[u++] = E, E = E >> 8, d[u++] = E, u;
        }
        function hd(d, c, u, p, y) {
            Sd(c, p, y, d, u, 7);
            let F = Number(c & BigInt(4294967295));
            d[u + 7] = F, F = F >> 8, d[u + 6] = F, F = F >> 8, d[u + 5] = F, F = F >> 8, d[u + 4] = F;
            let E = Number(c >> BigInt(32) & BigInt(4294967295));
            return d[u + 3] = E, E = E >> 8, d[u + 2] = E, E = E >> 8, d[u + 1] = E, E = E >> 8, d[u] = E, u + 8;
        }
        _.prototype.writeBigUInt64LE = Tr(function(c, u = 0) {
            return pd(this, c, u, BigInt(0), BigInt("0xffffffffffffffff"));
        }), _.prototype.writeBigUInt64BE = Tr(function(c, u = 0) {
            return hd(this, c, u, BigInt(0), BigInt("0xffffffffffffffff"));
        }), _.prototype.writeIntLE = function(c, u, p, y) {
            if (c = +c, u = u >>> 0, !y) {
                const mt = Math.pow(2, 8 * p - 1);
                ce(this, c, u, p, mt - 1, -mt);
            }
            let F = 0, E = 1, et = 0;
            for(this[u] = c & 255; ++F < p && (E *= 256);)c < 0 && et === 0 && this[u + F - 1] !== 0 && (et = 1), this[u + F] = (c / E >> 0) - et & 255;
            return u + p;
        }, _.prototype.writeIntBE = function(c, u, p, y) {
            if (c = +c, u = u >>> 0, !y) {
                const mt = Math.pow(2, 8 * p - 1);
                ce(this, c, u, p, mt - 1, -mt);
            }
            let F = p - 1, E = 1, et = 0;
            for(this[u + F] = c & 255; --F >= 0 && (E *= 256);)c < 0 && et === 0 && this[u + F + 1] !== 0 && (et = 1), this[u + F] = (c / E >> 0) - et & 255;
            return u + p;
        }, _.prototype.writeInt8 = function(c, u, p) {
            return c = +c, u = u >>> 0, p || ce(this, c, u, 1, 127, -128), c < 0 && (c = 255 + c + 1), this[u] = c & 255, u + 1;
        }, _.prototype.writeInt16LE = function(c, u, p) {
            return c = +c, u = u >>> 0, p || ce(this, c, u, 2, 32767, -32768), this[u] = c & 255, this[u + 1] = c >>> 8, u + 2;
        }, _.prototype.writeInt16BE = function(c, u, p) {
            return c = +c, u = u >>> 0, p || ce(this, c, u, 2, 32767, -32768), this[u] = c >>> 8, this[u + 1] = c & 255, u + 2;
        }, _.prototype.writeInt32LE = function(c, u, p) {
            return c = +c, u = u >>> 0, p || ce(this, c, u, 4, 2147483647, -2147483648), this[u] = c & 255, this[u + 1] = c >>> 8, this[u + 2] = c >>> 16, this[u + 3] = c >>> 24, u + 4;
        }, _.prototype.writeInt32BE = function(c, u, p) {
            return c = +c, u = u >>> 0, p || ce(this, c, u, 4, 2147483647, -2147483648), c < 0 && (c = 4294967295 + c + 1), this[u] = c >>> 24, this[u + 1] = c >>> 16, this[u + 2] = c >>> 8, this[u + 3] = c & 255, u + 4;
        }, _.prototype.writeBigInt64LE = Tr(function(c, u = 0) {
            return pd(this, c, u, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
        }), _.prototype.writeBigInt64BE = Tr(function(c, u = 0) {
            return hd(this, c, u, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
        });
        function wd(d, c, u, p, y, F) {
            if (u + p > d.length) throw new RangeError("Index out of range");
            if (u < 0) throw new RangeError("Index out of range");
        }
        function bd(d, c, u, p, y) {
            return c = +c, u = u >>> 0, y || wd(d, c, u, 4), r.write(d, c, u, p, 23, 4), u + 4;
        }
        _.prototype.writeFloatLE = function(c, u, p) {
            return bd(this, c, u, !0, p);
        }, _.prototype.writeFloatBE = function(c, u, p) {
            return bd(this, c, u, !1, p);
        };
        function yd(d, c, u, p, y) {
            return c = +c, u = u >>> 0, y || wd(d, c, u, 8), r.write(d, c, u, p, 52, 8), u + 8;
        }
        _.prototype.writeDoubleLE = function(c, u, p) {
            return yd(this, c, u, !0, p);
        }, _.prototype.writeDoubleBE = function(c, u, p) {
            return yd(this, c, u, !1, p);
        }, _.prototype.copy = function(c, u, p, y) {
            if (!_.isBuffer(c)) throw new TypeError("argument should be a Buffer");
            if (p || (p = 0), !y && y !== 0 && (y = this.length), u >= c.length && (u = c.length), u || (u = 0), y > 0 && y < p && (y = p), y === p || c.length === 0 || this.length === 0) return 0;
            if (u < 0) throw new RangeError("targetStart out of bounds");
            if (p < 0 || p >= this.length) throw new RangeError("Index out of range");
            if (y < 0) throw new RangeError("sourceEnd out of bounds");
            y > this.length && (y = this.length), c.length - u < y - p && (y = c.length - u + p);
            const F = y - p;
            return this === c && typeof Uint8Array.prototype.copyWithin == "function" ? this.copyWithin(u, p, y) : Uint8Array.prototype.set.call(c, this.subarray(p, y), u), F;
        }, _.prototype.fill = function(c, u, p, y) {
            if (typeof c == "string") {
                if (typeof u == "string" ? (y = u, u = 0, p = this.length) : typeof p == "string" && (y = p, p = this.length), y !== void 0 && typeof y != "string") throw new TypeError("encoding must be a string");
                if (typeof y == "string" && !_.isEncoding(y)) throw new TypeError("Unknown encoding: " + y);
                if (c.length === 1) {
                    const E = c.charCodeAt(0);
                    (y === "utf8" && E < 128 || y === "latin1") && (c = E);
                }
            } else typeof c == "number" ? c = c & 255 : typeof c == "boolean" && (c = Number(c));
            if (u < 0 || this.length < u || this.length < p) throw new RangeError("Out of range index");
            if (p <= u) return this;
            u = u >>> 0, p = p === void 0 ? this.length : p >>> 0, c || (c = 0);
            let F;
            if (typeof c == "number") for(F = u; F < p; ++F)this[F] = c;
            else {
                const E = _.isBuffer(c) ? c : _.from(c, y), et = E.length;
                if (et === 0) throw new TypeError('The value "' + c + '" is invalid for argument "value"');
                for(F = 0; F < p - u; ++F)this[F + u] = E[F % et];
            }
            return this;
        };
        const Dn = {};
        function Ec(d, c, u) {
            Dn[d] = class extends u {
                constructor(){
                    super(), Object.defineProperty(this, "message", {
                        value: c.apply(this, arguments),
                        writable: !0,
                        configurable: !0
                    }), this.name = `${this.name} [${d}]`, this.stack, delete this.name;
                }
                get code() {
                    return d;
                }
                set code(y) {
                    Object.defineProperty(this, "code", {
                        configurable: !0,
                        enumerable: !0,
                        value: y,
                        writable: !0
                    });
                }
                toString() {
                    return `${this.name} [${d}]: ${this.message}`;
                }
            };
        }
        Ec("ERR_BUFFER_OUT_OF_BOUNDS", function(d) {
            return d ? `${d} is outside of buffer bounds` : "Attempt to access memory outside buffer bounds";
        }, RangeError), Ec("ERR_INVALID_ARG_TYPE", function(d, c) {
            return `The "${d}" argument must be of type number. Received type ${typeof c}`;
        }, TypeError), Ec("ERR_OUT_OF_RANGE", function(d, c, u) {
            let p = `The value of "${d}" is out of range.`, y = u;
            return Number.isInteger(u) && Math.abs(u) > 2 ** 32 ? y = md(String(u)) : typeof u == "bigint" && (y = String(u), (u > BigInt(2) ** BigInt(32) || u < -(BigInt(2) ** BigInt(32))) && (y = md(y)), y += "n"), p += ` It must be ${c}. Received ${y}`, p;
        }, RangeError);
        function md(d) {
            let c = "", u = d.length;
            const p = d[0] === "-" ? 1 : 0;
            for(; u >= p + 4; u -= 3)c = `_${d.slice(u - 3, u)}${c}`;
            return `${d.slice(0, u)}${c}`;
        }
        function qm(d, c, u) {
            qn(c, "offset"), (d[c] === void 0 || d[c + u] === void 0) && _i(c, d.length - (u + 1));
        }
        function Sd(d, c, u, p, y, F) {
            if (d > u || d < c) {
                const E = typeof c == "bigint" ? "n" : "";
                let et;
                throw c === 0 || c === BigInt(0) ? et = `>= 0${E} and < 2${E} ** ${(F + 1) * 8}${E}` : et = `>= -(2${E} ** ${(F + 1) * 8 - 1}${E}) and < 2 ** ${(F + 1) * 8 - 1}${E}`, new Dn.ERR_OUT_OF_RANGE("value", et, d);
            }
            qm(p, y, F);
        }
        function qn(d, c) {
            if (typeof d != "number") throw new Dn.ERR_INVALID_ARG_TYPE(c, "number", d);
        }
        function _i(d, c, u) {
            throw Math.floor(d) !== d ? (qn(d, u), new Dn.ERR_OUT_OF_RANGE("offset", "an integer", d)) : c < 0 ? new Dn.ERR_BUFFER_OUT_OF_BOUNDS : new Dn.ERR_OUT_OF_RANGE("offset", `>= 0 and <= ${c}`, d);
        }
        const Vm = /[^+/0-9A-Za-z-_]/g;
        function Hm(d) {
            if (d = d.split("=")[0], d = d.trim().replace(Vm, ""), d.length < 2) return "";
            for(; d.length % 4 !== 0;)d = d + "=";
            return d;
        }
        function Ic(d, c) {
            c = c || 1 / 0;
            let u;
            const p = d.length;
            let y = null;
            const F = [];
            for(let E = 0; E < p; ++E){
                if (u = d.charCodeAt(E), u > 55295 && u < 57344) {
                    if (!y) {
                        if (u > 56319) {
                            (c -= 3) > -1 && F.push(239, 191, 189);
                            continue;
                        } else if (E + 1 === p) {
                            (c -= 3) > -1 && F.push(239, 191, 189);
                            continue;
                        }
                        y = u;
                        continue;
                    }
                    if (u < 56320) {
                        (c -= 3) > -1 && F.push(239, 191, 189), y = u;
                        continue;
                    }
                    u = (y - 55296 << 10 | u - 56320) + 65536;
                } else y && (c -= 3) > -1 && F.push(239, 191, 189);
                if (y = null, u < 128) {
                    if ((c -= 1) < 0) break;
                    F.push(u);
                } else if (u < 2048) {
                    if ((c -= 2) < 0) break;
                    F.push(u >> 6 | 192, u & 63 | 128);
                } else if (u < 65536) {
                    if ((c -= 3) < 0) break;
                    F.push(u >> 12 | 224, u >> 6 & 63 | 128, u & 63 | 128);
                } else if (u < 1114112) {
                    if ((c -= 4) < 0) break;
                    F.push(u >> 18 | 240, u >> 12 & 63 | 128, u >> 6 & 63 | 128, u & 63 | 128);
                } else throw new Error("Invalid code point");
            }
            return F;
        }
        function Jm(d) {
            const c = [];
            for(let u = 0; u < d.length; ++u)c.push(d.charCodeAt(u) & 255);
            return c;
        }
        function Wm(d, c) {
            let u, p, y;
            const F = [];
            for(let E = 0; E < d.length && !((c -= 2) < 0); ++E)u = d.charCodeAt(E), p = u >> 8, y = u % 256, F.push(y), F.push(p);
            return F;
        }
        function Fd(d) {
            return t.toByteArray(Hm(d));
        }
        function vo(d, c, u, p) {
            let y;
            for(y = 0; y < p && !(y + u >= c.length || y >= d.length); ++y)c[y + u] = d[y];
            return y;
        }
        function De(d, c) {
            return d instanceof c || d != null && d.constructor != null && d.constructor.name != null && d.constructor.name === c.name;
        }
        function Rc(d) {
            return d !== d;
        }
        const Gm = function() {
            const d = "0123456789abcdef", c = new Array(256);
            for(let u = 0; u < 16; ++u){
                const p = u * 16;
                for(let y = 0; y < 16; ++y)c[p + y] = d[u] + d[y];
            }
            return c;
        }();
        function Tr(d) {
            return typeof BigInt > "u" ? Ym : d;
        }
        function Ym() {
            throw new Error("BigInt not supported");
        }
    })(Fc);
    c9 = function(e, t) {
        if (e == null) throw new Error(t ?? "Expected value to be defined");
    };
    _9 = function(e, t) {
        if (e != null) throw new Error(t ?? "Expected value to be null or undefined");
    };
    let oq, gd, Km;
    u9 = ()=>new Date(Date.now() + 60 * 60 * 1e3);
    oq = /^(?<prefix>(0x)?)(?<byteChars>([0-9A-Fa-f]{2})*)(?<incompleteChars>.*)$/;
    gd = (e)=>{
        const t = oq.exec(e)?.groups;
        return {
            hasPrefix: t.prefix === "0x",
            byteChars: t.byteChars,
            incompleteChars: t.incompleteChars
        };
    };
    l9 = (e)=>Fc.Buffer.from(e).toString("hex");
    Km = (e, t)=>{
        if (!e || t !== void 0) return !1;
        const r = gd(e);
        return r.byteChars.length > 0 && !r.incompleteChars;
    };
    function aq(e, t) {
        if (!e) throw new TypeError("Input string must have non-zero length.");
        const r = gd(e);
        if (r.incompleteChars) {
            if (r.incompleteChars.length % 2 > 0) throw new TypeError(`The last byte of input string '${e}' is incomplete.`);
            const n = r.byteChars.length + (r.hasPrefix ? 2 : 0);
            throw new TypeError(`Invalid hex-digit '${e[n]}' found in input string at index ${n}.`);
        }
        if (!r.byteChars) throw new TypeError(`Input string '${e}' is not a valid hex-string.`);
        {
            const n = r.byteChars.length / 2;
            if (t !== n) throw new TypeError(`Expected an input string with byte length of ${t}, got ${n}.`);
        }
    }
    let kp, xp, Dm, Ko;
    f9 = (e, t)=>{
        if (Km(e)) return e;
        const r = Re.parse(e), n = dr.codec.decode(t, r);
        return Fc.Buffer.from(n.data).toString("hex");
    };
    d9 = (e, t)=>{
        if (Km(e)) return e;
        const r = Re.parse(e), n = us.codec.decode(t, r);
        return Fc.Buffer.from(n.data).toString("hex");
    };
    kp = 16;
    xp = 3;
    Dm = 3;
    Ko = 4;
    class bi extends Error {
        reason;
        constructor(t, r){
            super(t), this.reason = r, this.name = "PasswordValidationError";
        }
    }
    let cq, _q, uq, lq, fq, dq, gq;
    cq = (e)=>{
        let t = 0;
        return /[a-z]/.test(e) && t++, /[A-Z]/.test(e) && t++, /[0-9]/.test(e) && t++, /[^a-zA-Z0-9]/.test(e) && t++, t;
    };
    _q = (e)=>{
        let t = 1;
        for(let r = 1; r < e.length; r++)if (e[r] === e[r - 1]) {
            if (t++, t > Dm) return !0;
        } else t = 1;
        return !1;
    };
    uq = (e)=>{
        const t = e.toLowerCase();
        for(let r = 0; r <= t.length - Ko; r++){
            let n = 1, s = 1;
            for(let i = 1; i < Ko; i++){
                const a = t.charCodeAt(r + i), _ = t.charCodeAt(r + i - 1);
                if (a === _ + 1 ? n++ : n = 1, a === _ - 1 ? s++ : s = 1, n >= Ko || s >= Ko) return !0;
            }
        }
        return !1;
    };
    g9 = (e)=>{
        if (!e) throw new bi(`Password is required for private state encryption.
Please provide a password via privateStoragePasswordProvider in the configuration.`, "missing");
        if (e.length < kp) throw new bi(`Password is shorter than ${kp} characters`, "too_short");
        if (_q(e)) throw new bi(`Password contains too many repeated characters (more than ${Dm} identical in a row)`, "repeated_characters");
        const t = cq(e);
        if (t < xp) throw new bi(`Password must contain at least ${xp} of: uppercase letters, lowercase letters, digits, special characters. Found: ${t}`, "insufficient_classes");
        if (uq(e)) throw new bi("Password contains sequential patterns (e.g., '1234', 'abcd'). Use a more random password", "sequential_pattern");
    };
    lq = 255;
    fq = /^[a-zA-Z0-9._-]+$/;
    dq = new Set([
        "localhost",
        "127.0.0.1",
        "::1",
        "[::1]"
    ]);
    gq = new Set([
        "http:",
        "ws:"
    ]);
    p9 = function(e, t) {
        if (typeof e != "string" || e.length === 0 || e.length > lq) throw new Error(`Invalid ${t}: ${JSON.stringify(e)}`);
        if (e === "." || e === "..") throw new Error(`Invalid ${t}: ${JSON.stringify(e)}`);
        if (!fq.test(e)) throw new Error(`Invalid ${t}: ${JSON.stringify(e)}`);
    };
    h9 = function(e, t) {
        let r;
        try {
            r = new URL(e);
        } catch  {
            return;
        }
        if (!gq.has(r.protocol) || dq.has(r.hostname)) return;
        const n = r.protocol.replace(/:$/, ""), s = n === "http" ? "https://" : "wss://";
        console.warn(`midnight-js: ${t} uses unencrypted ${n}:// for non-loopback host '${r.hostname}'; sensitive data may be transmitted in clear text. Use ${s} in production.`);
    };
    w9 = function(e) {
        if (aq(e, 32), gd(e).hasPrefix) throw new TypeError(`Unexpected '0x' prefix in contract address '${e}'`);
    };
});
export { HK as $, ap as A, zq as B, nr as C, Je as D, Hq as E, r9 as F, vq as G, sd as H, Dq as I, EL as J, Nq as K, be as L, i9 as M, RL as N, Ct as O, qq as P, K as Q, Ft as R, t9 as S, Tt as T, Ur as U, u3 as V, J as W, kq as X, Fq as Y, he as Z, se as _, Zq as a, Rq as a0, ip as a1, Bq as a2, mr as a3, Fs as a4, Rs as a5, fs as a6, Is as a7, ds as a8, w as a9, rD as aA, ou as aB, Sq as aC, er as aD, t0 as aE, Cq as aa, hq as ab, sa as ac, Mt as ad, Ar as ae, yr as af, c9 as ag, f9 as ah, l9 as ai, Uq as aj, jq as ak, _9 as al, d9 as am, pn as an, le as ao, u9 as ap, IK as aq, xK as ar, Kq as as, Fr as at, bq as au, Ce as av, pr as aw, gr as ax, Lq as ay, Kt as az, w9 as b, n9 as c, e9 as d, Fc as e, o9 as f, p9 as g, Gq as h, Yq as i, Xq as j, mq as k, yq as l, Jq as m, Wq as n, Vq as o, wq as p, s9 as q, zn as r, Tq as s, mm as t, _t as u, g9 as v, h9 as w, q as x, Oq as y, Qq as z, __tla };
