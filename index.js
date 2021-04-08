(()=>{"use strict";var n={323:(n,t,e)=>{e.d(t,{Z:()=>d});var o=e(428),r=e.n(o),i=e(315),p=e.n(i),a=e(895),s=r()((function(n){return n[1]})),u=p()(a.Z);s.push([n.id,'@keyframes rotate {\n  0% {\n    transform: rotate(0deg);\n  }\n  25% {\n    transform: rotate(90deg);\n  }\n  50% {\n    transform: rotate(180deg);\n  }\n  75% {\n    transform: rotate(270deg);\n  }\n  to {\n    transform: rotate(1turn);\n  }\n}\n.bg-img-middle {\n  position: absolute;\n  height: 100%;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n.bg-img-middle.vertical {\n  width: 100%;\n  height: auto;\n}\n.progress-bar {\n  position: absolute;\n  top: 17px;\n  left: 10px;\n  width: 90px;\n  height: 90px;\n  z-index: 1;\n  border: 2px solid rgba(255, 255, 255, 0.3);\n  border-radius: 50%;\n  box-sizing: border-box;\n  box-shadow: 0 0 7px 0 rgba(0, 0, 0, 0.15);\n}\n.progress-bar .img-wrapper {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  border-radius: 50%;\n  overflow: hidden;\n  z-index: -1;\n  transition: all 0.3s;\n}\n.progress-bar .slice {\n  position: absolute;\n  top: -2px;\n  left: -2px;\n  width: 90px;\n  height: 90px;\n  clip: rect(0px, 90px, 90px, 45px);\n  border-radius: 50%;\n}\n.progress-bar .slice .more-half,\n.progress-bar .slice .than-half {\n  position: absolute;\n  width: 90px;\n  height: 90px;\n  border: 2px solid #fbdc4d;\n  border-radius: 50%;\n  clip: rect(0px, 45px, 90px, 0);\n  box-sizing: border-box;\n}\n.progress-bar .slice.half {\n  clip: rect(auto, auto, auto, auto);\n}\n.progress-bar .slice.half .more-half {\n  transform: rotate(180deg);\n  clip: rect(0px, 45px, 90px, 0);\n}\n.progress-bar:after {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  height: 100%;\n  width: 100%;\n  border-radius: 50%;\n  content: "";\n  box-shadow: 0 0 0.16rem 0 rgba(0, 0, 0, 0.15);\n  background: rgba(0, 0, 0, 0.3) url("data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAABYAAAAYCAMAAADJYP15AAAAb1BMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8v0wLRAAAAJHRSTlMA/KQE8e7q5NvWwoxTTEgzKxsVEAj29N+6tp+ZlIF9d3NtaQvp+R0cAAAAcUlEQVQoz43RxxKAIAxFUcVeQFDsXfP/3+hknbfwLs8wDCSBSqoukBFR+kSSucIA5mYLmcKtlcwlVySZy2vAXNlApnBxkrnh8MyyzECmHJ/WgPv9BXcr9/fdI/plfHowwRVNcLJoOxrt8pa7VDHcPO4DQJslM86YONIAAAAASUVORK5CYII=") center / 15px 18px no-repeat;\n}\n.progress-bar.playing .img-wrapper {\n  animation: rotate 6s linear infinite;\n}\n.progress-bar.playing:after {\n  background-image: url("data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAABAAAAAUBAMAAAB2TKBEAAAAG1BMVEUAAAD////////////////////////////////rTT7CAAAACHRSTlMAzMbyrJElD8o/4MYAAAAySURBVAjXY0gyKWBgYHdWY9DoCGBgYO1oYujoUGBgYOroADIEGBgYB4gBdwbcYXCnAgDdMio9ZEciKQAAAABJRU5ErkJggg==");\n  background-size: 14px 14px;\n}\n.close-btn {\n  width: 0.4rem;\n  height: 0.4rem;\n  background: transparent url("data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAABsAAAAbCAYAAACN1PRVAAAAAXNSR0IArs4c6QAAAvtJREFUSA2tlstu00AYhbHDa7CFDSt2ubwBTQILbiqlqCkURAEplw1CKqy6SbLhJqAUekmRQOIxkg0llAeg0JYWXiLhO5ZtjR3bcqqM9NdzPd+cfyajWvV6/clwOLxGPG63259PTLigfxHtZeKLzZ8KcRrGx1qtNj1JVrVavYT2J+KMZVkVwZYADIkM9bVJAXF0GcAWmiddA0uZXq/Xz+Vy/+g4T9hMuJDP5392u90f7qSxPwIB6Xgg27YftlqtFxkpAfwK4C+DDpCuYwPDIDb/ANAzcRyYKjjZDgNxvMtGUjvkjK6w4S3knNSZIDF8mBoCAjiiOkUopeW0QIFY0yEcTVJ3H0fPafslAFMvTuTwkB36wEKh8IuN7PirQhVSd5X5AVCz2QyAtGQEpk6Ev5lAuspxQIEGg8GmobWoyyCdcImEaZKApPAP1SJhE0rpb5z7DvmZ6DEIgHgYIkGsj3amARWEA0DOsOQBXdAG07ThIWOLgF5qXVyx4gbMflJVIVVv6UPTGuDmHfU5wgHxvQfoFd/EkgomBRNoKOrlSQXSmtgzMwSdKmfYz2azp2icM8Y6OHpktBOrqWHum/kUNV0Wp5DSs9zafTby3etL+qaCkcLriKwT3hl1BOLsBC7i+IDL1E8CaczfZdxEgRBdc4WHvAx3Sd0MsHn3skhjhRdkLk7D6090RupmmBgA8TK81mKlDkd7AEs0BSyR0gOdrcajSizMBX3wHCF6h5fhjSlC6gJA5haTgJGwRqNxg4U+iNQtANLvbKQIqB+651BAvTx6EMKTR2AC8QN+zyKlRme0QOoiQZ4YwjsmkP5IYABG6maB+CB2extHK55o0ldAPdbMKRPaqFJ6yBn6Dn2YQExY9RyNA2KdUxAOANGaMoEOjGt7E3EfROpu4Ujv39hFQFK6i57jUEDaRzjftnA0jeK650ggzuhYIHNn4duMbkW51T+QzmWgPj8JkKBkZgN3s8SApsWlWxZET8++BngZVjVxUoWNb6KrzO3hrPMfR73aXxLPziEAAAAASUVORK5CYII=") 40% 50% no-repeat;\n  background-size: 0.18rem 0.18rem;\n}\n#container {\n  width: 100%;\n  height: 100%;\n}\n#container .amap-copyright,\n#container .amap-logo {\n  display: none !important;\n}\n.amap-geolocation {\n  position: absolute;\n  bottom: 12px;\n  right: 12px;\n  background-color: #fff;\n  height: 32px;\n  width: 32px;\n  box-shadow: 0 0 5px silver;\n  cursor: pointer;\n  background-image: url(https://a.amap.com/jsapi/static/image/plugin/locate.png);\n  background-size: 24px;\n  background-repeat: no-repeat;\n  background-position: 50%;\n  transition: all 0.3s;\n}\n.amap-geolocation > img {\n  display: none;\n  height: 24px;\n  width: 24px;\n  background-color: #fff;\n  margin: 4px;\n  border-radius: 50%;\n  animation: rotate 2s linear infinite;\n}\n.amap-geolocation.locating > img {\n  display: block;\n}\n.show-poi-popup .amap-geolocation {\n  bottom: 137px;\n}\n.show-poi-popup .poi-popup {\n  transform: translateY(-100%);\n}\n.poi-popup {\n  position: absolute;\n  padding: 25px 4px 0 114px;\n  height: 100px;\n  left: 3px;\n  right: 3px;\n  color: #333;\n  transform: translateY(100%);\n  transition: all 0.3s;\n  background: #fff;\n  border-radius: 5px 5px 0 0;\n  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);\n}\n.poi-popup .fold {\n  position: absolute;\n  height: 20px;\n  right: 0;\n  left: 0;\n  top: 2px;\n}\n.poi-popup .fold::after {\n  display: block;\n  margin: auto;\n  content: "";\n  width: 20px;\n  height: 20px;\n  background: transparent url('+u+') center / 20px no-repeat;\n}\n.poi-popup .filter-bg {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: -1;\n  filter: blur(15px);\n  overflow: hidden;\n}\n.poi-popup .title {\n  margin: 0px;\n  font: 16px/22px PingFangSC-Medium;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  color: white;\n}\n.poi-popup .content,\n.poi-popup .btnt-row {\n  margin: 4px 0 0;\n  font: 12px/16px PingFangSC-Regular;\n  overflow: hidden;\n  color: #85878a;\n}\n.poi-popup .content .show-more,\n.poi-popup .btnt-row .show-more,\n.poi-popup .content .go-there,\n.poi-popup .btnt-row .go-there {\n  color: #4092BA;\n}\n.poi-popup .content .show-more:before,\n.poi-popup .btnt-row .show-more:before,\n.poi-popup .content .go-there:before,\n.poi-popup .btnt-row .go-there:before {\n  content: "\\8BE6\\60C5";\n}\n.poi-popup .content .show-more:after,\n.poi-popup .btnt-row .show-more:after,\n.poi-popup .content .go-there:after,\n.poi-popup .btnt-row .go-there:after {\n  padding-left: 0.1rem;\n  content: ">";\n  font-family: serif;\n}\n.poi-popup .btnt-row {\n  text-align: right;\n}\n',""]);const d=s},428:n=>{n.exports=function(n){var t=[];return t.toString=function(){return this.map((function(t){var e=n(t);return t[2]?"@media ".concat(t[2]," {").concat(e,"}"):e})).join("")},t.i=function(n,e,o){"string"==typeof n&&(n=[[null,n,""]]);var r={};if(o)for(var i=0;i<this.length;i++){var p=this[i][0];null!=p&&(r[p]=!0)}for(var a=0;a<n.length;a++){var s=[].concat(n[a]);o&&r[s[0]]||(e&&(s[2]?s[2]="".concat(e," and ").concat(s[2]):s[2]=e),t.push(s))}},t}},315:n=>{n.exports=function(n,t){return t||(t={}),"string"!=typeof(n=n&&n.__esModule?n.default:n)?n:(/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),t.hash&&(n+=t.hash),/["'() \t\n]/.test(n)||t.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n)}},574:(n,t,e)=>{var o,r=function(){var n={};return function(t){if(void 0===n[t]){var e=document.querySelector(t);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}n[t]=e}return n[t]}}(),i=[];function p(n){for(var t=-1,e=0;e<i.length;e++)if(i[e].identifier===n){t=e;break}return t}function a(n,t){for(var e={},o=[],r=0;r<n.length;r++){var a=n[r],s=t.base?a[0]+t.base:a[0],u=e[s]||0,d="".concat(s," ").concat(u);e[s]=u+1;var c=p(d),g={css:a[1],media:a[2],sourceMap:a[3]};-1!==c?(i[c].references++,i[c].updater(g)):i.push({identifier:d,updater:w(g,t),references:1}),o.push(d)}return o}function s(n){var t=document.createElement("style"),o=n.attributes||{};if(void 0===o.nonce){var i=e.nc;i&&(o.nonce=i)}if(Object.keys(o).forEach((function(n){t.setAttribute(n,o[n])})),"function"==typeof n.insert)n.insert(t);else{var p=r(n.insert||"head");if(!p)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");p.appendChild(t)}return t}var u,d=(u=[],function(n,t){return u[n]=t,u.filter(Boolean).join("\n")});function c(n,t,e,o){var r=e?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(n.styleSheet)n.styleSheet.cssText=d(t,r);else{var i=document.createTextNode(r),p=n.childNodes;p[t]&&n.removeChild(p[t]),p.length?n.insertBefore(i,p[t]):n.appendChild(i)}}function g(n,t,e){var o=e.css,r=e.media,i=e.sourceMap;if(r?n.setAttribute("media",r):n.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleSheet)n.styleSheet.cssText=o;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(o))}}var l=null,x=0;function w(n,t){var e,o,r;if(t.singleton){var i=x++;e=l||(l=s(t)),o=c.bind(null,e,i,!1),r=c.bind(null,e,i,!0)}else e=s(t),o=g.bind(null,e,t),r=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)};return o(n),function(t){if(t){if(t.css===n.css&&t.media===n.media&&t.sourceMap===n.sourceMap)return;o(n=t)}else r()}}n.exports=function(n,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=(void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o));var e=a(n=n||[],t);return function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){for(var o=0;o<e.length;o++){var r=p(e[o]);i[r].references--}for(var s=a(n,t),u=0;u<e.length;u++){var d=p(e[u]);0===i[d].references&&(i[d].updater(),i.splice(d,1))}e=s}}}},895:(n,t,e)=>{e.d(t,{Z:()=>o});const o="data:image/png;base64,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"}},t={};function e(o){var r=t[o];if(void 0!==r)return r.exports;var i=t[o]={id:o,exports:{}};return n[o](i,i.exports,e),i.exports}e.n=n=>{var t=n&&n.__esModule?()=>n.default:()=>n;return e.d(t,{a:t}),t},e.d=(n,t)=>{for(var o in t)e.o(t,o)&&!e.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:t[o]})},e.o=(n,t)=>Object.prototype.hasOwnProperty.call(n,t),(()=>{var n=e(574),t=e.n(n),o=e(323);t()(o.Z,{insert:"head",singleton:!1}),o.Z.locals;let r,i=document.body,p="",a="",s=null;function u(n,t,e){return n===p?(d(),!1):(s&&(clearTimeout(s),s=setTimeout((()=>{u(n,t,!0),s=null}),500)),p&&!e?(d(),s=setTimeout((()=>{s=null,u(n,t,!0)}),500),!1):(a||(a=i.querySelector("div.poi-popup"),a.innerHTML='\n    <div class="fold"></div>\n    <div class="filter-bg">\n      <img src="" class="bg-img-middle">\n    </div>\n    <div class="progress-bar">\n      <div class="img-wrapper">\n        <img src="" class="bg-img-middle">\n      </div>\n      <div class="slice">\n        <div class="than-half"></div>\n        <div class="more-half"></div>\n      </div>\n    </div>\n    <p class="title">第一教学楼</p>\n    <p class="content">\n      <span class="content-text">进德修业：始建于1956年的第一教学楼，是农大的精神象征。九年三迁，创业维艰...</span>\n      <span class="show-more"></span>\n    </p>\n  ',console.log(a.querySelector("div.fold")),a.querySelector("div.fold").addEventListener("click",d),a.progressImg=a.querySelector(".img-wrapper>img"),a.filterImg=a.querySelector(".filter-bg>img"),a.titleDom=a.querySelector("p.title"),a.content=a.querySelector("p.content>.content-text"),a.showMore=a.querySelector("p.content>.show-more")),a.progressImg.src=t.introImg,a.filterImg.src=t.introImg,t.introImgType&&"vertical"===t.introImgType?(AMap.DomUtil.addClass(a.progressImg,"vertical"),AMap.DomUtil.addClass(a.filterImg,"vertical")):(AMap.DomUtil.removeClass(a.progressImg,"vertical"),AMap.DomUtil.removeClass(a.filterImg,"vertical")),a.titleDom.innerText=t.name,a.content.innerText=t.intro,p=n,void AMap.DomUtil.addClass(i,"show-poi-popup")))}function d(){AMap.DomUtil.removeClass(i,"show-poi-popup"),p=""}let{zoom:c,zooms:g,center:l,pois:x,defaultMarker:w}={name:"湖南农业大学",center:[113.082668,28.180404],extension:[[113.075705,28.174824],[113.089309,28.186135]],zoom:16,zooms:[15,20],defaultMarker:{src:"./static/hunau/images/marker.png",size:[25,24]},pois:[{name:"五牛雕塑",position:[113.084057,28.184449],intro:"发扬“三牛”精神   为民服务孺子牛·创新发展拓荒牛·艰苦奋斗老黄牛...",introImg:"https://www.hunau.edu.cn/zjnd/xnyx/xyfj/202103/W020210311338651582359.jpg",details:[{type:"imgs",url:["https://www.hunau.edu.cn/zjnd/xnyx/xyfj/202103/W020210310294183119125.jpg","https://www.hunau.edu.cn/zjnd/xnyx/xyfj/202103/W020210311338651576526.jpg","https://www.hunau.edu.cn/zjnd/xnyx/xyfj/202103/W020210311338651582359.jpg"]},"发扬“三牛”精神   为民服务孺子牛·创新发展拓荒牛·艰苦奋斗老黄牛","素材｜湖南农业大学党委宣传部    摄影｜熊赳"]},{name:"修业学堂",position:[113.08689,28.177859],intro:"百年传承：在风雨如晦的旧中国诞生的修业学堂，回应民族独立和农业振兴理想...",introImg:"https://www.hunau.edu.cn/zjnd/xnyx/xyfj/202103/W020210309617458066676.jpg",introImgType:"vertical",details:[{type:"imgs",url:["https://www.hunau.edu.cn/zjnd/xnyx/xyfj/202103/W020210309617458066676.jpg"]},"百年传承：在风雨如晦的旧中国诞生的修业学堂，回应民族独立和农业振兴理想，开创了湖南新学教育和农业教育的先河。习苦耐劳、崇朴尚实成为农大人永续的精神追求。","素材｜湖南农业大学党委宣传部     摄影｜熊赳"]},{name:"第一教学楼",position:[113.086761,28.178371],intro:"进德修业：始建于1956年的第一教学楼，是农大的精神象征。九年三迁，创业维艰...",introImg:"https://www.hunau.edu.cn/zjnd/xnyx/xyfj/202103/W020210315576226227231.jpg",introImgType:"vertical",details:[{type:"img",url:"https://www.hunau.edu.cn/zjnd/xnyx/xyfj/202103/W020210315576226227231.jpg",productBy:"摄影｜熊赳"},"进德修业：始建于1956年的第一教学楼，是农大的精神象征。九年三迁，创业维艰，一代代农大人蚓耕坚泥、薪火相传，以渊博学识、崇高品格、大师风范、经世担当，激励师生锐意进取，奋发图强。",{type:"imgs",url:["https://www.hunau.edu.cn/zjnd/xnyx/xyfj/202103/W020210315573889453876.jpg","https://www.hunau.edu.cn/zjnd/xnyx/xyfj/202103/W020210315573889472354.jpg","https://www.hunau.edu.cn/zjnd/xnyx/xyfj/202103/W020210315573889493717.jpg"],productBy:"摄影｜罗楠"},{type:"imgs",url:["https://www.hunau.edu.cn/zjnd/xnyx/xyfj/202103/W020210315575188802739.jpg","https://www.hunau.edu.cn/zjnd/xnyx/xyfj/202103/W020210315575188822169.jpg"],productBy:"摄影｜何纲跃"},"素材｜湖南农业大学党委宣传部"]},{name:"综合实验楼",position:[113.079358,28.180304],intro:"强农兴农：秉承湖湘文化精神，肩扛强农兴农使命，以袁隆平、官春云、印遇龙...",introImg:"https://www.hunau.edu.cn/zjnd/xnyx/xyfj/202103/W020210310299392217846.jpg",introImgType:"vertical",details:[{type:"img",url:"https://www.hunau.edu.cn/zjnd/xnyx/xyfj/202103/W020210310299392217846.jpg"},"强农兴农：秉承湖湘文化精神，肩扛强农兴农使命，以袁隆平、官春云、印遇龙、邹学校、刘仲华五位院士为代表的专家学者躬耕中国大地，把论文写在大地上，把成果留在农民家。","素材｜湖南农业大学党委宣传部    摄影｜熊赳"]},{name:"枫叶林",position:[113.084143,28.183411],intro:"穿过修业广场，夹在图书馆和广场之间步行道，就是我们美丽的枫叶林...",introImg:"https://www.hunau.edu.cn/zjnd/xnyx/xyfj/202103/W020210310297150865670.jpg",introImgType:"vertical",details:[{type:"imgs",url:["https://www.hunau.edu.cn/zjnd/xnyx/xyfj/202103/W020210310297150865670.jpg"]},"朴诚奋勉：北去湘江红叶老，朴诚奋勉竞峥嵘。沧桑多巨变，唯我守初心，立德树人担使命，一方净土听书声。","素材｜湖南农业大学党委宣传部    摄影｜刘瑞贞"]},{name:"图书馆",position:[113.084186,28.182749],intro:"北门进来后，就是我们的修业广场。升旗仪式、各种活动都会在这里...",introImg:"https://www.hunau.edu.cn/zjnd/xnyx/xyfj/202103/W020210315583898821945.jpg",details:[{type:"img",url:"https://www.hunau.edu.cn/zjnd/xnyx/xyfj/202103/W020210310302595694298.jpg",productBy:"摄影｜刘雅芸"},"求实创新：层林浸染秋色满，枫叶枝头似火燃。平湖清波荡漾，曲径绿树葱茏。乡村振兴施抱负，求实创新耀中华。",{type:"imgs",url:["https://www.hunau.edu.cn/zjnd/xnyx/xyfj/202103/W020210315583898821945.jpg","https://www.hunau.edu.cn/zjnd/xnyx/xyfj/202103/W020210315583898836899.jpg","https://www.hunau.edu.cn/zjnd/xnyx/xyfj/202103/W020210315583898840095.jpg"],productBy:"摄影｜何纲跃"},"素材｜湖南农业大学党委宣传部"]},{name:"第七教学楼",position:[113.082909,28.178834],intro:"你看与不看，七教应在哪里...",introImg:"https://www.hunau.edu.cn/zjnd/xnyx/xyfj/202103/W020210315592511376087.jpg",details:[{type:"imgs",url:["https://www.hunau.edu.cn/zjnd/xnyx/xyfj/202103/W020210315589752517407.jpg","https://www.hunau.edu.cn/zjnd/xnyx/xyfj/202103/W020210315592511376087.jpg","https://www.hunau.edu.cn/zjnd/xnyx/xyfj/202103/W020210315592511397572.jpg"],productBy:"摄影｜何纲跃"},"求实创新：层林浸染秋色满，枫叶枝头似火燃。平湖清波荡漾，曲径绿树葱茏。乡村振兴施抱负，求实创新耀中华。",{type:"imgs",url:"https://www.hunau.edu.cn/zjnd/xnyx/xyfj/202103/W020210315620213766737.jpg",productBy:"摄影｜熊赳"},"素材｜湖南农业大学党委宣传部"]},{name:"第八教学楼——逸夫楼",position:[113.086691,28.184261],intro:"八教坐落于神农路与科教路路口，学术报告厅也在这里哦...",introImg:"https://www.hunau.edu.cn/zjnd/xnyx/xyfj/202103/W020210316616725698469.jpg",details:[{type:"imgs",url:["https://www.hunau.edu.cn/zjnd/xnyx/xyfj/202103/W020210316616725664665.jpg","https://www.hunau.edu.cn/zjnd/xnyx/xyfj/202103/W020210316616725685273.jpg","https://www.hunau.edu.cn/zjnd/xnyx/xyfj/202103/W020210316616725698469.jpg"],productBy:"摄影｜何纲跃"},"素材｜湖南农业大学党委宣传部"]},{name:"第九教学楼",position:[113.082974,28.18386],intro:"九教位于修业广场西侧，东方学院就在这里哦...",introImg:"https://www.hunau.edu.cn/zjnd/xnyx/xyfj/202103/W020210316625291520388.jpg",details:[{type:"img",url:"https://www.hunau.edu.cn/zjnd/xnyx/xyfj/202103/W020210316625291520388.jpg",productBy:"摄影｜何纲跃"},"素材｜湖南农业大学党委宣传部"]},{name:"第十教学楼",position:[113.087238,28.182343],intro:"第十教学楼位于图书馆东侧，第八教学楼南侧。公共管理与法学学、教育技术学校都在这里面哦...",introImg:"https://www.hunau.edu.cn/zjnd/xnyx/xyfj/202103/W020210316627724676585.jpg",details:[{type:"img",url:"https://www.hunau.edu.cn/zjnd/xnyx/xyfj/202103/W020210316627724676585.jpg",productBy:" 摄影｜何纲跃"},"素材｜湖南农业大学党委宣传部"]},{name:"第十一教学楼",position:[113.085812,28.184351],intro:"啊啊十一教，你比十教多一教，你比十二教少一教~~~",introImg:"https://www.hunau.edu.cn/zjnd/xnyx/xyfj/202103/W020210316639659585547.jpg",details:[{type:"img",url:"https://www.hunau.edu.cn/zjnd/xnyx/xyfj/202103/W020210316639659585547.jpg",productBy:"摄影｜何纲跃\n\n素材｜湖南农业大学党委宣传部"}]},{name:"文渊馆",position:[113.084595,28.177826],intro:"文渊馆紧临行政楼，他是我们的老图书馆，同时团委应在这里哦....",introImg:"https://www.hunau.edu.cn/zjnd/xnyx/xyfj/202103/W020210315594300192987.jpg",details:[{type:"img",url:"https://www.hunau.edu.cn/zjnd/xnyx/xyfj/202103/W020210315594300192987.jpg",productBy:"摄影｜何纲跃"},"素材｜湖南农业大学党委宣传部"]},{name:"寸草湖景观",position:[113.085185,28.177055],intro:"寸草湖就在文渊馆之后，是一个散心的好去处",introImg:"https://www.hunau.edu.cn/zjnd/xnyx/xyfj/202103/W020210311329819657272.jpg",details:[{type:"imgs",url:["https://www.hunau.edu.cn/zjnd/xnyx/xyfj/202103/W020210311329819657272.jpg","https://www.hunau.edu.cn/zjnd/xnyx/xyfj/202103/W020210311329819674076.jpg","https://www.hunau.edu.cn/zjnd/xnyx/xyfj/202103/W020210311363097582080.jpg"],productBy:"摄影｜熊赳"},{type:"imgs",url:["https://www.hunau.edu.cn/zjnd/xnyx/xyfj/202103/W020210315597091003467.jpg","https://www.hunau.edu.cn/zjnd/xnyx/xyfj/202103/W020210315598364674335.jpg"],productBy:"摄影｜何纲跃"},"素材｜湖南农业大学党委宣传部",{type:"img",url:"https://www.hunau.edu.cn/zjnd/xnyx/xyfj/202103/W020210311367955646311.jpg"}]},{name:"逸园景观",position:[113.0871,28.177585],intro:"寸草湖东侧，就是美丽的逸园了，这里的湖景不能错过哦。。。",introImg:"https://www.hunau.edu.cn/zjnd/xnyx/xyfj/202103/W020210311347117022545.jpg",details:[{type:"img",url:"https://www.hunau.edu.cn/zjnd/xnyx/xyfj/202103/W020210311347117022545.jpg",productBy:"摄影｜熊赳"},{type:"imgs",url:["https://www.hunau.edu.cn/zjnd/xnyx/xyfj/202103/W020210315588025473547.jpg","https://www.hunau.edu.cn/zjnd/xnyx/xyfj/202103/W020210315600095982603.jpg"],productBy:"摄影｜何纲跃"},"素材｜湖南农业大学党委宣传部"]},{name:"动医学院",position:[113.081349,28.183647],intro:"动医学院位于紫薇路神农路路口，紧挨九教....",introImg:"https://www.hunau.edu.cn/zjnd/xnyx/xyfj/202103/W020210311349578661929.jpg",details:[{type:"imgs",url:["https://www.hunau.edu.cn/zjnd/xnyx/xyfj/202103/W020210311349578661929.jpg","https://www.hunau.edu.cn/zjnd/xnyx/xyfj/202103/W020210311349578683125.jpg"],productBy:"素材｜湖南农业大学党委宣传部    摄影｜熊赳"}]},{name:"修业广州",position:[113.084025,28.184168],intro:"北门进来后，就是我们的修业广场。升旗仪式、各种活动都会在这里...",introImg:"http://www.hnndzsw.com/userfiles/image/%E5%9B%BE%E4%B9%A6%E9%A6%86.jpg",details:["北门进来后，就是我们的修业广场。升旗仪式、各种活动都会在这里。这里，也是我们迎接新生的主要场地哦。",{type:"imgs",url:["http://www.hnndzsw.com/userfiles/image/%E5%9B%BE%E4%B9%A6%E9%A6%86.jpg","https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=280666954,1543717427&fm=26&gp=0.jpg"]}]}]};r=new AMap.Map("container",{center:l,zoom:c,zooms:g});let h=function(n,t){let e=[];if(!n||!n.length)return e;for(let[o,r]of n.entries()){let n=r.markerImg||t,{position:i}=r,{size:p,src:a}=n;e.push(new AMap.Marker({animation:"AMAP_ANIMATION_BOUNCE",icon:new AMap.Icon({size:new AMap.Size(...p),image:a,imageSize:new AMap.Size(...p)}),position:i,offset:new AMap.Pixel(-p[0]/2,-p[1]),zIndex:100})),e[o].id=o+""}return e}(x,w);r.add(h);for(let n of h)n.on("click",(({target:n})=>{console.log(n,n.id),u(n.id,x[n.id])}))})()})();