import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{t}from"./jsx-runtime-MKhVqBIO.js";import{c as n,f as r,u as i}from"./iframe-CSvA6H4G.js";var a,o,s,c,l,u,d,f,p;function m(){return(m=e((()=>{r(),a=t(),o=[{id:`talk`,label:`Conversations`,about:`Talk through everyday scenes`},{id:`glossary`,label:`Glossary`,about:`Every word, with its meaning`},{id:`practice`,label:`Practice Mistakes`,about:`Strengthen 5 recent sticking points`},{id:`progress`,label:`Progress`,about:`Time, words and skills so far`},{id:`study`,label:`Self-Study`,about:`Flashcards and listening`},{id:`verbs`,label:`Verbs`,about:`Practice the verb tables`},{id:`developer`,label:`Developer`,about:`Testing and notes`,quiet:!0}],s={title:`Components/ToolTile`,component:i,subcomponents:{ToolCard:n},argTypes:{tool:{control:`object`}}},c={args:{tool:o[1]},render:e=>(0,a.jsx)(`div`,{className:`p-4`,children:(0,a.jsx)(i,{...e})})},l={args:{tool:o[6]},render:e=>(0,a.jsx)(`div`,{className:`p-4`,children:(0,a.jsx)(i,{...e})})},u={globals:{viewport:{value:`phone`,isRotated:!1}},render:()=>(0,a.jsx)(`div`,{className:`px-4 pt-4`,children:(0,a.jsx)(`nav`,{"aria-label":`Tools`,className:`no-scrollbar -mx-4 flex snap-x gap-2 overflow-x-auto px-4`,children:o.map(e=>(0,a.jsx)(i,{tool:e},e.id))})})},d={args:{tool:o[1]},render:e=>(0,a.jsx)(`div`,{className:`flex max-w-sm flex-col p-4`,children:(0,a.jsx)(n,{...e})})},f={globals:{viewport:{value:`desktop`,isRotated:!1}},render:()=>(0,a.jsx)(`div`,{className:`max-w-sm p-4`,children:(0,a.jsxs)(`nav`,{"aria-label":`Tools`,className:`flex flex-col gap-2`,children:[(0,a.jsx)(`div`,{className:`grid auto-rows-fr gap-2`,children:o.filter(e=>!e.quiet).map(e=>(0,a.jsx)(n,{tool:e},e.id))}),o.filter(e=>e.quiet).map(e=>(0,a.jsx)(n,{tool:e},e.id))]})})},p=[`Pill`,`PillQuiet`,`PillStrip`,`Card`,`CardPanel`],c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    tool: tools[1]
  },
  render: args => <div className="p-4"><ToolPill {...args} /></div>
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    tool: tools[6]
  },
  render: args => <div className="p-4"><ToolPill {...args} /></div>
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  globals: {
    viewport: {
      value: 'phone',
      isRotated: false
    }
  },
  render: () => <div className="px-4 pt-4"><nav aria-label="Tools" className="no-scrollbar -mx-4 flex snap-x gap-2 overflow-x-auto px-4">{tools.map(t => <ToolPill key={t.id} tool={t} />)}</nav></div>
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    tool: tools[1]
  },
  render: args => <div className="flex max-w-sm flex-col p-4"><ToolCard {...args} /></div>
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  globals: {
    viewport: {
      value: 'desktop',
      isRotated: false
    }
  },
  render: () => <div className="max-w-sm p-4">
      <nav aria-label="Tools" className="flex flex-col gap-2">
        <div className="grid auto-rows-fr gap-2">{tools.filter(t => !t.quiet).map(t => <ToolCard key={t.id} tool={t} />)}</div>
        {tools.filter(t => t.quiet).map(t => <ToolCard key={t.id} tool={t} />)}
      </nav>
    </div>
}`,...f.parameters?.docs?.source}}}})))()}m();export{d as Card,f as CardPanel,c as Pill,l as PillQuiet,u as PillStrip,p as __namedExportsOrder,s as default};