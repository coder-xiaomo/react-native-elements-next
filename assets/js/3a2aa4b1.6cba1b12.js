"use strict";(self.webpackChunkrne_website=self.webpackChunkrne_website||[]).push([[6420,22885],{15680:(e,r,t)=>{t.d(r,{xA:()=>l,yg:()=>d});var n=t(96540);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function s(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?s(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=n.createContext({}),u=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},l=function(e){var r=u(e.components);return n.createElement(c.Provider,{value:r},e.children)},m="mdxType",g={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},p=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,s=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),m=u(t),p=a,d=m["".concat(c,".").concat(p)]||m[p]||g[p]||s;return t?n.createElement(d,o(o({ref:r},l),{},{components:t})):n.createElement(d,o({ref:r},l))}));function d(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var s=t.length,o=new Array(s);o[0]=p;var i={};for(var c in r)hasOwnProperty.call(r,c)&&(i[c]=r[c]);i.originalType=e,i[m]="string"==typeof e?e:a,o[1]=i;for(var u=2;u<s;u++)o[u]=t[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}p.displayName="MDXCreateElement"},21411:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>c,default:()=>d,frontMatter:()=>i,metadata:()=>u,toc:()=>m});var n=t(9668),a=t(21367),s=(t(96540),t(15680)),o=["components"],i={},c=void 0,u={unversionedId:"main/usage/LinearProgress/snack/index",id:"version-4.0.0-beta.0/main/usage/LinearProgress/snack/index",title:"index",description:"",source:"@site/versioned_docs/version-4.0.0-beta.0/main/usage/LinearProgress/snack/index.md",sourceDirName:"main/usage/LinearProgress/snack",slug:"/main/usage/LinearProgress/snack/",permalink:"/react-native-elements-next/docs/4.0.0-beta.0/main/usage/LinearProgress/snack/",draft:!1,editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/versioned_docs/version-4.0.0-beta.0/main/usage/LinearProgress/snack/index.md",tags:[],version:"4.0.0-beta.0",frontMatter:{}},l={},m=[],g={toc:m},p="wrapper";function d(e){var r=e.components,t=(0,a.A)(e,o);return(0,s.yg)(p,(0,n.A)({},g,t,{components:r,mdxType:"MDXLayout"}),(0,s.yg)("div",{className:"snack-player","data-snack-name":"RNE Linear Progress","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20View%2C%20Text%20%7D%20from%20'react-native'%3B%0Aimport%20%7B%20Button%2C%20LinearProgress%20%7D%20from%20'react-native-elements'%3B%0A%0Aconst%20LinearProgressAPI%3A%20React.FunctionComponent%20%3D%20()%20%3D%3E%20%7B%0A%20%20const%20%5Bprogress%2C%20setProgress%5D%20%3D%20React.useState(0)%3B%0A%0A%20%20React.useEffect(()%20%3D%3E%20%7B%0A%20%20%20%20let%20subs%20%3D%20true%3B%0A%20%20%20%20if%20(progress%20%3C%201%20%26%26%20progress%20!%3D%3D%200)%20%7B%0A%20%20%20%20%20%20setTimeout(()%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20if%20(subs)%20%7B%0A%20%20%20%20%20%20%20%20%20%20setProgress(progress%20%2B%200.1)%3B%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%2C%20100)%3B%0A%20%20%20%20%7D%0A%20%20%20%20return%20()%20%3D%3E%20%7B%0A%20%20%20%20%20%20subs%20%3D%20false%3B%0A%20%20%20%20%7D%3B%0A%20%20%7D%2C%20%5Bprogress%5D)%3B%0A%0A%20%20return%20(%0A%20%20%20%20%3CView%3E%0A%20%20%20%20%20%20%3CView%0A%20%20%20%20%20%20%20%20style%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20margin%3A%2010%2C%0A%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%3CText%3EIndeterminate%20Variant%20%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%3CLinearProgress%20style%3D%7B%7B%20marginVertical%3A%2010%20%7D%7D%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CText%3EIndeterminate%20Variant%20with%20color%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%3CLinearProgress%20style%3D%7B%7B%20marginVertical%3A%2010%20%7D%7D%20color%3D%22red%22%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CText%3EDeterminate%20Variant%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%3CLinearProgress%0A%20%20%20%20%20%20%20%20%20%20style%3D%7B%7B%20marginVertical%3A%2010%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20value%3D%7Bprogress%7D%0A%20%20%20%20%20%20%20%20%20%20variant%3D%22determinate%22%0A%20%20%20%20%20%20%20%20%2F%3E%0A%0A%20%20%20%20%20%20%20%20%3CButton%0A%20%20%20%20%20%20%20%20%20%20disabled%3D%7Bprogress%20%3E%200%7D%0A%20%20%20%20%20%20%20%20%20%20onPress%3D%7B()%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20setProgress(0.00001)%3B%0A%20%20%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20title%3D%7B'Start%20Progress'%7D%0A%20%20%20%20%20%20%20%20%20%20containerStyle%3D%7B%7B%20margin%3A%2010%20%7D%7D%0A%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CButton%0A%20%20%20%20%20%20%20%20%20%20disabled%3D%7Bprogress%20%3D%3D%3D%200%7D%0A%20%20%20%20%20%20%20%20%20%20onPress%3D%7B()%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20setProgress(0)%3B%0A%20%20%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20title%3D%7B'Restart'%7D%0A%20%20%20%20%20%20%20%20%20%20containerStyle%3D%7B%7B%20margin%3A%2010%20%7D%7D%0A%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%3C%2FView%3E%0A%20%20)%3B%0A%7D%3B%0A%0Aexport%20default%20LinearProgressAPI%3B","data-snack-dependencies":"@rneui/themed,@rneui/base","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}))}d.isMDXComponent=!0},82110:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>m,contentTitle:()=>u,default:()=>A,frontMatter:()=>c,metadata:()=>l,toc:()=>g});var n=t(9668),a=t(21367),s=(t(96540),t(15680)),o=t(21411),i=["components"],c={},u=void 0,l={unversionedId:"main/usage/LinearProgress/LinearProgress",id:"version-4.0.0-beta.0/main/usage/LinearProgress/LinearProgress",title:"LinearProgress",description:"",source:"@site/versioned_docs/version-4.0.0-beta.0/main/usage/LinearProgress/LinearProgress.md",sourceDirName:"main/usage/LinearProgress",slug:"/main/usage/LinearProgress/",permalink:"/react-native-elements-next/docs/4.0.0-beta.0/main/usage/LinearProgress/",draft:!1,editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/versioned_docs/version-4.0.0-beta.0/main/usage/LinearProgress/LinearProgress.md",tags:[],version:"4.0.0-beta.0",frontMatter:{}},m={},g=[],p={toc:g},d="wrapper";function A(e){var r=e.components,t=(0,a.A)(e,i);return(0,s.yg)(d,(0,n.A)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,s.yg)(o.default,{mdxType:"Snack"}))}A.isMDXComponent=!0}}]);