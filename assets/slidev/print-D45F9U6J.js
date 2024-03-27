import{d as _,_ as u,y as h,b as a,e as t,x as s,A as c,F as f,Z as g,o as n,$ as v,l as x,g as b}from"../modules/vue-j0WrzVxv.js";import{u as y,h as N,c as m,b as k}from"../index-Bw_BryNX.js";import{N as w}from"./NoteDisplay-BrdyZ9Ig.js";import"../modules/shiki-CMYXqV5Q.js";const L={id:"page-root"},T={class:"m-4"},V={class:"mb-10"},B={class:"text-4xl font-bold mt-2"},D={class:"opacity-50"},H={class:"text-lg"},S={class:"font-bold flex gap-2"},A={class:"opacity-50"},C=t("div",{class:"flex-auto"},null,-1),F={key:0,class:"border-main mb-8"},M=_({__name:"print",setup($){const{slides:d,total:p}=y();u(`
@page {
  size: A4;
  margin-top: 1.5cm;
  margin-bottom: 1cm;
}
* {
  -webkit-print-color-adjust: exact;
}
html,
html body,
html #app,
html #page-root {
  height: auto;
  overflow: auto !important;
}
`),N({title:`Notes - ${m.title}`});const l=h(()=>d.value.map(o=>{var i;return(i=o.meta)==null?void 0:i.slide}).filter(o=>o!==void 0&&o.noteHTML!==""));return(o,i)=>(n(),a("div",L,[t("div",T,[t("div",V,[t("h1",B,s(c(m).title),1),t("div",D,s(new Date().toLocaleString()),1)]),(n(!0),a(f,null,g(l.value,(e,r)=>(n(),a("div",{key:r,class:"flex flex-col gap-4 break-inside-avoid-page"},[t("div",null,[t("h2",H,[t("div",S,[t("div",A,s(e==null?void 0:e.no)+"/"+s(c(p)),1),v(" "+s(e==null?void 0:e.title)+" ",1),C])]),x(w,{"note-html":e.noteHTML,class:"max-w-full"},null,8,["note-html"])]),r<l.value.length-1?(n(),a("hr",F)):b("v-if",!0)]))),128))])]))}}),W=k(M,[["__file","/Users/chrisgriffing/repos/gitkraken/videos/drafts/git-binary/node_modules/.pnpm/@slidev+client@0.48.3_postcss@8.4.38_vite@5.2.2/node_modules/@slidev/client/pages/presenter/print.vue"]]);export{W as default};
