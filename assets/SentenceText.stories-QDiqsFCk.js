import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{t}from"./jsx-runtime-MKhVqBIO.js";import{n,r,t as i}from"./SentenceText-g2UfiGw4.js";var a,o,s,c,l,u,d,f,p,m;function h(){return(h=e((()=>{r(),a=t(),o={qid:`story`,segments:[{text:`Je`,word_id:`W1`,hint:`I`},{text:` `},{text:`voudrais`,word_id:`W2`,hint:`would like`},{text:` `},{text:`un`,word_id:`W3`,hint:`a, one`},{text:` `},{text:`café`,word_id:`W4`,hint:`coffee`},{text:`.`}]},s={title:`Components/SentenceText`,component:n,subcomponents:{FirstSight:i},args:{q:o,newWords:new Set},argTypes:{onHint:{action:`hint opened`},newWords:{control:!1}},render:e=>(0,a.jsxs)(`main`,{className:`lesson mx-auto flex max-w-md flex-col gap-5 px-4 pt-5 lg:max-w-4xl`,children:[(0,a.jsx)(n,{...e}),(0,a.jsx)(i,{q:e.q,newWords:e.newWords,except:e.blankIndex??null})]})},c={},l={play:async({canvas:e,userEvent:t})=>{await t.click(e.getByRole(`button`,{name:`voudrais`}))}},u={args:{newWords:new Set([`W2`,`W4`])}},d={args:{blankIndex:6}},f={args:{blankIndex:6,filled:`café`}},p={args:{markNewOnly:!0,newWords:new Set([`W2`])}},m=[`WithHints`,`HintOpen`,`WithNewWords`,`WithABlank`,`BlankFilled`,`OnlyNewWordsMarked`],c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvas,
    userEvent
  }) => {
    await userEvent.click(canvas.getByRole('button', {
      name: 'voudrais'
    }));
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    newWords: new Set(['W2', 'W4'])
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    blankIndex: 6
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    blankIndex: 6,
    filled: 'café'
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    markNewOnly: true,
    newWords: new Set(['W2'])
  }
}`,...p.parameters?.docs?.source}}}})))()}h();export{f as BlankFilled,l as HintOpen,p as OnlyNewWordsMarked,d as WithABlank,c as WithHints,u as WithNewWords,m as __namedExportsOrder,s as default};