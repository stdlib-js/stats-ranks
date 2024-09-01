// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r=Math.floor;function e(e){return r(e)===e}var t=9007199254740991;function n(r){return"object"==typeof r&&null!==r&&"number"==typeof r.length&&e(r.length)&&r.length>=0&&r.length<=t}var i="function"==typeof Object.defineProperty?Object.defineProperty:null;var a=Object.defineProperty;function o(r){return"number"==typeof r}function c(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function s(r,e,t){var n=!1,i=e-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(n=!0,r=r.substr(1)),r=t?r+c(i):c(i)+r,n&&(r="-"+r)),r}var u=String.prototype.toLowerCase,l=String.prototype.toUpperCase;function f(r){var e,t,n;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,n=parseInt(t,10),!isFinite(n)){if(!o(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===r.specifier||10!==e)&&(n=4294967295+n+1),n<0?(t=(-n).toString(e),r.precision&&(t=s(t,r.precision,r.padRight)),t="-"+t):(t=n.toString(e),n||r.precision?r.precision&&(t=s(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===l.call(r.specifier)?l.call(t):u.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}var p=Math.abs,g=String.prototype.toLowerCase,h=String.prototype.toUpperCase,d=String.prototype.replace,m=/e\+(\d)$/,v=/e-(\d)$/,y=/^(\d+)$/,b=/^(\d+)e/,w=/\.0$/,E=/\.0*e/,_=/(\..*[^0])0*e/;function S(r){var e,t,n=parseFloat(r.arg);if(!isFinite(n)){if(!o(r.arg))throw new Error("invalid floating-point number. Value: "+t);n=r.arg}switch(r.specifier){case"e":case"E":t=n.toExponential(r.precision);break;case"f":case"F":t=n.toFixed(r.precision);break;case"g":case"G":p(n)<1e-4?((e=r.precision)>0&&(e-=1),t=n.toExponential(e)):t=n.toPrecision(r.precision),r.alternate||(t=d.call(t,_,"$1e"),t=d.call(t,E,"e"),t=d.call(t,w,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=d.call(t,m,"e+0$1"),t=d.call(t,v,"e-0$1"),r.alternate&&(t=d.call(t,y,"$1."),t=d.call(t,b,"$1.e")),n>=0&&r.sign&&(t=r.sign+t),t=r.specifier===h.call(r.specifier)?h.call(t):g.call(t)}function j(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}var T=String.fromCharCode,k=Array.isArray;function x(r){return r!=r}function A(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function I(r){var e,t,n,i,a,o,c,u,l,p,g,h,d;if(!k(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(o="",c=1,u=0;u<r.length;u++)if(n=r[u],"string"==typeof n)o+=n;else{if(e=void 0!==n.precision,!(n=A(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+u+"`. Value: `"+n+"`.");for(n.mapping&&(c=n.mapping),t=n.flags,l=0;l<t.length;l++)switch(i=t.charAt(l)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[c],10),c+=1,x(n.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[c],10),c+=1,x(n.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[c],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=f(n);break;case"s":n.maxWidth=e?n.precision:-1,n.arg=String(n.arg);break;case"c":if(!x(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=x(a)?String(n.arg):T(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=S(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=s(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=(p=n.arg,g=n.width,h=n.padRight,d=void 0,(d=g-p.length)<0?p:p=h?p+j(d):j(d)+p)),o+=n.arg||"",c+=1}return o}var O=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function V(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function F(r){var e,t,n,i;for(t=[],i=0,n=O.exec(r);n;)(e=r.slice(i,O.lastIndex-n[0].length)).length&&t.push(e),t.push(V(n)),i=O.lastIndex,n=O.exec(r);return(e=r.slice(i)).length&&t.push(e),t}function P(r){var e,t;if("string"!=typeof r)throw new TypeError(P("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[F(r)],t=1;t<arguments.length;t++)e.push(arguments[t]);return I.apply(null,e)}var N=Object.prototype,$=N.toString,C=N.__defineGetter__,L=N.__defineSetter__,R=N.__lookupGetter__,Z=N.__lookupSetter__;var G=function(){try{return i({},"x",{}),!0}catch(r){return!1}}()?a:function(r,e,t){var n,i,a,o;if("object"!=typeof r||null===r||"[object Array]"===$.call(r))throw new TypeError(P("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===$.call(t))throw new TypeError(P("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(R.call(r,e)||Z.call(r,e)?(n=r.__proto__,r.__proto__=N,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),a="get"in t,o="set"in t,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&C&&C.call(r,e,t.get),o&&L&&L.call(r,e,t.set),r};function W(r,e,t){G(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}function M(r){return"number"==typeof r}var U="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function X(){return U&&"symbol"==typeof Symbol.toStringTag}var Y=Object.prototype.toString;var z=Object.prototype.hasOwnProperty;function q(r,e){return null!=r&&z.call(r,e)}var B="function"==typeof Symbol?Symbol:void 0,D="function"==typeof B?B.toStringTag:"";var H=X()?function(r){var e,t,n;if(null==r)return Y.call(r);t=r[D],e=q(r,D);try{r[D]=void 0}catch(e){return Y.call(r)}return n=Y.call(r),e?r[D]=t:delete r[D],n}:function(r){return Y.call(r)},J=Number,K=J.prototype.toString;var Q=X();function rr(r){return"object"==typeof r&&(r instanceof J||(Q?function(r){try{return K.call(r),!0}catch(r){return!1}}(r):"[object Number]"===H(r)))}function er(r){return M(r)||rr(r)}W(er,"isPrimitive",M),W(er,"isObject",rr);var tr=Number.POSITIVE_INFINITY,nr=J.NEGATIVE_INFINITY;function ir(r){return r<tr&&r>nr&&e(r)}function ar(r){return M(r)&&ir(r)}function or(r){return rr(r)&&ir(r.valueOf())}function cr(r){return ar(r)||or(r)}function sr(r){return"string"==typeof r}W(cr,"isPrimitive",ar),W(cr,"isObject",or);var ur=String.prototype.valueOf;var lr=X();function fr(r){return"object"==typeof r&&(r instanceof String||(lr?function(r){try{return ur.call(r),!0}catch(r){return!1}}(r):"[object String]"===H(r)))}function pr(r){return sr(r)||fr(r)}function gr(r){return r!=r}function hr(r){return M(r)&&gr(r)}function dr(r){return rr(r)&&gr(r.valueOf())}function mr(r){return hr(r)||dr(r)}function vr(r,e,t){var i,a,o;if(!n(r)&&!sr(r))throw new TypeError(P("invalid argument. First argument must be array-like. Value: `%s`.",r));if(arguments.length<2)throw new Error("insufficient arguments. Must provide a search value.");if(arguments.length>2){if(!ar(t))throw new TypeError(P("invalid argument. Third argument must be an integer. Value: `%s`.",t));(a=t)<0&&(a=0)}else a=0;if(sr(r)){if(!sr(e))throw new TypeError(P("invalid argument. Second argument must be a string. Value: `%s`.",e));return-1!==r.indexOf(e,a)}if(i=r.length,hr(e)){for(o=a;o<i;o++)if(hr(r[o]))return!0;return!1}for(o=a;o<i;o++)if(r[o]===e)return!0;return!1}function yr(){var r,e=arguments,t="https://stdlib.io/e/"+e[0]+"?";for(r=1;r<e.length;r++)t+="&arg[]="+encodeURIComponent(e[r]);return t}W(pr,"isPrimitive",sr),W(pr,"isObject",fr),W(mr,"isPrimitive",hr),W(mr,"isObject",dr);var br=Array.isArray?Array.isArray:function(r){return"[object Array]"===H(r)};var wr=["min","max","average","dense","ordinal"],Er=["last","first","remove"];function _r(r,e){return"object"!=typeof(t=e)||null===t||br(t)?new TypeError(yr("1Lp2V",e)):q(e,"encoding")&&(r.encoding=e.encoding,!br(r.encoding))?new TypeError(yr("1Lp8Z","encoding",r.encoding)):!q(e,"method")||(r.method=e.method,sr(r.method)&&vr(wr,r.method))?!q(e,"missing")||(r.missing=e.missing,sr(r.missing)&&vr(Er,r.missing))?null:new TypeError(yr("1Lp4S","missing",Er.join('", "'),r.missing)):new TypeError(yr("1Lp4S","method",wr.join('", "'),r.method));var t}function Sr(r,e){var t,i,a,o,c,s,u,l,f,p,g,h,d,m,v,y,b,w;if(!n(r))throw new TypeError(yr("1Lp2O",r));if(d={},arguments.length>1&&(v=_r(d,e)))throw v;for(g=d.method||"average",s=d.encoding||[null,NaN],f=d.missing||"last",y=r.length,m=[],b=0;b<y;b++)vr(s,r[b])||m.push(r[b]);if(t=function(r,e){var t,n,i;for(t=r.length,n=new Array(t),i=0;i<t;i++)n[i]=vr(e,r[i]);return n}(r,s),y=m.length,o=0,h=new Array(y),l=function(r){var e,t;for(e=new Array(r.length),t=0;t<r.length;t++)e[t]=t;return e.sort((function(e,t){return function(r,e){return r<e?-1:r>e?1:0}(r[e],r[t])}))}(m),"ordinal"===g)for(b=0;b<y;b++)h[l[b]]=b+1;else for(i=0,b=0;b<y;b++)if(u=b+1,b===y-1||m[l[b]]!==m[l[u]]){switch(g){case"min":p=u-i;break;case"max":p=u;break;case"dense":p=u-i-o,o+=i;break;default:p=u-.5*i}for(w=b-i;w<u;w++)h[l[w]]=p;i=0}else i+=1;if("first"===f){for(a=function(r){var e,t,n;for(e=r.length,t=0,n=0;n<e;n++)t+=r[n];return t}(t),w=1,c=new Array(t.length),b=0;b<t.length;b++)t[b]?(c[b]=w,w+=1):c[b]=h.shift()+a;return c}if("last"===f){for(c=new Array(t.length),b=0;b<t.length;b++)t[b]?c[b]=b+h.length+1:c[b]=h.shift();return c}return h}export{Sr as default};
//# sourceMappingURL=mod.js.map
