(self.webpackChunkrne_website=self.webpackChunkrne_website||[]).push([[90619],{18411:()=>{},26795:(e,t,a)=>{"use strict";a.d(t,{A:()=>p});var n=a(9668),r=a(96540),o=a(91010),l=a(32594),i=a(20018),s=a(96109),d=a(11245),c=a(34397),m=a(50546),A=a(25407);const p=function(e){var t=e.params,a=e.containerStyle,p=void 0===a?{}:a;return r.createElement(o.A,{fallback:r.createElement(r.Fragment,null,"Loading...")},(function(){return r.createElement(m.q9.Provider,null,r.createElement(m.Oy,{initialMetrics:A.Y},r.createElement("div",{style:Object.assign({border:"1px solid var(--ifm-color-emphasis-200)",borderRadius:"var(--ifm-global-radius)",position:"relative"},p)},r.createElement(l.A,(0,n.A)({},t.compilerProps,{minHeight:62,placeholder:i.A}))),r.createElement(s.A,{msg:t.errorProps.msg,isPopup:!0}),r.createElement(d.A,t.knobProps),r.createElement(s.A,t.errorProps),r.createElement(c.w,t.actions)))}))}},33557:(e,t,a)=>{"use strict";a.d(t,{A:()=>s});var n=a(96540),r=a(8755),o=a(64270),l=a(45550),i=a(91147);const s=Object.assign({React:n,LinearGradient:i.A},r,o,l,n)},54898:(e,t,a)=>{"use strict";a.d(t,{A:()=>m});var n=a(96540),r=a(64270),o=a(9176),l=a(9761),i=a(78506),s=a(26795),d=a(10171),c=a(11451);const m=function(){var e=(0,d.A)({componentName:"Card",props:{children:{value:' \n        <Card.Title>CARD WITH DIVIDER</Card.Title>\n        <Card.Divider/>\n        <View style={{position:"relative",alignItems:"center"}}>\n          <Image\n              style={{width:"100%",height:100}}\n              resizeMode="contain"\n              source={{ uri: "https://avatars0.githubusercontent.com/u/32242596?s=460&u=1ea285743fc4b083f95d6ee0be2e7bb8dcfc676e&v=4" }}\n            />\n          <Text >Pranshu Chittora</Text>\n         </View>\n         ',type:c.B.ReactNode,imports:{"react-native":{named:["View","Image"]}}},containerStyle:{value:"{}",type:c.B.Object},wrapperStyle:{value:"{}",type:c.B.Object}},scope:{Card:r.Card,View:o.A,Image:l.A,Text:i.A},imports:{"@rneui/base":{named:["Card"]}}});return n.createElement(n.Fragment,null,n.createElement(s.A,{params:e}))}},61926:(e,t,a)=>{"use strict";a.r(t),a.d(t,{assets:()=>D,contentTitle:()=>C,default:()=>E,frontMatter:()=>g,metadata:()=>y,toc:()=>f});var n=a(9668),r=a(21367),o=(a(96540),a(15680)),l=a(70926),i=(a(21518),a(46061),a(72787)),s=a(35504),d=["components"],c={toc:[]},m="wrapper";function A(e){var t=e.components,a=(0,r.A)(e,d);return(0,o.yg)(m,(0,n.A)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("div",{className:"snack-player","data-snack-name":"RNE Card","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20View%2C%20ScrollView%2C%20StyleSheet%2C%20Image%20%7D%20from%20'react-native'%3B%0Aimport%20%7B%20Text%2C%20Card%2C%20Button%2C%20Icon%20%7D%20from%20'%40rneui%2Fthemed'%3B%0A%0Aconst%20users%20%3D%20%5B%0A%7B%0A%20%20name%3A%20'brynn'%2C%0A%20%20avatar%3A%20'https%3A%2F%2Fuifaces.co%2Four-content%2Fdonated%2F1H_7AxP0.jpg'%2C%0A%7D%2C%0A%7B%0A%20%20name%3A%20'thot%20leader'%2C%0A%20%20avatar%3A%0A%20%20%20%20'https%3A%2F%2Fimages.pexels.com%2Fphotos%2F598745%2Fpexels-photo-598745.jpeg%3Fcrop%3Dfaces%26fit%3Dcrop%26h%3D200%26w%3D200%26auto%3Dcompress%26cs%3Dtinysrgb'%2C%0A%7D%2C%0A%7B%0A%20%20name%3A%20'jsa'%2C%0A%20%20avatar%3A%20'https%3A%2F%2Fuifaces.co%2Four-content%2Fdonated%2FbUkmHPKs.jpg'%2C%0A%7D%2C%0A%7B%0A%20%20name%3A%20'talhaconcepts'%2C%0A%20%20avatar%3A%20'https%3A%2F%2Frandomuser.me%2Fapi%2Fportraits%2Fmen%2F4.jpg'%2C%0A%7D%2C%0A%7B%0A%20%20name%3A%20'andy%20vitale'%2C%0A%20%20avatar%3A%20'https%3A%2F%2Fuifaces.co%2Four-content%2Fdonated%2FNY9hnAbp.jpg'%2C%0A%7D%2C%0A%7B%0A%20%20name%3A%20'katy%20friedson'%2C%0A%20%20avatar%3A%0A%20%20%20%20'https%3A%2F%2Fimages-na.ssl-images-amazon.com%2Fimages%2FM%2FMV5BMTgxMTc1MTYzM15BMl5BanBnXkFtZTgwNzI5NjMwOTE%40._V1_UY256_CR16%2C0%2C172%2C256_AL_.jpg'%2C%0A%7D%2C%0A%5D%3B%0A%0Atype%20CardsComponentsProps%20%3D%20%7B%7D%3B%0A%0Aconst%20Cards%3A%20React.FunctionComponent%3CCardsComponentsProps%3E%20%3D%20()%20%3D%3E%20%7B%0Areturn%20(%0A%20%20%3C%3E%0A%20%20%20%20%3CScrollView%3E%0A%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%0A%20%20%20%20%20%20%20%20%3CCard%3E%0A%20%20%20%20%20%20%20%20%20%20%3CCard.Title%3ECARD%20WITH%20DIVIDER%3C%2FCard.Title%3E%0A%20%20%20%20%20%20%20%20%20%20%3CCard.Divider%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%7Busers.map((u%2C%20i)%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20return%20(%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CView%20key%3D%7Bi%7D%20style%3D%7Bstyles.user%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CImage%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20style%3D%7Bstyles.image%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20resizeMode%3D%22cover%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20source%3D%7B%7B%20uri%3A%20u.avatar%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.name%7D%3E%7Bu.name%7D%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20)%3B%0A%20%20%20%20%20%20%20%20%20%20%7D)%7D%0A%20%20%20%20%20%20%20%20%3C%2FCard%3E%0A%20%20%20%20%20%20%20%20%3CCard%20containerStyle%3D%7B%7B%20marginTop%3A%2015%20%7D%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%3CCard.Title%3EFONTS%3C%2FCard.Title%3E%0A%20%20%20%20%20%20%20%20%20%20%3CCard.Divider%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.fonts%7D%20h1%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20h1%20Heading%0A%20%20%20%20%20%20%20%20%20%20%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.fonts%7D%20h2%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20h2%20Heading%0A%20%20%20%20%20%20%20%20%20%20%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.fonts%7D%20h3%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20h3%20Heading%0A%20%20%20%20%20%20%20%20%20%20%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.fonts%7D%20h4%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20h4%20Heading%0A%20%20%20%20%20%20%20%20%20%20%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.fonts%7D%3ENormal%20Text%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%3C%2FCard%3E%0A%20%20%20%20%20%20%20%20%3CCard%3E%0A%20%20%20%20%20%20%20%20%20%20%3CCard.Title%3EHELLO%20WORLD%3C%2FCard.Title%3E%0A%20%20%20%20%20%20%20%20%20%20%3CCard.Divider%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%3CCard.Image%0A%20%20%20%20%20%20%20%20%20%20%20%20style%3D%7B%7B%20padding%3A%200%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20source%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20uri%3A%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20'https%3A%2F%2Fawildgeographer.files.wordpress.com%2F2015%2F02%2Fjohn_muir_glacier.jpg'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%3CText%20style%3D%7B%7B%20marginBottom%3A%2010%20%7D%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20The%20idea%20with%20React%20Native%20Elements%20is%20more%20about%20component%0A%20%20%20%20%20%20%20%20%20%20%20%20structure%20than%20actual%20design.%0A%20%20%20%20%20%20%20%20%20%20%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%20%20%3CButton%0A%20%20%20%20%20%20%20%20%20%20%20%20icon%3D%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CIcon%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20name%3D%22code%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20color%3D%22%23ffffff%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20iconStyle%3D%7B%7B%20marginRight%3A%2010%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20buttonStyle%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20borderRadius%3A%200%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20marginLeft%3A%200%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20marginRight%3A%200%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20marginBottom%3A%200%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20title%3D%22VIEW%20NOW%22%0A%20%20%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%3C%2FCard%3E%0A%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%3C%2FScrollView%3E%0A%20%20%3C%2F%3E%0A)%3B%0A%7D%3B%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0Acontainer%3A%20%7B%0A%20%20flex%3A%201%2C%0A%7D%2C%0Afonts%3A%20%7B%0A%20%20marginBottom%3A%208%2C%0A%7D%2C%0Auser%3A%20%7B%0A%20%20flexDirection%3A%20'row'%2C%0A%20%20marginBottom%3A%206%2C%0A%7D%2C%0Aimage%3A%20%7B%0A%20%20width%3A%2030%2C%0A%20%20height%3A%2030%2C%0A%20%20marginRight%3A%2010%2C%0A%7D%2C%0Aname%3A%20%7B%0A%20%20fontSize%3A%2016%2C%0A%20%20marginTop%3A%205%2C%0A%7D%2C%0A%7D)%3B%0A%0Aexport%20default%20Cards%3B","data-snack-dependencies":"@rneui/themed,@rneui/base","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}))}A.isMDXComponent=!0;var p=a(54898),u=["components"],g={id:"card",title:"Card"},C=void 0,y={unversionedId:"components/card",id:"components/card",title:"Card",description:"Cards are a great way to display information, usually containing content and actions about a single subject. Cards can contain images, buttons, text and more. Cards are mainly used for informative purpose.",source:"@site/docs/components/Card.mdx",sourceDirName:"components",slug:"/components/card",permalink:"/docs/next/components/card",draft:!1,editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/docs/components/Card.mdx",tags:[],version:"current",frontMatter:{id:"card",title:"Card"},sidebar:"docs",previous:{title:"ButtonGroup",permalink:"/docs/next/components/buttongroup"},next:{title:"Card.Divider",permalink:"/docs/next/components/card_divider"}},D={},f=[{value:"Usage",id:"usage",level:2},{value:"Default",id:"default",level:3},{value:"Props",id:"props",level:2},{value:"Playground",id:"playground",level:2}],h={toc:f},v="wrapper";function E(e){var t=e.components,a=(0,r.A)(e,u);return(0,o.yg)(v,(0,n.A)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,o.yg)(l.y,{mdxType:"IconsStyle"}),(0,o.yg)("p",null,"Cards are a great way to display information, usually containing content and actions about a single subject. Cards can contain images, buttons, text and more. Cards are mainly used for informative purpose."),(0,o.yg)("h2",{id:"usage"},"Usage"),(0,o.yg)("div",{class:"row inline-flex-center"},(0,o.yg)("div",{class:"col col--3"},(0,o.yg)("h4",null,"Import")),(0,o.yg)("div",{class:"col col--9"},(0,o.yg)(i.A,{mdxType:"CodeBlock"},"import { Card } from '@rneui/themed';")),(0,o.yg)("div",{class:"col col--3"},(0,o.yg)("h4",null,"Theme Key"," ",(0,o.yg)("a",{href:"../customizing#using-themeprovider"},(0,o.yg)(s.wfp,{mdxType:"BiInfoCircle"})))),(0,o.yg)("div",{class:"col col--9"},(0,o.yg)(i.A,{mdxType:"CodeBlock"},"Card"))),(0,o.yg)("h3",{id:"default"},"Default"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-tsx",metastring:"live",live:!0},'<Card>\n  <Text>Word of the Day</Text>\n  <Text h4>be-nev-o=lent</Text>\n  <Text>adjective</Text>\n  <Text>\n    well meaning and kindly.\n    <br />\n    {\'"a benevolent smile"\'}\n  </Text>\n  <Button size="sm" type="clear">\n    Learn More\n  </Button>\n</Card>\n')),(0,o.yg)(A,{mdxType:"Usage"}),(0,o.yg)("h2",{id:"props"},"Props"),(0,o.yg)("div",{class:"table-responsive"},(0,o.yg)("table",null,(0,o.yg)("thead",{parentName:"table"},(0,o.yg)("tr",{parentName:"thead"},(0,o.yg)("th",{parentName:"tr",align:null},"Name"),(0,o.yg)("th",{parentName:"tr",align:null},"Type"),(0,o.yg)("th",{parentName:"tr",align:null},"Default"),(0,o.yg)("th",{parentName:"tr",align:null},"Description"))),(0,o.yg)("tbody",{parentName:"table"},(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},(0,o.yg)("inlineCode",{parentName:"td"},"containerStyle")),(0,o.yg)("td",{parentName:"tr",align:null},"View Style"),(0,o.yg)("td",{parentName:"tr",align:null}),(0,o.yg)("td",{parentName:"tr",align:null},"Outer container style.")),(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},(0,o.yg)("inlineCode",{parentName:"td"},"wrapperStyle")),(0,o.yg)("td",{parentName:"tr",align:null},"View Style"),(0,o.yg)("td",{parentName:"tr",align:null}),(0,o.yg)("td",{parentName:"tr",align:null},"Inner container style."))))),(0,o.yg)("h2",{id:"playground"},"Playground"),(0,o.yg)(p.A,{mdxType:"Play"}))}E.isMDXComponent=!0},68260:()=>{},70926:(e,t,a)=>{"use strict";a.d(t,{y:()=>s});var n=a(96540),r=a(3352),o=a(14628),l=a(1547),i=a(83564),s=function(){return n.createElement(r.A,null,n.createElement("style",{type:"text/css"},"\n          @font-face {\n            font-family: 'MaterialIcons';\n            src: url("+l.A+") format('truetype');\n          }\n          @font-face {\n            font-family: 'FontAwesome';\n            src: url("+i.A+") format('truetype');\n          }\n          @font-face {\n            font-family: 'MaterialCommunityIcons';\n            src: url("+o.A+") format('truetype');\n          }\n        "))}},78360:(e,t,a)=>{"use strict";a.d(t,{A:()=>D});var n=a(21367),r=a(9668),o=a(96540),l=a(53686),i=a(20053),s=(a(26297),a(5222)),d=a(91010),c=a(41262);const m={playgroundContainer:"playgroundContainer_TGbA",playgroundHeader:"playgroundHeader_qwyd",playgroundEditor:"playgroundEditor_PvJ1",playgroundPreview:"playgroundPreview_bb8I",toggleContainer:"toggleContainer_ZZiH",toggleIcon:"toggleIcon_OnrQ",showCode:"showCode_O0Od"};var A=a(195),p=a(59644),u=["children","transformCode"];function g(){return o.createElement("div",null,"Loading...")}function C(e){var t=(0,A.A)(),a=(0,o.useContext)(l.MY),n=a.code,i=a.language,s=a.theme,d=a.disabled,c=a.onChange;return o.createElement(l.w,(0,r.A)({key:String(t),code:n,language:i,theme:s,disabled:d,onChange:c},e,{className:m.playgroundEditor}))}function y(e){var t=e.showCode,a=e.preImports,n=void 0===a?"":a,r=(e.wrapper,o.useState(t)),s=r[0],c=r[1],A=function(){c((function(e){return!e}))};return o.createElement(o.Fragment,null,o.createElement("div",{className:m.playgroundPreview},o.createElement(d.A,{fallback:o.createElement(g,null)},(function(){return o.createElement(o.Fragment,null,o.createElement(l.pA,null),o.createElement(l.p1,null),o.createElement("div",{className:m.toggleContainer},o.createElement("div",{className:(0,i.A)(m.toggleIcon),onClick:A},o.createElement(p.luQ,null),o.createElement("span",{className:m.showCode},s?"Hide":"Show"," Code"))))}))),s&&o.createElement(C,{preImports:n,showCode:s}))}function D(e){var t=e.children,a=(e.transformCode,(0,n.A)(e,u)),i=((0,s.A)().siteConfig.themeConfig.liveCodeBlock.playgroundPosition,(0,c.A)());return o.createElement("div",{className:m.playgroundContainer},o.createElement(l.Q,(0,r.A)({code:t.replace(/\n$/,""),theme:i},a),o.createElement(y,{showCode:a.showCode})))}}}]);