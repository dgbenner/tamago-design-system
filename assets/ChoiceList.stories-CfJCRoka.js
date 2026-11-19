import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{t}from"./react-DlPsW1c0.js";import{t as n}from"./jsx-runtime-MKhVqBIO.js";import{n as r,t as i}from"./ChoiceList-hBv5DroS.js";var a,o,s,c,l,u,d,f,p,m;function h(){return(h=e((()=>{a=t(),r(),o=n(),s=[`Good evening`,`Good morning`,`Good night`,`Goodbye`],c=`Good evening`,l={title:`Components/ChoiceList`,component:i,args:{choices:s,answer:c,lang:`en`,result:null,chosen:null},argTypes:{onPick:{action:`picked`}},decorators:[e=>(0,o.jsx)(`main`,{className:`lesson mx-auto flex max-w-md flex-col px-4 lg:max-w-4xl`,children:(0,o.jsx)(`div`,{className:`flex flex-col gap-5 pt-5`,children:(0,o.jsx)(e,{})})})]},u={},d={args:{chosen:`Good evening`,result:{correct:!0}}},f={args:{chosen:`Good night`,result:{correct:!1}}},p={render:e=>{let[t,n]=(0,a.useState)(null);return(0,o.jsx)(i,{...e,chosen:t,result:t?{correct:t===e.answer}:null,onPick:t=>{n(t),e.onPick?.(t)}})}},m=[`NothingPicked`,`RightAnswer`,`WrongAnswer`,`TryIt`],u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    chosen: 'Good evening',
    result: {
      correct: true
    }
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    chosen: 'Good night',
    result: {
      correct: false
    }
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [chosen, setChosen] = useState(null);
    return <ChoiceList {...args} chosen={chosen} result={chosen ? {
      correct: chosen === args.answer
    } : null} onPick={c => {
      setChosen(c);
      args.onPick?.(c);
    }} />;
  }
}`,...p.parameters?.docs?.source}}}})))()}h();export{u as NothingPicked,d as RightAnswer,p as TryIt,f as WrongAnswer,m as __namedExportsOrder,l as default};