(self.webpackChunkrne_website=self.webpackChunkrne_website||[]).push([[41785],{1258:(e,t,n)=>{"use strict";n.d(t,{A:()=>l});var r=n(96540),a=n(64270),s=n(26795),i=n(10171),o=n(11451);const l=function(){var e=(0,i.A)({componentName:"LinearProgress",props:{value:{type:o.B.Number,value:0},variant:{type:o.B.Enum,options:{determinate:"determinate",indeterminate:"indeterminate"},value:"indeterminate"},style:{type:o.B.Object,value:'{width: "90%"}'},color:{type:o.B.String,value:"secondary"},trackColor:{type:o.B.String,value:""}},scope:{LinearProgress:a.LinearProgress},imports:{"@rneui/base":{named:["LinearProgress"]}}});return r.createElement(r.Fragment,null,r.createElement(s.A,{params:e}))}},1547:(e,t,n)=>{"use strict";n.d(t,{A:()=>r});const r=n.p+"assets/fonts/MaterialIcons-120b4c7bbd155bd0a04dc37d334baced.ttf"},14628:(e,t,n)=>{"use strict";n.d(t,{A:()=>r});const r=n.p+"assets/fonts/MaterialCommunityIcons-5d42b4e60858731e7b6504400f7e3d8e.ttf"},18200:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>A,contentTitle:()=>u,default:()=>N,frontMatter:()=>c,metadata:()=>y,toc:()=>D});var r=n(9668),a=n(21367),s=(n(96540),n(15680)),i=n(70926),o=(n(21518),n(46061),["components"]),l={toc:[]},p="wrapper";function d(e){var t=e.components,n=(0,a.A)(e,o);return(0,s.yg)(p,(0,r.A)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,s.yg)("div",{className:"snack-player","data-snack-name":"RNE Linear Progress","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20View%2C%20Text%20%7D%20from%20'react-native'%3B%0Aimport%20%7B%20Button%2C%20LinearProgress%20%7D%20from%20'%40rneui%2Fthemed'%3B%0A%0Aconst%20LinearProgressAPI%3A%20React.FunctionComponent%20%3D%20()%20%3D%3E%20%7B%0Aconst%20%5Bprogress%2C%20setProgress%5D%20%3D%20React.useState(0)%3B%0A%0AReact.useEffect(()%20%3D%3E%20%7B%0A%20%20let%20subs%20%3D%20true%3B%0A%20%20if%20(progress%20%3C%201%20%26%26%20progress%20!%3D%3D%200)%20%7B%0A%20%20%20%20setTimeout(()%20%3D%3E%20%7B%0A%20%20%20%20%20%20if%20(subs)%20%7B%0A%20%20%20%20%20%20%20%20setProgress(progress%20%2B%200.1)%3B%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%2C%20100)%3B%0A%20%20%7D%0A%20%20return%20()%20%3D%3E%20%7B%0A%20%20%20%20subs%20%3D%20false%3B%0A%20%20%7D%3B%0A%7D%2C%20%5Bprogress%5D)%3B%0A%0Areturn%20(%0A%20%20%3CView%3E%0A%20%20%20%20%3CView%0A%20%20%20%20%20%20style%3D%7B%7B%0A%20%20%20%20%20%20%20%20margin%3A%2010%2C%0A%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%3E%0A%20%20%20%20%20%20%3CText%3EIndeterminate%20Variant%20%3C%2FText%3E%0A%20%20%20%20%20%20%3CLinearProgress%20style%3D%7B%7B%20marginVertical%3A%2010%20%7D%7D%20%2F%3E%0A%20%20%20%20%20%20%3CText%3EIndeterminate%20Variant%20with%20color%3C%2FText%3E%0A%20%20%20%20%20%20%3CLinearProgress%20style%3D%7B%7B%20marginVertical%3A%2010%20%7D%7D%20color%3D%22red%22%20%2F%3E%0A%20%20%20%20%20%20%3CText%3EDeterminate%20Variant%3C%2FText%3E%0A%20%20%20%20%20%20%3CLinearProgress%0A%20%20%20%20%20%20%20%20style%3D%7B%7B%20marginVertical%3A%2010%20%7D%7D%0A%20%20%20%20%20%20%20%20value%3D%7Bprogress%7D%0A%20%20%20%20%20%20%20%20variant%3D%22determinate%22%0A%20%20%20%20%20%20%2F%3E%0A%0A%20%20%20%20%20%20%3CButton%0A%20%20%20%20%20%20%20%20disabled%3D%7Bprogress%20%3E%200%7D%0A%20%20%20%20%20%20%20%20onPress%3D%7B()%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20%20%20setProgress(0.00001)%3B%0A%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20title%3D%7B'Start%20Progress'%7D%0A%20%20%20%20%20%20%20%20containerStyle%3D%7B%7B%20margin%3A%2010%20%7D%7D%0A%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%3CButton%0A%20%20%20%20%20%20%20%20disabled%3D%7Bprogress%20%3D%3D%3D%200%7D%0A%20%20%20%20%20%20%20%20onPress%3D%7B()%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20%20%20setProgress(0)%3B%0A%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20title%3D%7B'Restart'%7D%0A%20%20%20%20%20%20%20%20containerStyle%3D%7B%7B%20margin%3A%2010%20%7D%7D%0A%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%3C%2FView%3E%0A%20%20%3C%2FView%3E%0A)%3B%0A%7D%3B%0A%0Aexport%20default%20LinearProgressAPI%3B","data-snack-dependencies":"@rneui/themed,@rneui/base","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}))}d.isMDXComponent=!0;var m=n(1258),g=["components"],c={id:"linearprogress",title:"LinearProgress"},u=void 0,y={unversionedId:"components/linearprogress",id:"version-4.0.0-rc.6/components/linearprogress",title:"LinearProgress",description:"Progress indicators inform users about the status of ongoing processes, such as loading an app, submitting a form, or saving updates.",source:"@site/versioned_docs/version-4.0.0-rc.6/components/LinearProgress.mdx",sourceDirName:"components",slug:"/components/linearprogress",permalink:"/react-native-elements-next/docs/4.0.0-rc.6/components/linearprogress",draft:!1,editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/versioned_docs/version-4.0.0-rc.6/components/LinearProgress.mdx",tags:[],version:"4.0.0-rc.6",frontMatter:{id:"linearprogress",title:"LinearProgress"},sidebar:"docs",previous:{title:"Input",permalink:"/react-native-elements-next/docs/4.0.0-rc.6/components/input"},next:{title:"ListItem",permalink:"/react-native-elements-next/docs/4.0.0-rc.6/components/listitem"}},A={},D=[{value:"Import",id:"import",level:2},{value:"Usage",id:"usage",level:2},{value:"Props",id:"props",level:2},{value:"Playground",id:"playground",level:2}],v={toc:D},f="wrapper";function N(e){var t=e.components,n=(0,a.A)(e,g);return(0,s.yg)(f,(0,r.A)({},v,n,{components:t,mdxType:"MDXLayout"}),(0,s.yg)(i.y,{mdxType:"IconsStyle"}),(0,s.yg)("p",null,"Progress indicators inform users about the status of ongoing processes, such as loading an app, submitting a form, or saving updates.\nThey communicate an app\u2019s state and indicate available actions, such as whether users can navigate away from the current screen.\nAlso receives all ",(0,s.yg)("a",{parentName:"p",href:"https://reactnative.dev/docs/view#props"},"View")," props"),(0,s.yg)("h2",{id:"import"},"Import"),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-tsx"},'import { LinearProgress } from "@rneui/themed";\n')),(0,s.yg)("h2",{id:"usage"},"Usage"),(0,s.yg)(d,{mdxType:"Usage"}),(0,s.yg)("h2",{id:"props"},"Props"),(0,s.yg)("admonition",{type:"note"},(0,s.yg)("p",{parentName:"admonition"},"Includes all ",(0,s.yg)("a",{parentName:"p",href:"https://reactnative.dev/docs/view#props"},"View")," props.")),(0,s.yg)("div",{class:"table-responsive"},(0,s.yg)("table",null,(0,s.yg)("thead",{parentName:"table"},(0,s.yg)("tr",{parentName:"thead"},(0,s.yg)("th",{parentName:"tr",align:null},"Name"),(0,s.yg)("th",{parentName:"tr",align:null},"Type"),(0,s.yg)("th",{parentName:"tr",align:null},"Default"),(0,s.yg)("th",{parentName:"tr",align:null},"Description"))),(0,s.yg)("tbody",{parentName:"table"},(0,s.yg)("tr",{parentName:"tbody"},(0,s.yg)("td",{parentName:"tr",align:null},(0,s.yg)("inlineCode",{parentName:"td"},"animation")),(0,s.yg)("td",{parentName:"tr",align:null},(0,s.yg)("inlineCode",{parentName:"td"},"boolean")," ","|"," ",(0,s.yg)("inlineCode",{parentName:"td"},"{ duration?: number; }")),(0,s.yg)("td",{parentName:"tr",align:null},(0,s.yg)("inlineCode",{parentName:"td"},"{ duration: 2000 }")),(0,s.yg)("td",{parentName:"tr",align:null},"Animation duration")),(0,s.yg)("tr",{parentName:"tbody"},(0,s.yg)("td",{parentName:"tr",align:null},(0,s.yg)("inlineCode",{parentName:"td"},"color")),(0,s.yg)("td",{parentName:"tr",align:null},"string"),(0,s.yg)("td",{parentName:"tr",align:null},(0,s.yg)("inlineCode",{parentName:"td"},"secondary")),(0,s.yg)("td",{parentName:"tr",align:null},"Color for linear progress.")),(0,s.yg)("tr",{parentName:"tbody"},(0,s.yg)("td",{parentName:"tr",align:null},(0,s.yg)("inlineCode",{parentName:"td"},"style")),(0,s.yg)("td",{parentName:"tr",align:null},"View Style"),(0,s.yg)("td",{parentName:"tr",align:null}),(0,s.yg)("td",{parentName:"tr",align:null},"Add additional styling for linear progress component.")),(0,s.yg)("tr",{parentName:"tbody"},(0,s.yg)("td",{parentName:"tr",align:null},(0,s.yg)("inlineCode",{parentName:"td"},"trackColor")),(0,s.yg)("td",{parentName:"tr",align:null},"string"),(0,s.yg)("td",{parentName:"tr",align:null}),(0,s.yg)("td",{parentName:"tr",align:null},"Track color for linear progress.")),(0,s.yg)("tr",{parentName:"tbody"},(0,s.yg)("td",{parentName:"tr",align:null},(0,s.yg)("inlineCode",{parentName:"td"},"value")),(0,s.yg)("td",{parentName:"tr",align:null},"number"),(0,s.yg)("td",{parentName:"tr",align:null}),(0,s.yg)("td",{parentName:"tr",align:null},"The value of the progress indicator for the determinate variant. Value between 0 and 1.")),(0,s.yg)("tr",{parentName:"tbody"},(0,s.yg)("td",{parentName:"tr",align:null},(0,s.yg)("inlineCode",{parentName:"td"},"variant")),(0,s.yg)("td",{parentName:"tr",align:null},(0,s.yg)("inlineCode",{parentName:"td"},"determinate")," ","|"," ",(0,s.yg)("inlineCode",{parentName:"td"},"indeterminate")),(0,s.yg)("td",{parentName:"tr",align:null},(0,s.yg)("inlineCode",{parentName:"td"},"value === undefined ? 'indeterminate' : 'determinate'")),(0,s.yg)("td",{parentName:"tr",align:null},"Type of button."))))),(0,s.yg)("h2",{id:"playground"},"Playground"),(0,s.yg)(m.A,{mdxType:"Play"}))}N.isMDXComponent=!0},18411:()=>{},26795:(e,t,n)=>{"use strict";n.d(t,{A:()=>c});var r=n(9668),a=n(96540),s=n(91010),i=n(32594),o=n(20018),l=n(96109),p=n(11245),d=n(34397),m=n(50546),g=n(25407);const c=function(e){var t=e.params,n=e.containerStyle,c=void 0===n?{}:n;return a.createElement(s.A,{fallback:a.createElement(a.Fragment,null,"Loading...")},(function(){return a.createElement(m.q9.Provider,null,a.createElement(m.Oy,{initialMetrics:g.Y},a.createElement("div",{style:Object.assign({border:"1px solid var(--ifm-color-emphasis-200)",borderRadius:"var(--ifm-global-radius)",position:"relative"},c)},a.createElement(i.A,(0,r.A)({},t.compilerProps,{minHeight:62,placeholder:o.A}))),a.createElement(l.A,{msg:t.errorProps.msg,isPopup:!0}),a.createElement(p.A,t.knobProps),a.createElement(l.A,t.errorProps),a.createElement(d.w,t.actions)))}))}},68260:()=>{},70926:(e,t,n)=>{"use strict";n.d(t,{y:()=>l});var r=n(96540),a=n(3352),s=n(14628),i=n(1547),o=n(83564),l=function(){return r.createElement(a.A,null,r.createElement("style",{type:"text/css"},"\n          @font-face {\n            font-family: 'MaterialIcons';\n            src: url("+i.A+") format('truetype');\n          }\n          @font-face {\n            font-family: 'FontAwesome';\n            src: url("+o.A+") format('truetype');\n          }\n          @font-face {\n            font-family: 'MaterialCommunityIcons';\n            src: url("+s.A+") format('truetype');\n          }\n        "))}},83564:(e,t,n)=>{"use strict";n.d(t,{A:()=>r});const r=n.p+"assets/fonts/FontAwesome-1e59d2330b4c6deb84b340635ed36249.ttf"}}]);