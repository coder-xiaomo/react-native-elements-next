"use strict";(self.webpackChunkrne_website=self.webpackChunkrne_website||[]).push([[49768],{2333:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>p,default:()=>g,frontMatter:()=>m,metadata:()=>u,toc:()=>y});var r=n(9668),o=n(21367),a=n(96540),i=n(15680),c={primary:"#2089dc",secondary:"#ca71eb",background:"#ffffff",white:"#ffffff",black:"#242424",grey0:"#393e42",grey1:"#43484d",grey2:"#5e6977",grey3:"#86939e",grey4:"#bdc6cf",grey5:"#e1e8ee",greyOutline:"#bbb",searchBg:"#303337",success:"#52c41a",error:"#ff190c",warning:"#faad14",disabled:"hsl(208, 8%, 90%)"},l=function(){return a.createElement("div",{style:{display:"flex",gap:"20px",flexWrap:"wrap"}},Object.entries(c).map((function(e){var t=e[0],n=e[1];return a.createElement("div",null,a.createElement("div",{style:{background:n,width:"80px",height:"70px",display:"block",borderRadius:"6px"}}),a.createElement("small",null,t))})))},s=["components"],m={title:"Color",sidebar_position:1},p=void 0,u={unversionedId:"customization/color",id:"version-4.0.0-rc.1/customization/color",title:"Color",description:"The Theme Object",source:"@site/versioned_docs/version-4.0.0-rc.1/customization/color.mdx",sourceDirName:"customization",slug:"/customization/color",permalink:"/docs/4.0.0-rc.1/customization/color",draft:!1,editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/versioned_docs/version-4.0.0-rc.1/customization/color.mdx",tags:[],version:"4.0.0-rc.1",sidebarPosition:1,frontMatter:{title:"Color",sidebar_position:1},sidebar:"docs",previous:{title:"Overview",permalink:"/docs/4.0.0-rc.1/customizing"},next:{title:"ThemeProvider",permalink:"/docs/4.0.0-rc.1/customization/theming"}},d={},y=[{value:"The Theme Object",id:"the-theme-object",level:3},{value:"Using the respective platform&#39;s native colors",id:"using-the-respective-platforms-native-colors",level:3}],h={toc:y},f="wrapper";function g(e){var t=e.components,n=(0,o.A)(e,s);return(0,i.yg)(f,(0,r.A)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("h3",{id:"the-theme-object"},"The Theme Object"),(0,i.yg)("p",null,"By default, the theme object looks like this. You can add whatever values you\nwant to the theme, and they will be merged with the default. By default the\nplatform colors aren't used anywhere. These native colors are added for\nyour convenience."),(0,i.yg)(l,{mdxType:"Palette"}),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-tsx"},"interface theme {\n  colors: {\n    primary;\n    secondary;\n    background;\n    white;\n    black;\n    grey0;\n    grey1;\n    grey2;\n    grey3;\n    grey4;\n    grey5;\n    greyOutline;\n    searchBg;\n    success;\n    error;\n    warning;\n    divider;\n    platform: {\n      ios: {\n        primary;\n        secondary;\n        grey;\n        searchBg;\n        success;\n        error;\n        warning;\n      };\n      android: {\n        // Same as ios\n      };\n      web: {\n        // Same as ios\n      };\n    };\n  };\n}\n")),(0,i.yg)("p",null,"Setting styles in the theme is as simple as using the name of the component, as\na key and the props you want to change as the value."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-jsx"},"import { ThemeProvider, createTheme } from '@rneui/themed';\n\nconst theme = createTheme({\n  lightColors: {\n    primary: '#e7e7e8',\n  },\n  darkColors: {\n    primary: '#000',\n  },\n});\n\nconst App = () => {\n  return (\n    <ThemeProvider theme={theme}>\n      {/* ... */}\n      {/* ... */}\n    </ThemeProvider>\n  );\n};\n")),(0,i.yg)("h3",{id:"using-the-respective-platforms-native-colors"},"Using the respective platform's native colors"),(0,i.yg)("p",null,"You may want to style your app using the native color palette. You can do this\nusing the ",(0,i.yg)("inlineCode",{parentName:"p"},"colors")," object and the ",(0,i.yg)("inlineCode",{parentName:"p"},"Platform")," API."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-jsx"},"import { Platform } from 'react-native';\nimport { Button, lightColors, createTheme, ThemeProvider } from '@rneui/themed';\n\nconst theme = createTheme({\n  lightColors: {\n    ...Platform.select({\n      default: lightColors.platform.android,\n      ios: lightColors.platform.ios,\n    }),\n  },\n});\n\nconst App = () => {\n  return (\n    <ThemeProvider theme={theme}>\n      {/* This button's color will now be the default iOS / Android blue. */}\n      <Button title=\"My Button\" />\n    </ThemeProvider>\n  );\n};\n")),(0,i.yg)("hr",null))}g.isMDXComponent=!0},15680:(e,t,n)=>{n.d(t,{xA:()=>m,yg:()=>y});var r=n(96540);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),p=s(n),d=o,y=p["".concat(l,".").concat(d)]||p[d]||u[d]||a;return n?r.createElement(y,i(i({ref:t},m),{},{components:n})):r.createElement(y,i({ref:t},m))}));function y(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[p]="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);