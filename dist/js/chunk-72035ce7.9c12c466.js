(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-72035ce7"],{"399d":function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-tabs",{model:{value:e.active,callback:function(t){e.active=t},expression:"active"}},[a("el-tab-pane",{staticStyle:{"margin-top":"1rem"},attrs:{label:"inactive",name:"first"}},[a("div",{staticClass:"tableStyle",staticStyle:{"margin-bottom":"1rem"}},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.inactiveData,align:"center"}},[a("el-table-column",{attrs:{prop:"name",label:"Name"}}),a("el-table-column",{attrs:{prop:"email",label:"Email"}}),a("el-table-column",{attrs:{label:"status",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-row",{staticClass:"mySwitch"},[a("el-switch",{staticClass:"mySwitch",attrs:{disabled:t.row.enabled,width:"3rem","active-color":"#409EFF","active-text":"active","inactive-text":"inactive","inactive-color":"#EBEEF5"},on:{change:function(a){return e.changeActtive(t.row.cla_org_id,t.row.email,t.row.enabled)}},model:{value:t.row.enabled,callback:function(a){e.$set(t.row,"enabled",a)},expression:"scope.row.enabled"}})],1)]}}])})],1)],1)]),a("el-tab-pane",{staticStyle:{"margin-top":"1rem"},attrs:{label:"active",name:"second"}},[a("div",{staticClass:"tableStyle",staticStyle:{"margin-bottom":"1rem"}},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.activeData,align:"center"}},[a("el-table-column",{attrs:{prop:"name",label:"Name"}}),a("el-table-column",{attrs:{prop:"email",label:"Email"}}),a("el-table-column",{attrs:{label:"status",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-row",{staticClass:"mySwitch"},[a("el-switch",{staticClass:"mySwitch",attrs:{disabled:t.row.enabled,width:"3rem","active-color":"#409EFF","active-text":"active","inactive-text":"inactive","inactive-color":"#EBEEF5"},on:{change:function(a){return e.changeActtive(t.row.cla_org_id,t.row.email,t.row.enabled)}},model:{value:t.row.enabled,callback:function(a){e.$set(t.row,"enabled",a)},expression:"scope.row.enabled"}})],1)]}}])})],1)],1)])],1)],1)},l=[],n=(a("4160"),a("159b"),a("221d")),o={name:"EmployeeList",data:function(){return{active:"first",inactiveData:[{id:0,name:"jack",email:"10577507@qq.com",isUsed:!1},{id:1,name:"Rose",email:"105507@163.com",isUsed:!1}],activeData:[{id:0,name:"tom",email:"10577507@qq.com",isUsed:!0},{id:1,name:"helen",email:"105507@163.com",isUsed:!0}]}},methods:{changeActtive:function(e,t,a){var i=this,l={cla_org_id:e,email:t,enabled:a};this.$axios({url:"/api".concat(n["m"]),method:"put",data:l}).then((function(e){console.log(e),i.getEmployee()})).catch((function(e){console.log(e)}))},getEmployee:function(){var e=this,t={platform:this.$store.state.repoInfo.platform,repo_id:this.$store.state.repoInfo.repo_id,org_id:this.$store.state.repoInfo.org_id,corporation_email:this.$store.state.loginInfo.email};this.$axios({url:"/api"+n["y"],params:t}).then((function(t){e.inactiveData=[],e.activeData=[],console.log(t),t.data.forEach((function(t,a){!1===t.enabled?e.inactiveData.push(t):e.activeData.push(t)}))})).catch((function(e){console.log(e)}))}},created:function(){this.getEmployee()}},c=o,s=(a("f34e"),a("2877")),r=Object(s["a"])(c,i,l,!1,null,"a968b566",null);t["default"]=r.exports},"434b":function(e,t,a){},f34e:function(e,t,a){"use strict";var i=a("434b"),l=a.n(i);l.a}}]);
//# sourceMappingURL=chunk-72035ce7.9c12c466.js.map