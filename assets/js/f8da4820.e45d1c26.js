"use strict";(self.webpackChunkrne_website=self.webpackChunkrne_website||[]).push([[29990],{15680:(e,r,t)=>{t.d(r,{xA:()=>d,yg:()=>p});var n=t(96540);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=n.createContext({}),c=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},d=function(e){var r=c(e.components);return n.createElement(s.Provider,{value:r},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=c(t),m=o,p=u["".concat(s,".").concat(m)]||u[m]||g[m]||a;return t?n.createElement(p,i(i({ref:r},d),{},{components:t})):n.createElement(p,i({ref:r},d))}));function p(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=m;var l={};for(var s in r)hasOwnProperty.call(r,s)&&(l[s]=r[s]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=t[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},89282:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>p,contentTitle:()=>g,default:()=>h,frontMatter:()=>u,metadata:()=>m,toc:()=>f});var n=t(9668),o=t(21367),a=t(96540),i=t(15680),l={primary:"#2089dc",secondary:"#ca71eb",background:"#ffffff",white:"#ffffff",black:"#242424",grey0:"#393e42",grey1:"#43484d",grey2:"#5e6977",grey3:"#86939e",grey4:"#bdc6cf",grey5:"#e1e8ee",greyOutline:"#bbb",searchBg:"#303337",success:"#52c41a",error:"#ff190c",warning:"#faad14",disabled:"hsl(208, 8%, 90%)"},s={primary:"#439ce0",secondary:"#aa49eb",background:"#080808",white:"#080808",black:"#f2f2f2",grey5:"#393e42",grey4:"#43484d",grey3:"#5e6977",grey2:"#86939e",grey1:"#bdc6cf",grey0:"#e1e8ee",greyOutline:"#bbb",searchBg:"#303337",success:"#439946",error:"#bf2c24",warning:"#cfbe27",disabled:"hsl(208, 8%, 90%)"},c=function(e){var r=e.dark,t=void 0!==r&&r;return a.createElement("div",{style:{display:"flex",gap:"20px",flexWrap:"wrap",fontSize:"smaller"}},Object.entries(t?s:l).map((function(e){var r=e[0],t=e[1];return a.createElement("div",{key:r,style:{textAlign:"center",fontSize:"small"}},a.createElement("div",{style:{background:t,width:"85px",height:"50px",display:"block",borderRadius:"6px",border:"1px solid #e2e2e2"}}),a.createElement("div",null,t),r)})))},d=["components"],u={title:"Theme object",sidebar_position:1},g=void 0,m={unversionedId:"customization/theme_object",id:"version-4.0.0-rc.8/customization/theme_object",title:"Theme object",description:"Theme Properties",source:"@site/versioned_docs/version-4.0.0-rc.8/customization/theme_object.mdx",sourceDirName:"customization",slug:"/customization/theme_object",permalink:"/react-native-elements-next/docs/customization/theme_object",draft:!1,editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/versioned_docs/version-4.0.0-rc.8/customization/theme_object.mdx",tags:[],version:"4.0.0-rc.8",sidebarPosition:1,frontMatter:{title:"Theme object",sidebar_position:1},sidebar:"docs",previous:{title:"Overview",permalink:"/react-native-elements-next/docs/customizing"},next:{title:"Theme Provider",permalink:"/react-native-elements-next/docs/customization/themeprovider"}},p={},f=[{value:"Theme Properties",id:"theme-properties",level:2},{value:"Colors",id:"colors",level:3},{value:"Default Light Colors",id:"default-light-colors",level:4},{value:"Default Dark Colors",id:"default-dark-colors",level:4},{value:"Spacing",id:"spacing",level:3}],y={toc:f},b="wrapper";function h(e){var r=e.components,t=(0,o.A)(e,d);return(0,i.yg)(b,(0,n.A)({},y,t,{components:r,mdxType:"MDXLayout"}),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-tsx"},"export interface Theme {\n  colors: Colors;\n  mode: 'light' | 'dark';\n  spacing: {\n    xs: number;\n    sm: number;\n    md: number;\n    lg: number;\n    xl: number;\n  };\n}\n")),(0,i.yg)("h2",{id:"theme-properties"},"Theme Properties"),(0,i.yg)("h3",{id:"colors"},"Colors"),(0,i.yg)("p",null,"By default, the theme object looks like this. You can add whatever values you\nwant to the theme, and they will be merged with the default. By default the\nplatform colors aren't used anywhere. These native colors are added for\nyour convenience."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-tsx"},"interface Colors {\n  primary: string;\n  secondary: string;\n  background: string;\n  white: string;\n  black: string;\n  grey0: string;\n  grey1: string;\n  grey2: string;\n  grey3: string;\n  grey4: string;\n  grey5: string;\n  greyOutline: string;\n  searchBg: string;\n  success: string;\n  warning: string;\n  error: string;\n  disabled: string;\n  divider: string;\n  platform: {\n    ios: PlatformColors;\n    android: PlatformColors;\n    web: PlatformColors;\n    default: PlatformColors;\n  };\n}\n")),(0,i.yg)("h4",{id:"default-light-colors"},"Default Light Colors"),(0,i.yg)(c,{mdxType:"Palette"}),(0,i.yg)("h4",{id:"default-dark-colors"},"Default Dark Colors"),(0,i.yg)(c,{dark:!0,mdxType:"Palette"}),(0,i.yg)("h3",{id:"spacing"},"Spacing"))}h.isMDXComponent=!0}}]);