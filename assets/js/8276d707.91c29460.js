(self.webpackChunkrne_website=self.webpackChunkrne_website||[]).push([[72882],{18411:()=>{},26795:(e,t,n)=>{"use strict";n.d(t,{A:()=>y});var r=n(9668),i=n(96540),a=n(91010),l=n(32594),o=n(20018),d=n(96109),s=n(11245),p=n(34397),c=n(50546),m=n(25407);const y=function(e){var t=e.params,n=e.containerStyle,y=void 0===n?{}:n;return i.createElement(a.A,{fallback:i.createElement(i.Fragment,null,"Loading...")},(function(){return i.createElement(c.q9.Provider,null,i.createElement(c.Oy,{initialMetrics:m.Y},i.createElement("div",{style:Object.assign({border:"1px solid var(--ifm-color-emphasis-200)",borderRadius:"var(--ifm-global-radius)",position:"relative"},y)},i.createElement(l.A,(0,r.A)({},t.compilerProps,{minHeight:62,placeholder:o.A}))),i.createElement(d.A,{msg:t.errorProps.msg,isPopup:!0}),i.createElement(s.A,t.knobProps),i.createElement(d.A,t.errorProps),i.createElement(p.w,t.actions)))}))}},33384:(e,t,n)=>{"use strict";n.d(t,{A:()=>d});var r=n(96540),i=n(64270),a=n(26795),l=n(10171),o=n(11451);const d=function(){var e=(0,l.A)({componentName:"Divider",props:{style:{type:o.B.Object,value:'{width:"80%",margin:20}',description:"Apply style to the divider."},color:{type:o.B.String,value:i.defaultTheme.colors.primary,description:"Apply color to the divider."},inset:{type:o.B.Boolean,value:!1,description:"Applies inset to the divider if true. Default is left."},insetType:{type:o.B.String,value:"left",description:"Add inset to the divider in left, right, or in both direction. Choose among left, right, or middle."},subHeader:{type:o.B.String,value:"React native elements",description:"Adds a sub-header next to divider."},subHeaderStyle:{type:o.B.Object,value:"{}",description:"Adds styles to the sub header of divider."},width:{type:o.B.Number,value:1,description:"Add width to the divider."},orientation:{type:o.B.String,value:"horizontal",description:"Adds orientation to the divider."}},scope:{Divider:i.Divider},imports:{"@rneui/base":{named:["Divider"]}}});return r.createElement(r.Fragment,null,r.createElement(a.A,{params:e}))}},33557:(e,t,n)=>{"use strict";n.d(t,{A:()=>d});var r=n(96540),i=n(8755),a=n(64270),l=n(45550),o=n(91147);const d=Object.assign({React:r,LinearGradient:o.A},i,a,l,r)},43206:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>C,contentTitle:()=>A,default:()=>f,frontMatter:()=>u,metadata:()=>v,toc:()=>D});var r=n(9668),i=n(21367),a=(n(96540),n(15680)),l=n(70926),o=(n(21518),n(46061),n(72787)),d=n(35504),s=["components"],p={toc:[]},c="wrapper";function m(e){var t=e.components,n=(0,i.A)(e,s);return(0,a.yg)(c,(0,r.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("div",{className:"snack-player","data-snack-name":"RNE Divider","data-snack-description":"Example usage","data-snack-code":"import%20React%2C%20%7B%20useContext%20%7D%20from%20'react'%3B%0Aimport%20%7B%20Text%2C%20Divider%2C%20useTheme%20%7D%20from%20'%40rneui%2Fthemed'%3B%0Aimport%20%7B%20ScrollView%2C%20StyleSheet%2C%20View%20%7D%20from%20'react-native'%3B%0A%0Atype%20DividerViewTypes%20%3D%20%7B%7D%3B%0A%0Aconst%20DividerView%3A%20React.FunctionComponent%3CDividerViewTypes%3E%20%3D%20(props)%20%3D%3E%20%7B%0Aconst%20%7B%20theme%20%7D%20%3D%20useTheme()%3B%0Areturn%20(%0A%20%20%3C%3E%0A%20%20%20%20%3CScrollView%3E%0A%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.subHeader%7D%3EHorizontal%20Dividers%3C%2FText%3E%0A%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.horizontal%7D%3E%0A%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.horizontalText%7D%3EHorizontal%20Divider%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%3CDivider%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.horizontalText%7D%3E%0A%20%20%20%20%20%20%20%20%20%20Horizontal%20Divider%20with%20width%20and%20color%0A%20%20%20%20%20%20%20%20%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%3CDivider%20width%3D%7B5%7D%20color%3D%7Btheme%3F.colors%3F.primary%7D%20%2F%3E%0A%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.subHeader%7D%3EHorizontal%20Divider%20with%20Inset%3C%2FText%3E%0A%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.horizontal%7D%3E%0A%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.horizontalText%7D%3E%0A%20%20%20%20%20%20%20%20%20%20Horizontal%20Divider%20with%20left%20inset%0A%20%20%20%20%20%20%20%20%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%3CDivider%20inset%3D%7Btrue%7D%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.horizontalText%7D%3E%0A%20%20%20%20%20%20%20%20%20%20Horizontal%20Divider%20with%20right%20inset%0A%20%20%20%20%20%20%20%20%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%3CDivider%20inset%3D%7Btrue%7D%20insetType%3D%22right%22%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.horizontalText%7D%3E%0A%20%20%20%20%20%20%20%20%20%20Horizontal%20Divider%20with%20middle%20inset%0A%20%20%20%20%20%20%20%20%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%3CDivider%20inset%3D%7Btrue%7D%20insetType%3D%22middle%22%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.horizontalText%7D%3EWelcome%20to%20RNE%20App%3C%2FText%3E%0A%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.subHeader%7D%3EVertical%20Dividers%3C%2FText%3E%0A%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.vertical%7D%3E%0A%20%20%20%20%20%20%20%20%3CText%3ELeft%20text%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%3CDivider%20orientation%3D%22vertical%22%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CText%3ERight%20text%3C%2FText%3E%0A%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.vertical%7D%3E%0A%20%20%20%20%20%20%20%20%3CText%3ELeft%20text%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%3CDivider%20orientation%3D%22vertical%22%20width%3D%7B5%7D%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CText%3ERight%20text%3C%2FText%3E%0A%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.subHeader%7D%3EDividers%20with%20SubHeader%3C%2FText%3E%0A%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.horizontal%7D%3E%0A%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.horizontalText%7D%3ELeft%20text%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%3CDivider%0A%20%20%20%20%20%20%20%20%20%20subHeader%3D%22Divider%22%0A%20%20%20%20%20%20%20%20%20%20inset%3D%7Btrue%7D%0A%20%20%20%20%20%20%20%20%20%20subHeaderStyle%3D%7B%7B%20color%3A%20theme%3F.colors%3F.primary%20%7D%7D%0A%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.horizontalText%7D%3ERight%20text%3C%2FText%3E%0A%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%3C%2FScrollView%3E%0A%20%20%3C%2F%3E%0A)%3B%0A%7D%3B%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0AsubHeader%3A%20%7B%0A%20%20backgroundColor%20%3A%20%22%232089dc%22%2C%0A%20%20color%20%3A%20%22white%22%2C%0A%20%20textAlign%20%3A%20%22center%22%2C%0A%20%20paddingVertical%20%3A%205%2C%0A%20%20marginBottom%20%3A%2010%0A%7D%2C%0Ahorizontal%3A%20%7B%0A%20%20marginBottom%3A%2010%2C%0A%7D%2C%0AhorizontalText%3A%20%7B%0A%20%20textAlign%3A%20'center'%2C%0A%20%20fontSize%3A%2016%2C%0A%20%20marginVertical%3A%2010%2C%0A%7D%2C%0Avertical%3A%20%7B%0A%20%20marginBottom%3A%2010%2C%0A%20%20display%3A%20'flex'%2C%0A%20%20flexDirection%3A%20'row'%2C%0A%20%20justifyContent%3A%20'space-evenly'%2C%0A%7D%2C%0A%7D)%3B%0A%0Aexport%20default%20DividerView%3B","data-snack-dependencies":"@rneui/themed,@rneui/base","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}))}m.isMDXComponent=!0;var y=n(33384),g=["components"],u={id:"divider",title:"Divider"},A=void 0,v={unversionedId:"components/divider",id:"components/divider",title:"Divider",description:"Dividers are visual separators of content.",source:"@site/docs/components/Divider.mdx",sourceDirName:"components",slug:"/components/divider",permalink:"/docs/next/components/divider",draft:!1,editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/docs/components/Divider.mdx",tags:[],version:"current",frontMatter:{id:"divider",title:"Divider"},sidebar:"docs",previous:{title:"Dialog.Title",permalink:"/docs/next/components/dialog_title"},next:{title:"FAB",permalink:"/docs/next/components/fab"}},C={},D=[{value:"Usage",id:"usage",level:2},{value:"Props",id:"props",level:2},{value:"Playground",id:"playground",level:2}],h={toc:D},E="wrapper";function f(e){var t=e.components,n=(0,i.A)(e,g);return(0,a.yg)(E,(0,r.A)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)(l.y,{mdxType:"IconsStyle"}),(0,a.yg)("p",null,"Dividers are visual separators of content.\nUse Divider when you want to make a distinction between sections of content.\nOur divider offers adding inset, color, orientation and subHeader to the component using props.\nAlso receives all ",(0,a.yg)("a",{parentName:"p",href:"https://reactnative.dev/docs/view#props"},"View")," props."),(0,a.yg)("h2",{id:"usage"},"Usage"),(0,a.yg)("div",{class:"row inline-flex-center"},(0,a.yg)("div",{class:"col col--3"},(0,a.yg)("h4",null,"Import")),(0,a.yg)("div",{class:"col col--9"},(0,a.yg)(o.A,{mdxType:"CodeBlock"},"import { Divider } from '@rneui/themed';")),(0,a.yg)("div",{class:"col col--3"},(0,a.yg)("h4",null,"Theme Key"," ",(0,a.yg)("a",{href:"../customizing#using-themeprovider"},(0,a.yg)(d.wfp,{mdxType:"BiInfoCircle"})))),(0,a.yg)("div",{class:"col col--9"},(0,a.yg)(o.A,{mdxType:"CodeBlock"},"Divider"))),(0,a.yg)(m,{mdxType:"Usage"}),(0,a.yg)("h2",{id:"props"},"Props"),(0,a.yg)("admonition",{type:"note"},(0,a.yg)("p",{parentName:"admonition"},"Includes all ",(0,a.yg)("a",{parentName:"p",href:"https://reactnative.dev/docs/view#props"},"View")," props.")),(0,a.yg)("div",{class:"table-responsive"},(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"Name"),(0,a.yg)("th",{parentName:"tr",align:null},"Type"),(0,a.yg)("th",{parentName:"tr",align:null},"Default"),(0,a.yg)("th",{parentName:"tr",align:null},"Description"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("inlineCode",{parentName:"td"},"color")),(0,a.yg)("td",{parentName:"tr",align:null},"string"),(0,a.yg)("td",{parentName:"tr",align:null}),(0,a.yg)("td",{parentName:"tr",align:null},"The color of the component.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("inlineCode",{parentName:"td"},"inset")),(0,a.yg)("td",{parentName:"tr",align:null},"boolean"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("inlineCode",{parentName:"td"},"false")),(0,a.yg)("td",{parentName:"tr",align:null},"Applies inset to the divider.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("inlineCode",{parentName:"td"},"insetType")),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("inlineCode",{parentName:"td"},"middle")," ","|"," ",(0,a.yg)("inlineCode",{parentName:"td"},"left")," ","|"," ",(0,a.yg)("inlineCode",{parentName:"td"},"right")),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("inlineCode",{parentName:"td"},"left")),(0,a.yg)("td",{parentName:"tr",align:null},"Applies inset to a specific direction to the divider.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("inlineCode",{parentName:"td"},"orientation")),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("inlineCode",{parentName:"td"},"vertical")," ","|"," ",(0,a.yg)("inlineCode",{parentName:"td"},"horizontal")),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("inlineCode",{parentName:"td"},"horizontal")),(0,a.yg)("td",{parentName:"tr",align:null},"Apply orientation to the divider.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("inlineCode",{parentName:"td"},"style")),(0,a.yg)("td",{parentName:"tr",align:null},"View Style"),(0,a.yg)("td",{parentName:"tr",align:null}),(0,a.yg)("td",{parentName:"tr",align:null},"Applies style to the divider.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("inlineCode",{parentName:"td"},"subHeader")),(0,a.yg)("td",{parentName:"tr",align:null},"string"),(0,a.yg)("td",{parentName:"tr",align:null}),(0,a.yg)("td",{parentName:"tr",align:null},"Adds subHeader text to the divider.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("inlineCode",{parentName:"td"},"subHeaderStyle")),(0,a.yg)("td",{parentName:"tr",align:null},"Text Style"),(0,a.yg)("td",{parentName:"tr",align:null}),(0,a.yg)("td",{parentName:"tr",align:null},"Adds style to the subHeader text of the divider")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("inlineCode",{parentName:"td"},"width")),(0,a.yg)("td",{parentName:"tr",align:null},"number"),(0,a.yg)("td",{parentName:"tr",align:null}),(0,a.yg)("td",{parentName:"tr",align:null},"Apply width to the divider."))))),(0,a.yg)("h2",{id:"playground"},"Playground"),(0,a.yg)(y.A,{mdxType:"Play"}))}f.isMDXComponent=!0},68260:()=>{},70926:(e,t,n)=>{"use strict";n.d(t,{y:()=>d});var r=n(96540),i=n(3352),a=n(14628),l=n(1547),o=n(83564),d=function(){return r.createElement(i.A,null,r.createElement("style",{type:"text/css"},"\n          @font-face {\n            font-family: 'MaterialIcons';\n            src: url("+l.A+") format('truetype');\n          }\n          @font-face {\n            font-family: 'FontAwesome';\n            src: url("+o.A+") format('truetype');\n          }\n          @font-face {\n            font-family: 'MaterialCommunityIcons';\n            src: url("+a.A+") format('truetype');\n          }\n        "))}},78360:(e,t,n)=>{"use strict";n.d(t,{A:()=>C});var r=n(21367),i=n(9668),a=n(96540),l=n(53686),o=n(20053),d=(n(26297),n(5222)),s=n(91010),p=n(41262);const c={playgroundContainer:"playgroundContainer_TGbA",playgroundHeader:"playgroundHeader_qwyd",playgroundEditor:"playgroundEditor_PvJ1",playgroundPreview:"playgroundPreview_bb8I",toggleContainer:"toggleContainer_ZZiH",toggleIcon:"toggleIcon_OnrQ",showCode:"showCode_O0Od"};var m=n(195),y=n(59644),g=["children","transformCode"];function u(){return a.createElement("div",null,"Loading...")}function A(e){var t=(0,m.A)(),n=(0,a.useContext)(l.MY),r=n.code,o=n.language,d=n.theme,s=n.disabled,p=n.onChange;return a.createElement(l.w,(0,i.A)({key:String(t),code:r,language:o,theme:d,disabled:s,onChange:p},e,{className:c.playgroundEditor}))}function v(e){var t=e.showCode,n=e.preImports,r=void 0===n?"":n,i=(e.wrapper,a.useState(t)),d=i[0],p=i[1],m=function(){p((function(e){return!e}))};return a.createElement(a.Fragment,null,a.createElement("div",{className:c.playgroundPreview},a.createElement(s.A,{fallback:a.createElement(u,null)},(function(){return a.createElement(a.Fragment,null,a.createElement(l.pA,null),a.createElement(l.p1,null),a.createElement("div",{className:c.toggleContainer},a.createElement("div",{className:(0,o.A)(c.toggleIcon),onClick:m},a.createElement(y.luQ,null),a.createElement("span",{className:c.showCode},d?"Hide":"Show"," Code"))))}))),d&&a.createElement(A,{preImports:r,showCode:d}))}function C(e){var t=e.children,n=(e.transformCode,(0,r.A)(e,g)),o=((0,d.A)().siteConfig.themeConfig.liveCodeBlock.playgroundPosition,(0,p.A)());return a.createElement("div",{className:c.playgroundContainer},a.createElement(l.Q,(0,i.A)({code:t.replace(/\n$/,""),theme:o},n),a.createElement(v,{showCode:n.showCode})))}}}]);