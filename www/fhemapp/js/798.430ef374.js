"use strict";(self["webpackChunkfhemapp"]=self["webpackChunkfhemapp"]||[]).push([[798],{6798:function(e,t,i){i.r(t),i.d(t,{default:function(){return d}});var s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("v-row",e._l(e.app.data.deviceList,(function(e){return i(e.Options.component,{key:e.Internals.FUUID,tag:"component",attrs:{item:e}})})),1)],1)},a=[],n={name:"DevicesView",components:{templ_default:()=>Promise.all([i.e(121),i.e(288),i.e(322),i.e(630)]).then(i.bind(i,1167)),templ_panel:()=>Promise.all([i.e(121),i.e(337)]).then(i.bind(i,2965)),templ_chart:()=>Promise.all([i.e(121),i.e(288),i.e(285),i.e(387)]).then(i.bind(i,387)),templ_weather:()=>i.e(947).then(i.bind(i,9285)),templ_list:()=>Promise.all([i.e(121),i.e(687)]).then(i.bind(i,2405)),templ_wdtimer:()=>Promise.all([i.e(121),i.e(96)]).then(i.bind(i,1977)),templ_scenes:()=>i.e(869).then(i.bind(i,1869)),templ_sonos:()=>Promise.all([i.e(121),i.e(288),i.e(322),i.e(475)]).then(i.bind(i,400)),templ_sysmon:()=>Promise.all([i.e(121),i.e(289)]).then(i.bind(i,5193)),templ_hmlan:()=>i.e(438).then(i.bind(i,7438)),templ_cam:()=>Promise.all([i.e(121),i.e(507)]).then(i.bind(i,1643)),templ_iframe:()=>Promise.all([i.e(121),i.e(154)]).then(i.bind(i,2756))},data:()=>({app:{session:{connect:!1},options:{mobileHeader:!1},data:{deviceList:[],header:""}}}),watch:{$route(){this.subscribe()},"app.session.ready"(e){e&&this.subscribe()}},mounted(){this.app.session=this.$fhem.app.session,this.app.options=this.$fhem.app.options,this.app.data=this.$fhem.app.data},methods:{setHeader(){(this.app.options.mobileHeader||"page"===this.app.options.mobileHeaderContent)&&("Devices"===this.$route.name?this.$route.params.filter.match("device=")?this.$fhem.app.appBar.mobileHeader="":this.$fhem.app.appBar.mobileHeader=this.$route.params.filter.split("=")[1]:this.$fhem.app.appBar.mobileHeader=this.$route.name)},subscribe(){let e=this.$route.params.filter||this.$route.path;this.setHeader(),this.$fhem.getDevices(e)}}},p=n,l=i(1001),o=i(3453),r=i.n(o),m=i(2877),h=(0,l.Z)(p,s,a,!1,null,null,null),d=h.exports;r()(h,{VRow:m.Z})}}]);