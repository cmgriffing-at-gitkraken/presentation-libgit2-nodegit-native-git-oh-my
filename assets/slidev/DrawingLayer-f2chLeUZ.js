import{d as i,t as l,a3 as u,D as c,E as m,o as p,b as d,i as f,A as a}from"../modules/vue-j0WrzVxv.js";import{u as _}from"./context-DkGxuPIb.js";import{u as g}from"./DrawingPreview-CcMr0wo3.js";import{b as v}from"../index-DLZ_9PsQ.js";import"./bottom-BUl5Oqgx.js";import"../modules/shiki-CMYXqV5Q.js";const w=i({__name:"DrawingLayer",setup(b){const{drauu:e,drawingEnabled:s,loadCanvas:t}=g(),r=_().$scale,n=l();return u(()=>{e.mount(n.value,n.value.parentElement),c(r,o=>e.options.coordinateScale=1/o,{immediate:!0}),t()}),m(()=>{e.unmount()}),(o,h)=>(p(),d("svg",{ref_key:"svg",ref:n,class:f(["w-full h-full absolute top-0",{"pointer-events-none":!a(s),"touch-none":a(s)}])},null,2))}}),B=v(w,[["__file","/Users/chrisgriffing/repos/gitkraken/videos/drafts/git-binary/node_modules/.pnpm/@slidev+client@0.48.3_postcss@8.4.38_vite@5.2.2/node_modules/@slidev/client/internals/DrawingLayer.vue"]]);export{B as default};
