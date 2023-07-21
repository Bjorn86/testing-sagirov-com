(()=>{"use strict";var e,n,r,t={935:(e,n,r)=>{var t=r(378),o=r(634),i=r(165),a=r(246);const l=function(){return(0,a.jsx)("section",{className:"promo",children:(0,a.jsxs)("div",{className:"promo__wrapper",children:[(0,a.jsxs)("div",{className:"promo__column promo__column_position_left",children:[(0,a.jsxs)("h1",{className:"promo__title",children:[(0,a.jsx)("span",{className:"promo__title-uppercase",children:"Путешествие "}),"на красную планету"]}),(0,a.jsx)("button",{className:"promo__btn-start",type:"button",children:"Начать путешествие"})]}),(0,a.jsx)("div",{className:"promo__column promo__column_position_right",children:(0,a.jsxs)("ul",{className:"promo__list",children:[(0,a.jsx)("li",{className:"promo__list-item",children:(0,a.jsxs)(i.rU,{to:"/",className:"promo__link promo__link_position_left promo__link_position_top",children:[(0,a.jsx)("span",{className:"promo__text-accent-small",children:"мы"}),(0,a.jsx)("span",{className:"promo__text-accent-big",children:" 1 "}),"на рынке"]})}),(0,a.jsx)("li",{className:"promo__list-item",children:(0,a.jsxs)(i.rU,{to:"/",className:"promo__link promo__link_position_top",children:["гарантируем",(0,a.jsx)("span",{className:"promo__text-accent-big",children:" 50% "}),"безопасность"]})}),(0,a.jsx)("li",{className:"promo__list-item",children:(0,a.jsxs)(i.rU,{to:"/",className:"promo__link promo__link_position_left promo__link_position_bottom",children:["календарик за",(0,a.jsxs)("span",{className:"promo__text-accent-big",children:[" ","2001",(0,a.jsx)("span",{className:"promo__text-accent-small-bold",children:"г. "})]}),"в подарок"]})}),(0,a.jsx)("li",{className:"promo__list-item",children:(0,a.jsxs)(i.rU,{to:"/",className:"promo__link promo__link_position_bottom",children:["путешествие",(0,a.jsx)("span",{className:"promo__text-accent-big",children:" 597 "}),"дней"]})})]})})]})})};const s=function(e){var n=e.isSideMenu,r=e.onClose;return(0,a.jsx)("nav",{className:"navigation ".concat(n?"":"navigation_hidden"),children:(0,a.jsxs)("ul",{className:"navigation__list ".concat(n?"navigation__list_direction_column":""),children:[(0,a.jsx)("li",{className:"navigation__item",children:(0,a.jsx)(i.rU,{to:"/",className:"navigation__link ".concat(n?"navigation__link_place_hamburger-menu":""),onClick:r,children:"Главная"})}),(0,a.jsx)("li",{className:"navigation__item",children:(0,a.jsx)(i.rU,{to:"/",className:"navigation__link ".concat(n?"navigation__link_place_hamburger-menu":""),onClick:r,children:"Технология"})}),(0,a.jsx)("li",{className:"navigation__item",children:(0,a.jsx)(i.rU,{to:"/",className:"navigation__link ".concat(n?"navigation__link_place_hamburger-menu":""),onClick:r,children:"График полетов"})}),(0,a.jsx)("li",{className:"navigation__item",children:(0,a.jsx)(i.rU,{to:"/",className:"navigation__link ".concat(n?"navigation__link_place_hamburger-menu":""),onClick:r,children:"Гарантии"})}),(0,a.jsx)("li",{className:"navigation__item",children:(0,a.jsx)(i.rU,{to:"/",className:"navigation__link ".concat(n?"navigation__link_place_hamburger-menu":""),onClick:r,children:"О компании"})}),(0,a.jsx)("li",{className:"navigation__item",children:(0,a.jsx)(i.rU,{to:"/",className:"navigation__link ".concat(n?"navigation__link_place_hamburger-menu":""),onClick:r,children:"Контакты"})})]})})},c=r.p+"images/logo.516d256b533013e633e4.png";const _=function(e){var n=e.onHamburgerClick;return(0,a.jsx)("header",{className:"header",children:(0,a.jsxs)("div",{className:"header__wrapper",style:{color:"#fff"},children:[(0,a.jsx)(i.rU,{to:"/",className:"header__link",children:(0,a.jsx)("img",{src:c,alt:"Логотип SpaceX",className:"header__logo"})}),(0,a.jsx)(s,{}),(0,a.jsx)("button",{className:"header__btn-hamburger",type:"button","aria-label":"Меню навигации",onClick:n})]})})};var m=["isActive","onClose"];function u(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const p=function(e){var n=e.isActive,r=e.onClose,o=u(e,m);return(0,t.useEffect)((function(){function e(e){"Escape"===e.key&&r()}if(n)return document.addEventListener("keydown",e),function(){return document.removeEventListener("keydown",e)}}),[n,r]),(0,a.jsx)("div",{className:"overlay ".concat(n?"overlay_active":""),onMouseDown:function(e){e.target===e.currentTarget&&r()},children:o.children})};const d=function(e){var n=e.isHamburgerMenu,r=e.onClose;return(0,a.jsx)(p,{isActive:n,onClose:r,children:(0,a.jsxs)("div",{className:"hamburger-menu ".concat(n?"hamburger-menu_active":""),children:[(0,a.jsx)("button",{className:"hamburger-menu__btn-close hover-button",type:"button","aria-label":"Закрыть меню",onClick:r}),(0,a.jsx)(s,{isSideMenu:!0,onClose:r})]})})};function h(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var t,o,i,a,l=[],s=!0,c=!1;try{if(i=(r=r.call(e)).next,0===n){if(Object(r)!==r)return;s=!1}else for(;!(s=(t=i.call(r)).done)&&(l.push(t.value),l.length!==n);s=!0);}catch(e){c=!0,o=e}finally{try{if(!s&&null!=r.return&&(a=r.return(),Object(a)!==a))return}finally{if(c)throw o}}return l}}(e,n)||function(e,n){if(!e)return;if("string"==typeof e)return f(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return f(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(e,n){(null==n||n>e.length)&&(n=e.length);for(var r=0,t=new Array(n);r<n;r++)t[r]=e[r];return t}const v=function(){var e=h((0,t.useState)(!1),2),n=e[0],r=e[1];return(0,a.jsxs)("div",{className:"app__content",children:[(0,a.jsx)(_,{onHamburgerClick:function(){r(!n)}}),(0,a.jsx)(l,{}),(0,a.jsx)(d,{isHamburgerMenu:n,onClose:function(){r(!1)}})]})};o.createRoot(document.getElementById("root")).render((0,a.jsx)(t.StrictMode,{children:(0,a.jsx)(i.UT,{children:(0,a.jsx)(v,{})})}))}},o={};function i(e){var n=o[e];if(void 0!==n)return n.exports;var r=o[e]={exports:{}};return t[e](r,r.exports,i),r.exports}i.m=t,e=[],i.O=(n,r,t,o)=>{if(!r){var a=1/0;for(_=0;_<e.length;_++){for(var[r,t,o]=e[_],l=!0,s=0;s<r.length;s++)(!1&o||a>=o)&&Object.keys(i.O).every((e=>i.O[e](r[s])))?r.splice(s--,1):(l=!1,o<a&&(a=o));if(l){e.splice(_--,1);var c=t();void 0!==c&&(n=c)}}return n}o=o||0;for(var _=e.length;_>0&&e[_-1][2]>o;_--)e[_]=e[_-1];e[_]=[r,t,o]},r=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,i.t=function(e,t){if(1&t&&(e=this(e)),8&t)return e;if("object"==typeof e&&e){if(4&t&&e.__esModule)return e;if(16&t&&"function"==typeof e.then)return e}var o=Object.create(null);i.r(o);var a={};n=n||[null,r({}),r([]),r(r)];for(var l=2&t&&e;"object"==typeof l&&!~n.indexOf(l);l=r(l))Object.getOwnPropertyNames(l).forEach((n=>a[n]=()=>e[n]));return a.default=()=>e,i.d(o,a),o},i.d=(e,n)=>{for(var r in n)i.o(n,r)&&!i.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),i.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),i.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;i.g.importScripts&&(e=i.g.location+"");var n=i.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var r=n.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),i.p=e+"../../"})(),(()=>{var e={179:0};i.O.j=n=>0===e[n];var n=(n,r)=>{var t,o,[a,l,s]=r,c=0;if(a.some((n=>0!==e[n]))){for(t in l)i.o(l,t)&&(i.m[t]=l[t]);if(s)var _=s(i)}for(n&&n(r);c<a.length;c++)o=a[c],i.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return i.O(_)},r=self.webpackChunk=self.webpackChunk||[];r.forEach(n.bind(null,0)),r.push=n.bind(null,r.push.bind(r))})();var a=i.O(void 0,[930],(()=>i(935)));a=i.O(a)})();