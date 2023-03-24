"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6109],{3905:(e,t,i)=>{i.d(t,{Zo:()=>d,kt:()=>g});var n=i(67294);function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function o(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function a(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?o(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function s(e,t){if(null==e)return{};var i,n,r=function(e,t){if(null==e)return{};var i,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),i=t;return e&&(i="function"==typeof e?e(t):a(a({},t),e)),i},d=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var i=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(i),m=r,g=u["".concat(l,".").concat(m)]||u[m]||p[m]||o;return i?n.createElement(g,a(a({ref:t},d),{},{components:i})):n.createElement(g,a({ref:t},d))}));function g(e,t){var i=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=i.length,a=new Array(o);a[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:r,a[1]=s;for(var c=2;c<o;c++)a[c]=i[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,i)}m.displayName="MDXCreateElement"},49892:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=i(87462),r=(i(67294),i(3905));const o={title:"Individual",sidebar_position:3,description:"TBD",keywords:["discord","telegram","individual","customizing","customization","how to","explanation","openbb bot","openbb","guide","bot guide"]},a=void 0,s={unversionedId:"bot/guides/customizing/individual",id:"bot/guides/customizing/individual",title:"Individual",description:"TBD",source:"@site/content/bot/guides/customizing/individual.md",sourceDirName:"bot/guides/customizing",slug:"/bot/guides/customizing/individual",permalink:"/bot/guides/customizing/individual",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/bot/guides/customizing/individual.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Individual",sidebar_position:3,description:"TBD",keywords:["discord","telegram","individual","customizing","customization","how to","explanation","openbb bot","openbb","guide","bot guide"]},sidebar:"tutorialSidebar",previous:{title:"Customizing",permalink:"/bot/guides/customizing/"},next:{title:"Server",permalink:"/bot/guides/customizing/server"}},l={},c=[{value:"Customizing your Individual Bot Experience",id:"customizing-your-individual-bot-experience",level:2},{value:"Charting",id:"charting",level:3},{value:"Alerts",id:"alerts",level:3},{value:"Watchlist",id:"watchlist",level:3},{value:"Server (Discord Only)",id:"server-discord-only",level:2}],d={toc:c},u="wrapper";function p(e){let{components:t,...i}=e;return(0,r.kt)(u,(0,n.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"customizing-your-individual-bot-experience"},"Customizing your Individual Bot Experience"),(0,r.kt)("p",null,"The individual plan offers three different capabilities - Charting, Alerts, and Watchlist. In addition to these benefits you also get unlimited commands per month after registering."),(0,r.kt)("h3",{id:"charting"},"Charting"),(0,r.kt)("p",null,"Our most popular commands center around the real-time charting capabilities we offer with OpenBB Bot. We allow you to customize many different aspects of your charts when you register with us. You can customize the chart theme and style as well as adding any on and off chart indicators you desire. These settings will apply across all platforms."),(0,r.kt)("img",{src:"https://openbb-assets.s3.amazonaws.com/docs/bot_docs/charting.png",alt:"charting openBB",width:"70%",height:"70%"}),(0,r.kt)("h3",{id:"alerts"},"Alerts"),(0,r.kt)("p",null,"Alerts are a powerful tool used by OpenBB users. Simply set the symbol and price you wish to be alerted at and we do the rest!"),(0,r.kt)("img",{src:"https://openbb-assets.s3.amazonaws.com/docs/bot_docs/alerts.png",alt:"alerts openBB",width:"70%",height:"70%"}),(0,r.kt)("h3",{id:"watchlist"},"Watchlist"),(0,r.kt)("p",null,"OpenBB Watchlist is a great way to keep track of all your investments in once place. Add Crypto or Stock symbols and quickly see the prices at a glance when its convenient for you.\nYou can add your tickers through the HUB or run ",(0,r.kt)("inlineCode",{parentName:"p"},"/watchlist")," in your respective platform to configure."),(0,r.kt)("img",{src:"https://openbb-assets.s3.amazonaws.com/docs/bot_docs/watchlist.png",alt:"watchlist openBB",width:"70%",height:"70%"}),(0,r.kt)("img",{src:"https://openbb-assets.s3.amazonaws.com/docs/bot_docs/watchlistadd.png",alt:"watchlist add openBB",width:"70%",height:"70%"}),(0,r.kt)("h2",{id:"server-discord-only"},"Server (Discord Only)"))}p.isMDXComponent=!0}}]);