"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[13085],{14247:(e,t,a)=>{a.r(t),a.d(t,{default:()=>d});var l=a(67294),n=a(86010),s=a(10833),r=a(35281),c=a(84743),o=a(78256),i=a(70541);const m={mdxPageWrapper:"mdxPageWrapper_j9I6"};function d(e){const{content:t}=e,{metadata:{title:a,description:d,frontMatter:u}}=t,{wrapperClassName:g,hide_table_of_contents:p}=u;return l.createElement(s.FG,{className:(0,n.Z)(g??r.k.wrapper.mdxPages,r.k.page.mdxPage)},l.createElement(s.d,{title:a,description:d}),l.createElement(c.Z,null,l.createElement("main",{className:"container container--fluid margin-vert--lg"},l.createElement("div",{className:(0,n.Z)("row",m.mdxPageWrapper)},l.createElement("div",{className:(0,n.Z)("col",!p&&"col--8")},l.createElement("article",null,l.createElement(o.Z,null,l.createElement(t,null)))),!p&&t.toc.length>0&&l.createElement("div",{className:"col col--2"},l.createElement(i.Z,{toc:t.toc,minHeadingLevel:u.toc_min_heading_level,maxHeadingLevel:u.toc_max_heading_level}))))))}},77362:(e,t,a)=>{a.d(t,{Z:()=>c});var l=a(67294),n=a(86010),s=a(66505),r=a(19500);function c(e){let{children:t,className:a}=e;return l.createElement(s.Z,{as:"pre",tabIndex:0,className:(0,n.Z)(r.Z.codeBlockStandalone,"thin-scrollbar",a)},l.createElement("code",{className:r.Z.codeBlockLines},t))}},56918:(e,t,a)=>{a.d(t,{Z:()=>N});var l=a(87462),n=a(67294),s=a(86010),r=a(86668),c=a(66412),o=a(37016),i=a(85448),m=a(23746),d=a(78397),u=a(15291),g=a(12601),p=a(66505),f=a(19500),k=a(16550);function N(e){let{children:t,className:a="",metastring:N,title:b,showLineNumbers:E,language:h}=e;const[Z,C]=(0,n.useState)(null),{prism:{defaultLanguage:v,magicComments:L}}=(0,r.L)(),x=h??(0,o.Vo)(a)??v,_=(0,c.p)(),w=(0,i.F)(),B=(0,o.bc)(N)||b,{lineClassNames:y,code:S}=(0,o.nZ)(t,{metastring:N,language:x,magicComments:L}),H=E??(0,o.nt)(N),P=N?.includes("wordwrap"),W=function(){const e=new Date;e.setMonth(e.getMonth()+1),e.setDate(1);let t=(5-e.getDay()+7)%7;t+=15,e.setDate(t);const a=e.getFullYear().toString(),l=(e.getMonth()+1).toString().padStart(2,"0"),n=e.getDate().toString().padStart(2,"0");return`${a}-${l}-${n}`}(),T=S.replace("2022-07-29",W),{pathname:O}=(0,k.TH)();(0,n.useEffect)((()=>{if($.current&&O.startsWith("/bot/")){const e=$.current.parentElement.previousElementSibling;if(e&&e.id.includes("examples")){const e=function(e,t){if(!e.startsWith("/bot/"))return null;const a=e.split("/")[4],l=e.split("/")[3];let n="c3m";if("charts"!=a&&"general"!=a||"discord"!=l)if("telegram"==l)console.log(a),n="etf"==a.toString()||"screeners"==a.toString()?t.split(" ")[1].toLowerCase():t.split(" ")[0].toLowerCase().replace("/","");else try{n=t.split(" ")[1].toLowerCase().replace("/",""),"defi"==n&&(n=t.split(" ")[2].toLowerCase().replace("/",""))}catch(s){n=t.split(" ")[0].toLowerCase().replace("/","")}else n=t.split(" ")[0].toLowerCase().replace("/","");return`https://openbb-assets.s3.amazonaws.com/${l}/${a}/${n}.png`}(O,T);C(e)}}}),[]);const $=(0,n.useRef)(null);return n.createElement(n.Fragment,null,n.createElement(p.Z,{as:"div",className:(0,s.Z)(a,x&&!a.includes(`language-${x}`)&&`language-${x}`)},B&&n.createElement("div",{className:f.Z.codeBlockTitle},B),n.createElement("div",{className:f.Z.codeBlockContent,ref:$},n.createElement(m.ZP,(0,l.Z)({},m.lG,{theme:_,code:T,language:x??"text"}),(e=>{let{className:t,tokens:a,getLineProps:l,getTokenProps:r}=e;return n.createElement("pre",{tabIndex:0,ref:w.codeBlockRef,className:(0,s.Z)(t,f.Z.codeBlock,"thin-scrollbar")},n.createElement("code",{style:P?{whiteSpace:"pre-wrap",overflowWrap:"anywhere"}:{},className:(0,s.Z)(f.Z.codeBlockLines,H&&f.Z.codeBlockLinesWithNumbering)},a.map(((e,t)=>n.createElement(d.Z,{key:t,line:e,getLineProps:l,getTokenProps:r,classNames:y[t],showLineNumbers:H})))))})),n.createElement("div",{className:f.Z.buttonGroup},(w.isEnabled||w.isCodeScrollable)&&n.createElement(g.Z,{className:f.Z.codeButton,onClick:()=>w.toggle(),isEnabled:w.isEnabled}),n.createElement(u.Z,{className:f.Z.codeButton,code:T})))),Z&&n.createElement("img",{onError:()=>{C(null)},src:Z,alt:"example"}))}},17426:(e,t,a)=>{a.d(t,{Z:()=>m});var l=a(87462),n=a(67294),s=a(86010),r=a(31173);const c={details:"details_r1OI"},o="alert alert--info";function i(e){let{...t}=e;return n.createElement(r.P,(0,l.Z)({},t,{className:(0,s.Z)(o,c.details,t.className)}))}function m(e){const t=n.Children.toArray(e.children),a=t.find((e=>n.isValidElement(e)&&"summary"===e.props?.mdxType)),s=n.createElement(n.Fragment,null,t.filter((e=>e!==a)));return n.createElement(i,(0,l.Z)({},e,{summary:a}),s)}},70541:(e,t,a)=>{a.d(t,{Z:()=>i});var l=a(87462),n=a(67294),s=a(86010),r=a(38769);const c={tableOfContents:"tableOfContents_jeP5",docItemContainer:"docItemContainer_hgFs"};var o=a(16550);function i(e){let{className:t,...a}=e;const{pathname:i}=(0,o.TH)();return i.startsWith("/sdk/reference/")?null:n.createElement("div",{className:(0,s.Z)(c.tableOfContents,"thin-scrollbar text-sm mt-[48px] xl:max-w-[216px]",t)},n.createElement("p",{className:"uppercase text-sm font-bold text-grey-600 dark:text-grey-200 tracking-widest mb-2"},"On this page"),n.createElement(r.Z,(0,l.Z)({},a,{linkClassName:"text-grey-400 capitalize !no-underline",linkActiveClassName:"!text-white"})))}},38769:(e,t,a)=>{a.d(t,{Z:()=>d});var l=a(87462),n=a(67294),s=a(86668),r=a(39665),c=a(96841),o=a(86010);function i(e){let{toc:t,className:a,linkClassName:l,isChild:s}=e;return t.length?n.createElement("ul",{className:s?"list-none ml-1 border-l border-grey-300 dark:border-grey-600 mt-2":"border-l border-grey-300 dark:border-grey-600 list-none pl-4"},t.map(((e,t)=>n.createElement("li",{key:e.id,className:(0,o.Z)({"pb-1":0===t,"py-1":0!==t,"pl-3":s})},n.createElement("a",{href:`#${e.id}`,className:l??void 0,dangerouslySetInnerHTML:{__html:e.value}}),n.createElement(i,{isChild:!0,toc:e.children,className:a,linkClassName:l}))))):null}const m=n.memo(i);function d(e){let{toc:t,className:a="table-of-contents table-of-contents__left-border",linkClassName:o="table-of-contents__link",linkActiveClassName:i,minHeadingLevel:d,maxHeadingLevel:u,...g}=e;const p=(0,s.L)(),f=d??p.tableOfContents.minHeadingLevel,k=u??p.tableOfContents.maxHeadingLevel,N=(0,r.b)({toc:t,minHeadingLevel:f,maxHeadingLevel:k}),b=(0,n.useMemo)((()=>{if(o&&i)return{linkClassName:o,linkActiveClassName:i,minHeadingLevel:f,maxHeadingLevel:k}}),[o,i,f,k]);return(0,c.S)(b),n.createElement(m,(0,l.Z)({toc:N,className:a,linkClassName:o},g))}},19500:(e,t,a)=>{a.d(t,{Z:()=>l});const l={codeBlockContent:"codeBlockContent_m3Ux",codeBlockTitle:"codeBlockTitle_P25_",codeBlock:"codeBlock_qGQc",codeBlockStandalone:"codeBlockStandalone_zC50",codeBlockLines:"codeBlockLines_p187",codeBlockLinesWithNumbering:"codeBlockLinesWithNumbering_OFgW",buttonGroup:"buttonGroup_6DOT"}}}]);