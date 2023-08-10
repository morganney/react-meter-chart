const g = 8, i = 2, n = 12, r = (e, t = 1) => {
  switch (e) {
    case "small":
      return {
        valueFontSize: `clamp(12px, calc(${t} * 0.75rem), ${t * 12 / 1.25}px)`,
        dotDiameter: t * 8 / 1.25,
        boundsHeight: t * 2 / 1.25,
        rangeHeight: t * 12 / 1.25
      };
    case "large":
      return {
        valueFontSize: `clamp(12px, calc(${t} * 1.25rem), ${t * 12 * 2}px)`,
        dotDiameter: t * 8 * 2,
        boundsHeight: t * 2 * 2,
        rangeHeight: t * 12 * 2
      };
    default:
      return {
        valueFontSize: `clamp(12px, calc(${t} * 1rem), ${Math.max(
          t * 12,
          16
        )}px)`,
        dotDiameter: t * 8,
        boundsHeight: t * 2,
        rangeHeight: t * 12
      };
  }
};
export {
  i as boundsHeight,
  g as dotDiameter,
  r as getSizing,
  n as rangeHeight
};
