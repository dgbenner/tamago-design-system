import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{i as t,n,r,t as i}from"./AnswerBar-pAT8X_OM.js";var a,o,s,c,l,u,d,f,p;function m(){return(m=e((()=>{t(),n(),{mocked:a}=__STORYBOOK_MODULE_TEST__,o=[{reason_id:`FR01`,label:`My answer should be accepted`},{reason_id:`FR02`,label:`The sentence sounds wrong`},{reason_id:`FR03`,label:`Something else is wrong`}],s={type:`QT12`,sentence_id:`S0001`,lang:`fr`,french:`Un café, s’il vous plaît.`,english:`A coffee, please.`,shown:`Un café, s’il vous plaît.`,accepted:[`Un café, s’il vous plaît.`]},c={title:`Components/AnswerBar`,component:i,args:{q:s,cantListen:!0,flagReasons:o},argTypes:{onContinue:{action:`continue`},onFlag:{action:`flagged`}},beforeEach:()=>{a(r).mockResolvedValue(null)}},l={args:{result:{correct:!0,given:`Un café, s’il vous plaît.`,matched:`Un café, s’il vous plaît.`}}},u={args:{result:{correct:!1,given:`Un thé, merci.`}}},d={args:{result:{correct:!0,accent:!0,given:`Un cafe, s’il vous plait.`,matched:`Un café, s’il vous plaît.`}}},f={args:{result:{correct:!1,given:`Un café, merci.`}},beforeEach:()=>{a(r).mockResolvedValue(`“Merci” means “thank you”. To ask politely, French uses “s’il vous plaît” (please).`)}},p=[`Right`,`WrongWithCorrectAnswer`,`WithAccentNote`,`WithWhyButton`],l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    result: {
      correct: true,
      given: 'Un café, s’il vous plaît.',
      matched: 'Un café, s’il vous plaît.'
    }
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    result: {
      correct: false,
      given: 'Un thé, merci.'
    }
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    result: {
      correct: true,
      accent: true,
      given: 'Un cafe, s’il vous plait.',
      matched: 'Un café, s’il vous plaît.'
    }
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    result: {
      correct: false,
      given: 'Un café, merci.'
    }
  },
  beforeEach: () => {
    mocked(explain).mockResolvedValue('“Merci” means “thank you”. To ask politely, French uses “s’il vous plaît” (please).');
  }
}`,...f.parameters?.docs?.source}}}})))()}m();export{l as Right,d as WithAccentNote,f as WithWhyButton,u as WrongWithCorrectAnswer,p as __namedExportsOrder,c as default};