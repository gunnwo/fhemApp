(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-784e24bc"],{"649b":function(t,s,e){"use strict";var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"text-center"},["zzz"!=t.item.Options.sortby?e("v-chip",{attrs:{small:"",color:"secondary"}},[e("v-icon",{attrs:{left:""}},[t._v(" mdi-sort-ascending ")]),t._v(" "+t._s(t.item.Options.sortby)+" ")],1):t._e(),e("v-btn",{attrs:{href:t.toFhem(),target:"_blank",small:"",icon:""}},[e("v-icon",{attrs:{small:""}},[t._v(" mdi-link ")])],1),e("v-dialog",{attrs:{"max-width":"90%",scrollable:""},scopedSlots:t._u([{key:"activator",fn:function(s){var a=s.on,i=s.attrs;return[e("v-btn",t._g(t._b({attrs:{small:"",icon:""}},"v-btn",i,!1),a),[e("v-icon",{attrs:{small:""}},[t._v(" mdi-code-json ")])],1)]}}]),model:{value:t.dialog,callback:function(s){t.dialog=s},expression:"dialog"}},[e("v-card",{staticClass:"secondary lighten-1"},[e("v-card-title",{staticClass:"secondary"},[e("v-btn",{attrs:{icon:""},on:{click:function(s){t.deep=t.deep>1?1:5}}},[e("v-icon",[t._v("mdi-file-tree-outline")])],1),e("v-spacer"),t._v(" "+t._s(t.item.Name)+" "),e("v-spacer"),e("v-btn",{attrs:{icon:""},on:{click:function(s){t.dialog=!1}}},[e("v-icon",[t._v("mdi-close")])],1)],1),e("v-card-text",[e("div",{ref:"jsonContent",staticClass:"select"},[e("vue-json-pretty",{attrs:{"show-line":!1,deep:t.deep,data:t.item}})],1)])],1)],1)],1)},i=[],n=e("838b"),o=e.n(n),l=(e("b83f"),{props:{item:{type:Object,default:function(){return{name:"json"}}}},data:function(){return{dialog:!1,deep:1}},components:{VueJsonPretty:o.a},methods:{toFhem:function(){var t=this.$fhem.createURL([{param:"detail",value:this.item.Name}]);return t}}}),r=l,c=(e("a906"),e("2877")),h=e("6544"),u=e.n(h),d=e("8336"),m=e("b0af"),v=e("99d9"),p=e("cc20"),f=e("169a"),g=e("132d"),b=e("2fa4"),_=Object(c["a"])(r,a,i,!1,null,"33cd40a8",null);s["a"]=_.exports;u()(_,{VBtn:d["a"],VCard:m["a"],VCardText:v["c"],VCardTitle:v["d"],VChip:p["a"],VDialog:f["a"],VIcon:g["a"],VSpacer:b["a"]})},"86eb":function(t,s,e){"use strict";e.r(s);var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("v-col",{class:t.setup.size},[e("v-card",{attrs:{dark:this.$vuetify.theme.dark,color:"secondary"}},[e("v-progress-linear",{attrs:{height:"7",value:t.getLevel,color:t.vals.status.color,"background-color":"secondary darken-1"}}),e("v-card-title",{staticClass:"text-truncate"},[t._v(" "+t._s(t.vals.title)+" "),e("v-spacer"),t.app.options.debugMode?e("jsonList",{attrs:{item:t.item}}):t._e()],1),e("v-divider"),e("v-card-subtitle",[t._v(" "+t._s(t.vals.subTitle)+" ")]),e("v-card-text",[e("v-row",t._l(t.vals.list,(function(s){return e("v-col",{key:s.name,staticClass:"col-12 col-md-4 col-lg-4"},[e("div",{staticClass:"text-truncate"},[t._v(" "+t._s(s.name)+" ")]),s.isBar?e("v-progress-linear",{attrs:{height:"7",value:s.value,color:s.color,min:s.min,max:s.max,"background-color":"secondary lighten-4"}}):t._e(),e("div",[t._v(t._s(s.subText))])],1)})),1)],1),t.setup.fhemBtns?e("v-card-actions",[e("v-btn",{staticClass:"mr-2",on:{click:function(s){return t.goTo()}}},[e("v-icon",[t._v("mdi-format-list-bulleted")])],1),e("v-spacer"),e("v-btn",{attrs:{disabled:!t.update},on:{click:t.fhemUpdate}},[t._v(" "+t._s(t.updateText)+" ")]),e("v-btn",{attrs:{disabled:!t.restart},on:{click:t.fhemRestart}},[t._v(" "+t._s(t.$t("templates.sysmon.restartBtn"))+" ")])],1):t._e(),e("v-divider"),e("v-system-bar",{attrs:{color:"secondary darken-1"}},[e("v-icon",{staticClass:"ml-0"},[t._v(" "+t._s(t.vals.info.left1Icon)+" ")]),t._v(t._s(t.vals.info.left1Text)+" "),e("v-icon",{staticClass:"ml-2"},[t._v(" "+t._s(t.vals.info.left2Icon)+" ")]),t._v(t._s(t.vals.info.left2Text)+" "),e("v-spacer"),e("v-icon",[t._v(t._s(t.vals.info.mid1Icon))]),t._v(t._s(t.vals.info.mid1Text)+" "),e("v-icon",{staticClass:"ml-2"},[t._v(" "+t._s(t.vals.info.mid2Icon)+" ")]),t._v(t._s(t.vals.info.mid2Text)+" "),e("v-spacer"),e("v-icon",[t._v(t._s(t.vals.info.right1Icon))]),t._v(t._s(t.vals.info.right1Text)+" "),e("v-icon",{staticClass:"ml-2 mr-0"},[t._v(" "+t._s(t.vals.info.right2Icon)+" ")]),t._v(t._s(t.vals.info.right2Text)+" ")],1),e("v-dialog",{attrs:{"max-width":"420px"},model:{value:t.updateDialog,callback:function(s){t.updateDialog=s},expression:"updateDialog"}},[e("v-card",{attrs:{color:"secondary lighten-2"}},[e("v-card-title",[t._v(" "+t._s(t.$t("templates.sysmon.updateDialog.header"))+" "),e("v-spacer"),e("v-btn",{attrs:{icon:"",small:""},on:{click:function(s){t.updateDialog=!1}}},[e("v-icon",[t._v("mdi-close")])],1)],1),e("v-card-text",[t._v(" "+t._s(t.$t("templates.sysmon.updateDialog.text"))+" ")]),e("v-card-actions",[e("v-spacer"),e("v-btn",{on:{click:function(s){return t.fhemRestart()}}},[t._v(" "+t._s(t.$t("templates.sysmon.updateDialog.restartBtn"))+" ")])],1)],1)],1)],1)],1)},i=[],n=e("1da1"),o=e("b85c"),l=(e("96cf"),e("d81d"),e("b0c0"),e("a434"),e("d3b7"),e("649b")),r={components:{jsonList:l["a"]},props:{item:{type:Object,default:function(){return{name:"sysmon"}}}},data:function(){return{name:"sysmon",app:{options:{updateProcess:!1,debugMode:!1}},setup:{size:"col-12 col-sm-12 col-md-6 col-lg-6",status:{bar:[],error:[],min:0,max:100},subTitle:[],main:[],fhemBtns:!0,info:{left1:[],left2:[],mid1:[],mid2:[],right1:[],right2:[]}},vals:{title:"",subTitle:"",status:{level:0,color:"success"},list:[],info:{left1Icon:"",left1Text:"",left2Icon:"",left2Text:"",mid1Icon:"",mid1Text:"",mid2Icon:"",mid2Text:"",right1Icon:"",right1Text:"",right2Icon:"",right2Text:""}},restart:!0,update:!0,updateText:"",updateDialog:!1}},computed:{getLevel:function(){var t=100/(this.setup.status.max-this.setup.status.min),s=(this.vals.status.level-this.setup.status.min)*t;return this.vals.status.invert?100-s:s}},watch:{item:{immediate:!0,deep:!0,handler:function(t){var s=this.$fhem.getEl(t,"Attributes","alias")||t.Name;this.vals.title=this.$fhem.getEl(t,"Options","name")||s,this.setValues(),this.doList()}},setup:{deep:!0,handler:function(){this.setValues(),this.doList()}},"app.options.updateProcess":function(t){t||(this.updateDialog=!0,this.updateText=this.$t("templates.sysmon.updateBtn[1]"),this.restart=!0)}},mounted:function(){this.app.options=this.$fhem.app.options,this.fhemUpdateCheck();var t=this.$fhem.getEl(this.item,"Options","setup","size"),s=this.$fhem.getEl(this.item,"Options","setup","subTitle"),e=this.$fhem.getEl(this.item,"Options","setup","fhemBtns"),a=this.$fhem.getEl(this.item,"Options","setup","status"),i=this.$fhem.getEl(this.item,"Options","setup","main"),n=this.$fhem.getEl(this.item,"Options","setup","info");t&&(this.setup.size=t),s&&(this.setup.subTitle=s),a&&Object.assign(this.setup.status,a),i&&Object.assign(this.setup.main,i),n&&Object.assign(this.setup.info,n),this.setup.fhemBtns=e},methods:{setValues:function(){var t=this.$fhem.handleVals(this.item,this.setup.status.bar),s=this.$fhem.handleVals(this.item,this.setup.status.error),e=this.$fhem.handleVals(this.item,this.setup.subTitle),a=this.$fhem.handleVals(this.item,this.setup.info.left1),i=this.$fhem.handleVals(this.item,this.setup.info.left2),n=this.$fhem.handleVals(this.item,this.setup.info.mid1),o=this.$fhem.handleVals(this.item,this.setup.info.mid2),l=this.$fhem.handleVals(this.item,this.setup.info.right1),r=this.$fhem.handleVals(this.item,this.setup.info.right2);this.vals.status.level=t[0]||"100",this.vals.status.color=t[1]||"success",this.vals.subTitle=e[0]||"",this.vals.info.left1Icon=a[1]||"",this.vals.info.left1Text=a[0]||"",this.vals.info.left2Icon=i[1]||"",this.vals.info.left2Text=i[0]||"",this.vals.info.mid1Icon=n[1]||"",this.vals.info.mid1Text=n[0]||"",this.vals.info.mid2Icon=o[1]||"",this.vals.info.mid2Text=o[0]||"",this.vals.info.right1Icon=l[1]||"",this.vals.info.right1Text=l[0]||"",this.vals.info.right2Icon=r[1]||"",this.vals.info.right2Text=r[0]||"",s.length>0&&(this.vals.status.level=s[0]||"100",this.vals.status.color=s[1]||"error")},doList:function(){var t,s=Object(o["a"])(this.setup.main);try{for(s.s();!(t=s.n()).done;){var e=t.value,a=this.vals.list.map((function(t){return t.name})).indexOf(e.name),i=this.$fhem.handleVals(this.item,e.bar),n=this.$fhem.handleVals(this.item,e.subText),l={name:e.name,isBar:i.length>0,value:i[0]||0,color:i[1]||"success",min:i[2]||0,max:i[3]||100,subText:n[0]||""};l.isBar&&"success"!=l.color&&(this.vals.status.color=l.color),-1!=a?this.vals.list.splice(a,1,l):this.vals.list.push(l)}}catch(r){s.e(r)}finally{s.f()}},fhemRestart:function(){this.restart=!1,this.updateDialog=!1,this.$fhem.request({param:"cmd",value:"shutdown restart"})},fhemUpdateCheck:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function s(){var e;return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:return e=new Promise((function(s,e){t.restart=!1,t.update=!1,t.updateText=t.$t("templates.sysmon.updateBtn[0]"),t.$fhem.checkUpdate().then((function(e){e?(t.updateText=t.$t("templates.sysmon.updateBtn[2]"),t.update=!0):t.updateText=t.$t("templates.sysmon.updateBtn[1]"),s(e)})).catch((function(s){t.$fhem.log({lvl:1,msg:"Update check failed.",meta:s}),e()})).finally((function(){t.restart=!0}))})),s.abrupt("return",e);case 2:case"end":return s.stop()}}),s)})))()},fhemUpdate:function(){this.restart=!1,this.update=!1,this.updateText=this.$t("templates.sysmon.updateBtn[3]"),this.app.options.updateProcess=!0,this.$fhem.request({param:"cmd",value:"update"})},goTo:function(){this.$router.push("syslog")}}},c=r,h=e("2877"),u=e("6544"),d=e.n(u),m=e("8336"),v=e("b0af"),p=e("99d9"),f=e("62ad"),g=e("169a"),b=e("ce7e"),_=e("132d"),x=e("8e36"),T=e("0fd9"),$=e("2fa4"),V=e("afd9"),y=Object(h["a"])(c,a,i,!1,null,null,null);s["default"]=y.exports;d()(y,{VBtn:m["a"],VCard:v["a"],VCardActions:p["a"],VCardSubtitle:p["b"],VCardText:p["c"],VCardTitle:p["d"],VCol:f["a"],VDialog:g["a"],VDivider:b["a"],VIcon:_["a"],VProgressLinear:x["a"],VRow:T["a"],VSpacer:$["a"],VSystemBar:V["a"]})},a906:function(t,s,e){"use strict";e("b3d1")},b3d1:function(t,s,e){}}]);