import{r as b}from"./index-76fb7be0.js";import{P as n}from"./index-8d47fad6.js";import"./_commonjsHelpers-de833af9.js";var E={exports:{}},l={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var R=b,I=Symbol.for("react.element"),D=Symbol.for("react.fragment"),O=Object.prototype.hasOwnProperty,P=R.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,q={key:!0,ref:!0,__self:!0,__source:!0};function N(t,e,r){var s,a={},d=null,m=null;r!==void 0&&(d=""+r),e.key!==void 0&&(d=""+e.key),e.ref!==void 0&&(m=e.ref);for(s in e)O.call(e,s)&&!q.hasOwnProperty(s)&&(a[s]=e[s]);if(t&&t.defaultProps)for(s in e=t.defaultProps,e)a[s]===void 0&&(a[s]=e[s]);return{$$typeof:I,type:t,key:d,ref:m,props:a,_owner:P.current}}l.Fragment=D;l.jsx=N;l.jsxs=N;E.exports=l;var S=E.exports;const o=S.jsx,k=S.jsxs;function u({task:{id:t,title:e,state:r},onArchiveTask:s,onPinTask:a}){return k("div",{className:`list-item ${r}`,children:[k("label",{htmlFor:"checked","aria-label":`archiveTask-${t}`,className:"checkbox",children:[o("input",{type:"checkbox",disabled:!0,name:"checked",id:`archiveTask-${t}`,checked:r==="TASK_ARCHIVED"}),o("span",{className:"checkbox-custom",onClick:()=>s(t)})]}),o("label",{htmlFor:"title","aria-label":e,className:"title",children:o("input",{type:"text",value:e,readOnly:!0,name:"title",placeholder:"Input title"})}),r!=="TASK_ARCHIVED"&&o("button",{className:"pin-button",onClick:()=>a(t),id:`pinTask-${t}`,"aria-label":`pinTask-${t}`,children:o("span",{className:"icon-star"})},`pinTask-${t}`)]})}u.propTypes={task:n.shape({id:n.string.isRequired,title:n.string.isRequired,state:n.string.isRequired}),onArchiveTask:n.func,onPinTask:n.func};u.__docgenInfo={description:"",methods:[],displayName:"Task",props:{task:{description:"Composition of the task",type:{name:"shape",value:{id:{name:"string",description:"Id of the task",required:!0},title:{name:"string",description:"Title of the task",required:!0},state:{name:"string",description:"Current state of the task",required:!0}}},required:!1},onArchiveTask:{description:"Event to change the task to archived",type:{name:"func"},required:!1},onPinTask:{description:"Event to change the task to pinned",type:{name:"func"},required:!1}}};const $={component:u,title:"Task",tags:["autodocs"]},i={args:{task:{id:"1",title:"Test Task",state:"TASK_INBOX"}}},c={args:{task:{...i.args.task,state:"TASK_PINNED"}}},p={args:{task:{...i.args.task,state:"TASK_ARCHIVED"}}};var f,h,T;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    task: {
      id: '1',
      title: 'Test Task',
      state: 'TASK_INBOX'
    }
  }
}`,...(T=(h=i.parameters)==null?void 0:h.docs)==null?void 0:T.source}}};var _,g,v;c.parameters={...c.parameters,docs:{...(_=c.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    task: {
      ...Default.args.task,
      state: 'TASK_PINNED'
    }
  }
}`,...(v=(g=c.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};var x,y,A;p.parameters={...p.parameters,docs:{...(x=p.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    task: {
      ...Default.args.task,
      state: 'TASK_ARCHIVED'
    }
  }
}`,...(A=(y=p.parameters)==null?void 0:y.docs)==null?void 0:A.source}}};const w=["Default","Pinned","Archived"];export{p as Archived,i as Default,c as Pinned,w as __namedExportsOrder,$ as default};
