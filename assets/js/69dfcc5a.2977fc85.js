"use strict";(self.webpackChunkrne_website=self.webpackChunkrne_website||[]).push([[93802],{15680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>m});var a=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),d=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(u.Provider,{value:t},e.children)},g="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),g=d(n),s=r,m=g["".concat(u,".").concat(s)]||g[s]||c[s]||l;return n?a.createElement(m,o(o({ref:t},p),{},{components:n})):a.createElement(m,o({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=s;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[g]="string"==typeof e?e:r,o[1]=i;for(var d=2;d<l;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},21518:(e,t,n)=>{n.d(t,{A:()=>b});var a=n(9668),r=n(96540),l=n(20053),o=n(55236),i=n(56347),u=n(5793),d=n(47422),p=n(81038);function g(e){return function(e){var t,n;return null!=(t=null==(n=r.Children.map(e,(function(e){if(!e||(0,r.isValidElement)(e)&&(t=e.props)&&"object"==typeof t&&"value"in t)return e;var t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:n.filter(Boolean))?t:[]}(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}function c(e){var t=e.values,n=e.children;return(0,r.useMemo)((function(){var e=null!=t?t:g(n);return function(e){var t=(0,d.X)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function s(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function m(e){var t=e.queryString,n=void 0!==t&&t,a=e.groupId,l=(0,i.W6)(),o=function(e){var t=e.queryString,n=void 0!==t&&t,a=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=a?a:null}({queryString:n,groupId:a});return[(0,u.aZ)(o),(0,r.useCallback)((function(e){if(o){var t=new URLSearchParams(l.location.search);t.set(o,e),l.replace(Object.assign({},l.location,{search:t.toString()}))}}),[o,l])]}function y(e){var t,n,a,l,o=e.defaultValue,i=e.queryString,u=void 0!==i&&i,d=e.groupId,g=c(e),y=(0,r.useState)((function(){return function(e){var t,n=e.defaultValue,a=e.tabValues;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!s({value:n,tabValues:a}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+a.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var r=null!=(t=a.find((function(e){return e.default})))?t:a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:o,tabValues:g})})),f=y[0],h=y[1],N=m({queryString:u,groupId:d}),v=N[0],A=N[1],b=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:d}.groupId),n=(0,p.Dv)(t),a=n[0],l=n[1],[a,(0,r.useCallback)((function(e){t&&l.set(e)}),[t,l])]),C=b[0],D=b[1],w=function(){var e=null!=v?v:C;return s({value:e,tabValues:g})?e:null}();return(0,r.useLayoutEffect)((function(){w&&h(w)}),[w]),{selectedValue:f,selectValue:(0,r.useCallback)((function(e){if(!s({value:e,tabValues:g}))throw new Error("Can't select invalid tab value="+e);h(e),A(e),D(e)}),[A,D,g]),tabValues:g}}var f=n(195);const h={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function N(e){var t=e.className,n=e.block,i=e.selectedValue,u=e.selectValue,d=e.tabValues,p=[],g=(0,o.a_)().blockElementScrollPositionUntilNextRender,c=function(e){var t=e.currentTarget,n=p.indexOf(t),a=d[n].value;a!==i&&(g(t),u(a))},s=function(e){var t,n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":var a,r=p.indexOf(e.currentTarget)+1;n=null!=(a=p[r])?a:p[0];break;case"ArrowLeft":var l,o=p.indexOf(e.currentTarget)-1;n=null!=(l=p[o])?l:p[p.length-1]}null==(t=n)||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.A)("tabs",{"tabs--block":n},t)},d.map((function(e){var t=e.value,n=e.label,o=e.attributes;return r.createElement("li",(0,a.A)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:function(e){return p.push(e)},onKeyDown:s,onClick:c},o,{className:(0,l.A)("tabs__item",h.tabItem,null==o?void 0:o.className,{"tabs__item--active":i===t})}),null!=n?n:t)})))}function v(e){var t=e.lazy,n=e.children,a=e.selectedValue,l=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){var o=l.find((function(e){return e.props.value===a}));return o?(0,r.cloneElement)(o,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},l.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a})})))}function A(e){var t=y(e);return r.createElement("div",{className:(0,l.A)("tabs-container",h.tabList)},r.createElement(N,(0,a.A)({},e,t)),r.createElement(v,(0,a.A)({},e,t)))}function b(e){var t=(0,f.A)();return r.createElement(A,(0,a.A)({key:String(t)},e))}},46061:(e,t,n)=>{n.d(t,{A:()=>o});var a=n(96540),r=n(20053);const l={tabItem:"tabItem_Ymn6"};function o(e){var t=e.children,n=e.hidden,o=e.className;return a.createElement("div",{role:"tabpanel",className:(0,r.A)(l.tabItem,o),hidden:n},t)}},51388:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>c,default:()=>N,frontMatter:()=>g,metadata:()=>s,toc:()=>y});var a=n(9668),r=n(21367),l=(n(96540),n(15680)),o=(n(21518),n(46061),n(8755),["components"]),i={toc:[{value:"LinearGradient Usage",id:"lineargradient-usage",level:3}]},u="wrapper";function d(e){var t=e.components,n=(0,r.A)(e,o);return(0,l.yg)(u,(0,a.A)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Note:"),"\nMake sure that you have completed ",(0,l.yg)("a",{parentName:"p",href:"../installation#install-react-native-safe-area-context"},"Step 3")," in the setup guide before using ",(0,l.yg)("inlineCode",{parentName:"p"},"Header"),"."),(0,l.yg)("p",null,"Headers are navigation components that display information and actions relating\nto the current screen."),(0,l.yg)("h3",{id:"lineargradient-usage"},"LinearGradient Usage"),(0,l.yg)("p",null,"Using LinearGradient in React Native Elements is supported through the\n",(0,l.yg)("a",{parentName:"p",href:"https://github.com/react-native-community/react-native-linear-gradient"},"react-native-linear-gradient"),"\npackage. If you're using expo or create-react-native-app then you can use\n",(0,l.yg)("inlineCode",{parentName:"p"},"linearGradientProps")," prop right out the box with no additional setup."),(0,l.yg)("p",null,"For react-native-cli users, make sure to follow the\n",(0,l.yg)("a",{parentName:"p",href:"https://github.com/react-native-community/react-native-linear-gradient#add-it-to-your-project"},"installation instructions"),"\nand use it like this:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-jsx"},"import { Header } from '@rneui/themed';\nimport LinearGradient from 'react-native-linear-gradient';\n\n...\n\n<Header\n  ViewComponent={LinearGradient} // Don't forget this!\n  linearGradientProps={{\n    colors: ['red', 'pink'],\n    start: { x: 0, y: 0.5 },\n    end: { x: 1, y: 0.5 },\n  }}\n/>\n")),(0,l.yg)("div",{className:"snack-player","data-snack-name":"RNE Header","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%0AStyleSheet%2C%0AView%2C%0AText%2C%0ALinking%2C%0AStyleProp%2C%0ATextStyle%2C%0AViewStyle%2C%0A%7D%20from%20'react-native'%3B%0Aimport%20%7B%20Header%20as%20HeaderRNE%2C%20HeaderProps%2C%20Icon%20%7D%20from%20'%40rneui%2Fthemed'%3B%0Aimport%20%7B%20TouchableOpacity%20%7D%20from%20'react-native-gesture-handler'%3B%0Aimport%20%7B%20SafeAreaProvider%20%7D%20from%20'react-native-safe-area-context'%3B%0A%0Atype%20HeaderComponentProps%20%3D%20%7B%0Atitle%3A%20string%3B%0Aview%3F%3A%20string%3B%0A%7D%3B%0A%0Atype%20ParamList%20%3D%20%7B%0ADetail%3A%20%7B%0A%20%20openDrawer%3A%20void%3B%0A%7D%3B%0A%7D%3B%0A%0Aconst%20Header%3A%20React.FunctionComponent%3CHeaderComponentProps%3E%20%3D%20(props)%20%3D%3E%20%7B%0A%0Aconst%20docsNavigate%20%3D%20()%20%3D%3E%20%7B%0A%20%20Linking.openURL(%60https%3A%2F%2Freactnativeelements.com%2Fdocs%2F%24%7Bprops.view%7D%60)%3B%0A%7D%3B%0A%0Aconst%20playgroundNavigate%20%3D%20()%20%3D%3E%20%7B%0A%20%20Linking.openURL(%60https%3A%2F%2F%40rneui%2Fthemed.js.org%2F%23%2F%24%7Bprops.view%7D%60)%3B%0A%7D%3B%0A%0Areturn%20(%0A%20%20%3CSafeAreaProvider%3E%0A%20%20%20%20%3CHeaderRNE%0A%20%20%20%20%20%20leftComponent%3D%7B%7B%0A%20%20%20%20%20%20%20%20icon%3A%20'menu'%2C%0A%20%20%20%20%20%20%20%20color%3A%20'%23fff'%2C%0A%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20rightComponent%3D%7B%0A%20%20%20%20%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.headerRight%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CTouchableOpacity%20onPress%3D%7BdocsNavigate%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CIcon%20name%3D%22description%22%20color%3D%22white%22%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C%2FTouchableOpacity%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CTouchableOpacity%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20style%3D%7B%7B%20marginLeft%3A%2010%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20onPress%3D%7BplaygroundNavigate%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CIcon%20type%3D%22antdesign%22%20name%3D%22rocket1%22%20color%3D%22white%22%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C%2FTouchableOpacity%3E%0A%20%20%20%20%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20centerComponent%3D%7B%7B%20text%3A%20'Header'%2C%20style%3A%20styles.heading%20%7D%7D%0A%20%20%20%20%2F%3E%0A%20%20%3C%2FSafeAreaProvider%3E%0A)%3B%0A%7D%3B%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0AheaderContainer%3A%20%7B%0A%20%20justifyContent%3A%20'center'%2C%0A%20%20alignItems%3A%20'center'%2C%0A%20%20backgroundColor%3A%20'%23397af8'%2C%0A%20%20marginBottom%3A%2020%2C%0A%20%20width%3A%20'100%25'%2C%0A%20%20paddingVertical%3A%2015%2C%0A%7D%2C%0Aheading%3A%20%7B%0A%20%20color%3A%20'white'%2C%0A%20%20fontSize%3A%2022%2C%0A%20%20fontWeight%3A%20'bold'%2C%0A%7D%2C%0AheaderRight%3A%20%7B%0A%20%20display%3A%20'flex'%2C%0A%20%20flexDirection%3A%20'row'%2C%0A%20%20marginTop%3A%205%2C%0A%7D%2C%0AsubheaderText%3A%20%7B%0A%20%20color%3A%20'white'%2C%0A%20%20fontSize%3A%2016%2C%0A%20%20fontWeight%3A%20'bold'%2C%0A%7D%2C%0A%7D)%3B%0A%0Aexport%20default%20Header%3B","data-snack-dependencies":"@rneui/themed,@rneui/base","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}))}d.isMDXComponent=!0;var p=["components"],g={id:"header",title:"Header"},c=void 0,s={unversionedId:"components/header",id:"version-4.0.0-rc.2/components/header",title:"Header",description:"Headers are navigation components that display information and actions relating to the current screen.",source:"@site/versioned_docs/version-4.0.0-rc.2/components/Header.mdx",sourceDirName:"components",slug:"/components/header",permalink:"/docs/4.0.0-rc.2/components/header",draft:!1,editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/versioned_docs/version-4.0.0-rc.2/components/Header.mdx",tags:[],version:"4.0.0-rc.2",frontMatter:{id:"header",title:"Header"},sidebar:"docs",previous:{title:"FAB",permalink:"/docs/4.0.0-rc.2/components/fab"},next:{title:"Icon",permalink:"/docs/4.0.0-rc.2/components/icon"}},m={},y=[{value:"Usage",id:"usage",level:2},{value:"Props",id:"props",level:2}],f={toc:y},h="wrapper";function N(e){var t=e.components,n=(0,r.A)(e,p);return(0,l.yg)(h,(0,a.A)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,l.yg)("p",null,"Headers are navigation components that display information and actions relating to the current screen.\n",(0,l.yg)("strong",{parentName:"p"},"Note:"),"\nMake sure that you have completed ",(0,l.yg)("a",{parentName:"p",href:"../installation#install-react-native-safe-area-context"},"Step 3")," in the setup guide before using ",(0,l.yg)("inlineCode",{parentName:"p"},"Header"),"."),(0,l.yg)("h2",{id:"usage"},"Usage"),(0,l.yg)(d,{mdxType:"Usage"}),(0,l.yg)("h2",{id:"props"},"Props"),(0,l.yg)("admonition",{type:"note"},(0,l.yg)("p",{parentName:"admonition"},"Includes all ",(0,l.yg)("a",{parentName:"p",href:"https://reactnative.dev/docs/view#props"},"View")," props.")),(0,l.yg)("div",{class:"table-responsive"},(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Name"),(0,l.yg)("th",{parentName:"tr",align:null},"Type"),(0,l.yg)("th",{parentName:"tr",align:null},"Default"),(0,l.yg)("th",{parentName:"tr",align:null},"Description"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"ViewComponent")),(0,l.yg)("td",{parentName:"tr",align:null},"React Component"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"View")),(0,l.yg)("td",{parentName:"tr",align:null},"Component for container.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"backgroundColor")),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"Sets backgroundColor of the parent component.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"backgroundImage")),(0,l.yg)("td",{parentName:"tr",align:null},"ImageSourcePropType"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"Sets backgroundImage for parent component.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"backgroundImageStyle")),(0,l.yg)("td",{parentName:"tr",align:null},"ImageStyle"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"Styling for backgroundImage in the main container.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"barStyle")),(0,l.yg)("td",{parentName:"tr",align:null},"StatusBarStyle"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"Sets the color of the status bar text.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"centerComponent")),(0,l.yg)("td",{parentName:"tr",align:null},"HeaderSubComponent"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"Define your center component here.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"centerContainerStyle")),(0,l.yg)("td",{parentName:"tr",align:null},"View Style"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"Styling for container around the centerComponent.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"children")),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"(Element")," or ",(0,l.yg)("inlineCode",{parentName:"td"},"Element[]) & ReactNode")),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"[]")),(0,l.yg)("td",{parentName:"tr",align:null},"Add children component to the header.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"containerStyle")),(0,l.yg)("td",{parentName:"tr",align:null},"View Style"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"Styling around the main container.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"elevated")),(0,l.yg)("td",{parentName:"tr",align:null},"boolean"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"Elevation for header")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"leftComponent")),(0,l.yg)("td",{parentName:"tr",align:null},"HeaderSubComponent"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"Define your left component here.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"leftContainerStyle")),(0,l.yg)("td",{parentName:"tr",align:null},"View Style"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"Styling for container around the leftComponent.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"linearGradientProps")),(0,l.yg)("td",{parentName:"tr",align:null},"Object"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"Displays a linear gradient. See ",(0,l.yg)("a",{parentName:"td",href:"#lineargradient-usage"},"usage"),".")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"placement")),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"center")," or ",(0,l.yg)("inlineCode",{parentName:"td"},"left")," or ",(0,l.yg)("inlineCode",{parentName:"td"},"right")),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"center")),(0,l.yg)("td",{parentName:"tr",align:null},"Alignment for title.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"rightComponent")),(0,l.yg)("td",{parentName:"tr",align:null},"HeaderSubComponent"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"Define your right component here.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"rightContainerStyle")),(0,l.yg)("td",{parentName:"tr",align:null},"View Style"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"Styling for container around the rightComponent.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"statusBarProps")),(0,l.yg)("td",{parentName:"tr",align:null},"StatusBarProps"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"Accepts all props for StatusBar."))))))}N.isMDXComponent=!0}}]);