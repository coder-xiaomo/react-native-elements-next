"use strict";(self.webpackChunkrne_website=self.webpackChunkrne_website||[]).push([[38637],{15680:(e,n,t)=>{t.d(n,{xA:()=>s,yg:()=>g});var r=t(96540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=r.createContext({}),c=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=c(e.components);return r.createElement(u.Provider,{value:n},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=c(t),m=a,g=d["".concat(u,".").concat(m)]||d[m]||p[m]||l;return t?r.createElement(g,o(o({ref:n},s),{},{components:t})):r.createElement(g,o({ref:n},s))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,o=new Array(l);o[0]=m;var i={};for(var u in n)hasOwnProperty.call(n,u)&&(i[u]=n[u]);i.originalType=e,i[d]="string"==typeof e?e:a,o[1]=i;for(var c=2;c<l;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},21518:(e,n,t)=>{t.d(n,{A:()=>w});var r=t(9668),a=t(96540),l=t(20053),o=t(55236),i=t(56347),u=t(5793),c=t(47422),s=t(81038);function d(e){return function(e){var n,t;return null!=(n=null==(t=a.Children.map(e,(function(e){if(!e||(0,a.isValidElement)(e)&&(n=e.props)&&"object"==typeof n&&"value"in n)return e;var n;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:t.filter(Boolean))?n:[]}(e).map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes,default:n.default}}))}function p(e){var n=e.values,t=e.children;return(0,a.useMemo)((function(){var e=null!=n?n:d(t);return function(e){var n=(0,c.X)(e,(function(e,n){return e.value===n.value}));if(n.length>0)throw new Error('Docusaurus error: Duplicate values "'+n.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,t])}function m(e){var n=e.value;return e.tabValues.some((function(e){return e.value===n}))}function g(e){var n=e.queryString,t=void 0!==n&&n,r=e.groupId,l=(0,i.W6)(),o=function(e){var n=e.queryString,t=void 0!==n&&n,r=e.groupId;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=r?r:null}({queryString:t,groupId:r});return[(0,u.aZ)(o),(0,a.useCallback)((function(e){if(o){var n=new URLSearchParams(l.location.search);n.set(o,e),l.replace(Object.assign({},l.location,{search:n.toString()}))}}),[o,l])]}function y(e){var n,t,r,l,o=e.defaultValue,i=e.queryString,u=void 0!==i&&i,c=e.groupId,d=p(e),y=(0,a.useState)((function(){return function(e){var n,t=e.defaultValue,r=e.tabValues;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:r}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+t+'" but none of its children has the corresponding value. Available values are: '+r.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return t}var a=null!=(n=r.find((function(e){return e.default})))?n:r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:o,tabValues:d})})),f=y[0],v=y[1],h=g({queryString:u,groupId:c}),b=h[0],N=h[1],w=(n=function(e){return e?"docusaurus.tab."+e:null}({groupId:c}.groupId),t=(0,s.Dv)(n),r=t[0],l=t[1],[r,(0,a.useCallback)((function(e){n&&l.set(e)}),[n,l])]),C=w[0],k=w[1],E=function(){var e=null!=b?b:C;return m({value:e,tabValues:d})?e:null}();return(0,a.useLayoutEffect)((function(){E&&v(E)}),[E]),{selectedValue:f,selectValue:(0,a.useCallback)((function(e){if(!m({value:e,tabValues:d}))throw new Error("Can't select invalid tab value="+e);v(e),N(e),k(e)}),[N,k,d]),tabValues:d}}var f=t(195);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function h(e){var n=e.className,t=e.block,i=e.selectedValue,u=e.selectValue,c=e.tabValues,s=[],d=(0,o.a_)().blockElementScrollPositionUntilNextRender,p=function(e){var n=e.currentTarget,t=s.indexOf(n),r=c[t].value;r!==i&&(d(n),u(r))},m=function(e){var n,t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":var r,a=s.indexOf(e.currentTarget)+1;t=null!=(r=s[a])?r:s[0];break;case"ArrowLeft":var l,o=s.indexOf(e.currentTarget)-1;t=null!=(l=s[o])?l:s[s.length-1]}null==(n=t)||n.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.A)("tabs",{"tabs--block":t},n)},c.map((function(e){var n=e.value,t=e.label,o=e.attributes;return a.createElement("li",(0,r.A)({role:"tab",tabIndex:i===n?0:-1,"aria-selected":i===n,key:n,ref:function(e){return s.push(e)},onKeyDown:m,onClick:p},o,{className:(0,l.A)("tabs__item",v.tabItem,null==o?void 0:o.className,{"tabs__item--active":i===n})}),null!=t?t:n)})))}function b(e){var n=e.lazy,t=e.children,r=e.selectedValue,l=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){var o=l.find((function(e){return e.props.value===r}));return o?(0,a.cloneElement)(o,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},l.map((function(e,n){return(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==r})})))}function N(e){var n=y(e);return a.createElement("div",{className:(0,l.A)("tabs-container",v.tabList)},a.createElement(h,(0,r.A)({},e,n)),a.createElement(b,(0,r.A)({},e,n)))}function w(e){var n=(0,f.A)();return a.createElement(N,(0,r.A)({key:String(n)},e))}},33557:(e,n,t)=>{t.d(n,{A:()=>u});var r=t(96540),a=t(8755),l=t(64270),o=t(45550),i=t(91147);const u=Object.assign({React:r,LinearGradient:i.A},a,l,o,r)},46061:(e,n,t)=>{t.d(n,{A:()=>o});var r=t(96540),a=t(20053);const l={tabItem:"tabItem_Ymn6"};function o(e){var n=e.children,t=e.hidden,o=e.className;return r.createElement("div",{role:"tabpanel",className:(0,a.A)(l.tabItem,o),hidden:t},n)}},55226:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>m,contentTitle:()=>d,default:()=>v,frontMatter:()=>s,metadata:()=>p,toc:()=>g});var r=t(9668),a=t(21367),l=(t(96540),t(15680)),o=t(70926),i=(t(21518),t(46061),t(72787)),u=t(35504),c=["components"],s={id:"skeleton",title:"Skeleton"},d=void 0,p={unversionedId:"components/skeleton",id:"version-4.0.0-rc.8/components/skeleton",title:"Skeleton",description:"A placeholder preview for content before the data gets loaded, an alternative for spinners.",source:"@site/versioned_docs/version-4.0.0-rc.8/components/Skeleton.mdx",sourceDirName:"components",slug:"/components/skeleton",permalink:"/docs/components/skeleton",draft:!1,editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/versioned_docs/version-4.0.0-rc.8/components/Skeleton.mdx",tags:[],version:"4.0.0-rc.8",frontMatter:{id:"skeleton",title:"Skeleton"},sidebar:"docs",previous:{title:"Slider",permalink:"/docs/components/slider"},next:{title:"SocialIcon",permalink:"/docs/components/socialicon"}},m={},g=[{value:"Usage",id:"usage",level:2},{value:"Variants",id:"variants",level:3},{value:"Animations",id:"animations",level:3},{value:"Props",id:"props",level:2}],y={toc:g},f="wrapper";function v(e){var n=e.components,t=(0,a.A)(e,c);return(0,l.yg)(f,(0,r.A)({},y,t,{components:n,mdxType:"MDXLayout"}),(0,l.yg)(o.y,{mdxType:"IconsStyle"}),(0,l.yg)("p",null,"A placeholder preview for content before the data gets loaded, an alternative for spinners."),(0,l.yg)("h2",{id:"usage"},"Usage"),(0,l.yg)("div",{class:"row inline-flex-center"},(0,l.yg)("div",{class:"col col--3"},(0,l.yg)("h4",null,"Import")),(0,l.yg)("div",{class:"col col--9"},(0,l.yg)(i.A,{mdxType:"CodeBlock"},"import { Skeleton } from '@rneui/themed';")),(0,l.yg)("div",{class:"col col--3"},(0,l.yg)("h4",null,"Theme Key"," ",(0,l.yg)("a",{href:"../customizing#using-themeprovider"},(0,l.yg)(u.wfp,{mdxType:"BiInfoCircle"})))),(0,l.yg)("div",{class:"col col--9"},(0,l.yg)(i.A,{mdxType:"CodeBlock"},"Skeleton"))),(0,l.yg)("h3",{id:"variants"},"Variants"),(0,l.yg)("p",null,"The component supports 2 shape variants, i.e. ",(0,l.yg)("inlineCode",{parentName:"p"},"circle"),", ",(0,l.yg)("inlineCode",{parentName:"p"},"rectangle"),"."),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-tsx",metastring:"live",live:!0},'<Stack row align="center" spacing={4}>\n  <Skeleton width={120} height={40} />\n  <Skeleton circle width={40} height={40} />\n</Stack>\n')),(0,l.yg)("h3",{id:"animations"},"Animations"),(0,l.yg)("p",null,"By default, the skeleton pulsates, but you can change the animation to a wave or disable it entirely."),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-tsx",metastring:"live",live:!0},'<Stack row align="center" spacing={4}>\n  <Skeleton animation="pulse" width={80} height={40} />\n  <Skeleton\n    LinearGradientComponent={LinearGradient}\n    animation="wave"\n    width={80}\n    height={40}\n  />\n  <Skeleton animation="none" width={80} height={40} />\n</Stack>\n')),(0,l.yg)("h2",{id:"props"},"Props"),(0,l.yg)("admonition",{type:"note"},(0,l.yg)("p",{parentName:"admonition"},"Includes all ",(0,l.yg)("a",{parentName:"p",href:"https://reactnative.dev/docs/view#props"},"View")," props.")),(0,l.yg)("div",{class:"table-responsive"},(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Name"),(0,l.yg)("th",{parentName:"tr",align:null},"Type"),(0,l.yg)("th",{parentName:"tr",align:null},"Default"),(0,l.yg)("th",{parentName:"tr",align:null},"Description"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"LinearGradientComponent")),(0,l.yg)("td",{parentName:"tr",align:null},"React Component"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"Custom Linear Gradient Component")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"animation")),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"none")," ","|"," ",(0,l.yg)("inlineCode",{parentName:"td"},"pulse")," ","|"," ",(0,l.yg)("inlineCode",{parentName:"td"},"wave")),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"pulse")),(0,l.yg)("td",{parentName:"tr",align:null},"Type of animation")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"circle")),(0,l.yg)("td",{parentName:"tr",align:null},"boolean"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"show circular variant")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"height")),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"string")," ","|"," ",(0,l.yg)("inlineCode",{parentName:"td"},"number")),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"12")),(0,l.yg)("td",{parentName:"tr",align:null},"Height of Skeleton View")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"skeletonStyle")),(0,l.yg)("td",{parentName:"tr",align:null},"View Style"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"Custom style for skeleton gradient")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"width")),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"string")," ","|"," ",(0,l.yg)("inlineCode",{parentName:"td"},"number")),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"100%")),(0,l.yg)("td",{parentName:"tr",align:null},"Width of Skeleton View"))))))}v.isMDXComponent=!0},70926:(e,n,t)=>{t.d(n,{y:()=>u});var r=t(96540),a=t(3352),l=t(14628),o=t(1547),i=t(83564),u=function(){return r.createElement(a.A,null,r.createElement("style",{type:"text/css"},"\n          @font-face {\n            font-family: 'MaterialIcons';\n            src: url("+o.A+") format('truetype');\n          }\n          @font-face {\n            font-family: 'FontAwesome';\n            src: url("+i.A+") format('truetype');\n          }\n          @font-face {\n            font-family: 'MaterialCommunityIcons';\n            src: url("+l.A+") format('truetype');\n          }\n        "))}},78360:(e,n,t)=>{t.d(n,{A:()=>h});var r=t(21367),a=t(9668),l=t(96540),o=t(53686),i=t(20053),u=(t(26297),t(5222)),c=t(91010),s=t(41262);const d={playgroundContainer:"playgroundContainer_TGbA",playgroundHeader:"playgroundHeader_qwyd",playgroundEditor:"playgroundEditor_PvJ1",playgroundPreview:"playgroundPreview_bb8I",toggleContainer:"toggleContainer_ZZiH",toggleIcon:"toggleIcon_OnrQ",showCode:"showCode_O0Od"};var p=t(195),m=t(59644),g=["children","transformCode"];function y(){return l.createElement("div",null,"Loading...")}function f(e){var n=(0,p.A)(),t=(0,l.useContext)(o.MY),r=t.code,i=t.language,u=t.theme,c=t.disabled,s=t.onChange;return l.createElement(o.w,(0,a.A)({key:String(n),code:r,language:i,theme:u,disabled:c,onChange:s},e,{className:d.playgroundEditor}))}function v(e){var n=e.showCode,t=e.preImports,r=void 0===t?"":t,a=(e.wrapper,l.useState(n)),u=a[0],s=a[1],p=function(){s((function(e){return!e}))};return l.createElement(l.Fragment,null,l.createElement("div",{className:d.playgroundPreview},l.createElement(c.A,{fallback:l.createElement(y,null)},(function(){return l.createElement(l.Fragment,null,l.createElement(o.pA,null),l.createElement(o.p1,null),l.createElement("div",{className:d.toggleContainer},l.createElement("div",{className:(0,i.A)(d.toggleIcon),onClick:p},l.createElement(m.luQ,null),l.createElement("span",{className:d.showCode},u?"Hide":"Show"," Code"))))}))),u&&l.createElement(f,{preImports:r,showCode:u}))}function h(e){var n=e.children,t=(e.transformCode,(0,r.A)(e,g)),i=((0,u.A)().siteConfig.themeConfig.liveCodeBlock.playgroundPosition,(0,s.A)());return l.createElement("div",{className:d.playgroundContainer},l.createElement(o.Q,(0,a.A)({code:n.replace(/\n$/,""),theme:i},t),l.createElement(v,{showCode:t.showCode})))}}}]);