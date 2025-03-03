(self.webpackChunkrne_website=self.webpackChunkrne_website||[]).push([[89849],{1547:(e,t,n)=>{"use strict";n.d(t,{A:()=>a});const a=n.p+"assets/fonts/MaterialIcons-120b4c7bbd155bd0a04dc37d334baced.ttf"},14628:(e,t,n)=>{"use strict";n.d(t,{A:()=>a});const a=n.p+"assets/fonts/MaterialCommunityIcons-5d42b4e60858731e7b6504400f7e3d8e.ttf"},18411:()=>{},26795:(e,t,n)=>{"use strict";n.d(t,{A:()=>y});var a=n(9668),r=n(96540),l=n(91010),o=n(32594),p=n(20018),i=n(96109),d=n(11245),s=n(34397),g=n(50546),m=n(25407);const y=function(e){var t=e.params,n=e.containerStyle,y=void 0===n?{}:n;return r.createElement(l.A,{fallback:r.createElement(r.Fragment,null,"Loading...")},(function(){return r.createElement(g.q9.Provider,null,r.createElement(g.Oy,{initialMetrics:m.Y},r.createElement("div",{style:Object.assign({border:"1px solid var(--ifm-color-emphasis-200)",borderRadius:"var(--ifm-global-radius)",position:"relative"},y)},r.createElement(o.A,(0,a.A)({},t.compilerProps,{minHeight:62,placeholder:p.A}))),r.createElement(i.A,{msg:t.errorProps.msg,isPopup:!0}),r.createElement(d.A,t.knobProps),r.createElement(i.A,t.errorProps),r.createElement(s.w,t.actions)))}))}},54807:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>N,contentTitle:()=>u,default:()=>v,frontMatter:()=>y,metadata:()=>c,toc:()=>h});var a=n(9668),r=n(21367),l=(n(96540),n(15680)),o=n(70926),p=(n(21518),n(46061),["components"]),i={toc:[{value:"Interaction methods",id:"interaction-methods",level:3},{value:"Calling methods on Input",id:"calling-methods-on-input",level:3}]},d="wrapper";function s(e){var t=e.components,n=(0,r.A)(e,p);return(0,l.yg)(d,(0,a.A)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,l.yg)("h3",{id:"interaction-methods"},"Interaction methods"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"method"),(0,l.yg)("th",{parentName:"tr",align:null},"description"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"focus"),(0,l.yg)("td",{parentName:"tr",align:null},"Focuses the Input")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"blur"),(0,l.yg)("td",{parentName:"tr",align:null},"Removes focus from the Input")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"clear"),(0,l.yg)("td",{parentName:"tr",align:null},"Clears the text in the Input")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"isFocused"),(0,l.yg)("td",{parentName:"tr",align:null},"Returns ",(0,l.yg)("inlineCode",{parentName:"td"},"true")," or ",(0,l.yg)("inlineCode",{parentName:"td"},"false")," if the Input is focused")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"setNativeProps"),(0,l.yg)("td",{parentName:"tr",align:null},"Sets props directly on the react native component")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"shake"),(0,l.yg)("td",{parentName:"tr",align:null},"Shakes the input for error feedback")))),(0,l.yg)("h3",{id:"calling-methods-on-input"},"Calling methods on Input"),(0,l.yg)("p",null,"Store a reference to the Input in your component by using the ref prop\nprovided by React\n(",(0,l.yg)("a",{parentName:"p",href:"https://reactjs.org/docs/refs-and-the-dom.html"},"see docs"),"):"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-js"},"const input = React.createRef();\n\n<Input\n  ref={input}\n  ...\n/>\n")),(0,l.yg)("p",null,"You can then use the Input methods like this:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-js"},"input.current.focus();\ninput.current.blur();\ninput.current.clear();\ninput.current.isFocused();\ninput.current.setNativeProps({ value: 'hello' });\ninput.current.shake();\n")),(0,l.yg)("div",{className:"snack-player","data-snack-name":"RNE Input","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20View%2C%20Text%20%7D%20from%20'react-native'%3B%0Aimport%20%7B%20Input%2C%20Icon%20%7D%20from%20'%40rneui%2Fthemed'%3B%0A%0Aexport%20default%20()%20%3D%3E%20%7B%0A%0Areturn%20(%0A%20%20%3C%3E%0A%20%20%20%20%3CInput%0A%20%20%20%20%20%20placeholder%3D'BASIC%20INPUT'%0A%20%20%20%20%2F%3E%0A%0A%20%20%20%20%3CInput%0A%20%20%20%20%20%20placeholder%3D'INPUT%20WITH%20ICON'%0A%20%20%20%20%20%20leftIcon%3D%7B%7B%20type%3A%20'font-awesome'%2C%20name%3A%20'chevron-left'%20%7D%7D%0A%20%20%20%20%2F%3E%0A%0A%20%20%20%20%3CInput%0A%20%20%20%20%20%20placeholder%3D'INPUT%20WITH%20CUSTOM%20ICON'%0A%20%20%20%20%20%20leftIcon%3D%7B%0A%20%20%20%20%20%20%20%20%3CIcon%0A%20%20%20%20%20%20%20%20%20%20name%3D'user'%0A%20%20%20%20%20%20%20%20%20%20size%3D%7B24%7D%0A%20%20%20%20%20%20%20%20%20%20color%3D'black'%0A%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%2F%3E%0A%0A%0A%20%20%20%20%3CInput%0A%20%20%20%20%20%20placeholder%3D%22Comment%22%0A%20%20%20%20%20%20leftIcon%3D%7B%7B%20type%3A%20'font-awesome'%2C%20name%3A%20'comment'%20%7D%7D%0A%20%20%20%20%20%20onChangeText%3D%7Bvalue%20%3D%3E%20this.setState(%7B%20comment%3A%20value%20%7D)%7D%0A%20%20%20%20%20%20%2F%3E%0A%0A%0A%20%20%20%20%3CInput%0A%20%20%20%20%20%20placeholder%3D'INPUT%20WITH%20ERROR%20MESSAGE'%0A%20%20%20%20%20%20errorStyle%3D%7B%7B%20color%3A%20'red'%20%7D%7D%0A%20%20%20%20%20%20errorMessage%3D'ENTER%20A%20VALID%20ERROR%20HERE'%0A%20%20%20%20%2F%3E%0A%0A%20%20%20%20%3CInput%20placeholder%3D%22Password%22%20secureTextEntry%3D%7Btrue%7D%20%2F%3E%0A%20%20%3C%2F%3E%0A)%3B%0A%7D%3B","data-snack-dependencies":"@rneui/themed,@rneui/base","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}))}s.isMDXComponent=!0;var g=n(82832),m=["components"],y={id:"input",title:"Input"},u=void 0,c={unversionedId:"components/input",id:"version-4.0.0-rc.4/components/input",title:"Input",description:"Import",source:"@site/versioned_docs/version-4.0.0-rc.4/components/Input.mdx",sourceDirName:"components",slug:"/components/input",permalink:"/react-native-elements-next/docs/4.0.0-rc.4/components/input",draft:!1,editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/versioned_docs/version-4.0.0-rc.4/components/Input.mdx",tags:[],version:"4.0.0-rc.4",frontMatter:{id:"input",title:"Input"},sidebar:"docs",previous:{title:"Image",permalink:"/react-native-elements-next/docs/4.0.0-rc.4/components/image"},next:{title:"LinearProgress",permalink:"/react-native-elements-next/docs/4.0.0-rc.4/components/linearprogress"}},N={},h=[{value:"Import",id:"import",level:2},{value:"Usage",id:"usage",level:2},{value:"Props",id:"props",level:2},{value:"Playground",id:"playground",level:2}],b={toc:h},f="wrapper";function v(e){var t=e.components,n=(0,r.A)(e,m);return(0,l.yg)(f,(0,a.A)({},b,n,{components:t,mdxType:"MDXLayout"}),(0,l.yg)(o.y,{mdxType:"IconsStyle"}),(0,l.yg)("h2",{id:"import"},"Import"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-tsx"},'import { Input } from "@rneui/themed";\n')),(0,l.yg)("h2",{id:"usage"},"Usage"),(0,l.yg)(s,{mdxType:"Usage"}),(0,l.yg)("h2",{id:"props"},"Props"),(0,l.yg)("admonition",{type:"note"},(0,l.yg)("p",{parentName:"admonition"},"Includes all ",(0,l.yg)("a",{parentName:"p",href:"https://reactnative.dev/docs/textinput#props"},"React Native TextInput"),", ",(0,l.yg)("a",{parentName:"p",href:"https://reactnative.dev/docs/view#props"},"View")," props.")),(0,l.yg)("div",{class:"table-responsive"},(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Name"),(0,l.yg)("th",{parentName:"tr",align:null},"Type"),(0,l.yg)("th",{parentName:"tr",align:null},"Default"),(0,l.yg)("th",{parentName:"tr",align:null},"Description"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"InputComponent")),(0,l.yg)("td",{parentName:"tr",align:null},"React Component"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"component that will be rendered in place of the React Native TextInput")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"containerStyle")),(0,l.yg)("td",{parentName:"tr",align:null},"View Style"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"Style for container")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"disabled")),(0,l.yg)("td",{parentName:"tr",align:null},"boolean"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"disables the input component")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"disabledInputStyle")),(0,l.yg)("td",{parentName:"tr",align:null},"Text Style"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"disabled styles that will be passed to the style props of the React Native TextInput")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"errorMessage")),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"Error message to be displayed under the input field")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"errorProps")),(0,l.yg)("td",{parentName:"tr",align:null},"object"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"props to be passed to the React Native Text component used to display the error message")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"errorStyle")),(0,l.yg)("td",{parentName:"tr",align:null},"Text Style"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"add styling to error message")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"inputContainerStyle")),(0,l.yg)("td",{parentName:"tr",align:null},"View Style"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"styling for Input Component Container")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"inputStyle")),(0,l.yg)("td",{parentName:"tr",align:null},"Text Style"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"Style for Input Component")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"label")),(0,l.yg)("td",{parentName:"tr",align:null},"ReactNode"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"add a label on top of the input")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"labelProps")),(0,l.yg)("td",{parentName:"tr",align:null},"object"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"props to be passed to the React Native Text component used to display the label or React Component used instead of simple string in label prop")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"labelStyle")),(0,l.yg)("td",{parentName:"tr",align:null},"Text Style"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"styling for the label; You can only use this if label is a string")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"leftIcon")),(0,l.yg)("td",{parentName:"tr",align:null},"IconNode"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"displays an icon on the left")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"leftIconContainerStyle")),(0,l.yg)("td",{parentName:"tr",align:null},"View Style"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"styling for left Icon Component container")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"renderErrorMessage")),(0,l.yg)("td",{parentName:"tr",align:null},"boolean"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"If the error message container should be rendered (take up vertical space). If false, when showing errorMessage, the layout will shift to add it at that time.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"rightIcon")),(0,l.yg)("td",{parentName:"tr",align:null},"IconNode"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"displays an icon on the right")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"rightIconContainerStyle")),(0,l.yg)("td",{parentName:"tr",align:null},"View Style"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"styling for right Icon Component container")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"shake")),(0,l.yg)("td",{parentName:"tr",align:null},"Function"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"Shake method"))))),(0,l.yg)("h2",{id:"playground"},"Playground"),(0,l.yg)(g.A,{mdxType:"Play"}))}v.isMDXComponent=!0},68260:()=>{},70926:(e,t,n)=>{"use strict";n.d(t,{y:()=>i});var a=n(96540),r=n(3352),l=n(14628),o=n(1547),p=n(83564),i=function(){return a.createElement(r.A,null,a.createElement("style",{type:"text/css"},"\n          @font-face {\n            font-family: 'MaterialIcons';\n            src: url("+o.A+") format('truetype');\n          }\n          @font-face {\n            font-family: 'FontAwesome';\n            src: url("+p.A+") format('truetype');\n          }\n          @font-face {\n            font-family: 'MaterialCommunityIcons';\n            src: url("+l.A+") format('truetype');\n          }\n        "))}},82832:(e,t,n)=>{"use strict";n.d(t,{A:()=>d});var a=n(96540),r=n(64270),l=n(66114),o=n(26795),p=n(10171),i=n(11451);const d=function(){var e=(0,p.A)({componentName:"Input",props:{containerStyle:{type:i.B.Object,value:"{}"},disabled:{type:i.B.Boolean,value:!1},disabledInputStyle:{type:i.B.Object,value:'{background:"#ddd"}'},inputContainerStyle:{type:i.B.Object,value:"{}"},errorMessage:{type:i.B.String,value:"Oops! that's not correct."},errorStyle:{type:i.B.Object,value:"{}"},errorProps:{type:i.B.Object,description:"props to be passed to the React Native Text component used to display the error message (optional)",value:"{}"},inputStyle:{type:i.B.Object,value:"{}"},label:{type:i.B.ReactNode,value:'"User Form"',description:"string OR React element or component\t"},labelStyle:{type:i.B.Object,value:"{}"},labelProps:{type:i.B.Object,value:"{}",description:"{...Text props} OR passed component props\t"},leftIcon:{type:i.B.ReactNode,value:'<Icon name="account-outline" size={20}/>'},leftIconContainerStyle:{type:i.B.Object,value:"{}"},rightIcon:{type:i.B.ReactNode,value:'<Icon name="close" size={20}/>'},rightIconContainerStyle:{type:i.B.Object,value:"{}"},renderErrorMessage:{type:i.B.Boolean,value:!1,description:"If the error message container should be rendered (take up vertical space). If false, when showing errorMessage, the layout will shift to add it at that time."},InputComponent:{type:i.B.ReactNode},placeholder:{type:i.B.String,value:"Enter Name"}},scope:{Input:r.Input,Icon:l.Ay},imports:{"@rneui/base":{named:["Input"]},"react-native-vector-icons/MaterialCommunityIcons":{default:"Icon"}}});return a.createElement(a.Fragment,null,a.createElement(o.A,{params:e}))}},83564:(e,t,n)=>{"use strict";n.d(t,{A:()=>a});const a=n.p+"assets/fonts/FontAwesome-1e59d2330b4c6deb84b340635ed36249.ttf"}}]);