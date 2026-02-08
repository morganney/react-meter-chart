import e, { useReducer as d, useCallback as m } from "react";
import { createRoot as h } from "react-dom/client";
import { MeterChart as r } from "./component.mjs";
import { defaultColors as p } from "./colors.mjs";
const g = (l, a) => ({ ...l, ...a }), b = () => {
  const [l, a] = d(g, {
    value: 50,
    low: 35,
    high: 65,
    min: 0,
    max: 100,
    scale: 1,
    size: "medium",
    showBoundsLabel: !1,
    colors: p
  }), t = m(
    (n) => {
      const { name: u, value: s, checked: i, type: E } = n.target;
      a({ ...l, [u]: E === "checkbox" ? i : s });
    },
    [l]
  ), c = m(
    (n) => {
      a({ ...l, [n.target.name]: n.target.value });
    },
    [l]
  ), o = m(
    (n) => {
      a({
        ...l,
        colors: {
          ...l.colors,
          [n.target.name]: n.target.value
        }
      });
    },
    [l]
  );
  return /* @__PURE__ */ e.createElement("div", { style: { marginBottom: "30px" } }, /* @__PURE__ */ e.createElement("p", null, "React component to render an element very similar to an", " ", /* @__PURE__ */ e.createElement("a", { href: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meter" }, "HTML <meter>"), ", except it plots a ", /* @__PURE__ */ e.createElement("code", null, "value"), " and target range defined by the", " ", /* @__PURE__ */ e.createElement("code", null, "low"), " and ", /* @__PURE__ */ e.createElement("code", null, "high"), " props within the meter's ", /* @__PURE__ */ e.createElement("code", null, "min"), " ", "and ", /* @__PURE__ */ e.createElement("code", null, "max"), "."), /* @__PURE__ */ e.createElement(r, { ...l }), /* @__PURE__ */ e.createElement("form", null, /* @__PURE__ */ e.createElement("fieldset", null, /* @__PURE__ */ e.createElement("legend", null, "Change ", /* @__PURE__ */ e.createElement("strong", null, "props"), " to see how it works. View the", " ", /* @__PURE__ */ e.createElement("a", { href: "https://github.com/morganney/react-meter-chart/blob/main/demo.tsx" }, "source in demo.tsx"), " ", "to see a coding example."), /* @__PURE__ */ e.createElement("label", null, /* @__PURE__ */ e.createElement("code", null, "value"), /* @__PURE__ */ e.createElement(
    "input",
    {
      type: "number",
      value: l.value,
      name: "value",
      min: "0",
      max: "100",
      onChange: t
    }
  )), /* @__PURE__ */ e.createElement("label", null, /* @__PURE__ */ e.createElement("code", null, "low"), /* @__PURE__ */ e.createElement(
    "input",
    {
      type: "number",
      value: l.low,
      name: "low",
      min: l.min ?? 0,
      max: l.max ?? 99,
      onChange: t
    }
  )), /* @__PURE__ */ e.createElement("label", null, /* @__PURE__ */ e.createElement("code", null, "high"), /* @__PURE__ */ e.createElement(
    "input",
    {
      type: "number",
      value: l.high,
      name: "high",
      min: l.min ?? 1,
      max: l.max ?? 100,
      onChange: t
    }
  )), /* @__PURE__ */ e.createElement("label", null, /* @__PURE__ */ e.createElement("code", null, "min"), /* @__PURE__ */ e.createElement(
    "input",
    {
      type: "number",
      value: l.min,
      name: "min",
      min: "0",
      max: "100",
      onChange: t
    }
  )), /* @__PURE__ */ e.createElement("label", null, /* @__PURE__ */ e.createElement("code", null, "max"), /* @__PURE__ */ e.createElement(
    "input",
    {
      type: "number",
      value: l.max,
      name: "max",
      min: "0",
      max: "100",
      onChange: t
    }
  )), /* @__PURE__ */ e.createElement("label", null, /* @__PURE__ */ e.createElement("code", null, "size"), /* @__PURE__ */ e.createElement("select", { name: "size", value: l.size, onChange: c }, /* @__PURE__ */ e.createElement("option", null, "small"), /* @__PURE__ */ e.createElement("option", null, "medium"), /* @__PURE__ */ e.createElement("option", null, "large"))), /* @__PURE__ */ e.createElement("label", null, /* @__PURE__ */ e.createElement("code", null, "scale"), /* @__PURE__ */ e.createElement(
    "input",
    {
      type: "number",
      value: l.scale,
      name: "scale",
      min: "0.5",
      max: "5",
      step: "0.5",
      onChange: t
    }
  )), /* @__PURE__ */ e.createElement("label", null, /* @__PURE__ */ e.createElement("code", null, "colors.dot"), /* @__PURE__ */ e.createElement(
    "input",
    {
      type: "color",
      name: "dot",
      value: l.colors?.dot ?? "#000000",
      onChange: o
    }
  )), /* @__PURE__ */ e.createElement("label", null, /* @__PURE__ */ e.createElement("code", null, "colors.label"), /* @__PURE__ */ e.createElement(
    "input",
    {
      type: "color",
      name: "label",
      value: l.colors?.label ?? "#000000",
      onChange: o
    }
  )), /* @__PURE__ */ e.createElement("label", null, /* @__PURE__ */ e.createElement("code", null, "colors.range"), /* @__PURE__ */ e.createElement(
    "input",
    {
      type: "color",
      name: "range",
      value: l.colors?.range ?? "rgba(112, 196, 126, 0.4)",
      onChange: o
    }
  )), /* @__PURE__ */ e.createElement("label", null, /* @__PURE__ */ e.createElement("code", null, "colors.bounds"), /* @__PURE__ */ e.createElement(
    "input",
    {
      type: "color",
      name: "bounds",
      value: l.colors?.bounds ?? "#eaeaea",
      onChange: o
    }
  )), /* @__PURE__ */ e.createElement("label", null, /* @__PURE__ */ e.createElement("code", null, "showBoundsLabel"), /* @__PURE__ */ e.createElement(
    "input",
    {
      type: "checkbox",
      name: "showBoundsLabel",
      checked: l.showBoundsLabel,
      onChange: t
    }
  )))));
}, v = h(document.getElementById("root"));
v.render(
  /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("main", { style: { display: "grid", gap: "20px ", padding: "25px" } }, /* @__PURE__ */ e.createElement("h1", null, /* @__PURE__ */ e.createElement("code", null, /* @__PURE__ */ e.createElement("a", { href: "https://github.com/morganney/react-meter-chart" }, "react-meter-chart"))), /* @__PURE__ */ e.createElement(b, null), /* @__PURE__ */ e.createElement(r, { value: 50 }), /* @__PURE__ */ e.createElement(r, { value: 57, low: 35, high: 65 }), /* @__PURE__ */ e.createElement(r, { value: 35, min: 25, max: 100, low: 75, high: 100, showBoundsLabel: !0 }), /* @__PURE__ */ e.createElement(
    r,
    {
      value: 65,
      low: 40,
      high: 75,
      scale: 2.5,
      colors: {
        label: "green",
        bounds: "#bbb",
        dot: "green",
        range: "#ffa50099"
      }
    }
  )))
);
