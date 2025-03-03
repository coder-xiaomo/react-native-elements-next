"use strict";(self.webpackChunkrne_website=self.webpackChunkrne_website||[]).push([[15884],{15680:(e,n,r)=>{r.d(n,{xA:()=>m,yg:()=>d});var t=r(96540);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=t.createContext({}),s=function(e){var n=t.useContext(p),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},m=function(e){var n=s(e.components);return t.createElement(p.Provider,{value:n},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},g=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=s(r),g=o,d=u["".concat(p,".").concat(g)]||u[g]||c[g]||a;return r?t.createElement(d,i(i({ref:n},m),{},{components:r})):t.createElement(d,i({ref:n},m))}));function d(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=g;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=r[s];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}g.displayName="MDXCreateElement"},87927:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>m,contentTitle:()=>p,default:()=>d,frontMatter:()=>l,metadata:()=>s,toc:()=>u});var t=r(9668),o=r(21367),a=(r(96540),r(15680)),i=["components"],l={id:"migration_guide",title:"Migration Guide"},p="Migrating to v4",s={unversionedId:"migration_guide",id:"version-4.0.0-rc.2/migration_guide",title:"Migration Guide",description:"React Native Elements v4 introduces many features including few new components, fully typescript support and some breaking changes whose migration is being given below.",source:"@site/versioned_docs/version-4.0.0-rc.2/migration-guide.md",sourceDirName:".",slug:"/migration_guide",permalink:"/docs/4.0.0-rc.2/migration_guide",draft:!1,editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/versioned_docs/version-4.0.0-rc.2/migration-guide.md",tags:[],version:"4.0.0-rc.2",frontMatter:{id:"migration_guide",title:"Migration Guide"},sidebar:"docs",previous:{title:"Label Guide",permalink:"/docs/4.0.0-rc.2/labels"}},m={},u=[{value:"Core changes",id:"core-changes",level:2},{value:"Colors",id:"colors",level:3},{value:"Pressable",id:"pressable",level:3},{value:"Components",id:"components",level:2},{value:"<code>ThemeProvider</code>",id:"themeprovider",level:3},{value:"<code>Tooltip</code>",id:"tooltip",level:3}],c={toc:u},g="wrapper";function d(e){var n=e.components,r=(0,o.A)(e,i);return(0,a.yg)(g,(0,t.A)({},c,r,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"migrating-to-v4"},"Migrating to v4"),(0,a.yg)("p",null,"React Native Elements v4 introduces many features including few new components, fully typescript support and some breaking changes whose migration is being given below."),(0,a.yg)("h2",{id:"core-changes"},"Core changes"),(0,a.yg)("p",null,"To use the v4 version, you first need to update the package names:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-diff"},"- import {} from 'react-native-elements'\n+ import {} from '@rneui/themed'\n")),(0,a.yg)("p",null,"You can install the packages from npm or yarn"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"npm install @rneui/base @rneui/themed\n\n# or with yarn\nyarn add @rneui/base @rneui/themed\n")),(0,a.yg)("p",null,"You can also make ",(0,a.yg)("inlineCode",{parentName:"p"},"alias")," for package to help you with migration."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"yarn add react-native-elements@npm:@rneui/themed\n")),(0,a.yg)("h3",{id:"colors"},"Colors"),(0,a.yg)("p",null,"Added a new ",(0,a.yg)("inlineCode",{parentName:"p"},"background")," color to the ",(0,a.yg)("inlineCode",{parentName:"p"},"colors")," object."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-diff"},"const colors={\n  primary: '#2e7d32',\n  secondary: '#757575',\n+ background: '#ffffff',\n}\n")),(0,a.yg)("h3",{id:"pressable"},"Pressable"),(0,a.yg)("p",null,"These components are now using ",(0,a.yg)("inlineCode",{parentName:"p"},"Pressable")," instead of ",(0,a.yg)("inlineCode",{parentName:"p"},"Touchable")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Avatar"),(0,a.yg)("li",{parentName:"ul"},"Badge"),(0,a.yg)("li",{parentName:"ul"},"ButtonGroup"),(0,a.yg)("li",{parentName:"ul"},"CheckBox"),(0,a.yg)("li",{parentName:"ul"},"Icon"),(0,a.yg)("li",{parentName:"ul"},"Image"),(0,a.yg)("li",{parentName:"ul"},"ListItem"),(0,a.yg)("li",{parentName:"ul"},"SearchBar"),(0,a.yg)("li",{parentName:"ul"},"SpeedDial"),(0,a.yg)("li",{parentName:"ul"},"Tile")),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},(0,a.yg)("a",{parentName:"p",href:"https://reactnative.dev/docs/pressable"},"Pressable")," is a Core Component wrapper that can detect various stages of press interactions on any of its defined children.")),(0,a.yg)("p",null,"This change would let you use ",(0,a.yg)("inlineCode",{parentName:"p"},"onPressIn")," & ",(0,a.yg)("inlineCode",{parentName:"p"},"onPressOut")," APIs in components, For example"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-diff"},'  <CheckBox\n    title="I agree"\n    onPress={()=>{}}\n    onLongPress={()=>{}}\n+   onPressIn={()=>{}}\n+   onPressOut={()=>{}}\n    onPress={() => {}}\n  />\n')),(0,a.yg)("p",null,"and the rest of props for ",(0,a.yg)("inlineCode",{parentName:"p"},"Pressable")," can be added via ",(0,a.yg)("inlineCode",{parentName:"p"},"pressableProps")," API"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-diff"},"  <ButtonGroup\n+   pressableProps={{android_ripple:{radius:2}}}\n  />\n")),(0,a.yg)("p",null,"few other props (like ",(0,a.yg)("inlineCode",{parentName:"p"},"underlayColor"),") will not be supported, you can remove them."),(0,a.yg)("h2",{id:"components"},"Components"),(0,a.yg)("h3",{id:"themeprovider"},(0,a.yg)("inlineCode",{parentName:"h3"},"ThemeProvider")),(0,a.yg)("p",null,"Please make sure that ",(0,a.yg)("inlineCode",{parentName:"p"},"ThemeProvider")," is defined at the root of your application (even if you are using the default theme) and ",(0,a.yg)("inlineCode",{parentName:"p"},"NO")," useStyles or useTheme is called before ",(0,a.yg)("inlineCode",{parentName:"p"},"<ThemeProvider>")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-diff"},'- <ThemeProvider theme={myTheme} useDark={false}>\n+ <ThemeProvider theme={myTheme}>\n     <Button title="My Button" />\n   </ThemeProvider>\n')),(0,a.yg)("p",null,"Create custom theme using ",(0,a.yg)("inlineCode",{parentName:"p"},"createTheme")," helper"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-diff"},"- const myTheme: FullTheme = {\n+ const myTheme = createTheme({\n-  colors: {\n+  lightColors:{\n     primary: '#f2f2f2',\n   },\n+  darkColors: {\n+   primary: '#121212',\n+  },\n+  mode: 'dark',\n};\n")),(0,a.yg)("p",null,"Since ",(0,a.yg)("inlineCode",{parentName:"p"},"useDark")," is deprecated, you can switch ",(0,a.yg)("inlineCode",{parentName:"p"},"dark")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"light")," themeColors using ",(0,a.yg)("inlineCode",{parentName:"p"},"updateTheme")," function which can be access from ",(0,a.yg)("inlineCode",{parentName:"p"},"useTheme")," hook."),(0,a.yg)("p",null,"Complete example of root of our application"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-jsx"},"import { ThemeProvider, Button, createTheme } from '@rneui/themed';\n\nconst myTheme = createTheme({\n  lightColors: {\n    primary: '#f2f2f2',\n  },\n  darkColors: {\n    primary: '#121212',\n  },\n  mode: 'dark',\n});\n\nconst App = () => {\n  return (\n    <ThemeProvider theme={myTheme}>\n      <Button title=\"My Button\" />\n    </ThemeProvider>\n  );\n};\n")),(0,a.yg)("p",null,"You can use props for components while defining themes"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-jsx"},"import { createTheme } from '@rneui/themed';\n\nconst myTheme = createTheme({\n  Button: (buttonProps) => ({\n    titleStyle: {\n      color: buttonProps.type === 'solid' ? 'blue' : 'red',\n    },\n  }),\n});\n")),(0,a.yg)("p",null,"Thus when we use ",(0,a.yg)("inlineCode",{parentName:"p"},"type='solid'")," in ",(0,a.yg)("inlineCode",{parentName:"p"},"Button")," component, it will use ",(0,a.yg)("inlineCode",{parentName:"p"},"titleStyle"),' will have "blue" color.'),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},"<Button type='solid'>\n")),(0,a.yg)("p",null,"Refer to ",(0,a.yg)("a",{parentName:"p",href:"https://reactnative.dev/docs/customization"},"Customization")," for more details."),(0,a.yg)("h3",{id:"tooltip"},(0,a.yg)("inlineCode",{parentName:"h3"},"Tooltip")),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"Tooltip")," is one of core component of RNE, Since v4 this component would be stateless and would use ",(0,a.yg)("inlineCode",{parentName:"p"},"visible"),", ",(0,a.yg)("inlineCode",{parentName:"p"},"onOpen")," & ",(0,a.yg)("inlineCode",{parentName:"p"},"onClose")," Props for its working."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-diff"},'  <Tooltip\n+   visible={open}\n+   onOpen={() => {\n+      setOpen(true);\n+   }}\n+   onClose={() => {\n+      setOpen(false);\n+   }}\n    popover="Hey All"\n  />\n')),(0,a.yg)("p",null,"You can still use Tooltip as stateful component by doing:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-js"},"const ControlledTooltip: React.FC<TooltipProps> = (props) => {\n  const [open, setOpen] = React.useState(false);\n  return (\n    <Tooltip\n      visible={open}\n      onOpen={() => {\n        setOpen(true);\n      }}\n      onClose={() => {\n        setOpen(false);\n      }}\n      {...props}\n    />\n  );\n};\n")))}d.isMDXComponent=!0}}]);