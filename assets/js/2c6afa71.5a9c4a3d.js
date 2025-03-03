(self.webpackChunkrne_website=self.webpackChunkrne_website||[]).push([[51202],{18411:()=>{},26795:(e,t,n)=>{"use strict";n.d(t,{A:()=>p});var a=n(9668),r=n(96540),l=n(91010),i=n(32594),o=n(20018),d=n(96109),m=n(11245),g=n(34397),c=n(50546),s=n(25407);const p=function(e){var t=e.params,n=e.containerStyle,p=void 0===n?{}:n;return r.createElement(l.A,{fallback:r.createElement(r.Fragment,null,"Loading...")},(function(){return r.createElement(c.q9.Provider,null,r.createElement(c.Oy,{initialMetrics:s.Y},r.createElement("div",{style:Object.assign({border:"1px solid var(--ifm-color-emphasis-200)",borderRadius:"var(--ifm-global-radius)",position:"relative"},p)},r.createElement(i.A,(0,a.A)({},t.compilerProps,{minHeight:62,placeholder:o.A}))),r.createElement(d.A,{msg:t.errorProps.msg,isPopup:!0}),r.createElement(m.A,t.knobProps),r.createElement(d.A,t.errorProps),r.createElement(g.w,t.actions)))}))}},33557:(e,t,n)=>{"use strict";n.d(t,{A:()=>d});var a=n(96540),r=n(8755),l=n(64270),i=n(45550),o=n(91147);const d=Object.assign({React:a,LinearGradient:o.A},r,l,i,a)},42412:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>A,contentTitle:()=>b,default:()=>f,frontMatter:()=>u,metadata:()=>N,toc:()=>C});var a=n(9668),r=n(21367),l=(n(96540),n(15680)),i=n(70926),o=(n(21518),n(46061),n(72787)),d=n(35504),m=["components"],g={toc:[]},c="wrapper";function s(e){var t=e.components,n=(0,r.A)(e,m);return(0,l.yg)(c,(0,a.A)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,l.yg)("div",{className:"snack-player","data-snack-name":"RNE Tab","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20Tab%2C%20Text%2C%20TabView%20%7D%20from%20'%40rneui%2Fthemed'%3B%0A%0Aexport%20default%20()%20%3D%3E%20%7B%0Aconst%20%5Bindex%2C%20setIndex%5D%20%3D%20React.useState(0)%3B%0A%0Areturn%20(%0A%20%20%3C%3E%0A%20%20%20%20%3CTab%0A%20%20%20%20%20%20value%3D%7Bindex%7D%0A%20%20%20%20%20%20onChange%3D%7B(e)%20%3D%3E%20setIndex(e)%7D%0A%20%20%20%20%20%20indicatorStyle%3D%7B%7B%0A%20%20%20%20%20%20%20%20backgroundColor%3A%20'white'%2C%0A%20%20%20%20%20%20%20%20height%3A%203%2C%0A%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20variant%3D%22primary%22%0A%20%20%20%20%3E%0A%20%20%20%20%20%20%3CTab.Item%0A%20%20%20%20%20%20%20%20title%3D%22Recent%22%0A%20%20%20%20%20%20%20%20titleStyle%3D%7B%7B%20fontSize%3A%2012%20%7D%7D%0A%20%20%20%20%20%20%20%20icon%3D%7B%7B%20name%3A%20'timer'%2C%20type%3A%20'ionicon'%2C%20color%3A%20'white'%20%7D%7D%0A%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%3CTab.Item%0A%20%20%20%20%20%20%20%20title%3D%22favorite%22%0A%20%20%20%20%20%20%20%20titleStyle%3D%7B%7B%20fontSize%3A%2012%20%7D%7D%0A%20%20%20%20%20%20%20%20icon%3D%7B%7B%20name%3A%20'heart'%2C%20type%3A%20'ionicon'%2C%20color%3A%20'white'%20%7D%7D%0A%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%3CTab.Item%0A%20%20%20%20%20%20%20%20title%3D%22cart%22%0A%20%20%20%20%20%20%20%20titleStyle%3D%7B%7B%20fontSize%3A%2012%20%7D%7D%0A%20%20%20%20%20%20%20%20icon%3D%7B%7B%20name%3A%20'cart'%2C%20type%3A%20'ionicon'%2C%20color%3A%20'white'%20%7D%7D%0A%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%3C%2FTab%3E%0A%0A%20%20%20%20%3CTabView%20value%3D%7Bindex%7D%20onChange%3D%7BsetIndex%7D%20animationType%3D%22spring%22%3E%0A%20%20%20%20%20%20%3CTabView.Item%20style%3D%7B%7B%20backgroundColor%3A%20'red'%2C%20width%3A%20'100%25'%20%7D%7D%3E%0A%20%20%20%20%20%20%20%20%3CText%20h1%3ERecent%3C%2FText%3E%0A%20%20%20%20%20%20%3C%2FTabView.Item%3E%0A%20%20%20%20%20%20%3CTabView.Item%20style%3D%7B%7B%20backgroundColor%3A%20'blue'%2C%20width%3A%20'100%25'%20%7D%7D%3E%0A%20%20%20%20%20%20%20%20%3CText%20h1%3EFavorite%3C%2FText%3E%0A%20%20%20%20%20%20%3C%2FTabView.Item%3E%0A%20%20%20%20%20%20%3CTabView.Item%20style%3D%7B%7B%20backgroundColor%3A%20'green'%2C%20width%3A%20'100%25'%20%7D%7D%3E%0A%20%20%20%20%20%20%20%20%3CText%20h1%3ECart%3C%2FText%3E%0A%20%20%20%20%20%20%3C%2FTabView.Item%3E%0A%20%20%20%20%3C%2FTabView%3E%0A%20%20%3C%2F%3E%0A)%3B%0A%7D%3B","data-snack-dependencies":"@rneui/themed,@rneui/base","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}))}s.isMDXComponent=!0;var p=n(55624),y=["components"],u={id:"tab",title:"Tab"},b=void 0,N={unversionedId:"components/tab",id:"version-4.0.0-rc.7/components/tab",title:"Tab",description:"Tabs organize content across different screens, data sets, and other interactions.",source:"@site/versioned_docs/version-4.0.0-rc.7/components/Tab.mdx",sourceDirName:"components",slug:"/components/tab",permalink:"/docs/4.0.0-rc.7/components/tab",draft:!1,editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/versioned_docs/version-4.0.0-rc.7/components/Tab.mdx",tags:[],version:"4.0.0-rc.7",frontMatter:{id:"tab",title:"Tab"},sidebar:"docs",previous:{title:"Switch",permalink:"/docs/4.0.0-rc.7/components/switch"},next:{title:"Tab.Item",permalink:"/docs/4.0.0-rc.7/components/tab_item"}},A={},C=[{value:"Usage",id:"usage",level:2},{value:"Basic Tabs",id:"basic-tabs",level:3},{value:"Active Tab Items",id:"active-tab-items",level:3},{value:"Props",id:"props",level:2},{value:"Playground",id:"playground",level:2}],v={toc:C},h="wrapper";function f(e){var t=e.components,n=(0,r.A)(e,y);return(0,l.yg)(h,(0,a.A)({},v,n,{components:t,mdxType:"MDXLayout"}),(0,l.yg)(i.y,{mdxType:"IconsStyle"}),(0,l.yg)("p",null,"Tabs organize content across different screens, data sets, and other interactions."),(0,l.yg)("admonition",{type:"note"},(0,l.yg)("p",{parentName:"admonition"},"This component is not for (complex) navigation. Use ",(0,l.yg)("a",{parentName:"p",href:"https://reactnavigation.org"},"React Navigation")," for that.")),(0,l.yg)("h2",{id:"usage"},"Usage"),(0,l.yg)("div",{class:"row inline-flex-center"},(0,l.yg)("div",{class:"col col--3"},(0,l.yg)("h4",null,"Import")),(0,l.yg)("div",{class:"col col--9"},(0,l.yg)(o.A,{mdxType:"CodeBlock"},"import { Tab } from '@rneui/themed';")),(0,l.yg)("div",{class:"col col--3"},(0,l.yg)("h4",null,"Theme Key"," ",(0,l.yg)("a",{href:"../customizing#using-themeprovider"},(0,l.yg)(d.wfp,{mdxType:"BiInfoCircle"})))),(0,l.yg)("div",{class:"col col--9"},(0,l.yg)(o.A,{mdxType:"CodeBlock"},"Tab"))),(0,l.yg)("h3",{id:"basic-tabs"},"Basic Tabs"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-tsx",metastring:"live",live:!0},"function RneTab() {\n  const [index, setIndex] = React.useState(0);\n  return (\n    <>\n      <Tab value={index} onChange={setIndex} dense>\n        <Tab.Item>Tab</Tab.Item>\n        <Tab.Item>Tab</Tab.Item>\n      </Tab>\n    </>\n  );\n}\n")),(0,l.yg)("h3",{id:"active-tab-items"},"Active Tab Items"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-tsx",metastring:"live",live:!0},'<Tab value={0} scrollable>\n  <Tab.Item\n    containerStyle={(active) => ({\n      backgroundColor: active ? "red" : undefined,\n    })}\n  >\n    Tab\n  </Tab.Item>\n  <Tab.Item\n    buttonStyle={(active) => ({\n      backgroundColor: active ? "red" : undefined,\n    })}\n  >\n    Tab\n  </Tab.Item>\n</Tab>\n')),(0,l.yg)(s,{mdxType:"Usage"}),(0,l.yg)("h2",{id:"props"},"Props"),(0,l.yg)("admonition",{type:"note"},(0,l.yg)("p",{parentName:"admonition"},"Includes all ",(0,l.yg)("a",{parentName:"p",href:"https://reactnative.dev/docs/view#props"},"View")," props.")),(0,l.yg)("div",{class:"table-responsive"},(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Name"),(0,l.yg)("th",{parentName:"tr",align:null},"Type"),(0,l.yg)("th",{parentName:"tr",align:null},"Default"),(0,l.yg)("th",{parentName:"tr",align:null},"Description"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"buttonStyle")),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"ViewStyle or (active: boolean) => ViewStyle")),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"none")),(0,l.yg)("td",{parentName:"tr",align:null},"Additional button style")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"containerStyle")),(0,l.yg)("td",{parentName:"tr",align:null},"ViewStyle or (active: boolean) => ViewStyle"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"none")),(0,l.yg)("td",{parentName:"tr",align:null},"Additional Styling for button container.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"dense")),(0,l.yg)("td",{parentName:"tr",align:null},"boolean"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"none")),(0,l.yg)("td",{parentName:"tr",align:null},"Dense Tab Item")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"disableIndicator")),(0,l.yg)("td",{parentName:"tr",align:null},"boolean"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"Disable the indicator below.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"iconPosition")),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"left")," ","|"," ",(0,l.yg)("inlineCode",{parentName:"td"},"right")," ","|"," ",(0,l.yg)("inlineCode",{parentName:"td"},"top")," ","|"," ",(0,l.yg)("inlineCode",{parentName:"td"},"bottom")),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"none")),(0,l.yg)("td",{parentName:"tr",align:null})),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"indicatorStyle")),(0,l.yg)("td",{parentName:"tr",align:null},"View Style"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"Additional styling for tab indicator.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"onChange")),(0,l.yg)("td",{parentName:"tr",align:null},"(value: number) => void"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"Function")),(0,l.yg)("td",{parentName:"tr",align:null},"On Index Change Callback.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"scrollable")),(0,l.yg)("td",{parentName:"tr",align:null},"boolean"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"false")),(0,l.yg)("td",{parentName:"tr",align:null},"Makes Tab Scrolling")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"titleStyle")),(0,l.yg)("td",{parentName:"tr",align:null},"TextStyle or (active: boolean) => TextStyle"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"none")),(0,l.yg)("td",{parentName:"tr",align:null},"Additional button title style")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"value")),(0,l.yg)("td",{parentName:"tr",align:null},"number"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"0")),(0,l.yg)("td",{parentName:"tr",align:null},"Child position index value.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"variant")),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"primary")," ","|"," ",(0,l.yg)("inlineCode",{parentName:"td"},"default")),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"default")),(0,l.yg)("td",{parentName:"tr",align:null},"Define the background Variant."))))),(0,l.yg)("h2",{id:"playground"},"Playground"),(0,l.yg)(p.A,{mdxType:"Play"}))}f.isMDXComponent=!0},55624:(e,t,n)=>{"use strict";n.d(t,{A:()=>d});var a=n(96540),r=n(64270),l=n(26795),i=n(10171),o=n(11451);const d=function(){var e=(0,i.A)({componentName:"Tab",props:{children:{value:' \n          <Tab.Item title="Recent" />\n          <Tab.Item title="favourite" />\n          <Tab.Item title="cart" />\n         ',type:o.B.ReactNode},value:{type:o.B.Number,value:0},onChange:{type:o.B.Function,value:'() => console.log("onChange()")'},disableIndicator:{type:o.B.Boolean,value:!1},indicatorStyle:{type:o.B.Object,value:"{}"},variant:{type:o.B.Enum,options:{primary:"primary",default:"default"},value:"default"}},scope:{Tab:r.Tab},imports:{"@rneui/base":{named:["Tab"]}}});return a.createElement(a.Fragment,null,a.createElement(l.A,{params:e}))}},68260:()=>{},70926:(e,t,n)=>{"use strict";n.d(t,{y:()=>d});var a=n(96540),r=n(3352),l=n(14628),i=n(1547),o=n(83564),d=function(){return a.createElement(r.A,null,a.createElement("style",{type:"text/css"},"\n          @font-face {\n            font-family: 'MaterialIcons';\n            src: url("+i.A+") format('truetype');\n          }\n          @font-face {\n            font-family: 'FontAwesome';\n            src: url("+o.A+") format('truetype');\n          }\n          @font-face {\n            font-family: 'MaterialCommunityIcons';\n            src: url("+l.A+") format('truetype');\n          }\n        "))}},78360:(e,t,n)=>{"use strict";n.d(t,{A:()=>A});var a=n(21367),r=n(9668),l=n(96540),i=n(53686),o=n(20053),d=(n(26297),n(5222)),m=n(91010),g=n(41262);const c={playgroundContainer:"playgroundContainer_TGbA",playgroundHeader:"playgroundHeader_qwyd",playgroundEditor:"playgroundEditor_PvJ1",playgroundPreview:"playgroundPreview_bb8I",toggleContainer:"toggleContainer_ZZiH",toggleIcon:"toggleIcon_OnrQ",showCode:"showCode_O0Od"};var s=n(195),p=n(59644),y=["children","transformCode"];function u(){return l.createElement("div",null,"Loading...")}function b(e){var t=(0,s.A)(),n=(0,l.useContext)(i.MY),a=n.code,o=n.language,d=n.theme,m=n.disabled,g=n.onChange;return l.createElement(i.w,(0,r.A)({key:String(t),code:a,language:o,theme:d,disabled:m,onChange:g},e,{className:c.playgroundEditor}))}function N(e){var t=e.showCode,n=e.preImports,a=void 0===n?"":n,r=(e.wrapper,l.useState(t)),d=r[0],g=r[1],s=function(){g((function(e){return!e}))};return l.createElement(l.Fragment,null,l.createElement("div",{className:c.playgroundPreview},l.createElement(m.A,{fallback:l.createElement(u,null)},(function(){return l.createElement(l.Fragment,null,l.createElement(i.pA,null),l.createElement(i.p1,null),l.createElement("div",{className:c.toggleContainer},l.createElement("div",{className:(0,o.A)(c.toggleIcon),onClick:s},l.createElement(p.luQ,null),l.createElement("span",{className:c.showCode},d?"Hide":"Show"," Code"))))}))),d&&l.createElement(b,{preImports:a,showCode:d}))}function A(e){var t=e.children,n=(e.transformCode,(0,a.A)(e,y)),o=((0,d.A)().siteConfig.themeConfig.liveCodeBlock.playgroundPosition,(0,g.A)());return l.createElement("div",{className:c.playgroundContainer},l.createElement(i.Q,(0,r.A)({code:t.replace(/\n$/,""),theme:o},n),l.createElement(N,{showCode:n.showCode})))}}}]);