import React from 'react'
import { useReducer, useCallback } from 'react'

import { MeterChart } from './src/component.js'
import { defaultColors } from './src/colors.js'

import type { ChangeEvent } from 'react'
import type { MeterChartProps } from './src/component.js'

const reducer = (state: MeterChartProps, action: MeterChartProps) => {
  return { ...state, ...action }
}
export const Story = () => {
  const [state, dispatch] = useReducer(reducer, {
    value: 50,
    low: 35,
    high: 65,
    min: 0,
    max: 100,
    scale: 1,
    size: 'medium',
    showBoundsLabel: false,
    colors: defaultColors,
  })
  const handler = useCallback(
    (evt: ChangeEvent<HTMLInputElement>) => {
      const { name, value, checked, type } = evt.target

      dispatch({ ...state, [name]: type === 'checkbox' ? checked : value })
    },
    [state],
  )
  const select = useCallback(
    (evt: ChangeEvent<HTMLSelectElement>) => {
      dispatch({ ...state, [evt.target.name]: evt.target.value })
    },
    [state],
  )
  const color = useCallback(
    (evt: ChangeEvent<HTMLInputElement>) => {
      dispatch({
        ...state,
        colors: {
          ...state.colors,
          [evt.target.name]: evt.target.value,
        },
      })
    },
    [state],
  )

  return (
    <div style={{ marginBottom: '30px' }}>
      <p>
        React component to render an element very similar to an{' '}
        <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meter">
          HTML &lt;meter&gt;
        </a>
        , except it plots a <code>value</code> and target range defined by the{' '}
        <code>low</code> and <code>high</code> props within the meter's <code>min</code>{' '}
        and <code>max</code>.
      </p>
      <MeterChart {...state} />
      <form>
        <fieldset>
          <legend>
            Change <strong>props</strong> to see how it works. View the{' '}
            <a href="https://github.com/morganney/react-meter-chart/blob/main/demo.tsx">
              source in demo.tsx
            </a>{' '}
            to see a coding example.
          </legend>
          <label>
            <code>value</code>
            <input
              type="number"
              value={state.value}
              name="value"
              min="0"
              max="100"
              onChange={handler}
            />
          </label>
          <label>
            <code>low</code>
            <input
              type="number"
              value={state.low}
              name="low"
              min={state.min ?? 0}
              max={state.max ?? 100 - 1}
              onChange={handler}
            />
          </label>
          <label>
            <code>high</code>
            <input
              type="number"
              value={state.high}
              name="high"
              min={state.min ?? 0 + 1}
              max={state.max ?? 100}
              onChange={handler}
            />
          </label>
          <label>
            <code>min</code>
            <input
              type="number"
              value={state.min}
              name="min"
              min="0"
              max="100"
              onChange={handler}
            />
          </label>
          <label>
            <code>max</code>
            <input
              type="number"
              value={state.max}
              name="max"
              min="0"
              max="100"
              onChange={handler}
            />
          </label>
          <label>
            <code>size</code>
            <select name="size" value={state.size} onChange={select}>
              <option>small</option>
              <option>medium</option>
              <option>large</option>
            </select>
          </label>
          <label>
            <code>scale</code>
            <input
              type="number"
              value={state.scale}
              name="scale"
              min="0.5"
              max="5"
              step="0.5"
              onChange={handler}
            />
          </label>
          <label>
            <code>colors.dot</code>
            <input
              type="color"
              name="dot"
              value={state.colors?.dot ?? '#000000'}
              onChange={color}
            />
          </label>
          <label>
            <code>colors.label</code>
            <input
              type="color"
              name="label"
              value={state.colors?.label ?? '#000000'}
              onChange={color}
            />
          </label>
          <label>
            <code>colors.range</code>
            <input
              type="color"
              name="range"
              value={state.colors?.range ?? 'rgba(112, 196, 126, 0.4)'}
              onChange={color}
            />
          </label>
          <label>
            <code>colors.bounds</code>
            <input
              type="color"
              name="bounds"
              value={state.colors?.bounds ?? '#eaeaea'}
              onChange={color}
            />
          </label>
          <label>
            <code>showBoundsLabel</code>
            <input
              type="checkbox"
              name="showBoundsLabel"
              checked={state.showBoundsLabel}
              onChange={handler}
            />
          </label>
        </fieldset>
      </form>
    </div>
  )
}
