(self.webpackChunkrne_website=self.webpackChunkrne_website||[]).push([[98411],{1547:(e,t,n)=>{"use strict";n.d(t,{A:()=>a});const a=n.p+"assets/fonts/MaterialIcons-120b4c7bbd155bd0a04dc37d334baced.ttf"},14628:(e,t,n)=>{"use strict";n.d(t,{A:()=>a});const a=n.p+"assets/fonts/MaterialCommunityIcons-5d42b4e60858731e7b6504400f7e3d8e.ttf"},18411:()=>{},26795:(e,t,n)=>{"use strict";n.d(t,{A:()=>y});var a=n(9668),l=n(96540),r=n(91010),o=n(32594),i=n(20018),d=n(96109),g=n(11245),p=n(34397),u=n(50546),s=n(25407);const y=function(e){var t=e.params,n=e.containerStyle,y=void 0===n?{}:n;return l.createElement(r.A,{fallback:l.createElement(l.Fragment,null,"Loading...")},(function(){return l.createElement(u.q9.Provider,null,l.createElement(u.Oy,{initialMetrics:s.Y},l.createElement("div",{style:Object.assign({border:"1px solid var(--ifm-color-emphasis-200)",borderRadius:"var(--ifm-global-radius)",position:"relative"},y)},l.createElement(o.A,(0,a.A)({},t.compilerProps,{minHeight:62,placeholder:i.A}))),l.createElement(d.A,{msg:t.errorProps.msg,isPopup:!0}),l.createElement(g.A,t.knobProps),l.createElement(d.A,t.errorProps),l.createElement(p.w,t.actions)))}))}},28112:(e,t,n)=>{"use strict";n.d(t,{A:()=>d});var a=n(96540),l=n(64270),r=n(26795),o=n(10171),i=n(11451);const d=function(){var e=(0,o.A)({componentName:"ButtonGroup",props:{buttonStyle:{type:i.B.Object,value:"{width:100}"},buttonContainerStyle:{type:i.B.Object,value:"{}"},buttons:{type:i.B.Array,value:"['Hello', 'World', 'React',\"Native\",\"Elements\"]"},Component:{type:i.B.ReactNode,description:"React Native Component\tTouchableOpacity (ios) or TouchableNativeFeedback (android)",value:null},containerStyle:{type:i.B.Object,value:"{}"},disabled:{type:i.B.Array,description:"boolean OR number[]. Controls if buttons are disabled. Setting true makes all of them disabled, while using an array only makes those indices disabled.",value:"[3,4]"},disabledStyle:{type:i.B.Object,value:"{}"},disabledTextStyle:{type:i.B.Object,value:"{}"},disabledSelectedStyle:{type:i.B.Object,value:"{}"},disabledSelectedTextStyle:{type:i.B.Object,value:"{}"},innerBorderStyle:{type:i.B.Object,value:"{}"},onPress:{type:i.B.Function,value:"(selectedIdx) => setSelectedIndex(selectedIdx)",propHook:{what:"selectedIdx",into:"selectedIndex"}},selectMultiple:{type:i.B.Boolean,value:!1},selectedButtonStyle:{type:i.B.Object,value:"{}"},selectedIndex:{type:i.B.Number,value:"1",stateful:!0},selectedIndexes:{type:i.B.Array,value:"[]",stateful:!0},selectedTextStyle:{type:i.B.Object,value:"{}"},textStyle:{type:i.B.Object,value:"{}"},underlayColor:{type:i.B.String,value:null},vertical:{type:i.B.Boolean,value:!1}},scope:{ButtonGroup:l.ButtonGroup},imports:{"@rneui/base":{named:["ButtonGroup"]}}});return a.createElement(a.Fragment,null,a.createElement(r.A,{params:e}))}},68260:()=>{},70926:(e,t,n)=>{"use strict";n.d(t,{y:()=>d});var a=n(96540),l=n(3352),r=n(14628),o=n(1547),i=n(83564),d=function(){return a.createElement(l.A,null,a.createElement("style",{type:"text/css"},"\n          @font-face {\n            font-family: 'MaterialIcons';\n            src: url("+o.A+") format('truetype');\n          }\n          @font-face {\n            font-family: 'FontAwesome';\n            src: url("+i.A+") format('truetype');\n          }\n          @font-face {\n            font-family: 'MaterialCommunityIcons';\n            src: url("+r.A+") format('truetype');\n          }\n        "))}},83564:(e,t,n)=>{"use strict";n.d(t,{A:()=>a});const a=n.p+"assets/fonts/FontAwesome-1e59d2330b4c6deb84b340635ed36249.ttf"},91047:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>N,contentTitle:()=>m,default:()=>C,frontMatter:()=>y,metadata:()=>c,toc:()=>b});var a=n(9668),l=n(21367),r=(n(96540),n(15680)),o=n(70926),i=(n(21518),n(46061),["components"]),d={toc:[{value:"Using components",id:"using-components",level:3}]},g="wrapper";function p(e){var t=e.components,n=(0,l.A)(e,i);return(0,r.yg)(g,(0,a.A)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h3",{id:"using-components"},"Using components"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},"constructor () {\n  super()\n  this.state = {\n    selectedIndex: 2\n  }\n  this.updateIndex = this.updateIndex.bind(this)\n}\nupdateIndex (selectedIndex) {\n  this.setState({selectedIndex})\n}\n\nconst component1 = () => <Text>Hello</Text>\nconst component2 = () => <Text>World</Text>\nconst component3 = () => <Text>ButtonGroup</Text>\n\nrender () {\n  const buttons = [{ element: component1 }, { element: component2 }, { element: component3 }]\n  const { selectedIndex } = this.state\n  return (\n    <ButtonGroup\n      onPress={this.updateIndex}\n      selectedIndex={selectedIndex}\n      buttons={buttons}\n      containerStyle={{height: 100}} />\n  )\n}\n")),(0,r.yg)("div",{className:"snack-player","data-snack-name":"RNE ButtonGroup","data-snack-description":"Example usage","data-snack-code":"import%20React%2C%20%7BuseState%7D%20from%20'react'%0Aimport%20%7B%20ButtonGroup%20%7D%20from%20'%40rneui%2Fthemed'%0Aimport%20%7B%20Text%2C%20StyleSheet%20%7D%20from%20'react-native'%3B%0A%0Aexport%20default()%20%3D%3E%20%7B%0Aconst%20%5BselectedIndex%2C%20setSelectedIndex%5D%20%3D%20useState(0)%3B%0Aconst%20%5BselectedIndexes%2C%20setSelectedIndexes%5D%20%3D%20useState(%5B0%2C%202%2C%203%5D)%3B%0Areturn%20(%0A%20%20%3C%3E%0A%20%20%20%20%3CText%20style%3D%7Bstyles.subHeader%7D%3EUsing%20Strings%3C%2FText%3E%0A%20%20%20%20%3CButtonGroup%0A%20%20%20%20%20%20buttons%3D%7B%5B'SIMPLE'%2C%20'BUTTON'%2C%20'GROUP'%5D%7D%0A%20%20%20%20%20%20selectedIndex%3D%7BselectedIndex%7D%0A%20%20%20%20%20%20onPress%3D%7B(value)%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20setSelectedIndex(value)%3B%0A%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20containerStyle%3D%7B%7B%20marginBottom%3A%2020%20%7D%7D%0A%20%20%20%20%2F%3E%0A%20%20%20%20%3CButtonGroup%0A%20%20%20%20%20%20buttons%3D%7B%5B'Multiple'%2C%20'Select'%2C%20'Button'%2C%20'Group'%5D%7D%0A%20%20%20%20%20%20selectMultiple%0A%20%20%20%20%20%20selectedIndexes%3D%7BselectedIndexes%7D%0A%20%20%20%20%20%20onPress%3D%7B(value)%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20setSelectedIndexes(value)%3B%0A%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20containerStyle%3D%7B%7B%20marginBottom%3A%2020%20%7D%7D%0A%20%20%20%20%2F%3E%0A%20%20%20%20%3CText%20style%3D%7Bstyles.subHeader%7D%3EUsing%20Components%3C%2FText%3E%0A%20%20%3C%2F%3E%0A)%0A%7D%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0AsubHeader%3A%20%7B%0A%20%20backgroundColor%20%3A%20%22%232089dc%22%2C%0A%20%20color%20%3A%20%22white%22%2C%0A%20%20textAlign%20%3A%20%22center%22%2C%0A%20%20paddingVertical%20%3A%205%2C%0A%20%20marginBottom%20%3A%2010%0A%7D%0A%7D)","data-snack-dependencies":"@rneui/themed,@rneui/base","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}))}p.isMDXComponent=!0;var u=n(28112),s=["components"],y={id:"buttongroup",title:"ButtonGroup"},m=void 0,c={unversionedId:"components/buttongroup",id:"version-4.0.0-rc.5/components/buttongroup",title:"ButtonGroup",description:"ButtonGroup is a linear set of segments, each of which function as a button that can display a different view/or perform a different action.",source:"@site/versioned_docs/version-4.0.0-rc.5/components/ButtonGroup.mdx",sourceDirName:"components",slug:"/components/buttongroup",permalink:"/docs/4.0.0-rc.5/components/buttongroup",draft:!1,editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/versioned_docs/version-4.0.0-rc.5/components/ButtonGroup.mdx",tags:[],version:"4.0.0-rc.5",frontMatter:{id:"buttongroup",title:"ButtonGroup"},sidebar:"docs",previous:{title:"Button",permalink:"/docs/4.0.0-rc.5/components/button"},next:{title:"Card",permalink:"/docs/4.0.0-rc.5/components/card"}},N={},b=[{value:"Import",id:"import",level:2},{value:"Usage",id:"usage",level:2},{value:"Props",id:"props",level:2},{value:"Playground",id:"playground",level:2}],h={toc:b},f="wrapper";function C(e){var t=e.components,n=(0,l.A)(e,s);return(0,r.yg)(f,(0,a.A)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)(o.y,{mdxType:"IconsStyle"}),(0,r.yg)("p",null,"ButtonGroup is a linear set of segments, each of which function as a button that can display a different view/or perform a different action.\nUse a ButtonGroup to offer choices that are closely related but mutually exclusive.\nThis component inherits ",(0,r.yg)("a",{parentName:"p",href:"https://reactnative.dev/docs/touchablehighlight.html"},"all native TouchableHighlight and TouchableOpacity props that come with React Native TouchableHighlight or TouchableOpacity elements"),"."),(0,r.yg)("h2",{id:"import"},"Import"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx"},'import { ButtonGroup } from "@rneui/themed";\n')),(0,r.yg)("h2",{id:"usage"},"Usage"),(0,r.yg)(p,{mdxType:"Usage"}),(0,r.yg)("h2",{id:"props"},"Props"),(0,r.yg)("div",{class:"table-responsive"},(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Name"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Default"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"Component")),(0,r.yg)("td",{parentName:"tr",align:null},"React Component"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"Choose other button component such as TouchableOpacity.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"activeOpacity")),(0,r.yg)("td",{parentName:"tr",align:null},"number"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"Add active opacity to the button in buttonGroup.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"button")),(0,r.yg)("td",{parentName:"tr",align:null},"object"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"Button for the component.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"buttonContainerStyle")),(0,r.yg)("td",{parentName:"tr",align:null},"View Style"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"Specify styling for button containers.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"buttonStyle")),(0,r.yg)("td",{parentName:"tr",align:null},"View Style"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"Specify styling for button.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"buttons")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"(string")," ","|"," ",(0,r.yg)("inlineCode",{parentName:"td"},"ButtonComponent")," ","|"," ",(0,r.yg)("inlineCode",{parentName:"td"},"ButtonObject)[]")),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"Array of buttons for component (required), if returning a component, must be an object with { element: componentName }.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"containerStyle")),(0,r.yg)("td",{parentName:"tr",align:null},"View Style"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"Specify styling for main button container.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"disabled")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"boolean")," ","|"," ",(0,r.yg)("inlineCode",{parentName:"td"},"number[]")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"false")),(0,r.yg)("td",{parentName:"tr",align:null},"Controls if buttons are disabled. Setting ",(0,r.yg)("inlineCode",{parentName:"td"},"true")," makes all of them disabled, while using an array only makes those indices disabled.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"disabledSelectedStyle")),(0,r.yg)("td",{parentName:"tr",align:null},"View Style"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"Styling for each selected button when disabled.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"disabledSelectedTextStyle")),(0,r.yg)("td",{parentName:"tr",align:null},"Text Style"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"Styling for the text of each selected button when disabled.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"disabledStyle")),(0,r.yg)("td",{parentName:"tr",align:null},"View Style"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"Styling for each button when disabled.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"disabledTextStyle")),(0,r.yg)("td",{parentName:"tr",align:null},"Text Style"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"Styling for the text of each button when disabled.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"innerBorderStyle")),(0,r.yg)("td",{parentName:"tr",align:null},"{ color?: string; width?: number; }"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"Update the styling of the interior border of the list of buttons.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"onHideUnderlay")),(0,r.yg)("td",{parentName:"tr",align:null},"Function"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"Function called on hiding underlay.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"onLongPress")),(0,r.yg)("td",{parentName:"tr",align:null},"GestureResponderEventHandler"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"Called when a long-tap gesture is detected.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"onPress")),(0,r.yg)("td",{parentName:"tr",align:null},"(...args: any[]) => void"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"Function")),(0,r.yg)("td",{parentName:"tr",align:null},"Method to update Button Group Index.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"onPressIn")),(0,r.yg)("td",{parentName:"tr",align:null},"GestureResponderEventHandler"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"Called when a touch is engaged before ",(0,r.yg)("inlineCode",{parentName:"td"},"onPress"),".")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"onPressOut")),(0,r.yg)("td",{parentName:"tr",align:null},"GestureResponderEventHandler"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"Called when a touch is released before ",(0,r.yg)("inlineCode",{parentName:"td"},"onPress"),".")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"onShowUnderlay")),(0,r.yg)("td",{parentName:"tr",align:null},"Function"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"Function called on showing underlay.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"pressableProps")),(0,r.yg)("td",{parentName:"tr",align:null},"PressableProps except click handlers"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"None")),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"selectMultiple")),(0,r.yg)("td",{parentName:"tr",align:null},"boolean"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"false")),(0,r.yg)("td",{parentName:"tr",align:null},"Allows the user to select multiple buttons.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"selectedButtonStyle")),(0,r.yg)("td",{parentName:"tr",align:null},"View Style"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"Specify styling for selected button.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"selectedIndex")),(0,r.yg)("td",{parentName:"tr",align:null},"number"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"null")),(0,r.yg)("td",{parentName:"tr",align:null},"Current selected index of array of buttons.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"selectedIndexes")),(0,r.yg)("td",{parentName:"tr",align:null},"number[]"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"[]")),(0,r.yg)("td",{parentName:"tr",align:null},"Current selected indexes from the array of buttons.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"selectedTextStyle")),(0,r.yg)("td",{parentName:"tr",align:null},"Text Style"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"Specify specific styling for text in the selected state.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"setOpacityTo")),(0,r.yg)("td",{parentName:"tr",align:null},"(value: number) => void"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"Function to set the opacity.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"textStyle")),(0,r.yg)("td",{parentName:"tr",align:null},"Text Style"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"Specify specific styling for text.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"underlayColor")),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"Color [Primary]")),(0,r.yg)("td",{parentName:"tr",align:null},"Specify underlayColor for TouchableHighlight.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"vertical")),(0,r.yg)("td",{parentName:"tr",align:null},"boolean"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"false")),(0,r.yg)("td",{parentName:"tr",align:null},"Display the ButtonGroup vertically."))))),(0,r.yg)("h2",{id:"playground"},"Playground"),(0,r.yg)(u.A,{mdxType:"Play"}))}C.isMDXComponent=!0}}]);