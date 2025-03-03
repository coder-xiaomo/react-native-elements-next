"use strict";(self.webpackChunkrne_website=self.webpackChunkrne_website||[]).push([[9028,12958],{15680:(e,t,n)=>{n.d(t,{xA:()=>d,yg:()=>b});var a=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),l=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),m=l(n),p=r,b=m["".concat(s,".").concat(p)]||m[p]||u[p]||i;return n?a.createElement(b,o(o({ref:t},d),{},{components:n})):a.createElement(b,o({ref:t},d))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[m]="string"==typeof e?e:r,o[1]=c;for(var l=2;l<i;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},59826:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>b,frontMatter:()=>c,metadata:()=>l,toc:()=>m});var a=n(9668),r=n(21367),i=(n(96540),n(15680)),o=["components"],c={},s=void 0,l={unversionedId:"main/usage/Tab/snack/index",id:"version-4.0.0-beta.0/main/usage/Tab/snack/index",title:"index",description:"",source:"@site/versioned_docs/version-4.0.0-beta.0/main/usage/Tab/snack/index.md",sourceDirName:"main/usage/Tab/snack",slug:"/main/usage/Tab/snack/",permalink:"/react-native-elements-next/docs/4.0.0-beta.0/main/usage/Tab/snack/",draft:!1,editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/versioned_docs/version-4.0.0-beta.0/main/usage/Tab/snack/index.md",tags:[],version:"4.0.0-beta.0",frontMatter:{}},d={},m=[],u={toc:m},p="wrapper";function b(e){var t=e.components,n=(0,r.A)(e,o);return(0,i.yg)(p,(0,a.A)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("div",{className:"snack-player","data-snack-name":"RNE Tab","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20Tab%2C%20Text%2C%20TabView%20%7D%20from%20'react-native-elements'%3B%0A%0Aexport%20default%20()%20%3D%3E%20%7B%0A%20%20const%20%5Bindex%2C%20setIndex%5D%20%3D%20React.useState(0)%3B%0A%0A%20%20return%20(%0A%20%20%20%20%3C%3E%0A%20%20%20%20%20%20%3CTab%0A%20%20%20%20%20%20%20%20value%3D%7Bindex%7D%0A%20%20%20%20%20%20%20%20onChange%3D%7B(e)%20%3D%3E%20setIndex(e)%7D%0A%20%20%20%20%20%20%20%20indicatorStyle%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20backgroundColor%3A%20'white'%2C%0A%20%20%20%20%20%20%20%20%20%20height%3A%203%2C%0A%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20variant%3D%22primary%22%0A%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%3CTab.Item%0A%20%20%20%20%20%20%20%20%20%20title%3D%22Recent%22%0A%20%20%20%20%20%20%20%20%20%20titleStyle%3D%7B%7B%20fontSize%3A%2012%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20icon%3D%7B%7B%20name%3A%20'timer'%2C%20type%3A%20'ionicon'%2C%20color%3A%20'white'%20%7D%7D%0A%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CTab.Item%0A%20%20%20%20%20%20%20%20%20%20title%3D%22favorite%22%0A%20%20%20%20%20%20%20%20%20%20titleStyle%3D%7B%7B%20fontSize%3A%2012%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20icon%3D%7B%7B%20name%3A%20'heart'%2C%20type%3A%20'ionicon'%2C%20color%3A%20'white'%20%7D%7D%0A%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CTab.Item%0A%20%20%20%20%20%20%20%20%20%20title%3D%22cart%22%0A%20%20%20%20%20%20%20%20%20%20titleStyle%3D%7B%7B%20fontSize%3A%2012%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20icon%3D%7B%7B%20name%3A%20'cart'%2C%20type%3A%20'ionicon'%2C%20color%3A%20'white'%20%7D%7D%0A%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%3C%2FTab%3E%0A%0A%20%20%20%20%20%20%3CTabView%20value%3D%7Bindex%7D%20onChange%3D%7BsetIndex%7D%20animationType%3D%22spring%22%3E%0A%20%20%20%20%20%20%20%20%3CTabView.Item%20style%3D%7B%7B%20backgroundColor%3A%20'red'%2C%20width%3A%20'100%25'%20%7D%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%3CText%20h1%3ERecent%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%3C%2FTabView.Item%3E%0A%20%20%20%20%20%20%20%20%3CTabView.Item%20style%3D%7B%7B%20backgroundColor%3A%20'blue'%2C%20width%3A%20'100%25'%20%7D%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%3CText%20h1%3EFavorite%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%3C%2FTabView.Item%3E%0A%20%20%20%20%20%20%20%20%3CTabView.Item%20style%3D%7B%7B%20backgroundColor%3A%20'green'%2C%20width%3A%20'100%25'%20%7D%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%3CText%20h1%3ECart%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%3C%2FTabView.Item%3E%0A%20%20%20%20%20%20%3C%2FTabView%3E%0A%20%20%20%20%3C%2F%3E%0A%20%20)%3B%0A%7D%3B","data-snack-dependencies":"@rneui/themed,@rneui/base","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}))}b.isMDXComponent=!0},88708:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>l,default:()=>A,frontMatter:()=>s,metadata:()=>d,toc:()=>u});var a=n(9668),r=n(21367),i=(n(96540),n(15680)),o=n(59826),c=["components"],s={},l=void 0,d={unversionedId:"main/usage/Tab/Tab",id:"version-4.0.0-beta.0/main/usage/Tab/Tab",title:"Tab",description:"",source:"@site/versioned_docs/version-4.0.0-beta.0/main/usage/Tab/Tab.md",sourceDirName:"main/usage/Tab",slug:"/main/usage/Tab/",permalink:"/react-native-elements-next/docs/4.0.0-beta.0/main/usage/Tab/",draft:!1,editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/versioned_docs/version-4.0.0-beta.0/main/usage/Tab/Tab.md",tags:[],version:"4.0.0-beta.0",frontMatter:{}},m={},u=[],p={toc:u},b="wrapper";function A(e){var t=e.components,n=(0,r.A)(e,c);return(0,i.yg)(b,(0,a.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.yg)(o.default,{mdxType:"Snack"}))}A.isMDXComponent=!0}}]);