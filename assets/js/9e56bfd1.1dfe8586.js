"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[84092],{3905:(t,e,a)=>{a.d(e,{Zo:()=>m,kt:()=>N});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},i=Object.keys(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var p=n.createContext({}),g=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):l(l({},e),t)),a},m=function(t){var e=g(t.components);return n.createElement(p.Provider,{value:e},t.children)},d="mdxType",s={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},k=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,i=t.originalType,p=t.parentName,m=o(t,["components","mdxType","originalType","parentName"]),d=g(a),k=r,N=d["".concat(p,".").concat(k)]||d[k]||s[k]||i;return a?n.createElement(N,l(l({ref:e},m),{},{components:a})):n.createElement(N,l({ref:e},m))}));function N(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=a.length,l=new Array(i);l[0]=k;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o[d]="string"==typeof t?t:r,l[1]=o;for(var g=2;g<i;g++)l[g]=a[g];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},37658:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>l,default:()=>s,frontMatter:()=>i,metadata:()=>o,toc:()=>g});var n=a(87462),r=(a(67294),a(3905));const i={title:"Government",keywords:["government","house","senate","politician","lobby","lobbyist","contract","contractor","spending","budget","treasury","trading","buys","sells","ticker","tickers","companies","listing","exchange"],description:"This guide introduces the Government submenu, within the Stocks menu, by briefly explaining the features and how to use them, showing examples in context."},l=void 0,o={unversionedId:"sdk/usage/intros/stocks/government",id:"sdk/usage/intros/stocks/government",title:"Government",description:"This guide introduces the Government submenu, within the Stocks menu, by briefly explaining the features and how to use them, showing examples in context.",source:"@site/content/sdk/usage/intros/stocks/government.md",sourceDirName:"sdk/usage/intros/stocks",slug:"/sdk/usage/intros/stocks/government",permalink:"/sdk/usage/intros/stocks/government",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/sdk/usage/intros/stocks/government.md",tags:[],version:"current",frontMatter:{title:"Government",keywords:["government","house","senate","politician","lobby","lobbyist","contract","contractor","spending","budget","treasury","trading","buys","sells","ticker","tickers","companies","listing","exchange"],description:"This guide introduces the Government submenu, within the Stocks menu, by briefly explaining the features and how to use them, showing examples in context."},sidebar:"tutorialSidebar",previous:{title:"Fundamental Analysis",permalink:"/sdk/usage/intros/stocks/fundamental-analysis"},next:{title:"Options",permalink:"/sdk/usage/intros/stocks/options"}},p={},g=[{value:"How to Use",id:"how-to-use",level:2},{value:"Examples",id:"examples",level:2},{value:"Import Statements",id:"import-statements",level:3},{value:"Toplobbying",id:"toplobbying",level:3},{value:"Contracts",id:"contracts",level:3},{value:"Histcont",id:"histcont",level:3},{value:"Lobbying",id:"lobbying",level:3},{value:"Lastcontracts",id:"lastcontracts",level:3}],m={toc:g},d="wrapper";function s(t){let{components:e,...a}=t;return(0,r.kt)(d,(0,n.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The Government module provides programmatic access to the same functions from the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.openbb.co/terminal/usage/intros/stocks/gov"},"OpenBB Terminal"),". They provide an excellent supplement to fundamental and macroeconomic research. Please note that this module will only return data from the USA."),(0,r.kt)("h2",{id:"how-to-use"},"How to Use"),(0,r.kt)("p",null,"Below is a list of all the commands and a brief description. There are two types of function: ticker-specific, and non-specific. Many of these tables also have a companion ",(0,r.kt)("inlineCode",{parentName:"p"},"_chart")," function."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Path"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"right"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"openbb.stocks.gov.contracts"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Ticker"),(0,r.kt)("td",{parentName:"tr",align:"right"},"Contracts Awarded to a Company")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"openbb.stocks.gov.gtrades"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Ticker"),(0,r.kt)("td",{parentName:"tr",align:"right"},"Reported Trades in a Company's Stock by Members of the US Congress and Senate")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"openbb.stocks.gov.histcont"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Ticker"),(0,r.kt)("td",{parentName:"tr",align:"right"},"The Quarterly Total Amount Paid to a Company by the Government")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"openbb.stocks.gov.lastcontracts"),(0,r.kt)("td",{parentName:"tr",align:"center"},"All"),(0,r.kt)("td",{parentName:"tr",align:"right"},"The Latest Invoices Paid by the US Treasury Department")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"openbb.stocks.gov.lasttrades"),(0,r.kt)("td",{parentName:"tr",align:"center"},"All"),(0,r.kt)("td",{parentName:"tr",align:"right"},"The Latest Reported Trades Made by Members of the US Congress and Senate")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"openbb.stocks.gov.lobbying"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Ticker"),(0,r.kt)("td",{parentName:"tr",align:"right"},"Recorded Lobbying Efforts by a Company")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"openbb.stocks.gov.qtrcontracts"),(0,r.kt)("td",{parentName:"tr",align:"center"},"All"),(0,r.kt)("td",{parentName:"tr",align:"right"},"Ranking Companies by Total Amount Rewarded")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"openbb.stocks.gov.topbuys"),(0,r.kt)("td",{parentName:"tr",align:"center"},"All"),(0,r.kt)("td",{parentName:"tr",align:"right"},"The Top Buyers in Office")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"openbb.stocks.gov.toplobbying"),(0,r.kt)("td",{parentName:"tr",align:"center"},"All"),(0,r.kt)("td",{parentName:"tr",align:"right"},"Corporate Lobbyist Activity and the Specific Issues")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"openbb.stocks.gov.topsells"),(0,r.kt)("td",{parentName:"tr",align:"center"},"All"),(0,r.kt)("td",{parentName:"tr",align:"right"},"The Top Sellers in Office")))),(0,r.kt)("p",null,"Alternatively, Python's built-in help will display the contents of the module, or specific function."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"help(openbb.stocks.gov)\n")),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("h3",{id:"import-statements"},"Import Statements"),(0,r.kt)("p",null,"The examples below will assume that this block is included at the top of the file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"from openbb_terminal.sdk import openbb\n")),(0,r.kt)("h3",{id:"toplobbying"},"Toplobbying"),(0,r.kt)("p",null,"This command shows who is spending money in Washington and what their intentions are."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"openbb.stocks.gov.toplobbying()\n")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"right"}),(0,r.kt)("th",{parentName:"tr",align:"left"},"Date"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Ticker"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Client"),(0,r.kt)("th",{parentName:"tr",align:"right"},"Amount"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Issue"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Specific_Issue"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"495"),(0,r.kt)("td",{parentName:"tr",align:"left"},"2022-10-20"),(0,r.kt)("td",{parentName:"tr",align:"left"},"DKNG"),(0,r.kt)("td",{parentName:"tr",align:"left"},"DRAFTKINGS INC."),(0,r.kt)("td",{parentName:"tr",align:"right"},"20000"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Taxation/Internal Revenue Code"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Tax characterization of daily fantasy sports.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"496"),(0,r.kt)("td",{parentName:"tr",align:"left"},"2022-10-20"),(0,r.kt)("td",{parentName:"tr",align:"left"},"ELVT"),(0,r.kt)("td",{parentName:"tr",align:"left"},"ELEVATE CREDIT SERVICE, LLC"),(0,r.kt)("td",{parentName:"tr",align:"right"},"90000"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Banking"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Monitored issues concerning online lending proposals.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"497"),(0,r.kt)("td",{parentName:"tr",align:"left"},"2022-10-20"),(0,r.kt)("td",{parentName:"tr",align:"left"},"HGV"),(0,r.kt)("td",{parentName:"tr",align:"left"},"HILTON GRAND VACATIONS"),(0,r.kt)("td",{parentName:"tr",align:"right"},"20000"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Financial Institutions/Investments/Securities"),(0,r.kt)("td",{parentName:"tr",align:"left"},"GENERAL DISCUSSIONS RELATED TO DEBT SERVICING")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"498"),(0,r.kt)("td",{parentName:"tr",align:"left"},"2022-10-20"),(0,r.kt)("td",{parentName:"tr",align:"left"},"SO"),(0,r.kt)("td",{parentName:"tr",align:"left"},"SOUTHERN CALIFORNIA TRIBAL CHAIRMEN'S ASSOCIATION"),(0,r.kt)("td",{parentName:"tr",align:"right"},"40000"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Indian/Native American Affairs"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Fee to trust issues. Issues surrounding federal programs for Indian tribes.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"499"),(0,r.kt)("td",{parentName:"tr",align:"left"},"2022-10-20"),(0,r.kt)("td",{parentName:"tr",align:"left"},"ONCS"),(0,r.kt)("td",{parentName:"tr",align:"left"},"ONCOSEC MEDICAL INCORPORATED"),(0,r.kt)("td",{parentName:"tr",align:"right"},"0"),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"})))),(0,r.kt)("h3",{id:"contracts"},"Contracts"),(0,r.kt)("p",null,"Get a list of contracts awarded to a company and the agency authorizing it."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"openbb.stocks.gov.contracts('AMT')\n")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"right"}),(0,r.kt)("th",{parentName:"tr",align:"left"},"Date"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Agency"),(0,r.kt)("th",{parentName:"tr",align:"right"},"Amount"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"0"),(0,r.kt)("td",{parentName:"tr",align:"left"},"2022-10-16"),(0,r.kt)("td",{parentName:"tr",align:"left"},"RENTAL TOWER SITE"),(0,r.kt)("td",{parentName:"tr",align:"left"},"DEPARTMENT OF JUSTICE (DOJ)"),(0,r.kt)("td",{parentName:"tr",align:"right"},"0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"1"),(0,r.kt)("td",{parentName:"tr",align:"left"},"2022-10-01"),(0,r.kt)("td",{parentName:"tr",align:"left"},"ANTENNA LEASE SITE 43  AMERICAN TOWER"),(0,r.kt)("td",{parentName:"tr",align:"left"},"DEPARTMENT OF HOMELAND SECURITY (DHS)"),(0,r.kt)("td",{parentName:"tr",align:"right"},"13699.9")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"2"),(0,r.kt)("td",{parentName:"tr",align:"left"},"2022-10-01"),(0,r.kt)("td",{parentName:"tr",align:"left"},"IGF::OT::IGF"),(0,r.kt)("td",{parentName:"tr",align:"left"},"DEPARTMENT OF JUSTICE (DOJ)"),(0,r.kt)("td",{parentName:"tr",align:"right"},"5100")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"3"),(0,r.kt)("td",{parentName:"tr",align:"left"},"2022-10-01"),(0,r.kt)("td",{parentName:"tr",align:"left"},"LEASE OF RADIO REPEATER SITE"),(0,r.kt)("td",{parentName:"tr",align:"left"},"DEPARTMENT OF THE TREASURY (TREAS)"),(0,r.kt)("td",{parentName:"tr",align:"right"},"9787.84")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"4"),(0,r.kt)("td",{parentName:"tr",align:"left"},"2022-10-01"),(0,r.kt)("td",{parentName:"tr",align:"left"},"IGF::OT::IGF::-RECUR SERVICE FOR ANTENNA SITE  J ACCOUNT   LEASE AT:  MARIETTA, GA (BLACKWELL SITE)"),(0,r.kt)("td",{parentName:"tr",align:"left"},"DEPARTMENT OF JUSTICE (DOJ)"),(0,r.kt)("td",{parentName:"tr",align:"right"},"0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"5"),(0,r.kt)("td",{parentName:"tr",align:"left"},"2022-10-01"),(0,r.kt)("td",{parentName:"tr",align:"left"},"FUNDING FOR FY 2018 THROUGH FY 2019 ANTENNA SITE AGREEMENTS"),(0,r.kt)("td",{parentName:"tr",align:"left"},"DEPARTMENT OF STATE (DOS)"),(0,r.kt)("td",{parentName:"tr",align:"right"},"30000")))),(0,r.kt)("h3",{id:"histcont"},"Histcont"),(0,r.kt)("p",null,"Get the historic (from 2008) quarterly sum paid to a company by the US Treasury department."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"openbb.stocks.gov.histcont('AMT')\n")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"right"}),(0,r.kt)("th",{parentName:"tr",align:"right"},"Qtr"),(0,r.kt)("th",{parentName:"tr",align:"right"},"Year"),(0,r.kt)("th",{parentName:"tr",align:"right"},"Amount"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"0"),(0,r.kt)("td",{parentName:"tr",align:"right"},"4"),(0,r.kt)("td",{parentName:"tr",align:"right"},"2021"),(0,r.kt)("td",{parentName:"tr",align:"right"},"127282")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"1"),(0,r.kt)("td",{parentName:"tr",align:"right"},"3"),(0,r.kt)("td",{parentName:"tr",align:"right"},"2021"),(0,r.kt)("td",{parentName:"tr",align:"right"},"564310")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"2"),(0,r.kt)("td",{parentName:"tr",align:"right"},"2"),(0,r.kt)("td",{parentName:"tr",align:"right"},"2021"),(0,r.kt)("td",{parentName:"tr",align:"right"},"564645")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"52"),(0,r.kt)("td",{parentName:"tr",align:"right"},"4"),(0,r.kt)("td",{parentName:"tr",align:"right"},"2008"),(0,r.kt)("td",{parentName:"tr",align:"right"},"110021")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"53"),(0,r.kt)("td",{parentName:"tr",align:"right"},"3"),(0,r.kt)("td",{parentName:"tr",align:"right"},"2008"),(0,r.kt)("td",{parentName:"tr",align:"right"},"240877")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"54"),(0,r.kt)("td",{parentName:"tr",align:"right"},"2"),(0,r.kt)("td",{parentName:"tr",align:"right"},"2008"),(0,r.kt)("td",{parentName:"tr",align:"right"},"907099")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"55"),(0,r.kt)("td",{parentName:"tr",align:"right"},"1"),(0,r.kt)("td",{parentName:"tr",align:"right"},"2008"),(0,r.kt)("td",{parentName:"tr",align:"right"},"320620")))),(0,r.kt)("h3",{id:"lobbying"},"Lobbying"),(0,r.kt)("p",null,"Find the records of a company's lobbying efforts."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"openbb.stocks.gov.lobbying('AMT')\n")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"right"}),(0,r.kt)("th",{parentName:"tr",align:"left"},"Date"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Ticker"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Client"),(0,r.kt)("th",{parentName:"tr",align:"right"},"Amount"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Issue"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Specific_Issue"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"0"),(0,r.kt)("td",{parentName:"tr",align:"left"},"2022-12-01"),(0,r.kt)("td",{parentName:"tr",align:"left"},"AMT"),(0,r.kt)("td",{parentName:"tr",align:"left"},"AMERICAN TOWER CORPORATION"),(0,r.kt)("td",{parentName:"tr",align:"right"},"440000"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Trade (domestic/foreign)"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Issues pertaining to global trade, global development, AID and the World Bank including trade policy with India - no specific legislation.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"}),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"right"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"Communications/Broadcasting/Radio/TV"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Telecommunication infrastructure issues including those related to the Federal Communications Commission - no specific legislation. Issues related to NTIA - including implementation of broadband funding programs in the Infrastructure Investment and Jobs Act, HR 3684. Issues related to 5G and wireless communications deployment - no specific legislation. Issues related to the definition of eligible project costs - no specific legislation. Issues pertaining to broadband deployment, including relevant provisions in the Infrastructure Investment and Jobs Act, HR 3684 and related legislation.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"}),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"right"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"Telecommunications"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Issues pertaining to telecommunications tower real estate - no specific legislation. Issues related to global telecommunications policy - no specific legislation.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"}),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"right"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"Taxation/Internal Revenue Code"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Issues related to international and domestic tax provisions as applied to real estate investment trusts and Public Law 115-97 (Tax Cuts and Jobs Act), including H.R. 5376, the Inflation Reduction Act of 2022.")))),(0,r.kt)("h3",{id:"lastcontracts"},"Lastcontracts"),(0,r.kt)("p",null,"Find out who is selling ink, toner cartridges, or other seemingly mundane items, to the Federal government."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"openbb.stocks.gov.lastcontracts()\n")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"right"}),(0,r.kt)("th",{parentName:"tr",align:"left"},"Date"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Ticker"),(0,r.kt)("th",{parentName:"tr",align:"right"},"Amount"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Agency"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"0"),(0,r.kt)("td",{parentName:"tr",align:"left"},"2022-12-02 00:00:00"),(0,r.kt)("td",{parentName:"tr",align:"left"},"DNOW"),(0,r.kt)("td",{parentName:"tr",align:"right"},"81.3"),(0,r.kt)("td",{parentName:"tr",align:"left"},"CASE, FILING, TRANSFER: ITEM NAME CASE, FILING,"),(0,r.kt)("td",{parentName:"tr",align:"left"},"GENERAL SERVICES ADMINISTRATION (GSA)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"}),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"right"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"TRANSFER INSIDE WIDTH 8.250 INCHES INSIDE LENGTH"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"}),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"right"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"5.500 INCHES INSIDE DEPTH 10.75 INCHES CARD WIDTH"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"}),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"right"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"8.000 INCHES CARD LENGTH 5.000 INCHES CARD"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"}),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"right"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"CAPACITY 1,200 UNIT TYPE BOX UNIT DESIGN NON-"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"}),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"right"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"COLLAPSIBL"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"1"),(0,r.kt)("td",{parentName:"tr",align:"left"},"2022-12-02 00:00:00"),(0,r.kt)("td",{parentName:"tr",align:"left"},"DNOW"),(0,r.kt)("td",{parentName:"tr",align:"right"},"855.6"),(0,r.kt)("td",{parentName:"tr",align:"left"},"CARTRIDGE,TONER"),(0,r.kt)("td",{parentName:"tr",align:"left"},"GENERAL SERVICES ADMINISTRATION (GSA)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"2"),(0,r.kt)("td",{parentName:"tr",align:"left"},"2022-12-02 00:00:00"),(0,r.kt)("td",{parentName:"tr",align:"left"},"DNOW"),(0,r.kt)("td",{parentName:"tr",align:"right"},"169.84"),(0,r.kt)("td",{parentName:"tr",align:"left"},"TONER,HP 508X HY, LJ,YL"),(0,r.kt)("td",{parentName:"tr",align:"left"},"GENERAL SERVICES ADMINISTRATION (GSA)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"3"),(0,r.kt)("td",{parentName:"tr",align:"left"},"2022-12-02 00:00:00"),(0,r.kt)("td",{parentName:"tr",align:"left"},"DNOW"),(0,r.kt)("td",{parentName:"tr",align:"right"},"519.5"),(0,r.kt)("td",{parentName:"tr",align:"left"},"CARTRIDGE,INK"),(0,r.kt)("td",{parentName:"tr",align:"left"},"GENERAL SERVICES ADMINISTRATION (GSA)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"4"),(0,r.kt)("td",{parentName:"tr",align:"left"},"2022-12-02 00:00:00"),(0,r.kt)("td",{parentName:"tr",align:"left"},"DNOW"),(0,r.kt)("td",{parentName:"tr",align:"right"},"1778.1"),(0,r.kt)("td",{parentName:"tr",align:"left"},"OEM HP HY TONER, YELLOW, YLD 23K"),(0,r.kt)("td",{parentName:"tr",align:"left"},"GENERAL SERVICES ADMINISTRATION (GSA)")))))}s.isMDXComponent=!0}}]);