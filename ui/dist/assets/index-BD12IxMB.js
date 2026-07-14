import { f as h, I as f, g as u, h as l, i as p, j as d, __tla as __tla_0 } from "./index-D3sxZXAj.js";
import { b as R } from "./browser-ponyfill-BuC3ADgq.js";
import { __tla as __tla_1 } from "./index-IsGXemPy.js";
let g;
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
    const n = "keys", y = ".prover", b = ".verifier", m = "zkir", w = ".bzkir";
    g = class extends h {
        baseURL;
        fetchFunc;
        constructor(e, s = R.fetch){
            super(), this.baseURL = e, this.fetchFunc = s;
            const r = new URL(e);
            if (r.protocol !== "http:" && r.protocol !== "https:") throw new f(r.protocol, [
                "http:",
                "https:"
            ]);
        }
        async sendRequest(e, s, r, a) {
            u(s, "circuitId");
            const i = this.baseURL.endsWith("/") ? this.baseURL : `${this.baseURL}/`, o = new URL(`${e}/${encodeURIComponent(s)}${r}`, i).toString(), t = await this.fetchFunc(o, {
                method: "GET"
            });
            if (!t.ok) throw new Error(`Failed to fetch ZK artifact from ${o}: ${t.status} ${t.statusText}`);
            if ((t.headers.get("content-type") ?? "").includes("text/html")) throw new Error(`Expected ZK artifact, but received text/html from ${o}. This usually means the file does not exist and the server returned an SPA fallback page.`);
            return a === "text" ? await t.text() : await t.arrayBuffer().then((c)=>new Uint8Array(c));
        }
        getProverKey(e) {
            return this.sendRequest(n, e, y, "arraybuffer").then(l);
        }
        getVerifierKey(e) {
            return this.sendRequest(n, e, b, "arraybuffer").then(p);
        }
        getZKIR(e) {
            return this.sendRequest(m, e, w, "arraybuffer").then(d);
        }
    };
});
export { g as FetchZkConfigProvider, __tla };
