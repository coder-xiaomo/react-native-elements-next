"use strict";(self.webpackChunkrne_website=self.webpackChunkrne_website||[]).push([[86512],{15680:(e,t,r)=>{r.d(t,{xA:()=>u,yg:()=>f});var n=r(96540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},m="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=p(r),g=a,f=m["".concat(c,".").concat(g)]||m[g]||s[g]||i;return r?n.createElement(f,o(o({ref:t},u),{},{components:r})):n.createElement(f,o({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=g;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[m]="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},56904:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>f,frontMatter:()=>l,metadata:()=>p,toc:()=>m});var n=r(9668),a=r(21367),i=(r(96540),r(15680)),o=["components"],l={title:"React Native Elements 4.0",authors:["arpitBhalla","rneui"]},c=void 0,p={permalink:"/blog/2022/05/15/rneui-migration-guide",source:"@site/blog/2022-05-15-rneui-migration-guide.md",title:"React Native Elements 4.0",description:"React Native Elements v4 introduces many features including few new components, fully typescript support and some breaking changes whose migration is being given below.",date:"2022-05-15T00:00:00.000Z",formattedDate:"May 15, 2022",tags:[],readingTime:.26,hasTruncateMarker:!1,authors:[{name:"Arpit Bhalla",title:"GSoC'21 fellow",url:"https://github.com/arpitbhalla",email:"arpitbhallay@proton.me",twitter:"arpitbhalla_",imageURL:"https://github.com/arpitbhalla.png",key:"arpitBhalla"},{name:"RNE Core Team",title:"React Native Elements",url:"http://twitter.com/rn_elements/",imageURL:"https://github.com/rneui.png",key:"rneui"}],frontMatter:{title:"React Native Elements 4.0",authors:["arpitBhalla","rneui"]},nextItem:{title:"Google Summer of Code'21 Arpit Bhalla",permalink:"/blog/2021/08/23/google-summer-of-code-arpitBhalla"}},u={authorsImageUrls:[void 0,void 0]},m=[{value:"Migration Guide",id:"migration-guide",level:2}],s={toc:m},g="wrapper";function f(e){var t=e.components,r=(0,a.A)(e,o);return(0,i.yg)(g,(0,n.A)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("div",{align:"center"},(0,i.yg)("img",{src:"/img/website/seo.png"})),(0,i.yg)("div",{className:"admonition admonition-info alert alert--info"},(0,i.yg)("div",{className:"admonition-content"},"React Native Elements v4 introduces many features including few new components, fully typescript support and some breaking changes whose migration is being given below.")),(0,i.yg)("h2",{id:"migration-guide"},"Migration Guide"),(0,i.yg)("p",null,"Refer the ",(0,i.yg)("a",{parentName:"p",href:"/migration/migration-v3"},"migration guide")," to migrate from v3 to v4."))}f.isMDXComponent=!0}}]);