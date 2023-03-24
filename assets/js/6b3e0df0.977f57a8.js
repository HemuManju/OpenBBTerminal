"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[50572],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=l(n),m=a,h=c["".concat(p,".").concat(m)]||c[m]||d[m]||o;return n?r.createElement(h,i(i({ref:t},u),{},{components:n})):r.createElement(h,i({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[c]="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},98985:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=n(87462),a=(n(67294),n(3905));const o={title:"Bugs, Support, and Feedback",sidebar_position:6,description:"Submit a bug report or support ticket.",keywords:["installation","installer","install","guide","mac","windows","linux","python","github","macos","how to","explanation","openbb terminal"]},i=void 0,s={unversionedId:"sdk/faqs/bugs_support_feedback",id:"sdk/faqs/bugs_support_feedback",title:"Bugs, Support, and Feedback",description:"Submit a bug report or support ticket.",source:"@site/content/sdk/faqs/bugs_support_feedback.md",sourceDirName:"sdk/faqs",slug:"/sdk/faqs/bugs_support_feedback",permalink:"/sdk/faqs/bugs_support_feedback",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/sdk/faqs/bugs_support_feedback.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{title:"Bugs, Support, and Feedback",sidebar_position:6,description:"Submit a bug report or support ticket.",keywords:["installation","installer","install","guide","mac","windows","linux","python","github","macos","how to","explanation","openbb terminal"]},sidebar:"tutorialSidebar",previous:{title:"Data and Sources",permalink:"/sdk/faqs/data_sources"},next:{title:"Developer Issues",permalink:"/sdk/faqs/developer_issues"}},p={},l=[{value:"Bugs, Support, and Feedback",id:"bugs-support-and-feedback",level:2}],u={toc:l},c="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"bugs-support-and-feedback"},"Bugs, Support, and Feedback"),(0,a.kt)("p",null,"When an error is encountered, it is always a good idea to check the open issues on ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/OpenBB-finance/OpenBBTerminal/issues"},"GitHub"),". There may be a workaround solution for the specific problem until a patch is released."),(0,a.kt)("details",null,(0,a.kt)("summary",null,"How often are patches for bugs released?"),(0,a.kt)("p",null,"The installer versions are packaged approximately every two-weeks. Those working with a cloned GitHub version can checkout the Develop branch to get the latest fixes and releases before they are pushed to the main branch."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"git checkout develop\n"))),(0,a.kt)("details",null,(0,a.kt)("summary",null,"How do I report a bug?"),(0,a.kt)("p",null,"First, search the open issues for another report. If one already exists, attach any relevant information and screenshots as a comment. If one does not exist, start one with this ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/OpenBB-finance/OpenBBTerminal/issues/new?assignees=&labels=type%3Abug&template=bug_report.md&title=%5BBug%5D"},"link"))),(0,a.kt)("details",null,(0,a.kt)("summary",null,"How can I get help with OpenBB Terminal?"),(0,a.kt)("p",null,"You can get help with OpenBB Terminal by joining our ",(0,a.kt)("a",{parentName:"p",href:"https://openbb.co/discord"},"Discord server")," or contact us in our support form ",(0,a.kt)("a",{parentName:"p",href:"https://openbb.co/support"},"here"),".")),(0,a.kt)("details",null,(0,a.kt)("summary",null,"How can I give feedback about the OpenBB Terminal, or request specific functionality?"),(0,a.kt)("p",null,"Being an open source platform that wishes to tailor to the needs of any type of investor, we highly encourage anyone to share with us their experience and/or how we can further improve the OpenBB Terminal. This can be anything from a very small bug, a new feature, or the implementation of a highly advanced Machine Learning model."),(0,a.kt)("p",null,"You are able to directly send us information about a bug or a question/suggestion from inside the terminal by using the ",(0,a.kt)("inlineCode",{parentName:"p"},"support")," command which is available everywhere in the terminal. Here you can select which command you want to report a bug on, ask a question or make a suggestion. After entering ",(0,a.kt)("inlineCode",{parentName:"p"},"support"),", when you press ",(0,a.kt)("inlineCode",{parentName:"p"},"ENTER")," (\u23ce), you are taken to the Support form which is automatically filled with your input. You are only required to include the type (e.g. bug, suggestion or question) and message in the form, although this can also be set directly from inside the terminal (see ",(0,a.kt)("inlineCode",{parentName:"p"},"support -h"),")."),(0,a.kt)("p",null,"Alternatively, you can contact us via the following routes:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"If you notice that a feature is missing inside the terminal, please fill in the ",(0,a.kt)("a",{parentName:"li",href:"https://openbb.co/request-a-feature"},"Request a Feature")," form."),(0,a.kt)("li",{parentName:"ul"},"If you wish to report a bug, have a question/suggestion or anything else, please fill in the ",(0,a.kt)("a",{parentName:"li",href:"https://openbb.co/support"},"Support")," form."),(0,a.kt)("li",{parentName:"ul"},"If you wish to speak to us directly, please contact us on ",(0,a.kt)("a",{parentName:"li",href:"https://openbb.co/discord"},"Discord"),"."))))}d.isMDXComponent=!0}}]);