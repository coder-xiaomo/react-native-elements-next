"use strict";(self.webpackChunkrne_website=self.webpackChunkrne_website||[]).push([[58321],{14714:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>f});var n=r(9668),a=r(21367),u=(r(96540),r(15680)),o=(r(21518),r(46061),r(88189),["components"]),i={sidebar_position:0,id:"getting_started",slug:"/universe",title:"Getting Started"},l=void 0,s={unversionedId:"universe/getting_started",id:"version-4.0.0-rc.6/universe/getting_started",title:"Getting Started",description:"",source:"@site/versioned_docs/version-4.0.0-rc.6/universe/getting_started.md",sourceDirName:"universe",slug:"/universe",permalink:"/docs/4.0.0-rc.6/universe",draft:!1,editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/versioned_docs/version-4.0.0-rc.6/universe/getting_started.md",tags:[],version:"4.0.0-rc.6",sidebarPosition:0,frontMatter:{sidebar_position:0,id:"getting_started",slug:"/universe",title:"Getting Started"}},c={},f=[],d={toc:f},v="wrapper";function p(e){var t=e.components,r=(0,a.A)(e,o);return(0,u.yg)(v,(0,n.A)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,u.yg)("admonition",{type:"note"}))}p.isMDXComponent=!0},15680:(e,t,r)=>{r.d(t,{xA:()=>c,yg:()=>p});var n=r(96540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},u=Object.keys(e);for(n=0;n<u.length;n++)r=u[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(n=0;n<u.length;n++)r=u[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},f="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},v=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,u=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),f=s(r),v=a,p=f["".concat(l,".").concat(v)]||f[v]||d[v]||u;return r?n.createElement(p,o(o({ref:t},c),{},{components:r})):n.createElement(p,o({ref:t},c))}));function p(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var u=r.length,o=new Array(u);o[0]=v;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[f]="string"==typeof e?e:a,o[1]=i;for(var s=2;s<u;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}v.displayName="MDXCreateElement"},21518:(e,t,r)=>{r.d(t,{A:()=>E});var n=r(9668),a=r(96540),u=r(20053),o=r(55236),i=r(56347),l=r(5793),s=r(47422),c=r(81038);function f(e){return function(e){var t,r;return null!=(t=null==(r=a.Children.map(e,(function(e){if(!e||(0,a.isValidElement)(e)&&(t=e.props)&&"object"==typeof t&&"value"in t)return e;var t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:r.filter(Boolean))?t:[]}(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}function d(e){var t=e.values,r=e.children;return(0,a.useMemo)((function(){var e=null!=t?t:f(r);return function(e){var t=(0,s.X)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,r])}function v(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function p(e){var t=e.queryString,r=void 0!==t&&t,n=e.groupId,u=(0,i.W6)(),o=function(e){var t=e.queryString,r=void 0!==t&&t,n=e.groupId;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=n?n:null}({queryString:r,groupId:n});return[(0,l.aZ)(o),(0,a.useCallback)((function(e){if(o){var t=new URLSearchParams(u.location.search);t.set(o,e),u.replace(Object.assign({},u.location,{search:t.toString()}))}}),[o,u])]}function m(e){var t,r,n,u,o=e.defaultValue,i=e.queryString,l=void 0!==i&&i,s=e.groupId,f=d(e),m=(0,a.useState)((function(){return function(e){var t,r=e.defaultValue,n=e.tabValues;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!v({value:r,tabValues:n}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+r+'" but none of its children has the corresponding value. Available values are: '+n.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return r}var a=null!=(t=n.find((function(e){return e.default})))?t:n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:o,tabValues:f})})),b=m[0],g=m[1],y=p({queryString:l,groupId:s}),h=y[0],w=y[1],E=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:s}.groupId),r=(0,c.Dv)(t),n=r[0],u=r[1],[n,(0,a.useCallback)((function(e){t&&u.set(e)}),[t,u])]),O=E[0],T=E[1],I=function(){var e=null!=h?h:O;return v({value:e,tabValues:f})?e:null}();return(0,a.useLayoutEffect)((function(){I&&g(I)}),[I]),{selectedValue:b,selectValue:(0,a.useCallback)((function(e){if(!v({value:e,tabValues:f}))throw new Error("Can't select invalid tab value="+e);g(e),w(e),T(e)}),[w,T,f]),tabValues:f}}var b=r(195);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function y(e){var t=e.className,r=e.block,i=e.selectedValue,l=e.selectValue,s=e.tabValues,c=[],f=(0,o.a_)().blockElementScrollPositionUntilNextRender,d=function(e){var t=e.currentTarget,r=c.indexOf(t),n=s[r].value;n!==i&&(f(t),l(n))},v=function(e){var t,r=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":var n,a=c.indexOf(e.currentTarget)+1;r=null!=(n=c[a])?n:c[0];break;case"ArrowLeft":var u,o=c.indexOf(e.currentTarget)-1;r=null!=(u=c[o])?u:c[c.length-1]}null==(t=r)||t.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.A)("tabs",{"tabs--block":r},t)},s.map((function(e){var t=e.value,r=e.label,o=e.attributes;return a.createElement("li",(0,n.A)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:function(e){return c.push(e)},onKeyDown:v,onClick:d},o,{className:(0,u.A)("tabs__item",g.tabItem,null==o?void 0:o.className,{"tabs__item--active":i===t})}),null!=r?r:t)})))}function h(e){var t=e.lazy,r=e.children,n=e.selectedValue,u=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){var o=u.find((function(e){return e.props.value===n}));return o?(0,a.cloneElement)(o,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},u.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==n})})))}function w(e){var t=m(e);return a.createElement("div",{className:(0,u.A)("tabs-container",g.tabList)},a.createElement(y,(0,n.A)({},e,t)),a.createElement(h,(0,n.A)({},e,t)))}function E(e){var t=(0,b.A)();return a.createElement(w,(0,n.A)({key:String(t)},e))}},46061:(e,t,r)=>{r.d(t,{A:()=>o});var n=r(96540),a=r(20053);const u={tabItem:"tabItem_Ymn6"};function o(e){var t=e.children,r=e.hidden,o=e.className;return n.createElement("div",{role:"tabpanel",className:(0,a.A)(u.tabItem,o),hidden:r},t)}}}]);