"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[60850],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>k});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),p=u(n),d=r,k=p["".concat(s,".").concat(d)]||p[d]||c[d]||i;return n?a.createElement(k,l(l({ref:t},m),{},{components:n})):a.createElement(k,l({ref:t},m))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[p]="string"==typeof e?e:r,l[1]=o;for(var u=2;u<i;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},78056:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var a=n(87462),r=(n(67294),n(3905));const i={title:"Current - Version 2.5.0",version:"2.5.0",date:new Date("2023-03-01T00:00:00.000Z"),description:"Version 2.5.0",sidebar_position:0},l=void 0,o={unversionedId:"terminal/changelog/version2_5_0",id:"terminal/changelog/version2_5_0",title:"Current - Version 2.5.0",description:"Version 2.5.0",source:"@site/content/terminal/changelog/version2_5_0.mdx",sourceDirName:"terminal/changelog",slug:"/terminal/changelog/version2_5_0",permalink:"/terminal/changelog/version2_5_0",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/changelog/version2_5_0.mdx",tags:[],version:"current",sidebarPosition:0,frontMatter:{title:"Current - Version 2.5.0",version:"2.5.0",date:"2023-03-01T00:00:00.000Z",description:"Version 2.5.0",sidebar_position:0},sidebar:"tutorialSidebar",previous:{title:"Current - Version 2.4.1",permalink:"/terminal/changelog/version2_4_1"},next:{title:"Current - Version 2.5.1",permalink:"/terminal/changelog/version2_5_1"}},s={},u=[{value:"What&#39;s new",id:"whats-new",level:2},{value:"What&#39;s changed",id:"whats-changed",level:2}],m={toc:u},p="wrapper";function c(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"whats-new"},"What's new"),(0,r.kt)("p",null,"We had quite a busy 2 weeks."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"New youtube video summarization and sentiment function using NLP.  (Note this requires you to install ffmpeg on your machine)."),(0,r.kt)("li",{parentName:"ul"},"Support of historical endpointpoints for DataBento!"),(0,r.kt)("li",{parentName:"ul"},"A brand new fixed income menu"),(0,r.kt)("li",{parentName:"ul"},"CPI by country"),(0,r.kt)("li",{parentName:"ul"},"Volatility cones"),(0,r.kt)("li",{parentName:"ul"},"General bug fix and improvements")),(0,r.kt)("h2",{id:"whats-changed"},"What's changed"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Fix issue 4316 (#4357) @Chavithra"),(0,r.kt)("li",{parentName:"ul"},"Fix short name (#4356) @JerBouma"),(0,r.kt)("li",{parentName:"ul"},"Hotfix/options screener fix (#4335) @deeleeramone"),(0,r.kt)("li",{parentName:"ul"},"[Feature]"," Automatic Video Analysis with NLP \ud83d\udcfa  (#4323) @martinb-bb"),(0,r.kt)("li",{parentName:"ul"},"Updating Docs Pages and Intro Guides.  (#4263) @deeleeramone"),(0,r.kt)("li",{parentName:"ul"},"Feature - Disable unit test on draft PR (#4342) @luqmanbello"),(0,r.kt)("li",{parentName:"ul"},"Introduce CPI (Consumer Price Index) functionality (#4350) @JerBouma"),(0,r.kt)("li",{parentName:"ul"},"Fix long/short issue and fix transform issue (#4349) @JerBouma"),(0,r.kt)("li",{parentName:"ul"},"Remove yfinance from news (#4332) @montezdesousa"),(0,r.kt)("li",{parentName:"ul"},"Clean up SDK files (#4321) @piiq"),(0,r.kt)("li",{parentName:"ul"},"Add fixed income text to main menu (#4345) @JerBouma"),(0,r.kt)("li",{parentName:"ul"},"Update functionality with FinanceDatabase v2, depreciate ",(0,r.kt)("inlineCode",{parentName:"li"},"stocks/sia"),", fix ",(0,r.kt)("inlineCode",{parentName:"li"},"exe --example")," and fix ",(0,r.kt)("inlineCode",{parentName:"li"},"stocks/fa/dcf")," (#4319) @JerBouma"),(0,r.kt)("li",{parentName:"ul"},"Got the correct papermill (#4318) @colin99d"),(0,r.kt)("li",{parentName:"ul"},"Add reverse fx choices to forex load (#4333) @montezdesousa"),(0,r.kt)("li",{parentName:"ul"},"Add options greeks to the SDK (#4334) @northern-64bit"),(0,r.kt)("li",{parentName:"ul"},"Hotfix/File Exists Error on ",(0,r.kt)("inlineCode",{parentName:"li"},"test_directories")," (#4338) @tehcoderer"),(0,r.kt)("li",{parentName:"ul"},"frozendict removal for build (#4330) @jmaslek"),(0,r.kt)("li",{parentName:"ul"},"Add fixed income menu (#4071) @northern-64bit"),(0,r.kt)("li",{parentName:"ul"},"Additional check for empty dataframe for ",(0,r.kt)("inlineCode",{parentName:"li"},"stocks load")," (#4325) @hjoaquim"),(0,r.kt)("li",{parentName:"ul"},"Changes the default data source for crypto.load (#4324) @hjoaquim"),(0,r.kt)("li",{parentName:"ul"},"Make integration tests more responsive (#4329) @montezdesousa"),(0,r.kt)("li",{parentName:"ul"},"Patch Equity Report (#4327) @hjoaquim"),(0,r.kt)("li",{parentName:"ul"},"Update so that image links to website (#4328) @JerBouma"),(0,r.kt)("li",{parentName:"ul"},"Adding databento as a source (#4293) @jmaslek"),(0,r.kt)("li",{parentName:"ul"},"Add tweet news in terminal toolbar (#3757) @DidierRLopes"),(0,r.kt)("li",{parentName:"ul"},"Auto login on the SDK if local session is found (#4297) @hjoaquim"),(0,r.kt)("li",{parentName:"ul"},"User UUID to use the designated column instead (#4299) @hjoaquim"),(0,r.kt)("li",{parentName:"ul"},"Set query arg in economy/eval as required (#4317) @elyanah-aco"),(0,r.kt)("li",{parentName:"ul"},"Nightly Publish to Pypi (#4315) @luqmanbello"),(0,r.kt)("li",{parentName:"ul"},"Allow entering into the sources menu (#4312) @jmaslek"),(0,r.kt)("li",{parentName:"ul"},"Added flake8-simplify (#4227) @colin99d"),(0,r.kt)("li",{parentName:"ul"},"Handle ",(0,r.kt)("inlineCode",{parentName:"li"},"end_date")," with ",(0,r.kt)("inlineCode",{parentName:"li"},"CCXT")," source when loading crypto (#4296) @northern-64bit"),(0,r.kt)("li",{parentName:"ul"},"Fixes #3873 and adds generic naming to financial statements (#4142) @northern-64bit"),(0,r.kt)("li",{parentName:"ul"},"Display correct risk free rate in the portfolio menu help message (#4217) @northern-64bit"),(0,r.kt)("li",{parentName:"ul"},"Speed up pytest with xdist plugin (#4307) @jmaslek"),(0,r.kt)("li",{parentName:"ul"},"Hotfix for SIA menu (#4294) @jmaslek"),(0,r.kt)("li",{parentName:"ul"},"Hotfix/sdk-ta-docs (#4301) @tehcoderer"),(0,r.kt)("li",{parentName:"ul"},"Fix Unit Test (#4298) @luqmanbello"),(0,r.kt)("li",{parentName:"ul"},"Update api-keys.md (#4256) @shivansh2310"),(0,r.kt)("li",{parentName:"ul"},"fix variable name (#4289) @xinbaDev"),(0,r.kt)("li",{parentName:"ul"},"Fix spelling mistake in portfolio menu help message (#4291) @northern-64bit"),(0,r.kt)("li",{parentName:"ul"},"Fix ",(0,r.kt)("inlineCode",{parentName:"li"},"--help")," for ",(0,r.kt)("inlineCode",{parentName:"li"},"stocks/candle"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"stocks/tob")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"stocks/news")," (#4292) @northern-64bit"),(0,r.kt)("li",{parentName:"ul"},"Release/2.4.1 (#4274) @jmaslek")))}c.isMDXComponent=!0}}]);