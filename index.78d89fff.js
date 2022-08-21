function t(t){return t&&t.__esModule?t.default:t}var n,e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,r=/^0b[01]+$/i,a=/^0o[0-7]+$/i,s=parseInt,c="object"==typeof e&&e&&e.Object===Object&&e,u="object"==typeof self&&self&&self.Object===Object&&self,l=c||u||Function("return this")(),f=Object.prototype.toString,p=Math.max,d=Math.min,h=function(){return l.Date.now()};function g(t){var n=typeof t;return!!t&&("object"==n||"function"==n)}function m(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&"[object Symbol]"==f.call(t)}(t))return NaN;if(g(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=g(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(o,"");var e=r.test(t);return e||a.test(t)?s(t.slice(2),e?2:8):i.test(t)?NaN:+t}function y(t){return fetch(`https://restcountries.com/v2/name/${t}?fields=name,capital,population,flags,languages`).then((t=>{if(200!==t.status)throw new Error(t.status);return t.json()}))}function v(t){let n=t[0].languages.map((t=>t.name)).join(", ");return`<div class="header-container">\n   <img src="${t[0].flags.svg}" class="flag" width="50" height="40">\n   <h1 class="header">${t[0].name}</h1>\n</div>\n<div class="caption-container">\n<p class="text"><span class="text-bold">Capital: </span>${t[0].capital}</p>\n<p class="text"><span class="text-bold">Population: </span>${t[0].population}</p>\n<p class="text"><span class="text-bold">Languages: </span>${n}</p>\n</div>`}n=function(t,n,e){var o,i,r,a,s,c,u=0,l=!1,f=!1,y=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function v(n){var e=o,r=i;return o=i=void 0,u=n,a=t.apply(r,e)}function b(t){return u=t,s=setTimeout(w,n),l?v(t):a}function j(t){var e=t-c;return void 0===c||e>=n||e<0||f&&t-u>=r}function w(){var t=h();if(j(t))return T(t);s=setTimeout(w,function(t){var e=n-(t-c);return f?d(e,r-(t-u)):e}(t))}function T(t){return s=void 0,y&&o?v(t):(o=i=void 0,a)}function x(){var t=h(),e=j(t);if(o=arguments,i=this,c=t,e){if(void 0===s)return b(c);if(f)return s=setTimeout(w,n),v(c)}return void 0===s&&(s=setTimeout(w,n)),a}return n=m(n)||0,g(e)&&(l=!!e.leading,r=(f="maxWait"in e)?p(m(e.maxWait)||0,n):r,y="trailing"in e?!!e.trailing:y),x.cancel=function(){void 0!==s&&clearTimeout(s),u=0,o=c=i=s=void 0},x.flush=function(){return void 0===s?a:T(h())},x};const b={input:document.querySelector("#search-box"),countryList:document.querySelector(".country-list"),countryDesc:document.querySelector(".country-info")};function j(){b.countryDesc.innerHTML="",b.countryList.innerHTML=""}b.input.addEventListener("input",t(n)((function(t){let n=t.target.value.trim();n="",y("").then((t=>{1===t.length?(j(),b.countryDesc.innerHTML=v(t)):t.length>1&&t.length<=10?(j(),b.countryList.insertAdjacentHTML("beforeend",t.map((t=>`<li class="country-item"><img src="${t.flags.svg}" class="list-img" width="40" height="30">${t.name}</li>`)).join(""))):t.length>10?(j(),console.log("Too many matches found. Please enter a more specific name.")):(j(),console.log("Oops, there is no country with that name"))})).catch((t=>{j(),console.log("Oops, there is no country with that name")}))}),300));
//# sourceMappingURL=index.78d89fff.js.map
