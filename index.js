var ZXingWASM=function(R){"use strict";const Dr=["Aztec","Codabar","Code128","Code39","Code93","DataBar","DataBarExpanded","DataBarLimited","DataMatrix","DXFilmEdge","EAN-13","EAN-8","ITF","Linear-Codes","Matrix-Codes","MaxiCode","MicroQRCode","None","PDF417","QRCode","rMQRCode","UPC-A","UPC-E"];function rt(d){return d.join("|")}function et(d){const h=ie(d);let P=0,j=Dr.length-1;for(;P<=j;){const c=Math.floor((P+j)/2),I=Dr[c],W=ie(I);if(W===h)return I;W<h?P=c+1:j=c-1}return"None"}function ie(d){return d.toLowerCase().replace(/_-\[\]/g,"")}const tt=["LocalAverage","GlobalHistogram","FixedThreshold","BoolCast"];function nt(d,h){return d.Binarizer[h]}const it=["Unknown","ASCII","ISO8859_1","ISO8859_2","ISO8859_3","ISO8859_4","ISO8859_5","ISO8859_6","ISO8859_7","ISO8859_8","ISO8859_9","ISO8859_10","ISO8859_11","ISO8859_13","ISO8859_14","ISO8859_15","ISO8859_16","Cp437","Cp1250","Cp1251","Cp1252","Cp1256","Shift_JIS","Big5","GB2312","GB18030","EUC_JP","EUC_KR","UTF16BE","UTF8","UTF16LE","UTF32BE","UTF32LE","BINARY"];function at(d,h){return d.CharacterSet[h]}const ae=["Text","Binary","Mixed","GS1","ISO15434","UnknownECI"];function ot(d){return ae[d.value]}const st=["Ignore","Read","Require"];function ut(d,h){return d.EanAddOnSymbol[h]}const ct=["Plain","ECI","HRI","Hex","Escaped"];function lt(d,h){return d.TextMode[h]}const rr={formats:[],tryHarder:!0,tryRotate:!0,tryInvert:!0,tryDownscale:!0,binarizer:"LocalAverage",isPure:!1,downscaleFactor:3,downscaleThreshold:500,minLineCount:2,maxNumberOfSymbols:255,tryCode39ExtendedMode:!1,validateCode39CheckSum:!1,validateITFCheckSum:!1,returnCodabarStartEnd:!1,returnErrors:!1,eanAddOnSymbol:"Read",textMode:"Plain",characterSet:"Unknown"};function oe(d,h){return{...h,formats:rt(h.formats),binarizer:nt(d,h.binarizer),eanAddOnSymbol:ut(d,h.eanAddOnSymbol),textMode:lt(d,h.textMode),characterSet:at(d,h.characterSet)}}const ft=["L","M","Q","H"];function se(d){return{...d,format:et(d.format),eccLevel:d.eccLevel,contentType:ot(d.contentType)}}const vt={locateFile:(d,h)=>{const P=d.match(/_(.+?)\.wasm$/);return P?`https://fastly.jsdelivr.net/npm/zxing-wasm@1.3.1/dist/${P[1]}/${d}`:h+d}};let _r=new WeakMap;function Ur(d,h){var I;const P=_r.get(d);if(P!=null&&P.modulePromise&&(h===void 0||Object.is(h,P.moduleOverrides)))return P.modulePromise;const j=(I=h!=null?h:P==null?void 0:P.moduleOverrides)!=null?I:vt,c=d({...j});return _r.set(d,{moduleOverrides:j,modulePromise:c}),c}function dt(){_r=new WeakMap}function ht(d,h){_r.set(d,{moduleOverrides:h})}async function pt(d,h,P=rr){const j={...rr,...P},c=await Ur(d),{size:I}=h,W=new Uint8Array(await h.arrayBuffer()),G=c._malloc(I);c.HEAPU8.set(W,G);const er=c.readBarcodesFromImage(G,I,oe(c,j));c._free(G);const Z=[];for(let M=0;M<er.size();++M)Z.push(se(er.get(M)));return Z}async function _t(d,h,P=rr){const j={...rr,...P},c=await Ur(d),{data:I,width:W,height:G,data:{byteLength:er}}=h,Z=c._malloc(er);c.HEAPU8.set(I,Z);const M=c.readBarcodesFromPixmap(Z,W,G,oe(c,j));c._free(Z);const sr=[];for(let tr=0;tr<M.size();++tr)sr.push(se(M.get(tr)));return sr}var gr=(()=>{var h;var d=typeof document<"u"&&((h=document.currentScript)==null?void 0:h.tagName.toUpperCase())==="SCRIPT"?document.currentScript.src:void 0;return function(P={}){var j,c=P,I,W,G=new Promise((r,e)=>{I=r,W=e}),er=typeof window=="object",Z=typeof Bun<"u",M=typeof importScripts=="function";typeof process=="object"&&typeof process.versions=="object"&&typeof process.versions.node=="string"&&process.type!="renderer";var sr=Object.assign({},c),tr="./this.program",H="";function bt(r){return c.locateFile?c.locateFile(r,H):H+r}var ce,Mr;if(er||M||Z){var Hr;M?H=self.location.href:typeof document<"u"&&((Hr=document.currentScript)===null||Hr===void 0?void 0:Hr.tagName.toUpperCase())==="SCRIPT"&&(H=document.currentScript.src),d&&(H=d),H.startsWith("blob:")?H="":H=H.substr(0,H.replace(/[?#].*/,"").lastIndexOf("/")+1),M&&(Mr=r=>{var e=new XMLHttpRequest;return e.open("GET",r,!1),e.responseType="arraybuffer",e.send(null),new Uint8Array(e.response)}),ce=r=>fetch(r,{credentials:"same-origin"}).then(e=>e.ok?e.arrayBuffer():Promise.reject(new Error(e.status+" : "+e.url)))}var wt=c.print||console.log.bind(console),nr=c.printErr||console.error.bind(console);Object.assign(c,sr),sr=null,c.arguments&&c.arguments,c.thisProgram&&(tr=c.thisProgram);var mr=c.wasmBinary,yr,le=!1,B,O,ir,ur,Q,w,fe,ve;function de(){var r=yr.buffer;c.HEAP8=B=new Int8Array(r),c.HEAP16=ir=new Int16Array(r),c.HEAPU8=O=new Uint8Array(r),c.HEAPU16=ur=new Uint16Array(r),c.HEAP32=Q=new Int32Array(r),c.HEAPU32=w=new Uint32Array(r),c.HEAPF32=fe=new Float32Array(r),c.HEAPF64=ve=new Float64Array(r)}var he=[],pe=[],_e=[];function Ct(){var r=c.preRun;r&&(typeof r=="function"&&(r=[r]),r.forEach(At)),xr(he)}function Tt(){xr(pe)}function Pt(){var r=c.postRun;r&&(typeof r=="function"&&(r=[r]),r.forEach(St)),xr(_e)}function At(r){he.unshift(r)}function Et(r){pe.unshift(r)}function St(r){_e.unshift(r)}var q=0,cr=null;function Ft(r){var e;q++,(e=c.monitorRunDependencies)===null||e===void 0||e.call(c,q)}function Rt(r){var e;if(q--,(e=c.monitorRunDependencies)===null||e===void 0||e.call(c,q),q==0&&cr){var t=cr;cr=null,t()}}function Br(r){var e;(e=c.onAbort)===null||e===void 0||e.call(c,r),r="Aborted("+r+")",nr(r),le=!0,r+=". Build with -sASSERTIONS for more info.";var t=new WebAssembly.RuntimeError(r);throw W(t),t}var Ot="data:application/octet-stream;base64,",ge=r=>r.startsWith(Ot);function kt(){var r="zxing_reader.wasm";return ge(r)?r:bt(r)}var $r;function me(r){if(r==$r&&mr)return new Uint8Array(mr);if(Mr)return Mr(r);throw"both async and sync fetching of the wasm failed"}function jt(r){return mr?Promise.resolve().then(()=>me(r)):ce(r).then(e=>new Uint8Array(e),()=>me(r))}function ye(r,e,t){return jt(r).then(n=>WebAssembly.instantiate(n,e)).then(t,n=>{nr(`failed to asynchronously prepare wasm: ${n}`),Br(n)})}function It(r,e,t,n){return!r&&typeof WebAssembly.instantiateStreaming=="function"&&!ge(e)&&typeof fetch=="function"?fetch(e,{credentials:"same-origin"}).then(i=>{var a=WebAssembly.instantiateStreaming(i,t);return a.then(n,function(s){return nr(`wasm streaming compile failed: ${s}`),nr("falling back to ArrayBuffer instantiation"),ye(e,t,n)})}):ye(e,t,n)}function Wt(){return{a:Pi}}function Dt(){var r,e=Wt();function t(i,a){return T=i.exports,yr=T.za,de(),Fe=T.Da,Et(T.Aa),Rt(),T}Ft();function n(i){t(i.instance)}if(c.instantiateWasm)try{return c.instantiateWasm(e,t)}catch(i){nr(`Module.instantiateWasm callback failed with error: ${i}`),W(i)}return(r=$r)!==null&&r!==void 0||($r=kt()),It(mr,$r,e,n).catch(W),{}}var xr=r=>{r.forEach(e=>e(c))};c.noExitRuntime;var g=r=>xe(r),m=()=>Ve(),br=[],wr=0,Ut=r=>{var e=new Vr(r);return e.get_caught()||(e.set_caught(!0),wr--),e.set_rethrown(!1),br.push(e),Le(r),He(r)},V=0,Mt=()=>{p(0,0);var r=br.pop();Ne(r.excPtr),V=0};class Vr{constructor(e){this.excPtr=e,this.ptr=e-24}set_type(e){w[this.ptr+4>>2]=e}get_type(){return w[this.ptr+4>>2]}set_destructor(e){w[this.ptr+8>>2]=e}get_destructor(){return w[this.ptr+8>>2]}set_caught(e){e=e?1:0,B[this.ptr+12]=e}get_caught(){return B[this.ptr+12]!=0}set_rethrown(e){e=e?1:0,B[this.ptr+13]=e}get_rethrown(){return B[this.ptr+13]!=0}init(e,t){this.set_adjusted_ptr(0),this.set_type(e),this.set_destructor(t)}set_adjusted_ptr(e){w[this.ptr+16>>2]=e}get_adjusted_ptr(){return w[this.ptr+16>>2]}}var Ht=r=>{throw V||(V=r),V},Cr=r=>Be(r),Nr=r=>{var e=V;if(!e)return Cr(0),0;var t=new Vr(e);t.set_adjusted_ptr(e);var n=t.get_type();if(!n)return Cr(0),e;for(var i of r){if(i===0||i===n)break;var a=t.ptr+16;if(ze(i,n,a))return Cr(i),e}return Cr(n),e},Bt=()=>Nr([]),xt=r=>Nr([r]),Vt=(r,e)=>Nr([r,e]),Nt=()=>{var r=br.pop();r||Br("no exception to throw");var e=r.excPtr;throw r.get_rethrown()||(br.push(r),r.set_rethrown(!0),r.set_caught(!1),wr++),V=e,V},Lt=(r,e,t)=>{var n=new Vr(r);throw n.init(e,t),V=r,wr++,V},zt=()=>wr,Xt=()=>{Br("")},Tr={},Lr=r=>{for(;r.length;){var e=r.pop(),t=r.pop();t(e)}};function lr(r){return this.fromWireType(w[r>>2])}var ar={},J={},Pr={},$e,Ar=r=>{throw new $e(r)},K=(r,e,t)=>{r.forEach(o=>Pr[o]=e);function n(o){var u=t(o);u.length!==r.length&&Ar("Mismatched type converter count");for(var l=0;l<r.length;++l)D(r[l],u[l])}var i=new Array(e.length),a=[],s=0;e.forEach((o,u)=>{J.hasOwnProperty(o)?i[u]=J[o]:(a.push(o),ar.hasOwnProperty(o)||(ar[o]=[]),ar[o].push(()=>{i[u]=J[o],++s,s===a.length&&n(i)}))}),a.length===0&&n(i)},Zt=r=>{var e=Tr[r];delete Tr[r];var t=e.rawConstructor,n=e.rawDestructor,i=e.fields,a=i.map(s=>s.getterReturnType).concat(i.map(s=>s.setterArgumentType));K([r],a,s=>{var o={};return i.forEach((u,l)=>{var f=u.fieldName,v=s[l],_=u.getter,b=u.getterContext,C=s[l+i.length],S=u.setter,A=u.setterContext;o[f]={read:E=>v.fromWireType(_(b,E)),write:(E,Y)=>{var k=[];S(A,E,C.toWireType(k,Y)),Lr(k)}}}),[{name:e.name,fromWireType:u=>{var l={};for(var f in o)l[f]=o[f].read(u);return n(u),l},toWireType:(u,l)=>{for(var f in o)if(!(f in l))throw new TypeError(`Missing field: "${f}"`);var v=t();for(f in o)o[f].write(v,l[f]);return u!==null&&u.push(n,v),v},argPackAdvance:x,readValueFromPointer:lr,destructorFunction:n}]})},Gt=(r,e,t,n,i)=>{},Qt=()=>{for(var r=new Array(256),e=0;e<256;++e)r[e]=String.fromCharCode(e);be=r},be,F=r=>{for(var e="",t=r;O[t];)e+=be[O[t++]];return e},or,$=r=>{throw new or(r)};function qt(r,e){let t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};var n=e.name;if(r||$(`type "${n}" must have a positive integer typeid pointer`),J.hasOwnProperty(r)){if(t.ignoreDuplicateRegistrations)return;$(`Cannot register type '${n}' twice`)}if(J[r]=e,delete Pr[r],ar.hasOwnProperty(r)){var i=ar[r];delete ar[r],i.forEach(a=>a())}}function D(r,e){let t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return qt(r,e,t)}var x=8,Jt=(r,e,t,n)=>{e=F(e),D(r,{name:e,fromWireType:function(i){return!!i},toWireType:function(i,a){return a?t:n},argPackAdvance:x,readValueFromPointer:function(i){return this.fromWireType(O[i])},destructorFunction:null})},Kt=r=>({count:r.count,deleteScheduled:r.deleteScheduled,preservePointerOnDelete:r.preservePointerOnDelete,ptr:r.ptr,ptrType:r.ptrType,smartPtr:r.smartPtr,smartPtrType:r.smartPtrType}),zr=r=>{function e(t){return t.$$.ptrType.registeredClass.name}$(e(r)+" instance already deleted")},Xr=!1,we=r=>{},Yt=r=>{r.smartPtr?r.smartPtrType.rawDestructor(r.smartPtr):r.ptrType.registeredClass.rawDestructor(r.ptr)},Ce=r=>{r.count.value-=1;var e=r.count.value===0;e&&Yt(r)},Te=(r,e,t)=>{if(e===t)return r;if(t.baseClass===void 0)return null;var n=Te(r,e,t.baseClass);return n===null?null:t.downcast(n)},Pe={},rn={},en=(r,e)=>{for(e===void 0&&$("ptr should not be undefined");r.baseClass;)e=r.upcast(e),r=r.baseClass;return e},tn=(r,e)=>(e=en(r,e),rn[e]),Er=(r,e)=>{(!e.ptrType||!e.ptr)&&Ar("makeClassHandle requires ptr and ptrType");var t=!!e.smartPtrType,n=!!e.smartPtr;return t!==n&&Ar("Both smartPtrType and smartPtr must be specified"),e.count={value:1},fr(Object.create(r,{$$:{value:e,writable:!0}}))};function nn(r){var e=this.getPointee(r);if(!e)return this.destructor(r),null;var t=tn(this.registeredClass,e);if(t!==void 0){if(t.$$.count.value===0)return t.$$.ptr=e,t.$$.smartPtr=r,t.clone();var n=t.clone();return this.destructor(r),n}function i(){return this.isSmartPointer?Er(this.registeredClass.instancePrototype,{ptrType:this.pointeeType,ptr:e,smartPtrType:this,smartPtr:r}):Er(this.registeredClass.instancePrototype,{ptrType:this,ptr:r})}var a=this.registeredClass.getActualType(e),s=Pe[a];if(!s)return i.call(this);var o;this.isConst?o=s.constPointerType:o=s.pointerType;var u=Te(e,this.registeredClass,o.registeredClass);return u===null?i.call(this):this.isSmartPointer?Er(o.registeredClass.instancePrototype,{ptrType:o,ptr:u,smartPtrType:this,smartPtr:r}):Er(o.registeredClass.instancePrototype,{ptrType:o,ptr:u})}var fr=r=>typeof FinalizationRegistry>"u"?(fr=e=>e,r):(Xr=new FinalizationRegistry(e=>{Ce(e.$$)}),fr=e=>{var t=e.$$,n=!!t.smartPtr;if(n){var i={$$:t};Xr.register(e,i,e)}return e},we=e=>Xr.unregister(e),fr(r)),Sr=[],an=()=>{for(;Sr.length;){var r=Sr.pop();r.$$.deleteScheduled=!1,r.delete()}},Ae,on=()=>{Object.assign(Fr.prototype,{isAliasOf(r){if(!(this instanceof Fr)||!(r instanceof Fr))return!1;var e=this.$$.ptrType.registeredClass,t=this.$$.ptr;r.$$=r.$$;for(var n=r.$$.ptrType.registeredClass,i=r.$$.ptr;e.baseClass;)t=e.upcast(t),e=e.baseClass;for(;n.baseClass;)i=n.upcast(i),n=n.baseClass;return e===n&&t===i},clone(){if(this.$$.ptr||zr(this),this.$$.preservePointerOnDelete)return this.$$.count.value+=1,this;var r=fr(Object.create(Object.getPrototypeOf(this),{$$:{value:Kt(this.$$)}}));return r.$$.count.value+=1,r.$$.deleteScheduled=!1,r},delete(){this.$$.ptr||zr(this),this.$$.deleteScheduled&&!this.$$.preservePointerOnDelete&&$("Object already scheduled for deletion"),we(this),Ce(this.$$),this.$$.preservePointerOnDelete||(this.$$.smartPtr=void 0,this.$$.ptr=void 0)},isDeleted(){return!this.$$.ptr},deleteLater(){return this.$$.ptr||zr(this),this.$$.deleteScheduled&&!this.$$.preservePointerOnDelete&&$("Object already scheduled for deletion"),Sr.push(this),Sr.length===1&&Ae&&Ae(an),this.$$.deleteScheduled=!0,this}})};function Fr(){}var vr=(r,e)=>Object.defineProperty(e,"name",{value:r}),Ee=(r,e,t)=>{if(r[e].overloadTable===void 0){var n=r[e];r[e]=function(){for(var i=arguments.length,a=new Array(i),s=0;s<i;s++)a[s]=arguments[s];return r[e].overloadTable.hasOwnProperty(a.length)||$(`Function '${t}' called with an invalid number of arguments (${a.length}) - expects one of (${r[e].overloadTable})!`),r[e].overloadTable[a.length].apply(this,a)},r[e].overloadTable=[],r[e].overloadTable[n.argCount]=n}},Zr=(r,e,t)=>{c.hasOwnProperty(r)?((t===void 0||c[r].overloadTable!==void 0&&c[r].overloadTable[t]!==void 0)&&$(`Cannot register public name '${r}' twice`),Ee(c,r,r),c.hasOwnProperty(t)&&$(`Cannot register multiple overloads of a function with the same number of arguments (${t})!`),c[r].overloadTable[t]=e):(c[r]=e,t!==void 0&&(c[r].numArguments=t))},sn=48,un=57,cn=r=>{r=r.replace(/[^a-zA-Z0-9_]/g,"$");var e=r.charCodeAt(0);return e>=sn&&e<=un?`_${r}`:r};function ln(r,e,t,n,i,a,s,o){this.name=r,this.constructor=e,this.instancePrototype=t,this.rawDestructor=n,this.baseClass=i,this.getActualType=a,this.upcast=s,this.downcast=o,this.pureVirtualFunctions=[]}var Gr=(r,e,t)=>{for(;e!==t;)e.upcast||$(`Expected null or instance of ${t.name}, got an instance of ${e.name}`),r=e.upcast(r),e=e.baseClass;return r};function fn(r,e){if(e===null)return this.isReference&&$(`null is not a valid ${this.name}`),0;e.$$||$(`Cannot pass "${re(e)}" as a ${this.name}`),e.$$.ptr||$(`Cannot pass deleted object as a pointer of type ${this.name}`);var t=e.$$.ptrType.registeredClass,n=Gr(e.$$.ptr,t,this.registeredClass);return n}function vn(r,e){var t;if(e===null)return this.isReference&&$(`null is not a valid ${this.name}`),this.isSmartPointer?(t=this.rawConstructor(),r!==null&&r.push(this.rawDestructor,t),t):0;(!e||!e.$$)&&$(`Cannot pass "${re(e)}" as a ${this.name}`),e.$$.ptr||$(`Cannot pass deleted object as a pointer of type ${this.name}`),!this.isConst&&e.$$.ptrType.isConst&&$(`Cannot convert argument of type ${e.$$.smartPtrType?e.$$.smartPtrType.name:e.$$.ptrType.name} to parameter type ${this.name}`);var n=e.$$.ptrType.registeredClass;if(t=Gr(e.$$.ptr,n,this.registeredClass),this.isSmartPointer)switch(e.$$.smartPtr===void 0&&$("Passing raw pointer to smart pointer is illegal"),this.sharingPolicy){case 0:e.$$.smartPtrType===this?t=e.$$.smartPtr:$(`Cannot convert argument of type ${e.$$.smartPtrType?e.$$.smartPtrType.name:e.$$.ptrType.name} to parameter type ${this.name}`);break;case 1:t=e.$$.smartPtr;break;case 2:if(e.$$.smartPtrType===this)t=e.$$.smartPtr;else{var i=e.clone();t=this.rawShare(t,L.toHandle(()=>i.delete())),r!==null&&r.push(this.rawDestructor,t)}break;default:$("Unsupporting sharing policy")}return t}function dn(r,e){if(e===null)return this.isReference&&$(`null is not a valid ${this.name}`),0;e.$$||$(`Cannot pass "${re(e)}" as a ${this.name}`),e.$$.ptr||$(`Cannot pass deleted object as a pointer of type ${this.name}`),e.$$.ptrType.isConst&&$(`Cannot convert argument of type ${e.$$.ptrType.name} to parameter type ${this.name}`);var t=e.$$.ptrType.registeredClass,n=Gr(e.$$.ptr,t,this.registeredClass);return n}var hn=()=>{Object.assign(Rr.prototype,{getPointee(r){return this.rawGetPointee&&(r=this.rawGetPointee(r)),r},destructor(r){var e;(e=this.rawDestructor)===null||e===void 0||e.call(this,r)},argPackAdvance:x,readValueFromPointer:lr,fromWireType:nn})};function Rr(r,e,t,n,i,a,s,o,u,l,f){this.name=r,this.registeredClass=e,this.isReference=t,this.isConst=n,this.isSmartPointer=i,this.pointeeType=a,this.sharingPolicy=s,this.rawGetPointee=o,this.rawConstructor=u,this.rawShare=l,this.rawDestructor=f,!i&&e.baseClass===void 0?n?(this.toWireType=fn,this.destructorFunction=null):(this.toWireType=dn,this.destructorFunction=null):this.toWireType=vn}var Se=(r,e,t)=>{c.hasOwnProperty(r)||Ar("Replacing nonexistent public symbol"),c[r].overloadTable!==void 0&&t!==void 0?c[r].overloadTable[t]=e:(c[r]=e,c[r].argCount=t)},pn=(r,e,t)=>{r=r.replace(/p/g,"i");var n=c["dynCall_"+r];return n(e,...t)},Or=[],Fe,y=r=>{var e=Or[r];return e||(r>=Or.length&&(Or.length=r+1),Or[r]=e=Fe.get(r)),e},_n=function(r,e){let t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:[];if(r.includes("j"))return pn(r,e,t);var n=y(e)(...t);return n},gn=(r,e)=>function(){for(var t=arguments.length,n=new Array(t),i=0;i<t;i++)n[i]=arguments[i];return _n(r,e,n)},U=(r,e)=>{r=F(r);function t(){return r.includes("j")?gn(r,e):y(e)}var n=t();return typeof n!="function"&&$(`unknown function pointer with signature ${r}: ${e}`),n},mn=(r,e)=>{var t=vr(e,function(n){this.name=e,this.message=n;var i=new Error(n).stack;i!==void 0&&(this.stack=this.toString()+`
`+i.replace(/^Error(:[^\n]*)?\n/,""))});return t.prototype=Object.create(r.prototype),t.prototype.constructor=t,t.prototype.toString=function(){return this.message===void 0?this.name:`${this.name}: ${this.message}`},t},Re,Oe=r=>{var e=Me(r),t=F(e);return z(e),t},kr=(r,e)=>{var t=[],n={};function i(a){if(!n[a]&&!J[a]){if(Pr[a]){Pr[a].forEach(i);return}t.push(a),n[a]=!0}}throw e.forEach(i),new Re(`${r}: `+t.map(Oe).join([", "]))},yn=(r,e,t,n,i,a,s,o,u,l,f,v,_)=>{f=F(f),a=U(i,a),o&&(o=U(s,o)),l&&(l=U(u,l)),_=U(v,_);var b=cn(f);Zr(b,function(){kr(`Cannot construct ${f} due to unbound types`,[n])}),K([r,e,t],n?[n]:[],C=>{C=C[0];var S,A;n?(S=C.registeredClass,A=S.instancePrototype):A=Fr.prototype;var E=vr(f,function(){if(Object.getPrototypeOf(this)!==Y)throw new or("Use 'new' to construct "+f);if(k.constructor_body===void 0)throw new or(f+" has no accessible constructor");for(var Ke=arguments.length,Ir=new Array(Ke),Wr=0;Wr<Ke;Wr++)Ir[Wr]=arguments[Wr];var Ye=k.constructor_body[Ir.length];if(Ye===void 0)throw new or(`Tried to invoke ctor of ${f} with invalid number of parameters (${Ir.length}) - expected (${Object.keys(k.constructor_body).toString()}) parameters instead!`);return Ye.apply(this,Ir)}),Y=Object.create(A,{constructor:{value:E}});E.prototype=Y;var k=new ln(f,E,Y,_,S,a,o,l);if(k.baseClass){var X,pr;(pr=(X=k.baseClass).__derivedClasses)!==null&&pr!==void 0||(X.__derivedClasses=[]),k.baseClass.__derivedClasses.push(k)}var oa=new Rr(f,k,!0,!1,!1),qe=new Rr(f+"*",k,!1,!1,!1),Je=new Rr(f+" const*",k,!1,!0,!1);return Pe[r]={pointerType:qe,constPointerType:Je},Se(b,E),[oa,qe,Je]})},Qr=(r,e)=>{for(var t=[],n=0;n<r;n++)t.push(w[e+n*4>>2]);return t};function $n(r){for(var e=1;e<r.length;++e)if(r[e]!==null&&r[e].destructorFunction===void 0)return!0;return!1}function qr(r,e,t,n,i,a){var s=e.length;s<2&&$("argTypes array size mismatch! Must at least get return value and 'this' types!");var o=e[1]!==null&&t!==null,u=$n(e),l=e[0].name!=="void",f=s-2,v=new Array(f),_=[],b=[],C=function(){b.length=0;var S;_.length=o?2:1,_[0]=i,o&&(S=e[1].toWireType(b,this),_[1]=S);for(var A=0;A<f;++A)v[A]=e[A+2].toWireType(b,A<0||arguments.length<=A?void 0:arguments[A]),_.push(v[A]);var E=n(..._);function Y(k){if(u)Lr(b);else for(var X=o?1:2;X<e.length;X++){var pr=X===1?S:v[X-2];e[X].destructorFunction!==null&&e[X].destructorFunction(pr)}if(l)return e[0].fromWireType(k)}return Y(E)};return vr(r,C)}var bn=(r,e,t,n,i,a)=>{var s=Qr(e,t);i=U(n,i),K([],[r],o=>{o=o[0];var u=`constructor ${o.name}`;if(o.registeredClass.constructor_body===void 0&&(o.registeredClass.constructor_body=[]),o.registeredClass.constructor_body[e-1]!==void 0)throw new or(`Cannot register multiple constructors with identical number of parameters (${e-1}) for class '${o.name}'! Overload resolution is currently only performed using the parameter count, not actual type info!`);return o.registeredClass.constructor_body[e-1]=()=>{kr(`Cannot construct ${o.name} due to unbound types`,s)},K([],s,l=>(l.splice(1,0,null),o.registeredClass.constructor_body[e-1]=qr(u,l,null,i,a),[])),[]})},ke=r=>{r=r.trim();const e=r.indexOf("(");return e!==-1?r.substr(0,e):r},wn=(r,e,t,n,i,a,s,o,u,l)=>{var f=Qr(t,n);e=F(e),e=ke(e),a=U(i,a),K([],[r],v=>{v=v[0];var _=`${v.name}.${e}`;e.startsWith("@@")&&(e=Symbol[e.substring(2)]),o&&v.registeredClass.pureVirtualFunctions.push(e);function b(){kr(`Cannot call ${_} due to unbound types`,f)}var C=v.registeredClass.instancePrototype,S=C[e];return S===void 0||S.overloadTable===void 0&&S.className!==v.name&&S.argCount===t-2?(b.argCount=t-2,b.className=v.name,C[e]=b):(Ee(C,e,_),C[e].overloadTable[t-2]=b),K([],f,A=>{var E=qr(_,A,v,a,s);return C[e].overloadTable===void 0?(E.argCount=t-2,C[e]=E):C[e].overloadTable[t-2]=E,[]}),[]})},Jr=[],N=[],Kr=r=>{r>9&&--N[r+1]===0&&(N[r]=void 0,Jr.push(r))},Cn=()=>N.length/2-5-Jr.length,Tn=()=>{N.push(0,1,void 0,1,null,1,!0,1,!1,1),c.count_emval_handles=Cn},L={toValue:r=>(r||$("Cannot use deleted val. handle = "+r),N[r]),toHandle:r=>{switch(r){case void 0:return 2;case null:return 4;case!0:return 6;case!1:return 8;default:{const e=Jr.pop()||N.length;return N[e]=r,N[e+1]=1,e}}}},je={name:"emscripten::val",fromWireType:r=>{var e=L.toValue(r);return Kr(r),e},toWireType:(r,e)=>L.toHandle(e),argPackAdvance:x,readValueFromPointer:lr,destructorFunction:null},Pn=r=>D(r,je),An=(r,e,t)=>{switch(e){case 1:return t?function(n){return this.fromWireType(B[n])}:function(n){return this.fromWireType(O[n])};case 2:return t?function(n){return this.fromWireType(ir[n>>1])}:function(n){return this.fromWireType(ur[n>>1])};case 4:return t?function(n){return this.fromWireType(Q[n>>2])}:function(n){return this.fromWireType(w[n>>2])};default:throw new TypeError(`invalid integer width (${e}): ${r}`)}},En=(r,e,t,n)=>{e=F(e);function i(){}i.values={},D(r,{name:e,constructor:i,fromWireType:function(a){return this.constructor.values[a]},toWireType:(a,s)=>s.value,argPackAdvance:x,readValueFromPointer:An(e,t,n),destructorFunction:null}),Zr(e,i)},Yr=(r,e)=>{var t=J[r];return t===void 0&&$(`${e} has unknown type ${Oe(r)}`),t},Sn=(r,e,t)=>{var n=Yr(r,"enum");e=F(e);var i=n.constructor,a=Object.create(n.constructor.prototype,{value:{value:t},constructor:{value:vr(`${n.name}_${e}`,function(){})}});i.values[t]=a,i[e]=a},re=r=>{if(r===null)return"null";var e=typeof r;return e==="object"||e==="array"||e==="function"?r.toString():""+r},Fn=(r,e)=>{switch(e){case 4:return function(t){return this.fromWireType(fe[t>>2])};case 8:return function(t){return this.fromWireType(ve[t>>3])};default:throw new TypeError(`invalid float width (${e}): ${r}`)}},Rn=(r,e,t)=>{e=F(e),D(r,{name:e,fromWireType:n=>n,toWireType:(n,i)=>i,argPackAdvance:x,readValueFromPointer:Fn(e,t),destructorFunction:null})},On=(r,e,t,n,i,a,s,o)=>{var u=Qr(e,t);r=F(r),r=ke(r),i=U(n,i),Zr(r,function(){kr(`Cannot call ${r} due to unbound types`,u)},e-1),K([],u,l=>{var f=[l[0],null].concat(l.slice(1));return Se(r,qr(r,f,null,i,a),e-1),[]})},kn=(r,e,t)=>{switch(e){case 1:return t?n=>B[n]:n=>O[n];case 2:return t?n=>ir[n>>1]:n=>ur[n>>1];case 4:return t?n=>Q[n>>2]:n=>w[n>>2];default:throw new TypeError(`invalid integer width (${e}): ${r}`)}},jn=(r,e,t,n,i)=>{e=F(e);var a=f=>f;if(n===0){var s=32-8*t;a=f=>f<<s>>>s}var o=e.includes("unsigned"),u=(f,v)=>{},l;o?l=function(f,v){return u(v,this.name),v>>>0}:l=function(f,v){return u(v,this.name),v},D(r,{name:e,fromWireType:a,toWireType:l,argPackAdvance:x,readValueFromPointer:kn(e,t,n!==0),destructorFunction:null})},In=(r,e,t)=>{var n=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array],i=n[e];function a(s){var o=w[s>>2],u=w[s+4>>2];return new i(B.buffer,u,o)}t=F(t),D(r,{name:t,fromWireType:a,argPackAdvance:x,readValueFromPointer:a},{ignoreDuplicateRegistrations:!0})},Wn=Object.assign({optional:!0},je),Dn=(r,e)=>{D(r,Wn)},Un=(r,e,t,n)=>{if(!(n>0))return 0;for(var i=t,a=t+n-1,s=0;s<r.length;++s){var o=r.charCodeAt(s);if(o>=55296&&o<=57343){var u=r.charCodeAt(++s);o=65536+((o&1023)<<10)|u&1023}if(o<=127){if(t>=a)break;e[t++]=o}else if(o<=2047){if(t+1>=a)break;e[t++]=192|o>>6,e[t++]=128|o&63}else if(o<=65535){if(t+2>=a)break;e[t++]=224|o>>12,e[t++]=128|o>>6&63,e[t++]=128|o&63}else{if(t+3>=a)break;e[t++]=240|o>>18,e[t++]=128|o>>12&63,e[t++]=128|o>>6&63,e[t++]=128|o&63}}return e[t]=0,t-i},dr=(r,e,t)=>Un(r,O,e,t),Mn=r=>{for(var e=0,t=0;t<r.length;++t){var n=r.charCodeAt(t);n<=127?e++:n<=2047?e+=2:n>=55296&&n<=57343?(e+=4,++t):e+=3}return e},Ie=typeof TextDecoder<"u"?new TextDecoder:void 0,We=function(r){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:NaN;for(var n=e+t,i=e;r[i]&&!(i>=n);)++i;if(i-e>16&&r.buffer&&Ie)return Ie.decode(r.subarray(e,i));for(var a="";e<i;){var s=r[e++];if(!(s&128)){a+=String.fromCharCode(s);continue}var o=r[e++]&63;if((s&224)==192){a+=String.fromCharCode((s&31)<<6|o);continue}var u=r[e++]&63;if((s&240)==224?s=(s&15)<<12|o<<6|u:s=(s&7)<<18|o<<12|u<<6|r[e++]&63,s<65536)a+=String.fromCharCode(s);else{var l=s-65536;a+=String.fromCharCode(55296|l>>10,56320|l&1023)}}return a},Hn=(r,e)=>r?We(O,r,e):"",Bn=(r,e)=>{e=F(e);var t=e==="std::string";D(r,{name:e,fromWireType(n){var i=w[n>>2],a=n+4,s;if(t)for(var o=a,u=0;u<=i;++u){var l=a+u;if(u==i||O[l]==0){var f=l-o,v=Hn(o,f);s===void 0?s=v:(s+="\0",s+=v),o=l+1}}else{for(var _=new Array(i),u=0;u<i;++u)_[u]=String.fromCharCode(O[a+u]);s=_.join("")}return z(n),s},toWireType(n,i){i instanceof ArrayBuffer&&(i=new Uint8Array(i));var a,s=typeof i=="string";s||i instanceof Uint8Array||i instanceof Uint8ClampedArray||i instanceof Int8Array||$("Cannot pass non-string to std::string"),t&&s?a=Mn(i):a=i.length;var o=ne(4+a+1),u=o+4;if(w[o>>2]=a,t&&s)dr(i,u,a+1);else if(s)for(var l=0;l<a;++l){var f=i.charCodeAt(l);f>255&&(z(u),$("String has UTF-16 code units that do not fit in 8 bits")),O[u+l]=f}else for(var l=0;l<a;++l)O[u+l]=i[l];return n!==null&&n.push(z,o),o},argPackAdvance:x,readValueFromPointer:lr,destructorFunction(n){z(n)}})},De=typeof TextDecoder<"u"?new TextDecoder("utf-16le"):void 0,xn=(r,e)=>{for(var t=r,n=t>>1,i=n+e/2;!(n>=i)&&ur[n];)++n;if(t=n<<1,t-r>32&&De)return De.decode(O.subarray(r,t));for(var a="",s=0;!(s>=e/2);++s){var o=ir[r+s*2>>1];if(o==0)break;a+=String.fromCharCode(o)}return a},Vn=(r,e,t)=>{var n;if((n=t)!==null&&n!==void 0||(t=2147483647),t<2)return 0;t-=2;for(var i=e,a=t<r.length*2?t/2:r.length,s=0;s<a;++s){var o=r.charCodeAt(s);ir[e>>1]=o,e+=2}return ir[e>>1]=0,e-i},Nn=r=>r.length*2,Ln=(r,e)=>{for(var t=0,n="";!(t>=e/4);){var i=Q[r+t*4>>2];if(i==0)break;if(++t,i>=65536){var a=i-65536;n+=String.fromCharCode(55296|a>>10,56320|a&1023)}else n+=String.fromCharCode(i)}return n},zn=(r,e,t)=>{var n;if((n=t)!==null&&n!==void 0||(t=2147483647),t<4)return 0;for(var i=e,a=i+t-4,s=0;s<r.length;++s){var o=r.charCodeAt(s);if(o>=55296&&o<=57343){var u=r.charCodeAt(++s);o=65536+((o&1023)<<10)|u&1023}if(Q[e>>2]=o,e+=4,e+4>a)break}return Q[e>>2]=0,e-i},Xn=r=>{for(var e=0,t=0;t<r.length;++t){var n=r.charCodeAt(t);n>=55296&&n<=57343&&++t,e+=4}return e},Zn=(r,e,t)=>{t=F(t);var n,i,a,s;e===2?(n=xn,i=Vn,s=Nn,a=o=>ur[o>>1]):e===4&&(n=Ln,i=zn,s=Xn,a=o=>w[o>>2]),D(r,{name:t,fromWireType:o=>{for(var u=w[o>>2],l,f=o+4,v=0;v<=u;++v){var _=o+4+v*e;if(v==u||a(_)==0){var b=_-f,C=n(f,b);l===void 0?l=C:(l+="\0",l+=C),f=_+e}}return z(o),l},toWireType:(o,u)=>{typeof u!="string"&&$(`Cannot pass non-string to C++ string type ${t}`);var l=s(u),f=ne(4+l+e);return w[f>>2]=l/e,i(u,f+4,l+e),o!==null&&o.push(z,f),f},argPackAdvance:x,readValueFromPointer:lr,destructorFunction(o){z(o)}})},Gn=(r,e,t,n,i,a)=>{Tr[r]={name:F(e),rawConstructor:U(t,n),rawDestructor:U(i,a),fields:[]}},Qn=(r,e,t,n,i,a,s,o,u,l)=>{Tr[r].fields.push({fieldName:F(e),getterReturnType:t,getter:U(n,i),getterContext:a,setterArgumentType:s,setter:U(o,u),setterContext:l})},qn=(r,e)=>{e=F(e),D(r,{isVoid:!0,name:e,argPackAdvance:0,fromWireType:()=>{},toWireType:(t,n)=>{}})},Jn=(r,e,t)=>O.copyWithin(r,e,e+t),ee=[],Kn=(r,e,t,n)=>(r=ee[r],e=L.toValue(e),r(null,e,t,n)),Yn={},ri=r=>{var e=Yn[r];return e===void 0?F(r):e},Ue=()=>{if(typeof globalThis=="object")return globalThis;function r(e){e.$$$embind_global$$$=e;var t=typeof $$$embind_global$$$=="object"&&e.$$$embind_global$$$==e;return t||delete e.$$$embind_global$$$,t}if(typeof $$$embind_global$$$=="object"||(typeof global=="object"&&r(global)?$$$embind_global$$$=global:typeof self=="object"&&r(self)&&($$$embind_global$$$=self),typeof $$$embind_global$$$=="object"))return $$$embind_global$$$;throw Error("unable to get global object.")},ei=r=>r===0?L.toHandle(Ue()):(r=ri(r),L.toHandle(Ue()[r])),ti=r=>{var e=ee.length;return ee.push(r),e},ni=(r,e)=>{for(var t=new Array(r),n=0;n<r;++n)t[n]=Yr(w[e+n*4>>2],"parameter "+n);return t},ii=Reflect.construct,ai=(r,e,t)=>{var n=[],i=r.toWireType(n,t);return n.length&&(w[e>>2]=L.toHandle(n)),i},oi=(r,e,t)=>{var n=ni(r,e),i=n.shift();r--;var a=new Array(r),s=(u,l,f,v)=>{for(var _=0,b=0;b<r;++b)a[b]=n[b].readValueFromPointer(v+_),_+=n[b].argPackAdvance;var C=t===1?ii(l,a):l.apply(u,a);return ai(i,f,C)},o=`methodCaller<(${n.map(u=>u.name).join(", ")}) => ${i.name}>`;return ti(vr(o,s))},si=r=>{r>9&&(N[r+1]+=1)},ui=r=>{var e=L.toValue(r);Lr(e),Kr(r)},ci=(r,e)=>{r=Yr(r,"_emval_take_value");var t=r.readValueFromPointer(e);return L.toHandle(t)},li=(r,e,t,n)=>{var i=new Date().getFullYear(),a=new Date(i,0,1),s=new Date(i,6,1),o=a.getTimezoneOffset(),u=s.getTimezoneOffset(),l=Math.max(o,u);w[r>>2]=l*60,Q[e>>2]=+(o!=u);var f=b=>{var C=b>=0?"-":"+",S=Math.abs(b),A=String(Math.floor(S/60)).padStart(2,"0"),E=String(S%60).padStart(2,"0");return`UTC${C}${A}${E}`},v=f(o),_=f(u);u<o?(dr(v,t,17),dr(_,n,17)):(dr(v,n,17),dr(_,t,17))},fi=()=>2147483648,vi=(r,e)=>Math.ceil(r/e)*e,di=r=>{var e=yr.buffer,t=(r-e.byteLength+65535)/65536|0;try{return yr.grow(t),de(),1}catch{}},hi=r=>{var e=O.length;r>>>=0;var t=fi();if(r>t)return!1;for(var n=1;n<=4;n*=2){var i=e*(1+.2/n);i=Math.min(i,r+100663296);var a=Math.min(t,vi(Math.max(r,i),65536)),s=di(a);if(s)return!0}return!1},te={},pi=()=>tr||"./this.program",hr=()=>{if(!hr.strings){var r=(typeof navigator=="object"&&navigator.languages&&navigator.languages[0]||"C").replace("-","_")+".UTF-8",e={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:r,_:pi()};for(var t in te)te[t]===void 0?delete e[t]:e[t]=te[t];var n=[];for(var t in e)n.push(`${t}=${e[t]}`);hr.strings=n}return hr.strings},_i=(r,e)=>{for(var t=0;t<r.length;++t)B[e++]=r.charCodeAt(t);B[e]=0},gi=(r,e)=>{var t=0;return hr().forEach((n,i)=>{var a=e+t;w[r+i*4>>2]=a,_i(n,a),t+=n.length+1}),0},mi=(r,e)=>{var t=hr();w[r>>2]=t.length;var n=0;return t.forEach(i=>n+=i.length+1),w[e>>2]=n,0},yi=r=>52;function $i(r,e,t,n,i){return 70}var bi=[null,[],[]],wi=(r,e)=>{var t=bi[r];e===0||e===10?((r===1?wt:nr)(We(t)),t.length=0):t.push(e)},Ci=(r,e,t,n)=>{for(var i=0,a=0;a<t;a++){var s=w[e>>2],o=w[e+4>>2];e+=8;for(var u=0;u<o;u++)wi(r,O[s+u]);i+=o}return w[n>>2]=i,0},Ti=r=>r;$e=c.InternalError=class extends Error{constructor(e){super(e),this.name="InternalError"}},Qt(),or=c.BindingError=class extends Error{constructor(e){super(e),this.name="BindingError"}},on(),hn(),Re=c.UnboundTypeError=mn(Error,"UnboundTypeError"),Tn();var Pi={t:Ut,x:Mt,a:Bt,j:xt,k:Vt,O:Nt,q:Lt,ga:zt,d:Ht,ca:Xt,va:Zt,ba:Gt,pa:Jt,ta:yn,sa:bn,E:wn,oa:Pn,F:En,n:Sn,W:Rn,X:On,y:jn,u:In,ua:Dn,V:Bn,P:Zn,L:Gn,wa:Qn,qa:qn,ja:Jn,T:Kn,xa:Kr,ya:ei,U:oi,Y:si,Z:ui,ra:ci,da:li,ha:hi,ea:gi,fa:mi,ia:yi,$:$i,S:Ci,J:Xi,C:Gi,Q:Ri,R:ea,r:Vi,b:Ai,D:zi,la:qi,c:ki,ka:Ji,h:Fi,i:Di,s:Ui,N:Li,w:Hi,I:Yi,K:Ni,z:Qi,H:ta,aa:ia,_:aa,l:ji,f:Oi,e:Si,g:Ei,M:ra,m:Wi,ma:Zi,p:Mi,v:Bi,na:xi,B:Ki,o:Ii,G:na,A:Ti},T=Dt(),Me=r=>(Me=T.Ba)(r),z=c._free=r=>(z=c._free=T.Ca)(r),ne=c._malloc=r=>(ne=c._malloc=T.Ea)(r),He=r=>(He=T.Fa)(r),p=(r,e)=>(p=T.Ga)(r,e),Be=r=>(Be=T.Ha)(r),xe=r=>(xe=T.Ia)(r),Ve=()=>(Ve=T.Ja)(),Ne=r=>(Ne=T.Ka)(r),Le=r=>(Le=T.La)(r),ze=(r,e,t)=>(ze=T.Ma)(r,e,t);c.dynCall_viijii=(r,e,t,n,i,a,s)=>(c.dynCall_viijii=T.Na)(r,e,t,n,i,a,s);var Xe=c.dynCall_jiii=(r,e,t,n)=>(Xe=c.dynCall_jiii=T.Oa)(r,e,t,n);c.dynCall_jiji=(r,e,t,n,i)=>(c.dynCall_jiji=T.Pa)(r,e,t,n,i);var Ze=c.dynCall_jiiii=(r,e,t,n,i)=>(Ze=c.dynCall_jiiii=T.Qa)(r,e,t,n,i);c.dynCall_iiiiij=(r,e,t,n,i,a,s)=>(c.dynCall_iiiiij=T.Ra)(r,e,t,n,i,a,s),c.dynCall_iiiiijj=(r,e,t,n,i,a,s,o,u)=>(c.dynCall_iiiiijj=T.Sa)(r,e,t,n,i,a,s,o,u),c.dynCall_iiiiiijj=(r,e,t,n,i,a,s,o,u,l)=>(c.dynCall_iiiiiijj=T.Ta)(r,e,t,n,i,a,s,o,u,l);function Ai(r,e){var t=m();try{return y(r)(e)}catch(n){if(g(t),n!==n+0)throw n;p(1,0)}}function Ei(r,e,t,n){var i=m();try{y(r)(e,t,n)}catch(a){if(g(i),a!==a+0)throw a;p(1,0)}}function Si(r,e,t){var n=m();try{y(r)(e,t)}catch(i){if(g(n),i!==i+0)throw i;p(1,0)}}function Fi(r,e,t,n){var i=m();try{return y(r)(e,t,n)}catch(a){if(g(i),a!==a+0)throw a;p(1,0)}}function Ri(r,e,t,n,i){var a=m();try{return y(r)(e,t,n,i)}catch(s){if(g(a),s!==s+0)throw s;p(1,0)}}function Oi(r,e){var t=m();try{y(r)(e)}catch(n){if(g(t),n!==n+0)throw n;p(1,0)}}function ki(r,e,t){var n=m();try{return y(r)(e,t)}catch(i){if(g(n),i!==i+0)throw i;p(1,0)}}function ji(r){var e=m();try{y(r)()}catch(t){if(g(e),t!==t+0)throw t;p(1,0)}}function Ii(r,e,t,n,i,a,s,o,u,l,f){var v=m();try{y(r)(e,t,n,i,a,s,o,u,l,f)}catch(_){if(g(v),_!==_+0)throw _;p(1,0)}}function Wi(r,e,t,n,i){var a=m();try{y(r)(e,t,n,i)}catch(s){if(g(a),s!==s+0)throw s;p(1,0)}}function Di(r,e,t,n,i){var a=m();try{return y(r)(e,t,n,i)}catch(s){if(g(a),s!==s+0)throw s;p(1,0)}}function Ui(r,e,t,n,i,a){var s=m();try{return y(r)(e,t,n,i,a)}catch(o){if(g(s),o!==o+0)throw o;p(1,0)}}function Mi(r,e,t,n,i,a){var s=m();try{y(r)(e,t,n,i,a)}catch(o){if(g(s),o!==o+0)throw o;p(1,0)}}function Hi(r,e,t,n,i,a,s){var o=m();try{return y(r)(e,t,n,i,a,s)}catch(u){if(g(o),u!==u+0)throw u;p(1,0)}}function Bi(r,e,t,n,i,a,s,o){var u=m();try{y(r)(e,t,n,i,a,s,o)}catch(l){if(g(u),l!==l+0)throw l;p(1,0)}}function xi(r,e,t,n,i,a,s,o,u){var l=m();try{y(r)(e,t,n,i,a,s,o,u)}catch(f){if(g(l),f!==f+0)throw f;p(1,0)}}function Vi(r){var e=m();try{return y(r)()}catch(t){if(g(e),t!==t+0)throw t;p(1,0)}}function Ni(r,e,t,n,i,a,s,o,u){var l=m();try{return y(r)(e,t,n,i,a,s,o,u)}catch(f){if(g(l),f!==f+0)throw f;p(1,0)}}function Li(r,e,t,n,i,a,s){var o=m();try{return y(r)(e,t,n,i,a,s)}catch(u){if(g(o),u!==u+0)throw u;p(1,0)}}function zi(r,e,t,n){var i=m();try{return y(r)(e,t,n)}catch(a){if(g(i),a!==a+0)throw a;p(1,0)}}function Xi(r,e,t,n){var i=m();try{return y(r)(e,t,n)}catch(a){if(g(i),a!==a+0)throw a;p(1,0)}}function Zi(r,e,t,n,i,a,s,o){var u=m();try{y(r)(e,t,n,i,a,s,o)}catch(l){if(g(u),l!==l+0)throw l;p(1,0)}}function Gi(r,e,t,n,i,a){var s=m();try{return y(r)(e,t,n,i,a)}catch(o){if(g(s),o!==o+0)throw o;p(1,0)}}function Qi(r,e,t,n,i,a,s,o,u,l){var f=m();try{return y(r)(e,t,n,i,a,s,o,u,l)}catch(v){if(g(f),v!==v+0)throw v;p(1,0)}}function qi(r,e,t){var n=m();try{return y(r)(e,t)}catch(i){if(g(n),i!==i+0)throw i;p(1,0)}}function Ji(r,e,t,n,i){var a=m();try{return y(r)(e,t,n,i)}catch(s){if(g(a),s!==s+0)throw s;p(1,0)}}function Ki(r,e,t,n,i,a,s,o,u,l){var f=m();try{y(r)(e,t,n,i,a,s,o,u,l)}catch(v){if(g(f),v!==v+0)throw v;p(1,0)}}function Yi(r,e,t,n,i,a,s,o){var u=m();try{return y(r)(e,t,n,i,a,s,o)}catch(l){if(g(u),l!==l+0)throw l;p(1,0)}}function ra(r,e,t,n,i,a,s){var o=m();try{y(r)(e,t,n,i,a,s)}catch(u){if(g(o),u!==u+0)throw u;p(1,0)}}function ea(r,e,t,n){var i=m();try{return y(r)(e,t,n)}catch(a){if(g(i),a!==a+0)throw a;p(1,0)}}function ta(r,e,t,n,i,a,s,o,u,l,f,v){var _=m();try{return y(r)(e,t,n,i,a,s,o,u,l,f,v)}catch(b){if(g(_),b!==b+0)throw b;p(1,0)}}function na(r,e,t,n,i,a,s,o,u,l,f,v,_,b,C,S){var A=m();try{y(r)(e,t,n,i,a,s,o,u,l,f,v,_,b,C,S)}catch(E){if(g(A),E!==E+0)throw E;p(1,0)}}function ia(r,e,t,n){var i=m();try{return Xe(r,e,t,n)}catch(a){if(g(i),a!==a+0)throw a;p(1,0)}}function aa(r,e,t,n,i){var a=m();try{return Ze(r,e,t,n,i)}catch(s){if(g(a),s!==s+0)throw s;p(1,0)}}var jr,Ge;cr=function r(){jr||Qe(),jr||(cr=r)};function Qe(){if(q>0||!Ge&&(Ge=1,Ct(),q>0))return;function r(){var e;jr||(jr=1,c.calledRun=1,!le&&(Tt(),I(c),(e=c.onRuntimeInitialized)===null||e===void 0||e.call(c),Pt()))}c.setStatus?(c.setStatus("Running..."),setTimeout(()=>{setTimeout(()=>c.setStatus(""),1),r()},1)):r()}if(c.preInit)for(typeof c.preInit=="function"&&(c.preInit=[c.preInit]);c.preInit.length>0;)c.preInit.pop()();return Qe(),j=G,j}})();const ue={...rr,formats:[...rr.formats]};function gt(d){return Ur(gr,d)}function mt(d){return ht(gr,d)}async function yt(d,h){return pt(gr,d,h)}async function $t(d,h){return _t(gr,d,h)}return R.barcodeFormats=Dr,R.binarizers=tt,R.characterSets=it,R.contentTypes=ae,R.defaultDecodeHints=ue,R.defaultReaderOptions=ue,R.eanAddOnSymbols=st,R.getZXingModule=gt,R.purgeZXingModule=dt,R.readBarcodesFromImageData=$t,R.readBarcodesFromImageFile=yt,R.readOutputEccLevels=ft,R.setZXingModuleOverrides=mt,R.textModes=ct,Object.defineProperty(R,Symbol.toStringTag,{value:"Module"}),R}({});