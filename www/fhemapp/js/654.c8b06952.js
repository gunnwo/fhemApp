"use strict";(self["webpackChunkfhemapp"]=self["webpackChunkfhemapp"]||[]).push([[654],{3654:function(e,t,i){i.r(t),i.d(t,{default:function(){return m}});var s=i(5294),a=function(){var e=this,t=e._self._c;return t("div",[t(s.Z,e._l(e.app.data.deviceList,(function(e){return t(e.Options.component,{key:e.Internals.FUUID,tag:"component",attrs:{item:e}})})),1)],1)},n=[],p={name:"DevicesView",components:{templ_default:()=>Promise.all([i.e(399),i.e(445),i.e(666)]).then(i.bind(i,8666)),templ_panel:()=>Promise.all([i.e(399),i.e(630)]).then(i.bind(i,5283)),templ_chart:()=>Promise.all([i.e(399),i.e(137),i.e(270),i.e(570)]).then(i.bind(i,9860)),templ_chart2:()=>Promise.all([i.e(399),i.e(137),i.e(270),i.e(651)]).then(i.bind(i,4329)),templ_weather:()=>i.e(838).then(i.bind(i,1838)),templ_list:()=>Promise.all([i.e(399),i.e(32)]).then(i.bind(i,311)),templ_wdtimer:()=>Promise.all([i.e(399),i.e(999)]).then(i.bind(i,9950)),templ_scenes:()=>i.e(4).then(i.bind(i,7004)),templ_sonos:()=>Promise.all([i.e(399),i.e(445),i.e(454)]).then(i.bind(i,454)),templ_sysmon:()=>Promise.all([i.e(399),i.e(592)]).then(i.bind(i,8053)),templ_hmlan:()=>i.e(590).then(i.bind(i,7590)),templ_cam:()=>Promise.all([i.e(399),i.e(994)]).then(i.bind(i,2156)),templ_iframe:()=>Promise.all([i.e(399),i.e(705)]).then(i.bind(i,1998))},data:()=>({app:{session:{connect:!1},options:{mobileHeader:!1},data:{deviceList:[],header:""}}}),watch:{$route(){this.subscribe()},"app.session.ready"(e){e&&this.subscribe()}},mounted(){this.app.session=this.$fhem.app.session,this.app.options=this.$fhem.app.options,this.app.data=this.$fhem.app.data},methods:{setHeader(){(this.app.options.mobileHeader||"page"===this.app.options.mobileHeaderContent)&&("Devices"===this.$route.name?this.$route.params.filter.match("device=")?this.$fhem.app.appBar.mobileHeader="":this.$fhem.app.appBar.mobileHeader=this.$route.params.filter.split("=")[1]:this.$fhem.app.appBar.mobileHeader=this.$route.name)},subscribe(){let e=this.$route.params.filter||this.$route.path;this.setHeader(),this.$fhem.getDevices(e)}}},l=p,r=i(1001),h=(0,r.Z)(l,a,n,!1,null,null,null),m=h.exports}}]);