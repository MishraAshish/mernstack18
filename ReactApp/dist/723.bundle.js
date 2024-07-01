"use strict";(self.webpackChunkreactapp=self.webpackChunkreactapp||[]).push([[723],{104:(t,e,n)=>{n.r(e),n.d(e,{default:()=>d});var r=n(471),o=n(468),a=n(972),l=n(372);function c(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}const u=function(t){var e,n,a=t.item,u=(e=(0,r.useState)(a.qty),n=2,function(t){if(Array.isArray(t))return t}(e)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,a,l,c=[],u=!0,i=!1;try{if(a=(n=n.call(t)).next,0===e){if(Object(n)!==n)return;u=!1}else for(;!(u=(r=a.call(n)).done)&&(c.push(r.value),c.length!==e);u=!0);}catch(t){i=!0,o=t}finally{try{if(!u&&null!=n.return&&(l=n.return(),Object(l)!==l))return}finally{if(i)throw o}}return c}}(e,n)||function(t,e){if(t){if("string"==typeof t)return c(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?c(t,e):void 0}}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),i=u[0],f=u[1],d=(0,o.wA)();return r.createElement("tr",null,r.createElement("td",null,a.name),r.createElement("td",null,a.price),r.createElement("td",null,a.desc),r.createElement("td",null,a.rating),r.createElement("td",null,t.readOnly?i:r.createElement("input",{type:"text",value:i,onChange:function(t){f(t.target.value)}})),r.createElement("td",null,a.qty*a.price),t.readOnly?"":r.createElement(r.Fragment,null,r.createElement("td",null,r.createElement("button",{onClick:function(){return d((0,l.Ai)(a._id))}},"Remove")," "),r.createElement("td",null,r.createElement("button",{onClick:function(){return d((0,l.fk)(a._id,i))}},"Edit"))))},i=function(t){var e=t.data,n=e.count,o=e.amount;return r.createElement("div",null,t.readOnly?r.createElement("h5",null," Cart Summary "):r.createElement("h2",null," Cart Summary "),r.createElement("p",null," Amount: ",o," "),r.createElement("p",null," Products Count: ",n," "))};function f(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}const d=function(t){var e=(0,o.d4)((function(t){return t.cartReducer})),n=(0,o.d4)((function(t){return t.userReducer.user})),c=(0,o.d4)((function(t){return t.productReducer.Loading})),d=(0,o.wA)(),s=(0,a.Zp)();return r.createElement("div",{className:"col-md-12"},r.createElement("h1",null,"Cart Component"),e&&e.length>=1?r.createElement(r.Fragment,null,r.createElement("table",null,r.createElement("thead",null,r.createElement("tr",null,r.createElement("th",null,"Name"),r.createElement("th",null,"Price"),r.createElement("th",null,"Description"),r.createElement("th",null,"Rating"),r.createElement("th",null,"Quantity"),r.createElement("th",null,"Total"),t.readOnly?"":r.createElement(r.Fragment,null,r.createElement("th",null,"Remove"),r.createElement("th",null,"Edit")))),r.createElement("tbody",null,e.map((function(e){return r.createElement(u,{item:e,readOnly:t.readOnly,key:e._id})})))),r.createElement(i,{data:function(t){var e,n=0,r=0,o=function(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(t){if("string"==typeof t)return f(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?f(t,e):void 0}}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var r=0,o=function(){};return{s:o,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,l=!0,c=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return l=t.done,t},e:function(t){c=!0,a=t},f:function(){try{l||null==n.return||n.return()}finally{if(c)throw a}}}}(t);try{for(o.s();!(e=o.n()).done;){var a=e.value;n+=a.qty*a.price,r+=a.qty}}catch(t){o.e(t)}finally{o.f()}return{amount:n,count:r}}(e),readOnly:t.readOnly}),t.readOnly?r.createElement(r.Fragment,null):r.createElement(r.Fragment,null,c?"":r.createElement("button",{onClick:function(){return t=e,void((r=n._id)?d((0,l.RA)(t,r)):alert("Please sign in to save the cart!!!"));var t,r}},"Save Cart"),r.createElement("button",{onClick:function(t){s("/checkout"),t.preventDefault()}},"Go To Checkout"))):r.createElement("h4",null,"Please add product to cart"))}},372:(t,e,n)=>{n.d(e,{Ai:()=>c,Mr:()=>l,RA:()=>i,UW:()=>f,fk:()=>u});var r=n(216),o=n(710);function a(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var l=function(t){return{type:r.SJ,payload:{item:t}}},c=function(t){return{type:r.Zk,payload:{id:t}}},u=function(t,e){return{type:r.u3,payload:{id:t,qty:parseInt(e)}}},i=function(t,e){return console.log("Items To Be Saved",t),function(n){n((0,o.r1)(!0)),window.fetch("http://localhost:9000/cart/api/saveUserCart",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({userid:e,cart:t})}).then((function(t){return t.json()})).then((function(t){console.log("response ",t),n((0,o.r1)(!1))})).catch((function(t){n((0,o.r1)(!1)),console.log("Error While Saving Cart",t)}))}},f=function(t){return function(e){console.log("Get List Of items"),window.fetch("http://localhost:9000/cart/api/getUserCart",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({userid:t})}).then((function(t){return t.json()})).then((function(t){console.log("response - get user cart ",t),e({type:r.v3});var n,o=function(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(t){if("string"==typeof t)return a(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?a(t,e):void 0}}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var r=0,o=function(){};return{s:o,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var l,c=!0,u=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return c=t.done,t},e:function(t){u=!0,l=t},f:function(){try{c||null==n.return||n.return()}finally{if(u)throw l}}}}(t.cart);try{for(o.s();!(n=o.n()).done;){var c=n.value;console.log("item in for of",c);var u=l(c);e(u)}}catch(t){o.e(t)}finally{o.f()}})).catch((function(t){console.log("Error While Login",t)}))}}},710:(t,e,n)=>{n.d(e,{Tu:()=>a,j0:()=>c,r1:()=>l});var r=n(216),o=n(569),a=function(t){return console.log("Product ",t),function(e){o.A.post("http://localhost:9000/product/api/saveProduct",t).then((function(t){var n=t.data;console.log("product save response ",n),e(c())})).catch((function(t){console.log("Error While Saving Product",t)}))}},l=function(t){return{type:"SET_LOADING",payload:{loading:t}}},c=function(){return console.log("Product "),function(t){o.A.get("http://localhost:9000/product/api/getproducts").then((function(e){var n,o=e.data;console.log("get products response ",o),t((n=o,{type:r.eA,payload:{products:n}}))})).catch((function(t){console.log("Error While Saving Product",t)}))}}}}]);