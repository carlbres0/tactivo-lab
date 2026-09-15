var wm=Object.defineProperty;var Rm=(i,t,e)=>t in i?wm(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e;var Pe=(i,t,e)=>Rm(i,typeof t!="symbol"?t+"":t,e);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Il="attached",Cm="detached";const Ve="srgb",bn="srgb-linear",Oo="linear",Be="srgb";const Pl="300 es";class ss{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const un=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Ll=1234567;const _r=Math.PI/180,Os=180/Math.PI;function Kn(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(un[i&255]+un[i>>8&255]+un[i>>16&255]+un[i>>24&255]+"-"+un[t&255]+un[t>>8&255]+"-"+un[t>>16&15|64]+un[t>>24&255]+"-"+un[e&63|128]+un[e>>8&255]+"-"+un[e>>16&255]+un[e>>24&255]+un[n&255]+un[n>>8&255]+un[n>>16&255]+un[n>>24&255]).toLowerCase()}function Ee(i,t,e){return Math.max(t,Math.min(e,i))}function Xc(i,t){return(i%t+t)%t}function Im(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function Pm(i,t,e){return i!==t?(e-i)/(t-i):0}function br(i,t,e){return(1-e)*i+e*t}function Lm(i,t,e,n){return br(i,t,1-Math.exp(-e*n))}function Dm(i,t=1){return t-Math.abs(Xc(i,t*2)-t)}function Fm(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Nm(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Um(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Om(i,t){return i+Math.random()*(t-i)}function km(i){return i*(.5-Math.random())}function Bm(i){i!==void 0&&(Ll=i);let t=Ll+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Gm(i){return i*_r}function zm(i){return i*Os}function Hm(i){return(i&i-1)===0&&i!==0}function Vm(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Wm(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function jm(i,t,e,n,s){const r=Math.cos,o=Math.sin,a=r(e/2),c=o(e/2),u=r((t+n)/2),h=o((t+n)/2),l=r((t-n)/2),d=o((t-n)/2),f=r((n-t)/2),p=o((n-t)/2);switch(s){case"XYX":i.set(a*h,c*l,c*d,a*u);break;case"YZY":i.set(c*d,a*h,c*l,a*u);break;case"ZXZ":i.set(c*l,c*d,a*h,a*u);break;case"XZX":i.set(a*h,c*p,c*f,a*u);break;case"YXY":i.set(c*f,a*h,c*p,a*u);break;case"ZYZ":i.set(c*p,c*f,a*h,a*u);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function jn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Ue(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const vf={DEG2RAD:_r,RAD2DEG:Os,generateUUID:Kn,clamp:Ee,euclideanModulo:Xc,mapLinear:Im,inverseLerp:Pm,lerp:br,damp:Lm,pingpong:Dm,smoothstep:Fm,smootherstep:Nm,randInt:Um,randFloat:Om,randFloatSpread:km,seededRandom:Bm,degToRad:Gm,radToDeg:zm,isPowerOfTwo:Hm,ceilPowerOfTwo:Vm,floorPowerOfTwo:Wm,setQuaternionFromProperEuler:jm,normalize:Ue,denormalize:jn};class oe{constructor(t=0,e=0){oe.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Ee(this.x,t.x,e.x),this.y=Ee(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Ee(this.x,t,e),this.y=Ee(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ee(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ee(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ve{constructor(t,e,n,s,r,o,a,c,u){ve.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,u)}set(t,e,n,s,r,o,a,c,u){const h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],u=n[1],h=n[4],l=n[7],d=n[2],f=n[5],p=n[8],_=s[0],g=s[3],m=s[6],v=s[1],y=s[4],x=s[7],w=s[2],M=s[5],T=s[8];return r[0]=o*_+a*v+c*w,r[3]=o*g+a*y+c*M,r[6]=o*m+a*x+c*T,r[1]=u*_+h*v+l*w,r[4]=u*g+h*y+l*M,r[7]=u*m+h*x+l*T,r[2]=d*_+f*v+p*w,r[5]=d*g+f*y+p*M,r[8]=d*m+f*x+p*T,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],u=t[7],h=t[8];return e*o*h-e*a*u-n*r*h+n*a*c+s*r*u-s*o*c}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],u=t[7],h=t[8],l=h*o-a*u,d=a*c-h*r,f=u*r-o*c,p=e*l+n*d+s*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/p;return t[0]=l*_,t[1]=(s*u-h*n)*_,t[2]=(a*n-s*o)*_,t[3]=d*_,t[4]=(h*e-s*c)*_,t[5]=(s*r-a*e)*_,t[6]=f*_,t[7]=(n*c-u*e)*_,t[8]=(o*e-n*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){const c=Math.cos(r),u=Math.sin(r);return this.set(n*c,n*u,-n*(c*o+u*a)+o+t,-s*u,s*c,-s*(-u*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(la.makeScale(t,e)),this}rotate(t){return this.premultiply(la.makeRotation(-t)),this}translate(t,e){return this.premultiply(la.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const la=new ve;function yf(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Mr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Xm(){const i=Mr("canvas");return i.style.display="block",i}const Dl={};function Is(i){i in Dl||(Dl[i]=!0,console.warn(i))}function qm(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function Km(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function $m(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Fl=new ve().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Nl=new ve().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Ym(){const i={enabled:!0,workingColorSpace:bn,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===Be&&(s.r=gi(s.r),s.g=gi(s.g),s.b=gi(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Be&&(s.r=Fs(s.r),s.g=Fs(s.g),s.b=Fs(s.b))),s},fromWorkingColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},toWorkingColorSpace:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===""?Oo:this.spaces[s].transfer},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[bn]:{primaries:t,whitePoint:n,transfer:Oo,toXYZ:Fl,fromXYZ:Nl,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Ve},outputColorSpaceConfig:{drawingBufferColorSpace:Ve}},[Ve]:{primaries:t,whitePoint:n,transfer:Be,toXYZ:Fl,fromXYZ:Nl,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Ve}}}),i}const Le=Ym();function gi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Fs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let as;class Zm{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{as===void 0&&(as=Mr("canvas")),as.width=t.width,as.height=t.height;const n=as.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=as}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Mr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=gi(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(gi(e[n]/255)*255):e[n]=gi(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Jm=0;class Mf{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Jm++}),this.uuid=Kn(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(ua(s[o].image)):r.push(ua(s[o]))}else r=ua(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function ua(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Zm.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Qm=0;class Ze extends ss{constructor(t=Ze.DEFAULT_IMAGE,e=Ze.DEFAULT_MAPPING,n=1001,s=1001,r=1006,o=1008,a=1023,c=1009,u=Ze.DEFAULT_ANISOTROPY,h=""){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Qm++}),this.uuid=Kn(),this.name="",this.source=new Mf(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=c,this.offset=new oe(0,0),this.repeat=new oe(1,1),this.center=new oe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ve,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==300)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case 1e3:t.x=t.x-Math.floor(t.x);break;case 1001:t.x=t.x<0?0:1;break;case 1002:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case 1e3:t.y=t.y-Math.floor(t.y);break;case 1001:t.y=t.y<0?0:1;break;case 1002:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ze.DEFAULT_IMAGE=null;Ze.DEFAULT_MAPPING=300;Ze.DEFAULT_ANISOTROPY=1;class Se{constructor(t=0,e=0,n=0,s=1){Se.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const c=t.elements,u=c[0],h=c[4],l=c[8],d=c[1],f=c[5],p=c[9],_=c[2],g=c[6],m=c[10];if(Math.abs(h-d)<.01&&Math.abs(l-_)<.01&&Math.abs(p-g)<.01){if(Math.abs(h+d)<.1&&Math.abs(l+_)<.1&&Math.abs(p+g)<.1&&Math.abs(u+f+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const y=(u+1)/2,x=(f+1)/2,w=(m+1)/2,M=(h+d)/4,T=(l+_)/4,I=(p+g)/4;return y>x&&y>w?y<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(y),s=M/n,r=T/n):x>w?x<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),n=M/s,r=I/s):w<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(w),n=T/r,s=I/r),this.set(n,s,r,e),this}let v=Math.sqrt((g-p)*(g-p)+(l-_)*(l-_)+(d-h)*(d-h));return Math.abs(v)<.001&&(v=1),this.x=(g-p)/v,this.y=(l-_)/v,this.z=(d-h)/v,this.w=Math.acos((u+f+m-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Ee(this.x,t.x,e.x),this.y=Ee(this.y,t.y,e.y),this.z=Ee(this.z,t.z,e.z),this.w=Ee(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Ee(this.x,t,e),this.y=Ee(this.y,t,e),this.z=Ee(this.z,t,e),this.w=Ee(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ee(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class tg extends ss{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Se(0,0,t,e),this.scissorTest=!1,this.viewport=new Se(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:1006,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Ze(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Mf(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ns extends tg{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Sf extends Ze{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class eg extends Ze{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class an{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let c=n[s+0],u=n[s+1],h=n[s+2],l=n[s+3];const d=r[o+0],f=r[o+1],p=r[o+2],_=r[o+3];if(a===0){t[e+0]=c,t[e+1]=u,t[e+2]=h,t[e+3]=l;return}if(a===1){t[e+0]=d,t[e+1]=f,t[e+2]=p,t[e+3]=_;return}if(l!==_||c!==d||u!==f||h!==p){let g=1-a;const m=c*d+u*f+h*p+l*_,v=m>=0?1:-1,y=1-m*m;if(y>Number.EPSILON){const w=Math.sqrt(y),M=Math.atan2(w,m*v);g=Math.sin(g*M)/w,a=Math.sin(a*M)/w}const x=a*v;if(c=c*g+d*x,u=u*g+f*x,h=h*g+p*x,l=l*g+_*x,g===1-a){const w=1/Math.sqrt(c*c+u*u+h*h+l*l);c*=w,u*=w,h*=w,l*=w}}t[e]=c,t[e+1]=u,t[e+2]=h,t[e+3]=l}static multiplyQuaternionsFlat(t,e,n,s,r,o){const a=n[s],c=n[s+1],u=n[s+2],h=n[s+3],l=r[o],d=r[o+1],f=r[o+2],p=r[o+3];return t[e]=a*p+h*l+c*f-u*d,t[e+1]=c*p+h*d+u*l-a*f,t[e+2]=u*p+h*f+a*d-c*l,t[e+3]=h*p-a*l-c*d-u*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,u=a(n/2),h=a(s/2),l=a(r/2),d=c(n/2),f=c(s/2),p=c(r/2);switch(o){case"XYZ":this._x=d*h*l+u*f*p,this._y=u*f*l-d*h*p,this._z=u*h*p+d*f*l,this._w=u*h*l-d*f*p;break;case"YXZ":this._x=d*h*l+u*f*p,this._y=u*f*l-d*h*p,this._z=u*h*p-d*f*l,this._w=u*h*l+d*f*p;break;case"ZXY":this._x=d*h*l-u*f*p,this._y=u*f*l+d*h*p,this._z=u*h*p+d*f*l,this._w=u*h*l-d*f*p;break;case"ZYX":this._x=d*h*l-u*f*p,this._y=u*f*l+d*h*p,this._z=u*h*p-d*f*l,this._w=u*h*l+d*f*p;break;case"YZX":this._x=d*h*l+u*f*p,this._y=u*f*l+d*h*p,this._z=u*h*p-d*f*l,this._w=u*h*l-d*f*p;break;case"XZY":this._x=d*h*l-u*f*p,this._y=u*f*l-d*h*p,this._z=u*h*p+d*f*l,this._w=u*h*l+d*f*p;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],c=e[9],u=e[2],h=e[6],l=e[10],d=n+a+l;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-u)*f,this._z=(o-s)*f}else if(n>a&&n>l){const f=2*Math.sqrt(1+n-a-l);this._w=(h-c)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+u)/f}else if(a>l){const f=2*Math.sqrt(1+a-n-l);this._w=(r-u)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(c+h)/f}else{const f=2*Math.sqrt(1+l-n-a);this._w=(o-s)/f,this._x=(r+u)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ee(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,c=e._y,u=e._z,h=e._w;return this._x=n*h+o*a+s*u-r*c,this._y=s*h+o*c+r*a-n*u,this._z=r*h+o*u+n*c-s*a,this._w=o*h-n*a-s*c-r*u,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const f=1-e;return this._w=f*o+e*this._w,this._x=f*n+e*this._x,this._y=f*s+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}const u=Math.sqrt(c),h=Math.atan2(u,a),l=Math.sin((1-e)*h)/u,d=Math.sin(e*h)/u;return this._w=o*l+this._w*d,this._x=n*l+this._x*d,this._y=s*l+this._y*d,this._z=r*l+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class N{constructor(t=0,e=0,n=0){N.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Ul.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Ul.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,c=t.w,u=2*(o*s-a*n),h=2*(a*e-r*s),l=2*(r*n-o*e);return this.x=e+c*u+o*l-a*h,this.y=n+c*h+a*u-r*l,this.z=s+c*l+r*h-o*u,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Ee(this.x,t.x,e.x),this.y=Ee(this.y,t.y,e.y),this.z=Ee(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Ee(this.x,t,e),this.y=Ee(this.y,t,e),this.z=Ee(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ee(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return ha.copy(this).projectOnVector(t),this.sub(ha)}reflect(t){return this.sub(ha.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ee(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ha=new N,Ul=new an;class cn{constructor(t=new N(1/0,1/0,1/0),e=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Gn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Gn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Gn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Gn):Gn.fromBufferAttribute(r,o),Gn.applyMatrix4(t.matrixWorld),this.expandByPoint(Gn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Dr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Dr.copy(n.boundingBox)),Dr.applyMatrix4(t.matrixWorld),this.union(Dr)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Gn),Gn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ys),Fr.subVectors(this.max,Ys),cs.subVectors(t.a,Ys),ls.subVectors(t.b,Ys),us.subVectors(t.c,Ys),yi.subVectors(ls,cs),Mi.subVectors(us,ls),Ui.subVectors(cs,us);let e=[0,-yi.z,yi.y,0,-Mi.z,Mi.y,0,-Ui.z,Ui.y,yi.z,0,-yi.x,Mi.z,0,-Mi.x,Ui.z,0,-Ui.x,-yi.y,yi.x,0,-Mi.y,Mi.x,0,-Ui.y,Ui.x,0];return!da(e,cs,ls,us,Fr)||(e=[1,0,0,0,1,0,0,0,1],!da(e,cs,ls,us,Fr))?!1:(Nr.crossVectors(yi,Mi),e=[Nr.x,Nr.y,Nr.z],da(e,cs,ls,us,Fr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Gn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Gn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(oi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),oi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),oi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),oi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),oi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),oi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),oi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),oi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(oi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const oi=[new N,new N,new N,new N,new N,new N,new N,new N],Gn=new N,Dr=new cn,cs=new N,ls=new N,us=new N,yi=new N,Mi=new N,Ui=new N,Ys=new N,Fr=new N,Nr=new N,Oi=new N;function da(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Oi.fromArray(i,r);const a=s.x*Math.abs(Oi.x)+s.y*Math.abs(Oi.y)+s.z*Math.abs(Oi.z),c=t.dot(Oi),u=e.dot(Oi),h=n.dot(Oi);if(Math.max(-Math.max(c,u,h),Math.min(c,u,h))>a)return!1}return!0}const ng=new cn,Zs=new N,fa=new N;class kn{constructor(t=new N,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):ng.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Zs.subVectors(t,this.center);const e=Zs.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Zs,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(fa.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Zs.copy(t.center).add(fa)),this.expandByPoint(Zs.copy(t.center).sub(fa))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ai=new N,pa=new N,Ur=new N,Si=new N,ma=new N,Or=new N,ga=new N;class Yo{constructor(t=new N,e=new N(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ai)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=ai.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ai.copy(this.origin).addScaledVector(this.direction,e),ai.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){pa.copy(t).add(e).multiplyScalar(.5),Ur.copy(e).sub(t).normalize(),Si.copy(this.origin).sub(pa);const r=t.distanceTo(e)*.5,o=-this.direction.dot(Ur),a=Si.dot(this.direction),c=-Si.dot(Ur),u=Si.lengthSq(),h=Math.abs(1-o*o);let l,d,f,p;if(h>0)if(l=o*c-a,d=o*a-c,p=r*h,l>=0)if(d>=-p)if(d<=p){const _=1/h;l*=_,d*=_,f=l*(l+o*d+2*a)+d*(o*l+d+2*c)+u}else d=r,l=Math.max(0,-(o*d+a)),f=-l*l+d*(d+2*c)+u;else d=-r,l=Math.max(0,-(o*d+a)),f=-l*l+d*(d+2*c)+u;else d<=-p?(l=Math.max(0,-(-o*r+a)),d=l>0?-r:Math.min(Math.max(-r,-c),r),f=-l*l+d*(d+2*c)+u):d<=p?(l=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+u):(l=Math.max(0,-(o*r+a)),d=l>0?r:Math.min(Math.max(-r,-c),r),f=-l*l+d*(d+2*c)+u);else d=o>0?-r:r,l=Math.max(0,-(o*d+a)),f=-l*l+d*(d+2*c)+u;return n&&n.copy(this.origin).addScaledVector(this.direction,l),s&&s.copy(pa).addScaledVector(Ur,d),f}intersectSphere(t,e){ai.subVectors(t.center,this.origin);const n=ai.dot(this.direction),s=ai.dot(ai)-n*n,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,c;const u=1/this.direction.x,h=1/this.direction.y,l=1/this.direction.z,d=this.origin;return u>=0?(n=(t.min.x-d.x)*u,s=(t.max.x-d.x)*u):(n=(t.max.x-d.x)*u,s=(t.min.x-d.x)*u),h>=0?(r=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),l>=0?(a=(t.min.z-d.z)*l,c=(t.max.z-d.z)*l):(a=(t.max.z-d.z)*l,c=(t.min.z-d.z)*l),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,ai)!==null}intersectTriangle(t,e,n,s,r){ma.subVectors(e,t),Or.subVectors(n,t),ga.crossVectors(ma,Or);let o=this.direction.dot(ga),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Si.subVectors(this.origin,t);const c=a*this.direction.dot(Or.crossVectors(Si,Or));if(c<0)return null;const u=a*this.direction.dot(ma.cross(Si));if(u<0||c+u>o)return null;const h=-a*Si.dot(ga);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class _e{constructor(t,e,n,s,r,o,a,c,u,h,l,d,f,p,_,g){_e.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,u,h,l,d,f,p,_,g)}set(t,e,n,s,r,o,a,c,u,h,l,d,f,p,_,g){const m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=s,m[1]=r,m[5]=o,m[9]=a,m[13]=c,m[2]=u,m[6]=h,m[10]=l,m[14]=d,m[3]=f,m[7]=p,m[11]=_,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new _e().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/hs.setFromMatrixColumn(t,0).length(),r=1/hs.setFromMatrixColumn(t,1).length(),o=1/hs.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),u=Math.sin(s),h=Math.cos(r),l=Math.sin(r);if(t.order==="XYZ"){const d=o*h,f=o*l,p=a*h,_=a*l;e[0]=c*h,e[4]=-c*l,e[8]=u,e[1]=f+p*u,e[5]=d-_*u,e[9]=-a*c,e[2]=_-d*u,e[6]=p+f*u,e[10]=o*c}else if(t.order==="YXZ"){const d=c*h,f=c*l,p=u*h,_=u*l;e[0]=d+_*a,e[4]=p*a-f,e[8]=o*u,e[1]=o*l,e[5]=o*h,e[9]=-a,e[2]=f*a-p,e[6]=_+d*a,e[10]=o*c}else if(t.order==="ZXY"){const d=c*h,f=c*l,p=u*h,_=u*l;e[0]=d-_*a,e[4]=-o*l,e[8]=p+f*a,e[1]=f+p*a,e[5]=o*h,e[9]=_-d*a,e[2]=-o*u,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){const d=o*h,f=o*l,p=a*h,_=a*l;e[0]=c*h,e[4]=p*u-f,e[8]=d*u+_,e[1]=c*l,e[5]=_*u+d,e[9]=f*u-p,e[2]=-u,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){const d=o*c,f=o*u,p=a*c,_=a*u;e[0]=c*h,e[4]=_-d*l,e[8]=p*l+f,e[1]=l,e[5]=o*h,e[9]=-a*h,e[2]=-u*h,e[6]=f*l+p,e[10]=d-_*l}else if(t.order==="XZY"){const d=o*c,f=o*u,p=a*c,_=a*u;e[0]=c*h,e[4]=-l,e[8]=u*h,e[1]=d*l+_,e[5]=o*h,e[9]=f*l-p,e[2]=p*l-f,e[6]=a*h,e[10]=_*l+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(ig,t,sg)}lookAt(t,e,n){const s=this.elements;return wn.subVectors(t,e),wn.lengthSq()===0&&(wn.z=1),wn.normalize(),Ai.crossVectors(n,wn),Ai.lengthSq()===0&&(Math.abs(n.z)===1?wn.x+=1e-4:wn.z+=1e-4,wn.normalize(),Ai.crossVectors(n,wn)),Ai.normalize(),kr.crossVectors(wn,Ai),s[0]=Ai.x,s[4]=kr.x,s[8]=wn.x,s[1]=Ai.y,s[5]=kr.y,s[9]=wn.y,s[2]=Ai.z,s[6]=kr.z,s[10]=wn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],u=n[12],h=n[1],l=n[5],d=n[9],f=n[13],p=n[2],_=n[6],g=n[10],m=n[14],v=n[3],y=n[7],x=n[11],w=n[15],M=s[0],T=s[4],I=s[8],S=s[12],A=s[1],C=s[5],U=s[9],P=s[13],O=s[2],Z=s[6],H=s[10],X=s[14],B=s[3],j=s[7],Q=s[11],it=s[15];return r[0]=o*M+a*A+c*O+u*B,r[4]=o*T+a*C+c*Z+u*j,r[8]=o*I+a*U+c*H+u*Q,r[12]=o*S+a*P+c*X+u*it,r[1]=h*M+l*A+d*O+f*B,r[5]=h*T+l*C+d*Z+f*j,r[9]=h*I+l*U+d*H+f*Q,r[13]=h*S+l*P+d*X+f*it,r[2]=p*M+_*A+g*O+m*B,r[6]=p*T+_*C+g*Z+m*j,r[10]=p*I+_*U+g*H+m*Q,r[14]=p*S+_*P+g*X+m*it,r[3]=v*M+y*A+x*O+w*B,r[7]=v*T+y*C+x*Z+w*j,r[11]=v*I+y*U+x*H+w*Q,r[15]=v*S+y*P+x*X+w*it,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],c=t[9],u=t[13],h=t[2],l=t[6],d=t[10],f=t[14],p=t[3],_=t[7],g=t[11],m=t[15];return p*(+r*c*l-s*u*l-r*a*d+n*u*d+s*a*f-n*c*f)+_*(+e*c*f-e*u*d+r*o*d-s*o*f+s*u*h-r*c*h)+g*(+e*u*l-e*a*f-r*o*l+n*o*f+r*a*h-n*u*h)+m*(-s*a*h-e*c*l+e*a*d+s*o*l-n*o*d+n*c*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],u=t[7],h=t[8],l=t[9],d=t[10],f=t[11],p=t[12],_=t[13],g=t[14],m=t[15],v=l*g*u-_*d*u+_*c*f-a*g*f-l*c*m+a*d*m,y=p*d*u-h*g*u-p*c*f+o*g*f+h*c*m-o*d*m,x=h*_*u-p*l*u+p*a*f-o*_*f-h*a*m+o*l*m,w=p*l*c-h*_*c-p*a*d+o*_*d+h*a*g-o*l*g,M=e*v+n*y+s*x+r*w;if(M===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/M;return t[0]=v*T,t[1]=(_*d*r-l*g*r-_*s*f+n*g*f+l*s*m-n*d*m)*T,t[2]=(a*g*r-_*c*r+_*s*u-n*g*u-a*s*m+n*c*m)*T,t[3]=(l*c*r-a*d*r-l*s*u+n*d*u+a*s*f-n*c*f)*T,t[4]=y*T,t[5]=(h*g*r-p*d*r+p*s*f-e*g*f-h*s*m+e*d*m)*T,t[6]=(p*c*r-o*g*r-p*s*u+e*g*u+o*s*m-e*c*m)*T,t[7]=(o*d*r-h*c*r+h*s*u-e*d*u-o*s*f+e*c*f)*T,t[8]=x*T,t[9]=(p*l*r-h*_*r-p*n*f+e*_*f+h*n*m-e*l*m)*T,t[10]=(o*_*r-p*a*r+p*n*u-e*_*u-o*n*m+e*a*m)*T,t[11]=(h*a*r-o*l*r-h*n*u+e*l*u+o*n*f-e*a*f)*T,t[12]=w*T,t[13]=(h*_*s-p*l*s+p*n*d-e*_*d-h*n*g+e*l*g)*T,t[14]=(p*a*s-o*_*s-p*n*c+e*_*c+o*n*g-e*a*g)*T,t[15]=(o*l*s-h*a*s+h*n*c-e*l*c-o*n*d+e*a*d)*T,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,u=r*o,h=r*a;return this.set(u*o+n,u*a-s*c,u*c+s*a,0,u*a+s*c,h*a+n,h*c-s*o,0,u*c-s*a,h*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,u=r+r,h=o+o,l=a+a,d=r*u,f=r*h,p=r*l,_=o*h,g=o*l,m=a*l,v=c*u,y=c*h,x=c*l,w=n.x,M=n.y,T=n.z;return s[0]=(1-(_+m))*w,s[1]=(f+x)*w,s[2]=(p-y)*w,s[3]=0,s[4]=(f-x)*M,s[5]=(1-(d+m))*M,s[6]=(g+v)*M,s[7]=0,s[8]=(p+y)*T,s[9]=(g-v)*T,s[10]=(1-(d+_))*T,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=hs.set(s[0],s[1],s[2]).length();const o=hs.set(s[4],s[5],s[6]).length(),a=hs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],zn.copy(this);const u=1/r,h=1/o,l=1/a;return zn.elements[0]*=u,zn.elements[1]*=u,zn.elements[2]*=u,zn.elements[4]*=h,zn.elements[5]*=h,zn.elements[6]*=h,zn.elements[8]*=l,zn.elements[9]*=l,zn.elements[10]*=l,e.setFromRotationMatrix(zn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=2e3){const c=this.elements,u=2*r/(e-t),h=2*r/(n-s),l=(e+t)/(e-t),d=(n+s)/(n-s);let f,p;if(a===2e3)f=-(o+r)/(o-r),p=-2*o*r/(o-r);else if(a===2001)f=-o/(o-r),p=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=l,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=p,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=2e3){const c=this.elements,u=1/(e-t),h=1/(n-s),l=1/(o-r),d=(e+t)*u,f=(n+s)*h;let p,_;if(a===2e3)p=(o+r)*l,_=-2*l;else if(a===2001)p=r*l,_=-1*l;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*u,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=_,c[14]=-p,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const hs=new N,zn=new _e,ig=new N(0,0,0),sg=new N(1,1,1),Ai=new N,kr=new N,wn=new N,Ol=new _e,kl=new an;class On{constructor(t=0,e=0,n=0,s=On.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],c=s[1],u=s[5],h=s[9],l=s[2],d=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(Ee(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Ee(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,u)):(this._y=Math.atan2(-l,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ee(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-l,f),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Ee(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(Ee(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,u),this._y=Math.atan2(-l,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Ee(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,u),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Ol.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Ol,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return kl.setFromEuler(this),this.setFromQuaternion(kl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}On.DEFAULT_ORDER="XYZ";class Af{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let rg=0;const Bl=new N,ds=new an,ci=new _e,Br=new N,Js=new N,og=new N,ag=new an,Gl=new N(1,0,0),zl=new N(0,1,0),Hl=new N(0,0,1),Vl={type:"added"},cg={type:"removed"},fs={type:"childadded",child:null},_a={type:"childremoved",child:null};class He extends ss{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:rg++}),this.uuid=Kn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=He.DEFAULT_UP.clone();const t=new N,e=new On,n=new an,s=new N(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new _e},normalMatrix:{value:new ve}}),this.matrix=new _e,this.matrixWorld=new _e,this.matrixAutoUpdate=He.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=He.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Af,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ds.setFromAxisAngle(t,e),this.quaternion.multiply(ds),this}rotateOnWorldAxis(t,e){return ds.setFromAxisAngle(t,e),this.quaternion.premultiply(ds),this}rotateX(t){return this.rotateOnAxis(Gl,t)}rotateY(t){return this.rotateOnAxis(zl,t)}rotateZ(t){return this.rotateOnAxis(Hl,t)}translateOnAxis(t,e){return Bl.copy(t).applyQuaternion(this.quaternion),this.position.add(Bl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Gl,t)}translateY(t){return this.translateOnAxis(zl,t)}translateZ(t){return this.translateOnAxis(Hl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ci.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Br.copy(t):Br.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Js.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ci.lookAt(Js,Br,this.up):ci.lookAt(Br,Js,this.up),this.quaternion.setFromRotationMatrix(ci),s&&(ci.extractRotation(s.matrixWorld),ds.setFromRotationMatrix(ci),this.quaternion.premultiply(ds.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Vl),fs.child=t,this.dispatchEvent(fs),fs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(cg),_a.child=t,this.dispatchEvent(_a),_a.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ci.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ci.multiply(t.parent.matrixWorld)),t.applyMatrix4(ci),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Vl),fs.child=t,this.dispatchEvent(fs),fs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Js,t,og),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Js,ag,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let u=0,h=c.length;u<h;u++){const l=c[u];r(t.shapes,l)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,u=this.material.length;c<u;c++)a.push(r(t.materials,this.material[c]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(r(t.animations,c))}}if(e){const a=o(t.geometries),c=o(t.materials),u=o(t.textures),h=o(t.images),l=o(t.shapes),d=o(t.skeletons),f=o(t.animations),p=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),u.length>0&&(n.textures=u),h.length>0&&(n.images=h),l.length>0&&(n.shapes=l),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),p.length>0&&(n.nodes=p)}return n.object=s,n;function o(a){const c=[];for(const u in a){const h=a[u];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}He.DEFAULT_UP=new N(0,1,0);He.DEFAULT_MATRIX_AUTO_UPDATE=!0;He.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Hn=new N,li=new N,ba=new N,ui=new N,ps=new N,ms=new N,Wl=new N,xa=new N,va=new N,ya=new N,Ma=new Se,Sa=new Se,Aa=new Se;class Nn{constructor(t=new N,e=new N,n=new N){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Hn.subVectors(t,e),s.cross(Hn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Hn.subVectors(s,e),li.subVectors(n,e),ba.subVectors(t,e);const o=Hn.dot(Hn),a=Hn.dot(li),c=Hn.dot(ba),u=li.dot(li),h=li.dot(ba),l=o*u-a*a;if(l===0)return r.set(0,0,0),null;const d=1/l,f=(u*c-a*h)*d,p=(o*h-a*c)*d;return r.set(1-f-p,p,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,ui)===null?!1:ui.x>=0&&ui.y>=0&&ui.x+ui.y<=1}static getInterpolation(t,e,n,s,r,o,a,c){return this.getBarycoord(t,e,n,s,ui)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,ui.x),c.addScaledVector(o,ui.y),c.addScaledVector(a,ui.z),c)}static getInterpolatedAttribute(t,e,n,s,r,o){return Ma.setScalar(0),Sa.setScalar(0),Aa.setScalar(0),Ma.fromBufferAttribute(t,e),Sa.fromBufferAttribute(t,n),Aa.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Ma,r.x),o.addScaledVector(Sa,r.y),o.addScaledVector(Aa,r.z),o}static isFrontFacing(t,e,n,s){return Hn.subVectors(n,e),li.subVectors(t,e),Hn.cross(li).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Hn.subVectors(this.c,this.b),li.subVectors(this.a,this.b),Hn.cross(li).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Nn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Nn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return Nn.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return Nn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Nn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let o,a;ps.subVectors(s,n),ms.subVectors(r,n),xa.subVectors(t,n);const c=ps.dot(xa),u=ms.dot(xa);if(c<=0&&u<=0)return e.copy(n);va.subVectors(t,s);const h=ps.dot(va),l=ms.dot(va);if(h>=0&&l<=h)return e.copy(s);const d=c*l-h*u;if(d<=0&&c>=0&&h<=0)return o=c/(c-h),e.copy(n).addScaledVector(ps,o);ya.subVectors(t,r);const f=ps.dot(ya),p=ms.dot(ya);if(p>=0&&f<=p)return e.copy(r);const _=f*u-c*p;if(_<=0&&u>=0&&p<=0)return a=u/(u-p),e.copy(n).addScaledVector(ms,a);const g=h*p-f*l;if(g<=0&&l-h>=0&&f-p>=0)return Wl.subVectors(r,s),a=(l-h)/(l-h+(f-p)),e.copy(s).addScaledVector(Wl,a);const m=1/(g+_+d);return o=_*m,a=d*m,e.copy(n).addScaledVector(ps,o).addScaledVector(ms,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Ef={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ei={h:0,s:0,l:0},Gr={h:0,s:0,l:0};function Ea(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class he{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ve){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Le.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=Le.workingColorSpace){return this.r=t,this.g=e,this.b=n,Le.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=Le.workingColorSpace){if(t=Xc(t,1),e=Ee(e,0,1),n=Ee(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Ea(o,r,t+1/3),this.g=Ea(o,r,t),this.b=Ea(o,r,t-1/3)}return Le.toWorkingColorSpace(this,s),this}setStyle(t,e=Ve){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ve){const n=Ef[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=gi(t.r),this.g=gi(t.g),this.b=gi(t.b),this}copyLinearToSRGB(t){return this.r=Fs(t.r),this.g=Fs(t.g),this.b=Fs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ve){return Le.fromWorkingColorSpace(hn.copy(this),t),Math.round(Ee(hn.r*255,0,255))*65536+Math.round(Ee(hn.g*255,0,255))*256+Math.round(Ee(hn.b*255,0,255))}getHexString(t=Ve){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Le.workingColorSpace){Le.fromWorkingColorSpace(hn.copy(this),e);const n=hn.r,s=hn.g,r=hn.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let c,u;const h=(a+o)/2;if(a===o)c=0,u=0;else{const l=o-a;switch(u=h<=.5?l/(o+a):l/(2-o-a),o){case n:c=(s-r)/l+(s<r?6:0);break;case s:c=(r-n)/l+2;break;case r:c=(n-s)/l+4;break}c/=6}return t.h=c,t.s=u,t.l=h,t}getRGB(t,e=Le.workingColorSpace){return Le.fromWorkingColorSpace(hn.copy(this),e),t.r=hn.r,t.g=hn.g,t.b=hn.b,t}getStyle(t=Ve){Le.fromWorkingColorSpace(hn.copy(this),t);const e=hn.r,n=hn.g,s=hn.b;return t!==Ve?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Ei),this.setHSL(Ei.h+t,Ei.s+e,Ei.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Ei),t.getHSL(Gr);const n=br(Ei.h,Gr.h,e),s=br(Ei.s,Gr.s,e),r=br(Ei.l,Gr.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const hn=new he;he.NAMES=Ef;let lg=0;class Un extends ss{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:lg++}),this.uuid=Kn(),this.name="",this.type="Material",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new he(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=7680,this.stencilZFail=7680,this.stencilZPass=7680,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==1&&(n.blending=this.blending),this.side!==0&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==204&&(n.blendSrc=this.blendSrc),this.blendDst!==205&&(n.blendDst=this.blendDst),this.blendEquation!==100&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==3&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==519&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==7680&&(n.stencilFail=this.stencilFail),this.stencilZFail!==7680&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==7680&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class en extends Un{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new he(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new On,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const $e=new N,zr=new oe;class De{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=35044,this.updateRanges=[],this.gpuType=1015,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)zr.fromBufferAttribute(this,e),zr.applyMatrix3(t),this.setXY(e,zr.x,zr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)$e.fromBufferAttribute(this,e),$e.applyMatrix3(t),this.setXYZ(e,$e.x,$e.y,$e.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)$e.fromBufferAttribute(this,e),$e.applyMatrix4(t),this.setXYZ(e,$e.x,$e.y,$e.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)$e.fromBufferAttribute(this,e),$e.applyNormalMatrix(t),this.setXYZ(e,$e.x,$e.y,$e.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)$e.fromBufferAttribute(this,e),$e.transformDirection(t),this.setXYZ(e,$e.x,$e.y,$e.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=jn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ue(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=jn(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ue(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=jn(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ue(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=jn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ue(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=jn(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ue(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ue(e,this.array),n=Ue(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Ue(e,this.array),n=Ue(n,this.array),s=Ue(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Ue(e,this.array),n=Ue(n,this.array),s=Ue(s,this.array),r=Ue(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==35044&&(t.usage=this.usage),t}}class Tf extends De{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class wf extends De{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class We extends De{constructor(t,e,n){super(new Float32Array(t),e,n)}}let ug=0;const Pn=new _e,Ta=new He,gs=new N,Rn=new cn,Qs=new cn,tn=new N;class Xe extends ss{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ug++}),this.uuid=Kn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(yf(t)?wf:Tf)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new ve().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Pn.makeRotationFromQuaternion(t),this.applyMatrix4(Pn),this}rotateX(t){return Pn.makeRotationX(t),this.applyMatrix4(Pn),this}rotateY(t){return Pn.makeRotationY(t),this.applyMatrix4(Pn),this}rotateZ(t){return Pn.makeRotationZ(t),this.applyMatrix4(Pn),this}translate(t,e,n){return Pn.makeTranslation(t,e,n),this.applyMatrix4(Pn),this}scale(t,e,n){return Pn.makeScale(t,e,n),this.applyMatrix4(Pn),this}lookAt(t){return Ta.lookAt(t),Ta.updateMatrix(),this.applyMatrix4(Ta.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(gs).negate(),this.translate(gs.x,gs.y,gs.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new We(n,3))}else{const n=Math.min(t.length,e.count);for(let s=0;s<n;s++){const r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new cn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];Rn.setFromBufferAttribute(r),this.morphTargetsRelative?(tn.addVectors(this.boundingBox.min,Rn.min),this.boundingBox.expandByPoint(tn),tn.addVectors(this.boundingBox.max,Rn.max),this.boundingBox.expandByPoint(tn)):(this.boundingBox.expandByPoint(Rn.min),this.boundingBox.expandByPoint(Rn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new kn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(t){const n=this.boundingSphere.center;if(Rn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];Qs.setFromBufferAttribute(a),this.morphTargetsRelative?(tn.addVectors(Rn.min,Qs.min),Rn.expandByPoint(tn),tn.addVectors(Rn.max,Qs.max),Rn.expandByPoint(tn)):(Rn.expandByPoint(Qs.min),Rn.expandByPoint(Qs.max))}Rn.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)tn.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(tn));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],c=this.morphTargetsRelative;for(let u=0,h=a.count;u<h;u++)tn.fromBufferAttribute(a,u),c&&(gs.fromBufferAttribute(t,u),tn.add(gs)),s=Math.max(s,n.distanceToSquared(tn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new De(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let I=0;I<n.count;I++)a[I]=new N,c[I]=new N;const u=new N,h=new N,l=new N,d=new oe,f=new oe,p=new oe,_=new N,g=new N;function m(I,S,A){u.fromBufferAttribute(n,I),h.fromBufferAttribute(n,S),l.fromBufferAttribute(n,A),d.fromBufferAttribute(r,I),f.fromBufferAttribute(r,S),p.fromBufferAttribute(r,A),h.sub(u),l.sub(u),f.sub(d),p.sub(d);const C=1/(f.x*p.y-p.x*f.y);isFinite(C)&&(_.copy(h).multiplyScalar(p.y).addScaledVector(l,-f.y).multiplyScalar(C),g.copy(l).multiplyScalar(f.x).addScaledVector(h,-p.x).multiplyScalar(C),a[I].add(_),a[S].add(_),a[A].add(_),c[I].add(g),c[S].add(g),c[A].add(g))}let v=this.groups;v.length===0&&(v=[{start:0,count:t.count}]);for(let I=0,S=v.length;I<S;++I){const A=v[I],C=A.start,U=A.count;for(let P=C,O=C+U;P<O;P+=3)m(t.getX(P+0),t.getX(P+1),t.getX(P+2))}const y=new N,x=new N,w=new N,M=new N;function T(I){w.fromBufferAttribute(s,I),M.copy(w);const S=a[I];y.copy(S),y.sub(w.multiplyScalar(w.dot(S))).normalize(),x.crossVectors(M,S);const C=x.dot(c[I])<0?-1:1;o.setXYZW(I,y.x,y.y,y.z,C)}for(let I=0,S=v.length;I<S;++I){const A=v[I],C=A.start,U=A.count;for(let P=C,O=C+U;P<O;P+=3)T(t.getX(P+0)),T(t.getX(P+1)),T(t.getX(P+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new De(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const s=new N,r=new N,o=new N,a=new N,c=new N,u=new N,h=new N,l=new N;if(t)for(let d=0,f=t.count;d<f;d+=3){const p=t.getX(d+0),_=t.getX(d+1),g=t.getX(d+2);s.fromBufferAttribute(e,p),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,g),h.subVectors(o,r),l.subVectors(s,r),h.cross(l),a.fromBufferAttribute(n,p),c.fromBufferAttribute(n,_),u.fromBufferAttribute(n,g),a.add(h),c.add(h),u.add(h),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(g,u.x,u.y,u.z)}else for(let d=0,f=e.count;d<f;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,r),l.subVectors(s,r),h.cross(l),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)tn.fromBufferAttribute(t,e),tn.normalize(),t.setXYZ(e,tn.x,tn.y,tn.z)}toNonIndexed(){function t(a,c){const u=a.array,h=a.itemSize,l=a.normalized,d=new u.constructor(c.length*h);let f=0,p=0;for(let _=0,g=c.length;_<g;_++){a.isInterleavedBufferAttribute?f=c[_]*a.data.stride+a.offset:f=c[_]*h;for(let m=0;m<h;m++)d[p++]=u[f++]}return new De(d,h,l)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Xe,n=this.index.array,s=this.attributes;for(const a in s){const c=s[a],u=t(c,n);e.setAttribute(a,u)}const r=this.morphAttributes;for(const a in r){const c=[],u=r[a];for(let h=0,l=u.length;h<l;h++){const d=u[h],f=t(d,n);c.push(f)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const u=o[a];e.addGroup(u.start,u.count,u.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const u in c)c[u]!==void 0&&(t[u]=c[u]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const u=n[c];t.data.attributes[c]=u.toJSON(t.data)}const s={};let r=!1;for(const c in this.morphAttributes){const u=this.morphAttributes[c],h=[];for(let l=0,d=u.length;l<d;l++){const f=u[l];h.push(f.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const u in s){const h=s[u];this.setAttribute(u,h.clone(e))}const r=t.morphAttributes;for(const u in r){const h=[],l=r[u];for(let d=0,f=l.length;d<f;d++)h.push(l[d].clone(e));this.morphAttributes[u]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let u=0,h=o.length;u<h;u++){const l=o[u];this.addGroup(l.start,l.count,l.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const jl=new _e,ki=new Yo,Hr=new kn,Xl=new N,Vr=new N,Wr=new N,jr=new N,wa=new N,Xr=new N,ql=new N,qr=new N;class Re extends He{constructor(t=new Xe,e=new en){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){Xr.set(0,0,0);for(let c=0,u=r.length;c<u;c++){const h=a[c],l=r[c];h!==0&&(wa.fromBufferAttribute(l,t),o?Xr.addScaledVector(wa,h):Xr.addScaledVector(wa.sub(e),h))}e.add(Xr)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Hr.copy(n.boundingSphere),Hr.applyMatrix4(r),ki.copy(t.ray).recast(t.near),!(Hr.containsPoint(ki.origin)===!1&&(ki.intersectSphere(Hr,Xl)===null||ki.origin.distanceToSquared(Xl)>(t.far-t.near)**2))&&(jl.copy(r).invert(),ki.copy(t.ray).applyMatrix4(jl),!(n.boundingBox!==null&&ki.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ki)))}_computeIntersections(t,e,n){let s;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,u=r.attributes.uv,h=r.attributes.uv1,l=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,_=d.length;p<_;p++){const g=d[p],m=o[g.materialIndex],v=Math.max(g.start,f.start),y=Math.min(a.count,Math.min(g.start+g.count,f.start+f.count));for(let x=v,w=y;x<w;x+=3){const M=a.getX(x),T=a.getX(x+1),I=a.getX(x+2);s=Kr(this,m,t,n,u,h,l,M,T,I),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{const p=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let g=p,m=_;g<m;g+=3){const v=a.getX(g),y=a.getX(g+1),x=a.getX(g+2);s=Kr(this,o,t,n,u,h,l,v,y,x),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let p=0,_=d.length;p<_;p++){const g=d[p],m=o[g.materialIndex],v=Math.max(g.start,f.start),y=Math.min(c.count,Math.min(g.start+g.count,f.start+f.count));for(let x=v,w=y;x<w;x+=3){const M=x,T=x+1,I=x+2;s=Kr(this,m,t,n,u,h,l,M,T,I),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{const p=Math.max(0,f.start),_=Math.min(c.count,f.start+f.count);for(let g=p,m=_;g<m;g+=3){const v=g,y=g+1,x=g+2;s=Kr(this,o,t,n,u,h,l,v,y,x),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}}}function hg(i,t,e,n,s,r,o,a){let c;if(t.side===1?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,t.side===0,a),c===null)return null;qr.copy(a),qr.applyMatrix4(i.matrixWorld);const u=e.ray.origin.distanceTo(qr);return u<e.near||u>e.far?null:{distance:u,point:qr.clone(),object:i}}function Kr(i,t,e,n,s,r,o,a,c,u){i.getVertexPosition(a,Vr),i.getVertexPosition(c,Wr),i.getVertexPosition(u,jr);const h=hg(i,t,e,n,Vr,Wr,jr,ql);if(h){const l=new N;Nn.getBarycoord(ql,Vr,Wr,jr,l),s&&(h.uv=Nn.getInterpolatedAttribute(s,a,c,u,l,new oe)),r&&(h.uv1=Nn.getInterpolatedAttribute(r,a,c,u,l,new oe)),o&&(h.normal=Nn.getInterpolatedAttribute(o,a,c,u,l,new N),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:c,c:u,normal:new N,materialIndex:0};Nn.getNormal(Vr,Wr,jr,d.normal),h.face=d,h.barycoord=l}return h}class bi extends Xe{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const c=[],u=[],h=[],l=[];let d=0,f=0;p("z","y","x",-1,-1,n,e,t,o,r,0),p("z","y","x",1,-1,n,e,-t,o,r,1),p("x","z","y",1,1,t,n,e,s,o,2),p("x","z","y",1,-1,t,n,-e,s,o,3),p("x","y","z",1,-1,t,e,n,s,r,4),p("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new We(u,3)),this.setAttribute("normal",new We(h,3)),this.setAttribute("uv",new We(l,2));function p(_,g,m,v,y,x,w,M,T,I,S){const A=x/T,C=w/I,U=x/2,P=w/2,O=M/2,Z=T+1,H=I+1;let X=0,B=0;const j=new N;for(let Q=0;Q<H;Q++){const it=Q*C-P;for(let ct=0;ct<Z;ct++){const Dt=ct*A-U;j[_]=Dt*v,j[g]=it*y,j[m]=O,u.push(j.x,j.y,j.z),j[_]=0,j[g]=0,j[m]=M>0?1:-1,h.push(j.x,j.y,j.z),l.push(ct/T),l.push(1-Q/I),X+=1}}for(let Q=0;Q<I;Q++)for(let it=0;it<T;it++){const ct=d+it+Z*Q,Dt=d+it+Z*(Q+1),nt=d+(it+1)+Z*(Q+1),ot=d+(it+1)+Z*Q;c.push(ct,Dt,ot),c.push(Dt,nt,ot),B+=6}a.addGroup(f,B,S),f+=B,d+=X}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new bi(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function ks(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function mn(i){const t={};for(let e=0;e<i.length;e++){const n=ks(i[e]);for(const s in n)t[s]=n[s]}return t}function dg(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Rf(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Le.workingColorSpace}const qc={clone:ks,merge:mn};var fg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,pg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class xi extends Un{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=fg,this.fragmentShader=pg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ks(t.uniforms),this.uniformsGroups=dg(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Cf extends He{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new _e,this.projectionMatrix=new _e,this.projectionMatrixInverse=new _e,this.coordinateSystem=2e3}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ti=new N,Kl=new oe,$l=new oe;class _n extends Cf{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Os*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(_r*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Os*2*Math.atan(Math.tan(_r*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Ti.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Ti.x,Ti.y).multiplyScalar(-t/Ti.z),Ti.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ti.x,Ti.y).multiplyScalar(-t/Ti.z)}getViewSize(t,e){return this.getViewBounds(t,Kl,$l),e.subVectors($l,Kl)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(_r*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,u=o.fullHeight;r+=o.offsetX*s/c,e-=o.offsetY*n/u,s*=o.width/c,n*=o.height/u}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const _s=-90,bs=1;class mg extends He{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new _n(_s,bs,t,e);s.layers=this.layers,this.add(s);const r=new _n(_s,bs,t,e);r.layers=this.layers,this.add(r);const o=new _n(_s,bs,t,e);o.layers=this.layers,this.add(o);const a=new _n(_s,bs,t,e);a.layers=this.layers,this.add(a);const c=new _n(_s,bs,t,e);c.layers=this.layers,this.add(c);const u=new _n(_s,bs,t,e);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,c]=e;for(const u of e)this.remove(u);if(t===2e3)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const u of e)this.add(u),u.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,u,h]=this.children,l=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,u),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(l,d,f),t.xr.enabled=p,n.texture.needsPMREMUpdate=!0}}class If extends Ze{constructor(t,e,n,s,r,o,a,c,u,h){t=t!==void 0?t:[],e=e!==void 0?e:301,super(t,e,n,s,r,o,a,c,u,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class gg extends ns{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new If(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:1006}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new bi(5,5,5),r=new xi({name:"CubemapFromEquirect",uniforms:ks(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});r.uniforms.tEquirect.value=e;const o=new Re(s,r),a=e.minFilter;return e.minFilter===1008&&(e.minFilter=1006),new mg(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}}class Kc{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new he(t),this.near=e,this.far=n}clone(){return new Kc(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class _g extends He{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new On,this.environmentIntensity=1,this.environmentRotation=new On,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class $c{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=35044,this.updateRanges=[],this.version=0,this.uuid=Kn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Kn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Kn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const pn=new N;class Xn{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)pn.fromBufferAttribute(this,e),pn.applyMatrix4(t),this.setXYZ(e,pn.x,pn.y,pn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)pn.fromBufferAttribute(this,e),pn.applyNormalMatrix(t),this.setXYZ(e,pn.x,pn.y,pn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)pn.fromBufferAttribute(this,e),pn.transformDirection(t),this.setXYZ(e,pn.x,pn.y,pn.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=jn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ue(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=Ue(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Ue(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Ue(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Ue(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=jn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=jn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=jn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=jn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ue(e,this.array),n=Ue(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ue(e,this.array),n=Ue(n,this.array),s=Ue(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ue(e,this.array),n=Ue(n,this.array),s=Ue(s,this.array),r=Ue(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new De(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Xn(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Pf extends Un{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new he(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let xs;const tr=new N,vs=new N,ys=new N,Ms=new oe,er=new oe,Lf=new _e,$r=new N,nr=new N,Yr=new N,Yl=new oe,Ra=new oe,Zl=new oe;class bg extends He{constructor(t=new Pf){if(super(),this.isSprite=!0,this.type="Sprite",xs===void 0){xs=new Xe;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new $c(e,5);xs.setIndex([0,1,2,0,2,3]),xs.setAttribute("position",new Xn(n,3,0,!1)),xs.setAttribute("uv",new Xn(n,2,3,!1))}this.geometry=xs,this.material=t,this.center=new oe(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),vs.setFromMatrixScale(this.matrixWorld),Lf.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),ys.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&vs.multiplyScalar(-ys.z);const n=this.material.rotation;let s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));const o=this.center;Zr($r.set(-.5,-.5,0),ys,o,vs,s,r),Zr(nr.set(.5,-.5,0),ys,o,vs,s,r),Zr(Yr.set(.5,.5,0),ys,o,vs,s,r),Yl.set(0,0),Ra.set(1,0),Zl.set(1,1);let a=t.ray.intersectTriangle($r,nr,Yr,!1,tr);if(a===null&&(Zr(nr.set(-.5,.5,0),ys,o,vs,s,r),Ra.set(0,1),a=t.ray.intersectTriangle($r,Yr,nr,!1,tr),a===null))return;const c=t.ray.origin.distanceTo(tr);c<t.near||c>t.far||e.push({distance:c,point:tr.clone(),uv:Nn.getInterpolation(tr,$r,nr,Yr,Yl,Ra,Zl,new oe),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Zr(i,t,e,n,s,r){Ms.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(er.x=r*Ms.x-s*Ms.y,er.y=s*Ms.x+r*Ms.y):er.copy(Ms),i.copy(t),i.x+=er.x,i.y+=er.y,i.applyMatrix4(Lf)}const Jl=new N,Ql=new Se,tu=new Se,xg=new N,eu=new _e,Jr=new N,Ca=new kn,nu=new _e,Ia=new Yo;class vg extends Re{constructor(t,e){super(t,e),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Il,this.bindMatrix=new _e,this.bindMatrixInverse=new _e,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const t=this.geometry;this.boundingBox===null&&(this.boundingBox=new cn),this.boundingBox.makeEmpty();const e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,Jr),this.boundingBox.expandByPoint(Jr)}computeBoundingSphere(){const t=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new kn),this.boundingSphere.makeEmpty();const e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,Jr),this.boundingSphere.expandByPoint(Jr)}copy(t,e){return super.copy(t,e),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}raycast(t,e){const n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ca.copy(this.boundingSphere),Ca.applyMatrix4(s),t.ray.intersectsSphere(Ca)!==!1&&(nu.copy(s).invert(),Ia.copy(t.ray).applyMatrix4(nu),!(this.boundingBox!==null&&Ia.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(t,e,Ia)))}getVertexPosition(t,e){return super.getVertexPosition(t,e),this.applyBoneTransform(t,e),e}bind(t,e){this.skeleton=t,e===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const t=new Se,e=this.geometry.attributes.skinWeight;for(let n=0,s=e.count;n<s;n++){t.fromBufferAttribute(e,n);const r=1/t.manhattanLength();r!==1/0?t.multiplyScalar(r):t.set(1,0,0,0),e.setXYZW(n,t.x,t.y,t.z,t.w)}}updateMatrixWorld(t){super.updateMatrixWorld(t),this.bindMode===Il?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Cm?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(t,e){const n=this.skeleton,s=this.geometry;Ql.fromBufferAttribute(s.attributes.skinIndex,t),tu.fromBufferAttribute(s.attributes.skinWeight,t),Jl.copy(e).applyMatrix4(this.bindMatrix),e.set(0,0,0);for(let r=0;r<4;r++){const o=tu.getComponent(r);if(o!==0){const a=Ql.getComponent(r);eu.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),e.addScaledVector(xg.copy(Jl).applyMatrix4(eu),o)}}return e.applyMatrix4(this.bindMatrixInverse)}}class Df extends He{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Ff extends Ze{constructor(t=null,e=1,n=1,s,r,o,a,c,u=1003,h=1003,l,d){super(null,o,a,c,u,h,s,r,l,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const iu=new _e,yg=new _e;class Yc{constructor(t=[],e=[]){this.uuid=Kn(),this.bones=t.slice(0),this.boneInverses=e,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const t=this.bones,e=this.boneInverses;if(this.boneMatrices=new Float32Array(t.length*16),e.length===0)this.calculateInverses();else if(t.length!==e.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new _e)}}calculateInverses(){this.boneInverses.length=0;for(let t=0,e=this.bones.length;t<e;t++){const n=new _e;this.bones[t]&&n.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&n.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const t=this.bones,e=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,o=t.length;r<o;r++){const a=t[r]?t[r].matrixWorld:yg;iu.multiplyMatrices(a,e[r]),iu.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new Yc(this.bones,this.boneInverses)}computeBoneTexture(){let t=Math.sqrt(this.bones.length*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);const e=new Float32Array(t*t*4);e.set(this.boneMatrices);const n=new Ff(e,t,t,1023,1015);return n.needsUpdate=!0,this.boneMatrices=e,this.boneTexture=n,this}getBoneByName(t){for(let e=0,n=this.bones.length;e<n;e++){const s=this.bones[e];if(s.name===t)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(t,e){this.uuid=t.uuid;for(let n=0,s=t.bones.length;n<s;n++){const r=t.bones[n];let o=e[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new Df),this.bones.push(o),this.boneInverses.push(new _e().fromArray(t.boneInverses[n]))}return this.init(),this}toJSON(){const t={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;const e=this.bones,n=this.boneInverses;for(let s=0,r=e.length;s<r;s++){const o=e[s];t.bones.push(o.uuid);const a=n[s];t.boneInverses.push(a.toArray())}return t}}class Mc extends De{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Ss=new _e,su=new _e,Qr=[],ru=new cn,Mg=new _e,ir=new Re,sr=new kn;class Sg extends Re{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Mc(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Mg)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new cn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ss),ru.copy(t.boundingBox).applyMatrix4(Ss),this.boundingBox.union(ru)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new kn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ss),sr.copy(t.boundingSphere).applyMatrix4(Ss),this.boundingSphere.union(sr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(ir.geometry=this.geometry,ir.material=this.material,ir.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),sr.copy(this.boundingSphere),sr.applyMatrix4(n),t.ray.intersectsSphere(sr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Ss),su.multiplyMatrices(n,Ss),ir.matrixWorld=su,ir.raycast(t,Qr);for(let o=0,a=Qr.length;o<a;o++){const c=Qr[o];c.instanceId=r,c.object=this,e.push(c)}Qr.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Mc(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Ff(new Float32Array(s*this.count),s,this.count,1028,1015));const r=this.morphTexture.source.data.data;let o=0;for(let u=0;u<n.length;u++)o+=n[u];const a=this.geometry.morphTargetsRelative?1:1-o,c=s*t;r[c]=a,r.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}const Pa=new N,Ag=new N,Eg=new ve;class Xi{constructor(t=new N(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=Pa.subVectors(n,e).cross(Ag.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Pa),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Eg.getNormalMatrix(t),s=this.coplanarPoint(Pa).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Bi=new kn,to=new N;class Zc{constructor(t=new Xi,e=new Xi,n=new Xi,s=new Xi,r=new Xi,o=new Xi){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=2e3){const n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],c=s[3],u=s[4],h=s[5],l=s[6],d=s[7],f=s[8],p=s[9],_=s[10],g=s[11],m=s[12],v=s[13],y=s[14],x=s[15];if(n[0].setComponents(c-r,d-u,g-f,x-m).normalize(),n[1].setComponents(c+r,d+u,g+f,x+m).normalize(),n[2].setComponents(c+o,d+h,g+p,x+v).normalize(),n[3].setComponents(c-o,d-h,g-p,x-v).normalize(),n[4].setComponents(c-a,d-l,g-_,x-y).normalize(),e===2e3)n[5].setComponents(c+a,d+l,g+_,x+y).normalize();else if(e===2001)n[5].setComponents(a,l,_,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Bi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Bi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Bi)}intersectsSprite(t){return Bi.center.set(0,0,0),Bi.radius=.7071067811865476,Bi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Bi)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(to.x=s.normal.x>0?t.max.x:t.min.x,to.y=s.normal.y>0?t.max.y:t.min.y,to.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(to)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Nf extends Un{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new he(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const ko=new N,Bo=new N,ou=new _e,rr=new Yo,eo=new kn,La=new N,au=new N;class Jc extends He{constructor(t=new Xe,e=new Nf){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)ko.fromBufferAttribute(e,s-1),Bo.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=ko.distanceTo(Bo);t.setAttribute("lineDistance",new We(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),eo.copy(n.boundingSphere),eo.applyMatrix4(s),eo.radius+=r,t.ray.intersectsSphere(eo)===!1)return;ou.copy(s).invert(),rr.copy(t.ray).applyMatrix4(ou);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,u=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){const f=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let _=f,g=p-1;_<g;_+=u){const m=h.getX(_),v=h.getX(_+1),y=no(this,t,rr,c,m,v);y&&e.push(y)}if(this.isLineLoop){const _=h.getX(p-1),g=h.getX(f),m=no(this,t,rr,c,_,g);m&&e.push(m)}}else{const f=Math.max(0,o.start),p=Math.min(d.count,o.start+o.count);for(let _=f,g=p-1;_<g;_+=u){const m=no(this,t,rr,c,_,_+1);m&&e.push(m)}if(this.isLineLoop){const _=no(this,t,rr,c,p-1,f);_&&e.push(_)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function no(i,t,e,n,s,r){const o=i.geometry.attributes.position;if(ko.fromBufferAttribute(o,s),Bo.fromBufferAttribute(o,r),e.distanceSqToSegment(ko,Bo,La,au)>n)return;La.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(La);if(!(c<t.near||c>t.far))return{distance:c,point:au.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}const cu=new N,lu=new N;class Tg extends Jc{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)cu.fromBufferAttribute(e,s),lu.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+cu.distanceTo(lu);t.setAttribute("lineDistance",new We(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class wg extends Jc{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}}class Qc extends Un{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new he(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const uu=new _e,Sc=new Yo,io=new kn,so=new N;class Uf extends He{constructor(t=new Xe,e=new Qc){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),io.copy(n.boundingSphere),io.applyMatrix4(s),io.radius+=r,t.ray.intersectsSphere(io)===!1)return;uu.copy(s).invert(),Sc.copy(t.ray).applyMatrix4(uu);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,u=n.index,l=n.attributes.position;if(u!==null){const d=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let p=d,_=f;p<_;p++){const g=u.getX(p);so.fromBufferAttribute(l,g),hu(so,g,c,s,t,e,this)}}else{const d=Math.max(0,o.start),f=Math.min(l.count,o.start+o.count);for(let p=d,_=f;p<_;p++)so.fromBufferAttribute(l,p),hu(so,p,c,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function hu(i,t,e,n,s,r,o){const a=Sc.distanceSqToPoint(i);if(a<e){const c=new N;Sc.closestPointToPoint(i,c),c.applyMatrix4(n);const u=s.ray.origin.distanceTo(c);if(u<s.near||u>s.far)return;r.push({distance:u,distanceToRay:Math.sqrt(a),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class fn extends He{constructor(){super(),this.isGroup=!0,this.type="Group"}}class In extends Ze{constructor(t,e,n,s,r,o,a,c,u){super(t,e,n,s,r,o,a,c,u),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Of extends Ze{constructor(t,e,n,s,r,o,a,c,u,h=1026){if(h!==1026&&h!==1027)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===1026&&(n=1014),n===void 0&&h===1027&&(n=1020),super(null,s,r,o,a,c,h,n,u),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:1003,this.minFilter=c!==void 0?c:1003,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class tl extends Xe{constructor(t=[new oe(0,-.5),new oe(.5,0),new oe(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=Ee(s,0,Math.PI*2);const r=[],o=[],a=[],c=[],u=[],h=1/e,l=new N,d=new oe,f=new N,p=new N,_=new N;let g=0,m=0;for(let v=0;v<=t.length-1;v++)switch(v){case 0:g=t[v+1].x-t[v].x,m=t[v+1].y-t[v].y,f.x=m*1,f.y=-g,f.z=m*0,_.copy(f),f.normalize(),c.push(f.x,f.y,f.z);break;case t.length-1:c.push(_.x,_.y,_.z);break;default:g=t[v+1].x-t[v].x,m=t[v+1].y-t[v].y,f.x=m*1,f.y=-g,f.z=m*0,p.copy(f),f.x+=_.x,f.y+=_.y,f.z+=_.z,f.normalize(),c.push(f.x,f.y,f.z),_.copy(p)}for(let v=0;v<=e;v++){const y=n+v*h*s,x=Math.sin(y),w=Math.cos(y);for(let M=0;M<=t.length-1;M++){l.x=t[M].x*x,l.y=t[M].y,l.z=t[M].x*w,o.push(l.x,l.y,l.z),d.x=v/e,d.y=M/(t.length-1),a.push(d.x,d.y);const T=c[3*M+0]*x,I=c[3*M+1],S=c[3*M+0]*w;u.push(T,I,S)}}for(let v=0;v<e;v++)for(let y=0;y<t.length-1;y++){const x=y+v*t.length,w=x,M=x+t.length,T=x+t.length+1,I=x+1;r.push(w,M,I),r.push(T,I,M)}this.setIndex(r),this.setAttribute("position",new We(o,3)),this.setAttribute("uv",new We(a,2)),this.setAttribute("normal",new We(u,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new tl(t.points,t.segments,t.phiStart,t.phiLength)}}class el extends Xe{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const r=[],o=[],a=[],c=[],u=new N,h=new oe;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let l=0,d=3;l<=e;l++,d+=3){const f=n+l/e*s;u.x=t*Math.cos(f),u.y=t*Math.sin(f),o.push(u.x,u.y,u.z),a.push(0,0,1),h.x=(o[d]/t+1)/2,h.y=(o[d+1]/t+1)/2,c.push(h.x,h.y)}for(let l=1;l<=e;l++)r.push(l,l+1,0);this.setIndex(r),this.setAttribute("position",new We(o,3)),this.setAttribute("normal",new We(a,3)),this.setAttribute("uv",new We(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new el(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Sr extends Xe{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};const u=this;s=Math.floor(s),r=Math.floor(r);const h=[],l=[],d=[],f=[];let p=0;const _=[],g=n/2;let m=0;v(),o===!1&&(t>0&&y(!0),e>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new We(l,3)),this.setAttribute("normal",new We(d,3)),this.setAttribute("uv",new We(f,2));function v(){const x=new N,w=new N;let M=0;const T=(e-t)/n;for(let I=0;I<=r;I++){const S=[],A=I/r,C=A*(e-t)+t;for(let U=0;U<=s;U++){const P=U/s,O=P*c+a,Z=Math.sin(O),H=Math.cos(O);w.x=C*Z,w.y=-A*n+g,w.z=C*H,l.push(w.x,w.y,w.z),x.set(Z,T,H).normalize(),d.push(x.x,x.y,x.z),f.push(P,1-A),S.push(p++)}_.push(S)}for(let I=0;I<s;I++)for(let S=0;S<r;S++){const A=_[S][I],C=_[S+1][I],U=_[S+1][I+1],P=_[S][I+1];(t>0||S!==0)&&(h.push(A,C,P),M+=3),(e>0||S!==r-1)&&(h.push(C,U,P),M+=3)}u.addGroup(m,M,0),m+=M}function y(x){const w=p,M=new oe,T=new N;let I=0;const S=x===!0?t:e,A=x===!0?1:-1;for(let U=1;U<=s;U++)l.push(0,g*A,0),d.push(0,A,0),f.push(.5,.5),p++;const C=p;for(let U=0;U<=s;U++){const O=U/s*c+a,Z=Math.cos(O),H=Math.sin(O);T.x=S*H,T.y=g*A,T.z=S*Z,l.push(T.x,T.y,T.z),d.push(0,A,0),M.x=Z*.5+.5,M.y=H*.5*A+.5,f.push(M.x,M.y),p++}for(let U=0;U<s;U++){const P=w+U,O=C+U;x===!0?h.push(O,O+1,P):h.push(O+1,O,P),I+=3}u.addGroup(m,I,x===!0?1:2),m+=I}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Sr(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class $n extends Xe{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(s),u=a+1,h=c+1,l=t/a,d=e/c,f=[],p=[],_=[],g=[];for(let m=0;m<h;m++){const v=m*d-o;for(let y=0;y<u;y++){const x=y*l-r;p.push(x,-v,0),_.push(0,0,1),g.push(y/a),g.push(1-m/c)}}for(let m=0;m<c;m++)for(let v=0;v<a;v++){const y=v+u*m,x=v+u*(m+1),w=v+1+u*(m+1),M=v+1+u*m;f.push(y,x,M),f.push(x,w,M)}this.setIndex(f),this.setAttribute("position",new We(p,3)),this.setAttribute("normal",new We(_,3)),this.setAttribute("uv",new We(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new $n(t.width,t.height,t.widthSegments,t.heightSegments)}}class Zo extends Xe{constructor(t=.5,e=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);const a=[],c=[],u=[],h=[];let l=t;const d=(e-t)/s,f=new N,p=new oe;for(let _=0;_<=s;_++){for(let g=0;g<=n;g++){const m=r+g/n*o;f.x=l*Math.cos(m),f.y=l*Math.sin(m),c.push(f.x,f.y,f.z),u.push(0,0,1),p.x=(f.x/e+1)/2,p.y=(f.y/e+1)/2,h.push(p.x,p.y)}l+=d}for(let _=0;_<s;_++){const g=_*(n+1);for(let m=0;m<n;m++){const v=m+g,y=v,x=v+n+1,w=v+n+2,M=v+1;a.push(y,x,M),a.push(x,w,M)}}this.setIndex(a),this.setAttribute("position",new We(c,3)),this.setAttribute("normal",new We(u,3)),this.setAttribute("uv",new We(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Zo(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class Rg extends Xe{constructor(t=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:t},t!==null){const e=[],n=new Set,s=new N,r=new N;if(t.index!==null){const o=t.attributes.position,a=t.index;let c=t.groups;c.length===0&&(c=[{start:0,count:a.count,materialIndex:0}]);for(let u=0,h=c.length;u<h;++u){const l=c[u],d=l.start,f=l.count;for(let p=d,_=d+f;p<_;p+=3)for(let g=0;g<3;g++){const m=a.getX(p+g),v=a.getX(p+(g+1)%3);s.fromBufferAttribute(o,m),r.fromBufferAttribute(o,v),du(s,r,n)===!0&&(e.push(s.x,s.y,s.z),e.push(r.x,r.y,r.z))}}}else{const o=t.attributes.position;for(let a=0,c=o.count/3;a<c;a++)for(let u=0;u<3;u++){const h=3*a+u,l=3*a+(u+1)%3;s.fromBufferAttribute(o,h),r.fromBufferAttribute(o,l),du(s,r,n)===!0&&(e.push(s.x,s.y,s.z),e.push(r.x,r.y,r.z))}}this.setAttribute("position",new We(e,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}function du(i,t,e){const n=`${i.x},${i.y},${i.z}-${t.x},${t.y},${t.z}`,s=`${t.x},${t.y},${t.z}-${i.x},${i.y},${i.z}`;return e.has(n)===!0||e.has(s)===!0?!1:(e.add(n),e.add(s),!0)}class Ni extends Un{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new he(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new he(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new oe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new On,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class ni extends Ni{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new oe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ee(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new he(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new he(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new he(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class Ar extends Un{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new he(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new he(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new oe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new On,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Cg extends Un{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Ig extends Un{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}function Zi(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function kf(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Bf(i){function t(s,r){return i[s]-i[r]}const e=i.length,n=new Array(e);for(let s=0;s!==e;++s)n[s]=s;return n.sort(t),n}function Ac(i,t,e){const n=i.length,s=new i.constructor(n);for(let r=0,o=0;o!==n;++r){const a=e[r]*t;for(let c=0;c!==t;++c)s[o++]=i[a+c]}return s}function nl(i,t,e,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(t.push(r.time),e.push.apply(e,o)),r=i[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(t.push(r.time),o.toArray(e,e.length)),r=i[s++];while(r!==void 0);else do o=r[n],o!==void 0&&(t.push(r.time),e.push(o)),r=i[s++];while(r!==void 0)}function Pg(i,t,e,n,s=30){const r=i.clone();r.name=t;const o=[];for(let c=0;c<r.tracks.length;++c){const u=r.tracks[c],h=u.getValueSize(),l=[],d=[];for(let f=0;f<u.times.length;++f){const p=u.times[f]*s;if(!(p<e||p>=n)){l.push(u.times[f]);for(let _=0;_<h;++_)d.push(u.values[f*h+_])}}l.length!==0&&(u.times=Zi(l,u.times.constructor),u.values=Zi(d,u.values.constructor),o.push(u))}r.tracks=o;let a=1/0;for(let c=0;c<r.tracks.length;++c)a>r.tracks[c].times[0]&&(a=r.tracks[c].times[0]);for(let c=0;c<r.tracks.length;++c)r.tracks[c].shift(-1*a);return r.resetDuration(),r}function Lg(i,t=0,e=i,n=30){n<=0&&(n=30);const s=e.tracks.length,r=t/n;for(let o=0;o<s;++o){const a=e.tracks[o],c=a.ValueTypeName;if(c==="bool"||c==="string")continue;const u=i.tracks.find(function(m){return m.name===a.name&&m.ValueTypeName===c});if(u===void 0)continue;let h=0;const l=a.getValueSize();a.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(h=l/3);let d=0;const f=u.getValueSize();u.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(d=f/3);const p=a.times.length-1;let _;if(r<=a.times[0]){const m=h,v=l-h;_=a.values.slice(m,v)}else if(r>=a.times[p]){const m=p*l+h,v=m+l-h;_=a.values.slice(m,v)}else{const m=a.createInterpolant(),v=h,y=l-h;m.evaluate(r),_=m.resultBuffer.slice(v,y)}c==="quaternion"&&new an().fromArray(_).normalize().conjugate().toArray(_);const g=u.times.length;for(let m=0;m<g;++m){const v=m*f+d;if(c==="quaternion")an.multiplyQuaternionsFlat(u.values,v,_,0,u.values,v);else{const y=f-d*2;for(let x=0;x<y;++x)u.values[v+x]-=_[x]}}}return i.blendMode=2501,i}const Dg={convertArray:Zi,isTypedArray:kf,getKeyframeOrder:Bf,sortedArray:Ac,flattenJSON:nl,subclip:Pg,makeClipAdditive:Lg};class Cr{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){const e=this.parameterPositions;let n=this._cachedIndex,s=e[n],r=e[n-1];t:{e:{let o;n:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break e}o=e.length;break n}if(!(t>=r)){const a=e[1];t<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=e[--n-1],t>=r)break e}o=n,n=0;break n}break t}for(;n<o;){const a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){const e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Fg extends Cr{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:2400,endingEnd:2400}}intervalChanged_(t,e,n){const s=this.parameterPositions;let r=t-2,o=t+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case 2401:r=t,a=2*e-n;break;case 2402:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case 2401:o=t,c=2*n-e;break;case 2402:o=1,c=n+s[1]-s[0];break;default:o=t-1,c=e}const u=(n-e)*.5,h=this.valueSize;this._weightPrev=u/(e-a),this._weightNext=u/(c-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,u=c-a,h=this._offsetPrev,l=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-e)/(s-e),_=p*p,g=_*p,m=-d*g+2*d*_-d*p,v=(1+d)*g+(-1.5-2*d)*_+(-.5+d)*p+1,y=(-1-f)*g+(1.5+f)*_+.5*p,x=f*g-f*_;for(let w=0;w!==a;++w)r[w]=m*o[h+w]+v*o[u+w]+y*o[c+w]+x*o[l+w];return r}}class Gf extends Cr{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,u=c-a,h=(n-e)/(s-e),l=1-h;for(let d=0;d!==a;++d)r[d]=o[u+d]*l+o[c+d]*h;return r}}class Ng extends Cr{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}}class ii{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Zi(e,this.TimeBufferType),this.values=Zi(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){const e=t.constructor;let n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Zi(t.times,Array),values:Zi(t.values,Array)};const s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Ng(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Gf(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Fg(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case 2300:e=this.InterpolantFactoryMethodDiscrete;break;case 2301:e=this.InterpolantFactoryMethodLinear;break;case 2302:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return 2300;case this.InterpolantFactoryMethodLinear:return 2301;case this.InterpolantFactoryMethodSmooth:return 2302}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){const e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){const e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){const n=this.times,s=n.length;let r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0;const e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);const n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){const c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),t=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),t=!1;break}o=c}if(s!==void 0&&kf(s))for(let a=0,c=s.length;a!==c;++a){const u=s[a];if(isNaN(u)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,u),t=!1;break}}return t}optimize(){const t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===2302,r=t.length-1;let o=1;for(let a=1;a<r;++a){let c=!1;const u=t[a],h=t[a+1];if(u!==h&&(a!==1||u!==t[0]))if(s)c=!0;else{const l=a*n,d=l-n,f=l+n;for(let p=0;p!==n;++p){const _=e[l+p];if(_!==e[d+p]||_!==e[f+p]){c=!0;break}}}if(c){if(a!==o){t[o]=t[a];const l=a*n,d=o*n;for(let f=0;f!==n;++f)e[d+f]=e[l+f]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,c=o*n,u=0;u!==n;++u)e[c+u]=e[a+u];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){const t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}}ii.prototype.TimeBufferType=Float32Array;ii.prototype.ValueBufferType=Float32Array;ii.prototype.DefaultInterpolation=2301;class Hs extends ii{constructor(t,e,n){super(t,e,n)}}Hs.prototype.ValueTypeName="bool";Hs.prototype.ValueBufferType=Array;Hs.prototype.DefaultInterpolation=2300;Hs.prototype.InterpolantFactoryMethodLinear=void 0;Hs.prototype.InterpolantFactoryMethodSmooth=void 0;class zf extends ii{}zf.prototype.ValueTypeName="color";class Bs extends ii{}Bs.prototype.ValueTypeName="number";class Ug extends Cr{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-e)/(s-e);let u=t*a;for(let h=u+a;u!==h;u+=4)an.slerpFlat(r,0,o,u-a,o,u,c);return r}}class Gs extends ii{InterpolantFactoryMethodLinear(t){return new Ug(this.times,this.values,this.getValueSize(),t)}}Gs.prototype.ValueTypeName="quaternion";Gs.prototype.InterpolantFactoryMethodSmooth=void 0;class Vs extends ii{constructor(t,e,n){super(t,e,n)}}Vs.prototype.ValueTypeName="string";Vs.prototype.ValueBufferType=Array;Vs.prototype.DefaultInterpolation=2300;Vs.prototype.InterpolantFactoryMethodLinear=void 0;Vs.prototype.InterpolantFactoryMethodSmooth=void 0;class zs extends ii{}zs.prototype.ValueTypeName="vector";class Ec{constructor(t="",e=-1,n=[],s=2500){this.name=t,this.tracks=n,this.duration=e,this.blendMode=s,this.uuid=Kn(),this.duration<0&&this.resetDuration()}static parse(t){const e=[],n=t.tracks,s=1/(t.fps||1);for(let o=0,a=n.length;o!==a;++o)e.push(kg(n[o]).scale(s));const r=new this(t.name,t.duration,e,t.blendMode);return r.uuid=t.uuid,r}static toJSON(t){const e=[],n=t.tracks,s={name:t.name,duration:t.duration,tracks:e,uuid:t.uuid,blendMode:t.blendMode};for(let r=0,o=n.length;r!==o;++r)e.push(ii.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(t,e,n,s){const r=e.length,o=[];for(let a=0;a<r;a++){let c=[],u=[];c.push((a+r-1)%r,a,(a+1)%r),u.push(0,1,0);const h=Bf(c);c=Ac(c,1,h),u=Ac(u,1,h),!s&&c[0]===0&&(c.push(r),u.push(u[0])),o.push(new Bs(".morphTargetInfluences["+e[a].name+"]",c,u).scale(1/n))}return new this(t,-1,o)}static findByName(t,e){let n=t;if(!Array.isArray(t)){const s=t;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===e)return n[s];return null}static CreateClipsFromMorphTargetSequences(t,e,n){const s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,c=t.length;a<c;a++){const u=t[a],h=u.name.match(r);if(h&&h.length>1){const l=h[1];let d=s[l];d||(s[l]=d=[]),d.push(u)}}const o=[];for(const a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],e,n));return o}static parseAnimation(t,e){if(!t)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(l,d,f,p,_){if(f.length!==0){const g=[],m=[];nl(f,g,m,p),g.length!==0&&_.push(new l(d,g,m))}},s=[],r=t.name||"default",o=t.fps||30,a=t.blendMode;let c=t.length||-1;const u=t.hierarchy||[];for(let l=0;l<u.length;l++){const d=u[l].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let p;for(p=0;p<d.length;p++)if(d[p].morphTargets)for(let _=0;_<d[p].morphTargets.length;_++)f[d[p].morphTargets[_]]=-1;for(const _ in f){const g=[],m=[];for(let v=0;v!==d[p].morphTargets.length;++v){const y=d[p];g.push(y.time),m.push(y.morphTarget===_?1:0)}s.push(new Bs(".morphTargetInfluence["+_+"]",g,m))}c=f.length*o}else{const f=".bones["+e[l].name+"]";n(zs,f+".position",d,"pos",s),n(Gs,f+".quaternion",d,"rot",s),n(zs,f+".scale",d,"scl",s)}}return s.length===0?null:new this(r,c,s,a)}resetDuration(){const t=this.tracks;let e=0;for(let n=0,s=t.length;n!==s;++n){const r=this.tracks[n];e=Math.max(e,r.times[r.times.length-1])}return this.duration=e,this}trim(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].trim(0,this.duration);return this}validate(){let t=!0;for(let e=0;e<this.tracks.length;e++)t=t&&this.tracks[e].validate();return t}optimize(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].optimize();return this}clone(){const t=[];for(let e=0;e<this.tracks.length;e++)t.push(this.tracks[e].clone());return new this.constructor(this.name,this.duration,t,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function Og(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Bs;case"vector":case"vector2":case"vector3":case"vector4":return zs;case"color":return zf;case"quaternion":return Gs;case"bool":case"boolean":return Hs;case"string":return Vs}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function kg(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const t=Og(i.type);if(i.times===void 0){const e=[],n=[];nl(i.keys,e,n,"value"),i.times=e,i.values=n}return t.parse!==void 0?t.parse(i):new t(i.name,i.times,i.values,i.interpolation)}const Pi={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(this.files[i]=t)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class Bg{constructor(t,e,n){const s=this;let r=!1,o=0,a=0,c;const u=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,l){return u.push(h,l),this},this.removeHandler=function(h){const l=u.indexOf(h);return l!==-1&&u.splice(l,2),this},this.getHandler=function(h){for(let l=0,d=u.length;l<d;l+=2){const f=u[l],p=u[l+1];if(f.global&&(f.lastIndex=0),f.test(h))return p}return null}}}const Gg=new Bg;class Ws{constructor(t){this.manager=t!==void 0?t:Gg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}Ws.DEFAULT_MATERIAL_NAME="__DEFAULT";const hi={};class zg extends Error{constructor(t,e){super(t),this.response=e}}class Hf extends Ws{constructor(t){super(t)}load(t,e,n,s){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=Pi.get(t);if(r!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(r),this.manager.itemEnd(t)},0),r;if(hi[t]!==void 0){hi[t].push({onLoad:e,onProgress:n,onError:s});return}hi[t]=[],hi[t].push({onLoad:e,onProgress:n,onError:s});const o=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,c=this.responseType;fetch(o).then(u=>{if(u.status===200||u.status===0){if(u.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||u.body===void 0||u.body.getReader===void 0)return u;const h=hi[t],l=u.body.getReader(),d=u.headers.get("X-File-Size")||u.headers.get("Content-Length"),f=d?parseInt(d):0,p=f!==0;let _=0;const g=new ReadableStream({start(m){v();function v(){l.read().then(({done:y,value:x})=>{if(y)m.close();else{_+=x.byteLength;const w=new ProgressEvent("progress",{lengthComputable:p,loaded:_,total:f});for(let M=0,T=h.length;M<T;M++){const I=h[M];I.onProgress&&I.onProgress(w)}m.enqueue(x),v()}},y=>{m.error(y)})}}});return new Response(g)}else throw new zg(`fetch for "${u.url}" responded with ${u.status}: ${u.statusText}`,u)}).then(u=>{switch(c){case"arraybuffer":return u.arrayBuffer();case"blob":return u.blob();case"document":return u.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return u.json();default:if(a===void 0)return u.text();{const l=/charset="?([^;"\s]*)"?/i.exec(a),d=l&&l[1]?l[1].toLowerCase():void 0,f=new TextDecoder(d);return u.arrayBuffer().then(p=>f.decode(p))}}}).then(u=>{Pi.add(t,u);const h=hi[t];delete hi[t];for(let l=0,d=h.length;l<d;l++){const f=h[l];f.onLoad&&f.onLoad(u)}}).catch(u=>{const h=hi[t];if(h===void 0)throw this.manager.itemError(t),u;delete hi[t];for(let l=0,d=h.length;l<d;l++){const f=h[l];f.onError&&f.onError(u)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}}class Hg extends Ws{constructor(t){super(t)}load(t,e,n,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,o=Pi.get(t);if(o!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0),o;const a=Mr("img");function c(){h(),Pi.add(t,this),e&&e(this),r.manager.itemEnd(t)}function u(l){h(),s&&s(l),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){a.removeEventListener("load",c,!1),a.removeEventListener("error",u,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",u,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(t),a.src=t,a}}class Vf extends Ws{constructor(t){super(t)}load(t,e,n,s){const r=new Ze,o=new Hg(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){r.image=a,r.needsUpdate=!0,e!==void 0&&e(r)},n,s),r}}class Ir extends He{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new he(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class Vg extends Ir{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(He.DEFAULT_UP),this.updateMatrix(),this.groundColor=new he(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Da=new _e,fu=new N,pu=new N;class il{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new oe(512,512),this.map=null,this.mapPass=null,this.matrix=new _e,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Zc,this._frameExtents=new oe(1,1),this._viewportCount=1,this._viewports=[new Se(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;fu.setFromMatrixPosition(t.matrixWorld),e.position.copy(fu),pu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(pu),e.updateMatrixWorld(),Da.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Da),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Da)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Wg extends il{constructor(){super(new _n(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){const e=this.camera,n=Os*2*t.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=t.distance||e.far;(n!==e.fov||s!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=s,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class jg extends Ir{constructor(t,e,n=0,s=Math.PI/3,r=0,o=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(He.DEFAULT_UP),this.updateMatrix(),this.target=new He,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Wg}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}const mu=new _e,or=new N,Fa=new N;class Xg extends il{constructor(){super(new _n(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new oe(4,2),this._viewportCount=6,this._viewports=[new Se(2,1,1,1),new Se(0,1,1,1),new Se(3,1,1,1),new Se(1,1,1,1),new Se(3,0,1,1),new Se(1,0,1,1)],this._cubeDirections=[new N(1,0,0),new N(-1,0,0),new N(0,0,1),new N(0,0,-1),new N(0,1,0),new N(0,-1,0)],this._cubeUps=[new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,0,1),new N(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),or.setFromMatrixPosition(t.matrixWorld),n.position.copy(or),Fa.copy(n.position),Fa.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Fa),n.updateMatrixWorld(),s.makeTranslation(-or.x,-or.y,-or.z),mu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(mu)}}class qg extends Ir{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Xg}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class sl extends Cf{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=u*this.view.offsetX,o=r+u*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class Kg extends il{constructor(){super(new sl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class rl extends Ir{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(He.DEFAULT_UP),this.updateMatrix(),this.target=new He,this.shadow=new Kg}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class $g extends Ir{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class xr{static decodeText(t){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(t);let e="";for(let n=0,s=t.length;n<s;n++)e+=String.fromCharCode(t[n]);try{return decodeURIComponent(escape(e))}catch{return e}}static extractUrlBase(t){const e=t.lastIndexOf("/");return e===-1?"./":t.slice(0,e+1)}static resolveURL(t,e){return typeof t!="string"||t===""?"":(/^https?:\/\//i.test(e)&&/^\//.test(t)&&(e=e.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(t)||/^data:.*,.*$/i.test(t)||/^blob:.*$/i.test(t)?t:e+t)}}class Yg extends Xe{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){const t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}}class Zg extends Ws{constructor(t){super(t),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(t){return this.options=t,this}load(t,e,n,s){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,o=Pi.get(t);if(o!==void 0){if(r.manager.itemStart(t),o.then){o.then(u=>{e&&e(u),r.manager.itemEnd(t)}).catch(u=>{s&&s(u)});return}return setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const c=fetch(t,a).then(function(u){return u.blob()}).then(function(u){return createImageBitmap(u,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(u){return Pi.add(t,u),e&&e(u),r.manager.itemEnd(t),u}).catch(function(u){s&&s(u),Pi.remove(t),r.manager.itemError(t),r.manager.itemEnd(t)});Pi.add(t,c),r.manager.itemStart(t)}}class Jg extends _n{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Qg{constructor(t,e,n){this.binding=t,this.valueSize=n;let s,r,o;switch(e){case"quaternion":s=this._slerp,r=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":s=this._select,r=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:s=this._lerp,r=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=s,this._mixBufferRegionAdditive=r,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(t,e){const n=this.buffer,s=this.valueSize,r=t*s+s;let o=this.cumulativeWeight;if(o===0){for(let a=0;a!==s;++a)n[r+a]=n[a];o=e}else{o+=e;const a=e/o;this._mixBufferRegion(n,r,0,a,s)}this.cumulativeWeight=o}accumulateAdditive(t){const e=this.buffer,n=this.valueSize,s=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(e,s,0,t,n),this.cumulativeWeightAdditive+=t}apply(t){const e=this.valueSize,n=this.buffer,s=t*e+e,r=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){const c=e*this._origIndex;this._mixBufferRegion(n,s,c,1-r,e)}o>0&&this._mixBufferRegionAdditive(n,s,this._addIndex*e,1,e);for(let c=e,u=e+e;c!==u;++c)if(n[c]!==n[c+e]){a.setValue(n,s);break}}saveOriginalState(){const t=this.binding,e=this.buffer,n=this.valueSize,s=n*this._origIndex;t.getValue(e,s);for(let r=n,o=s;r!==o;++r)e[r]=e[s+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const t=this.valueSize*3;this.binding.setValue(this.buffer,t)}_setAdditiveIdentityNumeric(){const t=this._addIndex*this.valueSize,e=t+this.valueSize;for(let n=t;n<e;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const t=this._origIndex*this.valueSize,e=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[e+n]=this.buffer[t+n]}_select(t,e,n,s,r){if(s>=.5)for(let o=0;o!==r;++o)t[e+o]=t[n+o]}_slerp(t,e,n,s){an.slerpFlat(t,e,t,e,t,n,s)}_slerpAdditive(t,e,n,s,r){const o=this._workIndex*r;an.multiplyQuaternionsFlat(t,o,t,e,t,n),an.slerpFlat(t,e,t,e,t,o,s)}_lerp(t,e,n,s,r){const o=1-s;for(let a=0;a!==r;++a){const c=e+a;t[c]=t[c]*o+t[n+a]*s}}_lerpAdditive(t,e,n,s,r){for(let o=0;o!==r;++o){const a=e+o;t[a]=t[a]+t[n+o]*s}}}const ol="\\[\\]\\.:\\/",t0=new RegExp("["+ol+"]","g"),al="[^"+ol+"]",e0="[^"+ol.replace("\\.","")+"]",n0=/((?:WC+[\/:])*)/.source.replace("WC",al),i0=/(WCOD+)?/.source.replace("WCOD",e0),s0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",al),r0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",al),o0=new RegExp("^"+n0+i0+s0+r0+"$"),a0=["material","materials","bones","map"];class c0{constructor(t,e,n){const s=n||Fe.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();const n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){const n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}}class Fe{constructor(t,e,n){this.path=e,this.parsedPath=n||Fe.parseTrackName(e),this.node=Fe.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new Fe.Composite(t,e,n):new Fe(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(t0,"")}static parseTrackName(t){const e=o0.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);const n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){const r=n.nodeName.substring(s+1);a0.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){const n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){const n=function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===e||a.uuid===e)return a;const c=n(a.children);if(c)return c}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node;const e=this.parsedPath,n=e.objectName,s=e.propertyName;let r=e.propertyIndex;if(t||(t=Fe.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let u=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===u){u=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(u!==void 0){if(t[u]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[u]}}const o=t[s];if(o===void 0){const u=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+u+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Fe.Composite=c0;Fe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Fe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Fe.prototype.GetterByBindingType=[Fe.prototype._getValue_direct,Fe.prototype._getValue_array,Fe.prototype._getValue_arrayElement,Fe.prototype._getValue_toArray];Fe.prototype.SetterByBindingTypeAndVersioning=[[Fe.prototype._setValue_direct,Fe.prototype._setValue_direct_setNeedsUpdate,Fe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Fe.prototype._setValue_array,Fe.prototype._setValue_array_setNeedsUpdate,Fe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Fe.prototype._setValue_arrayElement,Fe.prototype._setValue_arrayElement_setNeedsUpdate,Fe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Fe.prototype._setValue_fromArray,Fe.prototype._setValue_fromArray_setNeedsUpdate,Fe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class l0{constructor(t,e,n=null,s=e.blendMode){this._mixer=t,this._clip=e,this._localRoot=n,this.blendMode=s;const r=e.tracks,o=r.length,a=new Array(o),c={endingStart:2400,endingEnd:2400};for(let u=0;u!==o;++u){const h=r[u].createInterpolant(null);a[u]=h,h.settings=c}this._interpolantSettings=c,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=2201,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(t){return this._startTime=t,this}setLoop(t,e){return this.loop=t,this.repetitions=e,this}setEffectiveWeight(t){return this.weight=t,this._effectiveWeight=this.enabled?t:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(t){return this._scheduleFading(t,0,1)}fadeOut(t){return this._scheduleFading(t,1,0)}crossFadeFrom(t,e,n){if(t.fadeOut(e),this.fadeIn(e),n){const s=this._clip.duration,r=t._clip.duration,o=r/s,a=s/r;t.warp(1,o,e),this.warp(a,1,e)}return this}crossFadeTo(t,e,n){return t.crossFadeFrom(this,e,n)}stopFading(){const t=this._weightInterpolant;return t!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this}setEffectiveTimeScale(t){return this.timeScale=t,this._effectiveTimeScale=this.paused?0:t,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(t){return this.timeScale=this._clip.duration/t,this.stopWarping()}syncWith(t){return this.time=t.time,this.timeScale=t.timeScale,this.stopWarping()}halt(t){return this.warp(this._effectiveTimeScale,0,t)}warp(t,e,n){const s=this._mixer,r=s.time,o=this.timeScale;let a=this._timeScaleInterpolant;a===null&&(a=s._lendControlInterpolant(),this._timeScaleInterpolant=a);const c=a.parameterPositions,u=a.sampleValues;return c[0]=r,c[1]=r+n,u[0]=t/o,u[1]=e/o,this}stopWarping(){const t=this._timeScaleInterpolant;return t!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(t,e,n,s){if(!this.enabled){this._updateWeight(t);return}const r=this._startTime;if(r!==null){const c=(t-r)*n;c<0||n===0?e=0:(this._startTime=null,e=n*c)}e*=this._updateTimeScale(t);const o=this._updateTime(e),a=this._updateWeight(t);if(a>0){const c=this._interpolants,u=this._propertyBindings;switch(this.blendMode){case 2501:for(let h=0,l=c.length;h!==l;++h)c[h].evaluate(o),u[h].accumulateAdditive(a);break;case 2500:default:for(let h=0,l=c.length;h!==l;++h)c[h].evaluate(o),u[h].accumulate(s,a)}}}_updateWeight(t){let e=0;if(this.enabled){e=this.weight;const n=this._weightInterpolant;if(n!==null){const s=n.evaluate(t)[0];e*=s,t>n.parameterPositions[1]&&(this.stopFading(),s===0&&(this.enabled=!1))}}return this._effectiveWeight=e,e}_updateTimeScale(t){let e=0;if(!this.paused){e=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const s=n.evaluate(t)[0];e*=s,t>n.parameterPositions[1]&&(this.stopWarping(),e===0?this.paused=!0:this.timeScale=e)}}return this._effectiveTimeScale=e,e}_updateTime(t){const e=this._clip.duration,n=this.loop;let s=this.time+t,r=this._loopCount;const o=n===2202;if(t===0)return r===-1?s:o&&(r&1)===1?e-s:s;if(n===2200){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));t:{if(s>=e)s=e;else if(s<0)s=0;else{this.time=s;break t}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:t<0?-1:1})}}else{if(r===-1&&(t>=0?(r=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),s>=e||s<0){const a=Math.floor(s/e);s-=e*a,r+=Math.abs(a);const c=this.repetitions-r;if(c<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,s=t>0?e:0,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:t>0?1:-1});else{if(c===1){const u=t<0;this._setEndings(u,!u,o)}else this._setEndings(!1,!1,o);this._loopCount=r,this.time=s,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this.time=s;if(o&&(r&1)===1)return e-s}return s}_setEndings(t,e,n){const s=this._interpolantSettings;n?(s.endingStart=2401,s.endingEnd=2401):(t?s.endingStart=this.zeroSlopeAtStart?2401:2400:s.endingStart=2402,e?s.endingEnd=this.zeroSlopeAtEnd?2401:2400:s.endingEnd=2402)}_scheduleFading(t,e,n){const s=this._mixer,r=s.time;let o=this._weightInterpolant;o===null&&(o=s._lendControlInterpolant(),this._weightInterpolant=o);const a=o.parameterPositions,c=o.sampleValues;return a[0]=r,c[0]=e,a[1]=r+t,c[1]=n,this}}const u0=new Float32Array(1);class h0 extends ss{constructor(t){super(),this._root=t,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(t,e){const n=t._localRoot||this._root,s=t._clip.tracks,r=s.length,o=t._propertyBindings,a=t._interpolants,c=n.uuid,u=this._bindingsByRootAndName;let h=u[c];h===void 0&&(h={},u[c]=h);for(let l=0;l!==r;++l){const d=s[l],f=d.name;let p=h[f];if(p!==void 0)++p.referenceCount,o[l]=p;else{if(p=o[l],p!==void 0){p._cacheIndex===null&&(++p.referenceCount,this._addInactiveBinding(p,c,f));continue}const _=e&&e._propertyBindings[l].binding.parsedPath;p=new Qg(Fe.create(n,f,_),d.ValueTypeName,d.getValueSize()),++p.referenceCount,this._addInactiveBinding(p,c,f),o[l]=p}a[l].resultBuffer=p.buffer}}_activateAction(t){if(!this._isActiveAction(t)){if(t._cacheIndex===null){const n=(t._localRoot||this._root).uuid,s=t._clip.uuid,r=this._actionsByClip[s];this._bindAction(t,r&&r.knownActions[0]),this._addInactiveAction(t,s,n)}const e=t._propertyBindings;for(let n=0,s=e.length;n!==s;++n){const r=e[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(t)}}_deactivateAction(t){if(this._isActiveAction(t)){const e=t._propertyBindings;for(let n=0,s=e.length;n!==s;++n){const r=e[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(t)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const t=this;this.stats={actions:{get total(){return t._actions.length},get inUse(){return t._nActiveActions}},bindings:{get total(){return t._bindings.length},get inUse(){return t._nActiveBindings}},controlInterpolants:{get total(){return t._controlInterpolants.length},get inUse(){return t._nActiveControlInterpolants}}}}_isActiveAction(t){const e=t._cacheIndex;return e!==null&&e<this._nActiveActions}_addInactiveAction(t,e,n){const s=this._actions,r=this._actionsByClip;let o=r[e];if(o===void 0)o={knownActions:[t],actionByRoot:{}},t._byClipCacheIndex=0,r[e]=o;else{const a=o.knownActions;t._byClipCacheIndex=a.length,a.push(t)}t._cacheIndex=s.length,s.push(t),o.actionByRoot[n]=t}_removeInactiveAction(t){const e=this._actions,n=e[e.length-1],s=t._cacheIndex;n._cacheIndex=s,e[s]=n,e.pop(),t._cacheIndex=null;const r=t._clip.uuid,o=this._actionsByClip,a=o[r],c=a.knownActions,u=c[c.length-1],h=t._byClipCacheIndex;u._byClipCacheIndex=h,c[h]=u,c.pop(),t._byClipCacheIndex=null;const l=a.actionByRoot,d=(t._localRoot||this._root).uuid;delete l[d],c.length===0&&delete o[r],this._removeInactiveBindingsForAction(t)}_removeInactiveBindingsForAction(t){const e=t._propertyBindings;for(let n=0,s=e.length;n!==s;++n){const r=e[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(t){const e=this._actions,n=t._cacheIndex,s=this._nActiveActions++,r=e[s];t._cacheIndex=s,e[s]=t,r._cacheIndex=n,e[n]=r}_takeBackAction(t){const e=this._actions,n=t._cacheIndex,s=--this._nActiveActions,r=e[s];t._cacheIndex=s,e[s]=t,r._cacheIndex=n,e[n]=r}_addInactiveBinding(t,e,n){const s=this._bindingsByRootAndName,r=this._bindings;let o=s[e];o===void 0&&(o={},s[e]=o),o[n]=t,t._cacheIndex=r.length,r.push(t)}_removeInactiveBinding(t){const e=this._bindings,n=t.binding,s=n.rootNode.uuid,r=n.path,o=this._bindingsByRootAndName,a=o[s],c=e[e.length-1],u=t._cacheIndex;c._cacheIndex=u,e[u]=c,e.pop(),delete a[r],Object.keys(a).length===0&&delete o[s]}_lendBinding(t){const e=this._bindings,n=t._cacheIndex,s=this._nActiveBindings++,r=e[s];t._cacheIndex=s,e[s]=t,r._cacheIndex=n,e[n]=r}_takeBackBinding(t){const e=this._bindings,n=t._cacheIndex,s=--this._nActiveBindings,r=e[s];t._cacheIndex=s,e[s]=t,r._cacheIndex=n,e[n]=r}_lendControlInterpolant(){const t=this._controlInterpolants,e=this._nActiveControlInterpolants++;let n=t[e];return n===void 0&&(n=new Gf(new Float32Array(2),new Float32Array(2),1,u0),n.__cacheIndex=e,t[e]=n),n}_takeBackControlInterpolant(t){const e=this._controlInterpolants,n=t.__cacheIndex,s=--this._nActiveControlInterpolants,r=e[s];t.__cacheIndex=s,e[s]=t,r.__cacheIndex=n,e[n]=r}clipAction(t,e,n){const s=e||this._root,r=s.uuid;let o=typeof t=="string"?Ec.findByName(s,t):t;const a=o!==null?o.uuid:t,c=this._actionsByClip[a];let u=null;if(n===void 0&&(o!==null?n=o.blendMode:n=2500),c!==void 0){const l=c.actionByRoot[r];if(l!==void 0&&l.blendMode===n)return l;u=c.knownActions[0],o===null&&(o=u._clip)}if(o===null)return null;const h=new l0(this,o,e,n);return this._bindAction(h,u),this._addInactiveAction(h,a,r),h}existingAction(t,e){const n=e||this._root,s=n.uuid,r=typeof t=="string"?Ec.findByName(n,t):t,o=r?r.uuid:t,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[s]||null}stopAllAction(){const t=this._actions,e=this._nActiveActions;for(let n=e-1;n>=0;--n)t[n].stop();return this}update(t){t*=this.timeScale;const e=this._actions,n=this._nActiveActions,s=this.time+=t,r=Math.sign(t),o=this._accuIndex^=1;for(let u=0;u!==n;++u)e[u]._update(s,t,r,o);const a=this._bindings,c=this._nActiveBindings;for(let u=0;u!==c;++u)a[u].apply(o);return this}setTime(t){this.time=0;for(let e=0;e<this._actions.length;e++)this._actions[e].time=0;return this.update(t)}getRoot(){return this._root}uncacheClip(t){const e=this._actions,n=t.uuid,s=this._actionsByClip,r=s[n];if(r!==void 0){const o=r.knownActions;for(let a=0,c=o.length;a!==c;++a){const u=o[a];this._deactivateAction(u);const h=u._cacheIndex,l=e[e.length-1];u._cacheIndex=null,u._byClipCacheIndex=null,l._cacheIndex=h,e[h]=l,e.pop(),this._removeInactiveBindingsForAction(u)}delete s[n]}}uncacheRoot(t){const e=t.uuid,n=this._actionsByClip;for(const o in n){const a=n[o].actionByRoot,c=a[e];c!==void 0&&(this._deactivateAction(c),this._removeInactiveAction(c))}const s=this._bindingsByRootAndName,r=s[e];if(r!==void 0)for(const o in r){const a=r[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(t,e){const n=this.existingAction(t,e);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}class Tc extends $c{constructor(t,e,n=1){super(t,e),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}clone(t){const e=super.clone(t);return e.meshPerAttribute=this.meshPerAttribute,e}toJSON(t){const e=super.toJSON(t);return e.isInstancedInterleavedBuffer=!0,e.meshPerAttribute=this.meshPerAttribute,e}}const gu=new N,ro=new N;class Wf{constructor(t=new N,e=new N){this.start=t,this.end=e}set(t,e){return this.start.copy(t),this.end.copy(e),this}copy(t){return this.start.copy(t.start),this.end.copy(t.end),this}getCenter(t){return t.addVectors(this.start,this.end).multiplyScalar(.5)}delta(t){return t.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(t,e){return this.delta(e).multiplyScalar(t).add(this.start)}closestPointToPointParameter(t,e){gu.subVectors(t,this.start),ro.subVectors(this.end,this.start);const n=ro.dot(ro);let r=ro.dot(gu)/n;return e&&(r=Ee(r,0,1)),r}closestPointToPoint(t,e,n){const s=this.closestPointToPointParameter(t,e);return this.delta(n).multiplyScalar(s).add(this.start)}applyMatrix4(t){return this.start.applyMatrix4(t),this.end.applyMatrix4(t),this}equals(t){return t.start.equals(this.start)&&t.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}function _u(i,t,e,n){const s=d0(n);switch(e){case 1021:return i*t;case 1024:return i*t;case 1025:return i*t*2;case 1028:return i*t/s.components*s.byteLength;case 1029:return i*t/s.components*s.byteLength;case 1030:return i*t*2/s.components*s.byteLength;case 1031:return i*t*2/s.components*s.byteLength;case 1022:return i*t*3/s.components*s.byteLength;case 1023:return i*t*4/s.components*s.byteLength;case 1033:return i*t*4/s.components*s.byteLength;case 33776:case 33777:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case 33778:case 33779:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case 35841:case 35843:return Math.max(i,16)*Math.max(t,8)/4;case 35840:case 35842:return Math.max(i,8)*Math.max(t,8)/2;case 36196:case 37492:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case 37496:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case 37808:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case 37809:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case 37810:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case 37811:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case 37812:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case 37813:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case 37814:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case 37815:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case 37816:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case 37817:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case 37818:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case 37819:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case 37820:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case 37821:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case 36492:case 36494:case 36495:return Math.ceil(i/4)*Math.ceil(t/4)*16;case 36283:case 36284:return Math.ceil(i/4)*Math.ceil(t/4)*8;case 36285:case 36286:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function d0(i){switch(i){case 1009:case 1010:return{byteLength:1,components:1};case 1012:case 1011:case 1016:return{byteLength:2,components:1};case 1017:case 1018:return{byteLength:2,components:4};case 1014:case 1013:case 1015:return{byteLength:4,components:1};case 35902:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"171"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="171");/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function jf(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function f0(i){const t=new WeakMap;function e(a,c){const u=a.array,h=a.usage,l=u.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,u,h),a.onUploadCallback();let f;if(u instanceof Float32Array)f=i.FLOAT;else if(u instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(u instanceof Int16Array)f=i.SHORT;else if(u instanceof Uint32Array)f=i.UNSIGNED_INT;else if(u instanceof Int32Array)f=i.INT;else if(u instanceof Int8Array)f=i.BYTE;else if(u instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:d,type:f,bytesPerElement:u.BYTES_PER_ELEMENT,version:a.version,size:l}}function n(a,c,u){const h=c.array,l=c.updateRanges;if(i.bindBuffer(u,a),l.length===0)i.bufferSubData(u,0,h);else{l.sort((f,p)=>f.start-p.start);let d=0;for(let f=1;f<l.length;f++){const p=l[d],_=l[f];_.start<=p.start+p.count+1?p.count=Math.max(p.count,_.start+_.count-p.start):(++d,l[d]=_)}l.length=d+1;for(let f=0,p=l.length;f<p;f++){const _=l[f];i.bufferSubData(u,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);c&&(i.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const u=t.get(a);if(u===void 0)t.set(a,e(a,c));else if(u.version<a.version){if(u.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(u.buffer,a,c),u.version=a.version}}return{get:s,remove:r,update:o}}var p0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,m0=`#ifdef USE_ALPHAHASH
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
#endif`,g0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,_0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,b0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,x0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,v0=`#ifdef USE_AOMAP
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
#endif`,y0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,M0=`#ifdef USE_BATCHING
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
#endif`,S0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,A0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,E0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,T0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,w0=`#ifdef USE_IRIDESCENCE
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
#endif`,R0=`#ifdef USE_BUMPMAP
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
#endif`,C0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,I0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,P0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,L0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,D0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,F0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,N0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,U0=`#if defined( USE_COLOR_ALPHA )
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
#endif`,O0=`#define PI 3.141592653589793
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
} // validated`,k0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,B0=`vec3 transformedNormal = objectNormal;
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
#endif`,G0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,z0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,H0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,V0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,W0="gl_FragColor = linearToOutputTexel( gl_FragColor );",j0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,X0=`#ifdef USE_ENVMAP
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
#endif`,q0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,K0=`#ifdef USE_ENVMAP
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
#endif`,$0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Y0=`#ifdef USE_ENVMAP
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
#endif`,Z0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,J0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Q0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,t_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,e_=`#ifdef USE_GRADIENTMAP
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
}`,n_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,i_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,s_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,r_=`uniform bool receiveShadow;
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
#endif`,o_=`#ifdef USE_ENVMAP
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
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
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
#endif`,a_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,c_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,l_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,u_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,h_=`PhysicalMaterial material;
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
#endif`,d_=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
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
}`,f_=`
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
#endif`,p_=`#if defined( RE_IndirectDiffuse )
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
#endif`,m_=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,g_=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,__=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,b_=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,x_=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,v_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,y_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,M_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,S_=`#if defined( USE_POINTS_UV )
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
#endif`,A_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,E_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,T_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,w_=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,R_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,C_=`#ifdef USE_MORPHTARGETS
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
#endif`,I_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,P_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,L_=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,D_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,F_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,N_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,U_=`#ifdef USE_NORMALMAP
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
#endif`,O_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,k_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,B_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,G_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,z_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,H_=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,V_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,W_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,j_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,X_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,q_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,K_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,$_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
			float shadowIntensity;
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
			float shadowIntensity;
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
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return mix( 1.0, shadow, shadowIntensity );
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
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
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Y_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Z_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,J_=`float getShadowMask() {
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
	#if NUM_POINT_LIGHT_SHADOWS > 0
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
}`,Q_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,tb=`#ifdef USE_SKINNING
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
#endif`,eb=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,nb=`#ifdef USE_SKINNING
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
#endif`,ib=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,sb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,rb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ob=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,ab=`#ifdef USE_TRANSMISSION
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
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,cb=`#ifdef USE_TRANSMISSION
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
#endif`,lb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ub=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,hb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,db=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const fb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,pb=`uniform sampler2D t2D;
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
}`,mb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,gb=`#ifdef ENVMAP_TYPE_CUBE
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
}`,_b=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,bb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xb=`#include <common>
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
}`,vb=`#if DEPTH_PACKING == 3200
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
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,yb=`#define DISTANCE
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
}`,Mb=`#define DISTANCE
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
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Sb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ab=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Eb=`uniform float scale;
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
}`,Tb=`uniform vec3 diffuse;
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
}`,wb=`#include <common>
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
}`,Rb=`uniform vec3 diffuse;
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
}`,Cb=`#define LAMBERT
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
}`,Ib=`#define LAMBERT
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
}`,Pb=`#define MATCAP
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
}`,Lb=`#define MATCAP
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
}`,Db=`#define NORMAL
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
}`,Fb=`#define NORMAL
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
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Nb=`#define PHONG
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
}`,Ub=`#define PHONG
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
}`,Ob=`#define STANDARD
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
}`,kb=`#define STANDARD
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
}`,Bb=`#define TOON
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
}`,Gb=`#define TOON
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
}`,zb=`uniform float size;
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
}`,Hb=`uniform vec3 diffuse;
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
}`,Vb=`#include <common>
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
}`,Wb=`uniform vec3 color;
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
}`,jb=`uniform float rotation;
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
}`,Xb=`uniform vec3 diffuse;
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
}`,Me={alphahash_fragment:p0,alphahash_pars_fragment:m0,alphamap_fragment:g0,alphamap_pars_fragment:_0,alphatest_fragment:b0,alphatest_pars_fragment:x0,aomap_fragment:v0,aomap_pars_fragment:y0,batching_pars_vertex:M0,batching_vertex:S0,begin_vertex:A0,beginnormal_vertex:E0,bsdfs:T0,iridescence_fragment:w0,bumpmap_pars_fragment:R0,clipping_planes_fragment:C0,clipping_planes_pars_fragment:I0,clipping_planes_pars_vertex:P0,clipping_planes_vertex:L0,color_fragment:D0,color_pars_fragment:F0,color_pars_vertex:N0,color_vertex:U0,common:O0,cube_uv_reflection_fragment:k0,defaultnormal_vertex:B0,displacementmap_pars_vertex:G0,displacementmap_vertex:z0,emissivemap_fragment:H0,emissivemap_pars_fragment:V0,colorspace_fragment:W0,colorspace_pars_fragment:j0,envmap_fragment:X0,envmap_common_pars_fragment:q0,envmap_pars_fragment:K0,envmap_pars_vertex:$0,envmap_physical_pars_fragment:o_,envmap_vertex:Y0,fog_vertex:Z0,fog_pars_vertex:J0,fog_fragment:Q0,fog_pars_fragment:t_,gradientmap_pars_fragment:e_,lightmap_pars_fragment:n_,lights_lambert_fragment:i_,lights_lambert_pars_fragment:s_,lights_pars_begin:r_,lights_toon_fragment:a_,lights_toon_pars_fragment:c_,lights_phong_fragment:l_,lights_phong_pars_fragment:u_,lights_physical_fragment:h_,lights_physical_pars_fragment:d_,lights_fragment_begin:f_,lights_fragment_maps:p_,lights_fragment_end:m_,logdepthbuf_fragment:g_,logdepthbuf_pars_fragment:__,logdepthbuf_pars_vertex:b_,logdepthbuf_vertex:x_,map_fragment:v_,map_pars_fragment:y_,map_particle_fragment:M_,map_particle_pars_fragment:S_,metalnessmap_fragment:A_,metalnessmap_pars_fragment:E_,morphinstance_vertex:T_,morphcolor_vertex:w_,morphnormal_vertex:R_,morphtarget_pars_vertex:C_,morphtarget_vertex:I_,normal_fragment_begin:P_,normal_fragment_maps:L_,normal_pars_fragment:D_,normal_pars_vertex:F_,normal_vertex:N_,normalmap_pars_fragment:U_,clearcoat_normal_fragment_begin:O_,clearcoat_normal_fragment_maps:k_,clearcoat_pars_fragment:B_,iridescence_pars_fragment:G_,opaque_fragment:z_,packing:H_,premultiplied_alpha_fragment:V_,project_vertex:W_,dithering_fragment:j_,dithering_pars_fragment:X_,roughnessmap_fragment:q_,roughnessmap_pars_fragment:K_,shadowmap_pars_fragment:$_,shadowmap_pars_vertex:Y_,shadowmap_vertex:Z_,shadowmask_pars_fragment:J_,skinbase_vertex:Q_,skinning_pars_vertex:tb,skinning_vertex:eb,skinnormal_vertex:nb,specularmap_fragment:ib,specularmap_pars_fragment:sb,tonemapping_fragment:rb,tonemapping_pars_fragment:ob,transmission_fragment:ab,transmission_pars_fragment:cb,uv_pars_fragment:lb,uv_pars_vertex:ub,uv_vertex:hb,worldpos_vertex:db,background_vert:fb,background_frag:pb,backgroundCube_vert:mb,backgroundCube_frag:gb,cube_vert:_b,cube_frag:bb,depth_vert:xb,depth_frag:vb,distanceRGBA_vert:yb,distanceRGBA_frag:Mb,equirect_vert:Sb,equirect_frag:Ab,linedashed_vert:Eb,linedashed_frag:Tb,meshbasic_vert:wb,meshbasic_frag:Rb,meshlambert_vert:Cb,meshlambert_frag:Ib,meshmatcap_vert:Pb,meshmatcap_frag:Lb,meshnormal_vert:Db,meshnormal_frag:Fb,meshphong_vert:Nb,meshphong_frag:Ub,meshphysical_vert:Ob,meshphysical_frag:kb,meshtoon_vert:Bb,meshtoon_frag:Gb,points_vert:zb,points_frag:Hb,shadow_vert:Vb,shadow_frag:Wb,sprite_vert:jb,sprite_frag:Xb},zt={common:{diffuse:{value:new he(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ve},alphaMap:{value:null},alphaMapTransform:{value:new ve},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ve}},envmap:{envMap:{value:null},envMapRotation:{value:new ve},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ve}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ve}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ve},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ve},normalScale:{value:new oe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ve},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ve}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ve}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ve}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new he(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new he(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ve},alphaTest:{value:0},uvTransform:{value:new ve}},sprite:{diffuse:{value:new he(16777215)},opacity:{value:1},center:{value:new oe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ve},alphaMap:{value:null},alphaMapTransform:{value:new ve},alphaTest:{value:0}}},An={basic:{uniforms:mn([zt.common,zt.specularmap,zt.envmap,zt.aomap,zt.lightmap,zt.fog]),vertexShader:Me.meshbasic_vert,fragmentShader:Me.meshbasic_frag},lambert:{uniforms:mn([zt.common,zt.specularmap,zt.envmap,zt.aomap,zt.lightmap,zt.emissivemap,zt.bumpmap,zt.normalmap,zt.displacementmap,zt.fog,zt.lights,{emissive:{value:new he(0)}}]),vertexShader:Me.meshlambert_vert,fragmentShader:Me.meshlambert_frag},phong:{uniforms:mn([zt.common,zt.specularmap,zt.envmap,zt.aomap,zt.lightmap,zt.emissivemap,zt.bumpmap,zt.normalmap,zt.displacementmap,zt.fog,zt.lights,{emissive:{value:new he(0)},specular:{value:new he(1118481)},shininess:{value:30}}]),vertexShader:Me.meshphong_vert,fragmentShader:Me.meshphong_frag},standard:{uniforms:mn([zt.common,zt.envmap,zt.aomap,zt.lightmap,zt.emissivemap,zt.bumpmap,zt.normalmap,zt.displacementmap,zt.roughnessmap,zt.metalnessmap,zt.fog,zt.lights,{emissive:{value:new he(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Me.meshphysical_vert,fragmentShader:Me.meshphysical_frag},toon:{uniforms:mn([zt.common,zt.aomap,zt.lightmap,zt.emissivemap,zt.bumpmap,zt.normalmap,zt.displacementmap,zt.gradientmap,zt.fog,zt.lights,{emissive:{value:new he(0)}}]),vertexShader:Me.meshtoon_vert,fragmentShader:Me.meshtoon_frag},matcap:{uniforms:mn([zt.common,zt.bumpmap,zt.normalmap,zt.displacementmap,zt.fog,{matcap:{value:null}}]),vertexShader:Me.meshmatcap_vert,fragmentShader:Me.meshmatcap_frag},points:{uniforms:mn([zt.points,zt.fog]),vertexShader:Me.points_vert,fragmentShader:Me.points_frag},dashed:{uniforms:mn([zt.common,zt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Me.linedashed_vert,fragmentShader:Me.linedashed_frag},depth:{uniforms:mn([zt.common,zt.displacementmap]),vertexShader:Me.depth_vert,fragmentShader:Me.depth_frag},normal:{uniforms:mn([zt.common,zt.bumpmap,zt.normalmap,zt.displacementmap,{opacity:{value:1}}]),vertexShader:Me.meshnormal_vert,fragmentShader:Me.meshnormal_frag},sprite:{uniforms:mn([zt.sprite,zt.fog]),vertexShader:Me.sprite_vert,fragmentShader:Me.sprite_frag},background:{uniforms:{uvTransform:{value:new ve},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Me.background_vert,fragmentShader:Me.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ve}},vertexShader:Me.backgroundCube_vert,fragmentShader:Me.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Me.cube_vert,fragmentShader:Me.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Me.equirect_vert,fragmentShader:Me.equirect_frag},distanceRGBA:{uniforms:mn([zt.common,zt.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Me.distanceRGBA_vert,fragmentShader:Me.distanceRGBA_frag},shadow:{uniforms:mn([zt.lights,zt.fog,{color:{value:new he(0)},opacity:{value:1}}]),vertexShader:Me.shadow_vert,fragmentShader:Me.shadow_frag}};An.physical={uniforms:mn([An.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ve},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ve},clearcoatNormalScale:{value:new oe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ve},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ve},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ve},sheen:{value:0},sheenColor:{value:new he(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ve},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ve},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ve},transmissionSamplerSize:{value:new oe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ve},attenuationDistance:{value:0},attenuationColor:{value:new he(0)},specularColor:{value:new he(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ve},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ve},anisotropyVector:{value:new oe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ve}}]),vertexShader:Me.meshphysical_vert,fragmentShader:Me.meshphysical_frag};const oo={r:0,b:0,g:0},Gi=new On,qb=new _e;function Kb(i,t,e,n,s,r,o){const a=new he(0);let c=r===!0?0:1,u,h,l=null,d=0,f=null;function p(y){let x=y.isScene===!0?y.background:null;return x&&x.isTexture&&(x=(y.backgroundBlurriness>0?e:t).get(x)),x}function _(y){let x=!1;const w=p(y);w===null?m(a,c):w&&w.isColor&&(m(w,1),x=!0);const M=i.xr.getEnvironmentBlendMode();M==="additive"?n.buffers.color.setClear(0,0,0,1,o):M==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function g(y,x){const w=p(x);w&&(w.isCubeTexture||w.mapping===306)?(h===void 0&&(h=new Re(new bi(1,1,1),new xi({name:"BackgroundCubeMaterial",uniforms:ks(An.backgroundCube.uniforms),vertexShader:An.backgroundCube.vertexShader,fragmentShader:An.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(M,T,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Gi.copy(x.backgroundRotation),Gi.x*=-1,Gi.y*=-1,Gi.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(Gi.y*=-1,Gi.z*=-1),h.material.uniforms.envMap.value=w,h.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(qb.makeRotationFromEuler(Gi)),h.material.toneMapped=Le.getTransfer(w.colorSpace)!==Be,(l!==w||d!==w.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,l=w,d=w.version,f=i.toneMapping),h.layers.enableAll(),y.unshift(h,h.geometry,h.material,0,0,null)):w&&w.isTexture&&(u===void 0&&(u=new Re(new $n(2,2),new xi({name:"BackgroundMaterial",uniforms:ks(An.background.uniforms),vertexShader:An.background.vertexShader,fragmentShader:An.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(u)),u.material.uniforms.t2D.value=w,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.toneMapped=Le.getTransfer(w.colorSpace)!==Be,w.matrixAutoUpdate===!0&&w.updateMatrix(),u.material.uniforms.uvTransform.value.copy(w.matrix),(l!==w||d!==w.version||f!==i.toneMapping)&&(u.material.needsUpdate=!0,l=w,d=w.version,f=i.toneMapping),u.layers.enableAll(),y.unshift(u,u.geometry,u.material,0,0,null))}function m(y,x){y.getRGB(oo,Rf(i)),n.buffers.color.setClear(oo.r,oo.g,oo.b,x,o)}function v(){h!==void 0&&(h.geometry.dispose(),h.material.dispose()),u!==void 0&&(u.geometry.dispose(),u.material.dispose())}return{getClearColor:function(){return a},setClearColor:function(y,x=1){a.set(y),c=x,m(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(y){c=y,m(a,c)},render:_,addToRenderList:g,dispose:v}}function $b(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let r=s,o=!1;function a(A,C,U,P,O){let Z=!1;const H=l(P,U,C);r!==H&&(r=H,u(r.object)),Z=f(A,P,U,O),Z&&p(A,P,U,O),O!==null&&t.update(O,i.ELEMENT_ARRAY_BUFFER),(Z||o)&&(o=!1,x(A,C,U,P),O!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(O).buffer))}function c(){return i.createVertexArray()}function u(A){return i.bindVertexArray(A)}function h(A){return i.deleteVertexArray(A)}function l(A,C,U){const P=U.wireframe===!0;let O=n[A.id];O===void 0&&(O={},n[A.id]=O);let Z=O[C.id];Z===void 0&&(Z={},O[C.id]=Z);let H=Z[P];return H===void 0&&(H=d(c()),Z[P]=H),H}function d(A){const C=[],U=[],P=[];for(let O=0;O<e;O++)C[O]=0,U[O]=0,P[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:U,attributeDivisors:P,object:A,attributes:{},index:null}}function f(A,C,U,P){const O=r.attributes,Z=C.attributes;let H=0;const X=U.getAttributes();for(const B in X)if(X[B].location>=0){const Q=O[B];let it=Z[B];if(it===void 0&&(B==="instanceMatrix"&&A.instanceMatrix&&(it=A.instanceMatrix),B==="instanceColor"&&A.instanceColor&&(it=A.instanceColor)),Q===void 0||Q.attribute!==it||it&&Q.data!==it.data)return!0;H++}return r.attributesNum!==H||r.index!==P}function p(A,C,U,P){const O={},Z=C.attributes;let H=0;const X=U.getAttributes();for(const B in X)if(X[B].location>=0){let Q=Z[B];Q===void 0&&(B==="instanceMatrix"&&A.instanceMatrix&&(Q=A.instanceMatrix),B==="instanceColor"&&A.instanceColor&&(Q=A.instanceColor));const it={};it.attribute=Q,Q&&Q.data&&(it.data=Q.data),O[B]=it,H++}r.attributes=O,r.attributesNum=H,r.index=P}function _(){const A=r.newAttributes;for(let C=0,U=A.length;C<U;C++)A[C]=0}function g(A){m(A,0)}function m(A,C){const U=r.newAttributes,P=r.enabledAttributes,O=r.attributeDivisors;U[A]=1,P[A]===0&&(i.enableVertexAttribArray(A),P[A]=1),O[A]!==C&&(i.vertexAttribDivisor(A,C),O[A]=C)}function v(){const A=r.newAttributes,C=r.enabledAttributes;for(let U=0,P=C.length;U<P;U++)C[U]!==A[U]&&(i.disableVertexAttribArray(U),C[U]=0)}function y(A,C,U,P,O,Z,H){H===!0?i.vertexAttribIPointer(A,C,U,O,Z):i.vertexAttribPointer(A,C,U,P,O,Z)}function x(A,C,U,P){_();const O=P.attributes,Z=U.getAttributes(),H=C.defaultAttributeValues;for(const X in Z){const B=Z[X];if(B.location>=0){let j=O[X];if(j===void 0&&(X==="instanceMatrix"&&A.instanceMatrix&&(j=A.instanceMatrix),X==="instanceColor"&&A.instanceColor&&(j=A.instanceColor)),j!==void 0){const Q=j.normalized,it=j.itemSize,ct=t.get(j);if(ct===void 0)continue;const Dt=ct.buffer,nt=ct.type,ot=ct.bytesPerElement,at=nt===i.INT||nt===i.UNSIGNED_INT||j.gpuType===1013;if(j.isInterleavedBufferAttribute){const et=j.data,yt=et.stride,Bt=j.offset;if(et.isInstancedInterleavedBuffer){for(let Qt=0;Qt<B.locationSize;Qt++)m(B.location+Qt,et.meshPerAttribute);A.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=et.meshPerAttribute*et.count)}else for(let Qt=0;Qt<B.locationSize;Qt++)g(B.location+Qt);i.bindBuffer(i.ARRAY_BUFFER,Dt);for(let Qt=0;Qt<B.locationSize;Qt++)y(B.location+Qt,it/B.locationSize,nt,Q,yt*ot,(Bt+it/B.locationSize*Qt)*ot,at)}else{if(j.isInstancedBufferAttribute){for(let et=0;et<B.locationSize;et++)m(B.location+et,j.meshPerAttribute);A.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let et=0;et<B.locationSize;et++)g(B.location+et);i.bindBuffer(i.ARRAY_BUFFER,Dt);for(let et=0;et<B.locationSize;et++)y(B.location+et,it/B.locationSize,nt,Q,it*ot,it/B.locationSize*et*ot,at)}}else if(H!==void 0){const Q=H[X];if(Q!==void 0)switch(Q.length){case 2:i.vertexAttrib2fv(B.location,Q);break;case 3:i.vertexAttrib3fv(B.location,Q);break;case 4:i.vertexAttrib4fv(B.location,Q);break;default:i.vertexAttrib1fv(B.location,Q)}}}}v()}function w(){I();for(const A in n){const C=n[A];for(const U in C){const P=C[U];for(const O in P)h(P[O].object),delete P[O];delete C[U]}delete n[A]}}function M(A){if(n[A.id]===void 0)return;const C=n[A.id];for(const U in C){const P=C[U];for(const O in P)h(P[O].object),delete P[O];delete C[U]}delete n[A.id]}function T(A){for(const C in n){const U=n[C];if(U[A.id]===void 0)continue;const P=U[A.id];for(const O in P)h(P[O].object),delete P[O];delete U[A.id]}}function I(){S(),o=!0,r!==s&&(r=s,u(r.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:I,resetDefaultState:S,dispose:w,releaseStatesOfGeometry:M,releaseStatesOfProgram:T,initAttributes:_,enableAttribute:g,disableUnusedAttributes:v}}function Yb(i,t,e){let n;function s(u){n=u}function r(u,h){i.drawArrays(n,u,h),e.update(h,n,1)}function o(u,h,l){l!==0&&(i.drawArraysInstanced(n,u,h,l),e.update(h,n,l))}function a(u,h,l){if(l===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,u,0,h,0,l);let f=0;for(let p=0;p<l;p++)f+=h[p];e.update(f,n,1)}function c(u,h,l,d){if(l===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let p=0;p<u.length;p++)o(u[p],h[p],d[p]);else{f.multiDrawArraysInstancedWEBGL(n,u,0,h,0,d,0,l);let p=0;for(let _=0;_<l;_++)p+=h[_]*d[_];e.update(p,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function Zb(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const T=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(T){return!(T!==1023&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){const I=T===1016&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(T!==1009&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==1015&&!I)}function c(T){if(T==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=e.precision!==void 0?e.precision:"highp";const h=c(u);h!==u&&(console.warn("THREE.WebGLRenderer:",u,"not supported, using",h,"instead."),u=h);const l=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),v=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),y=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),w=p>0,M=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:u,logarithmicDepthBuffer:l,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:p,maxTextureSize:_,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:x,vertexTextures:w,maxSamples:M}}function Jb(i){const t=this;let e=null,n=0,s=!1,r=!1;const o=new Xi,a=new ve,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(l,d){const f=l.length!==0||d||n!==0||s;return s=d,n=l.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(l,d){e=h(l,d,0)},this.setState=function(l,d,f){const p=l.clippingPlanes,_=l.clipIntersection,g=l.clipShadows,m=i.get(l);if(!s||p===null||p.length===0||r&&!g)r?h(null):u();else{const v=r?0:n,y=v*4;let x=m.clippingState||null;c.value=x,x=h(p,d,y,f);for(let w=0;w!==y;++w)x[w]=e[w];m.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function u(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(l,d,f,p){const _=l!==null?l.length:0;let g=null;if(_!==0){if(g=c.value,p!==!0||g===null){const m=f+_*4,v=d.matrixWorldInverse;a.getNormalMatrix(v),(g===null||g.length<m)&&(g=new Float32Array(m));for(let y=0,x=f;y!==_;++y,x+=4)o.copy(l[y]).applyMatrix4(v,a),o.normal.toArray(g,x),g[x+3]=o.constant}c.value=g,c.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,g}}function Qb(i){let t=new WeakMap;function e(o,a){return a===303?o.mapping=301:a===304&&(o.mapping=302),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===303||a===304)if(t.has(o)){const c=t.get(o).texture;return e(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const u=new gg(c.height);return u.fromEquirectangularTexture(i,o),t.set(o,u),o.addEventListener("dispose",s),e(u.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}const Ps=4,bu=[.125,.215,.35,.446,.526,.582],$i=20,Na=new sl,xu=new he;let Ua=null,Oa=0,ka=0,Ba=!1;const qi=(1+Math.sqrt(5))/2,As=1/qi,vu=[new N(-qi,As,0),new N(qi,As,0),new N(-As,0,qi),new N(As,0,qi),new N(0,qi,-As),new N(0,qi,As),new N(-1,1,-1),new N(1,1,-1),new N(-1,1,1),new N(1,1,1)];class yu{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){Ua=this._renderer.getRenderTarget(),Oa=this._renderer.getActiveCubeFace(),ka=this._renderer.getActiveMipmapLevel(),Ba=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Au(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Su(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Ua,Oa,ka),this._renderer.xr.enabled=Ba,t.scissorTest=!1,ao(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===301||t.mapping===302?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ua=this._renderer.getRenderTarget(),Oa=this._renderer.getActiveCubeFace(),ka=this._renderer.getActiveMipmapLevel(),Ba=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:1006,minFilter:1006,generateMipmaps:!1,type:1016,format:1023,colorSpace:bn,depthBuffer:!1},s=Mu(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Mu(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=tx(r)),this._blurMaterial=ex(r,t,e)}return s}_compileMaterial(t){const e=new Re(this._lodPlanes[0],t);this._renderer.compile(e,Na)}_sceneToCubeUV(t,e,n,s){const a=new _n(90,1,e,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,l=h.autoClear,d=h.toneMapping;h.getClearColor(xu),h.toneMapping=0,h.autoClear=!1;const f=new en({name:"PMREM.Background",side:1,depthWrite:!1,depthTest:!1}),p=new Re(new bi,f);let _=!1;const g=t.background;g?g.isColor&&(f.color.copy(g),t.background=null,_=!0):(f.color.copy(xu),_=!0);for(let m=0;m<6;m++){const v=m%3;v===0?(a.up.set(0,c[m],0),a.lookAt(u[m],0,0)):v===1?(a.up.set(0,0,c[m]),a.lookAt(0,u[m],0)):(a.up.set(0,c[m],0),a.lookAt(0,0,u[m]));const y=this._cubeSize;ao(s,v*y,m>2?y:0,y,y),h.setRenderTarget(s),_&&h.render(p,a),h.render(t,a)}p.geometry.dispose(),p.material.dispose(),h.toneMapping=d,h.autoClear=l,t.background=g}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===301||t.mapping===302;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Au()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Su());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new Re(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const c=this._cubeSize;ao(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,Na)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=vu[(s-r-1)%vu.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){const c=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,l=new Re(this._lodPlanes[s],u),d=u.uniforms,f=this._sizeLods[n]-1,p=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*$i-1),_=r/p,g=isFinite(r)?1+Math.floor(h*_):$i;g>$i&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${$i}`);const m=[];let v=0;for(let T=0;T<$i;++T){const I=T/_,S=Math.exp(-I*I/2);m.push(S),T===0?v+=S:T<g&&(v+=2*S)}for(let T=0;T<m.length;T++)m[T]=m[T]/v;d.envMap.value=t.texture,d.samples.value=g,d.weights.value=m,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:y}=this;d.dTheta.value=p,d.mipInt.value=y-n;const x=this._sizeLods[s],w=3*x*(s>y-Ps?s-y+Ps:0),M=4*(this._cubeSize-x);ao(e,w,M,3*x,2*x),c.setRenderTarget(e),c.render(l,Na)}}function tx(i){const t=[],e=[],n=[];let s=i;const r=i-Ps+1+bu.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let c=1/a;o>i-Ps?c=bu[o-i+Ps-1]:o===0&&(c=0),n.push(c);const u=1/(a-2),h=-u,l=1+u,d=[h,h,l,h,l,l,h,h,l,l,h,l],f=6,p=6,_=3,g=2,m=1,v=new Float32Array(_*p*f),y=new Float32Array(g*p*f),x=new Float32Array(m*p*f);for(let M=0;M<f;M++){const T=M%3*2/3-1,I=M>2?0:-1,S=[T,I,0,T+2/3,I,0,T+2/3,I+1,0,T,I,0,T+2/3,I+1,0,T,I+1,0];v.set(S,_*p*M),y.set(d,g*p*M);const A=[M,M,M,M,M,M];x.set(A,m*p*M)}const w=new Xe;w.setAttribute("position",new De(v,_)),w.setAttribute("uv",new De(y,g)),w.setAttribute("faceIndex",new De(x,m)),t.push(w),s>Ps&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Mu(i,t,e){const n=new ns(i,t,e);return n.texture.mapping=306,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ao(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function ex(i,t,e){const n=new Float32Array($i),s=new N(0,1,0);return new xi({name:"SphericalGaussianBlur",defines:{n:$i,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:cl(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function Su(){return new xi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:cl(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function Au(){return new xi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:cl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function cl(){return`

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
	`}function nx(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const c=a.mapping,u=c===303||c===304,h=c===301||c===302;if(u||h){let l=t.get(a);const d=l!==void 0?l.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new yu(i)),l=u?e.fromEquirectangular(a,l):e.fromCubemap(a,l),l.texture.pmremVersion=a.pmremVersion,t.set(a,l),l.texture;if(l!==void 0)return l.texture;{const f=a.image;return u&&f&&f.height>0||h&&f&&s(f)?(e===null&&(e=new yu(i)),l=u?e.fromEquirectangular(a):e.fromCubemap(a),l.texture.pmremVersion=a.pmremVersion,t.set(a,l),a.addEventListener("dispose",r),l.texture):null}}}return a}function s(a){let c=0;const u=6;for(let h=0;h<u;h++)a[h]!==void 0&&c++;return c===u}function r(a){const c=a.target;c.removeEventListener("dispose",r);const u=t.get(c);u!==void 0&&(t.delete(c),u.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function ix(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&Is("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function sx(i,t,e,n){const s={},r=new WeakMap;function o(l){const d=l.target;d.index!==null&&t.remove(d.index);for(const p in d.attributes)t.remove(d.attributes[p]);d.removeEventListener("dispose",o),delete s[d.id];const f=r.get(d);f&&(t.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(l,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,e.memory.geometries++),d}function c(l){const d=l.attributes;for(const f in d)t.update(d[f],i.ARRAY_BUFFER)}function u(l){const d=[],f=l.index,p=l.attributes.position;let _=0;if(f!==null){const v=f.array;_=f.version;for(let y=0,x=v.length;y<x;y+=3){const w=v[y+0],M=v[y+1],T=v[y+2];d.push(w,M,M,T,T,w)}}else if(p!==void 0){const v=p.array;_=p.version;for(let y=0,x=v.length/3-1;y<x;y+=3){const w=y+0,M=y+1,T=y+2;d.push(w,M,M,T,T,w)}}else return;const g=new(yf(d)?wf:Tf)(d,1);g.version=_;const m=r.get(l);m&&t.remove(m),r.set(l,g)}function h(l){const d=r.get(l);if(d){const f=l.index;f!==null&&d.version<f.version&&u(l)}else u(l);return r.get(l)}return{get:a,update:c,getWireframeAttribute:h}}function rx(i,t,e){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function c(d,f){i.drawElements(n,f,r,d*o),e.update(f,n,1)}function u(d,f,p){p!==0&&(i.drawElementsInstanced(n,f,r,d*o,p),e.update(f,n,p))}function h(d,f,p){if(p===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,p);let g=0;for(let m=0;m<p;m++)g+=f[m];e.update(g,n,1)}function l(d,f,p,_){if(p===0)return;const g=t.get("WEBGL_multi_draw");if(g===null)for(let m=0;m<d.length;m++)u(d[m]/o,f[m],_[m]);else{g.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,_,0,p);let m=0;for(let v=0;v<p;v++)m+=f[v]*_[v];e.update(m,n,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=u,this.renderMultiDraw=h,this.renderMultiDrawInstances=l}function ox(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function ax(i,t,e){const n=new WeakMap,s=new Se;function r(o,a,c){const u=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,l=h!==void 0?h.length:0;let d=n.get(a);if(d===void 0||d.count!==l){let S=function(){T.dispose(),n.delete(a),a.removeEventListener("dispose",S)};d!==void 0&&d.texture.dispose();const f=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],v=a.morphAttributes.color||[];let y=0;f===!0&&(y=1),p===!0&&(y=2),_===!0&&(y=3);let x=a.attributes.position.count*y,w=1;x>t.maxTextureSize&&(w=Math.ceil(x/t.maxTextureSize),x=t.maxTextureSize);const M=new Float32Array(x*w*4*l),T=new Sf(M,x,w,l);T.type=1015,T.needsUpdate=!0;const I=y*4;for(let A=0;A<l;A++){const C=g[A],U=m[A],P=v[A],O=x*w*4*A;for(let Z=0;Z<C.count;Z++){const H=Z*I;f===!0&&(s.fromBufferAttribute(C,Z),M[O+H+0]=s.x,M[O+H+1]=s.y,M[O+H+2]=s.z,M[O+H+3]=0),p===!0&&(s.fromBufferAttribute(U,Z),M[O+H+4]=s.x,M[O+H+5]=s.y,M[O+H+6]=s.z,M[O+H+7]=0),_===!0&&(s.fromBufferAttribute(P,Z),M[O+H+8]=s.x,M[O+H+9]=s.y,M[O+H+10]=s.z,M[O+H+11]=P.itemSize===4?s.w:1)}}d={count:l,texture:T,size:new oe(x,w)},n.set(a,d),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let f=0;for(let _=0;_<u.length;_++)f+=u[_];const p=a.morphTargetsRelative?1:1-f;c.getUniforms().setValue(i,"morphTargetBaseInfluence",p),c.getUniforms().setValue(i,"morphTargetInfluences",u)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function cx(i,t,e,n){let s=new WeakMap;function r(c){const u=n.render.frame,h=c.geometry,l=t.get(c,h);if(s.get(l)!==u&&(t.update(l),s.set(l,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==u&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,u))),c.isSkinnedMesh){const d=c.skeleton;s.get(d)!==u&&(d.update(),s.set(d,u))}return l}function o(){s=new WeakMap}function a(c){const u=c.target;u.removeEventListener("dispose",a),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:r,dispose:o}}const Xf=new Ze,Eu=new Of(1,1),qf=new Sf,Kf=new eg,$f=new If,Tu=[],wu=[],Ru=new Float32Array(16),Cu=new Float32Array(9),Iu=new Float32Array(4);function js(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=Tu[s];if(r===void 0&&(r=new Float32Array(s),Tu[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function Je(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Qe(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Jo(i,t){let e=wu[t];e===void 0&&(e=new Int32Array(t),wu[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function lx(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function ux(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Je(e,t))return;i.uniform2fv(this.addr,t),Qe(e,t)}}function hx(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Je(e,t))return;i.uniform3fv(this.addr,t),Qe(e,t)}}function dx(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Je(e,t))return;i.uniform4fv(this.addr,t),Qe(e,t)}}function fx(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Je(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Qe(e,t)}else{if(Je(e,n))return;Iu.set(n),i.uniformMatrix2fv(this.addr,!1,Iu),Qe(e,n)}}function px(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Je(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Qe(e,t)}else{if(Je(e,n))return;Cu.set(n),i.uniformMatrix3fv(this.addr,!1,Cu),Qe(e,n)}}function mx(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Je(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Qe(e,t)}else{if(Je(e,n))return;Ru.set(n),i.uniformMatrix4fv(this.addr,!1,Ru),Qe(e,n)}}function gx(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function _x(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Je(e,t))return;i.uniform2iv(this.addr,t),Qe(e,t)}}function bx(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Je(e,t))return;i.uniform3iv(this.addr,t),Qe(e,t)}}function xx(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Je(e,t))return;i.uniform4iv(this.addr,t),Qe(e,t)}}function vx(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function yx(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Je(e,t))return;i.uniform2uiv(this.addr,t),Qe(e,t)}}function Mx(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Je(e,t))return;i.uniform3uiv(this.addr,t),Qe(e,t)}}function Sx(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Je(e,t))return;i.uniform4uiv(this.addr,t),Qe(e,t)}}function Ax(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Eu.compareFunction=515,r=Eu):r=Xf,e.setTexture2D(t||r,s)}function Ex(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Kf,s)}function Tx(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||$f,s)}function wx(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||qf,s)}function Rx(i){switch(i){case 5126:return lx;case 35664:return ux;case 35665:return hx;case 35666:return dx;case 35674:return fx;case 35675:return px;case 35676:return mx;case 5124:case 35670:return gx;case 35667:case 35671:return _x;case 35668:case 35672:return bx;case 35669:case 35673:return xx;case 5125:return vx;case 36294:return yx;case 36295:return Mx;case 36296:return Sx;case 35678:case 36198:case 36298:case 36306:case 35682:return Ax;case 35679:case 36299:case 36307:return Ex;case 35680:case 36300:case 36308:case 36293:return Tx;case 36289:case 36303:case 36311:case 36292:return wx}}function Cx(i,t){i.uniform1fv(this.addr,t)}function Ix(i,t){const e=js(t,this.size,2);i.uniform2fv(this.addr,e)}function Px(i,t){const e=js(t,this.size,3);i.uniform3fv(this.addr,e)}function Lx(i,t){const e=js(t,this.size,4);i.uniform4fv(this.addr,e)}function Dx(i,t){const e=js(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Fx(i,t){const e=js(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Nx(i,t){const e=js(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Ux(i,t){i.uniform1iv(this.addr,t)}function Ox(i,t){i.uniform2iv(this.addr,t)}function kx(i,t){i.uniform3iv(this.addr,t)}function Bx(i,t){i.uniform4iv(this.addr,t)}function Gx(i,t){i.uniform1uiv(this.addr,t)}function zx(i,t){i.uniform2uiv(this.addr,t)}function Hx(i,t){i.uniform3uiv(this.addr,t)}function Vx(i,t){i.uniform4uiv(this.addr,t)}function Wx(i,t,e){const n=this.cache,s=t.length,r=Jo(e,s);Je(n,r)||(i.uniform1iv(this.addr,r),Qe(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||Xf,r[o])}function jx(i,t,e){const n=this.cache,s=t.length,r=Jo(e,s);Je(n,r)||(i.uniform1iv(this.addr,r),Qe(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Kf,r[o])}function Xx(i,t,e){const n=this.cache,s=t.length,r=Jo(e,s);Je(n,r)||(i.uniform1iv(this.addr,r),Qe(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||$f,r[o])}function qx(i,t,e){const n=this.cache,s=t.length,r=Jo(e,s);Je(n,r)||(i.uniform1iv(this.addr,r),Qe(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||qf,r[o])}function Kx(i){switch(i){case 5126:return Cx;case 35664:return Ix;case 35665:return Px;case 35666:return Lx;case 35674:return Dx;case 35675:return Fx;case 35676:return Nx;case 5124:case 35670:return Ux;case 35667:case 35671:return Ox;case 35668:case 35672:return kx;case 35669:case 35673:return Bx;case 5125:return Gx;case 36294:return zx;case 36295:return Hx;case 36296:return Vx;case 35678:case 36198:case 36298:case 36306:case 35682:return Wx;case 35679:case 36299:case 36307:return jx;case 35680:case 36300:case 36308:case 36293:return Xx;case 36289:case 36303:case 36311:case 36292:return qx}}class $x{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Rx(e.type)}}class Yx{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Kx(e.type)}}class Zx{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],n)}}}const Ga=/(\w+)(\])?(\[|\.)?/g;function Pu(i,t){i.seq.push(t),i.map[t.id]=t}function Jx(i,t,e){const n=i.name,s=n.length;for(Ga.lastIndex=0;;){const r=Ga.exec(n),o=Ga.lastIndex;let a=r[1];const c=r[2]==="]",u=r[3];if(c&&(a=a|0),u===void 0||u==="["&&o+2===s){Pu(e,u===void 0?new $x(a,i,t):new Yx(a,i,t));break}else{let l=e.map[a];l===void 0&&(l=new Zx(a),Pu(e,l)),e=l}}}class Po{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);Jx(r,o,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&n.push(o)}return n}}function Lu(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const Qx=37297;let tv=0;function ev(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const Du=new ve;function nv(i){Le._getMatrix(Du,Le.workingColorSpace,i);const t=`mat3( ${Du.elements.map(e=>e.toFixed(4))} )`;switch(Le.getTransfer(i)){case Oo:return[t,"LinearTransferOETF"];case Be:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Fu(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+ev(i.getShaderSource(t),o)}else return s}function iv(i,t){const e=nv(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function sv(i,t){let e;switch(t){case 1:e="Linear";break;case 2:e="Reinhard";break;case 3:e="Cineon";break;case 4:e="ACESFilmic";break;case 6:e="AgX";break;case 7:e="Neutral";break;case 5:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const co=new N;function rv(){Le.getLuminanceCoefficients(co);const i=co.x.toFixed(4),t=co.y.toFixed(4),e=co.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ov(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(mr).join(`
`)}function av(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function cv(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function mr(i){return i!==""}function Nu(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Uu(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const lv=/^[ \t]*#include +<([\w\d./]+)>/gm;function wc(i){return i.replace(lv,hv)}const uv=new Map;function hv(i,t){let e=Me[t];if(e===void 0){const n=uv.get(t);if(n!==void 0)e=Me[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return wc(e)}const dv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ou(i){return i.replace(dv,fv)}function fv(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function ku(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function pv(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===1?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===2?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===3&&(t="SHADOWMAP_TYPE_VSM"),t}function mv(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case 301:case 302:t="ENVMAP_TYPE_CUBE";break;case 306:t="ENVMAP_TYPE_CUBE_UV";break}return t}function gv(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case 302:t="ENVMAP_MODE_REFRACTION";break}return t}function _v(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case 0:t="ENVMAP_BLENDING_MULTIPLY";break;case 1:t="ENVMAP_BLENDING_MIX";break;case 2:t="ENVMAP_BLENDING_ADD";break}return t}function bv(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function xv(i,t,e,n){const s=i.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const c=pv(e),u=mv(e),h=gv(e),l=_v(e),d=bv(e),f=ov(e),p=av(r),_=s.createProgram();let g,m,v=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(mr).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(mr).join(`
`),m.length>0&&(m+=`
`)):(g=[ku(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(mr).join(`
`),m=[ku(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",e.envMap?"#define "+l:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==0?"#define TONE_MAPPING":"",e.toneMapping!==0?Me.tonemapping_pars_fragment:"",e.toneMapping!==0?sv("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Me.colorspace_pars_fragment,iv("linearToOutputTexel",e.outputColorSpace),rv(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(mr).join(`
`)),o=wc(o),o=Nu(o,e),o=Uu(o,e),a=wc(a),a=Nu(a,e),a=Uu(a,e),o=Ou(o),a=Ou(a),e.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",e.glslVersion===Pl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Pl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const y=v+g+o,x=v+m+a,w=Lu(s,s.VERTEX_SHADER,y),M=Lu(s,s.FRAGMENT_SHADER,x);s.attachShader(_,w),s.attachShader(_,M),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function T(C){if(i.debug.checkShaderErrors){const U=s.getProgramInfoLog(_).trim(),P=s.getShaderInfoLog(w).trim(),O=s.getShaderInfoLog(M).trim();let Z=!0,H=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(Z=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,w,M);else{const X=Fu(s,w,"vertex"),B=Fu(s,M,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+U+`
`+X+`
`+B)}else U!==""?console.warn("THREE.WebGLProgram: Program Info Log:",U):(P===""||O==="")&&(H=!1);H&&(C.diagnostics={runnable:Z,programLog:U,vertexShader:{log:P,prefix:g},fragmentShader:{log:O,prefix:m}})}s.deleteShader(w),s.deleteShader(M),I=new Po(s,_),S=cv(s,_)}let I;this.getUniforms=function(){return I===void 0&&T(this),I};let S;this.getAttributes=function(){return S===void 0&&T(this),S};let A=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=s.getProgramParameter(_,Qx)),A},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=tv++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=w,this.fragmentShader=M,this}let vv=0;class yv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Mv(t),e.set(t,n)),n}}class Mv{constructor(t){this.id=vv++,this.code=t,this.usedTimes=0}}function Sv(i,t,e,n,s,r,o){const a=new Af,c=new yv,u=new Set,h=[],l=s.logarithmicDepthBuffer,d=s.vertexTextures;let f=s.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(S){return u.add(S),S===0?"uv":`uv${S}`}function g(S,A,C,U,P){const O=U.fog,Z=P.geometry,H=S.isMeshStandardMaterial?U.environment:null,X=(S.isMeshStandardMaterial?e:t).get(S.envMap||H),B=X&&X.mapping===306?X.image.height:null,j=p[S.type];S.precision!==null&&(f=s.getMaxPrecision(S.precision),f!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",f,"instead."));const Q=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,it=Q!==void 0?Q.length:0;let ct=0;Z.morphAttributes.position!==void 0&&(ct=1),Z.morphAttributes.normal!==void 0&&(ct=2),Z.morphAttributes.color!==void 0&&(ct=3);let Dt,nt,ot,at;if(j){const G=An[j];Dt=G.vertexShader,nt=G.fragmentShader}else Dt=S.vertexShader,nt=S.fragmentShader,c.update(S),ot=c.getVertexShaderID(S),at=c.getFragmentShaderID(S);const et=i.getRenderTarget(),yt=i.state.buffers.depth.getReversed(),Bt=P.isInstancedMesh===!0,Qt=P.isBatchedMesh===!0,de=!!S.map,se=!!S.matcap,Ce=!!X,F=!!S.aoMap,Ct=!!S.lightMap,qt=!!S.bumpMap,le=!!S.normalMap,It=!!S.displacementMap,ye=!!S.emissiveMap,Kt=!!S.metalnessMap,L=!!S.roughnessMap,R=S.anisotropy>0,J=S.clearcoat>0,lt=S.dispersion>0,Mt=S.iridescence>0,ut=S.sheen>0,ne=S.transmission>0,Lt=R&&!!S.anisotropyMap,ht=J&&!!S.clearcoatMap,dt=J&&!!S.clearcoatNormalMap,bt=J&&!!S.clearcoatRoughnessMap,Vt=Mt&&!!S.iridescenceMap,$t=Mt&&!!S.iridescenceThicknessMap,re=ut&&!!S.sheenColorMap,Wt=ut&&!!S.sheenRoughnessMap,be=!!S.specularMap,pe=!!S.specularColorMap,ge=!!S.specularIntensityMap,K=ne&&!!S.transmissionMap,Ot=ne&&!!S.thicknessMap,rt=!!S.gradientMap,gt=!!S.alphaMap,jt=S.alphaTest>0,Ht=!!S.alphaHash,fe=!!S.extensions;let D=0;S.toneMapped&&(et===null||et.isXRRenderTarget===!0)&&(D=i.toneMapping);const b={shaderID:j,shaderType:S.type,shaderName:S.name,vertexShader:Dt,fragmentShader:nt,defines:S.defines,customVertexShaderID:ot,customFragmentShaderID:at,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:f,batching:Qt,batchingColor:Qt&&P._colorsTexture!==null,instancing:Bt,instancingColor:Bt&&P.instanceColor!==null,instancingMorph:Bt&&P.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:et===null?i.outputColorSpace:et.isXRRenderTarget===!0?et.texture.colorSpace:bn,alphaToCoverage:!!S.alphaToCoverage,map:de,matcap:se,envMap:Ce,envMapMode:Ce&&X.mapping,envMapCubeUVHeight:B,aoMap:F,lightMap:Ct,bumpMap:qt,normalMap:le,displacementMap:d&&It,emissiveMap:ye,normalMapObjectSpace:le&&S.normalMapType===1,normalMapTangentSpace:le&&S.normalMapType===0,metalnessMap:Kt,roughnessMap:L,anisotropy:R,anisotropyMap:Lt,clearcoat:J,clearcoatMap:ht,clearcoatNormalMap:dt,clearcoatRoughnessMap:bt,dispersion:lt,iridescence:Mt,iridescenceMap:Vt,iridescenceThicknessMap:$t,sheen:ut,sheenColorMap:re,sheenRoughnessMap:Wt,specularMap:be,specularColorMap:pe,specularIntensityMap:ge,transmission:ne,transmissionMap:K,thicknessMap:Ot,gradientMap:rt,opaque:S.transparent===!1&&S.blending===1&&S.alphaToCoverage===!1,alphaMap:gt,alphaTest:jt,alphaHash:Ht,combine:S.combine,mapUv:de&&_(S.map.channel),aoMapUv:F&&_(S.aoMap.channel),lightMapUv:Ct&&_(S.lightMap.channel),bumpMapUv:qt&&_(S.bumpMap.channel),normalMapUv:le&&_(S.normalMap.channel),displacementMapUv:It&&_(S.displacementMap.channel),emissiveMapUv:ye&&_(S.emissiveMap.channel),metalnessMapUv:Kt&&_(S.metalnessMap.channel),roughnessMapUv:L&&_(S.roughnessMap.channel),anisotropyMapUv:Lt&&_(S.anisotropyMap.channel),clearcoatMapUv:ht&&_(S.clearcoatMap.channel),clearcoatNormalMapUv:dt&&_(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:bt&&_(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Vt&&_(S.iridescenceMap.channel),iridescenceThicknessMapUv:$t&&_(S.iridescenceThicknessMap.channel),sheenColorMapUv:re&&_(S.sheenColorMap.channel),sheenRoughnessMapUv:Wt&&_(S.sheenRoughnessMap.channel),specularMapUv:be&&_(S.specularMap.channel),specularColorMapUv:pe&&_(S.specularColorMap.channel),specularIntensityMapUv:ge&&_(S.specularIntensityMap.channel),transmissionMapUv:K&&_(S.transmissionMap.channel),thicknessMapUv:Ot&&_(S.thicknessMap.channel),alphaMapUv:gt&&_(S.alphaMap.channel),vertexTangents:!!Z.attributes.tangent&&(le||R),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,pointsUvs:P.isPoints===!0&&!!Z.attributes.uv&&(de||gt),fog:!!O,useFog:S.fog===!0,fogExp2:!!O&&O.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:l,reverseDepthBuffer:yt,skinning:P.isSkinnedMesh===!0,morphTargets:Z.morphAttributes.position!==void 0,morphNormals:Z.morphAttributes.normal!==void 0,morphColors:Z.morphAttributes.color!==void 0,morphTargetsCount:it,morphTextureStride:ct,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&C.length>0,shadowMapType:i.shadowMap.type,toneMapping:D,decodeVideoTexture:de&&S.map.isVideoTexture===!0&&Le.getTransfer(S.map.colorSpace)===Be,decodeVideoTextureEmissive:ye&&S.emissiveMap.isVideoTexture===!0&&Le.getTransfer(S.emissiveMap.colorSpace)===Be,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===2,flipSided:S.side===1,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:fe&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(fe&&S.extensions.multiDraw===!0||Qt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return b.vertexUv1s=u.has(1),b.vertexUv2s=u.has(2),b.vertexUv3s=u.has(3),u.clear(),b}function m(S){const A=[];if(S.shaderID?A.push(S.shaderID):(A.push(S.customVertexShaderID),A.push(S.customFragmentShaderID)),S.defines!==void 0)for(const C in S.defines)A.push(C),A.push(S.defines[C]);return S.isRawShaderMaterial===!1&&(v(A,S),y(A,S),A.push(i.outputColorSpace)),A.push(S.customProgramCacheKey),A.join()}function v(S,A){S.push(A.precision),S.push(A.outputColorSpace),S.push(A.envMapMode),S.push(A.envMapCubeUVHeight),S.push(A.mapUv),S.push(A.alphaMapUv),S.push(A.lightMapUv),S.push(A.aoMapUv),S.push(A.bumpMapUv),S.push(A.normalMapUv),S.push(A.displacementMapUv),S.push(A.emissiveMapUv),S.push(A.metalnessMapUv),S.push(A.roughnessMapUv),S.push(A.anisotropyMapUv),S.push(A.clearcoatMapUv),S.push(A.clearcoatNormalMapUv),S.push(A.clearcoatRoughnessMapUv),S.push(A.iridescenceMapUv),S.push(A.iridescenceThicknessMapUv),S.push(A.sheenColorMapUv),S.push(A.sheenRoughnessMapUv),S.push(A.specularMapUv),S.push(A.specularColorMapUv),S.push(A.specularIntensityMapUv),S.push(A.transmissionMapUv),S.push(A.thicknessMapUv),S.push(A.combine),S.push(A.fogExp2),S.push(A.sizeAttenuation),S.push(A.morphTargetsCount),S.push(A.morphAttributeCount),S.push(A.numDirLights),S.push(A.numPointLights),S.push(A.numSpotLights),S.push(A.numSpotLightMaps),S.push(A.numHemiLights),S.push(A.numRectAreaLights),S.push(A.numDirLightShadows),S.push(A.numPointLightShadows),S.push(A.numSpotLightShadows),S.push(A.numSpotLightShadowsWithMaps),S.push(A.numLightProbes),S.push(A.shadowMapType),S.push(A.toneMapping),S.push(A.numClippingPlanes),S.push(A.numClipIntersection),S.push(A.depthPacking)}function y(S,A){a.disableAll(),A.supportsVertexTextures&&a.enable(0),A.instancing&&a.enable(1),A.instancingColor&&a.enable(2),A.instancingMorph&&a.enable(3),A.matcap&&a.enable(4),A.envMap&&a.enable(5),A.normalMapObjectSpace&&a.enable(6),A.normalMapTangentSpace&&a.enable(7),A.clearcoat&&a.enable(8),A.iridescence&&a.enable(9),A.alphaTest&&a.enable(10),A.vertexColors&&a.enable(11),A.vertexAlphas&&a.enable(12),A.vertexUv1s&&a.enable(13),A.vertexUv2s&&a.enable(14),A.vertexUv3s&&a.enable(15),A.vertexTangents&&a.enable(16),A.anisotropy&&a.enable(17),A.alphaHash&&a.enable(18),A.batching&&a.enable(19),A.dispersion&&a.enable(20),A.batchingColor&&a.enable(21),S.push(a.mask),a.disableAll(),A.fog&&a.enable(0),A.useFog&&a.enable(1),A.flatShading&&a.enable(2),A.logarithmicDepthBuffer&&a.enable(3),A.reverseDepthBuffer&&a.enable(4),A.skinning&&a.enable(5),A.morphTargets&&a.enable(6),A.morphNormals&&a.enable(7),A.morphColors&&a.enable(8),A.premultipliedAlpha&&a.enable(9),A.shadowMapEnabled&&a.enable(10),A.doubleSided&&a.enable(11),A.flipSided&&a.enable(12),A.useDepthPacking&&a.enable(13),A.dithering&&a.enable(14),A.transmission&&a.enable(15),A.sheen&&a.enable(16),A.opaque&&a.enable(17),A.pointsUvs&&a.enable(18),A.decodeVideoTexture&&a.enable(19),A.decodeVideoTextureEmissive&&a.enable(20),A.alphaToCoverage&&a.enable(21),S.push(a.mask)}function x(S){const A=p[S.type];let C;if(A){const U=An[A];C=qc.clone(U.uniforms)}else C=S.uniforms;return C}function w(S,A){let C;for(let U=0,P=h.length;U<P;U++){const O=h[U];if(O.cacheKey===A){C=O,++C.usedTimes;break}}return C===void 0&&(C=new xv(i,A,S,r),h.push(C)),C}function M(S){if(--S.usedTimes===0){const A=h.indexOf(S);h[A]=h[h.length-1],h.pop(),S.destroy()}}function T(S){c.remove(S)}function I(){c.dispose()}return{getParameters:g,getProgramCacheKey:m,getUniforms:x,acquireProgram:w,releaseProgram:M,releaseShaderCache:T,programs:h,dispose:I}}function Av(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Ev(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Bu(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Gu(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(l,d,f,p,_,g){let m=i[t];return m===void 0?(m={id:l.id,object:l,geometry:d,material:f,groupOrder:p,renderOrder:l.renderOrder,z:_,group:g},i[t]=m):(m.id=l.id,m.object=l,m.geometry=d,m.material=f,m.groupOrder=p,m.renderOrder=l.renderOrder,m.z=_,m.group=g),t++,m}function a(l,d,f,p,_,g){const m=o(l,d,f,p,_,g);f.transmission>0?n.push(m):f.transparent===!0?s.push(m):e.push(m)}function c(l,d,f,p,_,g){const m=o(l,d,f,p,_,g);f.transmission>0?n.unshift(m):f.transparent===!0?s.unshift(m):e.unshift(m)}function u(l,d){e.length>1&&e.sort(l||Ev),n.length>1&&n.sort(d||Bu),s.length>1&&s.sort(d||Bu)}function h(){for(let l=t,d=i.length;l<d;l++){const f=i[l];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:c,finish:h,sort:u}}function Tv(){let i=new WeakMap;function t(n,s){const r=i.get(n);let o;return r===void 0?(o=new Gu,i.set(n,[o])):s>=r.length?(o=new Gu,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function wv(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new N,color:new he};break;case"SpotLight":e={position:new N,direction:new N,color:new he,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new N,color:new he,distance:0,decay:0};break;case"HemisphereLight":e={direction:new N,skyColor:new he,groundColor:new he};break;case"RectAreaLight":e={color:new he,position:new N,halfWidth:new N,halfHeight:new N};break}return i[t.id]=e,e}}}function Rv(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new oe};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new oe};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new oe,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let Cv=0;function Iv(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Pv(i){const t=new wv,e=Rv(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)n.probe.push(new N);const s=new N,r=new _e,o=new _e;function a(u){let h=0,l=0,d=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let f=0,p=0,_=0,g=0,m=0,v=0,y=0,x=0,w=0,M=0,T=0;u.sort(Iv);for(let S=0,A=u.length;S<A;S++){const C=u[S],U=C.color,P=C.intensity,O=C.distance,Z=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)h+=U.r*P,l+=U.g*P,d+=U.b*P;else if(C.isLightProbe){for(let H=0;H<9;H++)n.probe[H].addScaledVector(C.sh.coefficients[H],P);T++}else if(C.isDirectionalLight){const H=t.get(C);if(H.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const X=C.shadow,B=e.get(C);B.shadowIntensity=X.intensity,B.shadowBias=X.bias,B.shadowNormalBias=X.normalBias,B.shadowRadius=X.radius,B.shadowMapSize=X.mapSize,n.directionalShadow[f]=B,n.directionalShadowMap[f]=Z,n.directionalShadowMatrix[f]=C.shadow.matrix,v++}n.directional[f]=H,f++}else if(C.isSpotLight){const H=t.get(C);H.position.setFromMatrixPosition(C.matrixWorld),H.color.copy(U).multiplyScalar(P),H.distance=O,H.coneCos=Math.cos(C.angle),H.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),H.decay=C.decay,n.spot[_]=H;const X=C.shadow;if(C.map&&(n.spotLightMap[w]=C.map,w++,X.updateMatrices(C),C.castShadow&&M++),n.spotLightMatrix[_]=X.matrix,C.castShadow){const B=e.get(C);B.shadowIntensity=X.intensity,B.shadowBias=X.bias,B.shadowNormalBias=X.normalBias,B.shadowRadius=X.radius,B.shadowMapSize=X.mapSize,n.spotShadow[_]=B,n.spotShadowMap[_]=Z,x++}_++}else if(C.isRectAreaLight){const H=t.get(C);H.color.copy(U).multiplyScalar(P),H.halfWidth.set(C.width*.5,0,0),H.halfHeight.set(0,C.height*.5,0),n.rectArea[g]=H,g++}else if(C.isPointLight){const H=t.get(C);if(H.color.copy(C.color).multiplyScalar(C.intensity),H.distance=C.distance,H.decay=C.decay,C.castShadow){const X=C.shadow,B=e.get(C);B.shadowIntensity=X.intensity,B.shadowBias=X.bias,B.shadowNormalBias=X.normalBias,B.shadowRadius=X.radius,B.shadowMapSize=X.mapSize,B.shadowCameraNear=X.camera.near,B.shadowCameraFar=X.camera.far,n.pointShadow[p]=B,n.pointShadowMap[p]=Z,n.pointShadowMatrix[p]=C.shadow.matrix,y++}n.point[p]=H,p++}else if(C.isHemisphereLight){const H=t.get(C);H.skyColor.copy(C.color).multiplyScalar(P),H.groundColor.copy(C.groundColor).multiplyScalar(P),n.hemi[m]=H,m++}}g>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=zt.LTC_FLOAT_1,n.rectAreaLTC2=zt.LTC_FLOAT_2):(n.rectAreaLTC1=zt.LTC_HALF_1,n.rectAreaLTC2=zt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=l,n.ambient[2]=d;const I=n.hash;(I.directionalLength!==f||I.pointLength!==p||I.spotLength!==_||I.rectAreaLength!==g||I.hemiLength!==m||I.numDirectionalShadows!==v||I.numPointShadows!==y||I.numSpotShadows!==x||I.numSpotMaps!==w||I.numLightProbes!==T)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=g,n.point.length=p,n.hemi.length=m,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=v,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=x+w-M,n.spotLightMap.length=w,n.numSpotLightShadowsWithMaps=M,n.numLightProbes=T,I.directionalLength=f,I.pointLength=p,I.spotLength=_,I.rectAreaLength=g,I.hemiLength=m,I.numDirectionalShadows=v,I.numPointShadows=y,I.numSpotShadows=x,I.numSpotMaps=w,I.numLightProbes=T,n.version=Cv++)}function c(u,h){let l=0,d=0,f=0,p=0,_=0;const g=h.matrixWorldInverse;for(let m=0,v=u.length;m<v;m++){const y=u[m];if(y.isDirectionalLight){const x=n.directional[l];x.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(g),l++}else if(y.isSpotLight){const x=n.spot[f];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(g),x.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(g),f++}else if(y.isRectAreaLight){const x=n.rectArea[p];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(g),o.identity(),r.copy(y.matrixWorld),r.premultiply(g),o.extractRotation(r),x.halfWidth.set(y.width*.5,0,0),x.halfHeight.set(0,y.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),p++}else if(y.isPointLight){const x=n.point[d];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(g),d++}else if(y.isHemisphereLight){const x=n.hemi[_];x.direction.setFromMatrixPosition(y.matrixWorld),x.direction.transformDirection(g),_++}}}return{setup:a,setupView:c,state:n}}function zu(i){const t=new Pv(i),e=[],n=[];function s(h){u.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function c(h){t.setupView(e,h)}const u={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:u,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function Lv(i){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new zu(i),t.set(s,[a])):r>=o.length?(a=new zu(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}const Dv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Fv=`uniform sampler2D shadow_pass;
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
}`;function Nv(i,t,e){let n=new Zc;const s=new oe,r=new oe,o=new Se,a=new Cg({depthPacking:3201}),c=new Ig,u={},h=e.maxTextureSize,l={0:1,1:0,2:2},d=new xi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new oe},radius:{value:4}},vertexShader:Dv,fragmentShader:Fv}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const p=new Xe;p.setAttribute("position",new De(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Re(p,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let m=this.type;this.render=function(M,T,I){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||M.length===0)return;const S=i.getRenderTarget(),A=i.getActiveCubeFace(),C=i.getActiveMipmapLevel(),U=i.state;U.setBlending(0),U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const P=m!==3&&this.type===3,O=m===3&&this.type!==3;for(let Z=0,H=M.length;Z<H;Z++){const X=M[Z],B=X.shadow;if(B===void 0){console.warn("THREE.WebGLShadowMap:",X,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;s.copy(B.mapSize);const j=B.getFrameExtents();if(s.multiply(j),r.copy(B.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/j.x),s.x=r.x*j.x,B.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/j.y),s.y=r.y*j.y,B.mapSize.y=r.y)),B.map===null||P===!0||O===!0){const it=this.type!==3?{minFilter:1003,magFilter:1003}:{};B.map!==null&&B.map.dispose(),B.map=new ns(s.x,s.y,it),B.map.texture.name=X.name+".shadowMap",B.camera.updateProjectionMatrix()}i.setRenderTarget(B.map),i.clear();const Q=B.getViewportCount();for(let it=0;it<Q;it++){const ct=B.getViewport(it);o.set(r.x*ct.x,r.y*ct.y,r.x*ct.z,r.y*ct.w),U.viewport(o),B.updateMatrices(X,it),n=B.getFrustum(),x(T,I,B.camera,X,this.type)}B.isPointLightShadow!==!0&&this.type===3&&v(B,I),B.needsUpdate=!1}m=this.type,g.needsUpdate=!1,i.setRenderTarget(S,A,C)};function v(M,T){const I=t.update(_);d.defines.VSM_SAMPLES!==M.blurSamples&&(d.defines.VSM_SAMPLES=M.blurSamples,f.defines.VSM_SAMPLES=M.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),M.mapPass===null&&(M.mapPass=new ns(s.x,s.y)),d.uniforms.shadow_pass.value=M.map.texture,d.uniforms.resolution.value=M.mapSize,d.uniforms.radius.value=M.radius,i.setRenderTarget(M.mapPass),i.clear(),i.renderBufferDirect(T,null,I,d,_,null),f.uniforms.shadow_pass.value=M.mapPass.texture,f.uniforms.resolution.value=M.mapSize,f.uniforms.radius.value=M.radius,i.setRenderTarget(M.map),i.clear(),i.renderBufferDirect(T,null,I,f,_,null)}function y(M,T,I,S){let A=null;const C=I.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(C!==void 0)A=C;else if(A=I.isPointLight===!0?c:a,i.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const U=A.uuid,P=T.uuid;let O=u[U];O===void 0&&(O={},u[U]=O);let Z=O[P];Z===void 0&&(Z=A.clone(),O[P]=Z,T.addEventListener("dispose",w)),A=Z}if(A.visible=T.visible,A.wireframe=T.wireframe,S===3?A.side=T.shadowSide!==null?T.shadowSide:T.side:A.side=T.shadowSide!==null?T.shadowSide:l[T.side],A.alphaMap=T.alphaMap,A.alphaTest=T.alphaTest,A.map=T.map,A.clipShadows=T.clipShadows,A.clippingPlanes=T.clippingPlanes,A.clipIntersection=T.clipIntersection,A.displacementMap=T.displacementMap,A.displacementScale=T.displacementScale,A.displacementBias=T.displacementBias,A.wireframeLinewidth=T.wireframeLinewidth,A.linewidth=T.linewidth,I.isPointLight===!0&&A.isMeshDistanceMaterial===!0){const U=i.properties.get(A);U.light=I}return A}function x(M,T,I,S,A){if(M.visible===!1)return;if(M.layers.test(T.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&A===3)&&(!M.frustumCulled||n.intersectsObject(M))){M.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,M.matrixWorld);const P=t.update(M),O=M.material;if(Array.isArray(O)){const Z=P.groups;for(let H=0,X=Z.length;H<X;H++){const B=Z[H],j=O[B.materialIndex];if(j&&j.visible){const Q=y(M,j,S,A);M.onBeforeShadow(i,M,T,I,P,Q,B),i.renderBufferDirect(I,null,P,Q,M,B),M.onAfterShadow(i,M,T,I,P,Q,B)}}}else if(O.visible){const Z=y(M,O,S,A);M.onBeforeShadow(i,M,T,I,P,Z,null),i.renderBufferDirect(I,null,P,Z,M,null),M.onAfterShadow(i,M,T,I,P,Z,null)}}const U=M.children;for(let P=0,O=U.length;P<O;P++)x(U[P],T,I,S,A)}function w(M){M.target.removeEventListener("dispose",w);for(const I in u){const S=u[I],A=M.target.uuid;A in S&&(S[A].dispose(),delete S[A])}}}const Uv={0:1,2:6,4:7,3:5,1:0,6:2,7:4,5:3};function Ov(i,t){function e(){let K=!1;const Ot=new Se;let rt=null;const gt=new Se(0,0,0,0);return{setMask:function(jt){rt!==jt&&!K&&(i.colorMask(jt,jt,jt,jt),rt=jt)},setLocked:function(jt){K=jt},setClear:function(jt,Ht,fe,D,b){b===!0&&(jt*=D,Ht*=D,fe*=D),Ot.set(jt,Ht,fe,D),gt.equals(Ot)===!1&&(i.clearColor(jt,Ht,fe,D),gt.copy(Ot))},reset:function(){K=!1,rt=null,gt.set(-1,0,0,0)}}}function n(){let K=!1,Ot=!1,rt=null,gt=null,jt=null;return{setReversed:function(Ht){if(Ot!==Ht){const fe=t.get("EXT_clip_control");Ot?fe.clipControlEXT(fe.LOWER_LEFT_EXT,fe.ZERO_TO_ONE_EXT):fe.clipControlEXT(fe.LOWER_LEFT_EXT,fe.NEGATIVE_ONE_TO_ONE_EXT);const D=jt;jt=null,this.setClear(D)}Ot=Ht},getReversed:function(){return Ot},setTest:function(Ht){Ht?et(i.DEPTH_TEST):yt(i.DEPTH_TEST)},setMask:function(Ht){rt!==Ht&&!K&&(i.depthMask(Ht),rt=Ht)},setFunc:function(Ht){if(Ot&&(Ht=Uv[Ht]),gt!==Ht){switch(Ht){case 0:i.depthFunc(i.NEVER);break;case 1:i.depthFunc(i.ALWAYS);break;case 2:i.depthFunc(i.LESS);break;case 3:i.depthFunc(i.LEQUAL);break;case 4:i.depthFunc(i.EQUAL);break;case 5:i.depthFunc(i.GEQUAL);break;case 6:i.depthFunc(i.GREATER);break;case 7:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}gt=Ht}},setLocked:function(Ht){K=Ht},setClear:function(Ht){jt!==Ht&&(Ot&&(Ht=1-Ht),i.clearDepth(Ht),jt=Ht)},reset:function(){K=!1,rt=null,gt=null,jt=null,Ot=!1}}}function s(){let K=!1,Ot=null,rt=null,gt=null,jt=null,Ht=null,fe=null,D=null,b=null;return{setTest:function(G){K||(G?et(i.STENCIL_TEST):yt(i.STENCIL_TEST))},setMask:function(G){Ot!==G&&!K&&(i.stencilMask(G),Ot=G)},setFunc:function(G,Y,z){(rt!==G||gt!==Y||jt!==z)&&(i.stencilFunc(G,Y,z),rt=G,gt=Y,jt=z)},setOp:function(G,Y,z){(Ht!==G||fe!==Y||D!==z)&&(i.stencilOp(G,Y,z),Ht=G,fe=Y,D=z)},setLocked:function(G){K=G},setClear:function(G){b!==G&&(i.clearStencil(G),b=G)},reset:function(){K=!1,Ot=null,rt=null,gt=null,jt=null,Ht=null,fe=null,D=null,b=null}}}const r=new e,o=new n,a=new s,c=new WeakMap,u=new WeakMap;let h={},l={},d=new WeakMap,f=[],p=null,_=!1,g=null,m=null,v=null,y=null,x=null,w=null,M=null,T=new he(0,0,0),I=0,S=!1,A=null,C=null,U=null,P=null,O=null;const Z=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,X=0;const B=i.getParameter(i.VERSION);B.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(B)[1]),H=X>=1):B.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),H=X>=2);let j=null,Q={};const it=i.getParameter(i.SCISSOR_BOX),ct=i.getParameter(i.VIEWPORT),Dt=new Se().fromArray(it),nt=new Se().fromArray(ct);function ot(K,Ot,rt,gt){const jt=new Uint8Array(4),Ht=i.createTexture();i.bindTexture(K,Ht),i.texParameteri(K,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(K,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let fe=0;fe<rt;fe++)K===i.TEXTURE_3D||K===i.TEXTURE_2D_ARRAY?i.texImage3D(Ot,0,i.RGBA,1,1,gt,0,i.RGBA,i.UNSIGNED_BYTE,jt):i.texImage2D(Ot+fe,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,jt);return Ht}const at={};at[i.TEXTURE_2D]=ot(i.TEXTURE_2D,i.TEXTURE_2D,1),at[i.TEXTURE_CUBE_MAP]=ot(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),at[i.TEXTURE_2D_ARRAY]=ot(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),at[i.TEXTURE_3D]=ot(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),et(i.DEPTH_TEST),o.setFunc(3),qt(!1),le(1),et(i.CULL_FACE),F(0);function et(K){h[K]!==!0&&(i.enable(K),h[K]=!0)}function yt(K){h[K]!==!1&&(i.disable(K),h[K]=!1)}function Bt(K,Ot){return l[K]!==Ot?(i.bindFramebuffer(K,Ot),l[K]=Ot,K===i.DRAW_FRAMEBUFFER&&(l[i.FRAMEBUFFER]=Ot),K===i.FRAMEBUFFER&&(l[i.DRAW_FRAMEBUFFER]=Ot),!0):!1}function Qt(K,Ot){let rt=f,gt=!1;if(K){rt=d.get(Ot),rt===void 0&&(rt=[],d.set(Ot,rt));const jt=K.textures;if(rt.length!==jt.length||rt[0]!==i.COLOR_ATTACHMENT0){for(let Ht=0,fe=jt.length;Ht<fe;Ht++)rt[Ht]=i.COLOR_ATTACHMENT0+Ht;rt.length=jt.length,gt=!0}}else rt[0]!==i.BACK&&(rt[0]=i.BACK,gt=!0);gt&&i.drawBuffers(rt)}function de(K){return p!==K?(i.useProgram(K),p=K,!0):!1}const se={100:i.FUNC_ADD,101:i.FUNC_SUBTRACT,102:i.FUNC_REVERSE_SUBTRACT};se[103]=i.MIN,se[104]=i.MAX;const Ce={200:i.ZERO,201:i.ONE,202:i.SRC_COLOR,204:i.SRC_ALPHA,210:i.SRC_ALPHA_SATURATE,208:i.DST_COLOR,206:i.DST_ALPHA,203:i.ONE_MINUS_SRC_COLOR,205:i.ONE_MINUS_SRC_ALPHA,209:i.ONE_MINUS_DST_COLOR,207:i.ONE_MINUS_DST_ALPHA,211:i.CONSTANT_COLOR,212:i.ONE_MINUS_CONSTANT_COLOR,213:i.CONSTANT_ALPHA,214:i.ONE_MINUS_CONSTANT_ALPHA};function F(K,Ot,rt,gt,jt,Ht,fe,D,b,G){if(K===0){_===!0&&(yt(i.BLEND),_=!1);return}if(_===!1&&(et(i.BLEND),_=!0),K!==5){if(K!==g||G!==S){if((m!==100||x!==100)&&(i.blendEquation(i.FUNC_ADD),m=100,x=100),G)switch(K){case 1:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case 2:i.blendFunc(i.ONE,i.ONE);break;case 3:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case 4:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",K);break}else switch(K){case 1:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case 2:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case 3:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case 4:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",K);break}v=null,y=null,w=null,M=null,T.set(0,0,0),I=0,g=K,S=G}return}jt=jt||Ot,Ht=Ht||rt,fe=fe||gt,(Ot!==m||jt!==x)&&(i.blendEquationSeparate(se[Ot],se[jt]),m=Ot,x=jt),(rt!==v||gt!==y||Ht!==w||fe!==M)&&(i.blendFuncSeparate(Ce[rt],Ce[gt],Ce[Ht],Ce[fe]),v=rt,y=gt,w=Ht,M=fe),(D.equals(T)===!1||b!==I)&&(i.blendColor(D.r,D.g,D.b,b),T.copy(D),I=b),g=K,S=!1}function Ct(K,Ot){K.side===2?yt(i.CULL_FACE):et(i.CULL_FACE);let rt=K.side===1;Ot&&(rt=!rt),qt(rt),K.blending===1&&K.transparent===!1?F(0):F(K.blending,K.blendEquation,K.blendSrc,K.blendDst,K.blendEquationAlpha,K.blendSrcAlpha,K.blendDstAlpha,K.blendColor,K.blendAlpha,K.premultipliedAlpha),o.setFunc(K.depthFunc),o.setTest(K.depthTest),o.setMask(K.depthWrite),r.setMask(K.colorWrite);const gt=K.stencilWrite;a.setTest(gt),gt&&(a.setMask(K.stencilWriteMask),a.setFunc(K.stencilFunc,K.stencilRef,K.stencilFuncMask),a.setOp(K.stencilFail,K.stencilZFail,K.stencilZPass)),ye(K.polygonOffset,K.polygonOffsetFactor,K.polygonOffsetUnits),K.alphaToCoverage===!0?et(i.SAMPLE_ALPHA_TO_COVERAGE):yt(i.SAMPLE_ALPHA_TO_COVERAGE)}function qt(K){A!==K&&(K?i.frontFace(i.CW):i.frontFace(i.CCW),A=K)}function le(K){K!==0?(et(i.CULL_FACE),K!==C&&(K===1?i.cullFace(i.BACK):K===2?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):yt(i.CULL_FACE),C=K}function It(K){K!==U&&(H&&i.lineWidth(K),U=K)}function ye(K,Ot,rt){K?(et(i.POLYGON_OFFSET_FILL),(P!==Ot||O!==rt)&&(i.polygonOffset(Ot,rt),P=Ot,O=rt)):yt(i.POLYGON_OFFSET_FILL)}function Kt(K){K?et(i.SCISSOR_TEST):yt(i.SCISSOR_TEST)}function L(K){K===void 0&&(K=i.TEXTURE0+Z-1),j!==K&&(i.activeTexture(K),j=K)}function R(K,Ot,rt){rt===void 0&&(j===null?rt=i.TEXTURE0+Z-1:rt=j);let gt=Q[rt];gt===void 0&&(gt={type:void 0,texture:void 0},Q[rt]=gt),(gt.type!==K||gt.texture!==Ot)&&(j!==rt&&(i.activeTexture(rt),j=rt),i.bindTexture(K,Ot||at[K]),gt.type=K,gt.texture=Ot)}function J(){const K=Q[j];K!==void 0&&K.type!==void 0&&(i.bindTexture(K.type,null),K.type=void 0,K.texture=void 0)}function lt(){try{i.compressedTexImage2D.apply(i,arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function Mt(){try{i.compressedTexImage3D.apply(i,arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function ut(){try{i.texSubImage2D.apply(i,arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function ne(){try{i.texSubImage3D.apply(i,arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function Lt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function ht(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function dt(){try{i.texStorage2D.apply(i,arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function bt(){try{i.texStorage3D.apply(i,arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function Vt(){try{i.texImage2D.apply(i,arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function $t(){try{i.texImage3D.apply(i,arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function re(K){Dt.equals(K)===!1&&(i.scissor(K.x,K.y,K.z,K.w),Dt.copy(K))}function Wt(K){nt.equals(K)===!1&&(i.viewport(K.x,K.y,K.z,K.w),nt.copy(K))}function be(K,Ot){let rt=u.get(Ot);rt===void 0&&(rt=new WeakMap,u.set(Ot,rt));let gt=rt.get(K);gt===void 0&&(gt=i.getUniformBlockIndex(Ot,K.name),rt.set(K,gt))}function pe(K,Ot){const gt=u.get(Ot).get(K);c.get(Ot)!==gt&&(i.uniformBlockBinding(Ot,gt,K.__bindingPointIndex),c.set(Ot,gt))}function ge(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},j=null,Q={},l={},d=new WeakMap,f=[],p=null,_=!1,g=null,m=null,v=null,y=null,x=null,w=null,M=null,T=new he(0,0,0),I=0,S=!1,A=null,C=null,U=null,P=null,O=null,Dt.set(0,0,i.canvas.width,i.canvas.height),nt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:et,disable:yt,bindFramebuffer:Bt,drawBuffers:Qt,useProgram:de,setBlending:F,setMaterial:Ct,setFlipSided:qt,setCullFace:le,setLineWidth:It,setPolygonOffset:ye,setScissorTest:Kt,activeTexture:L,bindTexture:R,unbindTexture:J,compressedTexImage2D:lt,compressedTexImage3D:Mt,texImage2D:Vt,texImage3D:$t,updateUBOMapping:be,uniformBlockBinding:pe,texStorage2D:dt,texStorage3D:bt,texSubImage2D:ut,texSubImage3D:ne,compressedTexSubImage2D:Lt,compressedTexSubImage3D:ht,scissor:re,viewport:Wt,reset:ge}}function kv(i,t,e,n,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new oe,h=new WeakMap;let l;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(L,R){return f?new OffscreenCanvas(L,R):Mr("canvas")}function _(L,R,J){let lt=1;const Mt=Kt(L);if((Mt.width>J||Mt.height>J)&&(lt=J/Math.max(Mt.width,Mt.height)),lt<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const ut=Math.floor(lt*Mt.width),ne=Math.floor(lt*Mt.height);l===void 0&&(l=p(ut,ne));const Lt=R?p(ut,ne):l;return Lt.width=ut,Lt.height=ne,Lt.getContext("2d").drawImage(L,0,0,ut,ne),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Mt.width+"x"+Mt.height+") to ("+ut+"x"+ne+")."),Lt}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Mt.width+"x"+Mt.height+")."),L;return L}function g(L){return L.generateMipmaps}function m(L){i.generateMipmap(L)}function v(L){return L.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?i.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function y(L,R,J,lt,Mt=!1){if(L!==null){if(i[L]!==void 0)return i[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let ut=R;if(R===i.RED&&(J===i.FLOAT&&(ut=i.R32F),J===i.HALF_FLOAT&&(ut=i.R16F),J===i.UNSIGNED_BYTE&&(ut=i.R8)),R===i.RED_INTEGER&&(J===i.UNSIGNED_BYTE&&(ut=i.R8UI),J===i.UNSIGNED_SHORT&&(ut=i.R16UI),J===i.UNSIGNED_INT&&(ut=i.R32UI),J===i.BYTE&&(ut=i.R8I),J===i.SHORT&&(ut=i.R16I),J===i.INT&&(ut=i.R32I)),R===i.RG&&(J===i.FLOAT&&(ut=i.RG32F),J===i.HALF_FLOAT&&(ut=i.RG16F),J===i.UNSIGNED_BYTE&&(ut=i.RG8)),R===i.RG_INTEGER&&(J===i.UNSIGNED_BYTE&&(ut=i.RG8UI),J===i.UNSIGNED_SHORT&&(ut=i.RG16UI),J===i.UNSIGNED_INT&&(ut=i.RG32UI),J===i.BYTE&&(ut=i.RG8I),J===i.SHORT&&(ut=i.RG16I),J===i.INT&&(ut=i.RG32I)),R===i.RGB_INTEGER&&(J===i.UNSIGNED_BYTE&&(ut=i.RGB8UI),J===i.UNSIGNED_SHORT&&(ut=i.RGB16UI),J===i.UNSIGNED_INT&&(ut=i.RGB32UI),J===i.BYTE&&(ut=i.RGB8I),J===i.SHORT&&(ut=i.RGB16I),J===i.INT&&(ut=i.RGB32I)),R===i.RGBA_INTEGER&&(J===i.UNSIGNED_BYTE&&(ut=i.RGBA8UI),J===i.UNSIGNED_SHORT&&(ut=i.RGBA16UI),J===i.UNSIGNED_INT&&(ut=i.RGBA32UI),J===i.BYTE&&(ut=i.RGBA8I),J===i.SHORT&&(ut=i.RGBA16I),J===i.INT&&(ut=i.RGBA32I)),R===i.RGB&&J===i.UNSIGNED_INT_5_9_9_9_REV&&(ut=i.RGB9_E5),R===i.RGBA){const ne=Mt?Oo:Le.getTransfer(lt);J===i.FLOAT&&(ut=i.RGBA32F),J===i.HALF_FLOAT&&(ut=i.RGBA16F),J===i.UNSIGNED_BYTE&&(ut=ne===Be?i.SRGB8_ALPHA8:i.RGBA8),J===i.UNSIGNED_SHORT_4_4_4_4&&(ut=i.RGBA4),J===i.UNSIGNED_SHORT_5_5_5_1&&(ut=i.RGB5_A1)}return(ut===i.R16F||ut===i.R32F||ut===i.RG16F||ut===i.RG32F||ut===i.RGBA16F||ut===i.RGBA32F)&&t.get("EXT_color_buffer_float"),ut}function x(L,R){let J;return L?R===null||R===1014||R===1020?J=i.DEPTH24_STENCIL8:R===1015?J=i.DEPTH32F_STENCIL8:R===1012&&(J=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):R===null||R===1014||R===1020?J=i.DEPTH_COMPONENT24:R===1015?J=i.DEPTH_COMPONENT32F:R===1012&&(J=i.DEPTH_COMPONENT16),J}function w(L,R){return g(L)===!0||L.isFramebufferTexture&&L.minFilter!==1003&&L.minFilter!==1006?Math.log2(Math.max(R.width,R.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?R.mipmaps.length:1}function M(L){const R=L.target;R.removeEventListener("dispose",M),I(R),R.isVideoTexture&&h.delete(R)}function T(L){const R=L.target;R.removeEventListener("dispose",T),A(R)}function I(L){const R=n.get(L);if(R.__webglInit===void 0)return;const J=L.source,lt=d.get(J);if(lt){const Mt=lt[R.__cacheKey];Mt.usedTimes--,Mt.usedTimes===0&&S(L),Object.keys(lt).length===0&&d.delete(J)}n.remove(L)}function S(L){const R=n.get(L);i.deleteTexture(R.__webglTexture);const J=L.source,lt=d.get(J);delete lt[R.__cacheKey],o.memory.textures--}function A(L){const R=n.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),n.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let lt=0;lt<6;lt++){if(Array.isArray(R.__webglFramebuffer[lt]))for(let Mt=0;Mt<R.__webglFramebuffer[lt].length;Mt++)i.deleteFramebuffer(R.__webglFramebuffer[lt][Mt]);else i.deleteFramebuffer(R.__webglFramebuffer[lt]);R.__webglDepthbuffer&&i.deleteRenderbuffer(R.__webglDepthbuffer[lt])}else{if(Array.isArray(R.__webglFramebuffer))for(let lt=0;lt<R.__webglFramebuffer.length;lt++)i.deleteFramebuffer(R.__webglFramebuffer[lt]);else i.deleteFramebuffer(R.__webglFramebuffer);if(R.__webglDepthbuffer&&i.deleteRenderbuffer(R.__webglDepthbuffer),R.__webglMultisampledFramebuffer&&i.deleteFramebuffer(R.__webglMultisampledFramebuffer),R.__webglColorRenderbuffer)for(let lt=0;lt<R.__webglColorRenderbuffer.length;lt++)R.__webglColorRenderbuffer[lt]&&i.deleteRenderbuffer(R.__webglColorRenderbuffer[lt]);R.__webglDepthRenderbuffer&&i.deleteRenderbuffer(R.__webglDepthRenderbuffer)}const J=L.textures;for(let lt=0,Mt=J.length;lt<Mt;lt++){const ut=n.get(J[lt]);ut.__webglTexture&&(i.deleteTexture(ut.__webglTexture),o.memory.textures--),n.remove(J[lt])}n.remove(L)}let C=0;function U(){C=0}function P(){const L=C;return L>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+s.maxTextures),C+=1,L}function O(L){const R=[];return R.push(L.wrapS),R.push(L.wrapT),R.push(L.wrapR||0),R.push(L.magFilter),R.push(L.minFilter),R.push(L.anisotropy),R.push(L.internalFormat),R.push(L.format),R.push(L.type),R.push(L.generateMipmaps),R.push(L.premultiplyAlpha),R.push(L.flipY),R.push(L.unpackAlignment),R.push(L.colorSpace),R.join()}function Z(L,R){const J=n.get(L);if(L.isVideoTexture&&It(L),L.isRenderTargetTexture===!1&&L.version>0&&J.__version!==L.version){const lt=L.image;if(lt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(lt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{nt(J,L,R);return}}e.bindTexture(i.TEXTURE_2D,J.__webglTexture,i.TEXTURE0+R)}function H(L,R){const J=n.get(L);if(L.version>0&&J.__version!==L.version){nt(J,L,R);return}e.bindTexture(i.TEXTURE_2D_ARRAY,J.__webglTexture,i.TEXTURE0+R)}function X(L,R){const J=n.get(L);if(L.version>0&&J.__version!==L.version){nt(J,L,R);return}e.bindTexture(i.TEXTURE_3D,J.__webglTexture,i.TEXTURE0+R)}function B(L,R){const J=n.get(L);if(L.version>0&&J.__version!==L.version){ot(J,L,R);return}e.bindTexture(i.TEXTURE_CUBE_MAP,J.__webglTexture,i.TEXTURE0+R)}const j={1e3:i.REPEAT,1001:i.CLAMP_TO_EDGE,1002:i.MIRRORED_REPEAT},Q={1003:i.NEAREST,1004:i.NEAREST_MIPMAP_NEAREST,1005:i.NEAREST_MIPMAP_LINEAR,1006:i.LINEAR,1007:i.LINEAR_MIPMAP_NEAREST,1008:i.LINEAR_MIPMAP_LINEAR},it={512:i.NEVER,519:i.ALWAYS,513:i.LESS,515:i.LEQUAL,514:i.EQUAL,518:i.GEQUAL,516:i.GREATER,517:i.NOTEQUAL};function ct(L,R){if(R.type===1015&&t.has("OES_texture_float_linear")===!1&&(R.magFilter===1006||R.magFilter===1007||R.magFilter===1005||R.magFilter===1008||R.minFilter===1006||R.minFilter===1007||R.minFilter===1005||R.minFilter===1008)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(L,i.TEXTURE_WRAP_S,j[R.wrapS]),i.texParameteri(L,i.TEXTURE_WRAP_T,j[R.wrapT]),(L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY)&&i.texParameteri(L,i.TEXTURE_WRAP_R,j[R.wrapR]),i.texParameteri(L,i.TEXTURE_MAG_FILTER,Q[R.magFilter]),i.texParameteri(L,i.TEXTURE_MIN_FILTER,Q[R.minFilter]),R.compareFunction&&(i.texParameteri(L,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(L,i.TEXTURE_COMPARE_FUNC,it[R.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(R.magFilter===1003||R.minFilter!==1005&&R.minFilter!==1008||R.type===1015&&t.has("OES_texture_float_linear")===!1)return;if(R.anisotropy>1||n.get(R).__currentAnisotropy){const J=t.get("EXT_texture_filter_anisotropic");i.texParameterf(L,J.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(R.anisotropy,s.getMaxAnisotropy())),n.get(R).__currentAnisotropy=R.anisotropy}}}function Dt(L,R){let J=!1;L.__webglInit===void 0&&(L.__webglInit=!0,R.addEventListener("dispose",M));const lt=R.source;let Mt=d.get(lt);Mt===void 0&&(Mt={},d.set(lt,Mt));const ut=O(R);if(ut!==L.__cacheKey){Mt[ut]===void 0&&(Mt[ut]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,J=!0),Mt[ut].usedTimes++;const ne=Mt[L.__cacheKey];ne!==void 0&&(Mt[L.__cacheKey].usedTimes--,ne.usedTimes===0&&S(R)),L.__cacheKey=ut,L.__webglTexture=Mt[ut].texture}return J}function nt(L,R,J){let lt=i.TEXTURE_2D;(R.isDataArrayTexture||R.isCompressedArrayTexture)&&(lt=i.TEXTURE_2D_ARRAY),R.isData3DTexture&&(lt=i.TEXTURE_3D);const Mt=Dt(L,R),ut=R.source;e.bindTexture(lt,L.__webglTexture,i.TEXTURE0+J);const ne=n.get(ut);if(ut.version!==ne.__version||Mt===!0){e.activeTexture(i.TEXTURE0+J);const Lt=Le.getPrimaries(Le.workingColorSpace),ht=R.colorSpace===""?null:Le.getPrimaries(R.colorSpace),dt=R.colorSpace===""||Lt===ht?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,R.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,R.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,dt);let bt=_(R.image,!1,s.maxTextureSize);bt=ye(R,bt);const Vt=r.convert(R.format,R.colorSpace),$t=r.convert(R.type);let re=y(R.internalFormat,Vt,$t,R.colorSpace,R.isVideoTexture);ct(lt,R);let Wt;const be=R.mipmaps,pe=R.isVideoTexture!==!0,ge=ne.__version===void 0||Mt===!0,K=ut.dataReady,Ot=w(R,bt);if(R.isDepthTexture)re=x(R.format===1027,R.type),ge&&(pe?e.texStorage2D(i.TEXTURE_2D,1,re,bt.width,bt.height):e.texImage2D(i.TEXTURE_2D,0,re,bt.width,bt.height,0,Vt,$t,null));else if(R.isDataTexture)if(be.length>0){pe&&ge&&e.texStorage2D(i.TEXTURE_2D,Ot,re,be[0].width,be[0].height);for(let rt=0,gt=be.length;rt<gt;rt++)Wt=be[rt],pe?K&&e.texSubImage2D(i.TEXTURE_2D,rt,0,0,Wt.width,Wt.height,Vt,$t,Wt.data):e.texImage2D(i.TEXTURE_2D,rt,re,Wt.width,Wt.height,0,Vt,$t,Wt.data);R.generateMipmaps=!1}else pe?(ge&&e.texStorage2D(i.TEXTURE_2D,Ot,re,bt.width,bt.height),K&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,bt.width,bt.height,Vt,$t,bt.data)):e.texImage2D(i.TEXTURE_2D,0,re,bt.width,bt.height,0,Vt,$t,bt.data);else if(R.isCompressedTexture)if(R.isCompressedArrayTexture){pe&&ge&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Ot,re,be[0].width,be[0].height,bt.depth);for(let rt=0,gt=be.length;rt<gt;rt++)if(Wt=be[rt],R.format!==1023)if(Vt!==null)if(pe){if(K)if(R.layerUpdates.size>0){const jt=_u(Wt.width,Wt.height,R.format,R.type);for(const Ht of R.layerUpdates){const fe=Wt.data.subarray(Ht*jt/Wt.data.BYTES_PER_ELEMENT,(Ht+1)*jt/Wt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,rt,0,0,Ht,Wt.width,Wt.height,1,Vt,fe)}R.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,rt,0,0,0,Wt.width,Wt.height,bt.depth,Vt,Wt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,rt,re,Wt.width,Wt.height,bt.depth,0,Wt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else pe?K&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,rt,0,0,0,Wt.width,Wt.height,bt.depth,Vt,$t,Wt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,rt,re,Wt.width,Wt.height,bt.depth,0,Vt,$t,Wt.data)}else{pe&&ge&&e.texStorage2D(i.TEXTURE_2D,Ot,re,be[0].width,be[0].height);for(let rt=0,gt=be.length;rt<gt;rt++)Wt=be[rt],R.format!==1023?Vt!==null?pe?K&&e.compressedTexSubImage2D(i.TEXTURE_2D,rt,0,0,Wt.width,Wt.height,Vt,Wt.data):e.compressedTexImage2D(i.TEXTURE_2D,rt,re,Wt.width,Wt.height,0,Wt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):pe?K&&e.texSubImage2D(i.TEXTURE_2D,rt,0,0,Wt.width,Wt.height,Vt,$t,Wt.data):e.texImage2D(i.TEXTURE_2D,rt,re,Wt.width,Wt.height,0,Vt,$t,Wt.data)}else if(R.isDataArrayTexture)if(pe){if(ge&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Ot,re,bt.width,bt.height,bt.depth),K)if(R.layerUpdates.size>0){const rt=_u(bt.width,bt.height,R.format,R.type);for(const gt of R.layerUpdates){const jt=bt.data.subarray(gt*rt/bt.data.BYTES_PER_ELEMENT,(gt+1)*rt/bt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,gt,bt.width,bt.height,1,Vt,$t,jt)}R.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,bt.width,bt.height,bt.depth,Vt,$t,bt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,re,bt.width,bt.height,bt.depth,0,Vt,$t,bt.data);else if(R.isData3DTexture)pe?(ge&&e.texStorage3D(i.TEXTURE_3D,Ot,re,bt.width,bt.height,bt.depth),K&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,bt.width,bt.height,bt.depth,Vt,$t,bt.data)):e.texImage3D(i.TEXTURE_3D,0,re,bt.width,bt.height,bt.depth,0,Vt,$t,bt.data);else if(R.isFramebufferTexture){if(ge)if(pe)e.texStorage2D(i.TEXTURE_2D,Ot,re,bt.width,bt.height);else{let rt=bt.width,gt=bt.height;for(let jt=0;jt<Ot;jt++)e.texImage2D(i.TEXTURE_2D,jt,re,rt,gt,0,Vt,$t,null),rt>>=1,gt>>=1}}else if(be.length>0){if(pe&&ge){const rt=Kt(be[0]);e.texStorage2D(i.TEXTURE_2D,Ot,re,rt.width,rt.height)}for(let rt=0,gt=be.length;rt<gt;rt++)Wt=be[rt],pe?K&&e.texSubImage2D(i.TEXTURE_2D,rt,0,0,Vt,$t,Wt):e.texImage2D(i.TEXTURE_2D,rt,re,Vt,$t,Wt);R.generateMipmaps=!1}else if(pe){if(ge){const rt=Kt(bt);e.texStorage2D(i.TEXTURE_2D,Ot,re,rt.width,rt.height)}K&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Vt,$t,bt)}else e.texImage2D(i.TEXTURE_2D,0,re,Vt,$t,bt);g(R)&&m(lt),ne.__version=ut.version,R.onUpdate&&R.onUpdate(R)}L.__version=R.version}function ot(L,R,J){if(R.image.length!==6)return;const lt=Dt(L,R),Mt=R.source;e.bindTexture(i.TEXTURE_CUBE_MAP,L.__webglTexture,i.TEXTURE0+J);const ut=n.get(Mt);if(Mt.version!==ut.__version||lt===!0){e.activeTexture(i.TEXTURE0+J);const ne=Le.getPrimaries(Le.workingColorSpace),Lt=R.colorSpace===""?null:Le.getPrimaries(R.colorSpace),ht=R.colorSpace===""||ne===Lt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,R.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,R.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ht);const dt=R.isCompressedTexture||R.image[0].isCompressedTexture,bt=R.image[0]&&R.image[0].isDataTexture,Vt=[];for(let gt=0;gt<6;gt++)!dt&&!bt?Vt[gt]=_(R.image[gt],!0,s.maxCubemapSize):Vt[gt]=bt?R.image[gt].image:R.image[gt],Vt[gt]=ye(R,Vt[gt]);const $t=Vt[0],re=r.convert(R.format,R.colorSpace),Wt=r.convert(R.type),be=y(R.internalFormat,re,Wt,R.colorSpace),pe=R.isVideoTexture!==!0,ge=ut.__version===void 0||lt===!0,K=Mt.dataReady;let Ot=w(R,$t);ct(i.TEXTURE_CUBE_MAP,R);let rt;if(dt){pe&&ge&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Ot,be,$t.width,$t.height);for(let gt=0;gt<6;gt++){rt=Vt[gt].mipmaps;for(let jt=0;jt<rt.length;jt++){const Ht=rt[jt];R.format!==1023?re!==null?pe?K&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,jt,0,0,Ht.width,Ht.height,re,Ht.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,jt,be,Ht.width,Ht.height,0,Ht.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):pe?K&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,jt,0,0,Ht.width,Ht.height,re,Wt,Ht.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,jt,be,Ht.width,Ht.height,0,re,Wt,Ht.data)}}}else{if(rt=R.mipmaps,pe&&ge){rt.length>0&&Ot++;const gt=Kt(Vt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Ot,be,gt.width,gt.height)}for(let gt=0;gt<6;gt++)if(bt){pe?K&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,0,0,Vt[gt].width,Vt[gt].height,re,Wt,Vt[gt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,be,Vt[gt].width,Vt[gt].height,0,re,Wt,Vt[gt].data);for(let jt=0;jt<rt.length;jt++){const fe=rt[jt].image[gt].image;pe?K&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,jt+1,0,0,fe.width,fe.height,re,Wt,fe.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,jt+1,be,fe.width,fe.height,0,re,Wt,fe.data)}}else{pe?K&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,0,0,re,Wt,Vt[gt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,be,re,Wt,Vt[gt]);for(let jt=0;jt<rt.length;jt++){const Ht=rt[jt];pe?K&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,jt+1,0,0,re,Wt,Ht.image[gt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,jt+1,be,re,Wt,Ht.image[gt])}}}g(R)&&m(i.TEXTURE_CUBE_MAP),ut.__version=Mt.version,R.onUpdate&&R.onUpdate(R)}L.__version=R.version}function at(L,R,J,lt,Mt,ut){const ne=r.convert(J.format,J.colorSpace),Lt=r.convert(J.type),ht=y(J.internalFormat,ne,Lt,J.colorSpace),dt=n.get(R),bt=n.get(J);if(bt.__renderTarget=R,!dt.__hasExternalTextures){const Vt=Math.max(1,R.width>>ut),$t=Math.max(1,R.height>>ut);Mt===i.TEXTURE_3D||Mt===i.TEXTURE_2D_ARRAY?e.texImage3D(Mt,ut,ht,Vt,$t,R.depth,0,ne,Lt,null):e.texImage2D(Mt,ut,ht,Vt,$t,0,ne,Lt,null)}e.bindFramebuffer(i.FRAMEBUFFER,L),le(R)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,lt,Mt,bt.__webglTexture,0,qt(R)):(Mt===i.TEXTURE_2D||Mt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Mt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,lt,Mt,bt.__webglTexture,ut),e.bindFramebuffer(i.FRAMEBUFFER,null)}function et(L,R,J){if(i.bindRenderbuffer(i.RENDERBUFFER,L),R.depthBuffer){const lt=R.depthTexture,Mt=lt&&lt.isDepthTexture?lt.type:null,ut=x(R.stencilBuffer,Mt),ne=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Lt=qt(R);le(R)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Lt,ut,R.width,R.height):J?i.renderbufferStorageMultisample(i.RENDERBUFFER,Lt,ut,R.width,R.height):i.renderbufferStorage(i.RENDERBUFFER,ut,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ne,i.RENDERBUFFER,L)}else{const lt=R.textures;for(let Mt=0;Mt<lt.length;Mt++){const ut=lt[Mt],ne=r.convert(ut.format,ut.colorSpace),Lt=r.convert(ut.type),ht=y(ut.internalFormat,ne,Lt,ut.colorSpace),dt=qt(R);J&&le(R)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,dt,ht,R.width,R.height):le(R)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,dt,ht,R.width,R.height):i.renderbufferStorage(i.RENDERBUFFER,ht,R.width,R.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function yt(L,R){if(R&&R.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,L),!(R.depthTexture&&R.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const lt=n.get(R.depthTexture);lt.__renderTarget=R,(!lt.__webglTexture||R.depthTexture.image.width!==R.width||R.depthTexture.image.height!==R.height)&&(R.depthTexture.image.width=R.width,R.depthTexture.image.height=R.height,R.depthTexture.needsUpdate=!0),Z(R.depthTexture,0);const Mt=lt.__webglTexture,ut=qt(R);if(R.depthTexture.format===1026)le(R)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Mt,0,ut):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Mt,0);else if(R.depthTexture.format===1027)le(R)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Mt,0,ut):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Mt,0);else throw new Error("Unknown depthTexture format")}function Bt(L){const R=n.get(L),J=L.isWebGLCubeRenderTarget===!0;if(R.__boundDepthTexture!==L.depthTexture){const lt=L.depthTexture;if(R.__depthDisposeCallback&&R.__depthDisposeCallback(),lt){const Mt=()=>{delete R.__boundDepthTexture,delete R.__depthDisposeCallback,lt.removeEventListener("dispose",Mt)};lt.addEventListener("dispose",Mt),R.__depthDisposeCallback=Mt}R.__boundDepthTexture=lt}if(L.depthTexture&&!R.__autoAllocateDepthBuffer){if(J)throw new Error("target.depthTexture not supported in Cube render targets");yt(R.__webglFramebuffer,L)}else if(J){R.__webglDepthbuffer=[];for(let lt=0;lt<6;lt++)if(e.bindFramebuffer(i.FRAMEBUFFER,R.__webglFramebuffer[lt]),R.__webglDepthbuffer[lt]===void 0)R.__webglDepthbuffer[lt]=i.createRenderbuffer(),et(R.__webglDepthbuffer[lt],L,!1);else{const Mt=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ut=R.__webglDepthbuffer[lt];i.bindRenderbuffer(i.RENDERBUFFER,ut),i.framebufferRenderbuffer(i.FRAMEBUFFER,Mt,i.RENDERBUFFER,ut)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,R.__webglFramebuffer),R.__webglDepthbuffer===void 0)R.__webglDepthbuffer=i.createRenderbuffer(),et(R.__webglDepthbuffer,L,!1);else{const lt=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Mt=R.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Mt),i.framebufferRenderbuffer(i.FRAMEBUFFER,lt,i.RENDERBUFFER,Mt)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Qt(L,R,J){const lt=n.get(L);R!==void 0&&at(lt.__webglFramebuffer,L,L.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),J!==void 0&&Bt(L)}function de(L){const R=L.texture,J=n.get(L),lt=n.get(R);L.addEventListener("dispose",T);const Mt=L.textures,ut=L.isWebGLCubeRenderTarget===!0,ne=Mt.length>1;if(ne||(lt.__webglTexture===void 0&&(lt.__webglTexture=i.createTexture()),lt.__version=R.version,o.memory.textures++),ut){J.__webglFramebuffer=[];for(let Lt=0;Lt<6;Lt++)if(R.mipmaps&&R.mipmaps.length>0){J.__webglFramebuffer[Lt]=[];for(let ht=0;ht<R.mipmaps.length;ht++)J.__webglFramebuffer[Lt][ht]=i.createFramebuffer()}else J.__webglFramebuffer[Lt]=i.createFramebuffer()}else{if(R.mipmaps&&R.mipmaps.length>0){J.__webglFramebuffer=[];for(let Lt=0;Lt<R.mipmaps.length;Lt++)J.__webglFramebuffer[Lt]=i.createFramebuffer()}else J.__webglFramebuffer=i.createFramebuffer();if(ne)for(let Lt=0,ht=Mt.length;Lt<ht;Lt++){const dt=n.get(Mt[Lt]);dt.__webglTexture===void 0&&(dt.__webglTexture=i.createTexture(),o.memory.textures++)}if(L.samples>0&&le(L)===!1){J.__webglMultisampledFramebuffer=i.createFramebuffer(),J.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,J.__webglMultisampledFramebuffer);for(let Lt=0;Lt<Mt.length;Lt++){const ht=Mt[Lt];J.__webglColorRenderbuffer[Lt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,J.__webglColorRenderbuffer[Lt]);const dt=r.convert(ht.format,ht.colorSpace),bt=r.convert(ht.type),Vt=y(ht.internalFormat,dt,bt,ht.colorSpace,L.isXRRenderTarget===!0),$t=qt(L);i.renderbufferStorageMultisample(i.RENDERBUFFER,$t,Vt,L.width,L.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Lt,i.RENDERBUFFER,J.__webglColorRenderbuffer[Lt])}i.bindRenderbuffer(i.RENDERBUFFER,null),L.depthBuffer&&(J.__webglDepthRenderbuffer=i.createRenderbuffer(),et(J.__webglDepthRenderbuffer,L,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ut){e.bindTexture(i.TEXTURE_CUBE_MAP,lt.__webglTexture),ct(i.TEXTURE_CUBE_MAP,R);for(let Lt=0;Lt<6;Lt++)if(R.mipmaps&&R.mipmaps.length>0)for(let ht=0;ht<R.mipmaps.length;ht++)at(J.__webglFramebuffer[Lt][ht],L,R,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Lt,ht);else at(J.__webglFramebuffer[Lt],L,R,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Lt,0);g(R)&&m(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(ne){for(let Lt=0,ht=Mt.length;Lt<ht;Lt++){const dt=Mt[Lt],bt=n.get(dt);e.bindTexture(i.TEXTURE_2D,bt.__webglTexture),ct(i.TEXTURE_2D,dt),at(J.__webglFramebuffer,L,dt,i.COLOR_ATTACHMENT0+Lt,i.TEXTURE_2D,0),g(dt)&&m(i.TEXTURE_2D)}e.unbindTexture()}else{let Lt=i.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Lt=L.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Lt,lt.__webglTexture),ct(Lt,R),R.mipmaps&&R.mipmaps.length>0)for(let ht=0;ht<R.mipmaps.length;ht++)at(J.__webglFramebuffer[ht],L,R,i.COLOR_ATTACHMENT0,Lt,ht);else at(J.__webglFramebuffer,L,R,i.COLOR_ATTACHMENT0,Lt,0);g(R)&&m(Lt),e.unbindTexture()}L.depthBuffer&&Bt(L)}function se(L){const R=L.textures;for(let J=0,lt=R.length;J<lt;J++){const Mt=R[J];if(g(Mt)){const ut=v(L),ne=n.get(Mt).__webglTexture;e.bindTexture(ut,ne),m(ut),e.unbindTexture()}}}const Ce=[],F=[];function Ct(L){if(L.samples>0){if(le(L)===!1){const R=L.textures,J=L.width,lt=L.height;let Mt=i.COLOR_BUFFER_BIT;const ut=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ne=n.get(L),Lt=R.length>1;if(Lt)for(let ht=0;ht<R.length;ht++)e.bindFramebuffer(i.FRAMEBUFFER,ne.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ht,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,ne.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ht,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,ne.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ne.__webglFramebuffer);for(let ht=0;ht<R.length;ht++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(Mt|=i.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(Mt|=i.STENCIL_BUFFER_BIT)),Lt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ne.__webglColorRenderbuffer[ht]);const dt=n.get(R[ht]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,dt,0)}i.blitFramebuffer(0,0,J,lt,0,0,J,lt,Mt,i.NEAREST),c===!0&&(Ce.length=0,F.length=0,Ce.push(i.COLOR_ATTACHMENT0+ht),L.depthBuffer&&L.resolveDepthBuffer===!1&&(Ce.push(ut),F.push(ut),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,F)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Ce))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Lt)for(let ht=0;ht<R.length;ht++){e.bindFramebuffer(i.FRAMEBUFFER,ne.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ht,i.RENDERBUFFER,ne.__webglColorRenderbuffer[ht]);const dt=n.get(R[ht]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,ne.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ht,i.TEXTURE_2D,dt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ne.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&c){const R=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[R])}}}function qt(L){return Math.min(s.maxSamples,L.samples)}function le(L){const R=n.get(L);return L.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&R.__useRenderToTexture!==!1}function It(L){const R=o.render.frame;h.get(L)!==R&&(h.set(L,R),L.update())}function ye(L,R){const J=L.colorSpace,lt=L.format,Mt=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||J!==bn&&J!==""&&(Le.getTransfer(J)===Be?(lt!==1023||Mt!==1009)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",J)),R}function Kt(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(u.width=L.naturalWidth||L.width,u.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(u.width=L.displayWidth,u.height=L.displayHeight):(u.width=L.width,u.height=L.height),u}this.allocateTextureUnit=P,this.resetTextureUnits=U,this.setTexture2D=Z,this.setTexture2DArray=H,this.setTexture3D=X,this.setTextureCube=B,this.rebindTextures=Qt,this.setupRenderTarget=de,this.updateRenderTargetMipmap=se,this.updateMultisampleRenderTarget=Ct,this.setupDepthRenderbuffer=Bt,this.setupFrameBufferTexture=at,this.useMultisampledRTT=le}function Bv(i,t){function e(n,s=""){let r;const o=Le.getTransfer(s);if(n===1009)return i.UNSIGNED_BYTE;if(n===1017)return i.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return i.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===1010)return i.BYTE;if(n===1011)return i.SHORT;if(n===1012)return i.UNSIGNED_SHORT;if(n===1013)return i.INT;if(n===1014)return i.UNSIGNED_INT;if(n===1015)return i.FLOAT;if(n===1016)return i.HALF_FLOAT;if(n===1021)return i.ALPHA;if(n===1022)return i.RGB;if(n===1023)return i.RGBA;if(n===1024)return i.LUMINANCE;if(n===1025)return i.LUMINANCE_ALPHA;if(n===1026)return i.DEPTH_COMPONENT;if(n===1027)return i.DEPTH_STENCIL;if(n===1028)return i.RED;if(n===1029)return i.RED_INTEGER;if(n===1030)return i.RG;if(n===1031)return i.RG_INTEGER;if(n===1033)return i.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779)if(o===Be)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===33776)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===33776)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===35840||n===35841||n===35842||n===35843)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===35840)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===36196||n===37492||n===37496)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===36196||n===37492)return o===Be?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===37496)return o===Be?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===37808)return o===Be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return o===Be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return o===Be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return o===Be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return o===Be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return o===Be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return o===Be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return o===Be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return o===Be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return o===Be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return o===Be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return o===Be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return o===Be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return o===Be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===36492||n===36494||n===36495)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===36492)return o===Be?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===36283||n===36284||n===36285||n===36286)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===36492)return r.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===1020?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const Gv={type:"move"};class za{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new fn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new fn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new fn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null;const a=this._targetRay,c=this._grip,u=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(u&&t.hand){o=!0;for(const _ of t.hand.values()){const g=e.getJointPose(_,n),m=this._getHandJoint(u,_);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}const h=u.joints["index-finger-tip"],l=u.joints["thumb-tip"],d=h.position.distanceTo(l.position),f=.02,p=.005;u.inputState.pinching&&d>f+p?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!u.inputState.pinching&&d<=f-p&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Gv)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new fn;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const zv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Hv=`
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

}`;class Vv{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new Ze,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new xi({vertexShader:zv,fragmentShader:Hv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Re(new $n(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Wv extends ss{constructor(t,e){super();const n=this;let s=null,r=1,o=null,a="local-floor",c=1,u=null,h=null,l=null,d=null,f=null,p=null;const _=new Vv,g=e.getContextAttributes();let m=null,v=null;const y=[],x=[],w=new oe;let M=null;const T=new _n;T.viewport=new Se;const I=new _n;I.viewport=new Se;const S=[T,I],A=new Jg;let C=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(nt){let ot=y[nt];return ot===void 0&&(ot=new za,y[nt]=ot),ot.getTargetRaySpace()},this.getControllerGrip=function(nt){let ot=y[nt];return ot===void 0&&(ot=new za,y[nt]=ot),ot.getGripSpace()},this.getHand=function(nt){let ot=y[nt];return ot===void 0&&(ot=new za,y[nt]=ot),ot.getHandSpace()};function P(nt){const ot=x.indexOf(nt.inputSource);if(ot===-1)return;const at=y[ot];at!==void 0&&(at.update(nt.inputSource,nt.frame,u||o),at.dispatchEvent({type:nt.type,data:nt.inputSource}))}function O(){s.removeEventListener("select",P),s.removeEventListener("selectstart",P),s.removeEventListener("selectend",P),s.removeEventListener("squeeze",P),s.removeEventListener("squeezestart",P),s.removeEventListener("squeezeend",P),s.removeEventListener("end",O),s.removeEventListener("inputsourceschange",Z);for(let nt=0;nt<y.length;nt++){const ot=x[nt];ot!==null&&(x[nt]=null,y[nt].disconnect(ot))}C=null,U=null,_.reset(),t.setRenderTarget(m),f=null,d=null,l=null,s=null,v=null,Dt.stop(),n.isPresenting=!1,t.setPixelRatio(M),t.setSize(w.width,w.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(nt){r=nt,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(nt){a=nt,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(nt){u=nt},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return l},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function(nt){if(s=nt,s!==null){if(m=t.getRenderTarget(),s.addEventListener("select",P),s.addEventListener("selectstart",P),s.addEventListener("selectend",P),s.addEventListener("squeeze",P),s.addEventListener("squeezestart",P),s.addEventListener("squeezeend",P),s.addEventListener("end",O),s.addEventListener("inputsourceschange",Z),g.xrCompatible!==!0&&await e.makeXRCompatible(),M=t.getPixelRatio(),t.getSize(w),s.renderState.layers===void 0){const ot={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,ot),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),v=new ns(f.framebufferWidth,f.framebufferHeight,{format:1023,type:1009,colorSpace:t.outputColorSpace,stencilBuffer:g.stencil})}else{let ot=null,at=null,et=null;g.depth&&(et=g.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ot=g.stencil?1027:1026,at=g.stencil?1020:1014);const yt={colorFormat:e.RGBA8,depthFormat:et,scaleFactor:r};l=new XRWebGLBinding(s,e),d=l.createProjectionLayer(yt),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),v=new ns(d.textureWidth,d.textureHeight,{format:1023,type:1009,depthTexture:new Of(d.textureWidth,d.textureHeight,at,void 0,void 0,void 0,void 0,void 0,void 0,ot),stencilBuffer:g.stencil,colorSpace:t.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(c),u=null,o=await s.requestReferenceSpace(a),Dt.setContext(s),Dt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function Z(nt){for(let ot=0;ot<nt.removed.length;ot++){const at=nt.removed[ot],et=x.indexOf(at);et>=0&&(x[et]=null,y[et].disconnect(at))}for(let ot=0;ot<nt.added.length;ot++){const at=nt.added[ot];let et=x.indexOf(at);if(et===-1){for(let Bt=0;Bt<y.length;Bt++)if(Bt>=x.length){x.push(at),et=Bt;break}else if(x[Bt]===null){x[Bt]=at,et=Bt;break}if(et===-1)break}const yt=y[et];yt&&yt.connect(at)}}const H=new N,X=new N;function B(nt,ot,at){H.setFromMatrixPosition(ot.matrixWorld),X.setFromMatrixPosition(at.matrixWorld);const et=H.distanceTo(X),yt=ot.projectionMatrix.elements,Bt=at.projectionMatrix.elements,Qt=yt[14]/(yt[10]-1),de=yt[14]/(yt[10]+1),se=(yt[9]+1)/yt[5],Ce=(yt[9]-1)/yt[5],F=(yt[8]-1)/yt[0],Ct=(Bt[8]+1)/Bt[0],qt=Qt*F,le=Qt*Ct,It=et/(-F+Ct),ye=It*-F;if(ot.matrixWorld.decompose(nt.position,nt.quaternion,nt.scale),nt.translateX(ye),nt.translateZ(It),nt.matrixWorld.compose(nt.position,nt.quaternion,nt.scale),nt.matrixWorldInverse.copy(nt.matrixWorld).invert(),yt[10]===-1)nt.projectionMatrix.copy(ot.projectionMatrix),nt.projectionMatrixInverse.copy(ot.projectionMatrixInverse);else{const Kt=Qt+It,L=de+It,R=qt-ye,J=le+(et-ye),lt=se*de/L*Kt,Mt=Ce*de/L*Kt;nt.projectionMatrix.makePerspective(R,J,lt,Mt,Kt,L),nt.projectionMatrixInverse.copy(nt.projectionMatrix).invert()}}function j(nt,ot){ot===null?nt.matrixWorld.copy(nt.matrix):nt.matrixWorld.multiplyMatrices(ot.matrixWorld,nt.matrix),nt.matrixWorldInverse.copy(nt.matrixWorld).invert()}this.updateCamera=function(nt){if(s===null)return;let ot=nt.near,at=nt.far;_.texture!==null&&(_.depthNear>0&&(ot=_.depthNear),_.depthFar>0&&(at=_.depthFar)),A.near=I.near=T.near=ot,A.far=I.far=T.far=at,(C!==A.near||U!==A.far)&&(s.updateRenderState({depthNear:A.near,depthFar:A.far}),C=A.near,U=A.far),T.layers.mask=nt.layers.mask|2,I.layers.mask=nt.layers.mask|4,A.layers.mask=T.layers.mask|I.layers.mask;const et=nt.parent,yt=A.cameras;j(A,et);for(let Bt=0;Bt<yt.length;Bt++)j(yt[Bt],et);yt.length===2?B(A,T,I):A.projectionMatrix.copy(T.projectionMatrix),Q(nt,A,et)};function Q(nt,ot,at){at===null?nt.matrix.copy(ot.matrixWorld):(nt.matrix.copy(at.matrixWorld),nt.matrix.invert(),nt.matrix.multiply(ot.matrixWorld)),nt.matrix.decompose(nt.position,nt.quaternion,nt.scale),nt.updateMatrixWorld(!0),nt.projectionMatrix.copy(ot.projectionMatrix),nt.projectionMatrixInverse.copy(ot.projectionMatrixInverse),nt.isPerspectiveCamera&&(nt.fov=Os*2*Math.atan(1/nt.projectionMatrix.elements[5]),nt.zoom=1)}this.getCamera=function(){return A},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(nt){c=nt,d!==null&&(d.fixedFoveation=nt),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=nt)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(A)};let it=null;function ct(nt,ot){if(h=ot.getViewerPose(u||o),p=ot,h!==null){const at=h.views;f!==null&&(t.setRenderTargetFramebuffer(v,f.framebuffer),t.setRenderTarget(v));let et=!1;at.length!==A.cameras.length&&(A.cameras.length=0,et=!0);for(let Bt=0;Bt<at.length;Bt++){const Qt=at[Bt];let de=null;if(f!==null)de=f.getViewport(Qt);else{const Ce=l.getViewSubImage(d,Qt);de=Ce.viewport,Bt===0&&(t.setRenderTargetTextures(v,Ce.colorTexture,d.ignoreDepthValues?void 0:Ce.depthStencilTexture),t.setRenderTarget(v))}let se=S[Bt];se===void 0&&(se=new _n,se.layers.enable(Bt),se.viewport=new Se,S[Bt]=se),se.matrix.fromArray(Qt.transform.matrix),se.matrix.decompose(se.position,se.quaternion,se.scale),se.projectionMatrix.fromArray(Qt.projectionMatrix),se.projectionMatrixInverse.copy(se.projectionMatrix).invert(),se.viewport.set(de.x,de.y,de.width,de.height),Bt===0&&(A.matrix.copy(se.matrix),A.matrix.decompose(A.position,A.quaternion,A.scale)),et===!0&&A.cameras.push(se)}const yt=s.enabledFeatures;if(yt&&yt.includes("depth-sensing")){const Bt=l.getDepthInformation(at[0]);Bt&&Bt.isValid&&Bt.texture&&_.init(t,Bt,s.renderState)}}for(let at=0;at<y.length;at++){const et=x[at],yt=y[at];et!==null&&yt!==void 0&&yt.update(et,ot,u||o)}it&&it(nt,ot),ot.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ot}),p=null}const Dt=new jf;Dt.setAnimationLoop(ct),this.setAnimationLoop=function(nt){it=nt},this.dispose=function(){}}}const zi=new On,jv=new _e;function Xv(i,t){function e(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function n(g,m){m.color.getRGB(g.fogColor.value,Rf(i)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function s(g,m,v,y,x){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(g,m):m.isMeshToonMaterial?(r(g,m),l(g,m)):m.isMeshPhongMaterial?(r(g,m),h(g,m)):m.isMeshStandardMaterial?(r(g,m),d(g,m),m.isMeshPhysicalMaterial&&f(g,m,x)):m.isMeshMatcapMaterial?(r(g,m),p(g,m)):m.isMeshDepthMaterial?r(g,m):m.isMeshDistanceMaterial?(r(g,m),_(g,m)):m.isMeshNormalMaterial?r(g,m):m.isLineBasicMaterial?(o(g,m),m.isLineDashedMaterial&&a(g,m)):m.isPointsMaterial?c(g,m,v,y):m.isSpriteMaterial?u(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,e(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===1&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,e(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===1&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,e(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,e(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);const v=t.get(m),y=v.envMap,x=v.envMapRotation;y&&(g.envMap.value=y,zi.copy(x),zi.x*=-1,zi.y*=-1,zi.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(zi.y*=-1,zi.z*=-1),g.envMapRotation.value.setFromMatrix4(jv.makeRotationFromEuler(zi)),g.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,g.aoMapTransform))}function o(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform))}function a(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function c(g,m,v,y){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*v,g.scale.value=y*.5,m.map&&(g.map.value=m.map,e(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function u(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function h(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function l(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function d(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function f(g,m,v){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===1&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=v.texture,g.transmissionSamplerSize.value.set(v.width,v.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,g.specularIntensityMapTransform))}function p(g,m){m.matcap&&(g.matcap.value=m.matcap)}function _(g,m){const v=t.get(m).light;g.referencePosition.value.setFromMatrixPosition(v.matrixWorld),g.nearDistance.value=v.shadow.camera.near,g.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function qv(i,t,e,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(v,y){const x=y.program;n.uniformBlockBinding(v,x)}function u(v,y){let x=s[v.id];x===void 0&&(p(v),x=h(v),s[v.id]=x,v.addEventListener("dispose",g));const w=y.program;n.updateUBOMapping(v,w);const M=t.render.frame;r[v.id]!==M&&(d(v),r[v.id]=M)}function h(v){const y=l();v.__bindingPointIndex=y;const x=i.createBuffer(),w=v.__size,M=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,x),i.bufferData(i.UNIFORM_BUFFER,w,M),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,x),x}function l(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(v){const y=s[v.id],x=v.uniforms,w=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let M=0,T=x.length;M<T;M++){const I=Array.isArray(x[M])?x[M]:[x[M]];for(let S=0,A=I.length;S<A;S++){const C=I[S];if(f(C,M,S,w)===!0){const U=C.__offset,P=Array.isArray(C.value)?C.value:[C.value];let O=0;for(let Z=0;Z<P.length;Z++){const H=P[Z],X=_(H);typeof H=="number"||typeof H=="boolean"?(C.__data[0]=H,i.bufferSubData(i.UNIFORM_BUFFER,U+O,C.__data)):H.isMatrix3?(C.__data[0]=H.elements[0],C.__data[1]=H.elements[1],C.__data[2]=H.elements[2],C.__data[3]=0,C.__data[4]=H.elements[3],C.__data[5]=H.elements[4],C.__data[6]=H.elements[5],C.__data[7]=0,C.__data[8]=H.elements[6],C.__data[9]=H.elements[7],C.__data[10]=H.elements[8],C.__data[11]=0):(H.toArray(C.__data,O),O+=X.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,U,C.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(v,y,x,w){const M=v.value,T=y+"_"+x;if(w[T]===void 0)return typeof M=="number"||typeof M=="boolean"?w[T]=M:w[T]=M.clone(),!0;{const I=w[T];if(typeof M=="number"||typeof M=="boolean"){if(I!==M)return w[T]=M,!0}else if(I.equals(M)===!1)return I.copy(M),!0}return!1}function p(v){const y=v.uniforms;let x=0;const w=16;for(let T=0,I=y.length;T<I;T++){const S=Array.isArray(y[T])?y[T]:[y[T]];for(let A=0,C=S.length;A<C;A++){const U=S[A],P=Array.isArray(U.value)?U.value:[U.value];for(let O=0,Z=P.length;O<Z;O++){const H=P[O],X=_(H),B=x%w,j=B%X.boundary,Q=B+j;x+=j,Q!==0&&w-Q<X.storage&&(x+=w-Q),U.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=x,x+=X.storage}}}const M=x%w;return M>0&&(x+=w-M),v.__size=x,v.__cache={},this}function _(v){const y={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(y.boundary=4,y.storage=4):v.isVector2?(y.boundary=8,y.storage=8):v.isVector3||v.isColor?(y.boundary=16,y.storage=12):v.isVector4?(y.boundary=16,y.storage=16):v.isMatrix3?(y.boundary=48,y.storage=48):v.isMatrix4?(y.boundary=64,y.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),y}function g(v){const y=v.target;y.removeEventListener("dispose",g);const x=o.indexOf(y.__bindingPointIndex);o.splice(x,1),i.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function m(){for(const v in s)i.deleteBuffer(s[v]);o=[],s={},r={}}return{bind:c,update:u,dispose:m}}class Kv{constructor(t={}){const{canvas:e=Xm(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:u=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:l=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;const p=new Uint32Array(4),_=new Int32Array(4);let g=null,m=null;const v=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ve,this.toneMapping=0,this.toneMappingExposure=1;const x=this;let w=!1,M=0,T=0,I=null,S=-1,A=null;const C=new Se,U=new Se;let P=null;const O=new he(0);let Z=0,H=e.width,X=e.height,B=1,j=null,Q=null;const it=new Se(0,0,H,X),ct=new Se(0,0,H,X);let Dt=!1;const nt=new Zc;let ot=!1,at=!1;const et=new _e,yt=new _e,Bt=new N,Qt=new Se,de={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let se=!1;function Ce(){return I===null?B:1}let F=n;function Ct(E,W){return e.getContext(E,W)}try{const E={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:u,powerPreference:h,failIfMajorPerformanceCaveat:l};if("setAttribute"in e&&e.setAttribute("data-engine","three.js r171"),e.addEventListener("webglcontextlost",gt,!1),e.addEventListener("webglcontextrestored",jt,!1),e.addEventListener("webglcontextcreationerror",Ht,!1),F===null){const W="webgl2";if(F=Ct(W,E),F===null)throw Ct(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let qt,le,It,ye,Kt,L,R,J,lt,Mt,ut,ne,Lt,ht,dt,bt,Vt,$t,re,Wt,be,pe,ge,K;function Ot(){qt=new ix(F),qt.init(),pe=new Bv(F,qt),le=new Zb(F,qt,t,pe),It=new Ov(F,qt),le.reverseDepthBuffer&&d&&It.buffers.depth.setReversed(!0),ye=new ox(F),Kt=new Av,L=new kv(F,qt,It,Kt,le,pe,ye),R=new Qb(x),J=new nx(x),lt=new f0(F),ge=new $b(F,lt),Mt=new sx(F,lt,ye,ge),ut=new cx(F,Mt,lt,ye),re=new ax(F,le,L),bt=new Jb(Kt),ne=new Sv(x,R,J,qt,le,ge,bt),Lt=new Xv(x,Kt),ht=new Tv,dt=new Lv(qt),$t=new Kb(x,R,J,It,ut,f,c),Vt=new Nv(x,ut,le),K=new qv(F,ye,le,It),Wt=new Yb(F,qt,ye),be=new rx(F,qt,ye),ye.programs=ne.programs,x.capabilities=le,x.extensions=qt,x.properties=Kt,x.renderLists=ht,x.shadowMap=Vt,x.state=It,x.info=ye}Ot();const rt=new Wv(x,F);this.xr=rt,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const E=qt.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=qt.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return B},this.setPixelRatio=function(E){E!==void 0&&(B=E,this.setSize(H,X,!1))},this.getSize=function(E){return E.set(H,X)},this.setSize=function(E,W,V=!0){if(rt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=E,X=W,e.width=Math.floor(E*B),e.height=Math.floor(W*B),V===!0&&(e.style.width=E+"px",e.style.height=W+"px"),this.setViewport(0,0,E,W)},this.getDrawingBufferSize=function(E){return E.set(H*B,X*B).floor()},this.setDrawingBufferSize=function(E,W,V){H=E,X=W,B=V,e.width=Math.floor(E*V),e.height=Math.floor(W*V),this.setViewport(0,0,E,W)},this.getCurrentViewport=function(E){return E.copy(C)},this.getViewport=function(E){return E.copy(it)},this.setViewport=function(E,W,V,q){E.isVector4?it.set(E.x,E.y,E.z,E.w):it.set(E,W,V,q),It.viewport(C.copy(it).multiplyScalar(B).round())},this.getScissor=function(E){return E.copy(ct)},this.setScissor=function(E,W,V,q){E.isVector4?ct.set(E.x,E.y,E.z,E.w):ct.set(E,W,V,q),It.scissor(U.copy(ct).multiplyScalar(B).round())},this.getScissorTest=function(){return Dt},this.setScissorTest=function(E){It.setScissorTest(Dt=E)},this.setOpaqueSort=function(E){j=E},this.setTransparentSort=function(E){Q=E},this.getClearColor=function(E){return E.copy($t.getClearColor())},this.setClearColor=function(){$t.setClearColor.apply($t,arguments)},this.getClearAlpha=function(){return $t.getClearAlpha()},this.setClearAlpha=function(){$t.setClearAlpha.apply($t,arguments)},this.clear=function(E=!0,W=!0,V=!0){let q=0;if(E){let k=!1;if(I!==null){const st=I.texture.format;k=st===1033||st===1031||st===1029}if(k){const st=I.texture.type,ft=st===1009||st===1014||st===1012||st===1020||st===1017||st===1018,xt=$t.getClearColor(),$=$t.getClearAlpha(),Rt=xt.r,Pt=xt.g,St=xt.b;ft?(p[0]=Rt,p[1]=Pt,p[2]=St,p[3]=$,F.clearBufferuiv(F.COLOR,0,p)):(_[0]=Rt,_[1]=Pt,_[2]=St,_[3]=$,F.clearBufferiv(F.COLOR,0,_))}else q|=F.COLOR_BUFFER_BIT}W&&(q|=F.DEPTH_BUFFER_BIT),V&&(q|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",gt,!1),e.removeEventListener("webglcontextrestored",jt,!1),e.removeEventListener("webglcontextcreationerror",Ht,!1),$t.dispose(),ht.dispose(),dt.dispose(),Kt.dispose(),R.dispose(),J.dispose(),ut.dispose(),ge.dispose(),K.dispose(),ne.dispose(),rt.dispose(),rt.removeEventListener("sessionstart",pt),rt.removeEventListener("sessionend",Et),wt.stop()};function gt(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function jt(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;const E=ye.autoReset,W=Vt.enabled,V=Vt.autoUpdate,q=Vt.needsUpdate,k=Vt.type;Ot(),ye.autoReset=E,Vt.enabled=W,Vt.autoUpdate=V,Vt.needsUpdate=q,Vt.type=k}function Ht(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function fe(E){const W=E.target;W.removeEventListener("dispose",fe),D(W)}function D(E){b(E),Kt.remove(E)}function b(E){const W=Kt.get(E).programs;W!==void 0&&(W.forEach(function(V){ne.releaseProgram(V)}),E.isShaderMaterial&&ne.releaseShaderCache(E))}this.renderBufferDirect=function(E,W,V,q,k,st){W===null&&(W=de);const ft=k.isMesh&&k.matrixWorld.determinant()<0,xt=Gt(E,W,V,q,k);It.setMaterial(q,ft);let $=V.index,Rt=1;if(q.wireframe===!0){if($=Mt.getWireframeAttribute(V),$===void 0)return;Rt=2}const Pt=V.drawRange,St=V.attributes.position;let Jt=Pt.start*Rt,ae=(Pt.start+Pt.count)*Rt;st!==null&&(Jt=Math.max(Jt,st.start*Rt),ae=Math.min(ae,(st.start+st.count)*Rt)),$!==null?(Jt=Math.max(Jt,0),ae=Math.min(ae,$.count)):St!=null&&(Jt=Math.max(Jt,0),ae=Math.min(ae,St.count));const ce=ae-Jt;if(ce<0||ce===1/0)return;ge.setup(k,q,xt,V,$);let Ut,Yt=Wt;if($!==null&&(Ut=lt.get($),Yt=be,Yt.setIndex(Ut)),k.isMesh)q.wireframe===!0?(It.setLineWidth(q.wireframeLinewidth*Ce()),Yt.setMode(F.LINES)):Yt.setMode(F.TRIANGLES);else if(k.isLine){let Ft=q.linewidth;Ft===void 0&&(Ft=1),It.setLineWidth(Ft*Ce()),k.isLineSegments?Yt.setMode(F.LINES):k.isLineLoop?Yt.setMode(F.LINE_LOOP):Yt.setMode(F.LINE_STRIP)}else k.isPoints?Yt.setMode(F.POINTS):k.isSprite&&Yt.setMode(F.TRIANGLES);if(k.isBatchedMesh)if(k._multiDrawInstances!==null)Yt.renderMultiDrawInstances(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount,k._multiDrawInstances);else if(qt.get("WEBGL_multi_draw"))Yt.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{const Ft=k._multiDrawStarts,Ae=k._multiDrawCounts,ee=k._multiDrawCount,ie=$?lt.get($).bytesPerElement:1,xe=Kt.get(q).currentProgram.getUniforms();for(let Ge=0;Ge<ee;Ge++)xe.setValue(F,"_gl_DrawID",Ge),Yt.render(Ft[Ge]/ie,Ae[Ge])}else if(k.isInstancedMesh)Yt.renderInstances(Jt,ce,k.count);else if(V.isInstancedBufferGeometry){const Ft=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,Ae=Math.min(V.instanceCount,Ft);Yt.renderInstances(Jt,ce,Ae)}else Yt.render(Jt,ce)};function G(E,W,V){E.transparent===!0&&E.side===2&&E.forceSinglePass===!1?(E.side=1,E.needsUpdate=!0,mt(E,W,V),E.side=0,E.needsUpdate=!0,mt(E,W,V),E.side=2):mt(E,W,V)}this.compile=function(E,W,V=null){V===null&&(V=E),m=dt.get(V),m.init(W),y.push(m),V.traverseVisible(function(k){k.isLight&&k.layers.test(W.layers)&&(m.pushLight(k),k.castShadow&&m.pushShadow(k))}),E!==V&&E.traverseVisible(function(k){k.isLight&&k.layers.test(W.layers)&&(m.pushLight(k),k.castShadow&&m.pushShadow(k))}),m.setupLights();const q=new Set;return E.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;const st=k.material;if(st)if(Array.isArray(st))for(let ft=0;ft<st.length;ft++){const xt=st[ft];G(xt,V,k),q.add(xt)}else G(st,V,k),q.add(st)}),y.pop(),m=null,q},this.compileAsync=function(E,W,V=null){const q=this.compile(E,W,V);return new Promise(k=>{function st(){if(q.forEach(function(ft){Kt.get(ft).currentProgram.isReady()&&q.delete(ft)}),q.size===0){k(E);return}setTimeout(st,10)}qt.get("KHR_parallel_shader_compile")!==null?st():setTimeout(st,10)})};let Y=null;function z(E){Y&&Y(E)}function pt(){wt.stop()}function Et(){wt.start()}const wt=new jf;wt.setAnimationLoop(z),typeof self<"u"&&wt.setContext(self),this.setAnimationLoop=function(E){Y=E,rt.setAnimationLoop(E),E===null?wt.stop():wt.start()},rt.addEventListener("sessionstart",pt),rt.addEventListener("sessionend",Et),this.render=function(E,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),rt.enabled===!0&&rt.isPresenting===!0&&(rt.cameraAutoUpdate===!0&&rt.updateCamera(W),W=rt.getCamera()),E.isScene===!0&&E.onBeforeRender(x,E,W,I),m=dt.get(E,y.length),m.init(W),y.push(m),yt.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),nt.setFromProjectionMatrix(yt),at=this.localClippingEnabled,ot=bt.init(this.clippingPlanes,at),g=ht.get(E,v.length),g.init(),v.push(g),rt.enabled===!0&&rt.isPresenting===!0){const st=x.xr.getDepthSensingMesh();st!==null&&Nt(st,W,-1/0,x.sortObjects)}Nt(E,W,0,x.sortObjects),g.finish(),x.sortObjects===!0&&g.sort(j,Q),se=rt.enabled===!1||rt.isPresenting===!1||rt.hasDepthSensing()===!1,se&&$t.addToRenderList(g,E),this.info.render.frame++,ot===!0&&bt.beginShadows();const V=m.state.shadowsArray;Vt.render(V,E,W),ot===!0&&bt.endShadows(),this.info.autoReset===!0&&this.info.reset();const q=g.opaque,k=g.transmissive;if(m.setupLights(),W.isArrayCamera){const st=W.cameras;if(k.length>0)for(let ft=0,xt=st.length;ft<xt;ft++){const $=st[ft];vt(q,k,E,$)}se&&$t.render(E);for(let ft=0,xt=st.length;ft<xt;ft++){const $=st[ft];tt(g,E,$,$.viewport)}}else k.length>0&&vt(q,k,E,W),se&&$t.render(E),tt(g,E,W);I!==null&&(L.updateMultisampleRenderTarget(I),L.updateRenderTargetMipmap(I)),E.isScene===!0&&E.onAfterRender(x,E,W),ge.resetDefaultState(),S=-1,A=null,y.pop(),y.length>0?(m=y[y.length-1],ot===!0&&bt.setGlobalState(x.clippingPlanes,m.state.camera)):m=null,v.pop(),v.length>0?g=v[v.length-1]:g=null};function Nt(E,W,V,q){if(E.visible===!1)return;if(E.layers.test(W.layers)){if(E.isGroup)V=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(W);else if(E.isLight)m.pushLight(E),E.castShadow&&m.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||nt.intersectsSprite(E)){q&&Qt.setFromMatrixPosition(E.matrixWorld).applyMatrix4(yt);const ft=ut.update(E),xt=E.material;xt.visible&&g.push(E,ft,xt,V,Qt.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||nt.intersectsObject(E))){const ft=ut.update(E),xt=E.material;if(q&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Qt.copy(E.boundingSphere.center)):(ft.boundingSphere===null&&ft.computeBoundingSphere(),Qt.copy(ft.boundingSphere.center)),Qt.applyMatrix4(E.matrixWorld).applyMatrix4(yt)),Array.isArray(xt)){const $=ft.groups;for(let Rt=0,Pt=$.length;Rt<Pt;Rt++){const St=$[Rt],Jt=xt[St.materialIndex];Jt&&Jt.visible&&g.push(E,ft,Jt,V,Qt.z,St)}}else xt.visible&&g.push(E,ft,xt,V,Qt.z,null)}}const st=E.children;for(let ft=0,xt=st.length;ft<xt;ft++)Nt(st[ft],W,V,q)}function tt(E,W,V,q){const k=E.opaque,st=E.transmissive,ft=E.transparent;m.setupLightsView(V),ot===!0&&bt.setGlobalState(x.clippingPlanes,V),q&&It.viewport(C.copy(q)),k.length>0&&_t(k,W,V),st.length>0&&_t(st,W,V),ft.length>0&&_t(ft,W,V),It.buffers.depth.setTest(!0),It.buffers.depth.setMask(!0),It.buffers.color.setMask(!0),It.setPolygonOffset(!1)}function vt(E,W,V,q){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[q.id]===void 0&&(m.state.transmissionRenderTarget[q.id]=new ns(1,1,{generateMipmaps:!0,type:qt.has("EXT_color_buffer_half_float")||qt.has("EXT_color_buffer_float")?1016:1009,minFilter:1008,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Le.workingColorSpace}));const st=m.state.transmissionRenderTarget[q.id],ft=q.viewport||C;st.setSize(ft.z,ft.w);const xt=x.getRenderTarget();x.setRenderTarget(st),x.getClearColor(O),Z=x.getClearAlpha(),Z<1&&x.setClearColor(16777215,.5),x.clear(),se&&$t.render(V);const $=x.toneMapping;x.toneMapping=0;const Rt=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),m.setupLightsView(q),ot===!0&&bt.setGlobalState(x.clippingPlanes,q),_t(E,V,q),L.updateMultisampleRenderTarget(st),L.updateRenderTargetMipmap(st),qt.has("WEBGL_multisampled_render_to_texture")===!1){let Pt=!1;for(let St=0,Jt=W.length;St<Jt;St++){const ae=W[St],ce=ae.object,Ut=ae.geometry,Yt=ae.material,Ft=ae.group;if(Yt.side===2&&ce.layers.test(q.layers)){const Ae=Yt.side;Yt.side=1,Yt.needsUpdate=!0,Tt(ce,V,q,Ut,Yt,Ft),Yt.side=Ae,Yt.needsUpdate=!0,Pt=!0}}Pt===!0&&(L.updateMultisampleRenderTarget(st),L.updateRenderTargetMipmap(st))}x.setRenderTarget(xt),x.setClearColor(O,Z),Rt!==void 0&&(q.viewport=Rt),x.toneMapping=$}function _t(E,W,V){const q=W.isScene===!0?W.overrideMaterial:null;for(let k=0,st=E.length;k<st;k++){const ft=E[k],xt=ft.object,$=ft.geometry,Rt=q===null?ft.material:q,Pt=ft.group;xt.layers.test(V.layers)&&Tt(xt,W,V,$,Rt,Pt)}}function Tt(E,W,V,q,k,st){E.onBeforeRender(x,W,V,q,k,st),E.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),k.onBeforeRender(x,W,V,q,E,st),k.transparent===!0&&k.side===2&&k.forceSinglePass===!1?(k.side=1,k.needsUpdate=!0,x.renderBufferDirect(V,W,q,k,E,st),k.side=0,k.needsUpdate=!0,x.renderBufferDirect(V,W,q,k,E,st),k.side=2):x.renderBufferDirect(V,W,q,k,E,st),E.onAfterRender(x,W,V,q,k,st)}function mt(E,W,V){W.isScene!==!0&&(W=de);const q=Kt.get(E),k=m.state.lights,st=m.state.shadowsArray,ft=k.state.version,xt=ne.getParameters(E,k.state,st,W,V),$=ne.getProgramCacheKey(xt);let Rt=q.programs;q.environment=E.isMeshStandardMaterial?W.environment:null,q.fog=W.fog,q.envMap=(E.isMeshStandardMaterial?J:R).get(E.envMap||q.environment),q.envMapRotation=q.environment!==null&&E.envMap===null?W.environmentRotation:E.envMapRotation,Rt===void 0&&(E.addEventListener("dispose",fe),Rt=new Map,q.programs=Rt);let Pt=Rt.get($);if(Pt!==void 0){if(q.currentProgram===Pt&&q.lightsStateVersion===ft)return Xt(E,xt),Pt}else xt.uniforms=ne.getUniforms(E),E.onBeforeCompile(xt,x),Pt=ne.acquireProgram(xt,$),Rt.set($,Pt),q.uniforms=xt.uniforms;const St=q.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(St.clippingPlanes=bt.uniform),Xt(E,xt),q.needsLights=At(E),q.lightsStateVersion=ft,q.needsLights&&(St.ambientLightColor.value=k.state.ambient,St.lightProbe.value=k.state.probe,St.directionalLights.value=k.state.directional,St.directionalLightShadows.value=k.state.directionalShadow,St.spotLights.value=k.state.spot,St.spotLightShadows.value=k.state.spotShadow,St.rectAreaLights.value=k.state.rectArea,St.ltc_1.value=k.state.rectAreaLTC1,St.ltc_2.value=k.state.rectAreaLTC2,St.pointLights.value=k.state.point,St.pointLightShadows.value=k.state.pointShadow,St.hemisphereLights.value=k.state.hemi,St.directionalShadowMap.value=k.state.directionalShadowMap,St.directionalShadowMatrix.value=k.state.directionalShadowMatrix,St.spotShadowMap.value=k.state.spotShadowMap,St.spotLightMatrix.value=k.state.spotLightMatrix,St.spotLightMap.value=k.state.spotLightMap,St.pointShadowMap.value=k.state.pointShadowMap,St.pointShadowMatrix.value=k.state.pointShadowMatrix),q.currentProgram=Pt,q.uniformsList=null,Pt}function kt(E){if(E.uniformsList===null){const W=E.currentProgram.getUniforms();E.uniformsList=Po.seqWithValue(W.seq,E.uniforms)}return E.uniformsList}function Xt(E,W){const V=Kt.get(E);V.outputColorSpace=W.outputColorSpace,V.batching=W.batching,V.batchingColor=W.batchingColor,V.instancing=W.instancing,V.instancingColor=W.instancingColor,V.instancingMorph=W.instancingMorph,V.skinning=W.skinning,V.morphTargets=W.morphTargets,V.morphNormals=W.morphNormals,V.morphColors=W.morphColors,V.morphTargetsCount=W.morphTargetsCount,V.numClippingPlanes=W.numClippingPlanes,V.numIntersection=W.numClipIntersection,V.vertexAlphas=W.vertexAlphas,V.vertexTangents=W.vertexTangents,V.toneMapping=W.toneMapping}function Gt(E,W,V,q,k){W.isScene!==!0&&(W=de),L.resetTextureUnits();const st=W.fog,ft=q.isMeshStandardMaterial?W.environment:null,xt=I===null?x.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:bn,$=(q.isMeshStandardMaterial?J:R).get(q.envMap||ft),Rt=q.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,Pt=!!V.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),St=!!V.morphAttributes.position,Jt=!!V.morphAttributes.normal,ae=!!V.morphAttributes.color;let ce=0;q.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(ce=x.toneMapping);const Ut=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,Yt=Ut!==void 0?Ut.length:0,Ft=Kt.get(q),Ae=m.state.lights;if(ot===!0&&(at===!0||E!==A)){const ke=E===A&&q.id===S;bt.setState(q,E,ke)}let ee=!1;q.version===Ft.__version?(Ft.needsLights&&Ft.lightsStateVersion!==Ae.state.version||Ft.outputColorSpace!==xt||k.isBatchedMesh&&Ft.batching===!1||!k.isBatchedMesh&&Ft.batching===!0||k.isBatchedMesh&&Ft.batchingColor===!0&&k.colorTexture===null||k.isBatchedMesh&&Ft.batchingColor===!1&&k.colorTexture!==null||k.isInstancedMesh&&Ft.instancing===!1||!k.isInstancedMesh&&Ft.instancing===!0||k.isSkinnedMesh&&Ft.skinning===!1||!k.isSkinnedMesh&&Ft.skinning===!0||k.isInstancedMesh&&Ft.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&Ft.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&Ft.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&Ft.instancingMorph===!1&&k.morphTexture!==null||Ft.envMap!==$||q.fog===!0&&Ft.fog!==st||Ft.numClippingPlanes!==void 0&&(Ft.numClippingPlanes!==bt.numPlanes||Ft.numIntersection!==bt.numIntersection)||Ft.vertexAlphas!==Rt||Ft.vertexTangents!==Pt||Ft.morphTargets!==St||Ft.morphNormals!==Jt||Ft.morphColors!==ae||Ft.toneMapping!==ce||Ft.morphTargetsCount!==Yt)&&(ee=!0):(ee=!0,Ft.__version=q.version);let ie=Ft.currentProgram;ee===!0&&(ie=mt(q,W,k));let xe=!1,Ge=!1,xn=!1;const me=ie.getUniforms(),Oe=Ft.uniforms;if(It.useProgram(ie.program)&&(xe=!0,Ge=!0,xn=!0),q.id!==S&&(S=q.id,Ge=!0),xe||A!==E){It.buffers.depth.getReversed()?(et.copy(E.projectionMatrix),Km(et),$m(et),me.setValue(F,"projectionMatrix",et)):me.setValue(F,"projectionMatrix",E.projectionMatrix),me.setValue(F,"viewMatrix",E.matrixWorldInverse);const Ke=me.map.cameraPosition;Ke!==void 0&&Ke.setValue(F,Bt.setFromMatrixPosition(E.matrixWorld)),le.logarithmicDepthBuffer&&me.setValue(F,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&me.setValue(F,"isOrthographic",E.isOrthographicCamera===!0),A!==E&&(A=E,Ge=!0,xn=!0)}if(k.isSkinnedMesh){me.setOptional(F,k,"bindMatrix"),me.setOptional(F,k,"bindMatrixInverse");const ke=k.skeleton;ke&&(ke.boneTexture===null&&ke.computeBoneTexture(),me.setValue(F,"boneTexture",ke.boneTexture,L))}k.isBatchedMesh&&(me.setOptional(F,k,"batchingTexture"),me.setValue(F,"batchingTexture",k._matricesTexture,L),me.setOptional(F,k,"batchingIdTexture"),me.setValue(F,"batchingIdTexture",k._indirectTexture,L),me.setOptional(F,k,"batchingColorTexture"),k._colorsTexture!==null&&me.setValue(F,"batchingColorTexture",k._colorsTexture,L));const qe=V.morphAttributes;if((qe.position!==void 0||qe.normal!==void 0||qe.color!==void 0)&&re.update(k,V,ie),(Ge||Ft.receiveShadow!==k.receiveShadow)&&(Ft.receiveShadow=k.receiveShadow,me.setValue(F,"receiveShadow",k.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(Oe.envMap.value=$,Oe.flipEnvMap.value=$.isCubeTexture&&$.isRenderTargetTexture===!1?-1:1),q.isMeshStandardMaterial&&q.envMap===null&&W.environment!==null&&(Oe.envMapIntensity.value=W.environmentIntensity),Ge&&(me.setValue(F,"toneMappingExposure",x.toneMappingExposure),Ft.needsLights&&ue(Oe,xn),st&&q.fog===!0&&Lt.refreshFogUniforms(Oe,st),Lt.refreshMaterialUniforms(Oe,q,B,X,m.state.transmissionRenderTarget[E.id]),Po.upload(F,kt(Ft),Oe,L)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(Po.upload(F,kt(Ft),Oe,L),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&me.setValue(F,"center",k.center),me.setValue(F,"modelViewMatrix",k.modelViewMatrix),me.setValue(F,"normalMatrix",k.normalMatrix),me.setValue(F,"modelMatrix",k.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){const ke=q.uniformsGroups;for(let Ke=0,vn=ke.length;Ke<vn;Ke++){const ln=ke[Ke];K.update(ln,ie),K.bind(ln,ie)}}return ie}function ue(E,W){E.ambientLightColor.needsUpdate=W,E.lightProbe.needsUpdate=W,E.directionalLights.needsUpdate=W,E.directionalLightShadows.needsUpdate=W,E.pointLights.needsUpdate=W,E.pointLightShadows.needsUpdate=W,E.spotLights.needsUpdate=W,E.spotLightShadows.needsUpdate=W,E.rectAreaLights.needsUpdate=W,E.hemisphereLights.needsUpdate=W}function At(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return M},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(E,W,V){Kt.get(E.texture).__webglTexture=W,Kt.get(E.depthTexture).__webglTexture=V;const q=Kt.get(E);q.__hasExternalTextures=!0,q.__autoAllocateDepthBuffer=V===void 0,q.__autoAllocateDepthBuffer||qt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),q.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,W){const V=Kt.get(E);V.__webglFramebuffer=W,V.__useDefaultFramebuffer=W===void 0},this.setRenderTarget=function(E,W=0,V=0){I=E,M=W,T=V;let q=!0,k=null,st=!1,ft=!1;if(E){const $=Kt.get(E);if($.__useDefaultFramebuffer!==void 0)It.bindFramebuffer(F.FRAMEBUFFER,null),q=!1;else if($.__webglFramebuffer===void 0)L.setupRenderTarget(E);else if($.__hasExternalTextures)L.rebindTextures(E,Kt.get(E.texture).__webglTexture,Kt.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const St=E.depthTexture;if($.__boundDepthTexture!==St){if(St!==null&&Kt.has(St)&&(E.width!==St.image.width||E.height!==St.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");L.setupDepthRenderbuffer(E)}}const Rt=E.texture;(Rt.isData3DTexture||Rt.isDataArrayTexture||Rt.isCompressedArrayTexture)&&(ft=!0);const Pt=Kt.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Pt[W])?k=Pt[W][V]:k=Pt[W],st=!0):E.samples>0&&L.useMultisampledRTT(E)===!1?k=Kt.get(E).__webglMultisampledFramebuffer:Array.isArray(Pt)?k=Pt[V]:k=Pt,C.copy(E.viewport),U.copy(E.scissor),P=E.scissorTest}else C.copy(it).multiplyScalar(B).floor(),U.copy(ct).multiplyScalar(B).floor(),P=Dt;if(It.bindFramebuffer(F.FRAMEBUFFER,k)&&q&&It.drawBuffers(E,k),It.viewport(C),It.scissor(U),It.setScissorTest(P),st){const $=Kt.get(E.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+W,$.__webglTexture,V)}else if(ft){const $=Kt.get(E.texture),Rt=W||0;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,$.__webglTexture,V||0,Rt)}S=-1},this.readRenderTargetPixels=function(E,W,V,q,k,st,ft){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let xt=Kt.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&ft!==void 0&&(xt=xt[ft]),xt){It.bindFramebuffer(F.FRAMEBUFFER,xt);try{const $=E.texture,Rt=$.format,Pt=$.type;if(!le.textureFormatReadable(Rt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!le.textureTypeReadable(Pt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=E.width-q&&V>=0&&V<=E.height-k&&F.readPixels(W,V,q,k,pe.convert(Rt),pe.convert(Pt),st)}finally{const $=I!==null?Kt.get(I).__webglFramebuffer:null;It.bindFramebuffer(F.FRAMEBUFFER,$)}}},this.readRenderTargetPixelsAsync=async function(E,W,V,q,k,st,ft){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let xt=Kt.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&ft!==void 0&&(xt=xt[ft]),xt){const $=E.texture,Rt=$.format,Pt=$.type;if(!le.textureFormatReadable(Rt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!le.textureTypeReadable(Pt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(W>=0&&W<=E.width-q&&V>=0&&V<=E.height-k){It.bindFramebuffer(F.FRAMEBUFFER,xt);const St=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,St),F.bufferData(F.PIXEL_PACK_BUFFER,st.byteLength,F.STREAM_READ),F.readPixels(W,V,q,k,pe.convert(Rt),pe.convert(Pt),0);const Jt=I!==null?Kt.get(I).__webglFramebuffer:null;It.bindFramebuffer(F.FRAMEBUFFER,Jt);const ae=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await qm(F,ae,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,St),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,st),F.deleteBuffer(St),F.deleteSync(ae),st}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(E,W=null,V=0){E.isTexture!==!0&&(Is("WebGLRenderer: copyFramebufferToTexture function signature has changed."),W=arguments[0]||null,E=arguments[1]);const q=Math.pow(2,-V),k=Math.floor(E.image.width*q),st=Math.floor(E.image.height*q),ft=W!==null?W.x:0,xt=W!==null?W.y:0;L.setTexture2D(E,0),F.copyTexSubImage2D(F.TEXTURE_2D,V,0,0,ft,xt,k,st),It.unbindTexture()};const Te=F.createFramebuffer(),te=F.createFramebuffer();this.copyTextureToTexture=function(E,W,V=null,q=null,k=0,st=null){E.isTexture!==!0&&(Is("WebGLRenderer: copyTextureToTexture function signature has changed."),q=arguments[0]||null,E=arguments[1],W=arguments[2],st=arguments[3]||0,V=null),st===null&&(k!==0?(Is("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),st=k,k=0):st=0);let ft,xt,$,Rt,Pt,St,Jt,ae,ce;const Ut=E.isCompressedTexture?E.mipmaps[st]:E.image;if(V!==null)ft=V.max.x-V.min.x,xt=V.max.y-V.min.y,$=V.isBox3?V.max.z-V.min.z:1,Rt=V.min.x,Pt=V.min.y,St=V.isBox3?V.min.z:0;else{const qe=Math.pow(2,-k);ft=Math.floor(Ut.width*qe),xt=Math.floor(Ut.height*qe),E.isDataArrayTexture?$=Ut.depth:E.isData3DTexture?$=Math.floor(Ut.depth*qe):$=1,Rt=0,Pt=0,St=0}q!==null?(Jt=q.x,ae=q.y,ce=q.z):(Jt=0,ae=0,ce=0);const Yt=pe.convert(W.format),Ft=pe.convert(W.type);let Ae;W.isData3DTexture?(L.setTexture3D(W,0),Ae=F.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(L.setTexture2DArray(W,0),Ae=F.TEXTURE_2D_ARRAY):(L.setTexture2D(W,0),Ae=F.TEXTURE_2D),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,W.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,W.unpackAlignment);const ee=F.getParameter(F.UNPACK_ROW_LENGTH),ie=F.getParameter(F.UNPACK_IMAGE_HEIGHT),xe=F.getParameter(F.UNPACK_SKIP_PIXELS),Ge=F.getParameter(F.UNPACK_SKIP_ROWS),xn=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,Ut.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Ut.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,Rt),F.pixelStorei(F.UNPACK_SKIP_ROWS,Pt),F.pixelStorei(F.UNPACK_SKIP_IMAGES,St);const me=E.isDataArrayTexture||E.isData3DTexture,Oe=W.isDataArrayTexture||W.isData3DTexture;if(E.isDepthTexture){const qe=Kt.get(E),ke=Kt.get(W),Ke=Kt.get(qe.__renderTarget),vn=Kt.get(ke.__renderTarget);It.bindFramebuffer(F.READ_FRAMEBUFFER,Ke.__webglFramebuffer),It.bindFramebuffer(F.DRAW_FRAMEBUFFER,vn.__webglFramebuffer);for(let ln=0;ln<$;ln++)me&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Kt.get(E).__webglTexture,k,St+ln),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Kt.get(W).__webglTexture,st,ce+ln)),F.blitFramebuffer(Rt,Pt,ft,xt,Jt,ae,ft,xt,F.DEPTH_BUFFER_BIT,F.NEAREST);It.bindFramebuffer(F.READ_FRAMEBUFFER,null),It.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(k!==0||E.isRenderTargetTexture||Kt.has(E)){const qe=Kt.get(E),ke=Kt.get(W);It.bindFramebuffer(F.READ_FRAMEBUFFER,Te),It.bindFramebuffer(F.DRAW_FRAMEBUFFER,te);for(let Ke=0;Ke<$;Ke++)me?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,qe.__webglTexture,k,St+Ke):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,qe.__webglTexture,k),Oe?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,ke.__webglTexture,st,ce+Ke):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,ke.__webglTexture,st),k!==0?F.blitFramebuffer(Rt,Pt,ft,xt,Jt,ae,ft,xt,F.COLOR_BUFFER_BIT,F.NEAREST):Oe?F.copyTexSubImage3D(Ae,st,Jt,ae,ce+Ke,Rt,Pt,ft,xt):F.copyTexSubImage2D(Ae,st,Jt,ae,Rt,Pt,ft,xt);It.bindFramebuffer(F.READ_FRAMEBUFFER,null),It.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else Oe?E.isDataTexture||E.isData3DTexture?F.texSubImage3D(Ae,st,Jt,ae,ce,ft,xt,$,Yt,Ft,Ut.data):W.isCompressedArrayTexture?F.compressedTexSubImage3D(Ae,st,Jt,ae,ce,ft,xt,$,Yt,Ut.data):F.texSubImage3D(Ae,st,Jt,ae,ce,ft,xt,$,Yt,Ft,Ut):E.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,st,Jt,ae,ft,xt,Yt,Ft,Ut.data):E.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,st,Jt,ae,Ut.width,Ut.height,Yt,Ut.data):F.texSubImage2D(F.TEXTURE_2D,st,Jt,ae,ft,xt,Yt,Ft,Ut);F.pixelStorei(F.UNPACK_ROW_LENGTH,ee),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,ie),F.pixelStorei(F.UNPACK_SKIP_PIXELS,xe),F.pixelStorei(F.UNPACK_SKIP_ROWS,Ge),F.pixelStorei(F.UNPACK_SKIP_IMAGES,xn),st===0&&W.generateMipmaps&&F.generateMipmap(Ae),It.unbindTexture()},this.copyTextureToTexture3D=function(E,W,V=null,q=null,k=0){return E.isTexture!==!0&&(Is("WebGLRenderer: copyTextureToTexture3D function signature has changed."),V=arguments[0]||null,q=arguments[1]||null,E=arguments[2],W=arguments[3],k=arguments[4]||0),Is('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(E,W,V,q,k)},this.initRenderTarget=function(E){Kt.get(E).__webglFramebuffer===void 0&&L.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?L.setTextureCube(E,0):E.isData3DTexture?L.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?L.setTexture2DArray(E,0):L.setTexture2D(E,0),It.unbindTexture()},this.resetState=function(){M=0,T=0,I=null,It.reset(),ge.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return 2e3}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=Le._getDrawingBufferColorSpace(t),e.unpackColorSpace=Le._getUnpackColorSpace()}}function Hu(i,t){if(t===0)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(t===2||t===1){let e=i.getIndex();if(e===null){const o=[],a=i.getAttribute("position");if(a!==void 0){for(let c=0;c<a.count;c++)o.push(c);i.setIndex(o),e=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}const n=e.count-2,s=[];if(t===2)for(let o=1;o<=n;o++)s.push(e.getX(0)),s.push(e.getX(o)),s.push(e.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(s.push(e.getX(o)),s.push(e.getX(o+1)),s.push(e.getX(o+2))):(s.push(e.getX(o+2)),s.push(e.getX(o+1)),s.push(e.getX(o)));s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=i.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",t),i}class $v extends Ws{constructor(t){super(t),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(e){return new ty(e)}),this.register(function(e){return new ey(e)}),this.register(function(e){return new uy(e)}),this.register(function(e){return new hy(e)}),this.register(function(e){return new dy(e)}),this.register(function(e){return new iy(e)}),this.register(function(e){return new sy(e)}),this.register(function(e){return new ry(e)}),this.register(function(e){return new oy(e)}),this.register(function(e){return new Qv(e)}),this.register(function(e){return new ay(e)}),this.register(function(e){return new ny(e)}),this.register(function(e){return new ly(e)}),this.register(function(e){return new cy(e)}),this.register(function(e){return new Zv(e)}),this.register(function(e){return new fy(e)}),this.register(function(e){return new py(e)})}load(t,e,n,s){const r=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const u=xr.extractUrlBase(t);o=xr.resolveURL(u,this.path)}else o=xr.extractUrlBase(t);this.manager.itemStart(t);const a=function(u){s?s(u):console.error(u),r.manager.itemError(t),r.manager.itemEnd(t)},c=new Hf(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(t,function(u){try{r.parse(u,o,function(h){e(h),r.manager.itemEnd(t)},a)}catch(h){a(h)}},n,a)}setDRACOLoader(t){return this.dracoLoader=t,this}setKTX2Loader(t){return this.ktx2Loader=t,this}setMeshoptDecoder(t){return this.meshoptDecoder=t,this}register(t){return this.pluginCallbacks.indexOf(t)===-1&&this.pluginCallbacks.push(t),this}unregister(t){return this.pluginCallbacks.indexOf(t)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(t),1),this}parse(t,e,n,s){let r;const o={},a={},c=new TextDecoder;if(typeof t=="string")r=JSON.parse(t);else if(t instanceof ArrayBuffer)if(c.decode(new Uint8Array(t,0,4))===Yf){try{o[we.KHR_BINARY_GLTF]=new my(t)}catch(l){s&&s(l);return}r=JSON.parse(o[we.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(t));else r=t;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const u=new Ry(r,{path:e||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});u.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const l=this.pluginCallbacks[h](u);l.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[l.name]=l,o[l.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){const l=r.extensionsUsed[h],d=r.extensionsRequired||[];switch(l){case we.KHR_MATERIALS_UNLIT:o[l]=new Jv;break;case we.KHR_DRACO_MESH_COMPRESSION:o[l]=new gy(r,this.dracoLoader);break;case we.KHR_TEXTURE_TRANSFORM:o[l]=new _y;break;case we.KHR_MESH_QUANTIZATION:o[l]=new by;break;default:d.indexOf(l)>=0&&a[l]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+l+'".')}}u.setExtensions(o),u.setPlugins(a),u.parse(n,s)}parseAsync(t,e){const n=this;return new Promise(function(s,r){n.parse(t,e,s,r)})}}function Yv(){let i={};return{get:function(t){return i[t]},add:function(t,e){i[t]=e},remove:function(t){delete i[t]},removeAll:function(){i={}}}}const we={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class Zv{constructor(t){this.parser=t,this.name=we.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const t=this.parser,e=this.parser.json.nodes||[];for(let n=0,s=e.length;n<s;n++){const r=e[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&t._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(t){const e=this.parser,n="light:"+t;let s=e.cache.get(n);if(s)return s;const r=e.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[t];let u;const h=new he(16777215);c.color!==void 0&&h.setRGB(c.color[0],c.color[1],c.color[2],bn);const l=c.range!==void 0?c.range:0;switch(c.type){case"directional":u=new rl(h),u.target.position.set(0,0,-1),u.add(u.target);break;case"point":u=new qg(h),u.distance=l;break;case"spot":u=new jg(h),u.distance=l,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,u.angle=c.spot.outerConeAngle,u.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,u.target.position.set(0,0,-1),u.add(u.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return u.position.set(0,0,0),u.decay=2,fi(u,c),c.intensity!==void 0&&(u.intensity=c.intensity),u.name=e.createUniqueName(c.name||"light_"+t),s=Promise.resolve(u),e.cache.add(n,s),s}getDependency(t,e){if(t==="light")return this._loadLight(e)}createNodeAttachment(t){const e=this,n=this.parser,r=n.json.nodes[t],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(c){return n._getNodeRef(e.cache,a,c)})}}class Jv{constructor(){this.name=we.KHR_MATERIALS_UNLIT}getMaterialType(){return en}extendParams(t,e,n){const s=[];t.color=new he(1,1,1),t.opacity=1;const r=e.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const o=r.baseColorFactor;t.color.setRGB(o[0],o[1],o[2],bn),t.opacity=o[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(t,"map",r.baseColorTexture,Ve))}return Promise.all(s)}}class Qv{constructor(t){this.parser=t,this.name=we.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(t,e){const s=this.parser.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name].emissiveStrength;return r!==void 0&&(e.emissiveIntensity=r),Promise.resolve()}}class ty{constructor(t){this.parser=t,this.name=we.KHR_MATERIALS_CLEARCOAT}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:ni}extendMaterialParams(t,e){const n=this.parser,s=n.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];if(o.clearcoatFactor!==void 0&&(e.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(n.assignTexture(e,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(e.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(e,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(e,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;e.clearcoatNormalScale=new oe(a,a)}return Promise.all(r)}}class ey{constructor(t){this.parser=t,this.name=we.KHR_MATERIALS_DISPERSION}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:ni}extendMaterialParams(t,e){const s=this.parser.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name];return e.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}}class ny{constructor(t){this.parser=t,this.name=we.KHR_MATERIALS_IRIDESCENCE}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:ni}extendMaterialParams(t,e){const n=this.parser,s=n.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.iridescenceFactor!==void 0&&(e.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(n.assignTexture(e,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(e.iridescenceIOR=o.iridescenceIor),e.iridescenceThicknessRange===void 0&&(e.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(e.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(e.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(e,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}}class iy{constructor(t){this.parser=t,this.name=we.KHR_MATERIALS_SHEEN}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:ni}extendMaterialParams(t,e){const n=this.parser,s=n.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[];e.sheenColor=new he(0,0,0),e.sheenRoughness=0,e.sheen=1;const o=s.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;e.sheenColor.setRGB(a[0],a[1],a[2],bn)}return o.sheenRoughnessFactor!==void 0&&(e.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(n.assignTexture(e,"sheenColorMap",o.sheenColorTexture,Ve)),o.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(e,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}}class sy{constructor(t){this.parser=t,this.name=we.KHR_MATERIALS_TRANSMISSION}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:ni}extendMaterialParams(t,e){const n=this.parser,s=n.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.transmissionFactor!==void 0&&(e.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(n.assignTexture(e,"transmissionMap",o.transmissionTexture)),Promise.all(r)}}class ry{constructor(t){this.parser=t,this.name=we.KHR_MATERIALS_VOLUME}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:ni}extendMaterialParams(t,e){const n=this.parser,s=n.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];e.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(n.assignTexture(e,"thicknessMap",o.thicknessTexture)),e.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return e.attenuationColor=new he().setRGB(a[0],a[1],a[2],bn),Promise.all(r)}}class oy{constructor(t){this.parser=t,this.name=we.KHR_MATERIALS_IOR}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:ni}extendMaterialParams(t,e){const s=this.parser.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name];return e.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class ay{constructor(t){this.parser=t,this.name=we.KHR_MATERIALS_SPECULAR}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:ni}extendMaterialParams(t,e){const n=this.parser,s=n.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];e.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(n.assignTexture(e,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return e.specularColor=new he().setRGB(a[0],a[1],a[2],bn),o.specularColorTexture!==void 0&&r.push(n.assignTexture(e,"specularColorMap",o.specularColorTexture,Ve)),Promise.all(r)}}class cy{constructor(t){this.parser=t,this.name=we.EXT_MATERIALS_BUMP}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:ni}extendMaterialParams(t,e){const n=this.parser,s=n.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return e.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(n.assignTexture(e,"bumpMap",o.bumpTexture)),Promise.all(r)}}class ly{constructor(t){this.parser=t,this.name=we.KHR_MATERIALS_ANISOTROPY}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:ni}extendMaterialParams(t,e){const n=this.parser,s=n.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.anisotropyStrength!==void 0&&(e.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(e.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(n.assignTexture(e,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}}class uy{constructor(t){this.parser=t,this.name=we.KHR_TEXTURE_BASISU}loadTexture(t){const e=this.parser,n=e.json,s=n.textures[t];if(!s.extensions||!s.extensions[this.name])return null;const r=s.extensions[this.name],o=e.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return e.loadTextureImage(t,r.source,o)}}class hy{constructor(t){this.parser=t,this.name=we.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(t){const e=this.name,n=this.parser,s=n.json,r=s.textures[t];if(!r.extensions||!r.extensions[e])return null;const o=r.extensions[e],a=s.images[o.source];let c=n.textureLoader;if(a.uri){const u=n.options.manager.getHandler(a.uri);u!==null&&(c=u)}return this.detectSupport().then(function(u){if(u)return n.loadTextureImage(t,o.source,c);if(s.extensionsRequired&&s.extensionsRequired.indexOf(e)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(t)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(t){const e=new Image;e.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",e.onload=e.onerror=function(){t(e.height===1)}})),this.isSupported}}class dy{constructor(t){this.parser=t,this.name=we.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(t){const e=this.name,n=this.parser,s=n.json,r=s.textures[t];if(!r.extensions||!r.extensions[e])return null;const o=r.extensions[e],a=s.images[o.source];let c=n.textureLoader;if(a.uri){const u=n.options.manager.getHandler(a.uri);u!==null&&(c=u)}return this.detectSupport().then(function(u){if(u)return n.loadTextureImage(t,o.source,c);if(s.extensionsRequired&&s.extensionsRequired.indexOf(e)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(t)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(t){const e=new Image;e.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",e.onload=e.onerror=function(){t(e.height===1)}})),this.isSupported}}class fy{constructor(t){this.name=we.EXT_MESHOPT_COMPRESSION,this.parser=t}loadBufferView(t){const e=this.parser.json,n=e.bufferViews[t];if(n.extensions&&n.extensions[this.name]){const s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(e.extensionsRequired&&e.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){const c=s.byteOffset||0,u=s.byteLength||0,h=s.count,l=s.byteStride,d=new Uint8Array(a,c,u);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,l,d,s.mode,s.filter).then(function(f){return f.buffer}):o.ready.then(function(){const f=new ArrayBuffer(h*l);return o.decodeGltfBuffer(new Uint8Array(f),h,l,d,s.mode,s.filter),f})})}else return null}}class py{constructor(t){this.name=we.EXT_MESH_GPU_INSTANCING,this.parser=t}createNodeMesh(t){const e=this.parser.json,n=e.nodes[t];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const s=e.meshes[n.mesh];for(const u of s.primitives)if(u.mode!==Fn.TRIANGLES&&u.mode!==Fn.TRIANGLE_STRIP&&u.mode!==Fn.TRIANGLE_FAN&&u.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],c={};for(const u in o)a.push(this.parser.getDependency("accessor",o[u]).then(h=>(c[u]=h,c[u])));return a.length<1?null:(a.push(this.parser.createNodeMesh(t)),Promise.all(a).then(u=>{const h=u.pop(),l=h.isGroup?h.children:[h],d=u[0].count,f=[];for(const p of l){const _=new _e,g=new N,m=new an,v=new N(1,1,1),y=new Sg(p.geometry,p.material,d);for(let x=0;x<d;x++)c.TRANSLATION&&g.fromBufferAttribute(c.TRANSLATION,x),c.ROTATION&&m.fromBufferAttribute(c.ROTATION,x),c.SCALE&&v.fromBufferAttribute(c.SCALE,x),y.setMatrixAt(x,_.compose(g,m,v));for(const x in c)if(x==="_COLOR_0"){const w=c[x];y.instanceColor=new Mc(w.array,w.itemSize,w.normalized)}else x!=="TRANSLATION"&&x!=="ROTATION"&&x!=="SCALE"&&p.geometry.setAttribute(x,c[x]);He.prototype.copy.call(y,p),this.parser.assignFinalMaterial(y),f.push(y)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}}const Yf="glTF",ar=12,Vu={JSON:1313821514,BIN:5130562};class my{constructor(t){this.name=we.KHR_BINARY_GLTF,this.content=null,this.body=null;const e=new DataView(t,0,ar),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(t.slice(0,4))),version:e.getUint32(4,!0),length:e.getUint32(8,!0)},this.header.magic!==Yf)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const s=this.header.length-ar,r=new DataView(t,ar);let o=0;for(;o<s;){const a=r.getUint32(o,!0);o+=4;const c=r.getUint32(o,!0);if(o+=4,c===Vu.JSON){const u=new Uint8Array(t,ar+o,a);this.content=n.decode(u)}else if(c===Vu.BIN){const u=ar+o;this.body=t.slice(u,u+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class gy{constructor(t,e){if(!e)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=we.KHR_DRACO_MESH_COMPRESSION,this.json=t,this.dracoLoader=e,this.dracoLoader.preload()}decodePrimitive(t,e){const n=this.json,s=this.dracoLoader,r=t.extensions[this.name].bufferView,o=t.extensions[this.name].attributes,a={},c={},u={};for(const h in o){const l=Rc[h]||h.toLowerCase();a[l]=o[h]}for(const h in t.attributes){const l=Rc[h]||h.toLowerCase();if(o[h]!==void 0){const d=n.accessors[t.attributes[h]],f=Ns[d.componentType];u[l]=f.name,c[l]=d.normalized===!0}}return e.getDependency("bufferView",r).then(function(h){return new Promise(function(l,d){s.decodeDracoFile(h,function(f){for(const p in f.attributes){const _=f.attributes[p],g=c[p];g!==void 0&&(_.normalized=g)}l(f)},a,u,bn,d)})})}}class _y{constructor(){this.name=we.KHR_TEXTURE_TRANSFORM}extendTexture(t,e){return(e.texCoord===void 0||e.texCoord===t.channel)&&e.offset===void 0&&e.rotation===void 0&&e.scale===void 0||(t=t.clone(),e.texCoord!==void 0&&(t.channel=e.texCoord),e.offset!==void 0&&t.offset.fromArray(e.offset),e.rotation!==void 0&&(t.rotation=e.rotation),e.scale!==void 0&&t.repeat.fromArray(e.scale),t.needsUpdate=!0),t}}class by{constructor(){this.name=we.KHR_MESH_QUANTIZATION}}class Zf extends Cr{constructor(t,e,n,s){super(t,e,n,s)}copySampleValue_(t){const e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s*3+s;for(let o=0;o!==s;o++)e[o]=n[r+o];return e}interpolate_(t,e,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=a*2,u=a*3,h=s-e,l=(n-e)/h,d=l*l,f=d*l,p=t*u,_=p-u,g=-2*f+3*d,m=f-d,v=1-g,y=m-d+l;for(let x=0;x!==a;x++){const w=o[_+x+a],M=o[_+x+c]*h,T=o[p+x+a],I=o[p+x]*h;r[x]=v*w+y*M+g*T+m*I}return r}}const xy=new an;class vy extends Zf{interpolate_(t,e,n,s){const r=super.interpolate_(t,e,n,s);return xy.fromArray(r).normalize().toArray(r),r}}const Fn={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},Ns={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Wu={9728:1003,9729:1006,9984:1004,9985:1007,9986:1005,9987:1008},ju={33071:1001,33648:1002,10497:1e3},Ha={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Rc={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},wi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},yy={CUBICSPLINE:void 0,LINEAR:2301,STEP:2300},Va={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function My(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new Ni({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:0})),i.DefaultMaterial}function Hi(i,t,e){for(const n in e.extensions)i[n]===void 0&&(t.userData.gltfExtensions=t.userData.gltfExtensions||{},t.userData.gltfExtensions[n]=e.extensions[n])}function fi(i,t){t.extras!==void 0&&(typeof t.extras=="object"?Object.assign(i.userData,t.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+t.extras))}function Sy(i,t,e){let n=!1,s=!1,r=!1;for(let u=0,h=t.length;u<h;u++){const l=t[u];if(l.POSITION!==void 0&&(n=!0),l.NORMAL!==void 0&&(s=!0),l.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);const o=[],a=[],c=[];for(let u=0,h=t.length;u<h;u++){const l=t[u];if(n){const d=l.POSITION!==void 0?e.getDependency("accessor",l.POSITION):i.attributes.position;o.push(d)}if(s){const d=l.NORMAL!==void 0?e.getDependency("accessor",l.NORMAL):i.attributes.normal;a.push(d)}if(r){const d=l.COLOR_0!==void 0?e.getDependency("accessor",l.COLOR_0):i.attributes.color;c.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c)]).then(function(u){const h=u[0],l=u[1],d=u[2];return n&&(i.morphAttributes.position=h),s&&(i.morphAttributes.normal=l),r&&(i.morphAttributes.color=d),i.morphTargetsRelative=!0,i})}function Ay(i,t){if(i.updateMorphTargets(),t.weights!==void 0)for(let e=0,n=t.weights.length;e<n;e++)i.morphTargetInfluences[e]=t.weights[e];if(t.extras&&Array.isArray(t.extras.targetNames)){const e=t.extras.targetNames;if(i.morphTargetInfluences.length===e.length){i.morphTargetDictionary={};for(let n=0,s=e.length;n<s;n++)i.morphTargetDictionary[e[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Ey(i){let t;const e=i.extensions&&i.extensions[we.KHR_DRACO_MESH_COMPRESSION];if(e?t="draco:"+e.bufferView+":"+e.indices+":"+Wa(e.attributes):t=i.indices+":"+Wa(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)t+=":"+Wa(i.targets[n]);return t}function Wa(i){let t="";const e=Object.keys(i).sort();for(let n=0,s=e.length;n<s;n++)t+=e[n]+":"+i[e[n]]+";";return t}function Cc(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Ty(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const wy=new _e;class Ry{constructor(t={},e={}){this.json=t,this.extensions={},this.plugins={},this.options=e,this.cache=new Yv,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,r=!1,o=-1;if(typeof navigator<"u"){const a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;const c=a.match(/Version\/(\d+)/);s=n&&c?parseInt(c[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&s<17||r&&o<98?this.textureLoader=new Vf(this.options.manager):this.textureLoader=new Zg(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Hf(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(t){this.extensions=t}setPlugins(t){this.plugins=t}parse(t,e){const n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][s.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:s.asset,parser:n,userData:{}};return Hi(r,a,s),fi(a,s),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(a)})).then(function(){for(const c of a.scenes)c.updateMatrixWorld();t(a)})}).catch(e)}_markDefs(){const t=this.json.nodes||[],e=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=e.length;s<r;s++){const o=e[s].joints;for(let a=0,c=o.length;a<c;a++)t[o[a]].isBone=!0}for(let s=0,r=t.length;s<r;s++){const o=t[s];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(t,e){e!==void 0&&(t.refs[e]===void 0&&(t.refs[e]=t.uses[e]=0),t.refs[e]++)}_getNodeRef(t,e,n){if(t.refs[e]<=1)return n;const s=n.clone(),r=(o,a)=>{const c=this.associations.get(o);c!=null&&this.associations.set(a,c);for(const[u,h]of o.children.entries())r(h,a.children[u])};return r(n,s),s.name+="_instance_"+t.uses[e]++,s}_invokeOne(t){const e=Object.values(this.plugins);e.push(this);for(let n=0;n<e.length;n++){const s=t(e[n]);if(s)return s}return null}_invokeAll(t){const e=Object.values(this.plugins);e.unshift(this);const n=[];for(let s=0;s<e.length;s++){const r=t(e[s]);r&&n.push(r)}return n}getDependency(t,e){const n=t+":"+e;let s=this.cache.get(n);if(!s){switch(t){case"scene":s=this.loadScene(e);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(e)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(e)});break;case"accessor":s=this.loadAccessor(e);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(e)});break;case"buffer":s=this.loadBuffer(e);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(e)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(e)});break;case"skin":s=this.loadSkin(e);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(e)});break;case"camera":s=this.loadCamera(e);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(t,e)}),!s)throw new Error("Unknown type: "+t);break}this.cache.add(n,s)}return s}getDependencies(t){let e=this.cache.get(t);if(!e){const n=this,s=this.json[t+(t==="mesh"?"es":"s")]||[];e=Promise.all(s.map(function(r,o){return n.getDependency(t,o)})),this.cache.add(t,e)}return e}loadBuffer(t){const e=this.json.buffers[t],n=this.fileLoader;if(e.type&&e.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+e.type+" buffer type is not supported.");if(e.uri===void 0&&t===0)return Promise.resolve(this.extensions[we.KHR_BINARY_GLTF].body);const s=this.options;return new Promise(function(r,o){n.load(xr.resolveURL(e.uri,s.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+e.uri+'".'))})})}loadBufferView(t){const e=this.json.bufferViews[t];return this.getDependency("buffer",e.buffer).then(function(n){const s=e.byteLength||0,r=e.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(t){const e=this,n=this.json,s=this.json.accessors[t];if(s.bufferView===void 0&&s.sparse===void 0){const o=Ha[s.type],a=Ns[s.componentType],c=s.normalized===!0,u=new a(s.count*o);return Promise.resolve(new De(u,o,c))}const r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(o){const a=o[0],c=Ha[s.type],u=Ns[s.componentType],h=u.BYTES_PER_ELEMENT,l=h*c,d=s.byteOffset||0,f=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,p=s.normalized===!0;let _,g;if(f&&f!==l){const m=Math.floor(d/f),v="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+m+":"+s.count;let y=e.cache.get(v);y||(_=new u(a,m*f,s.count*f/h),y=new $c(_,f/h),e.cache.add(v,y)),g=new Xn(y,c,d%f/h,p)}else a===null?_=new u(s.count*c):_=new u(a,d,s.count*c),g=new De(_,c,p);if(s.sparse!==void 0){const m=Ha.SCALAR,v=Ns[s.sparse.indices.componentType],y=s.sparse.indices.byteOffset||0,x=s.sparse.values.byteOffset||0,w=new v(o[1],y,s.sparse.count*m),M=new u(o[2],x,s.sparse.count*c);a!==null&&(g=new De(g.array.slice(),g.itemSize,g.normalized)),g.normalized=!1;for(let T=0,I=w.length;T<I;T++){const S=w[T];if(g.setX(S,M[T*c]),c>=2&&g.setY(S,M[T*c+1]),c>=3&&g.setZ(S,M[T*c+2]),c>=4&&g.setW(S,M[T*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}g.normalized=p}return g})}loadTexture(t){const e=this.json,n=this.options,r=e.textures[t].source,o=e.images[r];let a=this.textureLoader;if(o.uri){const c=n.manager.getHandler(o.uri);c!==null&&(a=c)}return this.loadTextureImage(t,r,a)}loadTextureImage(t,e,n){const s=this,r=this.json,o=r.textures[t],a=r.images[e],c=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[c])return this.textureCache[c];const u=this.loadImageSource(e,n).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);const d=(r.samplers||{})[o.sampler]||{};return h.magFilter=Wu[d.magFilter]||1006,h.minFilter=Wu[d.minFilter]||1008,h.wrapS=ju[d.wrapS]||1e3,h.wrapT=ju[d.wrapT]||1e3,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==1003&&h.minFilter!==1006,s.associations.set(h,{textures:t}),h}).catch(function(){return null});return this.textureCache[c]=u,u}loadImageSource(t,e){const n=this,s=this.json,r=this.options;if(this.sourceCache[t]!==void 0)return this.sourceCache[t].then(l=>l.clone());const o=s.images[t],a=self.URL||self.webkitURL;let c=o.uri||"",u=!1;if(o.bufferView!==void 0)c=n.getDependency("bufferView",o.bufferView).then(function(l){u=!0;const d=new Blob([l],{type:o.mimeType});return c=a.createObjectURL(d),c});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+t+" is missing URI and bufferView");const h=Promise.resolve(c).then(function(l){return new Promise(function(d,f){let p=d;e.isImageBitmapLoader===!0&&(p=function(_){const g=new Ze(_);g.needsUpdate=!0,d(g)}),e.load(xr.resolveURL(l,r.path),p,void 0,f)})}).then(function(l){return u===!0&&a.revokeObjectURL(c),fi(l,o),l.userData.mimeType=o.mimeType||Ty(o.uri),l}).catch(function(l){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),l});return this.sourceCache[t]=h,h}assignTexture(t,e,n,s){const r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[we.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[we.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const c=r.associations.get(o);o=r.extensions[we.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,c)}}return s!==void 0&&(o.colorSpace=s),t[e]=o,o})}assignFinalMaterial(t){const e=t.geometry;let n=t.material;const s=e.attributes.tangent===void 0,r=e.attributes.color!==void 0,o=e.attributes.normal===void 0;if(t.isPoints){const a="PointsMaterial:"+n.uuid;let c=this.cache.get(a);c||(c=new Qc,Un.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(a,c)),n=c}else if(t.isLine){const a="LineBasicMaterial:"+n.uuid;let c=this.cache.get(a);c||(c=new Nf,Un.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(a,c)),n=c}if(s||r||o){let a="ClonedMaterial:"+n.uuid+":";s&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let c=this.cache.get(a);c||(c=n.clone(),r&&(c.vertexColors=!0),o&&(c.flatShading=!0),s&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(a,c),this.associations.set(c,this.associations.get(n))),n=c}t.material=n}getMaterialType(){return Ni}loadMaterial(t){const e=this,n=this.json,s=this.extensions,r=n.materials[t];let o;const a={},c=r.extensions||{},u=[];if(c[we.KHR_MATERIALS_UNLIT]){const l=s[we.KHR_MATERIALS_UNLIT];o=l.getMaterialType(),u.push(l.extendParams(a,r,e))}else{const l=r.pbrMetallicRoughness||{};if(a.color=new he(1,1,1),a.opacity=1,Array.isArray(l.baseColorFactor)){const d=l.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],bn),a.opacity=d[3]}l.baseColorTexture!==void 0&&u.push(e.assignTexture(a,"map",l.baseColorTexture,Ve)),a.metalness=l.metallicFactor!==void 0?l.metallicFactor:1,a.roughness=l.roughnessFactor!==void 0?l.roughnessFactor:1,l.metallicRoughnessTexture!==void 0&&(u.push(e.assignTexture(a,"metalnessMap",l.metallicRoughnessTexture)),u.push(e.assignTexture(a,"roughnessMap",l.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(t)}),u.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(t,a)})))}r.doubleSided===!0&&(a.side=2);const h=r.alphaMode||Va.OPAQUE;if(h===Va.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===Va.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==en&&(u.push(e.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new oe(1,1),r.normalTexture.scale!==void 0)){const l=r.normalTexture.scale;a.normalScale.set(l,l)}if(r.occlusionTexture!==void 0&&o!==en&&(u.push(e.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==en){const l=r.emissiveFactor;a.emissive=new he().setRGB(l[0],l[1],l[2],bn)}return r.emissiveTexture!==void 0&&o!==en&&u.push(e.assignTexture(a,"emissiveMap",r.emissiveTexture,Ve)),Promise.all(u).then(function(){const l=new o(a);return r.name&&(l.name=r.name),fi(l,r),e.associations.set(l,{materials:t}),r.extensions&&Hi(s,l,r),l})}createUniqueName(t){const e=Fe.sanitizeNodeName(t||"");return e in this.nodeNamesUsed?e+"_"+ ++this.nodeNamesUsed[e]:(this.nodeNamesUsed[e]=0,e)}loadGeometries(t){const e=this,n=this.extensions,s=this.primitiveCache;function r(a){return n[we.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,e).then(function(c){return Xu(c,a,e)})}const o=[];for(let a=0,c=t.length;a<c;a++){const u=t[a],h=Ey(u),l=s[h];if(l)o.push(l.promise);else{let d;u.extensions&&u.extensions[we.KHR_DRACO_MESH_COMPRESSION]?d=r(u):d=Xu(new Xe,u,e),s[h]={primitive:u,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(t){const e=this,n=this.json,s=this.extensions,r=n.meshes[t],o=r.primitives,a=[];for(let c=0,u=o.length;c<u;c++){const h=o[c].material===void 0?My(this.cache):this.getDependency("material",o[c].material);a.push(h)}return a.push(e.loadGeometries(o)),Promise.all(a).then(function(c){const u=c.slice(0,c.length-1),h=c[c.length-1],l=[];for(let f=0,p=h.length;f<p;f++){const _=h[f],g=o[f];let m;const v=u[f];if(g.mode===Fn.TRIANGLES||g.mode===Fn.TRIANGLE_STRIP||g.mode===Fn.TRIANGLE_FAN||g.mode===void 0)m=r.isSkinnedMesh===!0?new vg(_,v):new Re(_,v),m.isSkinnedMesh===!0&&m.normalizeSkinWeights(),g.mode===Fn.TRIANGLE_STRIP?m.geometry=Hu(m.geometry,1):g.mode===Fn.TRIANGLE_FAN&&(m.geometry=Hu(m.geometry,2));else if(g.mode===Fn.LINES)m=new Tg(_,v);else if(g.mode===Fn.LINE_STRIP)m=new Jc(_,v);else if(g.mode===Fn.LINE_LOOP)m=new wg(_,v);else if(g.mode===Fn.POINTS)m=new Uf(_,v);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+g.mode);Object.keys(m.geometry.morphAttributes).length>0&&Ay(m,r),m.name=e.createUniqueName(r.name||"mesh_"+t),fi(m,r),g.extensions&&Hi(s,m,g),e.assignFinalMaterial(m),l.push(m)}for(let f=0,p=l.length;f<p;f++)e.associations.set(l[f],{meshes:t,primitives:f});if(l.length===1)return r.extensions&&Hi(s,l[0],r),l[0];const d=new fn;r.extensions&&Hi(s,d,r),e.associations.set(d,{meshes:t});for(let f=0,p=l.length;f<p;f++)d.add(l[f]);return d})}loadCamera(t){let e;const n=this.json.cameras[t],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?e=new _n(vf.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(e=new sl(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(e.name=this.createUniqueName(n.name)),fi(e,n),Promise.resolve(e)}loadSkin(t){const e=this.json.skins[t],n=[];for(let s=0,r=e.joints.length;s<r;s++)n.push(this._loadNodeShallow(e.joints[s]));return e.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",e.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){const r=s.pop(),o=s,a=[],c=[];for(let u=0,h=o.length;u<h;u++){const l=o[u];if(l){a.push(l);const d=new _e;r!==null&&d.fromArray(r.array,u*16),c.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',e.joints[u])}return new Yc(a,c)})}loadAnimation(t){const e=this.json,n=this,s=e.animations[t],r=s.name?s.name:"animation_"+t,o=[],a=[],c=[],u=[],h=[];for(let l=0,d=s.channels.length;l<d;l++){const f=s.channels[l],p=s.samplers[f.sampler],_=f.target,g=_.node,m=s.parameters!==void 0?s.parameters[p.input]:p.input,v=s.parameters!==void 0?s.parameters[p.output]:p.output;_.node!==void 0&&(o.push(this.getDependency("node",g)),a.push(this.getDependency("accessor",m)),c.push(this.getDependency("accessor",v)),u.push(p),h.push(_))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c),Promise.all(u),Promise.all(h)]).then(function(l){const d=l[0],f=l[1],p=l[2],_=l[3],g=l[4],m=[];for(let v=0,y=d.length;v<y;v++){const x=d[v],w=f[v],M=p[v],T=_[v],I=g[v];if(x===void 0)continue;x.updateMatrix&&x.updateMatrix();const S=n._createAnimationTracks(x,w,M,T,I);if(S)for(let A=0;A<S.length;A++)m.push(S[A])}return new Ec(r,void 0,m)})}createNodeMesh(t){const e=this.json,n=this,s=e.nodes[t];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){const o=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let c=0,u=s.weights.length;c<u;c++)a.morphTargetInfluences[c]=s.weights[c]}),o})}loadNode(t){const e=this.json,n=this,s=e.nodes[t],r=n._loadNodeShallow(t),o=[],a=s.children||[];for(let u=0,h=a.length;u<h;u++)o.push(n.getDependency("node",a[u]));const c=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(o),c]).then(function(u){const h=u[0],l=u[1],d=u[2];d!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(d,wy)});for(let f=0,p=l.length;f<p;f++)h.add(l[f]);return h})}_loadNodeShallow(t){const e=this.json,n=this.extensions,s=this;if(this.nodeCache[t]!==void 0)return this.nodeCache[t];const r=e.nodes[t],o=r.name?s.createUniqueName(r.name):"",a=[],c=s._invokeOne(function(u){return u.createNodeMesh&&u.createNodeMesh(t)});return c&&a.push(c),r.camera!==void 0&&a.push(s.getDependency("camera",r.camera).then(function(u){return s._getNodeRef(s.cameraCache,r.camera,u)})),s._invokeAll(function(u){return u.createNodeAttachment&&u.createNodeAttachment(t)}).forEach(function(u){a.push(u)}),this.nodeCache[t]=Promise.all(a).then(function(u){let h;if(r.isBone===!0?h=new Df:u.length>1?h=new fn:u.length===1?h=u[0]:h=new He,h!==u[0])for(let l=0,d=u.length;l<d;l++)h.add(u[l]);if(r.name&&(h.userData.name=r.name,h.name=o),fi(h,r),r.extensions&&Hi(n,h,r),r.matrix!==void 0){const l=new _e;l.fromArray(r.matrix),h.applyMatrix4(l)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);return s.associations.has(h)||s.associations.set(h,{}),s.associations.get(h).nodes=t,h}),this.nodeCache[t]}loadScene(t){const e=this.extensions,n=this.json.scenes[t],s=this,r=new fn;n.name&&(r.name=s.createUniqueName(n.name)),fi(r,n),n.extensions&&Hi(e,r,n);const o=n.nodes||[],a=[];for(let c=0,u=o.length;c<u;c++)a.push(s.getDependency("node",o[c]));return Promise.all(a).then(function(c){for(let h=0,l=c.length;h<l;h++)r.add(c[h]);const u=h=>{const l=new Map;for(const[d,f]of s.associations)(d instanceof Un||d instanceof Ze)&&l.set(d,f);return h.traverse(d=>{const f=s.associations.get(d);f!=null&&l.set(d,f)}),l};return s.associations=u(r),r})}_createAnimationTracks(t,e,n,s,r){const o=[],a=t.name?t.name:t.uuid,c=[];wi[r.path]===wi.weights?t.traverse(function(d){d.morphTargetInfluences&&c.push(d.name?d.name:d.uuid)}):c.push(a);let u;switch(wi[r.path]){case wi.weights:u=Bs;break;case wi.rotation:u=Gs;break;case wi.position:case wi.scale:u=zs;break;default:switch(n.itemSize){case 1:u=Bs;break;case 2:case 3:default:u=zs;break}break}const h=s.interpolation!==void 0?yy[s.interpolation]:2301,l=this._getArrayFromAccessor(n);for(let d=0,f=c.length;d<f;d++){const p=new u(c[d]+"."+wi[r.path],e.array,l,h);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(p),o.push(p)}return o}_getArrayFromAccessor(t){let e=t.array;if(t.normalized){const n=Cc(e.constructor),s=new Float32Array(e.length);for(let r=0,o=e.length;r<o;r++)s[r]=e[r]*n;e=s}return e}_createCubicSplineTrackInterpolant(t){t.createInterpolant=function(n){const s=this instanceof Gs?vy:Zf;return new s(this.times,this.values,this.getValueSize()/3,n)},t.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function Cy(i,t,e){const n=t.attributes,s=new cn;if(n.POSITION!==void 0){const a=e.json.accessors[n.POSITION],c=a.min,u=a.max;if(c!==void 0&&u!==void 0){if(s.set(new N(c[0],c[1],c[2]),new N(u[0],u[1],u[2])),a.normalized){const h=Cc(Ns[a.componentType]);s.min.multiplyScalar(h),s.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=t.targets;if(r!==void 0){const a=new N,c=new N;for(let u=0,h=r.length;u<h;u++){const l=r[u];if(l.POSITION!==void 0){const d=e.json.accessors[l.POSITION],f=d.min,p=d.max;if(f!==void 0&&p!==void 0){if(c.setX(Math.max(Math.abs(f[0]),Math.abs(p[0]))),c.setY(Math.max(Math.abs(f[1]),Math.abs(p[1]))),c.setZ(Math.max(Math.abs(f[2]),Math.abs(p[2]))),d.normalized){const _=Cc(Ns[d.componentType]);c.multiplyScalar(_)}a.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(a)}i.boundingBox=s;const o=new kn;s.getCenter(o.center),o.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=o}function Xu(i,t,e){const n=t.attributes,s=[];function r(o,a){return e.getDependency("accessor",o).then(function(c){i.setAttribute(a,c)})}for(const o in n){const a=Rc[o]||o.toLowerCase();a in i.attributes||s.push(r(n[o],a))}if(t.indices!==void 0&&!i.index){const o=e.getDependency("accessor",t.indices).then(function(a){i.setIndex(a)});s.push(o)}return Le.workingColorSpace!==bn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Le.workingColorSpace}" not supported.`),fi(i,t),Cy(i,t,e),Promise.all(s).then(function(){return t.targets!==void 0?Sy(i,t.targets,e):i})}var Iy=(function(){var i="b9H79Tebbbe8Fv9Gbb9Gvuuuuueu9Giuuub9Geueu9Giuuueuikqbeeedddillviebeoweuec:q;iekr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbeY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVbdE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbiL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtblK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbol79IV9Rbrq:P8Yqdbk;3sezu8Jjjjjbcj;eb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Radz1jjjbhwcj;abad9UhoaicefhldnadTmbaoc;WFbGgocjdaocjd6EhDcbhqinaqae9pmeaDaeaq9RaqaDfae6Egkcsfgocl4cifcd4hxdndndndnaoc9WGgmTmbcbhPcehsawcjdfhzalhHinaraH9Rax6midnaraHaxfgl9RcK6mbczhoinawcj;cbfaogifgoc9WfhOdndndndndnaHaic9WfgAco4fRbbaAci4coG4ciGPlbedibkaO9cb83ibaOcwf9cb83ibxikaOalRblalRbbgAco4gCaCciSgCE86bbaocGfalclfaCfgORbbaAcl4ciGgCaCciSgCE86bbaocVfaOaCfgORbbaAcd4ciGgCaCciSgCE86bbaoc7faOaCfgORbbaAciGgAaAciSgAE86bbaoctfaOaAfgARbbalRbegOco4gCaCciSgCE86bbaoc91faAaCfgARbbaOcl4ciGgCaCciSgCE86bbaoc4faAaCfgARbbaOcd4ciGgCaCciSgCE86bbaoc93faAaCfgARbbaOciGgOaOciSgOE86bbaoc94faAaOfgARbbalRbdgOco4gCaCciSgCE86bbaoc95faAaCfgARbbaOcl4ciGgCaCciSgCE86bbaoc96faAaCfgARbbaOcd4ciGgCaCciSgCE86bbaoc97faAaCfgARbbaOciGgOaOciSgOE86bbaoc98faAaOfgORbbalRbiglco4gAaAciSgAE86bbaoc99faOaAfgORbbalcl4ciGgAaAciSgAE86bbaoc9:faOaAfgORbbalcd4ciGgAaAciSgAE86bbaocufaOaAfgoRbbalciGglalciSglE86bbaoalfhlxdkaOalRbwalRbbgAcl4gCaCcsSgCE86bbaocGfalcwfaCfgORbbaAcsGgAaAcsSgAE86bbaocVfaOaAfgORbbalRbegAcl4gCaCcsSgCE86bbaoc7faOaCfgORbbaAcsGgAaAcsSgAE86bbaoctfaOaAfgORbbalRbdgAcl4gCaCcsSgCE86bbaoc91faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc4faOaAfgORbbalRbigAcl4gCaCcsSgCE86bbaoc93faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc94faOaAfgORbbalRblgAcl4gCaCcsSgCE86bbaoc95faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc96faOaAfgORbbalRbvgAcl4gCaCcsSgCE86bbaoc97faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc98faOaAfgORbbalRbogAcl4gCaCcsSgCE86bbaoc99faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc9:faOaAfgORbbalRbrglcl4gAaAcsSgAE86bbaocufaOaAfgoRbbalcsGglalcsSglE86bbaoalfhlxekaOal8Pbb83bbaOcwfalcwf8Pbb83bbalczfhlkdnaiam9pmbaiczfhoaral9RcL0mekkaiam6mialTmidnakTmbawaPfRbbhOcbhoazhiinaiawcj;cbfaofRbbgAce4cbaAceG9R7aOfgO86bbaiadfhiaocefgoak9hmbkkazcefhzaPcefgPad6hsalhHaPad9hmexvkkcbhlasceGmdxikalaxad2fhCdnakTmbcbhHcehsawcjdfhminaral9Rax6mialTmdalaxfhlawaHfRbbhOcbhoamhiinaiawcj;cbfaofRbbgAce4cbaAceG9R7aOfgO86bbaiadfhiaocefgoak9hmbkamcefhmaHcefgHad6hsaHad9hmbkaChlxikcbhocehsinaral9Rax6mdalTmealaxfhlaocefgoad6hsadao9hmbkaChlxdkcbhlasceGTmekc9:hoxikabaqad2fawcjdfakad2z1jjjb8Aawawcjdfakcufad2fadz1jjjb8Aakaqfhqalmbkc9:hoxekcbc99aral9Radcaadca0ESEhokavcj;ebf8Kjjjjbaok;yzeHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecjez:jjjjb8AavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhodnaeTmbcmcsaDceSEhkcbhxcbhmcbhDcbhicbhlindnaoaq9nmbc9:hoxikdndnawRbbgrc;Ve0mbavc;abfalarcl4cu7fcsGcitfgPydlhsaPydbhzdnarcsGgPak9pmbavaiarcu7fcsGcdtfydbaxaPEhraPThPdndnadcd9hmbabaDcetfgHaz87ebaHcdfas87ebaHclfar87ebxekabaDcdtfgHazBdbaHclfasBdbaHcwfarBdbkaxaPfhxavc;abfalcitfgHarBdbaHasBdlavaicdtfarBdbavc;abfalcefcsGglcitfgHazBdbaHarBdlaiaPfhialcefhlxdkdndnaPcsSmbamaPfaPc987fcefhmxekaocefhrao8SbbgPcFeGhHdndnaPcu9mmbarhoxekaocvfhoaHcFbGhHcrhPdninar8SbbgOcFbGaPtaHVhHaOcu9kmearcefhraPcrfgPc8J9hmbxdkkarcefhokaHce4cbaHceG9R7amfhmkdndnadcd9hmbabaDcetfgraz87ebarcdfas87ebarclfam87ebxekabaDcdtfgrazBdbarclfasBdbarcwfamBdbkavc;abfalcitfgramBdbarasBdlavaicdtfamBdbavc;abfalcefcsGglcitfgrazBdbaramBdlaicefhialcefhlxekdnarcpe0mbaxcefgOavaiaqarcsGfRbbgPcl49RcsGcdtfydbaPcz6gHEhravaiaP9RcsGcdtfydbaOaHfgsaPcsGgOEhPaOThOdndnadcd9hmbabaDcetfgzax87ebazcdfar87ebazclfaP87ebxekabaDcdtfgzaxBdbazclfarBdbazcwfaPBdbkavaicdtfaxBdbavc;abfalcitfgzarBdbazaxBdlavaicefgicsGcdtfarBdbavc;abfalcefcsGcitfgzaPBdbazarBdlavaiaHfcsGgicdtfaPBdbavc;abfalcdfcsGglcitfgraxBdbaraPBdlalcefhlaiaOfhiasaOfhxxekaxcbaoRbbgzEgAarc;:eSgrfhsazcsGhCazcl4hXdndnazcs0mbascefhOxekashOavaiaX9RcsGcdtfydbhskdndnaCmbaOcefhxxekaOhxavaiaz9RcsGcdtfydbhOkdndnarTmbaocefhrxekaocdfhrao8SbegHcFeGhPdnaHcu9kmbaocofhAaPcFbGhPcrhodninar8SbbgHcFbGaotaPVhPaHcu9kmearcefhraocrfgoc8J9hmbkaAhrxekarcefhrkaPce4cbaPceG9R7amfgmhAkdndnaXcsSmbarhPxekarcefhPar8SbbgocFeGhHdnaocu9kmbarcvfhsaHcFbGhHcrhodninaP8SbbgrcFbGaotaHVhHarcu9kmeaPcefhPaocrfgoc8J9hmbkashPxekaPcefhPkaHce4cbaHceG9R7amfgmhskdndnaCcsSmbaPhoxekaPcefhoaP8SbbgrcFeGhHdnarcu9kmbaPcvfhOaHcFbGhHcrhrdninao8SbbgPcFbGartaHVhHaPcu9kmeaocefhoarcrfgrc8J9hmbkaOhoxekaocefhokaHce4cbaHceG9R7amfgmhOkdndnadcd9hmbabaDcetfgraA87ebarcdfas87ebarclfaO87ebxekabaDcdtfgraABdbarclfasBdbarcwfaOBdbkavc;abfalcitfgrasBdbaraABdlavaicdtfaABdbavc;abfalcefcsGcitfgraOBdbarasBdlavaicefgicsGcdtfasBdbavc;abfalcdfcsGcitfgraABdbaraOBdlavaiazcz6aXcsSVfgicsGcdtfaOBdbaiaCTaCcsSVfhialcifhlkawcefhwalcsGhlaicsGhiaDcifgDae6mbkkcbc99aoaqSEhokavc;aef8Kjjjjbaok:llevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:Lvoeue99dud99eud99dndnadcl9hmbaeTmeindndnabcdfgd8Sbb:Yab8Sbbgi:Ygl:l:tabcefgv8Sbbgo:Ygr:l:tgwJbb;:9cawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai86bbdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad86bbdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad86bbabclfhbaecufgembxdkkaeTmbindndnabclfgd8Ueb:Yab8Uebgi:Ygl:l:tabcdfgv8Uebgo:Ygr:l:tgwJb;:FSawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai87ebdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad87ebdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad87ebabcwfhbaecufgembkkk;siliui99iue99dnaeTmbcbhiabhlindndnJ;Zl81Zalcof8UebgvciV:Y:vgoal8Ueb:YNgrJb;:FSNJbbbZJbbb:;arJbbbb9GEMgw:lJbbb9p9DTmbaw:OhDxekcjjjj94hDkalclf8Uebhqalcdf8UebhkabavcefciGaiVcetfaD87ebdndnaoak:YNgwJb;:FSNJbbbZJbbb:;awJbbbb9GEMgx:lJbbb9p9DTmbax:Ohkxekcjjjj94hkkabavcdfciGaiVcetfak87ebdndnaoaq:YNgoJb;:FSNJbbbZJbbb:;aoJbbbb9GEMgx:lJbbb9p9DTmbax:Ohqxekcjjjj94hqkabavcufciGaiVcetfaq87ebdndnJbbjZararN:tawawN:taoaoN:tgrJbbbbarJbbbb9GE:rJb;:FSNJbbbZMgr:lJbbb9p9DTmbar:Ohqxekcjjjj94hqkabavciGaiVcetfaq87ebalcwfhlaiclfhiaecufgembkkk9mbdnadcd4ae2geTmbinababydbgdcwtcw91:Yadce91cjjj;8ifcjjj98G::NUdbabclfhbaecufgembkkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik;LeeeudndnaeabVciGTmbabhixekdndnadcz9pmbabhixekabhiinaiaeydbBdbaiclfaeclfydbBdbaicwfaecwfydbBdbaicxfaecxfydbBdbaiczfhiaeczfheadc9Wfgdcs0mbkkadcl6mbinaiaeydbBdbaeclfheaiclfhiadc98fgdci0mbkkdnadTmbinaiaeRbb86bbaicefhiaecefheadcufgdmbkkabk;aeedudndnabciGTmbabhixekaecFeGc:b:c:ew2hldndnadcz9pmbabhixekabhiinaialBdbaicxfalBdbaicwfalBdbaiclfalBdbaiczfhiadc9Wfgdcs0mbkkadcl6mbinaialBdbaiclfhiadc98fgdci0mbkkdnadTmbinaiae86bbaicefhiadcufgdmbkkabkkkebcjwklz9Kbb",t="b9H79TebbbeKl9Gbb9Gvuuuuueu9Giuuub9Geueuikqbbebeedddilve9Weeeviebeoweuec:q;Aekr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbdY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVblE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtboK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbrL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbwl79IV9RbDq;t9tqlbzik9:evu8Jjjjjbcz9Rhbcbheincbhdcbhiinabcwfadfaicjuaead4ceGglE86bbaialfhiadcefgdcw9hmbkaec:q:yjjbfai86bbaecitc:q1jjbfab8Piw83ibaecefgecjd9hmbkk;h8JlHud97euo978Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Rad;8qbbcj;abad9UhoaicefhldnadTmbaoc;WFbGgocjdaocjd6EhwcbhDinaDae9pmeawaeaD9RaDawfae6Egqcsfgoc9WGgkci2hxakcethmaocl4cifcd4hPabaDad2fhscbhzdnincehHalhOcbhAdninaraO9RaP6miavcj;cbfaAak2fhCaOaPfhlcbhidnakc;ab6mbaral9Rc;Gb6mbcbhoinaCaofhidndndndndnaOaoco4fRbbgXciGPlbedibkaipxbbbbbbbbbbbbbbbbpklbxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklbalczfhlkdndndndndnaXcd4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklzxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklzalczfhlkdndndndndnaXcl4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklaxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklaalczfhlkdndndndndnaXco4Plbedibkaipxbbbbbbbbbbbbbbbbpkl8WxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WalclfaYpQbfaXc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WalcwfaYpQbfaXc:q:yjjbfRbbfhlxekaialpbbbpkl8Walczfhlkaoc;abfhiaocjefak0meaihoaral9Rc;Fb0mbkkdndnaiak9pmbaici4hoinaral9RcK6mdaCaifhXdndndndndnaOaico4fRbbaocoG4ciGPlbedibkaXpxbbbbbbbbbbbbbbbbpklbxikaXalpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaXalpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaXalpbbbpklbalczfhlkaocdfhoaiczfgiak6mbkkalTmbaAci6hHalhOaAcefgohAaoclSmdxekkcbhlaHceGmdkdnakTmbavcjdfazfhiavazfpbdbhYcbhXinaiavcj;cbfaXfgopblbgLcep9TaLpxeeeeeeeeeeeeeeeegQp9op9Hp9rgLaoakfpblbg8Acep9Ta8AaQp9op9Hp9rg8ApmbzeHdOiAlCvXoQrLgEaoamfpblbg3cep9Ta3aQp9op9Hp9rg3aoaxfpblbg5cep9Ta5aQp9op9Hp9rg5pmbzeHdOiAlCvXoQrLg8EpmbezHdiOAlvCXorQLgQaQpmbedibedibedibediaYp9UgYp9AdbbaiadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaEa8EpmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaLa8ApmwKDYq8AkEx3m5P8Es8FgLa3a5pmwKDYq8AkEx3m5P8Es8Fg8ApmbezHdiOAlvCXorQLgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaLa8ApmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfhiaXczfgXak6mbkkazclfgzad6mbkasavcjdfaqad2;8qbbavavcjdfaqcufad2fad;8qbbaqaDfhDc9:hoalmexikkc9:hoxekcbc99aral9Radcaadca0ESEhokavcj;kbf8Kjjjjbaokwbz:bjjjbk;uzeHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecje;8kbavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhodnaeTmbcmcsaDceSEhkcbhxcbhmcbhDcbhicbhlindnaoaq9nmbc9:hoxikdndnawRbbgrc;Ve0mbavc;abfalarcl4cu7fcsGcitfgPydlhsaPydbhzdnarcsGgPak9pmbavaiarcu7fcsGcdtfydbaxaPEhraPThPdndnadcd9hmbabaDcetfgHaz87ebaHcdfas87ebaHclfar87ebxekabaDcdtfgHazBdbaHclfasBdbaHcwfarBdbkaxaPfhxavc;abfalcitfgHarBdbaHasBdlavaicdtfarBdbavc;abfalcefcsGglcitfgHazBdbaHarBdlaiaPfhialcefhlxdkdndnaPcsSmbamaPfaPc987fcefhmxekaocefhrao8SbbgPcFeGhHdndnaPcu9mmbarhoxekaocvfhoaHcFbGhHcrhPdninar8SbbgOcFbGaPtaHVhHaOcu9kmearcefhraPcrfgPc8J9hmbxdkkarcefhokaHce4cbaHceG9R7amfhmkdndnadcd9hmbabaDcetfgraz87ebarcdfas87ebarclfam87ebxekabaDcdtfgrazBdbarclfasBdbarcwfamBdbkavc;abfalcitfgramBdbarasBdlavaicdtfamBdbavc;abfalcefcsGglcitfgrazBdbaramBdlaicefhialcefhlxekdnarcpe0mbaxcefgOavaiaqarcsGfRbbgPcl49RcsGcdtfydbaPcz6gHEhravaiaP9RcsGcdtfydbaOaHfgsaPcsGgOEhPaOThOdndnadcd9hmbabaDcetfgzax87ebazcdfar87ebazclfaP87ebxekabaDcdtfgzaxBdbazclfarBdbazcwfaPBdbkavaicdtfaxBdbavc;abfalcitfgzarBdbazaxBdlavaicefgicsGcdtfarBdbavc;abfalcefcsGcitfgzaPBdbazarBdlavaiaHfcsGgicdtfaPBdbavc;abfalcdfcsGglcitfgraxBdbaraPBdlalcefhlaiaOfhiasaOfhxxekaxcbaoRbbgzEgAarc;:eSgrfhsazcsGhCazcl4hXdndnazcs0mbascefhOxekashOavaiaX9RcsGcdtfydbhskdndnaCmbaOcefhxxekaOhxavaiaz9RcsGcdtfydbhOkdndnarTmbaocefhrxekaocdfhrao8SbegHcFeGhPdnaHcu9kmbaocofhAaPcFbGhPcrhodninar8SbbgHcFbGaotaPVhPaHcu9kmearcefhraocrfgoc8J9hmbkaAhrxekarcefhrkaPce4cbaPceG9R7amfgmhAkdndnaXcsSmbarhPxekarcefhPar8SbbgocFeGhHdnaocu9kmbarcvfhsaHcFbGhHcrhodninaP8SbbgrcFbGaotaHVhHarcu9kmeaPcefhPaocrfgoc8J9hmbkashPxekaPcefhPkaHce4cbaHceG9R7amfgmhskdndnaCcsSmbaPhoxekaPcefhoaP8SbbgrcFeGhHdnarcu9kmbaPcvfhOaHcFbGhHcrhrdninao8SbbgPcFbGartaHVhHaPcu9kmeaocefhoarcrfgrc8J9hmbkaOhoxekaocefhokaHce4cbaHceG9R7amfgmhOkdndnadcd9hmbabaDcetfgraA87ebarcdfas87ebarclfaO87ebxekabaDcdtfgraABdbarclfasBdbarcwfaOBdbkavc;abfalcitfgrasBdbaraABdlavaicdtfaABdbavc;abfalcefcsGcitfgraOBdbarasBdlavaicefgicsGcdtfasBdbavc;abfalcdfcsGcitfgraABdbaraOBdlavaiazcz6aXcsSVfgicsGcdtfaOBdbaiaCTaCcsSVfhialcifhlkawcefhwalcsGhlaicsGhiaDcifgDae6mbkkcbc99aoaqSEhokavc;aef8Kjjjjbaok:llevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:EPliuo97eue978Jjjjjbca9Rhidndnadcl9hmbdnaec98GglTmbcbhvabhdinadadpbbbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDpxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpkbbadczfhdavclfgval6mbkkalae9pmeaiaeciGgvcdtgdVcbczad9R;8kbaiabalcdtfglad;8qbbdnavTmbaiaipblbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDpxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpklbkalaiad;8qbbskdnaec98GgxTmbcbhvabhdinadczfglalpbbbgopxbbbbbbFFbbbbbbFFgkp9oadpbbbgDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eaDaopmbediwDqkzHOAKY8AEgoczp:Sep;6egrp;Geaoczp:Reczp:Sep;6egwp;Gep;Kep;Legopxb;:FSb;:FSb;:FSb;:FSawaopxbbbbbbbbbbbbbbbbp:2egqawpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegwawp;Meaoaop;Mearaqaramp9op9rp;Kegoaop;Mep;Kep;Kep;Jep;Negrp;Mepxbbn0bbn0bbn0bbn0gqp;Keczp:Reawarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9op9qgwaoarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogopmwDKYqk8AExm35Ps8E8Fp9qpkbbadaDakp9oawaopmbezHdiOAlvCXorQLp9qpkbbadcafhdavclfgvax6mbkkaxae9pmbaiaeciGgvcitgdfcbcaad9R;8kbaiabaxcitfglad;8qbbdnavTmbaiaipblzgopxbbbbbbFFbbbbbbFFgkp9oaipblbgDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eaDaopmbediwDqkzHOAKY8AEgoczp:Sep;6egrp;Geaoczp:Reczp:Sep;6egwp;Gep;Kep;Legopxb;:FSb;:FSb;:FSb;:FSawaopxbbbbbbbbbbbbbbbbp:2egqawpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegwawp;Meaoaop;Mearaqaramp9op9rp;Kegoaop;Mep;Kep;Kep;Jep;Negrp;Mepxbbn0bbn0bbn0bbn0gqp;Keczp:Reawarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9op9qgwaoarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogopmwDKYqk8AExm35Ps8E8Fp9qpklzaiaDakp9oawaopmbezHdiOAlvCXorQLp9qpklbkalaiad;8qbbkk;4wllue97euv978Jjjjjbc8W9Rhidnaec98GglTmbcbhvabhoinaiaopbbbgraoczfgwpbbbgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklbaopxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaqakp;Mearp;Keczp:ReaDakp;Mearp;Keamp9op9qgkpmbezHdiOAlvCXorQLgrp5baipblbpEb:T:j83ibaocwfarp5eaipblbpEe:T:j83ibawaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblbpEd:T:j83ibaocKfakp5eaipblbpEi:T:j83ibaocafhoavclfgval6mbkkdnalae9pmbaiaeciGgvcitgofcbcaao9R;8kbaiabalcitfgwao;8qbbdnavTmbaiaipblbgraipblzgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklaaipxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaqakp;Mearp;Keczp:ReaDakp;Mearp;Keamp9op9qgkpmbezHdiOAlvCXorQLgrp5baipblapEb:T:j83ibaiarp5eaipblapEe:T:j83iwaiaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblapEd:T:j83izaiakp5eaipblapEi:T:j83iKkawaiao;8qbbkk:Pddiue978Jjjjjbc;ab9Rhidnadcd4ae2glc98GgvTmbcbhdabheinaeaepbbbgocwp:Recwp:Sep;6eaocep:SepxbbjZbbjZbbjZbbjZp:UepxbbjFbbjFbbjFbbjFp9op;Mepkbbaeczfheadclfgdav6mbkkdnaval9pmbaialciGgdcdtgeVcbc;abae9R;8kbaiabavcdtfgvae;8qbbdnadTmbaiaipblbgocwp:Recwp:Sep;6eaocep:SepxbbjZbbjZbbjZbbjZp:UepxbbjFbbjFbbjFbbjFp9op;Mepklbkavaiae;8qbbkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaikkkebcjwklz9Tbb",e=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,3,2,0,0,5,3,1,0,1,12,1,0,10,22,2,12,0,65,0,65,0,65,0,252,10,0,0,11,7,0,65,0,253,15,26,11]),n=new Uint8Array([32,0,65,2,1,106,34,33,3,128,11,4,13,64,6,253,10,7,15,116,127,5,8,12,40,16,19,54,20,9,27,255,113,17,42,67,24,23,146,148,18,14,22,45,70,69,56,114,101,21,25,63,75,136,108,28,118,29,73,115]);if(typeof WebAssembly!="object")return{supported:!1};var s=WebAssembly.validate(e)?t:i,r,o=WebAssembly.instantiate(a(s),{}).then(function(m){r=m.instance,r.exports.__wasm_call_ctors()});function a(m){for(var v=new Uint8Array(m.length),y=0;y<m.length;++y){var x=m.charCodeAt(y);v[y]=x>96?x-97:x>64?x-39:x+4}for(var w=0,y=0;y<m.length;++y)v[w++]=v[y]<60?n[v[y]]:(v[y]-60)*64+v[++y];return v.buffer.slice(0,w)}function c(m,v,y,x,w,M){var T=r.exports.sbrk,I=y+3&-4,S=T(I*x),A=T(w.length),C=new Uint8Array(r.exports.memory.buffer);C.set(w,A);var U=m(S,y,x,A,w.length);if(U==0&&M&&M(S,I,x),v.set(C.subarray(S,S+y*x)),T(S-T(0)),U!=0)throw new Error("Malformed buffer data: "+U)}var u={NONE:"",OCTAHEDRAL:"meshopt_decodeFilterOct",QUATERNION:"meshopt_decodeFilterQuat",EXPONENTIAL:"meshopt_decodeFilterExp"},h={ATTRIBUTES:"meshopt_decodeVertexBuffer",TRIANGLES:"meshopt_decodeIndexBuffer",INDICES:"meshopt_decodeIndexSequence"},l=[],d=0;function f(m){var v={object:new Worker(m),pending:0,requests:{}};return v.object.onmessage=function(y){var x=y.data;v.pending-=x.count,v.requests[x.id][x.action](x.value),delete v.requests[x.id]},v}function p(m){for(var v="var instance; var ready = WebAssembly.instantiate(new Uint8Array(["+new Uint8Array(a(s))+"]), {}).then(function(result) { instance = result.instance; instance.exports.__wasm_call_ctors(); });self.onmessage = workerProcess;"+c.toString()+g.toString(),y=new Blob([v],{type:"text/javascript"}),x=URL.createObjectURL(y),w=0;w<m;++w)l[w]=f(x);URL.revokeObjectURL(x)}function _(m,v,y,x,w){for(var M=l[0],T=1;T<l.length;++T)l[T].pending<M.pending&&(M=l[T]);return new Promise(function(I,S){var A=new Uint8Array(y),C=d++;M.pending+=m,M.requests[C]={resolve:I,reject:S},M.object.postMessage({id:C,count:m,size:v,source:A,mode:x,filter:w},[A.buffer])})}function g(m){o.then(function(){var v=m.data;try{var y=new Uint8Array(v.count*v.size);c(r.exports[v.mode],y,v.count,v.size,v.source,r.exports[v.filter]),self.postMessage({id:v.id,count:v.count,action:"resolve",value:y},[y.buffer])}catch(x){self.postMessage({id:v.id,count:v.count,action:"reject",value:x})}})}return{ready:o,supported:!0,useWorkers:function(m){p(m)},decodeVertexBuffer:function(m,v,y,x,w){c(r.exports.meshopt_decodeVertexBuffer,m,v,y,x,r.exports[u[w]])},decodeIndexBuffer:function(m,v,y,x){c(r.exports.meshopt_decodeIndexBuffer,m,v,y,x)},decodeIndexSequence:function(m,v,y,x){c(r.exports.meshopt_decodeIndexSequence,m,v,y,x)},decodeGltfBuffer:function(m,v,y,x,w,M){c(r.exports[h[w]],m,v,y,x,r.exports[u[M]])},decodeGltfBufferAsync:function(m,v,y,x,w){return l.length>0?_(m,v,y,h[x],u[w]):o.then(function(){var M=new Uint8Array(m*v);return c(r.exports[h[x]],M,m,v,y,r.exports[u[w]]),M})}}})();function ll(){return new $v().setMeshoptDecoder(Iy)}let Jf="";function Py(i){Jf=i===""||i.endsWith("/")?i:`${i}/`}const Tn=i=>`${Jf}${i}`,Ly=.001,Dy=.5,qu={playing:!1,settling:!1,stillFor:0,pending:1},Qf=i=>i.playing||i.settling||i.pending>0,Fy=i=>!i.playing&&!i.settling,Ny=i=>({...i,playing:!0,settling:!1,stillFor:0,pending:0}),Uy=i=>i.playing?{...i,playing:!1,settling:!0,stillFor:0}:i,Oy=i=>Qf(i)?i:{...i,pending:1};function ky(i,t,e){const n=Math.max(0,i.pending-1);if(!i.settling)return{...i,pending:n};const s=t<Ly?i.stillFor+e:0;return{...i,pending:n,stillFor:s,settling:s<Dy}}function Ku(i,t,e){return i&&i.clientWidth>0&&i.clientHeight>0?{width:i.clientWidth,height:i.clientHeight}:e||(t.innerWidth>0&&t.innerHeight>0?{width:t.innerWidth,height:t.innerHeight}:{width:1280,height:720})}const Fi="#c8f323",By="#0b0f10";function Gy(i){const t=parseInt(i.slice(1),16);return[t>>16&255,t>>8&255,t&255]}const zy=Gy(Fi),Hy=Fi,Vy="#7aa2ff",Wy="#ffb340",jy="#b18cff",Xy=Fi,qy=Fi,cr=new N;function Ln(i,t,e,n,s,r){const o=2*Math.PI*s/4,a=Math.max(r-2*s,0),c=Math.PI/4;cr.copy(t),cr[n]=0,cr.normalize();const u=.5*o/(o+a),h=1-cr.angleTo(i)/c;return Math.sign(cr[e])===1?h*u:a/(o+a)+u+u*(1-h)}class Ky extends bi{constructor(t=1,e=1,n=1,s=2,r=.1){if(s=s*2+1,r=Math.min(t/2,e/2,n/2,r),super(1,1,1,s,s,s),s===1)return;const o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;const a=new N,c=new N,u=new N(t,e,n).divideScalar(2).subScalar(r),h=this.attributes.position.array,l=this.attributes.normal.array,d=this.attributes.uv.array,f=h.length/6,p=new N,_=.5/s;for(let g=0,m=0;g<h.length;g+=3,m+=2)switch(a.fromArray(h,g),c.copy(a),c.x-=Math.sign(c.x)*_,c.y-=Math.sign(c.y)*_,c.z-=Math.sign(c.z)*_,c.normalize(),h[g+0]=u.x*Math.sign(a.x)+c.x*r,h[g+1]=u.y*Math.sign(a.y)+c.y*r,h[g+2]=u.z*Math.sign(a.z)+c.z*r,l[g+0]=c.x,l[g+1]=c.y,l[g+2]=c.z,Math.floor(g/f)){case 0:p.set(1,0,0),d[m+0]=Ln(p,c,"z","y",r,n),d[m+1]=1-Ln(p,c,"y","z",r,e);break;case 1:p.set(-1,0,0),d[m+0]=1-Ln(p,c,"z","y",r,n),d[m+1]=1-Ln(p,c,"y","z",r,e);break;case 2:p.set(0,1,0),d[m+0]=1-Ln(p,c,"x","z",r,t),d[m+1]=Ln(p,c,"z","x",r,n);break;case 3:p.set(0,-1,0),d[m+0]=1-Ln(p,c,"x","z",r,t),d[m+1]=1-Ln(p,c,"z","x",r,n);break;case 4:p.set(0,0,1),d[m+0]=1-Ln(p,c,"x","y",r,t),d[m+1]=1-Ln(p,c,"y","x",r,e);break;case 5:p.set(0,0,-1),d[m+0]=Ln(p,c,"x","y",r,t),d[m+1]=1-Ln(p,c,"y","x",r,e);break}}}const $u=["technical","tactical","physical","social"],Yu=["auto","authored","off"],tp=/\bwall\b/i,Zu=["n","e","s","w"],$y={n:0,e:Math.PI/2,s:Math.PI,w:-Math.PI/2},Ju=1.8,Qu=7.32,Yy=6;function rs(i,t){return i.width!==void 0&&i.width<Yy?i.width/2:t}function ep(i){return Math.min(Math.max(i*.5,1),2.44)}const th=["save","beaten"],lo=["throw","roll","kick"],uo=["throw","roll"],eh=["lofted","ground"],Zy=3.35,Jy=1,nh=12,Ic=["walk","jog","run","sprint"],ih=["walk","jog","run"];function Go(i){if(i.ball)return i.ball.start;if(!i.players.length)return[0,0];let t=0,e=0;for(const n of i.players)t+=n.start[0],e+=n.start[1];return[t/i.players.length,e/i.players.length]}const Qy=new Set(["move","dribble","pass","shoot","tackle","collect"]),sh=/^#[0-9a-fA-F]{6}$/;function Zt(i,t){throw new Error(`DrillScene3D ${i}: ${t}`)}function di(i,t){return(!Array.isArray(i)||i.length!==2||i.some(e=>typeof e!="number"))&&Zt(t,"expected [x, y] numbers"),i}function tM(i){var o,a,c,u,h;const t=i;t.version!==1&&Zt("version","must be 1"),((o=t.pitch)==null?void 0:o.width)>0&&((a=t.pitch)==null?void 0:a.length)>0||Zt("pitch","width/length > 0 required"),(typeof t.duration!="number"||t.duration<=0)&&Zt("duration","seconds > 0 required"),(typeof t.teams!="object"||t.teams===null||Array.isArray(t.teams))&&Zt("teams","expected an object of team -> { kit }");const e=new Set(Object.keys(t.teams));e.size||Zt("teams","at least one team");for(const l of e){const d=(u=(c=t.teams[l])==null?void 0:c.kit)==null?void 0:u.primary;(typeof d!="string"||!sh.test(d))&&Zt(`teams.${l}.kit.primary`,"expected a hex colour, e.g. #1B4FD8")}Array.isArray(t.players)||Zt("players","expected an array");const n=new Set,s=new Set;t.players.forEach((l,d)=>{(!l.id||n.has(l.id))&&Zt(`players[${d}].id`,"missing or duplicate"),n.add(l.id),e.has(l.team)||Zt(`players[${d}].team`,`unknown team ${l.team}`),di(l.start,`players[${d}].start`),l.role!==void 0&&l.role!=="keeper"&&Zt(`players[${d}].role`,`expected "keeper" or absent, got ${String(l.role)}`),l.role==="keeper"&&s.add(l.id)}),t.ball!==void 0&&(di((h=t.ball)==null?void 0:h.start,"ball.start"),t.ball.static!==void 0&&typeof t.ball.static!="boolean"&&Zt("ball.static","expected a boolean or absent")),t.balls!==void 0&&(Array.isArray(t.balls)||Zt("balls","expected an array"),t.balls.forEach((l,d)=>{(typeof l!="object"||l===null||Array.isArray(l))&&Zt(`balls[${d}]`,"expected { carrier?, path }"),l.carrier!==void 0&&typeof l.carrier!="string"&&Zt(`balls[${d}].carrier`,`expected a player id or absent, got ${String(l.carrier)}`),(!Array.isArray(l.path)||!l.path.length)&&Zt(`balls[${d}].path`,"expected at least one { t, at }"),l.path.forEach((f,p)=>{(typeof(f==null?void 0:f.t)!="number"||f.t<0)&&Zt(`balls[${d}].path[${p}].t`,"seconds >= 0 required"),p>0&&f.t<=l.path[p-1].t&&Zt(`balls[${d}].path[${p}].t`,"times must ascend"),di(f.at,`balls[${d}].path[${p}].at`)})})),(t.equipment??[]).forEach((l,d)=>{l.type!=="cone"&&l.type!=="goal"&&Zt(`equipment[${d}].type`,String(l.type)),di(l.at,`equipment[${d}].at`),l.width!==void 0&&(l.type!=="goal"&&Zt(`equipment[${d}].width`,"only a goal has a mouth width"),typeof l.width=="number"&&l.width>=Ju-1e-9&&l.width<=Qu+1e-9||Zt(`equipment[${d}].width`,`expected ${Ju}..${Qu} m, got ${String(l.width)}`)),l.facing!==void 0&&(l.type!=="goal"&&Zt(`equipment[${d}].facing`,"only a goal has a facing"),Zu.includes(l.facing)||Zt(`equipment[${d}].facing`,`expected one of ${Zu.join("|")}, got ${String(l.facing)}`))});const r=(l,d)=>{n.has(l)||Zt(d,`unknown player ${l}`)};if((t.balls??[]).forEach((l,d)=>{l.carrier!==void 0&&r(l.carrier,`balls[${d}].carrier`)}),Array.isArray(t.events)||Zt("events","expected an array"),t.events.forEach((l,d)=>{var f;if((typeof l.t!="number"||l.t<0)&&Zt(`events[${d}].t`,"seconds >= 0 required"),Qy.has(l.type)||Zt(`events[${d}].type`,`unknown type ${l.type}`),l.type==="move"&&(r(l.player,`events[${d}].player`),di(l.to,`events[${d}].to`),l.gait!==void 0&&!Ic.includes(l.gait)&&Zt(`events[${d}].gait`,`expected one of ${Ic.join("|")}, got ${String(l.gait)}`)),l.type==="dribble"&&(r(l.player,`events[${d}].player`),di(l.to,`events[${d}].to`),l.gait!==void 0&&!ih.includes(l.gait)&&Zt(`events[${d}].gait`,`expected one of ${ih.join("|")}, got ${String(l.gait)}`)),(l.type==="move"||l.type==="dribble")&&l.runPath!==void 0&&typeof l.runPath!="boolean"&&Zt(`events[${d}].runPath`,`expected a boolean, got ${String(l.runPath)}`),l.type==="pass"){if(r(l.from,`events[${d}].from`),r(l.to,`events[${d}].to`),l.flightStyle!==void 0&&!["ground","clipped","lofted"].includes(l.flightStyle)&&Zt(`events[${d}].flightStyle`,`expected "ground", "clipped" or "lofted", got ${String(l.flightStyle)}`),l.loft!==void 0&&!(typeof l.loft=="number"&&l.loft>0)&&Zt(`events[${d}].loft`,"expected a number > 0 (metres)"),l.style!==void 0&&(lo.includes(l.style)||Zt(`events[${d}].style`,`expected one of ${lo.join("|")}, got ${String(l.style)}`),!s.has(l.from)&&!uo.includes(l.style)&&Zt(`events[${d}].style`,`"${l.style}" is keeper-only; ${l.from} is not a keeper (anyone may ${uo.join(" or ")})`)),l.toFeet!==void 0&&(typeof l.toFeet!="boolean"&&Zt(`events[${d}].toFeet`,`expected a boolean, got ${String(l.toFeet)}`),s.has(l.to)||Zt(`events[${d}].toFeet`,`toFeet is keeper-only; ${l.to} is not a keeper`),l.toFeet&&l.flightStyle!==void 0&&l.flightStyle!=="ground")){let p=[...((f=t.players.find(_=>_.id===l.to))==null?void 0:f.start)??[0,0]];for(let _=0;_<d;_++){const g=t.events[_];(g.type==="move"||g.type==="dribble")&&g.player===l.to&&(p=[...g.to])}for(const _ of t.equipment??[]){if(_.type!=="goal")continue;const g=Math.hypot(p[0]-_.at[0],p[1]-_.at[1]);g<nh&&Zt(`events[${d}].toFeet`,`a ${l.flightStyle} ball is taken in the hands unless he is sweeping outside his area; ${l.to} meets it ${g.toFixed(1)} m from the goal at [${_.at[0]}, ${_.at[1]}] (needs ${nh} m)`)}}l.fromFeet!==void 0&&(typeof l.fromFeet!="boolean"&&Zt(`events[${d}].fromFeet`,`expected a boolean, got ${String(l.fromFeet)}`),s.has(l.from)||Zt(`events[${d}].fromFeet`,`fromFeet is keeper-only; ${l.from} is not a keeper`),l.fromFeet&&t.events.some((p,_)=>_<d&&p.type!=="move")&&Zt(`events[${d}].fromFeet`,"fromFeet is the opener's flag; this is not the drill's first ball action"))}if((l.type==="pass"||l.type==="shoot")&&l.deflect!==void 0){const p=l.deflect;(typeof p!="object"||p===null||Array.isArray(p))&&Zt(`events[${d}].deflect`,"expected { to: [x, y], style: lofted | ground }"),di(p.to,`events[${d}].deflect.to`),eh.includes(p.style)||Zt(`events[${d}].deflect.style`,`expected one of ${eh.join("|")}, got ${String(p.style)}`),l.type==="pass"&&!s.has(l.to)&&Zt(`events[${d}].deflect`,`deflections are keeper-only; ${l.to} is not a keeper`),l.type==="shoot"&&!(l.flightStyle==="ground"&&p.style==="ground")&&!s.size&&Zt(`events[${d}].deflect`,"a deflected shot is a keeper's parry; this drill has no keeper");for(const _ of t.equipment??[]){if(_.type!=="goal")continue;const m=_.facing==="e"||_.facing==="w"?p.to[1]-_.at[1]:p.to[0]-_.at[0];if(Math.abs(m)>rs(_,Zy))continue;(_.facing!==void 0?{n:p.to[1]-_.at[1],s:_.at[1]-p.to[1],e:p.to[0]-_.at[0],w:_.at[0]-p.to[0]}[_.facing]:_.at[1]<=t.pitch.length/2?p.to[1]-_.at[1]:_.at[1]-p.to[1])<=Jy&&Zt(`events[${d}].deflect.to`,`[${p.to[0]}, ${p.to[1]}] is inside the goal mouth at [${_.at[0]}, ${_.at[1]}] — a punch or a parry puts the ball out, never back into the net`)}}if(l.type==="tackle"&&(r(l.player,`events[${d}].player`),r(l.from,`events[${d}].from`),l.from===l.player&&Zt(`events[${d}].from`,"a player cannot tackle himself"),l.style!==void 0&&l.style!=="poke"&&l.style!=="slide"&&Zt(`events[${d}].style`,`expected "poke" or "slide", got ${String(l.style)}`)),l.type==="collect"&&r(l.player,`events[${d}].player`),l.type==="shoot"&&(r(l.player,`events[${d}].player`),di(l.at,`events[${d}].at`),l.flight!==void 0&&!(typeof l.flight=="number"&&l.flight>0)&&Zt(`events[${d}].flight`,"expected seconds > 0, or absent (engine derives from distance)"),l.corner!==void 0&&l.corner!=="left"&&l.corner!=="right"&&Zt(`events[${d}].corner`,`expected "left" or "right" (as seen by the shooter), got ${String(l.corner)}`),l.flightStyle!==void 0&&l.flightStyle!=="ground"&&Zt(`events[${d}].flightStyle`,`expected "ground" or absent on a shoot, got ${String(l.flightStyle)}`),l.touch!==void 0&&(typeof l.touch!="boolean"&&Zt(`events[${d}].touch`,`expected a boolean, got ${String(l.touch)}`),l.touch&&l.flightStyle!=="ground"&&Zt(`events[${d}].touch`,'a touch is a ground ball; it needs flightStyle "ground"')),l.style!==void 0&&(lo.includes(l.style)||Zt(`events[${d}].style`,`expected one of ${lo.join("|")}, got ${String(l.style)}`),!s.has(l.player)&&!uo.includes(l.style)&&Zt(`events[${d}].style`,`"${l.style}" is keeper-only; ${l.player} is not a keeper (anyone may ${uo.join(" or ")})`),l.flightStyle!=="ground"&&Zt(`events[${d}].style`,"a distribution to a point needs a ground flight"))),(l.type==="pass"||l.type==="shoot")&&l.header!==void 0&&typeof l.header!="boolean"&&Zt(`events[${d}].header`,`expected a boolean, got ${String(l.header)}`),(l.type==="pass"||l.type==="shoot")&&l.deadBall!==void 0&&typeof l.deadBall!="boolean"&&Zt(`events[${d}].deadBall`,`expected a boolean, got ${String(l.deadBall)}`),(l.type==="pass"||l.type==="shoot")&&l.firstTime!==void 0&&typeof l.firstTime!="boolean"&&Zt(`events[${d}].firstTime`,`expected a boolean, got ${String(l.firstTime)}`),l.type==="pass"||l.type==="shoot"||l.type==="dribble"){const p=l.newBall;p!==void 0&&(typeof p!="boolean"&&Zt(`events[${d}].newBall`,`expected a boolean, got ${String(p)}`),p&&!t.events.some((_,g)=>g<d&&_.type!=="move")&&Zt(`events[${d}].newBall`,"newBall swaps the live ball for a spare; this is the drill's first ball action, so there is nothing to swap"))}}),t.overlays!==void 0){const l=t.overlays;(typeof l!="object"||l===null||Array.isArray(l))&&Zt("overlays","expected an object"),l.runPaths!==void 0&&!Yu.includes(l.runPaths)&&Zt("overlays.runPaths",`expected one of ${Yu.join("|")}, got ${String(l.runPaths)}`),l.zones!==void 0&&(Array.isArray(l.zones)||Zt("overlays.zones","expected an array"),l.zones.forEach((d,f)=>{di(d.at,`overlays.zones[${f}].at`),typeof d.w=="number"&&d.w>0&&typeof d.h=="number"&&d.h>0||Zt(`overlays.zones[${f}]`,"w/h metres > 0 required"),d.color!==void 0&&!$u.includes(d.color)&&!sh.test(d.color)&&Zt(`overlays.zones[${f}].color`,`expected ${$u.join("|")} or a hex colour, got ${String(d.color)}`),d.label!==void 0&&typeof d.label!="string"&&Zt(`overlays.zones[${f}].label`,"expected a string")}))}return t.keeper!==void 0&&((typeof t.keeper!="object"||t.keeper===null||Array.isArray(t.keeper))&&Zt("keeper","expected { outcome: save | beaten }"),th.includes(t.keeper.outcome)||Zt("keeper.outcome",`expected one of ${th.join("|")}, got ${String(t.keeper.outcome)}`)),t}function eM(i){const t=new Ni({color:Xy,roughness:.6,toneMapped:!1}),e=new fn,n=new Re(new Ky(.42,.09,.42,4,.035),t);n.position.y=.045;const s=[new oe(.17,.06),new oe(.15,.1)];for(let o=0;o<=8;o++)s.push(new oe(.15-.11*o/8,.1+.31*o/8));for(let o=1;o<=4;o++){const a=o/4*(Math.PI/2);s.push(new oe(.04*Math.cos(a),.41+.04*Math.sin(a)))}const r=new Re(new tl(s,24),t);return e.add(n,r),e.traverse(o=>{o.isMesh&&(o.castShadow=!0)}),e.scale.setScalar(i),e}function np(i,t,e,n,s,r){let o=r;const a=()=>(o=o*1103515245+12345&2147483647)/2147483647,c=e/n,u=5*c;for(let h=Math.floor(s/5)*5;h<s+n;h+=5){const l=(h-s)*c,d=i.createLinearGradient(0,l,0,l+u);(Math.floor(h/5)%2+2)%2===0?(d.addColorStop(0,"#0f563c"),d.addColorStop(1,"#0d4e35")):(d.addColorStop(0,"#094027"),d.addColorStop(1,"#0b432b")),i.fillStyle=d,i.fillRect(0,l,t,u+1)}for(let h=0;h<20;h++){const l=(h%5+.15+a()*.7)*(t/5),d=(Math.floor(h/5)+.15+a()*.7)*(e/4),f=(40+a()*120)*(t/1024),p=a()>.5,_=i.createRadialGradient(l,d,0,l,d,f);_.addColorStop(0,p?"rgba(130,140,60,0.078)":"rgba(8,30,12,0.09)"),_.addColorStop(1,"rgba(0,0,0,0)"),i.fillStyle=_,i.fillRect(l-f,d-f,2*f,2*f)}ip(i,t,e,a,1)}function ip(i,t,e,n,s){const r=a=>(a*s).toFixed(3),o=t*e/1048576;for(let a=0;a<6400*o;a++){const c=n()>.5;i.fillStyle=c?`rgba(175,220,185,${r(.05)})`:`rgba(0,16,4,${r(.07)})`,i.fillRect(n()*t,n()*e,6+n()*22,1)}for(let a=0;a<9600*o;a++){const c=n()>.5;i.fillStyle=c?`rgba(180,220,190,${r(.04)})`:`rgba(0,12,3,${r(.05)})`,i.fillRect(n()*t,n()*e,2+n()*5,1)}}function nM(i,t){const e=document.createElement("canvas");e.width=1024,e.height=1024;const n=e.getContext("2d");np(n,1024,1024,t,0,7),n.strokeStyle="rgba(255,255,255,0.8)",n.lineWidth=5,n.strokeRect(10,10,1004,1004),sp(n);const s=new In(e);return s.colorSpace=Ve,s.flipY=!1,s}function sp(i,t=1,e=1,n=.12){i.save(),i.translate(512,512),i.scale(t,e);const s=i.createRadialGradient(0,0,480,0,0,760);s.addColorStop(0,"rgba(0,0,0,0)"),s.addColorStop(1,`rgba(0,0,0,${n})`),i.fillStyle=s,i.fillRect(-2048,-2048,4096,4096),i.restore()}const iM=2.5;function rp(i,t,e,n,s,r){i.beginPath(),i.moveTo(t+r,e),i.arcTo(t+n,e,t+n,e+s,r),i.arcTo(t+n,e+s,t,e+s,r),i.arcTo(t,e+s,t,e,r),i.arcTo(t,e,t+n,e,r),i.closePath()}const on=6;function sM(i,t,e){const n=document.createElement("canvas");n.width=1024,n.height=1024;const s=n.getContext("2d");np(s,1024,1024,t+2*e,-e,7),s.fillStyle="rgba(0,0,0,0.12)",s.fillRect(0,0,1024,1024),sp(s,i/(i+2*e),t/(t+2*e));const r=e/(i+2*e)*1024,o=e/(t+2*e)*1024,a=[[0,0,r,0],[1024,0,1024-r,0],[0,0,0,o],[0,1024,0,1024-o]];for(const[h,l,d,f]of a){const p=s.createLinearGradient(h,l,d,f);p.addColorStop(0,"rgba(0,0,0,0.55)"),p.addColorStop(1,"rgba(0,0,0,0)"),s.fillStyle=p,s.fillRect(0,0,1024,1024)}const c=iM*2/(i+t+4*e)*1024;s.globalCompositeOperation="destination-in",s.fillStyle="#fff",rp(s,1,1,1022,1022,c),s.fill(),s.globalCompositeOperation="source-over";const u=new In(n);return u.colorSpace=Ve,u.flipY=!1,u}function rM(){const i=document.createElement("canvas");i.width=i.height=256;const t=i.getContext("2d");t.filter="blur(14px)",t.fillStyle="rgba(0,0,0,0.9)",rp(t,40,40,176,176,34),t.fill();const e=new In(i);return e.flipY=!1,e}let lr=null;function oM(){if(lr)return lr;const i=document.createElement("canvas");i.width=i.height=128;const t=i.getContext("2d"),e=t.createRadialGradient(64,64,0,64,64,64);return e.addColorStop(0,"rgba(0,0,0,0.9)"),e.addColorStop(.6,"rgba(0,0,0,0.55)"),e.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=e,t.fillRect(0,0,128,128),lr=new In(i),lr.userData.shared=!0,lr}function aM(i){const t=new Re(new el(i/2,24).rotateX(-Math.PI/2),new en({map:oM(),transparent:!0,opacity:.55,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1}));return t.position.y=.005,t.renderOrder=1,t}const qn={halfW:3.348,top:2.5,zMin:-1.4688,zMax:.0576},cM=.5;function Er(i,t){const e=new Map;for(const s of i.equipment??[]){if(s.type!=="goal")continue;const r=s.facing==="e"||s.facing==="w",o=r?`x${s.at[0]}`:`z${s.at[1]}`,a=e.get(o)??{avail:r?i.pitch.length:i.pitch.width,widths:[]};a.widths.push(2*rs(s,qn.halfW)),e.set(o,a)}if(!e.size)return t;let n=t;for(const{avail:s,widths:r}of e.values()){const o=r.reduce((a,c)=>a+c,0);n=Math.min(n,s/(o+(r.length-1)*cM*(o/r.length)))}return n}function lM(i){const t=rs(i,qn.halfW);return t===qn.halfW?qn:{halfW:t,top:ep(i.width),zMin:-Ci,zMax:Ci}}function op(i,t){return i.facing!==void 0?$y[i.facing]:i.at[1]>t/2?Math.PI:0}const Ci=.08;function uM(i){const t=ep(i),e=new Ni({color:"#FFFFFF",roughness:.5}),n=new fn,s=i/2-Ci;for(const o of[-1,1]){const a=new Re(new Sr(Ci,Ci,t,12),e);a.position.set(o*s,t/2,0),n.add(a)}const r=new Re(new Sr(Ci,Ci,2*s,12),e);return r.rotation.z=Math.PI/2,r.position.y=t-Ci,n.add(r),e.userData.drillOwned=!0,n.traverse(o=>{const a=o;a.isMesh&&(a.castShadow=!0,a.geometry.userData.drillOwned=!0)}),n}const ap=.8;function hM(i,t,e){const n=new Re(new bi(e?i:t,ap,e?t:i),new Ni({color:"#FFFFFF",roughness:.55}));return n.castShadow=!0,n.receiveShadow=!0,n}function cp(i,t){i.scale.set(1,t,1),i.position.y=ap*t/2}let rh=null;function dM(i){return rh??(rh=i.loadAsync(Tn("assets/goal.glb")).then(t=>t.scene).catch(t=>{throw rh=null,t}))}let oh=!1;function fM(i,t){if(oh||!t)return;oh=!0;const e=new cn().setFromObject(i),n=Math.max(Math.abs(e.max.x-i.position.x),Math.abs(e.min.x-i.position.x))/t,s=(e.max.y-i.position.y)/t;(Math.abs(n-qn.halfW)>.05||Math.abs(s-qn.top)>.05)&&console.warn(`[engine3d] goal.glb no longer matches GOAL_BOX (half-width ${n.toFixed(3)} vs ${qn.halfW}, top ${s.toFixed(3)} vs ${qn.top}) — the camera fit and tools/look/corpus_check.ts size the goal from those numbers; update scene/pitch.ts`)}function pM(i){const{width:t,length:e}=i.pitch;return[[-1,-1],[1,-1],[1,1],[-1,1]].map(([n,s])=>new N(n*(t/2+on),0,s*(e/2+on)))}function Pc(i,t){const{width:e,length:n}=i.pitch,s=Er(i,t),r=[];for(const o of i.equipment??[]){if(o.type!=="goal")continue;const a=o.at[0]-e/2,c=o.at[1]-n/2,u=lM(o),h=op(o,n),l=Math.cos(h),d=Math.sin(h);for(const f of[-u.halfW*s,u.halfW*s])for(const p of[0,u.top*s])for(const _ of[u.zMin*s,u.zMax*s])r.push(new N(a+f*l+_*d,p,c-f*d+_*l))}return r}const mM=600,lp=mM/2*Math.SQRT2,ah=30,gM=-.06,_M=-.04,bM=660496,xM="#04170c",ch=.7,up=1.2;function vM(i,t,e){const n=Math.max(t,e),s=n/2+on,r=up*n;return r>s?1-(1-ch)*ul((i-s)/(r-s)):i>=s?ch:1}function ul(i){const t=Math.min(Math.max(i,0),1);return t*t*(3-2*t)}const yM=1.6,MM=2.6;function SM(i,t){const e=Math.max(i,t);return{near:yM*e+on,far:MM*e+on}}const lh="#0b1f22",ja="#010203",AM=1.02;function EM(i,t){return Math.hypot(i/2+on,t/2+on)*AM}const TM=.12,wM=1.15,hl=(i,t)=>Math.hypot(i/2,t/2),hp=(i,t)=>hl(i,t)*wM,ho=12,Xa=18,uh=.3,RM=2.4,hh=1.2,CM=.4,IM=6;function PM(i,t,e=1/0){const n=i/2+on,s=t/2+on,r=t>=i?"z":"x",o=r==="z"?n:s,a=r==="z"?s:n,c=LM(o,a,e*DM),u=[-(a+c),a+c],h=-(o+c),l=u.map(d=>r==="z"?[h,d]:[d,h]);return{axis:r,masts:l}}function LM(i,t,e){if(!(e<Math.hypot(i+ho,t+ho)))return ho;const n=i+t,s=i*i+t*t-e*e,r=n*n-2*s;return r>0?Math.max(0,Math.min(ho,(-n+Math.sqrt(r))/2)):0}const DM=.97;function dl(){const i=document.createElement("canvas");i.width=i.height=512;const t=i.getContext("2d");t.fillStyle=xM,t.fillRect(0,0,512,512);let e=7;ip(t,512,512,()=>(e=e*1103515245+12345&2147483647)/2147483647,.25);const n=new In(i);return n.colorSpace=Ve,n.wrapS=n.wrapT=1e3,n}function FM(){const i=new fn,t=new Ar({color:1251867}),e=new Re(new bi(uh,Xa,uh),t);e.position.y=Xa/2;const n=new Re(new bi(RM,hh,CM),t);n.position.y=Xa+hh/2;const s=new bg(new Pf({map:NM(),color:16772564,opacity:.18,blending:2,depthWrite:!1,transparent:!0,fog:!1,toneMapped:!1}));return s.scale.setScalar(IM),s.position.y=n.position.y,s.geometry.userData.shared=!0,i.add(e,n,s),i}let ur=null;function NM(){if(ur)return ur;const i=document.createElement("canvas");i.width=i.height=128;const t=i.getContext("2d"),e=t.createRadialGradient(64,64,0,64,64,64);return e.addColorStop(0,"rgba(255,237,212,1)"),e.addColorStop(.35,"rgba(255,237,212,0.45)"),e.addColorStop(1,"rgba(255,237,212,0)"),t.fillStyle=e,t.fillRect(0,0,128,128),ur=new In(i),ur.userData.shared=!0,ur}function UM(){return[[0,ja],[Dc,lh],[BM,lh],[fl,ja],[1,ja]]}function OM(){const i=document.createElement("canvas");i.width=4,i.height=256;const t=i.getContext("2d"),e=t.createLinearGradient(0,0,0,256);for(const[s,r]of UM())e.addColorStop(Math.min(1,Math.max(0,1-s)),r);t.fillStyle=e,t.fillRect(0,0,4,256);const n=new In(i);return n.colorSpace=Ve,n.wrapS=n.wrapT=1001,n}const Lc=.03,dh=.06,kM=.28,fl=1,Dc=fl*dh/(dh+kM-Lc),BM=.85;function GM(i,t={repeat:0,offset:0}){const e=Math.max(i,Lc+.03);return t.repeat=(fl-Dc)/(e-Lc),t.offset=Dc-t.repeat*(1-e),t}const zM=60,HM=i=>Math.asin(Math.min(Math.max(-i,-1),1))*180/Math.PI<zM,VM=-1e3;function dp(i,t,e,n,s,r){const o=new Ar({map:e,vertexColors:!0}),a=new Ar({map:e,vertexColors:!0,transparent:!0,depthWrite:!1}),c=up*Math.max(i,t),u=n>c?[[0,c,96],[c,n,8]]:[[0,n,96]];s>n&&u.push([n,s,16]);const h=[];for(const[l,d,f]of u){const p=l===n,_=new Zo(l,d,128,f).rotateX(-Math.PI/2),g=_.getAttribute("position"),m=_.getAttribute("uv"),v=p?4:3,y=new Float32Array(g.count*v);for(let w=0;w<g.count;w++){const M=g.getX(w),T=g.getZ(w);m.setXY(w,M/ah,T/ah);const I=Math.hypot(M,T),S=vM(I,i,t);y[v*w]=y[v*w+1]=y[v*w+2]=S,p&&(y[v*w+3]=d>l?1-ul((I-l)/(d-l)):1)}m.needsUpdate=!0,_.setAttribute("color",new De(y,v));const x=new Re(_,p?a:o);x.userData[r]=p,x.position.y=gM,h.push(x)}return h}function WM(i,t,e=1,n=dl()){const s=new fn;n.anisotropy=e;for(const r of dp(i,t,n,hl(i,t),hp(i,t),"floatRim"))s.add(r);return s}const qa=16;function jM(i,t,e){const n=document.createElement("canvas");n.width=n.height=512;const s=n.getContext("2d");s.fillStyle="#000",s.fillRect(0,0,512,512);const r=512/(i+2*e),o=512/(t+2*e),a=hl(i,t),c=hp(i,t);s.save(),s.translate(256,256),s.scale(1,o/r);const u=s.createRadialGradient(0,0,a*r,0,0,c*r);for(let l=0;l<=qa;l++){const d=Math.round(255*(1-ul(l/qa)));u.addColorStop(l/qa,`rgb(${d},${d},${d})`)}s.fillStyle=u,s.fillRect(-4096,-4096,8192,8192),s.restore();const h=new In(n);return h.flipY=!1,h}function XM(i,t,e=1,n=lp,s=dl()){const r=new fn;s.anisotropy=e;const o=Math.max(n,Math.max(i,t)/2+on+1),a=o*(1-TM),c=Math.max(a,Math.max(i,t)/2+on);for(const h of dp(i,t,s,c,o,"rimFade"))r.add(h);const{masts:u}=PM(i,t,o);for(const[h,l]of u){const d=FM();d.name="mast",d.position.set(h,0,l),r.add(d)}return r}async function qM(i,t,e=1,n=1,s=lp){var A;const r=Er(t,n),{width:o,length:a}=t.pitch,c=(C,U=0)=>new N(C[0]-o/2,U,C[1]-a/2),u=C=>(C.anisotropy=e,C),h=u(sM(o,a,on)),l=()=>new $n(o+2*on,a+2*on).rotateX(-Math.PI/2),d=new Re(l(),new Ar({map:h,transparent:!0})),f=new Re(l(),new Ar({map:h,alphaMap:jM(o,a,on),transparent:!0}));for(const C of[d,f])C.position.y=-.02,C.renderOrder=-1,C.receiveShadow=!0;const p=new Re(new $n((o+2*on)*1.5,(a+2*on)*1.5).rotateX(-Math.PI/2),new en({map:rM(),transparent:!0,depthWrite:!1}));p.position.y=_M,p.renderOrder=-2,i.add(p);const _=new Re(new $n(o,a).rotateX(-Math.PI/2),new Ni({map:u(nM(o,a)),roughness:.9}));_.receiveShadow=!0;const g=dl(),m=XM(o,a,e,s,g),v=WM(o,a,e,g);i.add(d,f,_,m,v);const y=C=>{m.visible=C,p.visible=C,d.visible=C,v.visible=!C,f.visible=!C};y(!0);const x=m.children.filter(C=>C.name==="mast"),w=C=>{for(const U of x)U.visible=C};w(!1);const M=ll(),T=[],I=[];for(const C of t.equipment??[])if(C.type==="cone"){const U=eM(n);U.position.copy(c(C.at,0)),i.add(U),I.push(U)}else{const U=rs(C,qn.halfW)!==qn.halfW,P=U?uM(C.width):(await dM(M)).clone();P.position.copy(c(C.at)),P.rotation.y=op(C,a),P.scale.setScalar(r),i.add(P),T.push(P),U||fM(P,r)}const S=[];for(const C of((A=t.overlays)==null?void 0:A.zones)??[]){if(!tp.test(C.label??""))continue;const U=hM(Math.max(C.w,C.h),Math.min(C.w,C.h),C.w>=C.h),P=c(C.at);U.position.set(P.x,0,P.z),cp(U,n),i.add(U),S.push(U)}return{toWorld:c,goals:T,cones:I,boards:S,setWorld:y,setMasts:w}}const fh=new N(10,20,8).normalize(),KM=1.05,Fc=2048,$M=1024,YM=1600,ZM=(i,t)=>Math.max(i,t)>=YM?Fc:$M,JM=5;function QM(i){const t=new cn().setFromPoints(i).getCenter(new N);let e=0;for(const r of i)e=Math.max(e,r.distanceTo(t));const n=Math.max(e*1.15,8),s=n*2;return{centre:t,radius:n,distance:s,far:s+n}}function Qo(i,t=()=>new Kv({antialias:!0})){const e=t();e.setPixelRatio(Math.min(devicePixelRatio,2));let s=Ku(i,window);const r=new Set;e.setSize(s.width,s.height,!1);const o=e.domElement;o.style.width="100%",o.style.height="100%",o.style.display="block",e.shadowMap.enabled=!0,e.shadowMap.type=2,e.toneMapping=4,e.toneMappingExposure=KM,e.outputColorSpace=Ve,i.appendChild(o);const a=new _g;a.background=new he(By);const c=new _n(45,s.width/s.height,1,1e3);c.position.set(8,6,12),c.lookAt(0,1,0);const u=new rl(16772564,JM);u.position.copy(fh).multiplyScalar(40),u.castShadow=!0,u.shadow.mapSize.set(Fc,Fc),u.shadow.radius=4,a.add(u,u.target,new Vg(12571874,2902572,.9));let h=Math.min(devicePixelRatio,2);function l(){var yt;const et=ZM(s.width*h,s.height*h);u.shadow.mapSize.width!==et&&(u.shadow.mapSize.set(et,et),(yt=u.shadow.map)==null||yt.dispose(),u.shadow.map=null)}l();function d(){const et=Ku(i,window,s),yt=Math.min(devicePixelRatio,2),Bt=yt!==h;if(Bt&&(h=yt,e.setPixelRatio(h)),et.width!==s.width||et.height!==s.height){s=et,l(),c.aspect=s.width/s.height,c.updateProjectionMatrix(),e.setSize(s.width,s.height,!1),A();for(const Qt of[...r])Qt()}else Bt&&(e.setSize(s.width,s.height,!1),l(),A())}const f=typeof ResizeObserver=="function"?new ResizeObserver(d):null;f?f.observe(i):addEventListener("resize",d);let p=null;const _=()=>{g(),d()};function g(){p==null||p.removeEventListener("change",_),p=typeof matchMedia=="function"?matchMedia(`(resolution: ${devicePixelRatio}dppx)`):null,p==null||p.addEventListener("change",_)}g();let m=!0,v=!1,y=0;function x(){v||(v=!0,y=requestAnimationFrame(B))}function w(){m=!document.hidden,m&&(U=-1,x())}document.addEventListener("visibilitychange",w);let M=!0,T=qu,I=0;const S=new N;function A(){T=Oy(T),m&&(v||(U=-1),x())}let C=()=>{},U=-1,P=null,O=null,Z=null,H=!0;function X(et,yt){if(C(et,yt),at(),P&&a.fog){const Bt=c.position.length();a.fog.near=Bt+P.near,a.fog.far=Bt+P.far}e.render(a,c),I++}function B(et){if(v=!1,!m)return;const yt=U<0?0:(et-U)/1e3;U=et,S.copy(c.position),X(yt,et),T=ky(T,S.distanceTo(c.position),yt),M||Qf(T)?x():U=-1}function j(et){if(!et.length)return;const{centre:yt,radius:Bt,distance:Qt,far:de}=QM(et);u.target.position.copy(yt),u.target.updateMatrixWorld(),u.position.copy(fh).multiplyScalar(Qt).add(yt);const se=u.shadow.camera;se.left=-Bt,se.right=Bt,se.top=Bt,se.bottom=-Bt,se.near=.5,se.far=de,se.updateProjectionMatrix()}function Q(et){if(P=et,!et){a.fog=null;return}a.fog??(a.fog=new Kc(bM,et.near,et.far))}function it(et){if(Z=et,!et){O&&(O.visible=!1);return}O||(O=new Re(new $n(1,1),new en({map:OM(),depthWrite:!1,depthTest:!1,toneMapped:!1,fog:!1})),O.renderOrder=VM,O.frustumCulled=!1,a.add(O)),O.visible=H}function ct(et){H=et,O&&(O.visible=et&&!!Z)}const Dt=new N,nt=new N,ot={repeat:0,offset:0};function at(){if(!O||!Z)return;if(!H){O.visible=!1;return}if(c.getWorldDirection(Dt),O.visible=HM(Dt.y),!O.visible)return;const et=Math.hypot(c.position.x,c.position.z)||1;nt.set(-c.position.x/et*Z,0,-c.position.z/et*Z),nt.project(c);const yt=(1-nt.y)/2,Bt=c.near*1.5,Qt=2*Bt*Math.tan(c.fov*Math.PI/360);O.scale.set(Qt*c.aspect,Qt,1),O.quaternion.copy(c.quaternion),O.position.copy(c.position).addScaledVector(Dt,Bt),GM(yt,ot);const de=O.material.map;de.repeat.set(1,ot.repeat),de.offset.set(0,ot.offset)}return{scene:a,camera:c,renderer:e,fitShadow:j,setFog:Q,setHorizon:it,setSky:ct,size:()=>({...s}),remeasure:d,onBox(et){return r.add(et),()=>{r.delete(et)}},start(et){C=et,x()},park(et){C===et&&(cancelAnimationFrame(y),v=!1,C=()=>{},T=qu,I=0,U=-1)},step(et,yt=performance.now()){X(et,yt)},frames:()=>I,rule:{enable(){M=!1},play(){T=Ny(T),A()},pause(){T=Uy(T),A()},wake:A,snap:()=>Fy(T)},dispose(){m=!1,r.clear(),p==null||p.removeEventListener("change",_),f?f.disconnect():removeEventListener("resize",d),document.removeEventListener("visibilitychange",w),e.dispose(),e.forceContextLoss(),e.domElement.remove()}}}function fp(i,t){for(const e of t)e.traverse(n=>{var r,o;const s=n;(r=s.skeleton)==null||r.dispose();for(const a of mp(s))a.userData.drillOwned&&a.dispose();(o=s.geometry)!=null&&o.userData.drillOwned&&s.geometry.dispose()}),i.remove(e);pp(i)}function pp(i){i.traverse(t=>{var n,s;const e=t;(n=e.geometry)!=null&&n.userData.shared||(s=e.geometry)==null||s.dispose();for(const r of mp(e)){for(const o of Object.values(r)){const a=o;a!=null&&a.isTexture&&!a.userData.shared&&a.dispose()}r.dispose()}})}const mp=i=>Array.isArray(i.material)?i.material:i.material?[i.material]:[];function tS(i){const t=new Map,e=new Map,n=i.clone();return gp(i,n,function(s,r){t.set(r,s),e.set(s,r)}),n.traverse(function(s){if(!s.isSkinnedMesh)return;const r=s,o=t.get(s),a=o.skeleton.bones;r.skeleton=o.skeleton.clone(),r.bindMatrix.copy(o.bindMatrix),r.skeleton.bones=a.map(function(c){return e.get(c)}),r.bind(r.skeleton,r.bindMatrix)}),n}function gp(i,t,e){e(i,t);for(let n=0;n<i.children.length;n++)gp(i.children[n],t.children[n],e)}const pl=["shirt","jersey","top","tshirt"];let Sn=null;async function ta(i,t,e=Tn("assets/ochi.glb"),n,s=0,r){if(!Sn||Sn.url!==e){const a=await(n??ll()).loadAsync(e),c=a.scene.children.filter(u=>{let h=!1;return u.traverse(l=>{h||(h=l.isSkinnedMesh)}),h});Sn={variants:c.length?c:[a.scene],clips:a.animations,url:e}}const o=[];for(let a=0;a<t;a++){const c=Sn.variants.length>1,u=r==null?void 0:r[a],h=u===void 0?a+s:u,l=tS(Sn.variants[(h%Sn.variants.length+Sn.variants.length)%Sn.variants.length]);l.traverse(f=>{f.castShadow=f.type==="SkinnedMesh",c&&f.isBone&&(f.name=f.name.replace(/_\d+$/,""))}),i.add(l);const d=new h0(l);o.push({root:l,mixer:d,clips:new Map(Sn.clips.map(f=>[f.name,f]))})}return o}const ph=new WeakMap;function eS(i){let t=ph.get(i.root);return t===void 0&&(t=null,i.root.traverse(e=>{e.isBone&&e.name==="spine006"&&(t=e)}),ph.set(i.root,t)),t}function ml(i){const t=new WeakMap;return e=>{let n=t.get(e.root);return n||(n=[],e.root.traverse(s=>{s.isBone&&i.test(s.name)&&n.push(s)}),n.sort((s,r)=>s.name.localeCompare(r.name)),t.set(e.root,n)),n}}const nS=ml(/^foot[LR]$/),iS=ml(/^hand[LR]$/),mh=ml(/^spine00[12]$/),zo=.6499;function _p(i){const t=new he(i),e=Math.max(t.r,t.g,t.b);return e>0?t.multiplyScalar(Math.min(1/zo,1/e)):t}let Ka=null;const sS=3e3;function bp(i){return Ka??(Ka=(async()=>{let t;try{return await Promise.race([i(Tn("assets/kit/kit_masks.json")),new Promise((e,n)=>{t=setTimeout(()=>n(new Error("kit_masks.json timed out")),sS)})])}finally{clearTimeout(t)}})().catch(t=>{throw Ka=null,t})),Ka}async function rS(i,t=Tn("assets/ochi.glb"),e){await ta(new fn,0,t,e);const n=i.toLowerCase();return Sn?Sn.variants.findIndex(s=>{let r=!1;return s.traverse(o=>{const a=o;if(a.isMesh)for(const c of Array.isArray(a.material)?a.material:[a.material])r||(r=(c.name||"").toLowerCase()===n)}),r}):-1}function oS(i){const t=[];return i.traverse(e=>{const n=e;if(n.isMesh)for(const s of Array.isArray(n.material)?n.material:[n.material]){const r=(s.name||"").toLowerCase();pl.some(o=>r.includes(o))&&t.push(r)}}),t}async function aS(i,t=Tn("assets/ochi.glb"),e){await ta(new fn,0,t,e);const n=Sn?Sn.variants.map((r,o)=>o):[];if(i==="mixed")return n;const s=i==="girls"?"woman":"man";return n.filter(r=>oS(Sn.variants[r]).some(a=>(a.includes("woman")?"woman":a.includes("man")?"man":"")===s))}const xp=i=>i.replace(/^shirt\s+/i,"").toLowerCase().replace(/\s+/g,"-");function vp(i){const t=[];return i.root.traverse(e=>{const n=e;if(n.isMesh)for(const s of Array.isArray(n.material)?n.material:[n.material]){const r=s.name||n.name;pl.some(o=>r.toLowerCase().includes(o))&&t.push(xp(r))}}),t}async function yp(i,t,e={}){var o;const n=(Array.isArray(i)?i:[i]).filter(a=>a!=="plain");if(!n.length)return null;const s=a=>Tn(`assets/kit/${a}`),r=e.fetchJson??(a=>fetch(a).then(c=>c.json()));try{const a=await bp(r),c=[...new Set(n.map(d=>{var f;return(f=a.channels[d])==null?void 0:f.file}).filter(d=>d!==void 0))];if(!c.length)return null;const u=e.loader??new Vf,h=new Map,l=new Map;for(const d of new Set(t))for(const f of c){const p=(o=a.characters[d])==null?void 0:o.files[f];if(!p)continue;let _=l.get(p);_||(_=await u.loadAsync(s(p)),_.colorSpace="",_.flipY=!1,_.anisotropy=16,_.needsUpdate=!0,l.set(p,_));const g=h.get(d)??[];g[f]=_,h.set(d,g)}return h.size?{channels:a.channels,textures:h,dispose(){for(const d of l.values())d.dispose();l.clear(),h.clear()}}:null}catch{return null}}async function Mp(i={}){const t=i.fetchJson??(e=>fetch(e).then(n=>n.json()));try{const e=await bp(t);return Object.fromEntries(Object.entries(e.characters).map(([n,s])=>[n,s.numberBox]).filter(([,n])=>n))}catch{return{}}}const gh=new Map;function cS(i){if(!i)return null;let t=gh.get(i);if(!t){if(typeof document>"u")return null;const e=256,n=document.createElement("canvas");n.width=n.height=e;const s=n.getContext("2d");if(!s)return null;s.fillStyle="#ffffff",s.textAlign="center",s.textBaseline="middle";const r=c=>`700 ${c}px "Helvetica Neue", Helvetica, Arial, sans-serif`;let o=e*.92;s.font=r(o);const a=s.measureText(i).width;a>e*.84&&(o*=e*.84/a,s.font=r(o)),s.fillText(i,e/2,e*.54),t=new In(n),t.colorSpace="",t.anisotropy=8,gh.set(i,t)}return t}const $a=new he("#14181B"),Ya=new he("#FFFFFF"),lS=.5;function Nc(i,t,e,n={}){const s=typeof t=="string"?{a:t,pattern:"plain",b:"#FFFFFF"}:t,r=typeof t!="string",o=[];return i.root.traverse(a=>{const c=a;if(!c.isMesh)return;(Array.isArray(c.material)?c.material:[c.material]).forEach((h,l)=>{const d=h.name||c.name,f=d.toLowerCase();if(!pl.some(p=>f.includes(p))){if(!s.shorts&&!s.socks)return;const p=h.clone();h.userData.drillOwned&&h.dispose(),p.userData.drillOwned=!0,fS(p,s,c,r),o.push(p),Array.isArray(c.material)?c.material[l]=p:c.material=p;return}{const p=h.clone();h.userData.drillOwned&&h.dispose(),p.userData.drillOwned=!0,p.color=_p(s.a),mS(p,s,e,xp(d),{...n,exact:r}),o.push(p),Array.isArray(c.material)?c.material[l]=p:c.material=p}})}),o}const uS=/^(thigh[LR]|pelvis[LR]|spine)$/,hS=/^shin[LR]$/,dS=8;function _h(i,t){var r;const e=[new Se(-1,-1,-1,-1),new Se(-1,-1,-1,-1)],n=((r=i.skeleton)==null?void 0:r.bones)??[];let s=0;for(let o=0;o<n.length&&s<dS;o++)t.test(n[o].name)&&e[s>>2].setComponent(s++&3,o);return e}function fS(i,t,e,n){const s=_h(e,uS),r=_h(e,hS),o={kitShortsB:{value:s[0]},kitShortsB2:{value:s[1]},kitSocksB:{value:r[0]},kitSocksB2:{value:r[1]},kitShortsC:{value:Ls(t.shorts??"#000000",n)},kitSocksC:{value:Ls(t.socks??"#000000",n)},kitShortsOn:{value:t.shorts?1:0},kitSocksOn:{value:t.socks?1:0}};i.userData.kitLegUniforms=o,i.onBeforeCompile=a=>{Object.assign(a.uniforms,o),a.vertexShader=a.vertexShader.replace("#include <common>",`#include <common>
varying vec2 vKitLeg;`).replace("#include <skinning_pars_vertex>",`#include <skinning_pars_vertex>
#ifdef USE_SKINNING
uniform vec4 kitShortsB;
uniform vec4 kitShortsB2;
uniform vec4 kitSocksB;
uniform vec4 kitSocksB2;
float kitHit( float idx, vec4 a, vec4 b ) {
	return min( 1.0, step( abs( idx - a.x ), 0.25 ) + step( abs( idx - a.y ), 0.25 )
		+ step( abs( idx - a.z ), 0.25 ) + step( abs( idx - a.w ), 0.25 )
		+ step( abs( idx - b.x ), 0.25 ) + step( abs( idx - b.y ), 0.25 )
		+ step( abs( idx - b.z ), 0.25 ) + step( abs( idx - b.w ), 0.25 ) );
}
float kitLegW( vec4 a, vec4 b ) {
	return clamp( skinWeight.x * kitHit( skinIndex.x, a, b ) + skinWeight.y * kitHit( skinIndex.y, a, b )
		+ skinWeight.z * kitHit( skinIndex.z, a, b ) + skinWeight.w * kitHit( skinIndex.w, a, b ), 0.0, 1.0 );
}
#endif`).replace("#include <begin_vertex>",`#include <begin_vertex>
#ifdef USE_SKINNING
	vKitLeg = vec2( smoothstep( 0.35, 0.65, kitLegW( kitShortsB, kitShortsB2 ) ),
		smoothstep( 0.35, 0.65, kitLegW( kitSocksB, kitSocksB2 ) ) );
#else
	vKitLeg = vec2( 0.0 );
#endif`),a.fragmentShader=a.fragmentShader.replace("#include <common>",`#include <common>
varying vec2 vKitLeg;
uniform vec3 kitShortsC;
uniform vec3 kitSocksC;
uniform float kitShortsOn;
uniform float kitSocksOn;`).replace("#include <map_fragment>",`#include <map_fragment>
	diffuseColor.rgb = mix( diffuseColor.rgb, kitShortsC, vKitLeg.x * kitShortsOn );
	diffuseColor.rgb = mix( diffuseColor.rgb, kitSocksC, vKitLeg.y * kitSocksOn );`)},i.customProgramCacheKey=()=>"kitlegs",i.needsUpdate=!0}const pS=i=>{const t=new he(i),e=Math.max(t.r,t.g,t.b);return e>zo?zo/e:1},Ls=(i,t)=>t?new he(i):_p(i).multiplyScalar(zo);function bh(i,t){const e=[new Se(0,0,0,0),new Se(0,0,0,0)],n=i==null?void 0:i[t],s=n?"rgba".indexOf(n.channel):-1;return n&&s>=0&&e[n.file]&&e[n.file].setComponent(s,1),e}function mS(i,t,e,n,s){const{from:r,label:o,boxes:a,exact:c=!1}=s,u=(e==null?void 0:e.textures.get(n))??[],h=bh(e==null?void 0:e.channels,t.pattern),l=bh(e==null?void 0:e.channels,(r==null?void 0:r.pattern)??t.pattern),d=o?a==null?void 0:a[n]:void 0,f=d?cS(o):null,p={kitMask0:{value:u[0]??null},kitMask1:{value:u[1]??null},kitSel0:{value:h[0]},kitSel1:{value:h[1]},kitA:{value:Ls(t.a,c)},kitB:{value:Ls(t.b,c)},kitSelWas0:{value:l[0]},kitSelWas1:{value:l[1]},kitWasA:{value:Ls((r==null?void 0:r.a)??t.a,c)},kitWasB:{value:Ls((r==null?void 0:r.b)??t.b,c)},kitFade:{value:r?0:1},kitNumber:{value:f},kitNumO:{value:new oe(...(d==null?void 0:d.o)??[0,0])},kitNumIX:{value:new oe(...(d==null?void 0:d.ix)??[1,0])},kitNumIY:{value:new oe(...(d==null?void 0:d.iy)??[0,1])},kitNumOn:{value:f?1:0},kitNumFlip:{value:lS*(c?1:pS(t.a))}};i.userData.kitUniforms=p,i.onBeforeCompile=_=>{Object.assign(_.uniforms,p),_.fragmentShader=_.fragmentShader.replace("#include <common>",`#include <common>
uniform sampler2D kitMask0;
uniform sampler2D kitMask1;
uniform vec4 kitSel0;
uniform vec4 kitSel1;
uniform vec4 kitSelWas0;
uniform vec4 kitSelWas1;
uniform vec3 kitA;
uniform vec3 kitB;
uniform vec3 kitWasA;
uniform vec3 kitWasB;
uniform float kitFade;
uniform sampler2D kitNumber;
uniform vec2 kitNumO;
uniform vec2 kitNumIX;
uniform vec2 kitNumIY;
uniform float kitNumOn;
uniform float kitNumFlip;`).replace("#include <map_fragment>",`#ifdef USE_MAP
	vec4 kitM0 = texture2D( kitMask0, vMapUv );
	vec4 kitM1 = texture2D( kitMask1, vMapUv );
	vec3 kitNow = mix( kitA, kitB, dot( kitM0, kitSel0 ) + dot( kitM1, kitSel1 ) );
	vec3 kitWas = mix( kitWasA, kitWasB, dot( kitM0, kitSelWas0 ) + dot( kitM1, kitSelWas1 ) );
	diffuseColor.rgb = mix( kitWas, kitNow, kitFade );
	vec2 kitD = vMapUv - kitNumO;
	vec2 kitNuv = vec2( dot( kitD, kitNumIX ), dot( kitD, kitNumIY ) );
	float kitOnBack = kitNumOn
		* step( 0.0, kitNuv.x ) * step( kitNuv.x, 1.0 )
		* step( 0.0, kitNuv.y ) * step( kitNuv.y, 1.0 );
	float kitInk = texture2D( kitNumber, clamp( kitNuv, 0.0, 1.0 ) ).a * kitOnBack;
	float kitLum = dot( diffuseColor.rgb, vec3( 0.2126, 0.7152, 0.0722 ) );
	diffuseColor.rgb = mix( diffuseColor.rgb,
		kitLum > kitNumFlip ? vec3( ${$a.r.toFixed(4)}, ${$a.g.toFixed(4)}, ${$a.b.toFixed(4)} )
		: vec3( ${Ya.r.toFixed(4)}, ${Ya.g.toFixed(4)}, ${Ya.b.toFixed(4)} ), kitInk );
#endif`)},i.customProgramCacheKey=()=>"kit",i.needsUpdate=!0}const gS=.18;function xh(i,t){const e=Math.min(1,Math.max(0,t)),n=e*e*(3-2*e);for(const s of i){const r=s.userData.kitUniforms;r&&(r.kitFade.value=n)}return e}const gl=(i,t)=>Math.hypot(t[0]-i[0],t[1]-i[1]);function Xs(i){const t=gl(i.from,i.to),e=i.accel,n=i.cruise,s=i.endSpeed??0,r=Math.min(i.startSpeed??0,n);if(t<=0)return{D:0,t1:0,t2:0,t3:0,d1:0,d2:0,peak:0};const o=(n*n-r*r)/(2*e),a=(n*n-s*s)/(2*e);if(o+a<=t){const u=t-o-a;return{D:t,t1:(n-r)/e,t2:u/n,t3:(n-s)/e,d1:o,d2:u,peak:n}}const c=Math.sqrt(e*t+(r*r+s*s)/2);return{D:t,t1:(c-r)/e,t2:0,t3:(c-s)/e,d1:(c*c-r*r)/(2*e),d2:0,peak:c}}function Ie(i){const t=Xs(i);return t.t1+t.t2+t.t3}function En(i,t){const e=Xs(i),n=e.t1+e.t2+e.t3,s=Math.min(Math.max(t-i.t0,0),n),r=i.accel;let o,a;if(s<=e.t1){const u=Math.min(i.startSpeed??0,i.cruise);o=u*s+.5*r*s*s,a=u+r*s}else if(s<=e.t1+e.t2)o=e.d1+e.peak*(s-e.t1),a=e.peak;else{const u=s-e.t1-e.t2;o=e.d1+e.d2+e.peak*u-.5*r*u*u,a=e.peak-r*u}const c=e.D>0?o/e.D:0;return{pos:[i.from[0]+(i.to[0]-i.from[0])*c,i.from[1]+(i.to[1]-i.from[1])*c],speed:a}}const _S=.25;function vh(i,t){let e=[0,0];for(const n of i)if(t>=n.t0){if(t>n.t0+Ie(n)){e=[0,0];continue}const s=gl(n.from,n.to);if(s<=0){e=[0,0];continue}const{speed:r}=En(n,t);e=[(n.to[0]-n.from[0])/s*r,(n.to[1]-n.from[1])/s*r]}return e}function bS(i,t,e=_S){const n=vh(i,t),s=vh(i,t-e);return[(n[0]-s[0])/e,(n[1]-s[1])/e]}const xS=2.5;function vS(i,t){let e=0;for(const n of i)t>=n.t0&&(e=Xs(n).peak);return Math.min(1,e/xS)}const yS=.035,MS=.1,yh=.4,SS=1;function AS(i,t){let e=0;for(let n=0;n<i.length;n++){const s=i[n];if((s.endSpeed??0)>0||gl(s.from,s.to)<SS)continue;const r=s.t0+Ie(s)-MS,o=(t-r)/yh;o<=0||o>=1||i.some(a=>a.t0>s.t0&&a.t0<=r+yh)||(e=Math.max(e,yS*.5*(1-Math.cos(2*Math.PI*o))))}return e}function ze(i,t){return Math.atan2(t[0]-i[0],t[1]-i[1])}function ES(i,t=0){return i-t}function ea(i){for(;i>Math.PI;)i-=2*Math.PI;for(;i<=-Math.PI;)i+=2*Math.PI;return i}function TS(i,t=58*Math.PI/180,e=.85){const n=ea(i);return Math.min(t,Math.max(-t,n))*e}const wS=1.2,Za=180*Math.PI/180,Ja=120*Math.PI/180,Mh=70*Math.PI/180;function Sp(i){return i<=0?Za:i<=2.3?Za+(Ja-Za)*i/2.3:i>=5.48?Mh:Ja+(Mh-Ja)*(i-2.3)/(5.48-2.3)}const RS=.12,Sh=15*Math.PI/180;function CS(i){return Math.max(-Sh,Math.min(Sh,i*RS))}const IS=.001;function Yi(i,t){return Math.hypot(t[0]-i[0],t[1]-i[1])>=IS}function PS(i,t,e,n){return e||n||!Yi(i,t)?null:ze(i,t)}function Ah(i,t,e,n=Math.PI*2){const s=t-i,r=ea(s),o=r===Math.PI&&s<0?-Math.PI:r,a=n*e;return Math.abs(o)<=a?i+o:i+Math.sign(o)*a}const LS=2.3,gr=1.1,DS=1.15,Eh=.6,Th=1.2,Lo=.88,FS=1-Lo,NS=.15,fo=.28;function is(i,t){const e=Math.min(Math.max((t-i.t0)/i.duration,0),1),n=i.style??"ground",s=n==="push"?Math.min(Math.max(i.endFrac??0,0),1):0,r=n==="push"?(2*e-(1-s)*e*e)/(1+s):1-Math.pow(1-e,n==="shot"?DS:LS),o=i.fromHeight??0,a=i.toHeight??(n==="shot"?Eh:0),c=o*(1-e)+a*e;let u;if(n==="clipped"){const h=i.loft??Th;u=(e<Lo?h*Math.sin(Math.PI*e/Lo):NS*h*Math.sin(Math.PI*(e-Lo)/FS))+c}else if(n==="lofted")u=(i.loft??Th)*Math.sin(Math.PI*e)+c;else if(n==="shot")u=c;else if(n==="headed"){const h=i.loft??0;u=e<=fo?o+(h-o)*Math.sin(Math.PI/2*(e/fo)):a+(h-a)*Math.cos(Math.PI/2*((e-fo)/(1-fo)))}else n==="drop"?u=(i.fromHeight??Eh)*(1-e*e):u=(i.loft??0)*Math.sin(Math.PI*e)+c;return{pos:[i.from[0]+(i.to[0]-i.from[0])*r,i.from[1]+(i.to[1]-i.from[1])*r],height:u,done:e>=1}}const wh=new WeakMap;function US(i){const t=wh.get(i);if(t!==void 0)return t;let e=0;for(let n=0;n<=32;n++)e=Math.max(e,is(i,i.t0+i.duration*n/32).height);return wh.set(i,e),e}function Ap(i,t){if(!(i.duration>0))return 0;const e=i.duration/1e3,n=Math.min(Math.max(t-e/2,i.t0),i.t0+i.duration-e),s=is(i,n),r=is(i,n+e);return Math.hypot(r.pos[0]-s.pos[0],r.pos[1]-s.pos[1],r.height-s.height)/e}function Ep(i,t){const e=i.path;if(t<=e[0].t)return[...e[0].at];for(let n=1;n<e.length;n++)if(t<=e[n].t){const s=e[n-1],r=e[n],o=(t-s.t)/(r.t-s.t),a=o*o*(3-2*o);return[s.at[0]+(r.at[0]-s.at[0])*a,s.at[1]+(r.at[1]-s.at[1])*a]}return[...e[e.length-1].at]}const Rh=3,Cn=2.52,Dn=4,Es=.8,po=1,Ri=.3,hr=.6,yn=.15,OS=.5,Qn=.45,Tp=.4,wp=.7,Ch=Math.PI/12,Ts=4,kS=.6,Ih=.4,BS=.3,GS=.15,zS=.4,HS=.35,Tr=.3,VS=Math.PI/4,WS=.25,jS={left:"gk_dive_a",right:"gk_dive_b"},Rp=4,XS=.12,qS=.25,KS=.35;function Ph(i){return Math.min(qS,Math.max(XS,i*KS))}const $S=1.3,YS=.15;function Lh(i,t,e){const n=i-YS,s=i+t-n,r=Math.min($S,Math.max(1,e/s));return{t0:Math.max(i+t-e/r,n),timeScale:r}}const ZS=1.8,Dh=.3,JS=.7,QS=.9,tA=2.5,gn={catch:{id:"gk_catch_b",duration:.967,contact:.66},catchHigh:{id:"gk_catch_d",duration:2.733,contact:.85},scoop:[{id:"gk_scoop_a",duration:2.5,contact:.87},{id:"gk_catch_a",duration:2.033,contact:.8}],dive:{left:{id:"gk_dive_a",duration:3.167,contact:.97,hand:.65,reach:.72},right:{id:"gk_dive_b",duration:3.2,contact:.97,hand:.94,reach:1.03}},throw:{id:"gk_throw_a",duration:2.833,contact:1.57,release:1.4},roll:{id:"gk_pass_a",duration:3.133,contact:1.4,release:.3},kick:{id:"gk_dropkick_a",duration:3.9,contact:2.4,release:.4}},eA={throw:{id:"throw_in_a",duration:2.767,contact:1.45,release:1.47},roll:gn.roll},mo={left:{id:"gk_sidestep_a",duration:.533,dist:1.12},right:{id:"gk_sidestep_b",duration:.5,dist:1.39}},nA=.8;function iA(i,t,e,n=na){const s=Rp*i,r=Math.sqrt(Math.max(0,s*s-e*e));return Math.max(0,r-(n-Np)*t)}const sA=3;function rA(i,t,e){if(t<=0)return null;const n=Math.min(sA,Math.floor(Math.abs(i)/t));return n<1?null:{side:i*e>0?"left":"right",steps:n}}const Vn=1,go=.25,Qa=.5,Fh=.8,oA=.4,Cp=3,aA=.6,cA=2.3,Nh=.9,ws=.3,Uh=.4,lA=12,uA=8,hA=3,dA=.25;function Oh(i,t,e,n,s){const r=Math.hypot(e.to[0]-i[0],e.to[1]-i[1]);if(e.style==="ground")return{from:i,to:[...e.to],t0:n,duration:Math.max(Uc,r/uA),style:"ground",...t?{fromHeight:t}:{}};const o=Math.max(dA*r,hA)*s;return{from:i,to:[...e.to],t0:n,duration:Math.max(Uc,r/lA),style:"lofted",loft:Math.max(.1,o-t/2),...t?{fromHeight:t}:{}}}const fA=.6,Uc=.2;function pA(i,t,e){const n=fA*i/t;if(!(n>0))throw new Error(`[engine3d] a wall rebound needs a real strike: ${i.toFixed(2)} m over ${t.toFixed(2)} s leaves the ball no arrival speed to come back on`);return Math.max(Uc,e/n)}const mA=16,gA=12,tc=2,_A=8,bA=.1,xA=2.44;function Ji(i,t,e){let n=null;for(const s of i)s.player===t&&e>=s.at&&(!n||s.at>=n.at)&&(n=s);return n}function Ip(i,t,e){const n=Ji(i,t,e);if(!(n!=null&&n.hand))return 0;const s=n.hand,r=s.from??s.height,o=s.rise?Math.min(1,Math.max(0,(e-n.at)/s.rise)):1;return r+(s.height-r)*(o*o*(3-2*o))}const ec=[{id:"tackle_b",duration:1.767,contact:.63,reach:.89}],_o={id:"pass_a",duration:.567,contact:.167,reach:.89},vA=["stall_c"],kh="jog_back_a",dr=.5,yA=.5,MA=.3,SA=.9,Bh=.5,AA=.2,Gh=.8,zh=.5,EA=1.6,bo={id:"gk_block_a",duration:2.633,contact:.94,reach:.65},Hh=3,TA=.1,xo=["walk","jog","run"],Do=.5,wA=1.5*Do,RA=.42*Math.SQRT1_2,CA=12,IA=.15;function PA(i,t=1){const e=[];for(const n of i??[]){if(n.type!=="goal"){e.push([...n.at]);continue}const s=rs(n,na)*t;n.facing==="e"||n.facing==="w"?e.push([n.at[0],n.at[1]-s],[n.at[0],n.at[1]+s]):e.push([n.at[0]-s,n.at[1]],[n.at[0]+s,n.at[1]])}return e}function Vh(i,t,e){const n=a=>t.reduce((c,u)=>Math.min(c,Math.hypot(a[0]-u[0],a[1]-u[1])),1/0);let s=[...i],r=s,o=n(s);for(let a=0;a<8;a++){let c=null,u=0;for(const f of t){const p=Math.hypot(s[0]-f[0],s[1]-f[1]);e-p>u+1e-9&&(u=e-p,c=f)}if(!c)return s;const h=[s[0]-c[0],s[1]-c[1]],l=Math.hypot(h[0],h[1])>1e-6?Ye(h):[1,0];s=[c[0]+e*l[0],c[1]+e*l[1]];const d=n(s);d>o+1e-9&&(r=s,o=d)}return r}function Wh(i,t,e,n){const s=Math.hypot(t[0]-i[0],t[1]-i[1]),r=4*s/(n*n);return{from:i,to:t,t0:e,cruise:Math.sqrt(r*s),accel:r}}function vo(i,t,e){let n=null;for(const r of i)r.t0<=e&&(!n||r.t0>=n.t0)&&(n=r);if(!n)return{at:[...t],moving:!1,restT:e};const s=n.t0+n.duration;return{at:[...n.to],moving:e<s,restT:s}}const LA=.2;function jh(i,t,e){const n=e[0]-t[0],s=e[1]-t[1],r=n*n+s*s,o=r>1e-12?Math.min(1,Math.max(0,((i[0]-t[0])*n+(i[1]-t[1])*s)/r)):0;return Math.hypot(t[0]+o*n-i[0],t[1]+o*s-i[1])}function Xh(i,t,e){const n=Math.hypot(t[0]-i[0],t[1]-i[1]),s=n>1e-6?Ye([t[0]-i[0],t[1]-i[1]]):[0,1],r=n<=Ne+TA?null:[t[0]-Ne*s[0],t[1]-Ne*s[1]],o=e?Ye([e[0]-t[0],e[1]-t[1]]):s,a=Math.min(Math.max(Ne,Tp),wp);return{stepTo:r,set:[t[0]+a*o[0],t[1]+a*o[1]],faceAt:e??[t[0]+s[0],t[1]+s[1]]}}function DA(i){return i<15?"roll":i<30?"throw":"kick"}function Pp(i,t,e){const n=[e[0]-t[0],e[1]-t[1]],s=n[0]*n[0]+n[1]*n[1],r=s>1e-12?Math.min(1,Math.max(0,((i[0]-t[0])*n[0]+(i[1]-t[1])*n[1])/s)):0,o=[t[0]+r*n[0],t[1]+r*n[1]];return{reach:Math.hypot(o[0]-i[0],o[1]-i[1]),at:o}}function FA(i,t,e,n,s){const{reach:r,at:o}=Pp(i,e,n);if(r>Cp*s)return null;const a=Ye([e[0]-i[0],e[1]-i[1]]);if(r<=aA*s)return{kind:"catch",clip:gn.catch.id,clipDuration:gn.catch.duration,contactOffset:gn.catch.contact,contact:[i[0]+Ne*a[0],i[1]+Ne*a[1]],travelTo:null};const c=Op(i,t,n),u=gn.dive[c],h=Ye([o[0]-i[0],o[1]-i[1]]),l=Math.min(cA*s,Math.max(0,r-u.reach*s));return{kind:"dive",clip:u.id,clipDuration:u.duration,contactOffset:u.contact,contact:o,side:c,travelTo:[i[0]+l*h[0],i[1]+l*h[1]]}}function NA(i,t,e,n=1){const s=[e[0]-t[0],e[1]-t[1]],r=s[0]*s[0]+s[1]*s[1],o=r>1e-12?Math.min(1,Math.max(0,((i[0]-t[0])*s[0]+(i[1]-t[1])*s[1])/r)):0,a=[t[0]+o*s[0],t[1]+o*s[1]];let c=[i[0]-a[0],i[1]-a[1]];Math.hypot(c[0],c[1])<1e-6&&(c=[-s[0],-s[1]]);const u=Ye(c);return[a[0]+Dh*n*u[0],a[1]+Dh*n*u[1]]}function Lp(i,t){const e=Math.min(1,Math.max(0,(t-i.t0)/i.duration)),n=1-(1-e)*(1-e);return[i.from[0]+(i.to[0]-i.from[0])*n,i.from[1]+(i.to[1]-i.from[1])*n]}function Dp(i,t,e,n){let s=null;for(const r of i){if(r.player!==e||n<r.t0)continue;let o=1/0;for(const a of t??[])a.t0>=r.t0&&a.t0<o&&(o=a.t0);n<o&&(s=Lp(r,n))}return s}const UA=[{id:"header_a",duration:1.9,contact:1}],OA=1.57,qh=.1,Kh=.6,nc=2,yo=.02,ic=.6,kA=2.5,BA=.22,GA=3,zA=6.5;function sc(i,t){return Math.min(Math.max(BA*i,GA),zA)*t}const HA=10,VA=1.7;function WA(i,t,e,n){const s=e??[t[0],t[1]],r=Ye([s[0]-i[0],s[1]-i[1]]),o=[i[0]+qh*n*r[0],i[1]+qh*n*r[1]],a=UA[0];return{contact:o,height:OA*n,clip:a,set:[i[0]+Ne*r[0],i[1]+Ne*r[1]],faceAt:s}}const $h=.4,jA=.3,XA=18,qA=10,KA=.45,$A=.8,Fo={id:"strike_jog_a",contact:.4},YA=1,ZA={strike_jog_a:{loop:!1,category:"shoot",ballContact:Fo.contact},gk_sidestep_a:{loop:!0},gk_sidestep_b:{loop:!0}};function Fp(i){var t;for(const[e,n]of Object.entries(ZA))(t=i.clips)!=null&&t[e]&&Object.assign(i.clips[e],n);return i}const Yh=.15,JA=.2,na=3.35,Np=.5;function QA(i,t,e,n,s=1){let r=null,o=1/0;for(const p of e){const _=Math.hypot(p.at[0]-t[0],p.at[1]-t[1]);_<o&&(o=_,r=p)}if(!r||o>r.halfW*s+1)return[...t];const a=(r.halfW-Np)*s,c=r.at,u=r.sideways?[[c[0],c[1]-a],[c[0],c[1]+a]]:[[c[0]-a,c[1]],[c[0]+a,c[1]]];if(n){const p=ze(i,c),_=g=>(g[0]-i[0])*Math.cos(p)-(g[1]-i[1])*Math.sin(p);return u.sort((g,m)=>_(m)-_(g)),n==="left"?u[0]:u[1]}const h=Math.hypot(u[0][0]-i[0],u[0][1]-i[1]),l=Math.hypot(u[1][0]-i[0],u[1][1]-i[1]);if(Math.abs(h-l)>1e-6)return h>l?u[0]:u[1];const d=Math.hypot(u[0][0]-t[0],u[0][1]-t[1]),f=Math.hypot(u[1][0]-t[0],u[1][1]-t[1]);return d<f-1e-6?u[0]:u[1]}function tE(i,t){var e;return t==="keeper"&&((e=i.groups.gk_ready)!=null&&e.length)?i.groups.gk_ready:i.groups.idle}const Up=.35;let Ne=Up;function Zh(i){Ne=i}function eE(){return Ne/Up}function Wn(i,t){return[i[0]+Ne*Math.sin(t),i[1]+Ne*Math.cos(t)]}function rc(i,t,e){const n=ze(i,t);return(e[0]-i[0])*Math.cos(n)-(e[1]-i[1])*Math.sin(n)>=0?"L":"R"}function Op(i,t,e){return(e[0]-i[0])*Math.cos(t)-(e[1]-i[1])*Math.sin(t)>1e-9?"left":"right"}function Ye(i){const t=Math.hypot(i[0],i[1])||1;return[i[0]/t,i[1]/t]}function Jh(i,t){const e=Math.cos(t),n=Math.sin(t);return[i[0]*e-i[1]*n,i[0]*n+i[1]*e]}function nE(i,t,e){const n=Ye([t[0]-i[0],t[1]-i[1]]);let s,r;if(e){s=Ye([e[0]-i[0],e[1]-i[1]]);const f=n[0]*s[1]-n[1]*s[0];r=Math.abs(f)<1e-6?1:Math.sign(f)}else r=1,s=Jh([-n[0],-n[1]],-r*Ch);const o=Jh(n,r*Ch),a=[i[0]+Ne*o[0],i[1]+Ne*o[1]],c=[i[0]+Ne*s[0],i[1]+Ne*s[1]],u=[c[0]-a[0],c[1]-a[1]],h=Math.hypot(u[0],u[1]),l=h>1e-6?[u[0]/h,u[1]/h]:s,d=Math.min(Math.max(h,Tp),wp);return{contact:a,set:[a[0]+d*l[0],a[1]+d*l[1]],faceAt:e??[i[0]+s[0],i[1]+s[1]]}}const iE=.5,sE=1.4,Qh={walk:.8,jog:1.2,run:2.2},rE=.25,oE=.7,aE=.3,cE=2,fr=.4,lE=10,uE=8,hE=2.5,td=6,dE=2,ed=[.06,-.09,.1,-.04,.08,-.1,.03,-.07],nd=1.4;function id(i,t,e){const n=i.t0+Ie(i),s=oc(i,t);let r=0,o=Math.max(n-t,.001);if(oc(i,t+o)-s<=e)return o;for(let a=0;a<48;a++){const c=(r+o)/2;oc(i,t+c)-s>=e?o=c:r=c}return Math.max(o,.001)}function oc(i,t){const e=En(i,t).pos;return Math.hypot(e[0]-i.from[0],e[1]-i.from[1])}function fE(i,t,e,n,s,r={}){const o=Ie(i);if(o<=0)return{flights:[],touches:[],restEnd:i.t0};const a=Ye([i.to[0]-i.from[0],i.to[1]-i.from[1]]),c=ze(i.from,i.to),u=[Math.cos(c),-Math.sin(c)],h=T=>(T[0]-i.from[0])*a[0]+(T[1]-i.from[1])*a[1],l=i.t0+o,d=h(e),f=eE(),p=(r.others??[]).filter(T=>Math.abs((T[0]-i.from[0])*Math.cos(c)-(T[1]-i.from[1])*Math.sin(c))<=dE).map(T=>h(T)),_=oE*f,g=rE*f,m=T=>h(En(i,T).pos),v=[],y=[];let x=i.t0,w=[...t];const M=Math.ceil(Xs(i).D/(.5*Math.min(n,fr*3)))+8;for(let T=0;;T++){y.push(x);const I=h(w),S=d-I,A=r.turnOut?fr:n,C=fr*(1+nd),U=T===0&&!!r.turnIn||!!r.turnOut&&S<=C,P=U?Ne:_;if(S<=nd*A||T===M-1||d-(m(x)+P)<.05){const F=Math.hypot(e[0]-w[0],e[1]-w[1]);let Ct=x;if(F>1e-6){const qt=Math.max(En(i,x).speed,iE*i.cruise),le=Math.min(2*F/(qt+gr*(F/qt)/2),Math.max(l-x,.2));v.push({from:w,to:[...e],t0:x,duration:le,style:"push",endFrac:0}),Ct=x+le}return Ct<l&&v.push({from:[...e],to:[...e],t0:Ct,duration:l-Ct,style:"ground"}),{flights:v,touches:y,restEnd:Math.max(Ct,l)}}let O=U?fr:n;if(!U&&S>lE){let F=S;for(const Ct of p)Ct>I&&(F=Math.min(F,Ct-I));O*=Math.min(Math.max(F/uE,1),hE)}const Z=O;O*=1+ed[T%ed.length],!U&&r.turnOut&&S-O<C&&(O=Math.max(S-C,fr));const H=Math.min(O,sE*i.cruise*i.cruise/gr),X=id(i,x,H),B=Math.max(i.cruise*X-H,0),j=Math.min(P,I-m(x)+B),Q=m(x)+j,it=Math.max(I,Q),ct=Z>cE?s:s*(T%2?-1:1),Dt=Math.min(g,aE*H),nt=(w[0]-i.from[0])*u[0]+(w[1]-i.from[1])*u[1],ot=Math.abs(ct*Dt-nt),at=Math.sqrt(Math.max(td*td-ot*ot,0)),et=Math.min(it+H,I+at,d),yt=id(i,x,et-Q),Bt=(et-I)/yt,Qt=Bt+gr*yt/2,de=Bt-gr*yt/2,se=[i.from[0]+a[0]*et+u[0]*ct*Dt,i.from[1]+a[1]*et+u[1]*ct*Dt],Ce={from:w,to:se,t0:x,duration:yt,style:"push",endFrac:Math.max(de,0)/Qt};v.push(Ce),w=[...se],x+=yt}}function ei(i){return[...i].reduce((t,e)=>t*31+e.charCodeAt(0)>>>0,0)}function Mn(i,t,e){const n=ei(t);return i[Math.abs(n+Math.floor(e*10))%i.length]}const _l=.3;function kp(i){const t=Ic.filter(e=>{var n;return(n=i.groups[e])==null?void 0:n.length}).map(e=>({gait:e,clipSpeed:i.clips[i.groups[e][0]].speed??Cn})).sort((e,n)=>e.clipSpeed-n.clipSpeed);return t.map((e,n)=>({gait:e.gait,min:n===0?_l:Math.sqrt(t[n-1].clipSpeed*e.clipSpeed),clipSpeed:e.clipSpeed}))}function bl(i,t){let e=null;for(const n of i)t>=n.min&&(e=n);return e}function pE(i,t){const e=Xs(i),n=e.t1+e.t2+e.t3;if(n<=0||!t.length)return[];const s=i.endSpeed??0,r=i.startSpeed??0,o=new Set([0,n]);for(const u of t)u.min>e.peak||(u.min>r&&o.add((u.min-r)/i.accel),u.min>s&&o.add(n-(u.min-s)/i.accel));const a=[...o].sort((u,h)=>u-h),c=[];for(let u=0;u+1<a.length;u++){if(a[u+1]-a[u]<1e-9)continue;const h=bl(t,En(i,i.t0+(a[u]+a[u+1])/2).speed);if(!h)continue;const l=c[c.length-1];l&&l.gait===h.gait&&Math.abs(l.t1-(i.t0+a[u]))<1e-9?l.t1=i.t0+a[u+1]:c.push({gait:h.gait,t0:i.t0+a[u],t1:i.t0+a[u+1]})}return gE(c)}const mE=.3;function gE(i){const t=i.map(e=>({...e}));for(let e=0;e<32&&t.length>1;e++){let n=-1,s=mE;for(let a=0;a<t.length;a++){const c=t[a].t1-t[a].t0;c<s-1e-9&&(s=c,n=a)}if(n<0)break;const r=t[n-1],o=t[n+1];o&&(!r||o.t1-o.t0>r.t1-r.t0)?o.t0=t[n].t0:r.t1=t[n].t1,t.splice(n,1);for(let a=0;a+1<t.length;)t[a].gait===t[a+1].gait?(t[a].t1=t[a+1].t1,t.splice(a+1,1)):a++}return t}const ia=.85,mi=1.15,sd=.5;function Bp(i){return sd+(ia-sd)*Math.min(1,Math.max(0,i))}function _E(i,t){const e=i/t;return e>mi?mi:Math.max(Bp(e),e)}function bE(i,t){return Math.min(mi,Math.max(ia,i/t))}function xE(i,t,e){const n=i.findIndex(u=>u.gait===e);if(n<0)return{timeScale:1,partner:null,weight:0};const s=i[n],r=t/s.clipSpeed;if(r>=ia&&r<=mi)return{timeScale:r,partner:null,weight:0};const o=i[r>mi?n+1:n-1];if(!o)return{timeScale:r>mi?mi:Math.max(Bp(r),r),partner:null,weight:0};const a=Math.min(1,Math.max(0,(t-s.clipSpeed)/(o.clipSpeed-s.clipSpeed))),c=(1-a)*s.clipSpeed+a*o.clipSpeed;return{timeScale:bE(t,c),partner:o.gait,weight:a}}const vE=new Set(["pass","shoot","receive","header","defensive"]),Ho=new Set(["turn","transition"]),_i=.15,Gp=.1,zp=.3,yE=.45,ME=.2,SE=.12,AE=.6;function xl(i,t){var e;return vE.has(((e=i.clips[t])==null?void 0:e.category)??"")||t.startsWith("header_")}function Hp(i,t,e){var r,o;if(xl(i,t))return Gp;const n=(r=i.clips[t])==null?void 0:r.category,s=e?(o=i.clips[e])==null?void 0:o.category:void 0;return Ho.has(n??"")?_i:n==="idle"?s==="idle"?AE:s==="locomotion"?SE:Vo:n==="locomotion"&&s==="locomotion"?ME:Ho.has(s??"")?_i:Vo}function Vp(i,t){var n;const e=(n=i.clips[t])==null?void 0:n.category;return e==="receive"?yE:Ho.has(e??"")?_i:xl(i,t)?zp:Vo}function EE(i,t,e){var n;return xl(i,t)||Ho.has(((n=i.clips[t])==null?void 0:n.category)??"")?Vp(i,t):Hp(i,e,t)}const dn=Math.PI/180,pi={turn_l90_a:{id:"turn_l90_a",duration:.9,yaw:82.6*dn,t50:.567,t90:.8,peak:159*dn,standing:!0},turn_r90_a:{id:"turn_r90_a",duration:.933,yaw:-97.2*dn,t50:.533,t90:.8,peak:213*dn,standing:!0},turn_180_a:{id:"turn_180_a",duration:.667,yaw:-162.5*dn,t50:.4,t90:.6,peak:366*dn,standing:!1},turn_to_run_a:{id:"turn_to_run_a",duration:1.7,yaw:-106.7*dn,t50:.767,t90:1.033,peak:192*dn,standing:!1}};function ac(i,t){const e=[[0,0],[i.t50,.5],[i.t90,.9],[i.duration,1]];if(t<=0)return 0;for(let n=0;n+1<e.length;n++){const[s,r]=e[n],[o,a]=e[n+1];if(t<=o)return o-s>1e-9?r+(a-r)*(t-s)/(o-s):a}return 1}function Wp(i,t,e){let n=null;for(const s of i)s.player===t&&e>=s.t0&&e<s.end+_i&&(n=s);return n}function TE(i,t,e,n){const s=Wp(i,t,e);if(!s)return null;const r=pi[s.clip],o=s.end-s.t0,a=s.offset+Math.min(e-s.t0,o),c=ac(r,s.offset),u=ac(r,s.offset+o),h=ac(r,a),l=u-c>1e-9?(h-c)/(u-c):1,d=n??s.from,f=n===void 0?s.to-s.from:Ki(n,s.to),p=Math.min(1,(e-s.t0)/_i),_=e<=s.end?1:Math.max(0,1-(e-s.end)/_i),g=Math.max(0,Math.min(p,_));return{heading:d+f*l,clipYaw:r.yaw*h*g}}function wE(i,t){return i.peak+Sp(t)}function RE(i,t,e){const n=Math.abs(i);return n<Oc?null:n>BE&&(t==="jog"||t==="run"||t==="sprint")?"turn_180_a":i>0?"turn_l90_a":"turn_r90_a"}const Oc=45*dn,rd=60*dn,CE=.3,IE=.5,PE=.7,LE=130*dn,Mo=[{id:"jog_back_a",speed:2.11},{id:"run_back_a",speed:2.81}],od={left:"strafe_l_a",right:"strafe_r_a"},DE=3.2,FE=3.2,jp=60*dn,NE=120*dn,ad=[{id:"jog_back_diag_a",axis:225.5*dn,speed:2.04},{id:"jog_back_diag_b",axis:135.5*dn,speed:2.27}],UE=5;function OE(i,t){if(Math.abs(i)>jp)return null;const e=i>=0?ad[0]:ad[1];return t<=e.speed*mi?{id:e.id,axis:e.axis}:null}function kE(i,t){const e=Math.abs(i);return e<=jp?t>DE?null:t>(Mo[0].speed+Mo[1].speed)/2?Mo[1].id:Mo[0].id:e>NE||t>FE?null:i>0?od.right:od.left}const BE=120*dn;function Ki(i,t){return ea(t-i)}const Vo=.25;function Ds(i,t){const e=i.clips[t.clip];if(t.loopUntil!==void 0)return t.loopUntil;const n=e.category==="shoot"?JA:0,s=t.contact??e.ballContact??0,r=t.offset??0,o=t.timeScale??1,a=Vp(i,t.clip);return Math.max(t.t0,0)+Math.max((e.duration-r)/o-(e.loop?0:a)+n,(s-r)/o)}function GE(i,t,e){return(i==null?void 0:i.clip)!==t||i.offset!==(e==null?void 0:e.offset)}function Xp(i,t,e,n){let s=null;for(const r of i)r.player===e&&n>=Math.max(r.t0,0)&&n<Ds(t,r)&&(s=r);return s}const zE=.15;function HE(i,t,e){let n=null;for(const s of i)s.player===t&&e>=s.t0&&(n=s.headUntil!==void 0&&e<s.headUntil?[...s.at]:null);return n}const VE=.06,cd=2,WE=6,jE=.4;function Wo(i,t){let e=(i^t)>>>0;return e=Math.imul(e^e>>>16,73244475)>>>0,e=Math.imul(e^e>>>16,73244475)>>>0,((e^e>>>16)>>>0)/4294967296}function ld(i,t){return Wo(ei(i),20973)*t}function ud(i){return 1+VE*(2*Wo(ei(i),10196)-1)}function XE(i,t){return(cd+Wo(ei(i),7047)*(WE-cd))*(1+jE*(2*Wo(ei(i)+t*2654435761,28490)-1))}function qE(i,t){let e=0;for(let n=0;n<64;n++)if(e+=XE(i,n),t<e)return n;return 64}function KE(i,t,e){const n=i.length;if(n<=1)return i[0];const s=ei(t);let r=s%n;for(let o=1;o<=e;o++){const a=s+o*2654435761>>>0;r=(r+1+a%(n-1))%n}return i[r]}function $E(i){if(!i||typeof i!="object"||!i.clips||!i.groups)throw new Error("manifest v2 required: expected { clips: {...}, groups: {...} } shape")}const YE=new Set(["receive_a","pass_a","pass_b"]),qp=.8,ZE=.7;function Kp(i,t){var n;const e=t.contact??((n=i.clips[t.clip])==null?void 0:n.ballContact)??0;return t.t0+e-(t.offset??0)}function vl(i,t){let e=0;for(const n of i??[])t>=n.t0&&(e=t>n.t0+Ie(n)?0:En(n,t).speed);return e}function JE(i,t,e){for(const n of i)YE.has(n.clip)&&vl(t[n.player],Kp(e,n))>=qp&&(n.additive=!0)}const QE=1,tT=2,eT=.025,hd=.2,nT=.4,dd="idle_transition";function iT(i,t,e){let n=0;for(const s of i){if(s.player!==t||e<s.t0||e>s.t1)continue;const r=e-s.t0,o=s.t1-s.t0,a=Math.min(1,r/hd,(o-r)/hd);a<=0||(n=Math.max(n,eT*a*.5*(1-Math.cos(2*Math.PI*tT*r))))}return n}const sT="idle_b",rT=.5,oT=.3,aT=.15;function cT(i,t,e){let n=0;for(const s of i)s.player!==t||e<s.t0||e>s.t1||(n=Math.max(n,rT*Math.min(1,(e-s.t0)/oT)*Math.min(1,(s.t1-e)/aT)));return n}function lT(i,t,e){const n=[],s=[];for(const r of i){if(r.clip!=="receive_a"||r.additive)continue;const o=Kp(e,r)-QE,a=r.t0;if(a-o<nT||o<0)continue;let c=!1;for(let u=o;u<=a;u+=.1){if(vl(t[r.player],u)>_l){c=!0;break}const h=Xp(i,e,r.player,u);if(h&&h!==r){c=!0;break}}c||(n.push({player:r.player,t0:o,t1:a}),e.clips[dd]&&s.push({player:r.player,clip:dd,t0:o,loopUntil:a}))}return i.push(...s),i.sort((r,o)=>r.t0-o.t0),n}const uT=.6,$p=.5,Yp=.6,vr=2*$p/Yp,jo=vr/Yp,hT=$p-Tr;function dT(i){return(vr-Math.sqrt(Math.max(0,vr*vr-2*jo*i)))/jo}function fT(){return vr-jo*dT(hT)}const pT=.15,mT=.05;function gT(i,t,e){const n=ze(i,t),s=Math.hypot(t[0]-i[0],t[1]-i[1]),r=e?Math.min(WS,s/2):Tr,o=e?n-Math.acos(Math.min(1,r/Math.max(s,1e-6))):n+Math.PI+VS;return[i[0]+r*Math.sin(o),i[1]+r*Math.cos(o)]}function _T(i,t,e,n,s,r){const o=Math.min(Tr,e*(n-Ri)/2);for(let a=o;a>=pT-1e-9;a-=mT){const c=[i[0]+a*Math.sin(t),i[1]+a*Math.cos(t)];if(r(c))return{from:[...i],to:c,t0:s,cruise:e,accel:e*e/(2*a),startSpeed:e}}return null}function bT(i,t,e=1){var bt,Vt,$t,re,Wt,be,pe,ge,K,Ot,rt,gt,jt,Ht,fe;$E(t),Fp(t);const n=Go(i),s=kp(t),r={};i.players.forEach(D=>r[D.id]=[...D.start]);const o={},a=[],c=[],u=[],h=[],l=[],d=[],f=[],p=[],_={},g={},m=new Set,v={},y={},x={},w={};function M(D){u.push(D),v[D.player]=D.t0,Yi(r[D.player],D.at)&&(T[D.player]=ze(r[D.player],D.at))}const T={},I={},S={};function A(D){const b=_[D];let G=Math.max(b?b.t0+Ie(b):0,I[D]??0,0);for(const Y of c)Y.player===D&&t.clips[Y.clip]&&(G=Math.max(G,Ds(t,Y)));return G}function C(D,b,G,Y){if(qt.has(D)||!Yi(r[D],G))return null;const z=T[D]??0,pt=Ki(z,ze(r[D],G));if(Math.abs(pt)<rd)return null;const Et=pi[pt>0?"turn_l90_a":"turn_r90_a"];if(!t.clips[Et.id])return null;const wt=U(Et),Nt=A(D),tt=Math.max(Nt,Math.min(b,Y-wt));return tt+wt>Y+1e-9?null:(P(D,Et,tt,0,z,z+pt),tt)}function U(D,b=0){return D.duration-b-_i}function P(D,b,G,Y,z,pt,Et){const wt=Et??U(b,Y),Nt={player:D,clip:b.id,t0:G,offset:Y,end:G+wt,from:z,to:pt},tt={player:D,clip:b.id,t0:G,...Y?{offset:Y}:{},...Et!==void 0?{loopUntil:G+wt}:{}};f.push(Nt),c.push(tt),S[D]={span:Nt,cue:tt},I[D]=Nt.end+_i}function O(D,b){const G=S[D];return!G||G.span.end<=b+1e-9?!0:b-G.span.t0<CE?!1:(G.span.end=b,G.cue.loopUntil=b,I[D]=b+_i,!0)}function Z(D,b){if(O(D,b))return;const G=S[D];f.splice(f.indexOf(G.span),1);const Y=c.indexOf(G.cue);Y>=0&&c.splice(Y,1),delete S[D],I[D]=0}function H(D,b=1/0){const G=C(D.player,D.t0,D.at,b);M(G===null?D:{...D,t0:G})}const X=[];function B(D){var b;for(let G=0;G<X.length;G++){const Y=X[G];Y.afterT>=D||(X.splice(G--,1),(o[b=Y.player]??(o[b]=[])).push(Y.move),_[Y.player]=Y.move,g[Y.player]=Q(Y.move,Y.player),M({player:Y.player,at:Y.faceBall,t0:Y.move.t0}),M({player:Y.player,at:Y.faceSettle,t0:Y.arrival}),r[Y.player]=[...Y.move.to])}}function j(D,b,G){let Y=[...r[D]],z=[...r[D]];const pt=_[D];let Et=Math.max(pt?pt.t0+Ie(pt):0,y[D]??0),wt=-1/0,Nt=null;for(let tt=b+1;tt<J.length;tt++){const vt=J[tt];if(vt.t>=G)break;if((vt.type==="pass"?vt.from:vt.player)!==D)continue;if(vt.type!=="move"){Nt=`${vt.type} at t=${vt.t}`;break}const Tt=t.groups[vt.gait??"jog"]??t.groups.jog,mt=t.clips[Mn(Tt,D,vt.t)].speed??Cn,kt={from:Y,to:[...vt.to],t0:vt.t,cruise:mt,accel:Dn},Xt=vt.t+Ie(kt);Et=Math.max(Et,Xt),Y=[...vt.to],z=Xt>G?En(kt,G).pos:[...vt.to],wt=vt.t}return{expected:Y,atArrival:z,busyUntil:Et,afterT:wt,blocked:Nt}}function Q(D,b){const G=pE(D,s).map(z=>({player:b,clip:Mn(t.groups[z.gait],b,D.t0),t0:z.t0,loopUntil:z.t1})),Y=S[b];if(Y){let z=1/0;for(const pt of G)pt.t0>Y.span.t0+1e-9&&pt.t0<Y.span.end-1e-9&&(z=Math.min(z,pt.t0));z<1/0&&Z(b,z)}return c.push(...G),G}function it(D,b,G="event"){(ye[D]??0)>b&&console.warn(`[engine3d] ${D} is on the ground until t=${ye[D].toFixed(2)}s but has a ${G} at t=${b} — schedule it later`);const Y=_[D];if(!Y)return;const z=Y.t0+Ie(Y);if(b<z){const pt=`buildSchedule: player ${D} has an event at t=${b} while still moving from a move started at t=${Y.t0} (in flight until t=${z.toFixed(3)})`;if(Kt.has(D))console.warn(`[engine3d] ${pt} — he fetched a free ball, so where the engine left him is its own estimate: this warns instead of throwing; schedule it later`);else throw new Error(pt)}}function ct(D){let b=null,G=-1/0;for(const Y of p)Y.t<=D&&Y.t>=G&&(b=Y.player,G=Y.t);return b}const Dt=[];function nt(D,b,G){const Y=i.balls??[],z=Tt=>Tt.carrier&&r[Tt.carrier]?Wn(r[Tt.carrier],T[Tt.carrier]??0):Ep(Tt,b);let pt=-1,Et=1/0;const wt=r[D];if(Y.forEach((Tt,mt)=>{if(Dt.some(Gt=>Gt.take===mt))return;const kt=z(Tt),Xt=Math.hypot(kt[0]-wt[0],kt[1]-wt[1]);Xt<Et&&(Et=Xt,pt=mt)}),pt<0||Et>Rh){const Tt=Y.length?pt<0?"every spare has already been used":`the nearest is ${Et.toFixed(1)} m away (needs ${Rh} m)`:"this drill has no balls[]";console.warn(`[engine3d] ${G} by ${D} at t=${b.toFixed(2)}s is flagged newBall, but there is no spare ball to take: ${Tt} — played with the ball already in play`);return}const Nt=ct(b),tt=Nt?Ji(l,Nt,b):null,vt=tt?[...tt.carry]:Nt&&r[Nt]?Wn(r[Nt],T[Nt]??0):vo(a,n,b).at,_t=z(Y[pt]);Dt.push({t:b,drop:vt,take:pt,at:_t}),p.push({t:b,player:D}),l.push({player:D,at:b,carry:_t}),y[D]=b}const ot=Object.fromEntries(i.players.map(D=>[D.id,D.team]));function at(D,b,G,Y,z){const pt=ct(Y);if(!pt||pt===D||qt.has(D)||ot[D]==="coach"||ot[pt]===ot[D])return null;const Et=r[pt]?[...r[pt]]:vo(a,n,Y).at;if(!Yi(b,Et)||!Yi(b,G))return null;const wt=ze(b,G),Nt=Ki(ze(Et,b),wt),tt=Math.hypot(Et[0]-b[0],Et[1]-b[1])<=UE?OE(Nt,z):null;if(tt&&t.clips[tt.id]){const _t=wt-tt.axis,Tt=Math.hypot(Et[0]-b[0],Et[1]-b[1])||1;return{clip:tt.id,ball:[b[0]+Tt*Math.sin(_t),b[1]+Tt*Math.cos(_t)]}}const vt=kE(Nt,z);return vt&&t.clips[vt]?{clip:vt,ball:Et}:null}const et={};for(const D of i.events)D.type==="move"&&(et[bt=D.player]??(et[bt]=[])).push(D.t);function yt(D,b,G){for(const Y of F){const z=Y.id;if(!lt.length||ct(D)===z||!t.clips[mo.left.id]||!t.clips[mo.right.id])continue;const pt=_[z],Et=Math.max(D,It[z]??0,pt?pt.t0+Ie(pt):0);if(d.some(te=>te.player===z))continue;const wt=lt.reduce((te,E)=>Math.hypot(E.at[0]-Y.start[0],E.at[1]-Y.start[1])<Math.hypot(te.at[0]-Y.start[0],te.at[1]-Y.start[1])?E:te,lt[0]),Nt=wt.at,tt=wt.sideways?1:0,vt=wt.sideways?0:1,_t=iA(Ct,e,Math.abs(r[z][vt]-Nt[vt]),wt.halfW),mt=Nt[tt]+Math.min(_t,Math.max(-_t,(G[tt]-Nt[tt])*nA))-r[z][tt],kt=ze(Nt,[i.pitch.width/2,i.pitch.length/2]),Xt=wt.sideways?-Math.sin(kt):Math.cos(kt),Gt=rA(mt,mo[mt*Xt>0?"left":"right"].dist*Ct,Math.sign(Xt)||1);if(!Gt)continue;const ue=mo[Gt.side],At=Math.min(b,i.duration)-Gt.steps*ue.duration;if(At<Et-1e-9||(et[z]??[]).some(te=>te>=At-1e-9))continue;const Te=Math.sign(mt)*ue.dist*Ct;for(let te=0;te<Gt.steps;te++){const E=[...r[z]],W=[...E];W[tt]=E[tt]+Te;const V=Wh(E,W,At+te*ue.duration,ue.duration);(o[z]??(o[z]=[])).push(V),r[z]=[...V.to],_[z]=V}c.push({player:z,clip:ue.id,t0:At,loopUntil:At+Gt.steps*ue.duration}),g[z]=[]}}function Bt(D,b){var pt;const G=(pt=i.players.find(Et=>Et.id===D))==null?void 0:pt.start;if(!G||!lt.length)return!1;let Y=lt[0].at,z=1/0;for(const Et of lt){const wt=Math.hypot(Et.at[0]-G[0],Et.at[1]-G[1]);wt<z&&(z=wt,Y=Et.at)}return Math.hypot(b[0]-Y[0],b[1]-Y[1])<=CA*Ct}function Qt(D,b){const G=_[D];if(!G||G.endSpeed)return;const Y=G.t0+Ie(G);if(b-Y>=po)return;G.endSpeed=Es;const z=G.t0+Ie(G);for(const pt of g[D]??[]){const Et=c.indexOf(pt);Et>=0&&c.splice(Et,1)}if(g[D]=Q(G,D),z>b-Ri){if(Kt.has(D)){console.warn(`[engine3d] player ${D}'s move started at t=${G.t0} still arrives at t=${z.toFixed(3)}, less than ${Ri}s before their action at t=${b} — he fetched a free ball, so this warns instead of throwing; schedule it later`);return}throw new Error(`buildSchedule: player ${D}'s move started at t=${G.t0} still arrives at t=${z.toFixed(3)} even flowing into their action at ${Es} m/s, less than ${Ri}s before their action at t=${b} — move the event later or start the approach move earlier`)}}function de(D,b,G,Y,z){const pt=_[D],Et=pt?pt.t0+Ie(pt):0;if(pt&&(pt.endSpeed!==void 0||b-Et<po))return null;const wt=gT(r[D],G,z),Nt=t.groups.walk,tt=Nt!=null&&Nt.length?t.clips[Nt[0]].speed??Cn:Cn,vt={from:[...r[D]],to:wt,t0:0,cruise:tt,accel:Dn};let _t=b-Y-Ie(vt);return _t<Math.max(Et,y[D]??0)||!O(D,_t)?null:(vt.t0=_t,(o[D]??(o[D]=[])).push(vt),z&&m.add(vt),_[D]=vt,g[D]=Q(vt,D),r[D]=[...wt],_t)}function se(D,b,G){const Y=vo(a,n,b).at,z=ze(Y,G),pt=[Y[0]-Ne*Math.sin(z),Y[1]-Ne*Math.cos(z)],Et=Math.hypot(pt[0]-r[D][0],pt[1]-r[D][1]);if(Et<bA){r[D]=[...pt];return}const wt=_[D],Nt=wt?wt.t0+Ie(wt):0,tt=Math.max(Nt,y[D]??0,0);let vt;for(let _t=Et<Hh?0:1;_t<xo.length;_t++){const Tt=t.groups[xo[_t]]??t.groups.jog,mt=t.clips[Mn(Tt,D,b)].speed??Cn;if(vt={from:[...r[D]],to:pt,t0:0,cruise:mt,accel:Dn,endSpeed:Es},vt.t0=b-Ri-Ie(vt),vt.t0>=tt)break}vt.t0<tt&&(console.warn(`[engine3d] dead-ball run-up for ${D} at t=${b.toFixed(2)}s wants to start at t=${vt.t0.toFixed(2)}s but he is not free until t=${tt.toFixed(2)}s — he arrives late on the ball; schedule the strike later`),vt.t0=tt),O(D,vt.t0),(o[D]??(o[D]=[])).push(vt),_[D]=vt,g[D]=Q(vt,D),r[D]=[...pt]}function Ce(D,b,G){const Y=vo(a,n,b);{const Tt=Vh(Y.at,Mt,wA*Ct);if(Math.hypot(Tt[0]-Y.at[0],Tt[1]-Y.at[1])>1e-6){const mt=a.filter(kt=>kt.t0<=b&&Math.hypot(kt.to[0]-Y.at[0],kt.to[1]-Y.at[1])<1e-9);if(mt.length){for(const kt of mt)Math.hypot(kt.from[0]-Y.at[0],kt.from[1]-Y.at[1])<1e-9&&(kt.from=[...Tt]),kt.to=[...Tt];Y.at=Tt}}}const z=ct(b);z&&z!==D&&p.push({t:b,player:null});const pt=Y.moving?Y.restT+LA:-1/0;let Et=null;for(let Tt=G+1;Tt<J.length;Tt++){const mt=ht[Tt];if(!(!mt||mt.actor!==D)){mt.t-b<=Ts+3&&(Et=mt.target);break}}let wt=Xh(r[D],Y.at,Et);if(wt.stepTo){const Tt=Vh(wt.stepTo,Mt,RA*Ct),mt=[Tt[0]-Y.at[0],Tt[1]-Y.at[1]];if(Math.hypot(mt[0],mt[1])>1e-6){const kt=Ye(mt),Xt=Ne+1,Gt=Xh([Y.at[0]+Xt*kt[0],Y.at[1]+Xt*kt[1]],Y.at,Et);Gt.stepTo&&ut(Gt.stepTo)&&(wt=Gt)}}let Nt=1/0;for(let Tt=G+1;Tt<J.length;Tt++){const mt=J[Tt];if((mt.type==="pass"?mt.from:mt.player)===D){Nt=mt.t;break}}let tt=b;if(wt.stepTo){const Tt=Math.hypot(wt.stepTo[0]-r[D][0],wt.stepTo[1]-r[D][1]);let mt;for(let kt=Tt<Hh?0:1;kt<xo.length;kt++){const Xt=t.groups[xo[kt]]??t.groups.jog,Gt=t.clips[Mn(Xt,D,b)].speed??Cn;if(mt={from:[...r[D]],to:wt.stepTo,t0:b,cruise:Gt,accel:Dn,endSpeed:Es},b+Ie(mt)+Qn+Ri<=Nt)break}if(pt>b+Ie(mt)){const kt=pt-b,Xt=Math.hypot(wt.stepTo[0]-mt.from[0],wt.stepTo[1]-mt.from[1]),Gt=Dn*Dn*kt*kt-4*Dn*Xt,ue=Gt>0?(Dn*kt-Math.sqrt(Gt))/2:mt.cruise,At=(t.clips[Mn(t.groups.walk,D,b)].speed??_l)*ia;mt={...mt,cruise:Math.max(Math.min(ue,mt.cruise),At),endSpeed:0}}(o[D]??(o[D]=[])).push(mt),Kt.set(D,b),_[D]=mt,g[D]=Q(mt,D),tt=b+Ie(mt),r[D]=[...wt.stepTo]}tt=Math.max(tt,pt),M({player:D,at:[...Y.at],t0:Math.max(b,v[D]??0),lock:[tt-yn,tt+yn]});const vt=Tt=>{for(const mt of g[D]??[]){const kt=c.indexOf(mt);mt.t0>=Tt?kt>=0&&c.splice(kt,1):(mt.loopUntil??0)>Tt&&(mt.loopUntil=Tt)}};if(qt.has(D)&&Bt(D,Y.at)){const Tt=gn.scoop[0],mt=tt-Tt.contact;return mt<b&&console.warn(`[engine3d] keeper ${D}'s scoop at t=${tt.toFixed(2)}s wants to start at t=${mt.toFixed(2)}s, before his collect at t=${b.toFixed(2)}s — schedule the collect earlier`),vt(Math.max(mt,0)),c.push({player:D,clip:Tt.id,t0:Math.max(mt,0),contact:Tt.contact}),M({player:D,at:[...wt.faceAt],t0:tt}),p.push({t:tt,player:D}),l.push({player:D,at:tt,carry:[...Y.at],hand:{height:Vn*Ct,from:IA*Ct,rise:Fh,follow:!0}}),y[D]=tt,It[D]=Math.max(mt,0)+Tt.duration+ws,tt}const _t=Mn(t.groups.pass,D,tt);return vt(tt-(t.clips[_t].ballContact??0)),c.push({player:D,clip:_t,t0:tt-(t.clips[_t].ballContact??0)}),a.push({from:[...Y.at],to:wt.set,t0:tt,duration:Qn,style:"ground"}),M({player:D,at:[...wt.faceAt],t0:tt}),p.push({t:tt,player:D}),l.push({player:D,at:tt+Qn,carry:wt.set}),y[D]=tt+Qn,tt+Qn}const F=i.players.filter(D=>D.role==="keeper"),Ct=e,qt=new Set(F.map(D=>D.id));i.players.forEach(D=>T[D.id]=D.role==="keeper"?ze(D.start,n):0);const le=((Vt=i.keeper)==null?void 0:Vt.outcome)==="save",It={},ye={},Kt=new Map,L={},R={},J=[...i.events].sort((D,b)=>D.t-b.t);if(i.ball&&!i.ball.static){const D=n,b=i.players.reduce((z,pt)=>Math.hypot(pt.start[0]-D[0],pt.start[1]-D[1])<Math.hypot(z.start[0]-D[0],z.start[1]-D[1])?pt:z,i.players[0]),G=J.find(z=>z.type!=="move"||z.player===(b==null?void 0:b.id)&&qt.has(z.player)),Y=G?G.type==="pass"?G.from:G.player:null;if(!((G==null?void 0:G.type)==="collect"||((G==null?void 0:G.type)==="pass"||(G==null?void 0:G.type)==="shoot")&&G.deadBall))if(Y&&qt.has(Y))p.push({t:0,player:Y}),y[Y]=0,(G==null?void 0:G.type)==="pass"&&!!G.fromFeet||l.push({player:Y,at:0,carry:[...n],hand:{height:Vn*Ct,follow:!0}});else{const z=i.players.filter(wt=>wt.role!=="keeper"),pt=z.length?z:i.players,Et=pt.reduce((wt,Nt)=>Math.hypot(Nt.start[0]-n[0],Nt.start[1]-n[1])<Math.hypot(r[wt.id][0]-n[0],r[wt.id][1]-n[1])?Nt:wt,pt[0]).id;p.push({t:0,player:Et}),y[Et]=0}}const lt=(i.equipment??[]).filter(D=>D.type==="goal").map(D=>({at:D.at,halfW:rs(D,na),sideways:D.facing==="e"||D.facing==="w"})),Mt=PA(i.equipment,e),ut=D=>D[0]>=0&&D[0]<=i.pitch.width&&D[1]>=0&&D[1]<=i.pitch.length,ne=D=>Mt.every(b=>Math.hypot(b[0]-D[0],b[1]-D[1])>=Do*Ct),Lt={};i.players.forEach(D=>Lt[D.id]=[...D.start]);const ht=J.map(D=>{if(D.type==="move")return Lt[D.player]=[...D.to],null;if(D.type==="dribble")return Lt[D.player]=[...D.to],{actor:D.player,target:[...D.to],t:D.t};if(D.type==="collect"||D.type==="tackle")return null;const b=D.type==="pass"?D.from:D.player;D.deadBall&&(Lt[b]=[...n]);const G=D.type==="pass"?[...Lt[D.to]]:D.flightStyle==="ground"?[...D.at]:QA(Lt[D.player],D.at,lt,D.corner,e);return{actor:b,target:G,t:D.t}});for(let D=0;D<J.length;D++){const b=J[D];B(b.t);const G=b.type==="pass"?b.from:b.player;if(b.newBall&&nt(G,b.t,b.type),b.type!=="dribble"&&b.type!=="move"&&delete w[G],b.type==="move"){it(b.player,b.t,b.type);const z=qt.has(b.player)&&(((re=($t=Ji(l,b.player,b.t))==null?void 0:$t.hand)==null?void 0:re.height)??0)>0;ct(b.t)===b.player&&!z&&console.warn(`[engine3d] move event for ${b.player} at t=${b.t.toFixed(2)}s starts while they hold the ball (plain moves don't carry): the ball stays parked at its rest point instead of following — pass first, or use a dribble event`);const pt=t.groups[b.gait??"jog"]??t.groups.jog,Et=t.clips[Mn(pt,b.player,b.t)].speed??Cn,wt=x[b.player],tt={from:wt&&b.t<wt.t0?[...wt.at]:[...r[b.player]],to:b.to,t0:b.t,cruise:Et,accel:Dn},vt=at(b.player,tt.from,b.to,b.t,Et),_t=vt?null:(()=>{const Tt=bl(s,Et);if((Tt==null?void 0:Tt.gait)!=="run"&&(Tt==null?void 0:Tt.gait)!=="sprint"||!t.clips[pi.turn_to_run_a.id]||qt.has(b.player)||A(b.player)>b.t+1e-9||!Yi(tt.from,b.to))return null;const mt=Ki(T[b.player]??0,ze(tt.from,b.to));return Math.abs(mt)>=rd?{delta:mt,gait:Tt.gait}:null})();if((o[Wt=b.player]??(o[Wt]=[])).push(tt),_[b.player]=tt,g[b.player]=Q(tt,b.player),vt){for(const mt of g[b.player]??[]){const kt=c.indexOf(mt);kt>=0&&c.splice(kt,1)}const Tt={player:b.player,clip:vt.clip,t0:b.t,loopUntil:b.t+Ie(tt)};c.push(Tt),g[b.player]=[Tt],M({player:b.player,at:vt.ball,t0:b.t,until:b.t+Ie(tt)})}else{if(_t){const Tt=Math.abs(_t.delta)>LE,mt=_t.gait==="run"?pi.turn_180_a:null,kt=Tt&&mt&&t.clips[mt.id]?mt:pi.turn_to_run_a,Xt=kt.id===pi.turn_to_run_a.id?IE:0,Gt=kt.id===pi.turn_to_run_a.id?PE:U(kt,Xt),ue=T[b.player]??0;P(b.player,kt,b.t,Xt,ue,ue+_t.delta,Gt);const At=b.t+Gt;g[b.player]=(g[b.player]??[]).filter(Te=>{if(Te.t0>=At-1e-9)return!0;if((Te.loopUntil??1/0)<=At+1e-9){const te=c.indexOf(Te);return te>=0&&c.splice(te,1),!1}return Te.t0=At,!0})}M({player:b.player,at:b.to,t0:b.t})}r[b.player]=[...b.to]}else if(b.type==="dribble"){it(b.player,b.t,b.type),ct(b.t)!==b.player&&console.warn(`[engine3d] dribble event for ${b.player} at t=${b.t.toFixed(2)}s but they don't hold the ball — the touch chain plays anyway; fix the authoring`);const z=b.gait??"jog",pt=t.groups[z]??t.groups.jog,Et=t.clips[Mn(pt,b.player,b.t)].speed??Cn,wt=ze(r[b.player],b.to),Nt=(((pe=(be=Ji(l,b.player,b.t))==null?void 0:be.hand)==null?void 0:pe.height)??0)>0,tt=Nt?Ip(l,b.player,b.t):0,vt=Nt?b.t+Uh:b.t,_t={from:[...r[b.player]],to:[...b.to],t0:vt,cruise:Et,accel:Dn};let Tt=null;for(let st=D+1;st<J.length;st++){const ft=ht[st];if(!(!ft||ft.actor!==b.player)){Tt={target:ft.target,t:ft.t};break}}const mt=vt+Ie(_t);let kt=null;for(let st=D+1;st<J.length;st++){const ft=J[st];if((ft.type==="pass"?ft.from:ft.player)===b.player){kt=ft;break}}let Xt=null;if((kt==null?void 0:kt.type)==="dribble"&&kt.t-mt<=Ts){const st=Ki(wt,ze(b.to,kt.to)),ft=RE(st,z),xt=ft?pi[ft]:null;if(xt&&t.clips[xt.id]){const $=xt.standing?mt:vt+Ie({..._t,endSpeed:Es});kt.t-$>=U(xt)-1e-9&&(Xt={c:xt,delta:st})}}Tt&&Tt.t-mt<po&&!(Xt!=null&&Xt.c.standing)&&(_t.endSpeed=Es),Xt&&P(b.player,Xt.c,kt.t-U(Xt.c),0,wt,wt+Xt.delta),(o[ge=b.player]??(o[ge]=[])).push(_t),_[b.player]=_t,g[b.player]=Q(_t,b.player),M({player:b.player,at:[...b.to],t0:b.t});let Gt=null;for(const st of l)st.player===b.player&&(!Gt||st.at>Gt.at)&&(Gt=st);Gt&&Gt.at>b.t+1e-9&&console.warn(`[engine3d] dribble for ${b.player} at t=${b.t.toFixed(2)}s starts during their settle (ends t=${Gt.at.toFixed(2)}s): the first touch cuts the settle short — schedule it later`);let ue=Gt?[...Gt.carry]:Wn(r[b.player],wt);Nt&&(ue=Wn(r[b.player],wt),l.push({player:b.player,at:b.t,carry:[...ue],hand:{height:0,from:tt,rise:Uh,follow:!0}}),y[b.player]=b.t);const At=Tt&&Tt.t-mt<=Ts?Wn(b.to,ze(b.to,Tt.target)):Wn(b.to,wt),Te=ei(b.player)%2===0?1:-1;let te=Te,E=!1;for(let st=D+1;st<J.length;st++){const ft=J[st];if((ft.type==="pass"?ft.from:ft.player)===b.player){if(ft.type==="dribble"&&ft.t-mt<=Ts){const $=Ye([b.to[0]-_t.from[0],b.to[1]-_t.from[1]]),Rt=Ye([ft.to[0]-b.to[0],ft.to[1]-b.to[1]]),Pt=$[0]*Rt[1]-$[1]*Rt[0],St=Pt<0?1:-1;Math.abs(Pt)>.05&&St===-Te&&(te=St),E=Math.abs(Ki(ze(_t.from,b.to),ze(b.to,ft.to)))>Oc}break}}const W=w[b.player],V=!!W&&vt-W.end<=Ts&&Math.abs(Ki(W.h,wt))>Oc;w[b.player]={h:wt,end:mt};const q=Object.entries(r).filter(([st])=>st!==b.player).map(([,st])=>[...st]),k=fE(_t,ue,At,Qh[z]??Qh.jog,te,{turnIn:V,turnOut:E,others:q});a.push(...k.flights),l.push({player:b.player,at:k.restEnd,carry:[...At]}),y[b.player]=k.restEnd,r[b.player]=[...b.to],yt(k.restEnd,((K=J[D+1])==null?void 0:K.t)??i.duration,[...At])}else if(b.type==="collect")it(b.player,b.t,b.type),Ce(b.player,b.t,D);else if(b.type==="tackle"){it(b.player,b.t,b.type),Qt(b.player,b.t);const z=b.from;ct(b.t)!==z&&console.warn(`[engine3d] tackle by ${b.player} at t=${b.t.toFixed(2)}s from ${z}, but ${ct(b.t)??"nobody"} holds the ball — plays anyway; fix the authoring`);const pt=qt.has(b.player)&&!!t.clips[bo.id],Et=!pt&&b.style!=="slide"&&!!t.clips[_o.id],wt=b.t+(pt?bo:Et?_o:ec[0]).contact;let Nt=null,tt=-1/0;for(const Xt of l)Xt.player===z&&Xt.at<=wt&&Xt.at>tt&&(tt=Xt.at,Nt=[...Xt.carry]);if(Nt||(Nt=Wn(r[z],ze(r[z],r[b.player]))),Et){const Xt=SA*Ct,Gt=Ye([r[b.player][0]-r[z][0],r[b.player][1]-r[z][1]]);if(Math.hypot(r[b.player][0]-r[z][0],r[b.player][1]-r[z][1])<Xt){const ue=[r[z][0]+Xt*Gt[0],r[z][1]+Xt*Gt[1]],At=_[b.player];if(At&&Math.hypot(At.to[0]-r[b.player][0],At.to[1]-r[b.player][1])<1e-6){const Te=(t.clips[Mn(t.groups.sprint??t.groups.run??t.groups.jog,b.player,b.t)].speed??At.cruise)*mi,te=Math.min(Ie(At),Math.max(wt-At.t0,.2));At.to=ue;for(let E=0;E<8&&Ie(At)>te+1e-6&&At.cruise<Te;E++)At.cruise=Math.min(Te,At.cruise*Ie(At)/te);for(const E of g[b.player]??[]){const W=c.indexOf(E);W>=0&&c.splice(W,1)}g[b.player]=Q(At,b.player),r[b.player]=wt<At.t0+Ie(At)?En(At,wt).pos:ue}else r[b.player]=ue}}const vt=Et?Math.hypot(r[z][0]-r[b.player][0],r[z][1]-r[b.player][1]):Math.hypot(Nt[0]-r[b.player][0],Nt[1]-r[b.player][1]),_t=pt?bo.reach:Et?_o.reach+Ne:EA;vt>_t*Ct&&console.warn(`[engine3d] tackle by ${b.player} at t=${b.t.toFixed(2)}s: the ball is ${vt.toFixed(2)} m away (reach ${(_t*Ct).toFixed(2)}) — move the tackler closer first`),Et&&vt<Do*Ct-1e-6&&console.warn(`[engine3d] tackle by ${b.player} at t=${b.t.toFixed(2)}s: he is ${vt.toFixed(2)} m from ${z}, inside a body width (${(Do*Ct).toFixed(2)} m at this body scale) — the two of them draw as one`);const Tt=pt?bo:Et?_o:ec[Math.abs(ei(b.player)+Math.floor(b.t*10))%ec.length],mt=b.t+Tt.contact,kt={player:b.player,clip:Tt.id,t0:b.t,contact:Tt.contact};if(c.push(kt),M({player:b.player,at:Nt,t0:Math.max(b.t-hr,0,v[b.player]??0),lock:[b.t,b.t+Tt.duration]}),pt){const Xt=Ds(t,kt),Gt=Wn(r[b.player],ze(r[b.player],Nt));p.push({t:mt,player:b.player});const ue=rc(r[b.player],r[z],Nt);l.push({player:b.player,at:mt,carry:[...Nt],hand:{height:go*Ct,follow:!0,bone:ue}}),l.push({player:b.player,at:Xt,carry:Gt,hand:{height:Vn*Ct,from:go*Ct,rise:Qa,follow:!0,bone:ue}}),y[b.player]=mt,It[b.player]=b.t+Tt.duration+ws}if(!pt){const Xt=Ye([r[z][0]-r[b.player][0],r[z][1]-r[b.player][1]]),Gt=[-Xt[1],Xt[0]],ue=(Nt[0]-r[z][0])*Gt[0]+(Nt[1]-r[z][1])*Gt[1]>=0?1:-1,At=te=>[r[z][0]+ue*te*Ct*Gt[0]+Gh*Ct*Xt[0],r[z][1]+ue*te*Ct*Gt[1]+Gh*Ct*Xt[1]];let Te=At(Bh);if(Et){let te=jh(r[z],Nt,Te);for(let E=Bh+.05;E<=1&&!(te>=MA*Ct);E+=.05){const W=At(E),V=jh(r[z],Nt,W);V>te&&(te=V,Te=W)}}a.push({from:Nt,to:Te,t0:mt,duration:zh,style:"ground",pop:!0}),p.push({t:mt,player:null})}if(Et){const Xt=vA.filter(Gt=>t.clips[Gt]);if(Xt.length){const Gt=Xt[Math.abs(ei(z)+Math.floor(b.t*10))%Xt.length];c.push({player:z,clip:Gt,t0:mt}),M({player:z,at:[...Nt],t0:Math.max(mt,v[z]??0),until:mt+t.clips[Gt].duration})}}else if(t.clips[kh]){let Xt=1/0;for(let te=D+1;te<J.length;te++){const E=J[te];if((E.type==="pass"?E.from:E.player)===z){Xt=E.t;break}}const Gt=Ye([r[z][0]-Nt[0],r[z][1]-Nt[1]]),ue=yA*Ct,At=mt+AA,Te=Wh([...r[z]],[r[z][0]+ue*Gt[0],r[z][1]+ue*Gt[1]],At,dr);if(At+dr+Ri<=Xt){(o[z]??(o[z]=[])).push(Te),_[z]=Te,c.push({player:z,clip:kh,t0:At,loopUntil:At+dr}),g[z]=[];const te=Math.max(At,v[z]??0);te<At+dr&&M({player:z,at:[...Nt],t0:te,until:At+dr}),r[z]=[...Te.to]}}pt||Ce(b.player,Math.max(Ds(t,kt),mt+zh),D)}else{const z=b.type==="pass"?b.from:b.player,pt=L[z],Et=!!pt&&b.t>=pt.at-yo&&b.t-pt.at<=nc;pt&&!Et&&console.warn(`[engine3d] header for ${z} at t=${b.t} does not meet the cross at their forehead (t=${pt.at.toFixed(2)}s) — played as an ordinary ${b.type}`),delete L[z];const wt=R[z],Nt=!!wt&&!!b.firstTime&&!Et;b.firstTime&&!wt&&!Et&&console.warn(`[engine3d] firstTime ${b.type} for ${z} at t=${b.t} has no ball arriving at their boot — played as an ordinary strike`),delete R[z],Et&&b.t-pt.at>Kh&&console.warn(`[engine3d] header for ${z} at t=${b.t} pulled to the ball's arrival (t=${pt.at.toFixed(2)}s) — the ball cannot wait in the air`),it(z,b.t,b.type),Et||Qt(z,b.t);const tt=b.type==="pass"?r[b.to]:ht[D].target,vt=b.type==="shoot"&&b.flightStyle!=="ground",_t=vt?KA:HS,Tt=vt?$A:hr;b.deadBall&&!Et&&se(z,b.t,tt);const mt=qt.has(z)&&ct(b.t)===z&&(((rt=(Ot=Ji(l,z,b.t))==null?void 0:Ot.hand)==null?void 0:rt.height)??0)>0,kt=!mt&&(b.style==="throw"||b.style==="roll")?b.style:null;qt.has(z)&&(It[z]??0)>b.t&&console.warn(`[engine3d] keeper ${z} is busy until t=${It[z].toFixed(2)}s (save / catch clip still playing) but has a ${b.type} at t=${b.t} — schedule it later`);const Xt=$=>{if(!Et)return null;const Rt=Math.hypot($[0]-k[0],$[1]-k[1]);return Rt>=HA?{style:"headed",loft:sc(Rt,Ct)}:null};let Gt=b.t;if(b.type==="shoot"&&!b.touch){const $=_[z],Rt=$?$.t0+Ie($):-1/0;$&&($.endSpeed??0)>0&&b.t-Rt>Yh&&b.t-Rt<po&&(Gt=Rt-Yh)}let ue="",At,Te,te=0,E=null,W=null;if(Et)At=pt.at,te=pt.height;else if(Nt)ue=Mn(t.groups[vt?"shoot":"pass"],z,Gt),Te=t.clips[ue].ballContact??0,Gt=wt.at-Te,At=wt.at,Gt<0&&console.warn(`[engine3d] first-time ${b.type} for ${z} wants its cue at t=${Gt.toFixed(2)}s; the player clamps it to 0, so its contact frame will miss the ball — schedule the pass into them later`);else if((mt||kt)&&(b.type==="pass"||b.flightStyle==="ground")){E=b.style??DA(Math.hypot(tt[0]-r[z][0],tt[1]-r[z][1]));const $=kt?eA[kt]:gn[E];ue=$.id,Te=$.contact,At=b.t+$.contact,te=E==="roll"?0:$.release*Ct,It[z]=b.t+$.duration+ws}else{const $=_[z],Rt=b.type==="shoot"&&$&&($.endSpeed??0)>0&&Gt<=$.t0+Ie($)+1e-9?En($,Gt).speed:0;W=de(z,Gt,tt,_t,b.type==="pass"||b.type==="shoot"&&!!b.touch),Rt>YA&&t.clips[Fo.id]&&!(b.type==="shoot"&&b.touch)?(ue=Fo.id,Te=Fo.contact):ue=Mn(t.groups[vt?"shoot":"pass"],z,b.t),At=Gt+(Te??t.clips[ue].ballContact??0)}let V=null;Et||(V={player:z,clip:ue,t0:Gt,...Te!==void 0?{contact:Te}:{}},c.push(V),H({player:z,at:[...tt],t0:Math.max(Gt-Tt,0,v[z]??0),lock:[Gt,At+yn],until:At+yn,headUntil:At-zE},Math.min(Gt,W??1/0)));const q=ze(r[z],tt),k=Et?[...pt.from]:Nt?[...wt.from]:Wn(r[z],q),st=kt?gA:mA,ft=b.type==="pass"&&qt.has(b.to)&&!b.toFeet?b.flight:0,xt=b.type!=="pass"?0:E==="throw"?Math.max(.4,ft,Math.hypot(tt[0]-k[0],tt[1]-k[1])/st):b.style==="roll"?Math.max(b.flight,Math.hypot(tt[0]-k[0],tt[1]-k[1])/_A):b.flight;if(!Et&&!Nt){const $=Math.max(Gt-OS,y[z]??0);$>At&&console.warn(`[engine3d] departure window for ${z} is inverted (starts t=${$.toFixed(2)}s, ball contact t=${At.toFixed(2)}s): the return pass strikes during the settle — schedule it later`),h.push({player:z,windowStart:$,contact:At,heading:q,...E?{toHeight:te}:{}})}if(b.type==="pass"&&qt.has(b.to)&&!b.toFeet){const $=At+xt,Rt=j(b.to,D,$);Rt.blocked&&console.warn(`[engine3d] ball to the keeper ${b.to} at t=${b.t}: their authored ${Rt.blocked} runs during the flight, so where they stand at t=${$.toFixed(2)}s cannot be known — the ball is aimed at where they are now; fix the authoring`);const Pt=Rt.atArrival,St=Ye([k[0]-Pt[0],k[1]-Pt[1]]),Jt=[Pt[0]+Ne*St[0],Pt[1]+Ne*St[1]],ae=(b.flightStyle==="clipped"||b.flightStyle==="lofted")&&b.style!=="roll",ce=((gt=b.deflect)==null?void 0:gt.style)==="lofted",Ut=ae?(b.loft??0)>tA||ce?gn.catchHigh:gn.catch:gn.scoop[Math.abs(ei(b.to)+Math.floor($*10))%gn.scoop.length],Yt=ae?Math.min(Vn*(Ut===gn.catchHigh?2:1),xA)*Ct:0,Ft=$-Ut.contact;Ft<0&&console.warn(`[engine3d] receive cue for ${b.to} wants t0=${Ft.toFixed(2)}s; the player clamps it to 0, so its contact frame will miss ball arrival — schedule the pass later or shorten the flight`),Ft<Rt.busyUntil&&console.warn(`[engine3d] catch cue for ${b.to} at t=${$.toFixed(2)}s wants t0=${Ft.toFixed(2)}s but their move is still running (until t=${Rt.busyUntil.toFixed(2)}s) — the run will play over the catch; schedule the ball later`),Ft<At&&console.warn(`[engine3d] catch cue for ${b.to} at t=${$.toFixed(2)}s wants t0=${Ft.toFixed(2)}s, before the ball leaves ${z} at t=${At.toFixed(2)}s — the catch would play out on a ball still at the server's boot; lengthen the flight or schedule the ball later`),c.push({player:b.to,clip:Ut.id,t0:Ft,contact:Ut.contact});const Ae=b.flightStyle==="lofted"?sc(Math.hypot(Jt[0]-k[0],Jt[1]-k[1]),Ct)-(te+Yt)/2:E==="throw"?Math.max(kt?tc:1.5,b.loft??0):b.loft;if(a.push({from:k,to:Jt,t0:At,duration:xt,style:E==="kick"?"clipped":ae||E==="throw"?"lofted":"ground",...Ae!==void 0?{loft:Ae}:{},...Yt?{toHeight:Yt}:{},...te?{fromHeight:te}:{}}),M({player:b.to,at:[...r[z]],t0:b.t,lock:[$-yn,$+yn]}),b.deflect)a.push(Oh(Jt,Yt,b.deflect,$,Ct)),y[b.to]=$;else{p.push({t:$,player:b.to});const ee=rc(r[b.to],r[z],Jt);l.push({player:b.to,at:$,carry:Jt,hand:ae?{height:Vn*Ct,from:Yt,rise:Qa,follow:!0,bone:ee}:{height:Vn*Ct,from:0,rise:Fh,follow:!0,bone:ee}}),y[b.to]=$}It[b.to]=Ft+Ut.duration+ws}else if(b.type==="pass"&&!b.toFeet&&b.flightStyle==="lofted"&&(b.loft??kA)>=VA){const $=At+xt;let Rt=null,Pt=1/0,St=!1,Jt=!1,ae;for(let ee=D+1;ee<J.length;ee++){const ie=ht[ee],xe=J[ee];if((xe.type==="move"||xe.type==="collect")&&xe.player===b.to&&ae===void 0&&xe.t>=$-yo&&(ae=xe.t),!(!ie||ie.actor!==b.to)){Rt=ie.target,Pt=ie.t,Jt=xe.type==="pass"||xe.type==="shoot",St=Jt&&!!xe.header;break}}ae!==void 0&&Jt&&Pt-$<=nc&&console.warn(`[engine3d] ${b.to} has a move at t=${ae.toFixed(2)}s between the cross landing on their forehead (t=${$.toFixed(2)}s) and their strike at t=${Pt} — they cannot run and head it, so the ball is cushioned down and the strike plays from the boot`);const ce=Jt&&ae===void 0&&Pt>=$-yo&&(Pt-$<=Kh||St&&Pt-$<=nc),Ut=j(b.to,D,$);Ut.blocked&&!ce&&console.warn(`[engine3d] cross to ${b.to} at t=${b.t}: their authored ${Ut.blocked} runs during the flight, so where they stand at t=${$.toFixed(2)}s cannot be known — the ball is aimed at where they are now and may land behind them; fix the authoring`);const Yt=WA(Ut.atArrival,k,Rt,Ct),Ft=$-Yt.clip.contact;Ft<0&&console.warn(`[engine3d] header cue for ${b.to} wants t0=${Ft.toFixed(2)}s; the player clamps it to 0, so its contact frame will miss ball arrival — schedule the cross later or shorten the flight`),Ft<Ut.busyUntil&&console.warn(`[engine3d] header cue for ${b.to} wants t0=${Ft.toFixed(2)}s but their move is still running (until t=${Ut.busyUntil.toFixed(2)}s) — the wind-up will cut it short; schedule the cross later`),c.push({player:b.to,clip:Yt.clip.id,t0:Ft,contact:Yt.clip.contact});const Ae=Math.hypot(Yt.contact[0]-k[0],Yt.contact[1]-k[1]);a.push({from:k,to:Yt.contact,t0:At,duration:xt,style:"lofted",loft:sc(Ae,Ct)-(te+Yt.height)/2,toHeight:Yt.height,...te?{fromHeight:te}:{}}),ce?(L[b.to]={at:$,from:Yt.contact,height:Yt.height},M({player:b.to,at:[...Rt],t0:Math.max(Ft-hr,0,v[b.to]??0),lock:[Ft,$+yn],until:$+yn})):(Jt&&Pt<$-yo?console.warn(`[engine3d] ${b.to}'s own strike at t=${Pt} is ${($-Pt).toFixed(2)}s BEFORE the cross reaches their forehead (t=${$.toFixed(2)}s) — the ball cannot arrive early, so it is cushioned down instead; schedule the strike at the arrival`):St&&console.warn(`[engine3d] header for ${b.to} at t=${Pt} is ${(Pt-$).toFixed(2)}s after the ball arrives (t=${$.toFixed(2)}s) — ignored, cushioned instead`),M({player:b.to,at:[...r[z]],t0:b.t,lock:[$-yn,$+yn]}),a.push({from:Yt.contact,to:Yt.set,t0:$,duration:ic,style:"drop",fromHeight:Yt.height}),M({player:b.to,at:[...Yt.faceAt],t0:$}),p.push({t:$,player:b.to}),y[b.to]=$+ic,l.push({player:b.to,at:$+ic,carry:Yt.set}))}else if(b.type==="pass"){const $=At+xt,Rt=Mn(t.groups.receive,b.to,$),Pt=t.clips[Rt];let St=null,Jt=1/0,ae=!1;for(let ce=D+1;ce<J.length;ce++){const Ut=J[ce];(Ut.type==="pass"?Ut.from:Ut.player)===b.to&&Jt===1/0&&(Jt=Ut.t);const Ft=ht[ce];if(!(!Ft||Ft.actor!==b.to)){Ft.t-$<=Ts&&(St=Ft.target,ae=(Ut.type==="pass"||Ut.type==="shoot")&&!!Ut.firstTime);break}}if(ae&&St){const ce=j(b.to,D,$),Ut=Wn(ce.atArrival,ze(ce.atArrival,St));a.push({from:k,to:Ut,t0:At,duration:xt,style:b.flightStyle==="lofted"?"lofted":b.flightStyle==="clipped"?"clipped":"ground",...b.loft!==void 0?{loft:b.loft}:{},...te?{fromHeight:te}:{}}),M({player:b.to,at:[...r[z]],t0:b.t,lock:[$-yn,$+yn]}),R[b.to]={at:$,from:Ut},yt($,((jt=J[D+1])==null?void 0:jt.t)??i.duration,Ut)}else{const ce=nE(tt,k,St);let Ut=b.t;{const ee=j(b.to,D,$),ie=ee.expected,xe=Math.max(b.t,ee.busyUntil),Ge=Math.max(ee.afterT,b.t),xn=ee.blocked;Ut=xe;const me=Math.hypot(ce.contact[0]-ie[0],ce.contact[1]-ie[1]);if(me>kS)if(xn)console.warn(`[engine3d] receive for ${b.to}: the ball lands ${me.toFixed(2)}m away at t=${$.toFixed(2)}s, but their authored ${xn} is in the way — no adjustment step synthesized (the standing stretch stays); fix the authoring`);else{const Oe=Ye([ce.contact[0]-ie[0],ce.contact[1]-ie[1]]),qe=[ce.contact[0]-Ne*Oe[0],ce.contact[1]-Ne*Oe[1]],ke=t.groups.walk,Ke=ke!=null&&ke.length?t.clips[ke[0]].speed??Cn:Cn,vn={from:ie,to:qe,t0:0,cruise:Ke,accel:Dn},ln=$-Ih-Ie(vn);ln<xe-1e-9?console.warn(`[engine3d] receive adjustment for ${b.to}: the ${(me-Ne).toFixed(2)}m walk to the contact point would need to start at t=${ln.toFixed(2)}s but they're busy until t=${xe.toFixed(2)}s — skipped (the standing stretch stays)`):(vn.t0=ln,Ut=$-Ih,X.push({player:b.to,afterT:Ge,move:vn,faceBall:[...k],faceSettle:[...ce.faceAt],arrival:$}))}}const Yt=Pt.ballContact??0,Ft=Math.min(Yt,Math.max(GS,Math.min(BS,zS*xt,$-(Ut+Vo)))),Ae=$-Ft;Ae<0&&console.warn(`[engine3d] receive cue for ${b.to} wants t0=${Ae.toFixed(2)}s; the player clamps it to 0, so its contact frame will miss ball arrival — schedule the pass later or shorten the flight`),c.push({player:b.to,clip:Rt,t0:Ae,...Yt>Ft?{offset:Yt-Ft}:{}}),a.push({from:k,to:ce.contact,t0:At,duration:xt,style:E==="throw"||b.flightStyle==="lofted"?"lofted":E==="kick"||b.flightStyle==="clipped"?"clipped":"ground",...E==="throw"?{loft:Math.max(kt?tc:1.5,b.loft??0)}:E==="kick"?{loft:Math.max(3,b.loft??0)}:b.loft!==void 0?{loft:b.loft}:{},...te?{fromHeight:te}:{},...Xt(ce.contact)??{}}),a.push({from:ce.contact,to:ce.set,t0:$,duration:Qn,style:"ground"}),M({player:b.to,at:[...r[z]],t0:b.t,lock:[$-yn,$+yn]}),H({player:b.to,at:[...ce.faceAt],t0:$},Jt),p.push({t:$,player:b.to}),y[b.to]=$+Qn,l.push({player:b.to,at:$+Qn,carry:ce.set}),yt($+Qn,((Ht=J[D+1])==null?void 0:Ht.t)??i.duration,ce.set)}}else if(b.flightStyle==="ground"){const $=Math.hypot(tt[0]-k[0],tt[1]-k[1]),Rt=b.flight??(b.touch?Math.sqrt(2*$/gr):E==="throw"?Math.max(.4,$/st):$/qA);if(a.push({from:k,to:[...tt],t0:At,duration:Rt,style:b.touch?"push":E==="throw"?"lofted":E==="kick"?"clipped":"ground",...b.touch?{endFrac:0}:{},...E==="throw"?{loft:kt?tc:1.5}:E==="kick"?{loft:3}:{},...te?{fromHeight:te}:{},...Xt(tt)??{}}),b.deflect){const Pt=Math.hypot(b.deflect.to[0]-tt[0],b.deflect.to[1]-tt[1]);a.push({from:[...tt],to:[...b.deflect.to],t0:At+Rt,style:"ground",duration:pA($,Rt,Pt)})}}else{const $=Math.hypot(tt[0]-k[0],tt[1]-k[1]),Rt=b.flight??$/XA,Pt=Ye([tt[0]-k[0],tt[1]-k[1]]),St=[tt[0]+$h*Pt[0],tt[1]+$h*Pt[1]],Jt=At+Rt,ae=a.length;a.push({from:k,to:St,t0:At,duration:Rt,style:"shot",...te?{fromHeight:te}:{}}),a.push({from:St,to:St,t0:Jt,duration:jA,style:"drop"}),yt(((fe=J[D-1])==null?void 0:fe.t)??0,Gt,k);let ce=!1;for(const Ut of F){const Yt=si=>{const vi=j(Ut.id,D,si);if(vi.afterT>-1/0)return vi.atArrival;const Bn=_[Ut.id];return Bn&&si<Bn.t0+Ie(Bn)?En(Bn,si).pos:[...r[Ut.id]]},Ft=At+Ph(Math.max(Rt,Nh)),Ae=Lh(At,Rt,gn.dive.left.contact).t0,ee=b.type==="shoot"?b.deflect:void 0,ie=le||!!ee,xe=Yt(ie?Ft:Ae),Ge=[tt[0]-xe[0],tt[1]-xe[1]],xn=ze(xe,k),me=ie?FA(xe,xn,k,St,Ct):null;if(ee&&!me&&console.warn(`[engine3d] deflect on the shot at t=${b.t} is dropped: ${Ut.id} is ${Pp(xe,k,St).reach.toFixed(2)} m off the ball line at body scale ${Ct} (his reach is ${(Cp*Ct).toFixed(2)} m) — he cannot get a hand to it, so there is nothing to parry; move him or the shot`),!me){if(Math.hypot(Ge[0],Ge[1])>Rp*Ct)continue;const si=Op(xe,xn,St),vi=jS[si],Bn=t.clips[vi],{t0:ri,timeScale:os}=Lh(At,Rt,gn.dive[si].contact);if(M({player:Ut.id,at:[...k],t0:Math.max(Gt-hr,0,v[Ut.id]??0),...Bn?{lock:[Gt,ri+Bn.duration/os]}:{}}),Bn){c.push({player:Ut.id,clip:vi,t0:ri,...os>1?{timeScale:os}:{}});const Yn=Yt(ri),$s=NA(Yn,k,St,Ct),Pr=[$s[0]-Yn[0],$s[1]-Yn[1]],Lr=Math.hypot(Pr[0],Pr[1]),Rl=Math.min(Lr,ZS*Ct),Cl=Lr>1e-9?[Yn[0]+Pr[0]/Lr*Rl,Yn[1]+Pr[1]/Lr*Rl]:[...Yn],Tm=Math.min(QS,Math.max(JS,Jt-ri));d.push({player:Ut.id,from:Yn,to:Cl,t0:ri,duration:Tm}),x[Ut.id]={t0:ri,at:[...r[Ut.id]]},r[Ut.id]=[...Cl]}continue}if(ce)continue;ce=!0;const Oe=a[ae];a.splice(ae+1,1);let qe,ke=me.contact,Ke=Vn*Ct;if(me.kind==="dive"){Oe.duration=Math.max(Oe.duration,Nh),qe=At+Ph(Oe.duration);const si=At+Oe.duration,vi={player:Ut.id,from:[...xe],to:me.travelTo,t0:qe,duration:me.contactOffset};d.push(vi);const Bn=Lp(vi,si),ri=Math.min(1,(si-qe)/me.contactOffset),os=gn.dive[me.side],Yn=ri*os.reach*Ct,$s=Ye([me.contact[0]-xe[0],me.contact[1]-xe[1]]);ke=[Bn[0]+Yn*$s[0],Bn[1]+Yn*$s[1]],Ke=(Vn+(os.hand-Vn)*ri)*Ct,x[Ut.id]={t0:qe,at:[...r[Ut.id]]},r[Ut.id]=[...me.travelTo]}else qe=Math.max(Gt,At+Oe.duration-me.contactOffset);const vn=At+Oe.duration;Oe.to=ke,Oe.toHeight=Ke,c.push({player:Ut.id,clip:me.clip,t0:qe,contact:me.contactOffset});const ln=qe+me.clipDuration;if(M({player:Ut.id,at:[...k],t0:Math.max(Gt-hr,0,v[Ut.id]??0),lock:[Gt,ln]}),ee){a.push(Oh(ke,Ke,ee,vn,Ct)),y[Ut.id]=vn,It[Ut.id]=ln+ws;continue}p.push({t:vn,player:Ut.id});const ca=rc(r[Ut.id],k,ke);me.kind==="catch"?l.push({player:Ut.id,at:vn,carry:ke,hand:{height:Vn*Ct,follow:!0,bone:ca}}):(l.push({player:Ut.id,at:vn,carry:ke,hand:{height:go*Ct,from:Ke,rise:oA,follow:!0,bone:ca}}),l.push({player:Ut.id,at:ln,carry:ke,hand:{height:Vn*Ct,from:go*Ct,rise:Qa,follow:!0,bone:ca}})),y[Ut.id]=vn,It[Ut.id]=ln+ws}}if(b.type==="pass"&&!E&&V){const $=t.groups.walk,Rt=$!=null&&$.length?t.clips[$[0]].speed??Cn:Cn,Pt=[r[z][0]+Tr*Math.sin(q),r[z][1]+Tr*Math.cos(q)],St=_[z],Jt=St?St.t0+Ie(St):-1/0;let ae=1/0;for(let ee=D+1;ee<J.length;ee++){const ie=J[ee];if((ie.type==="pass"?ie.from:ie.player)===z){ae=ie.t;break}}const ce={from:[...r[z]],to:Pt,t0:Ds(t,V),cruise:Rt,accel:Dn},Ut=ce.t0+Ie(ce)+Ri<=ae;let Yt=null,Ft=null;if(St&&m.has(St)&&At>=Jt&&At-Jt<=uT&&vl(o[z],At)<qp){const ee=fT(),ie={...St,to:[...St.to],cruise:Math.max(St.cruise,ee),endSpeed:ee};ie.t0=At-Ie(ie),ie.t0>=St.t0-1e-9&&Xs(ie).peak>=ee-1e-9&&(Yt=ie,Ft=Ut?{from:[...r[z]],to:Pt,t0:At,cruise:ee,accel:jo,startSpeed:ee}:_T(r[z],q,ee,ae-At,At,xe=>ut(xe)&&ne(xe)))}if(Yt&&St){for(const ee of g[z]??[]){const ie=c.indexOf(ee);ie>=0&&c.splice(ie,1)}Object.assign(St,Yt),g[z]=Q(St,z)}const Ae=Ft??(Ut?ce:null);Ae&&((o[z]??(o[z]=[])).push(Ae),_[z]=Ae,g[z]=Q(Ae,z),r[z]=[...Ae.to])}p.push({t:At,player:null})}const Y=Kt.get(G);Y!==void 0&&Y<b.t&&Kt.delete(G)}B(1/0),p.sort((D,b)=>D.t-b.t),c.sort((D,b)=>D.t0-b.t0),JE(c,o,t);const dt=lT(c,o,t);return{moves:o,flights:a,anims:c,faces:u,departures:h,arrivals:l,dives:d,turns:f,bounces:dt,ballSwaps:Dt,attachTo(D){let b=null;for(const G of p)G.t<=D&&(b=G.player);return b}}}const xT=/^(spine00[1-6]|breast[LR]|shoulder[LR]|upper_arm[LR]|forearm[LR]|hand[LR]|Fingers[LR]|Index[LR]|Thumb[LR])/,fd=new Map,pd=30;function vT(i,t=0){const e=`${i.uuid}@${t}`;let n=fd.get(e);return n||(n=i.clone(),n.name=`${i.name}__upper`,n.tracks=n.tracks.filter(s=>xT.test(Fe.parseTrackName(s.name).nodeName??"")),Dg.makeClipAdditive(n,t*pd,n,pd),fd.set(e,n)),n}function yT(i,t){if(i<0||i>t)return 0;const e=Math.min(1,i/Gp),n=Math.min(1,(t-i)/zp);return ZE*Math.max(0,Math.min(e,n))}function MT(i,t,e,n=[]){const s=p=>Ds(i,p),r=(p,_)=>Xp(t,i,p,_);function o(p,_){let g=0;for(const m of t){if(m.player!==p)continue;const v=s(m);v<=_&&v>g&&(g=v)}return g}const a=new Map,c=new Map,u=new Map,h=new Map,l=kp(i),d=new Map;for(const p of l)for(const _ of i.groups[p.gait]??[])d.set(_,p.gait);function f(p,_,g,m,v){const y=r(p,g),x=y!=null&&y.additive?y:null,w=x?bl(l,v):null,M=w?Mn(i.groups[w.gait],p,x.t0):null,T=x?null:y,I=T??(M?x:null),S=M??(T==null?void 0:T.clip)??KE(tE(i,e.get(p)),p,qE(p,g-o(p,g))),A=a.get(p);if(GE(A,S,T)){const it=i.clips[S],ct=_.mixer.clipAction(_.clips.get(S));ct.reset(),ct.loop=it.loop?2201:2200,ct.clampWhenFinished=!0,T!=null&&T.offset&&(ct.time=T.offset),A&&A.action!==ct&&(A.action.fadeOut(EE(i,A.clip,S)),ct.fadeIn(Hp(i,S,A.clip))),ct.play(),a.set(p,{clip:S,offset:T==null?void 0:T.offset,action:ct})}const C=a.get(p).action,U=!!I&&I.timeScale===void 0&&i.clips[S].category==="locomotion",P=U?d.get(S):void 0,O=U?P?xE(l,v,P):{timeScale:_E(v,i.clips[S].speed??Cn),partner:null,weight:0}:null,Z=O!=null&&O.partner&&I?Mn(i.groups[O.partner],p,I.t0):null,H=c.get(p);if(H&&H.clip!==Z&&(H.clip!==S&&(H.action.weight=0,H.action.stop()),c.delete(p)),I)if((T==null?void 0:T.timeScale)!==void 0)C.timeScale=T.timeScale,C.weight=1;else if(O){if(C.timeScale=O.timeScale,C.weight=1-O.weight,Z){let it=c.get(p);if(!it){const nt=_.mixer.clipAction(_.clips.get(Z));nt.reset(),nt.loop=2201,nt.play(),it={clip:Z,action:nt},c.set(p,it)}it.action.weight=O.weight,it.action.timeScale=O.timeScale;const ct=i.clips[S].duration,Dt=i.clips[Z].duration;ct>0&&(it.action.time=C.time/ct%1*Dt)}}else C.timeScale=1,C.weight=1;else{C.weight=1,C.timeScale=ud(p);const it=i.clips[S].duration;C.time=((ld(p,it)+g*C.timeScale)%it+it)%it}const X=cT(n,p,g),B=h.get(p),j=X>0?_.clips.get(sT):void 0;if(j){let it=B;it||(it=_.mixer.clipAction(j),it.reset(),it.loop=2201,it.timeScale=0,it.play(),h.set(p,it));const ct=j.duration;it.time=((ld(p,ct)+g*ud(p))%ct+ct)%ct,it.weight=X,C.weight*=1-X}else B&&(B.weight=0,B.stop(),B.enabled=!1,h.delete(p));const Q=u.get(p);if(x){const it=x.offset??0,ct=Math.max(0,i.clips[x.clip].duration-it),Dt=yT(g-x.t0,ct);let nt=Q;if(!nt||nt.clip!==x.clip||nt.offset!==it){nt&&(nt.action.weight=0,nt.action.stop(),nt.action.enabled=!1);const ot=_.mixer.clipAction(vT(_.clips.get(x.clip),it));ot.reset(),ot.loop=2200,ot.clampWhenFinished=!0,ot.timeScale=0,ot.play(),u.set(p,nt={clip:x.clip,offset:it,action:ot})}nt.action.time=Math.min(i.clips[x.clip].duration,it+Math.max(0,g-x.t0)),nt.action.weight=Dt}else Q&&(Q.action.weight=0,Q.action.stop(),Q.action.enabled=!1,u.delete(p));_.mixer.update(m)}return{applyAnim:f,cueAt:r}}class ST{constructor(t,e){Pe(this,"_t",0);Pe(this,"_playing",!1);Pe(this,"speed",1);Pe(this,"loopCbs",[]);Pe(this,"endCbs",[]);Pe(this,"seekCbs",[]);if(this.duration=t,this.loop=e,!Number.isFinite(t)||t<=0)throw new Error(`Timeline: duration must be a finite number > 0 (got ${t})`)}get t(){return this._t}get playing(){return this._playing}play(){this._playing=!0}pause(){this._playing=!1}setSpeed(t){this.speed=t}seek(t){this._t=Math.min(Math.max(t,0),this.duration),this.seekCbs.forEach(e=>e())}onLoop(t){this.loopCbs.push(t)}onSeek(t){this.seekCbs.push(t)}onEnd(t){this.endCbs.push(t)}advance(t){if(this._playing)for(this._t+=t*this.speed;this._t>=this.duration;){if(!this.loop){this._t=this.duration,this._playing=!1,this.endCbs.forEach(e=>e());return}this._t-=this.duration,this.loopCbs.forEach(e=>e())}}}function AT(i,t){const e=new Map(t),n=new Map,s=new Map;function r(o,a,c,u,h,l,d){const f=e.get(o)??0,p=Wp(i,o,a);let _;if(p){const y=s.get(o);y&&y.span===p?_=y.from:(_=f,s.set(o,{span:p,from:_}))}else s.delete(o);const g=p?TE(i,o,a,_):null,m=g?wE(pi[p.clip],u):d?wS:Sp(u),v=g?Ah(f,g.heading,c,m):l?f:Ah(f,h,c,m);return n.set(o,c>0?(v-f)/c:0),e.set(o,v),{h:v,clipYaw:(g==null?void 0:g.clipYaw)??0}}return{heading:e,rateOf:n,step:r}}const ET=.2,TT=.5,wT=.06,RT=.25,md=.15,CT=.25,IT=.2;function PT(i,t=1){let e=-1;for(let n=0;n<i.length;n++)i[n].speed>=ET*t||(e<0||i[n].y<i[e].y)&&(e=n);return e}function LT(i,t,e=1){return i.speed>TT*e||i.y>t+wT*e}function DT(i,t,e=1){const n=Math.hypot(i,t),s=RT*e;return n<=s||n===0?[i,t]:[i/n*s,t/n*s]}function FT(i,t){for(const e of i??[]){const n=e.t0+Ie(e);if(t>n-CT&&t<=n)return!0}return!1}const NT=new Set(["turn","transition","receive","pass","idle"]);function UT(i,t,e){return e||i===null?!0:NT.has(t??"")}function OT(){const i=new Map;function t(){return{foot:-1,anchorX:0,anchorZ:0,plantY:0,corrX:0,corrZ:0,outX:0,outZ:0,outAt:-1/0,rootV:0,prev:[],prevRoot:[0,0],prevT:-1/0}}function e(s,r){const o=(r-s.outAt)/md;if(o>=1)return[0,0];const a=1-o*o*(3-2*o);return[s.outX*a,s.outZ*a]}function n(s,r,o,a,c,u,h){let l=i.get(s);if(l||i.set(s,l=t()),c<=0&&a===l.prevT){const[x,w]=e(l,a);return[l.corrX+x,l.corrZ+w]}if(c<=0||a<l.prevT||a-l.prevT>.5)return l.foot=-1,l.corrX=0,l.corrZ=0,l.outX=0,l.outZ=0,l.outAt=-1/0,l.prevT=a,l.prev=r.map(x=>[...x]),l.prevRoot=[o[0],o[1]],[0,0];const d=o[0]-l.prevRoot[0],f=o[1]-l.prevRoot[1],p=l.rootV=Math.hypot(d,f)/c,_=r.map((x,w)=>{const M=l.prev[w],T=M?Math.hypot(x[0]-M[0]-d,x[2]-M[2]-f)/c:1/0;return{x:x[0],y:x[1],z:x[2],speed:T}}),g=x=>{l.foot<0||(l.foot=-1,l.outX=l.corrX,l.outZ=l.corrZ,l.outAt=a,l.corrX=0,l.corrZ=0)};if(!u||p>=IT)g();else if(l.foot>=0&&LT(_[l.foot],l.plantY,h)&&g(),l.foot<0){const x=PT(_,h);x>=0&&((l.corrX||l.corrZ)&&(l.outX=l.corrX,l.outZ=l.corrZ,l.outAt=a,l.corrX=0,l.corrZ=0),l.foot=x,l.plantY=_[x].y,l.anchorX=r[x][0],l.anchorZ=r[x][2])}else{const[x,w]=DT(l.anchorX-r[l.foot][0],l.anchorZ-r[l.foot][2],h);l.corrX=x,l.corrZ=w}const[m,v]=e(l,a);(a-l.outAt)/md>=1&&(l.outX=0,l.outZ=0);const y=[l.corrX+m,l.corrZ+v];return l.prev=r.map(x=>[...x]),l.prevRoot=[o[0],o[1]],l.prevT=a,y}return{step:n,foot:s=>{var r;return((r=i.get(s))==null?void 0:r.foot)??-1},rootSpeed:s=>{var r;return((r=i.get(s))==null?void 0:r.rootV)??0},reset:()=>i.clear()}}const yl=Math.PI/180,Zp=2*yl,Jp=4*yl,kT=8*yl,BT=Jp/Zp,gd=.12,GT=.6,zT=.08;function HT(i){return i<BT?0:Math.min(kT,Math.max(Jp,Zp*i))}function VT(i,t){const e=Math.hypot(i[0],i[1]),n=HT(e);if(n===0)return{pitch:0,roll:0};const s=i[0]*Math.sin(t)+i[1]*Math.cos(t),r=i[0]*Math.cos(t)-i[1]*Math.sin(t);return{pitch:n*s/e,roll:-n*r/e}}function cc(i,t,e,n){return e<=0?i:i+(t-i)*(1-Math.exp(-e/n))}function WT(){const i=new Map,t=new Map,e=new Map;return{tilt(n,s,r,o,a){const c=VT(s,r),u=cc(i.get(n)??0,c.pitch*o,a,gd),h=cc(t.get(n)??0,c.roll*o,a,gd);return i.set(n,u),t.set(n,h),{pitch:u,roll:h}},shoulder(n,s,r){const o=ea(s)*GT,a=cc(e.get(n)??0,o,r,zT);return e.set(n,a),a},reset(){i.clear(),t.clear(),e.clear()}}}const lc=new an,_d=new an,bd=new an,Xo=new an,jT=new On;function XT(i,t){lc.identity();for(let e=i.parent;e&&e!==t;e=e.parent)lc.premultiply(e.quaternion);return lc}const wr=new WeakMap;function Qp(i){const t=wr.get(i);t&&i.quaternion.equals(t.left)&&i.quaternion.copy(t.base)}function tm(i,t){const e=wr.get(i);e?(e.base.copy(t),e.left.copy(i.quaternion)):wr.set(i,{base:t.clone(),left:i.quaternion.clone()})}function xd(i,t,e,n,s){if(Qp(t),!e&&!n&&!s){wr.delete(t);return}Xo.copy(t.quaternion);const r=XT(t,i);_d.setFromEuler(jT.set(e,n,s,"YXZ")),bd.copy(r).invert().multiply(_d).multiply(r),t.quaternion.premultiply(bd),tm(t,Xo)}function qT(i,t){if(Qp(i),!t){wr.delete(i);return}Xo.copy(i.quaternion),i.rotation.y+=t,tm(i,Xo)}function yr(i){const t=Math.min(Math.max(i,0),1);return t*t*(3-2*t)}function KT(i){var r;const t=[i.root[0]+Ne*Math.sin(i.heading),i.root[1]+Ne*Math.cos(i.heading)];let e=t,n=null;for(const o of i.arrivals)o.player===i.player&&i.t>=o.at&&(!n||o.at>=n.at)&&(n=o);if(n)if((r=n.hand)!=null&&r.follow){const o=n.hand.rise?yr((i.t-n.at)/n.hand.rise):1;e=[n.carry[0]+(t[0]-n.carry[0])*o,n.carry[1]+(t[1]-n.carry[1])*o]}else e=n.carry;const s=i.departures.find(o=>o.player===i.player&&i.t>=o.windowStart&&i.t<=o.contact);if(s){const o=[i.root[0]+Ne*Math.sin(s.heading),i.root[1]+Ne*Math.cos(s.heading)],a=yr((i.t-s.windowStart)/Math.max(s.contact-s.windowStart,1e-6));return[e[0]+(o[0]-e[0])*a,e[1]+(o[1]-e[1])*a]}return e}function $T(i){let t=null;for(const a of i.arrivals)a.player===i.player&&i.t>=a.at&&(!t||a.at>=t.at)&&(t=a);if(!(t!=null&&t.hand)){const a=i.departures.find(c=>c.player===i.player&&i.t>=c.windowStart&&i.t<=c.contact);return(a==null?void 0:a.toHeight)===void 0?0:a.toHeight*yr((i.t-a.windowStart)/Math.max(a.contact-a.windowStart,1e-6))}const e=t.hand,n=e.from??e.height,s=e.rise?yr((i.t-t.at)/e.rise):1;let r=n+(e.height-n)*s;const o=i.departures.find(a=>a.player===i.player&&i.t>=a.windowStart&&i.t<=a.contact);if(o&&o.toHeight!==void 0){const a=yr((i.t-o.windowStart)/Math.max(o.contact-o.windowStart,1e-6));r+=(o.toHeight-r)*a}return r}function No(i){let t=null,e=null;for(const n of i.flights)i.t>=n.t0&&(t=is(n,i.t),e=n);if(t&&!t.done)return{pos:t.pos,height:t.height,apex:US(e),speed:Ap(e,i.t)};if(i.holderId&&i.holderRoot){const n={t:i.t,player:i.holderId,root:i.holderRoot,heading:i.holderHeading,departures:i.departures,arrivals:i.arrivals};return{pos:KT(n),height:$T(n),apex:0,speed:0}}return t?{pos:t.pos,height:0,apex:0,speed:0}:{pos:i.ballStart,height:0,apex:0,speed:0}}const YT=1.2,ZT=40;function em(i,t,e){let n=i.starts[t]??[0,0];for(const s of i.moves[t]??[])e>=s.t0&&(n=En(s,e).pos);return Dp(i.dives,i.moves[t],t,e)??n}function vd(i,t){const e=i.attachTo(t),n=No({t,holderId:e,holderRoot:e?em(i,e,t):null,holderHeading:e?i.headingAt(e):0,ballStart:i.ballStart,flights:i.flights,departures:i.departures,arrivals:i.arrivals});return{pos:n.pos,height:n.height}}const nm=.55,JT=.3,yd=.6,QT=.6,t1=.4,sa=i=>Math.min(Math.max(i,0),1);function e1(i,t){if(t<=i.t0)return 0;if(t>=i.t0+Ie(i))return 1;const e=Math.hypot(i.to[0]-i.from[0],i.to[1]-i.from[1]);if(e<=0)return 1;const n=En(i,t).pos;return Math.hypot(n[0]-i.from[0],n[1]-i.from[1])/e}function n1(i,t,e,n,s,r,o){const a=Math.hypot(t[0]-i[0],t[1]-i[1]);if(a<1e-6)return[];const c=(t[0]-i[0])/a,u=(t[1]-i[1])/a,h=-u,l=c,d=a-s-.1,f=_=>{const g=e?e*Math.sin(2*Math.PI*_/n):0;return[i[0]+c*_+h*g,i[1]+u*_+l*g]},p=[];for(let _=.15;_+r*.5<=d;_+=r+o){const g=Math.min(_+r,d),[m,v]=f(_),[y,x]=f(g);p.push({ax:m,ay:v,bx:y,by:x,k:(_+g)/2/a})}return p}function Md(i,t,e=1){const n=Math.hypot(t[0]-i[0],t[1]-i[1])||1,s=(t[0]-i[0])/n,r=(t[1]-i[1])/n,o=nm*e,a=JT*e,c=t[0]-o*s,u=t[1]-o*r;return[[t[0],t[1]],[c-r*a,u+s*a],[c+r*a,u-s*a]]}const Sd=1.6,So=2.2,i1=5,s1=5,r1=6,Ad=14,o1=4,a1=20,c1="#E8ECEF",l1="#8D949B",u1=1.2,h1=3,d1=.4;function Ed(i,t,e,n){const s=Math.hypot(e[0]-t[0],e[1]-t[1]);if(s<1e-6)return null;const r=Math.min(r1*n,s*.5),o=i==="dribble",a=i==="pass"?a1*n:o?Ad*n/8:i1*n;return{dashes:n1(t,e,o?o1*n:0,Ad*n,r,a,i==="move"?s1*n:0),headScale:r/nm}}function f1(i,t){if(i.style!=="shot"||!(i.toHeight!==void 0&&i.toHeight>0))return!1;const e=i.t0+(i.duration??0);return t.some(n=>n.hand!==void 0&&Math.abs(n.at-e)<1e-6&&Math.hypot(n.carry[0]-i.to[0],n.carry[1]-i.to[1])<1e-6)}function p1(i,t,e,n=0){const s=t[1]-i[1];if(Math.abs(s)<1e-6)return null;let r=null,o=0,a=1/0;for(const h of e){const l=(h.y-i[1])/s;!(l>1)||!isFinite(l)||l-1<a&&(a=l-1,o=l,r=h)}if(!r)return null;const c=Math.max(r.halfW-n,0),u=i[0]+(t[0]-i[0])*o;return[Math.min(Math.max(u,r.x-c),r.x+c),r.y]}function ra(i){return i.style==="push"?!1:!!i.pop||Math.hypot(i.to[0]-i.from[0],i.to[1]-i.from[1])>=u1}function m1(i,t,e){const n=i.filter(r=>r.team!=="coach");if(!n.length)return;if(new Set(n.map(r=>r.team)).size===1)return n[0].team;const s=n.find(r=>r.id===e);return s?s.team:n.reduce((r,o)=>{const a=Math.hypot(o.start[0]-t[0],o.start[1]-t[1]);return a<r.d?{team:o.team,d:a}:r},{d:1/0}).team}const Td=.012,g1=.14,_1=.38,wd=.15,im=.3,b1="#bfe333";function x1(i){const t=1-2*im,e=Math.abs(i);return e<=t?1:e>=1?0:(1-e)/(1-t)}const Ao=1.5,v1=.3,y1=24;function Rd(i){return wd+(_1-wd)*sa(i)}function kc(i,t,e){if(i<t.t0)return 0;const n=t.t0+t.duration,s=i-n;if(s<=0)return 1;const r=s>=Ao?0:1-s/Ao;if(e===void 0)return r;const o=Math.max(e,n);if(i<o)return r;const a=1-Math.min(o-n,Ao)/Ao;return Math.min(r,a*Math.max(1-(i-o)/v1,0))}function Bc(i,t){for(let e=t+1;e<i.length;e++)if(ra(i[e]))return i[e].t0}function M1(i,t){const e=[];for(let n=0;n<i.length;n++)ra(i[n])&&kc(t,i[n],Bc(i,n))>0&&e.push(n);return e.length>2?e.slice(-2):e}function S1(i,t){const e=Math.hypot(i.to[0]-i.from[0],i.to[1]-i.from[1]);if(!(e>0))return 1;const n=is(i,t).pos;return sa(Math.hypot(n[0]-i.from[0],n[1]-i.from[1])/e)}function A1(i,t,e){const n=i[t],s=n.t0+n.duration;if(e<=s){const a=is(n,e).pos;return[a[0],a[1]]}const r=i[t+1];if(!r||ra(r)||Math.abs(r.t0-s)>1e-6||Math.hypot(r.from[0]-n.to[0],r.from[1]-n.to[1])>1e-6)return[...n.to];if(e>=r.t0+r.duration)return[...r.to];const o=is(r,e).pos;return[o[0],o[1]]}function Cd(i,t){const e=sa((i-t)/.06);return yd+(1-yd)*e}function E1(i,t){return sa((i-(t-QT))/t1)}const T1=.35;function w1(i,t,e){const n=i.map(s=>({player:s.player,t0:s.windowStart,t1:s.contact+T1}));for(const s of t){const r=e.clips[s.clip];if((r==null?void 0:r.category)!=="receive")continue;const o=Math.max(s.t0,0);n.push({player:s.player,t0:o,t1:o+(r.ballContact??0)+Qn})}return n.sort((s,r)=>s.t0-r.t0)}function R1(i,t,e){let n=null;for(const s of i)e>=s.t0&&e<=s.t1&&(n=s.player);return n??t(e)}const Id=1e-6;function Gc(i,t,e){return Ip(i,t,e)>0}function C1(i,t,e){for(const s of i.flights){if(!(s.fromHeight!==void 0&&s.fromHeight>0)||e<s.t0||e>=s.t0+s.duration)continue;const r=i.attachTo(s.t0-Id);if(r&&Gc(i.arrivals,r,s.t0-Id))return{kind:"halo"}}const n=R1(t,i.attachTo,e);if(!n){if(i.staticBall)return{kind:"none"};const s=i.flights.some(o=>e>=o.t0&&e<o.t0+o.duration),r=i.arrivals.some(o=>o.at>e);return s||!r?{kind:"none"}:{kind:"free"}}return i.attachTo(e)===n&&Gc(i.arrivals,n,e)?{kind:"halo"}:i.attachTo(e)===n?{kind:"ring",player:n}:{kind:"none"}}function I1(i,t){const e=new URLSearchParams(i.startsWith("?")?i.slice(1):i),n=e.get("runpaths");return{trail:e.get("trail")!=="off",highlight:e.get("highlight")!=="off",runPaths:n==="auto"||n==="authored"||n==="off"?n:t??"auto",zones:e.get("zones")!=="off"}}const P1=.85;function L1(i,t){return i>0?{draw:t>=i*P1,maxWidth:Math.min(i,t)}:{draw:!1,maxWidth:0}}const D1=.15,F1=1e-6;function Pd(i){const t=Math.min(Math.max(i,0),1);return t*t*(3-2*t)}function N1(i,t,e){var r;const n=i.filter(o=>o.player===t).sort((o,a)=>o.at-a.at);let s=e.at;for(let o=n.indexOf(e)-1;o>=0&&((r=n[o].hand)==null?void 0:r.bone)===e.hand.bone;o--)s=n[o].at;return s}function sm(i,t,e,n){var o;const s=Ji(i,e,n);if(!((o=s==null?void 0:s.hand)!=null&&o.bone))return 0;let r=Pd((n-N1(i,e,s))/D1);for(const a of t)a.player!==e||n<a.windowStart||n>a.contact||(r*=1-Pd((n-a.windowStart)/Math.max(a.contact-a.windowStart,F1)));return r}function U1(i,t,e){var s,r;const n=(r=(s=Ji(i,t,e))==null?void 0:s.hand)==null?void 0:r.bone;return n==="L"?0:n==="R"?1:-1}function O1(i,t,e,n){return Gc(i,e,n)||sm(i,t,e,n)>0}const k1=25;function B1(i,t){return i.style==="drop"&&(t==null?void 0:t.style)==="shot"&&i.fromHeight===void 0&&i.from[0]===i.to[0]&&i.from[1]===i.to[1]}function G1(i){const t=[];for(let e=0;e<i.length;e++){const n=i[e];if(B1(n,i[e-1])){t.push({t:n.t0,power:0,shot:!1,net:!0});continue}if(n.style==="drop"||n.style==="headed")continue;const s=Ap(n,n.t0);s>0&&t.push({t:n.t0,power:Math.min(1,s/k1),shot:n.style==="shot",net:!1})}return t.sort((e,n)=>e.t-n.t)}const z1=.02;function H1(i,t,e,n,s,r,o,a=!1){if(!a)for(let c=0;c<t.length;c++){const u=t[c];e<u.t&&n>=u.t&&(u.net?i.net():i.kick(u.power,u.shot))}i.roll(s&&r<=z1,o)}function V1(i){let t=!1;return i.onSeek(()=>{t=!0}),(e,n,s,r,o,a,c)=>{H1(e,n,s,r,o,a,c,t),t=!1}}const Ld=new cn,Eo=new N;class rm extends Yg{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";const t=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],e=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],n=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(n),this.setAttribute("position",new We(t,3)),this.setAttribute("uv",new We(e,2))}applyMatrix4(t){const e=this.attributes.instanceStart,n=this.attributes.instanceEnd;return e!==void 0&&(e.applyMatrix4(t),n.applyMatrix4(t),e.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(t){let e;t instanceof Float32Array?e=t:Array.isArray(t)&&(e=new Float32Array(t));const n=new Tc(e,6,1);return this.setAttribute("instanceStart",new Xn(n,3,0)),this.setAttribute("instanceEnd",new Xn(n,3,3)),this.instanceCount=this.attributes.instanceStart.count,this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(t){let e;t instanceof Float32Array?e=t:Array.isArray(t)&&(e=new Float32Array(t));const n=new Tc(e,6,1);return this.setAttribute("instanceColorStart",new Xn(n,3,0)),this.setAttribute("instanceColorEnd",new Xn(n,3,3)),this}fromWireframeGeometry(t){return this.setPositions(t.attributes.position.array),this}fromEdgesGeometry(t){return this.setPositions(t.attributes.position.array),this}fromMesh(t){return this.fromWireframeGeometry(new Rg(t.geometry)),this}fromLineSegments(t){const e=t.geometry;return this.setPositions(e.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new cn);const t=this.attributes.instanceStart,e=this.attributes.instanceEnd;t!==void 0&&e!==void 0&&(this.boundingBox.setFromBufferAttribute(t),Ld.setFromBufferAttribute(e),this.boundingBox.union(Ld))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new kn),this.boundingBox===null&&this.computeBoundingBox();const t=this.attributes.instanceStart,e=this.attributes.instanceEnd;if(t!==void 0&&e!==void 0){const n=this.boundingSphere.center;this.boundingBox.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Eo.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Eo)),Eo.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Eo));this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}applyMatrix(t){return console.warn("THREE.LineSegmentsGeometry: applyMatrix() has been renamed to applyMatrix4()."),this.applyMatrix4(t)}}zt.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new oe(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};An.line={uniforms:qc.merge([zt.common,zt.fog,zt.line]),vertexShader:`
		#include <common>
		#include <color_pars_vertex>
		#include <fog_pars_vertex>
		#include <logdepthbuf_pars_vertex>
		#include <clipping_planes_pars_vertex>

		uniform float linewidth;
		uniform vec2 resolution;

		attribute vec3 instanceStart;
		attribute vec3 instanceEnd;

		attribute vec3 instanceColorStart;
		attribute vec3 instanceColorEnd;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#ifdef USE_DASH

			uniform float dashScale;
			attribute float instanceDistanceStart;
			attribute float instanceDistanceEnd;
			varying float vLineDistance;

		#endif

		void trimSegment( const in vec4 start, inout vec4 end ) {

			// trim end segment so it terminates between the camera plane and the near plane

			// conservative estimate of the near plane
			float a = projectionMatrix[ 2 ][ 2 ]; // 3nd entry in 3th column
			float b = projectionMatrix[ 3 ][ 2 ]; // 3nd entry in 4th column
			float nearEstimate = - 0.5 * b / a;

			float alpha = ( nearEstimate - start.z ) / ( end.z - start.z );

			end.xyz = mix( start.xyz, end.xyz, alpha );

		}

		void main() {

			#ifdef USE_COLOR

				vColor.xyz = ( position.y < 0.5 ) ? instanceColorStart : instanceColorEnd;

			#endif

			#ifdef USE_DASH

				vLineDistance = ( position.y < 0.5 ) ? dashScale * instanceDistanceStart : dashScale * instanceDistanceEnd;
				vUv = uv;

			#endif

			float aspect = resolution.x / resolution.y;

			// camera space
			vec4 start = modelViewMatrix * vec4( instanceStart, 1.0 );
			vec4 end = modelViewMatrix * vec4( instanceEnd, 1.0 );

			#ifdef WORLD_UNITS

				worldStart = start.xyz;
				worldEnd = end.xyz;

			#else

				vUv = uv;

			#endif

			// special case for perspective projection, and segments that terminate either in, or behind, the camera plane
			// clearly the gpu firmware has a way of addressing this issue when projecting into ndc space
			// but we need to perform ndc-space calculations in the shader, so we must address this issue directly
			// perhaps there is a more elegant solution -- WestLangley

			bool perspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 ); // 4th entry in the 3rd column

			if ( perspective ) {

				if ( start.z < 0.0 && end.z >= 0.0 ) {

					trimSegment( start, end );

				} else if ( end.z < 0.0 && start.z >= 0.0 ) {

					trimSegment( end, start );

				}

			}

			// clip space
			vec4 clipStart = projectionMatrix * start;
			vec4 clipEnd = projectionMatrix * end;

			// ndc space
			vec3 ndcStart = clipStart.xyz / clipStart.w;
			vec3 ndcEnd = clipEnd.xyz / clipEnd.w;

			// direction
			vec2 dir = ndcEnd.xy - ndcStart.xy;

			// account for clip-space aspect ratio
			dir.x *= aspect;
			dir = normalize( dir );

			#ifdef WORLD_UNITS

				vec3 worldDir = normalize( end.xyz - start.xyz );
				vec3 tmpFwd = normalize( mix( start.xyz, end.xyz, 0.5 ) );
				vec3 worldUp = normalize( cross( worldDir, tmpFwd ) );
				vec3 worldFwd = cross( worldDir, worldUp );
				worldPos = position.y < 0.5 ? start: end;

				// height offset
				float hw = linewidth * 0.5;
				worldPos.xyz += position.x < 0.0 ? hw * worldUp : - hw * worldUp;

				// don't extend the line if we're rendering dashes because we
				// won't be rendering the endcaps
				#ifndef USE_DASH

					// cap extension
					worldPos.xyz += position.y < 0.5 ? - hw * worldDir : hw * worldDir;

					// add width to the box
					worldPos.xyz += worldFwd * hw;

					// endcaps
					if ( position.y > 1.0 || position.y < 0.0 ) {

						worldPos.xyz -= worldFwd * 2.0 * hw;

					}

				#endif

				// project the worldpos
				vec4 clip = projectionMatrix * worldPos;

				// shift the depth of the projected points so the line
				// segments overlap neatly
				vec3 clipPose = ( position.y < 0.5 ) ? ndcStart : ndcEnd;
				clip.z = clipPose.z * clip.w;

			#else

				vec2 offset = vec2( dir.y, - dir.x );
				// undo aspect ratio adjustment
				dir.x /= aspect;
				offset.x /= aspect;

				// sign flip
				if ( position.x < 0.0 ) offset *= - 1.0;

				// endcaps
				if ( position.y < 0.0 ) {

					offset += - dir;

				} else if ( position.y > 1.0 ) {

					offset += dir;

				}

				// adjust for linewidth
				offset *= linewidth;

				// adjust for clip-space to screen-space conversion // maybe resolution should be based on viewport ...
				offset /= resolution.y;

				// select end
				vec4 clip = ( position.y < 0.5 ) ? clipStart : clipEnd;

				// back to clip space
				offset *= clip.w;

				clip.xy += offset;

			#endif

			gl_Position = clip;

			vec4 mvPosition = ( position.y < 0.5 ) ? start : end; // this is an approximation

			#include <logdepthbuf_vertex>
			#include <clipping_planes_vertex>
			#include <fog_vertex>

		}
		`,fragmentShader:`
		uniform vec3 diffuse;
		uniform float opacity;
		uniform float linewidth;

		#ifdef USE_DASH

			uniform float dashOffset;
			uniform float dashSize;
			uniform float gapSize;

		#endif

		varying float vLineDistance;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#include <common>
		#include <color_pars_fragment>
		#include <fog_pars_fragment>
		#include <logdepthbuf_pars_fragment>
		#include <clipping_planes_pars_fragment>

		vec2 closestLineToLine(vec3 p1, vec3 p2, vec3 p3, vec3 p4) {

			float mua;
			float mub;

			vec3 p13 = p1 - p3;
			vec3 p43 = p4 - p3;

			vec3 p21 = p2 - p1;

			float d1343 = dot( p13, p43 );
			float d4321 = dot( p43, p21 );
			float d1321 = dot( p13, p21 );
			float d4343 = dot( p43, p43 );
			float d2121 = dot( p21, p21 );

			float denom = d2121 * d4343 - d4321 * d4321;

			float numer = d1343 * d4321 - d1321 * d4343;

			mua = numer / denom;
			mua = clamp( mua, 0.0, 1.0 );
			mub = ( d1343 + d4321 * ( mua ) ) / d4343;
			mub = clamp( mub, 0.0, 1.0 );

			return vec2( mua, mub );

		}

		void main() {

			#include <clipping_planes_fragment>

			#ifdef USE_DASH

				if ( vUv.y < - 1.0 || vUv.y > 1.0 ) discard; // discard endcaps

				if ( mod( vLineDistance + dashOffset, dashSize + gapSize ) > dashSize ) discard; // todo - FIX

			#endif

			float alpha = opacity;

			#ifdef WORLD_UNITS

				// Find the closest points on the view ray and the line segment
				vec3 rayEnd = normalize( worldPos.xyz ) * 1e5;
				vec3 lineDir = worldEnd - worldStart;
				vec2 params = closestLineToLine( worldStart, worldEnd, vec3( 0.0, 0.0, 0.0 ), rayEnd );

				vec3 p1 = worldStart + lineDir * params.x;
				vec3 p2 = rayEnd * params.y;
				vec3 delta = p1 - p2;
				float len = length( delta );
				float norm = len / linewidth;

				#ifndef USE_DASH

					#ifdef USE_ALPHA_TO_COVERAGE

						float dnorm = fwidth( norm );
						alpha = 1.0 - smoothstep( 0.5 - dnorm, 0.5 + dnorm, norm );

					#else

						if ( norm > 0.5 ) {

							discard;

						}

					#endif

				#endif

			#else

				#ifdef USE_ALPHA_TO_COVERAGE

					// artifacts appear on some hardware if a derivative is taken within a conditional
					float a = vUv.x;
					float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
					float len2 = a * a + b * b;
					float dlen = fwidth( len2 );

					if ( abs( vUv.y ) > 1.0 ) {

						alpha = 1.0 - smoothstep( 1.0 - dlen, 1.0 + dlen, len2 );

					}

				#else

					if ( abs( vUv.y ) > 1.0 ) {

						float a = vUv.x;
						float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
						float len2 = a * a + b * b;

						if ( len2 > 1.0 ) discard;

					}

				#endif

			#endif

			vec4 diffuseColor = vec4( diffuse, alpha );

			#include <logdepthbuf_fragment>
			#include <color_fragment>

			gl_FragColor = vec4( diffuseColor.rgb, alpha );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>
			#include <fog_fragment>
			#include <premultiplied_alpha_fragment>

		}
		`};class Ml extends xi{constructor(t){super({type:"LineMaterial",uniforms:qc.clone(An.line.uniforms),vertexShader:An.line.vertexShader,fragmentShader:An.line.fragmentShader,clipping:!0}),this.isLineMaterial=!0,this.setValues(t)}get color(){return this.uniforms.diffuse.value}set color(t){this.uniforms.diffuse.value=t}get worldUnits(){return"WORLD_UNITS"in this.defines}set worldUnits(t){t===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}get linewidth(){return this.uniforms.linewidth.value}set linewidth(t){this.uniforms.linewidth&&(this.uniforms.linewidth.value=t)}get dashed(){return"USE_DASH"in this.defines}set dashed(t){t===!0!==this.dashed&&(this.needsUpdate=!0),t===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}get dashScale(){return this.uniforms.dashScale.value}set dashScale(t){this.uniforms.dashScale.value=t}get dashSize(){return this.uniforms.dashSize.value}set dashSize(t){this.uniforms.dashSize.value=t}get dashOffset(){return this.uniforms.dashOffset.value}set dashOffset(t){this.uniforms.dashOffset.value=t}get gapSize(){return this.uniforms.gapSize.value}set gapSize(t){this.uniforms.gapSize.value=t}get opacity(){return this.uniforms.opacity.value}set opacity(t){this.uniforms&&(this.uniforms.opacity.value=t)}get resolution(){return this.uniforms.resolution.value}set resolution(t){this.uniforms.resolution.value.copy(t)}get alphaToCoverage(){return"USE_ALPHA_TO_COVERAGE"in this.defines}set alphaToCoverage(t){this.defines&&(t===!0!==this.alphaToCoverage&&(this.needsUpdate=!0),t===!0?this.defines.USE_ALPHA_TO_COVERAGE="":delete this.defines.USE_ALPHA_TO_COVERAGE)}}const uc=new Se,Dd=new N,Fd=new N,nn=new Se,sn=new Se,Zn=new Se,hc=new N,dc=new _e,rn=new Wf,Nd=new N,To=new cn,wo=new kn,Jn=new Se;let ti,Qi;function Ud(i,t,e){return Jn.set(0,0,-t,1).applyMatrix4(i.projectionMatrix),Jn.multiplyScalar(1/Jn.w),Jn.x=Qi/e.width,Jn.y=Qi/e.height,Jn.applyMatrix4(i.projectionMatrixInverse),Jn.multiplyScalar(1/Jn.w),Math.abs(Math.max(Jn.x,Jn.y))}function W1(i,t){const e=i.matrixWorld,n=i.geometry,s=n.attributes.instanceStart,r=n.attributes.instanceEnd,o=Math.min(n.instanceCount,s.count);for(let a=0,c=o;a<c;a++){rn.start.fromBufferAttribute(s,a),rn.end.fromBufferAttribute(r,a),rn.applyMatrix4(e);const u=new N,h=new N;ti.distanceSqToSegment(rn.start,rn.end,h,u),h.distanceTo(u)<Qi*.5&&t.push({point:h,pointOnLine:u,distance:ti.origin.distanceTo(h),object:i,face:null,faceIndex:a,uv:null,uv1:null})}}function j1(i,t,e){const n=t.projectionMatrix,r=i.material.resolution,o=i.matrixWorld,a=i.geometry,c=a.attributes.instanceStart,u=a.attributes.instanceEnd,h=Math.min(a.instanceCount,c.count),l=-t.near;ti.at(1,Zn),Zn.w=1,Zn.applyMatrix4(t.matrixWorldInverse),Zn.applyMatrix4(n),Zn.multiplyScalar(1/Zn.w),Zn.x*=r.x/2,Zn.y*=r.y/2,Zn.z=0,hc.copy(Zn),dc.multiplyMatrices(t.matrixWorldInverse,o);for(let d=0,f=h;d<f;d++){if(nn.fromBufferAttribute(c,d),sn.fromBufferAttribute(u,d),nn.w=1,sn.w=1,nn.applyMatrix4(dc),sn.applyMatrix4(dc),nn.z>l&&sn.z>l)continue;if(nn.z>l){const y=nn.z-sn.z,x=(nn.z-l)/y;nn.lerp(sn,x)}else if(sn.z>l){const y=sn.z-nn.z,x=(sn.z-l)/y;sn.lerp(nn,x)}nn.applyMatrix4(n),sn.applyMatrix4(n),nn.multiplyScalar(1/nn.w),sn.multiplyScalar(1/sn.w),nn.x*=r.x/2,nn.y*=r.y/2,sn.x*=r.x/2,sn.y*=r.y/2,rn.start.copy(nn),rn.start.z=0,rn.end.copy(sn),rn.end.z=0;const _=rn.closestPointToPointParameter(hc,!0);rn.at(_,Nd);const g=vf.lerp(nn.z,sn.z,_),m=g>=-1&&g<=1,v=hc.distanceTo(Nd)<Qi*.5;if(m&&v){rn.start.fromBufferAttribute(c,d),rn.end.fromBufferAttribute(u,d),rn.start.applyMatrix4(o),rn.end.applyMatrix4(o);const y=new N,x=new N;ti.distanceSqToSegment(rn.start,rn.end,x,y),e.push({point:x,pointOnLine:y,distance:ti.origin.distanceTo(x),object:i,face:null,faceIndex:d,uv:null,uv1:null})}}}class X1 extends Re{constructor(t=new rm,e=new Ml({color:Math.random()*16777215})){super(t,e),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){const t=this.geometry,e=t.attributes.instanceStart,n=t.attributes.instanceEnd,s=new Float32Array(2*e.count);for(let o=0,a=0,c=e.count;o<c;o++,a+=2)Dd.fromBufferAttribute(e,o),Fd.fromBufferAttribute(n,o),s[a]=a===0?0:s[a-1],s[a+1]=s[a]+Dd.distanceTo(Fd);const r=new Tc(s,2,1);return t.setAttribute("instanceDistanceStart",new Xn(r,1,0)),t.setAttribute("instanceDistanceEnd",new Xn(r,1,1)),this}raycast(t,e){const n=this.material.worldUnits,s=t.camera;s===null&&!n&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.');const r=t.params.Line2!==void 0&&t.params.Line2.threshold||0;ti=t.ray;const o=this.matrixWorld,a=this.geometry,c=this.material;Qi=c.linewidth+r,a.boundingSphere===null&&a.computeBoundingSphere(),wo.copy(a.boundingSphere).applyMatrix4(o);let u;if(n)u=Qi*.5;else{const l=Math.max(s.near,wo.distanceToPoint(ti.origin));u=Ud(s,l,c.resolution)}if(wo.radius+=u,ti.intersectsSphere(wo)===!1)return;a.boundingBox===null&&a.computeBoundingBox(),To.copy(a.boundingBox).applyMatrix4(o);let h;if(n)h=Qi*.5;else{const l=Math.max(s.near,To.distanceToPoint(ti.origin));h=Ud(s,l,c.resolution)}To.expandByScalar(h),ti.intersectsBox(To)!==!1&&(n?W1(this,e):j1(this,s,e))}onBeforeRender(t){const e=this.material.uniforms;e&&e.resolution&&(t.getViewport(uc),this.material.uniforms.resolution.value.set(uc.z,uc.w))}}class om extends rm{constructor(){super(),this.isLineGeometry=!0,this.type="LineGeometry"}setPositions(t){const e=t.length-3,n=new Float32Array(2*e);for(let s=0;s<e;s+=3)n[2*s]=t[s],n[2*s+1]=t[s+1],n[2*s+2]=t[s+2],n[2*s+3]=t[s+3],n[2*s+4]=t[s+4],n[2*s+5]=t[s+5];return super.setPositions(n),this}setColors(t){const e=t.length-3,n=new Float32Array(2*e);for(let s=0;s<e;s+=3)n[2*s]=t[s],n[2*s+1]=t[s+1],n[2*s+2]=t[s+2],n[2*s+3]=t[s+3],n[2*s+4]=t[s+4],n[2*s+5]=t[s+5];return super.setColors(n),this}setFromPoints(t){const e=t.length-1,n=new Float32Array(6*e);for(let s=0;s<e;s++)n[6*s]=t[s].x,n[6*s+1]=t[s].y,n[6*s+2]=t[s].z||0,n[6*s+3]=t[s+1].x,n[6*s+4]=t[s+1].y,n[6*s+5]=t[s+1].z||0;return super.setPositions(n),this}fromLine(t){const e=t.geometry;return this.setPositions(e.attributes.position.array),this}}class q1 extends X1{constructor(t=new om,e=new Ml({color:Math.random()*16777215})){super(t,e),this.isLine2=!0,this.type="Line2"}}function K1(i,t,e){const n=t[0]-i[0],s=t[1]-i[1],r=Math.hypot(n,s);if(r<1e-9)return{axis:[0,0,0],angle:0};const o=n/r;return{axis:[s/r,0,-o],angle:r/e}}const Od=.55,am=.55,kd=.006,$1=i=>1/(1+Math.max(i,0)),Y1=i=>am/(1+2*Math.max(i,0)),Z1=.6,J1=(i,t)=>t>0?i/t*Z1:0,Q1=14,tw=.25,cm=.25,Ro=Math.round(cm*60)+2,ew=2,nw=.5,iw=16774102,sw=20,fc=.06,pc=.06,Bd=.09;function rw(i){if(!(i>=0)||i>=pc+Bd)return[1,1,1];const t=i<pc?1:1-(i-pc)/Bd;return[1+fc*t,1-fc*t,1+fc*t]}const ow=.02,aw=2;let pr=null;function cw(){if(pr)return pr;const i=document.createElement("canvas");i.width=i.height=64;const t=i.getContext("2d"),e=t.createRadialGradient(32,32,0,32,32,32);return e.addColorStop(0,"rgba(0,0,0,1)"),e.addColorStop(.55,"rgba(0,0,0,0.55)"),e.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=e,t.fillRect(0,0,64,64),pr=new In(i),pr.userData.shared=!0,pr}function Gd(i){let{bodyScale:t,radius:e}=i;const n=new en({map:cw(),transparent:!0,depthWrite:!1,opacity:am,fog:!1,toneMapped:!1,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1}),s=new Re(new $n(Od,Od).rotateX(-Math.PI/2),n);s.position.y=kd,s.renderOrder=1,i.root.add(s);const r=new Ml({linewidth:ew,color:iw,vertexColors:!0,transparent:!0,opacity:nw,blending:2,depthWrite:!1,depthTest:!0,toneMapped:!1});r.resolution.set(i.resolution.width,i.resolution.height);const o=new om;o.setPositions(new Float32Array(Ro*3)),o.setColors(new Float32Array(Ro*3));const a=o.attributes.instanceStart.data,c=o.attributes.instanceColorStart.data,u=new q1(o,r);u.frustumCulled=!1,u.renderOrder=sw,u.visible=!1;const h=i.streak!==!1;i.root.add(u);const l=[],d=new N;let f=!1,p=!1,_=-1;const g=new N;function m(){s.scale.setScalar(t)}m();function v(y){const x=f?d.distanceTo(y.pos):0,w=f&&x>aw,M=y.height<=ow;if(s.visible=!y.held,s.visible&&(s.position.set(y.pos.x,kd,y.pos.z),s.scale.setScalar(t*$1(y.height)),n.opacity=Y1(y.height)),f&&!w&&y.dt>0&&x>1e-9){const{axis:C,angle:U}=K1([d.x,d.z],[y.pos.x,y.pos.z],e);if(C[0]!==0||C[2]!==0){g.set(C[0],C[1],C[2]);const P=M?U:J1(x/y.dt,e)*y.dt;P>0&&i.mesh.rotateOnWorldAxis(g,P)}}M&&p&&!w&&(_=y.t),w&&(_=-1),p=!M;const[T,I,S]=_<0?[1,1,1]:rw(y.t-_);if(i.mesh.scale.set(t*T,t*I,t*S),w&&(l.length=0),h&&y.dt>0){for(l.push({t:y.t,p:y.pos.clone()});l.length&&y.t-l[0].t>cm;)l.shift();for(;l.length>Ro;)l.shift()}if(h&&(y.speed>Q1||(y.apex??0)>=tw)&&l.length>=2){const U=l.length-1,P=a.array,O=c.array;for(let Z=0;Z<Ro-1;Z++)for(const[H,X]of[[0,Z],[3,Z+1]]){const B=l[Math.min(X,U)].p,j=6*Z+H;P[j]=B.x,P[j+1]=B.y,P[j+2]=B.z;const Q=Math.min(X,U)/U;O[j]=O[j+1]=O[j+2]=Q}a.needsUpdate=!0,c.needsUpdate=!0,o.instanceCount=U,u.visible=!0}else u.visible=!1;d.copy(y.pos),f=!0}return{update:v,hide(){s.visible=!1,u.visible=!1},resize(y,x,w){t=y,e=x,m(),r.resolution.set(w.width,w.height)},__state:()=>({shadow:s,streak:u,trailLength:l.length,squashFrom:_})}}const lw=.055,uw=.17,Vi=.015,zd=2.1,hw=.16,dw=.1,fw=1.6,pw=.45,mw=.11,gw={technical:Hy,tactical:Vy,physical:Wy,social:jy};function _w(){const i=document.createElement("canvas");i.width=i.height=256;const t=i.getContext("2d"),e=t.createRadialGradient(128,128,0,128,128,128);return e.addColorStop(0,"rgba(255,255,255,0)"),e.addColorStop(.62,"rgba(255,255,255,0)"),e.addColorStop(.76,"rgba(255,255,255,0.9)"),e.addColorStop(.84,"rgba(255,255,255,0.5)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,256,256),new In(i)}function bw(i,t,e,n,s,r){i.beginPath(),i.moveTo(t+r,e),i.arcTo(t+n,e,t+n,e+s,r),i.arcTo(t+n,e+s,t,e+s,r),i.arcTo(t,e+s,t,e,r),i.arcTo(t,e,t+n,e,r),i.closePath()}function xw(i){const t=document.createElement("canvas"),e=48;t.width=Math.max(64,Math.round(i.w*e)),t.height=Math.max(64,Math.round(i.h*e));const n=t.getContext("2d"),s=i.color!==void 0?gw[i.color]??i.color:Fi,r=Math.min(t.width,t.height)*.14;if(bw(n,3,3,t.width-6,t.height-6,r),n.globalAlpha=hw,n.fillStyle=s,n.fill(),n.globalAlpha=.55,n.lineWidth=4,n.strokeStyle=s,n.stroke(),i.label){n.font="600 22px system-ui, sans-serif";const a=i.label.toUpperCase(),c=L1(n.measureText(a).width,t.width-30);c.draw&&(n.globalAlpha=.85,n.fillStyle=s,n.fillText(a,18,34,c.maxWidth))}const o=new In(t);return o.colorSpace=Ve,o}function vw(i){var y,x;const{scene:t,drill:e,schedule:n}=i,s=(...w)=>{for(const M of w)M.traverse(T=>{const I=T.material;for(const S of Array.isArray(I)?I:I?[I]:[])S.toneMapped=!1});t.add(...w)},r=i.pathM??dw,o=w=>w*r*(i.pathWidthK??1),a=I1(i.search??location.search,(y=e.overlays)==null?void 0:y.runPaths),{width:c,length:u}=e.pitch,h=w=>w-c/2,l=w=>w-u/2,d={moves:n.moves,flights:n.flights,departures:n.departures,arrivals:n.arrivals,dives:n.dives,attachTo:n.attachTo,starts:Object.fromEntries(e.players.map(w=>[w.id,w.start])),ballStart:Go(e),headingAt:i.headingAt},f=m1(e.players,Go(e),n.attachTo(0)),p=new Map(e.players.map(w=>[w.id,w.team])),_=w=>p.get(w)===f?c1:l1,g=[];{const w=ZT,M=new Float32Array(w*3),T=new Xe;T.setAttribute("position",new De(new Float32Array(w*2*3),3)),T.setAttribute("color",new De(new Float32Array(w*2*3),3));const I=new Float32Array(w*2*2);for(let H=0;H<w;H++)I.set([0,H/(w-1),1,H/(w-1)],H*4);T.setAttribute("uv",new De(I,2));const S=new Uint16Array((w-1)*6);for(let H=0;H<w-1;H++){const X=H*2;S.set([X,X+1,X+2,X+1,X+3,X+2],H*6)}T.setIndex(new De(S,1));const A=(()=>{const H=document.createElement("canvas");H.width=64,H.height=1;const X=H.getContext("2d"),[B,j,Q]=zy,it=X.createLinearGradient(0,0,64,0);it.addColorStop(0,`rgba(${B},${j},${Q},0)`),it.addColorStop(.28,`rgba(${B},${j},${Q},0.28)`),it.addColorStop(.44,"rgba(216,247,120,0.8)"),it.addColorStop(.5,"rgba(255,255,255,1)"),it.addColorStop(.56,"rgba(216,247,120,0.8)"),it.addColorStop(.72,`rgba(${B},${j},${Q},0.28)`),it.addColorStop(1,`rgba(${B},${j},${Q},0)`),X.fillStyle=it,X.fillRect(0,0,64,1);const ct=new In(H);return ct.colorSpace=Ve,ct})(),C=new Re(T,new en({map:A,vertexColors:!0,blending:2,transparent:!0,depthWrite:!1,side:2}));C.frustumCulled=!1,C.renderOrder=6,s(C);const U=new N,P=new N,O=new N,Z=YT/(w-1);g.push((H,X)=>{if(C.visible=a.trail,!a.trail)return;for(let Q=0;Q<w;Q++){const it=vd(d,H-Q*Z);M[Q*3]=h(it.pos[0]),M[Q*3+1]=lw+it.height,M[Q*3+2]=l(it.pos[1])}const B=T.getAttribute("position"),j=T.getAttribute("color");O.set(1,0,0);for(let Q=0;Q<w;Q++){const it=Math.min(Q,w-2);U.set(M[it*3]-M[it*3+3],M[it*3+1]-M[it*3+4],M[it*3+2]-M[it*3+5]),P.set(M[Q*3],M[Q*3+1],M[Q*3+2]).sub(X.position),U.lengthSq()>1e-10&&(U.cross(P),U.lengthSq()>1e-10&&O.copy(U.normalize()));const ct=Math.pow(1-Q/(w-1),1.2),Dt=uw*(.35+.65*ct),nt=M[Q*3],ot=M[Q*3+1],at=M[Q*3+2];B.setXYZ(Q*2,nt+O.x*Dt,ot+O.y*Dt,at+O.z*Dt),B.setXYZ(Q*2+1,nt-O.x*Dt,ot-O.y*Dt,at-O.z*Dt);const et=ct;j.setXYZ(Q*2,et,et,et),j.setXYZ(Q*2+1,et,et,et)}B.needsUpdate=j.needsUpdate=!0})}{const w=[];let M=0,T=0;for(const I of e.events){if(I.type!=="move"&&I.type!=="dribble")continue;const S=(n.moves[I.player]??[]).find(U=>U.t0===I.t&&U.to[0]===I.to[0]&&U.to[1]===I.to[1]);if(!S)continue;const A=Ed(I.type,S.from,S.to,r);if(!A)continue;const C=new he(_(I.player));w.push({m:S,authored:I.runPath===!0,stroke:A,baseR:C.r,baseG:C.g,baseB:C.b,baseA:1,vert0:M,vertCount:A.dashes.length*4+3}),M+=A.dashes.length*4+3,T+=A.dashes.length*6+3}if(w.length){const I=new Float32Array(M*3),S=new Float32Array(M*4),A=new Uint16Array(T);let C=0,U=0;const P=o(Sd)/2;for(const X of w){const B=Math.hypot(X.m.to[0]-X.m.from[0],X.m.to[1]-X.m.from[1])||1,j=-(X.m.to[1]-X.m.from[1])/B,Q=(X.m.to[0]-X.m.from[0])/B;for(const ot of X.stroke.dashes){const at=C/3;I.set([h(ot.ax+j*P),Vi,l(ot.ay+Q*P),h(ot.ax-j*P),Vi,l(ot.ay-Q*P),h(ot.bx+j*P),Vi,l(ot.by+Q*P),h(ot.bx-j*P),Vi,l(ot.by-Q*P)],C),C+=12,A.set([at,at+1,at+2,at+1,at+3,at+2],U),U+=6}const[it,ct,Dt]=Md(X.m.from,X.m.to,X.stroke.headScale),nt=C/3;I.set([h(it[0]),Vi,l(it[1]),h(ct[0]),Vi,l(ct[1]),h(Dt[0]),Vi,l(Dt[1])],C),C+=9,A.set([nt,nt+1,nt+2],U),U+=3}const O=new Xe;O.setAttribute("position",new De(I,3)),O.setAttribute("color",new De(S,4)),O.setIndex(new De(A,1));const Z=new Re(O,new en({vertexColors:!0,transparent:!0,depthWrite:!1,side:2}));Z.renderOrder=2,s(Z);const H=O.getAttribute("color");g.push(X=>{if(Z.visible=a.runPaths!=="off",!!Z.visible){for(const B of w){const j=a.runPaths==="authored"&&!B.authored?0:E1(X,B.m.t0),Q=e1(B.m,X);let it=B.vert0;for(const Dt of B.stroke.dashes){const nt=B.baseA*j*Cd(Dt.k,Q);for(let ot=0;ot<4;ot++)H.setXYZW(it++,B.baseR,B.baseG,B.baseB,nt)}const ct=B.baseA*j*Cd(1,Q);for(let Dt=0;Dt<3;Dt++)H.setXYZW(it++,B.baseR,B.baseG,B.baseB,ct)}H.needsUpdate=!0}})}}{const w=y1,M=g1/2,T=[-1,-.4,1-2*im,1],I=T.map(x1),S=T.length,A=n.flights.map((P,O)=>Bc(n.flights,O)),C=()=>{const P=new Xe,O=new Float32Array((w+1)*S*3);for(let B=0;B<(w+1)*S;B++)O[B*3+1]=Td;const Z=new Float32Array((w+1)*S*4),H=new Uint16Array(w*(S-1)*6);for(let B=0,j=0;B<w;B++)for(let Q=0;Q<S-1;Q++,j++){const it=B*S+Q;H.set([it,it+1,it+S,it+1,it+S+1,it+S],j*6)}P.setAttribute("position",new De(O,3)),P.setAttribute("color",new De(Z,4)),P.setIndex(new De(H,1));const X=new Re(P,new en({color:b1,vertexColors:!0,transparent:!0,depthWrite:!1,side:2}));return X.frustumCulled=!1,X.renderOrder=2,X.name="passRibbon",s(X),{mesh:X,posAttr:P.getAttribute("position"),colAttr:P.getAttribute("color")}},U=[C(),C()];g.push(P=>{const O=a.runPaths==="auto"?M1(n.flights,P):[];for(let Z=0;Z<U.length;Z++){const H=U[Z],X=O[O.length-1-Z]??-1;if(H.mesh.visible=X>=0,X<0)continue;const B=n.flights[X],j=kc(P,B,A[X]),Q=S1(B,P),it=Math.hypot(B.to[0]-B.from[0],B.to[1]-B.from[1])||1,ct=-(B.to[1]-B.from[1])/it*M,Dt=(B.to[0]-B.from[0])/it*M,nt=B.from[0]+(B.to[0]-B.from[0])*Q,ot=B.from[1]+(B.to[1]-B.from[1])*Q,at=A1(n.flights,X,P);for(let et=0;et<=w;et++){const yt=et/w,Bt=et===w?at[0]:B.from[0]+(nt-B.from[0])*yt,Qt=et===w?at[1]:B.from[1]+(ot-B.from[1])*yt,de=j*Rd(yt);for(let se=0;se<S;se++){const Ce=T[se],F=et*S+se;H.posAttr.setX(F,h(Bt+ct*Ce)),H.posAttr.setZ(F,l(Qt+Dt*Ce)),H.colAttr.setXYZW(F,1,1,1,de*I[se])}}H.posAttr.needsUpdate=H.colAttr.needsUpdate=!0}})}{const w=(e.equipment??[]).filter(C=>C.type==="goal").map(C=>({x:C.at[0],y:C.at[1],halfW:rs(C,na)*i.goalScale})),M=o(So)/2,T=[],I=[],S=[],A=[];for(let C=0;C<n.flights.length;C++){const U=n.flights[C];if(!ra(U))continue;const P=f1(U,n.arrivals);if(!P&&!U.pop)continue;const O=Math.hypot(U.to[0]-U.from[0],U.to[1]-U.from[1])||1,Z=-(U.to[1]-U.from[1])/O,H=(U.to[0]-U.from[0])/O,X=H,B=-Z;let j=0;if(P){const Q=h1*2*M/2;I.push({ax:U.to[0]-X*M,ay:U.to[1]-B*M,bx:U.to[0]+X*M,by:U.to[1]+B*M,h:Q,px:Z,py:H});const it=p1(U.from,U.to,w,o(So))??U.to;I.push({ax:U.to[0],ay:U.to[1],bx:it[0],by:it[1],h:d1*M,px:Z,py:H}),j=8}else{I.push({ax:U.from[0],ay:U.from[1],bx:U.to[0],by:U.to[1],h:Sd/So*M,px:Z,py:H});const Q=Ed("pass",U.from,U.to,r);S.push(Md(U.from,U.to,Q?Q.headScale:0)),j=7}A.push({i:C,verts:j})}if(A.length){const C=A.reduce((at,et)=>at+et.verts,0),U=A.reduce((at,et)=>at+(et.verts===8?12:9),0),P=new Float32Array(C*3),O=new Float32Array(C*4),Z=new Uint16Array(U);let H=0,X=0,B=0,j=0;const Q=Td,it=()=>{const at=I[B++],et=H/3;P.set([h(at.ax+at.px*at.h),Q,l(at.ay+at.py*at.h),h(at.ax-at.px*at.h),Q,l(at.ay-at.py*at.h),h(at.bx+at.px*at.h),Q,l(at.by+at.py*at.h),h(at.bx-at.px*at.h),Q,l(at.by-at.py*at.h)],H),H+=12,Z.set([et,et+1,et+2,et+1,et+3,et+2],X),X+=6};for(const at of A){const et=H/3;if(at.verts===8)it(),it();else{it();const[yt,Bt,Qt]=S[j++],de=H/3;P.set([h(yt[0]),Q,l(yt[1]),h(Bt[0]),Q,l(Bt[1]),h(Qt[0]),Q,l(Qt[1])],H),H+=9,Z.set([de,de+1,de+2],X),X+=3}T.push({flight:at.i,vert0:et,vertCount:at.verts})}const ct=new Xe;ct.setAttribute("position",new De(P,3)),ct.setAttribute("color",new De(O,4)),ct.setIndex(new De(Z,1));const Dt=new Re(ct,new en({color:qy,vertexColors:!0,transparent:!0,depthWrite:!1,side:2}));Dt.renderOrder=2.5,Dt.name="passMarks",s(Dt);const nt=ct.getAttribute("color"),ot=n.flights.map((at,et)=>Bc(n.flights,et));g.push(at=>{if(Dt.visible=a.runPaths==="auto",!!Dt.visible){for(const et of T){const yt=n.flights[et.flight],Bt=at<yt.t0+yt.duration?0:kc(at,yt,ot[et.flight])*Rd(1);let Qt=et.vert0;for(let de=0;de<et.vertCount;de++,Qt++)nt.setXYZW(Qt,1,1,1,Bt)}nt.needsUpdate=!0}})}}{const w=w1(n.departures,n.anims,i.clips),M={arrivals:n.arrivals,flights:n.flights,attachTo:n.attachTo,staticBall:!e.ball||e.ball.static===!0},T=new en({map:_w(),color:Fi,blending:2,transparent:!0,depthWrite:!1}),I=new Re(new $n(zd,zd).rotateX(-Math.PI/2),T);I.position.y=.02,I.renderOrder=3,I.name="possessionRing",s(I);const S=i.ballRadius??mw,A=fw*S,C=So*r,U=new en({color:Fi,blending:2,transparent:!0,depthWrite:!1,depthTest:!1,side:2}),P=new Re(new Zo(Math.max(A-C/2,1e-4),A+C/2,40),U);P.frustumCulled=!1,P.renderOrder=8,P.name="possessionHalo",s(P),g.push((O,Z)=>{const H=C1(M,w,O);I.visible=a.highlight&&H.kind==="ring",P.visible=a.highlight&&(H.kind==="halo"||H.kind==="free");const X=Math.sin(O*2*Math.PI/1.6);if(H.kind==="ring"){const B=em(d,H.player,O);I.position.x=h(B[0]),I.position.z=l(B[1]);const j=1+.05*X;I.scale.x=I.scale.z=j,T.opacity=.72+.18*X}else if(H.kind==="halo"||H.kind==="free"){const B=vd(d,O);P.position.set(h(B.pos[0]),S+B.height,l(B.pos[1])),P.quaternion.copy(Z.quaternion),U.opacity=H.kind==="free"?pw:.72+.18*X}})}const m=[];for(const w of((x=e.overlays)==null?void 0:x.zones)??[]){if(tp.test(w.label??""))continue;const M=new Re(new $n(w.w,w.h).rotateX(-Math.PI/2).rotateY(Math.PI),new en({map:xw(w),transparent:!0,depthWrite:!1}));M.position.set(h(w.at[0]),.004,l(w.at[1])),M.renderOrder=.5,s(M),m.push(M)}const v=()=>{for(const w of m)w.visible=a.zones};return v(),{update(w,M){for(const T of g)T(w,M)},set(w){Object.assign(a,w),v()}}}const yw=.16,Mw=.25,lm=.8,um=.6,hm=8,Sw=um*hm;function Aw(i,t){return!(i>=0)||i>=lm||t>Sw*i?0:yw*Math.exp(-i/Mw)*Math.sin(2*Math.PI*(t/um-hm*i))}function Ew(i){const t=[];for(let e=0;e<i.length-1;e++){const n=i[e],s=i[e+1];n.style!=="shot"||s.style!=="drop"||s.from[0]!==n.to[0]||s.from[1]!==n.to[1]||t.push({t:n.t0+n.duration,at:[...n.to],height:s.fromHeight??Tw})}return t}const Tw=.6,Hd=.15,ww=.12,Rw=i=>{const t=Math.min(Math.max(i,0),1);return t*t*(3-2*t)};function Vd(i){return Rw(Math.min(i,1-i)/ww)}function Cw(i,t){const e=i.geometry,n=e.getAttribute("position"),s=e.getAttribute("uv"),r=e.getAttribute("normal");if(!n||n.count!==4)return null;const o=[];for(let X=0;X<4;X++)o.push([n.getX(X),n.getY(X),n.getZ(X)]);const a=[0,1,2].map(X=>Math.min(...o.map(B=>B[X]))),c=[0,1,2].map(X=>Math.max(...o.map(B=>B[X]))),u=[0,1,2].map(X=>c[X]-a[X]),h=u.indexOf(Math.min(...u));if(u[h]>.001)return null;const[l,d]=[0,1,2].filter(X=>X!==h);if(!(u[l]>0&&u[d]>0))return null;const f=(X,B)=>{let j=0,Q=1/0;for(let it=0;it<4;it++){const ct=Math.abs((o[it][l]-a[l])/u[l]-X)+Math.abs((o[it][d]-a[d])/u[d]-B);ct<Q&&(Q=ct,j=it)}return j},p=f(0,0),_=f(1,0),g=f(0,1),m=f(1,1),v=(X,B)=>s?B?s.getY(X):s.getX(X):0,y=new N().setFromMatrixScale(t).x,x=Math.max(2,Math.min(96,Math.ceil(u[l]*y/Hd))),w=Math.max(2,Math.min(96,Math.ceil(u[d]*y/Hd))),M=(x+1)*(w+1),T=new Float32Array(M*3),I=new Float32Array(M*2),S=new Float32Array(M*3),A=new Float32Array(M),C=r?[r.getX(0),r.getY(0),r.getZ(0)]:[0,0,0];for(let X=0;X<=w;X++)for(let B=0;B<=x;B++){const j=X*(x+1)+B,Q=B/x,it=X/w;T[j*3+h]=o[0][h],T[j*3+l]=a[l]+u[l]*Q,T[j*3+d]=a[d]+u[d]*it;for(const ct of[0,1])I[j*2+ct]=v(p,ct)*(1-Q)*(1-it)+v(_,ct)*Q*(1-it)+v(g,ct)*(1-Q)*it+v(m,ct)*Q*it;S.set(C,j*3),A[j]=Vd(Q)*Vd(it)}const U=[];for(let X=0;X<w;X++)for(let B=0;B<x;B++){const j=X*(x+1)+B;U.push(j,j+1,j+x+1,j+1,j+x+2,j+x+1)}const P=new Xe;P.setAttribute("position",new De(T,3)),P.setAttribute("uv",new De(I,2)),P.setAttribute("normal",new De(S,3)),P.setIndex(U),P.userData.drillOwned=!0,i.geometry=P;const O=new Float32Array(T),Z=new Float32Array(M*3),H=new N;for(let X=0;X<M;X++)H.fromArray(O,X*3).applyMatrix4(t).toArray(Z,X*3);return{mesh:i,axis:h,rest:O,world:Z,weight:A,scale:y}}function Wd(i,t=!1){if(i.goal.updateWorldMatrix(!0,!1),!t&&i.placed.equals(i.goal.matrixWorld))return;const e=new _e().copy(i.goal.matrixWorld).invert();for(const n of i.hits)n.p.copy(n.w).applyMatrix4(e),n.p.z=qn.zMin;i.placed.copy(i.goal.matrixWorld)}function Iw(i,t,e){const n=[];if(i.length&&t.length){const s=i.map(()=>[]);for(const r of t){const o=e(r.at,r.height);let a=0,c=1/0;i.forEach((u,h)=>{const l=u.position.distanceToSquared(o);l<c&&(c=l,a=h)}),s[a].push(r)}i.forEach((r,o)=>{if(!s[o].length)return;r.updateMatrixWorld(!0);const a=new _e().copy(r.matrixWorld).invert(),c=[];if(r.traverse(h=>{const l=h;if(!l.isMesh||!Pw(l))return;const d=Cw(l,new _e().multiplyMatrices(a,l.matrixWorld));d&&c.push(d)}),!c.length)return;const u={panels:c,goal:r,dirty:!1,placed:new _e,hits:s[o].map(h=>({t:h.t,w:e(h.at,h.height),p:new N}))};Wd(u,!0),n.push(u)})}return{panels:n.reduce((s,r)=>s+r.panels.length,0),update(s){for(const r of n){const o=Lw(r.hits,s);if(!o){if(!r.dirty)continue;for(const c of r.panels)Dw(c);r.dirty=!1;continue}Wd(r);const a=s-o.t;for(const c of r.panels){const u=c.mesh.geometry.getAttribute("position"),h=u.array;for(let l=0;l<c.weight.length;l++){const d=c.world[l*3]-o.p.x,f=c.world[l*3+1]-o.p.y,p=c.world[l*3+2]-o.p.z,_=Aw(a,Math.hypot(d,f,p))*c.weight[l];h[l*3+c.axis]=c.rest[l*3+c.axis]+_/c.scale}u.needsUpdate=!0}r.dirty=!0}}}}const Pw=i=>(Array.isArray(i.material)?i.material:i.material?[i.material]:[]).some(e=>/^net/i.test(e.name))||/^net/i.test(i.name);function Lw(i,t){let e=null;for(const n of i)t>=n.t&&t-n.t<lm&&(e=n);return e}function Dw(i){const t=i.mesh.geometry.getAttribute("position");t.array.set(i.rest),t.needsUpdate=!0}const Sl=new N(0,1,0),dm=.04,fm=8,Rr=.1,qs=46,Ks=25,jd=70;function qo(i,t){return new N(Math.cos(i)*Math.sin(t),Math.sin(i),-Math.cos(i)*Math.cos(t))}function oa(i){const t=i.fov*Math.PI/360;return{vHalf:t,hHalf:Math.atan(Math.tan(t)*i.aspect)}}let ts=new Float64Array(64),Co=new Float64Array(64),Io=new Float64Array(64);const pm=new N,mm=new N,Li=new N;function Xd(i,t,e){let n=-1/0,s=-1/0;for(let r=0;r<t;r++)n=Math.max(n,i[r]/(2*e)+ts[r]/2),s=Math.max(s,-i[r]/(2*e)+ts[r]/2);return n+s}function qd(i,t,e,n){let s=-1/0,r=1/0;for(let o=0;o<t;o++)s=Math.max(s,i[o]-(n-ts[o])*e),r=Math.min(r,i[o]+(n-ts[o])*e);return[(s+r)/2,Math.max((r-s)/2,0)]}function Ko(i,t,e,n,s){const r=i.length;ts.length<r&&(ts=new Float64Array(r),Co=new Float64Array(r),Io=new Float64Array(r));const o=pm.crossVectors(Sl,e).normalize(),a=mm.crossVectors(e,o).normalize(),c=Math.tan(s),u=Math.tan(n);for(let _=0;_<r;_++)Li.subVectors(i[_],t),ts[_]=Li.dot(e),Co[_]=Li.dot(o),Io[_]=Li.dot(a);const h=Math.max(Math.max(Xd(Co,r,c),Xd(Io,r,u))*(1+dm),fm),[l,d]=qd(Co,r,c,h),[f,p]=qd(Io,r,u,h);return{dist:h,offset:new N().addScaledVector(o,l).addScaledVector(a,f),slack:new oe(d,p)}}function Fw(i,t,e,n,s){const r=pm.crossVectors(Sl,e).normalize(),o=mm.crossVectors(e,r).normalize(),a=Math.tan(s),c=Math.tan(n);let u=0;for(const h of i){Li.subVectors(h,t);const l=Li.dot(e);u=Math.max(u,Math.abs(Li.dot(r))/a+l,Math.abs(Li.dot(o))/c+l)}return Math.max(u*(1+dm),fm)}function gm(i,t,e,n){const[s,r]=e?[i,t]:[t,i];return s>r*(1+Rr)?!0:r>s*(1+Rr)?!1:n}function _m(i,t,e=qs,n=Ks){const s=new cn().setFromPoints(i),r=s.getCenter(new N),o=s.getSize(new N),{vHalf:a,hHalf:c}=oa(t),u=e*Math.PI/180,h=n*Math.PI/180,l=Ko(i,r,qo(u,h),a,c).dist,d=Ko(i,r,qo(u,h+Math.PI/2),a,c).dist,f=gm(o.x,o.z,t.aspect<1,d<l*(1-Rr));return{dist:f?d:l,alt:f}}function mc(i,t,e,n=qs,s=Ks){const{dist:r}=_m(i,t,n,s);return 2*r*Math.tan(oa(t).vHalf)/e}function Kd(i=qs){return 1/Math.sqrt(Math.sin(i*Math.PI/180))}const zc=(i,t)=>!(t>0)||!Number.isFinite(i)?1:1-Math.exp(-i/t),$d=.6,Nw=.8,Uw=30,Ow=Ks,kw=12,Yd=1.03,Bw=1.5;function Gw(i,t){if(!(t>0)||!(i>=0))return 1;const e=Math.min(i/t,1);return Yd+(1-Yd)*(e*e*(3-2*e))}const zw=2,Hc=.5,Hw=i=>{const t=Math.floor(Math.max(i,0)/Hc)*Hc;return[t,t+zw]},Vw=.25,Ww=.06;function jw(i,t){const e=new N;if(!i.length)return e;for(const n of i)e.add(n);return e.divideScalar(i.length).sub(t).multiplyScalar(Vw)}class Xw{constructor(t,e=qs,n=Ks){Pe(this,"target",new N);Pe(this,"wanted",new N);Pe(this,"useAlt",!1);Pe(this,"pushAt",-1);Pe(this,"pushFor",0);Pe(this,"elevAt",-1);this.camera=t,this.elevDeg=e,this.azDeg=n}armPushIn(t,e){this.pushAt<0&&(this.pushAt=e),this.pushFor=Math.max(t,0)}pushInAt(t){return this.pushAt<0?1:Gw(t-this.pushAt,this.pushFor)}setElev(t){this.elevDeg=t}get elev(){return this.elevDeg}setAz(t){this.azDeg=t}get az(){return this.azDeg}get elevNow(){return this.elevAt<0?this.elevDeg:this.elevAt}frame(t,e,n={}){if(!t.length)return;const s=new cn().setFromPoints(t),r=n.lookAt?n.lookAt.clone():s.getCenter(new N),o=s.getSize(new N),{vHalf:a,hHalf:c}=oa(this.camera),u=n.elevDeg??this.elevDeg;this.elevAt=this.elevAt<0?u:this.elevAt+(u-this.elevAt)*zc(e,$d);const h=this.elevAt*Math.PI/180,l=(n.azDeg??this.azDeg)*Math.PI/180,d=l+Math.PI/2,f=qo(h,l),p=qo(h,d),_=Ko(t,r,f,a,c),g=Ko(t,r,p,a,c);!this.useAlt&&g.dist<_.dist*(1-Rr)?this.useAlt=!0:this.useAlt&&_.dist<g.dist*(1-Rr)?this.useAlt=!1:this.useAlt=gm(o.x,o.z,this.camera.aspect<1,this.useAlt);const m=this.useAlt?g:_,v=this.useAlt?p:f,y=n.lookAt?r:r.clone().add(m.offset),x=n.lookAt?Fw(t,r,v,a,c):m.dist;if(n.breath&&!n.lookAt){const T=new N().crossVectors(Sl,v).normalize(),I=new N().crossVectors(v,T).normalize(),S=Ww*m.dist,A=(C,U)=>{const P=Math.min(U,S);return Math.min(Math.max(C,-P),P)};y.addScaledVector(T,A(n.breath.dot(T),m.slack.x)).addScaledVector(I,A(n.breath.dot(I),m.slack.y))}const w=x*(n.now!==void 0?this.pushInAt(n.now):1);this.wanted.copy(v).multiplyScalar(w).add(y);const M=zc(e,$d);this.camera.position.lerp(this.wanted,M),this.target.lerp(y,M),this.camera.lookAt(this.target)}get lookTarget(){return this.target.clone()}}const qw=1.8,Kw=34,$w=844,Yw=1,bm=4;function Zd(i,t,e=qs,n=Ks){const{vHalf:s}=oa(t),r=e*Math.PI/180,{dist:o}=_m(i,t,e,n),a=Kw*2*o*Math.tan(s)/($w*qw*Math.cos(r));return Math.min(bm,Math.max(Yw,a))}function Zw(i,t,e,n=qs,s=Ks,r=bm){const o=h=>Er(i,Math.min(r,h));let a=o(Zd(t,e,n,s)),c=0,u=0;for(let h=0;h<8;h++){c++;const l=o(Zd([...t,...Pc(i,a)],e,n,s));if(u=Math.abs(l-a)/a,a=l,u<=.005)break}return{scale:a,rounds:c,residual:u,framed:[...t,...Pc(i,a)]}}class Jw{constructor(){Pe(this,"last",-1);Pe(this,"dts",[])}tick(t){this.last>=0&&(this.dts.push(t-this.last),this.dts.length>120&&this.dts.shift()),this.last=t}get avg(){return this.dts.length?1e3/(this.dts.reduce((t,e)=>t+e)/this.dts.length):0}get min(){return this.dts.length?1e3/Math.max(...this.dts):0}}const Ii={clips:0,schedule:0,build:0};let Jd=null;function Qw(){return Jd??(Jd=fetch(Tn("assets/clips_ochi.json")).then(i=>i.json()).then(i=>Fp(i)).catch(i=>{throw Jd=null,i}))}let Qd=null;function tR(i){return Qd??(Qd=ll().loadAsync(Tn("assets/ball.glb")).then(t=>(t.scene.traverse(e=>{const n=e.material;n!=null&&n.isMeshStandardMaterial&&(n.emissive.set(16777215),n.emissiveIntensity=.32)}),t.scene)).catch(t=>{throw Qd=null,t}))}function eR(i,t,e){if(i)return;const n=document.getElementById("hud");n&&(n.textContent=t)}const xm="coach";function nR(i){return i.team===xm||i.number===void 0?void 0:String(i.number)}function iR(i){const t=Object.keys(i);return t.includes("white")?"white":t.find(e=>e!==xm)??t[0]}const sR=i=>i==="boys"||i==="girls";async function rR(i,t,e,n=aS){if(!sR(e))return;let s=null;try{s=await n(e)}catch{s=null}return aR(i,t,s)}const oR=(i,t,e)=>i===t&&e!==void 0;function aR(i,t,e){if(!(e!=null&&e.length))return;let n=0;return i.map((s,r)=>s.team===t?e[n++%e.length]:r)}async function vm(i,t,e={}){var Et,wt,Nt;const n=performance.now(),s=tM(i),r=await Qw();Ii.clips=performance.now()-n;const o=e.stage??Qo(t),a=new fn,c=[[-1,-1],[1,-1],[1,1],[-1,1]].map(([tt,vt])=>new N(tt*s.pitch.width/2,0,vt*s.pitch.length/2)),u=s.players.map(tt=>new N(tt.start[0]-s.pitch.width/2,0,tt.start[1]-s.pitch.length/2)),h=[...c,...u],l=()=>e.bodyScale??Zw(s,h,o.camera,e.elev,e.az).scale,d=tt=>[...h,...Pc(s,tt)],f=o.size();let p=l(),_=d(p);Zh(.35*p);let g=Er(s,p);const m=performance.now(),v=((Et=e.schedules)==null?void 0:Et.get(g))??bT(s,r,g);(wt=e.schedules)==null||wt.set(g,v),Ii.schedule=performance.now()-m;const y=pM(s),x=(tt=e.elev??0)=>tt>=jd?[..._,...y]:_;let w=mc(x(),o.camera,o.size().height,e.elev,e.az),M=Kd(e.elev);const T=EM(s.pitch.width,s.pitch.length),{toWorld:I,goals:S,cones:A,boards:C,setWorld:U,setMasts:P}=await qM(a,s,o.renderer.capabilities.getMaxAnisotropy(),p,T),O=Iw(S,Ew(v.flights),I);let Z=_.slice(h.length);o.fitShadow(_),o.setFog(SM(s.pitch.width,s.pitch.length)),o.setHorizon(T),o.setSky(!1);const H=iR(s.teams),X=await ta(a,s.players.length,void 0,void 0,0,await rR(s.players,H,e.squad)),B=e.kit?await yp(e.kit.pattern,s.players.flatMap((tt,vt)=>tt.team===H?vp(X[vt]):[])):null,j=await Mp(),Q=new Map,it=new Map;s.players.forEach((tt,vt)=>{const _t=X[vt];Q.set(tt.id,_t),_t.root.rotation.order="YXZ",_t.root.scale.setScalar(p);const Tt=oR(tt.team,H,e.kit);Nc(_t,Tt?e.kit:s.teams[tt.team].kit.primary,Tt?B:null,{label:nR(tt),boxes:j}),_t.root.position.copy(I(tt.start));const mt=aM(.9);mt.scale.setScalar(p),mt.position.x=_t.root.position.x,mt.position.z=_t.root.position.z,a.add(mt),it.set(tt.id,mt)});const ct=(await tR()).clone();ct.scale.setScalar(p),a.add(ct);const Dt=Gd({root:a,mesh:ct,bodyScale:p,radius:.11*p,resolution:o.size()}),nt=!!s.ball,ot=Go(s);nt||(ct.visible=!1,Dt.hide());const at=Array.from({length:(((Nt=s.balls)==null?void 0:Nt.length)??0)+v.ballSwaps.length},()=>ct.clone()),et=at.map(tt=>(tt.scale.setScalar(p),a.add(tt),Gd({root:a,mesh:tt,bodyScale:p,radius:.11*p,resolution:o.size(),streak:!1}))),yt=new Xw(o.camera,e.elev,e.az);yt.armPushIn(Bw,performance.now()/1e3);let Bt="fit",Qt=-1,de=[];const se=new N,Ce=new N,F=new N;let Ct=!1,qt=[],le=-1/0;const It=new ST(s.duration,e.loop??!0),ye=new Jw,Kt=new Map(s.players.map(tt=>[tt.id,tt.role])),{applyAnim:L,cueAt:R}=MT(r,v.anims,Kt,v.bounces),J=AT(v.turns,s.players.map(tt=>[tt.id,tt.role==="keeper"?ze(tt.start,ot):0])),lt=J.heading,Mt=J.rateOf,ut=new Map(s.players.map(tt=>[tt.id,tt.start]));function ne(){const tt=new Set(a.children);return{built:vw({scene:a,drill:s,schedule:v,clips:r,headingAt:_t=>lt.get(_t)??0,search:e.search,pathM:w,pathWidthK:M,ballRadius:.11*p,goalScale:g}),owned:a.children.filter(_t=>!tt.has(_t))}}let Lt=ne();const ht={},dt={update:(tt,vt)=>Lt.built.update(tt,vt),set:tt=>{Object.assign(ht,tt),Lt.built.set(tt)}};function bt(){for(const tt of Lt.owned)a.remove(tt),pp(tt);Lt=ne(),Lt.built.set(ht)}const Vt=OT(),$t=[],re=WT(),Wt=()=>{re.reset(),Vt.reset()};It.onSeek(Wt),It.onLoop(Wt);const be=V1(It);function pe(){const tt=l();if(tt!==p){p=tt,_=d(p),Z=_.slice(h.length),g=Er(s,p),Zh(.35*p);for(const vt of Q.values())vt.root.scale.setScalar(p);for(const vt of it.values())vt.scale.setScalar(p);ct.scale.setScalar(p);for(const vt of at)vt.scale.setScalar(p);for(const vt of A)vt.scale.setScalar(p);for(const vt of C)cp(vt,p);for(const vt of S)vt.scale.setScalar(g);o.fitShadow(_),Wt()}Dt.resize(p,.11*p,o.size());for(const vt of et)vt.resize(p,.11*p,o.size());w=mc(x(yt.elev),o.camera,o.size().height,yt.elev,yt.az),bt(),o.rule.wake()}let ge=0;const K=o.onBox(()=>{ge||(ge=requestAnimationFrame(()=>{ge=0,pe()}))}),Ot=o.size();(Ot.width!==f.width||Ot.height!==f.height)&&pe();const rt=e.embed?null:new Map;e.embed||Object.assign(window,{__world:{byId:Q,heading:lt,camera:o.camera,ball:ct,spare:at,schedule:v,goals:S,bodyScale:p,lockDbg:rt},__pathMetrics:()=>({metresPerPx:w,widthK:M,runHalfM:1.6*w*M/2,passHalfM:2.2*w*M/2})});function gt(tt,vt=30,_t=.12,Tt=4,mt=1){const kt=[];for(const[W,V]of Q)V.root.traverse(q=>{q.isBone&&/foot/i.test(q.name)&&kt.push({id:W,name:q.name,bone:q})});It.pause(),It.seek(0);for(let W=0;W<90;W++)o.step(1/60);It.play();const Xt=1/vt,Gt=Math.min(tt??s.duration,s.duration),ue=Math.max(0,Math.round(Gt*vt)-1),At=kt.map(()=>[]),Te=new N;for(let W=0;W<=ue;W++){for(let V=0;V<kt.length;V++){const q=kt[V].bone.matrixWorld.elements;Te.set(q[12],q[13],q[14]);const k=Q.get(kt[V].id).root.worldToLocal(Te.clone());At[V].push([W*Xt,q[12],q[13],q[14],k.x,k.z])}o.step(Xt)}It.pause();const te=(W,V)=>{var q;return((q=R(W,V))==null?void 0:q.clip)??"idle"},E=[];return kt.forEach((W,V)=>{const q=(ft,xt)=>{if(xt-ft<Tt)return;const $=At[V].slice(ft,xt);let Rt=0,Pt=0;for(let St=1;St<$.length;St++)Rt=Math.max(Rt,Math.hypot($[St][1]-$[0][1],$[St][3]-$[0][3])),Pt+=Math.hypot($[St][4]-$[St-1][4],$[St][5]-$[St-1][5])/Xt;E.push({player:W.id,foot:W.name,t0:+$[0][0].toFixed(2),t1:+$[$.length-1][0].toFixed(2),drift:+Rt.toFixed(3),localSpeed:+(Pt/($.length-1)).toFixed(2),clip0:te(W.id,$[0][0]),clip1:te(W.id,$[$.length-1][0])})},k=At[V].map((ft,xt)=>xt===0?1/0:Math.hypot(ft[1]-At[V][xt-1][1],ft[3]-At[V][xt-1][3])/Xt);let st=-1;At[V].forEach((ft,xt)=>{const $=ft[2]<_t,Rt=xt>0&&te(W.id,ft[0])!==te(W.id,At[V][xt-1][0]),Pt=k[xt]>mt&&xt>0&&k[xt-1]>mt;st>=0&&(!$||Rt||Pt)&&(q(st,xt),st=-1),st<0&&$&&k[xt]<mt&&(st=xt)}),st>=0&&q(st,At[V].length)}),E.sort((W,V)=>V.drift-W.drift),{feet:kt.map(W=>({id:W.id,name:W.name})),hPlant:_t,fps:vt,phases:E}}e.embed||Object.assign(window,{__footAudit:gt}),e.embed&&o.rule.enable();const jt=new Map,Ht=new N;let fe=0;const D=e.sfx?G1(v.flights):[];let b=0;o.scene.add(a);const G=(tt,vt)=>{var Te,te,E,W;It.advance(tt);const _t=It.t,Tt=It.playing?tt:0,mt=v.attachTo(_t),kt=No({t:_t,holderId:mt,holderRoot:mt?ut.get(mt):null,holderHeading:mt?lt.get(mt):0,ballStart:ot,flights:v.flights,departures:v.departures,arrivals:v.arrivals}).pos;for(const V of s.players){const q=Q.get(V.id);let k=V.start,st=0;for(const ie of v.moves[V.id]??[])if(_t>=ie.t0){const xe=En(ie,_t);k=xe.pos,st=xe.speed}const ft=Dp(v.dives,v.moves[V.id],V.id,_t),xt=ft!==null;ft&&(k=ft),q.root.position.copy(I(k));const $=v.moves[V.id]??[],Rt=xt?0:vS($,_t);q.root.rotation.x=0,q.root.rotation.z=0,xt||(q.root.position.y-=AS($,_t)-iT(v.bounces,V.id,_t)*p),ut.set(V.id,k);let Pt=null,St=!1;for(const ie of v.faces)ie.player===V.id&&_t>=ie.t0&&(Pt=ie.until===void 0||_t<=ie.until?ie.at:null,ie.lock&&_t>=ie.lock[0]&&_t<=ie.lock[1]&&(St=!0));const Jt=Pt!==null&&Yi(k,Pt),ae=PS(k,kt,Jt,V.id===mt),ce=Jt?ze(k,Pt):ae??lt.get(V.id),{h:Ut,clipYaw:Yt}=J.step(V.id,_t,Tt,st,ce,St,!Jt&&ae!==null);q.root.rotation.y=ES(Ut,Yt),L(V.id,q,_t,Tt,st);const Ft=mh(q);if(Ft.length){const ie=re.tilt(V.id,xt?[0,0]:bS($,_t),lt.get(V.id),Rt,Tt);xd(q.root,Ft[0],ie.pitch,0,ie.roll)}const Ae=nS(q);if(Ae.length&&!xt){q.root.updateMatrixWorld(!0);for(let me=0;me<Ae.length;me++){const Oe=Ae[me].matrixWorld.elements;$t[me]=[Oe[12],Oe[13],Oe[14]]}$t.length=Ae.length;const ie=R(V.id,_t),xe=UT((ie==null?void 0:ie.clip)??null,ie?(Te=r.clips[ie.clip])==null?void 0:Te.category:void 0,FT($,_t)),[Ge,xn]=Vt.step(V.id,$t,[q.root.position.x,q.root.position.z],_t,Tt,xe,p);q.root.position.x+=Ge,q.root.position.z+=xn,rt&&rt.set(V.id,[xe?1:0,Math.hypot(Ge,xn),Vt.foot(V.id),st,Vt.rootSpeed(V.id)])}const ee=it.get(V.id);if(ee.position.x=q.root.position.x,ee.position.z=q.root.position.z,V.id===mt){const ie=U1(v.arrivals,V.id,_t),xe=ie>=0?iS(q)[ie]:void 0;if(xe){q.root.updateMatrixWorld(!0);const Ge=xe.matrixWorld.elements;Ht.set(Ge[12],Ge[13],Ge[14]),fe=sm(v.arrivals,v.departures,V.id,_t)}}}const Xt=No({t:_t,holderId:mt,holderRoot:mt?ut.get(mt):null,holderHeading:mt?lt.get(mt):0,ballStart:ot,flights:v.flights,departures:v.departures,arrivals:v.arrivals});ct.position.copy(I(Xt.pos,.11*p+Xt.height)),fe>0&&(ct.position.lerp(Ht,fe),fe=0),nt&&Dt.update({pos:ct.position,height:Xt.height,t:_t,dt:Tt,apex:Xt.apex,speed:Xt.speed,held:mt!==null&&O1(v.arrivals,v.departures,mt,_t)});for(let V=0;V<at.length;V++){const q=(te=s.balls)==null?void 0:te[V],k=q?v.ballSwaps.find(xt=>xt.take===V):v.ballSwaps[V-(((E=s.balls)==null?void 0:E.length)??0)],st=q?!(k&&_t>=k.t):_t>=k.t;if(at[V].visible=st,!st){et[V].hide();continue}let ft;q?q.carrier&&ut.has(q.carrier)?ft=Wn(ut.get(q.carrier),lt.get(q.carrier)??0):ft=Ep(q,_t):ft=k.drop,at[V].position.copy(I(ft,.11*p)),et[V].update({pos:at[V].position,height:0,t:_t,dt:Tt,held:!1,speed:0})}e.sfx&&(be(e.sfx,D,b,_t,It.playing,Xt.height,Xt.speed),b=_t),dt.update(_t,o.camera),O.update(_t);for(const V of s.players){const q=Q.get(V.id),k=eS(q);if(!k)continue;const st=HE(v.faces,V.id,_t),ft=st?I(st):ct.position,xt=TS(Math.atan2(ft.x-q.root.position.x,ft.z-q.root.position.z)-lt.get(V.id)+CS(Mt.get(V.id)??0)),$=jt.get(V.id)??0,Rt=Tt>0?$+(xt-$)*.3:$;jt.set(V.id,Rt);const Pt=mh(q),St=Pt.length>1?re.shoulder(V.id,Rt,Tt):0;Pt.length>1&&xd(q.root,Pt[1],0,St,0),qT(k,-(Rt-St))}const Gt=[...Q.values()].map(V=>new N(V.root.position.x,0,V.root.position.z)),ue=o.rule.snap()?1/0:tt,At=vt/1e3;if(Bt==="broadcast"){let V=-1/0;for(const k of v.departures)_t>=k.contact&&k.contact>V&&(V=k.contact);V!==le&&(le=V,qt=s.players.filter(k=>I(ut.get(k.id)??k.start).distanceTo(ct.position)<=kw).map(k=>k.id)),!Ct||ue===1/0?(F.copy(ct.position),Ct=!0):F.lerp(ct.position,zc(tt,Nw));const q=qt.length?qt.map(k=>{const st=Q.get(k);return new N((st==null?void 0:st.root.position.x)??0,0,(st==null?void 0:st.root.position.z)??0)}):Gt;yt.frame([...q,ct.position.clone()],ue,{now:At,lookAt:F.clone(),elevDeg:Uw,azDeg:Ow})}else{const[V,q]=Hw(_t);if(V!==Qt){Qt=V,de=[];const k=[];for(let st=V;st<=q+1e-9;st+=Hc){const ft=new Map;for(const Pt of s.players){let St=Pt.start;for(const ae of v.moves[Pt.id]??[])st>=ae.t0&&(St=En(ae,st).pos);ft.set(Pt.id,St);const Jt=I(St);de.push(new N(Jt.x,0,Jt.z)),Math.abs(Jt.x)<=s.pitch.width/2&&Math.abs(Jt.z)<=s.pitch.length/2&&k.push(new N(Jt.x,0,Jt.z))}const xt=v.attachTo(st),$=No({t:st,holderId:xt,holderRoot:xt?ft.get(xt)??null:null,holderHeading:xt?lt.get(xt)??0:0,ballStart:ot,flights:v.flights,departures:v.departures,arrivals:v.arrivals}),Rt=I($.pos);k.push(new N(Rt.x,0,Rt.z))}se.copy(jw(k,Ce))}Gt.push(...de),Gt.push(...c,...Z),yt.elevNow>=jd&&Gt.push(...y),yt.frame([...Gt,ct.position.clone()],ue,{now:At,breath:se})}ye.tick(vt),eR(!!e.embed,`t ${_t.toFixed(1)}s  fps ${ye.avg.toFixed(0)}
[space] play/pause  [r] restart`),(W=e.onFrame)==null||W.call(e,_t,vt)};o.start(G);const Y=tt=>{tt.code==="Space"&&(It.playing?It.pause():It.play()),tt.code==="KeyR"&&It.seek(0)};e.embed||addEventListener("keydown",Y);function z(tt){tt!==Bt&&(Bt=tt,U(!0),o.setSky(tt==="broadcast"),P(tt==="broadcast"),Ct=!1,le=-1/0,o.rule.wake())}function pt(tt,vt=yt.az){tt===yt.elev&&vt===yt.az||(yt.setElev(tt),yt.setAz(vt),w=mc(x(tt),o.camera,o.size().height,tt,vt),M=Kd(tt),bt(),o.rule.wake())}return Ii.build=performance.now()-n-Ii.clips-Ii.schedule,{timeline:It,step:tt=>o.step(tt),stage:o,overlays:dt,setCamera:pt,setFollow:z,setPushIn:tt=>yt.armPushIn(tt,performance.now()/1e3),dispose(){removeEventListener("keydown",Y),K(),ge&&(cancelAnimationFrame(ge),ge=0),o.scene.remove(a),fp(a,[...X.map(tt=>tt.root),ct,...at,...S]),B==null||B.dispose(),o.setFog(null),o.setHorizon(null),o.setSky(!0),e.stage?o.park(G):o.dispose()}}}const tf="6d76843a",ym=24,cR=/^[\w-]+$/,lR=async i=>await(await fetch(Tn(`drills/${i}.json`))).json();class uR{constructor(t=lR,e=null,n=ym){Pe(this,"mem",new Map);Pe(this,"inflight",new Map);this.fetchJson=t,this.db=e,this.cap=n}keys(){return[...this.mem.keys()]}get size(){return this.mem.size}peek(t){const e=this.mem.get(t);return e===void 0?null:(this.mem.delete(t),this.mem.set(t,e),e)}put(t,e){const s=this.mem.get(t)??{json:e,schedules:new Map};s.json=e,this.mem.delete(t),this.mem.set(t,s);for(const r of this.mem.keys()){if(this.mem.size<=this.cap)break;this.mem.delete(r)}return s}async take(t){const e=this.peek(t);if(e)return e;let n=this.inflight.get(t);return n||(n=this.miss(t).finally(()=>this.inflight.delete(t)),this.inflight.set(t,n)),n}async miss(t){var r;const e=this.db?await this.db.read(t).catch(()=>null):null;if(e&&e.build===tf)return this.put(t,e.json);const n=await this.fetchJson(t),s=this.put(t,n);return(r=this.db)==null||r.write(t,{build:tf,json:n}).catch(()=>{}),s}async warm(t){const e=t.filter(n=>typeof n=="string"&&cR.test(n)).slice(0,this.cap);for(const n of e)try{await this.take(n)}catch{}for(const n of[...e].reverse())this.peek(n)}}const hR="tactivo-engine",Wi="drills",ef=i=>new Promise((t,e)=>{i.onsuccess=()=>t(i.result),i.onerror=()=>e(i.error)});function dR(){try{return globalThis.indexedDB}catch{return}}function fR(i=dR()){if(!i)return null;let t=null;const e=()=>t??(t=new Promise((n,s)=>{const r=i.open(hR,2);r.onupgradeneeded=()=>{r.result.objectStoreNames.contains(Wi)&&r.result.deleteObjectStore(Wi),r.result.createObjectStore(Wi)},r.onsuccess=()=>n(r.result),r.onerror=()=>s(r.error),r.onblocked=()=>s(new Error("blocked"))}).catch(n=>{throw t=null,n}));return{async read(n){try{const r=(await e()).transaction(Wi,"readonly").objectStore(Wi);return await ef(r.get(n))??null}catch{return null}},async write(n,s){try{const r=await e();await ef(r.transaction(Wi,"readwrite").objectStore(Wi).put(s,n))}catch{}}}}const Vc=["plain","stripes","hoops","halves","sash","sleeves"],pR="#FFFFFF",gc=/^#[0-9a-fA-F]{6}$/;function nf(i){if(typeof i!="object"||i===null)return je("kit: must be {a, pattern?, b?, shorts?, socks?}");const t=i;if(typeof t.a!="string"||!gc.test(t.a))return je("kit: a must be a #RRGGBB colour");if(t.b!==void 0&&(typeof t.b!="string"||!gc.test(t.b)))return je("kit: b must be a #RRGGBB colour");if(t.pattern!==void 0&&(typeof t.pattern!="string"||!Vc.includes(t.pattern)))return je(`kit: pattern must be one of ${Vc.join(", ")}`);for(const e of["shorts","socks"])if(t[e]!==void 0&&t[e]!==null&&(typeof t[e]!="string"||!gc.test(t[e])))return je(`kit: ${e} must be a #RRGGBB colour or absent`);return{a:t.a,pattern:t.pattern??"plain",b:t.b??pR,...typeof t.shorts=="string"?{shorts:t.shorts}:{},...typeof t.socks=="string"?{socks:t.socks}:{}}}const sf=["boys","girls","mixed"],Al="mixed";function rf(i){return i==null?Al:typeof i!="string"||!sf.includes(i)?je(`squad: must be one of ${sf.join(", ")}`):i}const of=["shirt","full"],aa="shirt";function af(i){return i==null?aa:typeof i!="string"||!of.includes(i)?je(`framing: must be one of ${of.join(", ")}`):i}const cf=new Set(["fit","broadcast"]),El=.5,mR=5,gR={phase:"idle",playing:!1,loop:!0,duration:0,seq:0,lastTimeMs:-1/0,narration:[],cue:-1,intro:null,holdUntilMs:null,hookCeilingMs:0,introSkip:!1},_R=100,$o=1/0,bR=2e3,_c=/^[\w-]+$/,xR=/^[A-Za-z0-9_./-]{1,80}$/,vR=i=>xR.test(i)&&!i.includes(".."),yR=30,MR=85,SR=i=>Math.min(Math.max(i,yR),MR),es=i=>({state:i,effects:[],out:[]}),Uo=(i,t,e)=>({state:i,effects:[],out:[{type:"error",code:t,message:e}]}),AR=new Set(["auto","authored","off"]),ER=new Set(["hello","ready","time","looped","ended","error","paused","playing","cue","audio","statsReply"]);function TR(i){return Array.isArray(i)?i.map(t=>{const e=t,n=typeof(e==null?void 0:e.text)=="string"&&e.text!==""?e.text:null,s=typeof(e==null?void 0:e.t)=="number"&&Number.isFinite(e.t)?e.t:1/0,r=e==null?void 0:e.hold,o=typeof r=="number"&&Number.isFinite(r)&&r>0?Mm(r):0,a=typeof(e==null?void 0:e.beat)=="string"?e.beat:void 0;return{t:n===null?1/0:s,text:n,hold:o,...a?{beat:a}:{}}}):[]}const Mm=i=>Math.min(Math.max(i,El),mR);function Sm(i,t){let e=-1;for(let n=0;n<i.length;n++)i[n].t<=t&&(e=n);return e}const Tl=(i,t)=>{var e;return((e=i[t])==null?void 0:e.hold)??0},wl=(i,t)=>{var n;const e=Tl(i,t);return{type:"cue",index:t,text:((n=i[t])==null?void 0:n.text)??null,...e>0?{hold:e}:{}}},je=i=>({error:i,code:"bad_message"});function wR(i){if(typeof i!="object"||i===null)return null;const t=i;if(typeof t.type!="string"||ER.has(t.type))return null;switch(t.type){case"load":{const e=t.drill;if(typeof e!="object"||e===null)return je("load: drill must be a DrillScene3D object or {key}");if(t.loop!==void 0&&typeof t.loop!="boolean")return je("load: loop must be a boolean");const n=e;if("key"in n&&Object.keys(n).length===1&&(typeof n.key!="string"||!_c.test(n.key)))return{error:`load: key must match ${_c.source}`,code:"bad_key"};let s;if(t.intro!==void 0){const a=t.intro;if(typeof a!="object"||a===null)return je("load: intro must be {text, hold}");if(typeof a.text!="string"||a.text==="")return je("load: intro.text must be a non-empty string");if(typeof a.hold!="number"||!Number.isFinite(a.hold))return je("load: intro.hold must be a finite number");s={text:a.text,hold:Mm(a.hold)}}let r;if(t.kit!==void 0){const a=nf(t.kit);if("error"in a)return a;r=a}const o=rf(t.squad);return typeof o!="string"?o:{type:"load",drill:e,loop:t.loop!==!1,...s?{intro:s}:{},...r?{kit:r}:{},...t.squad!==void 0&&t.squad!==null?{squad:o}:{}}}case"preview":case"kit":{const e=nf(t.type==="preview"?t.kit:t);if("error"in e)return e;if(t.type==="kit")return{type:"kit",kit:e};const n=af(t.framing);if(typeof n!="string")return n;const s=rf(t.squad);return typeof s!="string"?s:{type:"preview",kit:e,framing:n,squad:s}}case"frame":{const e=af(t.framing);return typeof e!="string"?e:{type:"frame",framing:e}}case"play":case"pause":case"dispose":case"stats":case"unload":return{type:t.type};case"setAudio":{if(typeof t.enabled!="boolean")return je("setAudio: enabled must be a boolean");const e=t.musicGain,n=t.track;return{type:"setAudio",enabled:t.enabled,...typeof t.sfx=="boolean"?{sfx:t.sfx}:{},...typeof t.music=="boolean"?{music:t.music}:{},...typeof e=="number"&&Number.isFinite(e)&&e>=0&&e<=1?{musicGain:e}:{},...typeof n=="string"&&vR(n)?{track:n}:{}}}case"warm":return Array.isArray(t.keys)?{type:"warm",keys:t.keys.filter(e=>typeof e=="string"&&_c.test(e)).slice(0,ym)}:je("warm: keys must be an array of drill keys");case"seek":return typeof t.t!="number"||!Number.isFinite(t.t)?je("seek: t must be a finite number"):{type:"seek",t:t.t};case"setSpeed":return typeof t.x!="number"||!Number.isFinite(t.x)||t.x<=0?je("setSpeed: x must be a finite number > 0"):{type:"setSpeed",x:t.x};case"setCamera":return t.elev!==void 0?typeof t.elev!="number"||!Number.isFinite(t.elev)?je("setCamera: elev must be a finite number"):t.az!==void 0&&(typeof t.az!="number"||!Number.isFinite(t.az))?je("setCamera: az must be a finite number"):{type:"setCamera",elev:t.elev,...t.az!==void 0?{az:t.az}:{}}:t.follow!==void 0?typeof t.follow!="string"||!cf.has(t.follow)?je(`setCamera: follow must be one of ${[...cf].join(", ")}`):{type:"setCamera",follow:t.follow}:typeof t.mode!="string"?je("setCamera: mode must be a string, or elev a number"):{type:"setCamera",mode:t.mode};case"setOverlays":{const e={type:"setOverlays"};for(const n of["trail","highlight","zones"])if(t[n]!==void 0){if(typeof t[n]!="boolean")return je(`setOverlays: ${n} must be a boolean`);e[n]=t[n]}if(t.runPaths!==void 0){if(typeof t.runPaths!="string"||!AR.has(t.runPaths))return je("setOverlays: runPaths must be auto|authored|off");e.runPaths=t.runPaths}return e}default:return je(`unknown message type: ${t.type}`)}}function RR(i,t,e=0){if(t.type==="load"){const s=i.seq+1,r="key"in t.drill&&typeof t.drill.key=="string"&&Object.keys(t.drill).length===1?{key:t.drill.key}:{json:t.drill};return{state:{...i,phase:"loading",playing:!1,loop:t.loop,duration:0,seq:s,narration:[],cue:-1,intro:t.intro??null,holdUntilMs:null,introSkip:!1},effects:[...i.phase==="idle"?[]:[{kind:"dispose"}],{kind:"load",seq:s,source:r,loop:t.loop,...t.kit?{kit:t.kit}:{},...t.squad?{squad:t.squad}:{}}],out:[]}}if(t.type==="preview"){const s=i.seq+1;return{state:{...i,phase:"loading",playing:!1,duration:0,seq:s,narration:[],cue:-1,intro:null,holdUntilMs:null,introSkip:!1},effects:[...i.phase==="idle"?[]:[{kind:"dispose"}],{kind:"preview",seq:s,kit:t.kit,framing:t.framing??aa,squad:t.squad??Al}],out:[]}}if(t.type==="kit")return{state:i,effects:[{kind:"setKit",kit:t.kit}],out:[]};if(t.type==="frame")return{state:i,effects:[{kind:"setFraming",framing:t.framing}],out:[]};if(t.type==="stats")return{state:i,effects:[{kind:"stats"}],out:[]};if(t.type==="warm")return{state:i,effects:[{kind:"warm",keys:t.keys}],out:[]};if(t.type==="setAudio"){const{type:s,...r}=t;return{state:i,effects:[{kind:"setAudio",...r}],out:[]}}if(t.type==="dispose")return{state:{...i,phase:"idle",playing:!1,duration:0,seq:i.seq+1,narration:[],cue:-1,intro:null,holdUntilMs:null,introSkip:!1},effects:[{kind:"dispose"}],out:[]};if(t.type==="unload")return i.phase==="idle"?es(i):{state:{...i,phase:"idle",playing:!1,duration:0,seq:i.seq+1,narration:[],cue:-1,intro:null,holdUntilMs:null,introSkip:!1},effects:[{kind:"unload"}],out:[]};if(i.phase==="idle")return Uo(i,"not_loaded",`${t.type}: no drill loaded`);if(i.phase==="loading")return Uo(i,"still_loading",`${t.type}: still loading`);const n=i.holdUntilMs!==null;switch(t.type){case"play":return{state:{...i,playing:!0},effects:n?[]:[{kind:"play"}],out:[{type:"playing",t:e}]};case"pause":return{state:{...i,playing:!1,holdUntilMs:null},effects:[{kind:"pause"}],out:[{type:"paused",t:e}]};case"seek":return{state:{...i,holdUntilMs:null},effects:[{kind:"seek",t:Math.min(Math.max(t.t,0),i.duration)},...n?[{kind:"hold",on:!1}]:[]],out:[]};case"setSpeed":return{state:{...i,holdUntilMs:null},effects:[{kind:"setSpeed",x:t.x},...n?[{kind:"hold",on:!1}]:[]],out:[]};case"setCamera":return"follow"in t?{state:i,effects:[{kind:"setFollow",follow:t.follow}],out:[]}:"elev"in t?{state:i,effects:[{kind:"setCamera",elev:SR(t.elev),...t.az!==void 0?{az:t.az}:{}}],out:[]}:t.mode==="tactical"?es(i):Uo(i,"bad_camera",`setCamera: unknown mode ${t.mode} (only tactical)`);case"setOverlays":{const{type:s,...r}=t;return{state:i,effects:[{kind:"setOverlays",flags:r}],out:[]}}}}function ji(i,t,e=0){switch(t.kind){case"loaded":if(t.seq!==i.seq||i.phase!=="loading")return es(i);{const n=t.narration??[],s=typeof t.hookHold=="number"&&Number.isFinite(t.hookHold),r=t.voiced&&!s?null:i.intro,o=r?-1:Sm(n,0),a=r?s?Math.max(t.hookHold,El):r.hold:0,c=r?a:Tl(n,o),u=s?$o:c>0?e+c*1e3:null,h={type:"ready",duration:t.duration,...t.key!==void 0?{key:t.key}:{}};return{state:{...i,phase:"ready",duration:t.duration,narration:n,cue:o,intro:null,holdUntilMs:u,hookCeilingMs:s?e+t.hookHold*1e3+bR:0,introSkip:r!==null},effects:u!==null?[{kind:"hold",on:!0}]:[],out:[h,r?{type:"cue",index:-1,text:r.text,hold:a}:wl(n,o)]}}case"loadFailed":return t.seq!==i.seq||i.phase!=="loading"?es(i):Uo({...i,phase:"idle",playing:!1,intro:null,holdUntilMs:null,introSkip:!1},"load_failed",`load failed: ${t.message}`);case"hookEnded":return i.holdUntilMs!==$o?es(i):{state:{...i,holdUntilMs:null},effects:[{kind:"hold",on:!1}],out:[]};case"looped":return{state:i,effects:[],out:[{type:"looped",n:t.n}]};case"ended":return{state:{...i,playing:!1},effects:[],out:[{type:"ended",t:t.t}]}}}function CR(i,t,e){if(i.holdUntilMs!==null){const c=i.holdUntilMs===$o?i.hookCeilingMs:i.holdUntilMs;return e<c?es(i):{state:{...i,holdUntilMs:null},effects:[{kind:"hold",on:!1}],out:[]}}const n=Sm(i.narration,t),s=i.playing&&e-i.lastTimeMs>=_R;if(n===i.cue&&!s)return es(i);const r=n!==i.cue,o=r&&i.introSkip&&n===0,a=r&&!o?Tl(i.narration,n):0;return{state:{...i,cue:n,...r?{introSkip:!1}:{},...s?{lastTimeMs:e}:{},...a>0?{holdUntilMs:e+a*1e3}:{}},effects:a>0?[{kind:"hold",on:!0}]:[],out:[...n!==i.cue?[wl(i.narration,n)]:[],...s?[{type:"time",t}]:[]]}}const lf="Shirt Soccer Man B",IR={boys:lf,mixed:lf,girls:"Shirt Soccer Woman B"},PR="10",uf=12,LR=23.9,DR=32,FR=4,Us={shirt:{top:1.0545,bottom:.5073,fill:.88},full:{top:1.0132,bottom:-.1535,fill:.92}},NR=.35,UR=Us.shirt.top,OR=Us.shirt.bottom;Us.shirt.fill;const Rs=.62,hf=.09,kR=724752,bc=90,BR=.014,GR=.5,xc=[2.6,5],df=1.15,Cs=.14,vc=.1,zR=.26,HR=.02,VR=["idle_relaxed_a","idle_a","idle_b"];async function WR(i,t,e={}){const n=e.stage??Qo(i),s=n.scene,r=new fn,o=s.children.find(F=>F.isDirectionalLight),a=s.children.find(F=>F.isHemisphereLight),c={background:s.background,fog:s.fog,sun:o&&{position:o.position.clone(),intensity:o.intensity,colour:o.color.clone(),normalBias:o.shadow.normalBias},hemi:a&&{sky:a.color.clone(),ground:a.groundColor.clone(),intensity:a.intensity}};s.background=new he(kR),s.fog=null,o&&(o.position.set(-3.2,4.4,3.6),o.color.set(16773856),o.intensity=3.2,o.shadow.normalBias=.02),a&&(a.color.set(10466248),a.groundColor.set(724752),a.intensity=.7);const u=new rl(12374240,1.35);u.position.set(2.8,2.2,-3.4),r.add(u,u.target);const h=new $g(9082530,1.35);r.add(h);const l=new Re(new Sr(Rs,Rs*1.04,hf,48),new Ni({color:1448991,roughness:.85,metalness:0}));l.position.y=-hf/2,l.receiveShadow=!0,r.add(l);const d=await rS(e.material??IR[e.squad??Al]),[f]=await ta(r,1,void 0,void 0,Math.max(d,0));f.root.traverse(F=>{F.castShadow=F.type==="SkinnedMesh"});let p=await yp([...Vc],vp(f),e.maskDeps);const _=await Mp(e.maskDeps),g={label:PR,boxes:_};let m=Nc(f,t,p,g),v=null;const y=VR.find(F=>f.clips.has(F))??[...f.clips.keys()][0],x=y?f.mixer.clipAction(f.clips.get(y)):null;x==null||x.play(),s.add(r),f.mixer.update(1/60),f.root.updateWorldMatrix(!0,!0);const w=new cn().setFromObject(f.root,!0),M=Math.max(.5,w.max.y-w.min.y),T={fov:n.camera.fov,near:n.camera.near,far:n.camera.far},I=n.camera;I.fov=LR,I.near=.1,I.far=60;const S=new N(0,w.min.y+M*(UR+OR)/2,0);let A=aa,C=Us[A],U=C,P=1;const O=F=>1-(1-F)**3;function Z(){const F=P>=1?1:O(P),Ct=R=>F>=1?U[R]:C[R]+(U[R]-C[R])*F,qt=Ct("top"),le=Ct("bottom");S.y=w.min.y+M*(qt+le)/2;const ye=M*(qt-le)/Ct("fill")/2/Math.tan(I.fov*Math.PI/360),Kt=DR*Math.PI/180,L=FR*Math.PI/180;I.position.set(Math.sin(Kt)*Math.cos(L)*ye,S.y+Math.sin(L)*ye,Math.cos(Kt)*Math.cos(L)*ye),I.lookAt(S),I.updateProjectionMatrix()}Z(),n.fitShadow([new N(-Rs,0,-Rs),new N(Rs,M,Rs)]),n.setSky(!1);const H=n.onBox(Z);I.updateMatrixWorld(!0);const X=new N(0,S.y+M*.22,0),B=new Float32Array(bc*3),j=new N,Q=new N,it=new Wf(I.position,X),ct=new N,Dt=Math.tan(I.fov*Math.PI/360),nt=Dt*I.aspect,ot=I.position.distanceTo(new N(0,S.y,0)),at=F=>{for(const Ct of[-Cs,Cs])for(const qt of[-vc,vc])for(const le of[-Cs,Cs])if(Q.set(F.x+Ct,F.y+qt,F.z+le),Q.y<.03||Q.distanceTo(I.position)<ot+HR||(it.closestPointToPoint(Q,!0,ct),ct.distanceTo(Q)<zR))return!1;return!0};for(let F=0,Ct=0;F<bc&&Ct<bc*40;Ct++){const qt=xc[0]+Math.random()*(xc[1]-xc[0]);j.set((Math.random()*2-1)*nt*qt*df,(Math.random()*2-1)*Dt*qt*df,-qt).applyMatrix4(I.matrixWorld),at(j)&&(j.toArray(B,F*3),F++)}const et=new Uf(new Xe().setAttribute("position",new De(B,3)),new Qc({color:Fi,size:BR,transparent:!0,opacity:GR,depthWrite:!1}));r.add(et),e.framing&&e.framing!==A&&(A=e.framing,C=U=Us[A],Z());let yt=t,Bt=0;function Qt(F){Bt=(F%1+1)%1,f.root.rotation.y=Bt*Math.PI*2,l.rotation.y=f.root.rotation.y}let de=0;function se(F){var Ct;Qt(Bt+F/uf),de+=F,et.position.set(Math.sin(de*.043)*Cs,Math.sin(de*.4)*vc,Math.sin(de*.031)*Cs),P<1&&(P=Math.min(1,P+F/NR),Z()),v&&(v.at+=F/gS,xh(v.mats,v.at)>=1&&(v=null)),f.mixer.update(F),(Ct=e.onFrame)==null||Ct.call(e,Bt*uf,performance.now())}const Ce=F=>se(F);return e.embed&&n.rule.enable(),n.start(Ce),n.rule.play(),{stage:n,step:se,setTurn:Qt,get framing(){return A},setFraming(F){if(F===A)return;const Ct=P>=1?1:O(P),qt=le=>Ct>=1?U[le]:C[le]+(U[le]-C[le])*Ct;C={top:qt("top"),bottom:qt("bottom"),fill:qt("fill")},A=F,U=Us[F],P=0,n.rule.wake()},async setKit(F){const Ct=yt;yt=F,m=Nc(f,F,p,{...g,from:Ct}),v={at:0,mats:m},xh(m,0),n.rule.wake()},dispose(){H(),s.remove(r),f.mixer.stopAllAction(),fp(r,[f.root]),p==null||p.dispose(),s.background=c.background,s.fog=c.fog,o&&c.sun&&(o.position.copy(c.sun.position),o.intensity=c.sun.intensity,o.color.copy(c.sun.colour),o.shadow.normalBias=c.sun.normalBias),a&&c.hemi&&(a.color.copy(c.hemi.sky),a.groundColor.copy(c.hemi.ground),a.intensity=c.hemi.intensity),Object.assign(I,T),I.updateProjectionMatrix(),e.stage?n.park(Ce):n.dispose()}}}const Am="assets/narration/",jR=new Set(["progression","why"]),ff=i=>Math.round(i*100)/100,Di=1;function XR(i,t,e){const n=t.map((h,l)=>({l:h,index:l})).filter(h=>h.l.beat==="take");if(n.length){const h=i?e[i]:void 0,l=typeof h=="number"&&Number.isFinite(h)&&h>0,d=l?h/Di:0,f=n.map(y=>(y.l.text??"").length),p=f.reduce((y,x)=>y+x,0)||1,_=[];let g=0;for(const y of f)_.push(ff(g/p*d)),g+=y;const m=t.map((y,x)=>({index:x,clip:null,hold:y.hold??0,tail:!1}));l&&n.forEach((y,x)=>{const w=x+1<n.length?_[x+1]:d;m[y.index]={index:y.index,clip:x===0?i:null,hold:ff(w-_[x]),tail:!1,...x>0?{at:_[x]}:{}}});const v=l?m[n[0].index]:null;return{lines:m,hook:null,tail:[],queue:v?[v]:[],script:v?[i]:[],hasAudio:l,take:!0}}let s=0,r=-1;const o=[],a=t.map((h,l)=>{const d=h.beat==="action"?`action-${++s}`:h.beat,f=i&&d?`${i}-${d}`:null,p=f?e[f]:void 0,_=typeof p=="number"&&Number.isFinite(p)&&p>0?f:null,g={index:l,clip:_,hold:_?p/Di:h.hold??0,tail:jR.has(h.beat??"")};return h.beat==="hook"?r=l:g.tail&&o.push(g),g}),c=r<0?null:a[r],u=a.filter(h=>h!==c&&h.clip!==null);return{lines:a,hook:c,tail:o,queue:u,script:[...c!=null&&c.clip?[c.clip]:[],...u.map(h=>h.clip)],hasAudio:a.some(h=>h.clip!==null),take:!1}}async function qR(i=Tn(Am)){try{const t=await fetch(`${i}index.json`);if(!t.ok)return{};const e=await t.json();return e&&typeof e=="object"?e:{}}catch{return{}}}const KR=.0056,$R=.01;function YR(i){const t=i.length,e=i.sampleRate,n=Math.max(1,Math.round(e*$R)),s=[];for(let c=0;c<i.numberOfChannels;c++)s.push(i.getChannelData(c));const r=c=>{const u=Math.min(c+n,t);let h=0,l=0;for(const d of s)for(let f=c;f<u;f++)h+=d[f]*d[f],l++;return l>0&&Math.sqrt(h/l)>KR};let o=-1,a=-1;for(let c=0;c<t;c+=n)if(r(c)){o=c;break}if(o<0)return{lead:0,tail:0,end:t/e};for(let c=Math.floor((t-1)/n)*n;c>=0;c-=n)if(r(c)){a=Math.min(c+n,t);break}return{lead:o/e,tail:Math.max((t-a)/e,0),end:a/e}}function pf(i,t,e){return t&&e?Math.max(i-(e.lead+e.tail)/Di,0):i}function ZR(i,t,e){if(!e)return i.hold;const n=i.at===void 0?e.lead:0;return Math.max(i.hold-(n+(t?e.tail:0))/Di,0)}const JR=40,QR=3,tC=.75,Wc="data:audio/wav;base64,UklGRiwAAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQgAAACAgICAgICAgA==";class eC{constructor(t=Tn(Am),e=n=>new Audio(n)){Pe(this,"blocked",!1);Pe(this,"shared",null);Pe(this,"srcNow","");Pe(this,"unlocked",!1);Pe(this,"el",null);Pe(this,"finish",null);Pe(this,"held",new Map);Pe(this,"inflight",new Map);Pe(this,"trims",new Map);Pe(this,"ctx",null);Pe(this,"noCtx",!1);Pe(this,"gen",0);Pe(this,"walks",0);Pe(this,"playing",null);Pe(this,"playGen",0);Pe(this,"arm",null);Pe(this,"onTrim",null);Pe(this,"onStarted",null);this.dir=t,this.make=e}fetched(){return[...this.held.keys()]}open(t){var n;if(!this.shared)return this.shared=this.make(t),this.srcNow=t,this.shared;const e=this.shared;if(this.srcNow!==t){this.srcNow=t;try{e.src=t}catch{}try{(n=e.load)==null||n.call(e)}catch{}}return e}unlock(){if(!this.unlocked&&(this.unlocked=!0,this.blocked=!1,this.playing===null))try{const t=this.open(Wc);Promise.resolve(t.play()).then(()=>{if(this.playing===null)try{t.pause()}catch{}}).catch(()=>{})}catch{}}newGeneration(){this.gen++}trim(t){return this.trims.get(t)}remaining(t){const e=this.el;if(!e||this.playing!==t)return;const n=this.trims.get(t),s=n&&n.tail>0?Math.min(n.end,e.duration):e.duration;if(Number.isFinite(s))return Math.max((s-(e.currentTime||0))/(e.playbackRate||1),0)}closeCtx(){const t=this.ctx;this.ctx=null;try{Promise.resolve(t==null?void 0:t.close()).catch(()=>{})}catch{}}async measure(t,e){var n,s;if(!(this.trims.has(t)||this.noCtx))try{if(!this.ctx){const a=globalThis,c=a.AudioContext??a.webkitAudioContext;if(!c){this.noCtx=!0;return}this.ctx=new c}const r=await this.ctx.decodeAudioData((await e.arrayBuffer()).slice(0));if(!r)return;const o=YR(r);this.trims.set(t,o),this.playing===t&&((n=this.arm)==null||n.call(this,o),(s=this.onTrim)==null||s.call(this,t,o))}catch{}}touch(t){const e=this.held.get(t);if(e!==void 0)return this.held.delete(t),this.held.set(t,e),e}async prefetch(t){if(this.touch(t)!==void 0||this.inflight.has(t))return;const e=this.pull(t);this.inflight.set(t,e);try{await e}finally{this.inflight.delete(t)}}async pull(t){try{const e=await fetch(`${this.dir}${t}.m4a`);if(!e.ok)return;const n=await e.blob(),s=URL.createObjectURL(n);this.held.set(t,s),await this.measure(t,n);for(const r of[...this.held.keys()]){if(this.held.size<=JR)break;if(r===this.playing)continue;const o=this.held.get(r);this.held.delete(r);try{URL.revokeObjectURL(o)}catch{}}}catch{}}async prefetchAll(t){const e=this.gen;this.walks++;try{for(const n of t){if(e!==this.gen)return;await this.prefetch(n)}}finally{this.walks--}this.walks===0&&this.inflight.size===0&&this.closeCtx()}play(t,e=0,n=0){if(!this.held.has(t)&&this.inflight.has(t)){this.stop();const s=this.playGen;return this.waitHeld(t).then(()=>s===this.playGen?this.start(t,e,n):void 0)}return this.start(t,e,n)}waitHeld(t){const e=this.inflight.get(t);if(!e)return Promise.resolve();let n;return Promise.race([e.catch(()=>{}),new Promise(s=>{n=setTimeout(s,tC*1e3)})]).then(()=>{n!==void 0&&clearTimeout(n)})}start(t,e,n){this.stop();let s;try{s=this.open(this.touch(t)??`${this.dir}${t}.m4a`)}catch{return Promise.resolve()}try{s.preservesPitch=!0,s.webkitPreservesPitch=!0,s.playbackRate=Di}catch{}try{s.currentTime=n}catch{}this.el=s;const r=this.trims.get(t);return new Promise(o=>{let a,c,u=()=>{},h,l,d,f,p;const _=(M,T)=>{if(T)try{s.removeEventListener(M,T)}catch{}},g=()=>{a!==void 0&&(clearTimeout(a),a=void 0),c!==void 0&&(clearTimeout(c),c=void 0),_("timeupdate",h),h=void 0,_("playing",l),l=void 0,_("loadedmetadata",d),d=void 0,_("playing",f),f=void 0,_("timeupdate",p),p=void 0,_("ended",g),_("error",g),this.el===s&&(this.el=null,this.finish=null,this.arm=null,this.playing=null),o()};this.finish=g,s.addEventListener("ended",g),s.addEventListener("error",g);let m=!1;const v=M=>{if(m||!(M.lead>0||M.tail>0))return;m=!0;const T=()=>{if(M.lead>s.currentTime)try{s.currentTime=M.lead}catch{}const I=Math.min(M.end,s.duration);if(!(M.tail>0)||!Number.isFinite(I)||I<=0)return;let S=-1;const A=()=>{if(s.currentTime>S&&s.currentTime<I){C();return}try{s.pause()}catch{}g()},C=()=>{a!==void 0&&clearTimeout(a),S=s.currentTime||0;const U=(I-S)/(s.playbackRate||1);a=setTimeout(A,Math.max(U,0)*1e3)};h=()=>{s.currentTime>=I?A():s.currentTime>0&&C()},s.addEventListener("timeupdate",h),l=()=>{C(),u()},s.addEventListener("playing",l),C()};(s.readyState??0)>=1?T():(d=T,s.addEventListener("loadedmetadata",d))};this.playing=t,this.arm=v,r&&v(r);{const M=Number.isFinite(s.duration)&&s.duration>0?s.duration:e;if(M>0){let T=-1;const I=()=>{if(s.currentTime>T){u();return}try{s.pause()}catch{}g()};u=()=>{c!==void 0&&clearTimeout(c),T=s.currentTime||0;const S=Math.max(M-T,0)/(s.playbackRate||1);c=setTimeout(I,(S+QR)*1e3)},u()}}let y=!1;const x=()=>{var M;y||(y=!0,_("playing",f),f=void 0,_("timeupdate",p),p=void 0,this.el===s&&((M=this.onStarted)==null||M.call(this,t)))};f=x,p=()=>{(s.currentTime||0)>0&&x()};let w=!1;try{s.addEventListener("playing",f),s.addEventListener("timeupdate",p),w=!0}catch{}w||(f=void 0,p=void 0);try{Promise.resolve(s.play()).catch(()=>{this.blocked=!0,g()})}catch{this.blocked=!0,g()}w||x()})}stop(){this.playGen++;const t=this.el,e=this.finish;this.el=null,this.finish=null,this.playing=null,this.arm=null;try{t==null||t.pause()}catch{}e==null||e()}}const nC="assets/sfx/",iC=.9,sC=.35,rC=.45,oC=.06,aC=["kick-soft-1","kick-soft-2","kick-soft-3"],cC=["kick-hard-1","kick-hard-2"],yc=.3,lC=6,uC=.25,mf=.04,hC=.001,gf=.125,jc=400,dC=jc/3e3,_f=25,fC=.5;function pC(i){if(!(i>yc))return 0;const t=(i-yc)/(lC-yc);return uC*Math.min(t,1)}function Em(){const i=globalThis,t=i.AudioContext??i.webkitAudioContext;return t?new t:null}function mC(i){const t=i.dir,e=i.make??(P=>new Audio(P)),n=i.now??(()=>Date.now()),s=i.random??Math.random,r=i.makeCtx??Em,o=new Map,a=new Map,c=new Map;let u=null,h=!1,l=!1,d=!1,f=!1,p=!1,_=0,g=0,m;function v(P,O){const Z=o.get(P);if(Z)return Z;if(f)return null;let H;try{H=e(`${t}${P}.mp3`)}catch{return null}try{H.loop=O,H.volume=0}catch{}return o.set(P,H),x(P,H),H}function y(){var P;if(!(u||h)){try{u=r()}catch{u=null}if(!u){h=!0;return}try{Promise.resolve((P=u.resume)==null?void 0:P.call(u)).catch(()=>{})}catch{}}}function x(P,O){if(u)try{const Z=u.createGain();Z.gain.value=0,u.createMediaElementSource(O).connect(Z),Z.connect(u.destination),a.set(P,Z);try{O.volume=1}catch{}}catch{}}function w(P){try{Promise.resolve(P.play()).catch(()=>{d=!0})}catch{d=!0}}function M(P){try{P==null||P.pause()}catch{}}function T(P,O,Z,H=0){const X=Math.max(0,Math.min(1,Z)),B=a.get(P);if(!B||!u){try{O.volume=X}catch{}return}try{const j=u.currentTime,Q=B.gain;Q.cancelScheduledValues(j),H>0?(Q.setValueAtTime(Q.value,j),Q.setTargetAtTime(X,j,H)):Q.setValueAtTime(X,j)}catch{}}function I(P,O){let Z=Math.min(Math.floor(s()*O.length),O.length-1);return O.length>1&&O[Z]===c.get(P)&&(Z=(Z+1)%O.length),c.set(P,O[Z]),O[Z]}function S(P,O,Z=1){if(!l)return;const H=v(P,!1);if(H){T(P,H,O);try{Z!==1&&(H.preservesPitch=!1,H.webkitPreservesPitch=!1),H.playbackRate=Z}catch{}try{H.currentTime=0}catch{}w(H)}}function A(){m!==void 0&&(clearInterval(m),m=void 0)}function C(P){A();const O=v("ambience",!0);if(!O)return;if(P>0&&!d&&w(O),a.has("ambience")){T("ambience",O,P,dC),P<=0&&(m=setTimeout(()=>{m=void 0,M(O)},jc));return}const Z=O.volume??0,H=Math.max(1,Math.round(jc/_f));let X=0;m=setInterval(()=>{X++;const B=Z+(P-Z)*Math.min(X/H,1);T("ambience",O,B),X>=H&&(A(),P<=0&&M(O))},_f)}function U(){A();for(const[P,O]of o)T(P,O,0),M(O);_=0}return{get blocked(){return d},kick(P,O=!1){if(!l)return;const Z=Math.max(0,Math.min(1,P)),H=O||Z>=iC,X=I(H?"hard":"soft",H?cC:aC),B=1+(s()*2-1)*oC;S(X,sC+rC*Z,B)},roll(P,O){const Z=n(),H=g===0,X=H?0:Math.max(Z-g,0)/1e3;if(g=Z,!l){_=0;return}const B=P?pC(O):0;_+=(B-_)*(H?1:1-Math.exp(-X/mf));const j=v("roll",!0);if(!j)return;if(_<=hC){_=0,T("roll",j,0),M(j);return}const Q=a.has("roll");T("roll",j,Q?B:_,Q?mf:0),!d&&j.paused!==!1&&w(j)},whistle(){},net(){S("net",fC)},ambience(P){p=P,l&&C(P?gf:0)},setEnabled(P){if(P&&(d=!1,y()),P!==l){if(l=P,!P){U();return}g=0,p&&C(gf)}},dispose(){var O,Z,H;f=!0,l=!1,p=!1,U();for(const X of o.values())try{(O=X.removeAttribute)==null||O.call(X,"src"),(Z=X.load)==null||Z.call(X)}catch{}o.clear(),a.clear();const P=u;u=null;try{Promise.resolve((H=P==null?void 0:P.close)==null?void 0:H.call(P)).catch(()=>{})}catch{}}}}const bf="assets/music/",gC=.3,_C=.42;function bC(i){let t=2166136261;for(let e=0;e<i.length;e++)t^=i.charCodeAt(e),t=Math.imul(t,16777619);return t>>>0}function xC(i,t){return i.length?i[bC(t)%i.length]:null}function xf(i,t){return/\.(mp3|m4a)$/.test(t)?`${i}${t}`:`${i}${t}.mp3`}async function vC(i){try{const t=await fetch(`${i}index.json`);if(!t.ok)return[];const e=await t.json();return Array.isArray(e)?e.filter(n=>typeof n=="string"):[]}catch{return[]}}function yC(i){const t=i.make??(M=>new Audio(M)),e=i.makeCtx??Em;let n=null,s=null,r="",o=gC,a=!1,c=!1,u=!1,h=null,l=!1,d=null,f=null;const p=()=>o*(a?_C:1);function _(){const M=p();if(d&&h)try{const T=h.currentTime;d.gain.cancelScheduledValues(T),d.gain.setValueAtTime(M,T);return}catch{}if(n)try{n.volume=M}catch{}}function g(){var M;if(!h&&!l){try{h=e()}catch{h=null}if(!h){l=!0;return}}try{Promise.resolve((M=h==null?void 0:h.resume)==null?void 0:M.call(h)).catch(()=>{})}catch{}}function m(M){if(g(),!!h)try{const T=h.createGain();T.gain.value=p(),f=h.createMediaElementSource(M),f.connect(T),T.connect(h.destination),d=T;try{M.volume=1}catch{}}catch{}}function v(){var T,I;const M=n;n=null;try{f==null||f.disconnect()}catch{}try{d==null||d.disconnect()}catch{}if(f=null,d=null,!!M){try{M.pause()}catch{}try{(T=M.removeAttribute)==null||T.call(M,"src"),(I=M.load)==null||I.call(M)}catch{}}}function y(){var T;if(!n)return;const M=s?xf(i.dir,s):Wc;if(r!==M){r=M;try{n.src=M}catch{}try{(T=n.load)==null||T.call(n)}catch{}}}function x(M=!1){if(!(n||u)&&!(!s&&!M)){r=s?xf(i.dir,s):Wc;try{n=t(r)}catch{n=null}if(n){try{n.loop=!0,n.preload="auto"}catch{}m(n)}}}function w(){if(!(!s||u)&&(x(),!!n)){_();try{Promise.resolve(n.play()).catch(()=>{})}catch{}}}return{unlock(){if(u)return;g(),x(!0);const M=n;if(M)try{Promise.resolve(M.play()).then(()=>{if(!c)try{M.pause(),M.currentTime=0}catch{}}).catch(()=>{})}catch{}},pick(M,T){const I=T||xC(i.tracks,M);I!==s&&(s=I,n?y():x(),c&&w())},set(M){if(c=M&&!u,c)w();else try{n==null||n.pause()}catch{}},restart(){if(!u){if(c=!0,n)try{n.currentTime=0}catch{}w()}},gain(M){Number.isFinite(M)&&(o=Math.max(0,Math.min(1,M)),_())},duck(M){M!==a&&(a=M,_())},dispose(){var T;u=!0,c=!1,v();const M=h;h=null;try{Promise.resolve((T=M==null?void 0:M.close)==null?void 0:T.call(M)).catch(()=>{})}catch{}}}}function MC(i=window,t={createStage:Qo,runDrill:vm}){var fe,D,b;const e=i.document,n=t.warm??new uR(void 0,fR()),s=t.narrator??new eC;let r=null;s.onStarted=G=>r==null?void 0:r(G);const o=()=>{var G;return((G=t.sfx)==null?void 0:G.call(t))??mC({dir:Tn(nC)})};let a=o(),c=!1,u=!1;const h=G=>{c=G,a.setEnabled(G),x()};let l=null,d=!1,f,p="",_,g=!1,m=0,v=!1;const y=()=>d&&T&&ht.playing&&et();function x(){l==null||l.set(y())}function w(){y()?l==null||l.restart():x()}function M(){if(l||g||!d)return;g=!0;const G=++m;(t.musicIndex??(()=>vC(Tn(bf))))().then(Y=>{var z;if(!(G!==m||l)){if(!Y.length){g=!1;return}l=((z=t.music)==null?void 0:z.call(t,Y))??yC({dir:Tn(bf),tracks:Y}),P&&l.unlock(),f!==void 0&&l.gain(f),l.duck(v),p&&l.pick(p,_),x()}}).catch(()=>{g=!1})}let T=!1,I=!1;function S(){return T?!1:(T=!0,A(),a.ambience(!0),w(),!0)}function A(){I||!c||(I=!0,a.whistle())}function C(){T=!1,a.ambience(!1),a.roll(!1,0),x()}const U=()=>h(yt());(fe=e==null?void 0:e.addEventListener)==null||fe.call(e,"visibilitychange",U);let P=!1,O=null;function Z(G){var Y;if(!G){try{(Y=O==null?void 0:O.remove)==null||Y.call(O)}catch{}O=null;return}if(!(O||P||!(e!=null&&e.createElement)||!e.body))try{const z=e.createElement("div");z.textContent="Tap for sound",z.setAttribute("style",'position:fixed;left:50%;top:50%;transform:translate(-50%,-50%);z-index:9;pointer-events:none;padding:12px 20px;border-radius:999px;background:#C8F323;color:#0B0F10;font:700 15px/1 -apple-system,"Helvetica Neue",Arial,sans-serif;white-space:nowrap;'),e.body.appendChild(z),O=z}catch{}}function H(){var G,Y;if(!P){P=!0;try{(G=e==null?void 0:e.removeEventListener)==null||G.call(e,"pointerdown",H,!0)}catch{}try{(Y=e==null?void 0:e.removeEventListener)==null||Y.call(e,"touchend",H,!0)}catch{}s.unlock(),l==null||l.unlock(),Z(!1),nt=!1,h(yt()),T&&A(),Dt&&(Ct(ht.narration),j!=null&&j.script.length&&s.prefetchAll(j.script.filter(z=>{var pt;return!ct.has(z)&&z!==((pt=j==null?void 0:j.hook)==null?void 0:pt.clip)}))),ge([Bt()]),ut()}}(D=e==null?void 0:e.addEventListener)==null||D.call(e,"pointerdown",H,!0),(b=e==null?void 0:e.addEventListener)==null||b.call(e,"touchend",H,!0);let X=null;const B=()=>X??(X=(t.audioIndex??qR)());let j=null,Q=[];const it=G=>{var Y;return((Y=ht.narration[G]??Q[G])==null?void 0:Y.text)??null};let ct=new Set,Dt=!0,nt=!1,ot=[];const at=()=>Dt&&!s.blocked,et=()=>at()&&!(e!=null&&e.hidden),yt=()=>et()&&u,Bt=()=>({type:"audio",state:Dt?s.blocked||a.blocked?"blocked":"playing":"muted"}),Qt=()=>at()&&(j==null?void 0:j.hasAudio)===!0,de=G=>{var Y,z;return Qt()&&(G<0||((Y=j==null?void 0:j.lines[G])==null?void 0:Y.clip)!=null||((z=j==null?void 0:j.lines[G])==null?void 0:z.at)!==void 0)},se=()=>((j==null?void 0:j.lines)??[]).reduce((G,Y)=>Y.clip!==null||Y.at!==void 0?Y.index:G,-1),Ce=()=>((j==null?void 0:j.lines)??[]).reduce((G,Y)=>Y.clip!==null||Y.at!==void 0?G+Y.hold:G,0)*Di,F=(G,Y)=>j!=null&&j.take?ZR(G,G.index===se(),s.trim(Y)):pf(G.hold,Y,s.trim(Y));function Ct(G){if(j)for(const Y of j.lines){const z=G[Y.index];z&&(z.hold=0)}}function qt(){!s.blocked||nt||(nt=!0,h(!1),Ct(ht.narration),Dt&&Z(!0),ge([{type:"audio",state:"blocked"}]))}let le=Promise.resolve(),It=!1,ye=0,Kt=null,L=null,R=!1;s.onTrim=G=>{if(!It||G!==Kt)return;const Y=s.remaining(G);Y!==void 0&&(ye=performance.now()+Y*1e3,R&&L!==null&&ge([{type:"cue",index:-1,text:L,hold:Math.max(Y,El)}]))};let J=0,lt=!1,Mt=[];const ut=()=>{const G=Mt;Mt=[];for(const Y of G)Y()},ne=(G,Y)=>new Promise(z=>{const pt=()=>{G!==ht.seq?z(!1):Y()?z(!0):Mt.push(pt)};pt()});async function Lt(G){var z;const Y=(j==null?void 0:j.queue)??[];for(;G===ht.seq&&J<Y.length;){const pt=Y[J],Et=pt.clip;if(!Et||ct.has(Et)){J++;continue}if(!at()){const _t=!Dt;if(!await ne(G,at))return;if(_t){const Tt=Y.findIndex(mt=>mt.index===ht.cue);Tt>J&&(J=Tt)}continue}ct.add(Et);const wt=j!=null&&j.take?((z=j.lines[ht.cue])==null?void 0:z.at)??0:0,Nt=(wt>0?j==null?void 0:j.lines[ht.cue]:void 0)??pt;ge([{type:"cue",index:Nt.index,text:it(Nt.index),hold:F(Nt,Et)}]);const tt=((j==null?void 0:j.lines)??[]).filter(_t=>_t.at!==void 0&&_t.at>wt&&_t.index>Nt.index);let vt=[];r=_t=>{_t!==Et||G!==ht.seq||(r=null,vt=tt.map(Tt=>setTimeout(()=>{G!==ht.seq||!at()||lt||ge([{type:"cue",index:Tt.index,text:it(Tt.index),hold:F(Tt,Et)}])},(Tt.at-wt)*1e3)))},await s.play(Et,j!=null&&j.take?Ce():pt.hold*Di,wt),r=null;for(const _t of vt)clearTimeout(_t);if(G!==ht.seq)return;if(s.blocked){ct.delete(Et),qt();continue}if(j!=null&&j.take&&!Dt){ct.delete(Et);continue}qt(),J++}G===ht.seq&&Y.length>0&&J>=Y.length&&(lt=!0,ge([{type:"cue",index:-1,text:null}]))}let ht=gR,dt=null,bt=null,Vt=aa,$t=null,re=Promise.resolve(),Wt=null,be={},pe=0;function ge(G){for(const Y of G)Y.type==="cue"&&(v=Y.index>=0,l==null||l.duck(v));if(Wt)for(const Y of G)Wt.source.postMessage(Y,{targetOrigin:Wt.origin==="null"||!Wt.origin?"*":Wt.origin})}function K(G,Y=!1){ht=G.state;for(const z of G.effects)Ot(z);ge(Y?G.out.filter(z=>!(z.type==="cue"&&de(z.index))):G.out)}function Ot(G){var Y;switch(G.kind){case"dispose":{s.stop(),s.newGeneration(),s.closeCtx(),C(),It=!1,ut();const z=performance.now();dt==null||dt.dispose(),dt=null,bt==null||bt.dispose(),bt=null,pe=performance.now()-z,ht.phase==="idle"&&($t==null||$t.dispose(),$t=null,h(!1),a.dispose(),a=o(),l==null||l.dispose(),l=null,g=!1,m++,(Y=e==null?void 0:e.removeEventListener)==null||Y.call(e,"visibilitychange",U));return}case"unload":{s.stop(),s.newGeneration(),C(),h(!1),It=!1,ut(),dt==null||dt.dispose(),dt=null,bt==null||bt.dispose(),bt=null;return}case"load":{s.stop(),s.newGeneration(),j=null,Q=[],ct=new Set,J=0,It=!1,Kt=null,L=null,R=!1,lt=!1,T=!1,I=!1,p="key"in G.source?G.source.key:String(G.source.json.key??""),l?l.pick(p,_):M(),h(yt()),ut(),bt==null||bt.dispose(),bt=null,le=rt(G.seq,G.source),re=re.catch(()=>{}).then(()=>Ht(G.seq,G.source,G.loop,G.kit,G.squad));return}case"preview":{s.stop(),s.newGeneration(),C(),h(!1),It=!1,ut(),dt==null||dt.dispose(),dt=null,Vt=G.framing,re=re.catch(()=>{}).then(()=>jt(G.seq,G.kit,G.squad));return}case"setKit":bt==null||bt.setKit(G.kit).catch(()=>{});return;case"setFraming":Vt=G.framing,bt==null||bt.setFraming(G.framing);return;case"play":dt==null||dt.timeline.play(),dt==null||dt.stage.rule.play(),S()||x();return;case"pause":dt==null||dt.timeline.pause(),dt==null||dt.stage.rule.pause(),x();return;case"seek":dt==null||dt.timeline.seek(G.t),dt==null||dt.stage.rule.wake();return;case"setSpeed":dt==null||dt.timeline.setSpeed(G.x);return;case"setOverlays":dt==null||dt.overlays.set(G.flags),dt==null||dt.stage.rule.wake();return;case"setCamera":dt==null||dt.setCamera(G.elev,G.az);return;case"setFollow":dt==null||dt.setFollow(G.follow);return;case"hold":G.on?(dt==null||dt.timeline.pause(),dt==null||dt.stage.rule.play()):ht.playing?(dt==null||dt.timeline.play(),dt==null||dt.stage.rule.play(),S()):dt==null||dt.stage.rule.pause();return;case"warm":{const z=G.keys;ot=z.slice(0,3);const pt=ht.seq;re.catch(()=>{}).then(()=>n.warm(z)).then(()=>gt(ot,pt)).catch(()=>{});return}case"setAudio":{Dt=G.enabled,u=G.sfx??!1,d=G.music??G.enabled,G.musicGain!==void 0&&(f=G.musicGain,l==null||l.gain(G.musicGain)),G.track!==_&&(_=G.track,p&&(l==null||l.pick(p,_))),d&&M(),Dt?(s.blocked=!1,nt=!1,ht.holdUntilMs!==null&&ht.holdUntilMs!==$o&&(ht={...ht,holdUntilMs:null},Ot({kind:"hold",on:!1})),j!=null&&j.script.length&&s.prefetchAll(j.script.filter(z=>{var pt;return!ct.has(z)&&z!==((pt=j==null?void 0:j.hook)==null?void 0:pt.clip)})),ot.length&&gt(ot,ht.seq)):(s.stop(),s.newGeneration(),Z(!1)),h(yt()),T&&A(),Ct(ht.narration),ge([Bt()]),!Dt&&ht.phase==="ready"&&!(R&&It)&&ge([wl(ht.narration,ht.cue)]),Dt&&ht.phase==="ready"&&lt&&ge([{type:"cue",index:-1,text:null}]),ut();return}case"stats":ge([{type:"statsReply",frames:(dt==null?void 0:dt.stage.frames())??0,t:(dt==null?void 0:dt.timeline.t)??0,playing:ht.playing,phases:{...be},warm:n.keys().length}]);return}}async function rt(G,Y){if(!("key"in Y))return;const z=`${Y.key}-hook`,pt=await B();if(G!==ht.seq||!(pt[z]>0)||!at())return;ct.add(z),It=!0,Kt=z;const Et=s.trim(z);ye=performance.now()+pf(pt[z]/Di,z,Et)*1e3,await s.play(z,pt[z]),It=!1,qt(),G===ht.seq&&K(ji(ht,{kind:"hookEnded"}))}async function gt(G,Y){if(!Dt)return;const z=await B();if(Y!==ht.seq)return;const pt=[];for(const Et of G)z[Et]>0&&pt.push(Et);await s.prefetchAll(pt)}async function jt(G,Y,z){let pt;const Et=Vt;try{$t??($t=t.createStage(i.document.body)),$t.remeasure(),pt=await(t.runPreview??WR)(i.document.body,Y,{stage:$t,embed:!0,framing:Et,squad:z})}catch(wt){K(ji(ht,{kind:"loadFailed",seq:G,message:wt instanceof Error?wt.message:String(wt)},performance.now()));return}if(G!==ht.seq||ht.phase!=="loading"){pt.dispose();return}bt=pt,Vt!==Et&&pt.setFraming(Vt),pt.step(0),K(ji(ht,{kind:"loaded",seq:G,duration:0},performance.now()))}async function Ht(G,Y,z,pt,Et){var Gt;let wt,Nt=[];const tt=performance.now();let vt=tt,_t=0;try{let ue=null,At;if("key"in Y?(ue=await n.take(Y.key),At=ue.json):At=Y.json,G!==ht.seq)return;vt=performance.now(),Nt=TR(At==null?void 0:At.narration);const Te=await B();if(G!==ht.seq)return;j=XR("key"in Y?Y.key:null,Nt,Te),Q=Nt,j.take&&Lt(G),Dt&&j.script.length&&s.prefetchAll(j.script),Ct(Nt);const te=$t!==null;$t??($t=t.createStage(i.document.body)),$t.remeasure(),_t=te?0:performance.now()-vt,wt=await t.runDrill(At,i.document.body,{loop:z,embed:!0,search:"",stage:$t,sfx:a,...pt?{kit:pt}:{},...Et?{squad:Et}:{},...ue?{schedules:ue.schedules}:{},onFrame:(E,W)=>K(CR(ht,E,W),!0)})}catch(ue){K(ji(ht,{kind:"loadFailed",seq:G,message:ue instanceof Error?ue.message:String(ue)},performance.now()));return}if(G!==ht.seq||ht.phase!=="loading"){wt.dispose();return}dt=wt;const Tt=performance.now();dt.step(0),be={dispose:pe,fetch:vt-tt+Ii.clips,stage:_t,schedule:Ii.schedule,build:Ii.build,firstFrame:performance.now()-Tt,total:pe+performance.now()-tt},pe=0;let mt=0;if(dt.timeline.onLoop(()=>{w(),K(ji(ht,{kind:"looped",n:++mt}))}),dt.timeline.onEnd(()=>{dt==null||dt.stage.rule.pause(),K(ji(ht,{kind:"ended",t:(dt==null?void 0:dt.timeline.t)??0}))}),It&&Kt!==null){const ue=s.remaining(Kt);ue!==void 0&&(ye=performance.now()+ue*1e3)}const kt=It?Math.max((ye-performance.now())/1e3,0):void 0;kt!==void 0&&kt>0&&dt.setPushIn(kt),L=((Gt=ht.intro)==null?void 0:Gt.text)??null;const Xt=kt!==void 0&&L!==null;Ct(Nt),K(ji(ht,{kind:"loaded",seq:G,duration:dt.timeline.duration,narration:Nt,voiced:Qt(),...kt!==void 0?{hookHold:kt}:{},..."key"in Y?{key:Y.key}:{}},performance.now())),R=Xt,j!=null&&j.take||le.then(()=>{G===ht.seq&&Lt(G)})}i.addEventListener("message",G=>{if(G.source===i)return;const Y=wR(G.data);if(Y!==null){if(G.source&&(Wt={source:G.source,origin:G.origin}),"error"in Y){ge([{type:"error",code:Y.code,message:Y.error}]);return}K(RR(ht,Y,(dt==null?void 0:dt.timeline.t)??0))}}),i.parent&&i.parent!==i&&i.parent.postMessage({type:"hello"},"*")}function SC(i,t={}){const e=t.mountEmbed??MC,n=new Set;let s=null,r=!1;const o={stages:0,mounts:0,reparents:0},a=i.doc.createElement("div");a.style.position="absolute",a.style.inset="0",a.style.pointerEvents="none";const c=i.doc.createElement("div");c.style.display="none",i.doc.body.appendChild(c),c.appendChild(a);function u(f){f.type==="hello"&&(r=!0);for(const p of[...n])try{p(f)}catch(_){console.error("tactivo3d: listener failed",_),setTimeout(()=>{throw _})}}const h={postMessage(f){queueMicrotask(()=>u(f))}},l={document:{body:a},parent:h,addEventListener(f,p){f==="message"&&(s=p)},removeEventListener(){}};let d=!1;return{mount(f,p){o.mounts++,a.parentElement!==f&&(f.appendChild(a),d&&o.reparents++),!d&&(Py((p==null?void 0:p.base)??i.base),e(l,{createStage:_=>(o.stages++,Qo(_)),runDrill:vm,...t.warm?{warm:t.warm}:{},...t.narrator?{narrator:t.narrator}:{},...t.audioIndex?{audioIndex:t.audioIndex}:{}}),d=!0)},unmount(){c.appendChild(a)},post(f){s==null||s({data:f,source:h,origin:""})},onMessage(f){return n.add(f),r&&queueMicrotask(()=>{n.has(f)&&f({type:"hello"})}),()=>{n.delete(f)}},stats:()=>({...o})}}typeof window<"u"&&typeof document<"u"&&(window.tactivo3d??(window.tactivo3d=SC({doc:document,base:new URL("./",import.meta.url).href})));
