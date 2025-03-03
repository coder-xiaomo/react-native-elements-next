"use strict";(self.webpackChunkrne_website=self.webpackChunkrne_website||[]).push([[89953],{15680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>h});var r=n(96540);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var m=r.createContext({}),l=function(e){var t=r.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(m.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,m=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),d=o,h=u["".concat(m,".").concat(d)]||u[d]||c[d]||i;return n?r.createElement(h,a(a({ref:t},p),{},{components:n})):r.createElement(h,a({ref:t},p))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var s={};for(var m in t)hasOwnProperty.call(t,m)&&(s[m]=t[m]);s.originalType=e,s[u]="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},70625:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>m,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>u});var r=n(9668),o=n(21367),i=(n(96540),n(15680)),a=["components"],s={title:"Theme Provider",sidebar_position:1},m=void 0,l={unversionedId:"customization/themprovider",id:"version-4.0.0-rc.3/customization/themprovider",title:"Theme Provider",description:"The previous solution works great for only one component, but imagine having to",source:"@site/versioned_docs/version-4.0.0-rc.3/customization/1.themprovider.mdx",sourceDirName:"customization",slug:"/customization/themprovider",permalink:"/docs/4.0.0-rc.3/customization/themprovider",draft:!1,editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/versioned_docs/version-4.0.0-rc.3/customization/1.themprovider.mdx",tags:[],version:"4.0.0-rc.3",sidebarPosition:1,frontMatter:{title:"Theme Provider",sidebar_position:1},sidebar:"docs",previous:{title:"Overview",permalink:"/docs/4.0.0-rc.3/customizing"},next:{title:"Theme Object",permalink:"/docs/4.0.0-rc.3/customization/theme object"}},p={},u=[{value:"use-theme hook",id:"use-theme-hook",level:3},{value:"use-theme-mode hook",id:"use-theme-mode-hook",level:3}],c={toc:u},d="wrapper";function h(e){var t=e.components,n=(0,o.A)(e,a);return(0,i.yg)(d,(0,r.A)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("p",null,"The previous solution works great for only one component, but imagine having to\ndo this for every component you want custom styles for. That could get a bit\ntedious to manage. Thankfully, there's a better way to do this. React Native\nElements ships with a 3 utilities for large-scale theming."),(0,i.yg)("p",null,"Firstly you'll want to set up your ",(0,i.yg)("inlineCode",{parentName:"p"},"ThemeProvider"),"."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-jsx"},'import { ThemeProvider, Button, createTheme } from \'@rneui/themed\';\n\nconst theme = createTheme({\n  Button: {\n    raised: true,\n  },\n});\n\n// Your App\nconst App = () => {\n  return (\n    <ThemeProvider theme={theme}>\n      <Button title="My Button" />\n      <Button title="My 2nd Button" />\n    </ThemeProvider>\n  );\n};\n')),(0,i.yg)("p",null,"The example above achieves the same goals as the first example \u2014 apply the same\nstyles to multiple instances of ",(0,i.yg)("inlineCode",{parentName:"p"},"Button")," in the app. However this example\napplies the ",(0,i.yg)("inlineCode",{parentName:"p"},"raised")," prop to every instance of ",(0,i.yg)("inlineCode",{parentName:"p"},"Button")," inside the component\ntree under ",(0,i.yg)("inlineCode",{parentName:"p"},"ThemeProvider"),". Both of these buttons will have the ",(0,i.yg)("inlineCode",{parentName:"p"},"raised")," prop\nset to true."),(0,i.yg)("p",null,"This is extremely convenient and is made possible through\n",(0,i.yg)("a",{parentName:"p",href:"https://reactjs.org/docs/context.html"},"React's Context API"),"."),(0,i.yg)("hr",null),(0,i.yg)("h3",{id:"use-theme-hook"},"use-theme hook"),(0,i.yg)("p",null,"Hook returns ",(0,i.yg)("inlineCode",{parentName:"p"},"theme"),", ",(0,i.yg)("inlineCode",{parentName:"p"},"updateTheme")," & ",(0,i.yg)("inlineCode",{parentName:"p"},"replaceTheme")," from ThemeProvider context or default theme if you did not wrap application with ThemeProvider."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-tsx"},"import { useTheme } from '@rneui/themed';\n\nfunction Demo() {\n  const { theme } = useTheme();\n  return <View style={{ background: theme.colors.primary }} />;\n}\n")),(0,i.yg)("hr",null),(0,i.yg)("h3",{id:"use-theme-mode-hook"},"use-theme-mode hook"),(0,i.yg)("p",null,"You can get current theme mode (light or dark) and update it using setMode function from useThemeMode hook."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-tsx"},"import { useThemeMode } from '@rneui/themed';\n\nfunction Demo() {\n  const { mode, setMode } = useThemeMode();\n\n  return <Button onPress={() => setMode('dark')} title={mode} />;\n}\n")))}h.isMDXComponent=!0}}]);