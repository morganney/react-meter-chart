import type { FC } from 'react';
import type { Colors } from './colors.mjs';
import type { Size } from './sizing.mjs';
interface MeterChartProps {
    value: number;
    min?: number;
    max?: number;
    low?: number;
    high?: number;
    size?: Size;
    scale?: number;
    colors?: Colors;
    showBoundsLabel?: boolean;
}
/**
 * React functional component to render an element very similar to an HTML <meter />,
 * except it allows plotting the target range defined by the `low` and `high` props
 * within the meter's `min` and `max`.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meter
 */
declare const MeterChart: FC<MeterChartProps>;
export { MeterChart };
export type { MeterChartProps, Size, Colors };
