(window.webpackJsonp=window.webpackJsonp||[]).push([[13,19],{SXxT:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return s}));var n=a("q1tI"),r=a.n(n),c=a("vrFN"),l=a("Bl7J"),i=(a("agRo"),a("WiWw"),a("VphZ"));a("o6Dj");function u(){var e=Object(n.useState)([25,30,45,60,10,65,75]),t=e[0],a=e[1],c=Object(n.useRef)();return Object(n.useEffect)((function(){var e=i.i(c.current),a=i.e().domain(t.map((function(e,t){return t}))).range([0,300]).padding(.5),n=i.f().domain([0,150]).range([150,0]),r=i.f().domain([75,100,150]).range(["green","orange","red"]).clamp(!0),l=i.a(a).ticks(t.length);e.select(".x-axis").style("transform","translateY(150px)").call(l);var u=i.b(n);e.select(".y-axis").style("transform","translateX(300px)").call(u),e.selectAll(".bar").data(t).join("rect").attr("class","bar").style("transform","scale(1, -1)").attr("x",(function(e,t){return a(t)})).attr("y",-150).attr("width",a.bandwidth()).transition().attr("fill",r).attr("height",(function(e){return 150-n(e)}))}),[t]),r.a.createElement("div",{className:"barWrapper"},r.a.createElement("svg",{ref:c},r.a.createElement("g",{className:"x-axis"}),r.a.createElement("g",{className:"y-axis"})),r.a.createElement("div",null,r.a.createElement("button",{onClick:function(){return a(t.map((function(e){return e+5})))}},"Update data"),r.a.createElement("button",{onClick:function(){return a(t.filter((function(e){return e>50})))}},"Filter data")))}a("whMh");var o=function(){var e=Object(n.useState)([25,30,45,60,20,15,75]),t=e[0],a=e[1],c=Object(n.useRef)();return Object(n.useEffect)((function(){var e=i.i(c.current),a=i.d().x((function(e,t){return 50*t})).y((function(e){return 150-e})).curve(i.c);e.selectAll("path").data([t]).join("path").attr("d",(function(e){return a(e)})).attr("fill","none").attr("stroke","blue")}),t),r.a.createElement("div",{className:"lineWrapper"},r.a.createElement("svg",{ref:c}),r.a.createElement("br",null),r.a.createElement("div",null,r.a.createElement("button",{onClick:function(){return a(t.map((function(e){return e+5})))}},"Update Data"),r.a.createElement("button",{onClick:function(){return a(t.filter((function(e){return e<35})))}},"Filter Data")))};function s(){return Object(n.useEffect)((function(){}),[]),r.a.createElement(l.a,{headerText:"SVG Responsive Page"},r.a.createElement(c.a,{title:"SVG Responsive Page"}),r.a.createElement("div",{style:{display:"flex",flexDirection:"column",justifyContent:"flex-start"}},r.a.createElement("div",{className:"svgWrapper"},r.a.createElement(u,null),r.a.createElement(o,null)),r.a.createElement("div",{className:"iframeWrapper"},r.a.createElement("iframe",{src:"https://www.youtube.com/embed/__qkzfWhi6g",title:"dummy",frameBorder:"0",allowFullScreen:"allowFullScreen"}))))}},WiWw:function(e,t,a){},ZrIB:function(e,t,a){"use strict";a.r(t);var n=a("SXxT");t.default=n.default},agRo:function(e,t,a){},o6Dj:function(e,t,a){},whMh:function(e,t,a){}}]);
//# sourceMappingURL=component---src-pages-learn-js-8564251f1b6a4cc8f1d9.js.map