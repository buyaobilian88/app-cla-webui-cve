(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-cefac172"],{"0418":function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"header"},[n("el-col",{attrs:{span:8}},[n("div",{staticStyle:{display:"flex"}},[n("img",{staticClass:"pointer",staticStyle:{width:"2rem"},attrs:{src:this.$store.state.user.userImg,alt:""},on:{click:function(e){return t.newWindow()}}}),n("div",{staticStyle:{display:"flex","flex-direction":"column","justify-content":"center","margin-left":".5rem"}},[n("span",[t._v("Hi, "),n("span",{staticClass:"pointer",staticStyle:{"font-weight":"bold"}},[t._v(t._s(this.$store.state.user.userName)+"!")])])])])]),n("el-col",{attrs:{span:8}},[n("div",[n("svg-icon",{staticClass:"pointer",attrs:{id:"svg_logo","icon-class":"logo_b"},on:{click:function(e){return t.toHome()}}})],1)]),n("el-col",{attrs:{span:8}},[n("div",[n("el-tooltip",{attrs:{effect:"dark",content:"Sign out",placement:"left"}},[n("svg-icon",{staticClass:"pointer",attrs:{id:"svg_loginOut","icon-class":"loginOut"},on:{click:function(e){return t.loginOut()}}})],1)],1)])],1)},o=[],a={name:"Header",computed:{},data:function(){return{}},created:function(){},methods:{toHome:function(){this.$router.push("/home")},loginOut:function(){this.$router.push("/")},newWindow:function(){window.open("https://github.com/ouchengle")}}},i=a,c=(n("a9cc"),n("2877")),s=Object(c["a"])(i,r,o,!1,null,"763af51e",null);e["a"]=s.exports},1460:function(t,e,n){"use strict";var r=n("cf23"),o=n.n(r);o.a},"14c3":function(t,e,n){var r=n("c6b6"),o=n("9263");t.exports=function(t,e){var n=t.exec;if("function"===typeof n){var a=n.call(t,e);if("object"!==typeof a)throw TypeError("RegExp exec method returned something other than an Object or null");return a}if("RegExp"!==r(t))throw TypeError("RegExp#exec called on incompatible receiver");return o.call(t,e)}},"159b":function(t,e,n){var r=n("da84"),o=n("fdbc"),a=n("17c2"),i=n("9112");for(var c in o){var s=r[c],u=s&&s.prototype;if(u&&u.forEach!==a)try{i(u,"forEach",a)}catch(l){u.forEach=a}}},"17c2":function(t,e,n){"use strict";var r=n("b727").forEach,o=n("a640"),a=n("ae40"),i=o("forEach"),c=a("forEach");t.exports=i&&c?[].forEach:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}},"221d":function(t,e,n){"use strict";n.d(e,"g",(function(){return r})),n.d(e,"k",(function(){return o})),n.d(e,"a",(function(){return a})),n.d(e,"e",(function(){return i})),n.d(e,"h",(function(){return c})),n.d(e,"j",(function(){return s})),n.d(e,"i",(function(){return u})),n.d(e,"d",(function(){return l})),n.d(e,"f",(function(){return f})),n.d(e,"c",(function(){return h})),n.d(e,"b",(function(){return d}));var r="https://gitee.com/api/v5/user",o="/v1/cla",a="/v1/cla",i="https://gitee.com/api/v5/user/orgs",c="/v1/org-repo",s="/v1/unLinkRepository",u="/v1/signCla",l="/v1/getLinkedRepositories",f="/v1/getPersonalRepositories",h="/v1/getCompanyRepositories",d="/v1/getCompanyPersonRepositories"},4160:function(t,e,n){"use strict";var r=n("23e7"),o=n("17c2");r({target:"Array",proto:!0,forced:[].forEach!=o},{forEach:o})},"498a":function(t,e,n){"use strict";var r=n("23e7"),o=n("58a8").trim,a=n("c8d2");r({target:"String",proto:!0,forced:a("trim")},{trim:function(){return o(this)}})},5319:function(t,e,n){"use strict";var r=n("d784"),o=n("825a"),a=n("7b0b"),i=n("50c4"),c=n("a691"),s=n("1d80"),u=n("8aa5"),l=n("14c3"),f=Math.max,h=Math.min,d=Math.floor,p=/\$([$&'`]|\d\d?|<[^>]*>)/g,v=/\$([$&'`]|\d\d?)/g,g=function(t){return void 0===t?t:String(t)};r("replace",2,(function(t,e,n,r){var m=r.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,y=r.REPLACE_KEEPS_$0,x=m?"$":"$0";return[function(n,r){var o=s(this),a=void 0==n?void 0:n[t];return void 0!==a?a.call(n,o,r):e.call(String(o),n,r)},function(t,r){if(!m&&y||"string"===typeof r&&-1===r.indexOf(x)){var a=n(e,t,this,r);if(a.done)return a.value}var s=o(t),d=String(this),p="function"===typeof r;p||(r=String(r));var v=s.global;if(v){var b=s.unicode;s.lastIndex=0}var w=[];while(1){var C=l(s,d);if(null===C)break;if(w.push(C),!v)break;var _=String(C[0]);""===_&&(s.lastIndex=u(d,i(s.lastIndex),b))}for(var L="",S=0,A=0;A<w.length;A++){C=w[A];for(var O=String(C[0]),k=f(h(c(C.index),d.length),0),R=[],T=1;T<C.length;T++)R.push(g(C[T]));var $=C.groups;if(p){var I=[O].concat(R,k,d);void 0!==$&&I.push($);var N=String(r.apply(void 0,I))}else N=E(O,d,k,R,$,r);k>=S&&(L+=d.slice(S,k)+N,S=k+O.length)}return L+d.slice(S)}];function E(t,n,r,o,i,c){var s=r+t.length,u=o.length,l=v;return void 0!==i&&(i=a(i),l=p),e.call(c,l,(function(e,a){var c;switch(a.charAt(0)){case"$":return"$";case"&":return t;case"`":return n.slice(0,r);case"'":return n.slice(s);case"<":c=i[a.slice(1,-1)];break;default:var l=+a;if(0===l)return e;if(l>u){var f=d(l/10);return 0===f?e:f<=u?void 0===o[f-1]?a.charAt(1):o[f-1]+a.charAt(1):e}c=o[l-1]}return void 0===c?"":c}))}}))},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,n){var r=n("1d80"),o=n("5899"),a="["+o+"]",i=RegExp("^"+a+a+"*"),c=RegExp(a+a+"*$"),s=function(t){return function(e){var n=String(r(e));return 1&t&&(n=n.replace(i,"")),2&t&&(n=n.replace(c,"")),n}};t.exports={start:s(1),end:s(2),trim:s(3)}},"5d42":function(t,e,n){},"615a":function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var r=function(){return window.innerHeight}},"63fb":function(t,e,n){"use strict";var r=n("e62f"),o=n.n(r);o.a},6547:function(t,e,n){var r=n("a691"),o=n("1d80"),a=function(t){return function(e,n){var a,i,c=String(o(e)),s=r(n),u=c.length;return s<0||s>=u?t?"":void 0:(a=c.charCodeAt(s),a<55296||a>56319||s+1===u||(i=c.charCodeAt(s+1))<56320||i>57343?t?c.charAt(s):a:t?c.slice(s,s+2):i-56320+(a-55296<<10)+65536)}};t.exports={codeAt:a(!1),charAt:a(!0)}},8418:function(t,e,n){"use strict";var r=n("c04e"),o=n("9bf2"),a=n("5c6c");t.exports=function(t,e,n){var i=r(e);i in t?o.f(t,i,a(0,n)):t[i]=n}},8996:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{style:t.createCLAClass,attrs:{id:"createCLA"}},[n("v-header"),n("div",{attrs:{id:"section"}},[n("el-col",{attrs:{offset:6,span:12}},[n("div",{staticStyle:{display:"flex","justify-content":"space-between",padding:"1rem 0"}},[n("span",[t._v("Edit your CLA")]),n("el-select",{staticStyle:{width:"8rem"},attrs:{size:"small",value:""},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}},t._l(t.languageOptions,(function(t){return n("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1)],1),t._l(t.claOptions,(function(e){return n("el-tag",{key:e,attrs:{closable:"","disable-transitions":!1},on:{close:function(n){return t.handleClose(e.name)}}},[t._v(" "+t._s(e.name)+" ")])})),n("el-input",{staticClass:"textAreaClass",attrs:{rows:"10",type:"textarea"},on:{change:t.claTextChange},model:{value:t.claText,callback:function(e){t.claText=e},expression:"claText"}}),n("p",[t._v("Edit your metaData")]),n("el-input",{staticClass:"textAreaClass",attrs:{rows:"10",type:"textarea"},model:{value:t.metaData,callback:function(e){t.metaData=e},expression:"metaData"}}),n("div",{staticStyle:{"margin-top":"1rem",display:"flex","justify-content":"space-between"}},[n("el-input",{staticStyle:{"margin-right":"2rem"},attrs:{placeholder:"请输入cla名称"},model:{value:t.claName,callback:function(e){t.claName=e},expression:"claName"}}),n("el-button",{directives:[{name:"loading",rawName:"v-loading.fullscreen.lock",value:t.fullscreenLoading,expression:"fullscreenLoading",modifiers:{fullscreen:!0,lock:!0}}],attrs:{disabled:!t.verifyNotNull(),type:"primary"},on:{click:function(e){return t.uploadCla()}}},[t._v("create CLA ")])],1)],2)],1),n("v-footer")],1)},o=[];n("99af"),n("4160"),n("c975"),n("a434"),n("b0c0"),n("ac1f"),n("5319"),n("498a"),n("159b"),n("96cf"),n("d3b7"),n("e6cf");function a(t,e,n,r,o,a,i){try{var c=t[a](i),s=c.value}catch(u){return void n(u)}c.done?e(s):Promise.resolve(s).then(r,o)}function i(t){return function(){var e=this,n=arguments;return new Promise((function(r,o){var i=t.apply(e,n);function c(t){a(i,r,o,c,s,"next",t)}function s(t){a(i,r,o,c,s,"throw",t)}c(void 0)}))}}var c=n("0418"),s=n("fd2d"),u=n("615a"),l=n("221d"),f={name:"CreateCLA",components:{"v-header":c["a"],"v-footer":s["a"]},data:function(){return{claOptions:[],fullscreenLoading:!1,claName:"",value:"0",languageOptions:[{value:"0",label:"english"},{value:"1",label:"chinese"}],claText:"test",metaData:"test",createCLAClass:{height:""},platform:this.$store.state.platform,user:{userName:this.$store.state.user.userName,userId:this.$store.state.user.userId}}},methods:{handleClose:function(t){this.claOptions.splice(this.claOptions.indexOf(t),1)},getCLA:function(){var t=this;console.log("getCLA"),this.$axios({url:"/api"+l["a"],headers:{access_token:this.$store.state.access_token,refresh_token:this.refresh_token}}).then((function(e){console.log(e),e.data.length&&(t.claOptions=[],e.data.forEach((function(e,n){t.claOptions.push({value:n,label:e.name,id:e.id,text:e.text,language:e.language})})))})).catch((function(t){console.log(t)}))},claTextChange:function(t){console.log(t)},verifyNotNull:function(){return this.claText.trim()&&this.claName.trim()},uploadCla:function(){var t=this;return i(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.fullscreenLoading=!0,n={name:t.claName,text:t.claText,language:"EN",submitter:"".concat(t.platform,"/").concat(t.user.userName)},t.$axios({url:"/api"+l["k"],method:"post",data:n}).then((function(e){console.log(e),200===e.status?(t.fullscreenLoading=!1,t.$message.success("succeed"),setTimeout((function(){t.$router.replace("/home")}),2e3)):(t.fullscreenLoading=!1,t.$message.error("failed"))})).catch((function(t){console.log(t)}));case 3:case"end":return e.stop()}}),e)})))()},verifyClaAndMeta:function(){return""!==this.claText&&""!==this.metaData},setClientHeight:function(){var t=this;this.$nextTick((function(){console.log(u["a"]()),console.log(document.getElementById("createCLA").offsetHeight),u["a"]()>document.getElementById("createCLA").offsetHeight?t.createCLAClass.height=u["a"]()+"px":t.createCLAClass.height=document.getElementById("createCLA").offsetHeight}))},copy:function(){console.log(this.claText),this.init()},init:function(){var t=this.claText.replace(/\r\n/g,"<br/>").replace(/\n/g,"<br/>").replace(/\s/g," ");console.log(t),this.metaData=t}},created:function(){this.getCLA()},mounted:function(){this.setClientHeight()}};window.onresize=function(){u["a"]()>document.getElementById("createCLA").offsetHeight&&(document.getElementById("createCLA").style.height=u["a"]()+"px")};var h=f,d=(n("63fb"),n("2877")),p=Object(d["a"])(h,r,o,!1,null,"d54e3fba",null);e["default"]=p.exports},"8aa5":function(t,e,n){"use strict";var r=n("6547").charAt;t.exports=function(t,e,n){return e+(n?r(t,e).length:1)}},9263:function(t,e,n){"use strict";var r=n("ad6d"),o=n("9f7f"),a=RegExp.prototype.exec,i=String.prototype.replace,c=a,s=function(){var t=/a/,e=/b*/g;return a.call(t,"a"),a.call(e,"a"),0!==t.lastIndex||0!==e.lastIndex}(),u=o.UNSUPPORTED_Y||o.BROKEN_CARET,l=void 0!==/()??/.exec("")[1],f=s||l||u;f&&(c=function(t){var e,n,o,c,f=this,h=u&&f.sticky,d=r.call(f),p=f.source,v=0,g=t;return h&&(d=d.replace("y",""),-1===d.indexOf("g")&&(d+="g"),g=String(t).slice(f.lastIndex),f.lastIndex>0&&(!f.multiline||f.multiline&&"\n"!==t[f.lastIndex-1])&&(p="(?: "+p+")",g=" "+g,v++),n=new RegExp("^(?:"+p+")",d)),l&&(n=new RegExp("^"+p+"$(?!\\s)",d)),s&&(e=f.lastIndex),o=a.call(h?n:f,g),h?o?(o.input=o.input.slice(v),o[0]=o[0].slice(v),o.index=f.lastIndex,f.lastIndex+=o[0].length):f.lastIndex=0:s&&o&&(f.lastIndex=f.global?o.index+o[0].length:e),l&&o&&o.length>1&&i.call(o[0],n,(function(){for(c=1;c<arguments.length-2;c++)void 0===arguments[c]&&(o[c]=void 0)})),o}),t.exports=c},"96cf":function(t,e){!function(e){"use strict";var n,r=Object.prototype,o=r.hasOwnProperty,a="function"===typeof Symbol?Symbol:{},i=a.iterator||"@@iterator",c=a.asyncIterator||"@@asyncIterator",s=a.toStringTag||"@@toStringTag",u="object"===typeof t,l=e.regeneratorRuntime;if(l)u&&(t.exports=l);else{l=e.regeneratorRuntime=u?t.exports:{},l.wrap=E;var f="suspendedStart",h="suspendedYield",d="executing",p="completed",v={},g={};g[i]=function(){return this};var m=Object.getPrototypeOf,y=m&&m(m($([])));y&&y!==r&&o.call(y,i)&&(g=y);var x=_.prototype=w.prototype=Object.create(g);C.prototype=x.constructor=_,_.constructor=C,_[s]=C.displayName="GeneratorFunction",l.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===C||"GeneratorFunction"===(e.displayName||e.name))},l.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,_):(t.__proto__=_,s in t||(t[s]="GeneratorFunction")),t.prototype=Object.create(x),t},l.awrap=function(t){return{__await:t}},L(S.prototype),S.prototype[c]=function(){return this},l.AsyncIterator=S,l.async=function(t,e,n,r){var o=new S(E(t,e,n,r));return l.isGeneratorFunction(e)?o:o.next().then((function(t){return t.done?t.value:o.next()}))},L(x),x[s]="Generator",x[i]=function(){return this},x.toString=function(){return"[object Generator]"},l.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){while(e.length){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},l.values=$,T.prototype={constructor:T,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=n,this.done=!1,this.delegate=null,this.method="next",this.arg=n,this.tryEntries.forEach(R),!t)for(var e in this)"t"===e.charAt(0)&&o.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=n)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,o){return c.type="throw",c.arg=t,e.next=r,o&&(e.method="next",e.arg=n),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],c=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var s=o.call(i,"catchLoc"),u=o.call(i,"finallyLoc");if(s&&u){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(s){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&o.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var a=r;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,v):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),R(n),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;R(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:$(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=n),v}}}function E(t,e,n,r){var o=e&&e.prototype instanceof w?e:w,a=Object.create(o.prototype),i=new T(r||[]);return a._invoke=A(t,n,i),a}function b(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(r){return{type:"throw",arg:r}}}function w(){}function C(){}function _(){}function L(t){["next","throw","return"].forEach((function(e){t[e]=function(t){return this._invoke(e,t)}}))}function S(t){function e(n,r,a,i){var c=b(t[n],t,r);if("throw"!==c.type){var s=c.arg,u=s.value;return u&&"object"===typeof u&&o.call(u,"__await")?Promise.resolve(u.__await).then((function(t){e("next",t,a,i)}),(function(t){e("throw",t,a,i)})):Promise.resolve(u).then((function(t){s.value=t,a(s)}),(function(t){return e("throw",t,a,i)}))}i(c.arg)}var n;function r(t,r){function o(){return new Promise((function(n,o){e(t,r,n,o)}))}return n=n?n.then(o,o):o()}this._invoke=r}function A(t,e,n){var r=f;return function(o,a){if(r===d)throw new Error("Generator is already running");if(r===p){if("throw"===o)throw a;return I()}n.method=o,n.arg=a;while(1){var i=n.delegate;if(i){var c=O(i,n);if(c){if(c===v)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===f)throw r=p,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=d;var s=b(t,e,n);if("normal"===s.type){if(r=n.done?p:h,s.arg===v)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(r=p,n.method="throw",n.arg=s.arg)}}}function O(t,e){var r=t.iterator[e.method];if(r===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=n,O(t,e),"throw"===e.method))return v;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var o=b(r,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,v;var a=o.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=n),e.delegate=null,v):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,v)}function k(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function R(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function T(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(k,this),this.reset(!0)}function $(t){if(t){var e=t[i];if(e)return e.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var r=-1,a=function e(){while(++r<t.length)if(o.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=n,e.done=!0,e};return a.next=a}}return{next:I}}function I(){return{value:n,done:!0}}}(function(){return this||"object"===typeof self&&self}()||Function("return this")())},"99af":function(t,e,n){"use strict";var r=n("23e7"),o=n("d039"),a=n("e8b5"),i=n("861d"),c=n("7b0b"),s=n("50c4"),u=n("8418"),l=n("65f0"),f=n("1dde"),h=n("b622"),d=n("2d00"),p=h("isConcatSpreadable"),v=9007199254740991,g="Maximum allowed index exceeded",m=d>=51||!o((function(){var t=[];return t[p]=!1,t.concat()[0]!==t})),y=f("concat"),x=function(t){if(!i(t))return!1;var e=t[p];return void 0!==e?!!e:a(t)},E=!m||!y;r({target:"Array",proto:!0,forced:E},{concat:function(t){var e,n,r,o,a,i=c(this),f=l(i,0),h=0;for(e=-1,r=arguments.length;e<r;e++)if(a=-1===e?i:arguments[e],x(a)){if(o=s(a.length),h+o>v)throw TypeError(g);for(n=0;n<o;n++,h++)n in a&&u(f,h,a[n])}else{if(h>=v)throw TypeError(g);u(f,h++,a)}return f.length=h,f}})},"9f7f":function(t,e,n){"use strict";var r=n("d039");function o(t,e){return RegExp(t,e)}e.UNSUPPORTED_Y=r((function(){var t=o("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),e.BROKEN_CARET=r((function(){var t=o("^r","gy");return t.lastIndex=2,null!=t.exec("str")}))},a434:function(t,e,n){"use strict";var r=n("23e7"),o=n("23cb"),a=n("a691"),i=n("50c4"),c=n("7b0b"),s=n("65f0"),u=n("8418"),l=n("1dde"),f=n("ae40"),h=l("splice"),d=f("splice",{ACCESSORS:!0,0:0,1:2}),p=Math.max,v=Math.min,g=9007199254740991,m="Maximum allowed length exceeded";r({target:"Array",proto:!0,forced:!h||!d},{splice:function(t,e){var n,r,l,f,h,d,y=c(this),x=i(y.length),E=o(t,x),b=arguments.length;if(0===b?n=r=0:1===b?(n=0,r=x-E):(n=b-2,r=v(p(a(e),0),x-E)),x+n-r>g)throw TypeError(m);for(l=s(y,r),f=0;f<r;f++)h=E+f,h in y&&u(l,f,y[h]);if(l.length=r,n<r){for(f=E;f<x-r;f++)h=f+r,d=f+n,h in y?y[d]=y[h]:delete y[d];for(f=x;f>x-r+n;f--)delete y[f-1]}else if(n>r)for(f=x-r;f>E;f--)h=f+r-1,d=f+n-1,h in y?y[d]=y[h]:delete y[d];for(f=0;f<n;f++)y[f+E]=arguments[f+2];return y.length=x-r+n,l}})},a640:function(t,e,n){"use strict";var r=n("d039");t.exports=function(t,e){var n=[][t];return!!n&&r((function(){n.call(null,e||function(){throw 1},1)}))}},a9cc:function(t,e,n){"use strict";var r=n("5d42"),o=n.n(r);o.a},ac1f:function(t,e,n){"use strict";var r=n("23e7"),o=n("9263");r({target:"RegExp",proto:!0,forced:/./.exec!==o},{exec:o})},ad6d:function(t,e,n){"use strict";var r=n("825a");t.exports=function(){var t=r(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},b0c0:function(t,e,n){var r=n("83ab"),o=n("9bf2").f,a=Function.prototype,i=a.toString,c=/^\s*function ([^ (]*)/,s="name";r&&!(s in a)&&o(a,s,{configurable:!0,get:function(){try{return i.call(this).match(c)[1]}catch(t){return""}}})},c8d2:function(t,e,n){var r=n("d039"),o=n("5899"),a="​᠎";t.exports=function(t){return r((function(){return!!o[t]()||a[t]()!=a||o[t].name!==t}))}},c975:function(t,e,n){"use strict";var r=n("23e7"),o=n("4d64").indexOf,a=n("a640"),i=n("ae40"),c=[].indexOf,s=!!c&&1/[1].indexOf(1,-0)<0,u=a("indexOf"),l=i("indexOf",{ACCESSORS:!0,1:0});r({target:"Array",proto:!0,forced:s||!u||!l},{indexOf:function(t){return s?c.apply(this,arguments)||0:o(this,t,arguments.length>1?arguments[1]:void 0)}})},cf23:function(t,e,n){},d784:function(t,e,n){"use strict";n("ac1f");var r=n("6eeb"),o=n("d039"),a=n("b622"),i=n("9263"),c=n("9112"),s=a("species"),u=!o((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),l=function(){return"$0"==="a".replace(/./,"$0")}(),f=a("replace"),h=function(){return!!/./[f]&&""===/./[f]("a","$0")}(),d=!o((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2!==n.length||"a"!==n[0]||"b"!==n[1]}));t.exports=function(t,e,n,f){var p=a(t),v=!o((function(){var e={};return e[p]=function(){return 7},7!=""[t](e)})),g=v&&!o((function(){var e=!1,n=/a/;return"split"===t&&(n={},n.constructor={},n.constructor[s]=function(){return n},n.flags="",n[p]=/./[p]),n.exec=function(){return e=!0,null},n[p](""),!e}));if(!v||!g||"replace"===t&&(!u||!l||h)||"split"===t&&!d){var m=/./[p],y=n(p,""[t],(function(t,e,n,r,o){return e.exec===i?v&&!o?{done:!0,value:m.call(e,n,r)}:{done:!0,value:t.call(n,e,r)}:{done:!1}}),{REPLACE_KEEPS_$0:l,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:h}),x=y[0],E=y[1];r(String.prototype,t,x),r(RegExp.prototype,p,2==e?function(t,e){return E.call(t,this,e)}:function(t){return E.call(t,this)})}f&&c(RegExp.prototype[p],"sham",!0)}},e62f:function(t,e,n){},fd2d:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-row",{staticClass:"footer"},[n("el-col",{staticClass:"left",attrs:{span:8}},[n("span",[t._v("© 2020 HUAWEI SE")])]),n("el-col",{staticClass:"center",attrs:{span:8}},[n("span",[t._v("Made with "),n("svg-icon",{attrs:{"icon-class":"heart"}}),t._v(" from the GitHub team at HUAWEI ")],1)]),n("el-col",{staticClass:"right",attrs:{span:8}},[n("div",[n("span",{staticClass:"pointer"},[t._v("Terms of Service & Privacy Policy")]),n("span",{staticClass:"pointer"},[n("svg-icon",{attrs:{id:"github_logo","icon-class":"github"}}),t._v("Open an issue")],1)])])],1)},o=[],a={name:"Footer"},i=a,c=(n("1460"),n("2877")),s=Object(c["a"])(i,r,o,!1,null,"bc0631b2",null);e["a"]=s.exports}}]);
//# sourceMappingURL=chunk-cefac172.0734fc96.js.map