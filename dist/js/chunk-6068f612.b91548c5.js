(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6068f612"],{"67bf":function(e,o,t){"use strict";t.r(o);var n=function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("div",{staticClass:"editor"},[t("h1",[e._v("New Memo")]),t("textarea",{directives:[{name:"model",rawName:"v-model",value:e.memoBody,expression:"memoBody"}],attrs:{name:"memo"},domProps:{value:e.memoBody},on:{input:function(o){o.target.composing||(e.memoBody=o.target.value)}}}),t("button",{on:{click:e.save}},[e._v("保存")])])},a=[],s={name:"new",data:function(){return{memoBody:""}},methods:{save:function(){this.$store.commit("save",{body:this.memoBody}),this.$router.push("/")}}},m=s,i=(t("edef"),t("2877")),r=Object(i["a"])(m,n,a,!1,null,"5047496a",null);o["default"]=r.exports},"9f28":function(e,o,t){},edef:function(e,o,t){"use strict";var n=t("9f28"),a=t.n(n);a.a}}]);
//# sourceMappingURL=chunk-6068f612.b91548c5.js.map