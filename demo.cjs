"use strict";const e=require("react"),v=require("react-dom"),r=require("./component.cjs"),x=require("./colors.cjs");require("styled-components");require("./sizing.cjs");var E,i=v;E=i.createRoot,i.hydrateRoot;const y=(l,a)=>({...l,...a}),C=()=>{var c,m,u,s;const[l,a]=e.useReducer(y,{value:50,low:35,high:65,min:0,max:100,scale:1,size:"medium",showBoundsLabel:!1,colors:x.defaultColors}),t=e.useCallback(n=>{const{name:d,value:g,checked:p,type:b}=n.target;a({...l,[d]:b==="checkbox"?p:g})},[l]),h=e.useCallback(n=>{a({...l,[n.target.name]:n.target.value})},[l]),o=e.useCallback(n=>{a({...l,colors:{...l.colors,[n.target.name]:n.target.value}})},[l]);return e.createElement("div",{style:{marginBottom:"30px"}},e.createElement("p",null,"React component to render an element very similar to an"," ",e.createElement("a",{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meter"},"HTML <meter>"),", except it plots a ",e.createElement("code",null,"value")," and target range defined by the"," ",e.createElement("code",null,"low")," and ",e.createElement("code",null,"high")," props within the meter's ",e.createElement("code",null,"min")," ","and ",e.createElement("code",null,"max"),"."),e.createElement(r.MeterChart,{...l}),e.createElement("form",null,e.createElement("fieldset",null,e.createElement("legend",null,"Change ",e.createElement("strong",null,"props")," to see how it works. View the"," ",e.createElement("a",{href:"https://github.com/morganney/react-meter-chart/blob/main/demo.tsx"},"source in demo.tsx")," ","to see a coding example."),e.createElement("label",null,e.createElement("code",null,"value"),e.createElement("input",{type:"number",value:l.value,name:"value",min:"0",max:"100",onChange:t})),e.createElement("label",null,e.createElement("code",null,"low"),e.createElement("input",{type:"number",value:l.low,name:"low",min:l.min??0,max:l.max??100-1,onChange:t})),e.createElement("label",null,e.createElement("code",null,"high"),e.createElement("input",{type:"number",value:l.high,name:"high",min:l.min??0+1,max:l.max??100,onChange:t})),e.createElement("label",null,e.createElement("code",null,"min"),e.createElement("input",{type:"number",value:l.min,name:"min",min:"0",max:"100",onChange:t})),e.createElement("label",null,e.createElement("code",null,"max"),e.createElement("input",{type:"number",value:l.max,name:"max",min:"0",max:"100",onChange:t})),e.createElement("label",null,e.createElement("code",null,"size"),e.createElement("select",{name:"size",value:l.size,onChange:h},e.createElement("option",null,"small"),e.createElement("option",null,"medium"),e.createElement("option",null,"large"))),e.createElement("label",null,e.createElement("code",null,"scale"),e.createElement("input",{type:"number",value:l.scale,name:"scale",min:"0.5",max:"5",step:"0.5",onChange:t})),e.createElement("label",null,e.createElement("code",null,"colors.dot"),e.createElement("input",{type:"color",name:"dot",value:((c=l.colors)==null?void 0:c.dot)??"#000000",onChange:o})),e.createElement("label",null,e.createElement("code",null,"colors.label"),e.createElement("input",{type:"color",name:"label",value:((m=l.colors)==null?void 0:m.label)??"#000000",onChange:o})),e.createElement("label",null,e.createElement("code",null,"colors.range"),e.createElement("input",{type:"color",name:"range",value:((u=l.colors)==null?void 0:u.range)??"rgba(112, 196, 126, 0.4)",onChange:o})),e.createElement("label",null,e.createElement("code",null,"colors.bounds"),e.createElement("input",{type:"color",name:"bounds",value:((s=l.colors)==null?void 0:s.bounds)??"#eaeaea",onChange:o})),e.createElement("label",null,e.createElement("code",null,"showBoundsLabel"),e.createElement("input",{type:"checkbox",name:"showBoundsLabel",checked:l.showBoundsLabel,onChange:t})))))},w=E(document.getElementById("root"));w.render(e.createElement(e.Fragment,null,e.createElement("main",{style:{display:"grid",gap:"20px ",padding:"25px"}},e.createElement("h1",null,e.createElement("code",null,e.createElement("a",{href:"https://github.com/morganney/react-meter-chart"},"react-meter-chart"))),e.createElement(C,null),e.createElement(r.MeterChart,{value:50}),e.createElement(r.MeterChart,{value:57,low:35,high:65}),e.createElement(r.MeterChart,{value:35,min:25,max:100,low:75,high:100,showBoundsLabel:!0}),e.createElement(r.MeterChart,{value:65,low:40,high:75,scale:2.5,colors:{label:"green",bounds:"#bbb",dot:"green",range:"#ffa50099"}}))));
