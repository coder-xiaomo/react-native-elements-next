(self.webpackChunkrne_website=self.webpackChunkrne_website||[]).push([[93650],{1258:(e,t,r)=>{"use strict";r.d(t,{A:()=>l});var a=r(96540),n=r(64270),i=r(26795),s=r(10171),o=r(11451);const l=function(){var e=(0,s.A)({componentName:"LinearProgress",props:{value:{type:o.B.Number,value:0},variant:{type:o.B.Enum,options:{determinate:"determinate",indeterminate:"indeterminate"},value:"indeterminate"},style:{type:o.B.Object,value:'{width: "90%"}'},color:{type:o.B.String,value:"secondary"},trackColor:{type:o.B.String,value:""}},scope:{LinearProgress:n.LinearProgress},imports:{"@rneui/base":{named:["LinearProgress"]}}});return a.createElement(a.Fragment,null,a.createElement(i.A,{params:e}))}},10547:(e,t,r)=>{"use strict";r.r(t),r.d(t,{assets:()=>y,contentTitle:()=>c,default:()=>N,frontMatter:()=>m,metadata:()=>u,toc:()=>A});var a=r(9668),n=r(21367),i=(r(96540),r(15680)),s=(r(21518),r(46061),["components"]),o={toc:[]},l="wrapper";function p(e){var t=e.components,r=(0,n.A)(e,s);return(0,i.yg)(l,(0,a.A)({},o,r,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("div",{className:"snack-player","data-snack-name":"RNE Linear Progress","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20View%2C%20Text%20%7D%20from%20'react-native'%3B%0Aimport%20%7B%20Button%2C%20LinearProgress%20%7D%20from%20'%40rneui%2Fthemed'%3B%0A%0Aconst%20LinearProgressAPI%3A%20React.FunctionComponent%20%3D%20()%20%3D%3E%20%7B%0Aconst%20%5Bprogress%2C%20setProgress%5D%20%3D%20React.useState(0)%3B%0A%0AReact.useEffect(()%20%3D%3E%20%7B%0A%20%20let%20subs%20%3D%20true%3B%0A%20%20if%20(progress%20%3C%201%20%26%26%20progress%20!%3D%3D%200)%20%7B%0A%20%20%20%20setTimeout(()%20%3D%3E%20%7B%0A%20%20%20%20%20%20if%20(subs)%20%7B%0A%20%20%20%20%20%20%20%20setProgress(progress%20%2B%200.1)%3B%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%2C%20100)%3B%0A%20%20%7D%0A%20%20return%20()%20%3D%3E%20%7B%0A%20%20%20%20subs%20%3D%20false%3B%0A%20%20%7D%3B%0A%7D%2C%20%5Bprogress%5D)%3B%0A%0Areturn%20(%0A%20%20%3CView%3E%0A%20%20%20%20%3CView%0A%20%20%20%20%20%20style%3D%7B%7B%0A%20%20%20%20%20%20%20%20margin%3A%2010%2C%0A%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%3E%0A%20%20%20%20%20%20%3CText%3EIndeterminate%20Variant%20%3C%2FText%3E%0A%20%20%20%20%20%20%3CLinearProgress%20style%3D%7B%7B%20marginVertical%3A%2010%20%7D%7D%20%2F%3E%0A%20%20%20%20%20%20%3CText%3EIndeterminate%20Variant%20with%20color%3C%2FText%3E%0A%20%20%20%20%20%20%3CLinearProgress%20style%3D%7B%7B%20marginVertical%3A%2010%20%7D%7D%20color%3D%22red%22%20%2F%3E%0A%20%20%20%20%20%20%3CText%3EDeterminate%20Variant%3C%2FText%3E%0A%20%20%20%20%20%20%3CLinearProgress%0A%20%20%20%20%20%20%20%20style%3D%7B%7B%20marginVertical%3A%2010%20%7D%7D%0A%20%20%20%20%20%20%20%20value%3D%7Bprogress%7D%0A%20%20%20%20%20%20%20%20variant%3D%22determinate%22%0A%20%20%20%20%20%20%2F%3E%0A%0A%20%20%20%20%20%20%3CButton%0A%20%20%20%20%20%20%20%20disabled%3D%7Bprogress%20%3E%200%7D%0A%20%20%20%20%20%20%20%20onPress%3D%7B()%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20%20%20setProgress(0.00001)%3B%0A%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20title%3D%7B'Start%20Progress'%7D%0A%20%20%20%20%20%20%20%20containerStyle%3D%7B%7B%20margin%3A%2010%20%7D%7D%0A%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%3CButton%0A%20%20%20%20%20%20%20%20disabled%3D%7Bprogress%20%3D%3D%3D%200%7D%0A%20%20%20%20%20%20%20%20onPress%3D%7B()%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20%20%20setProgress(0)%3B%0A%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20title%3D%7B'Restart'%7D%0A%20%20%20%20%20%20%20%20containerStyle%3D%7B%7B%20margin%3A%2010%20%7D%7D%0A%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%3C%2FView%3E%0A%20%20%3C%2FView%3E%0A)%3B%0A%7D%3B%0A%0Aexport%20default%20LinearProgressAPI%3B","data-snack-dependencies":"@rneui/themed,@rneui/base","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}))}p.isMDXComponent=!0;var g=r(1258),d=["components"],m={id:"linearprogress",title:"LinearProgress"},c=void 0,u={unversionedId:"components/linearprogress",id:"version-4.0.0-rc.3/components/linearprogress",title:"LinearProgress",description:"Progress indicators inform users about the status of ongoing processes, such as loading an app, submitting a form, or saving updates.",source:"@site/versioned_docs/version-4.0.0-rc.3/components/LinearProgress.mdx",sourceDirName:"components",slug:"/components/linearprogress",permalink:"/docs/4.0.0-rc.3/components/linearprogress",draft:!1,editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/versioned_docs/version-4.0.0-rc.3/components/LinearProgress.mdx",tags:[],version:"4.0.0-rc.3",frontMatter:{id:"linearprogress",title:"LinearProgress"},sidebar:"docs",previous:{title:"Input",permalink:"/docs/4.0.0-rc.3/components/input"},next:{title:"ListItem",permalink:"/docs/4.0.0-rc.3/components/listitem"}},y={},A=[{value:"Import",id:"import",level:2},{value:"Usage",id:"usage",level:2},{value:"Props",id:"props",level:2},{value:"Playground",id:"playground",level:2}],D={toc:A},v="wrapper";function N(e){var t=e.components,r=(0,n.A)(e,d);return(0,i.yg)(v,(0,a.A)({},D,r,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("p",null,"Progress indicators inform users about the status of ongoing processes, such as loading an app, submitting a form, or saving updates.\nThey communicate an app\u2019s state and indicate available actions, such as whether users can navigate away from the current screen.\nAlso receives all ",(0,i.yg)("a",{parentName:"p",href:"https://reactnative.dev/docs/view#props"},"View")," props"),(0,i.yg)("h2",{id:"import"},"Import"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-tsx"},'import { LinearProgress } from "@rneui/themed";\n')),(0,i.yg)("h2",{id:"usage"},"Usage"),(0,i.yg)(p,{mdxType:"Usage"}),(0,i.yg)("h2",{id:"props"},"Props"),(0,i.yg)("admonition",{type:"note"},(0,i.yg)("p",{parentName:"admonition"},"Includes all ",(0,i.yg)("a",{parentName:"p",href:"https://reactnative.dev/docs/view#props"},"View")," props.")),(0,i.yg)("div",{class:"table-responsive"},(0,i.yg)("table",null,(0,i.yg)("thead",{parentName:"table"},(0,i.yg)("tr",{parentName:"thead"},(0,i.yg)("th",{parentName:"tr",align:null},"Name"),(0,i.yg)("th",{parentName:"tr",align:null},"Type"),(0,i.yg)("th",{parentName:"tr",align:null},"Default"),(0,i.yg)("th",{parentName:"tr",align:null},"Description"))),(0,i.yg)("tbody",{parentName:"table"},(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("inlineCode",{parentName:"td"},"animation")),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("inlineCode",{parentName:"td"},"boolean")," or ",(0,i.yg)("inlineCode",{parentName:"td"},"{ duration?: number; }")),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("inlineCode",{parentName:"td"},"{ duration: 2000 }")),(0,i.yg)("td",{parentName:"tr",align:null},"Animation duration")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("inlineCode",{parentName:"td"},"color")),(0,i.yg)("td",{parentName:"tr",align:null},"string"),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("inlineCode",{parentName:"td"},"secondary")),(0,i.yg)("td",{parentName:"tr",align:null},"Color for linear progress.")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("inlineCode",{parentName:"td"},"style")),(0,i.yg)("td",{parentName:"tr",align:null},"View Style"),(0,i.yg)("td",{parentName:"tr",align:null}),(0,i.yg)("td",{parentName:"tr",align:null},"Add additional styling for linear progress component.")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("inlineCode",{parentName:"td"},"trackColor")),(0,i.yg)("td",{parentName:"tr",align:null},"string"),(0,i.yg)("td",{parentName:"tr",align:null}),(0,i.yg)("td",{parentName:"tr",align:null},"Track color for linear progress.")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("inlineCode",{parentName:"td"},"value")),(0,i.yg)("td",{parentName:"tr",align:null},"number"),(0,i.yg)("td",{parentName:"tr",align:null}),(0,i.yg)("td",{parentName:"tr",align:null},"The value of the progress indicator for the determinate variant. Value between 0 and 1.")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("inlineCode",{parentName:"td"},"variant")),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("inlineCode",{parentName:"td"},"determinate")," or ",(0,i.yg)("inlineCode",{parentName:"td"},"indeterminate")),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("inlineCode",{parentName:"td"},"value === undefined ? 'indeterminate' : 'determinate'")),(0,i.yg)("td",{parentName:"tr",align:null},"Type of button."))))),(0,i.yg)("h2",{id:"playground"},"Playground"),(0,i.yg)(g.A,{mdxType:"Play"}))}N.isMDXComponent=!0},18411:()=>{},26795:(e,t,r)=>{"use strict";r.d(t,{A:()=>c});var a=r(9668),n=r(96540),i=r(91010),s=r(32594),o=r(20018),l=r(96109),p=r(11245),g=r(34397),d=r(50546),m=r(25407);const c=function(e){var t=e.params,r=e.containerStyle,c=void 0===r?{}:r;return n.createElement(i.A,{fallback:n.createElement(n.Fragment,null,"Loading...")},(function(){return n.createElement(d.q9.Provider,null,n.createElement(d.Oy,{initialMetrics:m.Y},n.createElement("div",{style:Object.assign({border:"1px solid var(--ifm-color-emphasis-200)",borderRadius:"var(--ifm-global-radius)",position:"relative"},c)},n.createElement(s.A,(0,a.A)({},t.compilerProps,{minHeight:62,placeholder:o.A}))),n.createElement(l.A,{msg:t.errorProps.msg,isPopup:!0}),n.createElement(p.A,t.knobProps),n.createElement(l.A,t.errorProps),n.createElement(g.w,t.actions)))}))}},68260:()=>{}}]);