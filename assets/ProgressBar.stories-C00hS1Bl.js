import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{t}from"./react-DlPsW1c0.js";import{t as n}from"./jsx-runtime-MKhVqBIO.js";import{_ as r,g as i}from"./iframe-Dene7VcI.js";import{n as a,t as o}from"./ProgressBar-B4rgINxL.js";var s,c,l,u,d,f,p,m;function h(){return(h=e((()=>{s=t(),r(),a(),c=n(),l={title:`Components/ProgressBar`,component:o,argTypes:{value:{control:{type:`range`,min:0,max:1,step:.05}}},decorators:[e=>(0,c.jsx)(`div`,{className:`mx-auto flex max-w-md items-center gap-3 p-4`,children:(0,c.jsx)(e,{})})]},u={args:{value:0}},d={args:{value:.4}},f={args:{value:1}},p={render:()=>{let[e,t]=(0,s.useState)(2);return(0,c.jsxs)(`div`,{className:`flex flex-1 flex-col gap-5`,children:[(0,c.jsx)(`div`,{className:`flex`,children:(0,c.jsx)(o,{value:e/10})}),(0,c.jsx)(i,{kind:`outline`,onClick:()=>t(e>=10?0:e+1),children:`Next Question`})]})}},m=[`Empty`,`PartWay`,`Full`,`Sliding`],u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    value: 0
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    value: 0.4
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    value: 1
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [n, setN] = useState(2);
    return <div className="flex flex-1 flex-col gap-5"><div className="flex"><ProgressBar value={n / 10} /></div><Button kind="outline" onClick={() => setN(n >= 10 ? 0 : n + 1)}>Next Question</Button></div>;
  }
}`,...p.parameters?.docs?.source}}}})))()}h();export{u as Empty,f as Full,d as PartWay,p as Sliding,m as __namedExportsOrder,l as default};