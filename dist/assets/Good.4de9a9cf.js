import"./vendor.f533a68a.js";/* empty css             *//* empty css               *//* empty css              */import{_ as a,u as e,x as o,g as t,d as r,s,j as l,N as d,O as i,P as n,E as p,o as c,c as g,w as u,a as m,f,q as b,R as h,m as k,S as y,K as w}from"./index.08d2378a.js";/* empty css                  *//* empty css                     *//* empty css                 */const x={class:"header"},_=["src"],C={key:0,style:{color:"green"}},v={key:1,style:{color:"red"}},j=["onClick"],P=["onClick"],S=["onClick"];var I=a({__name:"Good",setup(a){const I=e(),{goTop:z}=I.appContext.config.globalProperties,D=o(),N=t({loading:!1,tableData:[],total:0,currentPage:1,pageSize:10});r((()=>{q()}));const q=()=>{N.loading=!0,s.get("/goods/list",{params:{pageNumber:N.currentPage,pageSize:N.pageSize}}).then((a=>{N.tableData=a.list,N.total=a.totalCount,N.currentPage=a.currPage,N.loading=!1,z&&z()}))},G=()=>{D.push({path:"/add"})},$=a=>{N.currentPage=a,q()},E=(a,e)=>{s.put(`/goods/status/${e}`,{ids:a?[a]:[]}).then((()=>{w.success("修改成功"),q()}))};return(a,e)=>{const o=l,t=d,r=i,s=n,w=p;return c(),g(w,{class:"good-container"},{header:u((()=>[m("div",x,[f(o,{type:"primary",icon:h(y),onClick:G},{default:u((()=>[b("新增商品")])),_:1},8,["icon"])])])),default:u((()=>[f(r,{load:N.loading,data:N.tableData,"tooltip-effect":"dark",style:{width:"100%"}},{default:u((()=>[f(t,{prop:"goodsId",label:"商品编号"}),f(t,{prop:"goodsName",label:"商品名"}),f(t,{prop:"goodsIntro",label:"商品简介"}),f(t,{label:"商品图片",width:"150px"},{default:u((e=>[(c(),k("img",{style:{width:"100px",height:"100px"},key:e.row.goodsId,src:a.$filters.prefix(e.row.goodsCoverImg),alt:"商品主图"},null,8,_))])),_:1}),f(t,{prop:"stockNum",label:"商品库存"}),f(t,{prop:"sellingPrice",label:"商品售价"}),f(t,{label:"上架状态"},{default:u((a=>[0==a.row.goodsSellStatus?(c(),k("span",C,"销售中")):(c(),k("span",v,"已下架"))])),_:1}),f(t,{label:"操作",width:"100"},{default:u((a=>[m("a",{style:{cursor:"pointer","margin-right":"10px"},onClick:e=>{return o=a.row.goodsId,void D.push({path:"/add",query:{id:o}});var o}},"修改",8,j),0==a.row.goodsSellStatus?(c(),k("a",{key:0,style:{cursor:"pointer","margin-right":"10px"},onClick:e=>E(a.row.goodsId,1)},"下架",8,P)):(c(),k("a",{key:1,style:{cursor:"pointer","margin-right":"10px"},onClick:e=>E(a.row.goodsId,0)},"上架",8,S))])),_:1})])),_:1},8,["load","data"]),f(s,{background:"",layout:"prev, pager, next",total:N.total,"page-size":N.pageSize,"current-page":N.currentPage,onCurrentChange:$},null,8,["total","page-size","current-page"])])),_:1})}}},[["__scopeId","data-v-1e078d77"],["__file","/Users/gaobin/Downloads/vue3-admin-main/src/views/Good.vue"]]);export{I as default};
