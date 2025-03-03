"use strict";(self.webpackChunkrne_website=self.webpackChunkrne_website||[]).push([[8601],{15680:(e,t,a)=>{a.d(t,{xA:()=>g,yg:()=>m});var n=a(96540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=n.createContext({}),u=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},g=function(e){var t=u(e.components);return n.createElement(d.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,d=e.parentName,g=o(e,["components","mdxType","originalType","parentName"]),p=u(a),s=r,m=p["".concat(d,".").concat(s)]||p[s]||c[s]||l;return a?n.createElement(m,i(i({ref:t},g),{},{components:a})):n.createElement(m,i({ref:t},g))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=s;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o[p]="string"==typeof e?e:r,i[1]=o;for(var u=2;u<l;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}s.displayName="MDXCreateElement"},21518:(e,t,a)=>{a.d(t,{A:()=>C});var n=a(9668),r=a(96540),l=a(20053),i=a(55236),o=a(56347),d=a(5793),u=a(47422),g=a(81038);function p(e){return function(e){var t,a;return null!=(t=null==(a=r.Children.map(e,(function(e){if(!e||(0,r.isValidElement)(e)&&(t=e.props)&&"object"==typeof t&&"value"in t)return e;var t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:a.filter(Boolean))?t:[]}(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}function c(e){var t=e.values,a=e.children;return(0,r.useMemo)((function(){var e=null!=t?t:p(a);return function(e){var t=(0,u.X)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,a])}function s(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function m(e){var t=e.queryString,a=void 0!==t&&t,n=e.groupId,l=(0,o.W6)(),i=function(e){var t=e.queryString,a=void 0!==t&&t,n=e.groupId;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=n?n:null}({queryString:a,groupId:n});return[(0,d.aZ)(i),(0,r.useCallback)((function(e){if(i){var t=new URLSearchParams(l.location.search);t.set(i,e),l.replace(Object.assign({},l.location,{search:t.toString()}))}}),[i,l])]}function y(e){var t,a,n,l,i=e.defaultValue,o=e.queryString,d=void 0!==o&&o,u=e.groupId,p=c(e),y=(0,r.useState)((function(){return function(e){var t,a=e.defaultValue,n=e.tabValues;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!s({value:a,tabValues:n}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+a+'" but none of its children has the corresponding value. Available values are: '+n.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return a}var r=null!=(t=n.find((function(e){return e.default})))?t:n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:i,tabValues:p})})),N=y[0],h=y[1],b=m({queryString:d,groupId:u}),f=b[0],v=b[1],C=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:u}.groupId),a=(0,g.Dv)(t),n=a[0],l=a[1],[n,(0,r.useCallback)((function(e){t&&l.set(e)}),[t,l])]),S=C[0],w=C[1],A=function(){var e=null!=f?f:S;return s({value:e,tabValues:p})?e:null}();return(0,r.useLayoutEffect)((function(){A&&h(A)}),[A]),{selectedValue:N,selectValue:(0,r.useCallback)((function(e){if(!s({value:e,tabValues:p}))throw new Error("Can't select invalid tab value="+e);h(e),v(e),w(e)}),[v,w,p]),tabValues:p}}var N=a(195);const h={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function b(e){var t=e.className,a=e.block,o=e.selectedValue,d=e.selectValue,u=e.tabValues,g=[],p=(0,i.a_)().blockElementScrollPositionUntilNextRender,c=function(e){var t=e.currentTarget,a=g.indexOf(t),n=u[a].value;n!==o&&(p(t),d(n))},s=function(e){var t,a=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":var n,r=g.indexOf(e.currentTarget)+1;a=null!=(n=g[r])?n:g[0];break;case"ArrowLeft":var l,i=g.indexOf(e.currentTarget)-1;a=null!=(l=g[i])?l:g[g.length-1]}null==(t=a)||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.A)("tabs",{"tabs--block":a},t)},u.map((function(e){var t=e.value,a=e.label,i=e.attributes;return r.createElement("li",(0,n.A)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:function(e){return g.push(e)},onKeyDown:s,onClick:c},i,{className:(0,l.A)("tabs__item",h.tabItem,null==i?void 0:i.className,{"tabs__item--active":o===t})}),null!=a?a:t)})))}function f(e){var t=e.lazy,a=e.children,n=e.selectedValue,l=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){var i=l.find((function(e){return e.props.value===n}));return i?(0,r.cloneElement)(i,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},l.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n})})))}function v(e){var t=y(e);return r.createElement("div",{className:(0,l.A)("tabs-container",h.tabList)},r.createElement(b,(0,n.A)({},e,t)),r.createElement(f,(0,n.A)({},e,t)))}function C(e){var t=(0,N.A)();return r.createElement(v,(0,n.A)({key:String(t)},e))}},46061:(e,t,a)=>{a.d(t,{A:()=>i});var n=a(96540),r=a(20053);const l={tabItem:"tabItem_Ymn6"};function i(e){var t=e.children,a=e.hidden,i=e.className;return n.createElement("div",{role:"tabpanel",className:(0,r.A)(l.tabItem,i),hidden:a},t)}},47470:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>c,default:()=>b,frontMatter:()=>p,metadata:()=>s,toc:()=>y});var n=a(9668),r=a(21367),l=(a(96540),a(15680)),i=(a(21518),a(46061),a(8755),["components"]),o={toc:[{value:"Default SearchBar",id:"default-searchbar",level:3},{value:"Platform specific SearchBar",id:"platform-specific-searchbar",level:3},{value:"Interaction methods",id:"interaction-methods",level:3},{value:'<a name="calling"></a> Calling methods on SearchBar',id:"-calling-methods-on-searchbar",level:4}]},d="wrapper";function u(e){var t=e.components,a=(0,r.A)(e,i);return(0,l.yg)(d,(0,n.A)({},o,a,{components:t,mdxType:"MDXLayout"}),(0,l.yg)("h3",{id:"default-searchbar"},"Default SearchBar"),(0,l.yg)("img",{src:"../../../img/searchbar.png",width:"300"}),(0,l.yg)("h3",{id:"platform-specific-searchbar"},"Platform specific SearchBar"),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"iOS")),(0,l.yg)("img",{src:"https://user-images.githubusercontent.com/17592779/31585176-b124cdae-b1bd-11e7-809f-ba966cebc663.gif",width:"300"}),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Android")),(0,l.yg)("img",{src:"https://user-images.githubusercontent.com/17592779/31586716-f6e8ff9c-b1d4-11e7-918f-2a7e11d51b08.gif",width:"300"}),(0,l.yg)("h3",{id:"interaction-methods"},"Interaction methods"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"method"),(0,l.yg)("th",{parentName:"tr",align:null},"description"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"focus"),(0,l.yg)("td",{parentName:"tr",align:null},"call focus on the textinput (",(0,l.yg)("a",{parentName:"td",href:"#calling"},"example"),")")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"blur"),(0,l.yg)("td",{parentName:"tr",align:null},"call blur on the textinput (",(0,l.yg)("a",{parentName:"td",href:"#calling"},"example"),")")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"clear"),(0,l.yg)("td",{parentName:"tr",align:null},"call clear on the textinput (",(0,l.yg)("a",{parentName:"td",href:"#calling"},"example"),")")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"cancel"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("strong",{parentName:"td"},"(Android and iOS SearchBars only)")," call cancel on the SearchBar (left arrow on Android, Cancel button on iOS). This will basically blur the input and hide the keyboard (",(0,l.yg)("a",{parentName:"td",href:"#calling"},"example"),")")))),(0,l.yg)("h4",{id:"-calling-methods-on-searchbar"},(0,l.yg)("a",{name:"calling"})," Calling methods on SearchBar"),(0,l.yg)("p",null,"Store a reference to the SearchBar in your component by using the ref prop\nprovided by React\n(",(0,l.yg)("a",{parentName:"p",href:"https://reactjs.org/docs/refs-and-the-dom.html"},"see docs"),"):"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-js"},"<SearchBar\n  ref={search => this.search = search}\n  ...\n/>\n")),(0,l.yg)("p",null,"You can then access SearchBar methods like so:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},'this.search.focus();\nthis.search.blur();\nthis.search.clear();\nthis.search.cancel(); // Only available if `platform` props is "ios"\xa0| "android"\n')),(0,l.yg)("div",{className:"snack-player","data-snack-name":"RNE SearchBar","data-snack-description":"Example usage","data-snack-code":"import%20React%2C%20%7B%20useState%20%7D%20from%20'react'%3B%0Aimport%20%7B%20SearchBar%20%7D%20from%20'%40rneui%2Fthemed'%3B%0Aimport%20%7B%20View%2C%20Text%2C%20StyleSheet%20%7D%20from%20'react-native'%3B%0A%0Atype%20SearchBarComponentProps%20%3D%20%7B%7D%3B%0A%0Aconst%20SwitchComponent%3A%20React.FunctionComponent%3CSearchBarComponentProps%3E%20%3D%20()%20%3D%3E%20%7B%0Aconst%20%5Bsearch%2C%20setSearch%5D%20%3D%20useState(%22%22)%3B%0A%0Aconst%20updateSearch%20%3D%20(search)%20%3D%3E%20%7B%0A%20%20setSearch(search)%3B%0A%7D%3B%0A%0Areturn%20(%0A%20%20%3CView%20style%3D%7Bstyles.view%7D%3E%0A%20%20%20%20%3CSearchBar%0A%20%20%20%20%20%20placeholder%3D%22Type%20Here...%22%0A%20%20%20%20%20%20onChangeText%3D%7BupdateSearch%7D%0A%20%20%20%20%20%20value%3D%7Bsearch%7D%0A%20%20%20%20%2F%3E%0A%20%20%3C%2FView%3E%0A)%3B%0A%7D%3B%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0Aview%3A%20%7B%0A%20%20margin%3A%2010%2C%0A%7D%2C%0A%7D)%3B%0A%0Aexport%20default%20SwitchComponent%3B","data-snack-dependencies":"@rneui/themed,@rneui/base","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}))}u.isMDXComponent=!0;var g=["components"],p={id:"searchbar",title:"SearchBar"},c=void 0,s={unversionedId:"components/searchbar",id:"version-4.0.0-rc.1/components/searchbar",title:"SearchBar",description:"Usage",source:"@site/versioned_docs/version-4.0.0-rc.1/components/SearchBar.mdx",sourceDirName:"components",slug:"/components/searchbar",permalink:"/docs/4.0.0-rc.1/components/searchbar",draft:!1,editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/versioned_docs/version-4.0.0-rc.1/components/SearchBar.mdx",tags:[],version:"4.0.0-rc.1",frontMatter:{id:"searchbar",title:"SearchBar"},sidebar:"docs",previous:{title:"PricingCard",permalink:"/docs/4.0.0-rc.1/components/pricingcard"},next:{title:"Slider",permalink:"/docs/4.0.0-rc.1/components/slider"}},m={},y=[{value:"Usage",id:"usage",level:2},{value:"Props",id:"props",level:2}],N={toc:y},h="wrapper";function b(e){var t=e.components,a=(0,r.A)(e,g);return(0,l.yg)(h,(0,n.A)({},N,a,{components:t,mdxType:"MDXLayout"}),(0,l.yg)("h2",{id:"usage"},"Usage"),(0,l.yg)(u,{mdxType:"Usage"}),(0,l.yg)("h2",{id:"props"},"Props"),(0,l.yg)("admonition",{type:"note"},(0,l.yg)("p",{parentName:"admonition"},"Includes all ",(0,l.yg)("a",{parentName:"p",href:"input#props"},"Input"),", ",(0,l.yg)("a",{parentName:"p",href:"searchbarbase#props"},"SearchBarBase")," props.")),(0,l.yg)("div",{class:"table-responsive"},(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Name"),(0,l.yg)("th",{parentName:"tr",align:null},"Type"),(0,l.yg)("th",{parentName:"tr",align:null},"Default"),(0,l.yg)("th",{parentName:"tr",align:null},"Description"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"cancelButtonProps")),(0,l.yg)("td",{parentName:"tr",align:null},"Text Style"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null})),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"cancelButtonTitle")),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null})),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"cancelIcon")),(0,l.yg)("td",{parentName:"tr",align:null},"IconNode"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null})),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"clearIcon")),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"IconNode")," or ",(0,l.yg)("inlineCode",{parentName:"td"},"({ name: string; } & IconNode)")),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null})),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"containerStyle")),(0,l.yg)("td",{parentName:"tr",align:null},"View Style"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null})),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"inputContainerStyle")),(0,l.yg)("td",{parentName:"tr",align:null},"View Style"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null})),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"inputStyle")),(0,l.yg)("td",{parentName:"tr",align:null},"Text Style"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null})),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"leftIconContainerStyle")),(0,l.yg)("td",{parentName:"tr",align:null},"View Style"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null})),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"lightTheme")),(0,l.yg)("td",{parentName:"tr",align:null},"boolean"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null})),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"loadingProps")),(0,l.yg)("td",{parentName:"tr",align:null},"ActivityIndicatorProps"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null})),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"onBlur")),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"(() => void)")," or ",(0,l.yg)("inlineCode",{parentName:"td"},"(((e: NativeSyntheticEvent<TextInputFocusEventData>) => void) & (() => void))")," or ",(0,l.yg)("inlineCode",{parentName:"td"},"((() => any) & (() => void) & ((e: NativeSyntheticEvent<TextInputFocusEventData>) => void))")," or ",(0,l.yg)("inlineCode",{parentName:"td"},"((() => any) & ... 1 more ... & (() => void))")),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"Callback that is called when the text input is blurred")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"onCancel")),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"(() => void)")," or ",(0,l.yg)("inlineCode",{parentName:"td"},"((() => any) & (() => void))")),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null})),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"onChangeText")),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"((text: string) => void)")," or ",(0,l.yg)("inlineCode",{parentName:"td"},"(((text: string) => void) & ((text: string) => void))")," or ",(0,l.yg)("inlineCode",{parentName:"td"},"((() => any) & ((text: string) => void) & ((text: string) => void))")," or ",(0,l.yg)("inlineCode",{parentName:"td"},"((() => any) & ((text: string) => void) & ((text: string) => void))")),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"Callback that is called when the text input's text changes.Changed text is passed as an argument to the callback handler.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"onClear")),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"(() => void)")," or ",(0,l.yg)("inlineCode",{parentName:"td"},"((() => any) & (() => void))")," or ",(0,l.yg)("inlineCode",{parentName:"td"},"((() => any) & (() => void))")),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null})),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"onFocus")),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"(() => void)")," or ",(0,l.yg)("inlineCode",{parentName:"td"},"(((e: NativeSyntheticEvent<TextInputFocusEventData>) => void) & (() => void))")," or ",(0,l.yg)("inlineCode",{parentName:"td"},"((() => any) & (() => void) & ((e: NativeSyntheticEvent<TextInputFocusEventData>) => void))")," or ",(0,l.yg)("inlineCode",{parentName:"td"},"((() => any) & ... 1 more ... & (() => void))")),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"Callback that is called when the text input is focused")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"platform")),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"default")," or ",(0,l.yg)("inlineCode",{parentName:"td"},"ios")," or ",(0,l.yg)("inlineCode",{parentName:"td"},"android")),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"'default' as const")),(0,l.yg)("td",{parentName:"tr",align:null})),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"rightIconContainerStyle")),(0,l.yg)("td",{parentName:"tr",align:null},"View Style"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null})),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"round")),(0,l.yg)("td",{parentName:"tr",align:null},"boolean"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null})),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"searchIcon")),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"IconNode")," or ",(0,l.yg)("inlineCode",{parentName:"td"},"({ name: string; } & IconNode)")),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null})),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"showCancel")),(0,l.yg)("td",{parentName:"tr",align:null},"boolean"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null})),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"showLoading")),(0,l.yg)("td",{parentName:"tr",align:null},"boolean"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null}))))))}b.isMDXComponent=!0}}]);