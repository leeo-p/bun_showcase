var Q1="184";var $1=0,S7=1,W1=2;var A9=1,Z1=2,G9=3,N9=0,j8=1,e8=2,J6=0,_9=1,j7=2,v7=3,f7=4,H1=5;var k9=100,K1=101,Y1=102,U1=103,E1=104,X1=200,G1=201,N1=202,k1=203,F1=204,q1=205,D1=206,R1=207,O1=208,M1=209,L1=210,B1=211,V1=212,w1=213,z1=214,I1=0,C1=1,A1=2,b7=3,_1=4,P1=5,T1=6,S1=7,j1=0,v1=1,f1=2,s8=0,y7=1,h7=2,x7=3,g7=4,p7=5,d7=6,l7=7;var F9=301,b6=302,IJ=303,CJ=304,P9=306,b1=1000,AJ=1001,y1=1002,C6=1003,h1=1004;var T9=1005;var v8=1006,_J=1007;var y6=1008;var i8=1009,x1=1010,g1=1011,S9=1012,m7=1013,A6=1014,N6=1015,k6=1016,u7=1017,c7=1018,q9=1020,p1=35902,d1=35899,l1=1021,m1=1022,Q6=1023,h6=1026,x6=1027,u1=1028,n7=1029,g6=1030,s7=1031;var i7=1033,PJ=33776,TJ=33777,SJ=33778,jJ=33779,o7=35840,a7=35841,r7=35842,t7=35843,e7=36196,J5=37492,Q5=37496,$5=37488,W5=37489,vJ=37490,Z5=37491,H5=37808,K5=37809,Y5=37810,U5=37811,E5=37812,X5=37813,G5=37814,N5=37815,k5=37816,F5=37817,q5=37818,D5=37819,R5=37820,O5=37821,M5=36492,L5=36494,B5=36495,V5=36283,w5=36284,fJ=36285,z5=36286;var I5=0,c1=1,p6="",n1="srgb",C5="srgb-linear",A5="linear",W8="srgb";var s1=512,i1=513,o1=514,bJ=515,a1=516,r1=517,yJ=518,t1=519;var _5="300 es",P5=2000;function $W(J){for(let Q=J.length-1;Q>=0;--Q)if(J[Q]>=65535)return!0;return!1}function WW(J){return ArrayBuffer.isView(J)&&!(J instanceof DataView)}function C9(J){return document.createElementNS("http://www.w3.org/1999/xhtml",J)}function e1(){let J=C9("canvas");return J.style.display="block",J}var PQ={},X9=null;function T5(...J){let Q="THREE."+J.shift();if(X9)X9("log",Q,...J);else console.log(Q,...J)}function J$(J){let Q=J[0];if(typeof Q==="string"&&Q.startsWith("TSL:")){let $=J[1];if($&&$.isStackTrace)J[0]+=" "+$.getLocation();else J[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return J}function I0(...J){J=J$(J);let Q="THREE."+J.shift();if(X9)X9("warn",Q,...J);else{let $=J[0];if($&&$.isStackTrace)console.warn($.getError(Q));else console.warn(Q,...J)}}function _0(...J){J=J$(J);let Q="THREE."+J.shift();if(X9)X9("error",Q,...J);else{let $=J[0];if($&&$.isStackTrace)console.error($.getError(Q));else console.error(Q,...J)}}function BJ(...J){let Q=J.join(" ");if(Q in PQ)return;PQ[Q]=!0,I0(...J)}function Q$(J,Q,$){return new Promise(function(W,Z){function H(){switch(J.clientWaitSync(Q,J.SYNC_FLUSH_COMMANDS_BIT,0)){case J.WAIT_FAILED:Z();break;case J.TIMEOUT_EXPIRED:setTimeout(H,$);break;default:W()}}setTimeout(H,$)})}var $$={[0]:1,[2]:6,[4]:7,[3]:5,[1]:0,[6]:2,[7]:4,[5]:3};class F6{addEventListener(J,Q){if(this._listeners===void 0)this._listeners={};let $=this._listeners;if($[J]===void 0)$[J]=[];if($[J].indexOf(Q)===-1)$[J].push(Q)}hasEventListener(J,Q){let $=this._listeners;if($===void 0)return!1;return $[J]!==void 0&&$[J].indexOf(Q)!==-1}removeEventListener(J,Q){let $=this._listeners;if($===void 0)return;let W=$[J];if(W!==void 0){let Z=W.indexOf(Q);if(Z!==-1)W.splice(Z,1)}}dispatchEvent(J){let Q=this._listeners;if(Q===void 0)return;let $=Q[J.type];if($!==void 0){J.target=this;let W=$.slice(0);for(let Z=0,H=W.length;Z<H;Z++)W[Z].call(this,J);J.target=null}}}var w8=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var H7=Math.PI/180,VJ=180/Math.PI;function j9(){let J=Math.random()*4294967295|0,Q=Math.random()*4294967295|0,$=Math.random()*4294967295|0,W=Math.random()*4294967295|0;return(w8[J&255]+w8[J>>8&255]+w8[J>>16&255]+w8[J>>24&255]+"-"+w8[Q&255]+w8[Q>>8&255]+"-"+w8[Q>>16&15|64]+w8[Q>>24&255]+"-"+w8[$&63|128]+w8[$>>8&255]+"-"+w8[$>>16&255]+w8[$>>24&255]+w8[W&255]+w8[W>>8&255]+w8[W>>16&255]+w8[W>>24&255]).toLowerCase()}function u0(J,Q,$){return Math.max(Q,Math.min($,J))}function ZW(J,Q){return(J%Q+Q)%Q}function K7(J,Q,$){return(1-$)*J+$*Q}function L9(J,Q){switch(Q.constructor){case Float32Array:return J;case Uint32Array:return J/4294967295;case Uint16Array:return J/65535;case Uint8Array:return J/255;case Int32Array:return Math.max(J/2147483647,-1);case Int16Array:return Math.max(J/32767,-1);case Int8Array:return Math.max(J/127,-1);default:throw Error("Invalid component type.")}}function T8(J,Q){switch(Q.constructor){case Float32Array:return J;case Uint32Array:return Math.round(J*4294967295);case Uint16Array:return Math.round(J*65535);case Uint8Array:return Math.round(J*255);case Int32Array:return Math.round(J*2147483647);case Int16Array:return Math.round(J*32767);case Int8Array:return Math.round(J*127);default:throw Error("Invalid component type.")}}class c0{static{c0.prototype.isVector2=!0}constructor(J=0,Q=0){this.x=J,this.y=Q}get width(){return this.x}set width(J){this.x=J}get height(){return this.y}set height(J){this.y=J}set(J,Q){return this.x=J,this.y=Q,this}setScalar(J){return this.x=J,this.y=J,this}setX(J){return this.x=J,this}setY(J){return this.y=J,this}setComponent(J,Q){switch(J){case 0:this.x=Q;break;case 1:this.y=Q;break;default:throw Error("index is out of range: "+J)}return this}getComponent(J){switch(J){case 0:return this.x;case 1:return this.y;default:throw Error("index is out of range: "+J)}}clone(){return new this.constructor(this.x,this.y)}copy(J){return this.x=J.x,this.y=J.y,this}add(J){return this.x+=J.x,this.y+=J.y,this}addScalar(J){return this.x+=J,this.y+=J,this}addVectors(J,Q){return this.x=J.x+Q.x,this.y=J.y+Q.y,this}addScaledVector(J,Q){return this.x+=J.x*Q,this.y+=J.y*Q,this}sub(J){return this.x-=J.x,this.y-=J.y,this}subScalar(J){return this.x-=J,this.y-=J,this}subVectors(J,Q){return this.x=J.x-Q.x,this.y=J.y-Q.y,this}multiply(J){return this.x*=J.x,this.y*=J.y,this}multiplyScalar(J){return this.x*=J,this.y*=J,this}divide(J){return this.x/=J.x,this.y/=J.y,this}divideScalar(J){return this.multiplyScalar(1/J)}applyMatrix3(J){let Q=this.x,$=this.y,W=J.elements;return this.x=W[0]*Q+W[3]*$+W[6],this.y=W[1]*Q+W[4]*$+W[7],this}min(J){return this.x=Math.min(this.x,J.x),this.y=Math.min(this.y,J.y),this}max(J){return this.x=Math.max(this.x,J.x),this.y=Math.max(this.y,J.y),this}clamp(J,Q){return this.x=u0(this.x,J.x,Q.x),this.y=u0(this.y,J.y,Q.y),this}clampScalar(J,Q){return this.x=u0(this.x,J,Q),this.y=u0(this.y,J,Q),this}clampLength(J,Q){let $=this.length();return this.divideScalar($||1).multiplyScalar(u0($,J,Q))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(J){return this.x*J.x+this.y*J.y}cross(J){return this.x*J.y-this.y*J.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(J){let Q=Math.sqrt(this.lengthSq()*J.lengthSq());if(Q===0)return Math.PI/2;let $=this.dot(J)/Q;return Math.acos(u0($,-1,1))}distanceTo(J){return Math.sqrt(this.distanceToSquared(J))}distanceToSquared(J){let Q=this.x-J.x,$=this.y-J.y;return Q*Q+$*$}manhattanDistanceTo(J){return Math.abs(this.x-J.x)+Math.abs(this.y-J.y)}setLength(J){return this.normalize().multiplyScalar(J)}lerp(J,Q){return this.x+=(J.x-this.x)*Q,this.y+=(J.y-this.y)*Q,this}lerpVectors(J,Q,$){return this.x=J.x+(Q.x-J.x)*$,this.y=J.y+(Q.y-J.y)*$,this}equals(J){return J.x===this.x&&J.y===this.y}fromArray(J,Q=0){return this.x=J[Q],this.y=J[Q+1],this}toArray(J=[],Q=0){return J[Q]=this.x,J[Q+1]=this.y,J}fromBufferAttribute(J,Q){return this.x=J.getX(Q),this.y=J.getY(Q),this}rotateAround(J,Q){let $=Math.cos(Q),W=Math.sin(Q),Z=this.x-J.x,H=this.y-J.y;return this.x=Z*$-H*W+J.x,this.y=Z*W+H*$+J.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class q6{constructor(J=0,Q=0,$=0,W=1){this.isQuaternion=!0,this._x=J,this._y=Q,this._z=$,this._w=W}static slerpFlat(J,Q,$,W,Z,H,K){let Y=$[W+0],U=$[W+1],E=$[W+2],F=$[W+3],k=Z[H+0],X=Z[H+1],q=Z[H+2],M=Z[H+3];if(F!==M||Y!==k||U!==X||E!==q){let I=Y*k+U*X+E*q+F*M;if(I<0)k=-k,X=-X,q=-q,M=-M,I=-I;let N=1-K;if(I<0.9995){let G=Math.acos(I),L=Math.sin(G);N=Math.sin(N*G)/L,K=Math.sin(K*G)/L,Y=Y*N+k*K,U=U*N+X*K,E=E*N+q*K,F=F*N+M*K}else{Y=Y*N+k*K,U=U*N+X*K,E=E*N+q*K,F=F*N+M*K;let G=1/Math.sqrt(Y*Y+U*U+E*E+F*F);Y*=G,U*=G,E*=G,F*=G}}J[Q]=Y,J[Q+1]=U,J[Q+2]=E,J[Q+3]=F}static multiplyQuaternionsFlat(J,Q,$,W,Z,H){let K=$[W],Y=$[W+1],U=$[W+2],E=$[W+3],F=Z[H],k=Z[H+1],X=Z[H+2],q=Z[H+3];return J[Q]=K*q+E*F+Y*X-U*k,J[Q+1]=Y*q+E*k+U*F-K*X,J[Q+2]=U*q+E*X+K*k-Y*F,J[Q+3]=E*q-K*F-Y*k-U*X,J}get x(){return this._x}set x(J){this._x=J,this._onChangeCallback()}get y(){return this._y}set y(J){this._y=J,this._onChangeCallback()}get z(){return this._z}set z(J){this._z=J,this._onChangeCallback()}get w(){return this._w}set w(J){this._w=J,this._onChangeCallback()}set(J,Q,$,W){return this._x=J,this._y=Q,this._z=$,this._w=W,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(J){return this._x=J.x,this._y=J.y,this._z=J.z,this._w=J.w,this._onChangeCallback(),this}setFromEuler(J,Q=!0){let{_x:$,_y:W,_z:Z,_order:H}=J,K=Math.cos,Y=Math.sin,U=K($/2),E=K(W/2),F=K(Z/2),k=Y($/2),X=Y(W/2),q=Y(Z/2);switch(H){case"XYZ":this._x=k*E*F+U*X*q,this._y=U*X*F-k*E*q,this._z=U*E*q+k*X*F,this._w=U*E*F-k*X*q;break;case"YXZ":this._x=k*E*F+U*X*q,this._y=U*X*F-k*E*q,this._z=U*E*q-k*X*F,this._w=U*E*F+k*X*q;break;case"ZXY":this._x=k*E*F-U*X*q,this._y=U*X*F+k*E*q,this._z=U*E*q+k*X*F,this._w=U*E*F-k*X*q;break;case"ZYX":this._x=k*E*F-U*X*q,this._y=U*X*F+k*E*q,this._z=U*E*q-k*X*F,this._w=U*E*F+k*X*q;break;case"YZX":this._x=k*E*F+U*X*q,this._y=U*X*F+k*E*q,this._z=U*E*q-k*X*F,this._w=U*E*F-k*X*q;break;case"XZY":this._x=k*E*F-U*X*q,this._y=U*X*F-k*E*q,this._z=U*E*q+k*X*F,this._w=U*E*F+k*X*q;break;default:I0("Quaternion: .setFromEuler() encountered an unknown order: "+H)}if(Q===!0)this._onChangeCallback();return this}setFromAxisAngle(J,Q){let $=Q/2,W=Math.sin($);return this._x=J.x*W,this._y=J.y*W,this._z=J.z*W,this._w=Math.cos($),this._onChangeCallback(),this}setFromRotationMatrix(J){let Q=J.elements,$=Q[0],W=Q[4],Z=Q[8],H=Q[1],K=Q[5],Y=Q[9],U=Q[2],E=Q[6],F=Q[10],k=$+K+F;if(k>0){let X=0.5/Math.sqrt(k+1);this._w=0.25/X,this._x=(E-Y)*X,this._y=(Z-U)*X,this._z=(H-W)*X}else if($>K&&$>F){let X=2*Math.sqrt(1+$-K-F);this._w=(E-Y)/X,this._x=0.25*X,this._y=(W+H)/X,this._z=(Z+U)/X}else if(K>F){let X=2*Math.sqrt(1+K-$-F);this._w=(Z-U)/X,this._x=(W+H)/X,this._y=0.25*X,this._z=(Y+E)/X}else{let X=2*Math.sqrt(1+F-$-K);this._w=(H-W)/X,this._x=(Z+U)/X,this._y=(Y+E)/X,this._z=0.25*X}return this._onChangeCallback(),this}setFromUnitVectors(J,Q){let $=J.dot(Q)+1;if($<0.00000001)if($=0,Math.abs(J.x)>Math.abs(J.z))this._x=-J.y,this._y=J.x,this._z=0,this._w=$;else this._x=0,this._y=-J.z,this._z=J.y,this._w=$;else this._x=J.y*Q.z-J.z*Q.y,this._y=J.z*Q.x-J.x*Q.z,this._z=J.x*Q.y-J.y*Q.x,this._w=$;return this.normalize()}angleTo(J){return 2*Math.acos(Math.abs(u0(this.dot(J),-1,1)))}rotateTowards(J,Q){let $=this.angleTo(J);if($===0)return this;let W=Math.min(1,Q/$);return this.slerp(J,W),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(J){return this._x*J._x+this._y*J._y+this._z*J._z+this._w*J._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let J=this.length();if(J===0)this._x=0,this._y=0,this._z=0,this._w=1;else J=1/J,this._x=this._x*J,this._y=this._y*J,this._z=this._z*J,this._w=this._w*J;return this._onChangeCallback(),this}multiply(J){return this.multiplyQuaternions(this,J)}premultiply(J){return this.multiplyQuaternions(J,this)}multiplyQuaternions(J,Q){let{_x:$,_y:W,_z:Z,_w:H}=J,K=Q._x,Y=Q._y,U=Q._z,E=Q._w;return this._x=$*E+H*K+W*U-Z*Y,this._y=W*E+H*Y+Z*K-$*U,this._z=Z*E+H*U+$*Y-W*K,this._w=H*E-$*K-W*Y-Z*U,this._onChangeCallback(),this}slerp(J,Q){let{_x:$,_y:W,_z:Z,_w:H}=J,K=this.dot(J);if(K<0)$=-$,W=-W,Z=-Z,H=-H,K=-K;let Y=1-Q;if(K<0.9995){let U=Math.acos(K),E=Math.sin(U);Y=Math.sin(Y*U)/E,Q=Math.sin(Q*U)/E,this._x=this._x*Y+$*Q,this._y=this._y*Y+W*Q,this._z=this._z*Y+Z*Q,this._w=this._w*Y+H*Q,this._onChangeCallback()}else this._x=this._x*Y+$*Q,this._y=this._y*Y+W*Q,this._z=this._z*Y+Z*Q,this._w=this._w*Y+H*Q,this.normalize();return this}slerpQuaternions(J,Q,$){return this.copy(J).slerp(Q,$)}random(){let J=2*Math.PI*Math.random(),Q=2*Math.PI*Math.random(),$=Math.random(),W=Math.sqrt(1-$),Z=Math.sqrt($);return this.set(W*Math.sin(J),W*Math.cos(J),Z*Math.sin(Q),Z*Math.cos(Q))}equals(J){return J._x===this._x&&J._y===this._y&&J._z===this._z&&J._w===this._w}fromArray(J,Q=0){return this._x=J[Q],this._y=J[Q+1],this._z=J[Q+2],this._w=J[Q+3],this._onChangeCallback(),this}toArray(J=[],Q=0){return J[Q]=this._x,J[Q+1]=this._y,J[Q+2]=this._z,J[Q+3]=this._w,J}fromBufferAttribute(J,Q){return this._x=J.getX(Q),this._y=J.getY(Q),this._z=J.getZ(Q),this._w=J.getW(Q),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(J){return this._onChangeCallback=J,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class v{static{v.prototype.isVector3=!0}constructor(J=0,Q=0,$=0){this.x=J,this.y=Q,this.z=$}set(J,Q,$){if($===void 0)$=this.z;return this.x=J,this.y=Q,this.z=$,this}setScalar(J){return this.x=J,this.y=J,this.z=J,this}setX(J){return this.x=J,this}setY(J){return this.y=J,this}setZ(J){return this.z=J,this}setComponent(J,Q){switch(J){case 0:this.x=Q;break;case 1:this.y=Q;break;case 2:this.z=Q;break;default:throw Error("index is out of range: "+J)}return this}getComponent(J){switch(J){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error("index is out of range: "+J)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(J){return this.x=J.x,this.y=J.y,this.z=J.z,this}add(J){return this.x+=J.x,this.y+=J.y,this.z+=J.z,this}addScalar(J){return this.x+=J,this.y+=J,this.z+=J,this}addVectors(J,Q){return this.x=J.x+Q.x,this.y=J.y+Q.y,this.z=J.z+Q.z,this}addScaledVector(J,Q){return this.x+=J.x*Q,this.y+=J.y*Q,this.z+=J.z*Q,this}sub(J){return this.x-=J.x,this.y-=J.y,this.z-=J.z,this}subScalar(J){return this.x-=J,this.y-=J,this.z-=J,this}subVectors(J,Q){return this.x=J.x-Q.x,this.y=J.y-Q.y,this.z=J.z-Q.z,this}multiply(J){return this.x*=J.x,this.y*=J.y,this.z*=J.z,this}multiplyScalar(J){return this.x*=J,this.y*=J,this.z*=J,this}multiplyVectors(J,Q){return this.x=J.x*Q.x,this.y=J.y*Q.y,this.z=J.z*Q.z,this}applyEuler(J){return this.applyQuaternion(TQ.setFromEuler(J))}applyAxisAngle(J,Q){return this.applyQuaternion(TQ.setFromAxisAngle(J,Q))}applyMatrix3(J){let Q=this.x,$=this.y,W=this.z,Z=J.elements;return this.x=Z[0]*Q+Z[3]*$+Z[6]*W,this.y=Z[1]*Q+Z[4]*$+Z[7]*W,this.z=Z[2]*Q+Z[5]*$+Z[8]*W,this}applyNormalMatrix(J){return this.applyMatrix3(J).normalize()}applyMatrix4(J){let Q=this.x,$=this.y,W=this.z,Z=J.elements,H=1/(Z[3]*Q+Z[7]*$+Z[11]*W+Z[15]);return this.x=(Z[0]*Q+Z[4]*$+Z[8]*W+Z[12])*H,this.y=(Z[1]*Q+Z[5]*$+Z[9]*W+Z[13])*H,this.z=(Z[2]*Q+Z[6]*$+Z[10]*W+Z[14])*H,this}applyQuaternion(J){let Q=this.x,$=this.y,W=this.z,Z=J.x,H=J.y,K=J.z,Y=J.w,U=2*(H*W-K*$),E=2*(K*Q-Z*W),F=2*(Z*$-H*Q);return this.x=Q+Y*U+H*F-K*E,this.y=$+Y*E+K*U-Z*F,this.z=W+Y*F+Z*E-H*U,this}project(J){return this.applyMatrix4(J.matrixWorldInverse).applyMatrix4(J.projectionMatrix)}unproject(J){return this.applyMatrix4(J.projectionMatrixInverse).applyMatrix4(J.matrixWorld)}transformDirection(J){let Q=this.x,$=this.y,W=this.z,Z=J.elements;return this.x=Z[0]*Q+Z[4]*$+Z[8]*W,this.y=Z[1]*Q+Z[5]*$+Z[9]*W,this.z=Z[2]*Q+Z[6]*$+Z[10]*W,this.normalize()}divide(J){return this.x/=J.x,this.y/=J.y,this.z/=J.z,this}divideScalar(J){return this.multiplyScalar(1/J)}min(J){return this.x=Math.min(this.x,J.x),this.y=Math.min(this.y,J.y),this.z=Math.min(this.z,J.z),this}max(J){return this.x=Math.max(this.x,J.x),this.y=Math.max(this.y,J.y),this.z=Math.max(this.z,J.z),this}clamp(J,Q){return this.x=u0(this.x,J.x,Q.x),this.y=u0(this.y,J.y,Q.y),this.z=u0(this.z,J.z,Q.z),this}clampScalar(J,Q){return this.x=u0(this.x,J,Q),this.y=u0(this.y,J,Q),this.z=u0(this.z,J,Q),this}clampLength(J,Q){let $=this.length();return this.divideScalar($||1).multiplyScalar(u0($,J,Q))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(J){return this.x*J.x+this.y*J.y+this.z*J.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(J){return this.normalize().multiplyScalar(J)}lerp(J,Q){return this.x+=(J.x-this.x)*Q,this.y+=(J.y-this.y)*Q,this.z+=(J.z-this.z)*Q,this}lerpVectors(J,Q,$){return this.x=J.x+(Q.x-J.x)*$,this.y=J.y+(Q.y-J.y)*$,this.z=J.z+(Q.z-J.z)*$,this}cross(J){return this.crossVectors(this,J)}crossVectors(J,Q){let{x:$,y:W,z:Z}=J,H=Q.x,K=Q.y,Y=Q.z;return this.x=W*Y-Z*K,this.y=Z*H-$*Y,this.z=$*K-W*H,this}projectOnVector(J){let Q=J.lengthSq();if(Q===0)return this.set(0,0,0);let $=J.dot(this)/Q;return this.copy(J).multiplyScalar($)}projectOnPlane(J){return Y7.copy(this).projectOnVector(J),this.sub(Y7)}reflect(J){return this.sub(Y7.copy(J).multiplyScalar(2*this.dot(J)))}angleTo(J){let Q=Math.sqrt(this.lengthSq()*J.lengthSq());if(Q===0)return Math.PI/2;let $=this.dot(J)/Q;return Math.acos(u0($,-1,1))}distanceTo(J){return Math.sqrt(this.distanceToSquared(J))}distanceToSquared(J){let Q=this.x-J.x,$=this.y-J.y,W=this.z-J.z;return Q*Q+$*$+W*W}manhattanDistanceTo(J){return Math.abs(this.x-J.x)+Math.abs(this.y-J.y)+Math.abs(this.z-J.z)}setFromSpherical(J){return this.setFromSphericalCoords(J.radius,J.phi,J.theta)}setFromSphericalCoords(J,Q,$){let W=Math.sin(Q)*J;return this.x=W*Math.sin($),this.y=Math.cos(Q)*J,this.z=W*Math.cos($),this}setFromCylindrical(J){return this.setFromCylindricalCoords(J.radius,J.theta,J.y)}setFromCylindricalCoords(J,Q,$){return this.x=J*Math.sin(Q),this.y=$,this.z=J*Math.cos(Q),this}setFromMatrixPosition(J){let Q=J.elements;return this.x=Q[12],this.y=Q[13],this.z=Q[14],this}setFromMatrixScale(J){let Q=this.setFromMatrixColumn(J,0).length(),$=this.setFromMatrixColumn(J,1).length(),W=this.setFromMatrixColumn(J,2).length();return this.x=Q,this.y=$,this.z=W,this}setFromMatrixColumn(J,Q){return this.fromArray(J.elements,Q*4)}setFromMatrix3Column(J,Q){return this.fromArray(J.elements,Q*3)}setFromEuler(J){return this.x=J._x,this.y=J._y,this.z=J._z,this}setFromColor(J){return this.x=J.r,this.y=J.g,this.z=J.b,this}equals(J){return J.x===this.x&&J.y===this.y&&J.z===this.z}fromArray(J,Q=0){return this.x=J[Q],this.y=J[Q+1],this.z=J[Q+2],this}toArray(J=[],Q=0){return J[Q]=this.x,J[Q+1]=this.y,J[Q+2]=this.z,J}fromBufferAttribute(J,Q){return this.x=J.getX(Q),this.y=J.getY(Q),this.z=J.getZ(Q),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let J=Math.random()*Math.PI*2,Q=Math.random()*2-1,$=Math.sqrt(1-Q*Q);return this.x=$*Math.cos(J),this.y=Q,this.z=$*Math.sin(J),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}var Y7=new v,TQ=new q6;class T0{static{T0.prototype.isMatrix3=!0}constructor(J,Q,$,W,Z,H,K,Y,U){if(this.elements=[1,0,0,0,1,0,0,0,1],J!==void 0)this.set(J,Q,$,W,Z,H,K,Y,U)}set(J,Q,$,W,Z,H,K,Y,U){let E=this.elements;return E[0]=J,E[1]=W,E[2]=K,E[3]=Q,E[4]=Z,E[5]=Y,E[6]=$,E[7]=H,E[8]=U,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(J){let Q=this.elements,$=J.elements;return Q[0]=$[0],Q[1]=$[1],Q[2]=$[2],Q[3]=$[3],Q[4]=$[4],Q[5]=$[5],Q[6]=$[6],Q[7]=$[7],Q[8]=$[8],this}extractBasis(J,Q,$){return J.setFromMatrix3Column(this,0),Q.setFromMatrix3Column(this,1),$.setFromMatrix3Column(this,2),this}setFromMatrix4(J){let Q=J.elements;return this.set(Q[0],Q[4],Q[8],Q[1],Q[5],Q[9],Q[2],Q[6],Q[10]),this}multiply(J){return this.multiplyMatrices(this,J)}premultiply(J){return this.multiplyMatrices(J,this)}multiplyMatrices(J,Q){let $=J.elements,W=Q.elements,Z=this.elements,H=$[0],K=$[3],Y=$[6],U=$[1],E=$[4],F=$[7],k=$[2],X=$[5],q=$[8],M=W[0],I=W[3],N=W[6],G=W[1],L=W[4],w=W[7],z=W[2],P=W[5],C=W[8];return Z[0]=H*M+K*G+Y*z,Z[3]=H*I+K*L+Y*P,Z[6]=H*N+K*w+Y*C,Z[1]=U*M+E*G+F*z,Z[4]=U*I+E*L+F*P,Z[7]=U*N+E*w+F*C,Z[2]=k*M+X*G+q*z,Z[5]=k*I+X*L+q*P,Z[8]=k*N+X*w+q*C,this}multiplyScalar(J){let Q=this.elements;return Q[0]*=J,Q[3]*=J,Q[6]*=J,Q[1]*=J,Q[4]*=J,Q[7]*=J,Q[2]*=J,Q[5]*=J,Q[8]*=J,this}determinant(){let J=this.elements,Q=J[0],$=J[1],W=J[2],Z=J[3],H=J[4],K=J[5],Y=J[6],U=J[7],E=J[8];return Q*H*E-Q*K*U-$*Z*E+$*K*Y+W*Z*U-W*H*Y}invert(){let J=this.elements,Q=J[0],$=J[1],W=J[2],Z=J[3],H=J[4],K=J[5],Y=J[6],U=J[7],E=J[8],F=E*H-K*U,k=K*Y-E*Z,X=U*Z-H*Y,q=Q*F+$*k+W*X;if(q===0)return this.set(0,0,0,0,0,0,0,0,0);let M=1/q;return J[0]=F*M,J[1]=(W*U-E*$)*M,J[2]=(K*$-W*H)*M,J[3]=k*M,J[4]=(E*Q-W*Y)*M,J[5]=(W*Z-K*Q)*M,J[6]=X*M,J[7]=($*Y-U*Q)*M,J[8]=(H*Q-$*Z)*M,this}transpose(){let J,Q=this.elements;return J=Q[1],Q[1]=Q[3],Q[3]=J,J=Q[2],Q[2]=Q[6],Q[6]=J,J=Q[5],Q[5]=Q[7],Q[7]=J,this}getNormalMatrix(J){return this.setFromMatrix4(J).invert().transpose()}transposeIntoArray(J){let Q=this.elements;return J[0]=Q[0],J[1]=Q[3],J[2]=Q[6],J[3]=Q[1],J[4]=Q[4],J[5]=Q[7],J[6]=Q[2],J[7]=Q[5],J[8]=Q[8],this}setUvTransform(J,Q,$,W,Z,H,K){let Y=Math.cos(Z),U=Math.sin(Z);return this.set($*Y,$*U,-$*(Y*H+U*K)+H+J,-W*U,W*Y,-W*(-U*H+Y*K)+K+Q,0,0,1),this}scale(J,Q){return this.premultiply(U7.makeScale(J,Q)),this}rotate(J){return this.premultiply(U7.makeRotation(-J)),this}translate(J,Q){return this.premultiply(U7.makeTranslation(J,Q)),this}makeTranslation(J,Q){if(J.isVector2)this.set(1,0,J.x,0,1,J.y,0,0,1);else this.set(1,0,J,0,1,Q,0,0,1);return this}makeRotation(J){let Q=Math.cos(J),$=Math.sin(J);return this.set(Q,-$,0,$,Q,0,0,0,1),this}makeScale(J,Q){return this.set(J,0,0,0,Q,0,0,0,1),this}equals(J){let Q=this.elements,$=J.elements;for(let W=0;W<9;W++)if(Q[W]!==$[W])return!1;return!0}fromArray(J,Q=0){for(let $=0;$<9;$++)this.elements[$]=J[$+Q];return this}toArray(J=[],Q=0){let $=this.elements;return J[Q]=$[0],J[Q+1]=$[1],J[Q+2]=$[2],J[Q+3]=$[3],J[Q+4]=$[4],J[Q+5]=$[5],J[Q+6]=$[6],J[Q+7]=$[7],J[Q+8]=$[8],J}clone(){return new this.constructor().fromArray(this.elements)}}var U7=new T0,SQ=new T0().set(0.4123908,0.3575843,0.1804808,0.212639,0.7151687,0.0721923,0.0193308,0.1191948,0.9505322),jQ=new T0().set(3.2409699,-1.5373832,-0.4986108,-0.9692436,1.8759675,0.0415551,0.0556301,-0.203977,1.0569715);function HW(){let J={enabled:!0,workingColorSpace:"srgb-linear",spaces:{},convert:function(Z,H,K){if(this.enabled===!1||H===K||!H||!K)return Z;if(this.spaces[H].transfer==="srgb")Z.r=X6(Z.r),Z.g=X6(Z.g),Z.b=X6(Z.b);if(this.spaces[H].primaries!==this.spaces[K].primaries)Z.applyMatrix3(this.spaces[H].toXYZ),Z.applyMatrix3(this.spaces[K].fromXYZ);if(this.spaces[K].transfer==="srgb")Z.r=E9(Z.r),Z.g=E9(Z.g),Z.b=E9(Z.b);return Z},workingToColorSpace:function(Z,H){return this.convert(Z,this.workingColorSpace,H)},colorSpaceToWorking:function(Z,H){return this.convert(Z,H,this.workingColorSpace)},getPrimaries:function(Z){return this.spaces[Z].primaries},getTransfer:function(Z){if(Z==="")return"linear";return this.spaces[Z].transfer},getToneMappingMode:function(Z){return this.spaces[Z].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(Z,H=this.workingColorSpace){return Z.fromArray(this.spaces[H].luminanceCoefficients)},define:function(Z){Object.assign(this.spaces,Z)},_getMatrix:function(Z,H,K){return Z.copy(this.spaces[H].toXYZ).multiply(this.spaces[K].fromXYZ)},_getDrawingBufferColorSpace:function(Z){return this.spaces[Z].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(Z=this.workingColorSpace){return this.spaces[Z].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(Z,H){return BJ("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),J.workingToColorSpace(Z,H)},toWorkingColorSpace:function(Z,H){return BJ("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),J.colorSpaceToWorking(Z,H)}},Q=[0.64,0.33,0.3,0.6,0.15,0.06],$=[0.2126,0.7152,0.0722],W=[0.3127,0.329];return J.define({["srgb-linear"]:{primaries:Q,whitePoint:W,transfer:"linear",toXYZ:SQ,fromXYZ:jQ,luminanceCoefficients:$,workingColorSpaceConfig:{unpackColorSpace:"srgb"},outputColorSpaceConfig:{drawingBufferColorSpace:"srgb"}},["srgb"]:{primaries:Q,whitePoint:W,transfer:"srgb",toXYZ:SQ,fromXYZ:jQ,luminanceCoefficients:$,outputColorSpaceConfig:{drawingBufferColorSpace:"srgb"}}}),J}var l0=HW();function X6(J){return J<0.04045?J*0.0773993808:Math.pow(J*0.9478672986+0.0521327014,2.4)}function E9(J){return J<0.0031308?J*12.92:1.055*Math.pow(J,0.41666)-0.055}var r6;class S5{static getDataURL(J,Q="image/png"){if(/^data:/i.test(J.src))return J.src;if(typeof HTMLCanvasElement>"u")return J.src;let $;if(J instanceof HTMLCanvasElement)$=J;else{if(r6===void 0)r6=C9("canvas");r6.width=J.width,r6.height=J.height;let W=r6.getContext("2d");if(J instanceof ImageData)W.putImageData(J,0,0);else W.drawImage(J,0,0,J.width,J.height);$=r6}return $.toDataURL(Q)}static sRGBToLinear(J){if(typeof HTMLImageElement<"u"&&J instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&J instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&J instanceof ImageBitmap){let Q=C9("canvas");Q.width=J.width,Q.height=J.height;let $=Q.getContext("2d");$.drawImage(J,0,0,J.width,J.height);let W=$.getImageData(0,0,J.width,J.height),Z=W.data;for(let H=0;H<Z.length;H++)Z[H]=X6(Z[H]/255)*255;return $.putImageData(W,0,0),Q}else if(J.data){let Q=J.data.slice(0);for(let $=0;$<Q.length;$++)if(Q instanceof Uint8Array||Q instanceof Uint8ClampedArray)Q[$]=Math.floor(X6(Q[$]/255)*255);else Q[$]=X6(Q[$]);return{data:Q,width:J.width,height:J.height}}else return I0("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),J}}var KW=0;class v9{constructor(J=null){this.isSource=!0,Object.defineProperty(this,"id",{value:KW++}),this.uuid=j9(),this.data=J,this.dataReady=!0,this.version=0}getSize(J){let Q=this.data;if(typeof HTMLVideoElement<"u"&&Q instanceof HTMLVideoElement)J.set(Q.videoWidth,Q.videoHeight,0);else if(typeof VideoFrame<"u"&&Q instanceof VideoFrame)J.set(Q.displayWidth,Q.displayHeight,0);else if(Q!==null)J.set(Q.width,Q.height,Q.depth||0);else J.set(0,0,0);return J}set needsUpdate(J){if(J===!0)this.version++}toJSON(J){let Q=J===void 0||typeof J==="string";if(!Q&&J.images[this.uuid]!==void 0)return J.images[this.uuid];let $={uuid:this.uuid,url:""},W=this.data;if(W!==null){let Z;if(Array.isArray(W)){Z=[];for(let H=0,K=W.length;H<K;H++)if(W[H].isDataTexture)Z.push(E7(W[H].image));else Z.push(E7(W[H]))}else Z=E7(W);$.url=Z}if(!Q)J.images[this.uuid]=$;return $}}function E7(J){if(typeof HTMLImageElement<"u"&&J instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&J instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&J instanceof ImageBitmap)return S5.getDataURL(J);else if(J.data)return{data:Array.from(J.data),width:J.width,height:J.height,type:J.data.constructor.name};else return I0("Texture: Unable to serialize Texture."),{}}var YW=0,X7=new v;class C8 extends F6{constructor(J=C8.DEFAULT_IMAGE,Q=C8.DEFAULT_MAPPING,$=1001,W=1001,Z=1006,H=1008,K=1023,Y=1009,U=C8.DEFAULT_ANISOTROPY,E=""){super();this.isTexture=!0,Object.defineProperty(this,"id",{value:YW++}),this.uuid=j9(),this.name="",this.source=new v9(J),this.mipmaps=[],this.mapping=Q,this.channel=0,this.wrapS=$,this.wrapT=W,this.magFilter=Z,this.minFilter=H,this.anisotropy=U,this.format=K,this.internalFormat=null,this.type=Y,this.offset=new c0(0,0),this.repeat=new c0(1,1),this.center=new c0(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new T0,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=E,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=J&&J.depth&&J.depth>1?!0:!1,this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(X7).x}get height(){return this.source.getSize(X7).y}get depth(){return this.source.getSize(X7).z}get image(){return this.source.data}set image(J){this.source.data=J}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(J,Q){this.updateRanges.push({start:J,count:Q})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(J){return this.name=J.name,this.source=J.source,this.mipmaps=J.mipmaps.slice(0),this.mapping=J.mapping,this.channel=J.channel,this.wrapS=J.wrapS,this.wrapT=J.wrapT,this.magFilter=J.magFilter,this.minFilter=J.minFilter,this.anisotropy=J.anisotropy,this.format=J.format,this.internalFormat=J.internalFormat,this.type=J.type,this.normalized=J.normalized,this.offset.copy(J.offset),this.repeat.copy(J.repeat),this.center.copy(J.center),this.rotation=J.rotation,this.matrixAutoUpdate=J.matrixAutoUpdate,this.matrix.copy(J.matrix),this.generateMipmaps=J.generateMipmaps,this.premultiplyAlpha=J.premultiplyAlpha,this.flipY=J.flipY,this.unpackAlignment=J.unpackAlignment,this.colorSpace=J.colorSpace,this.renderTarget=J.renderTarget,this.isRenderTargetTexture=J.isRenderTargetTexture,this.isArrayTexture=J.isArrayTexture,this.userData=JSON.parse(JSON.stringify(J.userData)),this.needsUpdate=!0,this}setValues(J){for(let Q in J){let $=J[Q];if($===void 0){I0(`Texture.setValues(): parameter '${Q}' has value of undefined.`);continue}let W=this[Q];if(W===void 0){I0(`Texture.setValues(): property '${Q}' does not exist.`);continue}if(W&&$&&(W.isVector2&&$.isVector2))W.copy($);else if(W&&$&&(W.isVector3&&$.isVector3))W.copy($);else if(W&&$&&(W.isMatrix3&&$.isMatrix3))W.copy($);else this[Q]=$}}toJSON(J){let Q=J===void 0||typeof J==="string";if(!Q&&J.textures[this.uuid]!==void 0)return J.textures[this.uuid];let $={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(J).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};if(Object.keys(this.userData).length>0)$.userData=this.userData;if(!Q)J.textures[this.uuid]=$;return $}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(J){if(this.mapping!==300)return J;if(J.applyMatrix3(this.matrix),J.x<0||J.x>1)switch(this.wrapS){case 1000:J.x=J.x-Math.floor(J.x);break;case 1001:J.x=J.x<0?0:1;break;case 1002:if(Math.abs(Math.floor(J.x)%2)===1)J.x=Math.ceil(J.x)-J.x;else J.x=J.x-Math.floor(J.x);break}if(J.y<0||J.y>1)switch(this.wrapT){case 1000:J.y=J.y-Math.floor(J.y);break;case 1001:J.y=J.y<0?0:1;break;case 1002:if(Math.abs(Math.floor(J.y)%2)===1)J.y=Math.ceil(J.y)-J.y;else J.y=J.y-Math.floor(J.y);break}if(this.flipY)J.y=1-J.y;return J}set needsUpdate(J){if(J===!0)this.version++,this.source.needsUpdate=!0}set needsPMREMUpdate(J){if(J===!0)this.pmremVersion++}}C8.DEFAULT_IMAGE=null;C8.DEFAULT_MAPPING=300;C8.DEFAULT_ANISOTROPY=1;class Y8{static{Y8.prototype.isVector4=!0}constructor(J=0,Q=0,$=0,W=1){this.x=J,this.y=Q,this.z=$,this.w=W}get width(){return this.z}set width(J){this.z=J}get height(){return this.w}set height(J){this.w=J}set(J,Q,$,W){return this.x=J,this.y=Q,this.z=$,this.w=W,this}setScalar(J){return this.x=J,this.y=J,this.z=J,this.w=J,this}setX(J){return this.x=J,this}setY(J){return this.y=J,this}setZ(J){return this.z=J,this}setW(J){return this.w=J,this}setComponent(J,Q){switch(J){case 0:this.x=Q;break;case 1:this.y=Q;break;case 2:this.z=Q;break;case 3:this.w=Q;break;default:throw Error("index is out of range: "+J)}return this}getComponent(J){switch(J){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error("index is out of range: "+J)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(J){return this.x=J.x,this.y=J.y,this.z=J.z,this.w=J.w!==void 0?J.w:1,this}add(J){return this.x+=J.x,this.y+=J.y,this.z+=J.z,this.w+=J.w,this}addScalar(J){return this.x+=J,this.y+=J,this.z+=J,this.w+=J,this}addVectors(J,Q){return this.x=J.x+Q.x,this.y=J.y+Q.y,this.z=J.z+Q.z,this.w=J.w+Q.w,this}addScaledVector(J,Q){return this.x+=J.x*Q,this.y+=J.y*Q,this.z+=J.z*Q,this.w+=J.w*Q,this}sub(J){return this.x-=J.x,this.y-=J.y,this.z-=J.z,this.w-=J.w,this}subScalar(J){return this.x-=J,this.y-=J,this.z-=J,this.w-=J,this}subVectors(J,Q){return this.x=J.x-Q.x,this.y=J.y-Q.y,this.z=J.z-Q.z,this.w=J.w-Q.w,this}multiply(J){return this.x*=J.x,this.y*=J.y,this.z*=J.z,this.w*=J.w,this}multiplyScalar(J){return this.x*=J,this.y*=J,this.z*=J,this.w*=J,this}applyMatrix4(J){let Q=this.x,$=this.y,W=this.z,Z=this.w,H=J.elements;return this.x=H[0]*Q+H[4]*$+H[8]*W+H[12]*Z,this.y=H[1]*Q+H[5]*$+H[9]*W+H[13]*Z,this.z=H[2]*Q+H[6]*$+H[10]*W+H[14]*Z,this.w=H[3]*Q+H[7]*$+H[11]*W+H[15]*Z,this}divide(J){return this.x/=J.x,this.y/=J.y,this.z/=J.z,this.w/=J.w,this}divideScalar(J){return this.multiplyScalar(1/J)}setAxisAngleFromQuaternion(J){this.w=2*Math.acos(J.w);let Q=Math.sqrt(1-J.w*J.w);if(Q<0.0001)this.x=1,this.y=0,this.z=0;else this.x=J.x/Q,this.y=J.y/Q,this.z=J.z/Q;return this}setAxisAngleFromRotationMatrix(J){let Q,$,W,Z,H=0.01,K=0.1,Y=J.elements,U=Y[0],E=Y[4],F=Y[8],k=Y[1],X=Y[5],q=Y[9],M=Y[2],I=Y[6],N=Y[10];if(Math.abs(E-k)<0.01&&Math.abs(F-M)<0.01&&Math.abs(q-I)<0.01){if(Math.abs(E+k)<0.1&&Math.abs(F+M)<0.1&&Math.abs(q+I)<0.1&&Math.abs(U+X+N-3)<0.1)return this.set(1,0,0,0),this;Q=Math.PI;let L=(U+1)/2,w=(X+1)/2,z=(N+1)/2,P=(E+k)/4,C=(F+M)/4,_=(q+I)/4;if(L>w&&L>z)if(L<0.01)$=0,W=0.707106781,Z=0.707106781;else $=Math.sqrt(L),W=P/$,Z=C/$;else if(w>z)if(w<0.01)$=0.707106781,W=0,Z=0.707106781;else W=Math.sqrt(w),$=P/W,Z=_/W;else if(z<0.01)$=0.707106781,W=0.707106781,Z=0;else Z=Math.sqrt(z),$=C/Z,W=_/Z;return this.set($,W,Z,Q),this}let G=Math.sqrt((I-q)*(I-q)+(F-M)*(F-M)+(k-E)*(k-E));if(Math.abs(G)<0.001)G=1;return this.x=(I-q)/G,this.y=(F-M)/G,this.z=(k-E)/G,this.w=Math.acos((U+X+N-1)/2),this}setFromMatrixPosition(J){let Q=J.elements;return this.x=Q[12],this.y=Q[13],this.z=Q[14],this.w=Q[15],this}min(J){return this.x=Math.min(this.x,J.x),this.y=Math.min(this.y,J.y),this.z=Math.min(this.z,J.z),this.w=Math.min(this.w,J.w),this}max(J){return this.x=Math.max(this.x,J.x),this.y=Math.max(this.y,J.y),this.z=Math.max(this.z,J.z),this.w=Math.max(this.w,J.w),this}clamp(J,Q){return this.x=u0(this.x,J.x,Q.x),this.y=u0(this.y,J.y,Q.y),this.z=u0(this.z,J.z,Q.z),this.w=u0(this.w,J.w,Q.w),this}clampScalar(J,Q){return this.x=u0(this.x,J,Q),this.y=u0(this.y,J,Q),this.z=u0(this.z,J,Q),this.w=u0(this.w,J,Q),this}clampLength(J,Q){let $=this.length();return this.divideScalar($||1).multiplyScalar(u0($,J,Q))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(J){return this.x*J.x+this.y*J.y+this.z*J.z+this.w*J.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(J){return this.normalize().multiplyScalar(J)}lerp(J,Q){return this.x+=(J.x-this.x)*Q,this.y+=(J.y-this.y)*Q,this.z+=(J.z-this.z)*Q,this.w+=(J.w-this.w)*Q,this}lerpVectors(J,Q,$){return this.x=J.x+(Q.x-J.x)*$,this.y=J.y+(Q.y-J.y)*$,this.z=J.z+(Q.z-J.z)*$,this.w=J.w+(Q.w-J.w)*$,this}equals(J){return J.x===this.x&&J.y===this.y&&J.z===this.z&&J.w===this.w}fromArray(J,Q=0){return this.x=J[Q],this.y=J[Q+1],this.z=J[Q+2],this.w=J[Q+3],this}toArray(J=[],Q=0){return J[Q]=this.x,J[Q+1]=this.y,J[Q+2]=this.z,J[Q+3]=this.w,J}fromBufferAttribute(J,Q){return this.x=J.getX(Q),this.y=J.getY(Q),this.z=J.getZ(Q),this.w=J.getW(Q),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class j5 extends F6{constructor(J=1,Q=1,$={}){super();$=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:1006,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},$),this.isRenderTarget=!0,this.width=J,this.height=Q,this.depth=$.depth,this.scissor=new Y8(0,0,J,Q),this.scissorTest=!1,this.viewport=new Y8(0,0,J,Q),this.textures=[];let W={width:J,height:Q,depth:$.depth},Z=new C8(W),H=$.count;for(let K=0;K<H;K++)this.textures[K]=Z.clone(),this.textures[K].isRenderTargetTexture=!0,this.textures[K].renderTarget=this;this._setTextureOptions($),this.depthBuffer=$.depthBuffer,this.stencilBuffer=$.stencilBuffer,this.resolveDepthBuffer=$.resolveDepthBuffer,this.resolveStencilBuffer=$.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=$.depthTexture,this.samples=$.samples,this.multiview=$.multiview}_setTextureOptions(J={}){let Q={minFilter:1006,generateMipmaps:!1,flipY:!1,internalFormat:null};if(J.mapping!==void 0)Q.mapping=J.mapping;if(J.wrapS!==void 0)Q.wrapS=J.wrapS;if(J.wrapT!==void 0)Q.wrapT=J.wrapT;if(J.wrapR!==void 0)Q.wrapR=J.wrapR;if(J.magFilter!==void 0)Q.magFilter=J.magFilter;if(J.minFilter!==void 0)Q.minFilter=J.minFilter;if(J.format!==void 0)Q.format=J.format;if(J.type!==void 0)Q.type=J.type;if(J.anisotropy!==void 0)Q.anisotropy=J.anisotropy;if(J.colorSpace!==void 0)Q.colorSpace=J.colorSpace;if(J.flipY!==void 0)Q.flipY=J.flipY;if(J.generateMipmaps!==void 0)Q.generateMipmaps=J.generateMipmaps;if(J.internalFormat!==void 0)Q.internalFormat=J.internalFormat;for(let $=0;$<this.textures.length;$++)this.textures[$].setValues(Q)}get texture(){return this.textures[0]}set texture(J){this.textures[0]=J}set depthTexture(J){if(this._depthTexture!==null)this._depthTexture.renderTarget=null;if(J!==null)J.renderTarget=this;this._depthTexture=J}get depthTexture(){return this._depthTexture}setSize(J,Q,$=1){if(this.width!==J||this.height!==Q||this.depth!==$){this.width=J,this.height=Q,this.depth=$;for(let W=0,Z=this.textures.length;W<Z;W++)if(this.textures[W].image.width=J,this.textures[W].image.height=Q,this.textures[W].image.depth=$,this.textures[W].isData3DTexture!==!0)this.textures[W].isArrayTexture=this.textures[W].image.depth>1;this.dispose()}this.viewport.set(0,0,J,Q),this.scissor.set(0,0,J,Q)}clone(){return new this.constructor().copy(this)}copy(J){this.width=J.width,this.height=J.height,this.depth=J.depth,this.scissor.copy(J.scissor),this.scissorTest=J.scissorTest,this.viewport.copy(J.viewport),this.textures.length=0;for(let Q=0,$=J.textures.length;Q<$;Q++){this.textures[Q]=J.textures[Q].clone(),this.textures[Q].isRenderTargetTexture=!0,this.textures[Q].renderTarget=this;let W=Object.assign({},J.textures[Q].image);this.textures[Q].source=new v9(W)}if(this.depthBuffer=J.depthBuffer,this.stencilBuffer=J.stencilBuffer,this.resolveDepthBuffer=J.resolveDepthBuffer,this.resolveStencilBuffer=J.resolveStencilBuffer,J.depthTexture!==null)this.depthTexture=J.depthTexture.clone();return this.samples=J.samples,this.multiview=J.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}}class p8 extends j5{constructor(J=1,Q=1,$={}){super(J,Q,$);this.isWebGLRenderTarget=!0}}class hJ extends C8{constructor(J=null,Q=1,$=1,W=1){super(null);this.isDataArrayTexture=!0,this.image={data:J,width:Q,height:$,depth:W},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(J){this.layerUpdates.add(J)}clearLayerUpdates(){this.layerUpdates.clear()}}class v5 extends C8{constructor(J=null,Q=1,$=1,W=1){super(null);this.isData3DTexture=!0,this.image={data:J,width:Q,height:$,depth:W},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class H8{static{H8.prototype.isMatrix4=!0}constructor(J,Q,$,W,Z,H,K,Y,U,E,F,k,X,q,M,I){if(this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],J!==void 0)this.set(J,Q,$,W,Z,H,K,Y,U,E,F,k,X,q,M,I)}set(J,Q,$,W,Z,H,K,Y,U,E,F,k,X,q,M,I){let N=this.elements;return N[0]=J,N[4]=Q,N[8]=$,N[12]=W,N[1]=Z,N[5]=H,N[9]=K,N[13]=Y,N[2]=U,N[6]=E,N[10]=F,N[14]=k,N[3]=X,N[7]=q,N[11]=M,N[15]=I,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new H8().fromArray(this.elements)}copy(J){let Q=this.elements,$=J.elements;return Q[0]=$[0],Q[1]=$[1],Q[2]=$[2],Q[3]=$[3],Q[4]=$[4],Q[5]=$[5],Q[6]=$[6],Q[7]=$[7],Q[8]=$[8],Q[9]=$[9],Q[10]=$[10],Q[11]=$[11],Q[12]=$[12],Q[13]=$[13],Q[14]=$[14],Q[15]=$[15],this}copyPosition(J){let Q=this.elements,$=J.elements;return Q[12]=$[12],Q[13]=$[13],Q[14]=$[14],this}setFromMatrix3(J){let Q=J.elements;return this.set(Q[0],Q[3],Q[6],0,Q[1],Q[4],Q[7],0,Q[2],Q[5],Q[8],0,0,0,0,1),this}extractBasis(J,Q,$){if(this.determinant()===0)return J.set(1,0,0),Q.set(0,1,0),$.set(0,0,1),this;return J.setFromMatrixColumn(this,0),Q.setFromMatrixColumn(this,1),$.setFromMatrixColumn(this,2),this}makeBasis(J,Q,$){return this.set(J.x,Q.x,$.x,0,J.y,Q.y,$.y,0,J.z,Q.z,$.z,0,0,0,0,1),this}extractRotation(J){if(J.determinant()===0)return this.identity();let Q=this.elements,$=J.elements,W=1/t6.setFromMatrixColumn(J,0).length(),Z=1/t6.setFromMatrixColumn(J,1).length(),H=1/t6.setFromMatrixColumn(J,2).length();return Q[0]=$[0]*W,Q[1]=$[1]*W,Q[2]=$[2]*W,Q[3]=0,Q[4]=$[4]*Z,Q[5]=$[5]*Z,Q[6]=$[6]*Z,Q[7]=0,Q[8]=$[8]*H,Q[9]=$[9]*H,Q[10]=$[10]*H,Q[11]=0,Q[12]=0,Q[13]=0,Q[14]=0,Q[15]=1,this}makeRotationFromEuler(J){let Q=this.elements,$=J.x,W=J.y,Z=J.z,H=Math.cos($),K=Math.sin($),Y=Math.cos(W),U=Math.sin(W),E=Math.cos(Z),F=Math.sin(Z);if(J.order==="XYZ"){let k=H*E,X=H*F,q=K*E,M=K*F;Q[0]=Y*E,Q[4]=-Y*F,Q[8]=U,Q[1]=X+q*U,Q[5]=k-M*U,Q[9]=-K*Y,Q[2]=M-k*U,Q[6]=q+X*U,Q[10]=H*Y}else if(J.order==="YXZ"){let k=Y*E,X=Y*F,q=U*E,M=U*F;Q[0]=k+M*K,Q[4]=q*K-X,Q[8]=H*U,Q[1]=H*F,Q[5]=H*E,Q[9]=-K,Q[2]=X*K-q,Q[6]=M+k*K,Q[10]=H*Y}else if(J.order==="ZXY"){let k=Y*E,X=Y*F,q=U*E,M=U*F;Q[0]=k-M*K,Q[4]=-H*F,Q[8]=q+X*K,Q[1]=X+q*K,Q[5]=H*E,Q[9]=M-k*K,Q[2]=-H*U,Q[6]=K,Q[10]=H*Y}else if(J.order==="ZYX"){let k=H*E,X=H*F,q=K*E,M=K*F;Q[0]=Y*E,Q[4]=q*U-X,Q[8]=k*U+M,Q[1]=Y*F,Q[5]=M*U+k,Q[9]=X*U-q,Q[2]=-U,Q[6]=K*Y,Q[10]=H*Y}else if(J.order==="YZX"){let k=H*Y,X=H*U,q=K*Y,M=K*U;Q[0]=Y*E,Q[4]=M-k*F,Q[8]=q*F+X,Q[1]=F,Q[5]=H*E,Q[9]=-K*E,Q[2]=-U*E,Q[6]=X*F+q,Q[10]=k-M*F}else if(J.order==="XZY"){let k=H*Y,X=H*U,q=K*Y,M=K*U;Q[0]=Y*E,Q[4]=-F,Q[8]=U*E,Q[1]=k*F+M,Q[5]=H*E,Q[9]=X*F-q,Q[2]=q*F-X,Q[6]=K*E,Q[10]=M*F+k}return Q[3]=0,Q[7]=0,Q[11]=0,Q[12]=0,Q[13]=0,Q[14]=0,Q[15]=1,this}makeRotationFromQuaternion(J){return this.compose(UW,J,EW)}lookAt(J,Q,$){let W=this.elements;if(b8.subVectors(J,Q),b8.lengthSq()===0)b8.z=1;if(b8.normalize(),M6.crossVectors($,b8),M6.lengthSq()===0){if(Math.abs($.z)===1)b8.x+=0.0001;else b8.z+=0.0001;b8.normalize(),M6.crossVectors($,b8)}return M6.normalize(),r9.crossVectors(b8,M6),W[0]=M6.x,W[4]=r9.x,W[8]=b8.x,W[1]=M6.y,W[5]=r9.y,W[9]=b8.y,W[2]=M6.z,W[6]=r9.z,W[10]=b8.z,this}multiply(J){return this.multiplyMatrices(this,J)}premultiply(J){return this.multiplyMatrices(J,this)}multiplyMatrices(J,Q){let $=J.elements,W=Q.elements,Z=this.elements,H=$[0],K=$[4],Y=$[8],U=$[12],E=$[1],F=$[5],k=$[9],X=$[13],q=$[2],M=$[6],I=$[10],N=$[14],G=$[3],L=$[7],w=$[11],z=$[15],P=W[0],C=W[4],_=W[8],D=W[12],B=W[1],d=W[5],A=W[9],l=W[13],i=W[2],b=W[6],u=W[10],x=W[14],p=W[3],a=W[7],Q0=W[11],k0=W[15];return Z[0]=H*P+K*B+Y*i+U*p,Z[4]=H*C+K*d+Y*b+U*a,Z[8]=H*_+K*A+Y*u+U*Q0,Z[12]=H*D+K*l+Y*x+U*k0,Z[1]=E*P+F*B+k*i+X*p,Z[5]=E*C+F*d+k*b+X*a,Z[9]=E*_+F*A+k*u+X*Q0,Z[13]=E*D+F*l+k*x+X*k0,Z[2]=q*P+M*B+I*i+N*p,Z[6]=q*C+M*d+I*b+N*a,Z[10]=q*_+M*A+I*u+N*Q0,Z[14]=q*D+M*l+I*x+N*k0,Z[3]=G*P+L*B+w*i+z*p,Z[7]=G*C+L*d+w*b+z*a,Z[11]=G*_+L*A+w*u+z*Q0,Z[15]=G*D+L*l+w*x+z*k0,this}multiplyScalar(J){let Q=this.elements;return Q[0]*=J,Q[4]*=J,Q[8]*=J,Q[12]*=J,Q[1]*=J,Q[5]*=J,Q[9]*=J,Q[13]*=J,Q[2]*=J,Q[6]*=J,Q[10]*=J,Q[14]*=J,Q[3]*=J,Q[7]*=J,Q[11]*=J,Q[15]*=J,this}determinant(){let J=this.elements,Q=J[0],$=J[4],W=J[8],Z=J[12],H=J[1],K=J[5],Y=J[9],U=J[13],E=J[2],F=J[6],k=J[10],X=J[14],q=J[3],M=J[7],I=J[11],N=J[15],G=Y*X-U*k,L=K*X-U*F,w=K*k-Y*F,z=H*X-U*E,P=H*k-Y*E,C=H*F-K*E;return Q*(M*G-I*L+N*w)-$*(q*G-I*z+N*P)+W*(q*L-M*z+N*C)-Z*(q*w-M*P+I*C)}transpose(){let J=this.elements,Q;return Q=J[1],J[1]=J[4],J[4]=Q,Q=J[2],J[2]=J[8],J[8]=Q,Q=J[6],J[6]=J[9],J[9]=Q,Q=J[3],J[3]=J[12],J[12]=Q,Q=J[7],J[7]=J[13],J[13]=Q,Q=J[11],J[11]=J[14],J[14]=Q,this}setPosition(J,Q,$){let W=this.elements;if(J.isVector3)W[12]=J.x,W[13]=J.y,W[14]=J.z;else W[12]=J,W[13]=Q,W[14]=$;return this}invert(){let J=this.elements,Q=J[0],$=J[1],W=J[2],Z=J[3],H=J[4],K=J[5],Y=J[6],U=J[7],E=J[8],F=J[9],k=J[10],X=J[11],q=J[12],M=J[13],I=J[14],N=J[15],G=Q*K-$*H,L=Q*Y-W*H,w=Q*U-Z*H,z=$*Y-W*K,P=$*U-Z*K,C=W*U-Z*Y,_=E*M-F*q,D=E*I-k*q,B=E*N-X*q,d=F*I-k*M,A=F*N-X*M,l=k*N-X*I,i=G*l-L*A+w*d+z*B-P*D+C*_;if(i===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let b=1/i;return J[0]=(K*l-Y*A+U*d)*b,J[1]=(W*A-$*l-Z*d)*b,J[2]=(M*C-I*P+N*z)*b,J[3]=(k*P-F*C-X*z)*b,J[4]=(Y*B-H*l-U*D)*b,J[5]=(Q*l-W*B+Z*D)*b,J[6]=(I*w-q*C-N*L)*b,J[7]=(E*C-k*w+X*L)*b,J[8]=(H*A-K*B+U*_)*b,J[9]=($*B-Q*A-Z*_)*b,J[10]=(q*P-M*w+N*G)*b,J[11]=(F*w-E*P-X*G)*b,J[12]=(K*D-H*d-Y*_)*b,J[13]=(Q*d-$*D+W*_)*b,J[14]=(M*L-q*z-I*G)*b,J[15]=(E*z-F*L+k*G)*b,this}scale(J){let Q=this.elements,$=J.x,W=J.y,Z=J.z;return Q[0]*=$,Q[4]*=W,Q[8]*=Z,Q[1]*=$,Q[5]*=W,Q[9]*=Z,Q[2]*=$,Q[6]*=W,Q[10]*=Z,Q[3]*=$,Q[7]*=W,Q[11]*=Z,this}getMaxScaleOnAxis(){let J=this.elements,Q=J[0]*J[0]+J[1]*J[1]+J[2]*J[2],$=J[4]*J[4]+J[5]*J[5]+J[6]*J[6],W=J[8]*J[8]+J[9]*J[9]+J[10]*J[10];return Math.sqrt(Math.max(Q,$,W))}makeTranslation(J,Q,$){if(J.isVector3)this.set(1,0,0,J.x,0,1,0,J.y,0,0,1,J.z,0,0,0,1);else this.set(1,0,0,J,0,1,0,Q,0,0,1,$,0,0,0,1);return this}makeRotationX(J){let Q=Math.cos(J),$=Math.sin(J);return this.set(1,0,0,0,0,Q,-$,0,0,$,Q,0,0,0,0,1),this}makeRotationY(J){let Q=Math.cos(J),$=Math.sin(J);return this.set(Q,0,$,0,0,1,0,0,-$,0,Q,0,0,0,0,1),this}makeRotationZ(J){let Q=Math.cos(J),$=Math.sin(J);return this.set(Q,-$,0,0,$,Q,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(J,Q){let $=Math.cos(Q),W=Math.sin(Q),Z=1-$,H=J.x,K=J.y,Y=J.z,U=Z*H,E=Z*K;return this.set(U*H+$,U*K-W*Y,U*Y+W*K,0,U*K+W*Y,E*K+$,E*Y-W*H,0,U*Y-W*K,E*Y+W*H,Z*Y*Y+$,0,0,0,0,1),this}makeScale(J,Q,$){return this.set(J,0,0,0,0,Q,0,0,0,0,$,0,0,0,0,1),this}makeShear(J,Q,$,W,Z,H){return this.set(1,$,Z,0,J,1,H,0,Q,W,1,0,0,0,0,1),this}compose(J,Q,$){let W=this.elements,Z=Q._x,H=Q._y,K=Q._z,Y=Q._w,U=Z+Z,E=H+H,F=K+K,k=Z*U,X=Z*E,q=Z*F,M=H*E,I=H*F,N=K*F,G=Y*U,L=Y*E,w=Y*F,z=$.x,P=$.y,C=$.z;return W[0]=(1-(M+N))*z,W[1]=(X+w)*z,W[2]=(q-L)*z,W[3]=0,W[4]=(X-w)*P,W[5]=(1-(k+N))*P,W[6]=(I+G)*P,W[7]=0,W[8]=(q+L)*C,W[9]=(I-G)*C,W[10]=(1-(k+M))*C,W[11]=0,W[12]=J.x,W[13]=J.y,W[14]=J.z,W[15]=1,this}decompose(J,Q,$){let W=this.elements;J.x=W[12],J.y=W[13],J.z=W[14];let Z=this.determinant();if(Z===0)return $.set(1,1,1),Q.identity(),this;let H=t6.set(W[0],W[1],W[2]).length(),K=t6.set(W[4],W[5],W[6]).length(),Y=t6.set(W[8],W[9],W[10]).length();if(Z<0)H=-H;u8.copy(this);let U=1/H,E=1/K,F=1/Y;return u8.elements[0]*=U,u8.elements[1]*=U,u8.elements[2]*=U,u8.elements[4]*=E,u8.elements[5]*=E,u8.elements[6]*=E,u8.elements[8]*=F,u8.elements[9]*=F,u8.elements[10]*=F,Q.setFromRotationMatrix(u8),$.x=H,$.y=K,$.z=Y,this}makePerspective(J,Q,$,W,Z,H,K=2000,Y=!1){let U=this.elements,E=2*Z/(Q-J),F=2*Z/($-W),k=(Q+J)/(Q-J),X=($+W)/($-W),q,M;if(Y)q=Z/(H-Z),M=H*Z/(H-Z);else if(K===2000)q=-(H+Z)/(H-Z),M=-2*H*Z/(H-Z);else if(K===2001)q=-H/(H-Z),M=-H*Z/(H-Z);else throw Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+K);return U[0]=E,U[4]=0,U[8]=k,U[12]=0,U[1]=0,U[5]=F,U[9]=X,U[13]=0,U[2]=0,U[6]=0,U[10]=q,U[14]=M,U[3]=0,U[7]=0,U[11]=-1,U[15]=0,this}makeOrthographic(J,Q,$,W,Z,H,K=2000,Y=!1){let U=this.elements,E=2/(Q-J),F=2/($-W),k=-(Q+J)/(Q-J),X=-($+W)/($-W),q,M;if(Y)q=1/(H-Z),M=H/(H-Z);else if(K===2000)q=-2/(H-Z),M=-(H+Z)/(H-Z);else if(K===2001)q=-1/(H-Z),M=-Z/(H-Z);else throw Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+K);return U[0]=E,U[4]=0,U[8]=0,U[12]=k,U[1]=0,U[5]=F,U[9]=0,U[13]=X,U[2]=0,U[6]=0,U[10]=q,U[14]=M,U[3]=0,U[7]=0,U[11]=0,U[15]=1,this}equals(J){let Q=this.elements,$=J.elements;for(let W=0;W<16;W++)if(Q[W]!==$[W])return!1;return!0}fromArray(J,Q=0){for(let $=0;$<16;$++)this.elements[$]=J[$+Q];return this}toArray(J=[],Q=0){let $=this.elements;return J[Q]=$[0],J[Q+1]=$[1],J[Q+2]=$[2],J[Q+3]=$[3],J[Q+4]=$[4],J[Q+5]=$[5],J[Q+6]=$[6],J[Q+7]=$[7],J[Q+8]=$[8],J[Q+9]=$[9],J[Q+10]=$[10],J[Q+11]=$[11],J[Q+12]=$[12],J[Q+13]=$[13],J[Q+14]=$[14],J[Q+15]=$[15],J}}var t6=new v,u8=new H8,UW=new v(0,0,0),EW=new v(1,1,1),M6=new v,r9=new v,b8=new v,vQ=new H8,fQ=new q6;class G6{constructor(J=0,Q=0,$=0,W=G6.DEFAULT_ORDER){this.isEuler=!0,this._x=J,this._y=Q,this._z=$,this._order=W}get x(){return this._x}set x(J){this._x=J,this._onChangeCallback()}get y(){return this._y}set y(J){this._y=J,this._onChangeCallback()}get z(){return this._z}set z(J){this._z=J,this._onChangeCallback()}get order(){return this._order}set order(J){this._order=J,this._onChangeCallback()}set(J,Q,$,W=this._order){return this._x=J,this._y=Q,this._z=$,this._order=W,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(J){return this._x=J._x,this._y=J._y,this._z=J._z,this._order=J._order,this._onChangeCallback(),this}setFromRotationMatrix(J,Q=this._order,$=!0){let W=J.elements,Z=W[0],H=W[4],K=W[8],Y=W[1],U=W[5],E=W[9],F=W[2],k=W[6],X=W[10];switch(Q){case"XYZ":if(this._y=Math.asin(u0(K,-1,1)),Math.abs(K)<0.9999999)this._x=Math.atan2(-E,X),this._z=Math.atan2(-H,Z);else this._x=Math.atan2(k,U),this._z=0;break;case"YXZ":if(this._x=Math.asin(-u0(E,-1,1)),Math.abs(E)<0.9999999)this._y=Math.atan2(K,X),this._z=Math.atan2(Y,U);else this._y=Math.atan2(-F,Z),this._z=0;break;case"ZXY":if(this._x=Math.asin(u0(k,-1,1)),Math.abs(k)<0.9999999)this._y=Math.atan2(-F,X),this._z=Math.atan2(-H,U);else this._y=0,this._z=Math.atan2(Y,Z);break;case"ZYX":if(this._y=Math.asin(-u0(F,-1,1)),Math.abs(F)<0.9999999)this._x=Math.atan2(k,X),this._z=Math.atan2(Y,Z);else this._x=0,this._z=Math.atan2(-H,U);break;case"YZX":if(this._z=Math.asin(u0(Y,-1,1)),Math.abs(Y)<0.9999999)this._x=Math.atan2(-E,U),this._y=Math.atan2(-F,Z);else this._x=0,this._y=Math.atan2(K,X);break;case"XZY":if(this._z=Math.asin(-u0(H,-1,1)),Math.abs(H)<0.9999999)this._x=Math.atan2(k,U),this._y=Math.atan2(K,Z);else this._x=Math.atan2(-E,X),this._y=0;break;default:I0("Euler: .setFromRotationMatrix() encountered an unknown order: "+Q)}if(this._order=Q,$===!0)this._onChangeCallback();return this}setFromQuaternion(J,Q,$){return vQ.makeRotationFromQuaternion(J),this.setFromRotationMatrix(vQ,Q,$)}setFromVector3(J,Q=this._order){return this.set(J.x,J.y,J.z,Q)}reorder(J){return fQ.setFromEuler(this),this.setFromQuaternion(fQ,J)}equals(J){return J._x===this._x&&J._y===this._y&&J._z===this._z&&J._order===this._order}fromArray(J){if(this._x=J[0],this._y=J[1],this._z=J[2],J[3]!==void 0)this._order=J[3];return this._onChangeCallback(),this}toArray(J=[],Q=0){return J[Q]=this._x,J[Q+1]=this._y,J[Q+2]=this._z,J[Q+3]=this._order,J}_onChange(J){return this._onChangeCallback=J,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}G6.DEFAULT_ORDER="XYZ";class xJ{constructor(){this.mask=1}set(J){this.mask=(1<<J|0)>>>0}enable(J){this.mask|=1<<J|0}enableAll(){this.mask=-1}toggle(J){this.mask^=1<<J|0}disable(J){this.mask&=~(1<<J|0)}disableAll(){this.mask=0}test(J){return(this.mask&J.mask)!==0}isEnabled(J){return(this.mask&(1<<J|0))!==0}}var XW=0,bQ=new v,e6=new q6,Z6=new H8,t9=new v,B9=new v,GW=new v,NW=new q6,yQ=new v(1,0,0),hQ=new v(0,1,0),xQ=new v(0,0,1),gQ={type:"added"},kW={type:"removed"},J9={type:"childadded",child:null},G7={type:"childremoved",child:null};class q8 extends F6{constructor(){super();this.isObject3D=!0,Object.defineProperty(this,"id",{value:XW++}),this.uuid=j9(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=q8.DEFAULT_UP.clone();let J=new v,Q=new G6,$=new q6,W=new v(1,1,1);function Z(){$.setFromEuler(Q,!1)}function H(){Q.setFromQuaternion($,void 0,!1)}Q._onChange(Z),$._onChange(H),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:J},rotation:{configurable:!0,enumerable:!0,value:Q},quaternion:{configurable:!0,enumerable:!0,value:$},scale:{configurable:!0,enumerable:!0,value:W},modelViewMatrix:{value:new H8},normalMatrix:{value:new T0}}),this.matrix=new H8,this.matrixWorld=new H8,this.matrixAutoUpdate=q8.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=q8.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new xJ,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(J){if(this.matrixAutoUpdate)this.updateMatrix();this.matrix.premultiply(J),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(J){return this.quaternion.premultiply(J),this}setRotationFromAxisAngle(J,Q){this.quaternion.setFromAxisAngle(J,Q)}setRotationFromEuler(J){this.quaternion.setFromEuler(J,!0)}setRotationFromMatrix(J){this.quaternion.setFromRotationMatrix(J)}setRotationFromQuaternion(J){this.quaternion.copy(J)}rotateOnAxis(J,Q){return e6.setFromAxisAngle(J,Q),this.quaternion.multiply(e6),this}rotateOnWorldAxis(J,Q){return e6.setFromAxisAngle(J,Q),this.quaternion.premultiply(e6),this}rotateX(J){return this.rotateOnAxis(yQ,J)}rotateY(J){return this.rotateOnAxis(hQ,J)}rotateZ(J){return this.rotateOnAxis(xQ,J)}translateOnAxis(J,Q){return bQ.copy(J).applyQuaternion(this.quaternion),this.position.add(bQ.multiplyScalar(Q)),this}translateX(J){return this.translateOnAxis(yQ,J)}translateY(J){return this.translateOnAxis(hQ,J)}translateZ(J){return this.translateOnAxis(xQ,J)}localToWorld(J){return this.updateWorldMatrix(!0,!1),J.applyMatrix4(this.matrixWorld)}worldToLocal(J){return this.updateWorldMatrix(!0,!1),J.applyMatrix4(Z6.copy(this.matrixWorld).invert())}lookAt(J,Q,$){if(J.isVector3)t9.copy(J);else t9.set(J,Q,$);let W=this.parent;if(this.updateWorldMatrix(!0,!1),B9.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight)Z6.lookAt(B9,t9,this.up);else Z6.lookAt(t9,B9,this.up);if(this.quaternion.setFromRotationMatrix(Z6),W)Z6.extractRotation(W.matrixWorld),e6.setFromRotationMatrix(Z6),this.quaternion.premultiply(e6.invert())}add(J){if(arguments.length>1){for(let Q=0;Q<arguments.length;Q++)this.add(arguments[Q]);return this}if(J===this)return _0("Object3D.add: object can't be added as a child of itself.",J),this;if(J&&J.isObject3D)J.removeFromParent(),J.parent=this,this.children.push(J),J.dispatchEvent(gQ),J9.child=J,this.dispatchEvent(J9),J9.child=null;else _0("Object3D.add: object not an instance of THREE.Object3D.",J);return this}remove(J){if(arguments.length>1){for(let $=0;$<arguments.length;$++)this.remove(arguments[$]);return this}let Q=this.children.indexOf(J);if(Q!==-1)J.parent=null,this.children.splice(Q,1),J.dispatchEvent(kW),G7.child=J,this.dispatchEvent(G7),G7.child=null;return this}removeFromParent(){let J=this.parent;if(J!==null)J.remove(this);return this}clear(){return this.remove(...this.children)}attach(J){if(this.updateWorldMatrix(!0,!1),Z6.copy(this.matrixWorld).invert(),J.parent!==null)J.parent.updateWorldMatrix(!0,!1),Z6.multiply(J.parent.matrixWorld);return J.applyMatrix4(Z6),J.removeFromParent(),J.parent=this,this.children.push(J),J.updateWorldMatrix(!1,!0),J.dispatchEvent(gQ),J9.child=J,this.dispatchEvent(J9),J9.child=null,this}getObjectById(J){return this.getObjectByProperty("id",J)}getObjectByName(J){return this.getObjectByProperty("name",J)}getObjectByProperty(J,Q){if(this[J]===Q)return this;for(let $=0,W=this.children.length;$<W;$++){let H=this.children[$].getObjectByProperty(J,Q);if(H!==void 0)return H}return}getObjectsByProperty(J,Q,$=[]){if(this[J]===Q)$.push(this);let W=this.children;for(let Z=0,H=W.length;Z<H;Z++)W[Z].getObjectsByProperty(J,Q,$);return $}getWorldPosition(J){return this.updateWorldMatrix(!0,!1),J.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(J){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(B9,J,GW),J}getWorldScale(J){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(B9,NW,J),J}getWorldDirection(J){this.updateWorldMatrix(!0,!1);let Q=this.matrixWorld.elements;return J.set(Q[8],Q[9],Q[10]).normalize()}raycast(){}traverse(J){J(this);let Q=this.children;for(let $=0,W=Q.length;$<W;$++)Q[$].traverse(J)}traverseVisible(J){if(this.visible===!1)return;J(this);let Q=this.children;for(let $=0,W=Q.length;$<W;$++)Q[$].traverseVisible(J)}traverseAncestors(J){let Q=this.parent;if(Q!==null)J(Q),Q.traverseAncestors(J)}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let J=this.pivot;if(J!==null){let{x:Q,y:$,z:W}=J,Z=this.matrix.elements;Z[12]+=Q-Z[0]*Q-Z[4]*$-Z[8]*W,Z[13]+=$-Z[1]*Q-Z[5]*$-Z[9]*W,Z[14]+=W-Z[2]*Q-Z[6]*$-Z[10]*W}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(J){if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldNeedsUpdate||J){if(this.matrixWorldAutoUpdate===!0)if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);this.matrixWorldNeedsUpdate=!1,J=!0}let Q=this.children;for(let $=0,W=Q.length;$<W;$++)Q[$].updateMatrixWorld(J)}updateWorldMatrix(J,Q){let $=this.parent;if(J===!0&&$!==null)$.updateWorldMatrix(!0,!1);if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldAutoUpdate===!0)if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);if(Q===!0){let W=this.children;for(let Z=0,H=W.length;Z<H;Z++)W[Z].updateWorldMatrix(!1,!0)}}toJSON(J){let Q=J===void 0||typeof J==="string",$={};if(Q)J={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},$.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"};let W={};if(W.uuid=this.uuid,W.type=this.type,this.name!=="")W.name=this.name;if(this.castShadow===!0)W.castShadow=!0;if(this.receiveShadow===!0)W.receiveShadow=!0;if(this.visible===!1)W.visible=!1;if(this.frustumCulled===!1)W.frustumCulled=!1;if(this.renderOrder!==0)W.renderOrder=this.renderOrder;if(this.static!==!1)W.static=this.static;if(Object.keys(this.userData).length>0)W.userData=this.userData;if(W.layers=this.layers.mask,W.matrix=this.matrix.toArray(),W.up=this.up.toArray(),this.pivot!==null)W.pivot=this.pivot.toArray();if(this.matrixAutoUpdate===!1)W.matrixAutoUpdate=!1;if(this.morphTargetDictionary!==void 0)W.morphTargetDictionary=Object.assign({},this.morphTargetDictionary);if(this.morphTargetInfluences!==void 0)W.morphTargetInfluences=this.morphTargetInfluences.slice();if(this.isInstancedMesh){if(W.type="InstancedMesh",W.count=this.count,W.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null)W.instanceColor=this.instanceColor.toJSON()}if(this.isBatchedMesh){if(W.type="BatchedMesh",W.perObjectFrustumCulled=this.perObjectFrustumCulled,W.sortObjects=this.sortObjects,W.drawRanges=this._drawRanges,W.reservedRanges=this._reservedRanges,W.geometryInfo=this._geometryInfo.map((K)=>({...K,boundingBox:K.boundingBox?K.boundingBox.toJSON():void 0,boundingSphere:K.boundingSphere?K.boundingSphere.toJSON():void 0})),W.instanceInfo=this._instanceInfo.map((K)=>({...K})),W.availableInstanceIds=this._availableInstanceIds.slice(),W.availableGeometryIds=this._availableGeometryIds.slice(),W.nextIndexStart=this._nextIndexStart,W.nextVertexStart=this._nextVertexStart,W.geometryCount=this._geometryCount,W.maxInstanceCount=this._maxInstanceCount,W.maxVertexCount=this._maxVertexCount,W.maxIndexCount=this._maxIndexCount,W.geometryInitialized=this._geometryInitialized,W.matricesTexture=this._matricesTexture.toJSON(J),W.indirectTexture=this._indirectTexture.toJSON(J),this._colorsTexture!==null)W.colorsTexture=this._colorsTexture.toJSON(J);if(this.boundingSphere!==null)W.boundingSphere=this.boundingSphere.toJSON();if(this.boundingBox!==null)W.boundingBox=this.boundingBox.toJSON()}function Z(K,Y){if(K[Y.uuid]===void 0)K[Y.uuid]=Y.toJSON(J);return Y.uuid}if(this.isScene){if(this.background){if(this.background.isColor)W.background=this.background.toJSON();else if(this.background.isTexture)W.background=this.background.toJSON(J).uuid}if(this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0)W.environment=this.environment.toJSON(J).uuid}else if(this.isMesh||this.isLine||this.isPoints){W.geometry=Z(J.geometries,this.geometry);let K=this.geometry.parameters;if(K!==void 0&&K.shapes!==void 0){let Y=K.shapes;if(Array.isArray(Y))for(let U=0,E=Y.length;U<E;U++){let F=Y[U];Z(J.shapes,F)}else Z(J.shapes,Y)}}if(this.isSkinnedMesh){if(W.bindMode=this.bindMode,W.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0)Z(J.skeletons,this.skeleton),W.skeleton=this.skeleton.uuid}if(this.material!==void 0)if(Array.isArray(this.material)){let K=[];for(let Y=0,U=this.material.length;Y<U;Y++)K.push(Z(J.materials,this.material[Y]));W.material=K}else W.material=Z(J.materials,this.material);if(this.children.length>0){W.children=[];for(let K=0;K<this.children.length;K++)W.children.push(this.children[K].toJSON(J).object)}if(this.animations.length>0){W.animations=[];for(let K=0;K<this.animations.length;K++){let Y=this.animations[K];W.animations.push(Z(J.animations,Y))}}if(Q){let K=H(J.geometries),Y=H(J.materials),U=H(J.textures),E=H(J.images),F=H(J.shapes),k=H(J.skeletons),X=H(J.animations),q=H(J.nodes);if(K.length>0)$.geometries=K;if(Y.length>0)$.materials=Y;if(U.length>0)$.textures=U;if(E.length>0)$.images=E;if(F.length>0)$.shapes=F;if(k.length>0)$.skeletons=k;if(X.length>0)$.animations=X;if(q.length>0)$.nodes=q}return $.object=W,$;function H(K){let Y=[];for(let U in K){let E=K[U];delete E.metadata,Y.push(E)}return Y}}clone(J){return new this.constructor().copy(this,J)}copy(J,Q=!0){if(this.name=J.name,this.up.copy(J.up),this.position.copy(J.position),this.rotation.order=J.rotation.order,this.quaternion.copy(J.quaternion),this.scale.copy(J.scale),this.pivot=J.pivot!==null?J.pivot.clone():null,this.matrix.copy(J.matrix),this.matrixWorld.copy(J.matrixWorld),this.matrixAutoUpdate=J.matrixAutoUpdate,this.matrixWorldAutoUpdate=J.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=J.matrixWorldNeedsUpdate,this.layers.mask=J.layers.mask,this.visible=J.visible,this.castShadow=J.castShadow,this.receiveShadow=J.receiveShadow,this.frustumCulled=J.frustumCulled,this.renderOrder=J.renderOrder,this.static=J.static,this.animations=J.animations.slice(),this.userData=JSON.parse(JSON.stringify(J.userData)),Q===!0)for(let $=0;$<J.children.length;$++){let W=J.children[$];this.add(W.clone())}return this}}q8.DEFAULT_UP=new v(0,1,0);q8.DEFAULT_MATRIX_AUTO_UPDATE=!0;q8.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class I6 extends q8{constructor(){super();this.isGroup=!0,this.type="Group"}}var FW={type:"move"};class f9{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){if(this._hand===null)this._hand=new I6,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1};return this._hand}getTargetRaySpace(){if(this._targetRay===null)this._targetRay=new I6,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new v,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new v;return this._targetRay}getGripSpace(){if(this._grip===null)this._grip=new I6,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new v,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new v,this._grip.eventsEnabled=!1;return this._grip}dispatchEvent(J){if(this._targetRay!==null)this._targetRay.dispatchEvent(J);if(this._grip!==null)this._grip.dispatchEvent(J);if(this._hand!==null)this._hand.dispatchEvent(J);return this}connect(J){if(J&&J.hand){let Q=this._hand;if(Q)for(let $ of J.hand.values())this._getHandJoint(Q,$)}return this.dispatchEvent({type:"connected",data:J}),this}disconnect(J){if(this.dispatchEvent({type:"disconnected",data:J}),this._targetRay!==null)this._targetRay.visible=!1;if(this._grip!==null)this._grip.visible=!1;if(this._hand!==null)this._hand.visible=!1;return this}update(J,Q,$){let W=null,Z=null,H=null,K=this._targetRay,Y=this._grip,U=this._hand;if(J&&Q.session.visibilityState!=="visible-blurred"){if(U&&J.hand){H=!0;for(let M of J.hand.values()){let I=Q.getJointPose(M,$),N=this._getHandJoint(U,M);if(I!==null)N.matrix.fromArray(I.transform.matrix),N.matrix.decompose(N.position,N.rotation,N.scale),N.matrixWorldNeedsUpdate=!0,N.jointRadius=I.radius;N.visible=I!==null}let E=U.joints["index-finger-tip"],F=U.joints["thumb-tip"],k=E.position.distanceTo(F.position),X=0.02,q=0.005;if(U.inputState.pinching&&k>X+q)U.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:J.handedness,target:this});else if(!U.inputState.pinching&&k<=X-q)U.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:J.handedness,target:this})}else if(Y!==null&&J.gripSpace){if(Z=Q.getPose(J.gripSpace,$),Z!==null){if(Y.matrix.fromArray(Z.transform.matrix),Y.matrix.decompose(Y.position,Y.rotation,Y.scale),Y.matrixWorldNeedsUpdate=!0,Z.linearVelocity)Y.hasLinearVelocity=!0,Y.linearVelocity.copy(Z.linearVelocity);else Y.hasLinearVelocity=!1;if(Z.angularVelocity)Y.hasAngularVelocity=!0,Y.angularVelocity.copy(Z.angularVelocity);else Y.hasAngularVelocity=!1;if(Y.eventsEnabled)Y.dispatchEvent({type:"gripUpdated",data:J,target:this})}}if(K!==null){if(W=Q.getPose(J.targetRaySpace,$),W===null&&Z!==null)W=Z;if(W!==null){if(K.matrix.fromArray(W.transform.matrix),K.matrix.decompose(K.position,K.rotation,K.scale),K.matrixWorldNeedsUpdate=!0,W.linearVelocity)K.hasLinearVelocity=!0,K.linearVelocity.copy(W.linearVelocity);else K.hasLinearVelocity=!1;if(W.angularVelocity)K.hasAngularVelocity=!0,K.angularVelocity.copy(W.angularVelocity);else K.hasAngularVelocity=!1;this.dispatchEvent(FW)}}}if(K!==null)K.visible=W!==null;if(Y!==null)Y.visible=Z!==null;if(U!==null)U.visible=H!==null;return this}_getHandJoint(J,Q){if(J.joints[Q.jointName]===void 0){let $=new I6;$.matrixAutoUpdate=!1,$.visible=!1,J.joints[Q.jointName]=$,J.add($)}return J.joints[Q.jointName]}}var W$={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},L6={h:0,s:0,l:0},e9={h:0,s:0,l:0};function N7(J,Q,$){if($<0)$+=1;if($>1)$-=1;if($<0.16666666666666666)return J+(Q-J)*6*$;if($<0.5)return Q;if($<0.6666666666666666)return J+(Q-J)*6*(0.6666666666666666-$);return J}class b0{constructor(J,Q,$){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(J,Q,$)}set(J,Q,$){if(Q===void 0&&$===void 0){let W=J;if(W&&W.isColor)this.copy(W);else if(typeof W==="number")this.setHex(W);else if(typeof W==="string")this.setStyle(W)}else this.setRGB(J,Q,$);return this}setScalar(J){return this.r=J,this.g=J,this.b=J,this}setHex(J,Q="srgb"){return J=Math.floor(J),this.r=(J>>16&255)/255,this.g=(J>>8&255)/255,this.b=(J&255)/255,l0.colorSpaceToWorking(this,Q),this}setRGB(J,Q,$,W=l0.workingColorSpace){return this.r=J,this.g=Q,this.b=$,l0.colorSpaceToWorking(this,W),this}setHSL(J,Q,$,W=l0.workingColorSpace){if(J=ZW(J,1),Q=u0(Q,0,1),$=u0($,0,1),Q===0)this.r=this.g=this.b=$;else{let Z=$<=0.5?$*(1+Q):$+Q-$*Q,H=2*$-Z;this.r=N7(H,Z,J+0.3333333333333333),this.g=N7(H,Z,J),this.b=N7(H,Z,J-0.3333333333333333)}return l0.colorSpaceToWorking(this,W),this}setStyle(J,Q="srgb"){function $(Z){if(Z===void 0)return;if(parseFloat(Z)<1)I0("Color: Alpha component of "+J+" will be ignored.")}let W;if(W=/^(\w+)\(([^\)]*)\)/.exec(J)){let Z,H=W[1],K=W[2];switch(H){case"rgb":case"rgba":if(Z=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(K))return $(Z[4]),this.setRGB(Math.min(255,parseInt(Z[1],10))/255,Math.min(255,parseInt(Z[2],10))/255,Math.min(255,parseInt(Z[3],10))/255,Q);if(Z=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(K))return $(Z[4]),this.setRGB(Math.min(100,parseInt(Z[1],10))/100,Math.min(100,parseInt(Z[2],10))/100,Math.min(100,parseInt(Z[3],10))/100,Q);break;case"hsl":case"hsla":if(Z=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(K))return $(Z[4]),this.setHSL(parseFloat(Z[1])/360,parseFloat(Z[2])/100,parseFloat(Z[3])/100,Q);break;default:I0("Color: Unknown color model "+J)}}else if(W=/^\#([A-Fa-f\d]+)$/.exec(J)){let Z=W[1],H=Z.length;if(H===3)return this.setRGB(parseInt(Z.charAt(0),16)/15,parseInt(Z.charAt(1),16)/15,parseInt(Z.charAt(2),16)/15,Q);else if(H===6)return this.setHex(parseInt(Z,16),Q);else I0("Color: Invalid hex color "+J)}else if(J&&J.length>0)return this.setColorName(J,Q);return this}setColorName(J,Q="srgb"){let $=W$[J.toLowerCase()];if($!==void 0)this.setHex($,Q);else I0("Color: Unknown color "+J);return this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(J){return this.r=J.r,this.g=J.g,this.b=J.b,this}copySRGBToLinear(J){return this.r=X6(J.r),this.g=X6(J.g),this.b=X6(J.b),this}copyLinearToSRGB(J){return this.r=E9(J.r),this.g=E9(J.g),this.b=E9(J.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(J="srgb"){return l0.workingToColorSpace(z8.copy(this),J),Math.round(u0(z8.r*255,0,255))*65536+Math.round(u0(z8.g*255,0,255))*256+Math.round(u0(z8.b*255,0,255))}getHexString(J="srgb"){return("000000"+this.getHex(J).toString(16)).slice(-6)}getHSL(J,Q=l0.workingColorSpace){l0.workingToColorSpace(z8.copy(this),Q);let{r:$,g:W,b:Z}=z8,H=Math.max($,W,Z),K=Math.min($,W,Z),Y,U,E=(K+H)/2;if(K===H)Y=0,U=0;else{let F=H-K;switch(U=E<=0.5?F/(H+K):F/(2-H-K),H){case $:Y=(W-Z)/F+(W<Z?6:0);break;case W:Y=(Z-$)/F+2;break;case Z:Y=($-W)/F+4;break}Y/=6}return J.h=Y,J.s=U,J.l=E,J}getRGB(J,Q=l0.workingColorSpace){return l0.workingToColorSpace(z8.copy(this),Q),J.r=z8.r,J.g=z8.g,J.b=z8.b,J}getStyle(J="srgb"){l0.workingToColorSpace(z8.copy(this),J);let{r:Q,g:$,b:W}=z8;if(J!=="srgb")return`color(${J} ${Q.toFixed(3)} ${$.toFixed(3)} ${W.toFixed(3)})`;return`rgb(${Math.round(Q*255)},${Math.round($*255)},${Math.round(W*255)})`}offsetHSL(J,Q,$){return this.getHSL(L6),this.setHSL(L6.h+J,L6.s+Q,L6.l+$)}add(J){return this.r+=J.r,this.g+=J.g,this.b+=J.b,this}addColors(J,Q){return this.r=J.r+Q.r,this.g=J.g+Q.g,this.b=J.b+Q.b,this}addScalar(J){return this.r+=J,this.g+=J,this.b+=J,this}sub(J){return this.r=Math.max(0,this.r-J.r),this.g=Math.max(0,this.g-J.g),this.b=Math.max(0,this.b-J.b),this}multiply(J){return this.r*=J.r,this.g*=J.g,this.b*=J.b,this}multiplyScalar(J){return this.r*=J,this.g*=J,this.b*=J,this}lerp(J,Q){return this.r+=(J.r-this.r)*Q,this.g+=(J.g-this.g)*Q,this.b+=(J.b-this.b)*Q,this}lerpColors(J,Q,$){return this.r=J.r+(Q.r-J.r)*$,this.g=J.g+(Q.g-J.g)*$,this.b=J.b+(Q.b-J.b)*$,this}lerpHSL(J,Q){this.getHSL(L6),J.getHSL(e9);let $=K7(L6.h,e9.h,Q),W=K7(L6.s,e9.s,Q),Z=K7(L6.l,e9.l,Q);return this.setHSL($,W,Z),this}setFromVector3(J){return this.r=J.x,this.g=J.y,this.b=J.z,this}applyMatrix3(J){let Q=this.r,$=this.g,W=this.b,Z=J.elements;return this.r=Z[0]*Q+Z[3]*$+Z[6]*W,this.g=Z[1]*Q+Z[4]*$+Z[7]*W,this.b=Z[2]*Q+Z[5]*$+Z[8]*W,this}equals(J){return J.r===this.r&&J.g===this.g&&J.b===this.b}fromArray(J,Q=0){return this.r=J[Q],this.g=J[Q+1],this.b=J[Q+2],this}toArray(J=[],Q=0){return J[Q]=this.r,J[Q+1]=this.g,J[Q+2]=this.b,J}fromBufferAttribute(J,Q){return this.r=J.getX(Q),this.g=J.getY(Q),this.b=J.getZ(Q),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}var z8=new b0;b0.NAMES=W$;class gJ extends q8{constructor(){super();if(this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new G6,this.environmentIntensity=1,this.environmentRotation=new G6,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(J,Q){if(super.copy(J,Q),J.background!==null)this.background=J.background.clone();if(J.environment!==null)this.environment=J.environment.clone();if(J.fog!==null)this.fog=J.fog.clone();if(this.backgroundBlurriness=J.backgroundBlurriness,this.backgroundIntensity=J.backgroundIntensity,this.backgroundRotation.copy(J.backgroundRotation),this.environmentIntensity=J.environmentIntensity,this.environmentRotation.copy(J.environmentRotation),J.overrideMaterial!==null)this.overrideMaterial=J.overrideMaterial.clone();return this.matrixAutoUpdate=J.matrixAutoUpdate,this}toJSON(J){let Q=super.toJSON(J);if(this.fog!==null)Q.object.fog=this.fog.toJSON();if(this.backgroundBlurriness>0)Q.object.backgroundBlurriness=this.backgroundBlurriness;if(this.backgroundIntensity!==1)Q.object.backgroundIntensity=this.backgroundIntensity;if(Q.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1)Q.object.environmentIntensity=this.environmentIntensity;return Q.object.environmentRotation=this.environmentRotation.toArray(),Q}}var c8=new v,H6=new v,k7=new v,K6=new v,Q9=new v,$9=new v,pQ=new v,F7=new v,q7=new v,D7=new v,R7=new Y8,O7=new Y8,M7=new Y8;class g8{constructor(J=new v,Q=new v,$=new v){this.a=J,this.b=Q,this.c=$}static getNormal(J,Q,$,W){W.subVectors($,Q),c8.subVectors(J,Q),W.cross(c8);let Z=W.lengthSq();if(Z>0)return W.multiplyScalar(1/Math.sqrt(Z));return W.set(0,0,0)}static getBarycoord(J,Q,$,W,Z){c8.subVectors(W,Q),H6.subVectors($,Q),k7.subVectors(J,Q);let H=c8.dot(c8),K=c8.dot(H6),Y=c8.dot(k7),U=H6.dot(H6),E=H6.dot(k7),F=H*U-K*K;if(F===0)return Z.set(0,0,0),null;let k=1/F,X=(U*Y-K*E)*k,q=(H*E-K*Y)*k;return Z.set(1-X-q,q,X)}static containsPoint(J,Q,$,W){if(this.getBarycoord(J,Q,$,W,K6)===null)return!1;return K6.x>=0&&K6.y>=0&&K6.x+K6.y<=1}static getInterpolation(J,Q,$,W,Z,H,K,Y){if(this.getBarycoord(J,Q,$,W,K6)===null){if(Y.x=0,Y.y=0,"z"in Y)Y.z=0;if("w"in Y)Y.w=0;return null}return Y.setScalar(0),Y.addScaledVector(Z,K6.x),Y.addScaledVector(H,K6.y),Y.addScaledVector(K,K6.z),Y}static getInterpolatedAttribute(J,Q,$,W,Z,H){return R7.setScalar(0),O7.setScalar(0),M7.setScalar(0),R7.fromBufferAttribute(J,Q),O7.fromBufferAttribute(J,$),M7.fromBufferAttribute(J,W),H.setScalar(0),H.addScaledVector(R7,Z.x),H.addScaledVector(O7,Z.y),H.addScaledVector(M7,Z.z),H}static isFrontFacing(J,Q,$,W){return c8.subVectors($,Q),H6.subVectors(J,Q),c8.cross(H6).dot(W)<0}set(J,Q,$){return this.a.copy(J),this.b.copy(Q),this.c.copy($),this}setFromPointsAndIndices(J,Q,$,W){return this.a.copy(J[Q]),this.b.copy(J[$]),this.c.copy(J[W]),this}setFromAttributeAndIndices(J,Q,$,W){return this.a.fromBufferAttribute(J,Q),this.b.fromBufferAttribute(J,$),this.c.fromBufferAttribute(J,W),this}clone(){return new this.constructor().copy(this)}copy(J){return this.a.copy(J.a),this.b.copy(J.b),this.c.copy(J.c),this}getArea(){return c8.subVectors(this.c,this.b),H6.subVectors(this.a,this.b),c8.cross(H6).length()*0.5}getMidpoint(J){return J.addVectors(this.a,this.b).add(this.c).multiplyScalar(0.3333333333333333)}getNormal(J){return g8.getNormal(this.a,this.b,this.c,J)}getPlane(J){return J.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(J,Q){return g8.getBarycoord(J,this.a,this.b,this.c,Q)}getInterpolation(J,Q,$,W,Z){return g8.getInterpolation(J,this.a,this.b,this.c,Q,$,W,Z)}containsPoint(J){return g8.containsPoint(J,this.a,this.b,this.c)}isFrontFacing(J){return g8.isFrontFacing(this.a,this.b,this.c,J)}intersectsBox(J){return J.intersectsTriangle(this)}closestPointToPoint(J,Q){let $=this.a,W=this.b,Z=this.c,H,K;Q9.subVectors(W,$),$9.subVectors(Z,$),F7.subVectors(J,$);let Y=Q9.dot(F7),U=$9.dot(F7);if(Y<=0&&U<=0)return Q.copy($);q7.subVectors(J,W);let E=Q9.dot(q7),F=$9.dot(q7);if(E>=0&&F<=E)return Q.copy(W);let k=Y*F-E*U;if(k<=0&&Y>=0&&E<=0)return H=Y/(Y-E),Q.copy($).addScaledVector(Q9,H);D7.subVectors(J,Z);let X=Q9.dot(D7),q=$9.dot(D7);if(q>=0&&X<=q)return Q.copy(Z);let M=X*U-Y*q;if(M<=0&&U>=0&&q<=0)return K=U/(U-q),Q.copy($).addScaledVector($9,K);let I=E*q-X*F;if(I<=0&&F-E>=0&&X-q>=0)return pQ.subVectors(Z,W),K=(F-E)/(F-E+(X-q)),Q.copy(W).addScaledVector(pQ,K);let N=1/(I+M+k);return H=M*N,K=k*N,Q.copy($).addScaledVector(Q9,H).addScaledVector($9,K)}equals(J){return J.a.equals(this.a)&&J.b.equals(this.b)&&J.c.equals(this.c)}}class d6{constructor(J=new v(1/0,1/0,1/0),Q=new v(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=J,this.max=Q}set(J,Q){return this.min.copy(J),this.max.copy(Q),this}setFromArray(J){this.makeEmpty();for(let Q=0,$=J.length;Q<$;Q+=3)this.expandByPoint(n8.fromArray(J,Q));return this}setFromBufferAttribute(J){this.makeEmpty();for(let Q=0,$=J.count;Q<$;Q++)this.expandByPoint(n8.fromBufferAttribute(J,Q));return this}setFromPoints(J){this.makeEmpty();for(let Q=0,$=J.length;Q<$;Q++)this.expandByPoint(J[Q]);return this}setFromCenterAndSize(J,Q){let $=n8.copy(Q).multiplyScalar(0.5);return this.min.copy(J).sub($),this.max.copy(J).add($),this}setFromObject(J,Q=!1){return this.makeEmpty(),this.expandByObject(J,Q)}clone(){return new this.constructor().copy(this)}copy(J){return this.min.copy(J.min),this.max.copy(J.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(J){return this.isEmpty()?J.set(0,0,0):J.addVectors(this.min,this.max).multiplyScalar(0.5)}getSize(J){return this.isEmpty()?J.set(0,0,0):J.subVectors(this.max,this.min)}expandByPoint(J){return this.min.min(J),this.max.max(J),this}expandByVector(J){return this.min.sub(J),this.max.add(J),this}expandByScalar(J){return this.min.addScalar(-J),this.max.addScalar(J),this}expandByObject(J,Q=!1){J.updateWorldMatrix(!1,!1);let $=J.geometry;if($!==void 0){let Z=$.getAttribute("position");if(Q===!0&&Z!==void 0&&J.isInstancedMesh!==!0)for(let H=0,K=Z.count;H<K;H++){if(J.isMesh===!0)J.getVertexPosition(H,n8);else n8.fromBufferAttribute(Z,H);n8.applyMatrix4(J.matrixWorld),this.expandByPoint(n8)}else{if(J.boundingBox!==void 0){if(J.boundingBox===null)J.computeBoundingBox();JJ.copy(J.boundingBox)}else{if($.boundingBox===null)$.computeBoundingBox();JJ.copy($.boundingBox)}JJ.applyMatrix4(J.matrixWorld),this.union(JJ)}}let W=J.children;for(let Z=0,H=W.length;Z<H;Z++)this.expandByObject(W[Z],Q);return this}containsPoint(J){return J.x>=this.min.x&&J.x<=this.max.x&&J.y>=this.min.y&&J.y<=this.max.y&&J.z>=this.min.z&&J.z<=this.max.z}containsBox(J){return this.min.x<=J.min.x&&J.max.x<=this.max.x&&this.min.y<=J.min.y&&J.max.y<=this.max.y&&this.min.z<=J.min.z&&J.max.z<=this.max.z}getParameter(J,Q){return Q.set((J.x-this.min.x)/(this.max.x-this.min.x),(J.y-this.min.y)/(this.max.y-this.min.y),(J.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(J){return J.max.x>=this.min.x&&J.min.x<=this.max.x&&J.max.y>=this.min.y&&J.min.y<=this.max.y&&J.max.z>=this.min.z&&J.min.z<=this.max.z}intersectsSphere(J){return this.clampPoint(J.center,n8),n8.distanceToSquared(J.center)<=J.radius*J.radius}intersectsPlane(J){let Q,$;if(J.normal.x>0)Q=J.normal.x*this.min.x,$=J.normal.x*this.max.x;else Q=J.normal.x*this.max.x,$=J.normal.x*this.min.x;if(J.normal.y>0)Q+=J.normal.y*this.min.y,$+=J.normal.y*this.max.y;else Q+=J.normal.y*this.max.y,$+=J.normal.y*this.min.y;if(J.normal.z>0)Q+=J.normal.z*this.min.z,$+=J.normal.z*this.max.z;else Q+=J.normal.z*this.max.z,$+=J.normal.z*this.min.z;return Q<=-J.constant&&$>=-J.constant}intersectsTriangle(J){if(this.isEmpty())return!1;this.getCenter(V9),QJ.subVectors(this.max,V9),W9.subVectors(J.a,V9),Z9.subVectors(J.b,V9),H9.subVectors(J.c,V9),B6.subVectors(Z9,W9),V6.subVectors(H9,Z9),S6.subVectors(W9,H9);let Q=[0,-B6.z,B6.y,0,-V6.z,V6.y,0,-S6.z,S6.y,B6.z,0,-B6.x,V6.z,0,-V6.x,S6.z,0,-S6.x,-B6.y,B6.x,0,-V6.y,V6.x,0,-S6.y,S6.x,0];if(!L7(Q,W9,Z9,H9,QJ))return!1;if(Q=[1,0,0,0,1,0,0,0,1],!L7(Q,W9,Z9,H9,QJ))return!1;return $J.crossVectors(B6,V6),Q=[$J.x,$J.y,$J.z],L7(Q,W9,Z9,H9,QJ)}clampPoint(J,Q){return Q.copy(J).clamp(this.min,this.max)}distanceToPoint(J){return this.clampPoint(J,n8).distanceTo(J)}getBoundingSphere(J){if(this.isEmpty())J.makeEmpty();else this.getCenter(J.center),J.radius=this.getSize(n8).length()*0.5;return J}intersect(J){if(this.min.max(J.min),this.max.min(J.max),this.isEmpty())this.makeEmpty();return this}union(J){return this.min.min(J.min),this.max.max(J.max),this}applyMatrix4(J){if(this.isEmpty())return this;return Y6[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(J),Y6[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(J),Y6[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(J),Y6[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(J),Y6[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(J),Y6[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(J),Y6[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(J),Y6[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(J),this.setFromPoints(Y6),this}translate(J){return this.min.add(J),this.max.add(J),this}equals(J){return J.min.equals(this.min)&&J.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(J){return this.min.fromArray(J.min),this.max.fromArray(J.max),this}}var Y6=[new v,new v,new v,new v,new v,new v,new v,new v],n8=new v,JJ=new d6,W9=new v,Z9=new v,H9=new v,B6=new v,V6=new v,S6=new v,V9=new v,QJ=new v,$J=new v,j6=new v;function L7(J,Q,$,W,Z){for(let H=0,K=J.length-3;H<=K;H+=3){j6.fromArray(J,H);let Y=Z.x*Math.abs(j6.x)+Z.y*Math.abs(j6.y)+Z.z*Math.abs(j6.z),U=Q.dot(j6),E=$.dot(j6),F=W.dot(j6);if(Math.max(-Math.max(U,E,F),Math.min(U,E,F))>Y)return!1}return!0}var F8=new v,WJ=new c0,qW=0;class S8 extends F6{constructor(J,Q,$=!1){super();if(Array.isArray(J))throw TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:qW++}),this.name="",this.array=J,this.itemSize=Q,this.count=J!==void 0?J.length/Q:0,this.normalized=$,this.usage=35044,this.updateRanges=[],this.gpuType=1015,this.version=0}onUploadCallback(){}set needsUpdate(J){if(J===!0)this.version++}setUsage(J){return this.usage=J,this}addUpdateRange(J,Q){this.updateRanges.push({start:J,count:Q})}clearUpdateRanges(){this.updateRanges.length=0}copy(J){return this.name=J.name,this.array=new J.array.constructor(J.array),this.itemSize=J.itemSize,this.count=J.count,this.normalized=J.normalized,this.usage=J.usage,this.gpuType=J.gpuType,this}copyAt(J,Q,$){J*=this.itemSize,$*=Q.itemSize;for(let W=0,Z=this.itemSize;W<Z;W++)this.array[J+W]=Q.array[$+W];return this}copyArray(J){return this.array.set(J),this}applyMatrix3(J){if(this.itemSize===2)for(let Q=0,$=this.count;Q<$;Q++)WJ.fromBufferAttribute(this,Q),WJ.applyMatrix3(J),this.setXY(Q,WJ.x,WJ.y);else if(this.itemSize===3)for(let Q=0,$=this.count;Q<$;Q++)F8.fromBufferAttribute(this,Q),F8.applyMatrix3(J),this.setXYZ(Q,F8.x,F8.y,F8.z);return this}applyMatrix4(J){for(let Q=0,$=this.count;Q<$;Q++)F8.fromBufferAttribute(this,Q),F8.applyMatrix4(J),this.setXYZ(Q,F8.x,F8.y,F8.z);return this}applyNormalMatrix(J){for(let Q=0,$=this.count;Q<$;Q++)F8.fromBufferAttribute(this,Q),F8.applyNormalMatrix(J),this.setXYZ(Q,F8.x,F8.y,F8.z);return this}transformDirection(J){for(let Q=0,$=this.count;Q<$;Q++)F8.fromBufferAttribute(this,Q),F8.transformDirection(J),this.setXYZ(Q,F8.x,F8.y,F8.z);return this}set(J,Q=0){return this.array.set(J,Q),this}getComponent(J,Q){let $=this.array[J*this.itemSize+Q];if(this.normalized)$=L9($,this.array);return $}setComponent(J,Q,$){if(this.normalized)$=T8($,this.array);return this.array[J*this.itemSize+Q]=$,this}getX(J){let Q=this.array[J*this.itemSize];if(this.normalized)Q=L9(Q,this.array);return Q}setX(J,Q){if(this.normalized)Q=T8(Q,this.array);return this.array[J*this.itemSize]=Q,this}getY(J){let Q=this.array[J*this.itemSize+1];if(this.normalized)Q=L9(Q,this.array);return Q}setY(J,Q){if(this.normalized)Q=T8(Q,this.array);return this.array[J*this.itemSize+1]=Q,this}getZ(J){let Q=this.array[J*this.itemSize+2];if(this.normalized)Q=L9(Q,this.array);return Q}setZ(J,Q){if(this.normalized)Q=T8(Q,this.array);return this.array[J*this.itemSize+2]=Q,this}getW(J){let Q=this.array[J*this.itemSize+3];if(this.normalized)Q=L9(Q,this.array);return Q}setW(J,Q){if(this.normalized)Q=T8(Q,this.array);return this.array[J*this.itemSize+3]=Q,this}setXY(J,Q,$){if(J*=this.itemSize,this.normalized)Q=T8(Q,this.array),$=T8($,this.array);return this.array[J+0]=Q,this.array[J+1]=$,this}setXYZ(J,Q,$,W){if(J*=this.itemSize,this.normalized)Q=T8(Q,this.array),$=T8($,this.array),W=T8(W,this.array);return this.array[J+0]=Q,this.array[J+1]=$,this.array[J+2]=W,this}setXYZW(J,Q,$,W,Z){if(J*=this.itemSize,this.normalized)Q=T8(Q,this.array),$=T8($,this.array),W=T8(W,this.array),Z=T8(Z,this.array);return this.array[J+0]=Q,this.array[J+1]=$,this.array[J+2]=W,this.array[J+3]=Z,this}onUpload(J){return this.onUploadCallback=J,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let J={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};if(this.name!=="")J.name=this.name;if(this.usage!==35044)J.usage=this.usage;return J}dispose(){this.dispatchEvent({type:"dispose"})}}class pJ extends S8{constructor(J,Q,$){super(new Uint16Array(J),Q,$)}}class dJ extends S8{constructor(J,Q,$){super(new Uint32Array(J),Q,$)}}class G8 extends S8{constructor(J,Q,$){super(new Float32Array(J),Q,$)}}var DW=new d6,w9=new v,B7=new v;class l6{constructor(J=new v,Q=-1){this.isSphere=!0,this.center=J,this.radius=Q}set(J,Q){return this.center.copy(J),this.radius=Q,this}setFromPoints(J,Q){let $=this.center;if(Q!==void 0)$.copy(Q);else DW.setFromPoints(J).getCenter($);let W=0;for(let Z=0,H=J.length;Z<H;Z++)W=Math.max(W,$.distanceToSquared(J[Z]));return this.radius=Math.sqrt(W),this}copy(J){return this.center.copy(J.center),this.radius=J.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(J){return J.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(J){return J.distanceTo(this.center)-this.radius}intersectsSphere(J){let Q=this.radius+J.radius;return J.center.distanceToSquared(this.center)<=Q*Q}intersectsBox(J){return J.intersectsSphere(this)}intersectsPlane(J){return Math.abs(J.distanceToPoint(this.center))<=this.radius}clampPoint(J,Q){let $=this.center.distanceToSquared(J);if(Q.copy(J),$>this.radius*this.radius)Q.sub(this.center).normalize(),Q.multiplyScalar(this.radius).add(this.center);return Q}getBoundingBox(J){if(this.isEmpty())return J.makeEmpty(),J;return J.set(this.center,this.center),J.expandByScalar(this.radius),J}applyMatrix4(J){return this.center.applyMatrix4(J),this.radius=this.radius*J.getMaxScaleOnAxis(),this}translate(J){return this.center.add(J),this}expandByPoint(J){if(this.isEmpty())return this.center.copy(J),this.radius=0,this;w9.subVectors(J,this.center);let Q=w9.lengthSq();if(Q>this.radius*this.radius){let $=Math.sqrt(Q),W=($-this.radius)*0.5;this.center.addScaledVector(w9,W/$),this.radius+=W}return this}union(J){if(J.isEmpty())return this;if(this.isEmpty())return this.copy(J),this;if(this.center.equals(J.center)===!0)this.radius=Math.max(this.radius,J.radius);else B7.subVectors(J.center,this.center).setLength(J.radius),this.expandByPoint(w9.copy(J.center).add(B7)),this.expandByPoint(w9.copy(J.center).sub(B7));return this}equals(J){return J.center.equals(this.center)&&J.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(J){return this.radius=J.radius,this.center.fromArray(J.center),this}}var RW=0,x8=new H8,V7=new q8,K9=new v,y8=new d6,z9=new d6,O8=new v;class L8 extends F6{constructor(){super();this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:RW++}),this.uuid=j9(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(J){if(Array.isArray(J))this.index=new(($W(J))?dJ:pJ)(J,1);else this.index=J;return this}setIndirect(J,Q=0){return this.indirect=J,this.indirectOffset=Q,this}getIndirect(){return this.indirect}getAttribute(J){return this.attributes[J]}setAttribute(J,Q){return this.attributes[J]=Q,this}deleteAttribute(J){return delete this.attributes[J],this}hasAttribute(J){return this.attributes[J]!==void 0}addGroup(J,Q,$=0){this.groups.push({start:J,count:Q,materialIndex:$})}clearGroups(){this.groups=[]}setDrawRange(J,Q){this.drawRange.start=J,this.drawRange.count=Q}applyMatrix4(J){let Q=this.attributes.position;if(Q!==void 0)Q.applyMatrix4(J),Q.needsUpdate=!0;let $=this.attributes.normal;if($!==void 0){let Z=new T0().getNormalMatrix(J);$.applyNormalMatrix(Z),$.needsUpdate=!0}let W=this.attributes.tangent;if(W!==void 0)W.transformDirection(J),W.needsUpdate=!0;if(this.boundingBox!==null)this.computeBoundingBox();if(this.boundingSphere!==null)this.computeBoundingSphere();return this}applyQuaternion(J){return x8.makeRotationFromQuaternion(J),this.applyMatrix4(x8),this}rotateX(J){return x8.makeRotationX(J),this.applyMatrix4(x8),this}rotateY(J){return x8.makeRotationY(J),this.applyMatrix4(x8),this}rotateZ(J){return x8.makeRotationZ(J),this.applyMatrix4(x8),this}translate(J,Q,$){return x8.makeTranslation(J,Q,$),this.applyMatrix4(x8),this}scale(J,Q,$){return x8.makeScale(J,Q,$),this.applyMatrix4(x8),this}lookAt(J){return V7.lookAt(J),V7.updateMatrix(),this.applyMatrix4(V7.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(K9).negate(),this.translate(K9.x,K9.y,K9.z),this}setFromPoints(J){let Q=this.getAttribute("position");if(Q===void 0){let $=[];for(let W=0,Z=J.length;W<Z;W++){let H=J[W];$.push(H.x,H.y,H.z||0)}this.setAttribute("position",new G8($,3))}else{let $=Math.min(J.length,Q.count);for(let W=0;W<$;W++){let Z=J[W];Q.setXYZ(W,Z.x,Z.y,Z.z||0)}if(J.length>Q.count)I0("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.");Q.needsUpdate=!0}return this}computeBoundingBox(){if(this.boundingBox===null)this.boundingBox=new d6;let J=this.attributes.position,Q=this.morphAttributes.position;if(J&&J.isGLBufferAttribute){_0("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new v(-1/0,-1/0,-1/0),new v(1/0,1/0,1/0));return}if(J!==void 0){if(this.boundingBox.setFromBufferAttribute(J),Q)for(let $=0,W=Q.length;$<W;$++){let Z=Q[$];if(y8.setFromBufferAttribute(Z),this.morphTargetsRelative)O8.addVectors(this.boundingBox.min,y8.min),this.boundingBox.expandByPoint(O8),O8.addVectors(this.boundingBox.max,y8.max),this.boundingBox.expandByPoint(O8);else this.boundingBox.expandByPoint(y8.min),this.boundingBox.expandByPoint(y8.max)}}else this.boundingBox.makeEmpty();if(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))_0('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){if(this.boundingSphere===null)this.boundingSphere=new l6;let J=this.attributes.position,Q=this.morphAttributes.position;if(J&&J.isGLBufferAttribute){_0("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new v,1/0);return}if(J){let $=this.boundingSphere.center;if(y8.setFromBufferAttribute(J),Q)for(let Z=0,H=Q.length;Z<H;Z++){let K=Q[Z];if(z9.setFromBufferAttribute(K),this.morphTargetsRelative)O8.addVectors(y8.min,z9.min),y8.expandByPoint(O8),O8.addVectors(y8.max,z9.max),y8.expandByPoint(O8);else y8.expandByPoint(z9.min),y8.expandByPoint(z9.max)}y8.getCenter($);let W=0;for(let Z=0,H=J.count;Z<H;Z++)O8.fromBufferAttribute(J,Z),W=Math.max(W,$.distanceToSquared(O8));if(Q)for(let Z=0,H=Q.length;Z<H;Z++){let K=Q[Z],Y=this.morphTargetsRelative;for(let U=0,E=K.count;U<E;U++){if(O8.fromBufferAttribute(K,U),Y)K9.fromBufferAttribute(J,U),O8.add(K9);W=Math.max(W,$.distanceToSquared(O8))}}if(this.boundingSphere.radius=Math.sqrt(W),isNaN(this.boundingSphere.radius))_0('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let J=this.index,Q=this.attributes;if(J===null||Q.position===void 0||Q.normal===void 0||Q.uv===void 0){_0("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let{position:$,normal:W,uv:Z}=Q;if(this.hasAttribute("tangent")===!1)this.setAttribute("tangent",new S8(new Float32Array(4*$.count),4));let H=this.getAttribute("tangent"),K=[],Y=[];for(let _=0;_<$.count;_++)K[_]=new v,Y[_]=new v;let U=new v,E=new v,F=new v,k=new c0,X=new c0,q=new c0,M=new v,I=new v;function N(_,D,B){U.fromBufferAttribute($,_),E.fromBufferAttribute($,D),F.fromBufferAttribute($,B),k.fromBufferAttribute(Z,_),X.fromBufferAttribute(Z,D),q.fromBufferAttribute(Z,B),E.sub(U),F.sub(U),X.sub(k),q.sub(k);let d=1/(X.x*q.y-q.x*X.y);if(!isFinite(d))return;M.copy(E).multiplyScalar(q.y).addScaledVector(F,-X.y).multiplyScalar(d),I.copy(F).multiplyScalar(X.x).addScaledVector(E,-q.x).multiplyScalar(d),K[_].add(M),K[D].add(M),K[B].add(M),Y[_].add(I),Y[D].add(I),Y[B].add(I)}let G=this.groups;if(G.length===0)G=[{start:0,count:J.count}];for(let _=0,D=G.length;_<D;++_){let B=G[_],d=B.start,A=B.count;for(let l=d,i=d+A;l<i;l+=3)N(J.getX(l+0),J.getX(l+1),J.getX(l+2))}let L=new v,w=new v,z=new v,P=new v;function C(_){z.fromBufferAttribute(W,_),P.copy(z);let D=K[_];L.copy(D),L.sub(z.multiplyScalar(z.dot(D))).normalize(),w.crossVectors(P,D);let d=w.dot(Y[_])<0?-1:1;H.setXYZW(_,L.x,L.y,L.z,d)}for(let _=0,D=G.length;_<D;++_){let B=G[_],d=B.start,A=B.count;for(let l=d,i=d+A;l<i;l+=3)C(J.getX(l+0)),C(J.getX(l+1)),C(J.getX(l+2))}}computeVertexNormals(){let J=this.index,Q=this.getAttribute("position");if(Q!==void 0){let $=this.getAttribute("normal");if($===void 0)$=new S8(new Float32Array(Q.count*3),3),this.setAttribute("normal",$);else for(let k=0,X=$.count;k<X;k++)$.setXYZ(k,0,0,0);let W=new v,Z=new v,H=new v,K=new v,Y=new v,U=new v,E=new v,F=new v;if(J)for(let k=0,X=J.count;k<X;k+=3){let q=J.getX(k+0),M=J.getX(k+1),I=J.getX(k+2);W.fromBufferAttribute(Q,q),Z.fromBufferAttribute(Q,M),H.fromBufferAttribute(Q,I),E.subVectors(H,Z),F.subVectors(W,Z),E.cross(F),K.fromBufferAttribute($,q),Y.fromBufferAttribute($,M),U.fromBufferAttribute($,I),K.add(E),Y.add(E),U.add(E),$.setXYZ(q,K.x,K.y,K.z),$.setXYZ(M,Y.x,Y.y,Y.z),$.setXYZ(I,U.x,U.y,U.z)}else for(let k=0,X=Q.count;k<X;k+=3)W.fromBufferAttribute(Q,k+0),Z.fromBufferAttribute(Q,k+1),H.fromBufferAttribute(Q,k+2),E.subVectors(H,Z),F.subVectors(W,Z),E.cross(F),$.setXYZ(k+0,E.x,E.y,E.z),$.setXYZ(k+1,E.x,E.y,E.z),$.setXYZ(k+2,E.x,E.y,E.z);this.normalizeNormals(),$.needsUpdate=!0}}normalizeNormals(){let J=this.attributes.normal;for(let Q=0,$=J.count;Q<$;Q++)O8.fromBufferAttribute(J,Q),O8.normalize(),J.setXYZ(Q,O8.x,O8.y,O8.z)}toNonIndexed(){function J(K,Y){let{array:U,itemSize:E,normalized:F}=K,k=new U.constructor(Y.length*E),X=0,q=0;for(let M=0,I=Y.length;M<I;M++){if(K.isInterleavedBufferAttribute)X=Y[M]*K.data.stride+K.offset;else X=Y[M]*E;for(let N=0;N<E;N++)k[q++]=U[X++]}return new S8(k,E,F)}if(this.index===null)return I0("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let Q=new L8,$=this.index.array,W=this.attributes;for(let K in W){let Y=W[K],U=J(Y,$);Q.setAttribute(K,U)}let Z=this.morphAttributes;for(let K in Z){let Y=[],U=Z[K];for(let E=0,F=U.length;E<F;E++){let k=U[E],X=J(k,$);Y.push(X)}Q.morphAttributes[K]=Y}Q.morphTargetsRelative=this.morphTargetsRelative;let H=this.groups;for(let K=0,Y=H.length;K<Y;K++){let U=H[K];Q.addGroup(U.start,U.count,U.materialIndex)}return Q}toJSON(){let J={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(J.uuid=this.uuid,J.type=this.type,this.name!=="")J.name=this.name;if(Object.keys(this.userData).length>0)J.userData=this.userData;if(this.parameters!==void 0){let Y=this.parameters;for(let U in Y)if(Y[U]!==void 0)J[U]=Y[U];return J}J.data={attributes:{}};let Q=this.index;if(Q!==null)J.data.index={type:Q.array.constructor.name,array:Array.prototype.slice.call(Q.array)};let $=this.attributes;for(let Y in $){let U=$[Y];J.data.attributes[Y]=U.toJSON(J.data)}let W={},Z=!1;for(let Y in this.morphAttributes){let U=this.morphAttributes[Y],E=[];for(let F=0,k=U.length;F<k;F++){let X=U[F];E.push(X.toJSON(J.data))}if(E.length>0)W[Y]=E,Z=!0}if(Z)J.data.morphAttributes=W,J.data.morphTargetsRelative=this.morphTargetsRelative;let H=this.groups;if(H.length>0)J.data.groups=JSON.parse(JSON.stringify(H));let K=this.boundingSphere;if(K!==null)J.data.boundingSphere=K.toJSON();return J}clone(){return new this.constructor().copy(this)}copy(J){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let Q={};this.name=J.name;let $=J.index;if($!==null)this.setIndex($.clone());let W=J.attributes;for(let U in W){let E=W[U];this.setAttribute(U,E.clone(Q))}let Z=J.morphAttributes;for(let U in Z){let E=[],F=Z[U];for(let k=0,X=F.length;k<X;k++)E.push(F[k].clone(Q));this.morphAttributes[U]=E}this.morphTargetsRelative=J.morphTargetsRelative;let H=J.groups;for(let U=0,E=H.length;U<E;U++){let F=H[U];this.addGroup(F.start,F.count,F.materialIndex)}let K=J.boundingBox;if(K!==null)this.boundingBox=K.clone();let Y=J.boundingSphere;if(Y!==null)this.boundingSphere=Y.clone();return this.drawRange.start=J.drawRange.start,this.drawRange.count=J.drawRange.count,this.userData=J.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}var OW=0;class o8 extends F6{constructor(){super();this.isMaterial=!0,Object.defineProperty(this,"id",{value:OW++}),this.uuid=j9(),this.name="",this.type="Material",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new b0(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=7680,this.stencilZFail=7680,this.stencilZPass=7680,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(J){if(this._alphaTest>0!==J>0)this.version++;this._alphaTest=J}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(J){if(J===void 0)return;for(let Q in J){let $=J[Q];if($===void 0){I0(`Material: parameter '${Q}' has value of undefined.`);continue}let W=this[Q];if(W===void 0){I0(`Material: '${Q}' is not a property of THREE.${this.type}.`);continue}if(W&&W.isColor)W.set($);else if(W&&W.isVector3&&($&&$.isVector3))W.copy($);else this[Q]=$}}toJSON(J){let Q=J===void 0||typeof J==="string";if(Q)J={textures:{},images:{}};let $={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};if($.uuid=this.uuid,$.type=this.type,this.name!=="")$.name=this.name;if(this.color&&this.color.isColor)$.color=this.color.getHex();if(this.roughness!==void 0)$.roughness=this.roughness;if(this.metalness!==void 0)$.metalness=this.metalness;if(this.sheen!==void 0)$.sheen=this.sheen;if(this.sheenColor&&this.sheenColor.isColor)$.sheenColor=this.sheenColor.getHex();if(this.sheenRoughness!==void 0)$.sheenRoughness=this.sheenRoughness;if(this.emissive&&this.emissive.isColor)$.emissive=this.emissive.getHex();if(this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1)$.emissiveIntensity=this.emissiveIntensity;if(this.specular&&this.specular.isColor)$.specular=this.specular.getHex();if(this.specularIntensity!==void 0)$.specularIntensity=this.specularIntensity;if(this.specularColor&&this.specularColor.isColor)$.specularColor=this.specularColor.getHex();if(this.shininess!==void 0)$.shininess=this.shininess;if(this.clearcoat!==void 0)$.clearcoat=this.clearcoat;if(this.clearcoatRoughness!==void 0)$.clearcoatRoughness=this.clearcoatRoughness;if(this.clearcoatMap&&this.clearcoatMap.isTexture)$.clearcoatMap=this.clearcoatMap.toJSON(J).uuid;if(this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture)$.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(J).uuid;if(this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture)$.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(J).uuid,$.clearcoatNormalScale=this.clearcoatNormalScale.toArray();if(this.sheenColorMap&&this.sheenColorMap.isTexture)$.sheenColorMap=this.sheenColorMap.toJSON(J).uuid;if(this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture)$.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(J).uuid;if(this.dispersion!==void 0)$.dispersion=this.dispersion;if(this.iridescence!==void 0)$.iridescence=this.iridescence;if(this.iridescenceIOR!==void 0)$.iridescenceIOR=this.iridescenceIOR;if(this.iridescenceThicknessRange!==void 0)$.iridescenceThicknessRange=this.iridescenceThicknessRange;if(this.iridescenceMap&&this.iridescenceMap.isTexture)$.iridescenceMap=this.iridescenceMap.toJSON(J).uuid;if(this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture)$.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(J).uuid;if(this.anisotropy!==void 0)$.anisotropy=this.anisotropy;if(this.anisotropyRotation!==void 0)$.anisotropyRotation=this.anisotropyRotation;if(this.anisotropyMap&&this.anisotropyMap.isTexture)$.anisotropyMap=this.anisotropyMap.toJSON(J).uuid;if(this.map&&this.map.isTexture)$.map=this.map.toJSON(J).uuid;if(this.matcap&&this.matcap.isTexture)$.matcap=this.matcap.toJSON(J).uuid;if(this.alphaMap&&this.alphaMap.isTexture)$.alphaMap=this.alphaMap.toJSON(J).uuid;if(this.lightMap&&this.lightMap.isTexture)$.lightMap=this.lightMap.toJSON(J).uuid,$.lightMapIntensity=this.lightMapIntensity;if(this.aoMap&&this.aoMap.isTexture)$.aoMap=this.aoMap.toJSON(J).uuid,$.aoMapIntensity=this.aoMapIntensity;if(this.bumpMap&&this.bumpMap.isTexture)$.bumpMap=this.bumpMap.toJSON(J).uuid,$.bumpScale=this.bumpScale;if(this.normalMap&&this.normalMap.isTexture)$.normalMap=this.normalMap.toJSON(J).uuid,$.normalMapType=this.normalMapType,$.normalScale=this.normalScale.toArray();if(this.displacementMap&&this.displacementMap.isTexture)$.displacementMap=this.displacementMap.toJSON(J).uuid,$.displacementScale=this.displacementScale,$.displacementBias=this.displacementBias;if(this.roughnessMap&&this.roughnessMap.isTexture)$.roughnessMap=this.roughnessMap.toJSON(J).uuid;if(this.metalnessMap&&this.metalnessMap.isTexture)$.metalnessMap=this.metalnessMap.toJSON(J).uuid;if(this.emissiveMap&&this.emissiveMap.isTexture)$.emissiveMap=this.emissiveMap.toJSON(J).uuid;if(this.specularMap&&this.specularMap.isTexture)$.specularMap=this.specularMap.toJSON(J).uuid;if(this.specularIntensityMap&&this.specularIntensityMap.isTexture)$.specularIntensityMap=this.specularIntensityMap.toJSON(J).uuid;if(this.specularColorMap&&this.specularColorMap.isTexture)$.specularColorMap=this.specularColorMap.toJSON(J).uuid;if(this.envMap&&this.envMap.isTexture){if($.envMap=this.envMap.toJSON(J).uuid,this.combine!==void 0)$.combine=this.combine}if(this.envMapRotation!==void 0)$.envMapRotation=this.envMapRotation.toArray();if(this.envMapIntensity!==void 0)$.envMapIntensity=this.envMapIntensity;if(this.reflectivity!==void 0)$.reflectivity=this.reflectivity;if(this.refractionRatio!==void 0)$.refractionRatio=this.refractionRatio;if(this.gradientMap&&this.gradientMap.isTexture)$.gradientMap=this.gradientMap.toJSON(J).uuid;if(this.transmission!==void 0)$.transmission=this.transmission;if(this.transmissionMap&&this.transmissionMap.isTexture)$.transmissionMap=this.transmissionMap.toJSON(J).uuid;if(this.thickness!==void 0)$.thickness=this.thickness;if(this.thicknessMap&&this.thicknessMap.isTexture)$.thicknessMap=this.thicknessMap.toJSON(J).uuid;if(this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0)$.attenuationDistance=this.attenuationDistance;if(this.attenuationColor!==void 0)$.attenuationColor=this.attenuationColor.getHex();if(this.size!==void 0)$.size=this.size;if(this.shadowSide!==null)$.shadowSide=this.shadowSide;if(this.sizeAttenuation!==void 0)$.sizeAttenuation=this.sizeAttenuation;if(this.blending!==1)$.blending=this.blending;if(this.side!==0)$.side=this.side;if(this.vertexColors===!0)$.vertexColors=!0;if(this.opacity<1)$.opacity=this.opacity;if(this.transparent===!0)$.transparent=!0;if(this.blendSrc!==204)$.blendSrc=this.blendSrc;if(this.blendDst!==205)$.blendDst=this.blendDst;if(this.blendEquation!==100)$.blendEquation=this.blendEquation;if(this.blendSrcAlpha!==null)$.blendSrcAlpha=this.blendSrcAlpha;if(this.blendDstAlpha!==null)$.blendDstAlpha=this.blendDstAlpha;if(this.blendEquationAlpha!==null)$.blendEquationAlpha=this.blendEquationAlpha;if(this.blendColor&&this.blendColor.isColor)$.blendColor=this.blendColor.getHex();if(this.blendAlpha!==0)$.blendAlpha=this.blendAlpha;if(this.depthFunc!==3)$.depthFunc=this.depthFunc;if(this.depthTest===!1)$.depthTest=this.depthTest;if(this.depthWrite===!1)$.depthWrite=this.depthWrite;if(this.colorWrite===!1)$.colorWrite=this.colorWrite;if(this.stencilWriteMask!==255)$.stencilWriteMask=this.stencilWriteMask;if(this.stencilFunc!==519)$.stencilFunc=this.stencilFunc;if(this.stencilRef!==0)$.stencilRef=this.stencilRef;if(this.stencilFuncMask!==255)$.stencilFuncMask=this.stencilFuncMask;if(this.stencilFail!==7680)$.stencilFail=this.stencilFail;if(this.stencilZFail!==7680)$.stencilZFail=this.stencilZFail;if(this.stencilZPass!==7680)$.stencilZPass=this.stencilZPass;if(this.stencilWrite===!0)$.stencilWrite=this.stencilWrite;if(this.rotation!==void 0&&this.rotation!==0)$.rotation=this.rotation;if(this.polygonOffset===!0)$.polygonOffset=!0;if(this.polygonOffsetFactor!==0)$.polygonOffsetFactor=this.polygonOffsetFactor;if(this.polygonOffsetUnits!==0)$.polygonOffsetUnits=this.polygonOffsetUnits;if(this.linewidth!==void 0&&this.linewidth!==1)$.linewidth=this.linewidth;if(this.dashSize!==void 0)$.dashSize=this.dashSize;if(this.gapSize!==void 0)$.gapSize=this.gapSize;if(this.scale!==void 0)$.scale=this.scale;if(this.dithering===!0)$.dithering=!0;if(this.alphaTest>0)$.alphaTest=this.alphaTest;if(this.alphaHash===!0)$.alphaHash=!0;if(this.alphaToCoverage===!0)$.alphaToCoverage=!0;if(this.premultipliedAlpha===!0)$.premultipliedAlpha=!0;if(this.forceSinglePass===!0)$.forceSinglePass=!0;if(this.allowOverride===!1)$.allowOverride=!1;if(this.wireframe===!0)$.wireframe=!0;if(this.wireframeLinewidth>1)$.wireframeLinewidth=this.wireframeLinewidth;if(this.wireframeLinecap!=="round")$.wireframeLinecap=this.wireframeLinecap;if(this.wireframeLinejoin!=="round")$.wireframeLinejoin=this.wireframeLinejoin;if(this.flatShading===!0)$.flatShading=!0;if(this.visible===!1)$.visible=!1;if(this.toneMapped===!1)$.toneMapped=!1;if(this.fog===!1)$.fog=!1;if(Object.keys(this.userData).length>0)$.userData=this.userData;function W(Z){let H=[];for(let K in Z){let Y=Z[K];delete Y.metadata,H.push(Y)}return H}if(Q){let Z=W(J.textures),H=W(J.images);if(Z.length>0)$.textures=Z;if(H.length>0)$.images=H}return $}clone(){return new this.constructor().copy(this)}copy(J){this.name=J.name,this.blending=J.blending,this.side=J.side,this.vertexColors=J.vertexColors,this.opacity=J.opacity,this.transparent=J.transparent,this.blendSrc=J.blendSrc,this.blendDst=J.blendDst,this.blendEquation=J.blendEquation,this.blendSrcAlpha=J.blendSrcAlpha,this.blendDstAlpha=J.blendDstAlpha,this.blendEquationAlpha=J.blendEquationAlpha,this.blendColor.copy(J.blendColor),this.blendAlpha=J.blendAlpha,this.depthFunc=J.depthFunc,this.depthTest=J.depthTest,this.depthWrite=J.depthWrite,this.stencilWriteMask=J.stencilWriteMask,this.stencilFunc=J.stencilFunc,this.stencilRef=J.stencilRef,this.stencilFuncMask=J.stencilFuncMask,this.stencilFail=J.stencilFail,this.stencilZFail=J.stencilZFail,this.stencilZPass=J.stencilZPass,this.stencilWrite=J.stencilWrite;let Q=J.clippingPlanes,$=null;if(Q!==null){let W=Q.length;$=Array(W);for(let Z=0;Z!==W;++Z)$[Z]=Q[Z].clone()}return this.clippingPlanes=$,this.clipIntersection=J.clipIntersection,this.clipShadows=J.clipShadows,this.shadowSide=J.shadowSide,this.colorWrite=J.colorWrite,this.precision=J.precision,this.polygonOffset=J.polygonOffset,this.polygonOffsetFactor=J.polygonOffsetFactor,this.polygonOffsetUnits=J.polygonOffsetUnits,this.dithering=J.dithering,this.alphaTest=J.alphaTest,this.alphaHash=J.alphaHash,this.alphaToCoverage=J.alphaToCoverage,this.premultipliedAlpha=J.premultipliedAlpha,this.forceSinglePass=J.forceSinglePass,this.allowOverride=J.allowOverride,this.visible=J.visible,this.toneMapped=J.toneMapped,this.userData=JSON.parse(JSON.stringify(J.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(J){if(J===!0)this.version++}}var U6=new v,w7=new v,ZJ=new v,w6=new v,z7=new v,HJ=new v,I7=new v;class b9{constructor(J=new v,Q=new v(0,0,-1)){this.origin=J,this.direction=Q}set(J,Q){return this.origin.copy(J),this.direction.copy(Q),this}copy(J){return this.origin.copy(J.origin),this.direction.copy(J.direction),this}at(J,Q){return Q.copy(this.origin).addScaledVector(this.direction,J)}lookAt(J){return this.direction.copy(J).sub(this.origin).normalize(),this}recast(J){return this.origin.copy(this.at(J,U6)),this}closestPointToPoint(J,Q){Q.subVectors(J,this.origin);let $=Q.dot(this.direction);if($<0)return Q.copy(this.origin);return Q.copy(this.origin).addScaledVector(this.direction,$)}distanceToPoint(J){return Math.sqrt(this.distanceSqToPoint(J))}distanceSqToPoint(J){let Q=U6.subVectors(J,this.origin).dot(this.direction);if(Q<0)return this.origin.distanceToSquared(J);return U6.copy(this.origin).addScaledVector(this.direction,Q),U6.distanceToSquared(J)}distanceSqToSegment(J,Q,$,W){w7.copy(J).add(Q).multiplyScalar(0.5),ZJ.copy(Q).sub(J).normalize(),w6.copy(this.origin).sub(w7);let Z=J.distanceTo(Q)*0.5,H=-this.direction.dot(ZJ),K=w6.dot(this.direction),Y=-w6.dot(ZJ),U=w6.lengthSq(),E=Math.abs(1-H*H),F,k,X,q;if(E>0)if(F=H*Y-K,k=H*K-Y,q=Z*E,F>=0)if(k>=-q)if(k<=q){let M=1/E;F*=M,k*=M,X=F*(F+H*k+2*K)+k*(H*F+k+2*Y)+U}else k=Z,F=Math.max(0,-(H*k+K)),X=-F*F+k*(k+2*Y)+U;else k=-Z,F=Math.max(0,-(H*k+K)),X=-F*F+k*(k+2*Y)+U;else if(k<=-q)F=Math.max(0,-(-H*Z+K)),k=F>0?-Z:Math.min(Math.max(-Z,-Y),Z),X=-F*F+k*(k+2*Y)+U;else if(k<=q)F=0,k=Math.min(Math.max(-Z,-Y),Z),X=k*(k+2*Y)+U;else F=Math.max(0,-(H*Z+K)),k=F>0?Z:Math.min(Math.max(-Z,-Y),Z),X=-F*F+k*(k+2*Y)+U;else k=H>0?-Z:Z,F=Math.max(0,-(H*k+K)),X=-F*F+k*(k+2*Y)+U;if($)$.copy(this.origin).addScaledVector(this.direction,F);if(W)W.copy(w7).addScaledVector(ZJ,k);return X}intersectSphere(J,Q){U6.subVectors(J.center,this.origin);let $=U6.dot(this.direction),W=U6.dot(U6)-$*$,Z=J.radius*J.radius;if(W>Z)return null;let H=Math.sqrt(Z-W),K=$-H,Y=$+H;if(Y<0)return null;if(K<0)return this.at(Y,Q);return this.at(K,Q)}intersectsSphere(J){if(J.radius<0)return!1;return this.distanceSqToPoint(J.center)<=J.radius*J.radius}distanceToPlane(J){let Q=J.normal.dot(this.direction);if(Q===0){if(J.distanceToPoint(this.origin)===0)return 0;return null}let $=-(this.origin.dot(J.normal)+J.constant)/Q;return $>=0?$:null}intersectPlane(J,Q){let $=this.distanceToPlane(J);if($===null)return null;return this.at($,Q)}intersectsPlane(J){let Q=J.distanceToPoint(this.origin);if(Q===0)return!0;if(J.normal.dot(this.direction)*Q<0)return!0;return!1}intersectBox(J,Q){let $,W,Z,H,K,Y,U=1/this.direction.x,E=1/this.direction.y,F=1/this.direction.z,k=this.origin;if(U>=0)$=(J.min.x-k.x)*U,W=(J.max.x-k.x)*U;else $=(J.max.x-k.x)*U,W=(J.min.x-k.x)*U;if(E>=0)Z=(J.min.y-k.y)*E,H=(J.max.y-k.y)*E;else Z=(J.max.y-k.y)*E,H=(J.min.y-k.y)*E;if($>H||Z>W)return null;if(Z>$||isNaN($))$=Z;if(H<W||isNaN(W))W=H;if(F>=0)K=(J.min.z-k.z)*F,Y=(J.max.z-k.z)*F;else K=(J.max.z-k.z)*F,Y=(J.min.z-k.z)*F;if($>Y||K>W)return null;if(K>$||$!==$)$=K;if(Y<W||W!==W)W=Y;if(W<0)return null;return this.at($>=0?$:W,Q)}intersectsBox(J){return this.intersectBox(J,U6)!==null}intersectTriangle(J,Q,$,W,Z){z7.subVectors(Q,J),HJ.subVectors($,J),I7.crossVectors(z7,HJ);let H=this.direction.dot(I7),K;if(H>0){if(W)return null;K=1}else if(H<0)K=-1,H=-H;else return null;w6.subVectors(this.origin,J);let Y=K*this.direction.dot(HJ.crossVectors(w6,HJ));if(Y<0)return null;let U=K*this.direction.dot(z7.cross(w6));if(U<0)return null;if(Y+U>H)return null;let E=-K*w6.dot(I7);if(E<0)return null;return this.at(E/H,Z)}applyMatrix4(J){return this.origin.applyMatrix4(J),this.direction.transformDirection(J),this}equals(J){return J.origin.equals(this.origin)&&J.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class m6 extends o8{constructor(J){super();this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new b0(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new G6,this.combine=0,this.reflectivity=1,this.refractionRatio=0.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.color.copy(J.color),this.map=J.map,this.lightMap=J.lightMap,this.lightMapIntensity=J.lightMapIntensity,this.aoMap=J.aoMap,this.aoMapIntensity=J.aoMapIntensity,this.specularMap=J.specularMap,this.alphaMap=J.alphaMap,this.envMap=J.envMap,this.envMapRotation.copy(J.envMapRotation),this.combine=J.combine,this.reflectivity=J.reflectivity,this.refractionRatio=J.refractionRatio,this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this.wireframeLinecap=J.wireframeLinecap,this.wireframeLinejoin=J.wireframeLinejoin,this.fog=J.fog,this}}var dQ=new H8,v6=new b9,KJ=new l6,lQ=new v,YJ=new v,UJ=new v,EJ=new v,C7=new v,XJ=new v,mQ=new v,GJ=new v;class P8 extends q8{constructor(J=new L8,Q=new m6){super();this.isMesh=!0,this.type="Mesh",this.geometry=J,this.material=Q,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(J,Q){if(super.copy(J,Q),J.morphTargetInfluences!==void 0)this.morphTargetInfluences=J.morphTargetInfluences.slice();if(J.morphTargetDictionary!==void 0)this.morphTargetDictionary=Object.assign({},J.morphTargetDictionary);return this.material=Array.isArray(J.material)?J.material.slice():J.material,this.geometry=J.geometry,this}updateMorphTargets(){let Q=this.geometry.morphAttributes,$=Object.keys(Q);if($.length>0){let W=Q[$[0]];if(W!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let Z=0,H=W.length;Z<H;Z++){let K=W[Z].name||String(Z);this.morphTargetInfluences.push(0),this.morphTargetDictionary[K]=Z}}}}getVertexPosition(J,Q){let $=this.geometry,W=$.attributes.position,Z=$.morphAttributes.position,H=$.morphTargetsRelative;Q.fromBufferAttribute(W,J);let K=this.morphTargetInfluences;if(Z&&K){XJ.set(0,0,0);for(let Y=0,U=Z.length;Y<U;Y++){let E=K[Y],F=Z[Y];if(E===0)continue;if(C7.fromBufferAttribute(F,J),H)XJ.addScaledVector(C7,E);else XJ.addScaledVector(C7.sub(Q),E)}Q.add(XJ)}return Q}raycast(J,Q){let $=this.geometry,W=this.material,Z=this.matrixWorld;if(W===void 0)return;if($.boundingSphere===null)$.computeBoundingSphere();if(KJ.copy($.boundingSphere),KJ.applyMatrix4(Z),v6.copy(J.ray).recast(J.near),KJ.containsPoint(v6.origin)===!1){if(v6.intersectSphere(KJ,lQ)===null)return;if(v6.origin.distanceToSquared(lQ)>(J.far-J.near)**2)return}if(dQ.copy(Z).invert(),v6.copy(J.ray).applyMatrix4(dQ),$.boundingBox!==null){if(v6.intersectsBox($.boundingBox)===!1)return}this._computeIntersections(J,Q,v6)}_computeIntersections(J,Q,$){let W,Z=this.geometry,H=this.material,K=Z.index,Y=Z.attributes.position,U=Z.attributes.uv,E=Z.attributes.uv1,F=Z.attributes.normal,k=Z.groups,X=Z.drawRange;if(K!==null)if(Array.isArray(H))for(let q=0,M=k.length;q<M;q++){let I=k[q],N=H[I.materialIndex],G=Math.max(I.start,X.start),L=Math.min(K.count,Math.min(I.start+I.count,X.start+X.count));for(let w=G,z=L;w<z;w+=3){let P=K.getX(w),C=K.getX(w+1),_=K.getX(w+2);if(W=NJ(this,N,J,$,U,E,F,P,C,_),W)W.faceIndex=Math.floor(w/3),W.face.materialIndex=I.materialIndex,Q.push(W)}}else{let q=Math.max(0,X.start),M=Math.min(K.count,X.start+X.count);for(let I=q,N=M;I<N;I+=3){let G=K.getX(I),L=K.getX(I+1),w=K.getX(I+2);if(W=NJ(this,H,J,$,U,E,F,G,L,w),W)W.faceIndex=Math.floor(I/3),Q.push(W)}}else if(Y!==void 0)if(Array.isArray(H))for(let q=0,M=k.length;q<M;q++){let I=k[q],N=H[I.materialIndex],G=Math.max(I.start,X.start),L=Math.min(Y.count,Math.min(I.start+I.count,X.start+X.count));for(let w=G,z=L;w<z;w+=3){let P=w,C=w+1,_=w+2;if(W=NJ(this,N,J,$,U,E,F,P,C,_),W)W.faceIndex=Math.floor(w/3),W.face.materialIndex=I.materialIndex,Q.push(W)}}else{let q=Math.max(0,X.start),M=Math.min(Y.count,X.start+X.count);for(let I=q,N=M;I<N;I+=3){let G=I,L=I+1,w=I+2;if(W=NJ(this,H,J,$,U,E,F,G,L,w),W)W.faceIndex=Math.floor(I/3),Q.push(W)}}}}function MW(J,Q,$,W,Z,H,K,Y){let U;if(Q.side===1)U=W.intersectTriangle(K,H,Z,!0,Y);else U=W.intersectTriangle(Z,H,K,Q.side===0,Y);if(U===null)return null;GJ.copy(Y),GJ.applyMatrix4(J.matrixWorld);let E=$.ray.origin.distanceTo(GJ);if(E<$.near||E>$.far)return null;return{distance:E,point:GJ.clone(),object:J}}function NJ(J,Q,$,W,Z,H,K,Y,U,E){J.getVertexPosition(Y,YJ),J.getVertexPosition(U,UJ),J.getVertexPosition(E,EJ);let F=MW(J,Q,$,W,YJ,UJ,EJ,mQ);if(F){let k=new v;if(g8.getBarycoord(mQ,YJ,UJ,EJ,k),Z)F.uv=g8.getInterpolatedAttribute(Z,Y,U,E,k,new c0);if(H)F.uv1=g8.getInterpolatedAttribute(H,Y,U,E,k,new c0);if(K){if(F.normal=g8.getInterpolatedAttribute(K,Y,U,E,k,new v),F.normal.dot(W.direction)>0)F.normal.multiplyScalar(-1)}let X={a:Y,b:U,c:E,normal:new v,materialIndex:0};g8.getNormal(YJ,UJ,EJ,X.normal),F.face=X,F.barycoord=k}return F}class f5 extends C8{constructor(J=null,Q=1,$=1,W,Z,H,K,Y,U=1003,E=1003,F,k){super(null,H,K,Y,U,E,W,Z,F,k);this.isDataTexture=!0,this.image={data:J,width:Q,height:$},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}var A7=new v,LW=new v,BW=new T0;class E6{constructor(J=new v(1,0,0),Q=0){this.isPlane=!0,this.normal=J,this.constant=Q}set(J,Q){return this.normal.copy(J),this.constant=Q,this}setComponents(J,Q,$,W){return this.normal.set(J,Q,$),this.constant=W,this}setFromNormalAndCoplanarPoint(J,Q){return this.normal.copy(J),this.constant=-Q.dot(this.normal),this}setFromCoplanarPoints(J,Q,$){let W=A7.subVectors($,Q).cross(LW.subVectors(J,Q)).normalize();return this.setFromNormalAndCoplanarPoint(W,J),this}copy(J){return this.normal.copy(J.normal),this.constant=J.constant,this}normalize(){let J=1/this.normal.length();return this.normal.multiplyScalar(J),this.constant*=J,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(J){return this.normal.dot(J)+this.constant}distanceToSphere(J){return this.distanceToPoint(J.center)-J.radius}projectPoint(J,Q){return Q.copy(J).addScaledVector(this.normal,-this.distanceToPoint(J))}intersectLine(J,Q,$=!0){let W=J.delta(A7),Z=this.normal.dot(W);if(Z===0){if(this.distanceToPoint(J.start)===0)return Q.copy(J.start);return null}let H=-(J.start.dot(this.normal)+this.constant)/Z;if($===!0&&(H<0||H>1))return null;return Q.copy(J.start).addScaledVector(W,H)}intersectsLine(J){let Q=this.distanceToPoint(J.start),$=this.distanceToPoint(J.end);return Q<0&&$>0||$<0&&Q>0}intersectsBox(J){return J.intersectsPlane(this)}intersectsSphere(J){return J.intersectsPlane(this)}coplanarPoint(J){return J.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(J,Q){let $=Q||BW.getNormalMatrix(J),W=this.coplanarPoint(A7).applyMatrix4(J),Z=this.normal.applyMatrix3($).normalize();return this.constant=-W.dot(Z),this}translate(J){return this.constant-=J.dot(this.normal),this}equals(J){return J.normal.equals(this.normal)&&J.constant===this.constant}clone(){return new this.constructor().copy(this)}}var f6=new l6,VW=new c0(0.5,0.5),kJ=new v;class y9{constructor(J=new E6,Q=new E6,$=new E6,W=new E6,Z=new E6,H=new E6){this.planes=[J,Q,$,W,Z,H]}set(J,Q,$,W,Z,H){let K=this.planes;return K[0].copy(J),K[1].copy(Q),K[2].copy($),K[3].copy(W),K[4].copy(Z),K[5].copy(H),this}copy(J){let Q=this.planes;for(let $=0;$<6;$++)Q[$].copy(J.planes[$]);return this}setFromProjectionMatrix(J,Q=2000,$=!1){let W=this.planes,Z=J.elements,H=Z[0],K=Z[1],Y=Z[2],U=Z[3],E=Z[4],F=Z[5],k=Z[6],X=Z[7],q=Z[8],M=Z[9],I=Z[10],N=Z[11],G=Z[12],L=Z[13],w=Z[14],z=Z[15];if(W[0].setComponents(U-H,X-E,N-q,z-G).normalize(),W[1].setComponents(U+H,X+E,N+q,z+G).normalize(),W[2].setComponents(U+K,X+F,N+M,z+L).normalize(),W[3].setComponents(U-K,X-F,N-M,z-L).normalize(),$)W[4].setComponents(Y,k,I,w).normalize(),W[5].setComponents(U-Y,X-k,N-I,z-w).normalize();else if(W[4].setComponents(U-Y,X-k,N-I,z-w).normalize(),Q===2000)W[5].setComponents(U+Y,X+k,N+I,z+w).normalize();else if(Q===2001)W[5].setComponents(Y,k,I,w).normalize();else throw Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+Q);return this}intersectsObject(J){if(J.boundingSphere!==void 0){if(J.boundingSphere===null)J.computeBoundingSphere();f6.copy(J.boundingSphere).applyMatrix4(J.matrixWorld)}else{let Q=J.geometry;if(Q.boundingSphere===null)Q.computeBoundingSphere();f6.copy(Q.boundingSphere).applyMatrix4(J.matrixWorld)}return this.intersectsSphere(f6)}intersectsSprite(J){f6.center.set(0,0,0);let Q=VW.distanceTo(J.center);return f6.radius=0.7071067811865476+Q,f6.applyMatrix4(J.matrixWorld),this.intersectsSphere(f6)}intersectsSphere(J){let Q=this.planes,$=J.center,W=-J.radius;for(let Z=0;Z<6;Z++)if(Q[Z].distanceToPoint($)<W)return!1;return!0}intersectsBox(J){let Q=this.planes;for(let $=0;$<6;$++){let W=Q[$];if(kJ.x=W.normal.x>0?J.max.x:J.min.x,kJ.y=W.normal.y>0?J.max.y:J.min.y,kJ.z=W.normal.z>0?J.max.z:J.min.z,W.distanceToPoint(kJ)<0)return!1}return!0}containsPoint(J){let Q=this.planes;for(let $=0;$<6;$++)if(Q[$].distanceToPoint(J)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class lJ extends o8{constructor(J){super();this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new b0(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.color.copy(J.color),this.map=J.map,this.linewidth=J.linewidth,this.linecap=J.linecap,this.linejoin=J.linejoin,this.fog=J.fog,this}}var wJ=new v,zJ=new v,uQ=new H8,I9=new b9,FJ=new l6,_7=new v,cQ=new v;class b5 extends q8{constructor(J=new L8,Q=new lJ){super();this.isLine=!0,this.type="Line",this.geometry=J,this.material=Q,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(J,Q){return super.copy(J,Q),this.material=Array.isArray(J.material)?J.material.slice():J.material,this.geometry=J.geometry,this}computeLineDistances(){let J=this.geometry;if(J.index===null){let Q=J.attributes.position,$=[0];for(let W=1,Z=Q.count;W<Z;W++)wJ.fromBufferAttribute(Q,W-1),zJ.fromBufferAttribute(Q,W),$[W]=$[W-1],$[W]+=wJ.distanceTo(zJ);J.setAttribute("lineDistance",new G8($,1))}else I0("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(J,Q){let $=this.geometry,W=this.matrixWorld,Z=J.params.Line.threshold,H=$.drawRange;if($.boundingSphere===null)$.computeBoundingSphere();if(FJ.copy($.boundingSphere),FJ.applyMatrix4(W),FJ.radius+=Z,J.ray.intersectsSphere(FJ)===!1)return;uQ.copy(W).invert(),I9.copy(J.ray).applyMatrix4(uQ);let K=Z/((this.scale.x+this.scale.y+this.scale.z)/3),Y=K*K,U=this.isLineSegments?2:1,E=$.index,k=$.attributes.position;if(E!==null){let X=Math.max(0,H.start),q=Math.min(E.count,H.start+H.count);for(let M=X,I=q-1;M<I;M+=U){let N=E.getX(M),G=E.getX(M+1),L=qJ(this,J,I9,Y,N,G,M);if(L)Q.push(L)}if(this.isLineLoop){let M=E.getX(q-1),I=E.getX(X),N=qJ(this,J,I9,Y,M,I,q-1);if(N)Q.push(N)}}else{let X=Math.max(0,H.start),q=Math.min(k.count,H.start+H.count);for(let M=X,I=q-1;M<I;M+=U){let N=qJ(this,J,I9,Y,M,M+1,M);if(N)Q.push(N)}if(this.isLineLoop){let M=qJ(this,J,I9,Y,q-1,X,q-1);if(M)Q.push(M)}}}updateMorphTargets(){let Q=this.geometry.morphAttributes,$=Object.keys(Q);if($.length>0){let W=Q[$[0]];if(W!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let Z=0,H=W.length;Z<H;Z++){let K=W[Z].name||String(Z);this.morphTargetInfluences.push(0),this.morphTargetDictionary[K]=Z}}}}}function qJ(J,Q,$,W,Z,H,K){let Y=J.geometry.attributes.position;if(wJ.fromBufferAttribute(Y,Z),zJ.fromBufferAttribute(Y,H),$.distanceSqToSegment(wJ,zJ,_7,cQ)>W)return;_7.applyMatrix4(J.matrixWorld);let E=Q.ray.origin.distanceTo(_7);if(E<Q.near||E>Q.far)return;return{distance:E,point:cQ.clone().applyMatrix4(J.matrixWorld),index:K,face:null,faceIndex:null,barycoord:null,object:J}}var nQ=new v,sQ=new v;class y5 extends b5{constructor(J,Q){super(J,Q);this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let J=this.geometry;if(J.index===null){let Q=J.attributes.position,$=[];for(let W=0,Z=Q.count;W<Z;W+=2)nQ.fromBufferAttribute(Q,W),sQ.fromBufferAttribute(Q,W+1),$[W]=W===0?0:$[W-1],$[W+1]=$[W]+nQ.distanceTo(sQ);J.setAttribute("lineDistance",new G8($,1))}else I0("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class h9 extends o8{constructor(J){super();this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new b0(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.color.copy(J.color),this.map=J.map,this.alphaMap=J.alphaMap,this.size=J.size,this.sizeAttenuation=J.sizeAttenuation,this.fog=J.fog,this}}var iQ=new H8,T7=new b9,DJ=new l6,RJ=new v;class mJ extends q8{constructor(J=new L8,Q=new h9){super();this.isPoints=!0,this.type="Points",this.geometry=J,this.material=Q,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(J,Q){return super.copy(J,Q),this.material=Array.isArray(J.material)?J.material.slice():J.material,this.geometry=J.geometry,this}raycast(J,Q){let $=this.geometry,W=this.matrixWorld,Z=J.params.Points.threshold,H=$.drawRange;if($.boundingSphere===null)$.computeBoundingSphere();if(DJ.copy($.boundingSphere),DJ.applyMatrix4(W),DJ.radius+=Z,J.ray.intersectsSphere(DJ)===!1)return;iQ.copy(W).invert(),T7.copy(J.ray).applyMatrix4(iQ);let K=Z/((this.scale.x+this.scale.y+this.scale.z)/3),Y=K*K,U=$.index,F=$.attributes.position;if(U!==null){let k=Math.max(0,H.start),X=Math.min(U.count,H.start+H.count);for(let q=k,M=X;q<M;q++){let I=U.getX(q);RJ.fromBufferAttribute(F,I),oQ(RJ,I,Y,W,J,Q,this)}}else{let k=Math.max(0,H.start),X=Math.min(F.count,H.start+H.count);for(let q=k,M=X;q<M;q++)RJ.fromBufferAttribute(F,q),oQ(RJ,q,Y,W,J,Q,this)}}updateMorphTargets(){let Q=this.geometry.morphAttributes,$=Object.keys(Q);if($.length>0){let W=Q[$[0]];if(W!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let Z=0,H=W.length;Z<H;Z++){let K=W[Z].name||String(Z);this.morphTargetInfluences.push(0),this.morphTargetDictionary[K]=Z}}}}}function oQ(J,Q,$,W,Z,H,K){let Y=T7.distanceSqToPoint(J);if(Y<$){let U=new v;T7.closestPointToPoint(J,U),U.applyMatrix4(W);let E=Z.ray.origin.distanceTo(U);if(E<Z.near||E>Z.far)return;H.push({distance:E,distanceToRay:Math.sqrt(Y),point:U,index:Q,face:null,faceIndex:null,barycoord:null,object:K})}}class uJ extends C8{constructor(J=[],Q=301,$,W,Z,H,K,Y,U,E){super(J,Q,$,W,Z,H,K,Y,U,E);this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(J){this.image=J}}class _6 extends C8{constructor(J,Q,$=1014,W,Z,H,K=1003,Y=1003,U,E=1026,F=1){if(E!==1026&&E!==1027)throw Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let k={width:J,height:Q,depth:F};super(k,W,Z,H,K,Y,E,$,U);this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(J){return super.copy(J),this.source=new v9(Object.assign({},J.image)),this.compareFunction=J.compareFunction,this}toJSON(J){let Q=super.toJSON(J);if(this.compareFunction!==null)Q.compareFunction=this.compareFunction;return Q}}class h5 extends _6{constructor(J,Q=1014,$=301,W,Z,H=1003,K=1003,Y,U=1026){let E={width:J,height:J,depth:1},F=[E,E,E,E,E,E];super(J,J,Q,$,W,Z,H,K,Y,U);this.image=F,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(J){this.image=J}}class cJ extends C8{constructor(J=null){super();this.sourceTexture=J,this.isExternalTexture=!0}copy(J){return super.copy(J),this.sourceTexture=J.sourceTexture,this}}class D9 extends L8{constructor(J=1,Q=1,$=1,W=1,Z=1,H=1){super();this.type="BoxGeometry",this.parameters={width:J,height:Q,depth:$,widthSegments:W,heightSegments:Z,depthSegments:H};let K=this;W=Math.floor(W),Z=Math.floor(Z),H=Math.floor(H);let Y=[],U=[],E=[],F=[],k=0,X=0;q("z","y","x",-1,-1,$,Q,J,H,Z,0),q("z","y","x",1,-1,$,Q,-J,H,Z,1),q("x","z","y",1,1,J,$,Q,W,H,2),q("x","z","y",1,-1,J,$,-Q,W,H,3),q("x","y","z",1,-1,J,Q,$,W,Z,4),q("x","y","z",-1,-1,J,Q,-$,W,Z,5),this.setIndex(Y),this.setAttribute("position",new G8(U,3)),this.setAttribute("normal",new G8(E,3)),this.setAttribute("uv",new G8(F,2));function q(M,I,N,G,L,w,z,P,C,_,D){let B=w/C,d=z/_,A=w/2,l=z/2,i=P/2,b=C+1,u=_+1,x=0,p=0,a=new v;for(let Q0=0;Q0<u;Q0++){let k0=Q0*d-l;for(let z0=0;z0<b;z0++){let O0=z0*B-A;a[M]=O0*G,a[I]=k0*L,a[N]=i,U.push(a.x,a.y,a.z),a[M]=0,a[I]=0,a[N]=P>0?1:-1,E.push(a.x,a.y,a.z),F.push(z0/C),F.push(1-Q0/_),x+=1}}for(let Q0=0;Q0<_;Q0++)for(let k0=0;k0<C;k0++){let z0=k+k0+b*Q0,O0=k+k0+b*(Q0+1),o0=k+(k0+1)+b*(Q0+1),p0=k+(k0+1)+b*Q0;Y.push(z0,O0,p0),Y.push(O0,o0,p0),p+=6}K.addGroup(X,p,D),X+=p,k+=x}}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new D9(J.width,J.height,J.depth,J.widthSegments,J.heightSegments,J.depthSegments)}}class nJ extends L8{constructor(J=[],Q=[],$=1,W=0){super();this.type="PolyhedronGeometry",this.parameters={vertices:J,indices:Q,radius:$,detail:W};let Z=[],H=[];if(K(W),U($),E(),this.setAttribute("position",new G8(Z,3)),this.setAttribute("normal",new G8(Z.slice(),3)),this.setAttribute("uv",new G8(H,2)),W===0)this.computeVertexNormals();else this.normalizeNormals();function K(G){let L=new v,w=new v,z=new v;for(let P=0;P<Q.length;P+=3)X(Q[P+0],L),X(Q[P+1],w),X(Q[P+2],z),Y(L,w,z,G)}function Y(G,L,w,z){let P=z+1,C=[];for(let _=0;_<=P;_++){C[_]=[];let D=G.clone().lerp(w,_/P),B=L.clone().lerp(w,_/P),d=P-_;for(let A=0;A<=d;A++)if(A===0&&_===P)C[_][A]=D;else C[_][A]=D.clone().lerp(B,A/d)}for(let _=0;_<P;_++)for(let D=0;D<2*(P-_)-1;D++){let B=Math.floor(D/2);if(D%2===0)k(C[_][B+1]),k(C[_+1][B]),k(C[_][B]);else k(C[_][B+1]),k(C[_+1][B+1]),k(C[_+1][B])}}function U(G){let L=new v;for(let w=0;w<Z.length;w+=3)L.x=Z[w+0],L.y=Z[w+1],L.z=Z[w+2],L.normalize().multiplyScalar(G),Z[w+0]=L.x,Z[w+1]=L.y,Z[w+2]=L.z}function E(){let G=new v;for(let L=0;L<Z.length;L+=3){G.x=Z[L+0],G.y=Z[L+1],G.z=Z[L+2];let w=I(G)/2/Math.PI+0.5,z=N(G)/Math.PI+0.5;H.push(w,1-z)}q(),F()}function F(){for(let G=0;G<H.length;G+=6){let L=H[G+0],w=H[G+2],z=H[G+4],P=Math.max(L,w,z),C=Math.min(L,w,z);if(P>0.9&&C<0.1){if(L<0.2)H[G+0]+=1;if(w<0.2)H[G+2]+=1;if(z<0.2)H[G+4]+=1}}}function k(G){Z.push(G.x,G.y,G.z)}function X(G,L){let w=G*3;L.x=J[w+0],L.y=J[w+1],L.z=J[w+2]}function q(){let G=new v,L=new v,w=new v,z=new v,P=new c0,C=new c0,_=new c0;for(let D=0,B=0;D<Z.length;D+=9,B+=6){G.set(Z[D+0],Z[D+1],Z[D+2]),L.set(Z[D+3],Z[D+4],Z[D+5]),w.set(Z[D+6],Z[D+7],Z[D+8]),P.set(H[B+0],H[B+1]),C.set(H[B+2],H[B+3]),_.set(H[B+4],H[B+5]),z.copy(G).add(L).add(w).divideScalar(3);let d=I(z);M(P,B+0,G,d),M(C,B+2,L,d),M(_,B+4,w,d)}}function M(G,L,w,z){if(z<0&&G.x===1)H[L]=G.x-1;if(w.x===0&&w.z===0)H[L]=z/2/Math.PI+0.5}function I(G){return Math.atan2(G.z,-G.x)}function N(G){return Math.atan2(-G.y,Math.sqrt(G.x*G.x+G.z*G.z))}}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new nJ(J.vertices,J.indices,J.radius,J.detail)}}class x9 extends nJ{constructor(J=1,Q=0){let $=(1+Math.sqrt(5))/2,W=[-1,$,0,1,$,0,-1,-$,0,1,-$,0,0,-1,$,0,1,$,0,-1,-$,0,1,-$,$,0,-1,$,0,1,-$,0,-1,-$,0,1],Z=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(W,Z,J,Q);this.type="IcosahedronGeometry",this.parameters={radius:J,detail:Q}}static fromJSON(J){return new x9(J.radius,J.detail)}}class g9 extends L8{constructor(J=1,Q=1,$=1,W=1){super();this.type="PlaneGeometry",this.parameters={width:J,height:Q,widthSegments:$,heightSegments:W};let Z=J/2,H=Q/2,K=Math.floor($),Y=Math.floor(W),U=K+1,E=Y+1,F=J/K,k=Q/Y,X=[],q=[],M=[],I=[];for(let N=0;N<E;N++){let G=N*k-H;for(let L=0;L<U;L++){let w=L*F-Z;q.push(w,-G,0),M.push(0,0,1),I.push(L/K),I.push(1-N/Y)}}for(let N=0;N<Y;N++)for(let G=0;G<K;G++){let L=G+U*N,w=G+U*(N+1),z=G+1+U*(N+1),P=G+1+U*N;X.push(L,w,P),X.push(w,z,P)}this.setIndex(X),this.setAttribute("position",new G8(q,3)),this.setAttribute("normal",new G8(M,3)),this.setAttribute("uv",new G8(I,2))}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new g9(J.width,J.height,J.widthSegments,J.heightSegments)}}class R9 extends L8{constructor(J=1,Q=0.4,$=64,W=8,Z=2,H=3){super();this.type="TorusKnotGeometry",this.parameters={radius:J,tube:Q,tubularSegments:$,radialSegments:W,p:Z,q:H},$=Math.floor($),W=Math.floor(W);let K=[],Y=[],U=[],E=[],F=new v,k=new v,X=new v,q=new v,M=new v,I=new v,N=new v;for(let L=0;L<=$;++L){let w=L/$*Z*Math.PI*2;G(w,Z,H,J,X),G(w+0.01,Z,H,J,q),I.subVectors(q,X),N.addVectors(q,X),M.crossVectors(I,N),N.crossVectors(M,I),M.normalize(),N.normalize();for(let z=0;z<=W;++z){let P=z/W*Math.PI*2,C=-Q*Math.cos(P),_=Q*Math.sin(P);F.x=X.x+(C*N.x+_*M.x),F.y=X.y+(C*N.y+_*M.y),F.z=X.z+(C*N.z+_*M.z),Y.push(F.x,F.y,F.z),k.subVectors(F,X).normalize(),U.push(k.x,k.y,k.z),E.push(L/$),E.push(z/W)}}for(let L=1;L<=$;L++)for(let w=1;w<=W;w++){let z=(W+1)*(L-1)+(w-1),P=(W+1)*L+(w-1),C=(W+1)*L+w,_=(W+1)*(L-1)+w;K.push(z,P,_),K.push(P,C,_)}this.setIndex(K),this.setAttribute("position",new G8(Y,3)),this.setAttribute("normal",new G8(U,3)),this.setAttribute("uv",new G8(E,2));function G(L,w,z,P,C){let _=Math.cos(L),D=Math.sin(L),B=z/w*L,d=Math.cos(B);C.x=P*(2+d)*0.5*_,C.y=P*(2+d)*D*0.5,C.z=P*Math.sin(B)*0.5}}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new R9(J.radius,J.tube,J.tubularSegments,J.radialSegments,J.p,J.q)}}function u6(J){let Q={};for(let $ in J){Q[$]={};for(let W in J[$]){let Z=J[$][W];if(aQ(Z))if(Z.isRenderTargetTexture)I0("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),Q[$][W]=null;else Q[$][W]=Z.clone();else if(Array.isArray(Z))if(aQ(Z[0])){let H=[];for(let K=0,Y=Z.length;K<Y;K++)H[K]=Z[K].clone();Q[$][W]=H}else Q[$][W]=Z.slice();else Q[$][W]=Z}}return Q}function A8(J){let Q={};for(let $=0;$<J.length;$++){let W=u6(J[$]);for(let Z in W)Q[Z]=W[Z]}return Q}function aQ(J){return J&&(J.isColor||J.isMatrix3||J.isMatrix4||J.isVector2||J.isVector3||J.isVector4||J.isTexture||J.isQuaternion)}function wW(J){let Q=[];for(let $=0;$<J.length;$++)Q.push(J[$].clone());return Q}function x5(J){let Q=J.getRenderTarget();if(Q===null)return J.outputColorSpace;if(Q.isXRRenderTarget===!0)return Q.texture.colorSpace;return l0.workingColorSpace}var Z$={clone:u6,merge:A8},zW=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,IW=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class d8 extends o8{constructor(J){super();if(this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=zW,this.fragmentShader=IW,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,J!==void 0)this.setValues(J)}copy(J){return super.copy(J),this.fragmentShader=J.fragmentShader,this.vertexShader=J.vertexShader,this.uniforms=u6(J.uniforms),this.uniformsGroups=wW(J.uniformsGroups),this.defines=Object.assign({},J.defines),this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this.fog=J.fog,this.lights=J.lights,this.clipping=J.clipping,this.extensions=Object.assign({},J.extensions),this.glslVersion=J.glslVersion,this.defaultAttributeValues=Object.assign({},J.defaultAttributeValues),this.index0AttributeName=J.index0AttributeName,this.uniformsNeedUpdate=J.uniformsNeedUpdate,this}toJSON(J){let Q=super.toJSON(J);Q.glslVersion=this.glslVersion,Q.uniforms={};for(let W in this.uniforms){let H=this.uniforms[W].value;if(H&&H.isTexture)Q.uniforms[W]={type:"t",value:H.toJSON(J).uuid};else if(H&&H.isColor)Q.uniforms[W]={type:"c",value:H.getHex()};else if(H&&H.isVector2)Q.uniforms[W]={type:"v2",value:H.toArray()};else if(H&&H.isVector3)Q.uniforms[W]={type:"v3",value:H.toArray()};else if(H&&H.isVector4)Q.uniforms[W]={type:"v4",value:H.toArray()};else if(H&&H.isMatrix3)Q.uniforms[W]={type:"m3",value:H.toArray()};else if(H&&H.isMatrix4)Q.uniforms[W]={type:"m4",value:H.toArray()};else Q.uniforms[W]={value:H}}if(Object.keys(this.defines).length>0)Q.defines=this.defines;Q.vertexShader=this.vertexShader,Q.fragmentShader=this.fragmentShader,Q.lights=this.lights,Q.clipping=this.clipping;let $={};for(let W in this.extensions)if(this.extensions[W]===!0)$[W]=!0;if(Object.keys($).length>0)Q.extensions=$;return Q}}class g5 extends d8{constructor(J){super(J);this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class sJ extends o8{constructor(J){super();this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new b0(16777215),this.specular=new b0(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new b0(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new c0(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new G6,this.combine=0,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=0.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.color.copy(J.color),this.specular.copy(J.specular),this.shininess=J.shininess,this.map=J.map,this.lightMap=J.lightMap,this.lightMapIntensity=J.lightMapIntensity,this.aoMap=J.aoMap,this.aoMapIntensity=J.aoMapIntensity,this.emissive.copy(J.emissive),this.emissiveMap=J.emissiveMap,this.emissiveIntensity=J.emissiveIntensity,this.bumpMap=J.bumpMap,this.bumpScale=J.bumpScale,this.normalMap=J.normalMap,this.normalMapType=J.normalMapType,this.normalScale.copy(J.normalScale),this.displacementMap=J.displacementMap,this.displacementScale=J.displacementScale,this.displacementBias=J.displacementBias,this.specularMap=J.specularMap,this.alphaMap=J.alphaMap,this.envMap=J.envMap,this.envMapRotation.copy(J.envMapRotation),this.combine=J.combine,this.reflectivity=J.reflectivity,this.envMapIntensity=J.envMapIntensity,this.refractionRatio=J.refractionRatio,this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this.wireframeLinecap=J.wireframeLinecap,this.wireframeLinejoin=J.wireframeLinejoin,this.flatShading=J.flatShading,this.fog=J.fog,this}}class p5 extends o8{constructor(J){super();this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(J)}copy(J){return super.copy(J),this.depthPacking=J.depthPacking,this.map=J.map,this.alphaMap=J.alphaMap,this.displacementMap=J.displacementMap,this.displacementScale=J.displacementScale,this.displacementBias=J.displacementBias,this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this}}class d5 extends o8{constructor(J){super();this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(J)}copy(J){return super.copy(J),this.map=J.map,this.alphaMap=J.alphaMap,this.displacementMap=J.displacementMap,this.displacementScale=J.displacementScale,this.displacementBias=J.displacementBias,this}}function OJ(J,Q){if(!J||J.constructor===Q)return J;if(typeof Q.BYTES_PER_ELEMENT==="number")return new Q(J);return Array.prototype.slice.call(J)}class c6{constructor(J,Q,$,W){this.parameterPositions=J,this._cachedIndex=0,this.resultBuffer=W!==void 0?W:new Q.constructor($),this.sampleValues=Q,this.valueSize=$,this.settings=null,this.DefaultSettings_={}}evaluate(J){let Q=this.parameterPositions,$=this._cachedIndex,W=Q[$],Z=Q[$-1];$:{J:{let H;Q:{W:if(!(J<W)){for(let K=$+2;;){if(W===void 0){if(J<Z)break W;return $=Q.length,this._cachedIndex=$,this.copySampleValue_($-1)}if($===K)break;if(Z=W,W=Q[++$],J<W)break J}H=Q.length;break Q}if(!(J>=Z)){let K=Q[1];if(J<K)$=2,Z=K;for(let Y=$-2;;){if(Z===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if($===Y)break;if(W=Z,Z=Q[--$-1],J>=Z)break J}H=$,$=0;break Q}break $}while($<H){let K=$+H>>>1;if(J<Q[K])H=K;else $=K+1}if(W=Q[$],Z=Q[$-1],Z===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(W===void 0)return $=Q.length,this._cachedIndex=$,this.copySampleValue_($-1)}this._cachedIndex=$,this.intervalChanged_($,Z,W)}return this.interpolate_($,Z,J,W)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(J){let Q=this.resultBuffer,$=this.sampleValues,W=this.valueSize,Z=J*W;for(let H=0;H!==W;++H)Q[H]=$[Z+H];return Q}interpolate_(){throw Error("call to abstract method")}intervalChanged_(){}}class l5 extends c6{constructor(J,Q,$,W){super(J,Q,$,W);this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:2400,endingEnd:2400}}intervalChanged_(J,Q,$){let W=this.parameterPositions,Z=J-2,H=J+1,K=W[Z],Y=W[H];if(K===void 0)switch(this.getSettings_().endingStart){case 2401:Z=J,K=2*Q-$;break;case 2402:Z=W.length-2,K=Q+W[Z]-W[Z+1];break;default:Z=J,K=$}if(Y===void 0)switch(this.getSettings_().endingEnd){case 2401:H=J,Y=2*$-Q;break;case 2402:H=1,Y=$+W[1]-W[0];break;default:H=J-1,Y=Q}let U=($-Q)*0.5,E=this.valueSize;this._weightPrev=U/(Q-K),this._weightNext=U/(Y-$),this._offsetPrev=Z*E,this._offsetNext=H*E}interpolate_(J,Q,$,W){let Z=this.resultBuffer,H=this.sampleValues,K=this.valueSize,Y=J*K,U=Y-K,E=this._offsetPrev,F=this._offsetNext,k=this._weightPrev,X=this._weightNext,q=($-Q)/(W-Q),M=q*q,I=M*q,N=-k*I+2*k*M-k*q,G=(1+k)*I+(-1.5-2*k)*M+(-0.5+k)*q+1,L=(-1-X)*I+(1.5+X)*M+0.5*q,w=X*I-X*M;for(let z=0;z!==K;++z)Z[z]=N*H[E+z]+G*H[U+z]+L*H[Y+z]+w*H[F+z];return Z}}class m5 extends c6{constructor(J,Q,$,W){super(J,Q,$,W)}interpolate_(J,Q,$,W){let Z=this.resultBuffer,H=this.sampleValues,K=this.valueSize,Y=J*K,U=Y-K,E=($-Q)/(W-Q),F=1-E;for(let k=0;k!==K;++k)Z[k]=H[U+k]*F+H[Y+k]*E;return Z}}class u5 extends c6{constructor(J,Q,$,W){super(J,Q,$,W)}interpolate_(J){return this.copySampleValue_(J-1)}}class c5 extends c6{interpolate_(J,Q,$,W){let Z=this.resultBuffer,H=this.sampleValues,K=this.valueSize,Y=J*K,U=Y-K,E=this.settings||this.DefaultSettings_,F=E.inTangents,k=E.outTangents;if(!F||!k){let M=($-Q)/(W-Q),I=1-M;for(let N=0;N!==K;++N)Z[N]=H[U+N]*I+H[Y+N]*M;return Z}let X=K*2,q=J-1;for(let M=0;M!==K;++M){let I=H[U+M],N=H[Y+M],G=q*X+M*2,L=k[G],w=k[G+1],z=J*X+M*2,P=F[z],C=F[z+1],_=($-Q)/(W-Q),D,B,d,A,l;for(let i=0;i<8;i++){D=_*_,B=D*_,d=1-_,A=d*d,l=A*d;let u=l*Q+3*A*_*L+3*d*D*P+B*W-$;if(Math.abs(u)<0.0000000001)break;let x=3*A*(L-Q)+6*d*_*(P-L)+3*D*(W-P);if(Math.abs(x)<0.0000000001)break;_=_-u/x,_=Math.max(0,Math.min(1,_))}Z[M]=l*I+3*A*_*w+3*d*D*C+B*N}return Z}}class l8{constructor(J,Q,$,W){if(J===void 0)throw Error("THREE.KeyframeTrack: track name is undefined");if(Q===void 0||Q.length===0)throw Error("THREE.KeyframeTrack: no keyframes in track named "+J);this.name=J,this.times=OJ(Q,this.TimeBufferType),this.values=OJ($,this.ValueBufferType),this.setInterpolation(W||this.DefaultInterpolation)}static toJSON(J){let Q=J.constructor,$;if(Q.toJSON!==this.toJSON)$=Q.toJSON(J);else{$={name:J.name,times:OJ(J.times,Array),values:OJ(J.values,Array)};let W=J.getInterpolation();if(W!==J.DefaultInterpolation)$.interpolation=W}return $.type=J.ValueTypeName,$}InterpolantFactoryMethodDiscrete(J){return new u5(this.times,this.values,this.getValueSize(),J)}InterpolantFactoryMethodLinear(J){return new m5(this.times,this.values,this.getValueSize(),J)}InterpolantFactoryMethodSmooth(J){return new l5(this.times,this.values,this.getValueSize(),J)}InterpolantFactoryMethodBezier(J){let Q=new c5(this.times,this.values,this.getValueSize(),J);if(this.settings)Q.settings=this.settings;return Q}setInterpolation(J){let Q;switch(J){case 2300:Q=this.InterpolantFactoryMethodDiscrete;break;case 2301:Q=this.InterpolantFactoryMethodLinear;break;case 2302:Q=this.InterpolantFactoryMethodSmooth;break;case 2303:Q=this.InterpolantFactoryMethodBezier;break}if(Q===void 0){let $="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(J!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error($);return I0("KeyframeTrack:",$),this}return this.createInterpolant=Q,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return 2300;case this.InterpolantFactoryMethodLinear:return 2301;case this.InterpolantFactoryMethodSmooth:return 2302;case this.InterpolantFactoryMethodBezier:return 2303}}getValueSize(){return this.values.length/this.times.length}shift(J){if(J!==0){let Q=this.times;for(let $=0,W=Q.length;$!==W;++$)Q[$]+=J}return this}scale(J){if(J!==1){let Q=this.times;for(let $=0,W=Q.length;$!==W;++$)Q[$]*=J}return this}trim(J,Q){let $=this.times,W=$.length,Z=0,H=W-1;while(Z!==W&&$[Z]<J)++Z;while(H!==-1&&$[H]>Q)--H;if(++H,Z!==0||H!==W){if(Z>=H)H=Math.max(H,1),Z=H-1;let K=this.getValueSize();this.times=$.slice(Z,H),this.values=this.values.slice(Z*K,H*K)}return this}validate(){let J=!0,Q=this.getValueSize();if(Q-Math.floor(Q)!==0)_0("KeyframeTrack: Invalid value size in track.",this),J=!1;let $=this.times,W=this.values,Z=$.length;if(Z===0)_0("KeyframeTrack: Track is empty.",this),J=!1;let H=null;for(let K=0;K!==Z;K++){let Y=$[K];if(typeof Y==="number"&&isNaN(Y)){_0("KeyframeTrack: Time is not a valid number.",this,K,Y),J=!1;break}if(H!==null&&H>Y){_0("KeyframeTrack: Out of order keys.",this,K,Y,H),J=!1;break}H=Y}if(W!==void 0){if(WW(W))for(let K=0,Y=W.length;K!==Y;++K){let U=W[K];if(isNaN(U)){_0("KeyframeTrack: Value is not a valid number.",this,K,U),J=!1;break}}}return J}optimize(){let J=this.times.slice(),Q=this.values.slice(),$=this.getValueSize(),W=this.getInterpolation()===2302,Z=J.length-1,H=1;for(let K=1;K<Z;++K){let Y=!1,U=J[K],E=J[K+1];if(U!==E&&(K!==1||U!==J[0]))if(!W){let F=K*$,k=F-$,X=F+$;for(let q=0;q!==$;++q){let M=Q[F+q];if(M!==Q[k+q]||M!==Q[X+q]){Y=!0;break}}}else Y=!0;if(Y){if(K!==H){J[H]=J[K];let F=K*$,k=H*$;for(let X=0;X!==$;++X)Q[k+X]=Q[F+X]}++H}}if(Z>0){J[H]=J[Z];for(let K=Z*$,Y=H*$,U=0;U!==$;++U)Q[Y+U]=Q[K+U];++H}if(H!==J.length)this.times=J.slice(0,H),this.values=Q.slice(0,H*$);else this.times=J,this.values=Q;return this}clone(){let J=this.times.slice(),Q=this.values.slice(),W=new this.constructor(this.name,J,Q);return W.createInterpolant=this.createInterpolant,W}}l8.prototype.ValueTypeName="";l8.prototype.TimeBufferType=Float32Array;l8.prototype.ValueBufferType=Float32Array;l8.prototype.DefaultInterpolation=2301;class n6 extends l8{constructor(J,Q,$){super(J,Q,$)}}n6.prototype.ValueTypeName="bool";n6.prototype.ValueBufferType=Array;n6.prototype.DefaultInterpolation=2300;n6.prototype.InterpolantFactoryMethodLinear=void 0;n6.prototype.InterpolantFactoryMethodSmooth=void 0;class n5 extends l8{constructor(J,Q,$,W){super(J,Q,$,W)}}n5.prototype.ValueTypeName="color";class s5 extends l8{constructor(J,Q,$,W){super(J,Q,$,W)}}s5.prototype.ValueTypeName="number";class i5 extends c6{constructor(J,Q,$,W){super(J,Q,$,W)}interpolate_(J,Q,$,W){let Z=this.resultBuffer,H=this.sampleValues,K=this.valueSize,Y=($-Q)/(W-Q),U=J*K;for(let E=U+K;U!==E;U+=4)q6.slerpFlat(Z,0,H,U-K,H,U,Y);return Z}}class iJ extends l8{constructor(J,Q,$,W){super(J,Q,$,W)}InterpolantFactoryMethodLinear(J){return new i5(this.times,this.values,this.getValueSize(),J)}}iJ.prototype.ValueTypeName="quaternion";iJ.prototype.InterpolantFactoryMethodSmooth=void 0;class s6 extends l8{constructor(J,Q,$){super(J,Q,$)}}s6.prototype.ValueTypeName="string";s6.prototype.ValueBufferType=Array;s6.prototype.DefaultInterpolation=2300;s6.prototype.InterpolantFactoryMethodLinear=void 0;s6.prototype.InterpolantFactoryMethodSmooth=void 0;class o5 extends l8{constructor(J,Q,$,W){super(J,Q,$,W)}}o5.prototype.ValueTypeName="vector";class a5{constructor(J,Q,$){let W=this,Z=!1,H=0,K=0,Y=void 0,U=[];this.onStart=void 0,this.onLoad=J,this.onProgress=Q,this.onError=$,this._abortController=null,this.itemStart=function(E){if(K++,Z===!1){if(W.onStart!==void 0)W.onStart(E,H,K)}Z=!0},this.itemEnd=function(E){if(H++,W.onProgress!==void 0)W.onProgress(E,H,K);if(H===K){if(Z=!1,W.onLoad!==void 0)W.onLoad()}},this.itemError=function(E){if(W.onError!==void 0)W.onError(E)},this.resolveURL=function(E){if(Y)return Y(E);return E},this.setURLModifier=function(E){return Y=E,this},this.addHandler=function(E,F){return U.push(E,F),this},this.removeHandler=function(E){let F=U.indexOf(E);if(F!==-1)U.splice(F,2);return this},this.getHandler=function(E){for(let F=0,k=U.length;F<k;F+=2){let X=U[F],q=U[F+1];if(X.global)X.lastIndex=0;if(X.test(E))return q}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){if(!this._abortController)this._abortController=new AbortController;return this._abortController}}var H$=new a5;class r5{constructor(J){if(this.manager=J!==void 0?J:H$,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(J,Q){let $=this;return new Promise(function(W,Z){$.load(J,W,Q,Z)})}parse(){}setCrossOrigin(J){return this.crossOrigin=J,this}setWithCredentials(J){return this.withCredentials=J,this}setPath(J){return this.path=J,this}setResourcePath(J){return this.resourcePath=J,this}setRequestHeader(J){return this.requestHeader=J,this}abort(){return this}}r5.DEFAULT_MATERIAL_NAME="__DEFAULT";class p9 extends q8{constructor(J,Q=1){super();this.isLight=!0,this.type="Light",this.color=new b0(J),this.intensity=Q}dispose(){this.dispatchEvent({type:"dispose"})}copy(J,Q){return super.copy(J,Q),this.color.copy(J.color),this.intensity=J.intensity,this}toJSON(J){let Q=super.toJSON(J);return Q.object.color=this.color.getHex(),Q.object.intensity=this.intensity,Q}}var P7=new H8,rQ=new v,tQ=new v;class t5{constructor(J){this.camera=J,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new c0(512,512),this.mapType=1009,this.map=null,this.mapPass=null,this.matrix=new H8,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new y9,this._frameExtents=new c0(1,1),this._viewportCount=1,this._viewports=[new Y8(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(J){let Q=this.camera,$=this.matrix;if(rQ.setFromMatrixPosition(J.matrixWorld),Q.position.copy(rQ),tQ.setFromMatrixPosition(J.target.matrixWorld),Q.lookAt(tQ),Q.updateMatrixWorld(),P7.multiplyMatrices(Q.projectionMatrix,Q.matrixWorldInverse),this._frustum.setFromProjectionMatrix(P7,Q.coordinateSystem,Q.reversedDepth),Q.coordinateSystem===2001||Q.reversedDepth)$.set(0.5,0,0,0.5,0,0.5,0,0.5,0,0,1,0,0,0,0,1);else $.set(0.5,0,0,0.5,0,0.5,0,0.5,0,0,0.5,0.5,0,0,0,1);$.multiply(P7)}getViewport(J){return this._viewports[J]}getFrameExtents(){return this._frameExtents}dispose(){if(this.map)this.map.dispose();if(this.mapPass)this.mapPass.dispose()}copy(J){return this.camera=J.camera.clone(),this.intensity=J.intensity,this.bias=J.bias,this.radius=J.radius,this.autoUpdate=J.autoUpdate,this.needsUpdate=J.needsUpdate,this.normalBias=J.normalBias,this.blurSamples=J.blurSamples,this.mapSize.copy(J.mapSize),this.biasNode=J.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let J={};if(this.intensity!==1)J.intensity=this.intensity;if(this.bias!==0)J.bias=this.bias;if(this.normalBias!==0)J.normalBias=this.normalBias;if(this.radius!==1)J.radius=this.radius;if(this.mapSize.x!==512||this.mapSize.y!==512)J.mapSize=this.mapSize.toArray();return J.camera=this.camera.toJSON(!1).object,delete J.camera.matrix,J}}var MJ=new v,LJ=new q6,t8=new v;class oJ extends q8{constructor(){super();this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new H8,this.projectionMatrix=new H8,this.projectionMatrixInverse=new H8,this.coordinateSystem=2000,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(J,Q){return super.copy(J,Q),this.matrixWorldInverse.copy(J.matrixWorldInverse),this.projectionMatrix.copy(J.projectionMatrix),this.projectionMatrixInverse.copy(J.projectionMatrixInverse),this.coordinateSystem=J.coordinateSystem,this}getWorldDirection(J){return super.getWorldDirection(J).negate()}updateMatrixWorld(J){if(super.updateMatrixWorld(J),this.matrixWorld.decompose(MJ,LJ,t8),t8.x===1&&t8.y===1&&t8.z===1)this.matrixWorldInverse.copy(this.matrixWorld).invert();else this.matrixWorldInverse.compose(MJ,LJ,t8.set(1,1,1)).invert()}updateWorldMatrix(J,Q){if(super.updateWorldMatrix(J,Q),this.matrixWorld.decompose(MJ,LJ,t8),t8.x===1&&t8.y===1&&t8.z===1)this.matrixWorldInverse.copy(this.matrixWorld).invert();else this.matrixWorldInverse.compose(MJ,LJ,t8.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}var z6=new v,eQ=new c0,J1=new c0;class I8 extends oJ{constructor(J=50,Q=1,$=0.1,W=2000){super();this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=J,this.zoom=1,this.near=$,this.far=W,this.focus=10,this.aspect=Q,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(J,Q){return super.copy(J,Q),this.fov=J.fov,this.zoom=J.zoom,this.near=J.near,this.far=J.far,this.focus=J.focus,this.aspect=J.aspect,this.view=J.view===null?null:Object.assign({},J.view),this.filmGauge=J.filmGauge,this.filmOffset=J.filmOffset,this}setFocalLength(J){let Q=0.5*this.getFilmHeight()/J;this.fov=VJ*2*Math.atan(Q),this.updateProjectionMatrix()}getFocalLength(){let J=Math.tan(H7*0.5*this.fov);return 0.5*this.getFilmHeight()/J}getEffectiveFOV(){return VJ*2*Math.atan(Math.tan(H7*0.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(J,Q,$){z6.set(-1,-1,0.5).applyMatrix4(this.projectionMatrixInverse),Q.set(z6.x,z6.y).multiplyScalar(-J/z6.z),z6.set(1,1,0.5).applyMatrix4(this.projectionMatrixInverse),$.set(z6.x,z6.y).multiplyScalar(-J/z6.z)}getViewSize(J,Q){return this.getViewBounds(J,eQ,J1),Q.subVectors(J1,eQ)}setViewOffset(J,Q,$,W,Z,H){if(this.aspect=J/Q,this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0,this.view.fullWidth=J,this.view.fullHeight=Q,this.view.offsetX=$,this.view.offsetY=W,this.view.width=Z,this.view.height=H,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){let J=this.near,Q=J*Math.tan(H7*0.5*this.fov)/this.zoom,$=2*Q,W=this.aspect*$,Z=-0.5*W,H=this.view;if(this.view!==null&&this.view.enabled){let{fullWidth:Y,fullHeight:U}=H;Z+=H.offsetX*W/Y,Q-=H.offsetY*$/U,W*=H.width/Y,$*=H.height/U}let K=this.filmOffset;if(K!==0)Z+=J*K/this.getFilmWidth();this.projectionMatrix.makePerspective(Z,Z+W,Q,Q-$,J,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(J){let Q=super.toJSON(J);if(Q.object.fov=this.fov,Q.object.zoom=this.zoom,Q.object.near=this.near,Q.object.far=this.far,Q.object.focus=this.focus,Q.object.aspect=this.aspect,this.view!==null)Q.object.view=Object.assign({},this.view);return Q.object.filmGauge=this.filmGauge,Q.object.filmOffset=this.filmOffset,Q}}class K$ extends t5{constructor(){super(new I8(90,1,0.5,500));this.isPointLightShadow=!0}}class d9 extends p9{constructor(J,Q,$=0,W=2){super(J,Q);this.isPointLight=!0,this.type="PointLight",this.distance=$,this.decay=W,this.shadow=new K$}get power(){return this.intensity*4*Math.PI}set power(J){this.intensity=J/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(J,Q){return super.copy(J,Q),this.distance=J.distance,this.decay=J.decay,this.shadow=J.shadow.clone(),this}toJSON(J){let Q=super.toJSON(J);return Q.object.distance=this.distance,Q.object.decay=this.decay,Q.object.shadow=this.shadow.toJSON(),Q}}class l9 extends oJ{constructor(J=-1,Q=1,$=1,W=-1,Z=0.1,H=2000){super();this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=J,this.right=Q,this.top=$,this.bottom=W,this.near=Z,this.far=H,this.updateProjectionMatrix()}copy(J,Q){return super.copy(J,Q),this.left=J.left,this.right=J.right,this.top=J.top,this.bottom=J.bottom,this.near=J.near,this.far=J.far,this.zoom=J.zoom,this.view=J.view===null?null:Object.assign({},J.view),this}setViewOffset(J,Q,$,W,Z,H){if(this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0,this.view.fullWidth=J,this.view.fullHeight=Q,this.view.offsetX=$,this.view.offsetY=W,this.view.width=Z,this.view.height=H,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){let J=(this.right-this.left)/(2*this.zoom),Q=(this.top-this.bottom)/(2*this.zoom),$=(this.right+this.left)/2,W=(this.top+this.bottom)/2,Z=$-J,H=$+J,K=W+Q,Y=W-Q;if(this.view!==null&&this.view.enabled){let U=(this.right-this.left)/this.view.fullWidth/this.zoom,E=(this.top-this.bottom)/this.view.fullHeight/this.zoom;Z+=U*this.view.offsetX,H=Z+U*this.view.width,K-=E*this.view.offsetY,Y=K-E*this.view.height}this.projectionMatrix.makeOrthographic(Z,H,K,Y,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(J){let Q=super.toJSON(J);if(Q.object.zoom=this.zoom,Q.object.left=this.left,Q.object.right=this.right,Q.object.top=this.top,Q.object.bottom=this.bottom,Q.object.near=this.near,Q.object.far=this.far,this.view!==null)Q.object.view=Object.assign({},this.view);return Q}}class Y$ extends t5{constructor(){super(new l9(-5,5,5,-5,0.5,500));this.isDirectionalLightShadow=!0}}class aJ extends p9{constructor(J,Q){super(J,Q);this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(q8.DEFAULT_UP),this.updateMatrix(),this.target=new q8,this.shadow=new Y$}dispose(){super.dispose(),this.shadow.dispose()}copy(J){return super.copy(J),this.target=J.target.clone(),this.shadow=J.shadow.clone(),this}toJSON(J){let Q=super.toJSON(J);return Q.object.shadow=this.shadow.toJSON(),Q.object.target=this.target.uuid,Q}}class rJ extends p9{constructor(J,Q){super(J,Q);this.isAmbientLight=!0,this.type="AmbientLight"}}var Y9=-90,U9=1;class e5 extends q8{constructor(J,Q,$){super();this.type="CubeCamera",this.renderTarget=$,this.coordinateSystem=null,this.activeMipmapLevel=0;let W=new I8(Y9,U9,J,Q);W.layers=this.layers,this.add(W);let Z=new I8(Y9,U9,J,Q);Z.layers=this.layers,this.add(Z);let H=new I8(Y9,U9,J,Q);H.layers=this.layers,this.add(H);let K=new I8(Y9,U9,J,Q);K.layers=this.layers,this.add(K);let Y=new I8(Y9,U9,J,Q);Y.layers=this.layers,this.add(Y);let U=new I8(Y9,U9,J,Q);U.layers=this.layers,this.add(U)}updateCoordinateSystem(){let J=this.coordinateSystem,Q=this.children.concat(),[$,W,Z,H,K,Y]=Q;for(let U of Q)this.remove(U);if(J===2000)$.up.set(0,1,0),$.lookAt(1,0,0),W.up.set(0,1,0),W.lookAt(-1,0,0),Z.up.set(0,0,-1),Z.lookAt(0,1,0),H.up.set(0,0,1),H.lookAt(0,-1,0),K.up.set(0,1,0),K.lookAt(0,0,1),Y.up.set(0,1,0),Y.lookAt(0,0,-1);else if(J===2001)$.up.set(0,-1,0),$.lookAt(-1,0,0),W.up.set(0,-1,0),W.lookAt(1,0,0),Z.up.set(0,0,1),Z.lookAt(0,1,0),H.up.set(0,0,-1),H.lookAt(0,-1,0),K.up.set(0,-1,0),K.lookAt(0,0,1),Y.up.set(0,-1,0),Y.lookAt(0,0,-1);else throw Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+J);for(let U of Q)this.add(U),U.updateMatrixWorld()}update(J,Q){if(this.parent===null)this.updateMatrixWorld();let{renderTarget:$,activeMipmapLevel:W}=this;if(this.coordinateSystem!==J.coordinateSystem)this.coordinateSystem=J.coordinateSystem,this.updateCoordinateSystem();let[Z,H,K,Y,U,E]=this.children,F=J.getRenderTarget(),k=J.getActiveCubeFace(),X=J.getActiveMipmapLevel(),q=J.xr.enabled;J.xr.enabled=!1;let M=$.texture.generateMipmaps;$.texture.generateMipmaps=!1;let I=!1;if(J.isWebGLRenderer===!0)I=J.state.buffers.depth.getReversed();else I=J.reversedDepthBuffer;if(J.setRenderTarget($,0,W),I&&J.autoClear===!1)J.clearDepth();if(J.render(Q,Z),J.setRenderTarget($,1,W),I&&J.autoClear===!1)J.clearDepth();if(J.render(Q,H),J.setRenderTarget($,2,W),I&&J.autoClear===!1)J.clearDepth();if(J.render(Q,K),J.setRenderTarget($,3,W),I&&J.autoClear===!1)J.clearDepth();if(J.render(Q,Y),J.setRenderTarget($,4,W),I&&J.autoClear===!1)J.clearDepth();if(J.render(Q,U),$.texture.generateMipmaps=M,J.setRenderTarget($,5,W),I&&J.autoClear===!1)J.clearDepth();J.render(Q,E),J.setRenderTarget(F,k,X),J.xr.enabled=q,$.texture.needsPMREMUpdate=!0}}class JQ extends I8{constructor(J=[]){super();this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=J}}var QQ="\\[\\]\\.:\\/",CW=new RegExp("["+QQ+"]","g"),$Q="[^"+QQ+"]",AW="[^"+QQ.replace("\\.","")+"]",_W=/((?:WC+[\/:])*)/.source.replace("WC",$Q),PW=/(WCOD+)?/.source.replace("WCOD",AW),TW=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",$Q),SW=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",$Q),jW=new RegExp("^"+_W+PW+TW+SW+"$"),vW=["material","materials","bones","map"];class U${constructor(J,Q,$){let W=$||a0.parseTrackName(Q);this._targetGroup=J,this._bindings=J.subscribe_(Q,W)}getValue(J,Q){this.bind();let $=this._targetGroup.nCachedObjects_,W=this._bindings[$];if(W!==void 0)W.getValue(J,Q)}setValue(J,Q){let $=this._bindings;for(let W=this._targetGroup.nCachedObjects_,Z=$.length;W!==Z;++W)$[W].setValue(J,Q)}bind(){let J=this._bindings;for(let Q=this._targetGroup.nCachedObjects_,$=J.length;Q!==$;++Q)J[Q].bind()}unbind(){let J=this._bindings;for(let Q=this._targetGroup.nCachedObjects_,$=J.length;Q!==$;++Q)J[Q].unbind()}}class a0{constructor(J,Q,$){this.path=Q,this.parsedPath=$||a0.parseTrackName(Q),this.node=a0.findNode(J,this.parsedPath.nodeName),this.rootNode=J,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(J,Q,$){if(!(J&&J.isAnimationObjectGroup))return new a0(J,Q,$);else return new a0.Composite(J,Q,$)}static sanitizeNodeName(J){return J.replace(/\s/g,"_").replace(CW,"")}static parseTrackName(J){let Q=jW.exec(J);if(Q===null)throw Error("PropertyBinding: Cannot parse trackName: "+J);let $={nodeName:Q[2],objectName:Q[3],objectIndex:Q[4],propertyName:Q[5],propertyIndex:Q[6]},W=$.nodeName&&$.nodeName.lastIndexOf(".");if(W!==void 0&&W!==-1){let Z=$.nodeName.substring(W+1);if(vW.indexOf(Z)!==-1)$.nodeName=$.nodeName.substring(0,W),$.objectName=Z}if($.propertyName===null||$.propertyName.length===0)throw Error("PropertyBinding: can not parse propertyName from trackName: "+J);return $}static findNode(J,Q){if(Q===void 0||Q===""||Q==="."||Q===-1||Q===J.name||Q===J.uuid)return J;if(J.skeleton){let $=J.skeleton.getBoneByName(Q);if($!==void 0)return $}if(J.children){let $=function(Z){for(let H=0;H<Z.length;H++){let K=Z[H];if(K.name===Q||K.uuid===Q)return K;let Y=$(K.children);if(Y)return Y}return null},W=$(J.children);if(W)return W}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(J,Q){J[Q]=this.targetObject[this.propertyName]}_getValue_array(J,Q){let $=this.resolvedProperty;for(let W=0,Z=$.length;W!==Z;++W)J[Q++]=$[W]}_getValue_arrayElement(J,Q){J[Q]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(J,Q){this.resolvedProperty.toArray(J,Q)}_setValue_direct(J,Q){this.targetObject[this.propertyName]=J[Q]}_setValue_direct_setNeedsUpdate(J,Q){this.targetObject[this.propertyName]=J[Q],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(J,Q){this.targetObject[this.propertyName]=J[Q],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(J,Q){let $=this.resolvedProperty;for(let W=0,Z=$.length;W!==Z;++W)$[W]=J[Q++]}_setValue_array_setNeedsUpdate(J,Q){let $=this.resolvedProperty;for(let W=0,Z=$.length;W!==Z;++W)$[W]=J[Q++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(J,Q){let $=this.resolvedProperty;for(let W=0,Z=$.length;W!==Z;++W)$[W]=J[Q++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(J,Q){this.resolvedProperty[this.propertyIndex]=J[Q]}_setValue_arrayElement_setNeedsUpdate(J,Q){this.resolvedProperty[this.propertyIndex]=J[Q],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(J,Q){this.resolvedProperty[this.propertyIndex]=J[Q],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(J,Q){this.resolvedProperty.fromArray(J,Q)}_setValue_fromArray_setNeedsUpdate(J,Q){this.resolvedProperty.fromArray(J,Q),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(J,Q){this.resolvedProperty.fromArray(J,Q),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(J,Q){this.bind(),this.getValue(J,Q)}_setValue_unbound(J,Q){this.bind(),this.setValue(J,Q)}bind(){let J=this.node,Q=this.parsedPath,$=Q.objectName,W=Q.propertyName,Z=Q.propertyIndex;if(!J)J=a0.findNode(this.rootNode,Q.nodeName),this.node=J;if(this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!J){I0("PropertyBinding: No target node found for track: "+this.path+".");return}if($){let U=Q.objectIndex;switch($){case"materials":if(!J.material){_0("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!J.material.materials){_0("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}J=J.material.materials;break;case"bones":if(!J.skeleton){_0("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}J=J.skeleton.bones;for(let E=0;E<J.length;E++)if(J[E].name===U){U=E;break}break;case"map":if("map"in J){J=J.map;break}if(!J.material){_0("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!J.material.map){_0("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}J=J.material.map;break;default:if(J[$]===void 0){_0("PropertyBinding: Can not bind to objectName of node undefined.",this);return}J=J[$]}if(U!==void 0){if(J[U]===void 0){_0("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,J);return}J=J[U]}}let H=J[W];if(H===void 0){let U=Q.nodeName;_0("PropertyBinding: Trying to update property for track: "+U+"."+W+" but it wasn't found.",J);return}let K=this.Versioning.None;if(this.targetObject=J,J.isMaterial===!0)K=this.Versioning.NeedsUpdate;else if(J.isObject3D===!0)K=this.Versioning.MatrixWorldNeedsUpdate;let Y=this.BindingType.Direct;if(Z!==void 0){if(W==="morphTargetInfluences"){if(!J.geometry){_0("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!J.geometry.morphAttributes){_0("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}if(J.morphTargetDictionary[Z]!==void 0)Z=J.morphTargetDictionary[Z]}Y=this.BindingType.ArrayElement,this.resolvedProperty=H,this.propertyIndex=Z}else if(H.fromArray!==void 0&&H.toArray!==void 0)Y=this.BindingType.HasFromToArray,this.resolvedProperty=H;else if(Array.isArray(H))Y=this.BindingType.EntireArray,this.resolvedProperty=H;else this.propertyName=W;this.getValue=this.GetterByBindingType[Y],this.setValue=this.SetterByBindingTypeAndVersioning[Y][K]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}a0.Composite=U$;a0.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};a0.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};a0.prototype.GetterByBindingType=[a0.prototype._getValue_direct,a0.prototype._getValue_array,a0.prototype._getValue_arrayElement,a0.prototype._getValue_toArray];a0.prototype.SetterByBindingTypeAndVersioning=[[a0.prototype._setValue_direct,a0.prototype._setValue_direct_setNeedsUpdate,a0.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[a0.prototype._setValue_array,a0.prototype._setValue_array_setNeedsUpdate,a0.prototype._setValue_array_setMatrixWorldNeedsUpdate],[a0.prototype._setValue_arrayElement,a0.prototype._setValue_arrayElement_setNeedsUpdate,a0.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[a0.prototype._setValue_fromArray,a0.prototype._setValue_fromArray_setNeedsUpdate,a0.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var CU=new Float32Array(1);class tJ{constructor(J=!0){this.autoStart=J,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,I0("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let J=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let Q=performance.now();J=(Q-this.oldTime)/1000,this.oldTime=Q,this.elapsedTime+=J}return J}}class WQ{static{WQ.prototype.isMatrix2=!0}constructor(J,Q,$,W){if(this.elements=[1,0,0,1],J!==void 0)this.set(J,Q,$,W)}identity(){return this.set(1,0,0,1),this}fromArray(J,Q=0){for(let $=0;$<4;$++)this.elements[$]=J[$+Q];return this}set(J,Q,$,W){let Z=this.elements;return Z[0]=J,Z[2]=Q,Z[1]=$,Z[3]=W,this}}class eJ extends y5{constructor(J=10,Q=10,$=4473924,W=8947848){$=new b0($),W=new b0(W);let Z=Q/2,H=J/Q,K=J/2,Y=[],U=[];for(let k=0,X=0,q=-K;k<=Q;k++,q+=H){Y.push(-K,0,q,K,0,q),Y.push(q,0,-K,q,0,K);let M=k===Z?$:W;M.toArray(U,X),X+=3,M.toArray(U,X),X+=3,M.toArray(U,X),X+=3,M.toArray(U,X),X+=3}let E=new L8;E.setAttribute("position",new G8(Y,3)),E.setAttribute("color",new G8(U,3));let F=new lJ({vertexColors:!0,toneMapped:!1});super(E,F);this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}function ZQ(J,Q,$,W){let Z=fW(W);switch($){case 1021:return J*Q;case 1028:return J*Q/Z.components*Z.byteLength;case 1029:return J*Q/Z.components*Z.byteLength;case 1030:return J*Q*2/Z.components*Z.byteLength;case 1031:return J*Q*2/Z.components*Z.byteLength;case 1022:return J*Q*3/Z.components*Z.byteLength;case 1023:return J*Q*4/Z.components*Z.byteLength;case 1033:return J*Q*4/Z.components*Z.byteLength;case 33776:case 33777:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*8;case 33778:case 33779:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*16;case 35841:case 35843:return Math.max(J,16)*Math.max(Q,8)/4;case 35840:case 35842:return Math.max(J,8)*Math.max(Q,8)/2;case 36196:case 37492:case 37488:case 37489:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*8;case 37496:case 37490:case 37491:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*16;case 37808:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*16;case 37809:return Math.floor((J+4)/5)*Math.floor((Q+3)/4)*16;case 37810:return Math.floor((J+4)/5)*Math.floor((Q+4)/5)*16;case 37811:return Math.floor((J+5)/6)*Math.floor((Q+4)/5)*16;case 37812:return Math.floor((J+5)/6)*Math.floor((Q+5)/6)*16;case 37813:return Math.floor((J+7)/8)*Math.floor((Q+4)/5)*16;case 37814:return Math.floor((J+7)/8)*Math.floor((Q+5)/6)*16;case 37815:return Math.floor((J+7)/8)*Math.floor((Q+7)/8)*16;case 37816:return Math.floor((J+9)/10)*Math.floor((Q+4)/5)*16;case 37817:return Math.floor((J+9)/10)*Math.floor((Q+5)/6)*16;case 37818:return Math.floor((J+9)/10)*Math.floor((Q+7)/8)*16;case 37819:return Math.floor((J+9)/10)*Math.floor((Q+9)/10)*16;case 37820:return Math.floor((J+11)/12)*Math.floor((Q+9)/10)*16;case 37821:return Math.floor((J+11)/12)*Math.floor((Q+11)/12)*16;case 36492:case 36494:case 36495:return Math.ceil(J/4)*Math.ceil(Q/4)*16;case 36283:case 36284:return Math.ceil(J/4)*Math.ceil(Q/4)*8;case 36285:case 36286:return Math.ceil(J/4)*Math.ceil(Q/4)*16}throw Error(`Unable to determine texture byte length for ${$} format.`)}function fW(J){switch(J){case 1009:case 1010:return{byteLength:1,components:1};case 1012:case 1011:case 1016:return{byteLength:2,components:1};case 1017:case 1018:return{byteLength:2,components:4};case 1014:case 1013:case 1015:return{byteLength:4,components:1};case 35902:case 35899:return{byteLength:4,components:3}}throw Error(`Unknown texture type ${J}.`)}if(typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"184"}}));if(typeof window<"u")if(window.__THREE__)I0("WARNING: Multiple instances of Three.js being imported.");else window.__THREE__="184";function S$(){let J=null,Q=!1,$=null,W=null;function Z(H,K){$(H,K),W=J.requestAnimationFrame(Z)}return{start:function(){if(Q===!0)return;if($===null)return;if(J===null)return;W=J.requestAnimationFrame(Z),Q=!0},stop:function(){if(J!==null)J.cancelAnimationFrame(W);Q=!1},setAnimationLoop:function(H){$=H},setContext:function(H){J=H}}}function bW(J){let Q=new WeakMap;function $(Y,U){let{array:E,usage:F}=Y,k=E.byteLength,X=J.createBuffer();J.bindBuffer(U,X),J.bufferData(U,E,F),Y.onUploadCallback();let q;if(E instanceof Float32Array)q=J.FLOAT;else if(typeof Float16Array<"u"&&E instanceof Float16Array)q=J.HALF_FLOAT;else if(E instanceof Uint16Array)if(Y.isFloat16BufferAttribute)q=J.HALF_FLOAT;else q=J.UNSIGNED_SHORT;else if(E instanceof Int16Array)q=J.SHORT;else if(E instanceof Uint32Array)q=J.UNSIGNED_INT;else if(E instanceof Int32Array)q=J.INT;else if(E instanceof Int8Array)q=J.BYTE;else if(E instanceof Uint8Array)q=J.UNSIGNED_BYTE;else if(E instanceof Uint8ClampedArray)q=J.UNSIGNED_BYTE;else throw Error("THREE.WebGLAttributes: Unsupported buffer data format: "+E);return{buffer:X,type:q,bytesPerElement:E.BYTES_PER_ELEMENT,version:Y.version,size:k}}function W(Y,U,E){let{array:F,updateRanges:k}=U;if(J.bindBuffer(E,Y),k.length===0)J.bufferSubData(E,0,F);else{k.sort((q,M)=>q.start-M.start);let X=0;for(let q=1;q<k.length;q++){let M=k[X],I=k[q];if(I.start<=M.start+M.count+1)M.count=Math.max(M.count,I.start+I.count-M.start);else++X,k[X]=I}k.length=X+1;for(let q=0,M=k.length;q<M;q++){let I=k[q];J.bufferSubData(E,I.start*F.BYTES_PER_ELEMENT,F,I.start,I.count)}U.clearUpdateRanges()}U.onUploadCallback()}function Z(Y){if(Y.isInterleavedBufferAttribute)Y=Y.data;return Q.get(Y)}function H(Y){if(Y.isInterleavedBufferAttribute)Y=Y.data;let U=Q.get(Y);if(U)J.deleteBuffer(U.buffer),Q.delete(Y)}function K(Y,U){if(Y.isInterleavedBufferAttribute)Y=Y.data;if(Y.isGLBufferAttribute){let F=Q.get(Y);if(!F||F.version<Y.version)Q.set(Y,{buffer:Y.buffer,type:Y.type,bytesPerElement:Y.elementSize,version:Y.version});return}let E=Q.get(Y);if(E===void 0)Q.set(Y,$(Y,U));else if(E.version<Y.version){if(E.size!==Y.array.byteLength)throw Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");W(E.buffer,Y,U),E.version=Y.version}}return{get:Z,remove:H,update:K}}var yW=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,hW=`#ifdef USE_ALPHAHASH
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
#endif`,xW=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,gW=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,pW=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,dW=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,lW=`#ifdef USE_AOMAP
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
#endif`,mW=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,uW=`#ifdef USE_BATCHING
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
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,cW=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,nW=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,sW=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,iW=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,oW=`#ifdef USE_IRIDESCENCE
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
#endif`,aW=`#ifdef USE_BUMPMAP
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
#endif`,rW=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,tW=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,eW=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,JZ=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,QZ=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,$Z=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,WZ=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,ZZ=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,HZ=`#define PI 3.141592653589793
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
} // validated`,KZ=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,YZ=`vec3 transformedNormal = objectNormal;
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
#endif`,UZ=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,EZ=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,XZ=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,GZ=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,NZ="gl_FragColor = linearToOutputTexel( gl_FragColor );",kZ=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,FZ=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,qZ=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,DZ=`#ifdef USE_ENVMAP
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
#endif`,RZ=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,OZ=`#ifdef USE_ENVMAP
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
#endif`,MZ=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,LZ=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,BZ=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,VZ=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,wZ=`#ifdef USE_GRADIENTMAP
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
}`,zZ=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,IZ=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,CZ=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,AZ=`uniform bool receiveShadow;
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
#endif
#include <lightprobes_pars_fragment>`,_Z=`#ifdef USE_ENVMAP
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
#endif`,PZ=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,TZ=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,SZ=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,jZ=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,vZ=`PhysicalMaterial material;
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
#endif`,fZ=`uniform sampler2D dfgLUT;
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
		return 0.5 / max( gv + gl, EPSILON );
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
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
}`,bZ=`
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
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = inverseTransformDirection( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,yZ=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
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
#endif`,hZ=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,xZ=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,gZ=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,pZ=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,dZ=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,lZ=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,mZ=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,uZ=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,cZ=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,nZ=`#if defined( USE_POINTS_UV )
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
#endif`,sZ=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,iZ=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,oZ=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,aZ=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,rZ=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,tZ=`#ifdef USE_MORPHTARGETS
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
#endif`,eZ=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,JH=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,QH=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,$H=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,WH=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ZH=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,HH=`#ifdef USE_NORMALMAP
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
#endif`,KH=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,YH=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,UH=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,EH=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,XH=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,GH=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,NH=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,kH=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,FH=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,qH=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,DH=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,RH=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,OH=`#if NUM_SPOT_LIGHT_COORDS > 0
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
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
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
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
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
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
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
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,MH=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,LH=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
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
#endif`,BH=`float getShadowMask() {
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
}`,VH=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,wH=`#ifdef USE_SKINNING
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
#endif`,zH=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,IH=`#ifdef USE_SKINNING
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
#endif`,CH=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,AH=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,_H=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,PH=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,TH=`#ifdef USE_TRANSMISSION
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
#endif`,SH=`#ifdef USE_TRANSMISSION
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
#endif`,jH=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,vH=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,fH=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,bH=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,yH=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,hH=`uniform sampler2D t2D;
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
}`,xH=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,gH=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pH=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,dH=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lH=`#include <common>
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
}`,mH=`#if DEPTH_PACKING == 3200
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
}`,uH=`#define DISTANCE
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
}`,cH=`#define DISTANCE
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
}`,nH=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,sH=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,iH=`uniform float scale;
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
}`,oH=`uniform vec3 diffuse;
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
}`,aH=`#include <common>
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
}`,rH=`uniform vec3 diffuse;
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
}`,tH=`#define LAMBERT
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
}`,eH=`#define LAMBERT
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
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,JK=`#define MATCAP
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
}`,QK=`#define MATCAP
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
}`,$K=`#define NORMAL
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
}`,WK=`#define NORMAL
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
}`,ZK=`#define PHONG
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
}`,HK=`#define PHONG
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
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,KK=`#define STANDARD
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
}`,YK=`#define STANDARD
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
}`,UK=`#define TOON
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
}`,EK=`#define TOON
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
}`,XK=`uniform float size;
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
}`,GK=`uniform vec3 diffuse;
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
}`,NK=`#include <common>
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
}`,kK=`uniform vec3 color;
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
	#include <premultiplied_alpha_fragment>
}`,FK=`uniform float rotation;
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
}`,qK=`uniform vec3 diffuse;
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
}`,y0={alphahash_fragment:yW,alphahash_pars_fragment:hW,alphamap_fragment:xW,alphamap_pars_fragment:gW,alphatest_fragment:pW,alphatest_pars_fragment:dW,aomap_fragment:lW,aomap_pars_fragment:mW,batching_pars_vertex:uW,batching_vertex:cW,begin_vertex:nW,beginnormal_vertex:sW,bsdfs:iW,iridescence_fragment:oW,bumpmap_pars_fragment:aW,clipping_planes_fragment:rW,clipping_planes_pars_fragment:tW,clipping_planes_pars_vertex:eW,clipping_planes_vertex:JZ,color_fragment:QZ,color_pars_fragment:$Z,color_pars_vertex:WZ,color_vertex:ZZ,common:HZ,cube_uv_reflection_fragment:KZ,defaultnormal_vertex:YZ,displacementmap_pars_vertex:UZ,displacementmap_vertex:EZ,emissivemap_fragment:XZ,emissivemap_pars_fragment:GZ,colorspace_fragment:NZ,colorspace_pars_fragment:kZ,envmap_fragment:FZ,envmap_common_pars_fragment:qZ,envmap_pars_fragment:DZ,envmap_pars_vertex:RZ,envmap_physical_pars_fragment:_Z,envmap_vertex:OZ,fog_vertex:MZ,fog_pars_vertex:LZ,fog_fragment:BZ,fog_pars_fragment:VZ,gradientmap_pars_fragment:wZ,lightmap_pars_fragment:zZ,lights_lambert_fragment:IZ,lights_lambert_pars_fragment:CZ,lights_pars_begin:AZ,lights_toon_fragment:PZ,lights_toon_pars_fragment:TZ,lights_phong_fragment:SZ,lights_phong_pars_fragment:jZ,lights_physical_fragment:vZ,lights_physical_pars_fragment:fZ,lights_fragment_begin:bZ,lights_fragment_maps:yZ,lights_fragment_end:hZ,lightprobes_pars_fragment:xZ,logdepthbuf_fragment:gZ,logdepthbuf_pars_fragment:pZ,logdepthbuf_pars_vertex:dZ,logdepthbuf_vertex:lZ,map_fragment:mZ,map_pars_fragment:uZ,map_particle_fragment:cZ,map_particle_pars_fragment:nZ,metalnessmap_fragment:sZ,metalnessmap_pars_fragment:iZ,morphinstance_vertex:oZ,morphcolor_vertex:aZ,morphnormal_vertex:rZ,morphtarget_pars_vertex:tZ,morphtarget_vertex:eZ,normal_fragment_begin:JH,normal_fragment_maps:QH,normal_pars_fragment:$H,normal_pars_vertex:WH,normal_vertex:ZH,normalmap_pars_fragment:HH,clearcoat_normal_fragment_begin:KH,clearcoat_normal_fragment_maps:YH,clearcoat_pars_fragment:UH,iridescence_pars_fragment:EH,opaque_fragment:XH,packing:GH,premultiplied_alpha_fragment:NH,project_vertex:kH,dithering_fragment:FH,dithering_pars_fragment:qH,roughnessmap_fragment:DH,roughnessmap_pars_fragment:RH,shadowmap_pars_fragment:OH,shadowmap_pars_vertex:MH,shadowmap_vertex:LH,shadowmask_pars_fragment:BH,skinbase_vertex:VH,skinning_pars_vertex:wH,skinning_vertex:zH,skinnormal_vertex:IH,specularmap_fragment:CH,specularmap_pars_fragment:AH,tonemapping_fragment:_H,tonemapping_pars_fragment:PH,transmission_fragment:TH,transmission_pars_fragment:SH,uv_pars_fragment:jH,uv_pars_vertex:vH,uv_vertex:fH,worldpos_vertex:bH,background_vert:yH,background_frag:hH,backgroundCube_vert:xH,backgroundCube_frag:gH,cube_vert:pH,cube_frag:dH,depth_vert:lH,depth_frag:mH,distance_vert:uH,distance_frag:cH,equirect_vert:nH,equirect_frag:sH,linedashed_vert:iH,linedashed_frag:oH,meshbasic_vert:aH,meshbasic_frag:rH,meshlambert_vert:tH,meshlambert_frag:eH,meshmatcap_vert:JK,meshmatcap_frag:QK,meshnormal_vert:$K,meshnormal_frag:WK,meshphong_vert:ZK,meshphong_frag:HK,meshphysical_vert:KK,meshphysical_frag:YK,meshtoon_vert:UK,meshtoon_frag:EK,points_vert:XK,points_frag:GK,shadow_vert:NK,shadow_frag:kK,sprite_vert:FK,sprite_frag:qK},Y0={common:{diffuse:{value:new b0(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new T0},alphaMap:{value:null},alphaMapTransform:{value:new T0},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new T0}},envmap:{envMap:{value:null},envMapRotation:{value:new T0},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:0.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new T0}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new T0}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new T0},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new T0},normalScale:{value:new c0(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new T0},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new T0}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new T0}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new T0}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:0.00025},fogNear:{value:1},fogFar:{value:2000},fogColor:{value:new b0(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new v},probesMax:{value:new v},probesResolution:{value:new v}},points:{diffuse:{value:new b0(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new T0},alphaTest:{value:0},uvTransform:{value:new T0}},sprite:{diffuse:{value:new b0(16777215)},opacity:{value:1},center:{value:new c0(0.5,0.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new T0},alphaMap:{value:null},alphaMapTransform:{value:new T0},alphaTest:{value:0}}},W6={basic:{uniforms:A8([Y0.common,Y0.specularmap,Y0.envmap,Y0.aomap,Y0.lightmap,Y0.fog]),vertexShader:y0.meshbasic_vert,fragmentShader:y0.meshbasic_frag},lambert:{uniforms:A8([Y0.common,Y0.specularmap,Y0.envmap,Y0.aomap,Y0.lightmap,Y0.emissivemap,Y0.bumpmap,Y0.normalmap,Y0.displacementmap,Y0.fog,Y0.lights,{emissive:{value:new b0(0)},envMapIntensity:{value:1}}]),vertexShader:y0.meshlambert_vert,fragmentShader:y0.meshlambert_frag},phong:{uniforms:A8([Y0.common,Y0.specularmap,Y0.envmap,Y0.aomap,Y0.lightmap,Y0.emissivemap,Y0.bumpmap,Y0.normalmap,Y0.displacementmap,Y0.fog,Y0.lights,{emissive:{value:new b0(0)},specular:{value:new b0(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:y0.meshphong_vert,fragmentShader:y0.meshphong_frag},standard:{uniforms:A8([Y0.common,Y0.envmap,Y0.aomap,Y0.lightmap,Y0.emissivemap,Y0.bumpmap,Y0.normalmap,Y0.displacementmap,Y0.roughnessmap,Y0.metalnessmap,Y0.fog,Y0.lights,{emissive:{value:new b0(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:y0.meshphysical_vert,fragmentShader:y0.meshphysical_frag},toon:{uniforms:A8([Y0.common,Y0.aomap,Y0.lightmap,Y0.emissivemap,Y0.bumpmap,Y0.normalmap,Y0.displacementmap,Y0.gradientmap,Y0.fog,Y0.lights,{emissive:{value:new b0(0)}}]),vertexShader:y0.meshtoon_vert,fragmentShader:y0.meshtoon_frag},matcap:{uniforms:A8([Y0.common,Y0.bumpmap,Y0.normalmap,Y0.displacementmap,Y0.fog,{matcap:{value:null}}]),vertexShader:y0.meshmatcap_vert,fragmentShader:y0.meshmatcap_frag},points:{uniforms:A8([Y0.points,Y0.fog]),vertexShader:y0.points_vert,fragmentShader:y0.points_frag},dashed:{uniforms:A8([Y0.common,Y0.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:y0.linedashed_vert,fragmentShader:y0.linedashed_frag},depth:{uniforms:A8([Y0.common,Y0.displacementmap]),vertexShader:y0.depth_vert,fragmentShader:y0.depth_frag},normal:{uniforms:A8([Y0.common,Y0.bumpmap,Y0.normalmap,Y0.displacementmap,{opacity:{value:1}}]),vertexShader:y0.meshnormal_vert,fragmentShader:y0.meshnormal_frag},sprite:{uniforms:A8([Y0.sprite,Y0.fog]),vertexShader:y0.sprite_vert,fragmentShader:y0.sprite_frag},background:{uniforms:{uvTransform:{value:new T0},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:y0.background_vert,fragmentShader:y0.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new T0}},vertexShader:y0.backgroundCube_vert,fragmentShader:y0.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:y0.cube_vert,fragmentShader:y0.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:y0.equirect_vert,fragmentShader:y0.equirect_frag},distance:{uniforms:A8([Y0.common,Y0.displacementmap,{referencePosition:{value:new v},nearDistance:{value:1},farDistance:{value:1000}}]),vertexShader:y0.distance_vert,fragmentShader:y0.distance_frag},shadow:{uniforms:A8([Y0.lights,Y0.fog,{color:{value:new b0(0)},opacity:{value:1}}]),vertexShader:y0.shadow_vert,fragmentShader:y0.shadow_frag}};W6.physical={uniforms:A8([W6.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new T0},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new T0},clearcoatNormalScale:{value:new c0(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new T0},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new T0},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new T0},sheen:{value:0},sheenColor:{value:new b0(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new T0},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new T0},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new T0},transmissionSamplerSize:{value:new c0},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new T0},attenuationDistance:{value:0},attenuationColor:{value:new b0(0)},specularColor:{value:new b0(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new T0},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new T0},anisotropyVector:{value:new c0},anisotropyMap:{value:null},anisotropyMapTransform:{value:new T0}}]),vertexShader:y0.meshphysical_vert,fragmentShader:y0.meshphysical_frag};var J7={r:0,b:0,g:0},DK=new H8,j$=new T0;j$.set(-1,0,0,0,1,0,0,0,1);function RK(J,Q,$,W,Z,H){let K=new b0(0),Y=Z===!0?0:1,U,E,F=null,k=0,X=null;function q(L){let w=L.isScene===!0?L.background:null;if(w&&w.isTexture){let z=L.backgroundBlurriness>0;w=Q.get(w,z)}return w}function M(L){let w=!1,z=q(L);if(z===null)N(K,Y);else if(z&&z.isColor)N(z,1),w=!0;let P=J.xr.getEnvironmentBlendMode();if(P==="additive")$.buffers.color.setClear(0,0,0,1,H);else if(P==="alpha-blend")$.buffers.color.setClear(0,0,0,0,H);if(J.autoClear||w)$.buffers.depth.setTest(!0),$.buffers.depth.setMask(!0),$.buffers.color.setMask(!0),J.clear(J.autoClearColor,J.autoClearDepth,J.autoClearStencil)}function I(L,w){let z=q(w);if(z&&(z.isCubeTexture||z.mapping===P9)){if(E===void 0)E=new P8(new D9(1,1,1),new d8({name:"BackgroundCubeMaterial",uniforms:u6(W6.backgroundCube.uniforms),vertexShader:W6.backgroundCube.vertexShader,fragmentShader:W6.backgroundCube.fragmentShader,side:j8,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),E.geometry.deleteAttribute("normal"),E.geometry.deleteAttribute("uv"),E.onBeforeRender=function(P,C,_){this.matrixWorld.copyPosition(_.matrixWorld)},Object.defineProperty(E.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),W.update(E);if(E.material.uniforms.envMap.value=z,E.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,E.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,E.material.uniforms.backgroundRotation.value.setFromMatrix4(DK.makeRotationFromEuler(w.backgroundRotation)).transpose(),z.isCubeTexture&&z.isRenderTargetTexture===!1)E.material.uniforms.backgroundRotation.value.premultiply(j$);if(E.material.toneMapped=l0.getTransfer(z.colorSpace)!==W8,F!==z||k!==z.version||X!==J.toneMapping)E.material.needsUpdate=!0,F=z,k=z.version,X=J.toneMapping;E.layers.enableAll(),L.unshift(E,E.geometry,E.material,0,0,null)}else if(z&&z.isTexture){if(U===void 0)U=new P8(new g9(2,2),new d8({name:"BackgroundMaterial",uniforms:u6(W6.background.uniforms),vertexShader:W6.background.vertexShader,fragmentShader:W6.background.fragmentShader,side:N9,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),U.geometry.deleteAttribute("normal"),Object.defineProperty(U.material,"map",{get:function(){return this.uniforms.t2D.value}}),W.update(U);if(U.material.uniforms.t2D.value=z,U.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,U.material.toneMapped=l0.getTransfer(z.colorSpace)!==W8,z.matrixAutoUpdate===!0)z.updateMatrix();if(U.material.uniforms.uvTransform.value.copy(z.matrix),F!==z||k!==z.version||X!==J.toneMapping)U.material.needsUpdate=!0,F=z,k=z.version,X=J.toneMapping;U.layers.enableAll(),L.unshift(U,U.geometry,U.material,0,0,null)}}function N(L,w){L.getRGB(J7,x5(J)),$.buffers.color.setClear(J7.r,J7.g,J7.b,w,H)}function G(){if(E!==void 0)E.geometry.dispose(),E.material.dispose(),E=void 0;if(U!==void 0)U.geometry.dispose(),U.material.dispose(),U=void 0}return{getClearColor:function(){return K},setClearColor:function(L,w=1){K.set(L),Y=w,N(K,Y)},getClearAlpha:function(){return Y},setClearAlpha:function(L){Y=L,N(K,Y)},render:M,addToRenderList:I,dispose:G}}function OK(J,Q){let $=J.getParameter(J.MAX_VERTEX_ATTRIBS),W={},Z=X(null),H=Z,K=!1;function Y(A,l,i,b,u){let x=!1,p=k(A,b,i,l);if(H!==p)H=p,E(H.object);if(x=q(A,b,i,u),x)M(A,b,i,u);if(u!==null)Q.update(u,J.ELEMENT_ARRAY_BUFFER);if(x||K){if(K=!1,z(A,l,i,b),u!==null)J.bindBuffer(J.ELEMENT_ARRAY_BUFFER,Q.get(u).buffer)}}function U(){return J.createVertexArray()}function E(A){return J.bindVertexArray(A)}function F(A){return J.deleteVertexArray(A)}function k(A,l,i,b){let u=b.wireframe===!0,x=W[l.id];if(x===void 0)x={},W[l.id]=x;let p=A.isInstancedMesh===!0?A.id:0,a=x[p];if(a===void 0)a={},x[p]=a;let Q0=a[i.id];if(Q0===void 0)Q0={},a[i.id]=Q0;let k0=Q0[u];if(k0===void 0)k0=X(U()),Q0[u]=k0;return k0}function X(A){let l=[],i=[],b=[];for(let u=0;u<$;u++)l[u]=0,i[u]=0,b[u]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:l,enabledAttributes:i,attributeDivisors:b,object:A,attributes:{},index:null}}function q(A,l,i,b){let u=H.attributes,x=l.attributes,p=0,a=i.getAttributes();for(let Q0 in a)if(a[Q0].location>=0){let z0=u[Q0],O0=x[Q0];if(O0===void 0){if(Q0==="instanceMatrix"&&A.instanceMatrix)O0=A.instanceMatrix;if(Q0==="instanceColor"&&A.instanceColor)O0=A.instanceColor}if(z0===void 0)return!0;if(z0.attribute!==O0)return!0;if(O0&&z0.data!==O0.data)return!0;p++}if(H.attributesNum!==p)return!0;if(H.index!==b)return!0;return!1}function M(A,l,i,b){let u={},x=l.attributes,p=0,a=i.getAttributes();for(let Q0 in a)if(a[Q0].location>=0){let z0=x[Q0];if(z0===void 0){if(Q0==="instanceMatrix"&&A.instanceMatrix)z0=A.instanceMatrix;if(Q0==="instanceColor"&&A.instanceColor)z0=A.instanceColor}let O0={};if(O0.attribute=z0,z0&&z0.data)O0.data=z0.data;u[Q0]=O0,p++}H.attributes=u,H.attributesNum=p,H.index=b}function I(){let A=H.newAttributes;for(let l=0,i=A.length;l<i;l++)A[l]=0}function N(A){G(A,0)}function G(A,l){let{newAttributes:i,enabledAttributes:b,attributeDivisors:u}=H;if(i[A]=1,b[A]===0)J.enableVertexAttribArray(A),b[A]=1;if(u[A]!==l)J.vertexAttribDivisor(A,l),u[A]=l}function L(){let{newAttributes:A,enabledAttributes:l}=H;for(let i=0,b=l.length;i<b;i++)if(l[i]!==A[i])J.disableVertexAttribArray(i),l[i]=0}function w(A,l,i,b,u,x,p){if(p===!0)J.vertexAttribIPointer(A,l,i,u,x);else J.vertexAttribPointer(A,l,i,b,u,x)}function z(A,l,i,b){I();let u=b.attributes,x=i.getAttributes(),p=l.defaultAttributeValues;for(let a in x){let Q0=x[a];if(Q0.location>=0){let k0=u[a];if(k0===void 0){if(a==="instanceMatrix"&&A.instanceMatrix)k0=A.instanceMatrix;if(a==="instanceColor"&&A.instanceColor)k0=A.instanceColor}if(k0!==void 0){let{normalized:z0,itemSize:O0}=k0,o0=Q.get(k0);if(o0===void 0)continue;let{buffer:p0,type:n,bytesPerElement:G0}=o0,L0=n===J.INT||n===J.UNSIGNED_INT||k0.gpuType===m7;if(k0.isInterleavedBufferAttribute){let N0=k0.data,C0=N0.stride,i0=k0.offset;if(N0.isInstancedInterleavedBuffer){for(let h0=0;h0<Q0.locationSize;h0++)G(Q0.location+h0,N0.meshPerAttribute);if(A.isInstancedMesh!==!0&&b._maxInstanceCount===void 0)b._maxInstanceCount=N0.meshPerAttribute*N0.count}else for(let h0=0;h0<Q0.locationSize;h0++)N(Q0.location+h0);J.bindBuffer(J.ARRAY_BUFFER,p0);for(let h0=0;h0<Q0.locationSize;h0++)w(Q0.location+h0,O0/Q0.locationSize,n,z0,C0*G0,(i0+O0/Q0.locationSize*h0)*G0,L0)}else{if(k0.isInstancedBufferAttribute){for(let N0=0;N0<Q0.locationSize;N0++)G(Q0.location+N0,k0.meshPerAttribute);if(A.isInstancedMesh!==!0&&b._maxInstanceCount===void 0)b._maxInstanceCount=k0.meshPerAttribute*k0.count}else for(let N0=0;N0<Q0.locationSize;N0++)N(Q0.location+N0);J.bindBuffer(J.ARRAY_BUFFER,p0);for(let N0=0;N0<Q0.locationSize;N0++)w(Q0.location+N0,O0/Q0.locationSize,n,z0,O0*G0,O0/Q0.locationSize*N0*G0,L0)}}else if(p!==void 0){let z0=p[a];if(z0!==void 0)switch(z0.length){case 2:J.vertexAttrib2fv(Q0.location,z0);break;case 3:J.vertexAttrib3fv(Q0.location,z0);break;case 4:J.vertexAttrib4fv(Q0.location,z0);break;default:J.vertexAttrib1fv(Q0.location,z0)}}}}L()}function P(){B();for(let A in W){let l=W[A];for(let i in l){let b=l[i];for(let u in b){let x=b[u];for(let p in x)F(x[p].object),delete x[p];delete b[u]}}delete W[A]}}function C(A){if(W[A.id]===void 0)return;let l=W[A.id];for(let i in l){let b=l[i];for(let u in b){let x=b[u];for(let p in x)F(x[p].object),delete x[p];delete b[u]}}delete W[A.id]}function _(A){for(let l in W){let i=W[l];for(let b in i){let u=i[b];if(u[A.id]===void 0)continue;let x=u[A.id];for(let p in x)F(x[p].object),delete x[p];delete u[A.id]}}}function D(A){for(let l in W){let i=W[l],b=A.isInstancedMesh===!0?A.id:0,u=i[b];if(u===void 0)continue;for(let x in u){let p=u[x];for(let a in p)F(p[a].object),delete p[a];delete u[x]}if(delete i[b],Object.keys(i).length===0)delete W[l]}}function B(){if(d(),K=!0,H===Z)return;H=Z,E(H.object)}function d(){Z.geometry=null,Z.program=null,Z.wireframe=!1}return{setup:Y,reset:B,resetDefaultState:d,dispose:P,releaseStatesOfGeometry:C,releaseStatesOfObject:D,releaseStatesOfProgram:_,initAttributes:I,enableAttribute:N,disableUnusedAttributes:L}}function MK(J,Q,$){let W;function Z(U){W=U}function H(U,E){J.drawArrays(W,U,E),$.update(E,W,1)}function K(U,E,F){if(F===0)return;J.drawArraysInstanced(W,U,E,F),$.update(E,W,F)}function Y(U,E,F){if(F===0)return;Q.get("WEBGL_multi_draw").multiDrawArraysWEBGL(W,U,0,E,0,F);let X=0;for(let q=0;q<F;q++)X+=E[q];$.update(X,W,1)}this.setMode=Z,this.render=H,this.renderInstances=K,this.renderMultiDraw=Y}function LK(J,Q,$,W){let Z;function H(){if(Z!==void 0)return Z;if(Q.has("EXT_texture_filter_anisotropic")===!0){let _=Q.get("EXT_texture_filter_anisotropic");Z=J.getParameter(_.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else Z=0;return Z}function K(_){if(_!==Q6&&W.convert(_)!==J.getParameter(J.IMPLEMENTATION_COLOR_READ_FORMAT))return!1;return!0}function Y(_){let D=_===k6&&(Q.has("EXT_color_buffer_half_float")||Q.has("EXT_color_buffer_float"));if(_!==i8&&W.convert(_)!==J.getParameter(J.IMPLEMENTATION_COLOR_READ_TYPE)&&_!==N6&&!D)return!1;return!0}function U(_){if(_==="highp"){if(J.getShaderPrecisionFormat(J.VERTEX_SHADER,J.HIGH_FLOAT).precision>0&&J.getShaderPrecisionFormat(J.FRAGMENT_SHADER,J.HIGH_FLOAT).precision>0)return"highp";_="mediump"}if(_==="mediump"){if(J.getShaderPrecisionFormat(J.VERTEX_SHADER,J.MEDIUM_FLOAT).precision>0&&J.getShaderPrecisionFormat(J.FRAGMENT_SHADER,J.MEDIUM_FLOAT).precision>0)return"mediump"}return"lowp"}let E=$.precision!==void 0?$.precision:"highp",F=U(E);if(F!==E)I0("WebGLRenderer:",E,"not supported, using",F,"instead."),E=F;let k=$.logarithmicDepthBuffer===!0,X=$.reversedDepthBuffer===!0&&Q.has("EXT_clip_control");if($.reversedDepthBuffer===!0&&X===!1)I0("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let q=J.getParameter(J.MAX_TEXTURE_IMAGE_UNITS),M=J.getParameter(J.MAX_VERTEX_TEXTURE_IMAGE_UNITS),I=J.getParameter(J.MAX_TEXTURE_SIZE),N=J.getParameter(J.MAX_CUBE_MAP_TEXTURE_SIZE),G=J.getParameter(J.MAX_VERTEX_ATTRIBS),L=J.getParameter(J.MAX_VERTEX_UNIFORM_VECTORS),w=J.getParameter(J.MAX_VARYING_VECTORS),z=J.getParameter(J.MAX_FRAGMENT_UNIFORM_VECTORS),P=J.getParameter(J.MAX_SAMPLES),C=J.getParameter(J.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:H,getMaxPrecision:U,textureFormatReadable:K,textureTypeReadable:Y,precision:E,logarithmicDepthBuffer:k,reversedDepthBuffer:X,maxTextures:q,maxVertexTextures:M,maxTextureSize:I,maxCubemapSize:N,maxAttributes:G,maxVertexUniforms:L,maxVaryings:w,maxFragmentUniforms:z,maxSamples:P,samples:C}}function BK(J){let Q=this,$=null,W=0,Z=!1,H=!1,K=new E6,Y=new T0,U={value:null,needsUpdate:!1};this.uniform=U,this.numPlanes=0,this.numIntersection=0,this.init=function(k,X){let q=k.length!==0||X||W!==0||Z;return Z=X,W=k.length,q},this.beginShadows=function(){H=!0,F(null)},this.endShadows=function(){H=!1},this.setGlobalState=function(k,X){$=F(k,X,0)},this.setState=function(k,X,q){let{clippingPlanes:M,clipIntersection:I,clipShadows:N}=k,G=J.get(k);if(!Z||M===null||M.length===0||H&&!N)if(H)F(null);else E();else{let L=H?0:W,w=L*4,z=G.clippingState||null;U.value=z,z=F(M,X,w,q);for(let P=0;P!==w;++P)z[P]=$[P];G.clippingState=z,this.numIntersection=I?this.numPlanes:0,this.numPlanes+=L}};function E(){if(U.value!==$)U.value=$,U.needsUpdate=W>0;Q.numPlanes=W,Q.numIntersection=0}function F(k,X,q,M){let I=k!==null?k.length:0,N=null;if(I!==0){if(N=U.value,M!==!0||N===null){let G=q+I*4,L=X.matrixWorldInverse;if(Y.getNormalMatrix(L),N===null||N.length<G)N=new Float32Array(G);for(let w=0,z=q;w!==I;++w,z+=4)K.copy(k[w]).applyMatrix4(L,Y),K.normal.toArray(N,z),N[z+3]=K.constant}U.value=N,U.needsUpdate=!0}return Q.numPlanes=I,Q.numIntersection=0,N}}var P6=4,E$=[0.125,0.215,0.35,0.446,0.526,0.582],i6=20,VK=256,m9=new l9,X$=new b0,HQ=null,KQ=0,YQ=0,UQ=!1,wK=new v;class GQ{constructor(J){this._renderer=J,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(J,Q=0,$=0.1,W=100,Z={}){let{size:H=256,position:K=wK}=Z;HQ=this._renderer.getRenderTarget(),KQ=this._renderer.getActiveCubeFace(),YQ=this._renderer.getActiveMipmapLevel(),UQ=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(H);let Y=this._allocateTargets();if(Y.depthBuffer=!0,this._sceneToCubeUV(J,$,W,Y,K),Q>0)this._blur(Y,0,0,Q);return this._applyPMREM(Y),this._cleanup(Y),Y}fromEquirectangular(J,Q=null){return this._fromTexture(J,Q)}fromCubemap(J,Q=null){return this._fromTexture(J,Q)}compileCubemapShader(){if(this._cubemapMaterial===null)this._cubemapMaterial=k$(),this._compileMaterial(this._cubemapMaterial)}compileEquirectangularShader(){if(this._equirectMaterial===null)this._equirectMaterial=N$(),this._compileMaterial(this._equirectMaterial)}dispose(){if(this._dispose(),this._cubemapMaterial!==null)this._cubemapMaterial.dispose();if(this._equirectMaterial!==null)this._equirectMaterial.dispose();if(this._backgroundBox!==null)this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose()}_setSize(J){this._lodMax=Math.floor(Math.log2(J)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){if(this._blurMaterial!==null)this._blurMaterial.dispose();if(this._ggxMaterial!==null)this._ggxMaterial.dispose();if(this._pingPongRenderTarget!==null)this._pingPongRenderTarget.dispose();for(let J=0;J<this._lodMeshes.length;J++)this._lodMeshes[J].geometry.dispose()}_cleanup(J){this._renderer.setRenderTarget(HQ,KQ,YQ),this._renderer.xr.enabled=UQ,J.scissorTest=!1,O9(J,0,0,J.width,J.height)}_fromTexture(J,Q){if(J.mapping===F9||J.mapping===b6)this._setSize(J.image.length===0?16:J.image[0].width||J.image[0].image.width);else this._setSize(J.image.width/4);HQ=this._renderer.getRenderTarget(),KQ=this._renderer.getActiveCubeFace(),YQ=this._renderer.getActiveMipmapLevel(),UQ=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let $=Q||this._allocateTargets();return this._textureToCubeUV(J,$),this._applyPMREM($),this._cleanup($),$}_allocateTargets(){let J=3*Math.max(this._cubeSize,112),Q=4*this._cubeSize,$={magFilter:v8,minFilter:v8,generateMipmaps:!1,type:k6,format:Q6,colorSpace:C5,depthBuffer:!1},W=G$(J,Q,$);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==J||this._pingPongRenderTarget.height!==Q){if(this._pingPongRenderTarget!==null)this._dispose();this._pingPongRenderTarget=G$(J,Q,$);let{_lodMax:Z}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=zK(Z)),this._blurMaterial=CK(Z,J,Q),this._ggxMaterial=IK(Z,J,Q)}return W}_compileMaterial(J){let Q=new P8(new L8,J);this._renderer.compile(Q,m9)}_sceneToCubeUV(J,Q,$,W,Z){let Y=new I8(90,1,Q,$),U=[1,-1,1,1,1,1],E=[1,1,1,-1,-1,-1],F=this._renderer,k=F.autoClear,X=F.toneMapping;if(F.getClearColor(X$),F.toneMapping=s8,F.autoClear=!1,F.state.buffers.depth.getReversed())F.setRenderTarget(W),F.clearDepth(),F.setRenderTarget(null);if(this._backgroundBox===null)this._backgroundBox=new P8(new D9,new m6({name:"PMREM.Background",side:j8,depthWrite:!1,depthTest:!1}));let M=this._backgroundBox,I=M.material,N=!1,G=J.background;if(G){if(G.isColor)I.color.copy(G),J.background=null,N=!0}else I.color.copy(X$),N=!0;for(let L=0;L<6;L++){let w=L%3;if(w===0)Y.up.set(0,U[L],0),Y.position.set(Z.x,Z.y,Z.z),Y.lookAt(Z.x+E[L],Z.y,Z.z);else if(w===1)Y.up.set(0,0,U[L]),Y.position.set(Z.x,Z.y,Z.z),Y.lookAt(Z.x,Z.y+E[L],Z.z);else Y.up.set(0,U[L],0),Y.position.set(Z.x,Z.y,Z.z),Y.lookAt(Z.x,Z.y,Z.z+E[L]);let z=this._cubeSize;if(O9(W,w*z,L>2?z:0,z,z),F.setRenderTarget(W),N)F.render(M,Y);F.render(J,Y)}F.toneMapping=X,F.autoClear=k,J.background=G}_textureToCubeUV(J,Q){let $=this._renderer,W=J.mapping===F9||J.mapping===b6;if(W){if(this._cubemapMaterial===null)this._cubemapMaterial=k$();this._cubemapMaterial.uniforms.flipEnvMap.value=J.isRenderTargetTexture===!1?-1:1}else if(this._equirectMaterial===null)this._equirectMaterial=N$();let Z=W?this._cubemapMaterial:this._equirectMaterial,H=this._lodMeshes[0];H.material=Z;let K=Z.uniforms;K.envMap.value=J;let Y=this._cubeSize;O9(Q,0,0,3*Y,2*Y),$.setRenderTarget(Q),$.render(H,m9)}_applyPMREM(J){let Q=this._renderer,$=Q.autoClear;Q.autoClear=!1;let W=this._lodMeshes.length;for(let Z=1;Z<W;Z++)this._applyGGXFilter(J,Z-1,Z);Q.autoClear=$}_applyGGXFilter(J,Q,$){let W=this._renderer,Z=this._pingPongRenderTarget,H=this._ggxMaterial,K=this._lodMeshes[$];K.material=H;let Y=H.uniforms,U=$/(this._lodMeshes.length-1),E=Q/(this._lodMeshes.length-1),F=Math.sqrt(U*U-E*E),k=0+U*1.25,X=F*k,{_lodMax:q}=this,M=this._sizeLods[$],I=3*M*($>q-P6?$-q+P6:0),N=4*(this._cubeSize-M);Y.envMap.value=J.texture,Y.roughness.value=X,Y.mipInt.value=q-Q,O9(Z,I,N,3*M,2*M),W.setRenderTarget(Z),W.render(K,m9),Y.envMap.value=Z.texture,Y.roughness.value=0,Y.mipInt.value=q-$,O9(J,I,N,3*M,2*M),W.setRenderTarget(J),W.render(K,m9)}_blur(J,Q,$,W,Z){let H=this._pingPongRenderTarget;this._halfBlur(J,H,Q,$,W,"latitudinal",Z),this._halfBlur(H,J,$,$,W,"longitudinal",Z)}_halfBlur(J,Q,$,W,Z,H,K){let Y=this._renderer,U=this._blurMaterial;if(H!=="latitudinal"&&H!=="longitudinal")_0("blur direction must be either latitudinal or longitudinal!");let E=3,F=this._lodMeshes[W];F.material=U;let k=U.uniforms,X=this._sizeLods[$]-1,q=isFinite(Z)?Math.PI/(2*X):2*Math.PI/(2*i6-1),M=Z/q,I=isFinite(Z)?1+Math.floor(E*M):i6;if(I>i6)I0(`sigmaRadians, ${Z}, is too large and will clip, as it requested ${I} samples when the maximum is set to ${i6}`);let N=[],G=0;for(let C=0;C<i6;++C){let _=C/M,D=Math.exp(-_*_/2);if(N.push(D),C===0)G+=D;else if(C<I)G+=2*D}for(let C=0;C<N.length;C++)N[C]=N[C]/G;if(k.envMap.value=J.texture,k.samples.value=I,k.weights.value=N,k.latitudinal.value=H==="latitudinal",K)k.poleAxis.value=K;let{_lodMax:L}=this;k.dTheta.value=q,k.mipInt.value=L-$;let w=this._sizeLods[W],z=3*w*(W>L-P6?W-L+P6:0),P=4*(this._cubeSize-w);O9(Q,z,P,3*w,2*w),Y.setRenderTarget(Q),Y.render(F,m9)}}function zK(J){let Q=[],$=[],W=[],Z=J,H=J-P6+1+E$.length;for(let K=0;K<H;K++){let Y=Math.pow(2,Z);Q.push(Y);let U=1/Y;if(K>J-P6)U=E$[K-J+P6-1];else if(K===0)U=0;$.push(U);let E=1/(Y-2),F=-E,k=1+E,X=[F,F,k,F,k,k,F,F,k,k,F,k],q=6,M=6,I=3,N=2,G=1,L=new Float32Array(I*M*q),w=new Float32Array(N*M*q),z=new Float32Array(G*M*q);for(let C=0;C<q;C++){let _=C%3*2/3-1,D=C>2?0:-1,B=[_,D,0,_+0.6666666666666666,D,0,_+0.6666666666666666,D+1,0,_,D,0,_+0.6666666666666666,D+1,0,_,D+1,0];L.set(B,I*M*C),w.set(X,N*M*C);let d=[C,C,C,C,C,C];z.set(d,G*M*C)}let P=new L8;if(P.setAttribute("position",new S8(L,I)),P.setAttribute("uv",new S8(w,N)),P.setAttribute("faceIndex",new S8(z,G)),W.push(new P8(P,null)),Z>P6)Z--}return{lodMeshes:W,sizeLods:Q,sigmas:$}}function G$(J,Q,$){let W=new p8(J,Q,$);return W.texture.mapping=P9,W.texture.name="PMREM.cubeUv",W.scissorTest=!0,W}function O9(J,Q,$,W,Z){J.viewport.set(Q,$,W,Z),J.scissor.set(Q,$,W,Z)}function IK(J,Q,$){return new d8({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:VK,CUBEUV_TEXEL_WIDTH:1/Q,CUBEUV_TEXEL_HEIGHT:1/$,CUBEUV_MAX_MIP:`${J}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:$7(),fragmentShader:`

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

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

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
		`,blending:J6,depthTest:!1,depthWrite:!1})}function CK(J,Q,$){let W=new Float32Array(i6),Z=new v(0,1,0);return new d8({name:"SphericalGaussianBlur",defines:{n:i6,CUBEUV_TEXEL_WIDTH:1/Q,CUBEUV_TEXEL_HEIGHT:1/$,CUBEUV_MAX_MIP:`${J}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:W},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:Z}},vertexShader:$7(),fragmentShader:`

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
		`,blending:J6,depthTest:!1,depthWrite:!1})}function N$(){return new d8({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:$7(),fragmentShader:`

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
		`,blending:J6,depthTest:!1,depthWrite:!1})}function k$(){return new d8({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:$7(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:J6,depthTest:!1,depthWrite:!1})}function $7(){return`

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
	`}class FQ extends p8{constructor(J=1,Q={}){super(J,J,Q);this.isWebGLCubeRenderTarget=!0;let $={width:J,height:J,depth:1},W=[$,$,$,$,$,$];this.texture=new uJ(W),this._setTextureOptions(Q),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(J,Q){this.texture.type=Q.type,this.texture.colorSpace=Q.colorSpace,this.texture.generateMipmaps=Q.generateMipmaps,this.texture.minFilter=Q.minFilter,this.texture.magFilter=Q.magFilter;let $={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},W=new D9(5,5,5),Z=new d8({name:"CubemapFromEquirect",uniforms:u6($.uniforms),vertexShader:$.vertexShader,fragmentShader:$.fragmentShader,side:j8,blending:J6});Z.uniforms.tEquirect.value=Q;let H=new P8(W,Z),K=Q.minFilter;if(Q.minFilter===y6)Q.minFilter=v8;return new e5(1,10,this).update(J,H),Q.minFilter=K,H.geometry.dispose(),H.material.dispose(),this}clear(J,Q=!0,$=!0,W=!0){let Z=J.getRenderTarget();for(let H=0;H<6;H++)J.setRenderTarget(this,H),J.clear(Q,$,W);J.setRenderTarget(Z)}}function AK(J){let Q=new WeakMap,$=new WeakMap,W=null;function Z(X,q=!1){if(X===null||X===void 0)return null;if(q)return K(X);return H(X)}function H(X){if(X&&X.isTexture){let q=X.mapping;if(q===IJ||q===CJ)if(Q.has(X)){let M=Q.get(X).texture;return Y(M,X.mapping)}else{let M=X.image;if(M&&M.height>0){let I=new FQ(M.height);return I.fromEquirectangularTexture(J,X),Q.set(X,I),X.addEventListener("dispose",E),Y(I.texture,X.mapping)}else return null}}return X}function K(X){if(X&&X.isTexture){let q=X.mapping,M=q===IJ||q===CJ,I=q===F9||q===b6;if(M||I){let N=$.get(X),G=N!==void 0?N.texture.pmremVersion:0;if(X.isRenderTargetTexture&&X.pmremVersion!==G){if(W===null)W=new GQ(J);return N=M?W.fromEquirectangular(X,N):W.fromCubemap(X,N),N.texture.pmremVersion=X.pmremVersion,$.set(X,N),N.texture}else if(N!==void 0)return N.texture;else{let L=X.image;if(M&&L&&L.height>0||I&&L&&U(L)){if(W===null)W=new GQ(J);return N=M?W.fromEquirectangular(X):W.fromCubemap(X),N.texture.pmremVersion=X.pmremVersion,$.set(X,N),X.addEventListener("dispose",F),N.texture}else return null}}}return X}function Y(X,q){if(q===IJ)X.mapping=F9;else if(q===CJ)X.mapping=b6;return X}function U(X){let q=0,M=6;for(let I=0;I<M;I++)if(X[I]!==void 0)q++;return q===M}function E(X){let q=X.target;q.removeEventListener("dispose",E);let M=Q.get(q);if(M!==void 0)Q.delete(q),M.dispose()}function F(X){let q=X.target;q.removeEventListener("dispose",F);let M=$.get(q);if(M!==void 0)$.delete(q),M.dispose()}function k(){if(Q=new WeakMap,$=new WeakMap,W!==null)W.dispose(),W=null}return{get:Z,dispose:k}}function _K(J){let Q={};function $(W){if(Q[W]!==void 0)return Q[W];let Z=J.getExtension(W);return Q[W]=Z,Z}return{has:function(W){return $(W)!==null},init:function(){$("EXT_color_buffer_float"),$("WEBGL_clip_cull_distance"),$("OES_texture_float_linear"),$("EXT_color_buffer_half_float"),$("WEBGL_multisampled_render_to_texture"),$("WEBGL_render_shared_exponent")},get:function(W){let Z=$(W);if(Z===null)BJ("WebGLRenderer: "+W+" extension not supported.");return Z}}}function PK(J,Q,$,W){let Z={},H=new WeakMap;function K(k){let X=k.target;if(X.index!==null)Q.remove(X.index);for(let M in X.attributes)Q.remove(X.attributes[M]);X.removeEventListener("dispose",K),delete Z[X.id];let q=H.get(X);if(q)Q.remove(q),H.delete(X);if(W.releaseStatesOfGeometry(X),X.isInstancedBufferGeometry===!0)delete X._maxInstanceCount;$.memory.geometries--}function Y(k,X){if(Z[X.id]===!0)return X;return X.addEventListener("dispose",K),Z[X.id]=!0,$.memory.geometries++,X}function U(k){let X=k.attributes;for(let q in X)Q.update(X[q],J.ARRAY_BUFFER)}function E(k){let X=[],q=k.index,M=k.attributes.position,I=0;if(M===void 0)return;if(q!==null){let L=q.array;I=q.version;for(let w=0,z=L.length;w<z;w+=3){let P=L[w+0],C=L[w+1],_=L[w+2];X.push(P,C,C,_,_,P)}}else{let L=M.array;I=M.version;for(let w=0,z=L.length/3-1;w<z;w+=3){let P=w+0,C=w+1,_=w+2;X.push(P,C,C,_,_,P)}}let N=new(M.count>=65535?dJ:pJ)(X,1);N.version=I;let G=H.get(k);if(G)Q.remove(G);H.set(k,N)}function F(k){let X=H.get(k);if(X){let q=k.index;if(q!==null){if(X.version<q.version)E(k)}}else E(k);return H.get(k)}return{get:Y,update:U,getWireframeAttribute:F}}function TK(J,Q,$){let W;function Z(k){W=k}let H,K;function Y(k){H=k.type,K=k.bytesPerElement}function U(k,X){J.drawElements(W,X,H,k*K),$.update(X,W,1)}function E(k,X,q){if(q===0)return;J.drawElementsInstanced(W,X,H,k*K,q),$.update(X,W,q)}function F(k,X,q){if(q===0)return;Q.get("WEBGL_multi_draw").multiDrawElementsWEBGL(W,X,0,H,k,0,q);let I=0;for(let N=0;N<q;N++)I+=X[N];$.update(I,W,1)}this.setMode=Z,this.setIndex=Y,this.render=U,this.renderInstances=E,this.renderMultiDraw=F}function SK(J){let Q={geometries:0,textures:0},$={frame:0,calls:0,triangles:0,points:0,lines:0};function W(H,K,Y){switch($.calls++,K){case J.TRIANGLES:$.triangles+=Y*(H/3);break;case J.LINES:$.lines+=Y*(H/2);break;case J.LINE_STRIP:$.lines+=Y*(H-1);break;case J.LINE_LOOP:$.lines+=Y*H;break;case J.POINTS:$.points+=Y*H;break;default:_0("WebGLInfo: Unknown draw mode:",K);break}}function Z(){$.calls=0,$.triangles=0,$.points=0,$.lines=0}return{memory:Q,render:$,programs:null,autoReset:!0,reset:Z,update:W}}function jK(J,Q,$){let W=new WeakMap,Z=new Y8;function H(K,Y,U){let E=K.morphTargetInfluences,F=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,k=F!==void 0?F.length:0,X=W.get(Y);if(X===void 0||X.count!==k){let B=function(){_.dispose(),W.delete(Y),Y.removeEventListener("dispose",B)};if(X!==void 0)X.texture.dispose();let q=Y.morphAttributes.position!==void 0,M=Y.morphAttributes.normal!==void 0,I=Y.morphAttributes.color!==void 0,N=Y.morphAttributes.position||[],G=Y.morphAttributes.normal||[],L=Y.morphAttributes.color||[],w=0;if(q===!0)w=1;if(M===!0)w=2;if(I===!0)w=3;let z=Y.attributes.position.count*w,P=1;if(z>Q.maxTextureSize)P=Math.ceil(z/Q.maxTextureSize),z=Q.maxTextureSize;let C=new Float32Array(z*P*4*k),_=new hJ(C,z,P,k);_.type=N6,_.needsUpdate=!0;let D=w*4;for(let d=0;d<k;d++){let A=N[d],l=G[d],i=L[d],b=z*P*4*d;for(let u=0;u<A.count;u++){let x=u*D;if(q===!0)Z.fromBufferAttribute(A,u),C[b+x+0]=Z.x,C[b+x+1]=Z.y,C[b+x+2]=Z.z,C[b+x+3]=0;if(M===!0)Z.fromBufferAttribute(l,u),C[b+x+4]=Z.x,C[b+x+5]=Z.y,C[b+x+6]=Z.z,C[b+x+7]=0;if(I===!0)Z.fromBufferAttribute(i,u),C[b+x+8]=Z.x,C[b+x+9]=Z.y,C[b+x+10]=Z.z,C[b+x+11]=i.itemSize===4?Z.w:1}}X={count:k,texture:_,size:new c0(z,P)},W.set(Y,X),Y.addEventListener("dispose",B)}if(K.isInstancedMesh===!0&&K.morphTexture!==null)U.getUniforms().setValue(J,"morphTexture",K.morphTexture,$);else{let q=0;for(let I=0;I<E.length;I++)q+=E[I];let M=Y.morphTargetsRelative?1:1-q;U.getUniforms().setValue(J,"morphTargetBaseInfluence",M),U.getUniforms().setValue(J,"morphTargetInfluences",E)}U.getUniforms().setValue(J,"morphTargetsTexture",X.texture,$),U.getUniforms().setValue(J,"morphTargetsTextureSize",X.size)}return{update:H}}function vK(J,Q,$,W,Z){let H=new WeakMap;function K(E){let F=Z.render.frame,k=E.geometry,X=Q.get(E,k);if(H.get(X)!==F)Q.update(X),H.set(X,F);if(E.isInstancedMesh){if(E.hasEventListener("dispose",U)===!1)E.addEventListener("dispose",U);if(H.get(E)!==F){if($.update(E.instanceMatrix,J.ARRAY_BUFFER),E.instanceColor!==null)$.update(E.instanceColor,J.ARRAY_BUFFER);H.set(E,F)}}if(E.isSkinnedMesh){let q=E.skeleton;if(H.get(q)!==F)q.update(),H.set(q,F)}return X}function Y(){H=new WeakMap}function U(E){let F=E.target;if(F.removeEventListener("dispose",U),W.releaseStatesOfObject(F),$.remove(F.instanceMatrix),F.instanceColor!==null)$.remove(F.instanceColor)}return{update:K,dispose:Y}}var fK={[y7]:"LINEAR_TONE_MAPPING",[h7]:"REINHARD_TONE_MAPPING",[x7]:"CINEON_TONE_MAPPING",[g7]:"ACES_FILMIC_TONE_MAPPING",[d7]:"AGX_TONE_MAPPING",[l7]:"NEUTRAL_TONE_MAPPING",[p7]:"CUSTOM_TONE_MAPPING"};function bK(J,Q,$,W,Z){let H=new p8(Q,$,{type:J,depthBuffer:W,stencilBuffer:Z,depthTexture:W?new _6(Q,$):void 0}),K=new p8(Q,$,{type:k6,depthBuffer:!1,stencilBuffer:!1}),Y=new L8;Y.setAttribute("position",new G8([-1,3,0,-1,-1,0,3,-1,0],3)),Y.setAttribute("uv",new G8([0,2,0,0,2,0],2));let U=new g5({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),E=new P8(Y,U),F=new l9(-1,1,1,-1,0,1),k=null,X=null,q=!1,M,I=null,N=[],G=!1;this.setSize=function(L,w){H.setSize(L,w),K.setSize(L,w);for(let z=0;z<N.length;z++){let P=N[z];if(P.setSize)P.setSize(L,w)}},this.setEffects=function(L){N=L,G=N.length>0&&N[0].isRenderPass===!0;let{width:w,height:z}=H;for(let P=0;P<N.length;P++){let C=N[P];if(C.setSize)C.setSize(w,z)}},this.begin=function(L,w){if(q)return!1;if(L.toneMapping===s8&&N.length===0)return!1;if(I=w,w!==null){let{width:z,height:P}=w;if(H.width!==z||H.height!==P)this.setSize(z,P)}if(G===!1)L.setRenderTarget(H);return M=L.toneMapping,L.toneMapping=s8,!0},this.hasRenderPass=function(){return G},this.end=function(L,w){L.toneMapping=M,q=!0;let z=H,P=K;for(let C=0;C<N.length;C++){let _=N[C];if(_.enabled===!1)continue;if(_.render(L,P,z,w),_.needsSwap!==!1){let D=z;z=P,P=D}}if(k!==L.outputColorSpace||X!==L.toneMapping){if(k=L.outputColorSpace,X=L.toneMapping,U.defines={},l0.getTransfer(k)===W8)U.defines.SRGB_TRANSFER="";let C=fK[X];if(C)U.defines[C]="";U.needsUpdate=!0}U.uniforms.tDiffuse.value=z.texture,L.setRenderTarget(I),L.render(E,F),I=null,q=!1},this.isCompositing=function(){return q},this.dispose=function(){if(H.depthTexture)H.depthTexture.dispose();H.dispose(),K.dispose(),Y.dispose(),U.dispose()}}var v$=new C8,NQ=new _6(1,1),f$=new hJ,b$=new v5,y$=new uJ,F$=[],q$=[],D$=new Float32Array(16),R$=new Float32Array(9),O$=new Float32Array(4);function M9(J,Q,$){let W=J[0];if(W<=0||W>0)return J;let Z=Q*$,H=F$[Z];if(H===void 0)H=new Float32Array(Z),F$[Z]=H;if(Q!==0){W.toArray(H,0);for(let K=1,Y=0;K!==Q;++K)Y+=$,J[K].toArray(H,Y)}return H}function D8(J,Q){if(J.length!==Q.length)return!1;for(let $=0,W=J.length;$<W;$++)if(J[$]!==Q[$])return!1;return!0}function R8(J,Q){for(let $=0,W=Q.length;$<W;$++)J[$]=Q[$]}function W7(J,Q){let $=q$[Q];if($===void 0)$=new Int32Array(Q),q$[Q]=$;for(let W=0;W!==Q;++W)$[W]=J.allocateTextureUnit();return $}function yK(J,Q){let $=this.cache;if($[0]===Q)return;J.uniform1f(this.addr,Q),$[0]=Q}function hK(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y)J.uniform2f(this.addr,Q.x,Q.y),$[0]=Q.x,$[1]=Q.y}else{if(D8($,Q))return;J.uniform2fv(this.addr,Q),R8($,Q)}}function xK(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z)J.uniform3f(this.addr,Q.x,Q.y,Q.z),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z}else if(Q.r!==void 0){if($[0]!==Q.r||$[1]!==Q.g||$[2]!==Q.b)J.uniform3f(this.addr,Q.r,Q.g,Q.b),$[0]=Q.r,$[1]=Q.g,$[2]=Q.b}else{if(D8($,Q))return;J.uniform3fv(this.addr,Q),R8($,Q)}}function gK(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z||$[3]!==Q.w)J.uniform4f(this.addr,Q.x,Q.y,Q.z,Q.w),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z,$[3]=Q.w}else{if(D8($,Q))return;J.uniform4fv(this.addr,Q),R8($,Q)}}function pK(J,Q){let $=this.cache,W=Q.elements;if(W===void 0){if(D8($,Q))return;J.uniformMatrix2fv(this.addr,!1,Q),R8($,Q)}else{if(D8($,W))return;O$.set(W),J.uniformMatrix2fv(this.addr,!1,O$),R8($,W)}}function dK(J,Q){let $=this.cache,W=Q.elements;if(W===void 0){if(D8($,Q))return;J.uniformMatrix3fv(this.addr,!1,Q),R8($,Q)}else{if(D8($,W))return;R$.set(W),J.uniformMatrix3fv(this.addr,!1,R$),R8($,W)}}function lK(J,Q){let $=this.cache,W=Q.elements;if(W===void 0){if(D8($,Q))return;J.uniformMatrix4fv(this.addr,!1,Q),R8($,Q)}else{if(D8($,W))return;D$.set(W),J.uniformMatrix4fv(this.addr,!1,D$),R8($,W)}}function mK(J,Q){let $=this.cache;if($[0]===Q)return;J.uniform1i(this.addr,Q),$[0]=Q}function uK(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y)J.uniform2i(this.addr,Q.x,Q.y),$[0]=Q.x,$[1]=Q.y}else{if(D8($,Q))return;J.uniform2iv(this.addr,Q),R8($,Q)}}function cK(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z)J.uniform3i(this.addr,Q.x,Q.y,Q.z),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z}else{if(D8($,Q))return;J.uniform3iv(this.addr,Q),R8($,Q)}}function nK(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z||$[3]!==Q.w)J.uniform4i(this.addr,Q.x,Q.y,Q.z,Q.w),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z,$[3]=Q.w}else{if(D8($,Q))return;J.uniform4iv(this.addr,Q),R8($,Q)}}function sK(J,Q){let $=this.cache;if($[0]===Q)return;J.uniform1ui(this.addr,Q),$[0]=Q}function iK(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y)J.uniform2ui(this.addr,Q.x,Q.y),$[0]=Q.x,$[1]=Q.y}else{if(D8($,Q))return;J.uniform2uiv(this.addr,Q),R8($,Q)}}function oK(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z)J.uniform3ui(this.addr,Q.x,Q.y,Q.z),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z}else{if(D8($,Q))return;J.uniform3uiv(this.addr,Q),R8($,Q)}}function aK(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z||$[3]!==Q.w)J.uniform4ui(this.addr,Q.x,Q.y,Q.z,Q.w),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z,$[3]=Q.w}else{if(D8($,Q))return;J.uniform4uiv(this.addr,Q),R8($,Q)}}function rK(J,Q,$){let W=this.cache,Z=$.allocateTextureUnit();if(W[0]!==Z)J.uniform1i(this.addr,Z),W[0]=Z;let H;if(this.type===J.SAMPLER_2D_SHADOW)NQ.compareFunction=$.isReversedDepthBuffer()?yJ:bJ,H=NQ;else H=v$;$.setTexture2D(Q||H,Z)}function tK(J,Q,$){let W=this.cache,Z=$.allocateTextureUnit();if(W[0]!==Z)J.uniform1i(this.addr,Z),W[0]=Z;$.setTexture3D(Q||b$,Z)}function eK(J,Q,$){let W=this.cache,Z=$.allocateTextureUnit();if(W[0]!==Z)J.uniform1i(this.addr,Z),W[0]=Z;$.setTextureCube(Q||y$,Z)}function JY(J,Q,$){let W=this.cache,Z=$.allocateTextureUnit();if(W[0]!==Z)J.uniform1i(this.addr,Z),W[0]=Z;$.setTexture2DArray(Q||f$,Z)}function QY(J){switch(J){case 5126:return yK;case 35664:return hK;case 35665:return xK;case 35666:return gK;case 35674:return pK;case 35675:return dK;case 35676:return lK;case 5124:case 35670:return mK;case 35667:case 35671:return uK;case 35668:case 35672:return cK;case 35669:case 35673:return nK;case 5125:return sK;case 36294:return iK;case 36295:return oK;case 36296:return aK;case 35678:case 36198:case 36298:case 36306:case 35682:return rK;case 35679:case 36299:case 36307:return tK;case 35680:case 36300:case 36308:case 36293:return eK;case 36289:case 36303:case 36311:case 36292:return JY}}function $Y(J,Q){J.uniform1fv(this.addr,Q)}function WY(J,Q){let $=M9(Q,this.size,2);J.uniform2fv(this.addr,$)}function ZY(J,Q){let $=M9(Q,this.size,3);J.uniform3fv(this.addr,$)}function HY(J,Q){let $=M9(Q,this.size,4);J.uniform4fv(this.addr,$)}function KY(J,Q){let $=M9(Q,this.size,4);J.uniformMatrix2fv(this.addr,!1,$)}function YY(J,Q){let $=M9(Q,this.size,9);J.uniformMatrix3fv(this.addr,!1,$)}function UY(J,Q){let $=M9(Q,this.size,16);J.uniformMatrix4fv(this.addr,!1,$)}function EY(J,Q){J.uniform1iv(this.addr,Q)}function XY(J,Q){J.uniform2iv(this.addr,Q)}function GY(J,Q){J.uniform3iv(this.addr,Q)}function NY(J,Q){J.uniform4iv(this.addr,Q)}function kY(J,Q){J.uniform1uiv(this.addr,Q)}function FY(J,Q){J.uniform2uiv(this.addr,Q)}function qY(J,Q){J.uniform3uiv(this.addr,Q)}function DY(J,Q){J.uniform4uiv(this.addr,Q)}function RY(J,Q,$){let W=this.cache,Z=Q.length,H=W7($,Z);if(!D8(W,H))J.uniform1iv(this.addr,H),R8(W,H);let K;if(this.type===J.SAMPLER_2D_SHADOW)K=NQ;else K=v$;for(let Y=0;Y!==Z;++Y)$.setTexture2D(Q[Y]||K,H[Y])}function OY(J,Q,$){let W=this.cache,Z=Q.length,H=W7($,Z);if(!D8(W,H))J.uniform1iv(this.addr,H),R8(W,H);for(let K=0;K!==Z;++K)$.setTexture3D(Q[K]||b$,H[K])}function MY(J,Q,$){let W=this.cache,Z=Q.length,H=W7($,Z);if(!D8(W,H))J.uniform1iv(this.addr,H),R8(W,H);for(let K=0;K!==Z;++K)$.setTextureCube(Q[K]||y$,H[K])}function LY(J,Q,$){let W=this.cache,Z=Q.length,H=W7($,Z);if(!D8(W,H))J.uniform1iv(this.addr,H),R8(W,H);for(let K=0;K!==Z;++K)$.setTexture2DArray(Q[K]||f$,H[K])}function BY(J){switch(J){case 5126:return $Y;case 35664:return WY;case 35665:return ZY;case 35666:return HY;case 35674:return KY;case 35675:return YY;case 35676:return UY;case 5124:case 35670:return EY;case 35667:case 35671:return XY;case 35668:case 35672:return GY;case 35669:case 35673:return NY;case 5125:return kY;case 36294:return FY;case 36295:return qY;case 36296:return DY;case 35678:case 36198:case 36298:case 36306:case 35682:return RY;case 35679:case 36299:case 36307:return OY;case 35680:case 36300:case 36308:case 36293:return MY;case 36289:case 36303:case 36311:case 36292:return LY}}class h${constructor(J,Q,$){this.id=J,this.addr=$,this.cache=[],this.type=Q.type,this.setValue=QY(Q.type)}}class x${constructor(J,Q,$){this.id=J,this.addr=$,this.cache=[],this.type=Q.type,this.size=Q.size,this.setValue=BY(Q.type)}}class g${constructor(J){this.id=J,this.seq=[],this.map={}}setValue(J,Q,$){let W=this.seq;for(let Z=0,H=W.length;Z!==H;++Z){let K=W[Z];K.setValue(J,Q[K.id],$)}}}var EQ=/(\w+)(\])?(\[|\.)?/g;function M$(J,Q){J.seq.push(Q),J.map[Q.id]=Q}function VY(J,Q,$){let W=J.name,Z=W.length;EQ.lastIndex=0;while(!0){let H=EQ.exec(W),K=EQ.lastIndex,Y=H[1],U=H[2]==="]",E=H[3];if(U)Y=Y|0;if(E===void 0||E==="["&&K+2===Z){M$($,E===void 0?new h$(Y,J,Q):new x$(Y,J,Q));break}else{let k=$.map[Y];if(k===void 0)k=new g$(Y),M$($,k);$=k}}}class n9{constructor(J,Q){this.seq=[],this.map={};let $=J.getProgramParameter(Q,J.ACTIVE_UNIFORMS);for(let H=0;H<$;++H){let K=J.getActiveUniform(Q,H),Y=J.getUniformLocation(Q,K.name);VY(K,Y,this)}let W=[],Z=[];for(let H of this.seq)if(H.type===J.SAMPLER_2D_SHADOW||H.type===J.SAMPLER_CUBE_SHADOW||H.type===J.SAMPLER_2D_ARRAY_SHADOW)W.push(H);else Z.push(H);if(W.length>0)this.seq=W.concat(Z)}setValue(J,Q,$,W){let Z=this.map[Q];if(Z!==void 0)Z.setValue(J,$,W)}setOptional(J,Q,$){let W=Q[$];if(W!==void 0)this.setValue(J,$,W)}static upload(J,Q,$,W){for(let Z=0,H=Q.length;Z!==H;++Z){let K=Q[Z],Y=$[K.id];if(Y.needsUpdate!==!1)K.setValue(J,Y.value,W)}}static seqWithValue(J,Q){let $=[];for(let W=0,Z=J.length;W!==Z;++W){let H=J[W];if(H.id in Q)$.push(H)}return $}}function L$(J,Q,$){let W=J.createShader(Q);return J.shaderSource(W,$),J.compileShader(W),W}var wY=37297,zY=0;function IY(J,Q){let $=J.split(`
`),W=[],Z=Math.max(Q-6,0),H=Math.min(Q+6,$.length);for(let K=Z;K<H;K++){let Y=K+1;W.push(`${Y===Q?">":" "} ${Y}: ${$[K]}`)}return W.join(`
`)}var B$=new T0;function CY(J){l0._getMatrix(B$,l0.workingColorSpace,J);let Q=`mat3( ${B$.elements.map(($)=>$.toFixed(4))} )`;switch(l0.getTransfer(J)){case A5:return[Q,"LinearTransferOETF"];case W8:return[Q,"sRGBTransferOETF"];default:return I0("WebGLProgram: Unsupported color space: ",J),[Q,"LinearTransferOETF"]}}function V$(J,Q,$){let W=J.getShaderParameter(Q,J.COMPILE_STATUS),H=(J.getShaderInfoLog(Q)||"").trim();if(W&&H==="")return"";let K=/ERROR: 0:(\d+)/.exec(H);if(K){let Y=parseInt(K[1]);return $.toUpperCase()+`

`+H+`

`+IY(J.getShaderSource(Q),Y)}else return H}function AY(J,Q){let $=CY(Q);return[`vec4 ${J}( vec4 value ) {`,`	return ${$[1]}( vec4( value.rgb * ${$[0]}, value.a ) );`,"}"].join(`
`)}var _Y={[y7]:"Linear",[h7]:"Reinhard",[x7]:"Cineon",[g7]:"ACESFilmic",[d7]:"AgX",[l7]:"Neutral",[p7]:"Custom"};function PY(J,Q){let $=_Y[Q];if($===void 0)return I0("WebGLProgram: Unsupported toneMapping:",Q),"vec3 "+J+"( vec3 color ) { return LinearToneMapping( color ); }";return"vec3 "+J+"( vec3 color ) { return "+$+"ToneMapping( color ); }"}var Q7=new v;function TY(){l0.getLuminanceCoefficients(Q7);let J=Q7.x.toFixed(4),Q=Q7.y.toFixed(4),$=Q7.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${J}, ${Q}, ${$} );`,"\treturn dot( weights, rgb );","}"].join(`
`)}function SY(J){return[J.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",J.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(c9).join(`
`)}function jY(J){let Q=[];for(let $ in J){let W=J[$];if(W===!1)continue;Q.push("#define "+$+" "+W)}return Q.join(`
`)}function vY(J,Q){let $={},W=J.getProgramParameter(Q,J.ACTIVE_ATTRIBUTES);for(let Z=0;Z<W;Z++){let H=J.getActiveAttrib(Q,Z),K=H.name,Y=1;if(H.type===J.FLOAT_MAT2)Y=2;if(H.type===J.FLOAT_MAT3)Y=3;if(H.type===J.FLOAT_MAT4)Y=4;$[K]={type:H.type,location:J.getAttribLocation(Q,K),locationSize:Y}}return $}function c9(J){return J!==""}function w$(J,Q){let $=Q.numSpotLightShadows+Q.numSpotLightMaps-Q.numSpotLightShadowsWithMaps;return J.replace(/NUM_DIR_LIGHTS/g,Q.numDirLights).replace(/NUM_SPOT_LIGHTS/g,Q.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,Q.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,$).replace(/NUM_RECT_AREA_LIGHTS/g,Q.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,Q.numPointLights).replace(/NUM_HEMI_LIGHTS/g,Q.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,Q.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,Q.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,Q.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,Q.numPointLightShadows)}function z$(J,Q){return J.replace(/NUM_CLIPPING_PLANES/g,Q.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,Q.numClippingPlanes-Q.numClipIntersection)}var fY=/^[ \t]*#include +<([\w\d./]+)>/gm;function kQ(J){return J.replace(fY,yY)}var bY=new Map;function yY(J,Q){let $=y0[Q];if($===void 0){let W=bY.get(Q);if(W!==void 0)$=y0[W],I0('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',Q,W);else throw Error("Can not resolve #include <"+Q+">")}return kQ($)}var hY=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function I$(J){return J.replace(hY,xY)}function xY(J,Q,$,W){let Z="";for(let H=parseInt(Q);H<parseInt($);H++)Z+=W.replace(/\[\s*i\s*\]/g,"[ "+H+" ]").replace(/UNROLLED_LOOP_INDEX/g,H);return Z}function C$(J){let Q=`precision ${J.precision} float;
	precision ${J.precision} int;
	precision ${J.precision} sampler2D;
	precision ${J.precision} samplerCube;
	precision ${J.precision} sampler3D;
	precision ${J.precision} sampler2DArray;
	precision ${J.precision} sampler2DShadow;
	precision ${J.precision} samplerCubeShadow;
	precision ${J.precision} sampler2DArrayShadow;
	precision ${J.precision} isampler2D;
	precision ${J.precision} isampler3D;
	precision ${J.precision} isamplerCube;
	precision ${J.precision} isampler2DArray;
	precision ${J.precision} usampler2D;
	precision ${J.precision} usampler3D;
	precision ${J.precision} usamplerCube;
	precision ${J.precision} usampler2DArray;
	`;if(J.precision==="highp")Q+=`
#define HIGH_PRECISION`;else if(J.precision==="mediump")Q+=`
#define MEDIUM_PRECISION`;else if(J.precision==="lowp")Q+=`
#define LOW_PRECISION`;return Q}var gY={[A9]:"SHADOWMAP_TYPE_PCF",[G9]:"SHADOWMAP_TYPE_VSM"};function pY(J){return gY[J.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var dY={[F9]:"ENVMAP_TYPE_CUBE",[b6]:"ENVMAP_TYPE_CUBE",[P9]:"ENVMAP_TYPE_CUBE_UV"};function lY(J){if(J.envMap===!1)return"ENVMAP_TYPE_CUBE";return dY[J.envMapMode]||"ENVMAP_TYPE_CUBE"}var mY={[b6]:"ENVMAP_MODE_REFRACTION"};function uY(J){if(J.envMap===!1)return"ENVMAP_MODE_REFLECTION";return mY[J.envMapMode]||"ENVMAP_MODE_REFLECTION"}var cY={[j1]:"ENVMAP_BLENDING_MULTIPLY",[v1]:"ENVMAP_BLENDING_MIX",[f1]:"ENVMAP_BLENDING_ADD"};function nY(J){if(J.envMap===!1)return"ENVMAP_BLENDING_NONE";return cY[J.combine]||"ENVMAP_BLENDING_NONE"}function sY(J){let Q=J.envMapCubeUVHeight;if(Q===null)return null;let $=Math.log2(Q)-2,W=1/Q;return{texelWidth:1/(3*Math.max(Math.pow(2,$),112)),texelHeight:W,maxMip:$}}function iY(J,Q,$,W){let Z=J.getContext(),H=$.defines,K=$.vertexShader,Y=$.fragmentShader,U=pY($),E=lY($),F=uY($),k=nY($),X=sY($),q=SY($),M=jY(H),I=Z.createProgram(),N,G,L=$.glslVersion?"#version "+$.glslVersion+`
`:"";if($.isRawShaderMaterial){if(N=["#define SHADER_TYPE "+$.shaderType,"#define SHADER_NAME "+$.shaderName,M].filter(c9).join(`
`),N.length>0)N+=`
`;if(G=["#define SHADER_TYPE "+$.shaderType,"#define SHADER_NAME "+$.shaderName,M].filter(c9).join(`
`),G.length>0)G+=`
`}else N=[C$($),"#define SHADER_TYPE "+$.shaderType,"#define SHADER_NAME "+$.shaderName,M,$.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",$.batching?"#define USE_BATCHING":"",$.batchingColor?"#define USE_BATCHING_COLOR":"",$.instancing?"#define USE_INSTANCING":"",$.instancingColor?"#define USE_INSTANCING_COLOR":"",$.instancingMorph?"#define USE_INSTANCING_MORPH":"",$.useFog&&$.fog?"#define USE_FOG":"",$.useFog&&$.fogExp2?"#define FOG_EXP2":"",$.map?"#define USE_MAP":"",$.envMap?"#define USE_ENVMAP":"",$.envMap?"#define "+F:"",$.lightMap?"#define USE_LIGHTMAP":"",$.aoMap?"#define USE_AOMAP":"",$.bumpMap?"#define USE_BUMPMAP":"",$.normalMap?"#define USE_NORMALMAP":"",$.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",$.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",$.displacementMap?"#define USE_DISPLACEMENTMAP":"",$.emissiveMap?"#define USE_EMISSIVEMAP":"",$.anisotropy?"#define USE_ANISOTROPY":"",$.anisotropyMap?"#define USE_ANISOTROPYMAP":"",$.clearcoatMap?"#define USE_CLEARCOATMAP":"",$.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",$.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",$.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",$.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",$.specularMap?"#define USE_SPECULARMAP":"",$.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",$.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",$.roughnessMap?"#define USE_ROUGHNESSMAP":"",$.metalnessMap?"#define USE_METALNESSMAP":"",$.alphaMap?"#define USE_ALPHAMAP":"",$.alphaHash?"#define USE_ALPHAHASH":"",$.transmission?"#define USE_TRANSMISSION":"",$.transmissionMap?"#define USE_TRANSMISSIONMAP":"",$.thicknessMap?"#define USE_THICKNESSMAP":"",$.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",$.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",$.mapUv?"#define MAP_UV "+$.mapUv:"",$.alphaMapUv?"#define ALPHAMAP_UV "+$.alphaMapUv:"",$.lightMapUv?"#define LIGHTMAP_UV "+$.lightMapUv:"",$.aoMapUv?"#define AOMAP_UV "+$.aoMapUv:"",$.emissiveMapUv?"#define EMISSIVEMAP_UV "+$.emissiveMapUv:"",$.bumpMapUv?"#define BUMPMAP_UV "+$.bumpMapUv:"",$.normalMapUv?"#define NORMALMAP_UV "+$.normalMapUv:"",$.displacementMapUv?"#define DISPLACEMENTMAP_UV "+$.displacementMapUv:"",$.metalnessMapUv?"#define METALNESSMAP_UV "+$.metalnessMapUv:"",$.roughnessMapUv?"#define ROUGHNESSMAP_UV "+$.roughnessMapUv:"",$.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+$.anisotropyMapUv:"",$.clearcoatMapUv?"#define CLEARCOATMAP_UV "+$.clearcoatMapUv:"",$.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+$.clearcoatNormalMapUv:"",$.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+$.clearcoatRoughnessMapUv:"",$.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+$.iridescenceMapUv:"",$.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+$.iridescenceThicknessMapUv:"",$.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+$.sheenColorMapUv:"",$.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+$.sheenRoughnessMapUv:"",$.specularMapUv?"#define SPECULARMAP_UV "+$.specularMapUv:"",$.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+$.specularColorMapUv:"",$.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+$.specularIntensityMapUv:"",$.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+$.transmissionMapUv:"",$.thicknessMapUv?"#define THICKNESSMAP_UV "+$.thicknessMapUv:"",$.vertexTangents&&$.flatShading===!1?"#define USE_TANGENT":"",$.vertexNormals?"#define HAS_NORMAL":"",$.vertexColors?"#define USE_COLOR":"",$.vertexAlphas?"#define USE_COLOR_ALPHA":"",$.vertexUv1s?"#define USE_UV1":"",$.vertexUv2s?"#define USE_UV2":"",$.vertexUv3s?"#define USE_UV3":"",$.pointsUvs?"#define USE_POINTS_UV":"",$.flatShading?"#define FLAT_SHADED":"",$.skinning?"#define USE_SKINNING":"",$.morphTargets?"#define USE_MORPHTARGETS":"",$.morphNormals&&$.flatShading===!1?"#define USE_MORPHNORMALS":"",$.morphColors?"#define USE_MORPHCOLORS":"",$.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+$.morphTextureStride:"",$.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+$.morphTargetsCount:"",$.doubleSided?"#define DOUBLE_SIDED":"",$.flipSided?"#define FLIP_SIDED":"",$.shadowMapEnabled?"#define USE_SHADOWMAP":"",$.shadowMapEnabled?"#define "+U:"",$.sizeAttenuation?"#define USE_SIZEATTENUATION":"",$.numLightProbes>0?"#define USE_LIGHT_PROBES":"",$.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",$.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","\tattribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","\tattribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","\tuniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","\tattribute vec2 uv1;","#endif","#ifdef USE_UV2","\tattribute vec2 uv2;","#endif","#ifdef USE_UV3","\tattribute vec2 uv3;","#endif","#ifdef USE_TANGENT","\tattribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","\tattribute vec4 color;","#elif defined( USE_COLOR )","\tattribute vec3 color;","#endif","#ifdef USE_SKINNING","\tattribute vec4 skinIndex;","\tattribute vec4 skinWeight;","#endif",`
`].filter(c9).join(`
`),G=[C$($),"#define SHADER_TYPE "+$.shaderType,"#define SHADER_NAME "+$.shaderName,M,$.useFog&&$.fog?"#define USE_FOG":"",$.useFog&&$.fogExp2?"#define FOG_EXP2":"",$.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",$.map?"#define USE_MAP":"",$.matcap?"#define USE_MATCAP":"",$.envMap?"#define USE_ENVMAP":"",$.envMap?"#define "+E:"",$.envMap?"#define "+F:"",$.envMap?"#define "+k:"",X?"#define CUBEUV_TEXEL_WIDTH "+X.texelWidth:"",X?"#define CUBEUV_TEXEL_HEIGHT "+X.texelHeight:"",X?"#define CUBEUV_MAX_MIP "+X.maxMip+".0":"",$.lightMap?"#define USE_LIGHTMAP":"",$.aoMap?"#define USE_AOMAP":"",$.bumpMap?"#define USE_BUMPMAP":"",$.normalMap?"#define USE_NORMALMAP":"",$.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",$.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",$.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",$.emissiveMap?"#define USE_EMISSIVEMAP":"",$.anisotropy?"#define USE_ANISOTROPY":"",$.anisotropyMap?"#define USE_ANISOTROPYMAP":"",$.clearcoat?"#define USE_CLEARCOAT":"",$.clearcoatMap?"#define USE_CLEARCOATMAP":"",$.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",$.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",$.dispersion?"#define USE_DISPERSION":"",$.iridescence?"#define USE_IRIDESCENCE":"",$.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",$.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",$.specularMap?"#define USE_SPECULARMAP":"",$.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",$.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",$.roughnessMap?"#define USE_ROUGHNESSMAP":"",$.metalnessMap?"#define USE_METALNESSMAP":"",$.alphaMap?"#define USE_ALPHAMAP":"",$.alphaTest?"#define USE_ALPHATEST":"",$.alphaHash?"#define USE_ALPHAHASH":"",$.sheen?"#define USE_SHEEN":"",$.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",$.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",$.transmission?"#define USE_TRANSMISSION":"",$.transmissionMap?"#define USE_TRANSMISSIONMAP":"",$.thicknessMap?"#define USE_THICKNESSMAP":"",$.vertexTangents&&$.flatShading===!1?"#define USE_TANGENT":"",$.vertexColors||$.instancingColor?"#define USE_COLOR":"",$.vertexAlphas||$.batchingColor?"#define USE_COLOR_ALPHA":"",$.vertexUv1s?"#define USE_UV1":"",$.vertexUv2s?"#define USE_UV2":"",$.vertexUv3s?"#define USE_UV3":"",$.pointsUvs?"#define USE_POINTS_UV":"",$.gradientMap?"#define USE_GRADIENTMAP":"",$.flatShading?"#define FLAT_SHADED":"",$.doubleSided?"#define DOUBLE_SIDED":"",$.flipSided?"#define FLIP_SIDED":"",$.shadowMapEnabled?"#define USE_SHADOWMAP":"",$.shadowMapEnabled?"#define "+U:"",$.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",$.numLightProbes>0?"#define USE_LIGHT_PROBES":"",$.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",$.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",$.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",$.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",$.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",$.toneMapping!==s8?"#define TONE_MAPPING":"",$.toneMapping!==s8?y0.tonemapping_pars_fragment:"",$.toneMapping!==s8?PY("toneMapping",$.toneMapping):"",$.dithering?"#define DITHERING":"",$.opaque?"#define OPAQUE":"",y0.colorspace_pars_fragment,AY("linearToOutputTexel",$.outputColorSpace),TY(),$.useDepthPacking?"#define DEPTH_PACKING "+$.depthPacking:"",`
`].filter(c9).join(`
`);if(K=kQ(K),K=w$(K,$),K=z$(K,$),Y=kQ(Y),Y=w$(Y,$),Y=z$(Y,$),K=I$(K),Y=I$(Y),$.isRawShaderMaterial!==!0)L=`#version 300 es
`,N=[q,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+N,G=["#define varying in",$.glslVersion===_5?"":"layout(location = 0) out highp vec4 pc_fragColor;",$.glslVersion===_5?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+G;let w=L+N+K,z=L+G+Y,P=L$(Z,Z.VERTEX_SHADER,w),C=L$(Z,Z.FRAGMENT_SHADER,z);if(Z.attachShader(I,P),Z.attachShader(I,C),$.index0AttributeName!==void 0)Z.bindAttribLocation(I,0,$.index0AttributeName);else if($.morphTargets===!0)Z.bindAttribLocation(I,0,"position");Z.linkProgram(I);function _(A){if(J.debug.checkShaderErrors){let l=Z.getProgramInfoLog(I)||"",i=Z.getShaderInfoLog(P)||"",b=Z.getShaderInfoLog(C)||"",u=l.trim(),x=i.trim(),p=b.trim(),a=!0,Q0=!0;if(Z.getProgramParameter(I,Z.LINK_STATUS)===!1)if(a=!1,typeof J.debug.onShaderError==="function")J.debug.onShaderError(Z,I,P,C);else{let k0=V$(Z,P,"vertex"),z0=V$(Z,C,"fragment");_0("THREE.WebGLProgram: Shader Error "+Z.getError()+" - VALIDATE_STATUS "+Z.getProgramParameter(I,Z.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+u+`
`+k0+`
`+z0)}else if(u!=="")I0("WebGLProgram: Program Info Log:",u);else if(x===""||p==="")Q0=!1;if(Q0)A.diagnostics={runnable:a,programLog:u,vertexShader:{log:x,prefix:N},fragmentShader:{log:p,prefix:G}}}Z.deleteShader(P),Z.deleteShader(C),D=new n9(Z,I),B=vY(Z,I)}let D;this.getUniforms=function(){if(D===void 0)_(this);return D};let B;this.getAttributes=function(){if(B===void 0)_(this);return B};let d=$.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){if(d===!1)d=Z.getProgramParameter(I,wY);return d},this.destroy=function(){W.releaseStatesOfProgram(this),Z.deleteProgram(I),this.program=void 0},this.type=$.shaderType,this.name=$.shaderName,this.id=zY++,this.cacheKey=Q,this.usedTimes=1,this.program=I,this.vertexShader=P,this.fragmentShader=C,this}var oY=0;class p${constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(J){let{vertexShader:Q,fragmentShader:$}=J,W=this._getShaderStage(Q),Z=this._getShaderStage($),H=this._getShaderCacheForMaterial(J);if(H.has(W)===!1)H.add(W),W.usedTimes++;if(H.has(Z)===!1)H.add(Z),Z.usedTimes++;return this}remove(J){let Q=this.materialCache.get(J);for(let $ of Q)if($.usedTimes--,$.usedTimes===0)this.shaderCache.delete($.code);return this.materialCache.delete(J),this}getVertexShaderID(J){return this._getShaderStage(J.vertexShader).id}getFragmentShaderID(J){return this._getShaderStage(J.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(J){let Q=this.materialCache,$=Q.get(J);if($===void 0)$=new Set,Q.set(J,$);return $}_getShaderStage(J){let Q=this.shaderCache,$=Q.get(J);if($===void 0)$=new d$(J),Q.set(J,$);return $}}class d${constructor(J){this.id=oY++,this.code=J,this.usedTimes=0}}function aY(J){return J===g6||J===vJ||J===fJ}function rY(J,Q,$,W,Z,H){let K=new xJ,Y=new p$,U=new Set,E=[],F=new Map,k=W.logarithmicDepthBuffer,X=W.precision,q={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(D){if(U.add(D),D===0)return"uv";return`uv${D}`}function I(D,B,d,A,l,i){let b=A.fog,u=l.geometry,x=D.isMeshStandardMaterial||D.isMeshLambertMaterial||D.isMeshPhongMaterial?A.environment:null,p=D.isMeshStandardMaterial||D.isMeshLambertMaterial&&!D.envMap||D.isMeshPhongMaterial&&!D.envMap,a=Q.get(D.envMap||x,p),Q0=!!a&&a.mapping===P9?a.image.height:null,k0=q[D.type];if(D.precision!==null){if(X=W.getMaxPrecision(D.precision),X!==D.precision)I0("WebGLProgram.getParameters:",D.precision,"not supported, using",X,"instead.")}let z0=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,O0=z0!==void 0?z0.length:0,o0=0;if(u.morphAttributes.position!==void 0)o0=1;if(u.morphAttributes.normal!==void 0)o0=2;if(u.morphAttributes.color!==void 0)o0=3;let p0,n,G0,L0;if(k0){let S0=W6[k0];p0=S0.vertexShader,n=S0.fragmentShader}else p0=D.vertexShader,n=D.fragmentShader,Y.update(D),G0=Y.getVertexShaderID(D),L0=Y.getFragmentShaderID(D);let N0=J.getRenderTarget(),C0=J.state.buffers.depth.getReversed(),i0=l.isInstancedMesh===!0,h0=l.isBatchedMesh===!0,d0=!!D.map,e0=!!D.matcap,J8=!!a,f0=!!D.aoMap,M8=!!D.lightMap,B8=!!D.bumpMap,N8=!!D.normalMap,S=!!D.displacementMap,_8=!!D.emissiveMap,m0=!!D.metalnessMap,s0=!!D.roughnessMap,E0=D.anisotropy>0,K8=D.clearcoat>0,A0=D.dispersion>0,V=D.iridescence>0,R=D.sheen>0,f=D.transmission>0,o=E0&&!!D.anisotropyMap,r=K8&&!!D.clearcoatMap,e=K8&&!!D.clearcoatNormalMap,H0=K8&&!!D.clearcoatRoughnessMap,m=V&&!!D.iridescenceMap,s=V&&!!D.iridescenceThicknessMap,Z0=R&&!!D.sheenColorMap,D0=R&&!!D.sheenRoughnessMap,$0=!!D.specularMap,K0=!!D.specularColorMap,P0=!!D.specularIntensityMap,v0=f&&!!D.transmissionMap,x0=f&&!!D.thicknessMap,T=!!D.gradientMap,W0=!!D.alphaMap,c=D.alphaTest>0,J0=!!D.alphaHash,R0=!!D.extensions,t=s8;if(D.toneMapped){if(N0===null||N0.isXRRenderTarget===!0)t=J.toneMapping}let B0={shaderID:k0,shaderType:D.type,shaderName:D.name,vertexShader:p0,fragmentShader:n,defines:D.defines,customVertexShaderID:G0,customFragmentShaderID:L0,isRawShaderMaterial:D.isRawShaderMaterial===!0,glslVersion:D.glslVersion,precision:X,batching:h0,batchingColor:h0&&l._colorsTexture!==null,instancing:i0,instancingColor:i0&&l.instanceColor!==null,instancingMorph:i0&&l.morphTexture!==null,outputColorSpace:N0===null?J.outputColorSpace:N0.isXRRenderTarget===!0?N0.texture.colorSpace:l0.workingColorSpace,alphaToCoverage:!!D.alphaToCoverage,map:d0,matcap:e0,envMap:J8,envMapMode:J8&&a.mapping,envMapCubeUVHeight:Q0,aoMap:f0,lightMap:M8,bumpMap:B8,normalMap:N8,displacementMap:S,emissiveMap:_8,normalMapObjectSpace:N8&&D.normalMapType===c1,normalMapTangentSpace:N8&&D.normalMapType===I5,packedNormalMap:N8&&D.normalMapType===I5&&aY(D.normalMap.format),metalnessMap:m0,roughnessMap:s0,anisotropy:E0,anisotropyMap:o,clearcoat:K8,clearcoatMap:r,clearcoatNormalMap:e,clearcoatRoughnessMap:H0,dispersion:A0,iridescence:V,iridescenceMap:m,iridescenceThicknessMap:s,sheen:R,sheenColorMap:Z0,sheenRoughnessMap:D0,specularMap:$0,specularColorMap:K0,specularIntensityMap:P0,transmission:f,transmissionMap:v0,thicknessMap:x0,gradientMap:T,opaque:D.transparent===!1&&D.blending===_9&&D.alphaToCoverage===!1,alphaMap:W0,alphaTest:c,alphaHash:J0,combine:D.combine,mapUv:d0&&M(D.map.channel),aoMapUv:f0&&M(D.aoMap.channel),lightMapUv:M8&&M(D.lightMap.channel),bumpMapUv:B8&&M(D.bumpMap.channel),normalMapUv:N8&&M(D.normalMap.channel),displacementMapUv:S&&M(D.displacementMap.channel),emissiveMapUv:_8&&M(D.emissiveMap.channel),metalnessMapUv:m0&&M(D.metalnessMap.channel),roughnessMapUv:s0&&M(D.roughnessMap.channel),anisotropyMapUv:o&&M(D.anisotropyMap.channel),clearcoatMapUv:r&&M(D.clearcoatMap.channel),clearcoatNormalMapUv:e&&M(D.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:H0&&M(D.clearcoatRoughnessMap.channel),iridescenceMapUv:m&&M(D.iridescenceMap.channel),iridescenceThicknessMapUv:s&&M(D.iridescenceThicknessMap.channel),sheenColorMapUv:Z0&&M(D.sheenColorMap.channel),sheenRoughnessMapUv:D0&&M(D.sheenRoughnessMap.channel),specularMapUv:$0&&M(D.specularMap.channel),specularColorMapUv:K0&&M(D.specularColorMap.channel),specularIntensityMapUv:P0&&M(D.specularIntensityMap.channel),transmissionMapUv:v0&&M(D.transmissionMap.channel),thicknessMapUv:x0&&M(D.thicknessMap.channel),alphaMapUv:W0&&M(D.alphaMap.channel),vertexTangents:!!u.attributes.tangent&&(N8||E0),vertexNormals:!!u.attributes.normal,vertexColors:D.vertexColors,vertexAlphas:D.vertexColors===!0&&!!u.attributes.color&&u.attributes.color.itemSize===4,pointsUvs:l.isPoints===!0&&!!u.attributes.uv&&(d0||W0),fog:!!b,useFog:D.fog===!0,fogExp2:!!b&&b.isFogExp2,flatShading:D.wireframe===!1&&(D.flatShading===!0||u.attributes.normal===void 0&&N8===!1&&(D.isMeshLambertMaterial||D.isMeshPhongMaterial||D.isMeshStandardMaterial||D.isMeshPhysicalMaterial)),sizeAttenuation:D.sizeAttenuation===!0,logarithmicDepthBuffer:k,reversedDepthBuffer:C0,skinning:l.isSkinnedMesh===!0,morphTargets:u.morphAttributes.position!==void 0,morphNormals:u.morphAttributes.normal!==void 0,morphColors:u.morphAttributes.color!==void 0,morphTargetsCount:O0,morphTextureStride:o0,numDirLights:B.directional.length,numPointLights:B.point.length,numSpotLights:B.spot.length,numSpotLightMaps:B.spotLightMap.length,numRectAreaLights:B.rectArea.length,numHemiLights:B.hemi.length,numDirLightShadows:B.directionalShadowMap.length,numPointLightShadows:B.pointShadowMap.length,numSpotLightShadows:B.spotShadowMap.length,numSpotLightShadowsWithMaps:B.numSpotLightShadowsWithMaps,numLightProbes:B.numLightProbes,numLightProbeGrids:i.length,numClippingPlanes:H.numPlanes,numClipIntersection:H.numIntersection,dithering:D.dithering,shadowMapEnabled:J.shadowMap.enabled&&d.length>0,shadowMapType:J.shadowMap.type,toneMapping:t,decodeVideoTexture:d0&&D.map.isVideoTexture===!0&&l0.getTransfer(D.map.colorSpace)===W8,decodeVideoTextureEmissive:_8&&D.emissiveMap.isVideoTexture===!0&&l0.getTransfer(D.emissiveMap.colorSpace)===W8,premultipliedAlpha:D.premultipliedAlpha,doubleSided:D.side===e8,flipSided:D.side===j8,useDepthPacking:D.depthPacking>=0,depthPacking:D.depthPacking||0,index0AttributeName:D.index0AttributeName,extensionClipCullDistance:R0&&D.extensions.clipCullDistance===!0&&$.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(R0&&D.extensions.multiDraw===!0||h0)&&$.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:$.has("KHR_parallel_shader_compile"),customProgramCacheKey:D.customProgramCacheKey()};return B0.vertexUv1s=U.has(1),B0.vertexUv2s=U.has(2),B0.vertexUv3s=U.has(3),U.clear(),B0}function N(D){let B=[];if(D.shaderID)B.push(D.shaderID);else B.push(D.customVertexShaderID),B.push(D.customFragmentShaderID);if(D.defines!==void 0)for(let d in D.defines)B.push(d),B.push(D.defines[d]);if(D.isRawShaderMaterial===!1)G(B,D),L(B,D),B.push(J.outputColorSpace);return B.push(D.customProgramCacheKey),B.join()}function G(D,B){D.push(B.precision),D.push(B.outputColorSpace),D.push(B.envMapMode),D.push(B.envMapCubeUVHeight),D.push(B.mapUv),D.push(B.alphaMapUv),D.push(B.lightMapUv),D.push(B.aoMapUv),D.push(B.bumpMapUv),D.push(B.normalMapUv),D.push(B.displacementMapUv),D.push(B.emissiveMapUv),D.push(B.metalnessMapUv),D.push(B.roughnessMapUv),D.push(B.anisotropyMapUv),D.push(B.clearcoatMapUv),D.push(B.clearcoatNormalMapUv),D.push(B.clearcoatRoughnessMapUv),D.push(B.iridescenceMapUv),D.push(B.iridescenceThicknessMapUv),D.push(B.sheenColorMapUv),D.push(B.sheenRoughnessMapUv),D.push(B.specularMapUv),D.push(B.specularColorMapUv),D.push(B.specularIntensityMapUv),D.push(B.transmissionMapUv),D.push(B.thicknessMapUv),D.push(B.combine),D.push(B.fogExp2),D.push(B.sizeAttenuation),D.push(B.morphTargetsCount),D.push(B.morphAttributeCount),D.push(B.numDirLights),D.push(B.numPointLights),D.push(B.numSpotLights),D.push(B.numSpotLightMaps),D.push(B.numHemiLights),D.push(B.numRectAreaLights),D.push(B.numDirLightShadows),D.push(B.numPointLightShadows),D.push(B.numSpotLightShadows),D.push(B.numSpotLightShadowsWithMaps),D.push(B.numLightProbes),D.push(B.shadowMapType),D.push(B.toneMapping),D.push(B.numClippingPlanes),D.push(B.numClipIntersection),D.push(B.depthPacking)}function L(D,B){if(K.disableAll(),B.instancing)K.enable(0);if(B.instancingColor)K.enable(1);if(B.instancingMorph)K.enable(2);if(B.matcap)K.enable(3);if(B.envMap)K.enable(4);if(B.normalMapObjectSpace)K.enable(5);if(B.normalMapTangentSpace)K.enable(6);if(B.clearcoat)K.enable(7);if(B.iridescence)K.enable(8);if(B.alphaTest)K.enable(9);if(B.vertexColors)K.enable(10);if(B.vertexAlphas)K.enable(11);if(B.vertexUv1s)K.enable(12);if(B.vertexUv2s)K.enable(13);if(B.vertexUv3s)K.enable(14);if(B.vertexTangents)K.enable(15);if(B.anisotropy)K.enable(16);if(B.alphaHash)K.enable(17);if(B.batching)K.enable(18);if(B.dispersion)K.enable(19);if(B.batchingColor)K.enable(20);if(B.gradientMap)K.enable(21);if(B.packedNormalMap)K.enable(22);if(B.vertexNormals)K.enable(23);if(D.push(K.mask),K.disableAll(),B.fog)K.enable(0);if(B.useFog)K.enable(1);if(B.flatShading)K.enable(2);if(B.logarithmicDepthBuffer)K.enable(3);if(B.reversedDepthBuffer)K.enable(4);if(B.skinning)K.enable(5);if(B.morphTargets)K.enable(6);if(B.morphNormals)K.enable(7);if(B.morphColors)K.enable(8);if(B.premultipliedAlpha)K.enable(9);if(B.shadowMapEnabled)K.enable(10);if(B.doubleSided)K.enable(11);if(B.flipSided)K.enable(12);if(B.useDepthPacking)K.enable(13);if(B.dithering)K.enable(14);if(B.transmission)K.enable(15);if(B.sheen)K.enable(16);if(B.opaque)K.enable(17);if(B.pointsUvs)K.enable(18);if(B.decodeVideoTexture)K.enable(19);if(B.decodeVideoTextureEmissive)K.enable(20);if(B.alphaToCoverage)K.enable(21);if(B.numLightProbeGrids>0)K.enable(22);D.push(K.mask)}function w(D){let B=q[D.type],d;if(B){let A=W6[B];d=Z$.clone(A.uniforms)}else d=D.uniforms;return d}function z(D,B){let d=F.get(B);if(d!==void 0)++d.usedTimes;else d=new iY(J,B,D,Z),E.push(d),F.set(B,d);return d}function P(D){if(--D.usedTimes===0){let B=E.indexOf(D);E[B]=E[E.length-1],E.pop(),F.delete(D.cacheKey),D.destroy()}}function C(D){Y.remove(D)}function _(){Y.dispose()}return{getParameters:I,getProgramCacheKey:N,getUniforms:w,acquireProgram:z,releaseProgram:P,releaseShaderCache:C,programs:E,dispose:_}}function tY(){let J=new WeakMap;function Q(K){return J.has(K)}function $(K){let Y=J.get(K);if(Y===void 0)Y={},J.set(K,Y);return Y}function W(K){J.delete(K)}function Z(K,Y,U){J.get(K)[Y]=U}function H(){J=new WeakMap}return{has:Q,get:$,remove:W,update:Z,dispose:H}}function eY(J,Q){if(J.groupOrder!==Q.groupOrder)return J.groupOrder-Q.groupOrder;else if(J.renderOrder!==Q.renderOrder)return J.renderOrder-Q.renderOrder;else if(J.material.id!==Q.material.id)return J.material.id-Q.material.id;else if(J.materialVariant!==Q.materialVariant)return J.materialVariant-Q.materialVariant;else if(J.z!==Q.z)return J.z-Q.z;else return J.id-Q.id}function A$(J,Q){if(J.groupOrder!==Q.groupOrder)return J.groupOrder-Q.groupOrder;else if(J.renderOrder!==Q.renderOrder)return J.renderOrder-Q.renderOrder;else if(J.z!==Q.z)return Q.z-J.z;else return J.id-Q.id}function _$(){let J=[],Q=0,$=[],W=[],Z=[];function H(){Q=0,$.length=0,W.length=0,Z.length=0}function K(X){let q=0;if(X.isInstancedMesh)q+=2;if(X.isSkinnedMesh)q+=1;return q}function Y(X,q,M,I,N,G){let L=J[Q];if(L===void 0)L={id:X.id,object:X,geometry:q,material:M,materialVariant:K(X),groupOrder:I,renderOrder:X.renderOrder,z:N,group:G},J[Q]=L;else L.id=X.id,L.object=X,L.geometry=q,L.material=M,L.materialVariant=K(X),L.groupOrder=I,L.renderOrder=X.renderOrder,L.z=N,L.group=G;return Q++,L}function U(X,q,M,I,N,G){let L=Y(X,q,M,I,N,G);if(M.transmission>0)W.push(L);else if(M.transparent===!0)Z.push(L);else $.push(L)}function E(X,q,M,I,N,G){let L=Y(X,q,M,I,N,G);if(M.transmission>0)W.unshift(L);else if(M.transparent===!0)Z.unshift(L);else $.unshift(L)}function F(X,q){if($.length>1)$.sort(X||eY);if(W.length>1)W.sort(q||A$);if(Z.length>1)Z.sort(q||A$)}function k(){for(let X=Q,q=J.length;X<q;X++){let M=J[X];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:$,transmissive:W,transparent:Z,init:H,push:U,unshift:E,finish:k,sort:F}}function JU(){let J=new WeakMap;function Q(W,Z){let H=J.get(W),K;if(H===void 0)K=new _$,J.set(W,[K]);else if(Z>=H.length)K=new _$,H.push(K);else K=H[Z];return K}function $(){J=new WeakMap}return{get:Q,dispose:$}}function QU(){let J={};return{get:function(Q){if(J[Q.id]!==void 0)return J[Q.id];let $;switch(Q.type){case"DirectionalLight":$={direction:new v,color:new b0};break;case"SpotLight":$={position:new v,direction:new v,color:new b0,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":$={position:new v,color:new b0,distance:0,decay:0};break;case"HemisphereLight":$={direction:new v,skyColor:new b0,groundColor:new b0};break;case"RectAreaLight":$={color:new b0,position:new v,halfWidth:new v,halfHeight:new v};break}return J[Q.id]=$,$}}}function $U(){let J={};return{get:function(Q){if(J[Q.id]!==void 0)return J[Q.id];let $;switch(Q.type){case"DirectionalLight":$={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new c0};break;case"SpotLight":$={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new c0};break;case"PointLight":$={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new c0,shadowCameraNear:1,shadowCameraFar:1000};break}return J[Q.id]=$,$}}}var WU=0;function ZU(J,Q){return(Q.castShadow?2:0)-(J.castShadow?2:0)+(Q.map?1:0)-(J.map?1:0)}function HU(J){let Q=new QU,$=$U(),W={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let E=0;E<9;E++)W.probe.push(new v);let Z=new v,H=new H8,K=new H8;function Y(E){let F=0,k=0,X=0;for(let B=0;B<9;B++)W.probe[B].set(0,0,0);let q=0,M=0,I=0,N=0,G=0,L=0,w=0,z=0,P=0,C=0,_=0;E.sort(ZU);for(let B=0,d=E.length;B<d;B++){let A=E[B],l=A.color,i=A.intensity,b=A.distance,u=null;if(A.shadow&&A.shadow.map)if(A.shadow.map.texture.format===g6)u=A.shadow.map.texture;else u=A.shadow.map.depthTexture||A.shadow.map.texture;if(A.isAmbientLight)F+=l.r*i,k+=l.g*i,X+=l.b*i;else if(A.isLightProbe){for(let x=0;x<9;x++)W.probe[x].addScaledVector(A.sh.coefficients[x],i);_++}else if(A.isDirectionalLight){let x=Q.get(A);if(x.color.copy(A.color).multiplyScalar(A.intensity),A.castShadow){let p=A.shadow,a=$.get(A);a.shadowIntensity=p.intensity,a.shadowBias=p.bias,a.shadowNormalBias=p.normalBias,a.shadowRadius=p.radius,a.shadowMapSize=p.mapSize,W.directionalShadow[q]=a,W.directionalShadowMap[q]=u,W.directionalShadowMatrix[q]=A.shadow.matrix,L++}W.directional[q]=x,q++}else if(A.isSpotLight){let x=Q.get(A);x.position.setFromMatrixPosition(A.matrixWorld),x.color.copy(l).multiplyScalar(i),x.distance=b,x.coneCos=Math.cos(A.angle),x.penumbraCos=Math.cos(A.angle*(1-A.penumbra)),x.decay=A.decay,W.spot[I]=x;let p=A.shadow;if(A.map){if(W.spotLightMap[P]=A.map,P++,p.updateMatrices(A),A.castShadow)C++}if(W.spotLightMatrix[I]=p.matrix,A.castShadow){let a=$.get(A);a.shadowIntensity=p.intensity,a.shadowBias=p.bias,a.shadowNormalBias=p.normalBias,a.shadowRadius=p.radius,a.shadowMapSize=p.mapSize,W.spotShadow[I]=a,W.spotShadowMap[I]=u,z++}I++}else if(A.isRectAreaLight){let x=Q.get(A);x.color.copy(l).multiplyScalar(i),x.halfWidth.set(A.width*0.5,0,0),x.halfHeight.set(0,A.height*0.5,0),W.rectArea[N]=x,N++}else if(A.isPointLight){let x=Q.get(A);if(x.color.copy(A.color).multiplyScalar(A.intensity),x.distance=A.distance,x.decay=A.decay,A.castShadow){let p=A.shadow,a=$.get(A);a.shadowIntensity=p.intensity,a.shadowBias=p.bias,a.shadowNormalBias=p.normalBias,a.shadowRadius=p.radius,a.shadowMapSize=p.mapSize,a.shadowCameraNear=p.camera.near,a.shadowCameraFar=p.camera.far,W.pointShadow[M]=a,W.pointShadowMap[M]=u,W.pointShadowMatrix[M]=A.shadow.matrix,w++}W.point[M]=x,M++}else if(A.isHemisphereLight){let x=Q.get(A);x.skyColor.copy(A.color).multiplyScalar(i),x.groundColor.copy(A.groundColor).multiplyScalar(i),W.hemi[G]=x,G++}}if(N>0)if(J.has("OES_texture_float_linear")===!0)W.rectAreaLTC1=Y0.LTC_FLOAT_1,W.rectAreaLTC2=Y0.LTC_FLOAT_2;else W.rectAreaLTC1=Y0.LTC_HALF_1,W.rectAreaLTC2=Y0.LTC_HALF_2;W.ambient[0]=F,W.ambient[1]=k,W.ambient[2]=X;let D=W.hash;if(D.directionalLength!==q||D.pointLength!==M||D.spotLength!==I||D.rectAreaLength!==N||D.hemiLength!==G||D.numDirectionalShadows!==L||D.numPointShadows!==w||D.numSpotShadows!==z||D.numSpotMaps!==P||D.numLightProbes!==_)W.directional.length=q,W.spot.length=I,W.rectArea.length=N,W.point.length=M,W.hemi.length=G,W.directionalShadow.length=L,W.directionalShadowMap.length=L,W.pointShadow.length=w,W.pointShadowMap.length=w,W.spotShadow.length=z,W.spotShadowMap.length=z,W.directionalShadowMatrix.length=L,W.pointShadowMatrix.length=w,W.spotLightMatrix.length=z+P-C,W.spotLightMap.length=P,W.numSpotLightShadowsWithMaps=C,W.numLightProbes=_,D.directionalLength=q,D.pointLength=M,D.spotLength=I,D.rectAreaLength=N,D.hemiLength=G,D.numDirectionalShadows=L,D.numPointShadows=w,D.numSpotShadows=z,D.numSpotMaps=P,D.numLightProbes=_,W.version=WU++}function U(E,F){let k=0,X=0,q=0,M=0,I=0,N=F.matrixWorldInverse;for(let G=0,L=E.length;G<L;G++){let w=E[G];if(w.isDirectionalLight){let z=W.directional[k];z.direction.setFromMatrixPosition(w.matrixWorld),Z.setFromMatrixPosition(w.target.matrixWorld),z.direction.sub(Z),z.direction.transformDirection(N),k++}else if(w.isSpotLight){let z=W.spot[q];z.position.setFromMatrixPosition(w.matrixWorld),z.position.applyMatrix4(N),z.direction.setFromMatrixPosition(w.matrixWorld),Z.setFromMatrixPosition(w.target.matrixWorld),z.direction.sub(Z),z.direction.transformDirection(N),q++}else if(w.isRectAreaLight){let z=W.rectArea[M];z.position.setFromMatrixPosition(w.matrixWorld),z.position.applyMatrix4(N),K.identity(),H.copy(w.matrixWorld),H.premultiply(N),K.extractRotation(H),z.halfWidth.set(w.width*0.5,0,0),z.halfHeight.set(0,w.height*0.5,0),z.halfWidth.applyMatrix4(K),z.halfHeight.applyMatrix4(K),M++}else if(w.isPointLight){let z=W.point[X];z.position.setFromMatrixPosition(w.matrixWorld),z.position.applyMatrix4(N),X++}else if(w.isHemisphereLight){let z=W.hemi[I];z.direction.setFromMatrixPosition(w.matrixWorld),z.direction.transformDirection(N),I++}}}return{setup:Y,setupView:U,state:W}}function P$(J){let Q=new HU(J),$=[],W=[],Z=[];function H(X){k.camera=X,$.length=0,W.length=0,Z.length=0}function K(X){$.push(X)}function Y(X){W.push(X)}function U(X){Z.push(X)}function E(){Q.setup($)}function F(X){Q.setupView($,X)}let k={lightsArray:$,shadowsArray:W,lightProbeGridArray:Z,camera:null,lights:Q,transmissionRenderTarget:{},textureUnits:0};return{init:H,state:k,setupLights:E,setupLightsView:F,pushLight:K,pushShadow:Y,pushLightProbeGrid:U}}function KU(J){let Q=new WeakMap;function $(Z,H=0){let K=Q.get(Z),Y;if(K===void 0)Y=new P$(J),Q.set(Z,[Y]);else if(H>=K.length)Y=new P$(J),K.push(Y);else Y=K[H];return Y}function W(){Q=new WeakMap}return{get:$,dispose:W}}var YU=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,UU=`uniform sampler2D shadow_pass;
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
}`,EU=[new v(1,0,0),new v(-1,0,0),new v(0,1,0),new v(0,-1,0),new v(0,0,1),new v(0,0,-1)],XU=[new v(0,-1,0),new v(0,-1,0),new v(0,0,1),new v(0,0,-1),new v(0,-1,0),new v(0,-1,0)],T$=new H8,u9=new v,XQ=new v;function GU(J,Q,$){let W=new y9,Z=new c0,H=new c0,K=new Y8,Y=new p5,U=new d5,E={},F=$.maxTextureSize,k={[N9]:j8,[j8]:N9,[e8]:e8},X=new d8({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new c0},radius:{value:4}},vertexShader:YU,fragmentShader:UU}),q=X.clone();q.defines.HORIZONTAL_PASS=1;let M=new L8;M.setAttribute("position",new S8(new Float32Array([-1,-1,0.5,3,-1,0.5,-1,3,0.5]),3));let I=new P8(M,X),N=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=A9;let G=this.type;this.render=function(C,_,D){if(N.enabled===!1)return;if(N.autoUpdate===!1&&N.needsUpdate===!1)return;if(C.length===0)return;if(this.type===Z1)I0("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=A9;let B=J.getRenderTarget(),d=J.getActiveCubeFace(),A=J.getActiveMipmapLevel(),l=J.state;if(l.setBlending(J6),l.buffers.depth.getReversed()===!0)l.buffers.color.setClear(0,0,0,0);else l.buffers.color.setClear(1,1,1,1);l.buffers.depth.setTest(!0),l.setScissorTest(!1);let i=G!==this.type;if(i)_.traverse(function(b){if(b.material)if(Array.isArray(b.material))b.material.forEach((u)=>u.needsUpdate=!0);else b.material.needsUpdate=!0});for(let b=0,u=C.length;b<u;b++){let x=C[b],p=x.shadow;if(p===void 0){I0("WebGLShadowMap:",x,"has no shadow.");continue}if(p.autoUpdate===!1&&p.needsUpdate===!1)continue;Z.copy(p.mapSize);let a=p.getFrameExtents();if(Z.multiply(a),H.copy(p.mapSize),Z.x>F||Z.y>F){if(Z.x>F)H.x=Math.floor(F/a.x),Z.x=H.x*a.x,p.mapSize.x=H.x;if(Z.y>F)H.y=Math.floor(F/a.y),Z.y=H.y*a.y,p.mapSize.y=H.y}let Q0=J.state.buffers.depth.getReversed();if(p.camera._reversedDepth=Q0,p.map===null||i===!0){if(p.map!==null){if(p.map.depthTexture!==null)p.map.depthTexture.dispose(),p.map.depthTexture=null;p.map.dispose()}if(this.type===G9){if(x.isPointLight){I0("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}p.map=new p8(Z.x,Z.y,{format:g6,type:k6,minFilter:v8,magFilter:v8,generateMipmaps:!1}),p.map.texture.name=x.name+".shadowMap",p.map.depthTexture=new _6(Z.x,Z.y,N6),p.map.depthTexture.name=x.name+".shadowMapDepth",p.map.depthTexture.format=h6,p.map.depthTexture.compareFunction=null,p.map.depthTexture.minFilter=C6,p.map.depthTexture.magFilter=C6}else{if(x.isPointLight)p.map=new FQ(Z.x),p.map.depthTexture=new h5(Z.x,A6);else p.map=new p8(Z.x,Z.y),p.map.depthTexture=new _6(Z.x,Z.y,A6);if(p.map.depthTexture.name=x.name+".shadowMap",p.map.depthTexture.format=h6,this.type===A9)p.map.depthTexture.compareFunction=Q0?yJ:bJ,p.map.depthTexture.minFilter=v8,p.map.depthTexture.magFilter=v8;else p.map.depthTexture.compareFunction=null,p.map.depthTexture.minFilter=C6,p.map.depthTexture.magFilter=C6}p.camera.updateProjectionMatrix()}let k0=p.map.isWebGLCubeRenderTarget?6:1;for(let z0=0;z0<k0;z0++){if(p.map.isWebGLCubeRenderTarget)J.setRenderTarget(p.map,z0),J.clear();else{if(z0===0)J.setRenderTarget(p.map),J.clear();let O0=p.getViewport(z0);K.set(H.x*O0.x,H.y*O0.y,H.x*O0.z,H.y*O0.w),l.viewport(K)}if(x.isPointLight){let{camera:O0,matrix:o0}=p,p0=x.distance||O0.far;if(p0!==O0.far)O0.far=p0,O0.updateProjectionMatrix();u9.setFromMatrixPosition(x.matrixWorld),O0.position.copy(u9),XQ.copy(O0.position),XQ.add(EU[z0]),O0.up.copy(XU[z0]),O0.lookAt(XQ),O0.updateMatrixWorld(),o0.makeTranslation(-u9.x,-u9.y,-u9.z),T$.multiplyMatrices(O0.projectionMatrix,O0.matrixWorldInverse),p._frustum.setFromProjectionMatrix(T$,O0.coordinateSystem,O0.reversedDepth)}else p.updateMatrices(x);W=p.getFrustum(),z(_,D,p.camera,x,this.type)}if(p.isPointLightShadow!==!0&&this.type===G9)L(p,D);p.needsUpdate=!1}G=this.type,N.needsUpdate=!1,J.setRenderTarget(B,d,A)};function L(C,_){let D=Q.update(I);if(X.defines.VSM_SAMPLES!==C.blurSamples)X.defines.VSM_SAMPLES=C.blurSamples,q.defines.VSM_SAMPLES=C.blurSamples,X.needsUpdate=!0,q.needsUpdate=!0;if(C.mapPass===null)C.mapPass=new p8(Z.x,Z.y,{format:g6,type:k6});X.uniforms.shadow_pass.value=C.map.depthTexture,X.uniforms.resolution.value=C.mapSize,X.uniforms.radius.value=C.radius,J.setRenderTarget(C.mapPass),J.clear(),J.renderBufferDirect(_,null,D,X,I,null),q.uniforms.shadow_pass.value=C.mapPass.texture,q.uniforms.resolution.value=C.mapSize,q.uniforms.radius.value=C.radius,J.setRenderTarget(C.map),J.clear(),J.renderBufferDirect(_,null,D,q,I,null)}function w(C,_,D,B){let d=null,A=D.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(A!==void 0)d=A;else if(d=D.isPointLight===!0?U:Y,J.localClippingEnabled&&_.clipShadows===!0&&Array.isArray(_.clippingPlanes)&&_.clippingPlanes.length!==0||_.displacementMap&&_.displacementScale!==0||_.alphaMap&&_.alphaTest>0||_.map&&_.alphaTest>0||_.alphaToCoverage===!0){let l=d.uuid,i=_.uuid,b=E[l];if(b===void 0)b={},E[l]=b;let u=b[i];if(u===void 0)u=d.clone(),b[i]=u,_.addEventListener("dispose",P);d=u}if(d.visible=_.visible,d.wireframe=_.wireframe,B===G9)d.side=_.shadowSide!==null?_.shadowSide:_.side;else d.side=_.shadowSide!==null?_.shadowSide:k[_.side];if(d.alphaMap=_.alphaMap,d.alphaTest=_.alphaToCoverage===!0?0.5:_.alphaTest,d.map=_.map,d.clipShadows=_.clipShadows,d.clippingPlanes=_.clippingPlanes,d.clipIntersection=_.clipIntersection,d.displacementMap=_.displacementMap,d.displacementScale=_.displacementScale,d.displacementBias=_.displacementBias,d.wireframeLinewidth=_.wireframeLinewidth,d.linewidth=_.linewidth,D.isPointLight===!0&&d.isMeshDistanceMaterial===!0){let l=J.properties.get(d);l.light=D}return d}function z(C,_,D,B,d){if(C.visible===!1)return;if(C.layers.test(_.layers)&&(C.isMesh||C.isLine||C.isPoints)){if((C.castShadow||C.receiveShadow&&d===G9)&&(!C.frustumCulled||W.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,C.matrixWorld);let i=Q.update(C),b=C.material;if(Array.isArray(b)){let u=i.groups;for(let x=0,p=u.length;x<p;x++){let a=u[x],Q0=b[a.materialIndex];if(Q0&&Q0.visible){let k0=w(C,Q0,B,d);C.onBeforeShadow(J,C,_,D,i,k0,a),J.renderBufferDirect(D,null,i,k0,C,a),C.onAfterShadow(J,C,_,D,i,k0,a)}}}else if(b.visible){let u=w(C,b,B,d);C.onBeforeShadow(J,C,_,D,i,u,null),J.renderBufferDirect(D,null,i,u,C,null),C.onAfterShadow(J,C,_,D,i,u,null)}}}let l=C.children;for(let i=0,b=l.length;i<b;i++)z(l[i],_,D,B,d)}function P(C){C.target.removeEventListener("dispose",P);for(let D in E){let B=E[D],d=C.target.uuid;if(d in B)B[d].dispose(),delete B[d]}}}function NU(J,Q){function $(){let T=!1,W0=new Y8,c=null,J0=new Y8(0,0,0,0);return{setMask:function(R0){if(c!==R0&&!T)J.colorMask(R0,R0,R0,R0),c=R0},setLocked:function(R0){T=R0},setClear:function(R0,t,B0,S0,k8){if(k8===!0)R0*=S0,t*=S0,B0*=S0;if(W0.set(R0,t,B0,S0),J0.equals(W0)===!1)J.clearColor(R0,t,B0,S0),J0.copy(W0)},reset:function(){T=!1,c=null,J0.set(-1,0,0,0)}}}function W(){let T=!1,W0=!1,c=null,J0=null,R0=null;return{setReversed:function(t){if(W0!==t){let B0=Q.get("EXT_clip_control");if(t)B0.clipControlEXT(B0.LOWER_LEFT_EXT,B0.ZERO_TO_ONE_EXT);else B0.clipControlEXT(B0.LOWER_LEFT_EXT,B0.NEGATIVE_ONE_TO_ONE_EXT);W0=t;let S0=R0;R0=null,this.setClear(S0)}},getReversed:function(){return W0},setTest:function(t){if(t)N0(J.DEPTH_TEST);else C0(J.DEPTH_TEST)},setMask:function(t){if(c!==t&&!T)J.depthMask(t),c=t},setFunc:function(t){if(W0)t=$$[t];if(J0!==t){switch(t){case I1:J.depthFunc(J.NEVER);break;case C1:J.depthFunc(J.ALWAYS);break;case A1:J.depthFunc(J.LESS);break;case b7:J.depthFunc(J.LEQUAL);break;case _1:J.depthFunc(J.EQUAL);break;case P1:J.depthFunc(J.GEQUAL);break;case T1:J.depthFunc(J.GREATER);break;case S1:J.depthFunc(J.NOTEQUAL);break;default:J.depthFunc(J.LEQUAL)}J0=t}},setLocked:function(t){T=t},setClear:function(t){if(R0!==t){if(R0=t,W0)t=1-t;J.clearDepth(t)}},reset:function(){T=!1,c=null,J0=null,R0=null,W0=!1}}}function Z(){let T=!1,W0=null,c=null,J0=null,R0=null,t=null,B0=null,S0=null,k8=null;return{setTest:function(r0){if(!T)if(r0)N0(J.STENCIL_TEST);else C0(J.STENCIL_TEST)},setMask:function(r0){if(W0!==r0&&!T)J.stencilMask(r0),W0=r0},setFunc:function(r0,a8,m8){if(c!==r0||J0!==a8||R0!==m8)J.stencilFunc(r0,a8,m8),c=r0,J0=a8,R0=m8},setOp:function(r0,a8,m8){if(t!==r0||B0!==a8||S0!==m8)J.stencilOp(r0,a8,m8),t=r0,B0=a8,S0=m8},setLocked:function(r0){T=r0},setClear:function(r0){if(k8!==r0)J.clearStencil(r0),k8=r0},reset:function(){T=!1,W0=null,c=null,J0=null,R0=null,t=null,B0=null,S0=null,k8=null}}}let H=new $,K=new W,Y=new Z,U=new WeakMap,E=new WeakMap,F={},k={},X={},q=new WeakMap,M=[],I=null,N=!1,G=null,L=null,w=null,z=null,P=null,C=null,_=null,D=new b0(0,0,0),B=0,d=!1,A=null,l=null,i=null,b=null,u=null,x=J.getParameter(J.MAX_COMBINED_TEXTURE_IMAGE_UNITS),p=!1,a=0,Q0=J.getParameter(J.VERSION);if(Q0.indexOf("WebGL")!==-1)a=parseFloat(/^WebGL (\d)/.exec(Q0)[1]),p=a>=1;else if(Q0.indexOf("OpenGL ES")!==-1)a=parseFloat(/^OpenGL ES (\d)/.exec(Q0)[1]),p=a>=2;let k0=null,z0={},O0=J.getParameter(J.SCISSOR_BOX),o0=J.getParameter(J.VIEWPORT),p0=new Y8().fromArray(O0),n=new Y8().fromArray(o0);function G0(T,W0,c,J0){let R0=new Uint8Array(4),t=J.createTexture();J.bindTexture(T,t),J.texParameteri(T,J.TEXTURE_MIN_FILTER,J.NEAREST),J.texParameteri(T,J.TEXTURE_MAG_FILTER,J.NEAREST);for(let B0=0;B0<c;B0++)if(T===J.TEXTURE_3D||T===J.TEXTURE_2D_ARRAY)J.texImage3D(W0,0,J.RGBA,1,1,J0,0,J.RGBA,J.UNSIGNED_BYTE,R0);else J.texImage2D(W0+B0,0,J.RGBA,1,1,0,J.RGBA,J.UNSIGNED_BYTE,R0);return t}let L0={};L0[J.TEXTURE_2D]=G0(J.TEXTURE_2D,J.TEXTURE_2D,1),L0[J.TEXTURE_CUBE_MAP]=G0(J.TEXTURE_CUBE_MAP,J.TEXTURE_CUBE_MAP_POSITIVE_X,6),L0[J.TEXTURE_2D_ARRAY]=G0(J.TEXTURE_2D_ARRAY,J.TEXTURE_2D_ARRAY,1,1),L0[J.TEXTURE_3D]=G0(J.TEXTURE_3D,J.TEXTURE_3D,1,1),H.setClear(0,0,0,1),K.setClear(1),Y.setClear(0),N0(J.DEPTH_TEST),K.setFunc(b7),B8(!1),N8(S7),N0(J.CULL_FACE),f0(J6);function N0(T){if(F[T]!==!0)J.enable(T),F[T]=!0}function C0(T){if(F[T]!==!1)J.disable(T),F[T]=!1}function i0(T,W0){if(X[T]!==W0){if(J.bindFramebuffer(T,W0),X[T]=W0,T===J.DRAW_FRAMEBUFFER)X[J.FRAMEBUFFER]=W0;if(T===J.FRAMEBUFFER)X[J.DRAW_FRAMEBUFFER]=W0;return!0}return!1}function h0(T,W0){let c=M,J0=!1;if(T){if(c=q.get(W0),c===void 0)c=[],q.set(W0,c);let R0=T.textures;if(c.length!==R0.length||c[0]!==J.COLOR_ATTACHMENT0){for(let t=0,B0=R0.length;t<B0;t++)c[t]=J.COLOR_ATTACHMENT0+t;c.length=R0.length,J0=!0}}else if(c[0]!==J.BACK)c[0]=J.BACK,J0=!0;if(J0)J.drawBuffers(c)}function d0(T){if(I!==T)return J.useProgram(T),I=T,!0;return!1}let e0={[k9]:J.FUNC_ADD,[K1]:J.FUNC_SUBTRACT,[Y1]:J.FUNC_REVERSE_SUBTRACT};e0[U1]=J.MIN,e0[E1]=J.MAX;let J8={[X1]:J.ZERO,[G1]:J.ONE,[N1]:J.SRC_COLOR,[F1]:J.SRC_ALPHA,[L1]:J.SRC_ALPHA_SATURATE,[O1]:J.DST_COLOR,[D1]:J.DST_ALPHA,[k1]:J.ONE_MINUS_SRC_COLOR,[q1]:J.ONE_MINUS_SRC_ALPHA,[M1]:J.ONE_MINUS_DST_COLOR,[R1]:J.ONE_MINUS_DST_ALPHA,[B1]:J.CONSTANT_COLOR,[V1]:J.ONE_MINUS_CONSTANT_COLOR,[w1]:J.CONSTANT_ALPHA,[z1]:J.ONE_MINUS_CONSTANT_ALPHA};function f0(T,W0,c,J0,R0,t,B0,S0,k8,r0){if(T===J6){if(N===!0)C0(J.BLEND),N=!1;return}if(N===!1)N0(J.BLEND),N=!0;if(T!==H1){if(T!==G||r0!==d){if(L!==k9||P!==k9)J.blendEquation(J.FUNC_ADD),L=k9,P=k9;if(r0)switch(T){case _9:J.blendFuncSeparate(J.ONE,J.ONE_MINUS_SRC_ALPHA,J.ONE,J.ONE_MINUS_SRC_ALPHA);break;case j7:J.blendFunc(J.ONE,J.ONE);break;case v7:J.blendFuncSeparate(J.ZERO,J.ONE_MINUS_SRC_COLOR,J.ZERO,J.ONE);break;case f7:J.blendFuncSeparate(J.DST_COLOR,J.ONE_MINUS_SRC_ALPHA,J.ZERO,J.ONE);break;default:_0("WebGLState: Invalid blending: ",T);break}else switch(T){case _9:J.blendFuncSeparate(J.SRC_ALPHA,J.ONE_MINUS_SRC_ALPHA,J.ONE,J.ONE_MINUS_SRC_ALPHA);break;case j7:J.blendFuncSeparate(J.SRC_ALPHA,J.ONE,J.ONE,J.ONE);break;case v7:_0("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case f7:_0("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:_0("WebGLState: Invalid blending: ",T);break}w=null,z=null,C=null,_=null,D.set(0,0,0),B=0,G=T,d=r0}return}if(R0=R0||W0,t=t||c,B0=B0||J0,W0!==L||R0!==P)J.blendEquationSeparate(e0[W0],e0[R0]),L=W0,P=R0;if(c!==w||J0!==z||t!==C||B0!==_)J.blendFuncSeparate(J8[c],J8[J0],J8[t],J8[B0]),w=c,z=J0,C=t,_=B0;if(S0.equals(D)===!1||k8!==B)J.blendColor(S0.r,S0.g,S0.b,k8),D.copy(S0),B=k8;G=T,d=!1}function M8(T,W0){T.side===e8?C0(J.CULL_FACE):N0(J.CULL_FACE);let c=T.side===j8;if(W0)c=!c;B8(c),T.blending===_9&&T.transparent===!1?f0(J6):f0(T.blending,T.blendEquation,T.blendSrc,T.blendDst,T.blendEquationAlpha,T.blendSrcAlpha,T.blendDstAlpha,T.blendColor,T.blendAlpha,T.premultipliedAlpha),K.setFunc(T.depthFunc),K.setTest(T.depthTest),K.setMask(T.depthWrite),H.setMask(T.colorWrite);let J0=T.stencilWrite;if(Y.setTest(J0),J0)Y.setMask(T.stencilWriteMask),Y.setFunc(T.stencilFunc,T.stencilRef,T.stencilFuncMask),Y.setOp(T.stencilFail,T.stencilZFail,T.stencilZPass);_8(T.polygonOffset,T.polygonOffsetFactor,T.polygonOffsetUnits),T.alphaToCoverage===!0?N0(J.SAMPLE_ALPHA_TO_COVERAGE):C0(J.SAMPLE_ALPHA_TO_COVERAGE)}function B8(T){if(A!==T){if(T)J.frontFace(J.CW);else J.frontFace(J.CCW);A=T}}function N8(T){if(T!==$1){if(N0(J.CULL_FACE),T!==l)if(T===S7)J.cullFace(J.BACK);else if(T===W1)J.cullFace(J.FRONT);else J.cullFace(J.FRONT_AND_BACK)}else C0(J.CULL_FACE);l=T}function S(T){if(T!==i){if(p)J.lineWidth(T);i=T}}function _8(T,W0,c){if(T){if(N0(J.POLYGON_OFFSET_FILL),b!==W0||u!==c){if(b=W0,u=c,K.getReversed())W0=-W0;J.polygonOffset(W0,c)}}else C0(J.POLYGON_OFFSET_FILL)}function m0(T){if(T)N0(J.SCISSOR_TEST);else C0(J.SCISSOR_TEST)}function s0(T){if(T===void 0)T=J.TEXTURE0+x-1;if(k0!==T)J.activeTexture(T),k0=T}function E0(T,W0,c){if(c===void 0)if(k0===null)c=J.TEXTURE0+x-1;else c=k0;let J0=z0[c];if(J0===void 0)J0={type:void 0,texture:void 0},z0[c]=J0;if(J0.type!==T||J0.texture!==W0){if(k0!==c)J.activeTexture(c),k0=c;J.bindTexture(T,W0||L0[T]),J0.type=T,J0.texture=W0}}function K8(){let T=z0[k0];if(T!==void 0&&T.type!==void 0)J.bindTexture(T.type,null),T.type=void 0,T.texture=void 0}function A0(){try{J.compressedTexImage2D(...arguments)}catch(T){_0("WebGLState:",T)}}function V(){try{J.compressedTexImage3D(...arguments)}catch(T){_0("WebGLState:",T)}}function R(){try{J.texSubImage2D(...arguments)}catch(T){_0("WebGLState:",T)}}function f(){try{J.texSubImage3D(...arguments)}catch(T){_0("WebGLState:",T)}}function o(){try{J.compressedTexSubImage2D(...arguments)}catch(T){_0("WebGLState:",T)}}function r(){try{J.compressedTexSubImage3D(...arguments)}catch(T){_0("WebGLState:",T)}}function e(){try{J.texStorage2D(...arguments)}catch(T){_0("WebGLState:",T)}}function H0(){try{J.texStorage3D(...arguments)}catch(T){_0("WebGLState:",T)}}function m(){try{J.texImage2D(...arguments)}catch(T){_0("WebGLState:",T)}}function s(){try{J.texImage3D(...arguments)}catch(T){_0("WebGLState:",T)}}function Z0(T){if(k[T]!==void 0)return k[T];else return J.getParameter(T)}function D0(T,W0){if(k[T]!==W0)J.pixelStorei(T,W0),k[T]=W0}function $0(T){if(p0.equals(T)===!1)J.scissor(T.x,T.y,T.z,T.w),p0.copy(T)}function K0(T){if(n.equals(T)===!1)J.viewport(T.x,T.y,T.z,T.w),n.copy(T)}function P0(T,W0){let c=E.get(W0);if(c===void 0)c=new WeakMap,E.set(W0,c);let J0=c.get(T);if(J0===void 0)J0=J.getUniformBlockIndex(W0,T.name),c.set(T,J0)}function v0(T,W0){let J0=E.get(W0).get(T);if(U.get(W0)!==J0)J.uniformBlockBinding(W0,J0,T.__bindingPointIndex),U.set(W0,J0)}function x0(){J.disable(J.BLEND),J.disable(J.CULL_FACE),J.disable(J.DEPTH_TEST),J.disable(J.POLYGON_OFFSET_FILL),J.disable(J.SCISSOR_TEST),J.disable(J.STENCIL_TEST),J.disable(J.SAMPLE_ALPHA_TO_COVERAGE),J.blendEquation(J.FUNC_ADD),J.blendFunc(J.ONE,J.ZERO),J.blendFuncSeparate(J.ONE,J.ZERO,J.ONE,J.ZERO),J.blendColor(0,0,0,0),J.colorMask(!0,!0,!0,!0),J.clearColor(0,0,0,0),J.depthMask(!0),J.depthFunc(J.LESS),K.setReversed(!1),J.clearDepth(1),J.stencilMask(4294967295),J.stencilFunc(J.ALWAYS,0,4294967295),J.stencilOp(J.KEEP,J.KEEP,J.KEEP),J.clearStencil(0),J.cullFace(J.BACK),J.frontFace(J.CCW),J.polygonOffset(0,0),J.activeTexture(J.TEXTURE0),J.bindFramebuffer(J.FRAMEBUFFER,null),J.bindFramebuffer(J.DRAW_FRAMEBUFFER,null),J.bindFramebuffer(J.READ_FRAMEBUFFER,null),J.useProgram(null),J.lineWidth(1),J.scissor(0,0,J.canvas.width,J.canvas.height),J.viewport(0,0,J.canvas.width,J.canvas.height),J.pixelStorei(J.PACK_ALIGNMENT,4),J.pixelStorei(J.UNPACK_ALIGNMENT,4),J.pixelStorei(J.UNPACK_FLIP_Y_WEBGL,!1),J.pixelStorei(J.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),J.pixelStorei(J.UNPACK_COLORSPACE_CONVERSION_WEBGL,J.BROWSER_DEFAULT_WEBGL),J.pixelStorei(J.PACK_ROW_LENGTH,0),J.pixelStorei(J.PACK_SKIP_PIXELS,0),J.pixelStorei(J.PACK_SKIP_ROWS,0),J.pixelStorei(J.UNPACK_ROW_LENGTH,0),J.pixelStorei(J.UNPACK_IMAGE_HEIGHT,0),J.pixelStorei(J.UNPACK_SKIP_PIXELS,0),J.pixelStorei(J.UNPACK_SKIP_ROWS,0),J.pixelStorei(J.UNPACK_SKIP_IMAGES,0),F={},k={},k0=null,z0={},X={},q=new WeakMap,M=[],I=null,N=!1,G=null,L=null,w=null,z=null,P=null,C=null,_=null,D=new b0(0,0,0),B=0,d=!1,A=null,l=null,i=null,b=null,u=null,p0.set(0,0,J.canvas.width,J.canvas.height),n.set(0,0,J.canvas.width,J.canvas.height),H.reset(),K.reset(),Y.reset()}return{buffers:{color:H,depth:K,stencil:Y},enable:N0,disable:C0,bindFramebuffer:i0,drawBuffers:h0,useProgram:d0,setBlending:f0,setMaterial:M8,setFlipSided:B8,setCullFace:N8,setLineWidth:S,setPolygonOffset:_8,setScissorTest:m0,activeTexture:s0,bindTexture:E0,unbindTexture:K8,compressedTexImage2D:A0,compressedTexImage3D:V,texImage2D:m,texImage3D:s,pixelStorei:D0,getParameter:Z0,updateUBOMapping:P0,uniformBlockBinding:v0,texStorage2D:e,texStorage3D:H0,texSubImage2D:R,texSubImage3D:f,compressedTexSubImage2D:o,compressedTexSubImage3D:r,scissor:$0,viewport:K0,reset:x0}}function kU(J,Q,$,W,Z,H,K){let Y=Q.has("WEBGL_multisampled_render_to_texture")?Q.get("WEBGL_multisampled_render_to_texture"):null,U=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),E=new c0,F=new WeakMap,k=new Set,X,q=new WeakMap,M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch(V){}function I(V,R){return M?new OffscreenCanvas(V,R):C9("canvas")}function N(V,R,f){let o=1,r=A0(V);if(r.width>f||r.height>f)o=f/Math.max(r.width,r.height);if(o<1)if(typeof HTMLImageElement<"u"&&V instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&V instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&V instanceof ImageBitmap||typeof VideoFrame<"u"&&V instanceof VideoFrame){let e=Math.floor(o*r.width),H0=Math.floor(o*r.height);if(X===void 0)X=I(e,H0);let m=R?I(e,H0):X;return m.width=e,m.height=H0,m.getContext("2d").drawImage(V,0,0,e,H0),I0("WebGLRenderer: Texture has been resized from ("+r.width+"x"+r.height+") to ("+e+"x"+H0+")."),m}else{if("data"in V)I0("WebGLRenderer: Image in DataTexture is too big ("+r.width+"x"+r.height+").");return V}return V}function G(V){return V.generateMipmaps}function L(V){J.generateMipmap(V)}function w(V){if(V.isWebGLCubeRenderTarget)return J.TEXTURE_CUBE_MAP;if(V.isWebGL3DRenderTarget)return J.TEXTURE_3D;if(V.isWebGLArrayRenderTarget||V.isCompressedArrayTexture)return J.TEXTURE_2D_ARRAY;return J.TEXTURE_2D}function z(V,R,f,o,r,e=!1){if(V!==null){if(J[V]!==void 0)return J[V];I0("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+V+"'")}let H0;if(o){if(H0=Q.get("EXT_texture_norm16"),!H0)I0("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension")}let m=R;if(R===J.RED){if(f===J.FLOAT)m=J.R32F;if(f===J.HALF_FLOAT)m=J.R16F;if(f===J.UNSIGNED_BYTE)m=J.R8;if(f===J.UNSIGNED_SHORT&&H0)m=H0.R16_EXT;if(f===J.SHORT&&H0)m=H0.R16_SNORM_EXT}if(R===J.RED_INTEGER){if(f===J.UNSIGNED_BYTE)m=J.R8UI;if(f===J.UNSIGNED_SHORT)m=J.R16UI;if(f===J.UNSIGNED_INT)m=J.R32UI;if(f===J.BYTE)m=J.R8I;if(f===J.SHORT)m=J.R16I;if(f===J.INT)m=J.R32I}if(R===J.RG){if(f===J.FLOAT)m=J.RG32F;if(f===J.HALF_FLOAT)m=J.RG16F;if(f===J.UNSIGNED_BYTE)m=J.RG8;if(f===J.UNSIGNED_SHORT&&H0)m=H0.RG16_EXT;if(f===J.SHORT&&H0)m=H0.RG16_SNORM_EXT}if(R===J.RG_INTEGER){if(f===J.UNSIGNED_BYTE)m=J.RG8UI;if(f===J.UNSIGNED_SHORT)m=J.RG16UI;if(f===J.UNSIGNED_INT)m=J.RG32UI;if(f===J.BYTE)m=J.RG8I;if(f===J.SHORT)m=J.RG16I;if(f===J.INT)m=J.RG32I}if(R===J.RGB_INTEGER){if(f===J.UNSIGNED_BYTE)m=J.RGB8UI;if(f===J.UNSIGNED_SHORT)m=J.RGB16UI;if(f===J.UNSIGNED_INT)m=J.RGB32UI;if(f===J.BYTE)m=J.RGB8I;if(f===J.SHORT)m=J.RGB16I;if(f===J.INT)m=J.RGB32I}if(R===J.RGBA_INTEGER){if(f===J.UNSIGNED_BYTE)m=J.RGBA8UI;if(f===J.UNSIGNED_SHORT)m=J.RGBA16UI;if(f===J.UNSIGNED_INT)m=J.RGBA32UI;if(f===J.BYTE)m=J.RGBA8I;if(f===J.SHORT)m=J.RGBA16I;if(f===J.INT)m=J.RGBA32I}if(R===J.RGB){if(f===J.UNSIGNED_SHORT&&H0)m=H0.RGB16_EXT;if(f===J.SHORT&&H0)m=H0.RGB16_SNORM_EXT;if(f===J.UNSIGNED_INT_5_9_9_9_REV)m=J.RGB9_E5;if(f===J.UNSIGNED_INT_10F_11F_11F_REV)m=J.R11F_G11F_B10F}if(R===J.RGBA){let s=e?A5:l0.getTransfer(r);if(f===J.FLOAT)m=J.RGBA32F;if(f===J.HALF_FLOAT)m=J.RGBA16F;if(f===J.UNSIGNED_BYTE)m=s===W8?J.SRGB8_ALPHA8:J.RGBA8;if(f===J.UNSIGNED_SHORT&&H0)m=H0.RGBA16_EXT;if(f===J.SHORT&&H0)m=H0.RGBA16_SNORM_EXT;if(f===J.UNSIGNED_SHORT_4_4_4_4)m=J.RGBA4;if(f===J.UNSIGNED_SHORT_5_5_5_1)m=J.RGB5_A1}if(m===J.R16F||m===J.R32F||m===J.RG16F||m===J.RG32F||m===J.RGBA16F||m===J.RGBA32F)Q.get("EXT_color_buffer_float");return m}function P(V,R){let f;if(V){if(R===null||R===A6||R===q9)f=J.DEPTH24_STENCIL8;else if(R===N6)f=J.DEPTH32F_STENCIL8;else if(R===S9)f=J.DEPTH24_STENCIL8,I0("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")}else if(R===null||R===A6||R===q9)f=J.DEPTH_COMPONENT24;else if(R===N6)f=J.DEPTH_COMPONENT32F;else if(R===S9)f=J.DEPTH_COMPONENT16;return f}function C(V,R){if(G(V)===!0||V.isFramebufferTexture&&V.minFilter!==C6&&V.minFilter!==v8)return Math.log2(Math.max(R.width,R.height))+1;else if(V.mipmaps!==void 0&&V.mipmaps.length>0)return V.mipmaps.length;else if(V.isCompressedTexture&&Array.isArray(V.image))return R.mipmaps.length;else return 1}function _(V){let R=V.target;if(R.removeEventListener("dispose",_),B(R),R.isVideoTexture)F.delete(R);if(R.isHTMLTexture)k.delete(R)}function D(V){let R=V.target;R.removeEventListener("dispose",D),A(R)}function B(V){let R=W.get(V);if(R.__webglInit===void 0)return;let f=V.source,o=q.get(f);if(o){let r=o[R.__cacheKey];if(r.usedTimes--,r.usedTimes===0)d(V);if(Object.keys(o).length===0)q.delete(f)}W.remove(V)}function d(V){let R=W.get(V);J.deleteTexture(R.__webglTexture);let f=V.source,o=q.get(f);delete o[R.__cacheKey],K.memory.textures--}function A(V){let R=W.get(V);if(V.depthTexture)V.depthTexture.dispose(),W.remove(V.depthTexture);if(V.isWebGLCubeRenderTarget)for(let o=0;o<6;o++){if(Array.isArray(R.__webglFramebuffer[o]))for(let r=0;r<R.__webglFramebuffer[o].length;r++)J.deleteFramebuffer(R.__webglFramebuffer[o][r]);else J.deleteFramebuffer(R.__webglFramebuffer[o]);if(R.__webglDepthbuffer)J.deleteRenderbuffer(R.__webglDepthbuffer[o])}else{if(Array.isArray(R.__webglFramebuffer))for(let o=0;o<R.__webglFramebuffer.length;o++)J.deleteFramebuffer(R.__webglFramebuffer[o]);else J.deleteFramebuffer(R.__webglFramebuffer);if(R.__webglDepthbuffer)J.deleteRenderbuffer(R.__webglDepthbuffer);if(R.__webglMultisampledFramebuffer)J.deleteFramebuffer(R.__webglMultisampledFramebuffer);if(R.__webglColorRenderbuffer){for(let o=0;o<R.__webglColorRenderbuffer.length;o++)if(R.__webglColorRenderbuffer[o])J.deleteRenderbuffer(R.__webglColorRenderbuffer[o])}if(R.__webglDepthRenderbuffer)J.deleteRenderbuffer(R.__webglDepthRenderbuffer)}let f=V.textures;for(let o=0,r=f.length;o<r;o++){let e=W.get(f[o]);if(e.__webglTexture)J.deleteTexture(e.__webglTexture),K.memory.textures--;W.remove(f[o])}W.remove(V)}let l=0;function i(){l=0}function b(){return l}function u(V){l=V}function x(){let V=l;if(V>=Z.maxTextures)I0("WebGLTextures: Trying to use "+V+" texture units while this GPU supports only "+Z.maxTextures);return l+=1,V}function p(V){let R=[];return R.push(V.wrapS),R.push(V.wrapT),R.push(V.wrapR||0),R.push(V.magFilter),R.push(V.minFilter),R.push(V.anisotropy),R.push(V.internalFormat),R.push(V.format),R.push(V.type),R.push(V.generateMipmaps),R.push(V.premultiplyAlpha),R.push(V.flipY),R.push(V.unpackAlignment),R.push(V.colorSpace),R.join()}function a(V,R){let f=W.get(V);if(V.isVideoTexture)E0(V);if(V.isRenderTargetTexture===!1&&V.isExternalTexture!==!0&&V.version>0&&f.__version!==V.version){let o=V.image;if(o===null)I0("WebGLRenderer: Texture marked for update but no image data found.");else if(o.complete===!1)I0("WebGLRenderer: Texture marked for update but image is incomplete");else{C0(f,V,R);return}}else if(V.isExternalTexture)f.__webglTexture=V.sourceTexture?V.sourceTexture:null;$.bindTexture(J.TEXTURE_2D,f.__webglTexture,J.TEXTURE0+R)}function Q0(V,R){let f=W.get(V);if(V.isRenderTargetTexture===!1&&V.version>0&&f.__version!==V.version){C0(f,V,R);return}else if(V.isExternalTexture)f.__webglTexture=V.sourceTexture?V.sourceTexture:null;$.bindTexture(J.TEXTURE_2D_ARRAY,f.__webglTexture,J.TEXTURE0+R)}function k0(V,R){let f=W.get(V);if(V.isRenderTargetTexture===!1&&V.version>0&&f.__version!==V.version){C0(f,V,R);return}$.bindTexture(J.TEXTURE_3D,f.__webglTexture,J.TEXTURE0+R)}function z0(V,R){let f=W.get(V);if(V.isCubeDepthTexture!==!0&&V.version>0&&f.__version!==V.version){i0(f,V,R);return}$.bindTexture(J.TEXTURE_CUBE_MAP,f.__webglTexture,J.TEXTURE0+R)}let O0={[b1]:J.REPEAT,[AJ]:J.CLAMP_TO_EDGE,[y1]:J.MIRRORED_REPEAT},o0={[C6]:J.NEAREST,[h1]:J.NEAREST_MIPMAP_NEAREST,[T9]:J.NEAREST_MIPMAP_LINEAR,[v8]:J.LINEAR,[_J]:J.LINEAR_MIPMAP_NEAREST,[y6]:J.LINEAR_MIPMAP_LINEAR},p0={[s1]:J.NEVER,[t1]:J.ALWAYS,[i1]:J.LESS,[bJ]:J.LEQUAL,[o1]:J.EQUAL,[yJ]:J.GEQUAL,[a1]:J.GREATER,[r1]:J.NOTEQUAL};function n(V,R){if(R.type===N6&&Q.has("OES_texture_float_linear")===!1&&(R.magFilter===v8||R.magFilter===_J||R.magFilter===T9||R.magFilter===y6||R.minFilter===v8||R.minFilter===_J||R.minFilter===T9||R.minFilter===y6))I0("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.");if(J.texParameteri(V,J.TEXTURE_WRAP_S,O0[R.wrapS]),J.texParameteri(V,J.TEXTURE_WRAP_T,O0[R.wrapT]),V===J.TEXTURE_3D||V===J.TEXTURE_2D_ARRAY)J.texParameteri(V,J.TEXTURE_WRAP_R,O0[R.wrapR]);if(J.texParameteri(V,J.TEXTURE_MAG_FILTER,o0[R.magFilter]),J.texParameteri(V,J.TEXTURE_MIN_FILTER,o0[R.minFilter]),R.compareFunction)J.texParameteri(V,J.TEXTURE_COMPARE_MODE,J.COMPARE_REF_TO_TEXTURE),J.texParameteri(V,J.TEXTURE_COMPARE_FUNC,p0[R.compareFunction]);if(Q.has("EXT_texture_filter_anisotropic")===!0){if(R.magFilter===C6)return;if(R.minFilter!==T9&&R.minFilter!==y6)return;if(R.type===N6&&Q.has("OES_texture_float_linear")===!1)return;if(R.anisotropy>1||W.get(R).__currentAnisotropy){let f=Q.get("EXT_texture_filter_anisotropic");J.texParameterf(V,f.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(R.anisotropy,Z.getMaxAnisotropy())),W.get(R).__currentAnisotropy=R.anisotropy}}}function G0(V,R){let f=!1;if(V.__webglInit===void 0)V.__webglInit=!0,R.addEventListener("dispose",_);let o=R.source,r=q.get(o);if(r===void 0)r={},q.set(o,r);let e=p(R);if(e!==V.__cacheKey){if(r[e]===void 0)r[e]={texture:J.createTexture(),usedTimes:0},K.memory.textures++,f=!0;r[e].usedTimes++;let H0=r[V.__cacheKey];if(H0!==void 0){if(r[V.__cacheKey].usedTimes--,H0.usedTimes===0)d(R)}V.__cacheKey=e,V.__webglTexture=r[e].texture}return f}function L0(V,R,f){return Math.floor(Math.floor(V/f)/R)}function N0(V,R,f,o){let e=V.updateRanges;if(e.length===0)$.texSubImage2D(J.TEXTURE_2D,0,0,0,R.width,R.height,f,o,R.data);else{e.sort((D0,$0)=>D0.start-$0.start);let H0=0;for(let D0=1;D0<e.length;D0++){let $0=e[H0],K0=e[D0],P0=$0.start+$0.count,v0=L0(K0.start,R.width,4),x0=L0($0.start,R.width,4);if(K0.start<=P0+1&&v0===x0&&L0(K0.start+K0.count-1,R.width,4)===v0)$0.count=Math.max($0.count,K0.start+K0.count-$0.start);else++H0,e[H0]=K0}e.length=H0+1;let m=$.getParameter(J.UNPACK_ROW_LENGTH),s=$.getParameter(J.UNPACK_SKIP_PIXELS),Z0=$.getParameter(J.UNPACK_SKIP_ROWS);$.pixelStorei(J.UNPACK_ROW_LENGTH,R.width);for(let D0=0,$0=e.length;D0<$0;D0++){let K0=e[D0],P0=Math.floor(K0.start/4),v0=Math.ceil(K0.count/4),x0=P0%R.width,T=Math.floor(P0/R.width),W0=v0,c=1;$.pixelStorei(J.UNPACK_SKIP_PIXELS,x0),$.pixelStorei(J.UNPACK_SKIP_ROWS,T),$.texSubImage2D(J.TEXTURE_2D,0,x0,T,W0,1,f,o,R.data)}V.clearUpdateRanges(),$.pixelStorei(J.UNPACK_ROW_LENGTH,m),$.pixelStorei(J.UNPACK_SKIP_PIXELS,s),$.pixelStorei(J.UNPACK_SKIP_ROWS,Z0)}}function C0(V,R,f){let o=J.TEXTURE_2D;if(R.isDataArrayTexture||R.isCompressedArrayTexture)o=J.TEXTURE_2D_ARRAY;if(R.isData3DTexture)o=J.TEXTURE_3D;let r=G0(V,R),e=R.source;$.bindTexture(o,V.__webglTexture,J.TEXTURE0+f);let H0=W.get(e);if(e.version!==H0.__version||r===!0){if($.activeTexture(J.TEXTURE0+f),(typeof ImageBitmap<"u"&&R.image instanceof ImageBitmap)===!1){let c=l0.getPrimaries(l0.workingColorSpace),J0=R.colorSpace===p6?null:l0.getPrimaries(R.colorSpace),R0=R.colorSpace===p6||c===J0?J.NONE:J.BROWSER_DEFAULT_WEBGL;$.pixelStorei(J.UNPACK_FLIP_Y_WEBGL,R.flipY),$.pixelStorei(J.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),$.pixelStorei(J.UNPACK_COLORSPACE_CONVERSION_WEBGL,R0)}$.pixelStorei(J.UNPACK_ALIGNMENT,R.unpackAlignment);let s=N(R.image,!1,Z.maxTextureSize);s=K8(R,s);let Z0=H.convert(R.format,R.colorSpace),D0=H.convert(R.type),$0=z(R.internalFormat,Z0,D0,R.normalized,R.colorSpace,R.isVideoTexture);n(o,R);let K0,P0=R.mipmaps,v0=R.isVideoTexture!==!0,x0=H0.__version===void 0||r===!0,T=e.dataReady,W0=C(R,s);if(R.isDepthTexture){if($0=P(R.format===x6,R.type),x0)if(v0)$.texStorage2D(J.TEXTURE_2D,1,$0,s.width,s.height);else $.texImage2D(J.TEXTURE_2D,0,$0,s.width,s.height,0,Z0,D0,null)}else if(R.isDataTexture)if(P0.length>0){if(v0&&x0)$.texStorage2D(J.TEXTURE_2D,W0,$0,P0[0].width,P0[0].height);for(let c=0,J0=P0.length;c<J0;c++)if(K0=P0[c],v0){if(T)$.texSubImage2D(J.TEXTURE_2D,c,0,0,K0.width,K0.height,Z0,D0,K0.data)}else $.texImage2D(J.TEXTURE_2D,c,$0,K0.width,K0.height,0,Z0,D0,K0.data);R.generateMipmaps=!1}else if(v0){if(x0)$.texStorage2D(J.TEXTURE_2D,W0,$0,s.width,s.height);if(T)N0(R,s,Z0,D0)}else $.texImage2D(J.TEXTURE_2D,0,$0,s.width,s.height,0,Z0,D0,s.data);else if(R.isCompressedTexture)if(R.isCompressedArrayTexture){if(v0&&x0)$.texStorage3D(J.TEXTURE_2D_ARRAY,W0,$0,P0[0].width,P0[0].height,s.depth);for(let c=0,J0=P0.length;c<J0;c++)if(K0=P0[c],R.format!==Q6)if(Z0!==null)if(v0){if(T)if(R.layerUpdates.size>0){let R0=ZQ(K0.width,K0.height,R.format,R.type);for(let t of R.layerUpdates){let B0=K0.data.subarray(t*R0/K0.data.BYTES_PER_ELEMENT,(t+1)*R0/K0.data.BYTES_PER_ELEMENT);$.compressedTexSubImage3D(J.TEXTURE_2D_ARRAY,c,0,0,t,K0.width,K0.height,1,Z0,B0)}R.clearLayerUpdates()}else $.compressedTexSubImage3D(J.TEXTURE_2D_ARRAY,c,0,0,0,K0.width,K0.height,s.depth,Z0,K0.data)}else $.compressedTexImage3D(J.TEXTURE_2D_ARRAY,c,$0,K0.width,K0.height,s.depth,0,K0.data,0,0);else I0("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(v0){if(T)$.texSubImage3D(J.TEXTURE_2D_ARRAY,c,0,0,0,K0.width,K0.height,s.depth,Z0,D0,K0.data)}else $.texImage3D(J.TEXTURE_2D_ARRAY,c,$0,K0.width,K0.height,s.depth,0,Z0,D0,K0.data)}else{if(v0&&x0)$.texStorage2D(J.TEXTURE_2D,W0,$0,P0[0].width,P0[0].height);for(let c=0,J0=P0.length;c<J0;c++)if(K0=P0[c],R.format!==Q6)if(Z0!==null)if(v0){if(T)$.compressedTexSubImage2D(J.TEXTURE_2D,c,0,0,K0.width,K0.height,Z0,K0.data)}else $.compressedTexImage2D(J.TEXTURE_2D,c,$0,K0.width,K0.height,0,K0.data);else I0("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(v0){if(T)$.texSubImage2D(J.TEXTURE_2D,c,0,0,K0.width,K0.height,Z0,D0,K0.data)}else $.texImage2D(J.TEXTURE_2D,c,$0,K0.width,K0.height,0,Z0,D0,K0.data)}else if(R.isDataArrayTexture)if(v0){if(x0)$.texStorage3D(J.TEXTURE_2D_ARRAY,W0,$0,s.width,s.height,s.depth);if(T)if(R.layerUpdates.size>0){let c=ZQ(s.width,s.height,R.format,R.type);for(let J0 of R.layerUpdates){let R0=s.data.subarray(J0*c/s.data.BYTES_PER_ELEMENT,(J0+1)*c/s.data.BYTES_PER_ELEMENT);$.texSubImage3D(J.TEXTURE_2D_ARRAY,0,0,0,J0,s.width,s.height,1,Z0,D0,R0)}R.clearLayerUpdates()}else $.texSubImage3D(J.TEXTURE_2D_ARRAY,0,0,0,0,s.width,s.height,s.depth,Z0,D0,s.data)}else $.texImage3D(J.TEXTURE_2D_ARRAY,0,$0,s.width,s.height,s.depth,0,Z0,D0,s.data);else if(R.isData3DTexture)if(v0){if(x0)$.texStorage3D(J.TEXTURE_3D,W0,$0,s.width,s.height,s.depth);if(T)$.texSubImage3D(J.TEXTURE_3D,0,0,0,0,s.width,s.height,s.depth,Z0,D0,s.data)}else $.texImage3D(J.TEXTURE_3D,0,$0,s.width,s.height,s.depth,0,Z0,D0,s.data);else if(R.isFramebufferTexture){if(x0)if(v0)$.texStorage2D(J.TEXTURE_2D,W0,$0,s.width,s.height);else{let{width:c,height:J0}=s;for(let R0=0;R0<W0;R0++)$.texImage2D(J.TEXTURE_2D,R0,$0,c,J0,0,Z0,D0,null),c>>=1,J0>>=1}}else if(R.isHTMLTexture){if("texElementImage2D"in J){let c=J.canvas;if(!c.hasAttribute("layoutsubtree"))c.setAttribute("layoutsubtree","true");if(s.parentNode!==c){c.appendChild(s),k.add(R),c.onpaint=(S0)=>{let k8=S0.changedElements;for(let r0 of k)if(k8.includes(r0.image))r0.needsUpdate=!0},c.requestPaint();return}let J0=0,R0=J.RGBA,t=J.RGBA,B0=J.UNSIGNED_BYTE;J.texElementImage2D(J.TEXTURE_2D,J0,R0,t,B0,s),J.texParameteri(J.TEXTURE_2D,J.TEXTURE_MIN_FILTER,J.LINEAR),J.texParameteri(J.TEXTURE_2D,J.TEXTURE_WRAP_S,J.CLAMP_TO_EDGE),J.texParameteri(J.TEXTURE_2D,J.TEXTURE_WRAP_T,J.CLAMP_TO_EDGE)}}else if(P0.length>0){if(v0&&x0){let c=A0(P0[0]);$.texStorage2D(J.TEXTURE_2D,W0,$0,c.width,c.height)}for(let c=0,J0=P0.length;c<J0;c++)if(K0=P0[c],v0){if(T)$.texSubImage2D(J.TEXTURE_2D,c,0,0,Z0,D0,K0)}else $.texImage2D(J.TEXTURE_2D,c,$0,Z0,D0,K0);R.generateMipmaps=!1}else if(v0){if(x0){let c=A0(s);$.texStorage2D(J.TEXTURE_2D,W0,$0,c.width,c.height)}if(T)$.texSubImage2D(J.TEXTURE_2D,0,0,0,Z0,D0,s)}else $.texImage2D(J.TEXTURE_2D,0,$0,Z0,D0,s);if(G(R))L(o);if(H0.__version=e.version,R.onUpdate)R.onUpdate(R)}V.__version=R.version}function i0(V,R,f){if(R.image.length!==6)return;let o=G0(V,R),r=R.source;$.bindTexture(J.TEXTURE_CUBE_MAP,V.__webglTexture,J.TEXTURE0+f);let e=W.get(r);if(r.version!==e.__version||o===!0){$.activeTexture(J.TEXTURE0+f);let H0=l0.getPrimaries(l0.workingColorSpace),m=R.colorSpace===p6?null:l0.getPrimaries(R.colorSpace),s=R.colorSpace===p6||H0===m?J.NONE:J.BROWSER_DEFAULT_WEBGL;$.pixelStorei(J.UNPACK_FLIP_Y_WEBGL,R.flipY),$.pixelStorei(J.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),$.pixelStorei(J.UNPACK_ALIGNMENT,R.unpackAlignment),$.pixelStorei(J.UNPACK_COLORSPACE_CONVERSION_WEBGL,s);let Z0=R.isCompressedTexture||R.image[0].isCompressedTexture,D0=R.image[0]&&R.image[0].isDataTexture,$0=[];for(let t=0;t<6;t++){if(!Z0&&!D0)$0[t]=N(R.image[t],!0,Z.maxCubemapSize);else $0[t]=D0?R.image[t].image:R.image[t];$0[t]=K8(R,$0[t])}let K0=$0[0],P0=H.convert(R.format,R.colorSpace),v0=H.convert(R.type),x0=z(R.internalFormat,P0,v0,R.normalized,R.colorSpace),T=R.isVideoTexture!==!0,W0=e.__version===void 0||o===!0,c=r.dataReady,J0=C(R,K0);n(J.TEXTURE_CUBE_MAP,R);let R0;if(Z0){if(T&&W0)$.texStorage2D(J.TEXTURE_CUBE_MAP,J0,x0,K0.width,K0.height);for(let t=0;t<6;t++){R0=$0[t].mipmaps;for(let B0=0;B0<R0.length;B0++){let S0=R0[B0];if(R.format!==Q6)if(P0!==null)if(T){if(c)$.compressedTexSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+t,B0,0,0,S0.width,S0.height,P0,S0.data)}else $.compressedTexImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+t,B0,x0,S0.width,S0.height,0,S0.data);else I0("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()");else if(T){if(c)$.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+t,B0,0,0,S0.width,S0.height,P0,v0,S0.data)}else $.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+t,B0,x0,S0.width,S0.height,0,P0,v0,S0.data)}}}else{if(R0=R.mipmaps,T&&W0){if(R0.length>0)J0++;let t=A0($0[0]);$.texStorage2D(J.TEXTURE_CUBE_MAP,J0,x0,t.width,t.height)}for(let t=0;t<6;t++)if(D0){if(T){if(c)$.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,$0[t].width,$0[t].height,P0,v0,$0[t].data)}else $.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,x0,$0[t].width,$0[t].height,0,P0,v0,$0[t].data);for(let B0=0;B0<R0.length;B0++){let k8=R0[B0].image[t].image;if(T){if(c)$.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+t,B0+1,0,0,k8.width,k8.height,P0,v0,k8.data)}else $.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+t,B0+1,x0,k8.width,k8.height,0,P0,v0,k8.data)}}else{if(T){if(c)$.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,P0,v0,$0[t])}else $.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,x0,P0,v0,$0[t]);for(let B0=0;B0<R0.length;B0++){let S0=R0[B0];if(T){if(c)$.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+t,B0+1,0,0,P0,v0,S0.image[t])}else $.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+t,B0+1,x0,P0,v0,S0.image[t])}}}if(G(R))L(J.TEXTURE_CUBE_MAP);if(e.__version=r.version,R.onUpdate)R.onUpdate(R)}V.__version=R.version}function h0(V,R,f,o,r,e){let H0=H.convert(f.format,f.colorSpace),m=H.convert(f.type),s=z(f.internalFormat,H0,m,f.normalized,f.colorSpace),Z0=W.get(R),D0=W.get(f);if(D0.__renderTarget=R,!Z0.__hasExternalTextures){let $0=Math.max(1,R.width>>e),K0=Math.max(1,R.height>>e);if(r===J.TEXTURE_3D||r===J.TEXTURE_2D_ARRAY)$.texImage3D(r,e,s,$0,K0,R.depth,0,H0,m,null);else $.texImage2D(r,e,s,$0,K0,0,H0,m,null)}if($.bindFramebuffer(J.FRAMEBUFFER,V),s0(R))Y.framebufferTexture2DMultisampleEXT(J.FRAMEBUFFER,o,r,D0.__webglTexture,0,m0(R));else if(r===J.TEXTURE_2D||r>=J.TEXTURE_CUBE_MAP_POSITIVE_X&&r<=J.TEXTURE_CUBE_MAP_NEGATIVE_Z)J.framebufferTexture2D(J.FRAMEBUFFER,o,r,D0.__webglTexture,e);$.bindFramebuffer(J.FRAMEBUFFER,null)}function d0(V,R,f){if(J.bindRenderbuffer(J.RENDERBUFFER,V),R.depthBuffer){let o=R.depthTexture,r=o&&o.isDepthTexture?o.type:null,e=P(R.stencilBuffer,r),H0=R.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT;if(s0(R))Y.renderbufferStorageMultisampleEXT(J.RENDERBUFFER,m0(R),e,R.width,R.height);else if(f)J.renderbufferStorageMultisample(J.RENDERBUFFER,m0(R),e,R.width,R.height);else J.renderbufferStorage(J.RENDERBUFFER,e,R.width,R.height);J.framebufferRenderbuffer(J.FRAMEBUFFER,H0,J.RENDERBUFFER,V)}else{let o=R.textures;for(let r=0;r<o.length;r++){let e=o[r],H0=H.convert(e.format,e.colorSpace),m=H.convert(e.type),s=z(e.internalFormat,H0,m,e.normalized,e.colorSpace);if(s0(R))Y.renderbufferStorageMultisampleEXT(J.RENDERBUFFER,m0(R),s,R.width,R.height);else if(f)J.renderbufferStorageMultisample(J.RENDERBUFFER,m0(R),s,R.width,R.height);else J.renderbufferStorage(J.RENDERBUFFER,s,R.width,R.height)}}J.bindRenderbuffer(J.RENDERBUFFER,null)}function e0(V,R,f){let o=R.isWebGLCubeRenderTarget===!0;if($.bindFramebuffer(J.FRAMEBUFFER,V),!(R.depthTexture&&R.depthTexture.isDepthTexture))throw Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let r=W.get(R.depthTexture);if(r.__renderTarget=R,!r.__webglTexture||R.depthTexture.image.width!==R.width||R.depthTexture.image.height!==R.height)R.depthTexture.image.width=R.width,R.depthTexture.image.height=R.height,R.depthTexture.needsUpdate=!0;if(o){if(r.__webglInit===void 0)r.__webglInit=!0,R.depthTexture.addEventListener("dispose",_);if(r.__webglTexture===void 0){r.__webglTexture=J.createTexture(),$.bindTexture(J.TEXTURE_CUBE_MAP,r.__webglTexture),n(J.TEXTURE_CUBE_MAP,R.depthTexture);let Z0=H.convert(R.depthTexture.format),D0=H.convert(R.depthTexture.type),$0;if(R.depthTexture.format===h6)$0=J.DEPTH_COMPONENT24;else if(R.depthTexture.format===x6)$0=J.DEPTH24_STENCIL8;for(let K0=0;K0<6;K0++)J.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+K0,0,$0,R.width,R.height,0,Z0,D0,null)}}else a(R.depthTexture,0);let e=r.__webglTexture,H0=m0(R),m=o?J.TEXTURE_CUBE_MAP_POSITIVE_X+f:J.TEXTURE_2D,s=R.depthTexture.format===x6?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT;if(R.depthTexture.format===h6)if(s0(R))Y.framebufferTexture2DMultisampleEXT(J.FRAMEBUFFER,s,m,e,0,H0);else J.framebufferTexture2D(J.FRAMEBUFFER,s,m,e,0);else if(R.depthTexture.format===x6)if(s0(R))Y.framebufferTexture2DMultisampleEXT(J.FRAMEBUFFER,s,m,e,0,H0);else J.framebufferTexture2D(J.FRAMEBUFFER,s,m,e,0);else throw Error("Unknown depthTexture format")}function J8(V){let R=W.get(V),f=V.isWebGLCubeRenderTarget===!0;if(R.__boundDepthTexture!==V.depthTexture){let o=V.depthTexture;if(R.__depthDisposeCallback)R.__depthDisposeCallback();if(o){let r=()=>{delete R.__boundDepthTexture,delete R.__depthDisposeCallback,o.removeEventListener("dispose",r)};o.addEventListener("dispose",r),R.__depthDisposeCallback=r}R.__boundDepthTexture=o}if(V.depthTexture&&!R.__autoAllocateDepthBuffer)if(f)for(let o=0;o<6;o++)e0(R.__webglFramebuffer[o],V,o);else{let o=V.texture.mipmaps;if(o&&o.length>0)e0(R.__webglFramebuffer[0],V,0);else e0(R.__webglFramebuffer,V,0)}else if(f){R.__webglDepthbuffer=[];for(let o=0;o<6;o++)if($.bindFramebuffer(J.FRAMEBUFFER,R.__webglFramebuffer[o]),R.__webglDepthbuffer[o]===void 0)R.__webglDepthbuffer[o]=J.createRenderbuffer(),d0(R.__webglDepthbuffer[o],V,!1);else{let r=V.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT,e=R.__webglDepthbuffer[o];J.bindRenderbuffer(J.RENDERBUFFER,e),J.framebufferRenderbuffer(J.FRAMEBUFFER,r,J.RENDERBUFFER,e)}}else{let o=V.texture.mipmaps;if(o&&o.length>0)$.bindFramebuffer(J.FRAMEBUFFER,R.__webglFramebuffer[0]);else $.bindFramebuffer(J.FRAMEBUFFER,R.__webglFramebuffer);if(R.__webglDepthbuffer===void 0)R.__webglDepthbuffer=J.createRenderbuffer(),d0(R.__webglDepthbuffer,V,!1);else{let r=V.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT,e=R.__webglDepthbuffer;J.bindRenderbuffer(J.RENDERBUFFER,e),J.framebufferRenderbuffer(J.FRAMEBUFFER,r,J.RENDERBUFFER,e)}}$.bindFramebuffer(J.FRAMEBUFFER,null)}function f0(V,R,f){let o=W.get(V);if(R!==void 0)h0(o.__webglFramebuffer,V,V.texture,J.COLOR_ATTACHMENT0,J.TEXTURE_2D,0);if(f!==void 0)J8(V)}function M8(V){let R=V.texture,f=W.get(V),o=W.get(R);V.addEventListener("dispose",D);let r=V.textures,e=V.isWebGLCubeRenderTarget===!0,H0=r.length>1;if(!H0){if(o.__webglTexture===void 0)o.__webglTexture=J.createTexture();o.__version=R.version,K.memory.textures++}if(e){f.__webglFramebuffer=[];for(let m=0;m<6;m++)if(R.mipmaps&&R.mipmaps.length>0){f.__webglFramebuffer[m]=[];for(let s=0;s<R.mipmaps.length;s++)f.__webglFramebuffer[m][s]=J.createFramebuffer()}else f.__webglFramebuffer[m]=J.createFramebuffer()}else{if(R.mipmaps&&R.mipmaps.length>0){f.__webglFramebuffer=[];for(let m=0;m<R.mipmaps.length;m++)f.__webglFramebuffer[m]=J.createFramebuffer()}else f.__webglFramebuffer=J.createFramebuffer();if(H0)for(let m=0,s=r.length;m<s;m++){let Z0=W.get(r[m]);if(Z0.__webglTexture===void 0)Z0.__webglTexture=J.createTexture(),K.memory.textures++}if(V.samples>0&&s0(V)===!1){f.__webglMultisampledFramebuffer=J.createFramebuffer(),f.__webglColorRenderbuffer=[],$.bindFramebuffer(J.FRAMEBUFFER,f.__webglMultisampledFramebuffer);for(let m=0;m<r.length;m++){let s=r[m];f.__webglColorRenderbuffer[m]=J.createRenderbuffer(),J.bindRenderbuffer(J.RENDERBUFFER,f.__webglColorRenderbuffer[m]);let Z0=H.convert(s.format,s.colorSpace),D0=H.convert(s.type),$0=z(s.internalFormat,Z0,D0,s.normalized,s.colorSpace,V.isXRRenderTarget===!0),K0=m0(V);J.renderbufferStorageMultisample(J.RENDERBUFFER,K0,$0,V.width,V.height),J.framebufferRenderbuffer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0+m,J.RENDERBUFFER,f.__webglColorRenderbuffer[m])}if(J.bindRenderbuffer(J.RENDERBUFFER,null),V.depthBuffer)f.__webglDepthRenderbuffer=J.createRenderbuffer(),d0(f.__webglDepthRenderbuffer,V,!0);$.bindFramebuffer(J.FRAMEBUFFER,null)}}if(e){$.bindTexture(J.TEXTURE_CUBE_MAP,o.__webglTexture),n(J.TEXTURE_CUBE_MAP,R);for(let m=0;m<6;m++)if(R.mipmaps&&R.mipmaps.length>0)for(let s=0;s<R.mipmaps.length;s++)h0(f.__webglFramebuffer[m][s],V,R,J.COLOR_ATTACHMENT0,J.TEXTURE_CUBE_MAP_POSITIVE_X+m,s);else h0(f.__webglFramebuffer[m],V,R,J.COLOR_ATTACHMENT0,J.TEXTURE_CUBE_MAP_POSITIVE_X+m,0);if(G(R))L(J.TEXTURE_CUBE_MAP);$.unbindTexture()}else if(H0){for(let m=0,s=r.length;m<s;m++){let Z0=r[m],D0=W.get(Z0),$0=J.TEXTURE_2D;if(V.isWebGL3DRenderTarget||V.isWebGLArrayRenderTarget)$0=V.isWebGL3DRenderTarget?J.TEXTURE_3D:J.TEXTURE_2D_ARRAY;if($.bindTexture($0,D0.__webglTexture),n($0,Z0),h0(f.__webglFramebuffer,V,Z0,J.COLOR_ATTACHMENT0+m,$0,0),G(Z0))L($0)}$.unbindTexture()}else{let m=J.TEXTURE_2D;if(V.isWebGL3DRenderTarget||V.isWebGLArrayRenderTarget)m=V.isWebGL3DRenderTarget?J.TEXTURE_3D:J.TEXTURE_2D_ARRAY;if($.bindTexture(m,o.__webglTexture),n(m,R),R.mipmaps&&R.mipmaps.length>0)for(let s=0;s<R.mipmaps.length;s++)h0(f.__webglFramebuffer[s],V,R,J.COLOR_ATTACHMENT0,m,s);else h0(f.__webglFramebuffer,V,R,J.COLOR_ATTACHMENT0,m,0);if(G(R))L(m);$.unbindTexture()}if(V.depthBuffer)J8(V)}function B8(V){let R=V.textures;for(let f=0,o=R.length;f<o;f++){let r=R[f];if(G(r)){let e=w(V),H0=W.get(r).__webglTexture;$.bindTexture(e,H0),L(e),$.unbindTexture()}}}let N8=[],S=[];function _8(V){if(V.samples>0){if(s0(V)===!1){let{textures:R,width:f,height:o}=V,r=J.COLOR_BUFFER_BIT,e=V.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT,H0=W.get(V),m=R.length>1;if(m)for(let Z0=0;Z0<R.length;Z0++)$.bindFramebuffer(J.FRAMEBUFFER,H0.__webglMultisampledFramebuffer),J.framebufferRenderbuffer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0+Z0,J.RENDERBUFFER,null),$.bindFramebuffer(J.FRAMEBUFFER,H0.__webglFramebuffer),J.framebufferTexture2D(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0+Z0,J.TEXTURE_2D,null,0);$.bindFramebuffer(J.READ_FRAMEBUFFER,H0.__webglMultisampledFramebuffer);let s=V.texture.mipmaps;if(s&&s.length>0)$.bindFramebuffer(J.DRAW_FRAMEBUFFER,H0.__webglFramebuffer[0]);else $.bindFramebuffer(J.DRAW_FRAMEBUFFER,H0.__webglFramebuffer);for(let Z0=0;Z0<R.length;Z0++){if(V.resolveDepthBuffer){if(V.depthBuffer)r|=J.DEPTH_BUFFER_BIT;if(V.stencilBuffer&&V.resolveStencilBuffer)r|=J.STENCIL_BUFFER_BIT}if(m){J.framebufferRenderbuffer(J.READ_FRAMEBUFFER,J.COLOR_ATTACHMENT0,J.RENDERBUFFER,H0.__webglColorRenderbuffer[Z0]);let D0=W.get(R[Z0]).__webglTexture;J.framebufferTexture2D(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0,J.TEXTURE_2D,D0,0)}if(J.blitFramebuffer(0,0,f,o,0,0,f,o,r,J.NEAREST),U===!0){if(N8.length=0,S.length=0,N8.push(J.COLOR_ATTACHMENT0+Z0),V.depthBuffer&&V.resolveDepthBuffer===!1)N8.push(e),S.push(e),J.invalidateFramebuffer(J.DRAW_FRAMEBUFFER,S);J.invalidateFramebuffer(J.READ_FRAMEBUFFER,N8)}}if($.bindFramebuffer(J.READ_FRAMEBUFFER,null),$.bindFramebuffer(J.DRAW_FRAMEBUFFER,null),m)for(let Z0=0;Z0<R.length;Z0++){$.bindFramebuffer(J.FRAMEBUFFER,H0.__webglMultisampledFramebuffer),J.framebufferRenderbuffer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0+Z0,J.RENDERBUFFER,H0.__webglColorRenderbuffer[Z0]);let D0=W.get(R[Z0]).__webglTexture;$.bindFramebuffer(J.FRAMEBUFFER,H0.__webglFramebuffer),J.framebufferTexture2D(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0+Z0,J.TEXTURE_2D,D0,0)}$.bindFramebuffer(J.DRAW_FRAMEBUFFER,H0.__webglMultisampledFramebuffer)}else if(V.depthBuffer&&V.resolveDepthBuffer===!1&&U){let R=V.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT;J.invalidateFramebuffer(J.DRAW_FRAMEBUFFER,[R])}}}function m0(V){return Math.min(Z.maxSamples,V.samples)}function s0(V){let R=W.get(V);return V.samples>0&&Q.has("WEBGL_multisampled_render_to_texture")===!0&&R.__useRenderToTexture!==!1}function E0(V){let R=K.render.frame;if(F.get(V)!==R)F.set(V,R),V.update()}function K8(V,R){let{colorSpace:f,format:o,type:r}=V;if(V.isCompressedTexture===!0||V.isVideoTexture===!0)return R;if(f!==C5&&f!==p6)if(l0.getTransfer(f)===W8){if(o!==Q6||r!==i8)I0("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.")}else _0("WebGLTextures: Unsupported texture color space:",f);return R}function A0(V){if(typeof HTMLImageElement<"u"&&V instanceof HTMLImageElement)E.width=V.naturalWidth||V.width,E.height=V.naturalHeight||V.height;else if(typeof VideoFrame<"u"&&V instanceof VideoFrame)E.width=V.displayWidth,E.height=V.displayHeight;else E.width=V.width,E.height=V.height;return E}this.allocateTextureUnit=x,this.resetTextureUnits=i,this.getTextureUnits=b,this.setTextureUnits=u,this.setTexture2D=a,this.setTexture2DArray=Q0,this.setTexture3D=k0,this.setTextureCube=z0,this.rebindTextures=f0,this.setupRenderTarget=M8,this.updateRenderTargetMipmap=B8,this.updateMultisampleRenderTarget=_8,this.setupDepthRenderbuffer=J8,this.setupFrameBufferTexture=h0,this.useMultisampledRTT=s0,this.isReversedDepthBuffer=function(){return $.buffers.depth.getReversed()}}function FU(J,Q){function $(W,Z=p6){let H,K=l0.getTransfer(Z);if(W===i8)return J.UNSIGNED_BYTE;if(W===u7)return J.UNSIGNED_SHORT_4_4_4_4;if(W===c7)return J.UNSIGNED_SHORT_5_5_5_1;if(W===p1)return J.UNSIGNED_INT_5_9_9_9_REV;if(W===d1)return J.UNSIGNED_INT_10F_11F_11F_REV;if(W===x1)return J.BYTE;if(W===g1)return J.SHORT;if(W===S9)return J.UNSIGNED_SHORT;if(W===m7)return J.INT;if(W===A6)return J.UNSIGNED_INT;if(W===N6)return J.FLOAT;if(W===k6)return J.HALF_FLOAT;if(W===l1)return J.ALPHA;if(W===m1)return J.RGB;if(W===Q6)return J.RGBA;if(W===h6)return J.DEPTH_COMPONENT;if(W===x6)return J.DEPTH_STENCIL;if(W===u1)return J.RED;if(W===n7)return J.RED_INTEGER;if(W===g6)return J.RG;if(W===s7)return J.RG_INTEGER;if(W===i7)return J.RGBA_INTEGER;if(W===PJ||W===TJ||W===SJ||W===jJ)if(K===W8)if(H=Q.get("WEBGL_compressed_texture_s3tc_srgb"),H!==null){if(W===PJ)return H.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(W===TJ)return H.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(W===SJ)return H.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(W===jJ)return H.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(H=Q.get("WEBGL_compressed_texture_s3tc"),H!==null){if(W===PJ)return H.COMPRESSED_RGB_S3TC_DXT1_EXT;if(W===TJ)return H.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(W===SJ)return H.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(W===jJ)return H.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(W===o7||W===a7||W===r7||W===t7)if(H=Q.get("WEBGL_compressed_texture_pvrtc"),H!==null){if(W===o7)return H.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(W===a7)return H.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(W===r7)return H.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(W===t7)return H.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(W===e7||W===J5||W===Q5||W===$5||W===W5||W===vJ||W===Z5)if(H=Q.get("WEBGL_compressed_texture_etc"),H!==null){if(W===e7||W===J5)return K===W8?H.COMPRESSED_SRGB8_ETC2:H.COMPRESSED_RGB8_ETC2;if(W===Q5)return K===W8?H.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:H.COMPRESSED_RGBA8_ETC2_EAC;if(W===$5)return H.COMPRESSED_R11_EAC;if(W===W5)return H.COMPRESSED_SIGNED_R11_EAC;if(W===vJ)return H.COMPRESSED_RG11_EAC;if(W===Z5)return H.COMPRESSED_SIGNED_RG11_EAC}else return null;if(W===H5||W===K5||W===Y5||W===U5||W===E5||W===X5||W===G5||W===N5||W===k5||W===F5||W===q5||W===D5||W===R5||W===O5)if(H=Q.get("WEBGL_compressed_texture_astc"),H!==null){if(W===H5)return K===W8?H.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:H.COMPRESSED_RGBA_ASTC_4x4_KHR;if(W===K5)return K===W8?H.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:H.COMPRESSED_RGBA_ASTC_5x4_KHR;if(W===Y5)return K===W8?H.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:H.COMPRESSED_RGBA_ASTC_5x5_KHR;if(W===U5)return K===W8?H.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:H.COMPRESSED_RGBA_ASTC_6x5_KHR;if(W===E5)return K===W8?H.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:H.COMPRESSED_RGBA_ASTC_6x6_KHR;if(W===X5)return K===W8?H.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:H.COMPRESSED_RGBA_ASTC_8x5_KHR;if(W===G5)return K===W8?H.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:H.COMPRESSED_RGBA_ASTC_8x6_KHR;if(W===N5)return K===W8?H.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:H.COMPRESSED_RGBA_ASTC_8x8_KHR;if(W===k5)return K===W8?H.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:H.COMPRESSED_RGBA_ASTC_10x5_KHR;if(W===F5)return K===W8?H.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:H.COMPRESSED_RGBA_ASTC_10x6_KHR;if(W===q5)return K===W8?H.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:H.COMPRESSED_RGBA_ASTC_10x8_KHR;if(W===D5)return K===W8?H.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:H.COMPRESSED_RGBA_ASTC_10x10_KHR;if(W===R5)return K===W8?H.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:H.COMPRESSED_RGBA_ASTC_12x10_KHR;if(W===O5)return K===W8?H.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:H.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(W===M5||W===L5||W===B5)if(H=Q.get("EXT_texture_compression_bptc"),H!==null){if(W===M5)return K===W8?H.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:H.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(W===L5)return H.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(W===B5)return H.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(W===V5||W===w5||W===fJ||W===z5)if(H=Q.get("EXT_texture_compression_rgtc"),H!==null){if(W===V5)return H.COMPRESSED_RED_RGTC1_EXT;if(W===w5)return H.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(W===fJ)return H.COMPRESSED_RED_GREEN_RGTC2_EXT;if(W===z5)return H.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;if(W===q9)return J.UNSIGNED_INT_24_8;return J[W]!==void 0?J[W]:null}return{convert:$}}var qU=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,DU=`
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

}`;class l${constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(J,Q){if(this.texture===null){let $=new cJ(J.texture);if(J.depthNear!==Q.depthNear||J.depthFar!==Q.depthFar)this.depthNear=J.depthNear,this.depthFar=J.depthFar;this.texture=$}}getMesh(J){if(this.texture!==null){if(this.mesh===null){let Q=J.cameras[0].viewport,$=new d8({vertexShader:qU,fragmentShader:DU,uniforms:{depthColor:{value:this.texture},depthWidth:{value:Q.z},depthHeight:{value:Q.w}}});this.mesh=new P8(new g9(20,20),$)}}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class m$ extends F6{constructor(J,Q){super();let $=this,W=null,Z=1,H=null,K="local-floor",Y=1,U=null,E=null,F=null,k=null,X=null,q=null,M=typeof XRWebGLBinding<"u",I=new l$,N={},G=Q.getContextAttributes(),L=null,w=null,z=[],P=[],C=new c0,_=null,D=new I8;D.viewport=new Y8;let B=new I8;B.viewport=new Y8;let d=[D,B],A=new JQ,l=null,i=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(n){let G0=z[n];if(G0===void 0)G0=new f9,z[n]=G0;return G0.getTargetRaySpace()},this.getControllerGrip=function(n){let G0=z[n];if(G0===void 0)G0=new f9,z[n]=G0;return G0.getGripSpace()},this.getHand=function(n){let G0=z[n];if(G0===void 0)G0=new f9,z[n]=G0;return G0.getHandSpace()};function b(n){let G0=P.indexOf(n.inputSource);if(G0===-1)return;let L0=z[G0];if(L0!==void 0)L0.update(n.inputSource,n.frame,U||H),L0.dispatchEvent({type:n.type,data:n.inputSource})}function u(){W.removeEventListener("select",b),W.removeEventListener("selectstart",b),W.removeEventListener("selectend",b),W.removeEventListener("squeeze",b),W.removeEventListener("squeezestart",b),W.removeEventListener("squeezeend",b),W.removeEventListener("end",u),W.removeEventListener("inputsourceschange",x);for(let n=0;n<z.length;n++){let G0=P[n];if(G0===null)continue;P[n]=null,z[n].disconnect(G0)}l=null,i=null,I.reset();for(let n in N)delete N[n];J.setRenderTarget(L),X=null,k=null,F=null,W=null,w=null,p0.stop(),$.isPresenting=!1,J.setPixelRatio(_),J.setSize(C.width,C.height,!1),$.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(n){if(Z=n,$.isPresenting===!0)I0("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(n){if(K=n,$.isPresenting===!0)I0("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return U||H},this.setReferenceSpace=function(n){U=n},this.getBaseLayer=function(){return k!==null?k:X},this.getBinding=function(){if(F===null&&M)F=new XRWebGLBinding(W,Q);return F},this.getFrame=function(){return q},this.getSession=function(){return W},this.setSession=async function(n){if(W=n,W!==null){if(L=J.getRenderTarget(),W.addEventListener("select",b),W.addEventListener("selectstart",b),W.addEventListener("selectend",b),W.addEventListener("squeeze",b),W.addEventListener("squeezestart",b),W.addEventListener("squeezeend",b),W.addEventListener("end",u),W.addEventListener("inputsourceschange",x),G.xrCompatible!==!0)await Q.makeXRCompatible();if(_=J.getPixelRatio(),J.getSize(C),!(M&&("createProjectionLayer"in XRWebGLBinding.prototype))){let L0={antialias:G.antialias,alpha:!0,depth:G.depth,stencil:G.stencil,framebufferScaleFactor:Z};X=new XRWebGLLayer(W,Q,L0),W.updateRenderState({baseLayer:X}),J.setPixelRatio(1),J.setSize(X.framebufferWidth,X.framebufferHeight,!1),w=new p8(X.framebufferWidth,X.framebufferHeight,{format:Q6,type:i8,colorSpace:J.outputColorSpace,stencilBuffer:G.stencil,resolveDepthBuffer:X.ignoreDepthValues===!1,resolveStencilBuffer:X.ignoreDepthValues===!1})}else{let L0=null,N0=null,C0=null;if(G.depth)C0=G.stencil?Q.DEPTH24_STENCIL8:Q.DEPTH_COMPONENT24,L0=G.stencil?x6:h6,N0=G.stencil?q9:A6;let i0={colorFormat:Q.RGBA8,depthFormat:C0,scaleFactor:Z};F=this.getBinding(),k=F.createProjectionLayer(i0),W.updateRenderState({layers:[k]}),J.setPixelRatio(1),J.setSize(k.textureWidth,k.textureHeight,!1),w=new p8(k.textureWidth,k.textureHeight,{format:Q6,type:i8,depthTexture:new _6(k.textureWidth,k.textureHeight,N0,void 0,void 0,void 0,void 0,void 0,void 0,L0),stencilBuffer:G.stencil,colorSpace:J.outputColorSpace,samples:G.antialias?4:0,resolveDepthBuffer:k.ignoreDepthValues===!1,resolveStencilBuffer:k.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(Y),U=null,H=await W.requestReferenceSpace(K),p0.setContext(W),p0.start(),$.isPresenting=!0,$.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(W!==null)return W.environmentBlendMode},this.getDepthTexture=function(){return I.getDepthTexture()};function x(n){for(let G0=0;G0<n.removed.length;G0++){let L0=n.removed[G0],N0=P.indexOf(L0);if(N0>=0)P[N0]=null,z[N0].disconnect(L0)}for(let G0=0;G0<n.added.length;G0++){let L0=n.added[G0],N0=P.indexOf(L0);if(N0===-1){for(let i0=0;i0<z.length;i0++)if(i0>=P.length){P.push(L0),N0=i0;break}else if(P[i0]===null){P[i0]=L0,N0=i0;break}if(N0===-1)break}let C0=z[N0];if(C0)C0.connect(L0)}}let p=new v,a=new v;function Q0(n,G0,L0){p.setFromMatrixPosition(G0.matrixWorld),a.setFromMatrixPosition(L0.matrixWorld);let N0=p.distanceTo(a),C0=G0.projectionMatrix.elements,i0=L0.projectionMatrix.elements,h0=C0[14]/(C0[10]-1),d0=C0[14]/(C0[10]+1),e0=(C0[9]+1)/C0[5],J8=(C0[9]-1)/C0[5],f0=(C0[8]-1)/C0[0],M8=(i0[8]+1)/i0[0],B8=h0*f0,N8=h0*M8,S=N0/(-f0+M8),_8=S*-f0;if(G0.matrixWorld.decompose(n.position,n.quaternion,n.scale),n.translateX(_8),n.translateZ(S),n.matrixWorld.compose(n.position,n.quaternion,n.scale),n.matrixWorldInverse.copy(n.matrixWorld).invert(),C0[10]===-1)n.projectionMatrix.copy(G0.projectionMatrix),n.projectionMatrixInverse.copy(G0.projectionMatrixInverse);else{let m0=h0+S,s0=d0+S,E0=B8-_8,K8=N8+(N0-_8),A0=e0*d0/s0*m0,V=J8*d0/s0*m0;n.projectionMatrix.makePerspective(E0,K8,A0,V,m0,s0),n.projectionMatrixInverse.copy(n.projectionMatrix).invert()}}function k0(n,G0){if(G0===null)n.matrixWorld.copy(n.matrix);else n.matrixWorld.multiplyMatrices(G0.matrixWorld,n.matrix);n.matrixWorldInverse.copy(n.matrixWorld).invert()}this.updateCamera=function(n){if(W===null)return;let{near:G0,far:L0}=n;if(I.texture!==null){if(I.depthNear>0)G0=I.depthNear;if(I.depthFar>0)L0=I.depthFar}if(A.near=B.near=D.near=G0,A.far=B.far=D.far=L0,l!==A.near||i!==A.far)W.updateRenderState({depthNear:A.near,depthFar:A.far}),l=A.near,i=A.far;A.layers.mask=n.layers.mask|6,D.layers.mask=A.layers.mask&-5,B.layers.mask=A.layers.mask&-3;let N0=n.parent,C0=A.cameras;k0(A,N0);for(let i0=0;i0<C0.length;i0++)k0(C0[i0],N0);if(C0.length===2)Q0(A,D,B);else A.projectionMatrix.copy(D.projectionMatrix);z0(n,A,N0)};function z0(n,G0,L0){if(L0===null)n.matrix.copy(G0.matrixWorld);else n.matrix.copy(L0.matrixWorld),n.matrix.invert(),n.matrix.multiply(G0.matrixWorld);if(n.matrix.decompose(n.position,n.quaternion,n.scale),n.updateMatrixWorld(!0),n.projectionMatrix.copy(G0.projectionMatrix),n.projectionMatrixInverse.copy(G0.projectionMatrixInverse),n.isPerspectiveCamera)n.fov=VJ*2*Math.atan(1/n.projectionMatrix.elements[5]),n.zoom=1}this.getCamera=function(){return A},this.getFoveation=function(){if(k===null&&X===null)return;return Y},this.setFoveation=function(n){if(Y=n,k!==null)k.fixedFoveation=n;if(X!==null&&X.fixedFoveation!==void 0)X.fixedFoveation=n},this.hasDepthSensing=function(){return I.texture!==null},this.getDepthSensingMesh=function(){return I.getMesh(A)},this.getCameraTexture=function(n){return N[n]};let O0=null;function o0(n,G0){if(E=G0.getViewerPose(U||H),q=G0,E!==null){let L0=E.views;if(X!==null)J.setRenderTargetFramebuffer(w,X.framebuffer),J.setRenderTarget(w);let N0=!1;if(L0.length!==A.cameras.length)A.cameras.length=0,N0=!0;for(let d0=0;d0<L0.length;d0++){let e0=L0[d0],J8=null;if(X!==null)J8=X.getViewport(e0);else{let M8=F.getViewSubImage(k,e0);if(J8=M8.viewport,d0===0)J.setRenderTargetTextures(w,M8.colorTexture,M8.depthStencilTexture),J.setRenderTarget(w)}let f0=d[d0];if(f0===void 0)f0=new I8,f0.layers.enable(d0),f0.viewport=new Y8,d[d0]=f0;if(f0.matrix.fromArray(e0.transform.matrix),f0.matrix.decompose(f0.position,f0.quaternion,f0.scale),f0.projectionMatrix.fromArray(e0.projectionMatrix),f0.projectionMatrixInverse.copy(f0.projectionMatrix).invert(),f0.viewport.set(J8.x,J8.y,J8.width,J8.height),d0===0)A.matrix.copy(f0.matrix),A.matrix.decompose(A.position,A.quaternion,A.scale);if(N0===!0)A.cameras.push(f0)}let C0=W.enabledFeatures;if(C0&&C0.includes("depth-sensing")&&W.depthUsage=="gpu-optimized"&&M){F=$.getBinding();let d0=F.getDepthInformation(L0[0]);if(d0&&d0.isValid&&d0.texture)I.init(d0,W.renderState)}if(C0&&C0.includes("camera-access")&&M){J.state.unbindTexture(),F=$.getBinding();for(let d0=0;d0<L0.length;d0++){let e0=L0[d0].camera;if(e0){let J8=N[e0];if(!J8)J8=new cJ,N[e0]=J8;let f0=F.getCameraImage(e0);J8.sourceTexture=f0}}}}for(let L0=0;L0<z.length;L0++){let N0=P[L0],C0=z[L0];if(N0!==null&&C0!==void 0)C0.update(N0,G0,U||H)}if(O0)O0(n,G0);if(G0.detectedPlanes)$.dispatchEvent({type:"planesdetected",data:G0});q=null}let p0=new S$;p0.setAnimationLoop(o0),this.setAnimationLoop=function(n){O0=n},this.dispose=function(){}}}var RU=new H8,u$=new T0;u$.set(-1,0,0,0,1,0,0,0,1);function OU(J,Q){function $(N,G){if(N.matrixAutoUpdate===!0)N.updateMatrix();G.value.copy(N.matrix)}function W(N,G){if(G.color.getRGB(N.fogColor.value,x5(J)),G.isFog)N.fogNear.value=G.near,N.fogFar.value=G.far;else if(G.isFogExp2)N.fogDensity.value=G.density}function Z(N,G,L,w,z){if(G.isNodeMaterial)G.uniformsNeedUpdate=!1;else if(G.isMeshBasicMaterial)H(N,G);else if(G.isMeshLambertMaterial){if(H(N,G),G.envMap)N.envMapIntensity.value=G.envMapIntensity}else if(G.isMeshToonMaterial)H(N,G),k(N,G);else if(G.isMeshPhongMaterial){if(H(N,G),F(N,G),G.envMap)N.envMapIntensity.value=G.envMapIntensity}else if(G.isMeshStandardMaterial){if(H(N,G),X(N,G),G.isMeshPhysicalMaterial)q(N,G,z)}else if(G.isMeshMatcapMaterial)H(N,G),M(N,G);else if(G.isMeshDepthMaterial)H(N,G);else if(G.isMeshDistanceMaterial)H(N,G),I(N,G);else if(G.isMeshNormalMaterial)H(N,G);else if(G.isLineBasicMaterial){if(K(N,G),G.isLineDashedMaterial)Y(N,G)}else if(G.isPointsMaterial)U(N,G,L,w);else if(G.isSpriteMaterial)E(N,G);else if(G.isShadowMaterial)N.color.value.copy(G.color),N.opacity.value=G.opacity;else if(G.isShaderMaterial)G.uniformsNeedUpdate=!1}function H(N,G){if(N.opacity.value=G.opacity,G.color)N.diffuse.value.copy(G.color);if(G.emissive)N.emissive.value.copy(G.emissive).multiplyScalar(G.emissiveIntensity);if(G.map)N.map.value=G.map,$(G.map,N.mapTransform);if(G.alphaMap)N.alphaMap.value=G.alphaMap,$(G.alphaMap,N.alphaMapTransform);if(G.bumpMap){if(N.bumpMap.value=G.bumpMap,$(G.bumpMap,N.bumpMapTransform),N.bumpScale.value=G.bumpScale,G.side===j8)N.bumpScale.value*=-1}if(G.normalMap){if(N.normalMap.value=G.normalMap,$(G.normalMap,N.normalMapTransform),N.normalScale.value.copy(G.normalScale),G.side===j8)N.normalScale.value.negate()}if(G.displacementMap)N.displacementMap.value=G.displacementMap,$(G.displacementMap,N.displacementMapTransform),N.displacementScale.value=G.displacementScale,N.displacementBias.value=G.displacementBias;if(G.emissiveMap)N.emissiveMap.value=G.emissiveMap,$(G.emissiveMap,N.emissiveMapTransform);if(G.specularMap)N.specularMap.value=G.specularMap,$(G.specularMap,N.specularMapTransform);if(G.alphaTest>0)N.alphaTest.value=G.alphaTest;let L=Q.get(G),w=L.envMap,z=L.envMapRotation;if(w){if(N.envMap.value=w,N.envMapRotation.value.setFromMatrix4(RU.makeRotationFromEuler(z)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1)N.envMapRotation.value.premultiply(u$);N.reflectivity.value=G.reflectivity,N.ior.value=G.ior,N.refractionRatio.value=G.refractionRatio}if(G.lightMap)N.lightMap.value=G.lightMap,N.lightMapIntensity.value=G.lightMapIntensity,$(G.lightMap,N.lightMapTransform);if(G.aoMap)N.aoMap.value=G.aoMap,N.aoMapIntensity.value=G.aoMapIntensity,$(G.aoMap,N.aoMapTransform)}function K(N,G){if(N.diffuse.value.copy(G.color),N.opacity.value=G.opacity,G.map)N.map.value=G.map,$(G.map,N.mapTransform)}function Y(N,G){N.dashSize.value=G.dashSize,N.totalSize.value=G.dashSize+G.gapSize,N.scale.value=G.scale}function U(N,G,L,w){if(N.diffuse.value.copy(G.color),N.opacity.value=G.opacity,N.size.value=G.size*L,N.scale.value=w*0.5,G.map)N.map.value=G.map,$(G.map,N.uvTransform);if(G.alphaMap)N.alphaMap.value=G.alphaMap,$(G.alphaMap,N.alphaMapTransform);if(G.alphaTest>0)N.alphaTest.value=G.alphaTest}function E(N,G){if(N.diffuse.value.copy(G.color),N.opacity.value=G.opacity,N.rotation.value=G.rotation,G.map)N.map.value=G.map,$(G.map,N.mapTransform);if(G.alphaMap)N.alphaMap.value=G.alphaMap,$(G.alphaMap,N.alphaMapTransform);if(G.alphaTest>0)N.alphaTest.value=G.alphaTest}function F(N,G){N.specular.value.copy(G.specular),N.shininess.value=Math.max(G.shininess,0.0001)}function k(N,G){if(G.gradientMap)N.gradientMap.value=G.gradientMap}function X(N,G){if(N.metalness.value=G.metalness,G.metalnessMap)N.metalnessMap.value=G.metalnessMap,$(G.metalnessMap,N.metalnessMapTransform);if(N.roughness.value=G.roughness,G.roughnessMap)N.roughnessMap.value=G.roughnessMap,$(G.roughnessMap,N.roughnessMapTransform);if(G.envMap)N.envMapIntensity.value=G.envMapIntensity}function q(N,G,L){if(N.ior.value=G.ior,G.sheen>0){if(N.sheenColor.value.copy(G.sheenColor).multiplyScalar(G.sheen),N.sheenRoughness.value=G.sheenRoughness,G.sheenColorMap)N.sheenColorMap.value=G.sheenColorMap,$(G.sheenColorMap,N.sheenColorMapTransform);if(G.sheenRoughnessMap)N.sheenRoughnessMap.value=G.sheenRoughnessMap,$(G.sheenRoughnessMap,N.sheenRoughnessMapTransform)}if(G.clearcoat>0){if(N.clearcoat.value=G.clearcoat,N.clearcoatRoughness.value=G.clearcoatRoughness,G.clearcoatMap)N.clearcoatMap.value=G.clearcoatMap,$(G.clearcoatMap,N.clearcoatMapTransform);if(G.clearcoatRoughnessMap)N.clearcoatRoughnessMap.value=G.clearcoatRoughnessMap,$(G.clearcoatRoughnessMap,N.clearcoatRoughnessMapTransform);if(G.clearcoatNormalMap){if(N.clearcoatNormalMap.value=G.clearcoatNormalMap,$(G.clearcoatNormalMap,N.clearcoatNormalMapTransform),N.clearcoatNormalScale.value.copy(G.clearcoatNormalScale),G.side===j8)N.clearcoatNormalScale.value.negate()}}if(G.dispersion>0)N.dispersion.value=G.dispersion;if(G.iridescence>0){if(N.iridescence.value=G.iridescence,N.iridescenceIOR.value=G.iridescenceIOR,N.iridescenceThicknessMinimum.value=G.iridescenceThicknessRange[0],N.iridescenceThicknessMaximum.value=G.iridescenceThicknessRange[1],G.iridescenceMap)N.iridescenceMap.value=G.iridescenceMap,$(G.iridescenceMap,N.iridescenceMapTransform);if(G.iridescenceThicknessMap)N.iridescenceThicknessMap.value=G.iridescenceThicknessMap,$(G.iridescenceThicknessMap,N.iridescenceThicknessMapTransform)}if(G.transmission>0){if(N.transmission.value=G.transmission,N.transmissionSamplerMap.value=L.texture,N.transmissionSamplerSize.value.set(L.width,L.height),G.transmissionMap)N.transmissionMap.value=G.transmissionMap,$(G.transmissionMap,N.transmissionMapTransform);if(N.thickness.value=G.thickness,G.thicknessMap)N.thicknessMap.value=G.thicknessMap,$(G.thicknessMap,N.thicknessMapTransform);N.attenuationDistance.value=G.attenuationDistance,N.attenuationColor.value.copy(G.attenuationColor)}if(G.anisotropy>0){if(N.anisotropyVector.value.set(G.anisotropy*Math.cos(G.anisotropyRotation),G.anisotropy*Math.sin(G.anisotropyRotation)),G.anisotropyMap)N.anisotropyMap.value=G.anisotropyMap,$(G.anisotropyMap,N.anisotropyMapTransform)}if(N.specularIntensity.value=G.specularIntensity,N.specularColor.value.copy(G.specularColor),G.specularColorMap)N.specularColorMap.value=G.specularColorMap,$(G.specularColorMap,N.specularColorMapTransform);if(G.specularIntensityMap)N.specularIntensityMap.value=G.specularIntensityMap,$(G.specularIntensityMap,N.specularIntensityMapTransform)}function M(N,G){if(G.matcap)N.matcap.value=G.matcap}function I(N,G){let L=Q.get(G).light;N.referencePosition.value.setFromMatrixPosition(L.matrixWorld),N.nearDistance.value=L.shadow.camera.near,N.farDistance.value=L.shadow.camera.far}return{refreshFogUniforms:W,refreshMaterialUniforms:Z}}function MU(J,Q,$,W){let Z={},H={},K=[],Y=J.getParameter(J.MAX_UNIFORM_BUFFER_BINDINGS);function U(L,w){let z=w.program;W.uniformBlockBinding(L,z)}function E(L,w){let z=Z[L.id];if(z===void 0)M(L),z=F(L),Z[L.id]=z,L.addEventListener("dispose",N);let P=w.program;W.updateUBOMapping(L,P);let C=Q.render.frame;if(H[L.id]!==C)X(L),H[L.id]=C}function F(L){let w=k();L.__bindingPointIndex=w;let z=J.createBuffer(),P=L.__size,C=L.usage;return J.bindBuffer(J.UNIFORM_BUFFER,z),J.bufferData(J.UNIFORM_BUFFER,P,C),J.bindBuffer(J.UNIFORM_BUFFER,null),J.bindBufferBase(J.UNIFORM_BUFFER,w,z),z}function k(){for(let L=0;L<Y;L++)if(K.indexOf(L)===-1)return K.push(L),L;return _0("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function X(L){let w=Z[L.id],z=L.uniforms,P=L.__cache;J.bindBuffer(J.UNIFORM_BUFFER,w);for(let C=0,_=z.length;C<_;C++){let D=Array.isArray(z[C])?z[C]:[z[C]];for(let B=0,d=D.length;B<d;B++){let A=D[B];if(q(A,C,B,P)===!0){let l=A.__offset,i=Array.isArray(A.value)?A.value:[A.value],b=0;for(let u=0;u<i.length;u++){let x=i[u],p=I(x);if(typeof x==="number"||typeof x==="boolean")A.__data[0]=x,J.bufferSubData(J.UNIFORM_BUFFER,l+b,A.__data);else if(x.isMatrix3)A.__data[0]=x.elements[0],A.__data[1]=x.elements[1],A.__data[2]=x.elements[2],A.__data[3]=0,A.__data[4]=x.elements[3],A.__data[5]=x.elements[4],A.__data[6]=x.elements[5],A.__data[7]=0,A.__data[8]=x.elements[6],A.__data[9]=x.elements[7],A.__data[10]=x.elements[8],A.__data[11]=0;else if(ArrayBuffer.isView(x))A.__data.set(new x.constructor(x.buffer,x.byteOffset,A.__data.length));else x.toArray(A.__data,b),b+=p.storage/Float32Array.BYTES_PER_ELEMENT}J.bufferSubData(J.UNIFORM_BUFFER,l,A.__data)}}}J.bindBuffer(J.UNIFORM_BUFFER,null)}function q(L,w,z,P){let C=L.value,_=w+"_"+z;if(P[_]===void 0){if(typeof C==="number"||typeof C==="boolean")P[_]=C;else if(ArrayBuffer.isView(C))P[_]=C.slice();else P[_]=C.clone();return!0}else{let D=P[_];if(typeof C==="number"||typeof C==="boolean"){if(D!==C)return P[_]=C,!0}else if(ArrayBuffer.isView(C))return!0;else if(D.equals(C)===!1)return D.copy(C),!0}return!1}function M(L){let w=L.uniforms,z=0,P=16;for(let _=0,D=w.length;_<D;_++){let B=Array.isArray(w[_])?w[_]:[w[_]];for(let d=0,A=B.length;d<A;d++){let l=B[d],i=Array.isArray(l.value)?l.value:[l.value];for(let b=0,u=i.length;b<u;b++){let x=i[b],p=I(x),a=z%P,Q0=a%p.boundary,k0=a+Q0;if(z+=Q0,k0!==0&&P-k0<p.storage)z+=P-k0;l.__data=new Float32Array(p.storage/Float32Array.BYTES_PER_ELEMENT),l.__offset=z,z+=p.storage}}}let C=z%P;if(C>0)z+=P-C;return L.__size=z,L.__cache={},this}function I(L){let w={boundary:0,storage:0};if(typeof L==="number"||typeof L==="boolean")w.boundary=4,w.storage=4;else if(L.isVector2)w.boundary=8,w.storage=8;else if(L.isVector3||L.isColor)w.boundary=16,w.storage=12;else if(L.isVector4)w.boundary=16,w.storage=16;else if(L.isMatrix3)w.boundary=48,w.storage=48;else if(L.isMatrix4)w.boundary=64,w.storage=64;else if(L.isTexture)I0("WebGLRenderer: Texture samplers can not be part of an uniforms group.");else if(ArrayBuffer.isView(L))w.boundary=16,w.storage=L.byteLength;else I0("WebGLRenderer: Unsupported uniform value type.",L);return w}function N(L){let w=L.target;w.removeEventListener("dispose",N);let z=K.indexOf(w.__bindingPointIndex);K.splice(z,1),J.deleteBuffer(Z[w.id]),delete Z[w.id],delete H[w.id]}function G(){for(let L in Z)J.deleteBuffer(Z[L]);K=[],Z={},H={}}return{bind:U,update:E,dispose:G}}var LU=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),$6=null;function BU(){if($6===null)$6=new f5(LU,16,16,g6,k6),$6.name="DFG_LUT",$6.minFilter=v8,$6.magFilter=v8,$6.wrapS=AJ,$6.wrapT=AJ,$6.generateMipmaps=!1,$6.needsUpdate=!0;return $6}class qQ{constructor(J={}){let{canvas:Q=e1(),context:$=null,depth:W=!0,stencil:Z=!1,alpha:H=!1,antialias:K=!1,premultipliedAlpha:Y=!0,preserveDrawingBuffer:U=!1,powerPreference:E="default",failIfMajorPerformanceCaveat:F=!1,reversedDepthBuffer:k=!1,outputBufferType:X=i8}=J;this.isWebGLRenderer=!0;let q;if($!==null){if(typeof WebGLRenderingContext<"u"&&$ instanceof WebGLRenderingContext)throw Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");q=$.getContextAttributes().alpha}else q=H;let M=X,I=new Set([i7,s7,n7]),N=new Set([i8,A6,S9,q9,u7,c7]),G=new Uint32Array(4),L=new Int32Array(4),w=new v,z=null,P=null,C=[],_=[],D=null;this.domElement=Q,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=s8,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let B=this,d=!1,A=null;this._outputColorSpace=n1;let l=0,i=0,b=null,u=-1,x=null,p=new Y8,a=new Y8,Q0=null,k0=new b0(0),z0=0,O0=Q.width,o0=Q.height,p0=1,n=null,G0=null,L0=new Y8(0,0,O0,o0),N0=new Y8(0,0,O0,o0),C0=!1,i0=new y9,h0=!1,d0=!1,e0=new H8,J8=new v,f0=new Y8,M8={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},B8=!1;function N8(){return b===null?p0:1}let S=$;function _8(O,j){return Q.getContext(O,j)}try{let O={alpha:!0,depth:W,stencil:Z,antialias:K,premultipliedAlpha:Y,preserveDrawingBuffer:U,powerPreference:E,failIfMajorPerformanceCaveat:F};if("setAttribute"in Q)Q.setAttribute("data-engine",`three.js r${Q1}`);if(Q.addEventListener("webglcontextlost",R0,!1),Q.addEventListener("webglcontextrestored",t,!1),Q.addEventListener("webglcontextcreationerror",B0,!1),S===null){if(S=_8("webgl2",O),S===null)if(_8("webgl2"))throw Error("Error creating WebGL context with your selected attributes.");else throw Error("Error creating WebGL context.")}}catch(O){throw _0("WebGLRenderer: "+O.message),O}let m0,s0,E0,K8,A0,V,R,f,o,r,e,H0,m,s,Z0,D0,$0,K0,P0,v0,x0,T,W0;function c(){if(m0=new _K(S),m0.init(),x0=new FU(S,m0),s0=new LK(S,m0,J,x0),E0=new NU(S,m0),s0.reversedDepthBuffer&&k)E0.buffers.depth.setReversed(!0);K8=new SK(S),A0=new tY,V=new kU(S,m0,E0,A0,s0,x0,K8),R=new AK(B),f=new bW(S),T=new OK(S,f),o=new PK(S,f,K8,T),r=new vK(S,o,f,T,K8),K0=new jK(S,s0,V),Z0=new BK(A0),e=new rY(B,R,m0,s0,T,Z0),H0=new OU(B,A0),m=new JU,s=new KU(m0),$0=new RK(B,R,E0,r,q,Y),D0=new GU(B,r,s0),W0=new MU(S,K8,s0,E0),P0=new MK(S,m0,K8),v0=new TK(S,m0,K8),K8.programs=e.programs,B.capabilities=s0,B.extensions=m0,B.properties=A0,B.renderLists=m,B.shadowMap=D0,B.state=E0,B.info=K8}if(c(),M!==i8)D=new bK(M,Q.width,Q.height,W,Z);let J0=new m$(B,S);this.xr=J0,this.getContext=function(){return S},this.getContextAttributes=function(){return S.getContextAttributes()},this.forceContextLoss=function(){let O=m0.get("WEBGL_lose_context");if(O)O.loseContext()},this.forceContextRestore=function(){let O=m0.get("WEBGL_lose_context");if(O)O.restoreContext()},this.getPixelRatio=function(){return p0},this.setPixelRatio=function(O){if(O===void 0)return;p0=O,this.setSize(O0,o0,!1)},this.getSize=function(O){return O.set(O0,o0)},this.setSize=function(O,j,g=!0){if(J0.isPresenting){I0("WebGLRenderer: Can't change size while VR device is presenting.");return}if(O0=O,o0=j,Q.width=Math.floor(O*p0),Q.height=Math.floor(j*p0),g===!0)Q.style.width=O+"px",Q.style.height=j+"px";if(D!==null)D.setSize(Q.width,Q.height);this.setViewport(0,0,O,j)},this.getDrawingBufferSize=function(O){return O.set(O0*p0,o0*p0).floor()},this.setDrawingBufferSize=function(O,j,g){O0=O,o0=j,p0=g,Q.width=Math.floor(O*g),Q.height=Math.floor(j*g),this.setViewport(0,0,O,j)},this.setEffects=function(O){if(M===i8){_0("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(O){for(let j=0;j<O.length;j++)if(O[j].isOutputPass===!0){I0("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}D.setEffects(O||[])},this.getCurrentViewport=function(O){return O.copy(p)},this.getViewport=function(O){return O.copy(L0)},this.setViewport=function(O,j,g,y){if(O.isVector4)L0.set(O.x,O.y,O.z,O.w);else L0.set(O,j,g,y);E0.viewport(p.copy(L0).multiplyScalar(p0).round())},this.getScissor=function(O){return O.copy(N0)},this.setScissor=function(O,j,g,y){if(O.isVector4)N0.set(O.x,O.y,O.z,O.w);else N0.set(O,j,g,y);E0.scissor(a.copy(N0).multiplyScalar(p0).round())},this.getScissorTest=function(){return C0},this.setScissorTest=function(O){E0.setScissorTest(C0=O)},this.setOpaqueSort=function(O){n=O},this.setTransparentSort=function(O){G0=O},this.getClearColor=function(O){return O.copy($0.getClearColor())},this.setClearColor=function(){$0.setClearColor(...arguments)},this.getClearAlpha=function(){return $0.getClearAlpha()},this.setClearAlpha=function(){$0.setClearAlpha(...arguments)},this.clear=function(O=!0,j=!0,g=!0){let y=0;if(O){let h=!1;if(b!==null){let X0=b.texture.format;h=I.has(X0)}if(h){let X0=b.texture.type,q0=N.has(X0),U0=$0.getClearColor(),M0=$0.getClearAlpha(),V0=U0.r,j0=U0.g,g0=U0.b;if(q0)G[0]=V0,G[1]=j0,G[2]=g0,G[3]=M0,S.clearBufferuiv(S.COLOR,0,G);else L[0]=V0,L[1]=j0,L[2]=g0,L[3]=M0,S.clearBufferiv(S.COLOR,0,L)}else y|=S.COLOR_BUFFER_BIT}if(j)y|=S.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0);if(g)y|=S.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295);if(y!==0)S.clear(y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(O){O.setRenderer(this),A=O},this.dispose=function(){Q.removeEventListener("webglcontextlost",R0,!1),Q.removeEventListener("webglcontextrestored",t,!1),Q.removeEventListener("webglcontextcreationerror",B0,!1),$0.dispose(),m.dispose(),s.dispose(),A0.dispose(),R.dispose(),r.dispose(),T.dispose(),W0.dispose(),e.dispose(),J0.dispose(),J0.removeEventListener("sessionstart",BQ),J0.removeEventListener("sessionend",VQ),T6.stop()};function R0(O){O.preventDefault(),T5("WebGLRenderer: Context Lost."),d=!0}function t(){T5("WebGLRenderer: Context Restored."),d=!1;let O=K8.autoReset,j=D0.enabled,g=D0.autoUpdate,y=D0.needsUpdate,h=D0.type;c(),K8.autoReset=O,D0.enabled=j,D0.autoUpdate=g,D0.needsUpdate=y,D0.type=h}function B0(O){_0("WebGLRenderer: A WebGL context could not be created. Reason: ",O.statusMessage)}function S0(O){let j=O.target;j.removeEventListener("dispose",S0),k8(j)}function k8(O){r0(O),A0.remove(O)}function r0(O){let j=A0.get(O).programs;if(j!==void 0){if(j.forEach(function(g){e.releaseProgram(g)}),O.isShaderMaterial)e.releaseShaderCache(O)}}this.renderBufferDirect=function(O,j,g,y,h,X0){if(j===null)j=M8;let q0=h.isMesh&&h.matrixWorld.determinant()<0,U0=a$(O,j,g,y,h);E0.setMaterial(y,q0);let M0=g.index,V0=1;if(y.wireframe===!0){if(M0=o.getWireframeAttribute(g),M0===void 0)return;V0=2}let j0=g.drawRange,g0=g.attributes.position,w0=j0.start*V0,t0=(j0.start+j0.count)*V0;if(X0!==null)w0=Math.max(w0,X0.start*V0),t0=Math.min(t0,(X0.start+X0.count)*V0);if(M0!==null)w0=Math.max(w0,0),t0=Math.min(t0,M0.count);else if(g0!==void 0&&g0!==null)w0=Math.max(w0,0),t0=Math.min(t0,g0.count);let E8=t0-w0;if(E8<0||E8===1/0)return;T.setup(h,y,U0,g,M0);let U8,Q8=P0;if(M0!==null)U8=f.get(M0),Q8=v0,Q8.setIndex(U8);if(h.isMesh)if(y.wireframe===!0)E0.setLineWidth(y.wireframeLinewidth*N8()),Q8.setMode(S.LINES);else Q8.setMode(S.TRIANGLES);else if(h.isLine){let V8=y.linewidth;if(V8===void 0)V8=1;if(E0.setLineWidth(V8*N8()),h.isLineSegments)Q8.setMode(S.LINES);else if(h.isLineLoop)Q8.setMode(S.LINE_LOOP);else Q8.setMode(S.LINE_STRIP)}else if(h.isPoints)Q8.setMode(S.POINTS);else if(h.isSprite)Q8.setMode(S.TRIANGLES);if(h.isBatchedMesh)if(!m0.get("WEBGL_multi_draw")){let{_multiDrawStarts:V8,_multiDrawCounts:F0,_multiDrawCount:f8}=h,n0=M0?f.get(M0).bytesPerElement:1,h8=A0.get(y).currentProgram.getUniforms();for(let r8=0;r8<f8;r8++)h8.setValue(S,"_gl_DrawID",r8),Q8.render(V8[r8]/n0,F0[r8])}else Q8.renderMultiDraw(h._multiDrawStarts,h._multiDrawCounts,h._multiDrawCount);else if(h.isInstancedMesh)Q8.renderInstances(w0,E8,h.count);else if(g.isInstancedBufferGeometry){let V8=g._maxInstanceCount!==void 0?g._maxInstanceCount:1/0,F0=Math.min(g.instanceCount,V8);Q8.renderInstances(w0,E8,F0)}else Q8.render(w0,E8)};function a8(O,j,g){if(O.transparent===!0&&O.side===e8&&O.forceSinglePass===!1)O.side=j8,O.needsUpdate=!0,a9(O,j,g),O.side=N9,O.needsUpdate=!0,a9(O,j,g),O.side=e8;else a9(O,j,g)}this.compile=function(O,j,g=null){if(g===null)g=O;if(P=s.get(g),P.init(j),_.push(P),g.traverseVisible(function(h){if(h.isLight&&h.layers.test(j.layers)){if(P.pushLight(h),h.castShadow)P.pushShadow(h)}}),O!==g)O.traverseVisible(function(h){if(h.isLight&&h.layers.test(j.layers)){if(P.pushLight(h),h.castShadow)P.pushShadow(h)}});P.setupLights();let y=new Set;return O.traverse(function(h){if(!(h.isMesh||h.isPoints||h.isLine||h.isSprite))return;let X0=h.material;if(X0)if(Array.isArray(X0))for(let q0=0;q0<X0.length;q0++){let U0=X0[q0];a8(U0,g,h),y.add(U0)}else a8(X0,g,h),y.add(X0)}),P=_.pop(),y},this.compileAsync=function(O,j,g=null){let y=this.compile(O,j,g);return new Promise((h)=>{function X0(){if(y.forEach(function(q0){if(A0.get(q0).currentProgram.isReady())y.delete(q0)}),y.size===0){h(O);return}setTimeout(X0,10)}if(m0.get("KHR_parallel_shader_compile")!==null)X0();else setTimeout(X0,10)})};let m8=null;function i$(O){if(m8)m8(O)}function BQ(){T6.stop()}function VQ(){T6.start()}let T6=new S$;if(T6.setAnimationLoop(i$),typeof self<"u")T6.setContext(self);this.setAnimationLoop=function(O){m8=O,J0.setAnimationLoop(O),O===null?T6.stop():T6.start()},J0.addEventListener("sessionstart",BQ),J0.addEventListener("sessionend",VQ),this.render=function(O,j){if(j!==void 0&&j.isCamera!==!0){_0("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(d===!0)return;if(A!==null)A.renderStart(O,j);let g=J0.enabled===!0&&J0.isPresenting===!0,y=D!==null&&(b===null||g)&&D.begin(B,b);if(O.matrixWorldAutoUpdate===!0)O.updateMatrixWorld();if(j.parent===null&&j.matrixWorldAutoUpdate===!0)j.updateMatrixWorld();if(J0.enabled===!0&&J0.isPresenting===!0&&(D===null||D.isCompositing()===!1)){if(J0.cameraAutoUpdate===!0)J0.updateCamera(j);j=J0.getCamera()}if(O.isScene===!0)O.onBeforeRender(B,O,j,b);if(P=s.get(O,_.length),P.init(j),P.state.textureUnits=V.getTextureUnits(),_.push(P),e0.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),i0.setFromProjectionMatrix(e0,P5,j.reversedDepth),d0=this.localClippingEnabled,h0=Z0.init(this.clippingPlanes,d0),z=m.get(O,C.length),z.init(),C.push(z),J0.enabled===!0&&J0.isPresenting===!0){let q0=B.xr.getDepthSensingMesh();if(q0!==null)Z7(q0,j,-1/0,B.sortObjects)}if(Z7(O,j,0,B.sortObjects),z.finish(),B.sortObjects===!0)z.sort(n,G0);if(B8=J0.enabled===!1||J0.isPresenting===!1||J0.hasDepthSensing()===!1,B8)$0.addToRenderList(z,O);if(this.info.render.frame++,h0===!0)Z0.beginShadows();let h=P.state.shadowsArray;if(D0.render(h,O,j),h0===!0)Z0.endShadows();if(this.info.autoReset===!0)this.info.reset();if((y&&D.hasRenderPass())===!1){let{opaque:q0,transmissive:U0}=z;if(P.setupLights(),j.isArrayCamera){let M0=j.cameras;if(U0.length>0)for(let V0=0,j0=M0.length;V0<j0;V0++){let g0=M0[V0];zQ(q0,U0,O,g0)}if(B8)$0.render(O);for(let V0=0,j0=M0.length;V0<j0;V0++){let g0=M0[V0];wQ(z,O,g0,g0.viewport)}}else{if(U0.length>0)zQ(q0,U0,O,j);if(B8)$0.render(O);wQ(z,O,j)}}if(b!==null&&i===0)V.updateMultisampleRenderTarget(b),V.updateRenderTargetMipmap(b);if(y)D.end(B);if(O.isScene===!0)O.onAfterRender(B,O,j);if(T.resetDefaultState(),u=-1,x=null,_.pop(),_.length>0){if(P=_[_.length-1],V.setTextureUnits(P.state.textureUnits),h0===!0)Z0.setGlobalState(B.clippingPlanes,P.state.camera)}else P=null;if(C.pop(),C.length>0)z=C[C.length-1];else z=null;if(A!==null)A.renderEnd()};function Z7(O,j,g,y){if(O.visible===!1)return;if(O.layers.test(j.layers)){if(O.isGroup)g=O.renderOrder;else if(O.isLOD){if(O.autoUpdate===!0)O.update(j)}else if(O.isLightProbeGrid)P.pushLightProbeGrid(O);else if(O.isLight){if(P.pushLight(O),O.castShadow)P.pushShadow(O)}else if(O.isSprite){if(!O.frustumCulled||i0.intersectsSprite(O)){if(y)f0.setFromMatrixPosition(O.matrixWorld).applyMatrix4(e0);let q0=r.update(O),U0=O.material;if(U0.visible)z.push(O,q0,U0,g,f0.z,null)}}else if(O.isMesh||O.isLine||O.isPoints){if(!O.frustumCulled||i0.intersectsObject(O)){let q0=r.update(O),U0=O.material;if(y){if(O.boundingSphere!==void 0){if(O.boundingSphere===null)O.computeBoundingSphere();f0.copy(O.boundingSphere.center)}else{if(q0.boundingSphere===null)q0.computeBoundingSphere();f0.copy(q0.boundingSphere.center)}f0.applyMatrix4(O.matrixWorld).applyMatrix4(e0)}if(Array.isArray(U0)){let M0=q0.groups;for(let V0=0,j0=M0.length;V0<j0;V0++){let g0=M0[V0],w0=U0[g0.materialIndex];if(w0&&w0.visible)z.push(O,q0,w0,g,f0.z,g0)}}else if(U0.visible)z.push(O,q0,U0,g,f0.z,null)}}}let X0=O.children;for(let q0=0,U0=X0.length;q0<U0;q0++)Z7(X0[q0],j,g,y)}function wQ(O,j,g,y){let{opaque:h,transmissive:X0,transparent:q0}=O;if(P.setupLightsView(g),h0===!0)Z0.setGlobalState(B.clippingPlanes,g);if(y)E0.viewport(p.copy(y));if(h.length>0)o9(h,j,g);if(X0.length>0)o9(X0,j,g);if(q0.length>0)o9(q0,j,g);E0.buffers.depth.setTest(!0),E0.buffers.depth.setMask(!0),E0.buffers.color.setMask(!0),E0.setPolygonOffset(!1)}function zQ(O,j,g,y){if((g.isScene===!0?g.overrideMaterial:null)!==null)return;if(P.state.transmissionRenderTarget[y.id]===void 0){let w0=m0.has("EXT_color_buffer_half_float")||m0.has("EXT_color_buffer_float");P.state.transmissionRenderTarget[y.id]=new p8(1,1,{generateMipmaps:!0,type:w0?k6:i8,minFilter:y6,samples:Math.max(4,s0.samples),stencilBuffer:Z,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:l0.workingColorSpace})}let X0=P.state.transmissionRenderTarget[y.id],q0=y.viewport||p;X0.setSize(q0.z*B.transmissionResolutionScale,q0.w*B.transmissionResolutionScale);let U0=B.getRenderTarget(),M0=B.getActiveCubeFace(),V0=B.getActiveMipmapLevel();if(B.setRenderTarget(X0),B.getClearColor(k0),z0=B.getClearAlpha(),z0<1)B.setClearColor(16777215,0.5);if(B.clear(),B8)$0.render(g);let j0=B.toneMapping;B.toneMapping=s8;let g0=y.viewport;if(y.viewport!==void 0)y.viewport=void 0;if(P.setupLightsView(y),h0===!0)Z0.setGlobalState(B.clippingPlanes,y);if(o9(O,g,y),V.updateMultisampleRenderTarget(X0),V.updateRenderTargetMipmap(X0),m0.has("WEBGL_multisampled_render_to_texture")===!1){let w0=!1;for(let t0=0,E8=j.length;t0<E8;t0++){let U8=j[t0],{object:Q8,geometry:V8,material:F0,group:f8}=U8;if(F0.side===e8&&Q8.layers.test(y.layers)){let n0=F0.side;F0.side=j8,F0.needsUpdate=!0,IQ(Q8,g,y,V8,F0,f8),F0.side=n0,F0.needsUpdate=!0,w0=!0}}if(w0===!0)V.updateMultisampleRenderTarget(X0),V.updateRenderTargetMipmap(X0)}if(B.setRenderTarget(U0,M0,V0),B.setClearColor(k0,z0),g0!==void 0)y.viewport=g0;B.toneMapping=j0}function o9(O,j,g){let y=j.isScene===!0?j.overrideMaterial:null;for(let h=0,X0=O.length;h<X0;h++){let q0=O[h],{object:U0,geometry:M0,group:V0}=q0,j0=q0.material;if(j0.allowOverride===!0&&y!==null)j0=y;if(U0.layers.test(g.layers))IQ(U0,j,g,M0,j0,V0)}}function IQ(O,j,g,y,h,X0){if(O.onBeforeRender(B,j,g,y,h,X0),O.modelViewMatrix.multiplyMatrices(g.matrixWorldInverse,O.matrixWorld),O.normalMatrix.getNormalMatrix(O.modelViewMatrix),h.onBeforeRender(B,j,g,y,O,X0),h.transparent===!0&&h.side===e8&&h.forceSinglePass===!1)h.side=j8,h.needsUpdate=!0,B.renderBufferDirect(g,j,y,h,O,X0),h.side=N9,h.needsUpdate=!0,B.renderBufferDirect(g,j,y,h,O,X0),h.side=e8;else B.renderBufferDirect(g,j,y,h,O,X0);O.onAfterRender(B,j,g,y,h,X0)}function a9(O,j,g){if(j.isScene!==!0)j=M8;let y=A0.get(O),h=P.state.lights,X0=P.state.shadowsArray,q0=h.state.version,U0=e.getParameters(O,h.state,X0,j,g,P.state.lightProbeGridArray),M0=e.getProgramCacheKey(U0),V0=y.programs;y.environment=O.isMeshStandardMaterial||O.isMeshLambertMaterial||O.isMeshPhongMaterial?j.environment:null,y.fog=j.fog;let j0=O.isMeshStandardMaterial||O.isMeshLambertMaterial&&!O.envMap||O.isMeshPhongMaterial&&!O.envMap;if(y.envMap=R.get(O.envMap||y.environment,j0),y.envMapRotation=y.environment!==null&&O.envMap===null?j.environmentRotation:O.envMapRotation,V0===void 0)O.addEventListener("dispose",S0),V0=new Map,y.programs=V0;let g0=V0.get(M0);if(g0!==void 0){if(y.currentProgram===g0&&y.lightsStateVersion===q0)return AQ(O,U0),g0}else{if(U0.uniforms=e.getUniforms(O),A!==null&&O.isNodeMaterial)A.build(O,g,U0);O.onBeforeCompile(U0,B),g0=e.acquireProgram(U0,M0),V0.set(M0,g0),y.uniforms=U0.uniforms}let w0=y.uniforms;if(!O.isShaderMaterial&&!O.isRawShaderMaterial||O.clipping===!0)w0.clippingPlanes=Z0.uniform;if(AQ(O,U0),y.needsLights=t$(O),y.lightsStateVersion=q0,y.needsLights)w0.ambientLightColor.value=h.state.ambient,w0.lightProbe.value=h.state.probe,w0.directionalLights.value=h.state.directional,w0.directionalLightShadows.value=h.state.directionalShadow,w0.spotLights.value=h.state.spot,w0.spotLightShadows.value=h.state.spotShadow,w0.rectAreaLights.value=h.state.rectArea,w0.ltc_1.value=h.state.rectAreaLTC1,w0.ltc_2.value=h.state.rectAreaLTC2,w0.pointLights.value=h.state.point,w0.pointLightShadows.value=h.state.pointShadow,w0.hemisphereLights.value=h.state.hemi,w0.directionalShadowMatrix.value=h.state.directionalShadowMatrix,w0.spotLightMatrix.value=h.state.spotLightMatrix,w0.spotLightMap.value=h.state.spotLightMap,w0.pointShadowMatrix.value=h.state.pointShadowMatrix;return y.lightProbeGrid=P.state.lightProbeGridArray.length>0,y.currentProgram=g0,y.uniformsList=null,g0}function CQ(O){if(O.uniformsList===null){let j=O.currentProgram.getUniforms();O.uniformsList=n9.seqWithValue(j.seq,O.uniforms)}return O.uniformsList}function AQ(O,j){let g=A0.get(O);g.outputColorSpace=j.outputColorSpace,g.batching=j.batching,g.batchingColor=j.batchingColor,g.instancing=j.instancing,g.instancingColor=j.instancingColor,g.instancingMorph=j.instancingMorph,g.skinning=j.skinning,g.morphTargets=j.morphTargets,g.morphNormals=j.morphNormals,g.morphColors=j.morphColors,g.morphTargetsCount=j.morphTargetsCount,g.numClippingPlanes=j.numClippingPlanes,g.numIntersection=j.numClipIntersection,g.vertexAlphas=j.vertexAlphas,g.vertexTangents=j.vertexTangents,g.toneMapping=j.toneMapping}function o$(O,j){if(O.length===0)return null;if(O.length===1)return O[0].texture!==null?O[0]:null;w.setFromMatrixPosition(j.matrixWorld);for(let g=0,y=O.length;g<y;g++){let h=O[g];if(h.texture!==null&&h.boundingBox.containsPoint(w))return h}return null}function a$(O,j,g,y,h){if(j.isScene!==!0)j=M8;V.resetTextureUnits();let X0=j.fog,q0=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?j.environment:null,U0=b===null?B.outputColorSpace:b.isXRRenderTarget===!0?b.texture.colorSpace:l0.workingColorSpace,M0=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,V0=R.get(y.envMap||q0,M0),j0=y.vertexColors===!0&&!!g.attributes.color&&g.attributes.color.itemSize===4,g0=!!g.attributes.tangent&&(!!y.normalMap||y.anisotropy>0),w0=!!g.morphAttributes.position,t0=!!g.morphAttributes.normal,E8=!!g.morphAttributes.color,U8=s8;if(y.toneMapped){if(b===null||b.isXRRenderTarget===!0)U8=B.toneMapping}let Q8=g.morphAttributes.position||g.morphAttributes.normal||g.morphAttributes.color,V8=Q8!==void 0?Q8.length:0,F0=A0.get(y),f8=P.state.lights;if(h0===!0){if(d0===!0||O!==x){let Z8=O===x&&y.id===u;Z0.setState(y,O,Z8)}}let n0=!1;if(y.version===F0.__version){if(F0.needsLights&&F0.lightsStateVersion!==f8.state.version)n0=!0;else if(F0.outputColorSpace!==U0)n0=!0;else if(h.isBatchedMesh&&F0.batching===!1)n0=!0;else if(!h.isBatchedMesh&&F0.batching===!0)n0=!0;else if(h.isBatchedMesh&&F0.batchingColor===!0&&h.colorTexture===null)n0=!0;else if(h.isBatchedMesh&&F0.batchingColor===!1&&h.colorTexture!==null)n0=!0;else if(h.isInstancedMesh&&F0.instancing===!1)n0=!0;else if(!h.isInstancedMesh&&F0.instancing===!0)n0=!0;else if(h.isSkinnedMesh&&F0.skinning===!1)n0=!0;else if(!h.isSkinnedMesh&&F0.skinning===!0)n0=!0;else if(h.isInstancedMesh&&F0.instancingColor===!0&&h.instanceColor===null)n0=!0;else if(h.isInstancedMesh&&F0.instancingColor===!1&&h.instanceColor!==null)n0=!0;else if(h.isInstancedMesh&&F0.instancingMorph===!0&&h.morphTexture===null)n0=!0;else if(h.isInstancedMesh&&F0.instancingMorph===!1&&h.morphTexture!==null)n0=!0;else if(F0.envMap!==V0)n0=!0;else if(y.fog===!0&&F0.fog!==X0)n0=!0;else if(F0.numClippingPlanes!==void 0&&(F0.numClippingPlanes!==Z0.numPlanes||F0.numIntersection!==Z0.numIntersection))n0=!0;else if(F0.vertexAlphas!==j0)n0=!0;else if(F0.vertexTangents!==g0)n0=!0;else if(F0.morphTargets!==w0)n0=!0;else if(F0.morphNormals!==t0)n0=!0;else if(F0.morphColors!==E8)n0=!0;else if(F0.toneMapping!==U8)n0=!0;else if(F0.morphTargetsCount!==V8)n0=!0;else if(!!F0.lightProbeGrid!==P.state.lightProbeGridArray.length>0)n0=!0}else n0=!0,F0.__version=y.version;let h8=F0.currentProgram;if(n0===!0){if(h8=a9(y,j,h),A&&y.isNodeMaterial)A.onUpdateProgram(y,h8,F0)}let r8=!1,D6=!1,o6=!1,$8=h8.getUniforms(),X8=F0.uniforms;if(E0.useProgram(h8.program))r8=!0,D6=!0,o6=!0;if(y.id!==u)u=y.id,D6=!0;if(F0.needsLights){let Z8=o$(P.state.lightProbeGridArray,h);if(F0.lightProbeGrid!==Z8)F0.lightProbeGrid=Z8,D6=!0}if(r8||x!==O){if(E0.buffers.depth.getReversed()&&O.reversedDepth!==!0)O._reversedDepth=!0,O.updateProjectionMatrix();$8.setValue(S,"projectionMatrix",O.projectionMatrix),$8.setValue(S,"viewMatrix",O.matrixWorldInverse);let O6=$8.map.cameraPosition;if(O6!==void 0)O6.setValue(S,J8.setFromMatrixPosition(O.matrixWorld));if(s0.logarithmicDepthBuffer)$8.setValue(S,"logDepthBufFC",2/(Math.log(O.far+1)/Math.LN2));if(y.isMeshPhongMaterial||y.isMeshToonMaterial||y.isMeshLambertMaterial||y.isMeshBasicMaterial||y.isMeshStandardMaterial||y.isShaderMaterial)$8.setValue(S,"isOrthographic",O.isOrthographicCamera===!0);if(x!==O)x=O,D6=!0,o6=!0}if(F0.needsLights){if(f8.state.directionalShadowMap.length>0)$8.setValue(S,"directionalShadowMap",f8.state.directionalShadowMap,V);if(f8.state.spotShadowMap.length>0)$8.setValue(S,"spotShadowMap",f8.state.spotShadowMap,V);if(f8.state.pointShadowMap.length>0)$8.setValue(S,"pointShadowMap",f8.state.pointShadowMap,V)}if(h.isSkinnedMesh){$8.setOptional(S,h,"bindMatrix"),$8.setOptional(S,h,"bindMatrixInverse");let Z8=h.skeleton;if(Z8){if(Z8.boneTexture===null)Z8.computeBoneTexture();$8.setValue(S,"boneTexture",Z8.boneTexture,V)}}if(h.isBatchedMesh){if($8.setOptional(S,h,"batchingTexture"),$8.setValue(S,"batchingTexture",h._matricesTexture,V),$8.setOptional(S,h,"batchingIdTexture"),$8.setValue(S,"batchingIdTexture",h._indirectTexture,V),$8.setOptional(S,h,"batchingColorTexture"),h._colorsTexture!==null)$8.setValue(S,"batchingColorTexture",h._colorsTexture,V)}let R6=g.morphAttributes;if(R6.position!==void 0||R6.normal!==void 0||R6.color!==void 0)K0.update(h,g,h8);if(D6||F0.receiveShadow!==h.receiveShadow)F0.receiveShadow=h.receiveShadow,$8.setValue(S,"receiveShadow",h.receiveShadow);if((y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial)&&y.envMap===null&&j.environment!==null)X8.envMapIntensity.value=j.environmentIntensity;if(X8.dfgLUT!==void 0)X8.dfgLUT.value=BU();if(D6){if($8.setValue(S,"toneMappingExposure",B.toneMappingExposure),F0.needsLights)r$(X8,o6);if(X0&&y.fog===!0)H0.refreshFogUniforms(X8,X0);if(H0.refreshMaterialUniforms(X8,y,p0,o0,P.state.transmissionRenderTarget[O.id]),F0.needsLights&&F0.lightProbeGrid){let Z8=F0.lightProbeGrid;X8.probesSH.value=Z8.texture,X8.probesMin.value.copy(Z8.boundingBox.min),X8.probesMax.value.copy(Z8.boundingBox.max),X8.probesResolution.value.copy(Z8.resolution)}n9.upload(S,CQ(F0),X8,V)}if(y.isShaderMaterial&&y.uniformsNeedUpdate===!0)n9.upload(S,CQ(F0),X8,V),y.uniformsNeedUpdate=!1;if(y.isSpriteMaterial)$8.setValue(S,"center",h.center);if($8.setValue(S,"modelViewMatrix",h.modelViewMatrix),$8.setValue(S,"normalMatrix",h.normalMatrix),$8.setValue(S,"modelMatrix",h.matrixWorld),y.uniformsGroups!==void 0){let Z8=y.uniformsGroups;for(let O6=0,a6=Z8.length;O6<a6;O6++){let _Q=Z8[O6];W0.update(_Q,h8),W0.bind(_Q,h8)}}return h8}function r$(O,j){O.ambientLightColor.needsUpdate=j,O.lightProbe.needsUpdate=j,O.directionalLights.needsUpdate=j,O.directionalLightShadows.needsUpdate=j,O.pointLights.needsUpdate=j,O.pointLightShadows.needsUpdate=j,O.spotLights.needsUpdate=j,O.spotLightShadows.needsUpdate=j,O.rectAreaLights.needsUpdate=j,O.hemisphereLights.needsUpdate=j}function t$(O){return O.isMeshLambertMaterial||O.isMeshToonMaterial||O.isMeshPhongMaterial||O.isMeshStandardMaterial||O.isShadowMaterial||O.isShaderMaterial&&O.lights===!0}this.getActiveCubeFace=function(){return l},this.getActiveMipmapLevel=function(){return i},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(O,j,g){let y=A0.get(O);if(y.__autoAllocateDepthBuffer=O.resolveDepthBuffer===!1,y.__autoAllocateDepthBuffer===!1)y.__useRenderToTexture=!1;A0.get(O.texture).__webglTexture=j,A0.get(O.depthTexture).__webglTexture=y.__autoAllocateDepthBuffer?void 0:g,y.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(O,j){let g=A0.get(O);g.__webglFramebuffer=j,g.__useDefaultFramebuffer=j===void 0};let e$=S.createFramebuffer();this.setRenderTarget=function(O,j=0,g=0){b=O,l=j,i=g;let y=null,h=!1,X0=!1;if(O){let U0=A0.get(O);if(U0.__useDefaultFramebuffer!==void 0){E0.bindFramebuffer(S.FRAMEBUFFER,U0.__webglFramebuffer),p.copy(O.viewport),a.copy(O.scissor),Q0=O.scissorTest,E0.viewport(p),E0.scissor(a),E0.setScissorTest(Q0),u=-1;return}else if(U0.__webglFramebuffer===void 0)V.setupRenderTarget(O);else if(U0.__hasExternalTextures)V.rebindTextures(O,A0.get(O.texture).__webglTexture,A0.get(O.depthTexture).__webglTexture);else if(O.depthBuffer){let j0=O.depthTexture;if(U0.__boundDepthTexture!==j0){if(j0!==null&&A0.has(j0)&&(O.width!==j0.image.width||O.height!==j0.image.height))throw Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");V.setupDepthRenderbuffer(O)}}let M0=O.texture;if(M0.isData3DTexture||M0.isDataArrayTexture||M0.isCompressedArrayTexture)X0=!0;let V0=A0.get(O).__webglFramebuffer;if(O.isWebGLCubeRenderTarget){if(Array.isArray(V0[j]))y=V0[j][g];else y=V0[j];h=!0}else if(O.samples>0&&V.useMultisampledRTT(O)===!1)y=A0.get(O).__webglMultisampledFramebuffer;else if(Array.isArray(V0))y=V0[g];else y=V0;p.copy(O.viewport),a.copy(O.scissor),Q0=O.scissorTest}else p.copy(L0).multiplyScalar(p0).floor(),a.copy(N0).multiplyScalar(p0).floor(),Q0=C0;if(g!==0)y=e$;if(E0.bindFramebuffer(S.FRAMEBUFFER,y))E0.drawBuffers(O,y);if(E0.viewport(p),E0.scissor(a),E0.setScissorTest(Q0),h){let U0=A0.get(O.texture);S.framebufferTexture2D(S.FRAMEBUFFER,S.COLOR_ATTACHMENT0,S.TEXTURE_CUBE_MAP_POSITIVE_X+j,U0.__webglTexture,g)}else if(X0){let U0=j;for(let M0=0;M0<O.textures.length;M0++){let V0=A0.get(O.textures[M0]);S.framebufferTextureLayer(S.FRAMEBUFFER,S.COLOR_ATTACHMENT0+M0,V0.__webglTexture,g,U0)}}else if(O!==null&&g!==0){let U0=A0.get(O.texture);S.framebufferTexture2D(S.FRAMEBUFFER,S.COLOR_ATTACHMENT0,S.TEXTURE_2D,U0.__webglTexture,g)}u=-1},this.readRenderTargetPixels=function(O,j,g,y,h,X0,q0,U0=0){if(!(O&&O.isWebGLRenderTarget)){_0("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let M0=A0.get(O).__webglFramebuffer;if(O.isWebGLCubeRenderTarget&&q0!==void 0)M0=M0[q0];if(M0){E0.bindFramebuffer(S.FRAMEBUFFER,M0);try{let V0=O.textures[U0],j0=V0.format,g0=V0.type;if(O.textures.length>1)S.readBuffer(S.COLOR_ATTACHMENT0+U0);if(!s0.textureFormatReadable(j0)){_0("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!s0.textureTypeReadable(g0)){_0("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}if(j>=0&&j<=O.width-y&&(g>=0&&g<=O.height-h))S.readPixels(j,g,y,h,x0.convert(j0),x0.convert(g0),X0)}finally{let V0=b!==null?A0.get(b).__webglFramebuffer:null;E0.bindFramebuffer(S.FRAMEBUFFER,V0)}}},this.readRenderTargetPixelsAsync=async function(O,j,g,y,h,X0,q0,U0=0){if(!(O&&O.isWebGLRenderTarget))throw Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let M0=A0.get(O).__webglFramebuffer;if(O.isWebGLCubeRenderTarget&&q0!==void 0)M0=M0[q0];if(M0)if(j>=0&&j<=O.width-y&&(g>=0&&g<=O.height-h)){E0.bindFramebuffer(S.FRAMEBUFFER,M0);let V0=O.textures[U0],j0=V0.format,g0=V0.type;if(O.textures.length>1)S.readBuffer(S.COLOR_ATTACHMENT0+U0);if(!s0.textureFormatReadable(j0))throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!s0.textureTypeReadable(g0))throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let w0=S.createBuffer();S.bindBuffer(S.PIXEL_PACK_BUFFER,w0),S.bufferData(S.PIXEL_PACK_BUFFER,X0.byteLength,S.STREAM_READ),S.readPixels(j,g,y,h,x0.convert(j0),x0.convert(g0),0);let t0=b!==null?A0.get(b).__webglFramebuffer:null;E0.bindFramebuffer(S.FRAMEBUFFER,t0);let E8=S.fenceSync(S.SYNC_GPU_COMMANDS_COMPLETE,0);return S.flush(),await Q$(S,E8,4),S.bindBuffer(S.PIXEL_PACK_BUFFER,w0),S.getBufferSubData(S.PIXEL_PACK_BUFFER,0,X0),S.deleteBuffer(w0),S.deleteSync(E8),X0}else throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(O,j=null,g=0){let y=Math.pow(2,-g),h=Math.floor(O.image.width*y),X0=Math.floor(O.image.height*y),q0=j!==null?j.x:0,U0=j!==null?j.y:0;V.setTexture2D(O,0),S.copyTexSubImage2D(S.TEXTURE_2D,g,0,0,q0,U0,h,X0),E0.unbindTexture()};let JW=S.createFramebuffer(),QW=S.createFramebuffer();if(this.copyTextureToTexture=function(O,j,g=null,y=null,h=0,X0=0){let q0,U0,M0,V0,j0,g0,w0,t0,E8,U8=O.isCompressedTexture?O.mipmaps[X0]:O.image;if(g!==null)q0=g.max.x-g.min.x,U0=g.max.y-g.min.y,M0=g.isBox3?g.max.z-g.min.z:1,V0=g.min.x,j0=g.min.y,g0=g.isBox3?g.min.z:0;else{let X8=Math.pow(2,-h);if(q0=Math.floor(U8.width*X8),U0=Math.floor(U8.height*X8),O.isDataArrayTexture)M0=U8.depth;else if(O.isData3DTexture)M0=Math.floor(U8.depth*X8);else M0=1;V0=0,j0=0,g0=0}if(y!==null)w0=y.x,t0=y.y,E8=y.z;else w0=0,t0=0,E8=0;let Q8=x0.convert(j.format),V8=x0.convert(j.type),F0;if(j.isData3DTexture)V.setTexture3D(j,0),F0=S.TEXTURE_3D;else if(j.isDataArrayTexture||j.isCompressedArrayTexture)V.setTexture2DArray(j,0),F0=S.TEXTURE_2D_ARRAY;else V.setTexture2D(j,0),F0=S.TEXTURE_2D;E0.activeTexture(S.TEXTURE0),E0.pixelStorei(S.UNPACK_FLIP_Y_WEBGL,j.flipY),E0.pixelStorei(S.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),E0.pixelStorei(S.UNPACK_ALIGNMENT,j.unpackAlignment);let f8=E0.getParameter(S.UNPACK_ROW_LENGTH),n0=E0.getParameter(S.UNPACK_IMAGE_HEIGHT),h8=E0.getParameter(S.UNPACK_SKIP_PIXELS),r8=E0.getParameter(S.UNPACK_SKIP_ROWS),D6=E0.getParameter(S.UNPACK_SKIP_IMAGES);E0.pixelStorei(S.UNPACK_ROW_LENGTH,U8.width),E0.pixelStorei(S.UNPACK_IMAGE_HEIGHT,U8.height),E0.pixelStorei(S.UNPACK_SKIP_PIXELS,V0),E0.pixelStorei(S.UNPACK_SKIP_ROWS,j0),E0.pixelStorei(S.UNPACK_SKIP_IMAGES,g0);let o6=O.isDataArrayTexture||O.isData3DTexture,$8=j.isDataArrayTexture||j.isData3DTexture;if(O.isDepthTexture){let X8=A0.get(O),R6=A0.get(j),Z8=A0.get(X8.__renderTarget),O6=A0.get(R6.__renderTarget);E0.bindFramebuffer(S.READ_FRAMEBUFFER,Z8.__webglFramebuffer),E0.bindFramebuffer(S.DRAW_FRAMEBUFFER,O6.__webglFramebuffer);for(let a6=0;a6<M0;a6++){if(o6)S.framebufferTextureLayer(S.READ_FRAMEBUFFER,S.COLOR_ATTACHMENT0,A0.get(O).__webglTexture,h,g0+a6),S.framebufferTextureLayer(S.DRAW_FRAMEBUFFER,S.COLOR_ATTACHMENT0,A0.get(j).__webglTexture,X0,E8+a6);S.blitFramebuffer(V0,j0,q0,U0,w0,t0,q0,U0,S.DEPTH_BUFFER_BIT,S.NEAREST)}E0.bindFramebuffer(S.READ_FRAMEBUFFER,null),E0.bindFramebuffer(S.DRAW_FRAMEBUFFER,null)}else if(h!==0||O.isRenderTargetTexture||A0.has(O)){let X8=A0.get(O),R6=A0.get(j);E0.bindFramebuffer(S.READ_FRAMEBUFFER,JW),E0.bindFramebuffer(S.DRAW_FRAMEBUFFER,QW);for(let Z8=0;Z8<M0;Z8++){if(o6)S.framebufferTextureLayer(S.READ_FRAMEBUFFER,S.COLOR_ATTACHMENT0,X8.__webglTexture,h,g0+Z8);else S.framebufferTexture2D(S.READ_FRAMEBUFFER,S.COLOR_ATTACHMENT0,S.TEXTURE_2D,X8.__webglTexture,h);if($8)S.framebufferTextureLayer(S.DRAW_FRAMEBUFFER,S.COLOR_ATTACHMENT0,R6.__webglTexture,X0,E8+Z8);else S.framebufferTexture2D(S.DRAW_FRAMEBUFFER,S.COLOR_ATTACHMENT0,S.TEXTURE_2D,R6.__webglTexture,X0);if(h!==0)S.blitFramebuffer(V0,j0,q0,U0,w0,t0,q0,U0,S.COLOR_BUFFER_BIT,S.NEAREST);else if($8)S.copyTexSubImage3D(F0,X0,w0,t0,E8+Z8,V0,j0,q0,U0);else S.copyTexSubImage2D(F0,X0,w0,t0,V0,j0,q0,U0)}E0.bindFramebuffer(S.READ_FRAMEBUFFER,null),E0.bindFramebuffer(S.DRAW_FRAMEBUFFER,null)}else if($8)if(O.isDataTexture||O.isData3DTexture)S.texSubImage3D(F0,X0,w0,t0,E8,q0,U0,M0,Q8,V8,U8.data);else if(j.isCompressedArrayTexture)S.compressedTexSubImage3D(F0,X0,w0,t0,E8,q0,U0,M0,Q8,U8.data);else S.texSubImage3D(F0,X0,w0,t0,E8,q0,U0,M0,Q8,V8,U8);else if(O.isDataTexture)S.texSubImage2D(S.TEXTURE_2D,X0,w0,t0,q0,U0,Q8,V8,U8.data);else if(O.isCompressedTexture)S.compressedTexSubImage2D(S.TEXTURE_2D,X0,w0,t0,U8.width,U8.height,Q8,U8.data);else S.texSubImage2D(S.TEXTURE_2D,X0,w0,t0,q0,U0,Q8,V8,U8);if(E0.pixelStorei(S.UNPACK_ROW_LENGTH,f8),E0.pixelStorei(S.UNPACK_IMAGE_HEIGHT,n0),E0.pixelStorei(S.UNPACK_SKIP_PIXELS,h8),E0.pixelStorei(S.UNPACK_SKIP_ROWS,r8),E0.pixelStorei(S.UNPACK_SKIP_IMAGES,D6),X0===0&&j.generateMipmaps)S.generateMipmap(F0);E0.unbindTexture()},this.initRenderTarget=function(O){if(A0.get(O).__webglFramebuffer===void 0)V.setupRenderTarget(O)},this.initTexture=function(O){if(O.isCubeTexture)V.setTextureCube(O,0);else if(O.isData3DTexture)V.setTexture3D(O,0);else if(O.isDataArrayTexture||O.isCompressedArrayTexture)V.setTexture2DArray(O,0);else V.setTexture2D(O,0);E0.unbindTexture()},this.resetState=function(){l=0,i=0,b=null,E0.reset(),T.reset()},typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return P5}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(J){this._outputColorSpace=J;let Q=this.getContext();Q.drawingBufferColorSpace=l0._getDrawingBufferColorSpace(J),Q.unpackColorSpace=l0._getUnpackColorSpace()}}var s9=document.getElementById("cursor"),i9=document.getElementById("cursor-ring"),DQ=0,RQ=0,OQ=0,MQ=0;if(s9&&i9){document.addEventListener("mousemove",(Q)=>{DQ=Q.clientX,RQ=Q.clientY,s9.style.left=DQ+"px",s9.style.top=RQ+"px"});let J=()=>{OQ+=(DQ-OQ)*0.12,MQ+=(RQ-MQ)*0.12,i9.style.left=OQ+"px",i9.style.top=MQ+"px",requestAnimationFrame(J)};J(),document.querySelectorAll("a, button, .btn-primary, .btn-ghost").forEach((Q)=>{Q.addEventListener("mouseenter",()=>{s9.style.transform="translate(-50%,-50%) scale(2)",i9.style.transform="translate(-50%,-50%) scale(1.5)"}),Q.addEventListener("mouseleave",()=>{s9.style.transform="translate(-50%,-50%) scale(1)",i9.style.transform="translate(-50%,-50%) scale(1)"})})}var c$=document.getElementById("hero-canvas");if(c$){let J=new qQ({canvas:c$,antialias:!0,alpha:!0});J.setPixelRatio(Math.min(window.devicePixelRatio,2)),J.setSize(window.innerWidth,window.innerHeight);let Q=new gJ,$=new I8(60,window.innerWidth/window.innerHeight,0.1,100);$.position.set(0,0,5),Q.add(new rJ(16777215,0.1));let W=new aJ(15758379,2);W.position.set(3,5,3),Q.add(W);let Z=new d9(16763904,3,20);Z.position.set(-4,2,2),Q.add(Z);let H=new d9(15758379,2,15);H.position.set(4,-2,1),Q.add(H);let K=new R9(1.4,0.35,200,20,3,5),Y=new sJ({color:1709064,emissive:15758379,emissiveIntensity:0.12,wireframe:!1,shininess:100,specular:new b0(16763904)}),U=new P8(K,Y);U.position.set(3.5,-0.5,-1),Q.add(U);let E=new R9(1.41,0.352,80,10,3,5),F=new m6({color:15758379,wireframe:!0,transparent:!0,opacity:0.08}),k=new P8(E,F);k.position.copy(U.position),Q.add(k);let X=2000,q=new Float32Array(X*3);for(let D=0;D<X*3;D++)q[D]=(Math.random()-0.5)*20;let M=new L8;M.setAttribute("position",new S8(q,3));let I=new h9({color:15758379,size:0.02,transparent:!0,opacity:0.4}),N=new mJ(M,I);Q.add(N);let G=new I6;Q.add(G),[{size:0.25,pos:[-3,2,-2],speed:0.8},{size:0.15,pos:[-5,-1,-3],speed:1.2},{size:0.35,pos:[6,1,-4],speed:0.6},{size:0.2,pos:[1,3,-3],speed:1},{size:0.12,pos:[-2,-3,-2],speed:1.4}].forEach((D)=>{let B=new x9(D.size,0),d=new m6({color:16763904,wireframe:!0,transparent:!0,opacity:0.25}),A=new P8(B,d);A.position.set(...D.pos),A.userData.speed=D.speed,A.userData.offset=Math.random()*Math.PI*2,G.add(A)});let w=new eJ(30,30,15758379,1709064);if(w.position.y=-4,w.material instanceof o8)w.material.transparent=!0,w.material.opacity=0.08;Q.add(w);let z=0,P=0;window.addEventListener("mousemove",(D)=>{z=(D.clientX/window.innerWidth-0.5)*0.4,P=-(D.clientY/window.innerHeight-0.5)*0.3});let C=new tJ,_=()=>{requestAnimationFrame(_);let D=C.getElapsedTime();U.rotation.x=D*0.25,U.rotation.y=D*0.18,k.rotation.x=D*0.25,k.rotation.y=D*0.18,Q.rotation.y+=(z-Q.rotation.y)*0.05,Q.rotation.x+=(P-Q.rotation.x)*0.05,N.rotation.y=D*0.02,N.rotation.x=D*0.01,G.children.forEach((B)=>{let d=B;d.rotation.x=D*d.userData.speed*0.6,d.rotation.y=D*d.userData.speed*0.4,d.position.y+=Math.sin(D*d.userData.speed+d.userData.offset)*0.001}),Z.intensity=3+Math.sin(D*2)*1,H.intensity=2+Math.cos(D*1.5)*0.8,J.render(Q,$)};_(),window.addEventListener("resize",()=>{$.aspect=window.innerWidth/window.innerHeight,$.updateProjectionMatrix(),J.setSize(window.innerWidth,window.innerHeight)})}var wU=new IntersectionObserver((J)=>{J.forEach((Q)=>{if(Q.isIntersecting)Q.target.classList.add("visible"),Q.target.querySelectorAll(".bench-bar-fill").forEach(($)=>{let W=$,Z=W.getAttribute("data-width");if(Z)setTimeout(()=>{W.style.transform=`scaleX(${parseInt(Z)/100})`},200)})})},{threshold:0.15});document.querySelectorAll(".reveal").forEach((J)=>wU.observe(J));var s$=new IntersectionObserver((J)=>{J.forEach((Q)=>{if(Q.isIntersecting)Q.target.querySelectorAll("[data-target]").forEach(($)=>{let W=$.getAttribute("data-target");if(W){let Z=parseInt(W),H=0,Y=Z/93.75,U=Z===14?"ms":Z===3||Z>10?"×":"ms",E=setInterval(()=>{if(H=Math.min(H+Y,Z),$.textContent=Math.round(H)+U,H>=Z)clearInterval(E)},16)}}),s$.unobserve(Q.target)})},{threshold:0.3});document.querySelectorAll(".speed-hero").forEach((J)=>s$.observe(J));var LQ=document.getElementById("ticker-inner");if(LQ){let J=LQ.innerHTML;LQ.innerHTML=J+J}var n$=document.querySelector(".hero-title");if(n$)n$.addEventListener("mouseenter",()=>{let J=document.querySelector(".glitch");if(J)J.style.animation="glitch1 0.3s infinite"});

//# debugId=341D4AA6BFF8103B64756E2164756E21
//# sourceMappingURL=index-bmshdymx.js.map
