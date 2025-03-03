"use strict";(self.webpackChunkrne_website=self.webpackChunkrne_website||[]).push([[27414],{15680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>d});var r=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=s(n),f=a,d=p["".concat(l,".").concat(f)]||p[f]||m[f]||o;return n?r.createElement(d,u(u({ref:t},c),{},{components:n})):r.createElement(d,u({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,u=new Array(o);u[0]=f;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:a,u[1]=i;for(var s=2;s<o;s++)u[s]=n[s];return r.createElement.apply(null,u)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},21518:(e,t,n)=>{n.d(t,{A:()=>I});var r=n(9668),a=n(96540),o=n(20053),u=n(55236),i=n(56347),l=n(5793),s=n(47422),c=n(81038);function p(e){return function(e){var t,n;return null!=(t=null==(n=a.Children.map(e,(function(e){if(!e||(0,a.isValidElement)(e)&&(t=e.props)&&"object"==typeof t&&"value"in t)return e;var t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:n.filter(Boolean))?t:[]}(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}function m(e){var t=e.values,n=e.children;return(0,a.useMemo)((function(){var e=null!=t?t:p(n);return function(e){var t=(0,s.X)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function f(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function d(e){var t=e.queryString,n=void 0!==t&&t,r=e.groupId,o=(0,i.W6)(),u=function(e){var t=e.queryString,n=void 0!==t&&t,r=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=r?r:null}({queryString:n,groupId:r});return[(0,l.aZ)(u),(0,a.useCallback)((function(e){if(u){var t=new URLSearchParams(o.location.search);t.set(u,e),o.replace(Object.assign({},o.location,{search:t.toString()}))}}),[u,o])]}function v(e){var t,n,r,o,u=e.defaultValue,i=e.queryString,l=void 0!==i&&i,s=e.groupId,p=m(e),v=(0,a.useState)((function(){return function(e){var t,n=e.defaultValue,r=e.tabValues;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!f({value:n,tabValues:r}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+r.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var a=null!=(t=r.find((function(e){return e.default})))?t:r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:u,tabValues:p})})),b=v[0],y=v[1],h=d({queryString:l,groupId:s}),g=h[0],w=h[1],I=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:s}.groupId),n=(0,c.Dv)(t),r=n[0],o=n[1],[r,(0,a.useCallback)((function(e){t&&o.set(e)}),[t,o])]),E=I[0],O=I[1],T=function(){var e=null!=g?g:E;return f({value:e,tabValues:p})?e:null}();return(0,a.useLayoutEffect)((function(){T&&y(T)}),[T]),{selectedValue:b,selectValue:(0,a.useCallback)((function(e){if(!f({value:e,tabValues:p}))throw new Error("Can't select invalid tab value="+e);y(e),w(e),O(e)}),[w,O,p]),tabValues:p}}var b=n(195);const y={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function h(e){var t=e.className,n=e.block,i=e.selectedValue,l=e.selectValue,s=e.tabValues,c=[],p=(0,u.a_)().blockElementScrollPositionUntilNextRender,m=function(e){var t=e.currentTarget,n=c.indexOf(t),r=s[n].value;r!==i&&(p(t),l(r))},f=function(e){var t,n=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":var r,a=c.indexOf(e.currentTarget)+1;n=null!=(r=c[a])?r:c[0];break;case"ArrowLeft":var o,u=c.indexOf(e.currentTarget)-1;n=null!=(o=c[u])?o:c[c.length-1]}null==(t=n)||t.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.A)("tabs",{"tabs--block":n},t)},s.map((function(e){var t=e.value,n=e.label,u=e.attributes;return a.createElement("li",(0,r.A)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:function(e){return c.push(e)},onKeyDown:f,onClick:m},u,{className:(0,o.A)("tabs__item",y.tabItem,null==u?void 0:u.className,{"tabs__item--active":i===t})}),null!=n?n:t)})))}function g(e){var t=e.lazy,n=e.children,r=e.selectedValue,o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){var u=o.find((function(e){return e.props.value===r}));return u?(0,a.cloneElement)(u,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},o.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r})})))}function w(e){var t=v(e);return a.createElement("div",{className:(0,o.A)("tabs-container",y.tabList)},a.createElement(h,(0,r.A)({},e,t)),a.createElement(g,(0,r.A)({},e,t)))}function I(e){var t=(0,b.A)();return a.createElement(w,(0,r.A)({key:String(t)},e))}},46061:(e,t,n)=>{n.d(t,{A:()=>u});var r=n(96540),a=n(20053);const o={tabItem:"tabItem_Ymn6"};function u(e){var t=e.children,n=e.hidden,u=e.className;return r.createElement("div",{role:"tabpanel",className:(0,a.A)(o.tabItem,u),hidden:n},t)}},63429:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var r=n(9668),a=n(21367),o=(n(96540),n(15680)),u=(n(21518),n(46061),n(8755),["components"]),i={id:"listitem_input",title:"ListItem.Input"},l=void 0,s={unversionedId:"components/listitem_input",id:"version-4.0.0-rc.1/components/listitem_input",title:"ListItem.Input",description:"This allows adding an Text Input within the ListItem.",source:"@site/versioned_docs/version-4.0.0-rc.1/components/ListItem.Input.mdx",sourceDirName:"components",slug:"/components/listitem_input",permalink:"/docs/4.0.0-rc.1/components/listitem_input",draft:!1,editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/versioned_docs/version-4.0.0-rc.1/components/ListItem.Input.mdx",tags:[],version:"4.0.0-rc.1",frontMatter:{id:"listitem_input",title:"ListItem.Input"},sidebar:"docs",previous:{title:"ListItem.Content",permalink:"/docs/4.0.0-rc.1/components/listitem_content"},next:{title:"ListItem.Subtitle",permalink:"/docs/4.0.0-rc.1/components/listitem_subtitle"}},c={},p=[{value:"Props",id:"props",level:2}],m={toc:p},f="wrapper";function d(e){var t=e.components,n=(0,a.A)(e,u);return(0,o.yg)(f,(0,r.A)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("p",null,"This allows adding an Text Input within the ListItem.\nThis, Receives all ",(0,o.yg)("a",{parentName:"p",href:"/docs/4.0.0-rc.1/components/input#props"},"Input")," props."),(0,o.yg)("h2",{id:"props"},"Props"),(0,o.yg)("admonition",{type:"note"},(0,o.yg)("p",{parentName:"admonition"},"Includes all ",(0,o.yg)("a",{parentName:"p",href:"input#props"},"Input")," props.")))}d.isMDXComponent=!0}}]);