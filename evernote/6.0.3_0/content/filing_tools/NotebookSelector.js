function NotebookSelector(h,m,d,u){function q(b,a,c,d,v,e){var f=document.createElement("div"),h=document.createElement("span"),l=document.createElement("span");f.setAttribute("name",b.toLowerCase());v&&f.setAttribute("shareKey",v);e&&f.setAttribute("linkedGuid",e);h.innerText=b;f.id=a;f.className="notebook";"biz"==c||"linked"==c?(f.className+=" "+c,f.setAttribute("type",c)):f.setAttribute("type","pers");d&&(l.innerText=" ("+d+")");f.addEventListener("click",function(){g.guid!==this.id&&t(this,!1);
n=!0;m.click()});f.addEventListener("mouseover",function(){r(this)});f.appendChild(h);f.appendChild(l);f.title=b;d&&(f.title+=" ("+d+")");return f}function w(b){var a=document.createElement("div");a.className="stack";var c=document.createElement("div");c.className="stackHeader";c.innerText=b;a.appendChild(c);return l[b]=a}function x(){if(""==h.value){m.className=m.className.replace(/\s*visible/g,"");for(var b=d.querySelectorAll(".notebook.hidden"),a=0;a<b.length;a++)b.item(a).className=b.item(a).className.replace(/\s*hidden/g,
"");e=d.querySelectorAll(".notebook");for(var c=d.querySelectorAll(".stack.collapsed"),a=0;a<c.length;a++)c.item(a).className=c.item(a).className.replace(/\s*collapsed/g,"")}else{m.className+=" visible";b=h.value.toLowerCase();c=d.querySelectorAll(".notebook:not(.hidden):not([name^='"+b+"'])");for(a=0;a<c.length;a++)c.item(a).className+=" hidden";c=d.querySelectorAll(".notebook.hidden[name^='"+b+"']");for(a=0;a<c.length;a++)c.item(a).className=c.item(a).className.replace(/\s*hidden/g,"");c=d.querySelectorAll(".stack:not(.collapsed)");
for(a=0;a<c.length;a++)c.item(a).className+=" collapsed";e=d.querySelectorAll(".notebook[name^='"+b+"']:not(.hidden)");0<e.length&&r(e.item(0))}}function r(b){var a=d.querySelector(".notebook.highlighted");a&&(a.className=a.className.replace(/\s*highlighted/g,""));g.guid!==b.id&&(b.className+=" highlighted",b.scrollIntoViewIfNeeded())}function t(b,a){a&&(s=!0);g={};g.name=b.textContent||b.innerText;g.guid=b.id;var c,k,e;b.getAttribute?(c=b.getAttribute("type"),k=b.getAttribute("linkedGuid"),e=b.getAttribute("shareKey")):
c=b.type;g.type=c;g.linkedGuid=k;g.shareKey=e;if(k=d.querySelector(".notebook.selected"))k.className=k.className.replace(/\s*selected/g,"");k=b;k.getAttribute||(k=d.querySelector(".notebook[id='"+b.id+"']"));k&&(k.className=k.className.replace(/\s*highlighted/g,"")+" selected",k.scrollIntoViewIfNeeded());u&&u({name:"selectedNotebook",notebookName:g.name,smart:a,type:c})}function p(){d.style.height="";d.style.height=Math.min(y,d.offsetHeight)}var y=224,n=!1,s=!1,e,g,l={};m.addEventListener("click",
function(){h.value="";x();h.focus()});h.addEventListener("input",x);h.addEventListener("keydown",function(b){if(38==b.keyCode||40==b.keyCode){e||(e=d.querySelectorAll(".notebook"));var a=d.querySelector(".notebook.highlighted");a||(a=d.querySelector(".notebook.selected"));a&&(a=Array.prototype.slice.call(e).indexOf(a),38==b.keyCode&&-1<a-1&&e.item(a-1)?r(e.item(a-1)):40==b.keyCode&&e.item(a+1)&&r(e.item(a+1)),b.preventDefault())}else 13==b.keyCode&&(a=d.querySelector(".notebook.highlighted"))&&(t(a,
!1),m.click())});this.addNotebookToAll=function(b,a,c,k,e,g){b=q(b,a,c,k,e,g);d.appendChild(b);p();return b};this.addNotebookToStack=function(b,a,c,d,e,g,f){b=q(b,a,c,d,e,g);l[f].appendChild(b);p();return b};this.addStackIfNeeded=function(b){if(!l[b])return b=w(b),d.appendChild(b),b};this.changedNotebook=function(){return n};this.focusEntry=function(){h.focus()};this.getNotebook=function(b){return d.querySelector(".notebook[id='"+b+"']")};this.getSelected=function(){return g};this.hasNotChangedSmartFiling=
function(){return s&&!n};this.insertNotebook=function(b,a,c,e,g,h,f){a=q(a,c,e,g,h,f);d.insertBefore(a,d.children[b]);p();return a};this.insertNotebookIntoStack=function(b,a,c,d,e,g,f,h){a=q(a,c,d,e,g,f);l[h].insertBefore(a,l[h].children[b+1]);p();return a};this.insertStackIfNeeded=function(b,a){if(!l[a]){var c=w(a);d.insertBefore(c,d.children[b]);return c}};this.overridable=function(){return!n&&!s};this.reset=function(){s=n=!1;d.innerHTML="";g=e=null;l={}};this.select=t;this.setListHeight=p;Object.preventExtensions(this)}
Object.preventExtensions(NotebookSelector);