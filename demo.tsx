import React from 'react'
import { createRoot } from 'react-dom/client'

import { MeterChart } from './src/component.js'
import { Story } from './story.js'

const root = createRoot(document.getElementById('root') as HTMLDivElement)

root.render(
  <>
    <main style={{ display: 'grid', gap: '20px ', padding: '25px' }}>
      <h1>
        <code>
          <a href="https://github.com/morganney/react-meter-chart">react-meter-chart</a>
        </code>
      </h1>
      <Story />
      <MeterChart value={50} />
      <MeterChart value={57} low={35} high={65} />
      <MeterChart value={35} min={25} max={100} low={75} high={100} showBoundsLabel />
      <MeterChart
        value={65}
        low={40}
        high={75}
        scale={2.5}
        colors={{
          label: 'green',
          bounds: '#bbb',
          dot: 'green',
          range: '#ffa50099',
        }}
      />
    </main>
  </>,
)
