(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{30:function(e,a,t){e.exports=t(66)},36:function(e,a,t){},38:function(e,a,t){},66:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(26),o=t.n(c),l=(t(36),t(7)),s=t(8),i=t(10),m=t(9),u=t(11),p=(t(38),t(67)),h=function(e){var a=e.branding;return r.a.createElement("nav",{className:"navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0"},r.a.createElement("div",{className:"container"},r.a.createElement("a",{href:"/",className:"navbar-brand"},a),r.a.createElement("div",null,r.a.createElement("ul",{className:"navbar-nav mr-auto"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(p.a,{to:"/",className:"nav-link"},r.a.createElement("i",{className:"fas fa-home"})," Home")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(p.a,{to:"/contact/add",className:"nav-link"},r.a.createElement("i",{className:"fas fa-plus"})," Add")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(p.a,{to:"/about",className:"nav-link"},r.a.createElement("i",{className:"fas fa-question"})," About"))))))};h.defaultProps={branding:"Contact Manager"};var d=h,E=(t(42),t(3)),f=t.n(E),v=t(12),b=t(29),y=t(17),g=t(13),C=t.n(g),N=r.a.createContext(),O=function(e,a){switch(a.type){case"DELETE_CONTACT":return Object(y.a)({},e,{contacts:e.contacts.filter(function(e){return e.id!==a.payload.id})});case"ADD_CONTACT":return Object(y.a)({},e,{contacts:[].concat(Object(b.a)(e.contacts),[a.payload.contact])});case"UPDATE_CONTACT":var t=a.payload.contact;return Object(y.a)({},e,{contacts:e.contacts.map(function(e){return e.id===t.id?t:e})});default:return e}},j=function(e){function a(){var e,t;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(i.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).state={contacts:[],dispatch:function(e){return t.setState(function(a){return O(a,e)})}},t}return Object(u.a)(a,e),Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=Object(v.a)(f.a.mark(function e(){var a;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C()("https://jsonplaceholder.typicode.com/users");case 2:a=e.sent,this.setState({contacts:a.data});case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement(N.Provider,{value:this.state},this.props.children)}}]),a}(n.Component),k=N.Consumer,w=function(e){function a(){var e,t;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(i.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).state={showContactInfo:!1},t._onClick=function(){t.setState({showContactInfo:!t.state.showContactInfo})},t._onDelete=function(){var e=Object(v.a)(f.a.mark(function e(a,t){return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,C()({url:"https://jsonplaceholder.typicode.com/users/".concat(a),method:"delete"});case 3:200===e.sent.status&&t({type:"DELETE_CONTACT",payload:{id:a}}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),t({type:"DELETE_CONTACT",payload:{id:a}});case 10:case"end":return e.stop()}},e,this,[[0,7]])}));return function(a,t){return e.apply(this,arguments)}}(),t}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this,a=this.state.showContactInfo;return r.a.createElement(k,null,function(t){var n=e.props.contact,c=n.id,o=n.name,l=n.email,s=n.phone,i=t.dispatch;return r.a.createElement("div",{className:"card card-body mb-3"},r.a.createElement("h4",null,o," ",r.a.createElement("i",{onClick:e._onClick,className:"fas fa-sort-down",style:{cursor:"pointer"}}),r.a.createElement("i",{className:"fas fa-times",style:{cursor:"pointer",float:"right",color:"red"},onClick:e._onDelete.bind(e,c,i)}),r.a.createElement(p.a,{to:"/contact/edit/".concat(c)},r.a.createElement("i",{className:"fas fa-pencil-alt",style:{cursor:"pointer",float:"right",color:"black",marginRight:"1rem"}}))),a?r.a.createElement("ul",{className:"list-group"},r.a.createElement("li",{className:"list-group-item"},"Email: ",l),r.a.createElement("li",{className:"list-group-item"},"Phone: ",s)):null)})}}]),a}(n.Component),x=function(e){function a(){return Object(l.a)(this,a),Object(i.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement(k,null,function(e){var a=e.contacts;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",{className:"display-4 mb-2"},r.a.createElement("span",{className:"text-danger"},"Contact List")," "),a.map(function(e){return r.a.createElement(w,{key:e.id,contact:e})}))})}}]),a}(n.Component),_=t(14),A=t(1),T=t.n(A),S=t(27),D=t.n(S),q=function(e){var a=e.name,t=e.placeholder,n=e.value,c=e.onChange,o=e.error;return r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"name"},a),r.a.createElement("input",{type:"text",name:a,placeholder:t,value:n,className:D()("form-control form-control-lg",{"is-invalid":o}),onChange:c}),o&&r.a.createElement("div",{className:"invalid-feedback"},o))};q.propsType={name:T.a.string.isRequired,placeholder:T.a.string.isRequired,value:T.a.string.isRequired,onChange:T.a.func.isRequired,error:T.a.string.isRequired};var I=q,P=function(e){function a(e){var t;return Object(l.a)(this,a),(t=Object(i.a)(this,Object(m.a)(a).call(this,e))).state={name:"",phone:"",email:"",nameErr:"",emailErr:"",phoneErr:""},t._onChange=function(e){return t.setState(Object(_.a)({},e.target.name,e.target.value))},t._onSubmit=function(){var e=Object(v.a)(f.a.mark(function e(a,n){var r,c,o,l,s,i;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),t.setState({phone:t.phoneInput.current.value}),r=t.state,c=r.name,o=r.phone,l=r.email,o=t.phoneInput.current.value,""!==c&&""!==l&&""!==o){e.next=7;break}return t.setState({nameErr:""===c?"name is required":"",emailErr:""===l?"email is required":"",phoneErr:""===o?"phone is required":""}),e.abrupt("return");case 7:return s={name:c,phone:o,email:l},e.next=10,C()({method:"post",url:"https://jsonplaceholder.typicode.com/users",data:s});case 10:201===(i=e.sent).status&&a({type:"ADD_CONTACT",payload:{contact:i.data}}),t.setState({name:"",phone:"",email:"",nameErr:"",emailErr:"",phoneErr:""}),t.phoneInput.current.value="",t.props.history.push("/");case 15:case"end":return e.stop()}},e,this)}));return function(a,t){return e.apply(this,arguments)}}(),t.phoneInput=r.a.createRef(),t}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this,a=this.state,t=a.name,n=a.email,c=a.nameErr,o=a.emailErr,l=a.phoneErr,s=this.props.phone;return r.a.createElement(k,null,function(a){var i=a.dispatch;return r.a.createElement("div",{className:"card mb-3"},r.a.createElement("div",{className:"card-header"},"Add Contact"),r.a.createElement("div",{className:"card-body"},r.a.createElement("form",{onSubmit:e._onSubmit.bind(e,i)},r.a.createElement(I,{name:"name",placeholder:"Enter name ...",value:t,onChange:e._onChange,error:c}),r.a.createElement(I,{name:"email",placeholder:"Enter email ...",value:n,onChange:e._onChange,error:o}),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"phone"},"Phone"),r.a.createElement("input",{type:"text",name:"phone",placeholder:"Enter phone ...",defaultValue:s,className:"".concat(""!==l?"is-invalid":null," form-control form-control-lg"),ref:e.phoneInput}),l&&r.a.createElement("div",{className:"invalid-feedback"},l)),r.a.createElement("input",{type:"submit",value:"Add Contact",className:"btn btn-light btn-block"}))))})}}]),a}(n.Component);P.defaultProps={phone:"999-999-9999"};var R=t(68),F=t(70),L=t(69),M=function(e){return r.a.createElement("div",null,r.a.createElement("h1",{className:"display-4"},"About Contact Manager"),r.a.createElement("p",{className:"lead"},"Simple App to manage contacts"),r.a.createElement("p",{className:"text-secondary"},"Version 1.0.0"))},U=function(){return r.a.createElement("div",null,r.a.createElement("h1",{className:"display-4"},r.a.createElement("span",{className:"text-danger"},"404 Page Not Found")),r.a.createElement("p",{className:"lead"},"Sorry, that page does not exist"))},B=function(e){function a(){var e,t;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(i.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).state={name:"",phone:"",email:"",nameErr:"",emailErr:"",phoneErr:""},t._onChange=function(e){return t.setState(Object(_.a)({},e.target.name,e.target.value))},t._onSubmit=function(){var e=Object(v.a)(f.a.mark(function e(a,n){var r,c,o,l,s,i,m;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),r=t.state,c=r.name,o=r.phone,l=r.email,s=t.props.match.params.id,""!==c&&""!==l&&""!==o){e.next=6;break}return t.setState({nameErr:""===c?"name is required":"",emailErr:""===l?"email is required":"",phoneErr:""===o?"phone is required":""}),e.abrupt("return");case 6:return i={id:s,name:c,phone:o,email:l},e.next=9,C()({method:"put",url:"https://jsonplaceholder.typicode.com/users/".concat(s),data:i});case 9:200===(m=e.sent).status&&a({type:"UPDATE_CONTACT",payload:{contact:m.data}}),t.setState({name:"",phone:"",email:"",nameErr:"",emailErr:"",phoneErr:""}),t.props.history.push("/");case 13:case"end":return e.stop()}},e,this)}));return function(a,t){return e.apply(this,arguments)}}(),t}return Object(u.a)(a,e),Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=Object(v.a)(f.a.mark(function e(){var a,t,n,r,c,o;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=this.props.match.params.id,e.next=3,C()({method:"get",url:"https://jsonplaceholder.typicode.com/users/".concat(a)});case 3:t=e.sent,n=t.data,r=n.name,c=n.phone,o=n.email,this.setState({name:r,phone:c,email:o});case 6:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,a=this.state,t=a.name,n=a.email,c=a.phone,o=a.nameErr,l=a.emailErr,s=a.phoneErr;return r.a.createElement(k,null,function(a){var i=a.dispatch;return r.a.createElement("div",{className:"card mb-3"},r.a.createElement("div",{className:"card-header"},"Update Contact"),r.a.createElement("div",{className:"card-body"},r.a.createElement("form",{onSubmit:e._onSubmit.bind(e,i)},r.a.createElement(I,{name:"name",placeholder:"Enter name ...",value:t,onChange:e._onChange,error:o}),r.a.createElement(I,{name:"email",placeholder:"Enter email ...",value:n,onChange:e._onChange,error:l}),r.a.createElement(I,{name:"phone",placeholder:"Enter phone ...",value:c,onChange:e._onChange,error:s}),r.a.createElement("input",{type:"submit",value:"Update Contact",className:"btn btn-light btn-block"}))))})}}]),a}(n.Component),J=function(e){function a(){return Object(l.a)(this,a),Object(i.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement(j,null,r.a.createElement(R.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(d,null),r.a.createElement("div",{className:"container"},r.a.createElement(F.a,null,r.a.createElement(L.a,{exact:!0,path:"/",component:x}),r.a.createElement(L.a,{exact:!0,path:"/about",component:M}),r.a.createElement(L.a,{exact:!0,path:"/contact/add",component:P}),r.a.createElement(L.a,{exact:!0,path:"/contact/edit/:id",component:B}),r.a.createElement(L.a,{component:U}))))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(J,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[30,2,1]]]);
//# sourceMappingURL=main.ebd0d8ff.chunk.js.map