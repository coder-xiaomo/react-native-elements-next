"use strict";(self.webpackChunkrne_website=self.webpackChunkrne_website||[]).push([[70917],{15680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>g});var r=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),s=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,g=d["".concat(i,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(g,l(l({ref:t},c),{},{components:n})):r.createElement(g,l({ref:t},c))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u[d]="string"==typeof e?e:a,l[1]=u;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},19904:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>d,default:()=>v,frontMatter:()=>c,metadata:()=>p,toc:()=>g});var r=n(9668),a=n(21367),o=(n(96540),n(15680)),l=n(70926),u=(n(21518),n(46061),n(72787)),i=n(35504),s=["components"],c={id:"listitem_buttongroup",title:"ListItem.ButtonGroup"},d=void 0,p={unversionedId:"components/listitem_buttongroup",id:"components/listitem_buttongroup",title:"ListItem.ButtonGroup",description:"This allows adding ButtonGroup to the ListItem.",source:"@site/docs/components/ListItem.ButtonGroup.mdx",sourceDirName:"components",slug:"/components/listitem_buttongroup",permalink:"/docs/next/components/listitem_buttongroup",draft:!1,editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/docs/components/ListItem.ButtonGroup.mdx",tags:[],version:"current",frontMatter:{id:"listitem_buttongroup",title:"ListItem.ButtonGroup"},sidebar:"docs",previous:{title:"ListItem.Accordion",permalink:"/docs/next/components/listitem_accordion"},next:{title:"ListItem.CheckBox",permalink:"/docs/next/components/listitem_checkbox"}},m={},g=[{value:"Usage",id:"usage",level:2},{value:"Props",id:"props",level:2}],f={toc:g},y="wrapper";function v(e){var t=e.components,n=(0,a.A)(e,s);return(0,o.yg)(y,(0,r.A)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.yg)(l.y,{mdxType:"IconsStyle"}),(0,o.yg)("p",null,"This allows adding ButtonGroup to the ListItem.\nThis, Receives all ",(0,o.yg)("a",{parentName:"p",href:"buttongroup#props"},"ButtonGroup")," props."),(0,o.yg)("h2",{id:"usage"},"Usage"),(0,o.yg)("div",{class:"row inline-flex-center"},(0,o.yg)("div",{class:"col col--3"},(0,o.yg)("h4",null,"Import")),(0,o.yg)("div",{class:"col col--9"},(0,o.yg)(u.A,{mdxType:"CodeBlock"},"import { ListItem } from '@rneui/themed';")),(0,o.yg)("div",{class:"col col--3"},(0,o.yg)("h4",null,"Theme Key"," ",(0,o.yg)("a",{href:"../customizing#using-themeprovider"},(0,o.yg)(i.wfp,{mdxType:"BiInfoCircle"})))),(0,o.yg)("div",{class:"col col--9"},(0,o.yg)(u.A,{mdxType:"CodeBlock"},"ListItemButtonGroup"))),(0,o.yg)("h2",{id:"props"},"Props"),(0,o.yg)("admonition",{type:"note"},(0,o.yg)("p",{parentName:"admonition"},"Includes all ",(0,o.yg)("a",{parentName:"p",href:"buttongroup#props"},"ButtonGroup")," props.")),(0,o.yg)("div",{class:"table-responsive"},(0,o.yg)("table",null,(0,o.yg)("thead",{parentName:"table"},(0,o.yg)("tr",{parentName:"thead"},(0,o.yg)("th",{parentName:"tr",align:null},"Name"),(0,o.yg)("th",{parentName:"tr",align:null},"Type"),(0,o.yg)("th",{parentName:"tr",align:null},"Default"),(0,o.yg)("th",{parentName:"tr",align:null},"Description"))),(0,o.yg)("tbody",{parentName:"table"},(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},(0,o.yg)("inlineCode",{parentName:"td"},"onLongPress")),(0,o.yg)("td",{parentName:"tr",align:null},"GestureResponderEventHandler"),(0,o.yg)("td",{parentName:"tr",align:null}),(0,o.yg)("td",{parentName:"tr",align:null},"Called when a long-tap gesture is detected.")),(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},(0,o.yg)("inlineCode",{parentName:"td"},"onPressIn")),(0,o.yg)("td",{parentName:"tr",align:null},"GestureResponderEventHandler"),(0,o.yg)("td",{parentName:"tr",align:null}),(0,o.yg)("td",{parentName:"tr",align:null},"Called when a touch is engaged before ",(0,o.yg)("inlineCode",{parentName:"td"},"onPress"),".")),(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},(0,o.yg)("inlineCode",{parentName:"td"},"onPressOut")),(0,o.yg)("td",{parentName:"tr",align:null},"GestureResponderEventHandler"),(0,o.yg)("td",{parentName:"tr",align:null}),(0,o.yg)("td",{parentName:"tr",align:null},"Called when a touch is released before ",(0,o.yg)("inlineCode",{parentName:"td"},"onPress"),".")),(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},(0,o.yg)("inlineCode",{parentName:"td"},"pressableProps")),(0,o.yg)("td",{parentName:"tr",align:null},"PressableProps except click handlers"),(0,o.yg)("td",{parentName:"tr",align:null},(0,o.yg)("inlineCode",{parentName:"td"},"None")),(0,o.yg)("td",{parentName:"tr",align:null}))))))}v.isMDXComponent=!0},21518:(e,t,n)=>{n.d(t,{A:()=>N});var r=n(9668),a=n(96540),o=n(20053),l=n(55236),u=n(56347),i=n(5793),s=n(47422),c=n(81038);function d(e){return function(e){var t,n;return null!=(t=null==(n=a.Children.map(e,(function(e){if(!e||(0,a.isValidElement)(e)&&(t=e.props)&&"object"==typeof t&&"value"in t)return e;var t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:n.filter(Boolean))?t:[]}(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}function p(e){var t=e.values,n=e.children;return(0,a.useMemo)((function(){var e=null!=t?t:d(n);return function(e){var t=(0,s.X)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function m(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function g(e){var t=e.queryString,n=void 0!==t&&t,r=e.groupId,o=(0,u.W6)(),l=function(e){var t=e.queryString,n=void 0!==t&&t,r=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=r?r:null}({queryString:n,groupId:r});return[(0,i.aZ)(l),(0,a.useCallback)((function(e){if(l){var t=new URLSearchParams(o.location.search);t.set(l,e),o.replace(Object.assign({},o.location,{search:t.toString()}))}}),[l,o])]}function f(e){var t,n,r,o,l=e.defaultValue,u=e.queryString,i=void 0!==u&&u,s=e.groupId,d=p(e),f=(0,a.useState)((function(){return function(e){var t,n=e.defaultValue,r=e.tabValues;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:r}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+r.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var a=null!=(t=r.find((function(e){return e.default})))?t:r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:l,tabValues:d})})),y=f[0],v=f[1],b=g({queryString:i,groupId:s}),h=b[0],w=b[1],N=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:s}.groupId),n=(0,c.Dv)(t),r=n[0],o=n[1],[r,(0,a.useCallback)((function(e){t&&o.set(e)}),[t,o])]),E=N[0],C=N[1],I=function(){var e=null!=h?h:E;return m({value:e,tabValues:d})?e:null}();return(0,a.useLayoutEffect)((function(){I&&v(I)}),[I]),{selectedValue:y,selectValue:(0,a.useCallback)((function(e){if(!m({value:e,tabValues:d}))throw new Error("Can't select invalid tab value="+e);v(e),w(e),C(e)}),[w,C,d]),tabValues:d}}var y=n(195);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function b(e){var t=e.className,n=e.block,u=e.selectedValue,i=e.selectValue,s=e.tabValues,c=[],d=(0,l.a_)().blockElementScrollPositionUntilNextRender,p=function(e){var t=e.currentTarget,n=c.indexOf(t),r=s[n].value;r!==u&&(d(t),i(r))},m=function(e){var t,n=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":var r,a=c.indexOf(e.currentTarget)+1;n=null!=(r=c[a])?r:c[0];break;case"ArrowLeft":var o,l=c.indexOf(e.currentTarget)-1;n=null!=(o=c[l])?o:c[c.length-1]}null==(t=n)||t.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.A)("tabs",{"tabs--block":n},t)},s.map((function(e){var t=e.value,n=e.label,l=e.attributes;return a.createElement("li",(0,r.A)({role:"tab",tabIndex:u===t?0:-1,"aria-selected":u===t,key:t,ref:function(e){return c.push(e)},onKeyDown:m,onClick:p},l,{className:(0,o.A)("tabs__item",v.tabItem,null==l?void 0:l.className,{"tabs__item--active":u===t})}),null!=n?n:t)})))}function h(e){var t=e.lazy,n=e.children,r=e.selectedValue,o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){var l=o.find((function(e){return e.props.value===r}));return l?(0,a.cloneElement)(l,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},o.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r})})))}function w(e){var t=f(e);return a.createElement("div",{className:(0,o.A)("tabs-container",v.tabList)},a.createElement(b,(0,r.A)({},e,t)),a.createElement(h,(0,r.A)({},e,t)))}function N(e){var t=(0,y.A)();return a.createElement(w,(0,r.A)({key:String(t)},e))}},33557:(e,t,n)=>{n.d(t,{A:()=>i});var r=n(96540),a=n(8755),o=n(64270),l=n(45550),u=n(91147);const i=Object.assign({React:r,LinearGradient:u.A},a,o,l,r)},46061:(e,t,n)=>{n.d(t,{A:()=>l});var r=n(96540),a=n(20053);const o={tabItem:"tabItem_Ymn6"};function l(e){var t=e.children,n=e.hidden,l=e.className;return r.createElement("div",{role:"tabpanel",className:(0,a.A)(o.tabItem,l),hidden:n},t)}},70926:(e,t,n)=>{n.d(t,{y:()=>i});var r=n(96540),a=n(3352),o=n(14628),l=n(1547),u=n(83564),i=function(){return r.createElement(a.A,null,r.createElement("style",{type:"text/css"},"\n          @font-face {\n            font-family: 'MaterialIcons';\n            src: url("+l.A+") format('truetype');\n          }\n          @font-face {\n            font-family: 'FontAwesome';\n            src: url("+u.A+") format('truetype');\n          }\n          @font-face {\n            font-family: 'MaterialCommunityIcons';\n            src: url("+o.A+") format('truetype');\n          }\n        "))}},78360:(e,t,n)=>{n.d(t,{A:()=>b});var r=n(21367),a=n(9668),o=n(96540),l=n(53686),u=n(20053),i=(n(26297),n(5222)),s=n(91010),c=n(41262);const d={playgroundContainer:"playgroundContainer_TGbA",playgroundHeader:"playgroundHeader_qwyd",playgroundEditor:"playgroundEditor_PvJ1",playgroundPreview:"playgroundPreview_bb8I",toggleContainer:"toggleContainer_ZZiH",toggleIcon:"toggleIcon_OnrQ",showCode:"showCode_O0Od"};var p=n(195),m=n(59644),g=["children","transformCode"];function f(){return o.createElement("div",null,"Loading...")}function y(e){var t=(0,p.A)(),n=(0,o.useContext)(l.MY),r=n.code,u=n.language,i=n.theme,s=n.disabled,c=n.onChange;return o.createElement(l.w,(0,a.A)({key:String(t),code:r,language:u,theme:i,disabled:s,onChange:c},e,{className:d.playgroundEditor}))}function v(e){var t=e.showCode,n=e.preImports,r=void 0===n?"":n,a=(e.wrapper,o.useState(t)),i=a[0],c=a[1],p=function(){c((function(e){return!e}))};return o.createElement(o.Fragment,null,o.createElement("div",{className:d.playgroundPreview},o.createElement(s.A,{fallback:o.createElement(f,null)},(function(){return o.createElement(o.Fragment,null,o.createElement(l.pA,null),o.createElement(l.p1,null),o.createElement("div",{className:d.toggleContainer},o.createElement("div",{className:(0,u.A)(d.toggleIcon),onClick:p},o.createElement(m.luQ,null),o.createElement("span",{className:d.showCode},i?"Hide":"Show"," Code"))))}))),i&&o.createElement(y,{preImports:r,showCode:i}))}function b(e){var t=e.children,n=(e.transformCode,(0,r.A)(e,g)),u=((0,i.A)().siteConfig.themeConfig.liveCodeBlock.playgroundPosition,(0,c.A)());return o.createElement("div",{className:d.playgroundContainer},o.createElement(l.Q,(0,a.A)({code:t.replace(/\n$/,""),theme:u},n),o.createElement(v,{showCode:n.showCode})))}}}]);