(this["webpackJsonpit-incubator-todolist-ts"]=this["webpackJsonpit-incubator-todolist-ts"]||[]).push([[0],{103:function(t,e,a){t.exports=a(132)},108:function(t,e,a){},109:function(t,e,a){},132:function(t,e,a){"use strict";a.r(e);var n=a(0),o=a.n(n),i=a(8),r=a.n(i);a(108),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(109);var l,c,s=a(175),u=a(176),d=a(177),m=a(168),f=a(134),b=a(171),p=a(179),g=a(180),v=a(178),E=a(18),h=a(12),k=a(82),j=a.n(k).a.create(Object(h.a)({baseURL:"https://social-network.samuraijs.com/api/1.1/"},{withCredentials:!0,headers:{"API-KEY":"82582742-7d7f-4c61-8ef1-26c44cad628c"}})),O=function(){return j.get("todo-lists")},C=function(t){return j.post("todo-lists",{title:t})},T=function(t){return j.delete("todo-lists/".concat(t))},y=function(t,e){return j.put("todo-lists/".concat(t),{title:e})},I=function(t){return j.get("todo-lists/".concat(t,"/tasks"))},A=function(t,e){return j.delete("todo-lists/".concat(t,"/tasks/").concat(e))},S=function(t,e){return j.post("todo-lists/".concat(t,"/tasks"),{title:e})},w=function(t,e,a){return j.put("todo-lists/".concat(t,"/tasks/").concat(e),a)},x=function(t){return j.post("auth/login",t)},L=function(){return j.delete("auth/login")},F=function(){return j.get("auth/me")};!function(t){t[t.New=0]="New",t[t.InProgress=1]="InProgress",t[t.Completed=2]="Completed",t[t.Draft=3]="Draft"}(l||(l={})),function(t){t[t.Low=0]="Low",t[t.Middle=1]="Middle",t[t.Hi=2]="Hi",t[t.Urgently=3]="Urgently",t[t.Later=4]="Later"}(c||(c={}));var D=function(t,e){t.messages.length?e(B({error:t.messages[0]})):e(B({error:"Some error occurred"})),e(H({status:"failed"}))},P=function(t,e){e(B({error:t.message?t.message:"Some error occurred"})),e(H({status:"failed"}))},K=a(31),M=Object(K.b)({name:"auth",initialState:{isLoggedIn:!1},reducers:{setIsLoggedInAC:function(t,e){t.isLoggedIn=e.payload.value}}}),N=M.reducer,z=M.actions.setIsLoggedInAC,U=Object(K.b)({name:"app",initialState:{status:"idle",error:null,isInitialized:!1},reducers:{setAppErrorAC:function(t,e){t.error=e.payload.error},setAppStatusAC:function(t,e){t.status=e.payload.status},setAppInitializedAC:function(t,e){t.isInitialized=e.payload.value}}}),R=U.reducer,q=U.actions,B=q.setAppErrorAC,H=q.setAppStatusAC,V=q.setAppInitializedAC,J=Object(K.b)({name:"todolist",initialState:[],reducers:{removeTodolistAC:function(t,e){var a=t.findIndex((function(t){return t.id===e.payload.id}));a>-1&&t.splice(a,1)},addTodolistAC:function(t,e){t.push(Object(h.a)(Object(h.a)({},e.payload.todolist),{},{filter:"all",entityStatus:"idle"}))},changeTodolistTitleAC:function(t,e){var a=t.findIndex((function(t){return t.id===e.payload.id}));a>-1&&(t[a].title=e.payload.title)},changeTodolistFilterAC:function(t,e){var a=t.findIndex((function(t){return t.id===e.payload.id}));a>-1&&(t[a].filter=e.payload.filter)},changeTodolistEntityStatusAC:function(t,e){var a=t.findIndex((function(t){return t.id===e.payload.id}));a>-1&&(t[a].entityStatus=e.payload.status)},setTodolistsAC:function(t,e){return e.payload.todolists.map((function(t){return Object(h.a)(Object(h.a)({},t),{},{filter:"all",entityStatus:"idle"})}))}}}),W=J.reducer,Y=J.actions,$=Y.removeTodolistAC,_=Y.addTodolistAC,G=Y.changeTodolistTitleAC,Q=Y.changeTodolistFilterAC,X=Y.changeTodolistEntityStatusAC,Z=J.actions.setTodolistsAC,tt=a(90),et=a(36),at={},nt=function(t,e,a){return function(n,o){var i=o().tasks[a].find((function(e){return e.id===t}));if(i){var r=Object(h.a)({deadline:i.deadline,description:i.description,priority:i.priority,startDate:i.startDate,title:i.title,status:i.status},e);w(a,t,r).then((function(o){if(0===o.data.resultCode){var i=function(t,e,a){return{type:"UPDATE-TASK",model:e,todolistId:a,taskId:t}}(t,e,a);n(i)}else D(o.data,n)})).catch((function(t){P(t,n)}))}else console.warn("task not found in the state")}},ot=a(172),it=a(133),rt=a(45),lt=a(181),ct=a(169),st=o.a.memo((function(t){var e=t.addItem,a=t.disabled,i=void 0!==a&&a;console.log("AddItemForm called");var r=Object(n.useState)(""),l=Object(rt.a)(r,2),c=l[0],s=l[1],u=Object(n.useState)(null),d=Object(rt.a)(u,2),f=d[0],b=d[1],p=function(){""!==c.trim()?(e(c),s("")):b("Title is required")};return o.a.createElement("div",null,o.a.createElement(lt.a,{variant:"outlined",disabled:i,error:!!f,value:c,onChange:function(t){s(t.currentTarget.value)},onKeyPress:function(t){null!==f&&b(null),13===t.charCode&&p()},label:"Title",helperText:f}),o.a.createElement(m.a,{color:"primary",onClick:p,disabled:i},o.a.createElement(ct.a,null)))})),ut=a(91),dt=o.a.memo((function(t){console.log("EditableSpan called");var e=Object(n.useState)(!1),a=Object(rt.a)(e,2),i=a[0],r=a[1],l=Object(n.useState)(t.value),c=Object(rt.a)(l,2),s=c[0],u=c[1];return i?o.a.createElement(lt.a,{value:s,onChange:function(t){u(t.currentTarget.value)},autoFocus:!0,onBlur:function(){r(!1),t.onChange(s)}}):o.a.createElement("span",{onDoubleClick:function(){r(!0),u(t.value)}},t.value)})),mt=a(170),ft=a(183),bt=o.a.memo((function(t){var e=Object(n.useCallback)((function(){return t.removeTask(t.task.id,t.todolistId)}),[t.task.id,t.todolistId]),a=Object(n.useCallback)((function(e){var a=e.currentTarget.checked;t.changeTaskStatus(t.task.id,a?l.Completed:l.New,t.todolistId)}),[t.task.id,t.todolistId]),i=Object(n.useCallback)((function(e){t.changeTaskTitle(t.task.id,e,t.todolistId)}),[t.task.id,t.todolistId]);return o.a.createElement("div",{key:t.task.id,className:t.task.status===l.Completed?"is-done":""},o.a.createElement(ft.a,{checked:t.task.status===l.Completed,color:"primary",onChange:a}),o.a.createElement(dt,{value:t.task.title,onChange:i}),o.a.createElement(m.a,{onClick:e},o.a.createElement(mt.a,null)))})),pt=o.a.memo((function(t){var e=t.demo,a=void 0!==e&&e,i=Object(ut.a)(t,["demo"]);console.log("Todolist called");var r=Object(E.b)();Object(n.useEffect)((function(){if(!a){var t,e=(t=i.todolist.id,function(e){e(H({status:"loading"})),I(t).then((function(a){var n=a.data.items;e(function(t,e){return{type:"SET-TASKS",tasks:t,todolistId:e}}(n,t)),e(H({status:"succeeded"}))}))});r(e)}}),[]);var c=Object(n.useCallback)((function(t){i.addTask(t,i.todolist.id)}),[i.addTask,i.todolist.id]),s=Object(n.useCallback)((function(t){i.changeTodolistTitle(i.todolist.id,t)}),[i.todolist.id,i.changeTodolistTitle]),u=Object(n.useCallback)((function(){return i.changeFilter("all",i.todolist.id)}),[i.todolist.id,i.changeFilter]),d=Object(n.useCallback)((function(){return i.changeFilter("active",i.todolist.id)}),[i.todolist.id,i.changeFilter]),f=Object(n.useCallback)((function(){return i.changeFilter("completed",i.todolist.id)}),[i.todolist.id,i.changeFilter]),p=i.tasks;return"active"===i.todolist.filter&&(p=i.tasks.filter((function(t){return t.status===l.New}))),"completed"===i.todolist.filter&&(p=i.tasks.filter((function(t){return t.status===l.Completed}))),o.a.createElement("div",null,o.a.createElement("h3",null,o.a.createElement(dt,{value:i.todolist.title,onChange:s}),o.a.createElement(m.a,{onClick:function(){i.removeTodolist(i.todolist.id)},disabled:"loading"===i.todolist.entityStatus},o.a.createElement(mt.a,null))),o.a.createElement(st,{addItem:c,disabled:"loading"===i.todolist.entityStatus}),o.a.createElement("div",null,p.map((function(t){return o.a.createElement(bt,{key:t.id,task:t,todolistId:i.todolist.id,removeTask:i.removeTask,changeTaskTitle:i.changeTaskTitle,changeTaskStatus:i.changeTaskStatus})}))),o.a.createElement("div",{style:{paddingTop:"10px"}},o.a.createElement(b.a,{variant:"all"===i.todolist.filter?"outlined":"text",onClick:u,color:"default"},"All"),o.a.createElement(b.a,{variant:"active"===i.todolist.filter?"outlined":"text",onClick:d,color:"primary"},"Active"),o.a.createElement(b.a,{variant:"completed"===i.todolist.filter?"outlined":"text",onClick:f,color:"secondary"},"Completed")))})),gt=a(14),vt=function(t){var e=t.demo,a=void 0!==e&&e,i=Object(E.c)((function(t){return t.todolists})),r=Object(E.c)((function(t){return t.tasks})),l=Object(E.c)((function(t){return t.auth.isLoggedIn})),c=Object(E.b)();Object(n.useEffect)((function(){if(!a&&l){var t=function(t){t(H({status:"loading"})),O().then((function(e){t(Z({todolists:e.data})),t(H({status:"succeeded"}))})).catch((function(e){P(e,t)}))};c(t)}}),[]);var s=Object(n.useCallback)((function(t,e){var a=function(t,e){return function(a){A(e,t).then((function(n){var o=function(t,e){return{type:"REMOVE-TASK",taskId:t,todolistId:e}}(t,e);a(o)}))}}(t,e);c(a)}),[]),u=Object(n.useCallback)((function(t,e){var a=function(t,e){return function(a){a(H({status:"loading"})),S(e,t).then((function(t){if(0===t.data.resultCode){var e=function(t){return{type:"ADD-TASK",task:t}}(t.data.data.item);a(e),a(H({status:"succeeded"}))}else D(t.data,a)})).catch((function(t){P(t,a)}))}}(t,e);c(a)}),[]),d=Object(n.useCallback)((function(t,e,a){var n=nt(t,{status:e},a);c(n)}),[]),m=Object(n.useCallback)((function(t,e,a){var n=nt(t,{title:e},a);c(n)}),[]),f=Object(n.useCallback)((function(t,e){var a=Q({id:e,filter:t});c(a)}),[]),b=Object(n.useCallback)((function(t){var e,a=(e=t,function(t){t(H({status:"loading"})),t(X({id:e,status:"loading"})),T(e).then((function(a){t($({id:e})),t(H({status:"succeeded"}))}))});c(a)}),[]),p=Object(n.useCallback)((function(t,e){var a=function(t,e){return function(a){y(t,e).then((function(n){a(G({id:t,title:e}))}))}}(t,e);c(a)}),[]),g=Object(n.useCallback)((function(t){var e=function(t){return function(e){e(H({status:"loading"})),C(t).then((function(t){e(_({todolist:t.data.data.item})),e(H({status:"succeeded"}))}))}}(t);c(e)}),[c]);return l?o.a.createElement(o.a.Fragment,null,o.a.createElement(ot.a,{container:!0,style:{padding:"20px"}},o.a.createElement(st,{addItem:g})),o.a.createElement(ot.a,{container:!0,spacing:3},i.map((function(t){var e=r[t.id];return o.a.createElement(ot.a,{item:!0,key:t.id},o.a.createElement(it.a,{style:{padding:"10px"}},o.a.createElement(pt,{todolist:t,tasks:e,removeTask:s,changeFilter:f,addTask:u,changeTaskStatus:d,removeTodolist:b,changeTaskTitle:m,changeTodolistTitle:p,demo:a})))})))):o.a.createElement(gt.a,{to:"/login"})},Et=a(185),ht=a(182);function kt(t){return o.a.createElement(ht.a,Object.assign({elevation:6,variant:"filled"},t))}function jt(){var t=Object(E.c)((function(t){return t.app.error})),e=Object(E.b)(),a=function(t,a){"clickaway"!==a&&e(B({error:null}))},n=null!==t;return o.a.createElement(Et.a,{open:n,autoHideDuration:6e3,onClose:a},o.a.createElement(kt,{onClose:a,severity:"error"},t))}var Ot=a(52),Ct=a(186),Tt=a(167),yt=a(173),It=a(174),At=a(89),St=function(){var t=Object(E.b)(),e=Object(E.c)((function(t){return t.auth.isLoggedIn})),a=Object(At.a)({validate:function(t){return t.email?t.password?void 0:{password:"Password is required"}:{email:"Email is required"}},initialValues:{email:"",password:"",rememberMe:!1},onSubmit:function(e){var a;t((a=e,function(t){t(H({status:"loading"})),x(a).then((function(e){0===e.data.resultCode?(t(z({value:!0})),t(H({status:"succeeded"}))):D(e.data,t)})).catch((function(e){P(e,t)}))}))}});return e?o.a.createElement(gt.a,{to:"/"}):o.a.createElement(ot.a,{container:!0,justify:"center"},o.a.createElement(ot.a,{item:!0,xs:4},o.a.createElement("form",{onSubmit:a.handleSubmit},o.a.createElement(Ct.a,null,o.a.createElement(Tt.a,null,o.a.createElement("p",null,"To log in get registered ",o.a.createElement("a",{href:"https://social-network.samuraijs.com/",target:"_blank"},"here")),o.a.createElement("p",null,"or use common test account credentials:"),o.a.createElement("p",null," Email: free@samuraijs.com"),o.a.createElement("p",null,"Password: free")),o.a.createElement(yt.a,null,o.a.createElement(lt.a,Object.assign({label:"Email",margin:"normal"},a.getFieldProps("email"))),a.errors.email?o.a.createElement("div",null,a.errors.email):null,o.a.createElement(lt.a,Object.assign({type:"password",label:"Password",margin:"normal"},a.getFieldProps("password"))),a.errors.password?o.a.createElement("div",null,a.errors.password):null,o.a.createElement(It.a,{label:"Remember me",control:o.a.createElement(ft.a,Object.assign({},a.getFieldProps("rememberMe"),{checked:a.values.rememberMe}))}),o.a.createElement(b.a,{type:"submit",variant:"contained",color:"primary"},"Login"))))))};var wt=function(t){var e=t.demo,a=void 0!==e&&e,i=Object(E.c)((function(t){return t.app.status})),r=Object(E.c)((function(t){return t.app.isInitialized})),l=Object(E.c)((function(t){return t.auth.isLoggedIn})),c=Object(E.b)();Object(n.useEffect)((function(){c((function(t){F().then((function(e){0===e.data.resultCode&&t(z({value:!0})),t(V({value:!0}))}))}))}),[]);var h=Object(n.useCallback)((function(){c((function(t){t(H({status:"loading"})),L().then((function(e){0===e.data.resultCode?(t(z({value:!1})),t(H({status:"succeeded"}))):D(e.data,t)})).catch((function(e){P(e,t)}))}))}),[]);return r?o.a.createElement(Ot.a,null,o.a.createElement("div",{className:"App"},o.a.createElement(jt,null),o.a.createElement(u.a,{position:"static"},o.a.createElement(d.a,null,o.a.createElement(m.a,{edge:"start",color:"inherit","aria-label":"menu"},o.a.createElement(v.a,null)),o.a.createElement(f.a,{variant:"h6"},"News"),l&&o.a.createElement(b.a,{color:"inherit",onClick:h},"Log out")),"loading"===i&&o.a.createElement(p.a,null)),o.a.createElement(g.a,{fixed:!0},o.a.createElement(gt.b,{exact:!0,path:"/",render:function(){return o.a.createElement(vt,{demo:a})}}),o.a.createElement(gt.b,{path:"/login",render:function(){return o.a.createElement(St,null)}})))):o.a.createElement("div",{style:{position:"fixed",top:"30%",textAlign:"center",width:"100%"}},o.a.createElement(s.a,null))},xt=a(53),Lt=a(88),Ft=Object(xt.b)({tasks:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:at,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"REMOVE-TASK":return Object(h.a)(Object(h.a)({},t),{},Object(et.a)({},e.todolistId,t[e.todolistId].filter((function(t){return t.id!=e.taskId}))));case"ADD-TASK":return Object(h.a)(Object(h.a)({},t),{},Object(et.a)({},e.task.todoListId,[e.task].concat(Object(tt.a)(t[e.task.todoListId]))));case"UPDATE-TASK":return Object(h.a)(Object(h.a)({},t),{},Object(et.a)({},e.todolistId,t[e.todolistId].map((function(t){return t.id===e.taskId?Object(h.a)(Object(h.a)({},t),e.model):t}))));case _.type:return Object(h.a)(Object(h.a)({},t),{},Object(et.a)({},e.payload.todolist.id,[]));case $.type:var a=Object(h.a)({},t);return delete a[e.payload.id],a;case Z.type:var n=Object(h.a)({},t);return e.payload.todolists.forEach((function(t){n[t.id]=[]})),n;case"SET-TASKS":return Object(h.a)(Object(h.a)({},t),{},Object(et.a)({},e.todolistId,e.tasks));default:return t}},todolists:W,app:R,auth:N}),Dt=Object(K.a)({reducer:Ft,middleware:function(t){return t().prepend(Lt.a)}});window.store=Dt,r.a.render(o.a.createElement(E.a,{store:Dt},o.a.createElement(wt,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}},[[103,1,2]]]);
//# sourceMappingURL=main.1085a00b.chunk.js.map