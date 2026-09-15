var nm=Object.defineProperty;var im=(i,t,e)=>t in i?nm(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e;var en=(i,t,e)=>im(i,typeof t!="symbol"?t+"":t,e);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Zw=2;const pl="attached",sm="detached";const He="srgb",bn="srgb-linear",Pa="linear",ke="srgb";const ml="300 es";class ts{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}}const ln=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let gl=1234567;const dr=Math.PI/180,Ps=180/Math.PI;function qn(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ln[i&255]+ln[i>>8&255]+ln[i>>16&255]+ln[i>>24&255]+"-"+ln[t&255]+ln[t>>8&255]+"-"+ln[t>>16&15|64]+ln[t>>24&255]+"-"+ln[e&63|128]+ln[e>>8&255]+"-"+ln[e>>16&255]+ln[e>>24&255]+ln[n&255]+ln[n>>8&255]+ln[n>>16&255]+ln[n>>24&255]).toLowerCase()}function Me(i,t,e){return Math.max(t,Math.min(e,i))}function Dc(i,t){return(i%t+t)%t}function rm(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function am(i,t,e){return i!==t?(e-i)/(t-i):0}function fr(i,t,e){return(1-e)*i+e*t}function om(i,t,e,n){return fr(i,t,1-Math.exp(-e*n))}function cm(i,t=1){return t-Math.abs(Dc(i,t*2)-t)}function lm(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function um(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function hm(i,t){return i+Math.floor(Math.random()*(t-i+1))}function dm(i,t){return i+Math.random()*(t-i)}function fm(i){return i*(.5-Math.random())}function pm(i){i!==void 0&&(gl=i);let t=gl+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function mm(i){return i*dr}function gm(i){return i*Ps}function _m(i){return(i&i-1)===0&&i!==0}function bm(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function xm(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function vm(i,t,e,n,s){const r=Math.cos,a=Math.sin,o=r(e/2),c=a(e/2),u=r((t+n)/2),h=a((t+n)/2),l=r((t-n)/2),d=a((t-n)/2),f=r((n-t)/2),p=a((n-t)/2);switch(s){case"XYX":i.set(o*h,c*l,c*d,o*u);break;case"YZY":i.set(c*d,o*h,c*l,o*u);break;case"ZXZ":i.set(c*l,c*d,o*h,o*u);break;case"XZX":i.set(o*h,c*p,c*f,o*u);break;case"YXY":i.set(c*f,o*h,c*p,o*u);break;case"ZYZ":i.set(c*p,c*f,o*h,o*u);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Wn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Ne(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Wd={DEG2RAD:dr,RAD2DEG:Ps,generateUUID:qn,clamp:Me,euclideanModulo:Dc,mapLinear:rm,inverseLerp:am,lerp:fr,damp:om,pingpong:cm,smoothstep:lm,smootherstep:um,randInt:hm,randFloat:dm,randFloatSpread:fm,seededRandom:pm,degToRad:mm,radToDeg:gm,isPowerOfTwo:_m,ceilPowerOfTwo:bm,floorPowerOfTwo:xm,setQuaternionFromProperEuler:vm,normalize:Ne,denormalize:Wn};class ee{constructor(t=0,e=0){ee.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Me(this.x,t.x,e.x),this.y=Me(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Me(this.x,t,e),this.y=Me(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Me(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Me(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class _e{constructor(t,e,n,s,r,a,o,c,u){_e.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,u)}set(t,e,n,s,r,a,o,c,u){const h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=a,h[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],c=n[6],u=n[1],h=n[4],l=n[7],d=n[2],f=n[5],p=n[8],_=s[0],g=s[3],m=s[6],v=s[1],y=s[4],x=s[7],w=s[2],T=s[5],R=s[8];return r[0]=a*_+o*v+c*w,r[3]=a*g+o*y+c*T,r[6]=a*m+o*x+c*R,r[1]=u*_+h*v+l*w,r[4]=u*g+h*y+l*T,r[7]=u*m+h*x+l*R,r[2]=d*_+f*v+p*w,r[5]=d*g+f*y+p*T,r[8]=d*m+f*x+p*R,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],u=t[7],h=t[8];return e*a*h-e*o*u-n*r*h+n*o*c+s*r*u-s*a*c}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],u=t[7],h=t[8],l=h*a-o*u,d=o*c-h*r,f=u*r-a*c,p=e*l+n*d+s*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/p;return t[0]=l*_,t[1]=(s*u-h*n)*_,t[2]=(o*n-s*a)*_,t[3]=d*_,t[4]=(h*e-s*c)*_,t[5]=(s*r-o*e)*_,t[6]=f*_,t[7]=(n*c-u*e)*_,t[8]=(a*e-n*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){const c=Math.cos(r),u=Math.sin(r);return this.set(n*c,n*u,-n*(c*a+u*o)+a+t,-s*u,s*c,-s*(-u*a+c*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(to.makeScale(t,e)),this}rotate(t){return this.premultiply(to.makeRotation(-t)),this}translate(t,e){return this.premultiply(to.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const to=new _e;function jd(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function _r(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function ym(){const i=_r("canvas");return i.style.display="block",i}const _l={};function Es(i){i in _l||(_l[i]=!0,console.warn(i))}function Mm(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function Sm(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Am(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const bl=new _e().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),xl=new _e().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Em(){const i={enabled:!0,workingColorSpace:bn,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===ke&&(s.r=mi(s.r),s.g=mi(s.g),s.b=mi(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ke&&(s.r=Cs(s.r),s.g=Cs(s.g),s.b=Cs(s.b))),s},fromWorkingColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},toWorkingColorSpace:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===""?Pa:this.spaces[s].transfer},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[bn]:{primaries:t,whitePoint:n,transfer:Pa,toXYZ:bl,fromXYZ:xl,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:He},outputColorSpaceConfig:{drawingBufferColorSpace:He}},[He]:{primaries:t,whitePoint:n,transfer:ke,toXYZ:bl,fromXYZ:xl,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:He}}}),i}const Ce=Em();function mi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Cs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let ss;class Tm{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{ss===void 0&&(ss=_r("canvas")),ss.width=t.width,ss.height=t.height;const n=ss.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=ss}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=_r("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=mi(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(mi(e[n]/255)*255):e[n]=mi(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let wm=0;class Xd{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:wm++}),this.uuid=qn(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(eo(s[a].image)):r.push(eo(s[a]))}else r=eo(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function eo(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Tm.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Rm=0;class Ye extends ts{constructor(t=Ye.DEFAULT_IMAGE,e=Ye.DEFAULT_MAPPING,n=1001,s=1001,r=1006,a=1008,o=1023,c=1009,u=Ye.DEFAULT_ANISOTROPY,h=""){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Rm++}),this.uuid=qn(),this.name="",this.source=new Xd(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=u,this.format=o,this.internalFormat=null,this.type=c,this.offset=new ee(0,0),this.repeat=new ee(1,1),this.center=new ee(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new _e,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==300)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case 1e3:t.x=t.x-Math.floor(t.x);break;case 1001:t.x=t.x<0?0:1;break;case 1002:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case 1e3:t.y=t.y-Math.floor(t.y);break;case 1001:t.y=t.y<0?0:1;break;case 1002:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ye.DEFAULT_IMAGE=null;Ye.DEFAULT_MAPPING=300;Ye.DEFAULT_ANISOTROPY=1;class xe{constructor(t=0,e=0,n=0,s=1){xe.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const c=t.elements,u=c[0],h=c[4],l=c[8],d=c[1],f=c[5],p=c[9],_=c[2],g=c[6],m=c[10];if(Math.abs(h-d)<.01&&Math.abs(l-_)<.01&&Math.abs(p-g)<.01){if(Math.abs(h+d)<.1&&Math.abs(l+_)<.1&&Math.abs(p+g)<.1&&Math.abs(u+f+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const y=(u+1)/2,x=(f+1)/2,w=(m+1)/2,T=(h+d)/4,R=(l+_)/4,I=(p+g)/4;return y>x&&y>w?y<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(y),s=T/n,r=R/n):x>w?x<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),n=T/s,r=I/s):w<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(w),n=R/r,s=I/r),this.set(n,s,r,e),this}let v=Math.sqrt((g-p)*(g-p)+(l-_)*(l-_)+(d-h)*(d-h));return Math.abs(v)<.001&&(v=1),this.x=(g-p)/v,this.y=(l-_)/v,this.z=(d-h)/v,this.w=Math.acos((u+f+m-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Me(this.x,t.x,e.x),this.y=Me(this.y,t.y,e.y),this.z=Me(this.z,t.z,e.z),this.w=Me(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Me(this.x,t,e),this.y=Me(this.y,t,e),this.z=Me(this.z,t,e),this.w=Me(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Me(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Cm extends ts{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new xe(0,0,t,e),this.scissorTest=!1,this.viewport=new xe(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:1006,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Ye(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Xd(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Zi extends Cm{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class qd extends Ye{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Im extends Ye{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class on{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let c=n[s+0],u=n[s+1],h=n[s+2],l=n[s+3];const d=r[a+0],f=r[a+1],p=r[a+2],_=r[a+3];if(o===0){t[e+0]=c,t[e+1]=u,t[e+2]=h,t[e+3]=l;return}if(o===1){t[e+0]=d,t[e+1]=f,t[e+2]=p,t[e+3]=_;return}if(l!==_||c!==d||u!==f||h!==p){let g=1-o;const m=c*d+u*f+h*p+l*_,v=m>=0?1:-1,y=1-m*m;if(y>Number.EPSILON){const w=Math.sqrt(y),T=Math.atan2(w,m*v);g=Math.sin(g*T)/w,o=Math.sin(o*T)/w}const x=o*v;if(c=c*g+d*x,u=u*g+f*x,h=h*g+p*x,l=l*g+_*x,g===1-o){const w=1/Math.sqrt(c*c+u*u+h*h+l*l);c*=w,u*=w,h*=w,l*=w}}t[e]=c,t[e+1]=u,t[e+2]=h,t[e+3]=l}static multiplyQuaternionsFlat(t,e,n,s,r,a){const o=n[s],c=n[s+1],u=n[s+2],h=n[s+3],l=r[a],d=r[a+1],f=r[a+2],p=r[a+3];return t[e]=o*p+h*l+c*f-u*d,t[e+1]=c*p+h*d+u*l-o*f,t[e+2]=u*p+h*f+o*d-c*l,t[e+3]=h*p-o*l-c*d-u*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,c=Math.sin,u=o(n/2),h=o(s/2),l=o(r/2),d=c(n/2),f=c(s/2),p=c(r/2);switch(a){case"XYZ":this._x=d*h*l+u*f*p,this._y=u*f*l-d*h*p,this._z=u*h*p+d*f*l,this._w=u*h*l-d*f*p;break;case"YXZ":this._x=d*h*l+u*f*p,this._y=u*f*l-d*h*p,this._z=u*h*p-d*f*l,this._w=u*h*l+d*f*p;break;case"ZXY":this._x=d*h*l-u*f*p,this._y=u*f*l+d*h*p,this._z=u*h*p+d*f*l,this._w=u*h*l-d*f*p;break;case"ZYX":this._x=d*h*l-u*f*p,this._y=u*f*l+d*h*p,this._z=u*h*p-d*f*l,this._w=u*h*l+d*f*p;break;case"YZX":this._x=d*h*l+u*f*p,this._y=u*f*l+d*h*p,this._z=u*h*p-d*f*l,this._w=u*h*l-d*f*p;break;case"XZY":this._x=d*h*l-u*f*p,this._y=u*f*l-d*h*p,this._z=u*h*p+d*f*l,this._w=u*h*l+d*f*p;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],c=e[9],u=e[2],h=e[6],l=e[10],d=n+o+l;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-u)*f,this._z=(a-s)*f}else if(n>o&&n>l){const f=2*Math.sqrt(1+n-o-l);this._w=(h-c)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+u)/f}else if(o>l){const f=2*Math.sqrt(1+o-n-l);this._w=(r-u)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(c+h)/f}else{const f=2*Math.sqrt(1+l-n-o);this._w=(a-s)/f,this._x=(r+u)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Me(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,c=e._y,u=e._z,h=e._w;return this._x=n*h+a*o+s*u-r*c,this._y=s*h+a*c+r*o-n*u,this._z=r*h+a*u+n*c-s*o,this._w=a*h-n*o-s*c-r*u,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,a=this._w;let o=a*t._w+n*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;const c=1-o*o;if(c<=Number.EPSILON){const f=1-e;return this._w=f*a+e*this._w,this._x=f*n+e*this._x,this._y=f*s+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}const u=Math.sqrt(c),h=Math.atan2(u,o),l=Math.sin((1-e)*h)/u,d=Math.sin(e*h)/u;return this._w=a*l+this._w*d,this._x=n*l+this._x*d,this._y=s*l+this._y*d,this._z=r*l+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class F{constructor(t=0,e=0,n=0){F.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(vl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(vl.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,c=t.w,u=2*(a*s-o*n),h=2*(o*e-r*s),l=2*(r*n-a*e);return this.x=e+c*u+a*l-o*h,this.y=n+c*h+o*u-r*l,this.z=s+c*l+r*h-a*u,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Me(this.x,t.x,e.x),this.y=Me(this.y,t.y,e.y),this.z=Me(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Me(this.x,t,e),this.y=Me(this.y,t,e),this.z=Me(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Me(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,c=e.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return no.copy(this).projectOnVector(t),this.sub(no)}reflect(t){return this.sub(no.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Me(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const no=new F,vl=new on;class dn{constructor(t=new F(1/0,1/0,1/0),e=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Bn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Bn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Bn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Bn):Bn.fromBufferAttribute(r,a),Bn.applyMatrix4(t.matrixWorld),this.expandByPoint(Bn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Rr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Rr.copy(n.boundingBox)),Rr.applyMatrix4(t.matrixWorld),this.union(Rr)}const s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Bn),Bn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ws),Cr.subVectors(this.max,Ws),rs.subVectors(t.a,Ws),as.subVectors(t.b,Ws),os.subVectors(t.c,Ws),yi.subVectors(as,rs),Mi.subVectors(os,as),Li.subVectors(rs,os);let e=[0,-yi.z,yi.y,0,-Mi.z,Mi.y,0,-Li.z,Li.y,yi.z,0,-yi.x,Mi.z,0,-Mi.x,Li.z,0,-Li.x,-yi.y,yi.x,0,-Mi.y,Mi.x,0,-Li.y,Li.x,0];return!io(e,rs,as,os,Cr)||(e=[1,0,0,0,1,0,0,0,1],!io(e,rs,as,os,Cr))?!1:(Ir.crossVectors(yi,Mi),e=[Ir.x,Ir.y,Ir.z],io(e,rs,as,os,Cr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Bn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Bn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ri[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ri[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ri[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ri[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ri[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ri[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ri[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ri[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ri),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const ri=[new F,new F,new F,new F,new F,new F,new F,new F],Bn=new F,Rr=new dn,rs=new F,as=new F,os=new F,yi=new F,Mi=new F,Li=new F,Ws=new F,Cr=new F,Ir=new F,Di=new F;function io(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Di.fromArray(i,r);const o=s.x*Math.abs(Di.x)+s.y*Math.abs(Di.y)+s.z*Math.abs(Di.z),c=t.dot(Di),u=e.dot(Di),h=n.dot(Di);if(Math.max(-Math.max(c,u,h),Math.min(c,u,h))>o)return!1}return!0}const Pm=new dn,js=new F,so=new F;class On{constructor(t=new F,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Pm.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;js.subVectors(t,this.center);const e=js.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(js,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(so.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(js.copy(t.center).add(so)),this.expandByPoint(js.copy(t.center).sub(so))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ai=new F,ro=new F,Pr=new F,Si=new F,ao=new F,Lr=new F,oo=new F;class Va{constructor(t=new F,e=new F(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ai)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=ai.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ai.copy(this.origin).addScaledVector(this.direction,e),ai.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){ro.copy(t).add(e).multiplyScalar(.5),Pr.copy(e).sub(t).normalize(),Si.copy(this.origin).sub(ro);const r=t.distanceTo(e)*.5,a=-this.direction.dot(Pr),o=Si.dot(this.direction),c=-Si.dot(Pr),u=Si.lengthSq(),h=Math.abs(1-a*a);let l,d,f,p;if(h>0)if(l=a*c-o,d=a*o-c,p=r*h,l>=0)if(d>=-p)if(d<=p){const _=1/h;l*=_,d*=_,f=l*(l+a*d+2*o)+d*(a*l+d+2*c)+u}else d=r,l=Math.max(0,-(a*d+o)),f=-l*l+d*(d+2*c)+u;else d=-r,l=Math.max(0,-(a*d+o)),f=-l*l+d*(d+2*c)+u;else d<=-p?(l=Math.max(0,-(-a*r+o)),d=l>0?-r:Math.min(Math.max(-r,-c),r),f=-l*l+d*(d+2*c)+u):d<=p?(l=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+u):(l=Math.max(0,-(a*r+o)),d=l>0?r:Math.min(Math.max(-r,-c),r),f=-l*l+d*(d+2*c)+u);else d=a>0?-r:r,l=Math.max(0,-(a*d+o)),f=-l*l+d*(d+2*c)+u;return n&&n.copy(this.origin).addScaledVector(this.direction,l),s&&s.copy(ro).addScaledVector(Pr,d),f}intersectSphere(t,e){ai.subVectors(t.center,this.origin);const n=ai.dot(this.direction),s=ai.dot(ai)-n*n,r=t.radius*t.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,c;const u=1/this.direction.x,h=1/this.direction.y,l=1/this.direction.z,d=this.origin;return u>=0?(n=(t.min.x-d.x)*u,s=(t.max.x-d.x)*u):(n=(t.max.x-d.x)*u,s=(t.min.x-d.x)*u),h>=0?(r=(t.min.y-d.y)*h,a=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,a=(t.min.y-d.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),l>=0?(o=(t.min.z-d.z)*l,c=(t.max.z-d.z)*l):(o=(t.max.z-d.z)*l,c=(t.min.z-d.z)*l),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,ai)!==null}intersectTriangle(t,e,n,s,r){ao.subVectors(e,t),Lr.subVectors(n,t),oo.crossVectors(ao,Lr);let a=this.direction.dot(oo),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Si.subVectors(this.origin,t);const c=o*this.direction.dot(Lr.crossVectors(Si,Lr));if(c<0)return null;const u=o*this.direction.dot(ao.cross(Si));if(u<0||c+u>a)return null;const h=-o*Si.dot(oo);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class he{constructor(t,e,n,s,r,a,o,c,u,h,l,d,f,p,_,g){he.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,u,h,l,d,f,p,_,g)}set(t,e,n,s,r,a,o,c,u,h,l,d,f,p,_,g){const m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=s,m[1]=r,m[5]=a,m[9]=o,m[13]=c,m[2]=u,m[6]=h,m[10]=l,m[14]=d,m[3]=f,m[7]=p,m[11]=_,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new he().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/cs.setFromMatrixColumn(t,0).length(),r=1/cs.setFromMatrixColumn(t,1).length(),a=1/cs.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),u=Math.sin(s),h=Math.cos(r),l=Math.sin(r);if(t.order==="XYZ"){const d=a*h,f=a*l,p=o*h,_=o*l;e[0]=c*h,e[4]=-c*l,e[8]=u,e[1]=f+p*u,e[5]=d-_*u,e[9]=-o*c,e[2]=_-d*u,e[6]=p+f*u,e[10]=a*c}else if(t.order==="YXZ"){const d=c*h,f=c*l,p=u*h,_=u*l;e[0]=d+_*o,e[4]=p*o-f,e[8]=a*u,e[1]=a*l,e[5]=a*h,e[9]=-o,e[2]=f*o-p,e[6]=_+d*o,e[10]=a*c}else if(t.order==="ZXY"){const d=c*h,f=c*l,p=u*h,_=u*l;e[0]=d-_*o,e[4]=-a*l,e[8]=p+f*o,e[1]=f+p*o,e[5]=a*h,e[9]=_-d*o,e[2]=-a*u,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){const d=a*h,f=a*l,p=o*h,_=o*l;e[0]=c*h,e[4]=p*u-f,e[8]=d*u+_,e[1]=c*l,e[5]=_*u+d,e[9]=f*u-p,e[2]=-u,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){const d=a*c,f=a*u,p=o*c,_=o*u;e[0]=c*h,e[4]=_-d*l,e[8]=p*l+f,e[1]=l,e[5]=a*h,e[9]=-o*h,e[2]=-u*h,e[6]=f*l+p,e[10]=d-_*l}else if(t.order==="XZY"){const d=a*c,f=a*u,p=o*c,_=o*u;e[0]=c*h,e[4]=-l,e[8]=u*h,e[1]=d*l+_,e[5]=a*h,e[9]=f*l-p,e[2]=p*l-f,e[6]=o*h,e[10]=_*l+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Lm,t,Dm)}lookAt(t,e,n){const s=this.elements;return Tn.subVectors(t,e),Tn.lengthSq()===0&&(Tn.z=1),Tn.normalize(),Ai.crossVectors(n,Tn),Ai.lengthSq()===0&&(Math.abs(n.z)===1?Tn.x+=1e-4:Tn.z+=1e-4,Tn.normalize(),Ai.crossVectors(n,Tn)),Ai.normalize(),Dr.crossVectors(Tn,Ai),s[0]=Ai.x,s[4]=Dr.x,s[8]=Tn.x,s[1]=Ai.y,s[5]=Dr.y,s[9]=Tn.y,s[2]=Ai.z,s[6]=Dr.z,s[10]=Tn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],c=n[8],u=n[12],h=n[1],l=n[5],d=n[9],f=n[13],p=n[2],_=n[6],g=n[10],m=n[14],v=n[3],y=n[7],x=n[11],w=n[15],T=s[0],R=s[4],I=s[8],S=s[12],A=s[1],C=s[5],N=s[9],k=s[13],H=s[2],Q=s[6],V=s[10],j=s[14],O=s[3],nt=s[7],Y=s[11],J=s[15];return r[0]=a*T+o*A+c*H+u*O,r[4]=a*R+o*C+c*Q+u*nt,r[8]=a*I+o*N+c*V+u*Y,r[12]=a*S+o*k+c*j+u*J,r[1]=h*T+l*A+d*H+f*O,r[5]=h*R+l*C+d*Q+f*nt,r[9]=h*I+l*N+d*V+f*Y,r[13]=h*S+l*k+d*j+f*J,r[2]=p*T+_*A+g*H+m*O,r[6]=p*R+_*C+g*Q+m*nt,r[10]=p*I+_*N+g*V+m*Y,r[14]=p*S+_*k+g*j+m*J,r[3]=v*T+y*A+x*H+w*O,r[7]=v*R+y*C+x*Q+w*nt,r[11]=v*I+y*N+x*V+w*Y,r[15]=v*S+y*k+x*j+w*J,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],c=t[9],u=t[13],h=t[2],l=t[6],d=t[10],f=t[14],p=t[3],_=t[7],g=t[11],m=t[15];return p*(+r*c*l-s*u*l-r*o*d+n*u*d+s*o*f-n*c*f)+_*(+e*c*f-e*u*d+r*a*d-s*a*f+s*u*h-r*c*h)+g*(+e*u*l-e*o*f-r*a*l+n*a*f+r*o*h-n*u*h)+m*(-s*o*h-e*c*l+e*o*d+s*a*l-n*a*d+n*c*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],u=t[7],h=t[8],l=t[9],d=t[10],f=t[11],p=t[12],_=t[13],g=t[14],m=t[15],v=l*g*u-_*d*u+_*c*f-o*g*f-l*c*m+o*d*m,y=p*d*u-h*g*u-p*c*f+a*g*f+h*c*m-a*d*m,x=h*_*u-p*l*u+p*o*f-a*_*f-h*o*m+a*l*m,w=p*l*c-h*_*c-p*o*d+a*_*d+h*o*g-a*l*g,T=e*v+n*y+s*x+r*w;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/T;return t[0]=v*R,t[1]=(_*d*r-l*g*r-_*s*f+n*g*f+l*s*m-n*d*m)*R,t[2]=(o*g*r-_*c*r+_*s*u-n*g*u-o*s*m+n*c*m)*R,t[3]=(l*c*r-o*d*r-l*s*u+n*d*u+o*s*f-n*c*f)*R,t[4]=y*R,t[5]=(h*g*r-p*d*r+p*s*f-e*g*f-h*s*m+e*d*m)*R,t[6]=(p*c*r-a*g*r-p*s*u+e*g*u+a*s*m-e*c*m)*R,t[7]=(a*d*r-h*c*r+h*s*u-e*d*u-a*s*f+e*c*f)*R,t[8]=x*R,t[9]=(p*l*r-h*_*r-p*n*f+e*_*f+h*n*m-e*l*m)*R,t[10]=(a*_*r-p*o*r+p*n*u-e*_*u-a*n*m+e*o*m)*R,t[11]=(h*o*r-a*l*r-h*n*u+e*l*u+a*n*f-e*o*f)*R,t[12]=w*R,t[13]=(h*_*s-p*l*s+p*n*d-e*_*d-h*n*g+e*l*g)*R,t[14]=(p*o*s-a*_*s-p*n*c+e*_*c+a*n*g-e*o*g)*R,t[15]=(a*l*s-h*o*s+h*n*c-e*l*c-a*n*d+e*o*d)*R,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,c=t.z,u=r*a,h=r*o;return this.set(u*a+n,u*o-s*c,u*c+s*o,0,u*o+s*c,h*o+n,h*c-s*a,0,u*c-s*o,h*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,a=e._y,o=e._z,c=e._w,u=r+r,h=a+a,l=o+o,d=r*u,f=r*h,p=r*l,_=a*h,g=a*l,m=o*l,v=c*u,y=c*h,x=c*l,w=n.x,T=n.y,R=n.z;return s[0]=(1-(_+m))*w,s[1]=(f+x)*w,s[2]=(p-y)*w,s[3]=0,s[4]=(f-x)*T,s[5]=(1-(d+m))*T,s[6]=(g+v)*T,s[7]=0,s[8]=(p+y)*R,s[9]=(g-v)*R,s[10]=(1-(d+_))*R,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=cs.set(s[0],s[1],s[2]).length();const a=cs.set(s[4],s[5],s[6]).length(),o=cs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Gn.copy(this);const u=1/r,h=1/a,l=1/o;return Gn.elements[0]*=u,Gn.elements[1]*=u,Gn.elements[2]*=u,Gn.elements[4]*=h,Gn.elements[5]*=h,Gn.elements[6]*=h,Gn.elements[8]*=l,Gn.elements[9]*=l,Gn.elements[10]*=l,e.setFromRotationMatrix(Gn),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,s,r,a,o=2e3){const c=this.elements,u=2*r/(e-t),h=2*r/(n-s),l=(e+t)/(e-t),d=(n+s)/(n-s);let f,p;if(o===2e3)f=-(a+r)/(a-r),p=-2*a*r/(a-r);else if(o===2001)f=-a/(a-r),p=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=l,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=p,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=2e3){const c=this.elements,u=1/(e-t),h=1/(n-s),l=1/(a-r),d=(e+t)*u,f=(n+s)*h;let p,_;if(o===2e3)p=(a+r)*l,_=-2*l;else if(o===2001)p=r*l,_=-1*l;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*u,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=_,c[14]=-p,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const cs=new F,Gn=new he,Lm=new F(0,0,0),Dm=new F(1,1,1),Ai=new F,Dr=new F,Tn=new F,yl=new he,Ml=new on;class Un{constructor(t=0,e=0,n=0,s=Un.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],a=s[4],o=s[8],c=s[1],u=s[5],h=s[9],l=s[2],d=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(Me(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Me(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(c,u)):(this._y=Math.atan2(-l,r),this._z=0);break;case"ZXY":this._x=Math.asin(Me(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-l,f),this._z=Math.atan2(-a,u)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Me(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,u));break;case"YZX":this._z=Math.asin(Me(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,u),this._y=Math.atan2(-l,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Me(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,u),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return yl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(yl,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Ml.setFromEuler(this),this.setFromQuaternion(Ml,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Un.DEFAULT_ORDER="XYZ";class Kd{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Fm=0;const Sl=new F,ls=new on,oi=new he,Fr=new F,Xs=new F,Nm=new F,Um=new on,Al=new F(1,0,0),El=new F(0,1,0),Tl=new F(0,0,1),wl={type:"added"},Om={type:"removed"},us={type:"childadded",child:null},co={type:"childremoved",child:null};class ze extends ts{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Fm++}),this.uuid=qn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ze.DEFAULT_UP.clone();const t=new F,e=new Un,n=new on,s=new F(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new he},normalMatrix:{value:new _e}}),this.matrix=new he,this.matrixWorld=new he,this.matrixAutoUpdate=ze.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ze.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Kd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ls.setFromAxisAngle(t,e),this.quaternion.multiply(ls),this}rotateOnWorldAxis(t,e){return ls.setFromAxisAngle(t,e),this.quaternion.premultiply(ls),this}rotateX(t){return this.rotateOnAxis(Al,t)}rotateY(t){return this.rotateOnAxis(El,t)}rotateZ(t){return this.rotateOnAxis(Tl,t)}translateOnAxis(t,e){return Sl.copy(t).applyQuaternion(this.quaternion),this.position.add(Sl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Al,t)}translateY(t){return this.translateOnAxis(El,t)}translateZ(t){return this.translateOnAxis(Tl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(oi.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Fr.copy(t):Fr.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Xs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?oi.lookAt(Xs,Fr,this.up):oi.lookAt(Fr,Xs,this.up),this.quaternion.setFromRotationMatrix(oi),s&&(oi.extractRotation(s.matrixWorld),ls.setFromRotationMatrix(oi),this.quaternion.premultiply(ls.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(wl),us.child=t,this.dispatchEvent(us),us.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Om),co.child=t,this.dispatchEvent(co),co.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),oi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),oi.multiply(t.parent.matrixWorld)),t.applyMatrix4(oi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(wl),us.child=t,this.dispatchEvent(us),us.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xs,t,Nm),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xs,Um,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let u=0,h=c.length;u<h;u++){const l=c[u];r(t.shapes,l)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,u=this.material.length;c<u;c++)o.push(r(t.materials,this.material[c]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];s.animations.push(r(t.animations,c))}}if(e){const o=a(t.geometries),c=a(t.materials),u=a(t.textures),h=a(t.images),l=a(t.shapes),d=a(t.skeletons),f=a(t.animations),p=a(t.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),u.length>0&&(n.textures=u),h.length>0&&(n.images=h),l.length>0&&(n.shapes=l),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),p.length>0&&(n.nodes=p)}return n.object=s,n;function a(o){const c=[];for(const u in o){const h=o[u];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}ze.DEFAULT_UP=new F(0,1,0);ze.DEFAULT_MATRIX_AUTO_UPDATE=!0;ze.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const zn=new F,ci=new F,lo=new F,li=new F,hs=new F,ds=new F,Rl=new F,uo=new F,ho=new F,fo=new F,po=new xe,mo=new xe,go=new xe;class Fn{constructor(t=new F,e=new F,n=new F){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),zn.subVectors(t,e),s.cross(zn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){zn.subVectors(s,e),ci.subVectors(n,e),lo.subVectors(t,e);const a=zn.dot(zn),o=zn.dot(ci),c=zn.dot(lo),u=ci.dot(ci),h=ci.dot(lo),l=a*u-o*o;if(l===0)return r.set(0,0,0),null;const d=1/l,f=(u*c-o*h)*d,p=(a*h-o*c)*d;return r.set(1-f-p,p,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,li)===null?!1:li.x>=0&&li.y>=0&&li.x+li.y<=1}static getInterpolation(t,e,n,s,r,a,o,c){return this.getBarycoord(t,e,n,s,li)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,li.x),c.addScaledVector(a,li.y),c.addScaledVector(o,li.z),c)}static getInterpolatedAttribute(t,e,n,s,r,a){return po.setScalar(0),mo.setScalar(0),go.setScalar(0),po.fromBufferAttribute(t,e),mo.fromBufferAttribute(t,n),go.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(po,r.x),a.addScaledVector(mo,r.y),a.addScaledVector(go,r.z),a}static isFrontFacing(t,e,n,s){return zn.subVectors(n,e),ci.subVectors(t,e),zn.cross(ci).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return zn.subVectors(this.c,this.b),ci.subVectors(this.a,this.b),zn.cross(ci).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Fn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Fn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return Fn.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return Fn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Fn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let a,o;hs.subVectors(s,n),ds.subVectors(r,n),uo.subVectors(t,n);const c=hs.dot(uo),u=ds.dot(uo);if(c<=0&&u<=0)return e.copy(n);ho.subVectors(t,s);const h=hs.dot(ho),l=ds.dot(ho);if(h>=0&&l<=h)return e.copy(s);const d=c*l-h*u;if(d<=0&&c>=0&&h<=0)return a=c/(c-h),e.copy(n).addScaledVector(hs,a);fo.subVectors(t,r);const f=hs.dot(fo),p=ds.dot(fo);if(p>=0&&f<=p)return e.copy(r);const _=f*u-c*p;if(_<=0&&u>=0&&p<=0)return o=u/(u-p),e.copy(n).addScaledVector(ds,o);const g=h*p-f*l;if(g<=0&&l-h>=0&&f-p>=0)return Rl.subVectors(r,s),o=(l-h)/(l-h+(f-p)),e.copy(s).addScaledVector(Rl,o);const m=1/(g+_+d);return a=_*m,o=d*m,e.copy(n).addScaledVector(hs,a).addScaledVector(ds,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const $d={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ei={h:0,s:0,l:0},Nr={h:0,s:0,l:0};function _o(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class ae{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=He){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ce.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=Ce.workingColorSpace){return this.r=t,this.g=e,this.b=n,Ce.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=Ce.workingColorSpace){if(t=Dc(t,1),e=Me(e,0,1),n=Me(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=_o(a,r,t+1/3),this.g=_o(a,r,t),this.b=_o(a,r,t-1/3)}return Ce.toWorkingColorSpace(this,s),this}setStyle(t,e=He){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=He){const n=$d[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=mi(t.r),this.g=mi(t.g),this.b=mi(t.b),this}copyLinearToSRGB(t){return this.r=Cs(t.r),this.g=Cs(t.g),this.b=Cs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=He){return Ce.fromWorkingColorSpace(un.copy(this),t),Math.round(Me(un.r*255,0,255))*65536+Math.round(Me(un.g*255,0,255))*256+Math.round(Me(un.b*255,0,255))}getHexString(t=He){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Ce.workingColorSpace){Ce.fromWorkingColorSpace(un.copy(this),e);const n=un.r,s=un.g,r=un.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let c,u;const h=(o+a)/2;if(o===a)c=0,u=0;else{const l=a-o;switch(u=h<=.5?l/(a+o):l/(2-a-o),a){case n:c=(s-r)/l+(s<r?6:0);break;case s:c=(r-n)/l+2;break;case r:c=(n-s)/l+4;break}c/=6}return t.h=c,t.s=u,t.l=h,t}getRGB(t,e=Ce.workingColorSpace){return Ce.fromWorkingColorSpace(un.copy(this),e),t.r=un.r,t.g=un.g,t.b=un.b,t}getStyle(t=He){Ce.fromWorkingColorSpace(un.copy(this),t);const e=un.r,n=un.g,s=un.b;return t!==He?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Ei),this.setHSL(Ei.h+t,Ei.s+e,Ei.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Ei),t.getHSL(Nr);const n=fr(Ei.h,Nr.h,e),s=fr(Ei.s,Nr.s,e),r=fr(Ei.l,Nr.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const un=new ae;ae.NAMES=$d;let km=0;class Nn extends ts{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:km++}),this.uuid=qn(),this.name="",this.type="Material",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ae(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=7680,this.stencilZFail=7680,this.stencilZPass=7680,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==1&&(n.blending=this.blending),this.side!==0&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==204&&(n.blendSrc=this.blendSrc),this.blendDst!==205&&(n.blendDst=this.blendDst),this.blendEquation!==100&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==3&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==519&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==7680&&(n.stencilFail=this.stencilFail),this.stencilZFail!==7680&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==7680&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const c=r[o];delete c.metadata,a.push(c)}return a}if(e){const r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class tn extends Nn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ae(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Un,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Ke=new F,Ur=new ee;class Ie{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=35044,this.updateRanges=[],this.gpuType=1015,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Ur.fromBufferAttribute(this,e),Ur.applyMatrix3(t),this.setXY(e,Ur.x,Ur.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ke.fromBufferAttribute(this,e),Ke.applyMatrix3(t),this.setXYZ(e,Ke.x,Ke.y,Ke.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ke.fromBufferAttribute(this,e),Ke.applyMatrix4(t),this.setXYZ(e,Ke.x,Ke.y,Ke.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ke.fromBufferAttribute(this,e),Ke.applyNormalMatrix(t),this.setXYZ(e,Ke.x,Ke.y,Ke.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ke.fromBufferAttribute(this,e),Ke.transformDirection(t),this.setXYZ(e,Ke.x,Ke.y,Ke.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Wn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ne(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Wn(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ne(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Wn(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ne(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Wn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ne(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Wn(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ne(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ne(e,this.array),n=Ne(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Ne(e,this.array),n=Ne(n,this.array),s=Ne(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Ne(e,this.array),n=Ne(n,this.array),s=Ne(s,this.array),r=Ne(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==35044&&(t.usage=this.usage),t}}class Yd extends Ie{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Zd extends Ie{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Ve extends Ie{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Bm=0;const In=new he,bo=new ze,fs=new F,wn=new dn,qs=new dn,Qe=new F;class Xe extends ts{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Bm++}),this.uuid=qn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(jd(t)?Zd:Yd)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new _e().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return In.makeRotationFromQuaternion(t),this.applyMatrix4(In),this}rotateX(t){return In.makeRotationX(t),this.applyMatrix4(In),this}rotateY(t){return In.makeRotationY(t),this.applyMatrix4(In),this}rotateZ(t){return In.makeRotationZ(t),this.applyMatrix4(In),this}translate(t,e,n){return In.makeTranslation(t,e,n),this.applyMatrix4(In),this}scale(t,e,n){return In.makeScale(t,e,n),this.applyMatrix4(In),this}lookAt(t){return bo.lookAt(t),bo.updateMatrix(),this.applyMatrix4(bo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(fs).negate(),this.translate(fs.x,fs.y,fs.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Ve(n,3))}else{const n=Math.min(t.length,e.count);for(let s=0;s<n;s++){const r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new dn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];wn.setFromBufferAttribute(r),this.morphTargetsRelative?(Qe.addVectors(this.boundingBox.min,wn.min),this.boundingBox.expandByPoint(Qe),Qe.addVectors(this.boundingBox.max,wn.max),this.boundingBox.expandByPoint(Qe)):(this.boundingBox.expandByPoint(wn.min),this.boundingBox.expandByPoint(wn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new On);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(t){const n=this.boundingSphere.center;if(wn.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];qs.setFromBufferAttribute(o),this.morphTargetsRelative?(Qe.addVectors(wn.min,qs.min),wn.expandByPoint(Qe),Qe.addVectors(wn.max,qs.max),wn.expandByPoint(Qe)):(wn.expandByPoint(qs.min),wn.expandByPoint(qs.max))}wn.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Qe.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Qe));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],c=this.morphTargetsRelative;for(let u=0,h=o.count;u<h;u++)Qe.fromBufferAttribute(o,u),c&&(fs.fromBufferAttribute(t,u),Qe.add(fs)),s=Math.max(s,n.distanceToSquared(Qe))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ie(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let I=0;I<n.count;I++)o[I]=new F,c[I]=new F;const u=new F,h=new F,l=new F,d=new ee,f=new ee,p=new ee,_=new F,g=new F;function m(I,S,A){u.fromBufferAttribute(n,I),h.fromBufferAttribute(n,S),l.fromBufferAttribute(n,A),d.fromBufferAttribute(r,I),f.fromBufferAttribute(r,S),p.fromBufferAttribute(r,A),h.sub(u),l.sub(u),f.sub(d),p.sub(d);const C=1/(f.x*p.y-p.x*f.y);isFinite(C)&&(_.copy(h).multiplyScalar(p.y).addScaledVector(l,-f.y).multiplyScalar(C),g.copy(l).multiplyScalar(f.x).addScaledVector(h,-p.x).multiplyScalar(C),o[I].add(_),o[S].add(_),o[A].add(_),c[I].add(g),c[S].add(g),c[A].add(g))}let v=this.groups;v.length===0&&(v=[{start:0,count:t.count}]);for(let I=0,S=v.length;I<S;++I){const A=v[I],C=A.start,N=A.count;for(let k=C,H=C+N;k<H;k+=3)m(t.getX(k+0),t.getX(k+1),t.getX(k+2))}const y=new F,x=new F,w=new F,T=new F;function R(I){w.fromBufferAttribute(s,I),T.copy(w);const S=o[I];y.copy(S),y.sub(w.multiplyScalar(w.dot(S))).normalize(),x.crossVectors(T,S);const C=x.dot(c[I])<0?-1:1;a.setXYZW(I,y.x,y.y,y.z,C)}for(let I=0,S=v.length;I<S;++I){const A=v[I],C=A.start,N=A.count;for(let k=C,H=C+N;k<H;k+=3)R(t.getX(k+0)),R(t.getX(k+1)),R(t.getX(k+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ie(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const s=new F,r=new F,a=new F,o=new F,c=new F,u=new F,h=new F,l=new F;if(t)for(let d=0,f=t.count;d<f;d+=3){const p=t.getX(d+0),_=t.getX(d+1),g=t.getX(d+2);s.fromBufferAttribute(e,p),r.fromBufferAttribute(e,_),a.fromBufferAttribute(e,g),h.subVectors(a,r),l.subVectors(s,r),h.cross(l),o.fromBufferAttribute(n,p),c.fromBufferAttribute(n,_),u.fromBufferAttribute(n,g),o.add(h),c.add(h),u.add(h),n.setXYZ(p,o.x,o.y,o.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(g,u.x,u.y,u.z)}else for(let d=0,f=e.count;d<f;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),h.subVectors(a,r),l.subVectors(s,r),h.cross(l),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Qe.fromBufferAttribute(t,e),Qe.normalize(),t.setXYZ(e,Qe.x,Qe.y,Qe.z)}toNonIndexed(){function t(o,c){const u=o.array,h=o.itemSize,l=o.normalized,d=new u.constructor(c.length*h);let f=0,p=0;for(let _=0,g=c.length;_<g;_++){o.isInterleavedBufferAttribute?f=c[_]*o.data.stride+o.offset:f=c[_]*h;for(let m=0;m<h;m++)d[p++]=u[f++]}return new Ie(d,h,l)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Xe,n=this.index.array,s=this.attributes;for(const o in s){const c=s[o],u=t(c,n);e.setAttribute(o,u)}const r=this.morphAttributes;for(const o in r){const c=[],u=r[o];for(let h=0,l=u.length;h<l;h++){const d=u[h],f=t(d,n);c.push(f)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const u=a[o];e.addGroup(u.start,u.count,u.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const u in c)c[u]!==void 0&&(t[u]=c[u]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const u=n[c];t.data.attributes[c]=u.toJSON(t.data)}const s={};let r=!1;for(const c in this.morphAttributes){const u=this.morphAttributes[c],h=[];for(let l=0,d=u.length;l<d;l++){const f=u[l];h.push(f.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const u in s){const h=s[u];this.setAttribute(u,h.clone(e))}const r=t.morphAttributes;for(const u in r){const h=[],l=r[u];for(let d=0,f=l.length;d<f;d++)h.push(l[d].clone(e));this.morphAttributes[u]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let u=0,h=a.length;u<h;u++){const l=a[u];this.addGroup(l.start,l.count,l.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Cl=new he,Fi=new Va,Or=new On,Il=new F,kr=new F,Br=new F,Gr=new F,xo=new F,zr=new F,Pl=new F,Hr=new F;class Re extends ze{constructor(t=new Xe,e=new tn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(r&&o){zr.set(0,0,0);for(let c=0,u=r.length;c<u;c++){const h=o[c],l=r[c];h!==0&&(xo.fromBufferAttribute(l,t),a?zr.addScaledVector(xo,h):zr.addScaledVector(xo.sub(e),h))}e.add(zr)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Or.copy(n.boundingSphere),Or.applyMatrix4(r),Fi.copy(t.ray).recast(t.near),!(Or.containsPoint(Fi.origin)===!1&&(Fi.intersectSphere(Or,Il)===null||Fi.origin.distanceToSquared(Il)>(t.far-t.near)**2))&&(Cl.copy(r).invert(),Fi.copy(t.ray).applyMatrix4(Cl),!(n.boundingBox!==null&&Fi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Fi)))}_computeIntersections(t,e,n){let s;const r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,u=r.attributes.uv,h=r.attributes.uv1,l=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let p=0,_=d.length;p<_;p++){const g=d[p],m=a[g.materialIndex],v=Math.max(g.start,f.start),y=Math.min(o.count,Math.min(g.start+g.count,f.start+f.count));for(let x=v,w=y;x<w;x+=3){const T=o.getX(x),R=o.getX(x+1),I=o.getX(x+2);s=Vr(this,m,t,n,u,h,l,T,R,I),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{const p=Math.max(0,f.start),_=Math.min(o.count,f.start+f.count);for(let g=p,m=_;g<m;g+=3){const v=o.getX(g),y=o.getX(g+1),x=o.getX(g+2);s=Vr(this,a,t,n,u,h,l,v,y,x),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let p=0,_=d.length;p<_;p++){const g=d[p],m=a[g.materialIndex],v=Math.max(g.start,f.start),y=Math.min(c.count,Math.min(g.start+g.count,f.start+f.count));for(let x=v,w=y;x<w;x+=3){const T=x,R=x+1,I=x+2;s=Vr(this,m,t,n,u,h,l,T,R,I),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{const p=Math.max(0,f.start),_=Math.min(c.count,f.start+f.count);for(let g=p,m=_;g<m;g+=3){const v=g,y=g+1,x=g+2;s=Vr(this,a,t,n,u,h,l,v,y,x),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}}}function Gm(i,t,e,n,s,r,a,o){let c;if(t.side===1?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,t.side===0,o),c===null)return null;Hr.copy(o),Hr.applyMatrix4(i.matrixWorld);const u=e.ray.origin.distanceTo(Hr);return u<e.near||u>e.far?null:{distance:u,point:Hr.clone(),object:i}}function Vr(i,t,e,n,s,r,a,o,c,u){i.getVertexPosition(o,kr),i.getVertexPosition(c,Br),i.getVertexPosition(u,Gr);const h=Gm(i,t,e,n,kr,Br,Gr,Pl);if(h){const l=new F;Fn.getBarycoord(Pl,kr,Br,Gr,l),s&&(h.uv=Fn.getInterpolatedAttribute(s,o,c,u,l,new ee)),r&&(h.uv1=Fn.getInterpolatedAttribute(r,o,c,u,l,new ee)),a&&(h.normal=Fn.getInterpolatedAttribute(a,o,c,u,l,new F),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a:o,b:c,c:u,normal:new F,materialIndex:0};Fn.getNormal(kr,Br,Gr,d.normal),h.face=d,h.barycoord=l}return h}class _i extends Xe{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const c=[],u=[],h=[],l=[];let d=0,f=0;p("z","y","x",-1,-1,n,e,t,a,r,0),p("z","y","x",1,-1,n,e,-t,a,r,1),p("x","z","y",1,1,t,n,e,s,a,2),p("x","z","y",1,-1,t,n,-e,s,a,3),p("x","y","z",1,-1,t,e,n,s,r,4),p("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new Ve(u,3)),this.setAttribute("normal",new Ve(h,3)),this.setAttribute("uv",new Ve(l,2));function p(_,g,m,v,y,x,w,T,R,I,S){const A=x/R,C=w/I,N=x/2,k=w/2,H=T/2,Q=R+1,V=I+1;let j=0,O=0;const nt=new F;for(let Y=0;Y<V;Y++){const J=Y*C-k;for(let ht=0;ht<Q;ht++){const Vt=ht*A-N;nt[_]=Vt*v,nt[g]=J*y,nt[m]=H,u.push(nt.x,nt.y,nt.z),nt[_]=0,nt[g]=0,nt[m]=T>0?1:-1,h.push(nt.x,nt.y,nt.z),l.push(ht/R),l.push(1-Y/I),j+=1}}for(let Y=0;Y<I;Y++)for(let J=0;J<R;J++){const ht=d+J+Q*Y,Vt=d+J+Q*(Y+1),tt=d+(J+1)+Q*(Y+1),rt=d+(J+1)+Q*Y;c.push(ht,Vt,rt),c.push(Vt,tt,rt),O+=6}o.addGroup(f,O,S),f+=O,d+=j}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new _i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Ls(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function pn(i){const t={};for(let e=0;e<i.length;e++){const n=Ls(i[e]);for(const s in n)t[s]=n[s]}return t}function zm(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Jd(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ce.workingColorSpace}const Fc={clone:Ls,merge:pn};var Hm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Vm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class bi extends Nn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Hm,this.fragmentShader=Vm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ls(t.uniforms),this.uniformsGroups=zm(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Qd extends ze{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new he,this.projectionMatrix=new he,this.projectionMatrixInverse=new he,this.coordinateSystem=2e3}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ti=new F,Ll=new ee,Dl=new ee;class gn extends Qd{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Ps*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(dr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ps*2*Math.atan(Math.tan(dr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Ti.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Ti.x,Ti.y).multiplyScalar(-t/Ti.z),Ti.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ti.x,Ti.y).multiplyScalar(-t/Ti.z)}getViewSize(t,e){return this.getViewBounds(t,Ll,Dl),e.subVectors(Dl,Ll)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(dr*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,u=a.fullHeight;r+=a.offsetX*s/c,e-=a.offsetY*n/u,s*=a.width/c,n*=a.height/u}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const ps=-90,ms=1;class Wm extends ze{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new gn(ps,ms,t,e);s.layers=this.layers,this.add(s);const r=new gn(ps,ms,t,e);r.layers=this.layers,this.add(r);const a=new gn(ps,ms,t,e);a.layers=this.layers,this.add(a);const o=new gn(ps,ms,t,e);o.layers=this.layers,this.add(o);const c=new gn(ps,ms,t,e);c.layers=this.layers,this.add(c);const u=new gn(ps,ms,t,e);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,c]=e;for(const u of e)this.remove(u);if(t===2e3)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const u of e)this.add(u),u.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,c,u,h]=this.children,l=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,u),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(l,d,f),t.xr.enabled=p,n.texture.needsPMREMUpdate=!0}}class tf extends Ye{constructor(t,e,n,s,r,a,o,c,u,h){t=t!==void 0?t:[],e=e!==void 0?e:301,super(t,e,n,s,r,a,o,c,u,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class jm extends Zi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new tf(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:1006}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new _i(5,5,5),r=new bi({name:"CubemapFromEquirect",uniforms:Ls(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});r.uniforms.tEquirect.value=e;const a=new Re(s,r),o=e.minFilter;return e.minFilter===1008&&(e.minFilter=1006),new Wm(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}}class Nc{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new ae(t),this.near=e,this.far=n}clone(){return new Nc(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Xm extends ze{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Un,this.environmentIntensity=1,this.environmentRotation=new Un,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Uc{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=35044,this.updateRanges=[],this.version=0,this.uuid=qn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=qn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=qn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const fn=new F;class jn{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)fn.fromBufferAttribute(this,e),fn.applyMatrix4(t),this.setXYZ(e,fn.x,fn.y,fn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)fn.fromBufferAttribute(this,e),fn.applyNormalMatrix(t),this.setXYZ(e,fn.x,fn.y,fn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)fn.fromBufferAttribute(this,e),fn.transformDirection(t),this.setXYZ(e,fn.x,fn.y,fn.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Wn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ne(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=Ne(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Ne(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Ne(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Ne(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Wn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Wn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Wn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Wn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ne(e,this.array),n=Ne(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ne(e,this.array),n=Ne(n,this.array),s=Ne(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ne(e,this.array),n=Ne(n,this.array),s=Ne(s,this.array),r=Ne(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Ie(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new jn(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class ef extends Nn{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new ae(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let gs;const Ks=new F,_s=new F,bs=new F,xs=new ee,$s=new ee,nf=new he,Wr=new F,Ys=new F,jr=new F,Fl=new ee,vo=new ee,Nl=new ee;class qm extends ze{constructor(t=new ef){if(super(),this.isSprite=!0,this.type="Sprite",gs===void 0){gs=new Xe;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Uc(e,5);gs.setIndex([0,1,2,0,2,3]),gs.setAttribute("position",new jn(n,3,0,!1)),gs.setAttribute("uv",new jn(n,2,3,!1))}this.geometry=gs,this.material=t,this.center=new ee(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),_s.setFromMatrixScale(this.matrixWorld),nf.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),bs.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&_s.multiplyScalar(-bs.z);const n=this.material.rotation;let s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));const a=this.center;Xr(Wr.set(-.5,-.5,0),bs,a,_s,s,r),Xr(Ys.set(.5,-.5,0),bs,a,_s,s,r),Xr(jr.set(.5,.5,0),bs,a,_s,s,r),Fl.set(0,0),vo.set(1,0),Nl.set(1,1);let o=t.ray.intersectTriangle(Wr,Ys,jr,!1,Ks);if(o===null&&(Xr(Ys.set(-.5,.5,0),bs,a,_s,s,r),vo.set(0,1),o=t.ray.intersectTriangle(Wr,jr,Ys,!1,Ks),o===null))return;const c=t.ray.origin.distanceTo(Ks);c<t.near||c>t.far||e.push({distance:c,point:Ks.clone(),uv:Fn.getInterpolation(Ks,Wr,Ys,jr,Fl,vo,Nl,new ee),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Xr(i,t,e,n,s,r){xs.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?($s.x=r*xs.x-s*xs.y,$s.y=s*xs.x+r*xs.y):$s.copy(xs),i.copy(t),i.x+=$s.x,i.y+=$s.y,i.applyMatrix4(nf)}const Ul=new F,Ol=new xe,kl=new xe,Km=new F,Bl=new he,qr=new F,yo=new On,Gl=new he,Mo=new Va;class $m extends Re{constructor(t,e){super(t,e),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=pl,this.bindMatrix=new he,this.bindMatrixInverse=new he,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const t=this.geometry;this.boundingBox===null&&(this.boundingBox=new dn),this.boundingBox.makeEmpty();const e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,qr),this.boundingBox.expandByPoint(qr)}computeBoundingSphere(){const t=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new On),this.boundingSphere.makeEmpty();const e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,qr),this.boundingSphere.expandByPoint(qr)}copy(t,e){return super.copy(t,e),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}raycast(t,e){const n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),yo.copy(this.boundingSphere),yo.applyMatrix4(s),t.ray.intersectsSphere(yo)!==!1&&(Gl.copy(s).invert(),Mo.copy(t.ray).applyMatrix4(Gl),!(this.boundingBox!==null&&Mo.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(t,e,Mo)))}getVertexPosition(t,e){return super.getVertexPosition(t,e),this.applyBoneTransform(t,e),e}bind(t,e){this.skeleton=t,e===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const t=new xe,e=this.geometry.attributes.skinWeight;for(let n=0,s=e.count;n<s;n++){t.fromBufferAttribute(e,n);const r=1/t.manhattanLength();r!==1/0?t.multiplyScalar(r):t.set(1,0,0,0),e.setXYZW(n,t.x,t.y,t.z,t.w)}}updateMatrixWorld(t){super.updateMatrixWorld(t),this.bindMode===pl?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===sm?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(t,e){const n=this.skeleton,s=this.geometry;Ol.fromBufferAttribute(s.attributes.skinIndex,t),kl.fromBufferAttribute(s.attributes.skinWeight,t),Ul.copy(e).applyMatrix4(this.bindMatrix),e.set(0,0,0);for(let r=0;r<4;r++){const a=kl.getComponent(r);if(a!==0){const o=Ol.getComponent(r);Bl.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),e.addScaledVector(Km.copy(Ul).applyMatrix4(Bl),a)}}return e.applyMatrix4(this.bindMatrixInverse)}}class sf extends ze{constructor(){super(),this.isBone=!0,this.type="Bone"}}class rf extends Ye{constructor(t=null,e=1,n=1,s,r,a,o,c,u=1003,h=1003,l,d){super(null,a,o,c,u,h,s,r,l,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const zl=new he,Ym=new he;class Oc{constructor(t=[],e=[]){this.uuid=qn(),this.bones=t.slice(0),this.boneInverses=e,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const t=this.bones,e=this.boneInverses;if(this.boneMatrices=new Float32Array(t.length*16),e.length===0)this.calculateInverses();else if(t.length!==e.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new he)}}calculateInverses(){this.boneInverses.length=0;for(let t=0,e=this.bones.length;t<e;t++){const n=new he;this.bones[t]&&n.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&n.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const t=this.bones,e=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,a=t.length;r<a;r++){const o=t[r]?t[r].matrixWorld:Ym;zl.multiplyMatrices(o,e[r]),zl.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new Oc(this.bones,this.boneInverses)}computeBoneTexture(){let t=Math.sqrt(this.bones.length*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);const e=new Float32Array(t*t*4);e.set(this.boneMatrices);const n=new rf(e,t,t,1023,1015);return n.needsUpdate=!0,this.boneMatrices=e,this.boneTexture=n,this}getBoneByName(t){for(let e=0,n=this.bones.length;e<n;e++){const s=this.bones[e];if(s.name===t)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(t,e){this.uuid=t.uuid;for(let n=0,s=t.bones.length;n<s;n++){const r=t.bones[n];let a=e[r];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),a=new sf),this.bones.push(a),this.boneInverses.push(new he().fromArray(t.boneInverses[n]))}return this.init(),this}toJSON(){const t={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;const e=this.bones,n=this.boneInverses;for(let s=0,r=e.length;s<r;s++){const a=e[s];t.bones.push(a.uuid);const o=n[s];t.boneInverses.push(o.toArray())}return t}}class uc extends Ie{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const vs=new he,Hl=new he,Kr=[],Vl=new dn,Zm=new he,Zs=new Re,Js=new On;class Jm extends Re{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new uc(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Zm)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new dn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,vs),Vl.copy(t.boundingBox).applyMatrix4(vs),this.boundingBox.union(Vl)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new On),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,vs),Js.copy(t.boundingSphere).applyMatrix4(vs),this.boundingSphere.union(Js)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(Zs.geometry=this.geometry,Zs.material=this.material,Zs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Js.copy(this.boundingSphere),Js.applyMatrix4(n),t.ray.intersectsSphere(Js)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,vs),Hl.multiplyMatrices(n,vs),Zs.matrixWorld=Hl,Zs.raycast(t,Kr);for(let a=0,o=Kr.length;a<o;a++){const c=Kr[a];c.instanceId=r,c.object=this,e.push(c)}Kr.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new uc(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new rf(new Float32Array(s*this.count),s,this.count,1028,1015));const r=this.morphTexture.source.data.data;let a=0;for(let u=0;u<n.length;u++)a+=n[u];const o=this.geometry.morphTargetsRelative?1:1-a,c=s*t;r[c]=o,r.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}const So=new F,Qm=new F,tg=new _e;class zi{constructor(t=new F(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=So.subVectors(n,e).cross(Qm.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(So),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||tg.getNormalMatrix(t),s=this.coplanarPoint(So).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ni=new On,$r=new F;class kc{constructor(t=new zi,e=new zi,n=new zi,s=new zi,r=new zi,a=new zi){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=2e3){const n=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],c=s[3],u=s[4],h=s[5],l=s[6],d=s[7],f=s[8],p=s[9],_=s[10],g=s[11],m=s[12],v=s[13],y=s[14],x=s[15];if(n[0].setComponents(c-r,d-u,g-f,x-m).normalize(),n[1].setComponents(c+r,d+u,g+f,x+m).normalize(),n[2].setComponents(c+a,d+h,g+p,x+v).normalize(),n[3].setComponents(c-a,d-h,g-p,x-v).normalize(),n[4].setComponents(c-o,d-l,g-_,x-y).normalize(),e===2e3)n[5].setComponents(c+o,d+l,g+_,x+y).normalize();else if(e===2001)n[5].setComponents(o,l,_,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ni.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ni.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ni)}intersectsSprite(t){return Ni.center.set(0,0,0),Ni.radius=.7071067811865476,Ni.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ni)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if($r.x=s.normal.x>0?t.max.x:t.min.x,$r.y=s.normal.y>0?t.max.y:t.min.y,$r.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint($r)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class af extends Nn{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ae(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const La=new F,Da=new F,Wl=new he,Qs=new Va,Yr=new On,Ao=new F,jl=new F;class Bc extends ze{constructor(t=new Xe,e=new af){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)La.fromBufferAttribute(e,s-1),Da.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=La.distanceTo(Da);t.setAttribute("lineDistance",new Ve(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Yr.copy(n.boundingSphere),Yr.applyMatrix4(s),Yr.radius+=r,t.ray.intersectsSphere(Yr)===!1)return;Wl.copy(s).invert(),Qs.copy(t.ray).applyMatrix4(Wl);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,u=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){const f=Math.max(0,a.start),p=Math.min(h.count,a.start+a.count);for(let _=f,g=p-1;_<g;_+=u){const m=h.getX(_),v=h.getX(_+1),y=Zr(this,t,Qs,c,m,v);y&&e.push(y)}if(this.isLineLoop){const _=h.getX(p-1),g=h.getX(f),m=Zr(this,t,Qs,c,_,g);m&&e.push(m)}}else{const f=Math.max(0,a.start),p=Math.min(d.count,a.start+a.count);for(let _=f,g=p-1;_<g;_+=u){const m=Zr(this,t,Qs,c,_,_+1);m&&e.push(m)}if(this.isLineLoop){const _=Zr(this,t,Qs,c,p-1,f);_&&e.push(_)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Zr(i,t,e,n,s,r){const a=i.geometry.attributes.position;if(La.fromBufferAttribute(a,s),Da.fromBufferAttribute(a,r),e.distanceSqToSegment(La,Da,Ao,jl)>n)return;Ao.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Ao);if(!(c<t.near||c>t.far))return{distance:c,point:jl.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}const Xl=new F,ql=new F;class eg extends Bc{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)Xl.fromBufferAttribute(e,s),ql.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Xl.distanceTo(ql);t.setAttribute("lineDistance",new Ve(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class ng extends Bc{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}}class of extends Nn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ae(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Kl=new he,hc=new Va,Jr=new On,Qr=new F;class ig extends ze{constructor(t=new Xe,e=new of){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Jr.copy(n.boundingSphere),Jr.applyMatrix4(s),Jr.radius+=r,t.ray.intersectsSphere(Jr)===!1)return;Kl.copy(s).invert(),hc.copy(t.ray).applyMatrix4(Kl);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,u=n.index,l=n.attributes.position;if(u!==null){const d=Math.max(0,a.start),f=Math.min(u.count,a.start+a.count);for(let p=d,_=f;p<_;p++){const g=u.getX(p);Qr.fromBufferAttribute(l,g),$l(Qr,g,c,s,t,e,this)}}else{const d=Math.max(0,a.start),f=Math.min(l.count,a.start+a.count);for(let p=d,_=f;p<_;p++)Qr.fromBufferAttribute(l,p),$l(Qr,p,c,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function $l(i,t,e,n,s,r,a){const o=hc.distanceSqToPoint(i);if(o<e){const c=new F;hc.closestPointToPoint(i,c),c.applyMatrix4(n);const u=s.ray.origin.distanceTo(c);if(u<s.near||u>s.far)return;r.push({distance:u,distanceToRay:Math.sqrt(o),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}class _n extends ze{constructor(){super(),this.isGroup=!0,this.type="Group"}}class Cn extends Ye{constructor(t,e,n,s,r,a,o,c,u){super(t,e,n,s,r,a,o,c,u),this.isCanvasTexture=!0,this.needsUpdate=!0}}class cf extends Ye{constructor(t,e,n,s,r,a,o,c,u,h=1026){if(h!==1026&&h!==1027)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===1026&&(n=1014),n===void 0&&h===1027&&(n=1020),super(null,s,r,a,o,c,h,n,u),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:1003,this.minFilter=c!==void 0?c:1003,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class Gc extends Xe{constructor(t=[new ee(0,-.5),new ee(.5,0),new ee(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=Me(s,0,Math.PI*2);const r=[],a=[],o=[],c=[],u=[],h=1/e,l=new F,d=new ee,f=new F,p=new F,_=new F;let g=0,m=0;for(let v=0;v<=t.length-1;v++)switch(v){case 0:g=t[v+1].x-t[v].x,m=t[v+1].y-t[v].y,f.x=m*1,f.y=-g,f.z=m*0,_.copy(f),f.normalize(),c.push(f.x,f.y,f.z);break;case t.length-1:c.push(_.x,_.y,_.z);break;default:g=t[v+1].x-t[v].x,m=t[v+1].y-t[v].y,f.x=m*1,f.y=-g,f.z=m*0,p.copy(f),f.x+=_.x,f.y+=_.y,f.z+=_.z,f.normalize(),c.push(f.x,f.y,f.z),_.copy(p)}for(let v=0;v<=e;v++){const y=n+v*h*s,x=Math.sin(y),w=Math.cos(y);for(let T=0;T<=t.length-1;T++){l.x=t[T].x*x,l.y=t[T].y,l.z=t[T].x*w,a.push(l.x,l.y,l.z),d.x=v/e,d.y=T/(t.length-1),o.push(d.x,d.y);const R=c[3*T+0]*x,I=c[3*T+1],S=c[3*T+0]*w;u.push(R,I,S)}}for(let v=0;v<e;v++)for(let y=0;y<t.length-1;y++){const x=y+v*t.length,w=x,T=x+t.length,R=x+t.length+1,I=x+1;r.push(w,T,I),r.push(R,I,T)}this.setIndex(r),this.setAttribute("position",new Ve(a,3)),this.setAttribute("uv",new Ve(o,2)),this.setAttribute("normal",new Ve(u,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Gc(t.points,t.segments,t.phiStart,t.phiLength)}}class zc extends Xe{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const r=[],a=[],o=[],c=[],u=new F,h=new ee;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let l=0,d=3;l<=e;l++,d+=3){const f=n+l/e*s;u.x=t*Math.cos(f),u.y=t*Math.sin(f),a.push(u.x,u.y,u.z),o.push(0,0,1),h.x=(a[d]/t+1)/2,h.y=(a[d+1]/t+1)/2,c.push(h.x,h.y)}for(let l=1;l<=e;l++)r.push(l,l+1,0);this.setIndex(r),this.setAttribute("position",new Ve(a,3)),this.setAttribute("normal",new Ve(o,3)),this.setAttribute("uv",new Ve(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new zc(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Fa extends Xe{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};const u=this;s=Math.floor(s),r=Math.floor(r);const h=[],l=[],d=[],f=[];let p=0;const _=[],g=n/2;let m=0;v(),a===!1&&(t>0&&y(!0),e>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new Ve(l,3)),this.setAttribute("normal",new Ve(d,3)),this.setAttribute("uv",new Ve(f,2));function v(){const x=new F,w=new F;let T=0;const R=(e-t)/n;for(let I=0;I<=r;I++){const S=[],A=I/r,C=A*(e-t)+t;for(let N=0;N<=s;N++){const k=N/s,H=k*c+o,Q=Math.sin(H),V=Math.cos(H);w.x=C*Q,w.y=-A*n+g,w.z=C*V,l.push(w.x,w.y,w.z),x.set(Q,R,V).normalize(),d.push(x.x,x.y,x.z),f.push(k,1-A),S.push(p++)}_.push(S)}for(let I=0;I<s;I++)for(let S=0;S<r;S++){const A=_[S][I],C=_[S+1][I],N=_[S+1][I+1],k=_[S][I+1];(t>0||S!==0)&&(h.push(A,C,k),T+=3),(e>0||S!==r-1)&&(h.push(C,N,k),T+=3)}u.addGroup(m,T,0),m+=T}function y(x){const w=p,T=new ee,R=new F;let I=0;const S=x===!0?t:e,A=x===!0?1:-1;for(let N=1;N<=s;N++)l.push(0,g*A,0),d.push(0,A,0),f.push(.5,.5),p++;const C=p;for(let N=0;N<=s;N++){const H=N/s*c+o,Q=Math.cos(H),V=Math.sin(H);R.x=S*V,R.y=g*A,R.z=S*Q,l.push(R.x,R.y,R.z),d.push(0,A,0),T.x=Q*.5+.5,T.y=V*.5*A+.5,f.push(T.x,T.y),p++}for(let N=0;N<s;N++){const k=w+N,H=C+N;x===!0?h.push(H,H+1,k):h.push(H+1,H,k),I+=3}u.addGroup(m,I,x===!0?1:2),m+=I}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Fa(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Kn extends Xe{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,a=e/2,o=Math.floor(n),c=Math.floor(s),u=o+1,h=c+1,l=t/o,d=e/c,f=[],p=[],_=[],g=[];for(let m=0;m<h;m++){const v=m*d-a;for(let y=0;y<u;y++){const x=y*l-r;p.push(x,-v,0),_.push(0,0,1),g.push(y/o),g.push(1-m/c)}}for(let m=0;m<c;m++)for(let v=0;v<o;v++){const y=v+u*m,x=v+u*(m+1),w=v+1+u*(m+1),T=v+1+u*m;f.push(y,x,T),f.push(x,w,T)}this.setIndex(f),this.setAttribute("position",new Ve(p,3)),this.setAttribute("normal",new Ve(_,3)),this.setAttribute("uv",new Ve(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Kn(t.width,t.height,t.widthSegments,t.heightSegments)}}class Wa extends Xe{constructor(t=.5,e=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);const o=[],c=[],u=[],h=[];let l=t;const d=(e-t)/s,f=new F,p=new ee;for(let _=0;_<=s;_++){for(let g=0;g<=n;g++){const m=r+g/n*a;f.x=l*Math.cos(m),f.y=l*Math.sin(m),c.push(f.x,f.y,f.z),u.push(0,0,1),p.x=(f.x/e+1)/2,p.y=(f.y/e+1)/2,h.push(p.x,p.y)}l+=d}for(let _=0;_<s;_++){const g=_*(n+1);for(let m=0;m<n;m++){const v=m+g,y=v,x=v+n+1,w=v+n+2,T=v+1;o.push(y,x,T),o.push(x,w,T)}}this.setIndex(o),this.setAttribute("position",new Ve(c,3)),this.setAttribute("normal",new Ve(u,3)),this.setAttribute("uv",new Ve(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Wa(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class sg extends Xe{constructor(t=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:t},t!==null){const e=[],n=new Set,s=new F,r=new F;if(t.index!==null){const a=t.attributes.position,o=t.index;let c=t.groups;c.length===0&&(c=[{start:0,count:o.count,materialIndex:0}]);for(let u=0,h=c.length;u<h;++u){const l=c[u],d=l.start,f=l.count;for(let p=d,_=d+f;p<_;p+=3)for(let g=0;g<3;g++){const m=o.getX(p+g),v=o.getX(p+(g+1)%3);s.fromBufferAttribute(a,m),r.fromBufferAttribute(a,v),Yl(s,r,n)===!0&&(e.push(s.x,s.y,s.z),e.push(r.x,r.y,r.z))}}}else{const a=t.attributes.position;for(let o=0,c=a.count/3;o<c;o++)for(let u=0;u<3;u++){const h=3*o+u,l=3*o+(u+1)%3;s.fromBufferAttribute(a,h),r.fromBufferAttribute(a,l),Yl(s,r,n)===!0&&(e.push(s.x,s.y,s.z),e.push(r.x,r.y,r.z))}}this.setAttribute("position",new Ve(e,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}function Yl(i,t,e){const n=`${i.x},${i.y},${i.z}-${t.x},${t.y},${t.z}`,s=`${t.x},${t.y},${t.z}-${i.x},${i.y},${i.z}`;return e.has(n)===!0||e.has(s)===!0?!1:(e.add(n),e.add(s),!0)}class es extends Nn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ae(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ae(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new ee(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Un,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class ei extends es{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ee(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Me(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ae(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ae(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ae(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class br extends Nn{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new ae(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ae(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new ee(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Un,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class rg extends Nn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class ag extends Nn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}function Xi(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function lf(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function uf(i){function t(s,r){return i[s]-i[r]}const e=i.length,n=new Array(e);for(let s=0;s!==e;++s)n[s]=s;return n.sort(t),n}function dc(i,t,e){const n=i.length,s=new i.constructor(n);for(let r=0,a=0;a!==n;++r){const o=e[r]*t;for(let c=0;c!==t;++c)s[a++]=i[o+c]}return s}function Hc(i,t,e,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(t.push(r.time),e.push.apply(e,a)),r=i[s++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(t.push(r.time),a.toArray(e,e.length)),r=i[s++];while(r!==void 0);else do a=r[n],a!==void 0&&(t.push(r.time),e.push(a)),r=i[s++];while(r!==void 0)}function og(i,t,e,n,s=30){const r=i.clone();r.name=t;const a=[];for(let c=0;c<r.tracks.length;++c){const u=r.tracks[c],h=u.getValueSize(),l=[],d=[];for(let f=0;f<u.times.length;++f){const p=u.times[f]*s;if(!(p<e||p>=n)){l.push(u.times[f]);for(let _=0;_<h;++_)d.push(u.values[f*h+_])}}l.length!==0&&(u.times=Xi(l,u.times.constructor),u.values=Xi(d,u.values.constructor),a.push(u))}r.tracks=a;let o=1/0;for(let c=0;c<r.tracks.length;++c)o>r.tracks[c].times[0]&&(o=r.tracks[c].times[0]);for(let c=0;c<r.tracks.length;++c)r.tracks[c].shift(-1*o);return r.resetDuration(),r}function cg(i,t=0,e=i,n=30){n<=0&&(n=30);const s=e.tracks.length,r=t/n;for(let a=0;a<s;++a){const o=e.tracks[a],c=o.ValueTypeName;if(c==="bool"||c==="string")continue;const u=i.tracks.find(function(m){return m.name===o.name&&m.ValueTypeName===c});if(u===void 0)continue;let h=0;const l=o.getValueSize();o.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(h=l/3);let d=0;const f=u.getValueSize();u.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(d=f/3);const p=o.times.length-1;let _;if(r<=o.times[0]){const m=h,v=l-h;_=o.values.slice(m,v)}else if(r>=o.times[p]){const m=p*l+h,v=m+l-h;_=o.values.slice(m,v)}else{const m=o.createInterpolant(),v=h,y=l-h;m.evaluate(r),_=m.resultBuffer.slice(v,y)}c==="quaternion"&&new on().fromArray(_).normalize().conjugate().toArray(_);const g=u.times.length;for(let m=0;m<g;++m){const v=m*f+d;if(c==="quaternion")on.multiplyQuaternionsFlat(u.values,v,_,0,u.values,v);else{const y=f-d*2;for(let x=0;x<y;++x)u.values[v+x]-=_[x]}}}return i.blendMode=2501,i}const lg={convertArray:Xi,isTypedArray:lf,getKeyframeOrder:uf,sortedArray:dc,flattenJSON:Hc,subclip:og,makeClipAdditive:cg};class Ar{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){const e=this.parameterPositions;let n=this._cachedIndex,s=e[n],r=e[n-1];t:{e:{let a;n:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break e}a=e.length;break n}if(!(t>=r)){const o=e[1];t<o&&(n=2,r=o);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=e[--n-1],t>=r)break e}a=n,n=0;break n}break t}for(;n<a;){const o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){const e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class ug extends Ar{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:2400,endingEnd:2400}}intervalChanged_(t,e,n){const s=this.parameterPositions;let r=t-2,a=t+1,o=s[r],c=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case 2401:r=t,o=2*e-n;break;case 2402:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case 2401:a=t,c=2*n-e;break;case 2402:a=1,c=n+s[1]-s[0];break;default:a=t-1,c=e}const u=(n-e)*.5,h=this.valueSize;this._weightPrev=u/(e-o),this._weightNext=u/(c-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,n,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,u=c-o,h=this._offsetPrev,l=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-e)/(s-e),_=p*p,g=_*p,m=-d*g+2*d*_-d*p,v=(1+d)*g+(-1.5-2*d)*_+(-.5+d)*p+1,y=(-1-f)*g+(1.5+f)*_+.5*p,x=f*g-f*_;for(let w=0;w!==o;++w)r[w]=m*a[h+w]+v*a[u+w]+y*a[c+w]+x*a[l+w];return r}}class hf extends Ar{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,u=c-o,h=(n-e)/(s-e),l=1-h;for(let d=0;d!==o;++d)r[d]=a[u+d]*l+a[c+d]*h;return r}}class hg extends Ar{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}}class ni{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Xi(e,this.TimeBufferType),this.values=Xi(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){const e=t.constructor;let n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Xi(t.times,Array),values:Xi(t.values,Array)};const s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new hg(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new hf(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new ug(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case 2300:e=this.InterpolantFactoryMethodDiscrete;break;case 2301:e=this.InterpolantFactoryMethodLinear;break;case 2302:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return 2300;case this.InterpolantFactoryMethodLinear:return 2301;case this.InterpolantFactoryMethodSmooth:return 2302}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){const e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){const e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){const n=this.times,s=n.length;let r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);const o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0;const e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);const n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){const c=n[o];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,c),t=!1;break}if(a!==null&&a>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,c,a),t=!1;break}a=c}if(s!==void 0&&lf(s))for(let o=0,c=s.length;o!==c;++o){const u=s[o];if(isNaN(u)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,u),t=!1;break}}return t}optimize(){const t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===2302,r=t.length-1;let a=1;for(let o=1;o<r;++o){let c=!1;const u=t[o],h=t[o+1];if(u!==h&&(o!==1||u!==t[0]))if(s)c=!0;else{const l=o*n,d=l-n,f=l+n;for(let p=0;p!==n;++p){const _=e[l+p];if(_!==e[d+p]||_!==e[f+p]){c=!0;break}}}if(c){if(o!==a){t[a]=t[o];const l=o*n,d=a*n;for(let f=0;f!==n;++f)e[d+f]=e[l+f]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,c=a*n,u=0;u!==n;++u)e[c+u]=e[o+u];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){const t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}}ni.prototype.TimeBufferType=Float32Array;ni.prototype.ValueBufferType=Float32Array;ni.prototype.DefaultInterpolation=2301;class Us extends ni{constructor(t,e,n){super(t,e,n)}}Us.prototype.ValueTypeName="bool";Us.prototype.ValueBufferType=Array;Us.prototype.DefaultInterpolation=2300;Us.prototype.InterpolantFactoryMethodLinear=void 0;Us.prototype.InterpolantFactoryMethodSmooth=void 0;class df extends ni{}df.prototype.ValueTypeName="color";class Ds extends ni{}Ds.prototype.ValueTypeName="number";class dg extends Ar{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-e)/(s-e);let u=t*o;for(let h=u+o;u!==h;u+=4)on.slerpFlat(r,0,a,u-o,a,u,c);return r}}class Fs extends ni{InterpolantFactoryMethodLinear(t){return new dg(this.times,this.values,this.getValueSize(),t)}}Fs.prototype.ValueTypeName="quaternion";Fs.prototype.InterpolantFactoryMethodSmooth=void 0;class Os extends ni{constructor(t,e,n){super(t,e,n)}}Os.prototype.ValueTypeName="string";Os.prototype.ValueBufferType=Array;Os.prototype.DefaultInterpolation=2300;Os.prototype.InterpolantFactoryMethodLinear=void 0;Os.prototype.InterpolantFactoryMethodSmooth=void 0;class Ns extends ni{}Ns.prototype.ValueTypeName="vector";class fc{constructor(t="",e=-1,n=[],s=2500){this.name=t,this.tracks=n,this.duration=e,this.blendMode=s,this.uuid=qn(),this.duration<0&&this.resetDuration()}static parse(t){const e=[],n=t.tracks,s=1/(t.fps||1);for(let a=0,o=n.length;a!==o;++a)e.push(pg(n[a]).scale(s));const r=new this(t.name,t.duration,e,t.blendMode);return r.uuid=t.uuid,r}static toJSON(t){const e=[],n=t.tracks,s={name:t.name,duration:t.duration,tracks:e,uuid:t.uuid,blendMode:t.blendMode};for(let r=0,a=n.length;r!==a;++r)e.push(ni.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(t,e,n,s){const r=e.length,a=[];for(let o=0;o<r;o++){let c=[],u=[];c.push((o+r-1)%r,o,(o+1)%r),u.push(0,1,0);const h=uf(c);c=dc(c,1,h),u=dc(u,1,h),!s&&c[0]===0&&(c.push(r),u.push(u[0])),a.push(new Ds(".morphTargetInfluences["+e[o].name+"]",c,u).scale(1/n))}return new this(t,-1,a)}static findByName(t,e){let n=t;if(!Array.isArray(t)){const s=t;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===e)return n[s];return null}static CreateClipsFromMorphTargetSequences(t,e,n){const s={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,c=t.length;o<c;o++){const u=t[o],h=u.name.match(r);if(h&&h.length>1){const l=h[1];let d=s[l];d||(s[l]=d=[]),d.push(u)}}const a=[];for(const o in s)a.push(this.CreateFromMorphTargetSequence(o,s[o],e,n));return a}static parseAnimation(t,e){if(!t)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(l,d,f,p,_){if(f.length!==0){const g=[],m=[];Hc(f,g,m,p),g.length!==0&&_.push(new l(d,g,m))}},s=[],r=t.name||"default",a=t.fps||30,o=t.blendMode;let c=t.length||-1;const u=t.hierarchy||[];for(let l=0;l<u.length;l++){const d=u[l].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let p;for(p=0;p<d.length;p++)if(d[p].morphTargets)for(let _=0;_<d[p].morphTargets.length;_++)f[d[p].morphTargets[_]]=-1;for(const _ in f){const g=[],m=[];for(let v=0;v!==d[p].morphTargets.length;++v){const y=d[p];g.push(y.time),m.push(y.morphTarget===_?1:0)}s.push(new Ds(".morphTargetInfluence["+_+"]",g,m))}c=f.length*a}else{const f=".bones["+e[l].name+"]";n(Ns,f+".position",d,"pos",s),n(Fs,f+".quaternion",d,"rot",s),n(Ns,f+".scale",d,"scl",s)}}return s.length===0?null:new this(r,c,s,o)}resetDuration(){const t=this.tracks;let e=0;for(let n=0,s=t.length;n!==s;++n){const r=this.tracks[n];e=Math.max(e,r.times[r.times.length-1])}return this.duration=e,this}trim(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].trim(0,this.duration);return this}validate(){let t=!0;for(let e=0;e<this.tracks.length;e++)t=t&&this.tracks[e].validate();return t}optimize(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].optimize();return this}clone(){const t=[];for(let e=0;e<this.tracks.length;e++)t.push(this.tracks[e].clone());return new this.constructor(this.name,this.duration,t,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function fg(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Ds;case"vector":case"vector2":case"vector3":case"vector4":return Ns;case"color":return df;case"quaternion":return Fs;case"bool":case"boolean":return Us;case"string":return Os}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function pg(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const t=fg(i.type);if(i.times===void 0){const e=[],n=[];Hc(i.keys,e,n,"value"),i.times=e,i.values=n}return t.parse!==void 0?t.parse(i):new t(i.name,i.times,i.values,i.interpolation)}const Ii={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(this.files[i]=t)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class mg{constructor(t,e,n){const s=this;let r=!1,a=0,o=0,c;const u=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,l){return u.push(h,l),this},this.removeHandler=function(h){const l=u.indexOf(h);return l!==-1&&u.splice(l,2),this},this.getHandler=function(h){for(let l=0,d=u.length;l<d;l+=2){const f=u[l],p=u[l+1];if(f.global&&(f.lastIndex=0),f.test(h))return p}return null}}}const gg=new mg;class ks{constructor(t){this.manager=t!==void 0?t:gg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}ks.DEFAULT_MATERIAL_NAME="__DEFAULT";const ui={};class _g extends Error{constructor(t,e){super(t),this.response=e}}class ff extends ks{constructor(t){super(t)}load(t,e,n,s){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=Ii.get(t);if(r!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(r),this.manager.itemEnd(t)},0),r;if(ui[t]!==void 0){ui[t].push({onLoad:e,onProgress:n,onError:s});return}ui[t]=[],ui[t].push({onLoad:e,onProgress:n,onError:s});const a=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,c=this.responseType;fetch(a).then(u=>{if(u.status===200||u.status===0){if(u.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||u.body===void 0||u.body.getReader===void 0)return u;const h=ui[t],l=u.body.getReader(),d=u.headers.get("X-File-Size")||u.headers.get("Content-Length"),f=d?parseInt(d):0,p=f!==0;let _=0;const g=new ReadableStream({start(m){v();function v(){l.read().then(({done:y,value:x})=>{if(y)m.close();else{_+=x.byteLength;const w=new ProgressEvent("progress",{lengthComputable:p,loaded:_,total:f});for(let T=0,R=h.length;T<R;T++){const I=h[T];I.onProgress&&I.onProgress(w)}m.enqueue(x),v()}},y=>{m.error(y)})}}});return new Response(g)}else throw new _g(`fetch for "${u.url}" responded with ${u.status}: ${u.statusText}`,u)}).then(u=>{switch(c){case"arraybuffer":return u.arrayBuffer();case"blob":return u.blob();case"document":return u.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return u.json();default:if(o===void 0)return u.text();{const l=/charset="?([^;"\s]*)"?/i.exec(o),d=l&&l[1]?l[1].toLowerCase():void 0,f=new TextDecoder(d);return u.arrayBuffer().then(p=>f.decode(p))}}}).then(u=>{Ii.add(t,u);const h=ui[t];delete ui[t];for(let l=0,d=h.length;l<d;l++){const f=h[l];f.onLoad&&f.onLoad(u)}}).catch(u=>{const h=ui[t];if(h===void 0)throw this.manager.itemError(t),u;delete ui[t];for(let l=0,d=h.length;l<d;l++){const f=h[l];f.onError&&f.onError(u)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}}class bg extends ks{constructor(t){super(t)}load(t,e,n,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,a=Ii.get(t);if(a!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(a),r.manager.itemEnd(t)},0),a;const o=_r("img");function c(){h(),Ii.add(t,this),e&&e(this),r.manager.itemEnd(t)}function u(l){h(),s&&s(l),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){o.removeEventListener("load",c,!1),o.removeEventListener("error",u,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",u,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(t),o.src=t,o}}class pf extends ks{constructor(t){super(t)}load(t,e,n,s){const r=new Ye,a=new bg(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(t,function(o){r.image=o,r.needsUpdate=!0,e!==void 0&&e(r)},n,s),r}}class Er extends ze{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new ae(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class xg extends Er{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ze.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ae(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Eo=new he,Zl=new F,Jl=new F;class Vc{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ee(512,512),this.map=null,this.mapPass=null,this.matrix=new he,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new kc,this._frameExtents=new ee(1,1),this._viewportCount=1,this._viewports=[new xe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Zl.setFromMatrixPosition(t.matrixWorld),e.position.copy(Zl),Jl.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Jl),e.updateMatrixWorld(),Eo.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Eo),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Eo)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class vg extends Vc{constructor(){super(new gn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){const e=this.camera,n=Ps*2*t.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=t.distance||e.far;(n!==e.fov||s!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=s,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class yg extends Er{constructor(t,e,n=0,s=Math.PI/3,r=0,a=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(ze.DEFAULT_UP),this.updateMatrix(),this.target=new ze,this.distance=n,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new vg}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}const Ql=new he,tr=new F,To=new F;class Mg extends Vc{constructor(){super(new gn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ee(4,2),this._viewportCount=6,this._viewports=[new xe(2,1,1,1),new xe(0,1,1,1),new xe(3,1,1,1),new xe(1,1,1,1),new xe(3,0,1,1),new xe(1,0,1,1)],this._cubeDirections=[new F(1,0,0),new F(-1,0,0),new F(0,0,1),new F(0,0,-1),new F(0,1,0),new F(0,-1,0)],this._cubeUps=[new F(0,1,0),new F(0,1,0),new F(0,1,0),new F(0,1,0),new F(0,0,1),new F(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),tr.setFromMatrixPosition(t.matrixWorld),n.position.copy(tr),To.copy(n.position),To.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(To),n.updateMatrixWorld(),s.makeTranslation(-tr.x,-tr.y,-tr.z),Ql.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ql)}}class Sg extends Er{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Mg}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class Wc extends Qd{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=s+e,c=s-e;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=u*this.view.offsetX,a=r+u*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class Ag extends Vc{constructor(){super(new Wc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class mf extends Er{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ze.DEFAULT_UP),this.updateMatrix(),this.target=new ze,this.shadow=new Ag}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Jw extends Er{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class pr{static decodeText(t){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(t);let e="";for(let n=0,s=t.length;n<s;n++)e+=String.fromCharCode(t[n]);try{return decodeURIComponent(escape(e))}catch{return e}}static extractUrlBase(t){const e=t.lastIndexOf("/");return e===-1?"./":t.slice(0,e+1)}static resolveURL(t,e){return typeof t!="string"||t===""?"":(/^https?:\/\//i.test(e)&&/^\//.test(t)&&(e=e.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(t)||/^data:.*,.*$/i.test(t)||/^blob:.*$/i.test(t)?t:e+t)}}class Eg extends Xe{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){const t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}}class Tg extends ks{constructor(t){super(t),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(t){return this.options=t,this}load(t,e,n,s){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,a=Ii.get(t);if(a!==void 0){if(r.manager.itemStart(t),a.then){a.then(u=>{e&&e(u),r.manager.itemEnd(t)}).catch(u=>{s&&s(u)});return}return setTimeout(function(){e&&e(a),r.manager.itemEnd(t)},0),a}const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader;const c=fetch(t,o).then(function(u){return u.blob()}).then(function(u){return createImageBitmap(u,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(u){return Ii.add(t,u),e&&e(u),r.manager.itemEnd(t),u}).catch(function(u){s&&s(u),Ii.remove(t),r.manager.itemError(t),r.manager.itemEnd(t)});Ii.add(t,c),r.manager.itemStart(t)}}class wg extends gn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Rg{constructor(t,e,n){this.binding=t,this.valueSize=n;let s,r,a;switch(e){case"quaternion":s=this._slerp,r=this._slerpAdditive,a=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":s=this._select,r=this._select,a=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:s=this._lerp,r=this._lerpAdditive,a=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=s,this._mixBufferRegionAdditive=r,this._setIdentity=a,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(t,e){const n=this.buffer,s=this.valueSize,r=t*s+s;let a=this.cumulativeWeight;if(a===0){for(let o=0;o!==s;++o)n[r+o]=n[o];a=e}else{a+=e;const o=e/a;this._mixBufferRegion(n,r,0,o,s)}this.cumulativeWeight=a}accumulateAdditive(t){const e=this.buffer,n=this.valueSize,s=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(e,s,0,t,n),this.cumulativeWeightAdditive+=t}apply(t){const e=this.valueSize,n=this.buffer,s=t*e+e,r=this.cumulativeWeight,a=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){const c=e*this._origIndex;this._mixBufferRegion(n,s,c,1-r,e)}a>0&&this._mixBufferRegionAdditive(n,s,this._addIndex*e,1,e);for(let c=e,u=e+e;c!==u;++c)if(n[c]!==n[c+e]){o.setValue(n,s);break}}saveOriginalState(){const t=this.binding,e=this.buffer,n=this.valueSize,s=n*this._origIndex;t.getValue(e,s);for(let r=n,a=s;r!==a;++r)e[r]=e[s+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const t=this.valueSize*3;this.binding.setValue(this.buffer,t)}_setAdditiveIdentityNumeric(){const t=this._addIndex*this.valueSize,e=t+this.valueSize;for(let n=t;n<e;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const t=this._origIndex*this.valueSize,e=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[e+n]=this.buffer[t+n]}_select(t,e,n,s,r){if(s>=.5)for(let a=0;a!==r;++a)t[e+a]=t[n+a]}_slerp(t,e,n,s){on.slerpFlat(t,e,t,e,t,n,s)}_slerpAdditive(t,e,n,s,r){const a=this._workIndex*r;on.multiplyQuaternionsFlat(t,a,t,e,t,n),on.slerpFlat(t,e,t,e,t,a,s)}_lerp(t,e,n,s,r){const a=1-s;for(let o=0;o!==r;++o){const c=e+o;t[c]=t[c]*a+t[n+o]*s}}_lerpAdditive(t,e,n,s,r){for(let a=0;a!==r;++a){const o=e+a;t[o]=t[o]+t[n+a]*s}}}const jc="\\[\\]\\.:\\/",Cg=new RegExp("["+jc+"]","g"),Xc="[^"+jc+"]",Ig="[^"+jc.replace("\\.","")+"]",Pg=/((?:WC+[\/:])*)/.source.replace("WC",Xc),Lg=/(WCOD+)?/.source.replace("WCOD",Ig),Dg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Xc),Fg=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Xc),Ng=new RegExp("^"+Pg+Lg+Dg+Fg+"$"),Ug=["material","materials","bones","map"];class Og{constructor(t,e,n){const s=n||De.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();const n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){const n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}}class De{constructor(t,e,n){this.path=e,this.parsedPath=n||De.parseTrackName(e),this.node=De.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new De.Composite(t,e,n):new De(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Cg,"")}static parseTrackName(t){const e=Ng.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);const n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){const r=n.nodeName.substring(s+1);Ug.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){const n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){const n=function(r){for(let a=0;a<r.length;a++){const o=r[a];if(o.name===e||o.uuid===e)return o;const c=n(o.children);if(c)return c}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node;const e=this.parsedPath,n=e.objectName,s=e.propertyName;let r=e.propertyIndex;if(t||(t=De.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let u=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===u){u=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(u!==void 0){if(t[u]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[u]}}const a=t[s];if(a===void 0){const u=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+u+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}De.Composite=Og;De.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};De.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};De.prototype.GetterByBindingType=[De.prototype._getValue_direct,De.prototype._getValue_array,De.prototype._getValue_arrayElement,De.prototype._getValue_toArray];De.prototype.SetterByBindingTypeAndVersioning=[[De.prototype._setValue_direct,De.prototype._setValue_direct_setNeedsUpdate,De.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[De.prototype._setValue_array,De.prototype._setValue_array_setNeedsUpdate,De.prototype._setValue_array_setMatrixWorldNeedsUpdate],[De.prototype._setValue_arrayElement,De.prototype._setValue_arrayElement_setNeedsUpdate,De.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[De.prototype._setValue_fromArray,De.prototype._setValue_fromArray_setNeedsUpdate,De.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class kg{constructor(t,e,n=null,s=e.blendMode){this._mixer=t,this._clip=e,this._localRoot=n,this.blendMode=s;const r=e.tracks,a=r.length,o=new Array(a),c={endingStart:2400,endingEnd:2400};for(let u=0;u!==a;++u){const h=r[u].createInterpolant(null);o[u]=h,h.settings=c}this._interpolantSettings=c,this._interpolants=o,this._propertyBindings=new Array(a),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=2201,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(t){return this._startTime=t,this}setLoop(t,e){return this.loop=t,this.repetitions=e,this}setEffectiveWeight(t){return this.weight=t,this._effectiveWeight=this.enabled?t:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(t){return this._scheduleFading(t,0,1)}fadeOut(t){return this._scheduleFading(t,1,0)}crossFadeFrom(t,e,n){if(t.fadeOut(e),this.fadeIn(e),n){const s=this._clip.duration,r=t._clip.duration,a=r/s,o=s/r;t.warp(1,a,e),this.warp(o,1,e)}return this}crossFadeTo(t,e,n){return t.crossFadeFrom(this,e,n)}stopFading(){const t=this._weightInterpolant;return t!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this}setEffectiveTimeScale(t){return this.timeScale=t,this._effectiveTimeScale=this.paused?0:t,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(t){return this.timeScale=this._clip.duration/t,this.stopWarping()}syncWith(t){return this.time=t.time,this.timeScale=t.timeScale,this.stopWarping()}halt(t){return this.warp(this._effectiveTimeScale,0,t)}warp(t,e,n){const s=this._mixer,r=s.time,a=this.timeScale;let o=this._timeScaleInterpolant;o===null&&(o=s._lendControlInterpolant(),this._timeScaleInterpolant=o);const c=o.parameterPositions,u=o.sampleValues;return c[0]=r,c[1]=r+n,u[0]=t/a,u[1]=e/a,this}stopWarping(){const t=this._timeScaleInterpolant;return t!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(t,e,n,s){if(!this.enabled){this._updateWeight(t);return}const r=this._startTime;if(r!==null){const c=(t-r)*n;c<0||n===0?e=0:(this._startTime=null,e=n*c)}e*=this._updateTimeScale(t);const a=this._updateTime(e),o=this._updateWeight(t);if(o>0){const c=this._interpolants,u=this._propertyBindings;switch(this.blendMode){case 2501:for(let h=0,l=c.length;h!==l;++h)c[h].evaluate(a),u[h].accumulateAdditive(o);break;case 2500:default:for(let h=0,l=c.length;h!==l;++h)c[h].evaluate(a),u[h].accumulate(s,o)}}}_updateWeight(t){let e=0;if(this.enabled){e=this.weight;const n=this._weightInterpolant;if(n!==null){const s=n.evaluate(t)[0];e*=s,t>n.parameterPositions[1]&&(this.stopFading(),s===0&&(this.enabled=!1))}}return this._effectiveWeight=e,e}_updateTimeScale(t){let e=0;if(!this.paused){e=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const s=n.evaluate(t)[0];e*=s,t>n.parameterPositions[1]&&(this.stopWarping(),e===0?this.paused=!0:this.timeScale=e)}}return this._effectiveTimeScale=e,e}_updateTime(t){const e=this._clip.duration,n=this.loop;let s=this.time+t,r=this._loopCount;const a=n===2202;if(t===0)return r===-1?s:a&&(r&1)===1?e-s:s;if(n===2200){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));t:{if(s>=e)s=e;else if(s<0)s=0;else{this.time=s;break t}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:t<0?-1:1})}}else{if(r===-1&&(t>=0?(r=0,this._setEndings(!0,this.repetitions===0,a)):this._setEndings(this.repetitions===0,!0,a)),s>=e||s<0){const o=Math.floor(s/e);s-=e*o,r+=Math.abs(o);const c=this.repetitions-r;if(c<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,s=t>0?e:0,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:t>0?1:-1});else{if(c===1){const u=t<0;this._setEndings(u,!u,a)}else this._setEndings(!1,!1,a);this._loopCount=r,this.time=s,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:o})}}else this.time=s;if(a&&(r&1)===1)return e-s}return s}_setEndings(t,e,n){const s=this._interpolantSettings;n?(s.endingStart=2401,s.endingEnd=2401):(t?s.endingStart=this.zeroSlopeAtStart?2401:2400:s.endingStart=2402,e?s.endingEnd=this.zeroSlopeAtEnd?2401:2400:s.endingEnd=2402)}_scheduleFading(t,e,n){const s=this._mixer,r=s.time;let a=this._weightInterpolant;a===null&&(a=s._lendControlInterpolant(),this._weightInterpolant=a);const o=a.parameterPositions,c=a.sampleValues;return o[0]=r,c[0]=e,o[1]=r+t,c[1]=n,this}}const Bg=new Float32Array(1);class Gg extends ts{constructor(t){super(),this._root=t,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(t,e){const n=t._localRoot||this._root,s=t._clip.tracks,r=s.length,a=t._propertyBindings,o=t._interpolants,c=n.uuid,u=this._bindingsByRootAndName;let h=u[c];h===void 0&&(h={},u[c]=h);for(let l=0;l!==r;++l){const d=s[l],f=d.name;let p=h[f];if(p!==void 0)++p.referenceCount,a[l]=p;else{if(p=a[l],p!==void 0){p._cacheIndex===null&&(++p.referenceCount,this._addInactiveBinding(p,c,f));continue}const _=e&&e._propertyBindings[l].binding.parsedPath;p=new Rg(De.create(n,f,_),d.ValueTypeName,d.getValueSize()),++p.referenceCount,this._addInactiveBinding(p,c,f),a[l]=p}o[l].resultBuffer=p.buffer}}_activateAction(t){if(!this._isActiveAction(t)){if(t._cacheIndex===null){const n=(t._localRoot||this._root).uuid,s=t._clip.uuid,r=this._actionsByClip[s];this._bindAction(t,r&&r.knownActions[0]),this._addInactiveAction(t,s,n)}const e=t._propertyBindings;for(let n=0,s=e.length;n!==s;++n){const r=e[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(t)}}_deactivateAction(t){if(this._isActiveAction(t)){const e=t._propertyBindings;for(let n=0,s=e.length;n!==s;++n){const r=e[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(t)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const t=this;this.stats={actions:{get total(){return t._actions.length},get inUse(){return t._nActiveActions}},bindings:{get total(){return t._bindings.length},get inUse(){return t._nActiveBindings}},controlInterpolants:{get total(){return t._controlInterpolants.length},get inUse(){return t._nActiveControlInterpolants}}}}_isActiveAction(t){const e=t._cacheIndex;return e!==null&&e<this._nActiveActions}_addInactiveAction(t,e,n){const s=this._actions,r=this._actionsByClip;let a=r[e];if(a===void 0)a={knownActions:[t],actionByRoot:{}},t._byClipCacheIndex=0,r[e]=a;else{const o=a.knownActions;t._byClipCacheIndex=o.length,o.push(t)}t._cacheIndex=s.length,s.push(t),a.actionByRoot[n]=t}_removeInactiveAction(t){const e=this._actions,n=e[e.length-1],s=t._cacheIndex;n._cacheIndex=s,e[s]=n,e.pop(),t._cacheIndex=null;const r=t._clip.uuid,a=this._actionsByClip,o=a[r],c=o.knownActions,u=c[c.length-1],h=t._byClipCacheIndex;u._byClipCacheIndex=h,c[h]=u,c.pop(),t._byClipCacheIndex=null;const l=o.actionByRoot,d=(t._localRoot||this._root).uuid;delete l[d],c.length===0&&delete a[r],this._removeInactiveBindingsForAction(t)}_removeInactiveBindingsForAction(t){const e=t._propertyBindings;for(let n=0,s=e.length;n!==s;++n){const r=e[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(t){const e=this._actions,n=t._cacheIndex,s=this._nActiveActions++,r=e[s];t._cacheIndex=s,e[s]=t,r._cacheIndex=n,e[n]=r}_takeBackAction(t){const e=this._actions,n=t._cacheIndex,s=--this._nActiveActions,r=e[s];t._cacheIndex=s,e[s]=t,r._cacheIndex=n,e[n]=r}_addInactiveBinding(t,e,n){const s=this._bindingsByRootAndName,r=this._bindings;let a=s[e];a===void 0&&(a={},s[e]=a),a[n]=t,t._cacheIndex=r.length,r.push(t)}_removeInactiveBinding(t){const e=this._bindings,n=t.binding,s=n.rootNode.uuid,r=n.path,a=this._bindingsByRootAndName,o=a[s],c=e[e.length-1],u=t._cacheIndex;c._cacheIndex=u,e[u]=c,e.pop(),delete o[r],Object.keys(o).length===0&&delete a[s]}_lendBinding(t){const e=this._bindings,n=t._cacheIndex,s=this._nActiveBindings++,r=e[s];t._cacheIndex=s,e[s]=t,r._cacheIndex=n,e[n]=r}_takeBackBinding(t){const e=this._bindings,n=t._cacheIndex,s=--this._nActiveBindings,r=e[s];t._cacheIndex=s,e[s]=t,r._cacheIndex=n,e[n]=r}_lendControlInterpolant(){const t=this._controlInterpolants,e=this._nActiveControlInterpolants++;let n=t[e];return n===void 0&&(n=new hf(new Float32Array(2),new Float32Array(2),1,Bg),n.__cacheIndex=e,t[e]=n),n}_takeBackControlInterpolant(t){const e=this._controlInterpolants,n=t.__cacheIndex,s=--this._nActiveControlInterpolants,r=e[s];t.__cacheIndex=s,e[s]=t,r.__cacheIndex=n,e[n]=r}clipAction(t,e,n){const s=e||this._root,r=s.uuid;let a=typeof t=="string"?fc.findByName(s,t):t;const o=a!==null?a.uuid:t,c=this._actionsByClip[o];let u=null;if(n===void 0&&(a!==null?n=a.blendMode:n=2500),c!==void 0){const l=c.actionByRoot[r];if(l!==void 0&&l.blendMode===n)return l;u=c.knownActions[0],a===null&&(a=u._clip)}if(a===null)return null;const h=new kg(this,a,e,n);return this._bindAction(h,u),this._addInactiveAction(h,o,r),h}existingAction(t,e){const n=e||this._root,s=n.uuid,r=typeof t=="string"?fc.findByName(n,t):t,a=r?r.uuid:t,o=this._actionsByClip[a];return o!==void 0&&o.actionByRoot[s]||null}stopAllAction(){const t=this._actions,e=this._nActiveActions;for(let n=e-1;n>=0;--n)t[n].stop();return this}update(t){t*=this.timeScale;const e=this._actions,n=this._nActiveActions,s=this.time+=t,r=Math.sign(t),a=this._accuIndex^=1;for(let u=0;u!==n;++u)e[u]._update(s,t,r,a);const o=this._bindings,c=this._nActiveBindings;for(let u=0;u!==c;++u)o[u].apply(a);return this}setTime(t){this.time=0;for(let e=0;e<this._actions.length;e++)this._actions[e].time=0;return this.update(t)}getRoot(){return this._root}uncacheClip(t){const e=this._actions,n=t.uuid,s=this._actionsByClip,r=s[n];if(r!==void 0){const a=r.knownActions;for(let o=0,c=a.length;o!==c;++o){const u=a[o];this._deactivateAction(u);const h=u._cacheIndex,l=e[e.length-1];u._cacheIndex=null,u._byClipCacheIndex=null,l._cacheIndex=h,e[h]=l,e.pop(),this._removeInactiveBindingsForAction(u)}delete s[n]}}uncacheRoot(t){const e=t.uuid,n=this._actionsByClip;for(const a in n){const o=n[a].actionByRoot,c=o[e];c!==void 0&&(this._deactivateAction(c),this._removeInactiveAction(c))}const s=this._bindingsByRootAndName,r=s[e];if(r!==void 0)for(const a in r){const o=r[a];o.restoreOriginalState(),this._removeInactiveBinding(o)}}uncacheAction(t,e){const n=this.existingAction(t,e);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}class pc extends Uc{constructor(t,e,n=1){super(t,e),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}clone(t){const e=super.clone(t);return e.meshPerAttribute=this.meshPerAttribute,e}toJSON(t){const e=super.toJSON(t);return e.isInstancedInterleavedBuffer=!0,e.meshPerAttribute=this.meshPerAttribute,e}}const tu=new F,ta=new F;class zg{constructor(t=new F,e=new F){this.start=t,this.end=e}set(t,e){return this.start.copy(t),this.end.copy(e),this}copy(t){return this.start.copy(t.start),this.end.copy(t.end),this}getCenter(t){return t.addVectors(this.start,this.end).multiplyScalar(.5)}delta(t){return t.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(t,e){return this.delta(e).multiplyScalar(t).add(this.start)}closestPointToPointParameter(t,e){tu.subVectors(t,this.start),ta.subVectors(this.end,this.start);const n=ta.dot(ta);let r=ta.dot(tu)/n;return e&&(r=Me(r,0,1)),r}closestPointToPoint(t,e,n){const s=this.closestPointToPointParameter(t,e);return this.delta(n).multiplyScalar(s).add(this.start)}applyMatrix4(t){return this.start.applyMatrix4(t),this.end.applyMatrix4(t),this}equals(t){return t.start.equals(this.start)&&t.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}function eu(i,t,e,n){const s=Hg(n);switch(e){case 1021:return i*t;case 1024:return i*t;case 1025:return i*t*2;case 1028:return i*t/s.components*s.byteLength;case 1029:return i*t/s.components*s.byteLength;case 1030:return i*t*2/s.components*s.byteLength;case 1031:return i*t*2/s.components*s.byteLength;case 1022:return i*t*3/s.components*s.byteLength;case 1023:return i*t*4/s.components*s.byteLength;case 1033:return i*t*4/s.components*s.byteLength;case 33776:case 33777:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case 33778:case 33779:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case 35841:case 35843:return Math.max(i,16)*Math.max(t,8)/4;case 35840:case 35842:return Math.max(i,8)*Math.max(t,8)/2;case 36196:case 37492:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case 37496:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case 37808:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case 37809:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case 37810:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case 37811:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case 37812:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case 37813:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case 37814:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case 37815:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case 37816:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case 37817:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case 37818:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case 37819:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case 37820:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case 37821:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case 36492:case 36494:case 36495:return Math.ceil(i/4)*Math.ceil(t/4)*16;case 36283:case 36284:return Math.ceil(i/4)*Math.ceil(t/4)*8;case 36285:case 36286:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Hg(i){switch(i){case 1009:case 1010:return{byteLength:1,components:1};case 1012:case 1011:case 1016:return{byteLength:2,components:1};case 1017:case 1018:return{byteLength:2,components:4};case 1014:case 1013:case 1015:return{byteLength:4,components:1};case 35902:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"171"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="171");/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function gf(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Vg(i){const t=new WeakMap;function e(o,c){const u=o.array,h=o.usage,l=u.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,u,h),o.onUploadCallback();let f;if(u instanceof Float32Array)f=i.FLOAT;else if(u instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(u instanceof Int16Array)f=i.SHORT;else if(u instanceof Uint32Array)f=i.UNSIGNED_INT;else if(u instanceof Int32Array)f=i.INT;else if(u instanceof Int8Array)f=i.BYTE;else if(u instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:d,type:f,bytesPerElement:u.BYTES_PER_ELEMENT,version:o.version,size:l}}function n(o,c,u){const h=c.array,l=c.updateRanges;if(i.bindBuffer(u,o),l.length===0)i.bufferSubData(u,0,h);else{l.sort((f,p)=>f.start-p.start);let d=0;for(let f=1;f<l.length;f++){const p=l[d],_=l[f];_.start<=p.start+p.count+1?p.count=Math.max(p.count,_.start+_.count-p.start):(++d,l[d]=_)}l.length=d+1;for(let f=0,p=l.length;f<p;f++){const _=l[f];i.bufferSubData(u,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=t.get(o);c&&(i.deleteBuffer(c.buffer),t.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const u=t.get(o);if(u===void 0)t.set(o,e(o,c));else if(u.version<o.version){if(u.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(u.buffer,o,c),u.version=o.version}}return{get:s,remove:r,update:a}}var Wg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,jg=`#ifdef USE_ALPHAHASH
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
#endif`,Xg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,qg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Kg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,$g=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Yg=`#ifdef USE_AOMAP
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
#endif`,Zg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Jg=`#ifdef USE_BATCHING
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
#endif`,Qg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,t_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,e_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,n_=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,i_=`#ifdef USE_IRIDESCENCE
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
#endif`,s_=`#ifdef USE_BUMPMAP
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
#endif`,r_=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,a_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,o_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,c_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,l_=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,u_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,h_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,d_=`#if defined( USE_COLOR_ALPHA )
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
#endif`,f_=`#define PI 3.141592653589793
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
} // validated`,p_=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,m_=`vec3 transformedNormal = objectNormal;
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
#endif`,g_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,__=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,b_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,x_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,v_="gl_FragColor = linearToOutputTexel( gl_FragColor );",y_=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,M_=`#ifdef USE_ENVMAP
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
#endif`,S_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,A_=`#ifdef USE_ENVMAP
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
#endif`,E_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,T_=`#ifdef USE_ENVMAP
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
#endif`,w_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,R_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,C_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,I_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,P_=`#ifdef USE_GRADIENTMAP
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
}`,L_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,D_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,F_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,N_=`uniform bool receiveShadow;
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
#endif`,U_=`#ifdef USE_ENVMAP
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
#endif`,O_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,k_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,B_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,G_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,z_=`PhysicalMaterial material;
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
#endif`,H_=`struct PhysicalMaterial {
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
}`,V_=`
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
#endif`,W_=`#if defined( RE_IndirectDiffuse )
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
#endif`,j_=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,X_=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,q_=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,K_=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$_=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Y_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Z_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,J_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Q_=`#if defined( USE_POINTS_UV )
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
#endif`,t0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,e0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,n0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,i0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,s0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,r0=`#ifdef USE_MORPHTARGETS
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
#endif`,a0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,o0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,c0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,l0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,u0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,h0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,d0=`#ifdef USE_NORMALMAP
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
#endif`,f0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,p0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,m0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,g0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,_0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,b0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,x0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,v0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,y0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,M0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,S0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,A0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,E0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,T0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,w0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,R0=`float getShadowMask() {
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
}`,C0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,I0=`#ifdef USE_SKINNING
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
#endif`,P0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,L0=`#ifdef USE_SKINNING
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
#endif`,D0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,F0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,N0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,U0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,O0=`#ifdef USE_TRANSMISSION
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
#endif`,k0=`#ifdef USE_TRANSMISSION
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
#endif`,B0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,G0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,z0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,H0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const V0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,W0=`uniform sampler2D t2D;
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
}`,j0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,X0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,q0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,K0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$0=`#include <common>
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
}`,Y0=`#if DEPTH_PACKING == 3200
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
}`,Z0=`#define DISTANCE
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
}`,J0=`#define DISTANCE
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
}`,Q0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,tb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,eb=`uniform float scale;
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
}`,nb=`uniform vec3 diffuse;
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
}`,ib=`#include <common>
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
}`,sb=`uniform vec3 diffuse;
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
}`,rb=`#define LAMBERT
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
}`,ab=`#define LAMBERT
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
}`,ob=`#define MATCAP
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
}`,cb=`#define MATCAP
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
}`,lb=`#define NORMAL
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
}`,ub=`#define NORMAL
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
}`,hb=`#define PHONG
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
}`,db=`#define PHONG
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
}`,fb=`#define STANDARD
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
}`,pb=`#define STANDARD
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
}`,mb=`#define TOON
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
}`,gb=`#define TOON
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
}`,_b=`uniform float size;
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
}`,bb=`uniform vec3 diffuse;
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
}`,xb=`#include <common>
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
}`,vb=`uniform vec3 color;
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
}`,yb=`uniform float rotation;
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
}`,Mb=`uniform vec3 diffuse;
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
}`,be={alphahash_fragment:Wg,alphahash_pars_fragment:jg,alphamap_fragment:Xg,alphamap_pars_fragment:qg,alphatest_fragment:Kg,alphatest_pars_fragment:$g,aomap_fragment:Yg,aomap_pars_fragment:Zg,batching_pars_vertex:Jg,batching_vertex:Qg,begin_vertex:t_,beginnormal_vertex:e_,bsdfs:n_,iridescence_fragment:i_,bumpmap_pars_fragment:s_,clipping_planes_fragment:r_,clipping_planes_pars_fragment:a_,clipping_planes_pars_vertex:o_,clipping_planes_vertex:c_,color_fragment:l_,color_pars_fragment:u_,color_pars_vertex:h_,color_vertex:d_,common:f_,cube_uv_reflection_fragment:p_,defaultnormal_vertex:m_,displacementmap_pars_vertex:g_,displacementmap_vertex:__,emissivemap_fragment:b_,emissivemap_pars_fragment:x_,colorspace_fragment:v_,colorspace_pars_fragment:y_,envmap_fragment:M_,envmap_common_pars_fragment:S_,envmap_pars_fragment:A_,envmap_pars_vertex:E_,envmap_physical_pars_fragment:U_,envmap_vertex:T_,fog_vertex:w_,fog_pars_vertex:R_,fog_fragment:C_,fog_pars_fragment:I_,gradientmap_pars_fragment:P_,lightmap_pars_fragment:L_,lights_lambert_fragment:D_,lights_lambert_pars_fragment:F_,lights_pars_begin:N_,lights_toon_fragment:O_,lights_toon_pars_fragment:k_,lights_phong_fragment:B_,lights_phong_pars_fragment:G_,lights_physical_fragment:z_,lights_physical_pars_fragment:H_,lights_fragment_begin:V_,lights_fragment_maps:W_,lights_fragment_end:j_,logdepthbuf_fragment:X_,logdepthbuf_pars_fragment:q_,logdepthbuf_pars_vertex:K_,logdepthbuf_vertex:$_,map_fragment:Y_,map_pars_fragment:Z_,map_particle_fragment:J_,map_particle_pars_fragment:Q_,metalnessmap_fragment:t0,metalnessmap_pars_fragment:e0,morphinstance_vertex:n0,morphcolor_vertex:i0,morphnormal_vertex:s0,morphtarget_pars_vertex:r0,morphtarget_vertex:a0,normal_fragment_begin:o0,normal_fragment_maps:c0,normal_pars_fragment:l0,normal_pars_vertex:u0,normal_vertex:h0,normalmap_pars_fragment:d0,clearcoat_normal_fragment_begin:f0,clearcoat_normal_fragment_maps:p0,clearcoat_pars_fragment:m0,iridescence_pars_fragment:g0,opaque_fragment:_0,packing:b0,premultiplied_alpha_fragment:x0,project_vertex:v0,dithering_fragment:y0,dithering_pars_fragment:M0,roughnessmap_fragment:S0,roughnessmap_pars_fragment:A0,shadowmap_pars_fragment:E0,shadowmap_pars_vertex:T0,shadowmap_vertex:w0,shadowmask_pars_fragment:R0,skinbase_vertex:C0,skinning_pars_vertex:I0,skinning_vertex:P0,skinnormal_vertex:L0,specularmap_fragment:D0,specularmap_pars_fragment:F0,tonemapping_fragment:N0,tonemapping_pars_fragment:U0,transmission_fragment:O0,transmission_pars_fragment:k0,uv_pars_fragment:B0,uv_pars_vertex:G0,uv_vertex:z0,worldpos_vertex:H0,background_vert:V0,background_frag:W0,backgroundCube_vert:j0,backgroundCube_frag:X0,cube_vert:q0,cube_frag:K0,depth_vert:$0,depth_frag:Y0,distanceRGBA_vert:Z0,distanceRGBA_frag:J0,equirect_vert:Q0,equirect_frag:tb,linedashed_vert:eb,linedashed_frag:nb,meshbasic_vert:ib,meshbasic_frag:sb,meshlambert_vert:rb,meshlambert_frag:ab,meshmatcap_vert:ob,meshmatcap_frag:cb,meshnormal_vert:lb,meshnormal_frag:ub,meshphong_vert:hb,meshphong_frag:db,meshphysical_vert:fb,meshphysical_frag:pb,meshtoon_vert:mb,meshtoon_frag:gb,points_vert:_b,points_frag:bb,shadow_vert:xb,shadow_frag:vb,sprite_vert:yb,sprite_frag:Mb},Lt={common:{diffuse:{value:new ae(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new _e},alphaMap:{value:null},alphaMapTransform:{value:new _e},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new _e}},envmap:{envMap:{value:null},envMapRotation:{value:new _e},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new _e}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new _e}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new _e},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new _e},normalScale:{value:new ee(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new _e},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new _e}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new _e}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new _e}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ae(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ae(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new _e},alphaTest:{value:0},uvTransform:{value:new _e}},sprite:{diffuse:{value:new ae(16777215)},opacity:{value:1},center:{value:new ee(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new _e},alphaMap:{value:null},alphaMapTransform:{value:new _e},alphaTest:{value:0}}},An={basic:{uniforms:pn([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.fog]),vertexShader:be.meshbasic_vert,fragmentShader:be.meshbasic_frag},lambert:{uniforms:pn([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,Lt.lights,{emissive:{value:new ae(0)}}]),vertexShader:be.meshlambert_vert,fragmentShader:be.meshlambert_frag},phong:{uniforms:pn([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,Lt.lights,{emissive:{value:new ae(0)},specular:{value:new ae(1118481)},shininess:{value:30}}]),vertexShader:be.meshphong_vert,fragmentShader:be.meshphong_frag},standard:{uniforms:pn([Lt.common,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.roughnessmap,Lt.metalnessmap,Lt.fog,Lt.lights,{emissive:{value:new ae(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:be.meshphysical_vert,fragmentShader:be.meshphysical_frag},toon:{uniforms:pn([Lt.common,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.gradientmap,Lt.fog,Lt.lights,{emissive:{value:new ae(0)}}]),vertexShader:be.meshtoon_vert,fragmentShader:be.meshtoon_frag},matcap:{uniforms:pn([Lt.common,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,{matcap:{value:null}}]),vertexShader:be.meshmatcap_vert,fragmentShader:be.meshmatcap_frag},points:{uniforms:pn([Lt.points,Lt.fog]),vertexShader:be.points_vert,fragmentShader:be.points_frag},dashed:{uniforms:pn([Lt.common,Lt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:be.linedashed_vert,fragmentShader:be.linedashed_frag},depth:{uniforms:pn([Lt.common,Lt.displacementmap]),vertexShader:be.depth_vert,fragmentShader:be.depth_frag},normal:{uniforms:pn([Lt.common,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,{opacity:{value:1}}]),vertexShader:be.meshnormal_vert,fragmentShader:be.meshnormal_frag},sprite:{uniforms:pn([Lt.sprite,Lt.fog]),vertexShader:be.sprite_vert,fragmentShader:be.sprite_frag},background:{uniforms:{uvTransform:{value:new _e},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:be.background_vert,fragmentShader:be.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new _e}},vertexShader:be.backgroundCube_vert,fragmentShader:be.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:be.cube_vert,fragmentShader:be.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:be.equirect_vert,fragmentShader:be.equirect_frag},distanceRGBA:{uniforms:pn([Lt.common,Lt.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:be.distanceRGBA_vert,fragmentShader:be.distanceRGBA_frag},shadow:{uniforms:pn([Lt.lights,Lt.fog,{color:{value:new ae(0)},opacity:{value:1}}]),vertexShader:be.shadow_vert,fragmentShader:be.shadow_frag}};An.physical={uniforms:pn([An.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new _e},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new _e},clearcoatNormalScale:{value:new ee(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new _e},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new _e},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new _e},sheen:{value:0},sheenColor:{value:new ae(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new _e},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new _e},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new _e},transmissionSamplerSize:{value:new ee},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new _e},attenuationDistance:{value:0},attenuationColor:{value:new ae(0)},specularColor:{value:new ae(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new _e},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new _e},anisotropyVector:{value:new ee},anisotropyMap:{value:null},anisotropyMapTransform:{value:new _e}}]),vertexShader:be.meshphysical_vert,fragmentShader:be.meshphysical_frag};const ea={r:0,b:0,g:0},Ui=new Un,Sb=new he;function Ab(i,t,e,n,s,r,a){const o=new ae(0);let c=r===!0?0:1,u,h,l=null,d=0,f=null;function p(y){let x=y.isScene===!0?y.background:null;return x&&x.isTexture&&(x=(y.backgroundBlurriness>0?e:t).get(x)),x}function _(y){let x=!1;const w=p(y);w===null?m(o,c):w&&w.isColor&&(m(w,1),x=!0);const T=i.xr.getEnvironmentBlendMode();T==="additive"?n.buffers.color.setClear(0,0,0,1,a):T==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function g(y,x){const w=p(x);w&&(w.isCubeTexture||w.mapping===306)?(h===void 0&&(h=new Re(new _i(1,1,1),new bi({name:"BackgroundCubeMaterial",uniforms:Ls(An.backgroundCube.uniforms),vertexShader:An.backgroundCube.vertexShader,fragmentShader:An.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(T,R,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Ui.copy(x.backgroundRotation),Ui.x*=-1,Ui.y*=-1,Ui.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(Ui.y*=-1,Ui.z*=-1),h.material.uniforms.envMap.value=w,h.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Sb.makeRotationFromEuler(Ui)),h.material.toneMapped=Ce.getTransfer(w.colorSpace)!==ke,(l!==w||d!==w.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,l=w,d=w.version,f=i.toneMapping),h.layers.enableAll(),y.unshift(h,h.geometry,h.material,0,0,null)):w&&w.isTexture&&(u===void 0&&(u=new Re(new Kn(2,2),new bi({name:"BackgroundMaterial",uniforms:Ls(An.background.uniforms),vertexShader:An.background.vertexShader,fragmentShader:An.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(u)),u.material.uniforms.t2D.value=w,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.toneMapped=Ce.getTransfer(w.colorSpace)!==ke,w.matrixAutoUpdate===!0&&w.updateMatrix(),u.material.uniforms.uvTransform.value.copy(w.matrix),(l!==w||d!==w.version||f!==i.toneMapping)&&(u.material.needsUpdate=!0,l=w,d=w.version,f=i.toneMapping),u.layers.enableAll(),y.unshift(u,u.geometry,u.material,0,0,null))}function m(y,x){y.getRGB(ea,Jd(i)),n.buffers.color.setClear(ea.r,ea.g,ea.b,x,a)}function v(){h!==void 0&&(h.geometry.dispose(),h.material.dispose()),u!==void 0&&(u.geometry.dispose(),u.material.dispose())}return{getClearColor:function(){return o},setClearColor:function(y,x=1){o.set(y),c=x,m(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(y){c=y,m(o,c)},render:_,addToRenderList:g,dispose:v}}function Eb(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let r=s,a=!1;function o(A,C,N,k,H){let Q=!1;const V=l(k,N,C);r!==V&&(r=V,u(r.object)),Q=f(A,k,N,H),Q&&p(A,k,N,H),H!==null&&t.update(H,i.ELEMENT_ARRAY_BUFFER),(Q||a)&&(a=!1,x(A,C,N,k),H!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(H).buffer))}function c(){return i.createVertexArray()}function u(A){return i.bindVertexArray(A)}function h(A){return i.deleteVertexArray(A)}function l(A,C,N){const k=N.wireframe===!0;let H=n[A.id];H===void 0&&(H={},n[A.id]=H);let Q=H[C.id];Q===void 0&&(Q={},H[C.id]=Q);let V=Q[k];return V===void 0&&(V=d(c()),Q[k]=V),V}function d(A){const C=[],N=[],k=[];for(let H=0;H<e;H++)C[H]=0,N[H]=0,k[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:N,attributeDivisors:k,object:A,attributes:{},index:null}}function f(A,C,N,k){const H=r.attributes,Q=C.attributes;let V=0;const j=N.getAttributes();for(const O in j)if(j[O].location>=0){const Y=H[O];let J=Q[O];if(J===void 0&&(O==="instanceMatrix"&&A.instanceMatrix&&(J=A.instanceMatrix),O==="instanceColor"&&A.instanceColor&&(J=A.instanceColor)),Y===void 0||Y.attribute!==J||J&&Y.data!==J.data)return!0;V++}return r.attributesNum!==V||r.index!==k}function p(A,C,N,k){const H={},Q=C.attributes;let V=0;const j=N.getAttributes();for(const O in j)if(j[O].location>=0){let Y=Q[O];Y===void 0&&(O==="instanceMatrix"&&A.instanceMatrix&&(Y=A.instanceMatrix),O==="instanceColor"&&A.instanceColor&&(Y=A.instanceColor));const J={};J.attribute=Y,Y&&Y.data&&(J.data=Y.data),H[O]=J,V++}r.attributes=H,r.attributesNum=V,r.index=k}function _(){const A=r.newAttributes;for(let C=0,N=A.length;C<N;C++)A[C]=0}function g(A){m(A,0)}function m(A,C){const N=r.newAttributes,k=r.enabledAttributes,H=r.attributeDivisors;N[A]=1,k[A]===0&&(i.enableVertexAttribArray(A),k[A]=1),H[A]!==C&&(i.vertexAttribDivisor(A,C),H[A]=C)}function v(){const A=r.newAttributes,C=r.enabledAttributes;for(let N=0,k=C.length;N<k;N++)C[N]!==A[N]&&(i.disableVertexAttribArray(N),C[N]=0)}function y(A,C,N,k,H,Q,V){V===!0?i.vertexAttribIPointer(A,C,N,H,Q):i.vertexAttribPointer(A,C,N,k,H,Q)}function x(A,C,N,k){_();const H=k.attributes,Q=N.getAttributes(),V=C.defaultAttributeValues;for(const j in Q){const O=Q[j];if(O.location>=0){let nt=H[j];if(nt===void 0&&(j==="instanceMatrix"&&A.instanceMatrix&&(nt=A.instanceMatrix),j==="instanceColor"&&A.instanceColor&&(nt=A.instanceColor)),nt!==void 0){const Y=nt.normalized,J=nt.itemSize,ht=t.get(nt);if(ht===void 0)continue;const Vt=ht.buffer,tt=ht.type,rt=ht.bytesPerElement,ot=tt===i.INT||tt===i.UNSIGNED_INT||nt.gpuType===1013;if(nt.isInterleavedBufferAttribute){const Z=nt.data,bt=Z.stride,Gt=nt.offset;if(Z.isInstancedInterleavedBuffer){for(let te=0;te<O.locationSize;te++)m(O.location+te,Z.meshPerAttribute);A.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let te=0;te<O.locationSize;te++)g(O.location+te);i.bindBuffer(i.ARRAY_BUFFER,Vt);for(let te=0;te<O.locationSize;te++)y(O.location+te,J/O.locationSize,tt,Y,bt*rt,(Gt+J/O.locationSize*te)*rt,ot)}else{if(nt.isInstancedBufferAttribute){for(let Z=0;Z<O.locationSize;Z++)m(O.location+Z,nt.meshPerAttribute);A.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=nt.meshPerAttribute*nt.count)}else for(let Z=0;Z<O.locationSize;Z++)g(O.location+Z);i.bindBuffer(i.ARRAY_BUFFER,Vt);for(let Z=0;Z<O.locationSize;Z++)y(O.location+Z,J/O.locationSize,tt,Y,J*rt,J/O.locationSize*Z*rt,ot)}}else if(V!==void 0){const Y=V[j];if(Y!==void 0)switch(Y.length){case 2:i.vertexAttrib2fv(O.location,Y);break;case 3:i.vertexAttrib3fv(O.location,Y);break;case 4:i.vertexAttrib4fv(O.location,Y);break;default:i.vertexAttrib1fv(O.location,Y)}}}}v()}function w(){I();for(const A in n){const C=n[A];for(const N in C){const k=C[N];for(const H in k)h(k[H].object),delete k[H];delete C[N]}delete n[A]}}function T(A){if(n[A.id]===void 0)return;const C=n[A.id];for(const N in C){const k=C[N];for(const H in k)h(k[H].object),delete k[H];delete C[N]}delete n[A.id]}function R(A){for(const C in n){const N=n[C];if(N[A.id]===void 0)continue;const k=N[A.id];for(const H in k)h(k[H].object),delete k[H];delete N[A.id]}}function I(){S(),a=!0,r!==s&&(r=s,u(r.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:I,resetDefaultState:S,dispose:w,releaseStatesOfGeometry:T,releaseStatesOfProgram:R,initAttributes:_,enableAttribute:g,disableUnusedAttributes:v}}function Tb(i,t,e){let n;function s(u){n=u}function r(u,h){i.drawArrays(n,u,h),e.update(h,n,1)}function a(u,h,l){l!==0&&(i.drawArraysInstanced(n,u,h,l),e.update(h,n,l))}function o(u,h,l){if(l===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,u,0,h,0,l);let f=0;for(let p=0;p<l;p++)f+=h[p];e.update(f,n,1)}function c(u,h,l,d){if(l===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let p=0;p<u.length;p++)a(u[p],h[p],d[p]);else{f.multiDrawArraysInstancedWEBGL(n,u,0,h,0,d,0,l);let p=0;for(let _=0;_<l;_++)p+=h[_]*d[_];e.update(p,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function wb(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const R=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(R){return!(R!==1023&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){const I=R===1016&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==1009&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==1015&&!I)}function c(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=e.precision!==void 0?e.precision:"highp";const h=c(u);h!==u&&(console.warn("THREE.WebGLRenderer:",u,"not supported, using",h,"instead."),u=h);const l=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),v=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),y=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),w=p>0,T=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:u,logarithmicDepthBuffer:l,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:p,maxTextureSize:_,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:x,vertexTextures:w,maxSamples:T}}function Rb(i){const t=this;let e=null,n=0,s=!1,r=!1;const a=new zi,o=new _e,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(l,d){const f=l.length!==0||d||n!==0||s;return s=d,n=l.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(l,d){e=h(l,d,0)},this.setState=function(l,d,f){const p=l.clippingPlanes,_=l.clipIntersection,g=l.clipShadows,m=i.get(l);if(!s||p===null||p.length===0||r&&!g)r?h(null):u();else{const v=r?0:n,y=v*4;let x=m.clippingState||null;c.value=x,x=h(p,d,y,f);for(let w=0;w!==y;++w)x[w]=e[w];m.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function u(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(l,d,f,p){const _=l!==null?l.length:0;let g=null;if(_!==0){if(g=c.value,p!==!0||g===null){const m=f+_*4,v=d.matrixWorldInverse;o.getNormalMatrix(v),(g===null||g.length<m)&&(g=new Float32Array(m));for(let y=0,x=f;y!==_;++y,x+=4)a.copy(l[y]).applyMatrix4(v,o),a.normal.toArray(g,x),g[x+3]=a.constant}c.value=g,c.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,g}}function Cb(i){let t=new WeakMap;function e(a,o){return o===303?a.mapping=301:o===304&&(a.mapping=302),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===303||o===304)if(t.has(a)){const c=t.get(a).texture;return e(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const u=new jm(c.height);return u.fromEquirectangularTexture(i,a),t.set(a,u),a.addEventListener("dispose",s),e(u.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const c=t.get(o);c!==void 0&&(t.delete(o),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}const Ts=4,nu=[.125,.215,.35,.446,.526,.582],Wi=20,wo=new Wc,iu=new ae;let Ro=null,Co=0,Io=0,Po=!1;const Hi=(1+Math.sqrt(5))/2,ys=1/Hi,su=[new F(-Hi,ys,0),new F(Hi,ys,0),new F(-ys,0,Hi),new F(ys,0,Hi),new F(0,Hi,-ys),new F(0,Hi,ys),new F(-1,1,-1),new F(1,1,-1),new F(-1,1,1),new F(1,1,1)];class ru{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){Ro=this._renderer.getRenderTarget(),Co=this._renderer.getActiveCubeFace(),Io=this._renderer.getActiveMipmapLevel(),Po=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=cu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ou(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Ro,Co,Io),this._renderer.xr.enabled=Po,t.scissorTest=!1,na(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===301||t.mapping===302?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ro=this._renderer.getRenderTarget(),Co=this._renderer.getActiveCubeFace(),Io=this._renderer.getActiveMipmapLevel(),Po=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:1006,minFilter:1006,generateMipmaps:!1,type:1016,format:1023,colorSpace:bn,depthBuffer:!1},s=au(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=au(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Ib(r)),this._blurMaterial=Pb(r,t,e)}return s}_compileMaterial(t){const e=new Re(this._lodPlanes[0],t);this._renderer.compile(e,wo)}_sceneToCubeUV(t,e,n,s){const o=new gn(90,1,e,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,l=h.autoClear,d=h.toneMapping;h.getClearColor(iu),h.toneMapping=0,h.autoClear=!1;const f=new tn({name:"PMREM.Background",side:1,depthWrite:!1,depthTest:!1}),p=new Re(new _i,f);let _=!1;const g=t.background;g?g.isColor&&(f.color.copy(g),t.background=null,_=!0):(f.color.copy(iu),_=!0);for(let m=0;m<6;m++){const v=m%3;v===0?(o.up.set(0,c[m],0),o.lookAt(u[m],0,0)):v===1?(o.up.set(0,0,c[m]),o.lookAt(0,u[m],0)):(o.up.set(0,c[m],0),o.lookAt(0,0,u[m]));const y=this._cubeSize;na(s,v*y,m>2?y:0,y,y),h.setRenderTarget(s),_&&h.render(p,o),h.render(t,o)}p.geometry.dispose(),p.material.dispose(),h.toneMapping=d,h.autoClear=l,t.background=g}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===301||t.mapping===302;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=cu()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ou());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new Re(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const c=this._cubeSize;na(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(a,wo)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=su[(s-r-1)%su.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){const c=this._renderer,u=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,l=new Re(this._lodPlanes[s],u),d=u.uniforms,f=this._sizeLods[n]-1,p=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Wi-1),_=r/p,g=isFinite(r)?1+Math.floor(h*_):Wi;g>Wi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Wi}`);const m=[];let v=0;for(let R=0;R<Wi;++R){const I=R/_,S=Math.exp(-I*I/2);m.push(S),R===0?v+=S:R<g&&(v+=2*S)}for(let R=0;R<m.length;R++)m[R]=m[R]/v;d.envMap.value=t.texture,d.samples.value=g,d.weights.value=m,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:y}=this;d.dTheta.value=p,d.mipInt.value=y-n;const x=this._sizeLods[s],w=3*x*(s>y-Ts?s-y+Ts:0),T=4*(this._cubeSize-x);na(e,w,T,3*x,2*x),c.setRenderTarget(e),c.render(l,wo)}}function Ib(i){const t=[],e=[],n=[];let s=i;const r=i-Ts+1+nu.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);e.push(o);let c=1/o;a>i-Ts?c=nu[a-i+Ts-1]:a===0&&(c=0),n.push(c);const u=1/(o-2),h=-u,l=1+u,d=[h,h,l,h,l,l,h,h,l,l,h,l],f=6,p=6,_=3,g=2,m=1,v=new Float32Array(_*p*f),y=new Float32Array(g*p*f),x=new Float32Array(m*p*f);for(let T=0;T<f;T++){const R=T%3*2/3-1,I=T>2?0:-1,S=[R,I,0,R+2/3,I,0,R+2/3,I+1,0,R,I,0,R+2/3,I+1,0,R,I+1,0];v.set(S,_*p*T),y.set(d,g*p*T);const A=[T,T,T,T,T,T];x.set(A,m*p*T)}const w=new Xe;w.setAttribute("position",new Ie(v,_)),w.setAttribute("uv",new Ie(y,g)),w.setAttribute("faceIndex",new Ie(x,m)),t.push(w),s>Ts&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function au(i,t,e){const n=new Zi(i,t,e);return n.texture.mapping=306,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function na(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Pb(i,t,e){const n=new Float32Array(Wi),s=new F(0,1,0);return new bi({name:"SphericalGaussianBlur",defines:{n:Wi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:qc(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function ou(){return new bi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:qc(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function cu(){return new bi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:qc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function qc(){return`

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
	`}function Lb(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const c=o.mapping,u=c===303||c===304,h=c===301||c===302;if(u||h){let l=t.get(o);const d=l!==void 0?l.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return e===null&&(e=new ru(i)),l=u?e.fromEquirectangular(o,l):e.fromCubemap(o,l),l.texture.pmremVersion=o.pmremVersion,t.set(o,l),l.texture;if(l!==void 0)return l.texture;{const f=o.image;return u&&f&&f.height>0||h&&f&&s(f)?(e===null&&(e=new ru(i)),l=u?e.fromEquirectangular(o):e.fromCubemap(o),l.texture.pmremVersion=o.pmremVersion,t.set(o,l),o.addEventListener("dispose",r),l.texture):null}}}return o}function s(o){let c=0;const u=6;for(let h=0;h<u;h++)o[h]!==void 0&&c++;return c===u}function r(o){const c=o.target;c.removeEventListener("dispose",r);const u=t.get(c);u!==void 0&&(t.delete(c),u.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function Db(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&Es("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Fb(i,t,e,n){const s={},r=new WeakMap;function a(l){const d=l.target;d.index!==null&&t.remove(d.index);for(const p in d.attributes)t.remove(d.attributes[p]);d.removeEventListener("dispose",a),delete s[d.id];const f=r.get(d);f&&(t.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(l,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,e.memory.geometries++),d}function c(l){const d=l.attributes;for(const f in d)t.update(d[f],i.ARRAY_BUFFER)}function u(l){const d=[],f=l.index,p=l.attributes.position;let _=0;if(f!==null){const v=f.array;_=f.version;for(let y=0,x=v.length;y<x;y+=3){const w=v[y+0],T=v[y+1],R=v[y+2];d.push(w,T,T,R,R,w)}}else if(p!==void 0){const v=p.array;_=p.version;for(let y=0,x=v.length/3-1;y<x;y+=3){const w=y+0,T=y+1,R=y+2;d.push(w,T,T,R,R,w)}}else return;const g=new(jd(d)?Zd:Yd)(d,1);g.version=_;const m=r.get(l);m&&t.remove(m),r.set(l,g)}function h(l){const d=r.get(l);if(d){const f=l.index;f!==null&&d.version<f.version&&u(l)}else u(l);return r.get(l)}return{get:o,update:c,getWireframeAttribute:h}}function Nb(i,t,e){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function c(d,f){i.drawElements(n,f,r,d*a),e.update(f,n,1)}function u(d,f,p){p!==0&&(i.drawElementsInstanced(n,f,r,d*a,p),e.update(f,n,p))}function h(d,f,p){if(p===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,p);let g=0;for(let m=0;m<p;m++)g+=f[m];e.update(g,n,1)}function l(d,f,p,_){if(p===0)return;const g=t.get("WEBGL_multi_draw");if(g===null)for(let m=0;m<d.length;m++)u(d[m]/a,f[m],_[m]);else{g.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,_,0,p);let m=0;for(let v=0;v<p;v++)m+=f[v]*_[v];e.update(m,n,1)}}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=u,this.renderMultiDraw=h,this.renderMultiDrawInstances=l}function Ub(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Ob(i,t,e){const n=new WeakMap,s=new xe;function r(a,o,c){const u=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,l=h!==void 0?h.length:0;let d=n.get(o);if(d===void 0||d.count!==l){let S=function(){R.dispose(),n.delete(o),o.removeEventListener("dispose",S)};d!==void 0&&d.texture.dispose();const f=o.morphAttributes.position!==void 0,p=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],v=o.morphAttributes.color||[];let y=0;f===!0&&(y=1),p===!0&&(y=2),_===!0&&(y=3);let x=o.attributes.position.count*y,w=1;x>t.maxTextureSize&&(w=Math.ceil(x/t.maxTextureSize),x=t.maxTextureSize);const T=new Float32Array(x*w*4*l),R=new qd(T,x,w,l);R.type=1015,R.needsUpdate=!0;const I=y*4;for(let A=0;A<l;A++){const C=g[A],N=m[A],k=v[A],H=x*w*4*A;for(let Q=0;Q<C.count;Q++){const V=Q*I;f===!0&&(s.fromBufferAttribute(C,Q),T[H+V+0]=s.x,T[H+V+1]=s.y,T[H+V+2]=s.z,T[H+V+3]=0),p===!0&&(s.fromBufferAttribute(N,Q),T[H+V+4]=s.x,T[H+V+5]=s.y,T[H+V+6]=s.z,T[H+V+7]=0),_===!0&&(s.fromBufferAttribute(k,Q),T[H+V+8]=s.x,T[H+V+9]=s.y,T[H+V+10]=s.z,T[H+V+11]=k.itemSize===4?s.w:1)}}d={count:l,texture:R,size:new ee(x,w)},n.set(o,d),o.addEventListener("dispose",S)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let f=0;for(let _=0;_<u.length;_++)f+=u[_];const p=o.morphTargetsRelative?1:1-f;c.getUniforms().setValue(i,"morphTargetBaseInfluence",p),c.getUniforms().setValue(i,"morphTargetInfluences",u)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function kb(i,t,e,n){let s=new WeakMap;function r(c){const u=n.render.frame,h=c.geometry,l=t.get(c,h);if(s.get(l)!==u&&(t.update(l),s.set(l,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),s.get(c)!==u&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,u))),c.isSkinnedMesh){const d=c.skeleton;s.get(d)!==u&&(d.update(),s.set(d,u))}return l}function a(){s=new WeakMap}function o(c){const u=c.target;u.removeEventListener("dispose",o),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:r,dispose:a}}const _f=new Ye,lu=new cf(1,1),bf=new qd,xf=new Im,vf=new tf,uu=[],hu=[],du=new Float32Array(16),fu=new Float32Array(9),pu=new Float32Array(4);function Bs(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=uu[s];if(r===void 0&&(r=new Float32Array(s),uu[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function Ze(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Je(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function ja(i,t){let e=hu[t];e===void 0&&(e=new Int32Array(t),hu[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Bb(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Gb(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ze(e,t))return;i.uniform2fv(this.addr,t),Je(e,t)}}function zb(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ze(e,t))return;i.uniform3fv(this.addr,t),Je(e,t)}}function Hb(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ze(e,t))return;i.uniform4fv(this.addr,t),Je(e,t)}}function Vb(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ze(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Je(e,t)}else{if(Ze(e,n))return;pu.set(n),i.uniformMatrix2fv(this.addr,!1,pu),Je(e,n)}}function Wb(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ze(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Je(e,t)}else{if(Ze(e,n))return;fu.set(n),i.uniformMatrix3fv(this.addr,!1,fu),Je(e,n)}}function jb(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ze(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Je(e,t)}else{if(Ze(e,n))return;du.set(n),i.uniformMatrix4fv(this.addr,!1,du),Je(e,n)}}function Xb(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function qb(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ze(e,t))return;i.uniform2iv(this.addr,t),Je(e,t)}}function Kb(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ze(e,t))return;i.uniform3iv(this.addr,t),Je(e,t)}}function $b(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ze(e,t))return;i.uniform4iv(this.addr,t),Je(e,t)}}function Yb(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Zb(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ze(e,t))return;i.uniform2uiv(this.addr,t),Je(e,t)}}function Jb(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ze(e,t))return;i.uniform3uiv(this.addr,t),Je(e,t)}}function Qb(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ze(e,t))return;i.uniform4uiv(this.addr,t),Je(e,t)}}function tx(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(lu.compareFunction=515,r=lu):r=_f,e.setTexture2D(t||r,s)}function ex(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||xf,s)}function nx(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||vf,s)}function ix(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||bf,s)}function sx(i){switch(i){case 5126:return Bb;case 35664:return Gb;case 35665:return zb;case 35666:return Hb;case 35674:return Vb;case 35675:return Wb;case 35676:return jb;case 5124:case 35670:return Xb;case 35667:case 35671:return qb;case 35668:case 35672:return Kb;case 35669:case 35673:return $b;case 5125:return Yb;case 36294:return Zb;case 36295:return Jb;case 36296:return Qb;case 35678:case 36198:case 36298:case 36306:case 35682:return tx;case 35679:case 36299:case 36307:return ex;case 35680:case 36300:case 36308:case 36293:return nx;case 36289:case 36303:case 36311:case 36292:return ix}}function rx(i,t){i.uniform1fv(this.addr,t)}function ax(i,t){const e=Bs(t,this.size,2);i.uniform2fv(this.addr,e)}function ox(i,t){const e=Bs(t,this.size,3);i.uniform3fv(this.addr,e)}function cx(i,t){const e=Bs(t,this.size,4);i.uniform4fv(this.addr,e)}function lx(i,t){const e=Bs(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function ux(i,t){const e=Bs(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function hx(i,t){const e=Bs(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function dx(i,t){i.uniform1iv(this.addr,t)}function fx(i,t){i.uniform2iv(this.addr,t)}function px(i,t){i.uniform3iv(this.addr,t)}function mx(i,t){i.uniform4iv(this.addr,t)}function gx(i,t){i.uniform1uiv(this.addr,t)}function _x(i,t){i.uniform2uiv(this.addr,t)}function bx(i,t){i.uniform3uiv(this.addr,t)}function xx(i,t){i.uniform4uiv(this.addr,t)}function vx(i,t,e){const n=this.cache,s=t.length,r=ja(e,s);Ze(n,r)||(i.uniform1iv(this.addr,r),Je(n,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||_f,r[a])}function yx(i,t,e){const n=this.cache,s=t.length,r=ja(e,s);Ze(n,r)||(i.uniform1iv(this.addr,r),Je(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||xf,r[a])}function Mx(i,t,e){const n=this.cache,s=t.length,r=ja(e,s);Ze(n,r)||(i.uniform1iv(this.addr,r),Je(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||vf,r[a])}function Sx(i,t,e){const n=this.cache,s=t.length,r=ja(e,s);Ze(n,r)||(i.uniform1iv(this.addr,r),Je(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||bf,r[a])}function Ax(i){switch(i){case 5126:return rx;case 35664:return ax;case 35665:return ox;case 35666:return cx;case 35674:return lx;case 35675:return ux;case 35676:return hx;case 5124:case 35670:return dx;case 35667:case 35671:return fx;case 35668:case 35672:return px;case 35669:case 35673:return mx;case 5125:return gx;case 36294:return _x;case 36295:return bx;case 36296:return xx;case 35678:case 36198:case 36298:case 36306:case 35682:return vx;case 35679:case 36299:case 36307:return yx;case 35680:case 36300:case 36308:case 36293:return Mx;case 36289:case 36303:case 36311:case 36292:return Sx}}class Ex{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=sx(e.type)}}class Tx{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Ax(e.type)}}class wx{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(t,e[o.id],n)}}}const Lo=/(\w+)(\])?(\[|\.)?/g;function mu(i,t){i.seq.push(t),i.map[t.id]=t}function Rx(i,t,e){const n=i.name,s=n.length;for(Lo.lastIndex=0;;){const r=Lo.exec(n),a=Lo.lastIndex;let o=r[1];const c=r[2]==="]",u=r[3];if(c&&(o=o|0),u===void 0||u==="["&&a+2===s){mu(e,u===void 0?new Ex(o,i,t):new Tx(o,i,t));break}else{let l=e.map[o];l===void 0&&(l=new wx(o),mu(e,l)),e=l}}}class Ea{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);Rx(r,a,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){const o=e[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const a=t[s];a.id in e&&n.push(a)}return n}}function gu(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const Cx=37297;let Ix=0;function Px(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}const _u=new _e;function Lx(i){Ce._getMatrix(_u,Ce.workingColorSpace,i);const t=`mat3( ${_u.elements.map(e=>e.toFixed(4))} )`;switch(Ce.getTransfer(i)){case Pa:return[t,"LinearTransferOETF"];case ke:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function bu(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+Px(i.getShaderSource(t),a)}else return s}function Dx(i,t){const e=Lx(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Fx(i,t){let e;switch(t){case 1:e="Linear";break;case 2:e="Reinhard";break;case 3:e="Cineon";break;case 4:e="ACESFilmic";break;case 6:e="AgX";break;case 7:e="Neutral";break;case 5:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const ia=new F;function Nx(){Ce.getLuminanceCoefficients(ia);const i=ia.x.toFixed(4),t=ia.y.toFixed(4),e=ia.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Ux(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ur).join(`
`)}function Ox(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function kx(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function ur(i){return i!==""}function xu(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function vu(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Bx=/^[ \t]*#include +<([\w\d./]+)>/gm;function mc(i){return i.replace(Bx,zx)}const Gx=new Map;function zx(i,t){let e=be[t];if(e===void 0){const n=Gx.get(t);if(n!==void 0)e=be[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return mc(e)}const Hx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function yu(i){return i.replace(Hx,Vx)}function Vx(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Mu(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function Wx(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===1?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===2?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===3&&(t="SHADOWMAP_TYPE_VSM"),t}function jx(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case 301:case 302:t="ENVMAP_TYPE_CUBE";break;case 306:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Xx(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case 302:t="ENVMAP_MODE_REFRACTION";break}return t}function qx(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case 0:t="ENVMAP_BLENDING_MULTIPLY";break;case 1:t="ENVMAP_BLENDING_MIX";break;case 2:t="ENVMAP_BLENDING_ADD";break}return t}function Kx(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function $x(i,t,e,n){const s=i.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const c=Wx(e),u=jx(e),h=Xx(e),l=qx(e),d=Kx(e),f=Ux(e),p=Ox(r),_=s.createProgram();let g,m,v=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(ur).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(ur).join(`
`),m.length>0&&(m+=`
`)):(g=[Mu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ur).join(`
`),m=[Mu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",e.envMap?"#define "+l:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==0?"#define TONE_MAPPING":"",e.toneMapping!==0?be.tonemapping_pars_fragment:"",e.toneMapping!==0?Fx("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",be.colorspace_pars_fragment,Dx("linearToOutputTexel",e.outputColorSpace),Nx(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ur).join(`
`)),a=mc(a),a=xu(a,e),a=vu(a,e),o=mc(o),o=xu(o,e),o=vu(o,e),a=yu(a),o=yu(o),e.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",e.glslVersion===ml?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===ml?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const y=v+g+a,x=v+m+o,w=gu(s,s.VERTEX_SHADER,y),T=gu(s,s.FRAGMENT_SHADER,x);s.attachShader(_,w),s.attachShader(_,T),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function R(C){if(i.debug.checkShaderErrors){const N=s.getProgramInfoLog(_).trim(),k=s.getShaderInfoLog(w).trim(),H=s.getShaderInfoLog(T).trim();let Q=!0,V=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(Q=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,w,T);else{const j=bu(s,w,"vertex"),O=bu(s,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+N+`
`+j+`
`+O)}else N!==""?console.warn("THREE.WebGLProgram: Program Info Log:",N):(k===""||H==="")&&(V=!1);V&&(C.diagnostics={runnable:Q,programLog:N,vertexShader:{log:k,prefix:g},fragmentShader:{log:H,prefix:m}})}s.deleteShader(w),s.deleteShader(T),I=new Ea(s,_),S=kx(s,_)}let I;this.getUniforms=function(){return I===void 0&&R(this),I};let S;this.getAttributes=function(){return S===void 0&&R(this),S};let A=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=s.getProgramParameter(_,Cx)),A},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Ix++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=w,this.fragmentShader=T,this}let Yx=0;class Zx{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Jx(t),e.set(t,n)),n}}class Jx{constructor(t){this.id=Yx++,this.code=t,this.usedTimes=0}}function Qx(i,t,e,n,s,r,a){const o=new Kd,c=new Zx,u=new Set,h=[],l=s.logarithmicDepthBuffer,d=s.vertexTextures;let f=s.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(S){return u.add(S),S===0?"uv":`uv${S}`}function g(S,A,C,N,k){const H=N.fog,Q=k.geometry,V=S.isMeshStandardMaterial?N.environment:null,j=(S.isMeshStandardMaterial?e:t).get(S.envMap||V),O=j&&j.mapping===306?j.image.height:null,nt=p[S.type];S.precision!==null&&(f=s.getMaxPrecision(S.precision),f!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",f,"instead."));const Y=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,J=Y!==void 0?Y.length:0;let ht=0;Q.morphAttributes.position!==void 0&&(ht=1),Q.morphAttributes.normal!==void 0&&(ht=2),Q.morphAttributes.color!==void 0&&(ht=3);let Vt,tt,rt,ot;if(nt){const st=An[nt];Vt=st.vertexShader,tt=st.fragmentShader}else Vt=S.vertexShader,tt=S.fragmentShader,c.update(S),rt=c.getVertexShaderID(S),ot=c.getFragmentShaderID(S);const Z=i.getRenderTarget(),bt=i.state.buffers.depth.getReversed(),Gt=k.isInstancedMesh===!0,te=k.isBatchedMesh===!0,fe=!!S.map,re=!!S.matcap,Pe=!!j,G=!!S.aoMap,kt=!!S.lightMap,oe=!!S.bumpMap,me=!!S.normalMap,It=!!S.displacementMap,Le=!!S.emissiveMap,Jt=!!S.metalnessMap,L=!!S.roughnessMap,E=S.anisotropy>0,K=S.clearcoat>0,at=S.dispersion>0,gt=S.iridescence>0,ct=S.sheen>0,Qt=S.transmission>0,Rt=E&&!!S.anisotropyMap,Bt=K&&!!S.clearcoatMap,Se=K&&!!S.clearcoatNormalMap,Mt=K&&!!S.clearcoatRoughnessMap,Ht=gt&&!!S.iridescenceMap,se=gt&&!!S.iridescenceThicknessMap,ce=ct&&!!S.sheenColorMap,Wt=ct&&!!S.sheenRoughnessMap,ve=!!S.specularMap,de=!!S.specularColorMap,Ee=!!S.specularIntensityMap,q=Qt&&!!S.transmissionMap,Dt=Qt&&!!S.thicknessMap,it=!!S.gradientMap,pt=!!S.alphaMap,Ut=S.alphaTest>0,Nt=!!S.alphaHash,ue=!!S.extensions;let P=0;S.toneMapped&&(Z===null||Z.isXRRenderTarget===!0)&&(P=i.toneMapping);const b={shaderID:nt,shaderType:S.type,shaderName:S.name,vertexShader:Vt,fragmentShader:tt,defines:S.defines,customVertexShaderID:rt,customFragmentShaderID:ot,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:f,batching:te,batchingColor:te&&k._colorsTexture!==null,instancing:Gt,instancingColor:Gt&&k.instanceColor!==null,instancingMorph:Gt&&k.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:Z===null?i.outputColorSpace:Z.isXRRenderTarget===!0?Z.texture.colorSpace:bn,alphaToCoverage:!!S.alphaToCoverage,map:fe,matcap:re,envMap:Pe,envMapMode:Pe&&j.mapping,envMapCubeUVHeight:O,aoMap:G,lightMap:kt,bumpMap:oe,normalMap:me,displacementMap:d&&It,emissiveMap:Le,normalMapObjectSpace:me&&S.normalMapType===1,normalMapTangentSpace:me&&S.normalMapType===0,metalnessMap:Jt,roughnessMap:L,anisotropy:E,anisotropyMap:Rt,clearcoat:K,clearcoatMap:Bt,clearcoatNormalMap:Se,clearcoatRoughnessMap:Mt,dispersion:at,iridescence:gt,iridescenceMap:Ht,iridescenceThicknessMap:se,sheen:ct,sheenColorMap:ce,sheenRoughnessMap:Wt,specularMap:ve,specularColorMap:de,specularIntensityMap:Ee,transmission:Qt,transmissionMap:q,thicknessMap:Dt,gradientMap:it,opaque:S.transparent===!1&&S.blending===1&&S.alphaToCoverage===!1,alphaMap:pt,alphaTest:Ut,alphaHash:Nt,combine:S.combine,mapUv:fe&&_(S.map.channel),aoMapUv:G&&_(S.aoMap.channel),lightMapUv:kt&&_(S.lightMap.channel),bumpMapUv:oe&&_(S.bumpMap.channel),normalMapUv:me&&_(S.normalMap.channel),displacementMapUv:It&&_(S.displacementMap.channel),emissiveMapUv:Le&&_(S.emissiveMap.channel),metalnessMapUv:Jt&&_(S.metalnessMap.channel),roughnessMapUv:L&&_(S.roughnessMap.channel),anisotropyMapUv:Rt&&_(S.anisotropyMap.channel),clearcoatMapUv:Bt&&_(S.clearcoatMap.channel),clearcoatNormalMapUv:Se&&_(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Mt&&_(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Ht&&_(S.iridescenceMap.channel),iridescenceThicknessMapUv:se&&_(S.iridescenceThicknessMap.channel),sheenColorMapUv:ce&&_(S.sheenColorMap.channel),sheenRoughnessMapUv:Wt&&_(S.sheenRoughnessMap.channel),specularMapUv:ve&&_(S.specularMap.channel),specularColorMapUv:de&&_(S.specularColorMap.channel),specularIntensityMapUv:Ee&&_(S.specularIntensityMap.channel),transmissionMapUv:q&&_(S.transmissionMap.channel),thicknessMapUv:Dt&&_(S.thicknessMap.channel),alphaMapUv:pt&&_(S.alphaMap.channel),vertexTangents:!!Q.attributes.tangent&&(me||E),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!Q.attributes.uv&&(fe||pt),fog:!!H,useFog:S.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:l,reverseDepthBuffer:bt,skinning:k.isSkinnedMesh===!0,morphTargets:Q.morphAttributes.position!==void 0,morphNormals:Q.morphAttributes.normal!==void 0,morphColors:Q.morphAttributes.color!==void 0,morphTargetsCount:J,morphTextureStride:ht,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&C.length>0,shadowMapType:i.shadowMap.type,toneMapping:P,decodeVideoTexture:fe&&S.map.isVideoTexture===!0&&Ce.getTransfer(S.map.colorSpace)===ke,decodeVideoTextureEmissive:Le&&S.emissiveMap.isVideoTexture===!0&&Ce.getTransfer(S.emissiveMap.colorSpace)===ke,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===2,flipSided:S.side===1,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:ue&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ue&&S.extensions.multiDraw===!0||te)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return b.vertexUv1s=u.has(1),b.vertexUv2s=u.has(2),b.vertexUv3s=u.has(3),u.clear(),b}function m(S){const A=[];if(S.shaderID?A.push(S.shaderID):(A.push(S.customVertexShaderID),A.push(S.customFragmentShaderID)),S.defines!==void 0)for(const C in S.defines)A.push(C),A.push(S.defines[C]);return S.isRawShaderMaterial===!1&&(v(A,S),y(A,S),A.push(i.outputColorSpace)),A.push(S.customProgramCacheKey),A.join()}function v(S,A){S.push(A.precision),S.push(A.outputColorSpace),S.push(A.envMapMode),S.push(A.envMapCubeUVHeight),S.push(A.mapUv),S.push(A.alphaMapUv),S.push(A.lightMapUv),S.push(A.aoMapUv),S.push(A.bumpMapUv),S.push(A.normalMapUv),S.push(A.displacementMapUv),S.push(A.emissiveMapUv),S.push(A.metalnessMapUv),S.push(A.roughnessMapUv),S.push(A.anisotropyMapUv),S.push(A.clearcoatMapUv),S.push(A.clearcoatNormalMapUv),S.push(A.clearcoatRoughnessMapUv),S.push(A.iridescenceMapUv),S.push(A.iridescenceThicknessMapUv),S.push(A.sheenColorMapUv),S.push(A.sheenRoughnessMapUv),S.push(A.specularMapUv),S.push(A.specularColorMapUv),S.push(A.specularIntensityMapUv),S.push(A.transmissionMapUv),S.push(A.thicknessMapUv),S.push(A.combine),S.push(A.fogExp2),S.push(A.sizeAttenuation),S.push(A.morphTargetsCount),S.push(A.morphAttributeCount),S.push(A.numDirLights),S.push(A.numPointLights),S.push(A.numSpotLights),S.push(A.numSpotLightMaps),S.push(A.numHemiLights),S.push(A.numRectAreaLights),S.push(A.numDirLightShadows),S.push(A.numPointLightShadows),S.push(A.numSpotLightShadows),S.push(A.numSpotLightShadowsWithMaps),S.push(A.numLightProbes),S.push(A.shadowMapType),S.push(A.toneMapping),S.push(A.numClippingPlanes),S.push(A.numClipIntersection),S.push(A.depthPacking)}function y(S,A){o.disableAll(),A.supportsVertexTextures&&o.enable(0),A.instancing&&o.enable(1),A.instancingColor&&o.enable(2),A.instancingMorph&&o.enable(3),A.matcap&&o.enable(4),A.envMap&&o.enable(5),A.normalMapObjectSpace&&o.enable(6),A.normalMapTangentSpace&&o.enable(7),A.clearcoat&&o.enable(8),A.iridescence&&o.enable(9),A.alphaTest&&o.enable(10),A.vertexColors&&o.enable(11),A.vertexAlphas&&o.enable(12),A.vertexUv1s&&o.enable(13),A.vertexUv2s&&o.enable(14),A.vertexUv3s&&o.enable(15),A.vertexTangents&&o.enable(16),A.anisotropy&&o.enable(17),A.alphaHash&&o.enable(18),A.batching&&o.enable(19),A.dispersion&&o.enable(20),A.batchingColor&&o.enable(21),S.push(o.mask),o.disableAll(),A.fog&&o.enable(0),A.useFog&&o.enable(1),A.flatShading&&o.enable(2),A.logarithmicDepthBuffer&&o.enable(3),A.reverseDepthBuffer&&o.enable(4),A.skinning&&o.enable(5),A.morphTargets&&o.enable(6),A.morphNormals&&o.enable(7),A.morphColors&&o.enable(8),A.premultipliedAlpha&&o.enable(9),A.shadowMapEnabled&&o.enable(10),A.doubleSided&&o.enable(11),A.flipSided&&o.enable(12),A.useDepthPacking&&o.enable(13),A.dithering&&o.enable(14),A.transmission&&o.enable(15),A.sheen&&o.enable(16),A.opaque&&o.enable(17),A.pointsUvs&&o.enable(18),A.decodeVideoTexture&&o.enable(19),A.decodeVideoTextureEmissive&&o.enable(20),A.alphaToCoverage&&o.enable(21),S.push(o.mask)}function x(S){const A=p[S.type];let C;if(A){const N=An[A];C=Fc.clone(N.uniforms)}else C=S.uniforms;return C}function w(S,A){let C;for(let N=0,k=h.length;N<k;N++){const H=h[N];if(H.cacheKey===A){C=H,++C.usedTimes;break}}return C===void 0&&(C=new $x(i,A,S,r),h.push(C)),C}function T(S){if(--S.usedTimes===0){const A=h.indexOf(S);h[A]=h[h.length-1],h.pop(),S.destroy()}}function R(S){c.remove(S)}function I(){c.dispose()}return{getParameters:g,getProgramCacheKey:m,getUniforms:x,acquireProgram:w,releaseProgram:T,releaseShaderCache:R,programs:h,dispose:I}}function tv(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,c){i.get(a)[o]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function ev(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Su(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Au(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(l,d,f,p,_,g){let m=i[t];return m===void 0?(m={id:l.id,object:l,geometry:d,material:f,groupOrder:p,renderOrder:l.renderOrder,z:_,group:g},i[t]=m):(m.id=l.id,m.object=l,m.geometry=d,m.material=f,m.groupOrder=p,m.renderOrder=l.renderOrder,m.z=_,m.group=g),t++,m}function o(l,d,f,p,_,g){const m=a(l,d,f,p,_,g);f.transmission>0?n.push(m):f.transparent===!0?s.push(m):e.push(m)}function c(l,d,f,p,_,g){const m=a(l,d,f,p,_,g);f.transmission>0?n.unshift(m):f.transparent===!0?s.unshift(m):e.unshift(m)}function u(l,d){e.length>1&&e.sort(l||ev),n.length>1&&n.sort(d||Su),s.length>1&&s.sort(d||Su)}function h(){for(let l=t,d=i.length;l<d;l++){const f=i[l];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:c,finish:h,sort:u}}function nv(){let i=new WeakMap;function t(n,s){const r=i.get(n);let a;return r===void 0?(a=new Au,i.set(n,[a])):s>=r.length?(a=new Au,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function iv(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new F,color:new ae};break;case"SpotLight":e={position:new F,direction:new F,color:new ae,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new F,color:new ae,distance:0,decay:0};break;case"HemisphereLight":e={direction:new F,skyColor:new ae,groundColor:new ae};break;case"RectAreaLight":e={color:new ae,position:new F,halfWidth:new F,halfHeight:new F};break}return i[t.id]=e,e}}}function sv(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ee};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ee};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ee,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let rv=0;function av(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function ov(i){const t=new iv,e=sv(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)n.probe.push(new F);const s=new F,r=new he,a=new he;function o(u){let h=0,l=0,d=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let f=0,p=0,_=0,g=0,m=0,v=0,y=0,x=0,w=0,T=0,R=0;u.sort(av);for(let S=0,A=u.length;S<A;S++){const C=u[S],N=C.color,k=C.intensity,H=C.distance,Q=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)h+=N.r*k,l+=N.g*k,d+=N.b*k;else if(C.isLightProbe){for(let V=0;V<9;V++)n.probe[V].addScaledVector(C.sh.coefficients[V],k);R++}else if(C.isDirectionalLight){const V=t.get(C);if(V.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const j=C.shadow,O=e.get(C);O.shadowIntensity=j.intensity,O.shadowBias=j.bias,O.shadowNormalBias=j.normalBias,O.shadowRadius=j.radius,O.shadowMapSize=j.mapSize,n.directionalShadow[f]=O,n.directionalShadowMap[f]=Q,n.directionalShadowMatrix[f]=C.shadow.matrix,v++}n.directional[f]=V,f++}else if(C.isSpotLight){const V=t.get(C);V.position.setFromMatrixPosition(C.matrixWorld),V.color.copy(N).multiplyScalar(k),V.distance=H,V.coneCos=Math.cos(C.angle),V.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),V.decay=C.decay,n.spot[_]=V;const j=C.shadow;if(C.map&&(n.spotLightMap[w]=C.map,w++,j.updateMatrices(C),C.castShadow&&T++),n.spotLightMatrix[_]=j.matrix,C.castShadow){const O=e.get(C);O.shadowIntensity=j.intensity,O.shadowBias=j.bias,O.shadowNormalBias=j.normalBias,O.shadowRadius=j.radius,O.shadowMapSize=j.mapSize,n.spotShadow[_]=O,n.spotShadowMap[_]=Q,x++}_++}else if(C.isRectAreaLight){const V=t.get(C);V.color.copy(N).multiplyScalar(k),V.halfWidth.set(C.width*.5,0,0),V.halfHeight.set(0,C.height*.5,0),n.rectArea[g]=V,g++}else if(C.isPointLight){const V=t.get(C);if(V.color.copy(C.color).multiplyScalar(C.intensity),V.distance=C.distance,V.decay=C.decay,C.castShadow){const j=C.shadow,O=e.get(C);O.shadowIntensity=j.intensity,O.shadowBias=j.bias,O.shadowNormalBias=j.normalBias,O.shadowRadius=j.radius,O.shadowMapSize=j.mapSize,O.shadowCameraNear=j.camera.near,O.shadowCameraFar=j.camera.far,n.pointShadow[p]=O,n.pointShadowMap[p]=Q,n.pointShadowMatrix[p]=C.shadow.matrix,y++}n.point[p]=V,p++}else if(C.isHemisphereLight){const V=t.get(C);V.skyColor.copy(C.color).multiplyScalar(k),V.groundColor.copy(C.groundColor).multiplyScalar(k),n.hemi[m]=V,m++}}g>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Lt.LTC_FLOAT_1,n.rectAreaLTC2=Lt.LTC_FLOAT_2):(n.rectAreaLTC1=Lt.LTC_HALF_1,n.rectAreaLTC2=Lt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=l,n.ambient[2]=d;const I=n.hash;(I.directionalLength!==f||I.pointLength!==p||I.spotLength!==_||I.rectAreaLength!==g||I.hemiLength!==m||I.numDirectionalShadows!==v||I.numPointShadows!==y||I.numSpotShadows!==x||I.numSpotMaps!==w||I.numLightProbes!==R)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=g,n.point.length=p,n.hemi.length=m,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=v,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=x+w-T,n.spotLightMap.length=w,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=R,I.directionalLength=f,I.pointLength=p,I.spotLength=_,I.rectAreaLength=g,I.hemiLength=m,I.numDirectionalShadows=v,I.numPointShadows=y,I.numSpotShadows=x,I.numSpotMaps=w,I.numLightProbes=R,n.version=rv++)}function c(u,h){let l=0,d=0,f=0,p=0,_=0;const g=h.matrixWorldInverse;for(let m=0,v=u.length;m<v;m++){const y=u[m];if(y.isDirectionalLight){const x=n.directional[l];x.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(g),l++}else if(y.isSpotLight){const x=n.spot[f];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(g),x.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(g),f++}else if(y.isRectAreaLight){const x=n.rectArea[p];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(g),a.identity(),r.copy(y.matrixWorld),r.premultiply(g),a.extractRotation(r),x.halfWidth.set(y.width*.5,0,0),x.halfHeight.set(0,y.height*.5,0),x.halfWidth.applyMatrix4(a),x.halfHeight.applyMatrix4(a),p++}else if(y.isPointLight){const x=n.point[d];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(g),d++}else if(y.isHemisphereLight){const x=n.hemi[_];x.direction.setFromMatrixPosition(y.matrixWorld),x.direction.transformDirection(g),_++}}}return{setup:o,setupView:c,state:n}}function Eu(i){const t=new ov(i),e=[],n=[];function s(h){u.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function a(h){n.push(h)}function o(){t.setup(e)}function c(h){t.setupView(e,h)}const u={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:u,setupLights:o,setupLightsView:c,pushLight:r,pushShadow:a}}function cv(i){let t=new WeakMap;function e(s,r=0){const a=t.get(s);let o;return a===void 0?(o=new Eu(i),t.set(s,[o])):r>=a.length?(o=new Eu(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}const lv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,uv=`uniform sampler2D shadow_pass;
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
}`;function hv(i,t,e){let n=new kc;const s=new ee,r=new ee,a=new xe,o=new rg({depthPacking:3201}),c=new ag,u={},h=e.maxTextureSize,l={0:1,1:0,2:2},d=new bi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ee},radius:{value:4}},vertexShader:lv,fragmentShader:uv}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const p=new Xe;p.setAttribute("position",new Ie(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Re(p,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let m=this.type;this.render=function(T,R,I){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||T.length===0)return;const S=i.getRenderTarget(),A=i.getActiveCubeFace(),C=i.getActiveMipmapLevel(),N=i.state;N.setBlending(0),N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const k=m!==3&&this.type===3,H=m===3&&this.type!==3;for(let Q=0,V=T.length;Q<V;Q++){const j=T[Q],O=j.shadow;if(O===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;s.copy(O.mapSize);const nt=O.getFrameExtents();if(s.multiply(nt),r.copy(O.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/nt.x),s.x=r.x*nt.x,O.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/nt.y),s.y=r.y*nt.y,O.mapSize.y=r.y)),O.map===null||k===!0||H===!0){const J=this.type!==3?{minFilter:1003,magFilter:1003}:{};O.map!==null&&O.map.dispose(),O.map=new Zi(s.x,s.y,J),O.map.texture.name=j.name+".shadowMap",O.camera.updateProjectionMatrix()}i.setRenderTarget(O.map),i.clear();const Y=O.getViewportCount();for(let J=0;J<Y;J++){const ht=O.getViewport(J);a.set(r.x*ht.x,r.y*ht.y,r.x*ht.z,r.y*ht.w),N.viewport(a),O.updateMatrices(j,J),n=O.getFrustum(),x(R,I,O.camera,j,this.type)}O.isPointLightShadow!==!0&&this.type===3&&v(O,I),O.needsUpdate=!1}m=this.type,g.needsUpdate=!1,i.setRenderTarget(S,A,C)};function v(T,R){const I=t.update(_);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Zi(s.x,s.y)),d.uniforms.shadow_pass.value=T.map.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(R,null,I,d,_,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(R,null,I,f,_,null)}function y(T,R,I,S){let A=null;const C=I.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(C!==void 0)A=C;else if(A=I.isPointLight===!0?c:o,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const N=A.uuid,k=R.uuid;let H=u[N];H===void 0&&(H={},u[N]=H);let Q=H[k];Q===void 0&&(Q=A.clone(),H[k]=Q,R.addEventListener("dispose",w)),A=Q}if(A.visible=R.visible,A.wireframe=R.wireframe,S===3?A.side=R.shadowSide!==null?R.shadowSide:R.side:A.side=R.shadowSide!==null?R.shadowSide:l[R.side],A.alphaMap=R.alphaMap,A.alphaTest=R.alphaTest,A.map=R.map,A.clipShadows=R.clipShadows,A.clippingPlanes=R.clippingPlanes,A.clipIntersection=R.clipIntersection,A.displacementMap=R.displacementMap,A.displacementScale=R.displacementScale,A.displacementBias=R.displacementBias,A.wireframeLinewidth=R.wireframeLinewidth,A.linewidth=R.linewidth,I.isPointLight===!0&&A.isMeshDistanceMaterial===!0){const N=i.properties.get(A);N.light=I}return A}function x(T,R,I,S,A){if(T.visible===!1)return;if(T.layers.test(R.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&A===3)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,T.matrixWorld);const k=t.update(T),H=T.material;if(Array.isArray(H)){const Q=k.groups;for(let V=0,j=Q.length;V<j;V++){const O=Q[V],nt=H[O.materialIndex];if(nt&&nt.visible){const Y=y(T,nt,S,A);T.onBeforeShadow(i,T,R,I,k,Y,O),i.renderBufferDirect(I,null,k,Y,T,O),T.onAfterShadow(i,T,R,I,k,Y,O)}}}else if(H.visible){const Q=y(T,H,S,A);T.onBeforeShadow(i,T,R,I,k,Q,null),i.renderBufferDirect(I,null,k,Q,T,null),T.onAfterShadow(i,T,R,I,k,Q,null)}}const N=T.children;for(let k=0,H=N.length;k<H;k++)x(N[k],R,I,S,A)}function w(T){T.target.removeEventListener("dispose",w);for(const I in u){const S=u[I],A=T.target.uuid;A in S&&(S[A].dispose(),delete S[A])}}}const dv={0:1,2:6,4:7,3:5,1:0,6:2,7:4,5:3};function fv(i,t){function e(){let q=!1;const Dt=new xe;let it=null;const pt=new xe(0,0,0,0);return{setMask:function(Ut){it!==Ut&&!q&&(i.colorMask(Ut,Ut,Ut,Ut),it=Ut)},setLocked:function(Ut){q=Ut},setClear:function(Ut,Nt,ue,P,b){b===!0&&(Ut*=P,Nt*=P,ue*=P),Dt.set(Ut,Nt,ue,P),pt.equals(Dt)===!1&&(i.clearColor(Ut,Nt,ue,P),pt.copy(Dt))},reset:function(){q=!1,it=null,pt.set(-1,0,0,0)}}}function n(){let q=!1,Dt=!1,it=null,pt=null,Ut=null;return{setReversed:function(Nt){if(Dt!==Nt){const ue=t.get("EXT_clip_control");Dt?ue.clipControlEXT(ue.LOWER_LEFT_EXT,ue.ZERO_TO_ONE_EXT):ue.clipControlEXT(ue.LOWER_LEFT_EXT,ue.NEGATIVE_ONE_TO_ONE_EXT);const P=Ut;Ut=null,this.setClear(P)}Dt=Nt},getReversed:function(){return Dt},setTest:function(Nt){Nt?Z(i.DEPTH_TEST):bt(i.DEPTH_TEST)},setMask:function(Nt){it!==Nt&&!q&&(i.depthMask(Nt),it=Nt)},setFunc:function(Nt){if(Dt&&(Nt=dv[Nt]),pt!==Nt){switch(Nt){case 0:i.depthFunc(i.NEVER);break;case 1:i.depthFunc(i.ALWAYS);break;case 2:i.depthFunc(i.LESS);break;case 3:i.depthFunc(i.LEQUAL);break;case 4:i.depthFunc(i.EQUAL);break;case 5:i.depthFunc(i.GEQUAL);break;case 6:i.depthFunc(i.GREATER);break;case 7:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}pt=Nt}},setLocked:function(Nt){q=Nt},setClear:function(Nt){Ut!==Nt&&(Dt&&(Nt=1-Nt),i.clearDepth(Nt),Ut=Nt)},reset:function(){q=!1,it=null,pt=null,Ut=null,Dt=!1}}}function s(){let q=!1,Dt=null,it=null,pt=null,Ut=null,Nt=null,ue=null,P=null,b=null;return{setTest:function(st){q||(st?Z(i.STENCIL_TEST):bt(i.STENCIL_TEST))},setMask:function(st){Dt!==st&&!q&&(i.stencilMask(st),Dt=st)},setFunc:function(st,ut,X){(it!==st||pt!==ut||Ut!==X)&&(i.stencilFunc(st,ut,X),it=st,pt=ut,Ut=X)},setOp:function(st,ut,X){(Nt!==st||ue!==ut||P!==X)&&(i.stencilOp(st,ut,X),Nt=st,ue=ut,P=X)},setLocked:function(st){q=st},setClear:function(st){b!==st&&(i.clearStencil(st),b=st)},reset:function(){q=!1,Dt=null,it=null,pt=null,Ut=null,Nt=null,ue=null,P=null,b=null}}}const r=new e,a=new n,o=new s,c=new WeakMap,u=new WeakMap;let h={},l={},d=new WeakMap,f=[],p=null,_=!1,g=null,m=null,v=null,y=null,x=null,w=null,T=null,R=new ae(0,0,0),I=0,S=!1,A=null,C=null,N=null,k=null,H=null;const Q=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,j=0;const O=i.getParameter(i.VERSION);O.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(O)[1]),V=j>=1):O.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(O)[1]),V=j>=2);let nt=null,Y={};const J=i.getParameter(i.SCISSOR_BOX),ht=i.getParameter(i.VIEWPORT),Vt=new xe().fromArray(J),tt=new xe().fromArray(ht);function rt(q,Dt,it,pt){const Ut=new Uint8Array(4),Nt=i.createTexture();i.bindTexture(q,Nt),i.texParameteri(q,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(q,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ue=0;ue<it;ue++)q===i.TEXTURE_3D||q===i.TEXTURE_2D_ARRAY?i.texImage3D(Dt,0,i.RGBA,1,1,pt,0,i.RGBA,i.UNSIGNED_BYTE,Ut):i.texImage2D(Dt+ue,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Ut);return Nt}const ot={};ot[i.TEXTURE_2D]=rt(i.TEXTURE_2D,i.TEXTURE_2D,1),ot[i.TEXTURE_CUBE_MAP]=rt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ot[i.TEXTURE_2D_ARRAY]=rt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ot[i.TEXTURE_3D]=rt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),Z(i.DEPTH_TEST),a.setFunc(3),oe(!1),me(1),Z(i.CULL_FACE),G(0);function Z(q){h[q]!==!0&&(i.enable(q),h[q]=!0)}function bt(q){h[q]!==!1&&(i.disable(q),h[q]=!1)}function Gt(q,Dt){return l[q]!==Dt?(i.bindFramebuffer(q,Dt),l[q]=Dt,q===i.DRAW_FRAMEBUFFER&&(l[i.FRAMEBUFFER]=Dt),q===i.FRAMEBUFFER&&(l[i.DRAW_FRAMEBUFFER]=Dt),!0):!1}function te(q,Dt){let it=f,pt=!1;if(q){it=d.get(Dt),it===void 0&&(it=[],d.set(Dt,it));const Ut=q.textures;if(it.length!==Ut.length||it[0]!==i.COLOR_ATTACHMENT0){for(let Nt=0,ue=Ut.length;Nt<ue;Nt++)it[Nt]=i.COLOR_ATTACHMENT0+Nt;it.length=Ut.length,pt=!0}}else it[0]!==i.BACK&&(it[0]=i.BACK,pt=!0);pt&&i.drawBuffers(it)}function fe(q){return p!==q?(i.useProgram(q),p=q,!0):!1}const re={100:i.FUNC_ADD,101:i.FUNC_SUBTRACT,102:i.FUNC_REVERSE_SUBTRACT};re[103]=i.MIN,re[104]=i.MAX;const Pe={200:i.ZERO,201:i.ONE,202:i.SRC_COLOR,204:i.SRC_ALPHA,210:i.SRC_ALPHA_SATURATE,208:i.DST_COLOR,206:i.DST_ALPHA,203:i.ONE_MINUS_SRC_COLOR,205:i.ONE_MINUS_SRC_ALPHA,209:i.ONE_MINUS_DST_COLOR,207:i.ONE_MINUS_DST_ALPHA,211:i.CONSTANT_COLOR,212:i.ONE_MINUS_CONSTANT_COLOR,213:i.CONSTANT_ALPHA,214:i.ONE_MINUS_CONSTANT_ALPHA};function G(q,Dt,it,pt,Ut,Nt,ue,P,b,st){if(q===0){_===!0&&(bt(i.BLEND),_=!1);return}if(_===!1&&(Z(i.BLEND),_=!0),q!==5){if(q!==g||st!==S){if((m!==100||x!==100)&&(i.blendEquation(i.FUNC_ADD),m=100,x=100),st)switch(q){case 1:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case 2:i.blendFunc(i.ONE,i.ONE);break;case 3:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case 4:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",q);break}else switch(q){case 1:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case 2:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case 3:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case 4:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",q);break}v=null,y=null,w=null,T=null,R.set(0,0,0),I=0,g=q,S=st}return}Ut=Ut||Dt,Nt=Nt||it,ue=ue||pt,(Dt!==m||Ut!==x)&&(i.blendEquationSeparate(re[Dt],re[Ut]),m=Dt,x=Ut),(it!==v||pt!==y||Nt!==w||ue!==T)&&(i.blendFuncSeparate(Pe[it],Pe[pt],Pe[Nt],Pe[ue]),v=it,y=pt,w=Nt,T=ue),(P.equals(R)===!1||b!==I)&&(i.blendColor(P.r,P.g,P.b,b),R.copy(P),I=b),g=q,S=!1}function kt(q,Dt){q.side===2?bt(i.CULL_FACE):Z(i.CULL_FACE);let it=q.side===1;Dt&&(it=!it),oe(it),q.blending===1&&q.transparent===!1?G(0):G(q.blending,q.blendEquation,q.blendSrc,q.blendDst,q.blendEquationAlpha,q.blendSrcAlpha,q.blendDstAlpha,q.blendColor,q.blendAlpha,q.premultipliedAlpha),a.setFunc(q.depthFunc),a.setTest(q.depthTest),a.setMask(q.depthWrite),r.setMask(q.colorWrite);const pt=q.stencilWrite;o.setTest(pt),pt&&(o.setMask(q.stencilWriteMask),o.setFunc(q.stencilFunc,q.stencilRef,q.stencilFuncMask),o.setOp(q.stencilFail,q.stencilZFail,q.stencilZPass)),Le(q.polygonOffset,q.polygonOffsetFactor,q.polygonOffsetUnits),q.alphaToCoverage===!0?Z(i.SAMPLE_ALPHA_TO_COVERAGE):bt(i.SAMPLE_ALPHA_TO_COVERAGE)}function oe(q){A!==q&&(q?i.frontFace(i.CW):i.frontFace(i.CCW),A=q)}function me(q){q!==0?(Z(i.CULL_FACE),q!==C&&(q===1?i.cullFace(i.BACK):q===2?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):bt(i.CULL_FACE),C=q}function It(q){q!==N&&(V&&i.lineWidth(q),N=q)}function Le(q,Dt,it){q?(Z(i.POLYGON_OFFSET_FILL),(k!==Dt||H!==it)&&(i.polygonOffset(Dt,it),k=Dt,H=it)):bt(i.POLYGON_OFFSET_FILL)}function Jt(q){q?Z(i.SCISSOR_TEST):bt(i.SCISSOR_TEST)}function L(q){q===void 0&&(q=i.TEXTURE0+Q-1),nt!==q&&(i.activeTexture(q),nt=q)}function E(q,Dt,it){it===void 0&&(nt===null?it=i.TEXTURE0+Q-1:it=nt);let pt=Y[it];pt===void 0&&(pt={type:void 0,texture:void 0},Y[it]=pt),(pt.type!==q||pt.texture!==Dt)&&(nt!==it&&(i.activeTexture(it),nt=it),i.bindTexture(q,Dt||ot[q]),pt.type=q,pt.texture=Dt)}function K(){const q=Y[nt];q!==void 0&&q.type!==void 0&&(i.bindTexture(q.type,null),q.type=void 0,q.texture=void 0)}function at(){try{i.compressedTexImage2D.apply(i,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function gt(){try{i.compressedTexImage3D.apply(i,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function ct(){try{i.texSubImage2D.apply(i,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Qt(){try{i.texSubImage3D.apply(i,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Rt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Bt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Se(){try{i.texStorage2D.apply(i,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Mt(){try{i.texStorage3D.apply(i,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Ht(){try{i.texImage2D.apply(i,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function se(){try{i.texImage3D.apply(i,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function ce(q){Vt.equals(q)===!1&&(i.scissor(q.x,q.y,q.z,q.w),Vt.copy(q))}function Wt(q){tt.equals(q)===!1&&(i.viewport(q.x,q.y,q.z,q.w),tt.copy(q))}function ve(q,Dt){let it=u.get(Dt);it===void 0&&(it=new WeakMap,u.set(Dt,it));let pt=it.get(q);pt===void 0&&(pt=i.getUniformBlockIndex(Dt,q.name),it.set(q,pt))}function de(q,Dt){const pt=u.get(Dt).get(q);c.get(Dt)!==pt&&(i.uniformBlockBinding(Dt,pt,q.__bindingPointIndex),c.set(Dt,pt))}function Ee(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},nt=null,Y={},l={},d=new WeakMap,f=[],p=null,_=!1,g=null,m=null,v=null,y=null,x=null,w=null,T=null,R=new ae(0,0,0),I=0,S=!1,A=null,C=null,N=null,k=null,H=null,Vt.set(0,0,i.canvas.width,i.canvas.height),tt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:Z,disable:bt,bindFramebuffer:Gt,drawBuffers:te,useProgram:fe,setBlending:G,setMaterial:kt,setFlipSided:oe,setCullFace:me,setLineWidth:It,setPolygonOffset:Le,setScissorTest:Jt,activeTexture:L,bindTexture:E,unbindTexture:K,compressedTexImage2D:at,compressedTexImage3D:gt,texImage2D:Ht,texImage3D:se,updateUBOMapping:ve,uniformBlockBinding:de,texStorage2D:Se,texStorage3D:Mt,texSubImage2D:ct,texSubImage3D:Qt,compressedTexSubImage2D:Rt,compressedTexSubImage3D:Bt,scissor:ce,viewport:Wt,reset:Ee}}function pv(i,t,e,n,s,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new ee,h=new WeakMap;let l;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(L,E){return f?new OffscreenCanvas(L,E):_r("canvas")}function _(L,E,K){let at=1;const gt=Jt(L);if((gt.width>K||gt.height>K)&&(at=K/Math.max(gt.width,gt.height)),at<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const ct=Math.floor(at*gt.width),Qt=Math.floor(at*gt.height);l===void 0&&(l=p(ct,Qt));const Rt=E?p(ct,Qt):l;return Rt.width=ct,Rt.height=Qt,Rt.getContext("2d").drawImage(L,0,0,ct,Qt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+gt.width+"x"+gt.height+") to ("+ct+"x"+Qt+")."),Rt}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+gt.width+"x"+gt.height+")."),L;return L}function g(L){return L.generateMipmaps}function m(L){i.generateMipmap(L)}function v(L){return L.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?i.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function y(L,E,K,at,gt=!1){if(L!==null){if(i[L]!==void 0)return i[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let ct=E;if(E===i.RED&&(K===i.FLOAT&&(ct=i.R32F),K===i.HALF_FLOAT&&(ct=i.R16F),K===i.UNSIGNED_BYTE&&(ct=i.R8)),E===i.RED_INTEGER&&(K===i.UNSIGNED_BYTE&&(ct=i.R8UI),K===i.UNSIGNED_SHORT&&(ct=i.R16UI),K===i.UNSIGNED_INT&&(ct=i.R32UI),K===i.BYTE&&(ct=i.R8I),K===i.SHORT&&(ct=i.R16I),K===i.INT&&(ct=i.R32I)),E===i.RG&&(K===i.FLOAT&&(ct=i.RG32F),K===i.HALF_FLOAT&&(ct=i.RG16F),K===i.UNSIGNED_BYTE&&(ct=i.RG8)),E===i.RG_INTEGER&&(K===i.UNSIGNED_BYTE&&(ct=i.RG8UI),K===i.UNSIGNED_SHORT&&(ct=i.RG16UI),K===i.UNSIGNED_INT&&(ct=i.RG32UI),K===i.BYTE&&(ct=i.RG8I),K===i.SHORT&&(ct=i.RG16I),K===i.INT&&(ct=i.RG32I)),E===i.RGB_INTEGER&&(K===i.UNSIGNED_BYTE&&(ct=i.RGB8UI),K===i.UNSIGNED_SHORT&&(ct=i.RGB16UI),K===i.UNSIGNED_INT&&(ct=i.RGB32UI),K===i.BYTE&&(ct=i.RGB8I),K===i.SHORT&&(ct=i.RGB16I),K===i.INT&&(ct=i.RGB32I)),E===i.RGBA_INTEGER&&(K===i.UNSIGNED_BYTE&&(ct=i.RGBA8UI),K===i.UNSIGNED_SHORT&&(ct=i.RGBA16UI),K===i.UNSIGNED_INT&&(ct=i.RGBA32UI),K===i.BYTE&&(ct=i.RGBA8I),K===i.SHORT&&(ct=i.RGBA16I),K===i.INT&&(ct=i.RGBA32I)),E===i.RGB&&K===i.UNSIGNED_INT_5_9_9_9_REV&&(ct=i.RGB9_E5),E===i.RGBA){const Qt=gt?Pa:Ce.getTransfer(at);K===i.FLOAT&&(ct=i.RGBA32F),K===i.HALF_FLOAT&&(ct=i.RGBA16F),K===i.UNSIGNED_BYTE&&(ct=Qt===ke?i.SRGB8_ALPHA8:i.RGBA8),K===i.UNSIGNED_SHORT_4_4_4_4&&(ct=i.RGBA4),K===i.UNSIGNED_SHORT_5_5_5_1&&(ct=i.RGB5_A1)}return(ct===i.R16F||ct===i.R32F||ct===i.RG16F||ct===i.RG32F||ct===i.RGBA16F||ct===i.RGBA32F)&&t.get("EXT_color_buffer_float"),ct}function x(L,E){let K;return L?E===null||E===1014||E===1020?K=i.DEPTH24_STENCIL8:E===1015?K=i.DEPTH32F_STENCIL8:E===1012&&(K=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===1014||E===1020?K=i.DEPTH_COMPONENT24:E===1015?K=i.DEPTH_COMPONENT32F:E===1012&&(K=i.DEPTH_COMPONENT16),K}function w(L,E){return g(L)===!0||L.isFramebufferTexture&&L.minFilter!==1003&&L.minFilter!==1006?Math.log2(Math.max(E.width,E.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?E.mipmaps.length:1}function T(L){const E=L.target;E.removeEventListener("dispose",T),I(E),E.isVideoTexture&&h.delete(E)}function R(L){const E=L.target;E.removeEventListener("dispose",R),A(E)}function I(L){const E=n.get(L);if(E.__webglInit===void 0)return;const K=L.source,at=d.get(K);if(at){const gt=at[E.__cacheKey];gt.usedTimes--,gt.usedTimes===0&&S(L),Object.keys(at).length===0&&d.delete(K)}n.remove(L)}function S(L){const E=n.get(L);i.deleteTexture(E.__webglTexture);const K=L.source,at=d.get(K);delete at[E.__cacheKey],a.memory.textures--}function A(L){const E=n.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),n.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let at=0;at<6;at++){if(Array.isArray(E.__webglFramebuffer[at]))for(let gt=0;gt<E.__webglFramebuffer[at].length;gt++)i.deleteFramebuffer(E.__webglFramebuffer[at][gt]);else i.deleteFramebuffer(E.__webglFramebuffer[at]);E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer[at])}else{if(Array.isArray(E.__webglFramebuffer))for(let at=0;at<E.__webglFramebuffer.length;at++)i.deleteFramebuffer(E.__webglFramebuffer[at]);else i.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&i.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let at=0;at<E.__webglColorRenderbuffer.length;at++)E.__webglColorRenderbuffer[at]&&i.deleteRenderbuffer(E.__webglColorRenderbuffer[at]);E.__webglDepthRenderbuffer&&i.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const K=L.textures;for(let at=0,gt=K.length;at<gt;at++){const ct=n.get(K[at]);ct.__webglTexture&&(i.deleteTexture(ct.__webglTexture),a.memory.textures--),n.remove(K[at])}n.remove(L)}let C=0;function N(){C=0}function k(){const L=C;return L>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+s.maxTextures),C+=1,L}function H(L){const E=[];return E.push(L.wrapS),E.push(L.wrapT),E.push(L.wrapR||0),E.push(L.magFilter),E.push(L.minFilter),E.push(L.anisotropy),E.push(L.internalFormat),E.push(L.format),E.push(L.type),E.push(L.generateMipmaps),E.push(L.premultiplyAlpha),E.push(L.flipY),E.push(L.unpackAlignment),E.push(L.colorSpace),E.join()}function Q(L,E){const K=n.get(L);if(L.isVideoTexture&&It(L),L.isRenderTargetTexture===!1&&L.version>0&&K.__version!==L.version){const at=L.image;if(at===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(at.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{tt(K,L,E);return}}e.bindTexture(i.TEXTURE_2D,K.__webglTexture,i.TEXTURE0+E)}function V(L,E){const K=n.get(L);if(L.version>0&&K.__version!==L.version){tt(K,L,E);return}e.bindTexture(i.TEXTURE_2D_ARRAY,K.__webglTexture,i.TEXTURE0+E)}function j(L,E){const K=n.get(L);if(L.version>0&&K.__version!==L.version){tt(K,L,E);return}e.bindTexture(i.TEXTURE_3D,K.__webglTexture,i.TEXTURE0+E)}function O(L,E){const K=n.get(L);if(L.version>0&&K.__version!==L.version){rt(K,L,E);return}e.bindTexture(i.TEXTURE_CUBE_MAP,K.__webglTexture,i.TEXTURE0+E)}const nt={1e3:i.REPEAT,1001:i.CLAMP_TO_EDGE,1002:i.MIRRORED_REPEAT},Y={1003:i.NEAREST,1004:i.NEAREST_MIPMAP_NEAREST,1005:i.NEAREST_MIPMAP_LINEAR,1006:i.LINEAR,1007:i.LINEAR_MIPMAP_NEAREST,1008:i.LINEAR_MIPMAP_LINEAR},J={512:i.NEVER,519:i.ALWAYS,513:i.LESS,515:i.LEQUAL,514:i.EQUAL,518:i.GEQUAL,516:i.GREATER,517:i.NOTEQUAL};function ht(L,E){if(E.type===1015&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===1006||E.magFilter===1007||E.magFilter===1005||E.magFilter===1008||E.minFilter===1006||E.minFilter===1007||E.minFilter===1005||E.minFilter===1008)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(L,i.TEXTURE_WRAP_S,nt[E.wrapS]),i.texParameteri(L,i.TEXTURE_WRAP_T,nt[E.wrapT]),(L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY)&&i.texParameteri(L,i.TEXTURE_WRAP_R,nt[E.wrapR]),i.texParameteri(L,i.TEXTURE_MAG_FILTER,Y[E.magFilter]),i.texParameteri(L,i.TEXTURE_MIN_FILTER,Y[E.minFilter]),E.compareFunction&&(i.texParameteri(L,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(L,i.TEXTURE_COMPARE_FUNC,J[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===1003||E.minFilter!==1005&&E.minFilter!==1008||E.type===1015&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||n.get(E).__currentAnisotropy){const K=t.get("EXT_texture_filter_anisotropic");i.texParameterf(L,K.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,s.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy}}}function Vt(L,E){let K=!1;L.__webglInit===void 0&&(L.__webglInit=!0,E.addEventListener("dispose",T));const at=E.source;let gt=d.get(at);gt===void 0&&(gt={},d.set(at,gt));const ct=H(E);if(ct!==L.__cacheKey){gt[ct]===void 0&&(gt[ct]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,K=!0),gt[ct].usedTimes++;const Qt=gt[L.__cacheKey];Qt!==void 0&&(gt[L.__cacheKey].usedTimes--,Qt.usedTimes===0&&S(E)),L.__cacheKey=ct,L.__webglTexture=gt[ct].texture}return K}function tt(L,E,K){let at=i.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(at=i.TEXTURE_2D_ARRAY),E.isData3DTexture&&(at=i.TEXTURE_3D);const gt=Vt(L,E),ct=E.source;e.bindTexture(at,L.__webglTexture,i.TEXTURE0+K);const Qt=n.get(ct);if(ct.version!==Qt.__version||gt===!0){e.activeTexture(i.TEXTURE0+K);const Rt=Ce.getPrimaries(Ce.workingColorSpace),Bt=E.colorSpace===""?null:Ce.getPrimaries(E.colorSpace),Se=E.colorSpace===""||Rt===Bt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Se);let Mt=_(E.image,!1,s.maxTextureSize);Mt=Le(E,Mt);const Ht=r.convert(E.format,E.colorSpace),se=r.convert(E.type);let ce=y(E.internalFormat,Ht,se,E.colorSpace,E.isVideoTexture);ht(at,E);let Wt;const ve=E.mipmaps,de=E.isVideoTexture!==!0,Ee=Qt.__version===void 0||gt===!0,q=ct.dataReady,Dt=w(E,Mt);if(E.isDepthTexture)ce=x(E.format===1027,E.type),Ee&&(de?e.texStorage2D(i.TEXTURE_2D,1,ce,Mt.width,Mt.height):e.texImage2D(i.TEXTURE_2D,0,ce,Mt.width,Mt.height,0,Ht,se,null));else if(E.isDataTexture)if(ve.length>0){de&&Ee&&e.texStorage2D(i.TEXTURE_2D,Dt,ce,ve[0].width,ve[0].height);for(let it=0,pt=ve.length;it<pt;it++)Wt=ve[it],de?q&&e.texSubImage2D(i.TEXTURE_2D,it,0,0,Wt.width,Wt.height,Ht,se,Wt.data):e.texImage2D(i.TEXTURE_2D,it,ce,Wt.width,Wt.height,0,Ht,se,Wt.data);E.generateMipmaps=!1}else de?(Ee&&e.texStorage2D(i.TEXTURE_2D,Dt,ce,Mt.width,Mt.height),q&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Mt.width,Mt.height,Ht,se,Mt.data)):e.texImage2D(i.TEXTURE_2D,0,ce,Mt.width,Mt.height,0,Ht,se,Mt.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){de&&Ee&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Dt,ce,ve[0].width,ve[0].height,Mt.depth);for(let it=0,pt=ve.length;it<pt;it++)if(Wt=ve[it],E.format!==1023)if(Ht!==null)if(de){if(q)if(E.layerUpdates.size>0){const Ut=eu(Wt.width,Wt.height,E.format,E.type);for(const Nt of E.layerUpdates){const ue=Wt.data.subarray(Nt*Ut/Wt.data.BYTES_PER_ELEMENT,(Nt+1)*Ut/Wt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,it,0,0,Nt,Wt.width,Wt.height,1,Ht,ue)}E.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,it,0,0,0,Wt.width,Wt.height,Mt.depth,Ht,Wt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,it,ce,Wt.width,Wt.height,Mt.depth,0,Wt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else de?q&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,it,0,0,0,Wt.width,Wt.height,Mt.depth,Ht,se,Wt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,it,ce,Wt.width,Wt.height,Mt.depth,0,Ht,se,Wt.data)}else{de&&Ee&&e.texStorage2D(i.TEXTURE_2D,Dt,ce,ve[0].width,ve[0].height);for(let it=0,pt=ve.length;it<pt;it++)Wt=ve[it],E.format!==1023?Ht!==null?de?q&&e.compressedTexSubImage2D(i.TEXTURE_2D,it,0,0,Wt.width,Wt.height,Ht,Wt.data):e.compressedTexImage2D(i.TEXTURE_2D,it,ce,Wt.width,Wt.height,0,Wt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):de?q&&e.texSubImage2D(i.TEXTURE_2D,it,0,0,Wt.width,Wt.height,Ht,se,Wt.data):e.texImage2D(i.TEXTURE_2D,it,ce,Wt.width,Wt.height,0,Ht,se,Wt.data)}else if(E.isDataArrayTexture)if(de){if(Ee&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Dt,ce,Mt.width,Mt.height,Mt.depth),q)if(E.layerUpdates.size>0){const it=eu(Mt.width,Mt.height,E.format,E.type);for(const pt of E.layerUpdates){const Ut=Mt.data.subarray(pt*it/Mt.data.BYTES_PER_ELEMENT,(pt+1)*it/Mt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,pt,Mt.width,Mt.height,1,Ht,se,Ut)}E.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Mt.width,Mt.height,Mt.depth,Ht,se,Mt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,ce,Mt.width,Mt.height,Mt.depth,0,Ht,se,Mt.data);else if(E.isData3DTexture)de?(Ee&&e.texStorage3D(i.TEXTURE_3D,Dt,ce,Mt.width,Mt.height,Mt.depth),q&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Mt.width,Mt.height,Mt.depth,Ht,se,Mt.data)):e.texImage3D(i.TEXTURE_3D,0,ce,Mt.width,Mt.height,Mt.depth,0,Ht,se,Mt.data);else if(E.isFramebufferTexture){if(Ee)if(de)e.texStorage2D(i.TEXTURE_2D,Dt,ce,Mt.width,Mt.height);else{let it=Mt.width,pt=Mt.height;for(let Ut=0;Ut<Dt;Ut++)e.texImage2D(i.TEXTURE_2D,Ut,ce,it,pt,0,Ht,se,null),it>>=1,pt>>=1}}else if(ve.length>0){if(de&&Ee){const it=Jt(ve[0]);e.texStorage2D(i.TEXTURE_2D,Dt,ce,it.width,it.height)}for(let it=0,pt=ve.length;it<pt;it++)Wt=ve[it],de?q&&e.texSubImage2D(i.TEXTURE_2D,it,0,0,Ht,se,Wt):e.texImage2D(i.TEXTURE_2D,it,ce,Ht,se,Wt);E.generateMipmaps=!1}else if(de){if(Ee){const it=Jt(Mt);e.texStorage2D(i.TEXTURE_2D,Dt,ce,it.width,it.height)}q&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Ht,se,Mt)}else e.texImage2D(i.TEXTURE_2D,0,ce,Ht,se,Mt);g(E)&&m(at),Qt.__version=ct.version,E.onUpdate&&E.onUpdate(E)}L.__version=E.version}function rt(L,E,K){if(E.image.length!==6)return;const at=Vt(L,E),gt=E.source;e.bindTexture(i.TEXTURE_CUBE_MAP,L.__webglTexture,i.TEXTURE0+K);const ct=n.get(gt);if(gt.version!==ct.__version||at===!0){e.activeTexture(i.TEXTURE0+K);const Qt=Ce.getPrimaries(Ce.workingColorSpace),Rt=E.colorSpace===""?null:Ce.getPrimaries(E.colorSpace),Bt=E.colorSpace===""||Qt===Rt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Bt);const Se=E.isCompressedTexture||E.image[0].isCompressedTexture,Mt=E.image[0]&&E.image[0].isDataTexture,Ht=[];for(let pt=0;pt<6;pt++)!Se&&!Mt?Ht[pt]=_(E.image[pt],!0,s.maxCubemapSize):Ht[pt]=Mt?E.image[pt].image:E.image[pt],Ht[pt]=Le(E,Ht[pt]);const se=Ht[0],ce=r.convert(E.format,E.colorSpace),Wt=r.convert(E.type),ve=y(E.internalFormat,ce,Wt,E.colorSpace),de=E.isVideoTexture!==!0,Ee=ct.__version===void 0||at===!0,q=gt.dataReady;let Dt=w(E,se);ht(i.TEXTURE_CUBE_MAP,E);let it;if(Se){de&&Ee&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Dt,ve,se.width,se.height);for(let pt=0;pt<6;pt++){it=Ht[pt].mipmaps;for(let Ut=0;Ut<it.length;Ut++){const Nt=it[Ut];E.format!==1023?ce!==null?de?q&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Ut,0,0,Nt.width,Nt.height,ce,Nt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Ut,ve,Nt.width,Nt.height,0,Nt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):de?q&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Ut,0,0,Nt.width,Nt.height,ce,Wt,Nt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Ut,ve,Nt.width,Nt.height,0,ce,Wt,Nt.data)}}}else{if(it=E.mipmaps,de&&Ee){it.length>0&&Dt++;const pt=Jt(Ht[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Dt,ve,pt.width,pt.height)}for(let pt=0;pt<6;pt++)if(Mt){de?q&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,0,0,Ht[pt].width,Ht[pt].height,ce,Wt,Ht[pt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,ve,Ht[pt].width,Ht[pt].height,0,ce,Wt,Ht[pt].data);for(let Ut=0;Ut<it.length;Ut++){const ue=it[Ut].image[pt].image;de?q&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Ut+1,0,0,ue.width,ue.height,ce,Wt,ue.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Ut+1,ve,ue.width,ue.height,0,ce,Wt,ue.data)}}else{de?q&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,0,0,ce,Wt,Ht[pt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,ve,ce,Wt,Ht[pt]);for(let Ut=0;Ut<it.length;Ut++){const Nt=it[Ut];de?q&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Ut+1,0,0,ce,Wt,Nt.image[pt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Ut+1,ve,ce,Wt,Nt.image[pt])}}}g(E)&&m(i.TEXTURE_CUBE_MAP),ct.__version=gt.version,E.onUpdate&&E.onUpdate(E)}L.__version=E.version}function ot(L,E,K,at,gt,ct){const Qt=r.convert(K.format,K.colorSpace),Rt=r.convert(K.type),Bt=y(K.internalFormat,Qt,Rt,K.colorSpace),Se=n.get(E),Mt=n.get(K);if(Mt.__renderTarget=E,!Se.__hasExternalTextures){const Ht=Math.max(1,E.width>>ct),se=Math.max(1,E.height>>ct);gt===i.TEXTURE_3D||gt===i.TEXTURE_2D_ARRAY?e.texImage3D(gt,ct,Bt,Ht,se,E.depth,0,Qt,Rt,null):e.texImage2D(gt,ct,Bt,Ht,se,0,Qt,Rt,null)}e.bindFramebuffer(i.FRAMEBUFFER,L),me(E)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,at,gt,Mt.__webglTexture,0,oe(E)):(gt===i.TEXTURE_2D||gt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&gt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,at,gt,Mt.__webglTexture,ct),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Z(L,E,K){if(i.bindRenderbuffer(i.RENDERBUFFER,L),E.depthBuffer){const at=E.depthTexture,gt=at&&at.isDepthTexture?at.type:null,ct=x(E.stencilBuffer,gt),Qt=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Rt=oe(E);me(E)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Rt,ct,E.width,E.height):K?i.renderbufferStorageMultisample(i.RENDERBUFFER,Rt,ct,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,ct,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Qt,i.RENDERBUFFER,L)}else{const at=E.textures;for(let gt=0;gt<at.length;gt++){const ct=at[gt],Qt=r.convert(ct.format,ct.colorSpace),Rt=r.convert(ct.type),Bt=y(ct.internalFormat,Qt,Rt,ct.colorSpace),Se=oe(E);K&&me(E)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Se,Bt,E.width,E.height):me(E)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Se,Bt,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,Bt,E.width,E.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function bt(L,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,L),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const at=n.get(E.depthTexture);at.__renderTarget=E,(!at.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),Q(E.depthTexture,0);const gt=at.__webglTexture,ct=oe(E);if(E.depthTexture.format===1026)me(E)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,gt,0,ct):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,gt,0);else if(E.depthTexture.format===1027)me(E)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,gt,0,ct):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,gt,0);else throw new Error("Unknown depthTexture format")}function Gt(L){const E=n.get(L),K=L.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==L.depthTexture){const at=L.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),at){const gt=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,at.removeEventListener("dispose",gt)};at.addEventListener("dispose",gt),E.__depthDisposeCallback=gt}E.__boundDepthTexture=at}if(L.depthTexture&&!E.__autoAllocateDepthBuffer){if(K)throw new Error("target.depthTexture not supported in Cube render targets");bt(E.__webglFramebuffer,L)}else if(K){E.__webglDepthbuffer=[];for(let at=0;at<6;at++)if(e.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer[at]),E.__webglDepthbuffer[at]===void 0)E.__webglDepthbuffer[at]=i.createRenderbuffer(),Z(E.__webglDepthbuffer[at],L,!1);else{const gt=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ct=E.__webglDepthbuffer[at];i.bindRenderbuffer(i.RENDERBUFFER,ct),i.framebufferRenderbuffer(i.FRAMEBUFFER,gt,i.RENDERBUFFER,ct)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=i.createRenderbuffer(),Z(E.__webglDepthbuffer,L,!1);else{const at=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,gt=E.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,gt),i.framebufferRenderbuffer(i.FRAMEBUFFER,at,i.RENDERBUFFER,gt)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function te(L,E,K){const at=n.get(L);E!==void 0&&ot(at.__webglFramebuffer,L,L.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),K!==void 0&&Gt(L)}function fe(L){const E=L.texture,K=n.get(L),at=n.get(E);L.addEventListener("dispose",R);const gt=L.textures,ct=L.isWebGLCubeRenderTarget===!0,Qt=gt.length>1;if(Qt||(at.__webglTexture===void 0&&(at.__webglTexture=i.createTexture()),at.__version=E.version,a.memory.textures++),ct){K.__webglFramebuffer=[];for(let Rt=0;Rt<6;Rt++)if(E.mipmaps&&E.mipmaps.length>0){K.__webglFramebuffer[Rt]=[];for(let Bt=0;Bt<E.mipmaps.length;Bt++)K.__webglFramebuffer[Rt][Bt]=i.createFramebuffer()}else K.__webglFramebuffer[Rt]=i.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){K.__webglFramebuffer=[];for(let Rt=0;Rt<E.mipmaps.length;Rt++)K.__webglFramebuffer[Rt]=i.createFramebuffer()}else K.__webglFramebuffer=i.createFramebuffer();if(Qt)for(let Rt=0,Bt=gt.length;Rt<Bt;Rt++){const Se=n.get(gt[Rt]);Se.__webglTexture===void 0&&(Se.__webglTexture=i.createTexture(),a.memory.textures++)}if(L.samples>0&&me(L)===!1){K.__webglMultisampledFramebuffer=i.createFramebuffer(),K.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,K.__webglMultisampledFramebuffer);for(let Rt=0;Rt<gt.length;Rt++){const Bt=gt[Rt];K.__webglColorRenderbuffer[Rt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,K.__webglColorRenderbuffer[Rt]);const Se=r.convert(Bt.format,Bt.colorSpace),Mt=r.convert(Bt.type),Ht=y(Bt.internalFormat,Se,Mt,Bt.colorSpace,L.isXRRenderTarget===!0),se=oe(L);i.renderbufferStorageMultisample(i.RENDERBUFFER,se,Ht,L.width,L.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Rt,i.RENDERBUFFER,K.__webglColorRenderbuffer[Rt])}i.bindRenderbuffer(i.RENDERBUFFER,null),L.depthBuffer&&(K.__webglDepthRenderbuffer=i.createRenderbuffer(),Z(K.__webglDepthRenderbuffer,L,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ct){e.bindTexture(i.TEXTURE_CUBE_MAP,at.__webglTexture),ht(i.TEXTURE_CUBE_MAP,E);for(let Rt=0;Rt<6;Rt++)if(E.mipmaps&&E.mipmaps.length>0)for(let Bt=0;Bt<E.mipmaps.length;Bt++)ot(K.__webglFramebuffer[Rt][Bt],L,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,Bt);else ot(K.__webglFramebuffer[Rt],L,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,0);g(E)&&m(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Qt){for(let Rt=0,Bt=gt.length;Rt<Bt;Rt++){const Se=gt[Rt],Mt=n.get(Se);e.bindTexture(i.TEXTURE_2D,Mt.__webglTexture),ht(i.TEXTURE_2D,Se),ot(K.__webglFramebuffer,L,Se,i.COLOR_ATTACHMENT0+Rt,i.TEXTURE_2D,0),g(Se)&&m(i.TEXTURE_2D)}e.unbindTexture()}else{let Rt=i.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Rt=L.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Rt,at.__webglTexture),ht(Rt,E),E.mipmaps&&E.mipmaps.length>0)for(let Bt=0;Bt<E.mipmaps.length;Bt++)ot(K.__webglFramebuffer[Bt],L,E,i.COLOR_ATTACHMENT0,Rt,Bt);else ot(K.__webglFramebuffer,L,E,i.COLOR_ATTACHMENT0,Rt,0);g(E)&&m(Rt),e.unbindTexture()}L.depthBuffer&&Gt(L)}function re(L){const E=L.textures;for(let K=0,at=E.length;K<at;K++){const gt=E[K];if(g(gt)){const ct=v(L),Qt=n.get(gt).__webglTexture;e.bindTexture(ct,Qt),m(ct),e.unbindTexture()}}}const Pe=[],G=[];function kt(L){if(L.samples>0){if(me(L)===!1){const E=L.textures,K=L.width,at=L.height;let gt=i.COLOR_BUFFER_BIT;const ct=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Qt=n.get(L),Rt=E.length>1;if(Rt)for(let Bt=0;Bt<E.length;Bt++)e.bindFramebuffer(i.FRAMEBUFFER,Qt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Bt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Qt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Bt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Qt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Qt.__webglFramebuffer);for(let Bt=0;Bt<E.length;Bt++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(gt|=i.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(gt|=i.STENCIL_BUFFER_BIT)),Rt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Qt.__webglColorRenderbuffer[Bt]);const Se=n.get(E[Bt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Se,0)}i.blitFramebuffer(0,0,K,at,0,0,K,at,gt,i.NEAREST),c===!0&&(Pe.length=0,G.length=0,Pe.push(i.COLOR_ATTACHMENT0+Bt),L.depthBuffer&&L.resolveDepthBuffer===!1&&(Pe.push(ct),G.push(ct),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,G)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Pe))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Rt)for(let Bt=0;Bt<E.length;Bt++){e.bindFramebuffer(i.FRAMEBUFFER,Qt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Bt,i.RENDERBUFFER,Qt.__webglColorRenderbuffer[Bt]);const Se=n.get(E[Bt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Qt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Bt,i.TEXTURE_2D,Se,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Qt.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&c){const E=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[E])}}}function oe(L){return Math.min(s.maxSamples,L.samples)}function me(L){const E=n.get(L);return L.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function It(L){const E=a.render.frame;h.get(L)!==E&&(h.set(L,E),L.update())}function Le(L,E){const K=L.colorSpace,at=L.format,gt=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||K!==bn&&K!==""&&(Ce.getTransfer(K)===ke?(at!==1023||gt!==1009)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",K)),E}function Jt(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(u.width=L.naturalWidth||L.width,u.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(u.width=L.displayWidth,u.height=L.displayHeight):(u.width=L.width,u.height=L.height),u}this.allocateTextureUnit=k,this.resetTextureUnits=N,this.setTexture2D=Q,this.setTexture2DArray=V,this.setTexture3D=j,this.setTextureCube=O,this.rebindTextures=te,this.setupRenderTarget=fe,this.updateRenderTargetMipmap=re,this.updateMultisampleRenderTarget=kt,this.setupDepthRenderbuffer=Gt,this.setupFrameBufferTexture=ot,this.useMultisampledRTT=me}function mv(i,t){function e(n,s=""){let r;const a=Ce.getTransfer(s);if(n===1009)return i.UNSIGNED_BYTE;if(n===1017)return i.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return i.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===1010)return i.BYTE;if(n===1011)return i.SHORT;if(n===1012)return i.UNSIGNED_SHORT;if(n===1013)return i.INT;if(n===1014)return i.UNSIGNED_INT;if(n===1015)return i.FLOAT;if(n===1016)return i.HALF_FLOAT;if(n===1021)return i.ALPHA;if(n===1022)return i.RGB;if(n===1023)return i.RGBA;if(n===1024)return i.LUMINANCE;if(n===1025)return i.LUMINANCE_ALPHA;if(n===1026)return i.DEPTH_COMPONENT;if(n===1027)return i.DEPTH_STENCIL;if(n===1028)return i.RED;if(n===1029)return i.RED_INTEGER;if(n===1030)return i.RG;if(n===1031)return i.RG_INTEGER;if(n===1033)return i.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779)if(a===ke)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===33776)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===33776)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===35840||n===35841||n===35842||n===35843)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===35840)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===36196||n===37492||n===37496)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===36196||n===37492)return a===ke?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===37496)return a===ke?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===37808)return a===ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return a===ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return a===ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return a===ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return a===ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return a===ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return a===ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return a===ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return a===ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return a===ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return a===ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return a===ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return a===ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return a===ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===36492||n===36494||n===36495)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===36492)return a===ke?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===36283||n===36284||n===36285||n===36286)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===36492)return r.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===1020?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const gv={type:"move"};class Do{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new _n,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new _n,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new _n,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null;const o=this._targetRay,c=this._grip,u=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(u&&t.hand){a=!0;for(const _ of t.hand.values()){const g=e.getJointPose(_,n),m=this._getHandJoint(u,_);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}const h=u.joints["index-finger-tip"],l=u.joints["thumb-tip"],d=h.position.distanceTo(l.position),f=.02,p=.005;u.inputState.pinching&&d>f+p?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!u.inputState.pinching&&d<=f-p&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(gv)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),u!==null&&(u.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new _n;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const _v=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,bv=`
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

}`;class xv{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new Ye,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new bi({vertexShader:_v,fragmentShader:bv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Re(new Kn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class vv extends ts{constructor(t,e){super();const n=this;let s=null,r=1,a=null,o="local-floor",c=1,u=null,h=null,l=null,d=null,f=null,p=null;const _=new xv,g=e.getContextAttributes();let m=null,v=null;const y=[],x=[],w=new ee;let T=null;const R=new gn;R.viewport=new xe;const I=new gn;I.viewport=new xe;const S=[R,I],A=new wg;let C=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(tt){let rt=y[tt];return rt===void 0&&(rt=new Do,y[tt]=rt),rt.getTargetRaySpace()},this.getControllerGrip=function(tt){let rt=y[tt];return rt===void 0&&(rt=new Do,y[tt]=rt),rt.getGripSpace()},this.getHand=function(tt){let rt=y[tt];return rt===void 0&&(rt=new Do,y[tt]=rt),rt.getHandSpace()};function k(tt){const rt=x.indexOf(tt.inputSource);if(rt===-1)return;const ot=y[rt];ot!==void 0&&(ot.update(tt.inputSource,tt.frame,u||a),ot.dispatchEvent({type:tt.type,data:tt.inputSource}))}function H(){s.removeEventListener("select",k),s.removeEventListener("selectstart",k),s.removeEventListener("selectend",k),s.removeEventListener("squeeze",k),s.removeEventListener("squeezestart",k),s.removeEventListener("squeezeend",k),s.removeEventListener("end",H),s.removeEventListener("inputsourceschange",Q);for(let tt=0;tt<y.length;tt++){const rt=x[tt];rt!==null&&(x[tt]=null,y[tt].disconnect(rt))}C=null,N=null,_.reset(),t.setRenderTarget(m),f=null,d=null,l=null,s=null,v=null,Vt.stop(),n.isPresenting=!1,t.setPixelRatio(T),t.setSize(w.width,w.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(tt){r=tt,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(tt){o=tt,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||a},this.setReferenceSpace=function(tt){u=tt},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return l},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function(tt){if(s=tt,s!==null){if(m=t.getRenderTarget(),s.addEventListener("select",k),s.addEventListener("selectstart",k),s.addEventListener("selectend",k),s.addEventListener("squeeze",k),s.addEventListener("squeezestart",k),s.addEventListener("squeezeend",k),s.addEventListener("end",H),s.addEventListener("inputsourceschange",Q),g.xrCompatible!==!0&&await e.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(w),s.renderState.layers===void 0){const rt={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,rt),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),v=new Zi(f.framebufferWidth,f.framebufferHeight,{format:1023,type:1009,colorSpace:t.outputColorSpace,stencilBuffer:g.stencil})}else{let rt=null,ot=null,Z=null;g.depth&&(Z=g.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,rt=g.stencil?1027:1026,ot=g.stencil?1020:1014);const bt={colorFormat:e.RGBA8,depthFormat:Z,scaleFactor:r};l=new XRWebGLBinding(s,e),d=l.createProjectionLayer(bt),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),v=new Zi(d.textureWidth,d.textureHeight,{format:1023,type:1009,depthTexture:new cf(d.textureWidth,d.textureHeight,ot,void 0,void 0,void 0,void 0,void 0,void 0,rt),stencilBuffer:g.stencil,colorSpace:t.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(c),u=null,a=await s.requestReferenceSpace(o),Vt.setContext(s),Vt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function Q(tt){for(let rt=0;rt<tt.removed.length;rt++){const ot=tt.removed[rt],Z=x.indexOf(ot);Z>=0&&(x[Z]=null,y[Z].disconnect(ot))}for(let rt=0;rt<tt.added.length;rt++){const ot=tt.added[rt];let Z=x.indexOf(ot);if(Z===-1){for(let Gt=0;Gt<y.length;Gt++)if(Gt>=x.length){x.push(ot),Z=Gt;break}else if(x[Gt]===null){x[Gt]=ot,Z=Gt;break}if(Z===-1)break}const bt=y[Z];bt&&bt.connect(ot)}}const V=new F,j=new F;function O(tt,rt,ot){V.setFromMatrixPosition(rt.matrixWorld),j.setFromMatrixPosition(ot.matrixWorld);const Z=V.distanceTo(j),bt=rt.projectionMatrix.elements,Gt=ot.projectionMatrix.elements,te=bt[14]/(bt[10]-1),fe=bt[14]/(bt[10]+1),re=(bt[9]+1)/bt[5],Pe=(bt[9]-1)/bt[5],G=(bt[8]-1)/bt[0],kt=(Gt[8]+1)/Gt[0],oe=te*G,me=te*kt,It=Z/(-G+kt),Le=It*-G;if(rt.matrixWorld.decompose(tt.position,tt.quaternion,tt.scale),tt.translateX(Le),tt.translateZ(It),tt.matrixWorld.compose(tt.position,tt.quaternion,tt.scale),tt.matrixWorldInverse.copy(tt.matrixWorld).invert(),bt[10]===-1)tt.projectionMatrix.copy(rt.projectionMatrix),tt.projectionMatrixInverse.copy(rt.projectionMatrixInverse);else{const Jt=te+It,L=fe+It,E=oe-Le,K=me+(Z-Le),at=re*fe/L*Jt,gt=Pe*fe/L*Jt;tt.projectionMatrix.makePerspective(E,K,at,gt,Jt,L),tt.projectionMatrixInverse.copy(tt.projectionMatrix).invert()}}function nt(tt,rt){rt===null?tt.matrixWorld.copy(tt.matrix):tt.matrixWorld.multiplyMatrices(rt.matrixWorld,tt.matrix),tt.matrixWorldInverse.copy(tt.matrixWorld).invert()}this.updateCamera=function(tt){if(s===null)return;let rt=tt.near,ot=tt.far;_.texture!==null&&(_.depthNear>0&&(rt=_.depthNear),_.depthFar>0&&(ot=_.depthFar)),A.near=I.near=R.near=rt,A.far=I.far=R.far=ot,(C!==A.near||N!==A.far)&&(s.updateRenderState({depthNear:A.near,depthFar:A.far}),C=A.near,N=A.far),R.layers.mask=tt.layers.mask|2,I.layers.mask=tt.layers.mask|4,A.layers.mask=R.layers.mask|I.layers.mask;const Z=tt.parent,bt=A.cameras;nt(A,Z);for(let Gt=0;Gt<bt.length;Gt++)nt(bt[Gt],Z);bt.length===2?O(A,R,I):A.projectionMatrix.copy(R.projectionMatrix),Y(tt,A,Z)};function Y(tt,rt,ot){ot===null?tt.matrix.copy(rt.matrixWorld):(tt.matrix.copy(ot.matrixWorld),tt.matrix.invert(),tt.matrix.multiply(rt.matrixWorld)),tt.matrix.decompose(tt.position,tt.quaternion,tt.scale),tt.updateMatrixWorld(!0),tt.projectionMatrix.copy(rt.projectionMatrix),tt.projectionMatrixInverse.copy(rt.projectionMatrixInverse),tt.isPerspectiveCamera&&(tt.fov=Ps*2*Math.atan(1/tt.projectionMatrix.elements[5]),tt.zoom=1)}this.getCamera=function(){return A},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(tt){c=tt,d!==null&&(d.fixedFoveation=tt),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=tt)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(A)};let J=null;function ht(tt,rt){if(h=rt.getViewerPose(u||a),p=rt,h!==null){const ot=h.views;f!==null&&(t.setRenderTargetFramebuffer(v,f.framebuffer),t.setRenderTarget(v));let Z=!1;ot.length!==A.cameras.length&&(A.cameras.length=0,Z=!0);for(let Gt=0;Gt<ot.length;Gt++){const te=ot[Gt];let fe=null;if(f!==null)fe=f.getViewport(te);else{const Pe=l.getViewSubImage(d,te);fe=Pe.viewport,Gt===0&&(t.setRenderTargetTextures(v,Pe.colorTexture,d.ignoreDepthValues?void 0:Pe.depthStencilTexture),t.setRenderTarget(v))}let re=S[Gt];re===void 0&&(re=new gn,re.layers.enable(Gt),re.viewport=new xe,S[Gt]=re),re.matrix.fromArray(te.transform.matrix),re.matrix.decompose(re.position,re.quaternion,re.scale),re.projectionMatrix.fromArray(te.projectionMatrix),re.projectionMatrixInverse.copy(re.projectionMatrix).invert(),re.viewport.set(fe.x,fe.y,fe.width,fe.height),Gt===0&&(A.matrix.copy(re.matrix),A.matrix.decompose(A.position,A.quaternion,A.scale)),Z===!0&&A.cameras.push(re)}const bt=s.enabledFeatures;if(bt&&bt.includes("depth-sensing")){const Gt=l.getDepthInformation(ot[0]);Gt&&Gt.isValid&&Gt.texture&&_.init(t,Gt,s.renderState)}}for(let ot=0;ot<y.length;ot++){const Z=x[ot],bt=y[ot];Z!==null&&bt!==void 0&&bt.update(Z,rt,u||a)}J&&J(tt,rt),rt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:rt}),p=null}const Vt=new gf;Vt.setAnimationLoop(ht),this.setAnimationLoop=function(tt){J=tt},this.dispose=function(){}}}const Oi=new Un,yv=new he;function Mv(i,t){function e(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function n(g,m){m.color.getRGB(g.fogColor.value,Jd(i)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function s(g,m,v,y,x){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(g,m):m.isMeshToonMaterial?(r(g,m),l(g,m)):m.isMeshPhongMaterial?(r(g,m),h(g,m)):m.isMeshStandardMaterial?(r(g,m),d(g,m),m.isMeshPhysicalMaterial&&f(g,m,x)):m.isMeshMatcapMaterial?(r(g,m),p(g,m)):m.isMeshDepthMaterial?r(g,m):m.isMeshDistanceMaterial?(r(g,m),_(g,m)):m.isMeshNormalMaterial?r(g,m):m.isLineBasicMaterial?(a(g,m),m.isLineDashedMaterial&&o(g,m)):m.isPointsMaterial?c(g,m,v,y):m.isSpriteMaterial?u(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,e(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===1&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,e(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===1&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,e(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,e(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);const v=t.get(m),y=v.envMap,x=v.envMapRotation;y&&(g.envMap.value=y,Oi.copy(x),Oi.x*=-1,Oi.y*=-1,Oi.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Oi.y*=-1,Oi.z*=-1),g.envMapRotation.value.setFromMatrix4(yv.makeRotationFromEuler(Oi)),g.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,g.aoMapTransform))}function a(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform))}function o(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function c(g,m,v,y){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*v,g.scale.value=y*.5,m.map&&(g.map.value=m.map,e(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function u(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function h(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function l(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function d(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function f(g,m,v){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===1&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=v.texture,g.transmissionSamplerSize.value.set(v.width,v.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,g.specularIntensityMapTransform))}function p(g,m){m.matcap&&(g.matcap.value=m.matcap)}function _(g,m){const v=t.get(m).light;g.referencePosition.value.setFromMatrixPosition(v.matrixWorld),g.nearDistance.value=v.shadow.camera.near,g.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Sv(i,t,e,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(v,y){const x=y.program;n.uniformBlockBinding(v,x)}function u(v,y){let x=s[v.id];x===void 0&&(p(v),x=h(v),s[v.id]=x,v.addEventListener("dispose",g));const w=y.program;n.updateUBOMapping(v,w);const T=t.render.frame;r[v.id]!==T&&(d(v),r[v.id]=T)}function h(v){const y=l();v.__bindingPointIndex=y;const x=i.createBuffer(),w=v.__size,T=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,x),i.bufferData(i.UNIFORM_BUFFER,w,T),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,x),x}function l(){for(let v=0;v<o;v++)if(a.indexOf(v)===-1)return a.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(v){const y=s[v.id],x=v.uniforms,w=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let T=0,R=x.length;T<R;T++){const I=Array.isArray(x[T])?x[T]:[x[T]];for(let S=0,A=I.length;S<A;S++){const C=I[S];if(f(C,T,S,w)===!0){const N=C.__offset,k=Array.isArray(C.value)?C.value:[C.value];let H=0;for(let Q=0;Q<k.length;Q++){const V=k[Q],j=_(V);typeof V=="number"||typeof V=="boolean"?(C.__data[0]=V,i.bufferSubData(i.UNIFORM_BUFFER,N+H,C.__data)):V.isMatrix3?(C.__data[0]=V.elements[0],C.__data[1]=V.elements[1],C.__data[2]=V.elements[2],C.__data[3]=0,C.__data[4]=V.elements[3],C.__data[5]=V.elements[4],C.__data[6]=V.elements[5],C.__data[7]=0,C.__data[8]=V.elements[6],C.__data[9]=V.elements[7],C.__data[10]=V.elements[8],C.__data[11]=0):(V.toArray(C.__data,H),H+=j.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,N,C.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(v,y,x,w){const T=v.value,R=y+"_"+x;if(w[R]===void 0)return typeof T=="number"||typeof T=="boolean"?w[R]=T:w[R]=T.clone(),!0;{const I=w[R];if(typeof T=="number"||typeof T=="boolean"){if(I!==T)return w[R]=T,!0}else if(I.equals(T)===!1)return I.copy(T),!0}return!1}function p(v){const y=v.uniforms;let x=0;const w=16;for(let R=0,I=y.length;R<I;R++){const S=Array.isArray(y[R])?y[R]:[y[R]];for(let A=0,C=S.length;A<C;A++){const N=S[A],k=Array.isArray(N.value)?N.value:[N.value];for(let H=0,Q=k.length;H<Q;H++){const V=k[H],j=_(V),O=x%w,nt=O%j.boundary,Y=O+nt;x+=nt,Y!==0&&w-Y<j.storage&&(x+=w-Y),N.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=x,x+=j.storage}}}const T=x%w;return T>0&&(x+=w-T),v.__size=x,v.__cache={},this}function _(v){const y={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(y.boundary=4,y.storage=4):v.isVector2?(y.boundary=8,y.storage=8):v.isVector3||v.isColor?(y.boundary=16,y.storage=12):v.isVector4?(y.boundary=16,y.storage=16):v.isMatrix3?(y.boundary=48,y.storage=48):v.isMatrix4?(y.boundary=64,y.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),y}function g(v){const y=v.target;y.removeEventListener("dispose",g);const x=a.indexOf(y.__bindingPointIndex);a.splice(x,1),i.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function m(){for(const v in s)i.deleteBuffer(s[v]);a=[],s={},r={}}return{bind:c,update:u,dispose:m}}class Av{constructor(t={}){const{canvas:e=ym(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:u=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:l=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=a;const p=new Uint32Array(4),_=new Int32Array(4);let g=null,m=null;const v=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=He,this.toneMapping=0,this.toneMappingExposure=1;const x=this;let w=!1,T=0,R=0,I=null,S=-1,A=null;const C=new xe,N=new xe;let k=null;const H=new ae(0);let Q=0,V=e.width,j=e.height,O=1,nt=null,Y=null;const J=new xe(0,0,V,j),ht=new xe(0,0,V,j);let Vt=!1;const tt=new kc;let rt=!1,ot=!1;const Z=new he,bt=new he,Gt=new F,te=new xe,fe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let re=!1;function Pe(){return I===null?O:1}let G=n;function kt(M,B){return e.getContext(M,B)}try{const M={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:u,powerPreference:h,failIfMajorPerformanceCaveat:l};if("setAttribute"in e&&e.setAttribute("data-engine","three.js r171"),e.addEventListener("webglcontextlost",pt,!1),e.addEventListener("webglcontextrestored",Ut,!1),e.addEventListener("webglcontextcreationerror",Nt,!1),G===null){const B="webgl2";if(G=kt(B,M),G===null)throw kt(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let oe,me,It,Le,Jt,L,E,K,at,gt,ct,Qt,Rt,Bt,Se,Mt,Ht,se,ce,Wt,ve,de,Ee,q;function Dt(){oe=new Db(G),oe.init(),de=new mv(G,oe),me=new wb(G,oe,t,de),It=new fv(G,oe),me.reverseDepthBuffer&&d&&It.buffers.depth.setReversed(!0),Le=new Ub(G),Jt=new tv,L=new pv(G,oe,It,Jt,me,de,Le),E=new Cb(x),K=new Lb(x),at=new Vg(G),Ee=new Eb(G,at),gt=new Fb(G,at,Le,Ee),ct=new kb(G,gt,at,Le),ce=new Ob(G,me,L),Mt=new Rb(Jt),Qt=new Qx(x,E,K,oe,me,Ee,Mt),Rt=new Mv(x,Jt),Bt=new nv,Se=new cv(oe),se=new Ab(x,E,K,It,ct,f,c),Ht=new hv(x,ct,me),q=new Sv(G,Le,me,It),Wt=new Tb(G,oe,Le),ve=new Nb(G,oe,Le),Le.programs=Qt.programs,x.capabilities=me,x.extensions=oe,x.properties=Jt,x.renderLists=Bt,x.shadowMap=Ht,x.state=It,x.info=Le}Dt();const it=new vv(x,G);this.xr=it,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){const M=oe.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=oe.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return O},this.setPixelRatio=function(M){M!==void 0&&(O=M,this.setSize(V,j,!1))},this.getSize=function(M){return M.set(V,j)},this.setSize=function(M,B,U=!0){if(it.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}V=M,j=B,e.width=Math.floor(M*O),e.height=Math.floor(B*O),U===!0&&(e.style.width=M+"px",e.style.height=B+"px"),this.setViewport(0,0,M,B)},this.getDrawingBufferSize=function(M){return M.set(V*O,j*O).floor()},this.setDrawingBufferSize=function(M,B,U){V=M,j=B,O=U,e.width=Math.floor(M*U),e.height=Math.floor(B*U),this.setViewport(0,0,M,B)},this.getCurrentViewport=function(M){return M.copy(C)},this.getViewport=function(M){return M.copy(J)},this.setViewport=function(M,B,U,z){M.isVector4?J.set(M.x,M.y,M.z,M.w):J.set(M,B,U,z),It.viewport(C.copy(J).multiplyScalar(O).round())},this.getScissor=function(M){return M.copy(ht)},this.setScissor=function(M,B,U,z){M.isVector4?ht.set(M.x,M.y,M.z,M.w):ht.set(M,B,U,z),It.scissor(N.copy(ht).multiplyScalar(O).round())},this.getScissorTest=function(){return Vt},this.setScissorTest=function(M){It.setScissorTest(Vt=M)},this.setOpaqueSort=function(M){nt=M},this.setTransparentSort=function(M){Y=M},this.getClearColor=function(M){return M.copy(se.getClearColor())},this.setClearColor=function(){se.setClearColor.apply(se,arguments)},this.getClearAlpha=function(){return se.getClearAlpha()},this.setClearAlpha=function(){se.setClearAlpha.apply(se,arguments)},this.clear=function(M=!0,B=!0,U=!0){let z=0;if(M){let D=!1;if(I!==null){const et=I.texture.format;D=et===1033||et===1031||et===1029}if(D){const et=I.texture.type,lt=et===1009||et===1014||et===1012||et===1020||et===1017||et===1018,ft=se.getClearColor(),W=se.getClearAlpha(),vt=ft.r,St=ft.g,mt=ft.b;lt?(p[0]=vt,p[1]=St,p[2]=mt,p[3]=W,G.clearBufferuiv(G.COLOR,0,p)):(_[0]=vt,_[1]=St,_[2]=mt,_[3]=W,G.clearBufferiv(G.COLOR,0,_))}else z|=G.COLOR_BUFFER_BIT}B&&(z|=G.DEPTH_BUFFER_BIT),U&&(z|=G.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",pt,!1),e.removeEventListener("webglcontextrestored",Ut,!1),e.removeEventListener("webglcontextcreationerror",Nt,!1),se.dispose(),Bt.dispose(),Se.dispose(),Jt.dispose(),E.dispose(),K.dispose(),ct.dispose(),Ee.dispose(),q.dispose(),Qt.dispose(),it.dispose(),it.removeEventListener("sessionstart",Et),it.removeEventListener("sessionend",Pt),Tt.stop()};function pt(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function Ut(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;const M=Le.autoReset,B=Ht.enabled,U=Ht.autoUpdate,z=Ht.needsUpdate,D=Ht.type;Dt(),Le.autoReset=M,Ht.enabled=B,Ht.autoUpdate=U,Ht.needsUpdate=z,Ht.type=D}function Nt(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function ue(M){const B=M.target;B.removeEventListener("dispose",ue),P(B)}function P(M){b(M),Jt.remove(M)}function b(M){const B=Jt.get(M).programs;B!==void 0&&(B.forEach(function(U){Qt.releaseProgram(U)}),M.isShaderMaterial&&Qt.releaseShaderCache(M))}this.renderBufferDirect=function(M,B,U,z,D,et){B===null&&(B=fe);const lt=D.isMesh&&D.matrixWorld.determinant()<0,ft=Ft(M,B,U,z,D);It.setMaterial(z,lt);let W=U.index,vt=1;if(z.wireframe===!0){if(W=gt.getWireframeAttribute(U),W===void 0)return;vt=2}const St=U.drawRange,mt=U.attributes.position;let Kt=St.start*vt,ne=(St.start+St.count)*vt;et!==null&&(Kt=Math.max(Kt,et.start*vt),ne=Math.min(ne,(et.start+et.count)*vt)),W!==null?(Kt=Math.max(Kt,0),ne=Math.min(ne,W.count)):mt!=null&&(Kt=Math.max(Kt,0),ne=Math.min(ne,mt.count));const ie=ne-Kt;if(ie<0||ie===1/0)return;Ee.setup(D,z,ft,U,W);let Ct,Xt=Wt;if(W!==null&&(Ct=at.get(W),Xt=ve,Xt.setIndex(Ct)),D.isMesh)z.wireframe===!0?(It.setLineWidth(z.wireframeLinewidth*Pe()),Xt.setMode(G.LINES)):Xt.setMode(G.TRIANGLES);else if(D.isLine){let wt=z.linewidth;wt===void 0&&(wt=1),It.setLineWidth(wt*Pe()),D.isLineSegments?Xt.setMode(G.LINES):D.isLineLoop?Xt.setMode(G.LINE_LOOP):Xt.setMode(G.LINE_STRIP)}else D.isPoints?Xt.setMode(G.POINTS):D.isSprite&&Xt.setMode(G.TRIANGLES);if(D.isBatchedMesh)if(D._multiDrawInstances!==null)Xt.renderMultiDrawInstances(D._multiDrawStarts,D._multiDrawCounts,D._multiDrawCount,D._multiDrawInstances);else if(oe.get("WEBGL_multi_draw"))Xt.renderMultiDraw(D._multiDrawStarts,D._multiDrawCounts,D._multiDrawCount);else{const wt=D._multiDrawStarts,ye=D._multiDrawCounts,$t=D._multiDrawCount,Yt=W?at.get(W).bytesPerElement:1,ge=Jt.get(z).currentProgram.getUniforms();for(let Be=0;Be<$t;Be++)ge.setValue(G,"_gl_DrawID",Be),Xt.render(wt[Be]/Yt,ye[Be])}else if(D.isInstancedMesh)Xt.renderInstances(Kt,ie,D.count);else if(U.isInstancedBufferGeometry){const wt=U._maxInstanceCount!==void 0?U._maxInstanceCount:1/0,ye=Math.min(U.instanceCount,wt);Xt.renderInstances(Kt,ie,ye)}else Xt.render(Kt,ie)};function st(M,B,U){M.transparent===!0&&M.side===2&&M.forceSinglePass===!1?(M.side=1,M.needsUpdate=!0,dt(M,B,U),M.side=0,M.needsUpdate=!0,dt(M,B,U),M.side=2):dt(M,B,U)}this.compile=function(M,B,U=null){U===null&&(U=M),m=Se.get(U),m.init(B),y.push(m),U.traverseVisible(function(D){D.isLight&&D.layers.test(B.layers)&&(m.pushLight(D),D.castShadow&&m.pushShadow(D))}),M!==U&&M.traverseVisible(function(D){D.isLight&&D.layers.test(B.layers)&&(m.pushLight(D),D.castShadow&&m.pushShadow(D))}),m.setupLights();const z=new Set;return M.traverse(function(D){if(!(D.isMesh||D.isPoints||D.isLine||D.isSprite))return;const et=D.material;if(et)if(Array.isArray(et))for(let lt=0;lt<et.length;lt++){const ft=et[lt];st(ft,U,D),z.add(ft)}else st(et,U,D),z.add(et)}),y.pop(),m=null,z},this.compileAsync=function(M,B,U=null){const z=this.compile(M,B,U);return new Promise(D=>{function et(){if(z.forEach(function(lt){Jt.get(lt).currentProgram.isReady()&&z.delete(lt)}),z.size===0){D(M);return}setTimeout(et,10)}oe.get("KHR_parallel_shader_compile")!==null?et():setTimeout(et,10)})};let ut=null;function X(M){ut&&ut(M)}function Et(){Tt.stop()}function Pt(){Tt.start()}const Tt=new gf;Tt.setAnimationLoop(X),typeof self<"u"&&Tt.setContext(self),this.setAnimationLoop=function(M){ut=M,it.setAnimationLoop(M),M===null?Tt.stop():Tt.start()},it.addEventListener("sessionstart",Et),it.addEventListener("sessionend",Pt),this.render=function(M,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),it.enabled===!0&&it.isPresenting===!0&&(it.cameraAutoUpdate===!0&&it.updateCamera(B),B=it.getCamera()),M.isScene===!0&&M.onBeforeRender(x,M,B,I),m=Se.get(M,y.length),m.init(B),y.push(m),bt.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),tt.setFromProjectionMatrix(bt),ot=this.localClippingEnabled,rt=Mt.init(this.clippingPlanes,ot),g=Bt.get(M,v.length),g.init(),v.push(g),it.enabled===!0&&it.isPresenting===!0){const et=x.xr.getDepthSensingMesh();et!==null&&zt(et,B,-1/0,x.sortObjects)}zt(M,B,0,x.sortObjects),g.finish(),x.sortObjects===!0&&g.sort(nt,Y),re=it.enabled===!1||it.isPresenting===!1||it.hasDepthSensing()===!1,re&&se.addToRenderList(g,M),this.info.render.frame++,rt===!0&&Mt.beginShadows();const U=m.state.shadowsArray;Ht.render(U,M,B),rt===!0&&Mt.endShadows(),this.info.autoReset===!0&&this.info.reset();const z=g.opaque,D=g.transmissive;if(m.setupLights(),B.isArrayCamera){const et=B.cameras;if(D.length>0)for(let lt=0,ft=et.length;lt<ft;lt++){const W=et[lt];_t(z,D,M,W)}re&&se.render(M);for(let lt=0,ft=et.length;lt<ft;lt++){const W=et[lt];$(g,M,W,W.viewport)}}else D.length>0&&_t(z,D,M,B),re&&se.render(M),$(g,M,B);I!==null&&(L.updateMultisampleRenderTarget(I),L.updateRenderTargetMipmap(I)),M.isScene===!0&&M.onAfterRender(x,M,B),Ee.resetDefaultState(),S=-1,A=null,y.pop(),y.length>0?(m=y[y.length-1],rt===!0&&Mt.setGlobalState(x.clippingPlanes,m.state.camera)):m=null,v.pop(),v.length>0?g=v[v.length-1]:g=null};function zt(M,B,U,z){if(M.visible===!1)return;if(M.layers.test(B.layers)){if(M.isGroup)U=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(B);else if(M.isLight)m.pushLight(M),M.castShadow&&m.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||tt.intersectsSprite(M)){z&&te.setFromMatrixPosition(M.matrixWorld).applyMatrix4(bt);const lt=ct.update(M),ft=M.material;ft.visible&&g.push(M,lt,ft,U,te.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||tt.intersectsObject(M))){const lt=ct.update(M),ft=M.material;if(z&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),te.copy(M.boundingSphere.center)):(lt.boundingSphere===null&&lt.computeBoundingSphere(),te.copy(lt.boundingSphere.center)),te.applyMatrix4(M.matrixWorld).applyMatrix4(bt)),Array.isArray(ft)){const W=lt.groups;for(let vt=0,St=W.length;vt<St;vt++){const mt=W[vt],Kt=ft[mt.materialIndex];Kt&&Kt.visible&&g.push(M,lt,Kt,U,te.z,mt)}}else ft.visible&&g.push(M,lt,ft,U,te.z,null)}}const et=M.children;for(let lt=0,ft=et.length;lt<ft;lt++)zt(et[lt],B,U,z)}function $(M,B,U,z){const D=M.opaque,et=M.transmissive,lt=M.transparent;m.setupLightsView(U),rt===!0&&Mt.setGlobalState(x.clippingPlanes,U),z&&It.viewport(C.copy(z)),D.length>0&&xt(D,B,U),et.length>0&&xt(et,B,U),lt.length>0&&xt(lt,B,U),It.buffers.depth.setTest(!0),It.buffers.depth.setMask(!0),It.buffers.color.setMask(!0),It.setPolygonOffset(!1)}function _t(M,B,U,z){if((U.isScene===!0?U.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[z.id]===void 0&&(m.state.transmissionRenderTarget[z.id]=new Zi(1,1,{generateMipmaps:!0,type:oe.has("EXT_color_buffer_half_float")||oe.has("EXT_color_buffer_float")?1016:1009,minFilter:1008,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ce.workingColorSpace}));const et=m.state.transmissionRenderTarget[z.id],lt=z.viewport||C;et.setSize(lt.z,lt.w);const ft=x.getRenderTarget();x.setRenderTarget(et),x.getClearColor(H),Q=x.getClearAlpha(),Q<1&&x.setClearColor(16777215,.5),x.clear(),re&&se.render(U);const W=x.toneMapping;x.toneMapping=0;const vt=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),m.setupLightsView(z),rt===!0&&Mt.setGlobalState(x.clippingPlanes,z),xt(M,U,z),L.updateMultisampleRenderTarget(et),L.updateRenderTargetMipmap(et),oe.has("WEBGL_multisampled_render_to_texture")===!1){let St=!1;for(let mt=0,Kt=B.length;mt<Kt;mt++){const ne=B[mt],ie=ne.object,Ct=ne.geometry,Xt=ne.material,wt=ne.group;if(Xt.side===2&&ie.layers.test(z.layers)){const ye=Xt.side;Xt.side=1,Xt.needsUpdate=!0,At(ie,U,z,Ct,Xt,wt),Xt.side=ye,Xt.needsUpdate=!0,St=!0}}St===!0&&(L.updateMultisampleRenderTarget(et),L.updateRenderTargetMipmap(et))}x.setRenderTarget(ft),x.setClearColor(H,Q),vt!==void 0&&(z.viewport=vt),x.toneMapping=W}function xt(M,B,U){const z=B.isScene===!0?B.overrideMaterial:null;for(let D=0,et=M.length;D<et;D++){const lt=M[D],ft=lt.object,W=lt.geometry,vt=z===null?lt.material:z,St=lt.group;ft.layers.test(U.layers)&&At(ft,B,U,W,vt,St)}}function At(M,B,U,z,D,et){M.onBeforeRender(x,B,U,z,D,et),M.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),D.onBeforeRender(x,B,U,z,M,et),D.transparent===!0&&D.side===2&&D.forceSinglePass===!1?(D.side=1,D.needsUpdate=!0,x.renderBufferDirect(U,B,z,D,M,et),D.side=0,D.needsUpdate=!0,x.renderBufferDirect(U,B,z,D,M,et),D.side=2):x.renderBufferDirect(U,B,z,D,M,et),M.onAfterRender(x,B,U,z,D,et)}function dt(M,B,U){B.isScene!==!0&&(B=fe);const z=Jt.get(M),D=m.state.lights,et=m.state.shadowsArray,lt=D.state.version,ft=Qt.getParameters(M,D.state,et,B,U),W=Qt.getProgramCacheKey(ft);let vt=z.programs;z.environment=M.isMeshStandardMaterial?B.environment:null,z.fog=B.fog,z.envMap=(M.isMeshStandardMaterial?K:E).get(M.envMap||z.environment),z.envMapRotation=z.environment!==null&&M.envMap===null?B.environmentRotation:M.envMapRotation,vt===void 0&&(M.addEventListener("dispose",ue),vt=new Map,z.programs=vt);let St=vt.get(W);if(St!==void 0){if(z.currentProgram===St&&z.lightsStateVersion===lt)return jt(M,ft),St}else ft.uniforms=Qt.getUniforms(M),M.onBeforeCompile(ft,x),St=Qt.acquireProgram(ft,W),vt.set(W,St),z.uniforms=ft.uniforms;const mt=z.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(mt.clippingPlanes=Mt.uniform),jt(M,ft),z.needsLights=yt(M),z.lightsStateVersion=lt,z.needsLights&&(mt.ambientLightColor.value=D.state.ambient,mt.lightProbe.value=D.state.probe,mt.directionalLights.value=D.state.directional,mt.directionalLightShadows.value=D.state.directionalShadow,mt.spotLights.value=D.state.spot,mt.spotLightShadows.value=D.state.spotShadow,mt.rectAreaLights.value=D.state.rectArea,mt.ltc_1.value=D.state.rectAreaLTC1,mt.ltc_2.value=D.state.rectAreaLTC2,mt.pointLights.value=D.state.point,mt.pointLightShadows.value=D.state.pointShadow,mt.hemisphereLights.value=D.state.hemi,mt.directionalShadowMap.value=D.state.directionalShadowMap,mt.directionalShadowMatrix.value=D.state.directionalShadowMatrix,mt.spotShadowMap.value=D.state.spotShadowMap,mt.spotLightMatrix.value=D.state.spotLightMatrix,mt.spotLightMap.value=D.state.spotLightMap,mt.pointShadowMap.value=D.state.pointShadowMap,mt.pointShadowMatrix.value=D.state.pointShadowMatrix),z.currentProgram=St,z.uniformsList=null,St}function Ot(M){if(M.uniformsList===null){const B=M.currentProgram.getUniforms();M.uniformsList=Ea.seqWithValue(B.seq,M.uniforms)}return M.uniformsList}function jt(M,B){const U=Jt.get(M);U.outputColorSpace=B.outputColorSpace,U.batching=B.batching,U.batchingColor=B.batchingColor,U.instancing=B.instancing,U.instancingColor=B.instancingColor,U.instancingMorph=B.instancingMorph,U.skinning=B.skinning,U.morphTargets=B.morphTargets,U.morphNormals=B.morphNormals,U.morphColors=B.morphColors,U.morphTargetsCount=B.morphTargetsCount,U.numClippingPlanes=B.numClippingPlanes,U.numIntersection=B.numClipIntersection,U.vertexAlphas=B.vertexAlphas,U.vertexTangents=B.vertexTangents,U.toneMapping=B.toneMapping}function Ft(M,B,U,z,D){B.isScene!==!0&&(B=fe),L.resetTextureUnits();const et=B.fog,lt=z.isMeshStandardMaterial?B.environment:null,ft=I===null?x.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:bn,W=(z.isMeshStandardMaterial?K:E).get(z.envMap||lt),vt=z.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,St=!!U.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),mt=!!U.morphAttributes.position,Kt=!!U.morphAttributes.normal,ne=!!U.morphAttributes.color;let ie=0;z.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(ie=x.toneMapping);const Ct=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,Xt=Ct!==void 0?Ct.length:0,wt=Jt.get(z),ye=m.state.lights;if(rt===!0&&(ot===!0||M!==A)){const Oe=M===A&&z.id===S;Mt.setState(z,M,Oe)}let $t=!1;z.version===wt.__version?(wt.needsLights&&wt.lightsStateVersion!==ye.state.version||wt.outputColorSpace!==ft||D.isBatchedMesh&&wt.batching===!1||!D.isBatchedMesh&&wt.batching===!0||D.isBatchedMesh&&wt.batchingColor===!0&&D.colorTexture===null||D.isBatchedMesh&&wt.batchingColor===!1&&D.colorTexture!==null||D.isInstancedMesh&&wt.instancing===!1||!D.isInstancedMesh&&wt.instancing===!0||D.isSkinnedMesh&&wt.skinning===!1||!D.isSkinnedMesh&&wt.skinning===!0||D.isInstancedMesh&&wt.instancingColor===!0&&D.instanceColor===null||D.isInstancedMesh&&wt.instancingColor===!1&&D.instanceColor!==null||D.isInstancedMesh&&wt.instancingMorph===!0&&D.morphTexture===null||D.isInstancedMesh&&wt.instancingMorph===!1&&D.morphTexture!==null||wt.envMap!==W||z.fog===!0&&wt.fog!==et||wt.numClippingPlanes!==void 0&&(wt.numClippingPlanes!==Mt.numPlanes||wt.numIntersection!==Mt.numIntersection)||wt.vertexAlphas!==vt||wt.vertexTangents!==St||wt.morphTargets!==mt||wt.morphNormals!==Kt||wt.morphColors!==ne||wt.toneMapping!==ie||wt.morphTargetsCount!==Xt)&&($t=!0):($t=!0,wt.__version=z.version);let Yt=wt.currentProgram;$t===!0&&(Yt=dt(z,B,D));let ge=!1,Be=!1,xn=!1;const le=Yt.getUniforms(),Ue=wt.uniforms;if(It.useProgram(Yt.program)&&(ge=!0,Be=!0,xn=!0),z.id!==S&&(S=z.id,Be=!0),ge||A!==M){It.buffers.depth.getReversed()?(Z.copy(M.projectionMatrix),Sm(Z),Am(Z),le.setValue(G,"projectionMatrix",Z)):le.setValue(G,"projectionMatrix",M.projectionMatrix),le.setValue(G,"viewMatrix",M.matrixWorldInverse);const qe=le.map.cameraPosition;qe!==void 0&&qe.setValue(G,Gt.setFromMatrixPosition(M.matrixWorld)),me.logarithmicDepthBuffer&&le.setValue(G,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&le.setValue(G,"isOrthographic",M.isOrthographicCamera===!0),A!==M&&(A=M,Be=!0,xn=!0)}if(D.isSkinnedMesh){le.setOptional(G,D,"bindMatrix"),le.setOptional(G,D,"bindMatrixInverse");const Oe=D.skeleton;Oe&&(Oe.boneTexture===null&&Oe.computeBoneTexture(),le.setValue(G,"boneTexture",Oe.boneTexture,L))}D.isBatchedMesh&&(le.setOptional(G,D,"batchingTexture"),le.setValue(G,"batchingTexture",D._matricesTexture,L),le.setOptional(G,D,"batchingIdTexture"),le.setValue(G,"batchingIdTexture",D._indirectTexture,L),le.setOptional(G,D,"batchingColorTexture"),D._colorsTexture!==null&&le.setValue(G,"batchingColorTexture",D._colorsTexture,L));const je=U.morphAttributes;if((je.position!==void 0||je.normal!==void 0||je.color!==void 0)&&ce.update(D,U,Yt),(Be||wt.receiveShadow!==D.receiveShadow)&&(wt.receiveShadow=D.receiveShadow,le.setValue(G,"receiveShadow",D.receiveShadow)),z.isMeshGouraudMaterial&&z.envMap!==null&&(Ue.envMap.value=W,Ue.flipEnvMap.value=W.isCubeTexture&&W.isRenderTargetTexture===!1?-1:1),z.isMeshStandardMaterial&&z.envMap===null&&B.environment!==null&&(Ue.envMapIntensity.value=B.environmentIntensity),Be&&(le.setValue(G,"toneMappingExposure",x.toneMappingExposure),wt.needsLights&&pe(Ue,xn),et&&z.fog===!0&&Rt.refreshFogUniforms(Ue,et),Rt.refreshMaterialUniforms(Ue,z,O,j,m.state.transmissionRenderTarget[M.id]),Ea.upload(G,Ot(wt),Ue,L)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(Ea.upload(G,Ot(wt),Ue,L),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&le.setValue(G,"center",D.center),le.setValue(G,"modelViewMatrix",D.modelViewMatrix),le.setValue(G,"normalMatrix",D.normalMatrix),le.setValue(G,"modelMatrix",D.matrixWorld),z.isShaderMaterial||z.isRawShaderMaterial){const Oe=z.uniformsGroups;for(let qe=0,vn=Oe.length;qe<vn;qe++){const cn=Oe[qe];q.update(cn,Yt),q.bind(cn,Yt)}}return Yt}function pe(M,B){M.ambientLightColor.needsUpdate=B,M.lightProbe.needsUpdate=B,M.directionalLights.needsUpdate=B,M.directionalLightShadows.needsUpdate=B,M.pointLights.needsUpdate=B,M.pointLightShadows.needsUpdate=B,M.spotLights.needsUpdate=B,M.spotLightShadows.needsUpdate=B,M.rectAreaLights.needsUpdate=B,M.hemisphereLights.needsUpdate=B}function yt(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(M,B,U){Jt.get(M.texture).__webglTexture=B,Jt.get(M.depthTexture).__webglTexture=U;const z=Jt.get(M);z.__hasExternalTextures=!0,z.__autoAllocateDepthBuffer=U===void 0,z.__autoAllocateDepthBuffer||oe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),z.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(M,B){const U=Jt.get(M);U.__webglFramebuffer=B,U.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(M,B=0,U=0){I=M,T=B,R=U;let z=!0,D=null,et=!1,lt=!1;if(M){const W=Jt.get(M);if(W.__useDefaultFramebuffer!==void 0)It.bindFramebuffer(G.FRAMEBUFFER,null),z=!1;else if(W.__webglFramebuffer===void 0)L.setupRenderTarget(M);else if(W.__hasExternalTextures)L.rebindTextures(M,Jt.get(M.texture).__webglTexture,Jt.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){const mt=M.depthTexture;if(W.__boundDepthTexture!==mt){if(mt!==null&&Jt.has(mt)&&(M.width!==mt.image.width||M.height!==mt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");L.setupDepthRenderbuffer(M)}}const vt=M.texture;(vt.isData3DTexture||vt.isDataArrayTexture||vt.isCompressedArrayTexture)&&(lt=!0);const St=Jt.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(St[B])?D=St[B][U]:D=St[B],et=!0):M.samples>0&&L.useMultisampledRTT(M)===!1?D=Jt.get(M).__webglMultisampledFramebuffer:Array.isArray(St)?D=St[U]:D=St,C.copy(M.viewport),N.copy(M.scissor),k=M.scissorTest}else C.copy(J).multiplyScalar(O).floor(),N.copy(ht).multiplyScalar(O).floor(),k=Vt;if(It.bindFramebuffer(G.FRAMEBUFFER,D)&&z&&It.drawBuffers(M,D),It.viewport(C),It.scissor(N),It.setScissorTest(k),et){const W=Jt.get(M.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+B,W.__webglTexture,U)}else if(lt){const W=Jt.get(M.texture),vt=B||0;G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,W.__webglTexture,U||0,vt)}S=-1},this.readRenderTargetPixels=function(M,B,U,z,D,et,lt){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ft=Jt.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&lt!==void 0&&(ft=ft[lt]),ft){It.bindFramebuffer(G.FRAMEBUFFER,ft);try{const W=M.texture,vt=W.format,St=W.type;if(!me.textureFormatReadable(vt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!me.textureTypeReadable(St)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=M.width-z&&U>=0&&U<=M.height-D&&G.readPixels(B,U,z,D,de.convert(vt),de.convert(St),et)}finally{const W=I!==null?Jt.get(I).__webglFramebuffer:null;It.bindFramebuffer(G.FRAMEBUFFER,W)}}},this.readRenderTargetPixelsAsync=async function(M,B,U,z,D,et,lt){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ft=Jt.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&lt!==void 0&&(ft=ft[lt]),ft){const W=M.texture,vt=W.format,St=W.type;if(!me.textureFormatReadable(vt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!me.textureTypeReadable(St))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(B>=0&&B<=M.width-z&&U>=0&&U<=M.height-D){It.bindFramebuffer(G.FRAMEBUFFER,ft);const mt=G.createBuffer();G.bindBuffer(G.PIXEL_PACK_BUFFER,mt),G.bufferData(G.PIXEL_PACK_BUFFER,et.byteLength,G.STREAM_READ),G.readPixels(B,U,z,D,de.convert(vt),de.convert(St),0);const Kt=I!==null?Jt.get(I).__webglFramebuffer:null;It.bindFramebuffer(G.FRAMEBUFFER,Kt);const ne=G.fenceSync(G.SYNC_GPU_COMMANDS_COMPLETE,0);return G.flush(),await Mm(G,ne,4),G.bindBuffer(G.PIXEL_PACK_BUFFER,mt),G.getBufferSubData(G.PIXEL_PACK_BUFFER,0,et),G.deleteBuffer(mt),G.deleteSync(ne),et}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(M,B=null,U=0){M.isTexture!==!0&&(Es("WebGLRenderer: copyFramebufferToTexture function signature has changed."),B=arguments[0]||null,M=arguments[1]);const z=Math.pow(2,-U),D=Math.floor(M.image.width*z),et=Math.floor(M.image.height*z),lt=B!==null?B.x:0,ft=B!==null?B.y:0;L.setTexture2D(M,0),G.copyTexSubImage2D(G.TEXTURE_2D,U,0,0,lt,ft,D,et),It.unbindTexture()};const Te=G.createFramebuffer(),Zt=G.createFramebuffer();this.copyTextureToTexture=function(M,B,U=null,z=null,D=0,et=null){M.isTexture!==!0&&(Es("WebGLRenderer: copyTextureToTexture function signature has changed."),z=arguments[0]||null,M=arguments[1],B=arguments[2],et=arguments[3]||0,U=null),et===null&&(D!==0?(Es("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),et=D,D=0):et=0);let lt,ft,W,vt,St,mt,Kt,ne,ie;const Ct=M.isCompressedTexture?M.mipmaps[et]:M.image;if(U!==null)lt=U.max.x-U.min.x,ft=U.max.y-U.min.y,W=U.isBox3?U.max.z-U.min.z:1,vt=U.min.x,St=U.min.y,mt=U.isBox3?U.min.z:0;else{const je=Math.pow(2,-D);lt=Math.floor(Ct.width*je),ft=Math.floor(Ct.height*je),M.isDataArrayTexture?W=Ct.depth:M.isData3DTexture?W=Math.floor(Ct.depth*je):W=1,vt=0,St=0,mt=0}z!==null?(Kt=z.x,ne=z.y,ie=z.z):(Kt=0,ne=0,ie=0);const Xt=de.convert(B.format),wt=de.convert(B.type);let ye;B.isData3DTexture?(L.setTexture3D(B,0),ye=G.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(L.setTexture2DArray(B,0),ye=G.TEXTURE_2D_ARRAY):(L.setTexture2D(B,0),ye=G.TEXTURE_2D),G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,B.flipY),G.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),G.pixelStorei(G.UNPACK_ALIGNMENT,B.unpackAlignment);const $t=G.getParameter(G.UNPACK_ROW_LENGTH),Yt=G.getParameter(G.UNPACK_IMAGE_HEIGHT),ge=G.getParameter(G.UNPACK_SKIP_PIXELS),Be=G.getParameter(G.UNPACK_SKIP_ROWS),xn=G.getParameter(G.UNPACK_SKIP_IMAGES);G.pixelStorei(G.UNPACK_ROW_LENGTH,Ct.width),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,Ct.height),G.pixelStorei(G.UNPACK_SKIP_PIXELS,vt),G.pixelStorei(G.UNPACK_SKIP_ROWS,St),G.pixelStorei(G.UNPACK_SKIP_IMAGES,mt);const le=M.isDataArrayTexture||M.isData3DTexture,Ue=B.isDataArrayTexture||B.isData3DTexture;if(M.isDepthTexture){const je=Jt.get(M),Oe=Jt.get(B),qe=Jt.get(je.__renderTarget),vn=Jt.get(Oe.__renderTarget);It.bindFramebuffer(G.READ_FRAMEBUFFER,qe.__webglFramebuffer),It.bindFramebuffer(G.DRAW_FRAMEBUFFER,vn.__webglFramebuffer);for(let cn=0;cn<W;cn++)le&&(G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,Jt.get(M).__webglTexture,D,mt+cn),G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,Jt.get(B).__webglTexture,et,ie+cn)),G.blitFramebuffer(vt,St,lt,ft,Kt,ne,lt,ft,G.DEPTH_BUFFER_BIT,G.NEAREST);It.bindFramebuffer(G.READ_FRAMEBUFFER,null),It.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else if(D!==0||M.isRenderTargetTexture||Jt.has(M)){const je=Jt.get(M),Oe=Jt.get(B);It.bindFramebuffer(G.READ_FRAMEBUFFER,Te),It.bindFramebuffer(G.DRAW_FRAMEBUFFER,Zt);for(let qe=0;qe<W;qe++)le?G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,je.__webglTexture,D,mt+qe):G.framebufferTexture2D(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,je.__webglTexture,D),Ue?G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,Oe.__webglTexture,et,ie+qe):G.framebufferTexture2D(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,Oe.__webglTexture,et),D!==0?G.blitFramebuffer(vt,St,lt,ft,Kt,ne,lt,ft,G.COLOR_BUFFER_BIT,G.NEAREST):Ue?G.copyTexSubImage3D(ye,et,Kt,ne,ie+qe,vt,St,lt,ft):G.copyTexSubImage2D(ye,et,Kt,ne,vt,St,lt,ft);It.bindFramebuffer(G.READ_FRAMEBUFFER,null),It.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else Ue?M.isDataTexture||M.isData3DTexture?G.texSubImage3D(ye,et,Kt,ne,ie,lt,ft,W,Xt,wt,Ct.data):B.isCompressedArrayTexture?G.compressedTexSubImage3D(ye,et,Kt,ne,ie,lt,ft,W,Xt,Ct.data):G.texSubImage3D(ye,et,Kt,ne,ie,lt,ft,W,Xt,wt,Ct):M.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,et,Kt,ne,lt,ft,Xt,wt,Ct.data):M.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,et,Kt,ne,Ct.width,Ct.height,Xt,Ct.data):G.texSubImage2D(G.TEXTURE_2D,et,Kt,ne,lt,ft,Xt,wt,Ct);G.pixelStorei(G.UNPACK_ROW_LENGTH,$t),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,Yt),G.pixelStorei(G.UNPACK_SKIP_PIXELS,ge),G.pixelStorei(G.UNPACK_SKIP_ROWS,Be),G.pixelStorei(G.UNPACK_SKIP_IMAGES,xn),et===0&&B.generateMipmaps&&G.generateMipmap(ye),It.unbindTexture()},this.copyTextureToTexture3D=function(M,B,U=null,z=null,D=0){return M.isTexture!==!0&&(Es("WebGLRenderer: copyTextureToTexture3D function signature has changed."),U=arguments[0]||null,z=arguments[1]||null,M=arguments[2],B=arguments[3],D=arguments[4]||0),Es('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(M,B,U,z,D)},this.initRenderTarget=function(M){Jt.get(M).__webglFramebuffer===void 0&&L.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?L.setTextureCube(M,0):M.isData3DTexture?L.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?L.setTexture2DArray(M,0):L.setTexture2D(M,0),It.unbindTexture()},this.resetState=function(){T=0,R=0,I=null,It.reset(),Ee.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return 2e3}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=Ce._getDrawingBufferColorSpace(t),e.unpackColorSpace=Ce._getUnpackColorSpace()}}function Tu(i,t){if(t===0)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(t===2||t===1){let e=i.getIndex();if(e===null){const a=[],o=i.getAttribute("position");if(o!==void 0){for(let c=0;c<o.count;c++)a.push(c);i.setIndex(a),e=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}const n=e.count-2,s=[];if(t===2)for(let a=1;a<=n;a++)s.push(e.getX(0)),s.push(e.getX(a)),s.push(e.getX(a+1));else for(let a=0;a<n;a++)a%2===0?(s.push(e.getX(a)),s.push(e.getX(a+1)),s.push(e.getX(a+2))):(s.push(e.getX(a+2)),s.push(e.getX(a+1)),s.push(e.getX(a)));s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=i.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",t),i}class Ev extends ks{constructor(t){super(t),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(e){return new Iv(e)}),this.register(function(e){return new Pv(e)}),this.register(function(e){return new Gv(e)}),this.register(function(e){return new zv(e)}),this.register(function(e){return new Hv(e)}),this.register(function(e){return new Dv(e)}),this.register(function(e){return new Fv(e)}),this.register(function(e){return new Nv(e)}),this.register(function(e){return new Uv(e)}),this.register(function(e){return new Cv(e)}),this.register(function(e){return new Ov(e)}),this.register(function(e){return new Lv(e)}),this.register(function(e){return new Bv(e)}),this.register(function(e){return new kv(e)}),this.register(function(e){return new wv(e)}),this.register(function(e){return new Vv(e)}),this.register(function(e){return new Wv(e)})}load(t,e,n,s){const r=this;let a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){const u=pr.extractUrlBase(t);a=pr.resolveURL(u,this.path)}else a=pr.extractUrlBase(t);this.manager.itemStart(t);const o=function(u){s?s(u):console.error(u),r.manager.itemError(t),r.manager.itemEnd(t)},c=new ff(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(t,function(u){try{r.parse(u,a,function(h){e(h),r.manager.itemEnd(t)},o)}catch(h){o(h)}},n,o)}setDRACOLoader(t){return this.dracoLoader=t,this}setKTX2Loader(t){return this.ktx2Loader=t,this}setMeshoptDecoder(t){return this.meshoptDecoder=t,this}register(t){return this.pluginCallbacks.indexOf(t)===-1&&this.pluginCallbacks.push(t),this}unregister(t){return this.pluginCallbacks.indexOf(t)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(t),1),this}parse(t,e,n,s){let r;const a={},o={},c=new TextDecoder;if(typeof t=="string")r=JSON.parse(t);else if(t instanceof ArrayBuffer)if(c.decode(new Uint8Array(t,0,4))===yf){try{a[Ae.KHR_BINARY_GLTF]=new jv(t)}catch(l){s&&s(l);return}r=JSON.parse(a[Ae.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(t));else r=t;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const u=new sy(r,{path:e||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});u.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const l=this.pluginCallbacks[h](u);l.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[l.name]=l,a[l.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){const l=r.extensionsUsed[h],d=r.extensionsRequired||[];switch(l){case Ae.KHR_MATERIALS_UNLIT:a[l]=new Rv;break;case Ae.KHR_DRACO_MESH_COMPRESSION:a[l]=new Xv(r,this.dracoLoader);break;case Ae.KHR_TEXTURE_TRANSFORM:a[l]=new qv;break;case Ae.KHR_MESH_QUANTIZATION:a[l]=new Kv;break;default:d.indexOf(l)>=0&&o[l]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+l+'".')}}u.setExtensions(a),u.setPlugins(o),u.parse(n,s)}parseAsync(t,e){const n=this;return new Promise(function(s,r){n.parse(t,e,s,r)})}}function Tv(){let i={};return{get:function(t){return i[t]},add:function(t,e){i[t]=e},remove:function(t){delete i[t]},removeAll:function(){i={}}}}const Ae={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class wv{constructor(t){this.parser=t,this.name=Ae.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const t=this.parser,e=this.parser.json.nodes||[];for(let n=0,s=e.length;n<s;n++){const r=e[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&t._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(t){const e=this.parser,n="light:"+t;let s=e.cache.get(n);if(s)return s;const r=e.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[t];let u;const h=new ae(16777215);c.color!==void 0&&h.setRGB(c.color[0],c.color[1],c.color[2],bn);const l=c.range!==void 0?c.range:0;switch(c.type){case"directional":u=new mf(h),u.target.position.set(0,0,-1),u.add(u.target);break;case"point":u=new Sg(h),u.distance=l;break;case"spot":u=new yg(h),u.distance=l,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,u.angle=c.spot.outerConeAngle,u.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,u.target.position.set(0,0,-1),u.add(u.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return u.position.set(0,0,0),u.decay=2,di(u,c),c.intensity!==void 0&&(u.intensity=c.intensity),u.name=e.createUniqueName(c.name||"light_"+t),s=Promise.resolve(u),e.cache.add(n,s),s}getDependency(t,e){if(t==="light")return this._loadLight(e)}createNodeAttachment(t){const e=this,n=this.parser,r=n.json.nodes[t],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(c){return n._getNodeRef(e.cache,o,c)})}}class Rv{constructor(){this.name=Ae.KHR_MATERIALS_UNLIT}getMaterialType(){return tn}extendParams(t,e,n){const s=[];t.color=new ae(1,1,1),t.opacity=1;const r=e.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const a=r.baseColorFactor;t.color.setRGB(a[0],a[1],a[2],bn),t.opacity=a[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(t,"map",r.baseColorTexture,He))}return Promise.all(s)}}class Cv{constructor(t){this.parser=t,this.name=Ae.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(t,e){const s=this.parser.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name].emissiveStrength;return r!==void 0&&(e.emissiveIntensity=r),Promise.resolve()}}class Iv{constructor(t){this.parser=t,this.name=Ae.KHR_MATERIALS_CLEARCOAT}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:ei}extendMaterialParams(t,e){const n=this.parser,s=n.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],a=s.extensions[this.name];if(a.clearcoatFactor!==void 0&&(e.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&r.push(n.assignTexture(e,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(e.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(e,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(e,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){const o=a.clearcoatNormalTexture.scale;e.clearcoatNormalScale=new ee(o,o)}return Promise.all(r)}}class Pv{constructor(t){this.parser=t,this.name=Ae.KHR_MATERIALS_DISPERSION}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:ei}extendMaterialParams(t,e){const s=this.parser.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name];return e.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}}class Lv{constructor(t){this.parser=t,this.name=Ae.KHR_MATERIALS_IRIDESCENCE}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:ei}extendMaterialParams(t,e){const n=this.parser,s=n.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],a=s.extensions[this.name];return a.iridescenceFactor!==void 0&&(e.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&r.push(n.assignTexture(e,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(e.iridescenceIOR=a.iridescenceIor),e.iridescenceThicknessRange===void 0&&(e.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(e.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(e.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(e,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(r)}}class Dv{constructor(t){this.parser=t,this.name=Ae.KHR_MATERIALS_SHEEN}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:ei}extendMaterialParams(t,e){const n=this.parser,s=n.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[];e.sheenColor=new ae(0,0,0),e.sheenRoughness=0,e.sheen=1;const a=s.extensions[this.name];if(a.sheenColorFactor!==void 0){const o=a.sheenColorFactor;e.sheenColor.setRGB(o[0],o[1],o[2],bn)}return a.sheenRoughnessFactor!==void 0&&(e.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&r.push(n.assignTexture(e,"sheenColorMap",a.sheenColorTexture,He)),a.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(e,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(r)}}class Fv{constructor(t){this.parser=t,this.name=Ae.KHR_MATERIALS_TRANSMISSION}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:ei}extendMaterialParams(t,e){const n=this.parser,s=n.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],a=s.extensions[this.name];return a.transmissionFactor!==void 0&&(e.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&r.push(n.assignTexture(e,"transmissionMap",a.transmissionTexture)),Promise.all(r)}}class Nv{constructor(t){this.parser=t,this.name=Ae.KHR_MATERIALS_VOLUME}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:ei}extendMaterialParams(t,e){const n=this.parser,s=n.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],a=s.extensions[this.name];e.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&r.push(n.assignTexture(e,"thicknessMap",a.thicknessTexture)),e.attenuationDistance=a.attenuationDistance||1/0;const o=a.attenuationColor||[1,1,1];return e.attenuationColor=new ae().setRGB(o[0],o[1],o[2],bn),Promise.all(r)}}class Uv{constructor(t){this.parser=t,this.name=Ae.KHR_MATERIALS_IOR}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:ei}extendMaterialParams(t,e){const s=this.parser.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name];return e.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class Ov{constructor(t){this.parser=t,this.name=Ae.KHR_MATERIALS_SPECULAR}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:ei}extendMaterialParams(t,e){const n=this.parser,s=n.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],a=s.extensions[this.name];e.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&r.push(n.assignTexture(e,"specularIntensityMap",a.specularTexture));const o=a.specularColorFactor||[1,1,1];return e.specularColor=new ae().setRGB(o[0],o[1],o[2],bn),a.specularColorTexture!==void 0&&r.push(n.assignTexture(e,"specularColorMap",a.specularColorTexture,He)),Promise.all(r)}}class kv{constructor(t){this.parser=t,this.name=Ae.EXT_MATERIALS_BUMP}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:ei}extendMaterialParams(t,e){const n=this.parser,s=n.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],a=s.extensions[this.name];return e.bumpScale=a.bumpFactor!==void 0?a.bumpFactor:1,a.bumpTexture!==void 0&&r.push(n.assignTexture(e,"bumpMap",a.bumpTexture)),Promise.all(r)}}class Bv{constructor(t){this.parser=t,this.name=Ae.KHR_MATERIALS_ANISOTROPY}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:ei}extendMaterialParams(t,e){const n=this.parser,s=n.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],a=s.extensions[this.name];return a.anisotropyStrength!==void 0&&(e.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(e.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&r.push(n.assignTexture(e,"anisotropyMap",a.anisotropyTexture)),Promise.all(r)}}class Gv{constructor(t){this.parser=t,this.name=Ae.KHR_TEXTURE_BASISU}loadTexture(t){const e=this.parser,n=e.json,s=n.textures[t];if(!s.extensions||!s.extensions[this.name])return null;const r=s.extensions[this.name],a=e.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return e.loadTextureImage(t,r.source,a)}}class zv{constructor(t){this.parser=t,this.name=Ae.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(t){const e=this.name,n=this.parser,s=n.json,r=s.textures[t];if(!r.extensions||!r.extensions[e])return null;const a=r.extensions[e],o=s.images[a.source];let c=n.textureLoader;if(o.uri){const u=n.options.manager.getHandler(o.uri);u!==null&&(c=u)}return this.detectSupport().then(function(u){if(u)return n.loadTextureImage(t,a.source,c);if(s.extensionsRequired&&s.extensionsRequired.indexOf(e)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(t)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(t){const e=new Image;e.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",e.onload=e.onerror=function(){t(e.height===1)}})),this.isSupported}}class Hv{constructor(t){this.parser=t,this.name=Ae.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(t){const e=this.name,n=this.parser,s=n.json,r=s.textures[t];if(!r.extensions||!r.extensions[e])return null;const a=r.extensions[e],o=s.images[a.source];let c=n.textureLoader;if(o.uri){const u=n.options.manager.getHandler(o.uri);u!==null&&(c=u)}return this.detectSupport().then(function(u){if(u)return n.loadTextureImage(t,a.source,c);if(s.extensionsRequired&&s.extensionsRequired.indexOf(e)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(t)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(t){const e=new Image;e.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",e.onload=e.onerror=function(){t(e.height===1)}})),this.isSupported}}class Vv{constructor(t){this.name=Ae.EXT_MESHOPT_COMPRESSION,this.parser=t}loadBufferView(t){const e=this.parser.json,n=e.bufferViews[t];if(n.extensions&&n.extensions[this.name]){const s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(e.extensionsRequired&&e.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){const c=s.byteOffset||0,u=s.byteLength||0,h=s.count,l=s.byteStride,d=new Uint8Array(o,c,u);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(h,l,d,s.mode,s.filter).then(function(f){return f.buffer}):a.ready.then(function(){const f=new ArrayBuffer(h*l);return a.decodeGltfBuffer(new Uint8Array(f),h,l,d,s.mode,s.filter),f})})}else return null}}class Wv{constructor(t){this.name=Ae.EXT_MESH_GPU_INSTANCING,this.parser=t}createNodeMesh(t){const e=this.parser.json,n=e.nodes[t];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const s=e.meshes[n.mesh];for(const u of s.primitives)if(u.mode!==Dn.TRIANGLES&&u.mode!==Dn.TRIANGLE_STRIP&&u.mode!==Dn.TRIANGLE_FAN&&u.mode!==void 0)return null;const a=n.extensions[this.name].attributes,o=[],c={};for(const u in a)o.push(this.parser.getDependency("accessor",a[u]).then(h=>(c[u]=h,c[u])));return o.length<1?null:(o.push(this.parser.createNodeMesh(t)),Promise.all(o).then(u=>{const h=u.pop(),l=h.isGroup?h.children:[h],d=u[0].count,f=[];for(const p of l){const _=new he,g=new F,m=new on,v=new F(1,1,1),y=new Jm(p.geometry,p.material,d);for(let x=0;x<d;x++)c.TRANSLATION&&g.fromBufferAttribute(c.TRANSLATION,x),c.ROTATION&&m.fromBufferAttribute(c.ROTATION,x),c.SCALE&&v.fromBufferAttribute(c.SCALE,x),y.setMatrixAt(x,_.compose(g,m,v));for(const x in c)if(x==="_COLOR_0"){const w=c[x];y.instanceColor=new uc(w.array,w.itemSize,w.normalized)}else x!=="TRANSLATION"&&x!=="ROTATION"&&x!=="SCALE"&&p.geometry.setAttribute(x,c[x]);ze.prototype.copy.call(y,p),this.parser.assignFinalMaterial(y),f.push(y)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}}const yf="glTF",er=12,wu={JSON:1313821514,BIN:5130562};class jv{constructor(t){this.name=Ae.KHR_BINARY_GLTF,this.content=null,this.body=null;const e=new DataView(t,0,er),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(t.slice(0,4))),version:e.getUint32(4,!0),length:e.getUint32(8,!0)},this.header.magic!==yf)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const s=this.header.length-er,r=new DataView(t,er);let a=0;for(;a<s;){const o=r.getUint32(a,!0);a+=4;const c=r.getUint32(a,!0);if(a+=4,c===wu.JSON){const u=new Uint8Array(t,er+a,o);this.content=n.decode(u)}else if(c===wu.BIN){const u=er+a;this.body=t.slice(u,u+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class Xv{constructor(t,e){if(!e)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Ae.KHR_DRACO_MESH_COMPRESSION,this.json=t,this.dracoLoader=e,this.dracoLoader.preload()}decodePrimitive(t,e){const n=this.json,s=this.dracoLoader,r=t.extensions[this.name].bufferView,a=t.extensions[this.name].attributes,o={},c={},u={};for(const h in a){const l=gc[h]||h.toLowerCase();o[l]=a[h]}for(const h in t.attributes){const l=gc[h]||h.toLowerCase();if(a[h]!==void 0){const d=n.accessors[t.attributes[h]],f=Is[d.componentType];u[l]=f.name,c[l]=d.normalized===!0}}return e.getDependency("bufferView",r).then(function(h){return new Promise(function(l,d){s.decodeDracoFile(h,function(f){for(const p in f.attributes){const _=f.attributes[p],g=c[p];g!==void 0&&(_.normalized=g)}l(f)},o,u,bn,d)})})}}class qv{constructor(){this.name=Ae.KHR_TEXTURE_TRANSFORM}extendTexture(t,e){return(e.texCoord===void 0||e.texCoord===t.channel)&&e.offset===void 0&&e.rotation===void 0&&e.scale===void 0||(t=t.clone(),e.texCoord!==void 0&&(t.channel=e.texCoord),e.offset!==void 0&&t.offset.fromArray(e.offset),e.rotation!==void 0&&(t.rotation=e.rotation),e.scale!==void 0&&t.repeat.fromArray(e.scale),t.needsUpdate=!0),t}}class Kv{constructor(){this.name=Ae.KHR_MESH_QUANTIZATION}}class Mf extends Ar{constructor(t,e,n,s){super(t,e,n,s)}copySampleValue_(t){const e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s*3+s;for(let a=0;a!==s;a++)e[a]=n[r+a];return e}interpolate_(t,e,n,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=o*2,u=o*3,h=s-e,l=(n-e)/h,d=l*l,f=d*l,p=t*u,_=p-u,g=-2*f+3*d,m=f-d,v=1-g,y=m-d+l;for(let x=0;x!==o;x++){const w=a[_+x+o],T=a[_+x+c]*h,R=a[p+x+o],I=a[p+x]*h;r[x]=v*w+y*T+g*R+m*I}return r}}const $v=new on;class Yv extends Mf{interpolate_(t,e,n,s){const r=super.interpolate_(t,e,n,s);return $v.fromArray(r).normalize().toArray(r),r}}const Dn={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},Is={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Ru={9728:1003,9729:1006,9984:1004,9985:1007,9986:1005,9987:1008},Cu={33071:1001,33648:1002,10497:1e3},Fo={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},gc={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},wi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Zv={CUBICSPLINE:void 0,LINEAR:2301,STEP:2300},No={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Jv(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new es({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:0})),i.DefaultMaterial}function ki(i,t,e){for(const n in e.extensions)i[n]===void 0&&(t.userData.gltfExtensions=t.userData.gltfExtensions||{},t.userData.gltfExtensions[n]=e.extensions[n])}function di(i,t){t.extras!==void 0&&(typeof t.extras=="object"?Object.assign(i.userData,t.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+t.extras))}function Qv(i,t,e){let n=!1,s=!1,r=!1;for(let u=0,h=t.length;u<h;u++){const l=t[u];if(l.POSITION!==void 0&&(n=!0),l.NORMAL!==void 0&&(s=!0),l.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);const a=[],o=[],c=[];for(let u=0,h=t.length;u<h;u++){const l=t[u];if(n){const d=l.POSITION!==void 0?e.getDependency("accessor",l.POSITION):i.attributes.position;a.push(d)}if(s){const d=l.NORMAL!==void 0?e.getDependency("accessor",l.NORMAL):i.attributes.normal;o.push(d)}if(r){const d=l.COLOR_0!==void 0?e.getDependency("accessor",l.COLOR_0):i.attributes.color;c.push(d)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c)]).then(function(u){const h=u[0],l=u[1],d=u[2];return n&&(i.morphAttributes.position=h),s&&(i.morphAttributes.normal=l),r&&(i.morphAttributes.color=d),i.morphTargetsRelative=!0,i})}function ty(i,t){if(i.updateMorphTargets(),t.weights!==void 0)for(let e=0,n=t.weights.length;e<n;e++)i.morphTargetInfluences[e]=t.weights[e];if(t.extras&&Array.isArray(t.extras.targetNames)){const e=t.extras.targetNames;if(i.morphTargetInfluences.length===e.length){i.morphTargetDictionary={};for(let n=0,s=e.length;n<s;n++)i.morphTargetDictionary[e[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function ey(i){let t;const e=i.extensions&&i.extensions[Ae.KHR_DRACO_MESH_COMPRESSION];if(e?t="draco:"+e.bufferView+":"+e.indices+":"+Uo(e.attributes):t=i.indices+":"+Uo(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)t+=":"+Uo(i.targets[n]);return t}function Uo(i){let t="";const e=Object.keys(i).sort();for(let n=0,s=e.length;n<s;n++)t+=e[n]+":"+i[e[n]]+";";return t}function _c(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function ny(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const iy=new he;class sy{constructor(t={},e={}){this.json=t,this.extensions={},this.plugins={},this.options=e,this.cache=new Tv,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,r=!1,a=-1;if(typeof navigator<"u"){const o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;const c=o.match(/Version\/(\d+)/);s=n&&c?parseInt(c[1],10):-1,r=o.indexOf("Firefox")>-1,a=r?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&s<17||r&&a<98?this.textureLoader=new pf(this.options.manager):this.textureLoader=new Tg(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new ff(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(t){this.extensions=t}setPlugins(t){this.plugins=t}parse(t,e){const n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){const o={scene:a[0][s.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:s.asset,parser:n,userData:{}};return ki(r,o,s),di(o,s),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(o)})).then(function(){for(const c of o.scenes)c.updateMatrixWorld();t(o)})}).catch(e)}_markDefs(){const t=this.json.nodes||[],e=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=e.length;s<r;s++){const a=e[s].joints;for(let o=0,c=a.length;o<c;o++)t[a[o]].isBone=!0}for(let s=0,r=t.length;s<r;s++){const a=t[s];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(t,e){e!==void 0&&(t.refs[e]===void 0&&(t.refs[e]=t.uses[e]=0),t.refs[e]++)}_getNodeRef(t,e,n){if(t.refs[e]<=1)return n;const s=n.clone(),r=(a,o)=>{const c=this.associations.get(a);c!=null&&this.associations.set(o,c);for(const[u,h]of a.children.entries())r(h,o.children[u])};return r(n,s),s.name+="_instance_"+t.uses[e]++,s}_invokeOne(t){const e=Object.values(this.plugins);e.push(this);for(let n=0;n<e.length;n++){const s=t(e[n]);if(s)return s}return null}_invokeAll(t){const e=Object.values(this.plugins);e.unshift(this);const n=[];for(let s=0;s<e.length;s++){const r=t(e[s]);r&&n.push(r)}return n}getDependency(t,e){const n=t+":"+e;let s=this.cache.get(n);if(!s){switch(t){case"scene":s=this.loadScene(e);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(e)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(e)});break;case"accessor":s=this.loadAccessor(e);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(e)});break;case"buffer":s=this.loadBuffer(e);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(e)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(e)});break;case"skin":s=this.loadSkin(e);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(e)});break;case"camera":s=this.loadCamera(e);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(t,e)}),!s)throw new Error("Unknown type: "+t);break}this.cache.add(n,s)}return s}getDependencies(t){let e=this.cache.get(t);if(!e){const n=this,s=this.json[t+(t==="mesh"?"es":"s")]||[];e=Promise.all(s.map(function(r,a){return n.getDependency(t,a)})),this.cache.add(t,e)}return e}loadBuffer(t){const e=this.json.buffers[t],n=this.fileLoader;if(e.type&&e.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+e.type+" buffer type is not supported.");if(e.uri===void 0&&t===0)return Promise.resolve(this.extensions[Ae.KHR_BINARY_GLTF].body);const s=this.options;return new Promise(function(r,a){n.load(pr.resolveURL(e.uri,s.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+e.uri+'".'))})})}loadBufferView(t){const e=this.json.bufferViews[t];return this.getDependency("buffer",e.buffer).then(function(n){const s=e.byteLength||0,r=e.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(t){const e=this,n=this.json,s=this.json.accessors[t];if(s.bufferView===void 0&&s.sparse===void 0){const a=Fo[s.type],o=Is[s.componentType],c=s.normalized===!0,u=new o(s.count*a);return Promise.resolve(new Ie(u,a,c))}const r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(a){const o=a[0],c=Fo[s.type],u=Is[s.componentType],h=u.BYTES_PER_ELEMENT,l=h*c,d=s.byteOffset||0,f=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,p=s.normalized===!0;let _,g;if(f&&f!==l){const m=Math.floor(d/f),v="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+m+":"+s.count;let y=e.cache.get(v);y||(_=new u(o,m*f,s.count*f/h),y=new Uc(_,f/h),e.cache.add(v,y)),g=new jn(y,c,d%f/h,p)}else o===null?_=new u(s.count*c):_=new u(o,d,s.count*c),g=new Ie(_,c,p);if(s.sparse!==void 0){const m=Fo.SCALAR,v=Is[s.sparse.indices.componentType],y=s.sparse.indices.byteOffset||0,x=s.sparse.values.byteOffset||0,w=new v(a[1],y,s.sparse.count*m),T=new u(a[2],x,s.sparse.count*c);o!==null&&(g=new Ie(g.array.slice(),g.itemSize,g.normalized)),g.normalized=!1;for(let R=0,I=w.length;R<I;R++){const S=w[R];if(g.setX(S,T[R*c]),c>=2&&g.setY(S,T[R*c+1]),c>=3&&g.setZ(S,T[R*c+2]),c>=4&&g.setW(S,T[R*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}g.normalized=p}return g})}loadTexture(t){const e=this.json,n=this.options,r=e.textures[t].source,a=e.images[r];let o=this.textureLoader;if(a.uri){const c=n.manager.getHandler(a.uri);c!==null&&(o=c)}return this.loadTextureImage(t,r,o)}loadTextureImage(t,e,n){const s=this,r=this.json,a=r.textures[t],o=r.images[e],c=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[c])return this.textureCache[c];const u=this.loadImageSource(e,n).then(function(h){h.flipY=!1,h.name=a.name||o.name||"",h.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(h.name=o.uri);const d=(r.samplers||{})[a.sampler]||{};return h.magFilter=Ru[d.magFilter]||1006,h.minFilter=Ru[d.minFilter]||1008,h.wrapS=Cu[d.wrapS]||1e3,h.wrapT=Cu[d.wrapT]||1e3,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==1003&&h.minFilter!==1006,s.associations.set(h,{textures:t}),h}).catch(function(){return null});return this.textureCache[c]=u,u}loadImageSource(t,e){const n=this,s=this.json,r=this.options;if(this.sourceCache[t]!==void 0)return this.sourceCache[t].then(l=>l.clone());const a=s.images[t],o=self.URL||self.webkitURL;let c=a.uri||"",u=!1;if(a.bufferView!==void 0)c=n.getDependency("bufferView",a.bufferView).then(function(l){u=!0;const d=new Blob([l],{type:a.mimeType});return c=o.createObjectURL(d),c});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+t+" is missing URI and bufferView");const h=Promise.resolve(c).then(function(l){return new Promise(function(d,f){let p=d;e.isImageBitmapLoader===!0&&(p=function(_){const g=new Ye(_);g.needsUpdate=!0,d(g)}),e.load(pr.resolveURL(l,r.path),p,void 0,f)})}).then(function(l){return u===!0&&o.revokeObjectURL(c),di(l,a),l.userData.mimeType=a.mimeType||ny(a.uri),l}).catch(function(l){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),l});return this.sourceCache[t]=h,h}assignTexture(t,e,n,s){const r=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),r.extensions[Ae.KHR_TEXTURE_TRANSFORM]){const o=n.extensions!==void 0?n.extensions[Ae.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const c=r.associations.get(a);a=r.extensions[Ae.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,c)}}return s!==void 0&&(a.colorSpace=s),t[e]=a,a})}assignFinalMaterial(t){const e=t.geometry;let n=t.material;const s=e.attributes.tangent===void 0,r=e.attributes.color!==void 0,a=e.attributes.normal===void 0;if(t.isPoints){const o="PointsMaterial:"+n.uuid;let c=this.cache.get(o);c||(c=new of,Nn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(o,c)),n=c}else if(t.isLine){const o="LineBasicMaterial:"+n.uuid;let c=this.cache.get(o);c||(c=new af,Nn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(o,c)),n=c}if(s||r||a){let o="ClonedMaterial:"+n.uuid+":";s&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let c=this.cache.get(o);c||(c=n.clone(),r&&(c.vertexColors=!0),a&&(c.flatShading=!0),s&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(o,c),this.associations.set(c,this.associations.get(n))),n=c}t.material=n}getMaterialType(){return es}loadMaterial(t){const e=this,n=this.json,s=this.extensions,r=n.materials[t];let a;const o={},c=r.extensions||{},u=[];if(c[Ae.KHR_MATERIALS_UNLIT]){const l=s[Ae.KHR_MATERIALS_UNLIT];a=l.getMaterialType(),u.push(l.extendParams(o,r,e))}else{const l=r.pbrMetallicRoughness||{};if(o.color=new ae(1,1,1),o.opacity=1,Array.isArray(l.baseColorFactor)){const d=l.baseColorFactor;o.color.setRGB(d[0],d[1],d[2],bn),o.opacity=d[3]}l.baseColorTexture!==void 0&&u.push(e.assignTexture(o,"map",l.baseColorTexture,He)),o.metalness=l.metallicFactor!==void 0?l.metallicFactor:1,o.roughness=l.roughnessFactor!==void 0?l.roughnessFactor:1,l.metallicRoughnessTexture!==void 0&&(u.push(e.assignTexture(o,"metalnessMap",l.metallicRoughnessTexture)),u.push(e.assignTexture(o,"roughnessMap",l.metallicRoughnessTexture))),a=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(t)}),u.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(t,o)})))}r.doubleSided===!0&&(o.side=2);const h=r.alphaMode||No.OPAQUE;if(h===No.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,h===No.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==tn&&(u.push(e.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new ee(1,1),r.normalTexture.scale!==void 0)){const l=r.normalTexture.scale;o.normalScale.set(l,l)}if(r.occlusionTexture!==void 0&&a!==tn&&(u.push(e.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==tn){const l=r.emissiveFactor;o.emissive=new ae().setRGB(l[0],l[1],l[2],bn)}return r.emissiveTexture!==void 0&&a!==tn&&u.push(e.assignTexture(o,"emissiveMap",r.emissiveTexture,He)),Promise.all(u).then(function(){const l=new a(o);return r.name&&(l.name=r.name),di(l,r),e.associations.set(l,{materials:t}),r.extensions&&ki(s,l,r),l})}createUniqueName(t){const e=De.sanitizeNodeName(t||"");return e in this.nodeNamesUsed?e+"_"+ ++this.nodeNamesUsed[e]:(this.nodeNamesUsed[e]=0,e)}loadGeometries(t){const e=this,n=this.extensions,s=this.primitiveCache;function r(o){return n[Ae.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,e).then(function(c){return Iu(c,o,e)})}const a=[];for(let o=0,c=t.length;o<c;o++){const u=t[o],h=ey(u),l=s[h];if(l)a.push(l.promise);else{let d;u.extensions&&u.extensions[Ae.KHR_DRACO_MESH_COMPRESSION]?d=r(u):d=Iu(new Xe,u,e),s[h]={primitive:u,promise:d},a.push(d)}}return Promise.all(a)}loadMesh(t){const e=this,n=this.json,s=this.extensions,r=n.meshes[t],a=r.primitives,o=[];for(let c=0,u=a.length;c<u;c++){const h=a[c].material===void 0?Jv(this.cache):this.getDependency("material",a[c].material);o.push(h)}return o.push(e.loadGeometries(a)),Promise.all(o).then(function(c){const u=c.slice(0,c.length-1),h=c[c.length-1],l=[];for(let f=0,p=h.length;f<p;f++){const _=h[f],g=a[f];let m;const v=u[f];if(g.mode===Dn.TRIANGLES||g.mode===Dn.TRIANGLE_STRIP||g.mode===Dn.TRIANGLE_FAN||g.mode===void 0)m=r.isSkinnedMesh===!0?new $m(_,v):new Re(_,v),m.isSkinnedMesh===!0&&m.normalizeSkinWeights(),g.mode===Dn.TRIANGLE_STRIP?m.geometry=Tu(m.geometry,1):g.mode===Dn.TRIANGLE_FAN&&(m.geometry=Tu(m.geometry,2));else if(g.mode===Dn.LINES)m=new eg(_,v);else if(g.mode===Dn.LINE_STRIP)m=new Bc(_,v);else if(g.mode===Dn.LINE_LOOP)m=new ng(_,v);else if(g.mode===Dn.POINTS)m=new ig(_,v);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+g.mode);Object.keys(m.geometry.morphAttributes).length>0&&ty(m,r),m.name=e.createUniqueName(r.name||"mesh_"+t),di(m,r),g.extensions&&ki(s,m,g),e.assignFinalMaterial(m),l.push(m)}for(let f=0,p=l.length;f<p;f++)e.associations.set(l[f],{meshes:t,primitives:f});if(l.length===1)return r.extensions&&ki(s,l[0],r),l[0];const d=new _n;r.extensions&&ki(s,d,r),e.associations.set(d,{meshes:t});for(let f=0,p=l.length;f<p;f++)d.add(l[f]);return d})}loadCamera(t){let e;const n=this.json.cameras[t],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?e=new gn(Wd.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(e=new Wc(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(e.name=this.createUniqueName(n.name)),di(e,n),Promise.resolve(e)}loadSkin(t){const e=this.json.skins[t],n=[];for(let s=0,r=e.joints.length;s<r;s++)n.push(this._loadNodeShallow(e.joints[s]));return e.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",e.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){const r=s.pop(),a=s,o=[],c=[];for(let u=0,h=a.length;u<h;u++){const l=a[u];if(l){o.push(l);const d=new he;r!==null&&d.fromArray(r.array,u*16),c.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',e.joints[u])}return new Oc(o,c)})}loadAnimation(t){const e=this.json,n=this,s=e.animations[t],r=s.name?s.name:"animation_"+t,a=[],o=[],c=[],u=[],h=[];for(let l=0,d=s.channels.length;l<d;l++){const f=s.channels[l],p=s.samplers[f.sampler],_=f.target,g=_.node,m=s.parameters!==void 0?s.parameters[p.input]:p.input,v=s.parameters!==void 0?s.parameters[p.output]:p.output;_.node!==void 0&&(a.push(this.getDependency("node",g)),o.push(this.getDependency("accessor",m)),c.push(this.getDependency("accessor",v)),u.push(p),h.push(_))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c),Promise.all(u),Promise.all(h)]).then(function(l){const d=l[0],f=l[1],p=l[2],_=l[3],g=l[4],m=[];for(let v=0,y=d.length;v<y;v++){const x=d[v],w=f[v],T=p[v],R=_[v],I=g[v];if(x===void 0)continue;x.updateMatrix&&x.updateMatrix();const S=n._createAnimationTracks(x,w,T,R,I);if(S)for(let A=0;A<S.length;A++)m.push(S[A])}return new fc(r,void 0,m)})}createNodeMesh(t){const e=this.json,n=this,s=e.nodes[t];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){const a=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let c=0,u=s.weights.length;c<u;c++)o.morphTargetInfluences[c]=s.weights[c]}),a})}loadNode(t){const e=this.json,n=this,s=e.nodes[t],r=n._loadNodeShallow(t),a=[],o=s.children||[];for(let u=0,h=o.length;u<h;u++)a.push(n.getDependency("node",o[u]));const c=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(a),c]).then(function(u){const h=u[0],l=u[1],d=u[2];d!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(d,iy)});for(let f=0,p=l.length;f<p;f++)h.add(l[f]);return h})}_loadNodeShallow(t){const e=this.json,n=this.extensions,s=this;if(this.nodeCache[t]!==void 0)return this.nodeCache[t];const r=e.nodes[t],a=r.name?s.createUniqueName(r.name):"",o=[],c=s._invokeOne(function(u){return u.createNodeMesh&&u.createNodeMesh(t)});return c&&o.push(c),r.camera!==void 0&&o.push(s.getDependency("camera",r.camera).then(function(u){return s._getNodeRef(s.cameraCache,r.camera,u)})),s._invokeAll(function(u){return u.createNodeAttachment&&u.createNodeAttachment(t)}).forEach(function(u){o.push(u)}),this.nodeCache[t]=Promise.all(o).then(function(u){let h;if(r.isBone===!0?h=new sf:u.length>1?h=new _n:u.length===1?h=u[0]:h=new ze,h!==u[0])for(let l=0,d=u.length;l<d;l++)h.add(u[l]);if(r.name&&(h.userData.name=r.name,h.name=a),di(h,r),r.extensions&&ki(n,h,r),r.matrix!==void 0){const l=new he;l.fromArray(r.matrix),h.applyMatrix4(l)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);return s.associations.has(h)||s.associations.set(h,{}),s.associations.get(h).nodes=t,h}),this.nodeCache[t]}loadScene(t){const e=this.extensions,n=this.json.scenes[t],s=this,r=new _n;n.name&&(r.name=s.createUniqueName(n.name)),di(r,n),n.extensions&&ki(e,r,n);const a=n.nodes||[],o=[];for(let c=0,u=a.length;c<u;c++)o.push(s.getDependency("node",a[c]));return Promise.all(o).then(function(c){for(let h=0,l=c.length;h<l;h++)r.add(c[h]);const u=h=>{const l=new Map;for(const[d,f]of s.associations)(d instanceof Nn||d instanceof Ye)&&l.set(d,f);return h.traverse(d=>{const f=s.associations.get(d);f!=null&&l.set(d,f)}),l};return s.associations=u(r),r})}_createAnimationTracks(t,e,n,s,r){const a=[],o=t.name?t.name:t.uuid,c=[];wi[r.path]===wi.weights?t.traverse(function(d){d.morphTargetInfluences&&c.push(d.name?d.name:d.uuid)}):c.push(o);let u;switch(wi[r.path]){case wi.weights:u=Ds;break;case wi.rotation:u=Fs;break;case wi.position:case wi.scale:u=Ns;break;default:switch(n.itemSize){case 1:u=Ds;break;case 2:case 3:default:u=Ns;break}break}const h=s.interpolation!==void 0?Zv[s.interpolation]:2301,l=this._getArrayFromAccessor(n);for(let d=0,f=c.length;d<f;d++){const p=new u(c[d]+"."+wi[r.path],e.array,l,h);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(p),a.push(p)}return a}_getArrayFromAccessor(t){let e=t.array;if(t.normalized){const n=_c(e.constructor),s=new Float32Array(e.length);for(let r=0,a=e.length;r<a;r++)s[r]=e[r]*n;e=s}return e}_createCubicSplineTrackInterpolant(t){t.createInterpolant=function(n){const s=this instanceof Fs?Yv:Mf;return new s(this.times,this.values,this.getValueSize()/3,n)},t.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function ry(i,t,e){const n=t.attributes,s=new dn;if(n.POSITION!==void 0){const o=e.json.accessors[n.POSITION],c=o.min,u=o.max;if(c!==void 0&&u!==void 0){if(s.set(new F(c[0],c[1],c[2]),new F(u[0],u[1],u[2])),o.normalized){const h=_c(Is[o.componentType]);s.min.multiplyScalar(h),s.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=t.targets;if(r!==void 0){const o=new F,c=new F;for(let u=0,h=r.length;u<h;u++){const l=r[u];if(l.POSITION!==void 0){const d=e.json.accessors[l.POSITION],f=d.min,p=d.max;if(f!==void 0&&p!==void 0){if(c.setX(Math.max(Math.abs(f[0]),Math.abs(p[0]))),c.setY(Math.max(Math.abs(f[1]),Math.abs(p[1]))),c.setZ(Math.max(Math.abs(f[2]),Math.abs(p[2]))),d.normalized){const _=_c(Is[d.componentType]);c.multiplyScalar(_)}o.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(o)}i.boundingBox=s;const a=new On;s.getCenter(a.center),a.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=a}function Iu(i,t,e){const n=t.attributes,s=[];function r(a,o){return e.getDependency("accessor",a).then(function(c){i.setAttribute(o,c)})}for(const a in n){const o=gc[a]||a.toLowerCase();o in i.attributes||s.push(r(n[a],o))}if(t.indices!==void 0&&!i.index){const a=e.getDependency("accessor",t.indices).then(function(o){i.setIndex(o)});s.push(a)}return Ce.workingColorSpace!==bn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Ce.workingColorSpace}" not supported.`),di(i,t),ry(i,t,e),Promise.all(s).then(function(){return t.targets!==void 0?Qv(i,t.targets,e):i})}var ay=(function(){var i="b9H79Tebbbe8Fv9Gbb9Gvuuuuueu9Giuuub9Geueu9Giuuueuikqbeeedddillviebeoweuec:q;iekr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbeY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVbdE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbiL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtblK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbol79IV9Rbrq:P8Yqdbk;3sezu8Jjjjjbcj;eb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Radz1jjjbhwcj;abad9UhoaicefhldnadTmbaoc;WFbGgocjdaocjd6EhDcbhqinaqae9pmeaDaeaq9RaqaDfae6Egkcsfgocl4cifcd4hxdndndndnaoc9WGgmTmbcbhPcehsawcjdfhzalhHinaraH9Rax6midnaraHaxfgl9RcK6mbczhoinawcj;cbfaogifgoc9WfhOdndndndndnaHaic9WfgAco4fRbbaAci4coG4ciGPlbedibkaO9cb83ibaOcwf9cb83ibxikaOalRblalRbbgAco4gCaCciSgCE86bbaocGfalclfaCfgORbbaAcl4ciGgCaCciSgCE86bbaocVfaOaCfgORbbaAcd4ciGgCaCciSgCE86bbaoc7faOaCfgORbbaAciGgAaAciSgAE86bbaoctfaOaAfgARbbalRbegOco4gCaCciSgCE86bbaoc91faAaCfgARbbaOcl4ciGgCaCciSgCE86bbaoc4faAaCfgARbbaOcd4ciGgCaCciSgCE86bbaoc93faAaCfgARbbaOciGgOaOciSgOE86bbaoc94faAaOfgARbbalRbdgOco4gCaCciSgCE86bbaoc95faAaCfgARbbaOcl4ciGgCaCciSgCE86bbaoc96faAaCfgARbbaOcd4ciGgCaCciSgCE86bbaoc97faAaCfgARbbaOciGgOaOciSgOE86bbaoc98faAaOfgORbbalRbiglco4gAaAciSgAE86bbaoc99faOaAfgORbbalcl4ciGgAaAciSgAE86bbaoc9:faOaAfgORbbalcd4ciGgAaAciSgAE86bbaocufaOaAfgoRbbalciGglalciSglE86bbaoalfhlxdkaOalRbwalRbbgAcl4gCaCcsSgCE86bbaocGfalcwfaCfgORbbaAcsGgAaAcsSgAE86bbaocVfaOaAfgORbbalRbegAcl4gCaCcsSgCE86bbaoc7faOaCfgORbbaAcsGgAaAcsSgAE86bbaoctfaOaAfgORbbalRbdgAcl4gCaCcsSgCE86bbaoc91faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc4faOaAfgORbbalRbigAcl4gCaCcsSgCE86bbaoc93faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc94faOaAfgORbbalRblgAcl4gCaCcsSgCE86bbaoc95faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc96faOaAfgORbbalRbvgAcl4gCaCcsSgCE86bbaoc97faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc98faOaAfgORbbalRbogAcl4gCaCcsSgCE86bbaoc99faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc9:faOaAfgORbbalRbrglcl4gAaAcsSgAE86bbaocufaOaAfgoRbbalcsGglalcsSglE86bbaoalfhlxekaOal8Pbb83bbaOcwfalcwf8Pbb83bbalczfhlkdnaiam9pmbaiczfhoaral9RcL0mekkaiam6mialTmidnakTmbawaPfRbbhOcbhoazhiinaiawcj;cbfaofRbbgAce4cbaAceG9R7aOfgO86bbaiadfhiaocefgoak9hmbkkazcefhzaPcefgPad6hsalhHaPad9hmexvkkcbhlasceGmdxikalaxad2fhCdnakTmbcbhHcehsawcjdfhminaral9Rax6mialTmdalaxfhlawaHfRbbhOcbhoamhiinaiawcj;cbfaofRbbgAce4cbaAceG9R7aOfgO86bbaiadfhiaocefgoak9hmbkamcefhmaHcefgHad6hsaHad9hmbkaChlxikcbhocehsinaral9Rax6mdalTmealaxfhlaocefgoad6hsadao9hmbkaChlxdkcbhlasceGTmekc9:hoxikabaqad2fawcjdfakad2z1jjjb8Aawawcjdfakcufad2fadz1jjjb8Aakaqfhqalmbkc9:hoxekcbc99aral9Radcaadca0ESEhokavcj;ebf8Kjjjjbaok;yzeHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecjez:jjjjb8AavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhodnaeTmbcmcsaDceSEhkcbhxcbhmcbhDcbhicbhlindnaoaq9nmbc9:hoxikdndnawRbbgrc;Ve0mbavc;abfalarcl4cu7fcsGcitfgPydlhsaPydbhzdnarcsGgPak9pmbavaiarcu7fcsGcdtfydbaxaPEhraPThPdndnadcd9hmbabaDcetfgHaz87ebaHcdfas87ebaHclfar87ebxekabaDcdtfgHazBdbaHclfasBdbaHcwfarBdbkaxaPfhxavc;abfalcitfgHarBdbaHasBdlavaicdtfarBdbavc;abfalcefcsGglcitfgHazBdbaHarBdlaiaPfhialcefhlxdkdndnaPcsSmbamaPfaPc987fcefhmxekaocefhrao8SbbgPcFeGhHdndnaPcu9mmbarhoxekaocvfhoaHcFbGhHcrhPdninar8SbbgOcFbGaPtaHVhHaOcu9kmearcefhraPcrfgPc8J9hmbxdkkarcefhokaHce4cbaHceG9R7amfhmkdndnadcd9hmbabaDcetfgraz87ebarcdfas87ebarclfam87ebxekabaDcdtfgrazBdbarclfasBdbarcwfamBdbkavc;abfalcitfgramBdbarasBdlavaicdtfamBdbavc;abfalcefcsGglcitfgrazBdbaramBdlaicefhialcefhlxekdnarcpe0mbaxcefgOavaiaqarcsGfRbbgPcl49RcsGcdtfydbaPcz6gHEhravaiaP9RcsGcdtfydbaOaHfgsaPcsGgOEhPaOThOdndnadcd9hmbabaDcetfgzax87ebazcdfar87ebazclfaP87ebxekabaDcdtfgzaxBdbazclfarBdbazcwfaPBdbkavaicdtfaxBdbavc;abfalcitfgzarBdbazaxBdlavaicefgicsGcdtfarBdbavc;abfalcefcsGcitfgzaPBdbazarBdlavaiaHfcsGgicdtfaPBdbavc;abfalcdfcsGglcitfgraxBdbaraPBdlalcefhlaiaOfhiasaOfhxxekaxcbaoRbbgzEgAarc;:eSgrfhsazcsGhCazcl4hXdndnazcs0mbascefhOxekashOavaiaX9RcsGcdtfydbhskdndnaCmbaOcefhxxekaOhxavaiaz9RcsGcdtfydbhOkdndnarTmbaocefhrxekaocdfhrao8SbegHcFeGhPdnaHcu9kmbaocofhAaPcFbGhPcrhodninar8SbbgHcFbGaotaPVhPaHcu9kmearcefhraocrfgoc8J9hmbkaAhrxekarcefhrkaPce4cbaPceG9R7amfgmhAkdndnaXcsSmbarhPxekarcefhPar8SbbgocFeGhHdnaocu9kmbarcvfhsaHcFbGhHcrhodninaP8SbbgrcFbGaotaHVhHarcu9kmeaPcefhPaocrfgoc8J9hmbkashPxekaPcefhPkaHce4cbaHceG9R7amfgmhskdndnaCcsSmbaPhoxekaPcefhoaP8SbbgrcFeGhHdnarcu9kmbaPcvfhOaHcFbGhHcrhrdninao8SbbgPcFbGartaHVhHaPcu9kmeaocefhoarcrfgrc8J9hmbkaOhoxekaocefhokaHce4cbaHceG9R7amfgmhOkdndnadcd9hmbabaDcetfgraA87ebarcdfas87ebarclfaO87ebxekabaDcdtfgraABdbarclfasBdbarcwfaOBdbkavc;abfalcitfgrasBdbaraABdlavaicdtfaABdbavc;abfalcefcsGcitfgraOBdbarasBdlavaicefgicsGcdtfasBdbavc;abfalcdfcsGcitfgraABdbaraOBdlavaiazcz6aXcsSVfgicsGcdtfaOBdbaiaCTaCcsSVfhialcifhlkawcefhwalcsGhlaicsGhiaDcifgDae6mbkkcbc99aoaqSEhokavc;aef8Kjjjjbaok:llevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:Lvoeue99dud99eud99dndnadcl9hmbaeTmeindndnabcdfgd8Sbb:Yab8Sbbgi:Ygl:l:tabcefgv8Sbbgo:Ygr:l:tgwJbb;:9cawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai86bbdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad86bbdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad86bbabclfhbaecufgembxdkkaeTmbindndnabclfgd8Ueb:Yab8Uebgi:Ygl:l:tabcdfgv8Uebgo:Ygr:l:tgwJb;:FSawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai87ebdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad87ebdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad87ebabcwfhbaecufgembkkk;siliui99iue99dnaeTmbcbhiabhlindndnJ;Zl81Zalcof8UebgvciV:Y:vgoal8Ueb:YNgrJb;:FSNJbbbZJbbb:;arJbbbb9GEMgw:lJbbb9p9DTmbaw:OhDxekcjjjj94hDkalclf8Uebhqalcdf8UebhkabavcefciGaiVcetfaD87ebdndnaoak:YNgwJb;:FSNJbbbZJbbb:;awJbbbb9GEMgx:lJbbb9p9DTmbax:Ohkxekcjjjj94hkkabavcdfciGaiVcetfak87ebdndnaoaq:YNgoJb;:FSNJbbbZJbbb:;aoJbbbb9GEMgx:lJbbb9p9DTmbax:Ohqxekcjjjj94hqkabavcufciGaiVcetfaq87ebdndnJbbjZararN:tawawN:taoaoN:tgrJbbbbarJbbbb9GE:rJb;:FSNJbbbZMgr:lJbbb9p9DTmbar:Ohqxekcjjjj94hqkabavciGaiVcetfaq87ebalcwfhlaiclfhiaecufgembkkk9mbdnadcd4ae2geTmbinababydbgdcwtcw91:Yadce91cjjj;8ifcjjj98G::NUdbabclfhbaecufgembkkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik;LeeeudndnaeabVciGTmbabhixekdndnadcz9pmbabhixekabhiinaiaeydbBdbaiclfaeclfydbBdbaicwfaecwfydbBdbaicxfaecxfydbBdbaiczfhiaeczfheadc9Wfgdcs0mbkkadcl6mbinaiaeydbBdbaeclfheaiclfhiadc98fgdci0mbkkdnadTmbinaiaeRbb86bbaicefhiaecefheadcufgdmbkkabk;aeedudndnabciGTmbabhixekaecFeGc:b:c:ew2hldndnadcz9pmbabhixekabhiinaialBdbaicxfalBdbaicwfalBdbaiclfalBdbaiczfhiadc9Wfgdcs0mbkkadcl6mbinaialBdbaiclfhiadc98fgdci0mbkkdnadTmbinaiae86bbaicefhiadcufgdmbkkabkkkebcjwklz9Kbb",t="b9H79TebbbeKl9Gbb9Gvuuuuueu9Giuuub9Geueuikqbbebeedddilve9Weeeviebeoweuec:q;Aekr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbdY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVblE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtboK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbrL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbwl79IV9RbDq;t9tqlbzik9:evu8Jjjjjbcz9Rhbcbheincbhdcbhiinabcwfadfaicjuaead4ceGglE86bbaialfhiadcefgdcw9hmbkaec:q:yjjbfai86bbaecitc:q1jjbfab8Piw83ibaecefgecjd9hmbkk;h8JlHud97euo978Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Rad;8qbbcj;abad9UhoaicefhldnadTmbaoc;WFbGgocjdaocjd6EhwcbhDinaDae9pmeawaeaD9RaDawfae6Egqcsfgoc9WGgkci2hxakcethmaocl4cifcd4hPabaDad2fhscbhzdnincehHalhOcbhAdninaraO9RaP6miavcj;cbfaAak2fhCaOaPfhlcbhidnakc;ab6mbaral9Rc;Gb6mbcbhoinaCaofhidndndndndnaOaoco4fRbbgXciGPlbedibkaipxbbbbbbbbbbbbbbbbpklbxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklbalczfhlkdndndndndnaXcd4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklzxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklzalczfhlkdndndndndnaXcl4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklaxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklaalczfhlkdndndndndnaXco4Plbedibkaipxbbbbbbbbbbbbbbbbpkl8WxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WalclfaYpQbfaXc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WalcwfaYpQbfaXc:q:yjjbfRbbfhlxekaialpbbbpkl8Walczfhlkaoc;abfhiaocjefak0meaihoaral9Rc;Fb0mbkkdndnaiak9pmbaici4hoinaral9RcK6mdaCaifhXdndndndndnaOaico4fRbbaocoG4ciGPlbedibkaXpxbbbbbbbbbbbbbbbbpklbxikaXalpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaXalpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaXalpbbbpklbalczfhlkaocdfhoaiczfgiak6mbkkalTmbaAci6hHalhOaAcefgohAaoclSmdxekkcbhlaHceGmdkdnakTmbavcjdfazfhiavazfpbdbhYcbhXinaiavcj;cbfaXfgopblbgLcep9TaLpxeeeeeeeeeeeeeeeegQp9op9Hp9rgLaoakfpblbg8Acep9Ta8AaQp9op9Hp9rg8ApmbzeHdOiAlCvXoQrLgEaoamfpblbg3cep9Ta3aQp9op9Hp9rg3aoaxfpblbg5cep9Ta5aQp9op9Hp9rg5pmbzeHdOiAlCvXoQrLg8EpmbezHdiOAlvCXorQLgQaQpmbedibedibedibediaYp9UgYp9AdbbaiadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaEa8EpmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaLa8ApmwKDYq8AkEx3m5P8Es8FgLa3a5pmwKDYq8AkEx3m5P8Es8Fg8ApmbezHdiOAlvCXorQLgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaLa8ApmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfhiaXczfgXak6mbkkazclfgzad6mbkasavcjdfaqad2;8qbbavavcjdfaqcufad2fad;8qbbaqaDfhDc9:hoalmexikkc9:hoxekcbc99aral9Radcaadca0ESEhokavcj;kbf8Kjjjjbaokwbz:bjjjbk;uzeHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecje;8kbavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhodnaeTmbcmcsaDceSEhkcbhxcbhmcbhDcbhicbhlindnaoaq9nmbc9:hoxikdndnawRbbgrc;Ve0mbavc;abfalarcl4cu7fcsGcitfgPydlhsaPydbhzdnarcsGgPak9pmbavaiarcu7fcsGcdtfydbaxaPEhraPThPdndnadcd9hmbabaDcetfgHaz87ebaHcdfas87ebaHclfar87ebxekabaDcdtfgHazBdbaHclfasBdbaHcwfarBdbkaxaPfhxavc;abfalcitfgHarBdbaHasBdlavaicdtfarBdbavc;abfalcefcsGglcitfgHazBdbaHarBdlaiaPfhialcefhlxdkdndnaPcsSmbamaPfaPc987fcefhmxekaocefhrao8SbbgPcFeGhHdndnaPcu9mmbarhoxekaocvfhoaHcFbGhHcrhPdninar8SbbgOcFbGaPtaHVhHaOcu9kmearcefhraPcrfgPc8J9hmbxdkkarcefhokaHce4cbaHceG9R7amfhmkdndnadcd9hmbabaDcetfgraz87ebarcdfas87ebarclfam87ebxekabaDcdtfgrazBdbarclfasBdbarcwfamBdbkavc;abfalcitfgramBdbarasBdlavaicdtfamBdbavc;abfalcefcsGglcitfgrazBdbaramBdlaicefhialcefhlxekdnarcpe0mbaxcefgOavaiaqarcsGfRbbgPcl49RcsGcdtfydbaPcz6gHEhravaiaP9RcsGcdtfydbaOaHfgsaPcsGgOEhPaOThOdndnadcd9hmbabaDcetfgzax87ebazcdfar87ebazclfaP87ebxekabaDcdtfgzaxBdbazclfarBdbazcwfaPBdbkavaicdtfaxBdbavc;abfalcitfgzarBdbazaxBdlavaicefgicsGcdtfarBdbavc;abfalcefcsGcitfgzaPBdbazarBdlavaiaHfcsGgicdtfaPBdbavc;abfalcdfcsGglcitfgraxBdbaraPBdlalcefhlaiaOfhiasaOfhxxekaxcbaoRbbgzEgAarc;:eSgrfhsazcsGhCazcl4hXdndnazcs0mbascefhOxekashOavaiaX9RcsGcdtfydbhskdndnaCmbaOcefhxxekaOhxavaiaz9RcsGcdtfydbhOkdndnarTmbaocefhrxekaocdfhrao8SbegHcFeGhPdnaHcu9kmbaocofhAaPcFbGhPcrhodninar8SbbgHcFbGaotaPVhPaHcu9kmearcefhraocrfgoc8J9hmbkaAhrxekarcefhrkaPce4cbaPceG9R7amfgmhAkdndnaXcsSmbarhPxekarcefhPar8SbbgocFeGhHdnaocu9kmbarcvfhsaHcFbGhHcrhodninaP8SbbgrcFbGaotaHVhHarcu9kmeaPcefhPaocrfgoc8J9hmbkashPxekaPcefhPkaHce4cbaHceG9R7amfgmhskdndnaCcsSmbaPhoxekaPcefhoaP8SbbgrcFeGhHdnarcu9kmbaPcvfhOaHcFbGhHcrhrdninao8SbbgPcFbGartaHVhHaPcu9kmeaocefhoarcrfgrc8J9hmbkaOhoxekaocefhokaHce4cbaHceG9R7amfgmhOkdndnadcd9hmbabaDcetfgraA87ebarcdfas87ebarclfaO87ebxekabaDcdtfgraABdbarclfasBdbarcwfaOBdbkavc;abfalcitfgrasBdbaraABdlavaicdtfaABdbavc;abfalcefcsGcitfgraOBdbarasBdlavaicefgicsGcdtfasBdbavc;abfalcdfcsGcitfgraABdbaraOBdlavaiazcz6aXcsSVfgicsGcdtfaOBdbaiaCTaCcsSVfhialcifhlkawcefhwalcsGhlaicsGhiaDcifgDae6mbkkcbc99aoaqSEhokavc;aef8Kjjjjbaok:llevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:EPliuo97eue978Jjjjjbca9Rhidndnadcl9hmbdnaec98GglTmbcbhvabhdinadadpbbbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDpxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpkbbadczfhdavclfgval6mbkkalae9pmeaiaeciGgvcdtgdVcbczad9R;8kbaiabalcdtfglad;8qbbdnavTmbaiaipblbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDpxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpklbkalaiad;8qbbskdnaec98GgxTmbcbhvabhdinadczfglalpbbbgopxbbbbbbFFbbbbbbFFgkp9oadpbbbgDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eaDaopmbediwDqkzHOAKY8AEgoczp:Sep;6egrp;Geaoczp:Reczp:Sep;6egwp;Gep;Kep;Legopxb;:FSb;:FSb;:FSb;:FSawaopxbbbbbbbbbbbbbbbbp:2egqawpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegwawp;Meaoaop;Mearaqaramp9op9rp;Kegoaop;Mep;Kep;Kep;Jep;Negrp;Mepxbbn0bbn0bbn0bbn0gqp;Keczp:Reawarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9op9qgwaoarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogopmwDKYqk8AExm35Ps8E8Fp9qpkbbadaDakp9oawaopmbezHdiOAlvCXorQLp9qpkbbadcafhdavclfgvax6mbkkaxae9pmbaiaeciGgvcitgdfcbcaad9R;8kbaiabaxcitfglad;8qbbdnavTmbaiaipblzgopxbbbbbbFFbbbbbbFFgkp9oaipblbgDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eaDaopmbediwDqkzHOAKY8AEgoczp:Sep;6egrp;Geaoczp:Reczp:Sep;6egwp;Gep;Kep;Legopxb;:FSb;:FSb;:FSb;:FSawaopxbbbbbbbbbbbbbbbbp:2egqawpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegwawp;Meaoaop;Mearaqaramp9op9rp;Kegoaop;Mep;Kep;Kep;Jep;Negrp;Mepxbbn0bbn0bbn0bbn0gqp;Keczp:Reawarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9op9qgwaoarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogopmwDKYqk8AExm35Ps8E8Fp9qpklzaiaDakp9oawaopmbezHdiOAlvCXorQLp9qpklbkalaiad;8qbbkk;4wllue97euv978Jjjjjbc8W9Rhidnaec98GglTmbcbhvabhoinaiaopbbbgraoczfgwpbbbgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklbaopxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaqakp;Mearp;Keczp:ReaDakp;Mearp;Keamp9op9qgkpmbezHdiOAlvCXorQLgrp5baipblbpEb:T:j83ibaocwfarp5eaipblbpEe:T:j83ibawaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblbpEd:T:j83ibaocKfakp5eaipblbpEi:T:j83ibaocafhoavclfgval6mbkkdnalae9pmbaiaeciGgvcitgofcbcaao9R;8kbaiabalcitfgwao;8qbbdnavTmbaiaipblbgraipblzgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklaaipxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaqakp;Mearp;Keczp:ReaDakp;Mearp;Keamp9op9qgkpmbezHdiOAlvCXorQLgrp5baipblapEb:T:j83ibaiarp5eaipblapEe:T:j83iwaiaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblapEd:T:j83izaiakp5eaipblapEi:T:j83iKkawaiao;8qbbkk:Pddiue978Jjjjjbc;ab9Rhidnadcd4ae2glc98GgvTmbcbhdabheinaeaepbbbgocwp:Recwp:Sep;6eaocep:SepxbbjZbbjZbbjZbbjZp:UepxbbjFbbjFbbjFbbjFp9op;Mepkbbaeczfheadclfgdav6mbkkdnaval9pmbaialciGgdcdtgeVcbc;abae9R;8kbaiabavcdtfgvae;8qbbdnadTmbaiaipblbgocwp:Recwp:Sep;6eaocep:SepxbbjZbbjZbbjZbbjZp:UepxbbjFbbjFbbjFbbjFp9op;Mepklbkavaiae;8qbbkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaikkkebcjwklz9Tbb",e=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,3,2,0,0,5,3,1,0,1,12,1,0,10,22,2,12,0,65,0,65,0,65,0,252,10,0,0,11,7,0,65,0,253,15,26,11]),n=new Uint8Array([32,0,65,2,1,106,34,33,3,128,11,4,13,64,6,253,10,7,15,116,127,5,8,12,40,16,19,54,20,9,27,255,113,17,42,67,24,23,146,148,18,14,22,45,70,69,56,114,101,21,25,63,75,136,108,28,118,29,73,115]);if(typeof WebAssembly!="object")return{supported:!1};var s=WebAssembly.validate(e)?t:i,r,a=WebAssembly.instantiate(o(s),{}).then(function(m){r=m.instance,r.exports.__wasm_call_ctors()});function o(m){for(var v=new Uint8Array(m.length),y=0;y<m.length;++y){var x=m.charCodeAt(y);v[y]=x>96?x-97:x>64?x-39:x+4}for(var w=0,y=0;y<m.length;++y)v[w++]=v[y]<60?n[v[y]]:(v[y]-60)*64+v[++y];return v.buffer.slice(0,w)}function c(m,v,y,x,w,T){var R=r.exports.sbrk,I=y+3&-4,S=R(I*x),A=R(w.length),C=new Uint8Array(r.exports.memory.buffer);C.set(w,A);var N=m(S,y,x,A,w.length);if(N==0&&T&&T(S,I,x),v.set(C.subarray(S,S+y*x)),R(S-R(0)),N!=0)throw new Error("Malformed buffer data: "+N)}var u={NONE:"",OCTAHEDRAL:"meshopt_decodeFilterOct",QUATERNION:"meshopt_decodeFilterQuat",EXPONENTIAL:"meshopt_decodeFilterExp"},h={ATTRIBUTES:"meshopt_decodeVertexBuffer",TRIANGLES:"meshopt_decodeIndexBuffer",INDICES:"meshopt_decodeIndexSequence"},l=[],d=0;function f(m){var v={object:new Worker(m),pending:0,requests:{}};return v.object.onmessage=function(y){var x=y.data;v.pending-=x.count,v.requests[x.id][x.action](x.value),delete v.requests[x.id]},v}function p(m){for(var v="var instance; var ready = WebAssembly.instantiate(new Uint8Array(["+new Uint8Array(o(s))+"]), {}).then(function(result) { instance = result.instance; instance.exports.__wasm_call_ctors(); });self.onmessage = workerProcess;"+c.toString()+g.toString(),y=new Blob([v],{type:"text/javascript"}),x=URL.createObjectURL(y),w=0;w<m;++w)l[w]=f(x);URL.revokeObjectURL(x)}function _(m,v,y,x,w){for(var T=l[0],R=1;R<l.length;++R)l[R].pending<T.pending&&(T=l[R]);return new Promise(function(I,S){var A=new Uint8Array(y),C=d++;T.pending+=m,T.requests[C]={resolve:I,reject:S},T.object.postMessage({id:C,count:m,size:v,source:A,mode:x,filter:w},[A.buffer])})}function g(m){a.then(function(){var v=m.data;try{var y=new Uint8Array(v.count*v.size);c(r.exports[v.mode],y,v.count,v.size,v.source,r.exports[v.filter]),self.postMessage({id:v.id,count:v.count,action:"resolve",value:y},[y.buffer])}catch(x){self.postMessage({id:v.id,count:v.count,action:"reject",value:x})}})}return{ready:a,supported:!0,useWorkers:function(m){p(m)},decodeVertexBuffer:function(m,v,y,x,w){c(r.exports.meshopt_decodeVertexBuffer,m,v,y,x,r.exports[u[w]])},decodeIndexBuffer:function(m,v,y,x){c(r.exports.meshopt_decodeIndexBuffer,m,v,y,x)},decodeIndexSequence:function(m,v,y,x){c(r.exports.meshopt_decodeIndexSequence,m,v,y,x)},decodeGltfBuffer:function(m,v,y,x,w,T){c(r.exports[h[w]],m,v,y,x,r.exports[u[T]])},decodeGltfBufferAsync:function(m,v,y,x,w){return l.length>0?_(m,v,y,h[x],u[w]):a.then(function(){var T=new Uint8Array(m*v);return c(r.exports[h[x]],T,m,v,y,r.exports[u[w]]),T})}}})();function Kc(){return new Ev().setMeshoptDecoder(ay)}let oy="";const xi=i=>`${oy}${i}`,cy=.001,ly=.5,Pu={playing:!1,settling:!1,stillFor:0,pending:1},Sf=i=>i.playing||i.settling||i.pending>0,uy=i=>!i.playing&&!i.settling,hy=i=>({...i,playing:!0,settling:!1,stillFor:0,pending:0}),dy=i=>i.playing?{...i,playing:!1,settling:!0,stillFor:0}:i,fy=i=>Sf(i)?i:{...i,pending:1};function py(i,t,e){const n=Math.max(0,i.pending-1);if(!i.settling)return{...i,pending:n};const s=t<cy?i.stillFor+e:0;return{...i,pending:n,stillFor:s,settling:s<ly}}function Lu(i,t,e){return i&&i.clientWidth>0&&i.clientHeight>0?{width:i.clientWidth,height:i.clientHeight}:e||(t.innerWidth>0&&t.innerHeight>0?{width:t.innerWidth,height:t.innerHeight}:{width:1280,height:720})}const Ji="#c8f323",my="#0b0f10";function gy(i){const t=parseInt(i.slice(1),16);return[t>>16&255,t>>8&255,t&255]}const _y=gy(Ji),by=Ji,xy="#7aa2ff",vy="#ffb340",yy="#b18cff",My=Ji,Sy=Ji,nr=new F;function Pn(i,t,e,n,s,r){const a=2*Math.PI*s/4,o=Math.max(r-2*s,0),c=Math.PI/4;nr.copy(t),nr[n]=0,nr.normalize();const u=.5*a/(a+o),h=1-nr.angleTo(i)/c;return Math.sign(nr[e])===1?h*u:o/(a+o)+u+u*(1-h)}class Ay extends _i{constructor(t=1,e=1,n=1,s=2,r=.1){if(s=s*2+1,r=Math.min(t/2,e/2,n/2,r),super(1,1,1,s,s,s),s===1)return;const a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;const o=new F,c=new F,u=new F(t,e,n).divideScalar(2).subScalar(r),h=this.attributes.position.array,l=this.attributes.normal.array,d=this.attributes.uv.array,f=h.length/6,p=new F,_=.5/s;for(let g=0,m=0;g<h.length;g+=3,m+=2)switch(o.fromArray(h,g),c.copy(o),c.x-=Math.sign(c.x)*_,c.y-=Math.sign(c.y)*_,c.z-=Math.sign(c.z)*_,c.normalize(),h[g+0]=u.x*Math.sign(o.x)+c.x*r,h[g+1]=u.y*Math.sign(o.y)+c.y*r,h[g+2]=u.z*Math.sign(o.z)+c.z*r,l[g+0]=c.x,l[g+1]=c.y,l[g+2]=c.z,Math.floor(g/f)){case 0:p.set(1,0,0),d[m+0]=Pn(p,c,"z","y",r,n),d[m+1]=1-Pn(p,c,"y","z",r,e);break;case 1:p.set(-1,0,0),d[m+0]=1-Pn(p,c,"z","y",r,n),d[m+1]=1-Pn(p,c,"y","z",r,e);break;case 2:p.set(0,1,0),d[m+0]=1-Pn(p,c,"x","z",r,t),d[m+1]=Pn(p,c,"z","x",r,n);break;case 3:p.set(0,-1,0),d[m+0]=1-Pn(p,c,"x","z",r,t),d[m+1]=1-Pn(p,c,"z","x",r,n);break;case 4:p.set(0,0,1),d[m+0]=1-Pn(p,c,"x","y",r,t),d[m+1]=1-Pn(p,c,"y","x",r,e);break;case 5:p.set(0,0,-1),d[m+0]=Pn(p,c,"x","y",r,t),d[m+1]=1-Pn(p,c,"y","x",r,e);break}}}const Du=["technical","tactical","physical","social"],Fu=["auto","authored","off"],Af=/\bwall\b/i,Nu=["n","e","s","w"],Ey={n:0,e:Math.PI/2,s:Math.PI,w:-Math.PI/2},Uu=1.8,Ou=7.32,Ty=6;function ns(i,t){return i.width!==void 0&&i.width<Ty?i.width/2:t}function Ef(i){return Math.min(Math.max(i*.5,1),2.44)}const ku=["save","beaten"],sa=["throw","roll","kick"],ra=["throw","roll"],Bu=["lofted","ground"],wy=3.35,Ry=1,Gu=12,bc=["walk","jog","run","sprint"],zu=["walk","jog","run"];function Na(i){if(i.ball)return i.ball.start;if(!i.players.length)return[0,0];let t=0,e=0;for(const n of i.players)t+=n.start[0],e+=n.start[1];return[t/i.players.length,e/i.players.length]}const Cy=new Set(["move","dribble","pass","shoot","tackle","collect"]),Hu=/^#[0-9a-fA-F]{6}$/;function qt(i,t){throw new Error(`DrillScene3D ${i}: ${t}`)}function hi(i,t){return(!Array.isArray(i)||i.length!==2||i.some(e=>typeof e!="number"))&&qt(t,"expected [x, y] numbers"),i}function Iy(i){var a,o,c,u,h;const t=i;t.version!==1&&qt("version","must be 1"),((a=t.pitch)==null?void 0:a.width)>0&&((o=t.pitch)==null?void 0:o.length)>0||qt("pitch","width/length > 0 required"),(typeof t.duration!="number"||t.duration<=0)&&qt("duration","seconds > 0 required"),(typeof t.teams!="object"||t.teams===null||Array.isArray(t.teams))&&qt("teams","expected an object of team -> { kit }");const e=new Set(Object.keys(t.teams));e.size||qt("teams","at least one team");for(const l of e){const d=(u=(c=t.teams[l])==null?void 0:c.kit)==null?void 0:u.primary;(typeof d!="string"||!Hu.test(d))&&qt(`teams.${l}.kit.primary`,"expected a hex colour, e.g. #1B4FD8")}Array.isArray(t.players)||qt("players","expected an array");const n=new Set,s=new Set;t.players.forEach((l,d)=>{(!l.id||n.has(l.id))&&qt(`players[${d}].id`,"missing or duplicate"),n.add(l.id),e.has(l.team)||qt(`players[${d}].team`,`unknown team ${l.team}`),hi(l.start,`players[${d}].start`),l.role!==void 0&&l.role!=="keeper"&&qt(`players[${d}].role`,`expected "keeper" or absent, got ${String(l.role)}`),l.role==="keeper"&&s.add(l.id)}),t.ball!==void 0&&(hi((h=t.ball)==null?void 0:h.start,"ball.start"),t.ball.static!==void 0&&typeof t.ball.static!="boolean"&&qt("ball.static","expected a boolean or absent")),t.balls!==void 0&&(Array.isArray(t.balls)||qt("balls","expected an array"),t.balls.forEach((l,d)=>{(typeof l!="object"||l===null||Array.isArray(l))&&qt(`balls[${d}]`,"expected { carrier?, path }"),l.carrier!==void 0&&typeof l.carrier!="string"&&qt(`balls[${d}].carrier`,`expected a player id or absent, got ${String(l.carrier)}`),(!Array.isArray(l.path)||!l.path.length)&&qt(`balls[${d}].path`,"expected at least one { t, at }"),l.path.forEach((f,p)=>{(typeof(f==null?void 0:f.t)!="number"||f.t<0)&&qt(`balls[${d}].path[${p}].t`,"seconds >= 0 required"),p>0&&f.t<=l.path[p-1].t&&qt(`balls[${d}].path[${p}].t`,"times must ascend"),hi(f.at,`balls[${d}].path[${p}].at`)})})),(t.equipment??[]).forEach((l,d)=>{l.type!=="cone"&&l.type!=="goal"&&qt(`equipment[${d}].type`,String(l.type)),hi(l.at,`equipment[${d}].at`),l.width!==void 0&&(l.type!=="goal"&&qt(`equipment[${d}].width`,"only a goal has a mouth width"),typeof l.width=="number"&&l.width>=Uu-1e-9&&l.width<=Ou+1e-9||qt(`equipment[${d}].width`,`expected ${Uu}..${Ou} m, got ${String(l.width)}`)),l.facing!==void 0&&(l.type!=="goal"&&qt(`equipment[${d}].facing`,"only a goal has a facing"),Nu.includes(l.facing)||qt(`equipment[${d}].facing`,`expected one of ${Nu.join("|")}, got ${String(l.facing)}`))});const r=(l,d)=>{n.has(l)||qt(d,`unknown player ${l}`)};if((t.balls??[]).forEach((l,d)=>{l.carrier!==void 0&&r(l.carrier,`balls[${d}].carrier`)}),Array.isArray(t.events)||qt("events","expected an array"),t.events.forEach((l,d)=>{var f;if((typeof l.t!="number"||l.t<0)&&qt(`events[${d}].t`,"seconds >= 0 required"),Cy.has(l.type)||qt(`events[${d}].type`,`unknown type ${l.type}`),l.type==="move"&&(r(l.player,`events[${d}].player`),hi(l.to,`events[${d}].to`),l.gait!==void 0&&!bc.includes(l.gait)&&qt(`events[${d}].gait`,`expected one of ${bc.join("|")}, got ${String(l.gait)}`)),l.type==="dribble"&&(r(l.player,`events[${d}].player`),hi(l.to,`events[${d}].to`),l.gait!==void 0&&!zu.includes(l.gait)&&qt(`events[${d}].gait`,`expected one of ${zu.join("|")}, got ${String(l.gait)}`)),(l.type==="move"||l.type==="dribble")&&l.runPath!==void 0&&typeof l.runPath!="boolean"&&qt(`events[${d}].runPath`,`expected a boolean, got ${String(l.runPath)}`),l.type==="pass"){if(r(l.from,`events[${d}].from`),r(l.to,`events[${d}].to`),l.flightStyle!==void 0&&!["ground","clipped","lofted"].includes(l.flightStyle)&&qt(`events[${d}].flightStyle`,`expected "ground", "clipped" or "lofted", got ${String(l.flightStyle)}`),l.loft!==void 0&&!(typeof l.loft=="number"&&l.loft>0)&&qt(`events[${d}].loft`,"expected a number > 0 (metres)"),l.style!==void 0&&(sa.includes(l.style)||qt(`events[${d}].style`,`expected one of ${sa.join("|")}, got ${String(l.style)}`),!s.has(l.from)&&!ra.includes(l.style)&&qt(`events[${d}].style`,`"${l.style}" is keeper-only; ${l.from} is not a keeper (anyone may ${ra.join(" or ")})`)),l.toFeet!==void 0&&(typeof l.toFeet!="boolean"&&qt(`events[${d}].toFeet`,`expected a boolean, got ${String(l.toFeet)}`),s.has(l.to)||qt(`events[${d}].toFeet`,`toFeet is keeper-only; ${l.to} is not a keeper`),l.toFeet&&l.flightStyle!==void 0&&l.flightStyle!=="ground")){let p=[...((f=t.players.find(_=>_.id===l.to))==null?void 0:f.start)??[0,0]];for(let _=0;_<d;_++){const g=t.events[_];(g.type==="move"||g.type==="dribble")&&g.player===l.to&&(p=[...g.to])}for(const _ of t.equipment??[]){if(_.type!=="goal")continue;const g=Math.hypot(p[0]-_.at[0],p[1]-_.at[1]);g<Gu&&qt(`events[${d}].toFeet`,`a ${l.flightStyle} ball is taken in the hands unless he is sweeping outside his area; ${l.to} meets it ${g.toFixed(1)} m from the goal at [${_.at[0]}, ${_.at[1]}] (needs ${Gu} m)`)}}l.fromFeet!==void 0&&(typeof l.fromFeet!="boolean"&&qt(`events[${d}].fromFeet`,`expected a boolean, got ${String(l.fromFeet)}`),s.has(l.from)||qt(`events[${d}].fromFeet`,`fromFeet is keeper-only; ${l.from} is not a keeper`),l.fromFeet&&t.events.some((p,_)=>_<d&&p.type!=="move")&&qt(`events[${d}].fromFeet`,"fromFeet is the opener's flag; this is not the drill's first ball action"))}if((l.type==="pass"||l.type==="shoot")&&l.deflect!==void 0){const p=l.deflect;(typeof p!="object"||p===null||Array.isArray(p))&&qt(`events[${d}].deflect`,"expected { to: [x, y], style: lofted | ground }"),hi(p.to,`events[${d}].deflect.to`),Bu.includes(p.style)||qt(`events[${d}].deflect.style`,`expected one of ${Bu.join("|")}, got ${String(p.style)}`),l.type==="pass"&&!s.has(l.to)&&qt(`events[${d}].deflect`,`deflections are keeper-only; ${l.to} is not a keeper`),l.type==="shoot"&&!(l.flightStyle==="ground"&&p.style==="ground")&&!s.size&&qt(`events[${d}].deflect`,"a deflected shot is a keeper's parry; this drill has no keeper");for(const _ of t.equipment??[]){if(_.type!=="goal")continue;const m=_.facing==="e"||_.facing==="w"?p.to[1]-_.at[1]:p.to[0]-_.at[0];if(Math.abs(m)>ns(_,wy))continue;(_.facing!==void 0?{n:p.to[1]-_.at[1],s:_.at[1]-p.to[1],e:p.to[0]-_.at[0],w:_.at[0]-p.to[0]}[_.facing]:_.at[1]<=t.pitch.length/2?p.to[1]-_.at[1]:_.at[1]-p.to[1])<=Ry&&qt(`events[${d}].deflect.to`,`[${p.to[0]}, ${p.to[1]}] is inside the goal mouth at [${_.at[0]}, ${_.at[1]}] — a punch or a parry puts the ball out, never back into the net`)}}if(l.type==="tackle"&&(r(l.player,`events[${d}].player`),r(l.from,`events[${d}].from`),l.from===l.player&&qt(`events[${d}].from`,"a player cannot tackle himself"),l.style!==void 0&&l.style!=="poke"&&l.style!=="slide"&&qt(`events[${d}].style`,`expected "poke" or "slide", got ${String(l.style)}`)),l.type==="collect"&&r(l.player,`events[${d}].player`),l.type==="shoot"&&(r(l.player,`events[${d}].player`),hi(l.at,`events[${d}].at`),l.flight!==void 0&&!(typeof l.flight=="number"&&l.flight>0)&&qt(`events[${d}].flight`,"expected seconds > 0, or absent (engine derives from distance)"),l.corner!==void 0&&l.corner!=="left"&&l.corner!=="right"&&qt(`events[${d}].corner`,`expected "left" or "right" (as seen by the shooter), got ${String(l.corner)}`),l.flightStyle!==void 0&&l.flightStyle!=="ground"&&qt(`events[${d}].flightStyle`,`expected "ground" or absent on a shoot, got ${String(l.flightStyle)}`),l.touch!==void 0&&(typeof l.touch!="boolean"&&qt(`events[${d}].touch`,`expected a boolean, got ${String(l.touch)}`),l.touch&&l.flightStyle!=="ground"&&qt(`events[${d}].touch`,'a touch is a ground ball; it needs flightStyle "ground"')),l.style!==void 0&&(sa.includes(l.style)||qt(`events[${d}].style`,`expected one of ${sa.join("|")}, got ${String(l.style)}`),!s.has(l.player)&&!ra.includes(l.style)&&qt(`events[${d}].style`,`"${l.style}" is keeper-only; ${l.player} is not a keeper (anyone may ${ra.join(" or ")})`),l.flightStyle!=="ground"&&qt(`events[${d}].style`,"a distribution to a point needs a ground flight"))),(l.type==="pass"||l.type==="shoot")&&l.header!==void 0&&typeof l.header!="boolean"&&qt(`events[${d}].header`,`expected a boolean, got ${String(l.header)}`),(l.type==="pass"||l.type==="shoot")&&l.deadBall!==void 0&&typeof l.deadBall!="boolean"&&qt(`events[${d}].deadBall`,`expected a boolean, got ${String(l.deadBall)}`),(l.type==="pass"||l.type==="shoot")&&l.firstTime!==void 0&&typeof l.firstTime!="boolean"&&qt(`events[${d}].firstTime`,`expected a boolean, got ${String(l.firstTime)}`),l.type==="pass"||l.type==="shoot"||l.type==="dribble"){const p=l.newBall;p!==void 0&&(typeof p!="boolean"&&qt(`events[${d}].newBall`,`expected a boolean, got ${String(p)}`),p&&!t.events.some((_,g)=>g<d&&_.type!=="move")&&qt(`events[${d}].newBall`,"newBall swaps the live ball for a spare; this is the drill's first ball action, so there is nothing to swap"))}}),t.overlays!==void 0){const l=t.overlays;(typeof l!="object"||l===null||Array.isArray(l))&&qt("overlays","expected an object"),l.runPaths!==void 0&&!Fu.includes(l.runPaths)&&qt("overlays.runPaths",`expected one of ${Fu.join("|")}, got ${String(l.runPaths)}`),l.zones!==void 0&&(Array.isArray(l.zones)||qt("overlays.zones","expected an array"),l.zones.forEach((d,f)=>{hi(d.at,`overlays.zones[${f}].at`),typeof d.w=="number"&&d.w>0&&typeof d.h=="number"&&d.h>0||qt(`overlays.zones[${f}]`,"w/h metres > 0 required"),d.color!==void 0&&!Du.includes(d.color)&&!Hu.test(d.color)&&qt(`overlays.zones[${f}].color`,`expected ${Du.join("|")} or a hex colour, got ${String(d.color)}`),d.label!==void 0&&typeof d.label!="string"&&qt(`overlays.zones[${f}].label`,"expected a string")}))}return t.keeper!==void 0&&((typeof t.keeper!="object"||t.keeper===null||Array.isArray(t.keeper))&&qt("keeper","expected { outcome: save | beaten }"),ku.includes(t.keeper.outcome)||qt("keeper.outcome",`expected one of ${ku.join("|")}, got ${String(t.keeper.outcome)}`)),t}function Py(i){const t=new es({color:My,roughness:.6,toneMapped:!1}),e=new _n,n=new Re(new Ay(.42,.09,.42,4,.035),t);n.position.y=.045;const s=[new ee(.17,.06),new ee(.15,.1)];for(let a=0;a<=8;a++)s.push(new ee(.15-.11*a/8,.1+.31*a/8));for(let a=1;a<=4;a++){const o=a/4*(Math.PI/2);s.push(new ee(.04*Math.cos(o),.41+.04*Math.sin(o)))}const r=new Re(new Gc(s,24),t);return e.add(n,r),e.traverse(a=>{a.isMesh&&(a.castShadow=!0)}),e.scale.setScalar(i),e}function Tf(i,t,e,n,s,r){let a=r;const o=()=>(a=a*1103515245+12345&2147483647)/2147483647,c=e/n,u=5*c;for(let h=Math.floor(s/5)*5;h<s+n;h+=5){const l=(h-s)*c,d=i.createLinearGradient(0,l,0,l+u);(Math.floor(h/5)%2+2)%2===0?(d.addColorStop(0,"#0f563c"),d.addColorStop(1,"#0d4e35")):(d.addColorStop(0,"#094027"),d.addColorStop(1,"#0b432b")),i.fillStyle=d,i.fillRect(0,l,t,u+1)}for(let h=0;h<20;h++){const l=(h%5+.15+o()*.7)*(t/5),d=(Math.floor(h/5)+.15+o()*.7)*(e/4),f=(40+o()*120)*(t/1024),p=o()>.5,_=i.createRadialGradient(l,d,0,l,d,f);_.addColorStop(0,p?"rgba(130,140,60,0.078)":"rgba(8,30,12,0.09)"),_.addColorStop(1,"rgba(0,0,0,0)"),i.fillStyle=_,i.fillRect(l-f,d-f,2*f,2*f)}wf(i,t,e,o,1)}function wf(i,t,e,n,s){const r=o=>(o*s).toFixed(3),a=t*e/1048576;for(let o=0;o<6400*a;o++){const c=n()>.5;i.fillStyle=c?`rgba(175,220,185,${r(.05)})`:`rgba(0,16,4,${r(.07)})`,i.fillRect(n()*t,n()*e,6+n()*22,1)}for(let o=0;o<9600*a;o++){const c=n()>.5;i.fillStyle=c?`rgba(180,220,190,${r(.04)})`:`rgba(0,12,3,${r(.05)})`,i.fillRect(n()*t,n()*e,2+n()*5,1)}}function Ly(i,t){const e=document.createElement("canvas");e.width=1024,e.height=1024;const n=e.getContext("2d");Tf(n,1024,1024,t,0,7),n.strokeStyle="rgba(255,255,255,0.8)",n.lineWidth=5,n.strokeRect(10,10,1004,1004),Rf(n);const s=new Cn(e);return s.colorSpace=He,s.flipY=!1,s}function Rf(i,t=1,e=1,n=.12){i.save(),i.translate(512,512),i.scale(t,e);const s=i.createRadialGradient(0,0,480,0,0,760);s.addColorStop(0,"rgba(0,0,0,0)"),s.addColorStop(1,`rgba(0,0,0,${n})`),i.fillStyle=s,i.fillRect(-2048,-2048,4096,4096),i.restore()}const Dy=2.5;function Cf(i,t,e,n,s,r){i.beginPath(),i.moveTo(t+r,e),i.arcTo(t+n,e,t+n,e+s,r),i.arcTo(t+n,e+s,t,e+s,r),i.arcTo(t,e+s,t,e,r),i.arcTo(t,e,t+n,e,r),i.closePath()}const an=6;function Fy(i,t,e){const n=document.createElement("canvas");n.width=1024,n.height=1024;const s=n.getContext("2d");Tf(s,1024,1024,t+2*e,-e,7),s.fillStyle="rgba(0,0,0,0.12)",s.fillRect(0,0,1024,1024),Rf(s,i/(i+2*e),t/(t+2*e));const r=e/(i+2*e)*1024,a=e/(t+2*e)*1024,o=[[0,0,r,0],[1024,0,1024-r,0],[0,0,0,a],[0,1024,0,1024-a]];for(const[h,l,d,f]of o){const p=s.createLinearGradient(h,l,d,f);p.addColorStop(0,"rgba(0,0,0,0.55)"),p.addColorStop(1,"rgba(0,0,0,0)"),s.fillStyle=p,s.fillRect(0,0,1024,1024)}const c=Dy*2/(i+t+4*e)*1024;s.globalCompositeOperation="destination-in",s.fillStyle="#fff",Cf(s,1,1,1022,1022,c),s.fill(),s.globalCompositeOperation="source-over";const u=new Cn(n);return u.colorSpace=He,u.flipY=!1,u}function Ny(){const i=document.createElement("canvas");i.width=i.height=256;const t=i.getContext("2d");t.filter="blur(14px)",t.fillStyle="rgba(0,0,0,0.9)",Cf(t,40,40,176,176,34),t.fill();const e=new Cn(i);return e.flipY=!1,e}let ir=null;function Uy(){if(ir)return ir;const i=document.createElement("canvas");i.width=i.height=128;const t=i.getContext("2d"),e=t.createRadialGradient(64,64,0,64,64,64);return e.addColorStop(0,"rgba(0,0,0,0.9)"),e.addColorStop(.6,"rgba(0,0,0,0.55)"),e.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=e,t.fillRect(0,0,128,128),ir=new Cn(i),ir.userData.shared=!0,ir}function Oy(i){const t=new Re(new zc(i/2,24).rotateX(-Math.PI/2),new tn({map:Uy(),transparent:!0,opacity:.55,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1}));return t.position.y=.005,t.renderOrder=1,t}const Xn={halfW:3.348,top:2.5,zMin:-1.4688,zMax:.0576},ky=.5;function xr(i,t){const e=new Map;for(const s of i.equipment??[]){if(s.type!=="goal")continue;const r=s.facing==="e"||s.facing==="w",a=r?`x${s.at[0]}`:`z${s.at[1]}`,o=e.get(a)??{avail:r?i.pitch.length:i.pitch.width,widths:[]};o.widths.push(2*ns(s,Xn.halfW)),e.set(a,o)}if(!e.size)return t;let n=t;for(const{avail:s,widths:r}of e.values()){const a=r.reduce((o,c)=>o+c,0);n=Math.min(n,s/(a+(r.length-1)*ky*(a/r.length)))}return n}function By(i){const t=ns(i,Xn.halfW);return t===Xn.halfW?Xn:{halfW:t,top:Ef(i.width),zMin:-Ci,zMax:Ci}}function If(i,t){return i.facing!==void 0?Ey[i.facing]:i.at[1]>t/2?Math.PI:0}const Ci=.08;function Gy(i){const t=Ef(i),e=new es({color:"#FFFFFF",roughness:.5}),n=new _n,s=i/2-Ci;for(const a of[-1,1]){const o=new Re(new Fa(Ci,Ci,t,12),e);o.position.set(a*s,t/2,0),n.add(o)}const r=new Re(new Fa(Ci,Ci,2*s,12),e);return r.rotation.z=Math.PI/2,r.position.y=t-Ci,n.add(r),e.userData.drillOwned=!0,n.traverse(a=>{const o=a;o.isMesh&&(o.castShadow=!0,o.geometry.userData.drillOwned=!0)}),n}const Pf=.8;function zy(i,t,e){const n=new Re(new _i(e?i:t,Pf,e?t:i),new es({color:"#FFFFFF",roughness:.55}));return n.castShadow=!0,n.receiveShadow=!0,n}function Lf(i,t){i.scale.set(1,t,1),i.position.y=Pf*t/2}let Vu=null;function Hy(i){return Vu??(Vu=i.loadAsync(xi("assets/goal.glb")).then(t=>t.scene).catch(t=>{throw Vu=null,t}))}let Wu=!1;function Vy(i,t){if(Wu||!t)return;Wu=!0;const e=new dn().setFromObject(i),n=Math.max(Math.abs(e.max.x-i.position.x),Math.abs(e.min.x-i.position.x))/t,s=(e.max.y-i.position.y)/t;(Math.abs(n-Xn.halfW)>.05||Math.abs(s-Xn.top)>.05)&&console.warn(`[engine3d] goal.glb no longer matches GOAL_BOX (half-width ${n.toFixed(3)} vs ${Xn.halfW}, top ${s.toFixed(3)} vs ${Xn.top}) — the camera fit and tools/look/corpus_check.ts size the goal from those numbers; update scene/pitch.ts`)}function Wy(i){const{width:t,length:e}=i.pitch;return[[-1,-1],[1,-1],[1,1],[-1,1]].map(([n,s])=>new F(n*(t/2+an),0,s*(e/2+an)))}function xc(i,t){const{width:e,length:n}=i.pitch,s=xr(i,t),r=[];for(const a of i.equipment??[]){if(a.type!=="goal")continue;const o=a.at[0]-e/2,c=a.at[1]-n/2,u=By(a),h=If(a,n),l=Math.cos(h),d=Math.sin(h);for(const f of[-u.halfW*s,u.halfW*s])for(const p of[0,u.top*s])for(const _ of[u.zMin*s,u.zMax*s])r.push(new F(o+f*l+_*d,p,c-f*d+_*l))}return r}const jy=600,Df=jy/2*Math.SQRT2,ju=30,Xy=-.06,qy=-.04,Ky=660496,$y="#04170c",Xu=.7,Ff=1.2;function Yy(i,t,e){const n=Math.max(t,e),s=n/2+an,r=Ff*n;return r>s?1-(1-Xu)*$c((i-s)/(r-s)):i>=s?Xu:1}function $c(i){const t=Math.min(Math.max(i,0),1);return t*t*(3-2*t)}const Zy=1.6,Jy=2.6;function Qy(i,t){const e=Math.max(i,t);return{near:Zy*e+an,far:Jy*e+an}}const qu="#0b1f22",Oo="#010203",tM=1.02;function eM(i,t){return Math.hypot(i/2+an,t/2+an)*tM}const nM=.12,iM=1.15,Yc=(i,t)=>Math.hypot(i/2,t/2),Nf=(i,t)=>Yc(i,t)*iM,aa=12,ko=18,Ku=.3,sM=2.4,$u=1.2,rM=.4,aM=6;function oM(i,t,e=1/0){const n=i/2+an,s=t/2+an,r=t>=i?"z":"x",a=r==="z"?n:s,o=r==="z"?s:n,c=cM(a,o,e*lM),u=[-(o+c),o+c],h=-(a+c),l=u.map(d=>r==="z"?[h,d]:[d,h]);return{axis:r,masts:l}}function cM(i,t,e){if(!(e<Math.hypot(i+aa,t+aa)))return aa;const n=i+t,s=i*i+t*t-e*e,r=n*n-2*s;return r>0?Math.max(0,Math.min(aa,(-n+Math.sqrt(r))/2)):0}const lM=.97;function Zc(){const i=document.createElement("canvas");i.width=i.height=512;const t=i.getContext("2d");t.fillStyle=$y,t.fillRect(0,0,512,512);let e=7;wf(t,512,512,()=>(e=e*1103515245+12345&2147483647)/2147483647,.25);const n=new Cn(i);return n.colorSpace=He,n.wrapS=n.wrapT=1e3,n}function uM(){const i=new _n,t=new br({color:1251867}),e=new Re(new _i(Ku,ko,Ku),t);e.position.y=ko/2;const n=new Re(new _i(sM,$u,rM),t);n.position.y=ko+$u/2;const s=new qm(new ef({map:hM(),color:16772564,opacity:.18,blending:2,depthWrite:!1,transparent:!0,fog:!1,toneMapped:!1}));return s.scale.setScalar(aM),s.position.y=n.position.y,s.geometry.userData.shared=!0,i.add(e,n,s),i}let sr=null;function hM(){if(sr)return sr;const i=document.createElement("canvas");i.width=i.height=128;const t=i.getContext("2d"),e=t.createRadialGradient(64,64,0,64,64,64);return e.addColorStop(0,"rgba(255,237,212,1)"),e.addColorStop(.35,"rgba(255,237,212,0.45)"),e.addColorStop(1,"rgba(255,237,212,0)"),t.fillStyle=e,t.fillRect(0,0,128,128),sr=new Cn(i),sr.userData.shared=!0,sr}function dM(){return[[0,Oo],[yc,qu],[mM,qu],[Jc,Oo],[1,Oo]]}function fM(){const i=document.createElement("canvas");i.width=4,i.height=256;const t=i.getContext("2d"),e=t.createLinearGradient(0,0,0,256);for(const[s,r]of dM())e.addColorStop(Math.min(1,Math.max(0,1-s)),r);t.fillStyle=e,t.fillRect(0,0,4,256);const n=new Cn(i);return n.colorSpace=He,n.wrapS=n.wrapT=1001,n}const vc=.03,Yu=.06,pM=.28,Jc=1,yc=Jc*Yu/(Yu+pM-vc),mM=.85;function gM(i,t={repeat:0,offset:0}){const e=Math.max(i,vc+.03);return t.repeat=(Jc-yc)/(e-vc),t.offset=yc-t.repeat*(1-e),t}const _M=60,bM=i=>Math.asin(Math.min(Math.max(-i,-1),1))*180/Math.PI<_M,xM=-1e3;function Uf(i,t,e,n,s,r){const a=new br({map:e,vertexColors:!0}),o=new br({map:e,vertexColors:!0,transparent:!0,depthWrite:!1}),c=Ff*Math.max(i,t),u=n>c?[[0,c,96],[c,n,8]]:[[0,n,96]];s>n&&u.push([n,s,16]);const h=[];for(const[l,d,f]of u){const p=l===n,_=new Wa(l,d,128,f).rotateX(-Math.PI/2),g=_.getAttribute("position"),m=_.getAttribute("uv"),v=p?4:3,y=new Float32Array(g.count*v);for(let w=0;w<g.count;w++){const T=g.getX(w),R=g.getZ(w);m.setXY(w,T/ju,R/ju);const I=Math.hypot(T,R),S=Yy(I,i,t);y[v*w]=y[v*w+1]=y[v*w+2]=S,p&&(y[v*w+3]=d>l?1-$c((I-l)/(d-l)):1)}m.needsUpdate=!0,_.setAttribute("color",new Ie(y,v));const x=new Re(_,p?o:a);x.userData[r]=p,x.position.y=Xy,h.push(x)}return h}function vM(i,t,e=1,n=Zc()){const s=new _n;n.anisotropy=e;for(const r of Uf(i,t,n,Yc(i,t),Nf(i,t),"floatRim"))s.add(r);return s}const Bo=16;function yM(i,t,e){const n=document.createElement("canvas");n.width=n.height=512;const s=n.getContext("2d");s.fillStyle="#000",s.fillRect(0,0,512,512);const r=512/(i+2*e),a=512/(t+2*e),o=Yc(i,t),c=Nf(i,t);s.save(),s.translate(256,256),s.scale(1,a/r);const u=s.createRadialGradient(0,0,o*r,0,0,c*r);for(let l=0;l<=Bo;l++){const d=Math.round(255*(1-$c(l/Bo)));u.addColorStop(l/Bo,`rgb(${d},${d},${d})`)}s.fillStyle=u,s.fillRect(-4096,-4096,8192,8192),s.restore();const h=new Cn(n);return h.flipY=!1,h}function MM(i,t,e=1,n=Df,s=Zc()){const r=new _n;s.anisotropy=e;const a=Math.max(n,Math.max(i,t)/2+an+1),o=a*(1-nM),c=Math.max(o,Math.max(i,t)/2+an);for(const h of Uf(i,t,s,c,a,"rimFade"))r.add(h);const{masts:u}=oM(i,t,a);for(const[h,l]of u){const d=uM();d.name="mast",d.position.set(h,0,l),r.add(d)}return r}async function SM(i,t,e=1,n=1,s=Df){var A;const r=xr(t,n),{width:a,length:o}=t.pitch,c=(C,N=0)=>new F(C[0]-a/2,N,C[1]-o/2),u=C=>(C.anisotropy=e,C),h=u(Fy(a,o,an)),l=()=>new Kn(a+2*an,o+2*an).rotateX(-Math.PI/2),d=new Re(l(),new br({map:h,transparent:!0})),f=new Re(l(),new br({map:h,alphaMap:yM(a,o,an),transparent:!0}));for(const C of[d,f])C.position.y=-.02,C.renderOrder=-1,C.receiveShadow=!0;const p=new Re(new Kn((a+2*an)*1.5,(o+2*an)*1.5).rotateX(-Math.PI/2),new tn({map:Ny(),transparent:!0,depthWrite:!1}));p.position.y=qy,p.renderOrder=-2,i.add(p);const _=new Re(new Kn(a,o).rotateX(-Math.PI/2),new es({map:u(Ly(a,o)),roughness:.9}));_.receiveShadow=!0;const g=Zc(),m=MM(a,o,e,s,g),v=vM(a,o,e,g);i.add(d,f,_,m,v);const y=C=>{m.visible=C,p.visible=C,d.visible=C,v.visible=!C,f.visible=!C};y(!0);const x=m.children.filter(C=>C.name==="mast"),w=C=>{for(const N of x)N.visible=C};w(!1);const T=Kc(),R=[],I=[];for(const C of t.equipment??[])if(C.type==="cone"){const N=Py(n);N.position.copy(c(C.at,0)),i.add(N),I.push(N)}else{const N=ns(C,Xn.halfW)!==Xn.halfW,k=N?Gy(C.width):(await Hy(T)).clone();k.position.copy(c(C.at)),k.rotation.y=If(C,o),k.scale.setScalar(r),i.add(k),R.push(k),N||Vy(k,r)}const S=[];for(const C of((A=t.overlays)==null?void 0:A.zones)??[]){if(!Af.test(C.label??""))continue;const N=zy(Math.max(C.w,C.h),Math.min(C.w,C.h),C.w>=C.h),k=c(C.at);N.position.set(k.x,0,k.z),Lf(N,n),i.add(N),S.push(N)}return{toWorld:c,goals:R,cones:I,boards:S,setWorld:y,setMasts:w}}const Zu=new F(10,20,8).normalize(),AM=1.05,Mc=2048,EM=1024,TM=1600,wM=(i,t)=>Math.max(i,t)>=TM?Mc:EM,RM=5;function CM(i){const t=new dn().setFromPoints(i).getCenter(new F);let e=0;for(const r of i)e=Math.max(e,r.distanceTo(t));const n=Math.max(e*1.15,8),s=n*2;return{centre:t,radius:n,distance:s,far:s+n}}function IM(i,t=()=>new Av({antialias:!0})){const e=t();e.setPixelRatio(Math.min(devicePixelRatio,2));let s=Lu(i,window);const r=new Set;e.setSize(s.width,s.height,!1);const a=e.domElement;a.style.width="100%",a.style.height="100%",a.style.display="block",e.shadowMap.enabled=!0,e.shadowMap.type=2,e.toneMapping=4,e.toneMappingExposure=AM,e.outputColorSpace=He,i.appendChild(a);const o=new Xm;o.background=new ae(my);const c=new gn(45,s.width/s.height,1,1e3);c.position.set(8,6,12),c.lookAt(0,1,0);const u=new mf(16772564,RM);u.position.copy(Zu).multiplyScalar(40),u.castShadow=!0,u.shadow.mapSize.set(Mc,Mc),u.shadow.radius=4,o.add(u,u.target,new xg(12571874,2902572,.9));let h=Math.min(devicePixelRatio,2);function l(){var bt;const Z=wM(s.width*h,s.height*h);u.shadow.mapSize.width!==Z&&(u.shadow.mapSize.set(Z,Z),(bt=u.shadow.map)==null||bt.dispose(),u.shadow.map=null)}l();function d(){const Z=Lu(i,window,s),bt=Math.min(devicePixelRatio,2),Gt=bt!==h;if(Gt&&(h=bt,e.setPixelRatio(h)),Z.width!==s.width||Z.height!==s.height){s=Z,l(),c.aspect=s.width/s.height,c.updateProjectionMatrix(),e.setSize(s.width,s.height,!1),A();for(const te of[...r])te()}else Gt&&(e.setSize(s.width,s.height,!1),l(),A())}const f=typeof ResizeObserver=="function"?new ResizeObserver(d):null;f?f.observe(i):addEventListener("resize",d);let p=null;const _=()=>{g(),d()};function g(){p==null||p.removeEventListener("change",_),p=typeof matchMedia=="function"?matchMedia(`(resolution: ${devicePixelRatio}dppx)`):null,p==null||p.addEventListener("change",_)}g();let m=!0,v=!1,y=0;function x(){v||(v=!0,y=requestAnimationFrame(O))}function w(){m=!document.hidden,m&&(N=-1,x())}document.addEventListener("visibilitychange",w);let T=!0,R=Pu,I=0;const S=new F;function A(){R=fy(R),m&&(v||(N=-1),x())}let C=()=>{},N=-1,k=null,H=null,Q=null,V=!0;function j(Z,bt){if(C(Z,bt),ot(),k&&o.fog){const Gt=c.position.length();o.fog.near=Gt+k.near,o.fog.far=Gt+k.far}e.render(o,c),I++}function O(Z){if(v=!1,!m)return;const bt=N<0?0:(Z-N)/1e3;N=Z,S.copy(c.position),j(bt,Z),R=py(R,S.distanceTo(c.position),bt),T||Sf(R)?x():N=-1}function nt(Z){if(!Z.length)return;const{centre:bt,radius:Gt,distance:te,far:fe}=CM(Z);u.target.position.copy(bt),u.target.updateMatrixWorld(),u.position.copy(Zu).multiplyScalar(te).add(bt);const re=u.shadow.camera;re.left=-Gt,re.right=Gt,re.top=Gt,re.bottom=-Gt,re.near=.5,re.far=fe,re.updateProjectionMatrix()}function Y(Z){if(k=Z,!Z){o.fog=null;return}o.fog??(o.fog=new Nc(Ky,Z.near,Z.far))}function J(Z){if(Q=Z,!Z){H&&(H.visible=!1);return}H||(H=new Re(new Kn(1,1),new tn({map:fM(),depthWrite:!1,depthTest:!1,toneMapped:!1,fog:!1})),H.renderOrder=xM,H.frustumCulled=!1,o.add(H)),H.visible=V}function ht(Z){V=Z,H&&(H.visible=Z&&!!Q)}const Vt=new F,tt=new F,rt={repeat:0,offset:0};function ot(){if(!H||!Q)return;if(!V){H.visible=!1;return}if(c.getWorldDirection(Vt),H.visible=bM(Vt.y),!H.visible)return;const Z=Math.hypot(c.position.x,c.position.z)||1;tt.set(-c.position.x/Z*Q,0,-c.position.z/Z*Q),tt.project(c);const bt=(1-tt.y)/2,Gt=c.near*1.5,te=2*Gt*Math.tan(c.fov*Math.PI/360);H.scale.set(te*c.aspect,te,1),H.quaternion.copy(c.quaternion),H.position.copy(c.position).addScaledVector(Vt,Gt),gM(bt,rt);const fe=H.material.map;fe.repeat.set(1,rt.repeat),fe.offset.set(0,rt.offset)}return{scene:o,camera:c,renderer:e,fitShadow:nt,setFog:Y,setHorizon:J,setSky:ht,size:()=>({...s}),remeasure:d,onBox(Z){return r.add(Z),()=>{r.delete(Z)}},start(Z){C=Z,x()},park(Z){C===Z&&(cancelAnimationFrame(y),v=!1,C=()=>{},R=Pu,I=0,N=-1)},step(Z,bt=performance.now()){j(Z,bt)},frames:()=>I,rule:{enable(){T=!1},play(){R=hy(R),A()},pause(){R=dy(R),A()},wake:A,snap:()=>uy(R)},dispose(){m=!1,r.clear(),p==null||p.removeEventListener("change",_),f?f.disconnect():removeEventListener("resize",d),document.removeEventListener("visibilitychange",w),e.dispose(),e.forceContextLoss(),e.domElement.remove()}}}function PM(i,t){for(const e of t)e.traverse(n=>{var r,a;const s=n;(r=s.skeleton)==null||r.dispose();for(const o of kf(s))o.userData.drillOwned&&o.dispose();(a=s.geometry)!=null&&a.userData.drillOwned&&s.geometry.dispose()}),i.remove(e);Of(i)}function Of(i){i.traverse(t=>{var n,s;const e=t;(n=e.geometry)!=null&&n.userData.shared||(s=e.geometry)==null||s.dispose();for(const r of kf(e)){for(const a of Object.values(r)){const o=a;o!=null&&o.isTexture&&!o.userData.shared&&o.dispose()}r.dispose()}})}const kf=i=>Array.isArray(i.material)?i.material:i.material?[i.material]:[];function LM(i){const t=new Map,e=new Map,n=i.clone();return Bf(i,n,function(s,r){t.set(r,s),e.set(s,r)}),n.traverse(function(s){if(!s.isSkinnedMesh)return;const r=s,a=t.get(s),o=a.skeleton.bones;r.skeleton=a.skeleton.clone(),r.bindMatrix.copy(a.bindMatrix),r.skeleton.bones=o.map(function(c){return e.get(c)}),r.bind(r.skeleton,r.bindMatrix)}),n}function Bf(i,t,e){e(i,t);for(let n=0;n<i.children.length;n++)Bf(i.children[n],t.children[n],e)}const Qc=["shirt","jersey","top","tshirt"];let Sn=null;async function Xa(i,t,e=xi("assets/ochi.glb"),n,s=0,r){if(!Sn||Sn.url!==e){const o=await(n??Kc()).loadAsync(e),c=o.scene.children.filter(u=>{let h=!1;return u.traverse(l=>{h||(h=l.isSkinnedMesh)}),h});Sn={variants:c.length?c:[o.scene],clips:o.animations,url:e}}const a=[];for(let o=0;o<t;o++){const c=Sn.variants.length>1,u=r==null?void 0:r[o],h=u===void 0?o+s:u,l=LM(Sn.variants[(h%Sn.variants.length+Sn.variants.length)%Sn.variants.length]);l.traverse(f=>{f.castShadow=f.type==="SkinnedMesh",c&&f.isBone&&(f.name=f.name.replace(/_\d+$/,""))}),i.add(l);const d=new Gg(l);a.push({root:l,mixer:d,clips:new Map(Sn.clips.map(f=>[f.name,f]))})}return a}const Ju=new WeakMap;function Gf(i){let t=Ju.get(i.root);return t===void 0&&(t=null,i.root.traverse(e=>{e.isBone&&e.name==="spine006"&&(t=e)}),Ju.set(i.root,t)),t}function tl(i){const t=new WeakMap;return e=>{let n=t.get(e.root);return n||(n=[],e.root.traverse(s=>{s.isBone&&i.test(s.name)&&n.push(s)}),n.sort((s,r)=>s.name.localeCompare(r.name)),t.set(e.root,n)),n}}const zf=tl(/^foot[LR]$/),Hf=tl(/^hand[LR]$/),Sc=tl(/^spine00[12]$/),vr=.6499;function el(i){const t=new ae(i),e=Math.max(t.r,t.g,t.b);return e>0?t.multiplyScalar(Math.min(1/vr,1/e)):t}let Go=null;const Vf=3e3;function Wf(i){return Go??(Go=(async()=>{let t;try{return await Promise.race([i(xi("assets/kit/kit_masks.json")),new Promise((e,n)=>{t=setTimeout(()=>n(new Error("kit_masks.json timed out")),Vf)})])}finally{clearTimeout(t)}})().catch(t=>{throw Go=null,t})),Go}async function DM(i,t=xi("assets/ochi.glb"),e){await Xa(new _n,0,t,e);const n=i.toLowerCase();return Sn?Sn.variants.findIndex(s=>{let r=!1;return s.traverse(a=>{const o=a;if(o.isMesh)for(const c of Array.isArray(o.material)?o.material:[o.material])r||(r=(c.name||"").toLowerCase()===n)}),r}):-1}function FM(i){const t=[];return i.traverse(e=>{const n=e;if(n.isMesh)for(const s of Array.isArray(n.material)?n.material:[n.material]){const r=(s.name||"").toLowerCase();Qc.some(a=>r.includes(a))&&t.push(r)}}),t}async function jf(i,t=xi("assets/ochi.glb"),e){await Xa(new _n,0,t,e);const n=Sn?Sn.variants.map((r,a)=>a):[];if(i==="mixed")return n;const s=i==="girls"?"woman":"man";return n.filter(r=>FM(Sn.variants[r]).some(o=>(o.includes("woman")?"woman":o.includes("man")?"man":"")===s))}const nl=i=>i.replace(/^shirt\s+/i,"").toLowerCase().replace(/\s+/g,"-");function Xf(i){const t=[];return i.root.traverse(e=>{const n=e;if(n.isMesh)for(const s of Array.isArray(n.material)?n.material:[n.material]){const r=s.name||n.name;Qc.some(a=>r.toLowerCase().includes(a))&&t.push(nl(r))}}),t}async function qf(i,t,e={}){var a;const n=(Array.isArray(i)?i:[i]).filter(o=>o!=="plain");if(!n.length)return null;const s=o=>xi(`assets/kit/${o}`),r=e.fetchJson??(o=>fetch(o).then(c=>c.json()));try{const o=await Wf(r),c=[...new Set(n.map(d=>{var f;return(f=o.channels[d])==null?void 0:f.file}).filter(d=>d!==void 0))];if(!c.length)return null;const u=e.loader??new pf,h=new Map,l=new Map;for(const d of new Set(t))for(const f of c){const p=(a=o.characters[d])==null?void 0:a.files[f];if(!p)continue;let _=l.get(p);_||(_=await u.loadAsync(s(p)),_.colorSpace="",_.flipY=!1,_.anisotropy=16,_.needsUpdate=!0,l.set(p,_));const g=h.get(d)??[];g[f]=_,h.set(d,g)}return h.size?{channels:o.channels,textures:h,dispose(){for(const d of l.values())d.dispose();l.clear(),h.clear()}}:null}catch{return null}}async function Kf(i={}){const t=i.fetchJson??(e=>fetch(e).then(n=>n.json()));try{const e=await Wf(t);return Object.fromEntries(Object.entries(e.characters).map(([n,s])=>[n,s.numberBox]).filter(([,n])=>n))}catch{return{}}}const Qu=new Map;function $f(i){if(!i)return null;let t=Qu.get(i);if(!t){if(typeof document>"u")return null;const e=256,n=document.createElement("canvas");n.width=n.height=e;const s=n.getContext("2d");if(!s)return null;s.fillStyle="#ffffff",s.textAlign="center",s.textBaseline="middle";const r=c=>`700 ${c}px "Helvetica Neue", Helvetica, Arial, sans-serif`;let a=e*.92;s.font=r(a);const o=s.measureText(i).width;o>e*.84&&(a*=e*.84/o,s.font=r(a)),s.fillText(i,e/2,e*.54),t=new Cn(n),t.colorSpace="",t.anisotropy=8,Qu.set(i,t)}return t}const zo=new ae("#14181B"),Ho=new ae("#FFFFFF"),NM=.5;function Yf(i,t,e,n={}){const s=typeof t=="string"?{a:t,pattern:"plain",b:"#FFFFFF"}:t,r=typeof t!="string",a=[];return i.root.traverse(o=>{const c=o;if(!c.isMesh)return;(Array.isArray(c.material)?c.material:[c.material]).forEach((h,l)=>{const d=h.name||c.name,f=d.toLowerCase();if(!Qc.some(p=>f.includes(p))){if(!s.shorts&&!s.socks)return;const p=h.clone();h.userData.drillOwned&&h.dispose(),p.userData.drillOwned=!0,BM(p,s,c,r),a.push(p),Array.isArray(c.material)?c.material[l]=p:c.material=p;return}{const p=h.clone();h.userData.drillOwned&&h.dispose(),p.userData.drillOwned=!0,p.color=el(s.a),zM(p,s,e,nl(d),{...n,exact:r}),a.push(p),Array.isArray(c.material)?c.material[l]=p:c.material=p}})}),a}const UM=/^(thigh[LR]|pelvis[LR]|spine)$/,OM=/^shin[LR]$/,kM=8;function th(i,t){var r;const e=[new xe(-1,-1,-1,-1),new xe(-1,-1,-1,-1)],n=((r=i.skeleton)==null?void 0:r.bones)??[];let s=0;for(let a=0;a<n.length&&s<kM;a++)t.test(n[a].name)&&e[s>>2].setComponent(s++&3,a);return e}function BM(i,t,e,n){const s=th(e,UM),r=th(e,OM),a={kitShortsB:{value:s[0]},kitShortsB2:{value:s[1]},kitSocksB:{value:r[0]},kitSocksB2:{value:r[1]},kitShortsC:{value:ws(t.shorts??"#000000",n)},kitSocksC:{value:ws(t.socks??"#000000",n)},kitShortsOn:{value:t.shorts?1:0},kitSocksOn:{value:t.socks?1:0}};i.userData.kitLegUniforms=a,i.onBeforeCompile=o=>{Object.assign(o.uniforms,a),o.vertexShader=o.vertexShader.replace("#include <common>",`#include <common>
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
#endif`),o.fragmentShader=o.fragmentShader.replace("#include <common>",`#include <common>
varying vec2 vKitLeg;
uniform vec3 kitShortsC;
uniform vec3 kitSocksC;
uniform float kitShortsOn;
uniform float kitSocksOn;`).replace("#include <map_fragment>",`#include <map_fragment>
	diffuseColor.rgb = mix( diffuseColor.rgb, kitShortsC, vKitLeg.x * kitShortsOn );
	diffuseColor.rgb = mix( diffuseColor.rgb, kitSocksC, vKitLeg.y * kitSocksOn );`)},i.customProgramCacheKey=()=>"kitlegs",i.needsUpdate=!0}const GM=i=>{const t=new ae(i),e=Math.max(t.r,t.g,t.b);return e>vr?vr/e:1},ws=(i,t)=>t?new ae(i):el(i).multiplyScalar(vr);function Ac(i,t){const e=[new xe(0,0,0,0),new xe(0,0,0,0)],n=i==null?void 0:i[t],s=n?"rgba".indexOf(n.channel):-1;return n&&s>=0&&e[n.file]&&e[n.file].setComponent(s,1),e}function zM(i,t,e,n,s){const{from:r,label:a,boxes:o,exact:c=!1}=s,u=(e==null?void 0:e.textures.get(n))??[],h=Ac(e==null?void 0:e.channels,t.pattern),l=Ac(e==null?void 0:e.channels,(r==null?void 0:r.pattern)??t.pattern),d=a?o==null?void 0:o[n]:void 0,f=d?$f(a):null,p={kitMask0:{value:u[0]??null},kitMask1:{value:u[1]??null},kitSel0:{value:h[0]},kitSel1:{value:h[1]},kitA:{value:ws(t.a,c)},kitB:{value:ws(t.b,c)},kitSelWas0:{value:l[0]},kitSelWas1:{value:l[1]},kitWasA:{value:ws((r==null?void 0:r.a)??t.a,c)},kitWasB:{value:ws((r==null?void 0:r.b)??t.b,c)},kitFade:{value:r?0:1},kitNumber:{value:f},kitNumO:{value:new ee(...(d==null?void 0:d.o)??[0,0])},kitNumIX:{value:new ee(...(d==null?void 0:d.ix)??[1,0])},kitNumIY:{value:new ee(...(d==null?void 0:d.iy)??[0,1])},kitNumOn:{value:f?1:0},kitNumFlip:{value:NM*(c?1:GM(t.a))}};i.userData.kitUniforms=p,i.onBeforeCompile=_=>{Object.assign(_.uniforms,p),_.fragmentShader=_.fragmentShader.replace("#include <common>",`#include <common>
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
		kitLum > kitNumFlip ? vec3( ${zo.r.toFixed(4)}, ${zo.g.toFixed(4)}, ${zo.b.toFixed(4)} )
		: vec3( ${Ho.r.toFixed(4)}, ${Ho.g.toFixed(4)}, ${Ho.b.toFixed(4)} ), kitInk );
#endif`)},i.customProgramCacheKey=()=>"kit",i.needsUpdate=!0}const HM=.18;function VM(i,t){const e=Math.min(1,Math.max(0,t)),n=e*e*(3-2*e);for(const s of i){const r=s.userData.kitUniforms;r&&(r.kitFade.value=n)}return e}const Qw=Object.freeze(Object.defineProperty({__proto__:null,KIT_FADE:HM,KIT_REGISTRY_TIMEOUT:Vf,SHIRT_MAP_MEAN:vr,findAnkles:zf,findHands:Hf,findHead:Gf,findTrunk:Sc,kitNumberBoxes:Kf,kitNumberTexture:$f,kitSelectors:Ac,kitSlugOf:nl,kitTint:el,loadKitMasks:qf,loadPlayers:Xa,recolour:Yf,shirtSlugs:Xf,squadVariants:jf,stepKitFade:VM,variantIndexOf:DM},Symbol.toStringTag,{value:"Module"})),il=(i,t)=>Math.hypot(t[0]-i[0],t[1]-i[1]);function Gs(i){const t=il(i.from,i.to),e=i.accel,n=i.cruise,s=i.endSpeed??0,r=Math.min(i.startSpeed??0,n);if(t<=0)return{D:0,t1:0,t2:0,t3:0,d1:0,d2:0,peak:0};const a=(n*n-r*r)/(2*e),o=(n*n-s*s)/(2*e);if(a+o<=t){const u=t-a-o;return{D:t,t1:(n-r)/e,t2:u/n,t3:(n-s)/e,d1:a,d2:u,peak:n}}const c=Math.sqrt(e*t+(r*r+s*s)/2);return{D:t,t1:(c-r)/e,t2:0,t3:(c-s)/e,d1:(c*c-r*r)/(2*e),d2:0,peak:c}}function we(i){const t=Gs(i);return t.t1+t.t2+t.t3}function En(i,t){const e=Gs(i),n=e.t1+e.t2+e.t3,s=Math.min(Math.max(t-i.t0,0),n),r=i.accel;let a,o;if(s<=e.t1){const u=Math.min(i.startSpeed??0,i.cruise);a=u*s+.5*r*s*s,o=u+r*s}else if(s<=e.t1+e.t2)a=e.d1+e.peak*(s-e.t1),o=e.peak;else{const u=s-e.t1-e.t2;a=e.d1+e.d2+e.peak*u-.5*r*u*u,o=e.peak-r*u}const c=e.D>0?a/e.D:0;return{pos:[i.from[0]+(i.to[0]-i.from[0])*c,i.from[1]+(i.to[1]-i.from[1])*c],speed:o}}const WM=.25;function eh(i,t){let e=[0,0];for(const n of i)if(t>=n.t0){if(t>n.t0+we(n)){e=[0,0];continue}const s=il(n.from,n.to);if(s<=0){e=[0,0];continue}const{speed:r}=En(n,t);e=[(n.to[0]-n.from[0])/s*r,(n.to[1]-n.from[1])/s*r]}return e}function jM(i,t,e=WM){const n=eh(i,t),s=eh(i,t-e);return[(n[0]-s[0])/e,(n[1]-s[1])/e]}const XM=2.5;function qM(i,t){let e=0;for(const n of i)t>=n.t0&&(e=Gs(n).peak);return Math.min(1,e/XM)}const KM=.035,$M=.1,nh=.4,YM=1;function ZM(i,t){let e=0;for(let n=0;n<i.length;n++){const s=i[n];if((s.endSpeed??0)>0||il(s.from,s.to)<YM)continue;const r=s.t0+we(s)-$M,a=(t-r)/nh;a<=0||a>=1||i.some(o=>o.t0>s.t0&&o.t0<=r+nh)||(e=Math.max(e,KM*.5*(1-Math.cos(2*Math.PI*a))))}return e}function Ge(i,t){return Math.atan2(t[0]-i[0],t[1]-i[1])}function JM(i,t=0){return i-t}function qa(i){for(;i>Math.PI;)i-=2*Math.PI;for(;i<=-Math.PI;)i+=2*Math.PI;return i}function QM(i,t=58*Math.PI/180,e=.85){const n=qa(i);return Math.min(t,Math.max(-t,n))*e}const tS=1.2,Vo=180*Math.PI/180,Wo=120*Math.PI/180,ih=70*Math.PI/180;function Zf(i){return i<=0?Vo:i<=2.3?Vo+(Wo-Vo)*i/2.3:i>=5.48?ih:Wo+(ih-Wo)*(i-2.3)/(5.48-2.3)}const eS=.12,sh=15*Math.PI/180;function nS(i){return Math.max(-sh,Math.min(sh,i*eS))}const iS=.001;function ji(i,t){return Math.hypot(t[0]-i[0],t[1]-i[1])>=iS}function sS(i,t,e,n){return e||n||!ji(i,t)?null:Ge(i,t)}function rh(i,t,e,n=Math.PI*2){const s=t-i,r=qa(s),a=r===Math.PI&&s<0?-Math.PI:r,o=n*e;return Math.abs(a)<=o?i+a:i+Math.sign(a)*o}const rS=2.3,hr=1.1,aS=1.15,ah=.6,oh=1.2,Ta=.88,oS=1-Ta,cS=.15,oa=.28;function Qi(i,t){const e=Math.min(Math.max((t-i.t0)/i.duration,0),1),n=i.style??"ground",s=n==="push"?Math.min(Math.max(i.endFrac??0,0),1):0,r=n==="push"?(2*e-(1-s)*e*e)/(1+s):1-Math.pow(1-e,n==="shot"?aS:rS),a=i.fromHeight??0,o=i.toHeight??(n==="shot"?ah:0),c=a*(1-e)+o*e;let u;if(n==="clipped"){const h=i.loft??oh;u=(e<Ta?h*Math.sin(Math.PI*e/Ta):cS*h*Math.sin(Math.PI*(e-Ta)/oS))+c}else if(n==="lofted")u=(i.loft??oh)*Math.sin(Math.PI*e)+c;else if(n==="shot")u=c;else if(n==="headed"){const h=i.loft??0;u=e<=oa?a+(h-a)*Math.sin(Math.PI/2*(e/oa)):o+(h-o)*Math.cos(Math.PI/2*((e-oa)/(1-oa)))}else n==="drop"?u=(i.fromHeight??ah)*(1-e*e):u=(i.loft??0)*Math.sin(Math.PI*e)+c;return{pos:[i.from[0]+(i.to[0]-i.from[0])*r,i.from[1]+(i.to[1]-i.from[1])*r],height:u,done:e>=1}}const ch=new WeakMap;function lS(i){const t=ch.get(i);if(t!==void 0)return t;let e=0;for(let n=0;n<=32;n++)e=Math.max(e,Qi(i,i.t0+i.duration*n/32).height);return ch.set(i,e),e}function Jf(i,t){if(!(i.duration>0))return 0;const e=i.duration/1e3,n=Math.min(Math.max(t-e/2,i.t0),i.t0+i.duration-e),s=Qi(i,n),r=Qi(i,n+e);return Math.hypot(r.pos[0]-s.pos[0],r.pos[1]-s.pos[1],r.height-s.height)/e}function Qf(i,t){const e=i.path;if(t<=e[0].t)return[...e[0].at];for(let n=1;n<e.length;n++)if(t<=e[n].t){const s=e[n-1],r=e[n],a=(t-s.t)/(r.t-s.t),o=a*a*(3-2*a);return[s.at[0]+(r.at[0]-s.at[0])*o,s.at[1]+(r.at[1]-s.at[1])*o]}return[...e[e.length-1].at]}const lh=3,Rn=2.52,Ln=4,Ms=.8,ca=1,Ri=.3,rr=.6,yn=.15,uS=.5,Jn=.45,tp=.4,ep=.7,uh=Math.PI/12,Ss=4,hS=.6,hh=.4,dS=.3,fS=.15,pS=.4,mS=.35,yr=.3,gS=Math.PI/4,_S=.25,bS={left:"gk_dive_a",right:"gk_dive_b"},np=4,xS=.12,vS=.25,yS=.35;function dh(i){return Math.min(vS,Math.max(xS,i*yS))}const MS=1.3,SS=.15;function fh(i,t,e){const n=i-SS,s=i+t-n,r=Math.min(MS,Math.max(1,e/s));return{t0:Math.max(i+t-e/r,n),timeScale:r}}const AS=1.8,ph=.3,ES=.7,TS=.9,wS=2.5,mn={catch:{id:"gk_catch_b",duration:.967,contact:.66},catchHigh:{id:"gk_catch_d",duration:2.733,contact:.85},scoop:[{id:"gk_scoop_a",duration:2.5,contact:.87},{id:"gk_catch_a",duration:2.033,contact:.8}],dive:{left:{id:"gk_dive_a",duration:3.167,contact:.97,hand:.65,reach:.72},right:{id:"gk_dive_b",duration:3.2,contact:.97,hand:.94,reach:1.03}},throw:{id:"gk_throw_a",duration:2.833,contact:1.57,release:1.4},roll:{id:"gk_pass_a",duration:3.133,contact:1.4,release:.3},kick:{id:"gk_dropkick_a",duration:3.9,contact:2.4,release:.4}},RS={throw:{id:"throw_in_a",duration:2.767,contact:1.45,release:1.47},roll:mn.roll},la={left:{id:"gk_sidestep_a",duration:.533,dist:1.12},right:{id:"gk_sidestep_b",duration:.5,dist:1.39}},CS=.8;function IS(i,t,e,n=Ka){const s=np*i,r=Math.sqrt(Math.max(0,s*s-e*e));return Math.max(0,r-(n-lp)*t)}const PS=3;function LS(i,t,e){if(t<=0)return null;const n=Math.min(PS,Math.floor(Math.abs(i)/t));return n<1?null:{side:i*e>0?"left":"right",steps:n}}const Hn=1,ua=.25,jo=.5,mh=.8,DS=.4,ip=3,FS=.6,NS=2.3,gh=.9,As=.3,_h=.4,US=12,OS=8,kS=3,BS=.25;function bh(i,t,e,n,s){const r=Math.hypot(e.to[0]-i[0],e.to[1]-i[1]);if(e.style==="ground")return{from:i,to:[...e.to],t0:n,duration:Math.max(Ec,r/OS),style:"ground",...t?{fromHeight:t}:{}};const a=Math.max(BS*r,kS)*s;return{from:i,to:[...e.to],t0:n,duration:Math.max(Ec,r/US),style:"lofted",loft:Math.max(.1,a-t/2),...t?{fromHeight:t}:{}}}const GS=.6,Ec=.2;function zS(i,t,e){const n=GS*i/t;if(!(n>0))throw new Error(`[engine3d] a wall rebound needs a real strike: ${i.toFixed(2)} m over ${t.toFixed(2)} s leaves the ball no arrival speed to come back on`);return Math.max(Ec,e/n)}const HS=16,VS=12,Xo=2,WS=8,jS=.1,XS=2.44;function qi(i,t,e){let n=null;for(const s of i)s.player===t&&e>=s.at&&(!n||s.at>=n.at)&&(n=s);return n}function sp(i,t,e){const n=qi(i,t,e);if(!(n!=null&&n.hand))return 0;const s=n.hand,r=s.from??s.height,a=s.rise?Math.min(1,Math.max(0,(e-n.at)/s.rise)):1;return r+(s.height-r)*(a*a*(3-2*a))}const qo=[{id:"tackle_b",duration:1.767,contact:.63,reach:.89}],ha={id:"pass_a",duration:.567,contact:.167,reach:.89},qS=["stall_c"],xh="jog_back_a",ar=.5,KS=.5,$S=.3,YS=.9,vh=.5,ZS=.2,yh=.8,Mh=.5,JS=1.6,da={id:"gk_block_a",duration:2.633,contact:.94,reach:.65},Sh=3,QS=.1,fa=["walk","jog","run"],wa=.5,tA=1.5*wa,eA=.42*Math.SQRT1_2,nA=12,iA=.15;function sA(i,t=1){const e=[];for(const n of i??[]){if(n.type!=="goal"){e.push([...n.at]);continue}const s=ns(n,Ka)*t;n.facing==="e"||n.facing==="w"?e.push([n.at[0],n.at[1]-s],[n.at[0],n.at[1]+s]):e.push([n.at[0]-s,n.at[1]],[n.at[0]+s,n.at[1]])}return e}function Ah(i,t,e){const n=o=>t.reduce((c,u)=>Math.min(c,Math.hypot(o[0]-u[0],o[1]-u[1])),1/0);let s=[...i],r=s,a=n(s);for(let o=0;o<8;o++){let c=null,u=0;for(const f of t){const p=Math.hypot(s[0]-f[0],s[1]-f[1]);e-p>u+1e-9&&(u=e-p,c=f)}if(!c)return s;const h=[s[0]-c[0],s[1]-c[1]],l=Math.hypot(h[0],h[1])>1e-6?$e(h):[1,0];s=[c[0]+e*l[0],c[1]+e*l[1]];const d=n(s);d>a+1e-9&&(r=s,a=d)}return r}function Eh(i,t,e,n){const s=Math.hypot(t[0]-i[0],t[1]-i[1]),r=4*s/(n*n);return{from:i,to:t,t0:e,cruise:Math.sqrt(r*s),accel:r}}function pa(i,t,e){let n=null;for(const r of i)r.t0<=e&&(!n||r.t0>=n.t0)&&(n=r);if(!n)return{at:[...t],moving:!1,restT:e};const s=n.t0+n.duration;return{at:[...n.to],moving:e<s,restT:s}}const rA=.2;function Th(i,t,e){const n=e[0]-t[0],s=e[1]-t[1],r=n*n+s*s,a=r>1e-12?Math.min(1,Math.max(0,((i[0]-t[0])*n+(i[1]-t[1])*s)/r)):0;return Math.hypot(t[0]+a*n-i[0],t[1]+a*s-i[1])}function wh(i,t,e){const n=Math.hypot(t[0]-i[0],t[1]-i[1]),s=n>1e-6?$e([t[0]-i[0],t[1]-i[1]]):[0,1],r=n<=Fe+QS?null:[t[0]-Fe*s[0],t[1]-Fe*s[1]],a=e?$e([e[0]-t[0],e[1]-t[1]]):s,o=Math.min(Math.max(Fe,tp),ep);return{stepTo:r,set:[t[0]+o*a[0],t[1]+o*a[1]],faceAt:e??[t[0]+s[0],t[1]+s[1]]}}function aA(i){return i<15?"roll":i<30?"throw":"kick"}function rp(i,t,e){const n=[e[0]-t[0],e[1]-t[1]],s=n[0]*n[0]+n[1]*n[1],r=s>1e-12?Math.min(1,Math.max(0,((i[0]-t[0])*n[0]+(i[1]-t[1])*n[1])/s)):0,a=[t[0]+r*n[0],t[1]+r*n[1]];return{reach:Math.hypot(a[0]-i[0],a[1]-i[1]),at:a}}function oA(i,t,e,n,s){const{reach:r,at:a}=rp(i,e,n);if(r>ip*s)return null;const o=$e([e[0]-i[0],e[1]-i[1]]);if(r<=FS*s)return{kind:"catch",clip:mn.catch.id,clipDuration:mn.catch.duration,contactOffset:mn.catch.contact,contact:[i[0]+Fe*o[0],i[1]+Fe*o[1]],travelTo:null};const c=hp(i,t,n),u=mn.dive[c],h=$e([a[0]-i[0],a[1]-i[1]]),l=Math.min(NS*s,Math.max(0,r-u.reach*s));return{kind:"dive",clip:u.id,clipDuration:u.duration,contactOffset:u.contact,contact:a,side:c,travelTo:[i[0]+l*h[0],i[1]+l*h[1]]}}function cA(i,t,e,n=1){const s=[e[0]-t[0],e[1]-t[1]],r=s[0]*s[0]+s[1]*s[1],a=r>1e-12?Math.min(1,Math.max(0,((i[0]-t[0])*s[0]+(i[1]-t[1])*s[1])/r)):0,o=[t[0]+a*s[0],t[1]+a*s[1]];let c=[i[0]-o[0],i[1]-o[1]];Math.hypot(c[0],c[1])<1e-6&&(c=[-s[0],-s[1]]);const u=$e(c);return[o[0]+ph*n*u[0],o[1]+ph*n*u[1]]}function ap(i,t){const e=Math.min(1,Math.max(0,(t-i.t0)/i.duration)),n=1-(1-e)*(1-e);return[i.from[0]+(i.to[0]-i.from[0])*n,i.from[1]+(i.to[1]-i.from[1])*n]}function op(i,t,e,n){let s=null;for(const r of i){if(r.player!==e||n<r.t0)continue;let a=1/0;for(const o of t??[])o.t0>=r.t0&&o.t0<a&&(a=o.t0);n<a&&(s=ap(r,n))}return s}const lA=[{id:"header_a",duration:1.9,contact:1}],uA=1.57,Rh=.1,Ch=.6,Ko=2,ma=.02,$o=.6,hA=2.5,dA=.22,fA=3,pA=6.5;function Yo(i,t){return Math.min(Math.max(dA*i,fA),pA)*t}const mA=10,gA=1.7;function _A(i,t,e,n){const s=e??[t[0],t[1]],r=$e([s[0]-i[0],s[1]-i[1]]),a=[i[0]+Rh*n*r[0],i[1]+Rh*n*r[1]],o=lA[0];return{contact:a,height:uA*n,clip:o,set:[i[0]+Fe*r[0],i[1]+Fe*r[1]],faceAt:s}}const Ih=.4,bA=.3,xA=18,vA=10,yA=.45,MA=.8,Ra={id:"strike_jog_a",contact:.4},SA=1,AA={strike_jog_a:{loop:!1,category:"shoot",ballContact:Ra.contact},gk_sidestep_a:{loop:!0},gk_sidestep_b:{loop:!0}};function cp(i){var t;for(const[e,n]of Object.entries(AA))(t=i.clips)!=null&&t[e]&&Object.assign(i.clips[e],n);return i}const Ph=.15,EA=.2,Ka=3.35,lp=.5;function TA(i,t,e,n,s=1){let r=null,a=1/0;for(const p of e){const _=Math.hypot(p.at[0]-t[0],p.at[1]-t[1]);_<a&&(a=_,r=p)}if(!r||a>r.halfW*s+1)return[...t];const o=(r.halfW-lp)*s,c=r.at,u=r.sideways?[[c[0],c[1]-o],[c[0],c[1]+o]]:[[c[0]-o,c[1]],[c[0]+o,c[1]]];if(n){const p=Ge(i,c),_=g=>(g[0]-i[0])*Math.cos(p)-(g[1]-i[1])*Math.sin(p);return u.sort((g,m)=>_(m)-_(g)),n==="left"?u[0]:u[1]}const h=Math.hypot(u[0][0]-i[0],u[0][1]-i[1]),l=Math.hypot(u[1][0]-i[0],u[1][1]-i[1]);if(Math.abs(h-l)>1e-6)return h>l?u[0]:u[1];const d=Math.hypot(u[0][0]-t[0],u[0][1]-t[1]),f=Math.hypot(u[1][0]-t[0],u[1][1]-t[1]);return d<f-1e-6?u[0]:u[1]}function wA(i,t){var e;return t==="keeper"&&((e=i.groups.gk_ready)!=null&&e.length)?i.groups.gk_ready:i.groups.idle}const up=.35;let Fe=up;function Lh(i){Fe=i}function RA(){return Fe/up}function Vn(i,t){return[i[0]+Fe*Math.sin(t),i[1]+Fe*Math.cos(t)]}function Zo(i,t,e){const n=Ge(i,t);return(e[0]-i[0])*Math.cos(n)-(e[1]-i[1])*Math.sin(n)>=0?"L":"R"}function hp(i,t,e){return(e[0]-i[0])*Math.cos(t)-(e[1]-i[1])*Math.sin(t)>1e-9?"left":"right"}function $e(i){const t=Math.hypot(i[0],i[1])||1;return[i[0]/t,i[1]/t]}function Dh(i,t){const e=Math.cos(t),n=Math.sin(t);return[i[0]*e-i[1]*n,i[0]*n+i[1]*e]}function CA(i,t,e){const n=$e([t[0]-i[0],t[1]-i[1]]);let s,r;if(e){s=$e([e[0]-i[0],e[1]-i[1]]);const f=n[0]*s[1]-n[1]*s[0];r=Math.abs(f)<1e-6?1:Math.sign(f)}else r=1,s=Dh([-n[0],-n[1]],-r*uh);const a=Dh(n,r*uh),o=[i[0]+Fe*a[0],i[1]+Fe*a[1]],c=[i[0]+Fe*s[0],i[1]+Fe*s[1]],u=[c[0]-o[0],c[1]-o[1]],h=Math.hypot(u[0],u[1]),l=h>1e-6?[u[0]/h,u[1]/h]:s,d=Math.min(Math.max(h,tp),ep);return{contact:o,set:[o[0]+d*l[0],o[1]+d*l[1]],faceAt:e??[i[0]+s[0],i[1]+s[1]]}}const IA=.5,PA=1.4,Fh={walk:.8,jog:1.2,run:2.2},LA=.25,DA=.7,FA=.3,NA=2,or=.4,UA=10,OA=8,kA=2.5,Nh=6,BA=2,Uh=[.06,-.09,.1,-.04,.08,-.1,.03,-.07],Oh=1.4;function kh(i,t,e){const n=i.t0+we(i),s=Jo(i,t);let r=0,a=Math.max(n-t,.001);if(Jo(i,t+a)-s<=e)return a;for(let o=0;o<48;o++){const c=(r+a)/2;Jo(i,t+c)-s>=e?a=c:r=c}return Math.max(a,.001)}function Jo(i,t){const e=En(i,t).pos;return Math.hypot(e[0]-i.from[0],e[1]-i.from[1])}function GA(i,t,e,n,s,r={}){const a=we(i);if(a<=0)return{flights:[],touches:[],restEnd:i.t0};const o=$e([i.to[0]-i.from[0],i.to[1]-i.from[1]]),c=Ge(i.from,i.to),u=[Math.cos(c),-Math.sin(c)],h=R=>(R[0]-i.from[0])*o[0]+(R[1]-i.from[1])*o[1],l=i.t0+a,d=h(e),f=RA(),p=(r.others??[]).filter(R=>Math.abs((R[0]-i.from[0])*Math.cos(c)-(R[1]-i.from[1])*Math.sin(c))<=BA).map(R=>h(R)),_=DA*f,g=LA*f,m=R=>h(En(i,R).pos),v=[],y=[];let x=i.t0,w=[...t];const T=Math.ceil(Gs(i).D/(.5*Math.min(n,or*3)))+8;for(let R=0;;R++){y.push(x);const I=h(w),S=d-I,A=r.turnOut?or:n,C=or*(1+Oh),N=R===0&&!!r.turnIn||!!r.turnOut&&S<=C,k=N?Fe:_;if(S<=Oh*A||R===T-1||d-(m(x)+k)<.05){const G=Math.hypot(e[0]-w[0],e[1]-w[1]);let kt=x;if(G>1e-6){const oe=Math.max(En(i,x).speed,IA*i.cruise),me=Math.min(2*G/(oe+hr*(G/oe)/2),Math.max(l-x,.2));v.push({from:w,to:[...e],t0:x,duration:me,style:"push",endFrac:0}),kt=x+me}return kt<l&&v.push({from:[...e],to:[...e],t0:kt,duration:l-kt,style:"ground"}),{flights:v,touches:y,restEnd:Math.max(kt,l)}}let H=N?or:n;if(!N&&S>UA){let G=S;for(const kt of p)kt>I&&(G=Math.min(G,kt-I));H*=Math.min(Math.max(G/OA,1),kA)}const Q=H;H*=1+Uh[R%Uh.length],!N&&r.turnOut&&S-H<C&&(H=Math.max(S-C,or));const V=Math.min(H,PA*i.cruise*i.cruise/hr),j=kh(i,x,V),O=Math.max(i.cruise*j-V,0),nt=Math.min(k,I-m(x)+O),Y=m(x)+nt,J=Math.max(I,Y),ht=Q>NA?s:s*(R%2?-1:1),Vt=Math.min(g,FA*V),tt=(w[0]-i.from[0])*u[0]+(w[1]-i.from[1])*u[1],rt=Math.abs(ht*Vt-tt),ot=Math.sqrt(Math.max(Nh*Nh-rt*rt,0)),Z=Math.min(J+V,I+ot,d),bt=kh(i,x,Z-Y),Gt=(Z-I)/bt,te=Gt+hr*bt/2,fe=Gt-hr*bt/2,re=[i.from[0]+o[0]*Z+u[0]*ht*Vt,i.from[1]+o[1]*Z+u[1]*ht*Vt],Pe={from:w,to:re,t0:x,duration:bt,style:"push",endFrac:Math.max(fe,0)/te};v.push(Pe),w=[...re],x+=bt}}function ti(i){return[...i].reduce((t,e)=>t*31+e.charCodeAt(0)>>>0,0)}function Mn(i,t,e){const n=ti(t);return i[Math.abs(n+Math.floor(e*10))%i.length]}const sl=.3;function dp(i){const t=bc.filter(e=>{var n;return(n=i.groups[e])==null?void 0:n.length}).map(e=>({gait:e,clipSpeed:i.clips[i.groups[e][0]].speed??Rn})).sort((e,n)=>e.clipSpeed-n.clipSpeed);return t.map((e,n)=>({gait:e.gait,min:n===0?sl:Math.sqrt(t[n-1].clipSpeed*e.clipSpeed),clipSpeed:e.clipSpeed}))}function rl(i,t){let e=null;for(const n of i)t>=n.min&&(e=n);return e}function zA(i,t){const e=Gs(i),n=e.t1+e.t2+e.t3;if(n<=0||!t.length)return[];const s=i.endSpeed??0,r=i.startSpeed??0,a=new Set([0,n]);for(const u of t)u.min>e.peak||(u.min>r&&a.add((u.min-r)/i.accel),u.min>s&&a.add(n-(u.min-s)/i.accel));const o=[...a].sort((u,h)=>u-h),c=[];for(let u=0;u+1<o.length;u++){if(o[u+1]-o[u]<1e-9)continue;const h=rl(t,En(i,i.t0+(o[u]+o[u+1])/2).speed);if(!h)continue;const l=c[c.length-1];l&&l.gait===h.gait&&Math.abs(l.t1-(i.t0+o[u]))<1e-9?l.t1=i.t0+o[u+1]:c.push({gait:h.gait,t0:i.t0+o[u],t1:i.t0+o[u+1]})}return VA(c)}const HA=.3;function VA(i){const t=i.map(e=>({...e}));for(let e=0;e<32&&t.length>1;e++){let n=-1,s=HA;for(let o=0;o<t.length;o++){const c=t[o].t1-t[o].t0;c<s-1e-9&&(s=c,n=o)}if(n<0)break;const r=t[n-1],a=t[n+1];a&&(!r||a.t1-a.t0>r.t1-r.t0)?a.t0=t[n].t0:r.t1=t[n].t1,t.splice(n,1);for(let o=0;o+1<t.length;)t[o].gait===t[o+1].gait?(t[o].t1=t[o+1].t1,t.splice(o+1,1)):o++}return t}const $a=.85,pi=1.15,Bh=.5;function fp(i){return Bh+($a-Bh)*Math.min(1,Math.max(0,i))}function WA(i,t){const e=i/t;return e>pi?pi:Math.max(fp(e),e)}function jA(i,t){return Math.min(pi,Math.max($a,i/t))}function XA(i,t,e){const n=i.findIndex(u=>u.gait===e);if(n<0)return{timeScale:1,partner:null,weight:0};const s=i[n],r=t/s.clipSpeed;if(r>=$a&&r<=pi)return{timeScale:r,partner:null,weight:0};const a=i[r>pi?n+1:n-1];if(!a)return{timeScale:r>pi?pi:Math.max(fp(r),r),partner:null,weight:0};const o=Math.min(1,Math.max(0,(t-s.clipSpeed)/(a.clipSpeed-s.clipSpeed))),c=(1-o)*s.clipSpeed+o*a.clipSpeed;return{timeScale:jA(t,c),partner:a.gait,weight:o}}const qA=new Set(["pass","shoot","receive","header","defensive"]),Ua=new Set(["turn","transition"]),gi=.15,pp=.1,mp=.3,KA=.45,$A=.2,YA=.12,ZA=.6;function al(i,t){var e;return qA.has(((e=i.clips[t])==null?void 0:e.category)??"")||t.startsWith("header_")}function gp(i,t,e){var r,a;if(al(i,t))return pp;const n=(r=i.clips[t])==null?void 0:r.category,s=e?(a=i.clips[e])==null?void 0:a.category:void 0;return Ua.has(n??"")?gi:n==="idle"?s==="idle"?ZA:s==="locomotion"?YA:Oa:n==="locomotion"&&s==="locomotion"?$A:Ua.has(s??"")?gi:Oa}function _p(i,t){var n;const e=(n=i.clips[t])==null?void 0:n.category;return e==="receive"?KA:Ua.has(e??"")?gi:al(i,t)?mp:Oa}function JA(i,t,e){var n;return al(i,t)||Ua.has(((n=i.clips[t])==null?void 0:n.category)??"")?_p(i,t):gp(i,e,t)}const hn=Math.PI/180,fi={turn_l90_a:{id:"turn_l90_a",duration:.9,yaw:82.6*hn,t50:.567,t90:.8,peak:159*hn,standing:!0},turn_r90_a:{id:"turn_r90_a",duration:.933,yaw:-97.2*hn,t50:.533,t90:.8,peak:213*hn,standing:!0},turn_180_a:{id:"turn_180_a",duration:.667,yaw:-162.5*hn,t50:.4,t90:.6,peak:366*hn,standing:!1},turn_to_run_a:{id:"turn_to_run_a",duration:1.7,yaw:-106.7*hn,t50:.767,t90:1.033,peak:192*hn,standing:!1}};function Qo(i,t){const e=[[0,0],[i.t50,.5],[i.t90,.9],[i.duration,1]];if(t<=0)return 0;for(let n=0;n+1<e.length;n++){const[s,r]=e[n],[a,o]=e[n+1];if(t<=a)return a-s>1e-9?r+(o-r)*(t-s)/(a-s):o}return 1}function bp(i,t,e){let n=null;for(const s of i)s.player===t&&e>=s.t0&&e<s.end+gi&&(n=s);return n}function QA(i,t,e,n){const s=bp(i,t,e);if(!s)return null;const r=fi[s.clip],a=s.end-s.t0,o=s.offset+Math.min(e-s.t0,a),c=Qo(r,s.offset),u=Qo(r,s.offset+a),h=Qo(r,o),l=u-c>1e-9?(h-c)/(u-c):1,d=n??s.from,f=n===void 0?s.to-s.from:Vi(n,s.to),p=Math.min(1,(e-s.t0)/gi),_=e<=s.end?1:Math.max(0,1-(e-s.end)/gi),g=Math.max(0,Math.min(p,_));return{heading:d+f*l,clipYaw:r.yaw*h*g}}function tE(i,t){return i.peak+Zf(t)}function eE(i,t,e){const n=Math.abs(i);return n<Tc?null:n>dE&&(t==="jog"||t==="run"||t==="sprint")?"turn_180_a":i>0?"turn_l90_a":"turn_r90_a"}const Tc=45*hn,Gh=60*hn,nE=.3,iE=.5,sE=.7,rE=130*hn,ga=[{id:"jog_back_a",speed:2.11},{id:"run_back_a",speed:2.81}],zh={left:"strafe_l_a",right:"strafe_r_a"},aE=3.2,oE=3.2,xp=60*hn,cE=120*hn,Hh=[{id:"jog_back_diag_a",axis:225.5*hn,speed:2.04},{id:"jog_back_diag_b",axis:135.5*hn,speed:2.27}],lE=5;function uE(i,t){if(Math.abs(i)>xp)return null;const e=i>=0?Hh[0]:Hh[1];return t<=e.speed*pi?{id:e.id,axis:e.axis}:null}function hE(i,t){const e=Math.abs(i);return e<=xp?t>aE?null:t>(ga[0].speed+ga[1].speed)/2?ga[1].id:ga[0].id:e>cE||t>oE?null:i>0?zh.right:zh.left}const dE=120*hn;function Vi(i,t){return qa(t-i)}const Oa=.25;function Rs(i,t){const e=i.clips[t.clip];if(t.loopUntil!==void 0)return t.loopUntil;const n=e.category==="shoot"?EA:0,s=t.contact??e.ballContact??0,r=t.offset??0,a=t.timeScale??1,o=_p(i,t.clip);return Math.max(t.t0,0)+Math.max((e.duration-r)/a-(e.loop?0:o)+n,(s-r)/a)}function fE(i,t,e){return(i==null?void 0:i.clip)!==t||i.offset!==(e==null?void 0:e.offset)}function vp(i,t,e,n){let s=null;for(const r of i)r.player===e&&n>=Math.max(r.t0,0)&&n<Rs(t,r)&&(s=r);return s}const pE=.15;function mE(i,t,e){let n=null;for(const s of i)s.player===t&&e>=s.t0&&(n=s.headUntil!==void 0&&e<s.headUntil?[...s.at]:null);return n}const gE=.06,Vh=2,_E=6,bE=.4;function ka(i,t){let e=(i^t)>>>0;return e=Math.imul(e^e>>>16,73244475)>>>0,e=Math.imul(e^e>>>16,73244475)>>>0,((e^e>>>16)>>>0)/4294967296}function Wh(i,t){return ka(ti(i),20973)*t}function jh(i){return 1+gE*(2*ka(ti(i),10196)-1)}function xE(i,t){return(Vh+ka(ti(i),7047)*(_E-Vh))*(1+bE*(2*ka(ti(i)+t*2654435761,28490)-1))}function vE(i,t){let e=0;for(let n=0;n<64;n++)if(e+=xE(i,n),t<e)return n;return 64}function yE(i,t,e){const n=i.length;if(n<=1)return i[0];const s=ti(t);let r=s%n;for(let a=1;a<=e;a++){const o=s+a*2654435761>>>0;r=(r+1+o%(n-1))%n}return i[r]}function ME(i){if(!i||typeof i!="object"||!i.clips||!i.groups)throw new Error("manifest v2 required: expected { clips: {...}, groups: {...} } shape")}const SE=new Set(["receive_a","pass_a","pass_b"]),yp=.8,AE=.7;function Mp(i,t){var n;const e=t.contact??((n=i.clips[t.clip])==null?void 0:n.ballContact)??0;return t.t0+e-(t.offset??0)}function ol(i,t){let e=0;for(const n of i??[])t>=n.t0&&(e=t>n.t0+we(n)?0:En(n,t).speed);return e}function EE(i,t,e){for(const n of i)SE.has(n.clip)&&ol(t[n.player],Mp(e,n))>=yp&&(n.additive=!0)}const TE=1,wE=2,RE=.025,Xh=.2,CE=.4,qh="idle_transition";function IE(i,t,e){let n=0;for(const s of i){if(s.player!==t||e<s.t0||e>s.t1)continue;const r=e-s.t0,a=s.t1-s.t0,o=Math.min(1,r/Xh,(a-r)/Xh);o<=0||(n=Math.max(n,RE*o*.5*(1-Math.cos(2*Math.PI*wE*r))))}return n}const PE="idle_b",LE=.5,DE=.3,FE=.15;function NE(i,t,e){let n=0;for(const s of i)s.player!==t||e<s.t0||e>s.t1||(n=Math.max(n,LE*Math.min(1,(e-s.t0)/DE)*Math.min(1,(s.t1-e)/FE)));return n}function UE(i,t,e){const n=[],s=[];for(const r of i){if(r.clip!=="receive_a"||r.additive)continue;const a=Mp(e,r)-TE,o=r.t0;if(o-a<CE||a<0)continue;let c=!1;for(let u=a;u<=o;u+=.1){if(ol(t[r.player],u)>sl){c=!0;break}const h=vp(i,e,r.player,u);if(h&&h!==r){c=!0;break}}c||(n.push({player:r.player,t0:a,t1:o}),e.clips[qh]&&s.push({player:r.player,clip:qh,t0:a,loopUntil:o}))}return i.push(...s),i.sort((r,a)=>r.t0-a.t0),n}const OE=.6,Sp=.5,Ap=.6,mr=2*Sp/Ap,Ba=mr/Ap,kE=Sp-yr;function BE(i){return(mr-Math.sqrt(Math.max(0,mr*mr-2*Ba*i)))/Ba}function GE(){return mr-Ba*BE(kE)}const zE=.15,HE=.05;function VE(i,t,e){const n=Ge(i,t),s=Math.hypot(t[0]-i[0],t[1]-i[1]),r=e?Math.min(_S,s/2):yr,a=e?n-Math.acos(Math.min(1,r/Math.max(s,1e-6))):n+Math.PI+gS;return[i[0]+r*Math.sin(a),i[1]+r*Math.cos(a)]}function WE(i,t,e,n,s,r){const a=Math.min(yr,e*(n-Ri)/2);for(let o=a;o>=zE-1e-9;o-=HE){const c=[i[0]+o*Math.sin(t),i[1]+o*Math.cos(t)];if(r(c))return{from:[...i],to:c,t0:s,cruise:e,accel:e*e/(2*o),startSpeed:e}}return null}function jE(i,t,e=1){var Mt,Ht,se,ce,Wt,ve,de,Ee,q,Dt,it,pt,Ut,Nt,ue;ME(t),cp(t);const n=Na(i),s=dp(t),r={};i.players.forEach(P=>r[P.id]=[...P.start]);const a={},o=[],c=[],u=[],h=[],l=[],d=[],f=[],p=[],_={},g={},m=new Set,v={},y={},x={},w={};function T(P){u.push(P),v[P.player]=P.t0,ji(r[P.player],P.at)&&(R[P.player]=Ge(r[P.player],P.at))}const R={},I={},S={};function A(P){const b=_[P];let st=Math.max(b?b.t0+we(b):0,I[P]??0,0);for(const ut of c)ut.player===P&&t.clips[ut.clip]&&(st=Math.max(st,Rs(t,ut)));return st}function C(P,b,st,ut){if(oe.has(P)||!ji(r[P],st))return null;const X=R[P]??0,Et=Vi(X,Ge(r[P],st));if(Math.abs(Et)<Gh)return null;const Pt=fi[Et>0?"turn_l90_a":"turn_r90_a"];if(!t.clips[Pt.id])return null;const Tt=N(Pt),zt=A(P),$=Math.max(zt,Math.min(b,ut-Tt));return $+Tt>ut+1e-9?null:(k(P,Pt,$,0,X,X+Et),$)}function N(P,b=0){return P.duration-b-gi}function k(P,b,st,ut,X,Et,Pt){const Tt=Pt??N(b,ut),zt={player:P,clip:b.id,t0:st,offset:ut,end:st+Tt,from:X,to:Et},$={player:P,clip:b.id,t0:st,...ut?{offset:ut}:{},...Pt!==void 0?{loopUntil:st+Tt}:{}};f.push(zt),c.push($),S[P]={span:zt,cue:$},I[P]=zt.end+gi}function H(P,b){const st=S[P];return!st||st.span.end<=b+1e-9?!0:b-st.span.t0<nE?!1:(st.span.end=b,st.cue.loopUntil=b,I[P]=b+gi,!0)}function Q(P,b){if(H(P,b))return;const st=S[P];f.splice(f.indexOf(st.span),1);const ut=c.indexOf(st.cue);ut>=0&&c.splice(ut,1),delete S[P],I[P]=0}function V(P,b=1/0){const st=C(P.player,P.t0,P.at,b);T(st===null?P:{...P,t0:st})}const j=[];function O(P){var b;for(let st=0;st<j.length;st++){const ut=j[st];ut.afterT>=P||(j.splice(st--,1),(a[b=ut.player]??(a[b]=[])).push(ut.move),_[ut.player]=ut.move,g[ut.player]=Y(ut.move,ut.player),T({player:ut.player,at:ut.faceBall,t0:ut.move.t0}),T({player:ut.player,at:ut.faceSettle,t0:ut.arrival}),r[ut.player]=[...ut.move.to])}}function nt(P,b,st){let ut=[...r[P]],X=[...r[P]];const Et=_[P];let Pt=Math.max(Et?Et.t0+we(Et):0,y[P]??0),Tt=-1/0,zt=null;for(let $=b+1;$<K.length;$++){const _t=K[$];if(_t.t>=st)break;if((_t.type==="pass"?_t.from:_t.player)!==P)continue;if(_t.type!=="move"){zt=`${_t.type} at t=${_t.t}`;break}const At=t.groups[_t.gait??"jog"]??t.groups.jog,dt=t.clips[Mn(At,P,_t.t)].speed??Rn,Ot={from:ut,to:[..._t.to],t0:_t.t,cruise:dt,accel:Ln},jt=_t.t+we(Ot);Pt=Math.max(Pt,jt),ut=[..._t.to],X=jt>st?En(Ot,st).pos:[..._t.to],Tt=_t.t}return{expected:ut,atArrival:X,busyUntil:Pt,afterT:Tt,blocked:zt}}function Y(P,b){const st=zA(P,s).map(X=>({player:b,clip:Mn(t.groups[X.gait],b,P.t0),t0:X.t0,loopUntil:X.t1})),ut=S[b];if(ut){let X=1/0;for(const Et of st)Et.t0>ut.span.t0+1e-9&&Et.t0<ut.span.end-1e-9&&(X=Math.min(X,Et.t0));X<1/0&&Q(b,X)}return c.push(...st),st}function J(P,b,st="event"){(Le[P]??0)>b&&console.warn(`[engine3d] ${P} is on the ground until t=${Le[P].toFixed(2)}s but has a ${st} at t=${b} — schedule it later`);const ut=_[P];if(!ut)return;const X=ut.t0+we(ut);if(b<X){const Et=`buildSchedule: player ${P} has an event at t=${b} while still moving from a move started at t=${ut.t0} (in flight until t=${X.toFixed(3)})`;if(Jt.has(P))console.warn(`[engine3d] ${Et} — he fetched a free ball, so where the engine left him is its own estimate: this warns instead of throwing; schedule it later`);else throw new Error(Et)}}function ht(P){let b=null,st=-1/0;for(const ut of p)ut.t<=P&&ut.t>=st&&(b=ut.player,st=ut.t);return b}const Vt=[];function tt(P,b,st){const ut=i.balls??[],X=At=>At.carrier&&r[At.carrier]?Vn(r[At.carrier],R[At.carrier]??0):Qf(At,b);let Et=-1,Pt=1/0;const Tt=r[P];if(ut.forEach((At,dt)=>{if(Vt.some(Ft=>Ft.take===dt))return;const Ot=X(At),jt=Math.hypot(Ot[0]-Tt[0],Ot[1]-Tt[1]);jt<Pt&&(Pt=jt,Et=dt)}),Et<0||Pt>lh){const At=ut.length?Et<0?"every spare has already been used":`the nearest is ${Pt.toFixed(1)} m away (needs ${lh} m)`:"this drill has no balls[]";console.warn(`[engine3d] ${st} by ${P} at t=${b.toFixed(2)}s is flagged newBall, but there is no spare ball to take: ${At} — played with the ball already in play`);return}const zt=ht(b),$=zt?qi(l,zt,b):null,_t=$?[...$.carry]:zt&&r[zt]?Vn(r[zt],R[zt]??0):pa(o,n,b).at,xt=X(ut[Et]);Vt.push({t:b,drop:_t,take:Et,at:xt}),p.push({t:b,player:P}),l.push({player:P,at:b,carry:xt}),y[P]=b}const rt=Object.fromEntries(i.players.map(P=>[P.id,P.team]));function ot(P,b,st,ut,X){const Et=ht(ut);if(!Et||Et===P||oe.has(P)||rt[P]==="coach"||rt[Et]===rt[P])return null;const Pt=r[Et]?[...r[Et]]:pa(o,n,ut).at;if(!ji(b,Pt)||!ji(b,st))return null;const Tt=Ge(b,st),zt=Vi(Ge(Pt,b),Tt),$=Math.hypot(Pt[0]-b[0],Pt[1]-b[1])<=lE?uE(zt,X):null;if($&&t.clips[$.id]){const xt=Tt-$.axis,At=Math.hypot(Pt[0]-b[0],Pt[1]-b[1])||1;return{clip:$.id,ball:[b[0]+At*Math.sin(xt),b[1]+At*Math.cos(xt)]}}const _t=hE(zt,X);return _t&&t.clips[_t]?{clip:_t,ball:Pt}:null}const Z={};for(const P of i.events)P.type==="move"&&(Z[Mt=P.player]??(Z[Mt]=[])).push(P.t);function bt(P,b,st){for(const ut of G){const X=ut.id;if(!at.length||ht(P)===X||!t.clips[la.left.id]||!t.clips[la.right.id])continue;const Et=_[X],Pt=Math.max(P,It[X]??0,Et?Et.t0+we(Et):0);if(d.some(Zt=>Zt.player===X))continue;const Tt=at.reduce((Zt,M)=>Math.hypot(M.at[0]-ut.start[0],M.at[1]-ut.start[1])<Math.hypot(Zt.at[0]-ut.start[0],Zt.at[1]-ut.start[1])?M:Zt,at[0]),zt=Tt.at,$=Tt.sideways?1:0,_t=Tt.sideways?0:1,xt=IS(kt,e,Math.abs(r[X][_t]-zt[_t]),Tt.halfW),dt=zt[$]+Math.min(xt,Math.max(-xt,(st[$]-zt[$])*CS))-r[X][$],Ot=Ge(zt,[i.pitch.width/2,i.pitch.length/2]),jt=Tt.sideways?-Math.sin(Ot):Math.cos(Ot),Ft=LS(dt,la[dt*jt>0?"left":"right"].dist*kt,Math.sign(jt)||1);if(!Ft)continue;const pe=la[Ft.side],yt=Math.min(b,i.duration)-Ft.steps*pe.duration;if(yt<Pt-1e-9||(Z[X]??[]).some(Zt=>Zt>=yt-1e-9))continue;const Te=Math.sign(dt)*pe.dist*kt;for(let Zt=0;Zt<Ft.steps;Zt++){const M=[...r[X]],B=[...M];B[$]=M[$]+Te;const U=Eh(M,B,yt+Zt*pe.duration,pe.duration);(a[X]??(a[X]=[])).push(U),r[X]=[...U.to],_[X]=U}c.push({player:X,clip:pe.id,t0:yt,loopUntil:yt+Ft.steps*pe.duration}),g[X]=[]}}function Gt(P,b){var Et;const st=(Et=i.players.find(Pt=>Pt.id===P))==null?void 0:Et.start;if(!st||!at.length)return!1;let ut=at[0].at,X=1/0;for(const Pt of at){const Tt=Math.hypot(Pt.at[0]-st[0],Pt.at[1]-st[1]);Tt<X&&(X=Tt,ut=Pt.at)}return Math.hypot(b[0]-ut[0],b[1]-ut[1])<=nA*kt}function te(P,b){const st=_[P];if(!st||st.endSpeed)return;const ut=st.t0+we(st);if(b-ut>=ca)return;st.endSpeed=Ms;const X=st.t0+we(st);for(const Et of g[P]??[]){const Pt=c.indexOf(Et);Pt>=0&&c.splice(Pt,1)}if(g[P]=Y(st,P),X>b-Ri){if(Jt.has(P)){console.warn(`[engine3d] player ${P}'s move started at t=${st.t0} still arrives at t=${X.toFixed(3)}, less than ${Ri}s before their action at t=${b} — he fetched a free ball, so this warns instead of throwing; schedule it later`);return}throw new Error(`buildSchedule: player ${P}'s move started at t=${st.t0} still arrives at t=${X.toFixed(3)} even flowing into their action at ${Ms} m/s, less than ${Ri}s before their action at t=${b} — move the event later or start the approach move earlier`)}}function fe(P,b,st,ut,X){const Et=_[P],Pt=Et?Et.t0+we(Et):0;if(Et&&(Et.endSpeed!==void 0||b-Pt<ca))return null;const Tt=VE(r[P],st,X),zt=t.groups.walk,$=zt!=null&&zt.length?t.clips[zt[0]].speed??Rn:Rn,_t={from:[...r[P]],to:Tt,t0:0,cruise:$,accel:Ln};let xt=b-ut-we(_t);return xt<Math.max(Pt,y[P]??0)||!H(P,xt)?null:(_t.t0=xt,(a[P]??(a[P]=[])).push(_t),X&&m.add(_t),_[P]=_t,g[P]=Y(_t,P),r[P]=[...Tt],xt)}function re(P,b,st){const ut=pa(o,n,b).at,X=Ge(ut,st),Et=[ut[0]-Fe*Math.sin(X),ut[1]-Fe*Math.cos(X)],Pt=Math.hypot(Et[0]-r[P][0],Et[1]-r[P][1]);if(Pt<jS){r[P]=[...Et];return}const Tt=_[P],zt=Tt?Tt.t0+we(Tt):0,$=Math.max(zt,y[P]??0,0);let _t;for(let xt=Pt<Sh?0:1;xt<fa.length;xt++){const At=t.groups[fa[xt]]??t.groups.jog,dt=t.clips[Mn(At,P,b)].speed??Rn;if(_t={from:[...r[P]],to:Et,t0:0,cruise:dt,accel:Ln,endSpeed:Ms},_t.t0=b-Ri-we(_t),_t.t0>=$)break}_t.t0<$&&(console.warn(`[engine3d] dead-ball run-up for ${P} at t=${b.toFixed(2)}s wants to start at t=${_t.t0.toFixed(2)}s but he is not free until t=${$.toFixed(2)}s — he arrives late on the ball; schedule the strike later`),_t.t0=$),H(P,_t.t0),(a[P]??(a[P]=[])).push(_t),_[P]=_t,g[P]=Y(_t,P),r[P]=[...Et]}function Pe(P,b,st){const ut=pa(o,n,b);{const At=Ah(ut.at,gt,tA*kt);if(Math.hypot(At[0]-ut.at[0],At[1]-ut.at[1])>1e-6){const dt=o.filter(Ot=>Ot.t0<=b&&Math.hypot(Ot.to[0]-ut.at[0],Ot.to[1]-ut.at[1])<1e-9);if(dt.length){for(const Ot of dt)Math.hypot(Ot.from[0]-ut.at[0],Ot.from[1]-ut.at[1])<1e-9&&(Ot.from=[...At]),Ot.to=[...At];ut.at=At}}}const X=ht(b);X&&X!==P&&p.push({t:b,player:null});const Et=ut.moving?ut.restT+rA:-1/0;let Pt=null;for(let At=st+1;At<K.length;At++){const dt=Bt[At];if(!(!dt||dt.actor!==P)){dt.t-b<=Ss+3&&(Pt=dt.target);break}}let Tt=wh(r[P],ut.at,Pt);if(Tt.stepTo){const At=Ah(Tt.stepTo,gt,eA*kt),dt=[At[0]-ut.at[0],At[1]-ut.at[1]];if(Math.hypot(dt[0],dt[1])>1e-6){const Ot=$e(dt),jt=Fe+1,Ft=wh([ut.at[0]+jt*Ot[0],ut.at[1]+jt*Ot[1]],ut.at,Pt);Ft.stepTo&&ct(Ft.stepTo)&&(Tt=Ft)}}let zt=1/0;for(let At=st+1;At<K.length;At++){const dt=K[At];if((dt.type==="pass"?dt.from:dt.player)===P){zt=dt.t;break}}let $=b;if(Tt.stepTo){const At=Math.hypot(Tt.stepTo[0]-r[P][0],Tt.stepTo[1]-r[P][1]);let dt;for(let Ot=At<Sh?0:1;Ot<fa.length;Ot++){const jt=t.groups[fa[Ot]]??t.groups.jog,Ft=t.clips[Mn(jt,P,b)].speed??Rn;if(dt={from:[...r[P]],to:Tt.stepTo,t0:b,cruise:Ft,accel:Ln,endSpeed:Ms},b+we(dt)+Jn+Ri<=zt)break}if(Et>b+we(dt)){const Ot=Et-b,jt=Math.hypot(Tt.stepTo[0]-dt.from[0],Tt.stepTo[1]-dt.from[1]),Ft=Ln*Ln*Ot*Ot-4*Ln*jt,pe=Ft>0?(Ln*Ot-Math.sqrt(Ft))/2:dt.cruise,yt=(t.clips[Mn(t.groups.walk,P,b)].speed??sl)*$a;dt={...dt,cruise:Math.max(Math.min(pe,dt.cruise),yt),endSpeed:0}}(a[P]??(a[P]=[])).push(dt),Jt.set(P,b),_[P]=dt,g[P]=Y(dt,P),$=b+we(dt),r[P]=[...Tt.stepTo]}$=Math.max($,Et),T({player:P,at:[...ut.at],t0:Math.max(b,v[P]??0),lock:[$-yn,$+yn]});const _t=At=>{for(const dt of g[P]??[]){const Ot=c.indexOf(dt);dt.t0>=At?Ot>=0&&c.splice(Ot,1):(dt.loopUntil??0)>At&&(dt.loopUntil=At)}};if(oe.has(P)&&Gt(P,ut.at)){const At=mn.scoop[0],dt=$-At.contact;return dt<b&&console.warn(`[engine3d] keeper ${P}'s scoop at t=${$.toFixed(2)}s wants to start at t=${dt.toFixed(2)}s, before his collect at t=${b.toFixed(2)}s — schedule the collect earlier`),_t(Math.max(dt,0)),c.push({player:P,clip:At.id,t0:Math.max(dt,0),contact:At.contact}),T({player:P,at:[...Tt.faceAt],t0:$}),p.push({t:$,player:P}),l.push({player:P,at:$,carry:[...ut.at],hand:{height:Hn*kt,from:iA*kt,rise:mh,follow:!0}}),y[P]=$,It[P]=Math.max(dt,0)+At.duration+As,$}const xt=Mn(t.groups.pass,P,$);return _t($-(t.clips[xt].ballContact??0)),c.push({player:P,clip:xt,t0:$-(t.clips[xt].ballContact??0)}),o.push({from:[...ut.at],to:Tt.set,t0:$,duration:Jn,style:"ground"}),T({player:P,at:[...Tt.faceAt],t0:$}),p.push({t:$,player:P}),l.push({player:P,at:$+Jn,carry:Tt.set}),y[P]=$+Jn,$+Jn}const G=i.players.filter(P=>P.role==="keeper"),kt=e,oe=new Set(G.map(P=>P.id));i.players.forEach(P=>R[P.id]=P.role==="keeper"?Ge(P.start,n):0);const me=((Ht=i.keeper)==null?void 0:Ht.outcome)==="save",It={},Le={},Jt=new Map,L={},E={},K=[...i.events].sort((P,b)=>P.t-b.t);if(i.ball&&!i.ball.static){const P=n,b=i.players.reduce((X,Et)=>Math.hypot(Et.start[0]-P[0],Et.start[1]-P[1])<Math.hypot(X.start[0]-P[0],X.start[1]-P[1])?Et:X,i.players[0]),st=K.find(X=>X.type!=="move"||X.player===(b==null?void 0:b.id)&&oe.has(X.player)),ut=st?st.type==="pass"?st.from:st.player:null;if(!((st==null?void 0:st.type)==="collect"||((st==null?void 0:st.type)==="pass"||(st==null?void 0:st.type)==="shoot")&&st.deadBall))if(ut&&oe.has(ut))p.push({t:0,player:ut}),y[ut]=0,(st==null?void 0:st.type)==="pass"&&!!st.fromFeet||l.push({player:ut,at:0,carry:[...n],hand:{height:Hn*kt,follow:!0}});else{const X=i.players.filter(Tt=>Tt.role!=="keeper"),Et=X.length?X:i.players,Pt=Et.reduce((Tt,zt)=>Math.hypot(zt.start[0]-n[0],zt.start[1]-n[1])<Math.hypot(r[Tt.id][0]-n[0],r[Tt.id][1]-n[1])?zt:Tt,Et[0]).id;p.push({t:0,player:Pt}),y[Pt]=0}}const at=(i.equipment??[]).filter(P=>P.type==="goal").map(P=>({at:P.at,halfW:ns(P,Ka),sideways:P.facing==="e"||P.facing==="w"})),gt=sA(i.equipment,e),ct=P=>P[0]>=0&&P[0]<=i.pitch.width&&P[1]>=0&&P[1]<=i.pitch.length,Qt=P=>gt.every(b=>Math.hypot(b[0]-P[0],b[1]-P[1])>=wa*kt),Rt={};i.players.forEach(P=>Rt[P.id]=[...P.start]);const Bt=K.map(P=>{if(P.type==="move")return Rt[P.player]=[...P.to],null;if(P.type==="dribble")return Rt[P.player]=[...P.to],{actor:P.player,target:[...P.to],t:P.t};if(P.type==="collect"||P.type==="tackle")return null;const b=P.type==="pass"?P.from:P.player;P.deadBall&&(Rt[b]=[...n]);const st=P.type==="pass"?[...Rt[P.to]]:P.flightStyle==="ground"?[...P.at]:TA(Rt[P.player],P.at,at,P.corner,e);return{actor:b,target:st,t:P.t}});for(let P=0;P<K.length;P++){const b=K[P];O(b.t);const st=b.type==="pass"?b.from:b.player;if(b.newBall&&tt(st,b.t,b.type),b.type!=="dribble"&&b.type!=="move"&&delete w[st],b.type==="move"){J(b.player,b.t,b.type);const X=oe.has(b.player)&&(((ce=(se=qi(l,b.player,b.t))==null?void 0:se.hand)==null?void 0:ce.height)??0)>0;ht(b.t)===b.player&&!X&&console.warn(`[engine3d] move event for ${b.player} at t=${b.t.toFixed(2)}s starts while they hold the ball (plain moves don't carry): the ball stays parked at its rest point instead of following — pass first, or use a dribble event`);const Et=t.groups[b.gait??"jog"]??t.groups.jog,Pt=t.clips[Mn(Et,b.player,b.t)].speed??Rn,Tt=x[b.player],$={from:Tt&&b.t<Tt.t0?[...Tt.at]:[...r[b.player]],to:b.to,t0:b.t,cruise:Pt,accel:Ln},_t=ot(b.player,$.from,b.to,b.t,Pt),xt=_t?null:(()=>{const At=rl(s,Pt);if((At==null?void 0:At.gait)!=="run"&&(At==null?void 0:At.gait)!=="sprint"||!t.clips[fi.turn_to_run_a.id]||oe.has(b.player)||A(b.player)>b.t+1e-9||!ji($.from,b.to))return null;const dt=Vi(R[b.player]??0,Ge($.from,b.to));return Math.abs(dt)>=Gh?{delta:dt,gait:At.gait}:null})();if((a[Wt=b.player]??(a[Wt]=[])).push($),_[b.player]=$,g[b.player]=Y($,b.player),_t){for(const dt of g[b.player]??[]){const Ot=c.indexOf(dt);Ot>=0&&c.splice(Ot,1)}const At={player:b.player,clip:_t.clip,t0:b.t,loopUntil:b.t+we($)};c.push(At),g[b.player]=[At],T({player:b.player,at:_t.ball,t0:b.t,until:b.t+we($)})}else{if(xt){const At=Math.abs(xt.delta)>rE,dt=xt.gait==="run"?fi.turn_180_a:null,Ot=At&&dt&&t.clips[dt.id]?dt:fi.turn_to_run_a,jt=Ot.id===fi.turn_to_run_a.id?iE:0,Ft=Ot.id===fi.turn_to_run_a.id?sE:N(Ot,jt),pe=R[b.player]??0;k(b.player,Ot,b.t,jt,pe,pe+xt.delta,Ft);const yt=b.t+Ft;g[b.player]=(g[b.player]??[]).filter(Te=>{if(Te.t0>=yt-1e-9)return!0;if((Te.loopUntil??1/0)<=yt+1e-9){const Zt=c.indexOf(Te);return Zt>=0&&c.splice(Zt,1),!1}return Te.t0=yt,!0})}T({player:b.player,at:b.to,t0:b.t})}r[b.player]=[...b.to]}else if(b.type==="dribble"){J(b.player,b.t,b.type),ht(b.t)!==b.player&&console.warn(`[engine3d] dribble event for ${b.player} at t=${b.t.toFixed(2)}s but they don't hold the ball — the touch chain plays anyway; fix the authoring`);const X=b.gait??"jog",Et=t.groups[X]??t.groups.jog,Pt=t.clips[Mn(Et,b.player,b.t)].speed??Rn,Tt=Ge(r[b.player],b.to),zt=(((de=(ve=qi(l,b.player,b.t))==null?void 0:ve.hand)==null?void 0:de.height)??0)>0,$=zt?sp(l,b.player,b.t):0,_t=zt?b.t+_h:b.t,xt={from:[...r[b.player]],to:[...b.to],t0:_t,cruise:Pt,accel:Ln};let At=null;for(let et=P+1;et<K.length;et++){const lt=Bt[et];if(!(!lt||lt.actor!==b.player)){At={target:lt.target,t:lt.t};break}}const dt=_t+we(xt);let Ot=null;for(let et=P+1;et<K.length;et++){const lt=K[et];if((lt.type==="pass"?lt.from:lt.player)===b.player){Ot=lt;break}}let jt=null;if((Ot==null?void 0:Ot.type)==="dribble"&&Ot.t-dt<=Ss){const et=Vi(Tt,Ge(b.to,Ot.to)),lt=eE(et,X),ft=lt?fi[lt]:null;if(ft&&t.clips[ft.id]){const W=ft.standing?dt:_t+we({...xt,endSpeed:Ms});Ot.t-W>=N(ft)-1e-9&&(jt={c:ft,delta:et})}}At&&At.t-dt<ca&&!(jt!=null&&jt.c.standing)&&(xt.endSpeed=Ms),jt&&k(b.player,jt.c,Ot.t-N(jt.c),0,Tt,Tt+jt.delta),(a[Ee=b.player]??(a[Ee]=[])).push(xt),_[b.player]=xt,g[b.player]=Y(xt,b.player),T({player:b.player,at:[...b.to],t0:b.t});let Ft=null;for(const et of l)et.player===b.player&&(!Ft||et.at>Ft.at)&&(Ft=et);Ft&&Ft.at>b.t+1e-9&&console.warn(`[engine3d] dribble for ${b.player} at t=${b.t.toFixed(2)}s starts during their settle (ends t=${Ft.at.toFixed(2)}s): the first touch cuts the settle short — schedule it later`);let pe=Ft?[...Ft.carry]:Vn(r[b.player],Tt);zt&&(pe=Vn(r[b.player],Tt),l.push({player:b.player,at:b.t,carry:[...pe],hand:{height:0,from:$,rise:_h,follow:!0}}),y[b.player]=b.t);const yt=At&&At.t-dt<=Ss?Vn(b.to,Ge(b.to,At.target)):Vn(b.to,Tt),Te=ti(b.player)%2===0?1:-1;let Zt=Te,M=!1;for(let et=P+1;et<K.length;et++){const lt=K[et];if((lt.type==="pass"?lt.from:lt.player)===b.player){if(lt.type==="dribble"&&lt.t-dt<=Ss){const W=$e([b.to[0]-xt.from[0],b.to[1]-xt.from[1]]),vt=$e([lt.to[0]-b.to[0],lt.to[1]-b.to[1]]),St=W[0]*vt[1]-W[1]*vt[0],mt=St<0?1:-1;Math.abs(St)>.05&&mt===-Te&&(Zt=mt),M=Math.abs(Vi(Ge(xt.from,b.to),Ge(b.to,lt.to)))>Tc}break}}const B=w[b.player],U=!!B&&_t-B.end<=Ss&&Math.abs(Vi(B.h,Tt))>Tc;w[b.player]={h:Tt,end:dt};const z=Object.entries(r).filter(([et])=>et!==b.player).map(([,et])=>[...et]),D=GA(xt,pe,yt,Fh[X]??Fh.jog,Zt,{turnIn:U,turnOut:M,others:z});o.push(...D.flights),l.push({player:b.player,at:D.restEnd,carry:[...yt]}),y[b.player]=D.restEnd,r[b.player]=[...b.to],bt(D.restEnd,((q=K[P+1])==null?void 0:q.t)??i.duration,[...yt])}else if(b.type==="collect")J(b.player,b.t,b.type),Pe(b.player,b.t,P);else if(b.type==="tackle"){J(b.player,b.t,b.type),te(b.player,b.t);const X=b.from;ht(b.t)!==X&&console.warn(`[engine3d] tackle by ${b.player} at t=${b.t.toFixed(2)}s from ${X}, but ${ht(b.t)??"nobody"} holds the ball — plays anyway; fix the authoring`);const Et=oe.has(b.player)&&!!t.clips[da.id],Pt=!Et&&b.style!=="slide"&&!!t.clips[ha.id],Tt=b.t+(Et?da:Pt?ha:qo[0]).contact;let zt=null,$=-1/0;for(const jt of l)jt.player===X&&jt.at<=Tt&&jt.at>$&&($=jt.at,zt=[...jt.carry]);if(zt||(zt=Vn(r[X],Ge(r[X],r[b.player]))),Pt){const jt=YS*kt,Ft=$e([r[b.player][0]-r[X][0],r[b.player][1]-r[X][1]]);if(Math.hypot(r[b.player][0]-r[X][0],r[b.player][1]-r[X][1])<jt){const pe=[r[X][0]+jt*Ft[0],r[X][1]+jt*Ft[1]],yt=_[b.player];if(yt&&Math.hypot(yt.to[0]-r[b.player][0],yt.to[1]-r[b.player][1])<1e-6){const Te=(t.clips[Mn(t.groups.sprint??t.groups.run??t.groups.jog,b.player,b.t)].speed??yt.cruise)*pi,Zt=Math.min(we(yt),Math.max(Tt-yt.t0,.2));yt.to=pe;for(let M=0;M<8&&we(yt)>Zt+1e-6&&yt.cruise<Te;M++)yt.cruise=Math.min(Te,yt.cruise*we(yt)/Zt);for(const M of g[b.player]??[]){const B=c.indexOf(M);B>=0&&c.splice(B,1)}g[b.player]=Y(yt,b.player),r[b.player]=Tt<yt.t0+we(yt)?En(yt,Tt).pos:pe}else r[b.player]=pe}}const _t=Pt?Math.hypot(r[X][0]-r[b.player][0],r[X][1]-r[b.player][1]):Math.hypot(zt[0]-r[b.player][0],zt[1]-r[b.player][1]),xt=Et?da.reach:Pt?ha.reach+Fe:JS;_t>xt*kt&&console.warn(`[engine3d] tackle by ${b.player} at t=${b.t.toFixed(2)}s: the ball is ${_t.toFixed(2)} m away (reach ${(xt*kt).toFixed(2)}) — move the tackler closer first`),Pt&&_t<wa*kt-1e-6&&console.warn(`[engine3d] tackle by ${b.player} at t=${b.t.toFixed(2)}s: he is ${_t.toFixed(2)} m from ${X}, inside a body width (${(wa*kt).toFixed(2)} m at this body scale) — the two of them draw as one`);const At=Et?da:Pt?ha:qo[Math.abs(ti(b.player)+Math.floor(b.t*10))%qo.length],dt=b.t+At.contact,Ot={player:b.player,clip:At.id,t0:b.t,contact:At.contact};if(c.push(Ot),T({player:b.player,at:zt,t0:Math.max(b.t-rr,0,v[b.player]??0),lock:[b.t,b.t+At.duration]}),Et){const jt=Rs(t,Ot),Ft=Vn(r[b.player],Ge(r[b.player],zt));p.push({t:dt,player:b.player});const pe=Zo(r[b.player],r[X],zt);l.push({player:b.player,at:dt,carry:[...zt],hand:{height:ua*kt,follow:!0,bone:pe}}),l.push({player:b.player,at:jt,carry:Ft,hand:{height:Hn*kt,from:ua*kt,rise:jo,follow:!0,bone:pe}}),y[b.player]=dt,It[b.player]=b.t+At.duration+As}if(!Et){const jt=$e([r[X][0]-r[b.player][0],r[X][1]-r[b.player][1]]),Ft=[-jt[1],jt[0]],pe=(zt[0]-r[X][0])*Ft[0]+(zt[1]-r[X][1])*Ft[1]>=0?1:-1,yt=Zt=>[r[X][0]+pe*Zt*kt*Ft[0]+yh*kt*jt[0],r[X][1]+pe*Zt*kt*Ft[1]+yh*kt*jt[1]];let Te=yt(vh);if(Pt){let Zt=Th(r[X],zt,Te);for(let M=vh+.05;M<=1&&!(Zt>=$S*kt);M+=.05){const B=yt(M),U=Th(r[X],zt,B);U>Zt&&(Zt=U,Te=B)}}o.push({from:zt,to:Te,t0:dt,duration:Mh,style:"ground",pop:!0}),p.push({t:dt,player:null})}if(Pt){const jt=qS.filter(Ft=>t.clips[Ft]);if(jt.length){const Ft=jt[Math.abs(ti(X)+Math.floor(b.t*10))%jt.length];c.push({player:X,clip:Ft,t0:dt}),T({player:X,at:[...zt],t0:Math.max(dt,v[X]??0),until:dt+t.clips[Ft].duration})}}else if(t.clips[xh]){let jt=1/0;for(let Zt=P+1;Zt<K.length;Zt++){const M=K[Zt];if((M.type==="pass"?M.from:M.player)===X){jt=M.t;break}}const Ft=$e([r[X][0]-zt[0],r[X][1]-zt[1]]),pe=KS*kt,yt=dt+ZS,Te=Eh([...r[X]],[r[X][0]+pe*Ft[0],r[X][1]+pe*Ft[1]],yt,ar);if(yt+ar+Ri<=jt){(a[X]??(a[X]=[])).push(Te),_[X]=Te,c.push({player:X,clip:xh,t0:yt,loopUntil:yt+ar}),g[X]=[];const Zt=Math.max(yt,v[X]??0);Zt<yt+ar&&T({player:X,at:[...zt],t0:Zt,until:yt+ar}),r[X]=[...Te.to]}}Et||Pe(b.player,Math.max(Rs(t,Ot),dt+Mh),P)}else{const X=b.type==="pass"?b.from:b.player,Et=L[X],Pt=!!Et&&b.t>=Et.at-ma&&b.t-Et.at<=Ko;Et&&!Pt&&console.warn(`[engine3d] header for ${X} at t=${b.t} does not meet the cross at their forehead (t=${Et.at.toFixed(2)}s) — played as an ordinary ${b.type}`),delete L[X];const Tt=E[X],zt=!!Tt&&!!b.firstTime&&!Pt;b.firstTime&&!Tt&&!Pt&&console.warn(`[engine3d] firstTime ${b.type} for ${X} at t=${b.t} has no ball arriving at their boot — played as an ordinary strike`),delete E[X],Pt&&b.t-Et.at>Ch&&console.warn(`[engine3d] header for ${X} at t=${b.t} pulled to the ball's arrival (t=${Et.at.toFixed(2)}s) — the ball cannot wait in the air`),J(X,b.t,b.type),Pt||te(X,b.t);const $=b.type==="pass"?r[b.to]:Bt[P].target,_t=b.type==="shoot"&&b.flightStyle!=="ground",xt=_t?yA:mS,At=_t?MA:rr;b.deadBall&&!Pt&&re(X,b.t,$);const dt=oe.has(X)&&ht(b.t)===X&&(((it=(Dt=qi(l,X,b.t))==null?void 0:Dt.hand)==null?void 0:it.height)??0)>0,Ot=!dt&&(b.style==="throw"||b.style==="roll")?b.style:null;oe.has(X)&&(It[X]??0)>b.t&&console.warn(`[engine3d] keeper ${X} is busy until t=${It[X].toFixed(2)}s (save / catch clip still playing) but has a ${b.type} at t=${b.t} — schedule it later`);const jt=W=>{if(!Pt)return null;const vt=Math.hypot(W[0]-D[0],W[1]-D[1]);return vt>=mA?{style:"headed",loft:Yo(vt,kt)}:null};let Ft=b.t;if(b.type==="shoot"&&!b.touch){const W=_[X],vt=W?W.t0+we(W):-1/0;W&&(W.endSpeed??0)>0&&b.t-vt>Ph&&b.t-vt<ca&&(Ft=vt-Ph)}let pe="",yt,Te,Zt=0,M=null,B=null;if(Pt)yt=Et.at,Zt=Et.height;else if(zt)pe=Mn(t.groups[_t?"shoot":"pass"],X,Ft),Te=t.clips[pe].ballContact??0,Ft=Tt.at-Te,yt=Tt.at,Ft<0&&console.warn(`[engine3d] first-time ${b.type} for ${X} wants its cue at t=${Ft.toFixed(2)}s; the player clamps it to 0, so its contact frame will miss the ball — schedule the pass into them later`);else if((dt||Ot)&&(b.type==="pass"||b.flightStyle==="ground")){M=b.style??aA(Math.hypot($[0]-r[X][0],$[1]-r[X][1]));const W=Ot?RS[Ot]:mn[M];pe=W.id,Te=W.contact,yt=b.t+W.contact,Zt=M==="roll"?0:W.release*kt,It[X]=b.t+W.duration+As}else{const W=_[X],vt=b.type==="shoot"&&W&&(W.endSpeed??0)>0&&Ft<=W.t0+we(W)+1e-9?En(W,Ft).speed:0;B=fe(X,Ft,$,xt,b.type==="pass"||b.type==="shoot"&&!!b.touch),vt>SA&&t.clips[Ra.id]&&!(b.type==="shoot"&&b.touch)?(pe=Ra.id,Te=Ra.contact):pe=Mn(t.groups[_t?"shoot":"pass"],X,b.t),yt=Ft+(Te??t.clips[pe].ballContact??0)}let U=null;Pt||(U={player:X,clip:pe,t0:Ft,...Te!==void 0?{contact:Te}:{}},c.push(U),V({player:X,at:[...$],t0:Math.max(Ft-At,0,v[X]??0),lock:[Ft,yt+yn],until:yt+yn,headUntil:yt-pE},Math.min(Ft,B??1/0)));const z=Ge(r[X],$),D=Pt?[...Et.from]:zt?[...Tt.from]:Vn(r[X],z),et=Ot?VS:HS,lt=b.type==="pass"&&oe.has(b.to)&&!b.toFeet?b.flight:0,ft=b.type!=="pass"?0:M==="throw"?Math.max(.4,lt,Math.hypot($[0]-D[0],$[1]-D[1])/et):b.style==="roll"?Math.max(b.flight,Math.hypot($[0]-D[0],$[1]-D[1])/WS):b.flight;if(!Pt&&!zt){const W=Math.max(Ft-uS,y[X]??0);W>yt&&console.warn(`[engine3d] departure window for ${X} is inverted (starts t=${W.toFixed(2)}s, ball contact t=${yt.toFixed(2)}s): the return pass strikes during the settle — schedule it later`),h.push({player:X,windowStart:W,contact:yt,heading:z,...M?{toHeight:Zt}:{}})}if(b.type==="pass"&&oe.has(b.to)&&!b.toFeet){const W=yt+ft,vt=nt(b.to,P,W);vt.blocked&&console.warn(`[engine3d] ball to the keeper ${b.to} at t=${b.t}: their authored ${vt.blocked} runs during the flight, so where they stand at t=${W.toFixed(2)}s cannot be known — the ball is aimed at where they are now; fix the authoring`);const St=vt.atArrival,mt=$e([D[0]-St[0],D[1]-St[1]]),Kt=[St[0]+Fe*mt[0],St[1]+Fe*mt[1]],ne=(b.flightStyle==="clipped"||b.flightStyle==="lofted")&&b.style!=="roll",ie=((pt=b.deflect)==null?void 0:pt.style)==="lofted",Ct=ne?(b.loft??0)>wS||ie?mn.catchHigh:mn.catch:mn.scoop[Math.abs(ti(b.to)+Math.floor(W*10))%mn.scoop.length],Xt=ne?Math.min(Hn*(Ct===mn.catchHigh?2:1),XS)*kt:0,wt=W-Ct.contact;wt<0&&console.warn(`[engine3d] receive cue for ${b.to} wants t0=${wt.toFixed(2)}s; the player clamps it to 0, so its contact frame will miss ball arrival — schedule the pass later or shorten the flight`),wt<vt.busyUntil&&console.warn(`[engine3d] catch cue for ${b.to} at t=${W.toFixed(2)}s wants t0=${wt.toFixed(2)}s but their move is still running (until t=${vt.busyUntil.toFixed(2)}s) — the run will play over the catch; schedule the ball later`),wt<yt&&console.warn(`[engine3d] catch cue for ${b.to} at t=${W.toFixed(2)}s wants t0=${wt.toFixed(2)}s, before the ball leaves ${X} at t=${yt.toFixed(2)}s — the catch would play out on a ball still at the server's boot; lengthen the flight or schedule the ball later`),c.push({player:b.to,clip:Ct.id,t0:wt,contact:Ct.contact});const ye=b.flightStyle==="lofted"?Yo(Math.hypot(Kt[0]-D[0],Kt[1]-D[1]),kt)-(Zt+Xt)/2:M==="throw"?Math.max(Ot?Xo:1.5,b.loft??0):b.loft;if(o.push({from:D,to:Kt,t0:yt,duration:ft,style:M==="kick"?"clipped":ne||M==="throw"?"lofted":"ground",...ye!==void 0?{loft:ye}:{},...Xt?{toHeight:Xt}:{},...Zt?{fromHeight:Zt}:{}}),T({player:b.to,at:[...r[X]],t0:b.t,lock:[W-yn,W+yn]}),b.deflect)o.push(bh(Kt,Xt,b.deflect,W,kt)),y[b.to]=W;else{p.push({t:W,player:b.to});const $t=Zo(r[b.to],r[X],Kt);l.push({player:b.to,at:W,carry:Kt,hand:ne?{height:Hn*kt,from:Xt,rise:jo,follow:!0,bone:$t}:{height:Hn*kt,from:0,rise:mh,follow:!0,bone:$t}}),y[b.to]=W}It[b.to]=wt+Ct.duration+As}else if(b.type==="pass"&&!b.toFeet&&b.flightStyle==="lofted"&&(b.loft??hA)>=gA){const W=yt+ft;let vt=null,St=1/0,mt=!1,Kt=!1,ne;for(let $t=P+1;$t<K.length;$t++){const Yt=Bt[$t],ge=K[$t];if((ge.type==="move"||ge.type==="collect")&&ge.player===b.to&&ne===void 0&&ge.t>=W-ma&&(ne=ge.t),!(!Yt||Yt.actor!==b.to)){vt=Yt.target,St=Yt.t,Kt=ge.type==="pass"||ge.type==="shoot",mt=Kt&&!!ge.header;break}}ne!==void 0&&Kt&&St-W<=Ko&&console.warn(`[engine3d] ${b.to} has a move at t=${ne.toFixed(2)}s between the cross landing on their forehead (t=${W.toFixed(2)}s) and their strike at t=${St} — they cannot run and head it, so the ball is cushioned down and the strike plays from the boot`);const ie=Kt&&ne===void 0&&St>=W-ma&&(St-W<=Ch||mt&&St-W<=Ko),Ct=nt(b.to,P,W);Ct.blocked&&!ie&&console.warn(`[engine3d] cross to ${b.to} at t=${b.t}: their authored ${Ct.blocked} runs during the flight, so where they stand at t=${W.toFixed(2)}s cannot be known — the ball is aimed at where they are now and may land behind them; fix the authoring`);const Xt=_A(Ct.atArrival,D,vt,kt),wt=W-Xt.clip.contact;wt<0&&console.warn(`[engine3d] header cue for ${b.to} wants t0=${wt.toFixed(2)}s; the player clamps it to 0, so its contact frame will miss ball arrival — schedule the cross later or shorten the flight`),wt<Ct.busyUntil&&console.warn(`[engine3d] header cue for ${b.to} wants t0=${wt.toFixed(2)}s but their move is still running (until t=${Ct.busyUntil.toFixed(2)}s) — the wind-up will cut it short; schedule the cross later`),c.push({player:b.to,clip:Xt.clip.id,t0:wt,contact:Xt.clip.contact});const ye=Math.hypot(Xt.contact[0]-D[0],Xt.contact[1]-D[1]);o.push({from:D,to:Xt.contact,t0:yt,duration:ft,style:"lofted",loft:Yo(ye,kt)-(Zt+Xt.height)/2,toHeight:Xt.height,...Zt?{fromHeight:Zt}:{}}),ie?(L[b.to]={at:W,from:Xt.contact,height:Xt.height},T({player:b.to,at:[...vt],t0:Math.max(wt-rr,0,v[b.to]??0),lock:[wt,W+yn],until:W+yn})):(Kt&&St<W-ma?console.warn(`[engine3d] ${b.to}'s own strike at t=${St} is ${(W-St).toFixed(2)}s BEFORE the cross reaches their forehead (t=${W.toFixed(2)}s) — the ball cannot arrive early, so it is cushioned down instead; schedule the strike at the arrival`):mt&&console.warn(`[engine3d] header for ${b.to} at t=${St} is ${(St-W).toFixed(2)}s after the ball arrives (t=${W.toFixed(2)}s) — ignored, cushioned instead`),T({player:b.to,at:[...r[X]],t0:b.t,lock:[W-yn,W+yn]}),o.push({from:Xt.contact,to:Xt.set,t0:W,duration:$o,style:"drop",fromHeight:Xt.height}),T({player:b.to,at:[...Xt.faceAt],t0:W}),p.push({t:W,player:b.to}),y[b.to]=W+$o,l.push({player:b.to,at:W+$o,carry:Xt.set}))}else if(b.type==="pass"){const W=yt+ft,vt=Mn(t.groups.receive,b.to,W),St=t.clips[vt];let mt=null,Kt=1/0,ne=!1;for(let ie=P+1;ie<K.length;ie++){const Ct=K[ie];(Ct.type==="pass"?Ct.from:Ct.player)===b.to&&Kt===1/0&&(Kt=Ct.t);const wt=Bt[ie];if(!(!wt||wt.actor!==b.to)){wt.t-W<=Ss&&(mt=wt.target,ne=(Ct.type==="pass"||Ct.type==="shoot")&&!!Ct.firstTime);break}}if(ne&&mt){const ie=nt(b.to,P,W),Ct=Vn(ie.atArrival,Ge(ie.atArrival,mt));o.push({from:D,to:Ct,t0:yt,duration:ft,style:b.flightStyle==="lofted"?"lofted":b.flightStyle==="clipped"?"clipped":"ground",...b.loft!==void 0?{loft:b.loft}:{},...Zt?{fromHeight:Zt}:{}}),T({player:b.to,at:[...r[X]],t0:b.t,lock:[W-yn,W+yn]}),E[b.to]={at:W,from:Ct},bt(W,((Ut=K[P+1])==null?void 0:Ut.t)??i.duration,Ct)}else{const ie=CA($,D,mt);let Ct=b.t;{const $t=nt(b.to,P,W),Yt=$t.expected,ge=Math.max(b.t,$t.busyUntil),Be=Math.max($t.afterT,b.t),xn=$t.blocked;Ct=ge;const le=Math.hypot(ie.contact[0]-Yt[0],ie.contact[1]-Yt[1]);if(le>hS)if(xn)console.warn(`[engine3d] receive for ${b.to}: the ball lands ${le.toFixed(2)}m away at t=${W.toFixed(2)}s, but their authored ${xn} is in the way — no adjustment step synthesized (the standing stretch stays); fix the authoring`);else{const Ue=$e([ie.contact[0]-Yt[0],ie.contact[1]-Yt[1]]),je=[ie.contact[0]-Fe*Ue[0],ie.contact[1]-Fe*Ue[1]],Oe=t.groups.walk,qe=Oe!=null&&Oe.length?t.clips[Oe[0]].speed??Rn:Rn,vn={from:Yt,to:je,t0:0,cruise:qe,accel:Ln},cn=W-hh-we(vn);cn<ge-1e-9?console.warn(`[engine3d] receive adjustment for ${b.to}: the ${(le-Fe).toFixed(2)}m walk to the contact point would need to start at t=${cn.toFixed(2)}s but they're busy until t=${ge.toFixed(2)}s — skipped (the standing stretch stays)`):(vn.t0=cn,Ct=W-hh,j.push({player:b.to,afterT:Be,move:vn,faceBall:[...D],faceSettle:[...ie.faceAt],arrival:W}))}}const Xt=St.ballContact??0,wt=Math.min(Xt,Math.max(fS,Math.min(dS,pS*ft,W-(Ct+Oa)))),ye=W-wt;ye<0&&console.warn(`[engine3d] receive cue for ${b.to} wants t0=${ye.toFixed(2)}s; the player clamps it to 0, so its contact frame will miss ball arrival — schedule the pass later or shorten the flight`),c.push({player:b.to,clip:vt,t0:ye,...Xt>wt?{offset:Xt-wt}:{}}),o.push({from:D,to:ie.contact,t0:yt,duration:ft,style:M==="throw"||b.flightStyle==="lofted"?"lofted":M==="kick"||b.flightStyle==="clipped"?"clipped":"ground",...M==="throw"?{loft:Math.max(Ot?Xo:1.5,b.loft??0)}:M==="kick"?{loft:Math.max(3,b.loft??0)}:b.loft!==void 0?{loft:b.loft}:{},...Zt?{fromHeight:Zt}:{},...jt(ie.contact)??{}}),o.push({from:ie.contact,to:ie.set,t0:W,duration:Jn,style:"ground"}),T({player:b.to,at:[...r[X]],t0:b.t,lock:[W-yn,W+yn]}),V({player:b.to,at:[...ie.faceAt],t0:W},Kt),p.push({t:W,player:b.to}),y[b.to]=W+Jn,l.push({player:b.to,at:W+Jn,carry:ie.set}),bt(W+Jn,((Nt=K[P+1])==null?void 0:Nt.t)??i.duration,ie.set)}}else if(b.flightStyle==="ground"){const W=Math.hypot($[0]-D[0],$[1]-D[1]),vt=b.flight??(b.touch?Math.sqrt(2*W/hr):M==="throw"?Math.max(.4,W/et):W/vA);if(o.push({from:D,to:[...$],t0:yt,duration:vt,style:b.touch?"push":M==="throw"?"lofted":M==="kick"?"clipped":"ground",...b.touch?{endFrac:0}:{},...M==="throw"?{loft:Ot?Xo:1.5}:M==="kick"?{loft:3}:{},...Zt?{fromHeight:Zt}:{},...jt($)??{}}),b.deflect){const St=Math.hypot(b.deflect.to[0]-$[0],b.deflect.to[1]-$[1]);o.push({from:[...$],to:[...b.deflect.to],t0:yt+vt,style:"ground",duration:zS(W,vt,St)})}}else{const W=Math.hypot($[0]-D[0],$[1]-D[1]),vt=b.flight??W/xA,St=$e([$[0]-D[0],$[1]-D[1]]),mt=[$[0]+Ih*St[0],$[1]+Ih*St[1]],Kt=yt+vt,ne=o.length;o.push({from:D,to:mt,t0:yt,duration:vt,style:"shot",...Zt?{fromHeight:Zt}:{}}),o.push({from:mt,to:mt,t0:Kt,duration:bA,style:"drop"}),bt(((ue=K[P-1])==null?void 0:ue.t)??0,Ft,D);let ie=!1;for(const Ct of G){const Xt=ii=>{const vi=nt(Ct.id,P,ii);if(vi.afterT>-1/0)return vi.atArrival;const kn=_[Ct.id];return kn&&ii<kn.t0+we(kn)?En(kn,ii).pos:[...r[Ct.id]]},wt=yt+dh(Math.max(vt,gh)),ye=fh(yt,vt,mn.dive.left.contact).t0,$t=b.type==="shoot"?b.deflect:void 0,Yt=me||!!$t,ge=Xt(Yt?wt:ye),Be=[$[0]-ge[0],$[1]-ge[1]],xn=Ge(ge,D),le=Yt?oA(ge,xn,D,mt,kt):null;if($t&&!le&&console.warn(`[engine3d] deflect on the shot at t=${b.t} is dropped: ${Ct.id} is ${rp(ge,D,mt).reach.toFixed(2)} m off the ball line at body scale ${kt} (his reach is ${(ip*kt).toFixed(2)} m) — he cannot get a hand to it, so there is nothing to parry; move him or the shot`),!le){if(Math.hypot(Be[0],Be[1])>np*kt)continue;const ii=hp(ge,xn,mt),vi=bS[ii],kn=t.clips[vi],{t0:si,timeScale:is}=fh(yt,vt,mn.dive[ii].contact);if(T({player:Ct.id,at:[...D],t0:Math.max(Ft-rr,0,v[Ct.id]??0),...kn?{lock:[Ft,si+kn.duration/is]}:{}}),kn){c.push({player:Ct.id,clip:vi,t0:si,...is>1?{timeScale:is}:{}});const $n=Xt(si),Vs=cA($n,D,mt,kt),Tr=[Vs[0]-$n[0],Vs[1]-$n[1]],wr=Math.hypot(Tr[0],Tr[1]),dl=Math.min(wr,AS*kt),fl=wr>1e-9?[$n[0]+Tr[0]/wr*dl,$n[1]+Tr[1]/wr*dl]:[...$n],em=Math.min(TS,Math.max(ES,Kt-si));d.push({player:Ct.id,from:$n,to:fl,t0:si,duration:em}),x[Ct.id]={t0:si,at:[...r[Ct.id]]},r[Ct.id]=[...fl]}continue}if(ie)continue;ie=!0;const Ue=o[ne];o.splice(ne+1,1);let je,Oe=le.contact,qe=Hn*kt;if(le.kind==="dive"){Ue.duration=Math.max(Ue.duration,gh),je=yt+dh(Ue.duration);const ii=yt+Ue.duration,vi={player:Ct.id,from:[...ge],to:le.travelTo,t0:je,duration:le.contactOffset};d.push(vi);const kn=ap(vi,ii),si=Math.min(1,(ii-je)/le.contactOffset),is=mn.dive[le.side],$n=si*is.reach*kt,Vs=$e([le.contact[0]-ge[0],le.contact[1]-ge[1]]);Oe=[kn[0]+$n*Vs[0],kn[1]+$n*Vs[1]],qe=(Hn+(is.hand-Hn)*si)*kt,x[Ct.id]={t0:je,at:[...r[Ct.id]]},r[Ct.id]=[...le.travelTo]}else je=Math.max(Ft,yt+Ue.duration-le.contactOffset);const vn=yt+Ue.duration;Ue.to=Oe,Ue.toHeight=qe,c.push({player:Ct.id,clip:le.clip,t0:je,contact:le.contactOffset});const cn=je+le.clipDuration;if(T({player:Ct.id,at:[...D],t0:Math.max(Ft-rr,0,v[Ct.id]??0),lock:[Ft,cn]}),$t){o.push(bh(Oe,qe,$t,vn,kt)),y[Ct.id]=vn,It[Ct.id]=cn+As;continue}p.push({t:vn,player:Ct.id});const Qa=Zo(r[Ct.id],D,Oe);le.kind==="catch"?l.push({player:Ct.id,at:vn,carry:Oe,hand:{height:Hn*kt,follow:!0,bone:Qa}}):(l.push({player:Ct.id,at:vn,carry:Oe,hand:{height:ua*kt,from:qe,rise:DS,follow:!0,bone:Qa}}),l.push({player:Ct.id,at:cn,carry:Oe,hand:{height:Hn*kt,from:ua*kt,rise:jo,follow:!0,bone:Qa}})),y[Ct.id]=vn,It[Ct.id]=cn+As}}if(b.type==="pass"&&!M&&U){const W=t.groups.walk,vt=W!=null&&W.length?t.clips[W[0]].speed??Rn:Rn,St=[r[X][0]+yr*Math.sin(z),r[X][1]+yr*Math.cos(z)],mt=_[X],Kt=mt?mt.t0+we(mt):-1/0;let ne=1/0;for(let $t=P+1;$t<K.length;$t++){const Yt=K[$t];if((Yt.type==="pass"?Yt.from:Yt.player)===X){ne=Yt.t;break}}const ie={from:[...r[X]],to:St,t0:Rs(t,U),cruise:vt,accel:Ln},Ct=ie.t0+we(ie)+Ri<=ne;let Xt=null,wt=null;if(mt&&m.has(mt)&&yt>=Kt&&yt-Kt<=OE&&ol(a[X],yt)<yp){const $t=GE(),Yt={...mt,to:[...mt.to],cruise:Math.max(mt.cruise,$t),endSpeed:$t};Yt.t0=yt-we(Yt),Yt.t0>=mt.t0-1e-9&&Gs(Yt).peak>=$t-1e-9&&(Xt=Yt,wt=Ct?{from:[...r[X]],to:St,t0:yt,cruise:$t,accel:Ba,startSpeed:$t}:WE(r[X],z,$t,ne-yt,yt,ge=>ct(ge)&&Qt(ge)))}if(Xt&&mt){for(const $t of g[X]??[]){const Yt=c.indexOf($t);Yt>=0&&c.splice(Yt,1)}Object.assign(mt,Xt),g[X]=Y(mt,X)}const ye=wt??(Ct?ie:null);ye&&((a[X]??(a[X]=[])).push(ye),_[X]=ye,g[X]=Y(ye,X),r[X]=[...ye.to])}p.push({t:yt,player:null})}const ut=Jt.get(st);ut!==void 0&&ut<b.t&&Jt.delete(st)}O(1/0),p.sort((P,b)=>P.t-b.t),c.sort((P,b)=>P.t0-b.t0),EE(c,a,t);const Se=UE(c,a,t);return{moves:a,flights:o,anims:c,faces:u,departures:h,arrivals:l,dives:d,turns:f,bounces:Se,ballSwaps:Vt,attachTo(P){let b=null;for(const st of p)st.t<=P&&(b=st.player);return b}}}const XE=/^(spine00[1-6]|breast[LR]|shoulder[LR]|upper_arm[LR]|forearm[LR]|hand[LR]|Fingers[LR]|Index[LR]|Thumb[LR])/,Kh=new Map,$h=30;function qE(i,t=0){const e=`${i.uuid}@${t}`;let n=Kh.get(e);return n||(n=i.clone(),n.name=`${i.name}__upper`,n.tracks=n.tracks.filter(s=>XE.test(De.parseTrackName(s.name).nodeName??"")),lg.makeClipAdditive(n,t*$h,n,$h),Kh.set(e,n)),n}function KE(i,t){if(i<0||i>t)return 0;const e=Math.min(1,i/pp),n=Math.min(1,(t-i)/mp);return AE*Math.max(0,Math.min(e,n))}function $E(i,t,e,n=[]){const s=p=>Rs(i,p),r=(p,_)=>vp(t,i,p,_);function a(p,_){let g=0;for(const m of t){if(m.player!==p)continue;const v=s(m);v<=_&&v>g&&(g=v)}return g}const o=new Map,c=new Map,u=new Map,h=new Map,l=dp(i),d=new Map;for(const p of l)for(const _ of i.groups[p.gait]??[])d.set(_,p.gait);function f(p,_,g,m,v){const y=r(p,g),x=y!=null&&y.additive?y:null,w=x?rl(l,v):null,T=w?Mn(i.groups[w.gait],p,x.t0):null,R=x?null:y,I=R??(T?x:null),S=T??(R==null?void 0:R.clip)??yE(wA(i,e.get(p)),p,vE(p,g-a(p,g))),A=o.get(p);if(fE(A,S,R)){const J=i.clips[S],ht=_.mixer.clipAction(_.clips.get(S));ht.reset(),ht.loop=J.loop?2201:2200,ht.clampWhenFinished=!0,R!=null&&R.offset&&(ht.time=R.offset),A&&A.action!==ht&&(A.action.fadeOut(JA(i,A.clip,S)),ht.fadeIn(gp(i,S,A.clip))),ht.play(),o.set(p,{clip:S,offset:R==null?void 0:R.offset,action:ht})}const C=o.get(p).action,N=!!I&&I.timeScale===void 0&&i.clips[S].category==="locomotion",k=N?d.get(S):void 0,H=N?k?XA(l,v,k):{timeScale:WA(v,i.clips[S].speed??Rn),partner:null,weight:0}:null,Q=H!=null&&H.partner&&I?Mn(i.groups[H.partner],p,I.t0):null,V=c.get(p);if(V&&V.clip!==Q&&(V.clip!==S&&(V.action.weight=0,V.action.stop()),c.delete(p)),I)if((R==null?void 0:R.timeScale)!==void 0)C.timeScale=R.timeScale,C.weight=1;else if(H){if(C.timeScale=H.timeScale,C.weight=1-H.weight,Q){let J=c.get(p);if(!J){const tt=_.mixer.clipAction(_.clips.get(Q));tt.reset(),tt.loop=2201,tt.play(),J={clip:Q,action:tt},c.set(p,J)}J.action.weight=H.weight,J.action.timeScale=H.timeScale;const ht=i.clips[S].duration,Vt=i.clips[Q].duration;ht>0&&(J.action.time=C.time/ht%1*Vt)}}else C.timeScale=1,C.weight=1;else{C.weight=1,C.timeScale=jh(p);const J=i.clips[S].duration;C.time=((Wh(p,J)+g*C.timeScale)%J+J)%J}const j=NE(n,p,g),O=h.get(p),nt=j>0?_.clips.get(PE):void 0;if(nt){let J=O;J||(J=_.mixer.clipAction(nt),J.reset(),J.loop=2201,J.timeScale=0,J.play(),h.set(p,J));const ht=nt.duration;J.time=((Wh(p,ht)+g*jh(p))%ht+ht)%ht,J.weight=j,C.weight*=1-j}else O&&(O.weight=0,O.stop(),O.enabled=!1,h.delete(p));const Y=u.get(p);if(x){const J=x.offset??0,ht=Math.max(0,i.clips[x.clip].duration-J),Vt=KE(g-x.t0,ht);let tt=Y;if(!tt||tt.clip!==x.clip||tt.offset!==J){tt&&(tt.action.weight=0,tt.action.stop(),tt.action.enabled=!1);const rt=_.mixer.clipAction(qE(_.clips.get(x.clip),J));rt.reset(),rt.loop=2200,rt.clampWhenFinished=!0,rt.timeScale=0,rt.play(),u.set(p,tt={clip:x.clip,offset:J,action:rt})}tt.action.time=Math.min(i.clips[x.clip].duration,J+Math.max(0,g-x.t0)),tt.action.weight=Vt}else Y&&(Y.action.weight=0,Y.action.stop(),Y.action.enabled=!1,u.delete(p));_.mixer.update(m)}return{applyAnim:f,cueAt:r}}class YE{constructor(t,e){en(this,"_t",0);en(this,"_playing",!1);en(this,"speed",1);en(this,"loopCbs",[]);en(this,"endCbs",[]);en(this,"seekCbs",[]);if(this.duration=t,this.loop=e,!Number.isFinite(t)||t<=0)throw new Error(`Timeline: duration must be a finite number > 0 (got ${t})`)}get t(){return this._t}get playing(){return this._playing}play(){this._playing=!0}pause(){this._playing=!1}setSpeed(t){this.speed=t}seek(t){this._t=Math.min(Math.max(t,0),this.duration),this.seekCbs.forEach(e=>e())}onLoop(t){this.loopCbs.push(t)}onSeek(t){this.seekCbs.push(t)}onEnd(t){this.endCbs.push(t)}advance(t){if(this._playing)for(this._t+=t*this.speed;this._t>=this.duration;){if(!this.loop){this._t=this.duration,this._playing=!1,this.endCbs.forEach(e=>e());return}this._t-=this.duration,this.loopCbs.forEach(e=>e())}}}function ZE(i,t){const e=new Map(t),n=new Map,s=new Map;function r(a,o,c,u,h,l,d){const f=e.get(a)??0,p=bp(i,a,o);let _;if(p){const y=s.get(a);y&&y.span===p?_=y.from:(_=f,s.set(a,{span:p,from:_}))}else s.delete(a);const g=p?QA(i,a,o,_):null,m=g?tE(fi[p.clip],u):d?tS:Zf(u),v=g?rh(f,g.heading,c,m):l?f:rh(f,h,c,m);return n.set(a,c>0?(v-f)/c:0),e.set(a,v),{h:v,clipYaw:(g==null?void 0:g.clipYaw)??0}}return{heading:e,rateOf:n,step:r}}const JE=.2,QE=.5,tT=.06,eT=.25,Yh=.15,nT=.25,iT=.2;function sT(i,t=1){let e=-1;for(let n=0;n<i.length;n++)i[n].speed>=JE*t||(e<0||i[n].y<i[e].y)&&(e=n);return e}function rT(i,t,e=1){return i.speed>QE*e||i.y>t+tT*e}function aT(i,t,e=1){const n=Math.hypot(i,t),s=eT*e;return n<=s||n===0?[i,t]:[i/n*s,t/n*s]}function oT(i,t){for(const e of i??[]){const n=e.t0+we(e);if(t>n-nT&&t<=n)return!0}return!1}const cT=new Set(["turn","transition","receive","pass","idle"]);function lT(i,t,e){return e||i===null?!0:cT.has(t??"")}function uT(){const i=new Map;function t(){return{foot:-1,anchorX:0,anchorZ:0,plantY:0,corrX:0,corrZ:0,outX:0,outZ:0,outAt:-1/0,rootV:0,prev:[],prevRoot:[0,0],prevT:-1/0}}function e(s,r){const a=(r-s.outAt)/Yh;if(a>=1)return[0,0];const o=1-a*a*(3-2*a);return[s.outX*o,s.outZ*o]}function n(s,r,a,o,c,u,h){let l=i.get(s);if(l||i.set(s,l=t()),c<=0&&o===l.prevT){const[x,w]=e(l,o);return[l.corrX+x,l.corrZ+w]}if(c<=0||o<l.prevT||o-l.prevT>.5)return l.foot=-1,l.corrX=0,l.corrZ=0,l.outX=0,l.outZ=0,l.outAt=-1/0,l.prevT=o,l.prev=r.map(x=>[...x]),l.prevRoot=[a[0],a[1]],[0,0];const d=a[0]-l.prevRoot[0],f=a[1]-l.prevRoot[1],p=l.rootV=Math.hypot(d,f)/c,_=r.map((x,w)=>{const T=l.prev[w],R=T?Math.hypot(x[0]-T[0]-d,x[2]-T[2]-f)/c:1/0;return{x:x[0],y:x[1],z:x[2],speed:R}}),g=x=>{l.foot<0||(l.foot=-1,l.outX=l.corrX,l.outZ=l.corrZ,l.outAt=o,l.corrX=0,l.corrZ=0)};if(!u||p>=iT)g();else if(l.foot>=0&&rT(_[l.foot],l.plantY,h)&&g(),l.foot<0){const x=sT(_,h);x>=0&&((l.corrX||l.corrZ)&&(l.outX=l.corrX,l.outZ=l.corrZ,l.outAt=o,l.corrX=0,l.corrZ=0),l.foot=x,l.plantY=_[x].y,l.anchorX=r[x][0],l.anchorZ=r[x][2])}else{const[x,w]=aT(l.anchorX-r[l.foot][0],l.anchorZ-r[l.foot][2],h);l.corrX=x,l.corrZ=w}const[m,v]=e(l,o);(o-l.outAt)/Yh>=1&&(l.outX=0,l.outZ=0);const y=[l.corrX+m,l.corrZ+v];return l.prev=r.map(x=>[...x]),l.prevRoot=[a[0],a[1]],l.prevT=o,y}return{step:n,foot:s=>{var r;return((r=i.get(s))==null?void 0:r.foot)??-1},rootSpeed:s=>{var r;return((r=i.get(s))==null?void 0:r.rootV)??0},reset:()=>i.clear()}}const cl=Math.PI/180,Ep=2*cl,Tp=4*cl,hT=8*cl,dT=Tp/Ep,Zh=.12,fT=.6,pT=.08;function mT(i){return i<dT?0:Math.min(hT,Math.max(Tp,Ep*i))}function gT(i,t){const e=Math.hypot(i[0],i[1]),n=mT(e);if(n===0)return{pitch:0,roll:0};const s=i[0]*Math.sin(t)+i[1]*Math.cos(t),r=i[0]*Math.cos(t)-i[1]*Math.sin(t);return{pitch:n*s/e,roll:-n*r/e}}function tc(i,t,e,n){return e<=0?i:i+(t-i)*(1-Math.exp(-e/n))}function _T(){const i=new Map,t=new Map,e=new Map;return{tilt(n,s,r,a,o){const c=gT(s,r),u=tc(i.get(n)??0,c.pitch*a,o,Zh),h=tc(t.get(n)??0,c.roll*a,o,Zh);return i.set(n,u),t.set(n,h),{pitch:u,roll:h}},shoulder(n,s,r){const a=qa(s)*fT,o=tc(e.get(n)??0,a,r,pT);return e.set(n,o),o},reset(){i.clear(),t.clear(),e.clear()}}}const ec=new on,Jh=new on,Qh=new on,Ga=new on,bT=new Un;function xT(i,t){ec.identity();for(let e=i.parent;e&&e!==t;e=e.parent)ec.premultiply(e.quaternion);return ec}const Mr=new WeakMap;function wp(i){const t=Mr.get(i);t&&i.quaternion.equals(t.left)&&i.quaternion.copy(t.base)}function Rp(i,t){const e=Mr.get(i);e?(e.base.copy(t),e.left.copy(i.quaternion)):Mr.set(i,{base:t.clone(),left:i.quaternion.clone()})}function td(i,t,e,n,s){if(wp(t),!e&&!n&&!s){Mr.delete(t);return}Ga.copy(t.quaternion);const r=xT(t,i);Jh.setFromEuler(bT.set(e,n,s,"YXZ")),Qh.copy(r).invert().multiply(Jh).multiply(r),t.quaternion.premultiply(Qh),Rp(t,Ga)}function vT(i,t){if(wp(i),!t){Mr.delete(i);return}Ga.copy(i.quaternion),i.rotation.y+=t,Rp(i,Ga)}function gr(i){const t=Math.min(Math.max(i,0),1);return t*t*(3-2*t)}function yT(i){var r;const t=[i.root[0]+Fe*Math.sin(i.heading),i.root[1]+Fe*Math.cos(i.heading)];let e=t,n=null;for(const a of i.arrivals)a.player===i.player&&i.t>=a.at&&(!n||a.at>=n.at)&&(n=a);if(n)if((r=n.hand)!=null&&r.follow){const a=n.hand.rise?gr((i.t-n.at)/n.hand.rise):1;e=[n.carry[0]+(t[0]-n.carry[0])*a,n.carry[1]+(t[1]-n.carry[1])*a]}else e=n.carry;const s=i.departures.find(a=>a.player===i.player&&i.t>=a.windowStart&&i.t<=a.contact);if(s){const a=[i.root[0]+Fe*Math.sin(s.heading),i.root[1]+Fe*Math.cos(s.heading)],o=gr((i.t-s.windowStart)/Math.max(s.contact-s.windowStart,1e-6));return[e[0]+(a[0]-e[0])*o,e[1]+(a[1]-e[1])*o]}return e}function MT(i){let t=null;for(const o of i.arrivals)o.player===i.player&&i.t>=o.at&&(!t||o.at>=t.at)&&(t=o);if(!(t!=null&&t.hand)){const o=i.departures.find(c=>c.player===i.player&&i.t>=c.windowStart&&i.t<=c.contact);return(o==null?void 0:o.toHeight)===void 0?0:o.toHeight*gr((i.t-o.windowStart)/Math.max(o.contact-o.windowStart,1e-6))}const e=t.hand,n=e.from??e.height,s=e.rise?gr((i.t-t.at)/e.rise):1;let r=n+(e.height-n)*s;const a=i.departures.find(o=>o.player===i.player&&i.t>=o.windowStart&&i.t<=o.contact);if(a&&a.toHeight!==void 0){const o=gr((i.t-a.windowStart)/Math.max(a.contact-a.windowStart,1e-6));r+=(a.toHeight-r)*o}return r}function Ca(i){let t=null,e=null;for(const n of i.flights)i.t>=n.t0&&(t=Qi(n,i.t),e=n);if(t&&!t.done)return{pos:t.pos,height:t.height,apex:lS(e),speed:Jf(e,i.t)};if(i.holderId&&i.holderRoot){const n={t:i.t,player:i.holderId,root:i.holderRoot,heading:i.holderHeading,departures:i.departures,arrivals:i.arrivals};return{pos:yT(n),height:MT(n),apex:0,speed:0}}return t?{pos:t.pos,height:0,apex:0,speed:0}:{pos:i.ballStart,height:0,apex:0,speed:0}}const ST=1.2,AT=40;function Cp(i,t,e){let n=i.starts[t]??[0,0];for(const s of i.moves[t]??[])e>=s.t0&&(n=En(s,e).pos);return op(i.dives,i.moves[t],t,e)??n}function ed(i,t){const e=i.attachTo(t),n=Ca({t,holderId:e,holderRoot:e?Cp(i,e,t):null,holderHeading:e?i.headingAt(e):0,ballStart:i.ballStart,flights:i.flights,departures:i.departures,arrivals:i.arrivals});return{pos:n.pos,height:n.height}}const Ip=.55,ET=.3,nd=.6,TT=.6,wT=.4,Ya=i=>Math.min(Math.max(i,0),1);function RT(i,t){if(t<=i.t0)return 0;if(t>=i.t0+we(i))return 1;const e=Math.hypot(i.to[0]-i.from[0],i.to[1]-i.from[1]);if(e<=0)return 1;const n=En(i,t).pos;return Math.hypot(n[0]-i.from[0],n[1]-i.from[1])/e}function CT(i,t,e,n,s,r,a){const o=Math.hypot(t[0]-i[0],t[1]-i[1]);if(o<1e-6)return[];const c=(t[0]-i[0])/o,u=(t[1]-i[1])/o,h=-u,l=c,d=o-s-.1,f=_=>{const g=e?e*Math.sin(2*Math.PI*_/n):0;return[i[0]+c*_+h*g,i[1]+u*_+l*g]},p=[];for(let _=.15;_+r*.5<=d;_+=r+a){const g=Math.min(_+r,d),[m,v]=f(_),[y,x]=f(g);p.push({ax:m,ay:v,bx:y,by:x,k:(_+g)/2/o})}return p}function id(i,t,e=1){const n=Math.hypot(t[0]-i[0],t[1]-i[1])||1,s=(t[0]-i[0])/n,r=(t[1]-i[1])/n,a=Ip*e,o=ET*e,c=t[0]-a*s,u=t[1]-a*r;return[[t[0],t[1]],[c-r*o,u+s*o],[c+r*o,u-s*o]]}const sd=1.6,_a=2.2,IT=5,PT=5,LT=6,rd=14,DT=4,FT=20,NT="#E8ECEF",UT="#8D949B",OT=1.2,kT=3,BT=.4;function ad(i,t,e,n){const s=Math.hypot(e[0]-t[0],e[1]-t[1]);if(s<1e-6)return null;const r=Math.min(LT*n,s*.5),a=i==="dribble",o=i==="pass"?FT*n:a?rd*n/8:IT*n;return{dashes:CT(t,e,a?DT*n:0,rd*n,r,o,i==="move"?PT*n:0),headScale:r/Ip}}function GT(i,t){if(i.style!=="shot"||!(i.toHeight!==void 0&&i.toHeight>0))return!1;const e=i.t0+(i.duration??0);return t.some(n=>n.hand!==void 0&&Math.abs(n.at-e)<1e-6&&Math.hypot(n.carry[0]-i.to[0],n.carry[1]-i.to[1])<1e-6)}function zT(i,t,e,n=0){const s=t[1]-i[1];if(Math.abs(s)<1e-6)return null;let r=null,a=0,o=1/0;for(const h of e){const l=(h.y-i[1])/s;!(l>1)||!isFinite(l)||l-1<o&&(o=l-1,a=l,r=h)}if(!r)return null;const c=Math.max(r.halfW-n,0),u=i[0]+(t[0]-i[0])*a;return[Math.min(Math.max(u,r.x-c),r.x+c),r.y]}function Za(i){return i.style==="push"?!1:!!i.pop||Math.hypot(i.to[0]-i.from[0],i.to[1]-i.from[1])>=OT}function HT(i,t,e){const n=i.filter(r=>r.team!=="coach");if(!n.length)return;if(new Set(n.map(r=>r.team)).size===1)return n[0].team;const s=n.find(r=>r.id===e);return s?s.team:n.reduce((r,a)=>{const o=Math.hypot(a.start[0]-t[0],a.start[1]-t[1]);return o<r.d?{team:a.team,d:o}:r},{d:1/0}).team}const od=.012,VT=.14,WT=.38,cd=.15,Pp=.3,jT="#bfe333";function XT(i){const t=1-2*Pp,e=Math.abs(i);return e<=t?1:e>=1?0:(1-e)/(1-t)}const ba=1.5,qT=.3,KT=24;function ld(i){return cd+(WT-cd)*Ya(i)}function wc(i,t,e){if(i<t.t0)return 0;const n=t.t0+t.duration,s=i-n;if(s<=0)return 1;const r=s>=ba?0:1-s/ba;if(e===void 0)return r;const a=Math.max(e,n);if(i<a)return r;const o=1-Math.min(a-n,ba)/ba;return Math.min(r,o*Math.max(1-(i-a)/qT,0))}function Rc(i,t){for(let e=t+1;e<i.length;e++)if(Za(i[e]))return i[e].t0}function $T(i,t){const e=[];for(let n=0;n<i.length;n++)Za(i[n])&&wc(t,i[n],Rc(i,n))>0&&e.push(n);return e.length>2?e.slice(-2):e}function YT(i,t){const e=Math.hypot(i.to[0]-i.from[0],i.to[1]-i.from[1]);if(!(e>0))return 1;const n=Qi(i,t).pos;return Ya(Math.hypot(n[0]-i.from[0],n[1]-i.from[1])/e)}function ZT(i,t,e){const n=i[t],s=n.t0+n.duration;if(e<=s){const o=Qi(n,e).pos;return[o[0],o[1]]}const r=i[t+1];if(!r||Za(r)||Math.abs(r.t0-s)>1e-6||Math.hypot(r.from[0]-n.to[0],r.from[1]-n.to[1])>1e-6)return[...n.to];if(e>=r.t0+r.duration)return[...r.to];const a=Qi(r,e).pos;return[a[0],a[1]]}function ud(i,t){const e=Ya((i-t)/.06);return nd+(1-nd)*e}function JT(i,t){return Ya((i-(t-TT))/wT)}const QT=.35;function t1(i,t,e){const n=i.map(s=>({player:s.player,t0:s.windowStart,t1:s.contact+QT}));for(const s of t){const r=e.clips[s.clip];if((r==null?void 0:r.category)!=="receive")continue;const a=Math.max(s.t0,0);n.push({player:s.player,t0:a,t1:a+(r.ballContact??0)+Jn})}return n.sort((s,r)=>s.t0-r.t0)}function e1(i,t,e){let n=null;for(const s of i)e>=s.t0&&e<=s.t1&&(n=s.player);return n??t(e)}const hd=1e-6;function Cc(i,t,e){return sp(i,t,e)>0}function n1(i,t,e){for(const s of i.flights){if(!(s.fromHeight!==void 0&&s.fromHeight>0)||e<s.t0||e>=s.t0+s.duration)continue;const r=i.attachTo(s.t0-hd);if(r&&Cc(i.arrivals,r,s.t0-hd))return{kind:"halo"}}const n=e1(t,i.attachTo,e);if(!n){if(i.staticBall)return{kind:"none"};const s=i.flights.some(a=>e>=a.t0&&e<a.t0+a.duration),r=i.arrivals.some(a=>a.at>e);return s||!r?{kind:"none"}:{kind:"free"}}return i.attachTo(e)===n&&Cc(i.arrivals,n,e)?{kind:"halo"}:i.attachTo(e)===n?{kind:"ring",player:n}:{kind:"none"}}function i1(i,t){const e=new URLSearchParams(i.startsWith("?")?i.slice(1):i),n=e.get("runpaths");return{trail:e.get("trail")!=="off",highlight:e.get("highlight")!=="off",runPaths:n==="auto"||n==="authored"||n==="off"?n:t??"auto",zones:e.get("zones")!=="off"}}const s1=.85;function r1(i,t){return i>0?{draw:t>=i*s1,maxWidth:Math.min(i,t)}:{draw:!1,maxWidth:0}}const a1=.15,o1=1e-6;function dd(i){const t=Math.min(Math.max(i,0),1);return t*t*(3-2*t)}function c1(i,t,e){var r;const n=i.filter(a=>a.player===t).sort((a,o)=>a.at-o.at);let s=e.at;for(let a=n.indexOf(e)-1;a>=0&&((r=n[a].hand)==null?void 0:r.bone)===e.hand.bone;a--)s=n[a].at;return s}function Lp(i,t,e,n){var a;const s=qi(i,e,n);if(!((a=s==null?void 0:s.hand)!=null&&a.bone))return 0;let r=dd((n-c1(i,e,s))/a1);for(const o of t)o.player!==e||n<o.windowStart||n>o.contact||(r*=1-dd((n-o.windowStart)/Math.max(o.contact-o.windowStart,o1)));return r}function l1(i,t,e){var s,r;const n=(r=(s=qi(i,t,e))==null?void 0:s.hand)==null?void 0:r.bone;return n==="L"?0:n==="R"?1:-1}function u1(i,t,e,n){return Cc(i,e,n)||Lp(i,t,e,n)>0}const h1=25;function d1(i,t){return i.style==="drop"&&(t==null?void 0:t.style)==="shot"&&i.fromHeight===void 0&&i.from[0]===i.to[0]&&i.from[1]===i.to[1]}function f1(i){const t=[];for(let e=0;e<i.length;e++){const n=i[e];if(d1(n,i[e-1])){t.push({t:n.t0,power:0,shot:!1,net:!0});continue}if(n.style==="drop"||n.style==="headed")continue;const s=Jf(n,n.t0);s>0&&t.push({t:n.t0,power:Math.min(1,s/h1),shot:n.style==="shot",net:!1})}return t.sort((e,n)=>e.t-n.t)}const p1=.02;function m1(i,t,e,n,s,r,a,o=!1){if(!o)for(let c=0;c<t.length;c++){const u=t[c];e<u.t&&n>=u.t&&(u.net?i.net():i.kick(u.power,u.shot))}i.roll(s&&r<=p1,a)}function g1(i){let t=!1;return i.onSeek(()=>{t=!0}),(e,n,s,r,a,o,c)=>{m1(e,n,s,r,a,o,c,t),t=!1}}const fd=new dn,xa=new F;class Dp extends Eg{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";const t=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],e=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],n=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(n),this.setAttribute("position",new Ve(t,3)),this.setAttribute("uv",new Ve(e,2))}applyMatrix4(t){const e=this.attributes.instanceStart,n=this.attributes.instanceEnd;return e!==void 0&&(e.applyMatrix4(t),n.applyMatrix4(t),e.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(t){let e;t instanceof Float32Array?e=t:Array.isArray(t)&&(e=new Float32Array(t));const n=new pc(e,6,1);return this.setAttribute("instanceStart",new jn(n,3,0)),this.setAttribute("instanceEnd",new jn(n,3,3)),this.instanceCount=this.attributes.instanceStart.count,this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(t){let e;t instanceof Float32Array?e=t:Array.isArray(t)&&(e=new Float32Array(t));const n=new pc(e,6,1);return this.setAttribute("instanceColorStart",new jn(n,3,0)),this.setAttribute("instanceColorEnd",new jn(n,3,3)),this}fromWireframeGeometry(t){return this.setPositions(t.attributes.position.array),this}fromEdgesGeometry(t){return this.setPositions(t.attributes.position.array),this}fromMesh(t){return this.fromWireframeGeometry(new sg(t.geometry)),this}fromLineSegments(t){const e=t.geometry;return this.setPositions(e.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new dn);const t=this.attributes.instanceStart,e=this.attributes.instanceEnd;t!==void 0&&e!==void 0&&(this.boundingBox.setFromBufferAttribute(t),fd.setFromBufferAttribute(e),this.boundingBox.union(fd))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new On),this.boundingBox===null&&this.computeBoundingBox();const t=this.attributes.instanceStart,e=this.attributes.instanceEnd;if(t!==void 0&&e!==void 0){const n=this.boundingSphere.center;this.boundingBox.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)xa.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(xa)),xa.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(xa));this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}applyMatrix(t){return console.warn("THREE.LineSegmentsGeometry: applyMatrix() has been renamed to applyMatrix4()."),this.applyMatrix4(t)}}Lt.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new ee(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};An.line={uniforms:Fc.merge([Lt.common,Lt.fog,Lt.line]),vertexShader:`
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
		`};class ll extends bi{constructor(t){super({type:"LineMaterial",uniforms:Fc.clone(An.line.uniforms),vertexShader:An.line.vertexShader,fragmentShader:An.line.fragmentShader,clipping:!0}),this.isLineMaterial=!0,this.setValues(t)}get color(){return this.uniforms.diffuse.value}set color(t){this.uniforms.diffuse.value=t}get worldUnits(){return"WORLD_UNITS"in this.defines}set worldUnits(t){t===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}get linewidth(){return this.uniforms.linewidth.value}set linewidth(t){this.uniforms.linewidth&&(this.uniforms.linewidth.value=t)}get dashed(){return"USE_DASH"in this.defines}set dashed(t){t===!0!==this.dashed&&(this.needsUpdate=!0),t===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}get dashScale(){return this.uniforms.dashScale.value}set dashScale(t){this.uniforms.dashScale.value=t}get dashSize(){return this.uniforms.dashSize.value}set dashSize(t){this.uniforms.dashSize.value=t}get dashOffset(){return this.uniforms.dashOffset.value}set dashOffset(t){this.uniforms.dashOffset.value=t}get gapSize(){return this.uniforms.gapSize.value}set gapSize(t){this.uniforms.gapSize.value=t}get opacity(){return this.uniforms.opacity.value}set opacity(t){this.uniforms&&(this.uniforms.opacity.value=t)}get resolution(){return this.uniforms.resolution.value}set resolution(t){this.uniforms.resolution.value.copy(t)}get alphaToCoverage(){return"USE_ALPHA_TO_COVERAGE"in this.defines}set alphaToCoverage(t){this.defines&&(t===!0!==this.alphaToCoverage&&(this.needsUpdate=!0),t===!0?this.defines.USE_ALPHA_TO_COVERAGE="":delete this.defines.USE_ALPHA_TO_COVERAGE)}}const nc=new xe,pd=new F,md=new F,nn=new xe,sn=new xe,Yn=new xe,ic=new F,sc=new he,rn=new zg,gd=new F,va=new dn,ya=new On,Zn=new xe;let Qn,Ki;function _d(i,t,e){return Zn.set(0,0,-t,1).applyMatrix4(i.projectionMatrix),Zn.multiplyScalar(1/Zn.w),Zn.x=Ki/e.width,Zn.y=Ki/e.height,Zn.applyMatrix4(i.projectionMatrixInverse),Zn.multiplyScalar(1/Zn.w),Math.abs(Math.max(Zn.x,Zn.y))}function _1(i,t){const e=i.matrixWorld,n=i.geometry,s=n.attributes.instanceStart,r=n.attributes.instanceEnd,a=Math.min(n.instanceCount,s.count);for(let o=0,c=a;o<c;o++){rn.start.fromBufferAttribute(s,o),rn.end.fromBufferAttribute(r,o),rn.applyMatrix4(e);const u=new F,h=new F;Qn.distanceSqToSegment(rn.start,rn.end,h,u),h.distanceTo(u)<Ki*.5&&t.push({point:h,pointOnLine:u,distance:Qn.origin.distanceTo(h),object:i,face:null,faceIndex:o,uv:null,uv1:null})}}function b1(i,t,e){const n=t.projectionMatrix,r=i.material.resolution,a=i.matrixWorld,o=i.geometry,c=o.attributes.instanceStart,u=o.attributes.instanceEnd,h=Math.min(o.instanceCount,c.count),l=-t.near;Qn.at(1,Yn),Yn.w=1,Yn.applyMatrix4(t.matrixWorldInverse),Yn.applyMatrix4(n),Yn.multiplyScalar(1/Yn.w),Yn.x*=r.x/2,Yn.y*=r.y/2,Yn.z=0,ic.copy(Yn),sc.multiplyMatrices(t.matrixWorldInverse,a);for(let d=0,f=h;d<f;d++){if(nn.fromBufferAttribute(c,d),sn.fromBufferAttribute(u,d),nn.w=1,sn.w=1,nn.applyMatrix4(sc),sn.applyMatrix4(sc),nn.z>l&&sn.z>l)continue;if(nn.z>l){const y=nn.z-sn.z,x=(nn.z-l)/y;nn.lerp(sn,x)}else if(sn.z>l){const y=sn.z-nn.z,x=(sn.z-l)/y;sn.lerp(nn,x)}nn.applyMatrix4(n),sn.applyMatrix4(n),nn.multiplyScalar(1/nn.w),sn.multiplyScalar(1/sn.w),nn.x*=r.x/2,nn.y*=r.y/2,sn.x*=r.x/2,sn.y*=r.y/2,rn.start.copy(nn),rn.start.z=0,rn.end.copy(sn),rn.end.z=0;const _=rn.closestPointToPointParameter(ic,!0);rn.at(_,gd);const g=Wd.lerp(nn.z,sn.z,_),m=g>=-1&&g<=1,v=ic.distanceTo(gd)<Ki*.5;if(m&&v){rn.start.fromBufferAttribute(c,d),rn.end.fromBufferAttribute(u,d),rn.start.applyMatrix4(a),rn.end.applyMatrix4(a);const y=new F,x=new F;Qn.distanceSqToSegment(rn.start,rn.end,x,y),e.push({point:x,pointOnLine:y,distance:Qn.origin.distanceTo(x),object:i,face:null,faceIndex:d,uv:null,uv1:null})}}}class x1 extends Re{constructor(t=new Dp,e=new ll({color:Math.random()*16777215})){super(t,e),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){const t=this.geometry,e=t.attributes.instanceStart,n=t.attributes.instanceEnd,s=new Float32Array(2*e.count);for(let a=0,o=0,c=e.count;a<c;a++,o+=2)pd.fromBufferAttribute(e,a),md.fromBufferAttribute(n,a),s[o]=o===0?0:s[o-1],s[o+1]=s[o]+pd.distanceTo(md);const r=new pc(s,2,1);return t.setAttribute("instanceDistanceStart",new jn(r,1,0)),t.setAttribute("instanceDistanceEnd",new jn(r,1,1)),this}raycast(t,e){const n=this.material.worldUnits,s=t.camera;s===null&&!n&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.');const r=t.params.Line2!==void 0&&t.params.Line2.threshold||0;Qn=t.ray;const a=this.matrixWorld,o=this.geometry,c=this.material;Ki=c.linewidth+r,o.boundingSphere===null&&o.computeBoundingSphere(),ya.copy(o.boundingSphere).applyMatrix4(a);let u;if(n)u=Ki*.5;else{const l=Math.max(s.near,ya.distanceToPoint(Qn.origin));u=_d(s,l,c.resolution)}if(ya.radius+=u,Qn.intersectsSphere(ya)===!1)return;o.boundingBox===null&&o.computeBoundingBox(),va.copy(o.boundingBox).applyMatrix4(a);let h;if(n)h=Ki*.5;else{const l=Math.max(s.near,va.distanceToPoint(Qn.origin));h=_d(s,l,c.resolution)}va.expandByScalar(h),Qn.intersectsBox(va)!==!1&&(n?_1(this,e):b1(this,s,e))}onBeforeRender(t){const e=this.material.uniforms;e&&e.resolution&&(t.getViewport(nc),this.material.uniforms.resolution.value.set(nc.z,nc.w))}}class Fp extends Dp{constructor(){super(),this.isLineGeometry=!0,this.type="LineGeometry"}setPositions(t){const e=t.length-3,n=new Float32Array(2*e);for(let s=0;s<e;s+=3)n[2*s]=t[s],n[2*s+1]=t[s+1],n[2*s+2]=t[s+2],n[2*s+3]=t[s+3],n[2*s+4]=t[s+4],n[2*s+5]=t[s+5];return super.setPositions(n),this}setColors(t){const e=t.length-3,n=new Float32Array(2*e);for(let s=0;s<e;s+=3)n[2*s]=t[s],n[2*s+1]=t[s+1],n[2*s+2]=t[s+2],n[2*s+3]=t[s+3],n[2*s+4]=t[s+4],n[2*s+5]=t[s+5];return super.setColors(n),this}setFromPoints(t){const e=t.length-1,n=new Float32Array(6*e);for(let s=0;s<e;s++)n[6*s]=t[s].x,n[6*s+1]=t[s].y,n[6*s+2]=t[s].z||0,n[6*s+3]=t[s+1].x,n[6*s+4]=t[s+1].y,n[6*s+5]=t[s+1].z||0;return super.setPositions(n),this}fromLine(t){const e=t.geometry;return this.setPositions(e.attributes.position.array),this}}class v1 extends x1{constructor(t=new Fp,e=new ll({color:Math.random()*16777215})){super(t,e),this.isLine2=!0,this.type="Line2"}}function y1(i,t,e){const n=t[0]-i[0],s=t[1]-i[1],r=Math.hypot(n,s);if(r<1e-9)return{axis:[0,0,0],angle:0};const a=n/r;return{axis:[s/r,0,-a],angle:r/e}}const bd=.55,Np=.55,xd=.006,M1=i=>1/(1+Math.max(i,0)),S1=i=>Np/(1+2*Math.max(i,0)),A1=.6,E1=(i,t)=>t>0?i/t*A1:0,T1=14,w1=.25,Up=.25,Ma=Math.round(Up*60)+2,R1=2,C1=.5,I1=16774102,P1=20,rc=.06,ac=.06,vd=.09;function L1(i){if(!(i>=0)||i>=ac+vd)return[1,1,1];const t=i<ac?1:1-(i-ac)/vd;return[1+rc*t,1-rc*t,1+rc*t]}const D1=.02,F1=2;let cr=null;function N1(){if(cr)return cr;const i=document.createElement("canvas");i.width=i.height=64;const t=i.getContext("2d"),e=t.createRadialGradient(32,32,0,32,32,32);return e.addColorStop(0,"rgba(0,0,0,1)"),e.addColorStop(.55,"rgba(0,0,0,0.55)"),e.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=e,t.fillRect(0,0,64,64),cr=new Cn(i),cr.userData.shared=!0,cr}function yd(i){let{bodyScale:t,radius:e}=i;const n=new tn({map:N1(),transparent:!0,depthWrite:!1,opacity:Np,fog:!1,toneMapped:!1,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1}),s=new Re(new Kn(bd,bd).rotateX(-Math.PI/2),n);s.position.y=xd,s.renderOrder=1,i.root.add(s);const r=new ll({linewidth:R1,color:I1,vertexColors:!0,transparent:!0,opacity:C1,blending:2,depthWrite:!1,depthTest:!0,toneMapped:!1});r.resolution.set(i.resolution.width,i.resolution.height);const a=new Fp;a.setPositions(new Float32Array(Ma*3)),a.setColors(new Float32Array(Ma*3));const o=a.attributes.instanceStart.data,c=a.attributes.instanceColorStart.data,u=new v1(a,r);u.frustumCulled=!1,u.renderOrder=P1,u.visible=!1;const h=i.streak!==!1;i.root.add(u);const l=[],d=new F;let f=!1,p=!1,_=-1;const g=new F;function m(){s.scale.setScalar(t)}m();function v(y){const x=f?d.distanceTo(y.pos):0,w=f&&x>F1,T=y.height<=D1;if(s.visible=!y.held,s.visible&&(s.position.set(y.pos.x,xd,y.pos.z),s.scale.setScalar(t*M1(y.height)),n.opacity=S1(y.height)),f&&!w&&y.dt>0&&x>1e-9){const{axis:C,angle:N}=y1([d.x,d.z],[y.pos.x,y.pos.z],e);if(C[0]!==0||C[2]!==0){g.set(C[0],C[1],C[2]);const k=T?N:E1(x/y.dt,e)*y.dt;k>0&&i.mesh.rotateOnWorldAxis(g,k)}}T&&p&&!w&&(_=y.t),w&&(_=-1),p=!T;const[R,I,S]=_<0?[1,1,1]:L1(y.t-_);if(i.mesh.scale.set(t*R,t*I,t*S),w&&(l.length=0),h&&y.dt>0){for(l.push({t:y.t,p:y.pos.clone()});l.length&&y.t-l[0].t>Up;)l.shift();for(;l.length>Ma;)l.shift()}if(h&&(y.speed>T1||(y.apex??0)>=w1)&&l.length>=2){const N=l.length-1,k=o.array,H=c.array;for(let Q=0;Q<Ma-1;Q++)for(const[V,j]of[[0,Q],[3,Q+1]]){const O=l[Math.min(j,N)].p,nt=6*Q+V;k[nt]=O.x,k[nt+1]=O.y,k[nt+2]=O.z;const Y=Math.min(j,N)/N;H[nt]=H[nt+1]=H[nt+2]=Y}o.needsUpdate=!0,c.needsUpdate=!0,a.instanceCount=N,u.visible=!0}else u.visible=!1;d.copy(y.pos),f=!0}return{update:v,hide(){s.visible=!1,u.visible=!1},resize(y,x,w){t=y,e=x,m(),r.resolution.set(w.width,w.height)},__state:()=>({shadow:s,streak:u,trailLength:l.length,squashFrom:_})}}const U1=.055,O1=.17,Bi=.015,Md=2.1,k1=.16,B1=.1,G1=1.6,z1=.45,H1=.11,V1={technical:by,tactical:xy,physical:vy,social:yy};function W1(){const i=document.createElement("canvas");i.width=i.height=256;const t=i.getContext("2d"),e=t.createRadialGradient(128,128,0,128,128,128);return e.addColorStop(0,"rgba(255,255,255,0)"),e.addColorStop(.62,"rgba(255,255,255,0)"),e.addColorStop(.76,"rgba(255,255,255,0.9)"),e.addColorStop(.84,"rgba(255,255,255,0.5)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,256,256),new Cn(i)}function j1(i,t,e,n,s,r){i.beginPath(),i.moveTo(t+r,e),i.arcTo(t+n,e,t+n,e+s,r),i.arcTo(t+n,e+s,t,e+s,r),i.arcTo(t,e+s,t,e,r),i.arcTo(t,e,t+n,e,r),i.closePath()}function X1(i){const t=document.createElement("canvas"),e=48;t.width=Math.max(64,Math.round(i.w*e)),t.height=Math.max(64,Math.round(i.h*e));const n=t.getContext("2d"),s=i.color!==void 0?V1[i.color]??i.color:Ji,r=Math.min(t.width,t.height)*.14;if(j1(n,3,3,t.width-6,t.height-6,r),n.globalAlpha=k1,n.fillStyle=s,n.fill(),n.globalAlpha=.55,n.lineWidth=4,n.strokeStyle=s,n.stroke(),i.label){n.font="600 22px system-ui, sans-serif";const o=i.label.toUpperCase(),c=r1(n.measureText(o).width,t.width-30);c.draw&&(n.globalAlpha=.85,n.fillStyle=s,n.fillText(o,18,34,c.maxWidth))}const a=new Cn(t);return a.colorSpace=He,a}function q1(i){var y,x;const{scene:t,drill:e,schedule:n}=i,s=(...w)=>{for(const T of w)T.traverse(R=>{const I=R.material;for(const S of Array.isArray(I)?I:I?[I]:[])S.toneMapped=!1});t.add(...w)},r=i.pathM??B1,a=w=>w*r*(i.pathWidthK??1),o=i1(i.search??location.search,(y=e.overlays)==null?void 0:y.runPaths),{width:c,length:u}=e.pitch,h=w=>w-c/2,l=w=>w-u/2,d={moves:n.moves,flights:n.flights,departures:n.departures,arrivals:n.arrivals,dives:n.dives,attachTo:n.attachTo,starts:Object.fromEntries(e.players.map(w=>[w.id,w.start])),ballStart:Na(e),headingAt:i.headingAt},f=HT(e.players,Na(e),n.attachTo(0)),p=new Map(e.players.map(w=>[w.id,w.team])),_=w=>p.get(w)===f?NT:UT,g=[];{const w=AT,T=new Float32Array(w*3),R=new Xe;R.setAttribute("position",new Ie(new Float32Array(w*2*3),3)),R.setAttribute("color",new Ie(new Float32Array(w*2*3),3));const I=new Float32Array(w*2*2);for(let V=0;V<w;V++)I.set([0,V/(w-1),1,V/(w-1)],V*4);R.setAttribute("uv",new Ie(I,2));const S=new Uint16Array((w-1)*6);for(let V=0;V<w-1;V++){const j=V*2;S.set([j,j+1,j+2,j+1,j+3,j+2],V*6)}R.setIndex(new Ie(S,1));const A=(()=>{const V=document.createElement("canvas");V.width=64,V.height=1;const j=V.getContext("2d"),[O,nt,Y]=_y,J=j.createLinearGradient(0,0,64,0);J.addColorStop(0,`rgba(${O},${nt},${Y},0)`),J.addColorStop(.28,`rgba(${O},${nt},${Y},0.28)`),J.addColorStop(.44,"rgba(216,247,120,0.8)"),J.addColorStop(.5,"rgba(255,255,255,1)"),J.addColorStop(.56,"rgba(216,247,120,0.8)"),J.addColorStop(.72,`rgba(${O},${nt},${Y},0.28)`),J.addColorStop(1,`rgba(${O},${nt},${Y},0)`),j.fillStyle=J,j.fillRect(0,0,64,1);const ht=new Cn(V);return ht.colorSpace=He,ht})(),C=new Re(R,new tn({map:A,vertexColors:!0,blending:2,transparent:!0,depthWrite:!1,side:2}));C.frustumCulled=!1,C.renderOrder=6,s(C);const N=new F,k=new F,H=new F,Q=ST/(w-1);g.push((V,j)=>{if(C.visible=o.trail,!o.trail)return;for(let Y=0;Y<w;Y++){const J=ed(d,V-Y*Q);T[Y*3]=h(J.pos[0]),T[Y*3+1]=U1+J.height,T[Y*3+2]=l(J.pos[1])}const O=R.getAttribute("position"),nt=R.getAttribute("color");H.set(1,0,0);for(let Y=0;Y<w;Y++){const J=Math.min(Y,w-2);N.set(T[J*3]-T[J*3+3],T[J*3+1]-T[J*3+4],T[J*3+2]-T[J*3+5]),k.set(T[Y*3],T[Y*3+1],T[Y*3+2]).sub(j.position),N.lengthSq()>1e-10&&(N.cross(k),N.lengthSq()>1e-10&&H.copy(N.normalize()));const ht=Math.pow(1-Y/(w-1),1.2),Vt=O1*(.35+.65*ht),tt=T[Y*3],rt=T[Y*3+1],ot=T[Y*3+2];O.setXYZ(Y*2,tt+H.x*Vt,rt+H.y*Vt,ot+H.z*Vt),O.setXYZ(Y*2+1,tt-H.x*Vt,rt-H.y*Vt,ot-H.z*Vt);const Z=ht;nt.setXYZ(Y*2,Z,Z,Z),nt.setXYZ(Y*2+1,Z,Z,Z)}O.needsUpdate=nt.needsUpdate=!0})}{const w=[];let T=0,R=0;for(const I of e.events){if(I.type!=="move"&&I.type!=="dribble")continue;const S=(n.moves[I.player]??[]).find(N=>N.t0===I.t&&N.to[0]===I.to[0]&&N.to[1]===I.to[1]);if(!S)continue;const A=ad(I.type,S.from,S.to,r);if(!A)continue;const C=new ae(_(I.player));w.push({m:S,authored:I.runPath===!0,stroke:A,baseR:C.r,baseG:C.g,baseB:C.b,baseA:1,vert0:T,vertCount:A.dashes.length*4+3}),T+=A.dashes.length*4+3,R+=A.dashes.length*6+3}if(w.length){const I=new Float32Array(T*3),S=new Float32Array(T*4),A=new Uint16Array(R);let C=0,N=0;const k=a(sd)/2;for(const j of w){const O=Math.hypot(j.m.to[0]-j.m.from[0],j.m.to[1]-j.m.from[1])||1,nt=-(j.m.to[1]-j.m.from[1])/O,Y=(j.m.to[0]-j.m.from[0])/O;for(const rt of j.stroke.dashes){const ot=C/3;I.set([h(rt.ax+nt*k),Bi,l(rt.ay+Y*k),h(rt.ax-nt*k),Bi,l(rt.ay-Y*k),h(rt.bx+nt*k),Bi,l(rt.by+Y*k),h(rt.bx-nt*k),Bi,l(rt.by-Y*k)],C),C+=12,A.set([ot,ot+1,ot+2,ot+1,ot+3,ot+2],N),N+=6}const[J,ht,Vt]=id(j.m.from,j.m.to,j.stroke.headScale),tt=C/3;I.set([h(J[0]),Bi,l(J[1]),h(ht[0]),Bi,l(ht[1]),h(Vt[0]),Bi,l(Vt[1])],C),C+=9,A.set([tt,tt+1,tt+2],N),N+=3}const H=new Xe;H.setAttribute("position",new Ie(I,3)),H.setAttribute("color",new Ie(S,4)),H.setIndex(new Ie(A,1));const Q=new Re(H,new tn({vertexColors:!0,transparent:!0,depthWrite:!1,side:2}));Q.renderOrder=2,s(Q);const V=H.getAttribute("color");g.push(j=>{if(Q.visible=o.runPaths!=="off",!!Q.visible){for(const O of w){const nt=o.runPaths==="authored"&&!O.authored?0:JT(j,O.m.t0),Y=RT(O.m,j);let J=O.vert0;for(const Vt of O.stroke.dashes){const tt=O.baseA*nt*ud(Vt.k,Y);for(let rt=0;rt<4;rt++)V.setXYZW(J++,O.baseR,O.baseG,O.baseB,tt)}const ht=O.baseA*nt*ud(1,Y);for(let Vt=0;Vt<3;Vt++)V.setXYZW(J++,O.baseR,O.baseG,O.baseB,ht)}V.needsUpdate=!0}})}}{const w=KT,T=VT/2,R=[-1,-.4,1-2*Pp,1],I=R.map(XT),S=R.length,A=n.flights.map((k,H)=>Rc(n.flights,H)),C=()=>{const k=new Xe,H=new Float32Array((w+1)*S*3);for(let O=0;O<(w+1)*S;O++)H[O*3+1]=od;const Q=new Float32Array((w+1)*S*4),V=new Uint16Array(w*(S-1)*6);for(let O=0,nt=0;O<w;O++)for(let Y=0;Y<S-1;Y++,nt++){const J=O*S+Y;V.set([J,J+1,J+S,J+1,J+S+1,J+S],nt*6)}k.setAttribute("position",new Ie(H,3)),k.setAttribute("color",new Ie(Q,4)),k.setIndex(new Ie(V,1));const j=new Re(k,new tn({color:jT,vertexColors:!0,transparent:!0,depthWrite:!1,side:2}));return j.frustumCulled=!1,j.renderOrder=2,j.name="passRibbon",s(j),{mesh:j,posAttr:k.getAttribute("position"),colAttr:k.getAttribute("color")}},N=[C(),C()];g.push(k=>{const H=o.runPaths==="auto"?$T(n.flights,k):[];for(let Q=0;Q<N.length;Q++){const V=N[Q],j=H[H.length-1-Q]??-1;if(V.mesh.visible=j>=0,j<0)continue;const O=n.flights[j],nt=wc(k,O,A[j]),Y=YT(O,k),J=Math.hypot(O.to[0]-O.from[0],O.to[1]-O.from[1])||1,ht=-(O.to[1]-O.from[1])/J*T,Vt=(O.to[0]-O.from[0])/J*T,tt=O.from[0]+(O.to[0]-O.from[0])*Y,rt=O.from[1]+(O.to[1]-O.from[1])*Y,ot=ZT(n.flights,j,k);for(let Z=0;Z<=w;Z++){const bt=Z/w,Gt=Z===w?ot[0]:O.from[0]+(tt-O.from[0])*bt,te=Z===w?ot[1]:O.from[1]+(rt-O.from[1])*bt,fe=nt*ld(bt);for(let re=0;re<S;re++){const Pe=R[re],G=Z*S+re;V.posAttr.setX(G,h(Gt+ht*Pe)),V.posAttr.setZ(G,l(te+Vt*Pe)),V.colAttr.setXYZW(G,1,1,1,fe*I[re])}}V.posAttr.needsUpdate=V.colAttr.needsUpdate=!0}})}{const w=(e.equipment??[]).filter(C=>C.type==="goal").map(C=>({x:C.at[0],y:C.at[1],halfW:ns(C,Ka)*i.goalScale})),T=a(_a)/2,R=[],I=[],S=[],A=[];for(let C=0;C<n.flights.length;C++){const N=n.flights[C];if(!Za(N))continue;const k=GT(N,n.arrivals);if(!k&&!N.pop)continue;const H=Math.hypot(N.to[0]-N.from[0],N.to[1]-N.from[1])||1,Q=-(N.to[1]-N.from[1])/H,V=(N.to[0]-N.from[0])/H,j=V,O=-Q;let nt=0;if(k){const Y=kT*2*T/2;I.push({ax:N.to[0]-j*T,ay:N.to[1]-O*T,bx:N.to[0]+j*T,by:N.to[1]+O*T,h:Y,px:Q,py:V});const J=zT(N.from,N.to,w,a(_a))??N.to;I.push({ax:N.to[0],ay:N.to[1],bx:J[0],by:J[1],h:BT*T,px:Q,py:V}),nt=8}else{I.push({ax:N.from[0],ay:N.from[1],bx:N.to[0],by:N.to[1],h:sd/_a*T,px:Q,py:V});const Y=ad("pass",N.from,N.to,r);S.push(id(N.from,N.to,Y?Y.headScale:0)),nt=7}A.push({i:C,verts:nt})}if(A.length){const C=A.reduce((ot,Z)=>ot+Z.verts,0),N=A.reduce((ot,Z)=>ot+(Z.verts===8?12:9),0),k=new Float32Array(C*3),H=new Float32Array(C*4),Q=new Uint16Array(N);let V=0,j=0,O=0,nt=0;const Y=od,J=()=>{const ot=I[O++],Z=V/3;k.set([h(ot.ax+ot.px*ot.h),Y,l(ot.ay+ot.py*ot.h),h(ot.ax-ot.px*ot.h),Y,l(ot.ay-ot.py*ot.h),h(ot.bx+ot.px*ot.h),Y,l(ot.by+ot.py*ot.h),h(ot.bx-ot.px*ot.h),Y,l(ot.by-ot.py*ot.h)],V),V+=12,Q.set([Z,Z+1,Z+2,Z+1,Z+3,Z+2],j),j+=6};for(const ot of A){const Z=V/3;if(ot.verts===8)J(),J();else{J();const[bt,Gt,te]=S[nt++],fe=V/3;k.set([h(bt[0]),Y,l(bt[1]),h(Gt[0]),Y,l(Gt[1]),h(te[0]),Y,l(te[1])],V),V+=9,Q.set([fe,fe+1,fe+2],j),j+=3}R.push({flight:ot.i,vert0:Z,vertCount:ot.verts})}const ht=new Xe;ht.setAttribute("position",new Ie(k,3)),ht.setAttribute("color",new Ie(H,4)),ht.setIndex(new Ie(Q,1));const Vt=new Re(ht,new tn({color:Sy,vertexColors:!0,transparent:!0,depthWrite:!1,side:2}));Vt.renderOrder=2.5,Vt.name="passMarks",s(Vt);const tt=ht.getAttribute("color"),rt=n.flights.map((ot,Z)=>Rc(n.flights,Z));g.push(ot=>{if(Vt.visible=o.runPaths==="auto",!!Vt.visible){for(const Z of R){const bt=n.flights[Z.flight],Gt=ot<bt.t0+bt.duration?0:wc(ot,bt,rt[Z.flight])*ld(1);let te=Z.vert0;for(let fe=0;fe<Z.vertCount;fe++,te++)tt.setXYZW(te,1,1,1,Gt)}tt.needsUpdate=!0}})}}{const w=t1(n.departures,n.anims,i.clips),T={arrivals:n.arrivals,flights:n.flights,attachTo:n.attachTo,staticBall:!e.ball||e.ball.static===!0},R=new tn({map:W1(),color:Ji,blending:2,transparent:!0,depthWrite:!1}),I=new Re(new Kn(Md,Md).rotateX(-Math.PI/2),R);I.position.y=.02,I.renderOrder=3,I.name="possessionRing",s(I);const S=i.ballRadius??H1,A=G1*S,C=_a*r,N=new tn({color:Ji,blending:2,transparent:!0,depthWrite:!1,depthTest:!1,side:2}),k=new Re(new Wa(Math.max(A-C/2,1e-4),A+C/2,40),N);k.frustumCulled=!1,k.renderOrder=8,k.name="possessionHalo",s(k),g.push((H,Q)=>{const V=n1(T,w,H);I.visible=o.highlight&&V.kind==="ring",k.visible=o.highlight&&(V.kind==="halo"||V.kind==="free");const j=Math.sin(H*2*Math.PI/1.6);if(V.kind==="ring"){const O=Cp(d,V.player,H);I.position.x=h(O[0]),I.position.z=l(O[1]);const nt=1+.05*j;I.scale.x=I.scale.z=nt,R.opacity=.72+.18*j}else if(V.kind==="halo"||V.kind==="free"){const O=ed(d,H);k.position.set(h(O.pos[0]),S+O.height,l(O.pos[1])),k.quaternion.copy(Q.quaternion),N.opacity=V.kind==="free"?z1:.72+.18*j}})}const m=[];for(const w of((x=e.overlays)==null?void 0:x.zones)??[]){if(Af.test(w.label??""))continue;const T=new Re(new Kn(w.w,w.h).rotateX(-Math.PI/2).rotateY(Math.PI),new tn({map:X1(w),transparent:!0,depthWrite:!1}));T.position.set(h(w.at[0]),.004,l(w.at[1])),T.renderOrder=.5,s(T),m.push(T)}const v=()=>{for(const w of m)w.visible=o.zones};return v(),{update(w,T){for(const R of g)R(w,T)},set(w){Object.assign(o,w),v()}}}const K1=.16,$1=.25,Op=.8,kp=.6,Bp=8,Y1=kp*Bp;function Z1(i,t){return!(i>=0)||i>=Op||t>Y1*i?0:K1*Math.exp(-i/$1)*Math.sin(2*Math.PI*(t/kp-Bp*i))}function J1(i){const t=[];for(let e=0;e<i.length-1;e++){const n=i[e],s=i[e+1];n.style!=="shot"||s.style!=="drop"||s.from[0]!==n.to[0]||s.from[1]!==n.to[1]||t.push({t:n.t0+n.duration,at:[...n.to],height:s.fromHeight??Q1})}return t}const Q1=.6,Sd=.15,tw=.12,ew=i=>{const t=Math.min(Math.max(i,0),1);return t*t*(3-2*t)};function Ad(i){return ew(Math.min(i,1-i)/tw)}function nw(i,t){const e=i.geometry,n=e.getAttribute("position"),s=e.getAttribute("uv"),r=e.getAttribute("normal");if(!n||n.count!==4)return null;const a=[];for(let j=0;j<4;j++)a.push([n.getX(j),n.getY(j),n.getZ(j)]);const o=[0,1,2].map(j=>Math.min(...a.map(O=>O[j]))),c=[0,1,2].map(j=>Math.max(...a.map(O=>O[j]))),u=[0,1,2].map(j=>c[j]-o[j]),h=u.indexOf(Math.min(...u));if(u[h]>.001)return null;const[l,d]=[0,1,2].filter(j=>j!==h);if(!(u[l]>0&&u[d]>0))return null;const f=(j,O)=>{let nt=0,Y=1/0;for(let J=0;J<4;J++){const ht=Math.abs((a[J][l]-o[l])/u[l]-j)+Math.abs((a[J][d]-o[d])/u[d]-O);ht<Y&&(Y=ht,nt=J)}return nt},p=f(0,0),_=f(1,0),g=f(0,1),m=f(1,1),v=(j,O)=>s?O?s.getY(j):s.getX(j):0,y=new F().setFromMatrixScale(t).x,x=Math.max(2,Math.min(96,Math.ceil(u[l]*y/Sd))),w=Math.max(2,Math.min(96,Math.ceil(u[d]*y/Sd))),T=(x+1)*(w+1),R=new Float32Array(T*3),I=new Float32Array(T*2),S=new Float32Array(T*3),A=new Float32Array(T),C=r?[r.getX(0),r.getY(0),r.getZ(0)]:[0,0,0];for(let j=0;j<=w;j++)for(let O=0;O<=x;O++){const nt=j*(x+1)+O,Y=O/x,J=j/w;R[nt*3+h]=a[0][h],R[nt*3+l]=o[l]+u[l]*Y,R[nt*3+d]=o[d]+u[d]*J;for(const ht of[0,1])I[nt*2+ht]=v(p,ht)*(1-Y)*(1-J)+v(_,ht)*Y*(1-J)+v(g,ht)*(1-Y)*J+v(m,ht)*Y*J;S.set(C,nt*3),A[nt]=Ad(Y)*Ad(J)}const N=[];for(let j=0;j<w;j++)for(let O=0;O<x;O++){const nt=j*(x+1)+O;N.push(nt,nt+1,nt+x+1,nt+1,nt+x+2,nt+x+1)}const k=new Xe;k.setAttribute("position",new Ie(R,3)),k.setAttribute("uv",new Ie(I,2)),k.setAttribute("normal",new Ie(S,3)),k.setIndex(N),k.userData.drillOwned=!0,i.geometry=k;const H=new Float32Array(R),Q=new Float32Array(T*3),V=new F;for(let j=0;j<T;j++)V.fromArray(H,j*3).applyMatrix4(t).toArray(Q,j*3);return{mesh:i,axis:h,rest:H,world:Q,weight:A,scale:y}}function Ed(i,t=!1){if(i.goal.updateWorldMatrix(!0,!1),!t&&i.placed.equals(i.goal.matrixWorld))return;const e=new he().copy(i.goal.matrixWorld).invert();for(const n of i.hits)n.p.copy(n.w).applyMatrix4(e),n.p.z=Xn.zMin;i.placed.copy(i.goal.matrixWorld)}function iw(i,t,e){const n=[];if(i.length&&t.length){const s=i.map(()=>[]);for(const r of t){const a=e(r.at,r.height);let o=0,c=1/0;i.forEach((u,h)=>{const l=u.position.distanceToSquared(a);l<c&&(c=l,o=h)}),s[o].push(r)}i.forEach((r,a)=>{if(!s[a].length)return;r.updateMatrixWorld(!0);const o=new he().copy(r.matrixWorld).invert(),c=[];if(r.traverse(h=>{const l=h;if(!l.isMesh||!sw(l))return;const d=nw(l,new he().multiplyMatrices(o,l.matrixWorld));d&&c.push(d)}),!c.length)return;const u={panels:c,goal:r,dirty:!1,placed:new he,hits:s[a].map(h=>({t:h.t,w:e(h.at,h.height),p:new F}))};Ed(u,!0),n.push(u)})}return{panels:n.reduce((s,r)=>s+r.panels.length,0),update(s){for(const r of n){const a=rw(r.hits,s);if(!a){if(!r.dirty)continue;for(const c of r.panels)aw(c);r.dirty=!1;continue}Ed(r);const o=s-a.t;for(const c of r.panels){const u=c.mesh.geometry.getAttribute("position"),h=u.array;for(let l=0;l<c.weight.length;l++){const d=c.world[l*3]-a.p.x,f=c.world[l*3+1]-a.p.y,p=c.world[l*3+2]-a.p.z,_=Z1(o,Math.hypot(d,f,p))*c.weight[l];h[l*3+c.axis]=c.rest[l*3+c.axis]+_/c.scale}u.needsUpdate=!0}r.dirty=!0}}}}const sw=i=>(Array.isArray(i.material)?i.material:i.material?[i.material]:[]).some(e=>/^net/i.test(e.name))||/^net/i.test(i.name);function rw(i,t){let e=null;for(const n of i)t>=n.t&&t-n.t<Op&&(e=n);return e}function aw(i){const t=i.mesh.geometry.getAttribute("position");t.array.set(i.rest),t.needsUpdate=!0}const ul=new F(0,1,0),Gp=.04,zp=8,Sr=.1,zs=46,Hs=25,Td=70;function za(i,t){return new F(Math.cos(i)*Math.sin(t),Math.sin(i),-Math.cos(i)*Math.cos(t))}function Ja(i){const t=i.fov*Math.PI/360;return{vHalf:t,hHalf:Math.atan(Math.tan(t)*i.aspect)}}let $i=new Float64Array(64),Sa=new Float64Array(64),Aa=new Float64Array(64);const Hp=new F,Vp=new F,Pi=new F;function wd(i,t,e){let n=-1/0,s=-1/0;for(let r=0;r<t;r++)n=Math.max(n,i[r]/(2*e)+$i[r]/2),s=Math.max(s,-i[r]/(2*e)+$i[r]/2);return n+s}function Rd(i,t,e,n){let s=-1/0,r=1/0;for(let a=0;a<t;a++)s=Math.max(s,i[a]-(n-$i[a])*e),r=Math.min(r,i[a]+(n-$i[a])*e);return[(s+r)/2,Math.max((r-s)/2,0)]}function Ha(i,t,e,n,s){const r=i.length;$i.length<r&&($i=new Float64Array(r),Sa=new Float64Array(r),Aa=new Float64Array(r));const a=Hp.crossVectors(ul,e).normalize(),o=Vp.crossVectors(e,a).normalize(),c=Math.tan(s),u=Math.tan(n);for(let _=0;_<r;_++)Pi.subVectors(i[_],t),$i[_]=Pi.dot(e),Sa[_]=Pi.dot(a),Aa[_]=Pi.dot(o);const h=Math.max(Math.max(wd(Sa,r,c),wd(Aa,r,u))*(1+Gp),zp),[l,d]=Rd(Sa,r,c,h),[f,p]=Rd(Aa,r,u,h);return{dist:h,offset:new F().addScaledVector(a,l).addScaledVector(o,f),slack:new ee(d,p)}}function ow(i,t,e,n,s){const r=Hp.crossVectors(ul,e).normalize(),a=Vp.crossVectors(e,r).normalize(),o=Math.tan(s),c=Math.tan(n);let u=0;for(const h of i){Pi.subVectors(h,t);const l=Pi.dot(e);u=Math.max(u,Math.abs(Pi.dot(r))/o+l,Math.abs(Pi.dot(a))/c+l)}return Math.max(u*(1+Gp),zp)}function Wp(i,t,e,n){const[s,r]=e?[i,t]:[t,i];return s>r*(1+Sr)?!0:r>s*(1+Sr)?!1:n}function jp(i,t,e=zs,n=Hs){const s=new dn().setFromPoints(i),r=s.getCenter(new F),a=s.getSize(new F),{vHalf:o,hHalf:c}=Ja(t),u=e*Math.PI/180,h=n*Math.PI/180,l=Ha(i,r,za(u,h),o,c).dist,d=Ha(i,r,za(u,h+Math.PI/2),o,c).dist,f=Wp(a.x,a.z,t.aspect<1,d<l*(1-Sr));return{dist:f?d:l,alt:f}}function oc(i,t,e,n=zs,s=Hs){const{dist:r}=jp(i,t,n,s);return 2*r*Math.tan(Ja(t).vHalf)/e}function Cd(i=zs){return 1/Math.sqrt(Math.sin(i*Math.PI/180))}const Ic=(i,t)=>!(t>0)||!Number.isFinite(i)?1:1-Math.exp(-i/t),Id=.6,cw=.8,lw=30,uw=Hs,hw=12,Pd=1.03,dw=1.5;function fw(i,t){if(!(t>0)||!(i>=0))return 1;const e=Math.min(i/t,1);return Pd+(1-Pd)*(e*e*(3-2*e))}const pw=2,Pc=.5,mw=i=>{const t=Math.floor(Math.max(i,0)/Pc)*Pc;return[t,t+pw]},gw=.25,_w=.06;function bw(i,t){const e=new F;if(!i.length)return e;for(const n of i)e.add(n);return e.divideScalar(i.length).sub(t).multiplyScalar(gw)}class xw{constructor(t,e=zs,n=Hs){en(this,"target",new F);en(this,"wanted",new F);en(this,"useAlt",!1);en(this,"pushAt",-1);en(this,"pushFor",0);en(this,"elevAt",-1);this.camera=t,this.elevDeg=e,this.azDeg=n}armPushIn(t,e){this.pushAt<0&&(this.pushAt=e),this.pushFor=Math.max(t,0)}pushInAt(t){return this.pushAt<0?1:fw(t-this.pushAt,this.pushFor)}setElev(t){this.elevDeg=t}get elev(){return this.elevDeg}setAz(t){this.azDeg=t}get az(){return this.azDeg}get elevNow(){return this.elevAt<0?this.elevDeg:this.elevAt}frame(t,e,n={}){if(!t.length)return;const s=new dn().setFromPoints(t),r=n.lookAt?n.lookAt.clone():s.getCenter(new F),a=s.getSize(new F),{vHalf:o,hHalf:c}=Ja(this.camera),u=n.elevDeg??this.elevDeg;this.elevAt=this.elevAt<0?u:this.elevAt+(u-this.elevAt)*Ic(e,Id);const h=this.elevAt*Math.PI/180,l=(n.azDeg??this.azDeg)*Math.PI/180,d=l+Math.PI/2,f=za(h,l),p=za(h,d),_=Ha(t,r,f,o,c),g=Ha(t,r,p,o,c);!this.useAlt&&g.dist<_.dist*(1-Sr)?this.useAlt=!0:this.useAlt&&_.dist<g.dist*(1-Sr)?this.useAlt=!1:this.useAlt=Wp(a.x,a.z,this.camera.aspect<1,this.useAlt);const m=this.useAlt?g:_,v=this.useAlt?p:f,y=n.lookAt?r:r.clone().add(m.offset),x=n.lookAt?ow(t,r,v,o,c):m.dist;if(n.breath&&!n.lookAt){const R=new F().crossVectors(ul,v).normalize(),I=new F().crossVectors(v,R).normalize(),S=_w*m.dist,A=(C,N)=>{const k=Math.min(N,S);return Math.min(Math.max(C,-k),k)};y.addScaledVector(R,A(n.breath.dot(R),m.slack.x)).addScaledVector(I,A(n.breath.dot(I),m.slack.y))}const w=x*(n.now!==void 0?this.pushInAt(n.now):1);this.wanted.copy(v).multiplyScalar(w).add(y);const T=Ic(e,Id);this.camera.position.lerp(this.wanted,T),this.target.lerp(y,T),this.camera.lookAt(this.target)}get lookTarget(){return this.target.clone()}}const vw=1.8,yw=34,Mw=844,Sw=1,Xp=4;function Ld(i,t,e=zs,n=Hs){const{vHalf:s}=Ja(t),r=e*Math.PI/180,{dist:a}=jp(i,t,e,n),o=yw*2*a*Math.tan(s)/(Mw*vw*Math.cos(r));return Math.min(Xp,Math.max(Sw,o))}function Aw(i,t,e,n=zs,s=Hs,r=Xp){const a=h=>xr(i,Math.min(r,h));let o=a(Ld(t,e,n,s)),c=0,u=0;for(let h=0;h<8;h++){c++;const l=a(Ld([...t,...xc(i,o)],e,n,s));if(u=Math.abs(l-o)/o,o=l,u<=.005)break}return{scale:o,rounds:c,residual:u,framed:[...t,...xc(i,o)]}}class Ew{constructor(){en(this,"last",-1);en(this,"dts",[])}tick(t){this.last>=0&&(this.dts.push(t-this.last),this.dts.length>120&&this.dts.shift()),this.last=t}get avg(){return this.dts.length?1e3/(this.dts.reduce((t,e)=>t+e)/this.dts.length):0}get min(){return this.dts.length?1e3/Math.max(...this.dts):0}}const lr={clips:0,schedule:0,build:0};let Dd=null;function Tw(){return Dd??(Dd=fetch(xi("assets/clips_ochi.json")).then(i=>i.json()).then(i=>cp(i)).catch(i=>{throw Dd=null,i}))}let Fd=null;function ww(i){return Fd??(Fd=Kc().loadAsync(xi("assets/ball.glb")).then(t=>(t.scene.traverse(e=>{const n=e.material;n!=null&&n.isMeshStandardMaterial&&(n.emissive.set(16777215),n.emissiveIntensity=.32)}),t.scene)).catch(t=>{throw Fd=null,t}))}function Rw(i,t,e){if(i)return;const n=document.getElementById("hud");n&&(n.textContent=t)}const qp="coach";function Cw(i){return i.team===qp||i.number===void 0?void 0:String(i.number)}function Iw(i){const t=Object.keys(i);return t.includes("white")?"white":t.find(e=>e!==qp)??t[0]}const Pw=i=>i==="boys"||i==="girls";async function Lw(i,t,e,n=jf){if(!Pw(e))return;let s=null;try{s=await n(e)}catch{s=null}return Fw(i,t,s)}const Dw=(i,t,e)=>i===t&&e!==void 0;function Fw(i,t,e){if(!(e!=null&&e.length))return;let n=0;return i.map((s,r)=>s.team===t?e[n++%e.length]:r)}async function tR(i,t,e={}){var Pt,Tt,zt;const n=performance.now(),s=Iy(i),r=await Tw();lr.clips=performance.now()-n;const a=e.stage??IM(t),o=new _n,c=[[-1,-1],[1,-1],[1,1],[-1,1]].map(([$,_t])=>new F($*s.pitch.width/2,0,_t*s.pitch.length/2)),u=s.players.map($=>new F($.start[0]-s.pitch.width/2,0,$.start[1]-s.pitch.length/2)),h=[...c,...u],l=()=>e.bodyScale??Aw(s,h,a.camera,e.elev,e.az).scale,d=$=>[...h,...xc(s,$)],f=a.size();let p=l(),_=d(p);Lh(.35*p);let g=xr(s,p);const m=performance.now(),v=((Pt=e.schedules)==null?void 0:Pt.get(g))??jE(s,r,g);(Tt=e.schedules)==null||Tt.set(g,v),lr.schedule=performance.now()-m;const y=Wy(s),x=($=e.elev??0)=>$>=Td?[..._,...y]:_;let w=oc(x(),a.camera,a.size().height,e.elev,e.az),T=Cd(e.elev);const R=eM(s.pitch.width,s.pitch.length),{toWorld:I,goals:S,cones:A,boards:C,setWorld:N,setMasts:k}=await SM(o,s,a.renderer.capabilities.getMaxAnisotropy(),p,R),H=iw(S,J1(v.flights),I);let Q=_.slice(h.length);a.fitShadow(_),a.setFog(Qy(s.pitch.width,s.pitch.length)),a.setHorizon(R),a.setSky(!1);const V=Iw(s.teams),j=await Xa(o,s.players.length,void 0,void 0,0,await Lw(s.players,V,e.squad)),O=e.kit?await qf(e.kit.pattern,s.players.flatMap(($,_t)=>$.team===V?Xf(j[_t]):[])):null,nt=await Kf(),Y=new Map,J=new Map;s.players.forEach(($,_t)=>{const xt=j[_t];Y.set($.id,xt),xt.root.rotation.order="YXZ",xt.root.scale.setScalar(p);const At=Dw($.team,V,e.kit);Yf(xt,At?e.kit:s.teams[$.team].kit.primary,At?O:null,{label:Cw($),boxes:nt}),xt.root.position.copy(I($.start));const dt=Oy(.9);dt.scale.setScalar(p),dt.position.x=xt.root.position.x,dt.position.z=xt.root.position.z,o.add(dt),J.set($.id,dt)});const ht=(await ww()).clone();ht.scale.setScalar(p),o.add(ht);const Vt=yd({root:o,mesh:ht,bodyScale:p,radius:.11*p,resolution:a.size()}),tt=!!s.ball,rt=Na(s);tt||(ht.visible=!1,Vt.hide());const ot=Array.from({length:(((zt=s.balls)==null?void 0:zt.length)??0)+v.ballSwaps.length},()=>ht.clone()),Z=ot.map($=>($.scale.setScalar(p),o.add($),yd({root:o,mesh:$,bodyScale:p,radius:.11*p,resolution:a.size(),streak:!1}))),bt=new xw(a.camera,e.elev,e.az);bt.armPushIn(dw,performance.now()/1e3);let Gt="fit",te=-1,fe=[];const re=new F,Pe=new F,G=new F;let kt=!1,oe=[],me=-1/0;const It=new YE(s.duration,e.loop??!0),Le=new Ew,Jt=new Map(s.players.map($=>[$.id,$.role])),{applyAnim:L,cueAt:E}=$E(r,v.anims,Jt,v.bounces),K=ZE(v.turns,s.players.map($=>[$.id,$.role==="keeper"?Ge($.start,rt):0])),at=K.heading,gt=K.rateOf,ct=new Map(s.players.map($=>[$.id,$.start]));function Qt(){const $=new Set(o.children);return{built:q1({scene:o,drill:s,schedule:v,clips:r,headingAt:xt=>at.get(xt)??0,search:e.search,pathM:w,pathWidthK:T,ballRadius:.11*p,goalScale:g}),owned:o.children.filter(xt=>!$.has(xt))}}let Rt=Qt();const Bt={},Se={update:($,_t)=>Rt.built.update($,_t),set:$=>{Object.assign(Bt,$),Rt.built.set($)}};function Mt(){for(const $ of Rt.owned)o.remove($),Of($);Rt=Qt(),Rt.built.set(Bt)}const Ht=uT(),se=[],ce=_T(),Wt=()=>{ce.reset(),Ht.reset()};It.onSeek(Wt),It.onLoop(Wt);const ve=g1(It);function de(){const $=l();if($!==p){p=$,_=d(p),Q=_.slice(h.length),g=xr(s,p),Lh(.35*p);for(const _t of Y.values())_t.root.scale.setScalar(p);for(const _t of J.values())_t.scale.setScalar(p);ht.scale.setScalar(p);for(const _t of ot)_t.scale.setScalar(p);for(const _t of A)_t.scale.setScalar(p);for(const _t of C)Lf(_t,p);for(const _t of S)_t.scale.setScalar(g);a.fitShadow(_),Wt()}Vt.resize(p,.11*p,a.size());for(const _t of Z)_t.resize(p,.11*p,a.size());w=oc(x(bt.elev),a.camera,a.size().height,bt.elev,bt.az),Mt(),a.rule.wake()}let Ee=0;const q=a.onBox(()=>{Ee||(Ee=requestAnimationFrame(()=>{Ee=0,de()}))}),Dt=a.size();(Dt.width!==f.width||Dt.height!==f.height)&&de();const it=e.embed?null:new Map;e.embed||Object.assign(window,{__world:{byId:Y,heading:at,camera:a.camera,ball:ht,spare:ot,schedule:v,goals:S,bodyScale:p,lockDbg:it},__pathMetrics:()=>({metresPerPx:w,widthK:T,runHalfM:1.6*w*T/2,passHalfM:2.2*w*T/2})});function pt($,_t=30,xt=.12,At=4,dt=1){const Ot=[];for(const[B,U]of Y)U.root.traverse(z=>{z.isBone&&/foot/i.test(z.name)&&Ot.push({id:B,name:z.name,bone:z})});It.pause(),It.seek(0);for(let B=0;B<90;B++)a.step(1/60);It.play();const jt=1/_t,Ft=Math.min($??s.duration,s.duration),pe=Math.max(0,Math.round(Ft*_t)-1),yt=Ot.map(()=>[]),Te=new F;for(let B=0;B<=pe;B++){for(let U=0;U<Ot.length;U++){const z=Ot[U].bone.matrixWorld.elements;Te.set(z[12],z[13],z[14]);const D=Y.get(Ot[U].id).root.worldToLocal(Te.clone());yt[U].push([B*jt,z[12],z[13],z[14],D.x,D.z])}a.step(jt)}It.pause();const Zt=(B,U)=>{var z;return((z=E(B,U))==null?void 0:z.clip)??"idle"},M=[];return Ot.forEach((B,U)=>{const z=(lt,ft)=>{if(ft-lt<At)return;const W=yt[U].slice(lt,ft);let vt=0,St=0;for(let mt=1;mt<W.length;mt++)vt=Math.max(vt,Math.hypot(W[mt][1]-W[0][1],W[mt][3]-W[0][3])),St+=Math.hypot(W[mt][4]-W[mt-1][4],W[mt][5]-W[mt-1][5])/jt;M.push({player:B.id,foot:B.name,t0:+W[0][0].toFixed(2),t1:+W[W.length-1][0].toFixed(2),drift:+vt.toFixed(3),localSpeed:+(St/(W.length-1)).toFixed(2),clip0:Zt(B.id,W[0][0]),clip1:Zt(B.id,W[W.length-1][0])})},D=yt[U].map((lt,ft)=>ft===0?1/0:Math.hypot(lt[1]-yt[U][ft-1][1],lt[3]-yt[U][ft-1][3])/jt);let et=-1;yt[U].forEach((lt,ft)=>{const W=lt[2]<xt,vt=ft>0&&Zt(B.id,lt[0])!==Zt(B.id,yt[U][ft-1][0]),St=D[ft]>dt&&ft>0&&D[ft-1]>dt;et>=0&&(!W||vt||St)&&(z(et,ft),et=-1),et<0&&W&&D[ft]<dt&&(et=ft)}),et>=0&&z(et,yt[U].length)}),M.sort((B,U)=>U.drift-B.drift),{feet:Ot.map(B=>({id:B.id,name:B.name})),hPlant:xt,fps:_t,phases:M}}e.embed||Object.assign(window,{__footAudit:pt}),e.embed&&a.rule.enable();const Ut=new Map,Nt=new F;let ue=0;const P=e.sfx?f1(v.flights):[];let b=0;a.scene.add(o);const st=($,_t)=>{var Te,Zt,M,B;It.advance($);const xt=It.t,At=It.playing?$:0,dt=v.attachTo(xt),Ot=Ca({t:xt,holderId:dt,holderRoot:dt?ct.get(dt):null,holderHeading:dt?at.get(dt):0,ballStart:rt,flights:v.flights,departures:v.departures,arrivals:v.arrivals}).pos;for(const U of s.players){const z=Y.get(U.id);let D=U.start,et=0;for(const Yt of v.moves[U.id]??[])if(xt>=Yt.t0){const ge=En(Yt,xt);D=ge.pos,et=ge.speed}const lt=op(v.dives,v.moves[U.id],U.id,xt),ft=lt!==null;lt&&(D=lt),z.root.position.copy(I(D));const W=v.moves[U.id]??[],vt=ft?0:qM(W,xt);z.root.rotation.x=0,z.root.rotation.z=0,ft||(z.root.position.y-=ZM(W,xt)-IE(v.bounces,U.id,xt)*p),ct.set(U.id,D);let St=null,mt=!1;for(const Yt of v.faces)Yt.player===U.id&&xt>=Yt.t0&&(St=Yt.until===void 0||xt<=Yt.until?Yt.at:null,Yt.lock&&xt>=Yt.lock[0]&&xt<=Yt.lock[1]&&(mt=!0));const Kt=St!==null&&ji(D,St),ne=sS(D,Ot,Kt,U.id===dt),ie=Kt?Ge(D,St):ne??at.get(U.id),{h:Ct,clipYaw:Xt}=K.step(U.id,xt,At,et,ie,mt,!Kt&&ne!==null);z.root.rotation.y=JM(Ct,Xt),L(U.id,z,xt,At,et);const wt=Sc(z);if(wt.length){const Yt=ce.tilt(U.id,ft?[0,0]:jM(W,xt),at.get(U.id),vt,At);td(z.root,wt[0],Yt.pitch,0,Yt.roll)}const ye=zf(z);if(ye.length&&!ft){z.root.updateMatrixWorld(!0);for(let le=0;le<ye.length;le++){const Ue=ye[le].matrixWorld.elements;se[le]=[Ue[12],Ue[13],Ue[14]]}se.length=ye.length;const Yt=E(U.id,xt),ge=lT((Yt==null?void 0:Yt.clip)??null,Yt?(Te=r.clips[Yt.clip])==null?void 0:Te.category:void 0,oT(W,xt)),[Be,xn]=Ht.step(U.id,se,[z.root.position.x,z.root.position.z],xt,At,ge,p);z.root.position.x+=Be,z.root.position.z+=xn,it&&it.set(U.id,[ge?1:0,Math.hypot(Be,xn),Ht.foot(U.id),et,Ht.rootSpeed(U.id)])}const $t=J.get(U.id);if($t.position.x=z.root.position.x,$t.position.z=z.root.position.z,U.id===dt){const Yt=l1(v.arrivals,U.id,xt),ge=Yt>=0?Hf(z)[Yt]:void 0;if(ge){z.root.updateMatrixWorld(!0);const Be=ge.matrixWorld.elements;Nt.set(Be[12],Be[13],Be[14]),ue=Lp(v.arrivals,v.departures,U.id,xt)}}}const jt=Ca({t:xt,holderId:dt,holderRoot:dt?ct.get(dt):null,holderHeading:dt?at.get(dt):0,ballStart:rt,flights:v.flights,departures:v.departures,arrivals:v.arrivals});ht.position.copy(I(jt.pos,.11*p+jt.height)),ue>0&&(ht.position.lerp(Nt,ue),ue=0),tt&&Vt.update({pos:ht.position,height:jt.height,t:xt,dt:At,apex:jt.apex,speed:jt.speed,held:dt!==null&&u1(v.arrivals,v.departures,dt,xt)});for(let U=0;U<ot.length;U++){const z=(Zt=s.balls)==null?void 0:Zt[U],D=z?v.ballSwaps.find(ft=>ft.take===U):v.ballSwaps[U-(((M=s.balls)==null?void 0:M.length)??0)],et=z?!(D&&xt>=D.t):xt>=D.t;if(ot[U].visible=et,!et){Z[U].hide();continue}let lt;z?z.carrier&&ct.has(z.carrier)?lt=Vn(ct.get(z.carrier),at.get(z.carrier)??0):lt=Qf(z,xt):lt=D.drop,ot[U].position.copy(I(lt,.11*p)),Z[U].update({pos:ot[U].position,height:0,t:xt,dt:At,held:!1,speed:0})}e.sfx&&(ve(e.sfx,P,b,xt,It.playing,jt.height,jt.speed),b=xt),Se.update(xt,a.camera),H.update(xt);for(const U of s.players){const z=Y.get(U.id),D=Gf(z);if(!D)continue;const et=mE(v.faces,U.id,xt),lt=et?I(et):ht.position,ft=QM(Math.atan2(lt.x-z.root.position.x,lt.z-z.root.position.z)-at.get(U.id)+nS(gt.get(U.id)??0)),W=Ut.get(U.id)??0,vt=At>0?W+(ft-W)*.3:W;Ut.set(U.id,vt);const St=Sc(z),mt=St.length>1?ce.shoulder(U.id,vt,At):0;St.length>1&&td(z.root,St[1],0,mt,0),vT(D,-(vt-mt))}const Ft=[...Y.values()].map(U=>new F(U.root.position.x,0,U.root.position.z)),pe=a.rule.snap()?1/0:$,yt=_t/1e3;if(Gt==="broadcast"){let U=-1/0;for(const D of v.departures)xt>=D.contact&&D.contact>U&&(U=D.contact);U!==me&&(me=U,oe=s.players.filter(D=>I(ct.get(D.id)??D.start).distanceTo(ht.position)<=hw).map(D=>D.id)),!kt||pe===1/0?(G.copy(ht.position),kt=!0):G.lerp(ht.position,Ic($,cw));const z=oe.length?oe.map(D=>{const et=Y.get(D);return new F((et==null?void 0:et.root.position.x)??0,0,(et==null?void 0:et.root.position.z)??0)}):Ft;bt.frame([...z,ht.position.clone()],pe,{now:yt,lookAt:G.clone(),elevDeg:lw,azDeg:uw})}else{const[U,z]=mw(xt);if(U!==te){te=U,fe=[];const D=[];for(let et=U;et<=z+1e-9;et+=Pc){const lt=new Map;for(const St of s.players){let mt=St.start;for(const ne of v.moves[St.id]??[])et>=ne.t0&&(mt=En(ne,et).pos);lt.set(St.id,mt);const Kt=I(mt);fe.push(new F(Kt.x,0,Kt.z)),Math.abs(Kt.x)<=s.pitch.width/2&&Math.abs(Kt.z)<=s.pitch.length/2&&D.push(new F(Kt.x,0,Kt.z))}const ft=v.attachTo(et),W=Ca({t:et,holderId:ft,holderRoot:ft?lt.get(ft)??null:null,holderHeading:ft?at.get(ft)??0:0,ballStart:rt,flights:v.flights,departures:v.departures,arrivals:v.arrivals}),vt=I(W.pos);D.push(new F(vt.x,0,vt.z))}re.copy(bw(D,Pe))}Ft.push(...fe),Ft.push(...c,...Q),bt.elevNow>=Td&&Ft.push(...y),bt.frame([...Ft,ht.position.clone()],pe,{now:yt,breath:re})}Le.tick(_t),Rw(!!e.embed,`t ${xt.toFixed(1)}s  fps ${Le.avg.toFixed(0)}
[space] play/pause  [r] restart`),(B=e.onFrame)==null||B.call(e,xt,_t)};a.start(st);const ut=$=>{$.code==="Space"&&(It.playing?It.pause():It.play()),$.code==="KeyR"&&It.seek(0)};e.embed||addEventListener("keydown",ut);function X($){$!==Gt&&(Gt=$,N(!0),a.setSky($==="broadcast"),k($==="broadcast"),kt=!1,me=-1/0,a.rule.wake())}function Et($,_t=bt.az){$===bt.elev&&_t===bt.az||(bt.setElev($),bt.setAz(_t),w=oc(x($),a.camera,a.size().height,$,_t),T=Cd($),Mt(),a.rule.wake())}return lr.build=performance.now()-n-lr.clips-lr.schedule,{timeline:It,step:$=>a.step($),stage:a,overlays:Se,setCamera:Et,setFollow:X,setPushIn:$=>bt.armPushIn($,performance.now()/1e3),dispose(){removeEventListener("keydown",ut),q(),Ee&&(cancelAnimationFrame(Ee),Ee=0),a.scene.remove(o),PM(o,[...j.map($=>$.root),ht,...ot,...S]),O==null||O.dispose(),a.setFog(null),a.setHorizon(null),a.setSky(!0),e.stage?a.park(st):a.dispose()}}}const Nd="6d76843a",Kp=24,Nw=/^[\w-]+$/,Uw=async i=>await(await fetch(xi(`drills/${i}.json`))).json();class eR{constructor(t=Uw,e=null,n=Kp){en(this,"mem",new Map);en(this,"inflight",new Map);this.fetchJson=t,this.db=e,this.cap=n}keys(){return[...this.mem.keys()]}get size(){return this.mem.size}peek(t){const e=this.mem.get(t);return e===void 0?null:(this.mem.delete(t),this.mem.set(t,e),e)}put(t,e){const s=this.mem.get(t)??{json:e,schedules:new Map};s.json=e,this.mem.delete(t),this.mem.set(t,s);for(const r of this.mem.keys()){if(this.mem.size<=this.cap)break;this.mem.delete(r)}return s}async take(t){const e=this.peek(t);if(e)return e;let n=this.inflight.get(t);return n||(n=this.miss(t).finally(()=>this.inflight.delete(t)),this.inflight.set(t,n)),n}async miss(t){var r;const e=this.db?await this.db.read(t).catch(()=>null):null;if(e&&e.build===Nd)return this.put(t,e.json);const n=await this.fetchJson(t),s=this.put(t,n);return(r=this.db)==null||r.write(t,{build:Nd,json:n}).catch(()=>{}),s}async warm(t){const e=t.filter(n=>typeof n=="string"&&Nw.test(n)).slice(0,this.cap);for(const n of e)try{await this.take(n)}catch{}for(const n of[...e].reverse())this.peek(n)}}const Ow="tactivo-engine",Gi="drills",Ud=i=>new Promise((t,e)=>{i.onsuccess=()=>t(i.result),i.onerror=()=>e(i.error)});function kw(){try{return globalThis.indexedDB}catch{return}}function nR(i=kw()){if(!i)return null;let t=null;const e=()=>t??(t=new Promise((n,s)=>{const r=i.open(Ow,2);r.onupgradeneeded=()=>{r.result.objectStoreNames.contains(Gi)&&r.result.deleteObjectStore(Gi),r.result.createObjectStore(Gi)},r.onsuccess=()=>n(r.result),r.onerror=()=>s(r.error),r.onblocked=()=>s(new Error("blocked"))}).catch(n=>{throw t=null,n}));return{async read(n){try{const r=(await e()).transaction(Gi,"readonly").objectStore(Gi);return await Ud(r.get(n))??null}catch{return null}},async write(n,s){try{const r=await e();await Ud(r.transaction(Gi,"readwrite").objectStore(Gi).put(s,n))}catch{}}}}const Od=["plain","stripes","hoops","halves","sash","sleeves"],Bw="#FFFFFF",cc=/^#[0-9a-fA-F]{6}$/;function kd(i){if(typeof i!="object"||i===null)return We("kit: must be {a, pattern?, b?, shorts?, socks?}");const t=i;if(typeof t.a!="string"||!cc.test(t.a))return We("kit: a must be a #RRGGBB colour");if(t.b!==void 0&&(typeof t.b!="string"||!cc.test(t.b)))return We("kit: b must be a #RRGGBB colour");if(t.pattern!==void 0&&(typeof t.pattern!="string"||!Od.includes(t.pattern)))return We(`kit: pattern must be one of ${Od.join(", ")}`);for(const e of["shorts","socks"])if(t[e]!==void 0&&t[e]!==null&&(typeof t[e]!="string"||!cc.test(t[e])))return We(`kit: ${e} must be a #RRGGBB colour or absent`);return{a:t.a,pattern:t.pattern??"plain",b:t.b??Bw,...typeof t.shorts=="string"?{shorts:t.shorts}:{},...typeof t.socks=="string"?{socks:t.socks}:{}}}const Bd=["boys","girls","mixed"],$p="mixed";function Gd(i){return i==null?$p:typeof i!="string"||!Bd.includes(i)?We(`squad: must be one of ${Bd.join(", ")}`):i}const zd=["shirt","full"],Yp="shirt";function Hd(i){return i==null?Yp:typeof i!="string"||!zd.includes(i)?We(`framing: must be one of ${zd.join(", ")}`):i}const Vd=new Set(["fit","broadcast"]),Zp=.5,Gw=5,iR={phase:"idle",playing:!1,loop:!0,duration:0,seq:0,lastTimeMs:-1/0,narration:[],cue:-1,intro:null,holdUntilMs:null,hookCeilingMs:0,introSkip:!1},zw=100,Lc=1/0,Hw=2e3,lc=/^[\w-]+$/,Vw=/^[A-Za-z0-9_./-]{1,80}$/,Ww=i=>Vw.test(i)&&!i.includes(".."),jw=30,Xw=85,qw=i=>Math.min(Math.max(i,jw),Xw),Yi=i=>({state:i,effects:[],out:[]}),Ia=(i,t,e)=>({state:i,effects:[],out:[{type:"error",code:t,message:e}]}),Kw=new Set(["auto","authored","off"]),$w=new Set(["hello","ready","time","looped","ended","error","paused","playing","cue","audio","statsReply"]);function sR(i){return Array.isArray(i)?i.map(t=>{const e=t,n=typeof(e==null?void 0:e.text)=="string"&&e.text!==""?e.text:null,s=typeof(e==null?void 0:e.t)=="number"&&Number.isFinite(e.t)?e.t:1/0,r=e==null?void 0:e.hold,a=typeof r=="number"&&Number.isFinite(r)&&r>0?Jp(r):0,o=typeof(e==null?void 0:e.beat)=="string"?e.beat:void 0;return{t:n===null?1/0:s,text:n,hold:a,...o?{beat:o}:{}}}):[]}const Jp=i=>Math.min(Math.max(i,Zp),Gw);function Qp(i,t){let e=-1;for(let n=0;n<i.length;n++)i[n].t<=t&&(e=n);return e}const hl=(i,t)=>{var e;return((e=i[t])==null?void 0:e.hold)??0},tm=(i,t)=>{var n;const e=hl(i,t);return{type:"cue",index:t,text:((n=i[t])==null?void 0:n.text)??null,...e>0?{hold:e}:{}}},We=i=>({error:i,code:"bad_message"});function rR(i){if(typeof i!="object"||i===null)return null;const t=i;if(typeof t.type!="string"||$w.has(t.type))return null;switch(t.type){case"load":{const e=t.drill;if(typeof e!="object"||e===null)return We("load: drill must be a DrillScene3D object or {key}");if(t.loop!==void 0&&typeof t.loop!="boolean")return We("load: loop must be a boolean");const n=e;if("key"in n&&Object.keys(n).length===1&&(typeof n.key!="string"||!lc.test(n.key)))return{error:`load: key must match ${lc.source}`,code:"bad_key"};let s;if(t.intro!==void 0){const o=t.intro;if(typeof o!="object"||o===null)return We("load: intro must be {text, hold}");if(typeof o.text!="string"||o.text==="")return We("load: intro.text must be a non-empty string");if(typeof o.hold!="number"||!Number.isFinite(o.hold))return We("load: intro.hold must be a finite number");s={text:o.text,hold:Jp(o.hold)}}let r;if(t.kit!==void 0){const o=kd(t.kit);if("error"in o)return o;r=o}const a=Gd(t.squad);return typeof a!="string"?a:{type:"load",drill:e,loop:t.loop!==!1,...s?{intro:s}:{},...r?{kit:r}:{},...t.squad!==void 0&&t.squad!==null?{squad:a}:{}}}case"preview":case"kit":{const e=kd(t.type==="preview"?t.kit:t);if("error"in e)return e;if(t.type==="kit")return{type:"kit",kit:e};const n=Hd(t.framing);if(typeof n!="string")return n;const s=Gd(t.squad);return typeof s!="string"?s:{type:"preview",kit:e,framing:n,squad:s}}case"frame":{const e=Hd(t.framing);return typeof e!="string"?e:{type:"frame",framing:e}}case"play":case"pause":case"dispose":case"stats":case"unload":return{type:t.type};case"setAudio":{if(typeof t.enabled!="boolean")return We("setAudio: enabled must be a boolean");const e=t.musicGain,n=t.track;return{type:"setAudio",enabled:t.enabled,...typeof t.sfx=="boolean"?{sfx:t.sfx}:{},...typeof t.music=="boolean"?{music:t.music}:{},...typeof e=="number"&&Number.isFinite(e)&&e>=0&&e<=1?{musicGain:e}:{},...typeof n=="string"&&Ww(n)?{track:n}:{}}}case"warm":return Array.isArray(t.keys)?{type:"warm",keys:t.keys.filter(e=>typeof e=="string"&&lc.test(e)).slice(0,Kp)}:We("warm: keys must be an array of drill keys");case"seek":return typeof t.t!="number"||!Number.isFinite(t.t)?We("seek: t must be a finite number"):{type:"seek",t:t.t};case"setSpeed":return typeof t.x!="number"||!Number.isFinite(t.x)||t.x<=0?We("setSpeed: x must be a finite number > 0"):{type:"setSpeed",x:t.x};case"setCamera":return t.elev!==void 0?typeof t.elev!="number"||!Number.isFinite(t.elev)?We("setCamera: elev must be a finite number"):t.az!==void 0&&(typeof t.az!="number"||!Number.isFinite(t.az))?We("setCamera: az must be a finite number"):{type:"setCamera",elev:t.elev,...t.az!==void 0?{az:t.az}:{}}:t.follow!==void 0?typeof t.follow!="string"||!Vd.has(t.follow)?We(`setCamera: follow must be one of ${[...Vd].join(", ")}`):{type:"setCamera",follow:t.follow}:typeof t.mode!="string"?We("setCamera: mode must be a string, or elev a number"):{type:"setCamera",mode:t.mode};case"setOverlays":{const e={type:"setOverlays"};for(const n of["trail","highlight","zones"])if(t[n]!==void 0){if(typeof t[n]!="boolean")return We(`setOverlays: ${n} must be a boolean`);e[n]=t[n]}if(t.runPaths!==void 0){if(typeof t.runPaths!="string"||!Kw.has(t.runPaths))return We("setOverlays: runPaths must be auto|authored|off");e.runPaths=t.runPaths}return e}default:return We(`unknown message type: ${t.type}`)}}function aR(i,t,e=0){if(t.type==="load"){const s=i.seq+1,r="key"in t.drill&&typeof t.drill.key=="string"&&Object.keys(t.drill).length===1?{key:t.drill.key}:{json:t.drill};return{state:{...i,phase:"loading",playing:!1,loop:t.loop,duration:0,seq:s,narration:[],cue:-1,intro:t.intro??null,holdUntilMs:null,introSkip:!1},effects:[...i.phase==="idle"?[]:[{kind:"dispose"}],{kind:"load",seq:s,source:r,loop:t.loop,...t.kit?{kit:t.kit}:{},...t.squad?{squad:t.squad}:{}}],out:[]}}if(t.type==="preview"){const s=i.seq+1;return{state:{...i,phase:"loading",playing:!1,duration:0,seq:s,narration:[],cue:-1,intro:null,holdUntilMs:null,introSkip:!1},effects:[...i.phase==="idle"?[]:[{kind:"dispose"}],{kind:"preview",seq:s,kit:t.kit,framing:t.framing??Yp,squad:t.squad??$p}],out:[]}}if(t.type==="kit")return{state:i,effects:[{kind:"setKit",kit:t.kit}],out:[]};if(t.type==="frame")return{state:i,effects:[{kind:"setFraming",framing:t.framing}],out:[]};if(t.type==="stats")return{state:i,effects:[{kind:"stats"}],out:[]};if(t.type==="warm")return{state:i,effects:[{kind:"warm",keys:t.keys}],out:[]};if(t.type==="setAudio"){const{type:s,...r}=t;return{state:i,effects:[{kind:"setAudio",...r}],out:[]}}if(t.type==="dispose")return{state:{...i,phase:"idle",playing:!1,duration:0,seq:i.seq+1,narration:[],cue:-1,intro:null,holdUntilMs:null,introSkip:!1},effects:[{kind:"dispose"}],out:[]};if(t.type==="unload")return i.phase==="idle"?Yi(i):{state:{...i,phase:"idle",playing:!1,duration:0,seq:i.seq+1,narration:[],cue:-1,intro:null,holdUntilMs:null,introSkip:!1},effects:[{kind:"unload"}],out:[]};if(i.phase==="idle")return Ia(i,"not_loaded",`${t.type}: no drill loaded`);if(i.phase==="loading")return Ia(i,"still_loading",`${t.type}: still loading`);const n=i.holdUntilMs!==null;switch(t.type){case"play":return{state:{...i,playing:!0},effects:n?[]:[{kind:"play"}],out:[{type:"playing",t:e}]};case"pause":return{state:{...i,playing:!1,holdUntilMs:null},effects:[{kind:"pause"}],out:[{type:"paused",t:e}]};case"seek":return{state:{...i,holdUntilMs:null},effects:[{kind:"seek",t:Math.min(Math.max(t.t,0),i.duration)},...n?[{kind:"hold",on:!1}]:[]],out:[]};case"setSpeed":return{state:{...i,holdUntilMs:null},effects:[{kind:"setSpeed",x:t.x},...n?[{kind:"hold",on:!1}]:[]],out:[]};case"setCamera":return"follow"in t?{state:i,effects:[{kind:"setFollow",follow:t.follow}],out:[]}:"elev"in t?{state:i,effects:[{kind:"setCamera",elev:qw(t.elev),...t.az!==void 0?{az:t.az}:{}}],out:[]}:t.mode==="tactical"?Yi(i):Ia(i,"bad_camera",`setCamera: unknown mode ${t.mode} (only tactical)`);case"setOverlays":{const{type:s,...r}=t;return{state:i,effects:[{kind:"setOverlays",flags:r}],out:[]}}}}function oR(i,t,e=0){switch(t.kind){case"loaded":if(t.seq!==i.seq||i.phase!=="loading")return Yi(i);{const n=t.narration??[],s=typeof t.hookHold=="number"&&Number.isFinite(t.hookHold),r=t.voiced&&!s?null:i.intro,a=r?-1:Qp(n,0),o=r?s?Math.max(t.hookHold,Zp):r.hold:0,c=r?o:hl(n,a),u=s?Lc:c>0?e+c*1e3:null,h={type:"ready",duration:t.duration,...t.key!==void 0?{key:t.key}:{}};return{state:{...i,phase:"ready",duration:t.duration,narration:n,cue:a,intro:null,holdUntilMs:u,hookCeilingMs:s?e+t.hookHold*1e3+Hw:0,introSkip:r!==null},effects:u!==null?[{kind:"hold",on:!0}]:[],out:[h,r?{type:"cue",index:-1,text:r.text,hold:o}:tm(n,a)]}}case"loadFailed":return t.seq!==i.seq||i.phase!=="loading"?Yi(i):Ia({...i,phase:"idle",playing:!1,intro:null,holdUntilMs:null,introSkip:!1},"load_failed",`load failed: ${t.message}`);case"hookEnded":return i.holdUntilMs!==Lc?Yi(i):{state:{...i,holdUntilMs:null},effects:[{kind:"hold",on:!1}],out:[]};case"looped":return{state:i,effects:[],out:[{type:"looped",n:t.n}]};case"ended":return{state:{...i,playing:!1},effects:[],out:[{type:"ended",t:t.t}]}}}function cR(i,t,e){if(i.holdUntilMs!==null){const c=i.holdUntilMs===Lc?i.hookCeilingMs:i.holdUntilMs;return e<c?Yi(i):{state:{...i,holdUntilMs:null},effects:[{kind:"hold",on:!1}],out:[]}}const n=Qp(i.narration,t),s=i.playing&&e-i.lastTimeMs>=zw;if(n===i.cue&&!s)return Yi(i);const r=n!==i.cue,a=r&&i.introSkip&&n===0,o=r&&!a?hl(i.narration,n):0;return{state:{...i,cue:n,...r?{introSkip:!1}:{},...s?{lastTimeMs:e}:{},...o>0?{holdUntilMs:e+o*1e3}:{}},effects:o>0?[{kind:"hold",on:!0}]:[],out:[...n!==i.cue?[tm(i.narration,n)]:[],...s?[{type:"time",t}]:[]]}}export{Jw as A,Ji as B,ae as C,mf as D,ig as E,Xe as F,_n as G,Lc as H,Zp as I,Ie as J,Od as K,zg as L,Re as M,of as N,PM as O,Yp as P,VM as Q,HM as R,Bd as S,Qw as T,F as V,eR as W,xi as a,aR as b,IM as c,tm as d,oR as e,sR as f,lr as g,dn as h,iR as i,gn as j,Av as k,Zw as l,kd as m,Fa as n,nR as o,rR as p,es as q,tR as r,$p as s,cR as t,Xa as u,DM as v,qf as w,Xf as x,Kf as y,Yf as z};
