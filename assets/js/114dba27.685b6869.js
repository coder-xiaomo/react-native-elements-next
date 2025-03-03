"use strict";(self.webpackChunkrne_website=self.webpackChunkrne_website||[]).push([[68919],{15680:(e,t,r)=>{r.d(t,{xA:()=>s,yg:()=>m});var n=r(96540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),c=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=c(r),f=a,m=d["".concat(i,".").concat(f)]||d[f]||p[f]||o;return r?n.createElement(m,u(u({ref:t},s),{},{components:r})):n.createElement(m,u({ref:t},s))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,u=new Array(o);u[0]=f;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[d]="string"==typeof e?e:a,u[1]=l;for(var c=2;c<o;c++)u[c]=r[c];return n.createElement.apply(null,u)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},21518:(e,t,r)=>{r.d(t,{A:()=>E});var n=r(9668),a=r(96540),o=r(20053),u=r(55236),l=r(56347),i=r(5793),c=r(47422),s=r(81038);function d(e){return function(e){var t,r;return null!=(t=null==(r=a.Children.map(e,(function(e){if(!e||(0,a.isValidElement)(e)&&(t=e.props)&&"object"==typeof t&&"value"in t)return e;var t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:r.filter(Boolean))?t:[]}(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}function p(e){var t=e.values,r=e.children;return(0,a.useMemo)((function(){var e=null!=t?t:d(r);return function(e){var t=(0,c.X)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,r])}function f(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function m(e){var t=e.queryString,r=void 0!==t&&t,n=e.groupId,o=(0,l.W6)(),u=function(e){var t=e.queryString,r=void 0!==t&&t,n=e.groupId;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=n?n:null}({queryString:r,groupId:n});return[(0,i.aZ)(u),(0,a.useCallback)((function(e){if(u){var t=new URLSearchParams(o.location.search);t.set(u,e),o.replace(Object.assign({},o.location,{search:t.toString()}))}}),[u,o])]}function v(e){var t,r,n,o,u=e.defaultValue,l=e.queryString,i=void 0!==l&&l,c=e.groupId,d=p(e),v=(0,a.useState)((function(){return function(e){var t,r=e.defaultValue,n=e.tabValues;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!f({value:r,tabValues:n}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+r+'" but none of its children has the corresponding value. Available values are: '+n.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return r}var a=null!=(t=n.find((function(e){return e.default})))?t:n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:u,tabValues:d})})),b=v[0],y=v[1],g=m({queryString:i,groupId:c}),h=g[0],w=g[1],E=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:c}.groupId),r=(0,s.Dv)(t),n=r[0],o=r[1],[n,(0,a.useCallback)((function(e){t&&o.set(e)}),[t,o])]),O=E[0],T=E[1],x=function(){var e=null!=h?h:O;return f({value:e,tabValues:d})?e:null}();return(0,a.useLayoutEffect)((function(){x&&y(x)}),[x]),{selectedValue:b,selectValue:(0,a.useCallback)((function(e){if(!f({value:e,tabValues:d}))throw new Error("Can't select invalid tab value="+e);y(e),w(e),T(e)}),[w,T,d]),tabValues:d}}var b=r(195);const y={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function g(e){var t=e.className,r=e.block,l=e.selectedValue,i=e.selectValue,c=e.tabValues,s=[],d=(0,u.a_)().blockElementScrollPositionUntilNextRender,p=function(e){var t=e.currentTarget,r=s.indexOf(t),n=c[r].value;n!==l&&(d(t),i(n))},f=function(e){var t,r=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":var n,a=s.indexOf(e.currentTarget)+1;r=null!=(n=s[a])?n:s[0];break;case"ArrowLeft":var o,u=s.indexOf(e.currentTarget)-1;r=null!=(o=s[u])?o:s[s.length-1]}null==(t=r)||t.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.A)("tabs",{"tabs--block":r},t)},c.map((function(e){var t=e.value,r=e.label,u=e.attributes;return a.createElement("li",(0,n.A)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:function(e){return s.push(e)},onKeyDown:f,onClick:p},u,{className:(0,o.A)("tabs__item",y.tabItem,null==u?void 0:u.className,{"tabs__item--active":l===t})}),null!=r?r:t)})))}function h(e){var t=e.lazy,r=e.children,n=e.selectedValue,o=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){var u=o.find((function(e){return e.props.value===n}));return u?(0,a.cloneElement)(u,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},o.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==n})})))}function w(e){var t=v(e);return a.createElement("div",{className:(0,o.A)("tabs-container",y.tabList)},a.createElement(g,(0,n.A)({},e,t)),a.createElement(h,(0,n.A)({},e,t)))}function E(e){var t=(0,b.A)();return a.createElement(w,(0,n.A)({key:String(t)},e))}},24280:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var n=r(9668),a=r(21367),o=(r(96540),r(15680)),u=(r(21518),r(46061),["components"]),l={id:"card_featuredtitle",title:"Card.FeaturedTitle"},i=void 0,c={unversionedId:"components/card_featuredtitle",id:"version-4.0.0-rc.3/components/card_featuredtitle",title:"Card.FeaturedTitle",description:"Add a featured title to the Card.",source:"@site/versioned_docs/version-4.0.0-rc.3/components/Card.FeaturedTitle.mdx",sourceDirName:"components",slug:"/components/card_featuredtitle",permalink:"/docs/4.0.0-rc.3/components/card_featuredtitle",draft:!1,editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/versioned_docs/version-4.0.0-rc.3/components/Card.FeaturedTitle.mdx",tags:[],version:"4.0.0-rc.3",frontMatter:{id:"card_featuredtitle",title:"Card.FeaturedTitle"},sidebar:"docs",previous:{title:"Card.FeaturedSubtitle",permalink:"/docs/4.0.0-rc.3/components/card_featuredsubtitle"},next:{title:"Card.Image",permalink:"/docs/4.0.0-rc.3/components/card_image"}},s={},d=[{value:"Import",id:"import",level:2},{value:"Props",id:"props",level:2}],p={toc:d},f="wrapper";function m(e){var t=e.components,r=(0,a.A)(e,u);return(0,o.yg)(f,(0,n.A)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("p",null,"Add a featured title to the Card.\nThis, Receives all ",(0,o.yg)("a",{parentName:"p",href:"text#props"},"Text")," props."),(0,o.yg)("h2",{id:"import"},"Import"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-tsx"},'import { Card } from "@rneui/themed";\n')),(0,o.yg)("h2",{id:"props"},"Props"),(0,o.yg)("admonition",{type:"note"},(0,o.yg)("p",{parentName:"admonition"},"Includes all ",(0,o.yg)("a",{parentName:"p",href:"text#props"},"Text")," props.")))}m.isMDXComponent=!0},46061:(e,t,r)=>{r.d(t,{A:()=>u});var n=r(96540),a=r(20053);const o={tabItem:"tabItem_Ymn6"};function u(e){var t=e.children,r=e.hidden,u=e.className;return n.createElement("div",{role:"tabpanel",className:(0,a.A)(o.tabItem,u),hidden:r},t)}}}]);