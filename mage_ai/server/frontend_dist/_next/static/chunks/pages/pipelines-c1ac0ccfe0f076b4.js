(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1221],{17903:function(n,e,t){"use strict";t.d(e,{Z:function(){return T}});var r=t(82394),o=t(12691),i=t.n(o),u=t(82684),c=t(67971),l=t(10919),a=t(86673),s=t(19711),d=t(46261),f=t(9518),p=t(23831),h=t(49125),b=f.default.table.withConfig({displayName:"indexstyle__TableStyle",componentId:"sc-1wzfyed-0"})(["contain:size;width:100%;",""],(function(n){return(n.columnBorders||n.borderCollapseSeparate)&&"\n    border-collapse: separate;\n  "})),m=f.default.tr.withConfig({displayName:"indexstyle__TableRowStyle",componentId:"sc-1wzfyed-1"})(["",""],(function(n){return!n.noHover&&"\n    &:hover {\n      background: ".concat((n.theme.interactive||p.Z.interactive).rowHoverBackground,";\n      cursor: pointer;\n    }\n  ")})),g=(0,f.css)(["text-overflow:ellipsis;white-space:nowrap;"," "," "," "," "," ",""],(function(n){return!n.alignTop&&"\n    vertical-align: middle;\n  "}),(function(n){return n.alignTop&&"\n    vertical-align: top;\n  "}),(function(n){return!n.noBorder&&"\n    border-bottom: 1px solid ".concat((n.theme.borders||p.Z.borders).light,";\n  ")}),(function(n){return n.compact&&"\n    padding: ".concat(h.iI/2,"px ").concat(h.iI,"px;\n  ")}),(function(n){return!n.compact&&"\n    padding: ".concat(h.iI,"px ").concat(2*h.iI,"px;\n  ")}),(function(n){return n.maxWidth&&"\n    max-width: ".concat(n.maxWidth,";\n  ")})),v=f.default.th.withConfig({displayName:"indexstyle__TableHeadStyle",componentId:"sc-1wzfyed-2"})([""," "," "," ",""],g,(function(n){return n.columnBorders&&"\n    border: 1px solid ".concat((n.theme.borders||p.Z.borders).light,";\n    border-right: none;\n  ")}),(function(n){return n.columnBorders&&n.last&&"\n    border-right: 1px solid ".concat((n.theme.borders||p.Z.borders).light,";\n  ")}),(function(n){return n.sticky&&"\n    background-color: ".concat((n.theme||p.Z).background.panel,";\n    border-bottom: 1px solid ").concat((n.theme.borders||p.Z.borders).medium,";\n    z-index: 1;\n    position: sticky;\n    top: 0;\n\n    &:first-child {\n      left: 0;\n      z-index: 2;\n    }\n  ")})),y=f.default.td.withConfig({displayName:"indexstyle__TableDataStyle",componentId:"sc-1wzfyed-3"})([""," "," "," "," "," ",""],g,(function(n){return n.columnBorders&&"\n    border-left: 1px solid ".concat((n.theme.borders||p.Z.borders).light,";\n  ")}),(function(n){return n.columnBorders&&n.last&&"\n    border-right: 1px solid ".concat((n.theme.borders||p.Z.borders).light,";\n  ")}),(function(n){return n.stickyFirstColumn&&"\n    background-color: ".concat((n.theme||p.Z).background.panel,";\n    z-index: 1;\n    position: sticky;\n    left: 0;\n  ")}),(function(n){return n.selected&&"\n    background-color: ".concat((n.theme.interactive||p.Z.interactive).activeBorder,";\n  ")}),(function(n){return n.wrapColumns&&"\n    white-space: break-spaces;\n  "})),O=t(28598);function w(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function A(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?w(Object(t),!0).forEach((function(e){(0,r.Z)(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):w(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}var T=function(n){var e=n.alignTop,t=n.borderCollapseSeparate,r=n.buildLinkProps,o=n.columnBorders,f=n.columnFlex,p=n.columnMaxWidth,h=n.columns,g=void 0===h?[]:h,w=n.compact,T=n.isSelectedRow,E=n.noBorder,P=n.noHeader,R=n.onClickRow,j=n.rows,C=n.stickyFirstColumn,k=n.stickyHeader,S=n.uuid,Z=n.wrapColumns,D=(0,u.useMemo)((function(){return f.reduce((function(n,e){return n+(e||0)}),0)}),f),x=(0,u.useCallback)((function(n){if(f[n]){var e=Math.round(f[n]/D*100);return"".concat(e,"%")}return null}),[]),_=(0,u.useMemo)((function(){return null===j||void 0===j?void 0:j.map((function(n,t){var c=null===r||void 0===r?void 0:r(t),a=n.map((function(r,i){return(0,O.jsx)(y,{alignTop:e,columnBorders:o,compact:w,last:i===n.length-1,maxWidth:null===p||void 0===p?void 0:p(i),noBorder:E,selected:null===T||void 0===T?void 0:T(t),stickyFirstColumn:C&&0===i,width:x(i),wrapColumns:Z,children:r},"".concat(S,"-row-").concat(t,"-cell-").concat(i))})),s=(0,O.jsx)(m,{noHover:!(c||R),onClick:R?function(){return R(t)}:null,children:a},"".concat(S,"-row-").concat(t));return c?(0,u.createElement)(i(),A(A({},c),{},{key:"".concat(S,"-row-link-").concat(t),passHref:!0}),(0,O.jsx)(l.Z,{fullWidth:!0,noHoverUnderline:!0,noOutline:!0,style:{display:"table-row-group"},verticalAlignContent:!0,children:s})):s}))}),[e,r,x,p,g,w,T,E,R,j]);return(0,O.jsxs)(b,{borderCollapseSeparate:t,columnBorders:o,children:[(null===g||void 0===g?void 0:g.length)>=1&&!P&&(0,O.jsx)(m,{noHover:!0,children:g.map((function(n,e){return(0,O.jsx)(v,{columnBorders:o,compact:w,last:e===g.length-1,noBorder:E,sticky:k,children:(0,O.jsxs)(c.Z,{alignItems:"center",children:[(0,O.jsx)(s.ZP,{bold:!0,leftAligned:!0,monospace:!0,muted:!0,children:n.label?n.label():n.uuid}),n.tooltipMessage&&(0,O.jsx)(a.Z,{ml:"4px",children:(0,O.jsx)(d.Z,{appearBefore:!0,label:(0,O.jsx)(s.ZP,{leftAligned:!0,children:n.tooltipMessage}),lightBackground:!0,primary:!0})})]})},"".concat(S,"-col-").concat(n.uuid,"-").concat(e))}))}),_]})}},86422:function(n,e,t){"use strict";t.d(e,{$W:function(){return f},DA:function(){return d},HX:function(){return b},J8:function(){return h},Lq:function(){return a},Qj:function(){return m},Ut:function(){return O},V4:function(){return y},VZ:function(){return p},dO:function(){return s},f2:function(){return v},iZ:function(){return g},t6:function(){return u},tf:function(){return l}});var r,o,i,u,c=t(82394);!function(n){n.PYTHON="python",n.R="r",n.SQL="sql",n.YAML="yaml"}(u||(u={}));var l,a,s=(r={},(0,c.Z)(r,u.PYTHON,"PY"),(0,c.Z)(r,u.R,"R"),(0,c.Z)(r,u.SQL,"SQL"),(0,c.Z)(r,u.YAML,"YAML"),r);!function(n){n.CHART="chart",n.CUSTOM="custom",n.DATA_EXPORTER="data_exporter",n.DATA_LOADER="data_loader",n.DBT="dbt",n.SCRATCHPAD="scratchpad",n.SENSOR="sensor",n.TRANSFORMER="transformer"}(l||(l={})),function(n){n.BLUE="blue",n.GREY="grey",n.PINK="pink",n.PURPLE="purple",n.TEAL="teal",n.YELLOW="yellow"}(a||(a={}));var d,f=[l.CHART,l.CUSTOM,l.DATA_EXPORTER,l.DATA_LOADER,l.SCRATCHPAD,l.SENSOR,l.TRANSFORMER],p=[l.DATA_EXPORTER,l.DATA_LOADER],h=[l.DATA_EXPORTER,l.DATA_LOADER,l.TRANSFORMER],b=[l.DATA_EXPORTER,l.DATA_LOADER,l.DBT,l.TRANSFORMER],m=[l.CHART,l.SCRATCHPAD,l.SENSOR],g=[l.SCRATCHPAD];!function(n){n.EXECUTED="executed",n.FAILED="failed",n.NOT_EXECUTED="not_executed",n.UPDATED="updated"}(d||(d={}));var v=[l.DATA_EXPORTER,l.TRANSFORMER],y=(o={},(0,c.Z)(o,l.CUSTOM,"Custom"),(0,c.Z)(o,l.DATA_EXPORTER,"Data exporter"),(0,c.Z)(o,l.DATA_LOADER,"Data loader"),(0,c.Z)(o,l.SCRATCHPAD,"Scratchpad"),(0,c.Z)(o,l.SENSOR,"Sensor"),(0,c.Z)(o,l.TRANSFORMER,"Transformer"),o),O=[l.DATA_LOADER,l.TRANSFORMER,l.DATA_EXPORTER];i={},(0,c.Z)(i,l.DATA_EXPORTER,"DE"),(0,c.Z)(i,l.DATA_LOADER,"DL"),(0,c.Z)(i,l.SCRATCHPAD,"SP"),(0,c.Z)(i,l.SENSOR,"SR"),(0,c.Z)(i,l.TRANSFORMER,"TF")},93348:function(n,e,t){"use strict";t.d(e,{U5:function(){return c},Xm:function(){return o},Z4:function(){return l},fq:function(){return u}});var r,o,i=t(82394);!function(n){n.API="api",n.EVENT="event",n.TIME="time"}(o||(o={}));var u,c,l=(r={},(0,i.Z)(r,o.API,(function(){return"API"})),(0,i.Z)(r,o.EVENT,(function(){return"event"})),(0,i.Z)(r,o.TIME,(function(){return"schedule"})),r);!function(n){n.ACTIVE="active",n.INACTIVE="inactive"}(u||(u={})),function(n){n.ONCE="@once",n.HOURLY="@hourly",n.DAILY="@daily",n.WEEKLY="@weekly",n.MONTHLY="@monthly"}(c||(c={}))},98781:function(n,e,t){"use strict";t.d(e,{a:function(){return u},q:function(){return o}});var r,o,i=t(82394);!function(n){n.INTEGRATION="integration",n.PYTHON="python",n.PYSPARK="pyspark",n.STREAMING="streaming"}(o||(o={}));var u=(r={},(0,i.Z)(r,o.PYTHON,"python3"),(0,i.Z)(r,o.PYSPARK,"pysparkkernel"),r)},30264:function(n,e,t){"use strict";var r=t(82394),o=t(26304),i=(t(82684),t(47999)),u=t(62084),c=t(28598),l=["children","items","open","onClickCallback","onClickOutside","parentRef","uuid"];function a(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function s(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?a(Object(t),!0).forEach((function(e){(0,r.Z)(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}e.Z=function(n){var e=n.children,t=n.items,r=n.open,a=n.onClickCallback,d=n.onClickOutside,f=n.parentRef,p=n.uuid,h=(0,o.Z)(n,l),b=(0,c.jsxs)("div",{style:{position:"relative",zIndex:d?3:2},children:[(0,c.jsx)("div",{ref:f,children:e}),(0,c.jsx)(u.Z,s(s({},h),{},{items:t,onClickCallback:a,open:r,parentRef:f,uuid:p}))]});return d?(0,c.jsx)(i.Z,{onClickOutside:d,open:!0,children:b}):b}},5545:function(n,e,t){"use strict";t.r(e);var r=t(77837),o=t(82394),i=t(75582),u=t(38860),c=t.n(u),l=t(83455),a=t(82684),s=t(34376),d=t(60328),f=t(70434),p=t(93461),h=t(30264),b=t(11135),m=t(98781),g=t(41788),v=t(17903),y=t(19711),O=t(55170),w=t(10503),A=t(86422),T=t(99994),E=t(93348),P=t(49125),R=t(90211),j=t(96510),C=t(66653),k=t(28598);function S(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function Z(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?S(Object(t),!0).forEach((function(e){(0,o.Z)(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):S(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function D(){var n=(0,s.useRouter)(),e=(0,a.useState)({}),t=e[0],r=e[1],u=(0,a.useState)(!1),c=u[0],g=u[1],S=(0,a.useRef)(null),D=O.ZP.pipelines.list({include_schedules:1}),x=D.data,_=D.mutate,N=(0,a.useMemo)((function(){return(null===x||void 0===x?void 0:x.pipelines)||[]}),[x]),M=(0,a.useCallback)((function(){return g(!1)}),[]),I=(0,l.Db)(O.ZP.pipelines.useCreate(),{onSuccess:function(e){return(0,j.wD)(e,{callback:function(e){var t=e.pipeline.uuid;n.push("/pipelines/[pipeline]/edit","/pipelines/".concat(t,"/edit"))},onErrorCallback:function(n){var e=n.error,t=e.errors,r=e.message;console.log(t,r)}})}}),L=(0,i.Z)(I,2),H=L[0],B=L[1].isLoading,Y=(0,l.Db)((function(n){return O.ZP.pipelines.useUpdate(n.uuid)({pipeline:n})}),{onSuccess:function(n){return(0,j.wD)(n,{callback:function(n){var e=n.pipeline.uuid;r((function(n){return Z(Z({},n),{},(0,o.Z)({},e,!1))})),_()},onErrorCallback:function(n){var e=n.error,t=e.errors,r=e.message;console.log(t,r)}})}}),z=(0,i.Z)(Y,1)[0];return(0,k.jsx)(f.Z,{subheaderChildren:(0,k.jsx)(h.Z,{disableKeyboardShortcuts:!0,items:[{label:function(){return"Standard (batch)"},onClick:function(){return H({pipeline:{name:(0,R.Y6)()}})},uuid:"Pipelines/NewPipelineMenu/standard"},{label:function(){return"Data integration"},onClick:function(){return H({pipeline:{name:(0,R.Y6)(),type:m.q.INTEGRATION}})},uuid:"Pipelines/NewPipelineMenu/integration"},{label:function(){return"Streaming"},onClick:function(){return H({pipeline:{name:(0,R.Y6)(),type:m.q.STREAMING}})},uuid:"Pipelines/NewPipelineMenu/streaming"}],onClickCallback:M,onClickOutside:M,open:c,parentRef:S,roundedStyle:!0,uuid:"pipelines/new_pipeline_menu",children:(0,k.jsx)(b.ZP,{background:T.eW,beforeElement:(0,k.jsx)(w.mm,{size:2.5*P.iI}),bold:!0,inline:!0,loading:B,onClick:function(n){n.preventDefault(),g((function(n){return!n}))},uuid:"pipelines/new_pipeline_button",children:"New pipeline"})}),title:"Pipelines",uuid:"pipelines/index",children:(0,k.jsx)(v.Z,{buildLinkProps:function(n){return{as:"/pipelines/".concat(N[n].uuid),href:"/pipelines/[pipeline]"}},columnFlex:[null,1,7,1,1,1,null],columns:[{label:function(){return""},uuid:"action"},{uuid:"Status"},{uuid:"Name"},{uuid:"Type"},{uuid:"Blocks"},{uuid:"Triggers"},{label:function(){return""},uuid:"view"}],rows:N.map((function(n,e){var i=n.blocks,u=(n.name,n.schedules),c=n.type,l=n.uuid,a=i.filter((function(n){var e=n.type;return A.tf.SCRATCHPAD!==e})).length,s=u.length,f=u.find((function(n){var e=n.status;return E.fq.ACTIVE===e}));return[s>=1?(0,k.jsx)(d.Z,{iconOnly:!0,loading:!!t[l],noBackground:!0,noBorder:!0,noPadding:!0,onClick:function(e){(0,C.j)(e),r((function(n){return Z(Z({},n),{},(0,o.Z)({},l,!0))})),z(Z(Z({},n),{},{status:f?E.fq.INACTIVE:E.fq.ACTIVE}))},children:f?(0,k.jsx)(w.dz,{muted:!0,size:2*P.iI}):(0,k.jsx)(w.Py,{default:!0,size:2*P.iI})}):null,(0,k.jsx)(y.ZP,{default:!f,monospace:!0,success:!!f,children:f?E.fq.ACTIVE:s>=1?E.fq.INACTIVE:"no schedules"},"pipeline_status_".concat(e)),(0,k.jsx)(y.ZP,{children:l},"pipeline_name_".concat(e)),(0,k.jsx)(y.ZP,{children:c===m.q.PYTHON?"Standard":(0,R.kC)(c)},"pipeline_type_".concat(e)),(0,k.jsx)(y.ZP,{default:0===a,monospace:!0,children:a},"pipeline_block_count_".concat(e)),(0,k.jsx)(y.ZP,{default:0===s,monospace:!0,children:s},"pipeline_trigger_count_".concat(e)),(0,k.jsx)(p.Z,{flex:1,justifyContent:"flex-end",children:(0,k.jsx)(w._Q,{default:!0,size:2*P.iI})},"chevron_icon_".concat(e))]}))})})}D.getInitialProps=(0,r.Z)(c().mark((function n(){return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",{});case 1:case"end":return n.stop()}}),n)}))),e.default=(0,g.Z)(D)},24224:function(n,e,t){"use strict";t.d(e,{HK:function(){return l},IN:function(){return O},Od:function(){return f},Qj:function(){return m},Sm:function(){return y},YC:function(){return a},fS:function(){return h},m5:function(){return v},mp:function(){return w},mr:function(){return s},oM:function(){return p},ry:function(){return d},sE:function(){return c},tS:function(){return b},w6:function(){return g}});var r=t(82394),o=t(7715);function i(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function u(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?i(Object(t),!0).forEach((function(e){(0,r.Z)(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function c(n,e){return null===n||void 0===n?void 0:n.find(e)}function l(n,e){return null===n||void 0===n?void 0:n.reduce((function(n,t){return u(u({},n),{},(0,r.Z)({},e(t),t))}),{})}function a(n,e){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=t.ascending,i=void 0===r||r,u=t.absoluteValue,c=void 0!==u&&u,l="string"===typeof e||"number"===typeof e?function(n){return c?Math.abs((0,o.t2)(n,e)):(0,o.t2)(n,e)}:function(n){return c?Math.abs(e(n)):e(n)};return n.sort((function(n,e){var t=0;return l(n)>l(e)?t=i?1:-1:l(n)<l(e)&&(t=i?-1:1),t}))}function s(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=e.ascending,r=void 0===t||t;return n.sort((function(n,e){var t=0;return n[0]>e[0]?t=r?1:-1:n[0]<e[0]&&(t=r?-1:1),t}))}function d(n,e){for(var t=-1,r=n.length;1+t<r;){var o=t+(r-t>>1);e(n[o])?t=o:r=o}return r}function f(n,e){var t=n.findIndex(e);return p(n,t)}function p(n,e){return n.slice(0,e).concat(n.slice(e+1,n.length))}function h(n,e){return n.map((function(n){return String(n)})).join()===e.map((function(n){return String(n)})).join()}function b(n,e){return n>e}function m(n,e){return n<e}function g(n){return Array(n).fill(0)}function v(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,t=Array.from(Array(n).keys());return 0!==e&&(t=t.map((function(n){return n+e}))),t}function y(n){return n.reduce((function(n,e){return n+e}),0)}function O(n){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],t=n.reduce((function(n,e){return n+e}),0)/n.length;return Math.sqrt(n.reduce((function(n,e){return n.concat(Math.pow(e-t,2))}),[]).reduce((function(n,e){return n+e}),0)/(n.length-(e?0:1)))}function w(n){return n[Math.floor(Math.random()*n.length)]}},90211:function(n,e,t){"use strict";t.d(e,{RA:function(){return a},kC:function(){return s},vg:function(){return g},T3:function(){return O},Mp:function(){return d},Pb:function(){return c},HW:function(){return y},wX:function(){return f},x6:function(){return p},_6:function(){return h},zf:function(){return v},Y6:function(){return A},We:function(){return l},QV:function(){return w},C5:function(){return m}});var r=t(75582),o=["aged","ancient","autumn","billowing","bitter","black","blue","bold","broken","cold","cool","crimson","damp","dark","dawn","delicate","divine","dry","empty","falling","floral","fragrant","frosty","green","hidden","holy","icy","late","lingering","little","lively","long","misty","morning","muddy","nameless","old","patient","polished","proud","purple","quiet","red","restless","rough","shy","silent","small","snowy","solitary","sparkling","spring","still","summer","throbbing","twilight","wandering","weathered","white","wild","winter","wispy","withered","young"],i=(t(92083),["bird","breeze","brook","bush","butterfly","cherry","cloud","darkness","dawn","dew","dream","dust","feather","field","fire","firefly","flower","fog","forest","frog","frost","glade","glitter","grass","haze","hill","lake","leaf","meadow","moon","morning","mountain","night","paper","pine","pond","rain","resonance","river","sea","shadow","shape","silence","sky","smoke","snow","snowflake","sound","star","sun","sun","sunset","surf","thunder","tree","violet","voice","water","water","waterfall","wave","wildflower","wind","wood"]),u=t(24224);function c(n){try{JSON.parse(n)}catch(e){return!1}return!0}function l(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"_";return n.split(" ").join(e)}function a(n){return n.split(" ").join("_")}function s(n){return n?n.charAt(0).toUpperCase()+n.slice(1):""}function d(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return String((new Date).getTime()*n)}function f(n){return n.charAt(0).toLowerCase()+n.slice(1)}function p(n){if(null===n||"undefined"===typeof n)return"";var e=n.toString().split("."),t=(0,r.Z)(e,2),o=t[0],i=t[1],u=o.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",");return i?"".concat(u,".").concat(i):u}function h(n,e){var t,r=arguments.length>2&&void 0!==arguments[2]&&arguments[2],o=e,i=void 0!==o&&null!==o;if(i||(o=2),1===o)t=n;else{var u=n.length,c=n[u-1];t="y"===c&&"day"!==n?"".concat(n.slice(0,u-1),"ies"):"".concat(n,"s"===c?"es":"s")}if(i){var l=r?p(o):o;return"".concat(l," ").concat(t)}return t}function b(n){return null===n||void 0===n?void 0:n.replace(/_/g," ")}function m(n){var e=n.length;return"ies"===n.slice(e-3,e)?"".concat(n.slice(0,e-3),"y"):"es"===n.slice(e-2,e)?n.slice(0,e-2):n.slice(0,e-1)}function g(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return s(b(n.toLowerCase()))}function v(n){var e,t=[["second",60],["minute",60],["hour",24],["day",7],["week",4],["month",12],["year",null]];return t.forEach((function(o,i){if(!e){var u=(0,r.Z)(o,2),c=u[0],l=u[1],a=t.slice(0,i).reduce((function(n,e){return n*Number(e[1])}),1);n<Number(l)*a&&(e=h(c,Math.round(n/a)))}})),e}function y(n){return!isNaN(n)}function O(n){return"".concat(p(function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;return Math.round((n||0)*Math.pow(100,e))/100}(n)),"%")}function w(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2,t=Math.pow(10,e);return Math.round((n||0)*t)/t}function A(){return"".concat((0,u.mp)(o)," ").concat((0,u.mp)(i))}},79274:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/pipelines",function(){return t(5545)}])}},function(n){n.O(0,[77,3850,2083,5170,9767,4393,434,9774,2888,179],(function(){return e=79274,n(n.s=e);var e}));var e=n.O();_N_E=e}]);