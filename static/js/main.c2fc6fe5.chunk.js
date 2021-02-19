(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],{167:function(e,t,a){},168:function(e,t,a){},169:function(e,t,a){},170:function(e,t,a){},171:function(e,t,a){},172:function(e,t,a){},185:function(e,t,a){},186:function(e,t,a){},187:function(e,t,a){},188:function(e,t,a){},189:function(e,t,a){},190:function(e,t,a){},191:function(e,t,a){},193:function(e,t,a){},194:function(e,t,a){},196:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a(1),s=a(60),i=a.n(s),r=a(61),o=a.n(r),l=a(37),d=a(3),u=a(2),j=Object(u.f)((function(e){var t=e.history;return Object(n.jsx)("button",{className:"unit",type:"button",onClick:function(){t.goBack()},children:Object(n.jsx)("i",{className:"icon ion-md-arrow-back"})})})),b=a(23),h=(a(167),function(e){var t=e.pollutions,a=e.airQualityIndex,s=Object(c.useCallback)((function(){var e=[],a=[];return null===t||void 0===t||t.map((function(t,n){return 0===n?(e.push((+t.value/10).toFixed(2)),a.push("".concat(t.title,"/10"))):(e.push(+t.value.toFixed(2)),a.push(t.title)),{values:e,labels:a}})),{values:e,labels:a}}),[t]),i={datasets:[{data:s().values,backgroundColor:["#8e7d9b","#5cce35","#d8c1d7","#4a5eb0","#21cae0","#8b2bcb","#fc3213","#c27ae4"]}],labels:s().labels};return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("div",{children:"Click on the chart to see the values"}),Object(n.jsxs)("div",{className:"chart",children:[Object(n.jsx)("div",{className:"aqi-value",children:a.aqi}),Object(n.jsx)(b.Doughnut,{data:i,type:"pie",options:{legend:{display:!1},cutoutPercentage:70,elements:{center:{text:"Red is 2/3 the total numbers"}}}})]})]})}),m=(a(168),function(e){var t=e.pollution;return Object(n.jsx)("div",{children:Object(n.jsxs)("div",{className:"sul-box-raised-2 pollution-wrapper",children:[Object(n.jsx)("div",{children:t.title}),Object(n.jsxs)("div",{children:[t.value," \u03bcg/m3"]})]})})}),O=a(24),f=a.n(O),p={key:f.a.API_KEY,base:f.a.BASE_URL,image:f.a.IMAGES_URL},x=function(e){return"".concat(p.image).concat(e,"@2x.png")},v=(a(169),Object(u.f)((function(e){var t=e.history,a=e.lat,s=e.lon,i=Object(c.useState)([]),r=Object(d.a)(i,2),o=r[0],l=r[1],u=Object(c.useState)({}),b=Object(d.a)(u,2),O=b[0],f=b[1];return Object(c.useEffect)((function(){a||s?function(e,t){return fetch("".concat(p.base,"air_pollution?lat=").concat(e,"&lon=").concat(t,"&appid=").concat(p.key)).then((function(e){return e.json()}))}(a,s).then((function(e){var t=e.list[0].components,a=[{title:"Carbon monoxide",value:t.co},{title:"Nitrogen monoxide",value:t.nh3},{title:"Nitrogen dioxide",value:t.no},{title:"Ozone",value:t.no2},{title:"Sulphur dioxide",value:t.o3},{title:"Fine particles matter",value:t.pm2_5},{title:"Coarse particulate matter",value:t.pm10},{title:"Ammonia",value:t.so2}];l(a),f(e.list[0].main)})):t.push("/")}),[t,a,s]),Object(n.jsxs)(n.Fragment,{children:[Object(n.jsxs)("div",{className:"sul-box-raised-3 pollutions-dashboard",children:[Object(n.jsx)("h1",{children:"Air Pollution"}),Object(n.jsx)(j,{})]}),Object(n.jsxs)("div",{className:"sul-box-raised-3 pollutions-list",children:[Object(n.jsx)("div",{className:"chart-wrapper",children:Object(n.jsx)(h,{pollutions:o,airQualityIndex:O})}),Object(n.jsx)("div",{className:"sul-box-raised-3 aqi",children:Object(n.jsxs)("div",{className:"aqi__title",children:["AQI - Air Quality Index. ",Object(n.jsx)("br",{}),"Possible values: ",Object(n.jsx)("br",{}),"1, 2, 3, 4, 5.",Object(n.jsx)("br",{})," Where 1 = Good,",Object(n.jsx)("br",{})," 2 = Fair,",Object(n.jsx)("br",{})," 3 = Moderate,",Object(n.jsx)("br",{})," 4 = Poor,",Object(n.jsx)("br",{})," 5 = Very Poor."]})}),o.length&&o.map((function(e,t){return Object(n.jsx)(m,{pollution:e},t)}))]})]})}))),g=a(7),y=a.n(g),w=function(e,t){return y()(1e3*e).format(t)},N=(a(170),function(e){var t=e.weather,a=Object(c.useState)([]),s=Object(d.a)(a,2),i=s[0],r=s[1];Object(c.useEffect)((function(){r(null===t||void 0===t?void 0:t.slice(0,11))}),[t]);var o=i.map((function(e){return e.temp})),l=i.map((function(e){return e.feels_like})),u={labels:i.map((function(e){return w(e.dt,"HH-mm")})),datasets:[{label:"temperature",data:o,fill:!0,backgroundColor:"rgba(75,192,192,0.2)",borderColor:"rgba(75,192,192,1)"},{label:"feels like",data:l,fill:!1,borderColor:"#742774",backgroundColor:"#742774"}]};return Object(n.jsx)("div",{className:"line-chart-wrapper",children:Object(n.jsx)(b.Line,{data:u})})}),k=a.p+"static/media/Clear-min.78e9f3d1.png",C=a.p+"static/media/Clouds-min.6d20aa64.png",S=a.p+"static/media/Drizzle-min.e26404af.png",P=a.p+"static/media/Rain-min.68e98b8c.png",A=a.p+"static/media/Snow-min.c94e1547.png",E=a.p+"static/media/Thunderstorm-min.3bd34e37.png",F=function(e){var t;switch(null===e||void 0===e||null===(t=e.weather[0])||void 0===t?void 0:t.main){case"Snow":return A;case"Rain":return P;case"Clear":return k;case"Thunderstorm":return E;case"Drizzle":return S;case"Clouds":return C;default:return null}},W=(a(171),function(e){var t=e.hourWeather;return Object(n.jsxs)("div",{className:"sul-box-raised-2 hour-wrapper",style:{backgroundImage:"url(".concat(F(t),")")},children:[Object(n.jsx)("img",{src:x(t.weather[0].icon),alt:"weather-logo"}),Object(n.jsx)("div",{className:"main",children:t.weather[0].main}),Object(n.jsxs)("div",{className:"temperature-dashboard",children:[Math.round(t.temp),"\xb0C"]}),Object(n.jsx)("div",{className:"date",children:y()(1e3*t.dt).format("hh:mma dddd")})]})}),I=(a(172),Object(u.f)((function(e){var t=e.history,a=e.weather;return a||t.push("/"),Object(n.jsxs)(n.Fragment,{children:[Object(n.jsxs)("div",{className:"sul-box-raised-3 hourly-dashboard-wrapper",children:[Object(n.jsx)("h1",{children:"48 Hour Forecast"}),Object(n.jsx)(j,{})]}),Object(n.jsxs)("div",{className:"sul-box-raised-3 hour-list",children:[Object(n.jsx)(N,{weather:a}),a&&a.map((function(e){return Object(n.jsx)(W,{hourWeather:e},e.dt)}))]})]})}))),L=a(40),_=a(63),D=a.n(_),T={desktop:{breakpoint:{max:3e3,min:1024},items:1},tablet:{breakpoint:{max:1024,min:464},items:1},mobile:{breakpoint:{max:464,min:0},items:1}},B=(a(185),function(e){var t=e.weather;return Object(n.jsxs)("div",{className:"sul-box-raised-3",children:[Object(n.jsxs)("div",{className:"additionally-wrapper top",children:[Object(n.jsxs)("div",{className:"additionally-items",children:[Object(n.jsx)("p",{className:"additionally-mark",children:w(t.sunrise,"hh:mma")}),Object(n.jsx)("p",{className:"additionally-key",children:"sunrise"})]}),Object(n.jsxs)("div",{className:"additionally-items",children:[Object(n.jsx)("p",{className:"additionally-mark",children:w(t.sunset,"hh:mma")}),Object(n.jsx)("p",{className:"additionally-key",children:"sunset"})]}),Object(n.jsxs)("div",{className:"additionally-items",children:[Object(n.jsxs)("p",{className:"additionally-mark",children:[t.pressure,"hPa"]}),Object(n.jsx)("p",{className:"additionally-key",children:"pressure"})]})]}),Object(n.jsxs)("div",{className:"additionally-wrapper",children:[Object(n.jsxs)("div",{className:"additionally-items",children:[Object(n.jsxs)("p",{className:"additionally-mark",children:[t.humidity,"%"]}),Object(n.jsx)("p",{className:"additionally-key",children:"humidity"})]}),Object(n.jsxs)("div",{className:"additionally-items",children:[Object(n.jsxs)("p",{className:"additionally-mark",children:[t.clouds,"%"]}),Object(n.jsx)("p",{className:"additionally-key",children:"clouds"})]}),Object(n.jsxs)("div",{className:"additionally-items",children:[Object(n.jsxs)("p",{className:"additionally-mark",children:[Math.round(t.feels_like.day),"\xb0C"]}),Object(n.jsx)("p",{className:"additionally-key",children:"feels like"})]})]})]})}),M=(a(186),function(e){var t=e.alert,a=Object(c.useState)({}),s=Object(d.a)(a,2),i=s[0],r=s[1];return Object(c.useEffect)((function(){r({from:y()(1e3*t.start).format("hh:mm a"),to:y()(1e3*t.end).format("hh:mm a")})}),[t]),Object(n.jsxs)("div",{className:"sul-box-raised-3 alert-wrapper",children:[Object(n.jsxs)("div",{className:"sender",children:[t.sender_name||"Unknown source"," says:"]}),Object(n.jsxs)("div",{children:['-"',t.description,'"']}),Object(n.jsxs)("div",{className:"period",children:["from ",i.from," to ",i.to]})]})}),R=(a(187),function(e){var t=e.alerts;return Object(n.jsxs)("div",{className:"alerts-wrapper",children:[Object(n.jsx)("h2",{children:"Alerts"}),t.map((function(e,t){return Object(n.jsx)(c.Fragment,{children:e.description&&Object(n.jsx)(M,{alert:e})},t)}))]})}),U=(a(188),function(e){var t=e.weather,a=e.info,s=e.currentSlide,i=e.onClick,r=Object(c.useState)(""),o=Object(d.a)(r,2),l=o[0],u=o[1],j=Object(c.useState)([]),b=Object(d.a)(j,2),h=b[0],m=b[1];return Object(c.useEffect)((function(){u(Math.round(t.temp.day)),m(t.weather[0].description)}),[t.temp.day,t.weather]),Object(n.jsxs)("div",{children:[Object(n.jsxs)("div",{className:"sul-box-raised-3 location-container",style:{backgroundImage:"url(".concat(F(t),")")},children:[Object(n.jsxs)("div",{className:"location",onClick:i,children:[a.name,", ",a.country]}),Object(n.jsxs)("div",{className:"temperature",children:[l,"\xb0C"]}),Object(n.jsx)("div",{className:"weather",children:h})]}),Object(n.jsxs)("div",{className:"current-date",children:[0===s&&"Now: ",y()(1e3*t.dt).format("dddd - ll")]})]},t.dt)}),q=function(){return Object(n.jsxs)("header",{className:"sul-box-raised-2",children:[Object(n.jsx)("h1",{children:"Weather App."}),Object(n.jsx)("input",{type:"checkbox",className:"sul-checkbox-type-2",onClick:function(e){return function(e){e.target.checked?document.body.classList.replace("light-mode","dark-mode"):document.body.classList.replace("dark-mode","light-mode")}(e)}})]})},z=(a(189),function(e){var t=e.hour,a=Object(c.useState)(""),s=Object(d.a)(a,2),i=s[0],r=s[1];return Object(c.useEffect)((function(){r(y()(1e3*t.dt).format("hh a"))}),[t]),Object(n.jsxs)("div",{className:"forecast-item sul-box-raised-1 with-hover",children:[Object(n.jsx)("div",{children:i}),Object(n.jsxs)("div",{className:"item-temperature",children:[Math.round(t.temp),"\xb0C"]}),Object(n.jsx)("div",{className:"weather-logo",children:Object(n.jsx)("img",{src:x(t.weather[0].icon),alt:"weather-logo"})}),Object(n.jsx)("div",{children:t.weather[0].main})]})}),G=(a(190),Object(u.f)((function(e){var t=e.history,a=e.weather,s=Object(c.useCallback)((function(){t.push("/daily")}),[t]),i=Object(c.useCallback)((function(){t.push("/air-pollution")}),[t]);return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsxs)("div",{className:"sul-box-inset-1",children:[Object(n.jsx)("div",{className:"forecast-container",children:a.slice(1,4).map((function(e){return Object(n.jsx)("div",{className:"hour-item-wrapper",children:Object(n.jsx)(z,{hour:e})},e.dt)}))}),Object(n.jsx)("button",{className:"sul-btn forecast",onClick:s,children:"See 48 hour forecast"})]}),Object(n.jsx)("div",{className:"button-wrapper",children:Object(n.jsx)("button",{className:"sul-btn",onClick:i,children:"See Air Pollution For Now"})})]})}))),Q=(a(191),function(e){var t=e.handleChange,a=Object(c.useState)(""),s=Object(d.a)(a,2),i=s[0],r=s[1];return Object(n.jsxs)("div",{className:"search-container sul-box-raised-3",children:[Object(n.jsx)("input",{type:"text",placeholder:"Search...",className:"sul-text-field",onChange:function(e){return r(e.target.value)},value:i,onKeyPress:function(e){"Enter"===e.key&&t(i)}}),Object(n.jsx)("button",{className:"sul-btn",onClick:function(){return t(i)},children:"search"})]})}),H=(a(192),a(193),Object(u.f)((function(e){var t=e.weather,a=e.setWeather,s=e.userLocation,i=Object(c.useState)(""),r=Object(d.a)(i,2),o=r[0],l=r[1],u=Object(c.useState)(0),j=Object(d.a)(u,2),b=j[0],h=j[1],m=Object(c.useCallback)((function(e){e&&function(e){var t;return t="object"===typeof e?"".concat(p.base,"weather?lat=").concat(e.lat,"&lon=").concat(e.lon,"&units=metric&APPID=").concat(p.key):"".concat(p.base,"weather?q=").concat(e.trim(),"&units=metric&APPID=").concat(p.key),fetch(t).then((function(e){return e.json()}))}(e).then((function(e){if("404"===e.cod)l(e.message),a({});else{l("");var t=e.coord,n={name:e.name,country:e.sys.country};(function(e){return fetch("".concat(p.base,"onecall?lat=").concat(e.lat,"&lon=").concat(e.lon,"&exclude=minutely&units=metric&APPID=").concat(p.key)).then((function(e){return e.json()}))})(t).then((function(e){a(Object(L.a)(Object(L.a)({},e),{},{info:n}))}))}}))}),[a]);return Object(c.useEffect)((function(){s.lat&&s.lon&&m(s)}),[m,s]),Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(q,{}),Object(n.jsxs)("main",{children:[Object(n.jsx)(Q,{handleChange:m}),t.daily&&t.daily.length&&Object(n.jsxs)("div",{className:"sul-box-raised-3 container",children:[Object(n.jsx)(D.a,{additionalTransfrom:0,arrows:!0,centerMode:!1,containerClass:"container-with-dots",afterChange:function(e,t){return h(t.currentSlide)},draggable:!0,focusOnSelect:!1,keyBoardControl:!0,minimumTouchDrag:80,renderButtonGroupOutside:!1,renderDotsOutside:!1,showDots:!1,slidesToSlide:1,swipeable:!0,responsive:T,children:t.daily.map((function(e){return Object(n.jsx)(U,{weather:e,info:t.info,currentSlide:b},e.dt)}))}),t.alerts&&0===b&&Object(n.jsx)(R,{alerts:t.alerts}),Object(n.jsx)(G,{weather:t.hourly}),Object(n.jsx)(B,{weather:t.daily[b]})]}),o&&Object(n.jsx)("div",{className:"sul-box-raised-1 error",children:o})]})]})}))),K=Object(u.f)((function(){var e=Object(c.useState)({}),t=Object(d.a)(e,2),a=t[0],s=t[1],i=Object(c.useState)({}),r=Object(d.a)(i,2),o=r[0],l=r[1];return Object(c.useEffect)((function(){"geolocation"in navigator&&navigator.geolocation.getCurrentPosition((function(e){l({lat:e.coords.latitude,lon:e.coords.longitude})}))}),[]),Object(n.jsx)("div",{className:"app-container",children:Object(n.jsxs)(u.c,{children:[Object(n.jsx)(u.a,{exact:!0,path:"/",children:Object(n.jsx)(H,{weather:a,setWeather:s,userLocation:o})}),Object(n.jsx)(u.a,{path:"/daily",children:Object(n.jsx)(I,{weather:a.hourly})}),Object(n.jsx)(u.a,{path:"/air-pollution",children:Object(n.jsx)(v,{lat:a.lat,lon:a.lon})})]})})})),J=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,197)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,s=t.getLCP,i=t.getTTFB;a(e),n(e),c(e),s(e),i(e)}))},Y=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function V(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}a(194),a(195);i.a.render(Object(n.jsx)(o.a,{children:Object(n.jsx)(l.a,{children:Object(n.jsx)(K,{})})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/Weather-app",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/Weather-app","/service-worker.js");Y?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):V(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):V(t,e)}))}}(),J()},24:function(e,t){e.exports={API_KEY:"f8ff70fbf2626381653221b4b6fd1936",BASE_URL:"https://api.openweathermap.org/data/2.5/",IMAGES_URL:"https://openweathermap.org/img/wn/"}}},[[196,1,2]]]);
//# sourceMappingURL=main.c2fc6fe5.chunk.js.map