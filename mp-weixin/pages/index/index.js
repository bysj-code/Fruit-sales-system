(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/index"],{"074a":function(t,n,e){"use strict";e.r(n);var r=e("bf0d"),i=e.n(r);for(var o in r)"default"!==o&&function(t){e.d(n,t,(function(){return r[t]}))}(o);n["default"]=i.a},"0c97":function(t,n,e){"use strict";e.r(n);var r=e("934b"),i=e("074a");for(var o in i)"default"!==o&&function(t){e.d(n,t,(function(){return i[t]}))}(o);e("87f3");var u,a=e("f0c5"),c=Object(a["a"])(i["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],u);n["default"]=c.exports},"87f3":function(t,n,e){"use strict";var r=e("caab"),i=e.n(r);i.a},"934b":function(t,n,e){"use strict";var r;e.d(n,"b",(function(){return i})),e.d(n,"c",(function(){return o})),e.d(n,"a",(function(){return r}));var i=function(){var t=this,n=t.$createElement,e=(t._self._c,t.__map(t.newsList,(function(n,e){var r=t.__get_orig(n),i=n.newsPhoto?n.newsPhoto.split(","):null;return{$orig:r,g0:i}}))),r=t.__map(t.shuiguoList,(function(n,e){var r=t.__get_orig(n),i=n.shuiguoPhoto?n.shuiguoPhoto.split(","):null;return{$orig:r,g1:i}}));t.$mp.data=Object.assign({},{$root:{l0:e,l1:r}})},o=[]},bf0d:function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=i(e("a34a"));function i(t){return t&&t.__esModule?t:{default:t}}function o(t,n){var e;if("undefined"===typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(e=u(t))||n&&t&&"number"===typeof t.length){e&&(t=e);var r=0,i=function(){};return{s:i,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,a=!0,c=!1;return{s:function(){e=t[Symbol.iterator]()},n:function(){var t=e.next();return a=t.done,t},e:function(t){c=!0,o=t},f:function(){try{a||null==e.return||e.return()}finally{if(c)throw o}}}}function u(t,n){if(t){if("string"===typeof t)return a(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?a(t,n):void 0}}function a(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,r=new Array(n);e<n;e++)r[e]=t[e];return r}function c(t,n,e,r,i,o,u){try{var a=t[o](u),c=a.value}catch(l){return void e(l)}a.done?n(c):Promise.resolve(c).then(r,i)}function l(t){return function(){var n=this,e=arguments;return new Promise((function(r,i){var o=t.apply(n,e);function u(t){c(o,r,i,u,a,"next",t)}function a(t){c(o,r,i,u,a,"throw",t)}u(void 0)}))}}e("c5e9");var s=function(){Promise.all([e.e("common/vendor"),e.e("components/uni-ui/lib/uni-icons/uni-icons")]).then(function(){return resolve(e("8a4b"))}.bind(null,e)).catch(e.oe)},f={components:{uniIcons:s},data:function(){return{autoplaySwiper:!1,intervalSwiper:5e3,swiperList:[],newsList:[],shuiguoList:[]}},computed:{baseUrl:function(){return this.$base.url}},onShow:function(){var t=this;return l(r.default.mark((function n(){var e,i,u,a,c,l,s;return r.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return e=[],n.next=3,t.$api.page("config",{page:1,limit:5});case 3:i=n.sent,u=o(i.data.list);try{for(u.s();!(a=u.n()).done;)c=a.value,c.value&&""!=c.value&&null!=c.value&&e.push({img:c.value})}catch(r){u.e(r)}finally{u.f()}return e&&(t.swiperList=e),n.next=9,t.$api.list("news",{page:1,limit:6});case 9:return l=n.sent,t.newsList=l.data.list,n.next=13,t.$api.list("shuiguo",{page:1,limit:6,shangxiaTypes:1,shuiguoDelete:1});case 13:s=n.sent,t.shuiguoList=s.data.list;case 15:case"end":return n.stop()}}),n)})))()},methods:{onSwiperTap:function(t){},onNewsDetailTap:function(t){this.$utils.jump("../news/detail?id=".concat(t))},onDetailTap:function(t,n){this.$utils.jump("../".concat(t,"/detail?id=").concat(n))},onPageTap:function(n){t.navigateTo({url:"../".concat(n,"/list"),fail:function(){t.switchTab({url:"../".concat(n,"/list")})}})}}};n.default=f}).call(this,e("543d")["default"])},caab:function(t,n,e){},e0d4:function(t,n,e){"use strict";(function(t){e("48e8");r(e("66fd"));var n=r(e("0c97"));function r(t){return t&&t.__esModule?t:{default:t}}wx.__webpack_require_UNI_MP_PLUGIN__=e,t(n.default)}).call(this,e("543d")["createPage"])}},[["e0d4","common/runtime","common/vendor"]]]);