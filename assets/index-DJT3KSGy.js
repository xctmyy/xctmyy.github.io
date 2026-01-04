(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();function ac(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const pt={},Cr=[],On=()=>{},qf=()=>!1,Do=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),lc=n=>n.startsWith("onUpdate:"),Ct=Object.assign,cc=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},gp=Object.prototype.hasOwnProperty,it=(n,e)=>gp.call(n,e),He=Array.isArray,Pr=n=>Io(n)==="[object Map]",Yf=n=>Io(n)==="[object Set]",We=n=>typeof n=="function",xt=n=>typeof n=="string",mi=n=>typeof n=="symbol",mt=n=>n!==null&&typeof n=="object",$f=n=>(mt(n)||We(n))&&We(n.then)&&We(n.catch),Kf=Object.prototype.toString,Io=n=>Kf.call(n),_p=n=>Io(n).slice(8,-1),jf=n=>Io(n)==="[object Object]",uc=n=>xt(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,os=ac(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Lo=n=>{const e=Object.create(null);return(t=>e[t]||(e[t]=n(t)))},vp=/-\w/g,pn=Lo(n=>n.replace(vp,e=>e.slice(1).toUpperCase())),xp=/\B([A-Z])/g,lr=Lo(n=>n.replace(xp,"-$1").toLowerCase()),Uo=Lo(n=>n.charAt(0).toUpperCase()+n.slice(1)),Qo=Lo(n=>n?`on${Uo(n)}`:""),Ui=(n,e)=>!Object.is(n,e),ea=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},Zf=(n,e,t,i=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:i,value:t})},Sp=n=>{const e=parseFloat(n);return isNaN(e)?n:e},Mp=n=>{const e=xt(n)?Number(n):NaN;return isNaN(e)?n:e};let $c;const No=()=>$c||($c=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function fc(n){if(He(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],r=xt(i)?Tp(i):fc(i);if(r)for(const s in r)e[s]=r[s]}return e}else if(xt(n)||mt(n))return n}const Ep=/;(?![^(]*\))/g,yp=/:([^]+)/,bp=/\/\*[^]*?\*\//g;function Tp(n){const e={};return n.replace(bp,"").split(Ep).forEach(t=>{if(t){const i=t.split(yp);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function vn(n){let e="";if(xt(n))e=n;else if(He(n))for(let t=0;t<n.length;t++){const i=vn(n[t]);i&&(e+=i+" ")}else if(mt(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const Ap="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",wp=ac(Ap);function Jf(n){return!!n||n===""}const Qf=n=>!!(n&&n.__v_isRef===!0),rr=n=>xt(n)?n:n==null?"":He(n)||mt(n)&&(n.toString===Kf||!We(n.toString))?Qf(n)?rr(n.value):JSON.stringify(n,ed,2):String(n),ed=(n,e)=>Qf(e)?ed(n,e.value):Pr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[i,r],s)=>(t[ta(i,s)+" =>"]=r,t),{})}:Yf(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>ta(t))}:mi(e)?ta(e):mt(e)&&!He(e)&&!jf(e)?String(e):e,ta=(n,e="")=>{var t;return mi(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};let Zt;class Rp{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Zt,!e&&Zt&&(this.index=(Zt.scopes||(Zt.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=Zt;try{return Zt=this,e()}finally{Zt=t}}}on(){++this._on===1&&(this.prevScope=Zt,Zt=this)}off(){this._on>0&&--this._on===0&&(Zt=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(this.effects.length=0,t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function Cp(){return Zt}let ht;const na=new WeakSet;class td{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Zt&&Zt.active&&Zt.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,na.has(this)&&(na.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||id(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Kc(this),rd(this);const e=ht,t=bn;ht=this,bn=!0;try{return this.fn()}finally{sd(this),ht=e,bn=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)pc(e);this.deps=this.depsTail=void 0,Kc(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?na.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){$a(this)&&this.run()}get dirty(){return $a(this)}}let nd=0,as,ls;function id(n,e=!1){if(n.flags|=8,e){n.next=ls,ls=n;return}n.next=as,as=n}function dc(){nd++}function hc(){if(--nd>0)return;if(ls){let e=ls;for(ls=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;as;){let e=as;for(as=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){n||(n=i)}e=t}}if(n)throw n}function rd(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function sd(n){let e,t=n.depsTail,i=t;for(;i;){const r=i.prevDep;i.version===-1?(i===t&&(t=r),pc(i),Pp(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=r}n.deps=e,n.depsTail=t}function $a(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(od(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function od(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===ps)||(n.globalVersion=ps,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!$a(n))))return;n.flags|=2;const e=n.dep,t=ht,i=bn;ht=n,bn=!0;try{rd(n);const r=n.fn(n._value);(e.version===0||Ui(r,n._value))&&(n.flags|=128,n._value=r,e.version++)}catch(r){throw e.version++,r}finally{ht=t,bn=i,sd(n),n.flags&=-3}}function pc(n,e=!1){const{dep:t,prevSub:i,nextSub:r}=n;if(i&&(i.nextSub=r,n.prevSub=void 0),r&&(r.prevSub=i,n.nextSub=void 0),t.subs===n&&(t.subs=i,!i&&t.computed)){t.computed.flags&=-5;for(let s=t.computed.deps;s;s=s.nextDep)pc(s,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function Pp(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let bn=!0;const ad=[];function ai(){ad.push(bn),bn=!1}function li(){const n=ad.pop();bn=n===void 0?!0:n}function Kc(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=ht;ht=void 0;try{e()}finally{ht=t}}}let ps=0;class Dp{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class mc{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!ht||!bn||ht===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==ht)t=this.activeLink=new Dp(ht,this),ht.deps?(t.prevDep=ht.depsTail,ht.depsTail.nextDep=t,ht.depsTail=t):ht.deps=ht.depsTail=t,ld(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const i=t.nextDep;i.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=i),t.prevDep=ht.depsTail,t.nextDep=void 0,ht.depsTail.nextDep=t,ht.depsTail=t,ht.deps===t&&(ht.deps=i)}return t}trigger(e){this.version++,ps++,this.notify(e)}notify(e){dc();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{hc()}}}function ld(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)ld(i)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const Ka=new WeakMap,sr=Symbol(""),ja=Symbol(""),ms=Symbol("");function Lt(n,e,t){if(bn&&ht){let i=Ka.get(n);i||Ka.set(n,i=new Map);let r=i.get(t);r||(i.set(t,r=new mc),r.map=i,r.key=t),r.track()}}function ei(n,e,t,i,r,s){const o=Ka.get(n);if(!o){ps++;return}const a=l=>{l&&l.trigger()};if(dc(),e==="clear")o.forEach(a);else{const l=He(n),c=l&&uc(t);if(l&&t==="length"){const u=Number(i);o.forEach((f,d)=>{(d==="length"||d===ms||!mi(d)&&d>=u)&&a(f)})}else switch((t!==void 0||o.has(void 0))&&a(o.get(t)),c&&a(o.get(ms)),e){case"add":l?c&&a(o.get("length")):(a(o.get(sr)),Pr(n)&&a(o.get(ja)));break;case"delete":l||(a(o.get(sr)),Pr(n)&&a(o.get(ja)));break;case"set":Pr(n)&&a(o.get(sr));break}}hc()}function dr(n){const e=et(n);return e===n?e:(Lt(e,"iterate",ms),hn(n)?e:e.map(Tn))}function Fo(n){return Lt(n=et(n),"iterate",ms),n}function wi(n,e){return ci(n)?or(n)?Fr(Tn(e)):Fr(e):Tn(e)}const Ip={__proto__:null,[Symbol.iterator](){return ia(this,Symbol.iterator,n=>wi(this,n))},concat(...n){return dr(this).concat(...n.map(e=>He(e)?dr(e):e))},entries(){return ia(this,"entries",n=>(n[1]=wi(this,n[1]),n))},every(n,e){return Wn(this,"every",n,e,void 0,arguments)},filter(n,e){return Wn(this,"filter",n,e,t=>t.map(i=>wi(this,i)),arguments)},find(n,e){return Wn(this,"find",n,e,t=>wi(this,t),arguments)},findIndex(n,e){return Wn(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return Wn(this,"findLast",n,e,t=>wi(this,t),arguments)},findLastIndex(n,e){return Wn(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return Wn(this,"forEach",n,e,void 0,arguments)},includes(...n){return ra(this,"includes",n)},indexOf(...n){return ra(this,"indexOf",n)},join(n){return dr(this).join(n)},lastIndexOf(...n){return ra(this,"lastIndexOf",n)},map(n,e){return Wn(this,"map",n,e,void 0,arguments)},pop(){return Yr(this,"pop")},push(...n){return Yr(this,"push",n)},reduce(n,...e){return jc(this,"reduce",n,e)},reduceRight(n,...e){return jc(this,"reduceRight",n,e)},shift(){return Yr(this,"shift")},some(n,e){return Wn(this,"some",n,e,void 0,arguments)},splice(...n){return Yr(this,"splice",n)},toReversed(){return dr(this).toReversed()},toSorted(n){return dr(this).toSorted(n)},toSpliced(...n){return dr(this).toSpliced(...n)},unshift(...n){return Yr(this,"unshift",n)},values(){return ia(this,"values",n=>wi(this,n))}};function ia(n,e,t){const i=Fo(n),r=i[e]();return i!==n&&!hn(n)&&(r._next=r.next,r.next=()=>{const s=r._next();return s.done||(s.value=t(s.value)),s}),r}const Lp=Array.prototype;function Wn(n,e,t,i,r,s){const o=Fo(n),a=o!==n&&!hn(n),l=o[e];if(l!==Lp[e]){const f=l.apply(n,s);return a?Tn(f):f}let c=t;o!==n&&(a?c=function(f,d){return t.call(this,wi(n,f),d,n)}:t.length>2&&(c=function(f,d){return t.call(this,f,d,n)}));const u=l.call(o,c,i);return a&&r?r(u):u}function jc(n,e,t,i){const r=Fo(n);let s=t;return r!==n&&(hn(n)?t.length>3&&(s=function(o,a,l){return t.call(this,o,a,l,n)}):s=function(o,a,l){return t.call(this,o,wi(n,a),l,n)}),r[e](s,...i)}function ra(n,e,t){const i=et(n);Lt(i,"iterate",ms);const r=i[e](...t);return(r===-1||r===!1)&&vc(t[0])?(t[0]=et(t[0]),i[e](...t)):r}function Yr(n,e,t=[]){ai(),dc();const i=et(n)[e].apply(n,t);return hc(),li(),i}const Up=ac("__proto__,__v_isRef,__isVue"),cd=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(mi));function Np(n){mi(n)||(n=String(n));const e=et(this);return Lt(e,"has",n),e.hasOwnProperty(n)}class ud{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,i){if(t==="__v_skip")return e.__v_skip;const r=this._isReadonly,s=this._isShallow;if(t==="__v_isReactive")return!r;if(t==="__v_isReadonly")return r;if(t==="__v_isShallow")return s;if(t==="__v_raw")return i===(r?s?Xp:pd:s?hd:dd).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const o=He(e);if(!r){let l;if(o&&(l=Ip[t]))return l;if(t==="hasOwnProperty")return Np}const a=Reflect.get(e,t,Bt(e)?e:i);if((mi(t)?cd.has(t):Up(t))||(r||Lt(e,"get",t),s))return a;if(Bt(a)){const l=o&&uc(t)?a:a.value;return r&&mt(l)?Ja(l):l}return mt(a)?r?Ja(a):Oo(a):a}}class fd extends ud{constructor(e=!1){super(!1,e)}set(e,t,i,r){let s=e[t];const o=He(e)&&uc(t);if(!this._isShallow){const c=ci(s);if(!hn(i)&&!ci(i)&&(s=et(s),i=et(i)),!o&&Bt(s)&&!Bt(i))return c||(s.value=i),!0}const a=o?Number(t)<e.length:it(e,t),l=Reflect.set(e,t,i,Bt(e)?e:r);return e===et(r)&&(a?Ui(i,s)&&ei(e,"set",t,i):ei(e,"add",t,i)),l}deleteProperty(e,t){const i=it(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&i&&ei(e,"delete",t,void 0),r}has(e,t){const i=Reflect.has(e,t);return(!mi(t)||!cd.has(t))&&Lt(e,"has",t),i}ownKeys(e){return Lt(e,"iterate",He(e)?"length":sr),Reflect.ownKeys(e)}}class Fp extends ud{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const Op=new fd,Bp=new Fp,Vp=new fd(!0);const Za=n=>n,Fs=n=>Reflect.getPrototypeOf(n);function zp(n,e,t){return function(...i){const r=this.__v_raw,s=et(r),o=Pr(s),a=n==="entries"||n===Symbol.iterator&&o,l=n==="keys"&&o,c=r[n](...i),u=t?Za:e?Fr:Tn;return!e&&Lt(s,"iterate",l?ja:sr),{next(){const{value:f,done:d}=c.next();return d?{value:f,done:d}:{value:a?[u(f[0]),u(f[1])]:u(f),done:d}},[Symbol.iterator](){return this}}}}function Os(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function Hp(n,e){const t={get(r){const s=this.__v_raw,o=et(s),a=et(r);n||(Ui(r,a)&&Lt(o,"get",r),Lt(o,"get",a));const{has:l}=Fs(o),c=e?Za:n?Fr:Tn;if(l.call(o,r))return c(s.get(r));if(l.call(o,a))return c(s.get(a));s!==o&&s.get(r)},get size(){const r=this.__v_raw;return!n&&Lt(et(r),"iterate",sr),r.size},has(r){const s=this.__v_raw,o=et(s),a=et(r);return n||(Ui(r,a)&&Lt(o,"has",r),Lt(o,"has",a)),r===a?s.has(r):s.has(r)||s.has(a)},forEach(r,s){const o=this,a=o.__v_raw,l=et(a),c=e?Za:n?Fr:Tn;return!n&&Lt(l,"iterate",sr),a.forEach((u,f)=>r.call(s,c(u),c(f),o))}};return Ct(t,n?{add:Os("add"),set:Os("set"),delete:Os("delete"),clear:Os("clear")}:{add(r){!e&&!hn(r)&&!ci(r)&&(r=et(r));const s=et(this);return Fs(s).has.call(s,r)||(s.add(r),ei(s,"add",r,r)),this},set(r,s){!e&&!hn(s)&&!ci(s)&&(s=et(s));const o=et(this),{has:a,get:l}=Fs(o);let c=a.call(o,r);c||(r=et(r),c=a.call(o,r));const u=l.call(o,r);return o.set(r,s),c?Ui(s,u)&&ei(o,"set",r,s):ei(o,"add",r,s),this},delete(r){const s=et(this),{has:o,get:a}=Fs(s);let l=o.call(s,r);l||(r=et(r),l=o.call(s,r)),a&&a.call(s,r);const c=s.delete(r);return l&&ei(s,"delete",r,void 0),c},clear(){const r=et(this),s=r.size!==0,o=r.clear();return s&&ei(r,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=zp(r,n,e)}),t}function gc(n,e){const t=Hp(n,e);return(i,r,s)=>r==="__v_isReactive"?!n:r==="__v_isReadonly"?n:r==="__v_raw"?i:Reflect.get(it(t,r)&&r in i?t:i,r,s)}const Gp={get:gc(!1,!1)},kp={get:gc(!1,!0)},Wp={get:gc(!0,!1)};const dd=new WeakMap,hd=new WeakMap,pd=new WeakMap,Xp=new WeakMap;function qp(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Yp(n){return n.__v_skip||!Object.isExtensible(n)?0:qp(_p(n))}function Oo(n){return ci(n)?n:_c(n,!1,Op,Gp,dd)}function md(n){return _c(n,!1,Vp,kp,hd)}function Ja(n){return _c(n,!0,Bp,Wp,pd)}function _c(n,e,t,i,r){if(!mt(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const s=Yp(n);if(s===0)return n;const o=r.get(n);if(o)return o;const a=new Proxy(n,s===2?i:t);return r.set(n,a),a}function or(n){return ci(n)?or(n.__v_raw):!!(n&&n.__v_isReactive)}function ci(n){return!!(n&&n.__v_isReadonly)}function hn(n){return!!(n&&n.__v_isShallow)}function vc(n){return n?!!n.__v_raw:!1}function et(n){const e=n&&n.__v_raw;return e?et(e):n}function $p(n){return!it(n,"__v_skip")&&Object.isExtensible(n)&&Zf(n,"__v_skip",!0),n}const Tn=n=>mt(n)?Oo(n):n,Fr=n=>mt(n)?Ja(n):n;function Bt(n){return n?n.__v_isRef===!0:!1}function Jt(n){return gd(n,!1)}function Kp(n){return gd(n,!0)}function gd(n,e){return Bt(n)?n:new jp(n,e)}class jp{constructor(e,t){this.dep=new mc,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:et(e),this._value=t?e:Tn(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,i=this.__v_isShallow||hn(e)||ci(e);e=i?e:et(e),Ui(e,t)&&(this._rawValue=e,this._value=i?e:Tn(e),this.dep.trigger())}}function xn(n){return Bt(n)?n.value:n}const Zp={get:(n,e,t)=>e==="__v_raw"?n:xn(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const r=n[e];return Bt(r)&&!Bt(t)?(r.value=t,!0):Reflect.set(n,e,t,i)}};function _d(n){return or(n)?n:new Proxy(n,Zp)}class Jp{constructor(e,t,i){this.fn=e,this.setter=t,this._value=void 0,this.dep=new mc(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=ps-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&ht!==this)return id(this,!0),!0}get value(){const e=this.dep.track();return od(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Qp(n,e,t=!1){let i,r;return We(n)?i=n:(i=n.get,r=n.set),new Jp(i,r,t)}const Bs={},Mo=new WeakMap;let ji;function em(n,e=!1,t=ji){if(t){let i=Mo.get(t);i||Mo.set(t,i=[]),i.push(n)}}function tm(n,e,t=pt){const{immediate:i,deep:r,once:s,scheduler:o,augmentJob:a,call:l}=t,c=M=>r?M:hn(M)||r===!1||r===0?Di(M,1):Di(M);let u,f,d,h,_=!1,v=!1;if(Bt(n)?(f=()=>n.value,_=hn(n)):or(n)?(f=()=>c(n),_=!0):He(n)?(v=!0,_=n.some(M=>or(M)||hn(M)),f=()=>n.map(M=>{if(Bt(M))return M.value;if(or(M))return c(M);if(We(M))return l?l(M,2):M()})):We(n)?e?f=l?()=>l(n,2):n:f=()=>{if(d){ai();try{d()}finally{li()}}const M=ji;ji=u;try{return l?l(n,3,[h]):n(h)}finally{ji=M}}:f=On,e&&r){const M=f,w=r===!0?1/0:r;f=()=>Di(M(),w)}const m=Cp(),p=()=>{u.stop(),m&&m.active&&cc(m.effects,u)};if(s&&e){const M=e;e=(...w)=>{M(...w),p()}}let b=v?new Array(n.length).fill(Bs):Bs;const T=M=>{if(!(!(u.flags&1)||!u.dirty&&!M))if(e){const w=u.run();if(r||_||(v?w.some((P,D)=>Ui(P,b[D])):Ui(w,b))){d&&d();const P=ji;ji=u;try{const D=[w,b===Bs?void 0:v&&b[0]===Bs?[]:b,h];b=w,l?l(e,3,D):e(...D)}finally{ji=P}}}else u.run()};return a&&a(T),u=new td(f),u.scheduler=o?()=>o(T,!1):T,h=M=>em(M,!1,u),d=u.onStop=()=>{const M=Mo.get(u);if(M){if(l)l(M,4);else for(const w of M)w();Mo.delete(u)}},e?i?T(!0):b=u.run():o?o(T.bind(null,!0),!0):u.run(),p.pause=u.pause.bind(u),p.resume=u.resume.bind(u),p.stop=p,p}function Di(n,e=1/0,t){if(e<=0||!mt(n)||n.__v_skip||(t=t||new Map,(t.get(n)||0)>=e))return n;if(t.set(n,e),e--,Bt(n))Di(n.value,e,t);else if(He(n))for(let i=0;i<n.length;i++)Di(n[i],e,t);else if(Yf(n)||Pr(n))n.forEach(i=>{Di(i,e,t)});else if(jf(n)){for(const i in n)Di(n[i],e,t);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&Di(n[i],e,t)}return n}function ws(n,e,t,i){try{return i?n(...i):n()}catch(r){Bo(r,e,t)}}function An(n,e,t,i){if(We(n)){const r=ws(n,e,t,i);return r&&$f(r)&&r.catch(s=>{Bo(s,e,t)}),r}if(He(n)){const r=[];for(let s=0;s<n.length;s++)r.push(An(n[s],e,t,i));return r}}function Bo(n,e,t,i=!0){const r=e?e.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||pt;if(e){let a=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${t}`;for(;a;){const u=a.ec;if(u){for(let f=0;f<u.length;f++)if(u[f](n,l,c)===!1)return}a=a.parent}if(s){ai(),ws(s,null,10,[n,l,c]),li();return}}nm(n,t,r,i,o)}function nm(n,e,t,i=!0,r=!1){if(r)throw n;console.error(n)}const Wt=[];let In=-1;const Dr=[];let Ri=null,wr=0;const vd=Promise.resolve();let Eo=null;function xc(n){const e=Eo||vd;return n?e.then(this?n.bind(this):n):e}function im(n){let e=In+1,t=Wt.length;for(;e<t;){const i=e+t>>>1,r=Wt[i],s=gs(r);s<n||s===n&&r.flags&2?e=i+1:t=i}return e}function Sc(n){if(!(n.flags&1)){const e=gs(n),t=Wt[Wt.length-1];!t||!(n.flags&2)&&e>=gs(t)?Wt.push(n):Wt.splice(im(e),0,n),n.flags|=1,xd()}}function xd(){Eo||(Eo=vd.then(Md))}function rm(n){He(n)?Dr.push(...n):Ri&&n.id===-1?Ri.splice(wr+1,0,n):n.flags&1||(Dr.push(n),n.flags|=1),xd()}function Zc(n,e,t=In+1){for(;t<Wt.length;t++){const i=Wt[t];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;Wt.splice(t,1),t--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function Sd(n){if(Dr.length){const e=[...new Set(Dr)].sort((t,i)=>gs(t)-gs(i));if(Dr.length=0,Ri){Ri.push(...e);return}for(Ri=e,wr=0;wr<Ri.length;wr++){const t=Ri[wr];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}Ri=null,wr=0}}const gs=n=>n.id==null?n.flags&2?-1:1/0:n.id;function Md(n){try{for(In=0;In<Wt.length;In++){const e=Wt[In];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),ws(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;In<Wt.length;In++){const e=Wt[In];e&&(e.flags&=-2)}In=-1,Wt.length=0,Sd(),Eo=null,(Wt.length||Dr.length)&&Md()}}let qt=null,Ed=null;function yo(n){const e=qt;return qt=n,Ed=n&&n.type.__scopeId||null,e}function cr(n,e=qt,t){if(!e||n._n)return n;const i=(...r)=>{i._d&&Ao(-1);const s=yo(e);let o;try{o=n(...r)}finally{yo(s),i._d&&Ao(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function zi(n,e,t,i){const r=n.dirs,s=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];s&&(a.oldValue=s[o].value);let l=a.dir[i];l&&(ai(),An(l,t,8,[n.el,a,n,e]),li())}}function uo(n,e){if(Ft){let t=Ft.provides;const i=Ft.parent&&Ft.parent.provides;i===t&&(t=Ft.provides=Object.create(i)),t[n]=e}}function Bn(n,e,t=!1){const i=rh();if(i||Lr){let r=Lr?Lr._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(r&&n in r)return r[n];if(arguments.length>1)return t&&We(e)?e.call(i&&i.proxy):e}}const sm=Symbol.for("v-scx"),om=()=>Bn(sm);function Ni(n,e,t){return yd(n,e,t)}function yd(n,e,t=pt){const{immediate:i,deep:r,flush:s,once:o}=t,a=Ct({},t),l=e&&i||!e&&s!=="post";let c;if(Ss){if(s==="sync"){const h=om();c=h.__watcherHandles||(h.__watcherHandles=[])}else if(!l){const h=()=>{};return h.stop=On,h.resume=On,h.pause=On,h}}const u=Ft;a.call=(h,_,v)=>An(h,u,_,v);let f=!1;s==="post"?a.scheduler=h=>{Gt(h,u&&u.suspense)}:s!=="sync"&&(f=!0,a.scheduler=(h,_)=>{_?h():Sc(h)}),a.augmentJob=h=>{e&&(h.flags|=4),f&&(h.flags|=2,u&&(h.id=u.uid,h.i=u))};const d=tm(n,e,a);return Ss&&(c?c.push(d):l&&d()),d}function am(n,e,t){const i=this.proxy,r=xt(n)?n.includes(".")?bd(i,n):()=>i[n]:n.bind(i,i);let s;We(e)?s=e:(s=e.handler,t=e);const o=Rs(this),a=yd(r,s.bind(i),t);return o(),a}function bd(n,e){const t=e.split(".");return()=>{let i=n;for(let r=0;r<t.length&&i;r++)i=i[t[r]];return i}}const Td=Symbol("_vte"),Ad=n=>n.__isTeleport,cs=n=>n&&(n.disabled||n.disabled===""),Jc=n=>n&&(n.defer||n.defer===""),Qc=n=>typeof SVGElement<"u"&&n instanceof SVGElement,eu=n=>typeof MathMLElement=="function"&&n instanceof MathMLElement,Qa=(n,e)=>{const t=n&&n.to;return xt(t)?e?e(t):null:t},wd={name:"Teleport",__isTeleport:!0,process(n,e,t,i,r,s,o,a,l,c){const{mc:u,pc:f,pbc:d,o:{insert:h,querySelector:_,createText:v,createComment:m}}=c,p=cs(e.props);let{shapeFlag:b,children:T,dynamicChildren:M}=e;if(n==null){const w=e.el=v(""),P=e.anchor=v("");h(w,t,i),h(P,t,i);const D=(x,y)=>{b&16&&u(T,x,y,r,s,o,a,l)},V=()=>{const x=e.target=Qa(e.props,_),y=Rd(x,e,v,h);x&&(o!=="svg"&&Qc(x)?o="svg":o!=="mathml"&&eu(x)&&(o="mathml"),r&&r.isCE&&(r.ce._teleportTargets||(r.ce._teleportTargets=new Set)).add(x),p||(D(x,y),fo(e,!1)))};p&&(D(t,P),fo(e,!0)),Jc(e.props)?(e.el.__isMounted=!1,Gt(()=>{V(),delete e.el.__isMounted},s)):V()}else{if(Jc(e.props)&&n.el.__isMounted===!1){Gt(()=>{wd.process(n,e,t,i,r,s,o,a,l,c)},s);return}e.el=n.el,e.targetStart=n.targetStart;const w=e.anchor=n.anchor,P=e.target=n.target,D=e.targetAnchor=n.targetAnchor,V=cs(n.props),x=V?t:P,y=V?w:D;if(o==="svg"||Qc(P)?o="svg":(o==="mathml"||eu(P))&&(o="mathml"),M?(d(n.dynamicChildren,M,x,r,s,o,a),bc(n,e,!0)):l||f(n,e,x,y,r,s,o,a,!1),p)V?e.props&&n.props&&e.props.to!==n.props.to&&(e.props.to=n.props.to):Vs(e,t,w,c,1);else if((e.props&&e.props.to)!==(n.props&&n.props.to)){const L=e.target=Qa(e.props,_);L&&Vs(e,L,null,c,0)}else V&&Vs(e,P,D,c,1);fo(e,p)}},remove(n,e,t,{um:i,o:{remove:r}},s){const{shapeFlag:o,children:a,anchor:l,targetStart:c,targetAnchor:u,target:f,props:d}=n;if(f&&(r(c),r(u)),s&&r(l),o&16){const h=s||!cs(d);for(let _=0;_<a.length;_++){const v=a[_];i(v,e,t,h,!!v.dynamicChildren)}}},move:Vs,hydrate:lm};function Vs(n,e,t,{o:{insert:i},m:r},s=2){s===0&&i(n.targetAnchor,e,t);const{el:o,anchor:a,shapeFlag:l,children:c,props:u}=n,f=s===2;if(f&&i(o,e,t),(!f||cs(u))&&l&16)for(let d=0;d<c.length;d++)r(c[d],e,t,2);f&&i(a,e,t)}function lm(n,e,t,i,r,s,{o:{nextSibling:o,parentNode:a,querySelector:l,insert:c,createText:u}},f){function d(v,m,p,b){m.anchor=f(o(v),m,a(v),t,i,r,s),m.targetStart=p,m.targetAnchor=b}const h=e.target=Qa(e.props,l),_=cs(e.props);if(h){const v=h._lpa||h.firstChild;if(e.shapeFlag&16)if(_)d(n,e,v,v&&o(v));else{e.anchor=o(n);let m=v;for(;m;){if(m&&m.nodeType===8){if(m.data==="teleport start anchor")e.targetStart=m;else if(m.data==="teleport anchor"){e.targetAnchor=m,h._lpa=e.targetAnchor&&o(e.targetAnchor);break}}m=o(m)}e.targetAnchor||Rd(h,e,u,c),f(v&&o(v),e,h,t,i,r,s)}fo(e,_)}else _&&e.shapeFlag&16&&d(n,e,n,o(n));return e.anchor&&o(e.anchor)}const cm=wd;function fo(n,e){const t=n.ctx;if(t&&t.ut){let i,r;for(e?(i=n.el,r=n.anchor):(i=n.targetStart,r=n.targetAnchor);i&&i!==r;)i.nodeType===1&&i.setAttribute("data-v-owner",t.uid),i=i.nextSibling;t.ut()}}function Rd(n,e,t,i){const r=e.targetStart=t(""),s=e.targetAnchor=t("");return r[Td]=s,n&&(i(r,n),i(s,n)),s}const Qn=Symbol("_leaveCb"),zs=Symbol("_enterCb");function um(){const n={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return ur(()=>{n.isMounted=!0}),Od(()=>{n.isUnmounting=!0}),n}const ln=[Function,Array],Cd={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:ln,onEnter:ln,onAfterEnter:ln,onEnterCancelled:ln,onBeforeLeave:ln,onLeave:ln,onAfterLeave:ln,onLeaveCancelled:ln,onBeforeAppear:ln,onAppear:ln,onAfterAppear:ln,onAppearCancelled:ln},Pd=n=>{const e=n.subTree;return e.component?Pd(e.component):e},fm={name:"BaseTransition",props:Cd,setup(n,{slots:e}){const t=rh(),i=um();return()=>{const r=e.default&&Ld(e.default(),!0);if(!r||!r.length)return;const s=Dd(r),o=et(n),{mode:a}=o;if(i.isLeaving)return sa(s);const l=tu(s);if(!l)return sa(s);let c=el(l,o,i,t,f=>c=f);l.type!==Nt&&_s(l,c);let u=t.subTree&&tu(t.subTree);if(u&&u.type!==Nt&&!Ji(u,l)&&Pd(t).type!==Nt){let f=el(u,o,i,t);if(_s(u,f),a==="out-in"&&l.type!==Nt)return i.isLeaving=!0,f.afterLeave=()=>{i.isLeaving=!1,t.job.flags&8||t.update(),delete f.afterLeave,u=void 0},sa(s);a==="in-out"&&l.type!==Nt?f.delayLeave=(d,h,_)=>{const v=Id(i,u);v[String(u.key)]=u,d[Qn]=()=>{h(),d[Qn]=void 0,delete c.delayedLeave,u=void 0},c.delayedLeave=()=>{_(),delete c.delayedLeave,u=void 0}}:u=void 0}else u&&(u=void 0);return s}}};function Dd(n){let e=n[0];if(n.length>1){for(const t of n)if(t.type!==Nt){e=t;break}}return e}const dm=fm;function Id(n,e){const{leavingVNodes:t}=n;let i=t.get(e.type);return i||(i=Object.create(null),t.set(e.type,i)),i}function el(n,e,t,i,r){const{appear:s,mode:o,persisted:a=!1,onBeforeEnter:l,onEnter:c,onAfterEnter:u,onEnterCancelled:f,onBeforeLeave:d,onLeave:h,onAfterLeave:_,onLeaveCancelled:v,onBeforeAppear:m,onAppear:p,onAfterAppear:b,onAppearCancelled:T}=e,M=String(n.key),w=Id(t,n),P=(x,y)=>{x&&An(x,i,9,y)},D=(x,y)=>{const L=y[1];P(x,y),He(x)?x.every(N=>N.length<=1)&&L():x.length<=1&&L()},V={mode:o,persisted:a,beforeEnter(x){let y=l;if(!t.isMounted)if(s)y=m||l;else return;x[Qn]&&x[Qn](!0);const L=w[M];L&&Ji(n,L)&&L.el[Qn]&&L.el[Qn](),P(y,[x])},enter(x){let y=c,L=u,N=f;if(!t.isMounted)if(s)y=p||c,L=b||u,N=T||f;else return;let z=!1;const ne=x[zs]=te=>{z||(z=!0,te?P(N,[x]):P(L,[x]),V.delayedLeave&&V.delayedLeave(),x[zs]=void 0)};y?D(y,[x,ne]):ne()},leave(x,y){const L=String(n.key);if(x[zs]&&x[zs](!0),t.isUnmounting)return y();P(d,[x]);let N=!1;const z=x[Qn]=ne=>{N||(N=!0,y(),ne?P(v,[x]):P(_,[x]),x[Qn]=void 0,w[L]===n&&delete w[L])};w[L]=n,h?D(h,[x,z]):z()},clone(x){const y=el(x,e,t,i,r);return r&&r(y),y}};return V}function sa(n){if(Vo(n))return n=Fi(n),n.children=null,n}function tu(n){if(!Vo(n))return Ad(n.type)&&n.children?Dd(n.children):n;if(n.component)return n.component.subTree;const{shapeFlag:e,children:t}=n;if(t){if(e&16)return t[0];if(e&32&&We(t.default))return t.default()}}function _s(n,e){n.shapeFlag&6&&n.component?(n.transition=e,_s(n.component.subTree,e)):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}function Ld(n,e=!1,t){let i=[],r=0;for(let s=0;s<n.length;s++){let o=n[s];const a=t==null?o.key:String(t)+String(o.key!=null?o.key:s);o.type===Ut?(o.patchFlag&128&&r++,i=i.concat(Ld(o.children,e,a))):(e||o.type!==Nt)&&i.push(a!=null?Fi(o,{key:a}):o)}if(r>1)for(let s=0;s<i.length;s++)i[s].patchFlag=-2;return i}function Ud(n,e){return We(n)?Ct({name:n.name},e,{setup:n}):n}function Nd(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}const bo=new WeakMap;function us(n,e,t,i,r=!1){if(He(n)){n.forEach((_,v)=>us(_,e&&(He(e)?e[v]:e),t,i,r));return}if(Ir(i)&&!r){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&us(n,e,t,i.component.subTree);return}const s=i.shapeFlag&4?Ac(i.component):i.el,o=r?null:s,{i:a,r:l}=n,c=e&&e.r,u=a.refs===pt?a.refs={}:a.refs,f=a.setupState,d=et(f),h=f===pt?qf:_=>it(d,_);if(c!=null&&c!==l){if(nu(e),xt(c))u[c]=null,h(c)&&(f[c]=null);else if(Bt(c)){c.value=null;const _=e;_.k&&(u[_.k]=null)}}if(We(l))ws(l,a,12,[o,u]);else{const _=xt(l),v=Bt(l);if(_||v){const m=()=>{if(n.f){const p=_?h(l)?f[l]:u[l]:l.value;if(r)He(p)&&cc(p,s);else if(He(p))p.includes(s)||p.push(s);else if(_)u[l]=[s],h(l)&&(f[l]=u[l]);else{const b=[s];l.value=b,n.k&&(u[n.k]=b)}}else _?(u[l]=o,h(l)&&(f[l]=o)):v&&(l.value=o,n.k&&(u[n.k]=o))};if(o){const p=()=>{m(),bo.delete(n)};p.id=-1,bo.set(n,p),Gt(p,t)}else nu(n),m()}}}function nu(n){const e=bo.get(n);e&&(e.flags|=8,bo.delete(n))}No().requestIdleCallback;No().cancelIdleCallback;const Ir=n=>!!n.type.__asyncLoader,Vo=n=>n.type.__isKeepAlive;function hm(n,e){Fd(n,"a",e)}function pm(n,e){Fd(n,"da",e)}function Fd(n,e,t=Ft){const i=n.__wdc||(n.__wdc=()=>{let r=t;for(;r;){if(r.isDeactivated)return;r=r.parent}return n()});if(zo(e,i,t),t){let r=t.parent;for(;r&&r.parent;)Vo(r.parent.vnode)&&mm(i,e,t,r),r=r.parent}}function mm(n,e,t,i){const r=zo(e,n,i,!0);Mc(()=>{cc(i[e],r)},t)}function zo(n,e,t=Ft,i=!1){if(t){const r=t[n]||(t[n]=[]),s=e.__weh||(e.__weh=(...o)=>{ai();const a=Rs(t),l=An(e,t,n,o);return a(),li(),l});return i?r.unshift(s):r.push(s),s}}const gi=n=>(e,t=Ft)=>{(!Ss||n==="sp")&&zo(n,(...i)=>e(...i),t)},gm=gi("bm"),ur=gi("m"),_m=gi("bu"),vm=gi("u"),Od=gi("bum"),Mc=gi("um"),xm=gi("sp"),Sm=gi("rtg"),Mm=gi("rtc");function Em(n,e=Ft){zo("ec",n,e)}const ym="components";function bm(n,e){return Am(ym,n,!0,e)||n}const Tm=Symbol.for("v-ndc");function Am(n,e,t=!0,i=!1){const r=qt||Ft;if(r){const s=r.type;{const a=f0(s,!1);if(a&&(a===e||a===pn(e)||a===Uo(pn(e))))return s}const o=iu(r[n]||s[n],e)||iu(r.appContext[n],e);return!o&&i?s:o}}function iu(n,e){return n&&(n[e]||n[pn(e)]||n[Uo(pn(e))])}function wm(n,e,t,i){let r;const s=t,o=He(n);if(o||xt(n)){const a=o&&or(n);let l=!1,c=!1;a&&(l=!hn(n),c=ci(n),n=Fo(n)),r=new Array(n.length);for(let u=0,f=n.length;u<f;u++)r[u]=e(l?c?Fr(Tn(n[u])):Tn(n[u]):n[u],u,void 0,s)}else if(typeof n=="number"){r=new Array(n);for(let a=0;a<n;a++)r[a]=e(a+1,a,void 0,s)}else if(mt(n))if(n[Symbol.iterator])r=Array.from(n,(a,l)=>e(a,l,void 0,s));else{const a=Object.keys(n);r=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const u=a[l];r[l]=e(n[u],u,l,s)}}else r=[];return r}function Bd(n,e,t={},i,r){if(qt.ce||qt.parent&&Ir(qt.parent)&&qt.parent.ce){const c=Object.keys(t).length>0;return yt(),ui(Ut,null,[bt("slot",t,i)],c?-2:64)}let s=n[e];s&&s._c&&(s._d=!1),yt();const o=s&&Vd(s(t)),a=t.key||o&&o.key,l=ui(Ut,{key:(a&&!mi(a)?a:`_${e}`)+(!o&&i?"_fb":"")},o||[],o&&n._===1?64:-2);return s&&s._c&&(s._d=!0),l}function Vd(n){return n.some(e=>xs(e)?!(e.type===Nt||e.type===Ut&&!Vd(e.children)):!0)?n:null}const tl=n=>n?sh(n)?Ac(n):tl(n.parent):null,fs=Ct(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>tl(n.parent),$root:n=>tl(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>Hd(n),$forceUpdate:n=>n.f||(n.f=()=>{Sc(n.update)}),$nextTick:n=>n.n||(n.n=xc.bind(n.proxy)),$watch:n=>am.bind(n)}),oa=(n,e)=>n!==pt&&!n.__isScriptSetup&&it(n,e),Rm={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:i,data:r,props:s,accessCache:o,type:a,appContext:l}=n;if(e[0]!=="$"){const d=o[e];if(d!==void 0)switch(d){case 1:return i[e];case 2:return r[e];case 4:return t[e];case 3:return s[e]}else{if(oa(i,e))return o[e]=1,i[e];if(r!==pt&&it(r,e))return o[e]=2,r[e];if(it(s,e))return o[e]=3,s[e];if(t!==pt&&it(t,e))return o[e]=4,t[e];nl&&(o[e]=0)}}const c=fs[e];let u,f;if(c)return e==="$attrs"&&Lt(n.attrs,"get",""),c(n);if((u=a.__cssModules)&&(u=u[e]))return u;if(t!==pt&&it(t,e))return o[e]=4,t[e];if(f=l.config.globalProperties,it(f,e))return f[e]},set({_:n},e,t){const{data:i,setupState:r,ctx:s}=n;return oa(r,e)?(r[e]=t,!0):i!==pt&&it(i,e)?(i[e]=t,!0):it(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(s[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:r,props:s,type:o}},a){let l;return!!(t[a]||n!==pt&&a[0]!=="$"&&it(n,a)||oa(e,a)||it(s,a)||it(i,a)||it(fs,a)||it(r.config.globalProperties,a)||(l=o.__cssModules)&&l[a])},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:it(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function ru(n){return He(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let nl=!0;function Cm(n){const e=Hd(n),t=n.proxy,i=n.ctx;nl=!1,e.beforeCreate&&su(e.beforeCreate,n,"bc");const{data:r,computed:s,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:f,mounted:d,beforeUpdate:h,updated:_,activated:v,deactivated:m,beforeDestroy:p,beforeUnmount:b,destroyed:T,unmounted:M,render:w,renderTracked:P,renderTriggered:D,errorCaptured:V,serverPrefetch:x,expose:y,inheritAttrs:L,components:N,directives:z,filters:ne}=e;if(c&&Pm(c,i,null),o)for(const H in o){const ee=o[H];We(ee)&&(i[H]=ee.bind(t))}if(r){const H=r.call(t,t);mt(H)&&(n.data=Oo(H))}if(nl=!0,s)for(const H in s){const ee=s[H],ve=We(ee)?ee.bind(t,t):We(ee.get)?ee.get.bind(t,t):On,ge=!We(ee)&&We(ee.set)?ee.set.bind(t):On,Se=Sn({get:ve,set:ge});Object.defineProperty(i,H,{enumerable:!0,configurable:!0,get:()=>Se.value,set:Fe=>Se.value=Fe})}if(a)for(const H in a)zd(a[H],i,t,H);if(l){const H=We(l)?l.call(t):l;Reflect.ownKeys(H).forEach(ee=>{uo(ee,H[ee])})}u&&su(u,n,"c");function K(H,ee){He(ee)?ee.forEach(ve=>H(ve.bind(t))):ee&&H(ee.bind(t))}if(K(gm,f),K(ur,d),K(_m,h),K(vm,_),K(hm,v),K(pm,m),K(Em,V),K(Mm,P),K(Sm,D),K(Od,b),K(Mc,M),K(xm,x),He(y))if(y.length){const H=n.exposed||(n.exposed={});y.forEach(ee=>{Object.defineProperty(H,ee,{get:()=>t[ee],set:ve=>t[ee]=ve,enumerable:!0})})}else n.exposed||(n.exposed={});w&&n.render===On&&(n.render=w),L!=null&&(n.inheritAttrs=L),N&&(n.components=N),z&&(n.directives=z),x&&Nd(n)}function Pm(n,e,t=On){He(n)&&(n=il(n));for(const i in n){const r=n[i];let s;mt(r)?"default"in r?s=Bn(r.from||i,r.default,!0):s=Bn(r.from||i):s=Bn(r),Bt(s)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):e[i]=s}}function su(n,e,t){An(He(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function zd(n,e,t,i){let r=i.includes(".")?bd(t,i):()=>t[i];if(xt(n)){const s=e[n];We(s)&&Ni(r,s)}else if(We(n))Ni(r,n.bind(t));else if(mt(n))if(He(n))n.forEach(s=>zd(s,e,t,i));else{const s=We(n.handler)?n.handler.bind(t):e[n.handler];We(s)&&Ni(r,s,n)}}function Hd(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:o}}=n.appContext,a=s.get(e);let l;return a?l=a:!r.length&&!t&&!i?l=e:(l={},r.length&&r.forEach(c=>To(l,c,o,!0)),To(l,e,o)),mt(e)&&s.set(e,l),l}function To(n,e,t,i=!1){const{mixins:r,extends:s}=e;s&&To(n,s,t,!0),r&&r.forEach(o=>To(n,o,t,!0));for(const o in e)if(!(i&&o==="expose")){const a=Dm[o]||t&&t[o];n[o]=a?a(n[o],e[o]):e[o]}return n}const Dm={data:ou,props:au,emits:au,methods:is,computed:is,beforeCreate:zt,created:zt,beforeMount:zt,mounted:zt,beforeUpdate:zt,updated:zt,beforeDestroy:zt,beforeUnmount:zt,destroyed:zt,unmounted:zt,activated:zt,deactivated:zt,errorCaptured:zt,serverPrefetch:zt,components:is,directives:is,watch:Lm,provide:ou,inject:Im};function ou(n,e){return e?n?function(){return Ct(We(n)?n.call(this,this):n,We(e)?e.call(this,this):e)}:e:n}function Im(n,e){return is(il(n),il(e))}function il(n){if(He(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function zt(n,e){return n?[...new Set([].concat(n,e))]:e}function is(n,e){return n?Ct(Object.create(null),n,e):e}function au(n,e){return n?He(n)&&He(e)?[...new Set([...n,...e])]:Ct(Object.create(null),ru(n),ru(e??{})):e}function Lm(n,e){if(!n)return e;if(!e)return n;const t=Ct(Object.create(null),n);for(const i in e)t[i]=zt(n[i],e[i]);return t}function Gd(){return{app:null,config:{isNativeTag:qf,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Um=0;function Nm(n,e){return function(i,r=null){We(i)||(i=Ct({},i)),r!=null&&!mt(r)&&(r=null);const s=Gd(),o=new WeakSet,a=[];let l=!1;const c=s.app={_uid:Um++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:h0,get config(){return s.config},set config(u){},use(u,...f){return o.has(u)||(u&&We(u.install)?(o.add(u),u.install(c,...f)):We(u)&&(o.add(u),u(c,...f))),c},mixin(u){return s.mixins.includes(u)||s.mixins.push(u),c},component(u,f){return f?(s.components[u]=f,c):s.components[u]},directive(u,f){return f?(s.directives[u]=f,c):s.directives[u]},mount(u,f,d){if(!l){const h=c._ceVNode||bt(i,r);return h.appContext=s,d===!0?d="svg":d===!1&&(d=void 0),n(h,u,d),l=!0,c._container=u,u.__vue_app__=c,Ac(h.component)}},onUnmount(u){a.push(u)},unmount(){l&&(An(a,c._instance,16),n(null,c._container),delete c._container.__vue_app__)},provide(u,f){return s.provides[u]=f,c},runWithContext(u){const f=Lr;Lr=c;try{return u()}finally{Lr=f}}};return c}}let Lr=null;const Fm=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${pn(e)}Modifiers`]||n[`${lr(e)}Modifiers`];function Om(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||pt;let r=t;const s=e.startsWith("update:"),o=s&&Fm(i,e.slice(7));o&&(o.trim&&(r=t.map(u=>xt(u)?u.trim():u)),o.number&&(r=t.map(Sp)));let a,l=i[a=Qo(e)]||i[a=Qo(pn(e))];!l&&s&&(l=i[a=Qo(lr(e))]),l&&An(l,n,6,r);const c=i[a+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,An(c,n,6,r)}}const Bm=new WeakMap;function kd(n,e,t=!1){const i=t?Bm:e.emitsCache,r=i.get(n);if(r!==void 0)return r;const s=n.emits;let o={},a=!1;if(!We(n)){const l=c=>{const u=kd(c,e,!0);u&&(a=!0,Ct(o,u))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!s&&!a?(mt(n)&&i.set(n,null),null):(He(s)?s.forEach(l=>o[l]=null):Ct(o,s),mt(n)&&i.set(n,o),o)}function Ho(n,e){return!n||!Do(e)?!1:(e=e.slice(2).replace(/Once$/,""),it(n,e[0].toLowerCase()+e.slice(1))||it(n,lr(e))||it(n,e))}function lu(n){const{type:e,vnode:t,proxy:i,withProxy:r,propsOptions:[s],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:f,data:d,setupState:h,ctx:_,inheritAttrs:v}=n,m=yo(n);let p,b;try{if(t.shapeFlag&4){const M=r||i,w=M;p=Ln(c.call(w,M,u,f,h,d,_)),b=a}else{const M=e;p=Ln(M.length>1?M(f,{attrs:a,slots:o,emit:l}):M(f,null)),b=e.props?a:Vm(a)}}catch(M){ds.length=0,Bo(M,n,1),p=bt(Nt)}let T=p;if(b&&v!==!1){const M=Object.keys(b),{shapeFlag:w}=T;M.length&&w&7&&(s&&M.some(lc)&&(b=zm(b,s)),T=Fi(T,b,!1,!0))}return t.dirs&&(T=Fi(T,null,!1,!0),T.dirs=T.dirs?T.dirs.concat(t.dirs):t.dirs),t.transition&&_s(T,t.transition),p=T,yo(m),p}const Vm=n=>{let e;for(const t in n)(t==="class"||t==="style"||Do(t))&&((e||(e={}))[t]=n[t]);return e},zm=(n,e)=>{const t={};for(const i in n)(!lc(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function Hm(n,e,t){const{props:i,children:r,component:s}=n,{props:o,children:a,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?cu(i,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const d=u[f];if(o[d]!==i[d]&&!Ho(c,d))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?cu(i,o,c):!0:!!o;return!1}function cu(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(e[s]!==n[s]&&!Ho(t,s))return!0}return!1}function Gm({vnode:n,parent:e},t){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===n&&(i.el=n.el),i===n)(n=e.vnode).el=t,e=e.parent;else break}}const Wd={},Xd=()=>Object.create(Wd),qd=n=>Object.getPrototypeOf(n)===Wd;function km(n,e,t,i=!1){const r={},s=Xd();n.propsDefaults=Object.create(null),Yd(n,e,r,s);for(const o in n.propsOptions[0])o in r||(r[o]=void 0);t?n.props=i?r:md(r):n.type.props?n.props=r:n.props=s,n.attrs=s}function Wm(n,e,t,i){const{props:r,attrs:s,vnode:{patchFlag:o}}=n,a=et(r),[l]=n.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=n.vnode.dynamicProps;for(let f=0;f<u.length;f++){let d=u[f];if(Ho(n.emitsOptions,d))continue;const h=e[d];if(l)if(it(s,d))h!==s[d]&&(s[d]=h,c=!0);else{const _=pn(d);r[_]=rl(l,a,_,h,n,!1)}else h!==s[d]&&(s[d]=h,c=!0)}}}else{Yd(n,e,r,s)&&(c=!0);let u;for(const f in a)(!e||!it(e,f)&&((u=lr(f))===f||!it(e,u)))&&(l?t&&(t[f]!==void 0||t[u]!==void 0)&&(r[f]=rl(l,a,f,void 0,n,!0)):delete r[f]);if(s!==a)for(const f in s)(!e||!it(e,f))&&(delete s[f],c=!0)}c&&ei(n.attrs,"set","")}function Yd(n,e,t,i){const[r,s]=n.propsOptions;let o=!1,a;if(e)for(let l in e){if(os(l))continue;const c=e[l];let u;r&&it(r,u=pn(l))?!s||!s.includes(u)?t[u]=c:(a||(a={}))[u]=c:Ho(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(s){const l=et(t),c=a||pt;for(let u=0;u<s.length;u++){const f=s[u];t[f]=rl(r,l,f,c[f],n,!it(c,f))}}return o}function rl(n,e,t,i,r,s){const o=n[t];if(o!=null){const a=it(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&We(l)){const{propsDefaults:c}=r;if(t in c)i=c[t];else{const u=Rs(r);i=c[t]=l.call(null,e),u()}}else i=l;r.ce&&r.ce._setProp(t,i)}o[0]&&(s&&!a?i=!1:o[1]&&(i===""||i===lr(t))&&(i=!0))}return i}const Xm=new WeakMap;function $d(n,e,t=!1){const i=t?Xm:e.propsCache,r=i.get(n);if(r)return r;const s=n.props,o={},a=[];let l=!1;if(!We(n)){const u=f=>{l=!0;const[d,h]=$d(f,e,!0);Ct(o,d),h&&a.push(...h)};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!s&&!l)return mt(n)&&i.set(n,Cr),Cr;if(He(s))for(let u=0;u<s.length;u++){const f=pn(s[u]);uu(f)&&(o[f]=pt)}else if(s)for(const u in s){const f=pn(u);if(uu(f)){const d=s[u],h=o[f]=He(d)||We(d)?{type:d}:Ct({},d),_=h.type;let v=!1,m=!0;if(He(_))for(let p=0;p<_.length;++p){const b=_[p],T=We(b)&&b.name;if(T==="Boolean"){v=!0;break}else T==="String"&&(m=!1)}else v=We(_)&&_.name==="Boolean";h[0]=v,h[1]=m,(v||it(h,"default"))&&a.push(f)}}const c=[o,a];return mt(n)&&i.set(n,c),c}function uu(n){return n[0]!=="$"&&!os(n)}const Ec=n=>n==="_"||n==="_ctx"||n==="$stable",yc=n=>He(n)?n.map(Ln):[Ln(n)],qm=(n,e,t)=>{if(e._n)return e;const i=cr((...r)=>yc(e(...r)),t);return i._c=!1,i},Kd=(n,e,t)=>{const i=n._ctx;for(const r in n){if(Ec(r))continue;const s=n[r];if(We(s))e[r]=qm(r,s,i);else if(s!=null){const o=yc(s);e[r]=()=>o}}},jd=(n,e)=>{const t=yc(e);n.slots.default=()=>t},Zd=(n,e,t)=>{for(const i in e)(t||!Ec(i))&&(n[i]=e[i])},Ym=(n,e,t)=>{const i=n.slots=Xd();if(n.vnode.shapeFlag&32){const r=e._;r?(Zd(i,e,t),t&&Zf(i,"_",r,!0)):Kd(e,i)}else e&&jd(n,e)},$m=(n,e,t)=>{const{vnode:i,slots:r}=n;let s=!0,o=pt;if(i.shapeFlag&32){const a=e._;a?t&&a===1?s=!1:Zd(r,e,t):(s=!e.$stable,Kd(e,r)),o=e}else e&&(jd(n,e),o={default:1});if(s)for(const a in r)!Ec(a)&&o[a]==null&&delete r[a]},Gt=Qm;function Km(n){return jm(n)}function jm(n,e){const t=No();t.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:d,setScopeId:h=On,insertStaticContent:_}=n,v=(R,C,F,j=null,q=null,J=null,A=void 0,fe=null,le=!!C.dynamicChildren)=>{if(R===C)return;R&&!Ji(R,C)&&(j=U(R),Fe(R,q,J,!0),R=null),C.patchFlag===-2&&(le=!1,C.dynamicChildren=null);const{type:se,ref:ce,shapeFlag:S}=C;switch(se){case Go:m(R,C,F,j);break;case Nt:p(R,C,F,j);break;case la:R==null&&b(C,F,j,A);break;case Ut:N(R,C,F,j,q,J,A,fe,le);break;default:S&1?w(R,C,F,j,q,J,A,fe,le):S&6?z(R,C,F,j,q,J,A,fe,le):(S&64||S&128)&&se.process(R,C,F,j,q,J,A,fe,le,oe)}ce!=null&&q?us(ce,R&&R.ref,J,C||R,!C):ce==null&&R&&R.ref!=null&&us(R.ref,null,J,R,!0)},m=(R,C,F,j)=>{if(R==null)i(C.el=a(C.children),F,j);else{const q=C.el=R.el;C.children!==R.children&&c(q,C.children)}},p=(R,C,F,j)=>{R==null?i(C.el=l(C.children||""),F,j):C.el=R.el},b=(R,C,F,j)=>{[R.el,R.anchor]=_(R.children,C,F,j,R.el,R.anchor)},T=({el:R,anchor:C},F,j)=>{let q;for(;R&&R!==C;)q=d(R),i(R,F,j),R=q;i(C,F,j)},M=({el:R,anchor:C})=>{let F;for(;R&&R!==C;)F=d(R),r(R),R=F;r(C)},w=(R,C,F,j,q,J,A,fe,le)=>{if(C.type==="svg"?A="svg":C.type==="math"&&(A="mathml"),R==null)P(C,F,j,q,J,A,fe,le);else{const se=R.el&&R.el._isVueCE?R.el:null;try{se&&se._beginPatch(),x(R,C,q,J,A,fe,le)}finally{se&&se._endPatch()}}},P=(R,C,F,j,q,J,A,fe)=>{let le,se;const{props:ce,shapeFlag:S,transition:g,dirs:I}=R;if(le=R.el=o(R.type,J,ce&&ce.is,ce),S&8?u(le,R.children):S&16&&V(R.children,le,null,j,q,aa(R,J),A,fe),I&&zi(R,null,j,"created"),D(le,R,R.scopeId,A,j),ce){for(const Q in ce)Q!=="value"&&!os(Q)&&s(le,Q,null,ce[Q],J,j);"value"in ce&&s(le,"value",null,ce.value,J),(se=ce.onVnodeBeforeMount)&&Pn(se,j,R)}I&&zi(R,null,j,"beforeMount");const X=Zm(q,g);X&&g.beforeEnter(le),i(le,C,F),((se=ce&&ce.onVnodeMounted)||X||I)&&Gt(()=>{se&&Pn(se,j,R),X&&g.enter(le),I&&zi(R,null,j,"mounted")},q)},D=(R,C,F,j,q)=>{if(F&&h(R,F),j)for(let J=0;J<j.length;J++)h(R,j[J]);if(q){let J=q.subTree;if(C===J||eh(J.type)&&(J.ssContent===C||J.ssFallback===C)){const A=q.vnode;D(R,A,A.scopeId,A.slotScopeIds,q.parent)}}},V=(R,C,F,j,q,J,A,fe,le=0)=>{for(let se=le;se<R.length;se++){const ce=R[se]=fe?Ci(R[se]):Ln(R[se]);v(null,ce,C,F,j,q,J,A,fe)}},x=(R,C,F,j,q,J,A)=>{const fe=C.el=R.el;let{patchFlag:le,dynamicChildren:se,dirs:ce}=C;le|=R.patchFlag&16;const S=R.props||pt,g=C.props||pt;let I;if(F&&Hi(F,!1),(I=g.onVnodeBeforeUpdate)&&Pn(I,F,C,R),ce&&zi(C,R,F,"beforeUpdate"),F&&Hi(F,!0),(S.innerHTML&&g.innerHTML==null||S.textContent&&g.textContent==null)&&u(fe,""),se?y(R.dynamicChildren,se,fe,F,j,aa(C,q),J):A||ee(R,C,fe,null,F,j,aa(C,q),J,!1),le>0){if(le&16)L(fe,S,g,F,q);else if(le&2&&S.class!==g.class&&s(fe,"class",null,g.class,q),le&4&&s(fe,"style",S.style,g.style,q),le&8){const X=C.dynamicProps;for(let Q=0;Q<X.length;Q++){const k=X[Q],Te=S[k],he=g[k];(he!==Te||k==="value")&&s(fe,k,Te,he,q,F)}}le&1&&R.children!==C.children&&u(fe,C.children)}else!A&&se==null&&L(fe,S,g,F,q);((I=g.onVnodeUpdated)||ce)&&Gt(()=>{I&&Pn(I,F,C,R),ce&&zi(C,R,F,"updated")},j)},y=(R,C,F,j,q,J,A)=>{for(let fe=0;fe<C.length;fe++){const le=R[fe],se=C[fe],ce=le.el&&(le.type===Ut||!Ji(le,se)||le.shapeFlag&198)?f(le.el):F;v(le,se,ce,null,j,q,J,A,!0)}},L=(R,C,F,j,q)=>{if(C!==F){if(C!==pt)for(const J in C)!os(J)&&!(J in F)&&s(R,J,C[J],null,q,j);for(const J in F){if(os(J))continue;const A=F[J],fe=C[J];A!==fe&&J!=="value"&&s(R,J,fe,A,q,j)}"value"in F&&s(R,"value",C.value,F.value,q)}},N=(R,C,F,j,q,J,A,fe,le)=>{const se=C.el=R?R.el:a(""),ce=C.anchor=R?R.anchor:a("");let{patchFlag:S,dynamicChildren:g,slotScopeIds:I}=C;I&&(fe=fe?fe.concat(I):I),R==null?(i(se,F,j),i(ce,F,j),V(C.children||[],F,ce,q,J,A,fe,le)):S>0&&S&64&&g&&R.dynamicChildren&&R.dynamicChildren.length===g.length?(y(R.dynamicChildren,g,F,q,J,A,fe),(C.key!=null||q&&C===q.subTree)&&bc(R,C,!0)):ee(R,C,F,ce,q,J,A,fe,le)},z=(R,C,F,j,q,J,A,fe,le)=>{C.slotScopeIds=fe,R==null?C.shapeFlag&512?q.ctx.activate(C,F,j,A,le):ne(C,F,j,q,J,A,le):te(R,C,le)},ne=(R,C,F,j,q,J,A)=>{const fe=R.component=o0(R,j,q);if(Vo(R)&&(fe.ctx.renderer=oe),a0(fe,!1,A),fe.asyncDep){if(q&&q.registerDep(fe,K,A),!R.el){const le=fe.subTree=bt(Nt);p(null,le,C,F),R.placeholder=le.el}}else K(fe,R,C,F,q,J,A)},te=(R,C,F)=>{const j=C.component=R.component;if(Hm(R,C,F))if(j.asyncDep&&!j.asyncResolved){H(j,C,F);return}else j.next=C,j.update();else C.el=R.el,j.vnode=C},K=(R,C,F,j,q,J,A)=>{const fe=()=>{if(R.isMounted){let{next:S,bu:g,u:I,parent:X,vnode:Q}=R;{const Ue=Jd(R);if(Ue){S&&(S.el=Q.el,H(R,S,A)),Ue.asyncDep.then(()=>{R.isUnmounted||fe()});return}}let k=S,Te;Hi(R,!1),S?(S.el=Q.el,H(R,S,A)):S=Q,g&&ea(g),(Te=S.props&&S.props.onVnodeBeforeUpdate)&&Pn(Te,X,S,Q),Hi(R,!0);const he=lu(R),Re=R.subTree;R.subTree=he,v(Re,he,f(Re.el),U(Re),R,q,J),S.el=he.el,k===null&&Gm(R,he.el),I&&Gt(I,q),(Te=S.props&&S.props.onVnodeUpdated)&&Gt(()=>Pn(Te,X,S,Q),q)}else{let S;const{el:g,props:I}=C,{bm:X,m:Q,parent:k,root:Te,type:he}=R,Re=Ir(C);Hi(R,!1),X&&ea(X),!Re&&(S=I&&I.onVnodeBeforeMount)&&Pn(S,k,C),Hi(R,!0);{Te.ce&&Te.ce._def.shadowRoot!==!1&&Te.ce._injectChildStyle(he);const Ue=R.subTree=lu(R);v(null,Ue,F,j,R,q,J),C.el=Ue.el}if(Q&&Gt(Q,q),!Re&&(S=I&&I.onVnodeMounted)){const Ue=C;Gt(()=>Pn(S,k,Ue),q)}(C.shapeFlag&256||k&&Ir(k.vnode)&&k.vnode.shapeFlag&256)&&R.a&&Gt(R.a,q),R.isMounted=!0,C=F=j=null}};R.scope.on();const le=R.effect=new td(fe);R.scope.off();const se=R.update=le.run.bind(le),ce=R.job=le.runIfDirty.bind(le);ce.i=R,ce.id=R.uid,le.scheduler=()=>Sc(ce),Hi(R,!0),se()},H=(R,C,F)=>{C.component=R;const j=R.vnode.props;R.vnode=C,R.next=null,Wm(R,C.props,j,F),$m(R,C.children,F),ai(),Zc(R),li()},ee=(R,C,F,j,q,J,A,fe,le=!1)=>{const se=R&&R.children,ce=R?R.shapeFlag:0,S=C.children,{patchFlag:g,shapeFlag:I}=C;if(g>0){if(g&128){ge(se,S,F,j,q,J,A,fe,le);return}else if(g&256){ve(se,S,F,j,q,J,A,fe,le);return}}I&8?(ce&16&&re(se,q,J),S!==se&&u(F,S)):ce&16?I&16?ge(se,S,F,j,q,J,A,fe,le):re(se,q,J,!0):(ce&8&&u(F,""),I&16&&V(S,F,j,q,J,A,fe,le))},ve=(R,C,F,j,q,J,A,fe,le)=>{R=R||Cr,C=C||Cr;const se=R.length,ce=C.length,S=Math.min(se,ce);let g;for(g=0;g<S;g++){const I=C[g]=le?Ci(C[g]):Ln(C[g]);v(R[g],I,F,null,q,J,A,fe,le)}se>ce?re(R,q,J,!0,!1,S):V(C,F,j,q,J,A,fe,le,S)},ge=(R,C,F,j,q,J,A,fe,le)=>{let se=0;const ce=C.length;let S=R.length-1,g=ce-1;for(;se<=S&&se<=g;){const I=R[se],X=C[se]=le?Ci(C[se]):Ln(C[se]);if(Ji(I,X))v(I,X,F,null,q,J,A,fe,le);else break;se++}for(;se<=S&&se<=g;){const I=R[S],X=C[g]=le?Ci(C[g]):Ln(C[g]);if(Ji(I,X))v(I,X,F,null,q,J,A,fe,le);else break;S--,g--}if(se>S){if(se<=g){const I=g+1,X=I<ce?C[I].el:j;for(;se<=g;)v(null,C[se]=le?Ci(C[se]):Ln(C[se]),F,X,q,J,A,fe,le),se++}}else if(se>g)for(;se<=S;)Fe(R[se],q,J,!0),se++;else{const I=se,X=se,Q=new Map;for(se=X;se<=g;se++){const Ee=C[se]=le?Ci(C[se]):Ln(C[se]);Ee.key!=null&&Q.set(Ee.key,se)}let k,Te=0;const he=g-X+1;let Re=!1,Ue=0;const de=new Array(he);for(se=0;se<he;se++)de[se]=0;for(se=I;se<=S;se++){const Ee=R[se];if(Te>=he){Fe(Ee,q,J,!0);continue}let Ce;if(Ee.key!=null)Ce=Q.get(Ee.key);else for(k=X;k<=g;k++)if(de[k-X]===0&&Ji(Ee,C[k])){Ce=k;break}Ce===void 0?Fe(Ee,q,J,!0):(de[Ce-X]=se+1,Ce>=Ue?Ue=Ce:Re=!0,v(Ee,C[Ce],F,null,q,J,A,fe,le),Te++)}const xe=Re?Jm(de):Cr;for(k=xe.length-1,se=he-1;se>=0;se--){const Ee=X+se,Ce=C[Ee],_e=C[Ee+1],Xe=Ee+1<ce?_e.el||Qd(_e):j;de[se]===0?v(null,Ce,F,Xe,q,J,A,fe,le):Re&&(k<0||se!==xe[k]?Se(Ce,F,Xe,2):k--)}}},Se=(R,C,F,j,q=null)=>{const{el:J,type:A,transition:fe,children:le,shapeFlag:se}=R;if(se&6){Se(R.component.subTree,C,F,j);return}if(se&128){R.suspense.move(C,F,j);return}if(se&64){A.move(R,C,F,oe);return}if(A===Ut){i(J,C,F);for(let S=0;S<le.length;S++)Se(le[S],C,F,j);i(R.anchor,C,F);return}if(A===la){T(R,C,F);return}if(j!==2&&se&1&&fe)if(j===0)fe.beforeEnter(J),i(J,C,F),Gt(()=>fe.enter(J),q);else{const{leave:S,delayLeave:g,afterLeave:I}=fe,X=()=>{R.ctx.isUnmounted?r(J):i(J,C,F)},Q=()=>{J._isLeaving&&J[Qn](!0),S(J,()=>{X(),I&&I()})};g?g(J,X,Q):Q()}else i(J,C,F)},Fe=(R,C,F,j=!1,q=!1)=>{const{type:J,props:A,ref:fe,children:le,dynamicChildren:se,shapeFlag:ce,patchFlag:S,dirs:g,cacheIndex:I}=R;if(S===-2&&(q=!1),fe!=null&&(ai(),us(fe,null,F,R,!0),li()),I!=null&&(C.renderCache[I]=void 0),ce&256){C.ctx.deactivate(R);return}const X=ce&1&&g,Q=!Ir(R);let k;if(Q&&(k=A&&A.onVnodeBeforeUnmount)&&Pn(k,C,R),ce&6)je(R.component,F,j);else{if(ce&128){R.suspense.unmount(F,j);return}X&&zi(R,null,C,"beforeUnmount"),ce&64?R.type.remove(R,C,F,oe,j):se&&!se.hasOnce&&(J!==Ut||S>0&&S&64)?re(se,C,F,!1,!0):(J===Ut&&S&384||!q&&ce&16)&&re(le,C,F),j&&ze(R)}(Q&&(k=A&&A.onVnodeUnmounted)||X)&&Gt(()=>{k&&Pn(k,C,R),X&&zi(R,null,C,"unmounted")},F)},ze=R=>{const{type:C,el:F,anchor:j,transition:q}=R;if(C===Ut){tt(F,j);return}if(C===la){M(R);return}const J=()=>{r(F),q&&!q.persisted&&q.afterLeave&&q.afterLeave()};if(R.shapeFlag&1&&q&&!q.persisted){const{leave:A,delayLeave:fe}=q,le=()=>A(F,J);fe?fe(R.el,J,le):le()}else J()},tt=(R,C)=>{let F;for(;R!==C;)F=d(R),r(R),R=F;r(C)},je=(R,C,F)=>{const{bum:j,scope:q,job:J,subTree:A,um:fe,m:le,a:se}=R;fu(le),fu(se),j&&ea(j),q.stop(),J&&(J.flags|=8,Fe(A,R,C,F)),fe&&Gt(fe,C),Gt(()=>{R.isUnmounted=!0},C)},re=(R,C,F,j=!1,q=!1,J=0)=>{for(let A=J;A<R.length;A++)Fe(R[A],C,F,j,q)},U=R=>{if(R.shapeFlag&6)return U(R.component.subTree);if(R.shapeFlag&128)return R.suspense.next();const C=d(R.anchor||R.el),F=C&&C[Td];return F?d(F):C};let ie=!1;const ae=(R,C,F)=>{let j;R==null?C._vnode&&(Fe(C._vnode,null,null,!0),j=C._vnode.component):v(C._vnode||null,R,C,null,null,null,F),C._vnode=R,ie||(ie=!0,Zc(j),Sd(),ie=!1)},oe={p:v,um:Fe,m:Se,r:ze,mt:ne,mc:V,pc:ee,pbc:y,n:U,o:n};return{render:ae,hydrate:void 0,createApp:Nm(ae)}}function aa({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function Hi({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function Zm(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function bc(n,e,t=!1){const i=n.children,r=e.children;if(He(i)&&He(r))for(let s=0;s<i.length;s++){const o=i[s];let a=r[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[s]=Ci(r[s]),a.el=o.el),!t&&a.patchFlag!==-2&&bc(o,a)),a.type===Go&&(a.patchFlag!==-1?a.el=o.el:a.__elIndex=s+(n.type===Ut?1:0)),a.type===Nt&&!a.el&&(a.el=o.el)}}function Jm(n){const e=n.slice(),t=[0];let i,r,s,o,a;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(r=t[t.length-1],n[r]<c){e[i]=r,t.push(i);continue}for(s=0,o=t.length-1;s<o;)a=s+o>>1,n[t[a]]<c?s=a+1:o=a;c<n[t[s]]&&(s>0&&(e[i]=t[s-1]),t[s]=i)}}for(s=t.length,o=t[s-1];s-- >0;)t[s]=o,o=e[o];return t}function Jd(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Jd(e)}function fu(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}function Qd(n){if(n.placeholder)return n.placeholder;const e=n.component;return e?Qd(e.subTree):null}const eh=n=>n.__isSuspense;function Qm(n,e){e&&e.pendingBranch?He(n)?e.effects.push(...n):e.effects.push(n):rm(n)}const Ut=Symbol.for("v-fgt"),Go=Symbol.for("v-txt"),Nt=Symbol.for("v-cmt"),la=Symbol.for("v-stc"),ds=[];let on=null;function yt(n=!1){ds.push(on=n?null:[])}function e0(){ds.pop(),on=ds[ds.length-1]||null}let vs=1;function Ao(n,e=!1){vs+=n,n<0&&on&&e&&(on.hasOnce=!0)}function th(n){return n.dynamicChildren=vs>0?on||Cr:null,e0(),vs>0&&on&&on.push(n),n}function En(n,e,t,i,r,s){return th(W(n,e,t,i,r,s,!0))}function ui(n,e,t,i,r){return th(bt(n,e,t,i,r,!0))}function xs(n){return n?n.__v_isVNode===!0:!1}function Ji(n,e){return n.type===e.type&&n.key===e.key}const nh=({key:n})=>n??null,ho=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?xt(n)||Bt(n)||We(n)?{i:qt,r:n,k:e,f:!!t}:n:null);function W(n,e=null,t=null,i=0,r=null,s=n===Ut?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&nh(e),ref:e&&ho(e),scopeId:Ed,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:qt};return a?(Tc(l,t),s&128&&n.normalize(l)):t&&(l.shapeFlag|=xt(t)?8:16),vs>0&&!o&&on&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&on.push(l),l}const bt=t0;function t0(n,e=null,t=null,i=0,r=null,s=!1){if((!n||n===Tm)&&(n=Nt),xs(n)){const a=Fi(n,e,!0);return t&&Tc(a,t),vs>0&&!s&&on&&(a.shapeFlag&6?on[on.indexOf(n)]=a:on.push(a)),a.patchFlag=-2,a}if(d0(n)&&(n=n.__vccOpts),e){e=n0(e);let{class:a,style:l}=e;a&&!xt(a)&&(e.class=vn(a)),mt(l)&&(vc(l)&&!He(l)&&(l=Ct({},l)),e.style=fc(l))}const o=xt(n)?1:eh(n)?128:Ad(n)?64:mt(n)?4:We(n)?2:0;return W(n,e,t,i,r,o,s,!0)}function n0(n){return n?vc(n)||qd(n)?Ct({},n):n:null}function Fi(n,e,t=!1,i=!1){const{props:r,ref:s,patchFlag:o,children:a,transition:l}=n,c=e?i0(r||{},e):r,u={__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&nh(c),ref:e&&e.ref?t&&s?He(s)?s.concat(ho(e)):[s,ho(e)]:ho(e):s,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==Ut?o===-1?16:o|16:o,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&Fi(n.ssContent),ssFallback:n.ssFallback&&Fi(n.ssFallback),placeholder:n.placeholder,el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&i&&_s(u,l.clone(u)),u}function ti(n=" ",e=0){return bt(Go,null,n,e)}function ih(n="",e=!1){return e?(yt(),ui(Nt,null,n)):bt(Nt,null,n)}function Ln(n){return n==null||typeof n=="boolean"?bt(Nt):He(n)?bt(Ut,null,n.slice()):xs(n)?Ci(n):bt(Go,null,String(n))}function Ci(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:Fi(n)}function Tc(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(He(e))t=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),Tc(n,r()),r._c&&(r._d=!0));return}else{t=32;const r=e._;!r&&!qd(e)?e._ctx=qt:r===3&&qt&&(qt.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else We(e)?(e={default:e,_ctx:qt},t=32):(e=String(e),i&64?(t=16,e=[ti(e)]):t=8);n.children=e,n.shapeFlag|=t}function i0(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=vn([e.class,i.class]));else if(r==="style")e.style=fc([e.style,i.style]);else if(Do(r)){const s=e[r],o=i[r];o&&s!==o&&!(He(s)&&s.includes(o))&&(e[r]=s?[].concat(s,o):o)}else r!==""&&(e[r]=i[r])}return e}function Pn(n,e,t,i=null){An(n,e,7,[t,i])}const r0=Gd();let s0=0;function o0(n,e,t){const i=n.type,r=(e?e.appContext:n.appContext)||r0,s={uid:s0++,vnode:n,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Rp(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:$d(i,r),emitsOptions:kd(i,r),emit:null,emitted:null,propsDefaults:pt,inheritAttrs:i.inheritAttrs,ctx:pt,data:pt,props:pt,attrs:pt,slots:pt,refs:pt,setupState:pt,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=Om.bind(null,s),n.ce&&n.ce(s),s}let Ft=null;const rh=()=>Ft||qt;let wo,sl;{const n=No(),e=(t,i)=>{let r;return(r=n[t])||(r=n[t]=[]),r.push(i),s=>{r.length>1?r.forEach(o=>o(s)):r[0](s)}};wo=e("__VUE_INSTANCE_SETTERS__",t=>Ft=t),sl=e("__VUE_SSR_SETTERS__",t=>Ss=t)}const Rs=n=>{const e=Ft;return wo(n),n.scope.on(),()=>{n.scope.off(),wo(e)}},du=()=>{Ft&&Ft.scope.off(),wo(null)};function sh(n){return n.vnode.shapeFlag&4}let Ss=!1;function a0(n,e=!1,t=!1){e&&sl(e);const{props:i,children:r}=n.vnode,s=sh(n);km(n,i,s,e),Ym(n,r,t||e);const o=s?l0(n,e):void 0;return e&&sl(!1),o}function l0(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,Rm);const{setup:i}=t;if(i){ai();const r=n.setupContext=i.length>1?u0(n):null,s=Rs(n),o=ws(i,n,0,[n.props,r]),a=$f(o);if(li(),s(),(a||n.sp)&&!Ir(n)&&Nd(n),a){if(o.then(du,du),e)return o.then(l=>{hu(n,l)}).catch(l=>{Bo(l,n,0)});n.asyncDep=o}else hu(n,o)}else oh(n)}function hu(n,e,t){We(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:mt(e)&&(n.setupState=_d(e)),oh(n)}function oh(n,e,t){const i=n.type;n.render||(n.render=i.render||On);{const r=Rs(n);ai();try{Cm(n)}finally{li(),r()}}}const c0={get(n,e){return Lt(n,"get",""),n[e]}};function u0(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,c0),slots:n.slots,emit:n.emit,expose:e}}function Ac(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(_d($p(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in fs)return fs[t](n)},has(e,t){return t in e||t in fs}})):n.proxy}function f0(n,e=!0){return We(n)?n.displayName||n.name:n.name||e&&n.__name}function d0(n){return We(n)&&"__vccOpts"in n}const Sn=(n,e)=>Qp(n,e,Ss);function wc(n,e,t){try{Ao(-1);const i=arguments.length;return i===2?mt(e)&&!He(e)?xs(e)?bt(n,null,[e]):bt(n,e):bt(n,null,e):(i>3?t=Array.prototype.slice.call(arguments,2):i===3&&xs(t)&&(t=[t]),bt(n,e,t))}finally{Ao(1)}}const h0="3.5.26";let ol;const pu=typeof window<"u"&&window.trustedTypes;if(pu)try{ol=pu.createPolicy("vue",{createHTML:n=>n})}catch{}const ah=ol?n=>ol.createHTML(n):n=>n,p0="http://www.w3.org/2000/svg",m0="http://www.w3.org/1998/Math/MathML",Jn=typeof document<"u"?document:null,mu=Jn&&Jn.createElement("template"),g0={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const r=e==="svg"?Jn.createElementNS(p0,n):e==="mathml"?Jn.createElementNS(m0,n):t?Jn.createElement(n,{is:t}):Jn.createElement(n);return n==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:n=>Jn.createTextNode(n),createComment:n=>Jn.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>Jn.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,r,s){const o=t?t.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),t),!(r===s||!(r=r.nextSibling)););else{mu.innerHTML=ah(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const a=mu.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},vi="transition",$r="animation",Ms=Symbol("_vtc"),lh={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},_0=Ct({},Cd,lh),v0=n=>(n.displayName="Transition",n.props=_0,n),x0=v0((n,{slots:e})=>wc(dm,S0(n),e)),Gi=(n,e=[])=>{He(n)?n.forEach(t=>t(...e)):n&&n(...e)},gu=n=>n?He(n)?n.some(e=>e.length>1):n.length>1:!1;function S0(n){const e={};for(const N in n)N in lh||(e[N]=n[N]);if(n.css===!1)return e;const{name:t="v",type:i,duration:r,enterFromClass:s=`${t}-enter-from`,enterActiveClass:o=`${t}-enter-active`,enterToClass:a=`${t}-enter-to`,appearFromClass:l=s,appearActiveClass:c=o,appearToClass:u=a,leaveFromClass:f=`${t}-leave-from`,leaveActiveClass:d=`${t}-leave-active`,leaveToClass:h=`${t}-leave-to`}=n,_=M0(r),v=_&&_[0],m=_&&_[1],{onBeforeEnter:p,onEnter:b,onEnterCancelled:T,onLeave:M,onLeaveCancelled:w,onBeforeAppear:P=p,onAppear:D=b,onAppearCancelled:V=T}=e,x=(N,z,ne,te)=>{N._enterCancelled=te,ki(N,z?u:a),ki(N,z?c:o),ne&&ne()},y=(N,z)=>{N._isLeaving=!1,ki(N,f),ki(N,h),ki(N,d),z&&z()},L=N=>(z,ne)=>{const te=N?D:b,K=()=>x(z,N,ne);Gi(te,[z,K]),_u(()=>{ki(z,N?l:s),Xn(z,N?u:a),gu(te)||vu(z,i,v,K)})};return Ct(e,{onBeforeEnter(N){Gi(p,[N]),Xn(N,s),Xn(N,o)},onBeforeAppear(N){Gi(P,[N]),Xn(N,l),Xn(N,c)},onEnter:L(!1),onAppear:L(!0),onLeave(N,z){N._isLeaving=!0;const ne=()=>y(N,z);Xn(N,f),N._enterCancelled?(Xn(N,d),Mu(N)):(Mu(N),Xn(N,d)),_u(()=>{N._isLeaving&&(ki(N,f),Xn(N,h),gu(M)||vu(N,i,m,ne))}),Gi(M,[N,ne])},onEnterCancelled(N){x(N,!1,void 0,!0),Gi(T,[N])},onAppearCancelled(N){x(N,!0,void 0,!0),Gi(V,[N])},onLeaveCancelled(N){y(N),Gi(w,[N])}})}function M0(n){if(n==null)return null;if(mt(n))return[ca(n.enter),ca(n.leave)];{const e=ca(n);return[e,e]}}function ca(n){return Mp(n)}function Xn(n,e){e.split(/\s+/).forEach(t=>t&&n.classList.add(t)),(n[Ms]||(n[Ms]=new Set)).add(e)}function ki(n,e){e.split(/\s+/).forEach(i=>i&&n.classList.remove(i));const t=n[Ms];t&&(t.delete(e),t.size||(n[Ms]=void 0))}function _u(n){requestAnimationFrame(()=>{requestAnimationFrame(n)})}let E0=0;function vu(n,e,t,i){const r=n._endId=++E0,s=()=>{r===n._endId&&i()};if(t!=null)return setTimeout(s,t);const{type:o,timeout:a,propCount:l}=y0(n,e);if(!o)return i();const c=o+"end";let u=0;const f=()=>{n.removeEventListener(c,d),s()},d=h=>{h.target===n&&++u>=l&&f()};setTimeout(()=>{u<l&&f()},a+1),n.addEventListener(c,d)}function y0(n,e){const t=window.getComputedStyle(n),i=_=>(t[_]||"").split(", "),r=i(`${vi}Delay`),s=i(`${vi}Duration`),o=xu(r,s),a=i(`${$r}Delay`),l=i(`${$r}Duration`),c=xu(a,l);let u=null,f=0,d=0;e===vi?o>0&&(u=vi,f=o,d=s.length):e===$r?c>0&&(u=$r,f=c,d=l.length):(f=Math.max(o,c),u=f>0?o>c?vi:$r:null,d=u?u===vi?s.length:l.length:0);const h=u===vi&&/\b(?:transform|all)(?:,|$)/.test(i(`${vi}Property`).toString());return{type:u,timeout:f,propCount:d,hasTransform:h}}function xu(n,e){for(;n.length<e.length;)n=n.concat(n);return Math.max(...e.map((t,i)=>Su(t)+Su(n[i])))}function Su(n){return n==="auto"?0:Number(n.slice(0,-1).replace(",","."))*1e3}function Mu(n){return(n?n.ownerDocument:document).body.offsetHeight}function b0(n,e,t){const i=n[Ms];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const Eu=Symbol("_vod"),T0=Symbol("_vsh"),A0=Symbol(""),w0=/(?:^|;)\s*display\s*:/;function R0(n,e,t){const i=n.style,r=xt(t);let s=!1;if(t&&!r){if(e)if(xt(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();t[a]==null&&po(i,a,"")}else for(const o in e)t[o]==null&&po(i,o,"");for(const o in t)o==="display"&&(s=!0),po(i,o,t[o])}else if(r){if(e!==t){const o=i[A0];o&&(t+=";"+o),i.cssText=t,s=w0.test(t)}}else e&&n.removeAttribute("style");Eu in n&&(n[Eu]=s?i.display:"",n[T0]&&(i.display="none"))}const yu=/\s*!important$/;function po(n,e,t){if(He(t))t.forEach(i=>po(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=C0(n,e);yu.test(t)?n.setProperty(lr(i),t.replace(yu,""),"important"):n[i]=t}}const bu=["Webkit","Moz","ms"],ua={};function C0(n,e){const t=ua[e];if(t)return t;let i=pn(e);if(i!=="filter"&&i in n)return ua[e]=i;i=Uo(i);for(let r=0;r<bu.length;r++){const s=bu[r]+i;if(s in n)return ua[e]=s}return e}const Tu="http://www.w3.org/1999/xlink";function Au(n,e,t,i,r,s=wp(e)){i&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(Tu,e.slice(6,e.length)):n.setAttributeNS(Tu,e,t):t==null||s&&!Jf(t)?n.removeAttribute(e):n.setAttribute(e,s?"":mi(t)?String(t):t)}function wu(n,e,t,i,r){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?ah(t):t);return}const s=n.tagName;if(e==="value"&&s!=="PROGRESS"&&!s.includes("-")){const a=s==="OPTION"?n.getAttribute("value")||"":n.value,l=t==null?n.type==="checkbox"?"on":"":String(t);(a!==l||!("_value"in n))&&(n.value=l),t==null&&n.removeAttribute(e),n._value=t;return}let o=!1;if(t===""||t==null){const a=typeof n[e];a==="boolean"?t=Jf(t):t==null&&a==="string"?(t="",o=!0):a==="number"&&(t=0,o=!0)}try{n[e]=t}catch{}o&&n.removeAttribute(r||e)}function P0(n,e,t,i){n.addEventListener(e,t,i)}function D0(n,e,t,i){n.removeEventListener(e,t,i)}const Ru=Symbol("_vei");function I0(n,e,t,i,r=null){const s=n[Ru]||(n[Ru]={}),o=s[e];if(i&&o)o.value=i;else{const[a,l]=L0(e);if(i){const c=s[e]=F0(i,r);P0(n,a,c,l)}else o&&(D0(n,a,o,l),s[e]=void 0)}}const Cu=/(?:Once|Passive|Capture)$/;function L0(n){let e;if(Cu.test(n)){e={};let i;for(;i=n.match(Cu);)n=n.slice(0,n.length-i[0].length),e[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):lr(n.slice(2)),e]}let fa=0;const U0=Promise.resolve(),N0=()=>fa||(U0.then(()=>fa=0),fa=Date.now());function F0(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;An(O0(i,t.value),e,5,[i])};return t.value=n,t.attached=N0(),t}function O0(n,e){if(He(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(i=>r=>!r._stopped&&i&&i(r))}else return e}const Pu=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,B0=(n,e,t,i,r,s)=>{const o=r==="svg";e==="class"?b0(n,i,o):e==="style"?R0(n,t,i):Do(e)?lc(e)||I0(n,e,t,i,s):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):V0(n,e,i,o))?(wu(n,e,i),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Au(n,e,i,o,s,e!=="value")):n._isVueCE&&(/[A-Z]/.test(e)||!xt(i))?wu(n,pn(e),i,s,e):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),Au(n,e,i,o))};function V0(n,e,t,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in n&&Pu(e)&&We(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&n.tagName==="IFRAME"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=n.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return Pu(e)&&xt(t)?!1:e in n}const z0=["ctrl","shift","alt","meta"],H0={stop:n=>n.stopPropagation(),prevent:n=>n.preventDefault(),self:n=>n.target!==n.currentTarget,ctrl:n=>!n.ctrlKey,shift:n=>!n.shiftKey,alt:n=>!n.altKey,meta:n=>!n.metaKey,left:n=>"button"in n&&n.button!==0,middle:n=>"button"in n&&n.button!==1,right:n=>"button"in n&&n.button!==2,exact:(n,e)=>z0.some(t=>n[`${t}Key`]&&!e.includes(t))},G0=(n,e)=>{const t=n._withMods||(n._withMods={}),i=e.join(".");return t[i]||(t[i]=((r,...s)=>{for(let o=0;o<e.length;o++){const a=H0[e[o]];if(a&&a(r,e))return}return n(r,...s)}))},k0=Ct({patchProp:B0},g0);let Du;function W0(){return Du||(Du=Km(k0))}const X0=((...n)=>{const e=W0().createApp(...n),{mount:t}=e;return e.mount=i=>{const r=Y0(i);if(!r)return;const s=e._component;!We(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const o=t(r,!1,q0(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e});function q0(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function Y0(n){return xt(n)?document.querySelector(n):n}const Rc="182",$0=0,Iu=1,K0=2,mo=1,j0=2,rs=3,Oi=0,Qt=1,ni=2,ri=0,Ur=1,al=2,Lu=3,Uu=4,Z0=5,Qi=100,J0=101,Q0=102,eg=103,tg=104,ng=200,ig=201,rg=202,sg=203,ll=204,cl=205,og=206,ag=207,lg=208,cg=209,ug=210,fg=211,dg=212,hg=213,pg=214,ul=0,fl=1,dl=2,Or=3,hl=4,pl=5,ml=6,gl=7,ch=0,mg=1,gg=2,Vn=0,uh=1,fh=2,dh=3,hh=4,ph=5,mh=6,gh=7,_h=300,ar=301,Br=302,_l=303,vl=304,ko=306,xl=1e3,ii=1001,Sl=1002,Pt=1003,_g=1004,Hs=1005,Ot=1006,da=1007,tr=1008,dn=1009,vh=1010,xh=1011,Es=1012,Cc=1013,Hn=1014,Nn=1015,fi=1016,Pc=1017,Dc=1018,ys=1020,Sh=35902,Mh=35899,Eh=1021,yh=1022,yn=1023,di=1026,nr=1027,bh=1028,Ic=1029,Vr=1030,Lc=1031,Uc=1033,go=33776,_o=33777,vo=33778,xo=33779,Ml=35840,El=35841,yl=35842,bl=35843,Tl=36196,Al=37492,wl=37496,Rl=37488,Cl=37489,Pl=37490,Dl=37491,Il=37808,Ll=37809,Ul=37810,Nl=37811,Fl=37812,Ol=37813,Bl=37814,Vl=37815,zl=37816,Hl=37817,Gl=37818,kl=37819,Wl=37820,Xl=37821,ql=36492,Yl=36494,$l=36495,Kl=36283,jl=36284,Zl=36285,Jl=36286,vg=3200,xg=0,Sg=1,Ii="",un="srgb",zr="srgb-linear",Ro="linear",ot="srgb",hr=7680,Nu=519,Mg=512,Eg=513,yg=514,Nc=515,bg=516,Tg=517,Fc=518,Ag=519,Fu=35044,Ou="300 es",Fn=2e3,Co=2001;function Th(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Po(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function wg(){const n=Po("canvas");return n.style.display="block",n}const Bu={};function Vu(...n){const e="THREE."+n.shift();console.log(e,...n)}function ke(...n){const e="THREE."+n.shift();console.warn(e,...n)}function Qe(...n){const e="THREE."+n.shift();console.error(e,...n)}function bs(...n){const e=n.join(" ");e in Bu||(Bu[e]=!0,ke(...n))}function Rg(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}class Wr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Dt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ha=Math.PI/180,Ql=180/Math.PI;function Cs(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Dt[n&255]+Dt[n>>8&255]+Dt[n>>16&255]+Dt[n>>24&255]+"-"+Dt[e&255]+Dt[e>>8&255]+"-"+Dt[e>>16&15|64]+Dt[e>>24&255]+"-"+Dt[t&63|128]+Dt[t>>8&255]+"-"+Dt[t>>16&255]+Dt[t>>24&255]+Dt[i&255]+Dt[i>>8&255]+Dt[i>>16&255]+Dt[i>>24&255]).toLowerCase()}function Ke(n,e,t){return Math.max(e,Math.min(t,n))}function Cg(n,e){return(n%e+e)%e}function pa(n,e,t){return(1-t)*n+t*e}function Kr(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function jt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class ct{constructor(e=0,t=0){ct.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ke(this.x,e.x,t.x),this.y=Ke(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ke(this.x,e,t),this.y=Ke(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ke(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ke(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ps{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],f=i[r+3],d=s[o+0],h=s[o+1],_=s[o+2],v=s[o+3];if(a<=0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(a>=1){e[t+0]=d,e[t+1]=h,e[t+2]=_,e[t+3]=v;return}if(f!==v||l!==d||c!==h||u!==_){let m=l*d+c*h+u*_+f*v;m<0&&(d=-d,h=-h,_=-_,v=-v,m=-m);let p=1-a;if(m<.9995){const b=Math.acos(m),T=Math.sin(b);p=Math.sin(p*b)/T,a=Math.sin(a*b)/T,l=l*p+d*a,c=c*p+h*a,u=u*p+_*a,f=f*p+v*a}else{l=l*p+d*a,c=c*p+h*a,u=u*p+_*a,f=f*p+v*a;const b=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=b,c*=b,u*=b,f*=b}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],f=s[o],d=s[o+1],h=s[o+2],_=s[o+3];return e[t]=a*_+u*f+l*h-c*d,e[t+1]=l*_+u*d+c*f-a*h,e[t+2]=c*_+u*h+a*d-l*f,e[t+3]=u*_-a*f-l*d-c*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),f=a(s/2),d=l(i/2),h=l(r/2),_=l(s/2);switch(o){case"XYZ":this._x=d*u*f+c*h*_,this._y=c*h*f-d*u*_,this._z=c*u*_+d*h*f,this._w=c*u*f-d*h*_;break;case"YXZ":this._x=d*u*f+c*h*_,this._y=c*h*f-d*u*_,this._z=c*u*_-d*h*f,this._w=c*u*f+d*h*_;break;case"ZXY":this._x=d*u*f-c*h*_,this._y=c*h*f+d*u*_,this._z=c*u*_+d*h*f,this._w=c*u*f-d*h*_;break;case"ZYX":this._x=d*u*f-c*h*_,this._y=c*h*f+d*u*_,this._z=c*u*_-d*h*f,this._w=c*u*f+d*h*_;break;case"YZX":this._x=d*u*f+c*h*_,this._y=c*h*f+d*u*_,this._z=c*u*_-d*h*f,this._w=c*u*f-d*h*_;break;case"XZY":this._x=d*u*f-c*h*_,this._y=c*h*f-d*u*_,this._z=c*u*_+d*h*f,this._w=c*u*f+d*h*_;break;default:ke("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],f=t[10],d=i+a+f;if(d>0){const h=.5/Math.sqrt(d+1);this._w=.25/h,this._x=(u-l)*h,this._y=(s-c)*h,this._z=(o-r)*h}else if(i>a&&i>f){const h=2*Math.sqrt(1+i-a-f);this._w=(u-l)/h,this._x=.25*h,this._y=(r+o)/h,this._z=(s+c)/h}else if(a>f){const h=2*Math.sqrt(1+a-i-f);this._w=(s-c)/h,this._x=(r+o)/h,this._y=.25*h,this._z=(l+u)/h}else{const h=2*Math.sqrt(1+f-i-a);this._w=(o-r)/h,this._x=(s+c)/h,this._y=(l+u)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ke(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t<=0)return this;if(t>=1)return this.copy(e);let i=e._x,r=e._y,s=e._z,o=e._w,a=this.dot(e);a<0&&(i=-i,r=-r,s=-s,o=-o,a=-a);let l=1-t;if(a<.9995){const c=Math.acos(a),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+i*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Y{constructor(e=0,t=0,i=0){Y.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(zu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(zu.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),u=2*(a*t-s*r),f=2*(s*i-o*t);return this.x=t+l*c+o*f-a*u,this.y=i+l*u+a*c-s*f,this.z=r+l*f+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ke(this.x,e.x,t.x),this.y=Ke(this.y,e.y,t.y),this.z=Ke(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ke(this.x,e,t),this.y=Ke(this.y,e,t),this.z=Ke(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ke(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return ma.copy(this).projectOnVector(e),this.sub(ma)}reflect(e){return this.sub(ma.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ke(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ma=new Y,zu=new Ps;class qe{constructor(e,t,i,r,s,o,a,l,c){qe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c)}set(e,t,i,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],f=i[7],d=i[2],h=i[5],_=i[8],v=r[0],m=r[3],p=r[6],b=r[1],T=r[4],M=r[7],w=r[2],P=r[5],D=r[8];return s[0]=o*v+a*b+l*w,s[3]=o*m+a*T+l*P,s[6]=o*p+a*M+l*D,s[1]=c*v+u*b+f*w,s[4]=c*m+u*T+f*P,s[7]=c*p+u*M+f*D,s[2]=d*v+h*b+_*w,s[5]=d*m+h*T+_*P,s[8]=d*p+h*M+_*D,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=u*o-a*c,d=a*l-u*s,h=c*s-o*l,_=t*f+i*d+r*h;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/_;return e[0]=f*v,e[1]=(r*c-u*i)*v,e[2]=(a*i-r*o)*v,e[3]=d*v,e[4]=(u*t-r*l)*v,e[5]=(r*s-a*t)*v,e[6]=h*v,e[7]=(i*l-c*t)*v,e[8]=(o*t-i*s)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(ga.makeScale(e,t)),this}rotate(e){return this.premultiply(ga.makeRotation(-e)),this}translate(e,t){return this.premultiply(ga.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ga=new qe,Hu=new qe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Gu=new qe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Pg(){const n={enabled:!0,workingColorSpace:zr,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===ot&&(r.r=si(r.r),r.g=si(r.g),r.b=si(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ot&&(r.r=Nr(r.r),r.g=Nr(r.g),r.b=Nr(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Ii?Ro:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return bs("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return bs("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[zr]:{primaries:e,whitePoint:i,transfer:Ro,toXYZ:Hu,fromXYZ:Gu,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:un},outputColorSpaceConfig:{drawingBufferColorSpace:un}},[un]:{primaries:e,whitePoint:i,transfer:ot,toXYZ:Hu,fromXYZ:Gu,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:un}}}),n}const Ze=Pg();function si(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Nr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let pr;class Dg{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{pr===void 0&&(pr=Po("canvas")),pr.width=e.width,pr.height=e.height;const r=pr.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=pr}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Po("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=si(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(si(t[i]/255)*255):t[i]=si(t[i]);return{data:t,width:e.width,height:e.height}}else return ke("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Ig=0;class Oc{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ig++}),this.uuid=Cs(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(_a(r[o].image)):s.push(_a(r[o]))}else s=_a(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function _a(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Dg.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(ke("Texture: Unable to serialize Texture."),{})}let Lg=0;const va=new Y;class Yt extends Wr{constructor(e=Yt.DEFAULT_IMAGE,t=Yt.DEFAULT_MAPPING,i=ii,r=ii,s=Ot,o=tr,a=yn,l=dn,c=Yt.DEFAULT_ANISOTROPY,u=Ii){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Lg++}),this.uuid=Cs(),this.name="",this.source=new Oc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ct(0,0),this.repeat=new ct(1,1),this.center=new ct(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new qe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(va).x}get height(){return this.source.getSize(va).y}get depth(){return this.source.getSize(va).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){ke(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){ke(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==_h)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case xl:e.x=e.x-Math.floor(e.x);break;case ii:e.x=e.x<0?0:1;break;case Sl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case xl:e.y=e.y-Math.floor(e.y);break;case ii:e.y=e.y<0?0:1;break;case Sl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Yt.DEFAULT_IMAGE=null;Yt.DEFAULT_MAPPING=_h;Yt.DEFAULT_ANISOTROPY=1;class St{constructor(e=0,t=0,i=0,r=1){St.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],u=l[4],f=l[8],d=l[1],h=l[5],_=l[9],v=l[2],m=l[6],p=l[10];if(Math.abs(u-d)<.01&&Math.abs(f-v)<.01&&Math.abs(_-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(f+v)<.1&&Math.abs(_+m)<.1&&Math.abs(c+h+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const T=(c+1)/2,M=(h+1)/2,w=(p+1)/2,P=(u+d)/4,D=(f+v)/4,V=(_+m)/4;return T>M&&T>w?T<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(T),r=P/i,s=D/i):M>w?M<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(M),i=P/r,s=V/r):w<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(w),i=D/s,r=V/s),this.set(i,r,s,t),this}let b=Math.sqrt((m-_)*(m-_)+(f-v)*(f-v)+(d-u)*(d-u));return Math.abs(b)<.001&&(b=1),this.x=(m-_)/b,this.y=(f-v)/b,this.z=(d-u)/b,this.w=Math.acos((c+h+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ke(this.x,e.x,t.x),this.y=Ke(this.y,e.y,t.y),this.z=Ke(this.z,e.z,t.z),this.w=Ke(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ke(this.x,e,t),this.y=Ke(this.y,e,t),this.z=Ke(this.z,e,t),this.w=Ke(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ke(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ug extends Wr{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ot,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new St(0,0,e,t),this.scissorTest=!1,this.viewport=new St(0,0,e,t);const r={width:e,height:t,depth:i.depth},s=new Yt(r);this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:Ot,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new Oc(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class zn extends Ug{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Ah extends Yt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Pt,this.minFilter=Pt,this.wrapR=ii,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Ng extends Yt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Pt,this.minFilter=Pt,this.wrapR=ii,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ds{constructor(e=new Y(1/0,1/0,1/0),t=new Y(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(mn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(mn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=mn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,mn):mn.fromBufferAttribute(s,o),mn.applyMatrix4(e.matrixWorld),this.expandByPoint(mn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Gs.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Gs.copy(i.boundingBox)),Gs.applyMatrix4(e.matrixWorld),this.union(Gs)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,mn),mn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(jr),ks.subVectors(this.max,jr),mr.subVectors(e.a,jr),gr.subVectors(e.b,jr),_r.subVectors(e.c,jr),xi.subVectors(gr,mr),Si.subVectors(_r,gr),Wi.subVectors(mr,_r);let t=[0,-xi.z,xi.y,0,-Si.z,Si.y,0,-Wi.z,Wi.y,xi.z,0,-xi.x,Si.z,0,-Si.x,Wi.z,0,-Wi.x,-xi.y,xi.x,0,-Si.y,Si.x,0,-Wi.y,Wi.x,0];return!xa(t,mr,gr,_r,ks)||(t=[1,0,0,0,1,0,0,0,1],!xa(t,mr,gr,_r,ks))?!1:(Ws.crossVectors(xi,Si),t=[Ws.x,Ws.y,Ws.z],xa(t,mr,gr,_r,ks))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,mn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(mn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(qn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),qn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),qn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),qn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),qn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),qn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),qn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),qn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(qn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const qn=[new Y,new Y,new Y,new Y,new Y,new Y,new Y,new Y],mn=new Y,Gs=new Ds,mr=new Y,gr=new Y,_r=new Y,xi=new Y,Si=new Y,Wi=new Y,jr=new Y,ks=new Y,Ws=new Y,Xi=new Y;function xa(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){Xi.fromArray(n,s);const a=r.x*Math.abs(Xi.x)+r.y*Math.abs(Xi.y)+r.z*Math.abs(Xi.z),l=e.dot(Xi),c=t.dot(Xi),u=i.dot(Xi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const Fg=new Ds,Zr=new Y,Sa=new Y;class Wo{constructor(e=new Y,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Fg.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Zr.subVectors(e,this.center);const t=Zr.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Zr,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Sa.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Zr.copy(e.center).add(Sa)),this.expandByPoint(Zr.copy(e.center).sub(Sa))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Yn=new Y,Ma=new Y,Xs=new Y,Mi=new Y,Ea=new Y,qs=new Y,ya=new Y;class wh{constructor(e=new Y,t=new Y(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Yn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Yn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Yn.copy(this.origin).addScaledVector(this.direction,t),Yn.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Ma.copy(e).add(t).multiplyScalar(.5),Xs.copy(t).sub(e).normalize(),Mi.copy(this.origin).sub(Ma);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Xs),a=Mi.dot(this.direction),l=-Mi.dot(Xs),c=Mi.lengthSq(),u=Math.abs(1-o*o);let f,d,h,_;if(u>0)if(f=o*l-a,d=o*a-l,_=s*u,f>=0)if(d>=-_)if(d<=_){const v=1/u;f*=v,d*=v,h=f*(f+o*d+2*a)+d*(o*f+d+2*l)+c}else d=s,f=Math.max(0,-(o*d+a)),h=-f*f+d*(d+2*l)+c;else d=-s,f=Math.max(0,-(o*d+a)),h=-f*f+d*(d+2*l)+c;else d<=-_?(f=Math.max(0,-(-o*s+a)),d=f>0?-s:Math.min(Math.max(-s,-l),s),h=-f*f+d*(d+2*l)+c):d<=_?(f=0,d=Math.min(Math.max(-s,-l),s),h=d*(d+2*l)+c):(f=Math.max(0,-(o*s+a)),d=f>0?s:Math.min(Math.max(-s,-l),s),h=-f*f+d*(d+2*l)+c);else d=o>0?-s:s,f=Math.max(0,-(o*d+a)),h=-f*f+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Ma).addScaledVector(Xs,d),h}intersectSphere(e,t){Yn.subVectors(e.center,this.origin);const i=Yn.dot(this.direction),r=Yn.dot(Yn)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),u>=0?(s=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(a=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Yn)!==null}intersectTriangle(e,t,i,r,s){Ea.subVectors(t,e),qs.subVectors(i,e),ya.crossVectors(Ea,qs);let o=this.direction.dot(ya),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Mi.subVectors(this.origin,e);const l=a*this.direction.dot(qs.crossVectors(Mi,qs));if(l<0)return null;const c=a*this.direction.dot(Ea.cross(Mi));if(c<0||l+c>o)return null;const u=-a*Mi.dot(ya);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Mt{constructor(e,t,i,r,s,o,a,l,c,u,f,d,h,_,v,m){Mt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c,u,f,d,h,_,v,m)}set(e,t,i,r,s,o,a,l,c,u,f,d,h,_,v,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=r,p[1]=s,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=f,p[14]=d,p[3]=h,p[7]=_,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Mt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,i=e.elements,r=1/vr.setFromMatrixColumn(e,0).length(),s=1/vr.setFromMatrixColumn(e,1).length(),o=1/vr.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const d=o*u,h=o*f,_=a*u,v=a*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=h+_*c,t[5]=d-v*c,t[9]=-a*l,t[2]=v-d*c,t[6]=_+h*c,t[10]=o*l}else if(e.order==="YXZ"){const d=l*u,h=l*f,_=c*u,v=c*f;t[0]=d+v*a,t[4]=_*a-h,t[8]=o*c,t[1]=o*f,t[5]=o*u,t[9]=-a,t[2]=h*a-_,t[6]=v+d*a,t[10]=o*l}else if(e.order==="ZXY"){const d=l*u,h=l*f,_=c*u,v=c*f;t[0]=d-v*a,t[4]=-o*f,t[8]=_+h*a,t[1]=h+_*a,t[5]=o*u,t[9]=v-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const d=o*u,h=o*f,_=a*u,v=a*f;t[0]=l*u,t[4]=_*c-h,t[8]=d*c+v,t[1]=l*f,t[5]=v*c+d,t[9]=h*c-_,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const d=o*l,h=o*c,_=a*l,v=a*c;t[0]=l*u,t[4]=v-d*f,t[8]=_*f+h,t[1]=f,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=h*f+_,t[10]=d-v*f}else if(e.order==="XZY"){const d=o*l,h=o*c,_=a*l,v=a*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=d*f+v,t[5]=o*u,t[9]=h*f-_,t[2]=_*f-h,t[6]=a*u,t[10]=v*f+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Og,e,Bg)}lookAt(e,t,i){const r=this.elements;return rn.subVectors(e,t),rn.lengthSq()===0&&(rn.z=1),rn.normalize(),Ei.crossVectors(i,rn),Ei.lengthSq()===0&&(Math.abs(i.z)===1?rn.x+=1e-4:rn.z+=1e-4,rn.normalize(),Ei.crossVectors(i,rn)),Ei.normalize(),Ys.crossVectors(rn,Ei),r[0]=Ei.x,r[4]=Ys.x,r[8]=rn.x,r[1]=Ei.y,r[5]=Ys.y,r[9]=rn.y,r[2]=Ei.z,r[6]=Ys.z,r[10]=rn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],f=i[5],d=i[9],h=i[13],_=i[2],v=i[6],m=i[10],p=i[14],b=i[3],T=i[7],M=i[11],w=i[15],P=r[0],D=r[4],V=r[8],x=r[12],y=r[1],L=r[5],N=r[9],z=r[13],ne=r[2],te=r[6],K=r[10],H=r[14],ee=r[3],ve=r[7],ge=r[11],Se=r[15];return s[0]=o*P+a*y+l*ne+c*ee,s[4]=o*D+a*L+l*te+c*ve,s[8]=o*V+a*N+l*K+c*ge,s[12]=o*x+a*z+l*H+c*Se,s[1]=u*P+f*y+d*ne+h*ee,s[5]=u*D+f*L+d*te+h*ve,s[9]=u*V+f*N+d*K+h*ge,s[13]=u*x+f*z+d*H+h*Se,s[2]=_*P+v*y+m*ne+p*ee,s[6]=_*D+v*L+m*te+p*ve,s[10]=_*V+v*N+m*K+p*ge,s[14]=_*x+v*z+m*H+p*Se,s[3]=b*P+T*y+M*ne+w*ee,s[7]=b*D+T*L+M*te+w*ve,s[11]=b*V+T*N+M*K+w*ge,s[15]=b*x+T*z+M*H+w*Se,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],f=e[6],d=e[10],h=e[14],_=e[3],v=e[7],m=e[11],p=e[15],b=l*h-c*d,T=a*h-c*f,M=a*d-l*f,w=o*h-c*u,P=o*d-l*u,D=o*f-a*u;return t*(v*b-m*T+p*M)-i*(_*b-m*w+p*P)+r*(_*T-v*w+p*D)-s*(_*M-v*P+m*D)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=e[9],d=e[10],h=e[11],_=e[12],v=e[13],m=e[14],p=e[15],b=f*m*c-v*d*c+v*l*h-a*m*h-f*l*p+a*d*p,T=_*d*c-u*m*c-_*l*h+o*m*h+u*l*p-o*d*p,M=u*v*c-_*f*c+_*a*h-o*v*h-u*a*p+o*f*p,w=_*f*l-u*v*l-_*a*d+o*v*d+u*a*m-o*f*m,P=t*b+i*T+r*M+s*w;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const D=1/P;return e[0]=b*D,e[1]=(v*d*s-f*m*s-v*r*h+i*m*h+f*r*p-i*d*p)*D,e[2]=(a*m*s-v*l*s+v*r*c-i*m*c-a*r*p+i*l*p)*D,e[3]=(f*l*s-a*d*s-f*r*c+i*d*c+a*r*h-i*l*h)*D,e[4]=T*D,e[5]=(u*m*s-_*d*s+_*r*h-t*m*h-u*r*p+t*d*p)*D,e[6]=(_*l*s-o*m*s-_*r*c+t*m*c+o*r*p-t*l*p)*D,e[7]=(o*d*s-u*l*s+u*r*c-t*d*c-o*r*h+t*l*h)*D,e[8]=M*D,e[9]=(_*f*s-u*v*s-_*i*h+t*v*h+u*i*p-t*f*p)*D,e[10]=(o*v*s-_*a*s+_*i*c-t*v*c-o*i*p+t*a*p)*D,e[11]=(u*a*s-o*f*s-u*i*c+t*f*c+o*i*h-t*a*h)*D,e[12]=w*D,e[13]=(u*v*r-_*f*r+_*i*d-t*v*d-u*i*m+t*f*m)*D,e[14]=(_*a*r-o*v*r-_*i*l+t*v*l+o*i*m-t*a*m)*D,e[15]=(o*f*r-u*a*r+u*i*l-t*f*l-o*i*d+t*a*d)*D,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,f=a+a,d=s*c,h=s*u,_=s*f,v=o*u,m=o*f,p=a*f,b=l*c,T=l*u,M=l*f,w=i.x,P=i.y,D=i.z;return r[0]=(1-(v+p))*w,r[1]=(h+M)*w,r[2]=(_-T)*w,r[3]=0,r[4]=(h-M)*P,r[5]=(1-(d+p))*P,r[6]=(m+b)*P,r[7]=0,r[8]=(_+T)*D,r[9]=(m-b)*D,r[10]=(1-(d+v))*D,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;if(e.x=r[12],e.y=r[13],e.z=r[14],this.determinant()===0)return i.set(1,1,1),t.identity(),this;let s=vr.set(r[0],r[1],r[2]).length();const o=vr.set(r[4],r[5],r[6]).length(),a=vr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),gn.copy(this);const c=1/s,u=1/o,f=1/a;return gn.elements[0]*=c,gn.elements[1]*=c,gn.elements[2]*=c,gn.elements[4]*=u,gn.elements[5]*=u,gn.elements[6]*=u,gn.elements[8]*=f,gn.elements[9]*=f,gn.elements[10]*=f,t.setFromRotationMatrix(gn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=Fn,l=!1){const c=this.elements,u=2*s/(t-e),f=2*s/(i-r),d=(t+e)/(t-e),h=(i+r)/(i-r);let _,v;if(l)_=s/(o-s),v=o*s/(o-s);else if(a===Fn)_=-(o+s)/(o-s),v=-2*o*s/(o-s);else if(a===Co)_=-o/(o-s),v=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=f,c[9]=h,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=Fn,l=!1){const c=this.elements,u=2/(t-e),f=2/(i-r),d=-(t+e)/(t-e),h=-(i+r)/(i-r);let _,v;if(l)_=1/(o-s),v=o/(o-s);else if(a===Fn)_=-2/(o-s),v=-(o+s)/(o-s);else if(a===Co)_=-1/(o-s),v=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=f,c[9]=0,c[13]=h,c[2]=0,c[6]=0,c[10]=_,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const vr=new Y,gn=new Mt,Og=new Y(0,0,0),Bg=new Y(1,1,1),Ei=new Y,Ys=new Y,rn=new Y,ku=new Mt,Wu=new Ps;class hi{constructor(e=0,t=0,i=0,r=hi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],f=r[2],d=r[6],h=r[10];switch(t){case"XYZ":this._y=Math.asin(Ke(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,h),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ke(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,h),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ke(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,h),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Ke(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,h),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ke(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,h));break;case"XZY":this._z=Math.asin(-Ke(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,h),this._y=0);break;default:ke("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return ku.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ku,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Wu.setFromEuler(this),this.setFromQuaternion(Wu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}hi.DEFAULT_ORDER="XYZ";class Rh{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Vg=0;const Xu=new Y,xr=new Ps,$n=new Mt,$s=new Y,Jr=new Y,zg=new Y,Hg=new Ps,qu=new Y(1,0,0),Yu=new Y(0,1,0),$u=new Y(0,0,1),Ku={type:"added"},Gg={type:"removed"},Sr={type:"childadded",child:null},ba={type:"childremoved",child:null};class en extends Wr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Vg++}),this.uuid=Cs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=en.DEFAULT_UP.clone();const e=new Y,t=new hi,i=new Ps,r=new Y(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Mt},normalMatrix:{value:new qe}}),this.matrix=new Mt,this.matrixWorld=new Mt,this.matrixAutoUpdate=en.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=en.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Rh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return xr.setFromAxisAngle(e,t),this.quaternion.multiply(xr),this}rotateOnWorldAxis(e,t){return xr.setFromAxisAngle(e,t),this.quaternion.premultiply(xr),this}rotateX(e){return this.rotateOnAxis(qu,e)}rotateY(e){return this.rotateOnAxis(Yu,e)}rotateZ(e){return this.rotateOnAxis($u,e)}translateOnAxis(e,t){return Xu.copy(e).applyQuaternion(this.quaternion),this.position.add(Xu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(qu,e)}translateY(e){return this.translateOnAxis(Yu,e)}translateZ(e){return this.translateOnAxis($u,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4($n.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?$s.copy(e):$s.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Jr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?$n.lookAt(Jr,$s,this.up):$n.lookAt($s,Jr,this.up),this.quaternion.setFromRotationMatrix($n),r&&($n.extractRotation(r.matrixWorld),xr.setFromRotationMatrix($n),this.quaternion.premultiply(xr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Qe("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ku),Sr.child=e,this.dispatchEvent(Sr),Sr.child=null):Qe("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Gg),ba.child=e,this.dispatchEvent(ba),ba.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),$n.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),$n.multiply(e.parent.matrixWorld)),e.applyMatrix4($n),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ku),Sr.child=e,this.dispatchEvent(Sr),Sr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Jr,e,zg),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Jr,Hg,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),d=o(e.skeletons),h=o(e.animations),_=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),d.length>0&&(i.skeletons=d),h.length>0&&(i.animations=h),_.length>0&&(i.nodes=_)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}en.DEFAULT_UP=new Y(0,1,0);en.DEFAULT_MATRIX_AUTO_UPDATE=!0;en.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const _n=new Y,Kn=new Y,Ta=new Y,jn=new Y,Mr=new Y,Er=new Y,ju=new Y,Aa=new Y,wa=new Y,Ra=new Y,Ca=new St,Pa=new St,Da=new St;class Mn{constructor(e=new Y,t=new Y,i=new Y){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),_n.subVectors(e,t),r.cross(_n);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){_n.subVectors(r,t),Kn.subVectors(i,t),Ta.subVectors(e,t);const o=_n.dot(_n),a=_n.dot(Kn),l=_n.dot(Ta),c=Kn.dot(Kn),u=Kn.dot(Ta),f=o*c-a*a;if(f===0)return s.set(0,0,0),null;const d=1/f,h=(c*l-a*u)*d,_=(o*u-a*l)*d;return s.set(1-h-_,_,h)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,jn)===null?!1:jn.x>=0&&jn.y>=0&&jn.x+jn.y<=1}static getInterpolation(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,jn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,jn.x),l.addScaledVector(o,jn.y),l.addScaledVector(a,jn.z),l)}static getInterpolatedAttribute(e,t,i,r,s,o){return Ca.setScalar(0),Pa.setScalar(0),Da.setScalar(0),Ca.fromBufferAttribute(e,t),Pa.fromBufferAttribute(e,i),Da.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(Ca,s.x),o.addScaledVector(Pa,s.y),o.addScaledVector(Da,s.z),o}static isFrontFacing(e,t,i,r){return _n.subVectors(i,t),Kn.subVectors(e,t),_n.cross(Kn).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return _n.subVectors(this.c,this.b),Kn.subVectors(this.a,this.b),_n.cross(Kn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Mn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Mn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return Mn.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return Mn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Mn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;Mr.subVectors(r,i),Er.subVectors(s,i),Aa.subVectors(e,i);const l=Mr.dot(Aa),c=Er.dot(Aa);if(l<=0&&c<=0)return t.copy(i);wa.subVectors(e,r);const u=Mr.dot(wa),f=Er.dot(wa);if(u>=0&&f<=u)return t.copy(r);const d=l*f-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector(Mr,o);Ra.subVectors(e,s);const h=Mr.dot(Ra),_=Er.dot(Ra);if(_>=0&&h<=_)return t.copy(s);const v=h*c-l*_;if(v<=0&&c>=0&&_<=0)return a=c/(c-_),t.copy(i).addScaledVector(Er,a);const m=u*_-h*f;if(m<=0&&f-u>=0&&h-_>=0)return ju.subVectors(s,r),a=(f-u)/(f-u+(h-_)),t.copy(r).addScaledVector(ju,a);const p=1/(m+v+d);return o=v*p,a=d*p,t.copy(i).addScaledVector(Mr,o).addScaledVector(Er,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Ch={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},yi={h:0,s:0,l:0},Ks={h:0,s:0,l:0};function Ia(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class at{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=un){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ze.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=Ze.workingColorSpace){return this.r=e,this.g=t,this.b=i,Ze.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=Ze.workingColorSpace){if(e=Cg(e,1),t=Ke(t,0,1),i=Ke(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=Ia(o,s,e+1/3),this.g=Ia(o,s,e),this.b=Ia(o,s,e-1/3)}return Ze.colorSpaceToWorking(this,r),this}setStyle(e,t=un){function i(s){s!==void 0&&parseFloat(s)<1&&ke("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:ke("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);ke("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=un){const i=Ch[e.toLowerCase()];return i!==void 0?this.setHex(i,t):ke("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=si(e.r),this.g=si(e.g),this.b=si(e.b),this}copyLinearToSRGB(e){return this.r=Nr(e.r),this.g=Nr(e.g),this.b=Nr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=un){return Ze.workingToColorSpace(It.copy(this),e),Math.round(Ke(It.r*255,0,255))*65536+Math.round(Ke(It.g*255,0,255))*256+Math.round(Ke(It.b*255,0,255))}getHexString(e=un){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ze.workingColorSpace){Ze.workingToColorSpace(It.copy(this),t);const i=It.r,r=It.g,s=It.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Ze.workingColorSpace){return Ze.workingToColorSpace(It.copy(this),t),e.r=It.r,e.g=It.g,e.b=It.b,e}getStyle(e=un){Ze.workingToColorSpace(It.copy(this),e);const t=It.r,i=It.g,r=It.b;return e!==un?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(yi),this.setHSL(yi.h+e,yi.s+t,yi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(yi),e.getHSL(Ks);const i=pa(yi.h,Ks.h,t),r=pa(yi.s,Ks.s,t),s=pa(yi.l,Ks.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const It=new at;at.NAMES=Ch;let kg=0;class Is extends Wr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:kg++}),this.uuid=Cs(),this.name="",this.type="Material",this.blending=Ur,this.side=Oi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ll,this.blendDst=cl,this.blendEquation=Qi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new at(0,0,0),this.blendAlpha=0,this.depthFunc=Or,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Nu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=hr,this.stencilZFail=hr,this.stencilZPass=hr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){ke(`Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){ke(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ur&&(i.blending=this.blending),this.side!==Oi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==ll&&(i.blendSrc=this.blendSrc),this.blendDst!==cl&&(i.blendDst=this.blendDst),this.blendEquation!==Qi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Or&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Nu&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==hr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==hr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==hr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Ph extends Is{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new at(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new hi,this.combine=ch,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Et=new Y,js=new ct;let Wg=0;class Xt{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Wg++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Fu,this.updateRanges=[],this.gpuType=Nn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)js.fromBufferAttribute(this,t),js.applyMatrix3(e),this.setXY(t,js.x,js.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Et.fromBufferAttribute(this,t),Et.applyMatrix3(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Et.fromBufferAttribute(this,t),Et.applyMatrix4(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Et.fromBufferAttribute(this,t),Et.applyNormalMatrix(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Et.fromBufferAttribute(this,t),Et.transformDirection(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Kr(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=jt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Kr(t,this.array)),t}setX(e,t){return this.normalized&&(t=jt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Kr(t,this.array)),t}setY(e,t){return this.normalized&&(t=jt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Kr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=jt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Kr(t,this.array)),t}setW(e,t){return this.normalized&&(t=jt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=jt(t,this.array),i=jt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=jt(t,this.array),i=jt(i,this.array),r=jt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=jt(t,this.array),i=jt(i,this.array),r=jt(r,this.array),s=jt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Fu&&(e.usage=this.usage),e}}class Dh extends Xt{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Ih extends Xt{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class oi extends Xt{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Xg=0;const cn=new Mt,La=new en,yr=new Y,sn=new Ds,Qr=new Ds,Rt=new Y;class Rn extends Wr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Xg++}),this.uuid=Cs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Th(e)?Ih:Dh)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new qe().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return cn.makeRotationFromQuaternion(e),this.applyMatrix4(cn),this}rotateX(e){return cn.makeRotationX(e),this.applyMatrix4(cn),this}rotateY(e){return cn.makeRotationY(e),this.applyMatrix4(cn),this}rotateZ(e){return cn.makeRotationZ(e),this.applyMatrix4(cn),this}translate(e,t,i){return cn.makeTranslation(e,t,i),this.applyMatrix4(cn),this}scale(e,t,i){return cn.makeScale(e,t,i),this.applyMatrix4(cn),this}lookAt(e){return La.lookAt(e),La.updateMatrix(),this.applyMatrix4(La.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(yr).negate(),this.translate(yr.x,yr.y,yr.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new oi(i,3))}else{const i=Math.min(e.length,t.count);for(let r=0;r<i;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&ke("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ds);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Qe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Y(-1/0,-1/0,-1/0),new Y(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];sn.setFromBufferAttribute(s),this.morphTargetsRelative?(Rt.addVectors(this.boundingBox.min,sn.min),this.boundingBox.expandByPoint(Rt),Rt.addVectors(this.boundingBox.max,sn.max),this.boundingBox.expandByPoint(Rt)):(this.boundingBox.expandByPoint(sn.min),this.boundingBox.expandByPoint(sn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Qe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Wo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Qe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Y,1/0);return}if(e){const i=this.boundingSphere.center;if(sn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Qr.setFromBufferAttribute(a),this.morphTargetsRelative?(Rt.addVectors(sn.min,Qr.min),sn.expandByPoint(Rt),Rt.addVectors(sn.max,Qr.max),sn.expandByPoint(Rt)):(sn.expandByPoint(Qr.min),sn.expandByPoint(Qr.max))}sn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Rt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Rt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Rt.fromBufferAttribute(a,c),l&&(yr.fromBufferAttribute(e,c),Rt.add(yr)),r=Math.max(r,i.distanceToSquared(Rt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&Qe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Qe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Xt(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let V=0;V<i.count;V++)a[V]=new Y,l[V]=new Y;const c=new Y,u=new Y,f=new Y,d=new ct,h=new ct,_=new ct,v=new Y,m=new Y;function p(V,x,y){c.fromBufferAttribute(i,V),u.fromBufferAttribute(i,x),f.fromBufferAttribute(i,y),d.fromBufferAttribute(s,V),h.fromBufferAttribute(s,x),_.fromBufferAttribute(s,y),u.sub(c),f.sub(c),h.sub(d),_.sub(d);const L=1/(h.x*_.y-_.x*h.y);isFinite(L)&&(v.copy(u).multiplyScalar(_.y).addScaledVector(f,-h.y).multiplyScalar(L),m.copy(f).multiplyScalar(h.x).addScaledVector(u,-_.x).multiplyScalar(L),a[V].add(v),a[x].add(v),a[y].add(v),l[V].add(m),l[x].add(m),l[y].add(m))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let V=0,x=b.length;V<x;++V){const y=b[V],L=y.start,N=y.count;for(let z=L,ne=L+N;z<ne;z+=3)p(e.getX(z+0),e.getX(z+1),e.getX(z+2))}const T=new Y,M=new Y,w=new Y,P=new Y;function D(V){w.fromBufferAttribute(r,V),P.copy(w);const x=a[V];T.copy(x),T.sub(w.multiplyScalar(w.dot(x))).normalize(),M.crossVectors(P,x);const L=M.dot(l[V])<0?-1:1;o.setXYZW(V,T.x,T.y,T.z,L)}for(let V=0,x=b.length;V<x;++V){const y=b[V],L=y.start,N=y.count;for(let z=L,ne=L+N;z<ne;z+=3)D(e.getX(z+0)),D(e.getX(z+1)),D(e.getX(z+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Xt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,h=i.count;d<h;d++)i.setXYZ(d,0,0,0);const r=new Y,s=new Y,o=new Y,a=new Y,l=new Y,c=new Y,u=new Y,f=new Y;if(e)for(let d=0,h=e.count;d<h;d+=3){const _=e.getX(d+0),v=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,_),s.fromBufferAttribute(t,v),o.fromBufferAttribute(t,m),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),a.fromBufferAttribute(i,_),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,h=t.count;d<h;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Rt.fromBufferAttribute(e,t),Rt.normalize(),e.setXYZ(t,Rt.x,Rt.y,Rt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,f=a.normalized,d=new c.constructor(l.length*u);let h=0,_=0;for(let v=0,m=l.length;v<m;v++){a.isInterleavedBufferAttribute?h=l[v]*a.data.stride+a.offset:h=l[v]*u;for(let p=0;p<u;p++)d[_++]=c[h++]}return new Xt(d,u,f)}if(this.index===null)return ke("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Rn,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,f=c.length;u<f;u++){const d=c[u],h=e(d,i);l.push(h)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,d=c.length;f<d;f++){const h=c[f];u.push(h.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let d=0,h=f.length;d<h;d++)u.push(f[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Zu=new Mt,qi=new wh,Zs=new Wo,Ju=new Y,Js=new Y,Qs=new Y,eo=new Y,Ua=new Y,to=new Y,Qu=new Y,no=new Y;class pi extends en{constructor(e=new Rn,t=new Ph){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){to.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],f=s[l];u!==0&&(Ua.fromBufferAttribute(f,e),o?to.addScaledVector(Ua,u):to.addScaledVector(Ua.sub(t),u))}t.add(to)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Zs.copy(i.boundingSphere),Zs.applyMatrix4(s),qi.copy(e.ray).recast(e.near),!(Zs.containsPoint(qi.origin)===!1&&(qi.intersectSphere(Zs,Ju)===null||qi.origin.distanceToSquared(Ju)>(e.far-e.near)**2))&&(Zu.copy(s).invert(),qi.copy(e.ray).applyMatrix4(Zu),!(i.boundingBox!==null&&qi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,qi)))}_computeIntersections(e,t,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,d=s.groups,h=s.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,v=d.length;_<v;_++){const m=d[_],p=o[m.materialIndex],b=Math.max(m.start,h.start),T=Math.min(a.count,Math.min(m.start+m.count,h.start+h.count));for(let M=b,w=T;M<w;M+=3){const P=a.getX(M),D=a.getX(M+1),V=a.getX(M+2);r=io(this,p,e,i,c,u,f,P,D,V),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const _=Math.max(0,h.start),v=Math.min(a.count,h.start+h.count);for(let m=_,p=v;m<p;m+=3){const b=a.getX(m),T=a.getX(m+1),M=a.getX(m+2);r=io(this,o,e,i,c,u,f,b,T,M),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,v=d.length;_<v;_++){const m=d[_],p=o[m.materialIndex],b=Math.max(m.start,h.start),T=Math.min(l.count,Math.min(m.start+m.count,h.start+h.count));for(let M=b,w=T;M<w;M+=3){const P=M,D=M+1,V=M+2;r=io(this,p,e,i,c,u,f,P,D,V),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const _=Math.max(0,h.start),v=Math.min(l.count,h.start+h.count);for(let m=_,p=v;m<p;m+=3){const b=m,T=m+1,M=m+2;r=io(this,o,e,i,c,u,f,b,T,M),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function qg(n,e,t,i,r,s,o,a){let l;if(e.side===Qt?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Oi,a),l===null)return null;no.copy(a),no.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(no);return c<t.near||c>t.far?null:{distance:c,point:no.clone(),object:n}}function io(n,e,t,i,r,s,o,a,l,c){n.getVertexPosition(a,Js),n.getVertexPosition(l,Qs),n.getVertexPosition(c,eo);const u=qg(n,e,t,i,Js,Qs,eo,Qu);if(u){const f=new Y;Mn.getBarycoord(Qu,Js,Qs,eo,f),r&&(u.uv=Mn.getInterpolatedAttribute(r,a,l,c,f,new ct)),s&&(u.uv1=Mn.getInterpolatedAttribute(s,a,l,c,f,new ct)),o&&(u.normal=Mn.getInterpolatedAttribute(o,a,l,c,f,new Y),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new Y,materialIndex:0};Mn.getNormal(Js,Qs,eo,d.normal),u.face=d,u.barycoord=f}return u}class Ls extends Rn{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],f=[];let d=0,h=0;_("z","y","x",-1,-1,i,t,e,o,s,0),_("z","y","x",1,-1,i,t,-e,o,s,1),_("x","z","y",1,1,e,i,t,r,o,2),_("x","z","y",1,-1,e,i,-t,r,o,3),_("x","y","z",1,-1,e,t,i,r,s,4),_("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new oi(c,3)),this.setAttribute("normal",new oi(u,3)),this.setAttribute("uv",new oi(f,2));function _(v,m,p,b,T,M,w,P,D,V,x){const y=M/D,L=w/V,N=M/2,z=w/2,ne=P/2,te=D+1,K=V+1;let H=0,ee=0;const ve=new Y;for(let ge=0;ge<K;ge++){const Se=ge*L-z;for(let Fe=0;Fe<te;Fe++){const ze=Fe*y-N;ve[v]=ze*b,ve[m]=Se*T,ve[p]=ne,c.push(ve.x,ve.y,ve.z),ve[v]=0,ve[m]=0,ve[p]=P>0?1:-1,u.push(ve.x,ve.y,ve.z),f.push(Fe/D),f.push(1-ge/V),H+=1}}for(let ge=0;ge<V;ge++)for(let Se=0;Se<D;Se++){const Fe=d+Se+te*ge,ze=d+Se+te*(ge+1),tt=d+(Se+1)+te*(ge+1),je=d+(Se+1)+te*ge;l.push(Fe,ze,je),l.push(ze,tt,je),ee+=6}a.addGroup(h,ee,x),h+=ee,d+=H}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ls(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Hr(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(ke("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Ht(n){const e={};for(let t=0;t<n.length;t++){const i=Hr(n[t]);for(const r in i)e[r]=i[r]}return e}function Yg(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Lh(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ze.workingColorSpace}const $g={clone:Hr,merge:Ht};var Kg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,jg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Gn extends Is{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Kg,this.fragmentShader=jg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Hr(e.uniforms),this.uniformsGroups=Yg(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Uh extends en{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Mt,this.projectionMatrix=new Mt,this.projectionMatrixInverse=new Mt,this.coordinateSystem=Fn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const bi=new Y,ef=new ct,tf=new ct;class fn extends Uh{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ql*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ha*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ql*2*Math.atan(Math.tan(ha*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){bi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(bi.x,bi.y).multiplyScalar(-e/bi.z),bi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(bi.x,bi.y).multiplyScalar(-e/bi.z)}getViewSize(e,t){return this.getViewBounds(e,ef,tf),t.subVectors(tf,ef)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ha*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const br=-90,Tr=1;class Zg extends en{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new fn(br,Tr,e,t);r.layers=this.layers,this.add(r);const s=new fn(br,Tr,e,t);s.layers=this.layers,this.add(s);const o=new fn(br,Tr,e,t);o.layers=this.layers,this.add(o);const a=new fn(br,Tr,e,t);a.layers=this.layers,this.add(a);const l=new fn(br,Tr,e,t);l.layers=this.layers,this.add(l);const c=new fn(br,Tr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===Fn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Co)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,c),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(f,d,h),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class Nh extends Yt{constructor(e=[],t=ar,i,r,s,o,a,l,c,u){super(e,t,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Fh extends zn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Nh(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Ls(5,5,5),s=new Gn({name:"CubemapFromEquirect",uniforms:Hr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Qt,blending:ri});s.uniforms.tEquirect.value=t;const o=new pi(r,s),a=t.minFilter;return t.minFilter===tr&&(t.minFilter=Ot),new Zg(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}class ro extends en{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Jg={type:"move"};class Na{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ro,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ro,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Y,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Y),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ro,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Y,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Y),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const v of e.hand.values()){const m=t.getJointPose(v,i),p=this._getHandJoint(c,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=u.position.distanceTo(f.position),h=.02,_=.005;c.inputState.pinching&&d>h+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=h-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Jg)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new ro;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class Qg extends en{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new hi,this.environmentIntensity=1,this.environmentRotation=new hi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class e_ extends Yt{constructor(e=null,t=1,i=1,r,s,o,a,l,c=Pt,u=Pt,f,d){super(null,o,a,l,c,u,r,s,f,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Fa=new Y,t_=new Y,n_=new qe;class Zi{constructor(e=new Y(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Fa.subVectors(i,t).cross(t_.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Fa),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||n_.getNormalMatrix(e),r=this.coplanarPoint(Fa).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Yi=new Wo,i_=new ct(.5,.5),so=new Y;class Oh{constructor(e=new Zi,t=new Zi,i=new Zi,r=new Zi,s=new Zi,o=new Zi){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Fn,i=!1){const r=this.planes,s=e.elements,o=s[0],a=s[1],l=s[2],c=s[3],u=s[4],f=s[5],d=s[6],h=s[7],_=s[8],v=s[9],m=s[10],p=s[11],b=s[12],T=s[13],M=s[14],w=s[15];if(r[0].setComponents(c-o,h-u,p-_,w-b).normalize(),r[1].setComponents(c+o,h+u,p+_,w+b).normalize(),r[2].setComponents(c+a,h+f,p+v,w+T).normalize(),r[3].setComponents(c-a,h-f,p-v,w-T).normalize(),i)r[4].setComponents(l,d,m,M).normalize(),r[5].setComponents(c-l,h-d,p-m,w-M).normalize();else if(r[4].setComponents(c-l,h-d,p-m,w-M).normalize(),t===Fn)r[5].setComponents(c+l,h+d,p+m,w+M).normalize();else if(t===Co)r[5].setComponents(l,d,m,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Yi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Yi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Yi)}intersectsSprite(e){Yi.center.set(0,0,0);const t=i_.distanceTo(e.center);return Yi.radius=.7071067811865476+t,Yi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Yi)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(so.x=r.normal.x>0?e.max.x:e.min.x,so.y=r.normal.y>0?e.max.y:e.min.y,so.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(so)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Bh extends Is{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new at(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const nf=new Mt,ec=new wh,oo=new Wo,ao=new Y;class r_ extends en{constructor(e=new Rn,t=new Bh){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),oo.copy(i.boundingSphere),oo.applyMatrix4(r),oo.radius+=s,e.ray.intersectsSphere(oo)===!1)return;nf.copy(r).invert(),ec.copy(e.ray).applyMatrix4(nf);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,f=i.attributes.position;if(c!==null){const d=Math.max(0,o.start),h=Math.min(c.count,o.start+o.count);for(let _=d,v=h;_<v;_++){const m=c.getX(_);ao.fromBufferAttribute(f,m),rf(ao,m,l,r,e,t,this)}}else{const d=Math.max(0,o.start),h=Math.min(f.count,o.start+o.count);for(let _=d,v=h;_<v;_++)ao.fromBufferAttribute(f,_),rf(ao,_,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function rf(n,e,t,i,r,s,o){const a=ec.distanceSqToPoint(n);if(a<t){const l=new Y;ec.closestPointToPoint(n,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class Ts extends Yt{constructor(e,t,i=Hn,r,s,o,a=Pt,l=Pt,c,u=di,f=1){if(u!==di&&u!==nr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:t,depth:f};super(d,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Oc(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class s_ extends Ts{constructor(e,t=Hn,i=ar,r,s,o=Pt,a=Pt,l,c=di){const u={width:e,height:e,depth:1},f=[u,u,u,u,u,u];super(e,e,t,i,r,s,o,a,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Vh extends Yt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Xo extends Rn{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,f=e/a,d=t/l,h=[],_=[],v=[],m=[];for(let p=0;p<u;p++){const b=p*d-o;for(let T=0;T<c;T++){const M=T*f-s;_.push(M,-b,0),v.push(0,0,1),m.push(T/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let b=0;b<a;b++){const T=b+c*p,M=b+c*(p+1),w=b+1+c*(p+1),P=b+1+c*p;h.push(T,M,P),h.push(M,w,P)}this.setIndex(h),this.setAttribute("position",new oi(_,3)),this.setAttribute("normal",new oi(v,3)),this.setAttribute("uv",new oi(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xo(e.width,e.height,e.widthSegments,e.heightSegments)}}class o_ extends Gn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class a_ extends Is{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=vg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class l_ extends Is{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class zh extends Uh{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class c_ extends fn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function sf(n,e,t,i){const r=u_(i);switch(t){case Eh:return n*e;case bh:return n*e/r.components*r.byteLength;case Ic:return n*e/r.components*r.byteLength;case Vr:return n*e*2/r.components*r.byteLength;case Lc:return n*e*2/r.components*r.byteLength;case yh:return n*e*3/r.components*r.byteLength;case yn:return n*e*4/r.components*r.byteLength;case Uc:return n*e*4/r.components*r.byteLength;case go:case _o:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case vo:case xo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case El:case bl:return Math.max(n,16)*Math.max(e,8)/4;case Ml:case yl:return Math.max(n,8)*Math.max(e,8)/2;case Tl:case Al:case Rl:case Cl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case wl:case Pl:case Dl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Il:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ll:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Ul:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Nl:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Fl:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Ol:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Bl:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Vl:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case zl:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Hl:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Gl:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case kl:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Wl:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Xl:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case ql:case Yl:case $l:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Kl:case jl:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Zl:case Jl:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function u_(n){switch(n){case dn:case vh:return{byteLength:1,components:1};case Es:case xh:case fi:return{byteLength:2,components:1};case Pc:case Dc:return{byteLength:2,components:4};case Hn:case Cc:case Nn:return{byteLength:4,components:1};case Sh:case Mh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Rc}}));typeof window<"u"&&(window.__THREE__?ke("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Rc);function Hh(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function f_(n){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,f=c.byteLength,d=n.createBuffer();n.bindBuffer(l,d),n.bufferData(l,c,u),a.onUploadCallback();let h;if(c instanceof Float32Array)h=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)h=n.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?h=n.HALF_FLOAT:h=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)h=n.SHORT;else if(c instanceof Uint32Array)h=n.UNSIGNED_INT;else if(c instanceof Int32Array)h=n.INT;else if(c instanceof Int8Array)h=n.BYTE;else if(c instanceof Uint8Array)h=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)h=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:h,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,c){const u=l.array,f=l.updateRanges;if(n.bindBuffer(c,a),f.length===0)n.bufferSubData(c,0,u);else{f.sort((h,_)=>h.start-_.start);let d=0;for(let h=1;h<f.length;h++){const _=f[d],v=f[h];v.start<=_.start+_.count+1?_.count=Math.max(_.count,v.start+v.count-_.start):(++d,f[d]=v)}f.length=d+1;for(let h=0,_=f.length;h<_;h++){const v=f[h];n.bufferSubData(c,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var d_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,h_=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,p_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,m_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,g_=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,__=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,v_=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,x_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,S_=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,M_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,E_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,y_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,b_=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,T_=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,A_=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,w_=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,R_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,C_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,P_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,D_=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,I_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,L_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,U_=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,N_=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,F_=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,O_=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,B_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,V_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,z_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,H_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,G_="gl_FragColor = linearToOutputTexel( gl_FragColor );",k_=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,W_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,X_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,q_=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Y_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,$_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,K_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,j_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Z_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,J_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Q_=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,ev=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,tv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,nv=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,iv=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,rv=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,sv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ov=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,av=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lv=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,cv=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,uv=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( vec3( 1.0 ) - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,fv=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,dv=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,hv=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,pv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,mv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,gv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_v=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,vv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,xv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Sv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Mv=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ev=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,yv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,bv=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Tv=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Av=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,wv=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Rv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Cv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Pv=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Dv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Iv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Lv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Uv=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Nv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Fv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ov=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Bv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Vv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,zv=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Hv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Gv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,kv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Wv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Xv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,qv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Yv=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 0, 5, phi ).x + bitangent * vogelDiskSample( 0, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 1, 5, phi ).x + bitangent * vogelDiskSample( 1, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 2, 5, phi ).x + bitangent * vogelDiskSample( 2, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 3, 5, phi ).x + bitangent * vogelDiskSample( 3, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 4, 5, phi ).x + bitangent * vogelDiskSample( 4, 5, phi ).y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadow = step( depth, dp );
			#else
				shadow = step( dp, depth );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,$v=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Kv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,jv=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Zv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Jv=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Qv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ex=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,tx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,nx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ix=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,rx=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,sx=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,ox=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,ax=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,lx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,cx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,ux=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const fx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,dx=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,px=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,gx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_x=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,vx=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,xx=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Sx=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Mx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ex=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yx=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,bx=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Tx=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Ax=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wx=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Rx=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Cx=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Px=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Dx=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Ix=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Lx=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ux=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Nx=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Fx=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ox=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Bx=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Vx=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,zx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Hx=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Gx=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,kx=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Wx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ye={alphahash_fragment:d_,alphahash_pars_fragment:h_,alphamap_fragment:p_,alphamap_pars_fragment:m_,alphatest_fragment:g_,alphatest_pars_fragment:__,aomap_fragment:v_,aomap_pars_fragment:x_,batching_pars_vertex:S_,batching_vertex:M_,begin_vertex:E_,beginnormal_vertex:y_,bsdfs:b_,iridescence_fragment:T_,bumpmap_pars_fragment:A_,clipping_planes_fragment:w_,clipping_planes_pars_fragment:R_,clipping_planes_pars_vertex:C_,clipping_planes_vertex:P_,color_fragment:D_,color_pars_fragment:I_,color_pars_vertex:L_,color_vertex:U_,common:N_,cube_uv_reflection_fragment:F_,defaultnormal_vertex:O_,displacementmap_pars_vertex:B_,displacementmap_vertex:V_,emissivemap_fragment:z_,emissivemap_pars_fragment:H_,colorspace_fragment:G_,colorspace_pars_fragment:k_,envmap_fragment:W_,envmap_common_pars_fragment:X_,envmap_pars_fragment:q_,envmap_pars_vertex:Y_,envmap_physical_pars_fragment:rv,envmap_vertex:$_,fog_vertex:K_,fog_pars_vertex:j_,fog_fragment:Z_,fog_pars_fragment:J_,gradientmap_pars_fragment:Q_,lightmap_pars_fragment:ev,lights_lambert_fragment:tv,lights_lambert_pars_fragment:nv,lights_pars_begin:iv,lights_toon_fragment:sv,lights_toon_pars_fragment:ov,lights_phong_fragment:av,lights_phong_pars_fragment:lv,lights_physical_fragment:cv,lights_physical_pars_fragment:uv,lights_fragment_begin:fv,lights_fragment_maps:dv,lights_fragment_end:hv,logdepthbuf_fragment:pv,logdepthbuf_pars_fragment:mv,logdepthbuf_pars_vertex:gv,logdepthbuf_vertex:_v,map_fragment:vv,map_pars_fragment:xv,map_particle_fragment:Sv,map_particle_pars_fragment:Mv,metalnessmap_fragment:Ev,metalnessmap_pars_fragment:yv,morphinstance_vertex:bv,morphcolor_vertex:Tv,morphnormal_vertex:Av,morphtarget_pars_vertex:wv,morphtarget_vertex:Rv,normal_fragment_begin:Cv,normal_fragment_maps:Pv,normal_pars_fragment:Dv,normal_pars_vertex:Iv,normal_vertex:Lv,normalmap_pars_fragment:Uv,clearcoat_normal_fragment_begin:Nv,clearcoat_normal_fragment_maps:Fv,clearcoat_pars_fragment:Ov,iridescence_pars_fragment:Bv,opaque_fragment:Vv,packing:zv,premultiplied_alpha_fragment:Hv,project_vertex:Gv,dithering_fragment:kv,dithering_pars_fragment:Wv,roughnessmap_fragment:Xv,roughnessmap_pars_fragment:qv,shadowmap_pars_fragment:Yv,shadowmap_pars_vertex:$v,shadowmap_vertex:Kv,shadowmask_pars_fragment:jv,skinbase_vertex:Zv,skinning_pars_vertex:Jv,skinning_vertex:Qv,skinnormal_vertex:ex,specularmap_fragment:tx,specularmap_pars_fragment:nx,tonemapping_fragment:ix,tonemapping_pars_fragment:rx,transmission_fragment:sx,transmission_pars_fragment:ox,uv_pars_fragment:ax,uv_pars_vertex:lx,uv_vertex:cx,worldpos_vertex:ux,background_vert:fx,background_frag:dx,backgroundCube_vert:hx,backgroundCube_frag:px,cube_vert:mx,cube_frag:gx,depth_vert:_x,depth_frag:vx,distance_vert:xx,distance_frag:Sx,equirect_vert:Mx,equirect_frag:Ex,linedashed_vert:yx,linedashed_frag:bx,meshbasic_vert:Tx,meshbasic_frag:Ax,meshlambert_vert:wx,meshlambert_frag:Rx,meshmatcap_vert:Cx,meshmatcap_frag:Px,meshnormal_vert:Dx,meshnormal_frag:Ix,meshphong_vert:Lx,meshphong_frag:Ux,meshphysical_vert:Nx,meshphysical_frag:Fx,meshtoon_vert:Ox,meshtoon_frag:Bx,points_vert:Vx,points_frag:zx,shadow_vert:Hx,shadow_frag:Gx,sprite_vert:kx,sprite_frag:Wx},be={common:{diffuse:{value:new at(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new qe}},envmap:{envMap:{value:null},envMapRotation:{value:new qe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new qe},normalScale:{value:new ct(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new at(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new at(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0},uvTransform:{value:new qe}},sprite:{diffuse:{value:new at(16777215)},opacity:{value:1},center:{value:new ct(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}}},Un={basic:{uniforms:Ht([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.fog]),vertexShader:Ye.meshbasic_vert,fragmentShader:Ye.meshbasic_frag},lambert:{uniforms:Ht([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new at(0)}}]),vertexShader:Ye.meshlambert_vert,fragmentShader:Ye.meshlambert_frag},phong:{uniforms:Ht([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new at(0)},specular:{value:new at(1118481)},shininess:{value:30}}]),vertexShader:Ye.meshphong_vert,fragmentShader:Ye.meshphong_frag},standard:{uniforms:Ht([be.common,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.roughnessmap,be.metalnessmap,be.fog,be.lights,{emissive:{value:new at(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag},toon:{uniforms:Ht([be.common,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.gradientmap,be.fog,be.lights,{emissive:{value:new at(0)}}]),vertexShader:Ye.meshtoon_vert,fragmentShader:Ye.meshtoon_frag},matcap:{uniforms:Ht([be.common,be.bumpmap,be.normalmap,be.displacementmap,be.fog,{matcap:{value:null}}]),vertexShader:Ye.meshmatcap_vert,fragmentShader:Ye.meshmatcap_frag},points:{uniforms:Ht([be.points,be.fog]),vertexShader:Ye.points_vert,fragmentShader:Ye.points_frag},dashed:{uniforms:Ht([be.common,be.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ye.linedashed_vert,fragmentShader:Ye.linedashed_frag},depth:{uniforms:Ht([be.common,be.displacementmap]),vertexShader:Ye.depth_vert,fragmentShader:Ye.depth_frag},normal:{uniforms:Ht([be.common,be.bumpmap,be.normalmap,be.displacementmap,{opacity:{value:1}}]),vertexShader:Ye.meshnormal_vert,fragmentShader:Ye.meshnormal_frag},sprite:{uniforms:Ht([be.sprite,be.fog]),vertexShader:Ye.sprite_vert,fragmentShader:Ye.sprite_frag},background:{uniforms:{uvTransform:{value:new qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ye.background_vert,fragmentShader:Ye.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new qe}},vertexShader:Ye.backgroundCube_vert,fragmentShader:Ye.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ye.cube_vert,fragmentShader:Ye.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ye.equirect_vert,fragmentShader:Ye.equirect_frag},distance:{uniforms:Ht([be.common,be.displacementmap,{referencePosition:{value:new Y},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ye.distance_vert,fragmentShader:Ye.distance_frag},shadow:{uniforms:Ht([be.lights,be.fog,{color:{value:new at(0)},opacity:{value:1}}]),vertexShader:Ye.shadow_vert,fragmentShader:Ye.shadow_frag}};Un.physical={uniforms:Ht([Un.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new qe},clearcoatNormalScale:{value:new ct(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new qe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new qe},sheen:{value:0},sheenColor:{value:new at(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new qe},transmissionSamplerSize:{value:new ct},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new qe},attenuationDistance:{value:0},attenuationColor:{value:new at(0)},specularColor:{value:new at(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new qe},anisotropyVector:{value:new ct},anisotropyMap:{value:null},anisotropyMapTransform:{value:new qe}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag};const lo={r:0,b:0,g:0},$i=new hi,Xx=new Mt;function qx(n,e,t,i,r,s,o){const a=new at(0);let l=s===!0?0:1,c,u,f=null,d=0,h=null;function _(T){let M=T.isScene===!0?T.background:null;return M&&M.isTexture&&(M=(T.backgroundBlurriness>0?t:e).get(M)),M}function v(T){let M=!1;const w=_(T);w===null?p(a,l):w&&w.isColor&&(p(w,1),M=!0);const P=n.xr.getEnvironmentBlendMode();P==="additive"?i.buffers.color.setClear(0,0,0,1,o):P==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||M)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(T,M){const w=_(M);w&&(w.isCubeTexture||w.mapping===ko)?(u===void 0&&(u=new pi(new Ls(1,1,1),new Gn({name:"BackgroundCubeMaterial",uniforms:Hr(Un.backgroundCube.uniforms),vertexShader:Un.backgroundCube.vertexShader,fragmentShader:Un.backgroundCube.fragmentShader,side:Qt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(P,D,V){this.matrixWorld.copyPosition(V.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),$i.copy(M.backgroundRotation),$i.x*=-1,$i.y*=-1,$i.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&($i.y*=-1,$i.z*=-1),u.material.uniforms.envMap.value=w,u.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Xx.makeRotationFromEuler($i)),u.material.toneMapped=Ze.getTransfer(w.colorSpace)!==ot,(f!==w||d!==w.version||h!==n.toneMapping)&&(u.material.needsUpdate=!0,f=w,d=w.version,h=n.toneMapping),u.layers.enableAll(),T.unshift(u,u.geometry,u.material,0,0,null)):w&&w.isTexture&&(c===void 0&&(c=new pi(new Xo(2,2),new Gn({name:"BackgroundMaterial",uniforms:Hr(Un.background.uniforms),vertexShader:Un.background.vertexShader,fragmentShader:Un.background.fragmentShader,side:Oi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=w,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.toneMapped=Ze.getTransfer(w.colorSpace)!==ot,w.matrixAutoUpdate===!0&&w.updateMatrix(),c.material.uniforms.uvTransform.value.copy(w.matrix),(f!==w||d!==w.version||h!==n.toneMapping)&&(c.material.needsUpdate=!0,f=w,d=w.version,h=n.toneMapping),c.layers.enableAll(),T.unshift(c,c.geometry,c.material,0,0,null))}function p(T,M){T.getRGB(lo,Lh(n)),i.buffers.color.setClear(lo.r,lo.g,lo.b,M,o)}function b(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(T,M=1){a.set(T),l=M,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(T){l=T,p(a,l)},render:v,addToRenderList:m,dispose:b}}function Yx(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=d(null);let s=r,o=!1;function a(y,L,N,z,ne){let te=!1;const K=f(z,N,L);s!==K&&(s=K,c(s.object)),te=h(y,z,N,ne),te&&_(y,z,N,ne),ne!==null&&e.update(ne,n.ELEMENT_ARRAY_BUFFER),(te||o)&&(o=!1,M(y,L,N,z),ne!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(ne).buffer))}function l(){return n.createVertexArray()}function c(y){return n.bindVertexArray(y)}function u(y){return n.deleteVertexArray(y)}function f(y,L,N){const z=N.wireframe===!0;let ne=i[y.id];ne===void 0&&(ne={},i[y.id]=ne);let te=ne[L.id];te===void 0&&(te={},ne[L.id]=te);let K=te[z];return K===void 0&&(K=d(l()),te[z]=K),K}function d(y){const L=[],N=[],z=[];for(let ne=0;ne<t;ne++)L[ne]=0,N[ne]=0,z[ne]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:N,attributeDivisors:z,object:y,attributes:{},index:null}}function h(y,L,N,z){const ne=s.attributes,te=L.attributes;let K=0;const H=N.getAttributes();for(const ee in H)if(H[ee].location>=0){const ge=ne[ee];let Se=te[ee];if(Se===void 0&&(ee==="instanceMatrix"&&y.instanceMatrix&&(Se=y.instanceMatrix),ee==="instanceColor"&&y.instanceColor&&(Se=y.instanceColor)),ge===void 0||ge.attribute!==Se||Se&&ge.data!==Se.data)return!0;K++}return s.attributesNum!==K||s.index!==z}function _(y,L,N,z){const ne={},te=L.attributes;let K=0;const H=N.getAttributes();for(const ee in H)if(H[ee].location>=0){let ge=te[ee];ge===void 0&&(ee==="instanceMatrix"&&y.instanceMatrix&&(ge=y.instanceMatrix),ee==="instanceColor"&&y.instanceColor&&(ge=y.instanceColor));const Se={};Se.attribute=ge,ge&&ge.data&&(Se.data=ge.data),ne[ee]=Se,K++}s.attributes=ne,s.attributesNum=K,s.index=z}function v(){const y=s.newAttributes;for(let L=0,N=y.length;L<N;L++)y[L]=0}function m(y){p(y,0)}function p(y,L){const N=s.newAttributes,z=s.enabledAttributes,ne=s.attributeDivisors;N[y]=1,z[y]===0&&(n.enableVertexAttribArray(y),z[y]=1),ne[y]!==L&&(n.vertexAttribDivisor(y,L),ne[y]=L)}function b(){const y=s.newAttributes,L=s.enabledAttributes;for(let N=0,z=L.length;N<z;N++)L[N]!==y[N]&&(n.disableVertexAttribArray(N),L[N]=0)}function T(y,L,N,z,ne,te,K){K===!0?n.vertexAttribIPointer(y,L,N,ne,te):n.vertexAttribPointer(y,L,N,z,ne,te)}function M(y,L,N,z){v();const ne=z.attributes,te=N.getAttributes(),K=L.defaultAttributeValues;for(const H in te){const ee=te[H];if(ee.location>=0){let ve=ne[H];if(ve===void 0&&(H==="instanceMatrix"&&y.instanceMatrix&&(ve=y.instanceMatrix),H==="instanceColor"&&y.instanceColor&&(ve=y.instanceColor)),ve!==void 0){const ge=ve.normalized,Se=ve.itemSize,Fe=e.get(ve);if(Fe===void 0)continue;const ze=Fe.buffer,tt=Fe.type,je=Fe.bytesPerElement,re=tt===n.INT||tt===n.UNSIGNED_INT||ve.gpuType===Cc;if(ve.isInterleavedBufferAttribute){const U=ve.data,ie=U.stride,ae=ve.offset;if(U.isInstancedInterleavedBuffer){for(let oe=0;oe<ee.locationSize;oe++)p(ee.location+oe,U.meshPerAttribute);y.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=U.meshPerAttribute*U.count)}else for(let oe=0;oe<ee.locationSize;oe++)m(ee.location+oe);n.bindBuffer(n.ARRAY_BUFFER,ze);for(let oe=0;oe<ee.locationSize;oe++)T(ee.location+oe,Se/ee.locationSize,tt,ge,ie*je,(ae+Se/ee.locationSize*oe)*je,re)}else{if(ve.isInstancedBufferAttribute){for(let U=0;U<ee.locationSize;U++)p(ee.location+U,ve.meshPerAttribute);y.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=ve.meshPerAttribute*ve.count)}else for(let U=0;U<ee.locationSize;U++)m(ee.location+U);n.bindBuffer(n.ARRAY_BUFFER,ze);for(let U=0;U<ee.locationSize;U++)T(ee.location+U,Se/ee.locationSize,tt,ge,Se*je,Se/ee.locationSize*U*je,re)}}else if(K!==void 0){const ge=K[H];if(ge!==void 0)switch(ge.length){case 2:n.vertexAttrib2fv(ee.location,ge);break;case 3:n.vertexAttrib3fv(ee.location,ge);break;case 4:n.vertexAttrib4fv(ee.location,ge);break;default:n.vertexAttrib1fv(ee.location,ge)}}}}b()}function w(){V();for(const y in i){const L=i[y];for(const N in L){const z=L[N];for(const ne in z)u(z[ne].object),delete z[ne];delete L[N]}delete i[y]}}function P(y){if(i[y.id]===void 0)return;const L=i[y.id];for(const N in L){const z=L[N];for(const ne in z)u(z[ne].object),delete z[ne];delete L[N]}delete i[y.id]}function D(y){for(const L in i){const N=i[L];if(N[y.id]===void 0)continue;const z=N[y.id];for(const ne in z)u(z[ne].object),delete z[ne];delete N[y.id]}}function V(){x(),o=!0,s!==r&&(s=r,c(s.object))}function x(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:V,resetDefaultState:x,dispose:w,releaseStatesOfGeometry:P,releaseStatesOfProgram:D,initAttributes:v,enableAttribute:m,disableUnusedAttributes:b}}function $x(n,e,t){let i;function r(c){i=c}function s(c,u){n.drawArrays(i,c,u),t.update(u,i,1)}function o(c,u,f){f!==0&&(n.drawArraysInstanced(i,c,u,f),t.update(u,i,f))}function a(c,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,f);let h=0;for(let _=0;_<f;_++)h+=u[_];t.update(h,i,1)}function l(c,u,f,d){if(f===0)return;const h=e.get("WEBGL_multi_draw");if(h===null)for(let _=0;_<c.length;_++)o(c[_],u[_],d[_]);else{h.multiDrawArraysInstancedWEBGL(i,c,0,u,0,d,0,f);let _=0;for(let v=0;v<f;v++)_+=u[v]*d[v];t.update(_,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Kx(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const D=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(D){return!(D!==yn&&i.convert(D)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(D){const V=D===fi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(D!==dn&&i.convert(D)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&D!==Nn&&!V)}function l(D){if(D==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";D="mediump"}return D==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(ke("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),h=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),b=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),T=n.getParameter(n.MAX_VARYING_VECTORS),M=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),w=n.getParameter(n.MAX_SAMPLES),P=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:d,maxTextures:h,maxVertexTextures:_,maxTextureSize:v,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:b,maxVaryings:T,maxFragmentUniforms:M,maxSamples:w,samples:P}}function jx(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new Zi,a=new qe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const h=f.length!==0||d||i!==0||r;return r=d,i=f.length,h},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,d){t=u(f,d,0)},this.setState=function(f,d,h){const _=f.clippingPlanes,v=f.clipIntersection,m=f.clipShadows,p=n.get(f);if(!r||_===null||_.length===0||s&&!m)s?u(null):c();else{const b=s?0:i,T=b*4;let M=p.clippingState||null;l.value=M,M=u(_,d,T,h);for(let w=0;w!==T;++w)M[w]=t[w];p.clippingState=M,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,d,h,_){const v=f!==null?f.length:0;let m=null;if(v!==0){if(m=l.value,_!==!0||m===null){const p=h+v*4,b=d.matrixWorldInverse;a.getNormalMatrix(b),(m===null||m.length<p)&&(m=new Float32Array(p));for(let T=0,M=h;T!==v;++T,M+=4)o.copy(f[T]).applyMatrix4(b,a),o.normal.toArray(m,M),m[M+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function Zx(n){let e=new WeakMap;function t(o,a){return a===_l?o.mapping=ar:a===vl&&(o.mapping=Br),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===_l||a===vl)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Fh(l.height);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}const Li=4,of=[.125,.215,.35,.446,.526,.582],er=20,Jx=256,es=new zh,af=new at;let Oa=null,Ba=0,Va=0,za=!1;const Qx=new Y;class lf{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,r=100,s={}){const{size:o=256,position:a=Qx}=s;Oa=this._renderer.getRenderTarget(),Ba=this._renderer.getActiveCubeFace(),Va=this._renderer.getActiveMipmapLevel(),za=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ff(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=uf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Oa,Ba,Va),this._renderer.xr.enabled=za,e.scissorTest=!1,Ar(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ar||e.mapping===Br?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Oa=this._renderer.getRenderTarget(),Ba=this._renderer.getActiveCubeFace(),Va=this._renderer.getActiveMipmapLevel(),za=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Ot,minFilter:Ot,generateMipmaps:!1,type:fi,format:yn,colorSpace:zr,depthBuffer:!1},r=cf(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=cf(e,t,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=eS(s)),this._blurMaterial=nS(s,e,t),this._ggxMaterial=tS(s,e,t)}return r}_compileMaterial(e){const t=new pi(new Rn,e);this._renderer.compile(t,es)}_sceneToCubeUV(e,t,i,r,s){const l=new fn(90,1,t,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,d=f.autoClear,h=f.toneMapping;f.getClearColor(af),f.toneMapping=Vn,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(r),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new pi(new Ls,new Ph({name:"PMREM.Background",side:Qt,depthWrite:!1,depthTest:!1})));const v=this._backgroundBox,m=v.material;let p=!1;const b=e.background;b?b.isColor&&(m.color.copy(b),e.background=null,p=!0):(m.color.copy(af),p=!0);for(let T=0;T<6;T++){const M=T%3;M===0?(l.up.set(0,c[T],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[T],s.y,s.z)):M===1?(l.up.set(0,0,c[T]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[T],s.z)):(l.up.set(0,c[T],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[T]));const w=this._cubeSize;Ar(r,M*w,T>2?w:0,w,w),f.setRenderTarget(r),p&&f.render(v,l),f.render(e,l)}f.toneMapping=h,f.autoClear=d,e.background=b}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===ar||e.mapping===Br;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=ff()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=uf());const s=r?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=s;const a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Ar(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,es)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=i}_applyGGXFilter(e,t,i){const r=this._renderer,s=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;const l=o.uniforms,c=i/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),f=Math.sqrt(c*c-u*u),d=0+c*1.25,h=f*d,{_lodMax:_}=this,v=this._sizeLods[i],m=3*v*(i>_-Li?i-_+Li:0),p=4*(this._cubeSize-v);l.envMap.value=e.texture,l.roughness.value=h,l.mipInt.value=_-t,Ar(s,m,p,3*v,2*v),r.setRenderTarget(s),r.render(a,es),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=_-i,Ar(e,m,p,3*v,2*v),r.setRenderTarget(e),r.render(a,es)}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&Qe("blur direction must be either latitudinal or longitudinal!");const u=3,f=this._lodMeshes[r];f.material=c;const d=c.uniforms,h=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*h):2*Math.PI/(2*er-1),v=s/_,m=isFinite(s)?1+Math.floor(u*v):er;m>er&&ke(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${er}`);const p=[];let b=0;for(let D=0;D<er;++D){const V=D/v,x=Math.exp(-V*V/2);p.push(x),D===0?b+=x:D<m&&(b+=2*x)}for(let D=0;D<p.length;D++)p[D]=p[D]/b;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:T}=this;d.dTheta.value=_,d.mipInt.value=T-i;const M=this._sizeLods[r],w=3*M*(r>T-Li?r-T+Li:0),P=4*(this._cubeSize-M);Ar(t,w,P,3*M,2*M),l.setRenderTarget(t),l.render(f,es)}}function eS(n){const e=[],t=[],i=[];let r=n;const s=n-Li+1+of.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);e.push(a);let l=1/a;o>n-Li?l=of[o-n+Li-1]:o===0&&(l=0),t.push(l);const c=1/(a-2),u=-c,f=1+c,d=[u,u,f,u,f,f,u,u,f,f,u,f],h=6,_=6,v=3,m=2,p=1,b=new Float32Array(v*_*h),T=new Float32Array(m*_*h),M=new Float32Array(p*_*h);for(let P=0;P<h;P++){const D=P%3*2/3-1,V=P>2?0:-1,x=[D,V,0,D+2/3,V,0,D+2/3,V+1,0,D,V,0,D+2/3,V+1,0,D,V+1,0];b.set(x,v*_*P),T.set(d,m*_*P);const y=[P,P,P,P,P,P];M.set(y,p*_*P)}const w=new Rn;w.setAttribute("position",new Xt(b,v)),w.setAttribute("uv",new Xt(T,m)),w.setAttribute("faceIndex",new Xt(M,p)),i.push(new pi(w,null)),r>Li&&r--}return{lodMeshes:i,sizeLods:e,sigmas:t}}function cf(n,e,t){const i=new zn(n,e,t);return i.texture.mapping=ko,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ar(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function tS(n,e,t){return new Gn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Jx,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:qo(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:ri,depthTest:!1,depthWrite:!1})}function nS(n,e,t){const i=new Float32Array(er),r=new Y(0,1,0);return new Gn({name:"SphericalGaussianBlur",defines:{n:er,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:qo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ri,depthTest:!1,depthWrite:!1})}function uf(){return new Gn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:qo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ri,depthTest:!1,depthWrite:!1})}function ff(){return new Gn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:qo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ri,depthTest:!1,depthWrite:!1})}function qo(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function iS(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===_l||l===vl,u=l===ar||l===Br;if(c||u){let f=e.get(a);const d=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new lf(n)),f=c?t.fromEquirectangular(a,f):t.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),f.texture;if(f!==void 0)return f.texture;{const h=a.image;return c&&h&&h.height>0||u&&h&&r(h)?(t===null&&(t=new lf(n)),f=c?t.fromEquirectangular(a):t.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),a.addEventListener("dispose",s),f.texture):null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function rS(n){const e={};function t(i){if(e[i]!==void 0)return e[i];const r=n.getExtension(i);return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&bs("WebGLRenderer: "+i+" extension not supported."),r}}}function sS(n,e,t,i){const r={},s=new WeakMap;function o(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const _ in d.attributes)e.remove(d.attributes[_]);d.removeEventListener("dispose",o),delete r[d.id];const h=s.get(d);h&&(e.remove(h),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(f,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,t.memory.geometries++),d}function l(f){const d=f.attributes;for(const h in d)e.update(d[h],n.ARRAY_BUFFER)}function c(f){const d=[],h=f.index,_=f.attributes.position;let v=0;if(h!==null){const b=h.array;v=h.version;for(let T=0,M=b.length;T<M;T+=3){const w=b[T+0],P=b[T+1],D=b[T+2];d.push(w,P,P,D,D,w)}}else if(_!==void 0){const b=_.array;v=_.version;for(let T=0,M=b.length/3-1;T<M;T+=3){const w=T+0,P=T+1,D=T+2;d.push(w,P,P,D,D,w)}}else return;const m=new(Th(d)?Ih:Dh)(d,1);m.version=v;const p=s.get(f);p&&e.remove(p),s.set(f,m)}function u(f){const d=s.get(f);if(d){const h=f.index;h!==null&&d.version<h.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function oS(n,e,t){let i;function r(d){i=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function l(d,h){n.drawElements(i,h,s,d*o),t.update(h,i,1)}function c(d,h,_){_!==0&&(n.drawElementsInstanced(i,h,s,d*o,_),t.update(h,i,_))}function u(d,h,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,h,0,s,d,0,_);let m=0;for(let p=0;p<_;p++)m+=h[p];t.update(m,i,1)}function f(d,h,_,v){if(_===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)c(d[p]/o,h[p],v[p]);else{m.multiDrawElementsInstancedWEBGL(i,h,0,s,d,0,v,0,_);let p=0;for(let b=0;b<_;b++)p+=h[b]*v[b];t.update(p,i,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function aS(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:Qe("WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function lS(n,e,t){const i=new WeakMap,r=new St;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0;let d=i.get(a);if(d===void 0||d.count!==f){let y=function(){V.dispose(),i.delete(a),a.removeEventListener("dispose",y)};var h=y;d!==void 0&&d.texture.dispose();const _=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],b=a.morphAttributes.normal||[],T=a.morphAttributes.color||[];let M=0;_===!0&&(M=1),v===!0&&(M=2),m===!0&&(M=3);let w=a.attributes.position.count*M,P=1;w>e.maxTextureSize&&(P=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);const D=new Float32Array(w*P*4*f),V=new Ah(D,w,P,f);V.type=Nn,V.needsUpdate=!0;const x=M*4;for(let L=0;L<f;L++){const N=p[L],z=b[L],ne=T[L],te=w*P*4*L;for(let K=0;K<N.count;K++){const H=K*x;_===!0&&(r.fromBufferAttribute(N,K),D[te+H+0]=r.x,D[te+H+1]=r.y,D[te+H+2]=r.z,D[te+H+3]=0),v===!0&&(r.fromBufferAttribute(z,K),D[te+H+4]=r.x,D[te+H+5]=r.y,D[te+H+6]=r.z,D[te+H+7]=0),m===!0&&(r.fromBufferAttribute(ne,K),D[te+H+8]=r.x,D[te+H+9]=r.y,D[te+H+10]=r.z,D[te+H+11]=ne.itemSize===4?r.w:1)}}d={count:f,texture:V,size:new ct(w,P)},i.set(a,d),a.addEventListener("dispose",y)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let _=0;for(let m=0;m<c.length;m++)_+=c[m];const v=a.morphTargetsRelative?1:1-_;l.getUniforms().setValue(n,"morphTargetBaseInfluence",v),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:s}}function cS(n,e,t,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,f=e.get(l,u);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==c&&(d.update(),r.set(d,c))}return f}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}const uS={[uh]:"LINEAR_TONE_MAPPING",[fh]:"REINHARD_TONE_MAPPING",[dh]:"CINEON_TONE_MAPPING",[hh]:"ACES_FILMIC_TONE_MAPPING",[mh]:"AGX_TONE_MAPPING",[gh]:"NEUTRAL_TONE_MAPPING",[ph]:"CUSTOM_TONE_MAPPING"};function fS(n,e,t,i,r){const s=new zn(e,t,{type:n,depthBuffer:i,stencilBuffer:r}),o=new zn(e,t,{type:fi,depthBuffer:!1,stencilBuffer:!1}),a=new Rn;a.setAttribute("position",new oi([-1,3,0,-1,-1,0,3,-1,0],3)),a.setAttribute("uv",new oi([0,2,0,0,2,0],2));const l=new o_({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),c=new pi(a,l),u=new zh(-1,1,1,-1,0,1);let f=null,d=null,h=!1,_,v=null,m=[],p=!1;this.setSize=function(b,T){s.setSize(b,T),o.setSize(b,T);for(let M=0;M<m.length;M++){const w=m[M];w.setSize&&w.setSize(b,T)}},this.setEffects=function(b){m=b,p=m.length>0&&m[0].isRenderPass===!0;const T=s.width,M=s.height;for(let w=0;w<m.length;w++){const P=m[w];P.setSize&&P.setSize(T,M)}},this.begin=function(b,T){if(h||b.toneMapping===Vn&&m.length===0)return!1;if(v=T,T!==null){const M=T.width,w=T.height;(s.width!==M||s.height!==w)&&this.setSize(M,w)}return p===!1&&b.setRenderTarget(s),_=b.toneMapping,b.toneMapping=Vn,!0},this.hasRenderPass=function(){return p},this.end=function(b,T){b.toneMapping=_,h=!0;let M=s,w=o;for(let P=0;P<m.length;P++){const D=m[P];if(D.enabled!==!1&&(D.render(b,w,M,T),D.needsSwap!==!1)){const V=M;M=w,w=V}}if(f!==b.outputColorSpace||d!==b.toneMapping){f=b.outputColorSpace,d=b.toneMapping,l.defines={},Ze.getTransfer(f)===ot&&(l.defines.SRGB_TRANSFER="");const P=uS[d];P&&(l.defines[P]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=M.texture,b.setRenderTarget(v),b.render(c,u),v=null,h=!1},this.isCompositing=function(){return h},this.dispose=function(){s.dispose(),o.dispose(),a.dispose(),l.dispose()}}const Gh=new Yt,tc=new Ts(1,1),kh=new Ah,Wh=new Ng,Xh=new Nh,df=[],hf=[],pf=new Float32Array(16),mf=new Float32Array(9),gf=new Float32Array(4);function Xr(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=df[r];if(s===void 0&&(s=new Float32Array(r),df[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function At(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function wt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Yo(n,e){let t=hf[e];t===void 0&&(t=new Int32Array(e),hf[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function dS(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function hS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(At(t,e))return;n.uniform2fv(this.addr,e),wt(t,e)}}function pS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(At(t,e))return;n.uniform3fv(this.addr,e),wt(t,e)}}function mS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(At(t,e))return;n.uniform4fv(this.addr,e),wt(t,e)}}function gS(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(At(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),wt(t,e)}else{if(At(t,i))return;gf.set(i),n.uniformMatrix2fv(this.addr,!1,gf),wt(t,i)}}function _S(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(At(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),wt(t,e)}else{if(At(t,i))return;mf.set(i),n.uniformMatrix3fv(this.addr,!1,mf),wt(t,i)}}function vS(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(At(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),wt(t,e)}else{if(At(t,i))return;pf.set(i),n.uniformMatrix4fv(this.addr,!1,pf),wt(t,i)}}function xS(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function SS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(At(t,e))return;n.uniform2iv(this.addr,e),wt(t,e)}}function MS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(At(t,e))return;n.uniform3iv(this.addr,e),wt(t,e)}}function ES(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(At(t,e))return;n.uniform4iv(this.addr,e),wt(t,e)}}function yS(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function bS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(At(t,e))return;n.uniform2uiv(this.addr,e),wt(t,e)}}function TS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(At(t,e))return;n.uniform3uiv(this.addr,e),wt(t,e)}}function AS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(At(t,e))return;n.uniform4uiv(this.addr,e),wt(t,e)}}function wS(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(tc.compareFunction=t.isReversedDepthBuffer()?Fc:Nc,s=tc):s=Gh,t.setTexture2D(e||s,r)}function RS(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Wh,r)}function CS(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Xh,r)}function PS(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||kh,r)}function DS(n){switch(n){case 5126:return dS;case 35664:return hS;case 35665:return pS;case 35666:return mS;case 35674:return gS;case 35675:return _S;case 35676:return vS;case 5124:case 35670:return xS;case 35667:case 35671:return SS;case 35668:case 35672:return MS;case 35669:case 35673:return ES;case 5125:return yS;case 36294:return bS;case 36295:return TS;case 36296:return AS;case 35678:case 36198:case 36298:case 36306:case 35682:return wS;case 35679:case 36299:case 36307:return RS;case 35680:case 36300:case 36308:case 36293:return CS;case 36289:case 36303:case 36311:case 36292:return PS}}function IS(n,e){n.uniform1fv(this.addr,e)}function LS(n,e){const t=Xr(e,this.size,2);n.uniform2fv(this.addr,t)}function US(n,e){const t=Xr(e,this.size,3);n.uniform3fv(this.addr,t)}function NS(n,e){const t=Xr(e,this.size,4);n.uniform4fv(this.addr,t)}function FS(n,e){const t=Xr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function OS(n,e){const t=Xr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function BS(n,e){const t=Xr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function VS(n,e){n.uniform1iv(this.addr,e)}function zS(n,e){n.uniform2iv(this.addr,e)}function HS(n,e){n.uniform3iv(this.addr,e)}function GS(n,e){n.uniform4iv(this.addr,e)}function kS(n,e){n.uniform1uiv(this.addr,e)}function WS(n,e){n.uniform2uiv(this.addr,e)}function XS(n,e){n.uniform3uiv(this.addr,e)}function qS(n,e){n.uniform4uiv(this.addr,e)}function YS(n,e,t){const i=this.cache,r=e.length,s=Yo(t,r);At(i,s)||(n.uniform1iv(this.addr,s),wt(i,s));let o;this.type===n.SAMPLER_2D_SHADOW?o=tc:o=Gh;for(let a=0;a!==r;++a)t.setTexture2D(e[a]||o,s[a])}function $S(n,e,t){const i=this.cache,r=e.length,s=Yo(t,r);At(i,s)||(n.uniform1iv(this.addr,s),wt(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||Wh,s[o])}function KS(n,e,t){const i=this.cache,r=e.length,s=Yo(t,r);At(i,s)||(n.uniform1iv(this.addr,s),wt(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||Xh,s[o])}function jS(n,e,t){const i=this.cache,r=e.length,s=Yo(t,r);At(i,s)||(n.uniform1iv(this.addr,s),wt(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||kh,s[o])}function ZS(n){switch(n){case 5126:return IS;case 35664:return LS;case 35665:return US;case 35666:return NS;case 35674:return FS;case 35675:return OS;case 35676:return BS;case 5124:case 35670:return VS;case 35667:case 35671:return zS;case 35668:case 35672:return HS;case 35669:case 35673:return GS;case 5125:return kS;case 36294:return WS;case 36295:return XS;case 36296:return qS;case 35678:case 36198:case 36298:case 36306:case 35682:return YS;case 35679:case 36299:case 36307:return $S;case 35680:case 36300:case 36308:case 36293:return KS;case 36289:case 36303:case 36311:case 36292:return jS}}class JS{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=DS(t.type)}}class QS{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=ZS(t.type)}}class eM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const Ha=/(\w+)(\])?(\[|\.)?/g;function _f(n,e){n.seq.push(e),n.map[e.id]=e}function tM(n,e,t){const i=n.name,r=i.length;for(Ha.lastIndex=0;;){const s=Ha.exec(i),o=Ha.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){_f(t,c===void 0?new JS(a,n,e):new QS(a,n,e));break}else{let f=t.map[a];f===void 0&&(f=new eM(a),_f(t,f)),t=f}}}class So{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){const a=e.getActiveUniform(t,o),l=e.getUniformLocation(t,a.name);tM(a,l,this)}const r=[],s=[];for(const o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(o):s.push(o);r.length>0&&(this.seq=r.concat(s))}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function vf(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const nM=37297;let iM=0;function rM(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}const xf=new qe;function sM(n){Ze._getMatrix(xf,Ze.workingColorSpace,n);const e=`mat3( ${xf.elements.map(t=>t.toFixed(4))} )`;switch(Ze.getTransfer(n)){case Ro:return[e,"LinearTransferOETF"];case ot:return[e,"sRGBTransferOETF"];default:return ke("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Sf(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=(n.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+s+`

`+rM(n.getShaderSource(e),a)}else return s}function oM(n,e){const t=sM(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const aM={[uh]:"Linear",[fh]:"Reinhard",[dh]:"Cineon",[hh]:"ACESFilmic",[mh]:"AgX",[gh]:"Neutral",[ph]:"Custom"};function lM(n,e){const t=aM[e];return t===void 0?(ke("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const co=new Y;function cM(){Ze.getLuminanceCoefficients(co);const n=co.x.toFixed(4),e=co.y.toFixed(4),t=co.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function uM(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ss).join(`
`)}function fM(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function dM(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function ss(n){return n!==""}function Mf(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ef(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const hM=/^[ \t]*#include +<([\w\d./]+)>/gm;function nc(n){return n.replace(hM,mM)}const pM=new Map;function mM(n,e){let t=Ye[e];if(t===void 0){const i=pM.get(e);if(i!==void 0)t=Ye[i],ke('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return nc(t)}const gM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function yf(n){return n.replace(gM,_M)}function _M(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function bf(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const vM={[mo]:"SHADOWMAP_TYPE_PCF",[rs]:"SHADOWMAP_TYPE_VSM"};function xM(n){return vM[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const SM={[ar]:"ENVMAP_TYPE_CUBE",[Br]:"ENVMAP_TYPE_CUBE",[ko]:"ENVMAP_TYPE_CUBE_UV"};function MM(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":SM[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const EM={[Br]:"ENVMAP_MODE_REFRACTION"};function yM(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":EM[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const bM={[ch]:"ENVMAP_BLENDING_MULTIPLY",[mg]:"ENVMAP_BLENDING_MIX",[gg]:"ENVMAP_BLENDING_ADD"};function TM(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":bM[n.combine]||"ENVMAP_BLENDING_NONE"}function AM(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function wM(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=xM(t),c=MM(t),u=yM(t),f=TM(t),d=AM(t),h=uM(t),_=fM(s),v=r.createProgram();let m,p,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(ss).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(ss).join(`
`),p.length>0&&(p+=`
`)):(m=[bf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ss).join(`
`),p=[bf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Vn?"#define TONE_MAPPING":"",t.toneMapping!==Vn?Ye.tonemapping_pars_fragment:"",t.toneMapping!==Vn?lM("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ye.colorspace_pars_fragment,oM("linearToOutputTexel",t.outputColorSpace),cM(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ss).join(`
`)),o=nc(o),o=Mf(o,t),o=Ef(o,t),a=nc(a),a=Mf(a,t),a=Ef(a,t),o=yf(o),a=yf(a),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,m=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Ou?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ou?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const T=b+m+o,M=b+p+a,w=vf(r,r.VERTEX_SHADER,T),P=vf(r,r.FRAGMENT_SHADER,M);r.attachShader(v,w),r.attachShader(v,P),t.index0AttributeName!==void 0?r.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v);function D(L){if(n.debug.checkShaderErrors){const N=r.getProgramInfoLog(v)||"",z=r.getShaderInfoLog(w)||"",ne=r.getShaderInfoLog(P)||"",te=N.trim(),K=z.trim(),H=ne.trim();let ee=!0,ve=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(ee=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,v,w,P);else{const ge=Sf(r,w,"vertex"),Se=Sf(r,P,"fragment");Qe("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+te+`
`+ge+`
`+Se)}else te!==""?ke("WebGLProgram: Program Info Log:",te):(K===""||H==="")&&(ve=!1);ve&&(L.diagnostics={runnable:ee,programLog:te,vertexShader:{log:K,prefix:m},fragmentShader:{log:H,prefix:p}})}r.deleteShader(w),r.deleteShader(P),V=new So(r,v),x=dM(r,v)}let V;this.getUniforms=function(){return V===void 0&&D(this),V};let x;this.getAttributes=function(){return x===void 0&&D(this),x};let y=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=r.getProgramParameter(v,nM)),y},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=iM++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=w,this.fragmentShader=P,this}let RM=0;class CM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new PM(e),t.set(e,i)),i}}class PM{constructor(e){this.id=RM++,this.code=e,this.usedTimes=0}}function DM(n,e,t,i,r,s,o){const a=new Rh,l=new CM,c=new Set,u=[],f=new Map,d=r.logarithmicDepthBuffer;let h=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(x){return c.add(x),x===0?"uv":`uv${x}`}function m(x,y,L,N,z){const ne=N.fog,te=z.geometry,K=x.isMeshStandardMaterial?N.environment:null,H=(x.isMeshStandardMaterial?t:e).get(x.envMap||K),ee=H&&H.mapping===ko?H.image.height:null,ve=_[x.type];x.precision!==null&&(h=r.getMaxPrecision(x.precision),h!==x.precision&&ke("WebGLProgram.getParameters:",x.precision,"not supported, using",h,"instead."));const ge=te.morphAttributes.position||te.morphAttributes.normal||te.morphAttributes.color,Se=ge!==void 0?ge.length:0;let Fe=0;te.morphAttributes.position!==void 0&&(Fe=1),te.morphAttributes.normal!==void 0&&(Fe=2),te.morphAttributes.color!==void 0&&(Fe=3);let ze,tt,je,re;if(ve){const rt=Un[ve];ze=rt.vertexShader,tt=rt.fragmentShader}else ze=x.vertexShader,tt=x.fragmentShader,l.update(x),je=l.getVertexShaderID(x),re=l.getFragmentShaderID(x);const U=n.getRenderTarget(),ie=n.state.buffers.depth.getReversed(),ae=z.isInstancedMesh===!0,oe=z.isBatchedMesh===!0,De=!!x.map,R=!!x.matcap,C=!!H,F=!!x.aoMap,j=!!x.lightMap,q=!!x.bumpMap,J=!!x.normalMap,A=!!x.displacementMap,fe=!!x.emissiveMap,le=!!x.metalnessMap,se=!!x.roughnessMap,ce=x.anisotropy>0,S=x.clearcoat>0,g=x.dispersion>0,I=x.iridescence>0,X=x.sheen>0,Q=x.transmission>0,k=ce&&!!x.anisotropyMap,Te=S&&!!x.clearcoatMap,he=S&&!!x.clearcoatNormalMap,Re=S&&!!x.clearcoatRoughnessMap,Ue=I&&!!x.iridescenceMap,de=I&&!!x.iridescenceThicknessMap,xe=X&&!!x.sheenColorMap,Ee=X&&!!x.sheenRoughnessMap,Ce=!!x.specularMap,_e=!!x.specularColorMap,Xe=!!x.specularIntensityMap,O=Q&&!!x.transmissionMap,we=Q&&!!x.thicknessMap,me=!!x.gradientMap,Pe=!!x.alphaMap,pe=x.alphaTest>0,ue=!!x.alphaHash,Me=!!x.extensions;let Ge=Vn;x.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(Ge=n.toneMapping);const ft={shaderID:ve,shaderType:x.type,shaderName:x.name,vertexShader:ze,fragmentShader:tt,defines:x.defines,customVertexShaderID:je,customFragmentShaderID:re,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:h,batching:oe,batchingColor:oe&&z._colorsTexture!==null,instancing:ae,instancingColor:ae&&z.instanceColor!==null,instancingMorph:ae&&z.morphTexture!==null,outputColorSpace:U===null?n.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:zr,alphaToCoverage:!!x.alphaToCoverage,map:De,matcap:R,envMap:C,envMapMode:C&&H.mapping,envMapCubeUVHeight:ee,aoMap:F,lightMap:j,bumpMap:q,normalMap:J,displacementMap:A,emissiveMap:fe,normalMapObjectSpace:J&&x.normalMapType===Sg,normalMapTangentSpace:J&&x.normalMapType===xg,metalnessMap:le,roughnessMap:se,anisotropy:ce,anisotropyMap:k,clearcoat:S,clearcoatMap:Te,clearcoatNormalMap:he,clearcoatRoughnessMap:Re,dispersion:g,iridescence:I,iridescenceMap:Ue,iridescenceThicknessMap:de,sheen:X,sheenColorMap:xe,sheenRoughnessMap:Ee,specularMap:Ce,specularColorMap:_e,specularIntensityMap:Xe,transmission:Q,transmissionMap:O,thicknessMap:we,gradientMap:me,opaque:x.transparent===!1&&x.blending===Ur&&x.alphaToCoverage===!1,alphaMap:Pe,alphaTest:pe,alphaHash:ue,combine:x.combine,mapUv:De&&v(x.map.channel),aoMapUv:F&&v(x.aoMap.channel),lightMapUv:j&&v(x.lightMap.channel),bumpMapUv:q&&v(x.bumpMap.channel),normalMapUv:J&&v(x.normalMap.channel),displacementMapUv:A&&v(x.displacementMap.channel),emissiveMapUv:fe&&v(x.emissiveMap.channel),metalnessMapUv:le&&v(x.metalnessMap.channel),roughnessMapUv:se&&v(x.roughnessMap.channel),anisotropyMapUv:k&&v(x.anisotropyMap.channel),clearcoatMapUv:Te&&v(x.clearcoatMap.channel),clearcoatNormalMapUv:he&&v(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Re&&v(x.clearcoatRoughnessMap.channel),iridescenceMapUv:Ue&&v(x.iridescenceMap.channel),iridescenceThicknessMapUv:de&&v(x.iridescenceThicknessMap.channel),sheenColorMapUv:xe&&v(x.sheenColorMap.channel),sheenRoughnessMapUv:Ee&&v(x.sheenRoughnessMap.channel),specularMapUv:Ce&&v(x.specularMap.channel),specularColorMapUv:_e&&v(x.specularColorMap.channel),specularIntensityMapUv:Xe&&v(x.specularIntensityMap.channel),transmissionMapUv:O&&v(x.transmissionMap.channel),thicknessMapUv:we&&v(x.thicknessMap.channel),alphaMapUv:Pe&&v(x.alphaMap.channel),vertexTangents:!!te.attributes.tangent&&(J||ce),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!te.attributes.color&&te.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!te.attributes.uv&&(De||Pe),fog:!!ne,useFog:x.fog===!0,fogExp2:!!ne&&ne.isFogExp2,flatShading:x.flatShading===!0&&x.wireframe===!1,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:ie,skinning:z.isSkinnedMesh===!0,morphTargets:te.morphAttributes.position!==void 0,morphNormals:te.morphAttributes.normal!==void 0,morphColors:te.morphAttributes.color!==void 0,morphTargetsCount:Se,morphTextureStride:Fe,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:x.dithering,shadowMapEnabled:n.shadowMap.enabled&&L.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ge,decodeVideoTexture:De&&x.map.isVideoTexture===!0&&Ze.getTransfer(x.map.colorSpace)===ot,decodeVideoTextureEmissive:fe&&x.emissiveMap.isVideoTexture===!0&&Ze.getTransfer(x.emissiveMap.colorSpace)===ot,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===ni,flipSided:x.side===Qt,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:Me&&x.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Me&&x.extensions.multiDraw===!0||oe)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return ft.vertexUv1s=c.has(1),ft.vertexUv2s=c.has(2),ft.vertexUv3s=c.has(3),c.clear(),ft}function p(x){const y=[];if(x.shaderID?y.push(x.shaderID):(y.push(x.customVertexShaderID),y.push(x.customFragmentShaderID)),x.defines!==void 0)for(const L in x.defines)y.push(L),y.push(x.defines[L]);return x.isRawShaderMaterial===!1&&(b(y,x),T(y,x),y.push(n.outputColorSpace)),y.push(x.customProgramCacheKey),y.join()}function b(x,y){x.push(y.precision),x.push(y.outputColorSpace),x.push(y.envMapMode),x.push(y.envMapCubeUVHeight),x.push(y.mapUv),x.push(y.alphaMapUv),x.push(y.lightMapUv),x.push(y.aoMapUv),x.push(y.bumpMapUv),x.push(y.normalMapUv),x.push(y.displacementMapUv),x.push(y.emissiveMapUv),x.push(y.metalnessMapUv),x.push(y.roughnessMapUv),x.push(y.anisotropyMapUv),x.push(y.clearcoatMapUv),x.push(y.clearcoatNormalMapUv),x.push(y.clearcoatRoughnessMapUv),x.push(y.iridescenceMapUv),x.push(y.iridescenceThicknessMapUv),x.push(y.sheenColorMapUv),x.push(y.sheenRoughnessMapUv),x.push(y.specularMapUv),x.push(y.specularColorMapUv),x.push(y.specularIntensityMapUv),x.push(y.transmissionMapUv),x.push(y.thicknessMapUv),x.push(y.combine),x.push(y.fogExp2),x.push(y.sizeAttenuation),x.push(y.morphTargetsCount),x.push(y.morphAttributeCount),x.push(y.numDirLights),x.push(y.numPointLights),x.push(y.numSpotLights),x.push(y.numSpotLightMaps),x.push(y.numHemiLights),x.push(y.numRectAreaLights),x.push(y.numDirLightShadows),x.push(y.numPointLightShadows),x.push(y.numSpotLightShadows),x.push(y.numSpotLightShadowsWithMaps),x.push(y.numLightProbes),x.push(y.shadowMapType),x.push(y.toneMapping),x.push(y.numClippingPlanes),x.push(y.numClipIntersection),x.push(y.depthPacking)}function T(x,y){a.disableAll(),y.instancing&&a.enable(0),y.instancingColor&&a.enable(1),y.instancingMorph&&a.enable(2),y.matcap&&a.enable(3),y.envMap&&a.enable(4),y.normalMapObjectSpace&&a.enable(5),y.normalMapTangentSpace&&a.enable(6),y.clearcoat&&a.enable(7),y.iridescence&&a.enable(8),y.alphaTest&&a.enable(9),y.vertexColors&&a.enable(10),y.vertexAlphas&&a.enable(11),y.vertexUv1s&&a.enable(12),y.vertexUv2s&&a.enable(13),y.vertexUv3s&&a.enable(14),y.vertexTangents&&a.enable(15),y.anisotropy&&a.enable(16),y.alphaHash&&a.enable(17),y.batching&&a.enable(18),y.dispersion&&a.enable(19),y.batchingColor&&a.enable(20),y.gradientMap&&a.enable(21),x.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.reversedDepthBuffer&&a.enable(4),y.skinning&&a.enable(5),y.morphTargets&&a.enable(6),y.morphNormals&&a.enable(7),y.morphColors&&a.enable(8),y.premultipliedAlpha&&a.enable(9),y.shadowMapEnabled&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.decodeVideoTextureEmissive&&a.enable(20),y.alphaToCoverage&&a.enable(21),x.push(a.mask)}function M(x){const y=_[x.type];let L;if(y){const N=Un[y];L=$g.clone(N.uniforms)}else L=x.uniforms;return L}function w(x,y){let L=f.get(y);return L!==void 0?++L.usedTimes:(L=new wM(n,y,x,s),u.push(L),f.set(y,L)),L}function P(x){if(--x.usedTimes===0){const y=u.indexOf(x);u[y]=u[u.length-1],u.pop(),f.delete(x.cacheKey),x.destroy()}}function D(x){l.remove(x)}function V(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:M,acquireProgram:w,releaseProgram:P,releaseShaderCache:D,programs:u,dispose:V}}function IM(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function r(o,a,l){n.get(o)[a]=l}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function LM(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Tf(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Af(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(f,d,h,_,v,m){let p=n[e];return p===void 0?(p={id:f.id,object:f,geometry:d,material:h,groupOrder:_,renderOrder:f.renderOrder,z:v,group:m},n[e]=p):(p.id=f.id,p.object=f,p.geometry=d,p.material=h,p.groupOrder=_,p.renderOrder=f.renderOrder,p.z=v,p.group=m),e++,p}function a(f,d,h,_,v,m){const p=o(f,d,h,_,v,m);h.transmission>0?i.push(p):h.transparent===!0?r.push(p):t.push(p)}function l(f,d,h,_,v,m){const p=o(f,d,h,_,v,m);h.transmission>0?i.unshift(p):h.transparent===!0?r.unshift(p):t.unshift(p)}function c(f,d){t.length>1&&t.sort(f||LM),i.length>1&&i.sort(d||Tf),r.length>1&&r.sort(d||Tf)}function u(){for(let f=e,d=n.length;f<d;f++){const h=n[f];if(h.id===null)break;h.id=null,h.object=null,h.geometry=null,h.material=null,h.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function UM(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new Af,n.set(i,[o])):r>=s.length?(o=new Af,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function NM(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new Y,color:new at};break;case"SpotLight":t={position:new Y,direction:new Y,color:new at,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new Y,color:new at,distance:0,decay:0};break;case"HemisphereLight":t={direction:new Y,skyColor:new at,groundColor:new at};break;case"RectAreaLight":t={color:new at,position:new Y,halfWidth:new Y,halfHeight:new Y};break}return n[e.id]=t,t}}}function FM(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let OM=0;function BM(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function VM(n){const e=new NM,t=FM(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new Y);const r=new Y,s=new Mt,o=new Mt;function a(c){let u=0,f=0,d=0;for(let x=0;x<9;x++)i.probe[x].set(0,0,0);let h=0,_=0,v=0,m=0,p=0,b=0,T=0,M=0,w=0,P=0,D=0;c.sort(BM);for(let x=0,y=c.length;x<y;x++){const L=c[x],N=L.color,z=L.intensity,ne=L.distance;let te=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===Vr?te=L.shadow.map.texture:te=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)u+=N.r*z,f+=N.g*z,d+=N.b*z;else if(L.isLightProbe){for(let K=0;K<9;K++)i.probe[K].addScaledVector(L.sh.coefficients[K],z);D++}else if(L.isDirectionalLight){const K=e.get(L);if(K.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const H=L.shadow,ee=t.get(L);ee.shadowIntensity=H.intensity,ee.shadowBias=H.bias,ee.shadowNormalBias=H.normalBias,ee.shadowRadius=H.radius,ee.shadowMapSize=H.mapSize,i.directionalShadow[h]=ee,i.directionalShadowMap[h]=te,i.directionalShadowMatrix[h]=L.shadow.matrix,b++}i.directional[h]=K,h++}else if(L.isSpotLight){const K=e.get(L);K.position.setFromMatrixPosition(L.matrixWorld),K.color.copy(N).multiplyScalar(z),K.distance=ne,K.coneCos=Math.cos(L.angle),K.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),K.decay=L.decay,i.spot[v]=K;const H=L.shadow;if(L.map&&(i.spotLightMap[w]=L.map,w++,H.updateMatrices(L),L.castShadow&&P++),i.spotLightMatrix[v]=H.matrix,L.castShadow){const ee=t.get(L);ee.shadowIntensity=H.intensity,ee.shadowBias=H.bias,ee.shadowNormalBias=H.normalBias,ee.shadowRadius=H.radius,ee.shadowMapSize=H.mapSize,i.spotShadow[v]=ee,i.spotShadowMap[v]=te,M++}v++}else if(L.isRectAreaLight){const K=e.get(L);K.color.copy(N).multiplyScalar(z),K.halfWidth.set(L.width*.5,0,0),K.halfHeight.set(0,L.height*.5,0),i.rectArea[m]=K,m++}else if(L.isPointLight){const K=e.get(L);if(K.color.copy(L.color).multiplyScalar(L.intensity),K.distance=L.distance,K.decay=L.decay,L.castShadow){const H=L.shadow,ee=t.get(L);ee.shadowIntensity=H.intensity,ee.shadowBias=H.bias,ee.shadowNormalBias=H.normalBias,ee.shadowRadius=H.radius,ee.shadowMapSize=H.mapSize,ee.shadowCameraNear=H.camera.near,ee.shadowCameraFar=H.camera.far,i.pointShadow[_]=ee,i.pointShadowMap[_]=te,i.pointShadowMatrix[_]=L.shadow.matrix,T++}i.point[_]=K,_++}else if(L.isHemisphereLight){const K=e.get(L);K.skyColor.copy(L.color).multiplyScalar(z),K.groundColor.copy(L.groundColor).multiplyScalar(z),i.hemi[p]=K,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=be.LTC_FLOAT_1,i.rectAreaLTC2=be.LTC_FLOAT_2):(i.rectAreaLTC1=be.LTC_HALF_1,i.rectAreaLTC2=be.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=d;const V=i.hash;(V.directionalLength!==h||V.pointLength!==_||V.spotLength!==v||V.rectAreaLength!==m||V.hemiLength!==p||V.numDirectionalShadows!==b||V.numPointShadows!==T||V.numSpotShadows!==M||V.numSpotMaps!==w||V.numLightProbes!==D)&&(i.directional.length=h,i.spot.length=v,i.rectArea.length=m,i.point.length=_,i.hemi.length=p,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.pointShadow.length=T,i.pointShadowMap.length=T,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=b,i.pointShadowMatrix.length=T,i.spotLightMatrix.length=M+w-P,i.spotLightMap.length=w,i.numSpotLightShadowsWithMaps=P,i.numLightProbes=D,V.directionalLength=h,V.pointLength=_,V.spotLength=v,V.rectAreaLength=m,V.hemiLength=p,V.numDirectionalShadows=b,V.numPointShadows=T,V.numSpotShadows=M,V.numSpotMaps=w,V.numLightProbes=D,i.version=OM++)}function l(c,u){let f=0,d=0,h=0,_=0,v=0;const m=u.matrixWorldInverse;for(let p=0,b=c.length;p<b;p++){const T=c[p];if(T.isDirectionalLight){const M=i.directional[f];M.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(m),f++}else if(T.isSpotLight){const M=i.spot[h];M.position.setFromMatrixPosition(T.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(m),h++}else if(T.isRectAreaLight){const M=i.rectArea[_];M.position.setFromMatrixPosition(T.matrixWorld),M.position.applyMatrix4(m),o.identity(),s.copy(T.matrixWorld),s.premultiply(m),o.extractRotation(s),M.halfWidth.set(T.width*.5,0,0),M.halfHeight.set(0,T.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),_++}else if(T.isPointLight){const M=i.point[d];M.position.setFromMatrixPosition(T.matrixWorld),M.position.applyMatrix4(m),d++}else if(T.isHemisphereLight){const M=i.hemi[v];M.direction.setFromMatrixPosition(T.matrixWorld),M.direction.transformDirection(m),v++}}}return{setup:a,setupView:l,state:i}}function wf(n){const e=new VM(n),t=[],i=[];function r(u){c.camera=u,t.length=0,i.length=0}function s(u){t.push(u)}function o(u){i.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function zM(n){let e=new WeakMap;function t(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new wf(n),e.set(r,[a])):s>=o.length?(a=new wf(n),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:t,dispose:i}}const HM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,GM=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,kM=[new Y(1,0,0),new Y(-1,0,0),new Y(0,1,0),new Y(0,-1,0),new Y(0,0,1),new Y(0,0,-1)],WM=[new Y(0,-1,0),new Y(0,-1,0),new Y(0,0,1),new Y(0,0,-1),new Y(0,-1,0),new Y(0,-1,0)],Rf=new Mt,ts=new Y,Ga=new Y;function XM(n,e,t){let i=new Oh;const r=new ct,s=new ct,o=new St,a=new a_,l=new l_,c={},u=t.maxTextureSize,f={[Oi]:Qt,[Qt]:Oi,[ni]:ni},d=new Gn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ct},radius:{value:4}},vertexShader:HM,fragmentShader:GM}),h=d.clone();h.defines.HORIZONTAL_PASS=1;const _=new Rn;_.setAttribute("position",new Xt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new pi(_,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=mo;let p=this.type;this.render=function(P,D,V){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||P.length===0)return;P.type===j0&&(ke("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),P.type=mo);const x=n.getRenderTarget(),y=n.getActiveCubeFace(),L=n.getActiveMipmapLevel(),N=n.state;N.setBlending(ri),N.buffers.depth.getReversed()===!0?N.buffers.color.setClear(0,0,0,0):N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const z=p!==this.type;z&&D.traverse(function(ne){ne.material&&(Array.isArray(ne.material)?ne.material.forEach(te=>te.needsUpdate=!0):ne.material.needsUpdate=!0)});for(let ne=0,te=P.length;ne<te;ne++){const K=P[ne],H=K.shadow;if(H===void 0){ke("WebGLShadowMap:",K,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;r.copy(H.mapSize);const ee=H.getFrameExtents();if(r.multiply(ee),s.copy(H.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/ee.x),r.x=s.x*ee.x,H.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/ee.y),r.y=s.y*ee.y,H.mapSize.y=s.y)),H.map===null||z===!0){if(H.map!==null&&(H.map.depthTexture!==null&&(H.map.depthTexture.dispose(),H.map.depthTexture=null),H.map.dispose()),this.type===rs){if(K.isPointLight){ke("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new zn(r.x,r.y,{format:Vr,type:fi,minFilter:Ot,magFilter:Ot,generateMipmaps:!1}),H.map.texture.name=K.name+".shadowMap",H.map.depthTexture=new Ts(r.x,r.y,Nn),H.map.depthTexture.name=K.name+".shadowMapDepth",H.map.depthTexture.format=di,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Pt,H.map.depthTexture.magFilter=Pt}else{K.isPointLight?(H.map=new Fh(r.x),H.map.depthTexture=new s_(r.x,Hn)):(H.map=new zn(r.x,r.y),H.map.depthTexture=new Ts(r.x,r.y,Hn)),H.map.depthTexture.name=K.name+".shadowMap",H.map.depthTexture.format=di;const ge=n.state.buffers.depth.getReversed();this.type===mo?(H.map.depthTexture.compareFunction=ge?Fc:Nc,H.map.depthTexture.minFilter=Ot,H.map.depthTexture.magFilter=Ot):(H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Pt,H.map.depthTexture.magFilter=Pt)}H.camera.updateProjectionMatrix()}const ve=H.map.isWebGLCubeRenderTarget?6:1;for(let ge=0;ge<ve;ge++){if(H.map.isWebGLCubeRenderTarget)n.setRenderTarget(H.map,ge),n.clear();else{ge===0&&(n.setRenderTarget(H.map),n.clear());const Se=H.getViewport(ge);o.set(s.x*Se.x,s.y*Se.y,s.x*Se.z,s.y*Se.w),N.viewport(o)}if(K.isPointLight){const Se=H.camera,Fe=H.matrix,ze=K.distance||Se.far;ze!==Se.far&&(Se.far=ze,Se.updateProjectionMatrix()),ts.setFromMatrixPosition(K.matrixWorld),Se.position.copy(ts),Ga.copy(Se.position),Ga.add(kM[ge]),Se.up.copy(WM[ge]),Se.lookAt(Ga),Se.updateMatrixWorld(),Fe.makeTranslation(-ts.x,-ts.y,-ts.z),Rf.multiplyMatrices(Se.projectionMatrix,Se.matrixWorldInverse),H._frustum.setFromProjectionMatrix(Rf,Se.coordinateSystem,Se.reversedDepth)}else H.updateMatrices(K);i=H.getFrustum(),M(D,V,H.camera,K,this.type)}H.isPointLightShadow!==!0&&this.type===rs&&b(H,V),H.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(x,y,L)};function b(P,D){const V=e.update(v);d.defines.VSM_SAMPLES!==P.blurSamples&&(d.defines.VSM_SAMPLES=P.blurSamples,h.defines.VSM_SAMPLES=P.blurSamples,d.needsUpdate=!0,h.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new zn(r.x,r.y,{format:Vr,type:fi})),d.uniforms.shadow_pass.value=P.map.depthTexture,d.uniforms.resolution.value=P.mapSize,d.uniforms.radius.value=P.radius,n.setRenderTarget(P.mapPass),n.clear(),n.renderBufferDirect(D,null,V,d,v,null),h.uniforms.shadow_pass.value=P.mapPass.texture,h.uniforms.resolution.value=P.mapSize,h.uniforms.radius.value=P.radius,n.setRenderTarget(P.map),n.clear(),n.renderBufferDirect(D,null,V,h,v,null)}function T(P,D,V,x){let y=null;const L=V.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(L!==void 0)y=L;else if(y=V.isPointLight===!0?l:a,n.localClippingEnabled&&D.clipShadows===!0&&Array.isArray(D.clippingPlanes)&&D.clippingPlanes.length!==0||D.displacementMap&&D.displacementScale!==0||D.alphaMap&&D.alphaTest>0||D.map&&D.alphaTest>0||D.alphaToCoverage===!0){const N=y.uuid,z=D.uuid;let ne=c[N];ne===void 0&&(ne={},c[N]=ne);let te=ne[z];te===void 0&&(te=y.clone(),ne[z]=te,D.addEventListener("dispose",w)),y=te}if(y.visible=D.visible,y.wireframe=D.wireframe,x===rs?y.side=D.shadowSide!==null?D.shadowSide:D.side:y.side=D.shadowSide!==null?D.shadowSide:f[D.side],y.alphaMap=D.alphaMap,y.alphaTest=D.alphaToCoverage===!0?.5:D.alphaTest,y.map=D.map,y.clipShadows=D.clipShadows,y.clippingPlanes=D.clippingPlanes,y.clipIntersection=D.clipIntersection,y.displacementMap=D.displacementMap,y.displacementScale=D.displacementScale,y.displacementBias=D.displacementBias,y.wireframeLinewidth=D.wireframeLinewidth,y.linewidth=D.linewidth,V.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const N=n.properties.get(y);N.light=V}return y}function M(P,D,V,x,y){if(P.visible===!1)return;if(P.layers.test(D.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&y===rs)&&(!P.frustumCulled||i.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,P.matrixWorld);const z=e.update(P),ne=P.material;if(Array.isArray(ne)){const te=z.groups;for(let K=0,H=te.length;K<H;K++){const ee=te[K],ve=ne[ee.materialIndex];if(ve&&ve.visible){const ge=T(P,ve,x,y);P.onBeforeShadow(n,P,D,V,z,ge,ee),n.renderBufferDirect(V,null,z,ge,P,ee),P.onAfterShadow(n,P,D,V,z,ge,ee)}}}else if(ne.visible){const te=T(P,ne,x,y);P.onBeforeShadow(n,P,D,V,z,te,null),n.renderBufferDirect(V,null,z,te,P,null),P.onAfterShadow(n,P,D,V,z,te,null)}}const N=P.children;for(let z=0,ne=N.length;z<ne;z++)M(N[z],D,V,x,y)}function w(P){P.target.removeEventListener("dispose",w);for(const V in c){const x=c[V],y=P.target.uuid;y in x&&(x[y].dispose(),delete x[y])}}}const qM={[ul]:fl,[dl]:ml,[hl]:gl,[Or]:pl,[fl]:ul,[ml]:dl,[gl]:hl,[pl]:Or};function YM(n,e){function t(){let O=!1;const we=new St;let me=null;const Pe=new St(0,0,0,0);return{setMask:function(pe){me!==pe&&!O&&(n.colorMask(pe,pe,pe,pe),me=pe)},setLocked:function(pe){O=pe},setClear:function(pe,ue,Me,Ge,ft){ft===!0&&(pe*=Ge,ue*=Ge,Me*=Ge),we.set(pe,ue,Me,Ge),Pe.equals(we)===!1&&(n.clearColor(pe,ue,Me,Ge),Pe.copy(we))},reset:function(){O=!1,me=null,Pe.set(-1,0,0,0)}}}function i(){let O=!1,we=!1,me=null,Pe=null,pe=null;return{setReversed:function(ue){if(we!==ue){const Me=e.get("EXT_clip_control");ue?Me.clipControlEXT(Me.LOWER_LEFT_EXT,Me.ZERO_TO_ONE_EXT):Me.clipControlEXT(Me.LOWER_LEFT_EXT,Me.NEGATIVE_ONE_TO_ONE_EXT),we=ue;const Ge=pe;pe=null,this.setClear(Ge)}},getReversed:function(){return we},setTest:function(ue){ue?U(n.DEPTH_TEST):ie(n.DEPTH_TEST)},setMask:function(ue){me!==ue&&!O&&(n.depthMask(ue),me=ue)},setFunc:function(ue){if(we&&(ue=qM[ue]),Pe!==ue){switch(ue){case ul:n.depthFunc(n.NEVER);break;case fl:n.depthFunc(n.ALWAYS);break;case dl:n.depthFunc(n.LESS);break;case Or:n.depthFunc(n.LEQUAL);break;case hl:n.depthFunc(n.EQUAL);break;case pl:n.depthFunc(n.GEQUAL);break;case ml:n.depthFunc(n.GREATER);break;case gl:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Pe=ue}},setLocked:function(ue){O=ue},setClear:function(ue){pe!==ue&&(we&&(ue=1-ue),n.clearDepth(ue),pe=ue)},reset:function(){O=!1,me=null,Pe=null,pe=null,we=!1}}}function r(){let O=!1,we=null,me=null,Pe=null,pe=null,ue=null,Me=null,Ge=null,ft=null;return{setTest:function(rt){O||(rt?U(n.STENCIL_TEST):ie(n.STENCIL_TEST))},setMask:function(rt){we!==rt&&!O&&(n.stencilMask(rt),we=rt)},setFunc:function(rt,Cn,kn){(me!==rt||Pe!==Cn||pe!==kn)&&(n.stencilFunc(rt,Cn,kn),me=rt,Pe=Cn,pe=kn)},setOp:function(rt,Cn,kn){(ue!==rt||Me!==Cn||Ge!==kn)&&(n.stencilOp(rt,Cn,kn),ue=rt,Me=Cn,Ge=kn)},setLocked:function(rt){O=rt},setClear:function(rt){ft!==rt&&(n.clearStencil(rt),ft=rt)},reset:function(){O=!1,we=null,me=null,Pe=null,pe=null,ue=null,Me=null,Ge=null,ft=null}}}const s=new t,o=new i,a=new r,l=new WeakMap,c=new WeakMap;let u={},f={},d=new WeakMap,h=[],_=null,v=!1,m=null,p=null,b=null,T=null,M=null,w=null,P=null,D=new at(0,0,0),V=0,x=!1,y=null,L=null,N=null,z=null,ne=null;const te=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let K=!1,H=0;const ee=n.getParameter(n.VERSION);ee.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(ee)[1]),K=H>=1):ee.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(ee)[1]),K=H>=2);let ve=null,ge={};const Se=n.getParameter(n.SCISSOR_BOX),Fe=n.getParameter(n.VIEWPORT),ze=new St().fromArray(Se),tt=new St().fromArray(Fe);function je(O,we,me,Pe){const pe=new Uint8Array(4),ue=n.createTexture();n.bindTexture(O,ue),n.texParameteri(O,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(O,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Me=0;Me<me;Me++)O===n.TEXTURE_3D||O===n.TEXTURE_2D_ARRAY?n.texImage3D(we,0,n.RGBA,1,1,Pe,0,n.RGBA,n.UNSIGNED_BYTE,pe):n.texImage2D(we+Me,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,pe);return ue}const re={};re[n.TEXTURE_2D]=je(n.TEXTURE_2D,n.TEXTURE_2D,1),re[n.TEXTURE_CUBE_MAP]=je(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),re[n.TEXTURE_2D_ARRAY]=je(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),re[n.TEXTURE_3D]=je(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),U(n.DEPTH_TEST),o.setFunc(Or),q(!1),J(Iu),U(n.CULL_FACE),F(ri);function U(O){u[O]!==!0&&(n.enable(O),u[O]=!0)}function ie(O){u[O]!==!1&&(n.disable(O),u[O]=!1)}function ae(O,we){return f[O]!==we?(n.bindFramebuffer(O,we),f[O]=we,O===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=we),O===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=we),!0):!1}function oe(O,we){let me=h,Pe=!1;if(O){me=d.get(we),me===void 0&&(me=[],d.set(we,me));const pe=O.textures;if(me.length!==pe.length||me[0]!==n.COLOR_ATTACHMENT0){for(let ue=0,Me=pe.length;ue<Me;ue++)me[ue]=n.COLOR_ATTACHMENT0+ue;me.length=pe.length,Pe=!0}}else me[0]!==n.BACK&&(me[0]=n.BACK,Pe=!0);Pe&&n.drawBuffers(me)}function De(O){return _!==O?(n.useProgram(O),_=O,!0):!1}const R={[Qi]:n.FUNC_ADD,[J0]:n.FUNC_SUBTRACT,[Q0]:n.FUNC_REVERSE_SUBTRACT};R[eg]=n.MIN,R[tg]=n.MAX;const C={[ng]:n.ZERO,[ig]:n.ONE,[rg]:n.SRC_COLOR,[ll]:n.SRC_ALPHA,[ug]:n.SRC_ALPHA_SATURATE,[lg]:n.DST_COLOR,[og]:n.DST_ALPHA,[sg]:n.ONE_MINUS_SRC_COLOR,[cl]:n.ONE_MINUS_SRC_ALPHA,[cg]:n.ONE_MINUS_DST_COLOR,[ag]:n.ONE_MINUS_DST_ALPHA,[fg]:n.CONSTANT_COLOR,[dg]:n.ONE_MINUS_CONSTANT_COLOR,[hg]:n.CONSTANT_ALPHA,[pg]:n.ONE_MINUS_CONSTANT_ALPHA};function F(O,we,me,Pe,pe,ue,Me,Ge,ft,rt){if(O===ri){v===!0&&(ie(n.BLEND),v=!1);return}if(v===!1&&(U(n.BLEND),v=!0),O!==Z0){if(O!==m||rt!==x){if((p!==Qi||M!==Qi)&&(n.blendEquation(n.FUNC_ADD),p=Qi,M=Qi),rt)switch(O){case Ur:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case al:n.blendFunc(n.ONE,n.ONE);break;case Lu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Uu:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Qe("WebGLState: Invalid blending: ",O);break}else switch(O){case Ur:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case al:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Lu:Qe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Uu:Qe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Qe("WebGLState: Invalid blending: ",O);break}b=null,T=null,w=null,P=null,D.set(0,0,0),V=0,m=O,x=rt}return}pe=pe||we,ue=ue||me,Me=Me||Pe,(we!==p||pe!==M)&&(n.blendEquationSeparate(R[we],R[pe]),p=we,M=pe),(me!==b||Pe!==T||ue!==w||Me!==P)&&(n.blendFuncSeparate(C[me],C[Pe],C[ue],C[Me]),b=me,T=Pe,w=ue,P=Me),(Ge.equals(D)===!1||ft!==V)&&(n.blendColor(Ge.r,Ge.g,Ge.b,ft),D.copy(Ge),V=ft),m=O,x=!1}function j(O,we){O.side===ni?ie(n.CULL_FACE):U(n.CULL_FACE);let me=O.side===Qt;we&&(me=!me),q(me),O.blending===Ur&&O.transparent===!1?F(ri):F(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),o.setFunc(O.depthFunc),o.setTest(O.depthTest),o.setMask(O.depthWrite),s.setMask(O.colorWrite);const Pe=O.stencilWrite;a.setTest(Pe),Pe&&(a.setMask(O.stencilWriteMask),a.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),a.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),fe(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?U(n.SAMPLE_ALPHA_TO_COVERAGE):ie(n.SAMPLE_ALPHA_TO_COVERAGE)}function q(O){y!==O&&(O?n.frontFace(n.CW):n.frontFace(n.CCW),y=O)}function J(O){O!==$0?(U(n.CULL_FACE),O!==L&&(O===Iu?n.cullFace(n.BACK):O===K0?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ie(n.CULL_FACE),L=O}function A(O){O!==N&&(K&&n.lineWidth(O),N=O)}function fe(O,we,me){O?(U(n.POLYGON_OFFSET_FILL),(z!==we||ne!==me)&&(n.polygonOffset(we,me),z=we,ne=me)):ie(n.POLYGON_OFFSET_FILL)}function le(O){O?U(n.SCISSOR_TEST):ie(n.SCISSOR_TEST)}function se(O){O===void 0&&(O=n.TEXTURE0+te-1),ve!==O&&(n.activeTexture(O),ve=O)}function ce(O,we,me){me===void 0&&(ve===null?me=n.TEXTURE0+te-1:me=ve);let Pe=ge[me];Pe===void 0&&(Pe={type:void 0,texture:void 0},ge[me]=Pe),(Pe.type!==O||Pe.texture!==we)&&(ve!==me&&(n.activeTexture(me),ve=me),n.bindTexture(O,we||re[O]),Pe.type=O,Pe.texture=we)}function S(){const O=ge[ve];O!==void 0&&O.type!==void 0&&(n.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function g(){try{n.compressedTexImage2D(...arguments)}catch(O){Qe("WebGLState:",O)}}function I(){try{n.compressedTexImage3D(...arguments)}catch(O){Qe("WebGLState:",O)}}function X(){try{n.texSubImage2D(...arguments)}catch(O){Qe("WebGLState:",O)}}function Q(){try{n.texSubImage3D(...arguments)}catch(O){Qe("WebGLState:",O)}}function k(){try{n.compressedTexSubImage2D(...arguments)}catch(O){Qe("WebGLState:",O)}}function Te(){try{n.compressedTexSubImage3D(...arguments)}catch(O){Qe("WebGLState:",O)}}function he(){try{n.texStorage2D(...arguments)}catch(O){Qe("WebGLState:",O)}}function Re(){try{n.texStorage3D(...arguments)}catch(O){Qe("WebGLState:",O)}}function Ue(){try{n.texImage2D(...arguments)}catch(O){Qe("WebGLState:",O)}}function de(){try{n.texImage3D(...arguments)}catch(O){Qe("WebGLState:",O)}}function xe(O){ze.equals(O)===!1&&(n.scissor(O.x,O.y,O.z,O.w),ze.copy(O))}function Ee(O){tt.equals(O)===!1&&(n.viewport(O.x,O.y,O.z,O.w),tt.copy(O))}function Ce(O,we){let me=c.get(we);me===void 0&&(me=new WeakMap,c.set(we,me));let Pe=me.get(O);Pe===void 0&&(Pe=n.getUniformBlockIndex(we,O.name),me.set(O,Pe))}function _e(O,we){const Pe=c.get(we).get(O);l.get(we)!==Pe&&(n.uniformBlockBinding(we,Pe,O.__bindingPointIndex),l.set(we,Pe))}function Xe(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},ve=null,ge={},f={},d=new WeakMap,h=[],_=null,v=!1,m=null,p=null,b=null,T=null,M=null,w=null,P=null,D=new at(0,0,0),V=0,x=!1,y=null,L=null,N=null,z=null,ne=null,ze.set(0,0,n.canvas.width,n.canvas.height),tt.set(0,0,n.canvas.width,n.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:U,disable:ie,bindFramebuffer:ae,drawBuffers:oe,useProgram:De,setBlending:F,setMaterial:j,setFlipSided:q,setCullFace:J,setLineWidth:A,setPolygonOffset:fe,setScissorTest:le,activeTexture:se,bindTexture:ce,unbindTexture:S,compressedTexImage2D:g,compressedTexImage3D:I,texImage2D:Ue,texImage3D:de,updateUBOMapping:Ce,uniformBlockBinding:_e,texStorage2D:he,texStorage3D:Re,texSubImage2D:X,texSubImage3D:Q,compressedTexSubImage2D:k,compressedTexSubImage3D:Te,scissor:xe,viewport:Ee,reset:Xe}}function $M(n,e,t,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ct,u=new WeakMap;let f;const d=new WeakMap;let h=!1;try{h=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(S,g){return h?new OffscreenCanvas(S,g):Po("canvas")}function v(S,g,I){let X=1;const Q=ce(S);if((Q.width>I||Q.height>I)&&(X=I/Math.max(Q.width,Q.height)),X<1)if(typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&S instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&S instanceof ImageBitmap||typeof VideoFrame<"u"&&S instanceof VideoFrame){const k=Math.floor(X*Q.width),Te=Math.floor(X*Q.height);f===void 0&&(f=_(k,Te));const he=g?_(k,Te):f;return he.width=k,he.height=Te,he.getContext("2d").drawImage(S,0,0,k,Te),ke("WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+k+"x"+Te+")."),he}else return"data"in S&&ke("WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),S;return S}function m(S){return S.generateMipmaps}function p(S){n.generateMipmap(S)}function b(S){return S.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:S.isWebGL3DRenderTarget?n.TEXTURE_3D:S.isWebGLArrayRenderTarget||S.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function T(S,g,I,X,Q=!1){if(S!==null){if(n[S]!==void 0)return n[S];ke("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+S+"'")}let k=g;if(g===n.RED&&(I===n.FLOAT&&(k=n.R32F),I===n.HALF_FLOAT&&(k=n.R16F),I===n.UNSIGNED_BYTE&&(k=n.R8)),g===n.RED_INTEGER&&(I===n.UNSIGNED_BYTE&&(k=n.R8UI),I===n.UNSIGNED_SHORT&&(k=n.R16UI),I===n.UNSIGNED_INT&&(k=n.R32UI),I===n.BYTE&&(k=n.R8I),I===n.SHORT&&(k=n.R16I),I===n.INT&&(k=n.R32I)),g===n.RG&&(I===n.FLOAT&&(k=n.RG32F),I===n.HALF_FLOAT&&(k=n.RG16F),I===n.UNSIGNED_BYTE&&(k=n.RG8)),g===n.RG_INTEGER&&(I===n.UNSIGNED_BYTE&&(k=n.RG8UI),I===n.UNSIGNED_SHORT&&(k=n.RG16UI),I===n.UNSIGNED_INT&&(k=n.RG32UI),I===n.BYTE&&(k=n.RG8I),I===n.SHORT&&(k=n.RG16I),I===n.INT&&(k=n.RG32I)),g===n.RGB_INTEGER&&(I===n.UNSIGNED_BYTE&&(k=n.RGB8UI),I===n.UNSIGNED_SHORT&&(k=n.RGB16UI),I===n.UNSIGNED_INT&&(k=n.RGB32UI),I===n.BYTE&&(k=n.RGB8I),I===n.SHORT&&(k=n.RGB16I),I===n.INT&&(k=n.RGB32I)),g===n.RGBA_INTEGER&&(I===n.UNSIGNED_BYTE&&(k=n.RGBA8UI),I===n.UNSIGNED_SHORT&&(k=n.RGBA16UI),I===n.UNSIGNED_INT&&(k=n.RGBA32UI),I===n.BYTE&&(k=n.RGBA8I),I===n.SHORT&&(k=n.RGBA16I),I===n.INT&&(k=n.RGBA32I)),g===n.RGB&&(I===n.UNSIGNED_INT_5_9_9_9_REV&&(k=n.RGB9_E5),I===n.UNSIGNED_INT_10F_11F_11F_REV&&(k=n.R11F_G11F_B10F)),g===n.RGBA){const Te=Q?Ro:Ze.getTransfer(X);I===n.FLOAT&&(k=n.RGBA32F),I===n.HALF_FLOAT&&(k=n.RGBA16F),I===n.UNSIGNED_BYTE&&(k=Te===ot?n.SRGB8_ALPHA8:n.RGBA8),I===n.UNSIGNED_SHORT_4_4_4_4&&(k=n.RGBA4),I===n.UNSIGNED_SHORT_5_5_5_1&&(k=n.RGB5_A1)}return(k===n.R16F||k===n.R32F||k===n.RG16F||k===n.RG32F||k===n.RGBA16F||k===n.RGBA32F)&&e.get("EXT_color_buffer_float"),k}function M(S,g){let I;return S?g===null||g===Hn||g===ys?I=n.DEPTH24_STENCIL8:g===Nn?I=n.DEPTH32F_STENCIL8:g===Es&&(I=n.DEPTH24_STENCIL8,ke("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===Hn||g===ys?I=n.DEPTH_COMPONENT24:g===Nn?I=n.DEPTH_COMPONENT32F:g===Es&&(I=n.DEPTH_COMPONENT16),I}function w(S,g){return m(S)===!0||S.isFramebufferTexture&&S.minFilter!==Pt&&S.minFilter!==Ot?Math.log2(Math.max(g.width,g.height))+1:S.mipmaps!==void 0&&S.mipmaps.length>0?S.mipmaps.length:S.isCompressedTexture&&Array.isArray(S.image)?g.mipmaps.length:1}function P(S){const g=S.target;g.removeEventListener("dispose",P),V(g),g.isVideoTexture&&u.delete(g)}function D(S){const g=S.target;g.removeEventListener("dispose",D),y(g)}function V(S){const g=i.get(S);if(g.__webglInit===void 0)return;const I=S.source,X=d.get(I);if(X){const Q=X[g.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&x(S),Object.keys(X).length===0&&d.delete(I)}i.remove(S)}function x(S){const g=i.get(S);n.deleteTexture(g.__webglTexture);const I=S.source,X=d.get(I);delete X[g.__cacheKey],o.memory.textures--}function y(S){const g=i.get(S);if(S.depthTexture&&(S.depthTexture.dispose(),i.remove(S.depthTexture)),S.isWebGLCubeRenderTarget)for(let X=0;X<6;X++){if(Array.isArray(g.__webglFramebuffer[X]))for(let Q=0;Q<g.__webglFramebuffer[X].length;Q++)n.deleteFramebuffer(g.__webglFramebuffer[X][Q]);else n.deleteFramebuffer(g.__webglFramebuffer[X]);g.__webglDepthbuffer&&n.deleteRenderbuffer(g.__webglDepthbuffer[X])}else{if(Array.isArray(g.__webglFramebuffer))for(let X=0;X<g.__webglFramebuffer.length;X++)n.deleteFramebuffer(g.__webglFramebuffer[X]);else n.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&n.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&n.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let X=0;X<g.__webglColorRenderbuffer.length;X++)g.__webglColorRenderbuffer[X]&&n.deleteRenderbuffer(g.__webglColorRenderbuffer[X]);g.__webglDepthRenderbuffer&&n.deleteRenderbuffer(g.__webglDepthRenderbuffer)}const I=S.textures;for(let X=0,Q=I.length;X<Q;X++){const k=i.get(I[X]);k.__webglTexture&&(n.deleteTexture(k.__webglTexture),o.memory.textures--),i.remove(I[X])}i.remove(S)}let L=0;function N(){L=0}function z(){const S=L;return S>=r.maxTextures&&ke("WebGLTextures: Trying to use "+S+" texture units while this GPU supports only "+r.maxTextures),L+=1,S}function ne(S){const g=[];return g.push(S.wrapS),g.push(S.wrapT),g.push(S.wrapR||0),g.push(S.magFilter),g.push(S.minFilter),g.push(S.anisotropy),g.push(S.internalFormat),g.push(S.format),g.push(S.type),g.push(S.generateMipmaps),g.push(S.premultiplyAlpha),g.push(S.flipY),g.push(S.unpackAlignment),g.push(S.colorSpace),g.join()}function te(S,g){const I=i.get(S);if(S.isVideoTexture&&le(S),S.isRenderTargetTexture===!1&&S.isExternalTexture!==!0&&S.version>0&&I.__version!==S.version){const X=S.image;if(X===null)ke("WebGLRenderer: Texture marked for update but no image data found.");else if(X.complete===!1)ke("WebGLRenderer: Texture marked for update but image is incomplete");else{re(I,S,g);return}}else S.isExternalTexture&&(I.__webglTexture=S.sourceTexture?S.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,I.__webglTexture,n.TEXTURE0+g)}function K(S,g){const I=i.get(S);if(S.isRenderTargetTexture===!1&&S.version>0&&I.__version!==S.version){re(I,S,g);return}else S.isExternalTexture&&(I.__webglTexture=S.sourceTexture?S.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,I.__webglTexture,n.TEXTURE0+g)}function H(S,g){const I=i.get(S);if(S.isRenderTargetTexture===!1&&S.version>0&&I.__version!==S.version){re(I,S,g);return}t.bindTexture(n.TEXTURE_3D,I.__webglTexture,n.TEXTURE0+g)}function ee(S,g){const I=i.get(S);if(S.isCubeDepthTexture!==!0&&S.version>0&&I.__version!==S.version){U(I,S,g);return}t.bindTexture(n.TEXTURE_CUBE_MAP,I.__webglTexture,n.TEXTURE0+g)}const ve={[xl]:n.REPEAT,[ii]:n.CLAMP_TO_EDGE,[Sl]:n.MIRRORED_REPEAT},ge={[Pt]:n.NEAREST,[_g]:n.NEAREST_MIPMAP_NEAREST,[Hs]:n.NEAREST_MIPMAP_LINEAR,[Ot]:n.LINEAR,[da]:n.LINEAR_MIPMAP_NEAREST,[tr]:n.LINEAR_MIPMAP_LINEAR},Se={[Mg]:n.NEVER,[Ag]:n.ALWAYS,[Eg]:n.LESS,[Nc]:n.LEQUAL,[yg]:n.EQUAL,[Fc]:n.GEQUAL,[bg]:n.GREATER,[Tg]:n.NOTEQUAL};function Fe(S,g){if(g.type===Nn&&e.has("OES_texture_float_linear")===!1&&(g.magFilter===Ot||g.magFilter===da||g.magFilter===Hs||g.magFilter===tr||g.minFilter===Ot||g.minFilter===da||g.minFilter===Hs||g.minFilter===tr)&&ke("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(S,n.TEXTURE_WRAP_S,ve[g.wrapS]),n.texParameteri(S,n.TEXTURE_WRAP_T,ve[g.wrapT]),(S===n.TEXTURE_3D||S===n.TEXTURE_2D_ARRAY)&&n.texParameteri(S,n.TEXTURE_WRAP_R,ve[g.wrapR]),n.texParameteri(S,n.TEXTURE_MAG_FILTER,ge[g.magFilter]),n.texParameteri(S,n.TEXTURE_MIN_FILTER,ge[g.minFilter]),g.compareFunction&&(n.texParameteri(S,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(S,n.TEXTURE_COMPARE_FUNC,Se[g.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===Pt||g.minFilter!==Hs&&g.minFilter!==tr||g.type===Nn&&e.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||i.get(g).__currentAnisotropy){const I=e.get("EXT_texture_filter_anisotropic");n.texParameterf(S,I.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,r.getMaxAnisotropy())),i.get(g).__currentAnisotropy=g.anisotropy}}}function ze(S,g){let I=!1;S.__webglInit===void 0&&(S.__webglInit=!0,g.addEventListener("dispose",P));const X=g.source;let Q=d.get(X);Q===void 0&&(Q={},d.set(X,Q));const k=ne(g);if(k!==S.__cacheKey){Q[k]===void 0&&(Q[k]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,I=!0),Q[k].usedTimes++;const Te=Q[S.__cacheKey];Te!==void 0&&(Q[S.__cacheKey].usedTimes--,Te.usedTimes===0&&x(g)),S.__cacheKey=k,S.__webglTexture=Q[k].texture}return I}function tt(S,g,I){return Math.floor(Math.floor(S/I)/g)}function je(S,g,I,X){const k=S.updateRanges;if(k.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,g.width,g.height,I,X,g.data);else{k.sort((de,xe)=>de.start-xe.start);let Te=0;for(let de=1;de<k.length;de++){const xe=k[Te],Ee=k[de],Ce=xe.start+xe.count,_e=tt(Ee.start,g.width,4),Xe=tt(xe.start,g.width,4);Ee.start<=Ce+1&&_e===Xe&&tt(Ee.start+Ee.count-1,g.width,4)===_e?xe.count=Math.max(xe.count,Ee.start+Ee.count-xe.start):(++Te,k[Te]=Ee)}k.length=Te+1;const he=n.getParameter(n.UNPACK_ROW_LENGTH),Re=n.getParameter(n.UNPACK_SKIP_PIXELS),Ue=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,g.width);for(let de=0,xe=k.length;de<xe;de++){const Ee=k[de],Ce=Math.floor(Ee.start/4),_e=Math.ceil(Ee.count/4),Xe=Ce%g.width,O=Math.floor(Ce/g.width),we=_e,me=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,Xe),n.pixelStorei(n.UNPACK_SKIP_ROWS,O),t.texSubImage2D(n.TEXTURE_2D,0,Xe,O,we,me,I,X,g.data)}S.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,he),n.pixelStorei(n.UNPACK_SKIP_PIXELS,Re),n.pixelStorei(n.UNPACK_SKIP_ROWS,Ue)}}function re(S,g,I){let X=n.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(X=n.TEXTURE_2D_ARRAY),g.isData3DTexture&&(X=n.TEXTURE_3D);const Q=ze(S,g),k=g.source;t.bindTexture(X,S.__webglTexture,n.TEXTURE0+I);const Te=i.get(k);if(k.version!==Te.__version||Q===!0){t.activeTexture(n.TEXTURE0+I);const he=Ze.getPrimaries(Ze.workingColorSpace),Re=g.colorSpace===Ii?null:Ze.getPrimaries(g.colorSpace),Ue=g.colorSpace===Ii||he===Re?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,g.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,g.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ue);let de=v(g.image,!1,r.maxTextureSize);de=se(g,de);const xe=s.convert(g.format,g.colorSpace),Ee=s.convert(g.type);let Ce=T(g.internalFormat,xe,Ee,g.colorSpace,g.isVideoTexture);Fe(X,g);let _e;const Xe=g.mipmaps,O=g.isVideoTexture!==!0,we=Te.__version===void 0||Q===!0,me=k.dataReady,Pe=w(g,de);if(g.isDepthTexture)Ce=M(g.format===nr,g.type),we&&(O?t.texStorage2D(n.TEXTURE_2D,1,Ce,de.width,de.height):t.texImage2D(n.TEXTURE_2D,0,Ce,de.width,de.height,0,xe,Ee,null));else if(g.isDataTexture)if(Xe.length>0){O&&we&&t.texStorage2D(n.TEXTURE_2D,Pe,Ce,Xe[0].width,Xe[0].height);for(let pe=0,ue=Xe.length;pe<ue;pe++)_e=Xe[pe],O?me&&t.texSubImage2D(n.TEXTURE_2D,pe,0,0,_e.width,_e.height,xe,Ee,_e.data):t.texImage2D(n.TEXTURE_2D,pe,Ce,_e.width,_e.height,0,xe,Ee,_e.data);g.generateMipmaps=!1}else O?(we&&t.texStorage2D(n.TEXTURE_2D,Pe,Ce,de.width,de.height),me&&je(g,de,xe,Ee)):t.texImage2D(n.TEXTURE_2D,0,Ce,de.width,de.height,0,xe,Ee,de.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){O&&we&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Pe,Ce,Xe[0].width,Xe[0].height,de.depth);for(let pe=0,ue=Xe.length;pe<ue;pe++)if(_e=Xe[pe],g.format!==yn)if(xe!==null)if(O){if(me)if(g.layerUpdates.size>0){const Me=sf(_e.width,_e.height,g.format,g.type);for(const Ge of g.layerUpdates){const ft=_e.data.subarray(Ge*Me/_e.data.BYTES_PER_ELEMENT,(Ge+1)*Me/_e.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,pe,0,0,Ge,_e.width,_e.height,1,xe,ft)}g.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,pe,0,0,0,_e.width,_e.height,de.depth,xe,_e.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,pe,Ce,_e.width,_e.height,de.depth,0,_e.data,0,0);else ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else O?me&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,pe,0,0,0,_e.width,_e.height,de.depth,xe,Ee,_e.data):t.texImage3D(n.TEXTURE_2D_ARRAY,pe,Ce,_e.width,_e.height,de.depth,0,xe,Ee,_e.data)}else{O&&we&&t.texStorage2D(n.TEXTURE_2D,Pe,Ce,Xe[0].width,Xe[0].height);for(let pe=0,ue=Xe.length;pe<ue;pe++)_e=Xe[pe],g.format!==yn?xe!==null?O?me&&t.compressedTexSubImage2D(n.TEXTURE_2D,pe,0,0,_e.width,_e.height,xe,_e.data):t.compressedTexImage2D(n.TEXTURE_2D,pe,Ce,_e.width,_e.height,0,_e.data):ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):O?me&&t.texSubImage2D(n.TEXTURE_2D,pe,0,0,_e.width,_e.height,xe,Ee,_e.data):t.texImage2D(n.TEXTURE_2D,pe,Ce,_e.width,_e.height,0,xe,Ee,_e.data)}else if(g.isDataArrayTexture)if(O){if(we&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Pe,Ce,de.width,de.height,de.depth),me)if(g.layerUpdates.size>0){const pe=sf(de.width,de.height,g.format,g.type);for(const ue of g.layerUpdates){const Me=de.data.subarray(ue*pe/de.data.BYTES_PER_ELEMENT,(ue+1)*pe/de.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ue,de.width,de.height,1,xe,Ee,Me)}g.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,de.width,de.height,de.depth,xe,Ee,de.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ce,de.width,de.height,de.depth,0,xe,Ee,de.data);else if(g.isData3DTexture)O?(we&&t.texStorage3D(n.TEXTURE_3D,Pe,Ce,de.width,de.height,de.depth),me&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,de.width,de.height,de.depth,xe,Ee,de.data)):t.texImage3D(n.TEXTURE_3D,0,Ce,de.width,de.height,de.depth,0,xe,Ee,de.data);else if(g.isFramebufferTexture){if(we)if(O)t.texStorage2D(n.TEXTURE_2D,Pe,Ce,de.width,de.height);else{let pe=de.width,ue=de.height;for(let Me=0;Me<Pe;Me++)t.texImage2D(n.TEXTURE_2D,Me,Ce,pe,ue,0,xe,Ee,null),pe>>=1,ue>>=1}}else if(Xe.length>0){if(O&&we){const pe=ce(Xe[0]);t.texStorage2D(n.TEXTURE_2D,Pe,Ce,pe.width,pe.height)}for(let pe=0,ue=Xe.length;pe<ue;pe++)_e=Xe[pe],O?me&&t.texSubImage2D(n.TEXTURE_2D,pe,0,0,xe,Ee,_e):t.texImage2D(n.TEXTURE_2D,pe,Ce,xe,Ee,_e);g.generateMipmaps=!1}else if(O){if(we){const pe=ce(de);t.texStorage2D(n.TEXTURE_2D,Pe,Ce,pe.width,pe.height)}me&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,xe,Ee,de)}else t.texImage2D(n.TEXTURE_2D,0,Ce,xe,Ee,de);m(g)&&p(X),Te.__version=k.version,g.onUpdate&&g.onUpdate(g)}S.__version=g.version}function U(S,g,I){if(g.image.length!==6)return;const X=ze(S,g),Q=g.source;t.bindTexture(n.TEXTURE_CUBE_MAP,S.__webglTexture,n.TEXTURE0+I);const k=i.get(Q);if(Q.version!==k.__version||X===!0){t.activeTexture(n.TEXTURE0+I);const Te=Ze.getPrimaries(Ze.workingColorSpace),he=g.colorSpace===Ii?null:Ze.getPrimaries(g.colorSpace),Re=g.colorSpace===Ii||Te===he?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,g.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,g.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Re);const Ue=g.isCompressedTexture||g.image[0].isCompressedTexture,de=g.image[0]&&g.image[0].isDataTexture,xe=[];for(let ue=0;ue<6;ue++)!Ue&&!de?xe[ue]=v(g.image[ue],!0,r.maxCubemapSize):xe[ue]=de?g.image[ue].image:g.image[ue],xe[ue]=se(g,xe[ue]);const Ee=xe[0],Ce=s.convert(g.format,g.colorSpace),_e=s.convert(g.type),Xe=T(g.internalFormat,Ce,_e,g.colorSpace),O=g.isVideoTexture!==!0,we=k.__version===void 0||X===!0,me=Q.dataReady;let Pe=w(g,Ee);Fe(n.TEXTURE_CUBE_MAP,g);let pe;if(Ue){O&&we&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Pe,Xe,Ee.width,Ee.height);for(let ue=0;ue<6;ue++){pe=xe[ue].mipmaps;for(let Me=0;Me<pe.length;Me++){const Ge=pe[Me];g.format!==yn?Ce!==null?O?me&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Me,0,0,Ge.width,Ge.height,Ce,Ge.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Me,Xe,Ge.width,Ge.height,0,Ge.data):ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):O?me&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Me,0,0,Ge.width,Ge.height,Ce,_e,Ge.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Me,Xe,Ge.width,Ge.height,0,Ce,_e,Ge.data)}}}else{if(pe=g.mipmaps,O&&we){pe.length>0&&Pe++;const ue=ce(xe[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Pe,Xe,ue.width,ue.height)}for(let ue=0;ue<6;ue++)if(de){O?me&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,0,0,xe[ue].width,xe[ue].height,Ce,_e,xe[ue].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,Xe,xe[ue].width,xe[ue].height,0,Ce,_e,xe[ue].data);for(let Me=0;Me<pe.length;Me++){const ft=pe[Me].image[ue].image;O?me&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Me+1,0,0,ft.width,ft.height,Ce,_e,ft.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Me+1,Xe,ft.width,ft.height,0,Ce,_e,ft.data)}}else{O?me&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,0,0,Ce,_e,xe[ue]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,Xe,Ce,_e,xe[ue]);for(let Me=0;Me<pe.length;Me++){const Ge=pe[Me];O?me&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Me+1,0,0,Ce,_e,Ge.image[ue]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Me+1,Xe,Ce,_e,Ge.image[ue])}}}m(g)&&p(n.TEXTURE_CUBE_MAP),k.__version=Q.version,g.onUpdate&&g.onUpdate(g)}S.__version=g.version}function ie(S,g,I,X,Q,k){const Te=s.convert(I.format,I.colorSpace),he=s.convert(I.type),Re=T(I.internalFormat,Te,he,I.colorSpace),Ue=i.get(g),de=i.get(I);if(de.__renderTarget=g,!Ue.__hasExternalTextures){const xe=Math.max(1,g.width>>k),Ee=Math.max(1,g.height>>k);Q===n.TEXTURE_3D||Q===n.TEXTURE_2D_ARRAY?t.texImage3D(Q,k,Re,xe,Ee,g.depth,0,Te,he,null):t.texImage2D(Q,k,Re,xe,Ee,0,Te,he,null)}t.bindFramebuffer(n.FRAMEBUFFER,S),fe(g)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,X,Q,de.__webglTexture,0,A(g)):(Q===n.TEXTURE_2D||Q>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,X,Q,de.__webglTexture,k),t.bindFramebuffer(n.FRAMEBUFFER,null)}function ae(S,g,I){if(n.bindRenderbuffer(n.RENDERBUFFER,S),g.depthBuffer){const X=g.depthTexture,Q=X&&X.isDepthTexture?X.type:null,k=M(g.stencilBuffer,Q),Te=g.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;fe(g)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,A(g),k,g.width,g.height):I?n.renderbufferStorageMultisample(n.RENDERBUFFER,A(g),k,g.width,g.height):n.renderbufferStorage(n.RENDERBUFFER,k,g.width,g.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Te,n.RENDERBUFFER,S)}else{const X=g.textures;for(let Q=0;Q<X.length;Q++){const k=X[Q],Te=s.convert(k.format,k.colorSpace),he=s.convert(k.type),Re=T(k.internalFormat,Te,he,k.colorSpace);fe(g)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,A(g),Re,g.width,g.height):I?n.renderbufferStorageMultisample(n.RENDERBUFFER,A(g),Re,g.width,g.height):n.renderbufferStorage(n.RENDERBUFFER,Re,g.width,g.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function oe(S,g,I){const X=g.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,S),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Q=i.get(g.depthTexture);if(Q.__renderTarget=g,(!Q.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),X){if(Q.__webglInit===void 0&&(Q.__webglInit=!0,g.depthTexture.addEventListener("dispose",P)),Q.__webglTexture===void 0){Q.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,Q.__webglTexture),Fe(n.TEXTURE_CUBE_MAP,g.depthTexture);const Ue=s.convert(g.depthTexture.format),de=s.convert(g.depthTexture.type);let xe;g.depthTexture.format===di?xe=n.DEPTH_COMPONENT24:g.depthTexture.format===nr&&(xe=n.DEPTH24_STENCIL8);for(let Ee=0;Ee<6;Ee++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,xe,g.width,g.height,0,Ue,de,null)}}else te(g.depthTexture,0);const k=Q.__webglTexture,Te=A(g),he=X?n.TEXTURE_CUBE_MAP_POSITIVE_X+I:n.TEXTURE_2D,Re=g.depthTexture.format===nr?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(g.depthTexture.format===di)fe(g)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Re,he,k,0,Te):n.framebufferTexture2D(n.FRAMEBUFFER,Re,he,k,0);else if(g.depthTexture.format===nr)fe(g)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Re,he,k,0,Te):n.framebufferTexture2D(n.FRAMEBUFFER,Re,he,k,0);else throw new Error("Unknown depthTexture format")}function De(S){const g=i.get(S),I=S.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==S.depthTexture){const X=S.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),X){const Q=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,X.removeEventListener("dispose",Q)};X.addEventListener("dispose",Q),g.__depthDisposeCallback=Q}g.__boundDepthTexture=X}if(S.depthTexture&&!g.__autoAllocateDepthBuffer)if(I)for(let X=0;X<6;X++)oe(g.__webglFramebuffer[X],S,X);else{const X=S.texture.mipmaps;X&&X.length>0?oe(g.__webglFramebuffer[0],S,0):oe(g.__webglFramebuffer,S,0)}else if(I){g.__webglDepthbuffer=[];for(let X=0;X<6;X++)if(t.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer[X]),g.__webglDepthbuffer[X]===void 0)g.__webglDepthbuffer[X]=n.createRenderbuffer(),ae(g.__webglDepthbuffer[X],S,!1);else{const Q=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,k=g.__webglDepthbuffer[X];n.bindRenderbuffer(n.RENDERBUFFER,k),n.framebufferRenderbuffer(n.FRAMEBUFFER,Q,n.RENDERBUFFER,k)}}else{const X=S.texture.mipmaps;if(X&&X.length>0?t.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=n.createRenderbuffer(),ae(g.__webglDepthbuffer,S,!1);else{const Q=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,k=g.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,k),n.framebufferRenderbuffer(n.FRAMEBUFFER,Q,n.RENDERBUFFER,k)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function R(S,g,I){const X=i.get(S);g!==void 0&&ie(X.__webglFramebuffer,S,S.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),I!==void 0&&De(S)}function C(S){const g=S.texture,I=i.get(S),X=i.get(g);S.addEventListener("dispose",D);const Q=S.textures,k=S.isWebGLCubeRenderTarget===!0,Te=Q.length>1;if(Te||(X.__webglTexture===void 0&&(X.__webglTexture=n.createTexture()),X.__version=g.version,o.memory.textures++),k){I.__webglFramebuffer=[];for(let he=0;he<6;he++)if(g.mipmaps&&g.mipmaps.length>0){I.__webglFramebuffer[he]=[];for(let Re=0;Re<g.mipmaps.length;Re++)I.__webglFramebuffer[he][Re]=n.createFramebuffer()}else I.__webglFramebuffer[he]=n.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){I.__webglFramebuffer=[];for(let he=0;he<g.mipmaps.length;he++)I.__webglFramebuffer[he]=n.createFramebuffer()}else I.__webglFramebuffer=n.createFramebuffer();if(Te)for(let he=0,Re=Q.length;he<Re;he++){const Ue=i.get(Q[he]);Ue.__webglTexture===void 0&&(Ue.__webglTexture=n.createTexture(),o.memory.textures++)}if(S.samples>0&&fe(S)===!1){I.__webglMultisampledFramebuffer=n.createFramebuffer(),I.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,I.__webglMultisampledFramebuffer);for(let he=0;he<Q.length;he++){const Re=Q[he];I.__webglColorRenderbuffer[he]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,I.__webglColorRenderbuffer[he]);const Ue=s.convert(Re.format,Re.colorSpace),de=s.convert(Re.type),xe=T(Re.internalFormat,Ue,de,Re.colorSpace,S.isXRRenderTarget===!0),Ee=A(S);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ee,xe,S.width,S.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+he,n.RENDERBUFFER,I.__webglColorRenderbuffer[he])}n.bindRenderbuffer(n.RENDERBUFFER,null),S.depthBuffer&&(I.__webglDepthRenderbuffer=n.createRenderbuffer(),ae(I.__webglDepthRenderbuffer,S,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(k){t.bindTexture(n.TEXTURE_CUBE_MAP,X.__webglTexture),Fe(n.TEXTURE_CUBE_MAP,g);for(let he=0;he<6;he++)if(g.mipmaps&&g.mipmaps.length>0)for(let Re=0;Re<g.mipmaps.length;Re++)ie(I.__webglFramebuffer[he][Re],S,g,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+he,Re);else ie(I.__webglFramebuffer[he],S,g,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+he,0);m(g)&&p(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Te){for(let he=0,Re=Q.length;he<Re;he++){const Ue=Q[he],de=i.get(Ue);let xe=n.TEXTURE_2D;(S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(xe=S.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(xe,de.__webglTexture),Fe(xe,Ue),ie(I.__webglFramebuffer,S,Ue,n.COLOR_ATTACHMENT0+he,xe,0),m(Ue)&&p(xe)}t.unbindTexture()}else{let he=n.TEXTURE_2D;if((S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(he=S.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(he,X.__webglTexture),Fe(he,g),g.mipmaps&&g.mipmaps.length>0)for(let Re=0;Re<g.mipmaps.length;Re++)ie(I.__webglFramebuffer[Re],S,g,n.COLOR_ATTACHMENT0,he,Re);else ie(I.__webglFramebuffer,S,g,n.COLOR_ATTACHMENT0,he,0);m(g)&&p(he),t.unbindTexture()}S.depthBuffer&&De(S)}function F(S){const g=S.textures;for(let I=0,X=g.length;I<X;I++){const Q=g[I];if(m(Q)){const k=b(S),Te=i.get(Q).__webglTexture;t.bindTexture(k,Te),p(k),t.unbindTexture()}}}const j=[],q=[];function J(S){if(S.samples>0){if(fe(S)===!1){const g=S.textures,I=S.width,X=S.height;let Q=n.COLOR_BUFFER_BIT;const k=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Te=i.get(S),he=g.length>1;if(he)for(let Ue=0;Ue<g.length;Ue++)t.bindFramebuffer(n.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ue,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Te.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ue,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Te.__webglMultisampledFramebuffer);const Re=S.texture.mipmaps;Re&&Re.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Te.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Te.__webglFramebuffer);for(let Ue=0;Ue<g.length;Ue++){if(S.resolveDepthBuffer&&(S.depthBuffer&&(Q|=n.DEPTH_BUFFER_BIT),S.stencilBuffer&&S.resolveStencilBuffer&&(Q|=n.STENCIL_BUFFER_BIT)),he){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Te.__webglColorRenderbuffer[Ue]);const de=i.get(g[Ue]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,de,0)}n.blitFramebuffer(0,0,I,X,0,0,I,X,Q,n.NEAREST),l===!0&&(j.length=0,q.length=0,j.push(n.COLOR_ATTACHMENT0+Ue),S.depthBuffer&&S.resolveDepthBuffer===!1&&(j.push(k),q.push(k),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,q)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,j))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),he)for(let Ue=0;Ue<g.length;Ue++){t.bindFramebuffer(n.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ue,n.RENDERBUFFER,Te.__webglColorRenderbuffer[Ue]);const de=i.get(g[Ue]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Te.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ue,n.TEXTURE_2D,de,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Te.__webglMultisampledFramebuffer)}else if(S.depthBuffer&&S.resolveDepthBuffer===!1&&l){const g=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[g])}}}function A(S){return Math.min(r.maxSamples,S.samples)}function fe(S){const g=i.get(S);return S.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function le(S){const g=o.render.frame;u.get(S)!==g&&(u.set(S,g),S.update())}function se(S,g){const I=S.colorSpace,X=S.format,Q=S.type;return S.isCompressedTexture===!0||S.isVideoTexture===!0||I!==zr&&I!==Ii&&(Ze.getTransfer(I)===ot?(X!==yn||Q!==dn)&&ke("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Qe("WebGLTextures: Unsupported texture color space:",I)),g}function ce(S){return typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement?(c.width=S.naturalWidth||S.width,c.height=S.naturalHeight||S.height):typeof VideoFrame<"u"&&S instanceof VideoFrame?(c.width=S.displayWidth,c.height=S.displayHeight):(c.width=S.width,c.height=S.height),c}this.allocateTextureUnit=z,this.resetTextureUnits=N,this.setTexture2D=te,this.setTexture2DArray=K,this.setTexture3D=H,this.setTextureCube=ee,this.rebindTextures=R,this.setupRenderTarget=C,this.updateRenderTargetMipmap=F,this.updateMultisampleRenderTarget=J,this.setupDepthRenderbuffer=De,this.setupFrameBufferTexture=ie,this.useMultisampledRTT=fe,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function KM(n,e){function t(i,r=Ii){let s;const o=Ze.getTransfer(r);if(i===dn)return n.UNSIGNED_BYTE;if(i===Pc)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Dc)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Sh)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Mh)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===vh)return n.BYTE;if(i===xh)return n.SHORT;if(i===Es)return n.UNSIGNED_SHORT;if(i===Cc)return n.INT;if(i===Hn)return n.UNSIGNED_INT;if(i===Nn)return n.FLOAT;if(i===fi)return n.HALF_FLOAT;if(i===Eh)return n.ALPHA;if(i===yh)return n.RGB;if(i===yn)return n.RGBA;if(i===di)return n.DEPTH_COMPONENT;if(i===nr)return n.DEPTH_STENCIL;if(i===bh)return n.RED;if(i===Ic)return n.RED_INTEGER;if(i===Vr)return n.RG;if(i===Lc)return n.RG_INTEGER;if(i===Uc)return n.RGBA_INTEGER;if(i===go||i===_o||i===vo||i===xo)if(o===ot)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===go)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===_o)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===vo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===xo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===go)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===_o)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===vo)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===xo)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Ml||i===El||i===yl||i===bl)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Ml)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===El)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===yl)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===bl)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Tl||i===Al||i===wl||i===Rl||i===Cl||i===Pl||i===Dl)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Tl||i===Al)return o===ot?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===wl)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===Rl)return s.COMPRESSED_R11_EAC;if(i===Cl)return s.COMPRESSED_SIGNED_R11_EAC;if(i===Pl)return s.COMPRESSED_RG11_EAC;if(i===Dl)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Il||i===Ll||i===Ul||i===Nl||i===Fl||i===Ol||i===Bl||i===Vl||i===zl||i===Hl||i===Gl||i===kl||i===Wl||i===Xl)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Il)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Ll)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Ul)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Nl)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Fl)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Ol)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Bl)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Vl)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===zl)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Hl)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Gl)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===kl)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Wl)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Xl)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===ql||i===Yl||i===$l)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===ql)return o===ot?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Yl)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===$l)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Kl||i===jl||i===Zl||i===Jl)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Kl)return s.COMPRESSED_RED_RGTC1_EXT;if(i===jl)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Zl)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Jl)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ys?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const jM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ZM=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class JM{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new Vh(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Gn({vertexShader:jM,fragmentShader:ZM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new pi(new Xo(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class QM extends Wr{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,d=null,h=null,_=null;const v=typeof XRWebGLBinding<"u",m=new JM,p={},b=t.getContextAttributes();let T=null,M=null;const w=[],P=[],D=new ct;let V=null;const x=new fn;x.viewport=new St;const y=new fn;y.viewport=new St;const L=[x,y],N=new c_;let z=null,ne=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(re){let U=w[re];return U===void 0&&(U=new Na,w[re]=U),U.getTargetRaySpace()},this.getControllerGrip=function(re){let U=w[re];return U===void 0&&(U=new Na,w[re]=U),U.getGripSpace()},this.getHand=function(re){let U=w[re];return U===void 0&&(U=new Na,w[re]=U),U.getHandSpace()};function te(re){const U=P.indexOf(re.inputSource);if(U===-1)return;const ie=w[U];ie!==void 0&&(ie.update(re.inputSource,re.frame,c||o),ie.dispatchEvent({type:re.type,data:re.inputSource}))}function K(){r.removeEventListener("select",te),r.removeEventListener("selectstart",te),r.removeEventListener("selectend",te),r.removeEventListener("squeeze",te),r.removeEventListener("squeezestart",te),r.removeEventListener("squeezeend",te),r.removeEventListener("end",K),r.removeEventListener("inputsourceschange",H);for(let re=0;re<w.length;re++){const U=P[re];U!==null&&(P[re]=null,w[re].disconnect(U))}z=null,ne=null,m.reset();for(const re in p)delete p[re];e.setRenderTarget(T),h=null,d=null,f=null,r=null,M=null,je.stop(),i.isPresenting=!1,e.setPixelRatio(V),e.setSize(D.width,D.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(re){s=re,i.isPresenting===!0&&ke("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(re){a=re,i.isPresenting===!0&&ke("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(re){c=re},this.getBaseLayer=function(){return d!==null?d:h},this.getBinding=function(){return f===null&&v&&(f=new XRWebGLBinding(r,t)),f},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(re){if(r=re,r!==null){if(T=e.getRenderTarget(),r.addEventListener("select",te),r.addEventListener("selectstart",te),r.addEventListener("selectend",te),r.addEventListener("squeeze",te),r.addEventListener("squeezestart",te),r.addEventListener("squeezeend",te),r.addEventListener("end",K),r.addEventListener("inputsourceschange",H),b.xrCompatible!==!0&&await t.makeXRCompatible(),V=e.getPixelRatio(),e.getSize(D),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let ie=null,ae=null,oe=null;b.depth&&(oe=b.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ie=b.stencil?nr:di,ae=b.stencil?ys:Hn);const De={colorFormat:t.RGBA8,depthFormat:oe,scaleFactor:s};f=this.getBinding(),d=f.createProjectionLayer(De),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),M=new zn(d.textureWidth,d.textureHeight,{format:yn,type:dn,depthTexture:new Ts(d.textureWidth,d.textureHeight,ae,void 0,void 0,void 0,void 0,void 0,void 0,ie),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const ie={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:s};h=new XRWebGLLayer(r,t,ie),r.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),M=new zn(h.framebufferWidth,h.framebufferHeight,{format:yn,type:dn,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),je.setContext(r),je.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function H(re){for(let U=0;U<re.removed.length;U++){const ie=re.removed[U],ae=P.indexOf(ie);ae>=0&&(P[ae]=null,w[ae].disconnect(ie))}for(let U=0;U<re.added.length;U++){const ie=re.added[U];let ae=P.indexOf(ie);if(ae===-1){for(let De=0;De<w.length;De++)if(De>=P.length){P.push(ie),ae=De;break}else if(P[De]===null){P[De]=ie,ae=De;break}if(ae===-1)break}const oe=w[ae];oe&&oe.connect(ie)}}const ee=new Y,ve=new Y;function ge(re,U,ie){ee.setFromMatrixPosition(U.matrixWorld),ve.setFromMatrixPosition(ie.matrixWorld);const ae=ee.distanceTo(ve),oe=U.projectionMatrix.elements,De=ie.projectionMatrix.elements,R=oe[14]/(oe[10]-1),C=oe[14]/(oe[10]+1),F=(oe[9]+1)/oe[5],j=(oe[9]-1)/oe[5],q=(oe[8]-1)/oe[0],J=(De[8]+1)/De[0],A=R*q,fe=R*J,le=ae/(-q+J),se=le*-q;if(U.matrixWorld.decompose(re.position,re.quaternion,re.scale),re.translateX(se),re.translateZ(le),re.matrixWorld.compose(re.position,re.quaternion,re.scale),re.matrixWorldInverse.copy(re.matrixWorld).invert(),oe[10]===-1)re.projectionMatrix.copy(U.projectionMatrix),re.projectionMatrixInverse.copy(U.projectionMatrixInverse);else{const ce=R+le,S=C+le,g=A-se,I=fe+(ae-se),X=F*C/S*ce,Q=j*C/S*ce;re.projectionMatrix.makePerspective(g,I,X,Q,ce,S),re.projectionMatrixInverse.copy(re.projectionMatrix).invert()}}function Se(re,U){U===null?re.matrixWorld.copy(re.matrix):re.matrixWorld.multiplyMatrices(U.matrixWorld,re.matrix),re.matrixWorldInverse.copy(re.matrixWorld).invert()}this.updateCamera=function(re){if(r===null)return;let U=re.near,ie=re.far;m.texture!==null&&(m.depthNear>0&&(U=m.depthNear),m.depthFar>0&&(ie=m.depthFar)),N.near=y.near=x.near=U,N.far=y.far=x.far=ie,(z!==N.near||ne!==N.far)&&(r.updateRenderState({depthNear:N.near,depthFar:N.far}),z=N.near,ne=N.far),N.layers.mask=re.layers.mask|6,x.layers.mask=N.layers.mask&3,y.layers.mask=N.layers.mask&5;const ae=re.parent,oe=N.cameras;Se(N,ae);for(let De=0;De<oe.length;De++)Se(oe[De],ae);oe.length===2?ge(N,x,y):N.projectionMatrix.copy(x.projectionMatrix),Fe(re,N,ae)};function Fe(re,U,ie){ie===null?re.matrix.copy(U.matrixWorld):(re.matrix.copy(ie.matrixWorld),re.matrix.invert(),re.matrix.multiply(U.matrixWorld)),re.matrix.decompose(re.position,re.quaternion,re.scale),re.updateMatrixWorld(!0),re.projectionMatrix.copy(U.projectionMatrix),re.projectionMatrixInverse.copy(U.projectionMatrixInverse),re.isPerspectiveCamera&&(re.fov=Ql*2*Math.atan(1/re.projectionMatrix.elements[5]),re.zoom=1)}this.getCamera=function(){return N},this.getFoveation=function(){if(!(d===null&&h===null))return l},this.setFoveation=function(re){l=re,d!==null&&(d.fixedFoveation=re),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=re)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(N)},this.getCameraTexture=function(re){return p[re]};let ze=null;function tt(re,U){if(u=U.getViewerPose(c||o),_=U,u!==null){const ie=u.views;h!==null&&(e.setRenderTargetFramebuffer(M,h.framebuffer),e.setRenderTarget(M));let ae=!1;ie.length!==N.cameras.length&&(N.cameras.length=0,ae=!0);for(let C=0;C<ie.length;C++){const F=ie[C];let j=null;if(h!==null)j=h.getViewport(F);else{const J=f.getViewSubImage(d,F);j=J.viewport,C===0&&(e.setRenderTargetTextures(M,J.colorTexture,J.depthStencilTexture),e.setRenderTarget(M))}let q=L[C];q===void 0&&(q=new fn,q.layers.enable(C),q.viewport=new St,L[C]=q),q.matrix.fromArray(F.transform.matrix),q.matrix.decompose(q.position,q.quaternion,q.scale),q.projectionMatrix.fromArray(F.projectionMatrix),q.projectionMatrixInverse.copy(q.projectionMatrix).invert(),q.viewport.set(j.x,j.y,j.width,j.height),C===0&&(N.matrix.copy(q.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale)),ae===!0&&N.cameras.push(q)}const oe=r.enabledFeatures;if(oe&&oe.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&v){f=i.getBinding();const C=f.getDepthInformation(ie[0]);C&&C.isValid&&C.texture&&m.init(C,r.renderState)}if(oe&&oe.includes("camera-access")&&v){e.state.unbindTexture(),f=i.getBinding();for(let C=0;C<ie.length;C++){const F=ie[C].camera;if(F){let j=p[F];j||(j=new Vh,p[F]=j);const q=f.getCameraImage(F);j.sourceTexture=q}}}}for(let ie=0;ie<w.length;ie++){const ae=P[ie],oe=w[ie];ae!==null&&oe!==void 0&&oe.update(ae,U,c||o)}ze&&ze(re,U),U.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:U}),_=null}const je=new Hh;je.setAnimationLoop(tt),this.setAnimationLoop=function(re){ze=re},this.dispose=function(){}}}const Ki=new hi,eE=new Mt;function tE(n,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,Lh(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,b,T,M){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),f(m,p)):p.isMeshPhongMaterial?(s(m,p),u(m,p)):p.isMeshStandardMaterial?(s(m,p),d(m,p),p.isMeshPhysicalMaterial&&h(m,p,M)):p.isMeshMatcapMaterial?(s(m,p),_(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),v(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,b,T):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Qt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Qt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const b=e.get(p),T=b.envMap,M=b.envMapRotation;T&&(m.envMap.value=T,Ki.copy(M),Ki.x*=-1,Ki.y*=-1,Ki.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(Ki.y*=-1,Ki.z*=-1),m.envMapRotation.value.setFromMatrix4(eE.makeRotationFromEuler(Ki)),m.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,b,T){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*b,m.scale.value=T*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function h(m,p,b){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Qt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){const b=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),m.nearDistance.value=b.shadow.camera.near,m.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function nE(n,e,t,i){let r={},s={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,T){const M=T.program;i.uniformBlockBinding(b,M)}function c(b,T){let M=r[b.id];M===void 0&&(_(b),M=u(b),r[b.id]=M,b.addEventListener("dispose",m));const w=T.program;i.updateUBOMapping(b,w);const P=e.render.frame;s[b.id]!==P&&(d(b),s[b.id]=P)}function u(b){const T=f();b.__bindingPointIndex=T;const M=n.createBuffer(),w=b.__size,P=b.usage;return n.bindBuffer(n.UNIFORM_BUFFER,M),n.bufferData(n.UNIFORM_BUFFER,w,P),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,T,M),M}function f(){for(let b=0;b<a;b++)if(o.indexOf(b)===-1)return o.push(b),b;return Qe("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(b){const T=r[b.id],M=b.uniforms,w=b.__cache;n.bindBuffer(n.UNIFORM_BUFFER,T);for(let P=0,D=M.length;P<D;P++){const V=Array.isArray(M[P])?M[P]:[M[P]];for(let x=0,y=V.length;x<y;x++){const L=V[x];if(h(L,P,x,w)===!0){const N=L.__offset,z=Array.isArray(L.value)?L.value:[L.value];let ne=0;for(let te=0;te<z.length;te++){const K=z[te],H=v(K);typeof K=="number"||typeof K=="boolean"?(L.__data[0]=K,n.bufferSubData(n.UNIFORM_BUFFER,N+ne,L.__data)):K.isMatrix3?(L.__data[0]=K.elements[0],L.__data[1]=K.elements[1],L.__data[2]=K.elements[2],L.__data[3]=0,L.__data[4]=K.elements[3],L.__data[5]=K.elements[4],L.__data[6]=K.elements[5],L.__data[7]=0,L.__data[8]=K.elements[6],L.__data[9]=K.elements[7],L.__data[10]=K.elements[8],L.__data[11]=0):(K.toArray(L.__data,ne),ne+=H.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,N,L.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function h(b,T,M,w){const P=b.value,D=T+"_"+M;if(w[D]===void 0)return typeof P=="number"||typeof P=="boolean"?w[D]=P:w[D]=P.clone(),!0;{const V=w[D];if(typeof P=="number"||typeof P=="boolean"){if(V!==P)return w[D]=P,!0}else if(V.equals(P)===!1)return V.copy(P),!0}return!1}function _(b){const T=b.uniforms;let M=0;const w=16;for(let D=0,V=T.length;D<V;D++){const x=Array.isArray(T[D])?T[D]:[T[D]];for(let y=0,L=x.length;y<L;y++){const N=x[y],z=Array.isArray(N.value)?N.value:[N.value];for(let ne=0,te=z.length;ne<te;ne++){const K=z[ne],H=v(K),ee=M%w,ve=ee%H.boundary,ge=ee+ve;M+=ve,ge!==0&&w-ge<H.storage&&(M+=w-ge),N.__data=new Float32Array(H.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=M,M+=H.storage}}}const P=M%w;return P>0&&(M+=w-P),b.__size=M,b.__cache={},this}function v(b){const T={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(T.boundary=4,T.storage=4):b.isVector2?(T.boundary=8,T.storage=8):b.isVector3||b.isColor?(T.boundary=16,T.storage=12):b.isVector4?(T.boundary=16,T.storage=16):b.isMatrix3?(T.boundary=48,T.storage=48):b.isMatrix4?(T.boundary=64,T.storage=64):b.isTexture?ke("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ke("WebGLRenderer: Unsupported uniform value type.",b),T}function m(b){const T=b.target;T.removeEventListener("dispose",m);const M=o.indexOf(T.__bindingPointIndex);o.splice(M,1),n.deleteBuffer(r[T.id]),delete r[T.id],delete s[T.id]}function p(){for(const b in r)n.deleteBuffer(r[b]);o=[],r={},s={}}return{bind:l,update:c,dispose:p}}const iE=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Dn=null;function rE(){return Dn===null&&(Dn=new e_(iE,16,16,Vr,fi),Dn.name="DFG_LUT",Dn.minFilter=Ot,Dn.magFilter=Ot,Dn.wrapS=ii,Dn.wrapT=ii,Dn.generateMipmaps=!1,Dn.needsUpdate=!0),Dn}class sE{constructor(e={}){const{canvas:t=wg(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:d=!1,outputBufferType:h=dn}=e;this.isWebGLRenderer=!0;let _;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=i.getContextAttributes().alpha}else _=o;const v=h,m=new Set([Uc,Lc,Ic]),p=new Set([dn,Hn,Es,ys,Pc,Dc]),b=new Uint32Array(4),T=new Int32Array(4);let M=null,w=null;const P=[],D=[];let V=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Vn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const x=this;let y=!1;this._outputColorSpace=un;let L=0,N=0,z=null,ne=-1,te=null;const K=new St,H=new St;let ee=null;const ve=new at(0);let ge=0,Se=t.width,Fe=t.height,ze=1,tt=null,je=null;const re=new St(0,0,Se,Fe),U=new St(0,0,Se,Fe);let ie=!1;const ae=new Oh;let oe=!1,De=!1;const R=new Mt,C=new Y,F=new St,j={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let q=!1;function J(){return z===null?ze:1}let A=i;function fe(E,B){return t.getContext(E,B)}try{const E={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Rc}`),t.addEventListener("webglcontextlost",Ge,!1),t.addEventListener("webglcontextrestored",ft,!1),t.addEventListener("webglcontextcreationerror",rt,!1),A===null){const B="webgl2";if(A=fe(B,E),A===null)throw fe(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw Qe("WebGLRenderer: "+E.message),E}let le,se,ce,S,g,I,X,Q,k,Te,he,Re,Ue,de,xe,Ee,Ce,_e,Xe,O,we,me,Pe,pe;function ue(){le=new rS(A),le.init(),me=new KM(A,le),se=new Kx(A,le,e,me),ce=new YM(A,le),se.reversedDepthBuffer&&d&&ce.buffers.depth.setReversed(!0),S=new aS(A),g=new IM,I=new $M(A,le,ce,g,se,me,S),X=new Zx(x),Q=new iS(x),k=new f_(A),Pe=new Yx(A,k),Te=new sS(A,k,S,Pe),he=new cS(A,Te,k,S),Xe=new lS(A,se,I),Ee=new jx(g),Re=new DM(x,X,Q,le,se,Pe,Ee),Ue=new tE(x,g),de=new UM,xe=new zM(le),_e=new qx(x,X,Q,ce,he,_,l),Ce=new XM(x,he,se),pe=new nE(A,S,se,ce),O=new $x(A,le,S),we=new oS(A,le,S),S.programs=Re.programs,x.capabilities=se,x.extensions=le,x.properties=g,x.renderLists=de,x.shadowMap=Ce,x.state=ce,x.info=S}ue(),v!==dn&&(V=new fS(v,t.width,t.height,r,s));const Me=new QM(x,A);this.xr=Me,this.getContext=function(){return A},this.getContextAttributes=function(){return A.getContextAttributes()},this.forceContextLoss=function(){const E=le.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=le.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return ze},this.setPixelRatio=function(E){E!==void 0&&(ze=E,this.setSize(Se,Fe,!1))},this.getSize=function(E){return E.set(Se,Fe)},this.setSize=function(E,B,Z=!0){if(Me.isPresenting){ke("WebGLRenderer: Can't change size while VR device is presenting.");return}Se=E,Fe=B,t.width=Math.floor(E*ze),t.height=Math.floor(B*ze),Z===!0&&(t.style.width=E+"px",t.style.height=B+"px"),V!==null&&V.setSize(t.width,t.height),this.setViewport(0,0,E,B)},this.getDrawingBufferSize=function(E){return E.set(Se*ze,Fe*ze).floor()},this.setDrawingBufferSize=function(E,B,Z){Se=E,Fe=B,ze=Z,t.width=Math.floor(E*Z),t.height=Math.floor(B*Z),this.setViewport(0,0,E,B)},this.setEffects=function(E){if(v===dn){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(E){for(let B=0;B<E.length;B++)if(E[B].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}V.setEffects(E||[])},this.getCurrentViewport=function(E){return E.copy(K)},this.getViewport=function(E){return E.copy(re)},this.setViewport=function(E,B,Z,$){E.isVector4?re.set(E.x,E.y,E.z,E.w):re.set(E,B,Z,$),ce.viewport(K.copy(re).multiplyScalar(ze).round())},this.getScissor=function(E){return E.copy(U)},this.setScissor=function(E,B,Z,$){E.isVector4?U.set(E.x,E.y,E.z,E.w):U.set(E,B,Z,$),ce.scissor(H.copy(U).multiplyScalar(ze).round())},this.getScissorTest=function(){return ie},this.setScissorTest=function(E){ce.setScissorTest(ie=E)},this.setOpaqueSort=function(E){tt=E},this.setTransparentSort=function(E){je=E},this.getClearColor=function(E){return E.copy(_e.getClearColor())},this.setClearColor=function(){_e.setClearColor(...arguments)},this.getClearAlpha=function(){return _e.getClearAlpha()},this.setClearAlpha=function(){_e.setClearAlpha(...arguments)},this.clear=function(E=!0,B=!0,Z=!0){let $=0;if(E){let G=!1;if(z!==null){const ye=z.texture.format;G=m.has(ye)}if(G){const ye=z.texture.type,Ie=p.has(ye),Ae=_e.getClearColor(),Le=_e.getClearAlpha(),Ne=Ae.r,Ve=Ae.g,Oe=Ae.b;Ie?(b[0]=Ne,b[1]=Ve,b[2]=Oe,b[3]=Le,A.clearBufferuiv(A.COLOR,0,b)):(T[0]=Ne,T[1]=Ve,T[2]=Oe,T[3]=Le,A.clearBufferiv(A.COLOR,0,T))}else $|=A.COLOR_BUFFER_BIT}B&&($|=A.DEPTH_BUFFER_BIT),Z&&($|=A.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),A.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Ge,!1),t.removeEventListener("webglcontextrestored",ft,!1),t.removeEventListener("webglcontextcreationerror",rt,!1),_e.dispose(),de.dispose(),xe.dispose(),g.dispose(),X.dispose(),Q.dispose(),he.dispose(),Pe.dispose(),pe.dispose(),Re.dispose(),Me.dispose(),Me.removeEventListener("sessionstart",Hc),Me.removeEventListener("sessionend",Gc),Bi.stop()};function Ge(E){E.preventDefault(),Vu("WebGLRenderer: Context Lost."),y=!0}function ft(){Vu("WebGLRenderer: Context Restored."),y=!1;const E=S.autoReset,B=Ce.enabled,Z=Ce.autoUpdate,$=Ce.needsUpdate,G=Ce.type;ue(),S.autoReset=E,Ce.enabled=B,Ce.autoUpdate=Z,Ce.needsUpdate=$,Ce.type=G}function rt(E){Qe("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Cn(E){const B=E.target;B.removeEventListener("dispose",Cn),kn(B)}function kn(E){lp(E),g.remove(E)}function lp(E){const B=g.get(E).programs;B!==void 0&&(B.forEach(function(Z){Re.releaseProgram(Z)}),E.isShaderMaterial&&Re.releaseShaderCache(E))}this.renderBufferDirect=function(E,B,Z,$,G,ye){B===null&&(B=j);const Ie=G.isMesh&&G.matrixWorld.determinant()<0,Ae=up(E,B,Z,$,G);ce.setMaterial($,Ie);let Le=Z.index,Ne=1;if($.wireframe===!0){if(Le=Te.getWireframeAttribute(Z),Le===void 0)return;Ne=2}const Ve=Z.drawRange,Oe=Z.attributes.position;let $e=Ve.start*Ne,lt=(Ve.start+Ve.count)*Ne;ye!==null&&($e=Math.max($e,ye.start*Ne),lt=Math.min(lt,(ye.start+ye.count)*Ne)),Le!==null?($e=Math.max($e,0),lt=Math.min(lt,Le.count)):Oe!=null&&($e=Math.max($e,0),lt=Math.min(lt,Oe.count));const gt=lt-$e;if(gt<0||gt===1/0)return;Pe.setup(G,$,Ae,Z,Le);let _t,ut=O;if(Le!==null&&(_t=k.get(Le),ut=we,ut.setIndex(_t)),G.isMesh)$.wireframe===!0?(ce.setLineWidth($.wireframeLinewidth*J()),ut.setMode(A.LINES)):ut.setMode(A.TRIANGLES);else if(G.isLine){let Be=$.linewidth;Be===void 0&&(Be=1),ce.setLineWidth(Be*J()),G.isLineSegments?ut.setMode(A.LINES):G.isLineLoop?ut.setMode(A.LINE_LOOP):ut.setMode(A.LINE_STRIP)}else G.isPoints?ut.setMode(A.POINTS):G.isSprite&&ut.setMode(A.TRIANGLES);if(G.isBatchedMesh)if(G._multiDrawInstances!==null)bs("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ut.renderMultiDrawInstances(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount,G._multiDrawInstances);else if(le.get("WEBGL_multi_draw"))ut.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{const Be=G._multiDrawStarts,st=G._multiDrawCounts,Je=G._multiDrawCount,tn=Le?k.get(Le).bytesPerElement:1,fr=g.get($).currentProgram.getUniforms();for(let nn=0;nn<Je;nn++)fr.setValue(A,"_gl_DrawID",nn),ut.render(Be[nn]/tn,st[nn])}else if(G.isInstancedMesh)ut.renderInstances($e,gt,G.count);else if(Z.isInstancedBufferGeometry){const Be=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,st=Math.min(Z.instanceCount,Be);ut.renderInstances($e,gt,st)}else ut.render($e,gt)};function zc(E,B,Z){E.transparent===!0&&E.side===ni&&E.forceSinglePass===!1?(E.side=Qt,E.needsUpdate=!0,Ns(E,B,Z),E.side=Oi,E.needsUpdate=!0,Ns(E,B,Z),E.side=ni):Ns(E,B,Z)}this.compile=function(E,B,Z=null){Z===null&&(Z=E),w=xe.get(Z),w.init(B),D.push(w),Z.traverseVisible(function(G){G.isLight&&G.layers.test(B.layers)&&(w.pushLight(G),G.castShadow&&w.pushShadow(G))}),E!==Z&&E.traverseVisible(function(G){G.isLight&&G.layers.test(B.layers)&&(w.pushLight(G),G.castShadow&&w.pushShadow(G))}),w.setupLights();const $=new Set;return E.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;const ye=G.material;if(ye)if(Array.isArray(ye))for(let Ie=0;Ie<ye.length;Ie++){const Ae=ye[Ie];zc(Ae,Z,G),$.add(Ae)}else zc(ye,Z,G),$.add(ye)}),w=D.pop(),$},this.compileAsync=function(E,B,Z=null){const $=this.compile(E,B,Z);return new Promise(G=>{function ye(){if($.forEach(function(Ie){g.get(Ie).currentProgram.isReady()&&$.delete(Ie)}),$.size===0){G(E);return}setTimeout(ye,10)}le.get("KHR_parallel_shader_compile")!==null?ye():setTimeout(ye,10)})};let jo=null;function cp(E){jo&&jo(E)}function Hc(){Bi.stop()}function Gc(){Bi.start()}const Bi=new Hh;Bi.setAnimationLoop(cp),typeof self<"u"&&Bi.setContext(self),this.setAnimationLoop=function(E){jo=E,Me.setAnimationLoop(E),E===null?Bi.stop():Bi.start()},Me.addEventListener("sessionstart",Hc),Me.addEventListener("sessionend",Gc),this.render=function(E,B){if(B!==void 0&&B.isCamera!==!0){Qe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;const Z=Me.enabled===!0&&Me.isPresenting===!0,$=V!==null&&(z===null||Z)&&V.begin(x,z);if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),Me.enabled===!0&&Me.isPresenting===!0&&(V===null||V.isCompositing()===!1)&&(Me.cameraAutoUpdate===!0&&Me.updateCamera(B),B=Me.getCamera()),E.isScene===!0&&E.onBeforeRender(x,E,B,z),w=xe.get(E,D.length),w.init(B),D.push(w),R.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),ae.setFromProjectionMatrix(R,Fn,B.reversedDepth),De=this.localClippingEnabled,oe=Ee.init(this.clippingPlanes,De),M=de.get(E,P.length),M.init(),P.push(M),Me.enabled===!0&&Me.isPresenting===!0){const Ie=x.xr.getDepthSensingMesh();Ie!==null&&Zo(Ie,B,-1/0,x.sortObjects)}Zo(E,B,0,x.sortObjects),M.finish(),x.sortObjects===!0&&M.sort(tt,je),q=Me.enabled===!1||Me.isPresenting===!1||Me.hasDepthSensing()===!1,q&&_e.addToRenderList(M,E),this.info.render.frame++,oe===!0&&Ee.beginShadows();const G=w.state.shadowsArray;if(Ce.render(G,E,B),oe===!0&&Ee.endShadows(),this.info.autoReset===!0&&this.info.reset(),($&&V.hasRenderPass())===!1){const Ie=M.opaque,Ae=M.transmissive;if(w.setupLights(),B.isArrayCamera){const Le=B.cameras;if(Ae.length>0)for(let Ne=0,Ve=Le.length;Ne<Ve;Ne++){const Oe=Le[Ne];Wc(Ie,Ae,E,Oe)}q&&_e.render(E);for(let Ne=0,Ve=Le.length;Ne<Ve;Ne++){const Oe=Le[Ne];kc(M,E,Oe,Oe.viewport)}}else Ae.length>0&&Wc(Ie,Ae,E,B),q&&_e.render(E),kc(M,E,B)}z!==null&&N===0&&(I.updateMultisampleRenderTarget(z),I.updateRenderTargetMipmap(z)),$&&V.end(x),E.isScene===!0&&E.onAfterRender(x,E,B),Pe.resetDefaultState(),ne=-1,te=null,D.pop(),D.length>0?(w=D[D.length-1],oe===!0&&Ee.setGlobalState(x.clippingPlanes,w.state.camera)):w=null,P.pop(),P.length>0?M=P[P.length-1]:M=null};function Zo(E,B,Z,$){if(E.visible===!1)return;if(E.layers.test(B.layers)){if(E.isGroup)Z=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(B);else if(E.isLight)w.pushLight(E),E.castShadow&&w.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||ae.intersectsSprite(E)){$&&F.setFromMatrixPosition(E.matrixWorld).applyMatrix4(R);const Ie=he.update(E),Ae=E.material;Ae.visible&&M.push(E,Ie,Ae,Z,F.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||ae.intersectsObject(E))){const Ie=he.update(E),Ae=E.material;if($&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),F.copy(E.boundingSphere.center)):(Ie.boundingSphere===null&&Ie.computeBoundingSphere(),F.copy(Ie.boundingSphere.center)),F.applyMatrix4(E.matrixWorld).applyMatrix4(R)),Array.isArray(Ae)){const Le=Ie.groups;for(let Ne=0,Ve=Le.length;Ne<Ve;Ne++){const Oe=Le[Ne],$e=Ae[Oe.materialIndex];$e&&$e.visible&&M.push(E,Ie,$e,Z,F.z,Oe)}}else Ae.visible&&M.push(E,Ie,Ae,Z,F.z,null)}}const ye=E.children;for(let Ie=0,Ae=ye.length;Ie<Ae;Ie++)Zo(ye[Ie],B,Z,$)}function kc(E,B,Z,$){const{opaque:G,transmissive:ye,transparent:Ie}=E;w.setupLightsView(Z),oe===!0&&Ee.setGlobalState(x.clippingPlanes,Z),$&&ce.viewport(K.copy($)),G.length>0&&Us(G,B,Z),ye.length>0&&Us(ye,B,Z),Ie.length>0&&Us(Ie,B,Z),ce.buffers.depth.setTest(!0),ce.buffers.depth.setMask(!0),ce.buffers.color.setMask(!0),ce.setPolygonOffset(!1)}function Wc(E,B,Z,$){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[$.id]===void 0){const $e=le.has("EXT_color_buffer_half_float")||le.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[$.id]=new zn(1,1,{generateMipmaps:!0,type:$e?fi:dn,minFilter:tr,samples:se.samples,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ze.workingColorSpace})}const ye=w.state.transmissionRenderTarget[$.id],Ie=$.viewport||K;ye.setSize(Ie.z*x.transmissionResolutionScale,Ie.w*x.transmissionResolutionScale);const Ae=x.getRenderTarget(),Le=x.getActiveCubeFace(),Ne=x.getActiveMipmapLevel();x.setRenderTarget(ye),x.getClearColor(ve),ge=x.getClearAlpha(),ge<1&&x.setClearColor(16777215,.5),x.clear(),q&&_e.render(Z);const Ve=x.toneMapping;x.toneMapping=Vn;const Oe=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),w.setupLightsView($),oe===!0&&Ee.setGlobalState(x.clippingPlanes,$),Us(E,Z,$),I.updateMultisampleRenderTarget(ye),I.updateRenderTargetMipmap(ye),le.has("WEBGL_multisampled_render_to_texture")===!1){let $e=!1;for(let lt=0,gt=B.length;lt<gt;lt++){const _t=B[lt],{object:ut,geometry:Be,material:st,group:Je}=_t;if(st.side===ni&&ut.layers.test($.layers)){const tn=st.side;st.side=Qt,st.needsUpdate=!0,Xc(ut,Z,$,Be,st,Je),st.side=tn,st.needsUpdate=!0,$e=!0}}$e===!0&&(I.updateMultisampleRenderTarget(ye),I.updateRenderTargetMipmap(ye))}x.setRenderTarget(Ae,Le,Ne),x.setClearColor(ve,ge),Oe!==void 0&&($.viewport=Oe),x.toneMapping=Ve}function Us(E,B,Z){const $=B.isScene===!0?B.overrideMaterial:null;for(let G=0,ye=E.length;G<ye;G++){const Ie=E[G],{object:Ae,geometry:Le,group:Ne}=Ie;let Ve=Ie.material;Ve.allowOverride===!0&&$!==null&&(Ve=$),Ae.layers.test(Z.layers)&&Xc(Ae,B,Z,Le,Ve,Ne)}}function Xc(E,B,Z,$,G,ye){E.onBeforeRender(x,B,Z,$,G,ye),E.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),G.onBeforeRender(x,B,Z,$,E,ye),G.transparent===!0&&G.side===ni&&G.forceSinglePass===!1?(G.side=Qt,G.needsUpdate=!0,x.renderBufferDirect(Z,B,$,G,E,ye),G.side=Oi,G.needsUpdate=!0,x.renderBufferDirect(Z,B,$,G,E,ye),G.side=ni):x.renderBufferDirect(Z,B,$,G,E,ye),E.onAfterRender(x,B,Z,$,G,ye)}function Ns(E,B,Z){B.isScene!==!0&&(B=j);const $=g.get(E),G=w.state.lights,ye=w.state.shadowsArray,Ie=G.state.version,Ae=Re.getParameters(E,G.state,ye,B,Z),Le=Re.getProgramCacheKey(Ae);let Ne=$.programs;$.environment=E.isMeshStandardMaterial?B.environment:null,$.fog=B.fog,$.envMap=(E.isMeshStandardMaterial?Q:X).get(E.envMap||$.environment),$.envMapRotation=$.environment!==null&&E.envMap===null?B.environmentRotation:E.envMapRotation,Ne===void 0&&(E.addEventListener("dispose",Cn),Ne=new Map,$.programs=Ne);let Ve=Ne.get(Le);if(Ve!==void 0){if($.currentProgram===Ve&&$.lightsStateVersion===Ie)return Yc(E,Ae),Ve}else Ae.uniforms=Re.getUniforms(E),E.onBeforeCompile(Ae,x),Ve=Re.acquireProgram(Ae,Le),Ne.set(Le,Ve),$.uniforms=Ae.uniforms;const Oe=$.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Oe.clippingPlanes=Ee.uniform),Yc(E,Ae),$.needsLights=dp(E),$.lightsStateVersion=Ie,$.needsLights&&(Oe.ambientLightColor.value=G.state.ambient,Oe.lightProbe.value=G.state.probe,Oe.directionalLights.value=G.state.directional,Oe.directionalLightShadows.value=G.state.directionalShadow,Oe.spotLights.value=G.state.spot,Oe.spotLightShadows.value=G.state.spotShadow,Oe.rectAreaLights.value=G.state.rectArea,Oe.ltc_1.value=G.state.rectAreaLTC1,Oe.ltc_2.value=G.state.rectAreaLTC2,Oe.pointLights.value=G.state.point,Oe.pointLightShadows.value=G.state.pointShadow,Oe.hemisphereLights.value=G.state.hemi,Oe.directionalShadowMap.value=G.state.directionalShadowMap,Oe.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Oe.spotShadowMap.value=G.state.spotShadowMap,Oe.spotLightMatrix.value=G.state.spotLightMatrix,Oe.spotLightMap.value=G.state.spotLightMap,Oe.pointShadowMap.value=G.state.pointShadowMap,Oe.pointShadowMatrix.value=G.state.pointShadowMatrix),$.currentProgram=Ve,$.uniformsList=null,Ve}function qc(E){if(E.uniformsList===null){const B=E.currentProgram.getUniforms();E.uniformsList=So.seqWithValue(B.seq,E.uniforms)}return E.uniformsList}function Yc(E,B){const Z=g.get(E);Z.outputColorSpace=B.outputColorSpace,Z.batching=B.batching,Z.batchingColor=B.batchingColor,Z.instancing=B.instancing,Z.instancingColor=B.instancingColor,Z.instancingMorph=B.instancingMorph,Z.skinning=B.skinning,Z.morphTargets=B.morphTargets,Z.morphNormals=B.morphNormals,Z.morphColors=B.morphColors,Z.morphTargetsCount=B.morphTargetsCount,Z.numClippingPlanes=B.numClippingPlanes,Z.numIntersection=B.numClipIntersection,Z.vertexAlphas=B.vertexAlphas,Z.vertexTangents=B.vertexTangents,Z.toneMapping=B.toneMapping}function up(E,B,Z,$,G){B.isScene!==!0&&(B=j),I.resetTextureUnits();const ye=B.fog,Ie=$.isMeshStandardMaterial?B.environment:null,Ae=z===null?x.outputColorSpace:z.isXRRenderTarget===!0?z.texture.colorSpace:zr,Le=($.isMeshStandardMaterial?Q:X).get($.envMap||Ie),Ne=$.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,Ve=!!Z.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),Oe=!!Z.morphAttributes.position,$e=!!Z.morphAttributes.normal,lt=!!Z.morphAttributes.color;let gt=Vn;$.toneMapped&&(z===null||z.isXRRenderTarget===!0)&&(gt=x.toneMapping);const _t=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,ut=_t!==void 0?_t.length:0,Be=g.get($),st=w.state.lights;if(oe===!0&&(De===!0||E!==te)){const Vt=E===te&&$.id===ne;Ee.setState($,E,Vt)}let Je=!1;$.version===Be.__version?(Be.needsLights&&Be.lightsStateVersion!==st.state.version||Be.outputColorSpace!==Ae||G.isBatchedMesh&&Be.batching===!1||!G.isBatchedMesh&&Be.batching===!0||G.isBatchedMesh&&Be.batchingColor===!0&&G.colorTexture===null||G.isBatchedMesh&&Be.batchingColor===!1&&G.colorTexture!==null||G.isInstancedMesh&&Be.instancing===!1||!G.isInstancedMesh&&Be.instancing===!0||G.isSkinnedMesh&&Be.skinning===!1||!G.isSkinnedMesh&&Be.skinning===!0||G.isInstancedMesh&&Be.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&Be.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&Be.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&Be.instancingMorph===!1&&G.morphTexture!==null||Be.envMap!==Le||$.fog===!0&&Be.fog!==ye||Be.numClippingPlanes!==void 0&&(Be.numClippingPlanes!==Ee.numPlanes||Be.numIntersection!==Ee.numIntersection)||Be.vertexAlphas!==Ne||Be.vertexTangents!==Ve||Be.morphTargets!==Oe||Be.morphNormals!==$e||Be.morphColors!==lt||Be.toneMapping!==gt||Be.morphTargetsCount!==ut)&&(Je=!0):(Je=!0,Be.__version=$.version);let tn=Be.currentProgram;Je===!0&&(tn=Ns($,B,G));let fr=!1,nn=!1,qr=!1;const dt=tn.getUniforms(),$t=Be.uniforms;if(ce.useProgram(tn.program)&&(fr=!0,nn=!0,qr=!0),$.id!==ne&&(ne=$.id,nn=!0),fr||te!==E){ce.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),dt.setValue(A,"projectionMatrix",E.projectionMatrix),dt.setValue(A,"viewMatrix",E.matrixWorldInverse);const Kt=dt.map.cameraPosition;Kt!==void 0&&Kt.setValue(A,C.setFromMatrixPosition(E.matrixWorld)),se.logarithmicDepthBuffer&&dt.setValue(A,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&dt.setValue(A,"isOrthographic",E.isOrthographicCamera===!0),te!==E&&(te=E,nn=!0,qr=!0)}if(Be.needsLights&&(st.state.directionalShadowMap.length>0&&dt.setValue(A,"directionalShadowMap",st.state.directionalShadowMap,I),st.state.spotShadowMap.length>0&&dt.setValue(A,"spotShadowMap",st.state.spotShadowMap,I),st.state.pointShadowMap.length>0&&dt.setValue(A,"pointShadowMap",st.state.pointShadowMap,I)),G.isSkinnedMesh){dt.setOptional(A,G,"bindMatrix"),dt.setOptional(A,G,"bindMatrixInverse");const Vt=G.skeleton;Vt&&(Vt.boneTexture===null&&Vt.computeBoneTexture(),dt.setValue(A,"boneTexture",Vt.boneTexture,I))}G.isBatchedMesh&&(dt.setOptional(A,G,"batchingTexture"),dt.setValue(A,"batchingTexture",G._matricesTexture,I),dt.setOptional(A,G,"batchingIdTexture"),dt.setValue(A,"batchingIdTexture",G._indirectTexture,I),dt.setOptional(A,G,"batchingColorTexture"),G._colorsTexture!==null&&dt.setValue(A,"batchingColorTexture",G._colorsTexture,I));const an=Z.morphAttributes;if((an.position!==void 0||an.normal!==void 0||an.color!==void 0)&&Xe.update(G,Z,tn),(nn||Be.receiveShadow!==G.receiveShadow)&&(Be.receiveShadow=G.receiveShadow,dt.setValue(A,"receiveShadow",G.receiveShadow)),$.isMeshGouraudMaterial&&$.envMap!==null&&($t.envMap.value=Le,$t.flipEnvMap.value=Le.isCubeTexture&&Le.isRenderTargetTexture===!1?-1:1),$.isMeshStandardMaterial&&$.envMap===null&&B.environment!==null&&($t.envMapIntensity.value=B.environmentIntensity),$t.dfgLUT!==void 0&&($t.dfgLUT.value=rE()),nn&&(dt.setValue(A,"toneMappingExposure",x.toneMappingExposure),Be.needsLights&&fp($t,qr),ye&&$.fog===!0&&Ue.refreshFogUniforms($t,ye),Ue.refreshMaterialUniforms($t,$,ze,Fe,w.state.transmissionRenderTarget[E.id]),So.upload(A,qc(Be),$t,I)),$.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(So.upload(A,qc(Be),$t,I),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&dt.setValue(A,"center",G.center),dt.setValue(A,"modelViewMatrix",G.modelViewMatrix),dt.setValue(A,"normalMatrix",G.normalMatrix),dt.setValue(A,"modelMatrix",G.matrixWorld),$.isShaderMaterial||$.isRawShaderMaterial){const Vt=$.uniformsGroups;for(let Kt=0,Jo=Vt.length;Kt<Jo;Kt++){const Vi=Vt[Kt];pe.update(Vi,tn),pe.bind(Vi,tn)}}return tn}function fp(E,B){E.ambientLightColor.needsUpdate=B,E.lightProbe.needsUpdate=B,E.directionalLights.needsUpdate=B,E.directionalLightShadows.needsUpdate=B,E.pointLights.needsUpdate=B,E.pointLightShadows.needsUpdate=B,E.spotLights.needsUpdate=B,E.spotLightShadows.needsUpdate=B,E.rectAreaLights.needsUpdate=B,E.hemisphereLights.needsUpdate=B}function dp(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return N},this.getRenderTarget=function(){return z},this.setRenderTargetTextures=function(E,B,Z){const $=g.get(E);$.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,$.__autoAllocateDepthBuffer===!1&&($.__useRenderToTexture=!1),g.get(E.texture).__webglTexture=B,g.get(E.depthTexture).__webglTexture=$.__autoAllocateDepthBuffer?void 0:Z,$.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,B){const Z=g.get(E);Z.__webglFramebuffer=B,Z.__useDefaultFramebuffer=B===void 0};const hp=A.createFramebuffer();this.setRenderTarget=function(E,B=0,Z=0){z=E,L=B,N=Z;let $=null,G=!1,ye=!1;if(E){const Ae=g.get(E);if(Ae.__useDefaultFramebuffer!==void 0){ce.bindFramebuffer(A.FRAMEBUFFER,Ae.__webglFramebuffer),K.copy(E.viewport),H.copy(E.scissor),ee=E.scissorTest,ce.viewport(K),ce.scissor(H),ce.setScissorTest(ee),ne=-1;return}else if(Ae.__webglFramebuffer===void 0)I.setupRenderTarget(E);else if(Ae.__hasExternalTextures)I.rebindTextures(E,g.get(E.texture).__webglTexture,g.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const Ve=E.depthTexture;if(Ae.__boundDepthTexture!==Ve){if(Ve!==null&&g.has(Ve)&&(E.width!==Ve.image.width||E.height!==Ve.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");I.setupDepthRenderbuffer(E)}}const Le=E.texture;(Le.isData3DTexture||Le.isDataArrayTexture||Le.isCompressedArrayTexture)&&(ye=!0);const Ne=g.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Ne[B])?$=Ne[B][Z]:$=Ne[B],G=!0):E.samples>0&&I.useMultisampledRTT(E)===!1?$=g.get(E).__webglMultisampledFramebuffer:Array.isArray(Ne)?$=Ne[Z]:$=Ne,K.copy(E.viewport),H.copy(E.scissor),ee=E.scissorTest}else K.copy(re).multiplyScalar(ze).floor(),H.copy(U).multiplyScalar(ze).floor(),ee=ie;if(Z!==0&&($=hp),ce.bindFramebuffer(A.FRAMEBUFFER,$)&&ce.drawBuffers(E,$),ce.viewport(K),ce.scissor(H),ce.setScissorTest(ee),G){const Ae=g.get(E.texture);A.framebufferTexture2D(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_CUBE_MAP_POSITIVE_X+B,Ae.__webglTexture,Z)}else if(ye){const Ae=B;for(let Le=0;Le<E.textures.length;Le++){const Ne=g.get(E.textures[Le]);A.framebufferTextureLayer(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0+Le,Ne.__webglTexture,Z,Ae)}}else if(E!==null&&Z!==0){const Ae=g.get(E.texture);A.framebufferTexture2D(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,Ae.__webglTexture,Z)}ne=-1},this.readRenderTargetPixels=function(E,B,Z,$,G,ye,Ie,Ae=0){if(!(E&&E.isWebGLRenderTarget)){Qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Le=g.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Ie!==void 0&&(Le=Le[Ie]),Le){ce.bindFramebuffer(A.FRAMEBUFFER,Le);try{const Ne=E.textures[Ae],Ve=Ne.format,Oe=Ne.type;if(!se.textureFormatReadable(Ve)){Qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!se.textureTypeReadable(Oe)){Qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=E.width-$&&Z>=0&&Z<=E.height-G&&(E.textures.length>1&&A.readBuffer(A.COLOR_ATTACHMENT0+Ae),A.readPixels(B,Z,$,G,me.convert(Ve),me.convert(Oe),ye))}finally{const Ne=z!==null?g.get(z).__webglFramebuffer:null;ce.bindFramebuffer(A.FRAMEBUFFER,Ne)}}},this.readRenderTargetPixelsAsync=async function(E,B,Z,$,G,ye,Ie,Ae=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Le=g.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Ie!==void 0&&(Le=Le[Ie]),Le)if(B>=0&&B<=E.width-$&&Z>=0&&Z<=E.height-G){ce.bindFramebuffer(A.FRAMEBUFFER,Le);const Ne=E.textures[Ae],Ve=Ne.format,Oe=Ne.type;if(!se.textureFormatReadable(Ve))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!se.textureTypeReadable(Oe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const $e=A.createBuffer();A.bindBuffer(A.PIXEL_PACK_BUFFER,$e),A.bufferData(A.PIXEL_PACK_BUFFER,ye.byteLength,A.STREAM_READ),E.textures.length>1&&A.readBuffer(A.COLOR_ATTACHMENT0+Ae),A.readPixels(B,Z,$,G,me.convert(Ve),me.convert(Oe),0);const lt=z!==null?g.get(z).__webglFramebuffer:null;ce.bindFramebuffer(A.FRAMEBUFFER,lt);const gt=A.fenceSync(A.SYNC_GPU_COMMANDS_COMPLETE,0);return A.flush(),await Rg(A,gt,4),A.bindBuffer(A.PIXEL_PACK_BUFFER,$e),A.getBufferSubData(A.PIXEL_PACK_BUFFER,0,ye),A.deleteBuffer($e),A.deleteSync(gt),ye}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,B=null,Z=0){const $=Math.pow(2,-Z),G=Math.floor(E.image.width*$),ye=Math.floor(E.image.height*$),Ie=B!==null?B.x:0,Ae=B!==null?B.y:0;I.setTexture2D(E,0),A.copyTexSubImage2D(A.TEXTURE_2D,Z,0,0,Ie,Ae,G,ye),ce.unbindTexture()};const pp=A.createFramebuffer(),mp=A.createFramebuffer();this.copyTextureToTexture=function(E,B,Z=null,$=null,G=0,ye=null){ye===null&&(G!==0?(bs("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ye=G,G=0):ye=0);let Ie,Ae,Le,Ne,Ve,Oe,$e,lt,gt;const _t=E.isCompressedTexture?E.mipmaps[ye]:E.image;if(Z!==null)Ie=Z.max.x-Z.min.x,Ae=Z.max.y-Z.min.y,Le=Z.isBox3?Z.max.z-Z.min.z:1,Ne=Z.min.x,Ve=Z.min.y,Oe=Z.isBox3?Z.min.z:0;else{const an=Math.pow(2,-G);Ie=Math.floor(_t.width*an),Ae=Math.floor(_t.height*an),E.isDataArrayTexture?Le=_t.depth:E.isData3DTexture?Le=Math.floor(_t.depth*an):Le=1,Ne=0,Ve=0,Oe=0}$!==null?($e=$.x,lt=$.y,gt=$.z):($e=0,lt=0,gt=0);const ut=me.convert(B.format),Be=me.convert(B.type);let st;B.isData3DTexture?(I.setTexture3D(B,0),st=A.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(I.setTexture2DArray(B,0),st=A.TEXTURE_2D_ARRAY):(I.setTexture2D(B,0),st=A.TEXTURE_2D),A.pixelStorei(A.UNPACK_FLIP_Y_WEBGL,B.flipY),A.pixelStorei(A.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),A.pixelStorei(A.UNPACK_ALIGNMENT,B.unpackAlignment);const Je=A.getParameter(A.UNPACK_ROW_LENGTH),tn=A.getParameter(A.UNPACK_IMAGE_HEIGHT),fr=A.getParameter(A.UNPACK_SKIP_PIXELS),nn=A.getParameter(A.UNPACK_SKIP_ROWS),qr=A.getParameter(A.UNPACK_SKIP_IMAGES);A.pixelStorei(A.UNPACK_ROW_LENGTH,_t.width),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,_t.height),A.pixelStorei(A.UNPACK_SKIP_PIXELS,Ne),A.pixelStorei(A.UNPACK_SKIP_ROWS,Ve),A.pixelStorei(A.UNPACK_SKIP_IMAGES,Oe);const dt=E.isDataArrayTexture||E.isData3DTexture,$t=B.isDataArrayTexture||B.isData3DTexture;if(E.isDepthTexture){const an=g.get(E),Vt=g.get(B),Kt=g.get(an.__renderTarget),Jo=g.get(Vt.__renderTarget);ce.bindFramebuffer(A.READ_FRAMEBUFFER,Kt.__webglFramebuffer),ce.bindFramebuffer(A.DRAW_FRAMEBUFFER,Jo.__webglFramebuffer);for(let Vi=0;Vi<Le;Vi++)dt&&(A.framebufferTextureLayer(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,g.get(E).__webglTexture,G,Oe+Vi),A.framebufferTextureLayer(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,g.get(B).__webglTexture,ye,gt+Vi)),A.blitFramebuffer(Ne,Ve,Ie,Ae,$e,lt,Ie,Ae,A.DEPTH_BUFFER_BIT,A.NEAREST);ce.bindFramebuffer(A.READ_FRAMEBUFFER,null),ce.bindFramebuffer(A.DRAW_FRAMEBUFFER,null)}else if(G!==0||E.isRenderTargetTexture||g.has(E)){const an=g.get(E),Vt=g.get(B);ce.bindFramebuffer(A.READ_FRAMEBUFFER,pp),ce.bindFramebuffer(A.DRAW_FRAMEBUFFER,mp);for(let Kt=0;Kt<Le;Kt++)dt?A.framebufferTextureLayer(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,an.__webglTexture,G,Oe+Kt):A.framebufferTexture2D(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,an.__webglTexture,G),$t?A.framebufferTextureLayer(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,Vt.__webglTexture,ye,gt+Kt):A.framebufferTexture2D(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,Vt.__webglTexture,ye),G!==0?A.blitFramebuffer(Ne,Ve,Ie,Ae,$e,lt,Ie,Ae,A.COLOR_BUFFER_BIT,A.NEAREST):$t?A.copyTexSubImage3D(st,ye,$e,lt,gt+Kt,Ne,Ve,Ie,Ae):A.copyTexSubImage2D(st,ye,$e,lt,Ne,Ve,Ie,Ae);ce.bindFramebuffer(A.READ_FRAMEBUFFER,null),ce.bindFramebuffer(A.DRAW_FRAMEBUFFER,null)}else $t?E.isDataTexture||E.isData3DTexture?A.texSubImage3D(st,ye,$e,lt,gt,Ie,Ae,Le,ut,Be,_t.data):B.isCompressedArrayTexture?A.compressedTexSubImage3D(st,ye,$e,lt,gt,Ie,Ae,Le,ut,_t.data):A.texSubImage3D(st,ye,$e,lt,gt,Ie,Ae,Le,ut,Be,_t):E.isDataTexture?A.texSubImage2D(A.TEXTURE_2D,ye,$e,lt,Ie,Ae,ut,Be,_t.data):E.isCompressedTexture?A.compressedTexSubImage2D(A.TEXTURE_2D,ye,$e,lt,_t.width,_t.height,ut,_t.data):A.texSubImage2D(A.TEXTURE_2D,ye,$e,lt,Ie,Ae,ut,Be,_t);A.pixelStorei(A.UNPACK_ROW_LENGTH,Je),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,tn),A.pixelStorei(A.UNPACK_SKIP_PIXELS,fr),A.pixelStorei(A.UNPACK_SKIP_ROWS,nn),A.pixelStorei(A.UNPACK_SKIP_IMAGES,qr),ye===0&&B.generateMipmaps&&A.generateMipmap(st),ce.unbindTexture()},this.initRenderTarget=function(E){g.get(E).__webglFramebuffer===void 0&&I.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?I.setTextureCube(E,0):E.isData3DTexture?I.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?I.setTexture2DArray(E,0):I.setTexture2D(E,0),ce.unbindTexture()},this.resetState=function(){L=0,N=0,z=null,ce.reset(),Pe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Fn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Ze._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ze._getUnpackColorSpace()}}const _i=(n,e)=>{const t=n.__vccOpts||n;for(const[i,r]of e)t[i]=r;return t},Ti=200,oE=.05,ka=2,Cf=.5,aE={__name:"ParticleBackground",setup(n){const e=Jt(null);let t=null,i=null,r=null,s=null,o={x:0,y:0},a=null;ur(()=>{l(),c(),f(),d(),window.addEventListener("resize",d),e.value?.addEventListener("mousemove",u)}),Mc(()=>{window.removeEventListener("resize",d),e.value?.removeEventListener("mousemove",u),a&&cancelAnimationFrame(a),r&&r.dispose()});function l(){t=new Qg,i=new fn(75,e.value.clientWidth/e.value.clientHeight,.1,1e3),i.position.z=5,r=new sE({alpha:!0,antialias:!0}),r.setSize(e.value.clientWidth,e.value.clientHeight),r.setPixelRatio(window.devicePixelRatio),e.value.appendChild(r.domElement)}function c(){const h=new Rn,_=new Float32Array(Ti*3),v=new Float32Array(Ti*3),m=new Float32Array(Ti),p=new Float32Array(Ti),b=new Float32Array(Ti);for(let M=0;M<Ti;M++){const w=M*3;_[w]=(Math.random()-.5)*10,_[w+1]=(Math.random()-.5)*10,_[w+2]=(Math.random()-.5)*10,v[w]=(Math.random()-.5)*.002,v[w+1]=(Math.random()-.5)*.002,v[w+2]=(Math.random()-.5)*.002,m[M]=Math.random(),p[M]=.002+Math.random()*.003,b[M]=Math.random()>.5?1:-1}h.setAttribute("position",new Xt(_,3)),h.setAttribute("velocity",new Xt(v,3)),h.setAttribute("opacity",new Xt(m,1)),h.setAttribute("fadeSpeed",new Xt(p,1)),h.setAttribute("fadeDirection",new Xt(b,1));const T=new Bh({size:oE,color:16777215,transparent:!0,opacity:.6,blending:al,vertexColors:!1});s=new r_(h,T),t.add(s)}function u(h){const _=e.value.getBoundingClientRect(),v=(h.clientX-_.left)/_.width*2-1,m=-((h.clientY-_.top)/_.height)*2+1;o.x=v*5,o.y=m*5}function f(){if(a=requestAnimationFrame(f),!s)return;const h=s.geometry.attributes.position.array,_=s.geometry.attributes.velocity.array,v=s.geometry.attributes.opacity.array,m=s.geometry.attributes.fadeSpeed.array,p=s.geometry.attributes.fadeDirection.array;for(let T=0;T<Ti;T++){const M=T*3;h[M]+=_[M],h[M+1]+=_[M+1],h[M+2]+=_[M+2],Math.abs(h[M])>5&&(_[M]*=-1),Math.abs(h[M+1])>5&&(_[M+1]*=-1),Math.abs(h[M+2])>5&&(_[M+2]*=-1);const w=h[M]-o.x,P=h[M+1]-o.y,D=Math.sqrt(w*w+P*P);if(D<ka){const x=(ka-D)/ka,y=Math.atan2(P,w);_[M]+=Math.cos(y)*x*Cf*.001,_[M+1]+=Math.sin(y)*x*Cf*.001}_[M]+=(Math.random()-.5)*1e-4,_[M+1]+=(Math.random()-.5)*1e-4,_[M+2]+=(Math.random()-.5)*1e-4;const V=Math.sqrt(_[M]**2+_[M+1]**2+_[M+2]**2);if(V>.01){const x=.01/V;_[M]*=x,_[M+1]*=x,_[M+2]*=x}v[T]+=m[T]*p[T],v[T]>=1?(v[T]=1,p[T]=-1):v[T]<=0&&(v[T]=0,p[T]=1)}s.geometry.attributes.position.needsUpdate=!0,s.geometry.attributes.velocity.needsUpdate=!0,s.geometry.attributes.opacity.needsUpdate=!0;const b=v.reduce((T,M)=>T+M,0)/Ti;s.material.opacity=b*.6,i.position.x+=(o.x*.1-i.position.x)*.05,i.position.y+=(o.y*.1-i.position.y)*.05,i.lookAt(t.position),r.render(t,i)}function d(){!e.value||!i||!r||(i.aspect=e.value.clientWidth/e.value.clientHeight,i.updateProjectionMatrix(),r.setSize(e.value.clientWidth,e.value.clientHeight))}return(h,_)=>(yt(),En("div",{ref_key:"containerRef",ref:e,class:"particle-background"},null,512))}},lE=_i(aE,[["__scopeId","data-v-3ea04891"]]),cE={__name:"App",setup(n){return(e,t)=>{const i=bm("router-view");return yt(),En(Ut,null,[bt(lE),bt(i)],64)}}};const Rr=typeof document<"u";function qh(n){return typeof n=="object"||"displayName"in n||"props"in n||"__vccOpts"in n}function uE(n){return n.__esModule||n[Symbol.toStringTag]==="Module"||n.default&&qh(n.default)}const nt=Object.assign;function Wa(n,e){const t={};for(const i in e){const r=e[i];t[i]=wn(r)?r.map(n):n(r)}return t}const hs=()=>{},wn=Array.isArray;function Pf(n,e){const t={};for(const i in n)t[i]=i in e?e[i]:n[i];return t}const Yh=/#/g,fE=/&/g,dE=/\//g,hE=/=/g,pE=/\?/g,$h=/\+/g,mE=/%5B/g,gE=/%5D/g,Kh=/%5E/g,_E=/%60/g,jh=/%7B/g,vE=/%7C/g,Zh=/%7D/g,xE=/%20/g;function Bc(n){return n==null?"":encodeURI(""+n).replace(vE,"|").replace(mE,"[").replace(gE,"]")}function SE(n){return Bc(n).replace(jh,"{").replace(Zh,"}").replace(Kh,"^")}function ic(n){return Bc(n).replace($h,"%2B").replace(xE,"+").replace(Yh,"%23").replace(fE,"%26").replace(_E,"`").replace(jh,"{").replace(Zh,"}").replace(Kh,"^")}function ME(n){return ic(n).replace(hE,"%3D")}function EE(n){return Bc(n).replace(Yh,"%23").replace(pE,"%3F")}function yE(n){return EE(n).replace(dE,"%2F")}function As(n){if(n==null)return null;try{return decodeURIComponent(""+n)}catch{}return""+n}const bE=/\/$/,TE=n=>n.replace(bE,"");function Xa(n,e,t="/"){let i,r={},s="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return l=a>=0&&l>a?-1:l,l>=0&&(i=e.slice(0,l),s=e.slice(l,a>0?a:e.length),r=n(s.slice(1))),a>=0&&(i=i||e.slice(0,a),o=e.slice(a,e.length)),i=CE(i??e,t),{fullPath:i+s+o,path:i,query:r,hash:As(o)}}function AE(n,e){const t=e.query?n(e.query):"";return e.path+(t&&"?")+t+(e.hash||"")}function Df(n,e){return!e||!n.toLowerCase().startsWith(e.toLowerCase())?n:n.slice(e.length)||"/"}function wE(n,e,t){const i=e.matched.length-1,r=t.matched.length-1;return i>-1&&i===r&&Gr(e.matched[i],t.matched[r])&&Jh(e.params,t.params)&&n(e.query)===n(t.query)&&e.hash===t.hash}function Gr(n,e){return(n.aliasOf||n)===(e.aliasOf||e)}function Jh(n,e){if(Object.keys(n).length!==Object.keys(e).length)return!1;for(var t in n)if(!RE(n[t],e[t]))return!1;return!0}function RE(n,e){return wn(n)?If(n,e):wn(e)?If(e,n):n?.valueOf()===e?.valueOf()}function If(n,e){return wn(e)?n.length===e.length&&n.every((t,i)=>t===e[i]):n.length===1&&n[0]===e}function CE(n,e){if(n.startsWith("/"))return n;if(!n)return e;const t=e.split("/"),i=n.split("/"),r=i[i.length-1];(r===".."||r===".")&&i.push("");let s=t.length-1,o,a;for(o=0;o<i.length;o++)if(a=i[o],a!==".")if(a==="..")s>1&&s--;else break;return t.slice(0,s).join("/")+"/"+i.slice(o).join("/")}const Ai={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};let rc=(function(n){return n.pop="pop",n.push="push",n})({}),qa=(function(n){return n.back="back",n.forward="forward",n.unknown="",n})({});function PE(n){if(!n)if(Rr){const e=document.querySelector("base");n=e&&e.getAttribute("href")||"/",n=n.replace(/^\w+:\/\/[^\/]+/,"")}else n="/";return n[0]!=="/"&&n[0]!=="#"&&(n="/"+n),TE(n)}const DE=/^[^#]+#/;function IE(n,e){return n.replace(DE,"#")+e}function LE(n,e){const t=document.documentElement.getBoundingClientRect(),i=n.getBoundingClientRect();return{behavior:e.behavior,left:i.left-t.left-(e.left||0),top:i.top-t.top-(e.top||0)}}const $o=()=>({left:window.scrollX,top:window.scrollY});function UE(n){let e;if("el"in n){const t=n.el,i=typeof t=="string"&&t.startsWith("#"),r=typeof t=="string"?i?document.getElementById(t.slice(1)):document.querySelector(t):t;if(!r)return;e=LE(r,n)}else e=n;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function Lf(n,e){return(history.state?history.state.position-e:-1)+n}const sc=new Map;function NE(n,e){sc.set(n,e)}function FE(n){const e=sc.get(n);return sc.delete(n),e}function OE(n){return typeof n=="string"||n&&typeof n=="object"}function Qh(n){return typeof n=="string"||typeof n=="symbol"}let vt=(function(n){return n[n.MATCHER_NOT_FOUND=1]="MATCHER_NOT_FOUND",n[n.NAVIGATION_GUARD_REDIRECT=2]="NAVIGATION_GUARD_REDIRECT",n[n.NAVIGATION_ABORTED=4]="NAVIGATION_ABORTED",n[n.NAVIGATION_CANCELLED=8]="NAVIGATION_CANCELLED",n[n.NAVIGATION_DUPLICATED=16]="NAVIGATION_DUPLICATED",n})({});const ep=Symbol("");vt.MATCHER_NOT_FOUND+"",vt.NAVIGATION_GUARD_REDIRECT+"",vt.NAVIGATION_ABORTED+"",vt.NAVIGATION_CANCELLED+"",vt.NAVIGATION_DUPLICATED+"";function kr(n,e){return nt(new Error,{type:n,[ep]:!0},e)}function Zn(n,e){return n instanceof Error&&ep in n&&(e==null||!!(n.type&e))}const BE=["params","query","hash"];function VE(n){if(typeof n=="string")return n;if(n.path!=null)return n.path;const e={};for(const t of BE)t in n&&(e[t]=n[t]);return JSON.stringify(e,null,2)}function zE(n){const e={};if(n===""||n==="?")return e;const t=(n[0]==="?"?n.slice(1):n).split("&");for(let i=0;i<t.length;++i){const r=t[i].replace($h," "),s=r.indexOf("="),o=As(s<0?r:r.slice(0,s)),a=s<0?null:As(r.slice(s+1));if(o in e){let l=e[o];wn(l)||(l=e[o]=[l]),l.push(a)}else e[o]=a}return e}function Uf(n){let e="";for(let t in n){const i=n[t];if(t=ME(t),i==null){i!==void 0&&(e+=(e.length?"&":"")+t);continue}(wn(i)?i.map(r=>r&&ic(r)):[i&&ic(i)]).forEach(r=>{r!==void 0&&(e+=(e.length?"&":"")+t,r!=null&&(e+="="+r))})}return e}function HE(n){const e={};for(const t in n){const i=n[t];i!==void 0&&(e[t]=wn(i)?i.map(r=>r==null?null:""+r):i==null?i:""+i)}return e}const GE=Symbol(""),Nf=Symbol(""),Ko=Symbol(""),tp=Symbol(""),oc=Symbol("");function ns(){let n=[];function e(i){return n.push(i),()=>{const r=n.indexOf(i);r>-1&&n.splice(r,1)}}function t(){n=[]}return{add:e,list:()=>n.slice(),reset:t}}function Pi(n,e,t,i,r,s=o=>o()){const o=i&&(i.enterCallbacks[r]=i.enterCallbacks[r]||[]);return()=>new Promise((a,l)=>{const c=d=>{d===!1?l(kr(vt.NAVIGATION_ABORTED,{from:t,to:e})):d instanceof Error?l(d):OE(d)?l(kr(vt.NAVIGATION_GUARD_REDIRECT,{from:e,to:d})):(o&&i.enterCallbacks[r]===o&&typeof d=="function"&&o.push(d),a())},u=s(()=>n.call(i&&i.instances[r],e,t,c));let f=Promise.resolve(u);n.length<3&&(f=f.then(c)),f.catch(d=>l(d))})}function Ya(n,e,t,i,r=s=>s()){const s=[];for(const o of n)for(const a in o.components){let l=o.components[a];if(!(e!=="beforeRouteEnter"&&!o.instances[a]))if(qh(l)){const c=(l.__vccOpts||l)[e];c&&s.push(Pi(c,t,i,o,a,r))}else{let c=l();s.push(()=>c.then(u=>{if(!u)throw new Error(`Couldn't resolve component "${a}" at "${o.path}"`);const f=uE(u)?u.default:u;o.mods[a]=u,o.components[a]=f;const d=(f.__vccOpts||f)[e];return d&&Pi(d,t,i,o,a,r)()}))}}return s}function kE(n,e){const t=[],i=[],r=[],s=Math.max(e.matched.length,n.matched.length);for(let o=0;o<s;o++){const a=e.matched[o];a&&(n.matched.find(c=>Gr(c,a))?i.push(a):t.push(a));const l=n.matched[o];l&&(e.matched.find(c=>Gr(c,l))||r.push(l))}return[t,i,r]}let WE=()=>location.protocol+"//"+location.host;function np(n,e){const{pathname:t,search:i,hash:r}=e,s=n.indexOf("#");if(s>-1){let o=r.includes(n.slice(s))?n.slice(s).length:1,a=r.slice(o);return a[0]!=="/"&&(a="/"+a),Df(a,"")}return Df(t,n)+i+r}function XE(n,e,t,i){let r=[],s=[],o=null;const a=({state:d})=>{const h=np(n,location),_=t.value,v=e.value;let m=0;if(d){if(t.value=h,e.value=d,o&&o===_){o=null;return}m=v?d.position-v.position:0}else i(h);r.forEach(p=>{p(t.value,_,{delta:m,type:rc.pop,direction:m?m>0?qa.forward:qa.back:qa.unknown})})};function l(){o=t.value}function c(d){r.push(d);const h=()=>{const _=r.indexOf(d);_>-1&&r.splice(_,1)};return s.push(h),h}function u(){if(document.visibilityState==="hidden"){const{history:d}=window;if(!d.state)return;d.replaceState(nt({},d.state,{scroll:$o()}),"")}}function f(){for(const d of s)d();s=[],window.removeEventListener("popstate",a),window.removeEventListener("pagehide",u),document.removeEventListener("visibilitychange",u)}return window.addEventListener("popstate",a),window.addEventListener("pagehide",u),document.addEventListener("visibilitychange",u),{pauseListeners:l,listen:c,destroy:f}}function Ff(n,e,t,i=!1,r=!1){return{back:n,current:e,forward:t,replaced:i,position:window.history.length,scroll:r?$o():null}}function qE(n){const{history:e,location:t}=window,i={value:np(n,t)},r={value:e.state};r.value||s(i.value,{back:null,current:i.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function s(l,c,u){const f=n.indexOf("#"),d=f>-1?(t.host&&document.querySelector("base")?n:n.slice(f))+l:WE()+n+l;try{e[u?"replaceState":"pushState"](c,"",d),r.value=c}catch(h){console.error(h),t[u?"replace":"assign"](d)}}function o(l,c){s(l,nt({},e.state,Ff(r.value.back,l,r.value.forward,!0),c,{position:r.value.position}),!0),i.value=l}function a(l,c){const u=nt({},r.value,e.state,{forward:l,scroll:$o()});s(u.current,u,!0),s(l,nt({},Ff(i.value,l,null),{position:u.position+1},c),!1),i.value=l}return{location:i,state:r,push:a,replace:o}}function YE(n){n=PE(n);const e=qE(n),t=XE(n,e.state,e.location,e.replace);function i(s,o=!0){o||t.pauseListeners(),history.go(s)}const r=nt({location:"",base:n,go:i,createHref:IE.bind(null,n)},e,t);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}let ir=(function(n){return n[n.Static=0]="Static",n[n.Param=1]="Param",n[n.Group=2]="Group",n})({});var Tt=(function(n){return n[n.Static=0]="Static",n[n.Param=1]="Param",n[n.ParamRegExp=2]="ParamRegExp",n[n.ParamRegExpEnd=3]="ParamRegExpEnd",n[n.EscapeNext=4]="EscapeNext",n})(Tt||{});const $E={type:ir.Static,value:""},KE=/[a-zA-Z0-9_]/;function jE(n){if(!n)return[[]];if(n==="/")return[[$E]];if(!n.startsWith("/"))throw new Error(`Invalid path "${n}"`);function e(h){throw new Error(`ERR (${t})/"${c}": ${h}`)}let t=Tt.Static,i=t;const r=[];let s;function o(){s&&r.push(s),s=[]}let a=0,l,c="",u="";function f(){c&&(t===Tt.Static?s.push({type:ir.Static,value:c}):t===Tt.Param||t===Tt.ParamRegExp||t===Tt.ParamRegExpEnd?(s.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),s.push({type:ir.Param,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function d(){c+=l}for(;a<n.length;){if(l=n[a++],l==="\\"&&t!==Tt.ParamRegExp){i=t,t=Tt.EscapeNext;continue}switch(t){case Tt.Static:l==="/"?(c&&f(),o()):l===":"?(f(),t=Tt.Param):d();break;case Tt.EscapeNext:d(),t=i;break;case Tt.Param:l==="("?t=Tt.ParamRegExp:KE.test(l)?d():(f(),t=Tt.Static,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case Tt.ParamRegExp:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:t=Tt.ParamRegExpEnd:u+=l;break;case Tt.ParamRegExpEnd:f(),t=Tt.Static,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return t===Tt.ParamRegExp&&e(`Unfinished custom RegExp for param "${c}"`),f(),o(),r}const Of="[^/]+?",ZE={sensitive:!1,strict:!1,start:!0,end:!0};var kt=(function(n){return n[n._multiplier=10]="_multiplier",n[n.Root=90]="Root",n[n.Segment=40]="Segment",n[n.SubSegment=30]="SubSegment",n[n.Static=40]="Static",n[n.Dynamic=20]="Dynamic",n[n.BonusCustomRegExp=10]="BonusCustomRegExp",n[n.BonusWildcard=-50]="BonusWildcard",n[n.BonusRepeatable=-20]="BonusRepeatable",n[n.BonusOptional=-8]="BonusOptional",n[n.BonusStrict=.7000000000000001]="BonusStrict",n[n.BonusCaseSensitive=.25]="BonusCaseSensitive",n})(kt||{});const JE=/[.+*?^${}()[\]/\\]/g;function QE(n,e){const t=nt({},ZE,e),i=[];let r=t.start?"^":"";const s=[];for(const c of n){const u=c.length?[]:[kt.Root];t.strict&&!c.length&&(r+="/");for(let f=0;f<c.length;f++){const d=c[f];let h=kt.Segment+(t.sensitive?kt.BonusCaseSensitive:0);if(d.type===ir.Static)f||(r+="/"),r+=d.value.replace(JE,"\\$&"),h+=kt.Static;else if(d.type===ir.Param){const{value:_,repeatable:v,optional:m,regexp:p}=d;s.push({name:_,repeatable:v,optional:m});const b=p||Of;if(b!==Of){h+=kt.BonusCustomRegExp;try{`${b}`}catch(M){throw new Error(`Invalid custom RegExp for param "${_}" (${b}): `+M.message)}}let T=v?`((?:${b})(?:/(?:${b}))*)`:`(${b})`;f||(T=m&&c.length<2?`(?:/${T})`:"/"+T),m&&(T+="?"),r+=T,h+=kt.Dynamic,m&&(h+=kt.BonusOptional),v&&(h+=kt.BonusRepeatable),b===".*"&&(h+=kt.BonusWildcard)}u.push(h)}i.push(u)}if(t.strict&&t.end){const c=i.length-1;i[c][i[c].length-1]+=kt.BonusStrict}t.strict||(r+="/?"),t.end?r+="$":t.strict&&!r.endsWith("/")&&(r+="(?:/|$)");const o=new RegExp(r,t.sensitive?"":"i");function a(c){const u=c.match(o),f={};if(!u)return null;for(let d=1;d<u.length;d++){const h=u[d]||"",_=s[d-1];f[_.name]=h&&_.repeatable?h.split("/"):h}return f}function l(c){let u="",f=!1;for(const d of n){(!f||!u.endsWith("/"))&&(u+="/"),f=!1;for(const h of d)if(h.type===ir.Static)u+=h.value;else if(h.type===ir.Param){const{value:_,repeatable:v,optional:m}=h,p=_ in c?c[_]:"";if(wn(p)&&!v)throw new Error(`Provided param "${_}" is an array but it is not repeatable (* or + modifiers)`);const b=wn(p)?p.join("/"):p;if(!b)if(m)d.length<2&&(u.endsWith("/")?u=u.slice(0,-1):f=!0);else throw new Error(`Missing required param "${_}"`);u+=b}}return u||"/"}return{re:o,score:i,keys:s,parse:a,stringify:l}}function ey(n,e){let t=0;for(;t<n.length&&t<e.length;){const i=e[t]-n[t];if(i)return i;t++}return n.length<e.length?n.length===1&&n[0]===kt.Static+kt.Segment?-1:1:n.length>e.length?e.length===1&&e[0]===kt.Static+kt.Segment?1:-1:0}function ip(n,e){let t=0;const i=n.score,r=e.score;for(;t<i.length&&t<r.length;){const s=ey(i[t],r[t]);if(s)return s;t++}if(Math.abs(r.length-i.length)===1){if(Bf(i))return 1;if(Bf(r))return-1}return r.length-i.length}function Bf(n){const e=n[n.length-1];return n.length>0&&e[e.length-1]<0}const ty={strict:!1,end:!0,sensitive:!1};function ny(n,e,t){const i=QE(jE(n.path),t),r=nt(i,{record:n,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function iy(n,e){const t=[],i=new Map;e=Pf(ty,e);function r(f){return i.get(f)}function s(f,d,h){const _=!h,v=zf(f);v.aliasOf=h&&h.record;const m=Pf(e,f),p=[v];if("alias"in f){const M=typeof f.alias=="string"?[f.alias]:f.alias;for(const w of M)p.push(zf(nt({},v,{components:h?h.record.components:v.components,path:w,aliasOf:h?h.record:v})))}let b,T;for(const M of p){const{path:w}=M;if(d&&w[0]!=="/"){const P=d.record.path,D=P[P.length-1]==="/"?"":"/";M.path=d.record.path+(w&&D+w)}if(b=ny(M,d,m),h?h.alias.push(b):(T=T||b,T!==b&&T.alias.push(b),_&&f.name&&!Hf(b)&&o(f.name)),rp(b)&&l(b),v.children){const P=v.children;for(let D=0;D<P.length;D++)s(P[D],b,h&&h.children[D])}h=h||b}return T?()=>{o(T)}:hs}function o(f){if(Qh(f)){const d=i.get(f);d&&(i.delete(f),t.splice(t.indexOf(d),1),d.children.forEach(o),d.alias.forEach(o))}else{const d=t.indexOf(f);d>-1&&(t.splice(d,1),f.record.name&&i.delete(f.record.name),f.children.forEach(o),f.alias.forEach(o))}}function a(){return t}function l(f){const d=oy(f,t);t.splice(d,0,f),f.record.name&&!Hf(f)&&i.set(f.record.name,f)}function c(f,d){let h,_={},v,m;if("name"in f&&f.name){if(h=i.get(f.name),!h)throw kr(vt.MATCHER_NOT_FOUND,{location:f});m=h.record.name,_=nt(Vf(d.params,h.keys.filter(T=>!T.optional).concat(h.parent?h.parent.keys.filter(T=>T.optional):[]).map(T=>T.name)),f.params&&Vf(f.params,h.keys.map(T=>T.name))),v=h.stringify(_)}else if(f.path!=null)v=f.path,h=t.find(T=>T.re.test(v)),h&&(_=h.parse(v),m=h.record.name);else{if(h=d.name?i.get(d.name):t.find(T=>T.re.test(d.path)),!h)throw kr(vt.MATCHER_NOT_FOUND,{location:f,currentLocation:d});m=h.record.name,_=nt({},d.params,f.params),v=h.stringify(_)}const p=[];let b=h;for(;b;)p.unshift(b.record),b=b.parent;return{name:m,path:v,params:_,matched:p,meta:sy(p)}}n.forEach(f=>s(f));function u(){t.length=0,i.clear()}return{addRoute:s,resolve:c,removeRoute:o,clearRoutes:u,getRoutes:a,getRecordMatcher:r}}function Vf(n,e){const t={};for(const i of e)i in n&&(t[i]=n[i]);return t}function zf(n){const e={path:n.path,redirect:n.redirect,name:n.name,meta:n.meta||{},aliasOf:n.aliasOf,beforeEnter:n.beforeEnter,props:ry(n),children:n.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in n?n.components||null:n.component&&{default:n.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function ry(n){const e={},t=n.props||!1;if("component"in n)e.default=t;else for(const i in n.components)e[i]=typeof t=="object"?t[i]:t;return e}function Hf(n){for(;n;){if(n.record.aliasOf)return!0;n=n.parent}return!1}function sy(n){return n.reduce((e,t)=>nt(e,t.meta),{})}function oy(n,e){let t=0,i=e.length;for(;t!==i;){const s=t+i>>1;ip(n,e[s])<0?i=s:t=s+1}const r=ay(n);return r&&(i=e.lastIndexOf(r,i-1)),i}function ay(n){let e=n;for(;e=e.parent;)if(rp(e)&&ip(n,e)===0)return e}function rp({record:n}){return!!(n.name||n.components&&Object.keys(n.components).length||n.redirect)}function Gf(n){const e=Bn(Ko),t=Bn(tp),i=Sn(()=>{const l=xn(n.to);return e.resolve(l)}),r=Sn(()=>{const{matched:l}=i.value,{length:c}=l,u=l[c-1],f=t.matched;if(!u||!f.length)return-1;const d=f.findIndex(Gr.bind(null,u));if(d>-1)return d;const h=kf(l[c-2]);return c>1&&kf(u)===h&&f[f.length-1].path!==h?f.findIndex(Gr.bind(null,l[c-2])):d}),s=Sn(()=>r.value>-1&&dy(t.params,i.value.params)),o=Sn(()=>r.value>-1&&r.value===t.matched.length-1&&Jh(t.params,i.value.params));function a(l={}){if(fy(l)){const c=e[xn(n.replace)?"replace":"push"](xn(n.to)).catch(hs);return n.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>c),c}return Promise.resolve()}return{route:i,href:Sn(()=>i.value.href),isActive:s,isExactActive:o,navigate:a}}function ly(n){return n.length===1?n[0]:n}const cy=Ud({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:Gf,setup(n,{slots:e}){const t=Oo(Gf(n)),{options:i}=Bn(Ko),r=Sn(()=>({[Wf(n.activeClass,i.linkActiveClass,"router-link-active")]:t.isActive,[Wf(n.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:t.isExactActive}));return()=>{const s=e.default&&ly(e.default(t));return n.custom?s:wc("a",{"aria-current":t.isExactActive?n.ariaCurrentValue:null,href:t.href,onClick:t.navigate,class:r.value},s)}}}),uy=cy;function fy(n){if(!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)&&!n.defaultPrevented&&!(n.button!==void 0&&n.button!==0)){if(n.currentTarget&&n.currentTarget.getAttribute){const e=n.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return n.preventDefault&&n.preventDefault(),!0}}function dy(n,e){for(const t in e){const i=e[t],r=n[t];if(typeof i=="string"){if(i!==r)return!1}else if(!wn(r)||r.length!==i.length||i.some((s,o)=>s.valueOf()!==r[o].valueOf()))return!1}return!0}function kf(n){return n?n.aliasOf?n.aliasOf.path:n.path:""}const Wf=(n,e,t)=>n??e??t,hy=Ud({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(n,{attrs:e,slots:t}){const i=Bn(oc),r=Sn(()=>n.route||i.value),s=Bn(Nf,0),o=Sn(()=>{let c=xn(s);const{matched:u}=r.value;let f;for(;(f=u[c])&&!f.components;)c++;return c}),a=Sn(()=>r.value.matched[o.value]);uo(Nf,Sn(()=>o.value+1)),uo(GE,a),uo(oc,r);const l=Jt();return Ni(()=>[l.value,a.value,n.name],([c,u,f],[d,h,_])=>{u&&(u.instances[f]=c,h&&h!==u&&c&&c===d&&(u.leaveGuards.size||(u.leaveGuards=h.leaveGuards),u.updateGuards.size||(u.updateGuards=h.updateGuards))),c&&u&&(!h||!Gr(u,h)||!d)&&(u.enterCallbacks[f]||[]).forEach(v=>v(c))},{flush:"post"}),()=>{const c=r.value,u=n.name,f=a.value,d=f&&f.components[u];if(!d)return Xf(t.default,{Component:d,route:c});const h=f.props[u],_=h?h===!0?c.params:typeof h=="function"?h(c):h:null,m=wc(d,nt({},_,e,{onVnodeUnmounted:p=>{p.component.isUnmounted&&(f.instances[u]=null)},ref:l}));return Xf(t.default,{Component:m,route:c})||m}}});function Xf(n,e){if(!n)return null;const t=n(e);return t.length===1?t[0]:t}const py=hy;function my(n){const e=iy(n.routes,n),t=n.parseQuery||zE,i=n.stringifyQuery||Uf,r=n.history,s=ns(),o=ns(),a=ns(),l=Kp(Ai);let c=Ai;Rr&&n.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Wa.bind(null,U=>""+U),f=Wa.bind(null,yE),d=Wa.bind(null,As);function h(U,ie){let ae,oe;return Qh(U)?(ae=e.getRecordMatcher(U),oe=ie):oe=U,e.addRoute(oe,ae)}function _(U){const ie=e.getRecordMatcher(U);ie&&e.removeRoute(ie)}function v(){return e.getRoutes().map(U=>U.record)}function m(U){return!!e.getRecordMatcher(U)}function p(U,ie){if(ie=nt({},ie||l.value),typeof U=="string"){const F=Xa(t,U,ie.path),j=e.resolve({path:F.path},ie),q=r.createHref(F.fullPath);return nt(F,j,{params:d(j.params),hash:As(F.hash),redirectedFrom:void 0,href:q})}let ae;if(U.path!=null)ae=nt({},U,{path:Xa(t,U.path,ie.path).path});else{const F=nt({},U.params);for(const j in F)F[j]==null&&delete F[j];ae=nt({},U,{params:f(F)}),ie.params=f(ie.params)}const oe=e.resolve(ae,ie),De=U.hash||"";oe.params=u(d(oe.params));const R=AE(i,nt({},U,{hash:SE(De),path:oe.path})),C=r.createHref(R);return nt({fullPath:R,hash:De,query:i===Uf?HE(U.query):U.query||{}},oe,{redirectedFrom:void 0,href:C})}function b(U){return typeof U=="string"?Xa(t,U,l.value.path):nt({},U)}function T(U,ie){if(c!==U)return kr(vt.NAVIGATION_CANCELLED,{from:ie,to:U})}function M(U){return D(U)}function w(U){return M(nt(b(U),{replace:!0}))}function P(U,ie){const ae=U.matched[U.matched.length-1];if(ae&&ae.redirect){const{redirect:oe}=ae;let De=typeof oe=="function"?oe(U,ie):oe;return typeof De=="string"&&(De=De.includes("?")||De.includes("#")?De=b(De):{path:De},De.params={}),nt({query:U.query,hash:U.hash,params:De.path!=null?{}:U.params},De)}}function D(U,ie){const ae=c=p(U),oe=l.value,De=U.state,R=U.force,C=U.replace===!0,F=P(ae,oe);if(F)return D(nt(b(F),{state:typeof F=="object"?nt({},De,F.state):De,force:R,replace:C}),ie||ae);const j=ae;j.redirectedFrom=ie;let q;return!R&&wE(i,oe,ae)&&(q=kr(vt.NAVIGATION_DUPLICATED,{to:j,from:oe}),Se(oe,oe,!0,!1)),(q?Promise.resolve(q):y(j,oe)).catch(J=>Zn(J)?Zn(J,vt.NAVIGATION_GUARD_REDIRECT)?J:ge(J):ee(J,j,oe)).then(J=>{if(J){if(Zn(J,vt.NAVIGATION_GUARD_REDIRECT))return D(nt({replace:C},b(J.to),{state:typeof J.to=="object"?nt({},De,J.to.state):De,force:R}),ie||j)}else J=N(j,oe,!0,C,De);return L(j,oe,J),J})}function V(U,ie){const ae=T(U,ie);return ae?Promise.reject(ae):Promise.resolve()}function x(U){const ie=tt.values().next().value;return ie&&typeof ie.runWithContext=="function"?ie.runWithContext(U):U()}function y(U,ie){let ae;const[oe,De,R]=kE(U,ie);ae=Ya(oe.reverse(),"beforeRouteLeave",U,ie);for(const F of oe)F.leaveGuards.forEach(j=>{ae.push(Pi(j,U,ie))});const C=V.bind(null,U,ie);return ae.push(C),re(ae).then(()=>{ae=[];for(const F of s.list())ae.push(Pi(F,U,ie));return ae.push(C),re(ae)}).then(()=>{ae=Ya(De,"beforeRouteUpdate",U,ie);for(const F of De)F.updateGuards.forEach(j=>{ae.push(Pi(j,U,ie))});return ae.push(C),re(ae)}).then(()=>{ae=[];for(const F of R)if(F.beforeEnter)if(wn(F.beforeEnter))for(const j of F.beforeEnter)ae.push(Pi(j,U,ie));else ae.push(Pi(F.beforeEnter,U,ie));return ae.push(C),re(ae)}).then(()=>(U.matched.forEach(F=>F.enterCallbacks={}),ae=Ya(R,"beforeRouteEnter",U,ie,x),ae.push(C),re(ae))).then(()=>{ae=[];for(const F of o.list())ae.push(Pi(F,U,ie));return ae.push(C),re(ae)}).catch(F=>Zn(F,vt.NAVIGATION_CANCELLED)?F:Promise.reject(F))}function L(U,ie,ae){a.list().forEach(oe=>x(()=>oe(U,ie,ae)))}function N(U,ie,ae,oe,De){const R=T(U,ie);if(R)return R;const C=ie===Ai,F=Rr?history.state:{};ae&&(oe||C?r.replace(U.fullPath,nt({scroll:C&&F&&F.scroll},De)):r.push(U.fullPath,De)),l.value=U,Se(U,ie,ae,C),ge()}let z;function ne(){z||(z=r.listen((U,ie,ae)=>{if(!je.listening)return;const oe=p(U),De=P(oe,je.currentRoute.value);if(De){D(nt(De,{replace:!0,force:!0}),oe).catch(hs);return}c=oe;const R=l.value;Rr&&NE(Lf(R.fullPath,ae.delta),$o()),y(oe,R).catch(C=>Zn(C,vt.NAVIGATION_ABORTED|vt.NAVIGATION_CANCELLED)?C:Zn(C,vt.NAVIGATION_GUARD_REDIRECT)?(D(nt(b(C.to),{force:!0}),oe).then(F=>{Zn(F,vt.NAVIGATION_ABORTED|vt.NAVIGATION_DUPLICATED)&&!ae.delta&&ae.type===rc.pop&&r.go(-1,!1)}).catch(hs),Promise.reject()):(ae.delta&&r.go(-ae.delta,!1),ee(C,oe,R))).then(C=>{C=C||N(oe,R,!1),C&&(ae.delta&&!Zn(C,vt.NAVIGATION_CANCELLED)?r.go(-ae.delta,!1):ae.type===rc.pop&&Zn(C,vt.NAVIGATION_ABORTED|vt.NAVIGATION_DUPLICATED)&&r.go(-1,!1)),L(oe,R,C)}).catch(hs)}))}let te=ns(),K=ns(),H;function ee(U,ie,ae){ge(U);const oe=K.list();return oe.length?oe.forEach(De=>De(U,ie,ae)):console.error(U),Promise.reject(U)}function ve(){return H&&l.value!==Ai?Promise.resolve():new Promise((U,ie)=>{te.add([U,ie])})}function ge(U){return H||(H=!U,ne(),te.list().forEach(([ie,ae])=>U?ae(U):ie()),te.reset()),U}function Se(U,ie,ae,oe){const{scrollBehavior:De}=n;if(!Rr||!De)return Promise.resolve();const R=!ae&&FE(Lf(U.fullPath,0))||(oe||!ae)&&history.state&&history.state.scroll||null;return xc().then(()=>De(U,ie,R)).then(C=>C&&UE(C)).catch(C=>ee(C,U,ie))}const Fe=U=>r.go(U);let ze;const tt=new Set,je={currentRoute:l,listening:!0,addRoute:h,removeRoute:_,clearRoutes:e.clearRoutes,hasRoute:m,getRoutes:v,resolve:p,options:n,push:M,replace:w,go:Fe,back:()=>Fe(-1),forward:()=>Fe(1),beforeEach:s.add,beforeResolve:o.add,afterEach:a.add,onError:K.add,isReady:ve,install(U){U.component("RouterLink",uy),U.component("RouterView",py),U.config.globalProperties.$router=je,Object.defineProperty(U.config.globalProperties,"$route",{enumerable:!0,get:()=>xn(l)}),Rr&&!ze&&l.value===Ai&&(ze=!0,M(r.location).catch(oe=>{}));const ie={};for(const oe in Ai)Object.defineProperty(ie,oe,{get:()=>l.value[oe],enumerable:!0});U.provide(Ko,je),U.provide(tp,md(ie)),U.provide(oc,l);const ae=U.unmount;tt.add(U),U.unmount=function(){tt.delete(U),tt.size<1&&(c=Ai,z&&z(),z=null,l.value=Ai,ze=!1,H=!1),ae()}}};function re(U){return U.reduce((ie,ae)=>ie.then(()=>x(ae)),Promise.resolve())}return je}function sp(){return Bn(Ko)}const gy="/zsm.jpg",_y="/usdt.jpg",vy={class:"modal-content"},xy={__name:"Modal",props:{modelValue:{type:Boolean,default:!1},containerClass:{type:String,default:""},closeOnOverlay:{type:Boolean,default:!0}},emits:["update:modelValue","close"],setup(n,{emit:e}){const t=n,i=e;function r(){i("update:modelValue",!1),i("close")}function s(){t.closeOnOverlay&&r()}return(o,a)=>(yt(),ui(cm,{to:"body"},[bt(x0,{name:"modal"},{default:cr(()=>[n.modelValue?(yt(),En("div",{key:0,class:"modal-overlay",onClick:G0(s,["self"])},[W("div",{class:vn(["modal-container",n.containerClass])},[W("button",{class:"modal-close",onClick:r,"aria-label":"关闭"},[...a[0]||(a[0]=[W("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[W("path",{d:"M15 5L5 15M5 5L15 15",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})],-1)])]),W("div",vy,[Bd(o.$slots,"default",{},void 0,!0)])],2)])):ih("",!0)]),_:3})]))}},op=_i(xy,[["__scopeId","data-v-f29cc079"]]),Sy={class:"sponsor-modal"},My={class:"sponsor-methods"},Ey={class:"sponsor-item"},yy={class:"address-container"},by={class:"address-box"},Ty={__name:"SponsorModal",props:{modelValue:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(n,{emit:e}){const t=n,i=e,r=Jt(t.modelValue),s=Jt(!1);Ni(()=>t.modelValue,l=>{r.value=l}),Ni(r,l=>{i("update:modelValue",l)});function o(){r.value=!1}async function a(){const l="0x0F65D3Ceb45a660fC87ED850c121862cFad5c815";try{await navigator.clipboard.writeText(l),s.value=!0,setTimeout(()=>{s.value=!1},2e3)}catch(c){console.error("复制失败:",c);const u=document.createElement("textarea");u.value=l,u.style.position="fixed",u.style.opacity="0",document.body.appendChild(u),u.select();try{document.execCommand("copy"),s.value=!0,setTimeout(()=>{s.value=!1},2e3)}catch(f){console.error("复制失败:",f)}document.body.removeChild(u)}}return(l,c)=>(yt(),ui(op,{modelValue:r.value,"onUpdate:modelValue":c[0]||(c[0]=u=>r.value=u),onClose:o},{default:cr(()=>[W("div",Sy,[c[6]||(c[6]=W("h2",{class:"sponsor-title"},"赞助我",-1)),c[7]||(c[7]=W("p",{class:"sponsor-desc"},"感谢您的支持！",-1)),W("div",My,[c[5]||(c[5]=W("div",{class:"sponsor-item"},[W("h3",{class:"sponsor-item-title"},"微信赞赏"),W("div",{class:"qr-code-container"},[W("img",{src:gy,alt:"微信赞赏码",class:"qr-code"})])],-1)),W("div",Ey,[c[3]||(c[3]=W("h3",{class:"sponsor-item-title"},"USDT (以太坊链)",-1)),c[4]||(c[4]=W("div",{class:"qr-code-container"},[W("img",{src:_y,alt:"USDT收款码",class:"qr-code"})],-1)),W("div",yy,[c[2]||(c[2]=W("p",{class:"address-label"},"钱包地址：",-1)),W("div",by,[c[1]||(c[1]=W("code",{class:"address-code"},"0x0F65D3Ceb45a660fC87ED850c121862cFad5c815",-1)),W("button",{class:vn(["copy-btn",{copied:s.value}]),onClick:a},rr(s.value?"已复制":"复制"),3)])])])])])]),_:1},8,["modelValue"]))}},Ay=_i(Ty,[["__scopeId","data-v-584284af"]]),wy="data:image/svg+xml,%3c?xml%20version='1.0'%20standalone='no'?%3e%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3csvg%20t='1767491986153'%20class='icon'%20viewBox='0%200%201024%201024'%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20p-id='3403'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20width='200'%20height='200'%3e%3cpath%20d='M550.744931%20834.806034%20550.744931%20834.806034c-11.183713%200-16.754592%200-22.327518%200-5.53404%200-11.144828%200-16.718777%200l-5.572926%200c-5.571902%200-16.717753%200-22.289656%205.53404-22.290679%2022.326495-61.298088%2033.475416-111.453395%2033.475416-33.434483%200-61.298088-5.610788-89.163739-16.7198-22.289656-11.143805-33.435507-22.326495-33.435507-39.009456%200-16.717753%2011.143805-27.862581%2039.009456-39.045271%2016.717753-5.535063%2022.289656-11.106965%2022.289656-22.326495%200-11.106965%200-22.25384-5.572926-27.863604-11.144828-11.034311-16.718777-27.788903-27.863604-38.896892-5.572926-11.144828-16.71673-16.755616-27.861558-16.755616l0%200c-11.144828%200-16.717753%205.608741-27.863604%2011.220552-11.143805%2011.106965-16.717753%2016.644075-22.290679%2016.644075l0%200c-5.572926%200-11.106965-16.644075-11.106965-44.505633%200-27.863604%205.535063-61.336974%2011.070126-94.810343%2011.145851-33.398668%2027.862581-61.261249%2055.725162-89.124853%205.574972-5.535063%2011.146874-16.717753%2011.146874-27.863604%200-5.53404%200-5.53404%200-11.106965%200-16.755616%205.571902-33.435507%2016.71673-50.154283%205.573949-5.572926%205.573949-11.143805%205.573949-16.717753l0-5.573949c0.035816-66.908876%2022.288632-122.635061%2072.480778-172.789345%2044.582381-50.191122%20100.30652-72.444962%20167.180604-72.444962%2066.872037%200%20122.600269%2022.290679%20172.751482%2072.444962%2044.618197%2050.154283%2072.480778%20105.880469%2072.480778%20172.715667%200%200%200%200%200%205.572926%200%205.573949%200%2011.144828%205.536087%2016.717753%2011.141758%2016.718777%2016.717753%2033.398668%2016.717753%2050.154283%200%205.572926%200%205.572926%200%2011.106965%200%2011.144828%200%2022.326495%2011.143805%2027.862581%2027.863604%2027.862581%2044.581358%2055.726186%2055.726186%2089.124853%2011.144828%2033.474392%2016.717753%2066.944691%2011.144828%2094.810343%200%2027.862581-5.573949%2038.97057-16.681938%2044.50768-5.573949%200-11.183713-5.535063-22.328541-16.645099-5.533017-5.572926-16.718777-11.219529-27.861558-11.219529l-5.536087%200c-11.184737%200-22.325471%205.606695-27.861558%2016.753569-5.573949%2016.71673-16.754592%2027.863604-27.863604%2038.969547-5.572926%205.608741-11.18269%2016.754592-5.572926%2027.863604%200%2011.220552%2011.145851%2016.753569%2016.682961%2022.326495%2027.826765%2011.219529%2039.010479%2022.364357%2039.010479%2039.08211%200%2016.680914-11.183713%2027.863604-33.43653%2039.008432-22.289656%2011.106965-55.724139%2016.7198-89.164762%2016.7198-50.15326%200-83.58979-11.184737-111.452371-33.474392%205.571902%200-5.572926-5.572926-11.106965-5.572926l0%200L550.744931%20834.806034zM678.880263%20940.724365c55.726186%200%20100.30652-11.143805%20133.74305-33.398668%2033.435507-22.326495%2055.724139-50.191122%2055.724139-89.163739%200-22.291702-5.53404-39.046295-16.678868-55.726186%205.571902%200%2016.678868%200%2022.287609-5.608741%2033.435507-11.106965%2050.15633-38.97057%2055.727209-83.591837%205.571902-38.9675%200-83.58979-16.681938-133.706211-11.18269-39.046295-33.435507-72.444962-61.297065-105.880469l0%200c0-27.862581-5.573949-50.154283-16.7198-78.015841%200-83.590813-27.861558-156.034752-89.124853-217.370703C684.450119%2076.963882%20612.004133%2049.098231%20528.418436%2049.098231c-83.590813%200-156.034752%2027.862581-217.334887%2089.124853-55.764048%2061.33595-89.163739%20133.781936-89.163739%20217.370703-11.143805%2022.290679-16.717753%2050.154283-16.717753%2078.016865l0%205.571902c-33.434483%2027.863604-50.154283%2066.87306-61.298088%20100.305497-16.718777%2050.118468-22.290679%2094.737688-16.718777%20133.708258%205.573949%2044.61922%2027.863604%2072.482825%2055.726186%2083.590813%205.572926%200%2016.718777%205.608741%2022.290679%205.608741-11.144828%2016.681938-16.718777%2033.43653-16.718777%2055.726186%200%2033.435507%2016.718777%2066.872037%2055.727209%2089.163739%2033.435507%2022.291702%2078.015841%2033.435507%20128.169101%2033.435507%2055.725162%200%20105.880469-11.142781%20139.316999-39.007409l27.863604%200c39.045271%2027.862581%2083.590813%2039.007409%20139.316999%2039.007409l0%200L678.880263%20940.724365z'%20fill='%23bfbfbf'%20p-id='3404'%3e%3c/path%3e%3c/svg%3e",Ry="data:image/svg+xml,%3c?xml%20version='1.0'%20standalone='no'?%3e%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3csvg%20t='1767492016670'%20class='icon'%20viewBox='0%200%201024%201024'%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20p-id='4505'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20width='200'%20height='200'%3e%3cpath%20d='M278.8864%20148.1728c14.336-8.192%2032.6144-9.3696%2047.8208-2.6624%2011.3664%204.6592%2019.968%2013.824%2029.184%2021.6064%2038.144%2032.9216%2075.9808%2066.304%20114.2784%2099.0208h80.4352c38.2976-32.768%2076.0832-66.048%20114.2272-98.9696%209.2672-7.7824%2017.8688-16.896%2029.2864-21.6576%2014.7456-6.5024%2032.4608-5.632%2046.592%202.048%2016.5888%208.5504%2028.1088%2026.2656%2028.8256%2044.9536%201.024%2013.568-3.84%2027.2896-12.3392%2037.7856-7.5264%208.3456-16.5376%2015.2064-24.8832%2022.6816-5.3248%204.4032-10.1376%209.5232-16.0256%2013.2096%2023.6544%200%2047.2576-0.256%2070.912%200.1536%2031.1296%200.8192%2061.44%2014.592%2082.8928%2037.1712%2022.6304%2022.2208%2035.5328%2053.5552%2035.4816%2085.1968%200.1024%20108.4416%200%20216.9344%200.0512%20325.376-0.1024%2016.384%200.8192%2033.024-2.816%2049.152-6.656%2032.9728-28.8256%2061.5936-56.9856%2079.36a121.344%20121.344%200%200%201-64.7168%2017.7664H263.2704c-16.9984-0.1024-34.2528%200.8704-50.9952-2.8672-32.1024-6.4512-60.0064-27.648-77.824-54.6304a121.088%20121.088%200%200%201-19.2512-66.9696v-321.536c0.1024-16.5376-0.9216-33.1776%202.4576-49.408%2010.24-52.9408%2058.9312-96.1024%20112.9984-98.4576%2024.6272-0.768%2049.3056-0.2048%2073.9328-0.3072-11.6224-8.3968-21.8112-18.5344-32.768-27.7504a55.04%2055.04%200%200%201-20.5312-45.9264c0.7168-18.2272%2011.6736-35.584%2027.648-44.3392m-13.056%20221.7984c-20.992%203.7376-38.912%2020.3264-44.7488%2040.7552a76.4928%2076.4928%200%200%200-2.3552%2021.7088c0.1024%2089.0368-0.0512%20178.0736%200.0512%20267.1616-0.4096%2024.2176%2016.3328%2047.1552%2039.1168%2054.8864%208.1408%202.9696%2016.896%203.0208%2025.3952%203.072%20153.1904-0.1024%20306.432%200.0512%20459.6224-0.0512%2022.4768%200.8704%2044.0832-13.1072%2053.5552-33.28%205.7856-11.5712%205.6832-24.7296%205.4784-37.376v-248.832c0-9.1136%200.3072-18.4832-2.304-27.2896a58.7776%2058.7776%200%200%200-36.864-38.656c-9.7792-3.584-20.4288-3.0208-30.6688-3.072H292.5056c-8.8576%200-17.8176-0.3072-26.624%200.9728z'%20fill='%23bfbfbf'%20p-id='4506'%3e%3c/path%3e%3cpath%20d='M358.7072%20455.5264c14.6432-1.4848%2029.8496%203.2768%2041.0112%2012.8%2012.4416%2010.24%2019.5584%2026.112%2019.7632%2042.1376%200.3584%2019.4048%200.1024%2038.8608%200.1024%2058.2656%200%2012.8-3.3792%2025.8048-11.3152%2035.9424a54.9888%2054.9888%200%200%201-48.4864%2021.76%2054.9376%2054.9376%200%200%201-44.032-28.2624c-6.8096-11.6736-7.3728-25.4976-7.168-38.6048%200.4096-18.8416-1.024-37.7856%200.8704-56.576a55.296%2055.296%200%200%201%2049.2544-47.4624z%20m292.4544%200a55.2448%2055.2448%200%200%201%2060.7232%2053.0432c0.8192%2018.2272%200.1024%2036.4544%200.4096%2054.6816%200.1024%2012.8-1.4336%2026.112-8.4992%2037.12-10.24%2017.0496-30.3104%2027.5456-50.176%2026.112a55.04%2055.04%200%200%201-43.3664-24.9856c-7.936-11.776-9.472-26.2656-9.1136-40.0896%200.3584-18.7392-0.6656-37.4784%200.6144-56.1664%201.8432-25.6%2023.9104-47.5136%2049.408-49.664z'%20fill='%23bfbfbf'%20p-id='4507'%3e%3c/path%3e%3c/svg%3e",Cy="data:image/svg+xml,%3c?xml%20version='1.0'%20standalone='no'?%3e%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3csvg%20t='1767492073366'%20class='icon'%20viewBox='0%200%201024%201024'%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20p-id='9084'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20width='200'%20height='200'%3e%3cpath%20d='M778.41%2096h141.142L611.2%20448.427%20973.952%20928H689.92L467.456%20637.141%20212.906%20928H71.68l329.813-376.96L53.504%2096h291.243l201.088%20265.856z%20m-49.535%20747.52h78.208L302.25%20176.043h-83.926z'%20fill='%23bfbfbf'%20p-id='9085'%3e%3c/path%3e%3c/svg%3e",Py="data:image/svg+xml,%3c?xml%20version='1.0'%20standalone='no'?%3e%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3csvg%20t='1767492096285'%20class='icon'%20viewBox='0%200%201024%201024'%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20p-id='10159'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20width='200'%20height='200'%3e%3cpath%20d='M883.626667%20155.946667s82.858667-32.341333%2075.946666%2046.165333c-2.261333%2032.298667-22.997333%20145.408-39.125333%20267.776l-55.253333%20362.453333s-4.608%2053.077333-46.08%2062.293334c-41.386667%209.258667-103.552-32.298667-115.072-41.514667-9.216-6.912-172.672-110.805333-230.272-161.621333-16.085333-13.824-34.517333-41.557333%202.346666-73.856l241.749334-230.826667c27.605333-27.733333%2055.253333-92.373333-59.861334-13.866667l-322.346666%20219.306667s-36.864%2023.04-105.898667%202.304l-149.674667-46.165333s-55.253333-34.645333%2039.125334-69.248C349.482667%20370.56%20632.661333%20259.84%20883.626667%20155.904z'%20p-id='10160'%20fill='%23bfbfbf'%3e%3c/path%3e%3c/svg%3e",Dy="data:image/svg+xml,%3c?xml%20version='1.0'%20standalone='no'?%3e%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3csvg%20t='1767492152747'%20class='icon'%20viewBox='0%200%201024%201024'%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20p-id='12870'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20width='200'%20height='200'%3e%3cpath%20d='M789.333333%20128a170.666667%20170.666667%200%200%201%20170.666667%20170.666667v426.666666a170.666667%20170.666667%200%200%201-170.666667%20170.666667H234.666667a170.666667%20170.666667%200%200%201-170.666667-170.666667V298.666667a170.666667%20170.666667%200%200%201%20170.666667-170.666667h554.666666z%20m106.666667%20243.797333l-310.613333%20147.925334a170.666667%20170.666667%200%200%201-146.773334%200L128%20371.797333V725.333333a106.666667%20106.666667%200%200%200%20102.037333%20106.56L234.666667%20832h554.666666a106.666667%20106.666667%200%200%200%20106.56-102.037333L896%20725.333333V371.797333zM789.333333%20192H234.666667a106.666667%20106.666667%200%200%200-106.56%20102.037333L128%20300.928l338.133333%20161.024a106.666667%20106.666667%200%200%200%2086.549334%202.282667l5.184-2.282667L896%20300.906667V298.666667a106.666667%20106.666667%200%200%200-102.037333-106.56L789.333333%20192z'%20fill='%23bfbfbf'%20p-id='12871'%3e%3c/path%3e%3c/svg%3e",Iy={class:"contact-modal"},Ly={class:"contact-list"},Uy={href:"https://qm.qq.com/q/sYpQL63U64",target:"_blank",rel:"noopener noreferrer",class:"contact-item"},Ny={class:"contact-icon"},Fy=["src"],Oy={href:"https://space.bilibili.com/1605719047",target:"_blank",rel:"noopener noreferrer",class:"contact-item"},By={class:"contact-icon"},Vy=["src"],zy={href:"https://x.com/xc1oud67589",target:"_blank",rel:"noopener noreferrer",class:"contact-item"},Hy={class:"contact-icon"},Gy=["src"],ky={href:"https://t.me/tmyy520",target:"_blank",rel:"noopener noreferrer",class:"contact-item"},Wy={class:"contact-icon"},Xy=["src"],qy={href:"mailto:mzxtiamy@outlook.com",class:"contact-item"},Yy={class:"contact-icon"},$y=["src"],Ky={__name:"ContactModal",props:{modelValue:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(n,{emit:e}){const t=n,i=e,r=Jt(t.modelValue);Ni(()=>t.modelValue,o=>{r.value=o}),Ni(r,o=>{i("update:modelValue",o)});function s(){r.value=!1}return(o,a)=>(yt(),ui(op,{modelValue:r.value,"onUpdate:modelValue":a[0]||(a[0]=l=>r.value=l),onClose:s},{default:cr(()=>[W("div",Iy,[a[6]||(a[6]=W("h2",{class:"contact-title"},"联系我",-1)),a[7]||(a[7]=W("p",{class:"contact-desc"},"通过以下方式与我取得联系",-1)),W("div",Ly,[W("a",Uy,[W("div",Ny,[W("img",{src:xn(wy),alt:"QQ",class:"icon-svg"},null,8,Fy)]),a[1]||(a[1]=W("div",{class:"contact-info"},[W("h3",{class:"contact-name"},"QQ群"),W("p",{class:"contact-link"},"点击加入QQ群")],-1))]),W("a",Oy,[W("div",By,[W("img",{src:xn(Ry),alt:"哔哩哔哩",class:"icon-svg"},null,8,Vy)]),a[2]||(a[2]=W("div",{class:"contact-info"},[W("h3",{class:"contact-name"},"哔哩哔哩"),W("p",{class:"contact-link"},"访问我的主页")],-1))]),W("a",zy,[W("div",Hy,[W("img",{src:xn(Cy),alt:"X",class:"icon-svg"},null,8,Gy)]),a[3]||(a[3]=W("div",{class:"contact-info"},[W("h3",{class:"contact-name"},"X (Twitter)"),W("p",{class:"contact-link"},"@xc1oud67589")],-1))]),W("a",ky,[W("div",Wy,[W("img",{src:xn(Py),alt:"Telegram",class:"icon-svg"},null,8,Xy)]),a[4]||(a[4]=W("div",{class:"contact-info"},[W("h3",{class:"contact-name"},"Telegram"),W("p",{class:"contact-link"},"加入我的频道")],-1))]),W("a",qy,[W("div",Yy,[W("img",{src:xn(Dy),alt:"邮箱",class:"icon-svg"},null,8,$y)]),a[5]||(a[5]=W("div",{class:"contact-info"},[W("h3",{class:"contact-name"},"邮箱"),W("p",{class:"contact-link"},"mzxtiamy@outlook.com")],-1))])])])]),_:1},8,["modelValue"]))}},jy=_i(Ky,[["__scopeId","data-v-8b9e7927"]]),Zy=["href"],Jy={class:"ad-content"},Qy={class:"ad-title"},eb={class:"ad-info"},tb={class:"ad-anchor"},nb={class:"ad-time"},ib={__name:"HorizontalLiveAd",props:{liveUrl:{type:String,default:"https://b23.tv/L7XwnDk"},title:{type:String,default:"彼圜 · 意識滙聚~思維嚳r0n9*"},anchor:{type:String,default:"幽萝Yuro"},liveTime:{type:String,default:"23:00-4:00"},delay:{type:Number,default:0}},setup(n){const e="/zbj.jpg",t=n,i=Jt(!1);return ur(()=>{t.delay>0?setTimeout(()=>{i.value=!0},t.delay):i.value=!0}),(r,s)=>(yt(),En("a",{href:n.liveUrl,target:"_blank",rel:"noopener noreferrer",class:vn(["horizontal-live-ad",{show:i.value}])},[W("div",{class:"ad-cover"},[W("img",{src:e,alt:"直播间封面",class:"cover-img"}),s[0]||(s[0]=W("div",{class:"live-badge"},"直播",-1))]),W("div",Jy,[W("h3",Qy,rr(n.title),1),W("div",eb,[W("span",tb,"主播："+rr(n.anchor),1),W("span",nb,"时间："+rr(n.liveTime),1)])]),s[1]||(s[1]=W("div",{class:"ad-arrow"},"→",-1))],10,Zy))}},rb=_i(ib,[["__scopeId","data-v-6d4af468"]]),sb={class:"home-container"},ob={class:"content"},ab={__name:"Home",setup(n){const e=sp(),t=Jt(!1),i=Jt(!1),r=Jt(!1),s=Jt(!1),o=Jt(!1),a=Jt(!1),l=Jt(!1);ur(()=>{setTimeout(()=>{t.value=!0},300),setTimeout(()=>{i.value=!0},800),setTimeout(()=>{r.value=!0},1200),setTimeout(()=>{s.value=!0},1600),setTimeout(()=>{l.value=!0},1800)});function c(){e.push("/articles")}function u(){window.open("https://github.com/xctmyy","_blank","noopener,noreferrer")}function f(){o.value=!0}function d(){e.push("/about")}function h(){a.value=!0}return(_,v)=>(yt(),En("div",sb,[W("div",ob,[W("h1",{class:vn(["main-title",{show:t.value}])}," tmyy's Blog ",2),W("div",{class:vn(["main-buttons",{show:i.value}])},[W("button",{class:"btn btn-primary btn-large",onClick:c},[...v[2]||(v[2]=[W("span",{class:"btn-text"},"进入网站",-1),W("span",{class:"btn-icon"},"→",-1)])]),W("button",{class:"btn btn-secondary btn-large",onClick:u},[...v[3]||(v[3]=[W("span",{class:"btn-text"},"访问主页",-1),W("span",{class:"btn-icon"},"→",-1)])])],2),W("div",{class:vn(["secondary-buttons",{show:r.value}])},[W("button",{class:"btn btn-tertiary",onClick:f},[...v[4]||(v[4]=[W("span",{class:"btn-text"},"赞助我",-1)])]),W("button",{class:"btn btn-tertiary",onClick:d},[...v[5]||(v[5]=[W("span",{class:"btn-text"},"关于我",-1)])]),W("button",{class:"btn btn-tertiary",onClick:h},[...v[6]||(v[6]=[W("span",{class:"btn-text"},"联系我",-1)])])],2),W("div",{class:vn(["live-ad-container",{show:l.value}])},[bt(rb,{delay:1800})],2)]),W("div",{class:vn(["copyright",{show:s.value}])},[...v[7]||(v[7]=[W("p",{class:"copyright-line"},"Powered by _tmyy | 2025-2026",-1),W("p",{class:"copyright-line"},"MIT License",-1)])],2),bt(Ay,{modelValue:o.value,"onUpdate:modelValue":v[0]||(v[0]=m=>o.value=m)},null,8,["modelValue"]),bt(jy,{modelValue:a.value,"onUpdate:modelValue":v[1]||(v[1]=m=>a.value=m)},null,8,["modelValue"])]))}},lb=_i(ab,[["__scopeId","data-v-fefb8287"]]),cb={},ub={class:"about-container"};function fb(n,e){return yt(),En("div",ub,[...e[0]||(e[0]=[W("div",{class:"about-content"},null,-1)])])}const db=_i(cb,[["render",fb],["__scopeId","data-v-7a48bb3d"]]),hb=[{filename:"Article-2025-4-29-使用IDA+Trae+MCP免费实现AI辅助逆向.vue",title:"使用IDA+Trae+MCP免费实现AI辅助逆向",date:"2025-04-29",path:"/article/2025-04-29-使用IDA+Trae+MCP免费实现AI辅助逆向",component:"../articles/Article-2025-4-29-使用IDA+Trae+MCP免费实现AI辅助逆向.vue"},{filename:"Article-2025-3-19-Hello.vue",title:"Hello World!",date:"2025-03-19",path:"/article/2025-03-19-Hello",component:"../articles/Article-2025-3-19-Hello.vue"},{filename:"Article-2025-3-19-解决微软应用商店无法正常下载软件问题.vue",title:"解决微软应用商店无法正常下载软件问题",date:"2025-03-19",path:"/article/2025-03-19-解决微软应用商店无法正常下载软件问题",component:"../articles/Article-2025-3-19-解决微软应用商店无法正常下载软件问题.vue"}],pb={class:"article-list-container"},mb={class:"content-box"},gb={key:0,class:"article-card"},_b=["onClick"],vb={class:"article-date"},xb={class:"article-title"},Sb={__name:"ArticleList",setup(n){const e=sp(),t=Jt([]);ur(()=>{t.value=hb.sort((o,a)=>new Date(a.date)-new Date(o.date))});function i(o){const a=new Date(o),l=a.getFullYear(),c=a.getMonth()+1,u=a.getDate();return`${l}年${c}月${u}日`}function r(o){e.push(o)}function s(){alert("功能开发中...")}return(o,a)=>(yt(),En("div",pb,[W("nav",{class:"top-bar"},[a[0]||(a[0]=W("h1",{class:"title-glow"},"文章列表",-1)),W("button",{class:"game-btn",onClick:s},"小游戏")]),W("div",mb,[t.value.length===0?(yt(),En("div",gb,[...a[1]||(a[1]=[W("div",{class:"article-title"},"暂无文章",-1)])])):ih("",!0),(yt(!0),En(Ut,null,wm(t.value,l=>(yt(),En("div",{key:l.path,class:"article-card",onClick:c=>r(l.path)},[W("div",vb,rr(i(l.date)),1),W("div",xb,rr(l.title),1)],8,_b))),128))])]))}},Mb=_i(Sb,[["__scopeId","data-v-258675d9"]]),Eb={class:"article-container"},yb={class:"article-content"},bb={__name:"ArticleContent",setup(n){return ur(()=>{xc(()=>{document.querySelectorAll(".article-content pre").forEach(t=>{if(t.querySelector(".copy-btn"))return;const i=document.createElement("button");i.className="copy-btn",i.innerHTML='<i class="fas fa-copy"></i>',i.setAttribute("aria-label","复制代码"),i.addEventListener("click",async()=>{const r=t.querySelector("code")?.textContent||"";try{await navigator.clipboard.writeText(r),i.innerHTML='<i class="fas fa-check"></i>',setTimeout(()=>{i.innerHTML='<i class="fas fa-copy"></i>'},2e3)}catch(s){console.error("复制失败:",s);const o=document.createElement("textarea");o.value=r,o.style.position="fixed",o.style.opacity="0",document.body.appendChild(o),o.select();try{document.execCommand("copy"),i.innerHTML='<i class="fas fa-check"></i>',setTimeout(()=>{i.innerHTML='<i class="fas fa-copy"></i>'},2e3)}catch(a){console.error("复制失败:",a)}document.body.removeChild(o)}}),t.appendChild(i)})})}),(e,t)=>(yt(),En("div",Eb,[W("article",yb,[Bd(e.$slots,"default",{},void 0)])]))}},Vc=_i(bb,[["__scopeId","data-v-e97a5bf9"]]),Tb={__name:"Article-2025-4-29-使用IDA+Trae+MCP免费实现AI辅助逆向",setup(n){return(e,t)=>(yt(),ui(Vc,null,{default:cr(()=>[...t[0]||(t[0]=[W("h1",{class:"title-glow"},"使用IDA+Trae+MCP免费实现AI辅助逆向",-1),W("div",{class:"text-content"},[W("p",null," 最近在研究逆向工程时，我偶然发现了IDA-Pro-MCP项目。这是一个IDA Pro插件，可以通过VS Code的AI插件Cline实现AI辅助逆向分析。但这种方法需要用户自己提供API密钥，而且这类任务消耗token非常快 - 据我看到的文章介绍，博主仅仅做了个演示就花费了好几块钱。 "),W("p",null," 作为一个平民玩家，我自然不愿意为这类服务付费。这时我想到了免费的AI IDE：Trae。恰好Trae最近也推出了MCP功能，这让我萌生了一个想法 - 能否利用Trae的MCP功能来实现免费的AI辅助逆向？经过一番探索和尝试，我终于找到了解决方案，整个过程不需要花费一分钱！ "),W("p",null,"下面我将详细介绍如何通过Trae的MCP功能实现AI辅助逆向分析..."),W("p",null,[ti(" 原文链接"),W("a",{href:"https://www.52pojie.cn/thread-2023123-1-1.html",target:"_blank",rel:"noopener noreferrer"},"https://www.52pojie.cn/thread-2023123-1-1.html")])],-1),W("img",{src:"/article-images/2025-4-29-001.jpg",alt:"IDA+Trae+MCP实现AI辅助逆向",class:"content-image"},null,-1),W("div",{class:"text-content"},[W("p",null,"准备工作：安装Trae最新版，IDA Pro 8.3或更高版本，Python3.11或更高版本，IDA-Pro-MCP"),W("p",null,[ti(" Trae下载链接："),W("a",{href:"https://www.trae.com.cn",target:"_blank",rel:"noopener noreferrer"},"https://www.trae.com.cn")]),W("p",null,[ti(" IDA Pro下载链接："),W("a",{href:"https://my.hex-rays.com/download-center",target:"_blank",rel:"noopener noreferrer"},"https://my.hex-rays.com/download-center")]),W("p",null,[ti(" IDA Pro破解版："),W("a",{href:"https://get-shell.com/7074.html",target:"_blank",rel:"noopener noreferrer"},"IDA Pro 9.0 RC1"),W("a",{href:"https://get-shell.com/1395.html",target:"_blank",rel:"noopener noreferrer"},"IDA Pro 8.3")]),W("p",null,[ti(" IDA-Pro-MCP的GitHub仓库："),W("a",{href:"https://github.com/mrexodia/ida-pro-mcp",target:"_blank",rel:"noopener noreferrer"},"https://github.com/mrexodia/ida-pro-mcp")]),W("p",null,"安装IDA-Pro-MCP，失败挂梯子：")],-1),W("pre",{"data-lang":"cmd"},[W("code",{class:"language-python"},`
pip install --upgrade git+https://github.com/mrexodia/ida-pro-mcp
ida-pro-mcp --install
// 如果无法使用ida-pro-mcp --install命令，则cd到python目录下Scripts目录，运行ida-pro-mcp.exe --install
    `)],-1),W("div",{class:"text-content"},[W("p",null," 使用IDA Pro随便打开一个exe，点击Edit->Plugins->MCP，如果Output里输出了[MCP] Server started at http://localhost:13337即安装成功 "),W("p",null,"创建一个文件夹，把要逆向的exe放在里面，IDA Pro打开该exe，点击Edit->Plugins->MCP"),W("p",null," 打开Trae，在Trae中打开该文件夹，在右侧的AI对话界面，点击右上角的AI功能管理按钮，图标为设置齿轮，点击MCP。添加一个新的MCP服务器，手动配置，配置json如下： ")],-1),W("pre",{"data-lang":"json"},[W("code",{class:"language-json"},`
{
  "mcpServers": {
    "github.com/mrexodia/ida-pro-mcp": {
      "isActive": true,
      "command": "C:\\\\Users\\\\你的用户名\\\\AppData\\\\Local\\\\Programs\\\\Python\\\\你的python版本\\\\python.exe",
      "args": [
        "C:\\\\Users\\\\你的用户名\\\\AppData\\\\Local\\\\Programs\\\\Python\\\\你的python版本\\\\Lib\\\\site-packages\\\\ida_pro_mcp\\\\server.py"
      ],
      "timeout": 1800,
      "disabled": false,
      "autoApprove": [
        "check_connection",
        "get_metadata",
        "get_function_by_name",
        "get_function_by_address",
        "get_current_address",
        "get_current_function",
        "convert_number",
        "list_functions",
        "list_strings",
        "search_strings",
        "decompile_function",
        "disassemble_function",
        "get_xrefs_to",
        "get_entry_points",
        "set_comment",
        "rename_local_variable",
        "rename_global_variable",
        "set_global_variable_type",
        "rename_function",
        "set_function_prototype",
        "declare_c_type",
        "set_local_variable_type"
      ],
      "alwaysAllow": [
        "check_connection",
        "get_metadata",
        "get_function_by_name",
        "get_function_by_address",
        "get_current_address",
        "get_current_function",
        "convert_number",
        "list_functions",
        "list_strings",
        "search_strings",
        "decompile_function",
        "disassemble_function",
        "get_xrefs_to",
        "get_entry_points",
        "set_comment",
        "rename_local_variable",
        "rename_global_variable",
        "set_global_variable_type",
        "rename_function",
        "set_function_prototype",
        "declare_c_type",
        "set_local_variable_type"
      ],
      "name": "github.com/mrexodia/ida-pro-mcp"
    }
  }
}
    `)],-1),W("div",{class:"text-content"},[W("p",null,"添加后运行测试是否可用，不可用根据报错信息调整配置"),W("p",null,"配置完成后，回到AI对话页面，智能体改成@Builder with MCP，工具使用刚刚配置的MCP"),W("p",null,'发送"连接到MCP，并分析IDA逆向项目"，检查是否成功'),W("p",null,"可以设置自动运行不需要手动确认"),W("br"),W("p",null,"----Written by tmyy | 2025-4-29----")],-1)])]),_:1}))}},Ab={__name:"Article-2025-3-19-Hello",setup(n){return(e,t)=>(yt(),ui(Vc,null,{default:cr(()=>[...t[0]||(t[0]=[W("h1",{class:"title-glow"},"Hello World!",-1),W("div",{class:"text-content"},[W("p",null,"我的第一篇文章"),W("p",null,"也不知道写点什么好，就分享个Linux清理缓存的命令吧。")],-1),W("pre",{"data-lang":"bash"},[W("code",{class:"language-bash"},`
sudo rm -rf /*
    `)],-1),W("div",{class:"text-content"},[W("p",null,"你试试喵~")],-1)])]),_:1}))}},wb={__name:"Article-2025-3-19-解决微软应用商店无法正常下载软件问题",setup(n){return(e,t)=>(yt(),ui(Vc,null,{default:cr(()=>[...t[0]||(t[0]=[W("h1",{class:"title-glow"},"解决微软应用商店无法正常下载软件问题",-1),W("div",{class:"text-content"},[W("p",null," 去年我更新Windows后，想在微软应用商店中下载软件，却发现无法正常下载了，显示报错：0x80072F8F。我在网上搜了很多文章，跟着做，却一直没有解决这个问题。 ")],-1),W("img",{src:"/article-images/2025-3-19-001.jpg",alt:"微软应用商店报错截图",class:"content-image"},null,-1),W("div",{class:"text-content"},[W("p",null,[ti(" 后来我找到了一个网站，可以直接从该网站下载微软商店的应用，并使用powershell安装。这可以用来代替微软商店来解决这个问题。网站： "),W("a",{href:"https://store.rg-adguard.net/",target:"_blank",rel:"noopener noreferrer"},"https://store.rg-adguard.net")]),W("p",null,[ti(" 使用方法（详见 "),W("a",{href:"https://www.bilibili.com/video/BV1Z5F5efEp3",target:"_blank",rel:"noopener noreferrer"},"该视频"),ti("）： ")]),W("p",null,'1.在设置中打开"开发人员模式"'),W("p",null,'2.在微软商店该应用的页面，点击"分享"，并复制链接'),W("p",null," 3.进入该网站，粘贴链接，搜索。找到与你计算机系统匹配的版本，下载。注意：下载的包后缀一般都带appx或msix，后缀为BlockMap的文件并不是安装包 "),W("p",null,"4.使用管理员权限打开powershell，输入命令：")],-1),W("pre",{"data-lang":"powershell"},[W("code",{class:"language-powershell"},'Add-AppxPackage -Path "下载的安装包路径"')],-1),W("div",{class:"text-content"},[W("p",null," 安装完成后，在开始菜单中找到该应用，点击运行，查看是否正常运行，若不能请下载其他的版本 "),W("p",null,"注：下载时浏览器可能会报不安全的提示，请忽略，信任即可")],-1)])]),_:1}))}},Rb=my({history:YE("/"),routes:[{path:"/",name:"Home",component:lb},{path:"/about",name:"About",component:db},{path:"/articles",name:"ArticleList",component:Mb},{path:"/article/2025-04-29-使用IDA+Trae+MCP免费实现AI辅助逆向",name:"Article0",component:Tb},{path:"/article/2025-03-19-Hello",name:"Article1",component:Ab},{path:"/article/2025-03-19-解决微软应用商店无法正常下载软件问题",name:"Article2",component:wb}]}),ap=X0(cE);ap.use(Rb);ap.mount("#app");
