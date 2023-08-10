"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const n=require("react"),d=require("styled-components"),f=require("./colors.cjs"),a=require("./sizing.cjs"),{useState:L,useCallback:M,useMemo:C}=n,k=d.div`
  display: flex;
  align-items: center;
  gap: 15px;
`,R=d.span`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: ${({$size:e,$scale:t})=>a.getSizing(e,t).valueFontSize};

  span {
    white-space: nowrap;
  }
  span:first-child {
    font-weight: bold;
    color: ${({$colors:e})=>e.label};
  }
  span:nth-child(n + 2) {
    color: ${({$colors:e})=>`color-mix(in srgb, black 25%, ${e.bounds})`};
    display: ${({$showLabel:e})=>e?"inline":"none"};
  }
`,q=d.span`
  display: flex;
  align-items: center;
  position: relative;
  border: ${({$size:e,$scale:t,$colors:i})=>`${a.getSizing(e,t).boundsHeight/2}px solid ${i.bounds}`};
  border-right: none;
  border-left: none;
  width: 100%;

  &::after {
    content: '';
    position: absolute;
    width: ${({$size:e,$scale:t})=>`${a.getSizing(e,t).dotDiameter}`}px;
    height: ${({$size:e,$scale:t})=>`${a.getSizing(e,t).dotDiameter}`}px;
    border-radius: 50%;
    background-color: ${({$colors:e})=>e.dot};
    left: ${({$valueLeft:e,$size:t,$scale:i})=>`calc(${e*100}% - ${a.getSizing(t,i).dotDiameter/2}px)`};
  }

  > span {
    position: absolute;
    height: ${({$size:e,$scale:t})=>`${a.getSizing(e,t).rangeHeight}`}px;
    width: ${({$rangeWidth:e})=>e*100}%;
    left: ${({$rangeLeft:e})=>e*100}%;
    background-color: ${({$colors:e})=>e.range};

    > span {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: ${({$size:e,$scale:t})=>`${a.getSizing(e,t).rangeHeight}`}px;

      &:hover {
        cursor: pointer;
      }

      span {
        display: ${({$showRangeLabels:e})=>e?"flex":"none"};
        font-size: ${({$size:e,$scale:t})=>`${Math.ceil(a.getSizing(e,t).rangeHeight+2)}`}px;
        line-height: 1;
        position: relative;
        z-index: 1;
      }
    }
  }
`,c=()=>`rmc-${(Math.random()*(1<<24)|0).toString(16)}`,H=({value:e,min:t=0,max:i=100,low:r=0,high:o=100,scale:g=1,size:p="medium",colors:m=f.defaultColors,showBoundsLabel:x=!1,...z})=>{const h={...f.defaultColors,...m},s=i-t,S=(o-r)/s,v=(r-t)/s,w=(e-t)/s,[l,y]=L(!1),E=M(()=>{y(!l)},[l]),[$,u,b]=C(()=>[c(),c(),c()],[]);return n.createElement(k,{role:"meter","aria-label":"Meter chart","aria-describedby":`${$} ${u} ${b}`,"aria-valuenow":e,"aria-valuemin":t,"aria-valuemax":i,...z},n.createElement(R,{$size:p,$scale:g,$colors:h,$showLabel:x},n.createElement("span",{id:$,"aria-description":"The chart's value."},e),n.createElement("span",null,"/"),n.createElement("span",{id:u,"data-testid":"bounds","aria-description":"The min and max values for the chart bounds."},"(",t,", ",i,")")),n.createElement(q,{$low:r,$high:o,$scale:g,$size:p,$rangeWidth:S,$rangeLeft:v,$valueLeft:w,$colors:h,$showRangeLabels:l},n.createElement("span",null,n.createElement("span",{id:b,"data-testid":"range",onClick:E,"aria-description":"The low and high values for the chart's target range."},n.createElement("span",null,r),n.createElement("span",null,o)))))};exports.MeterChart=H;
