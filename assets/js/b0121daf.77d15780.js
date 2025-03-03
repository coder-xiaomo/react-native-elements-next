"use strict";(self.webpackChunkrne_website=self.webpackChunkrne_website||[]).push([[49465],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(n),d=o,b=u["".concat(s,".").concat(d)]||u[d]||m[d]||a;return n?r.createElement(b,l(l({ref:t},p),{},{components:n})):r.createElement(b,l({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var c=2;c<a;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},14342:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>m});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),l=["components"],i={title:"Common Pitfalls",sidebar_position:4},s=void 0,c={unversionedId:"customization/pitfall",id:"version-4.0.0-rc.7/customization/pitfall",title:"Common Pitfalls",description:"This section outlines some common pitfalls when using Theming.",source:"@site/versioned_docs/version-4.0.0-rc.7/customization/4.pitfall.mdx",sourceDirName:"customization",slug:"/customization/pitfall",permalink:"/docs/4.0.0-rc.7/customization/pitfall",draft:!1,editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/versioned_docs/version-4.0.0-rc.7/customization/4.pitfall.mdx",tags:[],version:"4.0.0-rc.7",sidebarPosition:4,frontMatter:{title:"Common Pitfalls",sidebar_position:4},sidebar:"docs",previous:{title:"Extending Theme",permalink:"/docs/4.0.0-rc.7/customization/extending"},next:{title:"AirbnbRating",permalink:"/docs/4.0.0-rc.7/components/airbnbrating"}},p={},m=[{value:"My local styles aren&#39;t working with the theme",id:"my-local-styles-arent-working-with-the-theme",level:4},{value:"Example 1",id:"example-1",level:5},{value:"Example 2",id:"example-2",level:5},{value:"Example 3",id:"example-3",level:5}],u={toc:m};function d(e){var t=e.components,n=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This section outlines some common pitfalls when using Theming."),(0,a.kt)("h4",{id:"my-local-styles-arent-working-with-the-theme"},"My local styles aren't working with the theme"),(0,a.kt)("p",null,"It's important to understand that the ",(0,a.kt)("inlineCode",{parentName:"p"},"ThemeProvider")," works by merging your local(external) styles with those set on the theme.\nThis means that in both cases ",(0,a.kt)("strong",{parentName:"p"},"the type of these styles must be the same"),"."),(0,a.kt)("h5",{id:"example-1"},"Example 1"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"const theme = {\n  Button: {\n    containerStyle: {\n      marginTop: 10;\n    }\n  }\n}\n\n<Button\n  containerStyle={{ backgroundColor: 'blue' }}\n/>\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u2705 Works"),(0,a.kt)("p",{parentName:"blockquote"},"In both cases the style is an ",(0,a.kt)("inlineCode",{parentName:"p"},"object"))),(0,a.kt)("br",null),(0,a.kt)("h5",{id:"example-2"},"Example 2"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"const theme = {\n  Button: {\n    containerStyle: [\n      {\n        marginTop: 10;\n      }\n    ]\n  }\n}\n\n<Button containerStyle={[{ backgroundColor: 'blue' }]} />\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u2705 Works"),(0,a.kt)("p",{parentName:"blockquote"},"In both cases the style is an ",(0,a.kt)("inlineCode",{parentName:"p"},"array"))),(0,a.kt)("br",null),(0,a.kt)("h5",{id:"example-3"},"Example 3"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"const theme = {\n  Button: {\n    containerStyle: {\n      marginTop: 10;\n    }\n  }\n}\n\n<Button containerStyle={[{ backgroundColor: 'blue' }]} />\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u2705 Works"),(0,a.kt)("p",{parentName:"blockquote"},"In both cases the style is an ",(0,a.kt)("inlineCode",{parentName:"p"},"array"))))}d.isMDXComponent=!0}}]);