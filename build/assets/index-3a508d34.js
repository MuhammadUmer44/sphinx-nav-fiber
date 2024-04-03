import{r as n,j as t,l as B,s as _,b as y,T as N,F as f,ai as D}from"./index-1ee61b3a.js";import{B as F}from"./index-6761adb5.js";import{u as C}from"./index-2c4ca382.js";import{r as I,aN as w,t as R,R as z,F as P,C as b,B as k,v as M}from"./react-toastify.esm-72d67069.js";import{n as v}from"./toastMessage-753bc38e.js";import{A}from"./index-99b45fac.js";import{a as U}from"./constants-cde8ebc3.js";import{A as G}from"./index-5cd8e541.js";import"./index.esm-00343a7f.js";import"./Popover-d5b38327.js";import"./useSlotProps-6cdee9a7.js";import"./Select-ef7db6d0.js";import"./Stack-dde24edb.js";import"./Popper-1c28e189.js";const H=({selectedType:a,setSelectedType:d})=>{const[c,s]=n.useState([]);n.useEffect(()=>{(async()=>{try{const{data:p}=await I();s(p.edge_types)}catch(p){console.warn(p)}})()},[s]);const r=o=>({label:o,value:o}),m=o=>{d((o==null?void 0:o.value)||"")};return t.jsx(A,{onSelect:m,options:c.map(r),selectedValue:a?r(a):null})},V=({onSelect:a,selectedValue:d})=>{const[c,s]=n.useState([]),[r,m]=n.useState(!1),o=async e=>{const h={muted:"False",sort_by:G,search:e,skip:"0",limit:"1000"};m(!0);try{const u=await w(h.search);s(u.data)}catch{s([])}finally{m(!1)}},p=n.useMemo(()=>B.debounce(o,300),[]),i=e=>{if(!e){s([]);return}e.length>2&&p(e)},S=e=>{const h=e?c.find(u=>u.ref_id===e.value):null;a(h||null)},l=e=>({label:e.search_value,value:e.ref_id,type:e.node_type}),j=e=>e.map(l);return t.jsx(A,{handleInputChange:i,isLoading:r,onSelect:S,options:j(c)||U,selectedValue:d?l(d):null})},Y=({from:a,onSelect:d,selectedType:c,setSelectedType:s,selectedToNode:r})=>t.jsxs(f,{mb:20,children:[t.jsx(f,{align:"center",direction:"row",justify:"space-between",mb:18,children:t.jsx(f,{align:"center",direction:"row",children:t.jsx($,{children:"Add edge"})})}),t.jsxs(W,{mb:12,children:[t.jsxs(T,{children:[t.jsx("div",{className:"label",children:"From"}),t.jsx("div",{children:a})]}),t.jsxs(T,{children:[t.jsx("div",{className:"label",children:"Type"}),t.jsx(H,{selectedType:c,setSelectedType:s})]}),t.jsxs(T,{children:[t.jsx("div",{className:"label",children:"To"}),t.jsx(V,{onSelect:d,selectedValue:r})]})]})]}),$=_(N)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,W=_(f).attrs({align:"stretch",direction:"column",justify:"flex-start"})`
  color: ${y.white};
  .label {
    margin-bottom: 8px;
    font-weight: 500;
    font-size: 14px;
    color: ${y.GRAY3};
  }
`,T=_(f)`
  flex: 1 1 100%;
  min-height: unset;
  margin-bottom: 8px;
`,q="Link sucessfully created!",J=()=>{const{close:a}=C("addEdgeToNode"),d=R({mode:"onChange"}),[c,s]=n.useState(!1),[r,m]=n.useState(""),[o,p]=n.useState(!1),[i,S]=n.useState(null),[l,j]=n.useState(),e=z();n.useEffect(()=>{(async()=>{if(e){p(!0);try{if(e.type==="topic"){const{data:g}=await w(e==null?void 0:e.name,{exact_match:"true",node_type:"topic"}),E=g.find(O=>O.node_type==="topic");j(E)}}catch(g){console.log(g)}finally{p(!1)}}})()},[e]);const h=()=>{a()},u=async()=>{if(!(!i||!l)){s(!0);try{const x=l||i;await M({from:x.ref_id,to:i==null?void 0:i.ref_id,relationship:r});const{ref_id:g}=x,{ref_id:E}=i;console.log(g,E),v(q,"success"),h()}catch(x){console.warn(x),v(D)}finally{s(!1)}}},L=c||!i||!r;return t.jsxs(P,{...d,children:[o?t.jsx(f,{align:"center",my:24,children:t.jsx(b,{color:y.BLUE_PRESS_STATE,size:24})}):t.jsx(Y,{from:l?l==null?void 0:l.search_value:(e==null?void 0:e.name)||"",onSelect:S,selectedToNode:i,selectedType:r,setSelectedType:m}),t.jsxs(k,{color:"secondary",disabled:L,onClick:u,size:"large",variant:"contained",children:["Confirm",c&&t.jsx(b,{color:y.BLUE_PRESS_STATE,size:10})]})]})},de=()=>{const{close:a}=C("addEdgeToNode");return t.jsx(F,{id:"addEdgeToNode",kind:"large",onClose:a,preventOutsideClose:!0,children:t.jsx(J,{})})};export{de as AddNodeEdgeModal};