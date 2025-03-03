"use strict";(self.webpackChunkrne_website=self.webpackChunkrne_website||[]).push([[68968],{15680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>y});var a=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),s=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=s(n),m=r,y=c["".concat(u,".").concat(m)]||c[m]||d[m]||l;return n?a.createElement(y,o(o({ref:t},p),{},{components:n})):a.createElement(y,o({ref:t},p))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[c]="string"==typeof e?e:r,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},21518:(e,t,n)=>{n.d(t,{A:()=>A});var a=n(9668),r=n(96540),l=n(20053),o=n(55236),i=n(56347),u=n(5793),s=n(47422),p=n(81038);function c(e){return function(e){var t,n;return null!=(t=null==(n=r.Children.map(e,(function(e){if(!e||(0,r.isValidElement)(e)&&(t=e.props)&&"object"==typeof t&&"value"in t)return e;var t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:n.filter(Boolean))?t:[]}(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}function d(e){var t=e.values,n=e.children;return(0,r.useMemo)((function(){var e=null!=t?t:c(n);return function(e){var t=(0,s.X)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function m(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function y(e){var t=e.queryString,n=void 0!==t&&t,a=e.groupId,l=(0,i.W6)(),o=function(e){var t=e.queryString,n=void 0!==t&&t,a=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=a?a:null}({queryString:n,groupId:a});return[(0,u.aZ)(o),(0,r.useCallback)((function(e){if(o){var t=new URLSearchParams(l.location.search);t.set(o,e),l.replace(Object.assign({},l.location,{search:t.toString()}))}}),[o,l])]}function g(e){var t,n,a,l,o=e.defaultValue,i=e.queryString,u=void 0!==i&&i,s=e.groupId,c=d(e),g=(0,r.useState)((function(){return function(e){var t,n=e.defaultValue,a=e.tabValues;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:a}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+a.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var r=null!=(t=a.find((function(e){return e.default})))?t:a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:o,tabValues:c})})),v=g[0],f=g[1],b=y({queryString:u,groupId:s}),N=b[0],h=b[1],A=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:s}.groupId),n=(0,p.Dv)(t),a=n[0],l=n[1],[a,(0,r.useCallback)((function(e){t&&l.set(e)}),[t,l])]),C=A[0],w=A[1],D=function(){var e=null!=N?N:C;return m({value:e,tabValues:c})?e:null}();return(0,r.useLayoutEffect)((function(){D&&f(D)}),[D]),{selectedValue:v,selectValue:(0,r.useCallback)((function(e){if(!m({value:e,tabValues:c}))throw new Error("Can't select invalid tab value="+e);f(e),h(e),w(e)}),[h,w,c]),tabValues:c}}var v=n(195);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function b(e){var t=e.className,n=e.block,i=e.selectedValue,u=e.selectValue,s=e.tabValues,p=[],c=(0,o.a_)().blockElementScrollPositionUntilNextRender,d=function(e){var t=e.currentTarget,n=p.indexOf(t),a=s[n].value;a!==i&&(c(t),u(a))},m=function(e){var t,n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":var a,r=p.indexOf(e.currentTarget)+1;n=null!=(a=p[r])?a:p[0];break;case"ArrowLeft":var l,o=p.indexOf(e.currentTarget)-1;n=null!=(l=p[o])?l:p[p.length-1]}null==(t=n)||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.A)("tabs",{"tabs--block":n},t)},s.map((function(e){var t=e.value,n=e.label,o=e.attributes;return r.createElement("li",(0,a.A)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:function(e){return p.push(e)},onKeyDown:m,onClick:d},o,{className:(0,l.A)("tabs__item",f.tabItem,null==o?void 0:o.className,{"tabs__item--active":i===t})}),null!=n?n:t)})))}function N(e){var t=e.lazy,n=e.children,a=e.selectedValue,l=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){var o=l.find((function(e){return e.props.value===a}));return o?(0,r.cloneElement)(o,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},l.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a})})))}function h(e){var t=g(e);return r.createElement("div",{className:(0,l.A)("tabs-container",f.tabList)},r.createElement(b,(0,a.A)({},e,t)),r.createElement(N,(0,a.A)({},e,t)))}function A(e){var t=(0,v.A)();return r.createElement(h,(0,a.A)({key:String(t)},e))}},35771:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>y,contentTitle:()=>d,default:()=>b,frontMatter:()=>c,metadata:()=>m,toc:()=>g});var a=n(9668),r=n(21367),l=(n(96540),n(15680)),o=(n(21518),n(46061),n(8755),["components"]),i={toc:[]},u="wrapper";function s(e){var t=e.components,n=(0,r.A)(e,o);return(0,l.yg)(u,(0,a.A)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,l.yg)("hr",null),(0,l.yg)("blockquote",null,(0,l.yg)("p",{parentName:"blockquote"},(0,l.yg)("strong",{parentName:"p"},"Web-platform specific note"),":"),(0,l.yg)("p",{parentName:"blockquote"},"You ",(0,l.yg)("strong",{parentName:"p"},"must")," pass a valid React Native ",(0,l.yg)("a",{parentName:"p",href:"https://reactnative.dev/docs/modal"},(0,l.yg)("inlineCode",{parentName:"a"},"Modal"))," component implementation\ninto ",(0,l.yg)("a",{parentName:"p",href:"#modalcomponent"},(0,l.yg)("inlineCode",{parentName:"a"},"ModalComponent"))," prop because ",(0,l.yg)("inlineCode",{parentName:"p"},"Modal")," component is not implemented yet in ",(0,l.yg)("inlineCode",{parentName:"p"},"react-native-web"))),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-jsx"},"...\nimport Modal from 'modal-react-native-web';\n\n...\n\n<Overlay ModalComponent={Modal} ... />\n...\n")),(0,l.yg)("div",{className:"snack-player","data-snack-name":"RNE Overlay","data-snack-description":"Example usage","data-snack-code":"import%20React%2C%20%7B%20useState%20%7D%20from%20'react'%3B%0Aimport%20%7B%20Button%2C%20Overlay%2C%20Icon%20%7D%20from%20'%40rneui%2Fthemed'%3B%0Aimport%20%7B%20View%2C%20Text%2C%20StyleSheet%20%7D%20from%20'react-native'%3B%0A%0Atype%20OverlayComponentProps%20%3D%20%7B%7D%3B%0A%0Aconst%20OverlayComponent%3A%20React.FunctionComponent%3COverlayComponentProps%3E%20%3D%20()%20%3D%3E%20%7B%0Aconst%20%5Bvisible%2C%20setVisible%5D%20%3D%20useState(false)%3B%0A%0Aconst%20toggleOverlay%20%3D%20()%20%3D%3E%20%7B%0A%20%20setVisible(!visible)%3B%0A%7D%3B%0A%0Areturn%20(%0A%20%20%3CView%3E%0A%20%20%20%20%3CButton%0A%20%20%20%20%20%20title%3D%22Open%20Overlay%22%0A%20%20%20%20%20%20onPress%3D%7BtoggleOverlay%7D%0A%20%20%20%20%20%20buttonStyle%3D%7Bstyles.button%7D%0A%20%20%20%20%2F%3E%0A%20%20%20%20%3COverlay%20isVisible%3D%7Bvisible%7D%20onBackdropPress%3D%7BtoggleOverlay%7D%3E%0A%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.textPrimary%7D%3EHello!%3C%2FText%3E%0A%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.textSecondary%7D%3E%0A%20%20%20%20%20%20%20%20Welcome%20to%20React%20Native%20Elements%0A%20%20%20%20%20%20%3C%2FText%3E%0A%20%20%20%20%20%20%3CButton%0A%20%20%20%20%20%20%20%20icon%3D%7B%0A%20%20%20%20%20%20%20%20%20%20%3CIcon%0A%20%20%20%20%20%20%20%20%20%20%20%20name%3D%22wrench%22%0A%20%20%20%20%20%20%20%20%20%20%20%20type%3D%22font-awesome%22%0A%20%20%20%20%20%20%20%20%20%20%20%20color%3D%22white%22%0A%20%20%20%20%20%20%20%20%20%20%20%20size%3D%7B25%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20iconStyle%3D%7B%7B%20marginRight%3A%2010%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20title%3D%22Start%20Building%22%0A%20%20%20%20%20%20%20%20onPress%3D%7BtoggleOverlay%7D%0A%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%3C%2FOverlay%3E%0A%20%20%3C%2FView%3E%0A)%3B%0A%7D%3B%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0Abutton%3A%20%7B%0A%20%20margin%3A%2010%2C%0A%7D%2C%0AtextPrimary%3A%20%7B%0A%20%20marginVertical%3A%2020%2C%0A%20%20textAlign%3A%20'center'%2C%0A%20%20fontSize%3A%2020%2C%0A%7D%2C%0AtextSecondary%3A%20%7B%0A%20%20marginBottom%3A%2010%2C%0A%20%20textAlign%3A%20'center'%2C%0A%20%20fontSize%3A%2017%2C%0A%7D%2C%0A%7D)%3B%0A%0Aexport%20default%20OverlayComponent%3B","data-snack-dependencies":"@rneui/themed,@rneui/base","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}))}s.isMDXComponent=!0;var p=["components"],c={id:"overlay",title:"Overlay"},d=void 0,m={unversionedId:"components/overlay",id:"version-4.0.0-rc.2/components/overlay",title:"Overlay",description:"The Overlay is a view that floats above an app\u2019s content.",source:"@site/versioned_docs/version-4.0.0-rc.2/components/Overlay.mdx",sourceDirName:"components",slug:"/components/overlay",permalink:"/docs/4.0.0-rc.2/components/overlay",draft:!1,editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/versioned_docs/version-4.0.0-rc.2/components/Overlay.mdx",tags:[],version:"4.0.0-rc.2",frontMatter:{id:"overlay",title:"Overlay"},sidebar:"docs",previous:{title:"ListItem.Title",permalink:"/docs/4.0.0-rc.2/components/listitem_title"},next:{title:"PricingCard",permalink:"/docs/4.0.0-rc.2/components/pricingcard"}},y={},g=[{value:"Usage",id:"usage",level:2},{value:"Props",id:"props",level:2}],v={toc:g},f="wrapper";function b(e){var t=e.components,n=(0,r.A)(e,p);return(0,l.yg)(f,(0,a.A)({},v,n,{components:t,mdxType:"MDXLayout"}),(0,l.yg)("p",null,"The Overlay is a view that floats above an app\u2019s content.\nOverlays are an easy way to inform or request information from the user."),(0,l.yg)("h2",{id:"usage"},"Usage"),(0,l.yg)(s,{mdxType:"Usage"}),(0,l.yg)("h2",{id:"props"},"Props"),(0,l.yg)("admonition",{type:"note"},(0,l.yg)("p",{parentName:"admonition"},"Includes all ",(0,l.yg)("a",{parentName:"p",href:"https://reactnative.dev/docs/view#props"},"View")," props.")),(0,l.yg)("div",{class:"table-responsive"},(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Name"),(0,l.yg)("th",{parentName:"tr",align:null},"Type"),(0,l.yg)("th",{parentName:"tr",align:null},"Default"),(0,l.yg)("th",{parentName:"tr",align:null},"Description"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"ModalComponent")),(0,l.yg)("td",{parentName:"tr",align:null},"typeof Component"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"Override React Native ",(0,l.yg)("inlineCode",{parentName:"td"},"Modal")," component (usable for web-platform).")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"backdropStyle")),(0,l.yg)("td",{parentName:"tr",align:null},"View Style"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"Style of the backdrop container.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"fullScreen")),(0,l.yg)("td",{parentName:"tr",align:null},"boolean"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"false")),(0,l.yg)("td",{parentName:"tr",align:null},"If set to true, the modal will take up the entire screen width and height.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"isVisible")),(0,l.yg)("td",{parentName:"tr",align:null},"boolean"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"If true, the overlay is visible.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"onBackdropPress")),(0,l.yg)("td",{parentName:"tr",align:null},"Function"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"Function")),(0,l.yg)("td",{parentName:"tr",align:null},"Handler for backdrop press (only works when ",(0,l.yg)("inlineCode",{parentName:"td"},"fullscreen")," is false).")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"onLongPress")),(0,l.yg)("td",{parentName:"tr",align:null},"GestureResponderEventHandler"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"Called when a long-tap gesture is detected.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"onPressIn")),(0,l.yg)("td",{parentName:"tr",align:null},"GestureResponderEventHandler"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"Called when a touch is engaged before ",(0,l.yg)("inlineCode",{parentName:"td"},"onPress"),".")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"onPressOut")),(0,l.yg)("td",{parentName:"tr",align:null},"GestureResponderEventHandler"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"Called when a touch is released before ",(0,l.yg)("inlineCode",{parentName:"td"},"onPress"),".")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"overlayStyle")),(0,l.yg)("td",{parentName:"tr",align:null},"View Style"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"Style of the actual overlay.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"pressableProps")),(0,l.yg)("td",{parentName:"tr",align:null},"PressableProps except click handlers"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"None")),(0,l.yg)("td",{parentName:"tr",align:null}))))))}b.isMDXComponent=!0},46061:(e,t,n)=>{n.d(t,{A:()=>o});var a=n(96540),r=n(20053);const l={tabItem:"tabItem_Ymn6"};function o(e){var t=e.children,n=e.hidden,o=e.className;return a.createElement("div",{role:"tabpanel",className:(0,r.A)(l.tabItem,o),hidden:n},t)}}}]);