(self.webpackChunkrne_website=self.webpackChunkrne_website||[]).push([[87180],{2914:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>N,default:()=>b,frontMatter:()=>u,metadata:()=>A,toc:()=>C});var a=n(9668),r=n(21367),l=(n(96540),n(15680)),o=n(70926),i=(n(21518),n(46061),n(72787)),d=n(35504),g=["components"],p={toc:[{value:"LinearGradient Usage",id:"lineargradient-usage",level:3}]},m="wrapper";function c(e){var t=e.components,n=(0,r.A)(e,g);return(0,l.yg)(m,(0,a.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Note:"),"\nMake sure that you have completed ",(0,l.yg)("a",{parentName:"p",href:"../installation#install-react-native-safe-area-context"},"Step 3")," in the setup guide before using ",(0,l.yg)("inlineCode",{parentName:"p"},"Header"),"."),(0,l.yg)("p",null,"Headers are navigation components that display information and actions relating\nto the current screen."),(0,l.yg)("h3",{id:"lineargradient-usage"},"LinearGradient Usage"),(0,l.yg)("p",null,"Using LinearGradient in React Native Elements is supported through the\n",(0,l.yg)("a",{parentName:"p",href:"https://github.com/react-native-community/react-native-linear-gradient"},"react-native-linear-gradient"),"\npackage. If you're using expo or create-react-native-app then you can use\n",(0,l.yg)("inlineCode",{parentName:"p"},"linearGradientProps")," prop right out the box with no additional setup."),(0,l.yg)("p",null,"For react-native-cli users, make sure to follow the\n",(0,l.yg)("a",{parentName:"p",href:"https://github.com/react-native-community/react-native-linear-gradient#add-it-to-your-project"},"installation instructions"),"\nand use it like this:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-jsx"},"import { Header } from '@rneui/themed';\nimport LinearGradient from 'react-native-linear-gradient';\n\n...\n\n<Header\n  ViewComponent={LinearGradient} // Don't forget this!\n  linearGradientProps={{\n    colors: ['red', 'pink'],\n    start: { x: 0, y: 0.5 },\n    end: { x: 1, y: 0.5 },\n  }}\n/>\n")),(0,l.yg)("div",{className:"snack-player","data-snack-name":"RNE Header","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%0AStyleSheet%2C%0AView%2C%0AText%2C%0ALinking%2C%0AStyleProp%2C%0ATextStyle%2C%0AViewStyle%2C%0A%7D%20from%20'react-native'%3B%0Aimport%20%7B%20Header%20as%20HeaderRNE%2C%20HeaderProps%2C%20Icon%20%7D%20from%20'%40rneui%2Fthemed'%3B%0Aimport%20%7B%20TouchableOpacity%20%7D%20from%20'react-native-gesture-handler'%3B%0Aimport%20%7B%20SafeAreaProvider%20%7D%20from%20'react-native-safe-area-context'%3B%0A%0Atype%20HeaderComponentProps%20%3D%20%7B%0Atitle%3A%20string%3B%0Aview%3F%3A%20string%3B%0A%7D%3B%0A%0Atype%20ParamList%20%3D%20%7B%0ADetail%3A%20%7B%0A%20%20openDrawer%3A%20void%3B%0A%7D%3B%0A%7D%3B%0A%0Aconst%20Header%3A%20React.FunctionComponent%3CHeaderComponentProps%3E%20%3D%20(props)%20%3D%3E%20%7B%0A%0Aconst%20docsNavigate%20%3D%20()%20%3D%3E%20%7B%0A%20%20Linking.openURL(%60https%3A%2F%2Freactnativeelements.com%2Fdocs%2F%24%7Bprops.view%7D%60)%3B%0A%7D%3B%0A%0Aconst%20playgroundNavigate%20%3D%20()%20%3D%3E%20%7B%0A%20%20Linking.openURL(%60https%3A%2F%2F%40rneui%2Fthemed.js.org%2F%23%2F%24%7Bprops.view%7D%60)%3B%0A%7D%3B%0A%0Areturn%20(%0A%20%20%3CSafeAreaProvider%3E%0A%20%20%20%20%3CHeaderRNE%0A%20%20%20%20%20%20leftComponent%3D%7B%7B%0A%20%20%20%20%20%20%20%20icon%3A%20'menu'%2C%0A%20%20%20%20%20%20%20%20color%3A%20'%23fff'%2C%0A%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20rightComponent%3D%7B%0A%20%20%20%20%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.headerRight%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CTouchableOpacity%20onPress%3D%7BdocsNavigate%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CIcon%20name%3D%22description%22%20color%3D%22white%22%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C%2FTouchableOpacity%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CTouchableOpacity%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20style%3D%7B%7B%20marginLeft%3A%2010%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20onPress%3D%7BplaygroundNavigate%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CIcon%20type%3D%22antdesign%22%20name%3D%22rocket1%22%20color%3D%22white%22%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C%2FTouchableOpacity%3E%0A%20%20%20%20%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20centerComponent%3D%7B%7B%20text%3A%20'Header'%2C%20style%3A%20styles.heading%20%7D%7D%0A%20%20%20%20%2F%3E%0A%20%20%3C%2FSafeAreaProvider%3E%0A)%3B%0A%7D%3B%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0AheaderContainer%3A%20%7B%0A%20%20justifyContent%3A%20'center'%2C%0A%20%20alignItems%3A%20'center'%2C%0A%20%20backgroundColor%3A%20'%23397af8'%2C%0A%20%20marginBottom%3A%2020%2C%0A%20%20width%3A%20'100%25'%2C%0A%20%20paddingVertical%3A%2015%2C%0A%7D%2C%0Aheading%3A%20%7B%0A%20%20color%3A%20'white'%2C%0A%20%20fontSize%3A%2022%2C%0A%20%20fontWeight%3A%20'bold'%2C%0A%7D%2C%0AheaderRight%3A%20%7B%0A%20%20display%3A%20'flex'%2C%0A%20%20flexDirection%3A%20'row'%2C%0A%20%20marginTop%3A%205%2C%0A%7D%2C%0AsubheaderText%3A%20%7B%0A%20%20color%3A%20'white'%2C%0A%20%20fontSize%3A%2016%2C%0A%20%20fontWeight%3A%20'bold'%2C%0A%7D%2C%0A%7D)%3B%0A%0Aexport%20default%20Header%3B","data-snack-dependencies":"@rneui/themed,@rneui/base","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}))}c.isMDXComponent=!0;var s=n(40035),y=["components"],u={id:"header",title:"Header"},N=void 0,A={unversionedId:"components/header",id:"version-4.0.0-rc.8/components/header",title:"Header",description:"Headers are navigation components that display information and actions relating to the current screen.",source:"@site/versioned_docs/version-4.0.0-rc.8/components/Header.mdx",sourceDirName:"components",slug:"/components/header",permalink:"/react-native-elements-next/docs/components/header",draft:!1,editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/versioned_docs/version-4.0.0-rc.8/components/Header.mdx",tags:[],version:"4.0.0-rc.8",frontMatter:{id:"header",title:"Header"},sidebar:"docs",previous:{title:"FAB",permalink:"/react-native-elements-next/docs/components/fab"},next:{title:"Icon",permalink:"/react-native-elements-next/docs/components/icon"}},h={},C=[{value:"Usage",id:"usage",level:2},{value:"Props",id:"props",level:2},{value:"Playground",id:"playground",level:2}],f={toc:C},v="wrapper";function b(e){var t=e.components,n=(0,r.A)(e,y);return(0,l.yg)(v,(0,a.A)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,l.yg)(o.y,{mdxType:"IconsStyle"}),(0,l.yg)("p",null,"Headers are navigation components that display information and actions relating to the current screen.\n",(0,l.yg)("strong",{parentName:"p"},"Note:"),"\nMake sure that you have completed ",(0,l.yg)("a",{parentName:"p",href:"../installation#install-react-native-safe-area-context"},"Step 3")," in the setup guide before using ",(0,l.yg)("inlineCode",{parentName:"p"},"Header"),"."),(0,l.yg)("h2",{id:"usage"},"Usage"),(0,l.yg)("div",{class:"row inline-flex-center"},(0,l.yg)("div",{class:"col col--3"},(0,l.yg)("h4",null,"Import")),(0,l.yg)("div",{class:"col col--9"},(0,l.yg)(i.A,{mdxType:"CodeBlock"},"import { Header } from '@rneui/themed';")),(0,l.yg)("div",{class:"col col--3"},(0,l.yg)("h4",null,"Theme Key"," ",(0,l.yg)("a",{href:"../customizing#using-themeprovider"},(0,l.yg)(d.wfp,{mdxType:"BiInfoCircle"})))),(0,l.yg)("div",{class:"col col--9"},(0,l.yg)(i.A,{mdxType:"CodeBlock"},"Header"))),(0,l.yg)(c,{mdxType:"Usage"}),(0,l.yg)("h2",{id:"props"},"Props"),(0,l.yg)("admonition",{type:"note"},(0,l.yg)("p",{parentName:"admonition"},"Includes all ",(0,l.yg)("a",{parentName:"p",href:"https://reactnative.dev/docs/view#props"},"View")," props.")),(0,l.yg)("div",{class:"table-responsive"},(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Name"),(0,l.yg)("th",{parentName:"tr",align:null},"Type"),(0,l.yg)("th",{parentName:"tr",align:null},"Default"),(0,l.yg)("th",{parentName:"tr",align:null},"Description"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"ViewComponent")),(0,l.yg)("td",{parentName:"tr",align:null},"React Component"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"View")),(0,l.yg)("td",{parentName:"tr",align:null},"Component for container.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"backgroundColor")),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"Sets backgroundColor of the parent component.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"backgroundImage")),(0,l.yg)("td",{parentName:"tr",align:null},"ImageSourcePropType"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"Sets backgroundImage for parent component.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"backgroundImageStyle")),(0,l.yg)("td",{parentName:"tr",align:null},"ImageStyle"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"Styling for backgroundImage in the main container.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"barStyle")),(0,l.yg)("td",{parentName:"tr",align:null},"StatusBarStyle"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"Sets the color of the status bar text.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"centerComponent")),(0,l.yg)("td",{parentName:"tr",align:null},"HeaderSubComponent"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"Define your center component here.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"centerContainerStyle")),(0,l.yg)("td",{parentName:"tr",align:null},"View Style"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"Styling for container around the centerComponent.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"children")),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"(Element")," ","|"," ",(0,l.yg)("inlineCode",{parentName:"td"},"Element[]) & ReactNode")),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"[]")),(0,l.yg)("td",{parentName:"tr",align:null},"Add children component to the header.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"containerStyle")),(0,l.yg)("td",{parentName:"tr",align:null},"View Style"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"Styling around the main container.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"edges")),(0,l.yg)("td",{parentName:"tr",align:null},"Edge[]"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"['left', 'top', 'right']")),(0,l.yg)("td",{parentName:"tr",align:null},"SafeAreaView edges control.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"elevated")),(0,l.yg)("td",{parentName:"tr",align:null},"boolean"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"Elevation for header")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"hideStatusBar")),(0,l.yg)("td",{parentName:"tr",align:null},"Boolean"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"false")),(0,l.yg)("td",{parentName:"tr",align:null},"Accepts all props for StatusBar.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"leftComponent")),(0,l.yg)("td",{parentName:"tr",align:null},"HeaderSubComponent"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"Define your left component here.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"leftContainerStyle")),(0,l.yg)("td",{parentName:"tr",align:null},"View Style"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"Styling for container around the leftComponent.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"linearGradientProps")),(0,l.yg)("td",{parentName:"tr",align:null},"Object"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"Displays a linear gradient. See ",(0,l.yg)("a",{parentName:"td",href:"#lineargradient-usage"},"usage"),".")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"placement")),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"center")," ","|"," ",(0,l.yg)("inlineCode",{parentName:"td"},"left")," ","|"," ",(0,l.yg)("inlineCode",{parentName:"td"},"right")),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"center")),(0,l.yg)("td",{parentName:"tr",align:null},"Alignment for title.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"rightComponent")),(0,l.yg)("td",{parentName:"tr",align:null},"HeaderSubComponent"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"Define your right component here.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"rightContainerStyle")),(0,l.yg)("td",{parentName:"tr",align:null},"View Style"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"Styling for container around the rightComponent.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"statusBarProps")),(0,l.yg)("td",{parentName:"tr",align:null},"StatusBarProps"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"Accepts all props for StatusBar."))))),(0,l.yg)("h2",{id:"playground"},"Playground"),(0,l.yg)(s.A,{mdxType:"Play"}))}b.isMDXComponent=!0},18411:()=>{},26795:(e,t,n)=>{"use strict";n.d(t,{A:()=>s});var a=n(9668),r=n(96540),l=n(91010),o=n(32594),i=n(20018),d=n(96109),g=n(11245),p=n(34397),m=n(50546),c=n(25407);const s=function(e){var t=e.params,n=e.containerStyle,s=void 0===n?{}:n;return r.createElement(l.A,{fallback:r.createElement(r.Fragment,null,"Loading...")},(function(){return r.createElement(m.q9.Provider,null,r.createElement(m.Oy,{initialMetrics:c.Y},r.createElement("div",{style:Object.assign({border:"1px solid var(--ifm-color-emphasis-200)",borderRadius:"var(--ifm-global-radius)",position:"relative"},s)},r.createElement(o.A,(0,a.A)({},t.compilerProps,{minHeight:62,placeholder:i.A}))),r.createElement(d.A,{msg:t.errorProps.msg,isPopup:!0}),r.createElement(g.A,t.knobProps),r.createElement(d.A,t.errorProps),r.createElement(p.w,t.actions)))}))}},33557:(e,t,n)=>{"use strict";n.d(t,{A:()=>d});var a=n(96540),r=n(8755),l=n(64270),o=n(45550),i=n(91147);const d=Object.assign({React:a,LinearGradient:i.A},r,l,o,a)},40035:(e,t,n)=>{"use strict";n.d(t,{A:()=>g});var a=n(96540),r=n(64270),l=n(50546),o=n(26795),i=n(10171),d=n(11451);const g=function(){var e=(0,i.A)({componentName:"Header",props:{backgroundColor:{type:d.B.String,value:null},backgroundImage:{type:d.B.Object,value:null},backgroundImageStyle:{type:d.B.Object,value:"{}"},barStyle:{type:d.B.Enum,options:{default:"default","light-content":"light-content","dark-content":"dark-content"},value:"default"},centerComponent:{type:d.B.Object,value:"{ text: 'MY TITLE', style: { color: '#fff' } }",description:"{ text: string, ...Text props} OR { icon: string, ...Icon props} OR  React element or component"},centerContainerStyle:{type:d.B.Object,value:"{}"},containerStyle:{type:d.B.Object,value:"{width:350}"},leftComponent:{type:d.B.Object,value:"{ icon: 'menu', color: '#fff' }"},leftContainerStyle:{type:d.B.Object,value:"{}",description:"{...Gradient props}"},linearGradientProps:{type:d.B.Object,value:"{}"},placement:{type:d.B.Enum,options:{center:"center",left:"left",right:"right"},value:"center"},rightComponent:{type:d.B.Object,value:"{ icon: 'home', color: '#fff' }"},rightContainerStyle:{type:d.B.Object,value:"{}"},statusBarProps:{type:d.B.Object,value:"{}"},ViewComponent:{type:d.B.ReactNode,value:null}},scope:{Header:r.Header,Icon:r.Icon},imports:{"@rneui/base":{named:["Header","Icon"]},"react-native-safe-area-context":{named:["SafeAreaProvider"]}}});return a.createElement(a.Fragment,null,a.createElement(l.Oy,null,a.createElement(o.A,{params:e})))}},68260:()=>{},70926:(e,t,n)=>{"use strict";n.d(t,{y:()=>d});var a=n(96540),r=n(3352),l=n(14628),o=n(1547),i=n(83564),d=function(){return a.createElement(r.A,null,a.createElement("style",{type:"text/css"},"\n          @font-face {\n            font-family: 'MaterialIcons';\n            src: url("+o.A+") format('truetype');\n          }\n          @font-face {\n            font-family: 'FontAwesome';\n            src: url("+i.A+") format('truetype');\n          }\n          @font-face {\n            font-family: 'MaterialCommunityIcons';\n            src: url("+l.A+") format('truetype');\n          }\n        "))}},78360:(e,t,n)=>{"use strict";n.d(t,{A:()=>h});var a=n(21367),r=n(9668),l=n(96540),o=n(53686),i=n(20053),d=(n(26297),n(5222)),g=n(91010),p=n(41262);const m={playgroundContainer:"playgroundContainer_TGbA",playgroundHeader:"playgroundHeader_qwyd",playgroundEditor:"playgroundEditor_PvJ1",playgroundPreview:"playgroundPreview_bb8I",toggleContainer:"toggleContainer_ZZiH",toggleIcon:"toggleIcon_OnrQ",showCode:"showCode_O0Od"};var c=n(195),s=n(59644),y=["children","transformCode"];function u(){return l.createElement("div",null,"Loading...")}function N(e){var t=(0,c.A)(),n=(0,l.useContext)(o.MY),a=n.code,i=n.language,d=n.theme,g=n.disabled,p=n.onChange;return l.createElement(o.w,(0,r.A)({key:String(t),code:a,language:i,theme:d,disabled:g,onChange:p},e,{className:m.playgroundEditor}))}function A(e){var t=e.showCode,n=e.preImports,a=void 0===n?"":n,r=(e.wrapper,l.useState(t)),d=r[0],p=r[1],c=function(){p((function(e){return!e}))};return l.createElement(l.Fragment,null,l.createElement("div",{className:m.playgroundPreview},l.createElement(g.A,{fallback:l.createElement(u,null)},(function(){return l.createElement(l.Fragment,null,l.createElement(o.pA,null),l.createElement(o.p1,null),l.createElement("div",{className:m.toggleContainer},l.createElement("div",{className:(0,i.A)(m.toggleIcon),onClick:c},l.createElement(s.luQ,null),l.createElement("span",{className:m.showCode},d?"Hide":"Show"," Code"))))}))),d&&l.createElement(N,{preImports:a,showCode:d}))}function h(e){var t=e.children,n=(e.transformCode,(0,a.A)(e,y)),i=((0,d.A)().siteConfig.themeConfig.liveCodeBlock.playgroundPosition,(0,p.A)());return l.createElement("div",{className:m.playgroundContainer},l.createElement(o.Q,(0,r.A)({code:t.replace(/\n$/,""),theme:i},n),l.createElement(A,{showCode:n.showCode})))}}}]);