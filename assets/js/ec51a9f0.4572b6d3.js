(self.webpackChunkrne_website=self.webpackChunkrne_website||[]).push([[10181],{18411:()=>{},26795:(e,t,n)=>{"use strict";n.d(t,{A:()=>g});var a=n(9668),o=n(96540),r=n(91010),l=n(32594),i=n(20018),s=n(96109),m=n(11245),d=n(34397),c=n(50546),p=n(25407);const g=function(e){var t=e.params,n=e.containerStyle,g=void 0===n?{}:n;return o.createElement(r.A,{fallback:o.createElement(o.Fragment,null,"Loading...")},(function(){return o.createElement(c.q9.Provider,null,o.createElement(c.Oy,{initialMetrics:p.Y},o.createElement("div",{style:Object.assign({border:"1px solid var(--ifm-color-emphasis-200)",borderRadius:"var(--ifm-global-radius)",position:"relative"},g)},o.createElement(l.A,(0,a.A)({},t.compilerProps,{minHeight:62,placeholder:i.A}))),o.createElement(s.A,{msg:t.errorProps.msg,isPopup:!0}),o.createElement(m.A,t.knobProps),o.createElement(s.A,t.errorProps),o.createElement(d.w,t.actions)))}))}},33557:(e,t,n)=>{"use strict";n.d(t,{A:()=>s});var a=n(96540),o=n(8755),r=n(64270),l=n(45550),i=n(91147);const s=Object.assign({React:a,LinearGradient:i.A},o,r,l,a)},54584:(e,t,n)=>{"use strict";n.d(t,{A:()=>s});var a=n(96540),o=n(64270),r=n(26795),l=n(10171),i=n(11451);const s=function(){var e=(0,l.A)({componentName:"BottomSheet",props:{children:{type:i.B.ReactNode,value:"<Text>Some Content</Text>"},isVisible:{type:i.B.Boolean,value:!1},modalProps:{type:i.B.Object,value:'{ presentationStyle: "fullScreen" , }',description:"Modal Props -> https://reactnative.dev/docs/modal"}},scope:{BottomSheet:o.BottomSheet,Text:o.Text},imports:{"@rneui/base":{named:["BottomSheet","Text"]}}});return a.createElement(a.Fragment,null,a.createElement(r.A,{params:e}))}},68260:()=>{},70926:(e,t,n)=>{"use strict";n.d(t,{y:()=>s});var a=n(96540),o=n(3352),r=n(14628),l=n(1547),i=n(83564),s=function(){return a.createElement(o.A,null,a.createElement("style",{type:"text/css"},"\n          @font-face {\n            font-family: 'MaterialIcons';\n            src: url("+l.A+") format('truetype');\n          }\n          @font-face {\n            font-family: 'FontAwesome';\n            src: url("+i.A+") format('truetype');\n          }\n          @font-face {\n            font-family: 'MaterialCommunityIcons';\n            src: url("+r.A+") format('truetype');\n          }\n        "))}},78360:(e,t,n)=>{"use strict";n.d(t,{A:()=>C});var a=n(21367),o=n(9668),r=n(96540),l=n(53686),i=n(20053),s=(n(26297),n(5222)),m=n(91010),d=n(41262);const c={playgroundContainer:"playgroundContainer_TGbA",playgroundHeader:"playgroundHeader_qwyd",playgroundEditor:"playgroundEditor_PvJ1",playgroundPreview:"playgroundPreview_bb8I",toggleContainer:"toggleContainer_ZZiH",toggleIcon:"toggleIcon_OnrQ",showCode:"showCode_O0Od"};var p=n(195),g=n(59644),u=["children","transformCode"];function y(){return r.createElement("div",null,"Loading...")}function h(e){var t=(0,p.A)(),n=(0,r.useContext)(l.MY),a=n.code,i=n.language,s=n.theme,m=n.disabled,d=n.onChange;return r.createElement(l.w,(0,o.A)({key:String(t),code:a,language:i,theme:s,disabled:m,onChange:d},e,{className:c.playgroundEditor}))}function A(e){var t=e.showCode,n=e.preImports,a=void 0===n?"":n,o=(e.wrapper,r.useState(t)),s=o[0],d=o[1],p=function(){d((function(e){return!e}))};return r.createElement(r.Fragment,null,r.createElement("div",{className:c.playgroundPreview},r.createElement(m.A,{fallback:r.createElement(y,null)},(function(){return r.createElement(r.Fragment,null,r.createElement(l.pA,null),r.createElement(l.p1,null),r.createElement("div",{className:c.toggleContainer},r.createElement("div",{className:(0,i.A)(c.toggleIcon),onClick:p},r.createElement(g.luQ,null),r.createElement("span",{className:c.showCode},s?"Hide":"Show"," Code"))))}))),s&&r.createElement(h,{preImports:a,showCode:s}))}function C(e){var t=e.children,n=(e.transformCode,(0,a.A)(e,u)),i=((0,s.A)().siteConfig.themeConfig.liveCodeBlock.playgroundPosition,(0,d.A)());return r.createElement("div",{className:c.playgroundContainer},r.createElement(l.Q,(0,o.A)({code:t.replace(/\n$/,""),theme:i},n),r.createElement(A,{showCode:n.showCode})))}},80492:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>C,contentTitle:()=>h,default:()=>b,frontMatter:()=>y,metadata:()=>A,toc:()=>f});var a=n(9668),o=n(21367),r=(n(96540),n(15680)),l=n(70926),i=(n(21518),n(46061),n(72787)),s=n(35504),m=["components"],d={toc:[]},c="wrapper";function p(e){var t=e.components,n=(0,o.A)(e,m);return(0,r.yg)(c,(0,a.A)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Note:"),"\nMake sure that you have completed ",(0,r.yg)("a",{parentName:"p",href:"../installation#install-react-native-safe-area-context"},"Step 3")," in the setup guide before using ",(0,r.yg)("inlineCode",{parentName:"p"},"BottomSheet"),"."),(0,r.yg)("p",null,"Overlay Modal that displays content from the bottom of the screen."),(0,r.yg)("div",{className:"snack-player","data-snack-name":"RNE BottomSheet","data-snack-description":"Example usage","data-snack-code":"import%20React%2C%20%7B%20useState%20%7D%20from%20'react'%3B%0Aimport%20%7B%20BottomSheet%2C%20Button%2C%20ListItem%20%7D%20from%20'%40rneui%2Fthemed'%3B%0Aimport%20%7B%20StyleSheet%20%7D%20from%20'react-native'%3B%0Aimport%20%7B%20SafeAreaProvider%20%7D%20from%20'react-native-safe-area-context'%3B%0A%0Atype%20BottomSheetComponentProps%20%3D%20%7B%7D%3B%0A%0Aconst%20BottomSheetComponent%3A%20React.FunctionComponent%3CBottomSheetComponentProps%3E%20%3D%20()%20%3D%3E%20%7B%0Aconst%20%5BisVisible%2C%20setIsVisible%5D%20%3D%20useState(false)%3B%0Aconst%20list%20%3D%20%5B%0A%20%20%7B%20title%3A%20'List%20Item%201'%20%7D%2C%0A%20%20%7B%20title%3A%20'List%20Item%202'%20%7D%2C%0A%20%20%7B%0A%20%20%20%20title%3A%20'Cancel'%2C%0A%20%20%20%20containerStyle%3A%20%7B%20backgroundColor%3A%20'red'%20%7D%2C%0A%20%20%20%20titleStyle%3A%20%7B%20color%3A%20'white'%20%7D%2C%0A%20%20%20%20onPress%3A%20()%20%3D%3E%20setIsVisible(false)%2C%0A%20%20%7D%2C%0A%5D%3B%0A%0Areturn%20(%0A%20%20%3CSafeAreaProvider%3E%0A%20%20%20%20%3CButton%0A%20%20%20%20%20%20title%3D%22Open%20Bottom%20Sheet%22%0A%20%20%20%20%20%20onPress%3D%7B()%20%3D%3E%20setIsVisible(true)%7D%0A%20%20%20%20%20%20buttonStyle%3D%7Bstyles.button%7D%0A%20%20%20%20%2F%3E%0A%20%20%20%20%3CBottomSheet%20modalProps%3D%7B%7B%7D%7D%20isVisible%3D%7BisVisible%7D%3E%0A%20%20%20%20%20%20%7Blist.map((l%2C%20i)%20%3D%3E%20(%0A%20%20%20%20%20%20%20%20%3CListItem%0A%20%20%20%20%20%20%20%20%20%20key%3D%7Bi%7D%0A%20%20%20%20%20%20%20%20%20%20containerStyle%3D%7Bl.containerStyle%7D%0A%20%20%20%20%20%20%20%20%20%20onPress%3D%7Bl.onPress%7D%0A%20%20%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%20%20%3CListItem.Content%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CListItem.Title%20style%3D%7Bl.titleStyle%7D%3E%7Bl.title%7D%3C%2FListItem.Title%3E%0A%20%20%20%20%20%20%20%20%20%20%3C%2FListItem.Content%3E%0A%20%20%20%20%20%20%20%20%3C%2FListItem%3E%0A%20%20%20%20%20%20))%7D%0A%20%20%20%20%3C%2FBottomSheet%3E%0A%20%20%3C%2FSafeAreaProvider%3E%0A)%3B%0A%7D%3B%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0Abutton%3A%20%7B%0A%20%20margin%3A%2010%2C%0A%7D%2C%0A%7D)%3B%0A%0Aexport%20default%20BottomSheetComponent%3B","data-snack-dependencies":"@rneui/themed,@rneui/base","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}))}p.isMDXComponent=!0;var g=n(54584),u=["components"],y={id:"bottomsheet",title:"BottomSheet"},h=void 0,A={unversionedId:"components/bottomsheet",id:"components/bottomsheet",title:"BottomSheet",description:"Overlay Modal that displays content from the bottom of the screen.",source:"@site/docs/components/BottomSheet.mdx",sourceDirName:"components",slug:"/components/bottomsheet",permalink:"/docs/next/components/bottomsheet",draft:!1,editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/docs/components/BottomSheet.mdx",tags:[],version:"current",frontMatter:{id:"bottomsheet",title:"BottomSheet"},sidebar:"docs",previous:{title:"Badge",permalink:"/docs/next/components/badge"},next:{title:"Button",permalink:"/docs/next/components/button"}},C={},f=[{value:"Usage",id:"usage",level:2},{value:"Props",id:"props",level:2},{value:"Playground",id:"playground",level:2}],B={toc:f},v="wrapper";function b(e){var t=e.components,n=(0,o.A)(e,u);return(0,r.yg)(v,(0,a.A)({},B,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)(l.y,{mdxType:"IconsStyle"}),(0,r.yg)("p",null,"Overlay Modal that displays content from the bottom of the screen.\nThis opens from the bottom of the screen."),(0,r.yg)("h2",{id:"usage"},"Usage"),(0,r.yg)("div",{class:"row inline-flex-center"},(0,r.yg)("div",{class:"col col--3"},(0,r.yg)("h4",null,"Import")),(0,r.yg)("div",{class:"col col--9"},(0,r.yg)(i.A,{mdxType:"CodeBlock"},"import { BottomSheet } from '@rneui/themed';")),(0,r.yg)("div",{class:"col col--3"},(0,r.yg)("h4",null,"Theme Key"," ",(0,r.yg)("a",{href:"../customizing#using-themeprovider"},(0,r.yg)(s.wfp,{mdxType:"BiInfoCircle"})))),(0,r.yg)("div",{class:"col col--9"},(0,r.yg)(i.A,{mdxType:"CodeBlock"},"BottomSheet"))),(0,r.yg)(p,{mdxType:"Usage"}),(0,r.yg)("h2",{id:"props"},"Props"),(0,r.yg)("div",{class:"table-responsive"},(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Name"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Default"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"backdropStyle")),(0,r.yg)("td",{parentName:"tr",align:null},"View Style"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"Style of the backdrop container.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"containerStyle")),(0,r.yg)("td",{parentName:"tr",align:null},"View Style"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"Style of the bottom sheet's container. Use this to change the color of the underlay.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"isVisible")),(0,r.yg)("td",{parentName:"tr",align:null},"boolean"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"false")),(0,r.yg)("td",{parentName:"tr",align:null},"Is the modal component shown.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"modalProps")),(0,r.yg)("td",{parentName:"tr",align:null},"ModalProps"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"{}")),(0,r.yg)("td",{parentName:"tr",align:null},"Additional props handed to the ",(0,r.yg)("inlineCode",{parentName:"td"},"Modal"),".")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"onBackdropPress")),(0,r.yg)("td",{parentName:"tr",align:null},"Function"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"Function")),(0,r.yg)("td",{parentName:"tr",align:null},"Handler for backdrop press.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"scrollViewProps")),(0,r.yg)("td",{parentName:"tr",align:null},"ScrollViewProps"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"{}")),(0,r.yg)("td",{parentName:"tr",align:null},"Used to add props to Scroll view."))))),(0,r.yg)("h2",{id:"playground"},"Playground"),(0,r.yg)(g.A,{mdxType:"Play"}))}b.isMDXComponent=!0}}]);