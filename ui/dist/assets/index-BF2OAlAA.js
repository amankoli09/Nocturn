import { C as R, I as b, w as T, k, l as E, p as U, z as _, __tla as __tla_0 } from "./index-D3sxZXAj.js";
import { f as I } from "./browser-ponyfill-BuC3ADgq.js";
import { g as M, c as F, __tla as __tla_1 } from "./index-IsGXemPy.js";
let j, K, J, B;
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
    var x = {
        exports: {}
    };
    (function(n, s) {
        (function(o, i) {
            n.exports = i();
        })(F, function() {
            var o = function(c, r) {
                if (r = r || {}, typeof c != "function") throw new e("fetch must be a function");
                if (typeof r != "object") throw new e("defaults must be an object");
                if (r.retries !== void 0 && !i(r.retries)) throw new e("retries must be a positive integer");
                if (r.retryDelay !== void 0 && !i(r.retryDelay) && typeof r.retryDelay != "function") throw new e("retryDelay must be a positive integer or a function returning a positive integer");
                if (r.retryOn !== void 0 && !Array.isArray(r.retryOn) && typeof r.retryOn != "function") throw new e("retryOn property expects an array or function");
                var w = {
                    retries: 3,
                    retryDelay: 1e3,
                    retryOn: []
                };
                return r = Object.assign(w, r), function(u, t) {
                    var l = r.retries, m = r.retryDelay, p = r.retryOn;
                    if (t && t.retries !== void 0) if (i(t.retries)) l = t.retries;
                    else throw new e("retries must be a positive integer");
                    if (t && t.retryDelay !== void 0) if (i(t.retryDelay) || typeof t.retryDelay == "function") m = t.retryDelay;
                    else throw new e("retryDelay must be a positive integer or a function returning a positive integer");
                    if (t && t.retryOn) if (Array.isArray(t.retryOn) || typeof t.retryOn == "function") p = t.retryOn;
                    else throw new e("retryOn property expects an array or function");
                    return new Promise(function(g, h) {
                        var P = function(y) {
                            var O = typeof Request < "u" && u instanceof Request ? u.clone() : u;
                            c(O, t).then(function(a) {
                                if (Array.isArray(p) && p.indexOf(a.status) === -1) g(a);
                                else if (typeof p == "function") try {
                                    return Promise.resolve(p(y, null, a)).then(function(f) {
                                        f ? d(y, null, a) : g(a);
                                    }).catch(h);
                                } catch (f) {
                                    h(f);
                                }
                                else y < l ? d(y, null, a) : g(a);
                            }).catch(function(a) {
                                if (typeof p == "function") try {
                                    Promise.resolve(p(y, a, null)).then(function(f) {
                                        f ? d(y, a, null) : h(a);
                                    }).catch(function(f) {
                                        h(f);
                                    });
                                } catch (f) {
                                    h(f);
                                }
                                else y < l ? d(y, a, null) : h(a);
                            });
                        };
                        function d(y, O, a) {
                            var f = typeof m == "function" ? m(y, O, a) : m;
                            setTimeout(function() {
                                P(++y);
                            }, f);
                        }
                        P(0);
                    });
                };
            };
            function i(c) {
                return Number.isInteger(c) && c >= 0;
            }
            function e(c) {
                this.name = "ArgumentError", this.message = c;
            }
            return o;
        });
    })(x);
    var H = x.exports;
    let L, S, $, q, z, D, A, C;
    L = M(H);
    S = {
        retries: 3,
        retryDelay: (n)=>2 ** n * 1e3,
        retryOn: [
            500,
            503
        ]
    };
    $ = L(I, S);
    q = "/check";
    z = "/prove";
    D = (n, s)=>{
        const o = new URL(n);
        return o.pathname = o.pathname.replace(/\/$/, "") + s, o;
    };
    K = 3e5;
    A = async (n, s)=>{
        try {
            const o = await n.get(s);
            return _(o);
        } catch  {
            return;
        }
    };
    C = async (n, s, o, i = {})=>{
        const e = await $(n, {
            method: "POST",
            body: new Uint8Array(s),
            headers: {
                "Content-Type": "application/octet-stream",
                ...i
            },
            signal: AbortSignal.timeout(o)
        });
        if (!e.ok) throw new Error(`Failed Proof Server response: url="${e.url}", code="${e.status}", status="${e.statusText}"`);
        return new Uint8Array(await e.arrayBuffer());
    };
    B = (n, s, o)=>{
        const i = D(n, q), e = D(n, z);
        if (i.protocol !== "http:" && i.protocol !== "https:") throw new b(i.protocol, [
            "http:",
            "https:"
        ]);
        if (e.protocol !== "http:" && e.protocol !== "https:") throw new b(e.protocol, [
            "http:",
            "https:"
        ]);
        T(n, "proof server URL");
        const c = o?.timeout ?? K, r = o?.headers ?? {};
        return {
            async check (w, v) {
                const u = await A(s, v), t = E(w, u?.ir), l = await C(i, t, c, r);
                return U(l);
            },
            async prove (w, v, u) {
                const t = await A(s, v), l = k(w, u, t);
                return C(e, l, c, r);
            }
        };
    };
    j = {
        timeout: 3e5,
        zkConfig: void 0
    };
    J = (n, s, o)=>{
        const i = B(n, s, o);
        return {
            async proveTx (e, c) {
                const r = R.initialCostModel();
                return e.prove(i, r);
            }
        };
    };
});
export { j as DEFAULT_CONFIG, K as DEFAULT_TIMEOUT, J as httpClientProofProvider, B as httpClientProvingProvider, __tla };
