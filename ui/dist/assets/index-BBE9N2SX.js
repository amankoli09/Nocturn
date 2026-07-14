import { S as rt, a as _s, i as As, b as $, c as rr, _ as Ae, E as sr, d as ar, e as or, f as cr, g as Tn, h as On, j as xs, k as lr, l as Ut, r as Rs, m as Ps, n as Ms, o as te, p as se, q as _, C as Vs, __tla as __tla_0 } from "./constants-BQyULcgQ.js";
import { S as qs, a as Bs, b as de, c as js, F as Ls, d as Us, I as Zn, w as ei, L as ur, Z as Qs, e as $s, T as zs, __tla as __tla_1 } from "./index-D3sxZXAj.js";
import { f as Ws } from "./browser-ponyfill-BuC3ADgq.js";
import { __tla as __tla_2 } from "./index-IsGXemPy.js";
let ge, yt, pl, yl, ws, Hn, Wl, ru, ln, $l, Cs, Os, Fn, Ds;
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
    function Hs(t, e) {
        if (!!!t) throw new Error(e);
    }
    const dr = {
        Name: [],
        Document: [
            "definitions"
        ],
        OperationDefinition: [
            "description",
            "name",
            "variableDefinitions",
            "directives",
            "selectionSet"
        ],
        VariableDefinition: [
            "description",
            "variable",
            "type",
            "defaultValue",
            "directives"
        ],
        Variable: [
            "name"
        ],
        SelectionSet: [
            "selections"
        ],
        Field: [
            "alias",
            "name",
            "arguments",
            "directives",
            "selectionSet"
        ],
        Argument: [
            "name",
            "value"
        ],
        FragmentSpread: [
            "name",
            "directives"
        ],
        InlineFragment: [
            "typeCondition",
            "directives",
            "selectionSet"
        ],
        FragmentDefinition: [
            "description",
            "name",
            "variableDefinitions",
            "typeCondition",
            "directives",
            "selectionSet"
        ],
        IntValue: [],
        FloatValue: [],
        StringValue: [],
        BooleanValue: [],
        NullValue: [],
        EnumValue: [],
        ListValue: [
            "values"
        ],
        ObjectValue: [
            "fields"
        ],
        ObjectField: [
            "name",
            "value"
        ],
        Directive: [
            "name",
            "arguments"
        ],
        NamedType: [
            "name"
        ],
        ListType: [
            "type"
        ],
        NonNullType: [
            "type"
        ],
        SchemaDefinition: [
            "description",
            "directives",
            "operationTypes"
        ],
        OperationTypeDefinition: [
            "type"
        ],
        ScalarTypeDefinition: [
            "description",
            "name",
            "directives"
        ],
        ObjectTypeDefinition: [
            "description",
            "name",
            "interfaces",
            "directives",
            "fields"
        ],
        FieldDefinition: [
            "description",
            "name",
            "arguments",
            "type",
            "directives"
        ],
        InputValueDefinition: [
            "description",
            "name",
            "type",
            "defaultValue",
            "directives"
        ],
        InterfaceTypeDefinition: [
            "description",
            "name",
            "interfaces",
            "directives",
            "fields"
        ],
        UnionTypeDefinition: [
            "description",
            "name",
            "directives",
            "types"
        ],
        EnumTypeDefinition: [
            "description",
            "name",
            "directives",
            "values"
        ],
        EnumValueDefinition: [
            "description",
            "name",
            "directives"
        ],
        InputObjectTypeDefinition: [
            "description",
            "name",
            "directives",
            "fields"
        ],
        DirectiveDefinition: [
            "description",
            "name",
            "arguments",
            "directives",
            "locations"
        ],
        SchemaExtension: [
            "directives",
            "operationTypes"
        ],
        DirectiveExtension: [
            "name",
            "directives"
        ],
        ScalarTypeExtension: [
            "name",
            "directives"
        ],
        ObjectTypeExtension: [
            "name",
            "interfaces",
            "directives",
            "fields"
        ],
        InterfaceTypeExtension: [
            "name",
            "interfaces",
            "directives",
            "fields"
        ],
        UnionTypeExtension: [
            "name",
            "directives",
            "types"
        ],
        EnumTypeExtension: [
            "name",
            "directives",
            "values"
        ],
        InputObjectTypeExtension: [
            "name",
            "directives",
            "fields"
        ],
        TypeCoordinate: [
            "name"
        ],
        MemberCoordinate: [
            "name",
            "memberName"
        ],
        ArgumentCoordinate: [
            "name",
            "fieldName",
            "argumentName"
        ],
        DirectiveCoordinate: [
            "name"
        ],
        DirectiveArgumentCoordinate: [
            "name",
            "argumentName"
        ]
    }, Ys = new Set(Object.keys(dr));
    function ti(t) {
        const e = t?.kind;
        return typeof e == "string" && Ys.has(e);
    }
    var Fe;
    (function(t) {
        t.QUERY = "query", t.MUTATION = "mutation", t.SUBSCRIPTION = "subscription";
    })(Fe || (Fe = {}));
    var C;
    (function(t) {
        t.NAME = "Name", t.DOCUMENT = "Document", t.OPERATION_DEFINITION = "OperationDefinition", t.VARIABLE_DEFINITION = "VariableDefinition", t.SELECTION_SET = "SelectionSet", t.FIELD = "Field", t.ARGUMENT = "Argument", t.FRAGMENT_SPREAD = "FragmentSpread", t.INLINE_FRAGMENT = "InlineFragment", t.FRAGMENT_DEFINITION = "FragmentDefinition", t.VARIABLE = "Variable", t.INT = "IntValue", t.FLOAT = "FloatValue", t.STRING = "StringValue", t.BOOLEAN = "BooleanValue", t.NULL = "NullValue", t.ENUM = "EnumValue", t.LIST = "ListValue", t.OBJECT = "ObjectValue", t.OBJECT_FIELD = "ObjectField", t.DIRECTIVE = "Directive", t.NAMED_TYPE = "NamedType", t.LIST_TYPE = "ListType", t.NON_NULL_TYPE = "NonNullType", t.SCHEMA_DEFINITION = "SchemaDefinition", t.OPERATION_TYPE_DEFINITION = "OperationTypeDefinition", t.SCALAR_TYPE_DEFINITION = "ScalarTypeDefinition", t.OBJECT_TYPE_DEFINITION = "ObjectTypeDefinition", t.FIELD_DEFINITION = "FieldDefinition", t.INPUT_VALUE_DEFINITION = "InputValueDefinition", t.INTERFACE_TYPE_DEFINITION = "InterfaceTypeDefinition", t.UNION_TYPE_DEFINITION = "UnionTypeDefinition", t.ENUM_TYPE_DEFINITION = "EnumTypeDefinition", t.ENUM_VALUE_DEFINITION = "EnumValueDefinition", t.INPUT_OBJECT_TYPE_DEFINITION = "InputObjectTypeDefinition", t.DIRECTIVE_DEFINITION = "DirectiveDefinition", t.SCHEMA_EXTENSION = "SchemaExtension", t.DIRECTIVE_EXTENSION = "DirectiveExtension", t.SCALAR_TYPE_EXTENSION = "ScalarTypeExtension", t.OBJECT_TYPE_EXTENSION = "ObjectTypeExtension", t.INTERFACE_TYPE_EXTENSION = "InterfaceTypeExtension", t.UNION_TYPE_EXTENSION = "UnionTypeExtension", t.ENUM_TYPE_EXTENSION = "EnumTypeExtension", t.INPUT_OBJECT_TYPE_EXTENSION = "InputObjectTypeExtension", t.TYPE_COORDINATE = "TypeCoordinate", t.MEMBER_COORDINATE = "MemberCoordinate", t.ARGUMENT_COORDINATE = "ArgumentCoordinate", t.DIRECTIVE_COORDINATE = "DirectiveCoordinate", t.DIRECTIVE_ARGUMENT_COORDINATE = "DirectiveArgumentCoordinate";
    })(C || (C = {}));
    function ni(t) {
        return t === 9 || t === 32;
    }
    function Gs(t, e) {
        const n = t.replace(/"""/g, '\\"""'), i = n.split(/\r\n|[\n\r]/g), r = i.length === 1, s = i.length > 1 && i.slice(1).every((h)=>h.length === 0 || ni(h.charCodeAt(0))), a = n.endsWith('\\"""'), o = t.endsWith('"') && !a, c = t.endsWith("\\"), l = o || c, u = !r || t.length > 70 || l || s || a;
        let f = "";
        const d = r && ni(t.charCodeAt(0));
        return (u && !d || s) && (f += `
`), f += n, (u || l) && (f += `
`), '"""' + f + '"""';
    }
    const Js = 10, fr = 2;
    function Xs(t) {
        return Dt(t, []);
    }
    function Dt(t, e) {
        switch(typeof t){
            case "string":
                return JSON.stringify(t);
            case "function":
                return t.name ? `[function ${t.name}]` : "[function]";
            case "object":
                return Ks(t, e);
            default:
                return String(t);
        }
    }
    function Ks(t, e) {
        if (t === null) return "null";
        if (e.includes(t)) return "[Circular]";
        const n = [
            ...e,
            t
        ];
        if (Zs(t)) {
            const i = t.toJSON();
            if (i !== t) return typeof i == "string" ? i : Dt(i, n);
        } else if (Array.isArray(t)) return ta(t, n);
        return ea(t, n);
    }
    function Zs(t) {
        return typeof t.toJSON == "function";
    }
    function ea(t, e) {
        const n = Object.entries(t);
        return n.length === 0 ? "{}" : e.length > fr ? "[" + na(t) + "]" : "{ " + n.map(([r, s])=>r + ": " + Dt(s, e)).join(", ") + " }";
    }
    function ta(t, e) {
        if (t.length === 0) return "[]";
        if (e.length > fr) return "[Array]";
        const n = Math.min(Js, t.length), i = t.length - n, r = [];
        for(let s = 0; s < n; ++s)r.push(Dt(t[s], e));
        return i === 1 ? r.push("... 1 more item") : i > 1 && r.push(`... ${i} more items`), "[" + r.join(", ") + "]";
    }
    function na(t) {
        const e = Object.prototype.toString.call(t).replace(/^\[object /, "").replace(/]$/, "");
        if (e === "Object" && typeof t.constructor == "function") {
            const n = t.constructor.name;
            if (typeof n == "string" && n !== "") return n;
        }
        return e;
    }
    function ia(t) {
        return `"${t.replace(ra, sa)}"`;
    }
    const ra = /[\x00-\x1f\x22\x5c\x7f-\x9f]/g;
    function sa(t) {
        return aa[t.charCodeAt(0)];
    }
    const aa = [
        "\\u0000",
        "\\u0001",
        "\\u0002",
        "\\u0003",
        "\\u0004",
        "\\u0005",
        "\\u0006",
        "\\u0007",
        "\\b",
        "\\t",
        "\\n",
        "\\u000B",
        "\\f",
        "\\r",
        "\\u000E",
        "\\u000F",
        "\\u0010",
        "\\u0011",
        "\\u0012",
        "\\u0013",
        "\\u0014",
        "\\u0015",
        "\\u0016",
        "\\u0017",
        "\\u0018",
        "\\u0019",
        "\\u001A",
        "\\u001B",
        "\\u001C",
        "\\u001D",
        "\\u001E",
        "\\u001F",
        "",
        "",
        '\\"',
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "\\\\",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "\\u007F",
        "\\u0080",
        "\\u0081",
        "\\u0082",
        "\\u0083",
        "\\u0084",
        "\\u0085",
        "\\u0086",
        "\\u0087",
        "\\u0088",
        "\\u0089",
        "\\u008A",
        "\\u008B",
        "\\u008C",
        "\\u008D",
        "\\u008E",
        "\\u008F",
        "\\u0090",
        "\\u0091",
        "\\u0092",
        "\\u0093",
        "\\u0094",
        "\\u0095",
        "\\u0096",
        "\\u0097",
        "\\u0098",
        "\\u0099",
        "\\u009A",
        "\\u009B",
        "\\u009C",
        "\\u009D",
        "\\u009E",
        "\\u009F"
    ], Cn = Object.freeze({});
    function ce(t, e, n = dr) {
        const i = new Map;
        for (const k of Object.values(C))i.set(k, oa(e, k));
        let r, s = Array.isArray(t), a = [
            t
        ], o = -1, c = [], l = t, u, f;
        const d = [], h = [];
        do {
            o++;
            const k = o === a.length, v = k && c.length !== 0;
            if (k) {
                if (u = h.length === 0 ? void 0 : d[d.length - 1], l = f, f = h.pop(), v) if (s) {
                    l = l.slice();
                    let S = 0;
                    for (const [w, V] of c){
                        const B = w - S;
                        V === null ? (l.splice(B, 1), S++) : l[B] = V;
                    }
                } else {
                    l = {
                        ...l
                    };
                    for (const [S, w] of c)l[S] = w;
                }
                o = r.index, a = r.keys, c = r.edits, s = r.inArray, r = r.prev;
            } else if (f) {
                if (u = s ? o : a[o], l = f[u], l == null) continue;
                d.push(u);
            }
            let g;
            if (!Array.isArray(l)) {
                var p, y;
                ti(l) || Hs(!1, `Invalid AST Node: ${Xs(l)}.`);
                const S = k ? (p = i.get(l.kind)) === null || p === void 0 ? void 0 : p.leave : (y = i.get(l.kind)) === null || y === void 0 ? void 0 : y.enter;
                if (g = S?.call(e, l, u, f, d, h), g === Cn) break;
                if (g === !1) {
                    if (!k) {
                        d.pop();
                        continue;
                    }
                } else if (g !== void 0 && (c.push([
                    u,
                    g
                ]), !k)) if (ti(g)) l = g;
                else {
                    d.pop();
                    continue;
                }
            }
            if (g === void 0 && v && c.push([
                u,
                l
            ]), k) d.pop();
            else {
                var m;
                r = {
                    inArray: s,
                    index: o,
                    keys: a,
                    edits: c,
                    prev: r
                }, s = Array.isArray(l), a = s ? l : (m = n[l.kind]) !== null && m !== void 0 ? m : [], o = -1, c = [], f && h.push(f), f = l;
            }
        }while (r !== void 0);
        return c.length !== 0 ? c[c.length - 1][1] : t;
    }
    function oa(t, e) {
        const n = t[e];
        return typeof n == "object" ? n : typeof n == "function" ? {
            enter: n,
            leave: void 0
        } : {
            enter: t.enter,
            leave: t.leave
        };
    }
    function ca(t) {
        return ce(t, ua);
    }
    const la = 80, ua = {
        Name: {
            leave: (t)=>t.value
        },
        Variable: {
            leave: (t)=>"$" + t.name
        },
        Document: {
            leave: (t)=>b(t.definitions, `

`)
        },
        OperationDefinition: {
            leave (t) {
                const e = Qt(t.variableDefinitions) ? E(`(
`, b(t.variableDefinitions, `
`), `
)`) : E("(", b(t.variableDefinitions, ", "), ")"), n = E("", t.description, `
`) + b([
                    t.operation,
                    b([
                        t.name,
                        e
                    ]),
                    b(t.directives, " ")
                ], " ");
                return (n === "query" ? "" : n + " ") + t.selectionSet;
            }
        },
        VariableDefinition: {
            leave: ({ variable: t, type: e, defaultValue: n, directives: i, description: r })=>E("", r, `
`) + t + ": " + e + E(" = ", n) + E(" ", b(i, " "))
        },
        SelectionSet: {
            leave: ({ selections: t })=>re(t)
        },
        Field: {
            leave ({ alias: t, name: e, arguments: n, directives: i, selectionSet: r }) {
                const s = E("", t, ": ") + e;
                let a = s + E("(", b(n, ", "), ")");
                return a.length > la && (a = s + E(`(
`, bt(b(n, `
`)), `
)`)), b([
                    a,
                    b(i, " "),
                    r
                ], " ");
            }
        },
        Argument: {
            leave: ({ name: t, value: e })=>t + ": " + e
        },
        FragmentSpread: {
            leave: ({ name: t, directives: e })=>"..." + t + E(" ", b(e, " "))
        },
        InlineFragment: {
            leave: ({ typeCondition: t, directives: e, selectionSet: n })=>b([
                    "...",
                    E("on ", t),
                    b(e, " "),
                    n
                ], " ")
        },
        FragmentDefinition: {
            leave: ({ name: t, typeCondition: e, variableDefinitions: n, directives: i, selectionSet: r, description: s })=>E("", s, `
`) + `fragment ${t}${E("(", b(n, ", "), ")")} on ${e} ${E("", b(i, " "), " ")}` + r
        },
        IntValue: {
            leave: ({ value: t })=>t
        },
        FloatValue: {
            leave: ({ value: t })=>t
        },
        StringValue: {
            leave: ({ value: t, block: e })=>e ? Gs(t) : ia(t)
        },
        BooleanValue: {
            leave: ({ value: t })=>t ? "true" : "false"
        },
        NullValue: {
            leave: ()=>"null"
        },
        EnumValue: {
            leave: ({ value: t })=>t
        },
        ListValue: {
            leave: ({ values: t })=>"[" + b(t, ", ") + "]"
        },
        ObjectValue: {
            leave: ({ fields: t })=>"{" + b(t, ", ") + "}"
        },
        ObjectField: {
            leave: ({ name: t, value: e })=>t + ": " + e
        },
        Directive: {
            leave: ({ name: t, arguments: e })=>"@" + t + E("(", b(e, ", "), ")")
        },
        NamedType: {
            leave: ({ name: t })=>t
        },
        ListType: {
            leave: ({ type: t })=>"[" + t + "]"
        },
        NonNullType: {
            leave: ({ type: t })=>t + "!"
        },
        SchemaDefinition: {
            leave: ({ description: t, directives: e, operationTypes: n })=>E("", t, `
`) + b([
                    "schema",
                    b(e, " "),
                    re(n)
                ], " ")
        },
        OperationTypeDefinition: {
            leave: ({ operation: t, type: e })=>t + ": " + e
        },
        ScalarTypeDefinition: {
            leave: ({ description: t, name: e, directives: n })=>E("", t, `
`) + b([
                    "scalar",
                    e,
                    b(n, " ")
                ], " ")
        },
        ObjectTypeDefinition: {
            leave: ({ description: t, name: e, interfaces: n, directives: i, fields: r })=>E("", t, `
`) + b([
                    "type",
                    e,
                    E("implements ", b(n, " & ")),
                    b(i, " "),
                    re(r)
                ], " ")
        },
        FieldDefinition: {
            leave: ({ description: t, name: e, arguments: n, type: i, directives: r })=>E("", t, `
`) + e + (Qt(n) ? E(`(
`, bt(b(n, `
`)), `
)`) : E("(", b(n, ", "), ")")) + ": " + i + E(" ", b(r, " "))
        },
        InputValueDefinition: {
            leave: ({ description: t, name: e, type: n, defaultValue: i, directives: r })=>E("", t, `
`) + b([
                    e + ": " + n,
                    E("= ", i),
                    b(r, " ")
                ], " ")
        },
        InterfaceTypeDefinition: {
            leave: ({ description: t, name: e, interfaces: n, directives: i, fields: r })=>E("", t, `
`) + b([
                    "interface",
                    e,
                    E("implements ", b(n, " & ")),
                    b(i, " "),
                    re(r)
                ], " ")
        },
        UnionTypeDefinition: {
            leave: ({ description: t, name: e, directives: n, types: i })=>E("", t, `
`) + b([
                    "union",
                    e,
                    b(n, " "),
                    E("= ", b(i, " | "))
                ], " ")
        },
        EnumTypeDefinition: {
            leave: ({ description: t, name: e, directives: n, values: i })=>E("", t, `
`) + b([
                    "enum",
                    e,
                    b(n, " "),
                    re(i)
                ], " ")
        },
        EnumValueDefinition: {
            leave: ({ description: t, name: e, directives: n })=>E("", t, `
`) + b([
                    e,
                    b(n, " ")
                ], " ")
        },
        InputObjectTypeDefinition: {
            leave: ({ description: t, name: e, directives: n, fields: i })=>E("", t, `
`) + b([
                    "input",
                    e,
                    b(n, " "),
                    re(i)
                ], " ")
        },
        DirectiveDefinition: {
            leave: ({ description: t, name: e, arguments: n, directives: i, repeatable: r, locations: s })=>E("", t, `
`) + "directive @" + e + (Qt(n) ? E(`(
`, bt(b(n, `
`)), `
)`) : E("(", b(n, ", "), ")")) + E(" ", b(i, " ")) + (r ? " repeatable" : "") + " on " + b(s, " | ")
        },
        SchemaExtension: {
            leave: ({ directives: t, operationTypes: e })=>b([
                    "extend schema",
                    b(t, " "),
                    re(e)
                ], " ")
        },
        ScalarTypeExtension: {
            leave: ({ name: t, directives: e })=>b([
                    "extend scalar",
                    t,
                    b(e, " ")
                ], " ")
        },
        ObjectTypeExtension: {
            leave: ({ name: t, interfaces: e, directives: n, fields: i })=>b([
                    "extend type",
                    t,
                    E("implements ", b(e, " & ")),
                    b(n, " "),
                    re(i)
                ], " ")
        },
        InterfaceTypeExtension: {
            leave: ({ name: t, interfaces: e, directives: n, fields: i })=>b([
                    "extend interface",
                    t,
                    E("implements ", b(e, " & ")),
                    b(n, " "),
                    re(i)
                ], " ")
        },
        UnionTypeExtension: {
            leave: ({ name: t, directives: e, types: n })=>b([
                    "extend union",
                    t,
                    b(e, " "),
                    E("= ", b(n, " | "))
                ], " ")
        },
        EnumTypeExtension: {
            leave: ({ name: t, directives: e, values: n })=>b([
                    "extend enum",
                    t,
                    b(e, " "),
                    re(n)
                ], " ")
        },
        InputObjectTypeExtension: {
            leave: ({ name: t, directives: e, fields: n })=>b([
                    "extend input",
                    t,
                    b(e, " "),
                    re(n)
                ], " ")
        },
        DirectiveExtension: {
            leave: ({ name: t, directives: e })=>b([
                    "extend directive @" + t,
                    b(e, " ")
                ], " ")
        },
        TypeCoordinate: {
            leave: ({ name: t })=>t
        },
        MemberCoordinate: {
            leave: ({ name: t, memberName: e })=>b([
                    t,
                    E(".", e)
                ])
        },
        ArgumentCoordinate: {
            leave: ({ name: t, fieldName: e, argumentName: n })=>b([
                    t,
                    E(".", e),
                    E("(", n, ":)")
                ])
        },
        DirectiveCoordinate: {
            leave: ({ name: t })=>b([
                    "@",
                    t
                ])
        },
        DirectiveArgumentCoordinate: {
            leave: ({ name: t, argumentName: e })=>b([
                    "@",
                    t,
                    E("(", e, ":)")
                ])
        }
    };
    function b(t, e = "") {
        var n;
        return (n = t?.filter((i)=>i).join(e)) !== null && n !== void 0 ? n : "";
    }
    function re(t) {
        return E(`{
`, bt(b(t, `
`)), `
}`);
    }
    function E(t, e, n = "") {
        return e != null && e !== "" ? t + e + n : "";
    }
    function bt(t) {
        return E("  ", t.replace(/\n/g, `
  `));
    }
    function Qt(t) {
        var e;
        return (e = t?.some((n)=>n.includes(`
`))) !== null && e !== void 0 ? e : !1;
    }
    var da = {
        Promise: void 0
    };
    function St(t) {
        t();
    }
    var Dn = function() {
        return typeof Symbol == "function" && Symbol.observable || "@@observable";
    }();
    function It(t) {
        return t;
    }
    function hr() {
        for(var t = [], e = 0; e < arguments.length; e++)t[e] = arguments[e];
        return mr(t);
    }
    function mr(t) {
        return t.length === 0 ? It : t.length === 1 ? t[0] : function(n) {
            return t.reduce(function(i, r) {
                return r(i);
            }, n);
        };
    }
    var A = function() {
        function t(e) {
            e && (this._subscribe = e);
        }
        return t.prototype.lift = function(e) {
            var n = new t;
            return n.source = this, n.operator = e, n;
        }, t.prototype.subscribe = function(e, n, i) {
            var r = this, s = ha(e) ? e : new rt(e, n, i);
            return St(function() {
                var a = r, o = a.operator, c = a.source;
                s.add(o ? o.call(s, c) : c ? r._subscribe(s) : r._trySubscribe(s));
            }), s;
        }, t.prototype._trySubscribe = function(e) {
            try {
                return this._subscribe(e);
            } catch (n) {
                e.error(n);
            }
        }, t.prototype.forEach = function(e, n) {
            var i = this;
            return n = ii(n), new n(function(r, s) {
                var a = new rt({
                    next: function(o) {
                        try {
                            e(o);
                        } catch (c) {
                            s(c), a.unsubscribe();
                        }
                    },
                    error: s,
                    complete: r
                });
                i.subscribe(a);
            });
        }, t.prototype._subscribe = function(e) {
            var n;
            return (n = this.source) === null || n === void 0 ? void 0 : n.subscribe(e);
        }, t.prototype[Dn] = function() {
            return this;
        }, t.prototype.pipe = function() {
            for(var e = [], n = 0; n < arguments.length; n++)e[n] = arguments[n];
            return mr(e)(this);
        }, t.prototype.toPromise = function(e) {
            var n = this;
            return e = ii(e), new e(function(i, r) {
                var s;
                n.subscribe(function(a) {
                    return s = a;
                }, function(a) {
                    return r(a);
                }, function() {
                    return i(s);
                });
            });
        }, t.create = function(e) {
            return new t(e);
        }, t;
    }();
    function ii(t) {
        var e;
        return (e = t ?? da.Promise) !== null && e !== void 0 ? e : Promise;
    }
    function fa(t) {
        return t && $(t.next) && $(t.error) && $(t.complete);
    }
    function ha(t) {
        return t && t instanceof _s || fa(t) && As(t);
    }
    var ma = rr(function(t) {
        return function() {
            t(this), this.name = "ObjectUnsubscribedError", this.message = "object unsubscribed";
        };
    }), He = function(t) {
        Ae(e, t);
        function e() {
            var n = t.call(this) || this;
            return n.closed = !1, n.currentObservers = null, n.observers = [], n.isStopped = !1, n.hasError = !1, n.thrownError = null, n;
        }
        return e.prototype.lift = function(n) {
            var i = new ri(this, this);
            return i.operator = n, i;
        }, e.prototype._throwIfClosed = function() {
            if (this.closed) throw new ma;
        }, e.prototype.next = function(n) {
            var i = this;
            St(function() {
                var r, s;
                if (i._throwIfClosed(), !i.isStopped) {
                    i.currentObservers || (i.currentObservers = Array.from(i.observers));
                    try {
                        for(var a = cr(i.currentObservers), o = a.next(); !o.done; o = a.next()){
                            var c = o.value;
                            c.next(n);
                        }
                    } catch (l) {
                        r = {
                            error: l
                        };
                    } finally{
                        try {
                            o && !o.done && (s = a.return) && s.call(a);
                        } finally{
                            if (r) throw r.error;
                        }
                    }
                }
            });
        }, e.prototype.error = function(n) {
            var i = this;
            St(function() {
                if (i._throwIfClosed(), !i.isStopped) {
                    i.hasError = i.isStopped = !0, i.thrownError = n;
                    for(var r = i.observers; r.length;)r.shift().error(n);
                }
            });
        }, e.prototype.complete = function() {
            var n = this;
            St(function() {
                if (n._throwIfClosed(), !n.isStopped) {
                    n.isStopped = !0;
                    for(var i = n.observers; i.length;)i.shift().complete();
                }
            });
        }, e.prototype.unsubscribe = function() {
            this.isStopped = this.closed = !0, this.observers = this.currentObservers = null;
        }, Object.defineProperty(e.prototype, "observed", {
            get: function() {
                var n;
                return ((n = this.observers) === null || n === void 0 ? void 0 : n.length) > 0;
            },
            enumerable: !1,
            configurable: !0
        }), e.prototype._trySubscribe = function(n) {
            return this._throwIfClosed(), t.prototype._trySubscribe.call(this, n);
        }, e.prototype._subscribe = function(n) {
            return this._throwIfClosed(), this._checkFinalizedStatuses(n), this._innerSubscribe(n);
        }, e.prototype._innerSubscribe = function(n) {
            var i = this, r = this, s = r.hasError, a = r.isStopped, o = r.observers;
            return s || a ? sr : (this.currentObservers = null, o.push(n), new ar(function() {
                i.currentObservers = null, or(o, n);
            }));
        }, e.prototype._checkFinalizedStatuses = function(n) {
            var i = this, r = i.hasError, s = i.thrownError, a = i.isStopped;
            r ? n.error(s) : a && n.complete();
        }, e.prototype.asObservable = function() {
            var n = new A;
            return n.source = this, n;
        }, e.create = function(n, i) {
            return new ri(n, i);
        }, e;
    }(A), ri = function(t) {
        Ae(e, t);
        function e(n, i) {
            var r = t.call(this) || this;
            return r.destination = n, r.source = i, r;
        }
        return e.prototype.next = function(n) {
            var i, r;
            (r = (i = this.destination) === null || i === void 0 ? void 0 : i.next) === null || r === void 0 || r.call(i, n);
        }, e.prototype.error = function(n) {
            var i, r;
            (r = (i = this.destination) === null || i === void 0 ? void 0 : i.error) === null || r === void 0 || r.call(i, n);
        }, e.prototype.complete = function() {
            var n, i;
            (i = (n = this.destination) === null || n === void 0 ? void 0 : n.complete) === null || i === void 0 || i.call(n);
        }, e.prototype._subscribe = function(n) {
            var i, r;
            return (r = (i = this.source) === null || i === void 0 ? void 0 : i.subscribe(n)) !== null && r !== void 0 ? r : sr;
        }, e;
    }(He), pa = function(t) {
        Ae(e, t);
        function e(n) {
            var i = t.call(this) || this;
            return i._value = n, i;
        }
        return Object.defineProperty(e.prototype, "value", {
            get: function() {
                return this.getValue();
            },
            enumerable: !1,
            configurable: !0
        }), e.prototype._subscribe = function(n) {
            var i = t.prototype._subscribe.call(this, n);
            return !i.closed && n.next(this._value), i;
        }, e.prototype.getValue = function() {
            var n = this, i = n.hasError, r = n.thrownError, s = n._value;
            if (i) throw r;
            return this._throwIfClosed(), s;
        }, e.prototype.next = function(n) {
            t.prototype.next.call(this, this._value = n);
        }, e;
    }(He), In = {
        now: function() {
            return (In.delegate || Date).now();
        },
        delegate: void 0
    }, pr = function(t) {
        Ae(e, t);
        function e(n, i, r) {
            n === void 0 && (n = 1 / 0), i === void 0 && (i = 1 / 0), r === void 0 && (r = In);
            var s = t.call(this) || this;
            return s._bufferSize = n, s._windowTime = i, s._timestampProvider = r, s._buffer = [], s._infiniteTimeWindow = !0, s._infiniteTimeWindow = i === 1 / 0, s._bufferSize = Math.max(1, n), s._windowTime = Math.max(1, i), s;
        }
        return e.prototype.next = function(n) {
            var i = this, r = i.isStopped, s = i._buffer, a = i._infiniteTimeWindow, o = i._timestampProvider, c = i._windowTime;
            r || (s.push(n), !a && s.push(o.now() + c)), this._trimBuffer(), t.prototype.next.call(this, n);
        }, e.prototype._subscribe = function(n) {
            this._throwIfClosed(), this._trimBuffer();
            for(var i = this._innerSubscribe(n), r = this, s = r._infiniteTimeWindow, a = r._buffer, o = a.slice(), c = 0; c < o.length && !n.closed; c += s ? 1 : 2)n.next(o[c]);
            return this._checkFinalizedStatuses(n), i;
        }, e.prototype._trimBuffer = function() {
            var n = this, i = n._bufferSize, r = n._timestampProvider, s = n._buffer, a = n._infiniteTimeWindow, o = (a ? 1 : 2) * i;
            if (i < 1 / 0 && o < s.length && s.splice(0, s.length - o), !a) {
                for(var c = r.now(), l = 0, u = 1; u < s.length && s[u] <= c; u += 2)l = u;
                l && s.splice(0, l + 1);
            }
        }, e;
    }(He), ya = function(t) {
        Ae(e, t);
        function e(n, i) {
            return t.call(this) || this;
        }
        return e.prototype.schedule = function(n, i) {
            return this;
        }, e;
    }(ar), si = {
        setInterval: function(t, e) {
            for(var n = [], i = 2; i < arguments.length; i++)n[i - 2] = arguments[i];
            return setInterval.apply(void 0, Tn([
                t,
                e
            ], On(n)));
        },
        clearInterval: function(t) {
            return clearInterval(t);
        },
        delegate: void 0
    }, ka = function(t) {
        Ae(e, t);
        function e(n, i) {
            var r = t.call(this, n, i) || this;
            return r.scheduler = n, r.work = i, r.pending = !1, r;
        }
        return e.prototype.schedule = function(n, i) {
            var r;
            if (i === void 0 && (i = 0), this.closed) return this;
            this.state = n;
            var s = this.id, a = this.scheduler;
            return s != null && (this.id = this.recycleAsyncId(a, s, i)), this.pending = !0, this.delay = i, this.id = (r = this.id) !== null && r !== void 0 ? r : this.requestAsyncId(a, this.id, i), this;
        }, e.prototype.requestAsyncId = function(n, i, r) {
            return r === void 0 && (r = 0), si.setInterval(n.flush.bind(n, this), r);
        }, e.prototype.recycleAsyncId = function(n, i, r) {
            if (r === void 0 && (r = 0), r != null && this.delay === r && this.pending === !1) return i;
            i != null && si.clearInterval(i);
        }, e.prototype.execute = function(n, i) {
            if (this.closed) return new Error("executing a cancelled action");
            this.pending = !1;
            var r = this._execute(n, i);
            if (r) return r;
            this.pending === !1 && this.id != null && (this.id = this.recycleAsyncId(this.scheduler, this.id, null));
        }, e.prototype._execute = function(n, i) {
            var r = !1, s;
            try {
                this.work(n);
            } catch (a) {
                r = !0, s = a || new Error("Scheduled action threw falsy error");
            }
            if (r) return this.unsubscribe(), s;
        }, e.prototype.unsubscribe = function() {
            if (!this.closed) {
                var n = this, i = n.id, r = n.scheduler, s = r.actions;
                this.work = this.state = this.scheduler = null, this.pending = !1, or(s, this), i != null && (this.id = this.recycleAsyncId(r, i, null)), this.delay = null, t.prototype.unsubscribe.call(this);
            }
        }, e;
    }(ya), ai = function() {
        function t(e, n) {
            n === void 0 && (n = t.now), this.schedulerActionCtor = e, this.now = n;
        }
        return t.prototype.schedule = function(e, n, i) {
            return n === void 0 && (n = 0), new this.schedulerActionCtor(this, e).schedule(i, n);
        }, t.now = In.now, t;
    }(), va = function(t) {
        Ae(e, t);
        function e(n, i) {
            i === void 0 && (i = ai.now);
            var r = t.call(this, n, i) || this;
            return r.actions = [], r._active = !1, r;
        }
        return e.prototype.flush = function(n) {
            var i = this.actions;
            if (this._active) {
                i.push(n);
                return;
            }
            var r;
            this._active = !0;
            do if (r = n.execute(n.state, n.delay)) break;
            while (n = i.shift());
            if (this._active = !1, r) {
                for(; n = i.shift();)n.unsubscribe();
                throw r;
            }
        }, e;
    }(ai), ga = new va(ka), ba = ga, De = new A(function(t) {
        return t.complete();
    });
    function Sa(t) {
        return t && $(t.schedule);
    }
    function yr(t) {
        return t[t.length - 1];
    }
    function wa(t) {
        return $(yr(t)) ? t.pop() : void 0;
    }
    function kr(t) {
        return Sa(yr(t)) ? t.pop() : void 0;
    }
    var vr = function(t) {
        return t && typeof t.length == "number" && typeof t != "function";
    };
    function gr(t) {
        return $(t?.then);
    }
    function br(t) {
        return $(t[Dn]);
    }
    function Sr(t) {
        return Symbol.asyncIterator && $(t?.[Symbol.asyncIterator]);
    }
    function wr(t) {
        return new TypeError("You provided " + (t !== null && typeof t == "object" ? "an invalid object" : "'" + t + "'") + " where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.");
    }
    function Na() {
        return typeof Symbol != "function" || !Symbol.iterator ? "@@iterator" : Symbol.iterator;
    }
    var Nr = Na();
    function Er(t) {
        return $(t?.[Nr]);
    }
    function Fr(t) {
        return xs(this, arguments, function() {
            var n, i, r, s;
            return lr(this, function(a) {
                switch(a.label){
                    case 0:
                        n = t.getReader(), a.label = 1;
                    case 1:
                        a.trys.push([
                            1,
                            ,
                            9,
                            10
                        ]), a.label = 2;
                    case 2:
                        return [
                            4,
                            Ut(n.read())
                        ];
                    case 3:
                        return i = a.sent(), r = i.value, s = i.done, s ? [
                            4,
                            Ut(void 0)
                        ] : [
                            3,
                            5
                        ];
                    case 4:
                        return [
                            2,
                            a.sent()
                        ];
                    case 5:
                        return [
                            4,
                            Ut(r)
                        ];
                    case 6:
                        return [
                            4,
                            a.sent()
                        ];
                    case 7:
                        return a.sent(), [
                            3,
                            2
                        ];
                    case 8:
                        return [
                            3,
                            10
                        ];
                    case 9:
                        return n.releaseLock(), [
                            7
                        ];
                    case 10:
                        return [
                            2
                        ];
                }
            });
        });
    }
    function Tr(t) {
        return $(t?.getReader);
    }
    function le(t) {
        if (t instanceof A) return t;
        if (t != null) {
            if (br(t)) return Ea(t);
            if (vr(t)) return Fa(t);
            if (gr(t)) return Ta(t);
            if (Sr(t)) return Or(t);
            if (Er(t)) return Oa(t);
            if (Tr(t)) return Ca(t);
        }
        throw wr(t);
    }
    function Ea(t) {
        return new A(function(e) {
            var n = t[Dn]();
            if ($(n.subscribe)) return n.subscribe(e);
            throw new TypeError("Provided object does not correctly implement Symbol.observable");
        });
    }
    function Fa(t) {
        return new A(function(e) {
            for(var n = 0; n < t.length && !e.closed; n++)e.next(t[n]);
            e.complete();
        });
    }
    function Ta(t) {
        return new A(function(e) {
            t.then(function(n) {
                e.closed || (e.next(n), e.complete());
            }, function(n) {
                return e.error(n);
            }).then(null, Rs);
        });
    }
    function Oa(t) {
        return new A(function(e) {
            var n, i;
            try {
                for(var r = cr(t), s = r.next(); !s.done; s = r.next()){
                    var a = s.value;
                    if (e.next(a), e.closed) return;
                }
            } catch (o) {
                n = {
                    error: o
                };
            } finally{
                try {
                    s && !s.done && (i = r.return) && i.call(r);
                } finally{
                    if (n) throw n.error;
                }
            }
            e.complete();
        });
    }
    function Or(t) {
        return new A(function(e) {
            Da(t, e).catch(function(n) {
                return e.error(n);
            });
        });
    }
    function Ca(t) {
        return Or(Fr(t));
    }
    function Da(t, e) {
        var n, i, r, s;
        return Ps(this, void 0, void 0, function() {
            var a, o;
            return lr(this, function(c) {
                switch(c.label){
                    case 0:
                        c.trys.push([
                            0,
                            5,
                            6,
                            11
                        ]), n = Ms(t), c.label = 1;
                    case 1:
                        return [
                            4,
                            n.next()
                        ];
                    case 2:
                        if (i = c.sent(), !!i.done) return [
                            3,
                            4
                        ];
                        if (a = i.value, e.next(a), e.closed) return [
                            2
                        ];
                        c.label = 3;
                    case 3:
                        return [
                            3,
                            1
                        ];
                    case 4:
                        return [
                            3,
                            11
                        ];
                    case 5:
                        return o = c.sent(), r = {
                            error: o
                        }, [
                            3,
                            11
                        ];
                    case 6:
                        return c.trys.push([
                            6,
                            ,
                            9,
                            10
                        ]), i && !i.done && (s = n.return) ? [
                            4,
                            s.call(n)
                        ] : [
                            3,
                            8
                        ];
                    case 7:
                        c.sent(), c.label = 8;
                    case 8:
                        return [
                            3,
                            10
                        ];
                    case 9:
                        if (r) throw r.error;
                        return [
                            7
                        ];
                    case 10:
                        return [
                            7
                        ];
                    case 11:
                        return e.complete(), [
                            2
                        ];
                }
            });
        });
    }
    function Oe(t, e, n, i, r) {
        i === void 0 && (i = 0), r === void 0 && (r = !1);
        var s = e.schedule(function() {
            n(), r ? t.add(this.schedule(null, i)) : this.unsubscribe();
        }, i);
        if (t.add(s), !r) return s;
    }
    function Cr(t, e) {
        return e === void 0 && (e = 0), te(function(n, i) {
            n.subscribe(se(i, function(r) {
                return Oe(i, t, function() {
                    return i.next(r);
                }, e);
            }, function() {
                return Oe(i, t, function() {
                    return i.complete();
                }, e);
            }, function(r) {
                return Oe(i, t, function() {
                    return i.error(r);
                }, e);
            }));
        });
    }
    function Dr(t, e) {
        return e === void 0 && (e = 0), te(function(n, i) {
            i.add(t.schedule(function() {
                return n.subscribe(i);
            }, e));
        });
    }
    function Ia(t, e) {
        return le(t).pipe(Dr(e), Cr(e));
    }
    function _a(t, e) {
        return le(t).pipe(Dr(e), Cr(e));
    }
    function Aa(t, e) {
        return new A(function(n) {
            var i = 0;
            return e.schedule(function() {
                i === t.length ? n.complete() : (n.next(t[i++]), n.closed || this.schedule());
            });
        });
    }
    function xa(t, e) {
        return new A(function(n) {
            var i;
            return Oe(n, e, function() {
                i = t[Nr](), Oe(n, e, function() {
                    var r, s, a;
                    try {
                        r = i.next(), s = r.value, a = r.done;
                    } catch (o) {
                        n.error(o);
                        return;
                    }
                    a ? n.complete() : n.next(s);
                }, 0, !0);
            }), function() {
                return $(i?.return) && i.return();
            };
        });
    }
    function Ir(t, e) {
        if (!t) throw new Error("Iterable cannot be null");
        return new A(function(n) {
            Oe(n, e, function() {
                var i = t[Symbol.asyncIterator]();
                Oe(n, e, function() {
                    i.next().then(function(r) {
                        r.done ? n.complete() : n.next(r.value);
                    });
                }, 0, !0);
            });
        });
    }
    function Ra(t, e) {
        return Ir(Fr(t), e);
    }
    function Pa(t, e) {
        if (t != null) {
            if (br(t)) return Ia(t, e);
            if (vr(t)) return Aa(t, e);
            if (gr(t)) return _a(t, e);
            if (Sr(t)) return Ir(t, e);
            if (Er(t)) return xa(t, e);
            if (Tr(t)) return Ra(t, e);
        }
        throw wr(t);
    }
    function oe(t, e) {
        return e ? Pa(t, e) : le(t);
    }
    function Ne() {
        for(var t = [], e = 0; e < arguments.length; e++)t[e] = arguments[e];
        var n = kr(t);
        return oe(t, n);
    }
    function _r(t, e) {
        var n = $(t) ? t : function() {
            return t;
        }, i = function(r) {
            return r.error(n());
        };
        return new A(i);
    }
    var oi;
    (function(t) {
        t.NEXT = "N", t.ERROR = "E", t.COMPLETE = "C";
    })(oi || (oi = {}));
    var $t = function() {
        function t(e, n, i) {
            this.kind = e, this.value = n, this.error = i, this.hasValue = e === "N";
        }
        return t.prototype.observe = function(e) {
            return Ma(this, e);
        }, t.prototype.do = function(e, n, i) {
            var r = this, s = r.kind, a = r.value, o = r.error;
            return s === "N" ? e?.(a) : s === "E" ? n?.(o) : i?.();
        }, t.prototype.accept = function(e, n, i) {
            var r;
            return $((r = e) === null || r === void 0 ? void 0 : r.next) ? this.observe(e) : this.do(e, n, i);
        }, t.prototype.toObservable = function() {
            var e = this, n = e.kind, i = e.value, r = e.error, s = n === "N" ? Ne(i) : n === "E" ? _r(function() {
                return r;
            }) : n === "C" ? De : 0;
            if (!s) throw new TypeError("Unexpected notification kind " + n);
            return s;
        }, t.createNext = function(e) {
            return new t("N", e);
        }, t.createError = function(e) {
            return new t("E", void 0, e);
        }, t.createComplete = function() {
            return t.completeNotification;
        }, t.completeNotification = new t("C"), t;
    }();
    function Ma(t, e) {
        var n, i, r, s = t, a = s.kind, o = s.value, c = s.error;
        if (typeof a != "string") throw new TypeError('Invalid notification, missing "kind"');
        a === "N" ? (n = e.next) === null || n === void 0 || n.call(e, o) : a === "E" ? (i = e.error) === null || i === void 0 || i.call(e, c) : (r = e.complete) === null || r === void 0 || r.call(e);
    }
    var Ar = rr(function(t) {
        return function() {
            t(this), this.name = "EmptyError", this.message = "no elements in sequence";
        };
    });
    function Va(t, e) {
        var n = typeof e == "object";
        return new Promise(function(i, r) {
            var s = !1, a;
            t.subscribe({
                next: function(o) {
                    a = o, s = !0;
                },
                error: r,
                complete: function() {
                    s ? i(a) : n ? i(e.defaultValue) : r(new Ar);
                }
            });
        });
    }
    function gt(t, e) {
        return new Promise(function(n, i) {
            var r = new rt({
                next: function(s) {
                    n(s), r.unsubscribe();
                },
                error: i,
                complete: function() {
                    i(new Ar);
                }
            });
            t.subscribe(r);
        });
    }
    function qa(t) {
        return t instanceof Date && !isNaN(t);
    }
    function Ba(t, e, n, i, r, s, a, o) {
        var c = [], l = 0, u = 0, f = !1, d = function() {
            f && !c.length && !l && e.complete();
        }, h = function(y) {
            return l < i ? p(y) : c.push(y);
        }, p = function(y) {
            l++;
            var m = !1;
            le(n(y, u++)).subscribe(se(e, function(k) {
                e.next(k);
            }, function() {
                m = !0;
            }, void 0, function() {
                if (m) try {
                    l--;
                    for(var k = function() {
                        var v = c.shift();
                        a || p(v);
                    }; c.length && l < i;)k();
                    d();
                } catch (v) {
                    e.error(v);
                }
            }));
        };
        return t.subscribe(se(e, h, function() {
            f = !0, d();
        })), function() {};
    }
    function ve(t, e, n) {
        return n === void 0 && (n = 1 / 0), $(e) ? ve(function(i, r) {
            return _(function(s, a) {
                return e(i, s, r, a);
            })(le(t(i, r)));
        }, n) : (typeof e == "number" && (n = e), te(function(i, r) {
            return Ba(i, r, t, n);
        }));
    }
    function ja(t) {
        return ve(It, t);
    }
    function La() {
        return ja(1);
    }
    function zt() {
        for(var t = [], e = 0; e < arguments.length; e++)t[e] = arguments[e];
        return La()(oe(t, kr(t)));
    }
    function Ua(t) {
        return new A(function(e) {
            le(t()).subscribe(e);
        });
    }
    function ci(t, e, n) {
        return Ua(function() {
            return t() ? e : n;
        });
    }
    function Qa(t, e, n) {
        return n === void 0 && (n = ba), new A(function(i) {
            var r = qa(t) ? +t - n.now() : t;
            r < 0 && (r = 0);
            var s = 0;
            return n.schedule(function() {
                i.closed || (i.next(s++), i.complete());
            }, r);
        });
    }
    var $a = Array.isArray;
    function za(t) {
        return t.length === 1 && $a(t[0]) ? t[0] : t;
    }
    function W(t, e) {
        return te(function(n, i) {
            var r = 0;
            n.subscribe(se(i, function(s) {
                return t.call(e, s, r++) && i.next(s);
            }));
        });
    }
    function Wa() {
        for(var t = [], e = 0; e < arguments.length; e++)t[e] = arguments[e];
        var n = wa(t), i = za(t);
        return i.length ? new A(function(r) {
            var s = i.map(function() {
                return [];
            }), a = i.map(function() {
                return !1;
            });
            r.add(function() {
                s = a = null;
            });
            for(var o = function(l) {
                le(i[l]).subscribe(se(r, function(u) {
                    if (s[l].push(u), s.every(function(d) {
                        return d.length;
                    })) {
                        var f = s.map(function(d) {
                            return d.shift();
                        });
                        r.next(n ? n.apply(void 0, Tn([], On(f))) : f), s.some(function(d, h) {
                            return !d.length && a[h];
                        }) && r.complete();
                    }
                }, function() {
                    a[l] = !0, !s[l].length && r.complete();
                }));
            }, c = 0; !r.closed && c < i.length; c++)o(c);
            return function() {
                s = a = null;
            };
        }) : De;
    }
    function wt(t) {
        return te(function(e, n) {
            var i = null, r = !1, s;
            i = e.subscribe(se(n, void 0, void 0, function(a) {
                s = le(t(a, wt(t)(e))), i ? (i.unsubscribe(), i = null, s.subscribe(n)) : r = !0;
            })), r && (i.unsubscribe(), i = null, s.subscribe(n));
        });
    }
    function Z(t, e) {
        return $(e) ? ve(t, e, 1) : ve(t, 1);
    }
    function _t(t) {
        return t <= 0 ? function() {
            return De;
        } : te(function(e, n) {
            var i = 0;
            e.subscribe(se(n, function(r) {
                ++i <= t && (n.next(r), t <= i && n.complete());
            }));
        });
    }
    function Ha(t, e) {
        return e === void 0 && (e = It), t = t ?? Ya, te(function(n, i) {
            var r, s = !0;
            n.subscribe(se(i, function(a) {
                var o = e(a);
                (s || !t(r, o)) && (s = !1, r = o, i.next(a));
            }));
        });
    }
    function Ya(t, e) {
        return t === e;
    }
    function Ga(t) {
        return te(function(e, n) {
            try {
                e.subscribe(n);
            } finally{
                n.add(t);
            }
        });
    }
    function Ja() {
        return te(function(t, e) {
            t.subscribe(se(e, function(n) {
                e.next($t.createNext(n));
            }, function() {
                e.next($t.createComplete()), e.complete();
            }, function(n) {
                e.next($t.createError(n)), e.complete();
            }));
        });
    }
    function st(t) {
        t === void 0 && (t = {});
        var e = t.connector, n = e === void 0 ? function() {
            return new He;
        } : e, i = t.resetOnError, r = i === void 0 ? !0 : i, s = t.resetOnComplete, a = s === void 0 ? !0 : s, o = t.resetOnRefCountZero, c = o === void 0 ? !0 : o;
        return function(l) {
            var u, f, d, h = 0, p = !1, y = !1, m = function() {
                f?.unsubscribe(), f = void 0;
            }, k = function() {
                m(), u = d = void 0, p = y = !1;
            }, v = function() {
                var g = u;
                k(), g?.unsubscribe();
            };
            return te(function(g, S) {
                h++, !y && !p && m();
                var w = d = d ?? n();
                S.add(function() {
                    h--, h === 0 && !y && !p && (f = Wt(v, c));
                }), w.subscribe(S), !u && h > 0 && (u = new rt({
                    next: function(V) {
                        return w.next(V);
                    },
                    error: function(V) {
                        y = !0, m(), f = Wt(k, r, V), w.error(V);
                    },
                    complete: function() {
                        p = !0, m(), f = Wt(k, a), w.complete();
                    }
                }), le(g).subscribe(u));
            })(l);
        };
    }
    function Wt(t, e) {
        for(var n = [], i = 2; i < arguments.length; i++)n[i - 2] = arguments[i];
        if (e === !0) {
            t();
            return;
        }
        if (e !== !1) {
            var r = new rt({
                next: function() {
                    r.unsubscribe(), t();
                }
            });
            return le(e.apply(void 0, Tn([], On(n)))).subscribe(r);
        }
    }
    function _n(t, e, n) {
        var i, r, s, a, o = !1;
        return t && typeof t == "object" ? (i = t.bufferSize, a = i === void 0 ? 1 / 0 : i, r = t.windowTime, e = r === void 0 ? 1 / 0 : r, s = t.refCount, o = s === void 0 ? !1 : s, n = t.scheduler) : a = t ?? 1 / 0, st({
            connector: function() {
                return new pr(a, e, n);
            },
            resetOnError: !0,
            resetOnComplete: !1,
            resetOnRefCountZero: o
        });
    }
    function Ht(t) {
        return W(function(e, n) {
            return t <= n;
        });
    }
    function Xa(t) {
        return te(function(e, n) {
            var i = !1, r = 0;
            e.subscribe(se(n, function(s) {
                return (i || (i = !t(s, r++))) && n.next(s);
            }));
        });
    }
    function at(t, e, n) {
        var i = $(t) || e || n ? {
            next: t,
            error: e,
            complete: n
        } : t;
        return i ? te(function(r, s) {
            var a;
            (a = i.subscribe) === null || a === void 0 || a.call(i);
            var o = !0;
            r.subscribe(se(s, function(c) {
                var l;
                (l = i.next) === null || l === void 0 || l.call(i, c), s.next(c);
            }, function() {
                var c;
                o = !1, (c = i.complete) === null || c === void 0 || c.call(i), s.complete();
            }, function(c) {
                var l;
                o = !1, (l = i.error) === null || l === void 0 || l.call(i, c), s.error(c);
            }, function() {
                var c, l;
                o && ((c = i.unsubscribe) === null || c === void 0 || c.call(i)), (l = i.finalize) === null || l === void 0 || l.call(i);
            }));
        }) : It;
    }
    const xr = !1;
    function ke(t) {
        try {
            return t();
        } catch  {}
    }
    const fn = ke(()=>globalThis) || ke(()=>window) || ke(()=>self) || ke(()=>global) || ke(function() {
        return ke.constructor("return this")();
    }), An = "4.2.5", li = new Map;
    function Rr(t) {
        const e = li.get(t) || 1;
        return li.set(t, e + 1), `${t}:${e}:${Math.random().toString(36).slice(2)}`;
    }
    function Ka(t, e = 0) {
        const n = Rr("stringifyForDisplay");
        return JSON.stringify(t, (i, r)=>r === void 0 ? n : r, e).split(JSON.stringify(n)).join("<undefined>");
    }
    const ui = "Invariant Violation";
    class xn extends Error {
        constructor(e = ui){
            super(e), this.name = ui, Object.setPrototypeOf(this, xn.prototype);
        }
    }
    const Pr = [
        "debug",
        "log",
        "warn",
        "error",
        "silent"
    ];
    let Za = Pr.indexOf("silent");
    function T(t, ...e) {
        if (!t) throw ee(...e);
    }
    function At(t) {
        return function(e, ...n) {
            if (Pr.indexOf(t) >= Za) {
                const i = console[t] || console.log;
                if (typeof e == "number") {
                    const r = e;
                    e = Mr(r), e || (e = Vr(r, n), n = []);
                }
                i(e, ...n);
            }
        };
    }
    T.debug = At("debug");
    T.log = At("log");
    T.warn = At("warn");
    T.error = At("error");
    function ee(t, ...e) {
        return new xn(Mr(t, e) || Vr(t, e));
    }
    const di = Symbol.for("ApolloErrorMessageHandler_" + An);
    function hn(t) {
        if (typeof t == "string") return t;
        try {
            return Ka(t, 2).slice(0, 1e3);
        } catch  {
            return "<non-serializable>";
        }
    }
    function Mr(t, e = []) {
        if (t) return fn[di] && fn[di](t, e.map(hn));
    }
    function Vr(t, e = []) {
        if (t) return typeof t == "string" ? e.reduce((n, i)=>n.replace(/%[sdfo]/, hn(i)), t) : `An error occurred! For more details, see the full error text at https://go.apollo.dev/c/err#${encodeURIComponent(JSON.stringify({
            version: An,
            message: t,
            args: e.map(hn)
        }))}`;
    }
    function Ue(t, e, n, i) {
        if (n.kind === C.INT || n.kind === C.FLOAT) t[e.value] = Number(n.value);
        else if (n.kind === C.BOOLEAN || n.kind === C.STRING) t[e.value] = n.value;
        else if (n.kind === C.OBJECT) {
            const r = {};
            n.fields.map((s)=>Ue(r, s.name, s.value, i)), t[e.value] = r;
        } else if (n.kind === C.VARIABLE) {
            const r = (i || {})[n.name.value];
            t[e.value] = r;
        } else if (n.kind === C.LIST) t[e.value] = n.values.map((r)=>{
            const s = {};
            return Ue(s, e, r, i), s[e.value];
        });
        else if (n.kind === C.ENUM) t[e.value] = n.value;
        else if (n.kind === C.NULL) t[e.value] = null;
        else throw ee(19, e.value, n.kind);
    }
    function Rn(t, e) {
        if (t.arguments && t.arguments.length) {
            const n = {};
            return t.arguments.forEach(({ name: i, value: r })=>Ue(n, i, r, e)), n;
        }
        return null;
    }
    const eo = Symbol.for("apollo.cacheSize"), pe = {
        ...fn[eo]
    };
    function Qe(t, e) {
        return t.definitions.find((n)=>n.kind === "OperationDefinition" && !!n.name)?.name.value ?? e;
    }
    const to = ()=>Object.create(null), { forEach: no, slice: fi } = Array.prototype, { hasOwnProperty: io } = Object.prototype;
    class ue {
        constructor(e = !0, n = to){
            this.weakness = e, this.makeData = n;
        }
        lookup() {
            return this.lookupArray(arguments);
        }
        lookupArray(e) {
            let n = this;
            return no.call(e, (i)=>n = n.getChildTrie(i)), io.call(n, "data") ? n.data : n.data = this.makeData(fi.call(e));
        }
        peek() {
            return this.peekArray(arguments);
        }
        peekArray(e) {
            let n = this;
            for(let i = 0, r = e.length; n && i < r; ++i){
                const s = n.mapFor(e[i], !1);
                n = s && s.get(e[i]);
            }
            return n && n.data;
        }
        remove() {
            return this.removeArray(arguments);
        }
        removeArray(e) {
            let n;
            if (e.length) {
                const i = e[0], r = this.mapFor(i, !1), s = r && r.get(i);
                s && (n = s.removeArray(fi.call(e, 1)), !s.data && !s.weak && !(s.strong && s.strong.size) && r.delete(i));
            } else n = this.data, delete this.data;
            return n;
        }
        getChildTrie(e) {
            const n = this.mapFor(e, !0);
            let i = n.get(e);
            return i || n.set(e, i = new ue(this.weakness, this.makeData)), i;
        }
        mapFor(e, n) {
            return this.weakness && ro(e) ? this.weak || (n ? this.weak = new WeakMap : void 0) : this.strong || (n ? this.strong = new Map : void 0);
        }
    }
    function ro(t) {
        switch(typeof t){
            case "object":
                if (t === null) break;
            case "function":
                return !0;
        }
        return !1;
    }
    function so() {}
    class mn {
        constructor(e = 1 / 0, n = so){
            this.max = e, this.dispose = n, this.map = new Map, this.newest = null, this.oldest = null;
        }
        has(e) {
            return this.map.has(e);
        }
        get(e) {
            const n = this.getNode(e);
            return n && n.value;
        }
        get size() {
            return this.map.size;
        }
        getNode(e) {
            const n = this.map.get(e);
            if (n && n !== this.newest) {
                const { older: i, newer: r } = n;
                r && (r.older = i), i && (i.newer = r), n.older = this.newest, n.older.newer = n, n.newer = null, this.newest = n, n === this.oldest && (this.oldest = r);
            }
            return n;
        }
        set(e, n) {
            let i = this.getNode(e);
            return i ? i.value = n : (i = {
                key: e,
                value: n,
                newer: null,
                older: this.newest
            }, this.newest && (this.newest.newer = i), this.newest = i, this.oldest = this.oldest || i, this.map.set(e, i), i.value);
        }
        clean() {
            for(; this.oldest && this.map.size > this.max;)this.delete(this.oldest.key);
        }
        delete(e) {
            const n = this.map.get(e);
            return n ? (n === this.newest && (this.newest = n.older), n === this.oldest && (this.oldest = n.newer), n.newer && (n.newer.older = n.older), n.older && (n.older.newer = n.newer), this.map.delete(e), this.dispose(n.value, e), !0) : !1;
        }
    }
    function pn() {}
    const ao = pn, oo = typeof WeakRef < "u" ? WeakRef : function(t) {
        return {
            deref: ()=>t
        };
    }, co = typeof WeakMap < "u" ? WeakMap : Map, lo = typeof FinalizationRegistry < "u" ? FinalizationRegistry : function() {
        return {
            register: pn,
            unregister: pn
        };
    }, uo = 10024;
    class Ot {
        constructor(e = 1 / 0, n = ao){
            this.max = e, this.dispose = n, this.map = new co, this.newest = null, this.oldest = null, this.unfinalizedNodes = new Set, this.finalizationScheduled = !1, this.size = 0, this.finalize = ()=>{
                const i = this.unfinalizedNodes.values();
                for(let r = 0; r < uo; r++){
                    const s = i.next().value;
                    if (!s) break;
                    this.unfinalizedNodes.delete(s);
                    const a = s.key;
                    delete s.key, s.keyRef = new oo(a), this.registry.register(a, s, s);
                }
                this.unfinalizedNodes.size > 0 ? queueMicrotask(this.finalize) : this.finalizationScheduled = !1;
            }, this.registry = new lo(this.deleteNode.bind(this));
        }
        has(e) {
            return this.map.has(e);
        }
        get(e) {
            const n = this.getNode(e);
            return n && n.value;
        }
        getNode(e) {
            const n = this.map.get(e);
            if (n && n !== this.newest) {
                const { older: i, newer: r } = n;
                r && (r.older = i), i && (i.newer = r), n.older = this.newest, n.older.newer = n, n.newer = null, this.newest = n, n === this.oldest && (this.oldest = r);
            }
            return n;
        }
        set(e, n) {
            let i = this.getNode(e);
            return i ? i.value = n : (i = {
                key: e,
                value: n,
                newer: null,
                older: this.newest
            }, this.newest && (this.newest.newer = i), this.newest = i, this.oldest = this.oldest || i, this.scheduleFinalization(i), this.map.set(e, i), this.size++, i.value);
        }
        clean() {
            for(; this.oldest && this.size > this.max;)this.deleteNode(this.oldest);
        }
        deleteNode(e) {
            e === this.newest && (this.newest = e.older), e === this.oldest && (this.oldest = e.newer), e.newer && (e.newer.older = e.older), e.older && (e.older.newer = e.newer), this.size--;
            const n = e.key || e.keyRef && e.keyRef.deref();
            this.dispose(e.value, n), e.keyRef ? this.registry.unregister(e) : this.unfinalizedNodes.delete(e), n && this.map.delete(n);
        }
        delete(e) {
            const n = this.map.get(e);
            return n ? (this.deleteNode(n), !0) : !1;
        }
        scheduleFinalization(e) {
            this.unfinalizedNodes.add(e), this.finalizationScheduled || (this.finalizationScheduled = !0, queueMicrotask(this.finalize));
        }
    }
    const Yt = new WeakSet;
    function qr(t) {
        t.size <= (t.max || -1) || Yt.has(t) || (Yt.add(t), setTimeout(()=>{
            t.clean(), Yt.delete(t);
        }, 100));
    }
    const Pn = function(t, e) {
        const n = new Ot(t, e);
        return n.set = function(i, r) {
            const s = Ot.prototype.set.call(this, i, r);
            return qr(this), s;
        }, n;
    }, fo = function(t, e) {
        const n = new mn(t, e);
        return n.set = function(i, r) {
            const s = mn.prototype.set.call(this, i, r);
            return qr(this), s;
        }, n;
    };
    function Br(t, { max: e, makeCacheKey: n = (i)=>i }) {
        const i = new ue(!0), r = new Pn(e);
        return (...s)=>{
            const a = i.lookupArray(n(s)), o = r.get(a);
            if (o) {
                if (o.error) throw o.error;
                return o.result;
            }
            const c = r.set(a, {});
            try {
                return c.result = t(...s);
            } catch (l) {
                throw c.error = l, l;
            }
        };
    }
    const be = Br((t, e)=>{
        T(t && t.kind === "Document", 1);
        const n = t.definitions.filter((i)=>i.kind === "OperationDefinition");
        e && T(n.length == 1 && n[0].operation === e, 4, e, e, n[0].operation), ce(t, {
            Field (i, r, s, a) {
                if (i.alias && (i.alias.value === "__typename" || i.alias.value.startsWith("__ac_")) && i.alias.value !== i.name.value) {
                    let o = t, c = [];
                    for (const l of a)o = o[l], o.kind === C.FIELD && c.push(o.alias?.value || o.name.value);
                    throw c.splice(-1, 1, i.name.value), ee(5, i.alias.value, c.join("."), n[0].operation, Qe(t, "(anonymous)"));
                }
            }
        });
    }, {
        max: pe.checkDocument || 2e3
    });
    function ho(t) {
        return t.length === 0 ? De : new A((e)=>{
            const { length: n } = t, i = new Array(n), r = new Map;
            t.forEach((c, l)=>{
                r.has(c) || r.set(c, new Set), r.get(c).add(l);
            });
            let s = r.size, a = r.size, o;
            r.forEach((c, l)=>{
                let u = !1;
                const f = l.subscribe({
                    next: (d)=>{
                        c.forEach((h)=>i[h] = d), u || (u = !0, a--), a || (o ||= new Set(t.filter((h)=>h.dirty)), o.delete(l), o.size || (e.next(i.slice()), o = void 0));
                    },
                    complete: ()=>{
                        s--, s || e.complete();
                    },
                    error: e.error.bind(e)
                });
                e.add(f);
            });
        });
    }
    function J(...t) {
        const e = {};
        return t.forEach((n)=>{
            n && Reflect.ownKeys(n).forEach((i)=>{
                const r = n[i];
                r !== void 0 && (e[i] = r);
            });
        }), e;
    }
    function dt(t = []) {
        const e = {};
        return t.forEach((n)=>{
            e[n.name.value] = n;
        }), e;
    }
    function H(t) {
        return t !== null && typeof t == "object";
    }
    const { hasOwnProperty: mo } = Object.prototype, po = function(t, e, n) {
        return this.merge(t[n], e[n]);
    }, hi = (t)=>isNaN(+t) ? {} : [];
    class $e {
        options;
        reconciler;
        constructor(e = {}){
            this.options = e, this.reconciler = e.reconciler || po;
        }
        merge(e, n, i = {}) {
            const r = i.atPath;
            if (r?.length) {
                const [s, ...a] = r;
                e === void 0 && (e = hi(s));
                let o = e[s];
                o === void 0 && a.length && (o = hi(a[0]));
                const c = this.merge(o, n, {
                    ...i,
                    atPath: a
                });
                return o !== c && (e = this.shallowCopyForMerge(e), e[s] = c), e;
            }
            return Array.isArray(e) && Array.isArray(n) && this.options.arrayMerge === "truncate" && e.length > n.length && (e = e.slice(0, n.length), this.pastCopies.add(e)), H(n) && H(e) ? (Object.keys(n).forEach((s)=>{
                if (mo.call(e, s)) {
                    const a = e[s];
                    if (n[s] !== a) {
                        const o = this.reconciler(e, n, s);
                        o !== a && (e = this.shallowCopyForMerge(e), e[s] = o);
                    }
                } else e = this.shallowCopyForMerge(e), e[s] = n[s];
            }), e) : n;
        }
        isObject = H;
        pastCopies = new Set;
        shallowCopyForMerge(e) {
            return H(e) && (this.pastCopies.has(e) || (Array.isArray(e) ? e = e.slice(0) : e = {
                __proto__: Object.getPrototypeOf(e),
                ...e
            }, this.pastCopies.add(e))), e;
        }
    }
    function Mn(t) {
        const e = {}, n = t && t.variableDefinitions;
        return n && n.length && n.forEach((i)=>{
            i.defaultValue && Ue(e, i.variable.name, i.defaultValue);
        }), e;
    }
    function xt(t, e) {
        switch(t.kind){
            case "InlineFragment":
                return t;
            case "FragmentSpread":
                {
                    const n = t.name.value;
                    if (typeof e == "function") return e(n);
                    const i = e && e[n];
                    return T(i, 9, n), i || null;
                }
            default:
                return null;
        }
    }
    function yo(t, e) {
        let n = e;
        const i = [];
        return t.definitions.forEach((s)=>{
            if (s.kind === "OperationDefinition") throw ee(10, s.operation, s.name ? ` named '${s.name.value}'` : "");
            s.kind === "FragmentDefinition" && i.push(s);
        }), typeof n > "u" && (T(i.length === 1, 11, i.length), n = i[0].name.value), {
            ...t,
            definitions: [
                {
                    kind: "OperationDefinition",
                    operation: "query",
                    selectionSet: {
                        kind: "SelectionSet",
                        selections: [
                            {
                                kind: "FragmentSpread",
                                name: {
                                    kind: "Name",
                                    value: n
                                }
                            }
                        ]
                    }
                },
                ...t.definitions
            ]
        };
    }
    function ko(t) {
        T(t.kind === "Document", 6), T(t.definitions.length <= 1, 7);
        const e = t.definitions[0];
        return T(e.kind === "FragmentDefinition", 8), e;
    }
    function ft(t) {
        return t.definitions.filter((e)=>e.kind === "FragmentDefinition");
    }
    function Vn(t) {
        be(t);
        let e;
        for (let n of t.definitions){
            if (n.kind === "OperationDefinition") return n;
            n.kind === "FragmentDefinition" && !e && (e = n);
        }
        if (e) return e;
        throw ee(12);
    }
    function ye(t) {
        return be(t), t.definitions.filter((e)=>e.kind === "OperationDefinition")[0];
    }
    function vo(t) {
        const e = ye(t);
        return T(e && e.operation === "query", 13), e;
    }
    const me = Object.assign(function(e) {
        return JSON.stringify(e, go);
    }, {
        reset () {
            Ze = new fo(pe.canonicalStringify || 1e3);
        }
    });
    let Ze;
    me.reset();
    function go(t, e) {
        if (e && typeof e == "object") {
            const n = Object.getPrototypeOf(e);
            if (n === Object.prototype || n === null) {
                const i = Object.keys(e);
                if (i.every(bo)) return e;
                const r = JSON.stringify(i);
                let s = Ze.get(r);
                if (!s) {
                    i.sort();
                    const o = JSON.stringify(i);
                    s = Ze.get(o) || i, Ze.set(r, s), Ze.set(o, s);
                }
                const a = Object.create(n);
                return s.forEach((o)=>{
                    a[o] = e[o];
                }), a;
            }
        }
        return e;
    }
    function bo(t, e, n) {
        return e === 0 || n[e - 1] <= t;
    }
    const So = [
        "connection",
        "include",
        "skip",
        "client",
        "rest",
        "export",
        "nonreactive",
        "stream"
    ];
    let Je = me;
    const jr = Object.assign(function(t, e, n) {
        if (e && n && n.connection && n.connection.key) {
            if (n.connection.filter && n.connection.filter.length > 0) {
                const r = n.connection.filter ? n.connection.filter : [];
                r.sort();
                const s = {};
                r.forEach((o)=>{
                    s[o] = e[o];
                });
                const a = Je(s);
                if (a !== "{}") return `${n.connection.key}(${a})`;
            }
            return n.connection.key;
        }
        let i = t;
        if (e) {
            const r = Je(e);
            r !== "{}" && (i += `(${r})`);
        }
        return n && Object.keys(n).forEach((r)=>{
            So.indexOf(r) === -1 && (n[r] && Object.keys(n[r]).length ? i += `@${r}(${Je(n[r])})` : i += `@${r}`);
        }), i;
    }, {
        setStringify (t) {
            const e = Je;
            return Je = t, e;
        }
    });
    function Me(t) {
        return !!t.errors?.length;
    }
    function Ve(t, e, n) {
        const i = new Set(t), r = i.size;
        return ce(e, {
            Directive (s) {
                if (i.delete(s.name.value) && (!n || !i.size)) return Cn;
            }
        }), n ? !i.size : i.size < r;
    }
    function wo(t) {
        let e = !1;
        return ce(t, {
            Directive: {
                enter (n) {
                    if (n.name.value === "client" && n.arguments && (e = n.arguments.some((i)=>i.name.value === "always" && i.value.kind === "BooleanValue" && i.value.value === !0), e)) return Cn;
                }
            }
        }), e;
    }
    const q = Array.isArray;
    function No(t) {
        return H(t) && t.kind === "Document" && Array.isArray(t.definitions);
    }
    function ht(t) {
        return t.kind === "Field";
    }
    function qn(t) {
        return Array.isArray(t) && t.length > 0;
    }
    function je(t) {
        return {
            __ref: String(t)
        };
    }
    function Eo(t) {
        let e = t[0] || {};
        const n = t.length;
        if (n > 1) {
            const i = new $e;
            for(let r = 1; r < n; ++r)e = i.merge(e, t[r]);
        }
        return e;
    }
    function Nt(t, e) {
        return J(t, e, e.variables && {
            variables: J({
                ...t && t.variables,
                ...e.variables
            })
        });
    }
    function mi(t) {
        return t.catch(()=>{}), t;
    }
    function Fo(t, e) {
        be(e);
        const n = pi(""), i = pi(""), r = (m)=>{
            for(let k = 0, v; k < m.length && (v = m[k]); ++k)if (!q(v)) {
                if (v.kind === C.OPERATION_DEFINITION) return n(v.name && v.name.value);
                if (v.kind === C.FRAGMENT_DEFINITION) return i(v.name.value);
            }
            return T.error(14), null;
        };
        let s = 0;
        for(let m = e.definitions.length - 1; m >= 0; --m)e.definitions[m].kind === C.OPERATION_DEFINITION && ++s;
        const a = To(t), o = (m)=>qn(m) && m.map(a).some((k)=>k && k.remove), c = new Map;
        let l = !1;
        const u = {
            enter (m) {
                if (o(m.directives)) return l = !0, null;
            }
        }, f = ce(e, {
            Field: u,
            InlineFragment: u,
            VariableDefinition: {
                enter () {
                    return !1;
                }
            },
            Variable: {
                enter (m, k, v, g, S) {
                    const w = r(S);
                    w && w.variables.add(m.name.value);
                }
            },
            FragmentSpread: {
                enter (m, k, v, g, S) {
                    if (o(m.directives)) return l = !0, null;
                    const w = r(S);
                    w && w.fragmentSpreads.add(m.name.value);
                }
            },
            FragmentDefinition: {
                enter (m, k, v, g) {
                    c.set(JSON.stringify(g), m);
                },
                leave (m, k, v, g) {
                    const S = c.get(JSON.stringify(g));
                    if (m === S) return m;
                    if (s > 0 && m.selectionSet.selections.every((w)=>w.kind === C.FIELD && w.name.value === "__typename")) return i(m.name.value).removed = !0, l = !0, null;
                }
            },
            Directive: {
                leave (m) {
                    if (a(m)) return l = !0, null;
                }
            }
        });
        if (!l) return e;
        const d = (m)=>(m.transitiveVars || (m.transitiveVars = new Set(m.variables), m.removed || m.fragmentSpreads.forEach((k)=>{
                d(i(k)).transitiveVars.forEach((v)=>{
                    m.transitiveVars.add(v);
                });
            })), m), h = new Set;
        f.definitions.forEach((m)=>{
            m.kind === C.OPERATION_DEFINITION ? d(n(m.name && m.name.value)).fragmentSpreads.forEach((k)=>{
                h.add(k);
            }) : m.kind === C.FRAGMENT_DEFINITION && s === 0 && !i(m.name.value).removed && h.add(m.name.value);
        }), h.forEach((m)=>{
            d(i(m)).fragmentSpreads.forEach((k)=>{
                h.add(k);
            });
        });
        const p = (m)=>!!(!h.has(m) || i(m).removed), y = {
            enter (m) {
                if (p(m.name.value)) return null;
            }
        };
        return Oo(ce(f, {
            FragmentSpread: y,
            FragmentDefinition: y,
            OperationDefinition: {
                leave (m) {
                    if (m.variableDefinitions) {
                        const k = d(n(m.name && m.name.value)).transitiveVars;
                        if (k.size < m.variableDefinitions.length) return {
                            ...m,
                            variableDefinitions: m.variableDefinitions.filter((v)=>k.has(v.variable.name.value))
                        };
                    }
                }
            }
        }));
    }
    function pi(t) {
        const e = new Map;
        return function(i = t) {
            let r = e.get(i);
            return r || e.set(i, r = {
                variables: new Set,
                fragmentSpreads: new Set
            }), r;
        };
    }
    function To(t) {
        const e = new Map, n = new Map;
        return t.forEach((i)=>{
            i && (i.name ? e.set(i.name, i) : i.test && n.set(i.test, i));
        }), (i)=>{
            let r = e.get(i.name.value);
            return !r && n.size && n.forEach((s, a)=>{
                a(i) && (r = s);
            }), r;
        };
    }
    function Lr(t, e) {
        return !t || t.selectionSet.selections.every((n)=>n.kind === C.FRAGMENT_SPREAD && Lr(e[n.name.value], e));
    }
    function Oo(t) {
        return Lr(ye(t) || ko(t), dt(ft(t))) ? null : t;
    }
    function Co(t) {
        return ce(t, {
            FragmentSpread (e) {
                if (!e.directives?.some(({ name: n })=>n.value === "unmask")) return null;
            }
        });
    }
    function Ye(t) {
        return t.alias ? t.alias.value : t.name.value;
    }
    function Rt({ directives: t }, e) {
        return !t || !t.length ? !0 : Io(t).every(({ directive: n, ifArgument: i })=>{
            let r = !1;
            return i.value.kind === "Variable" ? (r = e && e[i.value.name.value], T(r !== void 0, 15, n.name.value)) : r = i.value.value, n.name.value === "skip" ? !r : r;
        });
    }
    function Do({ name: { value: t } }) {
        return t === "skip" || t === "include";
    }
    function Io(t) {
        const e = [];
        return t && t.length && t.forEach((n)=>{
            if (!Do(n)) return;
            const i = n.arguments, r = n.name.value;
            T(i && i.length === 1, 16, r);
            const s = i[0];
            T(s.name && s.name.value === "if", 17, r);
            const a = s.value;
            T(a && (a.kind === "Variable" || a.kind === "BooleanValue"), 18, r), e.push({
                directive: n,
                ifArgument: s
            });
        }), e;
    }
    function _o(t, e) {
        let n = null;
        t.directives && (n = {}, t.directives.forEach((r)=>{
            n[r.name.value] = {}, r.arguments && r.arguments.forEach(({ name: s, value: a })=>Ue(n[r.name.value], s, a, e));
        }));
        let i = null;
        return t.arguments && t.arguments.length && (i = {}, t.arguments.forEach(({ name: r, value: s })=>Ue(i, r, s, e))), jr(t.name.value, i, n);
    }
    function et(t) {
        const e = {
            data: t.data
        };
        return t.error && (e.error = t.error), e;
    }
    function yn(t, e = ()=>{}) {
        return (n)=>new A((i)=>{
                let r = e();
                return n.subscribe({
                    next (s) {
                        let a;
                        try {
                            a = t(s, r);
                        } catch (o) {
                            i.error(o);
                        }
                        a !== void 0 && i.next(a);
                    },
                    error (s) {
                        i.error(s);
                    },
                    complete () {
                        i.complete();
                    }
                });
            });
    }
    const { toString: yi, hasOwnProperty: Ao } = Object.prototype, ki = Function.prototype.toString, kn = new Map;
    function P(t, e) {
        try {
            return vn(t, e);
        } finally{
            kn.clear();
        }
    }
    function vn(t, e) {
        if (t === e) return !0;
        const n = yi.call(t), i = yi.call(e);
        if (n !== i) return !1;
        switch(n){
            case "[object Array]":
                if (t.length !== e.length) return !1;
            case "[object Object]":
                {
                    if (gi(t, e)) return !0;
                    const r = vi(t), s = vi(e), a = r.length;
                    if (a !== s.length) return !1;
                    for(let o = 0; o < a; ++o)if (!Ao.call(e, r[o])) return !1;
                    for(let o = 0; o < a; ++o){
                        const c = r[o];
                        if (!vn(t[c], e[c])) return !1;
                    }
                    return !0;
                }
            case "[object Error]":
                return t.name === e.name && t.message === e.message;
            case "[object Number]":
                if (t !== t) return e !== e;
            case "[object Boolean]":
            case "[object Date]":
                return +t == +e;
            case "[object RegExp]":
            case "[object String]":
                return t == `${e}`;
            case "[object Map]":
            case "[object Set]":
                {
                    if (t.size !== e.size) return !1;
                    if (gi(t, e)) return !0;
                    const r = t.entries(), s = n === "[object Map]";
                    for(;;){
                        const a = r.next();
                        if (a.done) break;
                        const [o, c] = a.value;
                        if (!e.has(o) || s && !vn(c, e.get(o))) return !1;
                    }
                    return !0;
                }
            case "[object Uint16Array]":
            case "[object Uint8Array]":
            case "[object Uint32Array]":
            case "[object Int32Array]":
            case "[object Int8Array]":
            case "[object Int16Array]":
            case "[object ArrayBuffer]":
                t = new Uint8Array(t), e = new Uint8Array(e);
            case "[object DataView]":
                {
                    let r = t.byteLength;
                    if (r === e.byteLength) for(; r-- && t[r] === e[r];);
                    return r === -1;
                }
            case "[object AsyncFunction]":
            case "[object GeneratorFunction]":
            case "[object AsyncGeneratorFunction]":
            case "[object Function]":
                {
                    const r = ki.call(t);
                    return r !== ki.call(e) ? !1 : !Po(r, Ro);
                }
        }
        return !1;
    }
    function vi(t) {
        return Object.keys(t).filter(xo, t);
    }
    function xo(t) {
        return this[t] !== void 0;
    }
    const Ro = "{ [native code] }";
    function Po(t, e) {
        const n = t.length - e.length;
        return n >= 0 && t.indexOf(e, n) === n;
    }
    function gi(t, e) {
        let n = kn.get(t);
        if (n) {
            if (n.has(e)) return !0;
        } else kn.set(t, n = new Set);
        return n.add(e), !1;
    }
    function Ur(t, { data: e, ...n }, { data: i, ...r }, s) {
        return P(n, r) && Et(Vn(t).selectionSet, e, i, {
            fragmentMap: dt(ft(t)),
            variables: s
        });
    }
    function Et(t, e, n, i) {
        if (e === n) return !0;
        const r = new Set;
        return t.selections.every((s)=>{
            if (r.has(s) || (r.add(s), !Rt(s, i.variables)) || bi(s)) return !0;
            if (ht(s)) {
                const a = Ye(s), o = e && e[a], c = n && n[a], l = s.selectionSet;
                if (!l) return P(o, c);
                const u = Array.isArray(o), f = Array.isArray(c);
                if (u !== f) return !1;
                if (u && f) {
                    const d = o.length;
                    if (c.length !== d) return !1;
                    for(let h = 0; h < d; ++h)if (!Et(l, o[h], c[h], i)) return !1;
                    return !0;
                }
                return Et(l, o, c, i);
            } else {
                const a = xt(s, i.fragmentMap);
                if (a) return bi(a) ? !0 : Et(a.selectionSet, e, n, i);
            }
        });
    }
    function bi(t) {
        return !!t.directives && t.directives.some(Mo);
    }
    function Mo(t) {
        return t.name.value === "nonreactive";
    }
    function Vo(t, e) {
        let n, i;
        function r(s) {
            return s !== n && (n = s, i = e(n)), i;
        }
        return Object.assign(t.pipe(_(r), _n({
            bufferSize: 1,
            refCount: !0
        })), {
            getCurrentResult: ()=>r(t.getCurrentResult())
        });
    }
    const qo = Br(function(e, n, i) {
        return Vo(e, i);
    }, {
        max: 1,
        makeCacheKey: (t)=>t.slice(0, 2)
    }), Qr = Symbol.for("apollo.result.extensions"), Se = Symbol.for("apollo.result.streamInfo"), Bo = Symbol.for("apollo.observableQuery.variablesUnknown");
    let U = null;
    const Si = {};
    let jo = 1;
    const Lo = ()=>class {
            constructor(){
                this.id = [
                    "slot",
                    jo++,
                    Date.now(),
                    Math.random().toString(36).slice(2)
                ].join(":");
            }
            hasValue() {
                for(let e = U; e; e = e.parent)if (this.id in e.slots) {
                    const n = e.slots[this.id];
                    if (n === Si) break;
                    return e !== U && (U.slots[this.id] = n), !0;
                }
                return U && (U.slots[this.id] = Si), !1;
            }
            getValue() {
                if (this.hasValue()) return U.slots[this.id];
            }
            withValue(e, n, i, r) {
                const s = {
                    __proto__: null,
                    [this.id]: e
                }, a = U;
                U = {
                    parent: a,
                    slots: s
                };
                try {
                    return n.apply(r, i);
                } finally{
                    U = a;
                }
            }
            static bind(e) {
                const n = U;
                return function() {
                    const i = U;
                    try {
                        return U = n, e.apply(this, arguments);
                    } finally{
                        U = i;
                    }
                };
            }
            static noContext(e, n, i) {
                if (U) {
                    const r = U;
                    try {
                        return U = null, e.apply(i, n);
                    } finally{
                        U = r;
                    }
                } else return e.apply(i, n);
            }
        };
    function wi(t) {
        try {
            return t();
        } catch  {}
    }
    const Gt = "@wry/context:Slot", Uo = wi(()=>globalThis) || wi(()=>global) || Object.create(null), Ni = Uo, Pt = Ni[Gt] || Array[Gt] || function(t) {
        try {
            Object.defineProperty(Ni, Gt, {
                value: t,
                enumerable: !1,
                writable: !1,
                configurable: !0
            });
        } finally{
            return t;
        }
    }(Lo()), { bind: nu, noContext: iu } = Pt, Mt = new Pt, { hasOwnProperty: Qo } = Object.prototype, Bn = Array.from || function(t) {
        const e = [];
        return t.forEach((n)=>e.push(n)), e;
    };
    function jn(t) {
        const { unsubscribe: e } = t;
        typeof e == "function" && (t.unsubscribe = void 0, e());
    }
    const ot = [], $o = 100;
    function ze(t, e) {
        if (!t) throw new Error(e || "assertion failure");
    }
    function $r(t, e) {
        const n = t.length;
        return n > 0 && n === e.length && t[n - 1] === e[n - 1];
    }
    function zr(t) {
        switch(t.length){
            case 0:
                throw new Error("unknown value");
            case 1:
                return t[0];
            case 2:
                throw t[1];
        }
    }
    function Wr(t) {
        return t.slice(0);
    }
    class Vt {
        constructor(e){
            this.fn = e, this.parents = new Set, this.childValues = new Map, this.dirtyChildren = null, this.dirty = !0, this.recomputing = !1, this.value = [], this.deps = null, ++Vt.count;
        }
        peek() {
            if (this.value.length === 1 && !we(this)) return Ei(this), this.value[0];
        }
        recompute(e) {
            return ze(!this.recomputing, "already recomputing"), Ei(this), we(this) ? zo(this, e) : zr(this.value);
        }
        setDirty() {
            this.dirty || (this.dirty = !0, Hr(this), jn(this));
        }
        dispose() {
            this.setDirty(), Kr(this), Ln(this, (e, n)=>{
                e.setDirty(), Zr(e, this);
            });
        }
        forget() {
            this.dispose();
        }
        dependOn(e) {
            e.add(this), this.deps || (this.deps = ot.pop() || new Set), this.deps.add(e);
        }
        forgetDeps() {
            this.deps && (Bn(this.deps).forEach((e)=>e.delete(this)), this.deps.clear(), ot.push(this.deps), this.deps = null);
        }
    }
    Vt.count = 0;
    function Ei(t) {
        const e = Mt.getValue();
        if (e) return t.parents.add(e), e.childValues.has(t) || e.childValues.set(t, []), we(t) ? Gr(e, t) : Jr(e, t), e;
    }
    function zo(t, e) {
        return Kr(t), Mt.withValue(t, Wo, [
            t,
            e
        ]), Yo(t, e) && Ho(t), zr(t.value);
    }
    function Wo(t, e) {
        t.recomputing = !0;
        const { normalizeResult: n } = t;
        let i;
        n && t.value.length === 1 && (i = Wr(t.value)), t.value.length = 0;
        try {
            if (t.value[0] = t.fn.apply(null, e), n && i && !$r(i, t.value)) try {
                t.value[0] = n(t.value[0], i[0]);
            } catch  {}
        } catch (r) {
            t.value[1] = r;
        }
        t.recomputing = !1;
    }
    function we(t) {
        return t.dirty || !!(t.dirtyChildren && t.dirtyChildren.size);
    }
    function Ho(t) {
        t.dirty = !1, !we(t) && Yr(t);
    }
    function Hr(t) {
        Ln(t, Gr);
    }
    function Yr(t) {
        Ln(t, Jr);
    }
    function Ln(t, e) {
        const n = t.parents.size;
        if (n) {
            const i = Bn(t.parents);
            for(let r = 0; r < n; ++r)e(i[r], t);
        }
    }
    function Gr(t, e) {
        ze(t.childValues.has(e)), ze(we(e));
        const n = !we(t);
        if (!t.dirtyChildren) t.dirtyChildren = ot.pop() || new Set;
        else if (t.dirtyChildren.has(e)) return;
        t.dirtyChildren.add(e), n && Hr(t);
    }
    function Jr(t, e) {
        ze(t.childValues.has(e)), ze(!we(e));
        const n = t.childValues.get(e);
        n.length === 0 ? t.childValues.set(e, Wr(e.value)) : $r(n, e.value) || t.setDirty(), Xr(t, e), !we(t) && Yr(t);
    }
    function Xr(t, e) {
        const n = t.dirtyChildren;
        n && (n.delete(e), n.size === 0 && (ot.length < $o && ot.push(n), t.dirtyChildren = null));
    }
    function Kr(t) {
        t.childValues.size > 0 && t.childValues.forEach((e, n)=>{
            Zr(t, n);
        }), t.forgetDeps(), ze(t.dirtyChildren === null);
    }
    function Zr(t, e) {
        e.parents.delete(t), t.childValues.delete(e), Xr(t, e);
    }
    function Yo(t, e) {
        if (typeof t.subscribe == "function") try {
            jn(t), t.unsubscribe = t.subscribe.apply(null, e);
        } catch  {
            return t.setDirty(), !1;
        }
        return !0;
    }
    const Go = {
        setDirty: !0,
        dispose: !0,
        forget: !0
    };
    function es(t) {
        const e = new Map;
        function n(i) {
            const r = Mt.getValue();
            if (r) {
                let s = e.get(i);
                s || e.set(i, s = new Set), r.dependOn(s);
            }
        }
        return n.dirty = function(r, s) {
            const a = e.get(r);
            if (a) {
                const o = s && Qo.call(Go, s) ? s : "setDirty";
                Bn(a).forEach((c)=>c[o]()), e.delete(r), jn(a);
            }
        }, n;
    }
    let Fi;
    function ts(...t) {
        return (Fi || (Fi = new ue(typeof WeakMap == "function"))).lookupArray(t);
    }
    const Jt = new Set;
    function ct(t, { max: e = Math.pow(2, 16), keyArgs: n, makeCacheKey: i = ts, normalizeResult: r, subscribe: s, cache: a = mn } = Object.create(null)) {
        const o = typeof a == "function" ? new a(e, (d)=>d.dispose()) : a, c = function() {
            const d = i.apply(null, n ? n.apply(null, arguments) : arguments);
            if (d === void 0) return t.apply(null, arguments);
            let h = o.get(d);
            h || (o.set(d, h = new Vt(t)), h.normalizeResult = r, h.subscribe = s, h.forget = ()=>o.delete(d));
            const p = h.recompute(Array.prototype.slice.call(arguments));
            return o.set(d, h), Jt.add(o), Mt.hasValue() || (Jt.forEach((y)=>y.clean()), Jt.clear()), p;
        };
        Object.defineProperty(c, "size", {
            get: ()=>o.size,
            configurable: !1,
            enumerable: !1
        }), Object.freeze(c.options = {
            max: e,
            keyArgs: n,
            makeCacheKey: i,
            normalizeResult: r,
            subscribe: s,
            cache: o
        });
        function l(d) {
            const h = d && o.get(d);
            h && h.setDirty();
        }
        c.dirtyKey = l, c.dirty = function() {
            l(i.apply(null, arguments));
        };
        function u(d) {
            const h = d && o.get(d);
            if (h) return h.peek();
        }
        c.peekKey = u, c.peek = function() {
            return u(i.apply(null, arguments));
        };
        function f(d) {
            return d ? o.delete(d) : !1;
        }
        return c.forgetKey = f, c.forget = function() {
            return f(i.apply(null, arguments));
        }, c.makeCacheKey = i, c.getKey = n ? function() {
            return i.apply(null, n.apply(null, arguments));
        } : i, Object.freeze(c);
    }
    function Jo(...t) {
        return ts.bind(null, ...t);
    }
    class Xo {
        isIncrementalResult(e) {
            return !1;
        }
        prepareRequest(e) {
            return T(!Ve([
                "defer",
                "stream"
            ], e.query), 67), e;
        }
        extractErrors() {}
        startRequest = void 0;
    }
    function Ko(t, { client: e }) {
        const n = {
            query: t.query,
            variables: t.variables || {},
            extensions: t.extensions || {},
            operationName: Qe(t.query),
            operationType: ye(t.query).operation
        };
        let i = {
            ...t.context
        };
        const r = (a)=>{
            typeof a == "function" ? i = {
                ...i,
                ...a(s())
            } : i = {
                ...i,
                ...a
            };
        }, s = ()=>Object.freeze({
                ...i
            });
        return Object.defineProperty(n, "setContext", {
            enumerable: !1,
            value: r
        }), Object.defineProperty(n, "getContext", {
            enumerable: !1,
            value: s
        }), Object.defineProperty(n, "client", {
            enumerable: !1,
            value: e
        }), n;
    }
    function Zo(t, e) {
        const n = {
            ...t
        }, i = new Set(Object.keys(t));
        return ce(e, {
            Variable (r, s, a) {
                a && a.kind !== "VariableDefinition" && i.delete(r.name.value);
            }
        }), i.forEach((r)=>{
            delete n[r];
        }), n;
    }
    class Q {
        static empty() {
            return new Q(()=>De);
        }
        static from(e) {
            if (e.length === 0) return Q.empty();
            const [n, ...i] = e;
            return n.concat(...i);
        }
        static split(e, n, i = new Q((r, s)=>s(r))) {
            const r = new Q((s, a)=>e(s) ? n.request(s, a) : i.request(s, a));
            return Object.assign(r, {
                left: n,
                right: i
            });
        }
        static execute(e, n, i) {
            return e.request(Ko(n, i), ()=>De);
        }
        static concat(...e) {
            return Q.from(e);
        }
        constructor(e){
            e && (this.request = e);
        }
        split(e, n, i) {
            return this.concat(Q.split(e, n, i));
        }
        concat(...e) {
            return e.length === 0 ? this : e.reduce(this.combine.bind(this), this);
        }
        combine(e, n) {
            const i = new Q((r, s)=>e.request(r, (a)=>n.request(a, s)));
            return Object.assign(i, {
                left: e,
                right: n
            });
        }
        request(e, n) {
            throw ee(65);
        }
        left;
        right;
    }
    const ec = Q.from, tc = Q.split, gn = Q.execute;
    function nc(t) {
        return t;
    }
    class fe {
        transform;
        cached;
        resultCache = new WeakSet;
        getCacheKey(e) {
            return [
                e
            ];
        }
        static identity() {
            return new fe(nc, {
                cache: !1
            });
        }
        static split(e, n, i = fe.identity()) {
            return Object.assign(new fe((r)=>(e(r) ? n : i).transformDocument(r), {
                cache: !1
            }), {
                left: n,
                right: i
            });
        }
        constructor(e, n = {}){
            this.transform = e, n.getCacheKey && (this.getCacheKey = n.getCacheKey), this.cached = n.cache !== !1, this.resetCache();
        }
        resetCache() {
            if (this.cached) {
                const e = new ue;
                this.performWork = ct(fe.prototype.performWork.bind(this), {
                    makeCacheKey: (n)=>{
                        const i = this.getCacheKey(n);
                        if (i) return T(Array.isArray(i), 20), e.lookupArray(i);
                    },
                    max: pe["documentTransform.cache"],
                    cache: Ot
                });
            }
        }
        performWork(e) {
            return be(e), this.transform(e);
        }
        transformDocument(e) {
            if (this.resultCache.has(e)) return e;
            const n = this.performWork(e);
            return this.resultCache.add(n), n;
        }
        concat(e) {
            return Object.assign(new fe((n)=>e.transformDocument(this.transformDocument(n)), {
                cache: !1
            }), {
                left: this,
                right: e
            });
        }
        left;
        right;
    }
    let Xt;
    const Ce = Object.assign((t)=>{
        let e = Xt.get(t);
        return e || (e = ca(t), Xt.set(t, e)), e;
    }, {
        reset () {
            Xt = new Pn(pe.print || 2e3);
        }
    });
    Ce.reset();
    function x(t) {
        return !!(t && typeof t == "object" && typeof t.__ref == "string");
    }
    const Ti = {
        kind: C.FIELD,
        name: {
            kind: C.NAME,
            value: "__typename"
        }
    }, ns = Object.assign(function(t) {
        return ce(t, {
            SelectionSet: {
                enter (e, n, i) {
                    if (i && i.kind === C.OPERATION_DEFINITION) return;
                    const { selections: r } = e;
                    if (!r || r.some((o)=>o.kind === C.FIELD && (o.name.value === "__typename" || o.name.value.lastIndexOf("__", 0) === 0))) return;
                    const a = i;
                    if (!(a.kind === C.FIELD && a.directives && a.directives.some((o)=>o.name.value === "export"))) return {
                        ...e,
                        selections: [
                            ...r,
                            Ti
                        ]
                    };
                }
            }
        });
    }, {
        added (t) {
            return t === Ti;
        }
    });
    function is(t, e) {
        return ye(t)?.operation === e;
    }
    function ic(t) {
        return is(t, "mutation");
    }
    function rc(t) {
        return is(t, "subscription");
    }
    function rs(t) {
        return t === 7 || t === 8;
    }
    function Ft(t) {
        return !rs(t);
    }
    class sc {
        assumeImmutableResults = !1;
        lookupFragment(e) {
            return null;
        }
        batch(e) {
            const n = typeof e.optimistic == "string" ? e.optimistic : e.optimistic === !1 ? null : void 0;
            let i;
            return this.performTransaction(()=>i = e.update(this), n), i;
        }
        recordOptimisticTransaction(e, n) {
            this.performTransaction(e, n);
        }
        transformDocument(e) {
            return e;
        }
        transformForLink(e) {
            return e;
        }
        identify(e) {}
        gc() {
            return [];
        }
        modify(e) {
            return !1;
        }
        readQuery(e, n = !!e.optimistic) {
            return this.read({
                ...e,
                rootId: e.id || "ROOT_QUERY",
                optimistic: n
            });
        }
        fragmentWatches = new ue(!0);
        watchFragment(e) {
            const { fragment: n, fragmentName: i, from: r } = e, s = this.getFragmentDoc(n, i), o = (Array.isArray(r) ? r : [
                r
            ]).map((h)=>h == null ? h : this.toCacheId(h));
            if (!Array.isArray(r)) {
                const h = this.watchSingleFragment(o[0], s, e);
                return r === null ? h : qo(h, Symbol.for("apollo.transform.individualResult"), (p)=>({
                        ...p,
                        data: p.data ?? {}
                    }));
            }
            let c;
            function l(h) {
                const p = h.reduce((y, m, k)=>(y.data.push(m.data), y.complete &&= m.complete, y.dataState = y.complete ? "complete" : "partial", m.missing && (y.missing ||= {}, y.missing[k] = m.missing), y), {
                    data: [],
                    dataState: "complete",
                    complete: !0
                });
                return P(c, p) || (c = p), c;
            }
            if (o.length === 0) return oc;
            let u = !1;
            const f = o.map((h)=>this.watchSingleFragment(h, s, e)), d = ho(f).pipe(_(l), at({
                subscribe: ()=>u = !0,
                unsubscribe: ()=>u = !1
            }), _n({
                bufferSize: 1,
                refCount: !0
            }));
            return Object.assign(d, {
                getCurrentResult: ()=>{
                    if (u && c) return c;
                    const h = f.map((p)=>p.getCurrentResult());
                    return l(h);
                }
            });
        }
        onAfterBroadcast = (e)=>e();
        watchSingleFragment(e, n, i) {
            if (e === null) return ac;
            const { optimistic: r = !0, variables: s } = i, a = [
                n,
                me({
                    id: e,
                    optimistic: r,
                    variables: s
                })
            ], o = this.fragmentWatches.lookupArray(a);
            if (!o.observable) {
                let u = function(d) {
                    const h = d.result;
                    return (!l || !Ur(n, {
                        data: l.data
                    }, {
                        data: h
                    }, i.variables)) && (l = {
                        data: h,
                        dataState: d.complete ? "complete" : "partial",
                        complete: d.complete
                    }, d.missing && (l.missing = d.missing.missing)), l;
                }, c = !1, l;
                const f = new A((d)=>{
                    c = !0;
                    const h = this.watch({
                        variables: s,
                        returnPartialData: !0,
                        id: e,
                        query: n,
                        optimistic: r,
                        immediate: !0,
                        callback: (p)=>{
                            f.dirty = !0, this.onAfterBroadcast(()=>{
                                d.next(u(p)), f.dirty = !1;
                            });
                        }
                    });
                    return ()=>{
                        c = !1, h(), this.fragmentWatches.removeArray(a);
                    };
                }).pipe(Ha(), st({
                    connector: ()=>new pr(1),
                    resetOnRefCountZero: ()=>Qa(0)
                }));
                o.observable = Object.assign(f, {
                    dirty: !1,
                    getCurrentResult: ()=>c && l ? l : u(this.diff({
                            id: e,
                            query: n,
                            returnPartialData: !0,
                            optimistic: r,
                            variables: s
                        }))
                });
            }
            return o.observable;
        }
        getFragmentDoc = ct(yo, {
            max: pe["cache.fragmentQueryDocuments"] || 1e3,
            cache: Ot,
            makeCacheKey: Jo(this)
        });
        readFragment(e, n = !!e.optimistic) {
            const i = e.from !== void 0 ? this.toCacheId(e.from) : e.id;
            return this.read({
                ...e,
                query: this.getFragmentDoc(e.fragment, e.fragmentName),
                rootId: i,
                optimistic: n
            });
        }
        writeQuery({ id: e, data: n, ...i }) {
            return this.write(Object.assign(i, {
                dataId: e || "ROOT_QUERY",
                result: n
            }));
        }
        writeFragment({ data: e, fragment: n, fragmentName: i, ...r }) {
            const s = r.from !== void 0 ? this.toCacheId(r.from) : r.id;
            return this.write(Object.assign(r, {
                query: this.getFragmentDoc(n, i),
                dataId: s,
                result: e
            }));
        }
        updateQuery(e, n) {
            return this.batch({
                update (i) {
                    const r = i.readQuery(e), s = n(r);
                    return s == null ? r : (i.writeQuery({
                        ...e,
                        data: s
                    }), s);
                }
            });
        }
        updateFragment(e, n) {
            return this.batch({
                update (i) {
                    const r = i.readFragment(e), s = n(r);
                    return s == null ? r : (i.writeFragment({
                        ...e,
                        data: s
                    }), s);
                }
            });
        }
        toCacheId(e) {
            return typeof e == "string" ? e : this.identify(e);
        }
    }
    const Oi = Object.freeze({
        data: null,
        dataState: "complete",
        complete: !0
    }), ac = Object.assign(new A((t)=>{
        t.next(Oi);
    }), {
        dirty: !1,
        getCurrentResult: ()=>Oi
    }), Ci = Object.freeze({
        data: [],
        dataState: "complete",
        complete: !0
    }), oc = Object.assign(new A((t)=>{
        t.next(Ci);
    }), {
        getCurrentResult: ()=>Ci
    });
    class Un extends Error {
        message;
        path;
        query;
        variables;
        constructor(e, n, i, r){
            if (super(e), this.message = e, this.path = n, this.query = i, this.variables = r, this.name = "MissingFieldError", Array.isArray(this.path)) {
                this.missing = this.message;
                for(let s = this.path.length - 1; s >= 0; --s)this.missing = {
                    [this.path[s]]: this.missing
                };
            } else this.missing = this.path;
            this.__proto__ = Un.prototype;
        }
        missing;
    }
    const { hasOwnProperty: j } = Object.prototype;
    function ss({ __typename: t, id: e, _id: n }, i) {
        if (typeof t == "string" && (i && (i.keyObject = e != null ? {
            id: e
        } : n != null ? {
            _id: n
        } : void 0), e == null && n != null && (e = n), e != null)) return `${t}:${typeof e == "number" || typeof e == "string" ? e : JSON.stringify(e)}`;
    }
    const cc = {
        dataIdFromObject: ss,
        resultCaching: !0
    };
    function lc(t) {
        return J(cc, t);
    }
    const as = /^[_a-z][_0-9a-z]*/i;
    function We(t) {
        const e = t.match(as);
        return e ? e[0] : t;
    }
    function bn(t, e, n) {
        return H(e) ? q(e) ? e.every((i)=>bn(t, i, n)) : t.selections.every((i)=>{
            if (ht(i) && Rt(i, n)) {
                const r = Ye(i);
                return j.call(e, r) && (!i.selectionSet || bn(i.selectionSet, e[r], n));
            }
            return !0;
        }) : !1;
    }
    function qe(t) {
        return H(t) && !x(t) && !q(t);
    }
    function uc() {
        return new $e;
    }
    function os(t, e) {
        const n = dt(ft(t));
        return {
            fragmentMap: n,
            lookupFragment (i) {
                let r = n[i];
                return !r && e && (r = e.lookup(i)), r || null;
            }
        };
    }
    const Tt = {}, Kt = ()=>Tt, Di = {};
    class qt {
        policies;
        group;
        data = {};
        constructor(e, n){
            this.policies = e, this.group = n;
        }
        toObject() {
            return {
                ...this.data
            };
        }
        has(e) {
            return this.lookup(e, !0) !== void 0;
        }
        get(e, n) {
            if (this.group.depend(e, n), j.call(this.data, e)) {
                const i = this.data[e];
                if (i && j.call(i, n)) return i[n];
            }
            if (n === "__typename" && j.call(this.policies.rootTypenamesById, e)) return this.policies.rootTypenamesById[e];
            if (this instanceof ae) return this.parent.get(e, n);
        }
        lookup(e, n) {
            if (n && this.group.depend(e, "__exists"), j.call(this.data, e)) return this.data[e];
            if (this instanceof ae) return this.parent.lookup(e, n);
            if (this.policies.rootTypenamesById[e]) return {};
        }
        merge(e, n) {
            let i;
            x(e) && (e = e.__ref), x(n) && (n = n.__ref);
            const r = typeof e == "string" ? this.lookup(i = e) : e, s = typeof n == "string" ? this.lookup(i = n) : n;
            if (!s) return;
            T(typeof i == "string", 104);
            const a = new $e({
                reconciler: hc
            }).merge(r, s);
            if (this.data[i] = a, a !== r && (delete this.refs[i], this.group.caching)) {
                const o = {};
                r || (o.__exists = 1), Object.keys(s).forEach((c)=>{
                    if (!r || r[c] !== a[c]) {
                        o[c] = 1;
                        const l = We(c);
                        l !== c && !this.policies.hasKeyArgs(a.__typename, l) && (o[l] = 1), a[c] === void 0 && !(this instanceof ae) && delete a[c];
                    }
                }), o.__typename && !(r && r.__typename) && this.policies.rootTypenamesById[i] === a.__typename && delete o.__typename, Object.keys(o).forEach((c)=>this.group.dirty(i, c));
            }
        }
        modify(e, n, i) {
            const r = this.lookup(e);
            if (r) {
                const s = {};
                let a = !1, o = !0;
                const c = {
                    DELETE: Tt,
                    INVALIDATE: Di,
                    isReference: x,
                    toReference: this.toReference,
                    canRead: this.canRead,
                    readField: (l, u)=>this.policies.readField(typeof l == "string" ? {
                            fieldName: l,
                            from: u || je(e)
                        } : l, {
                            store: this
                        })
                };
                if (Object.keys(r).forEach((l)=>{
                    const u = We(l);
                    let f = r[l];
                    if (f === void 0) return;
                    const d = typeof n == "function" ? n : n[l] || (i ? void 0 : n[u]);
                    if (d) {
                        let h = d === Kt ? Tt : d(f, {
                            ...c,
                            fieldName: u,
                            storeFieldName: l,
                            storage: this.getStorage(e, l)
                        });
                        h === Di ? this.group.dirty(e, l) : (h === Tt && (h = void 0), h !== f && (s[l] = h, a = !0, f = h));
                    }
                    f !== void 0 && (o = !1);
                }), a) return this.merge(e, s), o && (this instanceof ae ? this.data[e] = void 0 : delete this.data[e], this.group.dirty(e, "__exists")), !0;
            }
            return !1;
        }
        delete(e, n, i) {
            const r = this.lookup(e);
            if (r) {
                const s = this.getFieldValue(r, "__typename"), a = n && i ? this.policies.getStoreFieldName({
                    typename: s,
                    fieldName: n,
                    args: i
                }) : n;
                return this.modify(e, a ? {
                    [a]: Kt
                } : Kt, !!i);
            }
            return !1;
        }
        evict(e, n) {
            let i = !1;
            return e.id && (j.call(this.data, e.id) && (i = this.delete(e.id, e.fieldName, e.args)), this instanceof ae && this !== n && (i = this.parent.evict(e, n) || i), (e.fieldName || i) && this.group.dirty(e.id, e.fieldName || "__exists")), i;
        }
        clear() {
            this.replace(null);
        }
        extract() {
            const e = this.toObject(), n = [];
            return this.getRootIdSet().forEach((i)=>{
                j.call(this.policies.rootTypenamesById, i) || n.push(i);
            }), n.length && (e.__META = {
                extraRootIds: n.sort()
            }), e;
        }
        replace(e) {
            if (Object.keys(this.data).forEach((n)=>{
                e && j.call(e, n) || this.delete(n);
            }), e) {
                const { __META: n, ...i } = e;
                Object.keys(i).forEach((r)=>{
                    this.merge(r, i[r]);
                }), n && n.extraRootIds.forEach(this.retain, this);
            }
        }
        rootIds = {};
        retain(e) {
            return this.rootIds[e] = (this.rootIds[e] || 0) + 1;
        }
        release(e) {
            if (this.rootIds[e] > 0) {
                const n = --this.rootIds[e];
                return n || delete this.rootIds[e], n;
            }
            return 0;
        }
        getRootIdSet(e = new Set) {
            return Object.keys(this.rootIds).forEach(e.add, e), this instanceof ae ? this.parent.getRootIdSet(e) : Object.keys(this.policies.rootTypenamesById).forEach(e.add, e), e;
        }
        gc() {
            const e = this.getRootIdSet(), n = this.toObject();
            e.forEach((r)=>{
                j.call(n, r) && (Object.keys(this.findChildRefIds(r)).forEach(e.add, e), delete n[r]);
            });
            const i = Object.keys(n);
            if (i.length) {
                let r = this;
                for(; r instanceof ae;)r = r.parent;
                i.forEach((s)=>r.delete(s));
            }
            return i;
        }
        refs = {};
        findChildRefIds(e) {
            if (!j.call(this.refs, e)) {
                const n = this.refs[e] = {}, i = this.data[e];
                if (!i) return n;
                const r = new Set([
                    i
                ]);
                r.forEach((s)=>{
                    x(s) && (n[s.__ref] = !0), H(s) && Object.keys(s).forEach((a)=>{
                        const o = s[a];
                        H(o) && r.add(o);
                    });
                });
            }
            return this.refs[e];
        }
        makeCacheKey() {
            return this.group.keyMaker.lookupArray(arguments);
        }
        getFieldValue = (e, n)=>x(e) ? this.get(e.__ref, n) : e && e[n];
        canRead = (e)=>x(e) ? this.has(e.__ref) : typeof e == "object";
        toReference = (e, n)=>{
            if (typeof e == "string") return je(e);
            if (x(e)) return e;
            const [i] = this.policies.identify(e);
            if (i) {
                const r = je(i);
                return n && this.merge(i, e), r;
            }
        };
        get supportsResultCaching() {
            return this.group.caching;
        }
    }
    class cs {
        caching;
        parent;
        d = null;
        keyMaker;
        constructor(e, n = null){
            this.caching = e, this.parent = n, this.resetCaching();
        }
        resetCaching() {
            this.d = this.caching ? es() : null, this.keyMaker = new ue;
        }
        depend(e, n) {
            if (this.d) {
                this.d(Zt(e, n));
                const i = We(n);
                i !== n && this.d(Zt(e, i)), this.parent && this.parent.depend(e, n);
            }
        }
        dirty(e, n) {
            this.d && this.d.dirty(Zt(e, n), n === "__exists" ? "forget" : "setDirty");
        }
    }
    function Zt(t, e) {
        return e + "#" + t;
    }
    function Ii(t, e) {
        nt(t) && t.group.depend(e, "__exists");
    }
    class dc extends qt {
        constructor({ policies: e, resultCaching: n = !0, seed: i }){
            super(e, new cs(n)), i && this.replace(i);
        }
        stump = new fc(this);
        addLayer(e, n) {
            return this.stump.addLayer(e, n);
        }
        removeLayer() {
            return this;
        }
        storageTrie = new ue;
        getStorage() {
            return this.storageTrie.lookupArray(arguments);
        }
    }
    qt.Root = dc;
    class ae extends qt {
        id;
        parent;
        replay;
        group;
        constructor(e, n, i, r){
            super(n.policies, r), this.id = e, this.parent = n, this.replay = i, this.group = r, i(this);
        }
        addLayer(e, n) {
            return new ae(e, this, n, this.group);
        }
        removeLayer(e) {
            const n = this.parent.removeLayer(e);
            return e === this.id ? (this.group.caching && Object.keys(this.data).forEach((i)=>{
                const r = this.data[i], s = n.lookup(i);
                s ? r ? r !== s && Object.keys(r).forEach((a)=>{
                    P(r[a], s[a]) || this.group.dirty(i, a);
                }) : (this.group.dirty(i, "__exists"), Object.keys(s).forEach((a)=>{
                    this.group.dirty(i, a);
                })) : this.delete(i);
            }), n) : n === this.parent ? this : n.addLayer(this.id, this.replay);
        }
        toObject() {
            return {
                ...this.parent.toObject(),
                ...this.data
            };
        }
        findChildRefIds(e) {
            const n = this.parent.findChildRefIds(e);
            return j.call(this.data, e) ? {
                ...n,
                ...super.findChildRefIds(e)
            } : n;
        }
        getStorage(...e) {
            let n = this.parent;
            for(; n.parent;)n = n.parent;
            return n.getStorage(...e);
        }
    }
    class fc extends ae {
        constructor(e){
            super("EntityStore.Stump", e, ()=>{}, new cs(e.group.caching, e.group));
        }
        removeLayer() {
            return this;
        }
        merge(e, n) {
            return this.parent.merge(e, n);
        }
    }
    function hc(t, e, n) {
        const i = t[n], r = e[n];
        return P(i, r) ? i : r;
    }
    function nt(t) {
        return !!(t && t.supportsResultCaching);
    }
    const ls = new Pt;
    function mc(t) {
        const e = t.directives?.find(({ name: i })=>i.value === "unmask");
        if (!e) return "mask";
        const n = e.arguments?.find(({ name: i })=>i.value === "mode");
        return n && "value" in n.value && n.value.value === "migrate" ? "migrate" : "unmask";
    }
    function us(t, e, n) {
        return ls.withValue(!0, ()=>tt(t, e, n, !1));
    }
    function pc(t, e) {
        if (e.has(t)) return e.get(t);
        const n = Array.isArray(t) ? [] : {};
        return e.set(t, n), n;
    }
    function tt(t, e, n, i, r) {
        const { knownChanged: s } = n, a = pc(t, n.mutableTargets);
        if (Array.isArray(t)) {
            for (const [o, c] of Array.from(t.entries())){
                if (c === null) {
                    a[o] = null;
                    continue;
                }
                const l = tt(c, e, n, i);
                s.has(l) && s.add(a), a[o] = l;
            }
            return s.has(a) ? a : t;
        }
        for (const o of e.selections){
            let c;
            if (i && s.add(a), o.kind === C.FIELD) {
                const l = Ye(o), u = o.selectionSet;
                if (c = a[l] || t[l], c === void 0) continue;
                if (u && c !== null) {
                    const f = tt(t[l], u, n, i);
                    s.has(f) && (c = f);
                }
                a[l] = c;
            }
            if (o.kind === C.INLINE_FRAGMENT && (!o.typeCondition || n.cache.fragmentMatches(o, t.__typename)) && (c = tt(t, o.selectionSet, n, i)), o.kind === C.FRAGMENT_SPREAD) {
                const l = o.name.value, u = n.fragmentMap[l] || (n.fragmentMap[l] = n.cache.lookupFragment(l));
                T(u, 39, l);
                const f = mc(o);
                f !== "mask" && (c = tt(t, u.selectionSet, n, f === "migrate"));
            }
            s.has(c) && s.add(a);
        }
        return "__typename" in t && !("__typename" in a) && (a.__typename = t.__typename), Object.keys(a).length !== Object.keys(t).length && s.add(a), s.has(a) ? a : t;
    }
    function yc(t, e, n, i) {
        const r = e.definitions.filter((a)=>a.kind === C.FRAGMENT_DEFINITION);
        typeof i > "u" && (T(r.length === 1, 41, r.length), i = r[0].name.value);
        const s = r.find((a)=>a.name.value === i);
        return T(!!s, 42, i), t == null || P(t, {}) ? t : us(t, s.selectionSet, {
            operationName: s.name.value,
            fragmentMap: dt(ft(e)),
            cache: n,
            mutableTargets: new WeakMap,
            knownChanged: new WeakSet
        });
    }
    function kc(t, e, n) {
        const i = ye(e);
        return T(i, 43), t == null ? t : us(t, i.selectionSet, {
            operationType: i.operation,
            operationName: i.name?.value,
            fragmentMap: dt(ft(e)),
            cache: n,
            mutableTargets: new WeakMap,
            knownChanged: new WeakSet
        });
    }
    const _i = {};
    function Qn(t) {
        const e = JSON.stringify(t);
        return _i[e] || (_i[e] = {});
    }
    function Ai(t) {
        const e = Qn(t);
        return e.keyFieldsFn || (e.keyFieldsFn = (n, i)=>{
            const r = (a, o)=>i.readField(o, a), s = i.keyObject = $n(t, (a)=>{
                let o = Le(i.storeObject, a, r);
                return o === void 0 && n !== i.storeObject && j.call(n, a[0]) && (o = Le(n, a, fs)), T(o !== void 0, 107, a.join("."), n), o;
            });
            return `${i.typename}:${JSON.stringify(s)}`;
        });
    }
    function xi(t) {
        const e = Qn(t);
        return e.keyArgsFn || (e.keyArgsFn = (n, { field: i, variables: r, fieldName: s })=>{
            const a = $n(t, (c)=>{
                const l = c[0], u = l.charAt(0);
                if (u === "@") {
                    if (i && qn(i.directives)) {
                        const f = l.slice(1), d = i.directives.find((p)=>p.name.value === f), h = d && Rn(d, r);
                        return h && Le(h, c.slice(1));
                    }
                    return;
                }
                if (u === "$") {
                    const f = l.slice(1);
                    if (r && j.call(r, f)) {
                        const d = c.slice(0);
                        return d[0] = f, Le(r, d);
                    }
                    return;
                }
                if (n) return Le(n, c);
            }), o = JSON.stringify(a);
            return (n || o !== "{}") && (s += ":" + o), s;
        });
    }
    function $n(t, e) {
        const n = new $e;
        return ds(t).reduce((i, r)=>{
            let s = e(r);
            if (s !== void 0) {
                for(let a = r.length - 1; a >= 0; --a)s = {
                    [r[a]]: s
                };
                i = n.merge(i, s);
            }
            return i;
        }, {});
    }
    function ds(t) {
        const e = Qn(t);
        if (!e.paths) {
            const n = e.paths = [], i = [];
            t.forEach((r, s)=>{
                q(r) ? (ds(r).forEach((a)=>n.push(i.concat(a))), i.length = 0) : (i.push(r), q(t[s + 1]) || (n.push(i.slice(0)), i.length = 0));
            });
        }
        return e.paths;
    }
    function fs(t, e) {
        return t[e];
    }
    function Le(t, e, n) {
        return n = n || fs, hs(e.reduce(function i(r, s) {
            return q(r) ? r.map((a)=>i(a, s)) : r && n(r, s);
        }, t));
    }
    function hs(t) {
        return H(t) ? q(t) ? t.map(hs) : $n(Object.keys(t).sort(), (e)=>Le(t, e)) : t;
    }
    const ms = new Pt, Ri = new WeakMap;
    function it(t) {
        let e = Ri.get(t);
        return e || Ri.set(t, e = {
            vars: new Set,
            dep: es()
        }), e;
    }
    function Pi(t) {
        it(t).vars.forEach((e)=>e.forgetCache(t));
    }
    function vc(t) {
        it(t).vars.forEach((e)=>e.attachCache(t));
    }
    function gc(t) {
        const e = new Set, n = new Set, i = function(s) {
            if (arguments.length > 0) {
                if (t !== s) {
                    t = s, e.forEach((o)=>{
                        it(o).dep.dirty(i), bc(o);
                    });
                    const a = Array.from(n);
                    n.clear(), a.forEach((o)=>o(t));
                }
            } else {
                const a = ms.getValue();
                a && (r(a), it(a).dep(i));
            }
            return t;
        };
        i.onNextChange = (s)=>(n.add(s), ()=>{
                n.delete(s);
            });
        const r = i.attachCache = (s)=>(e.add(s), it(s).vars.add(i), i);
        return i.forgetCache = (s)=>e.delete(s), i;
    }
    function bc(t) {
        t.broadcastWatches && t.broadcastWatches();
    }
    function Sn(t) {
        return t.args !== void 0 ? t.args : t.field ? Rn(t.field, t.variables) : null;
    }
    const Sc = ()=>{}, Mi = (t, e)=>e.fieldName, Vi = (t, e, { mergeObjects: n })=>n(t, e), qi = (t, e)=>e, wc = (t, e, { streamFieldInfo: n, existingData: i })=>{
        if (!t && !i) return e;
        const r = [], s = t ?? i, a = n?.isLastChunk ? e.length : Math.max(s.length, e.length);
        for(let o = 0; o < a; o++)r[o] = e[o] === void 0 ? s[o] : e[o];
        return r;
    };
    class Nc {
        config;
        typePolicies = {};
        toBeAdded = {};
        supertypeMap = new Map;
        fuzzySubtypes = new Map;
        cache;
        rootIdsByTypename = {};
        rootTypenamesById = {};
        usingPossibleTypes = !1;
        constructor(e){
            this.config = e, this.config = {
                dataIdFromObject: ss,
                ...e
            }, this.cache = this.config.cache, this.setRootTypename("Query"), this.setRootTypename("Mutation"), this.setRootTypename("Subscription"), e.possibleTypes && this.addPossibleTypes(e.possibleTypes), e.typePolicies && this.addTypePolicies(e.typePolicies);
        }
        identify(e, n) {
            const i = this, r = n && (n.typename || n.storeObject?.__typename) || e.__typename;
            if (r === this.rootTypenamesById.ROOT_QUERY) return [
                "ROOT_QUERY"
            ];
            const s = n && n.storeObject || e, a = {
                ...n,
                typename: r,
                storeObject: s,
                readField: n && n.readField || ((...u)=>{
                    const f = zn(u, s);
                    return i.readField(f, {
                        store: i.cache.data,
                        variables: f.variables
                    });
                })
            };
            let o;
            const c = r && this.getTypePolicy(r);
            let l = c && c.keyFn || this.config.dataIdFromObject;
            return ls.withValue(!0, ()=>{
                for(; l;){
                    const u = l({
                        ...e,
                        ...s
                    }, a);
                    if (q(u)) l = Ai(u);
                    else {
                        o = u;
                        break;
                    }
                }
            }), o = o ? String(o) : void 0, a.keyObject ? [
                o,
                a.keyObject
            ] : [
                o
            ];
        }
        addTypePolicies(e) {
            Object.keys(e).forEach((n)=>{
                const { queryType: i, mutationType: r, subscriptionType: s, ...a } = e[n];
                i && this.setRootTypename("Query", n), r && this.setRootTypename("Mutation", n), s && this.setRootTypename("Subscription", n), j.call(this.toBeAdded, n) ? this.toBeAdded[n].push(a) : this.toBeAdded[n] = [
                    a
                ];
            });
        }
        updateTypePolicy(e, n, i) {
            const r = this.getTypePolicy(e), { keyFields: s, fields: a } = n;
            function o(c, l) {
                c.merge = typeof l == "function" ? l : l === !0 ? Vi : l === !1 ? qi : c.merge;
            }
            o(r, n.merge), r.keyFn = s === !1 ? Sc : q(s) ? Ai(s) : typeof s == "function" ? s : r.keyFn, a && Object.keys(a).forEach((c)=>{
                let l = i[c];
                (!l || l?.typename !== e) && (l = i[c] = {
                    typename: e
                });
                const u = a[c];
                if (typeof u == "function") l.read = u;
                else {
                    const { keyArgs: f, read: d, merge: h } = u;
                    l.keyFn = f === !1 ? Mi : q(f) ? xi(f) : typeof f == "function" ? f : l.keyFn, typeof d == "function" && (l.read = d), o(l, h);
                }
                l.read && l.merge && (l.keyFn = l.keyFn || Mi);
            });
        }
        setRootTypename(e, n = e) {
            const i = "ROOT_" + e.toUpperCase(), r = this.rootTypenamesById[i];
            n !== r && (T(!r || r === e, 108, e), r && delete this.rootIdsByTypename[r], this.rootIdsByTypename[n] = i, this.rootTypenamesById[i] = n);
        }
        addPossibleTypes(e) {
            this.usingPossibleTypes = !0, Object.keys(e).forEach((n)=>{
                this.getSupertypeSet(n, !0), e[n].forEach((i)=>{
                    this.getSupertypeSet(i, !0).add(n);
                    const r = i.match(as);
                    (!r || r[0] !== i) && this.fuzzySubtypes.set(i, new RegExp(i));
                });
            });
        }
        getTypePolicy(e) {
            if (!j.call(this.typePolicies, e)) {
                const i = this.typePolicies[e] = {};
                i.fields = {};
                let r = this.supertypeMap.get(e);
                !r && this.fuzzySubtypes.size && (r = this.getSupertypeSet(e, !0), this.fuzzySubtypes.forEach((s, a)=>{
                    if (s.test(e)) {
                        const o = this.supertypeMap.get(a);
                        o && o.forEach((c)=>r.add(c));
                    }
                })), r && r.size && r.forEach((s)=>{
                    const { fields: a, ...o } = this.getTypePolicy(s);
                    Object.assign(i, o), Object.assign(i.fields, a);
                });
            }
            const n = this.toBeAdded[e];
            return n && n.length && n.splice(0).forEach((i)=>{
                this.updateTypePolicy(e, i, this.typePolicies[e].fields);
            }), this.typePolicies[e];
        }
        getFieldPolicy(e, n) {
            if (e) return this.getTypePolicy(e).fields[n];
        }
        getSupertypeSet(e, n) {
            let i = this.supertypeMap.get(e);
            return !i && n && this.supertypeMap.set(e, i = new Set), i;
        }
        fragmentMatches(e, n, i, r) {
            if (!e.typeCondition) return !0;
            if (!n) return !1;
            const s = e.typeCondition.name.value;
            if (n === s) return !0;
            if (this.usingPossibleTypes && this.supertypeMap.has(s)) {
                const a = this.getSupertypeSet(n, !0), o = [
                    a
                ], c = (u)=>{
                    const f = this.getSupertypeSet(u, !1);
                    f && f.size && o.indexOf(f) < 0 && o.push(f);
                };
                let l = !!(i && this.fuzzySubtypes.size);
                for(let u = 0; u < o.length; ++u){
                    const f = o[u];
                    if (f.has(s)) return a.has(s) || a.add(s), !0;
                    f.forEach(c), l && u === o.length - 1 && bn(e.selectionSet, i, r) && (l = !1, this.fuzzySubtypes.forEach((d, h)=>{
                        const p = n.match(d);
                        p && p[0] === n && c(h);
                    }));
                }
            }
            return !1;
        }
        hasKeyArgs(e, n) {
            const i = this.getFieldPolicy(e, n);
            return !!(i && i.keyFn);
        }
        getStoreFieldName(e) {
            const { typename: n, fieldName: i } = e, r = this.getFieldPolicy(n, i);
            let s, a = r && r.keyFn;
            if (a && n) {
                const o = {
                    typename: n,
                    fieldName: i,
                    field: e.field || null,
                    variables: e.variables
                }, c = Sn(e);
                for(; a;){
                    const l = a(c, o);
                    if (q(l)) a = xi(l);
                    else {
                        s = l || i;
                        break;
                    }
                }
            }
            return s === void 0 && (s = e.field ? _o(e.field, e.variables) : jr(i, Sn(e))), s === !1 ? i : i === We(s) ? s : i + ":" + s;
        }
        readField(e, n) {
            const i = e.from;
            if (!i || !(e.field || e.fieldName)) return;
            if (e.typename === void 0) {
                const u = n.store.getFieldValue(i, "__typename");
                u && (e.typename = u);
            }
            const s = this.getStoreFieldName(e), a = We(s), o = n.store.getFieldValue(i, s), c = this.getFieldPolicy(e.typename, a), l = c && c.read;
            if (l) {
                const u = ps(this, i, e, n, n.store.getStorage(x(i) ? i.__ref : i, s));
                return ms.withValue(this.cache, l, [
                    o,
                    u
                ]);
            }
            return o;
        }
        getReadFunction(e, n) {
            const i = this.getFieldPolicy(e, n);
            return i && i.read;
        }
        getMergeFunction(e, n, i) {
            let r = this.getFieldPolicy(e, n), s = r && r.merge;
            return !s && i && (r = this.getTypePolicy(i), s = r && r.merge), s;
        }
        runMergeFunction(e, n, { field: i, typename: r, merge: s, path: a }, o, c) {
            const l = e;
            if (s === Vi) return ys(o.store)(e, n);
            if (s === qi) return n;
            o.overwrite && (e = void 0);
            const u = o.extensions?.[Se]?.deref()?.peekArray(a);
            if (u) {
                const { current: d, previous: h } = u;
                if (h && P(h.incoming, n) && P(h.streamFieldInfo, d)) return h.result;
            }
            const f = s(e, n, Ec(this, void 0, {
                typename: r,
                fieldName: i.name.value,
                field: i,
                variables: o.variables,
                path: a
            }, o, c || {}, l));
            return u && (u.previous = {
                incoming: n,
                streamFieldInfo: u.current,
                result: f
            }), f;
        }
    }
    function ps(t, e, n, i, r) {
        const s = t.getStoreFieldName(n), a = We(s), o = n.variables || i.variables, { toReference: c, canRead: l } = i.store;
        return {
            args: Sn(n),
            field: n.field || null,
            fieldName: a,
            storeFieldName: s,
            variables: o,
            isReference: x,
            toReference: c,
            storage: r,
            cache: t.cache,
            canRead: l,
            readField (...u) {
                return t.readField(zn(u, e, o), i);
            },
            mergeObjects: ys(i.store)
        };
    }
    function Ec(t, e, n, i, r, s) {
        const a = {
            ...ps(t, e, n, i, r),
            extensions: i.extensions,
            existingData: s
        }, o = i.extensions;
        if (o && Se in o) {
            const { [Se]: c, ...l } = o, u = c?.deref()?.peekArray(n.path);
            u && (a.streamFieldInfo = u.current), a.extensions = Object.keys(l).length === 0 ? void 0 : l;
        }
        return a;
    }
    function zn(t, e, n) {
        const { 0: i, 1: r, length: s } = t;
        let a;
        return typeof i == "string" ? a = {
            fieldName: i,
            from: s > 1 ? r : e
        } : (a = {
            ...i
        }, j.call(a, "from") || (a.from = e)), a.variables === void 0 && (a.variables = n), a;
    }
    function ys(t) {
        return function(n, i) {
            if (q(n) || q(i)) throw ee(111);
            if (H(n) && H(i)) {
                const r = t.getFieldValue(n, "__typename"), s = t.getFieldValue(i, "__typename");
                if (r && s && r !== s) return i;
                if (x(n) && qe(i)) return t.merge(n.__ref, i), n;
                if (qe(n) && x(i)) return t.merge(n, i.__ref), i;
                if (qe(n) && qe(i)) return {
                    ...n,
                    ...i
                };
            }
            return i;
        };
    }
    function Bi(t) {
        return [
            t.selectionSet,
            t.objectOrReference,
            t.context
        ];
    }
    class Fc {
        executeSelectionSet;
        executeSubSelectedArray;
        config;
        knownResults = new WeakMap;
        constructor(e){
            this.config = e, this.executeSelectionSet = ct((n)=>{
                const i = Bi(n), r = this.executeSelectionSet.peek(...i);
                return r || (Ii(n.context.store, n.enclosingRef.__ref), this.execSelectionSetImpl(n));
            }, {
                max: pe["inMemoryCache.executeSelectionSet"] || 5e4,
                keyArgs: Bi,
                makeCacheKey (n, i, r) {
                    if (nt(r.store)) return r.store.makeCacheKey(n, x(i) ? i.__ref : i, r.varString);
                }
            }), this.executeSubSelectedArray = ct((n)=>(Ii(n.context.store, n.enclosingRef.__ref), this.execSubSelectedArrayImpl(n)), {
                max: pe["inMemoryCache.executeSubSelectedArray"] || 1e4,
                makeCacheKey ({ field: n, array: i, context: r }) {
                    if (nt(r.store)) return r.store.makeCacheKey(n, i, r.varString);
                }
            });
        }
        diffQueryAgainstStore({ store: e, query: n, rootId: i = "ROOT_QUERY", variables: r, returnPartialData: s = !0 }) {
            const a = this.config.cache.policies;
            r = {
                ...Mn(vo(n)),
                ...r
            };
            const o = je(i), c = this.executeSelectionSet({
                selectionSet: Vn(n).selectionSet,
                objectOrReference: o,
                enclosingRef: o,
                context: {
                    store: e,
                    query: n,
                    policies: a,
                    variables: r,
                    varString: me(r),
                    ...os(n, this.config.fragments)
                }
            });
            let l;
            c.missing && (l = new Un(Tc(c.missing), c.missing, n, r));
            const u = !l, { result: f } = c;
            return {
                result: u ? f : s ? Object.keys(f).length === 0 ? null : f : null,
                complete: u,
                missing: l
            };
        }
        isFresh(e, n, i, r) {
            if (nt(r.store) && this.knownResults.get(e) === i) {
                const s = this.executeSelectionSet.peek(i, n, r);
                if (s && e === s.result) return !0;
            }
            return !1;
        }
        execSelectionSetImpl({ selectionSet: e, objectOrReference: n, enclosingRef: i, context: r }) {
            if (x(n) && !r.policies.rootTypenamesById[n.__ref] && !r.store.has(n.__ref)) return {
                result: {},
                missing: `Dangling reference to missing ${n.__ref} object`
            };
            const { variables: s, policies: a, store: o } = r, c = o.getFieldValue(n, "__typename"), l = [];
            let u;
            const f = new $e;
            typeof c == "string" && !a.rootIdsByTypename[c] && l.push({
                __typename: c
            });
            function d(k, v) {
                return k.missing && (u = f.merge(u, {
                    [v]: k.missing
                })), k.result;
            }
            const h = new Set(e.selections);
            h.forEach((k)=>{
                if (Rt(k, s)) if (ht(k)) {
                    let v = a.readField({
                        fieldName: k.name.value,
                        field: k,
                        variables: r.variables,
                        from: n
                    }, r);
                    const g = Ye(k);
                    v === void 0 ? ns.added(k) || (u = f.merge(u, {
                        [g]: `Can't find field '${k.name.value}' on ${x(n) ? n.__ref + " object" : "object " + JSON.stringify(n, null, 2)}`
                    })) : q(v) ? v.length > 0 && (v = d(this.executeSubSelectedArray({
                        field: k,
                        array: v,
                        enclosingRef: i,
                        context: r
                    }), g)) : k.selectionSet && v != null && (v = d(this.executeSelectionSet({
                        selectionSet: k.selectionSet,
                        objectOrReference: v,
                        enclosingRef: x(v) ? v : i,
                        context: r
                    }), g)), v !== void 0 && l.push({
                        [g]: v
                    });
                } else {
                    const v = xt(k, r.lookupFragment);
                    if (!v && k.kind === C.FRAGMENT_SPREAD) throw ee(112, k.name.value);
                    v && a.fragmentMatches(v, c) && v.selectionSet.selections.forEach(h.add, h);
                }
            });
            const y = {
                result: Eo(l),
                missing: u
            }, m = y;
            return m.result && this.knownResults.set(m.result, e), m;
        }
        execSubSelectedArrayImpl({ field: e, array: n, enclosingRef: i, context: r }) {
            let s, a = new $e;
            function o(c, l) {
                return c.missing && (s = a.merge(s, {
                    [l]: c.missing
                })), c.result;
            }
            return e.selectionSet && (n = n.filter((c)=>c === void 0 || r.store.canRead(c))), n = n.map((c, l)=>c === null ? null : q(c) ? o(this.executeSubSelectedArray({
                    field: e,
                    array: c,
                    enclosingRef: i,
                    context: r
                }), l) : e.selectionSet ? o(this.executeSelectionSet({
                    selectionSet: e.selectionSet,
                    objectOrReference: c,
                    enclosingRef: x(c) ? c : i,
                    context: r
                }), l) : c), {
                result: n,
                missing: s
            };
        }
    }
    function Tc(t) {
        try {
            JSON.stringify(t, (e, n)=>{
                if (typeof n == "string") throw n;
                return n;
            });
        } catch (e) {
            return e;
        }
    }
    function en(t, e, n) {
        const i = `${e}${n}`;
        let r = t.flavors.get(i);
        return r || t.flavors.set(i, r = t.clientOnly === e && t.deferred === n ? t : {
            ...t,
            clientOnly: e,
            deferred: n
        }), r;
    }
    class Oc {
        cache;
        reader;
        fragments;
        constructor(e, n, i){
            this.cache = e, this.reader = n, this.fragments = i;
        }
        writeToStore(e, { query: n, result: i, dataId: r, variables: s, overwrite: a, extensions: o }) {
            const c = ye(n), l = uc();
            s = {
                ...Mn(c),
                ...s
            };
            const u = {
                store: e,
                written: {},
                merge (d, h) {
                    return l.merge(d, h);
                },
                variables: s,
                varString: me(s),
                ...os(n, this.fragments),
                overwrite: !!a,
                incomingById: new Map,
                clientOnly: !1,
                deferred: !1,
                flavors: new Map,
                extensions: o
            }, f = this.processSelectionSet({
                result: i || {},
                dataId: r,
                selectionSet: c.selectionSet,
                mergeTree: {
                    map: new Map
                },
                context: u,
                path: []
            });
            if (!x(f)) throw ee(114, i);
            return u.incomingById.forEach(({ storeObject: d, mergeTree: h, fieldNodeSet: p }, y)=>{
                const m = je(y);
                if (h && h.map.size) {
                    const k = this.applyMerges(h, m, d, u);
                    if (x(k)) return;
                    d = k;
                }
                e.merge(y, d);
            }), e.retain(f.__ref), f;
        }
        processSelectionSet({ dataId: e, result: n, selectionSet: i, context: r, mergeTree: s, path: a }) {
            const { policies: o } = this.cache;
            let c = {};
            const l = e && o.rootTypenamesById[e] || Nn(n, i, r.fragmentMap) || e && r.store.get(e, "__typename");
            typeof l == "string" && (c.__typename = l);
            const u = (...d)=>{
                const h = zn(d, c, r.variables);
                if (x(h.from)) {
                    const p = r.incomingById.get(h.from.__ref);
                    if (p) {
                        const y = o.readField({
                            ...h,
                            from: p.storeObject
                        }, r);
                        if (y !== void 0) return y;
                    }
                }
                return o.readField(h, r);
            }, f = new Set;
            this.flattenFields(i, n, r, l).forEach((d, h)=>{
                const p = Ye(h), y = n[p], m = [
                    ...a,
                    h.name.value
                ];
                if (f.add(h), y !== void 0) {
                    const k = o.getStoreFieldName({
                        typename: l,
                        fieldName: h.name.value,
                        field: h,
                        variables: d.variables
                    }), v = ji(s, k);
                    let g = this.processFieldValue(y, h, h.selectionSet ? en(d, !1, !1) : d, v, m), S;
                    h.selectionSet && (x(g) || qe(g)) && (S = u("__typename", g));
                    const w = o.getMergeFunction(l, h.name.value, S);
                    w ? v.info = {
                        field: h,
                        typename: l,
                        merge: w,
                        path: m
                    } : Ve([
                        "stream"
                    ], h) && Array.isArray(g) && d.extensions?.[Se] ? v.info = {
                        field: h,
                        typename: l,
                        merge: wc,
                        path: m
                    } : Li(s, k), c = d.merge(c, {
                        [k]: g
                    });
                }
            });
            try {
                const [d, h] = o.identify(n, {
                    typename: l,
                    selectionSet: i,
                    fragmentMap: r.fragmentMap,
                    storeObject: c,
                    readField: u
                });
                e = e || d, h && (c = r.merge(c, h));
            } catch (d) {
                if (!e) throw d;
            }
            if (typeof e == "string") {
                const d = je(e), h = r.written[e] || (r.written[e] = []);
                if (h.indexOf(i) >= 0 || (h.push(i), this.reader && this.reader.isFresh(n, d, i, r))) return d;
                const p = r.incomingById.get(e);
                return p ? (p.storeObject = r.merge(p.storeObject, c), p.mergeTree = wn(p.mergeTree, s), f.forEach((y)=>p.fieldNodeSet.add(y))) : r.incomingById.set(e, {
                    storeObject: c,
                    mergeTree: Ct(s) ? void 0 : s,
                    fieldNodeSet: f
                }), d;
            }
            return c;
        }
        processFieldValue(e, n, i, r, s) {
            return !n.selectionSet || e === null ? e : q(e) ? e.map((a, o)=>{
                const c = this.processFieldValue(a, n, i, ji(r, o), [
                    ...s,
                    o
                ]);
                return Li(r, o), c;
            }) : this.processSelectionSet({
                result: e,
                selectionSet: n.selectionSet,
                context: i,
                mergeTree: r,
                path: s
            });
        }
        flattenFields(e, n, i, r = Nn(n, e, i.fragmentMap)) {
            const s = new Map, { policies: a } = this.cache, o = new ue(!1);
            return function c(l, u) {
                const f = o.lookup(l, u.clientOnly, u.deferred);
                f.visited || (f.visited = !0, l.selections.forEach((d)=>{
                    if (!Rt(d, i.variables)) return;
                    let { clientOnly: h, deferred: p } = u;
                    if (!(h && p) && qn(d.directives) && d.directives.forEach((y)=>{
                        const m = y.name.value;
                        if (m === "client" && (h = !0), m === "defer") {
                            const k = Rn(y, i.variables);
                            (!k || k.if !== !1) && (p = !0);
                        }
                    }), ht(d)) {
                        const y = s.get(d);
                        y && (h = h && y.clientOnly, p = p && y.deferred), s.set(d, en(i, h, p));
                    } else {
                        const y = xt(d, i.lookupFragment);
                        if (!y && d.kind === C.FRAGMENT_SPREAD) throw ee(116, d.name.value);
                        y && a.fragmentMatches(y, r, n, i.variables) && c(y.selectionSet, en(i, h, p));
                    }
                }));
            }(e, i), s;
        }
        applyMerges(e, n, i, r, s) {
            if (e.map.size && !x(i)) {
                const a = !q(i) && (x(n) || qe(n)) ? n : void 0, o = i;
                a && !s && (s = [
                    x(a) ? a.__ref : a
                ]);
                let c;
                const l = (u, f)=>q(u) ? typeof f == "number" ? u[f] : void 0 : r.store.getFieldValue(u, String(f));
                e.map.forEach((u, f)=>{
                    const d = l(a, f), h = l(o, f);
                    if (h === void 0) return;
                    s && s.push(f);
                    const p = this.applyMerges(u, d, h, r, s);
                    p !== h && (c = c || new Map, c.set(f, p)), s && T(s.pop() === f);
                }), c && (i = q(o) ? o.slice(0) : {
                    ...o
                }, c.forEach((u, f)=>{
                    i[f] = u;
                }));
            }
            return e.info ? this.cache.policies.runMergeFunction(n, i, e.info, r, s && r.store.getStorage(...s)) : i;
        }
    }
    const ks = [];
    function ji({ map: t }, e) {
        return t.has(e) || t.set(e, ks.pop() || {
            map: new Map
        }), t.get(e);
    }
    function wn(t, e) {
        if (t === e || !e || Ct(e)) return t;
        if (!t || Ct(t)) return e;
        const n = t.info && e.info ? {
            ...t.info,
            ...e.info
        } : t.info || e.info, i = t.map.size && e.map.size, r = i ? new Map : t.map.size ? t.map : e.map, s = {
            info: n,
            map: r
        };
        if (i) {
            const a = new Set(e.map.keys());
            t.map.forEach((o, c)=>{
                s.map.set(c, wn(o, e.map.get(c))), a.delete(c);
            }), a.forEach((o)=>{
                s.map.set(o, wn(e.map.get(o), t.map.get(o)));
            });
        }
        return s;
    }
    function Ct(t) {
        return !t || !(t.info || t.map.size);
    }
    function Li({ map: t }, e) {
        const n = t.get(e);
        n && Ct(n) && (ks.push(n), t.delete(e));
    }
    function Nn(t, e, n) {
        let i;
        for (const r of e.selections)if (ht(r)) {
            if (r.name.value === "__typename") return t[Ye(r)];
        } else i ? i.push(r) : i = [
            r
        ];
        if (typeof t.__typename == "string") return t.__typename;
        if (i) for (const r of i){
            const s = Nn(t, xt(r, n).selectionSet, n);
            if (typeof s == "string") return s;
        }
    }
    class Cc extends sc {
        data;
        optimisticData;
        config;
        watches = new Set;
        storeReader;
        storeWriter;
        addTypenameTransform = new fe(ns);
        maybeBroadcastWatch;
        assumeImmutableResults = !0;
        policies;
        makeVar = gc;
        constructor(e = {}){
            super(), this.config = lc(e), this.policies = new Nc({
                cache: this,
                dataIdFromObject: this.config.dataIdFromObject,
                possibleTypes: this.config.possibleTypes,
                typePolicies: this.config.typePolicies
            }), this.init();
        }
        init() {
            const e = this.data = new qt.Root({
                policies: this.policies,
                resultCaching: this.config.resultCaching
            });
            this.optimisticData = e.stump, this.resetResultCache();
        }
        resetResultCache() {
            const { fragments: e } = this.config;
            this.addTypenameTransform.resetCache(), e?.resetCaches(), this.storeWriter = new Oc(this, this.storeReader = new Fc({
                cache: this,
                fragments: e
            }), e), this.maybeBroadcastWatch = ct((n, i)=>this.broadcastWatch(n, i), {
                max: pe["inMemoryCache.maybeBroadcastWatch"] || 5e3,
                makeCacheKey: (n)=>{
                    const i = n.optimistic ? this.optimisticData : this.data;
                    if (nt(i)) {
                        const { optimistic: r, id: s, variables: a } = n;
                        return i.makeCacheKey(n.query, n.callback, me({
                            optimistic: r,
                            id: s,
                            variables: a
                        }));
                    }
                }
            }), new Set([
                this.data.group,
                this.optimisticData.group
            ]).forEach((n)=>n.resetCaching());
        }
        restore(e) {
            return this.init(), e && this.data.replace(e), this;
        }
        extract(e = !1) {
            return (e ? this.optimisticData : this.data).extract();
        }
        read(e) {
            const { returnPartialData: n = !1 } = e;
            return this.storeReader.diffQueryAgainstStore({
                ...e,
                store: e.optimistic ? this.optimisticData : this.data,
                config: this.config,
                returnPartialData: n
            }).result;
        }
        write(e) {
            try {
                return ++this.txCount, this.storeWriter.writeToStore(this.data, e);
            } finally{
                !--this.txCount && e.broadcast !== !1 && this.broadcastWatches();
            }
        }
        modify(e) {
            if (j.call(e, "id") && !e.id) return !1;
            const n = e.optimistic ? this.optimisticData : this.data;
            try {
                return ++this.txCount, n.modify(e.id || "ROOT_QUERY", e.fields, !1);
            } finally{
                !--this.txCount && e.broadcast !== !1 && this.broadcastWatches();
            }
        }
        diff(e) {
            return this.storeReader.diffQueryAgainstStore({
                ...e,
                store: e.optimistic ? this.optimisticData : this.data,
                rootId: e.id || "ROOT_QUERY",
                config: this.config
            });
        }
        watch(e) {
            return this.watches.size || vc(this), this.watches.add(e), e.immediate && this.maybeBroadcastWatch(e), ()=>{
                this.watches.delete(e) && !this.watches.size && Pi(this), this.maybeBroadcastWatch.forget(e);
            };
        }
        gc(e) {
            me.reset(), Ce.reset();
            const n = this.optimisticData.gc();
            return e && !this.txCount && e.resetResultCache && this.resetResultCache(), n;
        }
        retain(e, n) {
            return (n ? this.optimisticData : this.data).retain(e);
        }
        release(e, n) {
            return (n ? this.optimisticData : this.data).release(e);
        }
        identify(e) {
            if (x(e)) return e.__ref;
            try {
                return this.policies.identify(e)[0];
            } catch  {}
        }
        evict(e) {
            if (!e.id) {
                if (j.call(e, "id")) return !1;
                e = {
                    ...e,
                    id: "ROOT_QUERY"
                };
            }
            try {
                return ++this.txCount, this.optimisticData.evict(e, this.data);
            } finally{
                !--this.txCount && e.broadcast !== !1 && this.broadcastWatches();
            }
        }
        reset(e) {
            return this.init(), me.reset(), e && e.discardWatches ? (this.watches.forEach((n)=>this.maybeBroadcastWatch.forget(n)), this.watches.clear(), Pi(this)) : this.broadcastWatches(), Promise.resolve();
        }
        removeOptimistic(e) {
            const n = this.optimisticData.removeLayer(e);
            n !== this.optimisticData && (this.optimisticData = n, this.broadcastWatches());
        }
        txCount = 0;
        batch(e) {
            const { update: n, optimistic: i = !0, removeOptimistic: r, onWatchUpdated: s } = e;
            let a;
            const o = (l)=>{
                const { data: u, optimisticData: f } = this;
                ++this.txCount, l && (this.data = this.optimisticData = l);
                try {
                    return a = n(this);
                } finally{
                    --this.txCount, this.data = u, this.optimisticData = f;
                }
            }, c = new Set;
            return s && !this.txCount && this.broadcastWatches({
                ...e,
                onWatchUpdated (l) {
                    return c.add(l), !1;
                }
            }), typeof i == "string" ? this.optimisticData = this.optimisticData.addLayer(i, o) : i === !1 ? o(this.data) : o(), typeof r == "string" && (this.optimisticData = this.optimisticData.removeLayer(r)), s && c.size ? (this.broadcastWatches({
                ...e,
                onWatchUpdated (l, u) {
                    const f = s.call(this, l, u);
                    return f !== !1 && c.delete(l), f;
                }
            }), c.size && c.forEach((l)=>this.maybeBroadcastWatch.dirty(l))) : this.broadcastWatches(e), a;
        }
        performTransaction(e, n) {
            return this.batch({
                update: e,
                optimistic: n || n !== null
            });
        }
        transformDocument(e) {
            return this.addTypenameTransform.transformDocument(this.addFragmentsToDocument(e));
        }
        fragmentMatches(e, n) {
            return this.policies.fragmentMatches(e, n);
        }
        lookupFragment(e) {
            return this.config.fragments?.lookup(e) || null;
        }
        resolvesClientField(e, n) {
            return !!this.policies.getReadFunction(e, n);
        }
        broadcastWatches(e) {
            if (!this.txCount) {
                const n = this.onAfterBroadcast, i = new Set;
                this.onAfterBroadcast = (r)=>{
                    i.add(r);
                };
                try {
                    this.watches.forEach((r)=>this.maybeBroadcastWatch(r, e)), i.forEach((r)=>r());
                } finally{
                    this.onAfterBroadcast = n;
                }
            }
        }
        addFragmentsToDocument(e) {
            const { fragments: n } = this.config;
            return n ? n.transform(e) : e;
        }
        broadcastWatch(e, n) {
            const { lastDiff: i } = e, r = this.diff(e);
            n && (e.optimistic && typeof n.optimistic == "string" && (r.fromOptimisticTransaction = !0), n.onWatchUpdated && n.onWatchUpdated.call(this, e, r, i) === !1) || (!i || !P(i.result, r.result)) && e.callback(e.lastDiff = r, i);
        }
    }
    function mt(t, e) {
        return typeof t == "object" && t !== null && t[Symbol.for("apollo.error")] === e;
    }
    function pt(t) {
        Object.defineProperty(t, Symbol.for("apollo.error"), {
            value: t.name,
            enumerable: !1,
            writable: !1,
            configurable: !1
        });
    }
    function Ui(t) {
        return t.map((e)=>e.message || "Error message not found.").join(`
`);
    }
    class lt extends Error {
        static is(e) {
            return mt(e, "CombinedProtocolErrors");
        }
        static formatMessage = Ui;
        errors;
        constructor(e){
            super(lt.formatMessage(e, {
                defaultFormatMessage: Ui
            })), this.name = "CombinedProtocolErrors", this.errors = e, pt(this), Object.setPrototypeOf(this, lt.prototype);
        }
    }
    function Dc(t) {
        return t !== null && typeof t == "object" && typeof t.message == "string" && typeof t.name == "string" && (typeof t.stack == "string" || typeof t.stack > "u");
    }
    class Wn extends Error {
        static is(e) {
            return mt(e, "UnconventionalError");
        }
        constructor(e){
            super("An error of unexpected shape occurred.", {
                cause: e
            }), this.name = "UnconventionalError", pt(this), Object.setPrototypeOf(this, Wn.prototype);
        }
    }
    function Qi(t) {
        return t.filter((e)=>e).map((e)=>e.message || "Error message not found.").join(`
`);
    }
    class he extends Error {
        static is(e) {
            return mt(e, "CombinedGraphQLErrors");
        }
        static formatMessage = Qi;
        errors;
        data;
        extensions;
        constructor(e, n = e.errors || []){
            super(he.formatMessage(n, {
                result: e,
                defaultFormatMessage: Qi
            })), this.errors = n, this.data = e.data, this.extensions = e.extensions, this.name = "CombinedGraphQLErrors", pt(this), Object.setPrototypeOf(this, he.prototype);
        }
    }
    const Ic = new WeakSet;
    function _c(t) {
        Ic.add(t);
    }
    class Bt extends Error {
        static is(e) {
            return mt(e, "ServerError");
        }
        response;
        statusCode;
        bodyText;
        constructor(e, n){
            super(e), this.name = "ServerError", this.response = n.response, this.statusCode = n.response.status, this.bodyText = n.bodyText, pt(this), Object.setPrototypeOf(this, Bt.prototype);
        }
    }
    class jt extends Error {
        static is(e) {
            return mt(e, "ServerParseError");
        }
        response;
        statusCode;
        bodyText;
        constructor(e, n){
            super(e instanceof Error ? e.message : "Could not parse server response", {
                cause: e
            }), this.name = "ServerParseError", this.response = n.response, this.statusCode = n.response.status, this.bodyText = n.bodyText, pt(this), Object.setPrototypeOf(this, jt.prototype);
        }
    }
    const ut = Symbol();
    function vs(t) {
        return "extensions" in t ? lt.is(t.extensions[ut]) : !1;
    }
    function gs(t) {
        return Dc(t) ? t : typeof t == "string" ? new Error(t, {
            cause: t
        }) : new Wn(t);
    }
    var N;
    (function(t) {
        t[t.loading = 1] = "loading", t[t.setVariables = 2] = "setVariables", t[t.fetchMore = 3] = "fetchMore", t[t.refetch = 4] = "refetch", t[t.poll = 6] = "poll", t[t.ready = 7] = "ready", t[t.error = 8] = "error", t[t.streaming = 9] = "streaming";
    })(N || (N = {}));
    const { assign: $i } = Object, Pe = {
        loading: !0,
        networkStatus: N.loading,
        data: void 0,
        dataState: "empty",
        partial: !0
    }, tn = {
        loading: !1,
        networkStatus: N.ready,
        data: void 0,
        dataState: "empty",
        partial: !0
    };
    class nn {
        options;
        queryName;
        variablesUnknown = !1;
        _lastWrite;
        get query() {
            return this.lastQuery;
        }
        get variables() {
            return this.options.variables;
        }
        unsubscribeFromCache;
        input;
        subject;
        isTornDown;
        queryManager;
        subscriptions = new Set;
        waitForNetworkResult;
        lastQuery;
        linkSubscription;
        pollingInfo;
        get networkStatus() {
            return this.subject.getValue().result.networkStatus;
        }
        get cache() {
            return this.queryManager.cache;
        }
        constructor({ queryManager: e, options: n, transformedQuery: i = e.transform(n.query) }){
            this.queryManager = e, this.waitForNetworkResult = n.fetchPolicy === "network-only", this.isTornDown = !1, this.subscribeToMore = this.subscribeToMore.bind(this), this.maskResult = this.maskResult.bind(this);
            const { watchQuery: { fetchPolicy: r = "cache-first" } = {} } = e.defaultOptions, { fetchPolicy: s = r, initialFetchPolicy: a = s === "standby" ? r : s } = n;
            n[Bo] && (T(s === "standby", 82), this.variablesUnknown = !0), this.lastQuery = i, this.options = {
                ...n,
                initialFetchPolicy: a,
                fetchPolicy: s,
                variables: this.getVariablesWithDefaults(n.variables)
            }, this.initializeObservablesQueue(), this["@@observable"] = ()=>this, Symbol.observable && (this[Symbol.observable] = ()=>this);
            const o = ye(this.query);
            this.queryName = o && o.name && o.name.value;
        }
        initializeObservablesQueue() {
            this.subject = new pa({
                query: this.query,
                variables: this.variables,
                result: Pe,
                meta: {}
            });
            const e = this.subject.pipe(at({
                subscribe: ()=>{
                    this.subject.observed || (this.reobserve(), setTimeout(()=>this.updatePolling()));
                },
                unsubscribe: ()=>{
                    this.subject.observed || this.tearDownQuery();
                }
            }), yn(({ query: n, variables: i, result: r, meta: s }, a)=>{
                const { shouldEmit: o } = s;
                if (r === Pe && (a.previous = void 0, a.previousVariables = void 0), this.options.fetchPolicy === "standby" || o === 2) return;
                if (o === 1) return u();
                const { previous: c, previousVariables: l } = a;
                if (c) {
                    const f = this.queryManager.getDocumentInfo(n), d = this.queryManager.dataMasking, h = d ? f.nonReactiveQuery : n;
                    if ((d || f.hasNonreactiveDirective ? Ur(h, c, r, i) : P(c, r)) && P(l, i)) return;
                }
                if (o === 3 && (!this.options.notifyOnNetworkStatusChange || P(c, r))) return;
                return u();
                function u() {
                    return a.previous = r, a.previousVariables = i, r;
                }
            }, ()=>({})));
            this.pipe = e.pipe.bind(e), this.subscribe = e.subscribe.bind(e), this.input = new He, this.input.complete = ()=>{}, this.input.pipe(this.operator).subscribe(this.subject);
        }
        subscribe;
        pipe;
        [Symbol.observable];
        "@@observable";
        getCacheDiff({ optimistic: e = !0 } = {}) {
            return this.cache.diff({
                query: this.query,
                variables: this.variables,
                returnPartialData: !0,
                optimistic: e
            });
        }
        getInitialResult(e) {
            let n = e || this.options.fetchPolicy;
            this.queryManager.prioritizeCacheValues && (n === "network-only" || n === "cache-and-network") && (n = "cache-first");
            const i = ()=>{
                const r = this.getCacheDiff(), s = this.options.returnPartialData || r.complete ? r.result ?? void 0 : void 0;
                return this.maskResult({
                    data: s,
                    dataState: r.complete ? "complete" : s === void 0 ? "empty" : "partial",
                    loading: !r.complete,
                    networkStatus: r.complete ? N.ready : N.loading,
                    partial: !r.complete
                });
            };
            switch(n){
                case "cache-only":
                    return {
                        ...i(),
                        loading: !1,
                        networkStatus: N.ready
                    };
                case "cache-first":
                    return i();
                case "cache-and-network":
                    return {
                        ...i(),
                        loading: !0,
                        networkStatus: N.loading
                    };
                case "standby":
                    return tn;
                default:
                    return Pe;
            }
        }
        resubscribeCache() {
            const { variables: e, fetchPolicy: n } = this.options, i = this.query, r = n === "standby" || n === "no-cache" || this.waitForNetworkResult, s = !Xe({
                query: i,
                variables: e
            }, this.unsubscribeFromCache) && !this.waitForNetworkResult;
            if ((r || s) && this.unsubscribeFromCache?.(), r || !s) return;
            const a = {
                query: i,
                variables: e,
                optimistic: !0,
                watcher: this,
                callback: (c)=>{
                    const l = this.queryManager.getDocumentInfo(i);
                    if ((l.hasClientExports || l.hasForcedResolvers) && (a.lastDiff = void 0), a.lastOwnDiff === c) return;
                    const { result: u } = this.subject.getValue();
                    !c.complete && (u.error || u === Pe || u === tn) || P(u.data, c.result) || this.scheduleNotify();
                }
            }, o = this.cache.watch(a);
            this.unsubscribeFromCache = Object.assign(()=>{
                this.unsubscribeFromCache = void 0, o();
            }, {
                query: i,
                variables: e
            });
        }
        stableLastResult;
        getCurrentResult() {
            const { result: e } = this.subject.getValue();
            let n = e.networkStatus === N.error || this.hasObservers() || this.options.fetchPolicy === "no-cache" ? e : this.getInitialResult();
            return n === Pe && (n = this.getInitialResult()), P(this.stableLastResult, n) || (this.stableLastResult = n), this.stableLastResult;
        }
        refetch(e) {
            const { fetchPolicy: n } = this.options, i = {
                pollInterval: 0
            };
            return n === "no-cache" ? i.fetchPolicy = "no-cache" : i.fetchPolicy = "network-only", e && !P(this.variables, e) && (i.variables = this.options.variables = this.getVariablesWithDefaults({
                ...this.variables,
                ...e
            })), this._lastWrite = void 0, this._reobserve(i, {
                newNetworkStatus: N.refetch
            });
        }
        fetchMore({ query: e, variables: n, context: i, errorPolicy: r, updateQuery: s }) {
            T(this.options.fetchPolicy !== "cache-only", 84, Qe(this.query, "(anonymous)"));
            const a = {
                ...J(this.options, {
                    errorPolicy: "none"
                }, {
                    query: e,
                    context: i,
                    errorPolicy: r
                }),
                variables: e ? n : {
                    ...this.variables,
                    ...n
                },
                fetchPolicy: "no-cache",
                notifyOnNetworkStatusChange: this.options.notifyOnNetworkStatusChange
            };
            a.query = this.transformDocument(a.query), this.lastQuery = e ? this.transformDocument(this.options.query) : a.query;
            let o = !1;
            const c = this.options.fetchPolicy !== "no-cache";
            c || T(s, 85);
            const { finalize: l, pushNotification: u } = this.pushOperation(N.fetchMore);
            u({
                source: "newNetworkStatus",
                kind: "N",
                value: {}
            }, {
                shouldEmit: 3
            });
            const { promise: f, operator: d } = zi(), { observable: h } = this.queryManager.fetchObservableWithInfo(a, {
                networkStatus: N.fetchMore,
                exposeExtensions: !0
            }), p = h.pipe(d, W((y)=>y.kind === "N" && y.source === "network")).subscribe({
                next: (y)=>{
                    o = !1;
                    const m = y.value, k = m[Qr];
                    if (rs(y.value.networkStatus) && l(), c) {
                        const v = this.getCacheDiff();
                        this.cache.batch({
                            update: (g)=>{
                                s ? g.updateQuery({
                                    query: this.query,
                                    variables: this.variables,
                                    returnPartialData: !0,
                                    optimistic: !1,
                                    extensions: k
                                }, (S)=>s(S, {
                                        fetchMoreResult: m.data,
                                        variables: a.variables
                                    })) : g.writeQuery({
                                    query: a.query,
                                    variables: a.variables,
                                    data: m.data,
                                    extensions: k
                                });
                            },
                            onWatchUpdated: (g, S)=>{
                                if (g.watcher === this && !P(S.result, v.result)) {
                                    o = !0;
                                    const w = this.getCurrentResult();
                                    Ft(m.networkStatus) && u({
                                        kind: "N",
                                        source: "network",
                                        value: {
                                            ...w,
                                            networkStatus: m.networkStatus === N.error ? N.ready : m.networkStatus,
                                            loading: !1,
                                            data: S.result,
                                            dataState: m.dataState === "streaming" ? "streaming" : "complete"
                                        }
                                    });
                                }
                            }
                        });
                    } else {
                        const v = this.getCurrentResult(), g = s(v.data, {
                            fetchMoreResult: m.data,
                            variables: a.variables
                        });
                        u({
                            kind: "N",
                            value: {
                                ...v,
                                networkStatus: N.ready,
                                loading: !1,
                                data: g,
                                dataState: v.dataState === "streaming" ? "streaming" : "complete"
                            },
                            source: "network"
                        });
                    }
                }
            });
            return mi(f.then((y)=>et(this.maskResult(y))).finally(()=>{
                if (p.unsubscribe(), l(), c && !o) {
                    const y = this.getCurrentResult();
                    y.dataState === "streaming" ? u({
                        kind: "N",
                        source: "network",
                        value: {
                            ...y,
                            dataState: "complete",
                            networkStatus: N.ready
                        }
                    }) : u({
                        kind: "N",
                        source: "newNetworkStatus",
                        value: {}
                    }, {
                        shouldEmit: 1
                    });
                }
            }));
        }
        subscribeToMore(e) {
            const n = this.queryManager.startGraphQLSubscription({
                query: e.document,
                variables: e.variables,
                context: e.context
            }).subscribe({
                next: (i)=>{
                    const { updateQuery: r, onError: s } = e, { error: a } = i;
                    if (a) {
                        s ? s(a) : T.error(86, a);
                        return;
                    }
                    r && this.updateQuery((o, c)=>r(o, {
                            subscriptionData: i,
                            ...c
                        }));
                }
            });
            return this.subscriptions.add(n), ()=>{
                this.subscriptions.delete(n) && n.unsubscribe();
            };
        }
        applyOptions(e) {
            const n = J(this.options, e || {});
            $i(this.options, n), this.updatePolling();
        }
        async setVariables(e) {
            return e = this.getVariablesWithDefaults(e), P(this.variables, e) ? et(this.getCurrentResult()) : (this.options.variables = e, this.hasObservers() ? this._reobserve({
                fetchPolicy: this.options.initialFetchPolicy,
                variables: e
            }, {
                newNetworkStatus: N.setVariables
            }) : et(this.getCurrentResult()));
        }
        updateQuery(e) {
            const { queryManager: n } = this, { result: i, complete: r } = this.getCacheDiff({
                optimistic: !1
            }), s = e(i, {
                variables: this.variables,
                complete: !!r,
                previousData: i
            });
            s && (this.cache.writeQuery({
                query: this.options.query,
                data: s,
                variables: this.variables
            }), n.broadcastQueries());
        }
        startPolling(e) {
            this.options.pollInterval = e, this.updatePolling();
        }
        stopPolling() {
            this.options.pollInterval = 0, this.updatePolling();
        }
        applyNextFetchPolicy(e, n) {
            if (n.nextFetchPolicy) {
                const { fetchPolicy: i = "cache-first", initialFetchPolicy: r = i } = n;
                i === "standby" || (typeof n.nextFetchPolicy == "function" ? n.fetchPolicy = n.nextFetchPolicy.call(n, i, {
                    reason: e,
                    options: n,
                    observable: this,
                    initialFetchPolicy: r
                }) : e === "variables-changed" ? n.fetchPolicy = r : n.fetchPolicy = n.nextFetchPolicy);
            }
            return n.fetchPolicy;
        }
        fetch(e, n, i, r) {
            const s = this.options.fetchPolicy;
            e.context ??= {};
            let a = !1;
            const o = ()=>{
                a = !0;
            }, c = (m)=>new A((k)=>{
                    try {
                        return m.subscribe({
                            next (v) {
                                a = !0, k.next(v);
                            },
                            error: (v)=>k.error(v),
                            complete: ()=>k.complete()
                        });
                    } finally{
                        a || (h.override = n, this.input.next({
                            kind: "N",
                            source: "newNetworkStatus",
                            value: {
                                resetError: !0
                            },
                            query: f,
                            variables: d,
                            meta: {
                                shouldEmit: 3,
                                fetchPolicy: s
                            }
                        }));
                    }
                });
            let { observable: l, fromLink: u } = this.queryManager.fetchObservableWithInfo(e, {
                networkStatus: n,
                query: i,
                onCacheHit: o,
                fetchQueryOperator: c,
                observableQuery: this
            });
            const { query: f, variables: d } = this, h = {
                abort: ()=>{
                    y.unsubscribe();
                },
                query: f,
                variables: d
            };
            this.activeOperations.add(h);
            let p = n == N.refetch || n == N.setVariables;
            l = l.pipe(r, st());
            const y = l.pipe(at({
                next: (m)=>{
                    m.source === "newNetworkStatus" || m.kind === "N" && m.value.loading ? h.override = n : delete h.override;
                },
                finalize: ()=>this.activeOperations.delete(h)
            })).subscribe({
                next: (m)=>{
                    const k = {};
                    p && m.kind === "N" && "loading" in m.value && !m.value.loading && (p = !1, k.shouldEmit = 1), this.input.next({
                        ...m,
                        query: f,
                        variables: d,
                        meta: k
                    });
                }
            });
            return {
                fromLink: u,
                subscription: y,
                observable: l
            };
        }
        didWarnCacheOnlyPolling = !1;
        updatePolling() {
            if (this.queryManager.ssrMode) return;
            const { pollingInfo: e, options: { fetchPolicy: n, pollInterval: i } } = this, r = ()=>{
                const { options: c } = this;
                return !c.pollInterval || !this.hasObservers() || c.fetchPolicy === "cache-only" || c.fetchPolicy === "standby";
            };
            if (r()) {
                this.cancelPolling();
                return;
            }
            if (e?.interval === i) return;
            const s = e || (this.pollingInfo = {});
            s.interval = i;
            const a = ()=>{
                if (r()) return this.cancelPolling();
                this.pollingInfo && (!Ft(this.networkStatus) && !this.options.skipPollAttempt?.() ? this._reobserve({
                    fetchPolicy: this.options.initialFetchPolicy === "no-cache" ? "no-cache" : "network-only"
                }, {
                    newNetworkStatus: N.poll
                }).then(o, o) : o());
            }, o = ()=>{
                const c = this.pollingInfo;
                c && (clearTimeout(c.timeout), c.timeout = setTimeout(a, c.interval));
            };
            o();
        }
        cancelPolling() {
            this.pollingInfo && (clearTimeout(this.pollingInfo.timeout), delete this.pollingInfo);
        }
        reobserve(e) {
            return this._reobserve(e);
        }
        _reobserve(e, n) {
            this.isTornDown = !1;
            let { newNetworkStatus: i } = n || {};
            this.queryManager.obsQueries.add(this);
            const r = i === N.refetch || i === N.poll, s = this.variables, a = this.options.fetchPolicy, o = J(this.options, e || {});
            this.variablesUnknown &&= o.fetchPolicy === "standby";
            const c = r ? o : $i(this.options, o), l = this.transformDocument(c.query);
            this.lastQuery = l, e && "variables" in e && (c.variables = this.getVariablesWithDefaults(e.variables)), r || (this.updatePolling(), e && e.variables && !P(e.variables, s) && c.fetchPolicy !== "standby" && (c.fetchPolicy === a || typeof c.nextFetchPolicy == "function") && (this.applyNextFetchPolicy("variables-changed", c), i === void 0 && (i = N.setVariables)));
            const u = this.networkStatus;
            i || (i = N.loading, u !== N.loading && e?.variables && !P(e.variables, s) && (i = N.setVariables), c.fetchPolicy === "standby" && (i = N.ready)), c.fetchPolicy === "standby" && this.cancelPolling(), this.resubscribeCache();
            const { promise: f, operator: d } = zi(c.fetchPolicy === "standby" ? {
                data: void 0
            } : void 0), { subscription: h, observable: p, fromLink: y } = this.fetch(c, i, l, d);
            !r && (y || !this.linkSubscription) && (this.linkSubscription && this.linkSubscription.unsubscribe(), this.linkSubscription = h);
            const m = Object.assign(mi(f.then((k)=>et(this.maskResult(k))).finally(()=>{
                !this.hasObservers() && this.activeOperations.size === 0 && this.tearDownQuery();
            })), {
                retain: ()=>{
                    const k = p.subscribe({}), v = ()=>k.unsubscribe();
                    return f.then(v, v), m;
                }
            });
            return m;
        }
        hasObservers() {
            return this.subject.observed;
        }
        stop() {
            this.subject.complete(), this.initializeObservablesQueue(), this.tearDownQuery();
        }
        tearDownQuery() {
            this.isTornDown || (this.resetNotifications(), this.unsubscribeFromCache?.(), this.linkSubscription && (this.linkSubscription.unsubscribe(), delete this.linkSubscription), this.stopPolling(), this.subscriptions.forEach((e)=>e.unsubscribe()), this.subscriptions.clear(), this.queryManager.obsQueries.delete(this), this.isTornDown = !0, this.abortActiveOperations(), this._lastWrite = void 0);
        }
        transformDocument(e) {
            return this.queryManager.transform(e);
        }
        maskResult(e) {
            const n = this.queryManager.maskOperation({
                document: this.query,
                data: e.data,
                fetchPolicy: this.options.fetchPolicy,
                cause: this
            });
            return n === e.data ? e : {
                ...e,
                data: n
            };
        }
        dirty = !1;
        notifyTimeout;
        resetNotifications() {
            this.notifyTimeout && (clearTimeout(this.notifyTimeout), this.notifyTimeout = void 0), this.dirty = !1;
        }
        scheduleNotify() {
            this.dirty || (this.dirty = !0, this.notifyTimeout || (this.notifyTimeout = setTimeout(()=>this.notify(!0), 0)));
        }
        notify(e = !1) {
            if (!e) {
                const i = this.queryManager.getDocumentInfo(this.query);
                if (i.hasClientExports || i.hasForcedResolvers) return;
            }
            const { dirty: n } = this;
            if (this.resetNotifications(), n && (this.options.fetchPolicy === "cache-only" || this.options.fetchPolicy === "cache-and-network" || !this.activeOperations.size)) {
                const i = this.getCacheDiff();
                P(i.result, this.getCacheDiff({
                    optimistic: !1
                }).result) ? this.reobserveCacheFirst() : this.input.next({
                    kind: "N",
                    value: {
                        data: i.result,
                        dataState: i.complete ? "complete" : i.result ? "partial" : "empty",
                        networkStatus: N.ready,
                        loading: !1,
                        error: void 0,
                        partial: !i.complete
                    },
                    source: "cache",
                    query: this.query,
                    variables: this.variables,
                    meta: {}
                });
            }
        }
        activeOperations = new Set;
        pushOperation(e) {
            let n = !1;
            const { query: i, variables: r } = this, s = ()=>{
                this.activeOperations.delete(a);
            }, a = {
                override: e,
                abort: ()=>{
                    n = !0, s();
                },
                query: i,
                variables: r
            };
            return this.activeOperations.add(a), {
                finalize: s,
                pushNotification: (o, c)=>{
                    n || this.input.next({
                        ...o,
                        query: i,
                        variables: r,
                        meta: {
                            ...c
                        }
                    });
                }
            };
        }
        calculateNetworkStatus(e) {
            return e === N.streaming ? e : Array.from(this.activeOperations.values()).reverse().find((i)=>Xe(i, this) && i.override !== void 0)?.override ?? e;
        }
        abortActiveOperations() {
            this.activeOperations.forEach((e)=>e.abort());
        }
        reset() {
            const e = this.options.fetchPolicy === "cache-only";
            this.setResult(e ? tn : Pe, {
                shouldEmit: e ? 1 : 2
            }), this.abortActiveOperations();
        }
        setResult(e, n) {
            this.input.next({
                source: "setResult",
                kind: "N",
                value: e,
                query: this.query,
                variables: this.variables,
                meta: {
                    ...n
                }
            });
        }
        operator = yn((e)=>{
            const { query: n, variables: i, meta: r } = e;
            if (e.source === "setResult") return {
                query: n,
                variables: i,
                result: e.value,
                meta: r
            };
            if (e.kind === "C" || !Xe(e, this)) return;
            let s;
            const a = this.subject.getValue();
            if (e.source === "cache") {
                if (s = e.value, s.networkStatus === N.ready && s.partial && (!this.options.returnPartialData || a.result.networkStatus === N.error) && this.options.fetchPolicy !== "cache-only") return;
            } else if (e.source === "network") this.waitForNetworkResult && (this.waitForNetworkResult = !1, this.resubscribeCache()), s = e.kind === "E" ? {
                ...Xe(a, e) ? a.result : {
                    data: void 0,
                    dataState: "empty",
                    partial: !0
                },
                error: e.error,
                networkStatus: N.error,
                loading: !1
            } : e.value, e.kind === "E" && s.dataState === "streaming" && (s.dataState = "complete"), s.error && (r.shouldEmit = 1);
            else if (e.source === "newNetworkStatus") {
                const o = Xe(a, e) ? a.result : this.getInitialResult(r.fetchPolicy), { resetError: c } = e.value, l = c ? void 0 : o.error, u = l ? N.error : N.ready;
                s = {
                    ...o,
                    error: l,
                    networkStatus: u
                };
            }
            return T(s), s.error || delete s.error, s.networkStatus = this.calculateNetworkStatus(s.networkStatus), s.loading = Ft(s.networkStatus), s = this.maskResult(s), a.result.data !== void 0 && s.data !== a.result.data && P(s.data, a.result.data) && (s.data = a.result.data), {
                query: n,
                variables: i,
                result: s,
                meta: r
            };
        });
        reobserveCacheFirst() {
            const { fetchPolicy: e, nextFetchPolicy: n } = this.options;
            e === "cache-and-network" || e === "network-only" ? this.reobserve({
                fetchPolicy: "cache-first",
                nextFetchPolicy (i, r) {
                    return this.nextFetchPolicy = n, typeof this.nextFetchPolicy == "function" ? this.nextFetchPolicy(i, r) : e;
                }
            }) : this.reobserve();
        }
        getVariablesWithDefaults(e) {
            return this.queryManager.getVariables(this.query, e);
        }
    }
    function Xe(t, e) {
        return !!(t && e && t.query === e.query && P(t.variables, e.variables));
    }
    function zi(t) {
        let e = t, n, i;
        const r = new Promise((a, o)=>{
            n = a, i = o;
        }), s = at({
            next (a) {
                if (a.kind === "E") return i(a.error);
                a.kind === "N" && a.source !== "newNetworkStatus" && !a.value.loading && (e = a.value);
            },
            finalize: ()=>{
                if (e) n(e);
                else {
                    const a = "The operation was aborted.", o = "AbortError";
                    i(typeof DOMException < "u" ? new DOMException(a, o) : Object.assign(new Error(a), {
                        name: o
                    }));
                }
            }
        });
        return {
            promise: r,
            operator: s
        };
    }
    const Wi = {}, Be = new WeakMap;
    function rn(t, e) {
        const n = t[e];
        typeof n == "function" && (t[e] = function() {
            return Be.set(t, (Be.get(t) + 1) % 1e15), n.apply(this, arguments);
        });
    }
    const Hi = new WeakMap;
    class sn {
        lastRequestId = 1;
        cache;
        queryManager;
        id;
        observableQuery;
        incremental;
        constructor(e, n){
            const i = this.cache = e.cache, r = (Hi.get(e) || 0) + 1;
            Hi.set(e, r), this.id = r + "", this.observableQuery = n, this.queryManager = e, Be.has(i) || (Be.set(i, 0), rn(i, "evict"), rn(i, "modify"), rn(i, "reset"));
        }
        _lastWrite;
        get lastWrite() {
            return (this.observableQuery || this)._lastWrite;
        }
        set lastWrite(e) {
            (this.observableQuery || this)._lastWrite = e;
        }
        resetLastWrite() {
            this.lastWrite = void 0;
        }
        shouldWrite(e, n) {
            const { lastWrite: i } = this;
            return !(i && i.dmCount === Be.get(this.cache) && P(n, i.variables) && P(e.data, i.result.data) && e.extensions?.[Se] === i.result.extensions?.[Se]);
        }
        get hasNext() {
            return this.incremental ? this.incremental.hasNext : !1;
        }
        maybeHandleIncrementalResult(e, n, i) {
            const { incrementalHandler: r } = this.queryManager;
            return r.isIncrementalResult(n) ? (this.incremental ||= r.startRequest({
                query: i
            }), this.incremental.handle(e, n)) : n;
        }
        markQueryResult(e, { document: n, variables: i, errorPolicy: r, cacheWriteBehavior: s }) {
            const a = {
                query: n,
                variables: i,
                returnPartialData: !0,
                optimistic: !0
            };
            this.observableQuery?.resetNotifications();
            const o = s === 0, c = o ? void 0 : this.cache.diff(a);
            let l = this.maybeHandleIncrementalResult(c?.result, e, n);
            return o || (an(l, r) ? this.cache.batch({
                onWatchUpdated: (u, f)=>{
                    u.watcher === this.observableQuery && (u.lastOwnDiff = f);
                },
                update: (u)=>{
                    if (this.shouldWrite(l, i)) u.writeQuery({
                        query: n,
                        data: l.data,
                        variables: i,
                        overwrite: s === 1,
                        extensions: l.extensions
                    }), this.lastWrite = {
                        result: l,
                        variables: i,
                        dmCount: Be.get(this.cache)
                    };
                    else if (c && c.complete) {
                        l = {
                            ...l,
                            data: c.result
                        };
                        return;
                    }
                    const f = u.diff(a);
                    f.complete && (l = {
                        ...l,
                        data: f.result
                    });
                }
            }) : this.lastWrite = void 0), l;
        }
        markMutationResult(e, n, i = this.cache) {
            const r = [], s = n.cacheWriteBehavior === 0;
            let a = this.maybeHandleIncrementalResult(s ? void 0 : i.diff({
                id: "ROOT_MUTATION",
                query: this.queryManager.getDocumentInfo(n.document).asQuery,
                variables: n.variables,
                optimistic: !1,
                returnPartialData: !0
            }).result, e, n.document);
            if (n.errorPolicy === "ignore" && (a = {
                ...a,
                errors: []
            }), Me(a) && n.errorPolicy === "none") return Promise.resolve(a);
            const o = ()=>({
                    ...a,
                    dataState: this.hasNext ? "streaming" : "complete"
                });
            if (!s && an(a, n.errorPolicy)) {
                r.push({
                    result: a.data,
                    dataId: "ROOT_MUTATION",
                    query: n.document,
                    variables: n.variables,
                    extensions: a.extensions
                });
                const { updateQueries: l } = n;
                l && this.queryManager.getObservableQueries("all").forEach((u)=>{
                    const f = u && u.queryName;
                    if (!f || !Object.hasOwnProperty.call(l, f)) return;
                    const d = l[f], { query: h, variables: p } = u, { result: y, complete: m } = u.getCacheDiff({
                        optimistic: !1
                    });
                    if (m && y) {
                        const k = d(y, {
                            mutationResult: o(),
                            queryName: h && Qe(h) || void 0,
                            queryVariables: p
                        });
                        k && r.push({
                            result: k,
                            dataId: "ROOT_QUERY",
                            query: h,
                            variables: p
                        });
                    }
                });
            }
            let c = n.refetchQueries;
            if (typeof c == "function" && (c = c(o())), r.length > 0 || (c || "").length > 0 || n.update || n.onQueryUpdated || n.removeOptimistic) {
                const l = [];
                if (this.queryManager.refetchQueries({
                    updateCache: (u)=>{
                        s || r.forEach((d)=>u.write(d));
                        const { update: f } = n;
                        if (f) {
                            if (!s) {
                                const d = u.diff({
                                    id: "ROOT_MUTATION",
                                    query: this.queryManager.getDocumentInfo(n.document).asQuery,
                                    variables: n.variables,
                                    optimistic: !1,
                                    returnPartialData: !0
                                });
                                d.complete && (a = {
                                    ...a,
                                    data: d.result
                                });
                            }
                            this.hasNext || f(u, a, {
                                context: n.context,
                                variables: n.variables
                            });
                        }
                        !s && !n.keepRootFields && !this.hasNext && u.modify({
                            id: "ROOT_MUTATION",
                            fields (d, { fieldName: h, DELETE: p }) {
                                return h === "__typename" ? d : p;
                            }
                        });
                    },
                    include: c,
                    optimistic: !1,
                    removeOptimistic: n.removeOptimistic,
                    onQueryUpdated: n.onQueryUpdated || null
                }).forEach((u)=>l.push(u)), n.awaitRefetchQueries || n.onQueryUpdated) return Promise.all(l).then(()=>a);
            }
            return Promise.resolve(a);
        }
        markMutationOptimistic(e, n) {
            const i = typeof e == "function" ? e(n.variables, {
                IGNORE: Wi
            }) : e;
            return i === Wi ? !1 : (this.cache.recordOptimisticTransaction((r)=>{
                try {
                    this.markMutationResult({
                        data: i
                    }, n, r);
                } catch (s) {
                    T.error(s);
                }
            }, this.id), !0);
        }
        markSubscriptionResult(e, { document: n, variables: i, errorPolicy: r, cacheWriteBehavior: s }) {
            s !== 0 && (an(e, r) && this.cache.write({
                query: n,
                result: e.data,
                dataId: "ROOT_SUBSCRIPTION",
                variables: i,
                extensions: e.extensions
            }), this.queryManager.broadcastQueries());
        }
    }
    function an(t, e = "none") {
        const n = e === "ignore" || e === "all";
        let i = !Me(t);
        return !i && n && t.data && (i = !0), i;
    }
    class Ac {
        defaultOptions;
        client;
        clientOptions;
        assumeImmutableResults;
        documentTransform;
        ssrMode;
        defaultContext;
        dataMasking;
        incrementalHandler;
        localState;
        queryDeduplication;
        prioritizeCacheValues = !1;
        onBroadcast;
        mutationStore;
        obsQueries = new Set;
        fetchCancelFns = new Map;
        constructor(e){
            const n = new fe((r)=>this.cache.transformDocument(r), {
                cache: !1
            });
            this.client = e.client, this.defaultOptions = e.defaultOptions, this.queryDeduplication = e.queryDeduplication, this.clientOptions = e.clientOptions, this.ssrMode = e.ssrMode, this.assumeImmutableResults = e.assumeImmutableResults, this.dataMasking = e.dataMasking, this.localState = e.localState, this.incrementalHandler = e.incrementalHandler;
            const i = e.documentTransform;
            this.documentTransform = i ? n.concat(i).concat(n) : n, this.defaultContext = e.defaultContext || {}, (this.onBroadcast = e.onBroadcast) && (this.mutationStore = {});
        }
        get link() {
            return this.client.link;
        }
        get cache() {
            return this.client.cache;
        }
        stop() {
            this.obsQueries.forEach((e)=>e.stop()), this.cancelPendingFetches(ee(89));
        }
        cancelPendingFetches(e) {
            this.fetchCancelFns.forEach((n)=>n(e)), this.fetchCancelFns.clear();
        }
        async mutate({ mutation: e, variables: n, optimisticResponse: i, updateQueries: r, refetchQueries: s = [], awaitRefetchQueries: a = !1, update: o, onQueryUpdated: c, fetchPolicy: l, errorPolicy: u, keepRootFields: f, context: d }) {
            const h = new sn(this);
            e = this.cache.transformForLink(this.transform(e));
            const { hasClientExports: p } = this.getDocumentInfo(e);
            n = this.getVariables(e, n), p && (n = await this.localState.getExportedVariables({
                client: this.client,
                document: e,
                variables: n,
                context: d
            }));
            const y = this.mutationStore && (this.mutationStore[h.id] = {
                mutation: e,
                variables: n,
                loading: !0,
                error: null
            }), m = i && h.markMutationOptimistic(i, {
                document: e,
                variables: n,
                cacheWriteBehavior: l === "no-cache" ? 0 : 2,
                errorPolicy: u,
                context: d,
                updateQueries: r,
                update: o,
                keepRootFields: f
            });
            return this.broadcastQueries(), new Promise((k, v)=>{
                const g = {};
                return this.getObservableFromLink(e, {
                    ...d,
                    optimisticResponse: m ? i : void 0
                }, n, l, {}, !1).observable.pipe(Yi(), ve((S)=>{
                    const w = {
                        ...S
                    };
                    return oe(h.markMutationResult(w, {
                        document: e,
                        variables: n,
                        cacheWriteBehavior: l === "no-cache" ? 0 : 2,
                        errorPolicy: u,
                        context: d,
                        update: o,
                        updateQueries: r,
                        awaitRefetchQueries: a,
                        refetchQueries: s,
                        removeOptimistic: m ? h.id : void 0,
                        onQueryUpdated: c,
                        keepRootFields: f
                    }));
                })).pipe(_((S)=>{
                    if (Me(S) && u === "none") throw new he(on(S));
                    return y && (y.loading = !1, y.error = null), S;
                })).subscribe({
                    next: (S)=>{
                        if (this.broadcastQueries(), !h.hasNext) {
                            const w = {
                                data: this.maskOperation({
                                    document: e,
                                    data: S.data,
                                    fetchPolicy: l,
                                    cause: g
                                })
                            };
                            Me(S) && (w.error = new he(S)), Object.keys(S.extensions || {}).length && (w.extensions = S.extensions), k(w);
                        }
                    },
                    error: (S)=>{
                        if (y && (y.loading = !1, y.error = S), m && this.cache.removeOptimistic(h.id), this.broadcastQueries(), u === "ignore") return k({
                            data: void 0
                        });
                        if (u === "all") return k({
                            data: void 0,
                            error: S
                        });
                        v(S);
                    }
                });
            });
        }
        fetchQuery(e, n) {
            return be(e.query, Fe.QUERY), (async ()=>Va(this.fetchObservableWithInfo(e, {
                    networkStatus: n
                }).observable.pipe(yn((i)=>{
                    switch(i.kind){
                        case "E":
                            throw i.error;
                        case "N":
                            if (i.source !== "newNetworkStatus") return et(i.value);
                    }
                })), {
                    defaultValue: {
                        data: void 0
                    }
                }))();
        }
        transform(e) {
            return this.documentTransform.transformDocument(e);
        }
        transformCache = new Pn(pe["queryManager.getDocumentInfo"] || 2e3);
        getDocumentInfo(e) {
            const { transformCache: n } = this;
            if (!n.has(e)) {
                const r = ye(e), s = {
                    hasClientExports: Ve([
                        "client",
                        "export"
                    ], e, !0),
                    hasForcedResolvers: wo(e),
                    hasNonreactiveDirective: Ve([
                        "nonreactive"
                    ], e),
                    hasIncrementalDirective: Ve([
                        "defer"
                    ], e),
                    nonReactiveQuery: xc(e),
                    clientQuery: Ve([
                        "client"
                    ], e) ? e : null,
                    serverQuery: Fo([
                        {
                            name: "client",
                            remove: !0
                        },
                        {
                            name: "connection"
                        },
                        {
                            name: "nonreactive"
                        },
                        {
                            name: "unmask"
                        }
                    ], e),
                    operationType: r?.operation,
                    defaultVars: Mn(r),
                    asQuery: {
                        ...e,
                        definitions: e.definitions.map((a)=>a.kind === "OperationDefinition" && a.operation !== "query" ? {
                                ...a,
                                operation: "query"
                            } : a)
                    }
                };
                n.set(e, s);
            }
            const i = n.get(e);
            if (i.violation) throw i.violation;
            return i;
        }
        getVariables(e, n) {
            const i = this.getDocumentInfo(e).defaultVars, r = Object.entries(n ?? {}).map(([s, a])=>[
                    s,
                    a === void 0 ? i[s] : a
                ]);
            return {
                ...i,
                ...Object.fromEntries(r)
            };
        }
        watchQuery(e) {
            be(e.query, Fe.QUERY);
            const n = this.transform(e.query);
            return e = {
                ...e,
                variables: this.getVariables(n, e.variables)
            }, typeof e.notifyOnNetworkStatusChange > "u" && (e.notifyOnNetworkStatusChange = !0), new nn({
                queryManager: this,
                options: e,
                transformedQuery: n
            });
        }
        query(e) {
            const n = this.transform(e.query);
            return this.fetchQuery({
                ...e,
                query: n
            }).then((i)=>({
                    ...i,
                    data: this.maskOperation({
                        document: n,
                        data: i?.data,
                        fetchPolicy: e.fetchPolicy
                    })
                }));
        }
        requestIdCounter = 1;
        generateRequestId() {
            return this.requestIdCounter++;
        }
        clearStore(e = {
            discardWatches: !0
        }) {
            return this.cancelPendingFetches(ee(91)), this.obsQueries.forEach((n)=>{
                n.reset();
            }), this.mutationStore && (this.mutationStore = {}), this.cache.reset(e);
        }
        getObservableQueries(e = "active") {
            const n = new Set, i = new Map, r = new Map, s = new Set;
            return Array.isArray(e) && e.forEach((a)=>{
                if (typeof a == "string") i.set(a, a), r.set(a, !1);
                else if (No(a)) {
                    const o = Ce(this.transform(a));
                    i.set(o, Qe(a)), r.set(o, !1);
                } else H(a) && a.query && s.add(a);
            }), this.obsQueries.forEach((a)=>{
                const o = Ce(this.transform(a.options.query));
                if (e === "all") {
                    n.add(a);
                    return;
                }
                const { queryName: c, options: { fetchPolicy: l } } = a;
                e === "active" && l === "standby" || (e === "active" || c && r.has(c) || o && r.has(o)) && (n.add(a), c && r.set(c, !0), o && r.set(o, !0));
            }), s.size && s.forEach((a)=>{
                const o = new nn({
                    queryManager: this,
                    options: {
                        ...Nt(this.defaultOptions.watchQuery, a),
                        fetchPolicy: "network-only"
                    }
                });
                n.add(o);
            }), n;
        }
        refetchObservableQueries(e = !1) {
            const n = [];
            return this.getObservableQueries(e ? "all" : "active").forEach((i)=>{
                const { fetchPolicy: r } = i.options;
                (e || r !== "standby") && r !== "cache-only" && n.push(i.refetch());
            }), this.broadcastQueries(), Promise.all(n);
        }
        startGraphQLSubscription(e) {
            let { query: n, variables: i } = e;
            const { fetchPolicy: r = "cache-first", errorPolicy: s = "none", context: a = {}, extensions: o = {} } = e;
            be(n, Fe.SUBSCRIPTION), n = this.transform(n), i = this.getVariables(n, i);
            let c;
            const l = (this.getDocumentInfo(n).hasClientExports ? oe(this.localState.getExportedVariables({
                client: this.client,
                document: n,
                variables: i,
                context: a
            })) : Ne(i)).pipe(ve((u)=>{
                const { observable: f, restart: d } = this.getObservableFromLink(n, a, u, r, o), h = new sn(this);
                return c = d, f.pipe(_((p)=>{
                    h.markSubscriptionResult(p, {
                        document: n,
                        variables: u,
                        errorPolicy: s,
                        cacheWriteBehavior: r === "no-cache" ? 0 : 2
                    });
                    const y = {
                        data: p.data ?? void 0
                    };
                    return Me(p) ? y.error = new he(p) : vs(p) && (y.error = p.extensions[ut], delete p.extensions[ut]), p.extensions && Object.keys(p.extensions).length && (y.extensions = p.extensions), y.error && s === "none" && (y.data = void 0), s === "ignore" && delete y.error, y;
                }), wt((p)=>Ne(s === "ignore" ? {
                        data: void 0
                    } : {
                        data: void 0,
                        error: p
                    })), W((p)=>!!(p.data || p.error)));
            }));
            return Object.assign(l, {
                restart: ()=>c?.()
            });
        }
        broadcastQueries() {
            this.onBroadcast && this.onBroadcast(), this.obsQueries.forEach((e)=>e.notify());
        }
        inFlightLinkObservables = new ue(!1);
        getObservableFromLink(e, n, i, r, s, a = n?.queryDeduplication ?? this.queryDeduplication) {
            let o = {};
            const { serverQuery: c, clientQuery: l, operationType: u, hasIncrementalDirective: f } = this.getDocumentInfo(e), d = Qe(e), h = {
                client: this.client
            };
            if (c) {
                const { inFlightLinkObservables: p, link: y } = this;
                try {
                    let k = function(v) {
                        return new A((g)=>{
                            function S() {
                                return v.subscribe({
                                    next: g.next.bind(g),
                                    complete: g.complete.bind(g),
                                    error: g.error.bind(g)
                                });
                            }
                            let w = S();
                            return o.restart ||= ()=>{
                                w.unsubscribe(), w = S();
                            }, ()=>{
                                w.unsubscribe(), o.restart = void 0;
                            };
                        });
                    };
                    const m = this.incrementalHandler.prepareRequest({
                        query: c,
                        variables: i,
                        context: {
                            ...this.defaultContext,
                            ...n,
                            queryDeduplication: a
                        },
                        extensions: s
                    });
                    if (n = m.context, a) {
                        const v = Ce(c), g = me(i);
                        o = p.lookup(v, g), o.observable || (o.observable = gn(y, m, h).pipe(k, Ga(()=>{
                            p.peek(v, g) === o && p.remove(v, g);
                        }), u === Fe.SUBSCRIPTION ? st() : _n({
                            refCount: !0
                        })));
                    } else o.observable = gn(y, m, h).pipe(k);
                } catch (m) {
                    o.observable = _r(()=>m);
                }
            } else o.observable = Ne({
                data: {}
            });
            if (l) {
                const { operation: p } = ye(e);
                T(!f, 96, p[0].toUpperCase() + p.slice(1), d ?? "(anonymous)"), o.observable = o.observable.pipe(ve((y)=>oe(this.localState.execute({
                        client: this.client,
                        document: l,
                        remoteResult: y,
                        context: n,
                        variables: i,
                        fetchPolicy: r
                    }))));
            }
            return {
                restart: ()=>o.restart?.(),
                observable: o.observable.pipe(wt((p)=>{
                    throw p = gs(p), _c(p), p;
                }))
            };
        }
        getResultsFromLink(e, { queryInfo: n, cacheWriteBehavior: i, observableQuery: r, exposeExtensions: s }) {
            const a = n.lastRequestId = this.generateRequestId(), { errorPolicy: o } = e, c = this.cache.transformForLink(e.query);
            return this.getObservableFromLink(c, e.context, e.variables, e.fetchPolicy).observable.pipe(_((l)=>{
                const u = n.markQueryResult(l, {
                    ...e,
                    document: c,
                    cacheWriteBehavior: i
                }), f = Me(u);
                if (f && o === "none") throw n.resetLastWrite(), r?.resetNotifications(), new he(on(u));
                const d = {
                    data: u.data,
                    ...n.hasNext ? {
                        loading: !0,
                        networkStatus: N.streaming,
                        dataState: "streaming",
                        partial: !0
                    } : {
                        dataState: u.data ? "complete" : "empty",
                        loading: !1,
                        networkStatus: N.ready,
                        partial: !u.data
                    }
                };
                return s && "extensions" in u && (d[Qr] = u.extensions), f && (o === "none" && (d.data = void 0, d.dataState = "empty"), o !== "ignore" && (d.error = new he(on(u)), d.dataState !== "streaming" && (d.networkStatus = N.error))), d;
            }), wt((l)=>{
                if (a >= n.lastRequestId && o === "none") throw n.resetLastWrite(), r?.resetNotifications(), l;
                const u = {
                    data: void 0,
                    dataState: "empty",
                    loading: !1,
                    networkStatus: N.ready,
                    partial: !0
                };
                return o !== "ignore" && (u.error = l, u.networkStatus = N.error), Ne(u);
            }));
        }
        fetchObservableWithInfo(e, { networkStatus: n = N.loading, query: i = e.query, fetchQueryOperator: r = (c)=>c, onCacheHit: s = ()=>{}, observableQuery: a, exposeExtensions: o }) {
            const c = this.getVariables(i, e.variables);
            let { fetchPolicy: l = "cache-first", errorPolicy: u = "none", returnPartialData: f = !1, notifyOnNetworkStatusChange: d = !0, context: h = {} } = e;
            this.prioritizeCacheValues && (l === "network-only" || l === "cache-and-network") && (l = "cache-first");
            const p = Object.assign({}, e, {
                query: i,
                variables: c,
                fetchPolicy: l,
                errorPolicy: u,
                returnPartialData: f,
                notifyOnNetworkStatusChange: d,
                context: h
            }), y = new sn(this, a), m = (w)=>{
                p.variables = w;
                const V = l === "no-cache" ? 0 : n === N.refetch && p.refetchWritePolicy !== "merge" ? 1 : 2, B = this.fetchQueryByPolicy(p, {
                    queryInfo: y,
                    cacheWriteBehavior: V,
                    onCacheHit: s,
                    observableQuery: a,
                    exposeExtensions: o
                });
                return B.observable = B.observable.pipe(r), p.fetchPolicy !== "standby" && a?.applyNextFetchPolicy("after-fetch", e), B;
            }, k = ()=>{
                this.fetchCancelFns.delete(y.id);
            };
            this.fetchCancelFns.set(y.id, (w)=>{
                v.next({
                    kind: "E",
                    error: w,
                    source: "network"
                });
            });
            const v = new He;
            let g, S;
            if (this.getDocumentInfo(p.query).hasClientExports) g = oe(this.localState.getExportedVariables({
                client: this.client,
                document: p.query,
                variables: p.variables,
                context: p.context
            })).pipe(ve((w)=>m(w).observable)), S = !0;
            else {
                const w = m(p.variables);
                S = w.fromLink, g = w.observable;
            }
            return {
                observable: new A((w)=>{
                    w.add(k), g.subscribe(w), v.subscribe(w);
                }).pipe(st()),
                fromLink: S
            };
        }
        refetchQueries({ updateCache: e, include: n, optimistic: i = !1, removeOptimistic: r = i ? Rr("refetchQueries") : void 0, onQueryUpdated: s }) {
            const a = new Map;
            n && this.getObservableQueries(n).forEach((c)=>{
                if (c.options.fetchPolicy === "cache-only" || c.variablesUnknown) return;
                const l = c.getCurrentResult();
                a.set(c, {
                    oq: c,
                    lastDiff: {
                        result: l?.data,
                        complete: !l?.partial
                    }
                });
            });
            const o = new Map;
            if (e) {
                const c = new Set;
                this.cache.batch({
                    update: e,
                    optimistic: i && r || !1,
                    removeOptimistic: r,
                    onWatchUpdated (l, u, f) {
                        const d = l.watcher;
                        if (d instanceof nn && !c.has(d)) {
                            if (c.add(d), s) {
                                a.delete(d);
                                let h = s(d, u, f);
                                return h === !0 && (h = d.refetch().retain()), h !== !1 && o.set(d, h), h;
                            }
                            s !== null && d.options.fetchPolicy !== "cache-only" && a.set(d, {
                                oq: d,
                                lastDiff: f,
                                diff: u
                            });
                        }
                    }
                });
            }
            return a.size && a.forEach(({ oq: c, lastDiff: l, diff: u })=>{
                let f;
                s && (u || (u = c.getCacheDiff()), f = s(c, u, l)), (!s || f === !0) && (f = c.refetch().retain()), f !== !1 && o.set(c, f);
            }), r && this.cache.removeOptimistic(r), o;
        }
        noCacheWarningsByCause = new WeakSet;
        maskOperation(e) {
            const { document: n, data: i } = e;
            return this.dataMasking ? kc(i, n, this.cache) : i;
        }
        maskFragment(e) {
            const { data: n, fragment: i, fragmentName: r } = e;
            return this.dataMasking ? yc(n, i, this.cache, r) : n;
        }
        fetchQueryByPolicy({ query: e, variables: n, fetchPolicy: i, errorPolicy: r, returnPartialData: s, context: a }, { cacheWriteBehavior: o, onCacheHit: c, queryInfo: l, observableQuery: u, exposeExtensions: f }) {
            const d = ()=>this.cache.diff({
                    query: e,
                    variables: n,
                    returnPartialData: !0,
                    optimistic: !0
                }), h = (y, m)=>{
                const k = y.result, v = (S)=>(!y.complete && !s && (S = void 0), {
                        data: S,
                        dataState: y.complete ? "complete" : S ? "partial" : "empty",
                        loading: Ft(m),
                        networkStatus: m,
                        partial: !y.complete
                    }), g = (S)=>Ne({
                        kind: "N",
                        value: v(S),
                        source: "cache"
                    });
                return (y.complete || s) && this.getDocumentInfo(e).hasForcedResolvers ? (c(), oe(this.localState.execute({
                    client: this.client,
                    document: e,
                    remoteResult: k ? {
                        data: k
                    } : void 0,
                    context: a,
                    variables: n,
                    onlyRunForcedResolvers: !0,
                    returnPartialData: !0,
                    fetchPolicy: i
                }).then((S)=>({
                        kind: "N",
                        value: v(S.data || void 0),
                        source: "cache"
                    })))) : r === "none" && m === N.refetch && y.missing ? g(void 0) : g(k || void 0);
            }, p = ()=>this.getResultsFromLink({
                    query: e,
                    variables: n,
                    context: a,
                    fetchPolicy: i,
                    errorPolicy: r
                }, {
                    cacheWriteBehavior: o,
                    queryInfo: l,
                    observableQuery: u,
                    exposeExtensions: f
                }).pipe(Yi(), Ja(), _((y)=>({
                        ...y,
                        source: "network"
                    })));
            switch(i){
                default:
                case "cache-first":
                    {
                        const y = d();
                        return y.complete ? {
                            fromLink: !1,
                            observable: h(y, N.ready)
                        } : s ? {
                            fromLink: !0,
                            observable: zt(h(y, N.loading), p())
                        } : {
                            fromLink: !0,
                            observable: p()
                        };
                    }
                case "cache-and-network":
                    {
                        const y = d();
                        return y.complete || s ? {
                            fromLink: !0,
                            observable: zt(h(y, N.loading), p())
                        } : {
                            fromLink: !0,
                            observable: p()
                        };
                    }
                case "cache-only":
                    return {
                        fromLink: !1,
                        observable: zt(h(d(), N.ready))
                    };
                case "network-only":
                    return {
                        fromLink: !0,
                        observable: p()
                    };
                case "no-cache":
                    return {
                        fromLink: !0,
                        observable: p()
                    };
                case "standby":
                    return {
                        fromLink: !1,
                        observable: De
                    };
            }
        }
    }
    function Yi() {
        let t = !1;
        return at({
            next () {
                t = !0;
            },
            complete () {
                T(t, 100);
            }
        });
    }
    function xc(t) {
        return ce(t, {
            FragmentSpread: (e)=>{
                if (!e.directives?.some((n)=>n.name.value === "unmask")) return {
                    ...e,
                    directives: [
                        ...e.directives || [],
                        {
                            kind: C.DIRECTIVE,
                            name: {
                                kind: C.NAME,
                                value: "nonreactive"
                            }
                        }
                    ]
                };
            }
        });
    }
    function on(t) {
        if (t.extensions?.[Se] == null) return t;
        const { extensions: { [Se]: e, ...n }, ...i } = t;
        return Object.keys(n).length > 0 && (i.extensions = n), i;
    }
    class Rc {
        link;
        cache;
        disableNetworkFetches;
        set prioritizeCacheValues(e) {
            this.queryManager.prioritizeCacheValues = e;
        }
        get prioritizeCacheValues() {
            return this.queryManager.prioritizeCacheValues;
        }
        version;
        queryDeduplication;
        defaultOptions;
        devtoolsConfig;
        refetchEventManager;
        queryManager;
        devToolsHookCb;
        resetStoreCallbacks = [];
        clearStoreCallbacks = [];
        constructor(e){
            const { cache: n, documentTransform: i, ssrMode: r = !1, ssrForceFetchDelay: s = 0, queryDeduplication: a = !0, defaultOptions: o, defaultContext: c, assumeImmutableResults: l = n.assumeImmutableResults, localState: u, devtools: f, dataMasking: d, link: h, incrementalHandler: p = new Xo, experiments: y = [], refetchEventManager: m } = e;
            this.link = h, this.cache = n, this.queryDeduplication = a, this.defaultOptions = o || {}, this.devtoolsConfig = {
                ...f,
                enabled: f?.enabled ?? xr
            }, this.watchQuery = this.watchQuery.bind(this), this.query = this.query.bind(this), this.mutate = this.mutate.bind(this), this.watchFragment = this.watchFragment.bind(this), this.resetStore = this.resetStore.bind(this), this.reFetchObservableQueries = this.refetchObservableQueries = this.refetchObservableQueries.bind(this), this.version = An, this.queryManager = new Ac({
                client: this,
                defaultOptions: this.defaultOptions,
                defaultContext: c,
                documentTransform: i,
                queryDeduplication: a,
                ssrMode: r,
                dataMasking: !!d,
                clientOptions: e,
                incrementalHandler: p,
                assumeImmutableResults: l,
                onBroadcast: this.devtoolsConfig.enabled ? ()=>{
                    this.devToolsHookCb && this.devToolsHookCb();
                } : void 0,
                localState: u
            }), this.prioritizeCacheValues = r || s > 0, s && setTimeout(()=>{
                this.prioritizeCacheValues = !1;
            }, s), this.devtoolsConfig.enabled && this.connectToDevTools(), y.forEach((k)=>k.call(this, e)), this.refetchEventManager = m, this.refetchEventManager?.connect(this);
        }
        connectToDevTools() {
            if (typeof window > "u") return;
            const e = window, n = Symbol.for("apollo.devtools");
            (e[n] = e[n] || []).push(this), e.__APOLLO_CLIENT__ = this;
        }
        get documentTransform() {
            return this.queryManager.documentTransform;
        }
        get localState() {
            return this.queryManager.localState;
        }
        set localState(e) {
            this.queryManager.localState = e;
        }
        stop() {
            this.queryManager.stop(), this.refetchEventManager?.disconnect(this);
        }
        watchQuery(e) {
            const { refetchOn: n } = e;
            if (this.defaultOptions.watchQuery) {
                const i = this.defaultOptions.watchQuery.refetchOn;
                let r;
                n && typeof n == "object" && (typeof i == "object" ? r = {
                    ...i,
                    ...n
                } : i != null && (r = (s)=>{
                    const a = n[s.source] ?? i;
                    return typeof a == "function" ? a(s) : a;
                })), e = Nt(this.defaultOptions.watchQuery, e), r && (e.refetchOn = r);
            }
            return this.queryManager.watchQuery(e);
        }
        query = (e)=>(this.defaultOptions.query && (e = Nt(this.defaultOptions.query, e)), this.queryManager.query(e));
        mutate = (e)=>{
            const n = Nt(J({
                fetchPolicy: "network-only",
                errorPolicy: "none"
            }, this.defaultOptions.mutate), e);
            return be(n.mutation, Fe.MUTATION), this.queryManager.mutate(n);
        };
        subscribe(e) {
            const n = {}, i = this.queryManager.startGraphQLSubscription(e), r = i.pipe(_((s)=>({
                    ...s,
                    data: this.queryManager.maskOperation({
                        document: e.query,
                        data: s.data,
                        fetchPolicy: e.fetchPolicy,
                        cause: n
                    })
                })));
            return Object.assign(r, {
                restart: i.restart
            });
        }
        readQuery(e, n = !!e.optimistic) {
            return this.cache.readQuery({
                ...e,
                query: this.transform(e.query)
            }, n);
        }
        watchFragment(e) {
            const n = this.queryManager.dataMasking;
            return this.cache.watchFragment({
                ...e,
                fragment: this.transform(e.fragment, n)
            });
        }
        readFragment(e, n = !!e.optimistic) {
            return this.cache.readFragment({
                ...e,
                fragment: this.transform(e.fragment)
            }, n);
        }
        writeQuery(e) {
            const n = this.cache.writeQuery(e);
            return e.broadcast !== !1 && this.queryManager.broadcastQueries(), n;
        }
        writeFragment(e) {
            const n = this.cache.writeFragment(e);
            return e.broadcast !== !1 && this.queryManager.broadcastQueries(), n;
        }
        __actionHookForDevTools(e) {
            this.devToolsHookCb = e;
        }
        __requestRaw(e) {
            return gn(this.link, e, {
                client: this
            });
        }
        resetStore() {
            return Promise.resolve().then(()=>this.queryManager.clearStore({
                    discardWatches: !1
                })).then(()=>Promise.all(this.resetStoreCallbacks.map((e)=>e()))).then(()=>this.refetchObservableQueries());
        }
        clearStore() {
            return Promise.resolve().then(()=>this.queryManager.clearStore({
                    discardWatches: !0
                })).then(()=>Promise.all(this.clearStoreCallbacks.map((e)=>e())));
        }
        onResetStore(e) {
            return this.resetStoreCallbacks.push(e), ()=>{
                this.resetStoreCallbacks = this.resetStoreCallbacks.filter((n)=>n !== e);
            };
        }
        onClearStore(e) {
            return this.clearStoreCallbacks.push(e), ()=>{
                this.clearStoreCallbacks = this.clearStoreCallbacks.filter((n)=>n !== e);
            };
        }
        reFetchObservableQueries;
        refetchObservableQueries(e) {
            return this.queryManager.refetchObservableQueries(e);
        }
        refetchQueries(e) {
            const n = this.queryManager.refetchQueries(e), i = [], r = [];
            n.forEach((a, o)=>{
                i.push(o), r.push(a);
            });
            const s = Promise.all(r);
            return s.queries = i, s.results = r, s.catch((a)=>{}), s;
        }
        getObservableQueries(e = "active") {
            return this.queryManager.getObservableQueries(e);
        }
        extract(e) {
            return this.cache.extract(e);
        }
        restore(e) {
            return this.cache.restore(e);
        }
        setLink(e) {
            this.link = e;
        }
        get defaultContext() {
            return this.queryManager.defaultContext;
        }
        maskedFragmentTransform = new fe(Co);
        transform(e, n = !1) {
            const i = this.queryManager.transform(e);
            return n ? this.maskedFragmentTransform.transformDocument(i) : i;
        }
    }
    const { hasOwnProperty: Gi } = Object.prototype;
    function Pc(t) {
        return H(t) && "payload" in t;
    }
    async function* Mc(t) {
        const e = new TextDecoder("utf-8"), i = t.headers?.get("content-type")?.match(/;\s*boundary=(?:'([^']+)'|"([^"]+)"|([^"'].+?))\s*(?:;|$)/i), r = `\r
--` + (i ? i[1] ?? i[2] ?? i[3] ?? "-" : "-");
        let s = "";
        T(t.body && typeof t.body.getReader == "function", 62);
        const o = t.body.getReader();
        let c = !1, l = !1, u;
        const f = ()=>l && s[0] == "-" && s[1] == "-";
        try {
            for(; !c;){
                ({ value: u, done: c } = await o.read());
                const d = typeof u == "string" ? u : e.decode(u), h = s.length - r.length + 1;
                s += d;
                let p = s.indexOf(r, h);
                for(; p > -1 && !f();){
                    l = !0;
                    let y;
                    [y, s] = [
                        s.slice(0, p),
                        s.slice(p + r.length)
                    ];
                    const m = y.indexOf(`\r
\r
`), v = qc(y.slice(0, m))["content-type"];
                    if (v && v.toLowerCase().indexOf("application/json") === -1) throw new Error("Unsupported patch content type: application/json is required.");
                    const g = y.slice(m);
                    g && (yield g), p = s.indexOf(r);
                }
                if (f()) return;
            }
            throw new Error("premature end of multipart body");
        } finally{
            o.cancel();
        }
    }
    async function Vc(t, e) {
        for await (const n of Mc(t)){
            const i = bs(t, n);
            if (Object.keys(i).length != 0) if (Pc(i)) {
                if (Object.keys(i).length === 1 && i.payload === null) return;
                let r = {
                    ...i.payload
                };
                "errors" in i && (r.extensions = {
                    ...r.extensions,
                    [ut]: new lt(i.errors ?? [])
                }), e(r);
            } else e(i);
        }
    }
    function qc(t) {
        const e = {};
        return t.split(`
`).forEach((n)=>{
            const i = n.indexOf(":");
            if (i > -1) {
                const r = n.slice(0, i).trim().toLowerCase(), s = n.slice(i + 1).trim();
                e[r] = s;
            }
        }), e;
    }
    function bs(t, e) {
        if (t.status >= 300) throw new Bt(`Response not successful: Received status code ${t.status}`, {
            response: t,
            bodyText: e
        });
        try {
            return JSON.parse(e);
        } catch (n) {
            throw new jt(n, {
                response: t,
                bodyText: e
            });
        }
    }
    function Bc(t, e) {
        try {
            return JSON.parse(e);
        } catch (n) {
            throw new jt(n, {
                response: t,
                bodyText: e
            });
        }
    }
    function jc(t, e) {
        return t.headers.get("content-type")?.includes("application/graphql-response+json") ? Bc(t, e) : bs(t, e);
    }
    function Lc(t) {
        return (e)=>e.text().then((n)=>{
                const i = jc(e, n);
                if (!Array.isArray(i) && !Gi.call(i, "data") && !Gi.call(i, "errors")) throw new Bt(`Server response was malformed for query '${Array.isArray(t) ? t.map((r)=>r.operationName) : t.operationName}'.`, {
                    response: e,
                    bodyText: n
                });
                return i;
            });
    }
    const Uc = {
        includeQuery: !0,
        includeExtensions: !0,
        preserveHeaderCase: !1
    }, Qc = {
        accept: "application/graphql-response+json,application/json;q=0.9",
        "content-type": "application/json"
    }, $c = {
        method: "POST"
    }, zc = {
        http: Uc,
        headers: Qc,
        options: $c
    }, Wc = (t, e)=>e(t);
    function Hc(t, e, ...n) {
        let i = {}, r = {};
        n.forEach((u)=>{
            i = {
                ...i,
                ...u.options,
                headers: {
                    ...i.headers,
                    ...u.headers
                }
            }, u.credentials && (i.credentials = u.credentials), i.headers.accept = (u.http?.accept || []).concat(i.headers.accept).join(","), r = {
                ...r,
                ...u.http
            };
        }), i.headers = Yc(i.headers, r.preserveHeaderCase);
        const { operationName: s, extensions: a, variables: o, query: c } = t, l = {
            operationName: s,
            variables: o
        };
        return r.includeExtensions && Object.keys(a || {}).length && (l.extensions = a), r.includeQuery && (l.query = e(c, Ce)), {
            options: i,
            body: l
        };
    }
    function Yc(t, e) {
        if (!e) {
            const r = {};
            return Object.keys(Object(t)).forEach((s)=>{
                r[s.toLowerCase()] = t[s];
            }), r;
        }
        const n = {};
        Object.keys(Object(t)).forEach((r)=>{
            n[r.toLowerCase()] = {
                originalName: r,
                value: t[r]
            };
        });
        const i = {};
        return Object.keys(n).forEach((r)=>{
            i[n[r].originalName] = n[r].value;
        }), i;
    }
    const Gc = (t, e)=>{
        const i = t.getContext().uri;
        return i || (typeof e == "function" ? e(t) : e || "/graphql");
    };
    function Jc(t, e) {
        const n = [], i = (l, u)=>{
            n.push(`${l}=${encodeURIComponent(u)}`);
        };
        if ("query" in e && i("query", e.query), e.operationName && i("operationName", e.operationName), e.variables) {
            let l;
            try {
                l = JSON.stringify(e.variables);
            } catch (u) {
                return {
                    parseError: u
                };
            }
            i("variables", l);
        }
        if (e.extensions) {
            let l;
            try {
                l = JSON.stringify(e.extensions);
            } catch (u) {
                return {
                    parseError: u
                };
            }
            i("extensions", l);
        }
        let r = "", s = t;
        const a = t.indexOf("#");
        a !== -1 && (r = t.substr(a), s = t.substr(0, a));
        const o = s.indexOf("?") === -1 ? "?" : "&";
        return {
            newURI: s + o + n.join("&") + r
        };
    }
    const Xc = ke(()=>fetch);
    function Kc() {}
    class Zc extends Q {
        constructor(e = {}){
            let { uri: n = "/graphql", fetch: i, print: r = Wc, includeExtensions: s, preserveHeaderCase: a, useGETForQueries: o, includeUnusedVariables: c = !1, ...l } = e;
            const u = {
                http: J({
                    includeExtensions: s,
                    preserveHeaderCase: a
                }),
                options: l.fetchOptions,
                credentials: l.credentials,
                headers: l.headers
            };
            super((f)=>{
                let d = Gc(f, n);
                const h = f.getContext(), p = {
                    ...h.http
                };
                rc(f.query) && (p.accept = [
                    "multipart/mixed;boundary=graphql;subscriptionSpec=1.0",
                    ...p.accept || []
                ]);
                const y = {
                    http: p,
                    options: h.fetchOptions,
                    credentials: h.credentials,
                    headers: h.headers
                }, { options: m, body: k } = Hc(f, r, zc, u, y);
                k.variables && !c && (k.variables = Zo(k.variables, f.query));
                let v = new AbortController, g = ()=>{
                    v = void 0;
                };
                if (m.signal) {
                    const S = m.signal, w = ()=>{
                        v?.abort(S.reason);
                    };
                    S.addEventListener("abort", w, {
                        once: !0
                    }), g = ()=>{
                        v?.signal.removeEventListener("abort", g), v = void 0, S.removeEventListener("abort", w), g = Kc;
                    }, v.signal.addEventListener("abort", g, {
                        once: !0
                    });
                }
                return m.signal = v.signal, o && !ic(f.query) && (m.method = "GET"), new A((S)=>{
                    if (m.method === "GET") {
                        const { newURI: B, parseError: ie } = Jc(d, k);
                        if (ie) throw ie;
                        d = B;
                    } else m.body = JSON.stringify(k);
                    const w = i || ke(()=>fetch) || Xc, V = S.next.bind(S);
                    return w(d, m).then((B)=>{
                        f.setContext({
                            response: B
                        });
                        const ie = B.headers?.get("content-type");
                        return ie !== null && /^multipart\/mixed/i.test(ie) ? Vc(B, V) : Lc(f)(B).then(V);
                    }).then(()=>{
                        g(), S.complete();
                    }).catch((B)=>{
                        g(), S.error(B);
                    }), ()=>{
                        v && v.abort();
                    };
                });
            });
        }
    }
    class el extends Q {
        constructor(e = {}){
            super((n, i)=>{
                const r = n.client, s = r.queryManager.clientOptions, a = n.getContext();
                {
                    const { name: o, version: c, transport: l = "headers" } = J({}, s.clientAwareness, e.clientAwareness, a.clientAwareness);
                    l === "headers" && n.setContext(({ headers: u })=>({
                            headers: J({
                                "apollographql-client-name": o,
                                "apollographql-client-version": c
                            }, u)
                        }));
                }
                {
                    const { transport: o = "extensions" } = J({}, s.enhancedClientAwareness, e.enhancedClientAwareness);
                    o === "extensions" && (n.extensions = J({
                        clientLibrary: {
                            name: "@apollo/client",
                            version: r.version
                        }
                    }, n.extensions)), o === "headers" && n.setContext(({ headers: c })=>({
                            headers: J({
                                "apollographql-library-name": "@apollo/client",
                                "apollographql-library-version": r.version
                            }, c)
                        }));
                }
                return i(n);
            });
        }
    }
    class tl extends Q {
        constructor(e = {}){
            const { left: n, right: i, request: r } = Q.from([
                new el(e),
                new Zc(e)
            ]);
            super(r), Object.assign(this, {
                left: n,
                right: i
            });
        }
    }
    function nl(t) {
        const { initial: e = 300, jitter: n = !0, max: i = 1 / 0 } = t || {}, r = n ? e : e / 2;
        return function(a) {
            let o = Math.min(i, r * 2 ** a);
            return n && (o = Math.random() * o), o;
        };
    }
    function il(t) {
        const { retryIf: e, max: n = 5 } = t || {};
        return function(r, s, a) {
            return r >= n ? !1 : e ? e(a, s) : !!a;
        };
    }
    class rl {
        observer;
        operation;
        forward;
        delayFor;
        retryIf;
        retryCount = 0;
        currentSubscription = null;
        timerId;
        constructor(e, n, i, r, s){
            this.observer = e, this.operation = n, this.forward = i, this.delayFor = r, this.retryIf = s, this.try();
        }
        cancel() {
            this.currentSubscription && this.currentSubscription.unsubscribe(), clearTimeout(this.timerId), this.timerId = void 0, this.currentSubscription = null;
        }
        try() {
            this.currentSubscription = this.forward(this.operation).subscribe({
                next: (e)=>{
                    if (vs(e)) {
                        this.onError(e.extensions[ut], ()=>this.observer.next(e)), this.currentSubscription?.unsubscribe();
                        return;
                    }
                    this.observer.next(e);
                },
                error: (e)=>this.onError(e, ()=>this.observer.error(e)),
                complete: this.observer.complete.bind(this.observer)
            });
        }
        onError = async (e, n)=>{
            this.retryCount += 1;
            const i = gs(e);
            if (await this.retryIf(this.retryCount, this.operation, i)) {
                this.scheduleRetry(this.delayFor(this.retryCount, this.operation, i));
                return;
            }
            n();
        };
        scheduleRetry(e) {
            if (this.timerId) throw new Error("RetryLink BUG! Encountered overlapping retries");
            this.timerId = setTimeout(()=>{
                this.timerId = void 0, this.try();
            }, e);
        }
    }
    class sl extends Q {
        delayFor;
        retryIf;
        constructor(e){
            super();
            const { attempts: n, delay: i } = e || {};
            this.delayFor = typeof i == "function" ? i : nl(i), this.retryIf = typeof n == "function" ? n : il(n);
        }
        request(e, n) {
            return new A((i)=>{
                const r = new rl(i, e, n, this.delayFor, this.retryIf);
                return ()=>{
                    r.cancel();
                };
            });
        }
    }
    function al(t) {
        return H(t) && "code" in t && "reason" in t;
    }
    function ol(t) {
        return H(t) && t.target?.readyState === WebSocket.CLOSED;
    }
    class cl extends Q {
        client;
        constructor(e){
            super(), this.client = e;
        }
        request(e) {
            return new A((n)=>{
                const { query: i, variables: r, operationName: s, extensions: a } = e;
                return this.client.subscribe({
                    variables: r,
                    operationName: s,
                    extensions: a,
                    query: Ce(i)
                }, {
                    next: n.next.bind(n),
                    complete: n.complete.bind(n),
                    error: (o)=>{
                        if (o instanceof Error) return n.error(o);
                        const c = al(o);
                        return c || ol(o) ? n.error(new Error(`Socket closed${c ? ` with event ${o.code}` : ""}${c ? ` ${o.reason}` : ""}`)) : n.error(new he({
                            errors: Array.isArray(o) ? o : [
                                o
                            ]
                        }));
                    }
                });
            });
        }
    }
    function G(t) {
        return t === null ? "null" : Array.isArray(t) ? "array" : typeof t;
    }
    function Ee(t) {
        return G(t) === "object";
    }
    function ll(t) {
        return Array.isArray(t) && t.length > 0 && t.every((e)=>"message" in e);
    }
    function Ji(t, e) {
        return t.length < 124 ? t : e;
    }
    const ul = "graphql-transport-ws";
    var X = ((t)=>(t[t.InternalServerError = 4500] = "InternalServerError", t[t.InternalClientError = 4005] = "InternalClientError", t[t.BadRequest = 4400] = "BadRequest", t[t.BadResponse = 4004] = "BadResponse", t[t.Unauthorized = 4401] = "Unauthorized", t[t.Forbidden = 4403] = "Forbidden", t[t.SubprotocolNotAcceptable = 4406] = "SubprotocolNotAcceptable", t[t.ConnectionInitialisationTimeout = 4408] = "ConnectionInitialisationTimeout", t[t.ConnectionAcknowledgementTimeout = 4504] = "ConnectionAcknowledgementTimeout", t[t.SubscriberAlreadyExists = 4409] = "SubscriberAlreadyExists", t[t.TooManyInitialisationRequests = 4429] = "TooManyInitialisationRequests", t))(X || {}), K = ((t)=>(t.ConnectionInit = "connection_init", t.ConnectionAck = "connection_ack", t.Ping = "ping", t.Pong = "pong", t.Subscribe = "subscribe", t.Next = "next", t.Error = "error", t.Complete = "complete", t))(K || {});
    function Ss(t) {
        if (!Ee(t)) throw new Error(`Message is expected to be an object, but got ${G(t)}`);
        if (!t.type) throw new Error("Message is missing the 'type' property");
        if (typeof t.type != "string") throw new Error(`Message is expects the 'type' property to be a string, but got ${G(t.type)}`);
        switch(t.type){
            case "connection_init":
            case "connection_ack":
            case "ping":
            case "pong":
                {
                    if (t.payload != null && !Ee(t.payload)) throw new Error(`"${t.type}" message expects the 'payload' property to be an object or nullish or missing, but got "${t.payload}"`);
                    break;
                }
            case "subscribe":
                {
                    if (typeof t.id != "string") throw new Error(`"${t.type}" message expects the 'id' property to be a string, but got ${G(t.id)}`);
                    if (!t.id) throw new Error(`"${t.type}" message requires a non-empty 'id' property`);
                    if (!Ee(t.payload)) throw new Error(`"${t.type}" message expects the 'payload' property to be an object, but got ${G(t.payload)}`);
                    if (typeof t.payload.query != "string") throw new Error(`"${t.type}" message payload expects the 'query' property to be a string, but got ${G(t.payload.query)}`);
                    if (t.payload.variables != null && !Ee(t.payload.variables)) throw new Error(`"${t.type}" message payload expects the 'variables' property to be a an object or nullish or missing, but got ${G(t.payload.variables)}`);
                    if (t.payload.operationName != null && G(t.payload.operationName) !== "string") throw new Error(`"${t.type}" message payload expects the 'operationName' property to be a string or nullish or missing, but got ${G(t.payload.operationName)}`);
                    if (t.payload.extensions != null && !Ee(t.payload.extensions)) throw new Error(`"${t.type}" message payload expects the 'extensions' property to be a an object or nullish or missing, but got ${G(t.payload.extensions)}`);
                    break;
                }
            case "next":
                {
                    if (typeof t.id != "string") throw new Error(`"${t.type}" message expects the 'id' property to be a string, but got ${G(t.id)}`);
                    if (!t.id) throw new Error(`"${t.type}" message requires a non-empty 'id' property`);
                    if (!Ee(t.payload)) throw new Error(`"${t.type}" message expects the 'payload' property to be an object, but got ${G(t.payload)}`);
                    break;
                }
            case "error":
                {
                    if (typeof t.id != "string") throw new Error(`"${t.type}" message expects the 'id' property to be a string, but got ${G(t.id)}`);
                    if (!t.id) throw new Error(`"${t.type}" message requires a non-empty 'id' property`);
                    if (!ll(t.payload)) throw new Error(`"${t.type}" message expects the 'payload' property to be an array of GraphQL errors, but got ${JSON.stringify(t.payload)}`);
                    break;
                }
            case "complete":
                {
                    if (typeof t.id != "string") throw new Error(`"${t.type}" message expects the 'id' property to be a string, but got ${G(t.id)}`);
                    if (!t.id) throw new Error(`"${t.type}" message requires a non-empty 'id' property`);
                    break;
                }
            default:
                throw new Error(`Invalid message 'type' property "${t.type}"`);
        }
        return t;
    }
    function dl(t, e) {
        return Ss(typeof t == "string" ? JSON.parse(t, e) : t);
    }
    function Ke(t, e) {
        return Ss(t), JSON.stringify(t, e);
    }
    function fl(t) {
        const { url: e, connectionParams: n, lazy: i = !0, onNonLazyError: r = console.error, lazyCloseTimeout: s = 0, keepAlive: a = 0, disablePong: o, connectionAckWaitTimeout: c = 0, retryAttempts: l = 5, retryWait: u = async function(R) {
            const F = Math.pow(2, R);
            await new Promise((D)=>setTimeout(D, F * 1e3 + Math.floor(Math.random() * 2700 + 300)));
        }, shouldRetry: f = cn, on: d, webSocketImpl: h, generateID: p = function() {
            return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (R)=>{
                const F = Math.random() * 16 | 0;
                return (R == "x" ? F : F & 3 | 8).toString(16);
            });
        }, jsonMessageReplacer: y, jsonMessageReviver: m } = t;
        let k;
        if (h) {
            if (!ml(h)) throw new Error("Invalid WebSocket implementation provided");
            k = h;
        } else typeof WebSocket < "u" ? k = WebSocket : typeof global < "u" ? k = global.WebSocket || global.MozWebSocket : typeof window < "u" && (k = window.WebSocket || window.MozWebSocket);
        if (!k) throw new Error("WebSocket implementation missing; on Node you can `import WebSocket from 'ws';` and pass `webSocketImpl: WebSocket` to `createClient`");
        const v = k, g = (()=>{
            const O = (()=>{
                const F = {};
                return {
                    on (D, M) {
                        return F[D] = M, ()=>{
                            delete F[D];
                        };
                    },
                    emit (D) {
                        "id" in D && F[D.id]?.(D);
                    }
                };
            })(), R = {
                connecting: d?.connecting ? [
                    d.connecting
                ] : [],
                opened: d?.opened ? [
                    d.opened
                ] : [],
                connected: d?.connected ? [
                    d.connected
                ] : [],
                ping: d?.ping ? [
                    d.ping
                ] : [],
                pong: d?.pong ? [
                    d.pong
                ] : [],
                message: d?.message ? [
                    O.emit,
                    d.message
                ] : [
                    O.emit
                ],
                closed: d?.closed ? [
                    d.closed
                ] : [],
                error: d?.error ? [
                    d.error
                ] : []
            };
            return {
                onMessage: O.on,
                on (F, D) {
                    const M = R[F];
                    return M.push(D), ()=>{
                        M.splice(M.indexOf(D), 1);
                    };
                },
                emit (F, ...D) {
                    for (const M of [
                        ...R[F]
                    ])M(...D);
                }
            };
        })();
        function S(O) {
            const R = [
                g.on("error", (F)=>{
                    R.forEach((D)=>D()), O(F);
                }),
                g.on("closed", (F)=>{
                    R.forEach((D)=>D()), O(F);
                })
            ];
        }
        let w, V = 0, B, ie = !1, kt = 0, Gn = !1;
        async function Jn() {
            clearTimeout(B);
            const [O, R] = await (w ?? (w = new Promise((M, Y)=>(async ()=>{
                    if (ie) {
                        if (await u(kt), !V) return w = void 0, Y({
                            code: 1e3,
                            reason: "All Subscriptions Gone"
                        });
                        kt++;
                    }
                    g.emit("connecting", ie);
                    const I = new v(typeof e == "function" ? await e() : e, ul);
                    let xe, Ge;
                    function vt() {
                        isFinite(a) && a > 0 && (clearTimeout(Ge), Ge = setTimeout(()=>{
                            I.readyState === v.OPEN && (I.send(Ke({
                                type: K.Ping
                            })), g.emit("ping", !1, void 0));
                        }, a));
                    }
                    S((z)=>{
                        w = void 0, clearTimeout(xe), clearTimeout(Ge), Y(z), z instanceof Xi && (I.close(4499, "Terminated"), I.onerror = null, I.onclose = null);
                    }), I.onerror = (z)=>g.emit("error", z), I.onclose = (z)=>g.emit("closed", z), I.onopen = async ()=>{
                        try {
                            g.emit("opened", I);
                            const z = typeof n == "function" ? await n() : n;
                            if (I.readyState !== v.OPEN) return;
                            I.send(Ke(z ? {
                                type: K.ConnectionInit,
                                payload: z
                            } : {
                                type: K.ConnectionInit
                            }, y)), isFinite(c) && c > 0 && (xe = setTimeout(()=>{
                                I.close(X.ConnectionAcknowledgementTimeout, "Connection acknowledgement timeout");
                            }, c)), vt();
                        } catch (z) {
                            g.emit("error", z), I.close(X.InternalClientError, Ji(z instanceof Error ? z.message : String(z), "Internal client error"));
                        }
                    };
                    let Re = !1;
                    I.onmessage = ({ data: z })=>{
                        try {
                            const L = dl(z, m);
                            if (g.emit("message", L), L.type === "ping" || L.type === "pong") {
                                g.emit(L.type, !0, L.payload), L.type === "pong" ? vt() : o || (I.send(Ke(L.payload ? {
                                    type: K.Pong,
                                    payload: L.payload
                                } : {
                                    type: K.Pong
                                })), g.emit("pong", !1, L.payload));
                                return;
                            }
                            if (Re) return;
                            if (L.type !== K.ConnectionAck) throw new Error(`First message cannot be of type ${L.type}`);
                            clearTimeout(xe), Re = !0, g.emit("connected", I, L.payload, ie), ie = !1, kt = 0, M([
                                I,
                                new Promise((Jl, Is)=>S(Is))
                            ]);
                        } catch (L) {
                            I.onmessage = null, g.emit("error", L), I.close(X.BadResponse, Ji(L instanceof Error ? L.message : String(L), "Bad response"));
                        }
                    };
                })())));
            O.readyState === v.CLOSING && await R;
            let F = ()=>{};
            const D = new Promise((M)=>F = M);
            return [
                O,
                F,
                Promise.race([
                    D.then(()=>{
                        if (!V) {
                            const M = ()=>O.close(1e3, "Normal Closure");
                            isFinite(s) && s > 0 ? B = setTimeout(()=>{
                                O.readyState === v.OPEN && M();
                            }, s) : M();
                        }
                    }),
                    R
                ])
            ];
        }
        function Xn(O) {
            if (cn(O) && (hl(O.code) || [
                X.InternalServerError,
                X.InternalClientError,
                X.BadRequest,
                X.BadResponse,
                X.Unauthorized,
                X.SubprotocolNotAcceptable,
                X.SubscriberAlreadyExists,
                X.TooManyInitialisationRequests
            ].includes(O.code))) throw O;
            if (Gn) return !1;
            if (cn(O) && O.code === 1e3) return V > 0;
            if (!l || kt >= l || !f(O)) throw O;
            return ie = !0;
        }
        i || (async ()=>{
            for(V++;;)try {
                const [, , O] = await Jn();
                await O;
            } catch (O) {
                try {
                    if (!Xn(O)) return;
                } catch (R) {
                    return r?.(R);
                }
            }
        })();
        function Kn(O, R) {
            const F = p(O);
            let D = !1, M = !1, Y = ()=>{
                V--, D = !0;
            };
            return (async ()=>{
                for(V++;;)try {
                    const [I, xe, Ge] = await Jn();
                    if (D) return xe();
                    const vt = g.onMessage(F, (Re)=>{
                        switch(Re.type){
                            case K.Next:
                                {
                                    R.next(Re.payload);
                                    return;
                                }
                            case K.Error:
                                {
                                    M = !0, D = !0, R.error(Re.payload), Y();
                                    return;
                                }
                            case K.Complete:
                                {
                                    D = !0, Y();
                                    return;
                                }
                        }
                    });
                    I.send(Ke({
                        id: F,
                        type: K.Subscribe,
                        payload: O
                    }, y)), Y = ()=>{
                        !D && I.readyState === v.OPEN && I.send(Ke({
                            id: F,
                            type: K.Complete
                        }, y)), V--, D = !0, xe();
                    }, await Ge.finally(vt);
                    return;
                } catch (I) {
                    if (!Xn(I)) return;
                }
            })().then(()=>{
                M || R.complete();
            }).catch((I)=>{
                R.error(I);
            }), ()=>{
                D || Y();
            };
        }
        return {
            on: g.on,
            subscribe: Kn,
            iterate (O) {
                const R = [], F = {
                    done: !1,
                    error: null,
                    resolve: ()=>{}
                }, D = Kn(O, {
                    next (Y) {
                        R.push(Y), F.resolve();
                    },
                    error (Y) {
                        F.done = !0, F.error = Y, F.resolve();
                    },
                    complete () {
                        F.done = !0, F.resolve();
                    }
                }), M = async function*() {
                    for(;;){
                        for(R.length || await new Promise((I)=>F.resolve = I); R.length;)yield R.shift();
                        if (F.error) throw F.error;
                        if (F.done) return;
                    }
                }();
                return M.throw = async (Y)=>(F.done || (F.done = !0, F.error = Y, F.resolve()), {
                        done: !0,
                        value: void 0
                    }), M.return = async ()=>(D(), {
                        done: !0,
                        value: void 0
                    }), M;
            },
            async dispose () {
                if (Gn = !0, w) {
                    const [O] = await w;
                    O.close(1e3, "Normal Closure");
                }
            },
            terminate () {
                w && g.emit("closed", new Xi);
            }
        };
    }
    class Xi extends Error {
        name = "TerminatedCloseEvent";
        message = "4499: Terminated";
        code = 4499;
        reason = "Terminated";
        wasClean = !1;
    }
    function cn(t) {
        return Ee(t) && "code" in t && "reason" in t;
    }
    function hl(t) {
        return [
            1e3,
            1001,
            1006,
            1005,
            1012,
            1013,
            1014
        ].includes(t) ? !1 : t >= 1e3 && t <= 1999;
    }
    function ml(t) {
        return typeof t == "function" && "constructor" in t && "CLOSED" in t && "CLOSING" in t && "CONNECTING" in t && "OPEN" in t;
    }
    yt = class extends Error {
    };
    pl = class extends yt {
        errors;
        constructor(e){
            const n = e.map((i, r)=>`${r + 1}. ${i.message}`).join(`
	`);
            super(`Indexer GraphQL error(s):
	${n}`), this.errors = e, this.name = "IndexerFormattedError";
        }
    };
    ws = class extends yt {
        constructor(e, n){
            super(e, n), this.name = "IndexerQueryError";
        }
    };
    ge = class extends yt {
        context;
        constructor(e){
            super(ge.formatMessage(e)), this.context = e, this.name = "IndexerDataError";
        }
        static unknownStatus(e) {
            return new ge({
                kind: "unknown-status",
                value: e
            });
        }
        static missingContractAction(e) {
            return new ge({
                kind: "missing-contract-action",
                contractAddress: e
            });
        }
        static missingIdentifier(e, n, i) {
            return new ge({
                kind: "missing-identifier",
                contractAddress: e,
                actionIndex: n,
                identifiersLength: i
            });
        }
        static formatMessage(e) {
            switch(e.kind){
                case "unknown-status":
                    return `Unexpected transaction status value: ${e.value}`;
                case "missing-contract-action":
                    return `Deploy transaction does not contain a contract action for address ${e.contractAddress}`;
                case "missing-identifier":
                    return `Transaction missing identifier for contract action at address ${e.contractAddress} (actionIndex=${e.actionIndex}, identifiers.length=${e.identifiersLength})`;
            }
        }
    };
    Hn = class extends yt {
        missingField;
        constructor(e){
            super(`Expected '${e}' in indexer subscription data, got null/undefined`), this.missingField = e, this.name = "IndexerSubscriptionDataError";
        }
    };
    yl = class extends yt {
        constructor(e){
            super(e), this.name = "IndexerProviderConfigError";
        }
    };
    const kl = {
        kind: "Document",
        definitions: [
            {
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "BLOCK_HASH_QUERY"
                },
                variableDefinitions: [
                    {
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "offset"
                            }
                        },
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "BlockOffset"
                            }
                        }
                    }
                ],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                        {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "block"
                            },
                            arguments: [
                                {
                                    kind: "Argument",
                                    name: {
                                        kind: "Name",
                                        value: "offset"
                                    },
                                    value: {
                                        kind: "Variable",
                                        name: {
                                            kind: "Name",
                                            value: "offset"
                                        }
                                    }
                                }
                            ],
                            selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                    {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "height"
                                        }
                                    },
                                    {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "hash"
                                        }
                                    }
                                ]
                            }
                        }
                    ]
                }
            }
        ]
    }, vl = {
        kind: "Document",
        definitions: [
            {
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "TX_ID_QUERY"
                },
                variableDefinitions: [
                    {
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "offset"
                            }
                        },
                        type: {
                            kind: "NonNullType",
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "TransactionOffset"
                                }
                            }
                        }
                    }
                ],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                        {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "transactions"
                            },
                            arguments: [
                                {
                                    kind: "Argument",
                                    name: {
                                        kind: "Name",
                                        value: "offset"
                                    },
                                    value: {
                                        kind: "Variable",
                                        name: {
                                            kind: "Name",
                                            value: "offset"
                                        }
                                    }
                                }
                            ],
                            selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                    {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "id"
                                        }
                                    },
                                    {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "protocolVersion"
                                        }
                                    },
                                    {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "raw"
                                        }
                                    },
                                    {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "hash"
                                        }
                                    },
                                    {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "unshieldedCreatedOutputs"
                                        },
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [
                                                {
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "owner"
                                                    }
                                                },
                                                {
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "intentHash"
                                                    }
                                                },
                                                {
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "tokenType"
                                                    }
                                                },
                                                {
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "value"
                                                    }
                                                }
                                            ]
                                        }
                                    },
                                    {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "unshieldedSpentOutputs"
                                        },
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [
                                                {
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "owner"
                                                    }
                                                },
                                                {
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "intentHash"
                                                    }
                                                },
                                                {
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "tokenType"
                                                    }
                                                },
                                                {
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "value"
                                                    }
                                                }
                                            ]
                                        }
                                    },
                                    {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "block"
                                        },
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [
                                                {
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "height"
                                                    }
                                                },
                                                {
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "hash"
                                                    }
                                                },
                                                {
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "author"
                                                    }
                                                },
                                                {
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "timestamp"
                                                    }
                                                }
                                            ]
                                        }
                                    },
                                    {
                                        kind: "InlineFragment",
                                        typeCondition: {
                                            kind: "NamedType",
                                            name: {
                                                kind: "Name",
                                                value: "RegularTransaction"
                                            }
                                        },
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [
                                                {
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "identifiers"
                                                    }
                                                },
                                                {
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "fees"
                                                    },
                                                    selectionSet: {
                                                        kind: "SelectionSet",
                                                        selections: [
                                                            {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "estimatedFees"
                                                                }
                                                            },
                                                            {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "paidFees"
                                                                }
                                                            }
                                                        ]
                                                    }
                                                },
                                                {
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "transactionResult"
                                                    },
                                                    selectionSet: {
                                                        kind: "SelectionSet",
                                                        selections: [
                                                            {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "status"
                                                                }
                                                            },
                                                            {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "segments"
                                                                },
                                                                selectionSet: {
                                                                    kind: "SelectionSet",
                                                                    selections: [
                                                                        {
                                                                            kind: "Field",
                                                                            name: {
                                                                                kind: "Name",
                                                                                value: "id"
                                                                            }
                                                                        },
                                                                        {
                                                                            kind: "Field",
                                                                            name: {
                                                                                kind: "Name",
                                                                                value: "success"
                                                                            }
                                                                        }
                                                                    ]
                                                                }
                                                            }
                                                        ]
                                                    }
                                                }
                                            ]
                                        }
                                    }
                                ]
                            }
                        }
                    ]
                }
            }
        ]
    }, gl = {
        kind: "Document",
        definitions: [
            {
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "DEPLOY_TX_QUERY"
                },
                variableDefinitions: [
                    {
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "address"
                            }
                        },
                        type: {
                            kind: "NonNullType",
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "HexEncoded"
                                }
                            }
                        }
                    }
                ],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                        {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "contractAction"
                            },
                            arguments: [
                                {
                                    kind: "Argument",
                                    name: {
                                        kind: "Name",
                                        value: "address"
                                    },
                                    value: {
                                        kind: "Variable",
                                        name: {
                                            kind: "Name",
                                            value: "address"
                                        }
                                    }
                                }
                            ],
                            selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                    {
                                        kind: "InlineFragment",
                                        typeCondition: {
                                            kind: "NamedType",
                                            name: {
                                                kind: "Name",
                                                value: "ContractDeploy"
                                            }
                                        },
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [
                                                {
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "transaction"
                                                    },
                                                    selectionSet: {
                                                        kind: "SelectionSet",
                                                        selections: [
                                                            {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "id"
                                                                }
                                                            },
                                                            {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "protocolVersion"
                                                                }
                                                            },
                                                            {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "raw"
                                                                }
                                                            },
                                                            {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "hash"
                                                                }
                                                            },
                                                            {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "contractActions"
                                                                },
                                                                selectionSet: {
                                                                    kind: "SelectionSet",
                                                                    selections: [
                                                                        {
                                                                            kind: "Field",
                                                                            name: {
                                                                                kind: "Name",
                                                                                value: "address"
                                                                            }
                                                                        }
                                                                    ]
                                                                }
                                                            },
                                                            {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "block"
                                                                },
                                                                selectionSet: {
                                                                    kind: "SelectionSet",
                                                                    selections: [
                                                                        {
                                                                            kind: "Field",
                                                                            name: {
                                                                                kind: "Name",
                                                                                value: "height"
                                                                            }
                                                                        },
                                                                        {
                                                                            kind: "Field",
                                                                            name: {
                                                                                kind: "Name",
                                                                                value: "hash"
                                                                            }
                                                                        },
                                                                        {
                                                                            kind: "Field",
                                                                            name: {
                                                                                kind: "Name",
                                                                                value: "author"
                                                                            }
                                                                        },
                                                                        {
                                                                            kind: "Field",
                                                                            name: {
                                                                                kind: "Name",
                                                                                value: "timestamp"
                                                                            }
                                                                        }
                                                                    ]
                                                                }
                                                            },
                                                            {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "unshieldedCreatedOutputs"
                                                                },
                                                                selectionSet: {
                                                                    kind: "SelectionSet",
                                                                    selections: [
                                                                        {
                                                                            kind: "Field",
                                                                            name: {
                                                                                kind: "Name",
                                                                                value: "owner"
                                                                            }
                                                                        },
                                                                        {
                                                                            kind: "Field",
                                                                            name: {
                                                                                kind: "Name",
                                                                                value: "intentHash"
                                                                            }
                                                                        },
                                                                        {
                                                                            kind: "Field",
                                                                            name: {
                                                                                kind: "Name",
                                                                                value: "tokenType"
                                                                            }
                                                                        },
                                                                        {
                                                                            kind: "Field",
                                                                            name: {
                                                                                kind: "Name",
                                                                                value: "value"
                                                                            }
                                                                        }
                                                                    ]
                                                                }
                                                            },
                                                            {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "unshieldedSpentOutputs"
                                                                },
                                                                selectionSet: {
                                                                    kind: "SelectionSet",
                                                                    selections: [
                                                                        {
                                                                            kind: "Field",
                                                                            name: {
                                                                                kind: "Name",
                                                                                value: "owner"
                                                                            }
                                                                        },
                                                                        {
                                                                            kind: "Field",
                                                                            name: {
                                                                                kind: "Name",
                                                                                value: "intentHash"
                                                                            }
                                                                        },
                                                                        {
                                                                            kind: "Field",
                                                                            name: {
                                                                                kind: "Name",
                                                                                value: "tokenType"
                                                                            }
                                                                        },
                                                                        {
                                                                            kind: "Field",
                                                                            name: {
                                                                                kind: "Name",
                                                                                value: "value"
                                                                            }
                                                                        }
                                                                    ]
                                                                }
                                                            },
                                                            {
                                                                kind: "InlineFragment",
                                                                typeCondition: {
                                                                    kind: "NamedType",
                                                                    name: {
                                                                        kind: "Name",
                                                                        value: "RegularTransaction"
                                                                    }
                                                                },
                                                                selectionSet: {
                                                                    kind: "SelectionSet",
                                                                    selections: [
                                                                        {
                                                                            kind: "Field",
                                                                            name: {
                                                                                kind: "Name",
                                                                                value: "identifiers"
                                                                            }
                                                                        },
                                                                        {
                                                                            kind: "Field",
                                                                            name: {
                                                                                kind: "Name",
                                                                                value: "fees"
                                                                            },
                                                                            selectionSet: {
                                                                                kind: "SelectionSet",
                                                                                selections: [
                                                                                    {
                                                                                        kind: "Field",
                                                                                        name: {
                                                                                            kind: "Name",
                                                                                            value: "estimatedFees"
                                                                                        }
                                                                                    },
                                                                                    {
                                                                                        kind: "Field",
                                                                                        name: {
                                                                                            kind: "Name",
                                                                                            value: "paidFees"
                                                                                        }
                                                                                    }
                                                                                ]
                                                                            }
                                                                        },
                                                                        {
                                                                            kind: "Field",
                                                                            name: {
                                                                                kind: "Name",
                                                                                value: "transactionResult"
                                                                            },
                                                                            selectionSet: {
                                                                                kind: "SelectionSet",
                                                                                selections: [
                                                                                    {
                                                                                        kind: "Field",
                                                                                        name: {
                                                                                            kind: "Name",
                                                                                            value: "status"
                                                                                        }
                                                                                    },
                                                                                    {
                                                                                        kind: "Field",
                                                                                        name: {
                                                                                            kind: "Name",
                                                                                            value: "segments"
                                                                                        },
                                                                                        selectionSet: {
                                                                                            kind: "SelectionSet",
                                                                                            selections: [
                                                                                                {
                                                                                                    kind: "Field",
                                                                                                    name: {
                                                                                                        kind: "Name",
                                                                                                        value: "id"
                                                                                                    }
                                                                                                },
                                                                                                {
                                                                                                    kind: "Field",
                                                                                                    name: {
                                                                                                        kind: "Name",
                                                                                                        value: "success"
                                                                                                    }
                                                                                                }
                                                                                            ]
                                                                                        }
                                                                                    }
                                                                                ]
                                                                            }
                                                                        }
                                                                    ]
                                                                }
                                                            }
                                                        ]
                                                    }
                                                }
                                            ]
                                        }
                                    },
                                    {
                                        kind: "InlineFragment",
                                        typeCondition: {
                                            kind: "NamedType",
                                            name: {
                                                kind: "Name",
                                                value: "ContractUpdate"
                                            }
                                        },
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [
                                                {
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "transaction"
                                                    },
                                                    selectionSet: {
                                                        kind: "SelectionSet",
                                                        selections: [
                                                            {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "id"
                                                                }
                                                            },
                                                            {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "protocolVersion"
                                                                }
                                                            },
                                                            {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "raw"
                                                                }
                                                            },
                                                            {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "hash"
                                                                }
                                                            },
                                                            {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "contractActions"
                                                                },
                                                                selectionSet: {
                                                                    kind: "SelectionSet",
                                                                    selections: [
                                                                        {
                                                                            kind: "Field",
                                                                            name: {
                                                                                kind: "Name",
                                                                                value: "address"
                                                                            }
                                                                        }
                                                                    ]
                                                                }
                                                            },
                                                            {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "block"
                                                                },
                                                                selectionSet: {
                                                                    kind: "SelectionSet",
                                                                    selections: [
                                                                        {
                                                                            kind: "Field",
                                                                            name: {
                                                                                kind: "Name",
                                                                                value: "height"
                                                                            }
                                                                        },
                                                                        {
                                                                            kind: "Field",
                                                                            name: {
                                                                                kind: "Name",
                                                                                value: "hash"
                                                                            }
                                                                        },
                                                                        {
                                                                            kind: "Field",
                                                                            name: {
                                                                                kind: "Name",
                                                                                value: "author"
                                                                            }
                                                                        },
                                                                        {
                                                                            kind: "Field",
                                                                            name: {
                                                                                kind: "Name",
                                                                                value: "timestamp"
                                                                            }
                                                                        }
                                                                    ]
                                                                }
                                                            },
                                                            {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "unshieldedCreatedOutputs"
                                                                },
                                                                selectionSet: {
                                                                    kind: "SelectionSet",
                                                                    selections: [
                                                                        {
                                                                            kind: "Field",
                                                                            name: {
                                                                                kind: "Name",
                                                                                value: "owner"
                                                                            }
                                                                        },
                                                                        {
                                                                            kind: "Field",
                                                                            name: {
                                                                                kind: "Name",
                                                                                value: "intentHash"
                                                                            }
                                                                        },
                                                                        {
                                                                            kind: "Field",
                                                                            name: {
                                                                                kind: "Name",
                                                                                value: "tokenType"
                                                                            }
                                                                        },
                                                                        {
                                                                            kind: "Field",
                                                                            name: {
                                                                                kind: "Name",
                                                                                value: "value"
                                                                            }
                                                                        }
                                                                    ]
                                                                }
                                                            },
                                                            {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "unshieldedSpentOutputs"
                                                                },
                                                                selectionSet: {
                                                                    kind: "SelectionSet",
                                                                    selections: [
                                                                        {
                                                                            kind: "Field",
                                                                            name: {
                                                                                kind: "Name",
                                                                                value: "owner"
                                                                            }
                                                                        },
                                                                        {
                                                                            kind: "Field",
                                                                            name: {
                                                                                kind: "Name",
                                                                                value: "intentHash"
                                                                            }
                                                                        },
                                                                        {
                                                                            kind: "Field",
                                                                            name: {
                                                                                kind: "Name",
                                                                                value: "tokenType"
                                                                            }
                                                                        },
                                                                        {
                                                                            kind: "Field",
                                                                            name: {
                                                                                kind: "Name",
                                                                                value: "value"
                                                                            }
                                                                        }
                                                                    ]
                                                                }
                                                            },
                                                            {
                                                                kind: "InlineFragment",
                                                                typeCondition: {
                                                                    kind: "NamedType",
                                                                    name: {
                                                                        kind: "Name",
                                                                        value: "RegularTransaction"
                                                                    }
                                                                },
                                                                selectionSet: {
                                                                    kind: "SelectionSet",
                                                                    selections: [
                                                                        {
                                                                            kind: "Field",
                                                                            name: {
                                                                                kind: "Name",
                                                                                value: "identifiers"
                                                                            }
                                                                        },
                                                                        {
                                                                            kind: "Field",
                                                                            name: {
                                                                                kind: "Name",
                                                                                value: "fees"
                                                                            },
                                                                            selectionSet: {
                                                                                kind: "SelectionSet",
                                                                                selections: [
                                                                                    {
                                                                                        kind: "Field",
                                                                                        name: {
                                                                                            kind: "Name",
                                                                                            value: "estimatedFees"
                                                                                        }
                                                                                    },
                                                                                    {
                                                                                        kind: "Field",
                                                                                        name: {
                                                                                            kind: "Name",
                                                                                            value: "paidFees"
                                                                                        }
                                                                                    }
                                                                                ]
                                                                            }
                                                                        },
                                                                        {
                                                                            kind: "Field",
                                                                            name: {
                                                                                kind: "Name",
                                                                                value: "transactionResult"
                                                                            },
                                                                            selectionSet: {
                                                                                kind: "SelectionSet",
                                                                                selections: [
                                                                                    {
                                                                                        kind: "Field",
                                                                                        name: {
                                                                                            kind: "Name",
                                                                                            value: "status"
                                                                                        }
                                                                                    },
                                                                                    {
                                                                                        kind: "Field",
                                                                                        name: {
                                                                                            kind: "Name",
                                                                                            value: "segments"
                                                                                        },
                                                                                        selectionSet: {
                                                                                            kind: "SelectionSet",
                                                                                            selections: [
                                                                                                {
                                                                                                    kind: "Field",
                                                                                                    name: {
                                                                                                        kind: "Name",
                                                                                                        value: "id"
                                                                                                    }
                                                                                                },
                                                                                                {
                                                                                                    kind: "Field",
                                                                                                    name: {
                                                                                                        kind: "Name",
                                                                                                        value: "success"
                                                                                                    }
                                                                                                }
                                                                                            ]
                                                                                        }
                                                                                    }
                                                                                ]
                                                                            }
                                                                        }
                                                                    ]
                                                                }
                                                            }
                                                        ]
                                                    }
                                                }
                                            ]
                                        }
                                    },
                                    {
                                        kind: "InlineFragment",
                                        typeCondition: {
                                            kind: "NamedType",
                                            name: {
                                                kind: "Name",
                                                value: "ContractCall"
                                            }
                                        },
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [
                                                {
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "deploy"
                                                    },
                                                    selectionSet: {
                                                        kind: "SelectionSet",
                                                        selections: [
                                                            {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "transaction"
                                                                },
                                                                selectionSet: {
                                                                    kind: "SelectionSet",
                                                                    selections: [
                                                                        {
                                                                            kind: "Field",
                                                                            name: {
                                                                                kind: "Name",
                                                                                value: "id"
                                                                            }
                                                                        },
                                                                        {
                                                                            kind: "Field",
                                                                            name: {
                                                                                kind: "Name",
                                                                                value: "protocolVersion"
                                                                            }
                                                                        },
                                                                        {
                                                                            kind: "Field",
                                                                            name: {
                                                                                kind: "Name",
                                                                                value: "raw"
                                                                            }
                                                                        },
                                                                        {
                                                                            kind: "Field",
                                                                            name: {
                                                                                kind: "Name",
                                                                                value: "hash"
                                                                            }
                                                                        },
                                                                        {
                                                                            kind: "Field",
                                                                            name: {
                                                                                kind: "Name",
                                                                                value: "contractActions"
                                                                            },
                                                                            selectionSet: {
                                                                                kind: "SelectionSet",
                                                                                selections: [
                                                                                    {
                                                                                        kind: "Field",
                                                                                        name: {
                                                                                            kind: "Name",
                                                                                            value: "address"
                                                                                        }
                                                                                    }
                                                                                ]
                                                                            }
                                                                        },
                                                                        {
                                                                            kind: "Field",
                                                                            name: {
                                                                                kind: "Name",
                                                                                value: "block"
                                                                            },
                                                                            selectionSet: {
                                                                                kind: "SelectionSet",
                                                                                selections: [
                                                                                    {
                                                                                        kind: "Field",
                                                                                        name: {
                                                                                            kind: "Name",
                                                                                            value: "height"
                                                                                        }
                                                                                    },
                                                                                    {
                                                                                        kind: "Field",
                                                                                        name: {
                                                                                            kind: "Name",
                                                                                            value: "hash"
                                                                                        }
                                                                                    },
                                                                                    {
                                                                                        kind: "Field",
                                                                                        name: {
                                                                                            kind: "Name",
                                                                                            value: "author"
                                                                                        }
                                                                                    },
                                                                                    {
                                                                                        kind: "Field",
                                                                                        name: {
                                                                                            kind: "Name",
                                                                                            value: "timestamp"
                                                                                        }
                                                                                    }
                                                                                ]
                                                                            }
                                                                        },
                                                                        {
                                                                            kind: "Field",
                                                                            name: {
                                                                                kind: "Name",
                                                                                value: "unshieldedCreatedOutputs"
                                                                            },
                                                                            selectionSet: {
                                                                                kind: "SelectionSet",
                                                                                selections: [
                                                                                    {
                                                                                        kind: "Field",
                                                                                        name: {
                                                                                            kind: "Name",
                                                                                            value: "owner"
                                                                                        }
                                                                                    },
                                                                                    {
                                                                                        kind: "Field",
                                                                                        name: {
                                                                                            kind: "Name",
                                                                                            value: "intentHash"
                                                                                        }
                                                                                    },
                                                                                    {
                                                                                        kind: "Field",
                                                                                        name: {
                                                                                            kind: "Name",
                                                                                            value: "tokenType"
                                                                                        }
                                                                                    },
                                                                                    {
                                                                                        kind: "Field",
                                                                                        name: {
                                                                                            kind: "Name",
                                                                                            value: "value"
                                                                                        }
                                                                                    }
                                                                                ]
                                                                            }
                                                                        },
                                                                        {
                                                                            kind: "Field",
                                                                            name: {
                                                                                kind: "Name",
                                                                                value: "unshieldedSpentOutputs"
                                                                            },
                                                                            selectionSet: {
                                                                                kind: "SelectionSet",
                                                                                selections: [
                                                                                    {
                                                                                        kind: "Field",
                                                                                        name: {
                                                                                            kind: "Name",
                                                                                            value: "owner"
                                                                                        }
                                                                                    },
                                                                                    {
                                                                                        kind: "Field",
                                                                                        name: {
                                                                                            kind: "Name",
                                                                                            value: "intentHash"
                                                                                        }
                                                                                    },
                                                                                    {
                                                                                        kind: "Field",
                                                                                        name: {
                                                                                            kind: "Name",
                                                                                            value: "tokenType"
                                                                                        }
                                                                                    },
                                                                                    {
                                                                                        kind: "Field",
                                                                                        name: {
                                                                                            kind: "Name",
                                                                                            value: "value"
                                                                                        }
                                                                                    }
                                                                                ]
                                                                            }
                                                                        },
                                                                        {
                                                                            kind: "InlineFragment",
                                                                            typeCondition: {
                                                                                kind: "NamedType",
                                                                                name: {
                                                                                    kind: "Name",
                                                                                    value: "RegularTransaction"
                                                                                }
                                                                            },
                                                                            selectionSet: {
                                                                                kind: "SelectionSet",
                                                                                selections: [
                                                                                    {
                                                                                        kind: "Field",
                                                                                        name: {
                                                                                            kind: "Name",
                                                                                            value: "identifiers"
                                                                                        }
                                                                                    },
                                                                                    {
                                                                                        kind: "Field",
                                                                                        name: {
                                                                                            kind: "Name",
                                                                                            value: "fees"
                                                                                        },
                                                                                        selectionSet: {
                                                                                            kind: "SelectionSet",
                                                                                            selections: [
                                                                                                {
                                                                                                    kind: "Field",
                                                                                                    name: {
                                                                                                        kind: "Name",
                                                                                                        value: "estimatedFees"
                                                                                                    }
                                                                                                },
                                                                                                {
                                                                                                    kind: "Field",
                                                                                                    name: {
                                                                                                        kind: "Name",
                                                                                                        value: "paidFees"
                                                                                                    }
                                                                                                }
                                                                                            ]
                                                                                        }
                                                                                    },
                                                                                    {
                                                                                        kind: "Field",
                                                                                        name: {
                                                                                            kind: "Name",
                                                                                            value: "transactionResult"
                                                                                        },
                                                                                        selectionSet: {
                                                                                            kind: "SelectionSet",
                                                                                            selections: [
                                                                                                {
                                                                                                    kind: "Field",
                                                                                                    name: {
                                                                                                        kind: "Name",
                                                                                                        value: "status"
                                                                                                    }
                                                                                                },
                                                                                                {
                                                                                                    kind: "Field",
                                                                                                    name: {
                                                                                                        kind: "Name",
                                                                                                        value: "segments"
                                                                                                    },
                                                                                                    selectionSet: {
                                                                                                        kind: "SelectionSet",
                                                                                                        selections: [
                                                                                                            {
                                                                                                                kind: "Field",
                                                                                                                name: {
                                                                                                                    kind: "Name",
                                                                                                                    value: "id"
                                                                                                                }
                                                                                                            },
                                                                                                            {
                                                                                                                kind: "Field",
                                                                                                                name: {
                                                                                                                    kind: "Name",
                                                                                                                    value: "success"
                                                                                                                }
                                                                                                            }
                                                                                                        ]
                                                                                                    }
                                                                                                }
                                                                                            ]
                                                                                        }
                                                                                    }
                                                                                ]
                                                                            }
                                                                        }
                                                                    ]
                                                                }
                                                            }
                                                        ]
                                                    }
                                                }
                                            ]
                                        }
                                    }
                                ]
                            }
                        }
                    ]
                }
            }
        ]
    }, bl = {
        kind: "Document",
        definitions: [
            {
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "DEPLOY_CONTRACT_STATE_TX_QUERY"
                },
                variableDefinitions: [
                    {
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "address"
                            }
                        },
                        type: {
                            kind: "NonNullType",
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "HexEncoded"
                                }
                            }
                        }
                    }
                ],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                        {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "contractAction"
                            },
                            arguments: [
                                {
                                    kind: "Argument",
                                    name: {
                                        kind: "Name",
                                        value: "address"
                                    },
                                    value: {
                                        kind: "Variable",
                                        name: {
                                            kind: "Name",
                                            value: "address"
                                        }
                                    }
                                }
                            ],
                            selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                    {
                                        kind: "InlineFragment",
                                        typeCondition: {
                                            kind: "NamedType",
                                            name: {
                                                kind: "Name",
                                                value: "ContractDeploy"
                                            }
                                        },
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [
                                                {
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "state"
                                                    }
                                                }
                                            ]
                                        }
                                    },
                                    {
                                        kind: "InlineFragment",
                                        typeCondition: {
                                            kind: "NamedType",
                                            name: {
                                                kind: "Name",
                                                value: "ContractUpdate"
                                            }
                                        },
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [
                                                {
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "state"
                                                    }
                                                }
                                            ]
                                        }
                                    },
                                    {
                                        kind: "InlineFragment",
                                        typeCondition: {
                                            kind: "NamedType",
                                            name: {
                                                kind: "Name",
                                                value: "ContractCall"
                                            }
                                        },
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [
                                                {
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "deploy"
                                                    },
                                                    selectionSet: {
                                                        kind: "SelectionSet",
                                                        selections: [
                                                            {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "transaction"
                                                                },
                                                                selectionSet: {
                                                                    kind: "SelectionSet",
                                                                    selections: [
                                                                        {
                                                                            kind: "Field",
                                                                            name: {
                                                                                kind: "Name",
                                                                                value: "contractActions"
                                                                            },
                                                                            selectionSet: {
                                                                                kind: "SelectionSet",
                                                                                selections: [
                                                                                    {
                                                                                        kind: "Field",
                                                                                        name: {
                                                                                            kind: "Name",
                                                                                            value: "address"
                                                                                        }
                                                                                    },
                                                                                    {
                                                                                        kind: "Field",
                                                                                        name: {
                                                                                            kind: "Name",
                                                                                            value: "state"
                                                                                        }
                                                                                    }
                                                                                ]
                                                                            }
                                                                        }
                                                                    ]
                                                                }
                                                            }
                                                        ]
                                                    }
                                                }
                                            ]
                                        }
                                    }
                                ]
                            }
                        }
                    ]
                }
            }
        ]
    }, Sl = {
        kind: "Document",
        definitions: [
            {
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "LATEST_CONTRACT_TX_BLOCK_HEIGHT_QUERY"
                },
                variableDefinitions: [
                    {
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "address"
                            }
                        },
                        type: {
                            kind: "NonNullType",
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "HexEncoded"
                                }
                            }
                        }
                    }
                ],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                        {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "contractAction"
                            },
                            arguments: [
                                {
                                    kind: "Argument",
                                    name: {
                                        kind: "Name",
                                        value: "address"
                                    },
                                    value: {
                                        kind: "Variable",
                                        name: {
                                            kind: "Name",
                                            value: "address"
                                        }
                                    }
                                }
                            ],
                            selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                    {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "transaction"
                                        },
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [
                                                {
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "block"
                                                    },
                                                    selectionSet: {
                                                        kind: "SelectionSet",
                                                        selections: [
                                                            {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "height"
                                                                }
                                                            }
                                                        ]
                                                    }
                                                }
                                            ]
                                        }
                                    }
                                ]
                            }
                        }
                    ]
                }
            }
        ]
    }, wl = {
        kind: "Document",
        definitions: [
            {
                kind: "OperationDefinition",
                operation: "subscription",
                name: {
                    kind: "Name",
                    value: "TXS_FROM_BLOCK_SUB"
                },
                variableDefinitions: [
                    {
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "offset"
                            }
                        },
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "BlockOffset"
                            }
                        }
                    }
                ],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                        {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "blocks"
                            },
                            arguments: [
                                {
                                    kind: "Argument",
                                    name: {
                                        kind: "Name",
                                        value: "offset"
                                    },
                                    value: {
                                        kind: "Variable",
                                        name: {
                                            kind: "Name",
                                            value: "offset"
                                        }
                                    }
                                }
                            ],
                            selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                    {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "hash"
                                        }
                                    },
                                    {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "height"
                                        }
                                    },
                                    {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "transactions"
                                        },
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [
                                                {
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "hash"
                                                    }
                                                },
                                                {
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "contractActions"
                                                    },
                                                    selectionSet: {
                                                        kind: "SelectionSet",
                                                        selections: [
                                                            {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "state"
                                                                }
                                                            },
                                                            {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "address"
                                                                }
                                                            }
                                                        ]
                                                    }
                                                },
                                                {
                                                    kind: "InlineFragment",
                                                    typeCondition: {
                                                        kind: "NamedType",
                                                        name: {
                                                            kind: "Name",
                                                            value: "RegularTransaction"
                                                        }
                                                    },
                                                    selectionSet: {
                                                        kind: "SelectionSet",
                                                        selections: [
                                                            {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "identifiers"
                                                                }
                                                            }
                                                        ]
                                                    }
                                                }
                                            ]
                                        }
                                    }
                                ]
                            }
                        }
                    ]
                }
            }
        ]
    }, Nl = {
        kind: "Document",
        definitions: [
            {
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "CONTRACT_STATE_QUERY"
                },
                variableDefinitions: [
                    {
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "address"
                            }
                        },
                        type: {
                            kind: "NonNullType",
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "HexEncoded"
                                }
                            }
                        }
                    },
                    {
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "offset"
                            }
                        },
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "ContractActionOffset"
                            }
                        }
                    }
                ],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                        {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "contractAction"
                            },
                            arguments: [
                                {
                                    kind: "Argument",
                                    name: {
                                        kind: "Name",
                                        value: "address"
                                    },
                                    value: {
                                        kind: "Variable",
                                        name: {
                                            kind: "Name",
                                            value: "address"
                                        }
                                    }
                                },
                                {
                                    kind: "Argument",
                                    name: {
                                        kind: "Name",
                                        value: "offset"
                                    },
                                    value: {
                                        kind: "Variable",
                                        name: {
                                            kind: "Name",
                                            value: "offset"
                                        }
                                    }
                                }
                            ],
                            selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                    {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "state"
                                        }
                                    }
                                ]
                            }
                        }
                    ]
                }
            }
        ]
    }, El = {
        kind: "Document",
        definitions: [
            {
                kind: "OperationDefinition",
                operation: "subscription",
                name: {
                    kind: "Name",
                    value: "CONTRACT_STATE_SUB"
                },
                variableDefinitions: [
                    {
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "address"
                            }
                        },
                        type: {
                            kind: "NonNullType",
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "HexEncoded"
                                }
                            }
                        }
                    },
                    {
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "offset"
                            }
                        },
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "BlockOffset"
                            }
                        }
                    }
                ],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                        {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "contractActions"
                            },
                            arguments: [
                                {
                                    kind: "Argument",
                                    name: {
                                        kind: "Name",
                                        value: "address"
                                    },
                                    value: {
                                        kind: "Variable",
                                        name: {
                                            kind: "Name",
                                            value: "address"
                                        }
                                    }
                                },
                                {
                                    kind: "Argument",
                                    name: {
                                        kind: "Name",
                                        value: "offset"
                                    },
                                    value: {
                                        kind: "Variable",
                                        name: {
                                            kind: "Name",
                                            value: "offset"
                                        }
                                    }
                                }
                            ],
                            selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                    {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "state"
                                        }
                                    }
                                ]
                            }
                        }
                    ]
                }
            }
        ]
    }, Fl = {
        kind: "Document",
        definitions: [
            {
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "BOTH_STATE_QUERY"
                },
                variableDefinitions: [
                    {
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "address"
                            }
                        },
                        type: {
                            kind: "NonNullType",
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "HexEncoded"
                                }
                            }
                        }
                    },
                    {
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "offset"
                            }
                        },
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "ContractActionOffset"
                            }
                        }
                    }
                ],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                        {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "contractAction"
                            },
                            arguments: [
                                {
                                    kind: "Argument",
                                    name: {
                                        kind: "Name",
                                        value: "address"
                                    },
                                    value: {
                                        kind: "Variable",
                                        name: {
                                            kind: "Name",
                                            value: "address"
                                        }
                                    }
                                },
                                {
                                    kind: "Argument",
                                    name: {
                                        kind: "Name",
                                        value: "offset"
                                    },
                                    value: {
                                        kind: "Variable",
                                        name: {
                                            kind: "Name",
                                            value: "offset"
                                        }
                                    }
                                }
                            ],
                            selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                    {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "state"
                                        }
                                    },
                                    {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "zswapState"
                                        }
                                    },
                                    {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "transaction"
                                        },
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [
                                                {
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "block"
                                                    },
                                                    selectionSet: {
                                                        kind: "SelectionSet",
                                                        selections: [
                                                            {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "ledgerParameters"
                                                                }
                                                            }
                                                        ]
                                                    }
                                                }
                                            ]
                                        }
                                    }
                                ]
                            }
                        }
                    ]
                }
            }
        ]
    }, Tl = {
        kind: "Document",
        definitions: [
            {
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "UNSHIELDED_BALANCE_QUERY"
                },
                variableDefinitions: [
                    {
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "address"
                            }
                        },
                        type: {
                            kind: "NonNullType",
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "HexEncoded"
                                }
                            }
                        }
                    }
                ],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                        {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "contractAction"
                            },
                            arguments: [
                                {
                                    kind: "Argument",
                                    name: {
                                        kind: "Name",
                                        value: "address"
                                    },
                                    value: {
                                        kind: "Variable",
                                        name: {
                                            kind: "Name",
                                            value: "address"
                                        }
                                    }
                                }
                            ],
                            selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                    {
                                        kind: "InlineFragment",
                                        typeCondition: {
                                            kind: "NamedType",
                                            name: {
                                                kind: "Name",
                                                value: "ContractDeploy"
                                            }
                                        },
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [
                                                {
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "unshieldedBalances"
                                                    },
                                                    selectionSet: {
                                                        kind: "SelectionSet",
                                                        selections: [
                                                            {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "tokenType"
                                                                }
                                                            },
                                                            {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "amount"
                                                                }
                                                            }
                                                        ]
                                                    }
                                                }
                                            ]
                                        }
                                    },
                                    {
                                        kind: "InlineFragment",
                                        typeCondition: {
                                            kind: "NamedType",
                                            name: {
                                                kind: "Name",
                                                value: "ContractUpdate"
                                            }
                                        },
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [
                                                {
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "unshieldedBalances"
                                                    },
                                                    selectionSet: {
                                                        kind: "SelectionSet",
                                                        selections: [
                                                            {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "tokenType"
                                                                }
                                                            },
                                                            {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "amount"
                                                                }
                                                            }
                                                        ]
                                                    }
                                                }
                                            ]
                                        }
                                    },
                                    {
                                        kind: "InlineFragment",
                                        typeCondition: {
                                            kind: "NamedType",
                                            name: {
                                                kind: "Name",
                                                value: "ContractCall"
                                            }
                                        },
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [
                                                {
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "deploy"
                                                    },
                                                    selectionSet: {
                                                        kind: "SelectionSet",
                                                        selections: [
                                                            {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "unshieldedBalances"
                                                                },
                                                                selectionSet: {
                                                                    kind: "SelectionSet",
                                                                    selections: [
                                                                        {
                                                                            kind: "Field",
                                                                            name: {
                                                                                kind: "Name",
                                                                                value: "tokenType"
                                                                            }
                                                                        },
                                                                        {
                                                                            kind: "Field",
                                                                            name: {
                                                                                kind: "Name",
                                                                                value: "amount"
                                                                            }
                                                                        }
                                                                    ]
                                                                }
                                                            }
                                                        ]
                                                    }
                                                }
                                            ]
                                        }
                                    }
                                ]
                            }
                        }
                    ]
                }
            }
        ]
    }, Ol = {
        kind: "Document",
        definitions: [
            {
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "QUERY_UNSHIELDED_BALANCES_WITH_OFFSET"
                },
                variableDefinitions: [
                    {
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "address"
                            }
                        },
                        type: {
                            kind: "NonNullType",
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "HexEncoded"
                                }
                            }
                        }
                    },
                    {
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "offset"
                            }
                        },
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "ContractActionOffset"
                            }
                        }
                    }
                ],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                        {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "contractAction"
                            },
                            arguments: [
                                {
                                    kind: "Argument",
                                    name: {
                                        kind: "Name",
                                        value: "address"
                                    },
                                    value: {
                                        kind: "Variable",
                                        name: {
                                            kind: "Name",
                                            value: "address"
                                        }
                                    }
                                },
                                {
                                    kind: "Argument",
                                    name: {
                                        kind: "Name",
                                        value: "offset"
                                    },
                                    value: {
                                        kind: "Variable",
                                        name: {
                                            kind: "Name",
                                            value: "offset"
                                        }
                                    }
                                }
                            ],
                            selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                    {
                                        kind: "InlineFragment",
                                        typeCondition: {
                                            kind: "NamedType",
                                            name: {
                                                kind: "Name",
                                                value: "ContractDeploy"
                                            }
                                        },
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [
                                                {
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "unshieldedBalances"
                                                    },
                                                    selectionSet: {
                                                        kind: "SelectionSet",
                                                        selections: [
                                                            {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "tokenType"
                                                                }
                                                            },
                                                            {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "amount"
                                                                }
                                                            }
                                                        ]
                                                    }
                                                }
                                            ]
                                        }
                                    },
                                    {
                                        kind: "InlineFragment",
                                        typeCondition: {
                                            kind: "NamedType",
                                            name: {
                                                kind: "Name",
                                                value: "ContractUpdate"
                                            }
                                        },
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [
                                                {
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "unshieldedBalances"
                                                    },
                                                    selectionSet: {
                                                        kind: "SelectionSet",
                                                        selections: [
                                                            {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "tokenType"
                                                                }
                                                            },
                                                            {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "amount"
                                                                }
                                                            }
                                                        ]
                                                    }
                                                }
                                            ]
                                        }
                                    },
                                    {
                                        kind: "InlineFragment",
                                        typeCondition: {
                                            kind: "NamedType",
                                            name: {
                                                kind: "Name",
                                                value: "ContractCall"
                                            }
                                        },
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [
                                                {
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "deploy"
                                                    },
                                                    selectionSet: {
                                                        kind: "SelectionSet",
                                                        selections: [
                                                            {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "unshieldedBalances"
                                                                },
                                                                selectionSet: {
                                                                    kind: "SelectionSet",
                                                                    selections: [
                                                                        {
                                                                            kind: "Field",
                                                                            name: {
                                                                                kind: "Name",
                                                                                value: "tokenType"
                                                                            }
                                                                        },
                                                                        {
                                                                            kind: "Field",
                                                                            name: {
                                                                                kind: "Name",
                                                                                value: "amount"
                                                                            }
                                                                        }
                                                                    ]
                                                                }
                                                            }
                                                        ]
                                                    }
                                                }
                                            ]
                                        }
                                    }
                                ]
                            }
                        }
                    ]
                }
            }
        ]
    }, Cl = {
        kind: "Document",
        definitions: [
            {
                kind: "OperationDefinition",
                operation: "subscription",
                name: {
                    kind: "Name",
                    value: "UNSHIELDED_BALANCE_SUB"
                },
                variableDefinitions: [
                    {
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "address"
                            }
                        },
                        type: {
                            kind: "NonNullType",
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "HexEncoded"
                                }
                            }
                        }
                    },
                    {
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "offset"
                            }
                        },
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "BlockOffset"
                            }
                        }
                    }
                ],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                        {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "contractActions"
                            },
                            arguments: [
                                {
                                    kind: "Argument",
                                    name: {
                                        kind: "Name",
                                        value: "address"
                                    },
                                    value: {
                                        kind: "Variable",
                                        name: {
                                            kind: "Name",
                                            value: "address"
                                        }
                                    }
                                },
                                {
                                    kind: "Argument",
                                    name: {
                                        kind: "Name",
                                        value: "offset"
                                    },
                                    value: {
                                        kind: "Variable",
                                        name: {
                                            kind: "Name",
                                            value: "offset"
                                        }
                                    }
                                }
                            ],
                            selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                    {
                                        kind: "InlineFragment",
                                        typeCondition: {
                                            kind: "NamedType",
                                            name: {
                                                kind: "Name",
                                                value: "ContractDeploy"
                                            }
                                        },
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [
                                                {
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "unshieldedBalances"
                                                    },
                                                    selectionSet: {
                                                        kind: "SelectionSet",
                                                        selections: [
                                                            {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "tokenType"
                                                                }
                                                            },
                                                            {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "amount"
                                                                }
                                                            }
                                                        ]
                                                    }
                                                }
                                            ]
                                        }
                                    },
                                    {
                                        kind: "InlineFragment",
                                        typeCondition: {
                                            kind: "NamedType",
                                            name: {
                                                kind: "Name",
                                                value: "ContractUpdate"
                                            }
                                        },
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [
                                                {
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "unshieldedBalances"
                                                    },
                                                    selectionSet: {
                                                        kind: "SelectionSet",
                                                        selections: [
                                                            {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "tokenType"
                                                                }
                                                            },
                                                            {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "amount"
                                                                }
                                                            }
                                                        ]
                                                    }
                                                }
                                            ]
                                        }
                                    },
                                    {
                                        kind: "InlineFragment",
                                        typeCondition: {
                                            kind: "NamedType",
                                            name: {
                                                kind: "Name",
                                                value: "ContractCall"
                                            }
                                        },
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [
                                                {
                                                    kind: "Field",
                                                    name: {
                                                        kind: "Name",
                                                        value: "deploy"
                                                    },
                                                    selectionSet: {
                                                        kind: "SelectionSet",
                                                        selections: [
                                                            {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "unshieldedBalances"
                                                                },
                                                                selectionSet: {
                                                                    kind: "SelectionSet",
                                                                    selections: [
                                                                        {
                                                                            kind: "Field",
                                                                            name: {
                                                                                kind: "Name",
                                                                                value: "tokenType"
                                                                            }
                                                                        },
                                                                        {
                                                                            kind: "Field",
                                                                            name: {
                                                                                kind: "Name",
                                                                                value: "amount"
                                                                            }
                                                                        }
                                                                    ]
                                                                }
                                                            }
                                                        ]
                                                    }
                                                }
                                            ]
                                        }
                                    }
                                ]
                            }
                        }
                    ]
                }
            }
        ]
    }, Dl = {
        "\n  query BLOCK_HASH_QUERY($offset: BlockOffset) {\n    block(offset: $offset) {\n      height\n      hash\n    }\n  }": kl,
        "\n  query TX_ID_QUERY($offset: TransactionOffset!) {\n    transactions(offset: $offset) {\n      id\n      protocolVersion\n      raw\n      hash\n      unshieldedCreatedOutputs {\n        owner\n        intentHash\n        tokenType\n        value\n      }\n      unshieldedSpentOutputs {\n        owner\n        intentHash\n        tokenType\n        value\n      }\n      block {\n        height\n        hash\n        author\n        timestamp\n      }\n      ... on RegularTransaction {\n        identifiers\n        fees {\n          estimatedFees\n          paidFees\n        }\n        transactionResult {\n          status\n          segments {\n            id\n            success\n          }\n        }\n      }\n    }\n  }": vl,
        "\n  query DEPLOY_TX_QUERY($address: HexEncoded!) {\n    contractAction(address: $address) {\n      ... on ContractDeploy {\n        transaction {\n          id\n          protocolVersion\n	        raw\n          hash\n          contractActions {\n            address\n          }\n          block {\n            height\n            hash\n            author\n            timestamp\n          }\n          unshieldedCreatedOutputs {\n            owner\n            intentHash\n            tokenType\n            value\n          }\n          unshieldedSpentOutputs {\n            owner\n            intentHash\n            tokenType\n            value\n          }\n          ... on RegularTransaction {\n            identifiers\n            fees {\n              estimatedFees\n              paidFees\n            }\n            transactionResult {\n              status\n              segments {\n                id\n                success\n              }\n            }\n          }\n        }\n      }\n      ... on ContractUpdate {\n        transaction {\n          id\n          protocolVersion\n	        raw\n          hash\n          contractActions {\n            address\n          }\n          block {\n            height\n            hash\n            author\n            timestamp\n          }\n          unshieldedCreatedOutputs {\n            owner\n            intentHash\n            tokenType\n            value\n          }\n          unshieldedSpentOutputs {\n            owner\n            intentHash\n            tokenType\n            value\n          }\n          ... on RegularTransaction {\n            identifiers\n            fees {\n              estimatedFees\n              paidFees\n            }\n            transactionResult {\n              status\n              segments {\n                id\n                success\n              }\n            }\n          }\n        }\n      }\n      ... on ContractCall {\n        deploy {\n          transaction {\n            id\n            protocolVersion\n	          raw\n            hash\n            contractActions {\n              address\n            }\n            block {\n              height\n              hash\n              author\n              timestamp\n            }\n            unshieldedCreatedOutputs {\n              owner\n              intentHash\n              tokenType\n              value\n            }\n            unshieldedSpentOutputs {\n              owner\n              intentHash\n              tokenType\n              value\n            }\n            ... on RegularTransaction {\n              identifiers\n              fees {\n                estimatedFees\n                paidFees\n              }\n              transactionResult {\n                status\n                segments {\n                  id\n                  success\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  }": gl,
        "\n  query DEPLOY_CONTRACT_STATE_TX_QUERY($address: HexEncoded!) {\n    contractAction(address: $address) {\n      ... on ContractDeploy {\n        state\n      }\n      ... on ContractUpdate {\n        state\n      }\n      ... on ContractCall {\n        deploy {\n          transaction {\n            contractActions {\n              address\n              state\n            }\n          }\n        }\n      }\n    }\n  }": bl,
        "\n  query LATEST_CONTRACT_TX_BLOCK_HEIGHT_QUERY($address: HexEncoded!) {\n    contractAction(address: $address) {\n      transaction {\n        block {\n          height\n        }\n      }\n    }\n  }": Sl,
        "\n  subscription TXS_FROM_BLOCK_SUB($offset: BlockOffset) {\n    blocks(offset: $offset) {\n      hash,\n      height,\n      transactions {\n        hash\n        contractActions {\n          state\n          address\n        }\n        ... on RegularTransaction {\n          identifiers\n        }\n      }\n    }\n  }": wl,
        "\n  query CONTRACT_STATE_QUERY($address: HexEncoded!, $offset: ContractActionOffset) {\n    contractAction(address: $address, offset: $offset) {\n      state\n    }\n  }": Nl,
        "\n  subscription CONTRACT_STATE_SUB($address: HexEncoded!, $offset: BlockOffset) {\n    contractActions(address: $address, offset: $offset) {\n      state\n    }\n  }": El,
        "\n  query BOTH_STATE_QUERY($address: HexEncoded!, $offset: ContractActionOffset) {\n    contractAction(address: $address, offset: $offset) {\n      state\n      zswapState\n      transaction {\n        block {\n          ledgerParameters\n        }\n      }\n    }\n  }": Fl,
        "\n  query UNSHIELDED_BALANCE_QUERY($address: HexEncoded!) {\n    contractAction(address: $address) {\n      ... on ContractDeploy {\n        unshieldedBalances {\n          tokenType\n          amount\n        }\n      }\n      ... on ContractUpdate {\n        unshieldedBalances {\n          tokenType\n          amount\n        }\n      }\n      ... on ContractCall {\n        deploy {\n          unshieldedBalances {\n            tokenType\n            amount\n          }\n        }\n      }\n    }\n  }": Tl,
        "\n  query QUERY_UNSHIELDED_BALANCES_WITH_OFFSET($address: HexEncoded!, $offset: ContractActionOffset) {\n    contractAction(address: $address, offset: $offset) {\n      ... on ContractDeploy {\n        unshieldedBalances {\n          tokenType\n          amount\n        }\n      }\n      ... on ContractUpdate {\n        unshieldedBalances {\n          tokenType\n          amount\n        }\n      }\n      ... on ContractCall {\n        deploy {\n          unshieldedBalances {\n            tokenType\n            amount\n          }\n        }\n      }\n    }\n  }": Ol,
        "\n  subscription UNSHIELDED_BALANCE_SUB($address: HexEncoded!, $offset: BlockOffset) {\n    contractActions(address: $address, offset: $offset) {\n      ... on ContractDeploy {\n        unshieldedBalances {\n          tokenType\n          amount\n        }\n      }\n      ... on ContractUpdate {\n        unshieldedBalances {\n          tokenType\n          amount\n        }\n      }\n      ... on ContractCall {\n        deploy {\n          unshieldedBalances {\n            tokenType\n            amount\n          }\n        }\n      }\n    }\n  }": Cl
    };
    function ne(t) {
        return Dl[t] ?? {};
    }
    let Il, Ns, _l, Al, xl, Rl, Es, Pl, Ml, Vl, ql, Bl, Fs, un, Ie, Yn, Lt, Te, jl, Ts, Ll, _e, En, Ul, Ql, Ki, zl, Hl, Zi, er, Yl, tr, nr, ir, dn, Gl;
    Il = ne(`
  query BLOCK_HASH_QUERY($offset: BlockOffset) {
    block(offset: $offset) {
      height
      hash
    }
  }`);
    Ns = ne(`
  query TX_ID_QUERY($offset: TransactionOffset!) {
    transactions(offset: $offset) {
      id
      protocolVersion
      raw
      hash
      unshieldedCreatedOutputs {
        owner
        intentHash
        tokenType
        value
      }
      unshieldedSpentOutputs {
        owner
        intentHash
        tokenType
        value
      }
      block {
        height
        hash
        author
        timestamp
      }
      ... on RegularTransaction {
        identifiers
        fees {
          estimatedFees
          paidFees
        }
        transactionResult {
          status
          segments {
            id
            success
          }
        }
      }
    }
  }`);
    _l = ne(`
  query DEPLOY_TX_QUERY($address: HexEncoded!) {
    contractAction(address: $address) {
      ... on ContractDeploy {
        transaction {
          id
          protocolVersion
	        raw
          hash
          contractActions {
            address
          }
          block {
            height
            hash
            author
            timestamp
          }
          unshieldedCreatedOutputs {
            owner
            intentHash
            tokenType
            value
          }
          unshieldedSpentOutputs {
            owner
            intentHash
            tokenType
            value
          }
          ... on RegularTransaction {
            identifiers
            fees {
              estimatedFees
              paidFees
            }
            transactionResult {
              status
              segments {
                id
                success
              }
            }
          }
        }
      }
      ... on ContractUpdate {
        transaction {
          id
          protocolVersion
	        raw
          hash
          contractActions {
            address
          }
          block {
            height
            hash
            author
            timestamp
          }
          unshieldedCreatedOutputs {
            owner
            intentHash
            tokenType
            value
          }
          unshieldedSpentOutputs {
            owner
            intentHash
            tokenType
            value
          }
          ... on RegularTransaction {
            identifiers
            fees {
              estimatedFees
              paidFees
            }
            transactionResult {
              status
              segments {
                id
                success
              }
            }
          }
        }
      }
      ... on ContractCall {
        deploy {
          transaction {
            id
            protocolVersion
	          raw
            hash
            contractActions {
              address
            }
            block {
              height
              hash
              author
              timestamp
            }
            unshieldedCreatedOutputs {
              owner
              intentHash
              tokenType
              value
            }
            unshieldedSpentOutputs {
              owner
              intentHash
              tokenType
              value
            }
            ... on RegularTransaction {
              identifiers
              fees {
                estimatedFees
                paidFees
              }
              transactionResult {
                status
                segments {
                  id
                  success
                }
              }
            }
          }
        }
      }
    }
  }`);
    Al = ne(`
  query DEPLOY_CONTRACT_STATE_TX_QUERY($address: HexEncoded!) {
    contractAction(address: $address) {
      ... on ContractDeploy {
        state
      }
      ... on ContractUpdate {
        state
      }
      ... on ContractCall {
        deploy {
          transaction {
            contractActions {
              address
              state
            }
          }
        }
      }
    }
  }`);
    xl = ne(`
  query LATEST_CONTRACT_TX_BLOCK_HEIGHT_QUERY($address: HexEncoded!) {
    contractAction(address: $address) {
      transaction {
        block {
          height
        }
      }
    }
  }`);
    Rl = ne(`
  subscription TXS_FROM_BLOCK_SUB($offset: BlockOffset) {
    blocks(offset: $offset) {
      hash,
      height,
      transactions {
        hash
        contractActions {
          state
          address
        }
        ... on RegularTransaction {
          identifiers
        }
      }
    }
  }`);
    Es = ne(`
  query CONTRACT_STATE_QUERY($address: HexEncoded!, $offset: ContractActionOffset) {
    contractAction(address: $address, offset: $offset) {
      state
    }
  }`);
    Pl = ne(`
  subscription CONTRACT_STATE_SUB($address: HexEncoded!, $offset: BlockOffset) {
    contractActions(address: $address, offset: $offset) {
      state
    }
  }`);
    Ml = ne(`
  query BOTH_STATE_QUERY($address: HexEncoded!, $offset: ContractActionOffset) {
    contractAction(address: $address, offset: $offset) {
      state
      zswapState
      transaction {
        block {
          ledgerParameters
        }
      }
    }
  }`);
    Vl = ne(`
  query UNSHIELDED_BALANCE_QUERY($address: HexEncoded!) {
    contractAction(address: $address) {
      ... on ContractDeploy {
        unshieldedBalances {
          tokenType
          amount
        }
      }
      ... on ContractUpdate {
        unshieldedBalances {
          tokenType
          amount
        }
      }
      ... on ContractCall {
        deploy {
          unshieldedBalances {
            tokenType
            amount
          }
        }
      }
    }
  }`);
    ql = ne(`
  query QUERY_UNSHIELDED_BALANCES_WITH_OFFSET($address: HexEncoded!, $offset: ContractActionOffset) {
    contractAction(address: $address, offset: $offset) {
      ... on ContractDeploy {
        unshieldedBalances {
          tokenType
          amount
        }
      }
      ... on ContractUpdate {
        unshieldedBalances {
          tokenType
          amount
        }
      }
      ... on ContractCall {
        deploy {
          unshieldedBalances {
            tokenType
            amount
          }
        }
      }
    }
  }`);
    Bl = ne(`
  subscription UNSHIELDED_BALANCE_SUB($address: HexEncoded!, $offset: BlockOffset) {
    contractActions(address: $address, offset: $offset) {
      ... on ContractDeploy {
        unshieldedBalances {
          tokenType
          amount
        }
      }
      ... on ContractUpdate {
        unshieldedBalances {
          tokenType
          amount
        }
      }
      ... on ContractCall {
        deploy {
          unshieldedBalances {
            tokenType
            amount
          }
        }
      }
    }
  }`);
    ln = (t)=>"identifiers" in t && "hash" in t && Array.isArray(t.identifiers);
    Fs = (t)=>t.contractAction != null;
    un = (t)=>{
        if (t.error) throw new ws(t.error.message, {
            cause: t.error
        });
        return t;
    };
    Ie = ()=>hr(W((t)=>{
            if (t.error) throw new ws(t.error.message, {
                cause: t.error
            });
            return t.dataState === "complete";
        }), _((t)=>t.data));
    Yn = ()=>hr(_((t)=>{
            if (t.errors && t.errors.length > 0) throw new pl(t.errors);
            return t.data;
        }), W((t)=>t != null));
    Lt = (t)=>$s.Buffer.from(t, "hex");
    Te = (t)=>Vs.deserialize(Lt(t));
    jl = (t)=>Qs.deserialize(Lt(t));
    Ts = (t)=>zs.deserialize("signature", "proof", "binding", Lt(t));
    Ll = (t)=>ur.deserialize(Lt(t));
    _e = 1e3;
    En = (t)=>(e)=>t.subscribe({
                query: Rl,
                variables: {
                    offset: e
                },
                fetchPolicy: "no-cache"
            }).pipe(Yn(), _((n)=>{
                const i = n.blocks;
                if (!i) throw new Hn("blocks");
                return {
                    hash: i.hash,
                    height: i.height,
                    transactions: i.transactions.filter((r)=>"identifiers" in r).map((r)=>({
                            hash: r.hash,
                            identifiers: r.identifiers,
                            contractActions: r.contractActions
                        }))
                };
            }));
    Ul = (t)=>(e)=>t.watchQuery({
                query: Ns,
                variables: {
                    offset: {
                        identifier: e
                    }
                },
                pollInterval: _e,
                fetchPolicy: "no-cache",
                initialFetchPolicy: "no-cache",
                nextFetchPolicy: "no-cache"
            }).pipe(Ie(), W((n)=>n.transactions.length !== 0), _((n)=>({
                    height: n.transactions[0].block.height
                })), Z(En(t)), Z(({ transactions: n })=>oe(n)));
    Ql = (t)=>({ identifiers: e, contractActions: n })=>Wa(e, n).pipe(Xa((i)=>i[0] !== t), _((i)=>Te(i[1].state)));
    Os = (t)=>{
        const e = t.status, n = {
            FAILURE: Us,
            PARTIAL_SUCCESS: Ls,
            SUCCESS: js
        };
        if (e === "FAILURE" || e === "PARTIAL_SUCCESS" || e === "SUCCESS") return n[e];
        throw ge.unknownStatus(e);
    };
    $l = (t)=>t ? qs : Bs;
    Cs = (t)=>{
        if (t.status === "PARTIAL_SUCCESS" && t.segments) return new Map(t.segments.map((e)=>[
                e.id,
                $l(e.success)
            ]));
    };
    Ki = (t)=>({
            owner: t.owner,
            intentHash: t.intentHash,
            tokenType: t.tokenType,
            value: BigInt(t.value)
        });
    Ds = (t, e)=>({
            created: t.map(Ki),
            spent: e.map(Ki)
        });
    zl = (t)=>({
            balance: BigInt(t.amount),
            tokenType: t.tokenType
        });
    Fn = (t)=>t.map(zl);
    Wl = (t, e, n)=>{
        const i = e.findIndex(({ address: s })=>s === t), r = i >= 0 ? n[i] : void 0;
        if (typeof r != "string" || r.length === 0) throw ge.missingIdentifier(t, i, n.length);
        return r;
    };
    Hl = (t, e)=>({
            tx: Ts(e.raw),
            status: Os(e.transactionResult),
            txId: Wl(t, e.contractActions, e.identifiers),
            identifiers: e.identifiers,
            txHash: e.hash,
            blockHeight: e.block.height,
            blockHash: e.block.hash,
            blockTimestamp: e.block.timestamp,
            blockAuthor: e.block.author,
            segmentStatusMap: Cs(e.transactionResult),
            unshielded: Ds(e.unshieldedCreatedOutputs, e.unshieldedSpentOutputs),
            indexerId: e.id,
            protocolVersion: e.protocolVersion,
            fees: {
                estimatedFees: e.fees.estimatedFees,
                paidFees: e.fees.paidFees
            }
        });
    Zi = (t)=>(e)=>oe(e.transactions).pipe(Z(({ contractActions: n })=>oe(n)), W((n)=>n.address === t), _((n)=>Te(n.state)));
    er = (t)=>(e)=>t.watchQuery({
                query: xl,
                variables: {
                    address: e
                },
                pollInterval: _e,
                fetchPolicy: "no-cache",
                initialFetchPolicy: "no-cache",
                nextFetchPolicy: "no-cache"
            }).pipe(Ie(), W((n)=>n.contractAction !== null), _((n)=>n.contractAction.transaction.block.height), _t(1), _((n)=>({
                    height: n
                })));
    Yl = (t)=>(e)=>(n)=>t.subscribe({
                    query: Pl,
                    variables: {
                        address: e,
                        offset: n
                    },
                    fetchPolicy: "no-cache"
                }).pipe(Yn(), _((i)=>{
                    const r = i.contractActions;
                    if (!r) throw new Hn("contractActions");
                    return r.state;
                }), _(Te));
    tr = (t)=>(e)=>(n)=>t.watchQuery({
                    query: Es,
                    variables: {
                        address: e,
                        offset: n
                    },
                    pollInterval: _e,
                    fetchPolicy: "no-cache",
                    initialFetchPolicy: "no-cache",
                    nextFetchPolicy: "no-cache"
                }).pipe(Ie(), W(Fs), _((i)=>i.contractAction.state), _t(1));
    nr = (t)=>(e)=>t.watchQuery({
                query: Il,
                variables: {
                    offset: e
                },
                pollInterval: _e,
                fetchPolicy: "no-cache",
                initialFetchPolicy: "no-cache",
                nextFetchPolicy: "no-cache"
            }).pipe(Ie(), W((n)=>n.block !== null), _t(1));
    ir = (t)=>(e)=>t.watchQuery({
                query: Vl,
                variables: {
                    address: e
                },
                pollInterval: _e,
                fetchPolicy: "no-cache",
                initialFetchPolicy: "no-cache",
                nextFetchPolicy: "no-cache"
            }).pipe(Ie(), W(Fs), _((n)=>{
                const { contractAction: i } = n;
                return "unshieldedBalances" in i ? i.unshieldedBalances : "deploy" in i ? i.deploy.unshieldedBalances : [];
            }), _t(1));
    dn = (t)=>(e)=>(n)=>t.subscribe({
                    query: Bl,
                    variables: {
                        address: e,
                        offset: n
                    },
                    fetchPolicy: "no-cache"
                }).pipe(Yn(), _((i)=>{
                    const r = i.contractActions;
                    if (!r) throw new Hn("contractActions");
                    return "unshieldedBalances" in r ? r.unshieldedBalances : "deploy" in r ? r.deploy.unshieldedBalances : [];
                }), _(Fn));
    Gl = (t, e, n = void 0)=>{
        const i = new URL(t);
        if (i.protocol !== "http:" && i.protocol !== "https:") throw new Zn(i.protocol, [
            "http:",
            "https:"
        ]);
        const r = new URL(e);
        if (r.protocol !== "ws:" && r.protocol !== "wss:") throw new Zn(r.protocol, [
            "ws:",
            "wss:"
        ]);
        ei(t, "indexer query URL"), ei(e, "indexer subscription URL");
        const s = new tl({
            fetch: Ws,
            uri: t
        }), a = new sl({
            delay: {
                initial: 1e3,
                max: 1e4,
                jitter: !0
            },
            attempts: {
                max: 5
            }
        }), o = ec([
            a,
            s
        ]), c = new Rc({
            link: tc(({ query: l })=>{
                const u = Vn(l);
                return u.kind === "OperationDefinition" && u.operation === "subscription";
            }, new cl(fl({
                url: e,
                webSocketImpl: n
            })), o),
            cache: new Cc
        });
        return {
            async queryContractState (l, u) {
                let f;
                u ? f = {
                    blockOffset: u.type === "blockHeight" ? {
                        height: u.blockHeight
                    } : {
                        hash: u.blockHash
                    }
                } : f = null;
                const d = await c.query({
                    query: Es,
                    variables: {
                        address: l,
                        offset: f
                    },
                    fetchPolicy: "no-cache"
                }).then(un).then((h)=>h.data?.contractAction?.state ?? null);
                return d ? Te(d) : null;
            },
            async queryZSwapAndContractState (l, u) {
                let f;
                u ? f = {
                    blockOffset: u.type === "blockHeight" ? {
                        height: u.blockHeight
                    } : {
                        hash: u.blockHash
                    }
                } : f = null;
                const d = await c.query({
                    query: Ml,
                    variables: {
                        address: l,
                        offset: f
                    },
                    fetchPolicy: "no-cache"
                }).then(un).then((h)=>h.data?.contractAction);
                return d ? [
                    jl(d.zswapState),
                    Te(d.state),
                    d.transaction?.block?.ledgerParameters ? Ll(d.transaction.block.ledgerParameters) : ur.initialParameters()
                ] : null;
            },
            async queryUnshieldedBalances (l, u) {
                let f;
                u ? f = {
                    blockOffset: u.type === "blockHeight" ? {
                        height: u.blockHeight
                    } : {
                        hash: u.blockHash
                    }
                } : f = null;
                const d = await c.query({
                    query: ql,
                    variables: {
                        address: l,
                        offset: f
                    },
                    fetchPolicy: "no-cache"
                }).then(un).then((h)=>{
                    const p = h.data?.contractAction;
                    return p ? "unshieldedBalances" in p ? p.unshieldedBalances : "deploy" in p ? p.deploy.unshieldedBalances : [] : null;
                });
                return d ? Fn(d) : null;
            },
            async queryDeployContractState (l) {
                return c.query({
                    query: Al,
                    variables: {
                        address: l
                    },
                    fetchPolicy: "no-cache"
                }).then((u)=>{
                    if (u.data?.contractAction) {
                        const f = u.data.contractAction;
                        if (!("deploy" in f)) return f.state;
                        const d = f.deploy.transaction.contractActions.find(({ address: h })=>h === l);
                        if (!d) throw ge.missingContractAction(l);
                        return d.state;
                    }
                    return null;
                }).then((u)=>u ? Te(u) : null);
            },
            async watchForContractState (l) {
                return gt(tr(c)(l)(null).pipe(_(Te)));
            },
            async watchForUnshieldedBalances (l) {
                return gt(ir(c)(l).pipe(_(Fn)));
            },
            async watchForDeployTxData (l) {
                return gt(c.watchQuery({
                    query: _l,
                    variables: {
                        address: l
                    },
                    pollInterval: _e,
                    fetchPolicy: "no-cache",
                    initialFetchPolicy: "no-cache",
                    nextFetchPolicy: "no-cache"
                }).pipe(Ie(), W((u)=>u.contractAction !== null), _((u)=>{
                    const f = u.contractAction;
                    return "deploy" in f ? f.deploy.transaction : f.transaction;
                }), W(ln), _((u)=>Hl(l, u))));
            },
            async watchForTxData (l) {
                return gt(c.watchQuery({
                    query: Ns,
                    variables: {
                        offset: {
                            identifier: l
                        }
                    },
                    pollInterval: _e,
                    fetchPolicy: "no-cache",
                    initialFetchPolicy: "no-cache",
                    nextFetchPolicy: "no-cache"
                }).pipe(Ie(), W((u)=>u.transactions.length !== 0), _((u)=>u.transactions[0]), W(ln), _((u)=>({
                        tx: Ts(u.raw),
                        status: Os(u.transactionResult),
                        txId: l,
                        txHash: u.hash,
                        identifiers: u.identifiers,
                        blockHeight: u.block.height,
                        blockHash: u.block.hash,
                        segmentStatusMap: Cs(u.transactionResult),
                        unshielded: Ds(u.unshieldedCreatedOutputs, u.unshieldedSpentOutputs),
                        blockTimestamp: u.block.timestamp,
                        blockAuthor: u.block.author,
                        indexerId: u.id,
                        protocolVersion: u.protocolVersion,
                        fees: {
                            paidFees: u.fees.paidFees,
                            estimatedFees: u.fees.estimatedFees
                        }
                    }))));
            },
            contractStateObservable (l, u = {
                type: "latest"
            }) {
                if (u.type === "txId") {
                    const p = Ul(c)(u.txId).pipe(W(ln), Z(Ql(u.txId)));
                    return u.inclusive ?? !0 ? p : p.pipe(Ht(1));
                }
                if (u.type === "latest") return er(c)(l).pipe(Z(En(c)), Z(Zi(l)));
                if (u.type === "all") return tr(c)(l)(null).pipe(Z(()=>Yl(c)(l)(null)));
                const f = u.type === "blockHash" ? {
                    hash: u.blockHash
                } : {
                    height: u.blockHeight
                }, d = nr(c)(f).pipe(Z(()=>En(c)(f)));
                return (u.type === "blockHeight" || u.type === "blockHash" ? ci(()=>u.inclusive ?? !0, d, d.pipe(Ht(1))) : d).pipe(Z(Zi(l)));
            },
            unshieldedBalancesObservable (l, u = {
                type: "latest"
            }) {
                if (u.type === "txId") throw new yl("txId configuration not supported for unshielded balances observable");
                if (u.type === "latest") return er(c)(l).pipe(Z(dn(c)(l)));
                if (u.type === "all") return ir(c)(l).pipe(Z(()=>dn(c)(l)(null)));
                const f = u.type === "blockHash" ? {
                    hash: u.blockHash
                } : {
                    height: u.blockHeight
                }, d = nr(c)(f).pipe(Z(()=>dn(c)(l)(f)));
                return u.type === "blockHeight" || u.type === "blockHash" ? ci(()=>u.inclusive ?? !0, d, d.pipe(Ht(1))) : d;
            }
        };
    };
    ru = (t, e, n = void 0)=>{
        const i = Gl(t, e, n);
        return {
            contractStateObservable (r, s) {
                return de(r), i.contractStateObservable(r, s);
            },
            queryContractState (r, s) {
                return de(r), i.queryContractState(r, s);
            },
            queryDeployContractState (r) {
                return de(r), i.queryDeployContractState(r);
            },
            queryZSwapAndContractState (r, s) {
                return de(r), i.queryZSwapAndContractState(r, s);
            },
            queryUnshieldedBalances (r, s) {
                return de(r), i.queryUnshieldedBalances(r, s);
            },
            watchForContractState (r) {
                return de(r), i.watchForContractState(r);
            },
            watchForUnshieldedBalances (r) {
                return de(r), i.watchForUnshieldedBalances(r);
            },
            watchForDeployTxData (r) {
                return de(r), i.watchForDeployTxData(r);
            },
            watchForTxData (r) {
                return i.watchForTxData(r);
            },
            unshieldedBalancesObservable (r, s) {
                return de(r), i.unshieldedBalancesObservable(r, s);
            }
        };
    };
});
export { ge as IndexerDataError, yt as IndexerError, pl as IndexerFormattedError, yl as IndexerProviderConfigError, ws as IndexerQueryError, Hn as IndexerSubscriptionDataError, Wl as correlateDeployTxId, ru as indexerPublicDataProvider, ln as isRegularTransaction, $l as toSegmentStatus, Cs as toSegmentStatusMap, Os as toTxStatus, Fn as toUnshieldedBalances, Ds as toUnshieldedUtxos, __tla };
