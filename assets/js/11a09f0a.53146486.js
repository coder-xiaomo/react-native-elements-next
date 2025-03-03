"use strict";(self.webpackChunkrne_website=self.webpackChunkrne_website||[]).push([[20706],{15680:(e,r,t)=>{t.d(r,{xA:()=>s,yg:()=>v});var n=t(96540);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function u(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=n.createContext({}),c=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},s=function(e){var r=c(e.components);return n.createElement(l.Provider,{value:r},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),d=c(t),f=a,v=d["".concat(l,".").concat(f)]||d[f]||p[f]||o;return t?n.createElement(v,i(i({ref:r},s),{},{components:t})):n.createElement(v,i({ref:r},s))}));function v(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=f;var u={};for(var l in r)hasOwnProperty.call(r,l)&&(u[l]=r[l]);u.originalType=e,u[d]="string"==typeof e?e:a,i[1]=u;for(var c=2;c<o;c++)i[c]=t[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},21518:(e,r,t)=>{t.d(r,{A:()=>E});var n=t(9668),a=t(96540),o=t(20053),i=t(55236),u=t(56347),l=t(5793),c=t(47422),s=t(81038);function d(e){return function(e){var r,t;return null!=(r=null==(t=a.Children.map(e,(function(e){if(!e||(0,a.isValidElement)(e)&&(r=e.props)&&"object"==typeof r&&"value"in r)return e;var r;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:t.filter(Boolean))?r:[]}(e).map((function(e){var r=e.props;return{value:r.value,label:r.label,attributes:r.attributes,default:r.default}}))}function p(e){var r=e.values,t=e.children;return(0,a.useMemo)((function(){var e=null!=r?r:d(t);return function(e){var r=(0,c.X)(e,(function(e,r){return e.value===r.value}));if(r.length>0)throw new Error('Docusaurus error: Duplicate values "'+r.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[r,t])}function f(e){var r=e.value;return e.tabValues.some((function(e){return e.value===r}))}function v(e){var r=e.queryString,t=void 0!==r&&r,n=e.groupId,o=(0,u.W6)(),i=function(e){var r=e.queryString,t=void 0!==r&&r,n=e.groupId;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=n?n:null}({queryString:t,groupId:n});return[(0,l.aZ)(i),(0,a.useCallback)((function(e){if(i){var r=new URLSearchParams(o.location.search);r.set(i,e),o.replace(Object.assign({},o.location,{search:r.toString()}))}}),[i,o])]}function m(e){var r,t,n,o,i=e.defaultValue,u=e.queryString,l=void 0!==u&&u,c=e.groupId,d=p(e),m=(0,a.useState)((function(){return function(e){var r,t=e.defaultValue,n=e.tabValues;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!f({value:t,tabValues:n}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+t+'" but none of its children has the corresponding value. Available values are: '+n.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return t}var a=null!=(r=n.find((function(e){return e.default})))?r:n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:i,tabValues:d})})),b=m[0],y=m[1],h=v({queryString:l,groupId:c}),g=h[0],w=h[1],E=(r=function(e){return e?"docusaurus.tab."+e:null}({groupId:c}.groupId),t=(0,s.Dv)(r),n=t[0],o=t[1],[n,(0,a.useCallback)((function(e){r&&o.set(e)}),[r,o])]),O=E[0],T=E[1],D=function(){var e=null!=g?g:O;return f({value:e,tabValues:d})?e:null}();return(0,a.useLayoutEffect)((function(){D&&y(D)}),[D]),{selectedValue:b,selectValue:(0,a.useCallback)((function(e){if(!f({value:e,tabValues:d}))throw new Error("Can't select invalid tab value="+e);y(e),w(e),T(e)}),[w,T,d]),tabValues:d}}var b=t(195);const y={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function h(e){var r=e.className,t=e.block,u=e.selectedValue,l=e.selectValue,c=e.tabValues,s=[],d=(0,i.a_)().blockElementScrollPositionUntilNextRender,p=function(e){var r=e.currentTarget,t=s.indexOf(r),n=c[t].value;n!==u&&(d(r),l(n))},f=function(e){var r,t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":var n,a=s.indexOf(e.currentTarget)+1;t=null!=(n=s[a])?n:s[0];break;case"ArrowLeft":var o,i=s.indexOf(e.currentTarget)-1;t=null!=(o=s[i])?o:s[s.length-1]}null==(r=t)||r.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.A)("tabs",{"tabs--block":t},r)},c.map((function(e){var r=e.value,t=e.label,i=e.attributes;return a.createElement("li",(0,n.A)({role:"tab",tabIndex:u===r?0:-1,"aria-selected":u===r,key:r,ref:function(e){return s.push(e)},onKeyDown:f,onClick:p},i,{className:(0,o.A)("tabs__item",y.tabItem,null==i?void 0:i.className,{"tabs__item--active":u===r})}),null!=t?t:r)})))}function g(e){var r=e.lazy,t=e.children,n=e.selectedValue,o=(Array.isArray(t)?t:[t]).filter(Boolean);if(r){var i=o.find((function(e){return e.props.value===n}));return i?(0,a.cloneElement)(i,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},o.map((function(e,r){return(0,a.cloneElement)(e,{key:r,hidden:e.props.value!==n})})))}function w(e){var r=m(e);return a.createElement("div",{className:(0,o.A)("tabs-container",y.tabList)},a.createElement(h,(0,n.A)({},e,r)),a.createElement(g,(0,n.A)({},e,r)))}function E(e){var r=(0,b.A)();return a.createElement(w,(0,n.A)({key:String(r)},e))}},46061:(e,r,t)=>{t.d(r,{A:()=>i});var n=t(96540),a=t(20053);const o={tabItem:"tabItem_Ymn6"};function i(e){var r=e.children,t=e.hidden,i=e.className;return n.createElement("div",{role:"tabpanel",className:(0,a.A)(o.tabItem,i),hidden:t},r)}},46485:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>l,default:()=>v,frontMatter:()=>u,metadata:()=>c,toc:()=>d});var n=t(9668),a=t(21367),o=(t(96540),t(15680)),i=(t(21518),t(46061),t(8755),["components"]),u={id:"card_divider",title:"Card.Divider"},l=void 0,c={unversionedId:"components/card_divider",id:"version-4.0.0-rc.1/components/card_divider",title:"Card.Divider",description:"Add divider to the card which acts as a separator between elements.",source:"@site/versioned_docs/version-4.0.0-rc.1/components/Card.Divider.mdx",sourceDirName:"components",slug:"/components/card_divider",permalink:"/docs/4.0.0-rc.1/components/card_divider",draft:!1,editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/versioned_docs/version-4.0.0-rc.1/components/Card.Divider.mdx",tags:[],version:"4.0.0-rc.1",frontMatter:{id:"card_divider",title:"Card.Divider"},sidebar:"docs",previous:{title:"Card",permalink:"/docs/4.0.0-rc.1/components/card"},next:{title:"Card.FeaturedSubtitle",permalink:"/docs/4.0.0-rc.1/components/card_featuredsubtitle"}},s={},d=[{value:"Props",id:"props",level:2}],p={toc:d},f="wrapper";function v(e){var r=e.components,t=(0,a.A)(e,i);return(0,o.yg)(f,(0,n.A)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,o.yg)("p",null,"Add divider to the card which acts as a separator between elements.\nThis, Receives all ",(0,o.yg)("a",{parentName:"p",href:"divider#props"},"Divider")," props."),(0,o.yg)("h2",{id:"props"},"Props"),(0,o.yg)("admonition",{type:"note"},(0,o.yg)("p",{parentName:"admonition"},"Includes all ",(0,o.yg)("a",{parentName:"p",href:"divider#props"},"Divider")," props.")))}v.isMDXComponent=!0}}]);