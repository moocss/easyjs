(function(b,B){function J(R,Q){var e=[].slice.call(arguments),O,P=typeof e[e.length-1]=="boolean"?e.pop():true;R=R||{};for(var N=1;Q=e[N++];){for(O in Q){if(P||!(O in R)){R[O]=Q[O]}}}return R}var c={mix:J,html:B.documentElement,rword:/[^, ]+/g,uuid:1,getUid:b.getComputedStyle?function(e){return e.uniqueNumber||(e.uniqueNumber=c.uuid++)}:function(N){var e=N.getAttribute("uniqueNumber");if(!e){e=c.uuid++;N.setAttribute("uniqueNumber",e)}return e},oneObject:function(R,P){if(typeof R=="string"){R=R.match(c.rword)||[]}var e={},O=P!==void 0?P:1;for(var N=0,Q=R.length;N<Q;N++){e[R[N]]=O}return e}};c.mix(c,{isXML:function(e){var N=e.ownerDocument||e;return N.createElement("p").nodeName!==N.createElement("P").nodeName},contains:function(N,e){if(N.compareDocumentPosition){return !!(N.compareDocumentPosition(e)&16)}else{if(N.contains){return N!==e&&(N.contains?N.contains(e):true)}}while((e=e.parentNode)){if(N===e){return true}}return false},getText:function(e){var N="",P;for(var O=0;e[O];O++){P=e[O];if(P.nodeType===3||P.nodeType===4){N+=P.nodeValue}else{if(P.nodeType!==8){N+=this.getText(P.childNodes)}}}return N},hasDuplicate:false,unique:function(e){if(e.length<2){return e}var V=[],T=[],P={},Q=e[0],S,U=0;if(Q.sourceIndex){for(var R=0,O=e.length;R<O;R++){Q=e[R];S=Q.sourceIndex+100000000;if(!P[S]){(T[U++]=new String(S))._=Q;P[S]=1}}T.sort();while(U){V[--U]=T[U]._}return V}else{var N=Q.compareDocumentPosition?z:w;e.sort(N);if(N.hasDuplicate){for(R=1;R<e.length;R++){if(e[R]===e[R-1]){e.splice(R--,1)}}}N.hasDuplicate=false;return e}}});var x=/^\s*([>+~,\s])\s*(\*|(?:[-\w*]|[^\x00-\xa0]|\\.)*)/;var D=/^\s+/;var p=/\s+$/;var a=/^\s*,\s*/;var j=/^([#\.:]|\[\s*)((?:[-\w]|[^\x00-\xa0]|\\.)+)/;var r=/^\(\s*("([^"]*)"|'([^']*)'|[^\(\)]*(\([^\(\)]*\))?)\s*\)/;var q=/^\s*(?:(\S?=)\s*(?:(['"])(.*?)\2|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/;var F=/\\([0-9a-fA-F]{2,2})/g;var C=/^(title|id|name|class|for|href|src)$/;var K=/\\/g;var d=/^((?:[-\w\*]|[^\x00-\xa0]|\\.)+)/;if(D.test("\xA0")){D=/^[\s\xA0]+/;p=/[\s\xA0]+$/}function i(e,N){return String.fromCharCode(parseInt(N,16))}function M(N,e){var O=e[3]||e[2];O=O?O.replace(F,i):e[1];if(N.indexOf("nth")===0){O=O.replace(/^\+|\s*/g,"");e=/(-?)(\d*)n([-+]?\d*)/.exec(O==="even"&&"2n"||O==="odd"&&"2n+1"||!/\D/.test(O)&&"0n+"+O||O);return{a:(e[1]+(e[2]||1))-0,b:e[3]-0}}return O}var l={"=":1,"!=":2,"|=":3,"~=":4,"^=":5,"$=":6,"*=":7};function z(N,e){if(N===e){z.hasDuplicate=true;return 0}if(!N.compareDocumentPosition||!e.compareDocumentPosition){return N.compareDocumentPosition?-1:1}return N.compareDocumentPosition(e)&4?-1:1}function w(U,T){if(U===T){w.hasDuplicate=true;return 0}var R,N,O=[],e=[],Q=U.parentNode,S=T.parentNode,V=Q;if(Q===S){return f(U,T)}else{if(!Q){return -1}else{if(!S){return 1}}}while(V){O.unshift(V);V=V.parentNode}V=S;while(V){e.unshift(V);V=V.parentNode}R=O.length;N=e.length;for(var P=0;P<R&&P<N;P++){if(O[P]!==e[P]){return f(O[P],e[P])}}return P===R?f(U,e[P],-1):f(O[P],T,1)}function f(N,e,O){if(N===e){return O}var P=N.nextSibling;while(P){if(P===e){return -1}P=P.nextSibling}return 1}var n=Array.prototype.slice;function k(N,e,O){N=n.call(N,0);if(e){e.push.apply(e,N)}else{e=N}return O?c.unique(e):e}try{n.call(c.html.childNodes,0)[0].nodeType}catch(L){function k(O,e,Q){var P=e||[],N=P.length;for(var R=0,S;S=O[R++];){P[N++]=S}return Q?c.unique(P):P}}function u(Q,U,Z){var e="getElementsByTagName",O=[],R={},X;if(Z&&Q.indexOf(":")>0&&U.length&&U[0].lookupNamespaceURI){var W=Q.split(":");X=W[0];Q=W[1];e="getElementsByTagNameNS";X=U[0].lookupNamespaceURI(X)}switch(U.length){case 0:return O;case 1:var ab=X?U[0][e](X,Q):U[0][e](Q);for(var V=0,aa=0,P;P=ab[V++];){if(P.nodeType===1){O[aa++]=P}}return O;default:for(V=0,aa=0;P=U[V++];){var N=X?P[e](X,Q):P[e](Q);for(var T=0,S;S=N[T++];){var Y=c.getUid(S);if(!R[Y]){R[Y]=O[aa++]=S}}}return O}}var E=c.oneObject("action,cite,codebase,data,href,longdesc,lowsrc,src,usemap",2);var s=c["@bools"]="autofocus,autoplay,async,checked,controls,declare,disabled,defer,defaultChecked,contentEditable,ismap,loop,multiple,noshade,open,noresize,readOnly,selected";var o=c.oneObject(s.toLowerCase());var t,g,G,m;(function(){var V=B.createElement("select");var S=V.appendChild(B.createElement("option"));S.setAttribute("selected","selected");S.className="x";t=S.getAttribute("class")!="x";V.appendChild(B.createComment(""));m=V.getElementsByTagName("*").length==2;var W=B.getElementsByTagName("*"),O,Q,T=[],R=0,P=0;while((O=W[R++])){Q=O.nodeType;Q===1?c.getUid(O):Q===8?T.push(O):0}while((O=T[P++])){O.parentNode.removeChild(O)}g=V.hasAttribute?!S.hasAttribute("selected"):true;var N=B.createElement("div"),e="fixId"+(new Date()).getTime(),U=c.html;N.innerHTML="<a name='"+e+"'/>";U.insertBefore(N,U.firstChild);G=!!B.getElementById(e);U.removeChild(N)})();function h(P,R,T){var N=[];try{if(b.DOMParser){var O=T.evaluate(P,R,null,7,null);for(var Q=0,U=O.snapshotLength;Q<U;Q++){N[Q]=O.snapshotItem(Q)}}else{O=R.selectNodes(P);for(Q=0,U=O.length;Q<U;Q++){N[Q]=O[Q]}}}catch(S){return false}return N}var H=c.query=function(P,U,Z,af,S,ag,X){Z=Z||[];U=U||B;var ah=k;if(!U.nodeType){U=ah(U);if(!U.length){return Z}}else{U=[U]}var ai=x,ac=K,an=a,Q=U[0],aq=Q.ownerDocument||Q,ao=d,R,ak,am,ab,O,Y,aa,V;P=P.replace(D,"").replace(p,"");S=S!==void 0?S:c.isXML(aq);if(!S&&aq.querySelectorAll){var T=P;if(U.length>2||aq.documentMode==8&&Q.nodeType==1){if(U.length>2){Q=aq}T=".fix_icarus_sqa "+T;for(var aj=0,ae;ae=U[aj++];){if(ae.nodeType===1){ae.className="fix_icarus_sqa "+ae.className}}}if(aq.documentMode!==8||Q.nodeName.toLowerCase()!=="object"){try{return ah(Q.querySelectorAll(T),Z,ag)}catch(al){}finally{if(T.indexOf(".fix_icarus_sqa")===0){for(aj=0;ae=U[aj++];){if(ae.nodeType===1){ae.className=ae.className.replace("fix_icarus_sqa ","")}}}}}}var W=/^(^|[#.])((?:[-\w]|[^\x00-\xa0]|\\.)+)$/.exec(P);if(W){var ad=W[2].replace(ac,""),ap=W[1];if(ap==""){ab=u(ad,U,S)}else{if(ap==="."&&U.length===1){if(S){ab=h("//*[@class='"+ad+"']",Q,aq)}else{if(Q.getElementsByClassName){ab=Q.getElementsByClassName(ad)}}}else{if(ap==="#"&&U.length===1){if(S){ab=h("//*[@id='"+ad+"']",Q,aq)}else{if(Q.nodeType==9){ae=aq.getElementById(ad);ab=!ae?[]:!G?[ae]:ae.getAttributeNode("id").nodeValue===ad?[ae]:false}}}}}if(ab){return ah(ab,Z,ag)}}af=U;if(af.length){loop:while(P&&Y!==P){X=false;am=null;ak={};if((W=ai.exec(P))){P=RegExp.rightContext;am=[];O=(S?W[2]:W[2].toUpperCase()).replace(ac,"")||"*";aj=0;aa=0;R=O==="*";switch(W[1]){case" ":if(P.length||W[2]){am=u(O,af,S)}else{am=af;break loop}break;case">":while((ae=af[aj++])){for(ae=ae.firstChild;ae;ae=ae.nextSibling){if(ae.nodeType===1&&(R||O===ae.nodeName)){am[aa++]=ae}}}break;case"+":while((ae=af[aj++])){while((ae=ae.nextSibling)){if(ae.nodeType===1){if(R||O===ae.nodeName){am[aa++]=ae}break}}}break;case"~":while((ae=af[aj++])){while((ae=ae.nextSibling)){if(ae.nodeType===1&&(R||O===ae.nodeName)){V=c.getUid(ae);if(ak[V]){break}else{ak[V]=am[aa++]=ae}}}}am=c.unique(am);break}}else{if((W=ao.exec(P))){P=RegExp.rightContext;am=u(W[1].replace(ac,""),af,S)}}if(P){var N=H.filter(P,am,af,aq,S);P=N[0];am=N[1];if(!am){X=true;am=u("*",af,S)}if((W=an.exec(P))){P=RegExp.rightContext;ah(am,Z);return H(P,U,Z,[],S,true,X)}else{af=am}}}}if(ag){if(am.length){return ah(am,Z,ag)}}else{if(B!==aq||m&&X){for(Z=[],aa=0,aj=0;ae=am[aj++];){if(ae.nodeType===1){Z[aa++]=ae}}return Z}}return am};var y=c.oneObject("eq|gt|lt|first|last|even|odd".split("|"));c.mix(H,{getAttribute:!t?function(N,e){return N.getAttribute(e)||""}:function(P,O,N){if(N){return P.getAttribute(O)||""}O=O.toLowerCase();if(E[O]){return P.getAttribute(O,2)||""}if(P.tagName==="INPUT"&&O=="type"){return P.getAttribute("type")||P.type}var e=o[O]?(P.getAttribute(O)?O:""):(P=P.getAttributeNode(O))&&P.value||"";return C.test(O)?e:e.toLowerCase()},hasAttribute:!g?function(O,N,e){return e?!!O.getAttribute(N):O.hasAttribute(N)}:function(N,e){e=e.toLowerCase();N=N.getAttributeNode(e);return !!(N&&(N.specified||N.nodeValue))},filter:function(O,al,ad,aq,Q,ak){var R=j,Z=q,S=r,ab=K,am=F,ae=k,ah=i,W=l,X=M,T,ap,aj;while((T=R.exec(O))){O=RegExp.rightContext;ap=(T[2]||"").replace(ab,"");if(!al){if(ad.length===1&&ad[0]===aq){switch(T[1]){case"#":if(!Q){aj=aq.getElementById(ap);if(!aj){al=[];continue}if(G?aj.id===ap:aj.getAttributeNode("id").nodeValue===ap){al=[aj];continue}}break;case":":switch(ap){case"root":al=[aq.documentElement];continue;case"link":al=ae(aq.links||[]);continue}break}}al=u("*",ad,Q)}var V=0,P=false,N;switch(T[1]){case"#":V=["id","=",ap];break;case".":V=["class","~=",ap];break;case":":aj=H.pseudoAdapter[ap];if((T=S.exec(O))){O=RegExp.rightContext;N=X(ap,T)}if(aj){V=aj}else{if(ap==="not"){P=true;if(N==="*"){al=[]}else{if(d.test(N)){aj=[];T=Q?N:N.toUpperCase();for(var ag=0,aa=0,ai;ai=al[ag++];){if(T!==ai.nodeName){aj[aa++]=ai}}al=aj}else{var Y=H.filter(N,al,ad,aq,Q,true);V=Y.filter;N=Y.args}}}else{throw'An invalid or illegal string was specified : "'+ap+'"!'}}break;default:V=[ap.toLowerCase()];if((T=Z.exec(O))){O=RegExp.rightContext;if(T[1]){V[1]=T[1];V[2]=T[3]||T[4];V[2]=V[2]?V[2].replace(am,ah).replace(ab,""):""}}break}if(ak){return{filter:V,args:N}}if(al.length&&V){aj=[];ag=0;aa=0;if(typeof V==="function"){if(y[ap]){N=N===void 0?al.length-1:~~N;for(;ai=al[ag];){if(V(ag++,N)^P){aj[aa++]=ai}}}else{while((ai=ai[ag++])){if((!!V(ai,N))^P){aj[aa++]=ai}}}}else{if(typeof V.exec==="function"){aj=V.exec({not:P,xml:Q},al,N,aq)}else{var ao=V[0],U=W[V[1]],an=V[2]||"",af,ac;if(!Q&&ao==="class"&&U===4){an=" "+an+" ";while((ai=al[ag++])){var e=ai.className;if(!!(e&&(" "+e+" ").indexOf(an)>-1)^P){aj[aa++]=ai}}}else{if(!Q&&U&&an&&!C.test(ao)){an=an.toLowerCase()}if(U===4){an=" "+an+" "}while((ai=al[ag++])){if(!U){af=H.hasAttribute(ai,ao,Q)}else{if(an===""&&U>3){af=false}else{ac=H.getAttribute(ai,ao,Q);switch(U){case 1:af=ac===an;break;case 2:af=ac!==an;break;case 3:af=ac===an||ac.substr(0,an.length+1)===an+"-";break;case 4:af=ac!==""&&(" "+ac+" ").indexOf(an)>=0;break;case 5:af=ac!==""&&ac.indexOf(an)===0;break;case 6:af=ac!==""&&ac.substr(ac.length-an.length)===an;break;case 7:af=ac!==""&&ac.indexOf(an)>=0;break}}}if(af^P){aj[aa++]=ai}}}}}al=aj}}return[O,al]}});var v=function(O,e,N){return{exec:function(T,af,R){var Y=[],S=T.not,U=O,ah=e,al=N,ab={},ai={},ak=R.a,aj=R.b,ag=0,ad=0,P,Z,aa,V;if(!al&&ak===1&&aj===0){return S?[]:af}var W=al?"nodeName":"nodeType";for(;P=af[ag++];){var X=P.parentNode;var ac=c.getUid(X);if(!ai[ac]){V=ai[ac]=1;var Q=al?P.nodeName:1;for(var ae=X[U];ae;ae=ae[ah]){if(ae[W]===Q){ac=c.getUid(ae);ab[ac]=V++}}}aa=ab[c.getUid(P)]-aj;Z=ak===0?aa===0:(aa%ak===0&&aa/ak>=0);(Z^S)&&(Y[ad++]=P)}return Y}}};function A(O,S,V){var R="var result = [], flag_not = flags.not, node, el, tagName, i = 0, ri = 0, found = 0; for (; node = el = lastResult[i++];found = 0) {";var P="{0} while (!found && (node=node.{1})) { (node.{2} === {3})  && ++found;  }";var N=" node = el;while (!found && (node = node.previousSibling)) {  node.{2} === {3} && ++found;  }";var e="!found ^ flag_not && (result[ri++] = el);  }   return result";var Q=S?"nextSibling":"previousSibling";var U={type:[" tagName = el.nodeName;",Q,"nodeName","tagName"],child:["",Q,"nodeType","1"]}[O];var T=R+P+(V?N:"")+e;var W=new Function("flags","lastResult",T.replace(/{(\d)}/g,function(Y,X){return U[X]}));return{exec:W}}function I(N,e){return{exec:function(Q,R){var O=[],V=N,T=e?Q.not:!Q.not;for(var S=0,P=0,U;U=R[S++];){if(U[V]^T){O[P++]=U}}return O}}}H.pseudoAdapter={root:function(e){return e===(e.ownerDocument||e.document).documentElement},target:{exec:function(N,e,V,U){var W=[],R=N.not;var S=U.defaultView||U.parentWindow;var Q=S.location.hash.slice(1);for(var P=0,T=0,O;O=e[P++];){if(((O.id||O.name)===Q)^R){W[T++]=O}}return W}},"first-child":A("child",false,false),"last-child":A("child",true,false),"only-child":A("child",true,true),"first-of-type":A("type",false,false),"last-of-type":A("type",true,false),"only-of-type":A("type",true,true),"nth-child":v("firstChild","nextSibling",false),"nth-last-child":v("lastChild","previousSibling",false),"nth-of-type":v("firstChild","nextSibling",true),"nth-last-of-type":v("lastChild","previousSibling",true),empty:{exec:function(P,Q){var e=[],S=P.not,O;for(var R=0,N=0,T;T=Q[R++];){if(T.nodeType==1){if(!T.firstChild^S){e[N++]=T}}}return e}},link:{exec:function(N,e){var T=(e[0].ownerDocument||e[0].document).links;if(!T){return[]}var U=[],S={},Q=N.not;for(var P=0,R=0,O;O=T[P++];){S[c.getUid(O)]=1}for(P=0;O=e[P++];){if(S[c.getUid(O)]^Q){U[R++]=O}}return U}},lang:{exec:function(O,e,U){var V=[],N=new RegExp("^"+U,"i"),S=O.not;for(var R=0,T=0,P;P=e[R++];){var Q=P;while(Q&&!Q.getAttribute("lang")){Q=Q.parentNode}Q=!!(Q&&N.test(Q.getAttribute("lang")));if(Q^S){V[T++]=P}}return V}},active:function(e){return e===e.ownerDocument.activeElement},focus:function(e){return(e.type||e.href)&&e===e.ownerDocument.activeElement},indeterminate:function(e){return e.indeterminate===true&&e.type==="checkbox"},enabled:I("disabled",false),disabled:I("disabled",true),checked:I("checked",true),contains:{exec:function(O,P,e){var S=[],R=O.not;for(var Q=0,N=0,T;T=P[Q++];){if(!!~((T.innerText||T.textContent||c.getText([T])).indexOf(e))^R){S[N++]=T}}return S}},selected:function(e){e.parentNode.selectedIndex;return e.selected===true},header:function(e){return/h\d/i.test(e.nodeName)},button:function(e){return"button"===e.type||e.nodeName==="BUTTON"},input:function(e){return/input|select|textarea|button/i.test(e.nodeName)},parent:function(e){return !!e.firstChild},has:function(e,N){return !!c.query(N,[e]).length},first:function(e){return e===0},last:function(N,e){return N===e},even:function(e){return e%2===0},odd:function(e){return e%2===1},lt:function(N,e){return N<e},gt:function(N,e){return N>e},eq:function(N,e){return N===e},hidden:function(e){return e.type==="hidden"||(!e.offsetWidth&&!e.offsetHeight)||(e.currentStyle&&e.currentStyle.display==="none")}};H.pseudoAdapter.visible=function(e){return !H.pseudoAdapter.hidden(e)};"text,radio,checkbox,file,password,submit,image,reset".replace(c.rword,function(e){H.pseudoAdapter[e]=function(N){return(N.getAttribute("type")||N.type)===e}});b.dom=c})(this,this.document);