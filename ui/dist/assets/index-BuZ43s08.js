import { C as l, t as g, c as P, q as p, e as h, __tla as __tla_0 } from "./index--emGmio-.js";
import { M as v, I as M, J as T, C as _, D as o, B as d, K as w, L as f, A as S, Q as V, __tla as __tla_1 } from "./constants-BQyULcgQ.js";
import { __tla as __tla_2 } from "./index-IsGXemPy.js";
import { __tla as __tla_3 } from "./index-D3sxZXAj.js";
let L, A, x, Z;
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
    })(),
    (()=>{
        try {
            return __tla_3;
        } catch  {}
    })()
]).then(async ()=>{
    const C = "0.16.0", O = (s)=>{
        const e = s.split("-")[0].split(".").map(Number), t = C.split("-")[0].split(".").map(Number);
        if (e[0] !== t[0] || t[0] === 0 && e[1] !== t[1] || e[1] > t[1] || e[1] === t[1] && e[2] > t[2]) throw new l(`Version mismatch: compiled code expects ${s}, runtime is ${C}`);
        const a = 52435875175126190479447740508185965837690552500527637822603658699938581184512n;
        if (a !== v) throw new l(`Maximum field mismatch: compiled code uses ${a}, runtime uses ${v}`);
    }, N = {
        alignment () {
            return [
                {
                    tag: "atom",
                    value: {
                        tag: "field"
                    }
                }
            ];
        },
        fromValue (s) {
            const e = s.shift();
            if (e == null) throw new l("expected Field");
            return T([
                e
            ]);
        },
        toValue (s) {
            return M(s);
        }
    };
    class b {
        maxValue;
        length;
        constructor(e, t){
            this.maxValue = e, this.length = t;
        }
        alignment() {
            return [
                {
                    tag: "atom",
                    value: {
                        tag: "bytes",
                        length: this.length
                    }
                }
            ];
        }
        fromValue(e) {
            const t = e.shift();
            if (t == null) throw new l(`expected UnsignedInteger[<=${this.maxValue}]`);
            {
                let a = 0n;
                for(let r = 0; r < t.length; r++)a += (1n << 8n * BigInt(r)) * BigInt(t[r]);
                if (a > this.maxValue) throw new l(`expected UnsignedInteger[<=${this.maxValue}]`);
                return a;
            }
        }
        toValue(e) {
            return N.toValue(e);
        }
    }
    function y(s, e, t) {
        return {
            ledger: s,
            privateState: e,
            contractAddress: t
        };
    }
    O("0.16.0");
    const n = new b(255n, 1), u = new b(18446744073709551615n, 8);
    L = class {
        witnesses;
        constructor(...e){
            if (e.length !== 1) throw new l(`Contract constructor: expected 1 argument, received ${e.length}`);
            const t = e[0];
            if (typeof t != "object") throw new l("first (witnesses) argument to Contract constructor is not an object");
            if (typeof t.buyerMaxPrice != "function") throw new l("first (witnesses) argument to Contract constructor does not contain a function-valued field named buyerMaxPrice");
            if (typeof t.sellerMinPrice != "function") throw new l("first (witnesses) argument to Contract constructor does not contain a function-valued field named sellerMinPrice");
            this.witnesses = t, this.circuits = {
                openNegotiation: (...a)=>{
                    if (a.length !== 1) throw new l(`openNegotiation: expected 1 argument (as invoked from Typescript), received ${a.length}`);
                    const r = a[0];
                    typeof r == "object" && r.currentQueryContext != null || g("openNegotiation", "argument 1 (as invoked from Typescript)", "negotiation.compact line 12 char 1", "CircuitContext", r);
                    const i = {
                        ...r,
                        gasCost: h()
                    }, c = {
                        input: {
                            value: [],
                            alignment: []
                        },
                        output: void 0,
                        publicTranscript: [],
                        privateTranscriptOutputs: []
                    }, m = this._openNegotiation_0(i, c);
                    return c.output = {
                        value: [],
                        alignment: []
                    }, {
                        result: m,
                        context: i,
                        proofData: c,
                        gasCost: i.gasCost
                    };
                },
                matchOffer: (...a)=>{
                    if (a.length !== 1) throw new l(`matchOffer: expected 1 argument (as invoked from Typescript), received ${a.length}`);
                    const r = a[0];
                    typeof r == "object" && r.currentQueryContext != null || g("matchOffer", "argument 1 (as invoked from Typescript)", "negotiation.compact line 17 char 1", "CircuitContext", r);
                    const i = {
                        ...r,
                        gasCost: h()
                    }, c = {
                        input: {
                            value: [],
                            alignment: []
                        },
                        output: void 0,
                        publicTranscript: [],
                        privateTranscriptOutputs: []
                    }, m = this._matchOffer_0(i, c);
                    return c.output = {
                        value: [],
                        alignment: []
                    }, {
                        result: m,
                        context: i,
                        proofData: c,
                        gasCost: i.gasCost
                    };
                }
            }, this.impureCircuits = {
                openNegotiation: this.circuits.openNegotiation,
                matchOffer: this.circuits.matchOffer
            }, this.provableCircuits = {
                openNegotiation: this.circuits.openNegotiation,
                matchOffer: this.circuits.matchOffer
            };
        }
        initialState(...e) {
            if (e.length !== 1) throw new l(`Contract state constructor: expected 1 argument (as invoked from Typescript), received ${e.length}`);
            const t = e[0];
            if (typeof t != "object") throw new l("Contract state constructor: expected 'constructorContext' in argument 1 (as invoked from Typescript) to be an object");
            if (!("initialPrivateState" in t)) throw new l("Contract state constructor: expected 'initialPrivateState' in argument 1 (as invoked from Typescript)");
            if (!("initialZswapLocalState" in t)) throw new l("Contract state constructor: expected 'initialZswapLocalState' in argument 1 (as invoked from Typescript)");
            if (typeof t.initialZswapLocalState != "object") throw new l("Contract state constructor: expected 'initialZswapLocalState' in argument 1 (as invoked from Typescript) to be an object");
            const a = new _;
            let r = o.newArray();
            r = r.arrayPush(o.newNull()), r = r.arrayPush(o.newNull()), a.data = new d(r), a.setOperation("openNegotiation", new w), a.setOperation("matchOffer", new w);
            const i = P(f(), t.initialZswapLocalState.coinPublicKey, a.data, t.initialPrivateState), c = {
                input: {
                    value: [],
                    alignment: []
                },
                output: void 0,
                publicTranscript: [],
                privateTranscriptOutputs: []
            };
            return p(i, c, [
                {
                    push: {
                        storage: !1,
                        value: o.newCell({
                            value: n.toValue(0n),
                            alignment: n.alignment()
                        }).encode()
                    }
                },
                {
                    push: {
                        storage: !0,
                        value: o.newCell({
                            value: n.toValue(0n),
                            alignment: n.alignment()
                        }).encode()
                    }
                },
                {
                    ins: {
                        cached: !1,
                        n: 1
                    }
                }
            ]), p(i, c, [
                {
                    push: {
                        storage: !1,
                        value: o.newCell({
                            value: n.toValue(1n),
                            alignment: n.alignment()
                        }).encode()
                    }
                },
                {
                    push: {
                        storage: !0,
                        value: o.newCell({
                            value: u.toValue(0n),
                            alignment: u.alignment()
                        }).encode()
                    }
                },
                {
                    ins: {
                        cached: !1,
                        n: 1
                    }
                }
            ]), p(i, c, [
                {
                    push: {
                        storage: !1,
                        value: o.newCell({
                            value: n.toValue(0n),
                            alignment: n.alignment()
                        }).encode()
                    }
                },
                {
                    push: {
                        storage: !0,
                        value: o.newCell({
                            value: n.toValue(0n),
                            alignment: n.alignment()
                        }).encode()
                    }
                },
                {
                    ins: {
                        cached: !1,
                        n: 1
                    }
                }
            ]), p(i, c, [
                {
                    push: {
                        storage: !1,
                        value: o.newCell({
                            value: n.toValue(1n),
                            alignment: n.alignment()
                        }).encode()
                    }
                },
                {
                    push: {
                        storage: !0,
                        value: o.newCell({
                            value: u.toValue(0n),
                            alignment: u.alignment()
                        }).encode()
                    }
                },
                {
                    ins: {
                        cached: !1,
                        n: 1
                    }
                }
            ]), a.data = new d(i.currentQueryContext.state.state), {
                currentContractState: a,
                currentPrivateState: i.currentPrivateState,
                currentZswapLocalState: i.currentZswapLocalState
            };
        }
        _buyerMaxPrice_0(e, t) {
            const a = y(x(e.currentQueryContext.state), e.currentPrivateState, e.currentQueryContext.address), [r, i] = this.witnesses.buyerMaxPrice(a);
            return e.currentPrivateState = r, typeof i == "bigint" && i >= 0n && i <= 18446744073709551615n || g("buyerMaxPrice", "return value", "negotiation.compact line 4 char 1", "Uint<0..18446744073709551616>", i), t.privateTranscriptOutputs.push({
                value: u.toValue(i),
                alignment: u.alignment()
            }), i;
        }
        _sellerMinPrice_0(e, t) {
            const a = y(x(e.currentQueryContext.state), e.currentPrivateState, e.currentQueryContext.address), [r, i] = this.witnesses.sellerMinPrice(a);
            return e.currentPrivateState = r, typeof i == "bigint" && i >= 0n && i <= 18446744073709551615n || g("sellerMinPrice", "return value", "negotiation.compact line 5 char 1", "Uint<0..18446744073709551616>", i), t.privateTranscriptOutputs.push({
                value: u.toValue(i),
                alignment: u.alignment()
            }), i;
        }
        _openNegotiation_0(e, t) {
            return p(e, t, [
                {
                    push: {
                        storage: !1,
                        value: o.newCell({
                            value: n.toValue(0n),
                            alignment: n.alignment()
                        }).encode()
                    }
                },
                {
                    push: {
                        storage: !0,
                        value: o.newCell({
                            value: n.toValue(0n),
                            alignment: n.alignment()
                        }).encode()
                    }
                },
                {
                    ins: {
                        cached: !1,
                        n: 1
                    }
                }
            ]), p(e, t, [
                {
                    push: {
                        storage: !1,
                        value: o.newCell({
                            value: n.toValue(1n),
                            alignment: n.alignment()
                        }).encode()
                    }
                },
                {
                    push: {
                        storage: !0,
                        value: o.newCell({
                            value: u.toValue(0n),
                            alignment: u.alignment()
                        }).encode()
                    }
                },
                {
                    ins: {
                        cached: !1,
                        n: 1
                    }
                }
            ]), [];
        }
        _matchOffer_0(e, t) {
            const a = this._buyerMaxPrice_0(e, t), r = this._sellerMinPrice_0(e, t);
            return a >= r ? (p(e, t, [
                {
                    push: {
                        storage: !1,
                        value: o.newCell({
                            value: n.toValue(1n),
                            alignment: n.alignment()
                        }).encode()
                    }
                },
                {
                    push: {
                        storage: !0,
                        value: o.newCell({
                            value: u.toValue(r),
                            alignment: u.alignment()
                        }).encode()
                    }
                },
                {
                    ins: {
                        cached: !1,
                        n: 1
                    }
                }
            ]), p(e, t, [
                {
                    push: {
                        storage: !1,
                        value: o.newCell({
                            value: n.toValue(0n),
                            alignment: n.alignment()
                        }).encode()
                    }
                },
                {
                    push: {
                        storage: !0,
                        value: o.newCell({
                            value: n.toValue(1n),
                            alignment: n.alignment()
                        }).encode()
                    }
                },
                {
                    ins: {
                        cached: !1,
                        n: 1
                    }
                }
            ])) : (p(e, t, [
                {
                    push: {
                        storage: !1,
                        value: o.newCell({
                            value: n.toValue(1n),
                            alignment: n.alignment()
                        }).encode()
                    }
                },
                {
                    push: {
                        storage: !0,
                        value: o.newCell({
                            value: u.toValue(0n),
                            alignment: u.alignment()
                        }).encode()
                    }
                },
                {
                    ins: {
                        cached: !1,
                        n: 1
                    }
                }
            ]), p(e, t, [
                {
                    push: {
                        storage: !1,
                        value: o.newCell({
                            value: n.toValue(0n),
                            alignment: n.alignment()
                        }).encode()
                    }
                },
                {
                    push: {
                        storage: !0,
                        value: o.newCell({
                            value: n.toValue(2n),
                            alignment: n.alignment()
                        }).encode()
                    }
                },
                {
                    ins: {
                        cached: !1,
                        n: 1
                    }
                }
            ])), [];
        }
    };
    x = function(s) {
        s instanceof o || s.state;
        const e = s instanceof o ? new d(s) : s, t = {
            currentQueryContext: new V(e, f()),
            costModel: S.initialCostModel()
        }, a = {
            input: {
                value: [],
                alignment: []
            },
            output: void 0,
            publicTranscript: [],
            privateTranscriptOutputs: []
        };
        return {
            get negotiationStatus () {
                return n.fromValue(p(t, a, [
                    {
                        dup: {
                            n: 0
                        }
                    },
                    {
                        idx: {
                            cached: !1,
                            pushPath: !1,
                            path: [
                                {
                                    tag: "value",
                                    value: {
                                        value: n.toValue(0n),
                                        alignment: n.alignment()
                                    }
                                }
                            ]
                        }
                    },
                    {
                        popeq: {
                            cached: !1,
                            result: void 0
                        }
                    }
                ]).value);
            },
            get agreedPrice () {
                return u.fromValue(p(t, a, [
                    {
                        dup: {
                            n: 0
                        }
                    },
                    {
                        idx: {
                            cached: !1,
                            pushPath: !1,
                            path: [
                                {
                                    tag: "value",
                                    value: {
                                        value: n.toValue(1n),
                                        alignment: n.alignment()
                                    }
                                }
                            ]
                        }
                    },
                    {
                        popeq: {
                            cached: !1,
                            result: void 0
                        }
                    }
                ]).value);
            }
        };
    };
    new V(new _().data, f());
    new L({
        buyerMaxPrice: (...s)=>{},
        sellerMinPrice: (...s)=>{}
    });
    Z = {};
    A = {
        tag: "publicLedgerArray",
        indices: {}
    };
});
export { L as Contract, A as contractReferenceLocations, x as ledger, Z as pureCircuits, __tla };
