import React from 'react'
import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { MeterChart } from '../src/component.js'
import { getSizing } from '../src/sizing.js'

describe('MeterChart', () => {
  const getIds = (meter: HTMLElement) =>
    meter.getAttribute('aria-describedby')?.split(' ') ?? []

  it('charts a value within bounds and a target range', async () => {
    const { getByRole, rerender, getByTestId } = render(<MeterChart value={50} />)
    const meter = getByRole('meter')
    const [value, bounds, range] = getIds(meter)

    expect(getByRole('meter')).toBeInTheDocument()
    expect(document.getElementById(value)?.textContent).toBe('50')
    expect(document.getElementById(bounds)?.textContent).toContain('0, 100')
    expect(document.getElementById(range)?.textContent).toContain('0100')

    rerender(<MeterChart value={50} low={25} high={75} />)
    expect(document.getElementById(value)?.textContent).toBe('50')
    expect(document.getElementById(bounds)?.textContent).toContain('0, 100')
    expect(document.getElementById(range)?.textContent).toContain('2575')

    rerender(<MeterChart value={25} min={10} max={90} low={20} high={50} />)
    expect(document.getElementById(value)?.textContent).toBe('25')
    expect(document.getElementById(bounds)?.textContent).toContain('10, 90')
    expect(document.getElementById(range)?.textContent).toContain('2050')

    // Check that the bounds labels are not visible by default
    expect(getByTestId('bounds')).not.toBeVisible()
    rerender(<MeterChart value={50} showBoundsLabel />)
    expect(getByTestId('bounds')).toBeVisible()

    // Check that the range labels are not visible by default
    const rangeLabels = getByTestId('range').querySelectorAll('span')
    expect(rangeLabels.length).toBe(2)
    expect(rangeLabels[0]).not.toBeVisible()
    expect(rangeLabels[1]).not.toBeVisible()
    await userEvent.click(getByTestId('range'))
    expect(rangeLabels[0]).toBeVisible()
    expect(rangeLabels[1]).toBeVisible()

    // Check that sizes can change
    rerender(<MeterChart value={50} size="small" />)
    expect(getByTestId('range')).toHaveStyle({
      height: `${getSizing('small').rangeHeight}px`,
    })
    rerender(<MeterChart value={50} size="large" />)
    expect(getByTestId('range')).toHaveStyle({
      height: `${getSizing('large').rangeHeight}px`,
    })

    // Check that sizes change based on the scale
    rerender(<MeterChart value={50} scale={2} />)
    expect(getByTestId('range')).toHaveStyle({
      // Size of 'medium' is the default size
      height: `${getSizing('medium', 2).rangeHeight}px`,
    })
  })
})
