"use strict";(self["webpackChunkvue_shopping"]=self["webpackChunkvue_shopping"]||[]).push([[248],{7248:function(t,e,a){a.r(e),a.d(e,{default:function(){return f}});var s=function(){var t=this,e=t._self._c;return e("div",{staticClass:"order"},[e("van-nav-bar",{attrs:{title:"我的订单","left-arrow":""},on:{"click-left":function(e){return t.$router.go(-1)}}}),e("van-tabs",{attrs:{sticky:""},model:{value:t.active,callback:function(e){t.active=e},expression:"active"}},[e("van-tab",{attrs:{name:"all",title:"全部"}}),e("van-tab",{attrs:{name:"payment",title:"待支付"}}),e("van-tab",{attrs:{name:"delivery",title:"待发货"}}),e("van-tab",{attrs:{name:"received",title:"待收货"}}),e("van-tab",{attrs:{name:"comment",title:"待评价"}})],1),t._l(t.list,(function(t){return e("OrderListItem",{key:t.order_id,attrs:{item:t}})}))],2)},i=[],r=function(){var t=this,e=t._self._c;return t.item.order_id?e("div",{staticClass:"order-list-item"},[e("div",{staticClass:"tit"},[e("div",{staticClass:"time"},[t._v(t._s(t.item.create_time))]),e("div",{staticClass:"status"},[e("span",[t._v(t._s(t.item.state_text))])])]),e("div",{staticClass:"list"},t._l(t.item.goods,(function(a,s){return e("div",{key:s,staticClass:"list-item"},[e("div",{staticClass:"goods-img"},[e("img",{attrs:{src:a.goods_image,alt:""}})]),e("div",{staticClass:"goods-content text-ellipsis-2"},[t._v(" "+t._s(a.goods_name)+" ")]),e("div",{staticClass:"goods-trade"},[e("p",[t._v("¥ "+t._s(a.total_pay_price))]),e("p",[t._v("x "+t._s(a.total_num))])])])})),0),e("div",{staticClass:"total"},[t._v(" 共 "+t._s(t.item.total_num)+" 件商品，总金额 ¥"+t._s(t.item.total_price)+" ")]),e("div",{staticClass:"actions"},[10===t.item.order_status?e("div",[10===t.item.pay_status?e("span",[t._v("立刻付款")]):10===t.item.delivery_status?e("span",[t._v("申请取消")]):20===t.item.delivery_status||30===t.item.delivery_status?e("span",[t._v("确认收货")]):t._e()]):t._e(),30===t.item.order_status?e("div",[e("span",[t._v("评价")])]):t._e()])]):t._e()},n=[],o={props:{item:{type:Object,default:()=>({})}}},l=o,c=a(2528),d=(0,c.c)(l,r,n,!1,null,"3a7929ad",null),u=d.exports,v=a(7901),m={name:"OrderPage",components:{OrderListItem:u},data(){return{active:this.$route.query.dataType||"all",page:1,list:[]}},methods:{async getOrderList(){const{data:{list:t}}=await(0,v.Ix)(this.active,this.page);t.data.forEach((t=>{t.total_num=0,t.goods.forEach((e=>{t.total_num+=e.total_num}))})),this.list=t.data}},watch:{active:{immediate:!0,handler(){this.getOrderList()}}}},_=m,p=(0,c.c)(_,s,i,!1,null,"000bd67c",null),f=p.exports},7901:function(t,e,a){a.d(e,{Ck:function(){return r},Ix:function(){return n},mh:function(){return i}});var s=a(5184);const i=(t,e)=>(0,s.c)({url:"/checkout/order",params:{mode:t,delivery:10,shopId:0,couponId:0,...e}}),r=(t,e)=>(0,s.c)({url:"/checkout/submit",method:"POST",data:{...e,delivery:10,couponId:0,isUsePoints:-1,mode:t,payType:10}}),n=(t,e)=>(0,s.c)({url:"/order/list",params:{dataType:t,page:e}})}}]);
//# sourceMappingURL=248.bd346988.js.map