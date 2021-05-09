/*!
 *  __  __                __                                     __
 * /\ \/\ \              /\ \             __                    /\ \
 * \ \ \_\ \   __  __    \_\ \      __   /\_\      __       ___ \ \ \/'\
 *  \ \  _  \ /\ \/\ \   /'_` \   /'__`\ \/\ \   /'__`\    /'___\\ \ , <
 *   \ \ \ \ \\ \ \_\ \ /\ \L\ \ /\  __/  \ \ \ /\ \L\.\_ /\ \__/ \ \ \\`\
 *    \ \_\ \_\\/`____ \\ \___,_\\ \____\ _\ \ \\ \__/.\_\\ \____\ \ \_\ \_\
 *     \/_/\/_/ `/___/> \\/__,_ / \/____//\ \_\ \\/__/\/_/ \/____/  \/_/\/_/
 *                 /\___/                \ \____/
 *                 \/__/                  \/___/
 *
 * Powered by Hydejack v9.1.3 <https://hydejack.com/>
 */!function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/assets/js/",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);const r=function(){function e(){}return e.prototype.then=function(t,n){const r=new e,o=this.s;if(o){const e=1&o?t:n;if(e){try{i(r,1,e(this.v))}catch(e){i(r,2,e)}return r}return this}return this.o=function(e){try{const o=e.v;1&e.s?i(r,1,t?t(o):o):n?i(r,1,n(o)):i(r,2,o)}catch(e){i(r,2,e)}},r},e}();function i(e,t,n){if(!e.s){if(n instanceof r){if(!n.s)return void(n.o=i.bind(null,e,t));1&t&&(t=n.s),n=n.v}if(n&&n.then)return void n.then(i.bind(null,e,t),i.bind(null,e,2));e.s=t,e.v=n;const o=e.o;o&&o(e)}}var o=0,u="function"==typeof WeakMap?WeakMap:function(){var e="function"==typeof Symbol?Symbol(0):"__weak$"+ ++o;this.set=function(t,n){t[e]=n},this.get=function(t){return t[e]}};function s(e,t){return new Promise((function(n,r){e.onsuccess=function(){var r=e.result;t&&(r=t(r)),n(r)},e.onerror=function(){r(e.error)}}))}function c(e,t){return s(e.openCursor(t),(function(e){return e?[e.key,e.value]:[]}))}function a(e){return new Promise((function(t,n){e.oncomplete=function(){t()},e.onabort=function(){n(e.error)},e.onerror=function(){n(e.error)}}))}function f(e){if(!function(e){if("number"==typeof e||"string"==typeof e)return!0;if("object"==typeof e&&e){if(Array.isArray(e))return!0;if("setUTCFullYear"in e)return!0;if("function"==typeof ArrayBuffer&&ArrayBuffer.isView(e))return!0;if("byteLength"in e&&"length"in e)return!0}return!1}(e))throw Error("kv-storage: The given value is not allowed as a key")}var d={};function l(e,t){return c(e,h(t))}function h(e){return e===d?IDBKeyRange.lowerBound(-1/0):IDBKeyRange.lowerBound(e,!0)}var v=new u,p=new u,y=new u,m=new u,g=function(){};function F(e,t){return t((function(t,n){try{function o(){return p.set(e,s),y.set(e,void 0),{value:f,done:void 0===s}}var u=p.get(e);if(void 0===u)return Promise.resolve({value:void 0,done:!0});var s,a,f,d=function(e,t){var n,o=-1;e:{for(var u=0;u<t.length;u++){var s=t[u][0];if(s){var c=s();if(c&&c.then)break e;if(c===e){o=u;break}}else o=u}if(-1!==o){do{for(var a=t[o][1];!a;)a=t[++o][1];var f=a();if(f&&f.then){n=!0;break e}var d=t[o][2];o++}while(d&&!d());return f}}const l=new r,h=i.bind(null,l,2);return(n?f.then(v):c.then((function n(r){for(;;){if(r===e){o=u;break}if(++u===t.length){if(-1!==o)break;return void i(l,1,a)}if(s=t[u][0]){if((r=s())&&r.then)return void r.then(n).then(void 0,h)}else o=u}do{for(var c=t[o][1];!c;)c=t[++o][1];var a=c();if(a&&a.then)return void a.then(v).then(void 0,h);var f=t[o][2];o++}while(f&&!f());i(l,1,a)}))).then(void 0,h),l;function v(e){for(;;){var n=t[o][2];if(!n||n())break;for(var r=t[++o][1];!r;)r=t[++o][1];if((e=r())&&e.then)return void e.then(v).then(void 0,h)}i(l,1,e)}}(m.get(e),[[function(){return"keys"},function(){return Promise.resolve(function(e,t){return c(e,h(t)).then((function(e){return e[0]}))}(n,u)).then((function(e){f=s=e}))}],[function(){return"values"},function(){return Promise.resolve(l(n,u)).then((function(e){var t;s=(t=e)[0],f=a=t[1]}))}],[function(){return"entries"},function(){return Promise.resolve(l(n,u)).then((function(e){var t;a=(t=e)[1],f=void 0===(s=t[0])?void 0:[s,a]}))}]]);return Promise.resolve(d&&d.then?d.then(o):o())}catch(e){return Promise.reject(e)}}))}function _(e,t){var n=new g;return m.set(n,e),v.set(n,t),p.set(n,d),y.set(n,void 0),n}g.prototype.return=function(){p.set(this,void 0)},g.prototype.next=function(){var e=this,t=v.get(this);if(!t)return Promise.reject(new TypeError("Invalid this value"));var n,r=y.get(this);return n=void 0!==r?r.then((function(){return F(e,t)})):F(this,t),y.set(this,n),n},"function"==typeof Symbol&&Symbol.asyncIterator&&(g.prototype[Symbol.asyncIterator]=function(){return this});var b=function(e,t,n){try{return null===A.get(e)&&function(e){var t=w.get(e);A.set(e,new Promise((function(n,r){var i=self.indexedDB.open(t,1);i.onsuccess=function(){var o=i.result;(function(e,t,n){if(1!==e.objectStoreNames.length)return n(k(t)),!1;if(e.objectStoreNames[0]!==E)return n(k(t)),!1;var r=e.transaction(E,"readonly").objectStore(E);return!(r.autoIncrement||r.keyPath||r.indexNames.length)||(n(k(t)),!1)})(o,t,r)&&(o.onclose=function(){A.set(e,null)},o.onversionchange=function(){o.close(),A.set(e,null)},n(o))},i.onerror=function(){return r(i.error)},i.onupgradeneeded=function(){try{i.result.createObjectStore(E)}catch(e){r(e)}}})))}(e),Promise.resolve(A.get(e)).then((function(e){var r=e.transaction(E,t),i=r.objectStore(E);return n(r,i)}))}catch(e){return Promise.reject(e)}},w=new u,A=new u,E="store",x=function(e){var t="kv-storage:"+e;A.set(this,null),w.set(this,t),this.backingStore={database:t,store:E,version:1}};function k(e){return new Error('kv-storage: database "'+e+'" corrupted')}x.prototype.set=function(e,t){try{return f(e),b(this,"readwrite",(function(n,r){return void 0===t?r.delete(e):r.put(t,e),a(n)}))}catch(e){return Promise.reject(e)}},x.prototype.get=function(e){try{return f(e),b(this,"readonly",(function(t,n){return s(n.get(e))}))}catch(e){return Promise.reject(e)}},x.prototype.delete=function(e){try{return f(e),b(this,"readwrite",(function(t,n){return n.delete(e),a(t)}))}catch(e){return Promise.reject(e)}},x.prototype.clear=function(){try{var e=this;function t(){function t(){return s(self.indexedDB.deleteDatabase(w.get(e)))}var r=function(){if(n){try{n.close()}catch(e){}return Promise.resolve(new Promise(setTimeout)).then((function(){}))}}();return r&&r.then?r.then(t):t()}var n,r=A.get(e),i=function(){if(null!==r){function t(){A.set(e,null)}var i=function(e,t){try{var i=Promise.resolve(r).then((function(e){n=e}))}catch(e){return}return i&&i.then?i.then(void 0,(function(){})):i}();return i&&i.then?i.then(t):t()}}();return i&&i.then?i.then(t):t()}catch(e){return Promise.reject(e)}},x.prototype.keys=function(){var e=this;return _("keys",(function(t){return b(e,"readonly",t)}))},x.prototype.values=function(){var e=this;return _("values",(function(t){return b(e,"readonly",t)}))},x.prototype.entries=function(){var e=this;return _("entries",(function(t){return b(e,"readonly",t)}))},"function"==typeof Symbol&&Symbol.asyncIterator&&(x.prototype[Symbol.asyncIterator]=x.prototype.entries);new x("default");
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var S=function(){return(S=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)};function j(e){var t="function"==typeof Symbol&&Symbol.iterator,n=t&&e[t],r=0;if(n)return n.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function O(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,i,o=n.call(e),u=[];try{for(;(void 0===t||t-- >0)&&!(r=o.next()).done;)u.push(r.value)}catch(e){i={error:e}}finally{try{r&&!r.done&&(n=o.return)&&n.call(o)}finally{if(i)throw i.error}}return u}function D(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(O(arguments[t]));return e}var C,I=function(){function e(e,t){var n=e._tree,r=Object.keys(n);this.set=e,this._type=t,this._path=r.length>0?[{node:n,keys:r}]:[]}return e.prototype.next=function(){var e=this.dive();return this.backtrack(),e},e.prototype.dive=function(){if(0===this._path.length)return{done:!0,value:void 0};var e=z(this._path),t=e.node,n=e.keys;return""===z(n)?{done:!1,value:this.result()}:(this._path.push({node:t[z(n)],keys:Object.keys(t[z(n)])}),this.dive())},e.prototype.backtrack=function(){0!==this._path.length&&(z(this._path).keys.pop(),z(this._path).keys.length>0||(this._path.pop(),this.backtrack()))},e.prototype.key=function(){return this.set._prefix+this._path.map((function(e){var t=e.keys;return z(t)})).filter((function(e){return""!==e})).join("")},e.prototype.value=function(){return z(this._path).node[""]},e.prototype.result=function(){return"VALUES"===this._type?this.value():"KEYS"===this._type?this.key():[this.key(),this.value()]},e.prototype[Symbol.iterator]=function(){return this},e}(),z=function(e){return e[e.length-1]},P=function(e,t,n,r,i,o){o.push({distance:0,ia:r,ib:0,edit:i});for(var u=[];o.length>0;){var s=o.pop(),c=s.distance,a=s.ia,f=s.ib,d=s.edit;if(f!==t.length)if(e[a]===t[f])o.push({distance:c,ia:a+1,ib:f+1,edit:0});else{if(c>=n)continue;2!==d&&o.push({distance:c+1,ia:a,ib:f+1,edit:3}),a<e.length&&(3!==d&&o.push({distance:c+1,ia:a+1,ib:f,edit:2}),3!==d&&2!==d&&o.push({distance:c+1,ia:a+1,ib:f+1,edit:1}))}else u.push({distance:c,i:a,edit:d})}return u},B=function(){function e(e,t){void 0===e&&(e={}),void 0===t&&(t=""),this._tree=e,this._prefix=t}return e.prototype.atPrefix=function(t){var n;if(!t.startsWith(this._prefix))throw new Error("Mismatched prefix");var r=O(L(this._tree,t.slice(this._prefix.length)),2),i=r[0],o=r[1];if(void 0===i){var u=O(K(o),2),s=u[0],c=u[1],a=Object.keys(s).find((function(e){return""!==e&&e.startsWith(c)}));if(void 0!==a)return new e(((n={})[a.slice(c.length)]=s[a],n),t)}return new e(i||{},t)},e.prototype.clear=function(){delete this._size,this._tree={}},e.prototype.delete=function(e){return delete this._size,N(this._tree,e)},e.prototype.entries=function(){return new I(this,"ENTRIES")},e.prototype.forEach=function(e){var t,n;try{for(var r=j(this),i=r.next();!i.done;i=r.next()){var o=O(i.value,2);e(o[0],o[1],this)}}catch(e){t={error:e}}finally{try{i&&!i.done&&(n=r.return)&&n.call(r)}finally{if(t)throw t.error}}},e.prototype.fuzzyGet=function(e,t){return function(e,t,n){for(var r=[{distance:0,i:0,key:"",node:e}],i={},o=[],u=function(){var e=r.pop(),u=e.node,s=e.distance,c=e.key,a=e.i,f=e.edit;Object.keys(u).forEach((function(e){if(""===e){var d=s+(t.length-a),l=O(i[c]||[null,1/0],2)[1];d<=n&&d<l&&(i[c]=[u[e],d])}else P(t,e,n-s,a,f,o).forEach((function(t){var n=t.distance,i=t.i,o=t.edit;r.push({node:u[e],distance:s+n,key:c+e,i:i,edit:o})}))}))};r.length>0;)u();return i}(this._tree,e,t)},e.prototype.get=function(e){var t=T(this._tree,e);return void 0!==t?t[""]:void 0},e.prototype.has=function(e){var t=T(this._tree,e);return void 0!==t&&t.hasOwnProperty("")},e.prototype.keys=function(){return new I(this,"KEYS")},e.prototype.set=function(e,t){if("string"!=typeof e)throw new Error("key must be a string");return delete this._size,M(this._tree,e)[""]=t,this},Object.defineProperty(e.prototype,"size",{get:function(){var e=this;return this._size||(this._size=0,this.forEach((function(){e._size+=1}))),this._size},enumerable:!1,configurable:!0}),e.prototype.update=function(e,t){if("string"!=typeof e)throw new Error("key must be a string");delete this._size;var n=M(this._tree,e);return n[""]=t(n[""]),this},e.prototype.values=function(){return new I(this,"VALUES")},e.prototype[Symbol.iterator]=function(){return this.entries()},e.from=function(t){var n,r,i=new e;try{for(var o=j(t),u=o.next();!u.done;u=o.next()){var s=O(u.value,2),c=s[0],a=s[1];i.set(c,a)}}catch(e){n={error:e}}finally{try{u&&!u.done&&(r=o.return)&&r.call(o)}finally{if(n)throw n.error}}return i},e.fromObject=function(t){return e.from(Object.entries(t))},e}(),L=function e(t,n,r){if(void 0===r&&(r=[]),0===n.length||null==t)return[t,r];var i=Object.keys(t).find((function(e){return""!==e&&n.startsWith(e)}));return void 0===i?(r.push([t,n]),e(void 0,"",r)):(r.push([t,i]),e(t[i],n.slice(i.length),r))},T=function e(t,n){if(0===n.length||null==t)return t;var r=Object.keys(t).find((function(e){return""!==e&&n.startsWith(e)}));return void 0!==r?e(t[r],n.slice(r.length)):void 0},M=function e(t,n){var r;if(0===n.length||null==t)return t;var i=Object.keys(t).find((function(e){return""!==e&&n.startsWith(e)}));if(void 0===i){var o=Object.keys(t).find((function(e){return""!==e&&e.startsWith(n[0])}));if(void 0!==o){var u=R(n,o);return t[u]=((r={})[o.slice(u.length)]=t[o],r),delete t[o],e(t[u],n.slice(u.length))}return t[n]={},t[n]}return e(t[i],n.slice(i.length))},R=function e(t,n,r,i,o){return void 0===r&&(r=0),void 0===i&&(i=Math.min(t.length,n.length)),void 0===o&&(o=""),r>=i||t[r]!==n[r]?o:e(t,n,r+1,i,o+t[r])},N=function(e,t){var n=O(L(e,t),2),r=n[0],i=n[1];if(void 0!==r){delete r[""];var o=Object.keys(r);0===o.length&&W(i),1===o.length&&J(i,o[0],r[o[0]])}},W=function e(t){if(0!==t.length){var n=O(K(t),2),r=n[0];delete r[n[1]],0===Object.keys(r).length&&e(t.slice(0,-1))}},J=function(e,t,n){if(0!==e.length){var r=O(K(e),2),i=r[0],o=r[1];i[o+t]=n,delete i[o]}},K=function(e){return e[e.length-1]},Y=function(){function e(e){if(null==(null==e?void 0:e.fields))throw new Error('MiniSearch: option "fields" must be provided');this._options=S(S(S({},$),e),{searchOptions:S(S({},q),e.searchOptions||{})}),this._index=new B,this._documentCount=0,this._documentIds={},this._fieldIds={},this._fieldLength={},this._averageFieldLength={},this._nextId=0,this._storedFields={},this.addFields(this._options.fields)}return e.prototype.add=function(e){var t=this,n=this._options,r=n.extractField,i=n.tokenize,o=n.processTerm,u=n.fields,s=n.idField,c=r(e,s);if(null==c)throw new Error('MiniSearch: document does not have ID field "'+s+'"');var a=this.addDocumentId(c);this.saveStoredFields(a,e),u.forEach((function(n){var u=r(e,n);if(null!=u){var s=i(u.toString(),n);t.addFieldLength(a,t._fieldIds[n],t.documentCount-1,s.length),s.forEach((function(e){var r=o(e,n);r&&t.addTerm(t._fieldIds[n],a,r)}))}}))},e.prototype.addAll=function(e){var t=this;e.forEach((function(e){return t.add(e)}))},e.prototype.addAllAsync=function(e,t){var n=this;void 0===t&&(t={});var r=t.chunkSize,i=void 0===r?10:r,o={chunk:[],promise:Promise.resolve()},u=e.reduce((function(e,t,r){var o=e.chunk,u=e.promise;return o.push(t),(r+1)%i==0?{chunk:[],promise:u.then((function(){return new Promise((function(e){return setTimeout(e,0)}))})).then((function(){return n.addAll(o)}))}:{chunk:o,promise:u}}),o),s=u.chunk;return u.promise.then((function(){return n.addAll(s)}))},e.prototype.remove=function(e){var t=this,n=this._options,r=n.tokenize,i=n.processTerm,o=n.extractField,u=n.fields,s=n.idField,c=o(e,s);if(null==c)throw new Error('MiniSearch: document does not have ID field "'+s+'"');var a=O(Object.entries(this._documentIds).find((function(e){var t=O(e,2),n=(t[0],t[1]);return c===n}))||[],1)[0];if(null==a)throw new Error("MiniSearch: cannot remove document with ID "+c+": it is not in the index");u.forEach((function(n){var u=o(e,n);null!=u&&r(u.toString(),n).forEach((function(e){var r=i(e,n);r&&t.removeTerm(t._fieldIds[n],a,r)}))})),delete this._storedFields[a],delete this._documentIds[a],this._documentCount-=1},e.prototype.removeAll=function(e){var t=this;if(e)e.forEach((function(e){return t.remove(e)}));else{if(arguments.length>0)throw new Error("Expected documents to be present. Omit the argument to remove all documents.");this._index=new B,this._documentCount=0,this._documentIds={},this._fieldLength={},this._averageFieldLength={},this._storedFields={},this._nextId=0}},e.prototype.search=function(e,t){var n=this;void 0===t&&(t={});var r=this._options,i=r.tokenize,o=r.processTerm,u=r.searchOptions,s=S(S({tokenize:i,processTerm:o},u),t),c=s.tokenize,a=s.processTerm,f=c(e).map((function(e){return a(e)})).filter((function(e){return!!e})).map(Q(s)).map((function(e){return n.executeQuery(e,s)})),d=this.combineResults(f,s.combineWith);return Object.entries(d).reduce((function(e,t){var r=O(t,2),i=r[0],o=r[1],u=o.score,c=o.match,a=o.terms,f={id:n._documentIds[i],terms:X(a),score:u,match:c};return Object.assign(f,n._storedFields[i]),(null==s.filter||s.filter(f))&&e.push(f),e}),[]).sort((function(e,t){return e.score<t.score?1:-1}))},e.prototype.autoSuggest=function(e,t){void 0===t&&(t={}),t=S(S({},H),t);var n=this.search(e,t).reduce((function(e,t){var n=t.score,r=t.terms,i=r.join(" ");return null==e[i]?e[i]={score:n,terms:r,count:1}:(e[i].score+=n,e[i].count+=1),e}),{});return Object.entries(n).map((function(e){var t=O(e,2),n=t[0],r=t[1],i=r.score;return{suggestion:n,terms:r.terms,score:i/r.count}})).sort((function(e,t){return e.score<t.score?1:-1}))},Object.defineProperty(e.prototype,"documentCount",{get:function(){return this._documentCount},enumerable:!1,configurable:!0}),e.loadJSON=function(t,n){if(null==n)throw new Error("MiniSearch: loadJSON should be given the same options used when serializing the index");return e.loadJS(JSON.parse(t),n)},e.getDefault=function(e){if($.hasOwnProperty(e))return U($,e);throw new Error('MiniSearch: unknown option "'+e+'"')},e.loadJS=function(t,n){var r=t.index,i=t.documentCount,o=t.nextId,u=t.documentIds,s=t.fieldIds,c=t.fieldLength,a=t.averageFieldLength,f=t.storedFields,d=new e(n);return d._index=new B(r._tree,r._prefix),d._documentCount=i,d._nextId=o,d._documentIds=u,d._fieldIds=s,d._fieldLength=c,d._averageFieldLength=a,d._fieldIds=s,d._storedFields=f||{},d},e.prototype.executeQuery=function(e,t){var n=this,r=S(S({},this._options.searchOptions),t),i=(r.fields||this._options.fields).reduce((function(e,t){var n;return S(S({},e),((n={})[t]=U(e,t)||1,n))}),r.boost||{}),o=r.boostDocument,u=r.weights,s=S(S({},q.weights),u),c=s.fuzzy,a=s.prefix,f=this.termResults(e.term,i,o,this._index.get(e.term));if(!e.fuzzy&&!e.prefix)return f;var d=[f];if(e.prefix&&this._index.atPrefix(e.term).forEach((function(t,r){var u=.3*(t.length-e.term.length)/t.length;d.push(n.termResults(t,i,o,r,a,u))})),e.fuzzy){var l=!0===e.fuzzy?.2:e.fuzzy,h=l<1?Math.round(e.term.length*l):l;Object.entries(this._index.fuzzyGet(e.term,h)).forEach((function(e){var t=O(e,2),r=t[0],u=O(t[1],2),s=u[0],a=u[1]/r.length;d.push(n.termResults(r,i,o,s,c,a))}))}return d.reduce(G.or,{})},e.prototype.combineResults=function(e,t){if(void 0===t&&(t="or"),0===e.length)return{};var n=t.toLowerCase();return e.reduce(G[n],null)||{}},e.prototype.toJSON=function(){return{index:this._index,documentCount:this._documentCount,nextId:this._nextId,documentIds:this._documentIds,fieldIds:this._fieldIds,fieldLength:this._fieldLength,averageFieldLength:this._averageFieldLength,storedFields:this._storedFields}},e.prototype.termResults=function(e,t,n,r,i,o){var u=this;return void 0===o&&(o=0),null==r?{}:Object.entries(t).reduce((function(t,i){var s=O(i,2),c=s[0],a=s[1],f=u._fieldIds[c],d=r[f]||{ds:{}},l=d.df,h=d.ds;return Object.entries(h).forEach((function(r){var i=O(r,2),s=i[0],d=i[1],h=n?n(u._documentIds[s],e):1;if(h){var v=u._fieldLength[s][f]/u._averageFieldLength[f];t[s]=t[s]||{score:0,match:{},terms:[]},t[s].terms.push(e),t[s].match[e]=U(t[s].match,e)||[],t[s].score+=h*V(d,l,u._documentCount,v,a,o),t[s].match[e].push(c)}})),t}),{})},e.prototype.addTerm=function(e,t,n){this._index.update(n,(function(n){var r,i=(n=n||{})[e]||{df:0,ds:{}};return null==i.ds[t]&&(i.df+=1),i.ds[t]=(i.ds[t]||0)+1,S(S({},n),((r={})[e]=i,r))}))},e.prototype.removeTerm=function(e,t,n){var r=this;this._index.has(n)?(this._index.update(n,(function(i){var o,u=i[e];if(null==u||null==u.ds[t])return r.warnDocumentChanged(t,e,n),i;if(u.ds[t]<=1){if(u.df<=1)return delete i[e],i;u.df-=1}return u.ds[t]<=1?(delete u.ds[t],i):(u.ds[t]-=1,S(S({},i),((o={})[e]=u,o)))})),0===Object.keys(this._index.get(n)).length&&this._index.delete(n)):this.warnDocumentChanged(t,e,n)},e.prototype.warnDocumentChanged=function(e,t,n){if(null!=console&&null!=console.warn){var r=Object.entries(this._fieldIds).find((function(e){var n=O(e,2);n[0];return n[1]===t}))[0];console.warn("MiniSearch: document with ID "+this._documentIds[e]+' has changed before removal: term "'+n+'" was not present in field "'+r+'". Removing a document after it has changed can corrupt the index!')}},e.prototype.addDocumentId=function(e){var t=this._nextId.toString(36);return this._documentIds[t]=e,this._documentCount+=1,this._nextId+=1,t},e.prototype.addFields=function(e){var t=this;e.forEach((function(e,n){t._fieldIds[e]=n}))},e.prototype.addFieldLength=function(e,t,n,r){this._averageFieldLength[t]=this._averageFieldLength[t]||0;var i=this._averageFieldLength[t]*n+r;this._fieldLength[e]=this._fieldLength[e]||{},this._fieldLength[e][t]=r,this._averageFieldLength[t]=i/(n+1)},e.prototype.saveStoredFields=function(e,t){var n=this,r=this._options,i=r.storeFields,o=r.extractField;null!=i&&0!==i.length&&(this._storedFields[e]=this._storedFields[e]||{},i.forEach((function(r){var i=o(t,r);void 0!==i&&(n._storedFields[e][r]=i)})))},e}(),U=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)?e[t]:void 0},G=((C={}).or=function(e,t){return Object.entries(t).reduce((function(e,t){var n,r=O(t,2),i=r[0],o=r[1],u=o.score,s=o.match,c=o.terms;return null==e[i]?e[i]={score:u,match:s,terms:c}:(e[i].score+=u,e[i].score*=1.5,(n=e[i].terms).push.apply(n,D(c)),Object.assign(e[i].match,s)),e}),e||{})},C.and=function(e,t){return null==e?t:Object.entries(t).reduce((function(t,n){var r=O(n,2),i=r[0],o=r[1],u=o.score,s=o.match,c=o.terms;return void 0===e[i]||(t[i]=t[i]||{},t[i].score=e[i].score+u,t[i].match=S(S({},e[i].match),s),t[i].terms=D(e[i].terms,c)),t}),{})},C),V=function(e,t,n,r,i,o){return i/(1+.333*i*o)*function(e,t,n){return e*Math.log(n/t)}(e,t,n)/r},Q=function(e){return function(t,n,r){return{term:t,fuzzy:"function"==typeof e.fuzzy?e.fuzzy(t,n,r):e.fuzzy||!1,prefix:"function"==typeof e.prefix?e.prefix(t,n,r):!0===e.prefix}}},X=function(e){return e.filter((function(e,t,n){return n.indexOf(e)===t}))},$={idField:"id",extractField:function(e,t){return e[t]},tokenize:function(e,t){return e.split(Z)},processTerm:function(e,t){return e.toLowerCase()},fields:void 0,searchOptions:void 0,storeFields:[]},q={combineWith:"or",prefix:!1,fuzzy:!1,boost:{},weights:{fuzzy:.9,prefix:.75}},H={prefix:function(e,t,n){return t===n.length-1}},Z=/[\n\r -#%-\*,-\/:;\?@\[-\]_\{\}\xA0\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u1680\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2000-\u200A\u2010-\u2029\u202F-\u2043\u2045-\u2051\u2053-\u205F\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u3000-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]+/,ee=Y;function te(e,t,n,r,i,o,u){try{var s=e[o](u),c=s.value}catch(e){return void n(e)}s.done?t(c):Promise.resolve(c).then(r,i)}function ne(e){return function(){var t=this,n=arguments;return new Promise((function(r,i){var o=e.apply(t,n);function u(e){te(o,r,i,u,s,"next",e)}function s(e){te(o,r,i,u,s,"throw",e)}u(void 0)}))}}var re=(e,t)=>[...new Map(e.map(e=>[e[t],e])).values()];function ie(){return(ie=ne((function*(e){var{pages:t=[],documents:n=[]}=yield fetch(e).then(e=>e.json()),r=[...t,...n.map(e=>(e.date&&(e.date=new Date(e.date)),e))];return re(r,"url")}))).apply(this,arguments)}var oe,ue,se={idField:"url",fields:["title","content","description","categories","tags","keywords"],storeFields:["url","title","description","image"],extractField:(e,t)=>{var n=e[t];return Array.isArray(n)?n.join(" "):n}},ce={boost:{title:5,description:2,categories:2,tags:2,keywords:2},prefix:!0,fuzzy:.25,combineWith:"AND"},ae=e=>{ue=e};function fe(e){var{data:t,ports:[n]}=e,r=oe.search(t,ce);n.postMessage(r.slice(0,20))}ne((function*(){var e,t,{data:{DATA_URL:n,STORAGE_KEY:r,INDEX_KEY:i}}=yield(e=self,t="message",new Promise(n=>e.addEventListener(t,n,{once:!0}))),o=new x(r),u=yield o.get(i);u?(oe=ee.loadJS(u,se),self.addEventListener("message",fe)):(self.addEventListener("message",ae),(oe=new ee(se)).addAll(yield function(e){return ie.apply(this,arguments)}(n)),ue&&fe(ue),self.removeEventListener("message",ae),self.addEventListener("message",fe),ne((function*(){var e,t=[],n=!0,r=!1;try{for(var u,s,c=function(e){var t;if("undefined"!=typeof Symbol){if(Symbol.asyncIterator&&null!=(t=e[Symbol.asyncIterator]))return t.call(e);if(Symbol.iterator&&null!=(t=e[Symbol.iterator]))return t.call(e)}throw new TypeError("Object is not async iterable")}(o.keys());n=(u=yield c.next()).done,s=yield u.value,!n;n=!0){var a=s;a!==i&&t.push(a)}}catch(t){r=!0,e=t}finally{try{n||null==c.return||(yield c.return())}finally{if(r)throw e}}yield Promise.all(t.map(e=>o.delete(e))),yield o.set(i,oe.toJSON())}))())}))()}]);