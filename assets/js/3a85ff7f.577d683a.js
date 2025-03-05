"use strict";(self.webpackChunkrne_website=self.webpackChunkrne_website||[]).push([[2741],{87313:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>d,frontMatter:()=>r,metadata:()=>u,toc:()=>g});var s=n(9668),a=n(21367),i=(n(96540),n(15680)),o=["components"],r={id:"testing",title:"Testing",slug:"/testing"},p=void 0,u={unversionedId:"repo/testing",id:"version-4.0.0-rc.8/repo/testing",title:"Testing",description:"We are using tests to make sure components keep their functionality between versions and edits.",source:"@site/versioned_docs/version-4.0.0-rc.8/repo/testing.md",sourceDirName:"repo",slug:"/testing",permalink:"/react-native-elements-next/docs/testing",draft:!1,editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/versioned_docs/version-4.0.0-rc.8/repo/testing.md",tags:[],version:"4.0.0-rc.8",frontMatter:{id:"testing",title:"Testing",slug:"/testing"},sidebar:"docs",previous:{title:"Contributing",permalink:"/react-native-elements-next/docs/contributing"},next:{title:"Label Guide",permalink:"/react-native-elements-next/docs/labels"}},l={},g=[{value:"Snapshot Testing",id:"snapshot-testing",level:2},{value:"Functional Testing",id:"functional-testing",level:2}],h={toc:g},c="wrapper";function d(e){var t=e.components,n=(0,a.A)(e,o);return(0,i.yg)(c,(0,s.A)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("p",null,"We are using tests to make sure components keep their functionality between versions and edits.\nThey're many testing libraries for JavaScript and React Native, depending on what type of testing you're doing."),(0,i.yg)("p",null,"The type of tests we use on React Native Elements are ",(0,i.yg)("a",{parentName:"p",href:"#snapshot-testing"},"Snapshot"),"\nand ",(0,i.yg)("a",{parentName:"p",href:"#functional-testing"},"Functional")," tests."),(0,i.yg)("h2",{id:"snapshot-testing"},"Snapshot Testing"),(0,i.yg)("p",null,"Snapshot testing sounds exactly like what it does! It takes snapshot of the structure of a rendered\ncomponent the props, and their values and saves it. Whenever a change is made it'll compare it to the original snapshot -\njust to be super sure the change you wanted to make had the desired outcome.\nIf the outcomes is what you expected, then you need to ",(0,i.yg)("strong",{parentName:"p"},"update the snapshot"),", so that your changes will be the new\nstandard to compare to for changes in the future."),(0,i.yg)("p",null,"To update the snapshots run this command:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-bash"},"# yarn\nyarn test -u\n\n# npm\nnpm run test -u\n")),(0,i.yg)("p",null,"For Snapshot Testing, we use ",(0,i.yg)("a",{parentName:"p",href:"https://jestjs.io/"},"Jest"),"."),(0,i.yg)("p",null,"You can read more about snapshot testing ",(0,i.yg)("a",{parentName:"p",href:"https://jestjs.io/docs/en/snapshot-testing.html"},"here"),"."),(0,i.yg)("h2",{id:"functional-testing"},"Functional Testing"),(0,i.yg)("p",null,"Functional tests ensures that a component functions the way it should(",(0,i.yg)("em",{parentName:"p"},"simplified"),"). This is important\nfor making changes to components, as it makes sure we don't break how something worked previously."),(0,i.yg)("p",null,"For example:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-md"},"If a user touches on a button in the button group, then the button selected should be highlighted\nand the previous one un-highlighted.\n")),(0,i.yg)("p",null,"For Functional Testing, we use ",(0,i.yg)("a",{parentName:"p",href:"https://callstack.github.io/react-native-testing-library/"},"React Native Testing Library"),"."),(0,i.yg)("p",null,"You can read more about functional testing ",(0,i.yg)("a",{parentName:"p",href:"https://www.guru99.com/functional-testing.html"},"here"),"."))}d.isMDXComponent=!0}}]);