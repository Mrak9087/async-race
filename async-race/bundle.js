(()=>{"use strict";function t(t,n,e){void 0===e&&(e="");var r=document.createElement(t);return r.className=n,r.innerHTML=e,r}function n(t){var n=t.getBoundingClientRect(),e=n.top;return{x:n.left+n.width/2,y:e+n.height/2}}function e(){for(var t="0123456789ABCDEF",n="#",e=0;e<6;e++)n+=t[Math.floor(Math.random()*t.length)];return n}function r(t){return'<?xml version="1.0"?>\n    <svg xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns="http://www.w3.org/2000/svg" xmlns:cc="http://creativecommons.org/ns#" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:svg="http://www.w3.org/2000/svg" id="svg2" viewBox="0 0 167.83 55.332" version="1.0">\n      <g id="layer1" transform="translate(-227.51 -167.55)">\n        <path id="path2220" fill="'.concat(t,'" stroke="#FFFFFF" fill-rule="evenodd" d="m229.52 196.33c-0.09-8.41 0.63-14.12 2.92-14.62l11.85-1.54c8.38-3.87 17.11-8.68 24.77-10.62 5.88-1.17 12.1-1.88 18.77-2 13.43 0.22 28.36-0.7 37.85 2.47 9.04 4.17 17.95 8.62 26.46 13.84 11.48 0.79 34.91 3.98 38.32 7.7 1.69 2.28 3.05 4.73 3.69 7.54 1.49 0.61 1.38 2.82 0.77 5.53l-0.16 5.54-5.69 2.31-11.23 1.39-2.92 0.77c-4.24 9.94-19.98 8.71-24.31-0.47l-3.54 0.62-63.09-0.62-0.77 1.08-4.92-0.15c-3.3 10.15-22.17 11.08-25.08-1.39h-2.46l-7.39-1.07-11.23-1.54c-3.06-1.82-4.34-3.19-4.62-4.31l0.77-1.08-0.61-6.15c0.41-2.09 0.79-2.76 1.85-3.23zm68.16-26.37c-6.77 0.01-13.39 0.26-19.34 1.57l1.39 11.78 20.9 0.72c0.86-0.18 1.76-0.32 1.59-1.79l-2.18-12.28c-0.79-0.01-1.57 0-2.36 0zm-20.34 1.8c-4.01 0.97-7.7 2.47-10.9 4.74-1.27 0.85-1.73 1.85-1.68 2.97 0.59 2.54 2.09 3.57 4.26 3.47l9.71 0.33-1.39-11.51zm27.26-1.7l4.46 12.68c0.56 0.92 1.38 1.61 2.88 1.69l21.7 0.89c-3.09-2.11-0.55-6 2.58-5.15-5.87-4.89-12.24-7.99-19.13-9.22-4.05-0.65-8.26-0.79-12.49-0.89zm-71.88 12.58c-1.78 0.64-2.21 5.18-2.29 10.75l5.83-0.05c0.22-1.95 0.26-3.9 0.02-5.85-0.57-3.41-2.17-3.83-3.56-4.85zm38.65 5.22h5.51c0.43 0 0.79 0.36 0.79 0.79 0 0.44-0.36 0.79-0.79 0.79h-5.51c-0.44 0-0.79-0.35-0.79-0.79 0-0.43 0.35-0.79 0.79-0.79zm38 0.91h5.51c0.44 0 0.79 0.35 0.79 0.79s-0.35 0.79-0.79 0.79h-5.51c-0.44 0-0.79-0.35-0.79-0.79s0.35-0.79 0.79-0.79zm-34.25 21.22c0 5.04-4.09 9.13-9.13 9.13s-9.13-4.09-9.13-9.13 4.09-9.13 9.13-9.13 9.13 4.09 9.13 9.13zm97.44-1.16c0 5.04-4.09 9.13-9.13 9.13s-9.13-4.09-9.13-9.13 4.09-9.13 9.13-9.13 9.13 4.09 9.13 9.13zm7.63-11.03l11.79 0.08c-0.91-1.96-2.08-3.7-3.91-5.12l-4.56 0.35c-0.84 0.13-1.19 0.5-1.5 0.89l-1.82 3.8z"/>\n      </g>\n    </svg>')}var i=function(t,n,e,r){return new(e||(e=Promise))((function(i,a){function o(t){try{c(r.next(t))}catch(t){a(t)}}function s(t){try{c(r.throw(t))}catch(t){a(t)}}function c(t){var n;t.done?i(t.value):(n=t.value,n instanceof e?n:new e((function(t){t(n)}))).then(o,s)}c((r=r.apply(t,n||[])).next())}))},a=function(t,n){var e,r,i,a,o={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return a={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function s(a){return function(s){return function(a){if(e)throw new TypeError("Generator is already executing.");for(;o;)try{if(e=1,r&&(i=2&a[0]?r.return:a[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,a[1])).done)return i;switch(r=0,i&&(a=[2&a[0],i.value]),a[0]){case 0:case 1:i=a;break;case 4:return o.label++,{value:a[1],done:!1};case 5:o.label++,r=a[1],a=[0];continue;case 7:a=o.ops.pop(),o.trys.pop();continue;default:if(!((i=(i=o.trys).length>0&&i[i.length-1])||6!==a[0]&&2!==a[0])){o=0;continue}if(3===a[0]&&(!i||a[1]>i[0]&&a[1]<i[3])){o.label=a[1];break}if(6===a[0]&&o.label<i[1]){o.label=i[1],i=a;break}if(i&&o.label<i[2]){o.label=i[2],o.ops.push(a);break}i[2]&&o.ops.pop(),o.trys.pop();continue}a=n.call(t,o)}catch(t){a=[6,t],r=0}finally{e=i=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,s])}}};const o=function(){function n(n,e){var r=this;void 0===e&&(e="div"),this.handlePrev=function(t){return i(r,void 0,void 0,(function(){return a(this,(function(n){switch(n.label){case 0:return this.pageNum--,this.pageNum||(this.pageNum=1),[4,t.renderData()];case 1:return n.sent(),[2]}}))}))},this.handleNext=function(t){return i(r,void 0,void 0,(function(){return a(this,(function(n){switch(n.label){case 0:return this.pageNum++,this.pageNum===this.pageCount&&(this.pageNum=this.pageCount),[4,t.renderData()];case 1:return n.sent(),[2]}}))}))},this.node=t(e,n)}return n.prototype.addBottomPanel=function(n){var e=this,r=t("div","bottom_panel");return this.btnPrev=t("button","btn_bottom","prev"),this.btnPrev.addEventListener("click",(function(){return i(e,void 0,void 0,(function(){return a(this,(function(t){return this.handlePrev(n),[2]}))}))})),this.btnNext=t("button","btn_bottom","next"),this.btnNext.addEventListener("click",(function(){return i(e,void 0,void 0,(function(){return a(this,(function(t){return this.handleNext(n),[2]}))}))})),r.append(this.btnPrev,this.btnNext),r},n.prototype.checkPage=function(){1===this.pageNum?(this.btnPrev.disabled=!0,this.btnNext.disabled=!1):this.pageNum===this.pageCount?(this.btnPrev.disabled=!1,this.btnNext.disabled=!0):1===this.pageCount?(this.btnPrev.disabled=!0,this.btnNext.disabled=!0):(this.btnPrev.disabled=!1,this.btnNext.disabled=!1),this.pageNum===this.pageCount&&1===this.pageCount&&(this.btnPrev.disabled=!0,this.btnNext.disabled=!0)},n.prototype.getCountPage=function(t){this.generalCount=t,this.pageCount=Math.floor(this.generalCount/7),this.generalCount%7&&this.pageCount++,this.generalCount||(this.pageCount=1)},n}();var s,c,u="http://localhost:3000/",l="".concat(u,"garage"),h="".concat(u,"winners"),d="".concat(u,"engine");!function(t){t.start="started",t.stop="stopped"}(s||(s={})),function(t){t.asc="asc",t.desc="desc"}(c||(c={}));var p,f=(p=function(t,n){return p=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&(t[e]=n[e])},p(t,n)},function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function e(){this.constructor=t}p(t,n),t.prototype=null===n?Object.create(n):(e.prototype=n.prototype,new e)}),v=function(t,n,e,r){return new(e||(e=Promise))((function(i,a){function o(t){try{c(r.next(t))}catch(t){a(t)}}function s(t){try{c(r.throw(t))}catch(t){a(t)}}function c(t){var n;t.done?i(t.value):(n=t.value,n instanceof e?n:new e((function(t){t(n)}))).then(o,s)}c((r=r.apply(t,n||[])).next())}))},b=function(t,n){var e,r,i,a,o={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return a={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function s(a){return function(s){return function(a){if(e)throw new TypeError("Generator is already executing.");for(;o;)try{if(e=1,r&&(i=2&a[0]?r.return:a[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,a[1])).done)return i;switch(r=0,i&&(a=[2&a[0],i.value]),a[0]){case 0:case 1:i=a;break;case 4:return o.label++,{value:a[1],done:!1};case 5:o.label++,r=a[1],a=[0];continue;case 7:a=o.ops.pop(),o.trys.pop();continue;default:if(!((i=(i=o.trys).length>0&&i[i.length-1])||6!==a[0]&&2!==a[0])){o=0;continue}if(3===a[0]&&(!i||a[1]>i[0]&&a[1]<i[3])){o.label=a[1];break}if(6===a[0]&&o.label<i[1]){o.label=i[1],i=a;break}if(i&&o.label<i[2]){o.label=i[2],o.ops.push(a);break}i[2]&&o.ops.pop(),o.trys.pop();continue}a=n.call(t,o)}catch(t){a=[6,t],r=0}finally{e=i=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,s])}}};const w=function(n){function e(e){var r=n.call(this,"car")||this;return r.startStopEngine=function(t){return v(r,void 0,void 0,(function(){var n;return b(this,(function(e){switch(e.label){case 0:return[4,fetch("".concat(d,"?id=").concat(this.carParam.id,"&status=").concat(t),{method:"PATCH"})];case 1:return[4,e.sent().json()];case 2:switch(n=e.sent(),t){case s.start:this.starBtn.disabled=!0;break;case s.stop:this.starBtn.disabled=!1}return[2,n]}}))}))},r.drive=function(){return v(r,void 0,void 0,(function(){return b(this,(function(t){switch(t.label){case 0:return[4,fetch("".concat(d,"?id=").concat(this.carParam.id,"&status=drive"),{method:"PATCH"})];case 1:return[2,200===t.sent().status]}}))}))},r.carParam=e,r.spanName=t("span","name_car",r.carParam.name),r.starBtn=t("button","btn_car","A"),r.stopBtn=t("button","btn_car","B"),r}return f(e,n),e.prototype.render=function(){this.node.innerHTML=r(this.carParam.color),this.spanName.innerHTML=this.carParam.name},e.prototype.update=function(){return v(this,void 0,void 0,(function(){var t,n;return b(this,(function(e){switch(e.label){case 0:return[4,fetch("".concat(l,"/").concat(this.carParam.id))];case 1:return 200!==(t=e.sent()).status?[3,3]:[4,t.json()];case 2:n=e.sent(),this.carParam.color=n.color,this.carParam.name=n.name,e.label=3;case 3:return this.render(),[2]}}))}))},e}(o);var m=function(){var t=function(n,e){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&(t[e]=n[e])},t(n,e)};return function(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function r(){this.constructor=n}t(n,e),n.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}}(),y=function(t,n,e,r){return new(e||(e=Promise))((function(i,a){function o(t){try{c(r.next(t))}catch(t){a(t)}}function s(t){try{c(r.throw(t))}catch(t){a(t)}}function c(t){var n;t.done?i(t.value):(n=t.value,n instanceof e?n:new e((function(t){t(n)}))).then(o,s)}c((r=r.apply(t,n||[])).next())}))},g=function(t,n){var e,r,i,a,o={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return a={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function s(a){return function(s){return function(a){if(e)throw new TypeError("Generator is already executing.");for(;o;)try{if(e=1,r&&(i=2&a[0]?r.return:a[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,a[1])).done)return i;switch(r=0,i&&(a=[2&a[0],i.value]),a[0]){case 0:case 1:i=a;break;case 4:return o.label++,{value:a[1],done:!1};case 5:o.label++,r=a[1],a=[0];continue;case 7:a=o.ops.pop(),o.trys.pop();continue;default:if(!((i=(i=o.trys).length>0&&i[i.length-1])||6!==a[0]&&2!==a[0])){o=0;continue}if(3===a[0]&&(!i||a[1]>i[0]&&a[1]<i[3])){o.label=a[1];break}if(6===a[0]&&o.label<i[1]){o.label=i[1],i=a;break}if(i&&o.label<i[2]){o.label=i[2],o.ops.push(a);break}i[2]&&o.ops.pop(),o.trys.pop();continue}a=n.call(t,o)}catch(t){a=[6,t],r=0}finally{e=i=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,s])}}};const C=function(e){function r(){var t=e.call(this,"box")||this;return t.startDriving=function(){return y(t,void 0,void 0,(function(){var t,e,r,i,a,o,c;return g(this,(function(u){switch(u.label){case 0:return[4,this.car.startStopEngine(s.start)];case 1:return t=u.sent(),e=t.velocity,r=t.distance,i=Math.round(r/e),a=Math.floor((l=this.car.node,h=this.flag,d=n(l),p=n(h),Math.hypot(d.x-p.x,d.y-p.y)))+50,this.animation(a,i),[4,this.car.drive()];case 2:return(o=u.sent())||window.cancelAnimationFrame(this.idAnim),c=this.car.carParam,[2,{success:o,carParam:c,time:i}]}var l,h,d,p}))}))},t.stopDriving=function(){return y(t,void 0,void 0,(function(){return g(this,(function(t){switch(t.label){case 0:return[4,this.car.startStopEngine(s.stop)];case 1:return t.sent(),window.cancelAnimationFrame(this.idAnim),this.car.node.style.transform="translateX(0)",[2]}}))}))},t}return m(r,e),r.prototype.init=function(n){this.car=new w(n),this.car.render(),this.flag=t("div","flag"),this.flag.innerHTML='<?xml version="1.0" standalone="no"?>\n    <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"\n     "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">\n    <svg version="1.0" xmlns="http://www.w3.org/2000/svg"\n     width="806.000000pt" height="1280.000000pt" viewBox="0 0 806.000000 1280.000000"\n     preserveAspectRatio="xMidYMid meet">\n    <g transform="translate(0.000000,1280.000000) scale(0.100000,-0.100000)"\n    fill="#ff0000" stroke="none">\n    <path d="M144 12768 c-214 -144 -179 -464 62 -563 l59 -25 -85 0 c-89 -1 -108\n    -8 -129 -48 -30 -56 24 -122 99 -122 l35 0 -3 -6005 -2 -6005 140 0 140 0 0\n    3789 0 3790 93 -44 c471 -220 1042 -329 1627 -311 522 15 1027 99 1918 317\n    1034 253 1379 322 1847 369 766 77 1411 -13 2008 -280 l107 -48 0 2217 0 2218\n    -95 42 c-344 151 -670 242 -1035 286 -180 22 -603 30 -805 16 -364 -26 -733\n    -85 -1210 -191 -202 -45 -343 -79 -855 -204 -749 -182 -1207 -264 -1647 -297\n    -211 -15 -675 -7 -841 15 -379 50 -740 153 -1052 300 -49 23 -52 26 -25 26 71\n    0 123 68 94 122 -21 40 -40 47 -129 48 l-85 0 59 25 c117 48 191 146 203 269\n    11 118 -41 226 -141 294 -48 32 -48 32 -176 32 -128 0 -128 0 -176 -32z"/>\n    </g>\n    </svg>',this.road=t("div","road"),this.selectCarBtn=t("button","btn","select"),this.deleteCarBtn=t("button","btn","delete");var e=t("div","wrapper");e.append(this.selectCarBtn,this.deleteCarBtn,this.car.starBtn,this.car.stopBtn,this.car.spanName),this.road.append(this.car.node,this.flag),this.node.append(e,this.road)},r.prototype.animation=function(t,n){var e=this,r=0,i=function(a){r||(r=a);var o=a-r,s=Math.round(o*(t/n));e.car.node.style.transform="translateX(".concat(Math.min(s,t),"px)"),s<t&&(e.idAnim=window.requestAnimationFrame(i))};this.idAnim=window.requestAnimationFrame(i)},r}(o);var P=function(){var t=function(n,e){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&(t[e]=n[e])},t(n,e)};return function(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function r(){this.constructor=n}t(n,e),n.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}}(),x=function(t,n,e,r){return new(e||(e=Promise))((function(i,a){function o(t){try{c(r.next(t))}catch(t){a(t)}}function s(t){try{c(r.throw(t))}catch(t){a(t)}}function c(t){var n;t.done?i(t.value):(n=t.value,n instanceof e?n:new e((function(t){t(n)}))).then(o,s)}c((r=r.apply(t,n||[])).next())}))},_=function(t,n){var e,r,i,a,o={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return a={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function s(a){return function(s){return function(a){if(e)throw new TypeError("Generator is already executing.");for(;o;)try{if(e=1,r&&(i=2&a[0]?r.return:a[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,a[1])).done)return i;switch(r=0,i&&(a=[2&a[0],i.value]),a[0]){case 0:case 1:i=a;break;case 4:return o.label++,{value:a[1],done:!1};case 5:o.label++,r=a[1],a=[0];continue;case 7:a=o.ops.pop(),o.trys.pop();continue;default:if(!((i=(i=o.trys).length>0&&i[i.length-1])||6!==a[0]&&2!==a[0])){o=0;continue}if(3===a[0]&&(!i||a[1]>i[0]&&a[1]<i[3])){o.label=a[1];break}if(6===a[0]&&o.label<i[1]){o.label=i[1],i=a;break}if(i&&o.label<i[2]){o.label=i[2],o.ops.push(a);break}i[2]&&o.ops.pop(),o.trys.pop();continue}a=n.call(t,o)}catch(t){a=[6,t],r=0}finally{e=i=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,s])}}},k=function(t,n,e){if(e||2===arguments.length)for(var r,i=0,a=n.length;i<a;i++)!r&&i in n||(r||(r=Array.prototype.slice.call(n,0,i)),r[i]=n[i]);return t.concat(r||Array.prototype.slice.call(n))},D=function(n){function r(){var t=n.call(this,"garage")||this;return t.addBox=function(n){var e=new C;e.init(n),t.roads.push(e),e.selectCarBtn.addEventListener("click",(function(){t.selectCar(e.car)})),e.deleteCarBtn.addEventListener("click",(function(){t.sendDataCarForDelete(e.car.carParam.id)})),e.car.starBtn.addEventListener("click",(function(){t.btnRace.disabled=!0,e.startDriving()})),e.car.stopBtn.addEventListener("click",(function(){return x(t,void 0,void 0,(function(){return _(this,(function(t){switch(t.label){case 0:return[4,e.stopDriving()];case 1:return t.sent(),this.btnRace.disabled=!1,[2]}}))}))}))},t.selectCar=function(n){t.selectedCar=n,t.inputUpdateName.value=t.selectedCar.carParam.name,t.inputUpdateColor.value=t.selectedCar.carParam.color},t.sendDataCarForCreate=function(n,e){return x(t,void 0,void 0,(function(){var t,r;return _(this,(function(i){switch(i.label){case 0:return i.trys.push([0,3,,4]),n&&e?(t={name:n,color:e},[4,fetch(l,{method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}})]):[3,2];case 1:i.sent(),i.label=2;case 2:return[3,4];case 3:return r=i.sent(),this.handleError(r),[3,4];case 4:return this.inputName.value="",this.inputColor.value="",[2]}}))}))},t.sendDataCarForUpdate=function(n){return x(t,void 0,void 0,(function(){var t,e;return _(this,(function(r){switch(r.label){case 0:return r.trys.push([0,4,,5]),this.inputUpdateName.value&&this.inputUpdateColor.value?(t={name:this.inputUpdateName.value,color:this.inputUpdateColor.value},[4,fetch("".concat(l,"/").concat(n),{method:"PUT",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}})]):[3,3];case 1:return 200!==r.sent().status?[3,3]:[4,this.selectedCar.update()];case 2:r.sent(),r.label=3;case 3:return[3,5];case 4:return e=r.sent(),this.handleError(e),[3,5];case 5:return this.inputUpdateName.value="",this.inputUpdateColor.value="",[2]}}))}))},t.sendDataCarForDelete=function(n){return x(t,void 0,void 0,(function(){return _(this,(function(t){switch(t.label){case 0:return[4,fetch("".concat(l,"/").concat(n),{method:"DELETE"})];case 1:return t.sent(),[4,this.renderData()];case 2:return t.sent(),[2]}}))}))},t.race=function(){return x(t,void 0,void 0,(function(){var t;return _(this,(function(n){switch(n.label){case 0:return t=this.roads.map((function(t){return t.startDriving()})),[4,this.raceAll(t,this.roads.map((function(t){return t.car.carParam.id})))];case 1:return[2,n.sent()]}}))}))},t.raceAll=function(n,e){return x(t,void 0,void 0,(function(){var t,r,i,a;return _(this,(function(o){switch(o.label){case 0:return n.length?[4,Promise.race(n)]:[2,{success:!1,carParam:null,time:0}];case 1:return(t=o.sent()).success?[2,t]:(r=e.findIndex((function(n){return t.carParam.id===n})),i=k(k([],n.slice(0,r),!0),n.slice(r+1),!0),a=k(k([],e.slice(0,r),!0),e.slice(r+1),!0),[2,this.raceAll(i,a)])}}))}))},t.createCars=function(){return x(t,void 0,void 0,(function(){var t,n,r;return _(this,(function(i){switch(i.label){case 0:for(t=0;t<100;t++)void 0,void 0,void 0,void 0,o=["Logan","7","CLK","Camry","Combi","9","Corsa","D89","Cayene"],s=(a=["BMW","Mersedes","Toyota","Moskvich","Reno","Tesla","Opel","Porshe"])[Math.floor(Math.random()*a.length)],c=o[Math.floor(Math.random()*o.length)],n="".concat(s," ").concat(c),r=e(),this.sendDataCarForCreate(n,r);return[4,this.renderData()];case 1:return i.sent(),[2]}var a,o,s,c}))}))},t.createWinner=function(n){return x(t,void 0,void 0,(function(){return _(this,(function(t){switch(t.label){case 0:return[4,fetch(h,{method:"POST",body:JSON.stringify(n),headers:{"Content-Type":"application/json"}})];case 1:return t.sent(),[2]}}))}))},t.updateWinner=function(n){return x(t,void 0,void 0,(function(){return _(this,(function(t){switch(t.label){case 0:return[4,fetch("".concat(h,"/").concat(n.id),{method:"PUT",body:JSON.stringify({wins:n.wins,time:n.time}),headers:{"Content-Type":"application/json"}})];case 1:return t.sent(),[2]}}))}))},t.getWinner=function(n){return x(t,void 0,void 0,(function(){return _(this,(function(t){return[2,fetch("".concat(h,"/").concat(n))]}))}))},t.saveWinner=function(n){return x(t,void 0,void 0,(function(){var t,e;return _(this,(function(r){switch(r.label){case 0:return[4,this.getWinner(n.id)];case 1:return 404!==(t=r.sent()).status?[3,3]:[4,this.createWinner(n)];case 2:return r.sent(),[3,6];case 3:return[4,t.json()];case 4:return(e=r.sent()).time=e.time<n.time?e.time:n.time,e.wins++,[4,this.updateWinner(e)];case 5:r.sent(),r.label=6;case 6:return[2]}}))}))},t.pageNum=1,t.roads=[],t.selectedCar=null,t}return P(r,n),r.prototype.init=function(){var n=this;this.carsDiv=t("div","cars"),this.panel=t("div","panel"),this.winMessageDiv=t("div","win_message"),this.textMessageSpan=t("span","text_message"),this.winMessageDiv.append(this.textMessageSpan),this.winMessageDiv.addEventListener("click",(function(){n.winMessageDiv.classList.remove("win_show"),n.buttonsBlockUnblock(!1),n.checkPage()})),this.addCreatePanel(),this.addUpdatePanel(),this.addButtonsPanel(),this.node.append(this.panel,this.carsDiv,this.addBottomPanel(this),this.winMessageDiv)},r.prototype.render=function(t){return t||this.renderData(),this.node},r.prototype.addCreatePanel=function(){var n=this,e=t("div","wrapper");this.inputName=t("input","carName"),this.inputName.type="text",this.inputColor=t("input","carColor"),this.inputColor.type="Color",this.btnCreateCar=t("button","carName","create"),this.btnCreateCar.type="button",this.btnCreateCar.addEventListener("click",(function(){return x(n,void 0,void 0,(function(){return _(this,(function(t){switch(t.label){case 0:return[4,this.sendDataCarForCreate(this.inputName.value,this.inputColor.value)];case 1:return t.sent(),[4,this.renderData()];case 2:return t.sent(),this.inputName.value="",[2]}}))}))})),e.append(this.inputName,this.inputColor,this.btnCreateCar),this.panel.append(e)},r.prototype.addUpdatePanel=function(){var n=this,e=t("div","wrapper");this.inputUpdateName=t("input","carName"),this.inputUpdateName.type="text",this.inputUpdateColor=t("input","carColor"),this.inputUpdateColor.type="Color",this.btnUpdateCar=t("button","carName","update"),this.btnUpdateCar.type="button",this.btnUpdateCar.addEventListener("click",(function(){return x(n,void 0,void 0,(function(){return _(this,(function(t){switch(t.label){case 0:return this.selectedCar?[4,this.sendDataCarForUpdate(this.selectedCar.carParam.id)]:[3,2];case 1:t.sent(),t.label=2;case 2:return this.selectedCar=null,[2]}}))}))})),e.append(this.inputUpdateName,this.inputUpdateColor,this.btnUpdateCar),this.panel.append(e)},r.prototype.addButtonsPanel=function(){var n=this,e=t("div","wrapper");this.btnRace=t("button","race","race"),this.btnReset=t("button","btnGen","reset"),this.btnRace.addEventListener("click",(function(){return x(n,void 0,void 0,(function(){var t;return _(this,(function(n){switch(n.label){case 0:return this.btnRace.disabled=!0,this.buttonsBlockUnblock(!0),[4,this.race()];case 1:return t=n.sent(),this.textMessageSpan.innerHTML=t.carParam.name?"Winner: ".concat(t.carParam.name):"Все сломались",this.winMessageDiv.classList.add("win_show"),t.success?[4,this.saveWinner({id:t.carParam.id,wins:1,time:+(t.time/1e3).toFixed(2)})]:[3,3];case 2:n.sent(),n.label=3;case 3:return[2]}}))}))})),this.btnReset.addEventListener("click",(function(){return x(n,void 0,void 0,(function(){var t=this;return _(this,(function(n){return this.roads.forEach((function(n){return x(t,void 0,void 0,(function(){return _(this,(function(t){switch(t.label){case 0:return[4,n.stopDriving()];case 1:return t.sent(),[2]}}))}))})),this.btnRace.disabled=!1,[2]}))}))})),this.btnGenerateCars=t("button","btnGen","Generate cars"),this.btnGenerateCars.addEventListener("click",(function(){return x(n,void 0,void 0,(function(){return _(this,(function(t){switch(t.label){case 0:return[4,this.createCars()];case 1:return t.sent(),[2]}}))}))})),e.append(this.btnRace,this.btnReset,this.btnGenerateCars),this.panel.append(e)},r.prototype.renderData=function(){return x(this,void 0,void 0,(function(){var t,n,e,r,i=this;return _(this,(function(a){switch(a.label){case 0:this.roads.splice(0),a.label=1;case 1:return a.trys.push([1,4,,5]),[4,fetch("".concat(l,"?_page=").concat(this.pageNum,"&_limit=").concat(7))];case 2:return[4,(t=a.sent()).json()];case 3:return n=a.sent(),e=t.headers.get("X-Total-Count"),this.getCountPage(+e),this.carsDiv.innerHTML="<span>Garage(".concat(this.generalCount,")</span>\n                <span>Page #").concat(this.pageNum,"</span>"),n.forEach((function(t){i.addBox(t)})),[3,5];case 4:return r=a.sent(),this.handleError(r),[3,5];case 5:return!this.roads.length&&this.pageNum>1?this.handlePrev(this):(this.showRoads(),this.checkPage()),[2]}}))}))},r.prototype.handleError=function(t){throw t},r.prototype.buttonsBlockUnblock=function(t){this.btnReset.disabled=t,this.btnNext.disabled=t,this.btnPrev.disabled=t,this.btnCreateCar.disabled=t,this.btnUpdateCar.disabled=t,this.btnGenerateCars.disabled=t,this.roads.forEach((function(n){n.deleteCarBtn.disabled=t,n.selectCarBtn.disabled=t,n.car.starBtn.disabled=t,n.car.stopBtn.disabled=t}))},r.prototype.showRoads=function(){var t=this;this.roads.forEach((function(n){t.carsDiv.append(n.node)}))},r}(o);const M=D;var N=function(){var t=function(n,e){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&(t[e]=n[e])},t(n,e)};return function(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function r(){this.constructor=n}t(n,e),n.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}}(),T=function(t,n,e,r){return new(e||(e=Promise))((function(i,a){function o(t){try{c(r.next(t))}catch(t){a(t)}}function s(t){try{c(r.throw(t))}catch(t){a(t)}}function c(t){var n;t.done?i(t.value):(n=t.value,n instanceof e?n:new e((function(t){t(n)}))).then(o,s)}c((r=r.apply(t,n||[])).next())}))},E=function(t,n){var e,r,i,a,o={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return a={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function s(a){return function(s){return function(a){if(e)throw new TypeError("Generator is already executing.");for(;o;)try{if(e=1,r&&(i=2&a[0]?r.return:a[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,a[1])).done)return i;switch(r=0,i&&(a=[2&a[0],i.value]),a[0]){case 0:case 1:i=a;break;case 4:return o.label++,{value:a[1],done:!1};case 5:o.label++,r=a[1],a=[0];continue;case 7:a=o.ops.pop(),o.trys.pop();continue;default:if(!((i=(i=o.trys).length>0&&i[i.length-1])||6!==a[0]&&2!==a[0])){o=0;continue}if(3===a[0]&&(!i||a[1]>i[0]&&a[1]<i[3])){o.label=a[1];break}if(6===a[0]&&o.label<i[1]){o.label=i[1],i=a;break}if(i&&o.label<i[2]){o.label=i[2],o.ops.push(a);break}i[2]&&o.ops.pop(),o.trys.pop();continue}a=n.call(t,o)}catch(t){a=[6,t],r=0}finally{e=i=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,s])}}};const L=function(n){function e(){var t=n.call(this,"winners")||this;return t.winnersList=[],t.pageNum=1,t.generalCount=0,t.sortDir=c.asc,t}return N(e,n),e.prototype.init=function(){var n=this;this.table=t("table","table_winners"),this.table.addEventListener("click",(function(t){n.handleClickTable(t)})),this.winDiv=t("div","win"),this.node.append(this.winDiv,this.addBottomPanel(this))},e.prototype.render=function(){return this.renderData(),this.node},e.prototype.renderData=function(){return T(this,void 0,void 0,(function(){var t,n,e,r,i=this;return E(this,(function(a){switch(a.label){case 0:this.winnersList.splice(0),a.label=1;case 1:return a.trys.push([1,4,,5]),t=this.sortCell?"&_sort=".concat(this.sortCell,"&_order=").concat(this.sortDir):"",[4,fetch("".concat(h,"?_page=").concat(this.pageNum,"&_limit=").concat(10).concat(t))];case 2:return[4,(n=a.sent()).json()];case 3:return e=a.sent(),r=n.headers.get("X-Total-Count"),this.getCountPage(+r),this.winDiv.innerHTML="<span>Winners(".concat(this.generalCount,")</span>\n                <span>Page #").concat(this.pageNum,"</span>"),this.winDiv.append(this.table),this.addHeadTable(),e.forEach((function(t){i.winnersList.push(t)})),this.checkPage(),[3,5];case 4:return a.sent(),this.table.innerHTML="<tr>".concat("Ой, что-то пошло не так!","<tr/>"),[3,5];case 5:return this.showWinner(),[2]}}))}))},e.prototype.addHeadTable=function(){this.table.innerHTML="",this.table.innerHTML="\n            <thead>\n                <th>Number</th>\n                <th>Car</th>\n                <th>Name</th>\n                <th class='sorted ".concat(this.getSort(this.activeSortCell,"wins"),"'>Wins</th>\n                <th class='sorted ").concat(this.getSort(this.activeSortCell,"time"),"'>Best time (seconds)</th>\n            </thead>\n        ")},e.prototype.showWinner=function(){return T(this,void 0,void 0,(function(){var t=this;return E(this,(function(n){switch(n.label){case 0:return this.addHeadTable(),[4,Promise.all(this.winnersList.map(this.getWinnerDataFull))];case 1:return n.sent().forEach((function(n,e){t.createTrTable(n,e)})),[2]}}))}))},e.prototype.getWinnerDataFull=function(t){return T(this,void 0,void 0,(function(){return E(this,(function(n){switch(n.label){case 0:return[4,fetch("".concat(l,"/").concat(t.id))];case 1:return[4,n.sent().json()];case 2:return[2,{car:n.sent(),winner:t}]}}))}))},e.prototype.createTrTable=function(n,e){return T(this,void 0,void 0,(function(){var i;return E(this,(function(a){return(i=t("tr","")).innerHTML="<td>".concat(e+1,"</td><td>").concat(r(n.car.color),"</td><td>").concat(n.car.name,"</td><td>").concat(n.winner.wins,"</td><td>").concat(n.winner.time,"</td>"),this.table.append(i),[2]}))}))},e.prototype.handleClickTable=function(t){var n=t.target;n.classList.contains("sorted")&&(this.activeSortCell&&(this.activeSortCell.classList.remove("desc"),this.activeSortCell.classList.remove("asc")),n.innerHTML.indexOf("Wins")>-1?this.checkedSort("wins"):n.innerHTML.indexOf("time")>-1?this.checkedSort("time"):(this.sortCell="",n=null),this.activeSortCell=n,this.renderData())},e.prototype.checkedSort=function(t){this.sortCell=t,this.sortDir===c.asc?this.sortDir=c.desc:this.sortDir=c.asc},e.prototype.getSort=function(t,n){return t&&this.sortCell===n?this.sortDir:""},e}(o);var B=function(){var t=function(n,e){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&(t[e]=n[e])},t(n,e)};return function(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function r(){this.constructor=n}t(n,e),n.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}}(),S=new(function(n){function e(){return n.call(this,"app")||this}return B(e,n),e.prototype.init=function(){var n=this;this.btnPanel=t("div","app_panel"),this.viewPanel=t("div","view_panel"),this.garageBtn=t("button","btn_app","garage"),this.winnersBtn=t("button","btn_app","winners"),this.btnPanel.append(this.garageBtn,this.winnersBtn),this.garage=new M,this.garage.init(),this.winners=new L,this.winners.init(),this.viewPanel.append(this.garage.render(!1)),this.garageBtn.addEventListener("click",(function(){n.renderElement(n.garage,!0)})),this.winnersBtn.addEventListener("click",(function(){n.renderElement(n.winners)})),this.footer=t("div","footer"),this.footer.innerHTML='<div class="footer_container">\n    <a class="github" href="https://github.com/Mrak9087" target="blank">Mrak9087</a>\n    <span class="rss_year">2022</span>\n    <a class="rss" href="https://rs.school/js/" target="_blank" rel="noopener noreferrer">\n        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" >\n        <title>image2vector</title>\n        <path fill="limegreen" d="M48.781 1.158c-2.463 0.572-3.686 1.87-3.698 3.924-0.014 2.392 1.326 3.49 5.622 4.61 2.088 0.544 2.798 1.487 1.81 2.403-1.121 1.039-3.315 0.365-3.591-1.104-0.137-0.733-0.13-0.731-2.431-0.603l-2.039 0.113 0.098 0.642c0.151 0.99 0.968 2.518 1.664 3.114 2.063 1.765 7.744 1.584 9.689-0.31l0.569-0.554 0.109 0.644c0.4 2.369 2.806 4.595 5.574 5.157l0.889 0.181-0.525 0.688c-1.733 2.27-1.782 6.912-0.098 9.323 2.577 3.689 9.829 3.582 12.215-0.18l0.444-0.7v3.339h11.239v-3.59h-6.712v-10.459h-4.527l-0.009 1.6c-0.008 1.307-0.043 1.544-0.195 1.295-0.86-1.411-2.535-2.583-4.177-2.922l-0.885-0.183 0.898-0.675c2.794-2.1 4.534-5.931 4.087-8.998-1.175-8.060-12.785-8.185-17.207-0.186-0.285 0.515-0.528 0.953-0.54 0.973s-0.41-0.34-0.885-0.799c-0.985-0.954-1.776-1.303-4.465-1.969-2.502-0.62-3.014-1.055-2.173-1.846 0.8-0.752 2.542-0.265 2.934 0.821 0.23 0.636 0.188 0.63 2.848 0.454l1.538-0.102-0.098-0.613c-0.454-2.84-4.028-4.404-7.973-3.487zM0.937 8.273v7.024h4.527v-5.62h0.46c0.726 0 1.165 0.534 2.565 3.122l1.309 2.419 2.517 0.043c1.384 0.024 2.516 0.001 2.516-0.050 0-0.791-2.821-5.356-3.604-5.832l-0.429-0.261 0.866-0.453c3.211-1.681 2.603-6.497-0.916-7.252-0.444-0.095-2.693-0.166-5.292-0.166h-4.519v7.024zM69.476 2.472c7.065 1.844 6.418 11.756-1.004 15.375-7.562 3.687-14.301-2.366-10.707-9.616 2.097-4.23 7.461-6.868 11.71-5.758zM8.583 4.415c1.59 0.804 0.535 2.288-1.717 2.416l-1.402 0.080v-2.697l1.366 0.002c0.782 0.001 1.531 0.086 1.753 0.198zM66.977 5.657c-1.243 0.33-2.507 1.586-2.508 2.492-0.002 1.48 1.181 2.014 3.043 1.373 1.139-0.392 1.429-0.392 1.64 0.001 0.357 0.668-0.813 1.349-1.496 0.87-0.343-0.24-1.608 0.517-1.621 0.97-0.020 0.682 1.706 0.94 2.763 0.413 3.357-1.673 2.404-5.264-1.078-4.063-1.392 0.48-1.691 0.501-1.691 0.115 0-0.606 0.947-1.044 1.36-0.631 0.169 0.169 1.449-0.68 1.449-0.961 0-0.42-1.134-0.774-1.862-0.58zM61.938 9.025c-0.745 0.539-0.78 0.399 0.586 2.338 0.841 1.193 1.164 1.782 1.132 2.061-0.056 0.477-0.591 0.604-0.967 0.229-0.239-0.239-0.301-0.22-0.867 0.265-1.429 1.224 0.743 2.275 2.357 1.141 1.773-1.246 1.776-2.019 0.013-4.593-1.367-1.997-1.43-2.037-2.255-1.44zM4.638 17.643c-2.554 0.403-4.049 1.896-4.069 4.064-0.020 2.212 1.414 3.472 4.966 4.361 2.177 0.545 2.894 0.961 2.894 1.678 0 2.019-3.614 1.817-3.996-0.223-0.134-0.712-0.117-0.708-2.422-0.583l-2.044 0.111 0.102 0.64c0.466 2.934 2.172 4.155 5.973 4.274 3.014 0.094 4.050-0.198 5.366-1.514l0.901-0.901 0.331 0.447c1.915 2.59 8.384 2.764 10.508 0.282 0.621-0.725 1.318-2.091 1.389-2.72 0.050-0.443 0.036-0.451-1.857-1.025l-1.907-0.579-0.256 0.77c-0.872 2.625-4.165 2.655-4.888 0.045-0.246-0.887-0.216-3.006 0.056-3.919 0.656-2.207 3.427-2.66 4.551-0.743 0.469 0.8 0.343 0.785 2.471 0.304 2.026-0.458 1.939-0.377 1.477-1.372-1.832-3.942-7.991-4.867-11.257-1.692l-0.911 0.886-0.378-0.645c-0.942-1.608-3.913-2.434-6.998-1.946zM47.766 17.647c-1.729 0.3-3.437 1.388-4.402 2.803-0.258 0.379-0.265 0.348-0.273-1.133l-0.008-1.522h-4.527v4.839h-4.527v-4.839h-4.527v14.049h4.527v-5.62h4.527v5.62h4.527v-3.176l0.489 0.737c2.034 3.070 8.325 3.609 11.188 0.958 3.313-3.067 2.663-10.044-1.115-11.972-1.458-0.744-4.017-1.068-5.879-0.745zM7.176 20.525c0.261 0.135 0.567 0.501 0.733 0.877l0.285 0.646 3.050-0.147-0.1 0.796c-0.132 1.053-0.191 1.093-1.066 0.706-0.412-0.182-1.565-0.535-2.564-0.786-2.363-0.592-2.657-0.719-2.778-1.2-0.224-0.89 1.339-1.462 2.441-0.892zM50.443 21.077c2.312 0.642 2.78 5.948 0.636 7.21-1.601 0.942-3.627 0.14-4.102-1.625-0.944-3.507 0.805-6.324 3.466-5.585zM69.316 21.073c2.686 0.746 2.631 6.782-0.068 7.509-2.17 0.584-3.614-0.924-3.603-3.762 0.012-2.949 1.409-4.375 3.671-3.746z"></path>\n        </svg>\n    </a>\n    </div>',this.node.append(this.btnPanel,this.viewPanel,this.footer)},e.prototype.renderElement=function(t,n){this.viewPanel.innerHTML="",this.viewPanel.append(t.render(n))},e}(o));S.init(),document.body.append(S.node)})();
//# sourceMappingURL=bundle.js.map