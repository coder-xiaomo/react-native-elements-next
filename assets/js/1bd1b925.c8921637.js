(self.webpackChunkrne_website=self.webpackChunkrne_website||[]).push([[1291],{18411:()=>{},26795:(e,t,n)=>{"use strict";n.d(t,{A:()=>c});var a=n(9668),r=n(96540),l=n(91010),i=n(32594),o=n(20018),d=n(96109),p=n(11245),g=n(34397),m=n(50546),y=n(25407);const c=function(e){var t=e.params,n=e.containerStyle,c=void 0===n?{}:n;return r.createElement(l.A,{fallback:r.createElement(r.Fragment,null,"Loading...")},(function(){return r.createElement(m.q9.Provider,null,r.createElement(m.Oy,{initialMetrics:y.Y},r.createElement("div",{style:Object.assign({border:"1px solid var(--ifm-color-emphasis-200)",borderRadius:"var(--ifm-global-radius)",position:"relative"},c)},r.createElement(i.A,(0,a.A)({},t.compilerProps,{minHeight:62,placeholder:o.A}))),r.createElement(d.A,{msg:t.errorProps.msg,isPopup:!0}),r.createElement(p.A,t.knobProps),r.createElement(d.A,t.errorProps),r.createElement(g.w,t.actions)))}))}},40035:(e,t,n)=>{"use strict";n.d(t,{A:()=>p});var a=n(96540),r=n(64270),l=n(50546),i=n(26795),o=n(10171),d=n(11451);const p=function(){var e=(0,o.A)({componentName:"Header",props:{backgroundColor:{type:d.B.String,value:null},backgroundImage:{type:d.B.Object,value:null},backgroundImageStyle:{type:d.B.Object,value:"{}"},barStyle:{type:d.B.Enum,options:{default:"default","light-content":"light-content","dark-content":"dark-content"},value:"default"},centerComponent:{type:d.B.Object,value:"{ text: 'MY TITLE', style: { color: '#fff' } }",description:"{ text: string, ...Text props} OR { icon: string, ...Icon props} OR  React element or component"},centerContainerStyle:{type:d.B.Object,value:"{}"},containerStyle:{type:d.B.Object,value:"{width:350}"},leftComponent:{type:d.B.Object,value:"{ icon: 'menu', color: '#fff' }"},leftContainerStyle:{type:d.B.Object,value:"{}",description:"{...Gradient props}"},linearGradientProps:{type:d.B.Object,value:"{}"},placement:{type:d.B.Enum,options:{center:"center",left:"left",right:"right"},value:"center"},rightComponent:{type:d.B.Object,value:"{ icon: 'home', color: '#fff' }"},rightContainerStyle:{type:d.B.Object,value:"{}"},statusBarProps:{type:d.B.Object,value:"{}"},ViewComponent:{type:d.B.ReactNode,value:null}},scope:{Header:r.Header,Icon:r.Icon},imports:{"@rneui/base":{named:["Header","Icon"]},"react-native-safe-area-context":{named:["SafeAreaProvider"]}}});return a.createElement(a.Fragment,null,a.createElement(l.Oy,null,a.createElement(i.A,{params:e})))}},68260:()=>{},80805:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>N,default:()=>b,frontMatter:()=>u,metadata:()=>A,toc:()=>C});var a=n(9668),r=n(21367),l=(n(96540),n(15680)),i=n(64839),o=(n(21518),n(46061),n(36853)),d=n(35504),p=["components"],g={toc:[{value:"LinearGradient Usage",id:"lineargradient-usage",level:3}]},m="wrapper";function y(e){var t=e.components,n=(0,r.A)(e,p);return(0,l.yg)(m,(0,a.A)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Note:"),"\nMake sure that you have completed ",(0,l.yg)("a",{parentName:"p",href:"../installation#install-react-native-safe-area-context"},"Step 3")," in the setup guide before using ",(0,l.yg)("inlineCode",{parentName:"p"},"Header"),"."),(0,l.yg)("p",null,"Headers are navigation components that display information and actions relating\nto the current screen."),(0,l.yg)("h3",{id:"lineargradient-usage"},"LinearGradient Usage"),(0,l.yg)("p",null,"Using LinearGradient in React Native Elements is supported through the\n",(0,l.yg)("a",{parentName:"p",href:"https://github.com/react-native-community/react-native-linear-gradient"},"react-native-linear-gradient"),"\npackage. If you're using expo or create-react-native-app then you can use\n",(0,l.yg)("inlineCode",{parentName:"p"},"linearGradientProps")," prop right out the box with no additional setup."),(0,l.yg)("p",null,"For react-native-cli users, make sure to follow the\n",(0,l.yg)("a",{parentName:"p",href:"https://github.com/react-native-community/react-native-linear-gradient#add-it-to-your-project"},"installation instructions"),"\nand use it like this:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-jsx"},"import { Header } from '@rneui/themed';\nimport LinearGradient from 'react-native-linear-gradient';\n\n...\n\n<Header\n  ViewComponent={LinearGradient} // Don't forget this!\n  linearGradientProps={{\n    colors: ['red', 'pink'],\n    start: { x: 0, y: 0.5 },\n    end: { x: 1, y: 0.5 },\n  }}\n/>\n")),(0,l.yg)("div",{className:"snack-player","data-snack-name":"RNE Header","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%0AStyleSheet%2C%0AView%2C%0AText%2C%0ALinking%2C%0AStyleProp%2C%0ATextStyle%2C%0AViewStyle%2C%0A%7D%20from%20'react-native'%3B%0Aimport%20%7B%20Header%20as%20HeaderRNE%2C%20HeaderProps%2C%20Icon%20%7D%20from%20'%40rneui%2Fthemed'%3B%0Aimport%20%7B%20TouchableOpacity%20%7D%20from%20'react-native-gesture-handler'%3B%0Aimport%20%7B%20SafeAreaProvider%20%7D%20from%20'react-native-safe-area-context'%3B%0A%0Atype%20HeaderComponentProps%20%3D%20%7B%0Atitle%3A%20string%3B%0Aview%3F%3A%20string%3B%0A%7D%3B%0A%0Atype%20ParamList%20%3D%20%7B%0ADetail%3A%20%7B%0A%20%20openDrawer%3A%20void%3B%0A%7D%3B%0A%7D%3B%0A%0Aconst%20Header%3A%20React.FunctionComponent%3CHeaderComponentProps%3E%20%3D%20(props)%20%3D%3E%20%7B%0A%0Aconst%20docsNavigate%20%3D%20()%20%3D%3E%20%7B%0A%20%20Linking.openURL(%60https%3A%2F%2Freactnativeelements.com%2Fdocs%2F%24%7Bprops.view%7D%60)%3B%0A%7D%3B%0A%0Aconst%20playgroundNavigate%20%3D%20()%20%3D%3E%20%7B%0A%20%20Linking.openURL(%60https%3A%2F%2F%40rneui%2Fthemed.js.org%2F%23%2F%24%7Bprops.view%7D%60)%3B%0A%7D%3B%0A%0Areturn%20(%0A%20%20%3CSafeAreaProvider%3E%0A%20%20%20%20%3CHeaderRNE%0A%20%20%20%20%20%20leftComponent%3D%7B%7B%0A%20%20%20%20%20%20%20%20icon%3A%20'menu'%2C%0A%20%20%20%20%20%20%20%20color%3A%20'%23fff'%2C%0A%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20rightComponent%3D%7B%0A%20%20%20%20%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.headerRight%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CTouchableOpacity%20onPress%3D%7BdocsNavigate%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CIcon%20name%3D%22description%22%20color%3D%22white%22%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C%2FTouchableOpacity%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CTouchableOpacity%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20style%3D%7B%7B%20marginLeft%3A%2010%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20onPress%3D%7BplaygroundNavigate%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CIcon%20type%3D%22antdesign%22%20name%3D%22rocket1%22%20color%3D%22white%22%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C%2FTouchableOpacity%3E%0A%20%20%20%20%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20centerComponent%3D%7B%7B%20text%3A%20'Header'%2C%20style%3A%20styles.heading%20%7D%7D%0A%20%20%20%20%2F%3E%0A%20%20%3C%2FSafeAreaProvider%3E%0A)%3B%0A%7D%3B%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0AheaderContainer%3A%20%7B%0A%20%20justifyContent%3A%20'center'%2C%0A%20%20alignItems%3A%20'center'%2C%0A%20%20backgroundColor%3A%20'%23397af8'%2C%0A%20%20marginBottom%3A%2020%2C%0A%20%20width%3A%20'100%25'%2C%0A%20%20paddingVertical%3A%2015%2C%0A%7D%2C%0Aheading%3A%20%7B%0A%20%20color%3A%20'white'%2C%0A%20%20fontSize%3A%2022%2C%0A%20%20fontWeight%3A%20'bold'%2C%0A%7D%2C%0AheaderRight%3A%20%7B%0A%20%20display%3A%20'flex'%2C%0A%20%20flexDirection%3A%20'row'%2C%0A%20%20marginTop%3A%205%2C%0A%7D%2C%0AsubheaderText%3A%20%7B%0A%20%20color%3A%20'white'%2C%0A%20%20fontSize%3A%2016%2C%0A%20%20fontWeight%3A%20'bold'%2C%0A%7D%2C%0A%7D)%3B%0A%0Aexport%20default%20Header%3B","data-snack-dependencies":"@rneui/themed,@rneui/base","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}))}y.isMDXComponent=!0;var c=n(40035),s=["components"],u={id:"header",title:"Header"},N=void 0,A={unversionedId:"components/header",id:"components/header",title:"Header",description:"Headers are navigation components that display information and actions relating to the current screen.",source:"@site/docs/components/Header.mdx",sourceDirName:"components",slug:"/components/header",permalink:"/react-native-elements-next/docs/next/components/header",draft:!1,editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/docs/components/Header.mdx",tags:[],version:"current",frontMatter:{id:"header",title:"Header"},sidebar:"docs",previous:{title:"FAB",permalink:"/react-native-elements-next/docs/next/components/fab"},next:{title:"Icon",permalink:"/react-native-elements-next/docs/next/components/icon"}},h={},C=[{value:"Usage",id:"usage",level:2},{value:"Props",id:"props",level:2},{value:"Playground",id:"playground",level:2}],f={toc:C},v="wrapper";function b(e){var t=e.components,n=(0,r.A)(e,s);return(0,l.yg)(v,(0,a.A)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,l.yg)(i.y,{mdxType:"IconsStyle"}),(0,l.yg)("p",null,"Headers are navigation components that display information and actions relating to the current screen.\n",(0,l.yg)("strong",{parentName:"p"},"Note:"),"\nMake sure that you have completed ",(0,l.yg)("a",{parentName:"p",href:"../installation#install-react-native-safe-area-context"},"Step 3")," in the setup guide before using ",(0,l.yg)("inlineCode",{parentName:"p"},"Header"),"."),(0,l.yg)("h2",{id:"usage"},"Usage"),(0,l.yg)("div",{class:"row inline-flex-center"},(0,l.yg)("div",{class:"col col--3"},(0,l.yg)("h4",null,"Import")),(0,l.yg)("div",{class:"col col--9"},(0,l.yg)(o.A,{mdxType:"CodeBlock"},"import { Header } from '@rneui/themed';")),(0,l.yg)("div",{class:"col col--3"},(0,l.yg)("h4",null,"Theme Key"," ",(0,l.yg)("a",{href:"../customizing#using-themeprovider"},(0,l.yg)(d.wfp,{mdxType:"BiInfoCircle"})))),(0,l.yg)("div",{class:"col col--9"},(0,l.yg)(o.A,{mdxType:"CodeBlock"},"Header"))),(0,l.yg)(y,{mdxType:"Usage"}),(0,l.yg)("h2",{id:"props"},"Props"),(0,l.yg)("admonition",{type:"note"},(0,l.yg)("p",{parentName:"admonition"},"Includes all ",(0,l.yg)("a",{parentName:"p",href:"https://reactnative.dev/docs/view#props"},"View")," props.")),(0,l.yg)("div",{class:"table-responsive"},(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Name"),(0,l.yg)("th",{parentName:"tr",align:null},"Type"),(0,l.yg)("th",{parentName:"tr",align:null},"Default"),(0,l.yg)("th",{parentName:"tr",align:null},"Description"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"ViewComponent")),(0,l.yg)("td",{parentName:"tr",align:null},"React Component"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"View")),(0,l.yg)("td",{parentName:"tr",align:null},"Component for container.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"backgroundColor")),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"Sets backgroundColor of the parent component.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"backgroundImage")),(0,l.yg)("td",{parentName:"tr",align:null},"ImageSourcePropType"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"Sets backgroundImage for parent component.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"backgroundImageStyle")),(0,l.yg)("td",{parentName:"tr",align:null},"ImageStyle"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"Styling for backgroundImage in the main container.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"barStyle")),(0,l.yg)("td",{parentName:"tr",align:null},"StatusBarStyle"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"Sets the color of the status bar text.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"centerComponent")),(0,l.yg)("td",{parentName:"tr",align:null},"HeaderSubComponent"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"Define your center component here.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"centerContainerStyle")),(0,l.yg)("td",{parentName:"tr",align:null},"View Style"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"Styling for container around the centerComponent.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"children")),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"(Element")," ","|"," ",(0,l.yg)("inlineCode",{parentName:"td"},"Element[]) & ReactNode")),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"[]")),(0,l.yg)("td",{parentName:"tr",align:null},"Add children component to the header.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"containerStyle")),(0,l.yg)("td",{parentName:"tr",align:null},"View Style"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"Styling around the main container.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"edges")),(0,l.yg)("td",{parentName:"tr",align:null},"Edge[]"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"['left', 'top', 'right']")),(0,l.yg)("td",{parentName:"tr",align:null},"SafeAreaView edges control.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"elevated")),(0,l.yg)("td",{parentName:"tr",align:null},"boolean"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"Elevation for header")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"hideStatusBar")),(0,l.yg)("td",{parentName:"tr",align:null},"Boolean"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"false")),(0,l.yg)("td",{parentName:"tr",align:null},"Accepts all props for StatusBar.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"leftComponent")),(0,l.yg)("td",{parentName:"tr",align:null},"HeaderSubComponent"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"Define your left component here.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"leftContainerStyle")),(0,l.yg)("td",{parentName:"tr",align:null},"View Style"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"Styling for container around the leftComponent.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"linearGradientProps")),(0,l.yg)("td",{parentName:"tr",align:null},"Object"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"Displays a linear gradient. See ",(0,l.yg)("a",{parentName:"td",href:"#lineargradient-usage"},"usage"),".")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"placement")),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"center")," ","|"," ",(0,l.yg)("inlineCode",{parentName:"td"},"left")," ","|"," ",(0,l.yg)("inlineCode",{parentName:"td"},"right")),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"center")),(0,l.yg)("td",{parentName:"tr",align:null},"Alignment for title.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"rightComponent")),(0,l.yg)("td",{parentName:"tr",align:null},"HeaderSubComponent"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"Define your right component here.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"rightContainerStyle")),(0,l.yg)("td",{parentName:"tr",align:null},"View Style"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"Styling for container around the rightComponent.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"statusBarProps")),(0,l.yg)("td",{parentName:"tr",align:null},"StatusBarProps"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"Accepts all props for StatusBar."))))),(0,l.yg)("h2",{id:"playground"},"Playground"),(0,l.yg)(c.A,{mdxType:"Play"}))}b.isMDXComponent=!0}}]);