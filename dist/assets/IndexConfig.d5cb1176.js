import"./vendor.f533a68a.js";/* empty css             *//* empty css               *//* empty css              */import{_ as e,r as o,g as r,o as a,c as l,w as t,a as n,f as i,q as d,K as s,s as u,h as c,i as m,l as p,j as f,L as g,x as b,v as y,d as v,M as _,N as h,O as k,P as x,E as F,m as C,Q as T,R as w,J as V,S as j,T as U,p as I,b as S}from"./index.08d2378a.js";/* empty css                  *//* empty css                     *//* empty css                 *//* empty css                   *//* empty css                *//* empty css                  */const P={class:"dialog-footer"};var D=e({__name:"DialogAddGood",props:{type:String,configType:Number,reload:Function},setup(e,{expose:b}){const y=e,v=o(null),_=r({visible:!1,ruleForm:{name:"",link:"",id:"",sort:""},rules:{name:[{required:"true",message:"名称不能为空",trigger:["change"]}],id:[{required:"true",message:"编号不能为空",trigger:["change"]}],sort:[{required:"true",message:"排序不能为空",trigger:["change"]}]},id:""}),h=()=>{v.value.validate((e=>{if(e){if(_.ruleForm.id<0||_.ruleForm.id>200)return void s.error("商品编号不能小于 0 或大于 200");"add"==y.type?u.post("/indexConfigs",{configType:y.configType||3,configName:_.ruleForm.name,redirectUrl:_.ruleForm.link,goodsId:_.ruleForm.id,configRank:_.ruleForm.sort}).then((()=>{s.success("添加成功"),_.visible=!1,y.reload&&y.reload()})):u.put("/indexConfigs",{configId:_.id,configType:y.configType||3,configName:_.ruleForm.name,redirectUrl:_.ruleForm.link,goodsId:_.ruleForm.id,configRank:_.ruleForm.sort}).then((()=>{s.success("修改成功"),_.visible=!1,y.reload&&y.reload()}))}}))};return b({open:e=>{_.visible=!0,e?(_.id=e,(e=>{u.get(`/indexConfigs/${e}`).then((e=>{_.ruleForm={name:e.configName,id:e.goodsId,link:e.redirectUrl,sort:e.configRank}}))})(e)):_.ruleForm={name:"",id:"",link:"",sort:""}},close:()=>{_.visible=!1}}),(o,r)=>{const s=c,u=m,b=p,y=f,k=g;return a(),l(k,{title:"add"==e.type?"添加商品":"修改商品",modelValue:_.visible,"onUpdate:modelValue":r[5]||(r[5]=e=>_.visible=e),width:"400px"},{footer:t((()=>[n("span",P,[i(y,{onClick:r[4]||(r[4]=e=>_.visible=!1)},{default:t((()=>[d("取 消")])),_:1}),i(y,{type:"primary",onClick:h},{default:t((()=>[d("确 定")])),_:1})])])),default:t((()=>[i(b,{model:_.ruleForm,rules:_.rules,ref_key:"formRef",ref:v,"label-width":"100px",class:"good-form"},{default:t((()=>[i(u,{label:"商品名称",prop:"name"},{default:t((()=>[i(s,{type:"text",modelValue:_.ruleForm.name,"onUpdate:modelValue":r[0]||(r[0]=e=>_.ruleForm.name=e)},null,8,["modelValue"])])),_:1}),i(u,{label:"跳转链接",prop:"link"},{default:t((()=>[i(s,{type:"text",modelValue:_.ruleForm.link,"onUpdate:modelValue":r[1]||(r[1]=e=>_.ruleForm.link=e)},null,8,["modelValue"])])),_:1}),i(u,{label:"商品编号",prop:"id"},{default:t((()=>[i(s,{type:"number",min:"0",modelValue:_.ruleForm.id,"onUpdate:modelValue":r[2]||(r[2]=e=>_.ruleForm.id=e)},null,8,["modelValue"])])),_:1}),i(u,{label:"排序值",prop:"sort"},{default:t((()=>[i(s,{type:"number",modelValue:_.ruleForm.sort,"onUpdate:modelValue":r[3]||(r[3]=e=>_.ruleForm.sort=e)},null,8,["modelValue"])])),_:1})])),_:1},8,["model","rules"])])),_:1},8,["title","modelValue"])}}},[["__file","/Users/gaobin/Downloads/vue3-admin-main/src/components/DialogAddGood.vue"]]);const N={class:"header"},z=["href"],R=["onClick"],q=(e=>(I("data-v-c24c5f2c"),e=e(),S(),e))((()=>n("a",{style:{cursor:"pointer"}},"删除",-1)));var B=e({__name:"IndexConfig",setup(e){const l={hot:3,new:4,recommend:5},c=b(),m=y(),p=o(null),g=o(null),I=r({loading:!1,tableData:[],multipleSelection:[],total:0,currentPage:1,pageSize:10,type:"add",configType:3});c.beforeEach((e=>{["hot","new","recommend"].includes(e.name)&&(I.configType=l[e.name],I.currentPage=1,S())})),v((()=>{I.configType=l[m.name],S()}));const S=()=>{I.loading=!0,u.get("/indexConfigs",{params:{pageNumber:I.currentPage,pageSize:I.pageSize,configType:I.configType}}).then((e=>{I.tableData=e.list,I.total=e.totalCount,I.currentPage=e.currPage,I.loading=!1}))},P=()=>{I.type="add",g.value.open()},B=e=>{I.multipleSelection=e},G=()=>{I.multipleSelection.length?u.delete("/indexConfigs",{ids:I.multipleSelection.map((e=>e.configId))}).then((()=>{s.success("删除成功"),S()})):s.error("请选择项")},A=e=>{I.currentPage=e,S()};return(e,o)=>{const r=f,l=_,c=h,m=k,b=x,y=F;return a(),C(T,null,[i(y,{class:"index-container"},{header:t((()=>[n("div",N,[i(r,{type:"primary",icon:w(j),onClick:P},{default:t((()=>[d("增加")])),_:1},8,["icon"]),i(l,{title:"确定删除吗？",confirmButtonText:"确定",cancelButtonText:"取消",onConfirm:G},{reference:t((()=>[i(r,{type:"danger",icon:w(U)},{default:t((()=>[d("批量删除")])),_:1},8,["icon"])])),_:1})])])),default:t((()=>[i(m,{load:I.loading,ref_key:"multipleTable",ref:p,data:I.tableData,"tooltip-effect":"dark",style:{width:"100%"},onSelectionChange:B},{default:t((()=>[i(c,{type:"selection",width:"55"}),i(c,{prop:"configName",label:"商品名称"}),i(c,{label:"跳转链接"},{default:t((e=>[n("a",{target:"_blank",href:e.row.redirectUrl},V(e.row.redirectUrl),9,z)])),_:1}),i(c,{prop:"configRank",label:"排序值",width:"120"}),i(c,{prop:"goodsId",label:"商品编号",width:"200"}),i(c,{prop:"createTime",label:"添加时间",width:"200"}),i(c,{label:"操作",width:"100"},{default:t((e=>[n("a",{style:{cursor:"pointer","margin-right":"10px"},onClick:o=>{return r=e.row.configId,I.type="edit",void g.value.open(r);var r}},"修改",8,R),i(l,{title:"确定删除吗？",confirmButtonText:"确定",cancelButtonText:"取消",onConfirm:o=>{return r=e.row.configId,void u.delete("/indexConfigs",{ids:[r]}).then((()=>{s.success("删除成功"),S()}));var r}},{reference:t((()=>[q])),_:2},1032,["onConfirm"])])),_:1})])),_:1},8,["load","data"]),i(b,{background:"",layout:"prev, pager, next",total:I.total,"page-size":I.pageSize,"current-page":I.currentPage,onCurrentChange:A},null,8,["total","page-size","current-page"])])),_:1}),i(D,{ref_key:"addGood",ref:g,reload:S,type:I.type,configType:I.configType},null,8,["type","configType"])],64)}}},[["__scopeId","data-v-c24c5f2c"],["__file","/Users/gaobin/Downloads/vue3-admin-main/src/views/IndexConfig.vue"]]);export{B as default};