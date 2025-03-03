"use strict";(self.webpackChunkrne_website=self.webpackChunkrne_website||[]).push([[7342],{15680:(e,t,n)=>{n.d(t,{xA:()=>l,yg:()=>d});var r=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},c="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),c=u(n),h=a,d=c["".concat(p,".").concat(h)]||c[h]||g[h]||o;return n?r.createElement(d,s(s({ref:t},l),{},{components:n})):r.createElement(d,s({ref:t},l))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=h;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[c]="string"==typeof e?e:a,s[1]=i;for(var u=2;u<o;u++)s[u]=n[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},93115:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>d,frontMatter:()=>i,metadata:()=>u,toc:()=>c});var r=n(9668),a=n(21367),o=(n(96540),n(15680)),s=["components"],i={id:"testing",title:"Testing",slug:"/testing"},p=void 0,u={unversionedId:"repo/testing",id:"version-4.0.0-rc.6/repo/testing",title:"Testing",description:"We are using tests to make sure components keep their functionality between versions and edits.",source:"@site/versioned_docs/version-4.0.0-rc.6/repo/testing.md",sourceDirName:"repo",slug:"/testing",permalink:"/docs/4.0.0-rc.6/testing",draft:!1,editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/versioned_docs/version-4.0.0-rc.6/repo/testing.md",tags:[],version:"4.0.0-rc.6",frontMatter:{id:"testing",title:"Testing",slug:"/testing"},sidebar:"docs",previous:{title:"Contributing",permalink:"/docs/4.0.0-rc.6/contributing"},next:{title:"Label Guide",permalink:"/docs/4.0.0-rc.6/labels"}},l={},c=[{value:"Snapshot Testing",id:"snapshot-testing",level:2},{value:"Functional Testing",id:"functional-testing",level:2}],g={toc:c},h="wrapper";function d(e){var t=e.components,n=(0,a.A)(e,s);return(0,o.yg)(h,(0,r.A)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("p",null,"We are using tests to make sure components keep their functionality between versions and edits.\nThey're many testing libraries for JavaScript and React Native, depending on what type of testing you're doing."),(0,o.yg)("p",null,"The type of tests we use on React Native Elements are ",(0,o.yg)("a",{parentName:"p",href:"#snapshot-testing"},"Snapshot"),"\nand ",(0,o.yg)("a",{parentName:"p",href:"#functional-testing"},"Functional")," tests."),(0,o.yg)("h2",{id:"snapshot-testing"},"Snapshot Testing"),(0,o.yg)("p",null,"Snapshot testing sounds exactly like what it does! It takes snapshot of the structure of a rendered\ncomponent the props, and their values and saves it. Whenever a change is made it'll compare it to the original snapshot -\njust to be super sure the change you wanted to make had the desired outcome.\nIf the outcomes is what you expected, then you need to ",(0,o.yg)("strong",{parentName:"p"},"update the snapshot"),", so that your changes will be the new\nstandard to compare to for changes in the future."),(0,o.yg)("p",null,"To update the snapshots run this command:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"# yarn\nyarn test -u\n\n# npm\nnpm run test -u\n")),(0,o.yg)("p",null,"For Snapshot Testing, we use ",(0,o.yg)("a",{parentName:"p",href:"https://jestjs.io/"},"Jest"),"."),(0,o.yg)("p",null,"You can read more about snapshot testing ",(0,o.yg)("a",{parentName:"p",href:"https://jestjs.io/docs/en/snapshot-testing.html"},"here"),"."),(0,o.yg)("h2",{id:"functional-testing"},"Functional Testing"),(0,o.yg)("p",null,"Functional tests ensures that a component functions the way it should(",(0,o.yg)("em",{parentName:"p"},"simplified"),"). This is important\nfor making changes to components, as it makes sure we don't break how something worked previously."),(0,o.yg)("p",null,"For example:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-md"},"If a user touches on a button in the button group, then the button selected should be highlighted\nand the previous one un-highlighted.\n")),(0,o.yg)("p",null,"For Functional Testing, we use ",(0,o.yg)("a",{parentName:"p",href:"https://callstack.github.io/react-native-testing-library/"},"React Native Testing Library"),"."),(0,o.yg)("p",null,"You can read more about functional testing ",(0,o.yg)("a",{parentName:"p",href:"https://www.guru99.com/functional-testing.html"},"here"),"."))}d.isMDXComponent=!0}}]);