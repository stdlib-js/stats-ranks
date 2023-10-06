// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(){"use strict";var e=Math.floor;function r(r){return e(r)===r}function t(e){return"object"==typeof e&&null!==e&&"number"==typeof e.length&&r(e.length)&&e.length>=0&&e.length<=9007199254740991}var n="function"==typeof Object.defineProperty?Object.defineProperty:null,i=Object.defineProperty;function a(e){return"number"==typeof e}function o(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function c(e,r,t){var n=!1,i=r-e.length;return i<0||(function(e){return"-"===e[0]}(e)&&(n=!0,e=e.substr(1)),e=t?e+o(i):o(i)+e,n&&(e="-"+e)),e}var s=String.prototype.toLowerCase,u=String.prototype.toUpperCase;function l(e){var r,t,n;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,n=parseInt(t,10),!isFinite(n)){if(!a(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===e.specifier||10!==r)&&(n=4294967295+n+1),n<0?(t=(-n).toString(r),e.precision&&(t=c(t,e.precision,e.padRight)),t="-"+t):(t=n.toString(r),n||e.precision?e.precision&&(t=c(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===u.call(e.specifier)?u.call(t):s.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function f(e){return"string"==typeof e}var p=Math.abs,g=String.prototype.toLowerCase,d=String.prototype.toUpperCase,h=String.prototype.replace,m=/e\+(\d)$/,y=/e-(\d)$/,b=/^(\d+)$/,w=/^(\d+)e/,v=/\.0$/,E=/\.0*e/,_=/(\..*[^0])0*e/;function S(e){var r,t,n=parseFloat(e.arg);if(!isFinite(n)){if(!a(e.arg))throw new Error("invalid floating-point number. Value: "+t);n=e.arg}switch(e.specifier){case"e":case"E":t=n.toExponential(e.precision);break;case"f":case"F":t=n.toFixed(e.precision);break;case"g":case"G":p(n)<1e-4?((r=e.precision)>0&&(r-=1),t=n.toExponential(r)):t=n.toPrecision(e.precision),e.alternate||(t=h.call(t,_,"$1e"),t=h.call(t,E,"e"),t=h.call(t,v,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=h.call(t,m,"e+0$1"),t=h.call(t,y,"e-0$1"),e.alternate&&(t=h.call(t,b,"$1."),t=h.call(t,w,"$1.e")),n>=0&&e.sign&&(t=e.sign+t),t=e.specifier===d.call(e.specifier)?d.call(t):g.call(t)}function j(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function T(e,r,t){var n=r-e.length;return n<0?e:e=t?e+j(n):j(n)+e}var k=String.fromCharCode,x=isNaN,A=Array.isArray;function I(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function O(e){var r,t,n,i,a,o,s,u,p;if(!A(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(o="",s=1,u=0;u<e.length;u++)if(f(n=e[u]))o+=n;else{if(r=void 0!==n.precision,!(n=I(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+u+"`. Value: `"+n+"`.");for(n.mapping&&(s=n.mapping),t=n.flags,p=0;p<t.length;p++)switch(i=t.charAt(p)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[s],10),s+=1,x(n.width))throw new TypeError("the argument for * width at position "+s+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(r&&"*"===n.precision){if(n.precision=parseInt(arguments[s],10),s+=1,x(n.precision))throw new TypeError("the argument for * precision at position "+s+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,r=!1)}switch(n.arg=arguments[s],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(n.padZeros=!1),n.arg=l(n);break;case"s":n.maxWidth=r?n.precision:-1;break;case"c":if(!x(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=x(a)?String(n.arg):k(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(n.precision=6),n.arg=S(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=c(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=T(n.arg,n.width,n.padRight)),o+=n.arg||"",s+=1}return o}var V=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function F(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function N(e){var r,t,n,i;for(t=[],i=0,n=V.exec(e);n;)(r=e.slice(i,V.lastIndex-n[0].length)).length&&t.push(r),t.push(F(n)),i=V.lastIndex,n=V.exec(e);return(r=e.slice(i)).length&&t.push(r),t}function G(e){return"string"==typeof e}function P(e){var r,t,n;if(!G(e))throw new TypeError(P("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=N(e),(t=new Array(arguments.length))[0]=r,n=1;n<t.length;n++)t[n]=arguments[n];return O.apply(null,t)}var $=Object.prototype,C=$.toString,L=$.__defineGetter__,R=$.__defineSetter__,Z=$.__lookupGetter__,W=$.__lookupSetter__,X=function(){try{return n({},"x",{}),!0}catch(e){return!1}}()?i:function(e,r,t){var n,i,a,o;if("object"!=typeof e||null===e||"[object Array]"===C.call(e))throw new TypeError(P("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===C.call(t))throw new TypeError(P("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(Z.call(e,r)||W.call(e,r)?(n=e.__proto__,e.__proto__=$,delete e[r],e[r]=t.value,e.__proto__=n):e[r]=t.value),a="get"in t,o="set"in t,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&L&&L.call(e,r,t.get),o&&R&&R.call(e,r,t.set),e};function D(e,r,t){X(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function M(e){return"number"==typeof e}var U="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function J(){return U&&"symbol"==typeof Symbol.toStringTag}var Y=Object.prototype.toString,z=Object.prototype.hasOwnProperty;function q(e,r){return null!=e&&z.call(e,r)}var B="function"==typeof Symbol?Symbol:void 0,H="function"==typeof B?B.toStringTag:"",K=J()?function(e){var r,t,n;if(null==e)return Y.call(e);t=e[H],r=q(e,H);try{e[H]=void 0}catch(r){return Y.call(e)}return n=Y.call(e),r?e[H]=t:delete e[H],n}:function(e){return Y.call(e)},Q=Number,ee=Q.prototype.toString,re=J();function te(e){return"object"==typeof e&&(e instanceof Q||(re?function(e){try{return ee.call(e),!0}catch(e){return!1}}(e):"[object Number]"===K(e)))}function ne(e){return M(e)||te(e)}D(ne,"isPrimitive",M),D(ne,"isObject",te);var ie=Number.POSITIVE_INFINITY,ae=Q.NEGATIVE_INFINITY;function oe(e){return e<ie&&e>ae&&r(e)}function ce(e){return M(e)&&oe(e)}function se(e){return te(e)&&oe(e.valueOf())}function ue(e){return ce(e)||se(e)}function le(e){return"string"==typeof e}D(ue,"isPrimitive",ce),D(ue,"isObject",se);var fe=String.prototype.valueOf,pe=J();function ge(e){return"object"==typeof e&&(e instanceof String||(pe?function(e){try{return fe.call(e),!0}catch(e){return!1}}(e):"[object String]"===K(e)))}function de(e){return le(e)||ge(e)}function he(e){return e!=e}function me(e){return M(e)&&he(e)}function ye(e){return te(e)&&he(e.valueOf())}function be(e){return me(e)||ye(e)}function we(e,r,n){var i,a,o;if(!t(e)&&!le(e))throw new TypeError(P("invalid argument. First argument must be array-like. Value: `%s`.",e));if(arguments.length<2)throw new Error("insufficient arguments. Must provide a search value.");if(arguments.length>2){if(!ce(n))throw new TypeError(P("invalid argument. Third argument must be an integer. Value: `%s`.",n));(a=n)<0&&(a=0)}else a=0;if(le(e)){if(!le(r))throw new TypeError(P("invalid argument. Second argument must be a string. Value: `%s`.",r));return-1!==e.indexOf(r,a)}if(i=e.length,me(r)){for(o=a;o<i;o++)if(me(e[o]))return!0;return!1}for(o=a;o<i;o++)if(e[o]===r)return!0;return!1}function ve(){var e,r=arguments,t=r[0],n="https://stdlib.io/e/"+t+"?";for(e=1;e<r.length;e++)n+="&arg[]="+encodeURIComponent(r[e]);return n}function Ee(e){var r,t,n;for(r=e.length,t=0,n=0;n<r;n++)t+=e[n];return t}function _e(e){var r,t;for(r=new Array(e.length),t=0;t<e.length;t++)r[t]=t;return r.sort((function(r,t){return function(e,r){return e<r?-1:e>r?1:0}(e[r],e[t])}))}function Se(e,r){var t,n,i;for(t=e.length,n=new Array(t),i=0;i<t;i++)n[i]=we(r,e[i]);return n}D(de,"isPrimitive",le),D(de,"isObject",ge),D(be,"isPrimitive",me),D(be,"isObject",ye);var je=Array.isArray?Array.isArray:function(e){return"[object Array]"===K(e)},Te=["min","max","average","dense","ordinal"],ke=["last","first","remove"];function xe(e,r){return"object"!=typeof(t=r)||null===t||je(t)?new TypeError(ve("1Lp2V,FD",r)):q(r,"encoding")&&(e.encoding=r.encoding,!je(e.encoding))?new TypeError(ve("1Lp8Z,GX","encoding",e.encoding)):!q(r,"method")||(e.method=r.method,le(e.method)&&we(Te,e.method))?!q(r,"missing")||(e.missing=r.missing,le(e.missing)&&we(ke,e.missing))?null:new TypeError(ve("1Lp2X,3g,4S,GD,Gg,Jm","missing",ke.join('", "'),e.missing)):new TypeError(ve("1Lp2X,3g,4S,GD,Gg,Jm","method",Te.join('", "'),e.method));var t}return function(e,r){var n,i,a,o,c,s,u,l,f,p,g,d,h,m,y,b,w,v;if(!t(e))throw new TypeError(ve("1Lp2O,GW",e));if(h={},arguments.length>1&&(y=xe(h,r)))throw y;for(g=h.method||"average",s=h.encoding||[null,NaN],f=h.missing||"last",b=e.length,m=[],w=0;w<b;w++)we(s,e[w])||m.push(e[w]);if(n=Se(e,s),b=m.length,o=0,d=new Array(b),l=_e(m),"ordinal"===g)for(w=0;w<b;w++)d[l[w]]=w+1;else for(i=0,w=0;w<b;w++)if(u=w+1,w===b-1||m[l[w]]!==m[l[u]]){switch(g){case"min":p=u-i;break;case"max":p=u;break;case"dense":p=u-i-o,o+=i;break;default:p=u-.5*i}for(v=w-i;v<u;v++)d[l[v]]=p;i=0}else i+=1;if("first"===f){for(a=Ee(n),v=1,c=new Array(n.length),w=0;w<n.length;w++)n[w]?(c[w]=v,v+=1):c[w]=d.shift()+a;return c}if("last"===f){for(c=new Array(n.length),w=0;w<n.length;w++)n[w]?c[w]=w+d.length+1:c[w]=d.shift();return c}return d}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).ranks=r();
//# sourceMappingURL=browser.js.map
