import{a9 as _,P as n,ab as V,e as g,f as Q,w as s,k as l,p as c,ad as k,ac as p,x as r,m,v as w,g as i,y,t as q,af as v,ag as b,F as C,ae as A,Q as D,l as S}from"./app-e7bc3d76.js";import{Q as x,a as I,b as T,c as j}from"./QTable-0f8b129e.js";import{Q as N,f as B,g as U,h as z}from"./QSpace-80b91e8c.js";const P={data(){return{data:[],hero:null,oke:!1,toggle:!1,columns:[{name:"date",required:!0,label:"Tanggal",align:"left",field:"date",sortable:!0},{name:"text",required:!0,label:"Text",align:"left",field:"text",sortable:!0},{name:"aksi",required:!0,label:"Aksi",align:"left",field:"aksi",sortable:!1}],showAddDialog:!1,newItem:{date:"",text:""},pagination:{},filter:null}},methods:{submit(){this.hero=="inashol09"&&(this.oke=!0)},toggleAktif(a){n.show();let e={key:"924rjnjefj9e9re###*w",indo_aktif:a};axios.post("/api/config-toggle-story-indo",e).then(f=>{this.toggle=!!f.data}).finally(()=>{n.hide()})},saveNewItem(){n.show();let a={key:"924rjnjefj9e9re###*w",...this.newItem};axios.post("/api/love-story-indo",a).then(e=>{this.data.push(e.data),this.newItem={date:"",text:""}}).finally(()=>{this.showAddDialog=!1,n.hide()})},fill(){n.show(),axios.get("/api/love-story-indo").then(a=>{this.toggle=!!a.data.toggle,this.data=a.data.stories}).finally(()=>{n.hide()})},destroy(a){n.show();let e={key:"924rjnjefj9e9re###*w",id:a.id};axios.post("/api/hapus-love-story-indo",e).then(()=>{const f=a.id;this.data=this.data.filter(h=>h.id!==f)}).finally(()=>{n.hide()})},openDelete(a){V.create({dark:!0,title:"Confirm",message:`Apakah anda yakin menghapus story : ${a.text} ?`,cancel:!0,persistent:!0}).onOk(()=>{this.destroy(a)}).onOk(()=>{}).onCancel(()=>{}).onDismiss(()=>{})}},mounted(){this.fill()}},F={key:0},L={key:1},R={class:"row"},M=i("div",{class:"col-12 text-h5"},"Love Story Indo",-1),O={class:"q-mb-sm"},E=i("div",null,"Tanggal",-1),G=i("div",null,"Text",-1),H={class:"row q-mt-md"};function J(a,e,f,h,t,d){return g(),Q(z,{view:"lhr lpR lFr"},{default:s(()=>[l(U,{class:"row justify-center",style:{"padding-bottom":"100px"}},{default:s(()=>[l(N,{class:"col-12 col-md-10 q-pa-md"},{default:s(()=>[t.oke?w("",!0):(g(),c("div",F,[l(x,{onSubmit:k(d.submit,["prevent"])},{default:s(()=>[l(p,{rules:[o=>a.val!==null&&a.val!==""||"Required"],label:"hero",dense:"",outlined:"",modelValue:t.hero,"onUpdate:modelValue":e[0]||(e[0]=o=>t.hero=o),class:"q-mb-sm"},null,8,["rules","modelValue"]),l(r,{type:"submit",color:"orange"},{default:s(()=>[m("submit")]),_:1})]),_:1},8,["onSubmit"])])),t.oke?(g(),c("div",L,[l(I,{rows:t.data,columns:t.columns,pagination:t.pagination,"rows-per-page-options":[10,20,50],filter:t.filter},{"top-left":s(o=>[i("div",R,[M,i("div",O,[i("div",null,[m(" Status : "),i("span",{class:y(t.toggle?"text-primary":"text-red")},q(t.toggle?"Sedang Aktif":"Dimatikan"),3)]),v(l(r,{dense:"",size:"sm",class:"q-mr-sm",color:"primary",onClick:e[1]||(e[1]=u=>d.toggleAktif(1))},{default:s(()=>[m(" Aktifkan ")]),_:1},512),[[b,!t.toggle]]),v(l(r,{dense:"",size:"sm",color:"red",onClick:e[2]||(e[2]=u=>d.toggleAktif(0))},{default:s(()=>[m(" Matikan ")]),_:1},512),[[b,t.toggle]])])])]),"top-right":s(o=>[l(p,{outlined:"",dense:"",debounce:"300",modelValue:t.filter,"onUpdate:modelValue":e[3]||(e[3]=u=>t.filter=u),placeholder:"Search",class:"q-mr-sm"},{append:s(()=>[l(C,{name:"search"})]),_:1},8,["modelValue"]),l(r,{class:y(a.$q.screen.xs?"q-mt-sm":""),label:"Add",color:"primary",onClick:e[4]||(e[4]=u=>t.showAddDialog=!0)},null,8,["class"])]),"body-cell-aksi":s(o=>[l(T,{props:o},{default:s(()=>[l(r,{onClick:u=>d.openDelete(o.row),color:"red",icon:"delete",flat:"",round:"",size:"sm"},{default:s(()=>[l(j,{class:"bg-accent"},{default:s(()=>[m("hapus")]),_:1})]),_:2},1032,["onClick"])]),_:2},1032,["props"])]),_:1},8,["rows","columns","pagination","filter"]),l(A,{modelValue:t.showAddDialog,"onUpdate:modelValue":e[8]||(e[8]=o=>t.showAddDialog=o),persistent:""},{default:s(()=>[l(D,{style:{width:"800px"}},{default:s(()=>[l(S,null,{default:s(()=>[l(x,{onSubmit:k(d.saveNewItem,["prevent"])},{default:s(()=>[i("div",null,[i("div",null,[E,l(p,{modelValue:t.newItem.date,"onUpdate:modelValue":e[5]||(e[5]=o=>t.newItem.date=o),dense:"",outlined:"",rules:[o=>!!o||"Tanggal is required"]},null,8,["modelValue","rules"])]),i("div",null,[G,l(p,{type:"textarea",autogrow:"",modelValue:t.newItem.text,"onUpdate:modelValue":e[6]||(e[6]=o=>t.newItem.text=o),dense:"",outlined:"",rules:[o=>!!o||"Tanggal is required"]},null,8,["modelValue","rules"])]),i("div",H,[l(B),l(r,{label:"Cancel",color:"secondary",onClick:e[7]||(e[7]=o=>t.showAddDialog=!1),class:"q-mr-sm"}),l(r,{label:"Save",color:"primary",type:"submit"})])])]),_:1},8,["onSubmit"])]),_:1})]),_:1})]),_:1},8,["modelValue"])])):w("",!0)]),_:1})]),_:1})]),_:1})}const Y=_(P,[["render",J]]);export{Y as default};
