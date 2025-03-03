"use strict";(self.webpackChunkrne_website=self.webpackChunkrne_website||[]).push([[97895],{5662:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>c,default:()=>g,frontMatter:()=>l,metadata:()=>p,toc:()=>m});var a=t(9668),o=t(21367),r=(t(96540),t(15680)),i=(t(6183),["components"]),l={id:"troubleshooting",title:"Troubleshooting"},c=void 0,p={unversionedId:"troubleshooting",id:"version-4.0.0-rc.8/troubleshooting",title:"Troubleshooting",description:"Although we try to make the experience of using React Native Elements",source:"@site/versioned_docs/version-4.0.0-rc.8/troubleshooting.mdx",sourceDirName:".",slug:"/troubleshooting",permalink:"/docs/troubleshooting",draft:!1,editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/versioned_docs/version-4.0.0-rc.8/troubleshooting.mdx",tags:[],version:"4.0.0-rc.8",frontMatter:{id:"troubleshooting",title:"Troubleshooting"},sidebar:"docs",previous:{title:"Installation",permalink:"/docs/installation"},next:{title:"Overview",permalink:"/docs/customizing"}},s={},m=[{value:"You incorrectly spelt a component",id:"you-incorrectly-spelt-a-component",level:3},{value:"Importing a component from the wrong version",id:"importing-a-component-from-the-wrong-version",level:3},{value:"Using <code>react-native-init</code>",id:"using-react-native-init",level:3},{value:"Using an Expo app (create-react-native-app or Expo XDE)",id:"using-an-expo-app-create-react-native-app-or-expo-xde",level:3},{value:"Using a detached <code>create-react-native-app</code> app",id:"using-a-detached-create-react-native-app-app",level:3}],u={toc:m},d="wrapper";function g(e){var n=e.components,t=(0,o.A)(e,i);return(0,r.yg)(d,(0,a.A)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"Although we try to make the experience of using React Native Elements\nhassle-free, time to time you may encounter some problems along the way."),(0,r.yg)("p",null,"On this page you can find solutions to commonly encountered issues."),(0,r.yg)("div",{className:"admonition admonition-danger alert alert--danger"},(0,r.yg)("div",{className:"admonition-content"},"Invariant Violation: Element type is invalid")),(0,r.yg)("p",null,"This error occurs when trying to import a component that doesn't exist. This\nusually happens for a few reasons:"),(0,r.yg)("h3",{id:"you-incorrectly-spelt-a-component"},"You incorrectly spelt a component"),(0,r.yg)("p",null,"Spelling a component incorrectly though very simple, happens occasionally."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-jsx"},"// Incorrect\nimport { Listitem } from '@rneui/themed';\n\n// Correct\nimport { ListItem } from '@rneui/themed';\n")),(0,r.yg)("h3",{id:"importing-a-component-from-the-wrong-version"},"Importing a component from the wrong version"),(0,r.yg)("p",null,"This error occurs when you're trying to use a component from the wrong version.\nAt RNE they're some components that are only available in some versions."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-md"},"Example:\n\n`<FormInput />` is only available in v0.19.1 and below. `<Input />` is only\navailable in `v1.0.0-beta1` and higher.\n")),(0,r.yg)("p",null,"To fix this, follow these steps:"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"Check your ",(0,r.yg)("inlineCode",{parentName:"li"},"package.json")," for the version of ",(0,r.yg)("inlineCode",{parentName:"li"},"@rneui/themed")," you are\nusing."),(0,r.yg)("li",{parentName:"ol"},"View the documentation for your particular version on the website. See\navailable versions\n",(0,r.yg)("a",{parentName:"li",href:"/versions"},"here"),"\nor click the version number next to the logo in the header."),(0,r.yg)("li",{parentName:"ol"},"Checking the list of components on the left side bar, make sure you're using\nthe right component.")),(0,r.yg)("hr",null),(0,r.yg)("div",{className:"admonition admonition-danger alert alert--danger"},(0,r.yg)("div",{className:"admonition-content"},"fontFamily (font-name) is not a system font")),(0,r.yg)("p",null,"This is a general error in react native, where you in your code, or a package\nyou are using, is trying to use a font that is not bundled with the platform or\nis not added to the project."),(0,r.yg)("p",null,"If you aren't using a custom font in your application, then it's likely that\nthe error comes from React Native Elements looking for\n",(0,r.yg)("inlineCode",{parentName:"p"},"react-native-vector-icons"),"."),(0,r.yg)("p",null,"They're a couple ways to solve this depending on your setup."),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"#using-react-native-init"},"Using ",(0,r.yg)("inlineCode",{parentName:"a"},"react-native-init"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"#using-an-expo-app-create-react-native-app-or-expo-xde"},"Using an Expo app (create-react-native-app or Expo XDE)")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"#using-a-detached-create-react-native-app-app"},"Using a detached ",(0,r.yg)("inlineCode",{parentName:"a"},"create-react-native-app")," app"))),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"using-react-native-init"},"Using ",(0,r.yg)("inlineCode",{parentName:"h3"},"react-native-init")),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Delete everything to be sure"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"rm -rf node_modules yarn.lock\n"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Install React Native Elements"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"# yarn\nyarn && yarn add @rneui/base @rneui/themed\n"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Install react-native-vector-icons"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"# yarn\nyarn add react-native-vector-icons\n"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Link react-native-vector-icons. Learn more about\n",(0,r.yg)("a",{parentName:"p",href:"https://reactnative.dev/docs/linking.html"},"linking"),"."),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"react-native link react-native-vector-icons\n")))),(0,r.yg)("p",null,"If you encounter any red error screens during the process, try running these\ncommands:"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},'"Unrecognized font x"'),(0,r.yg)("p",{parentName:"blockquote"},"iOS - ",(0,r.yg)("inlineCode",{parentName:"p"},"rm -rf ios/build")),(0,r.yg)("p",{parentName:"blockquote"},"Android - ",(0,r.yg)("inlineCode",{parentName:"p"},"rm -rf android/build && rm -rf android/app/build"))),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},'"Unable to resolve module x"'),(0,r.yg)("p",{parentName:"blockquote"},"npm -",(0,r.yg)("inlineCode",{parentName:"p"},"rm -rf node_modules && npm i")),(0,r.yg)("p",{parentName:"blockquote"},"yarn - ",(0,r.yg)("inlineCode",{parentName:"p"},"rm -rf node_modules && yarn"))),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},'"Unable to resolve module x"'),(0,r.yg)("p",{parentName:"blockquote"},(0,r.yg)("inlineCode",{parentName:"p"},"npm start -- --reset-cache"))),(0,r.yg)("h3",{id:"using-an-expo-app-create-react-native-app-or-expo-xde"},"Using an Expo app (create-react-native-app or Expo XDE)"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Delete everything to be sure"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"rm -rf node_modules yarn.lock package-lock.json\n"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Install React Native Elements"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"# yarn\nyarn && yarn add @rneui/base @rneui/themed\n"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Install ",(0,r.yg)("inlineCode",{parentName:"p"},"@expo/vector-icons")),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"# yarn\nyarn add @expo/vector-icons --save\n")))),(0,r.yg)("h3",{id:"using-a-detached-create-react-native-app-app"},"Using a detached ",(0,r.yg)("inlineCode",{parentName:"h3"},"create-react-native-app")," app"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"If you choose a regular React Native project, use\n",(0,r.yg)("a",{parentName:"li",href:"#using-react-native-init"},"Solution 1")),(0,r.yg)("li",{parentName:"ul"},"If you choose to use Expo SDK (ExpoKit), use\n",(0,r.yg)("a",{parentName:"li",href:"#using-an-expo-app-create-react-native-app-or-expo-xde"},"Solution 2"))))}g.isMDXComponent=!0},6183:(e,n,t)=>{t.d(n,{A:()=>m});var a=t(96540),o=t(20053),r=t(19051),i=t(26297);const l={admonition:"admonition_LlT9",admonitionHeading:"admonitionHeading_tbUL",admonitionIcon:"admonitionIcon_kALy",admonitionContent:"admonitionContent_S0QG"};var c={note:{infimaClassName:"secondary",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 14 16"},a.createElement("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))},label:a.createElement(i.A,{id:"theme.admonition.note",description:"The default label used for the Note admonition (:::note)"},"note")},tip:{infimaClassName:"success",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 12 16"},a.createElement("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))},label:a.createElement(i.A,{id:"theme.admonition.tip",description:"The default label used for the Tip admonition (:::tip)"},"tip")},danger:{infimaClassName:"danger",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 12 16"},a.createElement("path",{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))},label:a.createElement(i.A,{id:"theme.admonition.danger",description:"The default label used for the Danger admonition (:::danger)"},"danger")},info:{infimaClassName:"info",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 14 16"},a.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))},label:a.createElement(i.A,{id:"theme.admonition.info",description:"The default label used for the Info admonition (:::info)"},"info")},caution:{infimaClassName:"warning",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 16 16"},a.createElement("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))},label:a.createElement(i.A,{id:"theme.admonition.caution",description:"The default label used for the Caution admonition (:::caution)"},"caution")}},p={secondary:"note",important:"info",success:"tip",warning:"danger"};function s(e){var n,t=function(e){var n=a.Children.toArray(e),t=n.find((function(e){var n;return a.isValidElement(e)&&"mdxAdmonitionTitle"===(null==(n=e.props)?void 0:n.mdxType)})),o=a.createElement(a.Fragment,null,n.filter((function(e){return e!==t})));return{mdxAdmonitionTitle:t,rest:o}}(e.children),o=t.mdxAdmonitionTitle,r=t.rest;return Object.assign({},e,{title:null!=(n=e.title)?n:o,children:r})}function m(e){var n=s(e),t=n.children,i=n.type,m=n.title,u=n.icon,d=function(e){var n,t=null!=(n=p[e])?n:e,a=c[t];return a||(console.warn('No admonition config found for admonition type "'+t+'". Using Info as fallback.'),c.info)}(i),g=null!=m?m:d.label,y=d.iconComponent,h=null!=u?u:a.createElement(y,null);return a.createElement("div",{className:(0,o.A)(r.G.common.admonition,r.G.common.admonitionType(e.type),"alert","alert--"+d.infimaClassName,l.admonition)},a.createElement("div",{className:l.admonitionHeading},a.createElement("span",{className:l.admonitionIcon},h),g),a.createElement("div",{className:l.admonitionContent},t))}},15680:(e,n,t)=>{t.d(n,{xA:()=>s,yg:()=>g});var a=t(96540);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=a.createContext({}),p=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=p(e.components);return a.createElement(c.Provider,{value:n},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=p(t),d=o,g=m["".concat(c,".").concat(d)]||m[d]||u[d]||r;return t?a.createElement(g,i(i({ref:n},s),{},{components:t})):a.createElement(g,i({ref:n},s))}));function g(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,i=new Array(r);i[0]=d;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l[m]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<r;p++)i[p]=t[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);