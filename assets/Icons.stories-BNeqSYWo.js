import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{t}from"./jsx-runtime-MKhVqBIO.js";import{d as n,m as r,v as i,y as a}from"./icons-Dh5TWylM.js";var o,s,c,l,u,d,f,p,m,h;function g(){return(g=e((()=>{a(),o=t(),s=Object.keys(i).filter(e=>e.startsWith(`Icon`)).sort(),c={display:`flex`,flexDirection:`column`,alignItems:`center`,gap:8,padding:`14px 6px`,border:`2px solid var(--line)`,borderRadius:12,background:`var(--surface)`,color:`var(--ink)`},l={display:`grid`,gridTemplateColumns:`repeat(auto-fill, minmax(8.5rem, 1fr))`,gap:10,padding:16},u={fontSize:12,color:`var(--muted)`,textAlign:`center`},d=({name:e,children:t})=>(0,o.jsxs)(`div`,{style:c,children:[t,(0,o.jsx)(`span`,{style:u,children:e})]}),f={title:`Icons`},p={render:()=>(0,o.jsx)(`div`,{style:l,children:s.map(e=>{let t=i[e];return(0,o.jsx)(d,{name:e,children:(0,o.jsx)(t,{})},e)})})},m={render:()=>(0,o.jsxs)(`div`,{style:l,children:[(0,o.jsx)(d,{name:`IconSpeaker playing`,children:(0,o.jsx)(r,{playing:!0})}),(0,o.jsx)(d,{name:`IconMic live`,children:(0,o.jsx)(n,{live:!0})})]})},h=[`EveryIcon`,`MovingIcons`],p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <div style={grid}>
      {names.map(n => {
      const Icon = icons[n];
      return <Cell key={n} name={n}><Icon /></Cell>;
    })}
    </div>
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <div style={grid}>
      <Cell name="IconSpeaker playing"><icons.IconSpeaker playing /></Cell>
      <Cell name="IconMic live"><icons.IconMic live /></Cell>
    </div>
}`,...m.parameters?.docs?.source}}}})))()}g();export{p as EveryIcon,m as MovingIcons,h as __namedExportsOrder,f as default};