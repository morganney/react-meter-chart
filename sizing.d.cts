type Size = 'small' | 'medium' | 'large';
declare const dotDiameter = 8;
declare const boundsHeight = 2;
declare const rangeHeight = 12;
declare const getSizing: (size: Size, scale?: number) => {
    valueFontSize: string;
    dotDiameter: number;
    boundsHeight: number;
    rangeHeight: number;
};
export { dotDiameter, boundsHeight, rangeHeight, getSizing };
export type { Size };
