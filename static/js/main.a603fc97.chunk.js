(this["webpackJsonpletters-toolbox"]=this["webpackJsonpletters-toolbox"]||[]).push([[0],{401:function(e,t,a){e.exports=a(568)},406:function(e,t,a){},568:function(e,t,a){"use strict";a.r(t);var r=a(0),c=a.n(r),n=a(18),l=a.n(n),s=(a(406),a(663)),o=a(662),i=a(14),u=a(42),m=a.n(u),d=a(94),b=a(241),E=a.n(b),p=a(242),f=a.n(p),_=a(79),g=a(57),v="Content-Range",O=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=localStorage.getItem("token");return t.headers||(t.headers=new Headers({Accept:"application/json"})),t.headers.set("Authorization","Bearer ".concat(a)),_.a.fetchJson(e,t)};function h(e,t){return j.apply(this,arguments)}function j(){return(j=Object(d.a)(m.a.mark((function e(t,a){var r,c,n,l;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=new FormData,e.t0=t,e.next="categories"===e.t0?4:"designs"===e.t0?7:"products"===e.t0?10:"packet"===e.t0?13:16;break;case 4:return r.append("type","compose"),r.append("file",a.data.img_src.rawFile),e.abrupt("break",16);case 7:return r.append("type",a.data.type),r.append("file",a.data.asset_src.rawFile),e.abrupt("break",16);case 10:return r.append("type","thumbnail"),r.append("file",a.data.thumbnail_src.rawFile),e.abrupt("break",16);case 13:return r.append("type","packet"),r.append("file",a.data.thumbnail_src.rawFile),e.abrupt("break",16);case 16:return e.next=18,E()(f.a.resolve("https://api.ameelio.org","file/upload"),{method:"POST",headers:new Headers({Accept:"application/json"}),body:r},3e4);case 18:return c=e.sent,e.next=21,c.json();case 21:if("OK"===(n=e.sent).status){e.next=24;break}throw n;case 24:return l=n.data,e.abrupt("return",l);case 26:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function y(){return(y=Object(d.a)(m.a.mark((function e(t){var a,r;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E()(f.a.resolve("https://api.ameelio.org","api/login"),{method:"POST",body:JSON.stringify(t),headers:new Headers({"Content-Type":"application/json"})},3e4);case 2:return a=e.sent,e.next=5,a.json();case 5:if("OK"===(r=e.sent).status){e.next=8;break}throw r;case 8:return e.abrupt("return",r.data);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function w(e,t,a){return k.apply(this,arguments)}function k(){return(k=Object(d.a)(m.a.mark((function e(t,a,r){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",O("".concat("https://api.ameelio.org/api/v1","/").concat(t),{method:"POST",body:JSON.stringify(a)}).then((function(e){var t=e.json;return{data:Object(i.a)(Object(i.a)({},r.data),{},{id:t.data.id})}})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function P(){return(P=Object(d.a)(m.a.mark((function e(t,a,r){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",h("packet",r).then((function(e){return w(t,Object(i.a)(Object(i.a)({},a),{},{thumbnail_src:e}),r)})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function x(e,t){return A.apply(this,arguments)}function A(){return(A=Object(d.a)(m.a.mark((function e(t,a){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",O("".concat("https://api.ameelio.org/api/v1","/").concat(t,"/").concat(a.id),{method:"PUT",body:JSON.stringify(a.data)}).then((function(e){var t=e.json;return{data:Object(i.a)(Object(i.a)({},t.data),{},{id:t.data.id})}})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function T(){return(T=Object(d.a)(m.a.mark((function e(t,a){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",h("packet",a).then((function(e){return a.data=Object(i.a)(Object(i.a)({},a.data),{},{thumbnail_src:e}),x(t,a)})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function I(){return(I=Object(d.a)(m.a.mark((function e(t,a,r){var c,n,l,s,o,i,u,d,b;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=a.pagination,n=c.page,l=c.perPage,s=a.sort,o=s.field,i=s.order,u=(n-1)*l,d=n*l-1,b={sort:JSON.stringify([o,i]),range:JSON.stringify([(n-1)*l,n*l-1])},{headers:new Headers({Range:"".concat(t,"=").concat(u,"-").concat(d)})},e.abrupt("return",O("".concat("https://api.ameelio.org/api/v1","/").concat(r,"?").concat(Object(g.stringify)(b)),{method:"GET"}).then((function(e){var t=e.headers,a=e.json;if(!t.has(v))throw new Error("The ".concat(v," header is missing in the HTTP Response. The simple REST data provider expects responses for lists of resources to contain this header with the total number of results to build the pagination. If you are using CORS, did you declare ").concat(v," in the Access-Control-Expose-Headers header?"));return{data:a.data,total:parseInt(t.get("content-range").split("/").pop(),10)}})));case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function C(){return(C=Object(d.a)(m.a.mark((function e(t,a){var r;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="credit-transactions/".concat(a.id,"/refund"),e.abrupt("return",O("".concat("https://api.ameelio.org/api/v1","/").concat(r),{method:"GET"}).then((function(e){return{data:e.json.data}})));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function S(e){return console.log("hello?"),e&&"string"!==typeof e?(console.log(e),e):(console.log("string"),{url:e})}var F={login:function(e){return function(e){return y.apply(this,arguments)}({email:e.username,password:e.password}).then((function(e){localStorage.setItem("token",e.token),localStorage.setItem("token_expires",e.api_token_expires)}))},logout:function(){return localStorage.removeItem("token"),Promise.resolve()},checkError:function(e){return 401===e.status?(localStorage.removeItem("token"),Promise.reject()):Promise.resolve()},checkAuth:function(){if(localStorage.getItem("token")){var e=new Date,t=new Date(localStorage.getItem("token_expires"));return t&&e.getTime()<t?Promise.resolve():Promise.reject()}return Promise.reject()},getPermissions:function(){return Promise.resolve()}},D=a(664),R=a(665),L=a(642),M=a(643),V=a(644),B=a(645),N=a(646),J=a(669),H=a(679),U=a(649),q=a(189),W=a(337),G=a(651),z=a(670),K=a(652),$=a(674),Q=[{id:"compose",name:"Compose"},{id:"sticker",name:"Sticker"},{id:"shop",name:"Shop"}],X=function(e){return r.createElement(D.a,e,r.createElement(R.a,null,r.createElement(L.a,{source:"id"}),r.createElement(L.a,{source:"name"}),r.createElement(L.a,{source:"type"}),r.createElement(M.a,{source:"img_src",title:"Image"}),r.createElement(V.a,{source:"active",label:"Active",render:function(e,t){return r.createElement(B.a,{record:Object(i.a)(Object(i.a)({},e),{},{active:!!e.active}),source:t})}}),r.createElement(N.a,null),r.createElement(J.a,null)))},Y=function(e){return r.createElement(H.a,e,r.createElement(U.a,null,r.createElement(q.a,{source:"name",validate:Object(W.b)()}),r.createElement(q.a,{source:"blurb"}),r.createElement(G.a,{form:S,source:"img_src",title:"img_src",label:"Image",accept:"image/*"},r.createElement(M.a,{source:"url"})),r.createElement(z.a,{label:"Premium",source:"premium"}),r.createElement(z.a,{label:"Active",source:"active"}),r.createElement(K.a,{source:"type",choices:Q})))},Z=function(e){return r.createElement($.a,e,r.createElement(U.a,null,r.createElement(q.a,{disabled:!0,label:"Id",source:"id"}),r.createElement(q.a,{source:"name",validate:Object(W.b)()}),r.createElement(q.a,{source:"blurb"}),r.createElement(z.a,{label:"Active",source:"active"}),r.createElement(z.a,{label:"Premium",source:"premium"}),r.createElement(G.a,{format:S,source:"img_src",label:"Image",accept:"image/*"},r.createElement(M.a,{source:"url"})),r.createElement(K.a,{source:"type",choices:Q})))},ee=a(133),te=a(655),ae=a(367),re=a(656),ce=a(657),ne=a(680),le=a(671),se=a(681),oe=a(675),ie=a(36),ue=a(666),me=a(678),de=function(){return r.createElement(ue.a,{label:"Active"},r.createElement(me.a,{label:"True",value:{active:!0}}),r.createElement(me.a,{label:"False",value:{active:!1}}))},be=function(){return r.createElement(ue.a,{label:"Type"},r.createElement(me.a,{label:"Postcard",value:{type:"postcard"}}),r.createElement(me.a,{label:"Packet",value:{type:"packet"}}),r.createElement(me.a,{label:"Sticker",value:{type:"sticker"}}))},Ee=a(5),pe=a(639),fe=a(579),_e=[{id:"postcard",name:"Postcard"},{id:"sticker",name:"Sticker"},{id:"packet",name:"Packet"}],ge=Object(Ee.a)((function(e){var t;return{root:(t={},Object(ee.a)(t,e.breakpoints.up("sm"),{order:-1,width:"15em",marginRight:"1em"}),Object(ee.a)(t,e.breakpoints.down("sm"),{display:"none"}),t)}}))(pe.a),ve=function(){return r.createElement(ge,null,r.createElement(fe.a,null,r.createElement(te.a,{source:"q"}),r.createElement(de,null),r.createElement(be,null)))},Oe=function(e){switch(Object(ie.f)().values.type){case"packet":return r.createElement("div",null,r.createElement(G.a,Object.assign({format:S,source:"thumbnail_src",label:"Thumbnail",accept:"image/*",validate:Object(W.b)()},e),r.createElement(M.a,{source:"url"})),r.createElement(ae.a,Object.assign({source:"asset_src",label:"PDF",accept:"application/pdf",validate:Object(W.b)()},e),r.createElement(re.a,{source:"src",title:"title"})));default:return r.createElement(G.a,Object.assign({format:S,source:"asset_src",label:"Image",accept:"image/*",validate:Object(W.b)()},e),r.createElement(M.a,{source:"url"}))}},he=function(e){return r.createElement(D.a,Object.assign({},e,{aside:r.createElement(ve,null)}),r.createElement(R.a,{rowClick:"edit"},r.createElement(L.a,{source:"id"}),r.createElement(ce.a,{source:"created_at"}),r.createElement(L.a,{source:"name"}),r.createElement(L.a,{source:"type"}),r.createElement(M.a,{source:"thumbnail_src",title:"image"}),r.createElement(ne.a,{label:"Subcategory",source:"subcategory_id",reference:"subcategories",sortBy:"name"},r.createElement(L.a,{source:"name"})),r.createElement(V.a,{source:"active",label:"Active",render:function(e,t){return r.createElement(B.a,{record:Object(i.a)(Object(i.a)({},e),{},{active:!!e.active}),source:t})}}),r.createElement(N.a,{label:"Edit"}),r.createElement(J.a,{label:"Delete"})))},je=function(e){return r.createElement($.a,e,r.createElement(U.a,null,r.createElement(q.a,{disabled:!0,label:"ID",source:"id"}),r.createElement(q.a,{source:"name",validate:Object(W.b)()}),r.createElement(K.a,{source:"type",validate:Object(W.b)(),choices:_e}),r.createElement(le.a,{label:"Subcategory",source:"subcategory_id",reference:"subcategories",perPage:100,validate:Object(W.b)()},r.createElement(K.a,{optionText:"name"})),r.createElement(z.a,{label:"Active",source:"active",defaultValue:!0}),r.createElement(le.a,{label:"Product",source:"product_id",perPage:100,reference:"products",validate:Object(W.b)()},r.createElement(K.a,{optionText:"name"})),r.createElement(q.a,{source:"blurb"}),r.createElement(Oe,null),r.createElement(se.a,{label:"Volunteers",source:"volunteer_ids",reference:"volunteers"},r.createElement(oe.a,{optionText:"first_name"}))))},ye=function(e){return r.createElement(H.a,e,r.createElement(U.a,null,r.createElement(q.a,{source:"name",validate:Object(W.b)()}),r.createElement(K.a,{source:"type",validate:Object(W.b)(),choices:_e}),r.createElement(le.a,{label:"Subcategory",source:"subcategory_id",reference:"subcategories",perPage:100,validate:Object(W.b)()},r.createElement(K.a,{optionText:"name"})),r.createElement(z.a,{label:"Active",source:"active"}),r.createElement(le.a,{label:"Product",source:"product_id",reference:"products",perPage:100,validate:Object(W.b)()},r.createElement(K.a,{optionText:"name"})),r.createElement(q.a,{source:"blurb"}),r.createElement(Oe,null),r.createElement(se.a,{label:"Volunteers",source:"volunteer_ids",reference:"volunteers"},r.createElement(oe.a,{optionText:"first_name"}))))},we=function(e){return r.createElement(D.a,e,r.createElement(R.a,{rowClick:"edit"},r.createElement(L.a,{source:"id"}),r.createElement(L.a,{source:"name"}),r.createElement(ce.a,{source:"created_at"}),r.createElement(ce.a,{source:"updated_at"}),r.createElement(ne.a,{label:"Category",source:"design_category_id",reference:"categories"},r.createElement(L.a,{source:"name"})),r.createElement(V.a,{source:"active",label:"Active",render:function(e,t){return r.createElement(B.a,{record:Object(i.a)(Object(i.a)({},e),{},{active:!!e.active}),source:t})}}),r.createElement(N.a,null),r.createElement(J.a,null)))},ke=function(e){return r.createElement($.a,e,r.createElement(U.a,null,r.createElement(q.a,{disabled:!0,source:"id"}),r.createElement(q.a,{source:"name",validate:Object(W.b)()}),r.createElement(le.a,{label:"Category",source:"design_category_id",reference:"categories",validate:Object(W.b)()},r.createElement(K.a,{optionText:"name"})),r.createElement(q.a,{source:"bg_color"}),r.createElement(z.a,{label:"Active",source:"active",defaultValue:!0})))},Pe=function(e){return r.createElement(H.a,e,r.createElement(U.a,null,r.createElement(q.a,{source:"name",validate:Object(W.b)()}),r.createElement(le.a,{label:"Category",source:"design_category_id",reference:"categories",validate:Object(W.b)()},r.createElement(K.a,{optionText:"name"})),r.createElement(q.a,{source:"bg_color"}),r.createElement(z.a,{label:"Active",source:"active",defaultValue:!0})))},xe=function(e){return r.createElement(D.a,e,r.createElement(R.a,{rowClick:"edit"},r.createElement(L.a,{source:"id"}),r.createElement(L.a,{source:"first_name"}),r.createElement(L.a,{source:"last_name"}),r.createElement(L.a,{source:"type"}),r.createElement(L.a,{source:"email"}),r.createElement(V.a,{source:"active",label:"Active",render:function(e,t){return r.createElement(B.a,{record:Object(i.a)(Object(i.a)({},e),{},{active:!!e.active}),source:t})}}),r.createElement(N.a,null),r.createElement(J.a,null)))},Ae=function(e){return r.createElement($.a,e,r.createElement(U.a,null,r.createElement(q.a,{disabled:!0,source:"id"}),r.createElement(q.a,{source:"first_name",validate:Object(W.b)()}),r.createElement(q.a,{source:"last_name",validate:Object(W.b)()}),r.createElement(K.a,{source:"type",validate:Object(W.b)(),choices:[{id:"designer",name:"Designer"},{id:"content_researcher",name:"Content Researcher"}]}),r.createElement(q.a,{source:"email",validate:Object(W.b)()}),r.createElement(z.a,{label:"Active",source:"active"})))},Te=function(e){return r.createElement(H.a,e,r.createElement(U.a,null,r.createElement(q.a,{source:"first_name",validate:Object(W.b)()}),r.createElement(q.a,{source:"last_name",validate:Object(W.b)()}),r.createElement(K.a,{source:"type",validate:Object(W.b)(),choices:[{id:"designer",name:"Designer"},{id:"content_researcher",name:"Content Researcher"}]}),r.createElement(q.a,{source:"email",validate:Object(W.b)()}),r.createElement(z.a,{label:"Active",source:"active"})))},Ie=a(672),Ce=a(667),Se=a(682),Fe=a(676),De=a(654),Re=a(368),Le=a(82),Me=a(32),Ve=a(347),Be=function(e,t,a){return"/orgs/".concat(a.org_id)},Ne=function(e){return r.createElement($.a,e,r.createElement(U.a,{redirect:Be},r.createElement(L.a,{source:"id"}),r.createElement(L.a,{source:"name"}),r.createElement(L.a,{label:"Org ID",source:"org_id"}),r.createElement(L.a,{label:"User ID",source:"user_id"}),r.createElement(L.a,{source:"email"}),r.createElement(K.a,{source:"role",choices:[{id:"member",name:"Member"},{id:"admin",name:"Admin"}]})))},Je=function(e){return r.createElement(H.a,e,r.createElement(U.a,{redirect:Be},r.createElement(q.a,{source:"org_id"}),r.createElement(q.a,{source:"user_email"}),r.createElement(K.a,{source:"role",choices:[{id:"member",name:"Member"},{id:"admin",name:"Admin"}]})))},He=function(e){var t=e.source,a=e.record,c=void 0===a?{}:a;return r.createElement("a",{href:"https://dashboard.lob.com/#/letters/"+c[t]},c[t])};He.defaultProps={label:"Lob ID"};var Ue=function(e){var t=e.record,a=Object(Le.a)({type:"refundTransaction",resource:"credit-transactions",payload:{id:t.id}}),c=Object(Re.a)(a,1)[0];return r.createElement(Me.a,{label:"Refund",onClick:c})},qe=function(e){var t=e.record;return r.createElement(Me.a,{component:Ve.a,to:{pathname:"/org-users/create",state:{record:{org_id:t.id}}},label:"Add Org User"})},We=function(e){var t=e.record;return r.createElement(Me.a,{component:Ve.a,to:{pathname:"/credit-transactions/create",state:{record:{user_id:t.id}}},label:"Add Credit Transaction"})},Ge=function(e){return r.createElement(Ie.a,e,r.createElement(q.a,{label:"Search",source:"q",alwaysOn:!0}))},ze=[{id:"Ameelio Ambassador",name:"Heard from an Ameelio Ambassador"},{id:"Recommendation from Friends or Family",name:"Recommendation from Friends or Family"},{id:"Incarcerated Loved-One",name:"Incarcerated Loved-One"},{id:"Facebook/Instagram",name:"Facebook/Instagram"},{id:"News/Radio/TV",name:"News/Radio/TV"},{id:"Internet search",name:"Internet search"},{id:"Other",name:"Other"}],Ke=function(e){return r.createElement(D.a,Object.assign({filters:r.createElement(Ge,null)},e),r.createElement(R.a,{rowClick:"edit"},r.createElement(L.a,{source:"id"}),r.createElement(L.a,{source:"first_name"}),r.createElement(L.a,{source:"last_name"}),r.createElement(L.a,{source:"email"}),r.createElement(V.a,{label:"Address",render:function(e){return"".concat(e.addr_line_1," ").concat(e.addr_line_2," ").concat(e.city,", ").concat(e.state," ").concat(e.postal)}}),r.createElement(N.a,null)))},$e=function(e){return r.createElement($.a,e,r.createElement(Ce.a,null,r.createElement(Se.a,{label:"user info"},r.createElement(q.a,{disabled:!0,source:"id"}),r.createElement(q.a,{source:"first_name",validate:Object(W.b)()}),r.createElement(q.a,{source:"last_name",validate:Object(W.b)()}),r.createElement(q.a,{source:"email",validate:Object(W.b)()}),r.createElement(q.a,{source:"addr_line_1",validate:Object(W.b)()}),r.createElement(q.a,{source:"addr_line_2"}),r.createElement(q.a,{source:"city",validate:Object(W.b)()}),r.createElement(q.a,{source:"state",validate:Object(W.b)()}),r.createElement(q.a,{source:"postal",validate:Object(W.b)()}),r.createElement(q.a,{source:"country",validate:Object(W.b)()}),r.createElement(q.a,{label:"Credits",source:"credit",validate:Object(W.b)()}),r.createElement(q.a,{lavel:"Tokens",source:"coins",validate:Object(W.b)()}),r.createElement(q.a,{source:"credit_reset",validate:Object(W.b)()}),r.createElement(K.a,{disabled:!0,source:"referer",choices:ze})),r.createElement(Se.a,{label:"Contacts"},r.createElement(Fe.a,{reference:"contacts",label:"Contacts",target:"_nested_users_id"},r.createElement(R.a,{rowClick:"edit"},r.createElement(L.a,{source:"id"}),r.createElement(L.a,{source:"first_name"}),r.createElement(L.a,{source:"last_name"}),r.createElement(L.a,{source:"facility_name"}),r.createElement(V.a,{label:"Facility Address",render:function(e){return"".concat(e.facility_address," ").concat(e.facility_city,", ").concat(e.facility_state," ").concat(e.facility_postal)}}),r.createElement(L.a,{source:"inmate_number"}),r.createElement(L.a,{source:"relationship"}),r.createElement(N.a,null),r.createElement(J.a,null)))),r.createElement(Se.a,{label:"Mail"},r.createElement(Fe.a,{reference:"mail",label:"Mail",target:"_nested_users_id"},r.createElement(R.a,null,r.createElement(L.a,{source:"id"}),r.createElement(He,{source:"lob_id"}),r.createElement(L.a,{source:"created_at"}),r.createElement(L.a,{source:"contact_name"}),r.createElement(L.a,{source:"status"}),r.createElement(ne.a,{label:"Contact",source:"contact_id",reference:"contacts"},r.createElement(V.a,{render:function(e){return"".concat(e.first_name," ").concat(e.last_name)}})),r.createElement(De.a,null)))),r.createElement(Se.a,{label:"Transactions"},r.createElement(We,null),r.createElement(Fe.a,{reference:"credit-transactions",label:"Credit Transactions",target:"_nested_users_id"},r.createElement(R.a,null,r.createElement(L.a,{source:"id"}),r.createElement(L.a,{source:"created_at"}),r.createElement(L.a,{source:"type"}),r.createElement(L.a,{source:"status"}),r.createElement(V.a,{source:"premium",label:"Premium",render:function(e,t){return r.createElement(B.a,{record:Object(i.a)(Object(i.a)({},e),{},{premium:!!e.premium}),source:t})}}),r.createElement(L.a,{source:"price"}),r.createElement(L.a,{label:"Mail ID",source:"letter_id"}),r.createElement(Ue,null))),r.createElement(Fe.a,{reference:"stripe-transactions",label:"Stripe Transactions",target:"_nested_users_id"},r.createElement(R.a,null,r.createElement(L.a,{source:"id"}),r.createElement(L.a,{source:"amount"}),r.createElement(L.a,{source:"status"}),r.createElement(ne.a,{source:"pack_id",reference:"packs",label:"Pack"},r.createElement(L.a,{source:"name"})))))))},Qe=a(658),Xe=function(e){return r.createElement(D.a,e,r.createElement(R.a,null,r.createElement(L.a,{source:"id"}),r.createElement(L.a,{source:"name"}),r.createElement(L.a,{source:"price"}),r.createElement(M.a,{source:"thumbnail_src",title:"image"}),r.createElement(V.a,{source:"premium",label:"Premium",render:function(e,t){return r.createElement(B.a,{record:Object(i.a)(Object(i.a)({},e),{},{premium:!!e.premium}),source:t})}}),r.createElement(N.a,null)))},Ye=function(e){return r.createElement(H.a,e,r.createElement(U.a,null,r.createElement(q.a,{source:"name",validate:Object(W.b)()}),r.createElement(Qe.a,{source:"price",validate:Object(W.b)()}),r.createElement(G.a,{form:S,source:"thumbnail_src",title:"thumbnail_src",label:"Image",accept:"image/*"},r.createElement(M.a,{source:"url"})),r.createElement(z.a,{label:"Premium",source:"premium",defaultValue:!1})))},Ze=function(e){return r.createElement($.a,e,r.createElement(U.a,null,r.createElement(q.a,{disabled:!0,label:"ID",source:"id"}),r.createElement(q.a,{source:"name",validate:Object(W.b)()}),r.createElement(q.a,{source:"price",validate:Object(W.b)()}),r.createElement(G.a,{form:S,source:"thumbnail_src",title:"thumbnail_src",label:"Image",accept:"image/*"},r.createElement(M.a,{source:"url"})),r.createElement(z.a,{label:"Premium",source:"premium"})))},et=a(659),tt=function(e){return r.createElement(Ie.a,e,r.createElement(et.a,{source:"q",alwaysOn:!0}))},at=function(e){return r.createElement(D.a,Object.assign({},e,{filters:r.createElement(tt,null)}),r.createElement(R.a,{rowClick:"edit"},r.createElement(L.a,{source:"id"}),r.createElement(L.a,{source:"full_name"}),r.createElement(L.a,{source:"address"}),r.createElement(L.a,{source:"city"}),r.createElement(L.a,{source:"state"}),r.createElement(L.a,{source:"postal"}),r.createElement(L.a,{source:"type"}),r.createElement(L.a,{source:"phone"}),r.createElement(N.a,null),r.createElement(J.a,null)))},rt=function(e){return r.createElement($.a,e,r.createElement(U.a,null,r.createElement(q.a,{disabled:!0,source:"id"}),r.createElement(q.a,{source:"name"}),r.createElement(q.a,{source:"full_name"}),r.createElement(q.a,{source:"address"}),r.createElement(q.a,{source:"city"}),r.createElement(q.a,{source:"state"}),r.createElement(q.a,{source:"postal"}),r.createElement(q.a,{source:"type"}),r.createElement(z.a,{label:"Federal",source:"federal"}),r.createElement(q.a,{source:"phone"}),r.createElement(q.a,{source:"link"}),r.createElement(q.a,{source:"unique"})))},ct=function(e){return r.createElement(H.a,e,r.createElement(U.a,null,r.createElement(q.a,{source:"name",validate:Object(W.b)()}),r.createElement(q.a,{source:"full_name",validate:Object(W.b)()}),r.createElement(q.a,{source:"address",validate:Object(W.b)()}),r.createElement(q.a,{source:"city",validate:Object(W.b)()}),r.createElement(q.a,{source:"state",validate:Object(W.b)()}),r.createElement(q.a,{source:"postal",validate:Object(W.b)()}),r.createElement(q.a,{source:"type"}),r.createElement(z.a,{label:"Federal",source:"federal"}),r.createElement(q.a,{source:"phone"}),r.createElement(q.a,{source:"link"}),r.createElement(q.a,{source:"unique"})))},nt=function(e){return r.createElement(Ie.a,e,r.createElement(q.a,{label:"Search",source:"q",alwaysOn:!0}))},lt=function(e){return r.createElement(D.a,Object.assign({filters:r.createElement(nt,null)},e),r.createElement(R.a,{rowClick:"edit"},r.createElement(L.a,{source:"id"}),r.createElement(L.a,{source:"name"}),r.createElement(L.a,{source:"business_name"}),r.createElement(L.a,{label:"EIN",source:"ein"}),r.createElement(V.a,{label:"Address",render:function(e){return"".concat(e.address_line_1," ").concat(e.address_line_2," ").concat(e.city,", ").concat(e.state," ").concat(e.postal)}}),r.createElement(N.a,null),r.createElement(J.a,null)))},st=function(e){return r.createElement($.a,e,r.createElement(Ce.a,null,r.createElement(Se.a,{label:"Org info"},r.createElement(q.a,{disabled:!0,label:"ID",source:"id"}),r.createElement(q.a,{source:"name",validate:Object(W.b)()}),r.createElement(q.a,{label:"Business Name",source:"business_name",validate:Object(W.b)()}),r.createElement(q.a,{source:"ein",validate:Object(W.b)()}),r.createElement(q.a,{label:"Address Line 1",source:"address_line_1",validate:Object(W.b)()}),r.createElement(q.a,{label:"Address Line 2",source:"address_line_2"}),r.createElement(q.a,{source:"city",validate:Object(W.b)()}),r.createElement(q.a,{source:"state",validate:Object(W.b)()}),r.createElement(q.a,{source:"postal",validate:Object(W.b)()}),r.createElement(q.a,{source:"website",validate:Object(W.b)()}),r.createElement(q.a,{label:"Color First Page",source:"color_first_page_price"}),r.createElement(q.a,{label:"Color Extra Page",source:"color_extra_page_price"}),r.createElement(q.a,{label:"B&W First Page",source:"bw_first_page_price"}),r.createElement(q.a,{label:"B&W Extra Page",source:"bw_extra_page_price"}),r.createElement(z.a,{label:"Legal",source:"is_legal"})),r.createElement(Se.a,{label:"Contacts"},r.createElement(Fe.a,{reference:"contacts",label:"Contacts",target:"_nested_orgs_id"},r.createElement(R.a,null,r.createElement(L.a,{source:"id"}),r.createElement(L.a,{source:"first_name"}),r.createElement(L.a,{source:"last_name"}),r.createElement(L.a,{source:"facility_name"}),r.createElement(V.a,{label:"Facility Address",render:function(e){return"".concat(e.facility_address," ").concat(e.facility_city,", ").concat(e.facility_state," ").concat(e.facility_postal)}}),r.createElement(N.a,null),r.createElement(J.a,null)))),r.createElement(Se.a,{label:"Volunteers"},r.createElement(qe,null),r.createElement(Fe.a,{reference:"org-users",label:"Users",target:"_nested_orgs_id"},r.createElement(R.a,null,r.createElement(L.a,{source:"id"}),r.createElement(L.a,{source:"name"}),r.createElement(L.a,{source:"role"}),r.createElement(L.a,{source:"email"}),r.createElement(N.a,null))))))},ot=function(e){return r.createElement(H.a,e,r.createElement(U.a,null,r.createElement(q.a,{disabled:!0,label:"ID",source:"id"}),r.createElement(q.a,{source:"name",validate:Object(W.b)()}),r.createElement(q.a,{label:"Business Name",source:"business_name",validate:Object(W.b)()}),r.createElement(q.a,{source:"ein",validate:Object(W.b)()}),r.createElement(q.a,{label:"Address Line 1",source:"address_line_1",validate:Object(W.b)()}),r.createElement(q.a,{label:"Address Line 2",source:"address_line_2"}),r.createElement(q.a,{source:"city",validate:Object(W.b)()}),r.createElement(q.a,{source:"state",validate:Object(W.b)()}),r.createElement(q.a,{source:"postal",validate:Object(W.b)()}),r.createElement(q.a,{source:"website",validate:Object(W.b)()}),r.createElement(q.a,{label:"Color First Page",source:"color_first_page_price"}),r.createElement(q.a,{label:"Color Extra Page",source:"color_extra_page_price"}),r.createElement(q.a,{label:"B&W First Page",source:"bw_first_page_price"}),r.createElement(q.a,{label:"B&W Extra Page",source:"bw_extra_page_price"}),r.createElement(z.a,{label:"Legal",source:"is_legal"})))},it=a(677),ut=a(660),mt=a(683),dt=a(661),bt=function(e){return r.createElement(it.a,e,r.createElement(ut.a,null,r.createElement(L.a,{source:"id"}),r.createElement(He,{label:"Lob ID",source:"lob_id"}),r.createElement(ce.a,{label:"Last Lob Status Update",source:"last_lob_status_update"}),r.createElement(ce.a,{source:"estimated_arrival"}),r.createElement(L.a,{label:"Lob Status",source:"lob_status"}),r.createElement(L.a,{source:"type"}),r.createElement(mt.a,{label:"View PDF",source:"pdf_url"}),r.createElement(ne.a,{label:"To",source:"contact_id",reference:"contacts"},r.createElement(V.a,{render:function(e){return"".concat(e.first_name," ").concat(e.last_name)}})),r.createElement(ne.a,{label:"Facility Address",source:"contact_id",reference:"contacts"},r.createElement(V.a,{label:"Facility Address",render:function(e){return"".concat(e.facility_address," ").concat(e.facility_city,", ").concat(e.facility_state," ").concat(e.facility_postal)}})),r.createElement(ne.a,{label:"From",source:"user_id",reference:"users"},r.createElement(V.a,{render:function(e){return"".concat(e.first_name," ").concat(e.last_name)}})),r.createElement(ne.a,{label:"Return Address",source:"user_id",reference:"users"},r.createElement(V.a,{render:function(e){return"".concat(e.addr_line_1," ").concat(e.addr_line_2," ").concat(e.city,", ").concat(e.state," ").concat(e.postal)}})),r.createElement(dt.a,{source:"products"},r.createElement(R.a,null,r.createElement(L.a,{source:"id"}),r.createElement(L.a,{source:"name"}),r.createElement(V.a,{source:"premium",label:"Premium",render:function(e,t){return r.createElement(B.a,{record:Object(i.a)(Object(i.a)({},e),{},{premium:!!e.premium}),source:t})}}),r.createElement(L.a,{source:"price"}))),r.createElement(L.a,{source:"page_count"})))},Et=function(e){return r.createElement($.a,e,r.createElement(U.a,null,r.createElement(q.a,{disabled:!0,source:"id"}),r.createElement(q.a,{source:"first_name",validate:Object(W.b)()}),r.createElement(q.a,{source:"middle_name"}),r.createElement(q.a,{source:"last_name",validate:Object(W.b)()}),r.createElement(q.a,{source:"inmate_number",validate:Object(W.b)()}),r.createElement(q.a,{source:"facility_name",validate:Object(W.b)()}),r.createElement(q.a,{source:"facility_address",validate:Object(W.b)()}),r.createElement(q.a,{label:"Facility Unit",source:"unit"}),r.createElement(q.a,{label:"Facility Dorm",source:"dorm"}),r.createElement(q.a,{source:"facility_city",validate:Object(W.b)()}),r.createElement(q.a,{source:"facility_state",validate:Object(W.b)()}),r.createElement(q.a,{source:"facility_postal",validate:Object(W.b)()})))},pt=function(e){return r.createElement(H.a,e,r.createElement(U.a,null,r.createElement(q.a,{source:"user_id"}),r.createElement(K.a,{source:"type",choices:[{id:"gift",name:"Gift"},{id:"referral",name:"Referral"}]}),r.createElement(q.a,{source:"price"}),r.createElement(z.a,{label:"Premium",source:"premium",defaultValue:!1})))},ft=a(353),_t=Object(ft.a)("https://api.ameelio.org/api/v1",O),gt=Object(i.a)(Object(i.a)({},_t),{},{getList:function(e,t){return _t.getList(e,t).then((function(e){return{data:e.data.data,total:e.total}}))},getOne:function(e,t){return _t.getOne(e,t).then((function(e){return{data:e.data.data}}))},getMany:function(e,t){return _t.getMany(e,t).then((function(e){return{data:e.data.data}}))},getManyReference:function(e,t){var a=/_nested_(.*)_id/g.exec(t.target);return null!=a?function(e,t,a){return I.apply(this,arguments)}(e,t,"".concat(a[1],"/").concat(t.id,"/").concat(e)):_t.getManyReference(e,t).then((function(e){return{data:e.data.data,total:e.total}}))},update:function(e,t){if(!t.data.thumbnail_src&&!t.data.img_src&&!t.data.asset_src)return _t.update(e,t);switch(e){case"categories":return"string"===typeof t.data.img_src?_t.update(e,t):h(e,t).then((function(a){return t.data=Object(i.a)(Object(i.a)({},t.data),{},{img_src:a}),_t.update(e,t)}));case"products":return"string"===typeof t.data.thumbnail_src?_t.update(e,t):h(e,t).then((function(a){return t.data=Object(i.a)(Object(i.a)({},t.data),{},{thumbnail_src:a}),_t.update(e,t)}));case"designs":return"packet"===t.data.type?"string"===typeof t.data.asset_src&&"string"===typeof t.data.thumbnail_src?_t.update(e,t):"string"===typeof t.data.asset_src&&"string"!==typeof t.data.thumbnail_src?h("packet",t).then((function(a){return t.data=Object(i.a)(Object(i.a)({},t.data),{},{thumbnail_src:a}),_t.update(e,t)})):"string"!==typeof t.data.asset_src&&"string"===typeof t.data.thumbnail_src?h(e,t).then((function(a){return t.data=Object(i.a)(Object(i.a)({},t.data),{},{asset_src:a}),_t.update(e,t)})):h(e,t).then((function(a){return t.data=Object(i.a)(Object(i.a)({},t.data),{},{asset_src:a}),function(e,t){return T.apply(this,arguments)}(e,t)})):"string"===typeof t.data.asset_src?_t.update(e,t):h(e,t).then((function(a){return t.data=Object(i.a)(Object(i.a)({},t.data),{},{asset_src:a}),_t.update(e,t)}))}},create:function(e,t){return t.data.img_src||t.data.asset_src||t.data.thumbnail_src?h(e,t).then((function(a){switch(e){case"categories":return w(e,Object(i.a)(Object(i.a)({},t.data),{},{img_src:a}),t);case"designs":return"packet"===t.data.type?function(e,t,a){return P.apply(this,arguments)}(e,Object(i.a)(Object(i.a)({},t.data),{},{asset_src:a}),t):w(e,Object(i.a)(Object(i.a)({},t.data),{},{asset_src:a}),t);case"products":return w(e,Object(i.a)(Object(i.a)({},t.data),{},{thumbnail_src:a}),t)}})):w(e,t.data,t)},refundTransaction:function(e,t){return function(e,t){return C.apply(this,arguments)}(e,t)}}),vt=a(196),Ot=a(195),ht=Object(vt.a)((function(){return Ot.a}),"en",{allowMissing:!0}),jt=function(){return r.createElement(s.a,{authProvider:F,dataProvider:gt,i18nProvider:ht},r.createElement(o.a,{name:"designs",options:{label:"Designs"},list:he,edit:je,create:ye}),r.createElement(o.a,{name:"categories",options:{label:"Categories"},list:X,edit:Z,create:Y}),r.createElement(o.a,{name:"subcategories",options:{label:"Subcategories"},list:we,edit:ke,create:Pe}),r.createElement(o.a,{name:"volunteers",options:{label:"Volunteers"},list:xe,edit:Ae,create:Te}),r.createElement(o.a,{name:"products",options:{label:"Products"},list:Xe,edit:Ze,create:Ye}),r.createElement(o.a,{name:"users",options:{label:"Users"},list:Ke,edit:$e}),r.createElement(o.a,{name:"facilities",options:{label:"Facilities"},list:at,edit:rt,create:ct}),r.createElement(o.a,{name:"orgs",options:{label:"Organizations"},list:lt,edit:st,create:ot}),r.createElement(o.a,{name:"mail",options:{label:"Mail"},show:bt}),r.createElement(o.a,{name:"packs"}),r.createElement(o.a,{name:"contacts",edit:Et}),r.createElement(o.a,{name:"org-users",edit:Ne,create:Je}),r.createElement(o.a,{name:"credit-transactions",create:pt}),r.createElement(o.a,{name:"stripe-transactions"}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(jt,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[401,1,2]]]);
//# sourceMappingURL=main.a603fc97.chunk.js.map