"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[28772],{3905:(t,e,a)=>{a.d(e,{Zo:()=>o,kt:()=>k});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function m(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var p=n.createContext({}),u=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},o=function(t){var e=u(t.components);return n.createElement(p.Provider,{value:e},t.children)},d="mdxType",s={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},N=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,o=m(t,["components","mdxType","originalType","parentName"]),d=u(a),N=r,k=d["".concat(p,".").concat(N)]||d[N]||s[N]||l;return a?n.createElement(k,i(i({ref:e},o),{},{components:a})):n.createElement(k,i({ref:e},o))}));function k(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=N;var m={};for(var p in e)hasOwnProperty.call(e,p)&&(m[p]=e[p]);m.originalType=t,m[d]="string"==typeof t?t:r,i[1]=m;for(var u=2;u<l;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}N.displayName="MDXCreateElement"},69303:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>s,frontMatter:()=>l,metadata:()=>m,toc:()=>u});var n=a(87462),r=(a(67294),a(3905));const l={title:"nbeats",description:"OpenBB Terminal Function"},i="nbeats",m={unversionedId:"terminal/reference/forecast/nbeats",id:"terminal/reference/forecast/nbeats",title:"nbeats",description:"OpenBB Terminal Function",source:"@site/content/terminal/reference/forecast/nbeats.md",sourceDirName:"terminal/reference/forecast",slug:"/terminal/reference/forecast/nbeats",permalink:"/terminal/reference/forecast/nbeats",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/reference/forecast/nbeats.md",tags:[],version:"current",frontMatter:{title:"nbeats",description:"OpenBB Terminal Function"},sidebar:"tutorialSidebar",previous:{title:"mstl",permalink:"/terminal/reference/forecast/mstl"},next:{title:"nhits",permalink:"/terminal/reference/forecast/nhits"}},p={},u=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2}],o={toc:u},d="wrapper";function s(t){let{components:e,...a}=t;return(0,r.kt)(d,(0,n.Z)({},o,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"nbeats"},"nbeats"),(0,r.kt)("p",null,"Perform NBEATS forecast (Neural Bayesian Estimation of Time Series): ",(0,r.kt)("a",{parentName:"p",href:"https://unit8co.github.io/darts/generated_api/darts.models.forecasting.nbeats.html"},"https://unit8co.github.io/darts/generated_api/darts.models.forecasting.nbeats.html")),(0,r.kt)("h3",{id:"usage"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python",metastring:"wordwrap",wordwrap:!0},"nbeats [--num_stacks NUM_STACKS] [--num_blocks NUM_BLOCKS] [--num_layers NUM_LAYERS] [--layer_widths LAYER_WIDTHS] [--past-covariates PAST_COVARIATES] [--all-past-covariates] [--naive] [-d {AAPL}] [-c TARGET_COLUMN] [-n N_DAYS] [-t TRAIN_SPLIT] [-i INPUT_CHUNK_LENGTH] [-o OUTPUT_CHUNK_LENGTH] [--force-reset FORCE_RESET] [--save-checkpoints SAVE_CHECKPOINTS] [--model-save-name MODEL_SAVE_NAME] [--n-epochs N_EPOCHS] [--batch-size BATCH_SIZE] [--end S_END_DATE] [--start S_START_DATE] [--learning-rate LEARNING_RATE] [--residuals] [--forecast-only] [--export-pred-raw] [--metric {rmse,mse,mape,smape}]\n")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Optional"),(0,r.kt)("th",{parentName:"tr",align:null},"Choices"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"num_stacks"),(0,r.kt)("td",{parentName:"tr",align:null},"--num_stacks"),(0,r.kt)("td",{parentName:"tr",align:null},"The number of stacks that make up the whole model."),(0,r.kt)("td",{parentName:"tr",align:null},"10"),(0,r.kt)("td",{parentName:"tr",align:null},"True"),(0,r.kt)("td",{parentName:"tr",align:null},"None")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"num_blocks"),(0,r.kt)("td",{parentName:"tr",align:null},"--num_blocks"),(0,r.kt)("td",{parentName:"tr",align:null},"The number of blocks making up every stack."),(0,r.kt)("td",{parentName:"tr",align:null},"3"),(0,r.kt)("td",{parentName:"tr",align:null},"True"),(0,r.kt)("td",{parentName:"tr",align:null},"None")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"num_layers"),(0,r.kt)("td",{parentName:"tr",align:null},"--num_layers"),(0,r.kt)("td",{parentName:"tr",align:null},"The number of fully connected layers preceding the final forking layers in each block of every stack."),(0,r.kt)("td",{parentName:"tr",align:null},"4"),(0,r.kt)("td",{parentName:"tr",align:null},"True"),(0,r.kt)("td",{parentName:"tr",align:null},"None")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"layer_widths"),(0,r.kt)("td",{parentName:"tr",align:null},"--layer_widths"),(0,r.kt)("td",{parentName:"tr",align:null},"Determines the number of neurons that make up each fully connected layer in each block of every stack"),(0,r.kt)("td",{parentName:"tr",align:null},"512"),(0,r.kt)("td",{parentName:"tr",align:null},"True"),(0,r.kt)("td",{parentName:"tr",align:null},"None")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"past_covariates"),(0,r.kt)("td",{parentName:"tr",align:null},"--past-covariates"),(0,r.kt)("td",{parentName:"tr",align:null},"Past covariates(columns/features) in same dataset. Comma separated."),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"True"),(0,r.kt)("td",{parentName:"tr",align:null},"None")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"all_past_covariates"),(0,r.kt)("td",{parentName:"tr",align:null},"--all-past-covariates"),(0,r.kt)("td",{parentName:"tr",align:null},"Adds all rows as past covariates except for date and the target column."),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null},"True"),(0,r.kt)("td",{parentName:"tr",align:null},"None")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"naive"),(0,r.kt)("td",{parentName:"tr",align:null},"--naive"),(0,r.kt)("td",{parentName:"tr",align:null},"Show the naive baseline for a model."),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null},"True"),(0,r.kt)("td",{parentName:"tr",align:null},"None")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"target_dataset"),(0,r.kt)("td",{parentName:"tr",align:null},"-d  --dataset"),(0,r.kt)("td",{parentName:"tr",align:null},"The name of the dataset you want to select"),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"True"),(0,r.kt)("td",{parentName:"tr",align:null},"AAPL")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"target_column"),(0,r.kt)("td",{parentName:"tr",align:null},"-c  --target-column"),(0,r.kt)("td",{parentName:"tr",align:null},"The name of the specific column you want to use"),(0,r.kt)("td",{parentName:"tr",align:null},"close"),(0,r.kt)("td",{parentName:"tr",align:null},"True"),(0,r.kt)("td",{parentName:"tr",align:null},"None")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"n_days"),(0,r.kt)("td",{parentName:"tr",align:null},"-n  --n-days"),(0,r.kt)("td",{parentName:"tr",align:null},"prediction days."),(0,r.kt)("td",{parentName:"tr",align:null},"5"),(0,r.kt)("td",{parentName:"tr",align:null},"True"),(0,r.kt)("td",{parentName:"tr",align:null},"None")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"train_split"),(0,r.kt)("td",{parentName:"tr",align:null},"-t  --train-split"),(0,r.kt)("td",{parentName:"tr",align:null},"Start point for rolling training and forecast window. 0.0-1.0"),(0,r.kt)("td",{parentName:"tr",align:null},"0.85"),(0,r.kt)("td",{parentName:"tr",align:null},"True"),(0,r.kt)("td",{parentName:"tr",align:null},"None")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"input_chunk_length"),(0,r.kt)("td",{parentName:"tr",align:null},"-i  --input-chunk-length"),(0,r.kt)("td",{parentName:"tr",align:null},"Number of past time steps for forecasting module at prediction time."),(0,r.kt)("td",{parentName:"tr",align:null},"14"),(0,r.kt)("td",{parentName:"tr",align:null},"True"),(0,r.kt)("td",{parentName:"tr",align:null},"None")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"output_chunk_length"),(0,r.kt)("td",{parentName:"tr",align:null},"-o  --output-chunk-length"),(0,r.kt)("td",{parentName:"tr",align:null},"The length of the forecast of the model."),(0,r.kt)("td",{parentName:"tr",align:null},"5"),(0,r.kt)("td",{parentName:"tr",align:null},"True"),(0,r.kt)("td",{parentName:"tr",align:null},"None")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"force_reset"),(0,r.kt)("td",{parentName:"tr",align:null},"--force-reset"),(0,r.kt)("td",{parentName:"tr",align:null},"If set to True, any previously-existing model with the same name will be reset (all checkpoints will be discarded)."),(0,r.kt)("td",{parentName:"tr",align:null},"True"),(0,r.kt)("td",{parentName:"tr",align:null},"True"),(0,r.kt)("td",{parentName:"tr",align:null},"None")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"save_checkpoints"),(0,r.kt)("td",{parentName:"tr",align:null},"--save-checkpoints"),(0,r.kt)("td",{parentName:"tr",align:null},"Whether to automatically save the untrained model and checkpoints."),(0,r.kt)("td",{parentName:"tr",align:null},"True"),(0,r.kt)("td",{parentName:"tr",align:null},"True"),(0,r.kt)("td",{parentName:"tr",align:null},"None")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"model_save_name"),(0,r.kt)("td",{parentName:"tr",align:null},"--model-save-name"),(0,r.kt)("td",{parentName:"tr",align:null},"Name of the model to save."),(0,r.kt)("td",{parentName:"tr",align:null},"nbeats_model"),(0,r.kt)("td",{parentName:"tr",align:null},"True"),(0,r.kt)("td",{parentName:"tr",align:null},"None")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"n_epochs"),(0,r.kt)("td",{parentName:"tr",align:null},"--n-epochs"),(0,r.kt)("td",{parentName:"tr",align:null},"Number of epochs over which to train the model."),(0,r.kt)("td",{parentName:"tr",align:null},"300"),(0,r.kt)("td",{parentName:"tr",align:null},"True"),(0,r.kt)("td",{parentName:"tr",align:null},"None")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"batch_size"),(0,r.kt)("td",{parentName:"tr",align:null},"--batch-size"),(0,r.kt)("td",{parentName:"tr",align:null},"Number of time series (input and output) used in each training pass"),(0,r.kt)("td",{parentName:"tr",align:null},"800"),(0,r.kt)("td",{parentName:"tr",align:null},"True"),(0,r.kt)("td",{parentName:"tr",align:null},"None")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"s_end_date"),(0,r.kt)("td",{parentName:"tr",align:null},"--end"),(0,r.kt)("td",{parentName:"tr",align:null},"The end date (format YYYY-MM-DD) to select for testing"),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"True"),(0,r.kt)("td",{parentName:"tr",align:null},"None")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"s_start_date"),(0,r.kt)("td",{parentName:"tr",align:null},"--start"),(0,r.kt)("td",{parentName:"tr",align:null},"The start date (format YYYY-MM-DD) to select for testing"),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"True"),(0,r.kt)("td",{parentName:"tr",align:null},"None")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"learning_rate"),(0,r.kt)("td",{parentName:"tr",align:null},"--learning-rate"),(0,r.kt)("td",{parentName:"tr",align:null},"Learning rate during training."),(0,r.kt)("td",{parentName:"tr",align:null},"0.001"),(0,r.kt)("td",{parentName:"tr",align:null},"True"),(0,r.kt)("td",{parentName:"tr",align:null},"None")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"residuals"),(0,r.kt)("td",{parentName:"tr",align:null},"--residuals"),(0,r.kt)("td",{parentName:"tr",align:null},"Show the residuals for the model."),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null},"True"),(0,r.kt)("td",{parentName:"tr",align:null},"None")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"forecast_only"),(0,r.kt)("td",{parentName:"tr",align:null},"--forecast-only"),(0,r.kt)("td",{parentName:"tr",align:null},"Do not plot the historical data without forecasts."),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null},"True"),(0,r.kt)("td",{parentName:"tr",align:null},"None")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"export_pred_raw"),(0,r.kt)("td",{parentName:"tr",align:null},"--export-pred-raw"),(0,r.kt)("td",{parentName:"tr",align:null},"Export predictions to a csv file."),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null},"True"),(0,r.kt)("td",{parentName:"tr",align:null},"None")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"metric"),(0,r.kt)("td",{parentName:"tr",align:null},"--metric"),(0,r.kt)("td",{parentName:"tr",align:null},"Calculate precision based on a specific metric (rmse, mse, mape)"),(0,r.kt)("td",{parentName:"tr",align:null},"mape"),(0,r.kt)("td",{parentName:"tr",align:null},"True"),(0,r.kt)("td",{parentName:"tr",align:null},"rmse, mse, mape, smape")))),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"2022 Jul 23, 10:36 (\ud83e\udd8b) /forecast/ $ load GME_20220719_123734.csv -a GME\n\n2022 Jul 23, 11:03 (\ud83e\udd8b) /forecast/ $ nbeats GME\n100%|\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588| 115/115 [00:0700:00, 15.10it/s]\nNBEATS model obtains MAPE: 23.53%\n\n\n\n       Actual price: $ 146.64\n\u250f\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2533\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2513\n\u2503 Datetime            \u2503 Prediction \u2503\n\u2521\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2547\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2529\n\u2502 2022-07-19 00:00:00 \u2502 $ 158.52   \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 2022-07-20 00:00:00 \u2502 $ 172.21   \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 2022-07-21 00:00:00 \u2502 $ 67.46    \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 2022-07-22 00:00:00 \u2502 $ 97.63    \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 2022-07-25 00:00:00 \u2502 $ 154.24   \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/72827203/180615396-d29126ae-ad75-4f84-9f67-2121dc4e695a.png",alt:"nbeats"})),(0,r.kt)("hr",null))}s.isMDXComponent=!0}}]);