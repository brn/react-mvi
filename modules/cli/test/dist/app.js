!function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/dist/",t(t.s=4)}([function(e,t){e.exports=vendor_library},function(e,t,n){e.exports=n(0)(155)},function(e,t,n){e.exports=n(0)(566)},function(e,t,n){e.exports=n(0)(31)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(3),r=n(5),u=n(1),i=n(6),p=n(7),c=n(8);r.render(o.createElement(u.Provider,{intent:p.AppIntent,store:c.AppStore},o.createElement(i.AppComponent,null)),document.querySelector(".app"))},function(e,t,n){e.exports=n(0)(198)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(2),r=n(3),u=n(1);t.AppComponent=u.connect({mapIntentToProps:function(e){return{onMount:e.callback("app::mounted")}}})(function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return o.__extends(t,e),t.prototype.render=function(){return r.createElement("div",null,"Hello World!")},t.prototype.componentDidMount=function(){this.props.onMount()},t}(r.Component))},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(2),r=n(1),u=function(){function e(){}return Object.defineProperty(e.prototype,"onMounted",{get:function(){return this.intent.for("app::mounted").share()},enumerable:!0,configurable:!0}),e=o.__decorate([r.intent],e)}();t.AppIntent=u},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(2),r=n(1),u=function(){function e(){}return e.prototype.initialize=function(){return{view:{greeting:this.intent.onMounted.mapTo("Hello World!").startWith("")}}},e=o.__decorate([r.store],e)}();t.AppStore=u}]);