(this["webpackJsonpredux-sandbox"]=this["webpackJsonpredux-sandbox"]||[]).push([[0],[function(t,r,e){"use strict";function n(t){return"Minified Redux error #"+t+"; visit https://redux.js.org/Errors?code="+t+" for the full message or use the non-minified dev environment for full errors. "}e.r(r);var o="function"===typeof Symbol&&Symbol.observable||"@@observable",i=function(){return Math.random().toString(36).substring(7).split("").join(".")},f={INIT:"@@redux/INIT"+i(),REPLACE:"@@redux/REPLACE"+i(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+i()}};function u(t){if("object"!==typeof t||null===t)return!1;for(var r=t;null!==Object.getPrototypeOf(r);)r=Object.getPrototypeOf(r);return Object.getPrototypeOf(t)===r}var c=function t(r,e,i){var c;if("function"===typeof e&&"function"===typeof i||"function"===typeof i&&"function"===typeof arguments[3])throw new Error(n(0));if("function"===typeof e&&"undefined"===typeof i&&(i=e,e=void 0),"undefined"!==typeof i){if("function"!==typeof i)throw new Error(n(1));return i(t)(r,e)}if("function"!==typeof r)throw new Error(n(2));var s=r,p=e,l=[],a=l,d=!1;function h(){a===l&&(a=l.slice())}function y(){if(d)throw new Error(n(3));return p}function w(t){if("function"!==typeof t)throw new Error(n(4));if(d)throw new Error(n(5));var r=!0;return h(),a.push(t),function(){if(r){if(d)throw new Error(n(6));r=!1,h();var e=a.indexOf(t);a.splice(e,1),l=null}}}function b(t){if(!u(t))throw new Error(n(7));if("undefined"===typeof t.type)throw new Error(n(8));if(d)throw new Error(n(9));try{d=!0,p=s(p,t)}finally{d=!1}for(var r=l=a,e=0;e<r.length;e++){(0,r[e])()}return t}function E(t){if("function"!==typeof t)throw new Error(n(10));s=t,b({type:f.REPLACE})}function v(){var t,r=w;return(t={subscribe:function(t){if("object"!==typeof t||null===t)throw new Error(n(11));function e(){t.next&&t.next(y())}return e(),{unsubscribe:r(e)}}})[o]=function(){return this},t}return b({type:f.INIT}),(c={dispatch:b,subscribe:w,getState:y,replaceReducer:E})[o]=v,c}((function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,r=arguments.length>1?arguments[1]:void 0;switch(r.type){case"INC":return t+1;default:return t}}));c.subscribe((function(){console.log("subscribe: "+c.getState())})),console.log(c.getState()),c.dispatch({type:"INC"}),c.dispatch({type:"INC"}),console.log(c.getState())}],[[0,1]]]);
//# sourceMappingURL=main.dd7d84e2.chunk.js.map