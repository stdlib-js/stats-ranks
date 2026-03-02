"use strict";var h=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var M=h(function(tr,O){
function z(r){var e,n,a;for(e=r.length,n=0,a=0;a<e;a++)n+=r[a];return n}O.exports=z
});var j=h(function(sr,T){
function A(r,e){return r<e?-1:r>e?1:0}function C(r){var e,n;for(e=[],n=0;n<r.length;n++)e.push(n);return e.sort(a);function a(t,g){return A(r[t],r[g])}}T.exports=C
});var N=h(function(or,E){
var G=require('@stdlib/assert-contains/dist'),H=require('@stdlib/array-base-filled/dist');function B(r,e){var n,a,t;for(n=r.length,a=H(!1,n),t=0;t<n;t++)a[t]=G(e,r[t]);return a}E.exports=B
});var F=h(function(ur,D){
var I=require('@stdlib/array-base-assert-contains/dist').factory,J=require('@stdlib/assert-is-array/dist'),K=require('@stdlib/assert-is-object/dist'),S=require('@stdlib/assert-is-string/dist').isPrimitive,y=require('@stdlib/assert-has-own-property/dist'),q=require('@stdlib/error-tools-fmtprodmsg/dist'),P=["min","max","average","dense","ordinal"],x=["last","first","remove"],L=I(P),Q=I(x);function U(r,e){return K(e)?y(e,"encoding")&&(r.encoding=e.encoding,!J(r.encoding))?new TypeError(q('1Lp8Z',"encoding",r.encoding)):y(e,"method")&&(r.method=e.method,!S(r.method)||!L(r.method))?new TypeError(q('1Lp4S',"method",P.join('", "'),r.method)):y(e,"missing")&&(r.missing=e.missing,!S(r.missing)||!Q(r.missing))?new TypeError(q('1Lp4S',"missing",x.join('", "'),r.missing)):null:new TypeError(q('1Lp2V',e));}D.exports=U
});var V=h(function(vr,R){
var W=require('@stdlib/assert-is-collection/dist'),X=require('@stdlib/assert-contains/dist'),Y=require('@stdlib/array-base-zeros/dist'),Z=require('@stdlib/error-tools-fmtprodmsg/dist'),_=M(),$=j(),rr=N(),er=F();function ir(r,e){var n,a,t,g,s,p,o,m,w,c,b,u,d,l,k,v,i,f;if(!W(r))throw new TypeError(Z('1Lp2O',r));if(d={},arguments.length>1&&(k=er(d,e),k))throw k;for(b=d.method||"average",p=d.encoding||[null,NaN],w=d.missing||"last",v=r.length,l=[],i=0;i<v;i++)X(p,r[i])||l.push(r[i]);if(n=rr(r,p),v=l.length,g=0,m=$(l),u=Y(v),b==="ordinal")for(i=0;i<v;i++)u[m[i]]=i+1;else for(a=0,i=0;i<v;i++)if(o=i+1,i===v-1||l[m[i]]!==l[m[o]]){switch(b){case"min":c=o-a;break;case"max":c=o;break;case"dense":c=o-a-g,g+=a;break;default:c=o-.5*a;break}for(f=i-a;f<o;f++)u[m[f]]=c;a=0}else a+=1;if(w==="first"){for(t=_(n),f=1,s=[],i=0;i<n.length;i++)n[i]?(s.push(f),f+=1):s.push(u.shift()+t);return s}if(w==="last"){for(s=[],i=0;i<n.length;i++)n[i]?s.push(i+u.length+1):s.push(u.shift());return s}return u}R.exports=ir
});var nr=V();module.exports=nr;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
