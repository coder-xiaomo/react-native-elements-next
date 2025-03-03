(self.webpackChunkrne_website=self.webpackChunkrne_website||[]).push([[1595],{16805:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>C,frontMatter:()=>p,metadata:()=>y,toc:()=>A});var a=n(9668),r=n(21367),i=(n(96540),n(15680)),l=(n(21518),n(46061),["components"]),o={toc:[]},g="wrapper";function s(e){var t=e.components,n=(0,r.A)(e,l);return(0,i.yg)(g,(0,a.A)({},o,n,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("div",{className:"snack-player","data-snack-name":"RNE AirbnbRating","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20StyleSheet%2C%20Text%2C%20View%2C%20Platform%2C%20ScrollView%20%7D%20from%20'react-native'%3B%0Aimport%20%7B%20AirbnbRating%20%7D%20from%20'%40rneui%2Fthemed'%3B%0A%0Atype%20RatingsComponentProps%20%3D%20%7B%7D%3B%0A%0Aconst%20Ratings%3A%20React.FunctionComponent%3CRatingsComponentProps%3E%20%3D%20()%20%3D%3E%20%7B%0Aconst%20ratingCompleted%20%3D%20(rating%3A%20number)%20%3D%3E%20%7B%0A%20%20console.log('Rating%20is%3A%20'%20%2B%20rating)%3B%0A%7D%3B%0A%0Aconst%20ratingProps%20%3D%20%7B%7D%3B%0Areturn%20(%0A%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%0A%20%20%20%20%3CScrollView%20style%3D%7Bstyles.viewContainer%7D%3E%0A%20%20%20%20%20%20%3CView%0A%20%20%20%20%20%20%20%20style%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20justifyContent%3A%20'center'%2C%0A%20%20%20%20%20%20%20%20%20%20alignItems%3A%20'center'%2C%0A%20%20%20%20%20%20%20%20%20%20marginBottom%3A%2030%2C%0A%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%3CAirbnbRating%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CAirbnbRating%20isDisabled%3D%7Btrue%7D%2F%3E%0A%20%20%20%20%20%20%20%20%3CAirbnbRating%0A%20%20%20%20%20%20%20%20%20%20count%3D%7B11%7D%0A%20%20%20%20%20%20%20%20%20%20reviews%3D%7B%5B%0A%20%20%20%20%20%20%20%20%20%20%20%20'Terrible'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20'Bad'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20'Meh'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20'OK'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20'Good'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20'Hmm...'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20'Very%20Good'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20'Wow'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20'Amazing'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20'Unbelievable'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20'Jesus'%2C%0A%20%20%20%20%20%20%20%20%20%20%5D%7D%0A%20%20%20%20%20%20%20%20%20%20defaultRating%3D%7B11%7D%0A%20%20%20%20%20%20%20%20%20%20size%3D%7B20%7D%0A%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%3C%2FScrollView%3E%0A%20%20%3C%2FView%3E%0A)%3B%0A%7D%3B%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0Acontainer%3A%20%7B%0A%20%20flex%3A%201%2C%0A%7D%2C%0AheadingContainer%3A%20%7B%0A%20%20paddingTop%3A%2050%2C%0A%7D%2C%0AtitleText%3A%20%7B%0A%20%20fontSize%3A%2025%2C%0A%20%20fontWeight%3A%20'bold'%2C%0A%20%20textAlign%3A%20'center'%2C%0A%20%20paddingVertical%3A%205%2C%0A%20%20fontFamily%3A%20Platform.OS%20%3D%3D%3D%20'ios'%20%3F%20'Menlo-Bold'%20%3A%20''%2C%0A%20%20color%3A%20'%2327ae60'%2C%0A%7D%2C%0AsubtitleText%3A%20%7B%0A%20%20fontSize%3A%2018%2C%0A%20%20fontWeight%3A%20'400'%2C%0A%20%20textAlign%3A%20'center'%2C%0A%20%20fontFamily%3A%20Platform.OS%20%3D%3D%3D%20'ios'%20%3F%20'Trebuchet%20MS'%20%3A%20''%2C%0A%20%20color%3A%20'%2334495e'%2C%0A%7D%2C%0AviewContainer%3A%20%7B%0A%20%20flex%3A%201%2C%0A%7D%2C%0Arating%3A%20%7B%0A%20%20paddingVertical%3A%2010%2C%0A%7D%2C%0A%7D)%3B%0A%0Aexport%20default%20Ratings%3B","data-snack-dependencies":"@rneui/themed,@rneui/base","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}))}s.isMDXComponent=!0;var m=n(43512),d=["components"],p={id:"airbnbrating",title:"AirbnbRating"},u=void 0,y={unversionedId:"components/airbnbrating",id:"version-4.0.0-rc.3/components/airbnbrating",title:"AirbnbRating",description:"Ratings are used to collect measurable feedback from users.",source:"@site/versioned_docs/version-4.0.0-rc.3/components/AirbnbRating.mdx",sourceDirName:"components",slug:"/components/airbnbrating",permalink:"/react-native-elements-next/docs/4.0.0-rc.3/components/airbnbrating",draft:!1,editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/versioned_docs/version-4.0.0-rc.3/components/AirbnbRating.mdx",tags:[],version:"4.0.0-rc.3",frontMatter:{id:"airbnbrating",title:"AirbnbRating"},sidebar:"docs",previous:{title:"Common Pitfalls",permalink:"/react-native-elements-next/docs/4.0.0-rc.3/customization/pitfall"},next:{title:"Avatar",permalink:"/react-native-elements-next/docs/4.0.0-rc.3/components/avatar"}},c={},A=[{value:"Import",id:"import",level:2},{value:"Usage",id:"usage",level:2},{value:"Props",id:"props",level:2},{value:"Playground",id:"playground",level:2}],b={toc:A},N="wrapper";function C(e){var t=e.components,n=(0,r.A)(e,d);return(0,i.yg)(N,(0,a.A)({},b,n,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("p",null,"Ratings are used to collect measurable feedback from users.\nUse Rating over an Input where imagery can increase user interaction.\nThis component is imported from ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/Monte9/react-native-ratings"},"react-native-ratings"),".\nThere are two types of rating - TapRating and SwipeRating.\nThis documentation is for Tap Rating version."),(0,i.yg)("h2",{id:"import"},"Import"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-tsx"},'import { AirbnbRating } from "@rneui/themed";\n')),(0,i.yg)("h2",{id:"usage"},"Usage"),(0,i.yg)(s,{mdxType:"Usage"}),(0,i.yg)("h2",{id:"props"},"Props"),(0,i.yg)("div",{class:"table-responsive"},(0,i.yg)("table",null,(0,i.yg)("thead",{parentName:"table"},(0,i.yg)("tr",{parentName:"thead"},(0,i.yg)("th",{parentName:"tr",align:null},"Name"),(0,i.yg)("th",{parentName:"tr",align:null},"Type"),(0,i.yg)("th",{parentName:"tr",align:null},"Default"),(0,i.yg)("th",{parentName:"tr",align:null},"Description"))),(0,i.yg)("tbody",{parentName:"table"},(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("inlineCode",{parentName:"td"},"count")),(0,i.yg)("td",{parentName:"tr",align:null},"number"),(0,i.yg)("td",{parentName:"tr",align:null}),(0,i.yg)("td",{parentName:"tr",align:null},"Total number of ratings to displayDefault is 5")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("inlineCode",{parentName:"td"},"defaultRating")),(0,i.yg)("td",{parentName:"tr",align:null},"number"),(0,i.yg)("td",{parentName:"tr",align:null}),(0,i.yg)("td",{parentName:"tr",align:null},"Initial value for the ratingDefault is 3")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("inlineCode",{parentName:"td"},"isDisabled")),(0,i.yg)("td",{parentName:"tr",align:null},"boolean"),(0,i.yg)("td",{parentName:"tr",align:null}),(0,i.yg)("td",{parentName:"tr",align:null},"Whether the rating can be modiefied by the userDefault is false")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("inlineCode",{parentName:"td"},"onFinishRating")),(0,i.yg)("td",{parentName:"tr",align:null},"(number: any) => void"),(0,i.yg)("td",{parentName:"tr",align:null}),(0,i.yg)("td",{parentName:"tr",align:null},"Callback method when the user finishes rating. Gives you the final rating value as a whole number")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("inlineCode",{parentName:"td"},"ratingContainerStyle")),(0,i.yg)("td",{parentName:"tr",align:null},"View Style"),(0,i.yg)("td",{parentName:"tr",align:null}),(0,i.yg)("td",{parentName:"tr",align:null},"Style for rating containerDefault is none")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("inlineCode",{parentName:"td"},"reviewColor")),(0,i.yg)("td",{parentName:"tr",align:null},"string"),(0,i.yg)("td",{parentName:"tr",align:null}),(0,i.yg)("td",{parentName:"tr",align:null},"Color value for review.Default is #f1c40f")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("inlineCode",{parentName:"td"},"reviewSize")),(0,i.yg)("td",{parentName:"tr",align:null},"number"),(0,i.yg)("td",{parentName:"tr",align:null}),(0,i.yg)("td",{parentName:"tr",align:null},"Size value for review.Default is 40")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("inlineCode",{parentName:"td"},"reviews")),(0,i.yg)("td",{parentName:"tr",align:null},"string[]"),(0,i.yg)("td",{parentName:"tr",align:null}),(0,i.yg)("td",{parentName:"tr",align:null},"Labels to show when each value is tappede.g. If the first star is tapped, then value in index 0 will be used as the labelDefault is ","['Terrible', 'Bad', 'Okay', 'Good', 'Great']")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("inlineCode",{parentName:"td"},"selectedColor")),(0,i.yg)("td",{parentName:"tr",align:null},"string"),(0,i.yg)("td",{parentName:"tr",align:null}),(0,i.yg)("td",{parentName:"tr",align:null},"Color value for filled stars.Default is #004666")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("inlineCode",{parentName:"td"},"showRating")),(0,i.yg)("td",{parentName:"tr",align:null},"boolean"),(0,i.yg)("td",{parentName:"tr",align:null}),(0,i.yg)("td",{parentName:"tr",align:null},"Determines if to show the reviews above the ratingDefault is true")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("inlineCode",{parentName:"td"},"size")),(0,i.yg)("td",{parentName:"tr",align:null},"number"),(0,i.yg)("td",{parentName:"tr",align:null}),(0,i.yg)("td",{parentName:"tr",align:null},"Size of rating imageDefault is 40")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("inlineCode",{parentName:"td"},"starContainerStyle")),(0,i.yg)("td",{parentName:"tr",align:null},"View Style"),(0,i.yg)("td",{parentName:"tr",align:null}),(0,i.yg)("td",{parentName:"tr",align:null},"Style for star containerDefault is none")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("inlineCode",{parentName:"td"},"starImage")),(0,i.yg)("td",{parentName:"tr",align:null},"string"),(0,i.yg)("td",{parentName:"tr",align:null}),(0,i.yg)("td",{parentName:"tr",align:null},"Pass in a custom base image source"))))),(0,i.yg)("h2",{id:"playground"},"Playground"),(0,i.yg)(m.A,{mdxType:"Play"}))}C.isMDXComponent=!0},18411:()=>{},26795:(e,t,n)=>{"use strict";n.d(t,{A:()=>u});var a=n(9668),r=n(96540),i=n(91010),l=n(32594),o=n(20018),g=n(96109),s=n(11245),m=n(34397),d=n(50546),p=n(25407);const u=function(e){var t=e.params,n=e.containerStyle,u=void 0===n?{}:n;return r.createElement(i.A,{fallback:r.createElement(r.Fragment,null,"Loading...")},(function(){return r.createElement(d.q9.Provider,null,r.createElement(d.Oy,{initialMetrics:p.Y},r.createElement("div",{style:Object.assign({border:"1px solid var(--ifm-color-emphasis-200)",borderRadius:"var(--ifm-global-radius)",position:"relative"},u)},r.createElement(l.A,(0,a.A)({},t.compilerProps,{minHeight:62,placeholder:o.A}))),r.createElement(g.A,{msg:t.errorProps.msg,isPopup:!0}),r.createElement(s.A,t.knobProps),r.createElement(g.A,t.errorProps),r.createElement(m.w,t.actions)))}))}},43512:(e,t,n)=>{"use strict";n.d(t,{A:()=>g});var a=n(96540),r=n(64270),i=n(26795),l=n(10171),o=n(11451);const g=function(){var e=(0,l.A)({componentName:"AirbnbRating",props:{count:{type:o.B.Number,value:5},defaultRating:{type:o.B.Number,value:1},reviews:{type:o.B.Array,value:'["Terrible", "Bad", "Okay", "Good", "Great"]'},onFinishRating:{type:o.B.Function,value:'() => console.log("onFinishRating()")'},showRating:{type:o.B.Boolean,value:!0}},scope:{AirbnbRating:r.AirbnbRating},imports:{"@rneui/base":{named:["AirbnbRating"]}}});return a.createElement(a.Fragment,null,a.createElement(i.A,{params:e}))}},68260:()=>{}}]);