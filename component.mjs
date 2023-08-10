import a from "react";
import d from "styled-components";
import { defaultColors as b } from "./colors.mjs";
import { getSizing as n } from "./sizing.mjs";
const { useState: z, useCallback: M, useMemo: R } = a, C = d.div`
  display: flex;
  align-items: center;
  gap: 15px;
`, S = d.span`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: ${({ $size: e, $scale: t }) => n(e, t).valueFontSize};

  span {
    white-space: nowrap;
  }
  span:first-child {
    font-weight: bold;
    color: ${({ $colors: e }) => e.label};
  }
  span:nth-child(n + 2) {
    color: ${({ $colors: e }) => `color-mix(in srgb, black 25%, ${e.bounds})`};
    display: ${({ $showLabel: e }) => e ? "inline" : "none"};
  }
`, H = d.span`
  display: flex;
  align-items: center;
  position: relative;
  border: ${({ $size: e, $scale: t, $colors: r }) => `${n(e, t).boundsHeight / 2}px solid ${r.bounds}`};
  border-right: none;
  border-left: none;
  width: 100%;

  &::after {
    content: '';
    position: absolute;
    width: ${({ $size: e, $scale: t }) => `${n(e, t).dotDiameter}`}px;
    height: ${({ $size: e, $scale: t }) => `${n(e, t).dotDiameter}`}px;
    border-radius: 50%;
    background-color: ${({ $colors: e }) => e.dot};
    left: ${({ $valueLeft: e, $size: t, $scale: r }) => `calc(${e * 100}% - ${n(t, r).dotDiameter / 2}px)`};
  }

  > span {
    position: absolute;
    height: ${({ $size: e, $scale: t }) => `${n(e, t).rangeHeight}`}px;
    width: ${({ $rangeWidth: e }) => e * 100}%;
    left: ${({ $rangeLeft: e }) => e * 100}%;
    background-color: ${({ $colors: e }) => e.range};

    > span {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: ${({ $size: e, $scale: t }) => `${n(e, t).rangeHeight}`}px;

      &:hover {
        cursor: pointer;
      }

      span {
        display: ${({ $showRangeLabels: e }) => e ? "flex" : "none"};
        font-size: ${({ $size: e, $scale: t }) => `${Math.ceil(n(e, t).rangeHeight + 2)}`}px;
        line-height: 1;
        position: relative;
        z-index: 1;
      }
    }
  }
`, c = () => `rmc-${(Math.random() * (1 << 24) | 0).toString(16)}`, F = ({
  value: e,
  min: t = 0,
  max: r = 100,
  low: o = 0,
  high: i = 100,
  scale: p = 1,
  size: g = "medium",
  colors: f = b,
  showBoundsLabel: x = !1,
  ...v
}) => {
  const $ = { ...b, ...f }, s = r - t, w = (i - o) / s, E = (o - t) / s, y = (e - t) / s, [l, L] = z(!1), k = M(() => {
    L(!l);
  }, [l]), [h, u, m] = R(() => [c(), c(), c()], []);
  return /* @__PURE__ */ a.createElement(
    C,
    {
      role: "meter",
      "aria-label": "Meter chart",
      "aria-describedby": `${h} ${u} ${m}`,
      "aria-valuenow": e,
      "aria-valuemin": t,
      "aria-valuemax": r,
      ...v
    },
    /* @__PURE__ */ a.createElement(S, { $size: g, $scale: p, $colors: $, $showLabel: x }, /* @__PURE__ */ a.createElement("span", { id: h, "aria-description": "The chart's value." }, e), /* @__PURE__ */ a.createElement("span", null, "/"), /* @__PURE__ */ a.createElement(
      "span",
      {
        id: u,
        "data-testid": "bounds",
        "aria-description": "The min and max values for the chart bounds."
      },
      "(",
      t,
      ", ",
      r,
      ")"
    )),
    /* @__PURE__ */ a.createElement(
      H,
      {
        $low: o,
        $high: i,
        $scale: p,
        $size: g,
        $rangeWidth: w,
        $rangeLeft: E,
        $valueLeft: y,
        $colors: $,
        $showRangeLabels: l
      },
      /* @__PURE__ */ a.createElement("span", null, /* @__PURE__ */ a.createElement(
        "span",
        {
          id: m,
          "data-testid": "range",
          onClick: k,
          "aria-description": "The low and high values for the chart's target range."
        },
        /* @__PURE__ */ a.createElement("span", null, o),
        /* @__PURE__ */ a.createElement("span", null, i)
      ))
    )
  );
};
export {
  F as MeterChart
};
