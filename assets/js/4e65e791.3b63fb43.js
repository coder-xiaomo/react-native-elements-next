"use strict";(self.webpackChunkrne_website=self.webpackChunkrne_website||[]).push([[44547],{12195:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>g,contentTitle:()=>p,default:()=>v,frontMatter:()=>d,metadata:()=>m,toc:()=>f});var a=n(9668),r=n(21367),l=(n(96540),n(15680)),o=(n(21518),n(46061),n(8755),["components"]),i={toc:[]},u="wrapper";function s(e){var t=e.components,n=(0,r.A)(e,o);return(0,l.yg)(u,(0,a.A)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,l.yg)("div",{className:"snack-player","data-snack-name":"RNE SpeedDial","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20SpeedDial%20%7D%20from%20'%40rneui%2Fthemed'%3B%0A%0Aexport%20default%20()%20%3D%3E%20%7B%0Aconst%20%5Bopen%2C%20setOpen%5D%20%3D%20React.useState(false)%3B%0Areturn%20(%0A%20%20%3CSpeedDial%0A%20%20%20%20isOpen%3D%7Bopen%7D%0A%20%20%20%20icon%3D%7B%7B%20name%3A%20'edit'%2C%20color%3A%20'%23fff'%20%7D%7D%0A%20%20%20%20openIcon%3D%7B%7B%20name%3A%20'close'%2C%20color%3A%20'%23fff'%20%7D%7D%0A%20%20%20%20onOpen%3D%7B()%20%3D%3E%20setOpen(!open)%7D%0A%20%20%20%20onClose%3D%7B()%20%3D%3E%20setOpen(!open)%7D%0A%20%20%3E%0A%20%20%20%20%3CSpeedDial.Action%0A%20%20%20%20%20%20icon%3D%7B%7B%20name%3A%20'add'%2C%20color%3A%20'%23fff'%20%7D%7D%0A%20%20%20%20%20%20title%3D%22Add%22%0A%20%20%20%20%20%20onPress%3D%7B()%20%3D%3E%20console.log('Add%20Something')%7D%0A%20%20%20%20%2F%3E%0A%20%20%20%20%3CSpeedDial.Action%0A%20%20%20%20%20%20icon%3D%7B%7B%20name%3A%20'delete'%2C%20color%3A%20'%23fff'%20%7D%7D%0A%20%20%20%20%20%20title%3D%22Delete%22%0A%20%20%20%20%20%20onPress%3D%7B()%20%3D%3E%20console.log('Delete%20Something')%7D%0A%20%20%20%20%2F%3E%0A%20%20%3C%2FSpeedDial%3E%0A)%3B%0A%7D%3B","data-snack-dependencies":"@rneui/themed,@rneui/base","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}))}s.isMDXComponent=!0;var c=["components"],d={id:"speeddial",title:"SpeedDial"},p=void 0,m={unversionedId:"components/speeddial",id:"version-4.0.0-rc.2/components/speeddial",title:"SpeedDial",description:"When pressed, a floating action button can display three to six related actions in the form of a speed dial.",source:"@site/versioned_docs/version-4.0.0-rc.2/components/SpeedDial.mdx",sourceDirName:"components",slug:"/components/speeddial",permalink:"/react-native-elements-next/docs/4.0.0-rc.2/components/speeddial",draft:!1,editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/versioned_docs/version-4.0.0-rc.2/components/SpeedDial.mdx",tags:[],version:"4.0.0-rc.2",frontMatter:{id:"speeddial",title:"SpeedDial"},sidebar:"docs",previous:{title:"SocialIcon",permalink:"/react-native-elements-next/docs/4.0.0-rc.2/components/socialicon"},next:{title:"SpeedDial.Action",permalink:"/react-native-elements-next/docs/4.0.0-rc.2/components/speeddial_action"}},g={},f=[{value:"Usage",id:"usage",level:2},{value:"Props",id:"props",level:2}],y={toc:f},b="wrapper";function v(e){var t=e.components,n=(0,r.A)(e,c);return(0,l.yg)(b,(0,a.A)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,l.yg)("p",null,"When pressed, a floating action button can display three to six related actions in the form of a speed dial.\nIf more than six actions are needed, something other than a FAB should be used to present them.\nUpon press, the FAB remains visible and emits a stack of related actions.\nIf the FAB is tapped in this state, it should either initiate its default action or close the speed dial actions."),(0,l.yg)("h2",{id:"usage"},"Usage"),(0,l.yg)(s,{mdxType:"Usage"}),(0,l.yg)("h2",{id:"props"},"Props"),(0,l.yg)("admonition",{type:"note"},(0,l.yg)("p",{parentName:"admonition"},"Includes all ",(0,l.yg)("a",{parentName:"p",href:"button#props"},"Button"),", ",(0,l.yg)("a",{parentName:"p",href:"fab#props"},"FAB")," props.")),(0,l.yg)("div",{class:"table-responsive"},(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Name"),(0,l.yg)("th",{parentName:"tr",align:null},"Type"),(0,l.yg)("th",{parentName:"tr",align:null},"Default"),(0,l.yg)("th",{parentName:"tr",align:null},"Description"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"backdropPressableProps")),(0,l.yg)("td",{parentName:"tr",align:null},"PressableProps"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"Props for Backdrop Pressable")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"children")),(0,l.yg)("td",{parentName:"tr",align:null},"SpeedDial.Action"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"SpeedDial Action as children.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"isOpen")),(0,l.yg)("td",{parentName:"tr",align:null},"boolean"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"false")),(0,l.yg)("td",{parentName:"tr",align:null},"Opens the action stack.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"labelPressable")),(0,l.yg)("td",{parentName:"tr",align:null},"boolean"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"onPress on Label Press for all Actions")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"onClose")),(0,l.yg)("td",{parentName:"tr",align:null},"Function"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"Function")),(0,l.yg)("td",{parentName:"tr",align:null},"Callback fired when the component requests to be closed.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"onOpen")),(0,l.yg)("td",{parentName:"tr",align:null},"Function"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"Function")),(0,l.yg)("td",{parentName:"tr",align:null},"Callback fired when the component requests to be open.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"openIcon")),(0,l.yg)("td",{parentName:"tr",align:null},"IconNode"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"Icon shown on FAB when action stack is open.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"overlayColor")),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"Add overlay color to the speed dial.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"transitionDuration")),(0,l.yg)("td",{parentName:"tr",align:null},"number"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"150")),(0,l.yg)("td",{parentName:"tr",align:null},"The duration for the transition, in milliseconds."))))))}v.isMDXComponent=!0},15680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>g});var a=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),s=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=s(n),m=r,g=d["".concat(u,".").concat(m)]||d[m]||p[m]||l;return n?a.createElement(g,o(o({ref:t},c),{},{components:n})):a.createElement(g,o({ref:t},c))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[d]="string"==typeof e?e:r,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},21518:(e,t,n)=>{n.d(t,{A:()=>D});var a=n(9668),r=n(96540),l=n(20053),o=n(55236),i=n(56347),u=n(5793),s=n(47422),c=n(81038);function d(e){return function(e){var t,n;return null!=(t=null==(n=r.Children.map(e,(function(e){if(!e||(0,r.isValidElement)(e)&&(t=e.props)&&"object"==typeof t&&"value"in t)return e;var t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:n.filter(Boolean))?t:[]}(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}function p(e){var t=e.values,n=e.children;return(0,r.useMemo)((function(){var e=null!=t?t:d(n);return function(e){var t=(0,s.X)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function m(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function g(e){var t=e.queryString,n=void 0!==t&&t,a=e.groupId,l=(0,i.W6)(),o=function(e){var t=e.queryString,n=void 0!==t&&t,a=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=a?a:null}({queryString:n,groupId:a});return[(0,u.aZ)(o),(0,r.useCallback)((function(e){if(o){var t=new URLSearchParams(l.location.search);t.set(o,e),l.replace(Object.assign({},l.location,{search:t.toString()}))}}),[o,l])]}function f(e){var t,n,a,l,o=e.defaultValue,i=e.queryString,u=void 0!==i&&i,s=e.groupId,d=p(e),f=(0,r.useState)((function(){return function(e){var t,n=e.defaultValue,a=e.tabValues;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:a}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+a.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var r=null!=(t=a.find((function(e){return e.default})))?t:a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:o,tabValues:d})})),y=f[0],b=f[1],v=g({queryString:u,groupId:s}),h=v[0],N=v[1],D=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:s}.groupId),n=(0,c.Dv)(t),a=n[0],l=n[1],[a,(0,r.useCallback)((function(e){t&&l.set(e)}),[t,l])]),A=D[0],w=D[1],E=function(){var e=null!=h?h:A;return m({value:e,tabValues:d})?e:null}();return(0,r.useLayoutEffect)((function(){E&&b(E)}),[E]),{selectedValue:y,selectValue:(0,r.useCallback)((function(e){if(!m({value:e,tabValues:d}))throw new Error("Can't select invalid tab value="+e);b(e),N(e),w(e)}),[N,w,d]),tabValues:d}}var y=n(195);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function v(e){var t=e.className,n=e.block,i=e.selectedValue,u=e.selectValue,s=e.tabValues,c=[],d=(0,o.a_)().blockElementScrollPositionUntilNextRender,p=function(e){var t=e.currentTarget,n=c.indexOf(t),a=s[n].value;a!==i&&(d(t),u(a))},m=function(e){var t,n=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":var a,r=c.indexOf(e.currentTarget)+1;n=null!=(a=c[r])?a:c[0];break;case"ArrowLeft":var l,o=c.indexOf(e.currentTarget)-1;n=null!=(l=c[o])?l:c[c.length-1]}null==(t=n)||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.A)("tabs",{"tabs--block":n},t)},s.map((function(e){var t=e.value,n=e.label,o=e.attributes;return r.createElement("li",(0,a.A)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:function(e){return c.push(e)},onKeyDown:m,onClick:p},o,{className:(0,l.A)("tabs__item",b.tabItem,null==o?void 0:o.className,{"tabs__item--active":i===t})}),null!=n?n:t)})))}function h(e){var t=e.lazy,n=e.children,a=e.selectedValue,l=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){var o=l.find((function(e){return e.props.value===a}));return o?(0,r.cloneElement)(o,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},l.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a})})))}function N(e){var t=f(e);return r.createElement("div",{className:(0,l.A)("tabs-container",b.tabList)},r.createElement(v,(0,a.A)({},e,t)),r.createElement(h,(0,a.A)({},e,t)))}function D(e){var t=(0,y.A)();return r.createElement(N,(0,a.A)({key:String(t)},e))}},46061:(e,t,n)=>{n.d(t,{A:()=>o});var a=n(96540),r=n(20053);const l={tabItem:"tabItem_Ymn6"};function o(e){var t=e.children,n=e.hidden,o=e.className;return a.createElement("div",{role:"tabpanel",className:(0,r.A)(l.tabItem,o),hidden:n},t)}}}]);