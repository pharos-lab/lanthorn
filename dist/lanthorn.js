const l = {
  __name: "LButton",
  props: {
    color: {
      type: String,
      default: "blue",
      validator(e) {
        return ["gray", "red", "orange", "yellow", "blue", "primary", "secondary"].includes(e);
      }
    },
    mode: {
      type: String,
      default: "fill",
      validator(e) {
        return ["none", "fill", "light", "outlined"].includes(e);
      }
    }
  },
  setup(e) {
    return (r, n) => null;
  }
}, o = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  LButton: l
}, Symbol.toStringTag, { value: "Module" })), a = {
  install(e, r = {}) {
    for (const n in o) {
      const t = o[n];
      e.component(t.name, t);
    }
  }
};
export {
  a as lantern
};
