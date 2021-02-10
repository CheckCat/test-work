(()=>{"use strict";var n={524:(n,e,t)=>{t.d(e,{Z:()=>l});var r=t(476),o=t.n(r),a=t(678),c=t.n(a),i=t(280),s=o()((function(n){return n[1]})),d=c()(i.Z);s.push([n.id,"@font-face {\r\n  font-family: 'Open-Sans';\r\n  src: url("+d+");\r\n}",""]);const l=s},627:(n,e,t)=>{t.d(e,{Z:()=>i});var r=t(476),o=t.n(r),a=t(524),c=o()((function(n){return n[1]}));c.i(a.Z),c.push([n.id,'* {\r\n  margin: 0;\r\n  padding: 0;\r\n  text-decoration: none;\r\n  list-style: none;\r\n  outline: none;\r\n  border: none;\r\n  font-family: "Open Sans", sans-serif;\r\n}\r\n\r\n.deactive {\r\n  opacity: 0.7;\r\n}\r\n\r\n.error-404 {\r\n  margin-top: 250px;\r\n  font-size: 35px;\r\n  font-weight: bold;\r\n}\r\n\r\nbody {\r\n  background-color: black;\r\n  color: #ececec;\r\n}\r\n\r\n#root {\r\n  max-width: 1000px;\r\n  margin: 0 auto;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\n.title {\r\n  margin-top: 90px;\r\n  font-size: 30px;\r\n  font-weight: bold;\r\n}\r\n\r\n.setpack {\r\n  width: 57.7%;\r\n  margin-top: 40px;\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n\r\n.setpack__elem {\r\n  box-sizing: border-box;\r\n  height: 40px;\r\n  padding: 8px 30px;\r\n  border-radius: 5px;\r\n  background-color: #6B7AFF;\r\n  color: #ececec;\r\n  cursor: pointer;\r\n}\r\n\r\n.setpack__elem:hover {\r\n  background-color: #2F41E1;\r\n}\r\n\r\n.content-image {\r\n  max-width: 100%;\r\n  margin-top: 40px;\r\n}\r\n\r\n.description {\r\n  margin-top: 38px;\r\n  font-size: 17px;\r\n}\r\n\r\n.description__elem {\r\n  margin-top: 2px;\r\n}\r\n\r\n.date {\r\n  margin: 80px 0;\r\n  font-size: 15px;\r\n}',""]);const i=c},476:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t=n(e);return e[2]?"@media ".concat(e[2]," {").concat(t,"}"):t})).join("")},e.i=function(n,t,r){"string"==typeof n&&(n=[[null,n,""]]);var o={};if(r)for(var a=0;a<this.length;a++){var c=this[a][0];null!=c&&(o[c]=!0)}for(var i=0;i<n.length;i++){var s=[].concat(n[i]);r&&o[s[0]]||(t&&(s[2]?s[2]="".concat(t," and ").concat(s[2]):s[2]=t),e.push(s))}},e}},678:n=>{n.exports=function(n,e){return e||(e={}),"string"!=typeof(n=n&&n.__esModule?n.default:n)?n:(/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n)}},280:(n,e,t)=>{t.d(e,{Z:()=>r});const r=t.p+"17e98b9e5586529b13ccb1f7af16861c.ttf"},892:(n,e,t)=>{var r,o=function(){var n={};return function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}n[e]=t}return n[e]}}(),a=[];function c(n){for(var e=-1,t=0;t<a.length;t++)if(a[t].identifier===n){e=t;break}return e}function i(n,e){for(var t={},r=[],o=0;o<n.length;o++){var i=n[o],s=e.base?i[0]+e.base:i[0],d=t[s]||0,l="".concat(s," ").concat(d);t[s]=d+1;var u=c(l),p={css:i[1],media:i[2],sourceMap:i[3]};-1!==u?(a[u].references++,a[u].updater(p)):a.push({identifier:l,updater:h(p,e),references:1}),r.push(l)}return r}function s(n){var e=document.createElement("style"),r=n.attributes||{};if(void 0===r.nonce){var a=t.nc;a&&(r.nonce=a)}if(Object.keys(r).forEach((function(n){e.setAttribute(n,r[n])})),"function"==typeof n.insert)n.insert(e);else{var c=o(n.insert||"head");if(!c)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");c.appendChild(e)}return e}var d,l=(d=[],function(n,e){return d[n]=e,d.filter(Boolean).join("\n")});function u(n,e,t,r){var o=t?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(n.styleSheet)n.styleSheet.cssText=l(e,o);else{var a=document.createTextNode(o),c=n.childNodes;c[e]&&n.removeChild(c[e]),c.length?n.insertBefore(a,c[e]):n.appendChild(a)}}function p(n,e,t){var r=t.css,o=t.media,a=t.sourceMap;if(o?n.setAttribute("media",o):n.removeAttribute("media"),a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleSheet)n.styleSheet.cssText=r;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(r))}}var f=null,m=0;function h(n,e){var t,r,o;if(e.singleton){var a=m++;t=f||(f=s(e)),r=u.bind(null,t,a,!1),o=u.bind(null,t,a,!0)}else t=s(e),r=p.bind(null,t,e),o=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)};return r(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;r(n=e)}else o()}}n.exports=function(n,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=(void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r));var t=i(n=n||[],e);return function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){for(var r=0;r<t.length;r++){var o=c(t[r]);a[o].references--}for(var s=i(n,e),d=0;d<t.length;d++){var l=c(t[d]);0===a[l].references&&(a[l].updater(),a.splice(l,1))}t=s}}}}},e={};function t(r){if(e[r])return e[r].exports;var o=e[r]={id:r,exports:{}};return n[r](o,o.exports,t),o.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var r=e.getElementsByTagName("script");r.length&&(n=r[r.length-1].src)}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),(()=>{const n=(n,e,t,r)=>{const o=document.createElement("a");return o.textContent=e,(t<1||t>r)&&(o.classList.add("deactive"),o.onclick=()=>!1),n.searchParams.set("num",t),o.href=n.href,["setpack__elem"].forEach((n=>o.classList.add(n))),o},e=new URL(window.location.href),r=({num:t},{numOfLast:r})=>{const o=n(e,"|<",1),a=n(e,"< Prev",t-1),c=n(e,"Random",(i=r,Math.floor(Math.random()*i)));var i;const s=n(e,"Next >",t+1,r),d=n(e,">|",r),l=document.createElement("div");return l.append(o,a,c,s,d),["setpack"].forEach((n=>l.classList.add(n))),l};var o=t(892),a=t.n(o),c=t(627);a()(c.Z,{insert:"head",singleton:!1}),c.Z.locals;const i=new URL(window.location.href).searchParams.get("num"),s="https://cors-anywhere.herokuapp.com/",d=`${s}https://xkcd.com/${i?i+"/":""}info.0.json`,l=`${s}https://xkcd.com/info.0.json`,u=document.querySelector("#root"),p=[({title:n})=>{const e=document.createElement("h1");return e.textContent=n,["title"].forEach((n=>e.classList.add(n))),e},r,({img:n,alt:e})=>{const t=document.createElement("img");return t.src=n,t.alt=e,["content-image"].forEach((n=>t.classList.add(n))),t},({transcript:n})=>{const e=(n=n.split(/\n/)).reduce(((n,e)=>{const t=document.createElement("p");return t.textContent=e,n.append(t),["description__elem"].forEach((n=>t.classList.add(n))),n}),document.createElement("div"));return["description"].forEach((n=>e.classList.add(n))),e},r,({day:n,month:e,year:t})=>{n<10&&(n=`0${n}`),e<10&&(e=`0${e}`);const r=document.createElement("p");return r.textContent=`${n}.${e}.${t}`,["date"].forEach((n=>r.classList.add(n))),r}];(async n=>{const e=await fetch(n);return(await e.json()).num})(l).then((n=>{(async(n,e,t,r)=>{const o=await fetch(n),a=await o.json();return t.forEach((n=>e.append(n(a,r)))),a})(d,u,p,{numOfLast:n}).catch((()=>{Array.from(u.children).forEach((n=>n.remove())),u.append((()=>{const n=document.createElement("h1");return n.textContent="404 Такая страница не найдена",n.classList.add("error-404"),n})())}))}))})()})();