"use strict";(self.webpackChunkrne_website=self.webpackChunkrne_website||[]).push([[1411],{15680:(e,t,r)=>{r.d(t,{xA:()=>c,yg:()=>g});var n=r(96540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),s=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),d=s(r),m=a,g=d["".concat(i,".").concat(m)]||d[m]||p[m]||l;return r?n.createElement(g,o(o({ref:t},c),{},{components:r})):n.createElement(g,o({ref:t},c))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=m;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u[d]="string"==typeof e?e:a,o[1]=u;for(var s=2;s<l;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},21518:(e,t,r)=>{r.d(t,{A:()=>w});var n=r(9668),a=r(96540),l=r(20053),o=r(55236),u=r(56347),i=r(5793),s=r(47422),c=r(81038);function d(e){return function(e){var t,r;return null!=(t=null==(r=a.Children.map(e,(function(e){if(!e||(0,a.isValidElement)(e)&&(t=e.props)&&"object"==typeof t&&"value"in t)return e;var t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:r.filter(Boolean))?t:[]}(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}function p(e){var t=e.values,r=e.children;return(0,a.useMemo)((function(){var e=null!=t?t:d(r);return function(e){var t=(0,s.X)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,r])}function m(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function g(e){var t=e.queryString,r=void 0!==t&&t,n=e.groupId,l=(0,u.W6)(),o=function(e){var t=e.queryString,r=void 0!==t&&t,n=e.groupId;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=n?n:null}({queryString:r,groupId:n});return[(0,i.aZ)(o),(0,a.useCallback)((function(e){if(o){var t=new URLSearchParams(l.location.search);t.set(o,e),l.replace(Object.assign({},l.location,{search:t.toString()}))}}),[o,l])]}function f(e){var t,r,n,l,o=e.defaultValue,u=e.queryString,i=void 0!==u&&u,s=e.groupId,d=p(e),f=(0,a.useState)((function(){return function(e){var t,r=e.defaultValue,n=e.tabValues;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!m({value:r,tabValues:n}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+r+'" but none of its children has the corresponding value. Available values are: '+n.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return r}var a=null!=(t=n.find((function(e){return e.default})))?t:n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:o,tabValues:d})})),y=f[0],v=f[1],b=g({queryString:i,groupId:s}),h=b[0],N=b[1],w=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:s}.groupId),r=(0,c.Dv)(t),n=r[0],l=r[1],[n,(0,a.useCallback)((function(e){t&&l.set(e)}),[t,l])]),E=w[0],C=w[1],O=function(){var e=null!=h?h:E;return m({value:e,tabValues:d})?e:null}();return(0,a.useLayoutEffect)((function(){O&&v(O)}),[O]),{selectedValue:y,selectValue:(0,a.useCallback)((function(e){if(!m({value:e,tabValues:d}))throw new Error("Can't select invalid tab value="+e);v(e),N(e),C(e)}),[N,C,d]),tabValues:d}}var y=r(195);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function b(e){var t=e.className,r=e.block,u=e.selectedValue,i=e.selectValue,s=e.tabValues,c=[],d=(0,o.a_)().blockElementScrollPositionUntilNextRender,p=function(e){var t=e.currentTarget,r=c.indexOf(t),n=s[r].value;n!==u&&(d(t),i(n))},m=function(e){var t,r=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":var n,a=c.indexOf(e.currentTarget)+1;r=null!=(n=c[a])?n:c[0];break;case"ArrowLeft":var l,o=c.indexOf(e.currentTarget)-1;r=null!=(l=c[o])?l:c[c.length-1]}null==(t=r)||t.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.A)("tabs",{"tabs--block":r},t)},s.map((function(e){var t=e.value,r=e.label,o=e.attributes;return a.createElement("li",(0,n.A)({role:"tab",tabIndex:u===t?0:-1,"aria-selected":u===t,key:t,ref:function(e){return c.push(e)},onKeyDown:m,onClick:p},o,{className:(0,l.A)("tabs__item",v.tabItem,null==o?void 0:o.className,{"tabs__item--active":u===t})}),null!=r?r:t)})))}function h(e){var t=e.lazy,r=e.children,n=e.selectedValue,l=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){var o=l.find((function(e){return e.props.value===n}));return o?(0,a.cloneElement)(o,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},l.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==n})})))}function N(e){var t=f(e);return a.createElement("div",{className:(0,l.A)("tabs-container",v.tabList)},a.createElement(b,(0,n.A)({},e,t)),a.createElement(h,(0,n.A)({},e,t)))}function w(e){var t=(0,y.A)();return a.createElement(N,(0,n.A)({key:String(t)},e))}},39722:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>g,frontMatter:()=>u,metadata:()=>s,toc:()=>d});var n=r(9668),a=r(21367),l=(r(96540),r(15680)),o=(r(21518),r(46061),r(8755),["components"]),u={id:"card_image",title:"Card.Image"},i=void 0,s={unversionedId:"components/card_image",id:"version-4.0.0-rc.2/components/card_image",title:"Card.Image",description:"Add information in the form of image to the card.",source:"@site/versioned_docs/version-4.0.0-rc.2/components/Card.Image.mdx",sourceDirName:"components",slug:"/components/card_image",permalink:"/docs/4.0.0-rc.2/components/card_image",draft:!1,editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/versioned_docs/version-4.0.0-rc.2/components/Card.Image.mdx",tags:[],version:"4.0.0-rc.2",frontMatter:{id:"card_image",title:"Card.Image"},sidebar:"docs",previous:{title:"Card.FeaturedTitle",permalink:"/docs/4.0.0-rc.2/components/card_featuredtitle"},next:{title:"Card.Title",permalink:"/docs/4.0.0-rc.2/components/card_title"}},c={},d=[{value:"Props",id:"props",level:2}],p={toc:d},m="wrapper";function g(e){var t=e.components,r=(0,a.A)(e,o);return(0,l.yg)(m,(0,n.A)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,l.yg)("p",null,"Add information in the form of image to the card.\nThis, Receives all ",(0,l.yg)("a",{parentName:"p",href:"/docs/4.0.0-rc.2/components/image#props"},"Image")," props."),(0,l.yg)("h2",{id:"props"},"Props"),(0,l.yg)("admonition",{type:"note"},(0,l.yg)("p",{parentName:"admonition"},"Includes all ",(0,l.yg)("a",{parentName:"p",href:"image#props"},"Image")," props.")),(0,l.yg)("div",{class:"table-responsive"},(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Name"),(0,l.yg)("th",{parentName:"tr",align:null},"Type"),(0,l.yg)("th",{parentName:"tr",align:null},"Default"),(0,l.yg)("th",{parentName:"tr",align:null},"Description"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"onLongPress")),(0,l.yg)("td",{parentName:"tr",align:null},"GestureResponderEventHandler"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"Called when a long-tap gesture is detected.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"onPress")),(0,l.yg)("td",{parentName:"tr",align:null},"GestureResponderEventHandler"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"Called when a single tap gesture is detected.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"onPressIn")),(0,l.yg)("td",{parentName:"tr",align:null},"GestureResponderEventHandler"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"Called when a touch is engaged before ",(0,l.yg)("inlineCode",{parentName:"td"},"onPress"),".")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"onPressOut")),(0,l.yg)("td",{parentName:"tr",align:null},"GestureResponderEventHandler"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"Called when a touch is released before ",(0,l.yg)("inlineCode",{parentName:"td"},"onPress"),".")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"pressableProps")),(0,l.yg)("td",{parentName:"tr",align:null},"PressableProps except click handlers"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"None")),(0,l.yg)("td",{parentName:"tr",align:null}))))))}g.isMDXComponent=!0},46061:(e,t,r)=>{r.d(t,{A:()=>o});var n=r(96540),a=r(20053);const l={tabItem:"tabItem_Ymn6"};function o(e){var t=e.children,r=e.hidden,o=e.className;return n.createElement("div",{role:"tabpanel",className:(0,a.A)(l.tabItem,o),hidden:r},t)}}}]);