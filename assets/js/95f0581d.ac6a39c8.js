"use strict";(self.webpackChunkrne_website=self.webpackChunkrne_website||[]).push([[72641],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>p});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=c(n),p=a,f=d["".concat(u,".").concat(p)]||d[p]||m[p]||l;return n?r.createElement(f,o(o({ref:t},s),{},{components:n})):r.createElement(f,o({ref:t},s))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var c=2;c<l;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(67294),a=n(86010);const l="tabItem_Ymn6";function o(e){var t=e.children,n=e.hidden,o=e.className;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(l,o),hidden:n},t)}},74866:(e,t,n)=>{n.d(t,{Z:()=>E});var r=n(87462),a=n(67294),l=n(86010),o=n(12466),i=n(16550),u=n(91980),c=n(67392),s=n(50012);function m(e){return function(e){return a.Children.map(e,(function(e){if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')}))}(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}function d(e){var t=e.values,n=e.children;return(0,a.useMemo)((function(){var e=null!=t?t:m(n);return function(e){var t=(0,c.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function p(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function f(e){var t=e.queryString,n=void 0!==t&&t,r=e.groupId,l=(0,i.k6)(),o=function(e){var t=e.queryString,n=void 0!==t&&t,r=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=r?r:null}({queryString:n,groupId:r});return[(0,u._X)(o),(0,a.useCallback)((function(e){if(o){var t=new URLSearchParams(l.location.search);t.set(o,e),l.replace(Object.assign({},l.location,{search:t.toString()}))}}),[o,l])]}function v(e){var t,n,r,l,o=e.defaultValue,i=e.queryString,u=void 0!==i&&i,c=e.groupId,m=d(e),v=(0,a.useState)((function(){return function(e){var t,n=e.defaultValue,r=e.tabValues;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:r}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+r.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var a=null!=(t=r.find((function(e){return e.default})))?t:r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:o,tabValues:m})})),b=v[0],h=v[1],g=f({queryString:u,groupId:c}),y=g[0],k=g[1],w=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:c}.groupId),n=(0,s.Nk)(t),r=n[0],l=n[1],[r,(0,a.useCallback)((function(e){t&&l.set(e)}),[t,l])]),E=w[0],T=w[1],N=function(){var e=null!=y?y:E;return p({value:e,tabValues:m})?e:null}();return(0,a.useEffect)((function(){N&&h(N)}),[N]),{selectedValue:b,selectValue:(0,a.useCallback)((function(e){if(!p({value:e,tabValues:m}))throw new Error("Can't select invalid tab value="+e);h(e),k(e),T(e)}),[k,T,m]),tabValues:m}}var b=n(72389);const h="tabList__CuJ",g="tabItem_LNqP";function y(e){var t=e.className,n=e.block,i=e.selectedValue,u=e.selectValue,c=e.tabValues,s=[],m=(0,o.o5)().blockElementScrollPositionUntilNextRender,d=function(e){var t=e.currentTarget,n=s.indexOf(t),r=c[n].value;r!==i&&(m(t),u(r))},p=function(e){var t,n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":var r,a=s.indexOf(e.currentTarget)+1;n=null!=(r=s[a])?r:s[0];break;case"ArrowLeft":var l,o=s.indexOf(e.currentTarget)-1;n=null!=(l=s[o])?l:s[s.length-1]}null==(t=n)||t.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},t)},c.map((function(e){var t=e.value,n=e.label,o=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:function(e){return s.push(e)},onKeyDown:p,onClick:d},o,{className:(0,l.Z)("tabs__item",g,null==o?void 0:o.className,{"tabs__item--active":i===t})}),null!=n?n:t)})))}function k(e){var t=e.lazy,n=e.children,r=e.selectedValue;if(t){var l=n.find((function(e){return e.props.value===r}));return l?(0,a.cloneElement)(l,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},n.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r})})))}function w(e){var t=v(e);return a.createElement("div",{className:(0,l.Z)("tabs-container",h)},a.createElement(y,(0,r.Z)({},e,t)),a.createElement(k,(0,r.Z)({},e,t)))}function E(e){var t=(0,b.Z)();return a.createElement(w,(0,r.Z)({key:String(t)},e))}},37047:(e,t,n)=>{n.d(t,{w:()=>u});var r=n(67294),a=n(35742),l=n(14330),o=n(98576),i=n(61720),u=function(){return r.createElement(a.Z,null,r.createElement("style",{type:"text/css"},"\n          @font-face {\n            font-family: 'MaterialIcons';\n            src: url("+o.Z+") format('truetype');\n          }\n          @font-face {\n            font-family: 'FontAwesome';\n            src: url("+i.Z+") format('truetype');\n          }\n          @font-face {\n            font-family: 'MaterialCommunityIcons';\n            src: url("+l.Z+") format('truetype');\n          }\n        "))}},22365:(e,t,n)=>{n.d(t,{Z:()=>T});var r=n(63366),a=n(87462),l=n(67294),o=n(10407),i=n(86010),u=(n(95999),n(52263)),c=n(91262),s=n(66412);const m="playgroundContainer_TGbA",d="playgroundEditor_PvJ1",p="playgroundPreview_bb8I",f="toggleContainer_ZZiH",v="toggleIcon_OnrQ",b="showCode_O0Od";var h=n(72389),g=n(5434),y=["children","transformCode"];function k(){return l.createElement("div",null,"Loading...")}function w(e){var t=(0,h.Z)(),n=(0,l.useContext)(o.L2),r=n.code,i=n.language,u=n.theme,c=n.disabled,s=n.onChange;return l.createElement(o.uz,(0,a.Z)({key:String(t),code:r,language:i,theme:u,disabled:c,onChange:s},e,{className:d}))}function E(e){var t=e.showCode,n=e.preImports,r=void 0===n?"":n,a=(e.wrapper,l.useState(t)),u=a[0],s=a[1],m=function(){s((function(e){return!e}))};return l.createElement(l.Fragment,null,l.createElement("div",{className:p},l.createElement(c.Z,{fallback:l.createElement(k,null)},(function(){return l.createElement(l.Fragment,null,l.createElement(o.i5,null),l.createElement(o.IF,null),l.createElement("div",{className:f},l.createElement("div",{className:(0,i.Z)(v),onClick:m},l.createElement(g.xoN,null),l.createElement("span",{className:b},u?"Hide":"Show"," Code"))))}))),u&&l.createElement(w,{preImports:r,showCode:u}))}function T(e){var t=e.children,n=(e.transformCode,(0,r.Z)(e,y)),i=((0,u.Z)().siteConfig.themeConfig.liveCodeBlock.playgroundPosition,(0,s.p)());return l.createElement("div",{className:m},l.createElement(o.nu,(0,a.Z)({code:t.replace(/\n$/,""),theme:i},n),l.createElement(E,{showCode:n.showCode})))}},56922:(e,t,n)=>{n.d(t,{Z:()=>u});var r=n(67294),a=n(32408),l=n(13925),o=n(53211),i=n(83279);const u=Object.assign({React:r,LinearGradient:i.Z},a,l,o,r)},76676:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>m,default:()=>b,frontMatter:()=>s,metadata:()=>d,toc:()=>f});var r=n(87462),a=n(63366),l=(n(67294),n(3905)),o=n(37047),i=(n(74866),n(85162),n(96711)),u=n(47516),c=["components"],s={id:"listitem_title",title:"ListItem.Title"},m=void 0,d={unversionedId:"components/listitem_title",id:"version-4.0.0-rc.7/components/listitem_title",title:"ListItem.Title",description:"This allows adding Title to the ListItem.",source:"@site/versioned_docs/version-4.0.0-rc.7/components/ListItem.Title.mdx",sourceDirName:"components",slug:"/components/listitem_title",permalink:"/docs/4.0.0-rc.7/components/listitem_title",draft:!1,editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/versioned_docs/version-4.0.0-rc.7/components/ListItem.Title.mdx",tags:[],version:"4.0.0-rc.7",frontMatter:{id:"listitem_title",title:"ListItem.Title"},sidebar:"docs",previous:{title:"ListItem.Swipeable",permalink:"/docs/4.0.0-rc.7/components/listitem_swipeable"},next:{title:"Overlay",permalink:"/docs/4.0.0-rc.7/components/overlay"}},p={},f=[{value:"Usage",id:"usage",level:2},{value:"Props",id:"props",level:2}],v={toc:f};function b(e){var t=e.components,n=(0,a.Z)(e,c);return(0,l.kt)("wrapper",(0,r.Z)({},v,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)(o.w,{mdxType:"IconsStyle"}),(0,l.kt)("p",null,"This allows adding Title to the ListItem.\nThis, Receives all ",(0,l.kt)("a",{parentName:"p",href:"text#props"},"Text")," props."),(0,l.kt)("h2",{id:"usage"},"Usage"),(0,l.kt)("div",{class:"row inline-flex-center"},(0,l.kt)("div",{class:"col col--3"},(0,l.kt)("h4",null,"Import")),(0,l.kt)("div",{class:"col col--9"},(0,l.kt)(i.Z,{mdxType:"CodeBlock"},"import { ListItem } from '@rneui/themed';")),(0,l.kt)("div",{class:"col col--3"},(0,l.kt)("h4",null,"Theme Key"," ",(0,l.kt)("a",{href:"../customizing#using-themeprovider"},(0,l.kt)(u.Fs0,{mdxType:"BiInfoCircle"})))),(0,l.kt)("div",{class:"col col--9"},(0,l.kt)(i.Z,{mdxType:"CodeBlock"},"ListItemTitle"))),(0,l.kt)("h2",{id:"props"},"Props"),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"Includes all ",(0,l.kt)("a",{parentName:"p",href:"https://reactnative.dev/docs/text#props"},"Text")," props.")),(0,l.kt)("div",{class:"table-responsive"},(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"right")),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Add right title."))))))}b.isMDXComponent=!0}}]);