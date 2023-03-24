"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[19899],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),c=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(r),d=a,f=m["".concat(i,".").concat(d)]||m[d]||u[d]||l;return r?n.createElement(f,o(o({ref:t},p),{},{components:r})):n.createElement(f,o({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[m]="string"==typeof e?e:a,o[1]=s;for(var c=2;c<l;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},28912:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const l={title:"spacc",description:"OpenBB Terminal Function"},o="spacc",s={unversionedId:"terminal/reference/stocks/ba/spacc",id:"terminal/reference/stocks/ba/spacc",title:"spacc",description:"OpenBB Terminal Function",source:"@site/content/terminal/reference/stocks/ba/spacc.md",sourceDirName:"terminal/reference/stocks/ba",slug:"/terminal/reference/stocks/ba/spacc",permalink:"/terminal/reference/stocks/ba/spacc",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/reference/stocks/ba/spacc.md",tags:[],version:"current",frontMatter:{title:"spacc",description:"OpenBB Terminal Function"},sidebar:"tutorialSidebar",previous:{title:"snews",permalink:"/terminal/reference/stocks/ba/snews"},next:{title:"stalker",permalink:"/terminal/reference/stocks/ba/stalker"}},i={},c=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2}],p={toc:c},m="wrapper";function u(e){let{components:t,...r}=e;return(0,a.kt)(m,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"spacc"},"spacc"),(0,a.kt)("p",null,"Print other users SPACs announcement under subreddit 'SPACs'. ","[Source: Reddit]"),(0,a.kt)("h3",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python",metastring:"wordwrap",wordwrap:!0},"spacc [-l N_LIMIT] [-p]\n")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"),(0,a.kt)("th",{parentName:"tr",align:null},"Optional"),(0,a.kt)("th",{parentName:"tr",align:null},"Choices"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"n_limit"),(0,a.kt)("td",{parentName:"tr",align:null},"-l  --limit"),(0,a.kt)("td",{parentName:"tr",align:null},"limit of posts with SPACs retrieved"),(0,a.kt)("td",{parentName:"tr",align:null},"10"),(0,a.kt)("td",{parentName:"tr",align:null},"True"),(0,a.kt)("td",{parentName:"tr",align:null},"None")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"b_popular"),(0,a.kt)("td",{parentName:"tr",align:null},"-p  --popular"),(0,a.kt)("td",{parentName:"tr",align:null},"popular flag, if true the posts retrieved are based on score rather than time"),(0,a.kt)("td",{parentName:"tr",align:null},"False"),(0,a.kt)("td",{parentName:"tr",align:null},"True"),(0,a.kt)("td",{parentName:"tr",align:null},"None")))),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"2022 Feb 16, 10:43 (\ud83e\udd8b) /stocks/ba/ $ spacc\n2022-02-16 11:35:01 - I scraped r/SPACs for the top ticker mentions in the last 24H. Here are the results (Wednesday February 16, 2022)\nhttps://old.reddit.com/r/SPACs/comments/sttsnl/i_scraped_rspacs_for_the_top_ticker_mentions_in/\n\n2022-02-16 09:26:19 - PPGH Gogoro confirms that it is expected to list overseas in the first quarter of this year\nhttps://old.reddit.com/r/SPACs/comments/strs9m/ppgh_gogoro_confirms_that_it_is_expected_to_list/\n\n2022-02-16 08:00:16 - Announcements x Daily Discussion for Wednesday, February 16, 2022\nhttps://old.reddit.com/r/SPACs/comments/stqhci/announcements_x_daily_discussion_for_wednesday/\n\n2022-02-15 15:10:40 - Did IBKR resolve my SPAC redemptions wrongly?\nhttps://old.reddit.com/r/SPACs/comments/st52xb/did_ibkr_resolve_my_spac_redemptions_wrongly/\n\nThe following stock tickers have been mentioned more than once across the previous SPACs:\n8 CCAC, 6 IBKR, 3 CLBT, 3 SLDP, 2 VIAC, 2 CND\n")),(0,a.kt)("hr",null))}u.isMDXComponent=!0}}]);