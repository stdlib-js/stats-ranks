// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var e=Math.floor;function r(r){return e(r)===r}function t(e){return"object"==typeof e&&null!==e&&"number"==typeof e.length&&r(e.length)&&e.length>=0&&e.length<=9007199254740991}var n="function"==typeof Object.defineProperty?Object.defineProperty:null;var i=Object.defineProperty;function a(e){return"number"==typeof e}function o(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function s(e,r,t){var n=!1,i=r-e.length;return i<0||(function(e){return"-"===e[0]}(e)&&(n=!0,e=e.substr(1)),e=t?e+o(i):o(i)+e,n&&(e="-"+e)),e}var c=String.prototype.toLowerCase,u=String.prototype.toUpperCase;function l(e){var r,t,n;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,n=parseInt(t,10),!isFinite(n)){if(!a(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===e.specifier||10!==r)&&(n=4294967295+n+1),n<0?(t=(-n).toString(r),e.precision&&(t=s(t,e.precision,e.padRight)),t="-"+t):(t=n.toString(r),n||e.precision?e.precision&&(t=s(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===u.call(e.specifier)?u.call(t):c.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function f(e){return"string"==typeof e}var p=Math.abs,g=String.prototype.toLowerCase,h=String.prototype.toUpperCase,d=String.prototype.replace,m=/e\+(\d)$/,b=/e-(\d)$/,v=/^(\d+)$/,y=/^(\d+)e/,w=/\.0$/,E=/\.0*e/,_=/(\..*[^0])0*e/;function j(e){var r,t,n=parseFloat(e.arg);if(!isFinite(n)){if(!a(e.arg))throw new Error("invalid floating-point number. Value: "+t);n=e.arg}switch(e.specifier){case"e":case"E":t=n.toExponential(e.precision);break;case"f":case"F":t=n.toFixed(e.precision);break;case"g":case"G":p(n)<1e-4?((r=e.precision)>0&&(r-=1),t=n.toExponential(r)):t=n.toPrecision(e.precision),e.alternate||(t=d.call(t,_,"$1e"),t=d.call(t,E,"e"),t=d.call(t,w,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=d.call(t,m,"e+0$1"),t=d.call(t,b,"e-0$1"),e.alternate&&(t=d.call(t,v,"$1."),t=d.call(t,y,"$1.e")),n>=0&&e.sign&&(t=e.sign+t),t=e.specifier===h.call(e.specifier)?h.call(t):g.call(t)}function S(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function k(e,r,t){var n=r-e.length;return n<0?e:e=t?e+S(n):S(n)+e}var T=String.fromCharCode,x=isNaN,O=Array.isArray;function A(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function V(e){var r,t,n,i,a,o,c,u,p;if(!O(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(o="",c=1,u=0;u<e.length;u++)if(f(n=e[u]))o+=n;else{if(r=void 0!==n.precision,!(n=A(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+u+"`. Value: `"+n+"`.");for(n.mapping&&(c=n.mapping),t=n.flags,p=0;p<t.length;p++)switch(i=t.charAt(p)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[c],10),c+=1,x(n.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(r&&"*"===n.precision){if(n.precision=parseInt(arguments[c],10),c+=1,x(n.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,r=!1)}switch(n.arg=arguments[c],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(n.padZeros=!1),n.arg=l(n);break;case"s":n.maxWidth=r?n.precision:-1;break;case"c":if(!x(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=x(a)?String(n.arg):T(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(n.precision=6),n.arg=j(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=s(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=k(n.arg,n.width,n.padRight)),o+=n.arg||"",c+=1}return o}var I=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function F(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function N(e){var r,t,n,i;for(t=[],i=0,n=I.exec(e);n;)(r=e.slice(i,I.lastIndex-n[0].length)).length&&t.push(r),t.push(F(n)),i=I.lastIndex,n=I.exec(e);return(r=e.slice(i)).length&&t.push(r),t}function P(e){return"string"==typeof e}function $(e){var r,t,n;if(!P(e))throw new TypeError($("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=N(e),(t=new Array(arguments.length))[0]=r,n=1;n<t.length;n++)t[n]=arguments[n];return V.apply(null,t)}var C=Object.prototype,R=C.toString,G=C.__defineGetter__,Z=C.__defineSetter__,W=C.__lookupGetter__,L=C.__lookupSetter__;var M=function(){try{return n({},"x",{}),!0}catch(e){return!1}}()?i:function(e,r,t){var n,i,a,o;if("object"!=typeof e||null===e||"[object Array]"===R.call(e))throw new TypeError($("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===R.call(t))throw new TypeError($("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(W.call(e,r)||L.call(e,r)?(n=e.__proto__,e.__proto__=C,delete e[r],e[r]=t.value,e.__proto__=n):e[r]=t.value),a="get"in t,o="set"in t,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&G&&G.call(e,r,t.get),o&&Z&&Z.call(e,r,t.set),e};function U(e,r,t){M(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function X(e){return"number"==typeof e}var Y="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function z(){return Y&&"symbol"==typeof Symbol.toStringTag}var q=Object.prototype.toString;var B=Object.prototype.hasOwnProperty;function D(e,r){return null!=e&&B.call(e,r)}var H="function"==typeof Symbol?Symbol:void 0,J="function"==typeof H?H.toStringTag:"";var K=z()?function(e){var r,t,n;if(null==e)return q.call(e);t=e[J],r=D(e,J);try{e[J]=void 0}catch(r){return q.call(e)}return n=q.call(e),r?e[J]=t:delete e[J],n}:function(e){return q.call(e)},Q=Number,ee=Q.prototype.toString;var re=z();function te(e){return"object"==typeof e&&(e instanceof Q||(re?function(e){try{return ee.call(e),!0}catch(e){return!1}}(e):"[object Number]"===K(e)))}function ne(e){return X(e)||te(e)}U(ne,"isPrimitive",X),U(ne,"isObject",te);var ie=Number.POSITIVE_INFINITY,ae=Q.NEGATIVE_INFINITY;function oe(e){return e<ie&&e>ae&&r(e)}function se(e){return X(e)&&oe(e)}function ce(e){return te(e)&&oe(e.valueOf())}function ue(e){return se(e)||ce(e)}function le(e){return"string"==typeof e}U(ue,"isPrimitive",se),U(ue,"isObject",ce);var fe=String.prototype.valueOf;var pe=z();function ge(e){return"object"==typeof e&&(e instanceof String||(pe?function(e){try{return fe.call(e),!0}catch(e){return!1}}(e):"[object String]"===K(e)))}function he(e){return le(e)||ge(e)}function de(e){return e!=e}function me(e){return X(e)&&de(e)}function be(e){return te(e)&&de(e.valueOf())}function ve(e){return me(e)||be(e)}function ye(e,r,n){var i,a,o;if(!t(e)&&!le(e))throw new TypeError($("invalid argument. First argument must be array-like. Value: `%s`.",e));if(arguments.length<2)throw new Error("insufficient arguments. Must provide a search value.");if(arguments.length>2){if(!se(n))throw new TypeError($("invalid argument. Third argument must be an integer. Value: `%s`.",n));(a=n)<0&&(a=0)}else a=0;if(le(e)){if(!le(r))throw new TypeError($("invalid argument. Second argument must be a string. Value: `%s`.",r));return-1!==e.indexOf(r,a)}if(i=e.length,me(r)){for(o=a;o<i;o++)if(me(e[o]))return!0;return!1}for(o=a;o<i;o++)if(e[o]===r)return!0;return!1}function we(e){var r,t,n;for(r=e.length,t=0,n=0;n<r;n++)t+=e[n];return t}function Ee(e){var r,t;for(r=new Array(e.length),t=0;t<e.length;t++)r[t]=t;return r.sort((function(r,t){return function(e,r){return e<r?-1:e>r?1:0}(e[r],e[t])}))}function _e(e,r){var t,n,i;for(t=e.length,n=new Array(t),i=0;i<t;i++)n[i]=ye(r,e[i]);return n}U(he,"isPrimitive",le),U(he,"isObject",ge),U(ve,"isPrimitive",me),U(ve,"isObject",be);var je=Array.isArray?Array.isArray:function(e){return"[object Array]"===K(e)};var Se=["min","max","average","dense","ordinal"],ke=["last","first","remove"];function Te(e,r){return"object"!=typeof(t=r)||null===t||je(t)?new TypeError($("invalid argument. Options argument must be an object. Value: `%s`.",r)):D(r,"encoding")&&(e.encoding=r.encoding,!je(e.encoding))?new TypeError($("invalid option. `%s` option must be an array. Option: `%s`.","encoding",e.encoding)):!D(r,"method")||(e.method=r.method,le(e.method)&&ye(Se,e.method))?!D(r,"missing")||(e.missing=r.missing,le(e.missing)&&ye(ke,e.missing))?null:new TypeError($('invalid option. `%s` option must be one of the following: "%s". Option: `%s`.',"missing",ke.join('", "'),e.missing)):new TypeError($('invalid option. `%s` option must be one of the following: "%s". Option: `%s`.',"method",Se.join('", "'),e.method));var t}function xe(e,r){var n,i,a,o,s,c,u,l,f,p,g,h,d,m,b,v,y,w;if(!t(e))throw new TypeError($("invalid argument. First argument must be an array-like object. Value: `%s`.",e));if(d={},arguments.length>1&&(b=Te(d,r)))throw b;for(g=d.method||"average",c=d.encoding||[null,NaN],f=d.missing||"last",v=e.length,m=[],y=0;y<v;y++)ye(c,e[y])||m.push(e[y]);if(n=_e(e,c),v=m.length,o=0,h=new Array(v),l=Ee(m),"ordinal"===g)for(y=0;y<v;y++)h[l[y]]=y+1;else for(i=0,y=0;y<v;y++)if(u=y+1,y===v-1||m[l[y]]!==m[l[u]]){switch(g){case"min":p=u-i;break;case"max":p=u;break;case"dense":p=u-i-o,o+=i;break;default:p=u-.5*i}for(w=y-i;w<u;w++)h[l[w]]=p;i=0}else i+=1;if("first"===f){for(a=we(n),w=1,s=new Array(n.length),y=0;y<n.length;y++)n[y]?(s[y]=w,w+=1):s[y]=h.shift()+a;return s}if("last"===f){for(s=new Array(n.length),y=0;y<n.length;y++)n[y]?s[y]=y+h.length+1:s[y]=h.shift();return s}return h}export{xe as default};
//# sourceMappingURL=mod.js.map
