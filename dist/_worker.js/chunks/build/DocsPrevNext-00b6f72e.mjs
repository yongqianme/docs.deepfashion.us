import{h as a,a as s,m as e,n as t,t as n}from"./server.mjs";import{U as r}from"../runtime.mjs";import{l as o,d as l,u as p,z as i,A as c,I as d,D as u,J as v,C as m,N as h,O as _,R as x,Q as f}from"../routes/renderer.mjs";const $=l({__name:"DocsPrevNext",__ssrInlineRender:!0,setup(a){const{prev:o,next:l,navigation:$}=s(),{navDirFromPath:w}=n(),directory=a=>{var s,e;const t=w(a._path,$.value||[]);if(t&&t[0])return null!=(s=null==(e=t[0])?void 0:e._path)?s:"";{const s=a.split("/");return(s.length>1?s[s.length-2]:"").split("-").map(r).join(" ")}};return(a,s,n,r)=>{const $=e,w=t;p(o)||p(l)?(s(`<div${i(c({class:"docs-prev-next"},r))} data-v-30e1aea1>`),p(o)&&p(o)._path?s(d($,{to:p(o)._path,class:"prev"},{default:u(((a,s,e,t)=>{if(!s)return[m(w,{name:"heroicons-outline:arrow-sm-left",class:"icon"}),m("div",{class:"wrapper"},[directory(p(o)._path)?(h(),_("span",{key:0,class:"directory"},x(directory(p(o)._path)),1)):f("",!0),m("span",{class:"title"},x(p(o).title),1)])];s(d(w,{name:"heroicons-outline:arrow-sm-left",class:"icon"},null,e,t)),s(`<div class="wrapper" data-v-30e1aea1${t}>`),directory(p(o)._path)?s(`<span class="directory" data-v-30e1aea1${t}>${v(directory(p(o)._path))}</span>`):s("\x3c!----\x3e"),s(`<span class="title" data-v-30e1aea1${t}>${v(p(o).title)}</span></div>`)})),_:1},n)):s("<span data-v-30e1aea1></span>"),p(l)&&p(l)._path?s(d($,{to:p(l)._path,class:"next"},{default:u(((a,s,e,t)=>{if(!s)return[m("div",{class:"wrapper"},[directory(p(l)._path)?(h(),_("span",{key:0,class:"directory"},x(directory(p(l)._path)),1)):f("",!0),m("span",{class:"title"},x(p(l).title),1)]),m(w,{name:"heroicons-outline:arrow-sm-right",class:"icon"})];s(`<div class="wrapper" data-v-30e1aea1${t}>`),directory(p(l)._path)?s(`<span class="directory" data-v-30e1aea1${t}>${v(directory(p(l)._path))}</span>`):s("\x3c!----\x3e"),s(`<span class="title" data-v-30e1aea1${t}>${v(p(l).title)}</span></div>`),s(d(w,{name:"heroicons-outline:arrow-sm-right",class:"icon"},null,e,t))})),_:1},n)):s("\x3c!----\x3e"),s("</div>")):s("\x3c!----\x3e")}}}),w=$.setup;$.setup=(a,s)=>{const e=o();return(e.modules||(e.modules=new Set)).add("node_modules/@nuxt-themes/docus/components/docs/DocsPrevNext.vue"),w?w(a,s):void 0};const y=a($,[["__scopeId","data-v-30e1aea1"]]);export{y as default};
//# sourceMappingURL=DocsPrevNext-00b6f72e.mjs.map