(self.webpackChunkrne_website=self.webpackChunkrne_website||[]).push([[95735],{1547:(e,t,a)=>{"use strict";a.d(t,{A:()=>n});const n=a.p+"assets/fonts/MaterialIcons-120b4c7bbd155bd0a04dc37d334baced.ttf"},14628:(e,t,a)=>{"use strict";a.d(t,{A:()=>n});const n=a.p+"assets/fonts/MaterialCommunityIcons-5d42b4e60858731e7b6504400f7e3d8e.ttf"},18411:()=>{},23321:(e,t,a)=>{"use strict";a.r(t),a.d(t,{assets:()=>A,contentTitle:()=>y,default:()=>b,frontMatter:()=>u,metadata:()=>c,toc:()=>N});var n=a(9668),r=a(21367),l=(a(96540),a(15680)),i=a(70926),o=(a(21518),a(46061),["components"]),g={toc:[{value:"Read-only mode",id:"read-only-mode",level:3},{value:"Fractions",id:"fractions",level:3}]},s="wrapper";function m(e){var t=e.components,a=(0,r.A)(e,o);return(0,l.yg)(s,(0,n.A)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,l.yg)("h3",{id:"read-only-mode"},"Read-only mode"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-js"},"const { rating } = this.props;\n\n<Rating imageSize={20} readonly startingValue={rating} style={styles.rating} />;\n")),(0,l.yg)("h3",{id:"fractions"},"Fractions"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-html"},'<Rating showRating fractions="{1}" startingValue="{3.3}" />\n')),(0,l.yg)("p",null,(0,l.yg)("img",{parentName:"p",src:"https://cloud.githubusercontent.com/assets/241553/26780040/e8cd1a2c-49f8-11e7-8859-6dd9b4e0a779.gif",alt:"Fractions demo gif"})),(0,l.yg)("div",{className:"snack-player","data-snack-name":"RNE Rating","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20StyleSheet%2C%20Text%2C%20View%2C%20Platform%2C%20ScrollView%20%7D%20from%20'react-native'%3B%0Aimport%20%7B%20Rating%2C%20RatingProps%20%7D%20from%20'%40rneui%2Fthemed'%3B%0A%0Atype%20RatingsComponentProps%20%3D%20%7B%7D%3B%0A%0Aconst%20Ratings%3A%20React.FunctionComponent%3CRatingsComponentProps%3E%20%3D%20()%20%3D%3E%20%7B%0Aconst%20ratingCompleted%20%3D%20(rating%3A%20number)%20%3D%3E%20%7B%0A%20%20console.log('Rating%20is%3A%20'%20%2B%20rating)%3B%0A%7D%3B%0A%0Aconst%20ratingProps%20%3D%20%7B%7D%3B%0Areturn%20(%0A%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%0A%20%20%20%20%3CScrollView%20style%3D%7Bstyles.viewContainer%7D%3E%0A%20%20%20%20%20%20%3CView%0A%20%20%20%20%20%20%20%20style%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20justifyContent%3A%20'center'%2C%0A%20%20%20%20%20%20%20%20%20%20alignItems%3A%20'center'%2C%0A%20%20%20%20%20%20%20%20%20%20marginBottom%3A%2030%2C%0A%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%3CRating%0A%20%20%20%20%20%20%20%20%20%20showRating%0A%20%20%20%20%20%20%20%20%20%20imageSize%3D%7B40%7D%0A%20%20%20%20%20%20%20%20%20%20onFinishRating%3D%7BratingCompleted%7D%0A%20%20%20%20%20%20%20%20%20%20style%3D%7B%7B%20paddingVertical%3A%2010%20%7D%7D%0A%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CRating%0A%20%20%20%20%20%20%20%20%20%20showRating%0A%20%20%20%20%20%20%20%20%20%20type%3D%22star%22%0A%20%20%20%20%20%20%20%20%20%20fractions%3D%7B1%7D%0A%20%20%20%20%20%20%20%20%20%20startingValue%3D%7B3.6%7D%0A%20%20%20%20%20%20%20%20%20%20readonly%0A%20%20%20%20%20%20%20%20%20%20imageSize%3D%7B40%7D%0A%20%20%20%20%20%20%20%20%20%20onFinishRating%3D%7BratingCompleted%7D%0A%20%20%20%20%20%20%20%20%20%20style%3D%7B%7B%20paddingVertical%3A%2010%20%7D%7D%0A%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CRating%0A%20%20%20%20%20%20%20%20%20%20type%3D%22custom%22%0A%20%20%20%20%20%20%20%20%20%20ratingColor%3D%22%233498db%22%0A%20%20%20%20%20%20%20%20%20%20ratingCount%3D%7B10%7D%0A%20%20%20%20%20%20%20%20%20%20imageSize%3D%7B30%7D%0A%20%20%20%20%20%20%20%20%20%20onFinishRating%3D%7BratingCompleted%7D%0A%20%20%20%20%20%20%20%20%20%20showRating%0A%20%20%20%20%20%20%20%20%20%20style%3D%7B%7B%20paddingVertical%3A%2010%20%7D%7D%0A%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CRating%0A%20%20%20%20%20%20%20%20%20%20type%3D%22heart%22%0A%20%20%20%20%20%20%20%20%20%20ratingCount%3D%7B3%7D%0A%20%20%20%20%20%20%20%20%20%20fractions%3D%7B2%7D%0A%20%20%20%20%20%20%20%20%20%20startingValue%3D%7B1.57%7D%0A%20%20%20%20%20%20%20%20%20%20imageSize%3D%7B40%7D%0A%20%20%20%20%20%20%20%20%20%20onFinishRating%3D%7BratingCompleted%7D%0A%20%20%20%20%20%20%20%20%20%20showRating%0A%20%20%20%20%20%20%20%20%20%20style%3D%7Bstyles.rating%7D%0A%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%3C%2FScrollView%3E%0A%20%20%3C%2FView%3E%0A)%3B%0A%7D%3B%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0Acontainer%3A%20%7B%0A%20%20flex%3A%201%2C%0A%7D%2C%0AheadingContainer%3A%20%7B%0A%20%20paddingTop%3A%2050%2C%0A%7D%2C%0AtitleText%3A%20%7B%0A%20%20fontSize%3A%2025%2C%0A%20%20fontWeight%3A%20'bold'%2C%0A%20%20textAlign%3A%20'center'%2C%0A%20%20paddingVertical%3A%205%2C%0A%20%20fontFamily%3A%20Platform.OS%20%3D%3D%3D%20'ios'%20%3F%20'Menlo-Bold'%20%3A%20''%2C%0A%20%20color%3A%20'%2327ae60'%2C%0A%7D%2C%0AsubtitleText%3A%20%7B%0A%20%20fontSize%3A%2018%2C%0A%20%20fontWeight%3A%20'400'%2C%0A%20%20textAlign%3A%20'center'%2C%0A%20%20fontFamily%3A%20Platform.OS%20%3D%3D%3D%20'ios'%20%3F%20'Trebuchet%20MS'%20%3A%20''%2C%0A%20%20color%3A%20'%2334495e'%2C%0A%7D%2C%0AviewContainer%3A%20%7B%0A%20%20flex%3A%201%2C%0A%7D%2C%0Arating%3A%20%7B%0A%20%20paddingVertical%3A%2010%2C%0A%7D%2C%0A%7D)%3B%0A%0Aexport%20default%20Ratings%3B","data-snack-dependencies":"@rneui/themed,@rneui/base","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}))}m.isMDXComponent=!0;var d=a(72496),p=["components"],u={id:"rating",title:"Rating"},y=void 0,c={unversionedId:"components/rating",id:"version-4.0.0-rc.5/components/rating",title:"Rating",description:"Ratings are used to collect measurable feedback from users.",source:"@site/versioned_docs/version-4.0.0-rc.5/components/Rating.mdx",sourceDirName:"components",slug:"/components/rating",permalink:"/react-native-elements-next/docs/4.0.0-rc.5/components/rating",draft:!1,editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/versioned_docs/version-4.0.0-rc.5/components/Rating.mdx",tags:[],version:"4.0.0-rc.5",frontMatter:{id:"rating",title:"Rating"}},A={},N=[{value:"Import",id:"import",level:2},{value:"Usage",id:"usage",level:2},{value:"Props",id:"props",level:2},{value:"Playground",id:"playground",level:2}],f={toc:N},h="wrapper";function b(e){var t=e.components,a=(0,r.A)(e,p);return(0,l.yg)(h,(0,n.A)({},f,a,{components:t,mdxType:"MDXLayout"}),(0,l.yg)(i.y,{mdxType:"IconsStyle"}),(0,l.yg)("p",null,"Ratings are used to collect measurable feedback from users.\nUse Rating over an Input where imagery can increase user interaction.\nThis component is imported from ",(0,l.yg)("a",{parentName:"p",href:"https://github.com/Monte9/react-native-ratings"},"react-native-ratings"),".\nThere are two tyoes of rating - TapRating and SwipeRating.\nThis documentation is for Swipe Rating version."),(0,l.yg)("h2",{id:"import"},"Import"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-tsx"},'import { Rating } from "@rneui/themed";\n')),(0,l.yg)("h2",{id:"usage"},"Usage"),(0,l.yg)(m,{mdxType:"Usage"}),(0,l.yg)("h2",{id:"props"},"Props"),(0,l.yg)("div",{class:"table-responsive"},(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Name"),(0,l.yg)("th",{parentName:"tr",align:null},"Type"),(0,l.yg)("th",{parentName:"tr",align:null},"Default"),(0,l.yg)("th",{parentName:"tr",align:null},"Description"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"fractions")),(0,l.yg)("td",{parentName:"tr",align:null},"any"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"The number of decimal places for the rating value; must be between 0 and 20")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"imageSize")),(0,l.yg)("td",{parentName:"tr",align:null},"number"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"The size of each rating imageDefault is 50")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"jumpValue")),(0,l.yg)("td",{parentName:"tr",align:null},"number"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"The number to jump per swipeDefault is 0 (not to jump)")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"minValue")),(0,l.yg)("td",{parentName:"tr",align:null},"number"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"The minimum value the user can selectDefault is 0")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"onFinishRating")),(0,l.yg)("td",{parentName:"tr",align:null},"Function"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"Callback method when the user finishes rating. Gives you the final rating value as a whole number")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"onStartRating")),(0,l.yg)("td",{parentName:"tr",align:null},"Function"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"Callback method when the user starts rating.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"onSwipeRating")),(0,l.yg)("td",{parentName:"tr",align:null},"(number: any) => void"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"Callback method when the user is swiping.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"ratingBackgroundColor")),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"Pass in a custom background-fill-color for the rating icon; use this along with type='custom' prop aboveDefault is 'white'")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"ratingColor")),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"Pass in a custom fill-color for the rating icon; use this along with type='custom' prop aboveDefault is '#f1c40f'")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"ratingCount")),(0,l.yg)("td",{parentName:"tr",align:null},"number"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"Number of rating images to displayDefault is 5")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"ratingImage")),(0,l.yg)("td",{parentName:"tr",align:null},"ReactNode"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"Pass in a custom image source; use this along with type='custom' prop above")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"ratingTextColor")),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"Color used for the text labels")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"readonly")),(0,l.yg)("td",{parentName:"tr",align:null},"boolean"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"Whether the rating can be modiefied by the userDefault is false")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"showRating")),(0,l.yg)("td",{parentName:"tr",align:null},"boolean"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"Displays the Built-in Rating UI to show the rating value in real-timeDefault is false")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"showReadOnlyText")),(0,l.yg)("td",{parentName:"tr",align:null},"boolean"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"Whether the text is read onlyDefault is false")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"startingValue")),(0,l.yg)("td",{parentName:"tr",align:null},"number"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"The initial rating to renderDefault is ratingCount/2")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"style")),(0,l.yg)("td",{parentName:"tr",align:null},"View Style"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"Exposes style prop to add additonal styling to the container view")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"tintColor")),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"Color used for the background")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"type")),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"Graphic used for represent a ratingDefault is 'star'"))))),(0,l.yg)("h2",{id:"playground"},"Playground"),(0,l.yg)(d.A,{mdxType:"Play"}))}b.isMDXComponent=!0},26795:(e,t,a)=>{"use strict";a.d(t,{A:()=>u});var n=a(9668),r=a(96540),l=a(91010),i=a(32594),o=a(20018),g=a(96109),s=a(11245),m=a(34397),d=a(50546),p=a(25407);const u=function(e){var t=e.params,a=e.containerStyle,u=void 0===a?{}:a;return r.createElement(l.A,{fallback:r.createElement(r.Fragment,null,"Loading...")},(function(){return r.createElement(d.q9.Provider,null,r.createElement(d.Oy,{initialMetrics:p.Y},r.createElement("div",{style:Object.assign({border:"1px solid var(--ifm-color-emphasis-200)",borderRadius:"var(--ifm-global-radius)",position:"relative"},u)},r.createElement(i.A,(0,n.A)({},t.compilerProps,{minHeight:62,placeholder:o.A}))),r.createElement(g.A,{msg:t.errorProps.msg,isPopup:!0}),r.createElement(s.A,t.knobProps),r.createElement(g.A,t.errorProps),r.createElement(m.w,t.actions)))}))}},68260:()=>{},70926:(e,t,a)=>{"use strict";a.d(t,{y:()=>g});var n=a(96540),r=a(3352),l=a(14628),i=a(1547),o=a(83564),g=function(){return n.createElement(r.A,null,n.createElement("style",{type:"text/css"},"\n          @font-face {\n            font-family: 'MaterialIcons';\n            src: url("+i.A+") format('truetype');\n          }\n          @font-face {\n            font-family: 'FontAwesome';\n            src: url("+o.A+") format('truetype');\n          }\n          @font-face {\n            font-family: 'MaterialCommunityIcons';\n            src: url("+l.A+") format('truetype');\n          }\n        "))}},72496:(e,t,a)=>{"use strict";a.d(t,{A:()=>g});var n=a(96540),r=a(64270),l=a(26795),i=a(10171),o=a(11451);const g=function(){var e=(0,i.A)({componentName:"Rating",props:{fractions:{type:o.B.Number,value:0},imageSize:{type:o.B.Number,value:70},minValue:{type:o.B.Number,value:0},onFinishRating:{type:o.B.Function,value:'() => console.log("onFinishRating()")'},onStartRating:{type:o.B.Function,value:'() => console.log("onStartRating()")'},ratingBackgroundColor:{type:o.B.String,value:"#FFF"},tintColor:{type:o.B.String,value:""},ratingColor:{type:o.B.String,value:"#FF0"},ratingCount:{type:o.B.Number,value:5},ratingImage:{type:o.B.String,value:"star"},ratingTextColor:{type:o.B.String,value:"#222"},readonly:{type:o.B.Boolean,value:!1},reviews:{type:o.B.Array,value:'["Terrible", "Bad", "Okay", "Good", "Great"]'},showRating:{type:o.B.Boolean,value:!0},startingValue:{type:o.B.Number,value:"0"},style:{type:o.B.Object,value:"{}"},type:{type:o.B.Enum,options:{star:"star",rocket:"rocket",bell:"bell",heart:"heart",custom:"custom"},value:"star"}},scope:{Rating:r.Rating},imports:{"@rneui/base":{named:["Rating"]}}});return n.createElement(n.Fragment,null,n.createElement(l.A,{params:e}))}},83564:(e,t,a)=>{"use strict";a.d(t,{A:()=>n});const n=a.p+"assets/fonts/FontAwesome-1e59d2330b4c6deb84b340635ed36249.ttf"}}]);