(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const n of a)if(n.type==="childList")for(const l of n.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function t(a){const n={};return a.integrity&&(n.integrity=a.integrity),a.referrerPolicy&&(n.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?n.credentials="include":a.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(a){if(a.ep)return;a.ep=!0;const n=t(a);fetch(a.href,n)}})();(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))t(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const n of a.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&t(n)}).observe(document,{childList:!0,subtree:!0});function e(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function t(i){if(i.ep)return;i.ep=!0;const a=e(i);fetch(i.href,a)}})();/**
* @license
* Copyright 2010-2023 Three.js Authors
* SPDX-License-Identifier: MIT
*/const xn="160",Yo=0,Bn=1,Ko=2,lo=1,Zo=2,ui=3,Ri=0,Nt=1,at=2,bi=0,dr=1,ln=2,Gn=3,Hn=4,Jo=5,Bi=100,$o=101,Qo=102,Vn=103,kn=104,el=200,tl=201,il=202,rl=203,cn=204,un=205,al=206,nl=207,sl=208,ol=209,ll=210,cl=211,ul=212,hl=213,dl=214,pl=0,fl=1,ml=2,ca=3,gl=4,_l=5,vl=6,xl=7,Mn=0,Ml=1,Sl=2,wi=0,El=1,yl=2,Tl=3,bl=4,wl=5,Al=6,co=300,fr=301,mr=302,hn=303,dn=304,ga=306,pn=1e3,Qt=1001,fn=1002,Dt=1003,Wn=1004,Ra=1005,jt=1006,Rl=1007,Lr=1008,Ai=1009,Cl=1010,Ll=1011,Sn=1012,uo=1013,Ei=1014,yi=1015,Pr=1016,ho=1017,po=1018,Vi=1020,Pl=1021,ei=1023,Dl=1024,Ul=1025,ki=1026,gr=1027,Il=1028,fo=1029,Nl=1030,mo=1031,go=1033,Ca=33776,La=33777,Pa=33778,Da=33779,Xn=35840,jn=35841,qn=35842,Yn=35843,_o=36196,Kn=37492,Zn=37496,Jn=37808,$n=37809,Qn=37810,es=37811,ts=37812,is=37813,rs=37814,as=37815,ns=37816,ss=37817,os=37818,ls=37819,cs=37820,us=37821,Ua=36492,hs=36494,ds=36495,Ol=36283,ps=36284,fs=36285,ms=36286,vo=3e3,Wi=3001,Fl=3200,zl=3201,En=0,Bl=1,qt="",Mt="srgb",pi="srgb-linear",yn="display-p3",_a="display-p3-linear",ua="linear",et="srgb",ha="rec709",da="p3",Yi=7680,gs=519,Gl=512,Hl=513,Vl=514,xo=515,kl=516,Wl=517,Xl=518,jl=519,_s=35044,vs="300 es",mn=1035,di=2e3,pa=2001;class vr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const a=i.indexOf(t);a!==-1&&i.splice(a,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const t=this._listeners[e.type];if(t!==void 0){e.target=this;const i=t.slice(0);for(let a=0,n=i.length;a<n;a++)i[a].call(this,e);e.target=null}}}const yt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ia=Math.PI/180,gn=180/Math.PI;function Dr(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(yt[r&255]+yt[r>>8&255]+yt[r>>16&255]+yt[r>>24&255]+"-"+yt[e&255]+yt[e>>8&255]+"-"+yt[e>>16&15|64]+yt[e>>24&255]+"-"+yt[t&63|128]+yt[t>>8&255]+"-"+yt[t>>16&255]+yt[t>>24&255]+yt[i&255]+yt[i>>8&255]+yt[i>>16&255]+yt[i>>24&255]).toLowerCase()}function It(r,e,t){return Math.max(e,Math.min(t,r))}function ql(r,e){return(r%e+e)%e}function Na(r,e,t){return(1-t)*r+t*e}function xs(r){return(r&r-1)===0&&r!==0}function _n(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function Er(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Ut(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}class Ae{constructor(e=0,t=0){Ae.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,a=e.elements;return this.x=a[0]*t+a[3]*i+a[6],this.y=a[1]*t+a[4]*i+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(It(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),a=Math.sin(t),n=this.x-e.x,l=this.y-e.y;return this.x=n*i-l*a+e.x,this.y=n*a+l*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ve{constructor(e,t,i,a,n,l,s,o,c){Ve.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,a,n,l,s,o,c)}set(e,t,i,a,n,l,s,o,c){const u=this.elements;return u[0]=e,u[1]=a,u[2]=s,u[3]=t,u[4]=n,u[5]=o,u[6]=i,u[7]=l,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,a=t.elements,n=this.elements,l=i[0],s=i[3],o=i[6],c=i[1],u=i[4],h=i[7],p=i[2],f=i[5],g=i[8],_=a[0],m=a[3],d=a[6],y=a[1],x=a[4],b=a[7],P=a[2],w=a[5],A=a[8];return n[0]=l*_+s*y+o*P,n[3]=l*m+s*x+o*w,n[6]=l*d+s*b+o*A,n[1]=c*_+u*y+h*P,n[4]=c*m+u*x+h*w,n[7]=c*d+u*b+h*A,n[2]=p*_+f*y+g*P,n[5]=p*m+f*x+g*w,n[8]=p*d+f*b+g*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],a=e[2],n=e[3],l=e[4],s=e[5],o=e[6],c=e[7],u=e[8];return t*l*u-t*s*c-i*n*u+i*s*o+a*n*c-a*l*o}invert(){const e=this.elements,t=e[0],i=e[1],a=e[2],n=e[3],l=e[4],s=e[5],o=e[6],c=e[7],u=e[8],h=u*l-s*c,p=s*o-u*n,f=c*n-l*o,g=t*h+i*p+a*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=h*_,e[1]=(a*c-u*i)*_,e[2]=(s*i-a*l)*_,e[3]=p*_,e[4]=(u*t-a*o)*_,e[5]=(a*n-s*t)*_,e[6]=f*_,e[7]=(i*o-c*t)*_,e[8]=(l*t-i*n)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,a,n,l,s){const o=Math.cos(n),c=Math.sin(n);return this.set(i*o,i*c,-i*(o*l+c*s)+l+e,-a*c,a*o,-a*(-c*l+o*s)+s+t,0,0,1),this}scale(e,t){return this.premultiply(Oa.makeScale(e,t)),this}rotate(e){return this.premultiply(Oa.makeRotation(-e)),this}translate(e,t){return this.premultiply(Oa.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let a=0;a<9;a++)if(t[a]!==i[a])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Oa=new Ve;function Mo(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function fa(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Yl(){const r=fa("canvas");return r.style.display="block",r}const Ms={};function Cr(r){r in Ms||(Ms[r]=!0,console.warn(r))}const Ss=new Ve().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Es=new Ve().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),zr={[pi]:{transfer:ua,primaries:ha,toReference:r=>r,fromReference:r=>r},[Mt]:{transfer:et,primaries:ha,toReference:r=>r.convertSRGBToLinear(),fromReference:r=>r.convertLinearToSRGB()},[_a]:{transfer:ua,primaries:da,toReference:r=>r.applyMatrix3(Es),fromReference:r=>r.applyMatrix3(Ss)},[yn]:{transfer:et,primaries:da,toReference:r=>r.convertSRGBToLinear().applyMatrix3(Es),fromReference:r=>r.applyMatrix3(Ss).convertLinearToSRGB()}},Kl=new Set([pi,_a]),Ke={enabled:!0,_workingColorSpace:pi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(r){if(!Kl.has(r))throw new Error(`Unsupported working color space, "${r}".`);this._workingColorSpace=r},convert:function(r,e,t){if(this.enabled===!1||e===t||!e||!t)return r;const i=zr[e].toReference,a=zr[t].fromReference;return a(i(r))},fromWorkingColorSpace:function(r,e){return this.convert(r,this._workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this._workingColorSpace)},getPrimaries:function(r){return zr[r].primaries},getTransfer:function(r){return r===qt?ua:zr[r].transfer}};function pr(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Fa(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Ki;class So{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ki===void 0&&(Ki=fa("canvas")),Ki.width=e.width,Ki.height=e.height;const i=Ki.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Ki}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=fa("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const a=i.getImageData(0,0,e.width,e.height),n=a.data;for(let l=0;l<n.length;l++)n[l]=pr(n[l]/255)*255;return i.putImageData(a,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(pr(t[i]/255)*255):t[i]=pr(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Zl=0;class Eo{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Zl++}),this.uuid=Dr(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},a=this.data;if(a!==null){let n;if(Array.isArray(a)){n=[];for(let l=0,s=a.length;l<s;l++)a[l].isDataTexture?n.push(za(a[l].image)):n.push(za(a[l]))}else n=za(a);i.url=n}return t||(e.images[this.uuid]=i),i}}function za(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?So.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Jl=0;class Gt extends vr{constructor(e=Gt.DEFAULT_IMAGE,t=Gt.DEFAULT_MAPPING,i=Qt,a=Qt,n=jt,l=Lr,s=ei,o=Ai,c=Gt.DEFAULT_ANISOTROPY,u=qt){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Jl++}),this.uuid=Dr(),this.name="",this.source=new Eo(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=a,this.magFilter=n,this.minFilter=l,this.anisotropy=c,this.format=s,this.internalFormat=null,this.type=o,this.offset=new Ae(0,0),this.repeat=new Ae(1,1),this.center=new Ae(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ve,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(Cr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===Wi?Mt:qt),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==co)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case pn:e.x=e.x-Math.floor(e.x);break;case Qt:e.x=e.x<0?0:1;break;case fn:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case pn:e.y=e.y-Math.floor(e.y);break;case Qt:e.y=e.y<0?0:1;break;case fn:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Cr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Mt?Wi:vo}set encoding(e){Cr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Wi?Mt:qt}}Gt.DEFAULT_IMAGE=null;Gt.DEFAULT_MAPPING=co;Gt.DEFAULT_ANISOTROPY=1;class it{constructor(e=0,t=0,i=0,a=1){it.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,a){return this.x=e,this.y=t,this.z=i,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,a=this.z,n=this.w,l=e.elements;return this.x=l[0]*t+l[4]*i+l[8]*a+l[12]*n,this.y=l[1]*t+l[5]*i+l[9]*a+l[13]*n,this.z=l[2]*t+l[6]*i+l[10]*a+l[14]*n,this.w=l[3]*t+l[7]*i+l[11]*a+l[15]*n,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,a,n;const l=e.elements,s=l[0],o=l[4],c=l[8],u=l[1],h=l[5],p=l[9],f=l[2],g=l[6],_=l[10];if(Math.abs(o-u)<.01&&Math.abs(c-f)<.01&&Math.abs(p-g)<.01){if(Math.abs(o+u)<.1&&Math.abs(c+f)<.1&&Math.abs(p+g)<.1&&Math.abs(s+h+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const d=(s+1)/2,y=(h+1)/2,x=(_+1)/2,b=(o+u)/4,P=(c+f)/4,w=(p+g)/4;return d>y&&d>x?d<.01?(i=0,a=.707106781,n=.707106781):(i=Math.sqrt(d),a=b/i,n=P/i):y>x?y<.01?(i=.707106781,a=0,n=.707106781):(a=Math.sqrt(y),i=b/a,n=w/a):x<.01?(i=.707106781,a=.707106781,n=0):(n=Math.sqrt(x),i=P/n,a=w/n),this.set(i,a,n,t),this}let m=Math.sqrt((g-p)*(g-p)+(c-f)*(c-f)+(u-o)*(u-o));return Math.abs(m)<.001&&(m=1),this.x=(g-p)/m,this.y=(c-f)/m,this.z=(u-o)/m,this.w=Math.acos((s+h+_-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class $l extends vr{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new it(0,0,e,t),this.scissorTest=!1,this.viewport=new it(0,0,e,t);const a={width:e,height:t,depth:1};i.encoding!==void 0&&(Cr("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Wi?Mt:qt),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:jt,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new Gt(a,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Eo(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Xi extends $l{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class yo extends Gt{constructor(e=null,t=1,i=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:a},this.magFilter=Dt,this.minFilter=Dt,this.wrapR=Qt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ql extends Gt{constructor(e=null,t=1,i=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:a},this.magFilter=Dt,this.minFilter=Dt,this.wrapR=Qt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ur{constructor(e=0,t=0,i=0,a=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=a}static slerpFlat(e,t,i,a,n,l,s){let o=i[a+0],c=i[a+1],u=i[a+2],h=i[a+3];const p=n[l+0],f=n[l+1],g=n[l+2],_=n[l+3];if(s===0){e[t+0]=o,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(s===1){e[t+0]=p,e[t+1]=f,e[t+2]=g,e[t+3]=_;return}if(h!==_||o!==p||c!==f||u!==g){let m=1-s;const d=o*p+c*f+u*g+h*_,y=d>=0?1:-1,x=1-d*d;if(x>Number.EPSILON){const P=Math.sqrt(x),w=Math.atan2(P,d*y);m=Math.sin(m*w)/P,s=Math.sin(s*w)/P}const b=s*y;if(o=o*m+p*b,c=c*m+f*b,u=u*m+g*b,h=h*m+_*b,m===1-s){const P=1/Math.sqrt(o*o+c*c+u*u+h*h);o*=P,c*=P,u*=P,h*=P}}e[t]=o,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,a,n,l){const s=i[a],o=i[a+1],c=i[a+2],u=i[a+3],h=n[l],p=n[l+1],f=n[l+2],g=n[l+3];return e[t]=s*g+u*h+o*f-c*p,e[t+1]=o*g+u*p+c*h-s*f,e[t+2]=c*g+u*f+s*p-o*h,e[t+3]=u*g-s*h-o*p-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,a){return this._x=e,this._y=t,this._z=i,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,a=e._y,n=e._z,l=e._order,s=Math.cos,o=Math.sin,c=s(i/2),u=s(a/2),h=s(n/2),p=o(i/2),f=o(a/2),g=o(n/2);switch(l){case"XYZ":this._x=p*u*h+c*f*g,this._y=c*f*h-p*u*g,this._z=c*u*g+p*f*h,this._w=c*u*h-p*f*g;break;case"YXZ":this._x=p*u*h+c*f*g,this._y=c*f*h-p*u*g,this._z=c*u*g-p*f*h,this._w=c*u*h+p*f*g;break;case"ZXY":this._x=p*u*h-c*f*g,this._y=c*f*h+p*u*g,this._z=c*u*g+p*f*h,this._w=c*u*h-p*f*g;break;case"ZYX":this._x=p*u*h-c*f*g,this._y=c*f*h+p*u*g,this._z=c*u*g-p*f*h,this._w=c*u*h+p*f*g;break;case"YZX":this._x=p*u*h+c*f*g,this._y=c*f*h+p*u*g,this._z=c*u*g-p*f*h,this._w=c*u*h-p*f*g;break;case"XZY":this._x=p*u*h-c*f*g,this._y=c*f*h-p*u*g,this._z=c*u*g+p*f*h,this._w=c*u*h+p*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+l)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,a=Math.sin(i);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],a=t[4],n=t[8],l=t[1],s=t[5],o=t[9],c=t[2],u=t[6],h=t[10],p=i+s+h;if(p>0){const f=.5/Math.sqrt(p+1);this._w=.25/f,this._x=(u-o)*f,this._y=(n-c)*f,this._z=(l-a)*f}else if(i>s&&i>h){const f=2*Math.sqrt(1+i-s-h);this._w=(u-o)/f,this._x=.25*f,this._y=(a+l)/f,this._z=(n+c)/f}else if(s>h){const f=2*Math.sqrt(1+s-i-h);this._w=(n-c)/f,this._x=(a+l)/f,this._y=.25*f,this._z=(o+u)/f}else{const f=2*Math.sqrt(1+h-i-s);this._w=(l-a)/f,this._x=(n+c)/f,this._y=(o+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(It(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const a=Math.min(1,t/i);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,a=e._y,n=e._z,l=e._w,s=t._x,o=t._y,c=t._z,u=t._w;return this._x=i*u+l*s+a*c-n*o,this._y=a*u+l*o+n*s-i*c,this._z=n*u+l*c+i*o-a*s,this._w=l*u-i*s-a*o-n*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,a=this._y,n=this._z,l=this._w;let s=l*e._w+i*e._x+a*e._y+n*e._z;if(s<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,s=-s):this.copy(e),s>=1)return this._w=l,this._x=i,this._y=a,this._z=n,this;const o=1-s*s;if(o<=Number.EPSILON){const f=1-t;return this._w=f*l+t*this._w,this._x=f*i+t*this._x,this._y=f*a+t*this._y,this._z=f*n+t*this._z,this.normalize(),this}const c=Math.sqrt(o),u=Math.atan2(c,s),h=Math.sin((1-t)*u)/c,p=Math.sin(t*u)/c;return this._w=l*h+this._w*p,this._x=i*h+this._x*p,this._y=a*h+this._y*p,this._z=n*h+this._z*p,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),a=2*Math.PI*Math.random(),n=2*Math.PI*Math.random();return this.set(t*Math.cos(a),i*Math.sin(n),i*Math.cos(n),t*Math.sin(a))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class C{constructor(e=0,t=0,i=0){C.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ys.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ys.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,a=this.z,n=e.elements;return this.x=n[0]*t+n[3]*i+n[6]*a,this.y=n[1]*t+n[4]*i+n[7]*a,this.z=n[2]*t+n[5]*i+n[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,a=this.z,n=e.elements,l=1/(n[3]*t+n[7]*i+n[11]*a+n[15]);return this.x=(n[0]*t+n[4]*i+n[8]*a+n[12])*l,this.y=(n[1]*t+n[5]*i+n[9]*a+n[13])*l,this.z=(n[2]*t+n[6]*i+n[10]*a+n[14])*l,this}applyQuaternion(e){const t=this.x,i=this.y,a=this.z,n=e.x,l=e.y,s=e.z,o=e.w,c=2*(l*a-s*i),u=2*(s*t-n*a),h=2*(n*i-l*t);return this.x=t+o*c+l*h-s*u,this.y=i+o*u+s*c-n*h,this.z=a+o*h+n*u-l*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,a=this.z,n=e.elements;return this.x=n[0]*t+n[4]*i+n[8]*a,this.y=n[1]*t+n[5]*i+n[9]*a,this.z=n[2]*t+n[6]*i+n[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,a=e.y,n=e.z,l=t.x,s=t.y,o=t.z;return this.x=a*o-n*s,this.y=n*l-i*o,this.z=i*s-a*l,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Ba.copy(this).projectOnVector(e),this.sub(Ba)}reflect(e){return this.sub(Ba.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(It(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,a=this.z-e.z;return t*t+i*i+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const a=Math.sin(t)*e;return this.x=a*Math.sin(i),this.y=Math.cos(t)*e,this.z=a*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=a,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ba=new C,ys=new Ur;class ji{constructor(e=new C(1/0,1/0,1/0),t=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Kt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Kt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Kt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const n=i.getAttribute("position");if(t===!0&&n!==void 0&&e.isInstancedMesh!==!0)for(let l=0,s=n.count;l<s;l++)e.isMesh===!0?e.getVertexPosition(l,Kt):Kt.fromBufferAttribute(n,l),Kt.applyMatrix4(e.matrixWorld),this.expandByPoint(Kt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Br.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Br.copy(i.boundingBox)),Br.applyMatrix4(e.matrixWorld),this.union(Br)}const a=e.children;for(let n=0,l=a.length;n<l;n++)this.expandByObject(a[n],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Kt),Kt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(yr),Gr.subVectors(this.max,yr),Zi.subVectors(e.a,yr),Ji.subVectors(e.b,yr),$i.subVectors(e.c,yr),mi.subVectors(Ji,Zi),gi.subVectors($i,Ji),Di.subVectors(Zi,$i);let t=[0,-mi.z,mi.y,0,-gi.z,gi.y,0,-Di.z,Di.y,mi.z,0,-mi.x,gi.z,0,-gi.x,Di.z,0,-Di.x,-mi.y,mi.x,0,-gi.y,gi.x,0,-Di.y,Di.x,0];return!Ga(t,Zi,Ji,$i,Gr)||(t=[1,0,0,0,1,0,0,0,1],!Ga(t,Zi,Ji,$i,Gr))?!1:(Hr.crossVectors(mi,gi),t=[Hr.x,Hr.y,Hr.z],Ga(t,Zi,Ji,$i,Gr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Kt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Kt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ni[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ni[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ni[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ni[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ni[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ni[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ni[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ni[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ni),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ni=[new C,new C,new C,new C,new C,new C,new C,new C],Kt=new C,Br=new ji,Zi=new C,Ji=new C,$i=new C,mi=new C,gi=new C,Di=new C,yr=new C,Gr=new C,Hr=new C,Ui=new C;function Ga(r,e,t,i,a){for(let n=0,l=r.length-3;n<=l;n+=3){Ui.fromArray(r,n);const s=a.x*Math.abs(Ui.x)+a.y*Math.abs(Ui.y)+a.z*Math.abs(Ui.z),o=e.dot(Ui),c=t.dot(Ui),u=i.dot(Ui);if(Math.max(-Math.max(o,c,u),Math.min(o,c,u))>s)return!1}return!0}const ec=new ji,Tr=new C,Ha=new C;class Tn{constructor(e=new C,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):ec.setFromPoints(e).getCenter(i);let a=0;for(let n=0,l=e.length;n<l;n++)a=Math.max(a,i.distanceToSquared(e[n]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Tr.subVectors(e,this.center);const t=Tr.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),a=(i-this.radius)*.5;this.center.addScaledVector(Tr,a/i),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ha.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Tr.copy(e.center).add(Ha)),this.expandByPoint(Tr.copy(e.center).sub(Ha))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const si=new C,Va=new C,Vr=new C,_i=new C,ka=new C,kr=new C,Wa=new C;class tc{constructor(e=new C,t=new C(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,si)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=si.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(si.copy(this.origin).addScaledVector(this.direction,t),si.distanceToSquared(e))}distanceSqToSegment(e,t,i,a){Va.copy(e).add(t).multiplyScalar(.5),Vr.copy(t).sub(e).normalize(),_i.copy(this.origin).sub(Va);const n=e.distanceTo(t)*.5,l=-this.direction.dot(Vr),s=_i.dot(this.direction),o=-_i.dot(Vr),c=_i.lengthSq(),u=Math.abs(1-l*l);let h,p,f,g;if(u>0)if(h=l*o-s,p=l*s-o,g=n*u,h>=0)if(p>=-g)if(p<=g){const _=1/u;h*=_,p*=_,f=h*(h+l*p+2*s)+p*(l*h+p+2*o)+c}else p=n,h=Math.max(0,-(l*p+s)),f=-h*h+p*(p+2*o)+c;else p=-n,h=Math.max(0,-(l*p+s)),f=-h*h+p*(p+2*o)+c;else p<=-g?(h=Math.max(0,-(-l*n+s)),p=h>0?-n:Math.min(Math.max(-n,-o),n),f=-h*h+p*(p+2*o)+c):p<=g?(h=0,p=Math.min(Math.max(-n,-o),n),f=p*(p+2*o)+c):(h=Math.max(0,-(l*n+s)),p=h>0?n:Math.min(Math.max(-n,-o),n),f=-h*h+p*(p+2*o)+c);else p=l>0?-n:n,h=Math.max(0,-(l*p+s)),f=-h*h+p*(p+2*o)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),a&&a.copy(Va).addScaledVector(Vr,p),f}intersectSphere(e,t){si.subVectors(e.center,this.origin);const i=si.dot(this.direction),a=si.dot(si)-i*i,n=e.radius*e.radius;if(a>n)return null;const l=Math.sqrt(n-a),s=i-l,o=i+l;return o<0?null:s<0?this.at(o,t):this.at(s,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,a,n,l,s,o;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,p=this.origin;return c>=0?(i=(e.min.x-p.x)*c,a=(e.max.x-p.x)*c):(i=(e.max.x-p.x)*c,a=(e.min.x-p.x)*c),u>=0?(n=(e.min.y-p.y)*u,l=(e.max.y-p.y)*u):(n=(e.max.y-p.y)*u,l=(e.min.y-p.y)*u),i>l||n>a||((n>i||isNaN(i))&&(i=n),(l<a||isNaN(a))&&(a=l),h>=0?(s=(e.min.z-p.z)*h,o=(e.max.z-p.z)*h):(s=(e.max.z-p.z)*h,o=(e.min.z-p.z)*h),i>o||s>a)||((s>i||i!==i)&&(i=s),(o<a||a!==a)&&(a=o),a<0)?null:this.at(i>=0?i:a,t)}intersectsBox(e){return this.intersectBox(e,si)!==null}intersectTriangle(e,t,i,a,n){ka.subVectors(t,e),kr.subVectors(i,e),Wa.crossVectors(ka,kr);let l=this.direction.dot(Wa),s;if(l>0){if(a)return null;s=1}else if(l<0)s=-1,l=-l;else return null;_i.subVectors(this.origin,e);const o=s*this.direction.dot(kr.crossVectors(_i,kr));if(o<0)return null;const c=s*this.direction.dot(ka.cross(_i));if(c<0||o+c>l)return null;const u=-s*_i.dot(Wa);return u<0?null:this.at(u/l,n)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class pt{constructor(e,t,i,a,n,l,s,o,c,u,h,p,f,g,_,m){pt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,a,n,l,s,o,c,u,h,p,f,g,_,m)}set(e,t,i,a,n,l,s,o,c,u,h,p,f,g,_,m){const d=this.elements;return d[0]=e,d[4]=t,d[8]=i,d[12]=a,d[1]=n,d[5]=l,d[9]=s,d[13]=o,d[2]=c,d[6]=u,d[10]=h,d[14]=p,d[3]=f,d[7]=g,d[11]=_,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new pt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,a=1/Qi.setFromMatrixColumn(e,0).length(),n=1/Qi.setFromMatrixColumn(e,1).length(),l=1/Qi.setFromMatrixColumn(e,2).length();return t[0]=i[0]*a,t[1]=i[1]*a,t[2]=i[2]*a,t[3]=0,t[4]=i[4]*n,t[5]=i[5]*n,t[6]=i[6]*n,t[7]=0,t[8]=i[8]*l,t[9]=i[9]*l,t[10]=i[10]*l,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,a=e.y,n=e.z,l=Math.cos(i),s=Math.sin(i),o=Math.cos(a),c=Math.sin(a),u=Math.cos(n),h=Math.sin(n);if(e.order==="XYZ"){const p=l*u,f=l*h,g=s*u,_=s*h;t[0]=o*u,t[4]=-o*h,t[8]=c,t[1]=f+g*c,t[5]=p-_*c,t[9]=-s*o,t[2]=_-p*c,t[6]=g+f*c,t[10]=l*o}else if(e.order==="YXZ"){const p=o*u,f=o*h,g=c*u,_=c*h;t[0]=p+_*s,t[4]=g*s-f,t[8]=l*c,t[1]=l*h,t[5]=l*u,t[9]=-s,t[2]=f*s-g,t[6]=_+p*s,t[10]=l*o}else if(e.order==="ZXY"){const p=o*u,f=o*h,g=c*u,_=c*h;t[0]=p-_*s,t[4]=-l*h,t[8]=g+f*s,t[1]=f+g*s,t[5]=l*u,t[9]=_-p*s,t[2]=-l*c,t[6]=s,t[10]=l*o}else if(e.order==="ZYX"){const p=l*u,f=l*h,g=s*u,_=s*h;t[0]=o*u,t[4]=g*c-f,t[8]=p*c+_,t[1]=o*h,t[5]=_*c+p,t[9]=f*c-g,t[2]=-c,t[6]=s*o,t[10]=l*o}else if(e.order==="YZX"){const p=l*o,f=l*c,g=s*o,_=s*c;t[0]=o*u,t[4]=_-p*h,t[8]=g*h+f,t[1]=h,t[5]=l*u,t[9]=-s*u,t[2]=-c*u,t[6]=f*h+g,t[10]=p-_*h}else if(e.order==="XZY"){const p=l*o,f=l*c,g=s*o,_=s*c;t[0]=o*u,t[4]=-h,t[8]=c*u,t[1]=p*h+_,t[5]=l*u,t[9]=f*h-g,t[2]=g*h-f,t[6]=s*u,t[10]=_*h+p}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ic,e,rc)}lookAt(e,t,i){const a=this.elements;return Ot.subVectors(e,t),Ot.lengthSq()===0&&(Ot.z=1),Ot.normalize(),vi.crossVectors(i,Ot),vi.lengthSq()===0&&(Math.abs(i.z)===1?Ot.x+=1e-4:Ot.z+=1e-4,Ot.normalize(),vi.crossVectors(i,Ot)),vi.normalize(),Wr.crossVectors(Ot,vi),a[0]=vi.x,a[4]=Wr.x,a[8]=Ot.x,a[1]=vi.y,a[5]=Wr.y,a[9]=Ot.y,a[2]=vi.z,a[6]=Wr.z,a[10]=Ot.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,a=t.elements,n=this.elements,l=i[0],s=i[4],o=i[8],c=i[12],u=i[1],h=i[5],p=i[9],f=i[13],g=i[2],_=i[6],m=i[10],d=i[14],y=i[3],x=i[7],b=i[11],P=i[15],w=a[0],A=a[4],W=a[8],S=a[12],T=a[1],H=a[5],z=a[9],ee=a[13],L=a[2],U=a[6],V=a[10],j=a[14],X=a[3],k=a[7],Y=a[11],J=a[15];return n[0]=l*w+s*T+o*L+c*X,n[4]=l*A+s*H+o*U+c*k,n[8]=l*W+s*z+o*V+c*Y,n[12]=l*S+s*ee+o*j+c*J,n[1]=u*w+h*T+p*L+f*X,n[5]=u*A+h*H+p*U+f*k,n[9]=u*W+h*z+p*V+f*Y,n[13]=u*S+h*ee+p*j+f*J,n[2]=g*w+_*T+m*L+d*X,n[6]=g*A+_*H+m*U+d*k,n[10]=g*W+_*z+m*V+d*Y,n[14]=g*S+_*ee+m*j+d*J,n[3]=y*w+x*T+b*L+P*X,n[7]=y*A+x*H+b*U+P*k,n[11]=y*W+x*z+b*V+P*Y,n[15]=y*S+x*ee+b*j+P*J,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],a=e[8],n=e[12],l=e[1],s=e[5],o=e[9],c=e[13],u=e[2],h=e[6],p=e[10],f=e[14],g=e[3],_=e[7],m=e[11],d=e[15];return g*(+n*o*h-a*c*h-n*s*p+i*c*p+a*s*f-i*o*f)+_*(+t*o*f-t*c*p+n*l*p-a*l*f+a*c*u-n*o*u)+m*(+t*c*h-t*s*f-n*l*h+i*l*f+n*s*u-i*c*u)+d*(-a*s*u-t*o*h+t*s*p+a*l*h-i*l*p+i*o*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=t,a[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],a=e[2],n=e[3],l=e[4],s=e[5],o=e[6],c=e[7],u=e[8],h=e[9],p=e[10],f=e[11],g=e[12],_=e[13],m=e[14],d=e[15],y=h*m*c-_*p*c+_*o*f-s*m*f-h*o*d+s*p*d,x=g*p*c-u*m*c-g*o*f+l*m*f+u*o*d-l*p*d,b=u*_*c-g*h*c+g*s*f-l*_*f-u*s*d+l*h*d,P=g*h*o-u*_*o-g*s*p+l*_*p+u*s*m-l*h*m,w=t*y+i*x+a*b+n*P;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/w;return e[0]=y*A,e[1]=(_*p*n-h*m*n-_*a*f+i*m*f+h*a*d-i*p*d)*A,e[2]=(s*m*n-_*o*n+_*a*c-i*m*c-s*a*d+i*o*d)*A,e[3]=(h*o*n-s*p*n-h*a*c+i*p*c+s*a*f-i*o*f)*A,e[4]=x*A,e[5]=(u*m*n-g*p*n+g*a*f-t*m*f-u*a*d+t*p*d)*A,e[6]=(g*o*n-l*m*n-g*a*c+t*m*c+l*a*d-t*o*d)*A,e[7]=(l*p*n-u*o*n+u*a*c-t*p*c-l*a*f+t*o*f)*A,e[8]=b*A,e[9]=(g*h*n-u*_*n-g*i*f+t*_*f+u*i*d-t*h*d)*A,e[10]=(l*_*n-g*s*n+g*i*c-t*_*c-l*i*d+t*s*d)*A,e[11]=(u*s*n-l*h*n-u*i*c+t*h*c+l*i*f-t*s*f)*A,e[12]=P*A,e[13]=(u*_*a-g*h*a+g*i*p-t*_*p-u*i*m+t*h*m)*A,e[14]=(g*s*a-l*_*a-g*i*o+t*_*o+l*i*m-t*s*m)*A,e[15]=(l*h*a-u*s*a+u*i*o-t*h*o-l*i*p+t*s*p)*A,this}scale(e){const t=this.elements,i=e.x,a=e.y,n=e.z;return t[0]*=i,t[4]*=a,t[8]*=n,t[1]*=i,t[5]*=a,t[9]*=n,t[2]*=i,t[6]*=a,t[10]*=n,t[3]*=i,t[7]*=a,t[11]*=n,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,a))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),a=Math.sin(t),n=1-i,l=e.x,s=e.y,o=e.z,c=n*l,u=n*s;return this.set(c*l+i,c*s-a*o,c*o+a*s,0,c*s+a*o,u*s+i,u*o-a*l,0,c*o-a*s,u*o+a*l,n*o*o+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,a,n,l){return this.set(1,i,n,0,e,1,l,0,t,a,1,0,0,0,0,1),this}compose(e,t,i){const a=this.elements,n=t._x,l=t._y,s=t._z,o=t._w,c=n+n,u=l+l,h=s+s,p=n*c,f=n*u,g=n*h,_=l*u,m=l*h,d=s*h,y=o*c,x=o*u,b=o*h,P=i.x,w=i.y,A=i.z;return a[0]=(1-(_+d))*P,a[1]=(f+b)*P,a[2]=(g-x)*P,a[3]=0,a[4]=(f-b)*w,a[5]=(1-(p+d))*w,a[6]=(m+y)*w,a[7]=0,a[8]=(g+x)*A,a[9]=(m-y)*A,a[10]=(1-(p+_))*A,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,t,i){const a=this.elements;let n=Qi.set(a[0],a[1],a[2]).length();const l=Qi.set(a[4],a[5],a[6]).length(),s=Qi.set(a[8],a[9],a[10]).length();this.determinant()<0&&(n=-n),e.x=a[12],e.y=a[13],e.z=a[14],Zt.copy(this);const o=1/n,c=1/l,u=1/s;return Zt.elements[0]*=o,Zt.elements[1]*=o,Zt.elements[2]*=o,Zt.elements[4]*=c,Zt.elements[5]*=c,Zt.elements[6]*=c,Zt.elements[8]*=u,Zt.elements[9]*=u,Zt.elements[10]*=u,t.setFromRotationMatrix(Zt),i.x=n,i.y=l,i.z=s,this}makePerspective(e,t,i,a,n,l,s=di){const o=this.elements,c=2*n/(t-e),u=2*n/(i-a),h=(t+e)/(t-e),p=(i+a)/(i-a);let f,g;if(s===di)f=-(l+n)/(l-n),g=-2*l*n/(l-n);else if(s===pa)f=-l/(l-n),g=-l*n/(l-n);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+s);return o[0]=c,o[4]=0,o[8]=h,o[12]=0,o[1]=0,o[5]=u,o[9]=p,o[13]=0,o[2]=0,o[6]=0,o[10]=f,o[14]=g,o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this}makeOrthographic(e,t,i,a,n,l,s=di){const o=this.elements,c=1/(t-e),u=1/(i-a),h=1/(l-n),p=(t+e)*c,f=(i+a)*u;let g,_;if(s===di)g=(l+n)*h,_=-2*h;else if(s===pa)g=n*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+s);return o[0]=2*c,o[4]=0,o[8]=0,o[12]=-p,o[1]=0,o[5]=2*u,o[9]=0,o[13]=-f,o[2]=0,o[6]=0,o[10]=_,o[14]=-g,o[3]=0,o[7]=0,o[11]=0,o[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let a=0;a<16;a++)if(t[a]!==i[a])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Qi=new C,Zt=new pt,ic=new C(0,0,0),rc=new C(1,1,1),vi=new C,Wr=new C,Ot=new C,Ts=new pt,bs=new Ur;class va{constructor(e=0,t=0,i=0,a=va.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,a=this._order){return this._x=e,this._y=t,this._z=i,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const a=e.elements,n=a[0],l=a[4],s=a[8],o=a[1],c=a[5],u=a[9],h=a[2],p=a[6],f=a[10];switch(t){case"XYZ":this._y=Math.asin(It(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-l,n)):(this._x=Math.atan2(p,c),this._z=0);break;case"YXZ":this._x=Math.asin(-It(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(s,f),this._z=Math.atan2(o,c)):(this._y=Math.atan2(-h,n),this._z=0);break;case"ZXY":this._x=Math.asin(It(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-l,c)):(this._y=0,this._z=Math.atan2(o,n));break;case"ZYX":this._y=Math.asin(-It(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(p,f),this._z=Math.atan2(o,n)):(this._x=0,this._z=Math.atan2(-l,c));break;case"YZX":this._z=Math.asin(It(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,n)):(this._x=0,this._y=Math.atan2(s,f));break;case"XZY":this._z=Math.asin(-It(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(p,c),this._y=Math.atan2(s,n)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Ts.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ts,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return bs.setFromEuler(this),this.setFromQuaternion(bs,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}va.DEFAULT_ORDER="XYZ";class To{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let ac=0;const ws=new C,er=new Ur,oi=new pt,Xr=new C,br=new C,nc=new C,sc=new Ur,As=new C(1,0,0),Rs=new C(0,1,0),Cs=new C(0,0,1),oc={type:"added"},lc={type:"removed"};class Rt extends vr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ac++}),this.uuid=Dr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Rt.DEFAULT_UP.clone();const e=new C,t=new va,i=new Ur,a=new C(1,1,1);function n(){i.setFromEuler(t,!1)}function l(){t.setFromQuaternion(i,void 0,!1)}t._onChange(n),i._onChange(l),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new pt},normalMatrix:{value:new Ve}}),this.matrix=new pt,this.matrixWorld=new pt,this.matrixAutoUpdate=Rt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Rt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new To,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return er.setFromAxisAngle(e,t),this.quaternion.multiply(er),this}rotateOnWorldAxis(e,t){return er.setFromAxisAngle(e,t),this.quaternion.premultiply(er),this}rotateX(e){return this.rotateOnAxis(As,e)}rotateY(e){return this.rotateOnAxis(Rs,e)}rotateZ(e){return this.rotateOnAxis(Cs,e)}translateOnAxis(e,t){return ws.copy(e).applyQuaternion(this.quaternion),this.position.add(ws.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(As,e)}translateY(e){return this.translateOnAxis(Rs,e)}translateZ(e){return this.translateOnAxis(Cs,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(oi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Xr.copy(e):Xr.set(e,t,i);const a=this.parent;this.updateWorldMatrix(!0,!1),br.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?oi.lookAt(br,Xr,this.up):oi.lookAt(Xr,br,this.up),this.quaternion.setFromRotationMatrix(oi),a&&(oi.extractRotation(a.matrixWorld),er.setFromRotationMatrix(oi),this.quaternion.premultiply(er.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(oc)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(lc)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),oi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),oi.multiply(e.parent.matrixWorld)),e.applyMatrix4(oi),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,a=this.children.length;i<a;i++){const n=this.children[i].getObjectByProperty(e,t);if(n!==void 0)return n}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const a=this.children;for(let n=0,l=a.length;n<l;n++)a[n].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(br,e,nc),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(br,sc,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,a=t.length;i<a;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,a=t.length;i<a;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,a=t.length;i<a;i++){const n=t[i];(n.matrixWorldAutoUpdate===!0||e===!0)&&n.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const a=this.children;for(let n=0,l=a.length;n<l;n++){const s=a[n];s.matrixWorldAutoUpdate===!0&&s.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.visibility=this._visibility,a.active=this._active,a.bounds=this._bounds.map(s=>({boxInitialized:s.boxInitialized,boxMin:s.box.min.toArray(),boxMax:s.box.max.toArray(),sphereInitialized:s.sphereInitialized,sphereRadius:s.sphere.radius,sphereCenter:s.sphere.center.toArray()})),a.maxGeometryCount=this._maxGeometryCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.geometryCount=this._geometryCount,a.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(a.boundingSphere={center:a.boundingSphere.center.toArray(),radius:a.boundingSphere.radius}),this.boundingBox!==null&&(a.boundingBox={min:a.boundingBox.min.toArray(),max:a.boundingBox.max.toArray()}));function n(s,o){return s[o.uuid]===void 0&&(s[o.uuid]=o.toJSON(e)),o.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=n(e.geometries,this.geometry);const s=this.geometry.parameters;if(s!==void 0&&s.shapes!==void 0){const o=s.shapes;if(Array.isArray(o))for(let c=0,u=o.length;c<u;c++){const h=o[c];n(e.shapes,h)}else n(e.shapes,o)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(n(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const s=[];for(let o=0,c=this.material.length;o<c;o++)s.push(n(e.materials,this.material[o]));a.material=s}else a.material=n(e.materials,this.material);if(this.children.length>0){a.children=[];for(let s=0;s<this.children.length;s++)a.children.push(this.children[s].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let s=0;s<this.animations.length;s++){const o=this.animations[s];a.animations.push(n(e.animations,o))}}if(t){const s=l(e.geometries),o=l(e.materials),c=l(e.textures),u=l(e.images),h=l(e.shapes),p=l(e.skeletons),f=l(e.animations),g=l(e.nodes);s.length>0&&(i.geometries=s),o.length>0&&(i.materials=o),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),p.length>0&&(i.skeletons=p),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=a,i;function l(s){const o=[];for(const c in s){const u=s[c];delete u.metadata,o.push(u)}return o}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const a=e.children[i];this.add(a.clone())}return this}}Rt.DEFAULT_UP=new C(0,1,0);Rt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Rt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Jt=new C,li=new C,Xa=new C,ci=new C,tr=new C,ir=new C,Ls=new C,ja=new C,qa=new C,Ya=new C;let jr=!1;class $t{constructor(e=new C,t=new C,i=new C){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,a){a.subVectors(i,t),Jt.subVectors(e,t),a.cross(Jt);const n=a.lengthSq();return n>0?a.multiplyScalar(1/Math.sqrt(n)):a.set(0,0,0)}static getBarycoord(e,t,i,a,n){Jt.subVectors(a,t),li.subVectors(i,t),Xa.subVectors(e,t);const l=Jt.dot(Jt),s=Jt.dot(li),o=Jt.dot(Xa),c=li.dot(li),u=li.dot(Xa),h=l*c-s*s;if(h===0)return n.set(0,0,0),null;const p=1/h,f=(c*o-s*u)*p,g=(l*u-s*o)*p;return n.set(1-f-g,g,f)}static containsPoint(e,t,i,a){return this.getBarycoord(e,t,i,a,ci)===null?!1:ci.x>=0&&ci.y>=0&&ci.x+ci.y<=1}static getUV(e,t,i,a,n,l,s,o){return jr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),jr=!0),this.getInterpolation(e,t,i,a,n,l,s,o)}static getInterpolation(e,t,i,a,n,l,s,o){return this.getBarycoord(e,t,i,a,ci)===null?(o.x=0,o.y=0,"z"in o&&(o.z=0),"w"in o&&(o.w=0),null):(o.setScalar(0),o.addScaledVector(n,ci.x),o.addScaledVector(l,ci.y),o.addScaledVector(s,ci.z),o)}static isFrontFacing(e,t,i,a){return Jt.subVectors(i,t),li.subVectors(e,t),Jt.cross(li).dot(a)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,a){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,t,i,a){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Jt.subVectors(this.c,this.b),li.subVectors(this.a,this.b),Jt.cross(li).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return $t.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return $t.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,a,n){return jr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),jr=!0),$t.getInterpolation(e,this.a,this.b,this.c,t,i,a,n)}getInterpolation(e,t,i,a,n){return $t.getInterpolation(e,this.a,this.b,this.c,t,i,a,n)}containsPoint(e){return $t.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return $t.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,a=this.b,n=this.c;let l,s;tr.subVectors(a,i),ir.subVectors(n,i),ja.subVectors(e,i);const o=tr.dot(ja),c=ir.dot(ja);if(o<=0&&c<=0)return t.copy(i);qa.subVectors(e,a);const u=tr.dot(qa),h=ir.dot(qa);if(u>=0&&h<=u)return t.copy(a);const p=o*h-u*c;if(p<=0&&o>=0&&u<=0)return l=o/(o-u),t.copy(i).addScaledVector(tr,l);Ya.subVectors(e,n);const f=tr.dot(Ya),g=ir.dot(Ya);if(g>=0&&f<=g)return t.copy(n);const _=f*c-o*g;if(_<=0&&c>=0&&g<=0)return s=c/(c-g),t.copy(i).addScaledVector(ir,s);const m=u*g-f*h;if(m<=0&&h-u>=0&&f-g>=0)return Ls.subVectors(n,a),s=(h-u)/(h-u+(f-g)),t.copy(a).addScaledVector(Ls,s);const d=1/(m+_+p);return l=_*d,s=p*d,t.copy(i).addScaledVector(tr,l).addScaledVector(ir,s)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const bo={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},xi={h:0,s:0,l:0},qr={h:0,s:0,l:0};function Ka(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class Xe{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Mt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ke.toWorkingColorSpace(this,t),this}setRGB(e,t,i,a=Ke.workingColorSpace){return this.r=e,this.g=t,this.b=i,Ke.toWorkingColorSpace(this,a),this}setHSL(e,t,i,a=Ke.workingColorSpace){if(e=ql(e,1),t=It(t,0,1),i=It(i,0,1),t===0)this.r=this.g=this.b=i;else{const n=i<=.5?i*(1+t):i+t-i*t,l=2*i-n;this.r=Ka(l,n,e+1/3),this.g=Ka(l,n,e),this.b=Ka(l,n,e-1/3)}return Ke.toWorkingColorSpace(this,a),this}setStyle(e,t=Mt){function i(n){n!==void 0&&parseFloat(n)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let n;const l=a[1],s=a[2];switch(l){case"rgb":case"rgba":if(n=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return i(n[4]),this.setRGB(Math.min(255,parseInt(n[1],10))/255,Math.min(255,parseInt(n[2],10))/255,Math.min(255,parseInt(n[3],10))/255,t);if(n=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return i(n[4]),this.setRGB(Math.min(100,parseInt(n[1],10))/100,Math.min(100,parseInt(n[2],10))/100,Math.min(100,parseInt(n[3],10))/100,t);break;case"hsl":case"hsla":if(n=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return i(n[4]),this.setHSL(parseFloat(n[1])/360,parseFloat(n[2])/100,parseFloat(n[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const n=a[1],l=n.length;if(l===3)return this.setRGB(parseInt(n.charAt(0),16)/15,parseInt(n.charAt(1),16)/15,parseInt(n.charAt(2),16)/15,t);if(l===6)return this.setHex(parseInt(n,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Mt){const i=bo[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=pr(e.r),this.g=pr(e.g),this.b=pr(e.b),this}copyLinearToSRGB(e){return this.r=Fa(e.r),this.g=Fa(e.g),this.b=Fa(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Mt){return Ke.fromWorkingColorSpace(Tt.copy(this),e),Math.round(It(Tt.r*255,0,255))*65536+Math.round(It(Tt.g*255,0,255))*256+Math.round(It(Tt.b*255,0,255))}getHexString(e=Mt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ke.workingColorSpace){Ke.fromWorkingColorSpace(Tt.copy(this),t);const i=Tt.r,a=Tt.g,n=Tt.b,l=Math.max(i,a,n),s=Math.min(i,a,n);let o,c;const u=(s+l)/2;if(s===l)o=0,c=0;else{const h=l-s;switch(c=u<=.5?h/(l+s):h/(2-l-s),l){case i:o=(a-n)/h+(a<n?6:0);break;case a:o=(n-i)/h+2;break;case n:o=(i-a)/h+4;break}o/=6}return e.h=o,e.s=c,e.l=u,e}getRGB(e,t=Ke.workingColorSpace){return Ke.fromWorkingColorSpace(Tt.copy(this),t),e.r=Tt.r,e.g=Tt.g,e.b=Tt.b,e}getStyle(e=Mt){Ke.fromWorkingColorSpace(Tt.copy(this),e);const t=Tt.r,i=Tt.g,a=Tt.b;return e!==Mt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(a*255)})`}offsetHSL(e,t,i){return this.getHSL(xi),this.setHSL(xi.h+e,xi.s+t,xi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(xi),e.getHSL(qr);const i=Na(xi.h,qr.h,t),a=Na(xi.s,qr.s,t),n=Na(xi.l,qr.l,t);return this.setHSL(i,a,n),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,a=this.b,n=e.elements;return this.r=n[0]*t+n[3]*i+n[6]*a,this.g=n[1]*t+n[4]*i+n[7]*a,this.b=n[2]*t+n[5]*i+n[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Tt=new Xe;Xe.NAMES=bo;let cc=0;class xr extends vr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:cc++}),this.uuid=Dr(),this.name="",this.type="Material",this.blending=dr,this.side=Ri,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=cn,this.blendDst=un,this.blendEquation=Bi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Xe(0,0,0),this.blendAlpha=0,this.depthFunc=ca,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=gs,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Yi,this.stencilZFail=Yi,this.stencilZPass=Yi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const a=this[t];if(a===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(i):a&&a.isVector3&&i&&i.isVector3?a.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==dr&&(i.blending=this.blending),this.side!==Ri&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==cn&&(i.blendSrc=this.blendSrc),this.blendDst!==un&&(i.blendDst=this.blendDst),this.blendEquation!==Bi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==ca&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==gs&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Yi&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Yi&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Yi&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function a(n){const l=[];for(const s in n){const o=n[s];delete o.metadata,l.push(o)}return l}if(t){const n=a(e.textures),l=a(e.images);n.length>0&&(i.textures=n),l.length>0&&(i.images=l)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const a=t.length;i=new Array(a);for(let n=0;n!==a;++n)i[n]=t[n].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class dt extends xr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Xe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Mn,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ut=new C,Yr=new Ae;class ri{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=_s,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=yi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let a=0,n=this.itemSize;a<n;a++)this.array[e+a]=t.array[i+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Yr.fromBufferAttribute(this,t),Yr.applyMatrix3(e),this.setXY(t,Yr.x,Yr.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)ut.fromBufferAttribute(this,t),ut.applyMatrix3(e),this.setXYZ(t,ut.x,ut.y,ut.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)ut.fromBufferAttribute(this,t),ut.applyMatrix4(e),this.setXYZ(t,ut.x,ut.y,ut.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)ut.fromBufferAttribute(this,t),ut.applyNormalMatrix(e),this.setXYZ(t,ut.x,ut.y,ut.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)ut.fromBufferAttribute(this,t),ut.transformDirection(e),this.setXYZ(t,ut.x,ut.y,ut.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Er(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Ut(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Er(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ut(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Er(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ut(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Er(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ut(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Er(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ut(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Ut(t,this.array),i=Ut(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,a){return e*=this.itemSize,this.normalized&&(t=Ut(t,this.array),i=Ut(i,this.array),a=Ut(a,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=a,this}setXYZW(e,t,i,a,n){return e*=this.itemSize,this.normalized&&(t=Ut(t,this.array),i=Ut(i,this.array),a=Ut(a,this.array),n=Ut(n,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=a,this.array[e+3]=n,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==_s&&(e.usage=this.usage),e}}class wo extends ri{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Ao extends ri{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class st extends ri{constructor(e,t,i){super(new Float32Array(e),t,i)}}let uc=0;const Xt=new pt,Za=new Rt,rr=new C,Ft=new ji,wr=new ji,vt=new C;class Yt extends vr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:uc++}),this.uuid=Dr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Mo(e)?Ao:wo)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const n=new Ve().getNormalMatrix(e);i.applyNormalMatrix(n),i.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Xt.makeRotationFromQuaternion(e),this.applyMatrix4(Xt),this}rotateX(e){return Xt.makeRotationX(e),this.applyMatrix4(Xt),this}rotateY(e){return Xt.makeRotationY(e),this.applyMatrix4(Xt),this}rotateZ(e){return Xt.makeRotationZ(e),this.applyMatrix4(Xt),this}translate(e,t,i){return Xt.makeTranslation(e,t,i),this.applyMatrix4(Xt),this}scale(e,t,i){return Xt.makeScale(e,t,i),this.applyMatrix4(Xt),this}lookAt(e){return Za.lookAt(e),Za.updateMatrix(),this.applyMatrix4(Za.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(rr).negate(),this.translate(rr.x,rr.y,rr.z),this}setFromPoints(e){const t=[];for(let i=0,a=e.length;i<a;i++){const n=e[i];t.push(n.x,n.y,n.z||0)}return this.setAttribute("position",new st(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ji);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,a=t.length;i<a;i++){const n=t[i];Ft.setFromBufferAttribute(n),this.morphTargetsRelative?(vt.addVectors(this.boundingBox.min,Ft.min),this.boundingBox.expandByPoint(vt),vt.addVectors(this.boundingBox.max,Ft.max),this.boundingBox.expandByPoint(vt)):(this.boundingBox.expandByPoint(Ft.min),this.boundingBox.expandByPoint(Ft.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Tn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new C,1/0);return}if(e){const i=this.boundingSphere.center;if(Ft.setFromBufferAttribute(e),t)for(let n=0,l=t.length;n<l;n++){const s=t[n];wr.setFromBufferAttribute(s),this.morphTargetsRelative?(vt.addVectors(Ft.min,wr.min),Ft.expandByPoint(vt),vt.addVectors(Ft.max,wr.max),Ft.expandByPoint(vt)):(Ft.expandByPoint(wr.min),Ft.expandByPoint(wr.max))}Ft.getCenter(i);let a=0;for(let n=0,l=e.count;n<l;n++)vt.fromBufferAttribute(e,n),a=Math.max(a,i.distanceToSquared(vt));if(t)for(let n=0,l=t.length;n<l;n++){const s=t[n],o=this.morphTargetsRelative;for(let c=0,u=s.count;c<u;c++)vt.fromBufferAttribute(s,c),o&&(rr.fromBufferAttribute(e,c),vt.add(rr)),a=Math.max(a,i.distanceToSquared(vt))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,a=t.position.array,n=t.normal.array,l=t.uv.array,s=a.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ri(new Float32Array(4*s),4));const o=this.getAttribute("tangent").array,c=[],u=[];for(let T=0;T<s;T++)c[T]=new C,u[T]=new C;const h=new C,p=new C,f=new C,g=new Ae,_=new Ae,m=new Ae,d=new C,y=new C;function x(T,H,z){h.fromArray(a,T*3),p.fromArray(a,H*3),f.fromArray(a,z*3),g.fromArray(l,T*2),_.fromArray(l,H*2),m.fromArray(l,z*2),p.sub(h),f.sub(h),_.sub(g),m.sub(g);const ee=1/(_.x*m.y-m.x*_.y);isFinite(ee)&&(d.copy(p).multiplyScalar(m.y).addScaledVector(f,-_.y).multiplyScalar(ee),y.copy(f).multiplyScalar(_.x).addScaledVector(p,-m.x).multiplyScalar(ee),c[T].add(d),c[H].add(d),c[z].add(d),u[T].add(y),u[H].add(y),u[z].add(y))}let b=this.groups;b.length===0&&(b=[{start:0,count:i.length}]);for(let T=0,H=b.length;T<H;++T){const z=b[T],ee=z.start,L=z.count;for(let U=ee,V=ee+L;U<V;U+=3)x(i[U+0],i[U+1],i[U+2])}const P=new C,w=new C,A=new C,W=new C;function S(T){A.fromArray(n,T*3),W.copy(A);const H=c[T];P.copy(H),P.sub(A.multiplyScalar(A.dot(H))).normalize(),w.crossVectors(W,H);const z=w.dot(u[T])<0?-1:1;o[T*4]=P.x,o[T*4+1]=P.y,o[T*4+2]=P.z,o[T*4+3]=z}for(let T=0,H=b.length;T<H;++T){const z=b[T],ee=z.start,L=z.count;for(let U=ee,V=ee+L;U<V;U+=3)S(i[U+0]),S(i[U+1]),S(i[U+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new ri(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let p=0,f=i.count;p<f;p++)i.setXYZ(p,0,0,0);const a=new C,n=new C,l=new C,s=new C,o=new C,c=new C,u=new C,h=new C;if(e)for(let p=0,f=e.count;p<f;p+=3){const g=e.getX(p+0),_=e.getX(p+1),m=e.getX(p+2);a.fromBufferAttribute(t,g),n.fromBufferAttribute(t,_),l.fromBufferAttribute(t,m),u.subVectors(l,n),h.subVectors(a,n),u.cross(h),s.fromBufferAttribute(i,g),o.fromBufferAttribute(i,_),c.fromBufferAttribute(i,m),s.add(u),o.add(u),c.add(u),i.setXYZ(g,s.x,s.y,s.z),i.setXYZ(_,o.x,o.y,o.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let p=0,f=t.count;p<f;p+=3)a.fromBufferAttribute(t,p+0),n.fromBufferAttribute(t,p+1),l.fromBufferAttribute(t,p+2),u.subVectors(l,n),h.subVectors(a,n),u.cross(h),i.setXYZ(p+0,u.x,u.y,u.z),i.setXYZ(p+1,u.x,u.y,u.z),i.setXYZ(p+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)vt.fromBufferAttribute(e,t),vt.normalize(),e.setXYZ(t,vt.x,vt.y,vt.z)}toNonIndexed(){function e(s,o){const c=s.array,u=s.itemSize,h=s.normalized,p=new c.constructor(o.length*u);let f=0,g=0;for(let _=0,m=o.length;_<m;_++){s.isInterleavedBufferAttribute?f=o[_]*s.data.stride+s.offset:f=o[_]*u;for(let d=0;d<u;d++)p[g++]=c[f++]}return new ri(p,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Yt,i=this.index.array,a=this.attributes;for(const s in a){const o=a[s],c=e(o,i);t.setAttribute(s,c)}const n=this.morphAttributes;for(const s in n){const o=[],c=n[s];for(let u=0,h=c.length;u<h;u++){const p=c[u],f=e(p,i);o.push(f)}t.morphAttributes[s]=o}t.morphTargetsRelative=this.morphTargetsRelative;const l=this.groups;for(let s=0,o=l.length;s<o;s++){const c=l[s];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const o=this.parameters;for(const c in o)o[c]!==void 0&&(e[c]=o[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const o in i){const c=i[o];e.data.attributes[o]=c.toJSON(e.data)}const a={};let n=!1;for(const o in this.morphAttributes){const c=this.morphAttributes[o],u=[];for(let h=0,p=c.length;h<p;h++){const f=c[h];u.push(f.toJSON(e.data))}u.length>0&&(a[o]=u,n=!0)}n&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const l=this.groups;l.length>0&&(e.data.groups=JSON.parse(JSON.stringify(l)));const s=this.boundingSphere;return s!==null&&(e.data.boundingSphere={center:s.center.toArray(),radius:s.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const a=e.attributes;for(const c in a){const u=a[c];this.setAttribute(c,u.clone(t))}const n=e.morphAttributes;for(const c in n){const u=[],h=n[c];for(let p=0,f=h.length;p<f;p++)u.push(h[p].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const l=e.groups;for(let c=0,u=l.length;c<u;c++){const h=l[c];this.addGroup(h.start,h.count,h.materialIndex)}const s=e.boundingBox;s!==null&&(this.boundingBox=s.clone());const o=e.boundingSphere;return o!==null&&(this.boundingSphere=o.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ps=new pt,Ii=new tc,Kr=new Tn,Ds=new C,ar=new C,nr=new C,sr=new C,Ja=new C,Zr=new C,Jr=new Ae,$r=new Ae,Qr=new Ae,Us=new C,Is=new C,Ns=new C,ea=new C,ta=new C;class ue extends Rt{constructor(e=new Yt,t=new dt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){const i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,n=i.length;a<n;a++){const l=i[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=a}}}}getVertexPosition(e,t){const i=this.geometry,a=i.attributes.position,n=i.morphAttributes.position,l=i.morphTargetsRelative;t.fromBufferAttribute(a,e);const s=this.morphTargetInfluences;if(n&&s){Zr.set(0,0,0);for(let o=0,c=n.length;o<c;o++){const u=s[o],h=n[o];u!==0&&(Ja.fromBufferAttribute(h,e),l?Zr.addScaledVector(Ja,u):Zr.addScaledVector(Ja.sub(t),u))}t.add(Zr)}return t}raycast(e,t){const i=this.geometry,a=this.material,n=this.matrixWorld;a!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Kr.copy(i.boundingSphere),Kr.applyMatrix4(n),Ii.copy(e.ray).recast(e.near),!(Kr.containsPoint(Ii.origin)===!1&&(Ii.intersectSphere(Kr,Ds)===null||Ii.origin.distanceToSquared(Ds)>(e.far-e.near)**2))&&(Ps.copy(n).invert(),Ii.copy(e.ray).applyMatrix4(Ps),!(i.boundingBox!==null&&Ii.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Ii)))}_computeIntersections(e,t,i){let a;const n=this.geometry,l=this.material,s=n.index,o=n.attributes.position,c=n.attributes.uv,u=n.attributes.uv1,h=n.attributes.normal,p=n.groups,f=n.drawRange;if(s!==null)if(Array.isArray(l))for(let g=0,_=p.length;g<_;g++){const m=p[g],d=l[m.materialIndex],y=Math.max(m.start,f.start),x=Math.min(s.count,Math.min(m.start+m.count,f.start+f.count));for(let b=y,P=x;b<P;b+=3){const w=s.getX(b),A=s.getX(b+1),W=s.getX(b+2);a=ia(this,d,e,i,c,u,h,w,A,W),a&&(a.faceIndex=Math.floor(b/3),a.face.materialIndex=m.materialIndex,t.push(a))}}else{const g=Math.max(0,f.start),_=Math.min(s.count,f.start+f.count);for(let m=g,d=_;m<d;m+=3){const y=s.getX(m),x=s.getX(m+1),b=s.getX(m+2);a=ia(this,l,e,i,c,u,h,y,x,b),a&&(a.faceIndex=Math.floor(m/3),t.push(a))}}else if(o!==void 0)if(Array.isArray(l))for(let g=0,_=p.length;g<_;g++){const m=p[g],d=l[m.materialIndex],y=Math.max(m.start,f.start),x=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let b=y,P=x;b<P;b+=3){const w=b,A=b+1,W=b+2;a=ia(this,d,e,i,c,u,h,w,A,W),a&&(a.faceIndex=Math.floor(b/3),a.face.materialIndex=m.materialIndex,t.push(a))}}else{const g=Math.max(0,f.start),_=Math.min(o.count,f.start+f.count);for(let m=g,d=_;m<d;m+=3){const y=m,x=m+1,b=m+2;a=ia(this,l,e,i,c,u,h,y,x,b),a&&(a.faceIndex=Math.floor(m/3),t.push(a))}}}}function hc(r,e,t,i,a,n,l,s){let o;if(e.side===Nt?o=i.intersectTriangle(l,n,a,!0,s):o=i.intersectTriangle(a,n,l,e.side===Ri,s),o===null)return null;ta.copy(s),ta.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(ta);return c<t.near||c>t.far?null:{distance:c,point:ta.clone(),object:r}}function ia(r,e,t,i,a,n,l,s,o,c){r.getVertexPosition(s,ar),r.getVertexPosition(o,nr),r.getVertexPosition(c,sr);const u=hc(r,e,t,i,ar,nr,sr,ea);if(u){a&&(Jr.fromBufferAttribute(a,s),$r.fromBufferAttribute(a,o),Qr.fromBufferAttribute(a,c),u.uv=$t.getInterpolation(ea,ar,nr,sr,Jr,$r,Qr,new Ae)),n&&(Jr.fromBufferAttribute(n,s),$r.fromBufferAttribute(n,o),Qr.fromBufferAttribute(n,c),u.uv1=$t.getInterpolation(ea,ar,nr,sr,Jr,$r,Qr,new Ae),u.uv2=u.uv1),l&&(Us.fromBufferAttribute(l,s),Is.fromBufferAttribute(l,o),Ns.fromBufferAttribute(l,c),u.normal=$t.getInterpolation(ea,ar,nr,sr,Us,Is,Ns,new C),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a:s,b:o,c,normal:new C,materialIndex:0};$t.getNormal(ar,nr,sr,h.normal),u.face=h}return u}class mt extends Yt{constructor(e=1,t=1,i=1,a=1,n=1,l=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:a,heightSegments:n,depthSegments:l};const s=this;a=Math.floor(a),n=Math.floor(n),l=Math.floor(l);const o=[],c=[],u=[],h=[];let p=0,f=0;g("z","y","x",-1,-1,i,t,e,l,n,0),g("z","y","x",1,-1,i,t,-e,l,n,1),g("x","z","y",1,1,e,i,t,a,l,2),g("x","z","y",1,-1,e,i,-t,a,l,3),g("x","y","z",1,-1,e,t,i,a,n,4),g("x","y","z",-1,-1,e,t,-i,a,n,5),this.setIndex(o),this.setAttribute("position",new st(c,3)),this.setAttribute("normal",new st(u,3)),this.setAttribute("uv",new st(h,2));function g(_,m,d,y,x,b,P,w,A,W,S){const T=b/A,H=P/W,z=b/2,ee=P/2,L=w/2,U=A+1,V=W+1;let j=0,X=0;const k=new C;for(let Y=0;Y<V;Y++){const J=Y*H-ee;for(let le=0;le<U;le++){const B=le*T-z;k[_]=B*y,k[m]=J*x,k[d]=L,c.push(k.x,k.y,k.z),k[_]=0,k[m]=0,k[d]=w>0?1:-1,u.push(k.x,k.y,k.z),h.push(le/A),h.push(1-Y/W),j+=1}}for(let Y=0;Y<W;Y++)for(let J=0;J<A;J++){const le=p+J+U*Y,B=p+J+U*(Y+1),q=p+(J+1)+U*(Y+1),pe=p+(J+1)+U*Y;o.push(le,B,pe),o.push(B,q,pe),X+=6}s.addGroup(f,X,S),f+=X,p+=j}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new mt(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function _r(r){const e={};for(const t in r){e[t]={};for(const i in r[t]){const a=r[t][i];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=a.clone():Array.isArray(a)?e[t][i]=a.slice():e[t][i]=a}}return e}function Pt(r){const e={};for(let t=0;t<r.length;t++){const i=_r(r[t]);for(const a in i)e[a]=i[a]}return e}function dc(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function Ro(r){return r.getRenderTarget()===null?r.outputColorSpace:Ke.workingColorSpace}const pc={clone:_r,merge:Pt};var fc=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,mc=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ci extends xr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=fc,this.fragmentShader=mc,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=_r(e.uniforms),this.uniformsGroups=dc(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const a in this.uniforms){const n=this.uniforms[a].value;n&&n.isTexture?t.uniforms[a]={type:"t",value:n.toJSON(e).uuid}:n&&n.isColor?t.uniforms[a]={type:"c",value:n.getHex()}:n&&n.isVector2?t.uniforms[a]={type:"v2",value:n.toArray()}:n&&n.isVector3?t.uniforms[a]={type:"v3",value:n.toArray()}:n&&n.isVector4?t.uniforms[a]={type:"v4",value:n.toArray()}:n&&n.isMatrix3?t.uniforms[a]={type:"m3",value:n.toArray()}:n&&n.isMatrix4?t.uniforms[a]={type:"m4",value:n.toArray()}:t.uniforms[a]={value:n}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const a in this.extensions)this.extensions[a]===!0&&(i[a]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Co extends Rt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new pt,this.projectionMatrix=new pt,this.projectionMatrixInverse=new pt,this.coordinateSystem=di}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Bt extends Co{constructor(e=50,t=1,i=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=a,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=gn*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ia*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return gn*2*Math.atan(Math.tan(Ia*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,a,n,l){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=a,this.view.width=n,this.view.height=l,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ia*.5*this.fov)/this.zoom,i=2*t,a=this.aspect*i,n=-.5*a;const l=this.view;if(this.view!==null&&this.view.enabled){const o=l.fullWidth,c=l.fullHeight;n+=l.offsetX*a/o,t-=l.offsetY*i/c,a*=l.width/o,i*=l.height/c}const s=this.filmOffset;s!==0&&(n+=e*s/this.getFilmWidth()),this.projectionMatrix.makePerspective(n,n+a,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const or=-90,lr=1;class gc extends Rt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new Bt(or,lr,e,t);a.layers=this.layers,this.add(a);const n=new Bt(or,lr,e,t);n.layers=this.layers,this.add(n);const l=new Bt(or,lr,e,t);l.layers=this.layers,this.add(l);const s=new Bt(or,lr,e,t);s.layers=this.layers,this.add(s);const o=new Bt(or,lr,e,t);o.layers=this.layers,this.add(o);const c=new Bt(or,lr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,a,n,l,s,o]=t;for(const c of t)this.remove(c);if(e===di)i.up.set(0,1,0),i.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),n.up.set(0,0,-1),n.lookAt(0,1,0),l.up.set(0,0,1),l.lookAt(0,-1,0),s.up.set(0,1,0),s.lookAt(0,0,1),o.up.set(0,1,0),o.lookAt(0,0,-1);else if(e===pa)i.up.set(0,-1,0),i.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),n.up.set(0,0,1),n.lookAt(0,1,0),l.up.set(0,0,-1),l.lookAt(0,-1,0),s.up.set(0,-1,0),s.lookAt(0,0,1),o.up.set(0,-1,0),o.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[n,l,s,o,c,u]=this.children,h=e.getRenderTarget(),p=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,a),e.render(t,n),e.setRenderTarget(i,1,a),e.render(t,l),e.setRenderTarget(i,2,a),e.render(t,s),e.setRenderTarget(i,3,a),e.render(t,o),e.setRenderTarget(i,4,a),e.render(t,c),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,a),e.render(t,u),e.setRenderTarget(h,p,f),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Lo extends Gt{constructor(e,t,i,a,n,l,s,o,c,u){e=e!==void 0?e:[],t=t!==void 0?t:fr,super(e,t,i,a,n,l,s,o,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class _c extends Xi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},a=[i,i,i,i,i,i];t.encoding!==void 0&&(Cr("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Wi?Mt:qt),this.texture=new Lo(a,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:jt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},a=new mt(5,5,5),n=new Ci({name:"CubemapFromEquirect",uniforms:_r(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Nt,blending:bi});n.uniforms.tEquirect.value=t;const l=new ue(a,n),s=t.minFilter;return t.minFilter===Lr&&(t.minFilter=jt),new gc(1,10,this).update(e,l),t.minFilter=s,l.geometry.dispose(),l.material.dispose(),this}clear(e,t,i,a){const n=e.getRenderTarget();for(let l=0;l<6;l++)e.setRenderTarget(this,l),e.clear(t,i,a);e.setRenderTarget(n)}}const $a=new C,vc=new C,xc=new Ve;class Fi{constructor(e=new C(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,a){return this.normal.set(e,t,i),this.constant=a,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const a=$a.subVectors(i,t).cross(vc.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta($a),a=this.normal.dot(i);if(a===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const n=-(e.start.dot(this.normal)+this.constant)/a;return n<0||n>1?null:t.copy(e.start).addScaledVector(i,n)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||xc.getNormalMatrix(e),a=this.coplanarPoint($a).applyMatrix4(e),n=this.normal.applyMatrix3(i).normalize();return this.constant=-a.dot(n),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ni=new Tn,ra=new C;class bn{constructor(e=new Fi,t=new Fi,i=new Fi,a=new Fi,n=new Fi,l=new Fi){this.planes=[e,t,i,a,n,l]}set(e,t,i,a,n,l){const s=this.planes;return s[0].copy(e),s[1].copy(t),s[2].copy(i),s[3].copy(a),s[4].copy(n),s[5].copy(l),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=di){const i=this.planes,a=e.elements,n=a[0],l=a[1],s=a[2],o=a[3],c=a[4],u=a[5],h=a[6],p=a[7],f=a[8],g=a[9],_=a[10],m=a[11],d=a[12],y=a[13],x=a[14],b=a[15];if(i[0].setComponents(o-n,p-c,m-f,b-d).normalize(),i[1].setComponents(o+n,p+c,m+f,b+d).normalize(),i[2].setComponents(o+l,p+u,m+g,b+y).normalize(),i[3].setComponents(o-l,p-u,m-g,b-y).normalize(),i[4].setComponents(o-s,p-h,m-_,b-x).normalize(),t===di)i[5].setComponents(o+s,p+h,m+_,b+x).normalize();else if(t===pa)i[5].setComponents(s,h,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ni.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ni.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ni)}intersectsSprite(e){return Ni.center.set(0,0,0),Ni.radius=.7071067811865476,Ni.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ni)}intersectsSphere(e){const t=this.planes,i=e.center,a=-e.radius;for(let n=0;n<6;n++)if(t[n].distanceToPoint(i)<a)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const a=t[i];if(ra.x=a.normal.x>0?e.max.x:e.min.x,ra.y=a.normal.y>0?e.max.y:e.min.y,ra.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(ra)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Po(){let r=null,e=!1,t=null,i=null;function a(n,l){t(n,l),i=r.requestAnimationFrame(a)}return{start:function(){e!==!0&&t!==null&&(i=r.requestAnimationFrame(a),e=!0)},stop:function(){r.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(n){t=n},setContext:function(n){r=n}}}function Mc(r,e){const t=e.isWebGL2,i=new WeakMap;function a(c,u){const h=c.array,p=c.usage,f=h.byteLength,g=r.createBuffer();r.bindBuffer(u,g),r.bufferData(u,h,p),c.onUploadCallback();let _;if(h instanceof Float32Array)_=r.FLOAT;else if(h instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)_=r.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=r.UNSIGNED_SHORT;else if(h instanceof Int16Array)_=r.SHORT;else if(h instanceof Uint32Array)_=r.UNSIGNED_INT;else if(h instanceof Int32Array)_=r.INT;else if(h instanceof Int8Array)_=r.BYTE;else if(h instanceof Uint8Array)_=r.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)_=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:g,type:_,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version,size:f}}function n(c,u,h){const p=u.array,f=u._updateRange,g=u.updateRanges;if(r.bindBuffer(h,c),f.count===-1&&g.length===0&&r.bufferSubData(h,0,p),g.length!==0){for(let _=0,m=g.length;_<m;_++){const d=g[_];t?r.bufferSubData(h,d.start*p.BYTES_PER_ELEMENT,p,d.start,d.count):r.bufferSubData(h,d.start*p.BYTES_PER_ELEMENT,p.subarray(d.start,d.start+d.count))}u.clearUpdateRanges()}f.count!==-1&&(t?r.bufferSubData(h,f.offset*p.BYTES_PER_ELEMENT,p,f.offset,f.count):r.bufferSubData(h,f.offset*p.BYTES_PER_ELEMENT,p.subarray(f.offset,f.offset+f.count)),f.count=-1),u.onUploadCallback()}function l(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function s(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=i.get(c);u&&(r.deleteBuffer(u.buffer),i.delete(c))}function o(c,u){if(c.isGLBufferAttribute){const p=i.get(c);(!p||p.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const h=i.get(c);if(h===void 0)i.set(c,a(c,u));else if(h.version<c.version){if(h.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(h.buffer,c,u),h.version=c.version}}return{get:l,remove:s,update:o}}class fi extends Yt{constructor(e=1,t=1,i=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:a};const n=e/2,l=t/2,s=Math.floor(i),o=Math.floor(a),c=s+1,u=o+1,h=e/s,p=t/o,f=[],g=[],_=[],m=[];for(let d=0;d<u;d++){const y=d*p-l;for(let x=0;x<c;x++){const b=x*h-n;g.push(b,-y,0),_.push(0,0,1),m.push(x/s),m.push(1-d/o)}}for(let d=0;d<o;d++)for(let y=0;y<s;y++){const x=y+c*d,b=y+c*(d+1),P=y+1+c*(d+1),w=y+1+c*d;f.push(x,b,w),f.push(b,P,w)}this.setIndex(f),this.setAttribute("position",new st(g,3)),this.setAttribute("normal",new st(_,3)),this.setAttribute("uv",new st(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fi(e.width,e.height,e.widthSegments,e.heightSegments)}}var Sc=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ec=`#ifdef USE_ALPHAHASH
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
#endif`,yc=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Tc=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,bc=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,wc=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ac=`#ifdef USE_AOMAP
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
#endif`,Rc=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Cc=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
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
#endif`,Lc=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Pc=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Dc=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Uc=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Ic=`#ifdef USE_IRIDESCENCE
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
#endif`,Nc=`#ifdef USE_BUMPMAP
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
#endif`,Oc=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
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
#endif`,Fc=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,zc=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Bc=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Gc=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Hc=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Vc=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,kc=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Wc=`#define PI 3.141592653589793
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
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
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
} // validated`,Xc=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,jc=`vec3 transformedNormal = objectNormal;
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
#endif`,qc=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Yc=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Kc=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Zc=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Jc="gl_FragColor = linearToOutputTexel( gl_FragColor );",$c=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,Qc=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,eu=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,tu=`#ifdef USE_ENVMAP
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
#endif`,iu=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ru=`#ifdef USE_ENVMAP
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
#endif`,au=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,nu=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,su=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ou=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,lu=`#ifdef USE_GRADIENTMAP
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
}`,cu=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,uu=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,hu=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,du=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,pu=`uniform bool receiveShadow;
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
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
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
#endif`,fu=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
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
#endif`,mu=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,gu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,_u=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,vu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,xu=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
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
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
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
#endif`,Mu=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
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
		return saturate(v);
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
	vec3 f0 = material.specularColor;
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Su=`
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
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif`,Eu=`#if defined( RE_IndirectDiffuse )
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
#endif`,yu=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Tu=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,bu=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,wu=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Au=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Ru=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Cu=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Lu=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Pu=`#if defined( USE_POINTS_UV )
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
#endif`,Du=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Uu=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Iu=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Nu=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Ou=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Fu=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,zu=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Bu=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Gu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Hu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Vu=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ku=`#ifdef USE_NORMALMAP
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
#endif`,Wu=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Xu=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ju=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,qu=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Yu=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ku=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
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
}`,Zu=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ju=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,$u=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Qu=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,eh=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,th=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ih=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,rh=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,ah=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,nh=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,sh=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,oh=`#ifdef USE_SKINNING
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
#endif`,lh=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ch=`#ifdef USE_SKINNING
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
#endif`,uh=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,hh=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,dh=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ph=`#ifndef saturate
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
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,fh=`#ifdef USE_TRANSMISSION
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
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,mh=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,gh=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,_h=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,vh=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,xh=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Mh=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Sh=`uniform sampler2D t2D;
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
}`,Eh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,yh=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Th=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,bh=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wh=`#include <common>
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
}`,Ah=`#if DEPTH_PACKING == 3200
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Rh=`#define DISTANCE
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
}`,Ch=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Lh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ph=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Dh=`uniform float scale;
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
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Uh=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ih=`#include <common>
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
}`,Nh=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Oh=`#define LAMBERT
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
}`,Fh=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,zh=`#define MATCAP
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
}`,Bh=`#define MATCAP
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Gh=`#define NORMAL
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
}`,Hh=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Vh=`#define PHONG
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
}`,kh=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Wh=`#define STANDARD
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
}`,Xh=`#define STANDARD
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
#include <packing>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
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
}`,jh=`#define TOON
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
}`,qh=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Yh=`uniform float size;
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
}`,Kh=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Zh=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
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
}`,Jh=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
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
}`,$h=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,Qh=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Ie={alphahash_fragment:Sc,alphahash_pars_fragment:Ec,alphamap_fragment:yc,alphamap_pars_fragment:Tc,alphatest_fragment:bc,alphatest_pars_fragment:wc,aomap_fragment:Ac,aomap_pars_fragment:Rc,batching_pars_vertex:Cc,batching_vertex:Lc,begin_vertex:Pc,beginnormal_vertex:Dc,bsdfs:Uc,iridescence_fragment:Ic,bumpmap_pars_fragment:Nc,clipping_planes_fragment:Oc,clipping_planes_pars_fragment:Fc,clipping_planes_pars_vertex:zc,clipping_planes_vertex:Bc,color_fragment:Gc,color_pars_fragment:Hc,color_pars_vertex:Vc,color_vertex:kc,common:Wc,cube_uv_reflection_fragment:Xc,defaultnormal_vertex:jc,displacementmap_pars_vertex:qc,displacementmap_vertex:Yc,emissivemap_fragment:Kc,emissivemap_pars_fragment:Zc,colorspace_fragment:Jc,colorspace_pars_fragment:$c,envmap_fragment:Qc,envmap_common_pars_fragment:eu,envmap_pars_fragment:tu,envmap_pars_vertex:iu,envmap_physical_pars_fragment:fu,envmap_vertex:ru,fog_vertex:au,fog_pars_vertex:nu,fog_fragment:su,fog_pars_fragment:ou,gradientmap_pars_fragment:lu,lightmap_fragment:cu,lightmap_pars_fragment:uu,lights_lambert_fragment:hu,lights_lambert_pars_fragment:du,lights_pars_begin:pu,lights_toon_fragment:mu,lights_toon_pars_fragment:gu,lights_phong_fragment:_u,lights_phong_pars_fragment:vu,lights_physical_fragment:xu,lights_physical_pars_fragment:Mu,lights_fragment_begin:Su,lights_fragment_maps:Eu,lights_fragment_end:yu,logdepthbuf_fragment:Tu,logdepthbuf_pars_fragment:bu,logdepthbuf_pars_vertex:wu,logdepthbuf_vertex:Au,map_fragment:Ru,map_pars_fragment:Cu,map_particle_fragment:Lu,map_particle_pars_fragment:Pu,metalnessmap_fragment:Du,metalnessmap_pars_fragment:Uu,morphcolor_vertex:Iu,morphnormal_vertex:Nu,morphtarget_pars_vertex:Ou,morphtarget_vertex:Fu,normal_fragment_begin:zu,normal_fragment_maps:Bu,normal_pars_fragment:Gu,normal_pars_vertex:Hu,normal_vertex:Vu,normalmap_pars_fragment:ku,clearcoat_normal_fragment_begin:Wu,clearcoat_normal_fragment_maps:Xu,clearcoat_pars_fragment:ju,iridescence_pars_fragment:qu,opaque_fragment:Yu,packing:Ku,premultiplied_alpha_fragment:Zu,project_vertex:Ju,dithering_fragment:$u,dithering_pars_fragment:Qu,roughnessmap_fragment:eh,roughnessmap_pars_fragment:th,shadowmap_pars_fragment:ih,shadowmap_pars_vertex:rh,shadowmap_vertex:ah,shadowmask_pars_fragment:nh,skinbase_vertex:sh,skinning_pars_vertex:oh,skinning_vertex:lh,skinnormal_vertex:ch,specularmap_fragment:uh,specularmap_pars_fragment:hh,tonemapping_fragment:dh,tonemapping_pars_fragment:ph,transmission_fragment:fh,transmission_pars_fragment:mh,uv_pars_fragment:gh,uv_pars_vertex:_h,uv_vertex:vh,worldpos_vertex:xh,background_vert:Mh,background_frag:Sh,backgroundCube_vert:Eh,backgroundCube_frag:yh,cube_vert:Th,cube_frag:bh,depth_vert:wh,depth_frag:Ah,distanceRGBA_vert:Rh,distanceRGBA_frag:Ch,equirect_vert:Lh,equirect_frag:Ph,linedashed_vert:Dh,linedashed_frag:Uh,meshbasic_vert:Ih,meshbasic_frag:Nh,meshlambert_vert:Oh,meshlambert_frag:Fh,meshmatcap_vert:zh,meshmatcap_frag:Bh,meshnormal_vert:Gh,meshnormal_frag:Hh,meshphong_vert:Vh,meshphong_frag:kh,meshphysical_vert:Wh,meshphysical_frag:Xh,meshtoon_vert:jh,meshtoon_frag:qh,points_vert:Yh,points_frag:Kh,shadow_vert:Zh,shadow_frag:Jh,sprite_vert:$h,sprite_frag:Qh},ae={common:{diffuse:{value:new Xe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ve}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ve}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ve}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ve},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ve},normalScale:{value:new Ae(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ve},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ve}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ve}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ve}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Xe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Xe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0},uvTransform:{value:new Ve}},sprite:{diffuse:{value:new Xe(16777215)},opacity:{value:1},center:{value:new Ae(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}}},ii={basic:{uniforms:Pt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.fog]),vertexShader:Ie.meshbasic_vert,fragmentShader:Ie.meshbasic_frag},lambert:{uniforms:Pt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new Xe(0)}}]),vertexShader:Ie.meshlambert_vert,fragmentShader:Ie.meshlambert_frag},phong:{uniforms:Pt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new Xe(0)},specular:{value:new Xe(1118481)},shininess:{value:30}}]),vertexShader:Ie.meshphong_vert,fragmentShader:Ie.meshphong_frag},standard:{uniforms:Pt([ae.common,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.roughnessmap,ae.metalnessmap,ae.fog,ae.lights,{emissive:{value:new Xe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ie.meshphysical_vert,fragmentShader:Ie.meshphysical_frag},toon:{uniforms:Pt([ae.common,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.gradientmap,ae.fog,ae.lights,{emissive:{value:new Xe(0)}}]),vertexShader:Ie.meshtoon_vert,fragmentShader:Ie.meshtoon_frag},matcap:{uniforms:Pt([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,{matcap:{value:null}}]),vertexShader:Ie.meshmatcap_vert,fragmentShader:Ie.meshmatcap_frag},points:{uniforms:Pt([ae.points,ae.fog]),vertexShader:Ie.points_vert,fragmentShader:Ie.points_frag},dashed:{uniforms:Pt([ae.common,ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ie.linedashed_vert,fragmentShader:Ie.linedashed_frag},depth:{uniforms:Pt([ae.common,ae.displacementmap]),vertexShader:Ie.depth_vert,fragmentShader:Ie.depth_frag},normal:{uniforms:Pt([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,{opacity:{value:1}}]),vertexShader:Ie.meshnormal_vert,fragmentShader:Ie.meshnormal_frag},sprite:{uniforms:Pt([ae.sprite,ae.fog]),vertexShader:Ie.sprite_vert,fragmentShader:Ie.sprite_frag},background:{uniforms:{uvTransform:{value:new Ve},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ie.background_vert,fragmentShader:Ie.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ie.backgroundCube_vert,fragmentShader:Ie.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ie.cube_vert,fragmentShader:Ie.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ie.equirect_vert,fragmentShader:Ie.equirect_frag},distanceRGBA:{uniforms:Pt([ae.common,ae.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ie.distanceRGBA_vert,fragmentShader:Ie.distanceRGBA_frag},shadow:{uniforms:Pt([ae.lights,ae.fog,{color:{value:new Xe(0)},opacity:{value:1}}]),vertexShader:Ie.shadow_vert,fragmentShader:Ie.shadow_frag}};ii.physical={uniforms:Pt([ii.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ve},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ve},clearcoatNormalScale:{value:new Ae(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ve},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ve},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ve},sheen:{value:0},sheenColor:{value:new Xe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ve},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ve},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ve},transmissionSamplerSize:{value:new Ae},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ve},attenuationDistance:{value:0},attenuationColor:{value:new Xe(0)},specularColor:{value:new Xe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ve},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ve},anisotropyVector:{value:new Ae},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ve}}]),vertexShader:Ie.meshphysical_vert,fragmentShader:Ie.meshphysical_frag};const aa={r:0,b:0,g:0};function ed(r,e,t,i,a,n,l){const s=new Xe(0);let o=n===!0?0:1,c,u,h=null,p=0,f=null;function g(m,d){let y=!1,x=d.isScene===!0?d.background:null;x&&x.isTexture&&(x=(d.backgroundBlurriness>0?t:e).get(x)),x===null?_(s,o):x&&x.isColor&&(_(x,1),y=!0);const b=r.xr.getEnvironmentBlendMode();b==="additive"?i.buffers.color.setClear(0,0,0,1,l):b==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,l),(r.autoClear||y)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),x&&(x.isCubeTexture||x.mapping===ga)?(u===void 0&&(u=new ue(new mt(1,1,1),new Ci({name:"BackgroundCubeMaterial",uniforms:_r(ii.backgroundCube.uniforms),vertexShader:ii.backgroundCube.vertexShader,fragmentShader:ii.backgroundCube.fragmentShader,side:Nt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(P,w,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(u)),u.material.uniforms.envMap.value=x,u.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=d.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,u.material.toneMapped=Ke.getTransfer(x.colorSpace)!==et,(h!==x||p!==x.version||f!==r.toneMapping)&&(u.material.needsUpdate=!0,h=x,p=x.version,f=r.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new ue(new fi(2,2),new Ci({name:"BackgroundMaterial",uniforms:_r(ii.background.uniforms),vertexShader:ii.background.vertexShader,fragmentShader:ii.background.fragmentShader,side:Ri,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,c.material.toneMapped=Ke.getTransfer(x.colorSpace)!==et,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(h!==x||p!==x.version||f!==r.toneMapping)&&(c.material.needsUpdate=!0,h=x,p=x.version,f=r.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function _(m,d){m.getRGB(aa,Ro(r)),i.buffers.color.setClear(aa.r,aa.g,aa.b,d,l)}return{getClearColor:function(){return s},setClearColor:function(m,d=1){s.set(m),o=d,_(s,o)},getClearAlpha:function(){return o},setClearAlpha:function(m){o=m,_(s,o)},render:g}}function td(r,e,t,i){const a=r.getParameter(r.MAX_VERTEX_ATTRIBS),n=i.isWebGL2?null:e.get("OES_vertex_array_object"),l=i.isWebGL2||n!==null,s={},o=m(null);let c=o,u=!1;function h(L,U,V,j,X){let k=!1;if(l){const Y=_(j,V,U);c!==Y&&(c=Y,f(c.object)),k=d(L,j,V,X),k&&y(L,j,V,X)}else{const Y=U.wireframe===!0;(c.geometry!==j.id||c.program!==V.id||c.wireframe!==Y)&&(c.geometry=j.id,c.program=V.id,c.wireframe=Y,k=!0)}X!==null&&t.update(X,r.ELEMENT_ARRAY_BUFFER),(k||u)&&(u=!1,W(L,U,V,j),X!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(X).buffer))}function p(){return i.isWebGL2?r.createVertexArray():n.createVertexArrayOES()}function f(L){return i.isWebGL2?r.bindVertexArray(L):n.bindVertexArrayOES(L)}function g(L){return i.isWebGL2?r.deleteVertexArray(L):n.deleteVertexArrayOES(L)}function _(L,U,V){const j=V.wireframe===!0;let X=s[L.id];X===void 0&&(X={},s[L.id]=X);let k=X[U.id];k===void 0&&(k={},X[U.id]=k);let Y=k[j];return Y===void 0&&(Y=m(p()),k[j]=Y),Y}function m(L){const U=[],V=[],j=[];for(let X=0;X<a;X++)U[X]=0,V[X]=0,j[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:V,attributeDivisors:j,object:L,attributes:{},index:null}}function d(L,U,V,j){const X=c.attributes,k=U.attributes;let Y=0;const J=V.getAttributes();for(const le in J)if(J[le].location>=0){const B=X[le];let q=k[le];if(q===void 0&&(le==="instanceMatrix"&&L.instanceMatrix&&(q=L.instanceMatrix),le==="instanceColor"&&L.instanceColor&&(q=L.instanceColor)),B===void 0||B.attribute!==q||q&&B.data!==q.data)return!0;Y++}return c.attributesNum!==Y||c.index!==j}function y(L,U,V,j){const X={},k=U.attributes;let Y=0;const J=V.getAttributes();for(const le in J)if(J[le].location>=0){let B=k[le];B===void 0&&(le==="instanceMatrix"&&L.instanceMatrix&&(B=L.instanceMatrix),le==="instanceColor"&&L.instanceColor&&(B=L.instanceColor));const q={};q.attribute=B,B&&B.data&&(q.data=B.data),X[le]=q,Y++}c.attributes=X,c.attributesNum=Y,c.index=j}function x(){const L=c.newAttributes;for(let U=0,V=L.length;U<V;U++)L[U]=0}function b(L){P(L,0)}function P(L,U){const V=c.newAttributes,j=c.enabledAttributes,X=c.attributeDivisors;V[L]=1,j[L]===0&&(r.enableVertexAttribArray(L),j[L]=1),X[L]!==U&&((i.isWebGL2?r:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](L,U),X[L]=U)}function w(){const L=c.newAttributes,U=c.enabledAttributes;for(let V=0,j=U.length;V<j;V++)U[V]!==L[V]&&(r.disableVertexAttribArray(V),U[V]=0)}function A(L,U,V,j,X,k,Y){Y===!0?r.vertexAttribIPointer(L,U,V,X,k):r.vertexAttribPointer(L,U,V,j,X,k)}function W(L,U,V,j){if(i.isWebGL2===!1&&(L.isInstancedMesh||j.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;x();const X=j.attributes,k=V.getAttributes(),Y=U.defaultAttributeValues;for(const J in k){const le=k[J];if(le.location>=0){let B=X[J];if(B===void 0&&(J==="instanceMatrix"&&L.instanceMatrix&&(B=L.instanceMatrix),J==="instanceColor"&&L.instanceColor&&(B=L.instanceColor)),B!==void 0){const q=B.normalized,pe=B.itemSize,_e=t.get(B);if(_e===void 0)continue;const ge=_e.buffer,Pe=_e.type,De=_e.bytesPerElement,be=i.isWebGL2===!0&&(Pe===r.INT||Pe===r.UNSIGNED_INT||B.gpuType===uo);if(B.isInterleavedBufferAttribute){const je=B.data,O=je.stride,Ct=B.offset;if(je.isInstancedInterleavedBuffer){for(let Se=0;Se<le.locationSize;Se++)P(le.location+Se,je.meshPerAttribute);L.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=je.meshPerAttribute*je.count)}else for(let Se=0;Se<le.locationSize;Se++)b(le.location+Se);r.bindBuffer(r.ARRAY_BUFFER,ge);for(let Se=0;Se<le.locationSize;Se++)A(le.location+Se,pe/le.locationSize,Pe,q,O*De,(Ct+pe/le.locationSize*Se)*De,be)}else{if(B.isInstancedBufferAttribute){for(let je=0;je<le.locationSize;je++)P(le.location+je,B.meshPerAttribute);L.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=B.meshPerAttribute*B.count)}else for(let je=0;je<le.locationSize;je++)b(le.location+je);r.bindBuffer(r.ARRAY_BUFFER,ge);for(let je=0;je<le.locationSize;je++)A(le.location+je,pe/le.locationSize,Pe,q,pe*De,pe/le.locationSize*je*De,be)}}else if(Y!==void 0){const q=Y[J];if(q!==void 0)switch(q.length){case 2:r.vertexAttrib2fv(le.location,q);break;case 3:r.vertexAttrib3fv(le.location,q);break;case 4:r.vertexAttrib4fv(le.location,q);break;default:r.vertexAttrib1fv(le.location,q)}}}}w()}function S(){z();for(const L in s){const U=s[L];for(const V in U){const j=U[V];for(const X in j)g(j[X].object),delete j[X];delete U[V]}delete s[L]}}function T(L){if(s[L.id]===void 0)return;const U=s[L.id];for(const V in U){const j=U[V];for(const X in j)g(j[X].object),delete j[X];delete U[V]}delete s[L.id]}function H(L){for(const U in s){const V=s[U];if(V[L.id]===void 0)continue;const j=V[L.id];for(const X in j)g(j[X].object),delete j[X];delete V[L.id]}}function z(){ee(),u=!0,c!==o&&(c=o,f(c.object))}function ee(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:h,reset:z,resetDefaultState:ee,dispose:S,releaseStatesOfGeometry:T,releaseStatesOfProgram:H,initAttributes:x,enableAttribute:b,disableUnusedAttributes:w}}function id(r,e,t,i){const a=i.isWebGL2;let n;function l(u){n=u}function s(u,h){r.drawArrays(n,u,h),t.update(h,n,1)}function o(u,h,p){if(p===0)return;let f,g;if(a)f=r,g="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[g](n,u,h,p),t.update(h,n,p)}function c(u,h,p){if(p===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<p;g++)this.render(u[g],h[g]);else{f.multiDrawArraysWEBGL(n,u,0,h,0,p);let g=0;for(let _=0;_<p;_++)g+=h[_];t.update(g,n,1)}}this.setMode=l,this.render=s,this.renderInstances=o,this.renderMultiDraw=c}function rd(r,e,t){let i;function a(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function n(A){if(A==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const l=typeof WebGL2RenderingContext<"u"&&r.constructor.name==="WebGL2RenderingContext";let s=t.precision!==void 0?t.precision:"highp";const o=n(s);o!==s&&(console.warn("THREE.WebGLRenderer:",s,"not supported, using",o,"instead."),s=o);const c=l||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,h=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),p=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),f=r.getParameter(r.MAX_TEXTURE_SIZE),g=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),_=r.getParameter(r.MAX_VERTEX_ATTRIBS),m=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),d=r.getParameter(r.MAX_VARYING_VECTORS),y=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),x=p>0,b=l||e.has("OES_texture_float"),P=x&&b,w=l?r.getParameter(r.MAX_SAMPLES):0;return{isWebGL2:l,drawBuffers:c,getMaxAnisotropy:a,getMaxPrecision:n,precision:s,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:p,maxTextureSize:f,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:m,maxVaryings:d,maxFragmentUniforms:y,vertexTextures:x,floatFragmentTextures:b,floatVertexTextures:P,maxSamples:w}}function ad(r){const e=this;let t=null,i=0,a=!1,n=!1;const l=new Fi,s=new Ve,o={value:null,needsUpdate:!1};this.uniform=o,this.numPlanes=0,this.numIntersection=0,this.init=function(h,p){const f=h.length!==0||p||i!==0||a;return a=p,i=h.length,f},this.beginShadows=function(){n=!0,u(null)},this.endShadows=function(){n=!1},this.setGlobalState=function(h,p){t=u(h,p,0)},this.setState=function(h,p,f){const g=h.clippingPlanes,_=h.clipIntersection,m=h.clipShadows,d=r.get(h);if(!a||g===null||g.length===0||n&&!m)n?u(null):c();else{const y=n?0:i,x=y*4;let b=d.clippingState||null;o.value=b,b=u(g,p,x,f);for(let P=0;P!==x;++P)b[P]=t[P];d.clippingState=b,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function c(){o.value!==t&&(o.value=t,o.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,p,f,g){const _=h!==null?h.length:0;let m=null;if(_!==0){if(m=o.value,g!==!0||m===null){const d=f+_*4,y=p.matrixWorldInverse;s.getNormalMatrix(y),(m===null||m.length<d)&&(m=new Float32Array(d));for(let x=0,b=f;x!==_;++x,b+=4)l.copy(h[x]).applyMatrix4(y,s),l.normal.toArray(m,b),m[b+3]=l.constant}o.value=m,o.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function nd(r){let e=new WeakMap;function t(l,s){return s===hn?l.mapping=fr:s===dn&&(l.mapping=mr),l}function i(l){if(l&&l.isTexture){const s=l.mapping;if(s===hn||s===dn)if(e.has(l)){const o=e.get(l).texture;return t(o,l.mapping)}else{const o=l.image;if(o&&o.height>0){const c=new _c(o.height/2);return c.fromEquirectangularTexture(r,l),e.set(l,c),l.addEventListener("dispose",a),t(c.texture,l.mapping)}else return null}}return l}function a(l){const s=l.target;s.removeEventListener("dispose",a);const o=e.get(s);o!==void 0&&(e.delete(s),o.dispose())}function n(){e=new WeakMap}return{get:i,dispose:n}}class Do extends Co{constructor(e=-1,t=1,i=1,a=-1,n=.1,l=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=a,this.near=n,this.far=l,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,a,n,l){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=a,this.view.width=n,this.view.height=l,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let n=i-e,l=i+e,s=a+t,o=a-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;n+=c*this.view.offsetX,l=n+c*this.view.width,s-=u*this.view.offsetY,o=s-u*this.view.height}this.projectionMatrix.makeOrthographic(n,l,s,o,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const ur=4,Os=[.125,.215,.35,.446,.526,.582],Gi=20,Qa=new Do,Fs=new Xe;let en=null,tn=0,rn=0;const zi=(1+Math.sqrt(5))/2,cr=1/zi,zs=[new C(1,1,1),new C(-1,1,1),new C(1,1,-1),new C(-1,1,-1),new C(0,zi,cr),new C(0,zi,-cr),new C(cr,0,zi),new C(-cr,0,zi),new C(zi,cr,0),new C(-zi,cr,0)];class Bs{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,a=100){en=this._renderer.getRenderTarget(),tn=this._renderer.getActiveCubeFace(),rn=this._renderer.getActiveMipmapLevel(),this._setSize(256);const n=this._allocateTargets();return n.depthBuffer=!0,this._sceneToCubeUV(e,i,a,n),t>0&&this._blur(n,0,0,t),this._applyPMREM(n),this._cleanup(n),n}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Vs(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Hs(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(en,tn,rn),e.scissorTest=!1,na(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===fr||e.mapping===mr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),en=this._renderer.getRenderTarget(),tn=this._renderer.getActiveCubeFace(),rn=this._renderer.getActiveMipmapLevel();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:jt,minFilter:jt,generateMipmaps:!1,type:Pr,format:ei,colorSpace:pi,depthBuffer:!1},a=Gs(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Gs(e,t,i);const{_lodMax:n}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=sd(n)),this._blurMaterial=od(n,e,t)}return a}_compileMaterial(e){const t=new ue(this._lodPlanes[0],e);this._renderer.compile(t,Qa)}_sceneToCubeUV(e,t,i,a){const n=new Bt(90,1,t,i),l=[1,-1,1,1,1,1],s=[1,1,1,-1,-1,-1],o=this._renderer,c=o.autoClear,u=o.toneMapping;o.getClearColor(Fs),o.toneMapping=wi,o.autoClear=!1;const h=new dt({name:"PMREM.Background",side:Nt,depthWrite:!1,depthTest:!1}),p=new ue(new mt,h);let f=!1;const g=e.background;g?g.isColor&&(h.color.copy(g),e.background=null,f=!0):(h.color.copy(Fs),f=!0);for(let _=0;_<6;_++){const m=_%3;m===0?(n.up.set(0,l[_],0),n.lookAt(s[_],0,0)):m===1?(n.up.set(0,0,l[_]),n.lookAt(0,s[_],0)):(n.up.set(0,l[_],0),n.lookAt(0,0,s[_]));const d=this._cubeSize;na(a,m*d,_>2?d:0,d,d),o.setRenderTarget(a),f&&o.render(p,n),o.render(e,n)}p.geometry.dispose(),p.material.dispose(),o.toneMapping=u,o.autoClear=c,e.background=g}_textureToCubeUV(e,t){const i=this._renderer,a=e.mapping===fr||e.mapping===mr;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=Vs()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Hs());const n=a?this._cubemapMaterial:this._equirectMaterial,l=new ue(this._lodPlanes[0],n),s=n.uniforms;s.envMap.value=e;const o=this._cubeSize;na(t,0,0,3*o,2*o),i.setRenderTarget(t),i.render(l,Qa)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let a=1;a<this._lodPlanes.length;a++){const n=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),l=zs[(a-1)%zs.length];this._blur(e,a-1,a,n,l)}t.autoClear=i}_blur(e,t,i,a,n){const l=this._pingPongRenderTarget;this._halfBlur(e,l,t,i,a,"latitudinal",n),this._halfBlur(l,e,i,i,a,"longitudinal",n)}_halfBlur(e,t,i,a,n,l,s){const o=this._renderer,c=this._blurMaterial;l!=="latitudinal"&&l!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new ue(this._lodPlanes[a],c),p=c.uniforms,f=this._sizeLods[i]-1,g=isFinite(n)?Math.PI/(2*f):2*Math.PI/(2*Gi-1),_=n/g,m=isFinite(n)?1+Math.floor(u*_):Gi;m>Gi&&console.warn(`sigmaRadians, ${n}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Gi}`);const d=[];let y=0;for(let A=0;A<Gi;++A){const W=A/_,S=Math.exp(-W*W/2);d.push(S),A===0?y+=S:A<m&&(y+=2*S)}for(let A=0;A<d.length;A++)d[A]=d[A]/y;p.envMap.value=e.texture,p.samples.value=m,p.weights.value=d,p.latitudinal.value=l==="latitudinal",s&&(p.poleAxis.value=s);const{_lodMax:x}=this;p.dTheta.value=g,p.mipInt.value=x-i;const b=this._sizeLods[a],P=3*b*(a>x-ur?a-x+ur:0),w=4*(this._cubeSize-b);na(t,P,w,3*b,2*b),o.setRenderTarget(t),o.render(h,Qa)}}function sd(r){const e=[],t=[],i=[];let a=r;const n=r-ur+1+Os.length;for(let l=0;l<n;l++){const s=Math.pow(2,a);t.push(s);let o=1/s;l>r-ur?o=Os[l-r+ur-1]:l===0&&(o=0),i.push(o);const c=1/(s-2),u=-c,h=1+c,p=[u,u,h,u,h,h,u,u,h,h,u,h],f=6,g=6,_=3,m=2,d=1,y=new Float32Array(_*g*f),x=new Float32Array(m*g*f),b=new Float32Array(d*g*f);for(let w=0;w<f;w++){const A=w%3*2/3-1,W=w>2?0:-1,S=[A,W,0,A+2/3,W,0,A+2/3,W+1,0,A,W,0,A+2/3,W+1,0,A,W+1,0];y.set(S,_*g*w),x.set(p,m*g*w);const T=[w,w,w,w,w,w];b.set(T,d*g*w)}const P=new Yt;P.setAttribute("position",new ri(y,_)),P.setAttribute("uv",new ri(x,m)),P.setAttribute("faceIndex",new ri(b,d)),e.push(P),a>ur&&a--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Gs(r,e,t){const i=new Xi(r,e,t);return i.texture.mapping=ga,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function na(r,e,t,i,a){r.viewport.set(e,t,i,a),r.scissor.set(e,t,i,a)}function od(r,e,t){const i=new Float32Array(Gi),a=new C(0,1,0);return new Ci({name:"SphericalGaussianBlur",defines:{n:Gi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:wn(),fragmentShader:`

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
		`,blending:bi,depthTest:!1,depthWrite:!1})}function Hs(){return new Ci({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:wn(),fragmentShader:`

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
		`,blending:bi,depthTest:!1,depthWrite:!1})}function Vs(){return new Ci({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:wn(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:bi,depthTest:!1,depthWrite:!1})}function wn(){return`

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
	`}function ld(r){let e=new WeakMap,t=null;function i(s){if(s&&s.isTexture){const o=s.mapping,c=o===hn||o===dn,u=o===fr||o===mr;if(c||u)if(s.isRenderTargetTexture&&s.needsPMREMUpdate===!0){s.needsPMREMUpdate=!1;let h=e.get(s);return t===null&&(t=new Bs(r)),h=c?t.fromEquirectangular(s,h):t.fromCubemap(s,h),e.set(s,h),h.texture}else{if(e.has(s))return e.get(s).texture;{const h=s.image;if(c&&h&&h.height>0||u&&h&&a(h)){t===null&&(t=new Bs(r));const p=c?t.fromEquirectangular(s):t.fromCubemap(s);return e.set(s,p),s.addEventListener("dispose",n),p.texture}else return null}}}return s}function a(s){let o=0;const c=6;for(let u=0;u<c;u++)s[u]!==void 0&&o++;return o===c}function n(s){const o=s.target;o.removeEventListener("dispose",n);const c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function l(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:l}}function cd(r){const e={};function t(i){if(e[i]!==void 0)return e[i];let a;switch(i){case"WEBGL_depth_texture":a=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=r.getExtension(i)}return e[i]=a,a}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const a=t(i);return a===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),a}}}function ud(r,e,t,i){const a={},n=new WeakMap;function l(h){const p=h.target;p.index!==null&&e.remove(p.index);for(const g in p.attributes)e.remove(p.attributes[g]);for(const g in p.morphAttributes){const _=p.morphAttributes[g];for(let m=0,d=_.length;m<d;m++)e.remove(_[m])}p.removeEventListener("dispose",l),delete a[p.id];const f=n.get(p);f&&(e.remove(f),n.delete(p)),i.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function s(h,p){return a[p.id]===!0||(p.addEventListener("dispose",l),a[p.id]=!0,t.memory.geometries++),p}function o(h){const p=h.attributes;for(const g in p)e.update(p[g],r.ARRAY_BUFFER);const f=h.morphAttributes;for(const g in f){const _=f[g];for(let m=0,d=_.length;m<d;m++)e.update(_[m],r.ARRAY_BUFFER)}}function c(h){const p=[],f=h.index,g=h.attributes.position;let _=0;if(f!==null){const y=f.array;_=f.version;for(let x=0,b=y.length;x<b;x+=3){const P=y[x+0],w=y[x+1],A=y[x+2];p.push(P,w,w,A,A,P)}}else if(g!==void 0){const y=g.array;_=g.version;for(let x=0,b=y.length/3-1;x<b;x+=3){const P=x+0,w=x+1,A=x+2;p.push(P,w,w,A,A,P)}}else return;const m=new(Mo(p)?Ao:wo)(p,1);m.version=_;const d=n.get(h);d&&e.remove(d),n.set(h,m)}function u(h){const p=n.get(h);if(p){const f=h.index;f!==null&&p.version<f.version&&c(h)}else c(h);return n.get(h)}return{get:s,update:o,getWireframeAttribute:u}}function hd(r,e,t,i){const a=i.isWebGL2;let n;function l(f){n=f}let s,o;function c(f){s=f.type,o=f.bytesPerElement}function u(f,g){r.drawElements(n,g,s,f*o),t.update(g,n,1)}function h(f,g,_){if(_===0)return;let m,d;if(a)m=r,d="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),d="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[d](n,g,s,f*o,_),t.update(g,n,_)}function p(f,g,_){if(_===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<_;d++)this.render(f[d]/o,g[d]);else{m.multiDrawElementsWEBGL(n,g,0,s,f,0,_);let d=0;for(let y=0;y<_;y++)d+=g[y];t.update(d,n,1)}}this.setMode=l,this.setIndex=c,this.render=u,this.renderInstances=h,this.renderMultiDraw=p}function dd(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(n,l,s){switch(t.calls++,l){case r.TRIANGLES:t.triangles+=s*(n/3);break;case r.LINES:t.lines+=s*(n/2);break;case r.LINE_STRIP:t.lines+=s*(n-1);break;case r.LINE_LOOP:t.lines+=s*n;break;case r.POINTS:t.points+=s*n;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",l);break}}function a(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:a,update:i}}function pd(r,e){return r[0]-e[0]}function fd(r,e){return Math.abs(e[1])-Math.abs(r[1])}function md(r,e,t){const i={},a=new Float32Array(8),n=new WeakMap,l=new it,s=[];for(let c=0;c<8;c++)s[c]=[c,0];function o(c,u,h){const p=c.morphTargetInfluences;if(e.isWebGL2===!0){const f=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,g=f!==void 0?f.length:0;let _=n.get(u);if(_===void 0||_.count!==g){let y=function(){ee.dispose(),n.delete(u),u.removeEventListener("dispose",y)};_!==void 0&&_.texture.dispose();const x=u.morphAttributes.position!==void 0,b=u.morphAttributes.normal!==void 0,P=u.morphAttributes.color!==void 0,w=u.morphAttributes.position||[],A=u.morphAttributes.normal||[],W=u.morphAttributes.color||[];let S=0;x===!0&&(S=1),b===!0&&(S=2),P===!0&&(S=3);let T=u.attributes.position.count*S,H=1;T>e.maxTextureSize&&(H=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const z=new Float32Array(T*H*4*g),ee=new yo(z,T,H,g);ee.type=yi,ee.needsUpdate=!0;const L=S*4;for(let U=0;U<g;U++){const V=w[U],j=A[U],X=W[U],k=T*H*4*U;for(let Y=0;Y<V.count;Y++){const J=Y*L;x===!0&&(l.fromBufferAttribute(V,Y),z[k+J+0]=l.x,z[k+J+1]=l.y,z[k+J+2]=l.z,z[k+J+3]=0),b===!0&&(l.fromBufferAttribute(j,Y),z[k+J+4]=l.x,z[k+J+5]=l.y,z[k+J+6]=l.z,z[k+J+7]=0),P===!0&&(l.fromBufferAttribute(X,Y),z[k+J+8]=l.x,z[k+J+9]=l.y,z[k+J+10]=l.z,z[k+J+11]=X.itemSize===4?l.w:1)}}_={count:g,texture:ee,size:new Ae(T,H)},n.set(u,_),u.addEventListener("dispose",y)}let m=0;for(let y=0;y<p.length;y++)m+=p[y];const d=u.morphTargetsRelative?1:1-m;h.getUniforms().setValue(r,"morphTargetBaseInfluence",d),h.getUniforms().setValue(r,"morphTargetInfluences",p),h.getUniforms().setValue(r,"morphTargetsTexture",_.texture,t),h.getUniforms().setValue(r,"morphTargetsTextureSize",_.size)}else{const f=p===void 0?0:p.length;let g=i[u.id];if(g===void 0||g.length!==f){g=[];for(let x=0;x<f;x++)g[x]=[x,0];i[u.id]=g}for(let x=0;x<f;x++){const b=g[x];b[0]=x,b[1]=p[x]}g.sort(fd);for(let x=0;x<8;x++)x<f&&g[x][1]?(s[x][0]=g[x][0],s[x][1]=g[x][1]):(s[x][0]=Number.MAX_SAFE_INTEGER,s[x][1]=0);s.sort(pd);const _=u.morphAttributes.position,m=u.morphAttributes.normal;let d=0;for(let x=0;x<8;x++){const b=s[x],P=b[0],w=b[1];P!==Number.MAX_SAFE_INTEGER&&w?(_&&u.getAttribute("morphTarget"+x)!==_[P]&&u.setAttribute("morphTarget"+x,_[P]),m&&u.getAttribute("morphNormal"+x)!==m[P]&&u.setAttribute("morphNormal"+x,m[P]),a[x]=w,d+=w):(_&&u.hasAttribute("morphTarget"+x)===!0&&u.deleteAttribute("morphTarget"+x),m&&u.hasAttribute("morphNormal"+x)===!0&&u.deleteAttribute("morphNormal"+x),a[x]=0)}const y=u.morphTargetsRelative?1:1-d;h.getUniforms().setValue(r,"morphTargetBaseInfluence",y),h.getUniforms().setValue(r,"morphTargetInfluences",a)}}return{update:o}}function gd(r,e,t,i){let a=new WeakMap;function n(o){const c=i.render.frame,u=o.geometry,h=e.get(o,u);if(a.get(h)!==c&&(e.update(h),a.set(h,c)),o.isInstancedMesh&&(o.hasEventListener("dispose",s)===!1&&o.addEventListener("dispose",s),a.get(o)!==c&&(t.update(o.instanceMatrix,r.ARRAY_BUFFER),o.instanceColor!==null&&t.update(o.instanceColor,r.ARRAY_BUFFER),a.set(o,c))),o.isSkinnedMesh){const p=o.skeleton;a.get(p)!==c&&(p.update(),a.set(p,c))}return h}function l(){a=new WeakMap}function s(o){const c=o.target;c.removeEventListener("dispose",s),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:n,dispose:l}}class Uo extends Gt{constructor(e,t,i,a,n,l,s,o,c,u){if(u=u!==void 0?u:ki,u!==ki&&u!==gr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===ki&&(i=Ei),i===void 0&&u===gr&&(i=Vi),super(null,a,n,l,s,o,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=s!==void 0?s:Dt,this.minFilter=o!==void 0?o:Dt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Io=new Gt,No=new Uo(1,1);No.compareFunction=xo;const Oo=new yo,Fo=new Ql,zo=new Lo,ks=[],Ws=[],Xs=new Float32Array(16),js=new Float32Array(9),qs=new Float32Array(4);function Mr(r,e,t){const i=r[0];if(i<=0||i>0)return r;const a=e*t;let n=ks[a];if(n===void 0&&(n=new Float32Array(a),ks[a]=n),e!==0){i.toArray(n,0);for(let l=1,s=0;l!==e;++l)s+=t,r[l].toArray(n,s)}return n}function gt(r,e){if(r.length!==e.length)return!1;for(let t=0,i=r.length;t<i;t++)if(r[t]!==e[t])return!1;return!0}function _t(r,e){for(let t=0,i=e.length;t<i;t++)r[t]=e[t]}function xa(r,e){let t=Ws[e];t===void 0&&(t=new Int32Array(e),Ws[e]=t);for(let i=0;i!==e;++i)t[i]=r.allocateTextureUnit();return t}function _d(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function vd(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(gt(t,e))return;r.uniform2fv(this.addr,e),_t(t,e)}}function xd(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(gt(t,e))return;r.uniform3fv(this.addr,e),_t(t,e)}}function Md(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(gt(t,e))return;r.uniform4fv(this.addr,e),_t(t,e)}}function Sd(r,e){const t=this.cache,i=e.elements;if(i===void 0){if(gt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),_t(t,e)}else{if(gt(t,i))return;qs.set(i),r.uniformMatrix2fv(this.addr,!1,qs),_t(t,i)}}function Ed(r,e){const t=this.cache,i=e.elements;if(i===void 0){if(gt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),_t(t,e)}else{if(gt(t,i))return;js.set(i),r.uniformMatrix3fv(this.addr,!1,js),_t(t,i)}}function yd(r,e){const t=this.cache,i=e.elements;if(i===void 0){if(gt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),_t(t,e)}else{if(gt(t,i))return;Xs.set(i),r.uniformMatrix4fv(this.addr,!1,Xs),_t(t,i)}}function Td(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function bd(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(gt(t,e))return;r.uniform2iv(this.addr,e),_t(t,e)}}function wd(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(gt(t,e))return;r.uniform3iv(this.addr,e),_t(t,e)}}function Ad(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(gt(t,e))return;r.uniform4iv(this.addr,e),_t(t,e)}}function Rd(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function Cd(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(gt(t,e))return;r.uniform2uiv(this.addr,e),_t(t,e)}}function Ld(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(gt(t,e))return;r.uniform3uiv(this.addr,e),_t(t,e)}}function Pd(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(gt(t,e))return;r.uniform4uiv(this.addr,e),_t(t,e)}}function Dd(r,e,t){const i=this.cache,a=t.allocateTextureUnit();i[0]!==a&&(r.uniform1i(this.addr,a),i[0]=a);const n=this.type===r.SAMPLER_2D_SHADOW?No:Io;t.setTexture2D(e||n,a)}function Ud(r,e,t){const i=this.cache,a=t.allocateTextureUnit();i[0]!==a&&(r.uniform1i(this.addr,a),i[0]=a),t.setTexture3D(e||Fo,a)}function Id(r,e,t){const i=this.cache,a=t.allocateTextureUnit();i[0]!==a&&(r.uniform1i(this.addr,a),i[0]=a),t.setTextureCube(e||zo,a)}function Nd(r,e,t){const i=this.cache,a=t.allocateTextureUnit();i[0]!==a&&(r.uniform1i(this.addr,a),i[0]=a),t.setTexture2DArray(e||Oo,a)}function Od(r){switch(r){case 5126:return _d;case 35664:return vd;case 35665:return xd;case 35666:return Md;case 35674:return Sd;case 35675:return Ed;case 35676:return yd;case 5124:case 35670:return Td;case 35667:case 35671:return bd;case 35668:case 35672:return wd;case 35669:case 35673:return Ad;case 5125:return Rd;case 36294:return Cd;case 36295:return Ld;case 36296:return Pd;case 35678:case 36198:case 36298:case 36306:case 35682:return Dd;case 35679:case 36299:case 36307:return Ud;case 35680:case 36300:case 36308:case 36293:return Id;case 36289:case 36303:case 36311:case 36292:return Nd}}function Fd(r,e){r.uniform1fv(this.addr,e)}function zd(r,e){const t=Mr(e,this.size,2);r.uniform2fv(this.addr,t)}function Bd(r,e){const t=Mr(e,this.size,3);r.uniform3fv(this.addr,t)}function Gd(r,e){const t=Mr(e,this.size,4);r.uniform4fv(this.addr,t)}function Hd(r,e){const t=Mr(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function Vd(r,e){const t=Mr(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function kd(r,e){const t=Mr(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function Wd(r,e){r.uniform1iv(this.addr,e)}function Xd(r,e){r.uniform2iv(this.addr,e)}function jd(r,e){r.uniform3iv(this.addr,e)}function qd(r,e){r.uniform4iv(this.addr,e)}function Yd(r,e){r.uniform1uiv(this.addr,e)}function Kd(r,e){r.uniform2uiv(this.addr,e)}function Zd(r,e){r.uniform3uiv(this.addr,e)}function Jd(r,e){r.uniform4uiv(this.addr,e)}function $d(r,e,t){const i=this.cache,a=e.length,n=xa(t,a);gt(i,n)||(r.uniform1iv(this.addr,n),_t(i,n));for(let l=0;l!==a;++l)t.setTexture2D(e[l]||Io,n[l])}function Qd(r,e,t){const i=this.cache,a=e.length,n=xa(t,a);gt(i,n)||(r.uniform1iv(this.addr,n),_t(i,n));for(let l=0;l!==a;++l)t.setTexture3D(e[l]||Fo,n[l])}function ep(r,e,t){const i=this.cache,a=e.length,n=xa(t,a);gt(i,n)||(r.uniform1iv(this.addr,n),_t(i,n));for(let l=0;l!==a;++l)t.setTextureCube(e[l]||zo,n[l])}function tp(r,e,t){const i=this.cache,a=e.length,n=xa(t,a);gt(i,n)||(r.uniform1iv(this.addr,n),_t(i,n));for(let l=0;l!==a;++l)t.setTexture2DArray(e[l]||Oo,n[l])}function ip(r){switch(r){case 5126:return Fd;case 35664:return zd;case 35665:return Bd;case 35666:return Gd;case 35674:return Hd;case 35675:return Vd;case 35676:return kd;case 5124:case 35670:return Wd;case 35667:case 35671:return Xd;case 35668:case 35672:return jd;case 35669:case 35673:return qd;case 5125:return Yd;case 36294:return Kd;case 36295:return Zd;case 36296:return Jd;case 35678:case 36198:case 36298:case 36306:case 35682:return $d;case 35679:case 36299:case 36307:return Qd;case 35680:case 36300:case 36308:case 36293:return ep;case 36289:case 36303:case 36311:case 36292:return tp}}class rp{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Od(t.type)}}class ap{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=ip(t.type)}}class np{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const a=this.seq;for(let n=0,l=a.length;n!==l;++n){const s=a[n];s.setValue(e,t[s.id],i)}}}const an=/(\w+)(\])?(\[|\.)?/g;function Ys(r,e){r.seq.push(e),r.map[e.id]=e}function sp(r,e,t){const i=r.name,a=i.length;for(an.lastIndex=0;;){const n=an.exec(i),l=an.lastIndex;let s=n[1];const o=n[2]==="]",c=n[3];if(o&&(s=s|0),c===void 0||c==="["&&l+2===a){Ys(t,c===void 0?new rp(s,r,e):new ap(s,r,e));break}else{let u=t.map[s];u===void 0&&(u=new np(s),Ys(t,u)),t=u}}}class la{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const n=e.getActiveUniform(t,a),l=e.getUniformLocation(t,n.name);sp(n,l,this)}}setValue(e,t,i,a){const n=this.map[t];n!==void 0&&n.setValue(e,i,a)}setOptional(e,t,i){const a=t[i];a!==void 0&&this.setValue(e,i,a)}static upload(e,t,i,a){for(let n=0,l=t.length;n!==l;++n){const s=t[n],o=i[s.id];o.needsUpdate!==!1&&s.setValue(e,o.value,a)}}static seqWithValue(e,t){const i=[];for(let a=0,n=e.length;a!==n;++a){const l=e[a];l.id in t&&i.push(l)}return i}}function Ks(r,e,t){const i=r.createShader(e);return r.shaderSource(i,t),r.compileShader(i),i}const op=37297;let lp=0;function cp(r,e){const t=r.split(`
`),i=[],a=Math.max(e-6,0),n=Math.min(e+6,t.length);for(let l=a;l<n;l++){const s=l+1;i.push(`${s===e?">":" "} ${s}: ${t[l]}`)}return i.join(`
`)}function up(r){const e=Ke.getPrimaries(Ke.workingColorSpace),t=Ke.getPrimaries(r);let i;switch(e===t?i="":e===da&&t===ha?i="LinearDisplayP3ToLinearSRGB":e===ha&&t===da&&(i="LinearSRGBToLinearDisplayP3"),r){case pi:case _a:return[i,"LinearTransferOETF"];case Mt:case yn:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",r),[i,"LinearTransferOETF"]}}function Zs(r,e,t){const i=r.getShaderParameter(e,r.COMPILE_STATUS),a=r.getShaderInfoLog(e).trim();if(i&&a==="")return"";const n=/ERROR: 0:(\d+)/.exec(a);if(n){const l=parseInt(n[1]);return t.toUpperCase()+`

`+a+`

`+cp(r.getShaderSource(e),l)}else return a}function hp(r,e){const t=up(e);return`vec4 ${r}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function dp(r,e){let t;switch(e){case El:t="Linear";break;case yl:t="Reinhard";break;case Tl:t="OptimizedCineon";break;case bl:t="ACESFilmic";break;case Al:t="AgX";break;case wl:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function pp(r){return[r.extensionDerivatives||r.envMapCubeUVHeight||r.bumpMap||r.normalMapTangentSpace||r.clearcoatNormalMap||r.flatShading||r.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(r.extensionFragDepth||r.logarithmicDepthBuffer)&&r.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",r.extensionDrawBuffers&&r.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(r.extensionShaderTextureLOD||r.envMap||r.transmission)&&r.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(hr).join(`
`)}function fp(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(hr).join(`
`)}function mp(r){const e=[];for(const t in r){const i=r[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function gp(r,e){const t={},i=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let a=0;a<i;a++){const n=r.getActiveAttrib(e,a),l=n.name;let s=1;n.type===r.FLOAT_MAT2&&(s=2),n.type===r.FLOAT_MAT3&&(s=3),n.type===r.FLOAT_MAT4&&(s=4),t[l]={type:n.type,location:r.getAttribLocation(e,l),locationSize:s}}return t}function hr(r){return r!==""}function Js(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function $s(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const _p=/^[ \t]*#include +<([\w\d./]+)>/gm;function vn(r){return r.replace(_p,xp)}const vp=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function xp(r,e){let t=Ie[e];if(t===void 0){const i=vp.get(e);if(i!==void 0)t=Ie[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return vn(t)}const Mp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Qs(r){return r.replace(Mp,Sp)}function Sp(r,e,t,i){let a="";for(let n=parseInt(e);n<parseInt(t);n++)a+=i.replace(/\[\s*i\s*\]/g,"[ "+n+" ]").replace(/UNROLLED_LOOP_INDEX/g,n);return a}function eo(r){let e="precision "+r.precision+` float;
precision `+r.precision+" int;";return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Ep(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===lo?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===Zo?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===ui&&(e="SHADOWMAP_TYPE_VSM"),e}function yp(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case fr:case mr:e="ENVMAP_TYPE_CUBE";break;case ga:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Tp(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case mr:e="ENVMAP_MODE_REFRACTION";break}return e}function bp(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Mn:e="ENVMAP_BLENDING_MULTIPLY";break;case Ml:e="ENVMAP_BLENDING_MIX";break;case Sl:e="ENVMAP_BLENDING_ADD";break}return e}function wp(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function Ap(r,e,t,i){const a=r.getContext(),n=t.defines;let l=t.vertexShader,s=t.fragmentShader;const o=Ep(t),c=yp(t),u=Tp(t),h=bp(t),p=wp(t),f=t.isWebGL2?"":pp(t),g=fp(t),_=mp(n),m=a.createProgram();let d,y,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(hr).join(`
`),d.length>0&&(d+=`
`),y=[f,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(hr).join(`
`),y.length>0&&(y+=`
`)):(d=[eo(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+o:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(hr).join(`
`),y=[f,eo(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+o:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==wi?"#define TONE_MAPPING":"",t.toneMapping!==wi?Ie.tonemapping_pars_fragment:"",t.toneMapping!==wi?dp("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ie.colorspace_pars_fragment,hp("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(hr).join(`
`)),l=vn(l),l=Js(l,t),l=$s(l,t),s=vn(s),s=Js(s,t),s=$s(s,t),l=Qs(l),s=Qs(s),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,d=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,y=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===vs?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===vs?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const b=x+d+l,P=x+y+s,w=Ks(a,a.VERTEX_SHADER,b),A=Ks(a,a.FRAGMENT_SHADER,P);a.attachShader(m,w),a.attachShader(m,A),t.index0AttributeName!==void 0?a.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&a.bindAttribLocation(m,0,"position"),a.linkProgram(m);function W(z){if(r.debug.checkShaderErrors){const ee=a.getProgramInfoLog(m).trim(),L=a.getShaderInfoLog(w).trim(),U=a.getShaderInfoLog(A).trim();let V=!0,j=!0;if(a.getProgramParameter(m,a.LINK_STATUS)===!1)if(V=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(a,m,w,A);else{const X=Zs(a,w,"vertex"),k=Zs(a,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(m,a.VALIDATE_STATUS)+`

Program Info Log: `+ee+`
`+X+`
`+k)}else ee!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ee):(L===""||U==="")&&(j=!1);j&&(z.diagnostics={runnable:V,programLog:ee,vertexShader:{log:L,prefix:d},fragmentShader:{log:U,prefix:y}})}a.deleteShader(w),a.deleteShader(A),S=new la(a,m),T=gp(a,m)}let S;this.getUniforms=function(){return S===void 0&&W(this),S};let T;this.getAttributes=function(){return T===void 0&&W(this),T};let H=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return H===!1&&(H=a.getProgramParameter(m,op)),H},this.destroy=function(){i.releaseStatesOfProgram(this),a.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=lp++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=w,this.fragmentShader=A,this}let Rp=0;class Cp{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,a=this._getShaderStage(t),n=this._getShaderStage(i),l=this._getShaderCacheForMaterial(e);return l.has(a)===!1&&(l.add(a),a.usedTimes++),l.has(n)===!1&&(l.add(n),n.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new Lp(e),t.set(e,i)),i}}class Lp{constructor(e){this.id=Rp++,this.code=e,this.usedTimes=0}}function Pp(r,e,t,i,a,n,l){const s=new To,o=new Cp,c=[],u=a.isWebGL2,h=a.logarithmicDepthBuffer,p=a.vertexTextures;let f=a.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(S){return S===0?"uv":`uv${S}`}function m(S,T,H,z,ee){const L=z.fog,U=ee.geometry,V=S.isMeshStandardMaterial?z.environment:null,j=(S.isMeshStandardMaterial?t:e).get(S.envMap||V),X=j&&j.mapping===ga?j.image.height:null,k=g[S.type];S.precision!==null&&(f=a.getMaxPrecision(S.precision),f!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",f,"instead."));const Y=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,J=Y!==void 0?Y.length:0;let le=0;U.morphAttributes.position!==void 0&&(le=1),U.morphAttributes.normal!==void 0&&(le=2),U.morphAttributes.color!==void 0&&(le=3);let B,q,pe,_e;if(k){const ct=ii[k];B=ct.vertexShader,q=ct.fragmentShader}else B=S.vertexShader,q=S.fragmentShader,o.update(S),pe=o.getVertexShaderID(S),_e=o.getFragmentShaderID(S);const ge=r.getRenderTarget(),Pe=ee.isInstancedMesh===!0,De=ee.isBatchedMesh===!0,be=!!S.map,je=!!S.matcap,O=!!j,Ct=!!S.aoMap,Se=!!S.lightMap,Ce=!!S.bumpMap,fe=!!S.normalMap,rt=!!S.displacementMap,Oe=!!S.emissiveMap,E=!!S.metalnessMap,v=!!S.roughnessMap,N=S.anisotropy>0,Q=S.clearcoat>0,Z=S.iridescence>0,$=S.sheen>0,me=S.transmission>0,se=N&&!!S.anisotropyMap,he=Q&&!!S.clearcoatMap,ye=Q&&!!S.clearcoatNormalMap,Fe=Q&&!!S.clearcoatRoughnessMap,K=Z&&!!S.iridescenceMap,Ye=Z&&!!S.iridescenceThicknessMap,ke=$&&!!S.sheenColorMap,Re=$&&!!S.sheenRoughnessMap,xe=!!S.specularMap,de=!!S.specularColorMap,Ue=!!S.specularIntensityMap,qe=me&&!!S.transmissionMap,nt=me&&!!S.thicknessMap,Ge=!!S.gradientMap,ie=!!S.alphaMap,R=S.alphaTest>0,re=!!S.alphaHash,oe=!!S.extensions,Le=!!U.attributes.uv1,Ee=!!U.attributes.uv2,Ze=!!U.attributes.uv3;let Je=wi;return S.toneMapped&&(ge===null||ge.isXRRenderTarget===!0)&&(Je=r.toneMapping),{isWebGL2:u,shaderID:k,shaderType:S.type,shaderName:S.name,vertexShader:B,fragmentShader:q,defines:S.defines,customVertexShaderID:pe,customFragmentShaderID:_e,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:f,batching:De,instancing:Pe,instancingColor:Pe&&ee.instanceColor!==null,supportsVertexTextures:p,outputColorSpace:ge===null?r.outputColorSpace:ge.isXRRenderTarget===!0?ge.texture.colorSpace:pi,map:be,matcap:je,envMap:O,envMapMode:O&&j.mapping,envMapCubeUVHeight:X,aoMap:Ct,lightMap:Se,bumpMap:Ce,normalMap:fe,displacementMap:p&&rt,emissiveMap:Oe,normalMapObjectSpace:fe&&S.normalMapType===Bl,normalMapTangentSpace:fe&&S.normalMapType===En,metalnessMap:E,roughnessMap:v,anisotropy:N,anisotropyMap:se,clearcoat:Q,clearcoatMap:he,clearcoatNormalMap:ye,clearcoatRoughnessMap:Fe,iridescence:Z,iridescenceMap:K,iridescenceThicknessMap:Ye,sheen:$,sheenColorMap:ke,sheenRoughnessMap:Re,specularMap:xe,specularColorMap:de,specularIntensityMap:Ue,transmission:me,transmissionMap:qe,thicknessMap:nt,gradientMap:Ge,opaque:S.transparent===!1&&S.blending===dr,alphaMap:ie,alphaTest:R,alphaHash:re,combine:S.combine,mapUv:be&&_(S.map.channel),aoMapUv:Ct&&_(S.aoMap.channel),lightMapUv:Se&&_(S.lightMap.channel),bumpMapUv:Ce&&_(S.bumpMap.channel),normalMapUv:fe&&_(S.normalMap.channel),displacementMapUv:rt&&_(S.displacementMap.channel),emissiveMapUv:Oe&&_(S.emissiveMap.channel),metalnessMapUv:E&&_(S.metalnessMap.channel),roughnessMapUv:v&&_(S.roughnessMap.channel),anisotropyMapUv:se&&_(S.anisotropyMap.channel),clearcoatMapUv:he&&_(S.clearcoatMap.channel),clearcoatNormalMapUv:ye&&_(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Fe&&_(S.clearcoatRoughnessMap.channel),iridescenceMapUv:K&&_(S.iridescenceMap.channel),iridescenceThicknessMapUv:Ye&&_(S.iridescenceThicknessMap.channel),sheenColorMapUv:ke&&_(S.sheenColorMap.channel),sheenRoughnessMapUv:Re&&_(S.sheenRoughnessMap.channel),specularMapUv:xe&&_(S.specularMap.channel),specularColorMapUv:de&&_(S.specularColorMap.channel),specularIntensityMapUv:Ue&&_(S.specularIntensityMap.channel),transmissionMapUv:qe&&_(S.transmissionMap.channel),thicknessMapUv:nt&&_(S.thicknessMap.channel),alphaMapUv:ie&&_(S.alphaMap.channel),vertexTangents:!!U.attributes.tangent&&(fe||N),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,vertexUv1s:Le,vertexUv2s:Ee,vertexUv3s:Ze,pointsUvs:ee.isPoints===!0&&!!U.attributes.uv&&(be||ie),fog:!!L,useFog:S.fog===!0,fogExp2:L&&L.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:ee.isSkinnedMesh===!0,morphTargets:U.morphAttributes.position!==void 0,morphNormals:U.morphAttributes.normal!==void 0,morphColors:U.morphAttributes.color!==void 0,morphTargetsCount:J,morphTextureStride:le,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:l.numPlanes,numClipIntersection:l.numIntersection,dithering:S.dithering,shadowMapEnabled:r.shadowMap.enabled&&H.length>0,shadowMapType:r.shadowMap.type,toneMapping:Je,useLegacyLights:r._useLegacyLights,decodeVideoTexture:be&&S.map.isVideoTexture===!0&&Ke.getTransfer(S.map.colorSpace)===et,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===at,flipSided:S.side===Nt,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionDerivatives:oe&&S.extensions.derivatives===!0,extensionFragDepth:oe&&S.extensions.fragDepth===!0,extensionDrawBuffers:oe&&S.extensions.drawBuffers===!0,extensionShaderTextureLOD:oe&&S.extensions.shaderTextureLOD===!0,extensionClipCullDistance:oe&&S.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:u||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()}}function d(S){const T=[];if(S.shaderID?T.push(S.shaderID):(T.push(S.customVertexShaderID),T.push(S.customFragmentShaderID)),S.defines!==void 0)for(const H in S.defines)T.push(H),T.push(S.defines[H]);return S.isRawShaderMaterial===!1&&(y(T,S),x(T,S),T.push(r.outputColorSpace)),T.push(S.customProgramCacheKey),T.join()}function y(S,T){S.push(T.precision),S.push(T.outputColorSpace),S.push(T.envMapMode),S.push(T.envMapCubeUVHeight),S.push(T.mapUv),S.push(T.alphaMapUv),S.push(T.lightMapUv),S.push(T.aoMapUv),S.push(T.bumpMapUv),S.push(T.normalMapUv),S.push(T.displacementMapUv),S.push(T.emissiveMapUv),S.push(T.metalnessMapUv),S.push(T.roughnessMapUv),S.push(T.anisotropyMapUv),S.push(T.clearcoatMapUv),S.push(T.clearcoatNormalMapUv),S.push(T.clearcoatRoughnessMapUv),S.push(T.iridescenceMapUv),S.push(T.iridescenceThicknessMapUv),S.push(T.sheenColorMapUv),S.push(T.sheenRoughnessMapUv),S.push(T.specularMapUv),S.push(T.specularColorMapUv),S.push(T.specularIntensityMapUv),S.push(T.transmissionMapUv),S.push(T.thicknessMapUv),S.push(T.combine),S.push(T.fogExp2),S.push(T.sizeAttenuation),S.push(T.morphTargetsCount),S.push(T.morphAttributeCount),S.push(T.numDirLights),S.push(T.numPointLights),S.push(T.numSpotLights),S.push(T.numSpotLightMaps),S.push(T.numHemiLights),S.push(T.numRectAreaLights),S.push(T.numDirLightShadows),S.push(T.numPointLightShadows),S.push(T.numSpotLightShadows),S.push(T.numSpotLightShadowsWithMaps),S.push(T.numLightProbes),S.push(T.shadowMapType),S.push(T.toneMapping),S.push(T.numClippingPlanes),S.push(T.numClipIntersection),S.push(T.depthPacking)}function x(S,T){s.disableAll(),T.isWebGL2&&s.enable(0),T.supportsVertexTextures&&s.enable(1),T.instancing&&s.enable(2),T.instancingColor&&s.enable(3),T.matcap&&s.enable(4),T.envMap&&s.enable(5),T.normalMapObjectSpace&&s.enable(6),T.normalMapTangentSpace&&s.enable(7),T.clearcoat&&s.enable(8),T.iridescence&&s.enable(9),T.alphaTest&&s.enable(10),T.vertexColors&&s.enable(11),T.vertexAlphas&&s.enable(12),T.vertexUv1s&&s.enable(13),T.vertexUv2s&&s.enable(14),T.vertexUv3s&&s.enable(15),T.vertexTangents&&s.enable(16),T.anisotropy&&s.enable(17),T.alphaHash&&s.enable(18),T.batching&&s.enable(19),S.push(s.mask),s.disableAll(),T.fog&&s.enable(0),T.useFog&&s.enable(1),T.flatShading&&s.enable(2),T.logarithmicDepthBuffer&&s.enable(3),T.skinning&&s.enable(4),T.morphTargets&&s.enable(5),T.morphNormals&&s.enable(6),T.morphColors&&s.enable(7),T.premultipliedAlpha&&s.enable(8),T.shadowMapEnabled&&s.enable(9),T.useLegacyLights&&s.enable(10),T.doubleSided&&s.enable(11),T.flipSided&&s.enable(12),T.useDepthPacking&&s.enable(13),T.dithering&&s.enable(14),T.transmission&&s.enable(15),T.sheen&&s.enable(16),T.opaque&&s.enable(17),T.pointsUvs&&s.enable(18),T.decodeVideoTexture&&s.enable(19),S.push(s.mask)}function b(S){const T=g[S.type];let H;if(T){const z=ii[T];H=pc.clone(z.uniforms)}else H=S.uniforms;return H}function P(S,T){let H;for(let z=0,ee=c.length;z<ee;z++){const L=c[z];if(L.cacheKey===T){H=L,++H.usedTimes;break}}return H===void 0&&(H=new Ap(r,T,S,n),c.push(H)),H}function w(S){if(--S.usedTimes===0){const T=c.indexOf(S);c[T]=c[c.length-1],c.pop(),S.destroy()}}function A(S){o.remove(S)}function W(){o.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:b,acquireProgram:P,releaseProgram:w,releaseShaderCache:A,programs:c,dispose:W}}function Dp(){let r=new WeakMap;function e(n){let l=r.get(n);return l===void 0&&(l={},r.set(n,l)),l}function t(n){r.delete(n)}function i(n,l,s){r.get(n)[l]=s}function a(){r=new WeakMap}return{get:e,remove:t,update:i,dispose:a}}function Up(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function to(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function io(){const r=[];let e=0;const t=[],i=[],a=[];function n(){e=0,t.length=0,i.length=0,a.length=0}function l(h,p,f,g,_,m){let d=r[e];return d===void 0?(d={id:h.id,object:h,geometry:p,material:f,groupOrder:g,renderOrder:h.renderOrder,z:_,group:m},r[e]=d):(d.id=h.id,d.object=h,d.geometry=p,d.material=f,d.groupOrder=g,d.renderOrder=h.renderOrder,d.z=_,d.group=m),e++,d}function s(h,p,f,g,_,m){const d=l(h,p,f,g,_,m);f.transmission>0?i.push(d):f.transparent===!0?a.push(d):t.push(d)}function o(h,p,f,g,_,m){const d=l(h,p,f,g,_,m);f.transmission>0?i.unshift(d):f.transparent===!0?a.unshift(d):t.unshift(d)}function c(h,p){t.length>1&&t.sort(h||Up),i.length>1&&i.sort(p||to),a.length>1&&a.sort(p||to)}function u(){for(let h=e,p=r.length;h<p;h++){const f=r[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:i,transparent:a,init:n,push:s,unshift:o,finish:u,sort:c}}function Ip(){let r=new WeakMap;function e(i,a){const n=r.get(i);let l;return n===void 0?(l=new io,r.set(i,[l])):a>=n.length?(l=new io,n.push(l)):l=n[a],l}function t(){r=new WeakMap}return{get:e,dispose:t}}function Np(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new C,color:new Xe};break;case"SpotLight":t={position:new C,direction:new C,color:new Xe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new C,color:new Xe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new C,skyColor:new Xe,groundColor:new Xe};break;case"RectAreaLight":t={color:new Xe,position:new C,halfWidth:new C,halfHeight:new C};break}return r[e.id]=t,t}}}function Op(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let Fp=0;function zp(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function Bp(r,e){const t=new Np,i=Op(),a={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)a.probe.push(new C);const n=new C,l=new pt,s=new pt;function o(u,h){let p=0,f=0,g=0;for(let z=0;z<9;z++)a.probe[z].set(0,0,0);let _=0,m=0,d=0,y=0,x=0,b=0,P=0,w=0,A=0,W=0,S=0;u.sort(zp);const T=h===!0?Math.PI:1;for(let z=0,ee=u.length;z<ee;z++){const L=u[z],U=L.color,V=L.intensity,j=L.distance,X=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)p+=U.r*V*T,f+=U.g*V*T,g+=U.b*V*T;else if(L.isLightProbe){for(let k=0;k<9;k++)a.probe[k].addScaledVector(L.sh.coefficients[k],V);S++}else if(L.isDirectionalLight){const k=t.get(L);if(k.color.copy(L.color).multiplyScalar(L.intensity*T),L.castShadow){const Y=L.shadow,J=i.get(L);J.shadowBias=Y.bias,J.shadowNormalBias=Y.normalBias,J.shadowRadius=Y.radius,J.shadowMapSize=Y.mapSize,a.directionalShadow[_]=J,a.directionalShadowMap[_]=X,a.directionalShadowMatrix[_]=L.shadow.matrix,b++}a.directional[_]=k,_++}else if(L.isSpotLight){const k=t.get(L);k.position.setFromMatrixPosition(L.matrixWorld),k.color.copy(U).multiplyScalar(V*T),k.distance=j,k.coneCos=Math.cos(L.angle),k.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),k.decay=L.decay,a.spot[d]=k;const Y=L.shadow;if(L.map&&(a.spotLightMap[A]=L.map,A++,Y.updateMatrices(L),L.castShadow&&W++),a.spotLightMatrix[d]=Y.matrix,L.castShadow){const J=i.get(L);J.shadowBias=Y.bias,J.shadowNormalBias=Y.normalBias,J.shadowRadius=Y.radius,J.shadowMapSize=Y.mapSize,a.spotShadow[d]=J,a.spotShadowMap[d]=X,w++}d++}else if(L.isRectAreaLight){const k=t.get(L);k.color.copy(U).multiplyScalar(V),k.halfWidth.set(L.width*.5,0,0),k.halfHeight.set(0,L.height*.5,0),a.rectArea[y]=k,y++}else if(L.isPointLight){const k=t.get(L);if(k.color.copy(L.color).multiplyScalar(L.intensity*T),k.distance=L.distance,k.decay=L.decay,L.castShadow){const Y=L.shadow,J=i.get(L);J.shadowBias=Y.bias,J.shadowNormalBias=Y.normalBias,J.shadowRadius=Y.radius,J.shadowMapSize=Y.mapSize,J.shadowCameraNear=Y.camera.near,J.shadowCameraFar=Y.camera.far,a.pointShadow[m]=J,a.pointShadowMap[m]=X,a.pointShadowMatrix[m]=L.shadow.matrix,P++}a.point[m]=k,m++}else if(L.isHemisphereLight){const k=t.get(L);k.skyColor.copy(L.color).multiplyScalar(V*T),k.groundColor.copy(L.groundColor).multiplyScalar(V*T),a.hemi[x]=k,x++}}y>0&&(e.isWebGL2?r.has("OES_texture_float_linear")===!0?(a.rectAreaLTC1=ae.LTC_FLOAT_1,a.rectAreaLTC2=ae.LTC_FLOAT_2):(a.rectAreaLTC1=ae.LTC_HALF_1,a.rectAreaLTC2=ae.LTC_HALF_2):r.has("OES_texture_float_linear")===!0?(a.rectAreaLTC1=ae.LTC_FLOAT_1,a.rectAreaLTC2=ae.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(a.rectAreaLTC1=ae.LTC_HALF_1,a.rectAreaLTC2=ae.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),a.ambient[0]=p,a.ambient[1]=f,a.ambient[2]=g;const H=a.hash;(H.directionalLength!==_||H.pointLength!==m||H.spotLength!==d||H.rectAreaLength!==y||H.hemiLength!==x||H.numDirectionalShadows!==b||H.numPointShadows!==P||H.numSpotShadows!==w||H.numSpotMaps!==A||H.numLightProbes!==S)&&(a.directional.length=_,a.spot.length=d,a.rectArea.length=y,a.point.length=m,a.hemi.length=x,a.directionalShadow.length=b,a.directionalShadowMap.length=b,a.pointShadow.length=P,a.pointShadowMap.length=P,a.spotShadow.length=w,a.spotShadowMap.length=w,a.directionalShadowMatrix.length=b,a.pointShadowMatrix.length=P,a.spotLightMatrix.length=w+A-W,a.spotLightMap.length=A,a.numSpotLightShadowsWithMaps=W,a.numLightProbes=S,H.directionalLength=_,H.pointLength=m,H.spotLength=d,H.rectAreaLength=y,H.hemiLength=x,H.numDirectionalShadows=b,H.numPointShadows=P,H.numSpotShadows=w,H.numSpotMaps=A,H.numLightProbes=S,a.version=Fp++)}function c(u,h){let p=0,f=0,g=0,_=0,m=0;const d=h.matrixWorldInverse;for(let y=0,x=u.length;y<x;y++){const b=u[y];if(b.isDirectionalLight){const P=a.directional[p];P.direction.setFromMatrixPosition(b.matrixWorld),n.setFromMatrixPosition(b.target.matrixWorld),P.direction.sub(n),P.direction.transformDirection(d),p++}else if(b.isSpotLight){const P=a.spot[g];P.position.setFromMatrixPosition(b.matrixWorld),P.position.applyMatrix4(d),P.direction.setFromMatrixPosition(b.matrixWorld),n.setFromMatrixPosition(b.target.matrixWorld),P.direction.sub(n),P.direction.transformDirection(d),g++}else if(b.isRectAreaLight){const P=a.rectArea[_];P.position.setFromMatrixPosition(b.matrixWorld),P.position.applyMatrix4(d),s.identity(),l.copy(b.matrixWorld),l.premultiply(d),s.extractRotation(l),P.halfWidth.set(b.width*.5,0,0),P.halfHeight.set(0,b.height*.5,0),P.halfWidth.applyMatrix4(s),P.halfHeight.applyMatrix4(s),_++}else if(b.isPointLight){const P=a.point[f];P.position.setFromMatrixPosition(b.matrixWorld),P.position.applyMatrix4(d),f++}else if(b.isHemisphereLight){const P=a.hemi[m];P.direction.setFromMatrixPosition(b.matrixWorld),P.direction.transformDirection(d),m++}}}return{setup:o,setupView:c,state:a}}function ro(r,e){const t=new Bp(r,e),i=[],a=[];function n(){i.length=0,a.length=0}function l(u){i.push(u)}function s(u){a.push(u)}function o(u){t.setup(i,u)}function c(u){t.setupView(i,u)}return{init:n,state:{lightsArray:i,shadowsArray:a,lights:t},setupLights:o,setupLightsView:c,pushLight:l,pushShadow:s}}function Gp(r,e){let t=new WeakMap;function i(n,l=0){const s=t.get(n);let o;return s===void 0?(o=new ro(r,e),t.set(n,[o])):l>=s.length?(o=new ro(r,e),s.push(o)):o=s[l],o}function a(){t=new WeakMap}return{get:i,dispose:a}}class Hp extends xr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Fl,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Vp extends xr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const kp=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Wp=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Xp(r,e,t){let i=new bn;const a=new Ae,n=new Ae,l=new it,s=new Hp({depthPacking:zl}),o=new Vp,c={},u=t.maxTextureSize,h={[Ri]:Nt,[Nt]:Ri,[at]:at},p=new Ci({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ae},radius:{value:4}},vertexShader:kp,fragmentShader:Wp}),f=p.clone();f.defines.HORIZONTAL_PASS=1;const g=new Yt;g.setAttribute("position",new ri(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new ue(g,p),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=lo;let d=this.type;this.render=function(w,A,W){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;const S=r.getRenderTarget(),T=r.getActiveCubeFace(),H=r.getActiveMipmapLevel(),z=r.state;z.setBlending(bi),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const ee=d!==ui&&this.type===ui,L=d===ui&&this.type!==ui;for(let U=0,V=w.length;U<V;U++){const j=w[U],X=j.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;a.copy(X.mapSize);const k=X.getFrameExtents();if(a.multiply(k),n.copy(X.mapSize),(a.x>u||a.y>u)&&(a.x>u&&(n.x=Math.floor(u/k.x),a.x=n.x*k.x,X.mapSize.x=n.x),a.y>u&&(n.y=Math.floor(u/k.y),a.y=n.y*k.y,X.mapSize.y=n.y)),X.map===null||ee===!0||L===!0){const J=this.type!==ui?{minFilter:Dt,magFilter:Dt}:{};X.map!==null&&X.map.dispose(),X.map=new Xi(a.x,a.y,J),X.map.texture.name=j.name+".shadowMap",X.camera.updateProjectionMatrix()}r.setRenderTarget(X.map),r.clear();const Y=X.getViewportCount();for(let J=0;J<Y;J++){const le=X.getViewport(J);l.set(n.x*le.x,n.y*le.y,n.x*le.z,n.y*le.w),z.viewport(l),X.updateMatrices(j,J),i=X.getFrustum(),b(A,W,X.camera,j,this.type)}X.isPointLightShadow!==!0&&this.type===ui&&y(X,W),X.needsUpdate=!1}d=this.type,m.needsUpdate=!1,r.setRenderTarget(S,T,H)};function y(w,A){const W=e.update(_);p.defines.VSM_SAMPLES!==w.blurSamples&&(p.defines.VSM_SAMPLES=w.blurSamples,f.defines.VSM_SAMPLES=w.blurSamples,p.needsUpdate=!0,f.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Xi(a.x,a.y)),p.uniforms.shadow_pass.value=w.map.texture,p.uniforms.resolution.value=w.mapSize,p.uniforms.radius.value=w.radius,r.setRenderTarget(w.mapPass),r.clear(),r.renderBufferDirect(A,null,W,p,_,null),f.uniforms.shadow_pass.value=w.mapPass.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,r.setRenderTarget(w.map),r.clear(),r.renderBufferDirect(A,null,W,f,_,null)}function x(w,A,W,S){let T=null;const H=W.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(H!==void 0)T=H;else if(T=W.isPointLight===!0?o:s,r.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const z=T.uuid,ee=A.uuid;let L=c[z];L===void 0&&(L={},c[z]=L);let U=L[ee];U===void 0&&(U=T.clone(),L[ee]=U,A.addEventListener("dispose",P)),T=U}if(T.visible=A.visible,T.wireframe=A.wireframe,S===ui?T.side=A.shadowSide!==null?A.shadowSide:A.side:T.side=A.shadowSide!==null?A.shadowSide:h[A.side],T.alphaMap=A.alphaMap,T.alphaTest=A.alphaTest,T.map=A.map,T.clipShadows=A.clipShadows,T.clippingPlanes=A.clippingPlanes,T.clipIntersection=A.clipIntersection,T.displacementMap=A.displacementMap,T.displacementScale=A.displacementScale,T.displacementBias=A.displacementBias,T.wireframeLinewidth=A.wireframeLinewidth,T.linewidth=A.linewidth,W.isPointLight===!0&&T.isMeshDistanceMaterial===!0){const z=r.properties.get(T);z.light=W}return T}function b(w,A,W,S,T){if(w.visible===!1)return;if(w.layers.test(A.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&T===ui)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,w.matrixWorld);const z=e.update(w),ee=w.material;if(Array.isArray(ee)){const L=z.groups;for(let U=0,V=L.length;U<V;U++){const j=L[U],X=ee[j.materialIndex];if(X&&X.visible){const k=x(w,X,S,T);w.onBeforeShadow(r,w,A,W,z,k,j),r.renderBufferDirect(W,null,z,k,w,j),w.onAfterShadow(r,w,A,W,z,k,j)}}}else if(ee.visible){const L=x(w,ee,S,T);w.onBeforeShadow(r,w,A,W,z,L,null),r.renderBufferDirect(W,null,z,L,w,null),w.onAfterShadow(r,w,A,W,z,L,null)}}const H=w.children;for(let z=0,ee=H.length;z<ee;z++)b(H[z],A,W,S,T)}function P(w){w.target.removeEventListener("dispose",P);for(const A in c){const W=c[A],S=w.target.uuid;S in W&&(W[S].dispose(),delete W[S])}}}function jp(r,e,t){const i=t.isWebGL2;function a(){let R=!1;const re=new it;let oe=null;const Le=new it(0,0,0,0);return{setMask:function(Ee){oe!==Ee&&!R&&(r.colorMask(Ee,Ee,Ee,Ee),oe=Ee)},setLocked:function(Ee){R=Ee},setClear:function(Ee,Ze,Je,ct,Vt){Vt===!0&&(Ee*=ct,Ze*=ct,Je*=ct),re.set(Ee,Ze,Je,ct),Le.equals(re)===!1&&(r.clearColor(Ee,Ze,Je,ct),Le.copy(re))},reset:function(){R=!1,oe=null,Le.set(-1,0,0,0)}}}function n(){let R=!1,re=null,oe=null,Le=null;return{setTest:function(Ee){Ee?De(r.DEPTH_TEST):be(r.DEPTH_TEST)},setMask:function(Ee){re!==Ee&&!R&&(r.depthMask(Ee),re=Ee)},setFunc:function(Ee){if(oe!==Ee){switch(Ee){case pl:r.depthFunc(r.NEVER);break;case fl:r.depthFunc(r.ALWAYS);break;case ml:r.depthFunc(r.LESS);break;case ca:r.depthFunc(r.LEQUAL);break;case gl:r.depthFunc(r.EQUAL);break;case _l:r.depthFunc(r.GEQUAL);break;case vl:r.depthFunc(r.GREATER);break;case xl:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}oe=Ee}},setLocked:function(Ee){R=Ee},setClear:function(Ee){Le!==Ee&&(r.clearDepth(Ee),Le=Ee)},reset:function(){R=!1,re=null,oe=null,Le=null}}}function l(){let R=!1,re=null,oe=null,Le=null,Ee=null,Ze=null,Je=null,ct=null,Vt=null;return{setTest:function($e){R||($e?De(r.STENCIL_TEST):be(r.STENCIL_TEST))},setMask:function($e){re!==$e&&!R&&(r.stencilMask($e),re=$e)},setFunc:function($e,Lt,ti){(oe!==$e||Le!==Lt||Ee!==ti)&&(r.stencilFunc($e,Lt,ti),oe=$e,Le=Lt,Ee=ti)},setOp:function($e,Lt,ti){(Ze!==$e||Je!==Lt||ct!==ti)&&(r.stencilOp($e,Lt,ti),Ze=$e,Je=Lt,ct=ti)},setLocked:function($e){R=$e},setClear:function($e){Vt!==$e&&(r.clearStencil($e),Vt=$e)},reset:function(){R=!1,re=null,oe=null,Le=null,Ee=null,Ze=null,Je=null,ct=null,Vt=null}}}const s=new a,o=new n,c=new l,u=new WeakMap,h=new WeakMap;let p={},f={},g=new WeakMap,_=[],m=null,d=!1,y=null,x=null,b=null,P=null,w=null,A=null,W=null,S=new Xe(0,0,0),T=0,H=!1,z=null,ee=null,L=null,U=null,V=null;const j=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,k=0;const Y=r.getParameter(r.VERSION);Y.indexOf("WebGL")!==-1?(k=parseFloat(/^WebGL (\d)/.exec(Y)[1]),X=k>=1):Y.indexOf("OpenGL ES")!==-1&&(k=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),X=k>=2);let J=null,le={};const B=r.getParameter(r.SCISSOR_BOX),q=r.getParameter(r.VIEWPORT),pe=new it().fromArray(B),_e=new it().fromArray(q);function ge(R,re,oe,Le){const Ee=new Uint8Array(4),Ze=r.createTexture();r.bindTexture(R,Ze),r.texParameteri(R,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(R,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Je=0;Je<oe;Je++)i&&(R===r.TEXTURE_3D||R===r.TEXTURE_2D_ARRAY)?r.texImage3D(re,0,r.RGBA,1,1,Le,0,r.RGBA,r.UNSIGNED_BYTE,Ee):r.texImage2D(re+Je,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Ee);return Ze}const Pe={};Pe[r.TEXTURE_2D]=ge(r.TEXTURE_2D,r.TEXTURE_2D,1),Pe[r.TEXTURE_CUBE_MAP]=ge(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(Pe[r.TEXTURE_2D_ARRAY]=ge(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Pe[r.TEXTURE_3D]=ge(r.TEXTURE_3D,r.TEXTURE_3D,1,1)),s.setClear(0,0,0,1),o.setClear(1),c.setClear(0),De(r.DEPTH_TEST),o.setFunc(ca),Oe(!1),E(Bn),De(r.CULL_FACE),fe(bi);function De(R){p[R]!==!0&&(r.enable(R),p[R]=!0)}function be(R){p[R]!==!1&&(r.disable(R),p[R]=!1)}function je(R,re){return f[R]!==re?(r.bindFramebuffer(R,re),f[R]=re,i&&(R===r.DRAW_FRAMEBUFFER&&(f[r.FRAMEBUFFER]=re),R===r.FRAMEBUFFER&&(f[r.DRAW_FRAMEBUFFER]=re)),!0):!1}function O(R,re){let oe=_,Le=!1;if(R)if(oe=g.get(re),oe===void 0&&(oe=[],g.set(re,oe)),R.isWebGLMultipleRenderTargets){const Ee=R.texture;if(oe.length!==Ee.length||oe[0]!==r.COLOR_ATTACHMENT0){for(let Ze=0,Je=Ee.length;Ze<Je;Ze++)oe[Ze]=r.COLOR_ATTACHMENT0+Ze;oe.length=Ee.length,Le=!0}}else oe[0]!==r.COLOR_ATTACHMENT0&&(oe[0]=r.COLOR_ATTACHMENT0,Le=!0);else oe[0]!==r.BACK&&(oe[0]=r.BACK,Le=!0);Le&&(t.isWebGL2?r.drawBuffers(oe):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(oe))}function Ct(R){return m!==R?(r.useProgram(R),m=R,!0):!1}const Se={[Bi]:r.FUNC_ADD,[$o]:r.FUNC_SUBTRACT,[Qo]:r.FUNC_REVERSE_SUBTRACT};if(i)Se[Vn]=r.MIN,Se[kn]=r.MAX;else{const R=e.get("EXT_blend_minmax");R!==null&&(Se[Vn]=R.MIN_EXT,Se[kn]=R.MAX_EXT)}const Ce={[el]:r.ZERO,[tl]:r.ONE,[il]:r.SRC_COLOR,[cn]:r.SRC_ALPHA,[ll]:r.SRC_ALPHA_SATURATE,[sl]:r.DST_COLOR,[al]:r.DST_ALPHA,[rl]:r.ONE_MINUS_SRC_COLOR,[un]:r.ONE_MINUS_SRC_ALPHA,[ol]:r.ONE_MINUS_DST_COLOR,[nl]:r.ONE_MINUS_DST_ALPHA,[cl]:r.CONSTANT_COLOR,[ul]:r.ONE_MINUS_CONSTANT_COLOR,[hl]:r.CONSTANT_ALPHA,[dl]:r.ONE_MINUS_CONSTANT_ALPHA};function fe(R,re,oe,Le,Ee,Ze,Je,ct,Vt,$e){if(R===bi){d===!0&&(be(r.BLEND),d=!1);return}if(d===!1&&(De(r.BLEND),d=!0),R!==Jo){if(R!==y||$e!==H){if((x!==Bi||w!==Bi)&&(r.blendEquation(r.FUNC_ADD),x=Bi,w=Bi),$e)switch(R){case dr:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case ln:r.blendFunc(r.ONE,r.ONE);break;case Gn:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Hn:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}else switch(R){case dr:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case ln:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case Gn:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Hn:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}b=null,P=null,A=null,W=null,S.set(0,0,0),T=0,y=R,H=$e}return}Ee=Ee||re,Ze=Ze||oe,Je=Je||Le,(re!==x||Ee!==w)&&(r.blendEquationSeparate(Se[re],Se[Ee]),x=re,w=Ee),(oe!==b||Le!==P||Ze!==A||Je!==W)&&(r.blendFuncSeparate(Ce[oe],Ce[Le],Ce[Ze],Ce[Je]),b=oe,P=Le,A=Ze,W=Je),(ct.equals(S)===!1||Vt!==T)&&(r.blendColor(ct.r,ct.g,ct.b,Vt),S.copy(ct),T=Vt),y=R,H=!1}function rt(R,re){R.side===at?be(r.CULL_FACE):De(r.CULL_FACE);let oe=R.side===Nt;re&&(oe=!oe),Oe(oe),R.blending===dr&&R.transparent===!1?fe(bi):fe(R.blending,R.blendEquation,R.blendSrc,R.blendDst,R.blendEquationAlpha,R.blendSrcAlpha,R.blendDstAlpha,R.blendColor,R.blendAlpha,R.premultipliedAlpha),o.setFunc(R.depthFunc),o.setTest(R.depthTest),o.setMask(R.depthWrite),s.setMask(R.colorWrite);const Le=R.stencilWrite;c.setTest(Le),Le&&(c.setMask(R.stencilWriteMask),c.setFunc(R.stencilFunc,R.stencilRef,R.stencilFuncMask),c.setOp(R.stencilFail,R.stencilZFail,R.stencilZPass)),N(R.polygonOffset,R.polygonOffsetFactor,R.polygonOffsetUnits),R.alphaToCoverage===!0?De(r.SAMPLE_ALPHA_TO_COVERAGE):be(r.SAMPLE_ALPHA_TO_COVERAGE)}function Oe(R){z!==R&&(R?r.frontFace(r.CW):r.frontFace(r.CCW),z=R)}function E(R){R!==Yo?(De(r.CULL_FACE),R!==ee&&(R===Bn?r.cullFace(r.BACK):R===Ko?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):be(r.CULL_FACE),ee=R}function v(R){R!==L&&(X&&r.lineWidth(R),L=R)}function N(R,re,oe){R?(De(r.POLYGON_OFFSET_FILL),(U!==re||V!==oe)&&(r.polygonOffset(re,oe),U=re,V=oe)):be(r.POLYGON_OFFSET_FILL)}function Q(R){R?De(r.SCISSOR_TEST):be(r.SCISSOR_TEST)}function Z(R){R===void 0&&(R=r.TEXTURE0+j-1),J!==R&&(r.activeTexture(R),J=R)}function $(R,re,oe){oe===void 0&&(J===null?oe=r.TEXTURE0+j-1:oe=J);let Le=le[oe];Le===void 0&&(Le={type:void 0,texture:void 0},le[oe]=Le),(Le.type!==R||Le.texture!==re)&&(J!==oe&&(r.activeTexture(oe),J=oe),r.bindTexture(R,re||Pe[R]),Le.type=R,Le.texture=re)}function me(){const R=le[J];R!==void 0&&R.type!==void 0&&(r.bindTexture(R.type,null),R.type=void 0,R.texture=void 0)}function se(){try{r.compressedTexImage2D.apply(r,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function he(){try{r.compressedTexImage3D.apply(r,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ye(){try{r.texSubImage2D.apply(r,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Fe(){try{r.texSubImage3D.apply(r,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function K(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Ye(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ke(){try{r.texStorage2D.apply(r,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Re(){try{r.texStorage3D.apply(r,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function xe(){try{r.texImage2D.apply(r,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function de(){try{r.texImage3D.apply(r,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Ue(R){pe.equals(R)===!1&&(r.scissor(R.x,R.y,R.z,R.w),pe.copy(R))}function qe(R){_e.equals(R)===!1&&(r.viewport(R.x,R.y,R.z,R.w),_e.copy(R))}function nt(R,re){let oe=h.get(re);oe===void 0&&(oe=new WeakMap,h.set(re,oe));let Le=oe.get(R);Le===void 0&&(Le=r.getUniformBlockIndex(re,R.name),oe.set(R,Le))}function Ge(R,re){const oe=h.get(re).get(R);u.get(re)!==oe&&(r.uniformBlockBinding(re,oe,R.__bindingPointIndex),u.set(re,oe))}function ie(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),i===!0&&(r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),p={},J=null,le={},f={},g=new WeakMap,_=[],m=null,d=!1,y=null,x=null,b=null,P=null,w=null,A=null,W=null,S=new Xe(0,0,0),T=0,H=!1,z=null,ee=null,L=null,U=null,V=null,pe.set(0,0,r.canvas.width,r.canvas.height),_e.set(0,0,r.canvas.width,r.canvas.height),s.reset(),o.reset(),c.reset()}return{buffers:{color:s,depth:o,stencil:c},enable:De,disable:be,bindFramebuffer:je,drawBuffers:O,useProgram:Ct,setBlending:fe,setMaterial:rt,setFlipSided:Oe,setCullFace:E,setLineWidth:v,setPolygonOffset:N,setScissorTest:Q,activeTexture:Z,bindTexture:$,unbindTexture:me,compressedTexImage2D:se,compressedTexImage3D:he,texImage2D:xe,texImage3D:de,updateUBOMapping:nt,uniformBlockBinding:Ge,texStorage2D:ke,texStorage3D:Re,texSubImage2D:ye,texSubImage3D:Fe,compressedTexSubImage2D:K,compressedTexSubImage3D:Ye,scissor:Ue,viewport:qe,reset:ie}}function qp(r,e,t,i,a,n,l){const s=a.isWebGL2,o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new WeakMap;let h;const p=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(E,v){return f?new OffscreenCanvas(E,v):fa("canvas")}function _(E,v,N,Q){let Z=1;if((E.width>Q||E.height>Q)&&(Z=Q/Math.max(E.width,E.height)),Z<1||v===!0)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap){const $=v?_n:Math.floor,me=$(Z*E.width),se=$(Z*E.height);h===void 0&&(h=g(me,se));const he=N?g(me,se):h;return he.width=me,he.height=se,he.getContext("2d").drawImage(E,0,0,me,se),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+E.width+"x"+E.height+") to ("+me+"x"+se+")."),he}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+E.width+"x"+E.height+")."),E;return E}function m(E){return xs(E.width)&&xs(E.height)}function d(E){return s?!1:E.wrapS!==Qt||E.wrapT!==Qt||E.minFilter!==Dt&&E.minFilter!==jt}function y(E,v){return E.generateMipmaps&&v&&E.minFilter!==Dt&&E.minFilter!==jt}function x(E){r.generateMipmap(E)}function b(E,v,N,Q,Z=!1){if(s===!1)return v;if(E!==null){if(r[E]!==void 0)return r[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let $=v;if(v===r.RED&&(N===r.FLOAT&&($=r.R32F),N===r.HALF_FLOAT&&($=r.R16F),N===r.UNSIGNED_BYTE&&($=r.R8)),v===r.RED_INTEGER&&(N===r.UNSIGNED_BYTE&&($=r.R8UI),N===r.UNSIGNED_SHORT&&($=r.R16UI),N===r.UNSIGNED_INT&&($=r.R32UI),N===r.BYTE&&($=r.R8I),N===r.SHORT&&($=r.R16I),N===r.INT&&($=r.R32I)),v===r.RG&&(N===r.FLOAT&&($=r.RG32F),N===r.HALF_FLOAT&&($=r.RG16F),N===r.UNSIGNED_BYTE&&($=r.RG8)),v===r.RGBA){const me=Z?ua:Ke.getTransfer(Q);N===r.FLOAT&&($=r.RGBA32F),N===r.HALF_FLOAT&&($=r.RGBA16F),N===r.UNSIGNED_BYTE&&($=me===et?r.SRGB8_ALPHA8:r.RGBA8),N===r.UNSIGNED_SHORT_4_4_4_4&&($=r.RGBA4),N===r.UNSIGNED_SHORT_5_5_5_1&&($=r.RGB5_A1)}return($===r.R16F||$===r.R32F||$===r.RG16F||$===r.RG32F||$===r.RGBA16F||$===r.RGBA32F)&&e.get("EXT_color_buffer_float"),$}function P(E,v,N){return y(E,N)===!0||E.isFramebufferTexture&&E.minFilter!==Dt&&E.minFilter!==jt?Math.log2(Math.max(v.width,v.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?v.mipmaps.length:1}function w(E){return E===Dt||E===Wn||E===Ra?r.NEAREST:r.LINEAR}function A(E){const v=E.target;v.removeEventListener("dispose",A),S(v),v.isVideoTexture&&u.delete(v)}function W(E){const v=E.target;v.removeEventListener("dispose",W),H(v)}function S(E){const v=i.get(E);if(v.__webglInit===void 0)return;const N=E.source,Q=p.get(N);if(Q){const Z=Q[v.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&T(E),Object.keys(Q).length===0&&p.delete(N)}i.remove(E)}function T(E){const v=i.get(E);r.deleteTexture(v.__webglTexture);const N=E.source,Q=p.get(N);delete Q[v.__cacheKey],l.memory.textures--}function H(E){const v=E.texture,N=i.get(E),Q=i.get(v);if(Q.__webglTexture!==void 0&&(r.deleteTexture(Q.__webglTexture),l.memory.textures--),E.depthTexture&&E.depthTexture.dispose(),E.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(N.__webglFramebuffer[Z]))for(let $=0;$<N.__webglFramebuffer[Z].length;$++)r.deleteFramebuffer(N.__webglFramebuffer[Z][$]);else r.deleteFramebuffer(N.__webglFramebuffer[Z]);N.__webglDepthbuffer&&r.deleteRenderbuffer(N.__webglDepthbuffer[Z])}else{if(Array.isArray(N.__webglFramebuffer))for(let Z=0;Z<N.__webglFramebuffer.length;Z++)r.deleteFramebuffer(N.__webglFramebuffer[Z]);else r.deleteFramebuffer(N.__webglFramebuffer);if(N.__webglDepthbuffer&&r.deleteRenderbuffer(N.__webglDepthbuffer),N.__webglMultisampledFramebuffer&&r.deleteFramebuffer(N.__webglMultisampledFramebuffer),N.__webglColorRenderbuffer)for(let Z=0;Z<N.__webglColorRenderbuffer.length;Z++)N.__webglColorRenderbuffer[Z]&&r.deleteRenderbuffer(N.__webglColorRenderbuffer[Z]);N.__webglDepthRenderbuffer&&r.deleteRenderbuffer(N.__webglDepthRenderbuffer)}if(E.isWebGLMultipleRenderTargets)for(let Z=0,$=v.length;Z<$;Z++){const me=i.get(v[Z]);me.__webglTexture&&(r.deleteTexture(me.__webglTexture),l.memory.textures--),i.remove(v[Z])}i.remove(v),i.remove(E)}let z=0;function ee(){z=0}function L(){const E=z;return E>=a.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+a.maxTextures),z+=1,E}function U(E){const v=[];return v.push(E.wrapS),v.push(E.wrapT),v.push(E.wrapR||0),v.push(E.magFilter),v.push(E.minFilter),v.push(E.anisotropy),v.push(E.internalFormat),v.push(E.format),v.push(E.type),v.push(E.generateMipmaps),v.push(E.premultiplyAlpha),v.push(E.flipY),v.push(E.unpackAlignment),v.push(E.colorSpace),v.join()}function V(E,v){const N=i.get(E);if(E.isVideoTexture&&rt(E),E.isRenderTargetTexture===!1&&E.version>0&&N.__version!==E.version){const Q=E.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{pe(N,E,v);return}}t.bindTexture(r.TEXTURE_2D,N.__webglTexture,r.TEXTURE0+v)}function j(E,v){const N=i.get(E);if(E.version>0&&N.__version!==E.version){pe(N,E,v);return}t.bindTexture(r.TEXTURE_2D_ARRAY,N.__webglTexture,r.TEXTURE0+v)}function X(E,v){const N=i.get(E);if(E.version>0&&N.__version!==E.version){pe(N,E,v);return}t.bindTexture(r.TEXTURE_3D,N.__webglTexture,r.TEXTURE0+v)}function k(E,v){const N=i.get(E);if(E.version>0&&N.__version!==E.version){_e(N,E,v);return}t.bindTexture(r.TEXTURE_CUBE_MAP,N.__webglTexture,r.TEXTURE0+v)}const Y={[pn]:r.REPEAT,[Qt]:r.CLAMP_TO_EDGE,[fn]:r.MIRRORED_REPEAT},J={[Dt]:r.NEAREST,[Wn]:r.NEAREST_MIPMAP_NEAREST,[Ra]:r.NEAREST_MIPMAP_LINEAR,[jt]:r.LINEAR,[Rl]:r.LINEAR_MIPMAP_NEAREST,[Lr]:r.LINEAR_MIPMAP_LINEAR},le={[Gl]:r.NEVER,[jl]:r.ALWAYS,[Hl]:r.LESS,[xo]:r.LEQUAL,[Vl]:r.EQUAL,[Xl]:r.GEQUAL,[kl]:r.GREATER,[Wl]:r.NOTEQUAL};function B(E,v,N){if(N?(r.texParameteri(E,r.TEXTURE_WRAP_S,Y[v.wrapS]),r.texParameteri(E,r.TEXTURE_WRAP_T,Y[v.wrapT]),(E===r.TEXTURE_3D||E===r.TEXTURE_2D_ARRAY)&&r.texParameteri(E,r.TEXTURE_WRAP_R,Y[v.wrapR]),r.texParameteri(E,r.TEXTURE_MAG_FILTER,J[v.magFilter]),r.texParameteri(E,r.TEXTURE_MIN_FILTER,J[v.minFilter])):(r.texParameteri(E,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(E,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),(E===r.TEXTURE_3D||E===r.TEXTURE_2D_ARRAY)&&r.texParameteri(E,r.TEXTURE_WRAP_R,r.CLAMP_TO_EDGE),(v.wrapS!==Qt||v.wrapT!==Qt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(E,r.TEXTURE_MAG_FILTER,w(v.magFilter)),r.texParameteri(E,r.TEXTURE_MIN_FILTER,w(v.minFilter)),v.minFilter!==Dt&&v.minFilter!==jt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),v.compareFunction&&(r.texParameteri(E,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(E,r.TEXTURE_COMPARE_FUNC,le[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const Q=e.get("EXT_texture_filter_anisotropic");if(v.magFilter===Dt||v.minFilter!==Ra&&v.minFilter!==Lr||v.type===yi&&e.has("OES_texture_float_linear")===!1||s===!1&&v.type===Pr&&e.has("OES_texture_half_float_linear")===!1)return;(v.anisotropy>1||i.get(v).__currentAnisotropy)&&(r.texParameterf(E,Q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,a.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy)}}function q(E,v){let N=!1;E.__webglInit===void 0&&(E.__webglInit=!0,v.addEventListener("dispose",A));const Q=v.source;let Z=p.get(Q);Z===void 0&&(Z={},p.set(Q,Z));const $=U(v);if($!==E.__cacheKey){Z[$]===void 0&&(Z[$]={texture:r.createTexture(),usedTimes:0},l.memory.textures++,N=!0),Z[$].usedTimes++;const me=Z[E.__cacheKey];me!==void 0&&(Z[E.__cacheKey].usedTimes--,me.usedTimes===0&&T(v)),E.__cacheKey=$,E.__webglTexture=Z[$].texture}return N}function pe(E,v,N){let Q=r.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(Q=r.TEXTURE_2D_ARRAY),v.isData3DTexture&&(Q=r.TEXTURE_3D);const Z=q(E,v),$=v.source;t.bindTexture(Q,E.__webglTexture,r.TEXTURE0+N);const me=i.get($);if($.version!==me.__version||Z===!0){t.activeTexture(r.TEXTURE0+N);const se=Ke.getPrimaries(Ke.workingColorSpace),he=v.colorSpace===qt?null:Ke.getPrimaries(v.colorSpace),ye=v.colorSpace===qt||se===he?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,v.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,v.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ye);const Fe=d(v)&&m(v.image)===!1;let K=_(v.image,Fe,!1,a.maxTextureSize);K=Oe(v,K);const Ye=m(K)||s,ke=n.convert(v.format,v.colorSpace);let Re=n.convert(v.type),xe=b(v.internalFormat,ke,Re,v.colorSpace,v.isVideoTexture);B(Q,v,Ye);let de;const Ue=v.mipmaps,qe=s&&v.isVideoTexture!==!0&&xe!==_o,nt=me.__version===void 0||Z===!0,Ge=P(v,K,Ye);if(v.isDepthTexture)xe=r.DEPTH_COMPONENT,s?v.type===yi?xe=r.DEPTH_COMPONENT32F:v.type===Ei?xe=r.DEPTH_COMPONENT24:v.type===Vi?xe=r.DEPTH24_STENCIL8:xe=r.DEPTH_COMPONENT16:v.type===yi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),v.format===ki&&xe===r.DEPTH_COMPONENT&&v.type!==Sn&&v.type!==Ei&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),v.type=Ei,Re=n.convert(v.type)),v.format===gr&&xe===r.DEPTH_COMPONENT&&(xe=r.DEPTH_STENCIL,v.type!==Vi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),v.type=Vi,Re=n.convert(v.type))),nt&&(qe?t.texStorage2D(r.TEXTURE_2D,1,xe,K.width,K.height):t.texImage2D(r.TEXTURE_2D,0,xe,K.width,K.height,0,ke,Re,null));else if(v.isDataTexture)if(Ue.length>0&&Ye){qe&&nt&&t.texStorage2D(r.TEXTURE_2D,Ge,xe,Ue[0].width,Ue[0].height);for(let ie=0,R=Ue.length;ie<R;ie++)de=Ue[ie],qe?t.texSubImage2D(r.TEXTURE_2D,ie,0,0,de.width,de.height,ke,Re,de.data):t.texImage2D(r.TEXTURE_2D,ie,xe,de.width,de.height,0,ke,Re,de.data);v.generateMipmaps=!1}else qe?(nt&&t.texStorage2D(r.TEXTURE_2D,Ge,xe,K.width,K.height),t.texSubImage2D(r.TEXTURE_2D,0,0,0,K.width,K.height,ke,Re,K.data)):t.texImage2D(r.TEXTURE_2D,0,xe,K.width,K.height,0,ke,Re,K.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){qe&&nt&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Ge,xe,Ue[0].width,Ue[0].height,K.depth);for(let ie=0,R=Ue.length;ie<R;ie++)de=Ue[ie],v.format!==ei?ke!==null?qe?t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ie,0,0,0,de.width,de.height,K.depth,ke,de.data,0,0):t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,ie,xe,de.width,de.height,K.depth,0,de.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):qe?t.texSubImage3D(r.TEXTURE_2D_ARRAY,ie,0,0,0,de.width,de.height,K.depth,ke,Re,de.data):t.texImage3D(r.TEXTURE_2D_ARRAY,ie,xe,de.width,de.height,K.depth,0,ke,Re,de.data)}else{qe&&nt&&t.texStorage2D(r.TEXTURE_2D,Ge,xe,Ue[0].width,Ue[0].height);for(let ie=0,R=Ue.length;ie<R;ie++)de=Ue[ie],v.format!==ei?ke!==null?qe?t.compressedTexSubImage2D(r.TEXTURE_2D,ie,0,0,de.width,de.height,ke,de.data):t.compressedTexImage2D(r.TEXTURE_2D,ie,xe,de.width,de.height,0,de.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):qe?t.texSubImage2D(r.TEXTURE_2D,ie,0,0,de.width,de.height,ke,Re,de.data):t.texImage2D(r.TEXTURE_2D,ie,xe,de.width,de.height,0,ke,Re,de.data)}else if(v.isDataArrayTexture)qe?(nt&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Ge,xe,K.width,K.height,K.depth),t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,K.width,K.height,K.depth,ke,Re,K.data)):t.texImage3D(r.TEXTURE_2D_ARRAY,0,xe,K.width,K.height,K.depth,0,ke,Re,K.data);else if(v.isData3DTexture)qe?(nt&&t.texStorage3D(r.TEXTURE_3D,Ge,xe,K.width,K.height,K.depth),t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,K.width,K.height,K.depth,ke,Re,K.data)):t.texImage3D(r.TEXTURE_3D,0,xe,K.width,K.height,K.depth,0,ke,Re,K.data);else if(v.isFramebufferTexture){if(nt)if(qe)t.texStorage2D(r.TEXTURE_2D,Ge,xe,K.width,K.height);else{let ie=K.width,R=K.height;for(let re=0;re<Ge;re++)t.texImage2D(r.TEXTURE_2D,re,xe,ie,R,0,ke,Re,null),ie>>=1,R>>=1}}else if(Ue.length>0&&Ye){qe&&nt&&t.texStorage2D(r.TEXTURE_2D,Ge,xe,Ue[0].width,Ue[0].height);for(let ie=0,R=Ue.length;ie<R;ie++)de=Ue[ie],qe?t.texSubImage2D(r.TEXTURE_2D,ie,0,0,ke,Re,de):t.texImage2D(r.TEXTURE_2D,ie,xe,ke,Re,de);v.generateMipmaps=!1}else qe?(nt&&t.texStorage2D(r.TEXTURE_2D,Ge,xe,K.width,K.height),t.texSubImage2D(r.TEXTURE_2D,0,0,0,ke,Re,K)):t.texImage2D(r.TEXTURE_2D,0,xe,ke,Re,K);y(v,Ye)&&x(Q),me.__version=$.version,v.onUpdate&&v.onUpdate(v)}E.__version=v.version}function _e(E,v,N){if(v.image.length!==6)return;const Q=q(E,v),Z=v.source;t.bindTexture(r.TEXTURE_CUBE_MAP,E.__webglTexture,r.TEXTURE0+N);const $=i.get(Z);if(Z.version!==$.__version||Q===!0){t.activeTexture(r.TEXTURE0+N);const me=Ke.getPrimaries(Ke.workingColorSpace),se=v.colorSpace===qt?null:Ke.getPrimaries(v.colorSpace),he=v.colorSpace===qt||me===se?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,v.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,v.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,he);const ye=v.isCompressedTexture||v.image[0].isCompressedTexture,Fe=v.image[0]&&v.image[0].isDataTexture,K=[];for(let ie=0;ie<6;ie++)!ye&&!Fe?K[ie]=_(v.image[ie],!1,!0,a.maxCubemapSize):K[ie]=Fe?v.image[ie].image:v.image[ie],K[ie]=Oe(v,K[ie]);const Ye=K[0],ke=m(Ye)||s,Re=n.convert(v.format,v.colorSpace),xe=n.convert(v.type),de=b(v.internalFormat,Re,xe,v.colorSpace),Ue=s&&v.isVideoTexture!==!0,qe=$.__version===void 0||Q===!0;let nt=P(v,Ye,ke);B(r.TEXTURE_CUBE_MAP,v,ke);let Ge;if(ye){Ue&&qe&&t.texStorage2D(r.TEXTURE_CUBE_MAP,nt,de,Ye.width,Ye.height);for(let ie=0;ie<6;ie++){Ge=K[ie].mipmaps;for(let R=0;R<Ge.length;R++){const re=Ge[R];v.format!==ei?Re!==null?Ue?t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ie,R,0,0,re.width,re.height,Re,re.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ie,R,de,re.width,re.height,0,re.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ue?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ie,R,0,0,re.width,re.height,Re,xe,re.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ie,R,de,re.width,re.height,0,Re,xe,re.data)}}}else{Ge=v.mipmaps,Ue&&qe&&(Ge.length>0&&nt++,t.texStorage2D(r.TEXTURE_CUBE_MAP,nt,de,K[0].width,K[0].height));for(let ie=0;ie<6;ie++)if(Fe){Ue?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,K[ie].width,K[ie].height,Re,xe,K[ie].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,de,K[ie].width,K[ie].height,0,Re,xe,K[ie].data);for(let R=0;R<Ge.length;R++){const re=Ge[R].image[ie].image;Ue?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ie,R+1,0,0,re.width,re.height,Re,xe,re.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ie,R+1,de,re.width,re.height,0,Re,xe,re.data)}}else{Ue?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,Re,xe,K[ie]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,de,Re,xe,K[ie]);for(let R=0;R<Ge.length;R++){const re=Ge[R];Ue?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ie,R+1,0,0,Re,xe,re.image[ie]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ie,R+1,de,Re,xe,re.image[ie])}}}y(v,ke)&&x(r.TEXTURE_CUBE_MAP),$.__version=Z.version,v.onUpdate&&v.onUpdate(v)}E.__version=v.version}function ge(E,v,N,Q,Z,$){const me=n.convert(N.format,N.colorSpace),se=n.convert(N.type),he=b(N.internalFormat,me,se,N.colorSpace);if(!i.get(v).__hasExternalTextures){const ye=Math.max(1,v.width>>$),Fe=Math.max(1,v.height>>$);Z===r.TEXTURE_3D||Z===r.TEXTURE_2D_ARRAY?t.texImage3D(Z,$,he,ye,Fe,v.depth,0,me,se,null):t.texImage2D(Z,$,he,ye,Fe,0,me,se,null)}t.bindFramebuffer(r.FRAMEBUFFER,E),fe(v)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Q,Z,i.get(N).__webglTexture,0,Ce(v)):(Z===r.TEXTURE_2D||Z>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,Q,Z,i.get(N).__webglTexture,$),t.bindFramebuffer(r.FRAMEBUFFER,null)}function Pe(E,v,N){if(r.bindRenderbuffer(r.RENDERBUFFER,E),v.depthBuffer&&!v.stencilBuffer){let Q=s===!0?r.DEPTH_COMPONENT24:r.DEPTH_COMPONENT16;if(N||fe(v)){const Z=v.depthTexture;Z&&Z.isDepthTexture&&(Z.type===yi?Q=r.DEPTH_COMPONENT32F:Z.type===Ei&&(Q=r.DEPTH_COMPONENT24));const $=Ce(v);fe(v)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,$,Q,v.width,v.height):r.renderbufferStorageMultisample(r.RENDERBUFFER,$,Q,v.width,v.height)}else r.renderbufferStorage(r.RENDERBUFFER,Q,v.width,v.height);r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.RENDERBUFFER,E)}else if(v.depthBuffer&&v.stencilBuffer){const Q=Ce(v);N&&fe(v)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Q,r.DEPTH24_STENCIL8,v.width,v.height):fe(v)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Q,r.DEPTH24_STENCIL8,v.width,v.height):r.renderbufferStorage(r.RENDERBUFFER,r.DEPTH_STENCIL,v.width,v.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.RENDERBUFFER,E)}else{const Q=v.isWebGLMultipleRenderTargets===!0?v.texture:[v.texture];for(let Z=0;Z<Q.length;Z++){const $=Q[Z],me=n.convert($.format,$.colorSpace),se=n.convert($.type),he=b($.internalFormat,me,se,$.colorSpace),ye=Ce(v);N&&fe(v)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,ye,he,v.width,v.height):fe(v)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ye,he,v.width,v.height):r.renderbufferStorage(r.RENDERBUFFER,he,v.width,v.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function De(E,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,E),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(v.depthTexture).__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),V(v.depthTexture,0);const N=i.get(v.depthTexture).__webglTexture,Q=Ce(v);if(v.depthTexture.format===ki)fe(v)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,N,0,Q):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,N,0);else if(v.depthTexture.format===gr)fe(v)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,N,0,Q):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,N,0);else throw new Error("Unknown depthTexture format")}function be(E){const v=i.get(E),N=E.isWebGLCubeRenderTarget===!0;if(E.depthTexture&&!v.__autoAllocateDepthBuffer){if(N)throw new Error("target.depthTexture not supported in Cube render targets");De(v.__webglFramebuffer,E)}else if(N){v.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)t.bindFramebuffer(r.FRAMEBUFFER,v.__webglFramebuffer[Q]),v.__webglDepthbuffer[Q]=r.createRenderbuffer(),Pe(v.__webglDepthbuffer[Q],E,!1)}else t.bindFramebuffer(r.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer=r.createRenderbuffer(),Pe(v.__webglDepthbuffer,E,!1);t.bindFramebuffer(r.FRAMEBUFFER,null)}function je(E,v,N){const Q=i.get(E);v!==void 0&&ge(Q.__webglFramebuffer,E,E.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),N!==void 0&&be(E)}function O(E){const v=E.texture,N=i.get(E),Q=i.get(v);E.addEventListener("dispose",W),E.isWebGLMultipleRenderTargets!==!0&&(Q.__webglTexture===void 0&&(Q.__webglTexture=r.createTexture()),Q.__version=v.version,l.memory.textures++);const Z=E.isWebGLCubeRenderTarget===!0,$=E.isWebGLMultipleRenderTargets===!0,me=m(E)||s;if(Z){N.__webglFramebuffer=[];for(let se=0;se<6;se++)if(s&&v.mipmaps&&v.mipmaps.length>0){N.__webglFramebuffer[se]=[];for(let he=0;he<v.mipmaps.length;he++)N.__webglFramebuffer[se][he]=r.createFramebuffer()}else N.__webglFramebuffer[se]=r.createFramebuffer()}else{if(s&&v.mipmaps&&v.mipmaps.length>0){N.__webglFramebuffer=[];for(let se=0;se<v.mipmaps.length;se++)N.__webglFramebuffer[se]=r.createFramebuffer()}else N.__webglFramebuffer=r.createFramebuffer();if($)if(a.drawBuffers){const se=E.texture;for(let he=0,ye=se.length;he<ye;he++){const Fe=i.get(se[he]);Fe.__webglTexture===void 0&&(Fe.__webglTexture=r.createTexture(),l.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(s&&E.samples>0&&fe(E)===!1){const se=$?v:[v];N.__webglMultisampledFramebuffer=r.createFramebuffer(),N.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let he=0;he<se.length;he++){const ye=se[he];N.__webglColorRenderbuffer[he]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,N.__webglColorRenderbuffer[he]);const Fe=n.convert(ye.format,ye.colorSpace),K=n.convert(ye.type),Ye=b(ye.internalFormat,Fe,K,ye.colorSpace,E.isXRRenderTarget===!0),ke=Ce(E);r.renderbufferStorageMultisample(r.RENDERBUFFER,ke,Ye,E.width,E.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+he,r.RENDERBUFFER,N.__webglColorRenderbuffer[he])}r.bindRenderbuffer(r.RENDERBUFFER,null),E.depthBuffer&&(N.__webglDepthRenderbuffer=r.createRenderbuffer(),Pe(N.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(Z){t.bindTexture(r.TEXTURE_CUBE_MAP,Q.__webglTexture),B(r.TEXTURE_CUBE_MAP,v,me);for(let se=0;se<6;se++)if(s&&v.mipmaps&&v.mipmaps.length>0)for(let he=0;he<v.mipmaps.length;he++)ge(N.__webglFramebuffer[se][he],E,v,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+se,he);else ge(N.__webglFramebuffer[se],E,v,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+se,0);y(v,me)&&x(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if($){const se=E.texture;for(let he=0,ye=se.length;he<ye;he++){const Fe=se[he],K=i.get(Fe);t.bindTexture(r.TEXTURE_2D,K.__webglTexture),B(r.TEXTURE_2D,Fe,me),ge(N.__webglFramebuffer,E,Fe,r.COLOR_ATTACHMENT0+he,r.TEXTURE_2D,0),y(Fe,me)&&x(r.TEXTURE_2D)}t.unbindTexture()}else{let se=r.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(s?se=E.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(se,Q.__webglTexture),B(se,v,me),s&&v.mipmaps&&v.mipmaps.length>0)for(let he=0;he<v.mipmaps.length;he++)ge(N.__webglFramebuffer[he],E,v,r.COLOR_ATTACHMENT0,se,he);else ge(N.__webglFramebuffer,E,v,r.COLOR_ATTACHMENT0,se,0);y(v,me)&&x(se),t.unbindTexture()}E.depthBuffer&&be(E)}function Ct(E){const v=m(E)||s,N=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let Q=0,Z=N.length;Q<Z;Q++){const $=N[Q];if(y($,v)){const me=E.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,se=i.get($).__webglTexture;t.bindTexture(me,se),x(me),t.unbindTexture()}}}function Se(E){if(s&&E.samples>0&&fe(E)===!1){const v=E.isWebGLMultipleRenderTargets?E.texture:[E.texture],N=E.width,Q=E.height;let Z=r.COLOR_BUFFER_BIT;const $=[],me=E.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,se=i.get(E),he=E.isWebGLMultipleRenderTargets===!0;if(he)for(let ye=0;ye<v.length;ye++)t.bindFramebuffer(r.FRAMEBUFFER,se.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ye,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,se.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ye,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,se.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,se.__webglFramebuffer);for(let ye=0;ye<v.length;ye++){$.push(r.COLOR_ATTACHMENT0+ye),E.depthBuffer&&$.push(me);const Fe=se.__ignoreDepthValues!==void 0?se.__ignoreDepthValues:!1;if(Fe===!1&&(E.depthBuffer&&(Z|=r.DEPTH_BUFFER_BIT),E.stencilBuffer&&(Z|=r.STENCIL_BUFFER_BIT)),he&&r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,se.__webglColorRenderbuffer[ye]),Fe===!0&&(r.invalidateFramebuffer(r.READ_FRAMEBUFFER,[me]),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[me])),he){const K=i.get(v[ye]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,K,0)}r.blitFramebuffer(0,0,N,Q,0,0,N,Q,Z,r.NEAREST),c&&r.invalidateFramebuffer(r.READ_FRAMEBUFFER,$)}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),he)for(let ye=0;ye<v.length;ye++){t.bindFramebuffer(r.FRAMEBUFFER,se.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ye,r.RENDERBUFFER,se.__webglColorRenderbuffer[ye]);const Fe=i.get(v[ye]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,se.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ye,r.TEXTURE_2D,Fe,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,se.__webglMultisampledFramebuffer)}}function Ce(E){return Math.min(a.maxSamples,E.samples)}function fe(E){const v=i.get(E);return s&&E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function rt(E){const v=l.render.frame;u.get(E)!==v&&(u.set(E,v),E.update())}function Oe(E,v){const N=E.colorSpace,Q=E.format,Z=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||E.format===mn||N!==pi&&N!==qt&&(Ke.getTransfer(N)===et?s===!1?e.has("EXT_sRGB")===!0&&Q===ei?(E.format=mn,E.minFilter=jt,E.generateMipmaps=!1):v=So.sRGBToLinear(v):(Q!==ei||Z!==Ai)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",N)),v}this.allocateTextureUnit=L,this.resetTextureUnits=ee,this.setTexture2D=V,this.setTexture2DArray=j,this.setTexture3D=X,this.setTextureCube=k,this.rebindTextures=je,this.setupRenderTarget=O,this.updateRenderTargetMipmap=Ct,this.updateMultisampleRenderTarget=Se,this.setupDepthRenderbuffer=be,this.setupFrameBufferTexture=ge,this.useMultisampledRTT=fe}function Yp(r,e,t){const i=t.isWebGL2;function a(n,l=qt){let s;const o=Ke.getTransfer(l);if(n===Ai)return r.UNSIGNED_BYTE;if(n===ho)return r.UNSIGNED_SHORT_4_4_4_4;if(n===po)return r.UNSIGNED_SHORT_5_5_5_1;if(n===Cl)return r.BYTE;if(n===Ll)return r.SHORT;if(n===Sn)return r.UNSIGNED_SHORT;if(n===uo)return r.INT;if(n===Ei)return r.UNSIGNED_INT;if(n===yi)return r.FLOAT;if(n===Pr)return i?r.HALF_FLOAT:(s=e.get("OES_texture_half_float"),s!==null?s.HALF_FLOAT_OES:null);if(n===Pl)return r.ALPHA;if(n===ei)return r.RGBA;if(n===Dl)return r.LUMINANCE;if(n===Ul)return r.LUMINANCE_ALPHA;if(n===ki)return r.DEPTH_COMPONENT;if(n===gr)return r.DEPTH_STENCIL;if(n===mn)return s=e.get("EXT_sRGB"),s!==null?s.SRGB_ALPHA_EXT:null;if(n===Il)return r.RED;if(n===fo)return r.RED_INTEGER;if(n===Nl)return r.RG;if(n===mo)return r.RG_INTEGER;if(n===go)return r.RGBA_INTEGER;if(n===Ca||n===La||n===Pa||n===Da)if(o===et)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Ca)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===La)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Pa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Da)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Ca)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===La)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Pa)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Da)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Xn||n===jn||n===qn||n===Yn)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Xn)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===jn)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===qn)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Yn)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===_o)return s=e.get("WEBGL_compressed_texture_etc1"),s!==null?s.COMPRESSED_RGB_ETC1_WEBGL:null;if(n===Kn||n===Zn)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Kn)return o===et?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Zn)return o===et?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Jn||n===$n||n===Qn||n===es||n===ts||n===is||n===rs||n===as||n===ns||n===ss||n===os||n===ls||n===cs||n===us)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Jn)return o===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===$n)return o===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Qn)return o===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===es)return o===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ts)return o===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===is)return o===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===rs)return o===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===as)return o===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ns)return o===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ss)return o===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===os)return o===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ls)return o===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===cs)return o===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===us)return o===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ua||n===hs||n===ds)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===Ua)return o===et?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===hs)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ds)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ol||n===ps||n===fs||n===ms)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===Ua)return s.COMPRESSED_RED_RGTC1_EXT;if(n===ps)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===fs)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ms)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Vi?i?r.UNSIGNED_INT_24_8:(s=e.get("WEBGL_depth_texture"),s!==null?s.UNSIGNED_INT_24_8_WEBGL:null):r[n]!==void 0?r[n]:null}return{convert:a}}class Kp extends Bt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class wt extends Rt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Zp={type:"move"};class nn{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new wt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new wt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new wt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let a=null,n=null,l=null;const s=this._targetRay,o=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){l=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,i),d=this._getHandJoint(c,_);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],p=u.position.distanceTo(h.position),f=.02,g=.005;c.inputState.pinching&&p>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&p<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else o!==null&&e.gripSpace&&(n=t.getPose(e.gripSpace,i),n!==null&&(o.matrix.fromArray(n.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,n.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(n.linearVelocity)):o.hasLinearVelocity=!1,n.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(n.angularVelocity)):o.hasAngularVelocity=!1));s!==null&&(a=t.getPose(e.targetRaySpace,i),a===null&&n!==null&&(a=n),a!==null&&(s.matrix.fromArray(a.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,a.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(a.linearVelocity)):s.hasLinearVelocity=!1,a.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(a.angularVelocity)):s.hasAngularVelocity=!1,this.dispatchEvent(Zp)))}return s!==null&&(s.visible=a!==null),o!==null&&(o.visible=n!==null),c!==null&&(c.visible=l!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new wt;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class Jp extends vr{constructor(e,t){super();const i=this;let a=null,n=1,l=null,s="local-floor",o=1,c=null,u=null,h=null,p=null,f=null,g=null;const _=t.getContextAttributes();let m=null,d=null;const y=[],x=[],b=new Ae;let P=null;const w=new Bt;w.layers.enable(1),w.viewport=new it;const A=new Bt;A.layers.enable(2),A.viewport=new it;const W=[w,A],S=new Kp;S.layers.enable(1),S.layers.enable(2);let T=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(B){let q=y[B];return q===void 0&&(q=new nn,y[B]=q),q.getTargetRaySpace()},this.getControllerGrip=function(B){let q=y[B];return q===void 0&&(q=new nn,y[B]=q),q.getGripSpace()},this.getHand=function(B){let q=y[B];return q===void 0&&(q=new nn,y[B]=q),q.getHandSpace()};function z(B){const q=x.indexOf(B.inputSource);if(q===-1)return;const pe=y[q];pe!==void 0&&(pe.update(B.inputSource,B.frame,c||l),pe.dispatchEvent({type:B.type,data:B.inputSource}))}function ee(){a.removeEventListener("select",z),a.removeEventListener("selectstart",z),a.removeEventListener("selectend",z),a.removeEventListener("squeeze",z),a.removeEventListener("squeezestart",z),a.removeEventListener("squeezeend",z),a.removeEventListener("end",ee),a.removeEventListener("inputsourceschange",L);for(let B=0;B<y.length;B++){const q=x[B];q!==null&&(x[B]=null,y[B].disconnect(q))}T=null,H=null,e.setRenderTarget(m),f=null,p=null,h=null,a=null,d=null,le.stop(),i.isPresenting=!1,e.setPixelRatio(P),e.setSize(b.width,b.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(B){n=B,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(B){s=B,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||l},this.setReferenceSpace=function(B){c=B},this.getBaseLayer=function(){return p!==null?p:f},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return a},this.setSession=async function(B){if(a=B,a!==null){if(m=e.getRenderTarget(),a.addEventListener("select",z),a.addEventListener("selectstart",z),a.addEventListener("selectend",z),a.addEventListener("squeeze",z),a.addEventListener("squeezestart",z),a.addEventListener("squeezeend",z),a.addEventListener("end",ee),a.addEventListener("inputsourceschange",L),_.xrCompatible!==!0&&await t.makeXRCompatible(),P=e.getPixelRatio(),e.getSize(b),a.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const q={antialias:a.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:n};f=new XRWebGLLayer(a,t,q),a.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),d=new Xi(f.framebufferWidth,f.framebufferHeight,{format:ei,type:Ai,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let q=null,pe=null,_e=null;_.depth&&(_e=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,q=_.stencil?gr:ki,pe=_.stencil?Vi:Ei);const ge={colorFormat:t.RGBA8,depthFormat:_e,scaleFactor:n};h=new XRWebGLBinding(a,t),p=h.createProjectionLayer(ge),a.updateRenderState({layers:[p]}),e.setPixelRatio(1),e.setSize(p.textureWidth,p.textureHeight,!1),d=new Xi(p.textureWidth,p.textureHeight,{format:ei,type:Ai,depthTexture:new Uo(p.textureWidth,p.textureHeight,pe,void 0,void 0,void 0,void 0,void 0,void 0,q),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0});const Pe=e.properties.get(d);Pe.__ignoreDepthValues=p.ignoreDepthValues}d.isXRRenderTarget=!0,this.setFoveation(o),c=null,l=await a.requestReferenceSpace(s),le.setContext(a),le.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode};function L(B){for(let q=0;q<B.removed.length;q++){const pe=B.removed[q],_e=x.indexOf(pe);_e>=0&&(x[_e]=null,y[_e].disconnect(pe))}for(let q=0;q<B.added.length;q++){const pe=B.added[q];let _e=x.indexOf(pe);if(_e===-1){for(let Pe=0;Pe<y.length;Pe++)if(Pe>=x.length){x.push(pe),_e=Pe;break}else if(x[Pe]===null){x[Pe]=pe,_e=Pe;break}if(_e===-1)break}const ge=y[_e];ge&&ge.connect(pe)}}const U=new C,V=new C;function j(B,q,pe){U.setFromMatrixPosition(q.matrixWorld),V.setFromMatrixPosition(pe.matrixWorld);const _e=U.distanceTo(V),ge=q.projectionMatrix.elements,Pe=pe.projectionMatrix.elements,De=ge[14]/(ge[10]-1),be=ge[14]/(ge[10]+1),je=(ge[9]+1)/ge[5],O=(ge[9]-1)/ge[5],Ct=(ge[8]-1)/ge[0],Se=(Pe[8]+1)/Pe[0],Ce=De*Ct,fe=De*Se,rt=_e/(-Ct+Se),Oe=rt*-Ct;q.matrixWorld.decompose(B.position,B.quaternion,B.scale),B.translateX(Oe),B.translateZ(rt),B.matrixWorld.compose(B.position,B.quaternion,B.scale),B.matrixWorldInverse.copy(B.matrixWorld).invert();const E=De+rt,v=be+rt,N=Ce-Oe,Q=fe+(_e-Oe),Z=je*be/v*E,$=O*be/v*E;B.projectionMatrix.makePerspective(N,Q,Z,$,E,v),B.projectionMatrixInverse.copy(B.projectionMatrix).invert()}function X(B,q){q===null?B.matrixWorld.copy(B.matrix):B.matrixWorld.multiplyMatrices(q.matrixWorld,B.matrix),B.matrixWorldInverse.copy(B.matrixWorld).invert()}this.updateCamera=function(B){if(a===null)return;S.near=A.near=w.near=B.near,S.far=A.far=w.far=B.far,(T!==S.near||H!==S.far)&&(a.updateRenderState({depthNear:S.near,depthFar:S.far}),T=S.near,H=S.far);const q=B.parent,pe=S.cameras;X(S,q);for(let _e=0;_e<pe.length;_e++)X(pe[_e],q);pe.length===2?j(S,w,A):S.projectionMatrix.copy(w.projectionMatrix),k(B,S,q)};function k(B,q,pe){pe===null?B.matrix.copy(q.matrixWorld):(B.matrix.copy(pe.matrixWorld),B.matrix.invert(),B.matrix.multiply(q.matrixWorld)),B.matrix.decompose(B.position,B.quaternion,B.scale),B.updateMatrixWorld(!0),B.projectionMatrix.copy(q.projectionMatrix),B.projectionMatrixInverse.copy(q.projectionMatrixInverse),B.isPerspectiveCamera&&(B.fov=gn*2*Math.atan(1/B.projectionMatrix.elements[5]),B.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(p===null&&f===null))return o},this.setFoveation=function(B){o=B,p!==null&&(p.fixedFoveation=B),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=B)};let Y=null;function J(B,q){if(u=q.getViewerPose(c||l),g=q,u!==null){const pe=u.views;f!==null&&(e.setRenderTargetFramebuffer(d,f.framebuffer),e.setRenderTarget(d));let _e=!1;pe.length!==S.cameras.length&&(S.cameras.length=0,_e=!0);for(let ge=0;ge<pe.length;ge++){const Pe=pe[ge];let De=null;if(f!==null)De=f.getViewport(Pe);else{const je=h.getViewSubImage(p,Pe);De=je.viewport,ge===0&&(e.setRenderTargetTextures(d,je.colorTexture,p.ignoreDepthValues?void 0:je.depthStencilTexture),e.setRenderTarget(d))}let be=W[ge];be===void 0&&(be=new Bt,be.layers.enable(ge),be.viewport=new it,W[ge]=be),be.matrix.fromArray(Pe.transform.matrix),be.matrix.decompose(be.position,be.quaternion,be.scale),be.projectionMatrix.fromArray(Pe.projectionMatrix),be.projectionMatrixInverse.copy(be.projectionMatrix).invert(),be.viewport.set(De.x,De.y,De.width,De.height),ge===0&&(S.matrix.copy(be.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),_e===!0&&S.cameras.push(be)}}for(let pe=0;pe<y.length;pe++){const _e=x[pe],ge=y[pe];_e!==null&&ge!==void 0&&ge.update(_e,q,c||l)}Y&&Y(B,q),q.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:q}),g=null}const le=new Po;le.setAnimationLoop(J),this.setAnimationLoop=function(B){Y=B},this.dispose=function(){}}}function $p(r,e){function t(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function i(m,d){d.color.getRGB(m.fogColor.value,Ro(r)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function a(m,d,y,x,b){d.isMeshBasicMaterial||d.isMeshLambertMaterial?n(m,d):d.isMeshToonMaterial?(n(m,d),h(m,d)):d.isMeshPhongMaterial?(n(m,d),u(m,d)):d.isMeshStandardMaterial?(n(m,d),p(m,d),d.isMeshPhysicalMaterial&&f(m,d,b)):d.isMeshMatcapMaterial?(n(m,d),g(m,d)):d.isMeshDepthMaterial?n(m,d):d.isMeshDistanceMaterial?(n(m,d),_(m,d)):d.isMeshNormalMaterial?n(m,d):d.isLineBasicMaterial?(l(m,d),d.isLineDashedMaterial&&s(m,d)):d.isPointsMaterial?o(m,d,y,x):d.isSpriteMaterial?c(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function n(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,t(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===Nt&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,t(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===Nt&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,t(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,t(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const y=e.get(d).envMap;if(y&&(m.envMap.value=y,m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap){m.lightMap.value=d.lightMap;const x=r._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=d.lightMapIntensity*x,t(d.lightMap,m.lightMapTransform)}d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,m.aoMapTransform))}function l(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform))}function s(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function o(m,d,y,x){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*y,m.scale.value=x*.5,d.map&&(m.map.value=d.map,t(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function u(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function h(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function p(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,m.roughnessMapTransform)),e.get(d).envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function f(m,d,y){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Nt&&m.clearcoatNormalScale.value.negate())),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,d){d.matcap&&(m.matcap.value=d.matcap)}function _(m,d){const y=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:a}}function Qp(r,e,t,i){let a={},n={},l=[];const s=t.isWebGL2?r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS):0;function o(y,x){const b=x.program;i.uniformBlockBinding(y,b)}function c(y,x){let b=a[y.id];b===void 0&&(g(y),b=u(y),a[y.id]=b,y.addEventListener("dispose",m));const P=x.program;i.updateUBOMapping(y,P);const w=e.render.frame;n[y.id]!==w&&(p(y),n[y.id]=w)}function u(y){const x=h();y.__bindingPointIndex=x;const b=r.createBuffer(),P=y.__size,w=y.usage;return r.bindBuffer(r.UNIFORM_BUFFER,b),r.bufferData(r.UNIFORM_BUFFER,P,w),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,x,b),b}function h(){for(let y=0;y<s;y++)if(l.indexOf(y)===-1)return l.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(y){const x=a[y.id],b=y.uniforms,P=y.__cache;r.bindBuffer(r.UNIFORM_BUFFER,x);for(let w=0,A=b.length;w<A;w++){const W=Array.isArray(b[w])?b[w]:[b[w]];for(let S=0,T=W.length;S<T;S++){const H=W[S];if(f(H,w,S,P)===!0){const z=H.__offset,ee=Array.isArray(H.value)?H.value:[H.value];let L=0;for(let U=0;U<ee.length;U++){const V=ee[U],j=_(V);typeof V=="number"||typeof V=="boolean"?(H.__data[0]=V,r.bufferSubData(r.UNIFORM_BUFFER,z+L,H.__data)):V.isMatrix3?(H.__data[0]=V.elements[0],H.__data[1]=V.elements[1],H.__data[2]=V.elements[2],H.__data[3]=0,H.__data[4]=V.elements[3],H.__data[5]=V.elements[4],H.__data[6]=V.elements[5],H.__data[7]=0,H.__data[8]=V.elements[6],H.__data[9]=V.elements[7],H.__data[10]=V.elements[8],H.__data[11]=0):(V.toArray(H.__data,L),L+=j.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,z,H.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function f(y,x,b,P){const w=y.value,A=x+"_"+b;if(P[A]===void 0)return typeof w=="number"||typeof w=="boolean"?P[A]=w:P[A]=w.clone(),!0;{const W=P[A];if(typeof w=="number"||typeof w=="boolean"){if(W!==w)return P[A]=w,!0}else if(W.equals(w)===!1)return W.copy(w),!0}return!1}function g(y){const x=y.uniforms;let b=0;const P=16;for(let A=0,W=x.length;A<W;A++){const S=Array.isArray(x[A])?x[A]:[x[A]];for(let T=0,H=S.length;T<H;T++){const z=S[T],ee=Array.isArray(z.value)?z.value:[z.value];for(let L=0,U=ee.length;L<U;L++){const V=ee[L],j=_(V),X=b%P;X!==0&&P-X<j.boundary&&(b+=P-X),z.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=b,b+=j.storage}}}const w=b%P;return w>0&&(b+=P-w),y.__size=b,y.__cache={},this}function _(y){const x={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(x.boundary=4,x.storage=4):y.isVector2?(x.boundary=8,x.storage=8):y.isVector3||y.isColor?(x.boundary=16,x.storage=12):y.isVector4?(x.boundary=16,x.storage=16):y.isMatrix3?(x.boundary=48,x.storage=48):y.isMatrix4?(x.boundary=64,x.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),x}function m(y){const x=y.target;x.removeEventListener("dispose",m);const b=l.indexOf(x.__bindingPointIndex);l.splice(b,1),r.deleteBuffer(a[x.id]),delete a[x.id],delete n[x.id]}function d(){for(const y in a)r.deleteBuffer(a[y]);l=[],a={},n={}}return{bind:o,update:c,dispose:d}}class Bo{constructor(e={}){const{canvas:t=Yl(),context:i=null,depth:a=!0,stencil:n=!0,alpha:l=!1,antialias:s=!1,premultipliedAlpha:o=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let p;i!==null?p=i.getContextAttributes().alpha:p=l;const f=new Uint32Array(4),g=new Int32Array(4);let _=null,m=null;const d=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Mt,this._useLegacyLights=!1,this.toneMapping=wi,this.toneMappingExposure=1;const x=this;let b=!1,P=0,w=0,A=null,W=-1,S=null;const T=new it,H=new it;let z=null;const ee=new Xe(0);let L=0,U=t.width,V=t.height,j=1,X=null,k=null;const Y=new it(0,0,U,V),J=new it(0,0,U,V);let le=!1;const B=new bn;let q=!1,pe=!1,_e=null;const ge=new pt,Pe=new Ae,De=new C,be={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function je(){return A===null?j:1}let O=i;function Ct(M,D){for(let F=0;F<M.length;F++){const G=M[F],I=t.getContext(G,D);if(I!==null)return I}return null}try{const M={alpha:!0,depth:a,stencil:n,antialias:s,premultipliedAlpha:o,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${xn}`),t.addEventListener("webglcontextlost",ie,!1),t.addEventListener("webglcontextrestored",R,!1),t.addEventListener("webglcontextcreationerror",re,!1),O===null){const D=["webgl2","webgl","experimental-webgl"];if(x.isWebGL1Renderer===!0&&D.shift(),O=Ct(D,M),O===null)throw Ct(D)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&O instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),O.getShaderPrecisionFormat===void 0&&(O.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let Se,Ce,fe,rt,Oe,E,v,N,Q,Z,$,me,se,he,ye,Fe,K,Ye,ke,Re,xe,de,Ue,qe;function nt(){Se=new cd(O),Ce=new rd(O,Se,e),Se.init(Ce),de=new Yp(O,Se,Ce),fe=new jp(O,Se,Ce),rt=new dd(O),Oe=new Dp,E=new qp(O,Se,fe,Oe,Ce,de,rt),v=new nd(x),N=new ld(x),Q=new Mc(O,Ce),Ue=new td(O,Se,Q,Ce),Z=new ud(O,Q,rt,Ue),$=new gd(O,Z,Q,rt),ke=new md(O,Ce,E),Fe=new ad(Oe),me=new Pp(x,v,N,Se,Ce,Ue,Fe),se=new $p(x,Oe),he=new Ip,ye=new Gp(Se,Ce),Ye=new ed(x,v,N,fe,$,p,o),K=new Xp(x,$,Ce),qe=new Qp(O,rt,Ce,fe),Re=new id(O,Se,rt,Ce),xe=new hd(O,Se,rt,Ce),rt.programs=me.programs,x.capabilities=Ce,x.extensions=Se,x.properties=Oe,x.renderLists=he,x.shadowMap=K,x.state=fe,x.info=rt}nt();const Ge=new Jp(x,O);this.xr=Ge,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const M=Se.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=Se.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(M){M!==void 0&&(j=M,this.setSize(U,V,!1))},this.getSize=function(M){return M.set(U,V)},this.setSize=function(M,D,F=!0){if(Ge.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}U=M,V=D,t.width=Math.floor(M*j),t.height=Math.floor(D*j),F===!0&&(t.style.width=M+"px",t.style.height=D+"px"),this.setViewport(0,0,M,D)},this.getDrawingBufferSize=function(M){return M.set(U*j,V*j).floor()},this.setDrawingBufferSize=function(M,D,F){U=M,V=D,j=F,t.width=Math.floor(M*F),t.height=Math.floor(D*F),this.setViewport(0,0,M,D)},this.getCurrentViewport=function(M){return M.copy(T)},this.getViewport=function(M){return M.copy(Y)},this.setViewport=function(M,D,F,G){M.isVector4?Y.set(M.x,M.y,M.z,M.w):Y.set(M,D,F,G),fe.viewport(T.copy(Y).multiplyScalar(j).floor())},this.getScissor=function(M){return M.copy(J)},this.setScissor=function(M,D,F,G){M.isVector4?J.set(M.x,M.y,M.z,M.w):J.set(M,D,F,G),fe.scissor(H.copy(J).multiplyScalar(j).floor())},this.getScissorTest=function(){return le},this.setScissorTest=function(M){fe.setScissorTest(le=M)},this.setOpaqueSort=function(M){X=M},this.setTransparentSort=function(M){k=M},this.getClearColor=function(M){return M.copy(Ye.getClearColor())},this.setClearColor=function(){Ye.setClearColor.apply(Ye,arguments)},this.getClearAlpha=function(){return Ye.getClearAlpha()},this.setClearAlpha=function(){Ye.setClearAlpha.apply(Ye,arguments)},this.clear=function(M=!0,D=!0,F=!0){let G=0;if(M){let I=!1;if(A!==null){const ne=A.texture.format;I=ne===go||ne===mo||ne===fo}if(I){const ne=A.texture.type,ve=ne===Ai||ne===Ei||ne===Sn||ne===Vi||ne===ho||ne===po,Te=Ye.getClearColor(),we=Ye.getClearAlpha(),We=Te.r,ze=Te.g,Be=Te.b;ve?(f[0]=We,f[1]=ze,f[2]=Be,f[3]=we,O.clearBufferuiv(O.COLOR,0,f)):(g[0]=We,g[1]=ze,g[2]=Be,g[3]=we,O.clearBufferiv(O.COLOR,0,g))}else G|=O.COLOR_BUFFER_BIT}D&&(G|=O.DEPTH_BUFFER_BIT),F&&(G|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ie,!1),t.removeEventListener("webglcontextrestored",R,!1),t.removeEventListener("webglcontextcreationerror",re,!1),he.dispose(),ye.dispose(),Oe.dispose(),v.dispose(),N.dispose(),$.dispose(),Ue.dispose(),qe.dispose(),me.dispose(),Ge.dispose(),Ge.removeEventListener("sessionstart",Vt),Ge.removeEventListener("sessionend",$e),_e&&(_e.dispose(),_e=null),Lt.stop()};function ie(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function R(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;const M=rt.autoReset,D=K.enabled,F=K.autoUpdate,G=K.needsUpdate,I=K.type;nt(),rt.autoReset=M,K.enabled=D,K.autoUpdate=F,K.needsUpdate=G,K.type=I}function re(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function oe(M){const D=M.target;D.removeEventListener("dispose",oe),Le(D)}function Le(M){Ee(M),Oe.remove(M)}function Ee(M){const D=Oe.get(M).programs;D!==void 0&&(D.forEach(function(F){me.releaseProgram(F)}),M.isShaderMaterial&&me.releaseShaderCache(M))}this.renderBufferDirect=function(M,D,F,G,I,ne){D===null&&(D=be);const ve=I.isMesh&&I.matrixWorld.determinant()<0,Te=Wo(M,D,F,G,I);fe.setMaterial(G,ve);let we=F.index,We=1;if(G.wireframe===!0){if(we=Z.getWireframeAttribute(F),we===void 0)return;We=2}const ze=F.drawRange,Be=F.attributes.position;let St=ze.start*We,ft=(ze.start+ze.count)*We;ne!==null&&(St=Math.max(St,ne.start*We),ft=Math.min(ft,(ne.start+ne.count)*We)),we!==null?(St=Math.max(St,0),ft=Math.min(ft,we.count)):Be!=null&&(St=Math.max(St,0),ft=Math.min(ft,Be.count));const kt=ft-St;if(kt<0||kt===1/0)return;Ue.setup(I,G,Te,F,we);let ai,ot=Re;if(we!==null&&(ai=Q.get(we),ot=xe,ot.setIndex(ai)),I.isMesh)G.wireframe===!0?(fe.setLineWidth(G.wireframeLinewidth*je()),ot.setMode(O.LINES)):ot.setMode(O.TRIANGLES);else if(I.isLine){let He=G.linewidth;He===void 0&&(He=1),fe.setLineWidth(He*je()),I.isLineSegments?ot.setMode(O.LINES):I.isLineLoop?ot.setMode(O.LINE_LOOP):ot.setMode(O.LINE_STRIP)}else I.isPoints?ot.setMode(O.POINTS):I.isSprite&&ot.setMode(O.TRIANGLES);if(I.isBatchedMesh)ot.renderMultiDraw(I._multiDrawStarts,I._multiDrawCounts,I._multiDrawCount);else if(I.isInstancedMesh)ot.renderInstances(St,kt,I.count);else if(F.isInstancedBufferGeometry){const He=F._maxInstanceCount!==void 0?F._maxInstanceCount:1/0,ya=Math.min(F.instanceCount,He);ot.renderInstances(St,kt,ya)}else ot.render(St,kt)};function Ze(M,D,F){M.transparent===!0&&M.side===at&&M.forceSinglePass===!1?(M.side=Nt,M.needsUpdate=!0,Fr(M,D,F),M.side=Ri,M.needsUpdate=!0,Fr(M,D,F),M.side=at):Fr(M,D,F)}this.compile=function(M,D,F=null){F===null&&(F=M),m=ye.get(F),m.init(),y.push(m),F.traverseVisible(function(I){I.isLight&&I.layers.test(D.layers)&&(m.pushLight(I),I.castShadow&&m.pushShadow(I))}),M!==F&&M.traverseVisible(function(I){I.isLight&&I.layers.test(D.layers)&&(m.pushLight(I),I.castShadow&&m.pushShadow(I))}),m.setupLights(x._useLegacyLights);const G=new Set;return M.traverse(function(I){const ne=I.material;if(ne)if(Array.isArray(ne))for(let ve=0;ve<ne.length;ve++){const Te=ne[ve];Ze(Te,F,I),G.add(Te)}else Ze(ne,F,I),G.add(ne)}),y.pop(),m=null,G},this.compileAsync=function(M,D,F=null){const G=this.compile(M,D,F);return new Promise(I=>{function ne(){if(G.forEach(function(ve){Oe.get(ve).currentProgram.isReady()&&G.delete(ve)}),G.size===0){I(M);return}setTimeout(ne,10)}Se.get("KHR_parallel_shader_compile")!==null?ne():setTimeout(ne,10)})};let Je=null;function ct(M){Je&&Je(M)}function Vt(){Lt.stop()}function $e(){Lt.start()}const Lt=new Po;Lt.setAnimationLoop(ct),typeof self<"u"&&Lt.setContext(self),this.setAnimationLoop=function(M){Je=M,Ge.setAnimationLoop(M),M===null?Lt.stop():Lt.start()},Ge.addEventListener("sessionstart",Vt),Ge.addEventListener("sessionend",$e),this.render=function(M,D){if(D!==void 0&&D.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),Ge.enabled===!0&&Ge.isPresenting===!0&&(Ge.cameraAutoUpdate===!0&&Ge.updateCamera(D),D=Ge.getCamera()),M.isScene===!0&&M.onBeforeRender(x,M,D,A),m=ye.get(M,y.length),m.init(),y.push(m),ge.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),B.setFromProjectionMatrix(ge),pe=this.localClippingEnabled,q=Fe.init(this.clippingPlanes,pe),_=he.get(M,d.length),_.init(),d.push(_),ti(M,D,0,x.sortObjects),_.finish(),x.sortObjects===!0&&_.sort(X,k),this.info.render.frame++,q===!0&&Fe.beginShadows();const F=m.state.shadowsArray;if(K.render(F,M,D),q===!0&&Fe.endShadows(),this.info.autoReset===!0&&this.info.reset(),Ye.render(_,M),m.setupLights(x._useLegacyLights),D.isArrayCamera){const G=D.cameras;for(let I=0,ne=G.length;I<ne;I++){const ve=G[I];Un(_,M,ve,ve.viewport)}}else Un(_,M,D);A!==null&&(E.updateMultisampleRenderTarget(A),E.updateRenderTargetMipmap(A)),M.isScene===!0&&M.onAfterRender(x,M,D),Ue.resetDefaultState(),W=-1,S=null,y.pop(),y.length>0?m=y[y.length-1]:m=null,d.pop(),d.length>0?_=d[d.length-1]:_=null};function ti(M,D,F,G){if(M.visible===!1)return;if(M.layers.test(D.layers)){if(M.isGroup)F=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(D);else if(M.isLight)m.pushLight(M),M.castShadow&&m.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||B.intersectsSprite(M)){G&&De.setFromMatrixPosition(M.matrixWorld).applyMatrix4(ge);const ne=$.update(M),ve=M.material;ve.visible&&_.push(M,ne,ve,F,De.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||B.intersectsObject(M))){const ne=$.update(M),ve=M.material;if(G&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),De.copy(M.boundingSphere.center)):(ne.boundingSphere===null&&ne.computeBoundingSphere(),De.copy(ne.boundingSphere.center)),De.applyMatrix4(M.matrixWorld).applyMatrix4(ge)),Array.isArray(ve)){const Te=ne.groups;for(let we=0,We=Te.length;we<We;we++){const ze=Te[we],Be=ve[ze.materialIndex];Be&&Be.visible&&_.push(M,ne,Be,F,De.z,ze)}}else ve.visible&&_.push(M,ne,ve,F,De.z,null)}}const I=M.children;for(let ne=0,ve=I.length;ne<ve;ne++)ti(I[ne],D,F,G)}function Un(M,D,F,G){const I=M.opaque,ne=M.transmissive,ve=M.transparent;m.setupLightsView(F),q===!0&&Fe.setGlobalState(x.clippingPlanes,F),ne.length>0&&ko(I,ne,D,F),G&&fe.viewport(T.copy(G)),I.length>0&&Or(I,D,F),ne.length>0&&Or(ne,D,F),ve.length>0&&Or(ve,D,F),fe.buffers.depth.setTest(!0),fe.buffers.depth.setMask(!0),fe.buffers.color.setMask(!0),fe.setPolygonOffset(!1)}function ko(M,D,F,G){if((F.isScene===!0?F.overrideMaterial:null)!==null)return;const I=Ce.isWebGL2;_e===null&&(_e=new Xi(1,1,{generateMipmaps:!0,type:Se.has("EXT_color_buffer_half_float")?Pr:Ai,minFilter:Lr,samples:I?4:0})),x.getDrawingBufferSize(Pe),I?_e.setSize(Pe.x,Pe.y):_e.setSize(_n(Pe.x),_n(Pe.y));const ne=x.getRenderTarget();x.setRenderTarget(_e),x.getClearColor(ee),L=x.getClearAlpha(),L<1&&x.setClearColor(16777215,.5),x.clear();const ve=x.toneMapping;x.toneMapping=wi,Or(M,F,G),E.updateMultisampleRenderTarget(_e),E.updateRenderTargetMipmap(_e);let Te=!1;for(let we=0,We=D.length;we<We;we++){const ze=D[we],Be=ze.object,St=ze.geometry,ft=ze.material,kt=ze.group;if(ft.side===at&&Be.layers.test(G.layers)){const ai=ft.side;ft.side=Nt,ft.needsUpdate=!0,In(Be,F,G,St,ft,kt),ft.side=ai,ft.needsUpdate=!0,Te=!0}}Te===!0&&(E.updateMultisampleRenderTarget(_e),E.updateRenderTargetMipmap(_e)),x.setRenderTarget(ne),x.setClearColor(ee,L),x.toneMapping=ve}function Or(M,D,F){const G=D.isScene===!0?D.overrideMaterial:null;for(let I=0,ne=M.length;I<ne;I++){const ve=M[I],Te=ve.object,we=ve.geometry,We=G===null?ve.material:G,ze=ve.group;Te.layers.test(F.layers)&&In(Te,D,F,we,We,ze)}}function In(M,D,F,G,I,ne){M.onBeforeRender(x,D,F,G,I,ne),M.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),I.onBeforeRender(x,D,F,G,M,ne),I.transparent===!0&&I.side===at&&I.forceSinglePass===!1?(I.side=Nt,I.needsUpdate=!0,x.renderBufferDirect(F,D,G,I,M,ne),I.side=Ri,I.needsUpdate=!0,x.renderBufferDirect(F,D,G,I,M,ne),I.side=at):x.renderBufferDirect(F,D,G,I,M,ne),M.onAfterRender(x,D,F,G,I,ne)}function Fr(M,D,F){D.isScene!==!0&&(D=be);const G=Oe.get(M),I=m.state.lights,ne=m.state.shadowsArray,ve=I.state.version,Te=me.getParameters(M,I.state,ne,D,F),we=me.getProgramCacheKey(Te);let We=G.programs;G.environment=M.isMeshStandardMaterial?D.environment:null,G.fog=D.fog,G.envMap=(M.isMeshStandardMaterial?N:v).get(M.envMap||G.environment),We===void 0&&(M.addEventListener("dispose",oe),We=new Map,G.programs=We);let ze=We.get(we);if(ze!==void 0){if(G.currentProgram===ze&&G.lightsStateVersion===ve)return On(M,Te),ze}else Te.uniforms=me.getUniforms(M),M.onBuild(F,Te,x),M.onBeforeCompile(Te,x),ze=me.acquireProgram(Te,we),We.set(we,ze),G.uniforms=Te.uniforms;const Be=G.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Be.clippingPlanes=Fe.uniform),On(M,Te),G.needsLights=jo(M),G.lightsStateVersion=ve,G.needsLights&&(Be.ambientLightColor.value=I.state.ambient,Be.lightProbe.value=I.state.probe,Be.directionalLights.value=I.state.directional,Be.directionalLightShadows.value=I.state.directionalShadow,Be.spotLights.value=I.state.spot,Be.spotLightShadows.value=I.state.spotShadow,Be.rectAreaLights.value=I.state.rectArea,Be.ltc_1.value=I.state.rectAreaLTC1,Be.ltc_2.value=I.state.rectAreaLTC2,Be.pointLights.value=I.state.point,Be.pointLightShadows.value=I.state.pointShadow,Be.hemisphereLights.value=I.state.hemi,Be.directionalShadowMap.value=I.state.directionalShadowMap,Be.directionalShadowMatrix.value=I.state.directionalShadowMatrix,Be.spotShadowMap.value=I.state.spotShadowMap,Be.spotLightMatrix.value=I.state.spotLightMatrix,Be.spotLightMap.value=I.state.spotLightMap,Be.pointShadowMap.value=I.state.pointShadowMap,Be.pointShadowMatrix.value=I.state.pointShadowMatrix),G.currentProgram=ze,G.uniformsList=null,ze}function Nn(M){if(M.uniformsList===null){const D=M.currentProgram.getUniforms();M.uniformsList=la.seqWithValue(D.seq,M.uniforms)}return M.uniformsList}function On(M,D){const F=Oe.get(M);F.outputColorSpace=D.outputColorSpace,F.batching=D.batching,F.instancing=D.instancing,F.instancingColor=D.instancingColor,F.skinning=D.skinning,F.morphTargets=D.morphTargets,F.morphNormals=D.morphNormals,F.morphColors=D.morphColors,F.morphTargetsCount=D.morphTargetsCount,F.numClippingPlanes=D.numClippingPlanes,F.numIntersection=D.numClipIntersection,F.vertexAlphas=D.vertexAlphas,F.vertexTangents=D.vertexTangents,F.toneMapping=D.toneMapping}function Wo(M,D,F,G,I){D.isScene!==!0&&(D=be),E.resetTextureUnits();const ne=D.fog,ve=G.isMeshStandardMaterial?D.environment:null,Te=A===null?x.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:pi,we=(G.isMeshStandardMaterial?N:v).get(G.envMap||ve),We=G.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,ze=!!F.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Be=!!F.morphAttributes.position,St=!!F.morphAttributes.normal,ft=!!F.morphAttributes.color;let kt=wi;G.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(kt=x.toneMapping);const ai=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,ot=ai!==void 0?ai.length:0,He=Oe.get(G),ya=m.state.lights;if(q===!0&&(pe===!0||M!==S)){const Wt=M===S&&G.id===W;Fe.setState(G,M,Wt)}let Ta=!1;G.version===He.__version?(He.needsLights&&He.lightsStateVersion!==ya.state.version||He.outputColorSpace!==Te||I.isBatchedMesh&&He.batching===!1||!I.isBatchedMesh&&He.batching===!0||I.isInstancedMesh&&He.instancing===!1||!I.isInstancedMesh&&He.instancing===!0||I.isSkinnedMesh&&He.skinning===!1||!I.isSkinnedMesh&&He.skinning===!0||I.isInstancedMesh&&He.instancingColor===!0&&I.instanceColor===null||I.isInstancedMesh&&He.instancingColor===!1&&I.instanceColor!==null||He.envMap!==we||G.fog===!0&&He.fog!==ne||He.numClippingPlanes!==void 0&&(He.numClippingPlanes!==Fe.numPlanes||He.numIntersection!==Fe.numIntersection)||He.vertexAlphas!==We||He.vertexTangents!==ze||He.morphTargets!==Be||He.morphNormals!==St||He.morphColors!==ft||He.toneMapping!==kt||Ce.isWebGL2===!0&&He.morphTargetsCount!==ot)&&(Ta=!0):(Ta=!0,He.__version=G.version);let Li=He.currentProgram;Ta===!0&&(Li=Fr(G,D,I));let Fn=!1,Sr=!1,ba=!1;const Et=Li.getUniforms(),Pi=He.uniforms;if(fe.useProgram(Li.program)&&(Fn=!0,Sr=!0,ba=!0),G.id!==W&&(W=G.id,Sr=!0),Fn||S!==M){Et.setValue(O,"projectionMatrix",M.projectionMatrix),Et.setValue(O,"viewMatrix",M.matrixWorldInverse);const Wt=Et.map.cameraPosition;Wt!==void 0&&Wt.setValue(O,De.setFromMatrixPosition(M.matrixWorld)),Ce.logarithmicDepthBuffer&&Et.setValue(O,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&Et.setValue(O,"isOrthographic",M.isOrthographicCamera===!0),S!==M&&(S=M,Sr=!0,ba=!0)}if(I.isSkinnedMesh){Et.setOptional(O,I,"bindMatrix"),Et.setOptional(O,I,"bindMatrixInverse");const Wt=I.skeleton;Wt&&(Ce.floatVertexTextures?(Wt.boneTexture===null&&Wt.computeBoneTexture(),Et.setValue(O,"boneTexture",Wt.boneTexture,E)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}I.isBatchedMesh&&(Et.setOptional(O,I,"batchingTexture"),Et.setValue(O,"batchingTexture",I._matricesTexture,E));const wa=F.morphAttributes;if((wa.position!==void 0||wa.normal!==void 0||wa.color!==void 0&&Ce.isWebGL2===!0)&&ke.update(I,F,Li),(Sr||He.receiveShadow!==I.receiveShadow)&&(He.receiveShadow=I.receiveShadow,Et.setValue(O,"receiveShadow",I.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(Pi.envMap.value=we,Pi.flipEnvMap.value=we.isCubeTexture&&we.isRenderTargetTexture===!1?-1:1),Sr&&(Et.setValue(O,"toneMappingExposure",x.toneMappingExposure),He.needsLights&&Xo(Pi,ba),ne&&G.fog===!0&&se.refreshFogUniforms(Pi,ne),se.refreshMaterialUniforms(Pi,G,j,V,_e),la.upload(O,Nn(He),Pi,E)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(la.upload(O,Nn(He),Pi,E),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&Et.setValue(O,"center",I.center),Et.setValue(O,"modelViewMatrix",I.modelViewMatrix),Et.setValue(O,"normalMatrix",I.normalMatrix),Et.setValue(O,"modelMatrix",I.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const Wt=G.uniformsGroups;for(let Aa=0,qo=Wt.length;Aa<qo;Aa++)if(Ce.isWebGL2){const zn=Wt[Aa];qe.update(zn,Li),qe.bind(zn,Li)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Li}function Xo(M,D){M.ambientLightColor.needsUpdate=D,M.lightProbe.needsUpdate=D,M.directionalLights.needsUpdate=D,M.directionalLightShadows.needsUpdate=D,M.pointLights.needsUpdate=D,M.pointLightShadows.needsUpdate=D,M.spotLights.needsUpdate=D,M.spotLightShadows.needsUpdate=D,M.rectAreaLights.needsUpdate=D,M.hemisphereLights.needsUpdate=D}function jo(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(M,D,F){Oe.get(M.texture).__webglTexture=D,Oe.get(M.depthTexture).__webglTexture=F;const G=Oe.get(M);G.__hasExternalTextures=!0,G.__hasExternalTextures&&(G.__autoAllocateDepthBuffer=F===void 0,G.__autoAllocateDepthBuffer||Se.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),G.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(M,D){const F=Oe.get(M);F.__webglFramebuffer=D,F.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(M,D=0,F=0){A=M,P=D,w=F;let G=!0,I=null,ne=!1,ve=!1;if(M){const Te=Oe.get(M);Te.__useDefaultFramebuffer!==void 0?(fe.bindFramebuffer(O.FRAMEBUFFER,null),G=!1):Te.__webglFramebuffer===void 0?E.setupRenderTarget(M):Te.__hasExternalTextures&&E.rebindTextures(M,Oe.get(M.texture).__webglTexture,Oe.get(M.depthTexture).__webglTexture);const we=M.texture;(we.isData3DTexture||we.isDataArrayTexture||we.isCompressedArrayTexture)&&(ve=!0);const We=Oe.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(We[D])?I=We[D][F]:I=We[D],ne=!0):Ce.isWebGL2&&M.samples>0&&E.useMultisampledRTT(M)===!1?I=Oe.get(M).__webglMultisampledFramebuffer:Array.isArray(We)?I=We[F]:I=We,T.copy(M.viewport),H.copy(M.scissor),z=M.scissorTest}else T.copy(Y).multiplyScalar(j).floor(),H.copy(J).multiplyScalar(j).floor(),z=le;if(fe.bindFramebuffer(O.FRAMEBUFFER,I)&&Ce.drawBuffers&&G&&fe.drawBuffers(M,I),fe.viewport(T),fe.scissor(H),fe.setScissorTest(z),ne){const Te=Oe.get(M.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+D,Te.__webglTexture,F)}else if(ve){const Te=Oe.get(M.texture),we=D||0;O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,Te.__webglTexture,F||0,we)}W=-1},this.readRenderTargetPixels=function(M,D,F,G,I,ne,ve){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Te=Oe.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&ve!==void 0&&(Te=Te[ve]),Te){fe.bindFramebuffer(O.FRAMEBUFFER,Te);try{const we=M.texture,We=we.format,ze=we.type;if(We!==ei&&de.convert(We)!==O.getParameter(O.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Be=ze===Pr&&(Se.has("EXT_color_buffer_half_float")||Ce.isWebGL2&&Se.has("EXT_color_buffer_float"));if(ze!==Ai&&de.convert(ze)!==O.getParameter(O.IMPLEMENTATION_COLOR_READ_TYPE)&&!(ze===yi&&(Ce.isWebGL2||Se.has("OES_texture_float")||Se.has("WEBGL_color_buffer_float")))&&!Be){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=M.width-G&&F>=0&&F<=M.height-I&&O.readPixels(D,F,G,I,de.convert(We),de.convert(ze),ne)}finally{const we=A!==null?Oe.get(A).__webglFramebuffer:null;fe.bindFramebuffer(O.FRAMEBUFFER,we)}}},this.copyFramebufferToTexture=function(M,D,F=0){const G=Math.pow(2,-F),I=Math.floor(D.image.width*G),ne=Math.floor(D.image.height*G);E.setTexture2D(D,0),O.copyTexSubImage2D(O.TEXTURE_2D,F,0,0,M.x,M.y,I,ne),fe.unbindTexture()},this.copyTextureToTexture=function(M,D,F,G=0){const I=D.image.width,ne=D.image.height,ve=de.convert(F.format),Te=de.convert(F.type);E.setTexture2D(F,0),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,F.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,F.unpackAlignment),D.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,G,M.x,M.y,I,ne,ve,Te,D.image.data):D.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,G,M.x,M.y,D.mipmaps[0].width,D.mipmaps[0].height,ve,D.mipmaps[0].data):O.texSubImage2D(O.TEXTURE_2D,G,M.x,M.y,ve,Te,D.image),G===0&&F.generateMipmaps&&O.generateMipmap(O.TEXTURE_2D),fe.unbindTexture()},this.copyTextureToTexture3D=function(M,D,F,G,I=0){if(x.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const ne=M.max.x-M.min.x+1,ve=M.max.y-M.min.y+1,Te=M.max.z-M.min.z+1,we=de.convert(G.format),We=de.convert(G.type);let ze;if(G.isData3DTexture)E.setTexture3D(G,0),ze=O.TEXTURE_3D;else if(G.isDataArrayTexture||G.isCompressedArrayTexture)E.setTexture2DArray(G,0),ze=O.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,G.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,G.unpackAlignment);const Be=O.getParameter(O.UNPACK_ROW_LENGTH),St=O.getParameter(O.UNPACK_IMAGE_HEIGHT),ft=O.getParameter(O.UNPACK_SKIP_PIXELS),kt=O.getParameter(O.UNPACK_SKIP_ROWS),ai=O.getParameter(O.UNPACK_SKIP_IMAGES),ot=F.isCompressedTexture?F.mipmaps[I]:F.image;O.pixelStorei(O.UNPACK_ROW_LENGTH,ot.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,ot.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,M.min.x),O.pixelStorei(O.UNPACK_SKIP_ROWS,M.min.y),O.pixelStorei(O.UNPACK_SKIP_IMAGES,M.min.z),F.isDataTexture||F.isData3DTexture?O.texSubImage3D(ze,I,D.x,D.y,D.z,ne,ve,Te,we,We,ot.data):F.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),O.compressedTexSubImage3D(ze,I,D.x,D.y,D.z,ne,ve,Te,we,ot.data)):O.texSubImage3D(ze,I,D.x,D.y,D.z,ne,ve,Te,we,We,ot),O.pixelStorei(O.UNPACK_ROW_LENGTH,Be),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,St),O.pixelStorei(O.UNPACK_SKIP_PIXELS,ft),O.pixelStorei(O.UNPACK_SKIP_ROWS,kt),O.pixelStorei(O.UNPACK_SKIP_IMAGES,ai),I===0&&G.generateMipmaps&&O.generateMipmap(ze),fe.unbindTexture()},this.initTexture=function(M){M.isCubeTexture?E.setTextureCube(M,0):M.isData3DTexture?E.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?E.setTexture2DArray(M,0):E.setTexture2D(M,0),fe.unbindTexture()},this.resetState=function(){P=0,w=0,A=null,fe.reset(),Ue.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return di}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===yn?"display-p3":"srgb",t.unpackColorSpace=Ke.workingColorSpace===_a?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Mt?Wi:vo}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Wi?Mt:pi}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class ef extends Bo{}ef.prototype.isWebGL1Renderer=!0;class tf extends Rt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class qi extends Yt{constructor(e=1,t=32,i=0,a=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:a},t=Math.max(3,t);const n=[],l=[],s=[],o=[],c=new C,u=new Ae;l.push(0,0,0),s.push(0,0,1),o.push(.5,.5);for(let h=0,p=3;h<=t;h++,p+=3){const f=i+h/t*a;c.x=e*Math.cos(f),c.y=e*Math.sin(f),l.push(c.x,c.y,c.z),s.push(0,0,1),u.x=(l[p]/e+1)/2,u.y=(l[p+1]/e+1)/2,o.push(u.x,u.y)}for(let h=1;h<=t;h++)n.push(h,h+1,0);this.setIndex(n),this.setAttribute("position",new st(l,3)),this.setAttribute("normal",new st(s,3)),this.setAttribute("uv",new st(o,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qi(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class At extends Yt{constructor(e=1,t=1,i=1,a=32,n=1,l=!1,s=0,o=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:a,heightSegments:n,openEnded:l,thetaStart:s,thetaLength:o};const c=this;a=Math.floor(a),n=Math.floor(n);const u=[],h=[],p=[],f=[];let g=0;const _=[],m=i/2;let d=0;y(),l===!1&&(e>0&&x(!0),t>0&&x(!1)),this.setIndex(u),this.setAttribute("position",new st(h,3)),this.setAttribute("normal",new st(p,3)),this.setAttribute("uv",new st(f,2));function y(){const b=new C,P=new C;let w=0;const A=(t-e)/i;for(let W=0;W<=n;W++){const S=[],T=W/n,H=T*(t-e)+e;for(let z=0;z<=a;z++){const ee=z/a,L=ee*o+s,U=Math.sin(L),V=Math.cos(L);P.x=H*U,P.y=-T*i+m,P.z=H*V,h.push(P.x,P.y,P.z),b.set(U,A,V).normalize(),p.push(b.x,b.y,b.z),f.push(ee,1-T),S.push(g++)}_.push(S)}for(let W=0;W<a;W++)for(let S=0;S<n;S++){const T=_[S][W],H=_[S+1][W],z=_[S+1][W+1],ee=_[S][W+1];u.push(T,H,ee),u.push(H,z,ee),w+=6}c.addGroup(d,w,0),d+=w}function x(b){const P=g,w=new Ae,A=new C;let W=0;const S=b===!0?e:t,T=b===!0?1:-1;for(let z=1;z<=a;z++)h.push(0,m*T,0),p.push(0,T,0),f.push(.5,.5),g++;const H=g;for(let z=0;z<=a;z++){const ee=z/a*o+s,L=Math.cos(ee),U=Math.sin(ee);A.x=S*U,A.y=m*T,A.z=S*L,h.push(A.x,A.y,A.z),p.push(0,T,0),w.x=L*.5+.5,w.y=U*.5*T+.5,f.push(w.x,w.y),g++}for(let z=0;z<a;z++){const ee=P+z,L=H+z;b===!0?u.push(L,L+1,ee):u.push(L+1,L,ee),W+=3}c.addGroup(d,W,b===!0?1:2),d+=W}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new At(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class An extends At{constructor(e=1,t=1,i=32,a=1,n=!1,l=0,s=Math.PI*2){super(0,e,t,i,a,n,l,s),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:a,openEnded:n,thetaStart:l,thetaLength:s}}static fromJSON(e){return new An(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Ma extends Yt{constructor(e=.5,t=1,i=32,a=1,n=0,l=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:a,thetaStart:n,thetaLength:l},i=Math.max(3,i),a=Math.max(1,a);const s=[],o=[],c=[],u=[];let h=e;const p=(t-e)/a,f=new C,g=new Ae;for(let _=0;_<=a;_++){for(let m=0;m<=i;m++){const d=n+m/i*l;f.x=h*Math.cos(d),f.y=h*Math.sin(d),o.push(f.x,f.y,f.z),c.push(0,0,1),g.x=(f.x/t+1)/2,g.y=(f.y/t+1)/2,u.push(g.x,g.y)}h+=p}for(let _=0;_<a;_++){const m=_*(i+1);for(let d=0;d<i;d++){const y=d+m,x=y,b=y+i+1,P=y+i+2,w=y+1;s.push(x,b,w),s.push(b,P,w)}}this.setIndex(s),this.setAttribute("position",new st(o,3)),this.setAttribute("normal",new st(c,3)),this.setAttribute("uv",new st(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ma(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Ht extends Yt{constructor(e=1,t=32,i=16,a=0,n=Math.PI*2,l=0,s=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:a,phiLength:n,thetaStart:l,thetaLength:s},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const o=Math.min(l+s,Math.PI);let c=0;const u=[],h=new C,p=new C,f=[],g=[],_=[],m=[];for(let d=0;d<=i;d++){const y=[],x=d/i;let b=0;d===0&&l===0?b=.5/t:d===i&&o===Math.PI&&(b=-.5/t);for(let P=0;P<=t;P++){const w=P/t;h.x=-e*Math.cos(a+w*n)*Math.sin(l+x*s),h.y=e*Math.cos(l+x*s),h.z=e*Math.sin(a+w*n)*Math.sin(l+x*s),g.push(h.x,h.y,h.z),p.copy(h).normalize(),_.push(p.x,p.y,p.z),m.push(w+b,1-x),y.push(c++)}u.push(y)}for(let d=0;d<i;d++)for(let y=0;y<t;y++){const x=u[d][y+1],b=u[d][y],P=u[d+1][y],w=u[d+1][y+1];(d!==0||l>0)&&f.push(x,b,w),(d!==i-1||o<Math.PI)&&f.push(b,P,w)}this.setIndex(f),this.setAttribute("position",new st(g,3)),this.setAttribute("normal",new st(_,3)),this.setAttribute("uv",new st(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ht(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Sa extends Yt{constructor(e=1,t=.4,i=12,a=48,n=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:a,arc:n},i=Math.floor(i),a=Math.floor(a);const l=[],s=[],o=[],c=[],u=new C,h=new C,p=new C;for(let f=0;f<=i;f++)for(let g=0;g<=a;g++){const _=g/a*n,m=f/i*Math.PI*2;h.x=(e+t*Math.cos(m))*Math.cos(_),h.y=(e+t*Math.cos(m))*Math.sin(_),h.z=t*Math.sin(m),s.push(h.x,h.y,h.z),u.x=e*Math.cos(_),u.y=e*Math.sin(_),p.subVectors(h,u).normalize(),o.push(p.x,p.y,p.z),c.push(g/a),c.push(f/i)}for(let f=1;f<=i;f++)for(let g=1;g<=a;g++){const _=(a+1)*f+g-1,m=(a+1)*(f-1)+g-1,d=(a+1)*(f-1)+g,y=(a+1)*f+g;l.push(_,m,y),l.push(m,d,y)}this.setIndex(l),this.setAttribute("position",new st(s,3)),this.setAttribute("normal",new st(o,3)),this.setAttribute("uv",new st(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Sa(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class sa extends xr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Xe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Xe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=En,this.normalScale=new Ae(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Qe extends xr{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Xe(16777215),this.specular=new Xe(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Xe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=En,this.normalScale=new Ae(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Mn,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Rn extends Rt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Xe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const sn=new pt,ao=new C,no=new C;class Go{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ae(512,512),this.map=null,this.mapPass=null,this.matrix=new pt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new bn,this._frameExtents=new Ae(1,1),this._viewportCount=1,this._viewports=[new it(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;ao.setFromMatrixPosition(e.matrixWorld),t.position.copy(ao),no.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(no),t.updateMatrixWorld(),sn.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(sn),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(sn)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const so=new pt,Ar=new C,on=new C;class rf extends Go{constructor(){super(new Bt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ae(4,2),this._viewportCount=6,this._viewports=[new it(2,1,1,1),new it(0,1,1,1),new it(3,1,1,1),new it(1,1,1,1),new it(3,0,1,1),new it(1,0,1,1)],this._cubeDirections=[new C(1,0,0),new C(-1,0,0),new C(0,0,1),new C(0,0,-1),new C(0,1,0),new C(0,-1,0)],this._cubeUps=[new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,0,1),new C(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,a=this.matrix,n=e.distance||i.far;n!==i.far&&(i.far=n,i.updateProjectionMatrix()),Ar.setFromMatrixPosition(e.matrixWorld),i.position.copy(Ar),on.copy(i.position),on.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(on),i.updateMatrixWorld(),a.makeTranslation(-Ar.x,-Ar.y,-Ar.z),so.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(so)}}class af extends Rn{constructor(e,t,i=0,a=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=a,this.shadow=new rf}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class nf extends Go{constructor(){super(new Do(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class sf extends Rn{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Rt.DEFAULT_UP),this.updateMatrix(),this.target=new Rt,this.shadow=new nf}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class of extends Rn{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:xn}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=xn);const Me=new tf,tt=new Bt(75,window.innerWidth/window.innerHeight,.1,1e3),Ir=new Bo({antialias:!0});Ir.setSize(window.innerWidth,window.innerHeight);document.body.appendChild(Ir.domElement);const te={isGameOver:!1,playerHealth:100,playerStamina:100,isShooting:!1,lastShotTime:0,shootingCooldown:100,staminaPerShot:2,staminaRechargeRate:15,mousePosition:new Ae,isGameStarted:!1,startTime:0,elapsedTime:0,lastTimeUpdate:0,currentWeapon:"normal",powerWeaponAmmo:0},zt={kills:0,score:0},hi={particles:[],lastSpawnTime:0,spawnInterval:50,particleLifetime:1e3,particleCount:8},bt={health:[],weapon:[],spawnInterval:1e4,lastSpawnTime:0,weaponSpawnInterval:1e4,lastWeaponSpawnTime:0};function lf(r,e){const t=new wt,i=new mt(1.2,1.2,.1),a=new Qe({color:16777215}),n=new ue(i,a);n.rotation.x=-Math.PI/2,t.add(n);const l=new mt(.8,.3,.15),s=new Qe({color:16711680,emissive:3342336}),o=new ue(l,s);o.rotation.x=-Math.PI/2,o.position.y=.05,t.add(o);const c=new ue(l,s);c.rotation.x=-Math.PI/2,c.rotation.z=Math.PI/2,c.position.y=.05,t.add(c);const u=new qi(.8,16),h=new dt({color:65280,transparent:!0,opacity:.3,side:at}),p=new ue(u,h);return p.rotation.x=-Math.PI/2,p.position.y=.02,t.add(p),t.position.set(r,.5,e),t.userData={type:"health",healAmount:50,rotationSpeed:.02,bobSpeed:2,bobHeight:.2,initialY:.5,spawnTime:Date.now()},Me.add(t),bt.health.push(t),t}function cf(){const r=Date.now();if(r-bt.lastSpawnTime>=bt.spawnInterval){const e=Math.random()*Math.PI*2,t=ce.position.x+Math.cos(e)*30,i=ce.position.z+Math.sin(e)*30;let a=!0;for(const n of Ti)if(new Ae(t-n.position.x,i-n.position.z).length()<n.userData.collisionRadius+2){a=!1;break}a&&(lf(t,i),bt.lastSpawnTime=r)}}function uf(r,e){const t=new wt,i=new mt(.8,.3,1.5),a=new Qe({color:4473924,specular:6710886}),n=new ue(i,a);n.rotation.x=-Math.PI/2,t.add(n);const l=new At(.15,.15,2,8),s=new Qe({color:2236962,specular:4473924}),o=new ue(l,s);o.rotation.x=-Math.PI/2,o.position.z=.8,t.add(o);const c=new Ht(.3,16,16),u=new Qe({color:16711935,emissive:8388736,emissiveIntensity:.8,transparent:!0,opacity:.9}),h=new ue(c,u);h.position.z=-.5,t.add(h);for(let _=0;_<3;_++){const m=new Sa(.4+_*.1,.05,16,32),d=new dt({color:16711935,transparent:!0,opacity:.5,side:at}),y=new ue(m,d);y.rotation.x=-Math.PI/2,y.position.z=-.5,t.add(y)}const p=new Ht(.2,8,8),f=new dt({color:16711935,transparent:!0,opacity:.8}),g=new ue(p,f);return g.position.z=1.8,t.add(g),t.position.set(r,.5,e),t.userData={type:"weapon",ammoAmount:120,rotationSpeed:.02,bobSpeed:2,bobHeight:.2,initialY:.5,spawnTime:Date.now()},Me.add(t),bt.weapon.push(t),t}function hf(){const r=Date.now();if(r-bt.lastWeaponSpawnTime>=bt.weaponSpawnInterval){const e=Math.random()*Math.PI*2,t=ce.position.x+Math.cos(e)*30,i=ce.position.z+Math.sin(e)*30;let a=!0;for(const n of Ti)if(new Ae(t-n.position.x,i-n.position.z).length()<n.userData.collisionRadius+2){a=!1;break}a&&(uf(t,i),bt.lastWeaponSpawnTime=r)}}const Cn=new of(16777215,.6);Me.add(Cn);const Ea=new sf(16777215,.8);Ea.position.set(10,20,0);Me.add(Ea);const df=`
    varying vec2 vUv;
    void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
`,pf=`
    uniform float time;
    uniform vec2 resolution;
    uniform vec2 cameraOffset;
    varying vec2 vUv;

    // Hash function for randomization
    float hash(vec2 p) {
        return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453);
    }

    // Smooth noise function
    float noise(vec2 p) {
        vec2 i = floor(p);
        vec2 f = fract(p);
        f = f * f * (3.0 - 2.0 * f);
        float a = hash(i);
        float b = hash(i + vec2(1.0, 0.0));
        float c = hash(i + vec2(0.0, 1.0));
        float d = hash(i + vec2(1.0, 1.0));
        return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
    }

    void main() {
        // Convert UV to screen space coordinates
        vec2 screenUV = gl_FragCoord.xy / resolution.xy;
        
        // Use screen space coordinates instead of world space
        vec2 uv = screenUV * 2.0 - 1.0;
        vec3 finalColor = vec3(0.0);
        
        // Deep space background - darker and more blue-tinted
        finalColor = vec3(0.01, 0.01, 0.03);
        
        // Add subtle nebula effect with fixed position
        float nebula1 = noise(uv * 1.5);
        float nebula2 = noise(uv * 2.0);
        
        // More muted nebula colors
        vec3 nebulaColor1 = vec3(0.2, 0.1, 0.3) * nebula1 * 0.15;
        vec3 nebulaColor2 = vec3(0.1, 0.2, 0.3) * nebula2 * 0.15;
        finalColor += nebulaColor1 + nebulaColor2;
        
        // Add fewer, larger stars with fixed positions
        float stars = 0.0;
        for(float i = 0.0; i < 2.0; i++) {
            vec2 gridUV = fract(screenUV * (50.0 + i * 25.0));
            float star = step(0.995, hash(gridUV));
            stars += star * (sin(time * 1.0 + i) * 0.3 + 0.7);
        }
        finalColor += vec3(stars) * 0.5;
        
        gl_FragColor = vec4(finalColor, 1.0);
    }
`,ff=new fi(1e3,1e3),mf=new Ci({uniforms:{time:{value:0},resolution:{value:new Ae(window.innerWidth,window.innerHeight)},cameraOffset:{value:new Ae(0,0)}},vertexShader:df,fragmentShader:pf}),Nr=new ue(ff,mf);Nr.rotation.x=-Math.PI/2;Nr.position.y=-.1;Me.add(Nr);window.addEventListener("resize",()=>{tt.aspect=window.innerWidth/window.innerHeight,tt.updateProjectionMatrix(),Ir.setSize(window.innerWidth,window.innerHeight),Nr.material.uniforms.resolution.value.set(window.innerWidth,window.innerHeight)});function gf(r,e){const t=new wt,i=[{radius:1.5,color:4474111,emissive:2236996,hasRings:!1,moonCount:2,type:"gas"},{radius:.8,color:16729156,emissive:4465186,hasRings:!0,moonCount:1,type:"rocky"},{radius:1.2,color:4521796,emissive:2245666,hasRings:!0,moonCount:3,type:"ice"},{radius:.6,color:16777028,emissive:4473890,hasRings:!1,moonCount:0,type:"desert"}],a=i[Math.floor(Math.random()*i.length)],n=new Ht(a.radius,32,32),l=new sa({color:a.color,emissive:a.emissive,roughness:a.type==="ice"?.3:.7,metalness:a.type==="rocky"?.5:.3});if(a.type==="rocky"||a.type==="desert"){const c=new Ht(a.radius*1.02,16,16),u=new sa({color:a.color,emissive:a.emissive,transparent:!0,opacity:.5,roughness:1}),h=new ue(c,u);t.add(h)}const s=new ue(n,l);if(t.add(s),a.hasRings){const c=new Ma(a.radius*1.5,a.radius*2.5,64,8,0,Math.PI*2),u=new sa({color:a.color,emissive:a.emissive,transparent:!0,opacity:.7,side:at,depthWrite:!1,blending:ln});for(let h=0;h<3;h++){const p=new ue(c,u.clone());p.rotation.x=Math.PI/3,p.position.y=h*.05,p.scale.setScalar(1+h*.1),t.add(p)}}const o=[];for(let c=0;c<a.moonCount;c++){const u=a.radius*.2,h=new Ht(u,16,16),p=new sa({color:13421772,emissive:2236962,roughness:.8,metalness:.2}),f=new ue(h,p),g=a.radius*(2+c*.5),_=.001*(1/(c+1)),m=Math.random()*Math.PI*2;f.userData={orbitRadius:g,orbitSpeed:_,orbitOffset:m,time:Math.random()*Math.PI*2},o.push(f),t.add(f)}return t.position.set(r,a.radius,e),t.userData={type:a.type,color:a.color,emissive:a.emissive,collisionRadius:a.radius,moons:o,hasRings:a.hasRings},t}const Ti=[];for(let r=0;r<40;r++){const e=(Math.random()-.5)*400,t=(Math.random()-.5)*400;if(Math.abs(e)>20||Math.abs(t)>20){const i=gf(e,t);Ti.push(i),Me.add(i)}}Cn.color.setHex(3355494);Cn.intensity=.4;Ea.intensity=1;Ea.position.set(10,20,0);const Ho=new af(4474111,.5,100);Ho.position.set(0,20,0);Me.add(Ho);function _f(){const r=new wt,e=new mt(.8,.15,2.2),t=new Qe({color:15658734,shininess:100,specular:6710886}),i=new ue(e,t);i.position.set(0,0,0),r.add(i);const a=new At(0,.3,.8,4),n=new Qe({color:2236962,shininess:90,specular:4473924}),l=new ue(a,n);l.rotation.x=Math.PI/2,l.position.z=-1,r.add(l);const s=new mt(2,.05,1),o=new Qe({color:14540253,shininess:90,specular:6710886}),c=new ue(s,o);c.position.set(-.8,0,0),c.rotation.z=Math.PI/12,c.rotation.y=-Math.PI/16,r.add(c);const u=new ue(s,o);u.position.set(.8,0,0),u.rotation.z=-Math.PI/12,u.rotation.y=Math.PI/16,r.add(u);const h=new mt(.4,.1,.3),p=new Qe({color:1118481,shininess:80,specular:3355443}),f=new ue(h,p);f.position.set(-1.8,0,-.2),f.rotation.z=Math.PI/12,r.add(f);const g=new ue(h,p);g.position.set(1.8,0,-.2),g.rotation.z=-Math.PI/12,r.add(g);const _=new mt(.4,.1,.6),m=new Qe({color:0,transparent:!0,opacity:.7,shininess:100,specular:6710886}),d=new ue(_,m);d.position.set(0,.1,-.4),r.add(d);const y=new At(.12,.1,.3,6),x=new Qe({color:3355443,shininess:90,specular:6710886});[{x:-.3,y:0,z:.9},{x:.3,y:0,z:.9},{x:-.1,y:0,z:.9},{x:.1,y:0,z:.9}].forEach(V=>{const j=new ue(y,x);j.position.set(V.x,V.y,V.z),j.rotation.x=Math.PI/2,r.add(j);const X=new At(.06,.06,.05,6),k=new dt({color:16737792,transparent:!0,opacity:.9,side:at}),Y=new ue(X,k);Y.position.set(V.x,V.y,V.z+.15),Y.rotation.x=Math.PI/2,r.add(Y);const J=new At(.08,.08,.02,6),le=new dt({color:43775,transparent:!0,opacity:.5,side:at}),B=new ue(J,le);B.position.set(V.x,V.y,V.z+.16),B.rotation.x=Math.PI/2,r.add(B)});const b=new mt(.05,.01,1),P=new Qe({color:16724787,shininess:90,specular:8921634}),w=new ue(b,P);w.position.set(-.3,.08,-.2),r.add(w);const A=new ue(b,P);A.position.set(.3,.08,-.2),r.add(A);const W=1,S=.1,T=new fi(W,S),H=new dt({color:65280,side:at}),z=new ue(T,H);z.position.set(0,.8,-.6),z.rotation.x=-Math.PI/3,z.userData.initialScale=z.scale.x,r.add(z),r.userData.healthBar=z;const ee=new fi(W,S),L=new dt({color:15251228,side:at}),U=new ue(ee,L);return U.position.set(0,.8,-.4),U.rotation.x=-Math.PI/3,U.userData.initialScale=U.scale.x,r.add(U),r.userData.staminaBar=U,r.position.y=.5,r}const ce=_f();Me.add(ce);tt.position.set(0,20,0);tt.lookAt(ce.position);tt.fov=60;tt.updateProjectionMatrix();function vf(){const r=ce.userData.healthBar,e=ce.userData.staminaBar;r.position.set(0,.8,-.6),e.position.set(0,.8,-.4),r.rotation.x=-Math.PI/3,e.rotation.x=-Math.PI/3}vf();const ht={w:!1,s:!1,a:!1,d:!1,ArrowUp:!1,ArrowDown:!1,ArrowLeft:!1,ArrowRight:!1},ma={useMouse:!0};window.addEventListener("keydown",r=>{ht.hasOwnProperty(r.key)&&(ht[r.key]=!0),r.key==="Tab"&&(r.preventDefault(),ma.useMouse=!ma.useMouse)});window.addEventListener("keyup",r=>{ht.hasOwnProperty(r.key)&&(ht[r.key]=!1)});window.addEventListener("mousedown",()=>te.isShooting=!0);window.addEventListener("mouseup",()=>te.isShooting=!1);window.addEventListener("mousemove",r=>{te.mousePosition.x=r.clientX,te.mousePosition.y=r.clientY});const Si=[],xf=new At(.08,.08,.4,8),Mf=new Qe({color:65535,emissive:35071,emissiveIntensity:.8,transparent:!0,opacity:.9});function oo(r){const e=Date.now();let t;if(ma.useMouse){const i=new C(r.x/window.innerWidth*2-1,-(r.y/window.innerHeight)*2+1,.5);i.unproject(tt);const a=i.sub(tt.position).normalize(),n=new C(a.x,0,a.z).normalize(),l=new C().copy(ce.position).add(n.multiplyScalar(20));t=new C().subVectors(l,ce.position).normalize()}else{const i=new C(0,0,0);if(ht.ArrowUp&&(i.z-=1),ht.ArrowDown&&(i.z+=1),ht.ArrowLeft&&(i.x-=1),ht.ArrowRight&&(i.x+=1),i.length()>0)t=i.normalize();else return}if(e-te.lastShotTime>=te.shootingCooldown&&te.playerStamina>=te.staminaPerShot){if(te.currentWeapon==="power"&&te.powerWeaponAmmo>0){const i=new At(.12,.12,.6,12),a=new Qe({color:16711935,emissive:8388736,emissiveIntensity:.8,transparent:!0,opacity:.9}),n=new ue(i,a);n.position.copy(ce.position),n.quaternion.setFromUnitVectors(new C(0,1,0),t),n.userData.velocity=t.multiplyScalar(.8),n.userData.maxDistance=20,n.userData.damage=40,n.userData.initialPosition=n.position.clone();const l=new dt({color:16711935,transparent:!0,opacity:.5}),s=[];for(let o=0;o<4;o++){const c=new At(.1,.1,.4,8),u=new ue(c,l.clone());u.material.opacity=.5-o*.1,u.position.z=-(o+1)*.4,n.add(u),s.push(u)}n.userData.trailSegments=s,Me.add(n),Si.push(n),te.powerWeaponAmmo--,te.powerWeaponAmmo<=0&&(te.currentWeapon="normal",Hi())}else{const i=new ue(xf,Mf);i.position.copy(ce.position),i.quaternion.setFromUnitVectors(new C(0,1,0),t),i.userData.velocity=t.multiplyScalar(.5),i.userData.maxDistance=15,i.userData.damage=20,i.userData.initialPosition=i.position.clone(),Me.add(i),Si.push(i)}te.playerStamina=Math.max(0,te.playerStamina-te.staminaPerShot),te.lastShotTime=e}}const lt=[];function Ln(r=1,e="normal"){const t=new wt,i=yf(r*.5,8,e==="sniper"?0:Ef());if(t.add(i),e==="sniper"){const u=new Ht(r*.6,16,16),h=new dt({color:16711680,transparent:!0,opacity:.3,side:at}),p=new ue(u,h);t.add(p);const f=new mt(r*.8,r*.1,r*.1),g=new Qe({color:16711680,emissive:8388608,emissiveIntensity:.5}),_=new ue(f,g);_.rotation.z=Math.PI/4,t.add(_);const m=new ue(f,g);m.rotation.z=-Math.PI/4,t.add(m)}const a=r*1.2,n=r*.1,l=new fi(a,n),s=new dt({color:65280,side:at}),o=new ue(l,s);o.position.y=r*.8,o.userData.initialScale=o.scale.x,t.add(o);const c=r*100;return t.userData={isEnemy:!0,health:c,maxHealth:c,healthBar:o,size:r,speed:.05/r,type:e,moveParams:{offset:Math.random()*Math.PI*2,amplitude:.2+Math.random()*.3,frequency:.5+Math.random()*.5,time:0},lastShotTime:0,shootingCooldown:3e3,sniperBullets:[]},t}function Sf(r,e){const t=new wt,i=new At(.12,.12,.6,12),a=new Qe({color:16711680,emissive:8388608,emissiveIntensity:.8,transparent:!0,opacity:.9}),n=new ue(i,a);t.add(n),t.position.copy(r);const l=new C().subVectors(ce.position,r).normalize();return t.quaternion.setFromUnitVectors(new C(0,1,0),l),t.userData={velocity:l.multiplyScalar(.3),damage:30,maxDistance:20,initialPosition:r.clone()},Me.add(t),t}function Ef(){const r=[16729156,4521796,4474111,16729343,4521983,16777028,16746564,16729224];return r[Math.floor(Math.random()*r.length)]}function yf(r,e,t=6710886){const i=new wt,a=r/(e*.5);for(let n=0;n<Math.PI*2;n+=Math.PI/e)for(let l=0;l<Math.PI*2;l+=Math.PI/e){const s=r+(Math.random()-.5)*(a*.5),o=s*Math.cos(l)*Math.sin(n),c=s*Math.sin(l)*Math.sin(n),u=s*Math.cos(n);let h;Math.random()>.3?h=new mt(a,a,a):h=new At(a*.3,a*.3,a,8);const p=new Qe({color:t,specular:3355443,shininess:30,flatShading:!0}),f=new ue(h,p);f.position.set(o,c,u),f.lookAt(0,0,0),f.rotation.z=Math.random()*Math.PI*2,i.add(f)}return i}function Tf(){const r=Math.random()<.2,e=r?1.5:.5+Math.pow(Math.random(),2)*2.5,t=Ln(e,r?"sniper":"normal"),i=20,a=Math.random()*Math.PI*2;t.position.x=ce.position.x+Math.cos(a)*i,t.position.z=ce.position.z+Math.sin(a)*i,t.position.y=.5,t.lookAt(ce.position),Me.add(t),lt.push(t)}setInterval(Tf,2e3);function oa(r){const e=new wt;for(let t=0;t<20;t++){const i=new Ht(.1),a=new Qe({color:16729088,emissive:16720384}),n=new ue(i,a);n.position.copy(r);const l=new C((Math.random()-.5)*.3,Math.random()*.2,(Math.random()-.5)*.3);n.userData.velocity=l,n.userData.lifetime=1+Math.random(),n.userData.age=0,e.add(n)}return Me.add(e),e}function Rr(){const r=document.createElement("div");r.style.position="absolute",r.style.top="50%",r.style.left="50%",r.style.transform="translate(-50%, -50%)",r.style.textAlign="center",r.style.color="white",r.style.fontSize="32px",r.style.fontFamily="Arial, sans-serif",r.innerHTML=`
        <h1>Game Over</h1>
        <div style="font-size: 24px; margin: 20px 0;">
            <div>Final Score: ${Math.round(zt.score)}</div>
            <div>Total Kills: ${zt.kills}</div>
        </div>
        <button id="restartButton" style="font-size: 24px; padding: 10px 20px; margin: 10px;">Restart Game</button>
    `,document.body.appendChild(r),document.getElementById("restartButton").addEventListener("click",()=>{location.reload()})}const xt=[],Mi={lightBeams:[],swords:[],warningDuration:1e3,swordWarningDuration:3e3},Ne={boss:null,isSpawned:!1,projectiles:[],lastShotTime:0,shootingCooldown:2e3,lastBossDefeatTime:0,respawnDelay:3e4};function bf(r,e){const t=new wt,i=new Ht(.5,16,16),a=new Qe({color:16711935,emissive:8388736,emissiveIntensity:.5,transparent:!0,opacity:.8}),n=new ue(i,a);t.add(n);const l=12,s=[];for(let o=0;o<l;o++){const c=new Ht(.4-o*.03,8,8),u=new dt({color:16711935,transparent:!0,opacity:.6-o*.05}),h=new ue(c,u);s.push(h),t.add(h)}t.position.copy(r),t.userData={velocity:e.multiplyScalar(.1),damage:15,time:0,trails:s,basePosition:r.clone()},Me.add(t),Ne.projectiles.push(t)}function Oi(r,e=16711935){const t=new wt,i=12,a=[];for(let o=0;o<i;o++){const c=o/i*Math.PI*2,u=.3,h=new An(.2,.4,4),p=new Qe({color:e,emissive:new Xe(e).multiplyScalar(.5),emissiveIntensity:.5,transparent:!0,opacity:.8}),f=new ue(h,p);f.position.set(Math.cos(c)*u,.5,Math.sin(c)*u),f.rotation.x=Math.PI/2,f.rotation.y=c,f.userData={velocity:new C(Math.cos(c)*.1,.05,Math.sin(c)*.1),rotationSpeed:(Math.random()-.5)*.2,age:0,lifetime:1+Math.random()*.5},a.push(f),t.add(f)}const n=new qi(1,16),l=new dt({color:e,transparent:!0,opacity:.7}),s=new ue(n,l);return s.rotation.x=-Math.PI/2,s.position.y=.1,s.userData={age:0,lifetime:.3},t.add(s),t.position.copy(r),t.userData={particles:a,flash:s,age:0},Me.add(t),t}function wf(){const r=new wt,e=new At(2,2,1,6),t=new Qe({color:8388736,specular:4456516,shininess:30,flatShading:!0}),i=new ue(e,t);r.add(i);const a=new Ht(.8,16,16),n=new Qe({color:16711935,emissive:8388736,emissiveIntensity:.5,specular:4456516,shininess:100}),l=new ue(a,n);r.add(l);for(let p=0;p<3;p++){const f=new Sa(1.2+p*.3,.1,16,32),g=new Qe({color:16711935,emissive:8388736,emissiveIntensity:.3,transparent:!0,opacity:.8}),_=new ue(f,g);_.rotation.x=Math.PI/2,_.userData={rotationSpeed:.02*(p+1),rotationAxis:new C(0,1,0)},r.add(_)}for(let p=0;p<6;p++){const f=p/6*Math.PI*2,g=new wt,_=new mt(.8,.4,1.2),m=new Qe({color:8388736,specular:4456516,shininess:30}),d=new ue(_,m);d.position.set(Math.cos(f)*3,0,Math.sin(f)*3),d.rotation.y=f,g.add(d);const y=new At(.1,.1,1.5,8),x=new Qe({color:16711935,emissive:8388736,emissiveIntensity:.3}),b=new ue(y,x);b.rotation.x=Math.PI/2,b.position.set(Math.cos(f)*3.8,0,Math.sin(f)*3.8),g.add(b);const P=new Ht(.2,8,8),w=new dt({color:16711935,transparent:!0,opacity:.8}),A=new ue(P,w);A.position.set(Math.cos(f)*4.5,0,Math.sin(f)*4.5),g.add(A),r.add(g)}for(let p=0;p<4;p++){const f=p/4*Math.PI*2,g=new fi(1.5,2),_=new Qe({color:8388736,specular:4456516,shininess:50,transparent:!0,opacity:.7,side:at}),m=new ue(g,_);m.position.set(Math.cos(f)*2.5,0,Math.sin(f)*2.5),m.rotation.y=f,m.userData={rotationSpeed:.01,floatSpeed:.02,floatOffset:Math.random()*Math.PI*2},r.add(m)}const s=4,o=.3,c=new fi(s,o),u=new dt({color:16711935,side:at}),h=new ue(c,u);return h.position.set(0,4.5,0),h.rotation.x=-Math.PI/4,h.userData.initialScale=h.scale.x,r.add(h),r.userData.healthBar=h,r.userData.health=500,r.userData.maxHealth=500,r.userData.moveSpeed=.05,r.position.set(0,2,-40),r}function Pn(){const r=document.createElement("div");r.style.position="fixed",r.style.bottom="20px",r.style.left="20px",r.style.color="white",r.style.fontFamily="Arial, sans-serif",r.style.fontSize="24px",r.style.textShadow="2px 2px 4px rgba(0, 0, 0, 0.5)",r.id="hudContainer";const e=document.createElement("div");e.id="scoreCounter",e.textContent="Score: 0",r.appendChild(e);const t=document.createElement("div");t.id="killsCounter",t.textContent="Kills: 0",r.appendChild(t);const i=document.createElement("div");i.id="timeCounter",i.textContent="Time: 0:00",r.appendChild(i);const a=document.createElement("div");a.id="weaponCounter",a.textContent="Weapon: Normal",r.appendChild(a),document.body.appendChild(r);const n=document.createElement("div");n.style.position="fixed",n.style.top="20px",n.style.left="20px",n.style.color="white",n.style.fontFamily="Arial, sans-serif",n.style.fontSize="24px",n.style.textShadow="2px 2px 4px rgba(0, 0, 0, 0.5)",n.id="topLeftHUD";const l=document.createElement("div");l.style.display="flex",l.style.alignItems="center",l.style.gap="10px",l.style.marginBottom="5px";const s=document.createElement("div");s.id="healthDisplay",s.style.color="#00ff00",s.textContent="Health: 100",l.appendChild(s);const o=document.createElement("div");o.style.width="100px",o.style.height="10px",o.style.backgroundColor="rgba(0, 0, 0, 0.5)",o.style.border="2px solid #00ff00",o.style.borderRadius="5px",o.style.overflow="hidden";const c=document.createElement("div");c.id="healthBar",c.style.width="100%",c.style.height="100%",c.style.backgroundColor="#00ff00",c.style.transition="width 0.3s ease",o.appendChild(c),l.appendChild(o),n.appendChild(l);const u=document.createElement("div");u.style.display="flex",u.style.alignItems="center",u.style.gap="10px";const h=document.createElement("div");h.id="staminaDisplay",h.style.color="#E8B71C",h.textContent="Stamina: 100",u.appendChild(h);const p=document.createElement("div");p.style.width="100px",p.style.height="10px",p.style.backgroundColor="rgba(0, 0, 0, 0.5)",p.style.border="2px solid #E8B71C",p.style.borderRadius="5px",p.style.overflow="hidden";const f=document.createElement("div");f.id="staminaBar",f.style.width="100%",f.style.height="100%",f.style.backgroundColor="#E8B71C",f.style.transition="width 0.3s ease",p.appendChild(f),u.appendChild(p),n.appendChild(u),document.body.appendChild(n)}function Hi(){let r=document.getElementById("scoreCounter"),e=document.getElementById("killsCounter"),t=document.getElementById("timeCounter"),i=document.getElementById("weaponCounter"),a=document.getElementById("healthDisplay"),n=document.getElementById("staminaDisplay"),l=document.getElementById("healthBar"),s=document.getElementById("staminaBar");if((!r||!e||!t||!i||!a||!n||!l||!s)&&(Pn(),r=document.getElementById("scoreCounter"),e=document.getElementById("killsCounter"),t=document.getElementById("timeCounter"),i=document.getElementById("weaponCounter"),a=document.getElementById("healthDisplay"),n=document.getElementById("staminaDisplay"),l=document.getElementById("healthBar"),s=document.getElementById("staminaBar")),r&&(r.textContent=`Score: ${Math.round(zt.score)}`),e&&(e.textContent=`Kills: ${zt.kills}`),t){const o=Math.floor(te.elapsedTime/60),c=Math.floor(te.elapsedTime%60);t.textContent=`Time: ${o}:${c.toString().padStart(2,"0")}`}i&&(te.currentWeapon==="power"?(i.textContent=`Power Weapon: ${te.powerWeaponAmmo}`,i.style.color="#00ffff"):(i.textContent="Weapon: Normal",i.style.color="#ffffff")),a&&(a.textContent=`Health: ${Math.round(te.playerHealth)}`),n&&(n.textContent=`Stamina: ${Math.round(te.playerStamina)}`),l&&(l.style.width=`${Math.max(0,te.playerHealth)}%`),s&&(s.style.width=`${Math.max(0,te.playerStamina)}%`)}Pn();function Dn(){if(requestAnimationFrame(Dn),te.isGameStarted&&!te.isGameOver){const r=Date.now();r-te.lastTimeUpdate>=1e3&&(te.elapsedTime=Math.floor((r-te.startTime)/1e3),te.lastTimeUpdate=r,Hi()),Nr.material.uniforms.time.value+=.001,Cf();const e=.1,t=ce.position.clone();ht.w&&(t.z-=e),ht.s&&(t.z+=e),ht.a&&(t.x-=e),ht.d&&(t.x+=e);let i=!0;for(const s of Ti)if(t.distanceTo(s.position)<s.userData.collisionRadius+.5){i=!1;break}i&&ce.position.copy(t);const a=Date.now();if(a-hi.lastSpawnTime>=hi.spawnInterval){for(let s=0;s<hi.particleCount;s++){const o=new C((Math.random()-.5)*.5,0,(Math.random()-.5)*.5);Af(ce.position.clone().add(o))}hi.lastSpawnTime=a}for(let s=hi.particles.length-1;s>=0;s--){const o=hi.particles[s];if(o.userData.age+=16,o.userData.age>=o.userData.lifetime)Me.remove(o),hi.particles.splice(s,1);else{const c=1-o.userData.age/o.userData.lifetime;o.material.opacity=c*.6,o.scale.setScalar(c*o.userData.initialScale)}}if(Lf(),te.mousePosition.x!==void 0){const s=new C(te.mousePosition.x/window.innerWidth*2-1,-(te.mousePosition.y/window.innerHeight)*2+1,.5);s.unproject(tt);const o=s.sub(tt.position).normalize(),c=-tt.position.y/o.y,u=new C().copy(tt.position).add(o.multiplyScalar(c));ce.lookAt(new C(u.x,ce.position.y,u.z))}ma.useMouse?te.isShooting&&oo(te.mousePosition):(ht.ArrowUp||ht.ArrowDown||ht.ArrowLeft||ht.ArrowRight)&&oo(),!te.isShooting&&!(ht.ArrowUp||ht.ArrowDown||ht.ArrowLeft||ht.ArrowRight)&&(te.playerStamina=Math.min(100,te.playerStamina+te.staminaRechargeRate*.016)),ce.userData.staminaBar.scale.x=te.playerStamina/100*ce.userData.staminaBar.userData.initialScale,Rf(),ce.userData.healthBar.quaternion.copy(tt.quaternion),ce.userData.staminaBar.quaternion.copy(tt.quaternion),lt.forEach(s=>{s.userData.healthBar.quaternion.copy(tt.quaternion),new C().subVectors(tt.position,s.position).normalize(),s.userData.healthBar.position.set(0,1.2,-.8)});for(let s=Si.length-1;s>=0;s--){const o=Si[s];if(o.position.add(o.userData.velocity),o.userData.trailSegments&&o.userData.trailSegments.forEach((c,u)=>{c.material.opacity=Math.max(0,.5-u*.15)}),o.position.distanceTo(o.userData.initialPosition)>o.userData.maxDistance){Me.remove(o),Si.splice(s,1);continue}for(let c=lt.length-1;c>=0;c--){const u=lt[c];if(o.position.distanceTo(u.position)<1.5){const h=u.userData.type==="sniper"?16711680:u.children[0].children[0].material.color.getHex(),p=Oi(o.position.clone(),h);xt.push(p),u.userData.health-=o.userData.damage;const f=u.userData.health/u.userData.maxHealth;u.userData.healthBar.scale.x=Math.max(0,f)*u.userData.healthBar.userData.initialScale,Me.remove(o),Si.splice(s,1),u.userData.health<=0&&(xt.push(oa(u.position.clone())),Me.remove(u),lt.splice(lt.indexOf(u),1),zt.kills++,zt.score+=u.userData.maxHealth,Hi());break}}if(Ne.boss&&o.position.distanceTo(Ne.boss.position)<3){const c=Ne.boss.children[0].material.color.getHex(),u=Oi(o.position.clone(),c);xt.push(u),Ne.boss.userData.health-=o.userData.damage,Me.remove(o),Si.splice(s,1);const h=Ne.boss.userData.health/Ne.boss.userData.maxHealth;if(Ne.boss.userData.healthBar.scale.x=Math.max(0,h)*Ne.boss.userData.healthBar.userData.initialScale,Ne.boss.userData.health<=0){xt.push(oa(Ne.boss.position.clone()));const p=5,f=3,g=Ne.boss.position.clone();for(let _=0;_<p;_++){const m=.5+Math.pow(Math.random(),2)*2.5,d=Ln(m),y=_/p*Math.PI*2,x=Math.cos(y)*f,b=Math.sin(y)*f;d.position.set(g.x+x,.5,g.z+b);const P=new C(x,0,b).normalize();d.lookAt(new C(d.position.x+P.x,d.position.y,d.position.z+P.z)),Me.add(d),lt.push(d)}zt.score+=Ne.boss.userData.maxHealth,Me.remove(Ne.boss),Ne.boss=null,Ne.isSpawned=!1,Ne.lastBossDefeatTime=Date.now()}break}for(const c of Ti)if(o.position.distanceTo(c.position)<c.userData.collisionRadius){const u=c.children[0].material.color.getHex(),h=Oi(o.position.clone(),u);xt.push(h),Me.remove(o),Si.splice(s,1);break}}const n=200,l=1;for(let s=lt.length-1;s>=0;s--){const o=lt[s];if(o.position.distanceTo(ce.position)>n){Me.remove(o),lt.splice(s,1);continue}const c=o.userData.moveParams;c.time+=.016;const u=new C().subVectors(ce.position,o.position).normalize();let h=new C;Ti.forEach(m=>{const d=o.position.distanceTo(m.position);if(d<m.userData.collisionRadius+l+1){const y=new C().subVectors(o.position,m.position).normalize().multiplyScalar(1/Math.max(.1,d));h.add(y)}}),u.add(h),u.normalize();const p=new C(-u.z,0,u.x),f=Math.sin(c.time*c.frequency+c.offset)*c.amplitude,g=new C().addVectors(u.multiplyScalar(o.userData.speed),p.multiplyScalar(f*o.userData.speed));o.position.add(g);const _=Math.atan2(g.x,g.z);if(o.rotation.y=_,o.userData.type==="sniper"){const m=Date.now();if(m-o.userData.lastShotTime>=o.userData.shootingCooldown){const d=Sf(o.position.clone());o.userData.sniperBullets.push(d),o.userData.lastShotTime=m}for(let d=o.userData.sniperBullets.length-1;d>=0;d--){const y=o.userData.sniperBullets[d];if(y.position.add(y.userData.velocity),y.position.distanceTo(ce.position)<1){const x=Oi(y.position.clone(),16711680);xt.push(x),te.playerHealth-=y.userData.damage;const b=te.playerHealth/100;ce.userData.healthBar.scale.x=Math.max(0,b)*ce.userData.healthBar.userData.initialScale,Me.remove(y),o.userData.sniperBullets.splice(d,1),te.playerHealth<=0&&!te.isGameOver&&(te.isGameOver=!0,Rr());continue}y.position.distanceTo(y.userData.initialPosition)>y.userData.maxDistance&&(Me.remove(y),o.userData.sniperBullets.splice(d,1))}}if(o.position.distanceTo(ce.position)<1){const m=o.userData.health;te.playerHealth-=m;const d=te.playerHealth/100;ce.userData.healthBar.scale.x=Math.max(0,d)*ce.userData.healthBar.userData.initialScale,xt.push(oa(o.position.clone())),o.userData.type==="sniper"&&o.userData.sniperBullets.forEach(y=>Me.remove(y)),Me.remove(o),lt.splice(s,1),zt.kills++,zt.score+=o.userData.maxHealth,Hi(),te.playerHealth<=0&&!te.isGameOver&&(te.isGameOver=!0,Rr())}}for(let s=0;s<lt.length;s++){const o=lt[s];for(let c=s+1;c<lt.length;c++){const u=lt[c],h=o.position.distanceTo(u.position);if(h<l*2){const p=l*2-h,f=new C().subVectors(o.position,u.position).normalize();o.position.add(f.multiplyScalar(p*.5)),u.position.add(f.multiplyScalar(-p*.5))}}}for(let s=xt.length-1;s>=0;s--){const o=xt[s];if(o.userData.particles){o.userData.age+=.016;let c=!0;if(o.userData.particles.forEach(u=>{if(u.position.add(u.userData.velocity),u.userData.velocity.y-=.003,u.rotation.z+=u.userData.rotationSpeed,u.userData.age+=.016,u.userData.age<u.userData.lifetime){c=!1;const h=1-u.userData.age/u.userData.lifetime;u.scale.setScalar(h),u.material.opacity=h*.8}}),o.userData.flash){const u=o.userData.flash;if(u.userData.age+=.016,u.userData.age<u.userData.lifetime){const h=1-u.userData.age/u.userData.lifetime;u.material.opacity=h*.7,u.scale.setScalar(1+(1-h)*2)}}c&&(Me.remove(o),xt.splice(s,1))}else{let c=!0;o.children.forEach(u=>{if(u.position.add(u.userData.velocity),u.userData.velocity.y-=.01,u.userData.age+=.016,u.userData.age<u.userData.lifetime){c=!1;const h=1-u.userData.age/u.userData.lifetime;u.scale.setScalar(h),u.material.opacity=h}}),c&&(Me.remove(o),xt.splice(s,1))}}for(let s=Mi.lightBeams.length-1;s>=0;s--){const o=Mi.lightBeams[s],c=Date.now()-o.userData.warningTime;if(c<Mi.warningDuration){const u=o.children[0];u.material.opacity=.3+Math.sin(c*.01)*.2}else if(o.userData.isWarning){o.userData.isWarning=!1;const u=o.children[1];u.material.opacity=.8;const h=new At(2,2,20,16),p=new dt({color:16777096,transparent:!0,opacity:.3}),f=new ue(h,p);f.position.copy(u.position),o.add(f)}if(!o.userData.isWarning){const u=new Ae(o.position.x,o.position.z),h=new Ae(ce.position.x,ce.position.z),p=new Ae(o.userData.lastPlayerPos.x,o.userData.lastPlayerPos.z),f=h.distanceTo(p);if(u.distanceTo(h)<1.5||f<.1){const g=Math.max(te.playerHealth*.8,20);te.playerHealth-=g;const _=te.playerHealth/100;ce.userData.healthBar.scale.x=Math.max(0,_)*ce.userData.healthBar.userData.initialScale,te.playerHealth<=0&&!te.isGameOver&&(te.isGameOver=!0,Rr())}}c>o.userData.lifetime&&(Me.remove(o),Mi.lightBeams.splice(s,1))}for(let s=Mi.swords.length-1;s>=0;s--){const o=Mi.swords[s],c=Date.now()-o.userData.warningTime;if(c<Mi.swordWarningDuration){const u=.3+Math.sin(c*.01)*.2;o.userData.pathIndicator.material.opacity=u,o.userData.arrowGroup&&o.userData.arrowGroup.children.forEach((h,p)=>{h.material.opacity=u,h.position.y=.2+Math.sin(c*.01+p)*.1}),o.children.forEach((h,p)=>{h.geometry instanceof mt&&(h.material.opacity=0)})}else o.userData.isWarning&&(o.userData.isWarning=!1,o.userData.pathIndicator.material.opacity=0,o.userData.arrowGroup&&o.userData.arrowGroup.children.forEach(u=>{u.material.opacity=0}),o.children.forEach((u,h)=>{u.geometry instanceof mt&&(u.material.opacity=1,u.material.color.setHex(16776960))}));if(o.userData.isWarning||o.position.add(o.userData.velocity),!o.userData.isWarning){let u=!1;if(o.children.forEach(h=>{if(h.geometry instanceof mt){const p=new ji().setFromObject(h),f=ce.position.clone(),g=new ji().setFromCenterAndSize(f,new C(.8,1,.8));p.intersectsBox(g)&&(u=!0)}}),u){const h=Math.max(te.playerHealth*.8,20);te.playerHealth-=h;const p=te.playerHealth/100;ce.userData.healthBar.scale.x=Math.max(0,p)*ce.userData.healthBar.userData.initialScale,te.playerHealth<=0&&!te.isGameOver&&(te.isGameOver=!0,Rr())}}o.position.distanceTo(ce.position)>50&&(Me.remove(o),Mi.swords.splice(s,1))}if(!Ne.isSpawned){const s=Date.now();(!Ne.lastBossDefeatTime||s-Ne.lastBossDefeatTime>=Ne.respawnDelay)&&(Ne.boss=wf(),Me.add(Ne.boss),Ne.isSpawned=!0)}if(Ne.boss&&!te.isGameOver){const s=Ne.boss,o=Math.atan2(ce.position.z-s.position.z,ce.position.x-s.position.x),c=s.position.distanceTo(ce.position),u=20,h=s.userData.moveSpeed;c>u+1?(s.position.x+=Math.cos(o)*h,s.position.z+=Math.sin(o)*h):c<u-1&&(s.position.x-=Math.cos(o)*h,s.position.z-=Math.sin(o)*h),s.lookAt(ce.position);const p=Date.now();if(p-Ne.lastShotTime>Ne.shootingCooldown){const f=new C().subVectors(ce.position,s.position).normalize();bf(s.position.clone(),f),Ne.lastShotTime=p}s.userData.healthBar.quaternion.copy(tt.quaternion)}for(let s=Ne.projectiles.length-1;s>=0;s--){const o=Ne.projectiles[s];for(let c=lt.length-1;c>=0;c--){const u=lt[c];if(o.position.distanceTo(u.position)<1.5){const h=oa(u.position.clone()),p=Oi(u.position.clone());xt.push(h),xt.push(p),Me.remove(u),lt.splice(c,1),Me.remove(o),Ne.projectiles.splice(s,1),zt.kills++,zt.score+=u.userData.maxHealth,Hi();break}}if(o&&o.parent){o.userData.time+=.1;const c=o.userData.velocity.clone(),u=new C(-c.z,0,c.x).normalize(),h=u.multiplyScalar(Math.sin(o.userData.time)*.1);if(o.position.add(c),o.position.add(h),o.userData.trails.forEach((p,f)=>{const g=f*.2;p.position.copy(new C(-c.x*f*.5,0,-c.z*f*.5)),p.position.add(u.multiplyScalar(Math.sin(o.userData.time-g)*.1))}),o.position.distanceTo(ce.position)<1){const p=Oi(o.position.clone());xt.push(p),te.playerHealth-=o.userData.damage;const f=te.playerHealth/100;ce.userData.healthBar.scale.x=Math.max(0,f)*ce.userData.healthBar.userData.initialScale,Me.remove(o),Ne.projectiles.splice(s,1),te.playerHealth<=0&&!te.isGameOver&&(te.isGameOver=!0,Rr());continue}for(const p of Ti)if(o.position.distanceTo(p.position)<p.userData.collisionRadius){const f=Oi(o.position.clone());xt.push(f),Me.remove(o),Ne.projectiles.splice(s,1);break}o.position.distanceTo(ce.position)>50&&(Me.remove(o),Ne.projectiles.splice(s,1))}}cf();for(let s=bt.health.length-1;s>=0;s--){const o=bt.health[s];o.rotation.y+=o.userData.rotationSpeed;const c=Math.sin(Date.now()*.003*o.userData.bobSpeed)*o.userData.bobHeight;if(o.position.y=o.userData.initialY+c,o.position.distanceTo(ce.position)<3){te.playerHealth=Math.min(100,te.playerHealth+o.userData.healAmount);const u=te.playerHealth/100;ce.userData.healthBar.scale.x=u*ce.userData.healthBar.userData.initialScale,Me.remove(o),bt.health.splice(s,1);const h=new qi(3,16),p=new dt({color:65280,transparent:!0,opacity:.5,side:at}),f=new ue(h,p);f.position.copy(o.position),f.rotation.x=-Math.PI/2,f.userData={age:0,lifetime:.3},Me.add(f),xt.push(f)}o.position.distanceTo(ce.position)>100&&(Me.remove(o),bt.health.splice(s,1))}hf();for(let s=bt.weapon.length-1;s>=0;s--){const o=bt.weapon[s];o.rotation.y+=o.userData.rotationSpeed;const c=Math.sin(Date.now()*.003*o.userData.bobSpeed)*o.userData.bobHeight;if(o.position.y=o.userData.initialY+c,o.position.distanceTo(ce.position)<3){te.currentWeapon="power",te.powerWeaponAmmo=o.userData.ammoAmount,Hi(),Me.remove(o),bt.weapon.splice(s,1);const u=new qi(3,16),h=new dt({color:65535,transparent:!0,opacity:.5,side:at}),p=new ue(u,h);p.position.copy(o.position),p.rotation.x=-Math.PI/2,p.userData={age:0,lifetime:.3},Me.add(p),xt.push(p)}o.position.distanceTo(ce.position)>100&&(Me.remove(o),bt.weapon.splice(s,1))}}Ir.render(Me,tt)}window.addEventListener("resize",()=>{tt.aspect=window.innerWidth/window.innerHeight,tt.updateProjectionMatrix(),Ir.setSize(window.innerWidth,window.innerHeight)});Dn();function Af(r){const e=new ue(new qi(.3,8),new dt({color:3368652,transparent:!0,opacity:.6,side:at}));return e.position.copy(r),e.rotation.x=-Math.PI/2,e.userData={age:0,lifetime:hi.particleLifetime,initialScale:e.scale.x},Me.add(e),hi.particles.push(e),e}function Rf(){let r=document.getElementById("staminaWarning");te.playerStamina<=20?r||(r=document.createElement("div"),r.id="staminaWarning",r.textContent="Low stamina!",r.style.position="fixed",r.style.left="50%",r.style.top="55%",r.style.transform="translate(-50%, -50%)",r.style.color="#E8B71C",r.style.fontWeight="bold",r.style.animation="pulse 1s infinite",r.style.zIndex="1000",r.style.textShadow="2px 2px 4px rgba(0, 0, 0, 0.5)",document.body.appendChild(r)):r&&r.remove()}function Cf(r){Ti.forEach(e=>{if(e.userData.moons&&e.userData.moons.forEach(t=>{t.userData.time+=t.userData.orbitSpeed;const i=Math.cos(t.userData.time+t.userData.orbitOffset)*t.userData.orbitRadius,a=Math.sin(t.userData.time+t.userData.orbitOffset)*t.userData.orbitRadius;t.position.set(i,0,a)}),e.userData.hasRings){const t=e.children.find(i=>i.geometry instanceof Ma);t&&(t.rotation.z+=1e-4)}})}tt.far=2e3;tt.updateProjectionMatrix();function Lf(){tt.position.x=ce.position.x,tt.position.z=ce.position.z,tt.lookAt(ce.position)}function Vo(){const r=document.createElement("div");r.id="startScreen",r.style.position="fixed",r.style.top="0",r.style.left="0",r.style.width="100%",r.style.height="100%",r.style.backgroundColor="rgba(0, 0, 0, 0.8)",r.style.display="flex",r.style.flexDirection="column",r.style.justifyContent="center",r.style.alignItems="center",r.style.zIndex="1000",r.style.color="#ffffff",r.style.fontFamily="Arial, sans-serif";const e=document.createElement("h1");e.textContent="3D Top Down Shooter",e.style.fontSize="48px",e.style.marginBottom="20px",e.style.color="#ff0000",e.style.textShadow="2px 2px 4px rgba(0, 0, 0, 0.5)";const t=document.createElement("div");t.style.backgroundColor="rgba(0, 0, 0, 0.5)",t.style.padding="30px",t.style.borderRadius="15px",t.style.marginBottom="30px",t.style.border="2px solid #444";const i=document.createElement("h2");i.textContent="Controls",i.style.marginBottom="20px",i.style.color="#00ff00",i.style.textAlign="center",i.style.fontSize="28px";const a=document.createElement("div");a.style.display="flex",a.style.flexDirection="column",a.style.gap="15px",[{key:"WASD",action:"Move"},{key:"Mouse",action:"Aim"},{key:"Left Click",action:"Shoot"}].forEach(o=>{const c=document.createElement("div");c.style.display="flex",c.style.alignItems="center",c.style.gap="15px";const u=document.createElement("span");u.textContent=o.key,u.style.backgroundColor="#333",u.style.padding="5px 10px",u.style.borderRadius="5px",u.style.fontFamily="monospace",u.style.color="#00ff00";const h=document.createElement("span");h.textContent=o.action,h.style.color="#fff",c.appendChild(u),c.appendChild(h),a.appendChild(c)}),t.appendChild(i),t.appendChild(a);const n=document.createElement("div");n.textContent="Click or Press Space to Start",n.style.fontSize="24px",n.style.animation="pulse 1.5s infinite",n.style.marginTop="20px";const l=document.createElement("style");l.textContent=`
        @keyframes pulse {
            0% { opacity: 1; }
            50% { opacity: 0.5; }
            100% { opacity: 1; }
        }
    `,document.head.appendChild(l),r.appendChild(e),r.appendChild(t),r.appendChild(n),document.body.appendChild(r);function s(){te.isGameStarted=!0,te.startTime=Date.now(),te.lastTimeUpdate=Date.now(),r.style.display="none",Pf()}r.addEventListener("click",s),document.addEventListener("keydown",o=>{o.code==="Space"&&!te.isGameStarted&&s()})}function Pf(){for(ce.position.set(0,2,0),te.playerHealth=100,te.playerStamina=100,te.isGameOver=!1,zt.score=0,zt.kills=0,Hi();lt.length>0;){const i=lt.pop();Me.remove(i)}for(Ne.boss&&(Me.remove(Ne.boss),Ne.boss=null);Ne.projectiles.length>0;){const i=Ne.projectiles.pop();Me.remove(i)}const r=Ln(1.5,"sniper"),e=10,t=Math.random()*Math.PI*2;r.position.x=ce.position.x+Math.cos(t)*e,r.position.z=ce.position.z+Math.sin(t)*e,r.position.y=.5,r.lookAt(ce.position),Me.add(r),lt.push(r)}Vo();initScene();setupLighting();createGround();createPlayer();Pn();Vo();Dn();
//# sourceMappingURL=index-9vMdq09W.js.map
