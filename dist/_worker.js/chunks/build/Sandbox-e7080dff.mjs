import e from"./TabsHeader-406999f7.mjs";import{h as a,z as t}from"./server.mjs";import{l as s,d as o,b as r,z as d,A as l,I as n,u as i,M as p}from"../routes/renderer.mjs";import"../runtime.mjs";const m=o({__name:"Sandbox",__ssrInlineRender:!0,props:{src:{type:String,default:""},repo:{type:String,default:""},branch:{type:String,default:""},dir:{type:String,default:""},file:{type:String,default:"app.vue"}},setup(a){const s=a,o=t(),m={CodeSandBox:()=>`https://codesandbox.io/embed/github/${s.repo}/tree/${s.branch}/${s.dir}?hidenavigation=1&theme=${o.value}`,StackBlitz:()=>`https://stackblitz.com/github/${s.repo}/tree/${s.branch}/${s.dir}?embed=1&file=${s.file}&theme=${o.value}`},u=Object.keys(m).map((e=>({label:e}))),c=r(-1),b=r(),f=r(""),v=r(""),updateTab=e=>{var a;c.value=e,a=u[e].label,v.value=a,f.value=s.src||m[v.value](),localStorage.setItem("docus_sandbox",a)};return(t,s,o,r)=>{const m=e;s(`<div${d(l({class:"sandbox"},r))} data-v-fecef2a9>`),a.src?s("\x3c!----\x3e"):s(n(m,{ref_key:"tabs",ref:b,"active-tab-index":i(c),tabs:i(u),"onUpdate:activeTabIndex":updateTab},null,o)),i(f)?s(`<iframe${p("src",i(f))} title="Sandbox editor" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin" data-v-fecef2a9></iframe>`):s("<span data-v-fecef2a9>Loading Sandbox...</span>"),s("</div>")}}}),u=m.setup;m.setup=(e,a)=>{const t=s();return(t.modules||(t.modules=new Set)).add("node_modules/@nuxt-themes/elements/components/globals/Sandbox.vue"),u?u(e,a):void 0};const c=a(m,[["__scopeId","data-v-fecef2a9"]]);export{c as default};
//# sourceMappingURL=Sandbox-e7080dff.mjs.map