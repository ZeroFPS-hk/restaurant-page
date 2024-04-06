(()=>{"use strict";var e={365:(e,n,t)=>{t.d(n,{A:()=>p});var r=t(601),o=t.n(r),a=t(314),i=t.n(a),c=t(417),s=t.n(c),u=new URL(t(272),t.b),l=i()(o()),d=s()(u);l.push([e.id,`@font-face {\n    font-family: "TF2Build";\n    src: url(${d});\n}\n\n:root{\n    font-size: 16px;\n}\n\nbody{\n    padding: 20px;\n    background-color: honeydew;\n    display: flex;\n    flex-direction: column;\n    gap: 30px;\n    justify-content: center;\n    align-items: center;\n}\n\n.title{\n    font-family: "TF2Build";\n    font-size: 3rem;\n    color: red;\n}\n\nheader>nav{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 24px;\n}\n\nnav>button{\n    font-size: 2.5rem;\n    padding: 8px 16px;\n    border-radius: 10px;\n    color: darkgreen;\n    background-color: beige;\n    border: 1px solid gold;\n    cursor: pointer;\n}\n\n#content{\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    text-align: center;\n    font-size: 1.5rem;\n    gap: 10px;\n}\n\nimg.wide{\n    width: 40vw;\n    height: auto;\n}\n\nimg.small{\n    width: 20vw;\n    height: auto;\n}`,""]);const p=l},314:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var u=0;u<e.length;u++){var l=[].concat(e[u]);r&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),n.push(l))}},n}},417:e=>{e.exports=function(e,n){return n||(n={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]|(%20)/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},601:e=>{e.exports=function(e){return e[1]}},72:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var a={},i=[],c=0;c<e.length;c++){var s=e[c],u=r.base?s[0]+r.base:s[0],l=a[u]||0,d="".concat(u," ").concat(l);a[u]=l+1;var p=t(d),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)n[p].references++,n[p].updater(f);else{var h=o(f,r);r.byIndex=c,n.splice(c,0,{identifier:d,updater:h,references:1})}i.push(d)}return i}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var c=t(a[i]);n[c].references--}for(var s=r(e,o),u=0;u<a.length;u++){var l=t(a[u]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}a=s}}},659:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},540:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},56:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},113:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},272:(e,n,t)=>{e.exports=t.p+"78d4f8cd122c4bf71771.ttf"}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var a=n[r]={id:r,exports:{}};return e[r](a,a.exports,t),a.exports}t.m=e,t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var r=n.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&(!e||!/^http(s?):/.test(e));)e=r[o--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{var e=t(72),n=t.n(e),r=t(825),o=t.n(r),a=t(659),i=t.n(a),c=t(56),s=t.n(c),u=t(540),l=t.n(u),d=t(113),p=t.n(d),f=t(365),h={};function v(e,n){const t=document.createElement("div");t.textContent=n,e.appendChild(t)}function m(e,n,t=""){const r=new Image;r.src=n,t&&r.classList.add(t),e.appendChild(r)}h.styleTagTransform=p(),h.setAttributes=s(),h.insert=i().bind(null,"head"),h.domAPI=o(),h.insertStyleElement=l(),n()(f.A,h),f.A&&f.A.locals&&f.A.locals;const g=t.p+"59a6e9325394cb38f675.png",y=e=>{e.replaceChildren(),m(e,g,"wide"),v(e,"LET HIM COOK"),v(e,"So much cooking the kitchen is on fire!")},b=t.p+"71da4654fe5ac09545e3.png",x=document.querySelector("#content"),w=document.querySelector(".home"),S=document.querySelector(".menu"),T=document.querySelector(".about");w.addEventListener("click",(()=>y(x))),S.addEventListener("click",(()=>{return(e=x).replaceChildren(),m(e,b,"small"),v(e,"All our dishes roasted over good fire!"),v(e,"- Oven cooked sashimi -"),v(e,"- Burning pineapple pizza (authentic hawaiian volcano heat) -"),v(e,"- Roasted ice cream sundae -"),void v(e,"- Refridgerator curry -");var e})),T.addEventListener("click",(()=>{return(e=x).replaceChildren(),v(e,"The super cookery kitchen"),v(e,"Join us and we let you cook!"),v(e,"~"),void v(e,"Not all people are born chefs, but all people are born arsonists");var e})),y(x)})()})();