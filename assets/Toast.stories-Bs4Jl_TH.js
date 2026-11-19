import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{t}from"./react-DlPsW1c0.js";import{t as n}from"./jsx-runtime-MKhVqBIO.js";import{n as r,r as i}from"./StyleContext-CGcVF3Kj.js";import{_ as a,g as o}from"./iframe-CSvA6H4G.js";function s({line:e,onGone:t}){return(0,l.jsx)(`div`,{className:`toast-region`,"aria-live":`polite`,children:e&&(0,l.jsx)(`p`,{className:`toast toast-${e.kind??`info`}`,onAnimationEnd:e=>{(e.animationName===`toast-out`||e.animationName===`toast-fade`)&&t()},children:e.text},e.id)})}function c(e){let t=i(`Toast`);return t?(0,l.jsx)(t,{...e}):(0,l.jsx)(s,{...e})}var l;function u(){return(u=e((()=>{r(),l=n(),c.__docgenInfo={description:``,methods:[],displayName:`Toast`}})))()}var d,f,p,m,h,g,_,v,y,b,x,S;function C(){return(C=e((()=>{d=t(),a(),u(),f=n(),p={title:`Components/Toast`,component:c,argTypes:{onGone:{action:`gone`}}},m=(e,t)=>({args:{line:{id:1,kind:e,text:t}}}),h=m(`info`,`Signed Out. Progress Stays on This Device`),g=m(`success`,`Progress Saved to Your Account`),_={...m(`warning`,`No Connection. Trying Again`),name:`Warning (Not Used in the App Yet)`},v={...m(`error`,`Progress Could Not Be Saved`),name:`Error (Not Used in the App Yet)`},y=m(`pass`,`Say Hi · 8 of 10 · Nicely Done`),b={render:e=>{let[t,n]=(0,d.useState)(null);return(0,f.jsxs)(`div`,{className:`flex justify-center`,style:{paddingTop:`6rem`},children:[(0,f.jsx)(c,{line:t,onGone:()=>{n(null),e.onGone?.()}}),(0,f.jsx)(o,{kind:`outline`,onClick:()=>n({id:Date.now(),kind:`pass`,text:`At the Café · 10 of 10 · Perfect Score!`}),children:`Finish a Lesson`})]})}},x={name:`Every Kind, Held Still (Tamago Style Only)`,render:()=>(0,f.jsxs)(`div`,{className:`flex flex-col items-center gap-3 p-6`,children:[(0,f.jsx)(`style`,{children:`.toast { animation: none !important; }`}),[[`info`,`Signed Out. Progress Stays on This Device`],[`success`,`Progress Saved to Your Account`],[`pass`,`Say Hi · 8 of 10 · Nicely Done`]].map(([e,t])=>(0,f.jsx)(`p`,{className:`toast toast-${e}`,children:t},e)),(0,f.jsx)(`p`,{className:`text-sm text-muted`,children:`Not used in the app yet:`}),[[`warning`,`No Connection. Trying Again`],[`error`,`Progress Could Not Be Saved`]].map(([e,t])=>(0,f.jsx)(`p`,{className:`toast toast-${e}`,children:t},e))]})},S=[`Info`,`Success`,`Warning`,`ErrorKind`,`Pass`,`TryIt`,`EveryKindHeldStill`],h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`kind('info', 'Signed Out. Progress Stays on This Device')`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`kind('success', 'Progress Saved to Your Account')`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  ...kind('warning', 'No Connection. Trying Again'),
  name: 'Warning (Not Used in the App Yet)'
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  ...kind('error', 'Progress Could Not Be Saved'),
  name: 'Error (Not Used in the App Yet)'
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`kind('pass', 'Say Hi · 8 of 10 · Nicely Done')`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [line, setLine] = useState(null);
    return <div className="flex justify-center" style={{
      paddingTop: "6rem"
    }}><Toast line={line} onGone={() => {
        setLine(null);
        args.onGone?.();
      }} /><Button kind="outline" onClick={() => setLine({
        id: Date.now(),
        kind: 'pass',
        text: 'At the Café · 10 of 10 · Perfect Score!'
      })}>Finish a Lesson</Button></div>;
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: 'Every Kind, Held Still (Tamago Style Only)',
  render: () => <div className="flex flex-col items-center gap-3 p-6">
      <style>{'.toast { animation: none !important; }'}</style>
      {[['info', 'Signed Out. Progress Stays on This Device'], ['success', 'Progress Saved to Your Account'], ['pass', 'Say Hi · 8 of 10 · Nicely Done']].map(([k, text]) => <p key={k} className={\`toast toast-\${k}\`}>{text}</p>)}
      <p className="text-sm text-muted">Not used in the app yet:</p>
      {[['warning', 'No Connection. Trying Again'], ['error', 'Progress Could Not Be Saved']].map(([k, text]) => <p key={k} className={\`toast toast-\${k}\`}>{text}</p>)}
    </div>
}`,...x.parameters?.docs?.source}}}})))()}C();export{v as ErrorKind,x as EveryKindHeldStill,h as Info,y as Pass,g as Success,b as TryIt,_ as Warning,S as __namedExportsOrder,p as default};