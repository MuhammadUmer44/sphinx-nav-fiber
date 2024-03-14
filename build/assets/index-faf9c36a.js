import{s as x,c as f,u as P,r as m,j as e,F as o,T as u,b as k,x as V,o as q,ad as J,g as Y,ae as S,d as H,a2 as K}from"./index-725cd71c.js";import{am as Q,B as w,an as W,l as X,F as Z,ao as ee}from"./react-toastify.esm-2b45af49.js";import{B as te}from"./index-c7317d75.js";import{n as y}from"./toastMessage-e30a9a05.js";import{a as C}from"./index-e25b3700.js";import{u as oe}from"./index-c3e60fc6.js";import{C as ne}from"./CheckIcon-c6ceecd9.js";import{T as _}from"./index-858be4ee.js";import{A as se}from"./index-61dafc83.js";import"./index.esm-665ada5a.js";import"./InfoIcon-2b7bba01.js";import"./index-48369ed0.js";import"./Popover-653b2d14.js";import"./useSlotProps-cf3ec1f9.js";import"./Select-e2ea12e5.js";import"./Stack-a82f7004.js";import"./Popper-65bf3f6a.js";const ae=({onClick:n,loading:r})=>{const i=P(l=>l.budget),[c,p]=m.useState(10),a="node";return m.useEffect(()=>{(async()=>{try{const t=await W(a);p(t.data.price)}catch(t){console.error("cannot fetch",t)}})()},[a]),e.jsxs(o,{children:[e.jsx(o,{align:"center",direction:"row",justify:"space-between",mb:20,children:e.jsx(o,{align:"center",direction:"row",children:e.jsx(ce,{children:"Approve Cost"})})}),e.jsxs(o,{align:"center",direction:"row",justify:"space-between",mb:20,children:[e.jsxs(re,{children:[e.jsx("div",{className:"title",children:"COST"}),e.jsxs("div",{className:"value","data-testid":"check-price",children:[c," sats"]})]}),e.jsxs(ie,{children:[e.jsx("div",{className:"title",children:"BUDGET"}),e.jsxs("div",{className:"value",children:[Q(i)," sats"]})]})]}),e.jsx(o,{children:e.jsx(w,{color:"secondary","data-testid":"check-icon",disabled:r,onClick:n,size:"large",startIcon:e.jsx(ne,{}),type:"submit",variant:"contained",children:"Approve"})})]})},re=x(o).attrs({direction:"column",align:"space-between",justify:"flex-start"})`
  width: 141px;
  height: 61px;
  border: 1px solid ${f.GRAY7};
  border-radius: 6px;
  padding: 16px;
  .title {
    font-family: Barlow;
    color: ${f.secondaryText4};
    font-size: 11px;
    font-style: normal;
    font-weight: 600;
  }

  .value {
    font-family: Barlow;
    color: ${f.white};
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
  }
`,ie=x(o).attrs({direction:"column",align:"space-between",justify:"flex-start"})`
  color: ${f.secondaryText4};
  .title {
    font-family: Barlow;
    font-size: 11px;
    font-style: normal;
    font-weight: 600;
  }

  .value {
    font-family: Barlow;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
  }
`,ce=x(u)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,le=({type:n,onNextStep:r,onPrevStep:i,name:c,sourceLink:p})=>{const a=n==="Image"?c&&p:c;return e.jsxs(o,{children:[e.jsx(o,{align:"center",direction:"row",justify:"space-between",mb:18,children:e.jsx(o,{align:"center",direction:"row",children:e.jsx(de,{children:"Enter details"})})}),e.jsx(o,{mb:4,children:e.jsxs(u,{children:[n," name"]})}),e.jsx(o,{mb:12,children:e.jsx(_,{id:"cy-item-name",maxLength:250,name:"name",placeholder:"Paste name here...",rules:{...k}})}),n==="Image"?e.jsxs(e.Fragment,{children:[e.jsx(o,{mb:4,children:e.jsx(u,{children:"Link"})}),e.jsx(o,{mb:12,children:e.jsx(_,{id:"cy-item-link",maxLength:250,name:"sourceLink",placeholder:"Paste link here...",rules:{...k}})})]}):null,e.jsxs(o,{direction:"row",children:[e.jsx(o,{grow:1,children:e.jsx(w,{color:"secondary",onClick:i,size:"large",variant:"contained",children:"Prev"})}),e.jsx(o,{grow:1,ml:20,children:e.jsx(w,{color:"secondary",disabled:!a,onClick:r,size:"large",variant:"contained",children:"Next"})})]})]})},de=x(u)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,T={label:"Not selected",value:""},I=[{label:"Corporation",value:"Corporation",type:"Topic"},{label:"Event",value:"Event",type:"Topic"},{label:"Image",value:"Image",type:"Topic"},{label:"Organization",value:"Organization",type:"Topic"},{label:"Person",value:"Person",type:"Topic"},{label:"Place",value:"Place",type:"Topic"},{label:"Project",value:"Project",type:"blue"},{label:"Software",value:"Software",type:"blue"},{label:"Topic",value:"Topic",type:"blue"},T],pe=({onNextStep:n,allowNextStep:r,onSelectType:i,selectedType:c})=>{const[p,a]=m.useState(T);m.useEffect(()=>{a(t=>t.value===c?t:I.find(d=>d.value===c)||T)},[c]);const l=t=>{i((t==null?void 0:t.label)||"")};return e.jsxs(o,{children:[e.jsx(o,{align:"center",direction:"row",justify:"space-between",mb:20,children:e.jsx(o,{align:"center",direction:"row",children:e.jsx(me,{children:"Select Type"})})}),e.jsx(o,{direction:"row",mb:20,children:e.jsx(se,{onSelect:l,options:I,selectedValue:p})}),e.jsx(o,{children:e.jsx(w,{color:"secondary",disabled:!r,onClick:n,size:"large",type:"button",variant:"contained",children:"Next"})})]})},me=x(u)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,z=async(n,r,i,c)=>{const p="node",a={};a.node_type=n.nodeType,a.name=n.name,n.nodeType==="Image"&&(a.node_data={source_link:n.sourceLink});let l="";await V(async()=>{const t=await H.enable();a.pubkey=t==null?void 0:t.pubkey,l=await K()});try{const t=await q.post(`/${p}`,JSON.stringify(a),{Authorization:l});if(t.error){const{message:d}=t.error;throw new Error(d)}c(n),y(J),r()}catch(t){if(t.status===402&&(await ee(i),await Y(i),await z(n,r,i,c)),t.status===400){const d=await t.json();y((d==null?void 0:d.status)||S),r()}t instanceof Error&&(y(t.message||S),r())}},Pe=()=>{const[n,r]=m.useState(0),{close:i,visible:c}=oe("addItem"),[p]=P(s=>[s.setBudget]),a=X({mode:"onChange"}),{watch:l,setValue:t,reset:d}=a,[B,v]=m.useState(!1),[E,L]=C(s=>[s.addNewNode,s.setSelectedNode]),[M]=C(s=>[s.addNewNode]);m.useEffect(()=>()=>{r(0),d()},[c,d]);const j=l("nodeType"),O=l("name"),A=l("sourceLink"),D=()=>{i()},N=()=>{r(n+1)},F=()=>{r(n-1)},$=s=>{const g=`new-id-${Math.random()}`,b=s.nodeType.toLocaleLowerCase(),h={name:s.name,node_type:b,ref_id:g,x:Math.random(),y:Math.random(),z:Math.random(),date_added_to_graph:parseInt((new Date().getTime()/1e3).toFixed(0),10)};E(h),L(h),i()},R=s=>{const g=`new-id-${Math.random()}`,b=s.nodeType,h={ref_id:g,node_type:b,attributes:{topic:s.name,date_added_to_graph:parseInt((new Date().getTime()/1e3).toFixed(0),10),...s.sourceLink?{source_link:s.sourceLink}:{}},x:Math.random()*1e3,y:Math.random()*1e3,z:Math.random()*1e3};M(h),i()},G=a.handleSubmit(async s=>{R(s);return;try{await z(s,D,p,$)}catch{y(S)}finally{v(!1)}}),U=s=>t("nodeType",s);return e.jsx(te,{id:"addItem",kind:"small",onClose:i,preventOutsideClose:!0,children:e.jsx(Z,{...a,children:e.jsxs("form",{id:"add-node-form",onSubmit:G,children:[n===0&&e.jsx(pe,{allowNextStep:!!j,onNextStep:N,onSelectType:U,selectedType:j}),n===1&&e.jsx(le,{name:O,onNextStep:N,onPrevStep:F,sourceLink:A||"",type:j}),n===2&&e.jsx(ae,{loading:B,onClick:()=>null})]})})})};export{Pe as AddItemModal};