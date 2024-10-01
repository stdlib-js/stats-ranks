"use strict";var h=function(r,i){return function(){return i||r((i={exports:{}}).exports,i),i.exports}};var T=h(function(er,O){
function x(r){var i,n,a;for(i=r.length,n=0,a=0;a<i;a++)n+=r[a];return n}O.exports=x
});var A=h(function(ir,j){
function C(r,i){return r<i?-1:r>i?1:0}function G(r){var i,n;for(i=new Array(r.length),n=0;n<r.length;n++)i[n]=n;return i.sort(a);function a(t,g){return C(r[t],r[g])}}j.exports=G
});var M=h(function(nr,E){
var H=require('@stdlib/assert-contains/dist');function z(r,i){var n,a,t;for(n=r.length,a=new Array(n),t=0;t<n;t++)a[t]=H(i,r[t]);return a}E.exports=z
});var F=h(function(ar,D){
var N=require('@stdlib/assert-contains/dist'),B=require('@stdlib/assert-is-array/dist'),J=require('@stdlib/assert-is-object/dist'),S=require('@stdlib/assert-is-string/dist').isPrimitive,k=require('@stdlib/assert-has-own-property/dist'),w=require('@stdlib/error-tools-fmtprodmsg/dist'),I=["min","max","average","dense","ordinal"],P=["last","first","remove"];function K(r,i){return J(i)?k(i,"encoding")&&(r.encoding=i.encoding,!B(r.encoding))?new TypeError(w('1Lp8Z',"encoding",r.encoding)):k(i,"method")&&(r.method=i.method,!S(r.method)||!N(I,r.method))?new TypeError(w('1Lp4S',"method",I.join('", "'),r.method)):k(i,"missing")&&(r.missing=i.missing,!S(r.missing)||!N(P,r.missing))?new TypeError(w('1Lp4S',"missing",P.join('", "'),r.missing)):null:new TypeError(w('1Lp2V',i));}D.exports=K
});var V=h(function(tr,R){
var L=require('@stdlib/assert-is-collection/dist'),Q=require('@stdlib/assert-contains/dist'),U=require('@stdlib/error-tools-fmtprodmsg/dist'),W=T(),X=A(),Y=M(),Z=F();function _(r,i){var n,a,t,g,s,q,o,m,y,c,b,u,d,f,p,v,e,l;if(!L(r))throw new TypeError(U('1Lp2O',r));if(d={},arguments.length>1&&(p=Z(d,i),p))throw p;for(b=d.method||"average",q=d.encoding||[null,NaN],y=d.missing||"last",v=r.length,f=[],e=0;e<v;e++)Q(q,r[e])||f.push(r[e]);if(n=Y(r,q),v=f.length,g=0,u=new Array(v),m=X(f),b==="ordinal")for(e=0;e<v;e++)u[m[e]]=e+1;else for(a=0,e=0;e<v;e++)if(o=e+1,e===v-1||f[m[e]]!==f[m[o]]){switch(b){case"min":c=o-a;break;case"max":c=o;break;case"dense":c=o-a-g,g+=a;break;case"average":default:c=o-.5*a;break}for(l=e-a;l<o;l++)u[m[l]]=c;a=0}else a+=1;if(y==="first"){for(t=W(n),l=1,s=new Array(n.length),e=0;e<n.length;e++)n[e]?(s[e]=l,l+=1):s[e]=u.shift()+t;return s}if(y==="last"){for(s=new Array(n.length),e=0;e<n.length;e++)n[e]?s[e]=e+u.length+1:s[e]=u.shift();return s}return u}R.exports=_
});var $=V();module.exports=$;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
