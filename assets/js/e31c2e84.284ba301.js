"use strict";(self.webpackChunkrne_website=self.webpackChunkrne_website||[]).push([[51968],{15680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>y});var r=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=s(n),d=a,y=p["".concat(u,".").concat(d)]||p[d]||m[d]||o;return n?r.createElement(y,l(l({ref:t},c),{},{components:n})):r.createElement(y,l({ref:t},c))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[p]="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},21518:(e,t,n)=>{n.d(t,{A:()=>N});var r=n(9668),a=n(96540),o=n(20053),l=n(55236),i=n(56347),u=n(5793),s=n(47422),c=n(81038);function p(e){return function(e){var t,n;return null!=(t=null==(n=a.Children.map(e,(function(e){if(!e||(0,a.isValidElement)(e)&&(t=e.props)&&"object"==typeof t&&"value"in t)return e;var t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:n.filter(Boolean))?t:[]}(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}function m(e){var t=e.values,n=e.children;return(0,a.useMemo)((function(){var e=null!=t?t:p(n);return function(e){var t=(0,s.X)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function d(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function y(e){var t=e.queryString,n=void 0!==t&&t,r=e.groupId,o=(0,i.W6)(),l=function(e){var t=e.queryString,n=void 0!==t&&t,r=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=r?r:null}({queryString:n,groupId:r});return[(0,u.aZ)(l),(0,a.useCallback)((function(e){if(l){var t=new URLSearchParams(o.location.search);t.set(l,e),o.replace(Object.assign({},o.location,{search:t.toString()}))}}),[l,o])]}function g(e){var t,n,r,o,l=e.defaultValue,i=e.queryString,u=void 0!==i&&i,s=e.groupId,p=m(e),g=(0,a.useState)((function(){return function(e){var t,n=e.defaultValue,r=e.tabValues;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!d({value:n,tabValues:r}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+r.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var a=null!=(t=r.find((function(e){return e.default})))?t:r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:l,tabValues:p})})),f=g[0],b=g[1],v=y({queryString:u,groupId:s}),h=v[0],A=v[1],N=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:s}.groupId),n=(0,c.Dv)(t),r=n[0],o=n[1],[r,(0,a.useCallback)((function(e){t&&o.set(e)}),[t,o])]),D=N[0],C=N[1],B=function(){var e=null!=h?h:D;return d({value:e,tabValues:p})?e:null}();return(0,a.useLayoutEffect)((function(){B&&b(B)}),[B]),{selectedValue:f,selectValue:(0,a.useCallback)((function(e){if(!d({value:e,tabValues:p}))throw new Error("Can't select invalid tab value="+e);b(e),A(e),C(e)}),[A,C,p]),tabValues:p}}var f=n(195);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function v(e){var t=e.className,n=e.block,i=e.selectedValue,u=e.selectValue,s=e.tabValues,c=[],p=(0,l.a_)().blockElementScrollPositionUntilNextRender,m=function(e){var t=e.currentTarget,n=c.indexOf(t),r=s[n].value;r!==i&&(p(t),u(r))},d=function(e){var t,n=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":var r,a=c.indexOf(e.currentTarget)+1;n=null!=(r=c[a])?r:c[0];break;case"ArrowLeft":var o,l=c.indexOf(e.currentTarget)-1;n=null!=(o=c[l])?o:c[c.length-1]}null==(t=n)||t.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.A)("tabs",{"tabs--block":n},t)},s.map((function(e){var t=e.value,n=e.label,l=e.attributes;return a.createElement("li",(0,r.A)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:function(e){return c.push(e)},onKeyDown:d,onClick:m},l,{className:(0,o.A)("tabs__item",b.tabItem,null==l?void 0:l.className,{"tabs__item--active":i===t})}),null!=n?n:t)})))}function h(e){var t=e.lazy,n=e.children,r=e.selectedValue,o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){var l=o.find((function(e){return e.props.value===r}));return l?(0,a.cloneElement)(l,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},o.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r})})))}function A(e){var t=g(e);return a.createElement("div",{className:(0,o.A)("tabs-container",b.tabList)},a.createElement(v,(0,r.A)({},e,t)),a.createElement(h,(0,r.A)({},e,t)))}function N(e){var t=(0,f.A)();return a.createElement(A,(0,r.A)({key:String(t)},e))}},46061:(e,t,n)=>{n.d(t,{A:()=>l});var r=n(96540),a=n(20053);const o={tabItem:"tabItem_Ymn6"};function l(e){var t=e.children,n=e.hidden,l=e.className;return r.createElement("div",{role:"tabpanel",className:(0,a.A)(o.tabItem,l),hidden:n},t)}},88242:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>y,contentTitle:()=>m,default:()=>v,frontMatter:()=>p,metadata:()=>d,toc:()=>g});var r=n(9668),a=n(21367),o=(n(96540),n(15680)),l=(n(21518),n(46061),n(8755),["components"]),i={toc:[]},u="wrapper";function s(e){var t=e.components,n=(0,a.A)(e,l);return(0,o.yg)(u,(0,r.A)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Note:"),"\nMake sure that you have completed ",(0,o.yg)("a",{parentName:"p",href:"../installation#install-react-native-safe-area-context"},"Step 3")," in the setup guide before using ",(0,o.yg)("inlineCode",{parentName:"p"},"BottomSheet"),"."),(0,o.yg)("p",null,"Overlay Modal that displays content from the bottom of the screen."),(0,o.yg)("div",{className:"snack-player","data-snack-name":"RNE BottomSheet","data-snack-description":"Example usage","data-snack-code":"import%20React%2C%20%7B%20useState%20%7D%20from%20'react'%3B%0Aimport%20%7B%20BottomSheet%2C%20Button%2C%20ListItem%20%7D%20from%20'%40rneui%2Fthemed'%3B%0Aimport%20%7B%20StyleSheet%20%7D%20from%20'react-native'%3B%0Aimport%20%7B%20SafeAreaProvider%20%7D%20from%20'react-native-safe-area-context'%3B%0A%0Atype%20BottomSheetComponentProps%20%3D%20%7B%7D%3B%0A%0Aconst%20BottomSheetComponent%3A%20React.FunctionComponent%3CBottomSheetComponentProps%3E%20%3D%20()%20%3D%3E%20%7B%0Aconst%20%5BisVisible%2C%20setIsVisible%5D%20%3D%20useState(false)%3B%0Aconst%20list%20%3D%20%5B%0A%20%20%7B%20title%3A%20'List%20Item%201'%20%7D%2C%0A%20%20%7B%20title%3A%20'List%20Item%202'%20%7D%2C%0A%20%20%7B%0A%20%20%20%20title%3A%20'Cancel'%2C%0A%20%20%20%20containerStyle%3A%20%7B%20backgroundColor%3A%20'red'%20%7D%2C%0A%20%20%20%20titleStyle%3A%20%7B%20color%3A%20'white'%20%7D%2C%0A%20%20%20%20onPress%3A%20()%20%3D%3E%20setIsVisible(false)%2C%0A%20%20%7D%2C%0A%5D%3B%0A%0Areturn%20(%0A%20%20%3CSafeAreaProvider%3E%0A%20%20%20%20%3CButton%0A%20%20%20%20%20%20title%3D%22Open%20Bottom%20Sheet%22%0A%20%20%20%20%20%20onPress%3D%7B()%20%3D%3E%20setIsVisible(true)%7D%0A%20%20%20%20%20%20buttonStyle%3D%7Bstyles.button%7D%0A%20%20%20%20%2F%3E%0A%20%20%20%20%3CBottomSheet%20modalProps%3D%7B%7B%7D%7D%20isVisible%3D%7BisVisible%7D%3E%0A%20%20%20%20%20%20%7Blist.map((l%2C%20i)%20%3D%3E%20(%0A%20%20%20%20%20%20%20%20%3CListItem%0A%20%20%20%20%20%20%20%20%20%20key%3D%7Bi%7D%0A%20%20%20%20%20%20%20%20%20%20containerStyle%3D%7Bl.containerStyle%7D%0A%20%20%20%20%20%20%20%20%20%20onPress%3D%7Bl.onPress%7D%0A%20%20%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%20%20%3CListItem.Content%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CListItem.Title%20style%3D%7Bl.titleStyle%7D%3E%7Bl.title%7D%3C%2FListItem.Title%3E%0A%20%20%20%20%20%20%20%20%20%20%3C%2FListItem.Content%3E%0A%20%20%20%20%20%20%20%20%3C%2FListItem%3E%0A%20%20%20%20%20%20))%7D%0A%20%20%20%20%3C%2FBottomSheet%3E%0A%20%20%3C%2FSafeAreaProvider%3E%0A)%3B%0A%7D%3B%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0Abutton%3A%20%7B%0A%20%20margin%3A%2010%2C%0A%7D%2C%0A%7D)%3B%0A%0Aexport%20default%20BottomSheetComponent%3B","data-snack-dependencies":"@rneui/themed,@rneui/base","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}))}s.isMDXComponent=!0;var c=["components"],p={id:"bottomsheet",title:"BottomSheet"},m=void 0,d={unversionedId:"components/bottomsheet",id:"version-4.0.0-rc.1/components/bottomsheet",title:"BottomSheet",description:"Overlay Modal that displays content from the bottom of the screen.",source:"@site/versioned_docs/version-4.0.0-rc.1/components/BottomSheet.mdx",sourceDirName:"components",slug:"/components/bottomsheet",permalink:"/docs/4.0.0-rc.1/components/bottomsheet",draft:!1,editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/versioned_docs/version-4.0.0-rc.1/components/BottomSheet.mdx",tags:[],version:"4.0.0-rc.1",frontMatter:{id:"bottomsheet",title:"BottomSheet"},sidebar:"docs",previous:{title:"Badge",permalink:"/docs/4.0.0-rc.1/components/badge"},next:{title:"Button",permalink:"/docs/4.0.0-rc.1/components/button"}},y={},g=[{value:"Usage",id:"usage",level:2},{value:"Props",id:"props",level:2}],f={toc:g},b="wrapper";function v(e){var t=e.components,n=(0,a.A)(e,c);return(0,o.yg)(b,(0,r.A)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("p",null,"Overlay Modal that displays content from the bottom of the screen.\nThis opens from the bottom of the screen."),(0,o.yg)("h2",{id:"usage"},"Usage"),(0,o.yg)(s,{mdxType:"Usage"}),(0,o.yg)("h2",{id:"props"},"Props"),(0,o.yg)("div",{class:"table-responsive"},(0,o.yg)("table",null,(0,o.yg)("thead",{parentName:"table"},(0,o.yg)("tr",{parentName:"thead"},(0,o.yg)("th",{parentName:"tr",align:null},"Name"),(0,o.yg)("th",{parentName:"tr",align:null},"Type"),(0,o.yg)("th",{parentName:"tr",align:null},"Default"),(0,o.yg)("th",{parentName:"tr",align:null},"Description"))),(0,o.yg)("tbody",{parentName:"table"},(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},(0,o.yg)("inlineCode",{parentName:"td"},"backdropStyle")),(0,o.yg)("td",{parentName:"tr",align:null},"View Style"),(0,o.yg)("td",{parentName:"tr",align:null}),(0,o.yg)("td",{parentName:"tr",align:null},"Style of the backdrop container.")),(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},(0,o.yg)("inlineCode",{parentName:"td"},"containerStyle")),(0,o.yg)("td",{parentName:"tr",align:null},"View Style"),(0,o.yg)("td",{parentName:"tr",align:null}),(0,o.yg)("td",{parentName:"tr",align:null},"Style of the bottom sheet's container. Use this to change the color of the underlay.")),(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},(0,o.yg)("inlineCode",{parentName:"td"},"isVisible")),(0,o.yg)("td",{parentName:"tr",align:null},"boolean"),(0,o.yg)("td",{parentName:"tr",align:null},(0,o.yg)("inlineCode",{parentName:"td"},"false")),(0,o.yg)("td",{parentName:"tr",align:null},"Is the modal component shown.")),(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},(0,o.yg)("inlineCode",{parentName:"td"},"modalProps")),(0,o.yg)("td",{parentName:"tr",align:null},"ModalProps"),(0,o.yg)("td",{parentName:"tr",align:null},(0,o.yg)("inlineCode",{parentName:"td"},"{}")),(0,o.yg)("td",{parentName:"tr",align:null},"Additional props handed to the ",(0,o.yg)("inlineCode",{parentName:"td"},"Modal"),".")),(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},(0,o.yg)("inlineCode",{parentName:"td"},"onBackdropPress")),(0,o.yg)("td",{parentName:"tr",align:null},"Function"),(0,o.yg)("td",{parentName:"tr",align:null},(0,o.yg)("inlineCode",{parentName:"td"},"Function")),(0,o.yg)("td",{parentName:"tr",align:null},"Handler for backdrop press.")),(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},(0,o.yg)("inlineCode",{parentName:"td"},"scrollViewProps")),(0,o.yg)("td",{parentName:"tr",align:null},"ScrollViewProps"),(0,o.yg)("td",{parentName:"tr",align:null},(0,o.yg)("inlineCode",{parentName:"td"},"{}")),(0,o.yg)("td",{parentName:"tr",align:null},"Used to add props to Scroll view."))))))}v.isMDXComponent=!0}}]);