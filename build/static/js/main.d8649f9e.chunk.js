(this["webpackJsonpdata-table"]=this["webpackJsonpdata-table"]||[]).push([[0],{40:function(e,t,n){e.exports=n(56)},49:function(e,t,n){},54:function(e,t,n){},56:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),i=n(10),r=n.n(i),l=n(7),m=n(18),d=n(19),s=n(25),f=n(23),u=n(33),p=n.n(u),c=n(11),h=n(9),b=n(22),_=n(37),v=n(21),g=n(29),E=n(13),C=n(26),w=(n(49),n(39)),y=[{name:"79",value:"1"},{name:"39",value:"2"},{name:"39.\u0410\u0421\u0423\u041f3",value:"3"},{name:"39.\u0410\u0421\u0423\u041f4",value:"4"},{name:"80",value:"5"},{name:"39.\u0410\u0421\u0423\u041f6",value:"6"},{name:"39.\u0410\u0421\u0423\u041f7",value:"7"},{name:"39.\u0410\u0421\u0423\u041f8",value:"8"},{name:"39.\u0410\u0421\u0423\u041f9",value:"9"},{name:"39.\u0410\u0421\u0423\u041f10",value:"10"}],O=function(e){Object(s.a)(n,e);var t=Object(f.a)(n);function n(){var e;Object(m.a)(this,n);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return(e=t.call.apply(t,[this].concat(o))).state={id:"",fio:"",telefon_number:"",department:"",position:""},e.handleSubmit=function(t){if(t.preventDefault(),void 0!==e.state.id){var n={id:e.state.id,fio:e.state.fio.trim(),telefon_number:e.state.telefon_number.trim(),department:e.state.department,position:e.state.position};e.props.onAdd(n)}e.onhandleClose()},e.handleChange=function(t){e.setState(Object(_.a)({},t.target.name,t.target.value))},e.handleChangeSelect=function(t){e.setState({department:t})},e.onhandleClose=function(){e.props.onClose(),e.setState({id:"",fio:"",telefon_number:"",department:"",position:""})},e.onHideNull=function(){},e}return Object(d.a)(n,[{key:"componentDidUpdate",value:function(){this.props.item.id!==this.state.id&&this.setState({id:this.props.item.id,fio:this.props.item.fio,telefon_number:this.props.item.telefon_number,department:this.props.item.department,position:this.props.item.position})}},{key:"render",value:function(){var e=this.props.show,t=this.state,n=t.id,a=t.fio,i=t.telefon_number,r=t.department,l=t.position;return o.a.createElement(g.a,{show:e,size:"lg",onHide:this.onHideNull},o.a.createElement("form",{onSubmit:this.handleSubmit},o.a.createElement(g.a.Body,null,o.a.createElement(v.a,null,o.a.createElement(C.a,{style:{height:"35rem"}},o.a.createElement(C.a.Img,{style:{height:"150px",width:"150px"},variant:"top",src:"https://www.imgonline.com.ua/examples/bee-on-daisy.jpg"}),o.a.createElement(C.a.Body,null,o.a.createElement(E.a.Label,null,"\u041e\u0442\u0434\u0435\u043b"),o.a.createElement(b.a,null,o.a.createElement(w.a,{value:"".concat(r),name:"department",options:y,search:!0,placeholder:"\u041f\u043e\u0434\u0440\u0430\u0437\u0434\u0435\u043b\u0435\u043d\u0438\u0435",onChange:this.handleChangeSelect})),o.a.createElement(h.a,{type:"text",hidden:!0,disabled:!0,name:"id",value:n,onChange:this.handleChange}),o.a.createElement(E.a.Label,null,"\u0424\u0418\u041e"),o.a.createElement(h.a,{type:"text",name:"fio",value:a,onChange:this.handleChange}),o.a.createElement(E.a.Label,null,"\u0414\u043e\u043b\u0436\u043d\u043e\u0441\u0442\u044c"),o.a.createElement(h.a,{type:"text",name:"position",value:l,onChange:this.handleChange}),o.a.createElement(E.a.Label,null,"\u0422\u0435\u043b\u0435\u0444\u043e\u043d"),o.a.createElement(h.a,{type:"text",name:"telefon_number",value:i,onChange:this.handleChange}),o.a.createElement(E.a.Group,{className:"mt-5"},o.a.createElement(c.a,{className:"mr-2",variant:"secondary",onClick:this.onhandleClose},"\u0417\u0430\u043a\u0440\u044b\u0442\u044c"),o.a.createElement(c.a,{className:"mr-2",type:"submit",variant:"primary"},"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"))))))))}}]),n}(o.a.Component),S=(n(54),n(24)),j=n(16),x=37,k=function(e){Object(s.a)(n,e);var t=Object(f.a)(n);function n(){var e;Object(m.a)(this,n);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).state={data:[{id:1,fio:"\u0418\u0432\u0430\u043d\u043e\u0432 \u0418\u043b\u044c\u044f \u0421\u0435\u0440\u0433\u0435\u0435\u0432\u0438",telefon_number:"001",department:"3",position:"1"},{id:2,fio:"\u041f\u0435\u0442\u0440\u043e\u0432 \u041c\u0430\u043a\u0441\u0438\u043c \u0418\u0432\u0430\u043d\u043e\u0432\u0438\u0447",telefon_number:"103",department:"1",position:"1"},{id:3,fio:"\u041a\u0443\u0437\u043d\u0435\u0446\u043e\u0432 \u041a\u043e\u043d\u0441\u0442\u0430\u043d\u0442\u0438\u043d \u0412\u0430\u0441\u0438\u043b\u044c\u0435\u0432\u0438\u0447",telefon_number:"789",department:"2",position:"1"},{id:4,fio:"\u0418\u0432\u0430\u043d\u043e\u0432 \u0418\u043b\u044c\u044f \u0421\u0435\u0440\u0433\u0435\u0435\u0432\u0438",telefon_number:"001",department:"2",position:"1"},{id:5,fio:"\u041f\u0435\u0442\u0440\u043e\u0432 \u041c\u0430\u043a\u0441\u0438\u043c \u0418\u0432\u0430\u043d\u043e\u0432\u0438\u0447",telefon_number:"103",department:"3",position:"1"},{id:6,fio:"\u041a\u0443\u0437\u043d\u0435\u0446\u043e\u0432 \u041a\u043e\u043d\u0441\u0442\u0430\u043d\u0442\u0438\u043d \u0412\u0430\u0441\u0438\u043b\u044c\u0435\u0432\u0438\u0447",telefon_number:"789",department:"4",position:"1"},{id:7,fio:"\u0418\u0432\u0430\u043d\u043e\u0432 \u0418\u043b\u044c\u044f \u0421\u0435\u0440\u0433\u0435\u0435\u0432\u0438",telefon_number:"001",department:"2",position:"1"},{id:8,fio:"\u041f\u0435\u0442\u0440\u043e\u0432 \u041c\u0430\u043a\u0441\u0438\u043c \u0418\u0432\u0430\u043d\u043e\u0432\u0438\u0447",telefon_number:"103",department:"5",position:"1"},{id:9,fio:"\u041a\u0443\u0437\u043d\u0435\u0446\u043e\u0432 \u041a\u043e\u043d\u0441\u0442\u0430\u043d\u0442\u0438\u043d \u0412\u0430\u0441\u0438\u043b\u044c\u0435\u0432\u0438\u0447",telefon_number:"789",department:"5",position:"1"},{id:10,fio:"\u0418\u0432\u0430\u043d\u043e\u0432 \u0418\u043b\u044c\u044f \u0421\u0435\u0440\u0433\u0435\u0435\u0432\u0438",telefon_number:"001",department:"2",position:"1"},{id:11,fio:"\u041f\u0435\u0442\u0440\u043e\u0432 \u041c\u0430\u043a\u0441\u0438\u043c \u0418\u0432\u0430\u043d\u043e\u0432\u0438\u0447",telefon_number:"103",department:"2",position:"1"},{id:12,fio:"\u041a\u0443\u0437\u043d\u0435\u0446\u043e\u0432 \u041a\u043e\u043d\u0441\u0442\u0430\u043d\u0442\u0438\u043d \u0412\u0430\u0441\u0438\u043b\u044c\u0435\u0432\u0438\u0447",telefon_number:"789",department:"2",position:"1"},{id:13,fio:"\u0418\u0432\u0430\u043d\u043e\u0432 \u0418\u043b\u044c\u044f \u0421\u0435\u0440\u0433\u0435\u0435\u0432\u0438",telefon_number:"001",department:"2",position:"1"},{id:14,fio:"\u041f\u0435\u0442\u0440\u043e\u0432 \u041c\u0430\u043a\u0441\u0438\u043c \u0418\u0432\u0430\u043d\u043e\u0432\u0438\u0447",telefon_number:"103",department:"2",position:"1"},{id:15,fio:"\u041a\u0443\u0437\u043d\u0435\u0446\u043e\u0432 \u041a\u043e\u043d\u0441\u0442\u0430\u043d\u0442\u0438\u043d \u0412\u0430\u0441\u0438\u043b\u044c\u0435\u0432\u0438\u0447",telefon_number:"789",department:"2",position:"1"},{id:16,fio:"\u0418\u0432\u0430\u043d\u043e\u0432 \u0418\u043b\u044c\u044f \u0421\u0435\u0440\u0433\u0435\u0435\u0432\u0438",telefon_number:"001",department:"2",position:"1"},{id:17,fio:"\u041f\u0435\u0442\u0440\u043e\u0432 \u041c\u0430\u043a\u0441\u0438\u043c \u0418\u0432\u0430\u043d\u043e\u0432\u0438\u0447",telefon_number:"103",department:"2",position:"1"},{id:18,fio:"\u041a\u0443\u0437\u043d\u0435\u0446\u043e\u0432 \u041a\u043e\u043d\u0441\u0442\u0430\u043d\u0442\u0438\u043d \u0412\u0430\u0441\u0438\u043b\u044c\u0435\u0432\u0438\u0447",telefon_number:"789",department:"1",position:"1"},{id:19,fio:"\u0418\u0432\u0430\u043d\u043e\u0432 \u0418\u043b\u044c\u044f \u0421\u0435\u0440\u0433\u0435\u0435\u0432\u0438",telefon_number:"001",department:"1",position:"1"},{id:20,fio:"\u041f\u0435\u0442\u0440\u043e\u0432 \u041c\u0430\u043a\u0441\u0438\u043c \u0418\u0432\u0430\u043d\u043e\u0432\u0438\u0447",telefon_number:"103",department:"1",position:"1"},{id:21,fio:"\u041a\u0443\u0437\u043d\u0435\u0446\u043e\u0432 \u041a\u043e\u043d\u0441\u0442\u0430\u043d\u0442\u0438\u043d \u0412\u0430\u0441\u0438\u043b\u044c\u0435\u0432\u0438\u0447",telefon_number:"789",department:"1",position:"1"},{id:22,fio:"\u0418\u0432\u0430\u043d\u043e\u0432 \u0418\u043b\u044c\u044f \u0421\u0435\u0440\u0433\u0435\u0435\u0432\u0438",telefon_number:"001",department:"1",position:"1"},{id:23,fio:"\u041f\u0435\u0442\u0440\u043e\u0432 \u041c\u0430\u043a\u0441\u0438\u043c \u0418\u0432\u0430\u043d\u043e\u0432\u0438\u0447",telefon_number:"103",department:"1",position:"1"},{id:24,fio:"\u041a\u0443\u0437\u043d\u0435\u0446\u043e\u0432 \u041a\u043e\u043d\u0441\u0442\u0430\u043d\u0442\u0438\u043d \u0412\u0430\u0441\u0438\u043b\u044c\u0435\u0432\u0438\u0447",telefon_number:"789",department:"1",position:"1"},{id:25,fio:"\u0418\u0432\u0430\u043d\u043e\u0432 \u0418\u043b\u044c\u044f \u0421\u0435\u0440\u0433\u0435\u0435\u0432\u0438",telefon_number:"001",department:"1",position:"1"},{id:26,fio:"\u041f\u0435\u0442\u0440\u043e\u0432 \u041c\u0430\u043a\u0441\u0438\u043c \u0418\u0432\u0430\u043d\u043e\u0432\u0438\u0447",telefon_number:"103",department:"1",position:"1"},{id:27,fio:"\u041a\u0443\u0437\u043d\u0435\u0446\u043e\u0432 \u041a\u043e\u043d\u0441\u0442\u0430\u043d\u0442\u0438\u043d \u0412\u0430\u0441\u0438\u043b\u044c\u0435\u0432\u0438\u0447",telefon_number:"789",department:"1",position:"1"},{id:28,fio:"\u0418\u0432\u0430\u043d\u043e\u0432 \u0418\u043b\u044c\u044f \u0421\u0435\u0440\u0433\u0435\u0435\u0432\u0438",telefon_number:"001",department:"1",position:"1"},{id:29,fio:"\u041f\u0435\u0442\u0440\u043e\u0432 \u041c\u0430\u043a\u0441\u0438\u043c \u0418\u0432\u0430\u043d\u043e\u0432\u0438\u0447",telefon_number:"103",department:"1",position:"1"},{id:30,fio:"\u041a\u0443\u0437\u043d\u0435\u0446\u043e\u0432 \u041a\u043e\u043d\u0441\u0442\u0430\u043d\u0442\u0438\u043d \u0412\u0430\u0441\u0438\u043b\u044c\u0435\u0432\u0438\u0447",telefon_number:"789",department:"1",position:"1"},{id:31,fio:"\u0418\u0432\u0430\u043d\u043e\u0432 \u0418\u043b\u044c\u044f \u0421\u0435\u0440\u0433\u0435\u0435\u0432\u0438",telefon_number:"001",department:"1",position:"1"},{id:32,fio:"\u041f\u0435\u0442\u0440\u043e\u0432 \u041c\u0430\u043a\u0441\u0438\u043c \u0418\u0432\u0430\u043d\u043e\u0432\u0438\u0447",telefon_number:"103",department:"1",position:"1"},{id:33,fio:"\u041a\u0443\u0437\u043d\u0435\u0446\u043e\u0432 \u041a\u043e\u043d\u0441\u0442\u0430\u043d\u0442\u0438\u043d \u0412\u0430\u0441\u0438\u043b\u044c\u0435\u0432\u0438\u0447",telefon_number:"789",department:"1",position:"1"},{id:34,fio:"\u0418\u0432\u0430\u043d\u043e\u0432 \u0418\u043b\u044c\u044f \u0421\u0435\u0440\u0433\u0435\u0435\u0432\u0438",telefon_number:"001",department:"1",position:"1"},{id:35,fio:"\u041f\u0435\u0442\u0440\u043e\u0432 \u041c\u0430\u043a\u0441\u0438\u043c \u0418\u0432\u0430\u043d\u043e\u0432\u0438\u0447",telefon_number:"103",department:"1",position:"1"},{id:36,fio:"\u041a\u0443\u0437\u043d\u0435\u0446\u043e\u0432 \u041a\u043e\u043d\u0441\u0442\u0430\u043d\u0442\u0438\u043d \u0412\u0430\u0441\u0438\u043b\u044c\u0435\u0432\u0438\u0447",telefon_number:"789",department:"1",position:"1"}],columns:[{name:"\u041e\u0442\u0434\u0435\u043b",selector:"department",sortable:!0,style:{color:"#202124",fontSize:"14px",fontWeight:500},hide:"sm",cell:function(e){var t=e.department;return y.filter((function(e){return e.value===t}))[0].name}},{name:"\u0424\u0418\u041e",selector:"fio",sortable:!0,style:{color:"#202124",fontSize:"14px",fontWeight:500}},{name:"\u0414\u043e\u043b\u0436\u043d\u043e\u0441\u0442\u044c",selector:"position",sortable:!0,hide:"sm",style:{color:"#202124",fontSize:"14px",fontWeight:500}},{name:"\u0422\u0435\u043b\u0435\u0444\u043e\u043d",selector:"telefon_number",sortable:!0,style:{color:"#202124",fontSize:"14px",fontWeight:500}},{name:"buttons",id:"edit",width:"150px",hide:"sm",cell:function(t){var n=t.id;return o.a.createElement(o.a.Fragment,null,o.a.createElement(c.a,{className:"mr-2",onClick:function(){return e.edit(n)}},o.a.createElement(S.b,null)),o.a.createElement(c.a,{onClick:function(){return e.del(n)}},o.a.createElement(S.a,null)))}}],tern:"",show:!1,itemModal:{}},e.openMod=function(){e.setState({show:!0,itemModal:{id:"",fio:"",telefon_number:"",department:"",position:""}})},e.add=function(t){var n=e.state.data.findIndex((function(e){return e.id===t.id}));if(-1===n&&""!==t.fio&&""!==t.telefon_number&&""!==t.department&&""!==t.position){var a=e.createItem(t);e.setState((function(e){var t=e.data;return{data:[a].concat(Object(l.a)(t))}}))}else-1!==n&&e.setState((function(n){var a=n.data,o=e.state.data.filter((function(e){return e.id===t.id}));if(o)return o[0].fio=t.fio,o[0].telefon_number=t.telefon_number,o[0].department=t.department,o[0].position=t.position,{data:Object(l.a)(a)}}))},e.createItem=function(e){return{id:x++,fio:e.fio,telefon_number:e.telefon_number,department:e.department,position:e.position}},e.del=function(t){e.setState((function(e){var n=e.data,a=n.findIndex((function(e){return e.id===t}));return{data:[].concat(Object(l.a)(n.slice(0,a)),Object(l.a)(n.slice(a+1)))}}))},e.handleChange=function(t){e.setState({tern:t.target.value})},e.edit=function(t){var n=e.state.data.filter((function(e){return e.id===t}));e.setState({itemModal:n[0],show:!0})},e.close=function(){e.setState({show:!1})},e}return Object(d.a)(n,[{key:"search",value:function(e,t){if(0===t.length)return e;for(var n=e.filter((function(e){return e.fio.toLowerCase().indexOf(t.toLowerCase().trim())>-1})),a=e.filter((function(e){return e.telefon_number.toLowerCase().indexOf(t.toLowerCase().trim())>-1})),o=y.filter((function(e){return e.name.toLowerCase().indexOf(t.toLowerCase().trim())>-1})),i=[],r=function(t){var n=e.filter((function(e){return e.department.indexOf(o[t].value)>-1}));0!==n.length&&(i=Object(l.a)(new Set([].concat(Object(l.a)(n),Object(l.a)(i)))))},m=0;m<o.length;m++)r(m);return Object(l.a)(new Set([].concat(Object(l.a)(n),Object(l.a)(a),Object(l.a)(i))))}},{key:"render",value:function(){var e=this.state,t=e.data,n=e.columns,a=e.tern,i=e.show,r=e.itemModal,l=this.search(t,a),m=function(){return o.a.createElement(p.a,{columns:n,data:l,pagination:!0,paginationPerPage:15,noHeader:!0})};return o.a.createElement(v.a,{fluid:!0},o.a.createElement(b.a,null,o.a.createElement(j.a,{xs:"4",md:"8"},o.a.createElement("div",{className:"mr-auto p-2 "},o.a.createElement(c.a,{className:"mr-auto p-2",onClick:this.openMod},"\u0421\u043e\u0437\u0434\u0430\u0442\u044c"))),o.a.createElement(j.a,{xs:"8",md:"4"},o.a.createElement("div",{className:"p-2"},o.a.createElement(h.a,{placeholder:"\u043f\u043e\u0438\u0441\u043a",value:a,onChange:this.handleChange})))),o.a.createElement(m,null),o.a.createElement(O,{show:i,item:r,onClose:this.close,onAdd:this.add}))}}]),n}(a.Component);n(55);r.a.render(o.a.createElement(k,null),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.d8649f9e.chunk.js.map