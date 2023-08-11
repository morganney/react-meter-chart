# [`react-meter-chart`](https://www.npmjs.com/package/react-meter-chart)

![CI](https://github.com/morganney/react-meter-chart/actions/workflows/ci.yml/badge.svg)
[![codecov](https://codecov.io/gh/morganney/react-meter-chart/branch/main/graph/badge.svg?token=D81HI92YGO)](https://codecov.io/gh/morganney/react-meter-chart)
[![NPM version](https://img.shields.io/npm/v/react-meter-chart.svg)](https://www.npmjs.com/package/react-meter-chart)

React component to render an element very much like an [HTML &lt;meter&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meter). Basically a reason to improve the [answer from a stackoverflow question](https://stackoverflow.com/questions/73961347/range-line-component-in-react/73999120#73999120).

<img src="./react-meter-chart.png" alt="Meter chart react component" width="425" />

## Getting Started

First install `react-meter-chart`:

```console
npm install react-meter-chart
```

Next include it in your React app:

```jsx
import React from 'react'
import { createRoot } from 'react-dom/client'
import { MeterChart } from 'react-meter-chart'

const root = createRoot(document.getElementById('root'))

root.render(
  <main>
    <MeterChart value={50} low={35} high={65} />
  </main>
)
```

## Props

It accepts props very much like the <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meter">HTML &lt;meter&gt; element</a> attributes.

```ts
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
interface Colors {
  dot?: string
  bounds?: string
  range?: string
  label?: string
}
type Size = 'small' | 'medium' | 'large'
```

## Examples

Check out the demo at https://morganney.github.io/react-meter-chart.
