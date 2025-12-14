import M, { useReducer as Xh, useCallback as ti } from "react";
import Ch from "react-dom";
import { MeterChart as ye } from "./component.mjs";
import { defaultColors as Gh } from "./colors.mjs";
var ui = { exports: {} }, ve = {}, ei = { exports: {} }, ni = {};
var c1;
function Zh() {
  return c1 || (c1 = 1, (function(E) {
    function El(z, A) {
      var _ = z.length;
      z.push(A);
      l: for (; 0 < _; ) {
        var W = _ - 1 >>> 1, w = z[W];
        if (0 < Rl(w, A))
          z[W] = A, z[_] = w, _ = W;
        else break l;
      }
    }
    function tl(z) {
      return z.length === 0 ? null : z[0];
    }
    function s(z) {
      if (z.length === 0) return null;
      var A = z[0], _ = z.pop();
      if (_ !== A) {
        z[0] = _;
        l: for (var W = 0, w = z.length, zl = w >>> 1; W < zl; ) {
          var k = 2 * (W + 1) - 1, R = z[k], ml = k + 1, fa = z[ml];
          if (0 > Rl(R, _))
            ml < w && 0 > Rl(fa, R) ? (z[W] = fa, z[ml] = _, W = ml) : (z[W] = R, z[k] = _, W = k);
          else if (ml < w && 0 > Rl(fa, _))
            z[W] = fa, z[ml] = _, W = ml;
          else break l;
        }
      }
      return A;
    }
    function Rl(z, A) {
      var _ = z.sortIndex - A.sortIndex;
      return _ !== 0 ? _ : z.id - A.id;
    }
    if (E.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var bl = performance;
      E.unstable_now = function() {
        return bl.now();
      };
    } else {
      var nt = Date, Ut = nt.now();
      E.unstable_now = function() {
        return nt.now() - Ut;
      };
    }
    var Al = [], jl = [], he = 1, B = null, il = 3, qa = !1, la = !1, Vl = !1, _t = !1, Ht = typeof setTimeout == "function" ? setTimeout : null, su = typeof clearTimeout == "function" ? clearTimeout : null, xl = typeof setImmediate < "u" ? setImmediate : null;
    function Ya(z) {
      for (var A = tl(jl); A !== null; ) {
        if (A.callback === null) s(jl);
        else if (A.startTime <= z)
          s(jl), A.sortIndex = A.expirationTime, El(Al, A);
        else break;
        A = tl(jl);
      }
    }
    function ft(z) {
      if (Vl = !1, Ya(z), !la)
        if (tl(Al) !== null)
          la = !0, na || (na = !0, Kl());
        else {
          var A = tl(jl);
          A !== null && ha(ft, A.startTime - z);
        }
    }
    var na = !1, ya = -1, aa = 5, Nt = -1;
    function de() {
      return _t ? !0 : !(E.unstable_now() - Nt < aa);
    }
    function Bt() {
      if (_t = !1, na) {
        var z = E.unstable_now();
        Nt = z;
        var A = !0;
        try {
          l: {
            la = !1, Vl && (Vl = !1, su(ya), ya = -1), qa = !0;
            var _ = il;
            try {
              a: {
                for (Ya(z), B = tl(Al); B !== null && !(B.expirationTime > z && de()); ) {
                  var W = B.callback;
                  if (typeof W == "function") {
                    B.callback = null, il = B.priorityLevel;
                    var w = W(
                      B.expirationTime <= z
                    );
                    if (z = E.unstable_now(), typeof w == "function") {
                      B.callback = w, Ya(z), A = !0;
                      break a;
                    }
                    B === tl(Al) && s(Al), Ya(z);
                  } else s(Al);
                  B = tl(Al);
                }
                if (B !== null) A = !0;
                else {
                  var zl = tl(jl);
                  zl !== null && ha(
                    ft,
                    zl.startTime - z
                  ), A = !1;
                }
              }
              break l;
            } finally {
              B = null, il = _, qa = !1;
            }
            A = void 0;
          }
        } finally {
          A ? Kl() : na = !1;
        }
      }
    }
    var Kl;
    if (typeof xl == "function")
      Kl = function() {
        xl(Bt);
      };
    else if (typeof MessageChannel < "u") {
      var Se = new MessageChannel(), bu = Se.port2;
      Se.port1.onmessage = Bt, Kl = function() {
        bu.postMessage(null);
      };
    } else
      Kl = function() {
        Ht(Bt, 0);
      };
    function ha(z, A) {
      ya = Ht(function() {
        z(E.unstable_now());
      }, A);
    }
    E.unstable_IdlePriority = 5, E.unstable_ImmediatePriority = 1, E.unstable_LowPriority = 4, E.unstable_NormalPriority = 3, E.unstable_Profiling = null, E.unstable_UserBlockingPriority = 2, E.unstable_cancelCallback = function(z) {
      z.callback = null;
    }, E.unstable_forceFrameRate = function(z) {
      0 > z || 125 < z ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : aa = 0 < z ? Math.floor(1e3 / z) : 5;
    }, E.unstable_getCurrentPriorityLevel = function() {
      return il;
    }, E.unstable_next = function(z) {
      switch (il) {
        case 1:
        case 2:
        case 3:
          var A = 3;
          break;
        default:
          A = il;
      }
      var _ = il;
      il = A;
      try {
        return z();
      } finally {
        il = _;
      }
    }, E.unstable_requestPaint = function() {
      _t = !0;
    }, E.unstable_runWithPriority = function(z, A) {
      switch (z) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          z = 3;
      }
      var _ = il;
      il = z;
      try {
        return A();
      } finally {
        il = _;
      }
    }, E.unstable_scheduleCallback = function(z, A, _) {
      var W = E.unstable_now();
      switch (typeof _ == "object" && _ !== null ? (_ = _.delay, _ = typeof _ == "number" && 0 < _ ? W + _ : W) : _ = W, z) {
        case 1:
          var w = -1;
          break;
        case 2:
          w = 250;
          break;
        case 5:
          w = 1073741823;
          break;
        case 4:
          w = 1e4;
          break;
        default:
          w = 5e3;
      }
      return w = _ + w, z = {
        id: he++,
        callback: A,
        priorityLevel: z,
        startTime: _,
        expirationTime: w,
        sortIndex: -1
      }, _ > W ? (z.sortIndex = _, El(jl, z), tl(Al) === null && z === tl(jl) && (Vl ? (su(ya), ya = -1) : Vl = !0, ha(ft, _ - W))) : (z.sortIndex = w, El(Al, z), la || qa || (la = !0, na || (na = !0, Kl()))), z;
    }, E.unstable_shouldYield = de, E.unstable_wrapCallback = function(z) {
      var A = il;
      return function() {
        var _ = il;
        il = A;
        try {
          return z.apply(this, arguments);
        } finally {
          il = _;
        }
      };
    };
  })(ni)), ni;
}
var i1;
function ph() {
  return i1 || (i1 = 1, ei.exports = Zh()), ei.exports;
}
var m1;
function Rh() {
  if (m1) return ve;
  m1 = 1;
  var E = ph(), El = M, tl = Ch;
  function s(l) {
    var a = "https://react.dev/errors/" + l;
    if (1 < arguments.length) {
      a += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var t = 2; t < arguments.length; t++)
        a += "&args[]=" + encodeURIComponent(arguments[t]);
    }
    return "Minified React error #" + l + "; visit " + a + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function Rl(l) {
    return !(!l || l.nodeType !== 1 && l.nodeType !== 9 && l.nodeType !== 11);
  }
  function bl(l) {
    var a = l, t = l;
    if (l.alternate) for (; a.return; ) a = a.return;
    else {
      l = a;
      do
        a = l, (a.flags & 4098) !== 0 && (t = a.return), l = a.return;
      while (l);
    }
    return a.tag === 3 ? t : null;
  }
  function nt(l) {
    if (l.tag === 13) {
      var a = l.memoizedState;
      if (a === null && (l = l.alternate, l !== null && (a = l.memoizedState)), a !== null) return a.dehydrated;
    }
    return null;
  }
  function Ut(l) {
    if (l.tag === 31) {
      var a = l.memoizedState;
      if (a === null && (l = l.alternate, l !== null && (a = l.memoizedState)), a !== null) return a.dehydrated;
    }
    return null;
  }
  function Al(l) {
    if (bl(l) !== l)
      throw Error(s(188));
  }
  function jl(l) {
    var a = l.alternate;
    if (!a) {
      if (a = bl(l), a === null) throw Error(s(188));
      return a !== l ? null : l;
    }
    for (var t = l, u = a; ; ) {
      var e = t.return;
      if (e === null) break;
      var n = e.alternate;
      if (n === null) {
        if (u = e.return, u !== null) {
          t = u;
          continue;
        }
        break;
      }
      if (e.child === n.child) {
        for (n = e.child; n; ) {
          if (n === t) return Al(e), l;
          if (n === u) return Al(e), a;
          n = n.sibling;
        }
        throw Error(s(188));
      }
      if (t.return !== u.return) t = e, u = n;
      else {
        for (var f = !1, c = e.child; c; ) {
          if (c === t) {
            f = !0, t = e, u = n;
            break;
          }
          if (c === u) {
            f = !0, u = e, t = n;
            break;
          }
          c = c.sibling;
        }
        if (!f) {
          for (c = n.child; c; ) {
            if (c === t) {
              f = !0, t = n, u = e;
              break;
            }
            if (c === u) {
              f = !0, u = n, t = e;
              break;
            }
            c = c.sibling;
          }
          if (!f) throw Error(s(189));
        }
      }
      if (t.alternate !== u) throw Error(s(190));
    }
    if (t.tag !== 3) throw Error(s(188));
    return t.stateNode.current === t ? l : a;
  }
  function he(l) {
    var a = l.tag;
    if (a === 5 || a === 26 || a === 27 || a === 6) return l;
    for (l = l.child; l !== null; ) {
      if (a = he(l), a !== null) return a;
      l = l.sibling;
    }
    return null;
  }
  var B = Object.assign, il = Symbol.for("react.element"), qa = Symbol.for("react.transitional.element"), la = Symbol.for("react.portal"), Vl = Symbol.for("react.fragment"), _t = Symbol.for("react.strict_mode"), Ht = Symbol.for("react.profiler"), su = Symbol.for("react.consumer"), xl = Symbol.for("react.context"), Ya = Symbol.for("react.forward_ref"), ft = Symbol.for("react.suspense"), na = Symbol.for("react.suspense_list"), ya = Symbol.for("react.memo"), aa = Symbol.for("react.lazy"), Nt = Symbol.for("react.activity"), de = Symbol.for("react.memo_cache_sentinel"), Bt = Symbol.iterator;
  function Kl(l) {
    return l === null || typeof l != "object" ? null : (l = Bt && l[Bt] || l["@@iterator"], typeof l == "function" ? l : null);
  }
  var Se = Symbol.for("react.client.reference");
  function bu(l) {
    if (l == null) return null;
    if (typeof l == "function")
      return l.$$typeof === Se ? null : l.displayName || l.name || null;
    if (typeof l == "string") return l;
    switch (l) {
      case Vl:
        return "Fragment";
      case Ht:
        return "Profiler";
      case _t:
        return "StrictMode";
      case ft:
        return "Suspense";
      case na:
        return "SuspenseList";
      case Nt:
        return "Activity";
    }
    if (typeof l == "object")
      switch (l.$$typeof) {
        case la:
          return "Portal";
        case xl:
          return l.displayName || "Context";
        case su:
          return (l._context.displayName || "Context") + ".Consumer";
        case Ya:
          var a = l.render;
          return l = l.displayName, l || (l = a.displayName || a.name || "", l = l !== "" ? "ForwardRef(" + l + ")" : "ForwardRef"), l;
        case ya:
          return a = l.displayName || null, a !== null ? a : bu(l.type) || "Memo";
        case aa:
          a = l._payload, l = l._init;
          try {
            return bu(l(a));
          } catch {
          }
      }
    return null;
  }
  var ha = Array.isArray, z = El.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, A = tl.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, _ = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, W = [], w = -1;
  function zl(l) {
    return { current: l };
  }
  function k(l) {
    0 > w || (l.current = W[w], W[w] = null, w--);
  }
  function R(l, a) {
    w++, W[w] = l.current, l.current = a;
  }
  var ml = zl(null), fa = zl(null), Qa = zl(null), ge = zl(null);
  function se(l, a) {
    switch (R(Qa, a), R(fa, l), R(ml, null), a.nodeType) {
      case 9:
      case 11:
        l = (l = a.documentElement) && (l = l.namespaceURI) ? Bv(l) : 0;
        break;
      default:
        if (l = a.tagName, a = a.namespaceURI)
          a = Bv(a), l = qv(a, l);
        else
          switch (l) {
            case "svg":
              l = 1;
              break;
            case "math":
              l = 2;
              break;
            default:
              l = 0;
          }
    }
    k(ml), R(ml, l);
  }
  function qt() {
    k(ml), k(fa), k(Qa);
  }
  function Gn(l) {
    l.memoizedState !== null && R(ge, l);
    var a = ml.current, t = qv(a, l.type);
    a !== t && (R(fa, l), R(ml, t));
  }
  function be(l) {
    fa.current === l && (k(ml), k(fa)), ge.current === l && (k(ge), fe._currentValue = _);
  }
  var Zn, fi;
  function ct(l) {
    if (Zn === void 0)
      try {
        throw Error();
      } catch (t) {
        var a = t.stack.trim().match(/\n( *(at )?)/);
        Zn = a && a[1] || "", fi = -1 < t.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < t.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + Zn + l + fi;
  }
  var pn = !1;
  function Rn(l, a) {
    if (!l || pn) return "";
    pn = !0;
    var t = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var u = {
        DetermineComponentFrameRoot: function() {
          try {
            if (a) {
              var o = function() {
                throw Error();
              };
              if (Object.defineProperty(o.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(o, []);
                } catch (S) {
                  var d = S;
                }
                Reflect.construct(l, [], o);
              } else {
                try {
                  o.call();
                } catch (S) {
                  d = S;
                }
                l.call(o.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (S) {
                d = S;
              }
              (o = l()) && typeof o.catch == "function" && o.catch(function() {
              });
            }
          } catch (S) {
            if (S && d && typeof S.stack == "string")
              return [S.stack, d.stack];
          }
          return [null, null];
        }
      };
      u.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var e = Object.getOwnPropertyDescriptor(
        u.DetermineComponentFrameRoot,
        "name"
      );
      e && e.configurable && Object.defineProperty(
        u.DetermineComponentFrameRoot,
        "name",
        { value: "DetermineComponentFrameRoot" }
      );
      var n = u.DetermineComponentFrameRoot(), f = n[0], c = n[1];
      if (f && c) {
        var i = f.split(`
`), h = c.split(`
`);
        for (e = u = 0; u < i.length && !i[u].includes("DetermineComponentFrameRoot"); )
          u++;
        for (; e < h.length && !h[e].includes(
          "DetermineComponentFrameRoot"
        ); )
          e++;
        if (u === i.length || e === h.length)
          for (u = i.length - 1, e = h.length - 1; 1 <= u && 0 <= e && i[u] !== h[e]; )
            e--;
        for (; 1 <= u && 0 <= e; u--, e--)
          if (i[u] !== h[e]) {
            if (u !== 1 || e !== 1)
              do
                if (u--, e--, 0 > e || i[u] !== h[e]) {
                  var g = `
` + i[u].replace(" at new ", " at ");
                  return l.displayName && g.includes("<anonymous>") && (g = g.replace("<anonymous>", l.displayName)), g;
                }
              while (1 <= u && 0 <= e);
            break;
          }
      }
    } finally {
      pn = !1, Error.prepareStackTrace = t;
    }
    return (t = l ? l.displayName || l.name : "") ? ct(t) : "";
  }
  function y1(l, a) {
    switch (l.tag) {
      case 26:
      case 27:
      case 5:
        return ct(l.type);
      case 16:
        return ct("Lazy");
      case 13:
        return l.child !== a && a !== null ? ct("Suspense Fallback") : ct("Suspense");
      case 19:
        return ct("SuspenseList");
      case 0:
      case 15:
        return Rn(l.type, !1);
      case 11:
        return Rn(l.type.render, !1);
      case 1:
        return Rn(l.type, !0);
      case 31:
        return ct("Activity");
      default:
        return "";
    }
  }
  function ci(l) {
    try {
      var a = "", t = null;
      do
        a += y1(l, t), t = l, l = l.return;
      while (l);
      return a;
    } catch (u) {
      return `
Error generating stack: ` + u.message + `
` + u.stack;
    }
  }
  var jn = Object.prototype.hasOwnProperty, Vn = E.unstable_scheduleCallback, xn = E.unstable_cancelCallback, h1 = E.unstable_shouldYield, d1 = E.unstable_requestPaint, Nl = E.unstable_now, S1 = E.unstable_getCurrentPriorityLevel, ii = E.unstable_ImmediatePriority, mi = E.unstable_UserBlockingPriority, ze = E.unstable_NormalPriority, g1 = E.unstable_LowPriority, vi = E.unstable_IdlePriority, s1 = E.log, b1 = E.unstable_setDisableYieldValue, zu = null, Bl = null;
  function Xa(l) {
    if (typeof s1 == "function" && b1(l), Bl && typeof Bl.setStrictMode == "function")
      try {
        Bl.setStrictMode(zu, l);
      } catch {
      }
  }
  var ql = Math.clz32 ? Math.clz32 : E1, z1 = Math.log, o1 = Math.LN2;
  function E1(l) {
    return l >>>= 0, l === 0 ? 32 : 31 - (z1(l) / o1 | 0) | 0;
  }
  var oe = 256, Ee = 262144, Ae = 4194304;
  function it(l) {
    var a = l & 42;
    if (a !== 0) return a;
    switch (l & -l) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
        return l & 261888;
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return l & 3932160;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return l & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return l;
    }
  }
  function Te(l, a, t) {
    var u = l.pendingLanes;
    if (u === 0) return 0;
    var e = 0, n = l.suspendedLanes, f = l.pingedLanes;
    l = l.warmLanes;
    var c = u & 134217727;
    return c !== 0 ? (u = c & ~n, u !== 0 ? e = it(u) : (f &= c, f !== 0 ? e = it(f) : t || (t = c & ~l, t !== 0 && (e = it(t))))) : (c = u & ~n, c !== 0 ? e = it(c) : f !== 0 ? e = it(f) : t || (t = u & ~l, t !== 0 && (e = it(t)))), e === 0 ? 0 : a !== 0 && a !== e && (a & n) === 0 && (n = e & -e, t = a & -a, n >= t || n === 32 && (t & 4194048) !== 0) ? a : e;
  }
  function ou(l, a) {
    return (l.pendingLanes & ~(l.suspendedLanes & ~l.pingedLanes) & a) === 0;
  }
  function A1(l, a) {
    switch (l) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return a + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return a + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function yi() {
    var l = Ae;
    return Ae <<= 1, (Ae & 62914560) === 0 && (Ae = 4194304), l;
  }
  function Kn(l) {
    for (var a = [], t = 0; 31 > t; t++) a.push(l);
    return a;
  }
  function Eu(l, a) {
    l.pendingLanes |= a, a !== 268435456 && (l.suspendedLanes = 0, l.pingedLanes = 0, l.warmLanes = 0);
  }
  function T1(l, a, t, u, e, n) {
    var f = l.pendingLanes;
    l.pendingLanes = t, l.suspendedLanes = 0, l.pingedLanes = 0, l.warmLanes = 0, l.expiredLanes &= t, l.entangledLanes &= t, l.errorRecoveryDisabledLanes &= t, l.shellSuspendCounter = 0;
    var c = l.entanglements, i = l.expirationTimes, h = l.hiddenUpdates;
    for (t = f & ~t; 0 < t; ) {
      var g = 31 - ql(t), o = 1 << g;
      c[g] = 0, i[g] = -1;
      var d = h[g];
      if (d !== null)
        for (h[g] = null, g = 0; g < d.length; g++) {
          var S = d[g];
          S !== null && (S.lane &= -536870913);
        }
      t &= ~o;
    }
    u !== 0 && hi(l, u, 0), n !== 0 && e === 0 && l.tag !== 0 && (l.suspendedLanes |= n & ~(f & ~a));
  }
  function hi(l, a, t) {
    l.pendingLanes |= a, l.suspendedLanes &= ~a;
    var u = 31 - ql(a);
    l.entangledLanes |= a, l.entanglements[u] = l.entanglements[u] | 1073741824 | t & 261930;
  }
  function di(l, a) {
    var t = l.entangledLanes |= a;
    for (l = l.entanglements; t; ) {
      var u = 31 - ql(t), e = 1 << u;
      e & a | l[u] & a && (l[u] |= a), t &= ~e;
    }
  }
  function Si(l, a) {
    var t = a & -a;
    return t = (t & 42) !== 0 ? 1 : Ln(t), (t & (l.suspendedLanes | a)) !== 0 ? 0 : t;
  }
  function Ln(l) {
    switch (l) {
      case 2:
        l = 1;
        break;
      case 8:
        l = 4;
        break;
      case 32:
        l = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        l = 128;
        break;
      case 268435456:
        l = 134217728;
        break;
      default:
        l = 0;
    }
    return l;
  }
  function Jn(l) {
    return l &= -l, 2 < l ? 8 < l ? (l & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function gi() {
    var l = A.p;
    return l !== 0 ? l : (l = window.event, l === void 0 ? 32 : l1(l.type));
  }
  function si(l, a) {
    var t = A.p;
    try {
      return A.p = l, a();
    } finally {
      A.p = t;
    }
  }
  var Ca = Math.random().toString(36).slice(2), hl = "__reactFiber$" + Ca, Tl = "__reactProps$" + Ca, Yt = "__reactContainer$" + Ca, Wn = "__reactEvents$" + Ca, M1 = "__reactListeners$" + Ca, D1 = "__reactHandles$" + Ca, bi = "__reactResources$" + Ca, Au = "__reactMarker$" + Ca;
  function wn(l) {
    delete l[hl], delete l[Tl], delete l[Wn], delete l[M1], delete l[D1];
  }
  function Qt(l) {
    var a = l[hl];
    if (a) return a;
    for (var t = l.parentNode; t; ) {
      if (a = t[Yt] || t[hl]) {
        if (t = a.alternate, a.child !== null || t !== null && t.child !== null)
          for (l = pv(l); l !== null; ) {
            if (t = l[hl]) return t;
            l = pv(l);
          }
        return a;
      }
      l = t, t = l.parentNode;
    }
    return null;
  }
  function Xt(l) {
    if (l = l[hl] || l[Yt]) {
      var a = l.tag;
      if (a === 5 || a === 6 || a === 13 || a === 31 || a === 26 || a === 27 || a === 3)
        return l;
    }
    return null;
  }
  function Tu(l) {
    var a = l.tag;
    if (a === 5 || a === 26 || a === 27 || a === 6) return l.stateNode;
    throw Error(s(33));
  }
  function Ct(l) {
    var a = l[bi];
    return a || (a = l[bi] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), a;
  }
  function vl(l) {
    l[Au] = !0;
  }
  var zi = /* @__PURE__ */ new Set(), oi = {};
  function mt(l, a) {
    Gt(l, a), Gt(l + "Capture", a);
  }
  function Gt(l, a) {
    for (oi[l] = a, l = 0; l < a.length; l++)
      zi.add(a[l]);
  }
  var O1 = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), Ei = {}, Ai = {};
  function U1(l) {
    return jn.call(Ai, l) ? !0 : jn.call(Ei, l) ? !1 : O1.test(l) ? Ai[l] = !0 : (Ei[l] = !0, !1);
  }
  function Me(l, a, t) {
    if (U1(a))
      if (t === null) l.removeAttribute(a);
      else {
        switch (typeof t) {
          case "undefined":
          case "function":
          case "symbol":
            l.removeAttribute(a);
            return;
          case "boolean":
            var u = a.toLowerCase().slice(0, 5);
            if (u !== "data-" && u !== "aria-") {
              l.removeAttribute(a);
              return;
            }
        }
        l.setAttribute(a, "" + t);
      }
  }
  function De(l, a, t) {
    if (t === null) l.removeAttribute(a);
    else {
      switch (typeof t) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          l.removeAttribute(a);
          return;
      }
      l.setAttribute(a, "" + t);
    }
  }
  function da(l, a, t, u) {
    if (u === null) l.removeAttribute(t);
    else {
      switch (typeof u) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          l.removeAttribute(t);
          return;
      }
      l.setAttributeNS(a, t, "" + u);
    }
  }
  function Ll(l) {
    switch (typeof l) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return l;
      case "object":
        return l;
      default:
        return "";
    }
  }
  function Ti(l) {
    var a = l.type;
    return (l = l.nodeName) && l.toLowerCase() === "input" && (a === "checkbox" || a === "radio");
  }
  function _1(l, a, t) {
    var u = Object.getOwnPropertyDescriptor(
      l.constructor.prototype,
      a
    );
    if (!l.hasOwnProperty(a) && typeof u < "u" && typeof u.get == "function" && typeof u.set == "function") {
      var e = u.get, n = u.set;
      return Object.defineProperty(l, a, {
        configurable: !0,
        get: function() {
          return e.call(this);
        },
        set: function(f) {
          t = "" + f, n.call(this, f);
        }
      }), Object.defineProperty(l, a, {
        enumerable: u.enumerable
      }), {
        getValue: function() {
          return t;
        },
        setValue: function(f) {
          t = "" + f;
        },
        stopTracking: function() {
          l._valueTracker = null, delete l[a];
        }
      };
    }
  }
  function rn(l) {
    if (!l._valueTracker) {
      var a = Ti(l) ? "checked" : "value";
      l._valueTracker = _1(
        l,
        a,
        "" + l[a]
      );
    }
  }
  function Mi(l) {
    if (!l) return !1;
    var a = l._valueTracker;
    if (!a) return !0;
    var t = a.getValue(), u = "";
    return l && (u = Ti(l) ? l.checked ? "true" : "false" : l.value), l = u, l !== t ? (a.setValue(l), !0) : !1;
  }
  function Oe(l) {
    if (l = l || (typeof document < "u" ? document : void 0), typeof l > "u") return null;
    try {
      return l.activeElement || l.body;
    } catch {
      return l.body;
    }
  }
  var H1 = /[\n"\\]/g;
  function Jl(l) {
    return l.replace(
      H1,
      function(a) {
        return "\\" + a.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function $n(l, a, t, u, e, n, f, c) {
    l.name = "", f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" ? l.type = f : l.removeAttribute("type"), a != null ? f === "number" ? (a === 0 && l.value === "" || l.value != a) && (l.value = "" + Ll(a)) : l.value !== "" + Ll(a) && (l.value = "" + Ll(a)) : f !== "submit" && f !== "reset" || l.removeAttribute("value"), a != null ? Fn(l, f, Ll(a)) : t != null ? Fn(l, f, Ll(t)) : u != null && l.removeAttribute("value"), e == null && n != null && (l.defaultChecked = !!n), e != null && (l.checked = e && typeof e != "function" && typeof e != "symbol"), c != null && typeof c != "function" && typeof c != "symbol" && typeof c != "boolean" ? l.name = "" + Ll(c) : l.removeAttribute("name");
  }
  function Di(l, a, t, u, e, n, f, c) {
    if (n != null && typeof n != "function" && typeof n != "symbol" && typeof n != "boolean" && (l.type = n), a != null || t != null) {
      if (!(n !== "submit" && n !== "reset" || a != null)) {
        rn(l);
        return;
      }
      t = t != null ? "" + Ll(t) : "", a = a != null ? "" + Ll(a) : t, c || a === l.value || (l.value = a), l.defaultValue = a;
    }
    u = u ?? e, u = typeof u != "function" && typeof u != "symbol" && !!u, l.checked = c ? l.checked : !!u, l.defaultChecked = !!u, f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" && (l.name = f), rn(l);
  }
  function Fn(l, a, t) {
    a === "number" && Oe(l.ownerDocument) === l || l.defaultValue === "" + t || (l.defaultValue = "" + t);
  }
  function Zt(l, a, t, u) {
    if (l = l.options, a) {
      a = {};
      for (var e = 0; e < t.length; e++)
        a["$" + t[e]] = !0;
      for (t = 0; t < l.length; t++)
        e = a.hasOwnProperty("$" + l[t].value), l[t].selected !== e && (l[t].selected = e), e && u && (l[t].defaultSelected = !0);
    } else {
      for (t = "" + Ll(t), a = null, e = 0; e < l.length; e++) {
        if (l[e].value === t) {
          l[e].selected = !0, u && (l[e].defaultSelected = !0);
          return;
        }
        a !== null || l[e].disabled || (a = l[e]);
      }
      a !== null && (a.selected = !0);
    }
  }
  function Oi(l, a, t) {
    if (a != null && (a = "" + Ll(a), a !== l.value && (l.value = a), t == null)) {
      l.defaultValue !== a && (l.defaultValue = a);
      return;
    }
    l.defaultValue = t != null ? "" + Ll(t) : "";
  }
  function Ui(l, a, t, u) {
    if (a == null) {
      if (u != null) {
        if (t != null) throw Error(s(92));
        if (ha(u)) {
          if (1 < u.length) throw Error(s(93));
          u = u[0];
        }
        t = u;
      }
      t == null && (t = ""), a = t;
    }
    t = Ll(a), l.defaultValue = t, u = l.textContent, u === t && u !== "" && u !== null && (l.value = u), rn(l);
  }
  function pt(l, a) {
    if (a) {
      var t = l.firstChild;
      if (t && t === l.lastChild && t.nodeType === 3) {
        t.nodeValue = a;
        return;
      }
    }
    l.textContent = a;
  }
  var N1 = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function _i(l, a, t) {
    var u = a.indexOf("--") === 0;
    t == null || typeof t == "boolean" || t === "" ? u ? l.setProperty(a, "") : a === "float" ? l.cssFloat = "" : l[a] = "" : u ? l.setProperty(a, t) : typeof t != "number" || t === 0 || N1.has(a) ? a === "float" ? l.cssFloat = t : l[a] = ("" + t).trim() : l[a] = t + "px";
  }
  function Hi(l, a, t) {
    if (a != null && typeof a != "object")
      throw Error(s(62));
    if (l = l.style, t != null) {
      for (var u in t)
        !t.hasOwnProperty(u) || a != null && a.hasOwnProperty(u) || (u.indexOf("--") === 0 ? l.setProperty(u, "") : u === "float" ? l.cssFloat = "" : l[u] = "");
      for (var e in a)
        u = a[e], a.hasOwnProperty(e) && t[e] !== u && _i(l, e, u);
    } else
      for (var n in a)
        a.hasOwnProperty(n) && _i(l, n, a[n]);
  }
  function kn(l) {
    if (l.indexOf("-") === -1) return !1;
    switch (l) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var B1 = /* @__PURE__ */ new Map([
    ["acceptCharset", "accept-charset"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"],
    ["crossOrigin", "crossorigin"],
    ["accentHeight", "accent-height"],
    ["alignmentBaseline", "alignment-baseline"],
    ["arabicForm", "arabic-form"],
    ["baselineShift", "baseline-shift"],
    ["capHeight", "cap-height"],
    ["clipPath", "clip-path"],
    ["clipRule", "clip-rule"],
    ["colorInterpolation", "color-interpolation"],
    ["colorInterpolationFilters", "color-interpolation-filters"],
    ["colorProfile", "color-profile"],
    ["colorRendering", "color-rendering"],
    ["dominantBaseline", "dominant-baseline"],
    ["enableBackground", "enable-background"],
    ["fillOpacity", "fill-opacity"],
    ["fillRule", "fill-rule"],
    ["floodColor", "flood-color"],
    ["floodOpacity", "flood-opacity"],
    ["fontFamily", "font-family"],
    ["fontSize", "font-size"],
    ["fontSizeAdjust", "font-size-adjust"],
    ["fontStretch", "font-stretch"],
    ["fontStyle", "font-style"],
    ["fontVariant", "font-variant"],
    ["fontWeight", "font-weight"],
    ["glyphName", "glyph-name"],
    ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
    ["glyphOrientationVertical", "glyph-orientation-vertical"],
    ["horizAdvX", "horiz-adv-x"],
    ["horizOriginX", "horiz-origin-x"],
    ["imageRendering", "image-rendering"],
    ["letterSpacing", "letter-spacing"],
    ["lightingColor", "lighting-color"],
    ["markerEnd", "marker-end"],
    ["markerMid", "marker-mid"],
    ["markerStart", "marker-start"],
    ["overlinePosition", "overline-position"],
    ["overlineThickness", "overline-thickness"],
    ["paintOrder", "paint-order"],
    ["panose-1", "panose-1"],
    ["pointerEvents", "pointer-events"],
    ["renderingIntent", "rendering-intent"],
    ["shapeRendering", "shape-rendering"],
    ["stopColor", "stop-color"],
    ["stopOpacity", "stop-opacity"],
    ["strikethroughPosition", "strikethrough-position"],
    ["strikethroughThickness", "strikethrough-thickness"],
    ["strokeDasharray", "stroke-dasharray"],
    ["strokeDashoffset", "stroke-dashoffset"],
    ["strokeLinecap", "stroke-linecap"],
    ["strokeLinejoin", "stroke-linejoin"],
    ["strokeMiterlimit", "stroke-miterlimit"],
    ["strokeOpacity", "stroke-opacity"],
    ["strokeWidth", "stroke-width"],
    ["textAnchor", "text-anchor"],
    ["textDecoration", "text-decoration"],
    ["textRendering", "text-rendering"],
    ["transformOrigin", "transform-origin"],
    ["underlinePosition", "underline-position"],
    ["underlineThickness", "underline-thickness"],
    ["unicodeBidi", "unicode-bidi"],
    ["unicodeRange", "unicode-range"],
    ["unitsPerEm", "units-per-em"],
    ["vAlphabetic", "v-alphabetic"],
    ["vHanging", "v-hanging"],
    ["vIdeographic", "v-ideographic"],
    ["vMathematical", "v-mathematical"],
    ["vectorEffect", "vector-effect"],
    ["vertAdvY", "vert-adv-y"],
    ["vertOriginX", "vert-origin-x"],
    ["vertOriginY", "vert-origin-y"],
    ["wordSpacing", "word-spacing"],
    ["writingMode", "writing-mode"],
    ["xmlnsXlink", "xmlns:xlink"],
    ["xHeight", "x-height"]
  ]), q1 = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Ue(l) {
    return q1.test("" + l) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : l;
  }
  function Sa() {
  }
  var In = null;
  function Pn(l) {
    return l = l.target || l.srcElement || window, l.correspondingUseElement && (l = l.correspondingUseElement), l.nodeType === 3 ? l.parentNode : l;
  }
  var Rt = null, jt = null;
  function Ni(l) {
    var a = Xt(l);
    if (a && (l = a.stateNode)) {
      var t = l[Tl] || null;
      l: switch (l = a.stateNode, a.type) {
        case "input":
          if ($n(
            l,
            t.value,
            t.defaultValue,
            t.defaultValue,
            t.checked,
            t.defaultChecked,
            t.type,
            t.name
          ), a = t.name, t.type === "radio" && a != null) {
            for (t = l; t.parentNode; ) t = t.parentNode;
            for (t = t.querySelectorAll(
              'input[name="' + Jl(
                "" + a
              ) + '"][type="radio"]'
            ), a = 0; a < t.length; a++) {
              var u = t[a];
              if (u !== l && u.form === l.form) {
                var e = u[Tl] || null;
                if (!e) throw Error(s(90));
                $n(
                  u,
                  e.value,
                  e.defaultValue,
                  e.defaultValue,
                  e.checked,
                  e.defaultChecked,
                  e.type,
                  e.name
                );
              }
            }
            for (a = 0; a < t.length; a++)
              u = t[a], u.form === l.form && Mi(u);
          }
          break l;
        case "textarea":
          Oi(l, t.value, t.defaultValue);
          break l;
        case "select":
          a = t.value, a != null && Zt(l, !!t.multiple, a, !1);
      }
    }
  }
  var lf = !1;
  function Bi(l, a, t) {
    if (lf) return l(a, t);
    lf = !0;
    try {
      var u = l(a);
      return u;
    } finally {
      if (lf = !1, (Rt !== null || jt !== null) && (Sn(), Rt && (a = Rt, l = jt, jt = Rt = null, Ni(a), l)))
        for (a = 0; a < l.length; a++) Ni(l[a]);
    }
  }
  function Mu(l, a) {
    var t = l.stateNode;
    if (t === null) return null;
    var u = t[Tl] || null;
    if (u === null) return null;
    t = u[a];
    l: switch (a) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (u = !u.disabled) || (l = l.type, u = !(l === "button" || l === "input" || l === "select" || l === "textarea")), l = !u;
        break l;
      default:
        l = !1;
    }
    if (l) return null;
    if (t && typeof t != "function")
      throw Error(
        s(231, a, typeof t)
      );
    return t;
  }
  var ga = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), af = !1;
  if (ga)
    try {
      var Du = {};
      Object.defineProperty(Du, "passive", {
        get: function() {
          af = !0;
        }
      }), window.addEventListener("test", Du, Du), window.removeEventListener("test", Du, Du);
    } catch {
      af = !1;
    }
  var Ga = null, tf = null, _e = null;
  function qi() {
    if (_e) return _e;
    var l, a = tf, t = a.length, u, e = "value" in Ga ? Ga.value : Ga.textContent, n = e.length;
    for (l = 0; l < t && a[l] === e[l]; l++) ;
    var f = t - l;
    for (u = 1; u <= f && a[t - u] === e[n - u]; u++) ;
    return _e = e.slice(l, 1 < u ? 1 - u : void 0);
  }
  function He(l) {
    var a = l.keyCode;
    return "charCode" in l ? (l = l.charCode, l === 0 && a === 13 && (l = 13)) : l = a, l === 10 && (l = 13), 32 <= l || l === 13 ? l : 0;
  }
  function Ne() {
    return !0;
  }
  function Yi() {
    return !1;
  }
  function Ml(l) {
    function a(t, u, e, n, f) {
      this._reactName = t, this._targetInst = e, this.type = u, this.nativeEvent = n, this.target = f, this.currentTarget = null;
      for (var c in l)
        l.hasOwnProperty(c) && (t = l[c], this[c] = t ? t(n) : n[c]);
      return this.isDefaultPrevented = (n.defaultPrevented != null ? n.defaultPrevented : n.returnValue === !1) ? Ne : Yi, this.isPropagationStopped = Yi, this;
    }
    return B(a.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var t = this.nativeEvent;
        t && (t.preventDefault ? t.preventDefault() : typeof t.returnValue != "unknown" && (t.returnValue = !1), this.isDefaultPrevented = Ne);
      },
      stopPropagation: function() {
        var t = this.nativeEvent;
        t && (t.stopPropagation ? t.stopPropagation() : typeof t.cancelBubble != "unknown" && (t.cancelBubble = !0), this.isPropagationStopped = Ne);
      },
      persist: function() {
      },
      isPersistent: Ne
    }), a;
  }
  var vt = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(l) {
      return l.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, Be = Ml(vt), Ou = B({}, vt, { view: 0, detail: 0 }), Y1 = Ml(Ou), uf, ef, Uu, qe = B({}, Ou, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: ff,
    button: 0,
    buttons: 0,
    relatedTarget: function(l) {
      return l.relatedTarget === void 0 ? l.fromElement === l.srcElement ? l.toElement : l.fromElement : l.relatedTarget;
    },
    movementX: function(l) {
      return "movementX" in l ? l.movementX : (l !== Uu && (Uu && l.type === "mousemove" ? (uf = l.screenX - Uu.screenX, ef = l.screenY - Uu.screenY) : ef = uf = 0, Uu = l), uf);
    },
    movementY: function(l) {
      return "movementY" in l ? l.movementY : ef;
    }
  }), Qi = Ml(qe), Q1 = B({}, qe, { dataTransfer: 0 }), X1 = Ml(Q1), C1 = B({}, Ou, { relatedTarget: 0 }), nf = Ml(C1), G1 = B({}, vt, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Z1 = Ml(G1), p1 = B({}, vt, {
    clipboardData: function(l) {
      return "clipboardData" in l ? l.clipboardData : window.clipboardData;
    }
  }), R1 = Ml(p1), j1 = B({}, vt, { data: 0 }), Xi = Ml(j1), V1 = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
  }, x1 = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  }, K1 = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function L1(l) {
    var a = this.nativeEvent;
    return a.getModifierState ? a.getModifierState(l) : (l = K1[l]) ? !!a[l] : !1;
  }
  function ff() {
    return L1;
  }
  var J1 = B({}, Ou, {
    key: function(l) {
      if (l.key) {
        var a = V1[l.key] || l.key;
        if (a !== "Unidentified") return a;
      }
      return l.type === "keypress" ? (l = He(l), l === 13 ? "Enter" : String.fromCharCode(l)) : l.type === "keydown" || l.type === "keyup" ? x1[l.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: ff,
    charCode: function(l) {
      return l.type === "keypress" ? He(l) : 0;
    },
    keyCode: function(l) {
      return l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0;
    },
    which: function(l) {
      return l.type === "keypress" ? He(l) : l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0;
    }
  }), W1 = Ml(J1), w1 = B({}, qe, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
  }), Ci = Ml(w1), r1 = B({}, Ou, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: ff
  }), $1 = Ml(r1), F1 = B({}, vt, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), k1 = Ml(F1), I1 = B({}, qe, {
    deltaX: function(l) {
      return "deltaX" in l ? l.deltaX : "wheelDeltaX" in l ? -l.wheelDeltaX : 0;
    },
    deltaY: function(l) {
      return "deltaY" in l ? l.deltaY : "wheelDeltaY" in l ? -l.wheelDeltaY : "wheelDelta" in l ? -l.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), P1 = Ml(I1), ly = B({}, vt, {
    newState: 0,
    oldState: 0
  }), ay = Ml(ly), ty = [9, 13, 27, 32], cf = ga && "CompositionEvent" in window, _u = null;
  ga && "documentMode" in document && (_u = document.documentMode);
  var uy = ga && "TextEvent" in window && !_u, Gi = ga && (!cf || _u && 8 < _u && 11 >= _u), Zi = " ", pi = !1;
  function Ri(l, a) {
    switch (l) {
      case "keyup":
        return ty.indexOf(a.keyCode) !== -1;
      case "keydown":
        return a.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function ji(l) {
    return l = l.detail, typeof l == "object" && "data" in l ? l.data : null;
  }
  var Vt = !1;
  function ey(l, a) {
    switch (l) {
      case "compositionend":
        return ji(a);
      case "keypress":
        return a.which !== 32 ? null : (pi = !0, Zi);
      case "textInput":
        return l = a.data, l === Zi && pi ? null : l;
      default:
        return null;
    }
  }
  function ny(l, a) {
    if (Vt)
      return l === "compositionend" || !cf && Ri(l, a) ? (l = qi(), _e = tf = Ga = null, Vt = !1, l) : null;
    switch (l) {
      case "paste":
        return null;
      case "keypress":
        if (!(a.ctrlKey || a.altKey || a.metaKey) || a.ctrlKey && a.altKey) {
          if (a.char && 1 < a.char.length)
            return a.char;
          if (a.which) return String.fromCharCode(a.which);
        }
        return null;
      case "compositionend":
        return Gi && a.locale !== "ko" ? null : a.data;
      default:
        return null;
    }
  }
  var fy = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
  };
  function Vi(l) {
    var a = l && l.nodeName && l.nodeName.toLowerCase();
    return a === "input" ? !!fy[l.type] : a === "textarea";
  }
  function xi(l, a, t, u) {
    Rt ? jt ? jt.push(u) : jt = [u] : Rt = u, a = An(a, "onChange"), 0 < a.length && (t = new Be(
      "onChange",
      "change",
      null,
      t,
      u
    ), l.push({ event: t, listeners: a }));
  }
  var Hu = null, Nu = null;
  function cy(l) {
    Dv(l, 0);
  }
  function Ye(l) {
    var a = Tu(l);
    if (Mi(a)) return l;
  }
  function Ki(l, a) {
    if (l === "change") return a;
  }
  var Li = !1;
  if (ga) {
    var mf;
    if (ga) {
      var vf = "oninput" in document;
      if (!vf) {
        var Ji = document.createElement("div");
        Ji.setAttribute("oninput", "return;"), vf = typeof Ji.oninput == "function";
      }
      mf = vf;
    } else mf = !1;
    Li = mf && (!document.documentMode || 9 < document.documentMode);
  }
  function Wi() {
    Hu && (Hu.detachEvent("onpropertychange", wi), Nu = Hu = null);
  }
  function wi(l) {
    if (l.propertyName === "value" && Ye(Nu)) {
      var a = [];
      xi(
        a,
        Nu,
        l,
        Pn(l)
      ), Bi(cy, a);
    }
  }
  function iy(l, a, t) {
    l === "focusin" ? (Wi(), Hu = a, Nu = t, Hu.attachEvent("onpropertychange", wi)) : l === "focusout" && Wi();
  }
  function my(l) {
    if (l === "selectionchange" || l === "keyup" || l === "keydown")
      return Ye(Nu);
  }
  function vy(l, a) {
    if (l === "click") return Ye(a);
  }
  function yy(l, a) {
    if (l === "input" || l === "change")
      return Ye(a);
  }
  function hy(l, a) {
    return l === a && (l !== 0 || 1 / l === 1 / a) || l !== l && a !== a;
  }
  var Yl = typeof Object.is == "function" ? Object.is : hy;
  function Bu(l, a) {
    if (Yl(l, a)) return !0;
    if (typeof l != "object" || l === null || typeof a != "object" || a === null)
      return !1;
    var t = Object.keys(l), u = Object.keys(a);
    if (t.length !== u.length) return !1;
    for (u = 0; u < t.length; u++) {
      var e = t[u];
      if (!jn.call(a, e) || !Yl(l[e], a[e]))
        return !1;
    }
    return !0;
  }
  function ri(l) {
    for (; l && l.firstChild; ) l = l.firstChild;
    return l;
  }
  function $i(l, a) {
    var t = ri(l);
    l = 0;
    for (var u; t; ) {
      if (t.nodeType === 3) {
        if (u = l + t.textContent.length, l <= a && u >= a)
          return { node: t, offset: a - l };
        l = u;
      }
      l: {
        for (; t; ) {
          if (t.nextSibling) {
            t = t.nextSibling;
            break l;
          }
          t = t.parentNode;
        }
        t = void 0;
      }
      t = ri(t);
    }
  }
  function Fi(l, a) {
    return l && a ? l === a ? !0 : l && l.nodeType === 3 ? !1 : a && a.nodeType === 3 ? Fi(l, a.parentNode) : "contains" in l ? l.contains(a) : l.compareDocumentPosition ? !!(l.compareDocumentPosition(a) & 16) : !1 : !1;
  }
  function ki(l) {
    l = l != null && l.ownerDocument != null && l.ownerDocument.defaultView != null ? l.ownerDocument.defaultView : window;
    for (var a = Oe(l.document); a instanceof l.HTMLIFrameElement; ) {
      try {
        var t = typeof a.contentWindow.location.href == "string";
      } catch {
        t = !1;
      }
      if (t) l = a.contentWindow;
      else break;
      a = Oe(l.document);
    }
    return a;
  }
  function yf(l) {
    var a = l && l.nodeName && l.nodeName.toLowerCase();
    return a && (a === "input" && (l.type === "text" || l.type === "search" || l.type === "tel" || l.type === "url" || l.type === "password") || a === "textarea" || l.contentEditable === "true");
  }
  var dy = ga && "documentMode" in document && 11 >= document.documentMode, xt = null, hf = null, qu = null, df = !1;
  function Ii(l, a, t) {
    var u = t.window === t ? t.document : t.nodeType === 9 ? t : t.ownerDocument;
    df || xt == null || xt !== Oe(u) || (u = xt, "selectionStart" in u && yf(u) ? u = { start: u.selectionStart, end: u.selectionEnd } : (u = (u.ownerDocument && u.ownerDocument.defaultView || window).getSelection(), u = {
      anchorNode: u.anchorNode,
      anchorOffset: u.anchorOffset,
      focusNode: u.focusNode,
      focusOffset: u.focusOffset
    }), qu && Bu(qu, u) || (qu = u, u = An(hf, "onSelect"), 0 < u.length && (a = new Be(
      "onSelect",
      "select",
      null,
      a,
      t
    ), l.push({ event: a, listeners: u }), a.target = xt)));
  }
  function yt(l, a) {
    var t = {};
    return t[l.toLowerCase()] = a.toLowerCase(), t["Webkit" + l] = "webkit" + a, t["Moz" + l] = "moz" + a, t;
  }
  var Kt = {
    animationend: yt("Animation", "AnimationEnd"),
    animationiteration: yt("Animation", "AnimationIteration"),
    animationstart: yt("Animation", "AnimationStart"),
    transitionrun: yt("Transition", "TransitionRun"),
    transitionstart: yt("Transition", "TransitionStart"),
    transitioncancel: yt("Transition", "TransitionCancel"),
    transitionend: yt("Transition", "TransitionEnd")
  }, Sf = {}, Pi = {};
  ga && (Pi = document.createElement("div").style, "AnimationEvent" in window || (delete Kt.animationend.animation, delete Kt.animationiteration.animation, delete Kt.animationstart.animation), "TransitionEvent" in window || delete Kt.transitionend.transition);
  function ht(l) {
    if (Sf[l]) return Sf[l];
    if (!Kt[l]) return l;
    var a = Kt[l], t;
    for (t in a)
      if (a.hasOwnProperty(t) && t in Pi)
        return Sf[l] = a[t];
    return l;
  }
  var l0 = ht("animationend"), a0 = ht("animationiteration"), t0 = ht("animationstart"), Sy = ht("transitionrun"), gy = ht("transitionstart"), sy = ht("transitioncancel"), u0 = ht("transitionend"), e0 = /* @__PURE__ */ new Map(), gf = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  gf.push("scrollEnd");
  function ta(l, a) {
    e0.set(l, a), mt(a, [l]);
  }
  var Qe = typeof reportError == "function" ? reportError : function(l) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var a = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof l == "object" && l !== null && typeof l.message == "string" ? String(l.message) : String(l),
        error: l
      });
      if (!window.dispatchEvent(a)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", l);
      return;
    }
    console.error(l);
  }, Wl = [], Lt = 0, sf = 0;
  function Xe() {
    for (var l = Lt, a = sf = Lt = 0; a < l; ) {
      var t = Wl[a];
      Wl[a++] = null;
      var u = Wl[a];
      Wl[a++] = null;
      var e = Wl[a];
      Wl[a++] = null;
      var n = Wl[a];
      if (Wl[a++] = null, u !== null && e !== null) {
        var f = u.pending;
        f === null ? e.next = e : (e.next = f.next, f.next = e), u.pending = e;
      }
      n !== 0 && n0(t, e, n);
    }
  }
  function Ce(l, a, t, u) {
    Wl[Lt++] = l, Wl[Lt++] = a, Wl[Lt++] = t, Wl[Lt++] = u, sf |= u, l.lanes |= u, l = l.alternate, l !== null && (l.lanes |= u);
  }
  function bf(l, a, t, u) {
    return Ce(l, a, t, u), Ge(l);
  }
  function dt(l, a) {
    return Ce(l, null, null, a), Ge(l);
  }
  function n0(l, a, t) {
    l.lanes |= t;
    var u = l.alternate;
    u !== null && (u.lanes |= t);
    for (var e = !1, n = l.return; n !== null; )
      n.childLanes |= t, u = n.alternate, u !== null && (u.childLanes |= t), n.tag === 22 && (l = n.stateNode, l === null || l._visibility & 1 || (e = !0)), l = n, n = n.return;
    return l.tag === 3 ? (n = l.stateNode, e && a !== null && (e = 31 - ql(t), l = n.hiddenUpdates, u = l[e], u === null ? l[e] = [a] : u.push(a), a.lane = t | 536870912), n) : null;
  }
  function Ge(l) {
    if (50 < Pu)
      throw Pu = 0, Uc = null, Error(s(185));
    for (var a = l.return; a !== null; )
      l = a, a = l.return;
    return l.tag === 3 ? l.stateNode : null;
  }
  var Jt = {};
  function by(l, a, t, u) {
    this.tag = l, this.key = t, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = a, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = u, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Ql(l, a, t, u) {
    return new by(l, a, t, u);
  }
  function zf(l) {
    return l = l.prototype, !(!l || !l.isReactComponent);
  }
  function sa(l, a) {
    var t = l.alternate;
    return t === null ? (t = Ql(
      l.tag,
      a,
      l.key,
      l.mode
    ), t.elementType = l.elementType, t.type = l.type, t.stateNode = l.stateNode, t.alternate = l, l.alternate = t) : (t.pendingProps = a, t.type = l.type, t.flags = 0, t.subtreeFlags = 0, t.deletions = null), t.flags = l.flags & 65011712, t.childLanes = l.childLanes, t.lanes = l.lanes, t.child = l.child, t.memoizedProps = l.memoizedProps, t.memoizedState = l.memoizedState, t.updateQueue = l.updateQueue, a = l.dependencies, t.dependencies = a === null ? null : { lanes: a.lanes, firstContext: a.firstContext }, t.sibling = l.sibling, t.index = l.index, t.ref = l.ref, t.refCleanup = l.refCleanup, t;
  }
  function f0(l, a) {
    l.flags &= 65011714;
    var t = l.alternate;
    return t === null ? (l.childLanes = 0, l.lanes = a, l.child = null, l.subtreeFlags = 0, l.memoizedProps = null, l.memoizedState = null, l.updateQueue = null, l.dependencies = null, l.stateNode = null) : (l.childLanes = t.childLanes, l.lanes = t.lanes, l.child = t.child, l.subtreeFlags = 0, l.deletions = null, l.memoizedProps = t.memoizedProps, l.memoizedState = t.memoizedState, l.updateQueue = t.updateQueue, l.type = t.type, a = t.dependencies, l.dependencies = a === null ? null : {
      lanes: a.lanes,
      firstContext: a.firstContext
    }), l;
  }
  function Ze(l, a, t, u, e, n) {
    var f = 0;
    if (u = l, typeof l == "function") zf(l) && (f = 1);
    else if (typeof l == "string")
      f = Th(
        l,
        t,
        ml.current
      ) ? 26 : l === "html" || l === "head" || l === "body" ? 27 : 5;
    else
      l: switch (l) {
        case Nt:
          return l = Ql(31, t, a, e), l.elementType = Nt, l.lanes = n, l;
        case Vl:
          return St(t.children, e, n, a);
        case _t:
          f = 8, e |= 24;
          break;
        case Ht:
          return l = Ql(12, t, a, e | 2), l.elementType = Ht, l.lanes = n, l;
        case ft:
          return l = Ql(13, t, a, e), l.elementType = ft, l.lanes = n, l;
        case na:
          return l = Ql(19, t, a, e), l.elementType = na, l.lanes = n, l;
        default:
          if (typeof l == "object" && l !== null)
            switch (l.$$typeof) {
              case xl:
                f = 10;
                break l;
              case su:
                f = 9;
                break l;
              case Ya:
                f = 11;
                break l;
              case ya:
                f = 14;
                break l;
              case aa:
                f = 16, u = null;
                break l;
            }
          f = 29, t = Error(
            s(130, l === null ? "null" : typeof l, "")
          ), u = null;
      }
    return a = Ql(f, t, a, e), a.elementType = l, a.type = u, a.lanes = n, a;
  }
  function St(l, a, t, u) {
    return l = Ql(7, l, u, a), l.lanes = t, l;
  }
  function of(l, a, t) {
    return l = Ql(6, l, null, a), l.lanes = t, l;
  }
  function c0(l) {
    var a = Ql(18, null, null, 0);
    return a.stateNode = l, a;
  }
  function Ef(l, a, t) {
    return a = Ql(
      4,
      l.children !== null ? l.children : [],
      l.key,
      a
    ), a.lanes = t, a.stateNode = {
      containerInfo: l.containerInfo,
      pendingChildren: null,
      implementation: l.implementation
    }, a;
  }
  var i0 = /* @__PURE__ */ new WeakMap();
  function wl(l, a) {
    if (typeof l == "object" && l !== null) {
      var t = i0.get(l);
      return t !== void 0 ? t : (a = {
        value: l,
        source: a,
        stack: ci(a)
      }, i0.set(l, a), a);
    }
    return {
      value: l,
      source: a,
      stack: ci(a)
    };
  }
  var Wt = [], wt = 0, pe = null, Yu = 0, rl = [], $l = 0, Za = null, ca = 1, ia = "";
  function ba(l, a) {
    Wt[wt++] = Yu, Wt[wt++] = pe, pe = l, Yu = a;
  }
  function m0(l, a, t) {
    rl[$l++] = ca, rl[$l++] = ia, rl[$l++] = Za, Za = l;
    var u = ca;
    l = ia;
    var e = 32 - ql(u) - 1;
    u &= ~(1 << e), t += 1;
    var n = 32 - ql(a) + e;
    if (30 < n) {
      var f = e - e % 5;
      n = (u & (1 << f) - 1).toString(32), u >>= f, e -= f, ca = 1 << 32 - ql(a) + e | t << e | u, ia = n + l;
    } else
      ca = 1 << n | t << e | u, ia = l;
  }
  function Af(l) {
    l.return !== null && (ba(l, 1), m0(l, 1, 0));
  }
  function Tf(l) {
    for (; l === pe; )
      pe = Wt[--wt], Wt[wt] = null, Yu = Wt[--wt], Wt[wt] = null;
    for (; l === Za; )
      Za = rl[--$l], rl[$l] = null, ia = rl[--$l], rl[$l] = null, ca = rl[--$l], rl[$l] = null;
  }
  function v0(l, a) {
    rl[$l++] = ca, rl[$l++] = ia, rl[$l++] = Za, ca = a.id, ia = a.overflow, Za = l;
  }
  var dl = null, r = null, C = !1, pa = null, Fl = !1, Mf = Error(s(519));
  function Ra(l) {
    var a = Error(
      s(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML",
        ""
      )
    );
    throw Qu(wl(a, l)), Mf;
  }
  function y0(l) {
    var a = l.stateNode, t = l.type, u = l.memoizedProps;
    switch (a[hl] = l, a[Tl] = u, t) {
      case "dialog":
        Y("cancel", a), Y("close", a);
        break;
      case "iframe":
      case "object":
      case "embed":
        Y("load", a);
        break;
      case "video":
      case "audio":
        for (t = 0; t < ae.length; t++)
          Y(ae[t], a);
        break;
      case "source":
        Y("error", a);
        break;
      case "img":
      case "image":
      case "link":
        Y("error", a), Y("load", a);
        break;
      case "details":
        Y("toggle", a);
        break;
      case "input":
        Y("invalid", a), Di(
          a,
          u.value,
          u.defaultValue,
          u.checked,
          u.defaultChecked,
          u.type,
          u.name,
          !0
        );
        break;
      case "select":
        Y("invalid", a);
        break;
      case "textarea":
        Y("invalid", a), Ui(a, u.value, u.defaultValue, u.children);
    }
    t = u.children, typeof t != "string" && typeof t != "number" && typeof t != "bigint" || a.textContent === "" + t || u.suppressHydrationWarning === !0 || Hv(a.textContent, t) ? (u.popover != null && (Y("beforetoggle", a), Y("toggle", a)), u.onScroll != null && Y("scroll", a), u.onScrollEnd != null && Y("scrollend", a), u.onClick != null && (a.onclick = Sa), a = !0) : a = !1, a || Ra(l, !0);
  }
  function h0(l) {
    for (dl = l.return; dl; )
      switch (dl.tag) {
        case 5:
        case 31:
        case 13:
          Fl = !1;
          return;
        case 27:
        case 3:
          Fl = !0;
          return;
        default:
          dl = dl.return;
      }
  }
  function rt(l) {
    if (l !== dl) return !1;
    if (!C) return h0(l), C = !0, !1;
    var a = l.tag, t;
    if ((t = a !== 3 && a !== 27) && ((t = a === 5) && (t = l.type, t = !(t !== "form" && t !== "button") || Vc(l.type, l.memoizedProps)), t = !t), t && r && Ra(l), h0(l), a === 13) {
      if (l = l.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(s(317));
      r = Zv(l);
    } else if (a === 31) {
      if (l = l.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(s(317));
      r = Zv(l);
    } else
      a === 27 ? (a = r, Pa(l.type) ? (l = Wc, Wc = null, r = l) : r = a) : r = dl ? Il(l.stateNode.nextSibling) : null;
    return !0;
  }
  function gt() {
    r = dl = null, C = !1;
  }
  function Df() {
    var l = pa;
    return l !== null && (_l === null ? _l = l : _l.push.apply(
      _l,
      l
    ), pa = null), l;
  }
  function Qu(l) {
    pa === null ? pa = [l] : pa.push(l);
  }
  var Of = zl(null), st = null, za = null;
  function ja(l, a, t) {
    R(Of, a._currentValue), a._currentValue = t;
  }
  function oa(l) {
    l._currentValue = Of.current, k(Of);
  }
  function Uf(l, a, t) {
    for (; l !== null; ) {
      var u = l.alternate;
      if ((l.childLanes & a) !== a ? (l.childLanes |= a, u !== null && (u.childLanes |= a)) : u !== null && (u.childLanes & a) !== a && (u.childLanes |= a), l === t) break;
      l = l.return;
    }
  }
  function _f(l, a, t, u) {
    var e = l.child;
    for (e !== null && (e.return = l); e !== null; ) {
      var n = e.dependencies;
      if (n !== null) {
        var f = e.child;
        n = n.firstContext;
        l: for (; n !== null; ) {
          var c = n;
          n = e;
          for (var i = 0; i < a.length; i++)
            if (c.context === a[i]) {
              n.lanes |= t, c = n.alternate, c !== null && (c.lanes |= t), Uf(
                n.return,
                t,
                l
              ), u || (f = null);
              break l;
            }
          n = c.next;
        }
      } else if (e.tag === 18) {
        if (f = e.return, f === null) throw Error(s(341));
        f.lanes |= t, n = f.alternate, n !== null && (n.lanes |= t), Uf(f, t, l), f = null;
      } else f = e.child;
      if (f !== null) f.return = e;
      else
        for (f = e; f !== null; ) {
          if (f === l) {
            f = null;
            break;
          }
          if (e = f.sibling, e !== null) {
            e.return = f.return, f = e;
            break;
          }
          f = f.return;
        }
      e = f;
    }
  }
  function $t(l, a, t, u) {
    l = null;
    for (var e = a, n = !1; e !== null; ) {
      if (!n) {
        if ((e.flags & 524288) !== 0) n = !0;
        else if ((e.flags & 262144) !== 0) break;
      }
      if (e.tag === 10) {
        var f = e.alternate;
        if (f === null) throw Error(s(387));
        if (f = f.memoizedProps, f !== null) {
          var c = e.type;
          Yl(e.pendingProps.value, f.value) || (l !== null ? l.push(c) : l = [c]);
        }
      } else if (e === ge.current) {
        if (f = e.alternate, f === null) throw Error(s(387));
        f.memoizedState.memoizedState !== e.memoizedState.memoizedState && (l !== null ? l.push(fe) : l = [fe]);
      }
      e = e.return;
    }
    l !== null && _f(
      a,
      l,
      t,
      u
    ), a.flags |= 262144;
  }
  function Re(l) {
    for (l = l.firstContext; l !== null; ) {
      if (!Yl(
        l.context._currentValue,
        l.memoizedValue
      ))
        return !0;
      l = l.next;
    }
    return !1;
  }
  function bt(l) {
    st = l, za = null, l = l.dependencies, l !== null && (l.firstContext = null);
  }
  function Sl(l) {
    return d0(st, l);
  }
  function je(l, a) {
    return st === null && bt(l), d0(l, a);
  }
  function d0(l, a) {
    var t = a._currentValue;
    if (a = { context: a, memoizedValue: t, next: null }, za === null) {
      if (l === null) throw Error(s(308));
      za = a, l.dependencies = { lanes: 0, firstContext: a }, l.flags |= 524288;
    } else za = za.next = a;
    return t;
  }
  var zy = typeof AbortController < "u" ? AbortController : function() {
    var l = [], a = this.signal = {
      aborted: !1,
      addEventListener: function(t, u) {
        l.push(u);
      }
    };
    this.abort = function() {
      a.aborted = !0, l.forEach(function(t) {
        return t();
      });
    };
  }, oy = E.unstable_scheduleCallback, Ey = E.unstable_NormalPriority, ul = {
    $$typeof: xl,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function Hf() {
    return {
      controller: new zy(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function Xu(l) {
    l.refCount--, l.refCount === 0 && oy(Ey, function() {
      l.controller.abort();
    });
  }
  var Cu = null, Nf = 0, Ft = 0, kt = null;
  function Ay(l, a) {
    if (Cu === null) {
      var t = Cu = [];
      Nf = 0, Ft = Yc(), kt = {
        status: "pending",
        value: void 0,
        then: function(u) {
          t.push(u);
        }
      };
    }
    return Nf++, a.then(S0, S0), a;
  }
  function S0() {
    if (--Nf === 0 && Cu !== null) {
      kt !== null && (kt.status = "fulfilled");
      var l = Cu;
      Cu = null, Ft = 0, kt = null;
      for (var a = 0; a < l.length; a++) (0, l[a])();
    }
  }
  function Ty(l, a) {
    var t = [], u = {
      status: "pending",
      value: null,
      reason: null,
      then: function(e) {
        t.push(e);
      }
    };
    return l.then(
      function() {
        u.status = "fulfilled", u.value = a;
        for (var e = 0; e < t.length; e++) (0, t[e])(a);
      },
      function(e) {
        for (u.status = "rejected", u.reason = e, e = 0; e < t.length; e++)
          (0, t[e])(void 0);
      }
    ), u;
  }
  var g0 = z.S;
  z.S = function(l, a) {
    Im = Nl(), typeof a == "object" && a !== null && typeof a.then == "function" && Ay(l, a), g0 !== null && g0(l, a);
  };
  var zt = zl(null);
  function Bf() {
    var l = zt.current;
    return l !== null ? l : J.pooledCache;
  }
  function Ve(l, a) {
    a === null ? R(zt, zt.current) : R(zt, a.pool);
  }
  function s0() {
    var l = Bf();
    return l === null ? null : { parent: ul._currentValue, pool: l };
  }
  var It = Error(s(460)), qf = Error(s(474)), xe = Error(s(542)), Ke = { then: function() {
  } };
  function b0(l) {
    return l = l.status, l === "fulfilled" || l === "rejected";
  }
  function z0(l, a, t) {
    switch (t = l[t], t === void 0 ? l.push(a) : t !== a && (a.then(Sa, Sa), a = t), a.status) {
      case "fulfilled":
        return a.value;
      case "rejected":
        throw l = a.reason, E0(l), l;
      default:
        if (typeof a.status == "string") a.then(Sa, Sa);
        else {
          if (l = J, l !== null && 100 < l.shellSuspendCounter)
            throw Error(s(482));
          l = a, l.status = "pending", l.then(
            function(u) {
              if (a.status === "pending") {
                var e = a;
                e.status = "fulfilled", e.value = u;
              }
            },
            function(u) {
              if (a.status === "pending") {
                var e = a;
                e.status = "rejected", e.reason = u;
              }
            }
          );
        }
        switch (a.status) {
          case "fulfilled":
            return a.value;
          case "rejected":
            throw l = a.reason, E0(l), l;
        }
        throw Et = a, It;
    }
  }
  function ot(l) {
    try {
      var a = l._init;
      return a(l._payload);
    } catch (t) {
      throw t !== null && typeof t == "object" && typeof t.then == "function" ? (Et = t, It) : t;
    }
  }
  var Et = null;
  function o0() {
    if (Et === null) throw Error(s(459));
    var l = Et;
    return Et = null, l;
  }
  function E0(l) {
    if (l === It || l === xe)
      throw Error(s(483));
  }
  var Pt = null, Gu = 0;
  function Le(l) {
    var a = Gu;
    return Gu += 1, Pt === null && (Pt = []), z0(Pt, l, a);
  }
  function Zu(l, a) {
    a = a.props.ref, l.ref = a !== void 0 ? a : null;
  }
  function Je(l, a) {
    throw a.$$typeof === il ? Error(s(525)) : (l = Object.prototype.toString.call(a), Error(
      s(
        31,
        l === "[object Object]" ? "object with keys {" + Object.keys(a).join(", ") + "}" : l
      )
    ));
  }
  function A0(l) {
    function a(v, m) {
      if (l) {
        var y = v.deletions;
        y === null ? (v.deletions = [m], v.flags |= 16) : y.push(m);
      }
    }
    function t(v, m) {
      if (!l) return null;
      for (; m !== null; )
        a(v, m), m = m.sibling;
      return null;
    }
    function u(v) {
      for (var m = /* @__PURE__ */ new Map(); v !== null; )
        v.key !== null ? m.set(v.key, v) : m.set(v.index, v), v = v.sibling;
      return m;
    }
    function e(v, m) {
      return v = sa(v, m), v.index = 0, v.sibling = null, v;
    }
    function n(v, m, y) {
      return v.index = y, l ? (y = v.alternate, y !== null ? (y = y.index, y < m ? (v.flags |= 67108866, m) : y) : (v.flags |= 67108866, m)) : (v.flags |= 1048576, m);
    }
    function f(v) {
      return l && v.alternate === null && (v.flags |= 67108866), v;
    }
    function c(v, m, y, b) {
      return m === null || m.tag !== 6 ? (m = of(y, v.mode, b), m.return = v, m) : (m = e(m, y), m.return = v, m);
    }
    function i(v, m, y, b) {
      var O = y.type;
      return O === Vl ? g(
        v,
        m,
        y.props.children,
        b,
        y.key
      ) : m !== null && (m.elementType === O || typeof O == "object" && O !== null && O.$$typeof === aa && ot(O) === m.type) ? (m = e(m, y.props), Zu(m, y), m.return = v, m) : (m = Ze(
        y.type,
        y.key,
        y.props,
        null,
        v.mode,
        b
      ), Zu(m, y), m.return = v, m);
    }
    function h(v, m, y, b) {
      return m === null || m.tag !== 4 || m.stateNode.containerInfo !== y.containerInfo || m.stateNode.implementation !== y.implementation ? (m = Ef(y, v.mode, b), m.return = v, m) : (m = e(m, y.children || []), m.return = v, m);
    }
    function g(v, m, y, b, O) {
      return m === null || m.tag !== 7 ? (m = St(
        y,
        v.mode,
        b,
        O
      ), m.return = v, m) : (m = e(m, y), m.return = v, m);
    }
    function o(v, m, y) {
      if (typeof m == "string" && m !== "" || typeof m == "number" || typeof m == "bigint")
        return m = of(
          "" + m,
          v.mode,
          y
        ), m.return = v, m;
      if (typeof m == "object" && m !== null) {
        switch (m.$$typeof) {
          case qa:
            return y = Ze(
              m.type,
              m.key,
              m.props,
              null,
              v.mode,
              y
            ), Zu(y, m), y.return = v, y;
          case la:
            return m = Ef(
              m,
              v.mode,
              y
            ), m.return = v, m;
          case aa:
            return m = ot(m), o(v, m, y);
        }
        if (ha(m) || Kl(m))
          return m = St(
            m,
            v.mode,
            y,
            null
          ), m.return = v, m;
        if (typeof m.then == "function")
          return o(v, Le(m), y);
        if (m.$$typeof === xl)
          return o(
            v,
            je(v, m),
            y
          );
        Je(v, m);
      }
      return null;
    }
    function d(v, m, y, b) {
      var O = m !== null ? m.key : null;
      if (typeof y == "string" && y !== "" || typeof y == "number" || typeof y == "bigint")
        return O !== null ? null : c(v, m, "" + y, b);
      if (typeof y == "object" && y !== null) {
        switch (y.$$typeof) {
          case qa:
            return y.key === O ? i(v, m, y, b) : null;
          case la:
            return y.key === O ? h(v, m, y, b) : null;
          case aa:
            return y = ot(y), d(v, m, y, b);
        }
        if (ha(y) || Kl(y))
          return O !== null ? null : g(v, m, y, b, null);
        if (typeof y.then == "function")
          return d(
            v,
            m,
            Le(y),
            b
          );
        if (y.$$typeof === xl)
          return d(
            v,
            m,
            je(v, y),
            b
          );
        Je(v, y);
      }
      return null;
    }
    function S(v, m, y, b, O) {
      if (typeof b == "string" && b !== "" || typeof b == "number" || typeof b == "bigint")
        return v = v.get(y) || null, c(m, v, "" + b, O);
      if (typeof b == "object" && b !== null) {
        switch (b.$$typeof) {
          case qa:
            return v = v.get(
              b.key === null ? y : b.key
            ) || null, i(m, v, b, O);
          case la:
            return v = v.get(
              b.key === null ? y : b.key
            ) || null, h(m, v, b, O);
          case aa:
            return b = ot(b), S(
              v,
              m,
              y,
              b,
              O
            );
        }
        if (ha(b) || Kl(b))
          return v = v.get(y) || null, g(m, v, b, O, null);
        if (typeof b.then == "function")
          return S(
            v,
            m,
            y,
            Le(b),
            O
          );
        if (b.$$typeof === xl)
          return S(
            v,
            m,
            y,
            je(m, b),
            O
          );
        Je(m, b);
      }
      return null;
    }
    function T(v, m, y, b) {
      for (var O = null, G = null, D = m, N = m = 0, X = null; D !== null && N < y.length; N++) {
        D.index > N ? (X = D, D = null) : X = D.sibling;
        var Z = d(
          v,
          D,
          y[N],
          b
        );
        if (Z === null) {
          D === null && (D = X);
          break;
        }
        l && D && Z.alternate === null && a(v, D), m = n(Z, m, N), G === null ? O = Z : G.sibling = Z, G = Z, D = X;
      }
      if (N === y.length)
        return t(v, D), C && ba(v, N), O;
      if (D === null) {
        for (; N < y.length; N++)
          D = o(v, y[N], b), D !== null && (m = n(
            D,
            m,
            N
          ), G === null ? O = D : G.sibling = D, G = D);
        return C && ba(v, N), O;
      }
      for (D = u(D); N < y.length; N++)
        X = S(
          D,
          v,
          N,
          y[N],
          b
        ), X !== null && (l && X.alternate !== null && D.delete(
          X.key === null ? N : X.key
        ), m = n(
          X,
          m,
          N
        ), G === null ? O = X : G.sibling = X, G = X);
      return l && D.forEach(function(et) {
        return a(v, et);
      }), C && ba(v, N), O;
    }
    function U(v, m, y, b) {
      if (y == null) throw Error(s(151));
      for (var O = null, G = null, D = m, N = m = 0, X = null, Z = y.next(); D !== null && !Z.done; N++, Z = y.next()) {
        D.index > N ? (X = D, D = null) : X = D.sibling;
        var et = d(v, D, Z.value, b);
        if (et === null) {
          D === null && (D = X);
          break;
        }
        l && D && et.alternate === null && a(v, D), m = n(et, m, N), G === null ? O = et : G.sibling = et, G = et, D = X;
      }
      if (Z.done)
        return t(v, D), C && ba(v, N), O;
      if (D === null) {
        for (; !Z.done; N++, Z = y.next())
          Z = o(v, Z.value, b), Z !== null && (m = n(Z, m, N), G === null ? O = Z : G.sibling = Z, G = Z);
        return C && ba(v, N), O;
      }
      for (D = u(D); !Z.done; N++, Z = y.next())
        Z = S(D, v, N, Z.value, b), Z !== null && (l && Z.alternate !== null && D.delete(Z.key === null ? N : Z.key), m = n(Z, m, N), G === null ? O = Z : G.sibling = Z, G = Z);
      return l && D.forEach(function(Qh) {
        return a(v, Qh);
      }), C && ba(v, N), O;
    }
    function L(v, m, y, b) {
      if (typeof y == "object" && y !== null && y.type === Vl && y.key === null && (y = y.props.children), typeof y == "object" && y !== null) {
        switch (y.$$typeof) {
          case qa:
            l: {
              for (var O = y.key; m !== null; ) {
                if (m.key === O) {
                  if (O = y.type, O === Vl) {
                    if (m.tag === 7) {
                      t(
                        v,
                        m.sibling
                      ), b = e(
                        m,
                        y.props.children
                      ), b.return = v, v = b;
                      break l;
                    }
                  } else if (m.elementType === O || typeof O == "object" && O !== null && O.$$typeof === aa && ot(O) === m.type) {
                    t(
                      v,
                      m.sibling
                    ), b = e(m, y.props), Zu(b, y), b.return = v, v = b;
                    break l;
                  }
                  t(v, m);
                  break;
                } else a(v, m);
                m = m.sibling;
              }
              y.type === Vl ? (b = St(
                y.props.children,
                v.mode,
                b,
                y.key
              ), b.return = v, v = b) : (b = Ze(
                y.type,
                y.key,
                y.props,
                null,
                v.mode,
                b
              ), Zu(b, y), b.return = v, v = b);
            }
            return f(v);
          case la:
            l: {
              for (O = y.key; m !== null; ) {
                if (m.key === O)
                  if (m.tag === 4 && m.stateNode.containerInfo === y.containerInfo && m.stateNode.implementation === y.implementation) {
                    t(
                      v,
                      m.sibling
                    ), b = e(m, y.children || []), b.return = v, v = b;
                    break l;
                  } else {
                    t(v, m);
                    break;
                  }
                else a(v, m);
                m = m.sibling;
              }
              b = Ef(y, v.mode, b), b.return = v, v = b;
            }
            return f(v);
          case aa:
            return y = ot(y), L(
              v,
              m,
              y,
              b
            );
        }
        if (ha(y))
          return T(
            v,
            m,
            y,
            b
          );
        if (Kl(y)) {
          if (O = Kl(y), typeof O != "function") throw Error(s(150));
          return y = O.call(y), U(
            v,
            m,
            y,
            b
          );
        }
        if (typeof y.then == "function")
          return L(
            v,
            m,
            Le(y),
            b
          );
        if (y.$$typeof === xl)
          return L(
            v,
            m,
            je(v, y),
            b
          );
        Je(v, y);
      }
      return typeof y == "string" && y !== "" || typeof y == "number" || typeof y == "bigint" ? (y = "" + y, m !== null && m.tag === 6 ? (t(v, m.sibling), b = e(m, y), b.return = v, v = b) : (t(v, m), b = of(y, v.mode, b), b.return = v, v = b), f(v)) : t(v, m);
    }
    return function(v, m, y, b) {
      try {
        Gu = 0;
        var O = L(
          v,
          m,
          y,
          b
        );
        return Pt = null, O;
      } catch (D) {
        if (D === It || D === xe) throw D;
        var G = Ql(29, D, null, v.mode);
        return G.lanes = b, G.return = v, G;
      } finally {
      }
    };
  }
  var At = A0(!0), T0 = A0(!1), Va = !1;
  function Yf(l) {
    l.updateQueue = {
      baseState: l.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function Qf(l, a) {
    l = l.updateQueue, a.updateQueue === l && (a.updateQueue = {
      baseState: l.baseState,
      firstBaseUpdate: l.firstBaseUpdate,
      lastBaseUpdate: l.lastBaseUpdate,
      shared: l.shared,
      callbacks: null
    });
  }
  function xa(l) {
    return { lane: l, tag: 0, payload: null, callback: null, next: null };
  }
  function Ka(l, a, t) {
    var u = l.updateQueue;
    if (u === null) return null;
    if (u = u.shared, (p & 2) !== 0) {
      var e = u.pending;
      return e === null ? a.next = a : (a.next = e.next, e.next = a), u.pending = a, a = Ge(l), n0(l, null, t), a;
    }
    return Ce(l, u, a, t), Ge(l);
  }
  function pu(l, a, t) {
    if (a = a.updateQueue, a !== null && (a = a.shared, (t & 4194048) !== 0)) {
      var u = a.lanes;
      u &= l.pendingLanes, t |= u, a.lanes = t, di(l, t);
    }
  }
  function Xf(l, a) {
    var t = l.updateQueue, u = l.alternate;
    if (u !== null && (u = u.updateQueue, t === u)) {
      var e = null, n = null;
      if (t = t.firstBaseUpdate, t !== null) {
        do {
          var f = {
            lane: t.lane,
            tag: t.tag,
            payload: t.payload,
            callback: null,
            next: null
          };
          n === null ? e = n = f : n = n.next = f, t = t.next;
        } while (t !== null);
        n === null ? e = n = a : n = n.next = a;
      } else e = n = a;
      t = {
        baseState: u.baseState,
        firstBaseUpdate: e,
        lastBaseUpdate: n,
        shared: u.shared,
        callbacks: u.callbacks
      }, l.updateQueue = t;
      return;
    }
    l = t.lastBaseUpdate, l === null ? t.firstBaseUpdate = a : l.next = a, t.lastBaseUpdate = a;
  }
  var Cf = !1;
  function Ru() {
    if (Cf) {
      var l = kt;
      if (l !== null) throw l;
    }
  }
  function ju(l, a, t, u) {
    Cf = !1;
    var e = l.updateQueue;
    Va = !1;
    var n = e.firstBaseUpdate, f = e.lastBaseUpdate, c = e.shared.pending;
    if (c !== null) {
      e.shared.pending = null;
      var i = c, h = i.next;
      i.next = null, f === null ? n = h : f.next = h, f = i;
      var g = l.alternate;
      g !== null && (g = g.updateQueue, c = g.lastBaseUpdate, c !== f && (c === null ? g.firstBaseUpdate = h : c.next = h, g.lastBaseUpdate = i));
    }
    if (n !== null) {
      var o = e.baseState;
      f = 0, g = h = i = null, c = n;
      do {
        var d = c.lane & -536870913, S = d !== c.lane;
        if (S ? (Q & d) === d : (u & d) === d) {
          d !== 0 && d === Ft && (Cf = !0), g !== null && (g = g.next = {
            lane: 0,
            tag: c.tag,
            payload: c.payload,
            callback: null,
            next: null
          });
          l: {
            var T = l, U = c;
            d = a;
            var L = t;
            switch (U.tag) {
              case 1:
                if (T = U.payload, typeof T == "function") {
                  o = T.call(L, o, d);
                  break l;
                }
                o = T;
                break l;
              case 3:
                T.flags = T.flags & -65537 | 128;
              case 0:
                if (T = U.payload, d = typeof T == "function" ? T.call(L, o, d) : T, d == null) break l;
                o = B({}, o, d);
                break l;
              case 2:
                Va = !0;
            }
          }
          d = c.callback, d !== null && (l.flags |= 64, S && (l.flags |= 8192), S = e.callbacks, S === null ? e.callbacks = [d] : S.push(d));
        } else
          S = {
            lane: d,
            tag: c.tag,
            payload: c.payload,
            callback: c.callback,
            next: null
          }, g === null ? (h = g = S, i = o) : g = g.next = S, f |= d;
        if (c = c.next, c === null) {
          if (c = e.shared.pending, c === null)
            break;
          S = c, c = S.next, S.next = null, e.lastBaseUpdate = S, e.shared.pending = null;
        }
      } while (!0);
      g === null && (i = o), e.baseState = i, e.firstBaseUpdate = h, e.lastBaseUpdate = g, n === null && (e.shared.lanes = 0), ra |= f, l.lanes = f, l.memoizedState = o;
    }
  }
  function M0(l, a) {
    if (typeof l != "function")
      throw Error(s(191, l));
    l.call(a);
  }
  function D0(l, a) {
    var t = l.callbacks;
    if (t !== null)
      for (l.callbacks = null, l = 0; l < t.length; l++)
        M0(t[l], a);
  }
  var lu = zl(null), We = zl(0);
  function O0(l, a) {
    l = Ha, R(We, l), R(lu, a), Ha = l | a.baseLanes;
  }
  function Gf() {
    R(We, Ha), R(lu, lu.current);
  }
  function Zf() {
    Ha = We.current, k(lu), k(We);
  }
  var Xl = zl(null), kl = null;
  function La(l) {
    var a = l.alternate;
    R(ll, ll.current & 1), R(Xl, l), kl === null && (a === null || lu.current !== null || a.memoizedState !== null) && (kl = l);
  }
  function pf(l) {
    R(ll, ll.current), R(Xl, l), kl === null && (kl = l);
  }
  function U0(l) {
    l.tag === 22 ? (R(ll, ll.current), R(Xl, l), kl === null && (kl = l)) : Ja();
  }
  function Ja() {
    R(ll, ll.current), R(Xl, Xl.current);
  }
  function Cl(l) {
    k(Xl), kl === l && (kl = null), k(ll);
  }
  var ll = zl(0);
  function we(l) {
    for (var a = l; a !== null; ) {
      if (a.tag === 13) {
        var t = a.memoizedState;
        if (t !== null && (t = t.dehydrated, t === null || Lc(t) || Jc(t)))
          return a;
      } else if (a.tag === 19 && (a.memoizedProps.revealOrder === "forwards" || a.memoizedProps.revealOrder === "backwards" || a.memoizedProps.revealOrder === "unstable_legacy-backwards" || a.memoizedProps.revealOrder === "together")) {
        if ((a.flags & 128) !== 0) return a;
      } else if (a.child !== null) {
        a.child.return = a, a = a.child;
        continue;
      }
      if (a === l) break;
      for (; a.sibling === null; ) {
        if (a.return === null || a.return === l) return null;
        a = a.return;
      }
      a.sibling.return = a.return, a = a.sibling;
    }
    return null;
  }
  var Ea = 0, H = null, x = null, el = null, re = !1, au = !1, Tt = !1, $e = 0, Vu = 0, tu = null, My = 0;
  function I() {
    throw Error(s(321));
  }
  function Rf(l, a) {
    if (a === null) return !1;
    for (var t = 0; t < a.length && t < l.length; t++)
      if (!Yl(l[t], a[t])) return !1;
    return !0;
  }
  function jf(l, a, t, u, e, n) {
    return Ea = n, H = a, a.memoizedState = null, a.updateQueue = null, a.lanes = 0, z.H = l === null || l.memoizedState === null ? mm : ac, Tt = !1, n = t(u, e), Tt = !1, au && (n = H0(
      a,
      t,
      u,
      e
    )), _0(l), n;
  }
  function _0(l) {
    z.H = Lu;
    var a = x !== null && x.next !== null;
    if (Ea = 0, el = x = H = null, re = !1, Vu = 0, tu = null, a) throw Error(s(300));
    l === null || nl || (l = l.dependencies, l !== null && Re(l) && (nl = !0));
  }
  function H0(l, a, t, u) {
    H = l;
    var e = 0;
    do {
      if (au && (tu = null), Vu = 0, au = !1, 25 <= e) throw Error(s(301));
      if (e += 1, el = x = null, l.updateQueue != null) {
        var n = l.updateQueue;
        n.lastEffect = null, n.events = null, n.stores = null, n.memoCache != null && (n.memoCache.index = 0);
      }
      z.H = vm, n = a(t, u);
    } while (au);
    return n;
  }
  function Dy() {
    var l = z.H, a = l.useState()[0];
    return a = typeof a.then == "function" ? xu(a) : a, l = l.useState()[0], (x !== null ? x.memoizedState : null) !== l && (H.flags |= 1024), a;
  }
  function Vf() {
    var l = $e !== 0;
    return $e = 0, l;
  }
  function xf(l, a, t) {
    a.updateQueue = l.updateQueue, a.flags &= -2053, l.lanes &= ~t;
  }
  function Kf(l) {
    if (re) {
      for (l = l.memoizedState; l !== null; ) {
        var a = l.queue;
        a !== null && (a.pending = null), l = l.next;
      }
      re = !1;
    }
    Ea = 0, el = x = H = null, au = !1, Vu = $e = 0, tu = null;
  }
  function ol() {
    var l = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return el === null ? H.memoizedState = el = l : el = el.next = l, el;
  }
  function al() {
    if (x === null) {
      var l = H.alternate;
      l = l !== null ? l.memoizedState : null;
    } else l = x.next;
    var a = el === null ? H.memoizedState : el.next;
    if (a !== null)
      el = a, x = l;
    else {
      if (l === null)
        throw H.alternate === null ? Error(s(467)) : Error(s(310));
      x = l, l = {
        memoizedState: x.memoizedState,
        baseState: x.baseState,
        baseQueue: x.baseQueue,
        queue: x.queue,
        next: null
      }, el === null ? H.memoizedState = el = l : el = el.next = l;
    }
    return el;
  }
  function Fe() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function xu(l) {
    var a = Vu;
    return Vu += 1, tu === null && (tu = []), l = z0(tu, l, a), a = H, (el === null ? a.memoizedState : el.next) === null && (a = a.alternate, z.H = a === null || a.memoizedState === null ? mm : ac), l;
  }
  function ke(l) {
    if (l !== null && typeof l == "object") {
      if (typeof l.then == "function") return xu(l);
      if (l.$$typeof === xl) return Sl(l);
    }
    throw Error(s(438, String(l)));
  }
  function Lf(l) {
    var a = null, t = H.updateQueue;
    if (t !== null && (a = t.memoCache), a == null) {
      var u = H.alternate;
      u !== null && (u = u.updateQueue, u !== null && (u = u.memoCache, u != null && (a = {
        data: u.data.map(function(e) {
          return e.slice();
        }),
        index: 0
      })));
    }
    if (a == null && (a = { data: [], index: 0 }), t === null && (t = Fe(), H.updateQueue = t), t.memoCache = a, t = a.data[a.index], t === void 0)
      for (t = a.data[a.index] = Array(l), u = 0; u < l; u++)
        t[u] = de;
    return a.index++, t;
  }
  function Aa(l, a) {
    return typeof a == "function" ? a(l) : a;
  }
  function Ie(l) {
    var a = al();
    return Jf(a, x, l);
  }
  function Jf(l, a, t) {
    var u = l.queue;
    if (u === null) throw Error(s(311));
    u.lastRenderedReducer = t;
    var e = l.baseQueue, n = u.pending;
    if (n !== null) {
      if (e !== null) {
        var f = e.next;
        e.next = n.next, n.next = f;
      }
      a.baseQueue = e = n, u.pending = null;
    }
    if (n = l.baseState, e === null) l.memoizedState = n;
    else {
      a = e.next;
      var c = f = null, i = null, h = a, g = !1;
      do {
        var o = h.lane & -536870913;
        if (o !== h.lane ? (Q & o) === o : (Ea & o) === o) {
          var d = h.revertLane;
          if (d === 0)
            i !== null && (i = i.next = {
              lane: 0,
              revertLane: 0,
              gesture: null,
              action: h.action,
              hasEagerState: h.hasEagerState,
              eagerState: h.eagerState,
              next: null
            }), o === Ft && (g = !0);
          else if ((Ea & d) === d) {
            h = h.next, d === Ft && (g = !0);
            continue;
          } else
            o = {
              lane: 0,
              revertLane: h.revertLane,
              gesture: null,
              action: h.action,
              hasEagerState: h.hasEagerState,
              eagerState: h.eagerState,
              next: null
            }, i === null ? (c = i = o, f = n) : i = i.next = o, H.lanes |= d, ra |= d;
          o = h.action, Tt && t(n, o), n = h.hasEagerState ? h.eagerState : t(n, o);
        } else
          d = {
            lane: o,
            revertLane: h.revertLane,
            gesture: h.gesture,
            action: h.action,
            hasEagerState: h.hasEagerState,
            eagerState: h.eagerState,
            next: null
          }, i === null ? (c = i = d, f = n) : i = i.next = d, H.lanes |= o, ra |= o;
        h = h.next;
      } while (h !== null && h !== a);
      if (i === null ? f = n : i.next = c, !Yl(n, l.memoizedState) && (nl = !0, g && (t = kt, t !== null)))
        throw t;
      l.memoizedState = n, l.baseState = f, l.baseQueue = i, u.lastRenderedState = n;
    }
    return e === null && (u.lanes = 0), [l.memoizedState, u.dispatch];
  }
  function Wf(l) {
    var a = al(), t = a.queue;
    if (t === null) throw Error(s(311));
    t.lastRenderedReducer = l;
    var u = t.dispatch, e = t.pending, n = a.memoizedState;
    if (e !== null) {
      t.pending = null;
      var f = e = e.next;
      do
        n = l(n, f.action), f = f.next;
      while (f !== e);
      Yl(n, a.memoizedState) || (nl = !0), a.memoizedState = n, a.baseQueue === null && (a.baseState = n), t.lastRenderedState = n;
    }
    return [n, u];
  }
  function N0(l, a, t) {
    var u = H, e = al(), n = C;
    if (n) {
      if (t === void 0) throw Error(s(407));
      t = t();
    } else t = a();
    var f = !Yl(
      (x || e).memoizedState,
      t
    );
    if (f && (e.memoizedState = t, nl = !0), e = e.queue, $f(Y0.bind(null, u, e, l), [
      l
    ]), e.getSnapshot !== a || f || el !== null && el.memoizedState.tag & 1) {
      if (u.flags |= 2048, uu(
        9,
        { destroy: void 0 },
        q0.bind(
          null,
          u,
          e,
          t,
          a
        ),
        null
      ), J === null) throw Error(s(349));
      n || (Ea & 127) !== 0 || B0(u, a, t);
    }
    return t;
  }
  function B0(l, a, t) {
    l.flags |= 16384, l = { getSnapshot: a, value: t }, a = H.updateQueue, a === null ? (a = Fe(), H.updateQueue = a, a.stores = [l]) : (t = a.stores, t === null ? a.stores = [l] : t.push(l));
  }
  function q0(l, a, t, u) {
    a.value = t, a.getSnapshot = u, Q0(a) && X0(l);
  }
  function Y0(l, a, t) {
    return t(function() {
      Q0(a) && X0(l);
    });
  }
  function Q0(l) {
    var a = l.getSnapshot;
    l = l.value;
    try {
      var t = a();
      return !Yl(l, t);
    } catch {
      return !0;
    }
  }
  function X0(l) {
    var a = dt(l, 2);
    a !== null && Hl(a, l, 2);
  }
  function wf(l) {
    var a = ol();
    if (typeof l == "function") {
      var t = l;
      if (l = t(), Tt) {
        Xa(!0);
        try {
          t();
        } finally {
          Xa(!1);
        }
      }
    }
    return a.memoizedState = a.baseState = l, a.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Aa,
      lastRenderedState: l
    }, a;
  }
  function C0(l, a, t, u) {
    return l.baseState = t, Jf(
      l,
      x,
      typeof u == "function" ? u : Aa
    );
  }
  function Oy(l, a, t, u, e) {
    if (an(l)) throw Error(s(485));
    if (l = a.action, l !== null) {
      var n = {
        payload: e,
        action: l,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function(f) {
          n.listeners.push(f);
        }
      };
      z.T !== null ? t(!0) : n.isTransition = !1, u(n), t = a.pending, t === null ? (n.next = a.pending = n, G0(a, n)) : (n.next = t.next, a.pending = t.next = n);
    }
  }
  function G0(l, a) {
    var t = a.action, u = a.payload, e = l.state;
    if (a.isTransition) {
      var n = z.T, f = {};
      z.T = f;
      try {
        var c = t(e, u), i = z.S;
        i !== null && i(f, c), Z0(l, a, c);
      } catch (h) {
        rf(l, a, h);
      } finally {
        n !== null && f.types !== null && (n.types = f.types), z.T = n;
      }
    } else
      try {
        n = t(e, u), Z0(l, a, n);
      } catch (h) {
        rf(l, a, h);
      }
  }
  function Z0(l, a, t) {
    t !== null && typeof t == "object" && typeof t.then == "function" ? t.then(
      function(u) {
        p0(l, a, u);
      },
      function(u) {
        return rf(l, a, u);
      }
    ) : p0(l, a, t);
  }
  function p0(l, a, t) {
    a.status = "fulfilled", a.value = t, R0(a), l.state = t, a = l.pending, a !== null && (t = a.next, t === a ? l.pending = null : (t = t.next, a.next = t, G0(l, t)));
  }
  function rf(l, a, t) {
    var u = l.pending;
    if (l.pending = null, u !== null) {
      u = u.next;
      do
        a.status = "rejected", a.reason = t, R0(a), a = a.next;
      while (a !== u);
    }
    l.action = null;
  }
  function R0(l) {
    l = l.listeners;
    for (var a = 0; a < l.length; a++) (0, l[a])();
  }
  function j0(l, a) {
    return a;
  }
  function V0(l, a) {
    if (C) {
      var t = J.formState;
      if (t !== null) {
        l: {
          var u = H;
          if (C) {
            if (r) {
              a: {
                for (var e = r, n = Fl; e.nodeType !== 8; ) {
                  if (!n) {
                    e = null;
                    break a;
                  }
                  if (e = Il(
                    e.nextSibling
                  ), e === null) {
                    e = null;
                    break a;
                  }
                }
                n = e.data, e = n === "F!" || n === "F" ? e : null;
              }
              if (e) {
                r = Il(
                  e.nextSibling
                ), u = e.data === "F!";
                break l;
              }
            }
            Ra(u);
          }
          u = !1;
        }
        u && (a = t[0]);
      }
    }
    return t = ol(), t.memoizedState = t.baseState = a, u = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: j0,
      lastRenderedState: a
    }, t.queue = u, t = fm.bind(
      null,
      H,
      u
    ), u.dispatch = t, u = wf(!1), n = lc.bind(
      null,
      H,
      !1,
      u.queue
    ), u = ol(), e = {
      state: a,
      dispatch: null,
      action: l,
      pending: null
    }, u.queue = e, t = Oy.bind(
      null,
      H,
      e,
      n,
      t
    ), e.dispatch = t, u.memoizedState = l, [a, t, !1];
  }
  function x0(l) {
    var a = al();
    return K0(a, x, l);
  }
  function K0(l, a, t) {
    if (a = Jf(
      l,
      a,
      j0
    )[0], l = Ie(Aa)[0], typeof a == "object" && a !== null && typeof a.then == "function")
      try {
        var u = xu(a);
      } catch (f) {
        throw f === It ? xe : f;
      }
    else u = a;
    a = al();
    var e = a.queue, n = e.dispatch;
    return t !== a.memoizedState && (H.flags |= 2048, uu(
      9,
      { destroy: void 0 },
      Uy.bind(null, e, t),
      null
    )), [u, n, l];
  }
  function Uy(l, a) {
    l.action = a;
  }
  function L0(l) {
    var a = al(), t = x;
    if (t !== null)
      return K0(a, t, l);
    al(), a = a.memoizedState, t = al();
    var u = t.queue.dispatch;
    return t.memoizedState = l, [a, u, !1];
  }
  function uu(l, a, t, u) {
    return l = { tag: l, create: t, deps: u, inst: a, next: null }, a = H.updateQueue, a === null && (a = Fe(), H.updateQueue = a), t = a.lastEffect, t === null ? a.lastEffect = l.next = l : (u = t.next, t.next = l, l.next = u, a.lastEffect = l), l;
  }
  function J0() {
    return al().memoizedState;
  }
  function Pe(l, a, t, u) {
    var e = ol();
    H.flags |= l, e.memoizedState = uu(
      1 | a,
      { destroy: void 0 },
      t,
      u === void 0 ? null : u
    );
  }
  function ln(l, a, t, u) {
    var e = al();
    u = u === void 0 ? null : u;
    var n = e.memoizedState.inst;
    x !== null && u !== null && Rf(u, x.memoizedState.deps) ? e.memoizedState = uu(a, n, t, u) : (H.flags |= l, e.memoizedState = uu(
      1 | a,
      n,
      t,
      u
    ));
  }
  function W0(l, a) {
    Pe(8390656, 8, l, a);
  }
  function $f(l, a) {
    ln(2048, 8, l, a);
  }
  function _y(l) {
    H.flags |= 4;
    var a = H.updateQueue;
    if (a === null)
      a = Fe(), H.updateQueue = a, a.events = [l];
    else {
      var t = a.events;
      t === null ? a.events = [l] : t.push(l);
    }
  }
  function w0(l) {
    var a = al().memoizedState;
    return _y({ ref: a, nextImpl: l }), function() {
      if ((p & 2) !== 0) throw Error(s(440));
      return a.impl.apply(void 0, arguments);
    };
  }
  function r0(l, a) {
    return ln(4, 2, l, a);
  }
  function $0(l, a) {
    return ln(4, 4, l, a);
  }
  function F0(l, a) {
    if (typeof a == "function") {
      l = l();
      var t = a(l);
      return function() {
        typeof t == "function" ? t() : a(null);
      };
    }
    if (a != null)
      return l = l(), a.current = l, function() {
        a.current = null;
      };
  }
  function k0(l, a, t) {
    t = t != null ? t.concat([l]) : null, ln(4, 4, F0.bind(null, a, l), t);
  }
  function Ff() {
  }
  function I0(l, a) {
    var t = al();
    a = a === void 0 ? null : a;
    var u = t.memoizedState;
    return a !== null && Rf(a, u[1]) ? u[0] : (t.memoizedState = [l, a], l);
  }
  function P0(l, a) {
    var t = al();
    a = a === void 0 ? null : a;
    var u = t.memoizedState;
    if (a !== null && Rf(a, u[1]))
      return u[0];
    if (u = l(), Tt) {
      Xa(!0);
      try {
        l();
      } finally {
        Xa(!1);
      }
    }
    return t.memoizedState = [u, a], u;
  }
  function kf(l, a, t) {
    return t === void 0 || (Ea & 1073741824) !== 0 && (Q & 261930) === 0 ? l.memoizedState = a : (l.memoizedState = t, l = lv(), H.lanes |= l, ra |= l, t);
  }
  function lm(l, a, t, u) {
    return Yl(t, a) ? t : lu.current !== null ? (l = kf(l, t, u), Yl(l, a) || (nl = !0), l) : (Ea & 42) === 0 || (Ea & 1073741824) !== 0 && (Q & 261930) === 0 ? (nl = !0, l.memoizedState = t) : (l = lv(), H.lanes |= l, ra |= l, a);
  }
  function am(l, a, t, u, e) {
    var n = A.p;
    A.p = n !== 0 && 8 > n ? n : 8;
    var f = z.T, c = {};
    z.T = c, lc(l, !1, a, t);
    try {
      var i = e(), h = z.S;
      if (h !== null && h(c, i), i !== null && typeof i == "object" && typeof i.then == "function") {
        var g = Ty(
          i,
          u
        );
        Ku(
          l,
          a,
          g,
          pl(l)
        );
      } else
        Ku(
          l,
          a,
          u,
          pl(l)
        );
    } catch (o) {
      Ku(
        l,
        a,
        { then: function() {
        }, status: "rejected", reason: o },
        pl()
      );
    } finally {
      A.p = n, f !== null && c.types !== null && (f.types = c.types), z.T = f;
    }
  }
  function Hy() {
  }
  function If(l, a, t, u) {
    if (l.tag !== 5) throw Error(s(476));
    var e = tm(l).queue;
    am(
      l,
      e,
      a,
      _,
      t === null ? Hy : function() {
        return um(l), t(u);
      }
    );
  }
  function tm(l) {
    var a = l.memoizedState;
    if (a !== null) return a;
    a = {
      memoizedState: _,
      baseState: _,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Aa,
        lastRenderedState: _
      },
      next: null
    };
    var t = {};
    return a.next = {
      memoizedState: t,
      baseState: t,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Aa,
        lastRenderedState: t
      },
      next: null
    }, l.memoizedState = a, l = l.alternate, l !== null && (l.memoizedState = a), a;
  }
  function um(l) {
    var a = tm(l);
    a.next === null && (a = l.alternate.memoizedState), Ku(
      l,
      a.next.queue,
      {},
      pl()
    );
  }
  function Pf() {
    return Sl(fe);
  }
  function em() {
    return al().memoizedState;
  }
  function nm() {
    return al().memoizedState;
  }
  function Ny(l) {
    for (var a = l.return; a !== null; ) {
      switch (a.tag) {
        case 24:
        case 3:
          var t = pl();
          l = xa(t);
          var u = Ka(a, l, t);
          u !== null && (Hl(u, a, t), pu(u, a, t)), a = { cache: Hf() }, l.payload = a;
          return;
      }
      a = a.return;
    }
  }
  function By(l, a, t) {
    var u = pl();
    t = {
      lane: u,
      revertLane: 0,
      gesture: null,
      action: t,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, an(l) ? cm(a, t) : (t = bf(l, a, t, u), t !== null && (Hl(t, l, u), im(t, a, u)));
  }
  function fm(l, a, t) {
    var u = pl();
    Ku(l, a, t, u);
  }
  function Ku(l, a, t, u) {
    var e = {
      lane: u,
      revertLane: 0,
      gesture: null,
      action: t,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (an(l)) cm(a, e);
    else {
      var n = l.alternate;
      if (l.lanes === 0 && (n === null || n.lanes === 0) && (n = a.lastRenderedReducer, n !== null))
        try {
          var f = a.lastRenderedState, c = n(f, t);
          if (e.hasEagerState = !0, e.eagerState = c, Yl(c, f))
            return Ce(l, a, e, 0), J === null && Xe(), !1;
        } catch {
        } finally {
        }
      if (t = bf(l, a, e, u), t !== null)
        return Hl(t, l, u), im(t, a, u), !0;
    }
    return !1;
  }
  function lc(l, a, t, u) {
    if (u = {
      lane: 2,
      revertLane: Yc(),
      gesture: null,
      action: u,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, an(l)) {
      if (a) throw Error(s(479));
    } else
      a = bf(
        l,
        t,
        u,
        2
      ), a !== null && Hl(a, l, 2);
  }
  function an(l) {
    var a = l.alternate;
    return l === H || a !== null && a === H;
  }
  function cm(l, a) {
    au = re = !0;
    var t = l.pending;
    t === null ? a.next = a : (a.next = t.next, t.next = a), l.pending = a;
  }
  function im(l, a, t) {
    if ((t & 4194048) !== 0) {
      var u = a.lanes;
      u &= l.pendingLanes, t |= u, a.lanes = t, di(l, t);
    }
  }
  var Lu = {
    readContext: Sl,
    use: ke,
    useCallback: I,
    useContext: I,
    useEffect: I,
    useImperativeHandle: I,
    useLayoutEffect: I,
    useInsertionEffect: I,
    useMemo: I,
    useReducer: I,
    useRef: I,
    useState: I,
    useDebugValue: I,
    useDeferredValue: I,
    useTransition: I,
    useSyncExternalStore: I,
    useId: I,
    useHostTransitionStatus: I,
    useFormState: I,
    useActionState: I,
    useOptimistic: I,
    useMemoCache: I,
    useCacheRefresh: I
  };
  Lu.useEffectEvent = I;
  var mm = {
    readContext: Sl,
    use: ke,
    useCallback: function(l, a) {
      return ol().memoizedState = [
        l,
        a === void 0 ? null : a
      ], l;
    },
    useContext: Sl,
    useEffect: W0,
    useImperativeHandle: function(l, a, t) {
      t = t != null ? t.concat([l]) : null, Pe(
        4194308,
        4,
        F0.bind(null, a, l),
        t
      );
    },
    useLayoutEffect: function(l, a) {
      return Pe(4194308, 4, l, a);
    },
    useInsertionEffect: function(l, a) {
      Pe(4, 2, l, a);
    },
    useMemo: function(l, a) {
      var t = ol();
      a = a === void 0 ? null : a;
      var u = l();
      if (Tt) {
        Xa(!0);
        try {
          l();
        } finally {
          Xa(!1);
        }
      }
      return t.memoizedState = [u, a], u;
    },
    useReducer: function(l, a, t) {
      var u = ol();
      if (t !== void 0) {
        var e = t(a);
        if (Tt) {
          Xa(!0);
          try {
            t(a);
          } finally {
            Xa(!1);
          }
        }
      } else e = a;
      return u.memoizedState = u.baseState = e, l = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: l,
        lastRenderedState: e
      }, u.queue = l, l = l.dispatch = By.bind(
        null,
        H,
        l
      ), [u.memoizedState, l];
    },
    useRef: function(l) {
      var a = ol();
      return l = { current: l }, a.memoizedState = l;
    },
    useState: function(l) {
      l = wf(l);
      var a = l.queue, t = fm.bind(null, H, a);
      return a.dispatch = t, [l.memoizedState, t];
    },
    useDebugValue: Ff,
    useDeferredValue: function(l, a) {
      var t = ol();
      return kf(t, l, a);
    },
    useTransition: function() {
      var l = wf(!1);
      return l = am.bind(
        null,
        H,
        l.queue,
        !0,
        !1
      ), ol().memoizedState = l, [!1, l];
    },
    useSyncExternalStore: function(l, a, t) {
      var u = H, e = ol();
      if (C) {
        if (t === void 0)
          throw Error(s(407));
        t = t();
      } else {
        if (t = a(), J === null)
          throw Error(s(349));
        (Q & 127) !== 0 || B0(u, a, t);
      }
      e.memoizedState = t;
      var n = { value: t, getSnapshot: a };
      return e.queue = n, W0(Y0.bind(null, u, n, l), [
        l
      ]), u.flags |= 2048, uu(
        9,
        { destroy: void 0 },
        q0.bind(
          null,
          u,
          n,
          t,
          a
        ),
        null
      ), t;
    },
    useId: function() {
      var l = ol(), a = J.identifierPrefix;
      if (C) {
        var t = ia, u = ca;
        t = (u & ~(1 << 32 - ql(u) - 1)).toString(32) + t, a = "_" + a + "R_" + t, t = $e++, 0 < t && (a += "H" + t.toString(32)), a += "_";
      } else
        t = My++, a = "_" + a + "r_" + t.toString(32) + "_";
      return l.memoizedState = a;
    },
    useHostTransitionStatus: Pf,
    useFormState: V0,
    useActionState: V0,
    useOptimistic: function(l) {
      var a = ol();
      a.memoizedState = a.baseState = l;
      var t = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return a.queue = t, a = lc.bind(
        null,
        H,
        !0,
        t
      ), t.dispatch = a, [l, a];
    },
    useMemoCache: Lf,
    useCacheRefresh: function() {
      return ol().memoizedState = Ny.bind(
        null,
        H
      );
    },
    useEffectEvent: function(l) {
      var a = ol(), t = { impl: l };
      return a.memoizedState = t, function() {
        if ((p & 2) !== 0)
          throw Error(s(440));
        return t.impl.apply(void 0, arguments);
      };
    }
  }, ac = {
    readContext: Sl,
    use: ke,
    useCallback: I0,
    useContext: Sl,
    useEffect: $f,
    useImperativeHandle: k0,
    useInsertionEffect: r0,
    useLayoutEffect: $0,
    useMemo: P0,
    useReducer: Ie,
    useRef: J0,
    useState: function() {
      return Ie(Aa);
    },
    useDebugValue: Ff,
    useDeferredValue: function(l, a) {
      var t = al();
      return lm(
        t,
        x.memoizedState,
        l,
        a
      );
    },
    useTransition: function() {
      var l = Ie(Aa)[0], a = al().memoizedState;
      return [
        typeof l == "boolean" ? l : xu(l),
        a
      ];
    },
    useSyncExternalStore: N0,
    useId: em,
    useHostTransitionStatus: Pf,
    useFormState: x0,
    useActionState: x0,
    useOptimistic: function(l, a) {
      var t = al();
      return C0(t, x, l, a);
    },
    useMemoCache: Lf,
    useCacheRefresh: nm
  };
  ac.useEffectEvent = w0;
  var vm = {
    readContext: Sl,
    use: ke,
    useCallback: I0,
    useContext: Sl,
    useEffect: $f,
    useImperativeHandle: k0,
    useInsertionEffect: r0,
    useLayoutEffect: $0,
    useMemo: P0,
    useReducer: Wf,
    useRef: J0,
    useState: function() {
      return Wf(Aa);
    },
    useDebugValue: Ff,
    useDeferredValue: function(l, a) {
      var t = al();
      return x === null ? kf(t, l, a) : lm(
        t,
        x.memoizedState,
        l,
        a
      );
    },
    useTransition: function() {
      var l = Wf(Aa)[0], a = al().memoizedState;
      return [
        typeof l == "boolean" ? l : xu(l),
        a
      ];
    },
    useSyncExternalStore: N0,
    useId: em,
    useHostTransitionStatus: Pf,
    useFormState: L0,
    useActionState: L0,
    useOptimistic: function(l, a) {
      var t = al();
      return x !== null ? C0(t, x, l, a) : (t.baseState = l, [l, t.queue.dispatch]);
    },
    useMemoCache: Lf,
    useCacheRefresh: nm
  };
  vm.useEffectEvent = w0;
  function tc(l, a, t, u) {
    a = l.memoizedState, t = t(u, a), t = t == null ? a : B({}, a, t), l.memoizedState = t, l.lanes === 0 && (l.updateQueue.baseState = t);
  }
  var uc = {
    enqueueSetState: function(l, a, t) {
      l = l._reactInternals;
      var u = pl(), e = xa(u);
      e.payload = a, t != null && (e.callback = t), a = Ka(l, e, u), a !== null && (Hl(a, l, u), pu(a, l, u));
    },
    enqueueReplaceState: function(l, a, t) {
      l = l._reactInternals;
      var u = pl(), e = xa(u);
      e.tag = 1, e.payload = a, t != null && (e.callback = t), a = Ka(l, e, u), a !== null && (Hl(a, l, u), pu(a, l, u));
    },
    enqueueForceUpdate: function(l, a) {
      l = l._reactInternals;
      var t = pl(), u = xa(t);
      u.tag = 2, a != null && (u.callback = a), a = Ka(l, u, t), a !== null && (Hl(a, l, t), pu(a, l, t));
    }
  };
  function ym(l, a, t, u, e, n, f) {
    return l = l.stateNode, typeof l.shouldComponentUpdate == "function" ? l.shouldComponentUpdate(u, n, f) : a.prototype && a.prototype.isPureReactComponent ? !Bu(t, u) || !Bu(e, n) : !0;
  }
  function hm(l, a, t, u) {
    l = a.state, typeof a.componentWillReceiveProps == "function" && a.componentWillReceiveProps(t, u), typeof a.UNSAFE_componentWillReceiveProps == "function" && a.UNSAFE_componentWillReceiveProps(t, u), a.state !== l && uc.enqueueReplaceState(a, a.state, null);
  }
  function Mt(l, a) {
    var t = a;
    if ("ref" in a) {
      t = {};
      for (var u in a)
        u !== "ref" && (t[u] = a[u]);
    }
    if (l = l.defaultProps) {
      t === a && (t = B({}, t));
      for (var e in l)
        t[e] === void 0 && (t[e] = l[e]);
    }
    return t;
  }
  function dm(l) {
    Qe(l);
  }
  function Sm(l) {
    console.error(l);
  }
  function gm(l) {
    Qe(l);
  }
  function tn(l, a) {
    try {
      var t = l.onUncaughtError;
      t(a.value, { componentStack: a.stack });
    } catch (u) {
      setTimeout(function() {
        throw u;
      });
    }
  }
  function sm(l, a, t) {
    try {
      var u = l.onCaughtError;
      u(t.value, {
        componentStack: t.stack,
        errorBoundary: a.tag === 1 ? a.stateNode : null
      });
    } catch (e) {
      setTimeout(function() {
        throw e;
      });
    }
  }
  function ec(l, a, t) {
    return t = xa(t), t.tag = 3, t.payload = { element: null }, t.callback = function() {
      tn(l, a);
    }, t;
  }
  function bm(l) {
    return l = xa(l), l.tag = 3, l;
  }
  function zm(l, a, t, u) {
    var e = t.type.getDerivedStateFromError;
    if (typeof e == "function") {
      var n = u.value;
      l.payload = function() {
        return e(n);
      }, l.callback = function() {
        sm(a, t, u);
      };
    }
    var f = t.stateNode;
    f !== null && typeof f.componentDidCatch == "function" && (l.callback = function() {
      sm(a, t, u), typeof e != "function" && ($a === null ? $a = /* @__PURE__ */ new Set([this]) : $a.add(this));
      var c = u.stack;
      this.componentDidCatch(u.value, {
        componentStack: c !== null ? c : ""
      });
    });
  }
  function qy(l, a, t, u, e) {
    if (t.flags |= 32768, u !== null && typeof u == "object" && typeof u.then == "function") {
      if (a = t.alternate, a !== null && $t(
        a,
        t,
        e,
        !0
      ), t = Xl.current, t !== null) {
        switch (t.tag) {
          case 31:
          case 13:
            return kl === null ? gn() : t.alternate === null && P === 0 && (P = 3), t.flags &= -257, t.flags |= 65536, t.lanes = e, u === Ke ? t.flags |= 16384 : (a = t.updateQueue, a === null ? t.updateQueue = /* @__PURE__ */ new Set([u]) : a.add(u), Nc(l, u, e)), !1;
          case 22:
            return t.flags |= 65536, u === Ke ? t.flags |= 16384 : (a = t.updateQueue, a === null ? (a = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([u])
            }, t.updateQueue = a) : (t = a.retryQueue, t === null ? a.retryQueue = /* @__PURE__ */ new Set([u]) : t.add(u)), Nc(l, u, e)), !1;
        }
        throw Error(s(435, t.tag));
      }
      return Nc(l, u, e), gn(), !1;
    }
    if (C)
      return a = Xl.current, a !== null ? ((a.flags & 65536) === 0 && (a.flags |= 256), a.flags |= 65536, a.lanes = e, u !== Mf && (l = Error(s(422), { cause: u }), Qu(wl(l, t)))) : (u !== Mf && (a = Error(s(423), {
        cause: u
      }), Qu(
        wl(a, t)
      )), l = l.current.alternate, l.flags |= 65536, e &= -e, l.lanes |= e, u = wl(u, t), e = ec(
        l.stateNode,
        u,
        e
      ), Xf(l, e), P !== 4 && (P = 2)), !1;
    var n = Error(s(520), { cause: u });
    if (n = wl(n, t), Iu === null ? Iu = [n] : Iu.push(n), P !== 4 && (P = 2), a === null) return !0;
    u = wl(u, t), t = a;
    do {
      switch (t.tag) {
        case 3:
          return t.flags |= 65536, l = e & -e, t.lanes |= l, l = ec(t.stateNode, u, l), Xf(t, l), !1;
        case 1:
          if (a = t.type, n = t.stateNode, (t.flags & 128) === 0 && (typeof a.getDerivedStateFromError == "function" || n !== null && typeof n.componentDidCatch == "function" && ($a === null || !$a.has(n))))
            return t.flags |= 65536, e &= -e, t.lanes |= e, e = bm(e), zm(
              e,
              l,
              t,
              u
            ), Xf(t, e), !1;
      }
      t = t.return;
    } while (t !== null);
    return !1;
  }
  var nc = Error(s(461)), nl = !1;
  function gl(l, a, t, u) {
    a.child = l === null ? T0(a, null, t, u) : At(
      a,
      l.child,
      t,
      u
    );
  }
  function om(l, a, t, u, e) {
    t = t.render;
    var n = a.ref;
    if ("ref" in u) {
      var f = {};
      for (var c in u)
        c !== "ref" && (f[c] = u[c]);
    } else f = u;
    return bt(a), u = jf(
      l,
      a,
      t,
      f,
      n,
      e
    ), c = Vf(), l !== null && !nl ? (xf(l, a, e), Ta(l, a, e)) : (C && c && Af(a), a.flags |= 1, gl(l, a, u, e), a.child);
  }
  function Em(l, a, t, u, e) {
    if (l === null) {
      var n = t.type;
      return typeof n == "function" && !zf(n) && n.defaultProps === void 0 && t.compare === null ? (a.tag = 15, a.type = n, Am(
        l,
        a,
        n,
        u,
        e
      )) : (l = Ze(
        t.type,
        null,
        u,
        a,
        a.mode,
        e
      ), l.ref = a.ref, l.return = a, a.child = l);
    }
    if (n = l.child, !dc(l, e)) {
      var f = n.memoizedProps;
      if (t = t.compare, t = t !== null ? t : Bu, t(f, u) && l.ref === a.ref)
        return Ta(l, a, e);
    }
    return a.flags |= 1, l = sa(n, u), l.ref = a.ref, l.return = a, a.child = l;
  }
  function Am(l, a, t, u, e) {
    if (l !== null) {
      var n = l.memoizedProps;
      if (Bu(n, u) && l.ref === a.ref)
        if (nl = !1, a.pendingProps = u = n, dc(l, e))
          (l.flags & 131072) !== 0 && (nl = !0);
        else
          return a.lanes = l.lanes, Ta(l, a, e);
    }
    return fc(
      l,
      a,
      t,
      u,
      e
    );
  }
  function Tm(l, a, t, u) {
    var e = u.children, n = l !== null ? l.memoizedState : null;
    if (l === null && a.stateNode === null && (a.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), u.mode === "hidden") {
      if ((a.flags & 128) !== 0) {
        if (n = n !== null ? n.baseLanes | t : t, l !== null) {
          for (u = a.child = l.child, e = 0; u !== null; )
            e = e | u.lanes | u.childLanes, u = u.sibling;
          u = e & ~n;
        } else u = 0, a.child = null;
        return Mm(
          l,
          a,
          n,
          t,
          u
        );
      }
      if ((t & 536870912) !== 0)
        a.memoizedState = { baseLanes: 0, cachePool: null }, l !== null && Ve(
          a,
          n !== null ? n.cachePool : null
        ), n !== null ? O0(a, n) : Gf(), U0(a);
      else
        return u = a.lanes = 536870912, Mm(
          l,
          a,
          n !== null ? n.baseLanes | t : t,
          t,
          u
        );
    } else
      n !== null ? (Ve(a, n.cachePool), O0(a, n), Ja(), a.memoizedState = null) : (l !== null && Ve(a, null), Gf(), Ja());
    return gl(l, a, e, t), a.child;
  }
  function Ju(l, a) {
    return l !== null && l.tag === 22 || a.stateNode !== null || (a.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), a.sibling;
  }
  function Mm(l, a, t, u, e) {
    var n = Bf();
    return n = n === null ? null : { parent: ul._currentValue, pool: n }, a.memoizedState = {
      baseLanes: t,
      cachePool: n
    }, l !== null && Ve(a, null), Gf(), U0(a), l !== null && $t(l, a, u, !0), a.childLanes = e, null;
  }
  function un(l, a) {
    return a = nn(
      { mode: a.mode, children: a.children },
      l.mode
    ), a.ref = l.ref, l.child = a, a.return = l, a;
  }
  function Dm(l, a, t) {
    return At(a, l.child, null, t), l = un(a, a.pendingProps), l.flags |= 2, Cl(a), a.memoizedState = null, l;
  }
  function Yy(l, a, t) {
    var u = a.pendingProps, e = (a.flags & 128) !== 0;
    if (a.flags &= -129, l === null) {
      if (C) {
        if (u.mode === "hidden")
          return l = un(a, u), a.lanes = 536870912, Ju(null, l);
        if (pf(a), (l = r) ? (l = Gv(
          l,
          Fl
        ), l = l !== null && l.data === "&" ? l : null, l !== null && (a.memoizedState = {
          dehydrated: l,
          treeContext: Za !== null ? { id: ca, overflow: ia } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, t = c0(l), t.return = a, a.child = t, dl = a, r = null)) : l = null, l === null) throw Ra(a);
        return a.lanes = 536870912, null;
      }
      return un(a, u);
    }
    var n = l.memoizedState;
    if (n !== null) {
      var f = n.dehydrated;
      if (pf(a), e)
        if (a.flags & 256)
          a.flags &= -257, a = Dm(
            l,
            a,
            t
          );
        else if (a.memoizedState !== null)
          a.child = l.child, a.flags |= 128, a = null;
        else throw Error(s(558));
      else if (nl || $t(l, a, t, !1), e = (t & l.childLanes) !== 0, nl || e) {
        if (u = J, u !== null && (f = Si(u, t), f !== 0 && f !== n.retryLane))
          throw n.retryLane = f, dt(l, f), Hl(u, l, f), nc;
        gn(), a = Dm(
          l,
          a,
          t
        );
      } else
        l = n.treeContext, r = Il(f.nextSibling), dl = a, C = !0, pa = null, Fl = !1, l !== null && v0(a, l), a = un(a, u), a.flags |= 4096;
      return a;
    }
    return l = sa(l.child, {
      mode: u.mode,
      children: u.children
    }), l.ref = a.ref, a.child = l, l.return = a, l;
  }
  function en(l, a) {
    var t = a.ref;
    if (t === null)
      l !== null && l.ref !== null && (a.flags |= 4194816);
    else {
      if (typeof t != "function" && typeof t != "object")
        throw Error(s(284));
      (l === null || l.ref !== t) && (a.flags |= 4194816);
    }
  }
  function fc(l, a, t, u, e) {
    return bt(a), t = jf(
      l,
      a,
      t,
      u,
      void 0,
      e
    ), u = Vf(), l !== null && !nl ? (xf(l, a, e), Ta(l, a, e)) : (C && u && Af(a), a.flags |= 1, gl(l, a, t, e), a.child);
  }
  function Om(l, a, t, u, e, n) {
    return bt(a), a.updateQueue = null, t = H0(
      a,
      u,
      t,
      e
    ), _0(l), u = Vf(), l !== null && !nl ? (xf(l, a, n), Ta(l, a, n)) : (C && u && Af(a), a.flags |= 1, gl(l, a, t, n), a.child);
  }
  function Um(l, a, t, u, e) {
    if (bt(a), a.stateNode === null) {
      var n = Jt, f = t.contextType;
      typeof f == "object" && f !== null && (n = Sl(f)), n = new t(u, n), a.memoizedState = n.state !== null && n.state !== void 0 ? n.state : null, n.updater = uc, a.stateNode = n, n._reactInternals = a, n = a.stateNode, n.props = u, n.state = a.memoizedState, n.refs = {}, Yf(a), f = t.contextType, n.context = typeof f == "object" && f !== null ? Sl(f) : Jt, n.state = a.memoizedState, f = t.getDerivedStateFromProps, typeof f == "function" && (tc(
        a,
        t,
        f,
        u
      ), n.state = a.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof n.getSnapshotBeforeUpdate == "function" || typeof n.UNSAFE_componentWillMount != "function" && typeof n.componentWillMount != "function" || (f = n.state, typeof n.componentWillMount == "function" && n.componentWillMount(), typeof n.UNSAFE_componentWillMount == "function" && n.UNSAFE_componentWillMount(), f !== n.state && uc.enqueueReplaceState(n, n.state, null), ju(a, u, n, e), Ru(), n.state = a.memoizedState), typeof n.componentDidMount == "function" && (a.flags |= 4194308), u = !0;
    } else if (l === null) {
      n = a.stateNode;
      var c = a.memoizedProps, i = Mt(t, c);
      n.props = i;
      var h = n.context, g = t.contextType;
      f = Jt, typeof g == "object" && g !== null && (f = Sl(g));
      var o = t.getDerivedStateFromProps;
      g = typeof o == "function" || typeof n.getSnapshotBeforeUpdate == "function", c = a.pendingProps !== c, g || typeof n.UNSAFE_componentWillReceiveProps != "function" && typeof n.componentWillReceiveProps != "function" || (c || h !== f) && hm(
        a,
        n,
        u,
        f
      ), Va = !1;
      var d = a.memoizedState;
      n.state = d, ju(a, u, n, e), Ru(), h = a.memoizedState, c || d !== h || Va ? (typeof o == "function" && (tc(
        a,
        t,
        o,
        u
      ), h = a.memoizedState), (i = Va || ym(
        a,
        t,
        i,
        u,
        d,
        h,
        f
      )) ? (g || typeof n.UNSAFE_componentWillMount != "function" && typeof n.componentWillMount != "function" || (typeof n.componentWillMount == "function" && n.componentWillMount(), typeof n.UNSAFE_componentWillMount == "function" && n.UNSAFE_componentWillMount()), typeof n.componentDidMount == "function" && (a.flags |= 4194308)) : (typeof n.componentDidMount == "function" && (a.flags |= 4194308), a.memoizedProps = u, a.memoizedState = h), n.props = u, n.state = h, n.context = f, u = i) : (typeof n.componentDidMount == "function" && (a.flags |= 4194308), u = !1);
    } else {
      n = a.stateNode, Qf(l, a), f = a.memoizedProps, g = Mt(t, f), n.props = g, o = a.pendingProps, d = n.context, h = t.contextType, i = Jt, typeof h == "object" && h !== null && (i = Sl(h)), c = t.getDerivedStateFromProps, (h = typeof c == "function" || typeof n.getSnapshotBeforeUpdate == "function") || typeof n.UNSAFE_componentWillReceiveProps != "function" && typeof n.componentWillReceiveProps != "function" || (f !== o || d !== i) && hm(
        a,
        n,
        u,
        i
      ), Va = !1, d = a.memoizedState, n.state = d, ju(a, u, n, e), Ru();
      var S = a.memoizedState;
      f !== o || d !== S || Va || l !== null && l.dependencies !== null && Re(l.dependencies) ? (typeof c == "function" && (tc(
        a,
        t,
        c,
        u
      ), S = a.memoizedState), (g = Va || ym(
        a,
        t,
        g,
        u,
        d,
        S,
        i
      ) || l !== null && l.dependencies !== null && Re(l.dependencies)) ? (h || typeof n.UNSAFE_componentWillUpdate != "function" && typeof n.componentWillUpdate != "function" || (typeof n.componentWillUpdate == "function" && n.componentWillUpdate(u, S, i), typeof n.UNSAFE_componentWillUpdate == "function" && n.UNSAFE_componentWillUpdate(
        u,
        S,
        i
      )), typeof n.componentDidUpdate == "function" && (a.flags |= 4), typeof n.getSnapshotBeforeUpdate == "function" && (a.flags |= 1024)) : (typeof n.componentDidUpdate != "function" || f === l.memoizedProps && d === l.memoizedState || (a.flags |= 4), typeof n.getSnapshotBeforeUpdate != "function" || f === l.memoizedProps && d === l.memoizedState || (a.flags |= 1024), a.memoizedProps = u, a.memoizedState = S), n.props = u, n.state = S, n.context = i, u = g) : (typeof n.componentDidUpdate != "function" || f === l.memoizedProps && d === l.memoizedState || (a.flags |= 4), typeof n.getSnapshotBeforeUpdate != "function" || f === l.memoizedProps && d === l.memoizedState || (a.flags |= 1024), u = !1);
    }
    return n = u, en(l, a), u = (a.flags & 128) !== 0, n || u ? (n = a.stateNode, t = u && typeof t.getDerivedStateFromError != "function" ? null : n.render(), a.flags |= 1, l !== null && u ? (a.child = At(
      a,
      l.child,
      null,
      e
    ), a.child = At(
      a,
      null,
      t,
      e
    )) : gl(l, a, t, e), a.memoizedState = n.state, l = a.child) : l = Ta(
      l,
      a,
      e
    ), l;
  }
  function _m(l, a, t, u) {
    return gt(), a.flags |= 256, gl(l, a, t, u), a.child;
  }
  var cc = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function ic(l) {
    return { baseLanes: l, cachePool: s0() };
  }
  function mc(l, a, t) {
    return l = l !== null ? l.childLanes & ~t : 0, a && (l |= Zl), l;
  }
  function Hm(l, a, t) {
    var u = a.pendingProps, e = !1, n = (a.flags & 128) !== 0, f;
    if ((f = n) || (f = l !== null && l.memoizedState === null ? !1 : (ll.current & 2) !== 0), f && (e = !0, a.flags &= -129), f = (a.flags & 32) !== 0, a.flags &= -33, l === null) {
      if (C) {
        if (e ? La(a) : Ja(), (l = r) ? (l = Gv(
          l,
          Fl
        ), l = l !== null && l.data !== "&" ? l : null, l !== null && (a.memoizedState = {
          dehydrated: l,
          treeContext: Za !== null ? { id: ca, overflow: ia } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, t = c0(l), t.return = a, a.child = t, dl = a, r = null)) : l = null, l === null) throw Ra(a);
        return Jc(l) ? a.lanes = 32 : a.lanes = 536870912, null;
      }
      var c = u.children;
      return u = u.fallback, e ? (Ja(), e = a.mode, c = nn(
        { mode: "hidden", children: c },
        e
      ), u = St(
        u,
        e,
        t,
        null
      ), c.return = a, u.return = a, c.sibling = u, a.child = c, u = a.child, u.memoizedState = ic(t), u.childLanes = mc(
        l,
        f,
        t
      ), a.memoizedState = cc, Ju(null, u)) : (La(a), vc(a, c));
    }
    var i = l.memoizedState;
    if (i !== null && (c = i.dehydrated, c !== null)) {
      if (n)
        a.flags & 256 ? (La(a), a.flags &= -257, a = yc(
          l,
          a,
          t
        )) : a.memoizedState !== null ? (Ja(), a.child = l.child, a.flags |= 128, a = null) : (Ja(), c = u.fallback, e = a.mode, u = nn(
          { mode: "visible", children: u.children },
          e
        ), c = St(
          c,
          e,
          t,
          null
        ), c.flags |= 2, u.return = a, c.return = a, u.sibling = c, a.child = u, At(
          a,
          l.child,
          null,
          t
        ), u = a.child, u.memoizedState = ic(t), u.childLanes = mc(
          l,
          f,
          t
        ), a.memoizedState = cc, a = Ju(null, u));
      else if (La(a), Jc(c)) {
        if (f = c.nextSibling && c.nextSibling.dataset, f) var h = f.dgst;
        f = h, u = Error(s(419)), u.stack = "", u.digest = f, Qu({ value: u, source: null, stack: null }), a = yc(
          l,
          a,
          t
        );
      } else if (nl || $t(l, a, t, !1), f = (t & l.childLanes) !== 0, nl || f) {
        if (f = J, f !== null && (u = Si(f, t), u !== 0 && u !== i.retryLane))
          throw i.retryLane = u, dt(l, u), Hl(f, l, u), nc;
        Lc(c) || gn(), a = yc(
          l,
          a,
          t
        );
      } else
        Lc(c) ? (a.flags |= 192, a.child = l.child, a = null) : (l = i.treeContext, r = Il(
          c.nextSibling
        ), dl = a, C = !0, pa = null, Fl = !1, l !== null && v0(a, l), a = vc(
          a,
          u.children
        ), a.flags |= 4096);
      return a;
    }
    return e ? (Ja(), c = u.fallback, e = a.mode, i = l.child, h = i.sibling, u = sa(i, {
      mode: "hidden",
      children: u.children
    }), u.subtreeFlags = i.subtreeFlags & 65011712, h !== null ? c = sa(
      h,
      c
    ) : (c = St(
      c,
      e,
      t,
      null
    ), c.flags |= 2), c.return = a, u.return = a, u.sibling = c, a.child = u, Ju(null, u), u = a.child, c = l.child.memoizedState, c === null ? c = ic(t) : (e = c.cachePool, e !== null ? (i = ul._currentValue, e = e.parent !== i ? { parent: i, pool: i } : e) : e = s0(), c = {
      baseLanes: c.baseLanes | t,
      cachePool: e
    }), u.memoizedState = c, u.childLanes = mc(
      l,
      f,
      t
    ), a.memoizedState = cc, Ju(l.child, u)) : (La(a), t = l.child, l = t.sibling, t = sa(t, {
      mode: "visible",
      children: u.children
    }), t.return = a, t.sibling = null, l !== null && (f = a.deletions, f === null ? (a.deletions = [l], a.flags |= 16) : f.push(l)), a.child = t, a.memoizedState = null, t);
  }
  function vc(l, a) {
    return a = nn(
      { mode: "visible", children: a },
      l.mode
    ), a.return = l, l.child = a;
  }
  function nn(l, a) {
    return l = Ql(22, l, null, a), l.lanes = 0, l;
  }
  function yc(l, a, t) {
    return At(a, l.child, null, t), l = vc(
      a,
      a.pendingProps.children
    ), l.flags |= 2, a.memoizedState = null, l;
  }
  function Nm(l, a, t) {
    l.lanes |= a;
    var u = l.alternate;
    u !== null && (u.lanes |= a), Uf(l.return, a, t);
  }
  function hc(l, a, t, u, e, n) {
    var f = l.memoizedState;
    f === null ? l.memoizedState = {
      isBackwards: a,
      rendering: null,
      renderingStartTime: 0,
      last: u,
      tail: t,
      tailMode: e,
      treeForkCount: n
    } : (f.isBackwards = a, f.rendering = null, f.renderingStartTime = 0, f.last = u, f.tail = t, f.tailMode = e, f.treeForkCount = n);
  }
  function Bm(l, a, t) {
    var u = a.pendingProps, e = u.revealOrder, n = u.tail;
    u = u.children;
    var f = ll.current, c = (f & 2) !== 0;
    if (c ? (f = f & 1 | 2, a.flags |= 128) : f &= 1, R(ll, f), gl(l, a, u, t), u = C ? Yu : 0, !c && l !== null && (l.flags & 128) !== 0)
      l: for (l = a.child; l !== null; ) {
        if (l.tag === 13)
          l.memoizedState !== null && Nm(l, t, a);
        else if (l.tag === 19)
          Nm(l, t, a);
        else if (l.child !== null) {
          l.child.return = l, l = l.child;
          continue;
        }
        if (l === a) break l;
        for (; l.sibling === null; ) {
          if (l.return === null || l.return === a)
            break l;
          l = l.return;
        }
        l.sibling.return = l.return, l = l.sibling;
      }
    switch (e) {
      case "forwards":
        for (t = a.child, e = null; t !== null; )
          l = t.alternate, l !== null && we(l) === null && (e = t), t = t.sibling;
        t = e, t === null ? (e = a.child, a.child = null) : (e = t.sibling, t.sibling = null), hc(
          a,
          !1,
          e,
          t,
          n,
          u
        );
        break;
      case "backwards":
      case "unstable_legacy-backwards":
        for (t = null, e = a.child, a.child = null; e !== null; ) {
          if (l = e.alternate, l !== null && we(l) === null) {
            a.child = e;
            break;
          }
          l = e.sibling, e.sibling = t, t = e, e = l;
        }
        hc(
          a,
          !0,
          t,
          null,
          n,
          u
        );
        break;
      case "together":
        hc(
          a,
          !1,
          null,
          null,
          void 0,
          u
        );
        break;
      default:
        a.memoizedState = null;
    }
    return a.child;
  }
  function Ta(l, a, t) {
    if (l !== null && (a.dependencies = l.dependencies), ra |= a.lanes, (t & a.childLanes) === 0)
      if (l !== null) {
        if ($t(
          l,
          a,
          t,
          !1
        ), (t & a.childLanes) === 0)
          return null;
      } else return null;
    if (l !== null && a.child !== l.child)
      throw Error(s(153));
    if (a.child !== null) {
      for (l = a.child, t = sa(l, l.pendingProps), a.child = t, t.return = a; l.sibling !== null; )
        l = l.sibling, t = t.sibling = sa(l, l.pendingProps), t.return = a;
      t.sibling = null;
    }
    return a.child;
  }
  function dc(l, a) {
    return (l.lanes & a) !== 0 ? !0 : (l = l.dependencies, !!(l !== null && Re(l)));
  }
  function Qy(l, a, t) {
    switch (a.tag) {
      case 3:
        se(a, a.stateNode.containerInfo), ja(a, ul, l.memoizedState.cache), gt();
        break;
      case 27:
      case 5:
        Gn(a);
        break;
      case 4:
        se(a, a.stateNode.containerInfo);
        break;
      case 10:
        ja(
          a,
          a.type,
          a.memoizedProps.value
        );
        break;
      case 31:
        if (a.memoizedState !== null)
          return a.flags |= 128, pf(a), null;
        break;
      case 13:
        var u = a.memoizedState;
        if (u !== null)
          return u.dehydrated !== null ? (La(a), a.flags |= 128, null) : (t & a.child.childLanes) !== 0 ? Hm(l, a, t) : (La(a), l = Ta(
            l,
            a,
            t
          ), l !== null ? l.sibling : null);
        La(a);
        break;
      case 19:
        var e = (l.flags & 128) !== 0;
        if (u = (t & a.childLanes) !== 0, u || ($t(
          l,
          a,
          t,
          !1
        ), u = (t & a.childLanes) !== 0), e) {
          if (u)
            return Bm(
              l,
              a,
              t
            );
          a.flags |= 128;
        }
        if (e = a.memoizedState, e !== null && (e.rendering = null, e.tail = null, e.lastEffect = null), R(ll, ll.current), u) break;
        return null;
      case 22:
        return a.lanes = 0, Tm(
          l,
          a,
          t,
          a.pendingProps
        );
      case 24:
        ja(a, ul, l.memoizedState.cache);
    }
    return Ta(l, a, t);
  }
  function qm(l, a, t) {
    if (l !== null)
      if (l.memoizedProps !== a.pendingProps)
        nl = !0;
      else {
        if (!dc(l, t) && (a.flags & 128) === 0)
          return nl = !1, Qy(
            l,
            a,
            t
          );
        nl = (l.flags & 131072) !== 0;
      }
    else
      nl = !1, C && (a.flags & 1048576) !== 0 && m0(a, Yu, a.index);
    switch (a.lanes = 0, a.tag) {
      case 16:
        l: {
          var u = a.pendingProps;
          if (l = ot(a.elementType), a.type = l, typeof l == "function")
            zf(l) ? (u = Mt(l, u), a.tag = 1, a = Um(
              null,
              a,
              l,
              u,
              t
            )) : (a.tag = 0, a = fc(
              null,
              a,
              l,
              u,
              t
            ));
          else {
            if (l != null) {
              var e = l.$$typeof;
              if (e === Ya) {
                a.tag = 11, a = om(
                  null,
                  a,
                  l,
                  u,
                  t
                );
                break l;
              } else if (e === ya) {
                a.tag = 14, a = Em(
                  null,
                  a,
                  l,
                  u,
                  t
                );
                break l;
              }
            }
            throw a = bu(l) || l, Error(s(306, a, ""));
          }
        }
        return a;
      case 0:
        return fc(
          l,
          a,
          a.type,
          a.pendingProps,
          t
        );
      case 1:
        return u = a.type, e = Mt(
          u,
          a.pendingProps
        ), Um(
          l,
          a,
          u,
          e,
          t
        );
      case 3:
        l: {
          if (se(
            a,
            a.stateNode.containerInfo
          ), l === null) throw Error(s(387));
          u = a.pendingProps;
          var n = a.memoizedState;
          e = n.element, Qf(l, a), ju(a, u, null, t);
          var f = a.memoizedState;
          if (u = f.cache, ja(a, ul, u), u !== n.cache && _f(
            a,
            [ul],
            t,
            !0
          ), Ru(), u = f.element, n.isDehydrated)
            if (n = {
              element: u,
              isDehydrated: !1,
              cache: f.cache
            }, a.updateQueue.baseState = n, a.memoizedState = n, a.flags & 256) {
              a = _m(
                l,
                a,
                u,
                t
              );
              break l;
            } else if (u !== e) {
              e = wl(
                Error(s(424)),
                a
              ), Qu(e), a = _m(
                l,
                a,
                u,
                t
              );
              break l;
            } else {
              switch (l = a.stateNode.containerInfo, l.nodeType) {
                case 9:
                  l = l.body;
                  break;
                default:
                  l = l.nodeName === "HTML" ? l.ownerDocument.body : l;
              }
              for (r = Il(l.firstChild), dl = a, C = !0, pa = null, Fl = !0, t = T0(
                a,
                null,
                u,
                t
              ), a.child = t; t; )
                t.flags = t.flags & -3 | 4096, t = t.sibling;
            }
          else {
            if (gt(), u === e) {
              a = Ta(
                l,
                a,
                t
              );
              break l;
            }
            gl(l, a, u, t);
          }
          a = a.child;
        }
        return a;
      case 26:
        return en(l, a), l === null ? (t = xv(
          a.type,
          null,
          a.pendingProps,
          null
        )) ? a.memoizedState = t : C || (t = a.type, l = a.pendingProps, u = Tn(
          Qa.current
        ).createElement(t), u[hl] = a, u[Tl] = l, sl(u, t, l), vl(u), a.stateNode = u) : a.memoizedState = xv(
          a.type,
          l.memoizedProps,
          a.pendingProps,
          l.memoizedState
        ), null;
      case 27:
        return Gn(a), l === null && C && (u = a.stateNode = Rv(
          a.type,
          a.pendingProps,
          Qa.current
        ), dl = a, Fl = !0, e = r, Pa(a.type) ? (Wc = e, r = Il(u.firstChild)) : r = e), gl(
          l,
          a,
          a.pendingProps.children,
          t
        ), en(l, a), l === null && (a.flags |= 4194304), a.child;
      case 5:
        return l === null && C && ((e = u = r) && (u = mh(
          u,
          a.type,
          a.pendingProps,
          Fl
        ), u !== null ? (a.stateNode = u, dl = a, r = Il(u.firstChild), Fl = !1, e = !0) : e = !1), e || Ra(a)), Gn(a), e = a.type, n = a.pendingProps, f = l !== null ? l.memoizedProps : null, u = n.children, Vc(e, n) ? u = null : f !== null && Vc(e, f) && (a.flags |= 32), a.memoizedState !== null && (e = jf(
          l,
          a,
          Dy,
          null,
          null,
          t
        ), fe._currentValue = e), en(l, a), gl(l, a, u, t), a.child;
      case 6:
        return l === null && C && ((l = t = r) && (t = vh(
          t,
          a.pendingProps,
          Fl
        ), t !== null ? (a.stateNode = t, dl = a, r = null, l = !0) : l = !1), l || Ra(a)), null;
      case 13:
        return Hm(l, a, t);
      case 4:
        return se(
          a,
          a.stateNode.containerInfo
        ), u = a.pendingProps, l === null ? a.child = At(
          a,
          null,
          u,
          t
        ) : gl(l, a, u, t), a.child;
      case 11:
        return om(
          l,
          a,
          a.type,
          a.pendingProps,
          t
        );
      case 7:
        return gl(
          l,
          a,
          a.pendingProps,
          t
        ), a.child;
      case 8:
        return gl(
          l,
          a,
          a.pendingProps.children,
          t
        ), a.child;
      case 12:
        return gl(
          l,
          a,
          a.pendingProps.children,
          t
        ), a.child;
      case 10:
        return u = a.pendingProps, ja(a, a.type, u.value), gl(l, a, u.children, t), a.child;
      case 9:
        return e = a.type._context, u = a.pendingProps.children, bt(a), e = Sl(e), u = u(e), a.flags |= 1, gl(l, a, u, t), a.child;
      case 14:
        return Em(
          l,
          a,
          a.type,
          a.pendingProps,
          t
        );
      case 15:
        return Am(
          l,
          a,
          a.type,
          a.pendingProps,
          t
        );
      case 19:
        return Bm(l, a, t);
      case 31:
        return Yy(l, a, t);
      case 22:
        return Tm(
          l,
          a,
          t,
          a.pendingProps
        );
      case 24:
        return bt(a), u = Sl(ul), l === null ? (e = Bf(), e === null && (e = J, n = Hf(), e.pooledCache = n, n.refCount++, n !== null && (e.pooledCacheLanes |= t), e = n), a.memoizedState = { parent: u, cache: e }, Yf(a), ja(a, ul, e)) : ((l.lanes & t) !== 0 && (Qf(l, a), ju(a, null, null, t), Ru()), e = l.memoizedState, n = a.memoizedState, e.parent !== u ? (e = { parent: u, cache: u }, a.memoizedState = e, a.lanes === 0 && (a.memoizedState = a.updateQueue.baseState = e), ja(a, ul, u)) : (u = n.cache, ja(a, ul, u), u !== e.cache && _f(
          a,
          [ul],
          t,
          !0
        ))), gl(
          l,
          a,
          a.pendingProps.children,
          t
        ), a.child;
      case 29:
        throw a.pendingProps;
    }
    throw Error(s(156, a.tag));
  }
  function Ma(l) {
    l.flags |= 4;
  }
  function Sc(l, a, t, u, e) {
    if ((a = (l.mode & 32) !== 0) && (a = !1), a) {
      if (l.flags |= 16777216, (e & 335544128) === e)
        if (l.stateNode.complete) l.flags |= 8192;
        else if (ev()) l.flags |= 8192;
        else
          throw Et = Ke, qf;
    } else l.flags &= -16777217;
  }
  function Ym(l, a) {
    if (a.type !== "stylesheet" || (a.state.loading & 4) !== 0)
      l.flags &= -16777217;
    else if (l.flags |= 16777216, !wv(a))
      if (ev()) l.flags |= 8192;
      else
        throw Et = Ke, qf;
  }
  function fn(l, a) {
    a !== null && (l.flags |= 4), l.flags & 16384 && (a = l.tag !== 22 ? yi() : 536870912, l.lanes |= a, cu |= a);
  }
  function Wu(l, a) {
    if (!C)
      switch (l.tailMode) {
        case "hidden":
          a = l.tail;
          for (var t = null; a !== null; )
            a.alternate !== null && (t = a), a = a.sibling;
          t === null ? l.tail = null : t.sibling = null;
          break;
        case "collapsed":
          t = l.tail;
          for (var u = null; t !== null; )
            t.alternate !== null && (u = t), t = t.sibling;
          u === null ? a || l.tail === null ? l.tail = null : l.tail.sibling = null : u.sibling = null;
      }
  }
  function $(l) {
    var a = l.alternate !== null && l.alternate.child === l.child, t = 0, u = 0;
    if (a)
      for (var e = l.child; e !== null; )
        t |= e.lanes | e.childLanes, u |= e.subtreeFlags & 65011712, u |= e.flags & 65011712, e.return = l, e = e.sibling;
    else
      for (e = l.child; e !== null; )
        t |= e.lanes | e.childLanes, u |= e.subtreeFlags, u |= e.flags, e.return = l, e = e.sibling;
    return l.subtreeFlags |= u, l.childLanes = t, a;
  }
  function Xy(l, a, t) {
    var u = a.pendingProps;
    switch (Tf(a), a.tag) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return $(a), null;
      case 1:
        return $(a), null;
      case 3:
        return t = a.stateNode, u = null, l !== null && (u = l.memoizedState.cache), a.memoizedState.cache !== u && (a.flags |= 2048), oa(ul), qt(), t.pendingContext && (t.context = t.pendingContext, t.pendingContext = null), (l === null || l.child === null) && (rt(a) ? Ma(a) : l === null || l.memoizedState.isDehydrated && (a.flags & 256) === 0 || (a.flags |= 1024, Df())), $(a), null;
      case 26:
        var e = a.type, n = a.memoizedState;
        return l === null ? (Ma(a), n !== null ? ($(a), Ym(a, n)) : ($(a), Sc(
          a,
          e,
          null,
          u,
          t
        ))) : n ? n !== l.memoizedState ? (Ma(a), $(a), Ym(a, n)) : ($(a), a.flags &= -16777217) : (l = l.memoizedProps, l !== u && Ma(a), $(a), Sc(
          a,
          e,
          l,
          u,
          t
        )), null;
      case 27:
        if (be(a), t = Qa.current, e = a.type, l !== null && a.stateNode != null)
          l.memoizedProps !== u && Ma(a);
        else {
          if (!u) {
            if (a.stateNode === null)
              throw Error(s(166));
            return $(a), null;
          }
          l = ml.current, rt(a) ? y0(a) : (l = Rv(e, u, t), a.stateNode = l, Ma(a));
        }
        return $(a), null;
      case 5:
        if (be(a), e = a.type, l !== null && a.stateNode != null)
          l.memoizedProps !== u && Ma(a);
        else {
          if (!u) {
            if (a.stateNode === null)
              throw Error(s(166));
            return $(a), null;
          }
          if (n = ml.current, rt(a))
            y0(a);
          else {
            var f = Tn(
              Qa.current
            );
            switch (n) {
              case 1:
                n = f.createElementNS(
                  "http://www.w3.org/2000/svg",
                  e
                );
                break;
              case 2:
                n = f.createElementNS(
                  "http://www.w3.org/1998/Math/MathML",
                  e
                );
                break;
              default:
                switch (e) {
                  case "svg":
                    n = f.createElementNS(
                      "http://www.w3.org/2000/svg",
                      e
                    );
                    break;
                  case "math":
                    n = f.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      e
                    );
                    break;
                  case "script":
                    n = f.createElement("div"), n.innerHTML = "<script><\/script>", n = n.removeChild(
                      n.firstChild
                    );
                    break;
                  case "select":
                    n = typeof u.is == "string" ? f.createElement("select", {
                      is: u.is
                    }) : f.createElement("select"), u.multiple ? n.multiple = !0 : u.size && (n.size = u.size);
                    break;
                  default:
                    n = typeof u.is == "string" ? f.createElement(e, { is: u.is }) : f.createElement(e);
                }
            }
            n[hl] = a, n[Tl] = u;
            l: for (f = a.child; f !== null; ) {
              if (f.tag === 5 || f.tag === 6)
                n.appendChild(f.stateNode);
              else if (f.tag !== 4 && f.tag !== 27 && f.child !== null) {
                f.child.return = f, f = f.child;
                continue;
              }
              if (f === a) break l;
              for (; f.sibling === null; ) {
                if (f.return === null || f.return === a)
                  break l;
                f = f.return;
              }
              f.sibling.return = f.return, f = f.sibling;
            }
            a.stateNode = n;
            l: switch (sl(n, e, u), e) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                u = !!u.autoFocus;
                break l;
              case "img":
                u = !0;
                break l;
              default:
                u = !1;
            }
            u && Ma(a);
          }
        }
        return $(a), Sc(
          a,
          a.type,
          l === null ? null : l.memoizedProps,
          a.pendingProps,
          t
        ), null;
      case 6:
        if (l && a.stateNode != null)
          l.memoizedProps !== u && Ma(a);
        else {
          if (typeof u != "string" && a.stateNode === null)
            throw Error(s(166));
          if (l = Qa.current, rt(a)) {
            if (l = a.stateNode, t = a.memoizedProps, u = null, e = dl, e !== null)
              switch (e.tag) {
                case 27:
                case 5:
                  u = e.memoizedProps;
              }
            l[hl] = a, l = !!(l.nodeValue === t || u !== null && u.suppressHydrationWarning === !0 || Hv(l.nodeValue, t)), l || Ra(a, !0);
          } else
            l = Tn(l).createTextNode(
              u
            ), l[hl] = a, a.stateNode = l;
        }
        return $(a), null;
      case 31:
        if (t = a.memoizedState, l === null || l.memoizedState !== null) {
          if (u = rt(a), t !== null) {
            if (l === null) {
              if (!u) throw Error(s(318));
              if (l = a.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(s(557));
              l[hl] = a;
            } else
              gt(), (a.flags & 128) === 0 && (a.memoizedState = null), a.flags |= 4;
            $(a), l = !1;
          } else
            t = Df(), l !== null && l.memoizedState !== null && (l.memoizedState.hydrationErrors = t), l = !0;
          if (!l)
            return a.flags & 256 ? (Cl(a), a) : (Cl(a), null);
          if ((a.flags & 128) !== 0)
            throw Error(s(558));
        }
        return $(a), null;
      case 13:
        if (u = a.memoizedState, l === null || l.memoizedState !== null && l.memoizedState.dehydrated !== null) {
          if (e = rt(a), u !== null && u.dehydrated !== null) {
            if (l === null) {
              if (!e) throw Error(s(318));
              if (e = a.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(s(317));
              e[hl] = a;
            } else
              gt(), (a.flags & 128) === 0 && (a.memoizedState = null), a.flags |= 4;
            $(a), e = !1;
          } else
            e = Df(), l !== null && l.memoizedState !== null && (l.memoizedState.hydrationErrors = e), e = !0;
          if (!e)
            return a.flags & 256 ? (Cl(a), a) : (Cl(a), null);
        }
        return Cl(a), (a.flags & 128) !== 0 ? (a.lanes = t, a) : (t = u !== null, l = l !== null && l.memoizedState !== null, t && (u = a.child, e = null, u.alternate !== null && u.alternate.memoizedState !== null && u.alternate.memoizedState.cachePool !== null && (e = u.alternate.memoizedState.cachePool.pool), n = null, u.memoizedState !== null && u.memoizedState.cachePool !== null && (n = u.memoizedState.cachePool.pool), n !== e && (u.flags |= 2048)), t !== l && t && (a.child.flags |= 8192), fn(a, a.updateQueue), $(a), null);
      case 4:
        return qt(), l === null && Gc(a.stateNode.containerInfo), $(a), null;
      case 10:
        return oa(a.type), $(a), null;
      case 19:
        if (k(ll), u = a.memoizedState, u === null) return $(a), null;
        if (e = (a.flags & 128) !== 0, n = u.rendering, n === null)
          if (e) Wu(u, !1);
          else {
            if (P !== 0 || l !== null && (l.flags & 128) !== 0)
              for (l = a.child; l !== null; ) {
                if (n = we(l), n !== null) {
                  for (a.flags |= 128, Wu(u, !1), l = n.updateQueue, a.updateQueue = l, fn(a, l), a.subtreeFlags = 0, l = t, t = a.child; t !== null; )
                    f0(t, l), t = t.sibling;
                  return R(
                    ll,
                    ll.current & 1 | 2
                  ), C && ba(a, u.treeForkCount), a.child;
                }
                l = l.sibling;
              }
            u.tail !== null && Nl() > hn && (a.flags |= 128, e = !0, Wu(u, !1), a.lanes = 4194304);
          }
        else {
          if (!e)
            if (l = we(n), l !== null) {
              if (a.flags |= 128, e = !0, l = l.updateQueue, a.updateQueue = l, fn(a, l), Wu(u, !0), u.tail === null && u.tailMode === "hidden" && !n.alternate && !C)
                return $(a), null;
            } else
              2 * Nl() - u.renderingStartTime > hn && t !== 536870912 && (a.flags |= 128, e = !0, Wu(u, !1), a.lanes = 4194304);
          u.isBackwards ? (n.sibling = a.child, a.child = n) : (l = u.last, l !== null ? l.sibling = n : a.child = n, u.last = n);
        }
        return u.tail !== null ? (l = u.tail, u.rendering = l, u.tail = l.sibling, u.renderingStartTime = Nl(), l.sibling = null, t = ll.current, R(
          ll,
          e ? t & 1 | 2 : t & 1
        ), C && ba(a, u.treeForkCount), l) : ($(a), null);
      case 22:
      case 23:
        return Cl(a), Zf(), u = a.memoizedState !== null, l !== null ? l.memoizedState !== null !== u && (a.flags |= 8192) : u && (a.flags |= 8192), u ? (t & 536870912) !== 0 && (a.flags & 128) === 0 && ($(a), a.subtreeFlags & 6 && (a.flags |= 8192)) : $(a), t = a.updateQueue, t !== null && fn(a, t.retryQueue), t = null, l !== null && l.memoizedState !== null && l.memoizedState.cachePool !== null && (t = l.memoizedState.cachePool.pool), u = null, a.memoizedState !== null && a.memoizedState.cachePool !== null && (u = a.memoizedState.cachePool.pool), u !== t && (a.flags |= 2048), l !== null && k(zt), null;
      case 24:
        return t = null, l !== null && (t = l.memoizedState.cache), a.memoizedState.cache !== t && (a.flags |= 2048), oa(ul), $(a), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(s(156, a.tag));
  }
  function Cy(l, a) {
    switch (Tf(a), a.tag) {
      case 1:
        return l = a.flags, l & 65536 ? (a.flags = l & -65537 | 128, a) : null;
      case 3:
        return oa(ul), qt(), l = a.flags, (l & 65536) !== 0 && (l & 128) === 0 ? (a.flags = l & -65537 | 128, a) : null;
      case 26:
      case 27:
      case 5:
        return be(a), null;
      case 31:
        if (a.memoizedState !== null) {
          if (Cl(a), a.alternate === null)
            throw Error(s(340));
          gt();
        }
        return l = a.flags, l & 65536 ? (a.flags = l & -65537 | 128, a) : null;
      case 13:
        if (Cl(a), l = a.memoizedState, l !== null && l.dehydrated !== null) {
          if (a.alternate === null)
            throw Error(s(340));
          gt();
        }
        return l = a.flags, l & 65536 ? (a.flags = l & -65537 | 128, a) : null;
      case 19:
        return k(ll), null;
      case 4:
        return qt(), null;
      case 10:
        return oa(a.type), null;
      case 22:
      case 23:
        return Cl(a), Zf(), l !== null && k(zt), l = a.flags, l & 65536 ? (a.flags = l & -65537 | 128, a) : null;
      case 24:
        return oa(ul), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Qm(l, a) {
    switch (Tf(a), a.tag) {
      case 3:
        oa(ul), qt();
        break;
      case 26:
      case 27:
      case 5:
        be(a);
        break;
      case 4:
        qt();
        break;
      case 31:
        a.memoizedState !== null && Cl(a);
        break;
      case 13:
        Cl(a);
        break;
      case 19:
        k(ll);
        break;
      case 10:
        oa(a.type);
        break;
      case 22:
      case 23:
        Cl(a), Zf(), l !== null && k(zt);
        break;
      case 24:
        oa(ul);
    }
  }
  function wu(l, a) {
    try {
      var t = a.updateQueue, u = t !== null ? t.lastEffect : null;
      if (u !== null) {
        var e = u.next;
        t = e;
        do {
          if ((t.tag & l) === l) {
            u = void 0;
            var n = t.create, f = t.inst;
            u = n(), f.destroy = u;
          }
          t = t.next;
        } while (t !== e);
      }
    } catch (c) {
      V(a, a.return, c);
    }
  }
  function Wa(l, a, t) {
    try {
      var u = a.updateQueue, e = u !== null ? u.lastEffect : null;
      if (e !== null) {
        var n = e.next;
        u = n;
        do {
          if ((u.tag & l) === l) {
            var f = u.inst, c = f.destroy;
            if (c !== void 0) {
              f.destroy = void 0, e = a;
              var i = t, h = c;
              try {
                h();
              } catch (g) {
                V(
                  e,
                  i,
                  g
                );
              }
            }
          }
          u = u.next;
        } while (u !== n);
      }
    } catch (g) {
      V(a, a.return, g);
    }
  }
  function Xm(l) {
    var a = l.updateQueue;
    if (a !== null) {
      var t = l.stateNode;
      try {
        D0(a, t);
      } catch (u) {
        V(l, l.return, u);
      }
    }
  }
  function Cm(l, a, t) {
    t.props = Mt(
      l.type,
      l.memoizedProps
    ), t.state = l.memoizedState;
    try {
      t.componentWillUnmount();
    } catch (u) {
      V(l, a, u);
    }
  }
  function ru(l, a) {
    try {
      var t = l.ref;
      if (t !== null) {
        switch (l.tag) {
          case 26:
          case 27:
          case 5:
            var u = l.stateNode;
            break;
          case 30:
            u = l.stateNode;
            break;
          default:
            u = l.stateNode;
        }
        typeof t == "function" ? l.refCleanup = t(u) : t.current = u;
      }
    } catch (e) {
      V(l, a, e);
    }
  }
  function ma(l, a) {
    var t = l.ref, u = l.refCleanup;
    if (t !== null)
      if (typeof u == "function")
        try {
          u();
        } catch (e) {
          V(l, a, e);
        } finally {
          l.refCleanup = null, l = l.alternate, l != null && (l.refCleanup = null);
        }
      else if (typeof t == "function")
        try {
          t(null);
        } catch (e) {
          V(l, a, e);
        }
      else t.current = null;
  }
  function Gm(l) {
    var a = l.type, t = l.memoizedProps, u = l.stateNode;
    try {
      l: switch (a) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          t.autoFocus && u.focus();
          break l;
        case "img":
          t.src ? u.src = t.src : t.srcSet && (u.srcset = t.srcSet);
      }
    } catch (e) {
      V(l, l.return, e);
    }
  }
  function gc(l, a, t) {
    try {
      var u = l.stateNode;
      uh(u, l.type, t, a), u[Tl] = a;
    } catch (e) {
      V(l, l.return, e);
    }
  }
  function Zm(l) {
    return l.tag === 5 || l.tag === 3 || l.tag === 26 || l.tag === 27 && Pa(l.type) || l.tag === 4;
  }
  function sc(l) {
    l: for (; ; ) {
      for (; l.sibling === null; ) {
        if (l.return === null || Zm(l.return)) return null;
        l = l.return;
      }
      for (l.sibling.return = l.return, l = l.sibling; l.tag !== 5 && l.tag !== 6 && l.tag !== 18; ) {
        if (l.tag === 27 && Pa(l.type) || l.flags & 2 || l.child === null || l.tag === 4) continue l;
        l.child.return = l, l = l.child;
      }
      if (!(l.flags & 2)) return l.stateNode;
    }
  }
  function bc(l, a, t) {
    var u = l.tag;
    if (u === 5 || u === 6)
      l = l.stateNode, a ? (t.nodeType === 9 ? t.body : t.nodeName === "HTML" ? t.ownerDocument.body : t).insertBefore(l, a) : (a = t.nodeType === 9 ? t.body : t.nodeName === "HTML" ? t.ownerDocument.body : t, a.appendChild(l), t = t._reactRootContainer, t != null || a.onclick !== null || (a.onclick = Sa));
    else if (u !== 4 && (u === 27 && Pa(l.type) && (t = l.stateNode, a = null), l = l.child, l !== null))
      for (bc(l, a, t), l = l.sibling; l !== null; )
        bc(l, a, t), l = l.sibling;
  }
  function cn(l, a, t) {
    var u = l.tag;
    if (u === 5 || u === 6)
      l = l.stateNode, a ? t.insertBefore(l, a) : t.appendChild(l);
    else if (u !== 4 && (u === 27 && Pa(l.type) && (t = l.stateNode), l = l.child, l !== null))
      for (cn(l, a, t), l = l.sibling; l !== null; )
        cn(l, a, t), l = l.sibling;
  }
  function pm(l) {
    var a = l.stateNode, t = l.memoizedProps;
    try {
      for (var u = l.type, e = a.attributes; e.length; )
        a.removeAttributeNode(e[0]);
      sl(a, u, t), a[hl] = l, a[Tl] = t;
    } catch (n) {
      V(l, l.return, n);
    }
  }
  var Da = !1, fl = !1, zc = !1, Rm = typeof WeakSet == "function" ? WeakSet : Set, yl = null;
  function Gy(l, a) {
    if (l = l.containerInfo, Rc = Nn, l = ki(l), yf(l)) {
      if ("selectionStart" in l)
        var t = {
          start: l.selectionStart,
          end: l.selectionEnd
        };
      else
        l: {
          t = (t = l.ownerDocument) && t.defaultView || window;
          var u = t.getSelection && t.getSelection();
          if (u && u.rangeCount !== 0) {
            t = u.anchorNode;
            var e = u.anchorOffset, n = u.focusNode;
            u = u.focusOffset;
            try {
              t.nodeType, n.nodeType;
            } catch {
              t = null;
              break l;
            }
            var f = 0, c = -1, i = -1, h = 0, g = 0, o = l, d = null;
            a: for (; ; ) {
              for (var S; o !== t || e !== 0 && o.nodeType !== 3 || (c = f + e), o !== n || u !== 0 && o.nodeType !== 3 || (i = f + u), o.nodeType === 3 && (f += o.nodeValue.length), (S = o.firstChild) !== null; )
                d = o, o = S;
              for (; ; ) {
                if (o === l) break a;
                if (d === t && ++h === e && (c = f), d === n && ++g === u && (i = f), (S = o.nextSibling) !== null) break;
                o = d, d = o.parentNode;
              }
              o = S;
            }
            t = c === -1 || i === -1 ? null : { start: c, end: i };
          } else t = null;
        }
      t = t || { start: 0, end: 0 };
    } else t = null;
    for (jc = { focusedElem: l, selectionRange: t }, Nn = !1, yl = a; yl !== null; )
      if (a = yl, l = a.child, (a.subtreeFlags & 1028) !== 0 && l !== null)
        l.return = a, yl = l;
      else
        for (; yl !== null; ) {
          switch (a = yl, n = a.alternate, l = a.flags, a.tag) {
            case 0:
              if ((l & 4) !== 0 && (l = a.updateQueue, l = l !== null ? l.events : null, l !== null))
                for (t = 0; t < l.length; t++)
                  e = l[t], e.ref.impl = e.nextImpl;
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((l & 1024) !== 0 && n !== null) {
                l = void 0, t = a, e = n.memoizedProps, n = n.memoizedState, u = t.stateNode;
                try {
                  var T = Mt(
                    t.type,
                    e
                  );
                  l = u.getSnapshotBeforeUpdate(
                    T,
                    n
                  ), u.__reactInternalSnapshotBeforeUpdate = l;
                } catch (U) {
                  V(
                    t,
                    t.return,
                    U
                  );
                }
              }
              break;
            case 3:
              if ((l & 1024) !== 0) {
                if (l = a.stateNode.containerInfo, t = l.nodeType, t === 9)
                  Kc(l);
                else if (t === 1)
                  switch (l.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      Kc(l);
                      break;
                    default:
                      l.textContent = "";
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((l & 1024) !== 0) throw Error(s(163));
          }
          if (l = a.sibling, l !== null) {
            l.return = a.return, yl = l;
            break;
          }
          yl = a.return;
        }
  }
  function jm(l, a, t) {
    var u = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        Ua(l, t), u & 4 && wu(5, t);
        break;
      case 1:
        if (Ua(l, t), u & 4)
          if (l = t.stateNode, a === null)
            try {
              l.componentDidMount();
            } catch (f) {
              V(t, t.return, f);
            }
          else {
            var e = Mt(
              t.type,
              a.memoizedProps
            );
            a = a.memoizedState;
            try {
              l.componentDidUpdate(
                e,
                a,
                l.__reactInternalSnapshotBeforeUpdate
              );
            } catch (f) {
              V(
                t,
                t.return,
                f
              );
            }
          }
        u & 64 && Xm(t), u & 512 && ru(t, t.return);
        break;
      case 3:
        if (Ua(l, t), u & 64 && (l = t.updateQueue, l !== null)) {
          if (a = null, t.child !== null)
            switch (t.child.tag) {
              case 27:
              case 5:
                a = t.child.stateNode;
                break;
              case 1:
                a = t.child.stateNode;
            }
          try {
            D0(l, a);
          } catch (f) {
            V(t, t.return, f);
          }
        }
        break;
      case 27:
        a === null && u & 4 && pm(t);
      case 26:
      case 5:
        Ua(l, t), a === null && u & 4 && Gm(t), u & 512 && ru(t, t.return);
        break;
      case 12:
        Ua(l, t);
        break;
      case 31:
        Ua(l, t), u & 4 && Km(l, t);
        break;
      case 13:
        Ua(l, t), u & 4 && Lm(l, t), u & 64 && (l = t.memoizedState, l !== null && (l = l.dehydrated, l !== null && (t = Jy.bind(
          null,
          t
        ), yh(l, t))));
        break;
      case 22:
        if (u = t.memoizedState !== null || Da, !u) {
          a = a !== null && a.memoizedState !== null || fl, e = Da;
          var n = fl;
          Da = u, (fl = a) && !n ? _a(
            l,
            t,
            (t.subtreeFlags & 8772) !== 0
          ) : Ua(l, t), Da = e, fl = n;
        }
        break;
      case 30:
        break;
      default:
        Ua(l, t);
    }
  }
  function Vm(l) {
    var a = l.alternate;
    a !== null && (l.alternate = null, Vm(a)), l.child = null, l.deletions = null, l.sibling = null, l.tag === 5 && (a = l.stateNode, a !== null && wn(a)), l.stateNode = null, l.return = null, l.dependencies = null, l.memoizedProps = null, l.memoizedState = null, l.pendingProps = null, l.stateNode = null, l.updateQueue = null;
  }
  var F = null, Dl = !1;
  function Oa(l, a, t) {
    for (t = t.child; t !== null; )
      xm(l, a, t), t = t.sibling;
  }
  function xm(l, a, t) {
    if (Bl && typeof Bl.onCommitFiberUnmount == "function")
      try {
        Bl.onCommitFiberUnmount(zu, t);
      } catch {
      }
    switch (t.tag) {
      case 26:
        fl || ma(t, a), Oa(
          l,
          a,
          t
        ), t.memoizedState ? t.memoizedState.count-- : t.stateNode && (t = t.stateNode, t.parentNode.removeChild(t));
        break;
      case 27:
        fl || ma(t, a);
        var u = F, e = Dl;
        Pa(t.type) && (F = t.stateNode, Dl = !1), Oa(
          l,
          a,
          t
        ), ue(t.stateNode), F = u, Dl = e;
        break;
      case 5:
        fl || ma(t, a);
      case 6:
        if (u = F, e = Dl, F = null, Oa(
          l,
          a,
          t
        ), F = u, Dl = e, F !== null)
          if (Dl)
            try {
              (F.nodeType === 9 ? F.body : F.nodeName === "HTML" ? F.ownerDocument.body : F).removeChild(t.stateNode);
            } catch (n) {
              V(
                t,
                a,
                n
              );
            }
          else
            try {
              F.removeChild(t.stateNode);
            } catch (n) {
              V(
                t,
                a,
                n
              );
            }
        break;
      case 18:
        F !== null && (Dl ? (l = F, Xv(
          l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l,
          t.stateNode
        ), gu(l)) : Xv(F, t.stateNode));
        break;
      case 4:
        u = F, e = Dl, F = t.stateNode.containerInfo, Dl = !0, Oa(
          l,
          a,
          t
        ), F = u, Dl = e;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        Wa(2, t, a), fl || Wa(4, t, a), Oa(
          l,
          a,
          t
        );
        break;
      case 1:
        fl || (ma(t, a), u = t.stateNode, typeof u.componentWillUnmount == "function" && Cm(
          t,
          a,
          u
        )), Oa(
          l,
          a,
          t
        );
        break;
      case 21:
        Oa(
          l,
          a,
          t
        );
        break;
      case 22:
        fl = (u = fl) || t.memoizedState !== null, Oa(
          l,
          a,
          t
        ), fl = u;
        break;
      default:
        Oa(
          l,
          a,
          t
        );
    }
  }
  function Km(l, a) {
    if (a.memoizedState === null && (l = a.alternate, l !== null && (l = l.memoizedState, l !== null))) {
      l = l.dehydrated;
      try {
        gu(l);
      } catch (t) {
        V(a, a.return, t);
      }
    }
  }
  function Lm(l, a) {
    if (a.memoizedState === null && (l = a.alternate, l !== null && (l = l.memoizedState, l !== null && (l = l.dehydrated, l !== null))))
      try {
        gu(l);
      } catch (t) {
        V(a, a.return, t);
      }
  }
  function Zy(l) {
    switch (l.tag) {
      case 31:
      case 13:
      case 19:
        var a = l.stateNode;
        return a === null && (a = l.stateNode = new Rm()), a;
      case 22:
        return l = l.stateNode, a = l._retryCache, a === null && (a = l._retryCache = new Rm()), a;
      default:
        throw Error(s(435, l.tag));
    }
  }
  function mn(l, a) {
    var t = Zy(l);
    a.forEach(function(u) {
      if (!t.has(u)) {
        t.add(u);
        var e = Wy.bind(null, l, u);
        u.then(e, e);
      }
    });
  }
  function Ol(l, a) {
    var t = a.deletions;
    if (t !== null)
      for (var u = 0; u < t.length; u++) {
        var e = t[u], n = l, f = a, c = f;
        l: for (; c !== null; ) {
          switch (c.tag) {
            case 27:
              if (Pa(c.type)) {
                F = c.stateNode, Dl = !1;
                break l;
              }
              break;
            case 5:
              F = c.stateNode, Dl = !1;
              break l;
            case 3:
            case 4:
              F = c.stateNode.containerInfo, Dl = !0;
              break l;
          }
          c = c.return;
        }
        if (F === null) throw Error(s(160));
        xm(n, f, e), F = null, Dl = !1, n = e.alternate, n !== null && (n.return = null), e.return = null;
      }
    if (a.subtreeFlags & 13886)
      for (a = a.child; a !== null; )
        Jm(a, l), a = a.sibling;
  }
  var ua = null;
  function Jm(l, a) {
    var t = l.alternate, u = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        Ol(a, l), Ul(l), u & 4 && (Wa(3, l, l.return), wu(3, l), Wa(5, l, l.return));
        break;
      case 1:
        Ol(a, l), Ul(l), u & 512 && (fl || t === null || ma(t, t.return)), u & 64 && Da && (l = l.updateQueue, l !== null && (u = l.callbacks, u !== null && (t = l.shared.hiddenCallbacks, l.shared.hiddenCallbacks = t === null ? u : t.concat(u))));
        break;
      case 26:
        var e = ua;
        if (Ol(a, l), Ul(l), u & 512 && (fl || t === null || ma(t, t.return)), u & 4) {
          var n = t !== null ? t.memoizedState : null;
          if (u = l.memoizedState, t === null)
            if (u === null)
              if (l.stateNode === null) {
                l: {
                  u = l.type, t = l.memoizedProps, e = e.ownerDocument || e;
                  a: switch (u) {
                    case "title":
                      n = e.getElementsByTagName("title")[0], (!n || n[Au] || n[hl] || n.namespaceURI === "http://www.w3.org/2000/svg" || n.hasAttribute("itemprop")) && (n = e.createElement(u), e.head.insertBefore(
                        n,
                        e.querySelector("head > title")
                      )), sl(n, u, t), n[hl] = l, vl(n), u = n;
                      break l;
                    case "link":
                      var f = Jv(
                        "link",
                        "href",
                        e
                      ).get(u + (t.href || ""));
                      if (f) {
                        for (var c = 0; c < f.length; c++)
                          if (n = f[c], n.getAttribute("href") === (t.href == null || t.href === "" ? null : t.href) && n.getAttribute("rel") === (t.rel == null ? null : t.rel) && n.getAttribute("title") === (t.title == null ? null : t.title) && n.getAttribute("crossorigin") === (t.crossOrigin == null ? null : t.crossOrigin)) {
                            f.splice(c, 1);
                            break a;
                          }
                      }
                      n = e.createElement(u), sl(n, u, t), e.head.appendChild(n);
                      break;
                    case "meta":
                      if (f = Jv(
                        "meta",
                        "content",
                        e
                      ).get(u + (t.content || ""))) {
                        for (c = 0; c < f.length; c++)
                          if (n = f[c], n.getAttribute("content") === (t.content == null ? null : "" + t.content) && n.getAttribute("name") === (t.name == null ? null : t.name) && n.getAttribute("property") === (t.property == null ? null : t.property) && n.getAttribute("http-equiv") === (t.httpEquiv == null ? null : t.httpEquiv) && n.getAttribute("charset") === (t.charSet == null ? null : t.charSet)) {
                            f.splice(c, 1);
                            break a;
                          }
                      }
                      n = e.createElement(u), sl(n, u, t), e.head.appendChild(n);
                      break;
                    default:
                      throw Error(s(468, u));
                  }
                  n[hl] = l, vl(n), u = n;
                }
                l.stateNode = u;
              } else
                Wv(
                  e,
                  l.type,
                  l.stateNode
                );
            else
              l.stateNode = Lv(
                e,
                u,
                l.memoizedProps
              );
          else
            n !== u ? (n === null ? t.stateNode !== null && (t = t.stateNode, t.parentNode.removeChild(t)) : n.count--, u === null ? Wv(
              e,
              l.type,
              l.stateNode
            ) : Lv(
              e,
              u,
              l.memoizedProps
            )) : u === null && l.stateNode !== null && gc(
              l,
              l.memoizedProps,
              t.memoizedProps
            );
        }
        break;
      case 27:
        Ol(a, l), Ul(l), u & 512 && (fl || t === null || ma(t, t.return)), t !== null && u & 4 && gc(
          l,
          l.memoizedProps,
          t.memoizedProps
        );
        break;
      case 5:
        if (Ol(a, l), Ul(l), u & 512 && (fl || t === null || ma(t, t.return)), l.flags & 32) {
          e = l.stateNode;
          try {
            pt(e, "");
          } catch (T) {
            V(l, l.return, T);
          }
        }
        u & 4 && l.stateNode != null && (e = l.memoizedProps, gc(
          l,
          e,
          t !== null ? t.memoizedProps : e
        )), u & 1024 && (zc = !0);
        break;
      case 6:
        if (Ol(a, l), Ul(l), u & 4) {
          if (l.stateNode === null)
            throw Error(s(162));
          u = l.memoizedProps, t = l.stateNode;
          try {
            t.nodeValue = u;
          } catch (T) {
            V(l, l.return, T);
          }
        }
        break;
      case 3:
        if (On = null, e = ua, ua = Mn(a.containerInfo), Ol(a, l), ua = e, Ul(l), u & 4 && t !== null && t.memoizedState.isDehydrated)
          try {
            gu(a.containerInfo);
          } catch (T) {
            V(l, l.return, T);
          }
        zc && (zc = !1, Wm(l));
        break;
      case 4:
        u = ua, ua = Mn(
          l.stateNode.containerInfo
        ), Ol(a, l), Ul(l), ua = u;
        break;
      case 12:
        Ol(a, l), Ul(l);
        break;
      case 31:
        Ol(a, l), Ul(l), u & 4 && (u = l.updateQueue, u !== null && (l.updateQueue = null, mn(l, u)));
        break;
      case 13:
        Ol(a, l), Ul(l), l.child.flags & 8192 && l.memoizedState !== null != (t !== null && t.memoizedState !== null) && (yn = Nl()), u & 4 && (u = l.updateQueue, u !== null && (l.updateQueue = null, mn(l, u)));
        break;
      case 22:
        e = l.memoizedState !== null;
        var i = t !== null && t.memoizedState !== null, h = Da, g = fl;
        if (Da = h || e, fl = g || i, Ol(a, l), fl = g, Da = h, Ul(l), u & 8192)
          l: for (a = l.stateNode, a._visibility = e ? a._visibility & -2 : a._visibility | 1, e && (t === null || i || Da || fl || Dt(l)), t = null, a = l; ; ) {
            if (a.tag === 5 || a.tag === 26) {
              if (t === null) {
                i = t = a;
                try {
                  if (n = i.stateNode, e)
                    f = n.style, typeof f.setProperty == "function" ? f.setProperty("display", "none", "important") : f.display = "none";
                  else {
                    c = i.stateNode;
                    var o = i.memoizedProps.style, d = o != null && o.hasOwnProperty("display") ? o.display : null;
                    c.style.display = d == null || typeof d == "boolean" ? "" : ("" + d).trim();
                  }
                } catch (T) {
                  V(i, i.return, T);
                }
              }
            } else if (a.tag === 6) {
              if (t === null) {
                i = a;
                try {
                  i.stateNode.nodeValue = e ? "" : i.memoizedProps;
                } catch (T) {
                  V(i, i.return, T);
                }
              }
            } else if (a.tag === 18) {
              if (t === null) {
                i = a;
                try {
                  var S = i.stateNode;
                  e ? Cv(S, !0) : Cv(i.stateNode, !1);
                } catch (T) {
                  V(i, i.return, T);
                }
              }
            } else if ((a.tag !== 22 && a.tag !== 23 || a.memoizedState === null || a === l) && a.child !== null) {
              a.child.return = a, a = a.child;
              continue;
            }
            if (a === l) break l;
            for (; a.sibling === null; ) {
              if (a.return === null || a.return === l) break l;
              t === a && (t = null), a = a.return;
            }
            t === a && (t = null), a.sibling.return = a.return, a = a.sibling;
          }
        u & 4 && (u = l.updateQueue, u !== null && (t = u.retryQueue, t !== null && (u.retryQueue = null, mn(l, t))));
        break;
      case 19:
        Ol(a, l), Ul(l), u & 4 && (u = l.updateQueue, u !== null && (l.updateQueue = null, mn(l, u)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        Ol(a, l), Ul(l);
    }
  }
  function Ul(l) {
    var a = l.flags;
    if (a & 2) {
      try {
        for (var t, u = l.return; u !== null; ) {
          if (Zm(u)) {
            t = u;
            break;
          }
          u = u.return;
        }
        if (t == null) throw Error(s(160));
        switch (t.tag) {
          case 27:
            var e = t.stateNode, n = sc(l);
            cn(l, n, e);
            break;
          case 5:
            var f = t.stateNode;
            t.flags & 32 && (pt(f, ""), t.flags &= -33);
            var c = sc(l);
            cn(l, c, f);
            break;
          case 3:
          case 4:
            var i = t.stateNode.containerInfo, h = sc(l);
            bc(
              l,
              h,
              i
            );
            break;
          default:
            throw Error(s(161));
        }
      } catch (g) {
        V(l, l.return, g);
      }
      l.flags &= -3;
    }
    a & 4096 && (l.flags &= -4097);
  }
  function Wm(l) {
    if (l.subtreeFlags & 1024)
      for (l = l.child; l !== null; ) {
        var a = l;
        Wm(a), a.tag === 5 && a.flags & 1024 && a.stateNode.reset(), l = l.sibling;
      }
  }
  function Ua(l, a) {
    if (a.subtreeFlags & 8772)
      for (a = a.child; a !== null; )
        jm(l, a.alternate, a), a = a.sibling;
  }
  function Dt(l) {
    for (l = l.child; l !== null; ) {
      var a = l;
      switch (a.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          Wa(4, a, a.return), Dt(a);
          break;
        case 1:
          ma(a, a.return);
          var t = a.stateNode;
          typeof t.componentWillUnmount == "function" && Cm(
            a,
            a.return,
            t
          ), Dt(a);
          break;
        case 27:
          ue(a.stateNode);
        case 26:
        case 5:
          ma(a, a.return), Dt(a);
          break;
        case 22:
          a.memoizedState === null && Dt(a);
          break;
        case 30:
          Dt(a);
          break;
        default:
          Dt(a);
      }
      l = l.sibling;
    }
  }
  function _a(l, a, t) {
    for (t = t && (a.subtreeFlags & 8772) !== 0, a = a.child; a !== null; ) {
      var u = a.alternate, e = l, n = a, f = n.flags;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          _a(
            e,
            n,
            t
          ), wu(4, n);
          break;
        case 1:
          if (_a(
            e,
            n,
            t
          ), u = n, e = u.stateNode, typeof e.componentDidMount == "function")
            try {
              e.componentDidMount();
            } catch (h) {
              V(u, u.return, h);
            }
          if (u = n, e = u.updateQueue, e !== null) {
            var c = u.stateNode;
            try {
              var i = e.shared.hiddenCallbacks;
              if (i !== null)
                for (e.shared.hiddenCallbacks = null, e = 0; e < i.length; e++)
                  M0(i[e], c);
            } catch (h) {
              V(u, u.return, h);
            }
          }
          t && f & 64 && Xm(n), ru(n, n.return);
          break;
        case 27:
          pm(n);
        case 26:
        case 5:
          _a(
            e,
            n,
            t
          ), t && u === null && f & 4 && Gm(n), ru(n, n.return);
          break;
        case 12:
          _a(
            e,
            n,
            t
          );
          break;
        case 31:
          _a(
            e,
            n,
            t
          ), t && f & 4 && Km(e, n);
          break;
        case 13:
          _a(
            e,
            n,
            t
          ), t && f & 4 && Lm(e, n);
          break;
        case 22:
          n.memoizedState === null && _a(
            e,
            n,
            t
          ), ru(n, n.return);
          break;
        case 30:
          break;
        default:
          _a(
            e,
            n,
            t
          );
      }
      a = a.sibling;
    }
  }
  function oc(l, a) {
    var t = null;
    l !== null && l.memoizedState !== null && l.memoizedState.cachePool !== null && (t = l.memoizedState.cachePool.pool), l = null, a.memoizedState !== null && a.memoizedState.cachePool !== null && (l = a.memoizedState.cachePool.pool), l !== t && (l != null && l.refCount++, t != null && Xu(t));
  }
  function Ec(l, a) {
    l = null, a.alternate !== null && (l = a.alternate.memoizedState.cache), a = a.memoizedState.cache, a !== l && (a.refCount++, l != null && Xu(l));
  }
  function ea(l, a, t, u) {
    if (a.subtreeFlags & 10256)
      for (a = a.child; a !== null; )
        wm(
          l,
          a,
          t,
          u
        ), a = a.sibling;
  }
  function wm(l, a, t, u) {
    var e = a.flags;
    switch (a.tag) {
      case 0:
      case 11:
      case 15:
        ea(
          l,
          a,
          t,
          u
        ), e & 2048 && wu(9, a);
        break;
      case 1:
        ea(
          l,
          a,
          t,
          u
        );
        break;
      case 3:
        ea(
          l,
          a,
          t,
          u
        ), e & 2048 && (l = null, a.alternate !== null && (l = a.alternate.memoizedState.cache), a = a.memoizedState.cache, a !== l && (a.refCount++, l != null && Xu(l)));
        break;
      case 12:
        if (e & 2048) {
          ea(
            l,
            a,
            t,
            u
          ), l = a.stateNode;
          try {
            var n = a.memoizedProps, f = n.id, c = n.onPostCommit;
            typeof c == "function" && c(
              f,
              a.alternate === null ? "mount" : "update",
              l.passiveEffectDuration,
              -0
            );
          } catch (i) {
            V(a, a.return, i);
          }
        } else
          ea(
            l,
            a,
            t,
            u
          );
        break;
      case 31:
        ea(
          l,
          a,
          t,
          u
        );
        break;
      case 13:
        ea(
          l,
          a,
          t,
          u
        );
        break;
      case 23:
        break;
      case 22:
        n = a.stateNode, f = a.alternate, a.memoizedState !== null ? n._visibility & 2 ? ea(
          l,
          a,
          t,
          u
        ) : $u(l, a) : n._visibility & 2 ? ea(
          l,
          a,
          t,
          u
        ) : (n._visibility |= 2, eu(
          l,
          a,
          t,
          u,
          (a.subtreeFlags & 10256) !== 0 || !1
        )), e & 2048 && oc(f, a);
        break;
      case 24:
        ea(
          l,
          a,
          t,
          u
        ), e & 2048 && Ec(a.alternate, a);
        break;
      default:
        ea(
          l,
          a,
          t,
          u
        );
    }
  }
  function eu(l, a, t, u, e) {
    for (e = e && ((a.subtreeFlags & 10256) !== 0 || !1), a = a.child; a !== null; ) {
      var n = l, f = a, c = t, i = u, h = f.flags;
      switch (f.tag) {
        case 0:
        case 11:
        case 15:
          eu(
            n,
            f,
            c,
            i,
            e
          ), wu(8, f);
          break;
        case 23:
          break;
        case 22:
          var g = f.stateNode;
          f.memoizedState !== null ? g._visibility & 2 ? eu(
            n,
            f,
            c,
            i,
            e
          ) : $u(
            n,
            f
          ) : (g._visibility |= 2, eu(
            n,
            f,
            c,
            i,
            e
          )), e && h & 2048 && oc(
            f.alternate,
            f
          );
          break;
        case 24:
          eu(
            n,
            f,
            c,
            i,
            e
          ), e && h & 2048 && Ec(f.alternate, f);
          break;
        default:
          eu(
            n,
            f,
            c,
            i,
            e
          );
      }
      a = a.sibling;
    }
  }
  function $u(l, a) {
    if (a.subtreeFlags & 10256)
      for (a = a.child; a !== null; ) {
        var t = l, u = a, e = u.flags;
        switch (u.tag) {
          case 22:
            $u(t, u), e & 2048 && oc(
              u.alternate,
              u
            );
            break;
          case 24:
            $u(t, u), e & 2048 && Ec(u.alternate, u);
            break;
          default:
            $u(t, u);
        }
        a = a.sibling;
      }
  }
  var Fu = 8192;
  function nu(l, a, t) {
    if (l.subtreeFlags & Fu)
      for (l = l.child; l !== null; )
        rm(
          l,
          a,
          t
        ), l = l.sibling;
  }
  function rm(l, a, t) {
    switch (l.tag) {
      case 26:
        nu(
          l,
          a,
          t
        ), l.flags & Fu && l.memoizedState !== null && Mh(
          t,
          ua,
          l.memoizedState,
          l.memoizedProps
        );
        break;
      case 5:
        nu(
          l,
          a,
          t
        );
        break;
      case 3:
      case 4:
        var u = ua;
        ua = Mn(l.stateNode.containerInfo), nu(
          l,
          a,
          t
        ), ua = u;
        break;
      case 22:
        l.memoizedState === null && (u = l.alternate, u !== null && u.memoizedState !== null ? (u = Fu, Fu = 16777216, nu(
          l,
          a,
          t
        ), Fu = u) : nu(
          l,
          a,
          t
        ));
        break;
      default:
        nu(
          l,
          a,
          t
        );
    }
  }
  function $m(l) {
    var a = l.alternate;
    if (a !== null && (l = a.child, l !== null)) {
      a.child = null;
      do
        a = l.sibling, l.sibling = null, l = a;
      while (l !== null);
    }
  }
  function ku(l) {
    var a = l.deletions;
    if ((l.flags & 16) !== 0) {
      if (a !== null)
        for (var t = 0; t < a.length; t++) {
          var u = a[t];
          yl = u, km(
            u,
            l
          );
        }
      $m(l);
    }
    if (l.subtreeFlags & 10256)
      for (l = l.child; l !== null; )
        Fm(l), l = l.sibling;
  }
  function Fm(l) {
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        ku(l), l.flags & 2048 && Wa(9, l, l.return);
        break;
      case 3:
        ku(l);
        break;
      case 12:
        ku(l);
        break;
      case 22:
        var a = l.stateNode;
        l.memoizedState !== null && a._visibility & 2 && (l.return === null || l.return.tag !== 13) ? (a._visibility &= -3, vn(l)) : ku(l);
        break;
      default:
        ku(l);
    }
  }
  function vn(l) {
    var a = l.deletions;
    if ((l.flags & 16) !== 0) {
      if (a !== null)
        for (var t = 0; t < a.length; t++) {
          var u = a[t];
          yl = u, km(
            u,
            l
          );
        }
      $m(l);
    }
    for (l = l.child; l !== null; ) {
      switch (a = l, a.tag) {
        case 0:
        case 11:
        case 15:
          Wa(8, a, a.return), vn(a);
          break;
        case 22:
          t = a.stateNode, t._visibility & 2 && (t._visibility &= -3, vn(a));
          break;
        default:
          vn(a);
      }
      l = l.sibling;
    }
  }
  function km(l, a) {
    for (; yl !== null; ) {
      var t = yl;
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          Wa(8, t, a);
          break;
        case 23:
        case 22:
          if (t.memoizedState !== null && t.memoizedState.cachePool !== null) {
            var u = t.memoizedState.cachePool.pool;
            u != null && u.refCount++;
          }
          break;
        case 24:
          Xu(t.memoizedState.cache);
      }
      if (u = t.child, u !== null) u.return = t, yl = u;
      else
        l: for (t = l; yl !== null; ) {
          u = yl;
          var e = u.sibling, n = u.return;
          if (Vm(u), u === t) {
            yl = null;
            break l;
          }
          if (e !== null) {
            e.return = n, yl = e;
            break l;
          }
          yl = n;
        }
    }
  }
  var py = {
    getCacheForType: function(l) {
      var a = Sl(ul), t = a.data.get(l);
      return t === void 0 && (t = l(), a.data.set(l, t)), t;
    },
    cacheSignal: function() {
      return Sl(ul).controller.signal;
    }
  }, Ry = typeof WeakMap == "function" ? WeakMap : Map, p = 0, J = null, q = null, Q = 0, j = 0, Gl = null, wa = !1, fu = !1, Ac = !1, Ha = 0, P = 0, ra = 0, Ot = 0, Tc = 0, Zl = 0, cu = 0, Iu = null, _l = null, Mc = !1, yn = 0, Im = 0, hn = 1 / 0, dn = null, $a = null, cl = 0, Fa = null, iu = null, Na = 0, Dc = 0, Oc = null, Pm = null, Pu = 0, Uc = null;
  function pl() {
    return (p & 2) !== 0 && Q !== 0 ? Q & -Q : z.T !== null ? Yc() : gi();
  }
  function lv() {
    if (Zl === 0)
      if ((Q & 536870912) === 0 || C) {
        var l = Ee;
        Ee <<= 1, (Ee & 3932160) === 0 && (Ee = 262144), Zl = l;
      } else Zl = 536870912;
    return l = Xl.current, l !== null && (l.flags |= 32), Zl;
  }
  function Hl(l, a, t) {
    (l === J && (j === 2 || j === 9) || l.cancelPendingCommit !== null) && (mu(l, 0), ka(
      l,
      Q,
      Zl,
      !1
    )), Eu(l, t), ((p & 2) === 0 || l !== J) && (l === J && ((p & 2) === 0 && (Ot |= t), P === 4 && ka(
      l,
      Q,
      Zl,
      !1
    )), va(l));
  }
  function av(l, a, t) {
    if ((p & 6) !== 0) throw Error(s(327));
    var u = !t && (a & 127) === 0 && (a & l.expiredLanes) === 0 || ou(l, a), e = u ? xy(l, a) : Hc(l, a, !0), n = u;
    do {
      if (e === 0) {
        fu && !u && ka(l, a, 0, !1);
        break;
      } else {
        if (t = l.current.alternate, n && !jy(t)) {
          e = Hc(l, a, !1), n = !1;
          continue;
        }
        if (e === 2) {
          if (n = a, l.errorRecoveryDisabledLanes & n)
            var f = 0;
          else
            f = l.pendingLanes & -536870913, f = f !== 0 ? f : f & 536870912 ? 536870912 : 0;
          if (f !== 0) {
            a = f;
            l: {
              var c = l;
              e = Iu;
              var i = c.current.memoizedState.isDehydrated;
              if (i && (mu(c, f).flags |= 256), f = Hc(
                c,
                f,
                !1
              ), f !== 2) {
                if (Ac && !i) {
                  c.errorRecoveryDisabledLanes |= n, Ot |= n, e = 4;
                  break l;
                }
                n = _l, _l = e, n !== null && (_l === null ? _l = n : _l.push.apply(
                  _l,
                  n
                ));
              }
              e = f;
            }
            if (n = !1, e !== 2) continue;
          }
        }
        if (e === 1) {
          mu(l, 0), ka(l, a, 0, !0);
          break;
        }
        l: {
          switch (u = l, n = e, n) {
            case 0:
            case 1:
              throw Error(s(345));
            case 4:
              if ((a & 4194048) !== a) break;
            case 6:
              ka(
                u,
                a,
                Zl,
                !wa
              );
              break l;
            case 2:
              _l = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(s(329));
          }
          if ((a & 62914560) === a && (e = yn + 300 - Nl(), 10 < e)) {
            if (ka(
              u,
              a,
              Zl,
              !wa
            ), Te(u, 0, !0) !== 0) break l;
            Na = a, u.timeoutHandle = Yv(
              tv.bind(
                null,
                u,
                t,
                _l,
                dn,
                Mc,
                a,
                Zl,
                Ot,
                cu,
                wa,
                n,
                "Throttled",
                -0,
                0
              ),
              e
            );
            break l;
          }
          tv(
            u,
            t,
            _l,
            dn,
            Mc,
            a,
            Zl,
            Ot,
            cu,
            wa,
            n,
            null,
            -0,
            0
          );
        }
      }
      break;
    } while (!0);
    va(l);
  }
  function tv(l, a, t, u, e, n, f, c, i, h, g, o, d, S) {
    if (l.timeoutHandle = -1, o = a.subtreeFlags, o & 8192 || (o & 16785408) === 16785408) {
      o = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: Sa
      }, rm(
        a,
        n,
        o
      );
      var T = (n & 62914560) === n ? yn - Nl() : (n & 4194048) === n ? Im - Nl() : 0;
      if (T = Dh(
        o,
        T
      ), T !== null) {
        Na = n, l.cancelPendingCommit = T(
          vv.bind(
            null,
            l,
            a,
            n,
            t,
            u,
            e,
            f,
            c,
            i,
            g,
            o,
            null,
            d,
            S
          )
        ), ka(l, n, f, !h);
        return;
      }
    }
    vv(
      l,
      a,
      n,
      t,
      u,
      e,
      f,
      c,
      i
    );
  }
  function jy(l) {
    for (var a = l; ; ) {
      var t = a.tag;
      if ((t === 0 || t === 11 || t === 15) && a.flags & 16384 && (t = a.updateQueue, t !== null && (t = t.stores, t !== null)))
        for (var u = 0; u < t.length; u++) {
          var e = t[u], n = e.getSnapshot;
          e = e.value;
          try {
            if (!Yl(n(), e)) return !1;
          } catch {
            return !1;
          }
        }
      if (t = a.child, a.subtreeFlags & 16384 && t !== null)
        t.return = a, a = t;
      else {
        if (a === l) break;
        for (; a.sibling === null; ) {
          if (a.return === null || a.return === l) return !0;
          a = a.return;
        }
        a.sibling.return = a.return, a = a.sibling;
      }
    }
    return !0;
  }
  function ka(l, a, t, u) {
    a &= ~Tc, a &= ~Ot, l.suspendedLanes |= a, l.pingedLanes &= ~a, u && (l.warmLanes |= a), u = l.expirationTimes;
    for (var e = a; 0 < e; ) {
      var n = 31 - ql(e), f = 1 << n;
      u[n] = -1, e &= ~f;
    }
    t !== 0 && hi(l, t, a);
  }
  function Sn() {
    return (p & 6) === 0 ? (le(0), !1) : !0;
  }
  function _c() {
    if (q !== null) {
      if (j === 0)
        var l = q.return;
      else
        l = q, za = st = null, Kf(l), Pt = null, Gu = 0, l = q;
      for (; l !== null; )
        Qm(l.alternate, l), l = l.return;
      q = null;
    }
  }
  function mu(l, a) {
    var t = l.timeoutHandle;
    t !== -1 && (l.timeoutHandle = -1, fh(t)), t = l.cancelPendingCommit, t !== null && (l.cancelPendingCommit = null, t()), Na = 0, _c(), J = l, q = t = sa(l.current, null), Q = a, j = 0, Gl = null, wa = !1, fu = ou(l, a), Ac = !1, cu = Zl = Tc = Ot = ra = P = 0, _l = Iu = null, Mc = !1, (a & 8) !== 0 && (a |= a & 32);
    var u = l.entangledLanes;
    if (u !== 0)
      for (l = l.entanglements, u &= a; 0 < u; ) {
        var e = 31 - ql(u), n = 1 << e;
        a |= l[e], u &= ~n;
      }
    return Ha = a, Xe(), t;
  }
  function uv(l, a) {
    H = null, z.H = Lu, a === It || a === xe ? (a = o0(), j = 3) : a === qf ? (a = o0(), j = 4) : j = a === nc ? 8 : a !== null && typeof a == "object" && typeof a.then == "function" ? 6 : 1, Gl = a, q === null && (P = 1, tn(
      l,
      wl(a, l.current)
    ));
  }
  function ev() {
    var l = Xl.current;
    return l === null ? !0 : (Q & 4194048) === Q ? kl === null : (Q & 62914560) === Q || (Q & 536870912) !== 0 ? l === kl : !1;
  }
  function nv() {
    var l = z.H;
    return z.H = Lu, l === null ? Lu : l;
  }
  function fv() {
    var l = z.A;
    return z.A = py, l;
  }
  function gn() {
    P = 4, wa || (Q & 4194048) !== Q && Xl.current !== null || (fu = !0), (ra & 134217727) === 0 && (Ot & 134217727) === 0 || J === null || ka(
      J,
      Q,
      Zl,
      !1
    );
  }
  function Hc(l, a, t) {
    var u = p;
    p |= 2;
    var e = nv(), n = fv();
    (J !== l || Q !== a) && (dn = null, mu(l, a)), a = !1;
    var f = P;
    l: do
      try {
        if (j !== 0 && q !== null) {
          var c = q, i = Gl;
          switch (j) {
            case 8:
              _c(), f = 6;
              break l;
            case 3:
            case 2:
            case 9:
            case 6:
              Xl.current === null && (a = !0);
              var h = j;
              if (j = 0, Gl = null, vu(l, c, i, h), t && fu) {
                f = 0;
                break l;
              }
              break;
            default:
              h = j, j = 0, Gl = null, vu(l, c, i, h);
          }
        }
        Vy(), f = P;
        break;
      } catch (g) {
        uv(l, g);
      }
    while (!0);
    return a && l.shellSuspendCounter++, za = st = null, p = u, z.H = e, z.A = n, q === null && (J = null, Q = 0, Xe()), f;
  }
  function Vy() {
    for (; q !== null; ) cv(q);
  }
  function xy(l, a) {
    var t = p;
    p |= 2;
    var u = nv(), e = fv();
    J !== l || Q !== a ? (dn = null, hn = Nl() + 500, mu(l, a)) : fu = ou(
      l,
      a
    );
    l: do
      try {
        if (j !== 0 && q !== null) {
          a = q;
          var n = Gl;
          a: switch (j) {
            case 1:
              j = 0, Gl = null, vu(l, a, n, 1);
              break;
            case 2:
            case 9:
              if (b0(n)) {
                j = 0, Gl = null, iv(a);
                break;
              }
              a = function() {
                j !== 2 && j !== 9 || J !== l || (j = 7), va(l);
              }, n.then(a, a);
              break l;
            case 3:
              j = 7;
              break l;
            case 4:
              j = 5;
              break l;
            case 7:
              b0(n) ? (j = 0, Gl = null, iv(a)) : (j = 0, Gl = null, vu(l, a, n, 7));
              break;
            case 5:
              var f = null;
              switch (q.tag) {
                case 26:
                  f = q.memoizedState;
                case 5:
                case 27:
                  var c = q;
                  if (f ? wv(f) : c.stateNode.complete) {
                    j = 0, Gl = null;
                    var i = c.sibling;
                    if (i !== null) q = i;
                    else {
                      var h = c.return;
                      h !== null ? (q = h, sn(h)) : q = null;
                    }
                    break a;
                  }
              }
              j = 0, Gl = null, vu(l, a, n, 5);
              break;
            case 6:
              j = 0, Gl = null, vu(l, a, n, 6);
              break;
            case 8:
              _c(), P = 6;
              break l;
            default:
              throw Error(s(462));
          }
        }
        Ky();
        break;
      } catch (g) {
        uv(l, g);
      }
    while (!0);
    return za = st = null, z.H = u, z.A = e, p = t, q !== null ? 0 : (J = null, Q = 0, Xe(), P);
  }
  function Ky() {
    for (; q !== null && !h1(); )
      cv(q);
  }
  function cv(l) {
    var a = qm(l.alternate, l, Ha);
    l.memoizedProps = l.pendingProps, a === null ? sn(l) : q = a;
  }
  function iv(l) {
    var a = l, t = a.alternate;
    switch (a.tag) {
      case 15:
      case 0:
        a = Om(
          t,
          a,
          a.pendingProps,
          a.type,
          void 0,
          Q
        );
        break;
      case 11:
        a = Om(
          t,
          a,
          a.pendingProps,
          a.type.render,
          a.ref,
          Q
        );
        break;
      case 5:
        Kf(a);
      default:
        Qm(t, a), a = q = f0(a, Ha), a = qm(t, a, Ha);
    }
    l.memoizedProps = l.pendingProps, a === null ? sn(l) : q = a;
  }
  function vu(l, a, t, u) {
    za = st = null, Kf(a), Pt = null, Gu = 0;
    var e = a.return;
    try {
      if (qy(
        l,
        e,
        a,
        t,
        Q
      )) {
        P = 1, tn(
          l,
          wl(t, l.current)
        ), q = null;
        return;
      }
    } catch (n) {
      if (e !== null) throw q = e, n;
      P = 1, tn(
        l,
        wl(t, l.current)
      ), q = null;
      return;
    }
    a.flags & 32768 ? (C || u === 1 ? l = !0 : fu || (Q & 536870912) !== 0 ? l = !1 : (wa = l = !0, (u === 2 || u === 9 || u === 3 || u === 6) && (u = Xl.current, u !== null && u.tag === 13 && (u.flags |= 16384))), mv(a, l)) : sn(a);
  }
  function sn(l) {
    var a = l;
    do {
      if ((a.flags & 32768) !== 0) {
        mv(
          a,
          wa
        );
        return;
      }
      l = a.return;
      var t = Xy(
        a.alternate,
        a,
        Ha
      );
      if (t !== null) {
        q = t;
        return;
      }
      if (a = a.sibling, a !== null) {
        q = a;
        return;
      }
      q = a = l;
    } while (a !== null);
    P === 0 && (P = 5);
  }
  function mv(l, a) {
    do {
      var t = Cy(l.alternate, l);
      if (t !== null) {
        t.flags &= 32767, q = t;
        return;
      }
      if (t = l.return, t !== null && (t.flags |= 32768, t.subtreeFlags = 0, t.deletions = null), !a && (l = l.sibling, l !== null)) {
        q = l;
        return;
      }
      q = l = t;
    } while (l !== null);
    P = 6, q = null;
  }
  function vv(l, a, t, u, e, n, f, c, i) {
    l.cancelPendingCommit = null;
    do
      bn();
    while (cl !== 0);
    if ((p & 6) !== 0) throw Error(s(327));
    if (a !== null) {
      if (a === l.current) throw Error(s(177));
      if (n = a.lanes | a.childLanes, n |= sf, T1(
        l,
        t,
        n,
        f,
        c,
        i
      ), l === J && (q = J = null, Q = 0), iu = a, Fa = l, Na = t, Dc = n, Oc = e, Pm = u, (a.subtreeFlags & 10256) !== 0 || (a.flags & 10256) !== 0 ? (l.callbackNode = null, l.callbackPriority = 0, wy(ze, function() {
        return gv(), null;
      })) : (l.callbackNode = null, l.callbackPriority = 0), u = (a.flags & 13878) !== 0, (a.subtreeFlags & 13878) !== 0 || u) {
        u = z.T, z.T = null, e = A.p, A.p = 2, f = p, p |= 4;
        try {
          Gy(l, a, t);
        } finally {
          p = f, A.p = e, z.T = u;
        }
      }
      cl = 1, yv(), hv(), dv();
    }
  }
  function yv() {
    if (cl === 1) {
      cl = 0;
      var l = Fa, a = iu, t = (a.flags & 13878) !== 0;
      if ((a.subtreeFlags & 13878) !== 0 || t) {
        t = z.T, z.T = null;
        var u = A.p;
        A.p = 2;
        var e = p;
        p |= 4;
        try {
          Jm(a, l);
          var n = jc, f = ki(l.containerInfo), c = n.focusedElem, i = n.selectionRange;
          if (f !== c && c && c.ownerDocument && Fi(
            c.ownerDocument.documentElement,
            c
          )) {
            if (i !== null && yf(c)) {
              var h = i.start, g = i.end;
              if (g === void 0 && (g = h), "selectionStart" in c)
                c.selectionStart = h, c.selectionEnd = Math.min(
                  g,
                  c.value.length
                );
              else {
                var o = c.ownerDocument || document, d = o && o.defaultView || window;
                if (d.getSelection) {
                  var S = d.getSelection(), T = c.textContent.length, U = Math.min(i.start, T), L = i.end === void 0 ? U : Math.min(i.end, T);
                  !S.extend && U > L && (f = L, L = U, U = f);
                  var v = $i(
                    c,
                    U
                  ), m = $i(
                    c,
                    L
                  );
                  if (v && m && (S.rangeCount !== 1 || S.anchorNode !== v.node || S.anchorOffset !== v.offset || S.focusNode !== m.node || S.focusOffset !== m.offset)) {
                    var y = o.createRange();
                    y.setStart(v.node, v.offset), S.removeAllRanges(), U > L ? (S.addRange(y), S.extend(m.node, m.offset)) : (y.setEnd(m.node, m.offset), S.addRange(y));
                  }
                }
              }
            }
            for (o = [], S = c; S = S.parentNode; )
              S.nodeType === 1 && o.push({
                element: S,
                left: S.scrollLeft,
                top: S.scrollTop
              });
            for (typeof c.focus == "function" && c.focus(), c = 0; c < o.length; c++) {
              var b = o[c];
              b.element.scrollLeft = b.left, b.element.scrollTop = b.top;
            }
          }
          Nn = !!Rc, jc = Rc = null;
        } finally {
          p = e, A.p = u, z.T = t;
        }
      }
      l.current = a, cl = 2;
    }
  }
  function hv() {
    if (cl === 2) {
      cl = 0;
      var l = Fa, a = iu, t = (a.flags & 8772) !== 0;
      if ((a.subtreeFlags & 8772) !== 0 || t) {
        t = z.T, z.T = null;
        var u = A.p;
        A.p = 2;
        var e = p;
        p |= 4;
        try {
          jm(l, a.alternate, a);
        } finally {
          p = e, A.p = u, z.T = t;
        }
      }
      cl = 3;
    }
  }
  function dv() {
    if (cl === 4 || cl === 3) {
      cl = 0, d1();
      var l = Fa, a = iu, t = Na, u = Pm;
      (a.subtreeFlags & 10256) !== 0 || (a.flags & 10256) !== 0 ? cl = 5 : (cl = 0, iu = Fa = null, Sv(l, l.pendingLanes));
      var e = l.pendingLanes;
      if (e === 0 && ($a = null), Jn(t), a = a.stateNode, Bl && typeof Bl.onCommitFiberRoot == "function")
        try {
          Bl.onCommitFiberRoot(
            zu,
            a,
            void 0,
            (a.current.flags & 128) === 128
          );
        } catch {
        }
      if (u !== null) {
        a = z.T, e = A.p, A.p = 2, z.T = null;
        try {
          for (var n = l.onRecoverableError, f = 0; f < u.length; f++) {
            var c = u[f];
            n(c.value, {
              componentStack: c.stack
            });
          }
        } finally {
          z.T = a, A.p = e;
        }
      }
      (Na & 3) !== 0 && bn(), va(l), e = l.pendingLanes, (t & 261930) !== 0 && (e & 42) !== 0 ? l === Uc ? Pu++ : (Pu = 0, Uc = l) : Pu = 0, le(0);
    }
  }
  function Sv(l, a) {
    (l.pooledCacheLanes &= a) === 0 && (a = l.pooledCache, a != null && (l.pooledCache = null, Xu(a)));
  }
  function bn() {
    return yv(), hv(), dv(), gv();
  }
  function gv() {
    if (cl !== 5) return !1;
    var l = Fa, a = Dc;
    Dc = 0;
    var t = Jn(Na), u = z.T, e = A.p;
    try {
      A.p = 32 > t ? 32 : t, z.T = null, t = Oc, Oc = null;
      var n = Fa, f = Na;
      if (cl = 0, iu = Fa = null, Na = 0, (p & 6) !== 0) throw Error(s(331));
      var c = p;
      if (p |= 4, Fm(n.current), wm(
        n,
        n.current,
        f,
        t
      ), p = c, le(0, !1), Bl && typeof Bl.onPostCommitFiberRoot == "function")
        try {
          Bl.onPostCommitFiberRoot(zu, n);
        } catch {
        }
      return !0;
    } finally {
      A.p = e, z.T = u, Sv(l, a);
    }
  }
  function sv(l, a, t) {
    a = wl(t, a), a = ec(l.stateNode, a, 2), l = Ka(l, a, 2), l !== null && (Eu(l, 2), va(l));
  }
  function V(l, a, t) {
    if (l.tag === 3)
      sv(l, l, t);
    else
      for (; a !== null; ) {
        if (a.tag === 3) {
          sv(
            a,
            l,
            t
          );
          break;
        } else if (a.tag === 1) {
          var u = a.stateNode;
          if (typeof a.type.getDerivedStateFromError == "function" || typeof u.componentDidCatch == "function" && ($a === null || !$a.has(u))) {
            l = wl(t, l), t = bm(2), u = Ka(a, t, 2), u !== null && (zm(
              t,
              u,
              a,
              l
            ), Eu(u, 2), va(u));
            break;
          }
        }
        a = a.return;
      }
  }
  function Nc(l, a, t) {
    var u = l.pingCache;
    if (u === null) {
      u = l.pingCache = new Ry();
      var e = /* @__PURE__ */ new Set();
      u.set(a, e);
    } else
      e = u.get(a), e === void 0 && (e = /* @__PURE__ */ new Set(), u.set(a, e));
    e.has(t) || (Ac = !0, e.add(t), l = Ly.bind(null, l, a, t), a.then(l, l));
  }
  function Ly(l, a, t) {
    var u = l.pingCache;
    u !== null && u.delete(a), l.pingedLanes |= l.suspendedLanes & t, l.warmLanes &= ~t, J === l && (Q & t) === t && (P === 4 || P === 3 && (Q & 62914560) === Q && 300 > Nl() - yn ? (p & 2) === 0 && mu(l, 0) : Tc |= t, cu === Q && (cu = 0)), va(l);
  }
  function bv(l, a) {
    a === 0 && (a = yi()), l = dt(l, a), l !== null && (Eu(l, a), va(l));
  }
  function Jy(l) {
    var a = l.memoizedState, t = 0;
    a !== null && (t = a.retryLane), bv(l, t);
  }
  function Wy(l, a) {
    var t = 0;
    switch (l.tag) {
      case 31:
      case 13:
        var u = l.stateNode, e = l.memoizedState;
        e !== null && (t = e.retryLane);
        break;
      case 19:
        u = l.stateNode;
        break;
      case 22:
        u = l.stateNode._retryCache;
        break;
      default:
        throw Error(s(314));
    }
    u !== null && u.delete(a), bv(l, t);
  }
  function wy(l, a) {
    return Vn(l, a);
  }
  var zn = null, yu = null, Bc = !1, on = !1, qc = !1, Ia = 0;
  function va(l) {
    l !== yu && l.next === null && (yu === null ? zn = yu = l : yu = yu.next = l), on = !0, Bc || (Bc = !0, $y());
  }
  function le(l, a) {
    if (!qc && on) {
      qc = !0;
      do
        for (var t = !1, u = zn; u !== null; ) {
          if (l !== 0) {
            var e = u.pendingLanes;
            if (e === 0) var n = 0;
            else {
              var f = u.suspendedLanes, c = u.pingedLanes;
              n = (1 << 31 - ql(42 | l) + 1) - 1, n &= e & ~(f & ~c), n = n & 201326741 ? n & 201326741 | 1 : n ? n | 2 : 0;
            }
            n !== 0 && (t = !0, Av(u, n));
          } else
            n = Q, n = Te(
              u,
              u === J ? n : 0,
              u.cancelPendingCommit !== null || u.timeoutHandle !== -1
            ), (n & 3) === 0 || ou(u, n) || (t = !0, Av(u, n));
          u = u.next;
        }
      while (t);
      qc = !1;
    }
  }
  function ry() {
    zv();
  }
  function zv() {
    on = Bc = !1;
    var l = 0;
    Ia !== 0 && nh() && (l = Ia);
    for (var a = Nl(), t = null, u = zn; u !== null; ) {
      var e = u.next, n = ov(u, a);
      n === 0 ? (u.next = null, t === null ? zn = e : t.next = e, e === null && (yu = t)) : (t = u, (l !== 0 || (n & 3) !== 0) && (on = !0)), u = e;
    }
    cl !== 0 && cl !== 5 || le(l), Ia !== 0 && (Ia = 0);
  }
  function ov(l, a) {
    for (var t = l.suspendedLanes, u = l.pingedLanes, e = l.expirationTimes, n = l.pendingLanes & -62914561; 0 < n; ) {
      var f = 31 - ql(n), c = 1 << f, i = e[f];
      i === -1 ? ((c & t) === 0 || (c & u) !== 0) && (e[f] = A1(c, a)) : i <= a && (l.expiredLanes |= c), n &= ~c;
    }
    if (a = J, t = Q, t = Te(
      l,
      l === a ? t : 0,
      l.cancelPendingCommit !== null || l.timeoutHandle !== -1
    ), u = l.callbackNode, t === 0 || l === a && (j === 2 || j === 9) || l.cancelPendingCommit !== null)
      return u !== null && u !== null && xn(u), l.callbackNode = null, l.callbackPriority = 0;
    if ((t & 3) === 0 || ou(l, t)) {
      if (a = t & -t, a === l.callbackPriority) return a;
      switch (u !== null && xn(u), Jn(t)) {
        case 2:
        case 8:
          t = mi;
          break;
        case 32:
          t = ze;
          break;
        case 268435456:
          t = vi;
          break;
        default:
          t = ze;
      }
      return u = Ev.bind(null, l), t = Vn(t, u), l.callbackPriority = a, l.callbackNode = t, a;
    }
    return u !== null && u !== null && xn(u), l.callbackPriority = 2, l.callbackNode = null, 2;
  }
  function Ev(l, a) {
    if (cl !== 0 && cl !== 5)
      return l.callbackNode = null, l.callbackPriority = 0, null;
    var t = l.callbackNode;
    if (bn() && l.callbackNode !== t)
      return null;
    var u = Q;
    return u = Te(
      l,
      l === J ? u : 0,
      l.cancelPendingCommit !== null || l.timeoutHandle !== -1
    ), u === 0 ? null : (av(l, u, a), ov(l, Nl()), l.callbackNode != null && l.callbackNode === t ? Ev.bind(null, l) : null);
  }
  function Av(l, a) {
    if (bn()) return null;
    av(l, a, !0);
  }
  function $y() {
    ch(function() {
      (p & 6) !== 0 ? Vn(
        ii,
        ry
      ) : zv();
    });
  }
  function Yc() {
    if (Ia === 0) {
      var l = Ft;
      l === 0 && (l = oe, oe <<= 1, (oe & 261888) === 0 && (oe = 256)), Ia = l;
    }
    return Ia;
  }
  function Tv(l) {
    return l == null || typeof l == "symbol" || typeof l == "boolean" ? null : typeof l == "function" ? l : Ue("" + l);
  }
  function Mv(l, a) {
    var t = a.ownerDocument.createElement("input");
    return t.name = a.name, t.value = a.value, l.id && t.setAttribute("form", l.id), a.parentNode.insertBefore(t, a), l = new FormData(l), t.parentNode.removeChild(t), l;
  }
  function Fy(l, a, t, u, e) {
    if (a === "submit" && t && t.stateNode === e) {
      var n = Tv(
        (e[Tl] || null).action
      ), f = u.submitter;
      f && (a = (a = f[Tl] || null) ? Tv(a.formAction) : f.getAttribute("formAction"), a !== null && (n = a, f = null));
      var c = new Be(
        "action",
        "action",
        null,
        u,
        e
      );
      l.push({
        event: c,
        listeners: [
          {
            instance: null,
            listener: function() {
              if (u.defaultPrevented) {
                if (Ia !== 0) {
                  var i = f ? Mv(e, f) : new FormData(e);
                  If(
                    t,
                    {
                      pending: !0,
                      data: i,
                      method: e.method,
                      action: n
                    },
                    null,
                    i
                  );
                }
              } else
                typeof n == "function" && (c.preventDefault(), i = f ? Mv(e, f) : new FormData(e), If(
                  t,
                  {
                    pending: !0,
                    data: i,
                    method: e.method,
                    action: n
                  },
                  n,
                  i
                ));
            },
            currentTarget: e
          }
        ]
      });
    }
  }
  for (var Qc = 0; Qc < gf.length; Qc++) {
    var Xc = gf[Qc], ky = Xc.toLowerCase(), Iy = Xc[0].toUpperCase() + Xc.slice(1);
    ta(
      ky,
      "on" + Iy
    );
  }
  ta(l0, "onAnimationEnd"), ta(a0, "onAnimationIteration"), ta(t0, "onAnimationStart"), ta("dblclick", "onDoubleClick"), ta("focusin", "onFocus"), ta("focusout", "onBlur"), ta(Sy, "onTransitionRun"), ta(gy, "onTransitionStart"), ta(sy, "onTransitionCancel"), ta(u0, "onTransitionEnd"), Gt("onMouseEnter", ["mouseout", "mouseover"]), Gt("onMouseLeave", ["mouseout", "mouseover"]), Gt("onPointerEnter", ["pointerout", "pointerover"]), Gt("onPointerLeave", ["pointerout", "pointerover"]), mt(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), mt(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), mt("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), mt(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), mt(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), mt(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var ae = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), Py = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ae)
  );
  function Dv(l, a) {
    a = (a & 4) !== 0;
    for (var t = 0; t < l.length; t++) {
      var u = l[t], e = u.event;
      u = u.listeners;
      l: {
        var n = void 0;
        if (a)
          for (var f = u.length - 1; 0 <= f; f--) {
            var c = u[f], i = c.instance, h = c.currentTarget;
            if (c = c.listener, i !== n && e.isPropagationStopped())
              break l;
            n = c, e.currentTarget = h;
            try {
              n(e);
            } catch (g) {
              Qe(g);
            }
            e.currentTarget = null, n = i;
          }
        else
          for (f = 0; f < u.length; f++) {
            if (c = u[f], i = c.instance, h = c.currentTarget, c = c.listener, i !== n && e.isPropagationStopped())
              break l;
            n = c, e.currentTarget = h;
            try {
              n(e);
            } catch (g) {
              Qe(g);
            }
            e.currentTarget = null, n = i;
          }
      }
    }
  }
  function Y(l, a) {
    var t = a[Wn];
    t === void 0 && (t = a[Wn] = /* @__PURE__ */ new Set());
    var u = l + "__bubble";
    t.has(u) || (Ov(a, l, 2, !1), t.add(u));
  }
  function Cc(l, a, t) {
    var u = 0;
    a && (u |= 4), Ov(
      t,
      l,
      u,
      a
    );
  }
  var En = "_reactListening" + Math.random().toString(36).slice(2);
  function Gc(l) {
    if (!l[En]) {
      l[En] = !0, zi.forEach(function(t) {
        t !== "selectionchange" && (Py.has(t) || Cc(t, !1, l), Cc(t, !0, l));
      });
      var a = l.nodeType === 9 ? l : l.ownerDocument;
      a === null || a[En] || (a[En] = !0, Cc("selectionchange", !1, a));
    }
  }
  function Ov(l, a, t, u) {
    switch (l1(a)) {
      case 2:
        var e = _h;
        break;
      case 8:
        e = Hh;
        break;
      default:
        e = kc;
    }
    t = e.bind(
      null,
      a,
      t,
      l
    ), e = void 0, !af || a !== "touchstart" && a !== "touchmove" && a !== "wheel" || (e = !0), u ? e !== void 0 ? l.addEventListener(a, t, {
      capture: !0,
      passive: e
    }) : l.addEventListener(a, t, !0) : e !== void 0 ? l.addEventListener(a, t, {
      passive: e
    }) : l.addEventListener(a, t, !1);
  }
  function Zc(l, a, t, u, e) {
    var n = u;
    if ((a & 1) === 0 && (a & 2) === 0 && u !== null)
      l: for (; ; ) {
        if (u === null) return;
        var f = u.tag;
        if (f === 3 || f === 4) {
          var c = u.stateNode.containerInfo;
          if (c === e) break;
          if (f === 4)
            for (f = u.return; f !== null; ) {
              var i = f.tag;
              if ((i === 3 || i === 4) && f.stateNode.containerInfo === e)
                return;
              f = f.return;
            }
          for (; c !== null; ) {
            if (f = Qt(c), f === null) return;
            if (i = f.tag, i === 5 || i === 6 || i === 26 || i === 27) {
              u = n = f;
              continue l;
            }
            c = c.parentNode;
          }
        }
        u = u.return;
      }
    Bi(function() {
      var h = n, g = Pn(t), o = [];
      l: {
        var d = e0.get(l);
        if (d !== void 0) {
          var S = Be, T = l;
          switch (l) {
            case "keypress":
              if (He(t) === 0) break l;
            case "keydown":
            case "keyup":
              S = W1;
              break;
            case "focusin":
              T = "focus", S = nf;
              break;
            case "focusout":
              T = "blur", S = nf;
              break;
            case "beforeblur":
            case "afterblur":
              S = nf;
              break;
            case "click":
              if (t.button === 2) break l;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              S = Qi;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              S = X1;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              S = $1;
              break;
            case l0:
            case a0:
            case t0:
              S = Z1;
              break;
            case u0:
              S = k1;
              break;
            case "scroll":
            case "scrollend":
              S = Y1;
              break;
            case "wheel":
              S = P1;
              break;
            case "copy":
            case "cut":
            case "paste":
              S = R1;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              S = Ci;
              break;
            case "toggle":
            case "beforetoggle":
              S = ay;
          }
          var U = (a & 4) !== 0, L = !U && (l === "scroll" || l === "scrollend"), v = U ? d !== null ? d + "Capture" : null : d;
          U = [];
          for (var m = h, y; m !== null; ) {
            var b = m;
            if (y = b.stateNode, b = b.tag, b !== 5 && b !== 26 && b !== 27 || y === null || v === null || (b = Mu(m, v), b != null && U.push(
              te(m, b, y)
            )), L) break;
            m = m.return;
          }
          0 < U.length && (d = new S(
            d,
            T,
            null,
            t,
            g
          ), o.push({ event: d, listeners: U }));
        }
      }
      if ((a & 7) === 0) {
        l: {
          if (d = l === "mouseover" || l === "pointerover", S = l === "mouseout" || l === "pointerout", d && t !== In && (T = t.relatedTarget || t.fromElement) && (Qt(T) || T[Yt]))
            break l;
          if ((S || d) && (d = g.window === g ? g : (d = g.ownerDocument) ? d.defaultView || d.parentWindow : window, S ? (T = t.relatedTarget || t.toElement, S = h, T = T ? Qt(T) : null, T !== null && (L = bl(T), U = T.tag, T !== L || U !== 5 && U !== 27 && U !== 6) && (T = null)) : (S = null, T = h), S !== T)) {
            if (U = Qi, b = "onMouseLeave", v = "onMouseEnter", m = "mouse", (l === "pointerout" || l === "pointerover") && (U = Ci, b = "onPointerLeave", v = "onPointerEnter", m = "pointer"), L = S == null ? d : Tu(S), y = T == null ? d : Tu(T), d = new U(
              b,
              m + "leave",
              S,
              t,
              g
            ), d.target = L, d.relatedTarget = y, b = null, Qt(g) === h && (U = new U(
              v,
              m + "enter",
              T,
              t,
              g
            ), U.target = y, U.relatedTarget = L, b = U), L = b, S && T)
              a: {
                for (U = lh, v = S, m = T, y = 0, b = v; b; b = U(b))
                  y++;
                b = 0;
                for (var O = m; O; O = U(O))
                  b++;
                for (; 0 < y - b; )
                  v = U(v), y--;
                for (; 0 < b - y; )
                  m = U(m), b--;
                for (; y--; ) {
                  if (v === m || m !== null && v === m.alternate) {
                    U = v;
                    break a;
                  }
                  v = U(v), m = U(m);
                }
                U = null;
              }
            else U = null;
            S !== null && Uv(
              o,
              d,
              S,
              U,
              !1
            ), T !== null && L !== null && Uv(
              o,
              L,
              T,
              U,
              !0
            );
          }
        }
        l: {
          if (d = h ? Tu(h) : window, S = d.nodeName && d.nodeName.toLowerCase(), S === "select" || S === "input" && d.type === "file")
            var G = Ki;
          else if (Vi(d))
            if (Li)
              G = yy;
            else {
              G = my;
              var D = iy;
            }
          else
            S = d.nodeName, !S || S.toLowerCase() !== "input" || d.type !== "checkbox" && d.type !== "radio" ? h && kn(h.elementType) && (G = Ki) : G = vy;
          if (G && (G = G(l, h))) {
            xi(
              o,
              G,
              t,
              g
            );
            break l;
          }
          D && D(l, d, h), l === "focusout" && h && d.type === "number" && h.memoizedProps.value != null && Fn(d, "number", d.value);
        }
        switch (D = h ? Tu(h) : window, l) {
          case "focusin":
            (Vi(D) || D.contentEditable === "true") && (xt = D, hf = h, qu = null);
            break;
          case "focusout":
            qu = hf = xt = null;
            break;
          case "mousedown":
            df = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            df = !1, Ii(o, t, g);
            break;
          case "selectionchange":
            if (dy) break;
          case "keydown":
          case "keyup":
            Ii(o, t, g);
        }
        var N;
        if (cf)
          l: {
            switch (l) {
              case "compositionstart":
                var X = "onCompositionStart";
                break l;
              case "compositionend":
                X = "onCompositionEnd";
                break l;
              case "compositionupdate":
                X = "onCompositionUpdate";
                break l;
            }
            X = void 0;
          }
        else
          Vt ? Ri(l, t) && (X = "onCompositionEnd") : l === "keydown" && t.keyCode === 229 && (X = "onCompositionStart");
        X && (Gi && t.locale !== "ko" && (Vt || X !== "onCompositionStart" ? X === "onCompositionEnd" && Vt && (N = qi()) : (Ga = g, tf = "value" in Ga ? Ga.value : Ga.textContent, Vt = !0)), D = An(h, X), 0 < D.length && (X = new Xi(
          X,
          l,
          null,
          t,
          g
        ), o.push({ event: X, listeners: D }), N ? X.data = N : (N = ji(t), N !== null && (X.data = N)))), (N = uy ? ey(l, t) : ny(l, t)) && (X = An(h, "onBeforeInput"), 0 < X.length && (D = new Xi(
          "onBeforeInput",
          "beforeinput",
          null,
          t,
          g
        ), o.push({
          event: D,
          listeners: X
        }), D.data = N)), Fy(
          o,
          l,
          h,
          t,
          g
        );
      }
      Dv(o, a);
    });
  }
  function te(l, a, t) {
    return {
      instance: l,
      listener: a,
      currentTarget: t
    };
  }
  function An(l, a) {
    for (var t = a + "Capture", u = []; l !== null; ) {
      var e = l, n = e.stateNode;
      if (e = e.tag, e !== 5 && e !== 26 && e !== 27 || n === null || (e = Mu(l, t), e != null && u.unshift(
        te(l, e, n)
      ), e = Mu(l, a), e != null && u.push(
        te(l, e, n)
      )), l.tag === 3) return u;
      l = l.return;
    }
    return [];
  }
  function lh(l) {
    if (l === null) return null;
    do
      l = l.return;
    while (l && l.tag !== 5 && l.tag !== 27);
    return l || null;
  }
  function Uv(l, a, t, u, e) {
    for (var n = a._reactName, f = []; t !== null && t !== u; ) {
      var c = t, i = c.alternate, h = c.stateNode;
      if (c = c.tag, i !== null && i === u) break;
      c !== 5 && c !== 26 && c !== 27 || h === null || (i = h, e ? (h = Mu(t, n), h != null && f.unshift(
        te(t, h, i)
      )) : e || (h = Mu(t, n), h != null && f.push(
        te(t, h, i)
      ))), t = t.return;
    }
    f.length !== 0 && l.push({ event: a, listeners: f });
  }
  var ah = /\r\n?/g, th = /\u0000|\uFFFD/g;
  function _v(l) {
    return (typeof l == "string" ? l : "" + l).replace(ah, `
`).replace(th, "");
  }
  function Hv(l, a) {
    return a = _v(a), _v(l) === a;
  }
  function K(l, a, t, u, e, n) {
    switch (t) {
      case "children":
        typeof u == "string" ? a === "body" || a === "textarea" && u === "" || pt(l, u) : (typeof u == "number" || typeof u == "bigint") && a !== "body" && pt(l, "" + u);
        break;
      case "className":
        De(l, "class", u);
        break;
      case "tabIndex":
        De(l, "tabindex", u);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        De(l, t, u);
        break;
      case "style":
        Hi(l, u, n);
        break;
      case "data":
        if (a !== "object") {
          De(l, "data", u);
          break;
        }
      case "src":
      case "href":
        if (u === "" && (a !== "a" || t !== "href")) {
          l.removeAttribute(t);
          break;
        }
        if (u == null || typeof u == "function" || typeof u == "symbol" || typeof u == "boolean") {
          l.removeAttribute(t);
          break;
        }
        u = Ue("" + u), l.setAttribute(t, u);
        break;
      case "action":
      case "formAction":
        if (typeof u == "function") {
          l.setAttribute(
            t,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof n == "function" && (t === "formAction" ? (a !== "input" && K(l, a, "name", e.name, e, null), K(
            l,
            a,
            "formEncType",
            e.formEncType,
            e,
            null
          ), K(
            l,
            a,
            "formMethod",
            e.formMethod,
            e,
            null
          ), K(
            l,
            a,
            "formTarget",
            e.formTarget,
            e,
            null
          )) : (K(l, a, "encType", e.encType, e, null), K(l, a, "method", e.method, e, null), K(l, a, "target", e.target, e, null)));
        if (u == null || typeof u == "symbol" || typeof u == "boolean") {
          l.removeAttribute(t);
          break;
        }
        u = Ue("" + u), l.setAttribute(t, u);
        break;
      case "onClick":
        u != null && (l.onclick = Sa);
        break;
      case "onScroll":
        u != null && Y("scroll", l);
        break;
      case "onScrollEnd":
        u != null && Y("scrollend", l);
        break;
      case "dangerouslySetInnerHTML":
        if (u != null) {
          if (typeof u != "object" || !("__html" in u))
            throw Error(s(61));
          if (t = u.__html, t != null) {
            if (e.children != null) throw Error(s(60));
            l.innerHTML = t;
          }
        }
        break;
      case "multiple":
        l.multiple = u && typeof u != "function" && typeof u != "symbol";
        break;
      case "muted":
        l.muted = u && typeof u != "function" && typeof u != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (u == null || typeof u == "function" || typeof u == "boolean" || typeof u == "symbol") {
          l.removeAttribute("xlink:href");
          break;
        }
        t = Ue("" + u), l.setAttributeNS(
          "http://www.w3.org/1999/xlink",
          "xlink:href",
          t
        );
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        u != null && typeof u != "function" && typeof u != "symbol" ? l.setAttribute(t, "" + u) : l.removeAttribute(t);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        u && typeof u != "function" && typeof u != "symbol" ? l.setAttribute(t, "") : l.removeAttribute(t);
        break;
      case "capture":
      case "download":
        u === !0 ? l.setAttribute(t, "") : u !== !1 && u != null && typeof u != "function" && typeof u != "symbol" ? l.setAttribute(t, u) : l.removeAttribute(t);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        u != null && typeof u != "function" && typeof u != "symbol" && !isNaN(u) && 1 <= u ? l.setAttribute(t, u) : l.removeAttribute(t);
        break;
      case "rowSpan":
      case "start":
        u == null || typeof u == "function" || typeof u == "symbol" || isNaN(u) ? l.removeAttribute(t) : l.setAttribute(t, u);
        break;
      case "popover":
        Y("beforetoggle", l), Y("toggle", l), Me(l, "popover", u);
        break;
      case "xlinkActuate":
        da(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          u
        );
        break;
      case "xlinkArcrole":
        da(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          u
        );
        break;
      case "xlinkRole":
        da(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          u
        );
        break;
      case "xlinkShow":
        da(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          u
        );
        break;
      case "xlinkTitle":
        da(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          u
        );
        break;
      case "xlinkType":
        da(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          u
        );
        break;
      case "xmlBase":
        da(
          l,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          u
        );
        break;
      case "xmlLang":
        da(
          l,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          u
        );
        break;
      case "xmlSpace":
        da(
          l,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          u
        );
        break;
      case "is":
        Me(l, "is", u);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (t = B1.get(t) || t, Me(l, t, u));
    }
  }
  function pc(l, a, t, u, e, n) {
    switch (t) {
      case "style":
        Hi(l, u, n);
        break;
      case "dangerouslySetInnerHTML":
        if (u != null) {
          if (typeof u != "object" || !("__html" in u))
            throw Error(s(61));
          if (t = u.__html, t != null) {
            if (e.children != null) throw Error(s(60));
            l.innerHTML = t;
          }
        }
        break;
      case "children":
        typeof u == "string" ? pt(l, u) : (typeof u == "number" || typeof u == "bigint") && pt(l, "" + u);
        break;
      case "onScroll":
        u != null && Y("scroll", l);
        break;
      case "onScrollEnd":
        u != null && Y("scrollend", l);
        break;
      case "onClick":
        u != null && (l.onclick = Sa);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!oi.hasOwnProperty(t))
          l: {
            if (t[0] === "o" && t[1] === "n" && (e = t.endsWith("Capture"), a = t.slice(2, e ? t.length - 7 : void 0), n = l[Tl] || null, n = n != null ? n[t] : null, typeof n == "function" && l.removeEventListener(a, n, e), typeof u == "function")) {
              typeof n != "function" && n !== null && (t in l ? l[t] = null : l.hasAttribute(t) && l.removeAttribute(t)), l.addEventListener(a, u, e);
              break l;
            }
            t in l ? l[t] = u : u === !0 ? l.setAttribute(t, "") : Me(l, t, u);
          }
    }
  }
  function sl(l, a, t) {
    switch (a) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        Y("error", l), Y("load", l);
        var u = !1, e = !1, n;
        for (n in t)
          if (t.hasOwnProperty(n)) {
            var f = t[n];
            if (f != null)
              switch (n) {
                case "src":
                  u = !0;
                  break;
                case "srcSet":
                  e = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(s(137, a));
                default:
                  K(l, a, n, f, t, null);
              }
          }
        e && K(l, a, "srcSet", t.srcSet, t, null), u && K(l, a, "src", t.src, t, null);
        return;
      case "input":
        Y("invalid", l);
        var c = n = f = e = null, i = null, h = null;
        for (u in t)
          if (t.hasOwnProperty(u)) {
            var g = t[u];
            if (g != null)
              switch (u) {
                case "name":
                  e = g;
                  break;
                case "type":
                  f = g;
                  break;
                case "checked":
                  i = g;
                  break;
                case "defaultChecked":
                  h = g;
                  break;
                case "value":
                  n = g;
                  break;
                case "defaultValue":
                  c = g;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (g != null)
                    throw Error(s(137, a));
                  break;
                default:
                  K(l, a, u, g, t, null);
              }
          }
        Di(
          l,
          n,
          c,
          i,
          h,
          f,
          e,
          !1
        );
        return;
      case "select":
        Y("invalid", l), u = f = n = null;
        for (e in t)
          if (t.hasOwnProperty(e) && (c = t[e], c != null))
            switch (e) {
              case "value":
                n = c;
                break;
              case "defaultValue":
                f = c;
                break;
              case "multiple":
                u = c;
              default:
                K(l, a, e, c, t, null);
            }
        a = n, t = f, l.multiple = !!u, a != null ? Zt(l, !!u, a, !1) : t != null && Zt(l, !!u, t, !0);
        return;
      case "textarea":
        Y("invalid", l), n = e = u = null;
        for (f in t)
          if (t.hasOwnProperty(f) && (c = t[f], c != null))
            switch (f) {
              case "value":
                u = c;
                break;
              case "defaultValue":
                e = c;
                break;
              case "children":
                n = c;
                break;
              case "dangerouslySetInnerHTML":
                if (c != null) throw Error(s(91));
                break;
              default:
                K(l, a, f, c, t, null);
            }
        Ui(l, u, e, n);
        return;
      case "option":
        for (i in t)
          if (t.hasOwnProperty(i) && (u = t[i], u != null))
            switch (i) {
              case "selected":
                l.selected = u && typeof u != "function" && typeof u != "symbol";
                break;
              default:
                K(l, a, i, u, t, null);
            }
        return;
      case "dialog":
        Y("beforetoggle", l), Y("toggle", l), Y("cancel", l), Y("close", l);
        break;
      case "iframe":
      case "object":
        Y("load", l);
        break;
      case "video":
      case "audio":
        for (u = 0; u < ae.length; u++)
          Y(ae[u], l);
        break;
      case "image":
        Y("error", l), Y("load", l);
        break;
      case "details":
        Y("toggle", l);
        break;
      case "embed":
      case "source":
      case "link":
        Y("error", l), Y("load", l);
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (h in t)
          if (t.hasOwnProperty(h) && (u = t[h], u != null))
            switch (h) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(s(137, a));
              default:
                K(l, a, h, u, t, null);
            }
        return;
      default:
        if (kn(a)) {
          for (g in t)
            t.hasOwnProperty(g) && (u = t[g], u !== void 0 && pc(
              l,
              a,
              g,
              u,
              t,
              void 0
            ));
          return;
        }
    }
    for (c in t)
      t.hasOwnProperty(c) && (u = t[c], u != null && K(l, a, c, u, t, null));
  }
  function uh(l, a, t, u) {
    switch (a) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var e = null, n = null, f = null, c = null, i = null, h = null, g = null;
        for (S in t) {
          var o = t[S];
          if (t.hasOwnProperty(S) && o != null)
            switch (S) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                i = o;
              default:
                u.hasOwnProperty(S) || K(l, a, S, null, u, o);
            }
        }
        for (var d in u) {
          var S = u[d];
          if (o = t[d], u.hasOwnProperty(d) && (S != null || o != null))
            switch (d) {
              case "type":
                n = S;
                break;
              case "name":
                e = S;
                break;
              case "checked":
                h = S;
                break;
              case "defaultChecked":
                g = S;
                break;
              case "value":
                f = S;
                break;
              case "defaultValue":
                c = S;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (S != null)
                  throw Error(s(137, a));
                break;
              default:
                S !== o && K(
                  l,
                  a,
                  d,
                  S,
                  u,
                  o
                );
            }
        }
        $n(
          l,
          f,
          c,
          i,
          h,
          g,
          n,
          e
        );
        return;
      case "select":
        S = f = c = d = null;
        for (n in t)
          if (i = t[n], t.hasOwnProperty(n) && i != null)
            switch (n) {
              case "value":
                break;
              case "multiple":
                S = i;
              default:
                u.hasOwnProperty(n) || K(
                  l,
                  a,
                  n,
                  null,
                  u,
                  i
                );
            }
        for (e in u)
          if (n = u[e], i = t[e], u.hasOwnProperty(e) && (n != null || i != null))
            switch (e) {
              case "value":
                d = n;
                break;
              case "defaultValue":
                c = n;
                break;
              case "multiple":
                f = n;
              default:
                n !== i && K(
                  l,
                  a,
                  e,
                  n,
                  u,
                  i
                );
            }
        a = c, t = f, u = S, d != null ? Zt(l, !!t, d, !1) : !!u != !!t && (a != null ? Zt(l, !!t, a, !0) : Zt(l, !!t, t ? [] : "", !1));
        return;
      case "textarea":
        S = d = null;
        for (c in t)
          if (e = t[c], t.hasOwnProperty(c) && e != null && !u.hasOwnProperty(c))
            switch (c) {
              case "value":
                break;
              case "children":
                break;
              default:
                K(l, a, c, null, u, e);
            }
        for (f in u)
          if (e = u[f], n = t[f], u.hasOwnProperty(f) && (e != null || n != null))
            switch (f) {
              case "value":
                d = e;
                break;
              case "defaultValue":
                S = e;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (e != null) throw Error(s(91));
                break;
              default:
                e !== n && K(l, a, f, e, u, n);
            }
        Oi(l, d, S);
        return;
      case "option":
        for (var T in t)
          if (d = t[T], t.hasOwnProperty(T) && d != null && !u.hasOwnProperty(T))
            switch (T) {
              case "selected":
                l.selected = !1;
                break;
              default:
                K(
                  l,
                  a,
                  T,
                  null,
                  u,
                  d
                );
            }
        for (i in u)
          if (d = u[i], S = t[i], u.hasOwnProperty(i) && d !== S && (d != null || S != null))
            switch (i) {
              case "selected":
                l.selected = d && typeof d != "function" && typeof d != "symbol";
                break;
              default:
                K(
                  l,
                  a,
                  i,
                  d,
                  u,
                  S
                );
            }
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var U in t)
          d = t[U], t.hasOwnProperty(U) && d != null && !u.hasOwnProperty(U) && K(l, a, U, null, u, d);
        for (h in u)
          if (d = u[h], S = t[h], u.hasOwnProperty(h) && d !== S && (d != null || S != null))
            switch (h) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (d != null)
                  throw Error(s(137, a));
                break;
              default:
                K(
                  l,
                  a,
                  h,
                  d,
                  u,
                  S
                );
            }
        return;
      default:
        if (kn(a)) {
          for (var L in t)
            d = t[L], t.hasOwnProperty(L) && d !== void 0 && !u.hasOwnProperty(L) && pc(
              l,
              a,
              L,
              void 0,
              u,
              d
            );
          for (g in u)
            d = u[g], S = t[g], !u.hasOwnProperty(g) || d === S || d === void 0 && S === void 0 || pc(
              l,
              a,
              g,
              d,
              u,
              S
            );
          return;
        }
    }
    for (var v in t)
      d = t[v], t.hasOwnProperty(v) && d != null && !u.hasOwnProperty(v) && K(l, a, v, null, u, d);
    for (o in u)
      d = u[o], S = t[o], !u.hasOwnProperty(o) || d === S || d == null && S == null || K(l, a, o, d, u, S);
  }
  function Nv(l) {
    switch (l) {
      case "css":
      case "script":
      case "font":
      case "img":
      case "image":
      case "input":
      case "link":
        return !0;
      default:
        return !1;
    }
  }
  function eh() {
    if (typeof performance.getEntriesByType == "function") {
      for (var l = 0, a = 0, t = performance.getEntriesByType("resource"), u = 0; u < t.length; u++) {
        var e = t[u], n = e.transferSize, f = e.initiatorType, c = e.duration;
        if (n && c && Nv(f)) {
          for (f = 0, c = e.responseEnd, u += 1; u < t.length; u++) {
            var i = t[u], h = i.startTime;
            if (h > c) break;
            var g = i.transferSize, o = i.initiatorType;
            g && Nv(o) && (i = i.responseEnd, f += g * (i < c ? 1 : (c - h) / (i - h)));
          }
          if (--u, a += 8 * (n + f) / (e.duration / 1e3), l++, 10 < l) break;
        }
      }
      if (0 < l) return a / l / 1e6;
    }
    return navigator.connection && (l = navigator.connection.downlink, typeof l == "number") ? l : 5;
  }
  var Rc = null, jc = null;
  function Tn(l) {
    return l.nodeType === 9 ? l : l.ownerDocument;
  }
  function Bv(l) {
    switch (l) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function qv(l, a) {
    if (l === 0)
      switch (a) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return l === 1 && a === "foreignObject" ? 0 : l;
  }
  function Vc(l, a) {
    return l === "textarea" || l === "noscript" || typeof a.children == "string" || typeof a.children == "number" || typeof a.children == "bigint" || typeof a.dangerouslySetInnerHTML == "object" && a.dangerouslySetInnerHTML !== null && a.dangerouslySetInnerHTML.__html != null;
  }
  var xc = null;
  function nh() {
    var l = window.event;
    return l && l.type === "popstate" ? l === xc ? !1 : (xc = l, !0) : (xc = null, !1);
  }
  var Yv = typeof setTimeout == "function" ? setTimeout : void 0, fh = typeof clearTimeout == "function" ? clearTimeout : void 0, Qv = typeof Promise == "function" ? Promise : void 0, ch = typeof queueMicrotask == "function" ? queueMicrotask : typeof Qv < "u" ? function(l) {
    return Qv.resolve(null).then(l).catch(ih);
  } : Yv;
  function ih(l) {
    setTimeout(function() {
      throw l;
    });
  }
  function Pa(l) {
    return l === "head";
  }
  function Xv(l, a) {
    var t = a, u = 0;
    do {
      var e = t.nextSibling;
      if (l.removeChild(t), e && e.nodeType === 8)
        if (t = e.data, t === "/$" || t === "/&") {
          if (u === 0) {
            l.removeChild(e), gu(a);
            return;
          }
          u--;
        } else if (t === "$" || t === "$?" || t === "$~" || t === "$!" || t === "&")
          u++;
        else if (t === "html")
          ue(l.ownerDocument.documentElement);
        else if (t === "head") {
          t = l.ownerDocument.head, ue(t);
          for (var n = t.firstChild; n; ) {
            var f = n.nextSibling, c = n.nodeName;
            n[Au] || c === "SCRIPT" || c === "STYLE" || c === "LINK" && n.rel.toLowerCase() === "stylesheet" || t.removeChild(n), n = f;
          }
        } else
          t === "body" && ue(l.ownerDocument.body);
      t = e;
    } while (t);
    gu(a);
  }
  function Cv(l, a) {
    var t = l;
    l = 0;
    do {
      var u = t.nextSibling;
      if (t.nodeType === 1 ? a ? (t._stashedDisplay = t.style.display, t.style.display = "none") : (t.style.display = t._stashedDisplay || "", t.getAttribute("style") === "" && t.removeAttribute("style")) : t.nodeType === 3 && (a ? (t._stashedText = t.nodeValue, t.nodeValue = "") : t.nodeValue = t._stashedText || ""), u && u.nodeType === 8)
        if (t = u.data, t === "/$") {
          if (l === 0) break;
          l--;
        } else
          t !== "$" && t !== "$?" && t !== "$~" && t !== "$!" || l++;
      t = u;
    } while (t);
  }
  function Kc(l) {
    var a = l.firstChild;
    for (a && a.nodeType === 10 && (a = a.nextSibling); a; ) {
      var t = a;
      switch (a = a.nextSibling, t.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          Kc(t), wn(t);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (t.rel.toLowerCase() === "stylesheet") continue;
      }
      l.removeChild(t);
    }
  }
  function mh(l, a, t, u) {
    for (; l.nodeType === 1; ) {
      var e = t;
      if (l.nodeName.toLowerCase() !== a.toLowerCase()) {
        if (!u && (l.nodeName !== "INPUT" || l.type !== "hidden"))
          break;
      } else if (u) {
        if (!l[Au])
          switch (a) {
            case "meta":
              if (!l.hasAttribute("itemprop")) break;
              return l;
            case "link":
              if (n = l.getAttribute("rel"), n === "stylesheet" && l.hasAttribute("data-precedence"))
                break;
              if (n !== e.rel || l.getAttribute("href") !== (e.href == null || e.href === "" ? null : e.href) || l.getAttribute("crossorigin") !== (e.crossOrigin == null ? null : e.crossOrigin) || l.getAttribute("title") !== (e.title == null ? null : e.title))
                break;
              return l;
            case "style":
              if (l.hasAttribute("data-precedence")) break;
              return l;
            case "script":
              if (n = l.getAttribute("src"), (n !== (e.src == null ? null : e.src) || l.getAttribute("type") !== (e.type == null ? null : e.type) || l.getAttribute("crossorigin") !== (e.crossOrigin == null ? null : e.crossOrigin)) && n && l.hasAttribute("async") && !l.hasAttribute("itemprop"))
                break;
              return l;
            default:
              return l;
          }
      } else if (a === "input" && l.type === "hidden") {
        var n = e.name == null ? null : "" + e.name;
        if (e.type === "hidden" && l.getAttribute("name") === n)
          return l;
      } else return l;
      if (l = Il(l.nextSibling), l === null) break;
    }
    return null;
  }
  function vh(l, a, t) {
    if (a === "") return null;
    for (; l.nodeType !== 3; )
      if ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") && !t || (l = Il(l.nextSibling), l === null)) return null;
    return l;
  }
  function Gv(l, a) {
    for (; l.nodeType !== 8; )
      if ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") && !a || (l = Il(l.nextSibling), l === null)) return null;
    return l;
  }
  function Lc(l) {
    return l.data === "$?" || l.data === "$~";
  }
  function Jc(l) {
    return l.data === "$!" || l.data === "$?" && l.ownerDocument.readyState !== "loading";
  }
  function yh(l, a) {
    var t = l.ownerDocument;
    if (l.data === "$~") l._reactRetry = a;
    else if (l.data !== "$?" || t.readyState !== "loading")
      a();
    else {
      var u = function() {
        a(), t.removeEventListener("DOMContentLoaded", u);
      };
      t.addEventListener("DOMContentLoaded", u), l._reactRetry = u;
    }
  }
  function Il(l) {
    for (; l != null; l = l.nextSibling) {
      var a = l.nodeType;
      if (a === 1 || a === 3) break;
      if (a === 8) {
        if (a = l.data, a === "$" || a === "$!" || a === "$?" || a === "$~" || a === "&" || a === "F!" || a === "F")
          break;
        if (a === "/$" || a === "/&") return null;
      }
    }
    return l;
  }
  var Wc = null;
  function Zv(l) {
    l = l.nextSibling;
    for (var a = 0; l; ) {
      if (l.nodeType === 8) {
        var t = l.data;
        if (t === "/$" || t === "/&") {
          if (a === 0)
            return Il(l.nextSibling);
          a--;
        } else
          t !== "$" && t !== "$!" && t !== "$?" && t !== "$~" && t !== "&" || a++;
      }
      l = l.nextSibling;
    }
    return null;
  }
  function pv(l) {
    l = l.previousSibling;
    for (var a = 0; l; ) {
      if (l.nodeType === 8) {
        var t = l.data;
        if (t === "$" || t === "$!" || t === "$?" || t === "$~" || t === "&") {
          if (a === 0) return l;
          a--;
        } else t !== "/$" && t !== "/&" || a++;
      }
      l = l.previousSibling;
    }
    return null;
  }
  function Rv(l, a, t) {
    switch (a = Tn(t), l) {
      case "html":
        if (l = a.documentElement, !l) throw Error(s(452));
        return l;
      case "head":
        if (l = a.head, !l) throw Error(s(453));
        return l;
      case "body":
        if (l = a.body, !l) throw Error(s(454));
        return l;
      default:
        throw Error(s(451));
    }
  }
  function ue(l) {
    for (var a = l.attributes; a.length; )
      l.removeAttributeNode(a[0]);
    wn(l);
  }
  var Pl = /* @__PURE__ */ new Map(), jv = /* @__PURE__ */ new Set();
  function Mn(l) {
    return typeof l.getRootNode == "function" ? l.getRootNode() : l.nodeType === 9 ? l : l.ownerDocument;
  }
  var Ba = A.d;
  A.d = {
    f: hh,
    r: dh,
    D: Sh,
    C: gh,
    L: sh,
    m: bh,
    X: oh,
    S: zh,
    M: Eh
  };
  function hh() {
    var l = Ba.f(), a = Sn();
    return l || a;
  }
  function dh(l) {
    var a = Xt(l);
    a !== null && a.tag === 5 && a.type === "form" ? um(a) : Ba.r(l);
  }
  var hu = typeof document > "u" ? null : document;
  function Vv(l, a, t) {
    var u = hu;
    if (u && typeof a == "string" && a) {
      var e = Jl(a);
      e = 'link[rel="' + l + '"][href="' + e + '"]', typeof t == "string" && (e += '[crossorigin="' + t + '"]'), jv.has(e) || (jv.add(e), l = { rel: l, crossOrigin: t, href: a }, u.querySelector(e) === null && (a = u.createElement("link"), sl(a, "link", l), vl(a), u.head.appendChild(a)));
    }
  }
  function Sh(l) {
    Ba.D(l), Vv("dns-prefetch", l, null);
  }
  function gh(l, a) {
    Ba.C(l, a), Vv("preconnect", l, a);
  }
  function sh(l, a, t) {
    Ba.L(l, a, t);
    var u = hu;
    if (u && l && a) {
      var e = 'link[rel="preload"][as="' + Jl(a) + '"]';
      a === "image" && t && t.imageSrcSet ? (e += '[imagesrcset="' + Jl(
        t.imageSrcSet
      ) + '"]', typeof t.imageSizes == "string" && (e += '[imagesizes="' + Jl(
        t.imageSizes
      ) + '"]')) : e += '[href="' + Jl(l) + '"]';
      var n = e;
      switch (a) {
        case "style":
          n = du(l);
          break;
        case "script":
          n = Su(l);
      }
      Pl.has(n) || (l = B(
        {
          rel: "preload",
          href: a === "image" && t && t.imageSrcSet ? void 0 : l,
          as: a
        },
        t
      ), Pl.set(n, l), u.querySelector(e) !== null || a === "style" && u.querySelector(ee(n)) || a === "script" && u.querySelector(ne(n)) || (a = u.createElement("link"), sl(a, "link", l), vl(a), u.head.appendChild(a)));
    }
  }
  function bh(l, a) {
    Ba.m(l, a);
    var t = hu;
    if (t && l) {
      var u = a && typeof a.as == "string" ? a.as : "script", e = 'link[rel="modulepreload"][as="' + Jl(u) + '"][href="' + Jl(l) + '"]', n = e;
      switch (u) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          n = Su(l);
      }
      if (!Pl.has(n) && (l = B({ rel: "modulepreload", href: l }, a), Pl.set(n, l), t.querySelector(e) === null)) {
        switch (u) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (t.querySelector(ne(n)))
              return;
        }
        u = t.createElement("link"), sl(u, "link", l), vl(u), t.head.appendChild(u);
      }
    }
  }
  function zh(l, a, t) {
    Ba.S(l, a, t);
    var u = hu;
    if (u && l) {
      var e = Ct(u).hoistableStyles, n = du(l);
      a = a || "default";
      var f = e.get(n);
      if (!f) {
        var c = { loading: 0, preload: null };
        if (f = u.querySelector(
          ee(n)
        ))
          c.loading = 5;
        else {
          l = B(
            { rel: "stylesheet", href: l, "data-precedence": a },
            t
          ), (t = Pl.get(n)) && wc(l, t);
          var i = f = u.createElement("link");
          vl(i), sl(i, "link", l), i._p = new Promise(function(h, g) {
            i.onload = h, i.onerror = g;
          }), i.addEventListener("load", function() {
            c.loading |= 1;
          }), i.addEventListener("error", function() {
            c.loading |= 2;
          }), c.loading |= 4, Dn(f, a, u);
        }
        f = {
          type: "stylesheet",
          instance: f,
          count: 1,
          state: c
        }, e.set(n, f);
      }
    }
  }
  function oh(l, a) {
    Ba.X(l, a);
    var t = hu;
    if (t && l) {
      var u = Ct(t).hoistableScripts, e = Su(l), n = u.get(e);
      n || (n = t.querySelector(ne(e)), n || (l = B({ src: l, async: !0 }, a), (a = Pl.get(e)) && rc(l, a), n = t.createElement("script"), vl(n), sl(n, "link", l), t.head.appendChild(n)), n = {
        type: "script",
        instance: n,
        count: 1,
        state: null
      }, u.set(e, n));
    }
  }
  function Eh(l, a) {
    Ba.M(l, a);
    var t = hu;
    if (t && l) {
      var u = Ct(t).hoistableScripts, e = Su(l), n = u.get(e);
      n || (n = t.querySelector(ne(e)), n || (l = B({ src: l, async: !0, type: "module" }, a), (a = Pl.get(e)) && rc(l, a), n = t.createElement("script"), vl(n), sl(n, "link", l), t.head.appendChild(n)), n = {
        type: "script",
        instance: n,
        count: 1,
        state: null
      }, u.set(e, n));
    }
  }
  function xv(l, a, t, u) {
    var e = (e = Qa.current) ? Mn(e) : null;
    if (!e) throw Error(s(446));
    switch (l) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof t.precedence == "string" && typeof t.href == "string" ? (a = du(t.href), t = Ct(
          e
        ).hoistableStyles, u = t.get(a), u || (u = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, t.set(a, u)), u) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (t.rel === "stylesheet" && typeof t.href == "string" && typeof t.precedence == "string") {
          l = du(t.href);
          var n = Ct(
            e
          ).hoistableStyles, f = n.get(l);
          if (f || (e = e.ownerDocument || e, f = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, n.set(l, f), (n = e.querySelector(
            ee(l)
          )) && !n._p && (f.instance = n, f.state.loading = 5), Pl.has(l) || (t = {
            rel: "preload",
            as: "style",
            href: t.href,
            crossOrigin: t.crossOrigin,
            integrity: t.integrity,
            media: t.media,
            hrefLang: t.hrefLang,
            referrerPolicy: t.referrerPolicy
          }, Pl.set(l, t), n || Ah(
            e,
            l,
            t,
            f.state
          ))), a && u === null)
            throw Error(s(528, ""));
          return f;
        }
        if (a && u !== null)
          throw Error(s(529, ""));
        return null;
      case "script":
        return a = t.async, t = t.src, typeof t == "string" && a && typeof a != "function" && typeof a != "symbol" ? (a = Su(t), t = Ct(
          e
        ).hoistableScripts, u = t.get(a), u || (u = {
          type: "script",
          instance: null,
          count: 0,
          state: null
        }, t.set(a, u)), u) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(s(444, l));
    }
  }
  function du(l) {
    return 'href="' + Jl(l) + '"';
  }
  function ee(l) {
    return 'link[rel="stylesheet"][' + l + "]";
  }
  function Kv(l) {
    return B({}, l, {
      "data-precedence": l.precedence,
      precedence: null
    });
  }
  function Ah(l, a, t, u) {
    l.querySelector('link[rel="preload"][as="style"][' + a + "]") ? u.loading = 1 : (a = l.createElement("link"), u.preload = a, a.addEventListener("load", function() {
      return u.loading |= 1;
    }), a.addEventListener("error", function() {
      return u.loading |= 2;
    }), sl(a, "link", t), vl(a), l.head.appendChild(a));
  }
  function Su(l) {
    return '[src="' + Jl(l) + '"]';
  }
  function ne(l) {
    return "script[async]" + l;
  }
  function Lv(l, a, t) {
    if (a.count++, a.instance === null)
      switch (a.type) {
        case "style":
          var u = l.querySelector(
            'style[data-href~="' + Jl(t.href) + '"]'
          );
          if (u)
            return a.instance = u, vl(u), u;
          var e = B({}, t, {
            "data-href": t.href,
            "data-precedence": t.precedence,
            href: null,
            precedence: null
          });
          return u = (l.ownerDocument || l).createElement(
            "style"
          ), vl(u), sl(u, "style", e), Dn(u, t.precedence, l), a.instance = u;
        case "stylesheet":
          e = du(t.href);
          var n = l.querySelector(
            ee(e)
          );
          if (n)
            return a.state.loading |= 4, a.instance = n, vl(n), n;
          u = Kv(t), (e = Pl.get(e)) && wc(u, e), n = (l.ownerDocument || l).createElement("link"), vl(n);
          var f = n;
          return f._p = new Promise(function(c, i) {
            f.onload = c, f.onerror = i;
          }), sl(n, "link", u), a.state.loading |= 4, Dn(n, t.precedence, l), a.instance = n;
        case "script":
          return n = Su(t.src), (e = l.querySelector(
            ne(n)
          )) ? (a.instance = e, vl(e), e) : (u = t, (e = Pl.get(n)) && (u = B({}, t), rc(u, e)), l = l.ownerDocument || l, e = l.createElement("script"), vl(e), sl(e, "link", u), l.head.appendChild(e), a.instance = e);
        case "void":
          return null;
        default:
          throw Error(s(443, a.type));
      }
    else
      a.type === "stylesheet" && (a.state.loading & 4) === 0 && (u = a.instance, a.state.loading |= 4, Dn(u, t.precedence, l));
    return a.instance;
  }
  function Dn(l, a, t) {
    for (var u = t.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), e = u.length ? u[u.length - 1] : null, n = e, f = 0; f < u.length; f++) {
      var c = u[f];
      if (c.dataset.precedence === a) n = c;
      else if (n !== e) break;
    }
    n ? n.parentNode.insertBefore(l, n.nextSibling) : (a = t.nodeType === 9 ? t.head : t, a.insertBefore(l, a.firstChild));
  }
  function wc(l, a) {
    l.crossOrigin == null && (l.crossOrigin = a.crossOrigin), l.referrerPolicy == null && (l.referrerPolicy = a.referrerPolicy), l.title == null && (l.title = a.title);
  }
  function rc(l, a) {
    l.crossOrigin == null && (l.crossOrigin = a.crossOrigin), l.referrerPolicy == null && (l.referrerPolicy = a.referrerPolicy), l.integrity == null && (l.integrity = a.integrity);
  }
  var On = null;
  function Jv(l, a, t) {
    if (On === null) {
      var u = /* @__PURE__ */ new Map(), e = On = /* @__PURE__ */ new Map();
      e.set(t, u);
    } else
      e = On, u = e.get(t), u || (u = /* @__PURE__ */ new Map(), e.set(t, u));
    if (u.has(l)) return u;
    for (u.set(l, null), t = t.getElementsByTagName(l), e = 0; e < t.length; e++) {
      var n = t[e];
      if (!(n[Au] || n[hl] || l === "link" && n.getAttribute("rel") === "stylesheet") && n.namespaceURI !== "http://www.w3.org/2000/svg") {
        var f = n.getAttribute(a) || "";
        f = l + f;
        var c = u.get(f);
        c ? c.push(n) : u.set(f, [n]);
      }
    }
    return u;
  }
  function Wv(l, a, t) {
    l = l.ownerDocument || l, l.head.insertBefore(
      t,
      a === "title" ? l.querySelector("head > title") : null
    );
  }
  function Th(l, a, t) {
    if (t === 1 || a.itemProp != null) return !1;
    switch (l) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (typeof a.precedence != "string" || typeof a.href != "string" || a.href === "")
          break;
        return !0;
      case "link":
        if (typeof a.rel != "string" || typeof a.href != "string" || a.href === "" || a.onLoad || a.onError)
          break;
        switch (a.rel) {
          case "stylesheet":
            return l = a.disabled, typeof a.precedence == "string" && l == null;
          default:
            return !0;
        }
      case "script":
        if (a.async && typeof a.async != "function" && typeof a.async != "symbol" && !a.onLoad && !a.onError && a.src && typeof a.src == "string")
          return !0;
    }
    return !1;
  }
  function wv(l) {
    return !(l.type === "stylesheet" && (l.state.loading & 3) === 0);
  }
  function Mh(l, a, t, u) {
    if (t.type === "stylesheet" && (typeof u.media != "string" || matchMedia(u.media).matches !== !1) && (t.state.loading & 4) === 0) {
      if (t.instance === null) {
        var e = du(u.href), n = a.querySelector(
          ee(e)
        );
        if (n) {
          a = n._p, a !== null && typeof a == "object" && typeof a.then == "function" && (l.count++, l = Un.bind(l), a.then(l, l)), t.state.loading |= 4, t.instance = n, vl(n);
          return;
        }
        n = a.ownerDocument || a, u = Kv(u), (e = Pl.get(e)) && wc(u, e), n = n.createElement("link"), vl(n);
        var f = n;
        f._p = new Promise(function(c, i) {
          f.onload = c, f.onerror = i;
        }), sl(n, "link", u), t.instance = n;
      }
      l.stylesheets === null && (l.stylesheets = /* @__PURE__ */ new Map()), l.stylesheets.set(t, a), (a = t.state.preload) && (t.state.loading & 3) === 0 && (l.count++, t = Un.bind(l), a.addEventListener("load", t), a.addEventListener("error", t));
    }
  }
  var $c = 0;
  function Dh(l, a) {
    return l.stylesheets && l.count === 0 && Hn(l, l.stylesheets), 0 < l.count || 0 < l.imgCount ? function(t) {
      var u = setTimeout(function() {
        if (l.stylesheets && Hn(l, l.stylesheets), l.unsuspend) {
          var n = l.unsuspend;
          l.unsuspend = null, n();
        }
      }, 6e4 + a);
      0 < l.imgBytes && $c === 0 && ($c = 62500 * eh());
      var e = setTimeout(
        function() {
          if (l.waitingForImages = !1, l.count === 0 && (l.stylesheets && Hn(l, l.stylesheets), l.unsuspend)) {
            var n = l.unsuspend;
            l.unsuspend = null, n();
          }
        },
        (l.imgBytes > $c ? 50 : 800) + a
      );
      return l.unsuspend = t, function() {
        l.unsuspend = null, clearTimeout(u), clearTimeout(e);
      };
    } : null;
  }
  function Un() {
    if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
      if (this.stylesheets) Hn(this, this.stylesheets);
      else if (this.unsuspend) {
        var l = this.unsuspend;
        this.unsuspend = null, l();
      }
    }
  }
  var _n = null;
  function Hn(l, a) {
    l.stylesheets = null, l.unsuspend !== null && (l.count++, _n = /* @__PURE__ */ new Map(), a.forEach(Oh, l), _n = null, Un.call(l));
  }
  function Oh(l, a) {
    if (!(a.state.loading & 4)) {
      var t = _n.get(l);
      if (t) var u = t.get(null);
      else {
        t = /* @__PURE__ */ new Map(), _n.set(l, t);
        for (var e = l.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), n = 0; n < e.length; n++) {
          var f = e[n];
          (f.nodeName === "LINK" || f.getAttribute("media") !== "not all") && (t.set(f.dataset.precedence, f), u = f);
        }
        u && t.set(null, u);
      }
      e = a.instance, f = e.getAttribute("data-precedence"), n = t.get(f) || u, n === u && t.set(null, e), t.set(f, e), this.count++, u = Un.bind(this), e.addEventListener("load", u), e.addEventListener("error", u), n ? n.parentNode.insertBefore(e, n.nextSibling) : (l = l.nodeType === 9 ? l.head : l, l.insertBefore(e, l.firstChild)), a.state.loading |= 4;
    }
  }
  var fe = {
    $$typeof: xl,
    Provider: null,
    Consumer: null,
    _currentValue: _,
    _currentValue2: _,
    _threadCount: 0
  };
  function Uh(l, a, t, u, e, n, f, c, i) {
    this.tag = 1, this.containerInfo = l, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Kn(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Kn(0), this.hiddenUpdates = Kn(null), this.identifierPrefix = u, this.onUncaughtError = e, this.onCaughtError = n, this.onRecoverableError = f, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = i, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function rv(l, a, t, u, e, n, f, c, i, h, g, o) {
    return l = new Uh(
      l,
      a,
      t,
      f,
      i,
      h,
      g,
      o,
      c
    ), a = 1, n === !0 && (a |= 24), n = Ql(3, null, null, a), l.current = n, n.stateNode = l, a = Hf(), a.refCount++, l.pooledCache = a, a.refCount++, n.memoizedState = {
      element: u,
      isDehydrated: t,
      cache: a
    }, Yf(n), l;
  }
  function $v(l) {
    return l ? (l = Jt, l) : Jt;
  }
  function Fv(l, a, t, u, e, n) {
    e = $v(e), u.context === null ? u.context = e : u.pendingContext = e, u = xa(a), u.payload = { element: t }, n = n === void 0 ? null : n, n !== null && (u.callback = n), t = Ka(l, u, a), t !== null && (Hl(t, l, a), pu(t, l, a));
  }
  function kv(l, a) {
    if (l = l.memoizedState, l !== null && l.dehydrated !== null) {
      var t = l.retryLane;
      l.retryLane = t !== 0 && t < a ? t : a;
    }
  }
  function Fc(l, a) {
    kv(l, a), (l = l.alternate) && kv(l, a);
  }
  function Iv(l) {
    if (l.tag === 13 || l.tag === 31) {
      var a = dt(l, 67108864);
      a !== null && Hl(a, l, 67108864), Fc(l, 67108864);
    }
  }
  function Pv(l) {
    if (l.tag === 13 || l.tag === 31) {
      var a = pl();
      a = Ln(a);
      var t = dt(l, a);
      t !== null && Hl(t, l, a), Fc(l, a);
    }
  }
  var Nn = !0;
  function _h(l, a, t, u) {
    var e = z.T;
    z.T = null;
    var n = A.p;
    try {
      A.p = 2, kc(l, a, t, u);
    } finally {
      A.p = n, z.T = e;
    }
  }
  function Hh(l, a, t, u) {
    var e = z.T;
    z.T = null;
    var n = A.p;
    try {
      A.p = 8, kc(l, a, t, u);
    } finally {
      A.p = n, z.T = e;
    }
  }
  function kc(l, a, t, u) {
    if (Nn) {
      var e = Ic(u);
      if (e === null)
        Zc(
          l,
          a,
          u,
          Bn,
          t
        ), a1(l, u);
      else if (Bh(
        e,
        l,
        a,
        t,
        u
      ))
        u.stopPropagation();
      else if (a1(l, u), a & 4 && -1 < Nh.indexOf(l)) {
        for (; e !== null; ) {
          var n = Xt(e);
          if (n !== null)
            switch (n.tag) {
              case 3:
                if (n = n.stateNode, n.current.memoizedState.isDehydrated) {
                  var f = it(n.pendingLanes);
                  if (f !== 0) {
                    var c = n;
                    for (c.pendingLanes |= 2, c.entangledLanes |= 2; f; ) {
                      var i = 1 << 31 - ql(f);
                      c.entanglements[1] |= i, f &= ~i;
                    }
                    va(n), (p & 6) === 0 && (hn = Nl() + 500, le(0));
                  }
                }
                break;
              case 31:
              case 13:
                c = dt(n, 2), c !== null && Hl(c, n, 2), Sn(), Fc(n, 2);
            }
          if (n = Ic(u), n === null && Zc(
            l,
            a,
            u,
            Bn,
            t
          ), n === e) break;
          e = n;
        }
        e !== null && u.stopPropagation();
      } else
        Zc(
          l,
          a,
          u,
          null,
          t
        );
    }
  }
  function Ic(l) {
    return l = Pn(l), Pc(l);
  }
  var Bn = null;
  function Pc(l) {
    if (Bn = null, l = Qt(l), l !== null) {
      var a = bl(l);
      if (a === null) l = null;
      else {
        var t = a.tag;
        if (t === 13) {
          if (l = nt(a), l !== null) return l;
          l = null;
        } else if (t === 31) {
          if (l = Ut(a), l !== null) return l;
          l = null;
        } else if (t === 3) {
          if (a.stateNode.current.memoizedState.isDehydrated)
            return a.tag === 3 ? a.stateNode.containerInfo : null;
          l = null;
        } else a !== l && (l = null);
      }
    }
    return Bn = l, null;
  }
  function l1(l) {
    switch (l) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (S1()) {
          case ii:
            return 2;
          case mi:
            return 8;
          case ze:
          case g1:
            return 32;
          case vi:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var li = !1, lt = null, at = null, tt = null, ce = /* @__PURE__ */ new Map(), ie = /* @__PURE__ */ new Map(), ut = [], Nh = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function a1(l, a) {
    switch (l) {
      case "focusin":
      case "focusout":
        lt = null;
        break;
      case "dragenter":
      case "dragleave":
        at = null;
        break;
      case "mouseover":
      case "mouseout":
        tt = null;
        break;
      case "pointerover":
      case "pointerout":
        ce.delete(a.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        ie.delete(a.pointerId);
    }
  }
  function me(l, a, t, u, e, n) {
    return l === null || l.nativeEvent !== n ? (l = {
      blockedOn: a,
      domEventName: t,
      eventSystemFlags: u,
      nativeEvent: n,
      targetContainers: [e]
    }, a !== null && (a = Xt(a), a !== null && Iv(a)), l) : (l.eventSystemFlags |= u, a = l.targetContainers, e !== null && a.indexOf(e) === -1 && a.push(e), l);
  }
  function Bh(l, a, t, u, e) {
    switch (a) {
      case "focusin":
        return lt = me(
          lt,
          l,
          a,
          t,
          u,
          e
        ), !0;
      case "dragenter":
        return at = me(
          at,
          l,
          a,
          t,
          u,
          e
        ), !0;
      case "mouseover":
        return tt = me(
          tt,
          l,
          a,
          t,
          u,
          e
        ), !0;
      case "pointerover":
        var n = e.pointerId;
        return ce.set(
          n,
          me(
            ce.get(n) || null,
            l,
            a,
            t,
            u,
            e
          )
        ), !0;
      case "gotpointercapture":
        return n = e.pointerId, ie.set(
          n,
          me(
            ie.get(n) || null,
            l,
            a,
            t,
            u,
            e
          )
        ), !0;
    }
    return !1;
  }
  function t1(l) {
    var a = Qt(l.target);
    if (a !== null) {
      var t = bl(a);
      if (t !== null) {
        if (a = t.tag, a === 13) {
          if (a = nt(t), a !== null) {
            l.blockedOn = a, si(l.priority, function() {
              Pv(t);
            });
            return;
          }
        } else if (a === 31) {
          if (a = Ut(t), a !== null) {
            l.blockedOn = a, si(l.priority, function() {
              Pv(t);
            });
            return;
          }
        } else if (a === 3 && t.stateNode.current.memoizedState.isDehydrated) {
          l.blockedOn = t.tag === 3 ? t.stateNode.containerInfo : null;
          return;
        }
      }
    }
    l.blockedOn = null;
  }
  function qn(l) {
    if (l.blockedOn !== null) return !1;
    for (var a = l.targetContainers; 0 < a.length; ) {
      var t = Ic(l.nativeEvent);
      if (t === null) {
        t = l.nativeEvent;
        var u = new t.constructor(
          t.type,
          t
        );
        In = u, t.target.dispatchEvent(u), In = null;
      } else
        return a = Xt(t), a !== null && Iv(a), l.blockedOn = t, !1;
      a.shift();
    }
    return !0;
  }
  function u1(l, a, t) {
    qn(l) && t.delete(a);
  }
  function qh() {
    li = !1, lt !== null && qn(lt) && (lt = null), at !== null && qn(at) && (at = null), tt !== null && qn(tt) && (tt = null), ce.forEach(u1), ie.forEach(u1);
  }
  function Yn(l, a) {
    l.blockedOn === a && (l.blockedOn = null, li || (li = !0, E.unstable_scheduleCallback(
      E.unstable_NormalPriority,
      qh
    )));
  }
  var Qn = null;
  function e1(l) {
    Qn !== l && (Qn = l, E.unstable_scheduleCallback(
      E.unstable_NormalPriority,
      function() {
        Qn === l && (Qn = null);
        for (var a = 0; a < l.length; a += 3) {
          var t = l[a], u = l[a + 1], e = l[a + 2];
          if (typeof u != "function") {
            if (Pc(u || t) === null)
              continue;
            break;
          }
          var n = Xt(t);
          n !== null && (l.splice(a, 3), a -= 3, If(
            n,
            {
              pending: !0,
              data: e,
              method: t.method,
              action: u
            },
            u,
            e
          ));
        }
      }
    ));
  }
  function gu(l) {
    function a(i) {
      return Yn(i, l);
    }
    lt !== null && Yn(lt, l), at !== null && Yn(at, l), tt !== null && Yn(tt, l), ce.forEach(a), ie.forEach(a);
    for (var t = 0; t < ut.length; t++) {
      var u = ut[t];
      u.blockedOn === l && (u.blockedOn = null);
    }
    for (; 0 < ut.length && (t = ut[0], t.blockedOn === null); )
      t1(t), t.blockedOn === null && ut.shift();
    if (t = (l.ownerDocument || l).$$reactFormReplay, t != null)
      for (u = 0; u < t.length; u += 3) {
        var e = t[u], n = t[u + 1], f = e[Tl] || null;
        if (typeof n == "function")
          f || e1(t);
        else if (f) {
          var c = null;
          if (n && n.hasAttribute("formAction")) {
            if (e = n, f = n[Tl] || null)
              c = f.formAction;
            else if (Pc(e) !== null) continue;
          } else c = f.action;
          typeof c == "function" ? t[u + 1] = c : (t.splice(u, 3), u -= 3), e1(t);
        }
      }
  }
  function n1() {
    function l(n) {
      n.canIntercept && n.info === "react-transition" && n.intercept({
        handler: function() {
          return new Promise(function(f) {
            return e = f;
          });
        },
        focusReset: "manual",
        scroll: "manual"
      });
    }
    function a() {
      e !== null && (e(), e = null), u || setTimeout(t, 20);
    }
    function t() {
      if (!u && !navigation.transition) {
        var n = navigation.currentEntry;
        n && n.url != null && navigation.navigate(n.url, {
          state: n.getState(),
          info: "react-transition",
          history: "replace"
        });
      }
    }
    if (typeof navigation == "object") {
      var u = !1, e = null;
      return navigation.addEventListener("navigate", l), navigation.addEventListener("navigatesuccess", a), navigation.addEventListener("navigateerror", a), setTimeout(t, 100), function() {
        u = !0, navigation.removeEventListener("navigate", l), navigation.removeEventListener("navigatesuccess", a), navigation.removeEventListener("navigateerror", a), e !== null && (e(), e = null);
      };
    }
  }
  function ai(l) {
    this._internalRoot = l;
  }
  Xn.prototype.render = ai.prototype.render = function(l) {
    var a = this._internalRoot;
    if (a === null) throw Error(s(409));
    var t = a.current, u = pl();
    Fv(t, u, l, a, null, null);
  }, Xn.prototype.unmount = ai.prototype.unmount = function() {
    var l = this._internalRoot;
    if (l !== null) {
      this._internalRoot = null;
      var a = l.containerInfo;
      Fv(l.current, 2, null, l, null, null), Sn(), a[Yt] = null;
    }
  };
  function Xn(l) {
    this._internalRoot = l;
  }
  Xn.prototype.unstable_scheduleHydration = function(l) {
    if (l) {
      var a = gi();
      l = { blockedOn: null, target: l, priority: a };
      for (var t = 0; t < ut.length && a !== 0 && a < ut[t].priority; t++) ;
      ut.splice(t, 0, l), t === 0 && t1(l);
    }
  };
  var f1 = El.version;
  if (f1 !== "19.2.3")
    throw Error(
      s(
        527,
        f1,
        "19.2.3"
      )
    );
  A.findDOMNode = function(l) {
    var a = l._reactInternals;
    if (a === void 0)
      throw typeof l.render == "function" ? Error(s(188)) : (l = Object.keys(l).join(","), Error(s(268, l)));
    return l = jl(a), l = l !== null ? he(l) : null, l = l === null ? null : l.stateNode, l;
  };
  var Yh = {
    bundleType: 0,
    version: "19.2.3",
    rendererPackageName: "react-dom",
    currentDispatcherRef: z,
    reconcilerVersion: "19.2.3"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Cn = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Cn.isDisabled && Cn.supportsFiber)
      try {
        zu = Cn.inject(
          Yh
        ), Bl = Cn;
      } catch {
      }
  }
  return ve.createRoot = function(l, a) {
    if (!Rl(l)) throw Error(s(299));
    var t = !1, u = "", e = dm, n = Sm, f = gm;
    return a != null && (a.unstable_strictMode === !0 && (t = !0), a.identifierPrefix !== void 0 && (u = a.identifierPrefix), a.onUncaughtError !== void 0 && (e = a.onUncaughtError), a.onCaughtError !== void 0 && (n = a.onCaughtError), a.onRecoverableError !== void 0 && (f = a.onRecoverableError)), a = rv(
      l,
      1,
      !1,
      null,
      null,
      t,
      u,
      null,
      e,
      n,
      f,
      n1
    ), l[Yt] = a.current, Gc(l), new ai(a);
  }, ve.hydrateRoot = function(l, a, t) {
    if (!Rl(l)) throw Error(s(299));
    var u = !1, e = "", n = dm, f = Sm, c = gm, i = null;
    return t != null && (t.unstable_strictMode === !0 && (u = !0), t.identifierPrefix !== void 0 && (e = t.identifierPrefix), t.onUncaughtError !== void 0 && (n = t.onUncaughtError), t.onCaughtError !== void 0 && (f = t.onCaughtError), t.onRecoverableError !== void 0 && (c = t.onRecoverableError), t.formState !== void 0 && (i = t.formState)), a = rv(
      l,
      1,
      !0,
      a,
      t ?? null,
      u,
      e,
      i,
      n,
      f,
      c,
      n1
    ), a.context = $v(null), t = a.current, u = pl(), u = Ln(u), e = xa(u), e.callback = null, Ka(t, e, u), t = u, a.current.lanes = t, Eu(a, t), va(a), l[Yt] = a.current, Gc(l), new Xn(a);
  }, ve.version = "19.2.3", ve;
}
var v1;
function jh() {
  if (v1) return ui.exports;
  v1 = 1;
  function E() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(E);
      } catch (El) {
        console.error(El);
      }
  }
  return E(), ui.exports = Rh(), ui.exports;
}
var Vh = jh();
const xh = (E, El) => ({ ...E, ...El }), Kh = () => {
  const [E, El] = Xh(xh, {
    value: 50,
    low: 35,
    high: 65,
    min: 0,
    max: 100,
    scale: 1,
    size: "medium",
    showBoundsLabel: !1,
    colors: Gh
  }), tl = ti(
    (bl) => {
      const { name: nt, value: Ut, checked: Al, type: jl } = bl.target;
      El({ ...E, [nt]: jl === "checkbox" ? Al : Ut });
    },
    [E]
  ), s = ti(
    (bl) => {
      El({ ...E, [bl.target.name]: bl.target.value });
    },
    [E]
  ), Rl = ti(
    (bl) => {
      El({
        ...E,
        colors: {
          ...E.colors,
          [bl.target.name]: bl.target.value
        }
      });
    },
    [E]
  );
  return /* @__PURE__ */ M.createElement("div", { style: { marginBottom: "30px" } }, /* @__PURE__ */ M.createElement("p", null, "React component to render an element very similar to an", " ", /* @__PURE__ */ M.createElement("a", { href: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meter" }, "HTML <meter>"), ", except it plots a ", /* @__PURE__ */ M.createElement("code", null, "value"), " and target range defined by the", " ", /* @__PURE__ */ M.createElement("code", null, "low"), " and ", /* @__PURE__ */ M.createElement("code", null, "high"), " props within the meter's ", /* @__PURE__ */ M.createElement("code", null, "min"), " ", "and ", /* @__PURE__ */ M.createElement("code", null, "max"), "."), /* @__PURE__ */ M.createElement(ye, { ...E }), /* @__PURE__ */ M.createElement("form", null, /* @__PURE__ */ M.createElement("fieldset", null, /* @__PURE__ */ M.createElement("legend", null, "Change ", /* @__PURE__ */ M.createElement("strong", null, "props"), " to see how it works. View the", " ", /* @__PURE__ */ M.createElement("a", { href: "https://github.com/morganney/react-meter-chart/blob/main/demo.tsx" }, "source in demo.tsx"), " ", "to see a coding example."), /* @__PURE__ */ M.createElement("label", null, /* @__PURE__ */ M.createElement("code", null, "value"), /* @__PURE__ */ M.createElement(
    "input",
    {
      type: "number",
      value: E.value,
      name: "value",
      min: "0",
      max: "100",
      onChange: tl
    }
  )), /* @__PURE__ */ M.createElement("label", null, /* @__PURE__ */ M.createElement("code", null, "low"), /* @__PURE__ */ M.createElement(
    "input",
    {
      type: "number",
      value: E.low,
      name: "low",
      min: E.min ?? 0,
      max: E.max ?? 99,
      onChange: tl
    }
  )), /* @__PURE__ */ M.createElement("label", null, /* @__PURE__ */ M.createElement("code", null, "high"), /* @__PURE__ */ M.createElement(
    "input",
    {
      type: "number",
      value: E.high,
      name: "high",
      min: E.min ?? 1,
      max: E.max ?? 100,
      onChange: tl
    }
  )), /* @__PURE__ */ M.createElement("label", null, /* @__PURE__ */ M.createElement("code", null, "min"), /* @__PURE__ */ M.createElement(
    "input",
    {
      type: "number",
      value: E.min,
      name: "min",
      min: "0",
      max: "100",
      onChange: tl
    }
  )), /* @__PURE__ */ M.createElement("label", null, /* @__PURE__ */ M.createElement("code", null, "max"), /* @__PURE__ */ M.createElement(
    "input",
    {
      type: "number",
      value: E.max,
      name: "max",
      min: "0",
      max: "100",
      onChange: tl
    }
  )), /* @__PURE__ */ M.createElement("label", null, /* @__PURE__ */ M.createElement("code", null, "size"), /* @__PURE__ */ M.createElement("select", { name: "size", value: E.size, onChange: s }, /* @__PURE__ */ M.createElement("option", null, "small"), /* @__PURE__ */ M.createElement("option", null, "medium"), /* @__PURE__ */ M.createElement("option", null, "large"))), /* @__PURE__ */ M.createElement("label", null, /* @__PURE__ */ M.createElement("code", null, "scale"), /* @__PURE__ */ M.createElement(
    "input",
    {
      type: "number",
      value: E.scale,
      name: "scale",
      min: "0.5",
      max: "5",
      step: "0.5",
      onChange: tl
    }
  )), /* @__PURE__ */ M.createElement("label", null, /* @__PURE__ */ M.createElement("code", null, "colors.dot"), /* @__PURE__ */ M.createElement(
    "input",
    {
      type: "color",
      name: "dot",
      value: E.colors?.dot ?? "#000000",
      onChange: Rl
    }
  )), /* @__PURE__ */ M.createElement("label", null, /* @__PURE__ */ M.createElement("code", null, "colors.label"), /* @__PURE__ */ M.createElement(
    "input",
    {
      type: "color",
      name: "label",
      value: E.colors?.label ?? "#000000",
      onChange: Rl
    }
  )), /* @__PURE__ */ M.createElement("label", null, /* @__PURE__ */ M.createElement("code", null, "colors.range"), /* @__PURE__ */ M.createElement(
    "input",
    {
      type: "color",
      name: "range",
      value: E.colors?.range ?? "rgba(112, 196, 126, 0.4)",
      onChange: Rl
    }
  )), /* @__PURE__ */ M.createElement("label", null, /* @__PURE__ */ M.createElement("code", null, "colors.bounds"), /* @__PURE__ */ M.createElement(
    "input",
    {
      type: "color",
      name: "bounds",
      value: E.colors?.bounds ?? "#eaeaea",
      onChange: Rl
    }
  )), /* @__PURE__ */ M.createElement("label", null, /* @__PURE__ */ M.createElement("code", null, "showBoundsLabel"), /* @__PURE__ */ M.createElement(
    "input",
    {
      type: "checkbox",
      name: "showBoundsLabel",
      checked: E.showBoundsLabel,
      onChange: tl
    }
  )))));
}, Lh = Vh.createRoot(document.getElementById("root"));
Lh.render(
  /* @__PURE__ */ M.createElement(M.Fragment, null, /* @__PURE__ */ M.createElement("main", { style: { display: "grid", gap: "20px ", padding: "25px" } }, /* @__PURE__ */ M.createElement("h1", null, /* @__PURE__ */ M.createElement("code", null, /* @__PURE__ */ M.createElement("a", { href: "https://github.com/morganney/react-meter-chart" }, "react-meter-chart"))), /* @__PURE__ */ M.createElement(Kh, null), /* @__PURE__ */ M.createElement(ye, { value: 50 }), /* @__PURE__ */ M.createElement(ye, { value: 57, low: 35, high: 65 }), /* @__PURE__ */ M.createElement(ye, { value: 35, min: 25, max: 100, low: 75, high: 100, showBoundsLabel: !0 }), /* @__PURE__ */ M.createElement(
    ye,
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
