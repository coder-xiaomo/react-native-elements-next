"use strict";(self.webpackChunkrne_website=self.webpackChunkrne_website||[]).push([[14013,28530,63257],{8596:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>p,default:()=>s,frontMatter:()=>g,metadata:()=>y,toc:()=>m});var n=a(9668),r=a(21367),l=(a(96540),a(15680)),i=a(31268),o=["components"],g={},p=void 0,y={unversionedId:"main/usage/Header/Header",id:"version-4.0.0-beta.0/main/usage/Header/Header",title:"Header",description:"\x3c!-- To show the guide to configure Header Component to a project.",source:"@site/versioned_docs/version-4.0.0-beta.0/main/usage/Header/Header.md",sourceDirName:"main/usage/Header",slug:"/main/usage/Header/",permalink:"/docs/4.0.0-beta.0/main/usage/Header/",draft:!1,editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/versioned_docs/version-4.0.0-beta.0/main/usage/Header/Header.md",tags:[],version:"4.0.0-beta.0",frontMatter:{}},d={},m=[{value:"LinearGradient Usage",id:"lineargradient-usage",level:3}],u={toc:m},c="wrapper";function s(e){var t=e.components,a=(0,r.A)(e,o);return(0,l.yg)(c,(0,n.A)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Note:"),"\nMake sure that you have completed ",(0,l.yg)("a",{parentName:"p",href:"/docs/4.0.0-beta.0/#step-3-setup-react-native-safe-area-context"},"Step 3")," in the setup guide before using ",(0,l.yg)("inlineCode",{parentName:"p"},"Header"),"."),(0,l.yg)("p",null,"Headers are navigation components that display information and actions relating\nto the current screen."),(0,l.yg)(i.default,{mdxType:"Snack"}),(0,l.yg)("h3",{id:"lineargradient-usage"},"LinearGradient Usage"),(0,l.yg)("p",null,"Using LinearGradient in React Native Elements is supported through the\n",(0,l.yg)("a",{parentName:"p",href:"https://github.com/react-native-community/react-native-linear-gradient"},"react-native-linear-gradient"),"\npackage. If you're using expo or create-react-native-app then you can use\n",(0,l.yg)("inlineCode",{parentName:"p"},"linearGradientProps")," prop right out the box with no additional setup."),(0,l.yg)("p",null,"For react-native-cli users, make sure to follow the\n",(0,l.yg)("a",{parentName:"p",href:"https://github.com/react-native-community/react-native-linear-gradient#add-it-to-your-project"},"installation instructions"),"\nand use it like this:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-jsx"},"import { Header } from 'react-native-elements';\nimport LinearGradient from 'react-native-linear-gradient';\n\n...\n\n<Header\n  ViewComponent={LinearGradient} // Don't forget this!\n  linearGradientProps={{\n    colors: ['red', 'pink'],\n    start: { x: 0, y: 0.5 },\n    end: { x: 1, y: 0.5 },\n  }}\n/>\n")))}s.isMDXComponent=!0},15680:(e,t,a)=>{a.d(t,{xA:()=>y,yg:()=>c});var n=a(96540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var g=n.createContext({}),p=function(e){var t=n.useContext(g),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},y=function(e){var t=p(e.components);return n.createElement(g.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,g=e.parentName,y=o(e,["components","mdxType","originalType","parentName"]),d=p(a),u=r,c=d["".concat(g,".").concat(u)]||d[u]||m[u]||l;return a?n.createElement(c,i(i({ref:t},y),{},{components:a})):n.createElement(c,i({ref:t},y))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=u;var o={};for(var g in t)hasOwnProperty.call(t,g)&&(o[g]=t[g]);o.originalType=e,o[d]="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},31268:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>y,contentTitle:()=>g,default:()=>c,frontMatter:()=>o,metadata:()=>p,toc:()=>d});var n=a(9668),r=a(21367),l=(a(96540),a(15680)),i=["components"],o={},g=void 0,p={unversionedId:"main/usage/Header/snack/index",id:"version-4.0.0-beta.0/main/usage/Header/snack/index",title:"index",description:"",source:"@site/versioned_docs/version-4.0.0-beta.0/main/usage/Header/snack/index.md",sourceDirName:"main/usage/Header/snack",slug:"/main/usage/Header/snack/",permalink:"/docs/4.0.0-beta.0/main/usage/Header/snack/",draft:!1,editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/versioned_docs/version-4.0.0-beta.0/main/usage/Header/snack/index.md",tags:[],version:"4.0.0-beta.0",frontMatter:{}},y={},d=[],m={toc:d},u="wrapper";function c(e){var t=e.components,a=(0,r.A)(e,i);return(0,l.yg)(u,(0,n.A)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,l.yg)("div",{className:"snack-player","data-snack-name":"RNE Header","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%0A%20%20StyleSheet%2C%0A%20%20View%2C%0A%20%20Text%2C%0A%20%20Linking%2C%0A%20%20StyleProp%2C%0A%20%20TextStyle%2C%0A%20%20ViewStyle%2C%0A%7D%20from%20'react-native'%3B%0Aimport%20%7B%20Header%20as%20HeaderRNE%2C%20HeaderProps%2C%20Icon%20%7D%20from%20'react-native-elements'%3B%0Aimport%20%7B%20TouchableOpacity%20%7D%20from%20'react-native-gesture-handler'%3B%0Aimport%20%7B%20SafeAreaProvider%20%7D%20from%20'react-native-safe-area-context'%3B%0A%0Atype%20HeaderComponentProps%20%3D%20%7B%0A%20%20title%3A%20string%3B%0A%20%20view%3F%3A%20string%3B%0A%7D%3B%0A%0Atype%20ParamList%20%3D%20%7B%0A%20%20Detail%3A%20%7B%0A%20%20%20%20openDrawer%3A%20void%3B%0A%20%20%7D%3B%0A%7D%3B%0A%0Aconst%20Header%3A%20React.FunctionComponent%3CHeaderComponentProps%3E%20%3D%20(props)%20%3D%3E%20%7B%0A%0A%20%20const%20docsNavigate%20%3D%20()%20%3D%3E%20%7B%0A%20%20%20%20Linking.openURL(%60https%3A%2F%2Freactnativeelements.com%2Fdocs%2F%24%7Bprops.view%7D%60)%3B%0A%20%20%7D%3B%0A%0A%20%20const%20playgroundNavigate%20%3D%20()%20%3D%3E%20%7B%0A%20%20%20%20Linking.openURL(%60https%3A%2F%2Freact-native-elements.js.org%2F%23%2F%24%7Bprops.view%7D%60)%3B%0A%20%20%7D%3B%0A%0A%20%20return%20(%0A%20%20%20%20%3CSafeAreaProvider%3E%0A%20%20%20%20%20%20%3CHeaderRNE%0A%20%20%20%20%20%20%20%20leftComponent%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20icon%3A%20'menu'%2C%0A%20%20%20%20%20%20%20%20%20%20color%3A%20'%23fff'%2C%0A%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20rightComponent%3D%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.headerRight%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CTouchableOpacity%20onPress%3D%7BdocsNavigate%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CIcon%20name%3D%22description%22%20color%3D%22white%22%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%2FTouchableOpacity%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CTouchableOpacity%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20style%3D%7B%7B%20marginLeft%3A%2010%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20onPress%3D%7BplaygroundNavigate%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CIcon%20type%3D%22antdesign%22%20name%3D%22rocket1%22%20color%3D%22white%22%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%2FTouchableOpacity%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20centerComponent%3D%7B%7B%20text%3A%20'Header'%2C%20style%3A%20styles.heading%20%7D%7D%0A%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%3C%2FSafeAreaProvider%3E%0A%20%20)%3B%0A%7D%3B%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0A%20%20headerContainer%3A%20%7B%0A%20%20%20%20justifyContent%3A%20'center'%2C%0A%20%20%20%20alignItems%3A%20'center'%2C%0A%20%20%20%20backgroundColor%3A%20'%23397af8'%2C%0A%20%20%20%20marginBottom%3A%2020%2C%0A%20%20%20%20width%3A%20'100%25'%2C%0A%20%20%20%20paddingVertical%3A%2015%2C%0A%20%20%7D%2C%0A%20%20heading%3A%20%7B%0A%20%20%20%20color%3A%20'white'%2C%0A%20%20%20%20fontSize%3A%2022%2C%0A%20%20%20%20fontWeight%3A%20'bold'%2C%0A%20%20%7D%2C%0A%20%20headerRight%3A%20%7B%0A%20%20%20%20display%3A%20'flex'%2C%0A%20%20%20%20flexDirection%3A%20'row'%2C%0A%20%20%20%20marginTop%3A%205%2C%0A%20%20%7D%2C%0A%20%20subheaderText%3A%20%7B%0A%20%20%20%20color%3A%20'white'%2C%0A%20%20%20%20fontSize%3A%2016%2C%0A%20%20%20%20fontWeight%3A%20'bold'%2C%0A%20%20%7D%2C%0A%7D)%3B%0A%0Aexport%20default%20Header%3B","data-snack-dependencies":"@rneui/themed,@rneui/base","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}))}c.isMDXComponent=!0},72326:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>p,default:()=>s,frontMatter:()=>g,metadata:()=>y,toc:()=>m});var n=a(9668),r=a(21367),l=(a(96540),a(15680)),i=a(8596),o=["components"],g={id:"header",title:"Header",slug:"/header"},p=void 0,y={unversionedId:"main/header",id:"version-4.0.0-beta.0/main/header",title:"Header",description:"Headers are navigation components that display information and actions relating to the current screen.",source:"@site/versioned_docs/version-4.0.0-beta.0/main/Header.md",sourceDirName:"main",slug:"/header",permalink:"/docs/4.0.0-beta.0/header",draft:!1,editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/versioned_docs/version-4.0.0-beta.0/main/Header.md",tags:[],version:"4.0.0-beta.0",frontMatter:{id:"header",title:"Header",slug:"/header"},sidebar:"docs",previous:{title:"FAB",permalink:"/docs/4.0.0-beta.0/fab"},next:{title:"Icon",permalink:"/docs/4.0.0-beta.0/icon"}},d={},m=[{value:"Usage",id:"usage",level:2},{value:"Props",id:"props",level:2},{value:"Header",id:"header",level:3},{value:"Reference",id:"reference",level:2},{value:"Header",id:"header-1",level:3},{value:"ViewComponent",id:"viewcomponent",level:4},{value:"backgroundColor",id:"backgroundcolor",level:4},{value:"backgroundImage",id:"backgroundimage",level:4},{value:"backgroundImageStyle",id:"backgroundimagestyle",level:4},{value:"barStyle",id:"barstyle",level:4},{value:"centerComponent",id:"centercomponent",level:4},{value:"centerContainerStyle",id:"centercontainerstyle",level:4},{value:"children",id:"children",level:4},{value:"containerStyle",id:"containerstyle",level:4},{value:"elevated",id:"elevated",level:4},{value:"leftComponent",id:"leftcomponent",level:4},{value:"leftContainerStyle",id:"leftcontainerstyle",level:4},{value:"linearGradientProps",id:"lineargradientprops",level:4},{value:"placement",id:"placement",level:4},{value:"rightComponent",id:"rightcomponent",level:4},{value:"rightContainerStyle",id:"rightcontainerstyle",level:4},{value:"statusBarProps",id:"statusbarprops",level:4}],u={toc:m},c="wrapper";function s(e){var t=e.components,a=(0,r.A)(e,o);return(0,l.yg)(c,(0,n.A)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,l.yg)("p",null,"Headers are navigation components that display information and actions relating to the current screen."),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Note:")),(0,l.yg)("p",null,"Make sure that you have completed ",(0,l.yg)("a",{parentName:"p",href:"/docs/4.0.0-beta.0/#step-3-setup-react-native-safe-area-context"},"Step 3")," in the setup guide before using ",(0,l.yg)("inlineCode",{parentName:"p"},"Header"),"."),(0,l.yg)("h2",{id:"usage"},"Usage"),(0,l.yg)(i.default,{mdxType:"Usage"}),(0,l.yg)("hr",null),(0,l.yg)("h2",{id:"props"},"Props"),(0,l.yg)("h3",{id:"header"},"Header"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"#viewcomponent"},"ViewComponent")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"#backgroundcolor"},"backgroundColor")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"#backgroundimage"},"backgroundImage")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"#backgroundimagestyle"},"backgroundImageStyle")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"#barstyle"},"barStyle")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"#centercomponent"},"centerComponent")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"#centercontainerstyle"},"centerContainerStyle")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"#children"},"children")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"#containerstyle"},"containerStyle")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"#elevated"},"elevated")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"#leftcomponent"},"leftComponent")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"#leftcontainerstyle"},"leftContainerStyle")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"#lineargradientprops"},"linearGradientProps")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"#placement"},"placement")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"#rightcomponent"},"rightComponent")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"#rightcontainerstyle"},"rightContainerStyle")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"#statusbarprops"},"statusBarProps"))),(0,l.yg)("h2",{id:"reference"},"Reference"),(0,l.yg)("h3",{id:"header-1"},"Header"),(0,l.yg)("h4",{id:"viewcomponent"},"ViewComponent"),(0,l.yg)("p",null,"Component for container."),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Type"),(0,l.yg)("th",{parentName:"tr",align:null},"Default"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"React Component"),(0,l.yg)("td",{parentName:"tr",align:null},"ImageBackground or View Component")))),(0,l.yg)("hr",null),(0,l.yg)("h4",{id:"backgroundcolor"},"backgroundColor"),(0,l.yg)("p",null,"Sets backgroundColor of the parent component."),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Type"),(0,l.yg)("th",{parentName:"tr",align:null},"Default"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"None")))),(0,l.yg)("hr",null),(0,l.yg)("h4",{id:"backgroundimage"},"backgroundImage"),(0,l.yg)("p",null,"Sets backgroundImage for parent component."),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Type"),(0,l.yg)("th",{parentName:"tr",align:null},"Default"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"ImageSourcePropType"),(0,l.yg)("td",{parentName:"tr",align:null},"None")))),(0,l.yg)("hr",null),(0,l.yg)("h4",{id:"backgroundimagestyle"},"backgroundImageStyle"),(0,l.yg)("p",null,"Styling for backgroundImage in the main container."),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Type"),(0,l.yg)("th",{parentName:"tr",align:null},"Default"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"ImageStyle"),(0,l.yg)("td",{parentName:"tr",align:null},"None")))),(0,l.yg)("hr",null),(0,l.yg)("h4",{id:"barstyle"},"barStyle"),(0,l.yg)("p",null,"Sets the color of the status bar text."),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Type"),(0,l.yg)("th",{parentName:"tr",align:null},"Default"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"StatusBarStyle"),(0,l.yg)("td",{parentName:"tr",align:null},"None")))),(0,l.yg)("hr",null),(0,l.yg)("h4",{id:"centercomponent"},"centerComponent"),(0,l.yg)("p",null,"Define your center component here."),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Type"),(0,l.yg)("th",{parentName:"tr",align:null},"Default"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"any"),(0,l.yg)("td",{parentName:"tr",align:null},"None")))),(0,l.yg)("hr",null),(0,l.yg)("h4",{id:"centercontainerstyle"},"centerContainerStyle"),(0,l.yg)("p",null,"Styling for container around the centerComponent."),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Type"),(0,l.yg)("th",{parentName:"tr",align:null},"Default"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"View style(Object)"),(0,l.yg)("td",{parentName:"tr",align:null},"None")))),(0,l.yg)("hr",null),(0,l.yg)("h4",{id:"children"},"children"),(0,l.yg)("p",null,"Add children component to the header."),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Type"),(0,l.yg)("th",{parentName:"tr",align:null},"Default"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"(Element or Element[]) and ReactNode"),(0,l.yg)("td",{parentName:"tr",align:null},"[]")))),(0,l.yg)("hr",null),(0,l.yg)("h4",{id:"containerstyle"},"containerStyle"),(0,l.yg)("p",null,"Styling around the main container."),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Type"),(0,l.yg)("th",{parentName:"tr",align:null},"Default"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"View style(Object)"),(0,l.yg)("td",{parentName:"tr",align:null},"None")))),(0,l.yg)("hr",null),(0,l.yg)("h4",{id:"elevated"},"elevated"),(0,l.yg)("p",null,"Elevation for header"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Type"),(0,l.yg)("th",{parentName:"tr",align:null},"Default"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"boolean"),(0,l.yg)("td",{parentName:"tr",align:null},"None")))),(0,l.yg)("hr",null),(0,l.yg)("h4",{id:"leftcomponent"},"leftComponent"),(0,l.yg)("p",null,"Define your left component here."),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Type"),(0,l.yg)("th",{parentName:"tr",align:null},"Default"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"any"),(0,l.yg)("td",{parentName:"tr",align:null},"None")))),(0,l.yg)("hr",null),(0,l.yg)("h4",{id:"leftcontainerstyle"},"leftContainerStyle"),(0,l.yg)("p",null,"Styling for container around the leftComponent."),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Type"),(0,l.yg)("th",{parentName:"tr",align:null},"Default"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"View style(Object)"),(0,l.yg)("td",{parentName:"tr",align:null},"None")))),(0,l.yg)("hr",null),(0,l.yg)("h4",{id:"lineargradientprops"},"linearGradientProps"),(0,l.yg)("p",null,"Displays a linear gradient. See ",(0,l.yg)("a",{parentName:"p",href:"#lineargradient-usage"},"usage"),"."),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Type"),(0,l.yg)("th",{parentName:"tr",align:null},"Default"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"Object"),(0,l.yg)("td",{parentName:"tr",align:null},"None")))),(0,l.yg)("hr",null),(0,l.yg)("h4",{id:"placement"},"placement"),(0,l.yg)("p",null,"Alignment for title."),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Type"),(0,l.yg)("th",{parentName:"tr",align:null},"Default"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},'"center" or "left" or "right"'),(0,l.yg)("td",{parentName:"tr",align:null},"center")))),(0,l.yg)("hr",null),(0,l.yg)("h4",{id:"rightcomponent"},"rightComponent"),(0,l.yg)("p",null,"Define your right component here."),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Type"),(0,l.yg)("th",{parentName:"tr",align:null},"Default"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"any"),(0,l.yg)("td",{parentName:"tr",align:null},"None")))),(0,l.yg)("hr",null),(0,l.yg)("h4",{id:"rightcontainerstyle"},"rightContainerStyle"),(0,l.yg)("p",null,"Styling for container around the rightComponent."),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Type"),(0,l.yg)("th",{parentName:"tr",align:null},"Default"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"View style(Object)"),(0,l.yg)("td",{parentName:"tr",align:null},"None")))),(0,l.yg)("hr",null),(0,l.yg)("h4",{id:"statusbarprops"},"statusBarProps"),(0,l.yg)("p",null,"Accepts all props for StatusBar."),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Type"),(0,l.yg)("th",{parentName:"tr",align:null},"Default"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"StatusBarProps"),(0,l.yg)("td",{parentName:"tr",align:null},"None")))),(0,l.yg)("hr",null))}s.isMDXComponent=!0}}]);