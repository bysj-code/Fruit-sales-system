(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/shuiguo/detail"],{"025a":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var u=a(n("a34a"));function a(t){return t&&t.__esModule?t:{default:t}}function r(t,e,n,u,a,r,i){try{var o=t[r](i),s=o.value}catch(c){return void n(c)}o.done?e(s):Promise.resolve(s).then(u,a)}function i(t){return function(){var e=this,n=arguments;return new Promise((function(u,a){var i=t.apply(e,n);function o(t){r(i,u,a,o,s,"next",t)}function s(t){r(i,u,a,o,s,"throw",t)}o(void 0)}))}}var o={data:function(){return{autoplaySwiper:!1,intervalSwiper:5e3,btnColor:["#409eff","#67c23a","#909399","#e6a23c","#f56c6c","#356c6c","#351c6c","#f093a9","#a7c23a","#104eff","#10441f","#a21233","#503319"],id:"",detail:{},swiperList:[],commentList:[],mescroll:null,downOption:{auto:!1},upOption:{noMoreSize:3,textNoMore:"~ 没有更多了 ~"},hasNext:!0,user:{},collectionFlag:0}},computed:{baseUrl:function(){return this.$base.url}},onLoad:function(t){var e=this;return i(u.default.mark((function n(){return u.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:e.id=t.id;case 1:case"end":return n.stop()}}),n)})))()},onShow:function(e){var n=this;return i(u.default.mark((function e(){var a,r,i;return u.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n.init(),a=t.getStorageSync("nowTable"),e.next=4,n.$api.session(a);case 4:r=e.sent,n.user=r.data,n.btnColor=n.btnColor.sort((function(){return.5-Math.random()})),i=t.getStorageSync("pingluenStateState"),i&&(t.removeStorageSync("pingluenStateState"),n.mescroll.num=1,n.upCallback(n.mescroll));case 9:case"end":return e.stop()}}),e)})))()},destroyed:function(){},methods:{download:function(e){var n=this;t.downloadFile({url:e,success:function(t){200===t.statusCode&&(n.$utils.msg("下载成功"),window.open(e))}})},init:function(){var t=this;return i(u.default.mark((function e(){var n;return u.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$api.info("shuiguo",t.id);case 2:n=e.sent,t.detail=n.data,t.swiperList=t.detail.shuiguoPhoto?t.detail.shuiguoPhoto.split(","):[];case 5:case"end":return e.stop()}}),e)})))()},onCartTap:function(){var t=this;return i(u.default.mark((function e(){var n;return u.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$api.page("cart",{page:1,limit:9999,shuiguoId:t.id});case 2:if(n=e.sent,!(n.data.list.length>0)){e.next=6;break}return t.$utils.msg("商品已添加到购物车"),e.abrupt("return");case 6:return e.next=8,t.$api.save("cart",{shuiguoId:t.detail.id,buyNumber:1,yonghuId:t.user.id});case 8:t.$utils.msg("添加到购物车成功");case 9:case"end":return e.stop()}}),e)})))()},onSubmit:function(){t.setStorageSync("orderGoods",[{shuiguoId:this.detail.id,shuiguoName:this.detail.shuiguoName,shuiguoPhoto:this.swiperList[0],buyNumber:1,shuiguoNewMoney:this.detail.shuiguoNewMoney}]),this.$utils.jump("../shuiguoOrder/confirm")},mescrollInit:function(t){this.mescroll=t},downCallback:function(t){this.hasNext=!0,t.resetUpScroll()},upCallback:function(t){var e=this;return i(u.default.mark((function n(){var a;return u.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,e.$api.list("shuiguoCommentback",{page:t.num,limit:t.size,shuiguoId:e.id});case 2:a=n.sent,1==t.num&&(e.commentList=[]),e.commentList=e.commentList.concat(a.data.list),0==a.data.list.length&&(e.hasNext=!1),t.endSuccess(t.size,e.hasNext);case 7:case"end":return n.stop()}}),n)})))()},onCommentTap:function(){var t=this;return i(u.default.mark((function e(){return u.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.$utils.jump("../shuiguoCommentback/add-or-update?shuiguoId=".concat(t.id));case 1:case"end":return e.stop()}}),e)})))()}}};e.default=o}).call(this,n("543d")["default"])},"2ce9":function(t,e,n){},"2dde":function(t,e,n){"use strict";n.r(e);var u=n("025a"),a=n.n(u);for(var r in u)"default"!==r&&function(t){n.d(e,t,(function(){return u[t]}))}(r);e["default"]=a.a},"50bb":function(t,e,n){"use strict";(function(t){n("48e8");u(n("66fd"));var e=u(n("75f4"));function u(t){return t&&t.__esModule?t:{default:t}}wx.__webpack_require_UNI_MP_PLUGIN__=n,t(e.default)}).call(this,n("543d")["createPage"])},"75f4":function(t,e,n){"use strict";n.r(e);var u=n("fa2c"),a=n("2dde");for(var r in a)"default"!==r&&function(t){n.d(e,t,(function(){return a[t]}))}(r);n("ac82");var i,o=n("f0c5"),s=Object(o["a"])(a["default"],u["b"],u["c"],!1,null,null,null,!1,u["a"],i);e["default"]=s.exports},ac82:function(t,e,n){"use strict";var u=n("2ce9"),a=n.n(u);a.a},fa2c:function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return u}));var u={mescrollUni:function(){return Promise.all([n.e("common/vendor"),n.e("components/mescroll-uni/mescroll-uni")]).then(n.bind(null,"aa08"))}},a=function(){var t=this,e=t.$createElement;t._self._c},r=[]}},[["50bb","common/runtime","common/vendor"]]]);