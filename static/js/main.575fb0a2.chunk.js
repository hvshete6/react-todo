(this.webpackJsonplcotodo=this.webpackJsonplcotodo||[]).push([[0],{14:function(t,e,n){},15:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var i=n(0),c=n(1),s=n.n(c),a=n(4),o=n.n(a),l=(n(14),n(3)),u=n(5),d=n(6),r=n(8),j=n(7),h=n.p+"static/media/img.a27393b8.png",b=(n(15),function(t){Object(r.a)(n,t);var e=Object(j.a)(n);function n(t){var i;return Object(u.a)(this,n),(i=e.call(this,t)).state={newItem:"",list:[]},i}return Object(d.a)(n,[{key:"addItem",value:function(t){if(""!=t){var e={id:Date.now(),value:t,isDone:!1},n=Object(l.a)(this.state.list);n.push(e),this.setState({list:n,newItem:""})}}},{key:"deleteItem",value:function(t){var e=Object(l.a)(this.state.list).filter((function(e){return e.id!==t}));this.setState({list:e})}},{key:"updateInput",value:function(t){this.setState({newItem:t})}},{key:"render",value:function(){var t=this;return Object(i.jsxs)("div",{children:[Object(i.jsx)("img",{src:h,width:"100",height:"100",className:"logo"}),Object(i.jsx)("h1",{className:"app-title",children:"LCO ToDo App"}),Object(i.jsxs)("div",{className:"container",children:["Add an Item....",Object(i.jsx)("br",{}),Object(i.jsx)("input",{type:"text",className:"input-text",placeholder:"Write a Todo",required:!0,value:this.state.newItem,onChange:function(e){return t.updateInput(e.target.value)}}),Object(i.jsx)("button",{className:"add-btn",onClick:function(){return t.addItem(t.state.newItem)},disabled:!this.state.newItem.length,children:"Add Todo"}),Object(i.jsx)("div",{className:"list",children:Object(i.jsxs)("ul",{children:[this.state.list.map((function(e){return Object(i.jsxs)("li",{children:[Object(i.jsx)("input",{type:"checkbox",name:"idDone",checked:e.isDone,onChange:function(){}}),e.value,Object(i.jsx)("button",{className:"btn",onClick:function(){return t.deleteItem(e.id)},children:"Delete"})]},e.id)})),Object(i.jsxs)("li",{children:[Object(i.jsx)("input",{type:"checkbox",name:"",id:""}),"Record youtube videos",Object(i.jsx)("button",{className:"btn",children:"Delete"})]})]})})]})]})}}]),n}(s.a.Component)),m=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(e){var n=e.getCLS,i=e.getFID,c=e.getFCP,s=e.getLCP,a=e.getTTFB;n(t),i(t),c(t),s(t),a(t)}))};o.a.render(Object(i.jsx)(s.a.StrictMode,{children:Object(i.jsx)(b,{})}),document.getElementById("root")),m()}},[[16,1,2]]]);
//# sourceMappingURL=main.575fb0a2.chunk.js.map