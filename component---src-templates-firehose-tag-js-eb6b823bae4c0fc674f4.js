(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{kHO7:function(e,t,n){"use strict";n.r(t),n.d(t,"query",(function(){return c}));n("Vd3H");var r=n("q1tI"),a=n.n(r),l=n("Bl7J"),o=n("xBZN");t.default=function(e){var t=e.data,n=e.pageContext,r=t.allFirehose.edges.sort((function(e,t){return null===e.node.date||null===t.node.date||e.node.date===t.node.date?e.node.title>t.node.title:e.node.date<t.node.date}));return a.a.createElement(l.a,{pageContext:n,navMode:"firehose",metaMode:"firehose"},a.a.createElement("div",null,a.a.createElement("h2",null,"Firehose: all / ",n.selectedTag),a.a.createElement("ul",null,r.map((function(e){var t=e.node;return a.a.createElement(o.a,{node:t})})))))};var c="3001351404"},xBZN:function(e,t,n){"use strict";n("pIFo"),n("SRfc");var r=n("q1tI"),a=n.n(r),l=n("oDFA");t.a=function(e){var t=e.node,n=t.title.trim(),r=l({exact:!0}).test(n),o=n.match(l()),c=o?o.length:0,u=t.lines.map((function(e){return e.trim()})).filter((function(e){return e.length>0})),i=!!(1===u.length)&&l({exact:!0}).test(u[0]),d=n;if(r)d=a.a.createElement("a",{href:n,target:"_blank",rel:"noopener noreferrer"},n);else if(1===c){var f=o[0],s=n.replace(l(),"").trim();d=a.a.createElement("a",{href:f,target:"_blank",rel:"noopener noreferrer"},s)}else c>1?(d=n.replace(l(),(function(e){return"<a href="+e+' target="_blank" rel="noopener noreferrer">'+e+"</a>"})),d=a.a.createElement("span",{dangerouslySetInnerHTML:{__html:d}})):i&&(d=a.a.createElement("a",{href:u[0],target:"_blank",rel:"noopener noreferrer"},n),u=[]);var m=a.a.createElement("ul",null,u.map((function(e){var t=e.replace(l(),(function(e){return"<a href="+e+' target="_blank">'+e+"</a>"}));return a.a.createElement("li",{dangerouslySetInnerHTML:{__html:t}})})));return a.a.createElement("li",{key:t.id},d," (",t.date,") ",t.category,":",t.tags.join(","),m)}}}]);
//# sourceMappingURL=component---src-templates-firehose-tag-js-eb6b823bae4c0fc674f4.js.map