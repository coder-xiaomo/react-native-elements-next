(self.webpackChunkrne_website=self.webpackChunkrne_website||[]).push([[4453],{1547:(e,t,a)=>{"use strict";a.d(t,{A:()=>n});const n=a.p+"assets/fonts/MaterialIcons-120b4c7bbd155bd0a04dc37d334baced.ttf"},6699:(e,t,a)=>{"use strict";a.r(t),a.d(t,{assets:()=>A,contentTitle:()=>u,default:()=>D,frontMatter:()=>c,metadata:()=>y,toc:()=>C});var n=a(9668),r=a(21367),l=(a(96540),a(15680)),o=a(70926),i=(a(21518),a(46061),["components"]),s={toc:[{value:"withBadge Higher-Order Component",id:"withbadge-higher-order-component",level:3}]},d="wrapper";function g(e){var t=e.components,a=(0,r.A)(e,i);return(0,l.yg)(d,(0,n.A)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,l.yg)("h3",{id:"withbadge-higher-order-component"},"withBadge Higher-Order Component"),(0,l.yg)("p",null,"The withBadge HOC allows you to easily add badges to icons and other components."),(0,l.yg)("div",{className:"snack-player","data-snack-name":"RNE Badge","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20Text%2C%20View%2C%20ScrollView%2C%20StyleSheet%20%7D%20from%20'react-native'%3B%0Aimport%20%7B%20Avatar%2C%20Badge%2C%20Icon%2C%20withBadge%20%7D%20from%20'%40rneui%2Fthemed'%3B%0A%0Aconst%20BadgedIcon%20%3D%20withBadge(15)(Icon)%3B%0A%0Aconst%20BadgeComponent%20%3D%20()%20%3D%3E%20%7B%0Areturn%20(%0A%20%20%3C%3E%0A%20%20%20%20%3CScrollView%3E%0A%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.subHeader%7D%3EStandard%20Badge%3C%2FText%3E%0A%20%20%20%20%20%20%3CView%0A%20%20%20%20%20%20%20%20style%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20flexDirection%3A%20'row'%2C%0A%20%20%20%20%20%20%20%20%20%20justifyContent%3A%20'space-around'%2C%0A%20%20%20%20%20%20%20%20%20%20marginTop%3A%2020%2C%0A%20%20%20%20%20%20%20%20%20%20marginBottom%3A%2040%2C%0A%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%3CBadge%20value%3D%223%22%20status%3D%22success%22%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CBadge%20value%3D%2299%2B%22%20status%3D%22error%22%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CBadge%20value%3D%22500%22%20status%3D%22primary%22%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CBadge%20value%3D%2210%22%20status%3D%22warning%22%20%2F%3E%0A%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.subHeader%7D%3EMini%20Badge%3C%2FText%3E%0A%20%20%20%20%20%20%3CText%20style%3D%7B%7BtextAlign%3A%20%22center%22%7D%7D%3EThis%20type%20of%20badge%20shows%20when%20no%20value%20prop%20is%20provided.%20This%20form%20is%20effective%20for%20showing%20statuses.%3C%2FText%3E%0A%20%20%20%20%20%20%3CView%0A%20%20%20%20%20%20%20%20style%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20flexDirection%3A%20'row'%2C%0A%20%20%20%20%20%20%20%20%20%20justifyContent%3A%20'space-around'%2C%0A%20%20%20%20%20%20%20%20%20%20marginTop%3A%2020%2C%0A%20%20%20%20%20%20%20%20%20%20marginBottom%3A%2020%2C%0A%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%3CBadge%20status%3D%22success%22%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CBadge%20status%3D%22error%22%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CBadge%20status%3D%22primary%22%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CBadge%20status%3D%22warning%22%20%2F%3E%0A%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%20%20%3CView%0A%20%20%20%20%20%20%20%20style%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20flexDirection%3A%20'row'%2C%0A%20%20%20%20%20%20%20%20%20%20justifyContent%3A%20'space-around'%2C%0A%20%20%20%20%20%20%20%20%20%20marginBottom%3A%2020%2C%0A%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%3CText%20style%3D%7B%7B%20color%3A%20'%23397af8'%2C%20paddingVertical%3A%2010%20%7D%7D%3ESuccess%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%3CText%20style%3D%7B%7B%20color%3A%20'%23397af8'%2C%20paddingVertical%3A%2010%20%7D%7D%3EError%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%3CText%20style%3D%7B%7B%20color%3A%20'%23397af8'%2C%20paddingVertical%3A%2010%20%7D%7D%3EPrimary%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%3CText%20style%3D%7B%7B%20color%3A%20'%23397af8'%2C%20paddingVertical%3A%2010%20%7D%7D%3EWarning%3C%2FText%3E%0A%20%20%20%20%20%20%3C%2FView%3E%0A%0A%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.subHeader%7D%3EBadge%20as%20Indicator%3C%2FText%3E%0A%20%20%20%20%20%20%3CView%0A%20%20%20%20%20%20%20%20style%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20flexDirection%3A%20'row'%2C%0A%20%20%20%20%20%20%20%20%20%20justifyContent%3A%20'space-around'%2C%0A%20%20%20%20%20%20%20%20%20%20marginTop%3A%2020%2C%0A%20%20%20%20%20%20%20%20%20%20marginBottom%3A%2040%2C%0A%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%3CView%3E%0A%20%20%20%20%20%20%20%20%20%20%3CAvatar%0A%20%20%20%20%20%20%20%20%20%20%20%20rounded%0A%20%20%20%20%20%20%20%20%20%20%20%20source%3D%7B%7B%20uri%3A%20'https%3A%2F%2Frandomuser.me%2Fapi%2Fportraits%2Fmen%2F41.jpg'%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20size%3D%22medium%22%0A%20%20%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%3CBadge%0A%20%20%20%20%20%20%20%20%20%20%20%20status%3D%22success%22%0A%20%20%20%20%20%20%20%20%20%20%20%20containerStyle%3D%7B%7B%20position%3A%20'absolute'%2C%20top%3A%205%2C%20left%3A%2040%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%20%20%20%20%3CBadgedIcon%20type%3D%22ionicon%22%20name%3D%22ios-chatbubbles%22%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CView%3E%0A%20%20%20%20%20%20%20%20%20%20%3CAvatar%0A%20%20%20%20%20%20%20%20%20%20%20%20rounded%0A%20%20%20%20%20%20%20%20%20%20%20%20source%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20uri%3A%20'https%3A%2F%2Frandomuser.me%2Fapi%2Fportraits%2Fwomen%2F40.jpg'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20size%3D%22large%22%0A%20%20%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%3CBadge%0A%20%20%20%20%20%20%20%20%20%20%20%20status%3D%22primary%22%0A%20%20%20%20%20%20%20%20%20%20%20%20value%3D%7B10%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20containerStyle%3D%7B%7B%20position%3A%20'absolute'%2C%20top%3A%205%2C%20left%3A%2060%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%3C%2FScrollView%3E%0A%20%20%3C%2F%3E%0A)%3B%0A%7D%3B%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0AsubHeader%3A%20%7B%0A%20%20backgroundColor%20%3A%20%22%232089dc%22%2C%0A%20%20color%20%3A%20%22white%22%2C%0A%20%20textAlign%20%3A%20%22center%22%2C%0A%20%20paddingVertical%20%3A%205%2C%0A%20%20marginBottom%20%3A%2010%0A%7D%0A%7D)%0A%0Aexport%20default%20BadgeComponent%3B","data-snack-dependencies":"@rneui/themed,@rneui/base","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}))}g.isMDXComponent=!0;var p=a(17384),m=["components"],c={id:"badge",title:"Badge"},u=void 0,y={unversionedId:"components/badge",id:"version-4.0.0-rc.4/components/badge",title:"Badge",description:"Badges are small components typically used to communicate a numerical value or indicate the status of an item to the user.",source:"@site/versioned_docs/version-4.0.0-rc.4/components/Badge.mdx",sourceDirName:"components",slug:"/components/badge",permalink:"/react-native-elements-next/docs/4.0.0-rc.4/components/badge",draft:!1,editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/versioned_docs/version-4.0.0-rc.4/components/Badge.mdx",tags:[],version:"4.0.0-rc.4",frontMatter:{id:"badge",title:"Badge"},sidebar:"docs",previous:{title:"Avatar.Accessory",permalink:"/react-native-elements-next/docs/4.0.0-rc.4/components/avatar_accessory"},next:{title:"BottomSheet",permalink:"/react-native-elements-next/docs/4.0.0-rc.4/components/bottomsheet"}},A={},C=[{value:"Import",id:"import",level:2},{value:"Usage",id:"usage",level:2},{value:"Props",id:"props",level:2},{value:"Playground",id:"playground",level:2}],N={toc:C},B="wrapper";function D(e){var t=e.components,a=(0,r.A)(e,m);return(0,l.yg)(B,(0,n.A)({},N,a,{components:t,mdxType:"MDXLayout"}),(0,l.yg)(o.y,{mdxType:"IconsStyle"}),(0,l.yg)("p",null,"Badges are small components typically used to communicate a numerical value or indicate the status of an item to the user."),(0,l.yg)("h2",{id:"import"},"Import"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-tsx"},'import { Badge } from "@rneui/themed";\n')),(0,l.yg)("h2",{id:"usage"},"Usage"),(0,l.yg)(g,{mdxType:"Usage"}),(0,l.yg)("h2",{id:"props"},"Props"),(0,l.yg)("div",{class:"table-responsive"},(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Name"),(0,l.yg)("th",{parentName:"tr",align:null},"Type"),(0,l.yg)("th",{parentName:"tr",align:null},"Default"),(0,l.yg)("th",{parentName:"tr",align:null},"Description"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"Component")),(0,l.yg)("td",{parentName:"tr",align:null},"React Component"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"Press handlers present then Pressable else View")),(0,l.yg)("td",{parentName:"tr",align:null},"Custom component to replace the badge outer component.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"badgeStyle")),(0,l.yg)("td",{parentName:"tr",align:null},"View Style"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"Additional styling for badge (background) view component.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"containerStyle")),(0,l.yg)("td",{parentName:"tr",align:null},"View Style"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"Style for the container.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"onLongPress")),(0,l.yg)("td",{parentName:"tr",align:null},"GestureResponderEventHandler"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"Called when a long-tap gesture is detected.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"onPress")),(0,l.yg)("td",{parentName:"tr",align:null},"Function"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"Called when a single tap gesture is detected.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"onPressIn")),(0,l.yg)("td",{parentName:"tr",align:null},"GestureResponderEventHandler"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"Called when a touch is engaged before ",(0,l.yg)("inlineCode",{parentName:"td"},"onPress"),".")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"onPressOut")),(0,l.yg)("td",{parentName:"tr",align:null},"GestureResponderEventHandler"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"Called when a touch is released before ",(0,l.yg)("inlineCode",{parentName:"td"},"onPress"),".")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"pressableProps")),(0,l.yg)("td",{parentName:"tr",align:null},"PressableProps except click handlers"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"None")),(0,l.yg)("td",{parentName:"tr",align:null})),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"status")),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"primary")," ","|"," ",(0,l.yg)("inlineCode",{parentName:"td"},"success")," ","|"," ",(0,l.yg)("inlineCode",{parentName:"td"},"warning")," ","|"," ",(0,l.yg)("inlineCode",{parentName:"td"},"error")),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"primary")),(0,l.yg)("td",{parentName:"tr",align:null},"Determines color of the indicator.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"textProps")),(0,l.yg)("td",{parentName:"tr",align:null},"TextProps"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"Extra props for text component.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"textStyle")),(0,l.yg)("td",{parentName:"tr",align:null},"Text Style"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"Extra styling for icon component.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"value")),(0,l.yg)("td",{parentName:"tr",align:null},"ReactNode"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"Text value to be displayed by badge, defaults to empty."))))),(0,l.yg)("h2",{id:"playground"},"Playground"),(0,l.yg)(p.A,{mdxType:"Play"}))}D.isMDXComponent=!0},14628:(e,t,a)=>{"use strict";a.d(t,{A:()=>n});const n=a.p+"assets/fonts/MaterialCommunityIcons-5d42b4e60858731e7b6504400f7e3d8e.ttf"},17384:(e,t,a)=>{"use strict";a.d(t,{A:()=>s});var n=a(96540),r=a(64270),l=a(26795),o=a(10171),i=a(11451);const s=function(){var e=(0,o.A)({componentName:"Badge",props:{badgeStyle:{value:"{}",type:i.B.Object},containerStyle:{value:"{}",defaultValue:{},type:i.B.Object},onPress:{value:'() => {alert("onPress");}',type:i.B.Function},status:{value:"primary",options:{primary:"primary",success:"success",warning:"warning",error:"error"},type:i.B.Enum,description:"Defines the type of the button."},textProps:{value:"{}",type:i.B.Object},textStyle:{value:'{color:"#EFE"}',type:i.B.Object},value:{type:i.B.String,value:"Hello \ud83d\udc4b"},Component:{defaultValue:null,type:i.B.Object},options:{value:"{}",type:i.B.Object}},scope:{Badge:r.Badge},imports:{"@rneui/base":{named:["Badge"]}}});return n.createElement(n.Fragment,null,n.createElement(l.A,{params:e}))}},18411:()=>{},26795:(e,t,a)=>{"use strict";a.d(t,{A:()=>c});var n=a(9668),r=a(96540),l=a(91010),o=a(32594),i=a(20018),s=a(96109),d=a(11245),g=a(34397),p=a(50546),m=a(25407);const c=function(e){var t=e.params,a=e.containerStyle,c=void 0===a?{}:a;return r.createElement(l.A,{fallback:r.createElement(r.Fragment,null,"Loading...")},(function(){return r.createElement(p.q9.Provider,null,r.createElement(p.Oy,{initialMetrics:m.Y},r.createElement("div",{style:Object.assign({border:"1px solid var(--ifm-color-emphasis-200)",borderRadius:"var(--ifm-global-radius)",position:"relative"},c)},r.createElement(o.A,(0,n.A)({},t.compilerProps,{minHeight:62,placeholder:i.A}))),r.createElement(s.A,{msg:t.errorProps.msg,isPopup:!0}),r.createElement(d.A,t.knobProps),r.createElement(s.A,t.errorProps),r.createElement(g.w,t.actions)))}))}},68260:()=>{},70926:(e,t,a)=>{"use strict";a.d(t,{y:()=>s});var n=a(96540),r=a(3352),l=a(14628),o=a(1547),i=a(83564),s=function(){return n.createElement(r.A,null,n.createElement("style",{type:"text/css"},"\n          @font-face {\n            font-family: 'MaterialIcons';\n            src: url("+o.A+") format('truetype');\n          }\n          @font-face {\n            font-family: 'FontAwesome';\n            src: url("+i.A+") format('truetype');\n          }\n          @font-face {\n            font-family: 'MaterialCommunityIcons';\n            src: url("+l.A+") format('truetype');\n          }\n        "))}},83564:(e,t,a)=>{"use strict";a.d(t,{A:()=>n});const n=a.p+"assets/fonts/FontAwesome-1e59d2330b4c6deb84b340635ed36249.ttf"}}]);