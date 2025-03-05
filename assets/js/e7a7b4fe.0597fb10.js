"use strict";(self.webpackChunkrne_website=self.webpackChunkrne_website||[]).push([[502],{68906:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>p,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>y});var o=n(9668),s=n(21367),a=(n(96540),n(15680)),r=["components"],l={title:"Styles",sidebar_position:3},p=void 0,i={unversionedId:"customization/styles",id:"version-4.0.0-rc.8/customization/styles",title:"Styles",description:"makeStyles",source:"@site/versioned_docs/version-4.0.0-rc.8/customization/styles.mdx",sourceDirName:"customization",slug:"/customization/styles",permalink:"/react-native-elements-next/docs/customization/styles",draft:!1,editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/versioned_docs/version-4.0.0-rc.8/customization/styles.mdx",tags:[],version:"4.0.0-rc.8",sidebarPosition:3,frontMatter:{title:"Styles",sidebar_position:3},sidebar:"docs",previous:{title:"Theme Provider",permalink:"/react-native-elements-next/docs/customization/themeprovider"},next:{title:"Extending Theme",permalink:"/react-native-elements-next/docs/customization/extending"}},m={},y=[{value:"<code>makeStyles</code>",id:"makestyles",level:3},{value:"<code>styled</code>",id:"styled",level:3}],c={toc:y},g="wrapper";function d(e){var t=e.components,n=(0,s.A)(e,r);return(0,a.yg)(g,(0,o.A)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h3",{id:"makestyles"},(0,a.yg)("inlineCode",{parentName:"h3"},"makeStyles")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Imports")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},"import { makeStyles } from '@rneui/themed';\n")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Function Signture")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},"makeStyles(styles: Styles | ((theme, props) => Styles))\n")),(0,a.yg)("p",null,"If you want to keep your styles outside the component use ",(0,a.yg)("inlineCode",{parentName:"p"},"makeStyles()")," (hook generator) to reference the ",(0,a.yg)("inlineCode",{parentName:"p"},"theme")," and component props (optional param)."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Usage")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},"type Props = {\n  fullWidth?: boolean;\n};\n\nconst useStyles = makeStyles((theme, props: Props) => ({\n  container: {\n    background: theme.colors.white,\n    width: props.fullWidth ? '100%' : 'auto',\n  },\n  text: {\n    color: theme.colors.primary,\n  },\n}));\n\nconst MyComponent = (props: Props) => {\n  const styles = useStyles(props);\n\n  return (\n    <View style={styles.container}>\n      <Text style={styles.text}>Yo!</Text>\n    </View>\n  );\n};\n")),(0,a.yg)("h3",{id:"styled"},(0,a.yg)("inlineCode",{parentName:"h3"},"styled")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Imports")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},"import { styled } from '@rneui/themed';\n")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Function Signture")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},"styled(Component)<Props>(styles: Styles | ((theme, props) => Styles))\n")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Usage")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},"const Conatiner = styled(View)({\n  // default style of component\n  root: {\n    paddingHorizontal: 16,\n  },\n});\n")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},"const Surface = styled(View)((theme) => ({\n  // default style of component\n  root: {\n    backgroundColor: theme.colors.background,\n  },\n}));\n")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Using RNE's component")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},"const RedButton = styled(Button)({\n  containerStyle: {\n    backgroundColor: 'red',\n  },\n});\n")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Using custom props")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},"type MyCompProps = { bold?: boolean };\n\nconst Component = styled(Text)<MyCompProps>((theme, { bold }) => ({\n  root: {\n    fontWeight: bold ? 'bold' : 'normal',\n    color: theme.colors.primary,\n  },\n}));\n")))}d.isMDXComponent=!0}}]);