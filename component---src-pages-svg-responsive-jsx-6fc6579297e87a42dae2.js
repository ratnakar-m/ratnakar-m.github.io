(window.webpackJsonp=window.webpackJsonp||[]).push([[18,15,17],{"0vAF":function(e,t,n){"use strict";n.r(t);var a=n("q1tI"),r=n.n(a),l=n("VphZ"),c=n("vrFN"),i=n("Bl7J");n("o6Dj");t.default=function(){var e=Object(a.useState)([25,30,45,60,20,15,75]),t=e[0],n=e[1],u=Object(a.useRef)();return Object(a.useEffect)((function(){var e=l.i(u.current),n=l.d().x((function(e,t){return 50*t})).y((function(e){return 150-e})).curve(l.c);e.selectAll("path").data([t]).join("path").attr("d",(function(e){return n(e)})).attr("fill","none").attr("stroke","blue")}),t),r.a.createElement(i.a,{headerText:"SVG Line"},r.a.createElement(c.a,{title:"SVG Line"}),r.a.createElement("div",{className:"barWrapper"},r.a.createElement("svg",{ref:u}),r.a.createElement("br",null),r.a.createElement("button",{onClick:function(){return n(t.map((function(e){return e+5})))}},"Update Data"),r.a.createElement("button",{onClick:function(){return n(t.filter((function(e){return e<35})))}},"Filter Data")))}},"7JGn":function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return u}));var a=n("q1tI"),r=n.n(a),l=n("VphZ"),c=n("vrFN"),i=n("Bl7J");n("o6Dj");function u(){var e=Object(a.useState)([25,30,45,60,10,65,75]),t=e[0],n=e[1],u=Object(a.useRef)();return Object(a.useEffect)((function(){var e=l.i(u.current),n=l.e().domain(t.map((function(e,t){return t}))).range([0,300]).padding(.5),a=l.f().domain([0,150]).range([150,0]),r=l.f().domain([75,100,150]).range(["green","orange","red"]).clamp(!0),c=l.a(n).ticks(t.length);e.select(".x-axis").style("transform","translateY(150px)").call(c);var i=l.b(a);e.select(".y-axis").style("transform","translateX(300px)").call(i),e.selectAll(".bar").data(t).join("rect").attr("class","bar").style("transform","scale(1, -1)").attr("x",(function(e,t){return n(t)})).attr("y",-150).attr("width",n.bandwidth()).transition().attr("fill",r).attr("height",(function(e){return 150-a(e)}))}),[t]),r.a.createElement(i.a,{headerText:"SVG Scale and Axes"},r.a.createElement(c.a,{title:"SVG Scale and Axes"}),r.a.createElement("div",{className:"barWrapper"},r.a.createElement("svg",{ref:u},r.a.createElement("g",{className:"x-axis"}),r.a.createElement("g",{className:"y-axis"})),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("div",null,r.a.createElement("button",{style:{marginRight:"10px"},onClick:function(){return n(t.map((function(e){return e+5})))}},"Update data"),r.a.createElement("button",{onClick:function(){return n(t.filter((function(e){return e<35})))}},"Filter data"))))}},Iyfc:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return i}));var a=n("q1tI"),r=n.n(a),l=(n("VphZ"),n("vrFN")),c=n("Bl7J");n("o6Dj"),n("7JGn"),n("0vAF");function i(){return Object(a.useEffect)((function(){}),[]),r.a.createElement(c.a,{headerText:"SVG Responsive Page"},r.a.createElement(l.a,{title:"SVG Responsive Page"}),r.a.createElement("div",{className:"svgWrapper"},r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("div",null,r.a.createElement("button",{style:{marginRight:"10px"},onClick:function(){return console.log("clicked")}},"Update data"),r.a.createElement("button",{onClick:function(){return console.log("clicked")}},"Filter data"))))}},o6Dj:function(e,t,n){}}]);
//# sourceMappingURL=component---src-pages-svg-responsive-jsx-6fc6579297e87a42dae2.js.map