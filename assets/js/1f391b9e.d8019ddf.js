"use strict";(self.webpackChunkrne_website=self.webpackChunkrne_website||[]).push([[6061],{5368:(e,n,t)=>{t.d(n,{A:()=>p});var a=t(9668),l=t(21367),r=t(96540),i=t(71330),c=["parentIndex"];function o(e){var n=e.map((function(e){return Object.assign({},e,{parentIndex:-1,children:[]})})),t=Array(7).fill(-1);n.forEach((function(e,n){var a=t.slice(2,e.level);e.parentIndex=Math.max.apply(Math,a),t[e.level]=n}));var a=[];return n.forEach((function(e){var t=e.parentIndex,r=(0,l.A)(e,c);t>=0?n[t].children.push(r):a.push(r)})),a}function s(e){var n=e.toc,t=e.minHeadingLevel,a=e.maxHeadingLevel;return n.flatMap((function(e){var n=s({toc:e.children,minHeadingLevel:t,maxHeadingLevel:a});return function(e){return e.level>=t&&e.level<=a}(e)?[Object.assign({},e,{children:n})]:n}))}function m(e){var n=e.getBoundingClientRect();return n.top===n.bottom?m(e.parentNode):n}function u(e,n){var t,a,l=n.anchorTopOffset,r=e.find((function(e){return m(e).top>=l}));return r?function(e){return e.top>0&&e.bottom<window.innerHeight/2}(m(r))?r:null!=(a=e[e.indexOf(r)-1])?a:null:null!=(t=e[e.length-1])?t:null}function d(){var e=(0,r.useRef)(0),n=(0,i.p)().navbar.hideOnScroll;return(0,r.useEffect)((function(){e.current=n?0:document.querySelector(".navbar").clientHeight}),[n]),e}function v(e){var n=(0,r.useRef)(void 0),t=d();(0,r.useEffect)((function(){if(!e)return function(){};var a=e.linkClassName,l=e.linkActiveClassName,r=e.minHeadingLevel,i=e.maxHeadingLevel;function c(){var e=function(e){return Array.from(document.getElementsByClassName(e))}(a),c=function(e){for(var n=e.minHeadingLevel,t=e.maxHeadingLevel,a=[],l=n;l<=t;l+=1)a.push("h"+l+".anchor");return Array.from(document.querySelectorAll(a.join()))}({minHeadingLevel:r,maxHeadingLevel:i}),o=u(c,{anchorTopOffset:t.current}),s=e.find((function(e){return o&&o.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)}));e.forEach((function(e){!function(e,t){t?(n.current&&n.current!==e&&n.current.classList.remove(l),e.classList.add(l),n.current=e):e.classList.remove(l)}(e,e===s)}))}return document.addEventListener("scroll",c),document.addEventListener("resize",c),c(),function(){document.removeEventListener("scroll",c),document.removeEventListener("resize",c)}}),[e,t])}function f(e){var n=e.toc,t=e.className,a=e.linkClassName,l=e.isChild;return n.length?r.createElement("ul",{className:l?void 0:t},n.map((function(e){return r.createElement("li",{key:e.id},r.createElement("a",{href:"#"+e.id,className:null!=a?a:void 0,dangerouslySetInnerHTML:{__html:e.value}}),r.createElement(f,{isChild:!0,toc:e.children,className:t,linkClassName:a}))}))):null}const g=r.memo(f);var h=["toc","className","linkClassName","linkActiveClassName","minHeadingLevel","maxHeadingLevel"];function p(e){var n=e.toc,t=e.className,c=void 0===t?"table-of-contents table-of-contents__left-border":t,m=e.linkClassName,u=void 0===m?"table-of-contents__link":m,d=e.linkActiveClassName,f=void 0===d?void 0:d,p=e.minHeadingLevel,L=e.maxHeadingLevel,N=(0,l.A)(e,h),C=(0,i.p)(),H=null!=p?p:C.tableOfContents.minHeadingLevel,E=null!=L?L:C.tableOfContents.maxHeadingLevel,b=function(e){var n=e.toc,t=e.minHeadingLevel,a=e.maxHeadingLevel;return(0,r.useMemo)((function(){return s({toc:o(n),minHeadingLevel:t,maxHeadingLevel:a})}),[n,t,a])}({toc:n,minHeadingLevel:H,maxHeadingLevel:E});return v((0,r.useMemo)((function(){if(u&&f)return{linkClassName:u,linkActiveClassName:f,minHeadingLevel:H,maxHeadingLevel:E}}),[u,f,H,E])),r.createElement(g,(0,a.A)({toc:b,className:c,linkClassName:u},N))}},36735:(e,n,t)=>{t.d(n,{A:()=>d});var a=t(9668),l=t(21367),r=t(96540),i=t(20053),c=t(5368);const o={tableOfContents:"tableOfContents_bqdL",docItemContainer:"docItemContainer_F8PC"};var s=["className"],m="table-of-contents__link toc-highlight",u="table-of-contents__link--active";function d(e){var n=e.className,t=(0,l.A)(e,s);return r.createElement("div",{className:(0,i.A)(o.tableOfContents,"thin-scrollbar",n)},r.createElement(c.A,(0,a.A)({},t,{linkClassName:m,linkActiveClassName:u})))}},73885:(e,n,t)=>{t.r(n),t.d(n,{default:()=>u});var a=t(96540),l=t(20053),r=t(17482),i=t(19051),c=t(82827),o=t(5413),s=t(36735);const m={mdxPageWrapper:"mdxPageWrapper_j9I6"};function u(e){var n=e.content,t=n.metadata,u=t.title,d=t.description,v=t.frontMatter,f=v.wrapperClassName,g=v.hide_table_of_contents;return a.createElement(r.e3,{className:(0,l.A)(null!=f?f:i.G.wrapper.mdxPages,i.G.page.mdxPage)},a.createElement(r.be,{title:u,description:d}),a.createElement(c.A,null,a.createElement("main",{className:"container container--fluid margin-vert--lg"},a.createElement("div",{className:(0,l.A)("row",m.mdxPageWrapper)},a.createElement("div",{className:(0,l.A)("col",!g&&"col--8")},a.createElement("article",null,a.createElement(o.A,null,a.createElement(n,null)))),!g&&n.toc.length>0&&a.createElement("div",{className:"col col--2"},a.createElement(s.A,{toc:n.toc,minHeadingLevel:v.toc_min_heading_level,maxHeadingLevel:v.toc_max_heading_level}))))))}}}]);