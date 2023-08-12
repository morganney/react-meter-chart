import React from 'react'
import styled from 'styled-components'

import { defaultColors } from './colors.js'
import { getSizing } from './sizing.js'

import type { FC } from 'react'
import type { Colors } from './colors.js'
import type { Size } from './sizing.js'

interface MeterChartProps {
  value: number
  min?: number
  max?: number
  low?: number
  high?: number
  size?: Size
  scale?: number
  colors?: Colors
  showBoundsLabel?: boolean
}

const { useState, useCallback, useMemo } = React
const Meter = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`
const Value = styled.span<{
  $colors: Colors
  $showLabel: boolean
  $scale: number
  $size: Size
}>`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: ${({ $size, $scale }) => getSizing($size, $scale).valueFontSize};

  span {
    white-space: nowrap;
  }
  span:first-child {
    font-weight: bold;
    color: ${({ $colors }) => $colors.label};
  }
  span:nth-child(n + 2) {
    color: ${({ $colors }) => `color-mix(in srgb, black 25%, ${$colors.bounds})`};
    display: ${({ $showLabel }) => ($showLabel ? 'inline' : 'none')};
  }
`
const Range = styled.span<{
  $low: number
  $high: number
  $rangeWidth: number
  $rangeLeft: number
  $valueLeft: number
  $size: Size
  $scale: number
  $colors: Colors
  $showRangeLabels: boolean
}>`
  display: flex;
  align-items: center;
  position: relative;
  border: ${({ $size, $scale, $colors }) =>
    `${getSizing($size, $scale).boundsHeight / 2}px solid ${$colors.bounds}`};
  border-right: none;
  border-left: none;
  width: 100%;

  &::after {
    content: '';
    position: absolute;
    width: ${({ $size, $scale }) => `${getSizing($size, $scale).dotDiameter}`}px;
    height: ${({ $size, $scale }) => `${getSizing($size, $scale).dotDiameter}`}px;
    border-radius: 50%;
    background-color: ${({ $colors }) => $colors.dot};
    left: ${({ $valueLeft, $size, $scale }) =>
      `calc(${$valueLeft * 100}% - ${getSizing($size, $scale).dotDiameter / 2}px)`};
  }

  > span {
    position: absolute;
    height: ${({ $size, $scale }) => `${getSizing($size, $scale).rangeHeight}`}px;
    width: ${({ $rangeWidth }) => $rangeWidth * 100}%;
    left: ${({ $rangeLeft }) => $rangeLeft * 100}%;
    background-color: ${({ $colors }) => $colors.range};

    > span {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: ${({ $size, $scale }) => `${getSizing($size, $scale).rangeHeight}`}px;

      &:hover {
        cursor: pointer;
      }

      span {
        display: ${({ $showRangeLabels }) => ($showRangeLabels ? 'flex' : 'none')};
        font-size: ${({ $size, $scale }) =>
          `${Math.ceil(getSizing($size, $scale).rangeHeight + 2)}`}px;
        line-height: 1;
        position: relative;
        z-index: 1;
      }
    }
  }
`
/**
 * Generates a unique hex string prefixed by a custom namespace.
 * Used for HTML `id` values to support rendering multiple `MeterChart` elements
 * per HTML document.
 *
 * @see https://www.paulirish.com/2009/random-hex-color-code-snippets/
 */
const getId = () => `rmc-${((Math.random() * (1 << 24)) | 0).toString(16)}`
/**
 * React functional component to render an element very similar to an HTML <meter />,
 * except it allows plotting the target range defined by the `low` and `high` props
 * within the meter's `min` and `max`.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meter
 */
const MeterChart: FC<MeterChartProps> = ({
  value,
  min = 0,
  max = 100,
  low = 0,
  high = 100,
  scale = 1,
  size = 'medium',
  colors = defaultColors,
  showBoundsLabel = false,
  ...rest
}) => {
  const $colors = { ...defaultColors, ...colors }
  const bounds = max - min
  const range = high - low
  const rangeWidth = range / bounds
  const rangeLeft = (low - min) / bounds
  const valueLeft = (value - min) / bounds
  const [showRangeLabels, setShowRangeLabels] = useState(false)
  const handleClickRange = useCallback(() => {
    setShowRangeLabels(!showRangeLabels)
  }, [showRangeLabels])
  const [valueId, boundsId, rangeId] = useMemo(() => [getId(), getId(), getId()], [])

  return (
    <Meter
      role="meter"
      aria-label="Meter chart"
      aria-describedby={`${valueId} ${boundsId} ${rangeId}`}
      aria-valuenow={value}
      aria-valuemin={min}
      aria-valuemax={max}
      {...rest}
    >
      <Value $size={size} $scale={scale} $colors={$colors} $showLabel={showBoundsLabel}>
        <span id={valueId} aria-description="The chart's value.">
          {value}
        </span>
        <span>&#47;</span>
        <span
          id={boundsId}
          data-testid="bounds"
          aria-description="The min and max values for the chart bounds."
        >
          ({min}, {max})
        </span>
      </Value>
      <Range
        $low={low}
        $high={high}
        $scale={scale}
        $size={size}
        $rangeWidth={rangeWidth}
        $rangeLeft={rangeLeft}
        $valueLeft={valueLeft}
        $colors={$colors}
        $showRangeLabels={showRangeLabels}
      >
        <span>
          <span
            id={rangeId}
            data-testid="range"
            onClick={handleClickRange}
            aria-description="The low and high values for the chart's target range."
          >
            <span>{low}</span>
            <span>{high}</span>
          </span>
        </span>
      </Range>
    </Meter>
  )
}

export { MeterChart }
export type { MeterChartProps, Size, Colors }
