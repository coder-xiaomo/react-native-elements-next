(self.webpackChunkrne_website=self.webpackChunkrne_website||[]).push([[64096],{18411:()=>{},21816:(e,t,n)=>{"use strict";n.d(t,{A:()=>i});var a=n(96540),o=n(64270),c=n(26795),l=n(10171),r=n(11451);const i=function(){var e=(0,l.A)({componentName:"CheckBox",props:{center:{type:r.B.Boolean,value:!1,description:"Aligns checkbox to center (optional)"},right:{type:r.B.Boolean,value:!1,description:"Aligns checkbox to right (optional)"},checked:{type:r.B.Boolean,value:!1,stateful:!0,description:"Flag for checking the icon (required)"},checkedColor:{type:r.B.String,value:"#0F0",description:"Default checked color (optional)"},checkedIcon:{type:r.B.Object,value:"",description:"string OR React Native Component\t"},checkedTitle:{type:r.B.String,value:"Great!",description:"Specify a custom checked message (optional)"},Component:{type:r.B.ReactNode,value:null,description:"React Native Component"},containerStyle:{type:r.B.Object,value:'{width: "75%"}',description:"Style of main container (optional)"},fontFamily:{type:r.B.String,value:null,description:"Specify different font family"},iconRight:{type:r.B.Boolean,value:!1,description:"Moves icon to right of text (optional)"},iconType:{type:r.B.String,value:null,description:"type of icon set"},onIconPress:{type:r.B.Function,value:"() => setChecked(!checked)",propHook:{what:"!checked",into:"checked"},description:"onPress function for checkbox (required)"},onLongIconPress:{type:r.B.Function,value:'() => console.log("onLongIconPress()")',description:"onLongPress function for checkbox (optional)"},onLongPress:{type:r.B.Function,value:'() => console.log("onLongPress()")',description:"onLongPress function for checkbox (optional)"},onPress:{type:r.B.Function,value:'() => console.log("onPress()")',description:"onPress function for container (optional)"},size:{type:r.B.Number,value:30,description:"Size of the checkbox"},textStyle:{type:r.B.Object,value:"{}",description:"Style of text (optional)"},title:{type:r.B.Object,value:'"Check for Awesomeness"',description:"Title of checkbox"},titleProps:{type:r.B.Object,value:"{}",description:"Additional props for the title Text component (optional)"},uncheckedColor:{type:r.B.String,value:"#F00",description:"Default unchecked color (optional)"},uncheckedIcon:{type:r.B.Object,value:null,description:"string OR React Native Component"}},scope:{CheckBox:o.CheckBox},imports:{"@rneui/base":{named:["CheckBox"]}}});return a.createElement(a.Fragment,null,a.createElement(c.A,{params:e}))}},26795:(e,t,n)=>{"use strict";n.d(t,{A:()=>m});var a=n(9668),o=n(96540),c=n(91010),l=n(32594),r=n(20018),i=n(96109),d=n(11245),s=n(34397),g=n(50546),p=n(25407);const m=function(e){var t=e.params,n=e.containerStyle,m=void 0===n?{}:n;return o.createElement(c.A,{fallback:o.createElement(o.Fragment,null,"Loading...")},(function(){return o.createElement(g.q9.Provider,null,o.createElement(g.Oy,{initialMetrics:p.Y},o.createElement("div",{style:Object.assign({border:"1px solid var(--ifm-color-emphasis-200)",borderRadius:"var(--ifm-global-radius)",position:"relative"},m)},o.createElement(l.A,(0,a.A)({},t.compilerProps,{minHeight:62,placeholder:r.A}))),o.createElement(i.A,{msg:t.errorProps.msg,isPopup:!0}),o.createElement(d.A,t.knobProps),o.createElement(i.A,t.errorProps),o.createElement(s.w,t.actions)))}))}},33557:(e,t,n)=>{"use strict";n.d(t,{A:()=>i});var a=n(96540),o=n(8755),c=n(64270),l=n(45550),r=n(91147);const i=Object.assign({React:a,LinearGradient:r.A},o,c,l,a)},56253:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>C,contentTitle:()=>h,default:()=>A,frontMatter:()=>y,metadata:()=>k,toc:()=>N});var a=n(9668),o=n(21367),c=(n(96540),n(15680)),l=n(70926),r=(n(21518),n(46061),n(72787)),i=n(35504),d=["components"],s={toc:[]},g="wrapper";function p(e){var t=e.components,n=(0,o.A)(e,d);return(0,c.yg)(g,(0,a.A)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,c.yg)("div",{className:"snack-player","data-snack-name":"RNE CheckBox","data-snack-description":"Example usage","data-snack-code":"import%20React%2C%20%7B%20useState%20%7D%20from%20'react'%3B%0Aimport%20%7B%20CheckBox%2C%20Icon%20%7D%20from%20'%40rneui%2Fthemed'%3B%0A%0Atype%20CheckboxComponentProps%20%3D%20%7B%7D%3B%0A%0Aconst%20CheckboxComponent%3A%20React.FunctionComponent%3CCheckboxComponentProps%3E%20%3D%20()%20%3D%3E%20%7B%0Aconst%20%5Bcheck1%2C%20setCheck1%5D%20%3D%20useState(false)%3B%0Aconst%20%5Bcheck2%2C%20setCheck2%5D%20%3D%20useState(false)%3B%0Aconst%20%5Bcheck3%2C%20setCheck3%5D%20%3D%20useState(false)%3B%0Aconst%20%5Bcheck4%2C%20setCheck4%5D%20%3D%20useState(false)%3B%0A%0Areturn%20(%0A%20%20%3C%3E%0A%20%20%20%20%3CCheckBox%0A%20%20%20%20%20%20center%0A%20%20%20%20%20%20title%3D%22Click%20Here%22%0A%20%20%20%20%20%20checked%3D%7Bcheck1%7D%0A%20%20%20%20%20%20onPress%3D%7B()%20%3D%3E%20setCheck1(!check1)%7D%0A%20%20%20%20%2F%3E%0A%0A%20%20%20%20%3CCheckBox%0A%20%20%20%20%20%20center%0A%20%20%20%20%20%20title%3D%22Click%20Here%22%0A%20%20%20%20%20%20checkedIcon%3D%22dot-circle-o%22%0A%20%20%20%20%20%20uncheckedIcon%3D%22circle-o%22%0A%20%20%20%20%20%20checked%3D%7Bcheck2%7D%0A%20%20%20%20%20%20onPress%3D%7B()%20%3D%3E%20setCheck2(!check2)%7D%0A%20%20%20%20%2F%3E%0A%0A%20%20%20%20%3CCheckBox%0A%20%20%20%20%20%20center%0A%20%20%20%20%20%20title%3D%7B%60Click%20Here%20to%20%24%7Bcheck3%20%3F%20'Remove'%20%3A%20'Add'%7D%20This%20Item%60%7D%0A%20%20%20%20%20%20iconRight%0A%20%20%20%20%20%20iconType%3D%22material%22%0A%20%20%20%20%20%20checkedIcon%3D%22clear%22%0A%20%20%20%20%20%20uncheckedIcon%3D%22add%22%0A%20%20%20%20%20%20checkedColor%3D%22red%22%0A%20%20%20%20%20%20checked%3D%7Bcheck3%7D%0A%20%20%20%20%20%20onPress%3D%7B()%20%3D%3E%20setCheck3(!check3)%7D%0A%20%20%20%20%2F%3E%0A%0A%20%20%20%20%3CCheckBox%0A%20%20%20%20%20%20center%0A%20%20%20%20%20%20checkedIcon%3D%7B%0A%20%20%20%20%20%20%20%20%3CIcon%0A%20%20%20%20%20%20%20%20%20%20name%3D%22radio-button-checked%22%0A%20%20%20%20%20%20%20%20%20%20type%3D%22material%22%0A%20%20%20%20%20%20%20%20%20%20color%3D%22green%22%0A%20%20%20%20%20%20%20%20%20%20size%3D%7B25%7D%0A%20%20%20%20%20%20%20%20%20%20iconStyle%3D%7B%7B%20marginRight%3A%2010%20%7D%7D%0A%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20uncheckedIcon%3D%7B%0A%20%20%20%20%20%20%20%20%3CIcon%0A%20%20%20%20%20%20%20%20%20%20name%3D%22radio-button-unchecked%22%0A%20%20%20%20%20%20%20%20%20%20type%3D%22material%22%0A%20%20%20%20%20%20%20%20%20%20color%3D%22grey%22%0A%20%20%20%20%20%20%20%20%20%20size%3D%7B25%7D%0A%20%20%20%20%20%20%20%20%20%20iconStyle%3D%7B%7B%20marginRight%3A%2010%20%7D%7D%0A%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20checked%3D%7Bcheck4%7D%0A%20%20%20%20%20%20onPress%3D%7B()%20%3D%3E%20setCheck4(!check4)%7D%0A%20%20%20%20%2F%3E%0A%20%20%3C%2F%3E%0A)%3B%0A%7D%3B%0A%0Aexport%20default%20CheckboxComponent%3B","data-snack-dependencies":"@rneui/themed,@rneui/base","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}))}p.isMDXComponent=!0;var m=n(21816),u=["components"],y={id:"checkbox",title:"CheckBox"},h=void 0,k={unversionedId:"components/checkbox",id:"version-4.0.0-rc.7/components/checkbox",title:"CheckBox",description:"CheckBoxes allow users to complete tasks that involve making choices such as selecting options, or switching settings - On or Off. It provides a clear visual of either a true or false choice.",source:"@site/versioned_docs/version-4.0.0-rc.7/components/CheckBox.mdx",sourceDirName:"components",slug:"/components/checkbox",permalink:"/docs/4.0.0-rc.7/components/checkbox",draft:!1,editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/versioned_docs/version-4.0.0-rc.7/components/CheckBox.mdx",tags:[],version:"4.0.0-rc.7",frontMatter:{id:"checkbox",title:"CheckBox"},sidebar:"docs",previous:{title:"Card.Title",permalink:"/docs/4.0.0-rc.7/components/card_title"},next:{title:"Chip",permalink:"/docs/4.0.0-rc.7/components/chip"}},C={},N=[{value:"Usage",id:"usage",level:2},{value:"Simple",id:"simple",level:3},{value:"Label",id:"label",level:3},{value:"Radio",id:"radio",level:3},{value:"Size",id:"size",level:3},{value:"Custom icon",id:"custom-icon",level:3},{value:"Props",id:"props",level:2},{value:"Playground",id:"playground",level:2}],f={toc:N},v="wrapper";function A(e){var t=e.components,n=(0,o.A)(e,u);return(0,c.yg)(v,(0,a.A)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,c.yg)(l.y,{mdxType:"IconsStyle"}),(0,c.yg)("p",null,"CheckBoxes allow users to complete tasks that involve making choices such as selecting options, or switching settings - On or Off. It provides a clear visual of either a true or false choice."),(0,c.yg)("h2",{id:"usage"},"Usage"),(0,c.yg)("div",{class:"row inline-flex-center"},(0,c.yg)("div",{class:"col col--3"},(0,c.yg)("h4",null,"Import")),(0,c.yg)("div",{class:"col col--9"},(0,c.yg)(r.A,{mdxType:"CodeBlock"},"import { CheckBox } from '@rneui/themed';")),(0,c.yg)("div",{class:"col col--3"},(0,c.yg)("h4",null,"Theme Key"," ",(0,c.yg)("a",{href:"../customizing#using-themeprovider"},(0,c.yg)(i.wfp,{mdxType:"BiInfoCircle"})))),(0,c.yg)("div",{class:"col col--9"},(0,c.yg)(r.A,{mdxType:"CodeBlock"},"CheckBox"))),(0,c.yg)("h3",{id:"simple"},"Simple"),(0,c.yg)("pre",null,(0,c.yg)("code",{parentName:"pre",className:"language-tsx",metastring:"live",live:!0},'function () {\n     const [checked, setChecked] = React.useState(true);\n     const toggleCheckbox = () => setChecked(!checked);\n     return (\n       <Stack row align="center" spacing={1}>\n         <CheckBox\n           checked={checked}\n           onPress={toggleCheckbox}\n           // Use ThemeProvider to make change for all checkbox\n           iconType="material-community"\n           checkedIcon="checkbox-marked"\n           uncheckedIcon="checkbox-blank-outline"\n           checkedColor="red"\n         />\n         <CheckBox\n           checked={checked}\n           onPress={toggleCheckbox}\n           iconType="material-community"\n           checkedIcon="checkbox-outline"\n           uncheckedIcon={\'checkbox-blank-outline\'}\n         />\n         <CheckBox\n           checked={false}\n           disabled\n           iconType="material-community"\n           checkedIcon="checkbox-outline"\n           uncheckedIcon={\'checkbox-blank-outline\'}\n         />\n       </Stack>\n     );\n   }\n')),(0,c.yg)("h3",{id:"label"},"Label"),(0,c.yg)("pre",null,(0,c.yg)("code",{parentName:"pre",className:"language-tsx",metastring:"live",live:!0},'<Stack row align="center" spacing={4}>\n  <CheckBox checked title="Label" />\n  <CheckBox checked disabled title="Label" />\n</Stack>\n')),(0,c.yg)("h3",{id:"radio"},"Radio"),(0,c.yg)("pre",null,(0,c.yg)("code",{parentName:"pre",className:"language-tsx",metastring:"live",live:!0},'function () {\n     const [selectedIndex, setIndex] = React.useState(0);\n\n     return (\n       <Stack row align="center" spacing={4}>\n         <CheckBox\n           checked={selectedIndex === 0}\n           onPress={() => setIndex(0)}\n           checkedIcon="dot-circle-o"\n           uncheckedIcon="circle-o"\n         />\n         <CheckBox\n           checked={selectedIndex === 1}\n           onPress={() => setIndex(1)}\n           checkedIcon="dot-circle-o"\n           uncheckedIcon="circle-o"\n         />\n       </Stack>\n     );\n   }\n')),(0,c.yg)("h3",{id:"size"},"Size"),(0,c.yg)("pre",null,(0,c.yg)("code",{parentName:"pre",className:"language-tsx",metastring:"live",live:!0},'<Stack row align="center" spacing={4}>\n  <CheckBox checked size={18} />\n  <CheckBox checked size={24} />\n  <CheckBox checked size={32} />\n</Stack>\n')),(0,c.yg)("h3",{id:"custom-icon"},"Custom icon"),(0,c.yg)("pre",null,(0,c.yg)("code",{parentName:"pre",className:"language-tsx",metastring:"live",live:!0},'function () {\n     const [checked, setState] = React.useState(true);\n     const toggleCheckbox = () => setState(!checked);\n     return (\n       <Stack row align="center">\n         <CheckBox\n           checked={checked}\n           checkedIcon="heart"\n           uncheckedIcon="heart-o"\n           checkedColor="red"\n           onPress={toggleCheckbox}\n         />\n         <CheckBox\n           checked={checked}\n           checkedIcon="bookmark"\n           uncheckedIcon="bookmark-o"\n           checkedColor="heart"\n           onPress={toggleCheckbox}\n         />\n       </Stack>\n     );\n   }\n')),(0,c.yg)(p,{mdxType:"Usage"}),(0,c.yg)("h2",{id:"props"},"Props"),(0,c.yg)("admonition",{type:"note"},(0,c.yg)("p",{parentName:"admonition"},"Includes all ",(0,c.yg)("a",{parentName:"p",href:"checkboxicon#props"},"CheckBoxIcon"),", ",(0,c.yg)("a",{parentName:"p",href:"https://reactnative.dev/docs/view#props"},"View")," props.")),(0,c.yg)("div",{class:"table-responsive"},(0,c.yg)("table",null,(0,c.yg)("thead",{parentName:"table"},(0,c.yg)("tr",{parentName:"thead"},(0,c.yg)("th",{parentName:"tr",align:null},"Name"),(0,c.yg)("th",{parentName:"tr",align:null},"Type"),(0,c.yg)("th",{parentName:"tr",align:null},"Default"),(0,c.yg)("th",{parentName:"tr",align:null},"Description"))),(0,c.yg)("tbody",{parentName:"table"},(0,c.yg)("tr",{parentName:"tbody"},(0,c.yg)("td",{parentName:"tr",align:null},(0,c.yg)("inlineCode",{parentName:"td"},"Component")),(0,c.yg)("td",{parentName:"tr",align:null},"React Component"),(0,c.yg)("td",{parentName:"tr",align:null}),(0,c.yg)("td",{parentName:"tr",align:null},"Specify React Native component for main button.")),(0,c.yg)("tr",{parentName:"tbody"},(0,c.yg)("td",{parentName:"tr",align:null},(0,c.yg)("inlineCode",{parentName:"td"},"center")),(0,c.yg)("td",{parentName:"tr",align:null},"boolean"),(0,c.yg)("td",{parentName:"tr",align:null},(0,c.yg)("inlineCode",{parentName:"td"},"false")),(0,c.yg)("td",{parentName:"tr",align:null},"Aligns checkbox to center.")),(0,c.yg)("tr",{parentName:"tbody"},(0,c.yg)("td",{parentName:"tr",align:null},(0,c.yg)("inlineCode",{parentName:"td"},"checkedTitle")),(0,c.yg)("td",{parentName:"tr",align:null},"string"),(0,c.yg)("td",{parentName:"tr",align:null}),(0,c.yg)("td",{parentName:"tr",align:null},"Specify a custom checked message.")),(0,c.yg)("tr",{parentName:"tbody"},(0,c.yg)("td",{parentName:"tr",align:null},(0,c.yg)("inlineCode",{parentName:"td"},"containerStyle")),(0,c.yg)("td",{parentName:"tr",align:null},"View Style"),(0,c.yg)("td",{parentName:"tr",align:null}),(0,c.yg)("td",{parentName:"tr",align:null},"Style of main container.")),(0,c.yg)("tr",{parentName:"tbody"},(0,c.yg)("td",{parentName:"tr",align:null},(0,c.yg)("inlineCode",{parentName:"td"},"disabled")),(0,c.yg)("td",{parentName:"tr",align:null},"boolean"),(0,c.yg)("td",{parentName:"tr",align:null},(0,c.yg)("inlineCode",{parentName:"td"},"false")),(0,c.yg)("td",{parentName:"tr",align:null},"Disables user interaction.")),(0,c.yg)("tr",{parentName:"tbody"},(0,c.yg)("td",{parentName:"tr",align:null},(0,c.yg)("inlineCode",{parentName:"td"},"disabledStyle")),(0,c.yg)("td",{parentName:"tr",align:null},"View Style"),(0,c.yg)("td",{parentName:"tr",align:null}),(0,c.yg)("td",{parentName:"tr",align:null},"Style of the checkbox container when disabled.")),(0,c.yg)("tr",{parentName:"tbody"},(0,c.yg)("td",{parentName:"tr",align:null},(0,c.yg)("inlineCode",{parentName:"td"},"disabledTitleStyle")),(0,c.yg)("td",{parentName:"tr",align:null},"Text Style"),(0,c.yg)("td",{parentName:"tr",align:null}),(0,c.yg)("td",{parentName:"tr",align:null},"Style of the title when disabled.")),(0,c.yg)("tr",{parentName:"tbody"},(0,c.yg)("td",{parentName:"tr",align:null},(0,c.yg)("inlineCode",{parentName:"td"},"fontFamily")),(0,c.yg)("td",{parentName:"tr",align:null},"string"),(0,c.yg)("td",{parentName:"tr",align:null}),(0,c.yg)("td",{parentName:"tr",align:null},"Specify different font family.")),(0,c.yg)("tr",{parentName:"tbody"},(0,c.yg)("td",{parentName:"tr",align:null},(0,c.yg)("inlineCode",{parentName:"td"},"iconRight")),(0,c.yg)("td",{parentName:"tr",align:null},"boolean"),(0,c.yg)("td",{parentName:"tr",align:null},(0,c.yg)("inlineCode",{parentName:"td"},"false")),(0,c.yg)("td",{parentName:"tr",align:null},"Moves icon to right of text.")),(0,c.yg)("tr",{parentName:"tbody"},(0,c.yg)("td",{parentName:"tr",align:null},(0,c.yg)("inlineCode",{parentName:"td"},"right")),(0,c.yg)("td",{parentName:"tr",align:null},"boolean"),(0,c.yg)("td",{parentName:"tr",align:null},(0,c.yg)("inlineCode",{parentName:"td"},"false")),(0,c.yg)("td",{parentName:"tr",align:null},"Aligns checkbox to right.")),(0,c.yg)("tr",{parentName:"tbody"},(0,c.yg)("td",{parentName:"tr",align:null},(0,c.yg)("inlineCode",{parentName:"td"},"textStyle")),(0,c.yg)("td",{parentName:"tr",align:null},"Text Style"),(0,c.yg)("td",{parentName:"tr",align:null}),(0,c.yg)("td",{parentName:"tr",align:null},"Style of text.")),(0,c.yg)("tr",{parentName:"tbody"},(0,c.yg)("td",{parentName:"tr",align:null},(0,c.yg)("inlineCode",{parentName:"td"},"title")),(0,c.yg)("td",{parentName:"tr",align:null},(0,c.yg)("inlineCode",{parentName:"td"},"string")," ","|"," ",(0,c.yg)("inlineCode",{parentName:"td"},"ReactElement<{}, string")," ","|"," ",(0,c.yg)("inlineCode",{parentName:"td"},"JSXElementConstructor<any>>")),(0,c.yg)("td",{parentName:"tr",align:null}),(0,c.yg)("td",{parentName:"tr",align:null},"Title of checkbox.")),(0,c.yg)("tr",{parentName:"tbody"},(0,c.yg)("td",{parentName:"tr",align:null},(0,c.yg)("inlineCode",{parentName:"td"},"titleProps")),(0,c.yg)("td",{parentName:"tr",align:null},"TextProps"),(0,c.yg)("td",{parentName:"tr",align:null},(0,c.yg)("inlineCode",{parentName:"td"},"{}")),(0,c.yg)("td",{parentName:"tr",align:null},"Additional props for the title Text component.")),(0,c.yg)("tr",{parentName:"tbody"},(0,c.yg)("td",{parentName:"tr",align:null},(0,c.yg)("inlineCode",{parentName:"td"},"wrapperStyle")),(0,c.yg)("td",{parentName:"tr",align:null},"View Style"),(0,c.yg)("td",{parentName:"tr",align:null}),(0,c.yg)("td",{parentName:"tr",align:null},"Style for the wrapper of checkbox."))))),(0,c.yg)("h2",{id:"playground"},"Playground"),(0,c.yg)(m.A,{mdxType:"Play"}))}A.isMDXComponent=!0},68260:()=>{},70926:(e,t,n)=>{"use strict";n.d(t,{y:()=>i});var a=n(96540),o=n(3352),c=n(14628),l=n(1547),r=n(83564),i=function(){return a.createElement(o.A,null,a.createElement("style",{type:"text/css"},"\n          @font-face {\n            font-family: 'MaterialIcons';\n            src: url("+l.A+") format('truetype');\n          }\n          @font-face {\n            font-family: 'FontAwesome';\n            src: url("+r.A+") format('truetype');\n          }\n          @font-face {\n            font-family: 'MaterialCommunityIcons';\n            src: url("+c.A+") format('truetype');\n          }\n        "))}},78360:(e,t,n)=>{"use strict";n.d(t,{A:()=>C});var a=n(21367),o=n(9668),c=n(96540),l=n(53686),r=n(20053),i=(n(26297),n(5222)),d=n(91010),s=n(41262);const g={playgroundContainer:"playgroundContainer_TGbA",playgroundHeader:"playgroundHeader_qwyd",playgroundEditor:"playgroundEditor_PvJ1",playgroundPreview:"playgroundPreview_bb8I",toggleContainer:"toggleContainer_ZZiH",toggleIcon:"toggleIcon_OnrQ",showCode:"showCode_O0Od"};var p=n(195),m=n(59644),u=["children","transformCode"];function y(){return c.createElement("div",null,"Loading...")}function h(e){var t=(0,p.A)(),n=(0,c.useContext)(l.MY),a=n.code,r=n.language,i=n.theme,d=n.disabled,s=n.onChange;return c.createElement(l.w,(0,o.A)({key:String(t),code:a,language:r,theme:i,disabled:d,onChange:s},e,{className:g.playgroundEditor}))}function k(e){var t=e.showCode,n=e.preImports,a=void 0===n?"":n,o=(e.wrapper,c.useState(t)),i=o[0],s=o[1],p=function(){s((function(e){return!e}))};return c.createElement(c.Fragment,null,c.createElement("div",{className:g.playgroundPreview},c.createElement(d.A,{fallback:c.createElement(y,null)},(function(){return c.createElement(c.Fragment,null,c.createElement(l.pA,null),c.createElement(l.p1,null),c.createElement("div",{className:g.toggleContainer},c.createElement("div",{className:(0,r.A)(g.toggleIcon),onClick:p},c.createElement(m.luQ,null),c.createElement("span",{className:g.showCode},i?"Hide":"Show"," Code"))))}))),i&&c.createElement(h,{preImports:a,showCode:i}))}function C(e){var t=e.children,n=(e.transformCode,(0,a.A)(e,u)),r=((0,i.A)().siteConfig.themeConfig.liveCodeBlock.playgroundPosition,(0,s.A)());return c.createElement("div",{className:g.playgroundContainer},c.createElement(l.Q,(0,o.A)({code:t.replace(/\n$/,""),theme:r},n),c.createElement(k,{showCode:n.showCode})))}}}]);