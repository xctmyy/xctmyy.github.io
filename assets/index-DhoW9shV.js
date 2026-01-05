(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function pc(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const dt={},Dr=[],Gn=()=>{},nd=()=>!1,Na=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),mc=t=>t.startsWith("onUpdate:"),It=Object.assign,gc=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Ap=Object.prototype.hasOwnProperty,rt=(t,e)=>Ap.call(t,e),ze=Array.isArray,Ir=t=>Fa(t)==="[object Map]",id=t=>Fa(t)==="[object Set]",We=t=>typeof t=="function",Et=t=>typeof t=="string",Si=t=>typeof t=="symbol",_t=t=>t!==null&&typeof t=="object",rd=t=>(_t(t)||We(t))&&We(t.then)&&We(t.catch),sd=Object.prototype.toString,Fa=t=>sd.call(t),wp=t=>Fa(t).slice(8,-1),ad=t=>Fa(t)==="[object Object]",_c=t=>Et(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,ls=pc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Oa=t=>{const e=Object.create(null);return(n=>e[n]||(e[n]=t(n)))},Rp=/-\w/g,xn=Oa(t=>t.replace(Rp,e=>e.slice(1).toUpperCase())),Cp=/\B([A-Z])/g,Gi=Oa(t=>t.replace(Cp,"-$1").toLowerCase()),Ba=Oa(t=>t.charAt(0).toUpperCase()+t.slice(1)),ao=Oa(t=>t?`on${Ba(t)}`:""),Oi=(t,e)=>!Object.is(t,e),ha=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},od=(t,e,n,i=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:i,value:n})},vc=t=>{const e=parseFloat(t);return isNaN(e)?t:e},Pp=t=>{const e=Et(t)?Number(t):NaN;return isNaN(e)?t:e};let tu;const Va=()=>tu||(tu=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function za(t){if(ze(t)){const e={};for(let n=0;n<t.length;n++){const i=t[n],r=Et(i)?Up(i):za(i);if(r)for(const s in r)e[s]=r[s]}return e}else if(Et(t)||_t(t))return t}const Dp=/;(?![^(]*\))/g,Ip=/:([^]+)/,Lp=/\/\*[^]*?\*\//g;function Up(t){const e={};return t.replace(Lp,"").split(Dp).forEach(n=>{if(n){const i=n.split(Ip);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function Kt(t){let e="";if(Et(t))e=t;else if(ze(t))for(let n=0;n<t.length;n++){const i=Kt(t[n]);i&&(e+=i+" ")}else if(_t(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Np="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Fp=pc(Np);function ld(t){return!!t||t===""}const cd=t=>!!(t&&t.__v_isRef===!0),Bt=t=>Et(t)?t:t==null?"":ze(t)||_t(t)&&(t.toString===sd||!We(t.toString))?cd(t)?Bt(t.value):JSON.stringify(t,ud,2):String(t),ud=(t,e)=>cd(e)?ud(t,e.value):Ir(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[i,r],s)=>(n[oo(i,s)+" =>"]=r,n),{})}:id(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>oo(n))}:Si(e)?oo(e):_t(e)&&!ze(e)&&!ad(e)?String(e):e,oo=(t,e="")=>{var n;return Si(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};let tn;class Op{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=tn,!e&&tn&&(this.index=(tn.scopes||(tn.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=tn;try{return tn=this,e()}finally{tn=n}}}on(){++this._on===1&&(this.prevScope=tn,tn=this)}off(){this._on>0&&--this._on===0&&(tn=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let n,i;for(n=0,i=this.effects.length;n<i;n++)this.effects[n].stop();for(this.effects.length=0,n=0,i=this.cleanups.length;n<i;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,i=this.scopes.length;n<i;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function Bp(){return tn}let mt;const lo=new WeakSet;class fd{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,tn&&tn.active&&tn.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,lo.has(this)&&(lo.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||hd(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,nu(this),pd(this);const e=mt,n=wn;mt=this,wn=!0;try{return this.fn()}finally{md(this),mt=e,wn=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Mc(e);this.deps=this.depsTail=void 0,nu(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?lo.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){tl(this)&&this.run()}get dirty(){return tl(this)}}let dd=0,cs,us;function hd(t,e=!1){if(t.flags|=8,e){t.next=us,us=t;return}t.next=cs,cs=t}function xc(){dd++}function Sc(){if(--dd>0)return;if(us){let e=us;for(us=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;cs;){let e=cs;for(cs=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){t||(t=i)}e=n}}if(t)throw t}function pd(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function md(t){let e,n=t.depsTail,i=n;for(;i;){const r=i.prevDep;i.version===-1?(i===n&&(n=r),Mc(i),Vp(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=r}t.deps=e,t.depsTail=n}function tl(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(gd(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function gd(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===gs)||(t.globalVersion=gs,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!tl(t))))return;t.flags|=2;const e=t.dep,n=mt,i=wn;mt=t,wn=!0;try{pd(t);const r=t.fn(t._value);(e.version===0||Oi(r,t._value))&&(t.flags|=128,t._value=r,e.version++)}catch(r){throw e.version++,r}finally{mt=n,wn=i,md(t),t.flags&=-3}}function Mc(t,e=!1){const{dep:n,prevSub:i,nextSub:r}=t;if(i&&(i.nextSub=r,t.prevSub=void 0),r&&(r.prevSub=i,t.nextSub=void 0),n.subs===t&&(n.subs=i,!i&&n.computed)){n.computed.flags&=-5;for(let s=n.computed.deps;s;s=s.nextDep)Mc(s,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function Vp(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let wn=!0;const _d=[];function hi(){_d.push(wn),wn=!1}function pi(){const t=_d.pop();wn=t===void 0?!0:t}function nu(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=mt;mt=void 0;try{e()}finally{mt=n}}}let gs=0;class zp{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Ec{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!mt||!wn||mt===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==mt)n=this.activeLink=new zp(mt,this),mt.deps?(n.prevDep=mt.depsTail,mt.depsTail.nextDep=n,mt.depsTail=n):mt.deps=mt.depsTail=n,vd(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const i=n.nextDep;i.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=i),n.prevDep=mt.depsTail,n.nextDep=void 0,mt.depsTail.nextDep=n,mt.depsTail=n,mt.deps===n&&(mt.deps=i)}return n}trigger(e){this.version++,gs++,this.notify(e)}notify(e){xc();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Sc()}}}function vd(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)vd(i)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const nl=new WeakMap,cr=Symbol(""),il=Symbol(""),_s=Symbol("");function Ot(t,e,n){if(wn&&mt){let i=nl.get(t);i||nl.set(t,i=new Map);let r=i.get(n);r||(i.set(n,r=new Ec),r.map=i,r.key=n),r.track()}}function ri(t,e,n,i,r,s){const a=nl.get(t);if(!a){gs++;return}const o=l=>{l&&l.trigger()};if(xc(),e==="clear")a.forEach(o);else{const l=ze(t),c=l&&_c(n);if(l&&n==="length"){const u=Number(i);a.forEach((f,d)=>{(d==="length"||d===_s||!Si(d)&&d>=u)&&o(f)})}else switch((n!==void 0||a.has(void 0))&&o(a.get(n)),c&&o(a.get(_s)),e){case"add":l?c&&o(a.get("length")):(o(a.get(cr)),Ir(t)&&o(a.get(il)));break;case"delete":l||(o(a.get(cr)),Ir(t)&&o(a.get(il)));break;case"set":Ir(t)&&o(a.get(cr));break}}Sc()}function hr(t){const e=tt(t);return e===t?e:(Ot(e,"iterate",_s),vn(t)?e:e.map(Rn))}function Ga(t){return Ot(t=tt(t),"iterate",_s),t}function Di(t,e){return mi(t)?ur(t)?Br(Rn(e)):Br(e):Rn(e)}const Gp={__proto__:null,[Symbol.iterator](){return co(this,Symbol.iterator,t=>Di(this,t))},concat(...t){return hr(this).concat(...t.map(e=>ze(e)?hr(e):e))},entries(){return co(this,"entries",t=>(t[1]=Di(this,t[1]),t))},every(t,e){return $n(this,"every",t,e,void 0,arguments)},filter(t,e){return $n(this,"filter",t,e,n=>n.map(i=>Di(this,i)),arguments)},find(t,e){return $n(this,"find",t,e,n=>Di(this,n),arguments)},findIndex(t,e){return $n(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return $n(this,"findLast",t,e,n=>Di(this,n),arguments)},findLastIndex(t,e){return $n(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return $n(this,"forEach",t,e,void 0,arguments)},includes(...t){return uo(this,"includes",t)},indexOf(...t){return uo(this,"indexOf",t)},join(t){return hr(this).join(t)},lastIndexOf(...t){return uo(this,"lastIndexOf",t)},map(t,e){return $n(this,"map",t,e,void 0,arguments)},pop(){return Kr(this,"pop")},push(...t){return Kr(this,"push",t)},reduce(t,...e){return iu(this,"reduce",t,e)},reduceRight(t,...e){return iu(this,"reduceRight",t,e)},shift(){return Kr(this,"shift")},some(t,e){return $n(this,"some",t,e,void 0,arguments)},splice(...t){return Kr(this,"splice",t)},toReversed(){return hr(this).toReversed()},toSorted(t){return hr(this).toSorted(t)},toSpliced(...t){return hr(this).toSpliced(...t)},unshift(...t){return Kr(this,"unshift",t)},values(){return co(this,"values",t=>Di(this,t))}};function co(t,e,n){const i=Ga(t),r=i[e]();return i!==t&&!vn(t)&&(r._next=r.next,r.next=()=>{const s=r._next();return s.done||(s.value=n(s.value)),s}),r}const Hp=Array.prototype;function $n(t,e,n,i,r,s){const a=Ga(t),o=a!==t&&!vn(t),l=a[e];if(l!==Hp[e]){const f=l.apply(t,s);return o?Rn(f):f}let c=n;a!==t&&(o?c=function(f,d){return n.call(this,Di(t,f),d,t)}:n.length>2&&(c=function(f,d){return n.call(this,f,d,t)}));const u=l.call(a,c,i);return o&&r?r(u):u}function iu(t,e,n,i){const r=Ga(t);let s=n;return r!==t&&(vn(t)?n.length>3&&(s=function(a,o,l){return n.call(this,a,o,l,t)}):s=function(a,o,l){return n.call(this,a,Di(t,o),l,t)}),r[e](s,...i)}function uo(t,e,n){const i=tt(t);Ot(i,"iterate",_s);const r=i[e](...n);return(r===-1||r===!1)&&Tc(n[0])?(n[0]=tt(n[0]),i[e](...n)):r}function Kr(t,e,n=[]){hi(),xc();const i=tt(t)[e].apply(t,n);return Sc(),pi(),i}const kp=pc("__proto__,__v_isRef,__isVue"),xd=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Si));function Wp(t){Si(t)||(t=String(t));const e=tt(this);return Ot(e,"has",t),e.hasOwnProperty(t)}class Sd{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,i){if(n==="__v_skip")return e.__v_skip;const r=this._isReadonly,s=this._isShallow;if(n==="__v_isReactive")return!r;if(n==="__v_isReadonly")return r;if(n==="__v_isShallow")return s;if(n==="__v_raw")return i===(r?s?em:bd:s?yd:Ed).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const a=ze(e);if(!r){let l;if(a&&(l=Gp[n]))return l;if(n==="hasOwnProperty")return Wp}const o=Reflect.get(e,n,Ht(e)?e:i);if((Si(n)?xd.has(n):kp(n))||(r||Ot(e,"get",n),s))return o;if(Ht(o)){const l=a&&_c(n)?o:o.value;return r&&_t(l)?sl(l):l}return _t(o)?r?sl(o):Ha(o):o}}class Md extends Sd{constructor(e=!1){super(!1,e)}set(e,n,i,r){let s=e[n];const a=ze(e)&&_c(n);if(!this._isShallow){const c=mi(s);if(!vn(i)&&!mi(i)&&(s=tt(s),i=tt(i)),!a&&Ht(s)&&!Ht(i))return c||(s.value=i),!0}const o=a?Number(n)<e.length:rt(e,n),l=Reflect.set(e,n,i,Ht(e)?e:r);return e===tt(r)&&(o?Oi(i,s)&&ri(e,"set",n,i):ri(e,"add",n,i)),l}deleteProperty(e,n){const i=rt(e,n);e[n];const r=Reflect.deleteProperty(e,n);return r&&i&&ri(e,"delete",n,void 0),r}has(e,n){const i=Reflect.has(e,n);return(!Si(n)||!xd.has(n))&&Ot(e,"has",n),i}ownKeys(e){return Ot(e,"iterate",ze(e)?"length":cr),Reflect.ownKeys(e)}}class Xp extends Sd{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const qp=new Md,Yp=new Xp,$p=new Md(!0);const rl=t=>t,Vs=t=>Reflect.getPrototypeOf(t);function Kp(t,e,n){return function(...i){const r=this.__v_raw,s=tt(r),a=Ir(s),o=t==="entries"||t===Symbol.iterator&&a,l=t==="keys"&&a,c=r[t](...i),u=n?rl:e?Br:Rn;return!e&&Ot(s,"iterate",l?il:cr),{next(){const{value:f,done:d}=c.next();return d?{value:f,done:d}:{value:o?[u(f[0]),u(f[1])]:u(f),done:d}},[Symbol.iterator](){return this}}}}function zs(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function jp(t,e){const n={get(r){const s=this.__v_raw,a=tt(s),o=tt(r);t||(Oi(r,o)&&Ot(a,"get",r),Ot(a,"get",o));const{has:l}=Vs(a),c=e?rl:t?Br:Rn;if(l.call(a,r))return c(s.get(r));if(l.call(a,o))return c(s.get(o));s!==a&&s.get(r)},get size(){const r=this.__v_raw;return!t&&Ot(tt(r),"iterate",cr),r.size},has(r){const s=this.__v_raw,a=tt(s),o=tt(r);return t||(Oi(r,o)&&Ot(a,"has",r),Ot(a,"has",o)),r===o?s.has(r):s.has(r)||s.has(o)},forEach(r,s){const a=this,o=a.__v_raw,l=tt(o),c=e?rl:t?Br:Rn;return!t&&Ot(l,"iterate",cr),o.forEach((u,f)=>r.call(s,c(u),c(f),a))}};return It(n,t?{add:zs("add"),set:zs("set"),delete:zs("delete"),clear:zs("clear")}:{add(r){!e&&!vn(r)&&!mi(r)&&(r=tt(r));const s=tt(this);return Vs(s).has.call(s,r)||(s.add(r),ri(s,"add",r,r)),this},set(r,s){!e&&!vn(s)&&!mi(s)&&(s=tt(s));const a=tt(this),{has:o,get:l}=Vs(a);let c=o.call(a,r);c||(r=tt(r),c=o.call(a,r));const u=l.call(a,r);return a.set(r,s),c?Oi(s,u)&&ri(a,"set",r,s):ri(a,"add",r,s),this},delete(r){const s=tt(this),{has:a,get:o}=Vs(s);let l=a.call(s,r);l||(r=tt(r),l=a.call(s,r)),o&&o.call(s,r);const c=s.delete(r);return l&&ri(s,"delete",r,void 0),c},clear(){const r=tt(this),s=r.size!==0,a=r.clear();return s&&ri(r,"clear",void 0,void 0),a}}),["keys","values","entries",Symbol.iterator].forEach(r=>{n[r]=Kp(r,t,e)}),n}function yc(t,e){const n=jp(t,e);return(i,r,s)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?i:Reflect.get(rt(n,r)&&r in i?n:i,r,s)}const Zp={get:yc(!1,!1)},Jp={get:yc(!1,!0)},Qp={get:yc(!0,!1)};const Ed=new WeakMap,yd=new WeakMap,bd=new WeakMap,em=new WeakMap;function tm(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function nm(t){return t.__v_skip||!Object.isExtensible(t)?0:tm(wp(t))}function Ha(t){return mi(t)?t:bc(t,!1,qp,Zp,Ed)}function Td(t){return bc(t,!1,$p,Jp,yd)}function sl(t){return bc(t,!0,Yp,Qp,bd)}function bc(t,e,n,i,r){if(!_t(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const s=nm(t);if(s===0)return t;const a=r.get(t);if(a)return a;const o=new Proxy(t,s===2?i:n);return r.set(t,o),o}function ur(t){return mi(t)?ur(t.__v_raw):!!(t&&t.__v_isReactive)}function mi(t){return!!(t&&t.__v_isReadonly)}function vn(t){return!!(t&&t.__v_isShallow)}function Tc(t){return t?!!t.__v_raw:!1}function tt(t){const e=t&&t.__v_raw;return e?tt(e):t}function im(t){return!rt(t,"__v_skip")&&Object.isExtensible(t)&&od(t,"__v_skip",!0),t}const Rn=t=>_t(t)?Ha(t):t,Br=t=>_t(t)?sl(t):t;function Ht(t){return t?t.__v_isRef===!0:!1}function gt(t){return Ad(t,!1)}function rm(t){return Ad(t,!0)}function Ad(t,e){return Ht(t)?t:new sm(t,e)}class sm{constructor(e,n){this.dep=new Ec,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:tt(e),this._value=n?e:Rn(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,i=this.__v_isShallow||vn(e)||mi(e);e=i?e:tt(e),Oi(e,n)&&(this._rawValue=e,this._value=i?e:Rn(e),this.dep.trigger())}}function yn(t){return Ht(t)?t.value:t}const am={get:(t,e,n)=>e==="__v_raw"?t:yn(Reflect.get(t,e,n)),set:(t,e,n,i)=>{const r=t[e];return Ht(r)&&!Ht(n)?(r.value=n,!0):Reflect.set(t,e,n,i)}};function wd(t){return ur(t)?t:new Proxy(t,am)}class om{constructor(e,n,i){this.fn=e,this.setter=n,this._value=void 0,this.dep=new Ec(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=gs-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&mt!==this)return hd(this,!0),!0}get value(){const e=this.dep.track();return gd(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function lm(t,e,n=!1){let i,r;return We(t)?i=t:(i=t.get,r=t.set),new om(i,r,n)}const Gs={},Ta=new WeakMap;let tr;function cm(t,e=!1,n=tr){if(n){let i=Ta.get(n);i||Ta.set(n,i=[]),i.push(t)}}function um(t,e,n=dt){const{immediate:i,deep:r,once:s,scheduler:a,augmentJob:o,call:l}=n,c=M=>r?M:vn(M)||r===!1||r===0?si(M,1):si(M);let u,f,d,h,_=!1,v=!1;if(Ht(t)?(f=()=>t.value,_=vn(t)):ur(t)?(f=()=>c(t),_=!0):ze(t)?(v=!0,_=t.some(M=>ur(M)||vn(M)),f=()=>t.map(M=>{if(Ht(M))return M.value;if(ur(M))return c(M);if(We(M))return l?l(M,2):M()})):We(t)?e?f=l?()=>l(t,2):t:f=()=>{if(d){hi();try{d()}finally{pi()}}const M=tr;tr=u;try{return l?l(t,3,[h]):t(h)}finally{tr=M}}:f=Gn,e&&r){const M=f,w=r===!0?1/0:r;f=()=>si(M(),w)}const m=Bp(),p=()=>{u.stop(),m&&m.active&&gc(m.effects,u)};if(s&&e){const M=e;e=(...w)=>{M(...w),p()}}let b=v?new Array(t.length).fill(Gs):Gs;const T=M=>{if(!(!(u.flags&1)||!u.dirty&&!M))if(e){const w=u.run();if(r||_||(v?w.some((P,D)=>Oi(P,b[D])):Oi(w,b))){d&&d();const P=tr;tr=u;try{const D=[w,b===Gs?void 0:v&&b[0]===Gs?[]:b,h];b=w,l?l(e,3,D):e(...D)}finally{tr=P}}}else u.run()};return o&&o(T),u=new fd(f),u.scheduler=a?()=>a(T,!1):T,h=M=>cm(M,!1,u),d=u.onStop=()=>{const M=Ta.get(u);if(M){if(l)l(M,4);else for(const w of M)w();Ta.delete(u)}},e?i?T(!0):b=u.run():a?a(T.bind(null,!0),!0):u.run(),p.pause=u.pause.bind(u),p.resume=u.resume.bind(u),p.stop=p,p}function si(t,e=1/0,n){if(e<=0||!_t(t)||t.__v_skip||(n=n||new Map,(n.get(t)||0)>=e))return t;if(n.set(t,e),e--,Ht(t))si(t.value,e,n);else if(ze(t))for(let i=0;i<t.length;i++)si(t[i],e,n);else if(id(t)||Ir(t))t.forEach(i=>{si(i,e,n)});else if(ad(t)){for(const i in t)si(t[i],e,n);for(const i of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,i)&&si(t[i],e,n)}return t}function Cs(t,e,n,i){try{return i?t(...i):t()}catch(r){ka(r,e,n)}}function Cn(t,e,n,i){if(We(t)){const r=Cs(t,e,n,i);return r&&rd(r)&&r.catch(s=>{ka(s,e,n)}),r}if(ze(t)){const r=[];for(let s=0;s<t.length;s++)r.push(Cn(t[s],e,n,i));return r}}function ka(t,e,n,i=!0){const r=e?e.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:a}=e&&e.appContext.config||dt;if(e){let o=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${n}`;for(;o;){const u=o.ec;if(u){for(let f=0;f<u.length;f++)if(u[f](t,l,c)===!1)return}o=o.parent}if(s){hi(),Cs(s,null,10,[t,l,c]),pi();return}}fm(t,n,r,i,a)}function fm(t,e,n,i=!0,r=!1){if(r)throw t;console.error(t)}const $t=[];let Fn=-1;const Lr=[];let Ii=null,Rr=0;const Rd=Promise.resolve();let Aa=null;function Ac(t){const e=Aa||Rd;return t?e.then(this?t.bind(this):t):e}function dm(t){let e=Fn+1,n=$t.length;for(;e<n;){const i=e+n>>>1,r=$t[i],s=vs(r);s<t||s===t&&r.flags&2?e=i+1:n=i}return e}function wc(t){if(!(t.flags&1)){const e=vs(t),n=$t[$t.length-1];!n||!(t.flags&2)&&e>=vs(n)?$t.push(t):$t.splice(dm(e),0,t),t.flags|=1,Cd()}}function Cd(){Aa||(Aa=Rd.then(Dd))}function hm(t){ze(t)?Lr.push(...t):Ii&&t.id===-1?Ii.splice(Rr+1,0,t):t.flags&1||(Lr.push(t),t.flags|=1),Cd()}function ru(t,e,n=Fn+1){for(;n<$t.length;n++){const i=$t[n];if(i&&i.flags&2){if(t&&i.id!==t.uid)continue;$t.splice(n,1),n--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function Pd(t){if(Lr.length){const e=[...new Set(Lr)].sort((n,i)=>vs(n)-vs(i));if(Lr.length=0,Ii){Ii.push(...e);return}for(Ii=e,Rr=0;Rr<Ii.length;Rr++){const n=Ii[Rr];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Ii=null,Rr=0}}const vs=t=>t.id==null?t.flags&2?-1:1/0:t.id;function Dd(t){try{for(Fn=0;Fn<$t.length;Fn++){const e=$t[Fn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Cs(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Fn<$t.length;Fn++){const e=$t[Fn];e&&(e.flags&=-2)}Fn=-1,$t.length=0,Pd(),Aa=null,($t.length||Lr.length)&&Dd()}}let Lt=null,Id=null;function wa(t){const e=Lt;return Lt=t,Id=t&&t.type.__scopeId||null,e}function Hi(t,e=Lt,n){if(!e||t._n)return t;const i=(...r)=>{i._d&&Pa(-1);const s=wa(e);let a;try{a=t(...r)}finally{wa(s),i._d&&Pa(1)}return a};return i._n=!0,i._c=!0,i._d=!0,i}function pm(t,e){if(Lt===null)return t;const n=$a(Lt),i=t.dirs||(t.dirs=[]);for(let r=0;r<e.length;r++){let[s,a,o,l=dt]=e[r];s&&(We(s)&&(s={mounted:s,updated:s}),s.deep&&si(a),i.push({dir:s,instance:n,value:a,oldValue:void 0,arg:o,modifiers:l}))}return t}function Xi(t,e,n,i){const r=t.dirs,s=e&&e.dirs;for(let a=0;a<r.length;a++){const o=r[a];s&&(o.oldValue=s[a].value);let l=o.dir[i];l&&(hi(),Cn(l,n,8,[t.el,o,t,e]),pi())}}function pa(t,e){if(zt){let n=zt.provides;const i=zt.parent&&zt.parent.provides;i===n&&(n=zt.provides=Object.create(i)),n[t]=e}}function Hn(t,e,n=!1){const i=hh();if(i||Nr){let r=Nr?Nr._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(r&&t in r)return r[t];if(arguments.length>1)return n&&We(e)?e.call(i&&i.proxy):e}}const mm=Symbol.for("v-scx"),gm=()=>Hn(mm);function Bi(t,e,n){return Ld(t,e,n)}function Ld(t,e,n=dt){const{immediate:i,deep:r,flush:s,once:a}=n,o=It({},n),l=e&&i||!e&&s!=="post";let c;if(Es){if(s==="sync"){const h=gm();c=h.__watcherHandles||(h.__watcherHandles=[])}else if(!l){const h=()=>{};return h.stop=Gn,h.resume=Gn,h.pause=Gn,h}}const u=zt;o.call=(h,_,v)=>Cn(h,u,_,v);let f=!1;s==="post"?o.scheduler=h=>{qt(h,u&&u.suspense)}:s!=="sync"&&(f=!0,o.scheduler=(h,_)=>{_?h():wc(h)}),o.augmentJob=h=>{e&&(h.flags|=4),f&&(h.flags|=2,u&&(h.id=u.uid,h.i=u))};const d=um(t,e,o);return Es&&(c?c.push(d):l&&d()),d}function _m(t,e,n){const i=this.proxy,r=Et(t)?t.includes(".")?Ud(i,t):()=>i[t]:t.bind(i,i);let s;We(e)?s=e:(s=e.handler,n=e);const a=Ps(this),o=Ld(r,s.bind(i),n);return a(),o}function Ud(t,e){const n=e.split(".");return()=>{let i=t;for(let r=0;r<n.length&&i;r++)i=i[n[r]];return i}}const Nd=Symbol("_vte"),Fd=t=>t.__isTeleport,fs=t=>t&&(t.disabled||t.disabled===""),su=t=>t&&(t.defer||t.defer===""),au=t=>typeof SVGElement<"u"&&t instanceof SVGElement,ou=t=>typeof MathMLElement=="function"&&t instanceof MathMLElement,al=(t,e)=>{const n=t&&t.to;return Et(n)?e?e(n):null:n},Od={name:"Teleport",__isTeleport:!0,process(t,e,n,i,r,s,a,o,l,c){const{mc:u,pc:f,pbc:d,o:{insert:h,querySelector:_,createText:v,createComment:m}}=c,p=fs(e.props);let{shapeFlag:b,children:T,dynamicChildren:M}=e;if(t==null){const w=e.el=v(""),P=e.anchor=v("");h(w,n,i),h(P,n,i);const D=(x,y)=>{b&16&&u(T,x,y,r,s,a,o,l)},z=()=>{const x=e.target=al(e.props,_),y=Bd(x,e,v,h);x&&(a!=="svg"&&au(x)?a="svg":a!=="mathml"&&ou(x)&&(a="mathml"),r&&r.isCE&&(r.ce._teleportTargets||(r.ce._teleportTargets=new Set)).add(x),p||(D(x,y),ma(e,!1)))};p&&(D(n,P),ma(e,!0)),su(e.props)?(e.el.__isMounted=!1,qt(()=>{z(),delete e.el.__isMounted},s)):z()}else{if(su(e.props)&&t.el.__isMounted===!1){qt(()=>{Od.process(t,e,n,i,r,s,a,o,l,c)},s);return}e.el=t.el,e.targetStart=t.targetStart;const w=e.anchor=t.anchor,P=e.target=t.target,D=e.targetAnchor=t.targetAnchor,z=fs(t.props),x=z?n:P,y=z?w:D;if(a==="svg"||au(P)?a="svg":(a==="mathml"||ou(P))&&(a="mathml"),M?(d(t.dynamicChildren,M,x,r,s,a,o),Ic(t,e,!0)):l||f(t,e,x,y,r,s,a,o,!1),p)z?e.props&&t.props&&e.props.to!==t.props.to&&(e.props.to=t.props.to):Hs(e,n,w,c,1);else if((e.props&&e.props.to)!==(t.props&&t.props.to)){const L=e.target=al(e.props,_);L&&Hs(e,L,null,c,0)}else z&&Hs(e,P,D,c,1);ma(e,p)}},remove(t,e,n,{um:i,o:{remove:r}},s){const{shapeFlag:a,children:o,anchor:l,targetStart:c,targetAnchor:u,target:f,props:d}=t;if(f&&(r(c),r(u)),s&&r(l),a&16){const h=s||!fs(d);for(let _=0;_<o.length;_++){const v=o[_];i(v,e,n,h,!!v.dynamicChildren)}}},move:Hs,hydrate:vm};function Hs(t,e,n,{o:{insert:i},m:r},s=2){s===0&&i(t.targetAnchor,e,n);const{el:a,anchor:o,shapeFlag:l,children:c,props:u}=t,f=s===2;if(f&&i(a,e,n),(!f||fs(u))&&l&16)for(let d=0;d<c.length;d++)r(c[d],e,n,2);f&&i(o,e,n)}function vm(t,e,n,i,r,s,{o:{nextSibling:a,parentNode:o,querySelector:l,insert:c,createText:u}},f){function d(v,m,p,b){m.anchor=f(a(v),m,o(v),n,i,r,s),m.targetStart=p,m.targetAnchor=b}const h=e.target=al(e.props,l),_=fs(e.props);if(h){const v=h._lpa||h.firstChild;if(e.shapeFlag&16)if(_)d(t,e,v,v&&a(v));else{e.anchor=a(t);let m=v;for(;m;){if(m&&m.nodeType===8){if(m.data==="teleport start anchor")e.targetStart=m;else if(m.data==="teleport anchor"){e.targetAnchor=m,h._lpa=e.targetAnchor&&a(e.targetAnchor);break}}m=a(m)}e.targetAnchor||Bd(h,e,u,c),f(v&&a(v),e,h,n,i,r,s)}ma(e,_)}else _&&e.shapeFlag&16&&d(t,e,t,a(t));return e.anchor&&a(e.anchor)}const xm=Od;function ma(t,e){const n=t.ctx;if(n&&n.ut){let i,r;for(e?(i=t.el,r=t.anchor):(i=t.targetStart,r=t.targetAnchor);i&&i!==r;)i.nodeType===1&&i.setAttribute("data-v-owner",n.uid),i=i.nextSibling;n.ut()}}function Bd(t,e,n,i){const r=e.targetStart=n(""),s=e.targetAnchor=n("");return r[Nd]=s,t&&(i(r,t),i(s,t)),s}const ii=Symbol("_leaveCb"),ks=Symbol("_enterCb");function Sm(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Dn(()=>{t.isMounted=!0}),qd(()=>{t.isUnmounting=!0}),t}const hn=[Function,Array],Vd={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:hn,onEnter:hn,onAfterEnter:hn,onEnterCancelled:hn,onBeforeLeave:hn,onLeave:hn,onAfterLeave:hn,onLeaveCancelled:hn,onBeforeAppear:hn,onAppear:hn,onAfterAppear:hn,onAppearCancelled:hn},zd=t=>{const e=t.subTree;return e.component?zd(e.component):e},Mm={name:"BaseTransition",props:Vd,setup(t,{slots:e}){const n=hh(),i=Sm();return()=>{const r=e.default&&kd(e.default(),!0);if(!r||!r.length)return;const s=Gd(r),a=tt(t),{mode:o}=a;if(i.isLeaving)return fo(s);const l=lu(s);if(!l)return fo(s);let c=ol(l,a,i,n,f=>c=f);l.type!==Vt&&xs(l,c);let u=n.subTree&&lu(n.subTree);if(u&&u.type!==Vt&&!ir(u,l)&&zd(n).type!==Vt){let f=ol(u,a,i,n);if(xs(u,f),o==="out-in"&&l.type!==Vt)return i.isLeaving=!0,f.afterLeave=()=>{i.isLeaving=!1,n.job.flags&8||n.update(),delete f.afterLeave,u=void 0},fo(s);o==="in-out"&&l.type!==Vt?f.delayLeave=(d,h,_)=>{const v=Hd(i,u);v[String(u.key)]=u,d[ii]=()=>{h(),d[ii]=void 0,delete c.delayedLeave,u=void 0},c.delayedLeave=()=>{_(),delete c.delayedLeave,u=void 0}}:u=void 0}else u&&(u=void 0);return s}}};function Gd(t){let e=t[0];if(t.length>1){for(const n of t)if(n.type!==Vt){e=n;break}}return e}const Em=Mm;function Hd(t,e){const{leavingVNodes:n}=t;let i=n.get(e.type);return i||(i=Object.create(null),n.set(e.type,i)),i}function ol(t,e,n,i,r){const{appear:s,mode:a,persisted:o=!1,onBeforeEnter:l,onEnter:c,onAfterEnter:u,onEnterCancelled:f,onBeforeLeave:d,onLeave:h,onAfterLeave:_,onLeaveCancelled:v,onBeforeAppear:m,onAppear:p,onAfterAppear:b,onAppearCancelled:T}=e,M=String(t.key),w=Hd(n,t),P=(x,y)=>{x&&Cn(x,i,9,y)},D=(x,y)=>{const L=y[1];P(x,y),ze(x)?x.every(N=>N.length<=1)&&L():x.length<=1&&L()},z={mode:a,persisted:o,beforeEnter(x){let y=l;if(!n.isMounted)if(s)y=m||l;else return;x[ii]&&x[ii](!0);const L=w[M];L&&ir(t,L)&&L.el[ii]&&L.el[ii](),P(y,[x])},enter(x){let y=c,L=u,N=f;if(!n.isMounted)if(s)y=p||c,L=b||u,N=T||f;else return;let G=!1;const ne=x[ks]=te=>{G||(G=!0,te?P(N,[x]):P(L,[x]),z.delayedLeave&&z.delayedLeave(),x[ks]=void 0)};y?D(y,[x,ne]):ne()},leave(x,y){const L=String(t.key);if(x[ks]&&x[ks](!0),n.isUnmounting)return y();P(d,[x]);let N=!1;const G=x[ii]=ne=>{N||(N=!0,y(),ne?P(v,[x]):P(_,[x]),x[ii]=void 0,w[L]===t&&delete w[L])};w[L]=t,h?D(h,[x,G]):G()},clone(x){const y=ol(x,e,n,i,r);return r&&r(y),y}};return z}function fo(t){if(Wa(t))return t=Vi(t),t.children=null,t}function lu(t){if(!Wa(t))return Fd(t.type)&&t.children?Gd(t.children):t;if(t.component)return t.component.subTree;const{shapeFlag:e,children:n}=t;if(n){if(e&16)return n[0];if(e&32&&We(n.default))return n.default()}}function xs(t,e){t.shapeFlag&6&&t.component?(t.transition=e,xs(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function kd(t,e=!1,n){let i=[],r=0;for(let s=0;s<t.length;s++){let a=t[s];const o=n==null?a.key:String(n)+String(a.key!=null?a.key:s);a.type===Dt?(a.patchFlag&128&&r++,i=i.concat(kd(a.children,e,o))):(e||a.type!==Vt)&&i.push(o!=null?Vi(a,{key:o}):a)}if(r>1)for(let s=0;s<i.length;s++)i[s].patchFlag=-2;return i}function Rc(t,e){return We(t)?It({name:t.name},e,{setup:t}):t}function Wd(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}const Ra=new WeakMap;function ds(t,e,n,i,r=!1){if(ze(t)){t.forEach((_,v)=>ds(_,e&&(ze(e)?e[v]:e),n,i,r));return}if(Ur(i)&&!r){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&ds(t,e,n,i.component.subTree);return}const s=i.shapeFlag&4?$a(i.component):i.el,a=r?null:s,{i:o,r:l}=t,c=e&&e.r,u=o.refs===dt?o.refs={}:o.refs,f=o.setupState,d=tt(f),h=f===dt?nd:_=>rt(d,_);if(c!=null&&c!==l){if(cu(e),Et(c))u[c]=null,h(c)&&(f[c]=null);else if(Ht(c)){c.value=null;const _=e;_.k&&(u[_.k]=null)}}if(We(l))Cs(l,o,12,[a,u]);else{const _=Et(l),v=Ht(l);if(_||v){const m=()=>{if(t.f){const p=_?h(l)?f[l]:u[l]:l.value;if(r)ze(p)&&gc(p,s);else if(ze(p))p.includes(s)||p.push(s);else if(_)u[l]=[s],h(l)&&(f[l]=u[l]);else{const b=[s];l.value=b,t.k&&(u[t.k]=b)}}else _?(u[l]=a,h(l)&&(f[l]=a)):v&&(l.value=a,t.k&&(u[t.k]=a))};if(a){const p=()=>{m(),Ra.delete(t)};p.id=-1,Ra.set(t,p),qt(p,n)}else cu(t),m()}}}function cu(t){const e=Ra.get(t);e&&(e.flags|=8,Ra.delete(t))}Va().requestIdleCallback;Va().cancelIdleCallback;const Ur=t=>!!t.type.__asyncLoader,Wa=t=>t.type.__isKeepAlive;function ym(t,e){Xd(t,"a",e)}function bm(t,e){Xd(t,"da",e)}function Xd(t,e,n=zt){const i=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(Xa(e,i,n),n){let r=n.parent;for(;r&&r.parent;)Wa(r.parent.vnode)&&Tm(i,e,n,r),r=r.parent}}function Tm(t,e,n,i){const r=Xa(e,t,i,!0);Cc(()=>{gc(i[e],r)},n)}function Xa(t,e,n=zt,i=!1){if(n){const r=n[t]||(n[t]=[]),s=e.__weh||(e.__weh=(...a)=>{hi();const o=Ps(n),l=Cn(e,n,t,a);return o(),pi(),l});return i?r.unshift(s):r.push(s),s}}const Mi=t=>(e,n=zt)=>{(!Es||t==="sp")&&Xa(t,(...i)=>e(...i),n)},Am=Mi("bm"),Dn=Mi("m"),wm=Mi("bu"),Rm=Mi("u"),qd=Mi("bum"),Cc=Mi("um"),Cm=Mi("sp"),Pm=Mi("rtg"),Dm=Mi("rtc");function Im(t,e=zt){Xa("ec",t,e)}const Lm="components";function Um(t,e){return Fm(Lm,t,!0,e)||t}const Nm=Symbol.for("v-ndc");function Fm(t,e,n=!0,i=!1){const r=Lt||zt;if(r){const s=r.type;{const o=M0(s,!1);if(o&&(o===e||o===xn(e)||o===Ba(xn(e))))return s}const a=uu(r[t]||s[t],e)||uu(r.appContext[t],e);return!a&&i?s:a}}function uu(t,e){return t&&(t[e]||t[xn(e)]||t[Ba(xn(e))])}function Yd(t,e,n,i){let r;const s=n,a=ze(t);if(a||Et(t)){const o=a&&ur(t);let l=!1,c=!1;o&&(l=!vn(t),c=mi(t),t=Ga(t)),r=new Array(t.length);for(let u=0,f=t.length;u<f;u++)r[u]=e(l?c?Br(Rn(t[u])):Rn(t[u]):t[u],u,void 0,s)}else if(typeof t=="number"){r=new Array(t);for(let o=0;o<t;o++)r[o]=e(o+1,o,void 0,s)}else if(_t(t))if(t[Symbol.iterator])r=Array.from(t,(o,l)=>e(o,l,void 0,s));else{const o=Object.keys(t);r=new Array(o.length);for(let l=0,c=o.length;l<c;l++){const u=o[l];r[l]=e(t[u],u,l,s)}}else r=[];return r}function $d(t,e,n={},i,r){if(Lt.ce||Lt.parent&&Ur(Lt.parent)&&Lt.parent.ce){const c=Object.keys(n).length>0;return je(),sn(Dt,null,[vt("slot",n,i)],c?-2:64)}let s=t[e];s&&s._c&&(s._d=!1),je();const a=s&&Kd(s(n)),o=n.key||a&&a.key,l=sn(Dt,{key:(o&&!Si(o)?o:`_${e}`)+(!a&&i?"_fb":"")},a||[],a&&t._===1?64:-2);return s&&s._c&&(s._d=!0),l}function Kd(t){return t.some(e=>Ms(e)?!(e.type===Vt||e.type===Dt&&!Kd(e.children)):!0)?t:null}const ll=t=>t?ph(t)?$a(t):ll(t.parent):null,hs=It(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>ll(t.parent),$root:t=>ll(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>Zd(t),$forceUpdate:t=>t.f||(t.f=()=>{wc(t.update)}),$nextTick:t=>t.n||(t.n=Ac.bind(t.proxy)),$watch:t=>_m.bind(t)}),ho=(t,e)=>t!==dt&&!t.__isScriptSetup&&rt(t,e),Om={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:i,data:r,props:s,accessCache:a,type:o,appContext:l}=t;if(e[0]!=="$"){const d=a[e];if(d!==void 0)switch(d){case 1:return i[e];case 2:return r[e];case 4:return n[e];case 3:return s[e]}else{if(ho(i,e))return a[e]=1,i[e];if(r!==dt&&rt(r,e))return a[e]=2,r[e];if(rt(s,e))return a[e]=3,s[e];if(n!==dt&&rt(n,e))return a[e]=4,n[e];cl&&(a[e]=0)}}const c=hs[e];let u,f;if(c)return e==="$attrs"&&Ot(t.attrs,"get",""),c(t);if((u=o.__cssModules)&&(u=u[e]))return u;if(n!==dt&&rt(n,e))return a[e]=4,n[e];if(f=l.config.globalProperties,rt(f,e))return f[e]},set({_:t},e,n){const{data:i,setupState:r,ctx:s}=t;return ho(r,e)?(r[e]=n,!0):i!==dt&&rt(i,e)?(i[e]=n,!0):rt(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(s[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:i,appContext:r,props:s,type:a}},o){let l;return!!(n[o]||t!==dt&&o[0]!=="$"&&rt(t,o)||ho(e,o)||rt(s,o)||rt(i,o)||rt(hs,o)||rt(r.config.globalProperties,o)||(l=a.__cssModules)&&l[o])},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:rt(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function fu(t){return ze(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let cl=!0;function Bm(t){const e=Zd(t),n=t.proxy,i=t.ctx;cl=!1,e.beforeCreate&&du(e.beforeCreate,t,"bc");const{data:r,computed:s,methods:a,watch:o,provide:l,inject:c,created:u,beforeMount:f,mounted:d,beforeUpdate:h,updated:_,activated:v,deactivated:m,beforeDestroy:p,beforeUnmount:b,destroyed:T,unmounted:M,render:w,renderTracked:P,renderTriggered:D,errorCaptured:z,serverPrefetch:x,expose:y,inheritAttrs:L,components:N,directives:G,filters:ne}=e;if(c&&Vm(c,i,null),a)for(const H in a){const ee=a[H];We(ee)&&(i[H]=ee.bind(n))}if(r){const H=r.call(n,n);_t(H)&&(t.data=Ha(H))}if(cl=!0,s)for(const H in s){const ee=s[H],ve=We(ee)?ee.bind(n,n):We(ee.get)?ee.get.bind(n,n):Gn,ge=!We(ee)&&We(ee.set)?ee.set.bind(n):Gn,Se=bn({get:ve,set:ge});Object.defineProperty(i,H,{enumerable:!0,configurable:!0,get:()=>Se.value,set:Fe=>Se.value=Fe})}if(o)for(const H in o)jd(o[H],i,n,H);if(l){const H=We(l)?l.call(n):l;Reflect.ownKeys(H).forEach(ee=>{pa(ee,H[ee])})}u&&du(u,t,"c");function K(H,ee){ze(ee)?ee.forEach(ve=>H(ve.bind(n))):ee&&H(ee.bind(n))}if(K(Am,f),K(Dn,d),K(wm,h),K(Rm,_),K(ym,v),K(bm,m),K(Im,z),K(Dm,P),K(Pm,D),K(qd,b),K(Cc,M),K(Cm,x),ze(y))if(y.length){const H=t.exposed||(t.exposed={});y.forEach(ee=>{Object.defineProperty(H,ee,{get:()=>n[ee],set:ve=>n[ee]=ve,enumerable:!0})})}else t.exposed||(t.exposed={});w&&t.render===Gn&&(t.render=w),L!=null&&(t.inheritAttrs=L),N&&(t.components=N),G&&(t.directives=G),x&&Wd(t)}function Vm(t,e,n=Gn){ze(t)&&(t=ul(t));for(const i in t){const r=t[i];let s;_t(r)?"default"in r?s=Hn(r.from||i,r.default,!0):s=Hn(r.from||i):s=Hn(r),Ht(s)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:a=>s.value=a}):e[i]=s}}function du(t,e,n){Cn(ze(t)?t.map(i=>i.bind(e.proxy)):t.bind(e.proxy),e,n)}function jd(t,e,n,i){let r=i.includes(".")?Ud(n,i):()=>n[i];if(Et(t)){const s=e[t];We(s)&&Bi(r,s)}else if(We(t))Bi(r,t.bind(n));else if(_t(t))if(ze(t))t.forEach(s=>jd(s,e,n,i));else{const s=We(t.handler)?t.handler.bind(n):e[t.handler];We(s)&&Bi(r,s,t)}}function Zd(t){const e=t.type,{mixins:n,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:a}}=t.appContext,o=s.get(e);let l;return o?l=o:!r.length&&!n&&!i?l=e:(l={},r.length&&r.forEach(c=>Ca(l,c,a,!0)),Ca(l,e,a)),_t(e)&&s.set(e,l),l}function Ca(t,e,n,i=!1){const{mixins:r,extends:s}=e;s&&Ca(t,s,n,!0),r&&r.forEach(a=>Ca(t,a,n,!0));for(const a in e)if(!(i&&a==="expose")){const o=zm[a]||n&&n[a];t[a]=o?o(t[a],e[a]):e[a]}return t}const zm={data:hu,props:pu,emits:pu,methods:ss,computed:ss,beforeCreate:Wt,created:Wt,beforeMount:Wt,mounted:Wt,beforeUpdate:Wt,updated:Wt,beforeDestroy:Wt,beforeUnmount:Wt,destroyed:Wt,unmounted:Wt,activated:Wt,deactivated:Wt,errorCaptured:Wt,serverPrefetch:Wt,components:ss,directives:ss,watch:Hm,provide:hu,inject:Gm};function hu(t,e){return e?t?function(){return It(We(t)?t.call(this,this):t,We(e)?e.call(this,this):e)}:e:t}function Gm(t,e){return ss(ul(t),ul(e))}function ul(t){if(ze(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Wt(t,e){return t?[...new Set([].concat(t,e))]:e}function ss(t,e){return t?It(Object.create(null),t,e):e}function pu(t,e){return t?ze(t)&&ze(e)?[...new Set([...t,...e])]:It(Object.create(null),fu(t),fu(e??{})):e}function Hm(t,e){if(!t)return e;if(!e)return t;const n=It(Object.create(null),t);for(const i in e)n[i]=Wt(t[i],e[i]);return n}function Jd(){return{app:null,config:{isNativeTag:nd,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let km=0;function Wm(t,e){return function(i,r=null){We(i)||(i=It({},i)),r!=null&&!_t(r)&&(r=null);const s=Jd(),a=new WeakSet,o=[];let l=!1;const c=s.app={_uid:km++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:y0,get config(){return s.config},set config(u){},use(u,...f){return a.has(u)||(u&&We(u.install)?(a.add(u),u.install(c,...f)):We(u)&&(a.add(u),u(c,...f))),c},mixin(u){return s.mixins.includes(u)||s.mixins.push(u),c},component(u,f){return f?(s.components[u]=f,c):s.components[u]},directive(u,f){return f?(s.directives[u]=f,c):s.directives[u]},mount(u,f,d){if(!l){const h=c._ceVNode||vt(i,r);return h.appContext=s,d===!0?d="svg":d===!1&&(d=void 0),t(h,u,d),l=!0,c._container=u,u.__vue_app__=c,$a(h.component)}},onUnmount(u){o.push(u)},unmount(){l&&(Cn(o,c._instance,16),t(null,c._container),delete c._container.__vue_app__)},provide(u,f){return s.provides[u]=f,c},runWithContext(u){const f=Nr;Nr=c;try{return u()}finally{Nr=f}}};return c}}let Nr=null;const Xm=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${xn(e)}Modifiers`]||t[`${Gi(e)}Modifiers`];function qm(t,e,...n){if(t.isUnmounted)return;const i=t.vnode.props||dt;let r=n;const s=e.startsWith("update:"),a=s&&Xm(i,e.slice(7));a&&(a.trim&&(r=n.map(u=>Et(u)?u.trim():u)),a.number&&(r=n.map(vc)));let o,l=i[o=ao(e)]||i[o=ao(xn(e))];!l&&s&&(l=i[o=ao(Gi(e))]),l&&Cn(l,t,6,r);const c=i[o+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[o])return;t.emitted[o]=!0,Cn(c,t,6,r)}}const Ym=new WeakMap;function Qd(t,e,n=!1){const i=n?Ym:e.emitsCache,r=i.get(t);if(r!==void 0)return r;const s=t.emits;let a={},o=!1;if(!We(t)){const l=c=>{const u=Qd(c,e,!0);u&&(o=!0,It(a,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!s&&!o?(_t(t)&&i.set(t,null),null):(ze(s)?s.forEach(l=>a[l]=null):It(a,s),_t(t)&&i.set(t,a),a)}function qa(t,e){return!t||!Na(e)?!1:(e=e.slice(2).replace(/Once$/,""),rt(t,e[0].toLowerCase()+e.slice(1))||rt(t,Gi(e))||rt(t,e))}function mu(t){const{type:e,vnode:n,proxy:i,withProxy:r,propsOptions:[s],slots:a,attrs:o,emit:l,render:c,renderCache:u,props:f,data:d,setupState:h,ctx:_,inheritAttrs:v}=t,m=wa(t);let p,b;try{if(n.shapeFlag&4){const M=r||i,w=M;p=On(c.call(w,M,u,f,h,d,_)),b=o}else{const M=e;p=On(M.length>1?M(f,{attrs:o,slots:a,emit:l}):M(f,null)),b=e.props?o:$m(o)}}catch(M){ps.length=0,ka(M,t,1),p=vt(Vt)}let T=p;if(b&&v!==!1){const M=Object.keys(b),{shapeFlag:w}=T;M.length&&w&7&&(s&&M.some(mc)&&(b=Km(b,s)),T=Vi(T,b,!1,!0))}return n.dirs&&(T=Vi(T,null,!1,!0),T.dirs=T.dirs?T.dirs.concat(n.dirs):n.dirs),n.transition&&xs(T,n.transition),p=T,wa(m),p}const $m=t=>{let e;for(const n in t)(n==="class"||n==="style"||Na(n))&&((e||(e={}))[n]=t[n]);return e},Km=(t,e)=>{const n={};for(const i in t)(!mc(i)||!(i.slice(9)in e))&&(n[i]=t[i]);return n};function jm(t,e,n){const{props:i,children:r,component:s}=t,{props:a,children:o,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return i?gu(i,a,c):!!a;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const d=u[f];if(a[d]!==i[d]&&!qa(c,d))return!0}}}else return(r||o)&&(!o||!o.$stable)?!0:i===a?!1:i?a?gu(i,a,c):!0:!!a;return!1}function gu(t,e,n){const i=Object.keys(e);if(i.length!==Object.keys(t).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(e[s]!==t[s]&&!qa(n,s))return!0}return!1}function Zm({vnode:t,parent:e},n){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===t&&(i.el=t.el),i===t)(t=e.vnode).el=n,e=e.parent;else break}}const eh={},th=()=>Object.create(eh),nh=t=>Object.getPrototypeOf(t)===eh;function Jm(t,e,n,i=!1){const r={},s=th();t.propsDefaults=Object.create(null),ih(t,e,r,s);for(const a in t.propsOptions[0])a in r||(r[a]=void 0);n?t.props=i?r:Td(r):t.type.props?t.props=r:t.props=s,t.attrs=s}function Qm(t,e,n,i){const{props:r,attrs:s,vnode:{patchFlag:a}}=t,o=tt(r),[l]=t.propsOptions;let c=!1;if((i||a>0)&&!(a&16)){if(a&8){const u=t.vnode.dynamicProps;for(let f=0;f<u.length;f++){let d=u[f];if(qa(t.emitsOptions,d))continue;const h=e[d];if(l)if(rt(s,d))h!==s[d]&&(s[d]=h,c=!0);else{const _=xn(d);r[_]=fl(l,o,_,h,t,!1)}else h!==s[d]&&(s[d]=h,c=!0)}}}else{ih(t,e,r,s)&&(c=!0);let u;for(const f in o)(!e||!rt(e,f)&&((u=Gi(f))===f||!rt(e,u)))&&(l?n&&(n[f]!==void 0||n[u]!==void 0)&&(r[f]=fl(l,o,f,void 0,t,!0)):delete r[f]);if(s!==o)for(const f in s)(!e||!rt(e,f))&&(delete s[f],c=!0)}c&&ri(t.attrs,"set","")}function ih(t,e,n,i){const[r,s]=t.propsOptions;let a=!1,o;if(e)for(let l in e){if(ls(l))continue;const c=e[l];let u;r&&rt(r,u=xn(l))?!s||!s.includes(u)?n[u]=c:(o||(o={}))[u]=c:qa(t.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,a=!0)}if(s){const l=tt(n),c=o||dt;for(let u=0;u<s.length;u++){const f=s[u];n[f]=fl(r,l,f,c[f],t,!rt(c,f))}}return a}function fl(t,e,n,i,r,s){const a=t[n];if(a!=null){const o=rt(a,"default");if(o&&i===void 0){const l=a.default;if(a.type!==Function&&!a.skipFactory&&We(l)){const{propsDefaults:c}=r;if(n in c)i=c[n];else{const u=Ps(r);i=c[n]=l.call(null,e),u()}}else i=l;r.ce&&r.ce._setProp(n,i)}a[0]&&(s&&!o?i=!1:a[1]&&(i===""||i===Gi(n))&&(i=!0))}return i}const e0=new WeakMap;function rh(t,e,n=!1){const i=n?e0:e.propsCache,r=i.get(t);if(r)return r;const s=t.props,a={},o=[];let l=!1;if(!We(t)){const u=f=>{l=!0;const[d,h]=rh(f,e,!0);It(a,d),h&&o.push(...h)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!s&&!l)return _t(t)&&i.set(t,Dr),Dr;if(ze(s))for(let u=0;u<s.length;u++){const f=xn(s[u]);_u(f)&&(a[f]=dt)}else if(s)for(const u in s){const f=xn(u);if(_u(f)){const d=s[u],h=a[f]=ze(d)||We(d)?{type:d}:It({},d),_=h.type;let v=!1,m=!0;if(ze(_))for(let p=0;p<_.length;++p){const b=_[p],T=We(b)&&b.name;if(T==="Boolean"){v=!0;break}else T==="String"&&(m=!1)}else v=We(_)&&_.name==="Boolean";h[0]=v,h[1]=m,(v||rt(h,"default"))&&o.push(f)}}const c=[a,o];return _t(t)&&i.set(t,c),c}function _u(t){return t[0]!=="$"&&!ls(t)}const Pc=t=>t==="_"||t==="_ctx"||t==="$stable",Dc=t=>ze(t)?t.map(On):[On(t)],t0=(t,e,n)=>{if(e._n)return e;const i=Hi((...r)=>Dc(e(...r)),n);return i._c=!1,i},sh=(t,e,n)=>{const i=t._ctx;for(const r in t){if(Pc(r))continue;const s=t[r];if(We(s))e[r]=t0(r,s,i);else if(s!=null){const a=Dc(s);e[r]=()=>a}}},ah=(t,e)=>{const n=Dc(e);t.slots.default=()=>n},oh=(t,e,n)=>{for(const i in e)(n||!Pc(i))&&(t[i]=e[i])},n0=(t,e,n)=>{const i=t.slots=th();if(t.vnode.shapeFlag&32){const r=e._;r?(oh(i,e,n),n&&od(i,"_",r,!0)):sh(e,i)}else e&&ah(t,e)},i0=(t,e,n)=>{const{vnode:i,slots:r}=t;let s=!0,a=dt;if(i.shapeFlag&32){const o=e._;o?n&&o===1?s=!1:oh(r,e,n):(s=!e.$stable,sh(e,r)),a=e}else e&&(ah(t,e),a={default:1});if(s)for(const o in r)!Pc(o)&&a[o]==null&&delete r[o]},qt=l0;function r0(t){return s0(t)}function s0(t,e){const n=Va();n.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:a,createText:o,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:d,setScopeId:h=Gn,insertStaticContent:_}=t,v=(R,C,F,j=null,q=null,J=null,A=void 0,fe=null,le=!!C.dynamicChildren)=>{if(R===C)return;R&&!ir(R,C)&&(j=U(R),Fe(R,q,J,!0),R=null),C.patchFlag===-2&&(le=!1,C.dynamicChildren=null);const{type:se,ref:ce,shapeFlag:S}=C;switch(se){case Ya:m(R,C,F,j);break;case Vt:p(R,C,F,j);break;case ga:R==null&&b(C,F,j,A);break;case Dt:N(R,C,F,j,q,J,A,fe,le);break;default:S&1?w(R,C,F,j,q,J,A,fe,le):S&6?G(R,C,F,j,q,J,A,fe,le):(S&64||S&128)&&se.process(R,C,F,j,q,J,A,fe,le,ae)}ce!=null&&q?ds(ce,R&&R.ref,J,C||R,!C):ce==null&&R&&R.ref!=null&&ds(R.ref,null,J,R,!0)},m=(R,C,F,j)=>{if(R==null)i(C.el=o(C.children),F,j);else{const q=C.el=R.el;C.children!==R.children&&c(q,C.children)}},p=(R,C,F,j)=>{R==null?i(C.el=l(C.children||""),F,j):C.el=R.el},b=(R,C,F,j)=>{[R.el,R.anchor]=_(R.children,C,F,j,R.el,R.anchor)},T=({el:R,anchor:C},F,j)=>{let q;for(;R&&R!==C;)q=d(R),i(R,F,j),R=q;i(C,F,j)},M=({el:R,anchor:C})=>{let F;for(;R&&R!==C;)F=d(R),r(R),R=F;r(C)},w=(R,C,F,j,q,J,A,fe,le)=>{if(C.type==="svg"?A="svg":C.type==="math"&&(A="mathml"),R==null)P(C,F,j,q,J,A,fe,le);else{const se=R.el&&R.el._isVueCE?R.el:null;try{se&&se._beginPatch(),x(R,C,q,J,A,fe,le)}finally{se&&se._endPatch()}}},P=(R,C,F,j,q,J,A,fe)=>{let le,se;const{props:ce,shapeFlag:S,transition:g,dirs:I}=R;if(le=R.el=a(R.type,J,ce&&ce.is,ce),S&8?u(le,R.children):S&16&&z(R.children,le,null,j,q,po(R,J),A,fe),I&&Xi(R,null,j,"created"),D(le,R,R.scopeId,A,j),ce){for(const Q in ce)Q!=="value"&&!ls(Q)&&s(le,Q,null,ce[Q],J,j);"value"in ce&&s(le,"value",null,ce.value,J),(se=ce.onVnodeBeforeMount)&&Un(se,j,R)}I&&Xi(R,null,j,"beforeMount");const X=a0(q,g);X&&g.beforeEnter(le),i(le,C,F),((se=ce&&ce.onVnodeMounted)||X||I)&&qt(()=>{se&&Un(se,j,R),X&&g.enter(le),I&&Xi(R,null,j,"mounted")},q)},D=(R,C,F,j,q)=>{if(F&&h(R,F),j)for(let J=0;J<j.length;J++)h(R,j[J]);if(q){let J=q.subTree;if(C===J||uh(J.type)&&(J.ssContent===C||J.ssFallback===C)){const A=q.vnode;D(R,A,A.scopeId,A.slotScopeIds,q.parent)}}},z=(R,C,F,j,q,J,A,fe,le=0)=>{for(let se=le;se<R.length;se++){const ce=R[se]=fe?Li(R[se]):On(R[se]);v(null,ce,C,F,j,q,J,A,fe)}},x=(R,C,F,j,q,J,A)=>{const fe=C.el=R.el;let{patchFlag:le,dynamicChildren:se,dirs:ce}=C;le|=R.patchFlag&16;const S=R.props||dt,g=C.props||dt;let I;if(F&&qi(F,!1),(I=g.onVnodeBeforeUpdate)&&Un(I,F,C,R),ce&&Xi(C,R,F,"beforeUpdate"),F&&qi(F,!0),(S.innerHTML&&g.innerHTML==null||S.textContent&&g.textContent==null)&&u(fe,""),se?y(R.dynamicChildren,se,fe,F,j,po(C,q),J):A||ee(R,C,fe,null,F,j,po(C,q),J,!1),le>0){if(le&16)L(fe,S,g,F,q);else if(le&2&&S.class!==g.class&&s(fe,"class",null,g.class,q),le&4&&s(fe,"style",S.style,g.style,q),le&8){const X=C.dynamicProps;for(let Q=0;Q<X.length;Q++){const W=X[Q],Te=S[W],he=g[W];(he!==Te||W==="value")&&s(fe,W,Te,he,q,F)}}le&1&&R.children!==C.children&&u(fe,C.children)}else!A&&se==null&&L(fe,S,g,F,q);((I=g.onVnodeUpdated)||ce)&&qt(()=>{I&&Un(I,F,C,R),ce&&Xi(C,R,F,"updated")},j)},y=(R,C,F,j,q,J,A)=>{for(let fe=0;fe<C.length;fe++){const le=R[fe],se=C[fe],ce=le.el&&(le.type===Dt||!ir(le,se)||le.shapeFlag&198)?f(le.el):F;v(le,se,ce,null,j,q,J,A,!0)}},L=(R,C,F,j,q)=>{if(C!==F){if(C!==dt)for(const J in C)!ls(J)&&!(J in F)&&s(R,J,C[J],null,q,j);for(const J in F){if(ls(J))continue;const A=F[J],fe=C[J];A!==fe&&J!=="value"&&s(R,J,fe,A,q,j)}"value"in F&&s(R,"value",C.value,F.value,q)}},N=(R,C,F,j,q,J,A,fe,le)=>{const se=C.el=R?R.el:o(""),ce=C.anchor=R?R.anchor:o("");let{patchFlag:S,dynamicChildren:g,slotScopeIds:I}=C;I&&(fe=fe?fe.concat(I):I),R==null?(i(se,F,j),i(ce,F,j),z(C.children||[],F,ce,q,J,A,fe,le)):S>0&&S&64&&g&&R.dynamicChildren&&R.dynamicChildren.length===g.length?(y(R.dynamicChildren,g,F,q,J,A,fe),(C.key!=null||q&&C===q.subTree)&&Ic(R,C,!0)):ee(R,C,F,ce,q,J,A,fe,le)},G=(R,C,F,j,q,J,A,fe,le)=>{C.slotScopeIds=fe,R==null?C.shapeFlag&512?q.ctx.activate(C,F,j,A,le):ne(C,F,j,q,J,A,le):te(R,C,le)},ne=(R,C,F,j,q,J,A)=>{const fe=R.component=g0(R,j,q);if(Wa(R)&&(fe.ctx.renderer=ae),_0(fe,!1,A),fe.asyncDep){if(q&&q.registerDep(fe,K,A),!R.el){const le=fe.subTree=vt(Vt);p(null,le,C,F),R.placeholder=le.el}}else K(fe,R,C,F,q,J,A)},te=(R,C,F)=>{const j=C.component=R.component;if(jm(R,C,F))if(j.asyncDep&&!j.asyncResolved){H(j,C,F);return}else j.next=C,j.update();else C.el=R.el,j.vnode=C},K=(R,C,F,j,q,J,A)=>{const fe=()=>{if(R.isMounted){let{next:S,bu:g,u:I,parent:X,vnode:Q}=R;{const Ue=lh(R);if(Ue){S&&(S.el=Q.el,H(R,S,A)),Ue.asyncDep.then(()=>{R.isUnmounted||fe()});return}}let W=S,Te;qi(R,!1),S?(S.el=Q.el,H(R,S,A)):S=Q,g&&ha(g),(Te=S.props&&S.props.onVnodeBeforeUpdate)&&Un(Te,X,S,Q),qi(R,!0);const he=mu(R),Re=R.subTree;R.subTree=he,v(Re,he,f(Re.el),U(Re),R,q,J),S.el=he.el,W===null&&Zm(R,he.el),I&&qt(I,q),(Te=S.props&&S.props.onVnodeUpdated)&&qt(()=>Un(Te,X,S,Q),q)}else{let S;const{el:g,props:I}=C,{bm:X,m:Q,parent:W,root:Te,type:he}=R,Re=Ur(C);qi(R,!1),X&&ha(X),!Re&&(S=I&&I.onVnodeBeforeMount)&&Un(S,W,C),qi(R,!0);{Te.ce&&Te.ce._def.shadowRoot!==!1&&Te.ce._injectChildStyle(he);const Ue=R.subTree=mu(R);v(null,Ue,F,j,R,q,J),C.el=Ue.el}if(Q&&qt(Q,q),!Re&&(S=I&&I.onVnodeMounted)){const Ue=C;qt(()=>Un(S,W,Ue),q)}(C.shapeFlag&256||W&&Ur(W.vnode)&&W.vnode.shapeFlag&256)&&R.a&&qt(R.a,q),R.isMounted=!0,C=F=j=null}};R.scope.on();const le=R.effect=new fd(fe);R.scope.off();const se=R.update=le.run.bind(le),ce=R.job=le.runIfDirty.bind(le);ce.i=R,ce.id=R.uid,le.scheduler=()=>wc(ce),qi(R,!0),se()},H=(R,C,F)=>{C.component=R;const j=R.vnode.props;R.vnode=C,R.next=null,Qm(R,C.props,j,F),i0(R,C.children,F),hi(),ru(R),pi()},ee=(R,C,F,j,q,J,A,fe,le=!1)=>{const se=R&&R.children,ce=R?R.shapeFlag:0,S=C.children,{patchFlag:g,shapeFlag:I}=C;if(g>0){if(g&128){ge(se,S,F,j,q,J,A,fe,le);return}else if(g&256){ve(se,S,F,j,q,J,A,fe,le);return}}I&8?(ce&16&&re(se,q,J),S!==se&&u(F,S)):ce&16?I&16?ge(se,S,F,j,q,J,A,fe,le):re(se,q,J,!0):(ce&8&&u(F,""),I&16&&z(S,F,j,q,J,A,fe,le))},ve=(R,C,F,j,q,J,A,fe,le)=>{R=R||Dr,C=C||Dr;const se=R.length,ce=C.length,S=Math.min(se,ce);let g;for(g=0;g<S;g++){const I=C[g]=le?Li(C[g]):On(C[g]);v(R[g],I,F,null,q,J,A,fe,le)}se>ce?re(R,q,J,!0,!1,S):z(C,F,j,q,J,A,fe,le,S)},ge=(R,C,F,j,q,J,A,fe,le)=>{let se=0;const ce=C.length;let S=R.length-1,g=ce-1;for(;se<=S&&se<=g;){const I=R[se],X=C[se]=le?Li(C[se]):On(C[se]);if(ir(I,X))v(I,X,F,null,q,J,A,fe,le);else break;se++}for(;se<=S&&se<=g;){const I=R[S],X=C[g]=le?Li(C[g]):On(C[g]);if(ir(I,X))v(I,X,F,null,q,J,A,fe,le);else break;S--,g--}if(se>S){if(se<=g){const I=g+1,X=I<ce?C[I].el:j;for(;se<=g;)v(null,C[se]=le?Li(C[se]):On(C[se]),F,X,q,J,A,fe,le),se++}}else if(se>g)for(;se<=S;)Fe(R[se],q,J,!0),se++;else{const I=se,X=se,Q=new Map;for(se=X;se<=g;se++){const Ee=C[se]=le?Li(C[se]):On(C[se]);Ee.key!=null&&Q.set(Ee.key,se)}let W,Te=0;const he=g-X+1;let Re=!1,Ue=0;const de=new Array(he);for(se=0;se<he;se++)de[se]=0;for(se=I;se<=S;se++){const Ee=R[se];if(Te>=he){Fe(Ee,q,J,!0);continue}let Ce;if(Ee.key!=null)Ce=Q.get(Ee.key);else for(W=X;W<=g;W++)if(de[W-X]===0&&ir(Ee,C[W])){Ce=W;break}Ce===void 0?Fe(Ee,q,J,!0):(de[Ce-X]=se+1,Ce>=Ue?Ue=Ce:Re=!0,v(Ee,C[Ce],F,null,q,J,A,fe,le),Te++)}const xe=Re?o0(de):Dr;for(W=xe.length-1,se=he-1;se>=0;se--){const Ee=X+se,Ce=C[Ee],_e=C[Ee+1],Xe=Ee+1<ce?_e.el||ch(_e):j;de[se]===0?v(null,Ce,F,Xe,q,J,A,fe,le):Re&&(W<0||se!==xe[W]?Se(Ce,F,Xe,2):W--)}}},Se=(R,C,F,j,q=null)=>{const{el:J,type:A,transition:fe,children:le,shapeFlag:se}=R;if(se&6){Se(R.component.subTree,C,F,j);return}if(se&128){R.suspense.move(C,F,j);return}if(se&64){A.move(R,C,F,ae);return}if(A===Dt){i(J,C,F);for(let S=0;S<le.length;S++)Se(le[S],C,F,j);i(R.anchor,C,F);return}if(A===ga){T(R,C,F);return}if(j!==2&&se&1&&fe)if(j===0)fe.beforeEnter(J),i(J,C,F),qt(()=>fe.enter(J),q);else{const{leave:S,delayLeave:g,afterLeave:I}=fe,X=()=>{R.ctx.isUnmounted?r(J):i(J,C,F)},Q=()=>{J._isLeaving&&J[ii](!0),S(J,()=>{X(),I&&I()})};g?g(J,X,Q):Q()}else i(J,C,F)},Fe=(R,C,F,j=!1,q=!1)=>{const{type:J,props:A,ref:fe,children:le,dynamicChildren:se,shapeFlag:ce,patchFlag:S,dirs:g,cacheIndex:I}=R;if(S===-2&&(q=!1),fe!=null&&(hi(),ds(fe,null,F,R,!0),pi()),I!=null&&(C.renderCache[I]=void 0),ce&256){C.ctx.deactivate(R);return}const X=ce&1&&g,Q=!Ur(R);let W;if(Q&&(W=A&&A.onVnodeBeforeUnmount)&&Un(W,C,R),ce&6)Ze(R.component,F,j);else{if(ce&128){R.suspense.unmount(F,j);return}X&&Xi(R,null,C,"beforeUnmount"),ce&64?R.type.remove(R,C,F,ae,j):se&&!se.hasOnce&&(J!==Dt||S>0&&S&64)?re(se,C,F,!1,!0):(J===Dt&&S&384||!q&&ce&16)&&re(le,C,F),j&&Ge(R)}(Q&&(W=A&&A.onVnodeUnmounted)||X)&&qt(()=>{W&&Un(W,C,R),X&&Xi(R,null,C,"unmounted")},F)},Ge=R=>{const{type:C,el:F,anchor:j,transition:q}=R;if(C===Dt){nt(F,j);return}if(C===ga){M(R);return}const J=()=>{r(F),q&&!q.persisted&&q.afterLeave&&q.afterLeave()};if(R.shapeFlag&1&&q&&!q.persisted){const{leave:A,delayLeave:fe}=q,le=()=>A(F,J);fe?fe(R.el,J,le):le()}else J()},nt=(R,C)=>{let F;for(;R!==C;)F=d(R),r(R),R=F;r(C)},Ze=(R,C,F)=>{const{bum:j,scope:q,job:J,subTree:A,um:fe,m:le,a:se}=R;vu(le),vu(se),j&&ha(j),q.stop(),J&&(J.flags|=8,Fe(A,R,C,F)),fe&&qt(fe,C),qt(()=>{R.isUnmounted=!0},C)},re=(R,C,F,j=!1,q=!1,J=0)=>{for(let A=J;A<R.length;A++)Fe(R[A],C,F,j,q)},U=R=>{if(R.shapeFlag&6)return U(R.component.subTree);if(R.shapeFlag&128)return R.suspense.next();const C=d(R.anchor||R.el),F=C&&C[Nd];return F?d(F):C};let ie=!1;const oe=(R,C,F)=>{let j;R==null?C._vnode&&(Fe(C._vnode,null,null,!0),j=C._vnode.component):v(C._vnode||null,R,C,null,null,null,F),C._vnode=R,ie||(ie=!0,ru(j),Pd(),ie=!1)},ae={p:v,um:Fe,m:Se,r:Ge,mt:ne,mc:z,pc:ee,pbc:y,n:U,o:t};return{render:oe,hydrate:void 0,createApp:Wm(oe)}}function po({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function qi({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function a0(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Ic(t,e,n=!1){const i=t.children,r=e.children;if(ze(i)&&ze(r))for(let s=0;s<i.length;s++){const a=i[s];let o=r[s];o.shapeFlag&1&&!o.dynamicChildren&&((o.patchFlag<=0||o.patchFlag===32)&&(o=r[s]=Li(r[s]),o.el=a.el),!n&&o.patchFlag!==-2&&Ic(a,o)),o.type===Ya&&(o.patchFlag!==-1?o.el=a.el:o.__elIndex=s+(t.type===Dt?1:0)),o.type===Vt&&!o.el&&(o.el=a.el)}}function o0(t){const e=t.slice(),n=[0];let i,r,s,a,o;const l=t.length;for(i=0;i<l;i++){const c=t[i];if(c!==0){if(r=n[n.length-1],t[r]<c){e[i]=r,n.push(i);continue}for(s=0,a=n.length-1;s<a;)o=s+a>>1,t[n[o]]<c?s=o+1:a=o;c<t[n[s]]&&(s>0&&(e[i]=n[s-1]),n[s]=i)}}for(s=n.length,a=n[s-1];s-- >0;)n[s]=a,a=e[a];return n}function lh(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:lh(e)}function vu(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}function ch(t){if(t.placeholder)return t.placeholder;const e=t.component;return e?ch(e.subTree):null}const uh=t=>t.__isSuspense;function l0(t,e){e&&e.pendingBranch?ze(t)?e.effects.push(...t):e.effects.push(t):hm(t)}const Dt=Symbol.for("v-fgt"),Ya=Symbol.for("v-txt"),Vt=Symbol.for("v-cmt"),ga=Symbol.for("v-stc"),ps=[];let un=null;function je(t=!1){ps.push(un=t?null:[])}function c0(){ps.pop(),un=ps[ps.length-1]||null}let Ss=1;function Pa(t,e=!1){Ss+=t,t<0&&un&&e&&(un.hasOnce=!0)}function fh(t){return t.dynamicChildren=Ss>0?un||Dr:null,c0(),Ss>0&&un&&un.push(t),t}function At(t,e,n,i,r,s){return fh(O(t,e,n,i,r,s,!0))}function sn(t,e,n,i,r){return fh(vt(t,e,n,i,r,!0))}function Ms(t){return t?t.__v_isVNode===!0:!1}function ir(t,e){return t.type===e.type&&t.key===e.key}const dh=({key:t})=>t??null,_a=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Et(t)||Ht(t)||We(t)?{i:Lt,r:t,k:e,f:!!n}:t:null);function O(t,e=null,n=null,i=0,r=null,s=t===Dt?0:1,a=!1,o=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&dh(e),ref:e&&_a(e),scopeId:Id,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:Lt};return o?(Lc(l,n),s&128&&t.normalize(l)):n&&(l.shapeFlag|=Et(n)?8:16),Ss>0&&!a&&un&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&un.push(l),l}const vt=u0;function u0(t,e=null,n=null,i=0,r=null,s=!1){if((!t||t===Nm)&&(t=Vt),Ms(t)){const o=Vi(t,e,!0);return n&&Lc(o,n),Ss>0&&!s&&un&&(o.shapeFlag&6?un[un.indexOf(t)]=o:un.push(o)),o.patchFlag=-2,o}if(E0(t)&&(t=t.__vccOpts),e){e=f0(e);let{class:o,style:l}=e;o&&!Et(o)&&(e.class=Kt(o)),_t(l)&&(Tc(l)&&!ze(l)&&(l=It({},l)),e.style=za(l))}const a=Et(t)?1:uh(t)?128:Fd(t)?64:_t(t)?4:We(t)?2:0;return O(t,e,n,i,r,a,s,!0)}function f0(t){return t?Tc(t)||nh(t)?It({},t):t:null}function Vi(t,e,n=!1,i=!1){const{props:r,ref:s,patchFlag:a,children:o,transition:l}=t,c=e?h0(r||{},e):r,u={__v_isVNode:!0,__v_skip:!0,type:t.type,props:c,key:c&&dh(c),ref:e&&e.ref?n&&s?ze(s)?s.concat(_a(e)):[s,_a(e)]:_a(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Dt?a===-1?16:a|16:a,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Vi(t.ssContent),ssFallback:t.ssFallback&&Vi(t.ssFallback),placeholder:t.placeholder,el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&i&&xs(u,l.clone(u)),u}function ai(t=" ",e=0){return vt(Ya,null,t,e)}function d0(t,e){const n=vt(ga,null,t);return n.staticCount=e,n}function ci(t="",e=!1){return e?(je(),sn(Vt,null,t)):vt(Vt,null,t)}function On(t){return t==null||typeof t=="boolean"?vt(Vt):ze(t)?vt(Dt,null,t.slice()):Ms(t)?Li(t):vt(Ya,null,String(t))}function Li(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Vi(t)}function Lc(t,e){let n=0;const{shapeFlag:i}=t;if(e==null)e=null;else if(ze(e))n=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),Lc(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!nh(e)?e._ctx=Lt:r===3&&Lt&&(Lt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else We(e)?(e={default:e,_ctx:Lt},n=32):(e=String(e),i&64?(n=16,e=[ai(e)]):n=8);t.children=e,t.shapeFlag|=n}function h0(...t){const e={};for(let n=0;n<t.length;n++){const i=t[n];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=Kt([e.class,i.class]));else if(r==="style")e.style=za([e.style,i.style]);else if(Na(r)){const s=e[r],a=i[r];a&&s!==a&&!(ze(s)&&s.includes(a))&&(e[r]=s?[].concat(s,a):a)}else r!==""&&(e[r]=i[r])}return e}function Un(t,e,n,i=null){Cn(t,e,7,[n,i])}const p0=Jd();let m0=0;function g0(t,e,n){const i=t.type,r=(e?e.appContext:t.appContext)||p0,s={uid:m0++,vnode:t,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Op(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:rh(i,r),emitsOptions:Qd(i,r),emit:null,emitted:null,propsDefaults:dt,inheritAttrs:i.inheritAttrs,ctx:dt,data:dt,props:dt,attrs:dt,slots:dt,refs:dt,setupState:dt,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=qm.bind(null,s),t.ce&&t.ce(s),s}let zt=null;const hh=()=>zt||Lt;let Da,dl;{const t=Va(),e=(n,i)=>{let r;return(r=t[n])||(r=t[n]=[]),r.push(i),s=>{r.length>1?r.forEach(a=>a(s)):r[0](s)}};Da=e("__VUE_INSTANCE_SETTERS__",n=>zt=n),dl=e("__VUE_SSR_SETTERS__",n=>Es=n)}const Ps=t=>{const e=zt;return Da(t),t.scope.on(),()=>{t.scope.off(),Da(e)}},xu=()=>{zt&&zt.scope.off(),Da(null)};function ph(t){return t.vnode.shapeFlag&4}let Es=!1;function _0(t,e=!1,n=!1){e&&dl(e);const{props:i,children:r}=t.vnode,s=ph(t);Jm(t,i,s,e),n0(t,r,n||e);const a=s?v0(t,e):void 0;return e&&dl(!1),a}function v0(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,Om);const{setup:i}=n;if(i){hi();const r=t.setupContext=i.length>1?S0(t):null,s=Ps(t),a=Cs(i,t,0,[t.props,r]),o=rd(a);if(pi(),s(),(o||t.sp)&&!Ur(t)&&Wd(t),o){if(a.then(xu,xu),e)return a.then(l=>{Su(t,l)}).catch(l=>{ka(l,t,0)});t.asyncDep=a}else Su(t,a)}else mh(t)}function Su(t,e,n){We(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:_t(e)&&(t.setupState=wd(e)),mh(t)}function mh(t,e,n){const i=t.type;t.render||(t.render=i.render||Gn);{const r=Ps(t);hi();try{Bm(t)}finally{pi(),r()}}}const x0={get(t,e){return Ot(t,"get",""),t[e]}};function S0(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,x0),slots:t.slots,emit:t.emit,expose:e}}function $a(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(wd(im(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in hs)return hs[n](t)},has(e,n){return n in e||n in hs}})):t.proxy}function M0(t,e=!0){return We(t)?t.displayName||t.name:t.name||e&&t.__name}function E0(t){return We(t)&&"__vccOpts"in t}const bn=(t,e)=>lm(t,e,Es);function Uc(t,e,n){try{Pa(-1);const i=arguments.length;return i===2?_t(e)&&!ze(e)?Ms(e)?vt(t,null,[e]):vt(t,e):vt(t,null,e):(i>3?n=Array.prototype.slice.call(arguments,2):i===3&&Ms(n)&&(n=[n]),vt(t,e,n))}finally{Pa(1)}}const y0="3.5.26";let hl;const Mu=typeof window<"u"&&window.trustedTypes;if(Mu)try{hl=Mu.createPolicy("vue",{createHTML:t=>t})}catch{}const gh=hl?t=>hl.createHTML(t):t=>t,b0="http://www.w3.org/2000/svg",T0="http://www.w3.org/1998/Math/MathML",ni=typeof document<"u"?document:null,Eu=ni&&ni.createElement("template"),A0={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,i)=>{const r=e==="svg"?ni.createElementNS(b0,t):e==="mathml"?ni.createElementNS(T0,t):n?ni.createElement(t,{is:n}):ni.createElement(t);return t==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:t=>ni.createTextNode(t),createComment:t=>ni.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>ni.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,i,r,s){const a=n?n.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===s||!(r=r.nextSibling)););else{Eu.innerHTML=gh(i==="svg"?`<svg>${t}</svg>`:i==="mathml"?`<math>${t}</math>`:t);const o=Eu.content;if(i==="svg"||i==="mathml"){const l=o.firstChild;for(;l.firstChild;)o.appendChild(l.firstChild);o.removeChild(l)}e.insertBefore(o,n)}return[a?a.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},Ei="transition",jr="animation",ys=Symbol("_vtc"),_h={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},w0=It({},Vd,_h),R0=t=>(t.displayName="Transition",t.props=w0,t),C0=R0((t,{slots:e})=>Uc(Em,P0(t),e)),Yi=(t,e=[])=>{ze(t)?t.forEach(n=>n(...e)):t&&t(...e)},yu=t=>t?ze(t)?t.some(e=>e.length>1):t.length>1:!1;function P0(t){const e={};for(const N in t)N in _h||(e[N]=t[N]);if(t.css===!1)return e;const{name:n="v",type:i,duration:r,enterFromClass:s=`${n}-enter-from`,enterActiveClass:a=`${n}-enter-active`,enterToClass:o=`${n}-enter-to`,appearFromClass:l=s,appearActiveClass:c=a,appearToClass:u=o,leaveFromClass:f=`${n}-leave-from`,leaveActiveClass:d=`${n}-leave-active`,leaveToClass:h=`${n}-leave-to`}=t,_=D0(r),v=_&&_[0],m=_&&_[1],{onBeforeEnter:p,onEnter:b,onEnterCancelled:T,onLeave:M,onLeaveCancelled:w,onBeforeAppear:P=p,onAppear:D=b,onAppearCancelled:z=T}=e,x=(N,G,ne,te)=>{N._enterCancelled=te,$i(N,G?u:o),$i(N,G?c:a),ne&&ne()},y=(N,G)=>{N._isLeaving=!1,$i(N,f),$i(N,h),$i(N,d),G&&G()},L=N=>(G,ne)=>{const te=N?D:b,K=()=>x(G,N,ne);Yi(te,[G,K]),bu(()=>{$i(G,N?l:s),Kn(G,N?u:o),yu(te)||Tu(G,i,v,K)})};return It(e,{onBeforeEnter(N){Yi(p,[N]),Kn(N,s),Kn(N,a)},onBeforeAppear(N){Yi(P,[N]),Kn(N,l),Kn(N,c)},onEnter:L(!1),onAppear:L(!0),onLeave(N,G){N._isLeaving=!0;const ne=()=>y(N,G);Kn(N,f),N._enterCancelled?(Kn(N,d),Ru(N)):(Ru(N),Kn(N,d)),bu(()=>{N._isLeaving&&($i(N,f),Kn(N,h),yu(M)||Tu(N,i,m,ne))}),Yi(M,[N,ne])},onEnterCancelled(N){x(N,!1,void 0,!0),Yi(T,[N])},onAppearCancelled(N){x(N,!0,void 0,!0),Yi(z,[N])},onLeaveCancelled(N){y(N),Yi(w,[N])}})}function D0(t){if(t==null)return null;if(_t(t))return[mo(t.enter),mo(t.leave)];{const e=mo(t);return[e,e]}}function mo(t){return Pp(t)}function Kn(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[ys]||(t[ys]=new Set)).add(e)}function $i(t,e){e.split(/\s+/).forEach(i=>i&&t.classList.remove(i));const n=t[ys];n&&(n.delete(e),n.size||(t[ys]=void 0))}function bu(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let I0=0;function Tu(t,e,n,i){const r=t._endId=++I0,s=()=>{r===t._endId&&i()};if(n!=null)return setTimeout(s,n);const{type:a,timeout:o,propCount:l}=L0(t,e);if(!a)return i();const c=a+"end";let u=0;const f=()=>{t.removeEventListener(c,d),s()},d=h=>{h.target===t&&++u>=l&&f()};setTimeout(()=>{u<l&&f()},o+1),t.addEventListener(c,d)}function L0(t,e){const n=window.getComputedStyle(t),i=_=>(n[_]||"").split(", "),r=i(`${Ei}Delay`),s=i(`${Ei}Duration`),a=Au(r,s),o=i(`${jr}Delay`),l=i(`${jr}Duration`),c=Au(o,l);let u=null,f=0,d=0;e===Ei?a>0&&(u=Ei,f=a,d=s.length):e===jr?c>0&&(u=jr,f=c,d=l.length):(f=Math.max(a,c),u=f>0?a>c?Ei:jr:null,d=u?u===Ei?s.length:l.length:0);const h=u===Ei&&/\b(?:transform|all)(?:,|$)/.test(i(`${Ei}Property`).toString());return{type:u,timeout:f,propCount:d,hasTransform:h}}function Au(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,i)=>wu(n)+wu(t[i])))}function wu(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function Ru(t){return(t?t.ownerDocument:document).body.offsetHeight}function U0(t,e,n){const i=t[ys];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Cu=Symbol("_vod"),N0=Symbol("_vsh"),F0=Symbol(""),O0=/(?:^|;)\s*display\s*:/;function B0(t,e,n){const i=t.style,r=Et(n);let s=!1;if(n&&!r){if(e)if(Et(e))for(const a of e.split(";")){const o=a.slice(0,a.indexOf(":")).trim();n[o]==null&&va(i,o,"")}else for(const a in e)n[a]==null&&va(i,a,"");for(const a in n)a==="display"&&(s=!0),va(i,a,n[a])}else if(r){if(e!==n){const a=i[F0];a&&(n+=";"+a),i.cssText=n,s=O0.test(n)}}else e&&t.removeAttribute("style");Cu in t&&(t[Cu]=s?i.display:"",t[N0]&&(i.display="none"))}const Pu=/\s*!important$/;function va(t,e,n){if(ze(n))n.forEach(i=>va(t,e,i));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const i=V0(t,e);Pu.test(n)?t.setProperty(Gi(i),n.replace(Pu,""),"important"):t[i]=n}}const Du=["Webkit","Moz","ms"],go={};function V0(t,e){const n=go[e];if(n)return n;let i=xn(e);if(i!=="filter"&&i in t)return go[e]=i;i=Ba(i);for(let r=0;r<Du.length;r++){const s=Du[r]+i;if(s in t)return go[e]=s}return e}const Iu="http://www.w3.org/1999/xlink";function Lu(t,e,n,i,r,s=Fp(e)){i&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(Iu,e.slice(6,e.length)):t.setAttributeNS(Iu,e,n):n==null||s&&!ld(n)?t.removeAttribute(e):t.setAttribute(e,s?"":Si(n)?String(n):n)}function Uu(t,e,n,i,r){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?gh(n):n);return}const s=t.tagName;if(e==="value"&&s!=="PROGRESS"&&!s.includes("-")){const o=s==="OPTION"?t.getAttribute("value")||"":t.value,l=n==null?t.type==="checkbox"?"on":"":String(n);(o!==l||!("_value"in t))&&(t.value=l),n==null&&t.removeAttribute(e),t._value=n;return}let a=!1;if(n===""||n==null){const o=typeof t[e];o==="boolean"?n=ld(n):n==null&&o==="string"?(n="",a=!0):o==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(r||e)}function Cr(t,e,n,i){t.addEventListener(e,n,i)}function z0(t,e,n,i){t.removeEventListener(e,n,i)}const Nu=Symbol("_vei");function G0(t,e,n,i,r=null){const s=t[Nu]||(t[Nu]={}),a=s[e];if(i&&a)a.value=i;else{const[o,l]=H0(e);if(i){const c=s[e]=X0(i,r);Cr(t,o,c,l)}else a&&(z0(t,o,a,l),s[e]=void 0)}}const Fu=/(?:Once|Passive|Capture)$/;function H0(t){let e;if(Fu.test(t)){e={};let i;for(;i=t.match(Fu);)t=t.slice(0,t.length-i[0].length),e[i[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Gi(t.slice(2)),e]}let _o=0;const k0=Promise.resolve(),W0=()=>_o||(k0.then(()=>_o=0),_o=Date.now());function X0(t,e){const n=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=n.attached)return;Cn(q0(i,n.value),e,5,[i])};return n.value=t,n.attached=W0(),n}function q0(t,e){if(ze(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(i=>r=>!r._stopped&&i&&i(r))}else return e}const Ou=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,Y0=(t,e,n,i,r,s)=>{const a=r==="svg";e==="class"?U0(t,i,a):e==="style"?B0(t,n,i):Na(e)?mc(e)||G0(t,e,n,i,s):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):$0(t,e,i,a))?(Uu(t,e,i),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Lu(t,e,i,a,s,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!Et(i))?Uu(t,xn(e),i,s,e):(e==="true-value"?t._trueValue=i:e==="false-value"&&(t._falseValue=i),Lu(t,e,i,a))};function $0(t,e,n,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in t&&Ou(e)&&We(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&t.tagName==="IFRAME"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=t.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return Ou(e)&&Et(n)?!1:e in t}const Bu=t=>{const e=t.props["onUpdate:modelValue"]||!1;return ze(e)?n=>ha(e,n):e};function K0(t){t.target.composing=!0}function Vu(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const vo=Symbol("_assign");function zu(t,e,n){return e&&(t=t.trim()),n&&(t=vc(t)),t}const j0={created(t,{modifiers:{lazy:e,trim:n,number:i}},r){t[vo]=Bu(r);const s=i||r.props&&r.props.type==="number";Cr(t,e?"change":"input",a=>{a.target.composing||t[vo](zu(t.value,n,s))}),(n||s)&&Cr(t,"change",()=>{t.value=zu(t.value,n,s)}),e||(Cr(t,"compositionstart",K0),Cr(t,"compositionend",Vu),Cr(t,"change",Vu))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:i,trim:r,number:s}},a){if(t[vo]=Bu(a),t.composing)return;const o=(s||t.type==="number")&&!/^0\d/.test(t.value)?vc(t.value):t.value,l=e??"";o!==l&&(document.activeElement===t&&t.type!=="range"&&(i&&e===n||r&&t.value.trim()===l)||(t.value=l))}},Z0=["ctrl","shift","alt","meta"],J0={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>Z0.some(n=>t[`${n}Key`]&&!e.includes(n))},Q0=(t,e)=>{const n=t._withMods||(t._withMods={}),i=e.join(".");return n[i]||(n[i]=((r,...s)=>{for(let a=0;a<e.length;a++){const o=J0[e[a]];if(o&&o(r,e))return}return t(r,...s)}))},eg={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},tg=(t,e)=>{const n=t._withKeys||(t._withKeys={}),i=e.join(".");return n[i]||(n[i]=(r=>{if(!("key"in r))return;const s=Gi(r.key);if(e.some(a=>a===s||eg[a]===s))return t(r)}))},ng=It({patchProp:Y0},A0);let Gu;function ig(){return Gu||(Gu=r0(ng))}const rg=((...t)=>{const e=ig().createApp(...t),{mount:n}=e;return e.mount=i=>{const r=ag(i);if(!r)return;const s=e._component;!We(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const a=n(r,!1,sg(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),a},e});function sg(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function ag(t){return Et(t)?document.querySelector(t):t}const Nc="182",og=0,Hu=1,lg=2,xa=1,cg=2,as=3,zi=0,nn=1,oi=2,ui=0,Fr=1,pl=2,ku=3,Wu=4,ug=5,rr=100,fg=101,dg=102,hg=103,pg=104,mg=200,gg=201,_g=202,vg=203,ml=204,gl=205,xg=206,Sg=207,Mg=208,Eg=209,yg=210,bg=211,Tg=212,Ag=213,wg=214,_l=0,vl=1,xl=2,Vr=3,Sl=4,Ml=5,El=6,yl=7,vh=0,Rg=1,Cg=2,kn=0,xh=1,Sh=2,Mh=3,Eh=4,yh=5,bh=6,Th=7,Ah=300,fr=301,zr=302,bl=303,Tl=304,Ka=306,Al=1e3,li=1001,wl=1002,Ut=1003,Pg=1004,Ws=1005,Gt=1006,xo=1007,ar=1008,_n=1009,wh=1010,Rh=1011,bs=1012,Fc=1013,Xn=1014,Vn=1015,gi=1016,Oc=1017,Bc=1018,Ts=1020,Ch=35902,Ph=35899,Dh=1021,Ih=1022,An=1023,_i=1026,or=1027,Lh=1028,Vc=1029,Gr=1030,zc=1031,Gc=1033,Sa=33776,Ma=33777,Ea=33778,ya=33779,Rl=35840,Cl=35841,Pl=35842,Dl=35843,Il=36196,Ll=37492,Ul=37496,Nl=37488,Fl=37489,Ol=37490,Bl=37491,Vl=37808,zl=37809,Gl=37810,Hl=37811,kl=37812,Wl=37813,Xl=37814,ql=37815,Yl=37816,$l=37817,Kl=37818,jl=37819,Zl=37820,Jl=37821,Ql=36492,ec=36494,tc=36495,nc=36283,ic=36284,rc=36285,sc=36286,Dg=3200,Ig=0,Lg=1,Ni="",mn="srgb",Hr="srgb-linear",Ia="linear",ot="srgb",pr=7680,Xu=519,Ug=512,Ng=513,Fg=514,Hc=515,Og=516,Bg=517,kc=518,Vg=519,qu=35044,Yu="300 es",zn=2e3,La=2001;function Uh(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Ua(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function zg(){const t=Ua("canvas");return t.style.display="block",t}const $u={};function Ku(...t){const e="THREE."+t.shift();console.log(e,...t)}function ke(...t){const e="THREE."+t.shift();console.warn(e,...t)}function et(...t){const e="THREE."+t.shift();console.error(e,...t)}function As(...t){const e=t.join(" ");e in $u||($u[e]=!0,ke(...t))}function Gg(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}class qr{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const Nt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],So=Math.PI/180,ac=180/Math.PI;function Ds(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Nt[t&255]+Nt[t>>8&255]+Nt[t>>16&255]+Nt[t>>24&255]+"-"+Nt[e&255]+Nt[e>>8&255]+"-"+Nt[e>>16&15|64]+Nt[e>>24&255]+"-"+Nt[n&63|128]+Nt[n>>8&255]+"-"+Nt[n>>16&255]+Nt[n>>24&255]+Nt[i&255]+Nt[i>>8&255]+Nt[i>>16&255]+Nt[i>>24&255]).toLowerCase()}function Ke(t,e,n){return Math.max(e,Math.min(n,t))}function Hg(t,e){return(t%e+e)%e}function Mo(t,e,n){return(1-n)*t+n*e}function Zr(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function en(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class ut{constructor(e=0,n=0){ut.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Ke(this.x,e.x,n.x),this.y=Ke(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=Ke(this.x,e,n),this.y=Ke(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ke(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Ke(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Is{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,a,o){let l=i[r+0],c=i[r+1],u=i[r+2],f=i[r+3],d=s[a+0],h=s[a+1],_=s[a+2],v=s[a+3];if(o<=0){e[n+0]=l,e[n+1]=c,e[n+2]=u,e[n+3]=f;return}if(o>=1){e[n+0]=d,e[n+1]=h,e[n+2]=_,e[n+3]=v;return}if(f!==v||l!==d||c!==h||u!==_){let m=l*d+c*h+u*_+f*v;m<0&&(d=-d,h=-h,_=-_,v=-v,m=-m);let p=1-o;if(m<.9995){const b=Math.acos(m),T=Math.sin(b);p=Math.sin(p*b)/T,o=Math.sin(o*b)/T,l=l*p+d*o,c=c*p+h*o,u=u*p+_*o,f=f*p+v*o}else{l=l*p+d*o,c=c*p+h*o,u=u*p+_*o,f=f*p+v*o;const b=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=b,c*=b,u*=b,f*=b}}e[n]=l,e[n+1]=c,e[n+2]=u,e[n+3]=f}static multiplyQuaternionsFlat(e,n,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],u=i[r+3],f=s[a],d=s[a+1],h=s[a+2],_=s[a+3];return e[n]=o*_+u*f+l*h-c*d,e[n+1]=l*_+u*d+c*f-o*h,e[n+2]=c*_+u*h+o*d-l*f,e[n+3]=u*_-o*f-l*d-c*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(r/2),f=o(s/2),d=l(i/2),h=l(r/2),_=l(s/2);switch(a){case"XYZ":this._x=d*u*f+c*h*_,this._y=c*h*f-d*u*_,this._z=c*u*_+d*h*f,this._w=c*u*f-d*h*_;break;case"YXZ":this._x=d*u*f+c*h*_,this._y=c*h*f-d*u*_,this._z=c*u*_-d*h*f,this._w=c*u*f+d*h*_;break;case"ZXY":this._x=d*u*f-c*h*_,this._y=c*h*f+d*u*_,this._z=c*u*_+d*h*f,this._w=c*u*f-d*h*_;break;case"ZYX":this._x=d*u*f-c*h*_,this._y=c*h*f+d*u*_,this._z=c*u*_-d*h*f,this._w=c*u*f+d*h*_;break;case"YZX":this._x=d*u*f+c*h*_,this._y=c*h*f+d*u*_,this._z=c*u*_-d*h*f,this._w=c*u*f-d*h*_;break;case"XZY":this._x=d*u*f-c*h*_,this._y=c*h*f-d*u*_,this._z=c*u*_+d*h*f,this._w=c*u*f+d*h*_;break;default:ke("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],a=n[1],o=n[5],l=n[9],c=n[2],u=n[6],f=n[10],d=i+o+f;if(d>0){const h=.5/Math.sqrt(d+1);this._w=.25/h,this._x=(u-l)*h,this._y=(s-c)*h,this._z=(a-r)*h}else if(i>o&&i>f){const h=2*Math.sqrt(1+i-o-f);this._w=(u-l)/h,this._x=.25*h,this._y=(r+a)/h,this._z=(s+c)/h}else if(o>f){const h=2*Math.sqrt(1+o-i-f);this._w=(s-c)/h,this._x=(r+a)/h,this._y=.25*h,this._z=(l+u)/h}else{const h=2*Math.sqrt(1+f-i-o);this._w=(a-r)/h,this._x=(s+c)/h,this._y=(l+u)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ke(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,a=e._w,o=n._x,l=n._y,c=n._z,u=n._w;return this._x=i*u+a*o+r*c-s*l,this._y=r*u+a*l+s*o-i*c,this._z=s*u+a*c+i*l-r*o,this._w=a*u-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n<=0)return this;if(n>=1)return this.copy(e);let i=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,r=-r,s=-s,a=-a,o=-o);let l=1-n;if(o<.9995){const c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,n=Math.sin(n*c)/u,this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+a*n,this._onChangeCallback()}else this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+a*n,this.normalize();return this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Y{constructor(e=0,n=0,i=0){Y.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(ju.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(ju.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*i),u=2*(o*n-s*r),f=2*(s*i-a*n);return this.x=n+l*c+a*f-o*u,this.y=i+l*u+o*c-s*f,this.z=r+l*f+s*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Ke(this.x,e.x,n.x),this.y=Ke(this.y,e.y,n.y),this.z=Ke(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=Ke(this.x,e,n),this.y=Ke(this.y,e,n),this.z=Ke(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ke(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,a=n.x,o=n.y,l=n.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Eo.copy(this).projectOnVector(e),this.sub(Eo)}reflect(e){return this.sub(Eo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Ke(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Eo=new Y,ju=new Is;class qe{constructor(e,n,i,r,s,a,o,l,c){qe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,c)}set(e,n,i,r,s,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=n,u[4]=s,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],u=i[4],f=i[7],d=i[2],h=i[5],_=i[8],v=r[0],m=r[3],p=r[6],b=r[1],T=r[4],M=r[7],w=r[2],P=r[5],D=r[8];return s[0]=a*v+o*b+l*w,s[3]=a*m+o*T+l*P,s[6]=a*p+o*M+l*D,s[1]=c*v+u*b+f*w,s[4]=c*m+u*T+f*P,s[7]=c*p+u*M+f*D,s[2]=d*v+h*b+_*w,s[5]=d*m+h*T+_*P,s[8]=d*p+h*M+_*D,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return n*a*u-n*o*c-i*s*u+i*o*l+r*s*c-r*a*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=u*a-o*c,d=o*l-u*s,h=c*s-a*l,_=n*f+i*d+r*h;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/_;return e[0]=f*v,e[1]=(r*c-u*i)*v,e[2]=(o*i-r*a)*v,e[3]=d*v,e[4]=(u*n-r*l)*v,e[5]=(r*s-o*n)*v,e[6]=h*v,e[7]=(i*l-c*n)*v,e[8]=(a*n-i*s)*v,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+n,0,0,1),this}scale(e,n){return this.premultiply(yo.makeScale(e,n)),this}rotate(e){return this.premultiply(yo.makeRotation(-e)),this}translate(e,n){return this.premultiply(yo.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const yo=new qe,Zu=new qe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ju=new qe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function kg(){const t={enabled:!0,workingColorSpace:Hr,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===ot&&(r.r=fi(r.r),r.g=fi(r.g),r.b=fi(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ot&&(r.r=Or(r.r),r.g=Or(r.g),r.b=Or(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Ni?Ia:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return As("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return As("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[Hr]:{primaries:e,whitePoint:i,transfer:Ia,toXYZ:Zu,fromXYZ:Ju,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:mn},outputColorSpaceConfig:{drawingBufferColorSpace:mn}},[mn]:{primaries:e,whitePoint:i,transfer:ot,toXYZ:Zu,fromXYZ:Ju,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:mn}}}),t}const Je=kg();function fi(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Or(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let mr;class Wg{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{mr===void 0&&(mr=Ua("canvas")),mr.width=e.width,mr.height=e.height;const r=mr.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=mr}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Ua("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=fi(s[a]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(fi(n[i]/255)*255):n[i]=fi(n[i]);return{data:n,width:e.width,height:e.height}}else return ke("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Xg=0;class Wc{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Xg++}),this.uuid=Ds(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayHeight,n.displayWidth,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(bo(r[a].image)):s.push(bo(r[a]))}else s=bo(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function bo(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?Wg.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(ke("Texture: Unable to serialize Texture."),{})}let qg=0;const To=new Y;class Zt extends qr{constructor(e=Zt.DEFAULT_IMAGE,n=Zt.DEFAULT_MAPPING,i=li,r=li,s=Gt,a=ar,o=An,l=_n,c=Zt.DEFAULT_ANISOTROPY,u=Ni){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:qg++}),this.uuid=Ds(),this.name="",this.source=new Wc(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ut(0,0),this.repeat=new ut(1,1),this.center=new ut(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new qe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(To).x}get height(){return this.source.getSize(To).y}get depth(){return this.source.getSize(To).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){ke(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){ke(`Texture.setValues(): property '${n}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ah)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Al:e.x=e.x-Math.floor(e.x);break;case li:e.x=e.x<0?0:1;break;case wl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Al:e.y=e.y-Math.floor(e.y);break;case li:e.y=e.y<0?0:1;break;case wl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Zt.DEFAULT_IMAGE=null;Zt.DEFAULT_MAPPING=Ah;Zt.DEFAULT_ANISOTROPY=1;class yt{constructor(e=0,n=0,i=0,r=1){yt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*n+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*n+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*n+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*n+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],u=l[4],f=l[8],d=l[1],h=l[5],_=l[9],v=l[2],m=l[6],p=l[10];if(Math.abs(u-d)<.01&&Math.abs(f-v)<.01&&Math.abs(_-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(f+v)<.1&&Math.abs(_+m)<.1&&Math.abs(c+h+p-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const T=(c+1)/2,M=(h+1)/2,w=(p+1)/2,P=(u+d)/4,D=(f+v)/4,z=(_+m)/4;return T>M&&T>w?T<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(T),r=P/i,s=D/i):M>w?M<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(M),i=P/r,s=z/r):w<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(w),i=D/s,r=z/s),this.set(i,r,s,n),this}let b=Math.sqrt((m-_)*(m-_)+(f-v)*(f-v)+(d-u)*(d-u));return Math.abs(b)<.001&&(b=1),this.x=(m-_)/b,this.y=(f-v)/b,this.z=(d-u)/b,this.w=Math.acos((c+h+p-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Ke(this.x,e.x,n.x),this.y=Ke(this.y,e.y,n.y),this.z=Ke(this.z,e.z,n.z),this.w=Ke(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=Ke(this.x,e,n),this.y=Ke(this.y,e,n),this.z=Ke(this.z,e,n),this.w=Ke(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ke(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Yg extends qr{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Gt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new yt(0,0,e,n),this.scissorTest=!1,this.viewport=new yt(0,0,e,n);const r={width:e,height:n,depth:i.depth},s=new Zt(r);this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const n={minFilter:Gt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const r=Object.assign({},e.textures[n].image);this.textures[n].source=new Wc(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Wn extends Yg{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class Nh extends Zt{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Ut,this.minFilter=Ut,this.wrapR=li,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class $g extends Zt{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Ut,this.minFilter=Ut,this.wrapR=li,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ls{constructor(e=new Y(1/0,1/0,1/0),n=new Y(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Sn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Sn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Sn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Sn):Sn.fromBufferAttribute(s,a),Sn.applyMatrix4(e.matrixWorld),this.expandByPoint(Sn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Xs.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Xs.copy(i.boundingBox)),Xs.applyMatrix4(e.matrixWorld),this.union(Xs)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Sn),Sn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Jr),qs.subVectors(this.max,Jr),gr.subVectors(e.a,Jr),_r.subVectors(e.b,Jr),vr.subVectors(e.c,Jr),yi.subVectors(_r,gr),bi.subVectors(vr,_r),Ki.subVectors(gr,vr);let n=[0,-yi.z,yi.y,0,-bi.z,bi.y,0,-Ki.z,Ki.y,yi.z,0,-yi.x,bi.z,0,-bi.x,Ki.z,0,-Ki.x,-yi.y,yi.x,0,-bi.y,bi.x,0,-Ki.y,Ki.x,0];return!Ao(n,gr,_r,vr,qs)||(n=[1,0,0,0,1,0,0,0,1],!Ao(n,gr,_r,vr,qs))?!1:(Ys.crossVectors(yi,bi),n=[Ys.x,Ys.y,Ys.z],Ao(n,gr,_r,vr,qs))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Sn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Sn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(jn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),jn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),jn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),jn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),jn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),jn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),jn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),jn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(jn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const jn=[new Y,new Y,new Y,new Y,new Y,new Y,new Y,new Y],Sn=new Y,Xs=new Ls,gr=new Y,_r=new Y,vr=new Y,yi=new Y,bi=new Y,Ki=new Y,Jr=new Y,qs=new Y,Ys=new Y,ji=new Y;function Ao(t,e,n,i,r){for(let s=0,a=t.length-3;s<=a;s+=3){ji.fromArray(t,s);const o=r.x*Math.abs(ji.x)+r.y*Math.abs(ji.y)+r.z*Math.abs(ji.z),l=e.dot(ji),c=n.dot(ji),u=i.dot(ji);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const Kg=new Ls,Qr=new Y,wo=new Y;class ja{constructor(e=new Y,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):Kg.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Qr.subVectors(e,this.center);const n=Qr.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Qr,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(wo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Qr.copy(e.center).add(wo)),this.expandByPoint(Qr.copy(e.center).sub(wo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Zn=new Y,Ro=new Y,$s=new Y,Ti=new Y,Co=new Y,Ks=new Y,Po=new Y;class Fh{constructor(e=new Y,n=new Y(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Zn)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Zn.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Zn.copy(this.origin).addScaledVector(this.direction,n),Zn.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Ro.copy(e).add(n).multiplyScalar(.5),$s.copy(n).sub(e).normalize(),Ti.copy(this.origin).sub(Ro);const s=e.distanceTo(n)*.5,a=-this.direction.dot($s),o=Ti.dot(this.direction),l=-Ti.dot($s),c=Ti.lengthSq(),u=Math.abs(1-a*a);let f,d,h,_;if(u>0)if(f=a*l-o,d=a*o-l,_=s*u,f>=0)if(d>=-_)if(d<=_){const v=1/u;f*=v,d*=v,h=f*(f+a*d+2*o)+d*(a*f+d+2*l)+c}else d=s,f=Math.max(0,-(a*d+o)),h=-f*f+d*(d+2*l)+c;else d=-s,f=Math.max(0,-(a*d+o)),h=-f*f+d*(d+2*l)+c;else d<=-_?(f=Math.max(0,-(-a*s+o)),d=f>0?-s:Math.min(Math.max(-s,-l),s),h=-f*f+d*(d+2*l)+c):d<=_?(f=0,d=Math.min(Math.max(-s,-l),s),h=d*(d+2*l)+c):(f=Math.max(0,-(a*s+o)),d=f>0?s:Math.min(Math.max(-s,-l),s),h=-f*f+d*(d+2*l)+c);else d=a>0?-s:s,f=Math.max(0,-(a*d+o)),h=-f*f+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Ro).addScaledVector($s,d),h}intersectSphere(e,n){Zn.subVectors(e.center,this.origin);const i=Zn.dot(this.direction),r=Zn.dot(Zn)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),u>=0?(s=(e.min.y-d.y)*u,a=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,a=(e.min.y-d.y)*u),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),f>=0?(o=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(o=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,Zn)!==null}intersectTriangle(e,n,i,r,s){Co.subVectors(n,e),Ks.subVectors(i,e),Po.crossVectors(Co,Ks);let a=this.direction.dot(Po),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Ti.subVectors(this.origin,e);const l=o*this.direction.dot(Ks.crossVectors(Ti,Ks));if(l<0)return null;const c=o*this.direction.dot(Co.cross(Ti));if(c<0||l+c>a)return null;const u=-o*Ti.dot(Po);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class bt{constructor(e,n,i,r,s,a,o,l,c,u,f,d,h,_,v,m){bt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,c,u,f,d,h,_,v,m)}set(e,n,i,r,s,a,o,l,c,u,f,d,h,_,v,m){const p=this.elements;return p[0]=e,p[4]=n,p[8]=i,p[12]=r,p[1]=s,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=u,p[10]=f,p[14]=d,p[3]=h,p[7]=_,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new bt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return this.determinant()===0?(e.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const n=this.elements,i=e.elements,r=1/xr.setFromMatrixColumn(e,0).length(),s=1/xr.setFromMatrixColumn(e,1).length(),a=1/xr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*a,n[9]=i[9]*a,n[10]=i[10]*a,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const d=a*u,h=a*f,_=o*u,v=o*f;n[0]=l*u,n[4]=-l*f,n[8]=c,n[1]=h+_*c,n[5]=d-v*c,n[9]=-o*l,n[2]=v-d*c,n[6]=_+h*c,n[10]=a*l}else if(e.order==="YXZ"){const d=l*u,h=l*f,_=c*u,v=c*f;n[0]=d+v*o,n[4]=_*o-h,n[8]=a*c,n[1]=a*f,n[5]=a*u,n[9]=-o,n[2]=h*o-_,n[6]=v+d*o,n[10]=a*l}else if(e.order==="ZXY"){const d=l*u,h=l*f,_=c*u,v=c*f;n[0]=d-v*o,n[4]=-a*f,n[8]=_+h*o,n[1]=h+_*o,n[5]=a*u,n[9]=v-d*o,n[2]=-a*c,n[6]=o,n[10]=a*l}else if(e.order==="ZYX"){const d=a*u,h=a*f,_=o*u,v=o*f;n[0]=l*u,n[4]=_*c-h,n[8]=d*c+v,n[1]=l*f,n[5]=v*c+d,n[9]=h*c-_,n[2]=-c,n[6]=o*l,n[10]=a*l}else if(e.order==="YZX"){const d=a*l,h=a*c,_=o*l,v=o*c;n[0]=l*u,n[4]=v-d*f,n[8]=_*f+h,n[1]=f,n[5]=a*u,n[9]=-o*u,n[2]=-c*u,n[6]=h*f+_,n[10]=d-v*f}else if(e.order==="XZY"){const d=a*l,h=a*c,_=o*l,v=o*c;n[0]=l*u,n[4]=-f,n[8]=c*u,n[1]=d*f+v,n[5]=a*u,n[9]=h*f-_,n[2]=_*f-h,n[6]=o*u,n[10]=v*f+d}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(jg,e,Zg)}lookAt(e,n,i){const r=this.elements;return ln.subVectors(e,n),ln.lengthSq()===0&&(ln.z=1),ln.normalize(),Ai.crossVectors(i,ln),Ai.lengthSq()===0&&(Math.abs(i.z)===1?ln.x+=1e-4:ln.z+=1e-4,ln.normalize(),Ai.crossVectors(i,ln)),Ai.normalize(),js.crossVectors(ln,Ai),r[0]=Ai.x,r[4]=js.x,r[8]=ln.x,r[1]=Ai.y,r[5]=js.y,r[9]=ln.y,r[2]=Ai.z,r[6]=js.z,r[10]=ln.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],u=i[1],f=i[5],d=i[9],h=i[13],_=i[2],v=i[6],m=i[10],p=i[14],b=i[3],T=i[7],M=i[11],w=i[15],P=r[0],D=r[4],z=r[8],x=r[12],y=r[1],L=r[5],N=r[9],G=r[13],ne=r[2],te=r[6],K=r[10],H=r[14],ee=r[3],ve=r[7],ge=r[11],Se=r[15];return s[0]=a*P+o*y+l*ne+c*ee,s[4]=a*D+o*L+l*te+c*ve,s[8]=a*z+o*N+l*K+c*ge,s[12]=a*x+o*G+l*H+c*Se,s[1]=u*P+f*y+d*ne+h*ee,s[5]=u*D+f*L+d*te+h*ve,s[9]=u*z+f*N+d*K+h*ge,s[13]=u*x+f*G+d*H+h*Se,s[2]=_*P+v*y+m*ne+p*ee,s[6]=_*D+v*L+m*te+p*ve,s[10]=_*z+v*N+m*K+p*ge,s[14]=_*x+v*G+m*H+p*Se,s[3]=b*P+T*y+M*ne+w*ee,s[7]=b*D+T*L+M*te+w*ve,s[11]=b*z+T*N+M*K+w*ge,s[15]=b*x+T*G+M*H+w*Se,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],f=e[6],d=e[10],h=e[14],_=e[3],v=e[7],m=e[11],p=e[15],b=l*h-c*d,T=o*h-c*f,M=o*d-l*f,w=a*h-c*u,P=a*d-l*u,D=a*f-o*u;return n*(v*b-m*T+p*M)-i*(_*b-m*w+p*P)+r*(_*T-v*w+p*D)-s*(_*M-v*P+m*D)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=e[9],d=e[10],h=e[11],_=e[12],v=e[13],m=e[14],p=e[15],b=f*m*c-v*d*c+v*l*h-o*m*h-f*l*p+o*d*p,T=_*d*c-u*m*c-_*l*h+a*m*h+u*l*p-a*d*p,M=u*v*c-_*f*c+_*o*h-a*v*h-u*o*p+a*f*p,w=_*f*l-u*v*l-_*o*d+a*v*d+u*o*m-a*f*m,P=n*b+i*T+r*M+s*w;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const D=1/P;return e[0]=b*D,e[1]=(v*d*s-f*m*s-v*r*h+i*m*h+f*r*p-i*d*p)*D,e[2]=(o*m*s-v*l*s+v*r*c-i*m*c-o*r*p+i*l*p)*D,e[3]=(f*l*s-o*d*s-f*r*c+i*d*c+o*r*h-i*l*h)*D,e[4]=T*D,e[5]=(u*m*s-_*d*s+_*r*h-n*m*h-u*r*p+n*d*p)*D,e[6]=(_*l*s-a*m*s-_*r*c+n*m*c+a*r*p-n*l*p)*D,e[7]=(a*d*s-u*l*s+u*r*c-n*d*c-a*r*h+n*l*h)*D,e[8]=M*D,e[9]=(_*f*s-u*v*s-_*i*h+n*v*h+u*i*p-n*f*p)*D,e[10]=(a*v*s-_*o*s+_*i*c-n*v*c-a*i*p+n*o*p)*D,e[11]=(u*o*s-a*f*s-u*i*c+n*f*c+a*i*h-n*o*h)*D,e[12]=w*D,e[13]=(u*v*r-_*f*r+_*i*d-n*v*d-u*i*m+n*f*m)*D,e[14]=(_*o*r-a*v*r-_*i*l+n*v*l+a*i*m-n*o*m)*D,e[15]=(a*f*r-u*o*r+u*i*l-n*f*l-a*i*d+n*o*d)*D,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,u*o+i,u*l-r*a,0,c*l-r*o,u*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,a=n._y,o=n._z,l=n._w,c=s+s,u=a+a,f=o+o,d=s*c,h=s*u,_=s*f,v=a*u,m=a*f,p=o*f,b=l*c,T=l*u,M=l*f,w=i.x,P=i.y,D=i.z;return r[0]=(1-(v+p))*w,r[1]=(h+M)*w,r[2]=(_-T)*w,r[3]=0,r[4]=(h-M)*P,r[5]=(1-(d+p))*P,r[6]=(m+b)*P,r[7]=0,r[8]=(_+T)*D,r[9]=(m-b)*D,r[10]=(1-(d+v))*D,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;if(e.x=r[12],e.y=r[13],e.z=r[14],this.determinant()===0)return i.set(1,1,1),n.identity(),this;let s=xr.set(r[0],r[1],r[2]).length();const a=xr.set(r[4],r[5],r[6]).length(),o=xr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),Mn.copy(this);const c=1/s,u=1/a,f=1/o;return Mn.elements[0]*=c,Mn.elements[1]*=c,Mn.elements[2]*=c,Mn.elements[4]*=u,Mn.elements[5]*=u,Mn.elements[6]*=u,Mn.elements[8]*=f,Mn.elements[9]*=f,Mn.elements[10]*=f,n.setFromRotationMatrix(Mn),i.x=s,i.y=a,i.z=o,this}makePerspective(e,n,i,r,s,a,o=zn,l=!1){const c=this.elements,u=2*s/(n-e),f=2*s/(i-r),d=(n+e)/(n-e),h=(i+r)/(i-r);let _,v;if(l)_=s/(a-s),v=a*s/(a-s);else if(o===zn)_=-(a+s)/(a-s),v=-2*a*s/(a-s);else if(o===La)_=-a/(a-s),v=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=f,c[9]=h,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,n,i,r,s,a,o=zn,l=!1){const c=this.elements,u=2/(n-e),f=2/(i-r),d=-(n+e)/(n-e),h=-(i+r)/(i-r);let _,v;if(l)_=1/(a-s),v=a/(a-s);else if(o===zn)_=-2/(a-s),v=-(a+s)/(a-s);else if(o===La)_=-1/(a-s),v=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=f,c[9]=0,c[13]=h,c[2]=0,c[6]=0,c[10]=_,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const xr=new Y,Mn=new bt,jg=new Y(0,0,0),Zg=new Y(1,1,1),Ai=new Y,js=new Y,ln=new Y,Qu=new bt,ef=new Is;class vi{constructor(e=0,n=0,i=0,r=vi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],u=r[9],f=r[2],d=r[6],h=r[10];switch(n){case"XYZ":this._y=Math.asin(Ke(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,h),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ke(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,h),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ke(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,h),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Ke(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,h),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ke(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,h));break;case"XZY":this._z=Math.asin(-Ke(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,h),this._y=0);break;default:ke("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Qu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Qu,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return ef.setFromEuler(this),this.setFromQuaternion(ef,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}vi.DEFAULT_ORDER="XYZ";class Oh{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Jg=0;const tf=new Y,Sr=new Is,Jn=new bt,Zs=new Y,es=new Y,Qg=new Y,e_=new Is,nf=new Y(1,0,0),rf=new Y(0,1,0),sf=new Y(0,0,1),af={type:"added"},t_={type:"removed"},Mr={type:"childadded",child:null},Do={type:"childremoved",child:null};class rn extends qr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Jg++}),this.uuid=Ds(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=rn.DEFAULT_UP.clone();const e=new Y,n=new vi,i=new Is,r=new Y(1,1,1);function s(){i.setFromEuler(n,!1)}function a(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new bt},normalMatrix:{value:new qe}}),this.matrix=new bt,this.matrixWorld=new bt,this.matrixAutoUpdate=rn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=rn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Oh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Sr.setFromAxisAngle(e,n),this.quaternion.multiply(Sr),this}rotateOnWorldAxis(e,n){return Sr.setFromAxisAngle(e,n),this.quaternion.premultiply(Sr),this}rotateX(e){return this.rotateOnAxis(nf,e)}rotateY(e){return this.rotateOnAxis(rf,e)}rotateZ(e){return this.rotateOnAxis(sf,e)}translateOnAxis(e,n){return tf.copy(e).applyQuaternion(this.quaternion),this.position.add(tf.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(nf,e)}translateY(e){return this.translateOnAxis(rf,e)}translateZ(e){return this.translateOnAxis(sf,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Jn.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Zs.copy(e):Zs.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),es.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Jn.lookAt(es,Zs,this.up):Jn.lookAt(Zs,es,this.up),this.quaternion.setFromRotationMatrix(Jn),r&&(Jn.extractRotation(r.matrixWorld),Sr.setFromRotationMatrix(Jn),this.quaternion.premultiply(Sr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(et("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(af),Mr.child=e,this.dispatchEvent(Mr),Mr.child=null):et("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(t_),Do.child=e,this.dispatchEvent(Do),Do.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Jn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Jn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Jn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(af),Mr.child=e,this.dispatchEvent(Mr),Mr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,n);if(a!==void 0)return a}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(es,e,Qg),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(es,e_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(n){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),f=a(e.shapes),d=a(e.skeletons),h=a(e.animations),_=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),d.length>0&&(i.skeletons=d),h.length>0&&(i.animations=h),_.length>0&&(i.nodes=_)}return i.object=r,i;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}rn.DEFAULT_UP=new Y(0,1,0);rn.DEFAULT_MATRIX_AUTO_UPDATE=!0;rn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const En=new Y,Qn=new Y,Io=new Y,ei=new Y,Er=new Y,yr=new Y,of=new Y,Lo=new Y,Uo=new Y,No=new Y,Fo=new yt,Oo=new yt,Bo=new yt;class Tn{constructor(e=new Y,n=new Y,i=new Y){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),En.subVectors(e,n),r.cross(En);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){En.subVectors(r,n),Qn.subVectors(i,n),Io.subVectors(e,n);const a=En.dot(En),o=En.dot(Qn),l=En.dot(Io),c=Qn.dot(Qn),u=Qn.dot(Io),f=a*c-o*o;if(f===0)return s.set(0,0,0),null;const d=1/f,h=(c*l-o*u)*d,_=(a*u-o*l)*d;return s.set(1-h-_,_,h)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,ei)===null?!1:ei.x>=0&&ei.y>=0&&ei.x+ei.y<=1}static getInterpolation(e,n,i,r,s,a,o,l){return this.getBarycoord(e,n,i,r,ei)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,ei.x),l.addScaledVector(a,ei.y),l.addScaledVector(o,ei.z),l)}static getInterpolatedAttribute(e,n,i,r,s,a){return Fo.setScalar(0),Oo.setScalar(0),Bo.setScalar(0),Fo.fromBufferAttribute(e,n),Oo.fromBufferAttribute(e,i),Bo.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Fo,s.x),a.addScaledVector(Oo,s.y),a.addScaledVector(Bo,s.z),a}static isFrontFacing(e,n,i,r){return En.subVectors(i,n),Qn.subVectors(e,n),En.cross(Qn).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return En.subVectors(this.c,this.b),Qn.subVectors(this.a,this.b),En.cross(Qn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Tn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Tn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return Tn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Tn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Tn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let a,o;Er.subVectors(r,i),yr.subVectors(s,i),Lo.subVectors(e,i);const l=Er.dot(Lo),c=yr.dot(Lo);if(l<=0&&c<=0)return n.copy(i);Uo.subVectors(e,r);const u=Er.dot(Uo),f=yr.dot(Uo);if(u>=0&&f<=u)return n.copy(r);const d=l*f-u*c;if(d<=0&&l>=0&&u<=0)return a=l/(l-u),n.copy(i).addScaledVector(Er,a);No.subVectors(e,s);const h=Er.dot(No),_=yr.dot(No);if(_>=0&&h<=_)return n.copy(s);const v=h*c-l*_;if(v<=0&&c>=0&&_<=0)return o=c/(c-_),n.copy(i).addScaledVector(yr,o);const m=u*_-h*f;if(m<=0&&f-u>=0&&h-_>=0)return of.subVectors(s,r),o=(f-u)/(f-u+(h-_)),n.copy(r).addScaledVector(of,o);const p=1/(m+v+d);return a=v*p,o=d*p,n.copy(i).addScaledVector(Er,a).addScaledVector(yr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Bh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},wi={h:0,s:0,l:0},Js={h:0,s:0,l:0};function Vo(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class lt{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=mn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Je.colorSpaceToWorking(this,n),this}setRGB(e,n,i,r=Je.workingColorSpace){return this.r=e,this.g=n,this.b=i,Je.colorSpaceToWorking(this,r),this}setHSL(e,n,i,r=Je.workingColorSpace){if(e=Hg(e,1),n=Ke(n,0,1),i=Ke(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,a=2*i-s;this.r=Vo(a,s,e+1/3),this.g=Vo(a,s,e),this.b=Vo(a,s,e-1/3)}return Je.colorSpaceToWorking(this,r),this}setStyle(e,n=mn){function i(s){s!==void 0&&parseFloat(s)<1&&ke("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:ke("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(a===6)return this.setHex(parseInt(s,16),n);ke("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=mn){const i=Bh[e.toLowerCase()];return i!==void 0?this.setHex(i,n):ke("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=fi(e.r),this.g=fi(e.g),this.b=fi(e.b),this}copyLinearToSRGB(e){return this.r=Or(e.r),this.g=Or(e.g),this.b=Or(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=mn){return Je.workingToColorSpace(Ft.copy(this),e),Math.round(Ke(Ft.r*255,0,255))*65536+Math.round(Ke(Ft.g*255,0,255))*256+Math.round(Ke(Ft.b*255,0,255))}getHexString(e=mn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Je.workingColorSpace){Je.workingToColorSpace(Ft.copy(this),n);const i=Ft.r,r=Ft.g,s=Ft.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const f=a-o;switch(c=u<=.5?f/(a+o):f/(2-a-o),a){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,n=Je.workingColorSpace){return Je.workingToColorSpace(Ft.copy(this),n),e.r=Ft.r,e.g=Ft.g,e.b=Ft.b,e}getStyle(e=mn){Je.workingToColorSpace(Ft.copy(this),e);const n=Ft.r,i=Ft.g,r=Ft.b;return e!==mn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(wi),this.setHSL(wi.h+e,wi.s+n,wi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(wi),e.getHSL(Js);const i=Mo(wi.h,Js.h,n),r=Mo(wi.s,Js.s,n),s=Mo(wi.l,Js.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ft=new lt;lt.NAMES=Bh;let n_=0;class Us extends qr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:n_++}),this.uuid=Ds(),this.name="",this.type="Material",this.blending=Fr,this.side=zi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ml,this.blendDst=gl,this.blendEquation=rr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new lt(0,0,0),this.blendAlpha=0,this.depthFunc=Vr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Xu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=pr,this.stencilZFail=pr,this.stencilZPass=pr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){ke(`Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){ke(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Fr&&(i.blending=this.blending),this.side!==zi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==ml&&(i.blendSrc=this.blendSrc),this.blendDst!==gl&&(i.blendDst=this.blendDst),this.blendEquation!==rr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Vr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Xu&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==pr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==pr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==pr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(n){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Vh extends Us{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new lt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vi,this.combine=vh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Tt=new Y,Qs=new ut;let i_=0;class jt{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:i_++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=qu,this.updateRanges=[],this.gpuType=Vn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Qs.fromBufferAttribute(this,n),Qs.applyMatrix3(e),this.setXY(n,Qs.x,Qs.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Tt.fromBufferAttribute(this,n),Tt.applyMatrix3(e),this.setXYZ(n,Tt.x,Tt.y,Tt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Tt.fromBufferAttribute(this,n),Tt.applyMatrix4(e),this.setXYZ(n,Tt.x,Tt.y,Tt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Tt.fromBufferAttribute(this,n),Tt.applyNormalMatrix(e),this.setXYZ(n,Tt.x,Tt.y,Tt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Tt.fromBufferAttribute(this,n),Tt.transformDirection(e),this.setXYZ(n,Tt.x,Tt.y,Tt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Zr(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=en(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Zr(n,this.array)),n}setX(e,n){return this.normalized&&(n=en(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Zr(n,this.array)),n}setY(e,n){return this.normalized&&(n=en(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Zr(n,this.array)),n}setZ(e,n){return this.normalized&&(n=en(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Zr(n,this.array)),n}setW(e,n){return this.normalized&&(n=en(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=en(n,this.array),i=en(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=en(n,this.array),i=en(i,this.array),r=en(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=en(n,this.array),i=en(i,this.array),r=en(r,this.array),s=en(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==qu&&(e.usage=this.usage),e}}class zh extends jt{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class Gh extends jt{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class di extends jt{constructor(e,n,i){super(new Float32Array(e),n,i)}}let r_=0;const pn=new bt,zo=new rn,br=new Y,cn=new Ls,ts=new Ls,Pt=new Y;class In extends qr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:r_++}),this.uuid=Ds(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Uh(e)?Gh:zh)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new qe().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return pn.makeRotationFromQuaternion(e),this.applyMatrix4(pn),this}rotateX(e){return pn.makeRotationX(e),this.applyMatrix4(pn),this}rotateY(e){return pn.makeRotationY(e),this.applyMatrix4(pn),this}rotateZ(e){return pn.makeRotationZ(e),this.applyMatrix4(pn),this}translate(e,n,i){return pn.makeTranslation(e,n,i),this.applyMatrix4(pn),this}scale(e,n,i){return pn.makeScale(e,n,i),this.applyMatrix4(pn),this}lookAt(e){return zo.lookAt(e),zo.updateMatrix(),this.applyMatrix4(zo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(br).negate(),this.translate(br.x,br.y,br.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new di(i,3))}else{const i=Math.min(e.length,n.count);for(let r=0;r<i;r++){const s=e[r];n.setXYZ(r,s.x,s.y,s.z||0)}e.length>n.count&&ke("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ls);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){et("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Y(-1/0,-1/0,-1/0),new Y(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];cn.setFromBufferAttribute(s),this.morphTargetsRelative?(Pt.addVectors(this.boundingBox.min,cn.min),this.boundingBox.expandByPoint(Pt),Pt.addVectors(this.boundingBox.max,cn.max),this.boundingBox.expandByPoint(Pt)):(this.boundingBox.expandByPoint(cn.min),this.boundingBox.expandByPoint(cn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&et('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ja);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){et("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Y,1/0);return}if(e){const i=this.boundingSphere.center;if(cn.setFromBufferAttribute(e),n)for(let s=0,a=n.length;s<a;s++){const o=n[s];ts.setFromBufferAttribute(o),this.morphTargetsRelative?(Pt.addVectors(cn.min,ts.min),cn.expandByPoint(Pt),Pt.addVectors(cn.max,ts.max),cn.expandByPoint(Pt)):(cn.expandByPoint(ts.min),cn.expandByPoint(ts.max))}cn.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)Pt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Pt));if(n)for(let s=0,a=n.length;s<a;s++){const o=n[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Pt.fromBufferAttribute(o,c),l&&(br.fromBufferAttribute(e,c),Pt.add(br)),r=Math.max(r,i.distanceToSquared(Pt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&et('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){et("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new jt(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let z=0;z<i.count;z++)o[z]=new Y,l[z]=new Y;const c=new Y,u=new Y,f=new Y,d=new ut,h=new ut,_=new ut,v=new Y,m=new Y;function p(z,x,y){c.fromBufferAttribute(i,z),u.fromBufferAttribute(i,x),f.fromBufferAttribute(i,y),d.fromBufferAttribute(s,z),h.fromBufferAttribute(s,x),_.fromBufferAttribute(s,y),u.sub(c),f.sub(c),h.sub(d),_.sub(d);const L=1/(h.x*_.y-_.x*h.y);isFinite(L)&&(v.copy(u).multiplyScalar(_.y).addScaledVector(f,-h.y).multiplyScalar(L),m.copy(f).multiplyScalar(h.x).addScaledVector(u,-_.x).multiplyScalar(L),o[z].add(v),o[x].add(v),o[y].add(v),l[z].add(m),l[x].add(m),l[y].add(m))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let z=0,x=b.length;z<x;++z){const y=b[z],L=y.start,N=y.count;for(let G=L,ne=L+N;G<ne;G+=3)p(e.getX(G+0),e.getX(G+1),e.getX(G+2))}const T=new Y,M=new Y,w=new Y,P=new Y;function D(z){w.fromBufferAttribute(r,z),P.copy(w);const x=o[z];T.copy(x),T.sub(w.multiplyScalar(w.dot(x))).normalize(),M.crossVectors(P,x);const L=M.dot(l[z])<0?-1:1;a.setXYZW(z,T.x,T.y,T.z,L)}for(let z=0,x=b.length;z<x;++z){const y=b[z],L=y.start,N=y.count;for(let G=L,ne=L+N;G<ne;G+=3)D(e.getX(G+0)),D(e.getX(G+1)),D(e.getX(G+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new jt(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let d=0,h=i.count;d<h;d++)i.setXYZ(d,0,0,0);const r=new Y,s=new Y,a=new Y,o=new Y,l=new Y,c=new Y,u=new Y,f=new Y;if(e)for(let d=0,h=e.count;d<h;d+=3){const _=e.getX(d+0),v=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(n,_),s.fromBufferAttribute(n,v),a.fromBufferAttribute(n,m),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),o.fromBufferAttribute(i,_),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,m),o.add(u),l.add(u),c.add(u),i.setXYZ(_,o.x,o.y,o.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,h=n.count;d<h;d+=3)r.fromBufferAttribute(n,d+0),s.fromBufferAttribute(n,d+1),a.fromBufferAttribute(n,d+2),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Pt.fromBufferAttribute(e,n),Pt.normalize(),e.setXYZ(n,Pt.x,Pt.y,Pt.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,f=o.normalized,d=new c.constructor(l.length*u);let h=0,_=0;for(let v=0,m=l.length;v<m;v++){o.isInterleavedBufferAttribute?h=l[v]*o.data.stride+o.offset:h=l[v]*u;for(let p=0;p<u;p++)d[_++]=c[h++]}return new jt(d,u,f)}if(this.index===null)return ke("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new In,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);n.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,f=c.length;u<f;u++){const d=c[u],h=e(d,i);l.push(h)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,d=c.length;f<d;f++){const h=c[f];u.push(h.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(n))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let d=0,h=f.length;d<h;d++)u.push(f[d].clone(n));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const lf=new bt,Zi=new Fh,ea=new ja,cf=new Y,ta=new Y,na=new Y,ia=new Y,Go=new Y,ra=new Y,uf=new Y,sa=new Y;class xi extends rn{constructor(e=new In,n=new Vh){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){ra.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],f=s[l];u!==0&&(Go.fromBufferAttribute(f,e),a?ra.addScaledVector(Go,u):ra.addScaledVector(Go.sub(n),u))}n.add(ra)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ea.copy(i.boundingSphere),ea.applyMatrix4(s),Zi.copy(e.ray).recast(e.near),!(ea.containsPoint(Zi.origin)===!1&&(Zi.intersectSphere(ea,cf)===null||Zi.origin.distanceToSquared(cf)>(e.far-e.near)**2))&&(lf.copy(s).invert(),Zi.copy(e.ray).applyMatrix4(lf),!(i.boundingBox!==null&&Zi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Zi)))}_computeIntersections(e,n,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,d=s.groups,h=s.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,v=d.length;_<v;_++){const m=d[_],p=a[m.materialIndex],b=Math.max(m.start,h.start),T=Math.min(o.count,Math.min(m.start+m.count,h.start+h.count));for(let M=b,w=T;M<w;M+=3){const P=o.getX(M),D=o.getX(M+1),z=o.getX(M+2);r=aa(this,p,e,i,c,u,f,P,D,z),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const _=Math.max(0,h.start),v=Math.min(o.count,h.start+h.count);for(let m=_,p=v;m<p;m+=3){const b=o.getX(m),T=o.getX(m+1),M=o.getX(m+2);r=aa(this,a,e,i,c,u,f,b,T,M),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,v=d.length;_<v;_++){const m=d[_],p=a[m.materialIndex],b=Math.max(m.start,h.start),T=Math.min(l.count,Math.min(m.start+m.count,h.start+h.count));for(let M=b,w=T;M<w;M+=3){const P=M,D=M+1,z=M+2;r=aa(this,p,e,i,c,u,f,P,D,z),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const _=Math.max(0,h.start),v=Math.min(l.count,h.start+h.count);for(let m=_,p=v;m<p;m+=3){const b=m,T=m+1,M=m+2;r=aa(this,a,e,i,c,u,f,b,T,M),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}}function s_(t,e,n,i,r,s,a,o){let l;if(e.side===nn?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===zi,o),l===null)return null;sa.copy(o),sa.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(sa);return c<n.near||c>n.far?null:{distance:c,point:sa.clone(),object:t}}function aa(t,e,n,i,r,s,a,o,l,c){t.getVertexPosition(o,ta),t.getVertexPosition(l,na),t.getVertexPosition(c,ia);const u=s_(t,e,n,i,ta,na,ia,uf);if(u){const f=new Y;Tn.getBarycoord(uf,ta,na,ia,f),r&&(u.uv=Tn.getInterpolatedAttribute(r,o,l,c,f,new ut)),s&&(u.uv1=Tn.getInterpolatedAttribute(s,o,l,c,f,new ut)),a&&(u.normal=Tn.getInterpolatedAttribute(a,o,l,c,f,new Y),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new Y,materialIndex:0};Tn.getNormal(ta,na,ia,d.normal),u.face=d,u.barycoord=f}return u}class Ns extends In{constructor(e=1,n=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],f=[];let d=0,h=0;_("z","y","x",-1,-1,i,n,e,a,s,0),_("z","y","x",1,-1,i,n,-e,a,s,1),_("x","z","y",1,1,e,i,n,r,a,2),_("x","z","y",1,-1,e,i,-n,r,a,3),_("x","y","z",1,-1,e,n,i,r,s,4),_("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new di(c,3)),this.setAttribute("normal",new di(u,3)),this.setAttribute("uv",new di(f,2));function _(v,m,p,b,T,M,w,P,D,z,x){const y=M/D,L=w/z,N=M/2,G=w/2,ne=P/2,te=D+1,K=z+1;let H=0,ee=0;const ve=new Y;for(let ge=0;ge<K;ge++){const Se=ge*L-G;for(let Fe=0;Fe<te;Fe++){const Ge=Fe*y-N;ve[v]=Ge*b,ve[m]=Se*T,ve[p]=ne,c.push(ve.x,ve.y,ve.z),ve[v]=0,ve[m]=0,ve[p]=P>0?1:-1,u.push(ve.x,ve.y,ve.z),f.push(Fe/D),f.push(1-ge/z),H+=1}}for(let ge=0;ge<z;ge++)for(let Se=0;Se<D;Se++){const Fe=d+Se+te*ge,Ge=d+Se+te*(ge+1),nt=d+(Se+1)+te*(ge+1),Ze=d+(Se+1)+te*ge;l.push(Fe,Ge,Ze),l.push(Ge,nt,Ze),ee+=6}o.addGroup(h,ee,x),h+=ee,d+=H}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ns(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function kr(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(ke("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function Xt(t){const e={};for(let n=0;n<t.length;n++){const i=kr(t[n]);for(const r in i)e[r]=i[r]}return e}function a_(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function Hh(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Je.workingColorSpace}const o_={clone:kr,merge:Xt};var l_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,c_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class qn extends Us{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=l_,this.fragmentShader=c_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=kr(e.uniforms),this.uniformsGroups=a_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?n.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?n.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?n.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?n.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?n.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?n.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?n.uniforms[r]={type:"m4",value:a.toArray()}:n.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class kh extends rn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new bt,this.projectionMatrix=new bt,this.projectionMatrixInverse=new bt,this.coordinateSystem=zn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ri=new Y,ff=new ut,df=new ut;class gn extends kh{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=ac*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(So*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ac*2*Math.atan(Math.tan(So*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Ri.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ri.x,Ri.y).multiplyScalar(-e/Ri.z),Ri.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ri.x,Ri.y).multiplyScalar(-e/Ri.z)}getViewSize(e,n){return this.getViewBounds(e,ff,df),n.subVectors(df,ff)}setViewOffset(e,n,i,r,s,a){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(So*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,n-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Tr=-90,Ar=1;class u_ extends rn{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new gn(Tr,Ar,e,n);r.layers=this.layers,this.add(r);const s=new gn(Tr,Ar,e,n);s.layers=this.layers,this.add(s);const a=new gn(Tr,Ar,e,n);a.layers=this.layers,this.add(a);const o=new gn(Tr,Ar,e,n);o.layers=this.layers,this.add(o);const l=new gn(Tr,Ar,e,n);l.layers=this.layers,this.add(l);const c=new gn(Tr,Ar,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,a,o,l]=n;for(const c of n)this.remove(c);if(e===zn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===La)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,u]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,a),e.setRenderTarget(i,2,r),e.render(n,o),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,r),e.render(n,u),e.setRenderTarget(f,d,h),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class Wh extends Zt{constructor(e=[],n=fr,i,r,s,a,o,l,c,u){super(e,n,i,r,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Xh extends Wn{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Wh(r),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Ns(5,5,5),s=new qn({name:"CubemapFromEquirect",uniforms:kr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:nn,blending:ui});s.uniforms.tEquirect.value=n;const a=new xi(r,s),o=n.minFilter;return n.minFilter===ar&&(n.minFilter=Gt),new u_(1,10,this).update(e,a),n.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,n=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(n,i,r);e.setRenderTarget(s)}}class oa extends rn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const f_={type:"move"};class Ho{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new oa,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new oa,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Y,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Y),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new oa,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Y,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Y),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const v of e.hand.values()){const m=n.getJointPose(v,i),p=this._getHandJoint(c,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=u.position.distanceTo(f.position),h=.02,_=.005;c.inputState.pinching&&d>h+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=h-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(f_)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new oa;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class d_ extends rn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new vi,this.environmentIntensity=1,this.environmentRotation=new vi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class h_ extends Zt{constructor(e=null,n=1,i=1,r,s,a,o,l,c=Ut,u=Ut,f,d){super(null,a,o,l,c,u,r,s,f,d),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const ko=new Y,p_=new Y,m_=new qe;class nr{constructor(e=new Y(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=ko.subVectors(i,n).cross(p_.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(ko),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||m_.getNormalMatrix(e),r=this.coplanarPoint(ko).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ji=new ja,g_=new ut(.5,.5),la=new Y;class qh{constructor(e=new nr,n=new nr,i=new nr,r=new nr,s=new nr,a=new nr){this.planes=[e,n,i,r,s,a]}set(e,n,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(n),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=zn,i=!1){const r=this.planes,s=e.elements,a=s[0],o=s[1],l=s[2],c=s[3],u=s[4],f=s[5],d=s[6],h=s[7],_=s[8],v=s[9],m=s[10],p=s[11],b=s[12],T=s[13],M=s[14],w=s[15];if(r[0].setComponents(c-a,h-u,p-_,w-b).normalize(),r[1].setComponents(c+a,h+u,p+_,w+b).normalize(),r[2].setComponents(c+o,h+f,p+v,w+T).normalize(),r[3].setComponents(c-o,h-f,p-v,w-T).normalize(),i)r[4].setComponents(l,d,m,M).normalize(),r[5].setComponents(c-l,h-d,p-m,w-M).normalize();else if(r[4].setComponents(c-l,h-d,p-m,w-M).normalize(),n===zn)r[5].setComponents(c+l,h+d,p+m,w+M).normalize();else if(n===La)r[5].setComponents(l,d,m,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ji.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Ji.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ji)}intersectsSprite(e){Ji.center.set(0,0,0);const n=g_.distanceTo(e.center);return Ji.radius=.7071067811865476+n,Ji.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ji)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(la.x=r.normal.x>0?e.max.x:e.min.x,la.y=r.normal.y>0?e.max.y:e.min.y,la.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(la)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Yh extends Us{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new lt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const hf=new bt,oc=new Fh,ca=new ja,ua=new Y;class __ extends rn{constructor(e=new In,n=new Yh){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ca.copy(i.boundingSphere),ca.applyMatrix4(r),ca.radius+=s,e.ray.intersectsSphere(ca)===!1)return;hf.copy(r).invert(),oc.copy(e.ray).applyMatrix4(hf);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,f=i.attributes.position;if(c!==null){const d=Math.max(0,a.start),h=Math.min(c.count,a.start+a.count);for(let _=d,v=h;_<v;_++){const m=c.getX(_);ua.fromBufferAttribute(f,m),pf(ua,m,l,r,e,n,this)}}else{const d=Math.max(0,a.start),h=Math.min(f.count,a.start+a.count);for(let _=d,v=h;_<v;_++)ua.fromBufferAttribute(f,_),pf(ua,_,l,r,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function pf(t,e,n,i,r,s,a){const o=oc.distanceSqToPoint(t);if(o<n){const l=new Y;oc.closestPointToPoint(t,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class ws extends Zt{constructor(e,n,i=Xn,r,s,a,o=Ut,l=Ut,c,u=_i,f=1){if(u!==_i&&u!==or)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:n,depth:f};super(d,r,s,a,o,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Wc(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class v_ extends ws{constructor(e,n=Xn,i=fr,r,s,a=Ut,o=Ut,l,c=_i){const u={width:e,height:e,depth:1},f=[u,u,u,u,u,u];super(e,e,n,i,r,s,a,o,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class $h extends Zt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Za extends In{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,a=n/2,o=Math.floor(i),l=Math.floor(r),c=o+1,u=l+1,f=e/o,d=n/l,h=[],_=[],v=[],m=[];for(let p=0;p<u;p++){const b=p*d-a;for(let T=0;T<c;T++){const M=T*f-s;_.push(M,-b,0),v.push(0,0,1),m.push(T/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let b=0;b<o;b++){const T=b+c*p,M=b+c*(p+1),w=b+1+c*(p+1),P=b+1+c*p;h.push(T,M,P),h.push(M,w,P)}this.setIndex(h),this.setAttribute("position",new di(_,3)),this.setAttribute("normal",new di(v,3)),this.setAttribute("uv",new di(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Za(e.width,e.height,e.widthSegments,e.heightSegments)}}class x_ extends qn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class S_ extends Us{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Dg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class M_ extends Us{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Kh extends kh{constructor(e=-1,n=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class E_ extends gn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function mf(t,e,n,i){const r=y_(i);switch(n){case Dh:return t*e;case Lh:return t*e/r.components*r.byteLength;case Vc:return t*e/r.components*r.byteLength;case Gr:return t*e*2/r.components*r.byteLength;case zc:return t*e*2/r.components*r.byteLength;case Ih:return t*e*3/r.components*r.byteLength;case An:return t*e*4/r.components*r.byteLength;case Gc:return t*e*4/r.components*r.byteLength;case Sa:case Ma:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Ea:case ya:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Cl:case Dl:return Math.max(t,16)*Math.max(e,8)/4;case Rl:case Pl:return Math.max(t,8)*Math.max(e,8)/2;case Il:case Ll:case Nl:case Fl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Ul:case Ol:case Bl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Vl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case zl:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Gl:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case Hl:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case kl:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case Wl:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case Xl:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case ql:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case Yl:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case $l:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case Kl:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case jl:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case Zl:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case Jl:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case Ql:case ec:case tc:return Math.ceil(t/4)*Math.ceil(e/4)*16;case nc:case ic:return Math.ceil(t/4)*Math.ceil(e/4)*8;case rc:case sc:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function y_(t){switch(t){case _n:case wh:return{byteLength:1,components:1};case bs:case Rh:case gi:return{byteLength:2,components:1};case Oc:case Bc:return{byteLength:2,components:4};case Xn:case Fc:case Vn:return{byteLength:4,components:1};case Ch:case Ph:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Nc}}));typeof window<"u"&&(window.__THREE__?ke("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Nc);function jh(){let t=null,e=!1,n=null,i=null;function r(s,a){n(s,a),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function b_(t){const e=new WeakMap;function n(o,l){const c=o.array,u=o.usage,f=c.byteLength,d=t.createBuffer();t.bindBuffer(l,d),t.bufferData(l,c,u),o.onUploadCallback();let h;if(c instanceof Float32Array)h=t.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)h=t.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?h=t.HALF_FLOAT:h=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)h=t.SHORT;else if(c instanceof Uint32Array)h=t.UNSIGNED_INT;else if(c instanceof Int32Array)h=t.INT;else if(c instanceof Int8Array)h=t.BYTE;else if(c instanceof Uint8Array)h=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)h=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:h,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function i(o,l,c){const u=l.array,f=l.updateRanges;if(t.bindBuffer(c,o),f.length===0)t.bufferSubData(c,0,u);else{f.sort((h,_)=>h.start-_.start);let d=0;for(let h=1;h<f.length;h++){const _=f[d],v=f[h];v.start<=_.start+_.count+1?_.count=Math.max(_.count,v.start+v.count-_.start):(++d,f[d]=v)}f.length=d+1;for(let h=0,_=f.length;h<_;h++){const v=f[h];t.bufferSubData(c,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(t.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,n(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}var T_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,A_=`#ifdef USE_ALPHAHASH
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
#endif`,w_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,R_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,C_=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,P_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,D_=`#ifdef USE_AOMAP
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
#endif`,I_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,L_=`#ifdef USE_BATCHING
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
#endif`,U_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,N_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,F_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,O_=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,B_=`#ifdef USE_IRIDESCENCE
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
#endif`,V_=`#ifdef USE_BUMPMAP
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
#endif`,z_=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,G_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,H_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,k_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,W_=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,X_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,q_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Y_=`#if defined( USE_COLOR_ALPHA )
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
#endif`,$_=`#define PI 3.141592653589793
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
} // validated`,K_=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,j_=`vec3 transformedNormal = objectNormal;
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
#endif`,Z_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,J_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Q_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ev=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,tv="gl_FragColor = linearToOutputTexel( gl_FragColor );",nv=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,iv=`#ifdef USE_ENVMAP
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
#endif`,rv=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,sv=`#ifdef USE_ENVMAP
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
#endif`,av=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ov=`#ifdef USE_ENVMAP
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
#endif`,lv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,cv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,uv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,dv=`#ifdef USE_GRADIENTMAP
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
}`,hv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,pv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,mv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,gv=`uniform bool receiveShadow;
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
#endif`,_v=`#ifdef USE_ENVMAP
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
#endif`,vv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,xv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Sv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Mv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ev=`PhysicalMaterial material;
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
#endif`,yv=`uniform sampler2D dfgLUT;
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
}`,bv=`
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
#endif`,Tv=`#if defined( RE_IndirectDiffuse )
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
#endif`,Av=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,wv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Rv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Cv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Pv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Dv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Iv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Lv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Uv=`#if defined( USE_POINTS_UV )
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
#endif`,Nv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Fv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ov=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Bv=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Vv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,zv=`#ifdef USE_MORPHTARGETS
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
#endif`,Gv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Hv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,kv=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Wv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Xv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Yv=`#ifdef USE_NORMALMAP
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
#endif`,$v=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Kv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,jv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Zv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Jv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Qv=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,ex=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,tx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,nx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ix=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,rx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,sx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ax=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ox=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,lx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,cx=`float getShadowMask() {
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
}`,ux=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,fx=`#ifdef USE_SKINNING
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
#endif`,dx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,hx=`#ifdef USE_SKINNING
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
#endif`,px=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,mx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,gx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,_x=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,vx=`#ifdef USE_TRANSMISSION
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
#endif`,xx=`#ifdef USE_TRANSMISSION
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
#endif`,Sx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Mx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ex=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,yx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const bx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Tx=`uniform sampler2D t2D;
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
}`,Ax=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,wx=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Rx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Cx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Px=`#include <common>
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
}`,Dx=`#if DEPTH_PACKING == 3200
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
}`,Ix=`#define DISTANCE
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
}`,Lx=`#define DISTANCE
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
}`,Ux=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Nx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Fx=`uniform float scale;
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
}`,Ox=`uniform vec3 diffuse;
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
}`,Bx=`#include <common>
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
}`,Vx=`uniform vec3 diffuse;
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
}`,zx=`#define LAMBERT
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
}`,Gx=`#define LAMBERT
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
}`,Hx=`#define MATCAP
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
}`,kx=`#define MATCAP
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
}`,Wx=`#define NORMAL
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
}`,Xx=`#define NORMAL
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
}`,qx=`#define PHONG
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
}`,Yx=`#define PHONG
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
}`,$x=`#define STANDARD
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
}`,Kx=`#define STANDARD
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
}`,jx=`#define TOON
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
}`,Zx=`#define TOON
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
}`,Jx=`uniform float size;
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
}`,Qx=`uniform vec3 diffuse;
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
}`,eS=`#include <common>
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
}`,tS=`uniform vec3 color;
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
}`,nS=`uniform float rotation;
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
}`,iS=`uniform vec3 diffuse;
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
}`,Ye={alphahash_fragment:T_,alphahash_pars_fragment:A_,alphamap_fragment:w_,alphamap_pars_fragment:R_,alphatest_fragment:C_,alphatest_pars_fragment:P_,aomap_fragment:D_,aomap_pars_fragment:I_,batching_pars_vertex:L_,batching_vertex:U_,begin_vertex:N_,beginnormal_vertex:F_,bsdfs:O_,iridescence_fragment:B_,bumpmap_pars_fragment:V_,clipping_planes_fragment:z_,clipping_planes_pars_fragment:G_,clipping_planes_pars_vertex:H_,clipping_planes_vertex:k_,color_fragment:W_,color_pars_fragment:X_,color_pars_vertex:q_,color_vertex:Y_,common:$_,cube_uv_reflection_fragment:K_,defaultnormal_vertex:j_,displacementmap_pars_vertex:Z_,displacementmap_vertex:J_,emissivemap_fragment:Q_,emissivemap_pars_fragment:ev,colorspace_fragment:tv,colorspace_pars_fragment:nv,envmap_fragment:iv,envmap_common_pars_fragment:rv,envmap_pars_fragment:sv,envmap_pars_vertex:av,envmap_physical_pars_fragment:_v,envmap_vertex:ov,fog_vertex:lv,fog_pars_vertex:cv,fog_fragment:uv,fog_pars_fragment:fv,gradientmap_pars_fragment:dv,lightmap_pars_fragment:hv,lights_lambert_fragment:pv,lights_lambert_pars_fragment:mv,lights_pars_begin:gv,lights_toon_fragment:vv,lights_toon_pars_fragment:xv,lights_phong_fragment:Sv,lights_phong_pars_fragment:Mv,lights_physical_fragment:Ev,lights_physical_pars_fragment:yv,lights_fragment_begin:bv,lights_fragment_maps:Tv,lights_fragment_end:Av,logdepthbuf_fragment:wv,logdepthbuf_pars_fragment:Rv,logdepthbuf_pars_vertex:Cv,logdepthbuf_vertex:Pv,map_fragment:Dv,map_pars_fragment:Iv,map_particle_fragment:Lv,map_particle_pars_fragment:Uv,metalnessmap_fragment:Nv,metalnessmap_pars_fragment:Fv,morphinstance_vertex:Ov,morphcolor_vertex:Bv,morphnormal_vertex:Vv,morphtarget_pars_vertex:zv,morphtarget_vertex:Gv,normal_fragment_begin:Hv,normal_fragment_maps:kv,normal_pars_fragment:Wv,normal_pars_vertex:Xv,normal_vertex:qv,normalmap_pars_fragment:Yv,clearcoat_normal_fragment_begin:$v,clearcoat_normal_fragment_maps:Kv,clearcoat_pars_fragment:jv,iridescence_pars_fragment:Zv,opaque_fragment:Jv,packing:Qv,premultiplied_alpha_fragment:ex,project_vertex:tx,dithering_fragment:nx,dithering_pars_fragment:ix,roughnessmap_fragment:rx,roughnessmap_pars_fragment:sx,shadowmap_pars_fragment:ax,shadowmap_pars_vertex:ox,shadowmap_vertex:lx,shadowmask_pars_fragment:cx,skinbase_vertex:ux,skinning_pars_vertex:fx,skinning_vertex:dx,skinnormal_vertex:hx,specularmap_fragment:px,specularmap_pars_fragment:mx,tonemapping_fragment:gx,tonemapping_pars_fragment:_x,transmission_fragment:vx,transmission_pars_fragment:xx,uv_pars_fragment:Sx,uv_pars_vertex:Mx,uv_vertex:Ex,worldpos_vertex:yx,background_vert:bx,background_frag:Tx,backgroundCube_vert:Ax,backgroundCube_frag:wx,cube_vert:Rx,cube_frag:Cx,depth_vert:Px,depth_frag:Dx,distance_vert:Ix,distance_frag:Lx,equirect_vert:Ux,equirect_frag:Nx,linedashed_vert:Fx,linedashed_frag:Ox,meshbasic_vert:Bx,meshbasic_frag:Vx,meshlambert_vert:zx,meshlambert_frag:Gx,meshmatcap_vert:Hx,meshmatcap_frag:kx,meshnormal_vert:Wx,meshnormal_frag:Xx,meshphong_vert:qx,meshphong_frag:Yx,meshphysical_vert:$x,meshphysical_frag:Kx,meshtoon_vert:jx,meshtoon_frag:Zx,points_vert:Jx,points_frag:Qx,shadow_vert:eS,shadow_frag:tS,sprite_vert:nS,sprite_frag:iS},be={common:{diffuse:{value:new lt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new qe}},envmap:{envMap:{value:null},envMapRotation:{value:new qe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new qe},normalScale:{value:new ut(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new lt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new lt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0},uvTransform:{value:new qe}},sprite:{diffuse:{value:new lt(16777215)},opacity:{value:1},center:{value:new ut(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}}},Bn={basic:{uniforms:Xt([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.fog]),vertexShader:Ye.meshbasic_vert,fragmentShader:Ye.meshbasic_frag},lambert:{uniforms:Xt([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new lt(0)}}]),vertexShader:Ye.meshlambert_vert,fragmentShader:Ye.meshlambert_frag},phong:{uniforms:Xt([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new lt(0)},specular:{value:new lt(1118481)},shininess:{value:30}}]),vertexShader:Ye.meshphong_vert,fragmentShader:Ye.meshphong_frag},standard:{uniforms:Xt([be.common,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.roughnessmap,be.metalnessmap,be.fog,be.lights,{emissive:{value:new lt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag},toon:{uniforms:Xt([be.common,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.gradientmap,be.fog,be.lights,{emissive:{value:new lt(0)}}]),vertexShader:Ye.meshtoon_vert,fragmentShader:Ye.meshtoon_frag},matcap:{uniforms:Xt([be.common,be.bumpmap,be.normalmap,be.displacementmap,be.fog,{matcap:{value:null}}]),vertexShader:Ye.meshmatcap_vert,fragmentShader:Ye.meshmatcap_frag},points:{uniforms:Xt([be.points,be.fog]),vertexShader:Ye.points_vert,fragmentShader:Ye.points_frag},dashed:{uniforms:Xt([be.common,be.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ye.linedashed_vert,fragmentShader:Ye.linedashed_frag},depth:{uniforms:Xt([be.common,be.displacementmap]),vertexShader:Ye.depth_vert,fragmentShader:Ye.depth_frag},normal:{uniforms:Xt([be.common,be.bumpmap,be.normalmap,be.displacementmap,{opacity:{value:1}}]),vertexShader:Ye.meshnormal_vert,fragmentShader:Ye.meshnormal_frag},sprite:{uniforms:Xt([be.sprite,be.fog]),vertexShader:Ye.sprite_vert,fragmentShader:Ye.sprite_frag},background:{uniforms:{uvTransform:{value:new qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ye.background_vert,fragmentShader:Ye.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new qe}},vertexShader:Ye.backgroundCube_vert,fragmentShader:Ye.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ye.cube_vert,fragmentShader:Ye.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ye.equirect_vert,fragmentShader:Ye.equirect_frag},distance:{uniforms:Xt([be.common,be.displacementmap,{referencePosition:{value:new Y},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ye.distance_vert,fragmentShader:Ye.distance_frag},shadow:{uniforms:Xt([be.lights,be.fog,{color:{value:new lt(0)},opacity:{value:1}}]),vertexShader:Ye.shadow_vert,fragmentShader:Ye.shadow_frag}};Bn.physical={uniforms:Xt([Bn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new qe},clearcoatNormalScale:{value:new ut(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new qe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new qe},sheen:{value:0},sheenColor:{value:new lt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new qe},transmissionSamplerSize:{value:new ut},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new qe},attenuationDistance:{value:0},attenuationColor:{value:new lt(0)},specularColor:{value:new lt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new qe},anisotropyVector:{value:new ut},anisotropyMap:{value:null},anisotropyMapTransform:{value:new qe}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag};const fa={r:0,b:0,g:0},Qi=new vi,rS=new bt;function sS(t,e,n,i,r,s,a){const o=new lt(0);let l=s===!0?0:1,c,u,f=null,d=0,h=null;function _(T){let M=T.isScene===!0?T.background:null;return M&&M.isTexture&&(M=(T.backgroundBlurriness>0?n:e).get(M)),M}function v(T){let M=!1;const w=_(T);w===null?p(o,l):w&&w.isColor&&(p(w,1),M=!0);const P=t.xr.getEnvironmentBlendMode();P==="additive"?i.buffers.color.setClear(0,0,0,1,a):P==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(t.autoClear||M)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function m(T,M){const w=_(M);w&&(w.isCubeTexture||w.mapping===Ka)?(u===void 0&&(u=new xi(new Ns(1,1,1),new qn({name:"BackgroundCubeMaterial",uniforms:kr(Bn.backgroundCube.uniforms),vertexShader:Bn.backgroundCube.vertexShader,fragmentShader:Bn.backgroundCube.fragmentShader,side:nn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(P,D,z){this.matrixWorld.copyPosition(z.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),Qi.copy(M.backgroundRotation),Qi.x*=-1,Qi.y*=-1,Qi.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(Qi.y*=-1,Qi.z*=-1),u.material.uniforms.envMap.value=w,u.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(rS.makeRotationFromEuler(Qi)),u.material.toneMapped=Je.getTransfer(w.colorSpace)!==ot,(f!==w||d!==w.version||h!==t.toneMapping)&&(u.material.needsUpdate=!0,f=w,d=w.version,h=t.toneMapping),u.layers.enableAll(),T.unshift(u,u.geometry,u.material,0,0,null)):w&&w.isTexture&&(c===void 0&&(c=new xi(new Za(2,2),new qn({name:"BackgroundMaterial",uniforms:kr(Bn.background.uniforms),vertexShader:Bn.background.vertexShader,fragmentShader:Bn.background.fragmentShader,side:zi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=w,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.toneMapped=Je.getTransfer(w.colorSpace)!==ot,w.matrixAutoUpdate===!0&&w.updateMatrix(),c.material.uniforms.uvTransform.value.copy(w.matrix),(f!==w||d!==w.version||h!==t.toneMapping)&&(c.material.needsUpdate=!0,f=w,d=w.version,h=t.toneMapping),c.layers.enableAll(),T.unshift(c,c.geometry,c.material,0,0,null))}function p(T,M){T.getRGB(fa,Hh(t)),i.buffers.color.setClear(fa.r,fa.g,fa.b,M,a)}function b(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(T,M=1){o.set(T),l=M,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(T){l=T,p(o,l)},render:v,addToRenderList:m,dispose:b}}function aS(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=d(null);let s=r,a=!1;function o(y,L,N,G,ne){let te=!1;const K=f(G,N,L);s!==K&&(s=K,c(s.object)),te=h(y,G,N,ne),te&&_(y,G,N,ne),ne!==null&&e.update(ne,t.ELEMENT_ARRAY_BUFFER),(te||a)&&(a=!1,M(y,L,N,G),ne!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(ne).buffer))}function l(){return t.createVertexArray()}function c(y){return t.bindVertexArray(y)}function u(y){return t.deleteVertexArray(y)}function f(y,L,N){const G=N.wireframe===!0;let ne=i[y.id];ne===void 0&&(ne={},i[y.id]=ne);let te=ne[L.id];te===void 0&&(te={},ne[L.id]=te);let K=te[G];return K===void 0&&(K=d(l()),te[G]=K),K}function d(y){const L=[],N=[],G=[];for(let ne=0;ne<n;ne++)L[ne]=0,N[ne]=0,G[ne]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:N,attributeDivisors:G,object:y,attributes:{},index:null}}function h(y,L,N,G){const ne=s.attributes,te=L.attributes;let K=0;const H=N.getAttributes();for(const ee in H)if(H[ee].location>=0){const ge=ne[ee];let Se=te[ee];if(Se===void 0&&(ee==="instanceMatrix"&&y.instanceMatrix&&(Se=y.instanceMatrix),ee==="instanceColor"&&y.instanceColor&&(Se=y.instanceColor)),ge===void 0||ge.attribute!==Se||Se&&ge.data!==Se.data)return!0;K++}return s.attributesNum!==K||s.index!==G}function _(y,L,N,G){const ne={},te=L.attributes;let K=0;const H=N.getAttributes();for(const ee in H)if(H[ee].location>=0){let ge=te[ee];ge===void 0&&(ee==="instanceMatrix"&&y.instanceMatrix&&(ge=y.instanceMatrix),ee==="instanceColor"&&y.instanceColor&&(ge=y.instanceColor));const Se={};Se.attribute=ge,ge&&ge.data&&(Se.data=ge.data),ne[ee]=Se,K++}s.attributes=ne,s.attributesNum=K,s.index=G}function v(){const y=s.newAttributes;for(let L=0,N=y.length;L<N;L++)y[L]=0}function m(y){p(y,0)}function p(y,L){const N=s.newAttributes,G=s.enabledAttributes,ne=s.attributeDivisors;N[y]=1,G[y]===0&&(t.enableVertexAttribArray(y),G[y]=1),ne[y]!==L&&(t.vertexAttribDivisor(y,L),ne[y]=L)}function b(){const y=s.newAttributes,L=s.enabledAttributes;for(let N=0,G=L.length;N<G;N++)L[N]!==y[N]&&(t.disableVertexAttribArray(N),L[N]=0)}function T(y,L,N,G,ne,te,K){K===!0?t.vertexAttribIPointer(y,L,N,ne,te):t.vertexAttribPointer(y,L,N,G,ne,te)}function M(y,L,N,G){v();const ne=G.attributes,te=N.getAttributes(),K=L.defaultAttributeValues;for(const H in te){const ee=te[H];if(ee.location>=0){let ve=ne[H];if(ve===void 0&&(H==="instanceMatrix"&&y.instanceMatrix&&(ve=y.instanceMatrix),H==="instanceColor"&&y.instanceColor&&(ve=y.instanceColor)),ve!==void 0){const ge=ve.normalized,Se=ve.itemSize,Fe=e.get(ve);if(Fe===void 0)continue;const Ge=Fe.buffer,nt=Fe.type,Ze=Fe.bytesPerElement,re=nt===t.INT||nt===t.UNSIGNED_INT||ve.gpuType===Fc;if(ve.isInterleavedBufferAttribute){const U=ve.data,ie=U.stride,oe=ve.offset;if(U.isInstancedInterleavedBuffer){for(let ae=0;ae<ee.locationSize;ae++)p(ee.location+ae,U.meshPerAttribute);y.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=U.meshPerAttribute*U.count)}else for(let ae=0;ae<ee.locationSize;ae++)m(ee.location+ae);t.bindBuffer(t.ARRAY_BUFFER,Ge);for(let ae=0;ae<ee.locationSize;ae++)T(ee.location+ae,Se/ee.locationSize,nt,ge,ie*Ze,(oe+Se/ee.locationSize*ae)*Ze,re)}else{if(ve.isInstancedBufferAttribute){for(let U=0;U<ee.locationSize;U++)p(ee.location+U,ve.meshPerAttribute);y.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=ve.meshPerAttribute*ve.count)}else for(let U=0;U<ee.locationSize;U++)m(ee.location+U);t.bindBuffer(t.ARRAY_BUFFER,Ge);for(let U=0;U<ee.locationSize;U++)T(ee.location+U,Se/ee.locationSize,nt,ge,Se*Ze,Se/ee.locationSize*U*Ze,re)}}else if(K!==void 0){const ge=K[H];if(ge!==void 0)switch(ge.length){case 2:t.vertexAttrib2fv(ee.location,ge);break;case 3:t.vertexAttrib3fv(ee.location,ge);break;case 4:t.vertexAttrib4fv(ee.location,ge);break;default:t.vertexAttrib1fv(ee.location,ge)}}}}b()}function w(){z();for(const y in i){const L=i[y];for(const N in L){const G=L[N];for(const ne in G)u(G[ne].object),delete G[ne];delete L[N]}delete i[y]}}function P(y){if(i[y.id]===void 0)return;const L=i[y.id];for(const N in L){const G=L[N];for(const ne in G)u(G[ne].object),delete G[ne];delete L[N]}delete i[y.id]}function D(y){for(const L in i){const N=i[L];if(N[y.id]===void 0)continue;const G=N[y.id];for(const ne in G)u(G[ne].object),delete G[ne];delete N[y.id]}}function z(){x(),a=!0,s!==r&&(s=r,c(s.object))}function x(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:z,resetDefaultState:x,dispose:w,releaseStatesOfGeometry:P,releaseStatesOfProgram:D,initAttributes:v,enableAttribute:m,disableUnusedAttributes:b}}function oS(t,e,n){let i;function r(c){i=c}function s(c,u){t.drawArrays(i,c,u),n.update(u,i,1)}function a(c,u,f){f!==0&&(t.drawArraysInstanced(i,c,u,f),n.update(u,i,f))}function o(c,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,f);let h=0;for(let _=0;_<f;_++)h+=u[_];n.update(h,i,1)}function l(c,u,f,d){if(f===0)return;const h=e.get("WEBGL_multi_draw");if(h===null)for(let _=0;_<c.length;_++)a(c[_],u[_],d[_]);else{h.multiDrawArraysInstancedWEBGL(i,c,0,u,0,d,0,f);let _=0;for(let v=0;v<f;v++)_+=u[v]*d[v];n.update(_,i,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function lS(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const D=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(D){return!(D!==An&&i.convert(D)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(D){const z=D===gi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(D!==_n&&i.convert(D)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&D!==Vn&&!z)}function l(D){if(D==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";D="mediump"}return D==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const u=l(c);u!==c&&(ke("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=n.logarithmicDepthBuffer===!0,d=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),h=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),_=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=t.getParameter(t.MAX_TEXTURE_SIZE),m=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),p=t.getParameter(t.MAX_VERTEX_ATTRIBS),b=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),T=t.getParameter(t.MAX_VARYING_VECTORS),M=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),w=t.getParameter(t.MAX_SAMPLES),P=t.getParameter(t.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:d,maxTextures:h,maxVertexTextures:_,maxTextureSize:v,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:b,maxVaryings:T,maxFragmentUniforms:M,maxSamples:w,samples:P}}function cS(t){const e=this;let n=null,i=0,r=!1,s=!1;const a=new nr,o=new qe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const h=f.length!==0||d||i!==0||r;return r=d,i=f.length,h},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,d){n=u(f,d,0)},this.setState=function(f,d,h){const _=f.clippingPlanes,v=f.clipIntersection,m=f.clipShadows,p=t.get(f);if(!r||_===null||_.length===0||s&&!m)s?u(null):c();else{const b=s?0:i,T=b*4;let M=p.clippingState||null;l.value=M,M=u(_,d,T,h);for(let w=0;w!==T;++w)M[w]=n[w];p.clippingState=M,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,d,h,_){const v=f!==null?f.length:0;let m=null;if(v!==0){if(m=l.value,_!==!0||m===null){const p=h+v*4,b=d.matrixWorldInverse;o.getNormalMatrix(b),(m===null||m.length<p)&&(m=new Float32Array(p));for(let T=0,M=h;T!==v;++T,M+=4)a.copy(f[T]).applyMatrix4(b,o),a.normal.toArray(m,M),m[M+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function uS(t){let e=new WeakMap;function n(a,o){return o===bl?a.mapping=fr:o===Tl&&(a.mapping=zr),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===bl||o===Tl)if(e.has(a)){const l=e.get(a).texture;return n(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Xh(l.height);return c.fromEquirectangularTexture(t,a),e.set(a,c),a.addEventListener("dispose",r),n(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}const Fi=4,gf=[.125,.215,.35,.446,.526,.582],sr=20,fS=256,ns=new Kh,_f=new lt;let Wo=null,Xo=0,qo=0,Yo=!1;const dS=new Y;class vf{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,i=.1,r=100,s={}){const{size:a=256,position:o=dS}=s;Wo=this._renderer.getRenderTarget(),Xo=this._renderer.getActiveCubeFace(),qo=this._renderer.getActiveMipmapLevel(),Yo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,o),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Mf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Sf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Wo,Xo,qo),this._renderer.xr.enabled=Yo,e.scissorTest=!1,wr(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===fr||e.mapping===zr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Wo=this._renderer.getRenderTarget(),Xo=this._renderer.getActiveCubeFace(),qo=this._renderer.getActiveMipmapLevel(),Yo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Gt,minFilter:Gt,generateMipmaps:!1,type:gi,format:An,colorSpace:Hr,depthBuffer:!1},r=xf(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=xf(e,n,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=hS(s)),this._blurMaterial=mS(s,e,n),this._ggxMaterial=pS(s,e,n)}return r}_compileMaterial(e){const n=new xi(new In,e);this._renderer.compile(n,ns)}_sceneToCubeUV(e,n,i,r,s){const l=new gn(90,1,n,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,d=f.autoClear,h=f.toneMapping;f.getClearColor(_f),f.toneMapping=kn,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(r),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new xi(new Ns,new Vh({name:"PMREM.Background",side:nn,depthWrite:!1,depthTest:!1})));const v=this._backgroundBox,m=v.material;let p=!1;const b=e.background;b?b.isColor&&(m.color.copy(b),e.background=null,p=!0):(m.color.copy(_f),p=!0);for(let T=0;T<6;T++){const M=T%3;M===0?(l.up.set(0,c[T],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[T],s.y,s.z)):M===1?(l.up.set(0,0,c[T]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[T],s.z)):(l.up.set(0,c[T],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[T]));const w=this._cubeSize;wr(r,M*w,T>2?w:0,w,w),f.setRenderTarget(r),p&&f.render(v,l),f.render(e,l)}f.toneMapping=h,f.autoClear=d,e.background=b}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===fr||e.mapping===zr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Mf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Sf());const s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;wr(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(a,ns)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);n.autoClear=i}_applyGGXFilter(e,n,i){const r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;const l=a.uniforms,c=i/(this._lodMeshes.length-1),u=n/(this._lodMeshes.length-1),f=Math.sqrt(c*c-u*u),d=0+c*1.25,h=f*d,{_lodMax:_}=this,v=this._sizeLods[i],m=3*v*(i>_-Fi?i-_+Fi:0),p=4*(this._cubeSize-v);l.envMap.value=e.texture,l.roughness.value=h,l.mipInt.value=_-n,wr(s,m,p,3*v,2*v),r.setRenderTarget(s),r.render(o,ns),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=_-i,wr(e,m,p,3*v,2*v),r.setRenderTarget(e),r.render(o,ns)}_blur(e,n,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,n,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&et("blur direction must be either latitudinal or longitudinal!");const u=3,f=this._lodMeshes[r];f.material=c;const d=c.uniforms,h=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*h):2*Math.PI/(2*sr-1),v=s/_,m=isFinite(s)?1+Math.floor(u*v):sr;m>sr&&ke(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${sr}`);const p=[];let b=0;for(let D=0;D<sr;++D){const z=D/v,x=Math.exp(-z*z/2);p.push(x),D===0?b+=x:D<m&&(b+=2*x)}for(let D=0;D<p.length;D++)p[D]=p[D]/b;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:T}=this;d.dTheta.value=_,d.mipInt.value=T-i;const M=this._sizeLods[r],w=3*M*(r>T-Fi?r-T+Fi:0),P=4*(this._cubeSize-M);wr(n,w,P,3*M,2*M),l.setRenderTarget(n),l.render(f,ns)}}function hS(t){const e=[],n=[],i=[];let r=t;const s=t-Fi+1+gf.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);e.push(o);let l=1/o;a>t-Fi?l=gf[a-t+Fi-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),u=-c,f=1+c,d=[u,u,f,u,f,f,u,u,f,f,u,f],h=6,_=6,v=3,m=2,p=1,b=new Float32Array(v*_*h),T=new Float32Array(m*_*h),M=new Float32Array(p*_*h);for(let P=0;P<h;P++){const D=P%3*2/3-1,z=P>2?0:-1,x=[D,z,0,D+2/3,z,0,D+2/3,z+1,0,D,z,0,D+2/3,z+1,0,D,z+1,0];b.set(x,v*_*P),T.set(d,m*_*P);const y=[P,P,P,P,P,P];M.set(y,p*_*P)}const w=new In;w.setAttribute("position",new jt(b,v)),w.setAttribute("uv",new jt(T,m)),w.setAttribute("faceIndex",new jt(M,p)),i.push(new xi(w,null)),r>Fi&&r--}return{lodMeshes:i,sizeLods:e,sigmas:n}}function xf(t,e,n){const i=new Wn(t,e,n);return i.texture.mapping=Ka,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function wr(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function pS(t,e,n){return new qn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:fS,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Ja(),fragmentShader:`

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
		`,blending:ui,depthTest:!1,depthWrite:!1})}function mS(t,e,n){const i=new Float32Array(sr),r=new Y(0,1,0);return new qn({name:"SphericalGaussianBlur",defines:{n:sr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Ja(),fragmentShader:`

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
		`,blending:ui,depthTest:!1,depthWrite:!1})}function Sf(){return new qn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ja(),fragmentShader:`

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
		`,blending:ui,depthTest:!1,depthWrite:!1})}function Mf(){return new qn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ja(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ui,depthTest:!1,depthWrite:!1})}function Ja(){return`

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
	`}function gS(t){let e=new WeakMap,n=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===bl||l===Tl,u=l===fr||l===zr;if(c||u){let f=e.get(o);const d=f!==void 0?f.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return n===null&&(n=new vf(t)),f=c?n.fromEquirectangular(o,f):n.fromCubemap(o,f),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),f.texture;if(f!==void 0)return f.texture;{const h=o.image;return c&&h&&h.height>0||u&&h&&r(h)?(n===null&&(n=new vf(t)),f=c?n.fromEquirectangular(o):n.fromCubemap(o),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),o.addEventListener("dispose",s),f.texture):null}}}return o}function r(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:a}}function _S(t){const e={};function n(i){if(e[i]!==void 0)return e[i];const r=t.getExtension(i);return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&As("WebGLRenderer: "+i+" extension not supported."),r}}}function vS(t,e,n,i){const r={},s=new WeakMap;function a(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const _ in d.attributes)e.remove(d.attributes[_]);d.removeEventListener("dispose",a),delete r[d.id];const h=s.get(d);h&&(e.remove(h),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,n.memory.geometries--}function o(f,d){return r[d.id]===!0||(d.addEventListener("dispose",a),r[d.id]=!0,n.memory.geometries++),d}function l(f){const d=f.attributes;for(const h in d)e.update(d[h],t.ARRAY_BUFFER)}function c(f){const d=[],h=f.index,_=f.attributes.position;let v=0;if(h!==null){const b=h.array;v=h.version;for(let T=0,M=b.length;T<M;T+=3){const w=b[T+0],P=b[T+1],D=b[T+2];d.push(w,P,P,D,D,w)}}else if(_!==void 0){const b=_.array;v=_.version;for(let T=0,M=b.length/3-1;T<M;T+=3){const w=T+0,P=T+1,D=T+2;d.push(w,P,P,D,D,w)}}else return;const m=new(Uh(d)?Gh:zh)(d,1);m.version=v;const p=s.get(f);p&&e.remove(p),s.set(f,m)}function u(f){const d=s.get(f);if(d){const h=f.index;h!==null&&d.version<h.version&&c(f)}else c(f);return s.get(f)}return{get:o,update:l,getWireframeAttribute:u}}function xS(t,e,n){let i;function r(d){i=d}let s,a;function o(d){s=d.type,a=d.bytesPerElement}function l(d,h){t.drawElements(i,h,s,d*a),n.update(h,i,1)}function c(d,h,_){_!==0&&(t.drawElementsInstanced(i,h,s,d*a,_),n.update(h,i,_))}function u(d,h,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,h,0,s,d,0,_);let m=0;for(let p=0;p<_;p++)m+=h[p];n.update(m,i,1)}function f(d,h,_,v){if(_===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)c(d[p]/a,h[p],v[p]);else{m.multiDrawElementsInstancedWEBGL(i,h,0,s,d,0,v,0,_);let p=0;for(let b=0;b<_;b++)p+=h[b]*v[b];n.update(p,i,1)}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function SS(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(n.calls++,a){case t.TRIANGLES:n.triangles+=o*(s/3);break;case t.LINES:n.lines+=o*(s/2);break;case t.LINE_STRIP:n.lines+=o*(s-1);break;case t.LINE_LOOP:n.lines+=o*s;break;case t.POINTS:n.points+=o*s;break;default:et("WebGLInfo: Unknown draw mode:",a);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function MS(t,e,n){const i=new WeakMap,r=new yt;function s(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=u!==void 0?u.length:0;let d=i.get(o);if(d===void 0||d.count!==f){let y=function(){z.dispose(),i.delete(o),o.removeEventListener("dispose",y)};var h=y;d!==void 0&&d.texture.dispose();const _=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],b=o.morphAttributes.normal||[],T=o.morphAttributes.color||[];let M=0;_===!0&&(M=1),v===!0&&(M=2),m===!0&&(M=3);let w=o.attributes.position.count*M,P=1;w>e.maxTextureSize&&(P=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);const D=new Float32Array(w*P*4*f),z=new Nh(D,w,P,f);z.type=Vn,z.needsUpdate=!0;const x=M*4;for(let L=0;L<f;L++){const N=p[L],G=b[L],ne=T[L],te=w*P*4*L;for(let K=0;K<N.count;K++){const H=K*x;_===!0&&(r.fromBufferAttribute(N,K),D[te+H+0]=r.x,D[te+H+1]=r.y,D[te+H+2]=r.z,D[te+H+3]=0),v===!0&&(r.fromBufferAttribute(G,K),D[te+H+4]=r.x,D[te+H+5]=r.y,D[te+H+6]=r.z,D[te+H+7]=0),m===!0&&(r.fromBufferAttribute(ne,K),D[te+H+8]=r.x,D[te+H+9]=r.y,D[te+H+10]=r.z,D[te+H+11]=ne.itemSize===4?r.w:1)}}d={count:f,texture:z,size:new ut(w,P)},i.set(o,d),o.addEventListener("dispose",y)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",a.morphTexture,n);else{let _=0;for(let m=0;m<c.length;m++)_+=c[m];const v=o.morphTargetsRelative?1:1-_;l.getUniforms().setValue(t,"morphTargetBaseInfluence",v),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",d.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",d.size)}return{update:s}}function ES(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,f=e.get(l,u);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==c&&(d.update(),r.set(d,c))}return f}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:a}}const yS={[xh]:"LINEAR_TONE_MAPPING",[Sh]:"REINHARD_TONE_MAPPING",[Mh]:"CINEON_TONE_MAPPING",[Eh]:"ACES_FILMIC_TONE_MAPPING",[bh]:"AGX_TONE_MAPPING",[Th]:"NEUTRAL_TONE_MAPPING",[yh]:"CUSTOM_TONE_MAPPING"};function bS(t,e,n,i,r){const s=new Wn(e,n,{type:t,depthBuffer:i,stencilBuffer:r}),a=new Wn(e,n,{type:gi,depthBuffer:!1,stencilBuffer:!1}),o=new In;o.setAttribute("position",new di([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new di([0,2,0,0,2,0],2));const l=new x_({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),c=new xi(o,l),u=new Kh(-1,1,1,-1,0,1);let f=null,d=null,h=!1,_,v=null,m=[],p=!1;this.setSize=function(b,T){s.setSize(b,T),a.setSize(b,T);for(let M=0;M<m.length;M++){const w=m[M];w.setSize&&w.setSize(b,T)}},this.setEffects=function(b){m=b,p=m.length>0&&m[0].isRenderPass===!0;const T=s.width,M=s.height;for(let w=0;w<m.length;w++){const P=m[w];P.setSize&&P.setSize(T,M)}},this.begin=function(b,T){if(h||b.toneMapping===kn&&m.length===0)return!1;if(v=T,T!==null){const M=T.width,w=T.height;(s.width!==M||s.height!==w)&&this.setSize(M,w)}return p===!1&&b.setRenderTarget(s),_=b.toneMapping,b.toneMapping=kn,!0},this.hasRenderPass=function(){return p},this.end=function(b,T){b.toneMapping=_,h=!0;let M=s,w=a;for(let P=0;P<m.length;P++){const D=m[P];if(D.enabled!==!1&&(D.render(b,w,M,T),D.needsSwap!==!1)){const z=M;M=w,w=z}}if(f!==b.outputColorSpace||d!==b.toneMapping){f=b.outputColorSpace,d=b.toneMapping,l.defines={},Je.getTransfer(f)===ot&&(l.defines.SRGB_TRANSFER="");const P=yS[d];P&&(l.defines[P]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=M.texture,b.setRenderTarget(v),b.render(c,u),v=null,h=!1},this.isCompositing=function(){return h},this.dispose=function(){s.dispose(),a.dispose(),o.dispose(),l.dispose()}}const Zh=new Zt,lc=new ws(1,1),Jh=new Nh,Qh=new $g,ep=new Wh,Ef=[],yf=[],bf=new Float32Array(16),Tf=new Float32Array(9),Af=new Float32Array(4);function Yr(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=Ef[r];if(s===void 0&&(s=new Float32Array(r),Ef[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=n,t[a].toArray(s,o)}return s}function Rt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Ct(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Qa(t,e){let n=yf[e];n===void 0&&(n=new Int32Array(e),yf[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function TS(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function AS(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Rt(n,e))return;t.uniform2fv(this.addr,e),Ct(n,e)}}function wS(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Rt(n,e))return;t.uniform3fv(this.addr,e),Ct(n,e)}}function RS(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Rt(n,e))return;t.uniform4fv(this.addr,e),Ct(n,e)}}function CS(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Rt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Ct(n,e)}else{if(Rt(n,i))return;Af.set(i),t.uniformMatrix2fv(this.addr,!1,Af),Ct(n,i)}}function PS(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Rt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Ct(n,e)}else{if(Rt(n,i))return;Tf.set(i),t.uniformMatrix3fv(this.addr,!1,Tf),Ct(n,i)}}function DS(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Rt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Ct(n,e)}else{if(Rt(n,i))return;bf.set(i),t.uniformMatrix4fv(this.addr,!1,bf),Ct(n,i)}}function IS(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function LS(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Rt(n,e))return;t.uniform2iv(this.addr,e),Ct(n,e)}}function US(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Rt(n,e))return;t.uniform3iv(this.addr,e),Ct(n,e)}}function NS(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Rt(n,e))return;t.uniform4iv(this.addr,e),Ct(n,e)}}function FS(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function OS(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Rt(n,e))return;t.uniform2uiv(this.addr,e),Ct(n,e)}}function BS(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Rt(n,e))return;t.uniform3uiv(this.addr,e),Ct(n,e)}}function VS(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Rt(n,e))return;t.uniform4uiv(this.addr,e),Ct(n,e)}}function zS(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(lc.compareFunction=n.isReversedDepthBuffer()?kc:Hc,s=lc):s=Zh,n.setTexture2D(e||s,r)}function GS(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||Qh,r)}function HS(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||ep,r)}function kS(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||Jh,r)}function WS(t){switch(t){case 5126:return TS;case 35664:return AS;case 35665:return wS;case 35666:return RS;case 35674:return CS;case 35675:return PS;case 35676:return DS;case 5124:case 35670:return IS;case 35667:case 35671:return LS;case 35668:case 35672:return US;case 35669:case 35673:return NS;case 5125:return FS;case 36294:return OS;case 36295:return BS;case 36296:return VS;case 35678:case 36198:case 36298:case 36306:case 35682:return zS;case 35679:case 36299:case 36307:return GS;case 35680:case 36300:case 36308:case 36293:return HS;case 36289:case 36303:case 36311:case 36292:return kS}}function XS(t,e){t.uniform1fv(this.addr,e)}function qS(t,e){const n=Yr(e,this.size,2);t.uniform2fv(this.addr,n)}function YS(t,e){const n=Yr(e,this.size,3);t.uniform3fv(this.addr,n)}function $S(t,e){const n=Yr(e,this.size,4);t.uniform4fv(this.addr,n)}function KS(t,e){const n=Yr(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function jS(t,e){const n=Yr(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function ZS(t,e){const n=Yr(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function JS(t,e){t.uniform1iv(this.addr,e)}function QS(t,e){t.uniform2iv(this.addr,e)}function eM(t,e){t.uniform3iv(this.addr,e)}function tM(t,e){t.uniform4iv(this.addr,e)}function nM(t,e){t.uniform1uiv(this.addr,e)}function iM(t,e){t.uniform2uiv(this.addr,e)}function rM(t,e){t.uniform3uiv(this.addr,e)}function sM(t,e){t.uniform4uiv(this.addr,e)}function aM(t,e,n){const i=this.cache,r=e.length,s=Qa(n,r);Rt(i,s)||(t.uniform1iv(this.addr,s),Ct(i,s));let a;this.type===t.SAMPLER_2D_SHADOW?a=lc:a=Zh;for(let o=0;o!==r;++o)n.setTexture2D(e[o]||a,s[o])}function oM(t,e,n){const i=this.cache,r=e.length,s=Qa(n,r);Rt(i,s)||(t.uniform1iv(this.addr,s),Ct(i,s));for(let a=0;a!==r;++a)n.setTexture3D(e[a]||Qh,s[a])}function lM(t,e,n){const i=this.cache,r=e.length,s=Qa(n,r);Rt(i,s)||(t.uniform1iv(this.addr,s),Ct(i,s));for(let a=0;a!==r;++a)n.setTextureCube(e[a]||ep,s[a])}function cM(t,e,n){const i=this.cache,r=e.length,s=Qa(n,r);Rt(i,s)||(t.uniform1iv(this.addr,s),Ct(i,s));for(let a=0;a!==r;++a)n.setTexture2DArray(e[a]||Jh,s[a])}function uM(t){switch(t){case 5126:return XS;case 35664:return qS;case 35665:return YS;case 35666:return $S;case 35674:return KS;case 35675:return jS;case 35676:return ZS;case 5124:case 35670:return JS;case 35667:case 35671:return QS;case 35668:case 35672:return eM;case 35669:case 35673:return tM;case 5125:return nM;case 36294:return iM;case 36295:return rM;case 36296:return sM;case 35678:case 36198:case 36298:case 36306:case 35682:return aM;case 35679:case 36299:case 36307:return oM;case 35680:case 36300:case 36308:case 36293:return lM;case 36289:case 36303:case 36311:case 36292:return cM}}class fM{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=WS(n.type)}}class dM{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=uM(n.type)}}class hM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,n[o.id],i)}}}const $o=/(\w+)(\])?(\[|\.)?/g;function wf(t,e){t.seq.push(e),t.map[e.id]=e}function pM(t,e,n){const i=t.name,r=i.length;for($o.lastIndex=0;;){const s=$o.exec(i),a=$o.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){wf(n,c===void 0?new fM(o,t,e):new dM(o,t,e));break}else{let f=n.map[o];f===void 0&&(f=new hM(o),wf(n,f)),n=f}}}class ba{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const o=e.getActiveUniform(n,a),l=e.getUniformLocation(n,o.name);pM(o,l,this)}const r=[],s=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,a=n.length;s!==a;++s){const o=n[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in n&&i.push(a)}return i}}function Rf(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const mM=37297;let gM=0;function _M(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${n[a]}`)}return i.join(`
`)}const Cf=new qe;function vM(t){Je._getMatrix(Cf,Je.workingColorSpace,t);const e=`mat3( ${Cf.elements.map(n=>n.toFixed(4))} )`;switch(Je.getTransfer(t)){case Ia:return[e,"LinearTransferOETF"];case ot:return[e,"sRGBTransferOETF"];default:return ke("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function Pf(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),s=(t.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return n.toUpperCase()+`

`+s+`

`+_M(t.getShaderSource(e),o)}else return s}function xM(t,e){const n=vM(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const SM={[xh]:"Linear",[Sh]:"Reinhard",[Mh]:"Cineon",[Eh]:"ACESFilmic",[bh]:"AgX",[Th]:"Neutral",[yh]:"Custom"};function MM(t,e){const n=SM[e];return n===void 0?(ke("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+t+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const da=new Y;function EM(){Je.getLuminanceCoefficients(da);const t=da.x.toFixed(4),e=da.y.toFixed(4),n=da.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function yM(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(os).join(`
`)}function bM(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function TM(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),a=s.name;let o=1;s.type===t.FLOAT_MAT2&&(o=2),s.type===t.FLOAT_MAT3&&(o=3),s.type===t.FLOAT_MAT4&&(o=4),n[a]={type:s.type,location:t.getAttribLocation(e,a),locationSize:o}}return n}function os(t){return t!==""}function Df(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function If(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const AM=/^[ \t]*#include +<([\w\d./]+)>/gm;function cc(t){return t.replace(AM,RM)}const wM=new Map;function RM(t,e){let n=Ye[e];if(n===void 0){const i=wM.get(e);if(i!==void 0)n=Ye[i],ke('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return cc(n)}const CM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Lf(t){return t.replace(CM,PM)}function PM(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Uf(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const DM={[xa]:"SHADOWMAP_TYPE_PCF",[as]:"SHADOWMAP_TYPE_VSM"};function IM(t){return DM[t.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const LM={[fr]:"ENVMAP_TYPE_CUBE",[zr]:"ENVMAP_TYPE_CUBE",[Ka]:"ENVMAP_TYPE_CUBE_UV"};function UM(t){return t.envMap===!1?"ENVMAP_TYPE_CUBE":LM[t.envMapMode]||"ENVMAP_TYPE_CUBE"}const NM={[zr]:"ENVMAP_MODE_REFRACTION"};function FM(t){return t.envMap===!1?"ENVMAP_MODE_REFLECTION":NM[t.envMapMode]||"ENVMAP_MODE_REFLECTION"}const OM={[vh]:"ENVMAP_BLENDING_MULTIPLY",[Rg]:"ENVMAP_BLENDING_MIX",[Cg]:"ENVMAP_BLENDING_ADD"};function BM(t){return t.envMap===!1?"ENVMAP_BLENDING_NONE":OM[t.combine]||"ENVMAP_BLENDING_NONE"}function VM(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:i,maxMip:n}}function zM(t,e,n,i){const r=t.getContext(),s=n.defines;let a=n.vertexShader,o=n.fragmentShader;const l=IM(n),c=UM(n),u=FM(n),f=BM(n),d=VM(n),h=yM(n),_=bM(s),v=r.createProgram();let m,p,b=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(os).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(os).join(`
`),p.length>0&&(p+=`
`)):(m=[Uf(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(os).join(`
`),p=[Uf(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==kn?"#define TONE_MAPPING":"",n.toneMapping!==kn?Ye.tonemapping_pars_fragment:"",n.toneMapping!==kn?MM("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ye.colorspace_pars_fragment,xM("linearToOutputTexel",n.outputColorSpace),EM(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(os).join(`
`)),a=cc(a),a=Df(a,n),a=If(a,n),o=cc(o),o=Df(o,n),o=If(o,n),a=Lf(a),o=Lf(o),n.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,m=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",n.glslVersion===Yu?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Yu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const T=b+m+a,M=b+p+o,w=Rf(r,r.VERTEX_SHADER,T),P=Rf(r,r.FRAGMENT_SHADER,M);r.attachShader(v,w),r.attachShader(v,P),n.index0AttributeName!==void 0?r.bindAttribLocation(v,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v);function D(L){if(t.debug.checkShaderErrors){const N=r.getProgramInfoLog(v)||"",G=r.getShaderInfoLog(w)||"",ne=r.getShaderInfoLog(P)||"",te=N.trim(),K=G.trim(),H=ne.trim();let ee=!0,ve=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(ee=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,v,w,P);else{const ge=Pf(r,w,"vertex"),Se=Pf(r,P,"fragment");et("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+te+`
`+ge+`
`+Se)}else te!==""?ke("WebGLProgram: Program Info Log:",te):(K===""||H==="")&&(ve=!1);ve&&(L.diagnostics={runnable:ee,programLog:te,vertexShader:{log:K,prefix:m},fragmentShader:{log:H,prefix:p}})}r.deleteShader(w),r.deleteShader(P),z=new ba(r,v),x=TM(r,v)}let z;this.getUniforms=function(){return z===void 0&&D(this),z};let x;this.getAttributes=function(){return x===void 0&&D(this),x};let y=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=r.getProgramParameter(v,mM)),y},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=gM++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=w,this.fragmentShader=P,this}let GM=0;class HM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new kM(e),n.set(e,i)),i}}class kM{constructor(e){this.id=GM++,this.code=e,this.usedTimes=0}}function WM(t,e,n,i,r,s,a){const o=new Oh,l=new HM,c=new Set,u=[],f=new Map,d=r.logarithmicDepthBuffer;let h=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(x){return c.add(x),x===0?"uv":`uv${x}`}function m(x,y,L,N,G){const ne=N.fog,te=G.geometry,K=x.isMeshStandardMaterial?N.environment:null,H=(x.isMeshStandardMaterial?n:e).get(x.envMap||K),ee=H&&H.mapping===Ka?H.image.height:null,ve=_[x.type];x.precision!==null&&(h=r.getMaxPrecision(x.precision),h!==x.precision&&ke("WebGLProgram.getParameters:",x.precision,"not supported, using",h,"instead."));const ge=te.morphAttributes.position||te.morphAttributes.normal||te.morphAttributes.color,Se=ge!==void 0?ge.length:0;let Fe=0;te.morphAttributes.position!==void 0&&(Fe=1),te.morphAttributes.normal!==void 0&&(Fe=2),te.morphAttributes.color!==void 0&&(Fe=3);let Ge,nt,Ze,re;if(ve){const st=Bn[ve];Ge=st.vertexShader,nt=st.fragmentShader}else Ge=x.vertexShader,nt=x.fragmentShader,l.update(x),Ze=l.getVertexShaderID(x),re=l.getFragmentShaderID(x);const U=t.getRenderTarget(),ie=t.state.buffers.depth.getReversed(),oe=G.isInstancedMesh===!0,ae=G.isBatchedMesh===!0,De=!!x.map,R=!!x.matcap,C=!!H,F=!!x.aoMap,j=!!x.lightMap,q=!!x.bumpMap,J=!!x.normalMap,A=!!x.displacementMap,fe=!!x.emissiveMap,le=!!x.metalnessMap,se=!!x.roughnessMap,ce=x.anisotropy>0,S=x.clearcoat>0,g=x.dispersion>0,I=x.iridescence>0,X=x.sheen>0,Q=x.transmission>0,W=ce&&!!x.anisotropyMap,Te=S&&!!x.clearcoatMap,he=S&&!!x.clearcoatNormalMap,Re=S&&!!x.clearcoatRoughnessMap,Ue=I&&!!x.iridescenceMap,de=I&&!!x.iridescenceThicknessMap,xe=X&&!!x.sheenColorMap,Ee=X&&!!x.sheenRoughnessMap,Ce=!!x.specularMap,_e=!!x.specularColorMap,Xe=!!x.specularIntensityMap,B=Q&&!!x.transmissionMap,we=Q&&!!x.thicknessMap,me=!!x.gradientMap,Pe=!!x.alphaMap,pe=x.alphaTest>0,ue=!!x.alphaHash,Me=!!x.extensions;let He=kn;x.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(He=t.toneMapping);const ht={shaderID:ve,shaderType:x.type,shaderName:x.name,vertexShader:Ge,fragmentShader:nt,defines:x.defines,customVertexShaderID:Ze,customFragmentShaderID:re,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:h,batching:ae,batchingColor:ae&&G._colorsTexture!==null,instancing:oe,instancingColor:oe&&G.instanceColor!==null,instancingMorph:oe&&G.morphTexture!==null,outputColorSpace:U===null?t.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:Hr,alphaToCoverage:!!x.alphaToCoverage,map:De,matcap:R,envMap:C,envMapMode:C&&H.mapping,envMapCubeUVHeight:ee,aoMap:F,lightMap:j,bumpMap:q,normalMap:J,displacementMap:A,emissiveMap:fe,normalMapObjectSpace:J&&x.normalMapType===Lg,normalMapTangentSpace:J&&x.normalMapType===Ig,metalnessMap:le,roughnessMap:se,anisotropy:ce,anisotropyMap:W,clearcoat:S,clearcoatMap:Te,clearcoatNormalMap:he,clearcoatRoughnessMap:Re,dispersion:g,iridescence:I,iridescenceMap:Ue,iridescenceThicknessMap:de,sheen:X,sheenColorMap:xe,sheenRoughnessMap:Ee,specularMap:Ce,specularColorMap:_e,specularIntensityMap:Xe,transmission:Q,transmissionMap:B,thicknessMap:we,gradientMap:me,opaque:x.transparent===!1&&x.blending===Fr&&x.alphaToCoverage===!1,alphaMap:Pe,alphaTest:pe,alphaHash:ue,combine:x.combine,mapUv:De&&v(x.map.channel),aoMapUv:F&&v(x.aoMap.channel),lightMapUv:j&&v(x.lightMap.channel),bumpMapUv:q&&v(x.bumpMap.channel),normalMapUv:J&&v(x.normalMap.channel),displacementMapUv:A&&v(x.displacementMap.channel),emissiveMapUv:fe&&v(x.emissiveMap.channel),metalnessMapUv:le&&v(x.metalnessMap.channel),roughnessMapUv:se&&v(x.roughnessMap.channel),anisotropyMapUv:W&&v(x.anisotropyMap.channel),clearcoatMapUv:Te&&v(x.clearcoatMap.channel),clearcoatNormalMapUv:he&&v(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Re&&v(x.clearcoatRoughnessMap.channel),iridescenceMapUv:Ue&&v(x.iridescenceMap.channel),iridescenceThicknessMapUv:de&&v(x.iridescenceThicknessMap.channel),sheenColorMapUv:xe&&v(x.sheenColorMap.channel),sheenRoughnessMapUv:Ee&&v(x.sheenRoughnessMap.channel),specularMapUv:Ce&&v(x.specularMap.channel),specularColorMapUv:_e&&v(x.specularColorMap.channel),specularIntensityMapUv:Xe&&v(x.specularIntensityMap.channel),transmissionMapUv:B&&v(x.transmissionMap.channel),thicknessMapUv:we&&v(x.thicknessMap.channel),alphaMapUv:Pe&&v(x.alphaMap.channel),vertexTangents:!!te.attributes.tangent&&(J||ce),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!te.attributes.color&&te.attributes.color.itemSize===4,pointsUvs:G.isPoints===!0&&!!te.attributes.uv&&(De||Pe),fog:!!ne,useFog:x.fog===!0,fogExp2:!!ne&&ne.isFogExp2,flatShading:x.flatShading===!0&&x.wireframe===!1,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:ie,skinning:G.isSkinnedMesh===!0,morphTargets:te.morphAttributes.position!==void 0,morphNormals:te.morphAttributes.normal!==void 0,morphColors:te.morphAttributes.color!==void 0,morphTargetsCount:Se,morphTextureStride:Fe,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:x.dithering,shadowMapEnabled:t.shadowMap.enabled&&L.length>0,shadowMapType:t.shadowMap.type,toneMapping:He,decodeVideoTexture:De&&x.map.isVideoTexture===!0&&Je.getTransfer(x.map.colorSpace)===ot,decodeVideoTextureEmissive:fe&&x.emissiveMap.isVideoTexture===!0&&Je.getTransfer(x.emissiveMap.colorSpace)===ot,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===oi,flipSided:x.side===nn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:Me&&x.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Me&&x.extensions.multiDraw===!0||ae)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return ht.vertexUv1s=c.has(1),ht.vertexUv2s=c.has(2),ht.vertexUv3s=c.has(3),c.clear(),ht}function p(x){const y=[];if(x.shaderID?y.push(x.shaderID):(y.push(x.customVertexShaderID),y.push(x.customFragmentShaderID)),x.defines!==void 0)for(const L in x.defines)y.push(L),y.push(x.defines[L]);return x.isRawShaderMaterial===!1&&(b(y,x),T(y,x),y.push(t.outputColorSpace)),y.push(x.customProgramCacheKey),y.join()}function b(x,y){x.push(y.precision),x.push(y.outputColorSpace),x.push(y.envMapMode),x.push(y.envMapCubeUVHeight),x.push(y.mapUv),x.push(y.alphaMapUv),x.push(y.lightMapUv),x.push(y.aoMapUv),x.push(y.bumpMapUv),x.push(y.normalMapUv),x.push(y.displacementMapUv),x.push(y.emissiveMapUv),x.push(y.metalnessMapUv),x.push(y.roughnessMapUv),x.push(y.anisotropyMapUv),x.push(y.clearcoatMapUv),x.push(y.clearcoatNormalMapUv),x.push(y.clearcoatRoughnessMapUv),x.push(y.iridescenceMapUv),x.push(y.iridescenceThicknessMapUv),x.push(y.sheenColorMapUv),x.push(y.sheenRoughnessMapUv),x.push(y.specularMapUv),x.push(y.specularColorMapUv),x.push(y.specularIntensityMapUv),x.push(y.transmissionMapUv),x.push(y.thicknessMapUv),x.push(y.combine),x.push(y.fogExp2),x.push(y.sizeAttenuation),x.push(y.morphTargetsCount),x.push(y.morphAttributeCount),x.push(y.numDirLights),x.push(y.numPointLights),x.push(y.numSpotLights),x.push(y.numSpotLightMaps),x.push(y.numHemiLights),x.push(y.numRectAreaLights),x.push(y.numDirLightShadows),x.push(y.numPointLightShadows),x.push(y.numSpotLightShadows),x.push(y.numSpotLightShadowsWithMaps),x.push(y.numLightProbes),x.push(y.shadowMapType),x.push(y.toneMapping),x.push(y.numClippingPlanes),x.push(y.numClipIntersection),x.push(y.depthPacking)}function T(x,y){o.disableAll(),y.instancing&&o.enable(0),y.instancingColor&&o.enable(1),y.instancingMorph&&o.enable(2),y.matcap&&o.enable(3),y.envMap&&o.enable(4),y.normalMapObjectSpace&&o.enable(5),y.normalMapTangentSpace&&o.enable(6),y.clearcoat&&o.enable(7),y.iridescence&&o.enable(8),y.alphaTest&&o.enable(9),y.vertexColors&&o.enable(10),y.vertexAlphas&&o.enable(11),y.vertexUv1s&&o.enable(12),y.vertexUv2s&&o.enable(13),y.vertexUv3s&&o.enable(14),y.vertexTangents&&o.enable(15),y.anisotropy&&o.enable(16),y.alphaHash&&o.enable(17),y.batching&&o.enable(18),y.dispersion&&o.enable(19),y.batchingColor&&o.enable(20),y.gradientMap&&o.enable(21),x.push(o.mask),o.disableAll(),y.fog&&o.enable(0),y.useFog&&o.enable(1),y.flatShading&&o.enable(2),y.logarithmicDepthBuffer&&o.enable(3),y.reversedDepthBuffer&&o.enable(4),y.skinning&&o.enable(5),y.morphTargets&&o.enable(6),y.morphNormals&&o.enable(7),y.morphColors&&o.enable(8),y.premultipliedAlpha&&o.enable(9),y.shadowMapEnabled&&o.enable(10),y.doubleSided&&o.enable(11),y.flipSided&&o.enable(12),y.useDepthPacking&&o.enable(13),y.dithering&&o.enable(14),y.transmission&&o.enable(15),y.sheen&&o.enable(16),y.opaque&&o.enable(17),y.pointsUvs&&o.enable(18),y.decodeVideoTexture&&o.enable(19),y.decodeVideoTextureEmissive&&o.enable(20),y.alphaToCoverage&&o.enable(21),x.push(o.mask)}function M(x){const y=_[x.type];let L;if(y){const N=Bn[y];L=o_.clone(N.uniforms)}else L=x.uniforms;return L}function w(x,y){let L=f.get(y);return L!==void 0?++L.usedTimes:(L=new zM(t,y,x,s),u.push(L),f.set(y,L)),L}function P(x){if(--x.usedTimes===0){const y=u.indexOf(x);u[y]=u[u.length-1],u.pop(),f.delete(x.cacheKey),x.destroy()}}function D(x){l.remove(x)}function z(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:M,acquireProgram:w,releaseProgram:P,releaseShaderCache:D,programs:u,dispose:z}}function XM(){let t=new WeakMap;function e(a){return t.has(a)}function n(a){let o=t.get(a);return o===void 0&&(o={},t.set(a,o)),o}function i(a){t.delete(a)}function r(a,o,l){t.get(a)[o]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function qM(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Nf(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Ff(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function a(f,d,h,_,v,m){let p=t[e];return p===void 0?(p={id:f.id,object:f,geometry:d,material:h,groupOrder:_,renderOrder:f.renderOrder,z:v,group:m},t[e]=p):(p.id=f.id,p.object=f,p.geometry=d,p.material=h,p.groupOrder=_,p.renderOrder=f.renderOrder,p.z=v,p.group=m),e++,p}function o(f,d,h,_,v,m){const p=a(f,d,h,_,v,m);h.transmission>0?i.push(p):h.transparent===!0?r.push(p):n.push(p)}function l(f,d,h,_,v,m){const p=a(f,d,h,_,v,m);h.transmission>0?i.unshift(p):h.transparent===!0?r.unshift(p):n.unshift(p)}function c(f,d){n.length>1&&n.sort(f||qM),i.length>1&&i.sort(d||Nf),r.length>1&&r.sort(d||Nf)}function u(){for(let f=e,d=t.length;f<d;f++){const h=t[f];if(h.id===null)break;h.id=null,h.object=null,h.geometry=null,h.material=null,h.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:o,unshift:l,finish:u,sort:c}}function YM(){let t=new WeakMap;function e(i,r){const s=t.get(i);let a;return s===void 0?(a=new Ff,t.set(i,[a])):r>=s.length?(a=new Ff,s.push(a)):a=s[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}function $M(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new Y,color:new lt};break;case"SpotLight":n={position:new Y,direction:new Y,color:new lt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new Y,color:new lt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new Y,skyColor:new lt,groundColor:new lt};break;case"RectAreaLight":n={color:new lt,position:new Y,halfWidth:new Y,halfHeight:new Y};break}return t[e.id]=n,n}}}function KM(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let jM=0;function ZM(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function JM(t){const e=new $M,n=KM(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new Y);const r=new Y,s=new bt,a=new bt;function o(c){let u=0,f=0,d=0;for(let x=0;x<9;x++)i.probe[x].set(0,0,0);let h=0,_=0,v=0,m=0,p=0,b=0,T=0,M=0,w=0,P=0,D=0;c.sort(ZM);for(let x=0,y=c.length;x<y;x++){const L=c[x],N=L.color,G=L.intensity,ne=L.distance;let te=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===Gr?te=L.shadow.map.texture:te=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)u+=N.r*G,f+=N.g*G,d+=N.b*G;else if(L.isLightProbe){for(let K=0;K<9;K++)i.probe[K].addScaledVector(L.sh.coefficients[K],G);D++}else if(L.isDirectionalLight){const K=e.get(L);if(K.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const H=L.shadow,ee=n.get(L);ee.shadowIntensity=H.intensity,ee.shadowBias=H.bias,ee.shadowNormalBias=H.normalBias,ee.shadowRadius=H.radius,ee.shadowMapSize=H.mapSize,i.directionalShadow[h]=ee,i.directionalShadowMap[h]=te,i.directionalShadowMatrix[h]=L.shadow.matrix,b++}i.directional[h]=K,h++}else if(L.isSpotLight){const K=e.get(L);K.position.setFromMatrixPosition(L.matrixWorld),K.color.copy(N).multiplyScalar(G),K.distance=ne,K.coneCos=Math.cos(L.angle),K.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),K.decay=L.decay,i.spot[v]=K;const H=L.shadow;if(L.map&&(i.spotLightMap[w]=L.map,w++,H.updateMatrices(L),L.castShadow&&P++),i.spotLightMatrix[v]=H.matrix,L.castShadow){const ee=n.get(L);ee.shadowIntensity=H.intensity,ee.shadowBias=H.bias,ee.shadowNormalBias=H.normalBias,ee.shadowRadius=H.radius,ee.shadowMapSize=H.mapSize,i.spotShadow[v]=ee,i.spotShadowMap[v]=te,M++}v++}else if(L.isRectAreaLight){const K=e.get(L);K.color.copy(N).multiplyScalar(G),K.halfWidth.set(L.width*.5,0,0),K.halfHeight.set(0,L.height*.5,0),i.rectArea[m]=K,m++}else if(L.isPointLight){const K=e.get(L);if(K.color.copy(L.color).multiplyScalar(L.intensity),K.distance=L.distance,K.decay=L.decay,L.castShadow){const H=L.shadow,ee=n.get(L);ee.shadowIntensity=H.intensity,ee.shadowBias=H.bias,ee.shadowNormalBias=H.normalBias,ee.shadowRadius=H.radius,ee.shadowMapSize=H.mapSize,ee.shadowCameraNear=H.camera.near,ee.shadowCameraFar=H.camera.far,i.pointShadow[_]=ee,i.pointShadowMap[_]=te,i.pointShadowMatrix[_]=L.shadow.matrix,T++}i.point[_]=K,_++}else if(L.isHemisphereLight){const K=e.get(L);K.skyColor.copy(L.color).multiplyScalar(G),K.groundColor.copy(L.groundColor).multiplyScalar(G),i.hemi[p]=K,p++}}m>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=be.LTC_FLOAT_1,i.rectAreaLTC2=be.LTC_FLOAT_2):(i.rectAreaLTC1=be.LTC_HALF_1,i.rectAreaLTC2=be.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=d;const z=i.hash;(z.directionalLength!==h||z.pointLength!==_||z.spotLength!==v||z.rectAreaLength!==m||z.hemiLength!==p||z.numDirectionalShadows!==b||z.numPointShadows!==T||z.numSpotShadows!==M||z.numSpotMaps!==w||z.numLightProbes!==D)&&(i.directional.length=h,i.spot.length=v,i.rectArea.length=m,i.point.length=_,i.hemi.length=p,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.pointShadow.length=T,i.pointShadowMap.length=T,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=b,i.pointShadowMatrix.length=T,i.spotLightMatrix.length=M+w-P,i.spotLightMap.length=w,i.numSpotLightShadowsWithMaps=P,i.numLightProbes=D,z.directionalLength=h,z.pointLength=_,z.spotLength=v,z.rectAreaLength=m,z.hemiLength=p,z.numDirectionalShadows=b,z.numPointShadows=T,z.numSpotShadows=M,z.numSpotMaps=w,z.numLightProbes=D,i.version=jM++)}function l(c,u){let f=0,d=0,h=0,_=0,v=0;const m=u.matrixWorldInverse;for(let p=0,b=c.length;p<b;p++){const T=c[p];if(T.isDirectionalLight){const M=i.directional[f];M.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(m),f++}else if(T.isSpotLight){const M=i.spot[h];M.position.setFromMatrixPosition(T.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(m),h++}else if(T.isRectAreaLight){const M=i.rectArea[_];M.position.setFromMatrixPosition(T.matrixWorld),M.position.applyMatrix4(m),a.identity(),s.copy(T.matrixWorld),s.premultiply(m),a.extractRotation(s),M.halfWidth.set(T.width*.5,0,0),M.halfHeight.set(0,T.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),_++}else if(T.isPointLight){const M=i.point[d];M.position.setFromMatrixPosition(T.matrixWorld),M.position.applyMatrix4(m),d++}else if(T.isHemisphereLight){const M=i.hemi[v];M.direction.setFromMatrixPosition(T.matrixWorld),M.direction.transformDirection(m),v++}}}return{setup:o,setupView:l,state:i}}function Of(t){const e=new JM(t),n=[],i=[];function r(u){c.camera=u,n.length=0,i.length=0}function s(u){n.push(u)}function a(u){i.push(u)}function o(){e.setup(n)}function l(u){e.setupView(n,u)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function QM(t){let e=new WeakMap;function n(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new Of(t),e.set(r,[o])):s>=a.length?(o=new Of(t),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:n,dispose:i}}const eE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,tE=`uniform sampler2D shadow_pass;
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
}`,nE=[new Y(1,0,0),new Y(-1,0,0),new Y(0,1,0),new Y(0,-1,0),new Y(0,0,1),new Y(0,0,-1)],iE=[new Y(0,-1,0),new Y(0,-1,0),new Y(0,0,1),new Y(0,0,-1),new Y(0,-1,0),new Y(0,-1,0)],Bf=new bt,is=new Y,Ko=new Y;function rE(t,e,n){let i=new qh;const r=new ut,s=new ut,a=new yt,o=new S_,l=new M_,c={},u=n.maxTextureSize,f={[zi]:nn,[nn]:zi,[oi]:oi},d=new qn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ut},radius:{value:4}},vertexShader:eE,fragmentShader:tE}),h=d.clone();h.defines.HORIZONTAL_PASS=1;const _=new In;_.setAttribute("position",new jt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new xi(_,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=xa;let p=this.type;this.render=function(P,D,z){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||P.length===0)return;P.type===cg&&(ke("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),P.type=xa);const x=t.getRenderTarget(),y=t.getActiveCubeFace(),L=t.getActiveMipmapLevel(),N=t.state;N.setBlending(ui),N.buffers.depth.getReversed()===!0?N.buffers.color.setClear(0,0,0,0):N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const G=p!==this.type;G&&D.traverse(function(ne){ne.material&&(Array.isArray(ne.material)?ne.material.forEach(te=>te.needsUpdate=!0):ne.material.needsUpdate=!0)});for(let ne=0,te=P.length;ne<te;ne++){const K=P[ne],H=K.shadow;if(H===void 0){ke("WebGLShadowMap:",K,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;r.copy(H.mapSize);const ee=H.getFrameExtents();if(r.multiply(ee),s.copy(H.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/ee.x),r.x=s.x*ee.x,H.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/ee.y),r.y=s.y*ee.y,H.mapSize.y=s.y)),H.map===null||G===!0){if(H.map!==null&&(H.map.depthTexture!==null&&(H.map.depthTexture.dispose(),H.map.depthTexture=null),H.map.dispose()),this.type===as){if(K.isPointLight){ke("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new Wn(r.x,r.y,{format:Gr,type:gi,minFilter:Gt,magFilter:Gt,generateMipmaps:!1}),H.map.texture.name=K.name+".shadowMap",H.map.depthTexture=new ws(r.x,r.y,Vn),H.map.depthTexture.name=K.name+".shadowMapDepth",H.map.depthTexture.format=_i,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Ut,H.map.depthTexture.magFilter=Ut}else{K.isPointLight?(H.map=new Xh(r.x),H.map.depthTexture=new v_(r.x,Xn)):(H.map=new Wn(r.x,r.y),H.map.depthTexture=new ws(r.x,r.y,Xn)),H.map.depthTexture.name=K.name+".shadowMap",H.map.depthTexture.format=_i;const ge=t.state.buffers.depth.getReversed();this.type===xa?(H.map.depthTexture.compareFunction=ge?kc:Hc,H.map.depthTexture.minFilter=Gt,H.map.depthTexture.magFilter=Gt):(H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Ut,H.map.depthTexture.magFilter=Ut)}H.camera.updateProjectionMatrix()}const ve=H.map.isWebGLCubeRenderTarget?6:1;for(let ge=0;ge<ve;ge++){if(H.map.isWebGLCubeRenderTarget)t.setRenderTarget(H.map,ge),t.clear();else{ge===0&&(t.setRenderTarget(H.map),t.clear());const Se=H.getViewport(ge);a.set(s.x*Se.x,s.y*Se.y,s.x*Se.z,s.y*Se.w),N.viewport(a)}if(K.isPointLight){const Se=H.camera,Fe=H.matrix,Ge=K.distance||Se.far;Ge!==Se.far&&(Se.far=Ge,Se.updateProjectionMatrix()),is.setFromMatrixPosition(K.matrixWorld),Se.position.copy(is),Ko.copy(Se.position),Ko.add(nE[ge]),Se.up.copy(iE[ge]),Se.lookAt(Ko),Se.updateMatrixWorld(),Fe.makeTranslation(-is.x,-is.y,-is.z),Bf.multiplyMatrices(Se.projectionMatrix,Se.matrixWorldInverse),H._frustum.setFromProjectionMatrix(Bf,Se.coordinateSystem,Se.reversedDepth)}else H.updateMatrices(K);i=H.getFrustum(),M(D,z,H.camera,K,this.type)}H.isPointLightShadow!==!0&&this.type===as&&b(H,z),H.needsUpdate=!1}p=this.type,m.needsUpdate=!1,t.setRenderTarget(x,y,L)};function b(P,D){const z=e.update(v);d.defines.VSM_SAMPLES!==P.blurSamples&&(d.defines.VSM_SAMPLES=P.blurSamples,h.defines.VSM_SAMPLES=P.blurSamples,d.needsUpdate=!0,h.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new Wn(r.x,r.y,{format:Gr,type:gi})),d.uniforms.shadow_pass.value=P.map.depthTexture,d.uniforms.resolution.value=P.mapSize,d.uniforms.radius.value=P.radius,t.setRenderTarget(P.mapPass),t.clear(),t.renderBufferDirect(D,null,z,d,v,null),h.uniforms.shadow_pass.value=P.mapPass.texture,h.uniforms.resolution.value=P.mapSize,h.uniforms.radius.value=P.radius,t.setRenderTarget(P.map),t.clear(),t.renderBufferDirect(D,null,z,h,v,null)}function T(P,D,z,x){let y=null;const L=z.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(L!==void 0)y=L;else if(y=z.isPointLight===!0?l:o,t.localClippingEnabled&&D.clipShadows===!0&&Array.isArray(D.clippingPlanes)&&D.clippingPlanes.length!==0||D.displacementMap&&D.displacementScale!==0||D.alphaMap&&D.alphaTest>0||D.map&&D.alphaTest>0||D.alphaToCoverage===!0){const N=y.uuid,G=D.uuid;let ne=c[N];ne===void 0&&(ne={},c[N]=ne);let te=ne[G];te===void 0&&(te=y.clone(),ne[G]=te,D.addEventListener("dispose",w)),y=te}if(y.visible=D.visible,y.wireframe=D.wireframe,x===as?y.side=D.shadowSide!==null?D.shadowSide:D.side:y.side=D.shadowSide!==null?D.shadowSide:f[D.side],y.alphaMap=D.alphaMap,y.alphaTest=D.alphaToCoverage===!0?.5:D.alphaTest,y.map=D.map,y.clipShadows=D.clipShadows,y.clippingPlanes=D.clippingPlanes,y.clipIntersection=D.clipIntersection,y.displacementMap=D.displacementMap,y.displacementScale=D.displacementScale,y.displacementBias=D.displacementBias,y.wireframeLinewidth=D.wireframeLinewidth,y.linewidth=D.linewidth,z.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const N=t.properties.get(y);N.light=z}return y}function M(P,D,z,x,y){if(P.visible===!1)return;if(P.layers.test(D.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&y===as)&&(!P.frustumCulled||i.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,P.matrixWorld);const G=e.update(P),ne=P.material;if(Array.isArray(ne)){const te=G.groups;for(let K=0,H=te.length;K<H;K++){const ee=te[K],ve=ne[ee.materialIndex];if(ve&&ve.visible){const ge=T(P,ve,x,y);P.onBeforeShadow(t,P,D,z,G,ge,ee),t.renderBufferDirect(z,null,G,ge,P,ee),P.onAfterShadow(t,P,D,z,G,ge,ee)}}}else if(ne.visible){const te=T(P,ne,x,y);P.onBeforeShadow(t,P,D,z,G,te,null),t.renderBufferDirect(z,null,G,te,P,null),P.onAfterShadow(t,P,D,z,G,te,null)}}const N=P.children;for(let G=0,ne=N.length;G<ne;G++)M(N[G],D,z,x,y)}function w(P){P.target.removeEventListener("dispose",w);for(const z in c){const x=c[z],y=P.target.uuid;y in x&&(x[y].dispose(),delete x[y])}}}const sE={[_l]:vl,[xl]:El,[Sl]:yl,[Vr]:Ml,[vl]:_l,[El]:xl,[yl]:Sl,[Ml]:Vr};function aE(t,e){function n(){let B=!1;const we=new yt;let me=null;const Pe=new yt(0,0,0,0);return{setMask:function(pe){me!==pe&&!B&&(t.colorMask(pe,pe,pe,pe),me=pe)},setLocked:function(pe){B=pe},setClear:function(pe,ue,Me,He,ht){ht===!0&&(pe*=He,ue*=He,Me*=He),we.set(pe,ue,Me,He),Pe.equals(we)===!1&&(t.clearColor(pe,ue,Me,He),Pe.copy(we))},reset:function(){B=!1,me=null,Pe.set(-1,0,0,0)}}}function i(){let B=!1,we=!1,me=null,Pe=null,pe=null;return{setReversed:function(ue){if(we!==ue){const Me=e.get("EXT_clip_control");ue?Me.clipControlEXT(Me.LOWER_LEFT_EXT,Me.ZERO_TO_ONE_EXT):Me.clipControlEXT(Me.LOWER_LEFT_EXT,Me.NEGATIVE_ONE_TO_ONE_EXT),we=ue;const He=pe;pe=null,this.setClear(He)}},getReversed:function(){return we},setTest:function(ue){ue?U(t.DEPTH_TEST):ie(t.DEPTH_TEST)},setMask:function(ue){me!==ue&&!B&&(t.depthMask(ue),me=ue)},setFunc:function(ue){if(we&&(ue=sE[ue]),Pe!==ue){switch(ue){case _l:t.depthFunc(t.NEVER);break;case vl:t.depthFunc(t.ALWAYS);break;case xl:t.depthFunc(t.LESS);break;case Vr:t.depthFunc(t.LEQUAL);break;case Sl:t.depthFunc(t.EQUAL);break;case Ml:t.depthFunc(t.GEQUAL);break;case El:t.depthFunc(t.GREATER);break;case yl:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}Pe=ue}},setLocked:function(ue){B=ue},setClear:function(ue){pe!==ue&&(we&&(ue=1-ue),t.clearDepth(ue),pe=ue)},reset:function(){B=!1,me=null,Pe=null,pe=null,we=!1}}}function r(){let B=!1,we=null,me=null,Pe=null,pe=null,ue=null,Me=null,He=null,ht=null;return{setTest:function(st){B||(st?U(t.STENCIL_TEST):ie(t.STENCIL_TEST))},setMask:function(st){we!==st&&!B&&(t.stencilMask(st),we=st)},setFunc:function(st,Ln,Yn){(me!==st||Pe!==Ln||pe!==Yn)&&(t.stencilFunc(st,Ln,Yn),me=st,Pe=Ln,pe=Yn)},setOp:function(st,Ln,Yn){(ue!==st||Me!==Ln||He!==Yn)&&(t.stencilOp(st,Ln,Yn),ue=st,Me=Ln,He=Yn)},setLocked:function(st){B=st},setClear:function(st){ht!==st&&(t.clearStencil(st),ht=st)},reset:function(){B=!1,we=null,me=null,Pe=null,pe=null,ue=null,Me=null,He=null,ht=null}}}const s=new n,a=new i,o=new r,l=new WeakMap,c=new WeakMap;let u={},f={},d=new WeakMap,h=[],_=null,v=!1,m=null,p=null,b=null,T=null,M=null,w=null,P=null,D=new lt(0,0,0),z=0,x=!1,y=null,L=null,N=null,G=null,ne=null;const te=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let K=!1,H=0;const ee=t.getParameter(t.VERSION);ee.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(ee)[1]),K=H>=1):ee.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(ee)[1]),K=H>=2);let ve=null,ge={};const Se=t.getParameter(t.SCISSOR_BOX),Fe=t.getParameter(t.VIEWPORT),Ge=new yt().fromArray(Se),nt=new yt().fromArray(Fe);function Ze(B,we,me,Pe){const pe=new Uint8Array(4),ue=t.createTexture();t.bindTexture(B,ue),t.texParameteri(B,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(B,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Me=0;Me<me;Me++)B===t.TEXTURE_3D||B===t.TEXTURE_2D_ARRAY?t.texImage3D(we,0,t.RGBA,1,1,Pe,0,t.RGBA,t.UNSIGNED_BYTE,pe):t.texImage2D(we+Me,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,pe);return ue}const re={};re[t.TEXTURE_2D]=Ze(t.TEXTURE_2D,t.TEXTURE_2D,1),re[t.TEXTURE_CUBE_MAP]=Ze(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),re[t.TEXTURE_2D_ARRAY]=Ze(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),re[t.TEXTURE_3D]=Ze(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),U(t.DEPTH_TEST),a.setFunc(Vr),q(!1),J(Hu),U(t.CULL_FACE),F(ui);function U(B){u[B]!==!0&&(t.enable(B),u[B]=!0)}function ie(B){u[B]!==!1&&(t.disable(B),u[B]=!1)}function oe(B,we){return f[B]!==we?(t.bindFramebuffer(B,we),f[B]=we,B===t.DRAW_FRAMEBUFFER&&(f[t.FRAMEBUFFER]=we),B===t.FRAMEBUFFER&&(f[t.DRAW_FRAMEBUFFER]=we),!0):!1}function ae(B,we){let me=h,Pe=!1;if(B){me=d.get(we),me===void 0&&(me=[],d.set(we,me));const pe=B.textures;if(me.length!==pe.length||me[0]!==t.COLOR_ATTACHMENT0){for(let ue=0,Me=pe.length;ue<Me;ue++)me[ue]=t.COLOR_ATTACHMENT0+ue;me.length=pe.length,Pe=!0}}else me[0]!==t.BACK&&(me[0]=t.BACK,Pe=!0);Pe&&t.drawBuffers(me)}function De(B){return _!==B?(t.useProgram(B),_=B,!0):!1}const R={[rr]:t.FUNC_ADD,[fg]:t.FUNC_SUBTRACT,[dg]:t.FUNC_REVERSE_SUBTRACT};R[hg]=t.MIN,R[pg]=t.MAX;const C={[mg]:t.ZERO,[gg]:t.ONE,[_g]:t.SRC_COLOR,[ml]:t.SRC_ALPHA,[yg]:t.SRC_ALPHA_SATURATE,[Mg]:t.DST_COLOR,[xg]:t.DST_ALPHA,[vg]:t.ONE_MINUS_SRC_COLOR,[gl]:t.ONE_MINUS_SRC_ALPHA,[Eg]:t.ONE_MINUS_DST_COLOR,[Sg]:t.ONE_MINUS_DST_ALPHA,[bg]:t.CONSTANT_COLOR,[Tg]:t.ONE_MINUS_CONSTANT_COLOR,[Ag]:t.CONSTANT_ALPHA,[wg]:t.ONE_MINUS_CONSTANT_ALPHA};function F(B,we,me,Pe,pe,ue,Me,He,ht,st){if(B===ui){v===!0&&(ie(t.BLEND),v=!1);return}if(v===!1&&(U(t.BLEND),v=!0),B!==ug){if(B!==m||st!==x){if((p!==rr||M!==rr)&&(t.blendEquation(t.FUNC_ADD),p=rr,M=rr),st)switch(B){case Fr:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case pl:t.blendFunc(t.ONE,t.ONE);break;case ku:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Wu:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:et("WebGLState: Invalid blending: ",B);break}else switch(B){case Fr:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case pl:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case ku:et("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Wu:et("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:et("WebGLState: Invalid blending: ",B);break}b=null,T=null,w=null,P=null,D.set(0,0,0),z=0,m=B,x=st}return}pe=pe||we,ue=ue||me,Me=Me||Pe,(we!==p||pe!==M)&&(t.blendEquationSeparate(R[we],R[pe]),p=we,M=pe),(me!==b||Pe!==T||ue!==w||Me!==P)&&(t.blendFuncSeparate(C[me],C[Pe],C[ue],C[Me]),b=me,T=Pe,w=ue,P=Me),(He.equals(D)===!1||ht!==z)&&(t.blendColor(He.r,He.g,He.b,ht),D.copy(He),z=ht),m=B,x=!1}function j(B,we){B.side===oi?ie(t.CULL_FACE):U(t.CULL_FACE);let me=B.side===nn;we&&(me=!me),q(me),B.blending===Fr&&B.transparent===!1?F(ui):F(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),a.setFunc(B.depthFunc),a.setTest(B.depthTest),a.setMask(B.depthWrite),s.setMask(B.colorWrite);const Pe=B.stencilWrite;o.setTest(Pe),Pe&&(o.setMask(B.stencilWriteMask),o.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),o.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),fe(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?U(t.SAMPLE_ALPHA_TO_COVERAGE):ie(t.SAMPLE_ALPHA_TO_COVERAGE)}function q(B){y!==B&&(B?t.frontFace(t.CW):t.frontFace(t.CCW),y=B)}function J(B){B!==og?(U(t.CULL_FACE),B!==L&&(B===Hu?t.cullFace(t.BACK):B===lg?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):ie(t.CULL_FACE),L=B}function A(B){B!==N&&(K&&t.lineWidth(B),N=B)}function fe(B,we,me){B?(U(t.POLYGON_OFFSET_FILL),(G!==we||ne!==me)&&(t.polygonOffset(we,me),G=we,ne=me)):ie(t.POLYGON_OFFSET_FILL)}function le(B){B?U(t.SCISSOR_TEST):ie(t.SCISSOR_TEST)}function se(B){B===void 0&&(B=t.TEXTURE0+te-1),ve!==B&&(t.activeTexture(B),ve=B)}function ce(B,we,me){me===void 0&&(ve===null?me=t.TEXTURE0+te-1:me=ve);let Pe=ge[me];Pe===void 0&&(Pe={type:void 0,texture:void 0},ge[me]=Pe),(Pe.type!==B||Pe.texture!==we)&&(ve!==me&&(t.activeTexture(me),ve=me),t.bindTexture(B,we||re[B]),Pe.type=B,Pe.texture=we)}function S(){const B=ge[ve];B!==void 0&&B.type!==void 0&&(t.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function g(){try{t.compressedTexImage2D(...arguments)}catch(B){et("WebGLState:",B)}}function I(){try{t.compressedTexImage3D(...arguments)}catch(B){et("WebGLState:",B)}}function X(){try{t.texSubImage2D(...arguments)}catch(B){et("WebGLState:",B)}}function Q(){try{t.texSubImage3D(...arguments)}catch(B){et("WebGLState:",B)}}function W(){try{t.compressedTexSubImage2D(...arguments)}catch(B){et("WebGLState:",B)}}function Te(){try{t.compressedTexSubImage3D(...arguments)}catch(B){et("WebGLState:",B)}}function he(){try{t.texStorage2D(...arguments)}catch(B){et("WebGLState:",B)}}function Re(){try{t.texStorage3D(...arguments)}catch(B){et("WebGLState:",B)}}function Ue(){try{t.texImage2D(...arguments)}catch(B){et("WebGLState:",B)}}function de(){try{t.texImage3D(...arguments)}catch(B){et("WebGLState:",B)}}function xe(B){Ge.equals(B)===!1&&(t.scissor(B.x,B.y,B.z,B.w),Ge.copy(B))}function Ee(B){nt.equals(B)===!1&&(t.viewport(B.x,B.y,B.z,B.w),nt.copy(B))}function Ce(B,we){let me=c.get(we);me===void 0&&(me=new WeakMap,c.set(we,me));let Pe=me.get(B);Pe===void 0&&(Pe=t.getUniformBlockIndex(we,B.name),me.set(B,Pe))}function _e(B,we){const Pe=c.get(we).get(B);l.get(we)!==Pe&&(t.uniformBlockBinding(we,Pe,B.__bindingPointIndex),l.set(we,Pe))}function Xe(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),a.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),u={},ve=null,ge={},f={},d=new WeakMap,h=[],_=null,v=!1,m=null,p=null,b=null,T=null,M=null,w=null,P=null,D=new lt(0,0,0),z=0,x=!1,y=null,L=null,N=null,G=null,ne=null,Ge.set(0,0,t.canvas.width,t.canvas.height),nt.set(0,0,t.canvas.width,t.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:U,disable:ie,bindFramebuffer:oe,drawBuffers:ae,useProgram:De,setBlending:F,setMaterial:j,setFlipSided:q,setCullFace:J,setLineWidth:A,setPolygonOffset:fe,setScissorTest:le,activeTexture:se,bindTexture:ce,unbindTexture:S,compressedTexImage2D:g,compressedTexImage3D:I,texImage2D:Ue,texImage3D:de,updateUBOMapping:Ce,uniformBlockBinding:_e,texStorage2D:he,texStorage3D:Re,texSubImage2D:X,texSubImage3D:Q,compressedTexSubImage2D:W,compressedTexSubImage3D:Te,scissor:xe,viewport:Ee,reset:Xe}}function oE(t,e,n,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ut,u=new WeakMap;let f;const d=new WeakMap;let h=!1;try{h=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(S,g){return h?new OffscreenCanvas(S,g):Ua("canvas")}function v(S,g,I){let X=1;const Q=ce(S);if((Q.width>I||Q.height>I)&&(X=I/Math.max(Q.width,Q.height)),X<1)if(typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&S instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&S instanceof ImageBitmap||typeof VideoFrame<"u"&&S instanceof VideoFrame){const W=Math.floor(X*Q.width),Te=Math.floor(X*Q.height);f===void 0&&(f=_(W,Te));const he=g?_(W,Te):f;return he.width=W,he.height=Te,he.getContext("2d").drawImage(S,0,0,W,Te),ke("WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+W+"x"+Te+")."),he}else return"data"in S&&ke("WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),S;return S}function m(S){return S.generateMipmaps}function p(S){t.generateMipmap(S)}function b(S){return S.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:S.isWebGL3DRenderTarget?t.TEXTURE_3D:S.isWebGLArrayRenderTarget||S.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function T(S,g,I,X,Q=!1){if(S!==null){if(t[S]!==void 0)return t[S];ke("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+S+"'")}let W=g;if(g===t.RED&&(I===t.FLOAT&&(W=t.R32F),I===t.HALF_FLOAT&&(W=t.R16F),I===t.UNSIGNED_BYTE&&(W=t.R8)),g===t.RED_INTEGER&&(I===t.UNSIGNED_BYTE&&(W=t.R8UI),I===t.UNSIGNED_SHORT&&(W=t.R16UI),I===t.UNSIGNED_INT&&(W=t.R32UI),I===t.BYTE&&(W=t.R8I),I===t.SHORT&&(W=t.R16I),I===t.INT&&(W=t.R32I)),g===t.RG&&(I===t.FLOAT&&(W=t.RG32F),I===t.HALF_FLOAT&&(W=t.RG16F),I===t.UNSIGNED_BYTE&&(W=t.RG8)),g===t.RG_INTEGER&&(I===t.UNSIGNED_BYTE&&(W=t.RG8UI),I===t.UNSIGNED_SHORT&&(W=t.RG16UI),I===t.UNSIGNED_INT&&(W=t.RG32UI),I===t.BYTE&&(W=t.RG8I),I===t.SHORT&&(W=t.RG16I),I===t.INT&&(W=t.RG32I)),g===t.RGB_INTEGER&&(I===t.UNSIGNED_BYTE&&(W=t.RGB8UI),I===t.UNSIGNED_SHORT&&(W=t.RGB16UI),I===t.UNSIGNED_INT&&(W=t.RGB32UI),I===t.BYTE&&(W=t.RGB8I),I===t.SHORT&&(W=t.RGB16I),I===t.INT&&(W=t.RGB32I)),g===t.RGBA_INTEGER&&(I===t.UNSIGNED_BYTE&&(W=t.RGBA8UI),I===t.UNSIGNED_SHORT&&(W=t.RGBA16UI),I===t.UNSIGNED_INT&&(W=t.RGBA32UI),I===t.BYTE&&(W=t.RGBA8I),I===t.SHORT&&(W=t.RGBA16I),I===t.INT&&(W=t.RGBA32I)),g===t.RGB&&(I===t.UNSIGNED_INT_5_9_9_9_REV&&(W=t.RGB9_E5),I===t.UNSIGNED_INT_10F_11F_11F_REV&&(W=t.R11F_G11F_B10F)),g===t.RGBA){const Te=Q?Ia:Je.getTransfer(X);I===t.FLOAT&&(W=t.RGBA32F),I===t.HALF_FLOAT&&(W=t.RGBA16F),I===t.UNSIGNED_BYTE&&(W=Te===ot?t.SRGB8_ALPHA8:t.RGBA8),I===t.UNSIGNED_SHORT_4_4_4_4&&(W=t.RGBA4),I===t.UNSIGNED_SHORT_5_5_5_1&&(W=t.RGB5_A1)}return(W===t.R16F||W===t.R32F||W===t.RG16F||W===t.RG32F||W===t.RGBA16F||W===t.RGBA32F)&&e.get("EXT_color_buffer_float"),W}function M(S,g){let I;return S?g===null||g===Xn||g===Ts?I=t.DEPTH24_STENCIL8:g===Vn?I=t.DEPTH32F_STENCIL8:g===bs&&(I=t.DEPTH24_STENCIL8,ke("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===Xn||g===Ts?I=t.DEPTH_COMPONENT24:g===Vn?I=t.DEPTH_COMPONENT32F:g===bs&&(I=t.DEPTH_COMPONENT16),I}function w(S,g){return m(S)===!0||S.isFramebufferTexture&&S.minFilter!==Ut&&S.minFilter!==Gt?Math.log2(Math.max(g.width,g.height))+1:S.mipmaps!==void 0&&S.mipmaps.length>0?S.mipmaps.length:S.isCompressedTexture&&Array.isArray(S.image)?g.mipmaps.length:1}function P(S){const g=S.target;g.removeEventListener("dispose",P),z(g),g.isVideoTexture&&u.delete(g)}function D(S){const g=S.target;g.removeEventListener("dispose",D),y(g)}function z(S){const g=i.get(S);if(g.__webglInit===void 0)return;const I=S.source,X=d.get(I);if(X){const Q=X[g.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&x(S),Object.keys(X).length===0&&d.delete(I)}i.remove(S)}function x(S){const g=i.get(S);t.deleteTexture(g.__webglTexture);const I=S.source,X=d.get(I);delete X[g.__cacheKey],a.memory.textures--}function y(S){const g=i.get(S);if(S.depthTexture&&(S.depthTexture.dispose(),i.remove(S.depthTexture)),S.isWebGLCubeRenderTarget)for(let X=0;X<6;X++){if(Array.isArray(g.__webglFramebuffer[X]))for(let Q=0;Q<g.__webglFramebuffer[X].length;Q++)t.deleteFramebuffer(g.__webglFramebuffer[X][Q]);else t.deleteFramebuffer(g.__webglFramebuffer[X]);g.__webglDepthbuffer&&t.deleteRenderbuffer(g.__webglDepthbuffer[X])}else{if(Array.isArray(g.__webglFramebuffer))for(let X=0;X<g.__webglFramebuffer.length;X++)t.deleteFramebuffer(g.__webglFramebuffer[X]);else t.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&t.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&t.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let X=0;X<g.__webglColorRenderbuffer.length;X++)g.__webglColorRenderbuffer[X]&&t.deleteRenderbuffer(g.__webglColorRenderbuffer[X]);g.__webglDepthRenderbuffer&&t.deleteRenderbuffer(g.__webglDepthRenderbuffer)}const I=S.textures;for(let X=0,Q=I.length;X<Q;X++){const W=i.get(I[X]);W.__webglTexture&&(t.deleteTexture(W.__webglTexture),a.memory.textures--),i.remove(I[X])}i.remove(S)}let L=0;function N(){L=0}function G(){const S=L;return S>=r.maxTextures&&ke("WebGLTextures: Trying to use "+S+" texture units while this GPU supports only "+r.maxTextures),L+=1,S}function ne(S){const g=[];return g.push(S.wrapS),g.push(S.wrapT),g.push(S.wrapR||0),g.push(S.magFilter),g.push(S.minFilter),g.push(S.anisotropy),g.push(S.internalFormat),g.push(S.format),g.push(S.type),g.push(S.generateMipmaps),g.push(S.premultiplyAlpha),g.push(S.flipY),g.push(S.unpackAlignment),g.push(S.colorSpace),g.join()}function te(S,g){const I=i.get(S);if(S.isVideoTexture&&le(S),S.isRenderTargetTexture===!1&&S.isExternalTexture!==!0&&S.version>0&&I.__version!==S.version){const X=S.image;if(X===null)ke("WebGLRenderer: Texture marked for update but no image data found.");else if(X.complete===!1)ke("WebGLRenderer: Texture marked for update but image is incomplete");else{re(I,S,g);return}}else S.isExternalTexture&&(I.__webglTexture=S.sourceTexture?S.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,I.__webglTexture,t.TEXTURE0+g)}function K(S,g){const I=i.get(S);if(S.isRenderTargetTexture===!1&&S.version>0&&I.__version!==S.version){re(I,S,g);return}else S.isExternalTexture&&(I.__webglTexture=S.sourceTexture?S.sourceTexture:null);n.bindTexture(t.TEXTURE_2D_ARRAY,I.__webglTexture,t.TEXTURE0+g)}function H(S,g){const I=i.get(S);if(S.isRenderTargetTexture===!1&&S.version>0&&I.__version!==S.version){re(I,S,g);return}n.bindTexture(t.TEXTURE_3D,I.__webglTexture,t.TEXTURE0+g)}function ee(S,g){const I=i.get(S);if(S.isCubeDepthTexture!==!0&&S.version>0&&I.__version!==S.version){U(I,S,g);return}n.bindTexture(t.TEXTURE_CUBE_MAP,I.__webglTexture,t.TEXTURE0+g)}const ve={[Al]:t.REPEAT,[li]:t.CLAMP_TO_EDGE,[wl]:t.MIRRORED_REPEAT},ge={[Ut]:t.NEAREST,[Pg]:t.NEAREST_MIPMAP_NEAREST,[Ws]:t.NEAREST_MIPMAP_LINEAR,[Gt]:t.LINEAR,[xo]:t.LINEAR_MIPMAP_NEAREST,[ar]:t.LINEAR_MIPMAP_LINEAR},Se={[Ug]:t.NEVER,[Vg]:t.ALWAYS,[Ng]:t.LESS,[Hc]:t.LEQUAL,[Fg]:t.EQUAL,[kc]:t.GEQUAL,[Og]:t.GREATER,[Bg]:t.NOTEQUAL};function Fe(S,g){if(g.type===Vn&&e.has("OES_texture_float_linear")===!1&&(g.magFilter===Gt||g.magFilter===xo||g.magFilter===Ws||g.magFilter===ar||g.minFilter===Gt||g.minFilter===xo||g.minFilter===Ws||g.minFilter===ar)&&ke("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(S,t.TEXTURE_WRAP_S,ve[g.wrapS]),t.texParameteri(S,t.TEXTURE_WRAP_T,ve[g.wrapT]),(S===t.TEXTURE_3D||S===t.TEXTURE_2D_ARRAY)&&t.texParameteri(S,t.TEXTURE_WRAP_R,ve[g.wrapR]),t.texParameteri(S,t.TEXTURE_MAG_FILTER,ge[g.magFilter]),t.texParameteri(S,t.TEXTURE_MIN_FILTER,ge[g.minFilter]),g.compareFunction&&(t.texParameteri(S,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(S,t.TEXTURE_COMPARE_FUNC,Se[g.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===Ut||g.minFilter!==Ws&&g.minFilter!==ar||g.type===Vn&&e.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||i.get(g).__currentAnisotropy){const I=e.get("EXT_texture_filter_anisotropic");t.texParameterf(S,I.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,r.getMaxAnisotropy())),i.get(g).__currentAnisotropy=g.anisotropy}}}function Ge(S,g){let I=!1;S.__webglInit===void 0&&(S.__webglInit=!0,g.addEventListener("dispose",P));const X=g.source;let Q=d.get(X);Q===void 0&&(Q={},d.set(X,Q));const W=ne(g);if(W!==S.__cacheKey){Q[W]===void 0&&(Q[W]={texture:t.createTexture(),usedTimes:0},a.memory.textures++,I=!0),Q[W].usedTimes++;const Te=Q[S.__cacheKey];Te!==void 0&&(Q[S.__cacheKey].usedTimes--,Te.usedTimes===0&&x(g)),S.__cacheKey=W,S.__webglTexture=Q[W].texture}return I}function nt(S,g,I){return Math.floor(Math.floor(S/I)/g)}function Ze(S,g,I,X){const W=S.updateRanges;if(W.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,g.width,g.height,I,X,g.data);else{W.sort((de,xe)=>de.start-xe.start);let Te=0;for(let de=1;de<W.length;de++){const xe=W[Te],Ee=W[de],Ce=xe.start+xe.count,_e=nt(Ee.start,g.width,4),Xe=nt(xe.start,g.width,4);Ee.start<=Ce+1&&_e===Xe&&nt(Ee.start+Ee.count-1,g.width,4)===_e?xe.count=Math.max(xe.count,Ee.start+Ee.count-xe.start):(++Te,W[Te]=Ee)}W.length=Te+1;const he=t.getParameter(t.UNPACK_ROW_LENGTH),Re=t.getParameter(t.UNPACK_SKIP_PIXELS),Ue=t.getParameter(t.UNPACK_SKIP_ROWS);t.pixelStorei(t.UNPACK_ROW_LENGTH,g.width);for(let de=0,xe=W.length;de<xe;de++){const Ee=W[de],Ce=Math.floor(Ee.start/4),_e=Math.ceil(Ee.count/4),Xe=Ce%g.width,B=Math.floor(Ce/g.width),we=_e,me=1;t.pixelStorei(t.UNPACK_SKIP_PIXELS,Xe),t.pixelStorei(t.UNPACK_SKIP_ROWS,B),n.texSubImage2D(t.TEXTURE_2D,0,Xe,B,we,me,I,X,g.data)}S.clearUpdateRanges(),t.pixelStorei(t.UNPACK_ROW_LENGTH,he),t.pixelStorei(t.UNPACK_SKIP_PIXELS,Re),t.pixelStorei(t.UNPACK_SKIP_ROWS,Ue)}}function re(S,g,I){let X=t.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(X=t.TEXTURE_2D_ARRAY),g.isData3DTexture&&(X=t.TEXTURE_3D);const Q=Ge(S,g),W=g.source;n.bindTexture(X,S.__webglTexture,t.TEXTURE0+I);const Te=i.get(W);if(W.version!==Te.__version||Q===!0){n.activeTexture(t.TEXTURE0+I);const he=Je.getPrimaries(Je.workingColorSpace),Re=g.colorSpace===Ni?null:Je.getPrimaries(g.colorSpace),Ue=g.colorSpace===Ni||he===Re?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,g.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,g.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ue);let de=v(g.image,!1,r.maxTextureSize);de=se(g,de);const xe=s.convert(g.format,g.colorSpace),Ee=s.convert(g.type);let Ce=T(g.internalFormat,xe,Ee,g.colorSpace,g.isVideoTexture);Fe(X,g);let _e;const Xe=g.mipmaps,B=g.isVideoTexture!==!0,we=Te.__version===void 0||Q===!0,me=W.dataReady,Pe=w(g,de);if(g.isDepthTexture)Ce=M(g.format===or,g.type),we&&(B?n.texStorage2D(t.TEXTURE_2D,1,Ce,de.width,de.height):n.texImage2D(t.TEXTURE_2D,0,Ce,de.width,de.height,0,xe,Ee,null));else if(g.isDataTexture)if(Xe.length>0){B&&we&&n.texStorage2D(t.TEXTURE_2D,Pe,Ce,Xe[0].width,Xe[0].height);for(let pe=0,ue=Xe.length;pe<ue;pe++)_e=Xe[pe],B?me&&n.texSubImage2D(t.TEXTURE_2D,pe,0,0,_e.width,_e.height,xe,Ee,_e.data):n.texImage2D(t.TEXTURE_2D,pe,Ce,_e.width,_e.height,0,xe,Ee,_e.data);g.generateMipmaps=!1}else B?(we&&n.texStorage2D(t.TEXTURE_2D,Pe,Ce,de.width,de.height),me&&Ze(g,de,xe,Ee)):n.texImage2D(t.TEXTURE_2D,0,Ce,de.width,de.height,0,xe,Ee,de.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){B&&we&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Pe,Ce,Xe[0].width,Xe[0].height,de.depth);for(let pe=0,ue=Xe.length;pe<ue;pe++)if(_e=Xe[pe],g.format!==An)if(xe!==null)if(B){if(me)if(g.layerUpdates.size>0){const Me=mf(_e.width,_e.height,g.format,g.type);for(const He of g.layerUpdates){const ht=_e.data.subarray(He*Me/_e.data.BYTES_PER_ELEMENT,(He+1)*Me/_e.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,pe,0,0,He,_e.width,_e.height,1,xe,ht)}g.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,pe,0,0,0,_e.width,_e.height,de.depth,xe,_e.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,pe,Ce,_e.width,_e.height,de.depth,0,_e.data,0,0);else ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else B?me&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,pe,0,0,0,_e.width,_e.height,de.depth,xe,Ee,_e.data):n.texImage3D(t.TEXTURE_2D_ARRAY,pe,Ce,_e.width,_e.height,de.depth,0,xe,Ee,_e.data)}else{B&&we&&n.texStorage2D(t.TEXTURE_2D,Pe,Ce,Xe[0].width,Xe[0].height);for(let pe=0,ue=Xe.length;pe<ue;pe++)_e=Xe[pe],g.format!==An?xe!==null?B?me&&n.compressedTexSubImage2D(t.TEXTURE_2D,pe,0,0,_e.width,_e.height,xe,_e.data):n.compressedTexImage2D(t.TEXTURE_2D,pe,Ce,_e.width,_e.height,0,_e.data):ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):B?me&&n.texSubImage2D(t.TEXTURE_2D,pe,0,0,_e.width,_e.height,xe,Ee,_e.data):n.texImage2D(t.TEXTURE_2D,pe,Ce,_e.width,_e.height,0,xe,Ee,_e.data)}else if(g.isDataArrayTexture)if(B){if(we&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Pe,Ce,de.width,de.height,de.depth),me)if(g.layerUpdates.size>0){const pe=mf(de.width,de.height,g.format,g.type);for(const ue of g.layerUpdates){const Me=de.data.subarray(ue*pe/de.data.BYTES_PER_ELEMENT,(ue+1)*pe/de.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,ue,de.width,de.height,1,xe,Ee,Me)}g.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,de.width,de.height,de.depth,xe,Ee,de.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Ce,de.width,de.height,de.depth,0,xe,Ee,de.data);else if(g.isData3DTexture)B?(we&&n.texStorage3D(t.TEXTURE_3D,Pe,Ce,de.width,de.height,de.depth),me&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,de.width,de.height,de.depth,xe,Ee,de.data)):n.texImage3D(t.TEXTURE_3D,0,Ce,de.width,de.height,de.depth,0,xe,Ee,de.data);else if(g.isFramebufferTexture){if(we)if(B)n.texStorage2D(t.TEXTURE_2D,Pe,Ce,de.width,de.height);else{let pe=de.width,ue=de.height;for(let Me=0;Me<Pe;Me++)n.texImage2D(t.TEXTURE_2D,Me,Ce,pe,ue,0,xe,Ee,null),pe>>=1,ue>>=1}}else if(Xe.length>0){if(B&&we){const pe=ce(Xe[0]);n.texStorage2D(t.TEXTURE_2D,Pe,Ce,pe.width,pe.height)}for(let pe=0,ue=Xe.length;pe<ue;pe++)_e=Xe[pe],B?me&&n.texSubImage2D(t.TEXTURE_2D,pe,0,0,xe,Ee,_e):n.texImage2D(t.TEXTURE_2D,pe,Ce,xe,Ee,_e);g.generateMipmaps=!1}else if(B){if(we){const pe=ce(de);n.texStorage2D(t.TEXTURE_2D,Pe,Ce,pe.width,pe.height)}me&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,xe,Ee,de)}else n.texImage2D(t.TEXTURE_2D,0,Ce,xe,Ee,de);m(g)&&p(X),Te.__version=W.version,g.onUpdate&&g.onUpdate(g)}S.__version=g.version}function U(S,g,I){if(g.image.length!==6)return;const X=Ge(S,g),Q=g.source;n.bindTexture(t.TEXTURE_CUBE_MAP,S.__webglTexture,t.TEXTURE0+I);const W=i.get(Q);if(Q.version!==W.__version||X===!0){n.activeTexture(t.TEXTURE0+I);const Te=Je.getPrimaries(Je.workingColorSpace),he=g.colorSpace===Ni?null:Je.getPrimaries(g.colorSpace),Re=g.colorSpace===Ni||Te===he?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,g.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,g.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Re);const Ue=g.isCompressedTexture||g.image[0].isCompressedTexture,de=g.image[0]&&g.image[0].isDataTexture,xe=[];for(let ue=0;ue<6;ue++)!Ue&&!de?xe[ue]=v(g.image[ue],!0,r.maxCubemapSize):xe[ue]=de?g.image[ue].image:g.image[ue],xe[ue]=se(g,xe[ue]);const Ee=xe[0],Ce=s.convert(g.format,g.colorSpace),_e=s.convert(g.type),Xe=T(g.internalFormat,Ce,_e,g.colorSpace),B=g.isVideoTexture!==!0,we=W.__version===void 0||X===!0,me=Q.dataReady;let Pe=w(g,Ee);Fe(t.TEXTURE_CUBE_MAP,g);let pe;if(Ue){B&&we&&n.texStorage2D(t.TEXTURE_CUBE_MAP,Pe,Xe,Ee.width,Ee.height);for(let ue=0;ue<6;ue++){pe=xe[ue].mipmaps;for(let Me=0;Me<pe.length;Me++){const He=pe[Me];g.format!==An?Ce!==null?B?me&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Me,0,0,He.width,He.height,Ce,He.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Me,Xe,He.width,He.height,0,He.data):ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):B?me&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Me,0,0,He.width,He.height,Ce,_e,He.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Me,Xe,He.width,He.height,0,Ce,_e,He.data)}}}else{if(pe=g.mipmaps,B&&we){pe.length>0&&Pe++;const ue=ce(xe[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,Pe,Xe,ue.width,ue.height)}for(let ue=0;ue<6;ue++)if(de){B?me&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,0,0,xe[ue].width,xe[ue].height,Ce,_e,xe[ue].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,Xe,xe[ue].width,xe[ue].height,0,Ce,_e,xe[ue].data);for(let Me=0;Me<pe.length;Me++){const ht=pe[Me].image[ue].image;B?me&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Me+1,0,0,ht.width,ht.height,Ce,_e,ht.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Me+1,Xe,ht.width,ht.height,0,Ce,_e,ht.data)}}else{B?me&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,0,0,Ce,_e,xe[ue]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,Xe,Ce,_e,xe[ue]);for(let Me=0;Me<pe.length;Me++){const He=pe[Me];B?me&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Me+1,0,0,Ce,_e,He.image[ue]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Me+1,Xe,Ce,_e,He.image[ue])}}}m(g)&&p(t.TEXTURE_CUBE_MAP),W.__version=Q.version,g.onUpdate&&g.onUpdate(g)}S.__version=g.version}function ie(S,g,I,X,Q,W){const Te=s.convert(I.format,I.colorSpace),he=s.convert(I.type),Re=T(I.internalFormat,Te,he,I.colorSpace),Ue=i.get(g),de=i.get(I);if(de.__renderTarget=g,!Ue.__hasExternalTextures){const xe=Math.max(1,g.width>>W),Ee=Math.max(1,g.height>>W);Q===t.TEXTURE_3D||Q===t.TEXTURE_2D_ARRAY?n.texImage3D(Q,W,Re,xe,Ee,g.depth,0,Te,he,null):n.texImage2D(Q,W,Re,xe,Ee,0,Te,he,null)}n.bindFramebuffer(t.FRAMEBUFFER,S),fe(g)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,X,Q,de.__webglTexture,0,A(g)):(Q===t.TEXTURE_2D||Q>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,X,Q,de.__webglTexture,W),n.bindFramebuffer(t.FRAMEBUFFER,null)}function oe(S,g,I){if(t.bindRenderbuffer(t.RENDERBUFFER,S),g.depthBuffer){const X=g.depthTexture,Q=X&&X.isDepthTexture?X.type:null,W=M(g.stencilBuffer,Q),Te=g.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;fe(g)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,A(g),W,g.width,g.height):I?t.renderbufferStorageMultisample(t.RENDERBUFFER,A(g),W,g.width,g.height):t.renderbufferStorage(t.RENDERBUFFER,W,g.width,g.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,Te,t.RENDERBUFFER,S)}else{const X=g.textures;for(let Q=0;Q<X.length;Q++){const W=X[Q],Te=s.convert(W.format,W.colorSpace),he=s.convert(W.type),Re=T(W.internalFormat,Te,he,W.colorSpace);fe(g)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,A(g),Re,g.width,g.height):I?t.renderbufferStorageMultisample(t.RENDERBUFFER,A(g),Re,g.width,g.height):t.renderbufferStorage(t.RENDERBUFFER,Re,g.width,g.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function ae(S,g,I){const X=g.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(t.FRAMEBUFFER,S),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Q=i.get(g.depthTexture);if(Q.__renderTarget=g,(!Q.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),X){if(Q.__webglInit===void 0&&(Q.__webglInit=!0,g.depthTexture.addEventListener("dispose",P)),Q.__webglTexture===void 0){Q.__webglTexture=t.createTexture(),n.bindTexture(t.TEXTURE_CUBE_MAP,Q.__webglTexture),Fe(t.TEXTURE_CUBE_MAP,g.depthTexture);const Ue=s.convert(g.depthTexture.format),de=s.convert(g.depthTexture.type);let xe;g.depthTexture.format===_i?xe=t.DEPTH_COMPONENT24:g.depthTexture.format===or&&(xe=t.DEPTH24_STENCIL8);for(let Ee=0;Ee<6;Ee++)t.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,xe,g.width,g.height,0,Ue,de,null)}}else te(g.depthTexture,0);const W=Q.__webglTexture,Te=A(g),he=X?t.TEXTURE_CUBE_MAP_POSITIVE_X+I:t.TEXTURE_2D,Re=g.depthTexture.format===or?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(g.depthTexture.format===_i)fe(g)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Re,he,W,0,Te):t.framebufferTexture2D(t.FRAMEBUFFER,Re,he,W,0);else if(g.depthTexture.format===or)fe(g)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Re,he,W,0,Te):t.framebufferTexture2D(t.FRAMEBUFFER,Re,he,W,0);else throw new Error("Unknown depthTexture format")}function De(S){const g=i.get(S),I=S.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==S.depthTexture){const X=S.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),X){const Q=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,X.removeEventListener("dispose",Q)};X.addEventListener("dispose",Q),g.__depthDisposeCallback=Q}g.__boundDepthTexture=X}if(S.depthTexture&&!g.__autoAllocateDepthBuffer)if(I)for(let X=0;X<6;X++)ae(g.__webglFramebuffer[X],S,X);else{const X=S.texture.mipmaps;X&&X.length>0?ae(g.__webglFramebuffer[0],S,0):ae(g.__webglFramebuffer,S,0)}else if(I){g.__webglDepthbuffer=[];for(let X=0;X<6;X++)if(n.bindFramebuffer(t.FRAMEBUFFER,g.__webglFramebuffer[X]),g.__webglDepthbuffer[X]===void 0)g.__webglDepthbuffer[X]=t.createRenderbuffer(),oe(g.__webglDepthbuffer[X],S,!1);else{const Q=S.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,W=g.__webglDepthbuffer[X];t.bindRenderbuffer(t.RENDERBUFFER,W),t.framebufferRenderbuffer(t.FRAMEBUFFER,Q,t.RENDERBUFFER,W)}}else{const X=S.texture.mipmaps;if(X&&X.length>0?n.bindFramebuffer(t.FRAMEBUFFER,g.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=t.createRenderbuffer(),oe(g.__webglDepthbuffer,S,!1);else{const Q=S.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,W=g.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,W),t.framebufferRenderbuffer(t.FRAMEBUFFER,Q,t.RENDERBUFFER,W)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function R(S,g,I){const X=i.get(S);g!==void 0&&ie(X.__webglFramebuffer,S,S.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),I!==void 0&&De(S)}function C(S){const g=S.texture,I=i.get(S),X=i.get(g);S.addEventListener("dispose",D);const Q=S.textures,W=S.isWebGLCubeRenderTarget===!0,Te=Q.length>1;if(Te||(X.__webglTexture===void 0&&(X.__webglTexture=t.createTexture()),X.__version=g.version,a.memory.textures++),W){I.__webglFramebuffer=[];for(let he=0;he<6;he++)if(g.mipmaps&&g.mipmaps.length>0){I.__webglFramebuffer[he]=[];for(let Re=0;Re<g.mipmaps.length;Re++)I.__webglFramebuffer[he][Re]=t.createFramebuffer()}else I.__webglFramebuffer[he]=t.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){I.__webglFramebuffer=[];for(let he=0;he<g.mipmaps.length;he++)I.__webglFramebuffer[he]=t.createFramebuffer()}else I.__webglFramebuffer=t.createFramebuffer();if(Te)for(let he=0,Re=Q.length;he<Re;he++){const Ue=i.get(Q[he]);Ue.__webglTexture===void 0&&(Ue.__webglTexture=t.createTexture(),a.memory.textures++)}if(S.samples>0&&fe(S)===!1){I.__webglMultisampledFramebuffer=t.createFramebuffer(),I.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,I.__webglMultisampledFramebuffer);for(let he=0;he<Q.length;he++){const Re=Q[he];I.__webglColorRenderbuffer[he]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,I.__webglColorRenderbuffer[he]);const Ue=s.convert(Re.format,Re.colorSpace),de=s.convert(Re.type),xe=T(Re.internalFormat,Ue,de,Re.colorSpace,S.isXRRenderTarget===!0),Ee=A(S);t.renderbufferStorageMultisample(t.RENDERBUFFER,Ee,xe,S.width,S.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+he,t.RENDERBUFFER,I.__webglColorRenderbuffer[he])}t.bindRenderbuffer(t.RENDERBUFFER,null),S.depthBuffer&&(I.__webglDepthRenderbuffer=t.createRenderbuffer(),oe(I.__webglDepthRenderbuffer,S,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(W){n.bindTexture(t.TEXTURE_CUBE_MAP,X.__webglTexture),Fe(t.TEXTURE_CUBE_MAP,g);for(let he=0;he<6;he++)if(g.mipmaps&&g.mipmaps.length>0)for(let Re=0;Re<g.mipmaps.length;Re++)ie(I.__webglFramebuffer[he][Re],S,g,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+he,Re);else ie(I.__webglFramebuffer[he],S,g,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+he,0);m(g)&&p(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Te){for(let he=0,Re=Q.length;he<Re;he++){const Ue=Q[he],de=i.get(Ue);let xe=t.TEXTURE_2D;(S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(xe=S.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(xe,de.__webglTexture),Fe(xe,Ue),ie(I.__webglFramebuffer,S,Ue,t.COLOR_ATTACHMENT0+he,xe,0),m(Ue)&&p(xe)}n.unbindTexture()}else{let he=t.TEXTURE_2D;if((S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(he=S.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(he,X.__webglTexture),Fe(he,g),g.mipmaps&&g.mipmaps.length>0)for(let Re=0;Re<g.mipmaps.length;Re++)ie(I.__webglFramebuffer[Re],S,g,t.COLOR_ATTACHMENT0,he,Re);else ie(I.__webglFramebuffer,S,g,t.COLOR_ATTACHMENT0,he,0);m(g)&&p(he),n.unbindTexture()}S.depthBuffer&&De(S)}function F(S){const g=S.textures;for(let I=0,X=g.length;I<X;I++){const Q=g[I];if(m(Q)){const W=b(S),Te=i.get(Q).__webglTexture;n.bindTexture(W,Te),p(W),n.unbindTexture()}}}const j=[],q=[];function J(S){if(S.samples>0){if(fe(S)===!1){const g=S.textures,I=S.width,X=S.height;let Q=t.COLOR_BUFFER_BIT;const W=S.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Te=i.get(S),he=g.length>1;if(he)for(let Ue=0;Ue<g.length;Ue++)n.bindFramebuffer(t.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ue,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Te.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ue,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Te.__webglMultisampledFramebuffer);const Re=S.texture.mipmaps;Re&&Re.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Te.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Te.__webglFramebuffer);for(let Ue=0;Ue<g.length;Ue++){if(S.resolveDepthBuffer&&(S.depthBuffer&&(Q|=t.DEPTH_BUFFER_BIT),S.stencilBuffer&&S.resolveStencilBuffer&&(Q|=t.STENCIL_BUFFER_BIT)),he){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Te.__webglColorRenderbuffer[Ue]);const de=i.get(g[Ue]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,de,0)}t.blitFramebuffer(0,0,I,X,0,0,I,X,Q,t.NEAREST),l===!0&&(j.length=0,q.length=0,j.push(t.COLOR_ATTACHMENT0+Ue),S.depthBuffer&&S.resolveDepthBuffer===!1&&(j.push(W),q.push(W),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,q)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,j))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),he)for(let Ue=0;Ue<g.length;Ue++){n.bindFramebuffer(t.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ue,t.RENDERBUFFER,Te.__webglColorRenderbuffer[Ue]);const de=i.get(g[Ue]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Te.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ue,t.TEXTURE_2D,de,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Te.__webglMultisampledFramebuffer)}else if(S.depthBuffer&&S.resolveDepthBuffer===!1&&l){const g=S.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[g])}}}function A(S){return Math.min(r.maxSamples,S.samples)}function fe(S){const g=i.get(S);return S.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function le(S){const g=a.render.frame;u.get(S)!==g&&(u.set(S,g),S.update())}function se(S,g){const I=S.colorSpace,X=S.format,Q=S.type;return S.isCompressedTexture===!0||S.isVideoTexture===!0||I!==Hr&&I!==Ni&&(Je.getTransfer(I)===ot?(X!==An||Q!==_n)&&ke("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):et("WebGLTextures: Unsupported texture color space:",I)),g}function ce(S){return typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement?(c.width=S.naturalWidth||S.width,c.height=S.naturalHeight||S.height):typeof VideoFrame<"u"&&S instanceof VideoFrame?(c.width=S.displayWidth,c.height=S.displayHeight):(c.width=S.width,c.height=S.height),c}this.allocateTextureUnit=G,this.resetTextureUnits=N,this.setTexture2D=te,this.setTexture2DArray=K,this.setTexture3D=H,this.setTextureCube=ee,this.rebindTextures=R,this.setupRenderTarget=C,this.updateRenderTargetMipmap=F,this.updateMultisampleRenderTarget=J,this.setupDepthRenderbuffer=De,this.setupFrameBufferTexture=ie,this.useMultisampledRTT=fe,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function lE(t,e){function n(i,r=Ni){let s;const a=Je.getTransfer(r);if(i===_n)return t.UNSIGNED_BYTE;if(i===Oc)return t.UNSIGNED_SHORT_4_4_4_4;if(i===Bc)return t.UNSIGNED_SHORT_5_5_5_1;if(i===Ch)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===Ph)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===wh)return t.BYTE;if(i===Rh)return t.SHORT;if(i===bs)return t.UNSIGNED_SHORT;if(i===Fc)return t.INT;if(i===Xn)return t.UNSIGNED_INT;if(i===Vn)return t.FLOAT;if(i===gi)return t.HALF_FLOAT;if(i===Dh)return t.ALPHA;if(i===Ih)return t.RGB;if(i===An)return t.RGBA;if(i===_i)return t.DEPTH_COMPONENT;if(i===or)return t.DEPTH_STENCIL;if(i===Lh)return t.RED;if(i===Vc)return t.RED_INTEGER;if(i===Gr)return t.RG;if(i===zc)return t.RG_INTEGER;if(i===Gc)return t.RGBA_INTEGER;if(i===Sa||i===Ma||i===Ea||i===ya)if(a===ot)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Sa)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ma)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ea)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ya)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Sa)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ma)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ea)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ya)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Rl||i===Cl||i===Pl||i===Dl)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Rl)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Cl)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Pl)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Dl)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Il||i===Ll||i===Ul||i===Nl||i===Fl||i===Ol||i===Bl)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Il||i===Ll)return a===ot?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Ul)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===Nl)return s.COMPRESSED_R11_EAC;if(i===Fl)return s.COMPRESSED_SIGNED_R11_EAC;if(i===Ol)return s.COMPRESSED_RG11_EAC;if(i===Bl)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Vl||i===zl||i===Gl||i===Hl||i===kl||i===Wl||i===Xl||i===ql||i===Yl||i===$l||i===Kl||i===jl||i===Zl||i===Jl)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Vl)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===zl)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Gl)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Hl)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===kl)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Wl)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Xl)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===ql)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Yl)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===$l)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Kl)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===jl)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Zl)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Jl)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Ql||i===ec||i===tc)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Ql)return a===ot?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===ec)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===tc)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===nc||i===ic||i===rc||i===sc)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===nc)return s.COMPRESSED_RED_RGTC1_EXT;if(i===ic)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===rc)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===sc)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ts?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const cE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,uE=`
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

}`;class fE{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const i=new $h(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new qn({vertexShader:cE,fragmentShader:uE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new xi(new Za(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class dE extends qr{constructor(e,n){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,f=null,d=null,h=null,_=null;const v=typeof XRWebGLBinding<"u",m=new fE,p={},b=n.getContextAttributes();let T=null,M=null;const w=[],P=[],D=new ut;let z=null;const x=new gn;x.viewport=new yt;const y=new gn;y.viewport=new yt;const L=[x,y],N=new E_;let G=null,ne=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(re){let U=w[re];return U===void 0&&(U=new Ho,w[re]=U),U.getTargetRaySpace()},this.getControllerGrip=function(re){let U=w[re];return U===void 0&&(U=new Ho,w[re]=U),U.getGripSpace()},this.getHand=function(re){let U=w[re];return U===void 0&&(U=new Ho,w[re]=U),U.getHandSpace()};function te(re){const U=P.indexOf(re.inputSource);if(U===-1)return;const ie=w[U];ie!==void 0&&(ie.update(re.inputSource,re.frame,c||a),ie.dispatchEvent({type:re.type,data:re.inputSource}))}function K(){r.removeEventListener("select",te),r.removeEventListener("selectstart",te),r.removeEventListener("selectend",te),r.removeEventListener("squeeze",te),r.removeEventListener("squeezestart",te),r.removeEventListener("squeezeend",te),r.removeEventListener("end",K),r.removeEventListener("inputsourceschange",H);for(let re=0;re<w.length;re++){const U=P[re];U!==null&&(P[re]=null,w[re].disconnect(U))}G=null,ne=null,m.reset();for(const re in p)delete p[re];e.setRenderTarget(T),h=null,d=null,f=null,r=null,M=null,Ze.stop(),i.isPresenting=!1,e.setPixelRatio(z),e.setSize(D.width,D.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(re){s=re,i.isPresenting===!0&&ke("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(re){o=re,i.isPresenting===!0&&ke("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(re){c=re},this.getBaseLayer=function(){return d!==null?d:h},this.getBinding=function(){return f===null&&v&&(f=new XRWebGLBinding(r,n)),f},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(re){if(r=re,r!==null){if(T=e.getRenderTarget(),r.addEventListener("select",te),r.addEventListener("selectstart",te),r.addEventListener("selectend",te),r.addEventListener("squeeze",te),r.addEventListener("squeezestart",te),r.addEventListener("squeezeend",te),r.addEventListener("end",K),r.addEventListener("inputsourceschange",H),b.xrCompatible!==!0&&await n.makeXRCompatible(),z=e.getPixelRatio(),e.getSize(D),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let ie=null,oe=null,ae=null;b.depth&&(ae=b.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ie=b.stencil?or:_i,oe=b.stencil?Ts:Xn);const De={colorFormat:n.RGBA8,depthFormat:ae,scaleFactor:s};f=this.getBinding(),d=f.createProjectionLayer(De),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),M=new Wn(d.textureWidth,d.textureHeight,{format:An,type:_n,depthTexture:new ws(d.textureWidth,d.textureHeight,oe,void 0,void 0,void 0,void 0,void 0,void 0,ie),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const ie={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:s};h=new XRWebGLLayer(r,n,ie),r.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),M=new Wn(h.framebufferWidth,h.framebufferHeight,{format:An,type:_n,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),Ze.setContext(r),Ze.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function H(re){for(let U=0;U<re.removed.length;U++){const ie=re.removed[U],oe=P.indexOf(ie);oe>=0&&(P[oe]=null,w[oe].disconnect(ie))}for(let U=0;U<re.added.length;U++){const ie=re.added[U];let oe=P.indexOf(ie);if(oe===-1){for(let De=0;De<w.length;De++)if(De>=P.length){P.push(ie),oe=De;break}else if(P[De]===null){P[De]=ie,oe=De;break}if(oe===-1)break}const ae=w[oe];ae&&ae.connect(ie)}}const ee=new Y,ve=new Y;function ge(re,U,ie){ee.setFromMatrixPosition(U.matrixWorld),ve.setFromMatrixPosition(ie.matrixWorld);const oe=ee.distanceTo(ve),ae=U.projectionMatrix.elements,De=ie.projectionMatrix.elements,R=ae[14]/(ae[10]-1),C=ae[14]/(ae[10]+1),F=(ae[9]+1)/ae[5],j=(ae[9]-1)/ae[5],q=(ae[8]-1)/ae[0],J=(De[8]+1)/De[0],A=R*q,fe=R*J,le=oe/(-q+J),se=le*-q;if(U.matrixWorld.decompose(re.position,re.quaternion,re.scale),re.translateX(se),re.translateZ(le),re.matrixWorld.compose(re.position,re.quaternion,re.scale),re.matrixWorldInverse.copy(re.matrixWorld).invert(),ae[10]===-1)re.projectionMatrix.copy(U.projectionMatrix),re.projectionMatrixInverse.copy(U.projectionMatrixInverse);else{const ce=R+le,S=C+le,g=A-se,I=fe+(oe-se),X=F*C/S*ce,Q=j*C/S*ce;re.projectionMatrix.makePerspective(g,I,X,Q,ce,S),re.projectionMatrixInverse.copy(re.projectionMatrix).invert()}}function Se(re,U){U===null?re.matrixWorld.copy(re.matrix):re.matrixWorld.multiplyMatrices(U.matrixWorld,re.matrix),re.matrixWorldInverse.copy(re.matrixWorld).invert()}this.updateCamera=function(re){if(r===null)return;let U=re.near,ie=re.far;m.texture!==null&&(m.depthNear>0&&(U=m.depthNear),m.depthFar>0&&(ie=m.depthFar)),N.near=y.near=x.near=U,N.far=y.far=x.far=ie,(G!==N.near||ne!==N.far)&&(r.updateRenderState({depthNear:N.near,depthFar:N.far}),G=N.near,ne=N.far),N.layers.mask=re.layers.mask|6,x.layers.mask=N.layers.mask&3,y.layers.mask=N.layers.mask&5;const oe=re.parent,ae=N.cameras;Se(N,oe);for(let De=0;De<ae.length;De++)Se(ae[De],oe);ae.length===2?ge(N,x,y):N.projectionMatrix.copy(x.projectionMatrix),Fe(re,N,oe)};function Fe(re,U,ie){ie===null?re.matrix.copy(U.matrixWorld):(re.matrix.copy(ie.matrixWorld),re.matrix.invert(),re.matrix.multiply(U.matrixWorld)),re.matrix.decompose(re.position,re.quaternion,re.scale),re.updateMatrixWorld(!0),re.projectionMatrix.copy(U.projectionMatrix),re.projectionMatrixInverse.copy(U.projectionMatrixInverse),re.isPerspectiveCamera&&(re.fov=ac*2*Math.atan(1/re.projectionMatrix.elements[5]),re.zoom=1)}this.getCamera=function(){return N},this.getFoveation=function(){if(!(d===null&&h===null))return l},this.setFoveation=function(re){l=re,d!==null&&(d.fixedFoveation=re),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=re)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(N)},this.getCameraTexture=function(re){return p[re]};let Ge=null;function nt(re,U){if(u=U.getViewerPose(c||a),_=U,u!==null){const ie=u.views;h!==null&&(e.setRenderTargetFramebuffer(M,h.framebuffer),e.setRenderTarget(M));let oe=!1;ie.length!==N.cameras.length&&(N.cameras.length=0,oe=!0);for(let C=0;C<ie.length;C++){const F=ie[C];let j=null;if(h!==null)j=h.getViewport(F);else{const J=f.getViewSubImage(d,F);j=J.viewport,C===0&&(e.setRenderTargetTextures(M,J.colorTexture,J.depthStencilTexture),e.setRenderTarget(M))}let q=L[C];q===void 0&&(q=new gn,q.layers.enable(C),q.viewport=new yt,L[C]=q),q.matrix.fromArray(F.transform.matrix),q.matrix.decompose(q.position,q.quaternion,q.scale),q.projectionMatrix.fromArray(F.projectionMatrix),q.projectionMatrixInverse.copy(q.projectionMatrix).invert(),q.viewport.set(j.x,j.y,j.width,j.height),C===0&&(N.matrix.copy(q.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale)),oe===!0&&N.cameras.push(q)}const ae=r.enabledFeatures;if(ae&&ae.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&v){f=i.getBinding();const C=f.getDepthInformation(ie[0]);C&&C.isValid&&C.texture&&m.init(C,r.renderState)}if(ae&&ae.includes("camera-access")&&v){e.state.unbindTexture(),f=i.getBinding();for(let C=0;C<ie.length;C++){const F=ie[C].camera;if(F){let j=p[F];j||(j=new $h,p[F]=j);const q=f.getCameraImage(F);j.sourceTexture=q}}}}for(let ie=0;ie<w.length;ie++){const oe=P[ie],ae=w[ie];oe!==null&&ae!==void 0&&ae.update(oe,U,c||a)}Ge&&Ge(re,U),U.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:U}),_=null}const Ze=new jh;Ze.setAnimationLoop(nt),this.setAnimationLoop=function(re){Ge=re},this.dispose=function(){}}}const er=new vi,hE=new bt;function pE(t,e){function n(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,Hh(t)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,b,T,M){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),f(m,p)):p.isMeshPhongMaterial?(s(m,p),u(m,p)):p.isMeshStandardMaterial?(s(m,p),d(m,p),p.isMeshPhysicalMaterial&&h(m,p,M)):p.isMeshMatcapMaterial?(s(m,p),_(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),v(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,b,T):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,n(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,n(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,n(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===nn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,n(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===nn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,n(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,n(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,n(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const b=e.get(p),T=b.envMap,M=b.envMapRotation;T&&(m.envMap.value=T,er.copy(M),er.x*=-1,er.y*=-1,er.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(er.y*=-1,er.z*=-1),m.envMapRotation.value.setFromMatrix4(hE.makeRotationFromEuler(er)),m.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,n(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,n(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,n(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,b,T){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*b,m.scale.value=T*.5,p.map&&(m.map.value=p.map,n(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,n(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,n(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,n(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,n(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,n(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function h(m,p,b){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,n(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,n(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,n(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,n(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,n(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===nn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,n(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,n(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,n(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,n(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,n(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,n(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,n(p.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){const b=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),m.nearDistance.value=b.shadow.camera.near,m.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function mE(t,e,n,i){let r={},s={},a=[];const o=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,T){const M=T.program;i.uniformBlockBinding(b,M)}function c(b,T){let M=r[b.id];M===void 0&&(_(b),M=u(b),r[b.id]=M,b.addEventListener("dispose",m));const w=T.program;i.updateUBOMapping(b,w);const P=e.render.frame;s[b.id]!==P&&(d(b),s[b.id]=P)}function u(b){const T=f();b.__bindingPointIndex=T;const M=t.createBuffer(),w=b.__size,P=b.usage;return t.bindBuffer(t.UNIFORM_BUFFER,M),t.bufferData(t.UNIFORM_BUFFER,w,P),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,T,M),M}function f(){for(let b=0;b<o;b++)if(a.indexOf(b)===-1)return a.push(b),b;return et("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(b){const T=r[b.id],M=b.uniforms,w=b.__cache;t.bindBuffer(t.UNIFORM_BUFFER,T);for(let P=0,D=M.length;P<D;P++){const z=Array.isArray(M[P])?M[P]:[M[P]];for(let x=0,y=z.length;x<y;x++){const L=z[x];if(h(L,P,x,w)===!0){const N=L.__offset,G=Array.isArray(L.value)?L.value:[L.value];let ne=0;for(let te=0;te<G.length;te++){const K=G[te],H=v(K);typeof K=="number"||typeof K=="boolean"?(L.__data[0]=K,t.bufferSubData(t.UNIFORM_BUFFER,N+ne,L.__data)):K.isMatrix3?(L.__data[0]=K.elements[0],L.__data[1]=K.elements[1],L.__data[2]=K.elements[2],L.__data[3]=0,L.__data[4]=K.elements[3],L.__data[5]=K.elements[4],L.__data[6]=K.elements[5],L.__data[7]=0,L.__data[8]=K.elements[6],L.__data[9]=K.elements[7],L.__data[10]=K.elements[8],L.__data[11]=0):(K.toArray(L.__data,ne),ne+=H.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,N,L.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function h(b,T,M,w){const P=b.value,D=T+"_"+M;if(w[D]===void 0)return typeof P=="number"||typeof P=="boolean"?w[D]=P:w[D]=P.clone(),!0;{const z=w[D];if(typeof P=="number"||typeof P=="boolean"){if(z!==P)return w[D]=P,!0}else if(z.equals(P)===!1)return z.copy(P),!0}return!1}function _(b){const T=b.uniforms;let M=0;const w=16;for(let D=0,z=T.length;D<z;D++){const x=Array.isArray(T[D])?T[D]:[T[D]];for(let y=0,L=x.length;y<L;y++){const N=x[y],G=Array.isArray(N.value)?N.value:[N.value];for(let ne=0,te=G.length;ne<te;ne++){const K=G[ne],H=v(K),ee=M%w,ve=ee%H.boundary,ge=ee+ve;M+=ve,ge!==0&&w-ge<H.storage&&(M+=w-ge),N.__data=new Float32Array(H.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=M,M+=H.storage}}}const P=M%w;return P>0&&(M+=w-P),b.__size=M,b.__cache={},this}function v(b){const T={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(T.boundary=4,T.storage=4):b.isVector2?(T.boundary=8,T.storage=8):b.isVector3||b.isColor?(T.boundary=16,T.storage=12):b.isVector4?(T.boundary=16,T.storage=16):b.isMatrix3?(T.boundary=48,T.storage=48):b.isMatrix4?(T.boundary=64,T.storage=64):b.isTexture?ke("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ke("WebGLRenderer: Unsupported uniform value type.",b),T}function m(b){const T=b.target;T.removeEventListener("dispose",m);const M=a.indexOf(T.__bindingPointIndex);a.splice(M,1),t.deleteBuffer(r[T.id]),delete r[T.id],delete s[T.id]}function p(){for(const b in r)t.deleteBuffer(r[b]);a=[],r={},s={}}return{bind:l,update:c,dispose:p}}const gE=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Nn=null;function _E(){return Nn===null&&(Nn=new h_(gE,16,16,Gr,gi),Nn.name="DFG_LUT",Nn.minFilter=Gt,Nn.magFilter=Gt,Nn.wrapS=li,Nn.wrapT=li,Nn.generateMipmaps=!1,Nn.needsUpdate=!0),Nn}class vE{constructor(e={}){const{canvas:n=zg(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:d=!1,outputBufferType:h=_n}=e;this.isWebGLRenderer=!0;let _;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=i.getContextAttributes().alpha}else _=a;const v=h,m=new Set([Gc,zc,Vc]),p=new Set([_n,Xn,bs,Ts,Oc,Bc]),b=new Uint32Array(4),T=new Int32Array(4);let M=null,w=null;const P=[],D=[];let z=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=kn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const x=this;let y=!1;this._outputColorSpace=mn;let L=0,N=0,G=null,ne=-1,te=null;const K=new yt,H=new yt;let ee=null;const ve=new lt(0);let ge=0,Se=n.width,Fe=n.height,Ge=1,nt=null,Ze=null;const re=new yt(0,0,Se,Fe),U=new yt(0,0,Se,Fe);let ie=!1;const oe=new qh;let ae=!1,De=!1;const R=new bt,C=new Y,F=new yt,j={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let q=!1;function J(){return G===null?Ge:1}let A=i;function fe(E,V){return n.getContext(E,V)}try{const E={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Nc}`),n.addEventListener("webglcontextlost",He,!1),n.addEventListener("webglcontextrestored",ht,!1),n.addEventListener("webglcontextcreationerror",st,!1),A===null){const V="webgl2";if(A=fe(V,E),A===null)throw fe(V)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw et("WebGLRenderer: "+E.message),E}let le,se,ce,S,g,I,X,Q,W,Te,he,Re,Ue,de,xe,Ee,Ce,_e,Xe,B,we,me,Pe,pe;function ue(){le=new _S(A),le.init(),me=new lE(A,le),se=new lS(A,le,e,me),ce=new aE(A,le),se.reversedDepthBuffer&&d&&ce.buffers.depth.setReversed(!0),S=new SS(A),g=new XM,I=new oE(A,le,ce,g,se,me,S),X=new uS(x),Q=new gS(x),W=new b_(A),Pe=new aS(A,W),Te=new vS(A,W,S,Pe),he=new ES(A,Te,W,S),Xe=new MS(A,se,I),Ee=new cS(g),Re=new WM(x,X,Q,le,se,Pe,Ee),Ue=new pE(x,g),de=new YM,xe=new QM(le),_e=new sS(x,X,Q,ce,he,_,l),Ce=new rE(x,he,se),pe=new mE(A,S,se,ce),B=new oS(A,le,S),we=new xS(A,le,S),S.programs=Re.programs,x.capabilities=se,x.extensions=le,x.properties=g,x.renderLists=de,x.shadowMap=Ce,x.state=ce,x.info=S}ue(),v!==_n&&(z=new bS(v,n.width,n.height,r,s));const Me=new dE(x,A);this.xr=Me,this.getContext=function(){return A},this.getContextAttributes=function(){return A.getContextAttributes()},this.forceContextLoss=function(){const E=le.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=le.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return Ge},this.setPixelRatio=function(E){E!==void 0&&(Ge=E,this.setSize(Se,Fe,!1))},this.getSize=function(E){return E.set(Se,Fe)},this.setSize=function(E,V,Z=!0){if(Me.isPresenting){ke("WebGLRenderer: Can't change size while VR device is presenting.");return}Se=E,Fe=V,n.width=Math.floor(E*Ge),n.height=Math.floor(V*Ge),Z===!0&&(n.style.width=E+"px",n.style.height=V+"px"),z!==null&&z.setSize(n.width,n.height),this.setViewport(0,0,E,V)},this.getDrawingBufferSize=function(E){return E.set(Se*Ge,Fe*Ge).floor()},this.setDrawingBufferSize=function(E,V,Z){Se=E,Fe=V,Ge=Z,n.width=Math.floor(E*Z),n.height=Math.floor(V*Z),this.setViewport(0,0,E,V)},this.setEffects=function(E){if(v===_n){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(E){for(let V=0;V<E.length;V++)if(E[V].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}z.setEffects(E||[])},this.getCurrentViewport=function(E){return E.copy(K)},this.getViewport=function(E){return E.copy(re)},this.setViewport=function(E,V,Z,$){E.isVector4?re.set(E.x,E.y,E.z,E.w):re.set(E,V,Z,$),ce.viewport(K.copy(re).multiplyScalar(Ge).round())},this.getScissor=function(E){return E.copy(U)},this.setScissor=function(E,V,Z,$){E.isVector4?U.set(E.x,E.y,E.z,E.w):U.set(E,V,Z,$),ce.scissor(H.copy(U).multiplyScalar(Ge).round())},this.getScissorTest=function(){return ie},this.setScissorTest=function(E){ce.setScissorTest(ie=E)},this.setOpaqueSort=function(E){nt=E},this.setTransparentSort=function(E){Ze=E},this.getClearColor=function(E){return E.copy(_e.getClearColor())},this.setClearColor=function(){_e.setClearColor(...arguments)},this.getClearAlpha=function(){return _e.getClearAlpha()},this.setClearAlpha=function(){_e.setClearAlpha(...arguments)},this.clear=function(E=!0,V=!0,Z=!0){let $=0;if(E){let k=!1;if(G!==null){const ye=G.texture.format;k=m.has(ye)}if(k){const ye=G.texture.type,Ie=p.has(ye),Ae=_e.getClearColor(),Le=_e.getClearAlpha(),Ne=Ae.r,Ve=Ae.g,Oe=Ae.b;Ie?(b[0]=Ne,b[1]=Ve,b[2]=Oe,b[3]=Le,A.clearBufferuiv(A.COLOR,0,b)):(T[0]=Ne,T[1]=Ve,T[2]=Oe,T[3]=Le,A.clearBufferiv(A.COLOR,0,T))}else $|=A.COLOR_BUFFER_BIT}V&&($|=A.DEPTH_BUFFER_BIT),Z&&($|=A.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),A.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",He,!1),n.removeEventListener("webglcontextrestored",ht,!1),n.removeEventListener("webglcontextcreationerror",st,!1),_e.dispose(),de.dispose(),xe.dispose(),g.dispose(),X.dispose(),Q.dispose(),he.dispose(),Pe.dispose(),pe.dispose(),Re.dispose(),Me.dispose(),Me.removeEventListener("sessionstart",$c),Me.removeEventListener("sessionend",Kc),ki.stop()};function He(E){E.preventDefault(),Ku("WebGLRenderer: Context Lost."),y=!0}function ht(){Ku("WebGLRenderer: Context Restored."),y=!1;const E=S.autoReset,V=Ce.enabled,Z=Ce.autoUpdate,$=Ce.needsUpdate,k=Ce.type;ue(),S.autoReset=E,Ce.enabled=V,Ce.autoUpdate=Z,Ce.needsUpdate=$,Ce.type=k}function st(E){et("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Ln(E){const V=E.target;V.removeEventListener("dispose",Ln),Yn(V)}function Yn(E){vp(E),g.remove(E)}function vp(E){const V=g.get(E).programs;V!==void 0&&(V.forEach(function(Z){Re.releaseProgram(Z)}),E.isShaderMaterial&&Re.releaseShaderCache(E))}this.renderBufferDirect=function(E,V,Z,$,k,ye){V===null&&(V=j);const Ie=k.isMesh&&k.matrixWorld.determinant()<0,Ae=Sp(E,V,Z,$,k);ce.setMaterial($,Ie);let Le=Z.index,Ne=1;if($.wireframe===!0){if(Le=Te.getWireframeAttribute(Z),Le===void 0)return;Ne=2}const Ve=Z.drawRange,Oe=Z.attributes.position;let $e=Ve.start*Ne,ct=(Ve.start+Ve.count)*Ne;ye!==null&&($e=Math.max($e,ye.start*Ne),ct=Math.min(ct,(ye.start+ye.count)*Ne)),Le!==null?($e=Math.max($e,0),ct=Math.min(ct,Le.count)):Oe!=null&&($e=Math.max($e,0),ct=Math.min(ct,Oe.count));const xt=ct-$e;if(xt<0||xt===1/0)return;Pe.setup(k,$,Ae,Z,Le);let St,ft=B;if(Le!==null&&(St=W.get(Le),ft=we,ft.setIndex(St)),k.isMesh)$.wireframe===!0?(ce.setLineWidth($.wireframeLinewidth*J()),ft.setMode(A.LINES)):ft.setMode(A.TRIANGLES);else if(k.isLine){let Be=$.linewidth;Be===void 0&&(Be=1),ce.setLineWidth(Be*J()),k.isLineSegments?ft.setMode(A.LINES):k.isLineLoop?ft.setMode(A.LINE_LOOP):ft.setMode(A.LINE_STRIP)}else k.isPoints?ft.setMode(A.POINTS):k.isSprite&&ft.setMode(A.TRIANGLES);if(k.isBatchedMesh)if(k._multiDrawInstances!==null)As("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ft.renderMultiDrawInstances(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount,k._multiDrawInstances);else if(le.get("WEBGL_multi_draw"))ft.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{const Be=k._multiDrawStarts,at=k._multiDrawCounts,Qe=k._multiDrawCount,an=Le?W.get(Le).bytesPerElement:1,dr=g.get($).currentProgram.getUniforms();for(let on=0;on<Qe;on++)dr.setValue(A,"_gl_DrawID",on),ft.render(Be[on]/an,at[on])}else if(k.isInstancedMesh)ft.renderInstances($e,xt,k.count);else if(Z.isInstancedBufferGeometry){const Be=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,at=Math.min(Z.instanceCount,Be);ft.renderInstances($e,xt,at)}else ft.render($e,xt)};function Yc(E,V,Z){E.transparent===!0&&E.side===oi&&E.forceSinglePass===!1?(E.side=nn,E.needsUpdate=!0,Bs(E,V,Z),E.side=zi,E.needsUpdate=!0,Bs(E,V,Z),E.side=oi):Bs(E,V,Z)}this.compile=function(E,V,Z=null){Z===null&&(Z=E),w=xe.get(Z),w.init(V),D.push(w),Z.traverseVisible(function(k){k.isLight&&k.layers.test(V.layers)&&(w.pushLight(k),k.castShadow&&w.pushShadow(k))}),E!==Z&&E.traverseVisible(function(k){k.isLight&&k.layers.test(V.layers)&&(w.pushLight(k),k.castShadow&&w.pushShadow(k))}),w.setupLights();const $=new Set;return E.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;const ye=k.material;if(ye)if(Array.isArray(ye))for(let Ie=0;Ie<ye.length;Ie++){const Ae=ye[Ie];Yc(Ae,Z,k),$.add(Ae)}else Yc(ye,Z,k),$.add(ye)}),w=D.pop(),$},this.compileAsync=function(E,V,Z=null){const $=this.compile(E,V,Z);return new Promise(k=>{function ye(){if($.forEach(function(Ie){g.get(Ie).currentProgram.isReady()&&$.delete(Ie)}),$.size===0){k(E);return}setTimeout(ye,10)}le.get("KHR_parallel_shader_compile")!==null?ye():setTimeout(ye,10)})};let io=null;function xp(E){io&&io(E)}function $c(){ki.stop()}function Kc(){ki.start()}const ki=new jh;ki.setAnimationLoop(xp),typeof self<"u"&&ki.setContext(self),this.setAnimationLoop=function(E){io=E,Me.setAnimationLoop(E),E===null?ki.stop():ki.start()},Me.addEventListener("sessionstart",$c),Me.addEventListener("sessionend",Kc),this.render=function(E,V){if(V!==void 0&&V.isCamera!==!0){et("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;const Z=Me.enabled===!0&&Me.isPresenting===!0,$=z!==null&&(G===null||Z)&&z.begin(x,G);if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),Me.enabled===!0&&Me.isPresenting===!0&&(z===null||z.isCompositing()===!1)&&(Me.cameraAutoUpdate===!0&&Me.updateCamera(V),V=Me.getCamera()),E.isScene===!0&&E.onBeforeRender(x,E,V,G),w=xe.get(E,D.length),w.init(V),D.push(w),R.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),oe.setFromProjectionMatrix(R,zn,V.reversedDepth),De=this.localClippingEnabled,ae=Ee.init(this.clippingPlanes,De),M=de.get(E,P.length),M.init(),P.push(M),Me.enabled===!0&&Me.isPresenting===!0){const Ie=x.xr.getDepthSensingMesh();Ie!==null&&ro(Ie,V,-1/0,x.sortObjects)}ro(E,V,0,x.sortObjects),M.finish(),x.sortObjects===!0&&M.sort(nt,Ze),q=Me.enabled===!1||Me.isPresenting===!1||Me.hasDepthSensing()===!1,q&&_e.addToRenderList(M,E),this.info.render.frame++,ae===!0&&Ee.beginShadows();const k=w.state.shadowsArray;if(Ce.render(k,E,V),ae===!0&&Ee.endShadows(),this.info.autoReset===!0&&this.info.reset(),($&&z.hasRenderPass())===!1){const Ie=M.opaque,Ae=M.transmissive;if(w.setupLights(),V.isArrayCamera){const Le=V.cameras;if(Ae.length>0)for(let Ne=0,Ve=Le.length;Ne<Ve;Ne++){const Oe=Le[Ne];Zc(Ie,Ae,E,Oe)}q&&_e.render(E);for(let Ne=0,Ve=Le.length;Ne<Ve;Ne++){const Oe=Le[Ne];jc(M,E,Oe,Oe.viewport)}}else Ae.length>0&&Zc(Ie,Ae,E,V),q&&_e.render(E),jc(M,E,V)}G!==null&&N===0&&(I.updateMultisampleRenderTarget(G),I.updateRenderTargetMipmap(G)),$&&z.end(x),E.isScene===!0&&E.onAfterRender(x,E,V),Pe.resetDefaultState(),ne=-1,te=null,D.pop(),D.length>0?(w=D[D.length-1],ae===!0&&Ee.setGlobalState(x.clippingPlanes,w.state.camera)):w=null,P.pop(),P.length>0?M=P[P.length-1]:M=null};function ro(E,V,Z,$){if(E.visible===!1)return;if(E.layers.test(V.layers)){if(E.isGroup)Z=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(V);else if(E.isLight)w.pushLight(E),E.castShadow&&w.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||oe.intersectsSprite(E)){$&&F.setFromMatrixPosition(E.matrixWorld).applyMatrix4(R);const Ie=he.update(E),Ae=E.material;Ae.visible&&M.push(E,Ie,Ae,Z,F.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||oe.intersectsObject(E))){const Ie=he.update(E),Ae=E.material;if($&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),F.copy(E.boundingSphere.center)):(Ie.boundingSphere===null&&Ie.computeBoundingSphere(),F.copy(Ie.boundingSphere.center)),F.applyMatrix4(E.matrixWorld).applyMatrix4(R)),Array.isArray(Ae)){const Le=Ie.groups;for(let Ne=0,Ve=Le.length;Ne<Ve;Ne++){const Oe=Le[Ne],$e=Ae[Oe.materialIndex];$e&&$e.visible&&M.push(E,Ie,$e,Z,F.z,Oe)}}else Ae.visible&&M.push(E,Ie,Ae,Z,F.z,null)}}const ye=E.children;for(let Ie=0,Ae=ye.length;Ie<Ae;Ie++)ro(ye[Ie],V,Z,$)}function jc(E,V,Z,$){const{opaque:k,transmissive:ye,transparent:Ie}=E;w.setupLightsView(Z),ae===!0&&Ee.setGlobalState(x.clippingPlanes,Z),$&&ce.viewport(K.copy($)),k.length>0&&Os(k,V,Z),ye.length>0&&Os(ye,V,Z),Ie.length>0&&Os(Ie,V,Z),ce.buffers.depth.setTest(!0),ce.buffers.depth.setMask(!0),ce.buffers.color.setMask(!0),ce.setPolygonOffset(!1)}function Zc(E,V,Z,$){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[$.id]===void 0){const $e=le.has("EXT_color_buffer_half_float")||le.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[$.id]=new Wn(1,1,{generateMipmaps:!0,type:$e?gi:_n,minFilter:ar,samples:se.samples,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Je.workingColorSpace})}const ye=w.state.transmissionRenderTarget[$.id],Ie=$.viewport||K;ye.setSize(Ie.z*x.transmissionResolutionScale,Ie.w*x.transmissionResolutionScale);const Ae=x.getRenderTarget(),Le=x.getActiveCubeFace(),Ne=x.getActiveMipmapLevel();x.setRenderTarget(ye),x.getClearColor(ve),ge=x.getClearAlpha(),ge<1&&x.setClearColor(16777215,.5),x.clear(),q&&_e.render(Z);const Ve=x.toneMapping;x.toneMapping=kn;const Oe=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),w.setupLightsView($),ae===!0&&Ee.setGlobalState(x.clippingPlanes,$),Os(E,Z,$),I.updateMultisampleRenderTarget(ye),I.updateRenderTargetMipmap(ye),le.has("WEBGL_multisampled_render_to_texture")===!1){let $e=!1;for(let ct=0,xt=V.length;ct<xt;ct++){const St=V[ct],{object:ft,geometry:Be,material:at,group:Qe}=St;if(at.side===oi&&ft.layers.test($.layers)){const an=at.side;at.side=nn,at.needsUpdate=!0,Jc(ft,Z,$,Be,at,Qe),at.side=an,at.needsUpdate=!0,$e=!0}}$e===!0&&(I.updateMultisampleRenderTarget(ye),I.updateRenderTargetMipmap(ye))}x.setRenderTarget(Ae,Le,Ne),x.setClearColor(ve,ge),Oe!==void 0&&($.viewport=Oe),x.toneMapping=Ve}function Os(E,V,Z){const $=V.isScene===!0?V.overrideMaterial:null;for(let k=0,ye=E.length;k<ye;k++){const Ie=E[k],{object:Ae,geometry:Le,group:Ne}=Ie;let Ve=Ie.material;Ve.allowOverride===!0&&$!==null&&(Ve=$),Ae.layers.test(Z.layers)&&Jc(Ae,V,Z,Le,Ve,Ne)}}function Jc(E,V,Z,$,k,ye){E.onBeforeRender(x,V,Z,$,k,ye),E.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),k.onBeforeRender(x,V,Z,$,E,ye),k.transparent===!0&&k.side===oi&&k.forceSinglePass===!1?(k.side=nn,k.needsUpdate=!0,x.renderBufferDirect(Z,V,$,k,E,ye),k.side=zi,k.needsUpdate=!0,x.renderBufferDirect(Z,V,$,k,E,ye),k.side=oi):x.renderBufferDirect(Z,V,$,k,E,ye),E.onAfterRender(x,V,Z,$,k,ye)}function Bs(E,V,Z){V.isScene!==!0&&(V=j);const $=g.get(E),k=w.state.lights,ye=w.state.shadowsArray,Ie=k.state.version,Ae=Re.getParameters(E,k.state,ye,V,Z),Le=Re.getProgramCacheKey(Ae);let Ne=$.programs;$.environment=E.isMeshStandardMaterial?V.environment:null,$.fog=V.fog,$.envMap=(E.isMeshStandardMaterial?Q:X).get(E.envMap||$.environment),$.envMapRotation=$.environment!==null&&E.envMap===null?V.environmentRotation:E.envMapRotation,Ne===void 0&&(E.addEventListener("dispose",Ln),Ne=new Map,$.programs=Ne);let Ve=Ne.get(Le);if(Ve!==void 0){if($.currentProgram===Ve&&$.lightsStateVersion===Ie)return eu(E,Ae),Ve}else Ae.uniforms=Re.getUniforms(E),E.onBeforeCompile(Ae,x),Ve=Re.acquireProgram(Ae,Le),Ne.set(Le,Ve),$.uniforms=Ae.uniforms;const Oe=$.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Oe.clippingPlanes=Ee.uniform),eu(E,Ae),$.needsLights=Ep(E),$.lightsStateVersion=Ie,$.needsLights&&(Oe.ambientLightColor.value=k.state.ambient,Oe.lightProbe.value=k.state.probe,Oe.directionalLights.value=k.state.directional,Oe.directionalLightShadows.value=k.state.directionalShadow,Oe.spotLights.value=k.state.spot,Oe.spotLightShadows.value=k.state.spotShadow,Oe.rectAreaLights.value=k.state.rectArea,Oe.ltc_1.value=k.state.rectAreaLTC1,Oe.ltc_2.value=k.state.rectAreaLTC2,Oe.pointLights.value=k.state.point,Oe.pointLightShadows.value=k.state.pointShadow,Oe.hemisphereLights.value=k.state.hemi,Oe.directionalShadowMap.value=k.state.directionalShadowMap,Oe.directionalShadowMatrix.value=k.state.directionalShadowMatrix,Oe.spotShadowMap.value=k.state.spotShadowMap,Oe.spotLightMatrix.value=k.state.spotLightMatrix,Oe.spotLightMap.value=k.state.spotLightMap,Oe.pointShadowMap.value=k.state.pointShadowMap,Oe.pointShadowMatrix.value=k.state.pointShadowMatrix),$.currentProgram=Ve,$.uniformsList=null,Ve}function Qc(E){if(E.uniformsList===null){const V=E.currentProgram.getUniforms();E.uniformsList=ba.seqWithValue(V.seq,E.uniforms)}return E.uniformsList}function eu(E,V){const Z=g.get(E);Z.outputColorSpace=V.outputColorSpace,Z.batching=V.batching,Z.batchingColor=V.batchingColor,Z.instancing=V.instancing,Z.instancingColor=V.instancingColor,Z.instancingMorph=V.instancingMorph,Z.skinning=V.skinning,Z.morphTargets=V.morphTargets,Z.morphNormals=V.morphNormals,Z.morphColors=V.morphColors,Z.morphTargetsCount=V.morphTargetsCount,Z.numClippingPlanes=V.numClippingPlanes,Z.numIntersection=V.numClipIntersection,Z.vertexAlphas=V.vertexAlphas,Z.vertexTangents=V.vertexTangents,Z.toneMapping=V.toneMapping}function Sp(E,V,Z,$,k){V.isScene!==!0&&(V=j),I.resetTextureUnits();const ye=V.fog,Ie=$.isMeshStandardMaterial?V.environment:null,Ae=G===null?x.outputColorSpace:G.isXRRenderTarget===!0?G.texture.colorSpace:Hr,Le=($.isMeshStandardMaterial?Q:X).get($.envMap||Ie),Ne=$.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,Ve=!!Z.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),Oe=!!Z.morphAttributes.position,$e=!!Z.morphAttributes.normal,ct=!!Z.morphAttributes.color;let xt=kn;$.toneMapped&&(G===null||G.isXRRenderTarget===!0)&&(xt=x.toneMapping);const St=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,ft=St!==void 0?St.length:0,Be=g.get($),at=w.state.lights;if(ae===!0&&(De===!0||E!==te)){const kt=E===te&&$.id===ne;Ee.setState($,E,kt)}let Qe=!1;$.version===Be.__version?(Be.needsLights&&Be.lightsStateVersion!==at.state.version||Be.outputColorSpace!==Ae||k.isBatchedMesh&&Be.batching===!1||!k.isBatchedMesh&&Be.batching===!0||k.isBatchedMesh&&Be.batchingColor===!0&&k.colorTexture===null||k.isBatchedMesh&&Be.batchingColor===!1&&k.colorTexture!==null||k.isInstancedMesh&&Be.instancing===!1||!k.isInstancedMesh&&Be.instancing===!0||k.isSkinnedMesh&&Be.skinning===!1||!k.isSkinnedMesh&&Be.skinning===!0||k.isInstancedMesh&&Be.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&Be.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&Be.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&Be.instancingMorph===!1&&k.morphTexture!==null||Be.envMap!==Le||$.fog===!0&&Be.fog!==ye||Be.numClippingPlanes!==void 0&&(Be.numClippingPlanes!==Ee.numPlanes||Be.numIntersection!==Ee.numIntersection)||Be.vertexAlphas!==Ne||Be.vertexTangents!==Ve||Be.morphTargets!==Oe||Be.morphNormals!==$e||Be.morphColors!==ct||Be.toneMapping!==xt||Be.morphTargetsCount!==ft)&&(Qe=!0):(Qe=!0,Be.__version=$.version);let an=Be.currentProgram;Qe===!0&&(an=Bs($,V,k));let dr=!1,on=!1,$r=!1;const pt=an.getUniforms(),Jt=Be.uniforms;if(ce.useProgram(an.program)&&(dr=!0,on=!0,$r=!0),$.id!==ne&&(ne=$.id,on=!0),dr||te!==E){ce.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),pt.setValue(A,"projectionMatrix",E.projectionMatrix),pt.setValue(A,"viewMatrix",E.matrixWorldInverse);const Qt=pt.map.cameraPosition;Qt!==void 0&&Qt.setValue(A,C.setFromMatrixPosition(E.matrixWorld)),se.logarithmicDepthBuffer&&pt.setValue(A,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&pt.setValue(A,"isOrthographic",E.isOrthographicCamera===!0),te!==E&&(te=E,on=!0,$r=!0)}if(Be.needsLights&&(at.state.directionalShadowMap.length>0&&pt.setValue(A,"directionalShadowMap",at.state.directionalShadowMap,I),at.state.spotShadowMap.length>0&&pt.setValue(A,"spotShadowMap",at.state.spotShadowMap,I),at.state.pointShadowMap.length>0&&pt.setValue(A,"pointShadowMap",at.state.pointShadowMap,I)),k.isSkinnedMesh){pt.setOptional(A,k,"bindMatrix"),pt.setOptional(A,k,"bindMatrixInverse");const kt=k.skeleton;kt&&(kt.boneTexture===null&&kt.computeBoneTexture(),pt.setValue(A,"boneTexture",kt.boneTexture,I))}k.isBatchedMesh&&(pt.setOptional(A,k,"batchingTexture"),pt.setValue(A,"batchingTexture",k._matricesTexture,I),pt.setOptional(A,k,"batchingIdTexture"),pt.setValue(A,"batchingIdTexture",k._indirectTexture,I),pt.setOptional(A,k,"batchingColorTexture"),k._colorsTexture!==null&&pt.setValue(A,"batchingColorTexture",k._colorsTexture,I));const dn=Z.morphAttributes;if((dn.position!==void 0||dn.normal!==void 0||dn.color!==void 0)&&Xe.update(k,Z,an),(on||Be.receiveShadow!==k.receiveShadow)&&(Be.receiveShadow=k.receiveShadow,pt.setValue(A,"receiveShadow",k.receiveShadow)),$.isMeshGouraudMaterial&&$.envMap!==null&&(Jt.envMap.value=Le,Jt.flipEnvMap.value=Le.isCubeTexture&&Le.isRenderTargetTexture===!1?-1:1),$.isMeshStandardMaterial&&$.envMap===null&&V.environment!==null&&(Jt.envMapIntensity.value=V.environmentIntensity),Jt.dfgLUT!==void 0&&(Jt.dfgLUT.value=_E()),on&&(pt.setValue(A,"toneMappingExposure",x.toneMappingExposure),Be.needsLights&&Mp(Jt,$r),ye&&$.fog===!0&&Ue.refreshFogUniforms(Jt,ye),Ue.refreshMaterialUniforms(Jt,$,Ge,Fe,w.state.transmissionRenderTarget[E.id]),ba.upload(A,Qc(Be),Jt,I)),$.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(ba.upload(A,Qc(Be),Jt,I),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&pt.setValue(A,"center",k.center),pt.setValue(A,"modelViewMatrix",k.modelViewMatrix),pt.setValue(A,"normalMatrix",k.normalMatrix),pt.setValue(A,"modelMatrix",k.matrixWorld),$.isShaderMaterial||$.isRawShaderMaterial){const kt=$.uniformsGroups;for(let Qt=0,so=kt.length;Qt<so;Qt++){const Wi=kt[Qt];pe.update(Wi,an),pe.bind(Wi,an)}}return an}function Mp(E,V){E.ambientLightColor.needsUpdate=V,E.lightProbe.needsUpdate=V,E.directionalLights.needsUpdate=V,E.directionalLightShadows.needsUpdate=V,E.pointLights.needsUpdate=V,E.pointLightShadows.needsUpdate=V,E.spotLights.needsUpdate=V,E.spotLightShadows.needsUpdate=V,E.rectAreaLights.needsUpdate=V,E.hemisphereLights.needsUpdate=V}function Ep(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return N},this.getRenderTarget=function(){return G},this.setRenderTargetTextures=function(E,V,Z){const $=g.get(E);$.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,$.__autoAllocateDepthBuffer===!1&&($.__useRenderToTexture=!1),g.get(E.texture).__webglTexture=V,g.get(E.depthTexture).__webglTexture=$.__autoAllocateDepthBuffer?void 0:Z,$.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,V){const Z=g.get(E);Z.__webglFramebuffer=V,Z.__useDefaultFramebuffer=V===void 0};const yp=A.createFramebuffer();this.setRenderTarget=function(E,V=0,Z=0){G=E,L=V,N=Z;let $=null,k=!1,ye=!1;if(E){const Ae=g.get(E);if(Ae.__useDefaultFramebuffer!==void 0){ce.bindFramebuffer(A.FRAMEBUFFER,Ae.__webglFramebuffer),K.copy(E.viewport),H.copy(E.scissor),ee=E.scissorTest,ce.viewport(K),ce.scissor(H),ce.setScissorTest(ee),ne=-1;return}else if(Ae.__webglFramebuffer===void 0)I.setupRenderTarget(E);else if(Ae.__hasExternalTextures)I.rebindTextures(E,g.get(E.texture).__webglTexture,g.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const Ve=E.depthTexture;if(Ae.__boundDepthTexture!==Ve){if(Ve!==null&&g.has(Ve)&&(E.width!==Ve.image.width||E.height!==Ve.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");I.setupDepthRenderbuffer(E)}}const Le=E.texture;(Le.isData3DTexture||Le.isDataArrayTexture||Le.isCompressedArrayTexture)&&(ye=!0);const Ne=g.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Ne[V])?$=Ne[V][Z]:$=Ne[V],k=!0):E.samples>0&&I.useMultisampledRTT(E)===!1?$=g.get(E).__webglMultisampledFramebuffer:Array.isArray(Ne)?$=Ne[Z]:$=Ne,K.copy(E.viewport),H.copy(E.scissor),ee=E.scissorTest}else K.copy(re).multiplyScalar(Ge).floor(),H.copy(U).multiplyScalar(Ge).floor(),ee=ie;if(Z!==0&&($=yp),ce.bindFramebuffer(A.FRAMEBUFFER,$)&&ce.drawBuffers(E,$),ce.viewport(K),ce.scissor(H),ce.setScissorTest(ee),k){const Ae=g.get(E.texture);A.framebufferTexture2D(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_CUBE_MAP_POSITIVE_X+V,Ae.__webglTexture,Z)}else if(ye){const Ae=V;for(let Le=0;Le<E.textures.length;Le++){const Ne=g.get(E.textures[Le]);A.framebufferTextureLayer(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0+Le,Ne.__webglTexture,Z,Ae)}}else if(E!==null&&Z!==0){const Ae=g.get(E.texture);A.framebufferTexture2D(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,Ae.__webglTexture,Z)}ne=-1},this.readRenderTargetPixels=function(E,V,Z,$,k,ye,Ie,Ae=0){if(!(E&&E.isWebGLRenderTarget)){et("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Le=g.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Ie!==void 0&&(Le=Le[Ie]),Le){ce.bindFramebuffer(A.FRAMEBUFFER,Le);try{const Ne=E.textures[Ae],Ve=Ne.format,Oe=Ne.type;if(!se.textureFormatReadable(Ve)){et("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!se.textureTypeReadable(Oe)){et("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=E.width-$&&Z>=0&&Z<=E.height-k&&(E.textures.length>1&&A.readBuffer(A.COLOR_ATTACHMENT0+Ae),A.readPixels(V,Z,$,k,me.convert(Ve),me.convert(Oe),ye))}finally{const Ne=G!==null?g.get(G).__webglFramebuffer:null;ce.bindFramebuffer(A.FRAMEBUFFER,Ne)}}},this.readRenderTargetPixelsAsync=async function(E,V,Z,$,k,ye,Ie,Ae=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Le=g.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Ie!==void 0&&(Le=Le[Ie]),Le)if(V>=0&&V<=E.width-$&&Z>=0&&Z<=E.height-k){ce.bindFramebuffer(A.FRAMEBUFFER,Le);const Ne=E.textures[Ae],Ve=Ne.format,Oe=Ne.type;if(!se.textureFormatReadable(Ve))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!se.textureTypeReadable(Oe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const $e=A.createBuffer();A.bindBuffer(A.PIXEL_PACK_BUFFER,$e),A.bufferData(A.PIXEL_PACK_BUFFER,ye.byteLength,A.STREAM_READ),E.textures.length>1&&A.readBuffer(A.COLOR_ATTACHMENT0+Ae),A.readPixels(V,Z,$,k,me.convert(Ve),me.convert(Oe),0);const ct=G!==null?g.get(G).__webglFramebuffer:null;ce.bindFramebuffer(A.FRAMEBUFFER,ct);const xt=A.fenceSync(A.SYNC_GPU_COMMANDS_COMPLETE,0);return A.flush(),await Gg(A,xt,4),A.bindBuffer(A.PIXEL_PACK_BUFFER,$e),A.getBufferSubData(A.PIXEL_PACK_BUFFER,0,ye),A.deleteBuffer($e),A.deleteSync(xt),ye}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,V=null,Z=0){const $=Math.pow(2,-Z),k=Math.floor(E.image.width*$),ye=Math.floor(E.image.height*$),Ie=V!==null?V.x:0,Ae=V!==null?V.y:0;I.setTexture2D(E,0),A.copyTexSubImage2D(A.TEXTURE_2D,Z,0,0,Ie,Ae,k,ye),ce.unbindTexture()};const bp=A.createFramebuffer(),Tp=A.createFramebuffer();this.copyTextureToTexture=function(E,V,Z=null,$=null,k=0,ye=null){ye===null&&(k!==0?(As("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ye=k,k=0):ye=0);let Ie,Ae,Le,Ne,Ve,Oe,$e,ct,xt;const St=E.isCompressedTexture?E.mipmaps[ye]:E.image;if(Z!==null)Ie=Z.max.x-Z.min.x,Ae=Z.max.y-Z.min.y,Le=Z.isBox3?Z.max.z-Z.min.z:1,Ne=Z.min.x,Ve=Z.min.y,Oe=Z.isBox3?Z.min.z:0;else{const dn=Math.pow(2,-k);Ie=Math.floor(St.width*dn),Ae=Math.floor(St.height*dn),E.isDataArrayTexture?Le=St.depth:E.isData3DTexture?Le=Math.floor(St.depth*dn):Le=1,Ne=0,Ve=0,Oe=0}$!==null?($e=$.x,ct=$.y,xt=$.z):($e=0,ct=0,xt=0);const ft=me.convert(V.format),Be=me.convert(V.type);let at;V.isData3DTexture?(I.setTexture3D(V,0),at=A.TEXTURE_3D):V.isDataArrayTexture||V.isCompressedArrayTexture?(I.setTexture2DArray(V,0),at=A.TEXTURE_2D_ARRAY):(I.setTexture2D(V,0),at=A.TEXTURE_2D),A.pixelStorei(A.UNPACK_FLIP_Y_WEBGL,V.flipY),A.pixelStorei(A.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),A.pixelStorei(A.UNPACK_ALIGNMENT,V.unpackAlignment);const Qe=A.getParameter(A.UNPACK_ROW_LENGTH),an=A.getParameter(A.UNPACK_IMAGE_HEIGHT),dr=A.getParameter(A.UNPACK_SKIP_PIXELS),on=A.getParameter(A.UNPACK_SKIP_ROWS),$r=A.getParameter(A.UNPACK_SKIP_IMAGES);A.pixelStorei(A.UNPACK_ROW_LENGTH,St.width),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,St.height),A.pixelStorei(A.UNPACK_SKIP_PIXELS,Ne),A.pixelStorei(A.UNPACK_SKIP_ROWS,Ve),A.pixelStorei(A.UNPACK_SKIP_IMAGES,Oe);const pt=E.isDataArrayTexture||E.isData3DTexture,Jt=V.isDataArrayTexture||V.isData3DTexture;if(E.isDepthTexture){const dn=g.get(E),kt=g.get(V),Qt=g.get(dn.__renderTarget),so=g.get(kt.__renderTarget);ce.bindFramebuffer(A.READ_FRAMEBUFFER,Qt.__webglFramebuffer),ce.bindFramebuffer(A.DRAW_FRAMEBUFFER,so.__webglFramebuffer);for(let Wi=0;Wi<Le;Wi++)pt&&(A.framebufferTextureLayer(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,g.get(E).__webglTexture,k,Oe+Wi),A.framebufferTextureLayer(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,g.get(V).__webglTexture,ye,xt+Wi)),A.blitFramebuffer(Ne,Ve,Ie,Ae,$e,ct,Ie,Ae,A.DEPTH_BUFFER_BIT,A.NEAREST);ce.bindFramebuffer(A.READ_FRAMEBUFFER,null),ce.bindFramebuffer(A.DRAW_FRAMEBUFFER,null)}else if(k!==0||E.isRenderTargetTexture||g.has(E)){const dn=g.get(E),kt=g.get(V);ce.bindFramebuffer(A.READ_FRAMEBUFFER,bp),ce.bindFramebuffer(A.DRAW_FRAMEBUFFER,Tp);for(let Qt=0;Qt<Le;Qt++)pt?A.framebufferTextureLayer(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,dn.__webglTexture,k,Oe+Qt):A.framebufferTexture2D(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,dn.__webglTexture,k),Jt?A.framebufferTextureLayer(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,kt.__webglTexture,ye,xt+Qt):A.framebufferTexture2D(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,kt.__webglTexture,ye),k!==0?A.blitFramebuffer(Ne,Ve,Ie,Ae,$e,ct,Ie,Ae,A.COLOR_BUFFER_BIT,A.NEAREST):Jt?A.copyTexSubImage3D(at,ye,$e,ct,xt+Qt,Ne,Ve,Ie,Ae):A.copyTexSubImage2D(at,ye,$e,ct,Ne,Ve,Ie,Ae);ce.bindFramebuffer(A.READ_FRAMEBUFFER,null),ce.bindFramebuffer(A.DRAW_FRAMEBUFFER,null)}else Jt?E.isDataTexture||E.isData3DTexture?A.texSubImage3D(at,ye,$e,ct,xt,Ie,Ae,Le,ft,Be,St.data):V.isCompressedArrayTexture?A.compressedTexSubImage3D(at,ye,$e,ct,xt,Ie,Ae,Le,ft,St.data):A.texSubImage3D(at,ye,$e,ct,xt,Ie,Ae,Le,ft,Be,St):E.isDataTexture?A.texSubImage2D(A.TEXTURE_2D,ye,$e,ct,Ie,Ae,ft,Be,St.data):E.isCompressedTexture?A.compressedTexSubImage2D(A.TEXTURE_2D,ye,$e,ct,St.width,St.height,ft,St.data):A.texSubImage2D(A.TEXTURE_2D,ye,$e,ct,Ie,Ae,ft,Be,St);A.pixelStorei(A.UNPACK_ROW_LENGTH,Qe),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,an),A.pixelStorei(A.UNPACK_SKIP_PIXELS,dr),A.pixelStorei(A.UNPACK_SKIP_ROWS,on),A.pixelStorei(A.UNPACK_SKIP_IMAGES,$r),ye===0&&V.generateMipmaps&&A.generateMipmap(at),ce.unbindTexture()},this.initRenderTarget=function(E){g.get(E).__webglFramebuffer===void 0&&I.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?I.setTextureCube(E,0):E.isData3DTexture?I.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?I.setTexture2DArray(E,0):I.setTexture2D(E,0),ce.unbindTexture()},this.resetState=function(){L=0,N=0,G=null,ce.reset(),Pe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return zn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=Je._getDrawingBufferColorSpace(e),n.unpackColorSpace=Je._getUnpackColorSpace()}}const fn=(t,e)=>{const n=t.__vccOpts||t;for(const[i,r]of e)n[i]=r;return n},Ci=200,xE=.05,jo=2,Vf=.5,SE={__name:"ParticleBackground",setup(t){const e=gt(null);let n=null,i=null,r=null,s=null,a={x:0,y:0},o=null;Dn(()=>{l(),c(),f(),d(),window.addEventListener("resize",d),e.value?.addEventListener("mousemove",u)}),Cc(()=>{window.removeEventListener("resize",d),e.value?.removeEventListener("mousemove",u),o&&cancelAnimationFrame(o),r&&r.dispose()});function l(){n=new d_,i=new gn(75,e.value.clientWidth/e.value.clientHeight,.1,1e3),i.position.z=5,r=new vE({alpha:!0,antialias:!0}),r.setSize(e.value.clientWidth,e.value.clientHeight),r.setPixelRatio(window.devicePixelRatio),e.value.appendChild(r.domElement)}function c(){const h=new In,_=new Float32Array(Ci*3),v=new Float32Array(Ci*3),m=new Float32Array(Ci),p=new Float32Array(Ci),b=new Float32Array(Ci);for(let M=0;M<Ci;M++){const w=M*3;_[w]=(Math.random()-.5)*10,_[w+1]=(Math.random()-.5)*10,_[w+2]=(Math.random()-.5)*10,v[w]=(Math.random()-.5)*.002,v[w+1]=(Math.random()-.5)*.002,v[w+2]=(Math.random()-.5)*.002,m[M]=Math.random(),p[M]=.002+Math.random()*.003,b[M]=Math.random()>.5?1:-1}h.setAttribute("position",new jt(_,3)),h.setAttribute("velocity",new jt(v,3)),h.setAttribute("opacity",new jt(m,1)),h.setAttribute("fadeSpeed",new jt(p,1)),h.setAttribute("fadeDirection",new jt(b,1));const T=new Yh({size:xE,color:16777215,transparent:!0,opacity:.6,blending:pl,vertexColors:!1});s=new __(h,T),n.add(s)}function u(h){const _=e.value.getBoundingClientRect(),v=(h.clientX-_.left)/_.width*2-1,m=-((h.clientY-_.top)/_.height)*2+1;a.x=v*5,a.y=m*5}function f(){if(o=requestAnimationFrame(f),!s)return;const h=s.geometry.attributes.position.array,_=s.geometry.attributes.velocity.array,v=s.geometry.attributes.opacity.array,m=s.geometry.attributes.fadeSpeed.array,p=s.geometry.attributes.fadeDirection.array;for(let T=0;T<Ci;T++){const M=T*3;h[M]+=_[M],h[M+1]+=_[M+1],h[M+2]+=_[M+2],Math.abs(h[M])>5&&(_[M]*=-1),Math.abs(h[M+1])>5&&(_[M+1]*=-1),Math.abs(h[M+2])>5&&(_[M+2]*=-1);const w=h[M]-a.x,P=h[M+1]-a.y,D=Math.sqrt(w*w+P*P);if(D<jo){const x=(jo-D)/jo,y=Math.atan2(P,w);_[M]+=Math.cos(y)*x*Vf*.001,_[M+1]+=Math.sin(y)*x*Vf*.001}_[M]+=(Math.random()-.5)*1e-4,_[M+1]+=(Math.random()-.5)*1e-4,_[M+2]+=(Math.random()-.5)*1e-4;const z=Math.sqrt(_[M]**2+_[M+1]**2+_[M+2]**2);if(z>.01){const x=.01/z;_[M]*=x,_[M+1]*=x,_[M+2]*=x}v[T]+=m[T]*p[T],v[T]>=1?(v[T]=1,p[T]=-1):v[T]<=0&&(v[T]=0,p[T]=1)}s.geometry.attributes.position.needsUpdate=!0,s.geometry.attributes.velocity.needsUpdate=!0,s.geometry.attributes.opacity.needsUpdate=!0;const b=v.reduce((T,M)=>T+M,0)/Ci;s.material.opacity=b*.6,i.position.x+=(a.x*.1-i.position.x)*.05,i.position.y+=(a.y*.1-i.position.y)*.05,i.lookAt(n.position),r.render(n,i)}function d(){!e.value||!i||!r||(i.aspect=e.value.clientWidth/e.value.clientHeight,i.updateProjectionMatrix(),r.setSize(e.value.clientWidth,e.value.clientHeight))}return(h,_)=>(je(),At("div",{ref_key:"containerRef",ref:e,class:"particle-background"},null,512))}},ME=fn(SE,[["__scopeId","data-v-3ea04891"]]),EE={__name:"App",setup(t){return(e,n)=>{const i=Um("router-view");return je(),At(Dt,null,[vt(ME),vt(i)],64)}}};const Pr=typeof document<"u";function tp(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function yE(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&tp(t.default)}const it=Object.assign;function Zo(t,e){const n={};for(const i in e){const r=e[i];n[i]=Pn(r)?r.map(t):t(r)}return n}const ms=()=>{},Pn=Array.isArray;function zf(t,e){const n={};for(const i in t)n[i]=i in e?e[i]:t[i];return n}const np=/#/g,bE=/&/g,TE=/\//g,AE=/=/g,wE=/\?/g,ip=/\+/g,RE=/%5B/g,CE=/%5D/g,rp=/%5E/g,PE=/%60/g,sp=/%7B/g,DE=/%7C/g,ap=/%7D/g,IE=/%20/g;function Xc(t){return t==null?"":encodeURI(""+t).replace(DE,"|").replace(RE,"[").replace(CE,"]")}function LE(t){return Xc(t).replace(sp,"{").replace(ap,"}").replace(rp,"^")}function uc(t){return Xc(t).replace(ip,"%2B").replace(IE,"+").replace(np,"%23").replace(bE,"%26").replace(PE,"`").replace(sp,"{").replace(ap,"}").replace(rp,"^")}function UE(t){return uc(t).replace(AE,"%3D")}function NE(t){return Xc(t).replace(np,"%23").replace(wE,"%3F")}function FE(t){return NE(t).replace(TE,"%2F")}function Rs(t){if(t==null)return null;try{return decodeURIComponent(""+t)}catch{}return""+t}const OE=/\/$/,BE=t=>t.replace(OE,"");function Jo(t,e,n="/"){let i,r={},s="",a="";const o=e.indexOf("#");let l=e.indexOf("?");return l=o>=0&&l>o?-1:l,l>=0&&(i=e.slice(0,l),s=e.slice(l,o>0?o:e.length),r=t(s.slice(1))),o>=0&&(i=i||e.slice(0,o),a=e.slice(o,e.length)),i=HE(i??e,n),{fullPath:i+s+a,path:i,query:r,hash:Rs(a)}}function VE(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Gf(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function zE(t,e,n){const i=e.matched.length-1,r=n.matched.length-1;return i>-1&&i===r&&Wr(e.matched[i],n.matched[r])&&op(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Wr(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function op(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(var n in t)if(!GE(t[n],e[n]))return!1;return!0}function GE(t,e){return Pn(t)?Hf(t,e):Pn(e)?Hf(e,t):t?.valueOf()===e?.valueOf()}function Hf(t,e){return Pn(e)?t.length===e.length&&t.every((n,i)=>n===e[i]):t.length===1&&t[0]===e}function HE(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),i=t.split("/"),r=i[i.length-1];(r===".."||r===".")&&i.push("");let s=n.length-1,a,o;for(a=0;a<i.length;a++)if(o=i[a],o!==".")if(o==="..")s>1&&s--;else break;return n.slice(0,s).join("/")+"/"+i.slice(a).join("/")}const Pi={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};let fc=(function(t){return t.pop="pop",t.push="push",t})({}),Qo=(function(t){return t.back="back",t.forward="forward",t.unknown="",t})({});function kE(t){if(!t)if(Pr){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),BE(t)}const WE=/^[^#]+#/;function XE(t,e){return t.replace(WE,"#")+e}function qE(t,e){const n=document.documentElement.getBoundingClientRect(),i=t.getBoundingClientRect();return{behavior:e.behavior,left:i.left-n.left-(e.left||0),top:i.top-n.top-(e.top||0)}}const eo=()=>({left:window.scrollX,top:window.scrollY});function YE(t){let e;if("el"in t){const n=t.el,i=typeof n=="string"&&n.startsWith("#"),r=typeof n=="string"?i?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;e=qE(r,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function kf(t,e){return(history.state?history.state.position-e:-1)+t}const dc=new Map;function $E(t,e){dc.set(t,e)}function KE(t){const e=dc.get(t);return dc.delete(t),e}function jE(t){return typeof t=="string"||t&&typeof t=="object"}function lp(t){return typeof t=="string"||typeof t=="symbol"}let Mt=(function(t){return t[t.MATCHER_NOT_FOUND=1]="MATCHER_NOT_FOUND",t[t.NAVIGATION_GUARD_REDIRECT=2]="NAVIGATION_GUARD_REDIRECT",t[t.NAVIGATION_ABORTED=4]="NAVIGATION_ABORTED",t[t.NAVIGATION_CANCELLED=8]="NAVIGATION_CANCELLED",t[t.NAVIGATION_DUPLICATED=16]="NAVIGATION_DUPLICATED",t})({});const cp=Symbol("");Mt.MATCHER_NOT_FOUND+"",Mt.NAVIGATION_GUARD_REDIRECT+"",Mt.NAVIGATION_ABORTED+"",Mt.NAVIGATION_CANCELLED+"",Mt.NAVIGATION_DUPLICATED+"";function Xr(t,e){return it(new Error,{type:t,[cp]:!0},e)}function ti(t,e){return t instanceof Error&&cp in t&&(e==null||!!(t.type&e))}const ZE=["params","query","hash"];function JE(t){if(typeof t=="string")return t;if(t.path!=null)return t.path;const e={};for(const n of ZE)n in t&&(e[n]=t[n]);return JSON.stringify(e,null,2)}function QE(t){const e={};if(t===""||t==="?")return e;const n=(t[0]==="?"?t.slice(1):t).split("&");for(let i=0;i<n.length;++i){const r=n[i].replace(ip," "),s=r.indexOf("="),a=Rs(s<0?r:r.slice(0,s)),o=s<0?null:Rs(r.slice(s+1));if(a in e){let l=e[a];Pn(l)||(l=e[a]=[l]),l.push(o)}else e[a]=o}return e}function Wf(t){let e="";for(let n in t){const i=t[n];if(n=UE(n),i==null){i!==void 0&&(e+=(e.length?"&":"")+n);continue}(Pn(i)?i.map(r=>r&&uc(r)):[i&&uc(i)]).forEach(r=>{r!==void 0&&(e+=(e.length?"&":"")+n,r!=null&&(e+="="+r))})}return e}function ey(t){const e={};for(const n in t){const i=t[n];i!==void 0&&(e[n]=Pn(i)?i.map(r=>r==null?null:""+r):i==null?i:""+i)}return e}const ty=Symbol(""),Xf=Symbol(""),to=Symbol(""),up=Symbol(""),hc=Symbol("");function rs(){let t=[];function e(i){return t.push(i),()=>{const r=t.indexOf(i);r>-1&&t.splice(r,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function Ui(t,e,n,i,r,s=a=>a()){const a=i&&(i.enterCallbacks[r]=i.enterCallbacks[r]||[]);return()=>new Promise((o,l)=>{const c=d=>{d===!1?l(Xr(Mt.NAVIGATION_ABORTED,{from:n,to:e})):d instanceof Error?l(d):jE(d)?l(Xr(Mt.NAVIGATION_GUARD_REDIRECT,{from:e,to:d})):(a&&i.enterCallbacks[r]===a&&typeof d=="function"&&a.push(d),o())},u=s(()=>t.call(i&&i.instances[r],e,n,c));let f=Promise.resolve(u);t.length<3&&(f=f.then(c)),f.catch(d=>l(d))})}function el(t,e,n,i,r=s=>s()){const s=[];for(const a of t)for(const o in a.components){let l=a.components[o];if(!(e!=="beforeRouteEnter"&&!a.instances[o]))if(tp(l)){const c=(l.__vccOpts||l)[e];c&&s.push(Ui(c,n,i,a,o,r))}else{let c=l();s.push(()=>c.then(u=>{if(!u)throw new Error(`Couldn't resolve component "${o}" at "${a.path}"`);const f=yE(u)?u.default:u;a.mods[o]=u,a.components[o]=f;const d=(f.__vccOpts||f)[e];return d&&Ui(d,n,i,a,o,r)()}))}}return s}function ny(t,e){const n=[],i=[],r=[],s=Math.max(e.matched.length,t.matched.length);for(let a=0;a<s;a++){const o=e.matched[a];o&&(t.matched.find(c=>Wr(c,o))?i.push(o):n.push(o));const l=t.matched[a];l&&(e.matched.find(c=>Wr(c,l))||r.push(l))}return[n,i,r]}let iy=()=>location.protocol+"//"+location.host;function fp(t,e){const{pathname:n,search:i,hash:r}=e,s=t.indexOf("#");if(s>-1){let a=r.includes(t.slice(s))?t.slice(s).length:1,o=r.slice(a);return o[0]!=="/"&&(o="/"+o),Gf(o,"")}return Gf(n,t)+i+r}function ry(t,e,n,i){let r=[],s=[],a=null;const o=({state:d})=>{const h=fp(t,location),_=n.value,v=e.value;let m=0;if(d){if(n.value=h,e.value=d,a&&a===_){a=null;return}m=v?d.position-v.position:0}else i(h);r.forEach(p=>{p(n.value,_,{delta:m,type:fc.pop,direction:m?m>0?Qo.forward:Qo.back:Qo.unknown})})};function l(){a=n.value}function c(d){r.push(d);const h=()=>{const _=r.indexOf(d);_>-1&&r.splice(_,1)};return s.push(h),h}function u(){if(document.visibilityState==="hidden"){const{history:d}=window;if(!d.state)return;d.replaceState(it({},d.state,{scroll:eo()}),"")}}function f(){for(const d of s)d();s=[],window.removeEventListener("popstate",o),window.removeEventListener("pagehide",u),document.removeEventListener("visibilitychange",u)}return window.addEventListener("popstate",o),window.addEventListener("pagehide",u),document.addEventListener("visibilitychange",u),{pauseListeners:l,listen:c,destroy:f}}function qf(t,e,n,i=!1,r=!1){return{back:t,current:e,forward:n,replaced:i,position:window.history.length,scroll:r?eo():null}}function sy(t){const{history:e,location:n}=window,i={value:fp(t,n)},r={value:e.state};r.value||s(i.value,{back:null,current:i.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function s(l,c,u){const f=t.indexOf("#"),d=f>-1?(n.host&&document.querySelector("base")?t:t.slice(f))+l:iy()+t+l;try{e[u?"replaceState":"pushState"](c,"",d),r.value=c}catch(h){console.error(h),n[u?"replace":"assign"](d)}}function a(l,c){s(l,it({},e.state,qf(r.value.back,l,r.value.forward,!0),c,{position:r.value.position}),!0),i.value=l}function o(l,c){const u=it({},r.value,e.state,{forward:l,scroll:eo()});s(u.current,u,!0),s(l,it({},qf(i.value,l,null),{position:u.position+1},c),!1),i.value=l}return{location:i,state:r,push:o,replace:a}}function ay(t){t=kE(t);const e=sy(t),n=ry(t,e.state,e.location,e.replace);function i(s,a=!0){a||n.pauseListeners(),history.go(s)}const r=it({location:"",base:t,go:i,createHref:XE.bind(null,t)},e,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}let lr=(function(t){return t[t.Static=0]="Static",t[t.Param=1]="Param",t[t.Group=2]="Group",t})({});var wt=(function(t){return t[t.Static=0]="Static",t[t.Param=1]="Param",t[t.ParamRegExp=2]="ParamRegExp",t[t.ParamRegExpEnd=3]="ParamRegExpEnd",t[t.EscapeNext=4]="EscapeNext",t})(wt||{});const oy={type:lr.Static,value:""},ly=/[a-zA-Z0-9_]/;function cy(t){if(!t)return[[]];if(t==="/")return[[oy]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(h){throw new Error(`ERR (${n})/"${c}": ${h}`)}let n=wt.Static,i=n;const r=[];let s;function a(){s&&r.push(s),s=[]}let o=0,l,c="",u="";function f(){c&&(n===wt.Static?s.push({type:lr.Static,value:c}):n===wt.Param||n===wt.ParamRegExp||n===wt.ParamRegExpEnd?(s.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),s.push({type:lr.Param,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function d(){c+=l}for(;o<t.length;){if(l=t[o++],l==="\\"&&n!==wt.ParamRegExp){i=n,n=wt.EscapeNext;continue}switch(n){case wt.Static:l==="/"?(c&&f(),a()):l===":"?(f(),n=wt.Param):d();break;case wt.EscapeNext:d(),n=i;break;case wt.Param:l==="("?n=wt.ParamRegExp:ly.test(l)?d():(f(),n=wt.Static,l!=="*"&&l!=="?"&&l!=="+"&&o--);break;case wt.ParamRegExp:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=wt.ParamRegExpEnd:u+=l;break;case wt.ParamRegExpEnd:f(),n=wt.Static,l!=="*"&&l!=="?"&&l!=="+"&&o--,u="";break;default:e("Unknown state");break}}return n===wt.ParamRegExp&&e(`Unfinished custom RegExp for param "${c}"`),f(),a(),r}const Yf="[^/]+?",uy={sensitive:!1,strict:!1,start:!0,end:!0};var Yt=(function(t){return t[t._multiplier=10]="_multiplier",t[t.Root=90]="Root",t[t.Segment=40]="Segment",t[t.SubSegment=30]="SubSegment",t[t.Static=40]="Static",t[t.Dynamic=20]="Dynamic",t[t.BonusCustomRegExp=10]="BonusCustomRegExp",t[t.BonusWildcard=-50]="BonusWildcard",t[t.BonusRepeatable=-20]="BonusRepeatable",t[t.BonusOptional=-8]="BonusOptional",t[t.BonusStrict=.7000000000000001]="BonusStrict",t[t.BonusCaseSensitive=.25]="BonusCaseSensitive",t})(Yt||{});const fy=/[.+*?^${}()[\]/\\]/g;function dy(t,e){const n=it({},uy,e),i=[];let r=n.start?"^":"";const s=[];for(const c of t){const u=c.length?[]:[Yt.Root];n.strict&&!c.length&&(r+="/");for(let f=0;f<c.length;f++){const d=c[f];let h=Yt.Segment+(n.sensitive?Yt.BonusCaseSensitive:0);if(d.type===lr.Static)f||(r+="/"),r+=d.value.replace(fy,"\\$&"),h+=Yt.Static;else if(d.type===lr.Param){const{value:_,repeatable:v,optional:m,regexp:p}=d;s.push({name:_,repeatable:v,optional:m});const b=p||Yf;if(b!==Yf){h+=Yt.BonusCustomRegExp;try{`${b}`}catch(M){throw new Error(`Invalid custom RegExp for param "${_}" (${b}): `+M.message)}}let T=v?`((?:${b})(?:/(?:${b}))*)`:`(${b})`;f||(T=m&&c.length<2?`(?:/${T})`:"/"+T),m&&(T+="?"),r+=T,h+=Yt.Dynamic,m&&(h+=Yt.BonusOptional),v&&(h+=Yt.BonusRepeatable),b===".*"&&(h+=Yt.BonusWildcard)}u.push(h)}i.push(u)}if(n.strict&&n.end){const c=i.length-1;i[c][i[c].length-1]+=Yt.BonusStrict}n.strict||(r+="/?"),n.end?r+="$":n.strict&&!r.endsWith("/")&&(r+="(?:/|$)");const a=new RegExp(r,n.sensitive?"":"i");function o(c){const u=c.match(a),f={};if(!u)return null;for(let d=1;d<u.length;d++){const h=u[d]||"",_=s[d-1];f[_.name]=h&&_.repeatable?h.split("/"):h}return f}function l(c){let u="",f=!1;for(const d of t){(!f||!u.endsWith("/"))&&(u+="/"),f=!1;for(const h of d)if(h.type===lr.Static)u+=h.value;else if(h.type===lr.Param){const{value:_,repeatable:v,optional:m}=h,p=_ in c?c[_]:"";if(Pn(p)&&!v)throw new Error(`Provided param "${_}" is an array but it is not repeatable (* or + modifiers)`);const b=Pn(p)?p.join("/"):p;if(!b)if(m)d.length<2&&(u.endsWith("/")?u=u.slice(0,-1):f=!0);else throw new Error(`Missing required param "${_}"`);u+=b}}return u||"/"}return{re:a,score:i,keys:s,parse:o,stringify:l}}function hy(t,e){let n=0;for(;n<t.length&&n<e.length;){const i=e[n]-t[n];if(i)return i;n++}return t.length<e.length?t.length===1&&t[0]===Yt.Static+Yt.Segment?-1:1:t.length>e.length?e.length===1&&e[0]===Yt.Static+Yt.Segment?1:-1:0}function dp(t,e){let n=0;const i=t.score,r=e.score;for(;n<i.length&&n<r.length;){const s=hy(i[n],r[n]);if(s)return s;n++}if(Math.abs(r.length-i.length)===1){if($f(i))return 1;if($f(r))return-1}return r.length-i.length}function $f(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const py={strict:!1,end:!0,sensitive:!1};function my(t,e,n){const i=dy(cy(t.path),n),r=it(i,{record:t,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function gy(t,e){const n=[],i=new Map;e=zf(py,e);function r(f){return i.get(f)}function s(f,d,h){const _=!h,v=jf(f);v.aliasOf=h&&h.record;const m=zf(e,f),p=[v];if("alias"in f){const M=typeof f.alias=="string"?[f.alias]:f.alias;for(const w of M)p.push(jf(it({},v,{components:h?h.record.components:v.components,path:w,aliasOf:h?h.record:v})))}let b,T;for(const M of p){const{path:w}=M;if(d&&w[0]!=="/"){const P=d.record.path,D=P[P.length-1]==="/"?"":"/";M.path=d.record.path+(w&&D+w)}if(b=my(M,d,m),h?h.alias.push(b):(T=T||b,T!==b&&T.alias.push(b),_&&f.name&&!Zf(b)&&a(f.name)),hp(b)&&l(b),v.children){const P=v.children;for(let D=0;D<P.length;D++)s(P[D],b,h&&h.children[D])}h=h||b}return T?()=>{a(T)}:ms}function a(f){if(lp(f)){const d=i.get(f);d&&(i.delete(f),n.splice(n.indexOf(d),1),d.children.forEach(a),d.alias.forEach(a))}else{const d=n.indexOf(f);d>-1&&(n.splice(d,1),f.record.name&&i.delete(f.record.name),f.children.forEach(a),f.alias.forEach(a))}}function o(){return n}function l(f){const d=xy(f,n);n.splice(d,0,f),f.record.name&&!Zf(f)&&i.set(f.record.name,f)}function c(f,d){let h,_={},v,m;if("name"in f&&f.name){if(h=i.get(f.name),!h)throw Xr(Mt.MATCHER_NOT_FOUND,{location:f});m=h.record.name,_=it(Kf(d.params,h.keys.filter(T=>!T.optional).concat(h.parent?h.parent.keys.filter(T=>T.optional):[]).map(T=>T.name)),f.params&&Kf(f.params,h.keys.map(T=>T.name))),v=h.stringify(_)}else if(f.path!=null)v=f.path,h=n.find(T=>T.re.test(v)),h&&(_=h.parse(v),m=h.record.name);else{if(h=d.name?i.get(d.name):n.find(T=>T.re.test(d.path)),!h)throw Xr(Mt.MATCHER_NOT_FOUND,{location:f,currentLocation:d});m=h.record.name,_=it({},d.params,f.params),v=h.stringify(_)}const p=[];let b=h;for(;b;)p.unshift(b.record),b=b.parent;return{name:m,path:v,params:_,matched:p,meta:vy(p)}}t.forEach(f=>s(f));function u(){n.length=0,i.clear()}return{addRoute:s,resolve:c,removeRoute:a,clearRoutes:u,getRoutes:o,getRecordMatcher:r}}function Kf(t,e){const n={};for(const i of e)i in t&&(n[i]=t[i]);return n}function jf(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:_y(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function _y(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const i in t.components)e[i]=typeof n=="object"?n[i]:n;return e}function Zf(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function vy(t){return t.reduce((e,n)=>it(e,n.meta),{})}function xy(t,e){let n=0,i=e.length;for(;n!==i;){const s=n+i>>1;dp(t,e[s])<0?i=s:n=s+1}const r=Sy(t);return r&&(i=e.lastIndexOf(r,i-1)),i}function Sy(t){let e=t;for(;e=e.parent;)if(hp(e)&&dp(t,e)===0)return e}function hp({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function Jf(t){const e=Hn(to),n=Hn(up),i=bn(()=>{const l=yn(t.to);return e.resolve(l)}),r=bn(()=>{const{matched:l}=i.value,{length:c}=l,u=l[c-1],f=n.matched;if(!u||!f.length)return-1;const d=f.findIndex(Wr.bind(null,u));if(d>-1)return d;const h=Qf(l[c-2]);return c>1&&Qf(u)===h&&f[f.length-1].path!==h?f.findIndex(Wr.bind(null,l[c-2])):d}),s=bn(()=>r.value>-1&&Ty(n.params,i.value.params)),a=bn(()=>r.value>-1&&r.value===n.matched.length-1&&op(n.params,i.value.params));function o(l={}){if(by(l)){const c=e[yn(t.replace)?"replace":"push"](yn(t.to)).catch(ms);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>c),c}return Promise.resolve()}return{route:i,href:bn(()=>i.value.href),isActive:s,isExactActive:a,navigate:o}}function My(t){return t.length===1?t[0]:t}const Ey=Rc({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:Jf,setup(t,{slots:e}){const n=Ha(Jf(t)),{options:i}=Hn(to),r=bn(()=>({[ed(t.activeClass,i.linkActiveClass,"router-link-active")]:n.isActive,[ed(t.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const s=e.default&&My(e.default(n));return t.custom?s:Uc("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},s)}}}),yy=Ey;function by(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function Ty(t,e){for(const n in e){const i=e[n],r=t[n];if(typeof i=="string"){if(i!==r)return!1}else if(!Pn(r)||r.length!==i.length||i.some((s,a)=>s.valueOf()!==r[a].valueOf()))return!1}return!0}function Qf(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const ed=(t,e,n)=>t??e??n,Ay=Rc({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const i=Hn(hc),r=bn(()=>t.route||i.value),s=Hn(Xf,0),a=bn(()=>{let c=yn(s);const{matched:u}=r.value;let f;for(;(f=u[c])&&!f.components;)c++;return c}),o=bn(()=>r.value.matched[a.value]);pa(Xf,bn(()=>a.value+1)),pa(ty,o),pa(hc,r);const l=gt();return Bi(()=>[l.value,o.value,t.name],([c,u,f],[d,h,_])=>{u&&(u.instances[f]=c,h&&h!==u&&c&&c===d&&(u.leaveGuards.size||(u.leaveGuards=h.leaveGuards),u.updateGuards.size||(u.updateGuards=h.updateGuards))),c&&u&&(!h||!Wr(u,h)||!d)&&(u.enterCallbacks[f]||[]).forEach(v=>v(c))},{flush:"post"}),()=>{const c=r.value,u=t.name,f=o.value,d=f&&f.components[u];if(!d)return td(n.default,{Component:d,route:c});const h=f.props[u],_=h?h===!0?c.params:typeof h=="function"?h(c):h:null,m=Uc(d,it({},_,e,{onVnodeUnmounted:p=>{p.component.isUnmounted&&(f.instances[u]=null)},ref:l}));return td(n.default,{Component:m,route:c})||m}}});function td(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const wy=Ay;function Ry(t){const e=gy(t.routes,t),n=t.parseQuery||QE,i=t.stringifyQuery||Wf,r=t.history,s=rs(),a=rs(),o=rs(),l=rm(Pi);let c=Pi;Pr&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Zo.bind(null,U=>""+U),f=Zo.bind(null,FE),d=Zo.bind(null,Rs);function h(U,ie){let oe,ae;return lp(U)?(oe=e.getRecordMatcher(U),ae=ie):ae=U,e.addRoute(ae,oe)}function _(U){const ie=e.getRecordMatcher(U);ie&&e.removeRoute(ie)}function v(){return e.getRoutes().map(U=>U.record)}function m(U){return!!e.getRecordMatcher(U)}function p(U,ie){if(ie=it({},ie||l.value),typeof U=="string"){const F=Jo(n,U,ie.path),j=e.resolve({path:F.path},ie),q=r.createHref(F.fullPath);return it(F,j,{params:d(j.params),hash:Rs(F.hash),redirectedFrom:void 0,href:q})}let oe;if(U.path!=null)oe=it({},U,{path:Jo(n,U.path,ie.path).path});else{const F=it({},U.params);for(const j in F)F[j]==null&&delete F[j];oe=it({},U,{params:f(F)}),ie.params=f(ie.params)}const ae=e.resolve(oe,ie),De=U.hash||"";ae.params=u(d(ae.params));const R=VE(i,it({},U,{hash:LE(De),path:ae.path})),C=r.createHref(R);return it({fullPath:R,hash:De,query:i===Wf?ey(U.query):U.query||{}},ae,{redirectedFrom:void 0,href:C})}function b(U){return typeof U=="string"?Jo(n,U,l.value.path):it({},U)}function T(U,ie){if(c!==U)return Xr(Mt.NAVIGATION_CANCELLED,{from:ie,to:U})}function M(U){return D(U)}function w(U){return M(it(b(U),{replace:!0}))}function P(U,ie){const oe=U.matched[U.matched.length-1];if(oe&&oe.redirect){const{redirect:ae}=oe;let De=typeof ae=="function"?ae(U,ie):ae;return typeof De=="string"&&(De=De.includes("?")||De.includes("#")?De=b(De):{path:De},De.params={}),it({query:U.query,hash:U.hash,params:De.path!=null?{}:U.params},De)}}function D(U,ie){const oe=c=p(U),ae=l.value,De=U.state,R=U.force,C=U.replace===!0,F=P(oe,ae);if(F)return D(it(b(F),{state:typeof F=="object"?it({},De,F.state):De,force:R,replace:C}),ie||oe);const j=oe;j.redirectedFrom=ie;let q;return!R&&zE(i,ae,oe)&&(q=Xr(Mt.NAVIGATION_DUPLICATED,{to:j,from:ae}),Se(ae,ae,!0,!1)),(q?Promise.resolve(q):y(j,ae)).catch(J=>ti(J)?ti(J,Mt.NAVIGATION_GUARD_REDIRECT)?J:ge(J):ee(J,j,ae)).then(J=>{if(J){if(ti(J,Mt.NAVIGATION_GUARD_REDIRECT))return D(it({replace:C},b(J.to),{state:typeof J.to=="object"?it({},De,J.to.state):De,force:R}),ie||j)}else J=N(j,ae,!0,C,De);return L(j,ae,J),J})}function z(U,ie){const oe=T(U,ie);return oe?Promise.reject(oe):Promise.resolve()}function x(U){const ie=nt.values().next().value;return ie&&typeof ie.runWithContext=="function"?ie.runWithContext(U):U()}function y(U,ie){let oe;const[ae,De,R]=ny(U,ie);oe=el(ae.reverse(),"beforeRouteLeave",U,ie);for(const F of ae)F.leaveGuards.forEach(j=>{oe.push(Ui(j,U,ie))});const C=z.bind(null,U,ie);return oe.push(C),re(oe).then(()=>{oe=[];for(const F of s.list())oe.push(Ui(F,U,ie));return oe.push(C),re(oe)}).then(()=>{oe=el(De,"beforeRouteUpdate",U,ie);for(const F of De)F.updateGuards.forEach(j=>{oe.push(Ui(j,U,ie))});return oe.push(C),re(oe)}).then(()=>{oe=[];for(const F of R)if(F.beforeEnter)if(Pn(F.beforeEnter))for(const j of F.beforeEnter)oe.push(Ui(j,U,ie));else oe.push(Ui(F.beforeEnter,U,ie));return oe.push(C),re(oe)}).then(()=>(U.matched.forEach(F=>F.enterCallbacks={}),oe=el(R,"beforeRouteEnter",U,ie,x),oe.push(C),re(oe))).then(()=>{oe=[];for(const F of a.list())oe.push(Ui(F,U,ie));return oe.push(C),re(oe)}).catch(F=>ti(F,Mt.NAVIGATION_CANCELLED)?F:Promise.reject(F))}function L(U,ie,oe){o.list().forEach(ae=>x(()=>ae(U,ie,oe)))}function N(U,ie,oe,ae,De){const R=T(U,ie);if(R)return R;const C=ie===Pi,F=Pr?history.state:{};oe&&(ae||C?r.replace(U.fullPath,it({scroll:C&&F&&F.scroll},De)):r.push(U.fullPath,De)),l.value=U,Se(U,ie,oe,C),ge()}let G;function ne(){G||(G=r.listen((U,ie,oe)=>{if(!Ze.listening)return;const ae=p(U),De=P(ae,Ze.currentRoute.value);if(De){D(it(De,{replace:!0,force:!0}),ae).catch(ms);return}c=ae;const R=l.value;Pr&&$E(kf(R.fullPath,oe.delta),eo()),y(ae,R).catch(C=>ti(C,Mt.NAVIGATION_ABORTED|Mt.NAVIGATION_CANCELLED)?C:ti(C,Mt.NAVIGATION_GUARD_REDIRECT)?(D(it(b(C.to),{force:!0}),ae).then(F=>{ti(F,Mt.NAVIGATION_ABORTED|Mt.NAVIGATION_DUPLICATED)&&!oe.delta&&oe.type===fc.pop&&r.go(-1,!1)}).catch(ms),Promise.reject()):(oe.delta&&r.go(-oe.delta,!1),ee(C,ae,R))).then(C=>{C=C||N(ae,R,!1),C&&(oe.delta&&!ti(C,Mt.NAVIGATION_CANCELLED)?r.go(-oe.delta,!1):oe.type===fc.pop&&ti(C,Mt.NAVIGATION_ABORTED|Mt.NAVIGATION_DUPLICATED)&&r.go(-1,!1)),L(ae,R,C)}).catch(ms)}))}let te=rs(),K=rs(),H;function ee(U,ie,oe){ge(U);const ae=K.list();return ae.length?ae.forEach(De=>De(U,ie,oe)):console.error(U),Promise.reject(U)}function ve(){return H&&l.value!==Pi?Promise.resolve():new Promise((U,ie)=>{te.add([U,ie])})}function ge(U){return H||(H=!U,ne(),te.list().forEach(([ie,oe])=>U?oe(U):ie()),te.reset()),U}function Se(U,ie,oe,ae){const{scrollBehavior:De}=t;if(!Pr||!De)return Promise.resolve();const R=!oe&&KE(kf(U.fullPath,0))||(ae||!oe)&&history.state&&history.state.scroll||null;return Ac().then(()=>De(U,ie,R)).then(C=>C&&YE(C)).catch(C=>ee(C,U,ie))}const Fe=U=>r.go(U);let Ge;const nt=new Set,Ze={currentRoute:l,listening:!0,addRoute:h,removeRoute:_,clearRoutes:e.clearRoutes,hasRoute:m,getRoutes:v,resolve:p,options:t,push:M,replace:w,go:Fe,back:()=>Fe(-1),forward:()=>Fe(1),beforeEach:s.add,beforeResolve:a.add,afterEach:o.add,onError:K.add,isReady:ve,install(U){U.component("RouterLink",yy),U.component("RouterView",wy),U.config.globalProperties.$router=Ze,Object.defineProperty(U.config.globalProperties,"$route",{enumerable:!0,get:()=>yn(l)}),Pr&&!Ge&&l.value===Pi&&(Ge=!0,M(r.location).catch(ae=>{}));const ie={};for(const ae in Pi)Object.defineProperty(ie,ae,{get:()=>l.value[ae],enumerable:!0});U.provide(to,Ze),U.provide(up,Td(ie)),U.provide(hc,l);const oe=U.unmount;nt.add(U),U.unmount=function(){nt.delete(U),nt.size<1&&(c=Pi,G&&G(),G=null,l.value=Pi,Ge=!1,H=!1),oe()}}};function re(U){return U.reduce((ie,oe)=>ie.then(()=>x(oe)),Promise.resolve())}return Ze}function Fs(){return Hn(to)}const Cy="/zsm.jpg",Py="/usdt.jpg",Dy={class:"modal-content"},Iy={__name:"Modal",props:{modelValue:{type:Boolean,default:!1},containerClass:{type:String,default:""},closeOnOverlay:{type:Boolean,default:!0}},emits:["update:modelValue","close"],setup(t,{emit:e}){const n=t,i=e;function r(){i("update:modelValue",!1),i("close")}function s(){n.closeOnOverlay&&r()}return(a,o)=>(je(),sn(xm,{to:"body"},[vt(C0,{name:"modal"},{default:Hi(()=>[t.modelValue?(je(),At("div",{key:0,class:"modal-overlay",onClick:Q0(s,["self"])},[O("div",{class:Kt(["modal-container",t.containerClass])},[O("button",{class:"modal-close",onClick:r,"aria-label":"关闭"},[...o[0]||(o[0]=[O("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[O("path",{d:"M15 5L5 15M5 5L15 15",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})],-1)])]),O("div",Dy,[$d(a.$slots,"default",{},void 0,!0)])],2)])):ci("",!0)]),_:3})]))}},pp=fn(Iy,[["__scopeId","data-v-f29cc079"]]),Ly={class:"sponsor-modal"},Uy={class:"sponsor-methods"},Ny={class:"sponsor-item"},Fy={class:"address-container"},Oy={class:"address-box"},By={__name:"SponsorModal",props:{modelValue:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(t,{emit:e}){const n=t,i=e,r=gt(n.modelValue),s=gt(!1);Bi(()=>n.modelValue,l=>{r.value=l}),Bi(r,l=>{i("update:modelValue",l)});function a(){r.value=!1}async function o(){const l="0x0F65D3Ceb45a660fC87ED850c121862cFad5c815";try{await navigator.clipboard.writeText(l),s.value=!0,setTimeout(()=>{s.value=!1},2e3)}catch(c){console.error("复制失败:",c);const u=document.createElement("textarea");u.value=l,u.style.position="fixed",u.style.opacity="0",document.body.appendChild(u),u.select();try{document.execCommand("copy"),s.value=!0,setTimeout(()=>{s.value=!1},2e3)}catch(f){console.error("复制失败:",f)}document.body.removeChild(u)}}return(l,c)=>(je(),sn(pp,{modelValue:r.value,"onUpdate:modelValue":c[0]||(c[0]=u=>r.value=u),onClose:a},{default:Hi(()=>[O("div",Ly,[c[6]||(c[6]=O("h2",{class:"sponsor-title"},"赞助我",-1)),c[7]||(c[7]=O("p",{class:"sponsor-desc"},"感谢您的支持！",-1)),O("div",Uy,[c[5]||(c[5]=O("div",{class:"sponsor-item"},[O("h3",{class:"sponsor-item-title"},"微信赞赏"),O("div",{class:"qr-code-container"},[O("img",{src:Cy,alt:"微信赞赏码",class:"qr-code"})])],-1)),O("div",Ny,[c[3]||(c[3]=O("h3",{class:"sponsor-item-title"},"USDT (以太坊链)",-1)),c[4]||(c[4]=O("div",{class:"qr-code-container"},[O("img",{src:Py,alt:"USDT收款码",class:"qr-code"})],-1)),O("div",Fy,[c[2]||(c[2]=O("p",{class:"address-label"},"钱包地址：",-1)),O("div",Oy,[c[1]||(c[1]=O("code",{class:"address-code"},"0x0F65D3Ceb45a660fC87ED850c121862cFad5c815",-1)),O("button",{class:Kt(["copy-btn",{copied:s.value}]),onClick:o},Bt(s.value?"已复制":"复制"),3)])])])])])]),_:1},8,["modelValue"]))}},Vy=fn(By,[["__scopeId","data-v-b4ee7d13"]]),zy="data:image/svg+xml,%3c?xml%20version='1.0'%20standalone='no'?%3e%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3csvg%20t='1767491986153'%20class='icon'%20viewBox='0%200%201024%201024'%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20p-id='3403'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20width='200'%20height='200'%3e%3cpath%20d='M550.744931%20834.806034%20550.744931%20834.806034c-11.183713%200-16.754592%200-22.327518%200-5.53404%200-11.144828%200-16.718777%200l-5.572926%200c-5.571902%200-16.717753%200-22.289656%205.53404-22.290679%2022.326495-61.298088%2033.475416-111.453395%2033.475416-33.434483%200-61.298088-5.610788-89.163739-16.7198-22.289656-11.143805-33.435507-22.326495-33.435507-39.009456%200-16.717753%2011.143805-27.862581%2039.009456-39.045271%2016.717753-5.535063%2022.289656-11.106965%2022.289656-22.326495%200-11.106965%200-22.25384-5.572926-27.863604-11.144828-11.034311-16.718777-27.788903-27.863604-38.896892-5.572926-11.144828-16.71673-16.755616-27.861558-16.755616l0%200c-11.144828%200-16.717753%205.608741-27.863604%2011.220552-11.143805%2011.106965-16.717753%2016.644075-22.290679%2016.644075l0%200c-5.572926%200-11.106965-16.644075-11.106965-44.505633%200-27.863604%205.535063-61.336974%2011.070126-94.810343%2011.145851-33.398668%2027.862581-61.261249%2055.725162-89.124853%205.574972-5.535063%2011.146874-16.717753%2011.146874-27.863604%200-5.53404%200-5.53404%200-11.106965%200-16.755616%205.571902-33.435507%2016.71673-50.154283%205.573949-5.572926%205.573949-11.143805%205.573949-16.717753l0-5.573949c0.035816-66.908876%2022.288632-122.635061%2072.480778-172.789345%2044.582381-50.191122%20100.30652-72.444962%20167.180604-72.444962%2066.872037%200%20122.600269%2022.290679%20172.751482%2072.444962%2044.618197%2050.154283%2072.480778%20105.880469%2072.480778%20172.715667%200%200%200%200%200%205.572926%200%205.573949%200%2011.144828%205.536087%2016.717753%2011.141758%2016.718777%2016.717753%2033.398668%2016.717753%2050.154283%200%205.572926%200%205.572926%200%2011.106965%200%2011.144828%200%2022.326495%2011.143805%2027.862581%2027.863604%2027.862581%2044.581358%2055.726186%2055.726186%2089.124853%2011.144828%2033.474392%2016.717753%2066.944691%2011.144828%2094.810343%200%2027.862581-5.573949%2038.97057-16.681938%2044.50768-5.573949%200-11.183713-5.535063-22.328541-16.645099-5.533017-5.572926-16.718777-11.219529-27.861558-11.219529l-5.536087%200c-11.184737%200-22.325471%205.606695-27.861558%2016.753569-5.573949%2016.71673-16.754592%2027.863604-27.863604%2038.969547-5.572926%205.608741-11.18269%2016.754592-5.572926%2027.863604%200%2011.220552%2011.145851%2016.753569%2016.682961%2022.326495%2027.826765%2011.219529%2039.010479%2022.364357%2039.010479%2039.08211%200%2016.680914-11.183713%2027.863604-33.43653%2039.008432-22.289656%2011.106965-55.724139%2016.7198-89.164762%2016.7198-50.15326%200-83.58979-11.184737-111.452371-33.474392%205.571902%200-5.572926-5.572926-11.106965-5.572926l0%200L550.744931%20834.806034zM678.880263%20940.724365c55.726186%200%20100.30652-11.143805%20133.74305-33.398668%2033.435507-22.326495%2055.724139-50.191122%2055.724139-89.163739%200-22.291702-5.53404-39.046295-16.678868-55.726186%205.571902%200%2016.678868%200%2022.287609-5.608741%2033.435507-11.106965%2050.15633-38.97057%2055.727209-83.591837%205.571902-38.9675%200-83.58979-16.681938-133.706211-11.18269-39.046295-33.435507-72.444962-61.297065-105.880469l0%200c0-27.862581-5.573949-50.154283-16.7198-78.015841%200-83.590813-27.861558-156.034752-89.124853-217.370703C684.450119%2076.963882%20612.004133%2049.098231%20528.418436%2049.098231c-83.590813%200-156.034752%2027.862581-217.334887%2089.124853-55.764048%2061.33595-89.163739%20133.781936-89.163739%20217.370703-11.143805%2022.290679-16.717753%2050.154283-16.717753%2078.016865l0%205.571902c-33.434483%2027.863604-50.154283%2066.87306-61.298088%20100.305497-16.718777%2050.118468-22.290679%2094.737688-16.718777%20133.708258%205.573949%2044.61922%2027.863604%2072.482825%2055.726186%2083.590813%205.572926%200%2016.718777%205.608741%2022.290679%205.608741-11.144828%2016.681938-16.718777%2033.43653-16.718777%2055.726186%200%2033.435507%2016.718777%2066.872037%2055.727209%2089.163739%2033.435507%2022.291702%2078.015841%2033.435507%20128.169101%2033.435507%2055.725162%200%20105.880469-11.142781%20139.316999-39.007409l27.863604%200c39.045271%2027.862581%2083.590813%2039.007409%20139.316999%2039.007409l0%200L678.880263%20940.724365z'%20fill='%23bfbfbf'%20p-id='3404'%3e%3c/path%3e%3c/svg%3e",Gy="data:image/svg+xml,%3c?xml%20version='1.0'%20standalone='no'?%3e%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3csvg%20t='1767492016670'%20class='icon'%20viewBox='0%200%201024%201024'%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20p-id='4505'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20width='200'%20height='200'%3e%3cpath%20d='M278.8864%20148.1728c14.336-8.192%2032.6144-9.3696%2047.8208-2.6624%2011.3664%204.6592%2019.968%2013.824%2029.184%2021.6064%2038.144%2032.9216%2075.9808%2066.304%20114.2784%2099.0208h80.4352c38.2976-32.768%2076.0832-66.048%20114.2272-98.9696%209.2672-7.7824%2017.8688-16.896%2029.2864-21.6576%2014.7456-6.5024%2032.4608-5.632%2046.592%202.048%2016.5888%208.5504%2028.1088%2026.2656%2028.8256%2044.9536%201.024%2013.568-3.84%2027.2896-12.3392%2037.7856-7.5264%208.3456-16.5376%2015.2064-24.8832%2022.6816-5.3248%204.4032-10.1376%209.5232-16.0256%2013.2096%2023.6544%200%2047.2576-0.256%2070.912%200.1536%2031.1296%200.8192%2061.44%2014.592%2082.8928%2037.1712%2022.6304%2022.2208%2035.5328%2053.5552%2035.4816%2085.1968%200.1024%20108.4416%200%20216.9344%200.0512%20325.376-0.1024%2016.384%200.8192%2033.024-2.816%2049.152-6.656%2032.9728-28.8256%2061.5936-56.9856%2079.36a121.344%20121.344%200%200%201-64.7168%2017.7664H263.2704c-16.9984-0.1024-34.2528%200.8704-50.9952-2.8672-32.1024-6.4512-60.0064-27.648-77.824-54.6304a121.088%20121.088%200%200%201-19.2512-66.9696v-321.536c0.1024-16.5376-0.9216-33.1776%202.4576-49.408%2010.24-52.9408%2058.9312-96.1024%20112.9984-98.4576%2024.6272-0.768%2049.3056-0.2048%2073.9328-0.3072-11.6224-8.3968-21.8112-18.5344-32.768-27.7504a55.04%2055.04%200%200%201-20.5312-45.9264c0.7168-18.2272%2011.6736-35.584%2027.648-44.3392m-13.056%20221.7984c-20.992%203.7376-38.912%2020.3264-44.7488%2040.7552a76.4928%2076.4928%200%200%200-2.3552%2021.7088c0.1024%2089.0368-0.0512%20178.0736%200.0512%20267.1616-0.4096%2024.2176%2016.3328%2047.1552%2039.1168%2054.8864%208.1408%202.9696%2016.896%203.0208%2025.3952%203.072%20153.1904-0.1024%20306.432%200.0512%20459.6224-0.0512%2022.4768%200.8704%2044.0832-13.1072%2053.5552-33.28%205.7856-11.5712%205.6832-24.7296%205.4784-37.376v-248.832c0-9.1136%200.3072-18.4832-2.304-27.2896a58.7776%2058.7776%200%200%200-36.864-38.656c-9.7792-3.584-20.4288-3.0208-30.6688-3.072H292.5056c-8.8576%200-17.8176-0.3072-26.624%200.9728z'%20fill='%23bfbfbf'%20p-id='4506'%3e%3c/path%3e%3cpath%20d='M358.7072%20455.5264c14.6432-1.4848%2029.8496%203.2768%2041.0112%2012.8%2012.4416%2010.24%2019.5584%2026.112%2019.7632%2042.1376%200.3584%2019.4048%200.1024%2038.8608%200.1024%2058.2656%200%2012.8-3.3792%2025.8048-11.3152%2035.9424a54.9888%2054.9888%200%200%201-48.4864%2021.76%2054.9376%2054.9376%200%200%201-44.032-28.2624c-6.8096-11.6736-7.3728-25.4976-7.168-38.6048%200.4096-18.8416-1.024-37.7856%200.8704-56.576a55.296%2055.296%200%200%201%2049.2544-47.4624z%20m292.4544%200a55.2448%2055.2448%200%200%201%2060.7232%2053.0432c0.8192%2018.2272%200.1024%2036.4544%200.4096%2054.6816%200.1024%2012.8-1.4336%2026.112-8.4992%2037.12-10.24%2017.0496-30.3104%2027.5456-50.176%2026.112a55.04%2055.04%200%200%201-43.3664-24.9856c-7.936-11.776-9.472-26.2656-9.1136-40.0896%200.3584-18.7392-0.6656-37.4784%200.6144-56.1664%201.8432-25.6%2023.9104-47.5136%2049.408-49.664z'%20fill='%23bfbfbf'%20p-id='4507'%3e%3c/path%3e%3c/svg%3e",Hy="data:image/svg+xml,%3c?xml%20version='1.0'%20standalone='no'?%3e%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3csvg%20t='1767492073366'%20class='icon'%20viewBox='0%200%201024%201024'%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20p-id='9084'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20width='200'%20height='200'%3e%3cpath%20d='M778.41%2096h141.142L611.2%20448.427%20973.952%20928H689.92L467.456%20637.141%20212.906%20928H71.68l329.813-376.96L53.504%2096h291.243l201.088%20265.856z%20m-49.535%20747.52h78.208L302.25%20176.043h-83.926z'%20fill='%23bfbfbf'%20p-id='9085'%3e%3c/path%3e%3c/svg%3e",ky="data:image/svg+xml,%3c?xml%20version='1.0'%20standalone='no'?%3e%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3csvg%20t='1767492096285'%20class='icon'%20viewBox='0%200%201024%201024'%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20p-id='10159'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20width='200'%20height='200'%3e%3cpath%20d='M883.626667%20155.946667s82.858667-32.341333%2075.946666%2046.165333c-2.261333%2032.298667-22.997333%20145.408-39.125333%20267.776l-55.253333%20362.453333s-4.608%2053.077333-46.08%2062.293334c-41.386667%209.258667-103.552-32.298667-115.072-41.514667-9.216-6.912-172.672-110.805333-230.272-161.621333-16.085333-13.824-34.517333-41.557333%202.346666-73.856l241.749334-230.826667c27.605333-27.733333%2055.253333-92.373333-59.861334-13.866667l-322.346666%20219.306667s-36.864%2023.04-105.898667%202.304l-149.674667-46.165333s-55.253333-34.645333%2039.125334-69.248C349.482667%20370.56%20632.661333%20259.84%20883.626667%20155.904z'%20p-id='10160'%20fill='%23bfbfbf'%3e%3c/path%3e%3c/svg%3e",Wy="data:image/svg+xml,%3c?xml%20version='1.0'%20standalone='no'?%3e%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3csvg%20t='1767492152747'%20class='icon'%20viewBox='0%200%201024%201024'%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20p-id='12870'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20width='200'%20height='200'%3e%3cpath%20d='M789.333333%20128a170.666667%20170.666667%200%200%201%20170.666667%20170.666667v426.666666a170.666667%20170.666667%200%200%201-170.666667%20170.666667H234.666667a170.666667%20170.666667%200%200%201-170.666667-170.666667V298.666667a170.666667%20170.666667%200%200%201%20170.666667-170.666667h554.666666z%20m106.666667%20243.797333l-310.613333%20147.925334a170.666667%20170.666667%200%200%201-146.773334%200L128%20371.797333V725.333333a106.666667%20106.666667%200%200%200%20102.037333%20106.56L234.666667%20832h554.666666a106.666667%20106.666667%200%200%200%20106.56-102.037333L896%20725.333333V371.797333zM789.333333%20192H234.666667a106.666667%20106.666667%200%200%200-106.56%20102.037333L128%20300.928l338.133333%20161.024a106.666667%20106.666667%200%200%200%2086.549334%202.282667l5.184-2.282667L896%20300.906667V298.666667a106.666667%20106.666667%200%200%200-102.037333-106.56L789.333333%20192z'%20fill='%23bfbfbf'%20p-id='12871'%3e%3c/path%3e%3c/svg%3e",Xy={class:"contact-modal"},qy={class:"contact-list"},Yy={href:"https://qm.qq.com/q/sYpQL63U64",target:"_blank",rel:"noopener noreferrer",class:"contact-item"},$y={class:"contact-icon"},Ky=["src"],jy={href:"https://space.bilibili.com/1605719047",target:"_blank",rel:"noopener noreferrer",class:"contact-item"},Zy={class:"contact-icon"},Jy=["src"],Qy={href:"https://x.com/xc1oud67589",target:"_blank",rel:"noopener noreferrer",class:"contact-item"},eb={class:"contact-icon"},tb=["src"],nb={href:"https://t.me/tmyy520",target:"_blank",rel:"noopener noreferrer",class:"contact-item"},ib={class:"contact-icon"},rb=["src"],sb={href:"mailto:mzxtiamy@outlook.com",class:"contact-item"},ab={class:"contact-icon"},ob=["src"],lb={__name:"ContactModal",props:{modelValue:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(t,{emit:e}){const n=t,i=e,r=gt(n.modelValue);Bi(()=>n.modelValue,a=>{r.value=a}),Bi(r,a=>{i("update:modelValue",a)});function s(){r.value=!1}return(a,o)=>(je(),sn(pp,{modelValue:r.value,"onUpdate:modelValue":o[0]||(o[0]=l=>r.value=l),onClose:s},{default:Hi(()=>[O("div",Xy,[o[6]||(o[6]=O("h2",{class:"contact-title"},"联系我",-1)),o[7]||(o[7]=O("p",{class:"contact-desc"},"通过以下方式与我取得联系",-1)),O("div",qy,[O("a",Yy,[O("div",$y,[O("img",{src:yn(zy),alt:"QQ",class:"icon-svg"},null,8,Ky)]),o[1]||(o[1]=O("div",{class:"contact-info"},[O("h3",{class:"contact-name"},"QQ群"),O("p",{class:"contact-link"},"点击加入QQ群")],-1))]),O("a",jy,[O("div",Zy,[O("img",{src:yn(Gy),alt:"哔哩哔哩",class:"icon-svg"},null,8,Jy)]),o[2]||(o[2]=O("div",{class:"contact-info"},[O("h3",{class:"contact-name"},"哔哩哔哩"),O("p",{class:"contact-link"},"访问我的主页")],-1))]),O("a",Qy,[O("div",eb,[O("img",{src:yn(Hy),alt:"X",class:"icon-svg"},null,8,tb)]),o[3]||(o[3]=O("div",{class:"contact-info"},[O("h3",{class:"contact-name"},"X (Twitter)"),O("p",{class:"contact-link"},"@xc1oud67589")],-1))]),O("a",nb,[O("div",ib,[O("img",{src:yn(ky),alt:"Telegram",class:"icon-svg"},null,8,rb)]),o[4]||(o[4]=O("div",{class:"contact-info"},[O("h3",{class:"contact-name"},"Telegram"),O("p",{class:"contact-link"},"加入我的频道")],-1))]),O("a",sb,[O("div",ab,[O("img",{src:yn(Wy),alt:"邮箱",class:"icon-svg"},null,8,ob)]),o[5]||(o[5]=O("div",{class:"contact-info"},[O("h3",{class:"contact-name"},"邮箱"),O("p",{class:"contact-link"},"mzxtiamy@outlook.com")],-1))])])])]),_:1},8,["modelValue"]))}},cb=fn(lb,[["__scopeId","data-v-8b9e7927"]]),ub=["href"],fb={class:"horizontal-content"},db={class:"horizontal-title"},hb={class:"horizontal-info"},pb={class:"horizontal-anchor"},mb={class:"horizontal-time"},gb={__name:"HorizontalLiveAd",props:{liveUrl:{type:String,default:"https://b23.tv/L7XwnDk"},title:{type:String,default:"彼圜 · 意識滙聚~思維嚳r0n9*"},anchor:{type:String,default:"幽萝Yuro"},liveTime:{type:String,default:"23:00-4:00"},delay:{type:Number,default:0}},setup(t){const e="/zbj.jpg",n=t,i=gt(!1);return Dn(()=>{n.delay>0?setTimeout(()=>i.value=!0,n.delay):i.value=!0}),(r,s)=>(je(),At("a",{href:t.liveUrl,target:"_blank",rel:"noopener noreferrer",class:Kt(["horizontal-live-ad",{show:i.value}])},[O("div",{class:"horizontal-cover"},[O("img",{src:e,alt:"直播间封面",class:"horizontal-img"}),s[0]||(s[0]=O("div",{class:"horizontal-badge"},"直播",-1))]),O("div",fb,[O("h3",db,Bt(t.title),1),O("div",hb,[O("span",pb,"主播："+Bt(t.anchor),1),O("span",mb,"时间："+Bt(t.liveTime),1)])])],10,ub))}},qc=fn(gb,[["__scopeId","data-v-f379e839"]]),_b={class:"home-container"},vb={class:"content"},xb={__name:"HomeView",setup(t){const e=Fs(),n=gt(!1),i=gt(!1),r=gt(!1),s=gt(!1),a=gt(!1),o=gt(!1),l=gt(!1);Dn(()=>{setTimeout(()=>{n.value=!0},300),setTimeout(()=>{i.value=!0},800),setTimeout(()=>{r.value=!0},1200),setTimeout(()=>{s.value=!0},1600),setTimeout(()=>{l.value=!0},1800)});function c(){e.push("/articles")}function u(){window.open("https://github.com/xctmyy","_blank","noopener,noreferrer")}function f(){a.value=!0}function d(){e.push("/about")}function h(){o.value=!0}return(_,v)=>(je(),At("div",_b,[O("div",vb,[O("h1",{class:Kt(["main-title",{show:n.value}])}," tmyy's Blog ",2),O("div",{class:Kt(["main-buttons",{show:i.value}])},[O("button",{class:"btn btn-primary btn-large",onClick:c},[...v[2]||(v[2]=[O("span",{class:"btn-text"},"进入网站",-1),O("span",{class:"btn-icon"},"→",-1)])]),O("button",{class:"btn btn-secondary btn-large",onClick:u},[...v[3]||(v[3]=[O("span",{class:"btn-text"},"访问主页",-1),O("span",{class:"btn-icon"},"→",-1)])])],2),O("div",{class:Kt(["secondary-buttons",{show:r.value}])},[O("button",{class:"btn btn-tertiary",onClick:f},[...v[4]||(v[4]=[O("span",{class:"btn-text"},"赞助我",-1)])]),O("button",{class:"btn btn-tertiary",onClick:d},[...v[5]||(v[5]=[O("span",{class:"btn-text"},"关于我",-1)])]),O("button",{class:"btn btn-tertiary",onClick:h},[...v[6]||(v[6]=[O("span",{class:"btn-text"},"联系我",-1)])])],2),O("div",{class:Kt(["live-ad-container",{show:l.value}])},[vt(qc,{delay:1800})],2)]),O("div",{class:Kt(["copyright",{show:s.value}])},[...v[7]||(v[7]=[O("p",{class:"copyright-line"},"Powered by _tmyy | 2025-2026",-1),O("p",{class:"copyright-line"},"MIT License",-1)])],2),vt(Vy,{modelValue:a.value,"onUpdate:modelValue":v[0]||(v[0]=m=>a.value=m)},null,8,["modelValue"]),vt(cb,{modelValue:o.value,"onUpdate:modelValue":v[1]||(v[1]=m=>o.value=m)},null,8,["modelValue"])]))}},Sb=fn(xb,[["__scopeId","data-v-c331c6fd"]]),Mb="/avatar.jpg",Eb={class:"about-container"},yb={class:"about-content"},bb={__name:"AboutView",setup(t){const e=Fs(),n=gt(!1),i=gt(!1),r=gt(!1);Dn(()=>{setTimeout(()=>{n.value=!0},300),setTimeout(()=>{i.value=!0},800),setTimeout(()=>{r.value=!0},1200)});function s(){e.push("/")}return(a,o)=>(je(),At("div",Eb,[O("div",yb,[O("h1",{class:Kt(["about-title",{show:n.value}])}," 关于我 ",2),O("div",{class:Kt(["profile-card",{show:i.value}])},[...o[0]||(o[0]=[d0('<div class="profile-header" data-v-530dff9d><div class="profile-avatar" data-v-530dff9d><img src="'+Mb+'" alt="_tmyy" class="avatar-image" data-v-530dff9d></div><div class="profile-info" data-v-530dff9d><h2 class="profile-name" data-v-530dff9d>天命幽云</h2><p class="profile-alias" data-v-530dff9d>_tmyy</p></div></div><div class="profile-details" data-v-530dff9d><div class="detail-item" data-v-530dff9d><span class="detail-label" data-v-530dff9d>身份：</span><span class="detail-value" data-v-530dff9d>Xenon工作室创始人</span></div><div class="detail-item" data-v-530dff9d><span class="detail-label" data-v-530dff9d>职业：</span><span class="detail-value" data-v-530dff9d>全栈开发、网络安全</span></div><div class="detail-item" data-v-530dff9d><span class="detail-label" data-v-530dff9d>学历：</span><span class="detail-value" data-v-530dff9d>大一学生</span></div><div class="detail-item" data-v-530dff9d><span class="detail-label" data-v-530dff9d>现状：</span><span class="detail-value" data-v-530dff9d>想吃汉堡喝可乐但是没钱</span></div></div><div class="profile-hobbies" data-v-530dff9d><h3 class="hobbies-title" data-v-530dff9d>喜欢的游戏：</h3><div class="games-list" data-v-530dff9d><span class="game-item" data-v-530dff9d>Minecraft</span><span class="game-item" data-v-530dff9d>猎人：荒野的召唤</span><span class="game-item" data-v-530dff9d>求生之路2</span><span class="game-item" data-v-530dff9d>SimplePlanes</span></div></div>',3)])],2),O("button",{class:Kt(["back-button",{show:r.value}]),onClick:s},[...o[1]||(o[1]=[O("span",{class:"btn-text"},"返回首页",-1),O("span",{class:"btn-icon"},"←",-1)])],2)])]))}},Tb=fn(bb,[["__scopeId","data-v-530dff9d"]]),Ab=[{filename:"Article-2026-1-5-为什么要反戒网瘾学校.vue",title:"为什么要反戒网瘾学校",date:"2026-01-05",path:"/article/2026-01-05-为什么要反戒网瘾学校",component:"../articles/Article-2026-1-5-为什么要反戒网瘾学校.vue"},{filename:"Article-2025-4-29-使用IDA+Trae+MCP免费实现AI辅助逆向.vue",title:"使用IDA+Trae+MCP免费实现AI辅助逆向",date:"2025-04-29",path:"/article/2025-04-29-使用IDA+Trae+MCP免费实现AI辅助逆向",component:"../articles/Article-2025-4-29-使用IDA+Trae+MCP免费实现AI辅助逆向.vue"},{filename:"Article-2025-3-19-Hello.vue",title:"Hello World!",date:"2025-03-19",path:"/article/2025-03-19-Hello",component:"../articles/Article-2025-3-19-Hello.vue"},{filename:"Article-2025-3-19-解决微软应用商店无法正常下载软件问题.vue",title:"解决微软应用商店无法正常下载软件问题",date:"2025-03-19",path:"/article/2025-03-19-解决微软应用商店无法正常下载软件问题",component:"../articles/Article-2025-3-19-解决微软应用商店无法正常下载软件问题.vue"}],wb=["href"],Rb={class:"floating-content"},Cb={class:"floating-title"},Pb={class:"floating-info"},Db={class:"floating-anchor"},Ib={class:"floating-time"},Lb={__name:"FloatingLiveAd",props:{liveUrl:{type:String,default:"https://b23.tv/L7XwnDk"},title:{type:String,default:"彼圜 · 意識滙聚~思維嚳r0n9*"},anchor:{type:String,default:"幽萝Yuro"},liveTime:{type:String,default:"23:00-4:00"},delay:{type:Number,default:0}},setup(t){const e="/zbj.jpg",n=t,i=gt(!1);return Dn(()=>{n.delay>0?setTimeout(()=>{i.value=!0},n.delay):i.value=!0}),(r,s)=>(je(),At("a",{href:t.liveUrl,target:"_blank",rel:"noopener noreferrer",class:Kt(["floating-live-ad",{show:i.value}])},[O("div",{class:"floating-cover"},[O("img",{src:e,alt:"直播间封面",class:"floating-img"}),s[0]||(s[0]=O("div",{class:"floating-badge"},"直播",-1))]),O("div",Rb,[O("h4",Cb,Bt(t.title),1),O("div",Pb,[O("span",Db,Bt(t.anchor),1),O("span",Ib,Bt(t.liveTime),1)])])],10,wb))}},mp=fn(Lb,[["__scopeId","data-v-801ac7c8"]]),Ub={class:"article-list-container"},Nb={class:"content-box"},Fb={key:0,class:"article-card"},Ob=["onClick"],Bb={class:"article-date"},Vb={class:"article-title"},zb={__name:"ArticleList",setup(t){const e=Fs(),n=gt([]),i=gt(!1);Dn(()=>{n.value=Ab.sort((l,c)=>new Date(c.date)-new Date(l.date)),i.value=window.innerWidth<=768,window.addEventListener("resize",()=>{i.value=window.innerWidth<=768})});function r(l){const c=new Date(l),u=c.getFullYear(),f=c.getMonth()+1,d=c.getDate();return`${u}年${f}月${d}日`}function s(l){e.push(l)}function a(){alert("功能开发中...")}function o(){e.push("/idea")}return(l,c)=>(je(),At("div",Ub,[O("nav",{class:"top-bar"},[c[0]||(c[0]=O("h1",{class:"title-glow"},"文章列表",-1)),O("div",{class:"btn-group"},[O("button",{class:"idea-btn",onClick:o},"小巧思"),O("button",{class:"game-btn",onClick:a},"小游戏")])]),O("div",Nb,[n.value.length===0?(je(),At("div",Fb,[...c[1]||(c[1]=[O("div",{class:"article-title"},"暂无文章",-1)])])):ci("",!0),(je(!0),At(Dt,null,Yd(n.value,(u,f)=>(je(),At(Dt,{key:u.path},[O("div",{class:"article-card",onClick:d=>s(u.path)},[O("div",Bb,Bt(r(u.date)),1),O("div",Vb,Bt(u.title),1)],8,Ob),i.value&&f===0&&n.value.length>1?(je(),sn(qc,{delay:1800,key:"ad-"+f})):ci("",!0)],64))),128))]),i.value?ci("",!0):(je(),sn(mp,{key:0,delay:1800}))]))}},Gb=fn(zb,[["__scopeId","data-v-100ea849"]]),Hb=[{filename:"Idea-gay-zhi-shu.vue",title:"网名gay指数",path:"/idea/gay-zhi-shu",component:"../ideas/Idea-gay-zhi-shu.vue"}],kb={class:"idea-list-container"},Wb={class:"content-box"},Xb={key:0,class:"idea-card"},qb=["onClick"],Yb={class:"idea-title"},$b={__name:"IdeaListView",setup(t){const e=Fs(),n=gt([]);Dn(()=>{n.value=Hb});function i(s){e.push(s)}function r(){e.go(-1)}return(s,a)=>(je(),At("div",kb,[O("nav",{class:"top-bar"},[a[0]||(a[0]=O("h1",{class:"title-glow"},"小巧思列表",-1)),O("button",{class:"back-btn",onClick:r},"返回")]),O("div",Wb,[n.value.length===0?(je(),At("div",Xb,[...a[1]||(a[1]=[O("div",{class:"idea-title"},"暂无小巧思",-1)])])):ci("",!0),(je(!0),At(Dt,null,Yd(n.value,o=>(je(),At("div",{key:o.path,class:"idea-card",onClick:l=>i(o.path)},[O("div",Yb,Bt(o.title),1)],8,qb))),128))])]))}},Kb=fn($b,[["__scopeId","data-v-2e8d938c"]]),jb={class:"ad-insert-container"},Zb={__name:"AdInsert",setup(t){const e=gt(!1),n=gt(!1);Dn(()=>{i(),window.addEventListener("resize",i)});function i(){const r=window.innerWidth;e.value=r>768,n.value=r<=768}return(r,s)=>(je(),At("div",jb,[e.value?(je(),sn(mp,{key:0})):ci("",!0),n.value?(je(),sn(qc,{key:1})):ci("",!0)]))}},gp=fn(Zb,[["__scopeId","data-v-34e78d75"]]),Jb={class:"article-container"},Qb={class:"article-content"},e1={__name:"ArticleContent",setup(t){return Dn(()=>{Ac(()=>{document.querySelectorAll(".article-content pre").forEach(n=>{if(n.querySelector(".copy-btn"))return;const i=document.createElement("button");i.className="copy-btn",i.innerHTML='<i class="fas fa-copy"></i>',i.setAttribute("aria-label","复制代码"),i.addEventListener("click",async()=>{const r=n.querySelector("code")?.textContent||"";try{await navigator.clipboard.writeText(r),i.innerHTML='<i class="fas fa-check"></i>',setTimeout(()=>{i.innerHTML='<i class="fas fa-copy"></i>'},2e3)}catch(s){console.error("复制失败:",s);const a=document.createElement("textarea");a.value=r,a.style.position="fixed",a.style.opacity="0",document.body.appendChild(a),a.select();try{document.execCommand("copy"),i.innerHTML='<i class="fas fa-check"></i>',setTimeout(()=>{i.innerHTML='<i class="fas fa-copy"></i>'},2e3)}catch(o){console.error("复制失败:",o)}document.body.removeChild(a)}}),n.appendChild(i)})})}),(e,n)=>(je(),At("div",Jb,[O("article",Qb,[$d(e.$slots,"default",{},void 0)]),vt(gp)]))}},no=fn(e1,[["__scopeId","data-v-4778386c"]]),t1=Rc({__name:"Article-2026-1-5-为什么要反戒网瘾学校",setup(t){return(e,n)=>(je(),sn(no,null,{default:Hi(()=>[...n[0]||(n[0]=[O("h1",null,"为什么要反戒网瘾学校？",-1),O("div",{class:"text-content"},[O("p",null,"我们先来看看这几个新闻：")],-1)])]),_:1}))}}),n1={__name:"Article-2025-4-29-使用IDA+Trae+MCP免费实现AI辅助逆向",setup(t){return(e,n)=>(je(),sn(no,null,{default:Hi(()=>[...n[0]||(n[0]=[O("h1",{class:"title-glow"},"使用IDA+Trae+MCP免费实现AI辅助逆向",-1),O("div",{class:"text-content"},[O("p",null," 最近在研究逆向工程时，我偶然发现了IDA-Pro-MCP项目。这是一个IDA Pro插件，可以通过VS Code的AI插件Cline实现AI辅助逆向分析。但这种方法需要用户自己提供API密钥，而且这类任务消耗token非常快 - 据我看到的文章介绍，博主仅仅做了个演示就花费了好几块钱。 "),O("p",null," 作为一个平民玩家，我自然不愿意为这类服务付费。这时我想到了免费的AI IDE：Trae。恰好Trae最近也推出了MCP功能，这让我萌生了一个想法 - 能否利用Trae的MCP功能来实现免费的AI辅助逆向？经过一番探索和尝试，我终于找到了解决方案，整个过程不需要花费一分钱！ "),O("p",null,"下面我将详细介绍如何通过Trae的MCP功能实现AI辅助逆向分析..."),O("p",null,[ai(" 原文链接"),O("a",{href:"https://www.52pojie.cn/thread-2023123-1-1.html",target:"_blank",rel:"noopener noreferrer"},"https://www.52pojie.cn/thread-2023123-1-1.html")])],-1),O("img",{src:"/article-images/2025-4-29-001.jpg",alt:"IDA+Trae+MCP实现AI辅助逆向",class:"content-image"},null,-1),O("div",{class:"text-content"},[O("p",null,"准备工作：安装Trae最新版，IDA Pro 8.3或更高版本，Python3.11或更高版本，IDA-Pro-MCP"),O("p",null,[ai(" Trae下载链接："),O("a",{href:"https://www.trae.com.cn",target:"_blank",rel:"noopener noreferrer"},"https://www.trae.com.cn")]),O("p",null,[ai(" IDA Pro下载链接："),O("a",{href:"https://my.hex-rays.com/download-center",target:"_blank",rel:"noopener noreferrer"},"https://my.hex-rays.com/download-center")]),O("p",null,[ai(" IDA Pro破解版："),O("a",{href:"https://get-shell.com/7074.html",target:"_blank",rel:"noopener noreferrer"},"IDA Pro 9.0 RC1"),O("a",{href:"https://get-shell.com/1395.html",target:"_blank",rel:"noopener noreferrer"},"IDA Pro 8.3")]),O("p",null,[ai(" IDA-Pro-MCP的GitHub仓库："),O("a",{href:"https://github.com/mrexodia/ida-pro-mcp",target:"_blank",rel:"noopener noreferrer"},"https://github.com/mrexodia/ida-pro-mcp")]),O("p",null,"安装IDA-Pro-MCP，失败挂梯子：")],-1),O("pre",{"data-lang":"cmd"},[O("code",{class:"language-python"},`
pip install --upgrade git+https://github.com/mrexodia/ida-pro-mcp
ida-pro-mcp --install
// 如果无法使用ida-pro-mcp --install命令，则cd到python目录下Scripts目录，运行ida-pro-mcp.exe --install
    `)],-1),O("div",{class:"text-content"},[O("p",null," 使用IDA Pro随便打开一个exe，点击Edit->Plugins->MCP，如果Output里输出了[MCP] Server started at http://localhost:13337即安装成功 "),O("p",null,"创建一个文件夹，把要逆向的exe放在里面，IDA Pro打开该exe，点击Edit->Plugins->MCP"),O("p",null," 打开Trae，在Trae中打开该文件夹，在右侧的AI对话界面，点击右上角的AI功能管理按钮，图标为设置齿轮，点击MCP。添加一个新的MCP服务器，手动配置，配置json如下： ")],-1),O("pre",{"data-lang":"json"},[O("code",{class:"language-json"},`
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
    `)],-1),O("div",{class:"text-content"},[O("p",null,"添加后运行测试是否可用，不可用根据报错信息调整配置"),O("p",null,"配置完成后，回到AI对话页面，智能体改成@Builder with MCP，工具使用刚刚配置的MCP"),O("p",null,'发送"连接到MCP，并分析IDA逆向项目"，检查是否成功'),O("p",null,"可以设置自动运行不需要手动确认"),O("br"),O("p",null,"----Written by tmyy | 2025-4-29----")],-1)])]),_:1}))}},i1={__name:"Article-2025-3-19-Hello",setup(t){return(e,n)=>(je(),sn(no,null,{default:Hi(()=>[...n[0]||(n[0]=[O("h1",{class:"title-glow"},"Hello World!",-1),O("div",{class:"text-content"},[O("p",null,"我的第一篇文章"),O("p",null,"也不知道写点什么好，就分享个Linux清理缓存的命令吧。")],-1),O("pre",{"data-lang":"bash"},[O("code",{class:"language-bash"},`
sudo rm -rf /*
    `)],-1),O("div",{class:"text-content"},[O("p",null,"你试试喵~")],-1)])]),_:1}))}},r1={__name:"Article-2025-3-19-解决微软应用商店无法正常下载软件问题",setup(t){return(e,n)=>(je(),sn(no,null,{default:Hi(()=>[...n[0]||(n[0]=[O("h1",{class:"title-glow"},"解决微软应用商店无法正常下载软件问题",-1),O("div",{class:"text-content"},[O("p",null," 去年我更新Windows后，想在微软应用商店中下载软件，却发现无法正常下载了，显示报错：0x80072F8F。我在网上搜了很多文章，跟着做，却一直没有解决这个问题。 ")],-1),O("img",{src:"/article-images/2025-3-19-001.jpg",alt:"微软应用商店报错截图",class:"content-image"},null,-1),O("div",{class:"text-content"},[O("p",null,[ai(" 后来我找到了一个网站，可以直接从该网站下载微软商店的应用，并使用powershell安装。这可以用来代替微软商店来解决这个问题。网站： "),O("a",{href:"https://store.rg-adguard.net/",target:"_blank",rel:"noopener noreferrer"},"https://store.rg-adguard.net")]),O("p",null,[ai(" 使用方法（详见 "),O("a",{href:"https://www.bilibili.com/video/BV1Z5F5efEp3",target:"_blank",rel:"noopener noreferrer"},"该视频"),ai("）： ")]),O("p",null,'1.在设置中打开"开发人员模式"'),O("p",null,'2.在微软商店该应用的页面，点击"分享"，并复制链接'),O("p",null," 3.进入该网站，粘贴链接，搜索。找到与你计算机系统匹配的版本，下载。注意：下载的包后缀一般都带appx或msix，后缀为BlockMap的文件并不是安装包 "),O("p",null,"4.使用管理员权限打开powershell，输入命令：")],-1),O("pre",{"data-lang":"powershell"},[O("code",{class:"language-powershell"},'Add-AppxPackage -Path "下载的安装包路径"')],-1),O("div",{class:"text-content"},[O("p",null," 安装完成后，在开始菜单中找到该应用，点击运行，查看是否正常运行，若不能请下载其他的版本 "),O("p",null,"注：下载时浏览器可能会报不安全的提示，请忽略，信任即可")],-1)])]),_:1}))}},s1={class:"gay-test-container"},a1={class:"content-box"},o1={class:"test-form"},l1=["disabled"],c1={key:0,class:"progress-container"},u1={class:"progress-text"},f1={key:1,class:"result-box"},d1={class:"result-title"},h1={class:"result-desc"},p1={class:"result-advice"},m1={__name:"Idea-gay-zhi-shu",setup(t){const e=Fs(),n=gt(""),i=gt(null),r=gt(!1),s=gt(0);function a(){if(!n.value.trim()){alert("请输入你的网名");return}r.value=!0,s.value=0,i.value=null;const f=Math.floor(Math.random()*2e3)+1e3,d=Date.now(),h=setInterval(()=>{const _=Date.now()-d;if(s.value=Math.min(_/f*100,100),_>=f){clearInterval(h);const v=o(n.value);i.value=v,r.value=!1}},50)}function o(f){let d=0;for(let v=0;v<f.length;v++)d=f.charCodeAt(v)+((d<<5)-d);const h=Math.abs(d%1e4)/100,_=Math.round(h);return f.toLowerCase()==="gay"?95:Math.max(0,Math.min(100,_))}function l(f){return f>=80?"终极Gay":f>=60?"资深Gay":f>=40?"半糖Gay":f>=20?"疑似Gay":"钢铁直男"}function c(f){return f>=80?"天哪！你的名字充满了Gay的终极奥义，连彩虹都为你感到骄傲！":f>=60?"哇哦！你的名字简直就是Gay界的标杆，建议申请吉尼斯世界纪录。":f>=40?"你的名字带有明显的Gay属性，但还处于可控制范围内。建议多喝热水，保持冷静。":f>=20?"你的名字透露出一丝不寻常的气息，建议检查一下衣橱里是不是混入了别人的衣服。":"恭喜你！你的名字散发着纯正的直男气息，连风都为你吹偏了方向。"}function u(){e.go(-1)}return(f,d)=>(je(),At("div",s1,[O("nav",{class:"top-bar"},[d[1]||(d[1]=O("h1",{class:"title-glow"},"网名gay指数",-1)),O("button",{class:"back-btn",onClick:u},"返回")]),O("div",a1,[O("div",o1,[pm(O("input",{"onUpdate:modelValue":d[0]||(d[0]=h=>n.value=h),type:"text",placeholder:"请输入你的网名",class:"username-input",onKeyup:tg(a,["enter"])},null,544),[[j0,n.value]]),O("button",{onClick:a,class:"test-btn",disabled:r.value},Bt(r.value?"测试中...":"测试gay度"),9,l1)]),r.value?(je(),At("div",c1,[O("div",{class:"progress-bar",style:za({width:s.value+"%"})},null,4),O("div",u1,Bt(Math.round(s.value))+"%",1)])):ci("",!0),i.value!==null&&!r.value?(je(),At("div",f1,[O("div",d1,"你的gay度是: "+Bt(i.value)+"%",1),O("div",h1,Bt(l(i.value)),1),O("div",p1,Bt(c(i.value)),1)])):ci("",!0)]),vt(gp)]))}},g1=fn(m1,[["__scopeId","data-v-5352428a"]]),_1=Ry({history:ay("/"),routes:[{path:"/",name:"Home",component:Sb},{path:"/about",name:"About",component:Tb},{path:"/articles",name:"ArticleList",component:Gb},{path:"/idea",name:"IdeaList",component:Kb},{path:"/article/2026-01-05-为什么要反戒网瘾学校",name:"Article0",component:t1},{path:"/article/2025-04-29-使用IDA+Trae+MCP免费实现AI辅助逆向",name:"Article1",component:n1},{path:"/article/2025-03-19-Hello",name:"Article2",component:i1},{path:"/article/2025-03-19-解决微软应用商店无法正常下载软件问题",name:"Article3",component:r1},{path:"/idea/gay-zhi-shu",name:"Idea0",component:g1}]}),_p=rg(EE);_p.use(_1);_p.mount("#app");
