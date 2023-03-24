"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[97960],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>u});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function a(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=n.createContext({}),s=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},p=function(e){var r=s(e.components);return n.createElement(l.Provider,{value:r},e.children)},d="mdxType",f={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),d=s(t),m=o,u=d["".concat(l,".").concat(m)]||d[m]||f[m]||i;return t?n.createElement(u,c(c({ref:r},p),{},{components:t})):n.createElement(u,c({ref:r},p))}));function u(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=t.length,c=new Array(i);c[0]=m;var a={};for(var l in r)hasOwnProperty.call(r,l)&&(a[l]=r[l]);a.originalType=e,a[d]="string"==typeof e?e:o,c[1]=a;for(var s=2;s<i;s++)c[s]=t[s];return n.createElement.apply(null,c)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},62872:(e,r,t)=>{t.d(r,{Z:()=>i});var n=t(39960),o=t(67294);function i(e){let{title:r,url:t,description:i}=e;return o.createElement(n.Z,{className:"rounded border !no-underline border-grey-400 bg-black p-6 cursor-pointer relative overflow-hidden",to:t},o.createElement("p",{className:"font-bold text-lg my-0"},r),i?o.createElement("p",{className:"text-grey-200 text-xs mt-2 mb-0"},i):null)}},38802:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>a,default:()=>m,frontMatter:()=>c,metadata:()=>l,toc:()=>p});var n=t(87462),o=(t(67294),t(3905)),i=t(62872);const c={},a="OpenBB Telegram Reference",l={unversionedId:"bot/reference/telegram/index",id:"bot/reference/telegram/index",title:"OpenBB Telegram Reference",description:"",source:"@site/content/bot/reference/telegram/index.mdx",sourceDirName:"bot/reference/telegram",slug:"/bot/reference/telegram/",permalink:"/bot/reference/telegram/",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/bot/reference/telegram/index.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"topshortvol",permalink:"/bot/reference/discord/short_data/topshortvol"},next:{title:"charts",permalink:"/bot/reference/telegram/charts/"}},s={},p=[],d={toc:p},f="wrapper";function m(e){let{components:r,...t}=e;return(0,o.kt)(f,(0,n.Z)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"openbb-telegram-reference"},"OpenBB Telegram Reference"),(0,o.kt)("ul",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 -ml-6"},(0,o.kt)(i.Z,{title:"charts",description:"c, c15m, c3m, c5m, cc, cd, chart, chartfib, chartsr, cm, cw",url:"/bot/reference/telegram/charts",mdxType:"ReferenceCard"}),(0,o.kt)(i.Z,{title:"crypto",description:"bigprints, bio, compfees, defi, fees, ir, prints, top, tvl",url:"/bot/reference/telegram/crypto",mdxType:"ReferenceCard"}),(0,o.kt)(i.Z,{title:"darkpool",description:"allblocks, alldp, allprints, bigprintsdp, levels, sectors, summary, topsum",url:"/bot/reference/telegram/darkpool",mdxType:"ReferenceCard"}),(0,o.kt)(i.Z,{title:"discovery",description:"arktrades, fgindex, halts, holidays, ipolist, pop, trendingst, wsb",url:"/bot/reference/telegram/discovery",mdxType:"ReferenceCard"}),(0,o.kt)(i.Z,{title:"duediligence",description:"ah, analyst, bio_stocks, customer, divinfo, earnings, ermove, financials, insiders, instholdings, nexter, pm, pt, sec, splits, supplier, ytd",url:"/bot/reference/telegram/duediligence",mdxType:"ReferenceCard"}),(0,o.kt)(i.Z,{title:"economy",description:"bonds, calendar, commodities, currencies, fedrates, indices, revrepo, yieldcurve",url:"/bot/reference/telegram/economy",mdxType:"ReferenceCard"}),(0,o.kt)(i.Z,{title:"etf",description:"holdings, tops",url:"/bot/reference/telegram/etf",mdxType:"ReferenceCard"}),(0,o.kt)(i.Z,{title:"flow",description:"bigflow, flow, flowsum, sectorsflow, summaryflow",url:"/bot/reference/telegram/flow",mdxType:"ReferenceCard"}),(0,o.kt)(i.Z,{title:"fun",description:"8ball, flip, urban",url:"/bot/reference/telegram/fun",mdxType:"ReferenceCard"}),(0,o.kt)(i.Z,{title:"general",description:"futures, news, quote, ta, watchlist",url:"/bot/reference/telegram/general",mdxType:"ReferenceCard"}),(0,o.kt)(i.Z,{title:"government",description:"contracts, house, senate",url:"/bot/reference/telegram/government",mdxType:"ReferenceCard"}),(0,o.kt)(i.Z,{title:"info",description:"about, start",url:"/bot/reference/telegram/info",mdxType:"ReferenceCard"}),(0,o.kt)(i.Z,{title:"nft",description:"nftcollection, nfttop",url:"/bot/reference/telegram/nft",mdxType:"ReferenceCard"}),(0,o.kt)(i.Z,{title:"options",description:"chains, equitypc, gamma, highiv, hist, indexpc, itm, iv, maxpain, oi, oichart, opstats, smile, topoi, topoichange, topstrikevol, topvol, topvoletf, unu, uoastock, vol, vsurf",url:"/bot/reference/telegram/options",mdxType:"ReferenceCard"}),(0,o.kt)(i.Z,{title:"overview",description:"heatchart, heatmap, markets, watchlist, watchlist_add, watchlist_remove",url:"/bot/reference/telegram/overview",mdxType:"ReferenceCard"}),(0,o.kt)(i.Z,{title:"screeners",description:"scr, screener",url:"/bot/reference/telegram/screeners",mdxType:"ReferenceCard"}),(0,o.kt)(i.Z,{title:"short_data",description:"borrowed, hsi, shortrate, shortvol, topshortvol",url:"/bot/reference/telegram/short_data",mdxType:"ReferenceCard"})))}m.isMDXComponent=!0}}]);