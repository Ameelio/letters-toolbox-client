(this["webpackJsonpletters-toolbox"]=this["webpackJsonpletters-toolbox"]||[]).push([[0],{398:function(e,t,a){e.exports=a(566)},403:function(e,t,a){},566:function(e,t,a){"use strict";a.r(t);var r=a(0),c=a.n(r),n=a(18),l=a.n(n),o=(a(403),a(661)),s=a(660),i=a(11),u=a(42),m=a.n(u),d=a(94),b=a(241),E=a.n(b),p=a(242),f=a.n(p),_=a(79),g=a(57),v="Content-Range",O=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=localStorage.getItem("token");return t.headers||(t.headers=new Headers({Accept:"application/json"})),t.headers.set("Authorization","Bearer ".concat(a)),_.a.fetchJson(e,t)};function j(e,t){return h.apply(this,arguments)}function h(){return(h=Object(d.a)(m.a.mark((function e(t,a){var r,c,n,l;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=new FormData,e.t0=t,e.next="categories"===e.t0?4:"designs"===e.t0?7:"products"===e.t0?10:"packet"===e.t0?13:16;break;case 4:return r.append("type","compose"),r.append("file",a.data.img_src.rawFile),e.abrupt("break",17);case 7:return r.append("type",a.data.type),r.append("file",a.data.asset_src.rawFile),e.abrupt("break",17);case 10:return r.append("type","thumbnail"),r.append("file",a.data.thumbnail_src.rawFile),e.abrupt("break",17);case 13:return r.append("type","packet"),r.append("file",a.data.thumbnail_src.rawFile),e.abrupt("break",17);case 16:return e.abrupt("break",17);case 17:return e.next=19,E()(f.a.resolve("https://api.ameelio.org/","file/upload"),{method:"POST",headers:new Headers({Accept:"application/json"}),body:r},3e4);case 19:return c=e.sent,e.next=22,c.json();case 22:if("OK"===(n=e.sent).status){e.next=25;break}throw n;case 25:return l=n.data,e.abrupt("return",l);case 27:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function y(){return(y=Object(d.a)(m.a.mark((function e(t){var a,r;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E()(f.a.resolve("https://api.ameelio.org/","api/login"),{method:"POST",body:JSON.stringify(t),headers:new Headers({"Content-Type":"application/json"})},3e4);case 2:return a=e.sent,e.next=5,a.json();case 5:if("OK"===(r=e.sent).status){e.next=8;break}throw r;case 8:return e.abrupt("return",r.data);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function k(e,t,a){return w.apply(this,arguments)}function w(){return(w=Object(d.a)(m.a.mark((function e(t,a,r){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",O("".concat("https://api.ameelio.org/api/v1","/").concat(t),{method:"POST",body:JSON.stringify(a)}).then((function(e){var t=e.json;return{data:Object(i.a)(Object(i.a)({},r.data),{},{id:t.data.id})}})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function P(){return(P=Object(d.a)(m.a.mark((function e(t,a,r){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",j("packet",r).then((function(e){return k(t,Object(i.a)(Object(i.a)({},a),{},{thumbnail_src:e}),r)})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function x(e,t){return S.apply(this,arguments)}function S(){return(S=Object(d.a)(m.a.mark((function e(t,a){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",O("".concat("https://api.ameelio.org/api/v1","/").concat(t,"/").concat(a.id),{method:"PUT",body:JSON.stringify(a.data)}).then((function(e){var t=e.json;return{data:Object(i.a)(Object(i.a)({},t.data),{},{id:t.data.id})}})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function A(){return(A=Object(d.a)(m.a.mark((function e(t,a){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",j("packet",a).then((function(e){return a.data=Object(i.a)(Object(i.a)({},a.data),{},{thumbnail_src:e}),x(t,a)})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function T(){return(T=Object(d.a)(m.a.mark((function e(t,a,r){var c,n,l,o,s,i,u,d,b;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=a.pagination,n=c.page,l=c.perPage,o=a.sort,s=o.field,i=o.order,u=(n-1)*l,d=n*l-1,b={sort:JSON.stringify([s,i]),range:JSON.stringify([u,d])},e.abrupt("return",O("".concat("https://api.ameelio.org/api/v1","/").concat(r,"?").concat(Object(g.stringify)(b)),{method:"GET"}).then((function(e){var t=e.headers,a=e.json;if(!t.has(v))throw new Error("The ".concat(v," header is missing in the HTTP Response. The simple REST data provider expects responses for lists of resources to contain this header with the total number of results to build the pagination. If you are using CORS, did you declare ").concat(v," in the Access-Control-Expose-Headers header?"));return{data:a.data,total:parseInt(t.get("content-range").split("/").pop(),10)}})));case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function C(){return(C=Object(d.a)(m.a.mark((function e(t,a){var r;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="credit-transactions/".concat(a.id,"/refund"),e.abrupt("return",O("".concat("https://api.ameelio.org/api/v1","/").concat(r),{method:"GET"}).then((function(e){return{data:e.json.data}})));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function I(e){return console.log("hello?"),e&&"string"!==typeof e?(console.log(e),e):(console.log("string"),{url:e})}var F={login:function(e){return function(e){return y.apply(this,arguments)}({email:e.username,password:e.password}).then((function(e){localStorage.setItem("token",e.token),localStorage.setItem("token_expires",e.api_token_expires)}))},logout:function(){return localStorage.removeItem("token"),Promise.resolve()},checkError:function(e){return 401===e.status?(localStorage.removeItem("token"),Promise.reject()):Promise.resolve()},checkAuth:function(){if(localStorage.getItem("token")){var e=new Date,t=new Date(localStorage.getItem("token_expires"));return t&&e.getTime()<t?Promise.resolve():Promise.reject()}return Promise.reject()},getPermissions:function(){return Promise.resolve()}},D=a(670),V=a(183),R=a(634),L=a(662),M=a(663),N=a(641),B=a(642),q=a(643),U=a(644),J=a(645),H=a(667),W=a(677),G=a(648),$=a(326),z=a(650),K=a(668),Q=a(672),X=a(635),Y=a(577),Z=a(664),ee=a(676),te=function(){return r.createElement(Z.a,{label:"Active"},r.createElement(ee.a,{label:"True",value:{active:!0}}),r.createElement(ee.a,{label:"False",value:{active:!1}}))},ae=function(){return r.createElement(Z.a,{label:"Color"},r.createElement(ee.a,{label:"True",value:{color:!0}}),r.createElement(ee.a,{label:"False",value:{color:!1}}))},re=function(){return r.createElement(Z.a,{label:"Type"},r.createElement(ee.a,{label:"Postcard",value:{type:"postcard"}}),r.createElement(ee.a,{label:"Packet",value:{type:"packet"}}),r.createElement(ee.a,{label:"Sticker",value:{type:"sticker"}}))},ce=[{id:"compose",name:"Compose"},{id:"sticker",name:"Sticker"},{id:"shop",name:"Shop"}],ne=function(e){return r.createElement(D.a,e,r.createElement(V.a,{label:"Search",source:"q",alwaysOn:!0}),r.createElement(R.a,{source:"type",choices:ce}))},le=function(e){return r.createElement(X.a,null,r.createElement(Y.a,null,r.createElement(te,null)))},oe=function(e){return r.createElement(L.a,Object.assign({},e,{aside:r.createElement(le,null),filters:r.createElement(ne,null)}),r.createElement(M.a,null,r.createElement(N.a,{source:"id"}),r.createElement(N.a,{source:"name"}),r.createElement(N.a,{source:"type"}),r.createElement(B.a,{source:"img_src",title:"Image"}),r.createElement(q.a,{source:"active",label:"Active",render:function(e,t){return r.createElement(U.a,{record:Object(i.a)(Object(i.a)({},e),{},{active:!!e.active}),source:t})}}),r.createElement(J.a,null),r.createElement(H.a,null)))},se=function(e){return r.createElement(W.a,e,r.createElement(G.a,null,r.createElement(V.a,{source:"name",validate:Object($.b)()}),r.createElement(V.a,{source:"blurb"}),r.createElement(z.a,{form:I,source:"img_src",title:"img_src",label:"Image",accept:"image/*"},r.createElement(B.a,{source:"url"})),r.createElement(K.a,{label:"Premium",source:"premium"}),r.createElement(K.a,{label:"Active",source:"active"}),r.createElement(R.a,{source:"type",choices:ce})))},ie=function(e){return r.createElement(Q.a,e,r.createElement(G.a,null,r.createElement(V.a,{disabled:!0,label:"Id",source:"id"}),r.createElement(V.a,{source:"name",validate:Object($.b)()}),r.createElement(V.a,{source:"blurb"}),r.createElement(K.a,{label:"Active",source:"active"}),r.createElement(K.a,{label:"Premium",source:"premium"}),r.createElement(z.a,{format:I,source:"img_src",label:"Image",accept:"image/*"},r.createElement(B.a,{source:"url"})),r.createElement(R.a,{source:"type",choices:ce})))},ue=a(133),me=a(669),de=a(678),be=a(673),Ee=a(653),pe=a(364),fe=a(654),_e=a(655),ge=a(679),ve=a(36),Oe=a(5),je=[{id:"postcard",name:"Postcard"},{id:"sticker",name:"Sticker"},{id:"packet",name:"Packet"}],he=Object(Oe.a)((function(e){var t;return{root:(t={},Object(ue.a)(t,e.breakpoints.up("sm"),{order:-1,width:"15em",marginRight:"1em"}),Object(ue.a)(t,e.breakpoints.down("sm"),{display:"none"}),t)}}))(X.a),ye=function(e){return r.createElement(D.a,e,r.createElement(V.a,{label:"Design Name",source:"name",defaultValue:""}),r.createElement(me.a,{label:"Product",source:"product_id",perPage:100,reference:"products",validate:Object($.b)()},r.createElement(R.a,{optionText:"name"})),r.createElement(me.a,{label:"Subcategory",source:"subcategory_id",reference:"subcategories",perPage:100,validate:Object($.b)()},r.createElement(R.a,{optionText:"name"})),r.createElement(de.a,{label:"Volunteers",source:"volunteer_ids",reference:"volunteers"},r.createElement(be.a,{optionText:"first_name"})))},ke=function(e){return r.createElement(he,null,r.createElement(Y.a,null,r.createElement(Ee.a,{source:"q"}),r.createElement(te,null),r.createElement(re,null),r.createElement(ae,null)))},we=function(e){switch(Object(ve.f)().values.type){case"packet":return r.createElement("div",null,r.createElement(z.a,Object.assign({format:I,source:"thumbnail_src",label:"Thumbnail",accept:"image/*",validate:Object($.b)()},e),r.createElement(B.a,{source:"url"})),r.createElement(pe.a,Object.assign({source:"asset_src",label:"PDF",accept:"application/pdf",validate:Object($.b)()},e),r.createElement(fe.a,{source:"src",title:"title"})));default:return r.createElement(z.a,Object.assign({format:I,source:"asset_src",label:"Image",accept:"image/*",validate:Object($.b)()},e),r.createElement(B.a,{source:"url"}))}},Pe=function(e){return r.createElement(L.a,Object.assign({},e,{aside:r.createElement(ke,null),filters:r.createElement(ye,null)}),r.createElement(M.a,{rowClick:"edit"},r.createElement(N.a,{source:"id"}),r.createElement(_e.a,{source:"created_at"}),r.createElement(N.a,{source:"name"}),r.createElement(N.a,{source:"type"}),r.createElement(B.a,{source:"thumbnail_src",title:"image"}),r.createElement(ge.a,{label:"Subcategory",source:"subcategory_id",reference:"subcategories",sortBy:"name"},r.createElement(N.a,{source:"name"})),r.createElement(q.a,{source:"active",label:"Active",render:function(e,t){return r.createElement(U.a,{record:Object(i.a)(Object(i.a)({},e),{},{active:!!e.active}),source:t})}}),r.createElement(q.a,{source:"color",label:"Color",render:function(e,t){return r.createElement(U.a,{record:Object(i.a)(Object(i.a)({},e),{},{active:!!e.color}),source:t})}}),r.createElement(q.a,{source:"double_sided",label:"Double-Sided",render:function(e,t){return r.createElement(U.a,{record:Object(i.a)(Object(i.a)({},e),{},{active:!!e.double_sided}),source:t})}}),r.createElement(J.a,{label:"Edit"}),r.createElement(H.a,{label:"Delete"})))},xe=function(e){return r.createElement(Q.a,e,r.createElement(G.a,null,r.createElement(V.a,{disabled:!0,label:"ID",source:"id"}),r.createElement(V.a,{source:"name",validate:Object($.b)()}),r.createElement(R.a,{source:"type",validate:Object($.b)(),choices:je}),r.createElement(me.a,{label:"Subcategory",source:"subcategory_id",reference:"subcategories",perPage:100,validate:Object($.b)()},r.createElement(R.a,{optionText:"name"})),r.createElement(K.a,{label:"Active",source:"active",defaultValue:!0}),r.createElement(K.a,{label:"Color (only relevant for packets)",source:"color"}),r.createElement(K.a,{label:"Double-Sided (only relevant for packets)",source:"double_sided",defaultValue:!1}),r.createElement(me.a,{label:"Product",source:"product_id",perPage:100,reference:"products",validate:Object($.b)()},r.createElement(R.a,{optionText:"name"})),r.createElement(V.a,{source:"blurb"}),r.createElement(we,null),r.createElement(de.a,{label:"Volunteers",source:"volunteer_ids",reference:"volunteers"},r.createElement(be.a,{optionText:"first_name"}))))},Se=function(e){return r.createElement(W.a,e,r.createElement(G.a,null,r.createElement(V.a,{source:"name",validate:Object($.b)()}),r.createElement(R.a,{source:"type",validate:Object($.b)(),choices:je}),r.createElement(me.a,{label:"Subcategory",source:"subcategory_id",reference:"subcategories",perPage:100,validate:Object($.b)()},r.createElement(R.a,{optionText:"name"})),r.createElement(K.a,{label:"Active",source:"active"}),r.createElement(K.a,{label:"Color (only relevant for packets)",source:"color",defaultValue:!1}),r.createElement(K.a,{label:"Double-Sided (only relevant for packets)",source:"double_sided",defaultValue:!1}),r.createElement(me.a,{label:"Product",source:"product_id",reference:"products",perPage:100,validate:Object($.b)()},r.createElement(R.a,{optionText:"name"})),r.createElement(V.a,{source:"blurb"}),r.createElement(we,null),r.createElement(de.a,{label:"Volunteers",source:"volunteer_ids",reference:"volunteers"},r.createElement(be.a,{optionText:"first_name"}))))},Ae=function(e){return r.createElement(D.a,e,r.createElement(V.a,{label:"Search",source:"q",alwaysOn:!0}))},Te=function(e){return r.createElement(L.a,Object.assign({},e,{filters:r.createElement(Ae,null)}),r.createElement(M.a,{rowClick:"edit"},r.createElement(N.a,{source:"id"}),r.createElement(N.a,{source:"name"}),r.createElement(_e.a,{source:"created_at"}),r.createElement(_e.a,{source:"updated_at"}),r.createElement(ge.a,{label:"Category",source:"design_category_id",reference:"categories"},r.createElement(N.a,{source:"name"})),r.createElement(q.a,{source:"active",label:"Active",render:function(e,t){return r.createElement(U.a,{record:Object(i.a)(Object(i.a)({},e),{},{active:!!e.active}),source:t})}}),r.createElement(J.a,null),r.createElement(H.a,null)))},Ce=function(e){return r.createElement(Q.a,e,r.createElement(G.a,null,r.createElement(V.a,{disabled:!0,source:"id"}),r.createElement(V.a,{source:"name",validate:Object($.b)()}),r.createElement(me.a,{label:"Category",source:"design_category_id",reference:"categories",validate:Object($.b)()},r.createElement(R.a,{optionText:"name"})),r.createElement(V.a,{source:"bg_color"}),r.createElement(K.a,{label:"Active",source:"active",defaultValue:!0})))},Ie=function(e){return r.createElement(W.a,e,r.createElement(G.a,null,r.createElement(V.a,{source:"name",validate:Object($.b)()}),r.createElement(me.a,{label:"Category",source:"design_category_id",reference:"categories",validate:Object($.b)()},r.createElement(R.a,{optionText:"name"})),r.createElement(V.a,{source:"bg_color"}),r.createElement(K.a,{label:"Active",source:"active",defaultValue:!0})))},Fe=function(e){return r.createElement(L.a,e,r.createElement(M.a,{rowClick:"edit"},r.createElement(N.a,{source:"id"}),r.createElement(N.a,{source:"first_name"}),r.createElement(N.a,{source:"last_name"}),r.createElement(N.a,{source:"type"}),r.createElement(N.a,{source:"email"}),r.createElement(q.a,{source:"active",label:"Active",render:function(e,t){return r.createElement(U.a,{record:Object(i.a)(Object(i.a)({},e),{},{active:!!e.active}),source:t})}}),r.createElement(J.a,null),r.createElement(H.a,null)))},De=function(e){return r.createElement(Q.a,e,r.createElement(G.a,null,r.createElement(V.a,{disabled:!0,source:"id"}),r.createElement(V.a,{source:"first_name",validate:Object($.b)()}),r.createElement(V.a,{source:"last_name",validate:Object($.b)()}),r.createElement(R.a,{source:"type",validate:Object($.b)(),choices:[{id:"designer",name:"Designer"},{id:"content_researcher",name:"Content Researcher"}]}),r.createElement(V.a,{source:"email",validate:Object($.b)()}),r.createElement(K.a,{label:"Active",source:"active"})))},Ve=function(e){return r.createElement(W.a,e,r.createElement(G.a,null,r.createElement(V.a,{source:"first_name",validate:Object($.b)()}),r.createElement(V.a,{source:"last_name",validate:Object($.b)()}),r.createElement(R.a,{source:"type",validate:Object($.b)(),choices:[{id:"designer",name:"Designer"},{id:"content_researcher",name:"Content Researcher"}]}),r.createElement(V.a,{source:"email",validate:Object($.b)()}),r.createElement(K.a,{label:"Active",source:"active"})))},Re=a(665),Le=a(680),Me=a(674),Ne=a(652),Be=a(365),qe=a(82),Ue=a(32),Je=a(349),He=function(e){var t=e.source,a=e.record,c=void 0===a?{}:a;return r.createElement("a",{href:"https://dashboard.lob.com/#/letters/"+c[t]},c[t])};He.defaultProps={label:"Lob ID"};var We=function(e){var t=e.record,a=Object(qe.a)({type:"refundTransaction",resource:"credit-transactions",payload:{id:t.id}}),c=Object(Be.a)(a,1)[0];return r.createElement(Ue.a,{label:"Refund",onClick:c})},Ge=function(e){var t=e.record;return r.createElement(Ue.a,{component:Je.a,to:{pathname:"/org-users/create",state:{record:{org_id:t.id}}},label:"Add Org User"})},$e=function(e){var t=e.record;return r.createElement(Ue.a,{component:Je.a,to:{pathname:"/credit-transactions/create",state:{record:{user_id:t.id}}},label:"Add Credit Transaction"})},ze=function(e){return r.createElement(D.a,e,r.createElement(V.a,{label:"Search",source:"q",alwaysOn:!0}))},Ke=[{id:"Ameelio Ambassador",name:"Heard from an Ameelio Ambassador"},{id:"Recommendation from Friends or Family",name:"Recommendation from Friends or Family"},{id:"Incarcerated Loved-One",name:"Incarcerated Loved-One"},{id:"Facebook/Instagram",name:"Facebook/Instagram"},{id:"News/Radio/TV",name:"News/Radio/TV"},{id:"Internet search",name:"Internet search"},{id:"Other",name:"Other"}],Qe=function(e){return r.createElement(L.a,Object.assign({filters:r.createElement(ze,null)},e),r.createElement(M.a,{rowClick:"edit"},r.createElement(N.a,{source:"id"}),r.createElement(N.a,{source:"first_name"}),r.createElement(N.a,{source:"last_name"}),r.createElement(N.a,{source:"email"}),r.createElement(q.a,{label:"Address",render:function(e){return"".concat(e.addr_line_1," ").concat(e.addr_line_2," ").concat(e.city,", ").concat(e.state," ").concat(e.postal)}}),r.createElement(J.a,null)))},Xe=function(e){return r.createElement(Q.a,e,r.createElement(Re.a,null,r.createElement(Le.a,{label:"user info"},r.createElement(V.a,{disabled:!0,source:"id"}),r.createElement(V.a,{source:"first_name",validate:Object($.b)()}),r.createElement(V.a,{source:"last_name",validate:Object($.b)()}),r.createElement(V.a,{source:"email",validate:Object($.b)()}),r.createElement(V.a,{source:"addr_line_1",validate:Object($.b)()}),r.createElement(V.a,{source:"addr_line_2"}),r.createElement(V.a,{source:"city",validate:Object($.b)()}),r.createElement(V.a,{source:"state",validate:Object($.b)()}),r.createElement(V.a,{source:"postal",validate:Object($.b)()}),r.createElement(V.a,{source:"country",validate:Object($.b)()}),r.createElement(V.a,{label:"Credits",source:"credit",validate:Object($.b)()}),r.createElement(V.a,{source:"credit_reset",validate:Object($.b)()}),r.createElement(V.a,{source:"coins",validate:Object($.b)()}),r.createElement(R.a,{disabled:!0,source:"referer",choices:Ke})),r.createElement(Le.a,{label:"Contacts"},r.createElement(Me.a,{reference:"contacts",label:"Contacts",target:"_nested_users_id"},r.createElement(M.a,{rowClick:"edit"},r.createElement(N.a,{source:"id"}),r.createElement(N.a,{source:"first_name"}),r.createElement(N.a,{source:"last_name"}),r.createElement(N.a,{source:"facility_name"}),r.createElement(q.a,{label:"Facility Address",render:function(e){return"".concat(e.facility_address," ").concat(e.facility_city,", ").concat(e.facility_state," ").concat(e.facility_postal)}}),r.createElement(N.a,{source:"inmate_number"}),r.createElement(N.a,{source:"relationship"}),r.createElement(J.a,null),r.createElement(H.a,null)))),r.createElement(Le.a,{label:"Mail"},r.createElement(Me.a,{reference:"mail",label:"Mail",target:"_nested_users_id"},r.createElement(M.a,null,r.createElement(N.a,{source:"id"}),r.createElement(He,{source:"lob_id"}),r.createElement(N.a,{source:"created_at"}),r.createElement(N.a,{source:"contact_name"}),r.createElement(N.a,{source:"status"}),r.createElement(ge.a,{label:"Contact",source:"contact_id",reference:"contacts"},r.createElement(q.a,{render:function(e){return"".concat(e.first_name," ").concat(e.last_name)}})),r.createElement(Ne.a,null)))),r.createElement(Le.a,{label:"Transactions"},r.createElement($e,null),r.createElement(Me.a,{reference:"credit-transactions",label:"Credit Transactions",target:"_nested_users_id"},r.createElement(M.a,null,r.createElement(N.a,{source:"id"}),r.createElement(N.a,{source:"created_at"}),r.createElement(N.a,{source:"type"}),r.createElement(N.a,{source:"status"}),r.createElement(q.a,{source:"premium",label:"Premium",render:function(e,t){return r.createElement(U.a,{record:Object(i.a)(Object(i.a)({},e),{},{premium:!!e.premium}),source:t})}}),r.createElement(N.a,{source:"price"}),r.createElement(N.a,{label:"Mail ID",source:"letter_id"}),r.createElement(We,null))),r.createElement(Me.a,{reference:"stripe-transactions",label:"Stripe Transactions",target:"_nested_users_id"},r.createElement(M.a,null,r.createElement(N.a,{source:"id"}),r.createElement(N.a,{source:"amount"}),r.createElement(N.a,{source:"status"}),r.createElement(ge.a,{source:"pack_id",reference:"packs",label:"Pack"},r.createElement(N.a,{source:"name"})))))))},Ye=a(656),Ze=function(e){return r.createElement(D.a,e,r.createElement(V.a,{label:"Search",source:"q",alwaysOn:!0}))},et=function(e){return r.createElement(L.a,Object.assign({filters:r.createElement(Ze,null)},e),r.createElement(M.a,null,r.createElement(N.a,{source:"id"}),r.createElement(N.a,{source:"name"}),r.createElement(N.a,{source:"price"}),r.createElement(B.a,{source:"thumbnail_src",title:"image"}),r.createElement(q.a,{source:"premium",label:"Premium",render:function(e,t){return r.createElement(U.a,{record:Object(i.a)(Object(i.a)({},e),{},{premium:!!e.premium}),source:t})}}),r.createElement(J.a,null)))},tt=function(e){return r.createElement(W.a,e,r.createElement(G.a,null,r.createElement(V.a,{source:"name",validate:Object($.b)()}),r.createElement(Ye.a,{source:"price",validate:Object($.b)()}),r.createElement(z.a,{form:I,source:"thumbnail_src",title:"thumbnail_src",label:"Image",accept:"image/*"},r.createElement(B.a,{source:"url"})),r.createElement(K.a,{label:"Premium",source:"premium",defaultValue:!1}),r.createElement(Ye.a,{source:"cost",label:"Unit cost (in cents e.g $4.99 = 499)",validate:Object($.b)()})))},at=function(e){return r.createElement(Q.a,e,r.createElement(G.a,null,r.createElement(V.a,{disabled:!0,label:"ID",source:"id"}),r.createElement(V.a,{source:"name",validate:Object($.b)()}),r.createElement(V.a,{source:"price",validate:Object($.b)()}),r.createElement(Ye.a,{source:"cost",label:"Unit cost (in cents e.g $4.99 = 499)",validate:Object($.b)()}),r.createElement(z.a,{form:I,source:"thumbnail_src",title:"thumbnail_src",label:"Image",accept:"image/*"},r.createElement(B.a,{source:"url"})),r.createElement(K.a,{label:"Premium",source:"premium"})))},rt=a(657),ct=function(e){return r.createElement(D.a,e,r.createElement(rt.a,{source:"q",alwaysOn:!0}))},nt=function(e){return r.createElement(L.a,Object.assign({},e,{filters:r.createElement(ct,null)}),r.createElement(M.a,{rowClick:"edit"},r.createElement(N.a,{source:"id"}),r.createElement(N.a,{source:"full_name"}),r.createElement(N.a,{source:"address"}),r.createElement(N.a,{source:"city"}),r.createElement(N.a,{source:"state"}),r.createElement(N.a,{source:"postal"}),r.createElement(N.a,{source:"type"}),r.createElement(N.a,{source:"phone"}),r.createElement(J.a,null),r.createElement(H.a,null)))},lt=function(e){return r.createElement(Q.a,e,r.createElement(G.a,null,r.createElement(V.a,{disabled:!0,source:"id"}),r.createElement(V.a,{source:"name"}),r.createElement(V.a,{source:"full_name"}),r.createElement(V.a,{source:"address"}),r.createElement(V.a,{source:"city"}),r.createElement(V.a,{source:"state"}),r.createElement(V.a,{source:"postal"}),r.createElement(V.a,{source:"type"}),r.createElement(K.a,{label:"Federal",source:"federal"}),r.createElement(V.a,{source:"phone"}),r.createElement(V.a,{source:"link"}),r.createElement(V.a,{source:"unique"})))},ot=function(e){return r.createElement(W.a,e,r.createElement(G.a,null,r.createElement(V.a,{source:"name",validate:Object($.b)()}),r.createElement(V.a,{source:"full_name",validate:Object($.b)()}),r.createElement(V.a,{source:"address",validate:Object($.b)()}),r.createElement(V.a,{source:"city",validate:Object($.b)()}),r.createElement(V.a,{source:"state",validate:Object($.b)()}),r.createElement(V.a,{source:"postal",validate:Object($.b)()}),r.createElement(V.a,{source:"type"}),r.createElement(K.a,{label:"Federal",source:"federal"}),r.createElement(V.a,{source:"phone"}),r.createElement(V.a,{source:"link"}),r.createElement(V.a,{source:"unique"})))},st=function(e){return r.createElement(D.a,e,r.createElement(V.a,{label:"Search",source:"q",alwaysOn:!0}))},it=function(e){return r.createElement(L.a,Object.assign({filters:r.createElement(st,null)},e),r.createElement(M.a,{rowClick:"edit"},r.createElement(N.a,{source:"id"}),r.createElement(N.a,{source:"name"}),r.createElement(N.a,{source:"business_name"}),r.createElement(N.a,{label:"EIN",source:"ein"}),r.createElement(q.a,{label:"Address",render:function(e){return"".concat(e.address_line_1," ").concat(e.address_line_2," ").concat(e.city,", ").concat(e.state," ").concat(e.postal)}}),r.createElement(J.a,null),r.createElement(H.a,null)))},ut=function(e){return r.createElement(Q.a,e,r.createElement(Re.a,null,r.createElement(Le.a,{label:"Org info"},r.createElement(V.a,{disabled:!0,label:"ID",source:"id"}),r.createElement(V.a,{source:"name",validate:Object($.b)()}),r.createElement(V.a,{label:"Business Name",source:"business_name",validate:Object($.b)()}),r.createElement(V.a,{source:"ein",validate:Object($.b)()}),r.createElement(V.a,{label:"Address Line 1",source:"address_line_1",validate:Object($.b)()}),r.createElement(V.a,{label:"Address Line 2",source:"address_line_2"}),r.createElement(V.a,{source:"city",validate:Object($.b)()}),r.createElement(V.a,{source:"state",validate:Object($.b)()}),r.createElement(V.a,{source:"postal",validate:Object($.b)()}),r.createElement(V.a,{source:"website",validate:Object($.b)()}),r.createElement(V.a,{label:"Color First Page",source:"color_first_page_price"}),r.createElement(V.a,{label:"Color Extra Page",source:"color_extra_page_price"}),r.createElement(V.a,{label:"B&W First Page",source:"bw_first_page_price"}),r.createElement(V.a,{label:"B&W Extra Page",source:"bw_extra_page_price"}),r.createElement(K.a,{label:"Legal",source:"is_legal"})),r.createElement(Le.a,{label:"Contacts"},r.createElement(Me.a,{reference:"contacts",label:"Contacts",target:"_nested_orgs_id"},r.createElement(M.a,null,r.createElement(N.a,{source:"id"}),r.createElement(N.a,{source:"first_name"}),r.createElement(N.a,{source:"last_name"}),r.createElement(N.a,{source:"facility_name"}),r.createElement(q.a,{label:"Facility Address",render:function(e){return"".concat(e.facility_address," ").concat(e.facility_city,", ").concat(e.facility_state," ").concat(e.facility_postal)}}),r.createElement(J.a,null),r.createElement(H.a,null)))),r.createElement(Le.a,{label:"Volunteers"},r.createElement(Ge,null),r.createElement(Me.a,{reference:"org-users",label:"Users",target:"_nested_orgs_id"},r.createElement(M.a,null,r.createElement(N.a,{source:"id"}),r.createElement(N.a,{source:"name"}),r.createElement(N.a,{source:"role"}),r.createElement(N.a,{source:"email"}),r.createElement(J.a,null))))))},mt=function(e){return r.createElement(W.a,e,r.createElement(G.a,null,r.createElement(V.a,{disabled:!0,label:"ID",source:"id"}),r.createElement(V.a,{source:"name",validate:Object($.b)()}),r.createElement(V.a,{label:"Business Name",source:"business_name",validate:Object($.b)()}),r.createElement(V.a,{source:"ein",validate:Object($.b)()}),r.createElement(V.a,{label:"Address Line 1",source:"address_line_1",validate:Object($.b)()}),r.createElement(V.a,{label:"Address Line 2",source:"address_line_2"}),r.createElement(V.a,{source:"city",validate:Object($.b)()}),r.createElement(V.a,{source:"state",validate:Object($.b)()}),r.createElement(V.a,{source:"postal",validate:Object($.b)()}),r.createElement(V.a,{source:"website",validate:Object($.b)()}),r.createElement(V.a,{label:"Color First Page",source:"color_first_page_price"}),r.createElement(V.a,{label:"Color Extra Page",source:"color_extra_page_price"}),r.createElement(V.a,{label:"B&W First Page",source:"bw_first_page_price"}),r.createElement(V.a,{label:"B&W Extra Page",source:"bw_extra_page_price"}),r.createElement(K.a,{label:"Legal",source:"is_legal"})))},dt=a(675),bt=a(658),Et=a(681),pt=a(659),ft=function(e){return r.createElement(dt.a,e,r.createElement(bt.a,null,r.createElement(N.a,{source:"id"}),r.createElement(He,{label:"Lob ID",source:"lob_id"}),r.createElement(_e.a,{label:"Last Lob Status Update",source:"last_lob_status_update"}),r.createElement(_e.a,{source:"estimated_arrival"}),r.createElement(N.a,{label:"Lob Status",source:"lob_status"}),r.createElement(N.a,{source:"type"}),r.createElement(Et.a,{label:"View PDF",source:"pdf_url"}),r.createElement(ge.a,{label:"To",source:"contact_id",reference:"contacts"},r.createElement(q.a,{render:function(e){return"".concat(e.first_name," ").concat(e.last_name)}})),r.createElement(ge.a,{label:"Facility Address",source:"contact_id",reference:"contacts"},r.createElement(q.a,{label:"Facility Address",render:function(e){return"".concat(e.facility_address," ").concat(e.facility_city,", ").concat(e.facility_state," ").concat(e.facility_postal)}})),r.createElement(ge.a,{label:"From",source:"user_id",reference:"users"},r.createElement(q.a,{render:function(e){return"".concat(e.first_name," ").concat(e.last_name)}})),r.createElement(ge.a,{label:"Return Address",source:"user_id",reference:"users"},r.createElement(q.a,{render:function(e){return"".concat(e.addr_line_1," ").concat(e.addr_line_2," ").concat(e.city,", ").concat(e.state," ").concat(e.postal)}})),r.createElement(pt.a,{source:"products"},r.createElement(M.a,null,r.createElement(N.a,{source:"id"}),r.createElement(N.a,{source:"name"}),r.createElement(q.a,{source:"premium",label:"Premium",render:function(e,t){return r.createElement(U.a,{record:Object(i.a)(Object(i.a)({},e),{},{premium:!!e.premium}),source:t})}}),r.createElement(N.a,{source:"price"}))),r.createElement(N.a,{source:"page_count"})))},_t=function(e){return r.createElement(Q.a,e,r.createElement(G.a,null,r.createElement(V.a,{disabled:!0,source:"id"}),r.createElement(V.a,{source:"first_name",validate:Object($.b)()}),r.createElement(V.a,{source:"middle_name"}),r.createElement(V.a,{source:"last_name",validate:Object($.b)()}),r.createElement(V.a,{source:"inmate_number",validate:Object($.b)()}),r.createElement(V.a,{source:"facility_name",validate:Object($.b)()}),r.createElement(V.a,{source:"facility_address",validate:Object($.b)()}),r.createElement(V.a,{label:"Facility Unit",source:"unit"}),r.createElement(V.a,{label:"Facility Dorm",source:"dorm"}),r.createElement(V.a,{source:"facility_city",validate:Object($.b)()}),r.createElement(V.a,{source:"facility_state",validate:Object($.b)()}),r.createElement(V.a,{source:"facility_postal",validate:Object($.b)()})))},gt=function(e,t,a){return"/orgs/".concat(a.org_id)},vt=function(e){return r.createElement(Q.a,e,r.createElement(G.a,{redirect:gt},r.createElement(N.a,{source:"id"}),r.createElement(N.a,{source:"name"}),r.createElement(N.a,{label:"Org ID",source:"org_id"}),r.createElement(N.a,{label:"User ID",source:"user_id"}),r.createElement(N.a,{source:"email"}),r.createElement(R.a,{source:"role",choices:[{id:"member",name:"Member"},{id:"admin",name:"Admin"}]})))},Ot=function(e){return r.createElement(W.a,e,r.createElement(G.a,{redirect:gt},r.createElement(V.a,{source:"org_id"}),r.createElement(V.a,{source:"user_email"}),r.createElement(R.a,{source:"role",choices:[{id:"member",name:"Member"},{id:"admin",name:"Admin"}]})))},jt=function(e){return r.createElement(W.a,e,r.createElement(G.a,null,r.createElement(V.a,{source:"user_id"}),r.createElement(R.a,{source:"type",choices:[{id:"gift",name:"Gift"},{id:"referral",name:"Referral"}]}),r.createElement(V.a,{source:"price"}),r.createElement(K.a,{label:"Premium",source:"premium",defaultValue:!1})))},ht=a(350),yt=Object(ht.a)("https://api.ameelio.org/api/v1",O),kt=Object(i.a)(Object(i.a)({},yt),{},{getList:function(e,t){return yt.getList(e,t).then((function(e){return{data:e.data.data,total:e.total}}))},getOne:function(e,t){return yt.getOne(e,t).then((function(e){return{data:e.data.data}}))},getMany:function(e,t){return yt.getMany(e,t).then((function(e){return{data:e.data.data}}))},getManyReference:function(e,t){var a=/_nested_(.*)_id/g.exec(t.target);return null!=a?function(e,t,a){return T.apply(this,arguments)}(e,t,"".concat(a[1],"/").concat(t.id,"/").concat(e)):yt.getManyReference(e,t).then((function(e){return{data:e.data.data,total:e.total}}))},update:function(e,t){if(!t.data.thumbnail_src&&!t.data.img_src&&!t.data.asset_src)return yt.update(e,t);switch(e){case"categories":return"string"===typeof t.data.img_src?yt.update(e,t):j(e,t).then((function(a){return t.data=Object(i.a)(Object(i.a)({},t.data),{},{img_src:a}),yt.update(e,t)}));case"products":return"string"===typeof t.data.thumbnail_src?yt.update(e,t):j(e,t).then((function(a){return t.data=Object(i.a)(Object(i.a)({},t.data),{},{thumbnail_src:a}),yt.update(e,t)}));case"designs":return"packet"===t.data.type?"string"===typeof t.data.asset_src&&"string"===typeof t.data.thumbnail_src?yt.update(e,t):"string"===typeof t.data.asset_src&&"string"!==typeof t.data.thumbnail_src?j("packet",t).then((function(a){return t.data=Object(i.a)(Object(i.a)({},t.data),{},{thumbnail_src:a}),yt.update(e,t)})):"string"!==typeof t.data.asset_src&&"string"===typeof t.data.thumbnail_src?j(e,t).then((function(a){return t.data=Object(i.a)(Object(i.a)({},t.data),{},{asset_src:a}),yt.update(e,t)})):j(e,t).then((function(a){return t.data=Object(i.a)(Object(i.a)({},t.data),{},{asset_src:a}),function(e,t){return A.apply(this,arguments)}(e,t)})):"string"===typeof t.data.asset_src?yt.update(e,t):j(e,t).then((function(a){return t.data=Object(i.a)(Object(i.a)({},t.data),{},{asset_src:a}),yt.update(e,t)}))}},create:function(e,t){return t.data.img_src||t.data.asset_src||t.data.thumbnail_src?j(e,t).then((function(a){switch(e){case"categories":return k(e,Object(i.a)(Object(i.a)({},t.data),{},{img_src:a}),t);case"designs":return"packet"===t.data.type?function(e,t,a){return P.apply(this,arguments)}(e,Object(i.a)(Object(i.a)({},t.data),{},{asset_src:a}),t):k(e,Object(i.a)(Object(i.a)({},t.data),{},{asset_src:a}),t);case"products":return k(e,Object(i.a)(Object(i.a)({},t.data),{},{thumbnail_src:a}),t)}})):k(e,t.data,t)},refundTransaction:function(e,t){return function(e,t){return C.apply(this,arguments)}(e,t)}}),wt=a(196),Pt=a(195),xt=Object(wt.a)((function(){return Pt.a}),"en",{allowMissing:!0}),St=function(){return r.createElement(o.a,{authProvider:F,dataProvider:kt,i18nProvider:xt},r.createElement(s.a,{name:"designs",options:{label:"Designs"},list:Pe,edit:xe,create:Se}),r.createElement(s.a,{name:"categories",options:{label:"Categories"},list:oe,edit:ie,create:se}),r.createElement(s.a,{name:"subcategories",options:{label:"Subcategories"},list:Te,edit:Ce,create:Ie}),r.createElement(s.a,{name:"volunteers",options:{label:"Volunteers"},list:Fe,edit:De,create:Ve}),r.createElement(s.a,{name:"products",options:{label:"Products"},list:et,edit:at,create:tt}),r.createElement(s.a,{name:"users",options:{label:"Users"},list:Qe,edit:Xe}),r.createElement(s.a,{name:"facilities",options:{label:"Facilities"},list:nt,edit:lt,create:ot}),r.createElement(s.a,{name:"orgs",options:{label:"Organizations"},list:it,edit:ut,create:mt}),r.createElement(s.a,{name:"mail",options:{label:"Mail"},show:ft}),r.createElement(s.a,{name:"packs"}),r.createElement(s.a,{name:"contacts",edit:_t}),r.createElement(s.a,{name:"org-users",edit:vt,create:Ot}),r.createElement(s.a,{name:"credit-transactions",create:jt}),r.createElement(s.a,{name:"stripe-transactions"}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(St,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[398,1,2]]]);
//# sourceMappingURL=main.daddafa6.chunk.js.map