import{h as e,v as s}from"./server.mjs";import{l as a,d as t,z as d,A as n,K as o,T as i,M as c,u as r,J as l,I as u,b as m,w as v}from"../routes/renderer.mjs";import"../runtime.mjs";const p=t({__name:"DocsTocLinks",__ssrInlineRender:!0,props:{links:{type:Array,default:()=>[]}},emits:["move"],setup(e,{emit:a}){const t=a;s();const{activeHeadings:p,updateHeadings:f}=(()=>{const e=m(),s=m([]),a=m([]);return v(s,((e,s)=>{0===e.length?a.value=s:a.value=e}),{deep:!0}),{visibleHeadings:s,activeHeadings:a,updateHeadings:s=>s.forEach((s=>{e.value.observe(s)}))}})();return(s,a,m,v)=>{const f=h;a(`<ul${d(n({class:"docs-toc-links"},v))} data-v-a97df893>\x3c!--[--\x3e`),o(e.links,(e=>{a(`<li class="${i([`depth-${e.depth}`])}" data-v-a97df893><a${c("href",`#${e.id}`)} class="${i([r(p).includes(e.id)&&"active"])}" data-v-a97df893>${l(e.text)}</a>`),e.children?a(u(f,{links:e.children,onMove:e=>{t("move",e)}},null,m)):a("\x3c!----\x3e"),a("</li>")})),a("\x3c!--]--\x3e</ul>")}}}),f=p.setup;p.setup=(e,s)=>{const t=a();return(t.modules||(t.modules=new Set)).add("node_modules/@nuxt-themes/docus/components/docs/DocsTocLinks.vue"),f?f(e,s):void 0};const h=e(p,[["__scopeId","data-v-a97df893"]]);export{h as default};
//# sourceMappingURL=DocsTocLinks-f81acaaa.mjs.map