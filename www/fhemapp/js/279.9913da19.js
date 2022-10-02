"use strict";(self["webpackChunkfhemapp"]=self["webpackChunkfhemapp"]||[]).push([[279],{2559:function(t,e,i){i.d(e,{Z:function(){return x}});var s=i(4562),n=i(4145),o=i(4886),l=i(4127),a=i(4061),c=i(4324),r=i(3687),h=function(){var t=this,e=t._self._c;return e("div",{staticClass:"text-center"},["zzz"!=t.item.Options.sortby?e(l.Z,{attrs:{small:"",color:"secondary"}},[e(c.Z,{attrs:{left:""}},[t._v(" mdi-sort-ascending ")]),t._v(" "+t._s(t.item.Options.sortby)+" ")],1):t._e(),e(s.Z,{attrs:{href:t.toFhem(),target:"_blank",small:"",icon:""}},[e(c.Z,{attrs:{small:""}},[t._v(" mdi-link ")])],1),e(a.Z,{attrs:{"max-width":"90%",scrollable:""},scopedSlots:t._u([{key:"activator",fn:function({on:i,attrs:n}){return[e(s.Z,t._g(t._b({attrs:{small:"",icon:""}},"v-btn",n,!1),i),[e(c.Z,{attrs:{small:""}},[t._v(" mdi-code-json ")])],1)]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[e(n.Z,{staticClass:"secondary lighten-1"},[e(o.EB,{staticClass:"secondary"},[e(s.Z,{attrs:{icon:""},on:{click:function(e){t.deep=t.deep>1?1:5}}},[e(c.Z,[t._v("mdi-file-tree-outline")])],1),e(r.Z),t._v(" "+t._s(t.item.Name)+" "),e(r.Z),e(s.Z,{attrs:{icon:""},on:{click:function(e){t.dialog=!1}}},[e(c.Z,[t._v("mdi-close")])],1)],1),e(o.ZB,[e("div",{ref:"jsonContent",staticClass:"select"},[e("vue-json-pretty",{attrs:{"show-line":!1,deep:t.deep,data:t.item}})],1)])],1)],1)],1)},d=[],u=i(4566),m=i.n(u),f={name:"JsonList",props:{item:{type:Object,default:()=>({name:"json"})}},data(){return{dialog:!1,deep:1}},components:{VueJsonPretty:m()},methods:{toFhem(){let t=this.$fhem.createURL([{param:"detail",value:this.item.Name}]);return t}}},p=f,v=i(1001),g=(0,v.Z)(p,h,d,!1,null,"4fc9ba56",null),x=g.exports},7006:function(t,e,i){i.r(e),i.d(e,{default:function(){return b}});var s=i(4562),n=i(4145),o=i(4886),l=i(266),a=i(9223),c=i(4324),r=i(5808),h=i(4525),d=i(1137),u=i(7912),m=i(4611),f=i(4568),p=i(3305),v=i(9592),g=i(1713),x=i(3687),_=i(7823),Z=function(){var t=this,e=t._self._c;return t.item.Options.show?e(l.Z,{class:t.item.Options.setup.size||t.size},[e(n.Z,{attrs:{dark:this.$vuetify.theme.dark,color:"secondary"}},[e(v.Z,{attrs:{height:"7",value:t.item.Options.status.level||t.status.level,color:t.item.Options.status.color||t.status.color,"background-color":"secondary darken-1"}}),e(o.EB,{staticClass:"text-truncate"},[t._v(" "+t._s(t.item.Options.name)+" "),e(x.Z),t.app.options.debugMode?e("jsonList",{attrs:{item:t.item}}):t._e()],1),e(a.Z),t.item.Options.status.isActive?t._e():e("div",[e(o.ZB,[e(g.Z,{attrs:{align:"center"}},[e(l.Z,{attrs:{align:"center"}},[e("div",{staticClass:"headline font-weight-bold"},[t._v(" "+t._s(t.item.Options.status.error)+" ")])])],1)],1),e(a.Z)],1),t.item.Options.status.isActive?e("div",[e(o.ZB,{staticClass:"pa-0"},t._l(t.panelItems,(function(i){return e("div",{key:i.Name,attrs:{align:"center"}},[e(g.Z,{staticClass:"ma-1",attrs:{dense:"",align:"center"}},[e(l.Z,{staticClass:"col-2"},[e(p.Z,{attrs:{value:i.level,color:i.color}})],1),e(l.Z,{staticClass:"text-truncate",attrs:{align:"left"}},[e("div",{staticClass:"text-truncate headline"},[t._v(" "+t._s(i.title)+" ")]),e("div",{staticClass:"text-truncate"},[t._v(" "+t._s(i.text)+" ")])]),e(l.Z,{staticClass:"col-2",attrs:{align:"center"}},[i.route&&!i.click&&i.icon?e(s.Z,{attrs:{icon:"",link:"",to:i.route}},[e(c.Z,{attrs:{large:""}},[t._v(" "+t._s(i.icon)+" ")])],1):t._e(),i.click&&!i.route&&i.icon?e("div",[e(s.Z,{attrs:{icon:""},on:{click:function(e){return t.set(i.device,i.click)}}},[e(c.Z,{attrs:{large:""}},[t._v(" "+t._s(i.icon)+" ")])],1)],1):t._e(),i.menu&&!i.route&&!i.click&&i.icon?e("div",[e(f.Z,{attrs:{bottom:"",left:"",transition:"slide-y-transition"},scopedSlots:t._u([{key:"activator",fn:function({on:n,attrs:o}){return[e(s.Z,t._g(t._b({attrs:{icon:""}},"v-btn",o,!1),n),[e(c.Z,{attrs:{large:""}},[t._v(" "+t._s(i.icon)+" ")])],1)]}}],null,!0)},[e(r.Z,{attrs:{dense:"",color:"secondary lighten-2"}},[e(u.Z,{attrs:{"active-class":"success--text"},model:{value:i.menuIdx,callback:function(e){t.$set(i,"menuIdx",e)},expression:"el.menuIdx"}},t._l(i.menu,(function(s,n){return e(h.Z,{key:n,on:{click:function(e){return t.set(i.device,s.cmd)}}},[e(d.km,[e(d.V9,{staticClass:"text-subtitle-1"},[t._v(" "+t._s(s.name)+" ")])],1),s.active?e(m.Z,[e(c.Z,[t._v("mdi-check")])],1):t._e()],1)})),1)],1)],1)],1):t._e()],1)],1),e(a.Z)],1)})),0)],1):t._e(),e(_.Z,{attrs:{color:"secondary darken-1"}},[e(c.Z,{staticClass:"ml-0",attrs:{color:t.item.Options.info.left1IconColor}},[t._v(" "+t._s(t.item.Options.info.left1Icon)+" ")]),e("div",{staticClass:"text-truncate"},[t._v(" "+t._s(t.item.Options.info.left1Text)+" ")]),e(c.Z,{staticClass:"ml-2",attrs:{color:t.item.Options.info.left2IconColor}},[t._v(" "+t._s(t.item.Options.info.left2Icon)+" ")]),e("div",{staticClass:"text-truncate"},[t._v(" "+t._s(t.item.Options.info.left2Text)+" ")]),e(x.Z),e(c.Z,{attrs:{color:t.item.Options.info.mid1IconColor}},[t._v(" "+t._s(t.item.Options.info.mid1Icon)+" ")]),e("div",{staticClass:"text-truncate"},[t._v(" "+t._s(t.item.Options.info.mid1Text)+" ")]),e(c.Z,{staticClass:"ml-2",attrs:{color:t.item.Options.info.mid2IconColor}},[t._v(" "+t._s(t.item.Options.info.mid2Icon)+" ")]),e("div",{staticClass:"text-truncate"},[t._v(" "+t._s(t.item.Options.info.mid2Text)+" ")]),e(x.Z),e(c.Z,{attrs:{color:t.item.Options.info.right1IconColor}},[t._v(" "+t._s(t.item.Options.info.right1Icon)+" ")]),e("div",{staticClass:"text-truncate"},[t._v(" "+t._s(t.item.Options.info.right1Text)+" ")]),e(c.Z,{staticClass:"ml-2 mr-0",attrs:{color:t.item.Options.info.right2IconColor}},[t._v(" "+t._s(t.item.Options.info.right2Icon)+" ")]),e("div",{staticClass:"text-truncate"},[t._v(" "+t._s(t.item.Options.info.right2Text)+" ")])],1)],1)],1):t._e()},k=[],C=i(2559),O={components:{jsonList:C.Z},props:{item:{type:Object,default:()=>({name:"panel"})}},data:()=>({name:"panel",size:"col-12 col-sm-6 col-md-6 col-lg-6",status:{color:"success",level:100},app:{options:{debugMode:!1}},panelItems:[]}),watch:{item:{immediate:!0,deep:!0,handler(){this.doList()}}},created(){this.app.options=this.$fhem.app.options},methods:{set(t,e){let i=e.match("set")?e:"set "+t+" "+e;this.$fhem.request(i)},checkMenu(t,e){let i=!1;if(e){let s=e.split(" ");s[0].match("set")&&s.splice(0,2),1===s.length&&s.splice(0,0,"state");let n=/\./.test(s[0])?s[0].split("."):["Readings",s[0],"Value"],o=this.$fhem.getEl(t,...n);o&&o===s[1]&&(i=!0)}return i},loadItem(t){let e=this.$fhem.getEl(t,"Name")||"",i=this.$fhem.getEl(t,"Attributes","alias")||t.Name,s=this.$fhem.getEl(t,"Options","name")||i,n=this.$fhem.getEl(t,"Options","panel","link")||"",o=this.$fhem.handleVals(t,this.$fhem.getEl(t,"Options","panel","status"))||[],l=this.$fhem.handleVals(t,this.$fhem.getEl(t,"Options","panel","btn"))||[],a=this.$fhem.handleVals(t,this.$fhem.getEl(t,"Options","panel","click"))||[],c=this.$fhem.getEl(t,"Options","panel","menu")||[],r=this.$fhem.getEl(t,"Options","panel","min")||0,h=this.$fhem.getEl(t,"Options","panel","max")||100,d=100/(h-r),u=((o[1]||0)-r)*d,m=[];if(c.length>0)for(const p of c){let e=p.split(":"),i=this.checkMenu(t,e[1]);2==e.length&&m.push({name:e[0],cmd:e[1],active:i})}let f={device:e,title:s,text:o[0]||"",level:o[3]?100-u:u,color:o[2]||"success",icon:l[0]||"",route:n,click:a[0]||"",menu:m};return f},doList(){if(this.item.Connected)for(var t in this.status.color="success",this.item.Options.connected){let e=this.panelItems.map((t=>t.name)).indexOf(t),i=this.loadItem(this.item.Connected[t]),s={name:t,device:i.device,level:i.level,color:i.color,title:i.title,text:i.text,icon:i.icon,route:i.route,click:i.click,menu:i.menu,menuIdx:i.menu.map((t=>t.active)).indexOf(!0)};"success"!=i.color&&(this.status.color=i.color,this.status.level=100),-1!=e?this.panelItems.splice(e,1,s):this.panelItems.push(s)}}}},T=O,I=i(1001),y=(0,I.Z)(T,Z,k,!1,null,null,null),b=y.exports},4568:function(t,e,i){i.d(e,{Z:function(){return x}});var s=i(920),n=i(1452),o=i(3016),l=i(908),a=i(5943),c=i(6401),r=i(2637),h=i(6669),d=i(5942),u=i(6746),m=i(7678),f=i(4101),p=i(5352),v=i(6421);const g=(0,m.Z)(l.Z,o.Z,c.Z,r.Z,h.Z,a.Z);var x=g.extend({name:"v-menu",directives:{ClickOutside:d.Z,Resize:u.Z},provide(){return{isInMenu:!0,theme:this.theme}},props:{auto:Boolean,closeOnClick:{type:Boolean,default:!0},closeOnContentClick:{type:Boolean,default:!0},disabled:Boolean,disableKeys:Boolean,maxHeight:{type:[Number,String],default:"auto"},offsetX:Boolean,offsetY:Boolean,openOnHover:Boolean,origin:{type:String,default:"top left"},transition:{type:[Boolean,String],default:"v-menu-transition"}},data(){return{calculatedTopAuto:0,defaultOffset:8,hasJustFocused:!1,listIndex:-1,resizeTimeout:0,selectedIndex:null,tiles:[]}},computed:{activeTile(){return this.tiles[this.listIndex]},calculatedLeft(){const t=Math.max(this.dimensions.content.width,parseFloat(this.calculatedMinWidth));return this.auto?(0,p.kb)(this.calcXOverflow(this.calcLeftAuto(),t))||"0":this.calcLeft(t)||"0"},calculatedMaxHeight(){const t=this.auto?"200px":(0,p.kb)(this.maxHeight);return t||"0"},calculatedMaxWidth(){return(0,p.kb)(this.maxWidth)||"0"},calculatedMinWidth(){if(this.minWidth)return(0,p.kb)(this.minWidth)||"0";const t=Math.min(this.dimensions.activator.width+Number(this.nudgeWidth)+(this.auto?16:0),Math.max(this.pageWidth-24,0)),e=isNaN(parseInt(this.calculatedMaxWidth))?t:parseInt(this.calculatedMaxWidth);return(0,p.kb)(Math.min(e,t))||"0"},calculatedTop(){const t=this.auto?(0,p.kb)(this.calcYOverflow(this.calculatedTopAuto)):this.calcTop();return t||"0"},hasClickableTiles(){return Boolean(this.tiles.find((t=>t.tabIndex>-1)))},styles(){return{maxHeight:this.calculatedMaxHeight,minWidth:this.calculatedMinWidth,maxWidth:this.calculatedMaxWidth,top:this.calculatedTop,left:this.calculatedLeft,transformOrigin:this.origin,zIndex:this.zIndex||this.activeZIndex}}},watch:{isActive(t){t||(this.listIndex=-1)},isContentActive(t){this.hasJustFocused=t},listIndex(t,e){if(t in this.tiles){const e=this.tiles[t];e.classList.add("v-list-item--highlighted");const i=this.$refs.content.scrollTop,s=this.$refs.content.clientHeight;i>e.offsetTop-8?(0,v.Z)(e.offsetTop-e.clientHeight,{appOffset:!1,duration:300,container:this.$refs.content}):i+s<e.offsetTop+e.clientHeight+8&&(0,v.Z)(e.offsetTop-s+2*e.clientHeight,{appOffset:!1,duration:300,container:this.$refs.content})}e in this.tiles&&this.tiles[e].classList.remove("v-list-item--highlighted")}},created(){this.$attrs.hasOwnProperty("full-width")&&(0,f.Jk)("full-width",this)},mounted(){this.isActive&&this.callActivate()},methods:{activate(){this.updateDimensions(),requestAnimationFrame((()=>{this.startTransition().then((()=>{this.$refs.content&&(this.calculatedTopAuto=this.calcTopAuto(),this.auto&&(this.$refs.content.scrollTop=this.calcScrollPosition()))}))}))},calcScrollPosition(){const t=this.$refs.content,e=t.querySelector(".v-list-item--active"),i=t.scrollHeight-t.offsetHeight;return e?Math.min(i,Math.max(0,e.offsetTop-t.offsetHeight/2+e.offsetHeight/2)):t.scrollTop},calcLeftAuto(){return parseInt(this.dimensions.activator.left-2*this.defaultOffset)},calcTopAuto(){const t=this.$refs.content,e=t.querySelector(".v-list-item--active");if(e||(this.selectedIndex=null),this.offsetY||!e)return this.computedTop;this.selectedIndex=Array.from(this.tiles).indexOf(e);const i=e.offsetTop-this.calcScrollPosition(),s=t.querySelector(".v-list-item").offsetTop;return this.computedTop-i-s-1},changeListIndex(t){if(this.getTiles(),this.isActive&&this.hasClickableTiles)if(t.keyCode!==p.Do.tab){if(t.keyCode===p.Do.down)this.nextTile();else if(t.keyCode===p.Do.up)this.prevTile();else if(t.keyCode===p.Do.end)this.lastTile();else if(t.keyCode===p.Do.home)this.firstTile();else{if(t.keyCode!==p.Do.enter||-1===this.listIndex)return;this.tiles[this.listIndex].click()}t.preventDefault()}else this.isActive=!1},closeConditional(t){const e=t.target;return this.isActive&&!this._isDestroyed&&this.closeOnClick&&!this.$refs.content.contains(e)},genActivatorAttributes(){const t=n.Z.options.methods.genActivatorAttributes.call(this);return this.activeTile&&this.activeTile.id?{...t,"aria-activedescendant":this.activeTile.id}:t},genActivatorListeners(){const t=a.Z.options.methods.genActivatorListeners.call(this);return this.disableKeys||(t.keydown=this.onKeyDown),t},genTransition(){const t=this.genContent();return this.transition?this.$createElement("transition",{props:{name:this.transition}},[t]):t},genDirectives(){const t=[{name:"show",value:this.isContentActive}];return!this.openOnHover&&this.closeOnClick&&t.push({name:"click-outside",value:{handler:()=>{this.isActive=!1},closeConditional:this.closeConditional,include:()=>[this.$el,...this.getOpenDependentElements()]}}),t},genContent(){const t={attrs:{...this.getScopeIdAttrs(),role:"role"in this.$attrs?this.$attrs.role:"menu"},staticClass:"v-menu__content",class:{...this.rootThemeClasses,...this.roundedClasses,"v-menu__content--auto":this.auto,"v-menu__content--fixed":this.activatorFixed,menuable__content__active:this.isActive,[this.contentClass.trim()]:!0},style:this.styles,directives:this.genDirectives(),ref:"content",on:{click:t=>{const e=t.target;e.getAttribute("disabled")||this.closeOnContentClick&&(this.isActive=!1)},keydown:this.onKeyDown}};return this.$listeners.scroll&&(t.on=t.on||{},t.on.scroll=this.$listeners.scroll),!this.disabled&&this.openOnHover&&(t.on=t.on||{},t.on.mouseenter=this.mouseEnterHandler),this.openOnHover&&(t.on=t.on||{},t.on.mouseleave=this.mouseLeaveHandler),this.$createElement("div",t,this.getContentSlot())},getTiles(){this.$refs.content&&(this.tiles=Array.from(this.$refs.content.querySelectorAll(".v-list-item, .v-divider, .v-subheader")))},mouseEnterHandler(){this.runDelay("open",(()=>{this.hasJustFocused||(this.hasJustFocused=!0)}))},mouseLeaveHandler(t){this.runDelay("close",(()=>{var e;(null===(e=this.$refs.content)||void 0===e?void 0:e.contains(t.relatedTarget))||requestAnimationFrame((()=>{this.isActive=!1,this.callDeactivate()}))}))},nextTile(){const t=this.tiles[this.listIndex+1];if(!t){if(!this.tiles.length)return;return this.listIndex=-1,void this.nextTile()}this.listIndex++,-1===t.tabIndex&&this.nextTile()},prevTile(){const t=this.tiles[this.listIndex-1];if(!t){if(!this.tiles.length)return;return this.listIndex=this.tiles.length,void this.prevTile()}this.listIndex--,-1===t.tabIndex&&this.prevTile()},lastTile(){const t=this.tiles[this.tiles.length-1];t&&(this.listIndex=this.tiles.length-1,-1===t.tabIndex&&this.prevTile())},firstTile(){const t=this.tiles[0];t&&(this.listIndex=0,-1===t.tabIndex&&this.nextTile())},onKeyDown(t){if(t.keyCode===p.Do.esc){setTimeout((()=>{this.isActive=!1}));const t=this.getActivator();this.$nextTick((()=>t&&t.focus()))}else!this.isActive&&[p.Do.up,p.Do.down].includes(t.keyCode)&&(this.isActive=!0);this.$nextTick((()=>this.changeListIndex(t)))},onResize(){this.isActive&&(this.$refs.content.offsetWidth,this.updateDimensions(),clearTimeout(this.resizeTimeout),this.resizeTimeout=window.setTimeout(this.updateDimensions,100))}},render(t){const e={staticClass:"v-menu",class:{"v-menu--attached":""===this.attach||!0===this.attach||"attach"===this.attach},directives:[{arg:"500",name:"resize",value:this.onResize}]};return t("div",e,[!this.activator&&this.genActivator(),this.showLazyContent((()=>[this.$createElement(s.Z,{props:{root:!0,light:this.light,dark:this.dark}},[this.genTransition()])]))])}})}}]);