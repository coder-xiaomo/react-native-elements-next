"use strict";(self.webpackChunkrne_website=self.webpackChunkrne_website||[]).push([[6420,22885,72349],{15680:(e,r,t)=>{t.d(r,{xA:()=>p,yg:()=>c});var a=t(96540);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var o=a.createContext({}),g=function(e){var r=a.useContext(o),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},p=function(e){var r=g(e.components);return a.createElement(o.Provider,{value:r},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},d=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=g(t),d=n,c=u["".concat(o,".").concat(d)]||u[d]||m[d]||i;return t?a.createElement(c,s(s({ref:r},p),{},{components:t})):a.createElement(c,s({ref:r},p))}));function c(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var i=t.length,s=new Array(i);s[0]=d;var l={};for(var o in r)hasOwnProperty.call(r,o)&&(l[o]=r[o]);l.originalType=e,l[u]="string"==typeof e?e:n,s[1]=l;for(var g=2;g<i;g++)s[g]=t[g];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},21411:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>g,toc:()=>u});var a=t(9668),n=t(21367),i=(t(96540),t(15680)),s=["components"],l={},o=void 0,g={unversionedId:"main/usage/LinearProgress/snack/index",id:"version-4.0.0-beta.0/main/usage/LinearProgress/snack/index",title:"index",description:"",source:"@site/versioned_docs/version-4.0.0-beta.0/main/usage/LinearProgress/snack/index.md",sourceDirName:"main/usage/LinearProgress/snack",slug:"/main/usage/LinearProgress/snack/",permalink:"/react-native-elements-next/docs/4.0.0-beta.0/main/usage/LinearProgress/snack/",draft:!1,editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/versioned_docs/version-4.0.0-beta.0/main/usage/LinearProgress/snack/index.md",tags:[],version:"4.0.0-beta.0",frontMatter:{}},p={},u=[],m={toc:u},d="wrapper";function c(e){var r=e.components,t=(0,n.A)(e,s);return(0,i.yg)(d,(0,a.A)({},m,t,{components:r,mdxType:"MDXLayout"}),(0,i.yg)("div",{className:"snack-player","data-snack-name":"RNE Linear Progress","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20View%2C%20Text%20%7D%20from%20'react-native'%3B%0Aimport%20%7B%20Button%2C%20LinearProgress%20%7D%20from%20'react-native-elements'%3B%0A%0Aconst%20LinearProgressAPI%3A%20React.FunctionComponent%20%3D%20()%20%3D%3E%20%7B%0A%20%20const%20%5Bprogress%2C%20setProgress%5D%20%3D%20React.useState(0)%3B%0A%0A%20%20React.useEffect(()%20%3D%3E%20%7B%0A%20%20%20%20let%20subs%20%3D%20true%3B%0A%20%20%20%20if%20(progress%20%3C%201%20%26%26%20progress%20!%3D%3D%200)%20%7B%0A%20%20%20%20%20%20setTimeout(()%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20if%20(subs)%20%7B%0A%20%20%20%20%20%20%20%20%20%20setProgress(progress%20%2B%200.1)%3B%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%2C%20100)%3B%0A%20%20%20%20%7D%0A%20%20%20%20return%20()%20%3D%3E%20%7B%0A%20%20%20%20%20%20subs%20%3D%20false%3B%0A%20%20%20%20%7D%3B%0A%20%20%7D%2C%20%5Bprogress%5D)%3B%0A%0A%20%20return%20(%0A%20%20%20%20%3CView%3E%0A%20%20%20%20%20%20%3CView%0A%20%20%20%20%20%20%20%20style%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20margin%3A%2010%2C%0A%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%3CText%3EIndeterminate%20Variant%20%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%3CLinearProgress%20style%3D%7B%7B%20marginVertical%3A%2010%20%7D%7D%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CText%3EIndeterminate%20Variant%20with%20color%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%3CLinearProgress%20style%3D%7B%7B%20marginVertical%3A%2010%20%7D%7D%20color%3D%22red%22%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CText%3EDeterminate%20Variant%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%3CLinearProgress%0A%20%20%20%20%20%20%20%20%20%20style%3D%7B%7B%20marginVertical%3A%2010%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20value%3D%7Bprogress%7D%0A%20%20%20%20%20%20%20%20%20%20variant%3D%22determinate%22%0A%20%20%20%20%20%20%20%20%2F%3E%0A%0A%20%20%20%20%20%20%20%20%3CButton%0A%20%20%20%20%20%20%20%20%20%20disabled%3D%7Bprogress%20%3E%200%7D%0A%20%20%20%20%20%20%20%20%20%20onPress%3D%7B()%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20setProgress(0.00001)%3B%0A%20%20%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20title%3D%7B'Start%20Progress'%7D%0A%20%20%20%20%20%20%20%20%20%20containerStyle%3D%7B%7B%20margin%3A%2010%20%7D%7D%0A%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CButton%0A%20%20%20%20%20%20%20%20%20%20disabled%3D%7Bprogress%20%3D%3D%3D%200%7D%0A%20%20%20%20%20%20%20%20%20%20onPress%3D%7B()%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20setProgress(0)%3B%0A%20%20%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20title%3D%7B'Restart'%7D%0A%20%20%20%20%20%20%20%20%20%20containerStyle%3D%7B%7B%20margin%3A%2010%20%7D%7D%0A%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%3C%2FView%3E%0A%20%20)%3B%0A%7D%3B%0A%0Aexport%20default%20LinearProgressAPI%3B","data-snack-dependencies":"@rneui/themed,@rneui/base","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}))}c.isMDXComponent=!0},82110:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>u,contentTitle:()=>g,default:()=>y,frontMatter:()=>o,metadata:()=>p,toc:()=>m});var a=t(9668),n=t(21367),i=(t(96540),t(15680)),s=t(21411),l=["components"],o={},g=void 0,p={unversionedId:"main/usage/LinearProgress/LinearProgress",id:"version-4.0.0-beta.0/main/usage/LinearProgress/LinearProgress",title:"LinearProgress",description:"",source:"@site/versioned_docs/version-4.0.0-beta.0/main/usage/LinearProgress/LinearProgress.md",sourceDirName:"main/usage/LinearProgress",slug:"/main/usage/LinearProgress/",permalink:"/react-native-elements-next/docs/4.0.0-beta.0/main/usage/LinearProgress/",draft:!1,editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/versioned_docs/version-4.0.0-beta.0/main/usage/LinearProgress/LinearProgress.md",tags:[],version:"4.0.0-beta.0",frontMatter:{}},u={},m=[],d={toc:m},c="wrapper";function y(e){var r=e.components,t=(0,n.A)(e,l);return(0,i.yg)(c,(0,a.A)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,i.yg)(s.default,{mdxType:"Snack"}))}y.isMDXComponent=!0},91113:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>u,contentTitle:()=>g,default:()=>y,frontMatter:()=>o,metadata:()=>p,toc:()=>m});var a=t(9668),n=t(21367),i=(t(96540),t(15680)),s=t(82110),l=["components"],o={id:"linearprogress",title:"LinearProgress",slug:"/linearprogress"},g=void 0,p={unversionedId:"main/linearprogress",id:"version-4.0.0-beta.0/main/linearprogress",title:"LinearProgress",description:"Progress indicators inform users about the status of ongoing processes, such as loading an app, submitting a form, or saving updates.",source:"@site/versioned_docs/version-4.0.0-beta.0/main/LinearProgress.md",sourceDirName:"main",slug:"/linearprogress",permalink:"/react-native-elements-next/docs/4.0.0-beta.0/linearprogress",draft:!1,editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/versioned_docs/version-4.0.0-beta.0/main/LinearProgress.md",tags:[],version:"4.0.0-beta.0",frontMatter:{id:"linearprogress",title:"LinearProgress",slug:"/linearprogress"},sidebar:"docs",previous:{title:"Input",permalink:"/react-native-elements-next/docs/4.0.0-beta.0/input"},next:{title:"ListItem",permalink:"/react-native-elements-next/docs/4.0.0-beta.0/listitem"}},u={},m=[{value:"Usage",id:"usage",level:2},{value:"Props",id:"props",level:2},{value:"LinearProgress",id:"linearprogress",level:3},{value:"Reference",id:"reference",level:2},{value:"LinearProgress",id:"linearprogress-1",level:3},{value:"animation",id:"animation",level:4},{value:"color",id:"color",level:4},{value:"style",id:"style",level:4},{value:"trackColor",id:"trackcolor",level:4},{value:"value",id:"value",level:4},{value:"variant",id:"variant",level:4}],d={toc:m},c="wrapper";function y(e){var r=e.components,t=(0,n.A)(e,l);return(0,i.yg)(c,(0,a.A)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,i.yg)("p",null,"Progress indicators inform users about the status of ongoing processes, such as loading an app, submitting a form, or saving updates."),(0,i.yg)("p",null,"They communicate an app\u2019s state and indicate available actions, such as whether users can navigate away from the current screen."),(0,i.yg)("p",null,"Also receives all ",(0,i.yg)("a",{parentName:"p",href:"https://reactnative.dev/docs/view#props"},"View")," props"),(0,i.yg)("h2",{id:"usage"},"Usage"),(0,i.yg)(s.default,{mdxType:"Usage"}),(0,i.yg)("hr",null),(0,i.yg)("h2",{id:"props"},"Props"),(0,i.yg)("h3",{id:"linearprogress"},"LinearProgress"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"#animation"},"animation")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"#color"},"color")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"#style"},"style")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"#trackcolor"},"trackColor")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"#value"},"value")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"#variant"},"variant"))),(0,i.yg)("h2",{id:"reference"},"Reference"),(0,i.yg)("h3",{id:"linearprogress-1"},"LinearProgress"),(0,i.yg)("h4",{id:"animation"},"animation"),(0,i.yg)("p",null,"Animation duration"),(0,i.yg)("table",null,(0,i.yg)("thead",{parentName:"table"},(0,i.yg)("tr",{parentName:"thead"},(0,i.yg)("th",{parentName:"tr",align:null},"Type"),(0,i.yg)("th",{parentName:"tr",align:null},"Default"))),(0,i.yg)("tbody",{parentName:"table"},(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"boolean or { duration?: number; }"),(0,i.yg)("td",{parentName:"tr",align:null},"{ duration: 2000 }")))),(0,i.yg)("hr",null),(0,i.yg)("h4",{id:"color"},"color"),(0,i.yg)("p",null,"Color for linear progress."),(0,i.yg)("table",null,(0,i.yg)("thead",{parentName:"table"},(0,i.yg)("tr",{parentName:"thead"},(0,i.yg)("th",{parentName:"tr",align:null},"Type"),(0,i.yg)("th",{parentName:"tr",align:null},"Default"))),(0,i.yg)("tbody",{parentName:"table"},(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"string"),(0,i.yg)("td",{parentName:"tr",align:null},"secondary")))),(0,i.yg)("hr",null),(0,i.yg)("h4",{id:"style"},"style"),(0,i.yg)("p",null,"Add additional styling for linear progress component."),(0,i.yg)("table",null,(0,i.yg)("thead",{parentName:"table"},(0,i.yg)("tr",{parentName:"thead"},(0,i.yg)("th",{parentName:"tr",align:null},"Type"),(0,i.yg)("th",{parentName:"tr",align:null},"Default"))),(0,i.yg)("tbody",{parentName:"table"},(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"View style(Object)"),(0,i.yg)("td",{parentName:"tr",align:null},"None")))),(0,i.yg)("hr",null),(0,i.yg)("h4",{id:"trackcolor"},"trackColor"),(0,i.yg)("p",null,"Track color for linear progress."),(0,i.yg)("table",null,(0,i.yg)("thead",{parentName:"table"},(0,i.yg)("tr",{parentName:"thead"},(0,i.yg)("th",{parentName:"tr",align:null},"Type"),(0,i.yg)("th",{parentName:"tr",align:null},"Default"))),(0,i.yg)("tbody",{parentName:"table"},(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"string"),(0,i.yg)("td",{parentName:"tr",align:null},"None")))),(0,i.yg)("hr",null),(0,i.yg)("h4",{id:"value"},"value"),(0,i.yg)("p",null,"The value of the progress indicator for the determinate variant. Value between 0 and 1."),(0,i.yg)("table",null,(0,i.yg)("thead",{parentName:"table"},(0,i.yg)("tr",{parentName:"thead"},(0,i.yg)("th",{parentName:"tr",align:null},"Type"),(0,i.yg)("th",{parentName:"tr",align:null},"Default"))),(0,i.yg)("tbody",{parentName:"table"},(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"number"),(0,i.yg)("td",{parentName:"tr",align:null},"None")))),(0,i.yg)("hr",null),(0,i.yg)("h4",{id:"variant"},"variant"),(0,i.yg)("p",null,"Type of button."),(0,i.yg)("table",null,(0,i.yg)("thead",{parentName:"table"},(0,i.yg)("tr",{parentName:"thead"},(0,i.yg)("th",{parentName:"tr",align:null},"Type"),(0,i.yg)("th",{parentName:"tr",align:null},"Default"))),(0,i.yg)("tbody",{parentName:"table"},(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},'"determinate" or "indeterminate"'),(0,i.yg)("td",{parentName:"tr",align:null},"value === undefined ? 'indeterminate' : 'determinate'")))),(0,i.yg)("hr",null))}y.isMDXComponent=!0}}]);