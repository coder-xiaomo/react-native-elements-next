"use strict";(self.webpackChunkrne_website=self.webpackChunkrne_website||[]).push([[32580],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=s(n),f=a,d=m["".concat(l,".").concat(f)]||m[f]||p[f]||o;return n?r.createElement(d,u(u({ref:t},c),{},{components:n})):r.createElement(d,u({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,u=new Array(o);u[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,u[1]=i;for(var s=2;s<o;s++)u[s]=n[s];return r.createElement.apply(null,u)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>u});var r=n(67294),a=n(86010);const o="tabItem_Ymn6";function u(e){var t=e.children,n=e.hidden,u=e.className;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,u),hidden:n},t)}},74866:(e,t,n)=>{n.d(t,{Z:()=>k});var r=n(87462),a=n(67294),o=n(86010),u=n(12466),i=n(16550),l=n(91980),s=n(67392),c=n(50012);function p(e){return function(e){return a.Children.map(e,(function(e){if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')}))}(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}function m(e){var t=e.values,n=e.children;return(0,a.useMemo)((function(){var e=null!=t?t:p(n);return function(e){var t=(0,s.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function f(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function d(e){var t=e.queryString,n=void 0!==t&&t,r=e.groupId,o=(0,i.k6)(),u=function(e){var t=e.queryString,n=void 0!==t&&t,r=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=r?r:null}({queryString:n,groupId:r});return[(0,l._X)(u),(0,a.useCallback)((function(e){if(u){var t=new URLSearchParams(o.location.search);t.set(u,e),o.replace(Object.assign({},o.location,{search:t.toString()}))}}),[u,o])]}function v(e){var t,n,r,o,u=e.defaultValue,i=e.queryString,l=void 0!==i&&i,s=e.groupId,p=m(e),v=(0,a.useState)((function(){return function(e){var t,n=e.defaultValue,r=e.tabValues;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!f({value:n,tabValues:r}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+r.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var a=null!=(t=r.find((function(e){return e.default})))?t:r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:u,tabValues:p})})),b=v[0],h=v[1],y=d({queryString:l,groupId:s}),g=y[0],w=y[1],I=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:s}.groupId),n=(0,c.Nk)(t),r=n[0],o=n[1],[r,(0,a.useCallback)((function(e){t&&o.set(e)}),[t,o])]),k=I[0],E=I[1],O=function(){var e=null!=g?g:k;return f({value:e,tabValues:p})?e:null}();return(0,a.useEffect)((function(){O&&h(O)}),[O]),{selectedValue:b,selectValue:(0,a.useCallback)((function(e){if(!f({value:e,tabValues:p}))throw new Error("Can't select invalid tab value="+e);h(e),w(e),E(e)}),[w,E,p]),tabValues:p}}var b=n(72389);const h="tabList__CuJ",y="tabItem_LNqP";function g(e){var t=e.className,n=e.block,i=e.selectedValue,l=e.selectValue,s=e.tabValues,c=[],p=(0,u.o5)().blockElementScrollPositionUntilNextRender,m=function(e){var t=e.currentTarget,n=c.indexOf(t),r=s[n].value;r!==i&&(p(t),l(r))},f=function(e){var t,n=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":var r,a=c.indexOf(e.currentTarget)+1;n=null!=(r=c[a])?r:c[0];break;case"ArrowLeft":var o,u=c.indexOf(e.currentTarget)-1;n=null!=(o=c[u])?o:c[c.length-1]}null==(t=n)||t.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},s.map((function(e){var t=e.value,n=e.label,u=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:function(e){return c.push(e)},onKeyDown:f,onClick:m},u,{className:(0,o.Z)("tabs__item",y,null==u?void 0:u.className,{"tabs__item--active":i===t})}),null!=n?n:t)})))}function w(e){var t=e.lazy,n=e.children,r=e.selectedValue;if(t){var o=n.find((function(e){return e.props.value===r}));return o?(0,a.cloneElement)(o,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},n.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r})})))}function I(e){var t=v(e);return a.createElement("div",{className:(0,o.Z)("tabs-container",h)},a.createElement(g,(0,r.Z)({},e,t)),a.createElement(w,(0,r.Z)({},e,t)))}function k(e){var t=(0,b.Z)();return a.createElement(I,(0,r.Z)({key:String(t)},e))}},37047:(e,t,n)=>{n.d(t,{w:()=>l});var r=n(67294),a=n(35742),o=n(14330),u=n(98576),i=n(61720),l=function(){return r.createElement(a.Z,null,r.createElement("style",{type:"text/css"},"\n          @font-face {\n            font-family: 'MaterialIcons';\n            src: url("+u.Z+") format('truetype');\n          }\n          @font-face {\n            font-family: 'FontAwesome';\n            src: url("+i.Z+") format('truetype');\n          }\n          @font-face {\n            font-family: 'MaterialCommunityIcons';\n            src: url("+o.Z+") format('truetype');\n          }\n        "))}},4990:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>d,frontMatter:()=>l,metadata:()=>c,toc:()=>m});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),u=n(37047),i=(n(74866),n(85162),["components"]),l={id:"listitem_input",title:"ListItem.Input"},s=void 0,c={unversionedId:"components/listitem_input",id:"version-4.0.0-rc.6/components/listitem_input",title:"ListItem.Input",description:"This allows adding an Text Input within the ListItem.",source:"@site/versioned_docs/version-4.0.0-rc.6/components/ListItem.Input.mdx",sourceDirName:"components",slug:"/components/listitem_input",permalink:"/docs/4.0.0-rc.6/components/listitem_input",draft:!1,editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/versioned_docs/version-4.0.0-rc.6/components/ListItem.Input.mdx",tags:[],version:"4.0.0-rc.6",frontMatter:{id:"listitem_input",title:"ListItem.Input"},sidebar:"docs",previous:{title:"ListItem.Content",permalink:"/docs/4.0.0-rc.6/components/listitem_content"},next:{title:"ListItem.Subtitle",permalink:"/docs/4.0.0-rc.6/components/listitem_subtitle"}},p={},m=[{value:"Import",id:"import",level:2},{value:"Props",id:"props",level:2}],f={toc:m};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(u.w,{mdxType:"IconsStyle"}),(0,o.kt)("p",null,"This allows adding an Text Input within the ListItem.\nThis, Receives all ",(0,o.kt)("a",{parentName:"p",href:"/docs/4.0.0-rc.6/components/input#props"},"Input")," props."),(0,o.kt)("h2",{id:"import"},"Import"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'import { ListItem } from "@rneui/themed";\n')),(0,o.kt)("h2",{id:"props"},"Props"),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Includes all ",(0,o.kt)("a",{parentName:"p",href:"input#props"},"Input")," props.")))}d.isMDXComponent=!0},61720:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/fonts/FontAwesome-1e59d2330b4c6deb84b340635ed36249.ttf"},14330:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/fonts/MaterialCommunityIcons-5d42b4e60858731e7b6504400f7e3d8e.ttf"},98576:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/fonts/MaterialIcons-120b4c7bbd155bd0a04dc37d334baced.ttf"}}]);