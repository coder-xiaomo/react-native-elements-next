(self.webpackChunkrne_website=self.webpackChunkrne_website||[]).push([[38993],{1547:(e,t,n)=>{"use strict";n.d(t,{A:()=>a});const a=n.p+"assets/fonts/MaterialIcons-120b4c7bbd155bd0a04dc37d334baced.ttf"},5570:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>A,contentTitle:()=>c,default:()=>f,frontMatter:()=>s,metadata:()=>u,toc:()=>N});var a=n(9668),r=n(21367),l=(n(96540),n(15680)),i=n(70926),o=(n(21518),n(46061),["components"]),p={toc:[]},d="wrapper";function g(e){var t=e.components,n=(0,r.A)(e,o);return(0,l.yg)(d,(0,a.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,l.yg)("div",{className:"snack-player","data-snack-name":"RNE Tile","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20View%2C%20ScrollView%2C%20StyleSheet%20%7D%20from%20'react-native'%3B%0Aimport%20%7B%20Text%2C%20Tile%20%7D%20from%20'%40rneui%2Fthemed'%3B%0A%0Atype%20TilesComponentProps%20%3D%20%7B%7D%3B%0A%0Aconst%20Tiles%3A%20React.FunctionComponent%3CTilesComponentProps%3E%20%3D%20()%20%3D%3E%20%7B%0Areturn%20(%0A%20%20%3C%3E%0A%20%20%20%20%3CView%20style%3D%7B%7B%20alignItems%3A%20'center'%20%7D%7D%3E%0A%20%20%20%20%20%20%3CScrollView%20style%3D%7B%7B%20paddingVertical%3A%2010%20%7D%7D%3E%0A%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.subHeader%7D%3EFeatured%20Tile%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%3CTile%0A%20%20%20%20%20%20%20%20%20%20imageSrc%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20uri%3A%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20'https%3A%2F%2Fwww.mediastorehouse.com%2Fp%2F191%2Fsunset-porthmeor-beach-st-ives-cornwall-11702500.jpg.webp'%2C%0A%20%20%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20title%3D%22When%20I%20admire%20the%20wonders%20of%20a%20sunset%20or%20the%20beauty%20of%20the%20moon%2C%20my%20soul%20expands%20in%20the%20worship%20of%20the%20creator.%22%0A%20%20%20%20%20%20%20%20%20%20titleStyle%3D%7B%7B%20fontSize%3A%2015%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20featured%0A%20%20%20%20%20%20%20%20%20%20caption%3D%22Mahatma%20Gandhi%22%0A%20%20%20%20%20%20%20%20%20%20activeOpacity%3D%7B1%7D%0A%20%20%20%20%20%20%20%20%20%20width%3D%7B310%7D%0A%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.subHeader%7D%3EFeatured%20Tile%20with%20Icon%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%3CView%20style%3D%7B%7B%20paddingTop%3A%2020%20%7D%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%3CTile%0A%20%20%20%20%20%20%20%20%20%20%20%20imageSrc%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20uri%3A%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20'https%3A%2F%2Fawildgeographer.files.wordpress.com%2F2015%2F02%2Fjohn_muir_glacier.jpg'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20icon%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20name%3A%20'heart'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20type%3A%20'font-awesome'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20size%3A%2060%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20color%3A%20'red'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20featured%0A%20%20%20%20%20%20%20%20%20%20%20%20activeOpacity%3D%7B0.8%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20onPress%3D%7B()%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20'Tile%20pressed'%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20width%3D%7B310%7D%0A%20%20%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%20%20%20%20%3CView%20style%3D%7B%7B%20paddingTop%3A%2020%2C%20paddingBottom%3A%20100%20%7D%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%3CTile%0A%20%20%20%20%20%20%20%20%20%20%20%20imageSrc%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20uri%3A%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20'https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2Fd%2Fd6%2FHalf_Dome_from_Glacier_Point%252C_Yosemite_NP_-_Diliff.jpg%2F320px-Half_Dome_from_Glacier_Point%252C_Yosemite_NP_-_Diliff.jpg'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20title%3D%22Half%20Dome%2C%20Yosemite%22%0A%20%20%20%20%20%20%20%20%20%20%20%20titleStyle%3D%7B%7B%20fontSize%3A%2020%2C%20textAlign%3A%20'center'%2C%20paddingBottom%3A%205%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20activeOpacity%3D%7B1%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20width%3D%7B310%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20contentContainerStyle%3D%7B%7B%20height%3A%2070%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20style%3D%7B%7B%20paddingBottom%3A%2020%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CView%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20style%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20flex%3A%201%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20flexDirection%3A%20'row'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20justifyContent%3A%20'space-between'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CText%20style%3D%7B%7B%20color%3A%20'green'%20%7D%7D%3EVisit%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CText%20style%3D%7B%7B%20color%3A%20'%23397af8'%20%7D%7D%3EFind%20out%20More%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%20%20%20%20%20%20%3C%2FTile%3E%0A%20%20%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%20%20%3C%2FScrollView%3E%0A%20%20%20%20%3C%2FView%3E%0A%20%20%3C%2F%3E%0A)%3B%0A%7D%3B%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0AsubHeader%3A%20%7B%0A%20%20backgroundColor%20%3A%20%22%232089dc%22%2C%0A%20%20color%20%3A%20%22white%22%2C%0A%20%20textAlign%20%3A%20%22center%22%2C%0A%20%20paddingVertical%20%3A%205%2C%0A%20%20marginBottom%20%3A%2010%0A%7D%0A%7D)%3B%0A%0Aexport%20default%20Tiles%3B","data-snack-dependencies":"@rneui/themed,@rneui/base","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}))}g.isMDXComponent=!0;var m=n(36754),y=["components"],s={id:"tile",title:"Tile"},c=void 0,u={unversionedId:"components/tile",id:"version-4.0.0-rc.5/components/tile",title:"Tile",description:"Tiles like Cards, are a convenient way to display related content about a single subject.",source:"@site/versioned_docs/version-4.0.0-rc.5/components/Tile.mdx",sourceDirName:"components",slug:"/components/tile",permalink:"/react-native-elements-next/docs/4.0.0-rc.5/components/tile",draft:!1,editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/versioned_docs/version-4.0.0-rc.5/components/Tile.mdx",tags:[],version:"4.0.0-rc.5",frontMatter:{id:"tile",title:"Tile"},sidebar:"docs",previous:{title:"Text",permalink:"/react-native-elements-next/docs/4.0.0-rc.5/components/text"},next:{title:"Tooltip",permalink:"/react-native-elements-next/docs/4.0.0-rc.5/components/tooltip"}},A={},N=[{value:"Import",id:"import",level:2},{value:"Usage",id:"usage",level:2},{value:"Props",id:"props",level:2},{value:"Playground",id:"playground",level:2}],C={toc:N},b="wrapper";function f(e){var t=e.components,n=(0,r.A)(e,y);return(0,l.yg)(b,(0,a.A)({},C,n,{components:t,mdxType:"MDXLayout"}),(0,l.yg)(i.y,{mdxType:"IconsStyle"}),(0,l.yg)("p",null,"Tiles like Cards, are a convenient way to display related content about a single subject.\nAlso receives all ",(0,l.yg)("a",{parentName:"p",href:"http://reactnative.dev/docs/touchablenativefeedback.html#props"},"TouchableNativeFeedback")," (Android) or ",(0,l.yg)("a",{parentName:"p",href:"http://reactnative.dev/docs/touchableopacity.html#props"},"TouchableOpacity")," (iOS) props."),(0,l.yg)("h2",{id:"import"},"Import"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-tsx"},'import { Tile } from "@rneui/themed";\n')),(0,l.yg)("h2",{id:"usage"},"Usage"),(0,l.yg)(g,{mdxType:"Usage"}),(0,l.yg)("h2",{id:"props"},"Props"),(0,l.yg)("admonition",{type:"note"},(0,l.yg)("p",{parentName:"admonition"},"Includes all ",(0,l.yg)("a",{parentName:"p",href:"https://reactnative.dev/docs/view#props"},"View")," props.")),(0,l.yg)("div",{class:"table-responsive"},(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Name"),(0,l.yg)("th",{parentName:"tr",align:null},"Type"),(0,l.yg)("th",{parentName:"tr",align:null},"Default"),(0,l.yg)("th",{parentName:"tr",align:null},"Description"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"ImageComponent")),(0,l.yg)("td",{parentName:"tr",align:null},"typeof Component"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"RNE Image")),(0,l.yg)("td",{parentName:"tr",align:null},"Custom ImageComponent for Tile.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"activeOpacity")),(0,l.yg)("td",{parentName:"tr",align:null},"number"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"Number passed to control opacity on press.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"caption")),(0,l.yg)("td",{parentName:"tr",align:null},"ReactNode"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"Text inside the tilt when tile is featured.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"captionStyle")),(0,l.yg)("td",{parentName:"tr",align:null},"Text Style"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"Styling for the caption (optional); You only use this if ",(0,l.yg)("inlineCode",{parentName:"td"},"caption")," is a string.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"containerStyle")),(0,l.yg)("td",{parentName:"tr",align:null},"View Style"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"Styling for the outer tile container.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"contentContainerStyle")),(0,l.yg)("td",{parentName:"tr",align:null},"View Style"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"Styling for bottom container when not featured tile.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"featured")),(0,l.yg)("td",{parentName:"tr",align:null},"boolean"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"Changes the look of the tile.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"height")),(0,l.yg)("td",{parentName:"tr",align:null},"number"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"'width/2'")),(0,l.yg)("td",{parentName:"tr",align:null},"Height for the tile.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"icon")),(0,l.yg)("td",{parentName:"tr",align:null},"IconObject"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"Icon Component Props.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"iconContainerStyle")),(0,l.yg)("td",{parentName:"tr",align:null},"View Style"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"Styling for the outer icon container.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"imageContainerStyle")),(0,l.yg)("td",{parentName:"tr",align:null},"View Style"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"Styling for the image.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"imageProps")),(0,l.yg)("td",{parentName:"tr",align:null},"ImageProps(Object)"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"{}")),(0,l.yg)("td",{parentName:"tr",align:null},'Optional properties to pass to the image if provided e.g "resizeMode".')),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"imageSrc")),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"string")," ","|"," ",(0,l.yg)("inlineCode",{parentName:"td"},"ImageSourcePropType")),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"Source for the image.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"overlayContainerStyle")),(0,l.yg)("td",{parentName:"tr",align:null},"View Style"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"Styling for the overlay container when using featured tile.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"title")),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"Text inside the tile.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"titleNumberOfLines")),(0,l.yg)("td",{parentName:"tr",align:null},"number"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"Number of lines for Title.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"titleStyle")),(0,l.yg)("td",{parentName:"tr",align:null},"Text Style"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"Styling for the title.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"width")),(0,l.yg)("td",{parentName:"tr",align:null},"number"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"'screen width'")),(0,l.yg)("td",{parentName:"tr",align:null},"Width for the tile."))))),(0,l.yg)("h2",{id:"playground"},"Playground"),(0,l.yg)(m.A,{mdxType:"Play"}))}f.isMDXComponent=!0},14628:(e,t,n)=>{"use strict";n.d(t,{A:()=>a});const a=n.p+"assets/fonts/MaterialCommunityIcons-5d42b4e60858731e7b6504400f7e3d8e.ttf"},18411:()=>{},26795:(e,t,n)=>{"use strict";n.d(t,{A:()=>s});var a=n(9668),r=n(96540),l=n(91010),i=n(32594),o=n(20018),p=n(96109),d=n(11245),g=n(34397),m=n(50546),y=n(25407);const s=function(e){var t=e.params,n=e.containerStyle,s=void 0===n?{}:n;return r.createElement(l.A,{fallback:r.createElement(r.Fragment,null,"Loading...")},(function(){return r.createElement(m.q9.Provider,null,r.createElement(m.Oy,{initialMetrics:y.Y},r.createElement("div",{style:Object.assign({border:"1px solid var(--ifm-color-emphasis-200)",borderRadius:"var(--ifm-global-radius)",position:"relative"},s)},r.createElement(i.A,(0,a.A)({},t.compilerProps,{minHeight:62,placeholder:o.A}))),r.createElement(p.A,{msg:t.errorProps.msg,isPopup:!0}),r.createElement(d.A,t.knobProps),r.createElement(p.A,t.errorProps),r.createElement(g.w,t.actions)))}))}},36754:(e,t,n)=>{"use strict";n.d(t,{A:()=>p});var a=n(96540),r=n(64270),l=n(26795),i=n(10171),o=n(11451);const p=function(){var e=(0,i.A)({componentName:"Tile",props:{activeOpacity:{value:.5,type:o.B.Number},caption:{value:"Tile caption",type:o.B.String,description:""},captionStyle:{type:o.B.Object,value:"{}"},containerStyle:{type:o.B.Object,value:"{}"},contentContainerStyle:{type:o.B.Object,value:"{}"},featured:{type:o.B.Boolean,value:!1},height:{type:o.B.Number,value:300},icon:{type:o.B.Object,value:"",description:"object {name: string, color: string, size: number, type: string (default is material, or choose from supported icon sets), iconStyle: object(style)}"},iconContainerStyle:{type:o.B.Object,value:"{}"},ImageComponent:{type:o.B.ReactNode,value:null},imageContainerStyle:{type:o.B.Object,value:"{}"},imageProps:{type:o.B.Object,value:"{}"},onPress:{type:o.B.Function,value:'() => console.log("imageProps()")'},overlayContainerStyle:{type:o.B.Object,value:"{}"},title:{type:o.B.String,value:""},titleNumberOfLines:{type:o.B.Number,value:null},titleStyle:{type:o.B.Object,value:"{}"},width:{type:o.B.Number,value:"400"}},scope:{Tile:r.Tile},imports:{"@rneui/base":{named:["Tile"]}}});return a.createElement(a.Fragment,null,a.createElement(l.A,{params:e}))}},68260:()=>{},70926:(e,t,n)=>{"use strict";n.d(t,{y:()=>p});var a=n(96540),r=n(3352),l=n(14628),i=n(1547),o=n(83564),p=function(){return a.createElement(r.A,null,a.createElement("style",{type:"text/css"},"\n          @font-face {\n            font-family: 'MaterialIcons';\n            src: url("+i.A+") format('truetype');\n          }\n          @font-face {\n            font-family: 'FontAwesome';\n            src: url("+o.A+") format('truetype');\n          }\n          @font-face {\n            font-family: 'MaterialCommunityIcons';\n            src: url("+l.A+") format('truetype');\n          }\n        "))}},83564:(e,t,n)=>{"use strict";n.d(t,{A:()=>a});const a=n.p+"assets/fonts/FontAwesome-1e59d2330b4c6deb84b340635ed36249.ttf"}}]);