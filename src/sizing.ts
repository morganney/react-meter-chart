type Size = 'small' | 'medium' | 'large'

const dotDiameter = 8
const boundsHeight = 2
const rangeHeight = 12
const getSizing = (size: Size, scale: number = 1) => {
  switch (size) {
    case 'small':
      return {
        valueFontSize: `clamp(12px, calc(${scale} * 0.75rem), ${
          (scale * rangeHeight) / 1.25
        }px)`,
        dotDiameter: (scale * dotDiameter) / 1.25,
        boundsHeight: (scale * boundsHeight) / 1.25,
        rangeHeight: (scale * rangeHeight) / 1.25,
      }
    case 'large':
      return {
        valueFontSize: `clamp(12px, calc(${scale} * 1.25rem), ${
          scale * rangeHeight * 2
        }px)`,
        dotDiameter: scale * dotDiameter * 2,
        boundsHeight: scale * boundsHeight * 2,
        rangeHeight: scale * rangeHeight * 2,
      }
    default:
      return {
        valueFontSize: `clamp(12px, calc(${scale} * 1rem), ${Math.max(
          scale * rangeHeight,
          16,
        )}px)`,
        dotDiameter: scale * dotDiameter,
        boundsHeight: scale * boundsHeight,
        rangeHeight: scale * rangeHeight,
      }
  }
}

export { dotDiameter, boundsHeight, rangeHeight, getSizing }
export type { Size }
