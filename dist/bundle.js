(()=>{"use strict";var e={726:(e,t,n)=>{n.d(t,{Z:()=>s});var o=n(81),r=n.n(o),i=n(645),a=n.n(i)()(r());a.push([e.id,'* {\n  margin: 0;\n  padding: 0;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\n#main {\n  background: #b7d4a8;\n  width: 360px;\n  height: 420px;\n  border: 10px solid black;\n  border-radius: 10px;\n  margin: 100px auto;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-flow: column;\n          flex-flow: column;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n}\n#body {\n  border: 3px solid black;\n  width: 304px;\n  height: 304px;\n  margin: 0 auto;\n  position: relative;\n}\n#body #snake > div {\n  width: 20px;\n  height: 20px;\n  background-color: black;\n  border: 3px solid #b7d4a8;\n  position: absolute;\n}\n#body #food {\n  width: 20px;\n  height: 20px;\n  top: 50px;\n  left: 50px;\n  position: absolute;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-flow: row wrap;\n          flex-flow: row wrap;\n  background: lightcoral;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -ms-flex-line-pack: justify;\n      align-content: space-between;\n}\n#body #food > div {\n  width: 8px;\n  height: 8px;\n  background: black;\n  -webkit-transform: rotate(45deg);\n          transform: rotate(45deg);\n}\n.text {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  font-weight: bold;\n  font-size: 20px;\n  font-family: "Courier New", Courier, monospace;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n}\n.score {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n}\n.level {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n}\n',""]);const s=a},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",o=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),o&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),o&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,o,r,i){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(o)for(var s=0;s<this.length;s++){var l=this[s][0];null!=l&&(a[l]=!0)}for(var c=0;c<e.length;c++){var d=[].concat(e[c]);o&&a[d[0]]||(void 0!==i&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=i),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),r&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=r):d[4]="".concat(r)),t.push(d))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,o=0;o<t.length;o++)if(t[o].identifier===e){n=o;break}return n}function o(e,o){for(var i={},a=[],s=0;s<e.length;s++){var l=e[s],c=o.base?l[0]+o.base:l[0],d=i[c]||0,p="".concat(c," ").concat(d);i[c]=d+1;var u=n(p),f={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==u)t[u].references++,t[u].updater(f);else{var h=r(f,o);o.byIndex=s,t.splice(s,0,{identifier:p,updater:h,references:1})}a.push(p)}return a}function r(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,r){var i=o(e=e||[],r=r||{});return function(e){e=e||[];for(var a=0;a<i.length;a++){var s=n(i[a]);t[s].references--}for(var l=o(e,r),c=0;c<i.length;c++){var d=n(i[c]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}i=l}}},569:e=>{var t={};e.exports=function(e,n){var o=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,r&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var i=n.sourceMap;i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(o,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var i=t[o]={id:o,exports:{}};return e[o](i,i.exports,n),i.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0,(()=>{var e=n(379),t=n.n(e),o=n(795),r=n.n(o),i=n(569),a=n.n(i),s=n(565),l=n.n(s),c=n(216),d=n.n(c),p=n(589),u=n.n(p),f=n(726),h={};h.styleTagTransform=u(),h.setAttributes=l(),h.insert=a().bind(null,"head"),h.domAPI=r(),h.insertStyleElement=d(),t()(f.Z,h),f.Z&&f.Z.locals&&f.Z.locals;const m=new class{constructor(){this.element=document.getElementById("food")}get x(){return this.element.offsetLeft}get y(){return this.element.offsetTop}change(){let e=20*Math.round(14*Math.random()),t=20*Math.round(14*Math.random());this.element.style.left=t+"px",this.element.style.top=e+"px"}};console.log(m.x,m.y),m.change(),console.log(m.x,m.y);const x=new class{constructor(e=10,t=10){this.score=0,this.level=1,this.scoreElement=document.getElementById("score"),this.levelElement=document.getElementById("level"),this.maxLevel=e,this.upScore=t}addScore(){this.scoreElement.innerHTML=++this.score+"",this.score%this.upScore==0&&this.levelUp()}levelUp(){this.level<this.maxLevel&&(this.levelElement.innerHTML=++this.level+"")}}(10,10);for(let e=0;e<200;e++)x.addScore();x.addScore(),(new class{constructor(){this.element=document.getElementById("snake"),this.head=document.querySelector("#snake>div"),this.bodies=document.getElementById("snake").getElementsByTagName("div")}get x(){return this.head.offsetLeft}get y(){return this.head.offsetTop}set x(e){this.head.style.left=e+"px"}set y(e){this.head.style.top=e+"px"}addBody(){this.element.insertAdjacentHTML("beforeend","<div></div>")}move(e){let t=event||window.event||arguments.callee.caller.arguments[0];(null==t?void 0:t.keyCode)==e&&this.changeDirection()}changeDirection(e=1){this.element.style.top=this.x+20*e+"px",this.element.style.left=this.y+20*e+"px"}crashWall(){alert("failed")}}).crashWall()})()})();