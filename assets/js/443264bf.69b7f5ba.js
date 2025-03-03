"use strict";(self.webpackChunkrne_website=self.webpackChunkrne_website||[]).push([[39091,91270],{15680:(e,t,a)=>{a.d(t,{xA:()=>l,yg:()=>g});var n=a(96540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),m=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},l=function(e){var t=m(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=m(a),p=r,g=u["".concat(c,".").concat(p)]||u[p]||d[p]||i;return a?n.createElement(g,o(o({ref:t},l),{},{components:a})):n.createElement(g,o({ref:t},l))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:r,o[1]=s;for(var m=2;m<i;m++)o[m]=a[m];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},92136:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>m,default:()=>A,frontMatter:()=>c,metadata:()=>l,toc:()=>d});var n=a(9668),r=a(21367),i=(a(96540),a(15680)),o=a(96104),s=["components"],c={},m=void 0,l={unversionedId:"main/usage/Image/Image",id:"version-4.0.0-beta.0/main/usage/Image/Image",title:"Image",description:"",source:"@site/versioned_docs/version-4.0.0-beta.0/main/usage/Image/Image.md",sourceDirName:"main/usage/Image",slug:"/main/usage/Image/",permalink:"/react-native-elements-next/docs/4.0.0-beta.0/main/usage/Image/",draft:!1,editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/versioned_docs/version-4.0.0-beta.0/main/usage/Image/Image.md",tags:[],version:"4.0.0-beta.0",frontMatter:{}},u={},d=[],p={toc:d},g="wrapper";function A(e){var t=e.components,a=(0,r.A)(e,s);return(0,i.yg)(g,(0,n.A)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.yg)(o.default,{mdxType:"Snack"}))}A.isMDXComponent=!0},96104:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>g,frontMatter:()=>s,metadata:()=>m,toc:()=>u});var n=a(9668),r=a(21367),i=(a(96540),a(15680)),o=["components"],s={},c=void 0,m={unversionedId:"main/usage/Image/snack/index",id:"version-4.0.0-beta.0/main/usage/Image/snack/index",title:"index",description:"",source:"@site/versioned_docs/version-4.0.0-beta.0/main/usage/Image/snack/index.md",sourceDirName:"main/usage/Image/snack",slug:"/main/usage/Image/snack/",permalink:"/react-native-elements-next/docs/4.0.0-beta.0/main/usage/Image/snack/",draft:!1,editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/versioned_docs/version-4.0.0-beta.0/main/usage/Image/snack/index.md",tags:[],version:"4.0.0-beta.0",frontMatter:{}},l={},u=[],d={toc:u},p="wrapper";function g(e){var t=e.components,a=(0,r.A)(e,o);return(0,i.yg)(p,(0,n.A)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("div",{className:"snack-player","data-snack-name":"RNE Image","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20FlatList%2C%20SafeAreaView%2C%20StyleSheet%2C%20ActivityIndicator%20%7D%20from%20'react-native'%3B%0Aimport%20%7B%20Image%20%7D%20from%20'react-native-elements'%3B%0A%0Aconst%20BASE_URI%20%3D%20'https%3A%2F%2Fsource.unsplash.com%2Frandom%3Fsig%3D'%3B%0A%0Aconst%20ImageAPI%20%3D%20()%20%3D%3E%20%7B%0A%20%20return%20(%0A%20%20%20%20%3C%3E%0A%20%20%20%20%20%20%3CSafeAreaView%3E%0A%20%20%20%20%20%20%20%20%3CFlatList%0A%20%20%20%20%20%20%20%20%20%20data%3D%7B%5B...new%20Array(10)%5D.map((_%2C%20i)%20%3D%3E%20i.toString())%7D%0A%20%20%20%20%20%20%20%20%20%20style%3D%7Bstyles.list%7D%0A%20%20%20%20%20%20%20%20%20%20numColumns%3D%7B2%7D%0A%20%20%20%20%20%20%20%20%20%20keyExtractor%3D%7B(e)%20%3D%3E%20e%7D%0A%20%20%20%20%20%20%20%20%20%20renderItem%3D%7B(%7B%20item%20%7D)%20%3D%3E%20(%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CImage%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20source%3D%7B%7B%20uri%3A%20BASE_URI%20%2B%20item%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20containerStyle%3D%7Bstyles.item%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20PlaceholderContent%3D%7B%3CActivityIndicator%20%2F%3E%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20)%7D%0A%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%3C%2FSafeAreaView%3E%0A%20%20%20%20%3C%2F%3E%0A%20%20)%3B%0A%7D%3B%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0A%20%20list%3A%20%7B%0A%20%20%20%20width%3A%20'100%25'%2C%0A%20%20%20%20backgroundColor%3A%20'%23000'%2C%0A%20%20%7D%2C%0A%20%20item%3A%20%7B%0A%20%20%20%20aspectRatio%3A%201%2C%0A%20%20%20%20width%3A%20'100%25'%2C%0A%20%20%20%20flex%3A%201%2C%0A%20%20%7D%2C%0A%7D)%3B%0A%0Aexport%20default%20ImageAPI%3B","data-snack-dependencies":"@rneui/themed,@rneui/base","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}))}g.isMDXComponent=!0}}]);