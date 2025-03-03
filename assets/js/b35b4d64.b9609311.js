"use strict";(self.webpackChunkrne_website=self.webpackChunkrne_website||[]).push([[64581],{3527:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>s,default:()=>d,frontMatter:()=>l,metadata:()=>p,toc:()=>c});var o=n(9668),r=n(21367),i=(n(96540),n(15680)),a=["components"],l={title:"Overview",sidebar_position:0,slug:"/customizing"},s=void 0,p={unversionedId:"customization/index",id:"version-4.0.0-rc.7/customization/index",title:"Overview",description:"Congrats! You've installed React Native Elements and your immediate question",source:"@site/versioned_docs/version-4.0.0-rc.7/customization/0.index.mdx",sourceDirName:"customization",slug:"/customizing",permalink:"/react-native-elements-next/docs/4.0.0-rc.7/customizing",draft:!1,editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/versioned_docs/version-4.0.0-rc.7/customization/0.index.mdx",tags:[],version:"4.0.0-rc.7",sidebarPosition:0,frontMatter:{title:"Overview",sidebar_position:0,slug:"/customizing"},sidebar:"docs",previous:{title:"Troubleshooting",permalink:"/react-native-elements-next/docs/4.0.0-rc.7/troubleshooting"},next:{title:"ThemeProvider",permalink:"/react-native-elements-next/docs/4.0.0-rc.7/customization/themeprovider"}},m={},c=[{value:"Colors",id:"colors",level:2},{value:"Using the respective platform&#39;s native colors",id:"using-the-respective-platforms-native-colors",level:3},{value:"Component Styles",id:"component-styles",level:2},{value:"Theming Components",id:"theming-components",level:2},{value:"Using Composition",id:"using-composition",level:3},{value:"Using ThemeProvider",id:"using-themeprovider",level:3},{value:"Order of Styles",id:"order-of-styles",level:3},{value:"Internal",id:"internal",level:4},{value:"Theme",id:"theme",level:4},{value:"External",id:"external",level:4}],u={toc:c},h="wrapper";function d(e){var t=e.components,n=(0,r.A)(e,a);return(0,i.yg)(h,(0,o.A)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("p",null,"Congrats! You've installed React Native Elements and your immediate question\ngoes something like this:"),(0,i.yg)("blockquote",null,(0,i.yg)("p",{parentName:"blockquote"},"So umm, how do I change how it looks?")),(0,i.yg)("p",null,"Great question! A UI Kit wouldn't be that useful if the apps everyone built\nlooked the same right? For this case React Native Elements provide a number of\nprops on each component to enable you to style them how you want."),(0,i.yg)("h2",{id:"colors"},"Colors"),(0,i.yg)("p",null,"Setting styles in the theme is as simple as using the name of the component, as\na key and the props you want to change as the value."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-jsx"},"import { ThemeProvider, createTheme } from '@rneui/themed';\n\nconst theme = createTheme({\n  lightColors: {\n    primary: '#e7e7e8',\n  },\n  darkColors: {\n    primary: '#000',\n  },\n  mode: 'light',\n});\n\nconst App = () => {\n  return <ThemeProvider theme={theme}>{/* ... */}</ThemeProvider>;\n};\n")),(0,i.yg)("h3",{id:"using-the-respective-platforms-native-colors"},"Using the respective platform's native colors"),(0,i.yg)("p",null,"You may want to style your app using the native color palette. You can do this\nusing the ",(0,i.yg)("inlineCode",{parentName:"p"},"colors")," object and the ",(0,i.yg)("inlineCode",{parentName:"p"},"Platform")," API."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-jsx"},"import { Platform } from 'react-native';\nimport { Button, lightColors, createTheme, ThemeProvider } from '@rneui/themed';\n\nconst theme = createTheme({\n  lightColors: {\n    ...Platform.select({\n      default: lightColors.platform.android,\n      ios: lightColors.platform.ios,\n    }),\n  },\n});\n\nconst App = () => {\n  return (\n    <ThemeProvider theme={theme}>\n      {/* This button's color will now be the default iOS / Android blue. */}\n      <Button title=\"My Button\" />\n    </ThemeProvider>\n  );\n};\n")),(0,i.yg)("hr",null),(0,i.yg)("h2",{id:"component-styles"},"Component Styles"),(0,i.yg)("p",null,(0,i.yg)("em",{parentName:"p"},"Every")," component from React Native Elements has a container around it. The\ncontainer is just a traditional ",(0,i.yg)("inlineCode",{parentName:"p"},"<View />")," from react native that has some\nstyling on it. This default styling prevents components from colliding with each\nother. If you want to change how two components react to each on the screen your\nfirst stop should be the ",(0,i.yg)("inlineCode",{parentName:"p"},"containerStyle")," prop."),(0,i.yg)("p",null,"Similar to ",(0,i.yg)("inlineCode",{parentName:"p"},"containerStyle"),", components may provide their custom style props\nlike ",(0,i.yg)("inlineCode",{parentName:"p"},"buttonStyle"),", ",(0,i.yg)("inlineCode",{parentName:"p"},"titleStyle")," etc. Always refer to the documentation for the\ncomponent to find out which style props it provides."),(0,i.yg)("h2",{id:"theming-components"},"Theming Components"),(0,i.yg)("p",null,"While component styles are great for single use, you may want to have the same\nstyling for every instance of a component. For example, you may want all your\nbuttons to be blue or have the same font. Here are some ways to reuse styles\nwith React Native Elements."),(0,i.yg)("h3",{id:"using-composition"},"Using Composition"),(0,i.yg)("p",null,"With this approach, we create one component with the styles we want and use that\ninstead of the built-in component."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-tsx"},"import React from 'react';\nimport { Button } from '@rneui/themed';\n\nconst RaisedButton = (props) => <Button raised {...props} />;\n\n// Your App\nconst App = () => {\n  return <RaisedButton title=\"Yea\" />;\n};\n")),(0,i.yg)("p",null,"If we want to use a button that's raised in our app, we can use ",(0,i.yg)("inlineCode",{parentName:"p"},"RaisedButton"),"\ninstead of using ",(0,i.yg)("inlineCode",{parentName:"p"},"Button"),". This component still accepts all the props from the\nnormal ",(0,i.yg)("inlineCode",{parentName:"p"},"Button")," just that it has the ",(0,i.yg)("inlineCode",{parentName:"p"},"raised")," prop set by default."),(0,i.yg)("hr",null),(0,i.yg)("h3",{id:"using-themeprovider"},"Using ThemeProvider"),(0,i.yg)("p",null,"The previous solution works great for only one component, but imagine having to\ndo this for every component you want custom styles for. That could get a bit\ntedious to manage. Thankfully, there's a better way to do this."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-jsx"},"import { ThemeProvider, Button, createTheme } from '@rneui/themed';\n\nconst theme = createTheme({\n  components: {\n    [themeKey]: {\n      // ... props\n    },\n  },\n});\n\nconst App = () => {\n  return <ThemeProvider theme={theme}>{/* ... */}</ThemeProvider>;\n};\n")),(0,i.yg)("admonition",{type:"note"},(0,i.yg)("p",{parentName:"admonition"},"If you do not specify ",(0,i.yg)("inlineCode",{parentName:"p"},"theme")," in ThemeProvider, it would use ",(0,i.yg)("a",{parentName:"p",href:"./customization/theme_object#default-light-colors"},"defaultTheme"))),(0,i.yg)("h3",{id:"order-of-styles"},"Order of Styles"),(0,i.yg)("p",null,"What happens now if we want a ",(0,i.yg)("inlineCode",{parentName:"p"},"Button")," that isn't raised? To do that we have to understand the order in which styles are applied."),(0,i.yg)("blockquote",null,(0,i.yg)("p",{parentName:"blockquote"},"Internal > Theme > External")),(0,i.yg)("h4",{id:"internal"},"Internal"),(0,i.yg)("p",null,"Internal components styles are the styles which are defined in the component\nfile. These are applied first."),(0,i.yg)("h4",{id:"theme"},"Theme"),(0,i.yg)("p",null,"Theme styles are the values that are set by the ThemeProvider If present, these\nare applied second."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-tsx"},"import { ThemeProvider, Button, createTheme } from '@rneui/themed';\n\nconst theme = createTheme({\n  components: {\n    Button: {\n      titleStyle: {\n        color: 'red',\n      },\n    },\n  },\n});\n\nconst App = () => {\n  return (\n    <ThemeProvider theme={theme}>\n      <Button title=\"My Button\" />\n    </ThemeProvider>\n  );\n};\n")),(0,i.yg)("p",null,"This will override the white color for the title set in the component's style."),(0,i.yg)("h4",{id:"external"},"External"),(0,i.yg)("p",null,"External styles are the styles which are set through the component props. These\nare applied last and have the highest precedence."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-tsx"},"import { ThemeProvider, Button, createTheme } from '@rneui/themed';\n\nconst theme = createTheme({\n  components: {\n    Button: {\n      titleStyle: {\n        color: 'red',\n      },\n    },\n  },\n});\n\nconst App = () => {\n  return (\n    <ThemeProvider theme={theme}>\n      <Button title=\"My Button\" titleStyle={{ color: 'pink' }} />\n    </ThemeProvider>\n  );\n};\n")),(0,i.yg)("p",null,"This will override both the white color for the title set in the component's\nstyle as well as the red color set in the theme."),(0,i.yg)("admonition",{type:"info"},(0,i.yg)("p",{parentName:"admonition"},"Remember if you want to override the values set in the theme you can always use component props.")))}d.isMDXComponent=!0},15680:(e,t,n)=>{n.d(t,{xA:()=>m,yg:()=>d});var o=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},m=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=p(n),h=r,d=c["".concat(s,".").concat(h)]||c[h]||u[h]||i;return n?o.createElement(d,a(a({ref:t},m),{},{components:n})):o.createElement(d,a({ref:t},m))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:r,a[1]=l;for(var p=2;p<i;p++)a[p]=n[p];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"}}]);