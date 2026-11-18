// --- Script 1 ---
(()=>{var i=Function.prototype.bind.bind(Function.prototype.call),nn=(y,d)=>{for(let m=y;m;m=Object.getPrototypeOf(m)){let T=Object.getOwnPropertyDescriptor(m,d);if(T)return T}throw new TypeError(`${d} is not defined`)},a=(y,d)=>i(nn(y,d).get),J=(y,d)=>i(nn(y,d).set);var rn=i(String.prototype.endsWith),xr=i(String.prototype.slice),I=i(RegExp.prototype.exec),Or=/^_(self|top|parent)$/i,kr=/(^|\s)noreferrer(\s|$)/i,sn=/^(no-referrer(-when-downgrade)?|same-origin|(strict-)?origin(-when-cross-origin)?|unsafe-url)$/i,Cr=/^(never|default|always|origin-when-crossorigin)$/i,cn=/^(no-referrer|same-origin|never)$/i,Ir=/\s(musical_ly|trill)_|\sBytedanceWebview\//,on=y=>rn(y,".")?xr(y,0,-1):y,ln=y=>{let d=on(y),m=`.${d}`;return T=>{let N=on(T);return N===d||rn(N,m)}},an=(y,d,m)=>y!==void 0&&(y.protocol==="https:"||y.protocol==="http:")&&y.origin!==d&&!m(y.hostname),Bt=(y,d,m)=>y!==null&&I(kr,y)!==null?!0:d!==null&&I(sn,d)!==null?I(cn,d)!==null:m,pn=(y,d)=>I(sn,y)!==null||I(Cr,y)!==null?I(cn,y)!==null:d,Q=(y,{metaKey:d,ctrlKey:m,shiftKey:T,button:N})=>y&&I(Or,y)===null?y:d||m||T||N===1?"_blank":"",un=y=>I(Ir,y)!==null;var fn="http://www.w3.org/1999/xhtml",Mr="http://www.w3.org/2000/svg",Dr="http://www.w3.org/1999/xlink",zt=["rel","referrerpolicy","download","ping","hreflang","type"],it=Object.freeze({__proto__:null,metaKey:!1,ctrlKey:!1,shiftKey:!1,button:0}),Lr=Object.freeze({__proto__:null,composed:!0}),vr=/(?:^|[\s,])noreferrer(?=[\s,=]|$)\s*(?:=[\s=]*([^\s,=]*))?(?![\s\S]*[\s,]noreferrer(?:[\s,=]|$))/i,Ar=/^(|yes|true|[+-]?0*[1-9].*)$/i,qt=/<(?:(!--)|([!?]|\/(?![a-z]))|(\/?)([a-z][^\t\n\f\r />]*))/gi,Yt=/--!?>/g,Gt=/>/g,P=/([\t\n\f\r /]*)(?:(>)|([^\t\n\f\r />][^\t\n\f\r />=]*)[\t\n\f\r ]*(?:=[\t\n\f\r ]*(?:"([^"]*)"?|'([^']*)'?|([^\t\n\f\r >]*)))?)/y,Xt=/<\/([a-z]+)[\t\n\f\r />]/gi,at=/<(\/?)script[\t\n\f\r />]|<!--|-->/gi,pt=/&#(?:x([0-9a-f]+)|([0-9]+));?/gi,Z=/<template[\t\n\f\r />]/gi,ut=/[=][\t\n\f\r ]*["']?/g,dn={__proto__:null,iframe:!0,noembed:!0,noframes:!0,plaintext:!0,script:!0,style:!0,textarea:!0,title:!0,xmp:!0},Pr={__proto__:null,math:!0,select:!0,svg:!0},Fr="shopify-exit-interstitial";function yn(y){let d=window;if(d.top!==d)return;let m=document,T=d.navigation,N=location.origin,b=URL,ft=a(b.prototype,"href"),hn=a(b.prototype,"origin"),mn=a(b.prototype,"protocol"),gn=a(b.prototype,"hostname"),En=J(b.prototype,"search"),Vt=FormData,Jt=i(FormData.prototype.forEach),_n=URLSearchParams,F=typeof DataTransfer=="function"?DataTransfer:void 0,wn=F&&a(DataTransfer.prototype,"items"),Tn=F&&a(DataTransfer.prototype,"files"),Rn=F&&i(DataTransferItemList.prototype.add),Sn=F&&J(HTMLInputElement.prototype,"files"),Nn=i(URLSearchParams.prototype.toString),bn=i(URLSearchParams.prototype.append),Qt=i(Event.prototype.preventDefault),Zt=i(Event.prototype.stopImmediatePropagation),dt=i(Event.prototype.composedPath),te=a(Event.prototype,"type"),ee=a(Event.prototype,"target"),ne=typeof SubmitEvent=="function"?a(SubmitEvent.prototype,"submitter"):void 0,xn=typeof File=="function"?a(File.prototype,"name"):void 0,oe=a(HTMLButtonElement.prototype,"form"),re=a(HTMLInputElement.prototype,"form"),On=a(Event.prototype,"cancelable"),yt=a(Event.prototype,"defaultPrevented"),kn=a(Event.prototype,"cancelBubble"),Cn=a(MouseEvent.prototype,"button"),In=a(MouseEvent.prototype,"metaKey"),Mn=a(MouseEvent.prototype,"ctrlKey"),Dn=a(MouseEvent.prototype,"shiftKey"),Ln=T&&a(NavigateEvent.prototype,"destination"),vn=T&&a(NavigationDestination.prototype,"url"),se=T&&a(NavigateEvent.prototype,"navigationType"),An=T&&a(NavigateEvent.prototype,"formData"),ce=T&&"sourceElement"in NavigateEvent.prototype?a(NavigateEvent.prototype,"sourceElement"):void 0,w=i(Element.prototype.getAttribute),Pn=i(Element.prototype.getAttributeNS),x=i(Element.prototype.setAttribute),Fn=i(Element.prototype.remove),ht=i(Node.prototype.appendChild),mt=a(Element.prototype,"localName"),K=a(Element.prototype,"namespaceURI"),Hn=i(Document.prototype.querySelector),Un=i(Document.prototype.querySelectorAll),Wn=a(NodeList.prototype,"length"),$n=i(NodeList.prototype.item),tt=a(Node.prototype,"baseURI"),Kn=a(Document.prototype,"URL"),jn=a(Document.prototype,"documentElement"),et=a(Node.prototype,"isConnected"),le=a(Node.prototype,"ownerDocument"),M=a(Node.prototype,"parentNode"),ie=i(Node.prototype.getRootNode),Bn=a(ShadowRoot.prototype,"host"),zn=a(Element.prototype,"assignedSlot"),qn=a(Text.prototype,"assignedSlot"),Yn=a(HTMLInputElement.prototype,"type"),Gn=a(HTMLButtonElement.prototype,"type"),Xn=i(Element.prototype.querySelector),Vn=i(Element.prototype.matches),Jn=a(Event.prototype,"bubbles"),Qn=a(Event.prototype,"composed"),Zn=i(EventTarget.prototype.dispatchEvent),j=i(Document.prototype.createElement),ae=i(HTMLElement.prototype.click),pe=i(HTMLFormElement.prototype.submit),to=J(HTMLTextAreaElement.prototype,"value"),eo=i(Element.prototype.closest),ue=typeof HTMLDialogElement=="function"&&typeof HTMLDialogElement.prototype.close=="function"?i(HTMLDialogElement.prototype.close):void 0,fe=i(d.open),no=i(location.assign),oo=i(location.replace),ro=encodeURIComponent,so=i(String.prototype.startsWith),_=i(RegExp.prototype.exec),de=i(String.prototype.charCodeAt),H=i(String.prototype.slice),D=i(String.prototype.toLowerCase),co=String.fromCharCode,ye=Number.parseInt,he=i(d.setTimeout),U=i(EventTarget.prototype.addEventListener),gt=i(EventTarget.prototype.removeEventListener),nt=i(d.addEventListener),lo=Object.defineProperties,me=Reflect.defineProperty,O=Reflect.apply,Et=(t,e)=>me(t,t.length,{__proto__:null,value:e,writable:!0,enumerable:!0,configurable:!0}),_t=t=>{let e=[],n=[HTMLElement.prototype,SVGElement.prototype,Document.prototype,d];for(let o=0;o<n.length;o+=1)try{e[e.length]={get:a(n[o],t),set:J(n[o],t)}}catch{}return e},io={click:_t("onclick"),auxclick:_t("onauxclick"),submit:_t("onsubmit")},B=WeakMap,wt=WeakSet,z=i(WeakMap.prototype.get),Tt=i(WeakMap.prototype.set),ge=i(WeakMap.prototype.delete),Rt=i(WeakSet.prototype.add),ot=i(WeakSet.prototype.has),ao=ln(y.site),St=un(navigator.userAgent),Ee=ft(new b(y.exitPath,N)),po=`${Ee}?`,L=(t,e)=>{try{let n=new b(t,e);return{href:ft(n),origin:hn(n),protocol:mn(n),hostname:gn(n)}}catch{return}},uo=(t,e,n)=>{let o=n?"&noreferrer=1":"";return`${Ee}?q=${ro(t.href)}&trigger=${e}${o}`},rt=()=>{let t=Un(m,'meta[name="referrer" i][content]'),e=!1;for(let n=0;n<Wn(t);n+=1)e=pn(w($n(t,n),"content"),e);return e},q=(t,e,{target:n,noReferrer:o,replaces:r})=>{let s=uo(t,e,o);if(n){fe(d,s,n,"noopener");return}(r?oo:no)(location,s)},k=t=>an(t,N,ao),st=0,Nt,bt=!1,xt=t=>{if(st>0){Nt=t;return}t()},fo=t=>{if(st-=1,t&&(bt=!0),st>0)return;let e=bt?void 0:Nt;Nt=void 0,bt=!1,e&&e()},yo=t=>t!==void 0&&so(t.href,po),R=t=>{try{return mt(t)}catch{return}},_e=t=>Bt(w(t,"rel"),w(t,"referrerpolicy"),rt()),ho=t=>{let e=ce?ce(t):null,n=e===null?void 0:R(e);return n==="a"||n==="area"?_e(e):rt()},mo=t=>{let e=L(vn(Ln(t)));if(yo(e)){Zt(t);return}if(!On(t)||se(t)==="traverse"||!k(e)||An(t)!==null)return;Qt(t);let n={target:"",noReferrer:ho(t),replaces:se(t)==="replace"};xt(()=>q(e,"navigate",n))},we=t=>{let e=w(t,"href");return e===null&&K(t)===Mr?Pn(t,Dr,"href"):e},go=t=>{let e=dt(t);for(let n=0;n<e.length;n+=1){let o=e[n],r=R(o);if(r==="a"||r==="area"){let s=we(o);if(s!==null)return{node:o,href:s}}}},Te=()=>{let t=Hn(m,"base[target]");return t?w(t,"target"):""},Re=t=>w(t,"target")??Te(),Se=t=>{try{return{metaKey:In(t),ctrlKey:Mn(t),shiftKey:Dn(t),button:Cn(t)}}catch{return}},Ne=new wt,Eo=t=>{let e=!1,n=()=>{e=!0},o=()=>e||ot(Ne,t);return lo(t,{__proto__:null,preventDefault:{__proto__:null,configurable:!0,value:n},defaultPrevented:{__proto__:null,configurable:!0,get:o},returnValue:{__proto__:null,configurable:!0,get:()=>!o(),set:r=>{r||n()}}}),o},_o={click:new B,auxclick:new B,submit:new B},wo=(t,e)=>{let n=io[t],o=_o[t],r=[],s=c=>{for(let p=0;p<r.length;p+=1)if(r[p]===c)return!0;return!1},l=(c,p,h)=>{let g=i(h);function A(E){let S=g(this,E);return S===!1&&typeof E=="object"&&E!==null&&Rt(Ne,E),S}return{target:c,accessor:p,handler:h,wrapper:A,inFlight:0}},u=()=>{for(let c=0;c<e.length;c+=1)for(let p=0;p<n.length;p+=1){let h;try{h=n[p].get(e[c])}catch{continue}if(typeof h=="function"){let g=z(o,e[c]);(!g||g.wrapper!==h)&&(g=l(e[c],n[p],h),n[p].set(e[c],g.wrapper),Tt(o,e[c],g)),s(g)||(g.inFlight+=1,Et(r,g))}break}};return u(),{wrap:u,unwrap:()=>{for(let c=0;c<r.length;c+=1){let p=r[c];p.inFlight-=1,!(p.inFlight>0)&&(z(o,p.target)===p&&ge(o,p.target),p.accessor.get(p.target)===p.wrapper&&p.accessor.set(p.target,p.handler))}}}},Y={__proto__:null,go:()=>!1},To=(t,e)=>w(t,"download")!==null&&(e.origin===N||e.protocol==="blob:"||e.protocol==="data:"),Ro=(t,e,n)=>{let o=Q(Re(t),n),r=[];for(let l=0;l<zt.length;l+=1){let u=w(t,zt[l]);u!==null&&Et(r,[zt[l],u])}let s=To(t,e);return{__proto__:null,go:()=>{let l=j(m,"a");x(l,"href",e.href),x(l,"target",o||"_self");for(let u=0;u<r.length;u+=1)x(l,r[u][0],r[u][1]);return ae(l),o===""&&!s}}},be=t=>{let e=we(t);return e===null?void 0:L(e,tt(m))},xe=(t,e,n)=>{let o=be(t);if(!o)return Y;if(!k(o))return Ro(t,o,n);let r={target:St?"":Q(Re(t),n),noReferrer:_e(t),replaces:!1};return{__proto__:null,here:r.target==="",go:()=>(q(o,e,r),r.target==="")}},So=(t,e,n)=>({__proto__:null,plan:()=>xe(t,e,n)}),Oe=(t,e,n,o)=>{st+=1;let r=dt(t),s=r.length-1,l=wo(e,r),u,f,c=h=>{h===t&&u&&!u()&&(f=n.plan())};o&&(o.plan=()=>{f||c(t)});let p=h=>{h===t&&(l.wrap(),kn(t)&&c(h))};for(let h=0;h<s;h+=1)U(r[h],e,p,!0),U(r[h],e,p,!1);yt(t)||(Qt(t),u=Eo(t)),U(r[s],e,c,!1),he(d,()=>{let h=!1;try{l.unwrap();for(let g=0;g<s;g+=1)gt(r[g],e,p,!0),gt(r[g],e,p,!1);gt(r[s],e,c,!1),u&&!u()&&(f||(f=n.plan()),h=f.go())}finally{fo(h)}},0)},Ot=new B,No=(t,e)=>{let n=dt(t);for(let o=0;o<n.length;o+=1){let r=n[o],s=R(r);if(s==="button"||s==="input"){let l={__proto__:null,details:e,plan:void 0};Tt(Ot,r,l),he(d,()=>{ge(Ot,r),l.plan?.()},0);return}}},kt=(t,e)=>{if(e&&yt(t))return;let n=te(t),o=Se(t);if(!o||n==="auxclick"&&o.button!==1)return;!e&&n==="click"&&No(t,o);let r=go(t);!r||!k(L(r.href,tt(m)))||Oe(t,n,So(r.node,n,o))},G=(t,e,n,o)=>(e?w(e,n):null)??w(t,o),ke=(t,e)=>D(G(t,e,"formmethod","method")??""),bo=(t,e,n)=>Q(G(t,e,"formtarget","target")??Te(),n),Ce=(t,e)=>{let n=G(t,e,"formaction","action");return n?L(n,tt(m)):L(Kn(m))},Ct=(t,e)=>{let n=ke(t,e);if(n==="post"||n==="dialog")return;let o=Ce(t,e);return o&&(o.protocol==="https:"||o.protocol==="http:")?o:void 0},Ie=(t,e)=>{if((e&&(R(e)==="button"?oe:re)(e))===t)try{return new Vt(t,e)}catch{}return new Vt(t)},It=t=>{let e="",n=0;for(let o=0;o<t.length;o+=1){let r=de(t,o);(r===13||r===10)&&(e+=`${H(t,n,o)}\r
`,r===13&&de(t,o+1)===10&&(o+=1),n=o+1)}return n===0?t:e+H(t,n)},xo=t=>{try{return It(xn(t))}catch{return""}},Oo=(t,e,n)=>{let o;try{o=Ie(t,e)}catch{return}try{let r=new b(n.href),s=new _n;return Jt(o,(l,u)=>{bn(s,It(u),typeof l=="string"?It(l):xo(l))}),En(r,`?${Nn(s)}`),L(ft(r))??n}catch{return n}},ko=(t,e)=>{let n=[],o=!0;try{Jt(Ie(t,e),(r,s)=>{typeof r!="string"&&!F&&(o=!1),Et(n,[s,r])})}catch{return}return o?n:void 0},Co=(t,e)=>{let n;if(typeof e!="string"){n=j(m,"input");let o=new F;Rn(wn(o),e),x(n,"type","file"),Sn(n,Tn(o))}else e!=="UTF-8"&&D(t)==="_charset_"?(n=j(m,"textarea"),to(n,e)):(n=j(m,"input"),x(n,"type","hidden"),x(n,"value",e));return x(n,"name",t),n},Mt=null,Io=(t,e)=>{let n=j(m,"form");for(let o=0;o<t.length;o+=2)t[o+1]!==null&&x(n,t[o],t[o+1]);for(let o=0;o<e.length;o+=1)ht(n,Co(e[o][0],e[o][1]));Mt=n;try{ht(jn(m),n),pe(n)}finally{Mt=null,Fn(n)}},Mo=t=>{if(!(!t||R(t)==="input"&&D(w(t,"type")??"")==="image"))return w(t,"value")??void 0},Do=t=>{ee(t)===Mt&&Zt(t)},Me=(t,e,n)=>{if(!et(t))return Y;if(ke(t,e)==="dialog"){let c=ue&&eo(t,"dialog"),p=Mo(e);return{__proto__:null,go:()=>(c&&ue(c,p),!1)}}let r=Ct(t,e),s=bo(t,e,n);if(k(r)){let c={target:St?"":s,noReferrer:Bt(w(t,"rel"),null,rt()),replaces:!1},p=Oo(t,e,r);return p&&et(t)?{__proto__:null,here:c.target==="",go:()=>(q(p,"submit",c),c.target==="")}:Y}let l=Ce(t,e);if(!l)return Y;let u=["action",l.href,"method",G(t,e,"formmethod","method"),"enctype",G(t,e,"formenctype","enctype"),"target",s||"_self","accept-charset",w(t,"accept-charset"),"rel",w(t,"rel")],f=ko(t,e);return f&&et(t)?{__proto__:null,go:()=>(Io(u,f),s==="")}:Y},Lo=(t,e,n)=>({__proto__:null,plan:()=>Me(t,e,n)}),vo=t=>{if(!t.isTrusted)return;let e=ee(t);if(R(e)!=="form")return;let n=ne?ne(t):null;if(!k(Ct(e,n)))return;let o=n?z(Ot,n):void 0;Oe(t,"submit",Lo(e,n,o?.details??it),o)},Dt=t=>{try{return Bn(t)}catch{return null}},Ao=t=>{try{return zn(t)}catch{try{return qn(t)}catch{return null}}},Po=(t,e,n)=>{let o=Ao(t);if(o)return o;let r=M(t);return r===null&&(n||t!==e)?Dt(t):r},Lt=t=>{try{return R(t)!=="fieldset"&&Vn(t,":disabled")}catch{return!1}},Fo=t=>{try{let e=R(t);if(e==="summary"){let o=M(t);return R(o)==="details"&&Xn(o,":scope > summary")===t}if(e==="button"){let o=Gn(t);return(o==="submit"||o==="reset")&&oe(t)!==null&&!Lt(t)}let n=e==="input"?Yn(t):"";return n==="submit"||n==="image"||n==="reset"?re(t)!==null&&!Lt(t):n==="checkbox"||n==="radio"||n==="file"||n==="color"}catch{return!1}},Ho=(t,e,n)=>{let o,r;try{o=le(t),r=ie(t)}catch{return}if(!(o!==m||(n?ie(t,Lr):r)===m))for(let s=t;s!==null;){let l=R(s);if(l==="a"||l==="area")return l==="a"||et(s)?s:void 0;if(!e||Fo(s))return;s=Po(s,r,n)}},De=t=>{t.here?xt(t.go):t.go()},Le=(t,e,n,o)=>{let r=Ho(t,e,n);return!r||!k(be(r))?!1:(De(xe(r,"click",o)),!0)},Uo=t=>{try{return te(t)}catch{return}};HTMLElement.prototype.click={click(){(Lt(this)||!Le(this,!0,!0,it))&&ae(this)}}.click,EventTarget.prototype.dispatchEvent={dispatchEvent(t){if(Uo(t)==="click"&&!yt(t)){let e=Se(t);if(e&&Le(this,Jn(t),Qn(t),e))return!0}return Zn(this,t)}}.dispatchEvent,HTMLFormElement.prototype.submit={submit(){let t=R(this)==="form"&&le(this)===m&&k(Ct(this,null))?Me(this,null,it):void 0;if(t){De(t);return}pe(this)}}.submit;let Wo=t=>{let e=_(vr,t);return e!==null&&_(Ar,e[1]??"")!==null};y.windowOpen==="enforce"&&(d.open={open(t,e,n){let o=t===void 0?"":`${t}`,r=e===void 0?"_blank":`${e}`,s=n===void 0?"":`${n}`,l=L(o,tt(m));if(!k(l))return fe(d,o,r,s);let u={target:St?"":Q(r||"_blank",it),noReferrer:Wo(s)||rt(),replaces:!1};return u.target===""?xt(()=>q(l,"navigate",u)):q(l,"navigate",u),null}}.open);let $o=i(Element.prototype.attachShadow),Ko=a(ShadowRoot.prototype,"mode"),X=(t,e)=>{let n=Object.getOwnPropertyDescriptor(t,e);return n?.get?i(n.get):void 0},vt=X(ShadowRoot.prototype,"clonable"),ve=X(ShadowRoot.prototype,"delegatesFocus"),Ae=X(ShadowRoot.prototype,"serializable"),Pe=X(ShadowRoot.prototype,"slotAssignment"),Fe=X(ShadowRoot.prototype,"customElementRegistry"),jo=d.customElements,Bo=Boolean,He=t=>kt(t,!0),zo=Node.prototype.cloneNode,qo=Document.prototype.importNode,Ue=HTMLElement.prototype.attachInternals,W=a(Node.prototype,"firstChild"),Yo=a(Node.prototype,"lastChild"),ct=a(Node.prototype,"nextSibling"),Go=i(Node.prototype.contains),We=a(Node.prototype,"nodeName"),Xo=a(Element.prototype,"shadowRoot"),$e=a(HTMLTemplateElement.prototype,"content"),Vo=i(Element.prototype.matches),At=t=>{try{return Xo(t)}catch{return null}},Ke=t=>R(t)==="template"&&K(t)===fn,Jo=t=>{try{return!Vo(t,":defined")}catch{return!1}},Qo=t=>{let e={__proto__:null,mode:"closed",clonable:!0};if(ve&&(e.delegatesFocus=ve(t)),Ae&&(e.serializable=Ae(t)),Pe&&(e.slotAssignment=Pe(t)),Fe){let n=Fe(t);n!==jo&&(e.customElementRegistry=n)}return e},Pt=new B,je=new wt,Ft=!1,v,Ht=new wt,Be=(t,e)=>{let n=e,o=!1;if(vt&&e!==null&&(typeof e=="object"||typeof e=="function")){let s=`${e.mode}`,l=Bo(e.clonable);o=l&&s==="closed",n={__proto__:e,mode:s,clonable:l&&!o}}let r=$o(t,n);return Ko(r)==="closed"&&(U(r,"click",He,!0),U(r,"auxclick",He,!0)),o&&(Tt(Pt,t,r),Rt(je,r),Ft=!0),r},ze=(t,e,n)=>{let o;try{o=Be(e,Qo(t))}catch{return}for(let r=W(t);r;r=ct(r))ht(o,n(r))},qe=(t,e,n,o=W(t))=>{for(let r=o,s=W(e);r&&s;)n(r,s),r=ct(r),s=ct(s)},Zo=(t,e,n)=>{let o={__proto__:null},r=0;for(let l=t,u=M(l)||Dt(l);u;l=u,u=M(l)||Dt(l))o[r]=l,r+=1;let s=e;for(;s&&r>0;){r-=1;let l=o[r],u=M(l),f=null;u?n(s,u,(c,p)=>{p===l&&(f=c)}):f=At(s),s=f}return s},Ye=t=>{if(!v||!Jo(t)||ot(Ht,t))return;let e=Zo(t,v.source,v.pairs),n=e&&z(Pt,e);n&&R(t)===mt(e)&&K(t)===K(e)&&(Rt(Ht,t),ze(n,t,v.cloneChild))},tr={attachShadow(t){return Ye(this),Be(this,t)}}.attachShadow;if(Element.prototype.attachShadow=tr,Ue&&(HTMLElement.prototype.attachInternals={attachInternals(...t){return Ye(this),O(Ue,this,t)}}.attachInternals),vt){let{configurable:t,enumerable:e}=Object.getOwnPropertyDescriptor(ShadowRoot.prototype,"clonable");me(ShadowRoot.prototype,"clonable",{__proto__:null,configurable:t,enumerable:e,get:Object.getOwnPropertyDescriptor({get clonable(){return ot(je,this)||vt(this)}},"clonable").get})}let er=(t,e,n,o,r)=>{let s={__proto__:null},l=0,u=(f,c)=>{s[l]=f,s[l+1]=c,l+=2};for(r?u(t,e):o(t,e,u);l>0;){l-=2;let f=s[l],c=s[l+1];if(We(f)===We(c)){let p=z(Pt,f);p&&!ot(Ht,c)&&ze(p,c,n),o(f,c,u),Ke(f)&&Ke(c)&&u($e(f),$e(c));let h=At(f),g=At(c);h&&g&&u(h,g)}}},Ut=(t,e,n,o,r,s=qe,l=!0)=>{if(!Ft)return O(t,e,n);let u=v;v={__proto__:null,source:o,cloneChild:r,pairs:s};let f;try{f=O(t,e,n)}finally{v=u}return er(o,f,r,s,l),f},Wt={cloneNode(...t){return Ut(zo,this,t,this,e=>O(Wt,e,[!0]))}}.cloneNode;Node.prototype.cloneNode=Wt;let Ge={importNode(...t){return Ut(qo,this,t,t[0],e=>O(Ge,this,[e,!0]))}}.importNode;Document.prototype.importNode=Ge;let nr=a(Range.prototype,"startContainer"),or=a(Range.prototype,"startOffset"),rr=a(Range.prototype,"endContainer"),sr=a(Range.prototype,"commonAncestorContainer"),cr=Range.prototype.cloneContents,lr=Range.prototype.extractContents,Xe=(t,e)=>{if(t===e||!Go(t,e))return null;let n=e;for(;M(n)!==t;)n=M(n);return n},ir=(t,e)=>{let n=W(t);for(let o=e;n&&o>0;o-=1)n=ct(n);return n},Ve=(t,e,n,o)=>{if(!Ft)return O(t,e,n);let r=nr(e),s=or(e),l=rr(e),u=(f,c,p)=>{let h=Xe(f,r),g=Xe(f,l);if(o&&(h||g||f===r||f===l)){let A=W(c),E=Yo(c);h&&A&&p(h,A),g&&E&&p(g,E);return}qe(f,c,p,f===r?ir(f,s):h??W(f))};return Ut(t,e,n,sr(e),f=>O(Wt,f,[!0]),u,!1)};Range.prototype.cloneContents={cloneContents(...t){return Ve(cr,this,t,!1)}}.cloneContents,Range.prototype.extractContents={extractContents(...t){return Ve(lr,this,t,!0)}}.extractContents;let ar=typeof TrustedHTML=="function"?i(TrustedHTML.prototype.toString):void 0,pr=d.trustedTypes,ur=typeof TrustedTypePolicyFactory=="function"?i(TrustedTypePolicyFactory.prototype.createPolicy):void 0,fr=typeof TrustedTypePolicy=="function"?i(TrustedTypePolicy.prototype.createHTML):void 0,V,$t,dr=t=>{if(V===void 0)try{V=ur(pr,Fr,{__proto__:null,createHTML:e=>{if(e!==$t)throw new TypeError("The exit interstitial policy makes only the markup that the guard opened.");return e}})}catch{V=null}if(V){$t=t;try{return fr(V,t)}catch{return}finally{$t=void 0}}},Je=(t,e)=>Pr[t]===!0||e&&t==="noscript",yr=t=>{let e="",n=0;pt.lastIndex=0;for(let o=_(pt,t);o;o=_(pt,t)){let r=o[1]?ye(o[1],16):ye(o[2],10);e+=`${H(t,n,o.index)}${r<128?co(r):"\uFFFD"}`,n=pt.lastIndex}return D(e+H(t,n))==="closed"},hr=(t,e,n)=>{if(n==="script"){let o=0;at.lastIndex=e;for(let r=_(at,t);r;r=_(at,t))if(r[1]==="/"){if(o<2)return r.index;o=1}else r[1]===""?o=o===1?2:o:r[0]==="-->"?o=0:(o=o||1,at.lastIndex=r.index+2)}else if(n!=="plaintext"){Xt.lastIndex=e;for(let o=_(Xt,t);o;o=_(Xt,t))if(D(o[1])===n)return o.index}return-1},mr=(t,e,n)=>{let o=!0,r;try{r=ar(t)}catch{o=!1,r=`${t}`}let s={__proto__:null},l=!1,u=(E,S)=>{let $=!S;P.lastIndex=E;for(let C=_(P,r);C;C=_(P,r)){if(C[2])return P.lastIndex;if(!$&&D(C[3])==="shadowrootmode"){$=!0;let jt=C[4]??C[5]??C[6];if(jt!==void 0&&yr(jt)){let tn=r[P.lastIndex-1],en=C[6]===void 0&&(tn==='"'||tn==="'")?P.lastIndex-1:P.lastIndex;s[en-jt.length]=en,l=!0}}}return-1},f=Je(e,n)?0:-1,c=f===0||dn[e]?-1:0,p;for(;c>=0;){p&&(c=hr(r,c,p),p=void 0),qt.lastIndex=c;let E=c<0?null:_(qt,r);if(!E)break;if(c=qt.lastIndex,E[1])r[c]===">"?c+=1:r[c]==="-"&&r[c+1]===">"?c+=2:(Yt.lastIndex=c,c=_(Yt,r)?Yt.lastIndex:-1);else if(E[2])Gt.lastIndex=c,c=_(Gt,r)?Gt.lastIndex:-1;else{let S=D(E[4]),$=E[3]==="";if(c=u(c,$&&S==="template"),$&&Je(S,n)){f=c;break}p=$&&dn[S]?S:void 0}}if(f>=0){Z.lastIndex=f;for(let E=_(Z,r);E;E=_(Z,r))u(Z.lastIndex-1,!0),Z.lastIndex=E.index+1}if(!l)return o?t:r;let h="",g=0;for(ut.lastIndex=0;_(ut,r);){let E=s[ut.lastIndex];E!==void 0&&(h+=`${H(r,g,ut.lastIndex)}open`,g=E)}let A=h+H(r,g);return o?dr(A)??t:A},gr=t=>{try{return K(t)===fn?mt(t):"svg"}catch{return}},Er=[[Element.prototype,"setHTMLUnsafe",!0],[ShadowRoot.prototype,"setHTMLUnsafe",!0],[Document,"parseHTMLUnsafe",!1],[Element.prototype,"setHTML",!0],[ShadowRoot.prototype,"setHTML",!0],[Document,"parseHTML",!1]];for(let[t,e,n]of Er){let o=t[e];typeof o=="function"&&(t[e]={[e](...r){return r.length>0&&(r[0]=mr(r[0],gr(this),n)),O(o,this,r)}}[e])}let Kt=()=>{T&&U(T,"navigate",mo,!0),nt(d,"click",kt,!0),nt(d,"auxclick",kt,!0),nt(d,"submit",vo,!0),nt(d,"formdata",Do,!0)};Kt();let lt=Reflect.apply,_r=Document.prototype.open,Qe=Document.prototype.write,wr=Document.prototype.writeln,Tr=d.trustedTypes?.emptyHTML??"",Rr=m.implementation.createDocument(null,null,null),Sr=a(DOMException.prototype,"name"),Nr=t=>{try{return Sr(t)==="InvalidStateError"}catch{return!1}},Ze=(t,e,n)=>{try{lt(e,Rr,n)}catch(o){if(!Nr(o))throw o}try{lt(Qe,t,[Tr])}finally{Kt()}return lt(e,t,n)},br={open(...t){try{return lt(_r,this,t)}finally{Kt()}},write(...t){return Ze(this,Qe,t)},writeln(...t){return Ze(this,wr,t)}};for(let t of["open","write","writeln"])Object.defineProperty(Document.prototype,t,{...Object.getOwnPropertyDescriptor(Document.prototype,t),value:br[t]})}yn({"site":"zerolifestyle.co","exitPath":"\/url"});})();
//# sourceURL=exit-interstitial.js

// --- Script 2 ---
(function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
      })(window, document, "clarity", "script", "wmcmc7r9v1");

// --- Script 3 ---
window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'AW-18556189075');

      (function () {
        var done = false;
        var events = ['scroll', 'mousemove', 'touchstart', 'pointerdown', 'keydown'];
        function load() {
          if (done) return;
          done = true;
          events.forEach(function (name) { window.removeEventListener(name, load, { passive: true }); });
          var s = document.createElement('script');
          s.async = true;
          s.src = 'https://www.googletagmanager.com/gtag/js?id=AW-18556189075';
          document.head.appendChild(s);
        }
        events.forEach(function (name) { window.addEventListener(name, load, { passive: true }); });
        if (document.readyState === 'complete') {
          setTimeout(load, 3000);
        } else {
          window.addEventListener('load', function () { setTimeout(load, 3000); });
        }
      })();

// --- Script 4 ---
{
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [{
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://zerolifestyle.co"
      }]
  }

// --- Script 5 ---
[
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "ZeroLifestyle.co",
      "url": "https:\/\/zerolifestyle.co",
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https:\/\/zerolifestyle.co\/search?q={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "ZeroLifestyle.co","logo": "https:\/\/zerolifestyle.co\/cdn\/shop\/files\/zero-lifestyle-logo_5b9310b8-4d88-410b-84d0-b1f7fada86b2.webp?v=1683120623\u0026width=206","slogan": "Starts at Zero \u0026 Never Stop","sameAs": ["https:\/\/www.facebook.com\/Zer0Lifestyle","https:\/\/www.instagram.com\/zer0lifestyle\/","https:\/\/www.linkedin.com\/company\/zer0lifestyle\/mycompany\/","https:\/\/www.pinterest.com\/zer0lifestyle\/","https:\/\/www.tiktok.com\/@zerolifestyleco","https:\/\/twitter.com\/Zer0Lifestyle","https:\/\/www.youtube.com\/@zer0lifestyle"],"url": "https:\/\/zerolifestyle.co"
    }
  ]

// --- Script 6 ---
// This allows to expose several variables to the global scope, to be used in scripts
  window.themeVariables = {
    settings: {
      direction: "ltr",
      pageType: "index",
      cartCount: 0,
      moneyFormat: "Rs.{{amount_no_decimals}}",
      moneyWithCurrencyFormat: "Rs.{{amount_no_decimals}} PKR",
      showVendor: false,
      discountMode: "percentage",
      currencyCodeEnabled: false,
      cartType: "drawer",
      cartCurrency: "PKR",
      mobileZoomFactor: 2.5
    },

    routes: {
      host: "zerolifestyle.co",
      rootUrl: "\/",
      rootUrlWithoutSlash: '',
      cartUrl: "\/cart",
      cartAddUrl: "\/cart\/add",
      cartChangeUrl: "\/cart\/change",
      searchUrl: "\/search",
      predictiveSearchUrl: "\/search\/suggest",
      productRecommendationsUrl: "\/recommendations\/products"
    },

    strings: {
      accessibilityDelete: "Delete",
      accessibilityClose: "Close",
      collectionSoldOut: "Sold out",
      collectionDiscount: "Save @savings@",
      productSalePrice: "Sale price",
      productRegularPrice: "Regular price",
      productFormUnavailable: "Unavailable",
      productFormSoldOut: "Sold out",
      productFormPreOrder: "Pre-order",
      productFormAddToCart: "Add to cart",
      searchNoResults: "No results could be found.",
      searchNewSearch: "New search",
      searchProducts: "Products",
      searchArticles: "Journal",
      searchPages: "Pages",
      searchCollections: "Collections",
      cartViewCart: "View cart",
      cartItemAdded: "Item added to your cart!",
      cartItemAddedShort: "Added to your cart!",
      cartAddOrderNote: "Add order note",
      cartEditOrderNote: "Edit order note",
      shippingEstimatorNoResults: "Sorry, we do not ship to your address.",
      shippingEstimatorOneResult: "There is one shipping rate for your address:",
      shippingEstimatorMultipleResults: "There are several shipping rates for your address:",
      shippingEstimatorError: "One or more error occurred while retrieving shipping rates:"
    },

    libs: {
      // Minified builds. Verified feature-for-feature against the unminified sources:
      // same window.ThemeFlickity / window.ThemePhotoSwipe globals, same option surface.
      flickity: "\/\/zerolifestyle.co\/cdn\/shop\/t\/64\/assets\/flickity.min.js?v=130992023591173335761789556591",
      photoswipe: "\/\/zerolifestyle.co\/cdn\/shop\/t\/64\/assets\/photoswipe.min.js?v=102679426368445400101789556592",
      qrCode: "\/\/zerolifestyle.co\/cdn\/shopifycloud\/storefront\/assets\/themes_support\/vendor\/qrcode-1f6c2eb7.js"
    },

    breakpoints: {
      phone: 'screen and (max-width: 740px)',
      tablet: 'screen and (min-width: 741px) and (max-width: 999px)',
      tabletAndUp: 'screen and (min-width: 741px)',
      pocket: 'screen and (max-width: 999px)',
      lap: 'screen and (min-width: 1000px) and (max-width: 1199px)',
      lapAndUp: 'screen and (min-width: 1000px)',
      desktop: 'screen and (min-width: 1200px)',
      wide: 'screen and (min-width: 1400px)'
    }
  };window.addEventListener('pageshow', (event) => {
    const syncCartFromServer = async () => {
      try {
        const cartContent = await (await fetch(`${window.themeVariables.routes.cartUrl}.js`, {cache: 'reload'})).json();
        document.documentElement.dispatchEvent(new CustomEvent('cart:refresh', {detail: {cart: cartContent}}));
      } catch (e) {}
    };

    if (event.persisted) {
      syncCartFromServer();
    } else if ('requestIdleCallback' in window) {
      requestIdleCallback(() => syncCartFromServer(), {timeout: 3000});
    } else {
      setTimeout(syncCartFromServer, 150);
    }
  });

  if ('noModule' in HTMLScriptElement.prototype) {
    // Old browsers (like IE) that does not support module will be considered as if not executing JS at all
    document.documentElement.className = document.documentElement.className.replace('no-js', 'js');

    requestAnimationFrame(() => {
      const viewportHeight = (window.visualViewport ? window.visualViewport.height : document.documentElement.clientHeight);
      document.documentElement.style.setProperty('--window-height',viewportHeight + 'px');
    });
  }

// --- Script 7 ---
window.performance && window.performance.mark && window.performance.mark('shopify.content_for_header.start');

// --- Script 8 ---
{"accessToken":"e50b05cfe48beb9ee4badf6c0dc76d4c","betas":["rich-media-storefront-analytics"],"domain":"zerolifestyle.co","predictiveSearch":true,"shopId":72281063702,"locale":"en"}

// --- Script 10 ---
!function(o){(o.Shopify=o.Shopify||{}).modules=!0}(window);

// --- Script 11 ---
!function(o){function n(){var o=[];function n(){o.push(Array.prototype.slice.apply(arguments))}return n.q=o,n}var t=o.Shopify=o.Shopify||{};t.loadFeatures=n(),t.autoloadFeatures=n()}(window);

// --- Script 12 ---
window.Shopify = window.Shopify || {};
  window.Shopify.SignInWithShop = window.Shopify.SignInWithShop || {};
  window.Shopify.SignInWithShop.assetMetrics = { sampleRate: 0.25 };
  window.Shopify.SignInWithShop.eligible = true;

// --- Script 14 ---
await import("https://cdn.shopify.com/shopifycloud/shop-js/modules/v2/loader.init-shop-cart-sync.en.esm.js");

  window.Shopify.SignInWithShop?.initShopCartSync?.({"fedCMEnabled":true,"windoidEnabled":true,"backendHost":"emVyb2xpZmVzdHlsZS5jbw=="});

// --- Script 15 ---
window.Shopify = window.Shopify || {};
  if (!window.Shopify.featureAssets) window.Shopify.featureAssets = {};
  window.Shopify.featureAssets['shop-js'] = {"avatar":["modules/v2/loader.avatar.en.esm.js"],"checkout-modal":["modules/v2/loader.checkout-modal.en.esm.js"],"init-customer-accounts-sign-up":["modules/v2/loader.init-customer-accounts-sign-up.en.esm.js"],"init-customer-accounts":["modules/v2/loader.init-customer-accounts.en.esm.js"],"init-fed-cm":["modules/v2/loader.init-fed-cm.en.esm.js"],"init-shop-cart-sync":["modules/v2/loader.init-shop-cart-sync.en.esm.js"],"init-shop-email-lookup-coordinator":["modules/v2/loader.init-shop-email-lookup-coordinator.en.esm.js"],"init-shop-user-recognition":["modules/v2/loader.init-shop-user-recognition.en.esm.js"],"init-windoid":["modules/v2/loader.init-windoid.en.esm.js"],"lead-capture":["modules/v2/loader.lead-capture.en.esm.js"],"listener":["modules/v2/loader.listener.en.esm.js"],"pay-button":["modules/v2/loader.pay-button.en.esm.js"],"payment-terms":["modules/v2/loader.payment-terms.en.esm.js"],"shop-button":["modules/v2/loader.shop-button.en.esm.js"],"shop-cart-sync":["modules/v2/loader.shop-cart-sync.en.esm.js"],"shop-cash-offers":["modules/v2/loader.shop-cash-offers.en.esm.js"],"shop-follow-button":["modules/v2/loader.shop-follow-button.en.esm.js"],"shop-login-button":["modules/v2/loader.shop-login-button.en.esm.js"],"shop-login":["modules/v2/loader.shop-login.en.esm.js"],"shop-toast-manager":["modules/v2/loader.shop-toast-manager.en.esm.js"],"shop-user-recognition":["modules/v2/loader.shop-user-recognition.en.esm.js"]};

// --- Script 16 ---
(function() {
  var isLoaded = false;
  function asyncLoad() {
    if (isLoaded) return;
    isLoaded = true;
    var urls = ["https:\/\/intg.snapchat.com\/shopify\/shopify-scevent-init.js?id=c1fd36dd-04fc-4622-af9d-efad629bac41\u0026shop=zerolifestyle-co.myshopify.com"];
    for (var i = 0; i < urls.length; i++) {
      var s = document.createElement('script');
      s.type = 'text/javascript';
      s.async = true;
      s.src = urls[i];
      var x = document.getElementsByTagName('script')[0];
      x.parentNode.insertBefore(s, x);
    }
  };
  if(window.attachEvent) {
    window.attachEvent('onload', asyncLoad);
  } else {
    window.addEventListener('load', asyncLoad, false);
  }
})();

// --- Script 17 ---
var __st={"a":72281063702,"offset":18000,"reqid":"8094cb47-6ea4-4b24-ad96-e219866b3f16-1795025878","pageurl":"zerolifestyle.co\/","u":"d65babe4718f","p":"home"};

// --- Script 19 ---
!function(){'use strict';const t='contact',e='account',n='new_comment',o=[[t,t],['blogs',n],['comments',n],[t,'customer']],c=[[e,'customer_login'],[e,'guest_login'],[e,'recover_customer_password'],[e,'create_customer']],r=t=>t.map((([t,e])=>`form[action*='/${t}']:not([data-nocaptcha='true']) input[name='form_type'][value='${e}']`)).join(','),a=t=>()=>t?[...document.querySelectorAll(t)].map((t=>t.form)):[];function s(){const t=[...o],e=r(t);return a(e)}const i='password',u='form_key',d=['recaptcha-v3-token','g-recaptcha-response','h-captcha-response',i],f=()=>{try{return window.sessionStorage}catch{return}},m='__shopify_v',_=t=>t.elements[u];function p(t,e,n=!1){try{const o=window.sessionStorage,c=JSON.parse(o.getItem(e)),{data:r}=function(t){const{data:e,action:n}=t;return t[m]||n?{data:e,action:n}:{data:t,action:n}}(c);for(const[e,n]of Object.entries(r))t.elements[e]&&(t.elements[e].value=n);n&&o.removeItem(e)}catch(o){console.error('form repopulation failed',{error:o})}}const l='form_type',E='cptcha';function T(t){t.dataset[E]=!0}const w=window,h=w.document,L='Shopify',v='ce_forms',y='captcha';let A=!1;((t,e)=>{const n=(g='f06e6c50-85a8-45c8-87d0-21a2b65856fe',I='https://cdn.shopify.com/shopifycloud/storefront-forms-hcaptcha/ce_storefront_forms_captcha_hcaptcha.v1.5.3.iife.js',D={infoText:'Protected by hCaptcha',privacyText:'Privacy',termsText:'Terms'},(t,e,n)=>{const o=w[L][v],c=o.bindForm;if(c)return c(t,g,e,D).then(n);var r;o.q.push([[t,g,e,D],n]),r=I,A||(h.body.append(Object.assign(h.createElement('script'),{id:'captcha-provider',async:!0,src:r})),A=!0)});var g,I,D;w[L]=w[L]||{},w[L][v]=w[L][v]||{},w[L][v].q=[],w[L][y]=w[L][y]||{},w[L][y].protect=function(t,e){n(t,void 0,e),T(t)},Object.freeze(w[L][y]),function(t,e,n,w,h,L){const[v,y,A,g]=function(t,e,n){const i=e?o:[],u=t?c:[],d=[...i,...u],f=r(d),m=r(i),_=r(d.filter((([t,e])=>n.includes(e))));return[a(f),a(m),a(_),s()]}(w,h,L),I=t=>{const e=t.target;return e instanceof HTMLFormElement?e:e&&e.form},D=t=>v().includes(t);t.addEventListener('submit',(t=>{const e=I(t);if(!e)return;const n=D(e)&&!e.dataset.hcaptchaBound&&!e.dataset.recaptchaBound,o=_(e),c=g().includes(e)&&(!o||!o.value);(n||c)&&t.preventDefault(),c&&!n&&(function(t){try{if(!f())return;!function(t){const e=f();if(!e)return;const n=_(t);if(!n)return;const o=n.value;o&&e.removeItem(o)}(t);const e=Array.from(Array(32),(()=>Math.random().toString(36)[2])).join('');!function(t,e){_(t)||t.append(Object.assign(document.createElement('input'),{type:'hidden',name:u})),t.elements[u].value=e}(t,e),function(t,e){const n=f();if(!n)return;const o=[...t.querySelectorAll(`input[type='${i}']`)].map((({name:t})=>t)),c=[...d,...o],r={};for(const[a,s]of new FormData(t).entries())c.includes(a)||(r[a]=s);n.setItem(e,JSON.stringify({[m]:1,action:t.action,data:r}))}(t,e)}catch(e){console.error('failed to persist form',e)}}(e),e.submit())}));const S=(t,e)=>{t&&!t.dataset[E]&&(n(t,e.some((e=>e===t))),T(t))};for(const o of['focusin','change'])t.addEventListener(o,(t=>{const e=I(t);D(e)&&S(e,y())}));const B=e.get('form_key'),M=e.get(l),P=B&&M;t.addEventListener('DOMContentLoaded',(()=>{const t=y();if(P)for(const e of t)e.elements[l].value===M&&p(e,B);[...new Set([...A(),...v().filter((t=>'true'===t.dataset.shopifyCaptcha))])].forEach((e=>S(e,t)))}))}(h,new URLSearchParams(w.location.search),n,t,e,['guest_login'])})(!0,!0)}();

// --- Script 20 ---
(function () {var userAgent = navigator.userAgent;var platform = navigator.platform;var maxTouchPoints = navigator.maxTouchPoints || 0;var isIOS = /iPad|iPhone|iPod/.test(platform) || (platform === 'MacIntel' && maxTouchPoints > 1);var isMacSafari = platform.indexOf('Mac') === 0 && /Safari/.test(userAgent) && !/Chrome|Chromium|CriOS|FxiOS|Edg|OPR|Android/.test(userAgent);var isAppleSafari = isIOS || isMacSafari;if (isAppleSafari) {fetch('/sf_private_access_tokens' + location.search).catch(function () {});}function browserMajorVersion(pattern) {var match = userAgent.match(pattern);return match ? parseInt(match[1], 10) : null;}function shouldLoadAutosizesPolyfill() {if (!window.PerformanceObserver?.supportedEntryTypes?.includes('paint')) {return false;}var chromeVersion = browserMajorVersion(/Chrome\/(\d+)/);if (chromeVersion !== null) {return chromeVersion < 126;}var firefoxVersion = browserMajorVersion(/Firefox\/(\d+)/);if (firefoxVersion !== null) {return firefoxVersion < 150;}var safariVersion = isAppleSafari ? browserMajorVersion(/Version\/(\d+).*Safari\//) : null;if (safariVersion !== null) {return safariVersion < 27;}return true;}if (shouldLoadAutosizesPolyfill()) {var autosizesScript = document.createElement('script');autosizesScript.async = true;autosizesScript.crossOrigin = 'anonymous';autosizesScript.src = "//zerolifestyle.co/cdn/shopifycloud/storefront/assets/storefront/autosizes-84416378.js";(document.head || document.documentElement).appendChild(autosizesScript);}window.ShopifyAnalytics = window.ShopifyAnalytics || {};window.ShopifyAnalytics.performance = window.ShopifyAnalytics.performance || {};(function () {var LONG_FRAME_THRESHOLD = 50;var longAnimationFrames = [];var activeRafId = null;function collectLongFrames() {var previousTime = null;function rafMonitor(now) {if (activeRafId === null) {return;}var delta = now - previousTime;if (delta > LONG_FRAME_THRESHOLD) {longAnimationFrames.push({startTime: previousTime,endTime: now,});}previousTime = now;activeRafId = requestAnimationFrame(rafMonitor);}previousTime = performance.now();activeRafId = requestAnimationFrame(rafMonitor);}if (!window.PerformanceObserver?.supportedEntryTypes?.includes('long-animation-frame')) {collectLongFrames();var timeoutId = setTimeout(function () {cancelAnimationFrame(activeRafId);}, 10000);window.ShopifyAnalytics.performance.getLongAnimationFrames = function (stopCollection) {if (stopCollection === undefined) {stopCollection = false;}if (stopCollection) {clearTimeout(timeoutId);cancelAnimationFrame(activeRafId);}return longAnimationFrames;};}})();})();

// --- Script 21 ---
(()=>{var d="shopify:webmcp_adapter_loaded",n=Symbol.for("shopify.webmcp_adapter_loading");function s(c,a,{win:r=window,doc:o=document}={}){function p(){try{return r.localStorage.getItem(d)==="true"}catch{return!1}}function l(){try{r.localStorage.setItem(d,"true")}catch{}}function u(){return typeof(o.modelContext||r.navigator?.modelContext)?.registerTool=="function"}function f(){if(r[n]||!u())return;let t=o.head||o.getElementsByTagName("head")[0];if(!t)return;let e=o.createElement("script");e.type="module",e.crossOrigin="anonymous",a&&(e.integrity=a),e.src=c,e.addEventListener("load",l,{once:!0}),e.addEventListener("error",()=>{r[n]=!1},{once:!0}),t.appendChild(e),r[n]=!0}function _(t){let e=o.getElementById("shopify-origin-trials");if(!e||r.__shopifyOriginTrialsDone){t();return}e.addEventListener("load",t,{once:!0}),e.addEventListener("error",t,{once:!0})}function i(){_(()=>r.setTimeout(f,0))}function m(){o.addEventListener("DOMContentLoaded",i,{once:!0})}p()?i():m()}s("\/\/zerolifestyle.co\/cdn\/shopifycloud\/storefront\/assets\/storefront\/webmcp-f2c7e115.js","sha256-yxTnz8MXPs9PsqZUgco5NBrdINJtbRzOHPFz1IUHz+w=");})();

// --- Script 22 ---
var Shopify=Shopify||{};Shopify.PaymentButton=Shopify.PaymentButton||{isStorefrontPortableWallets:!0,init:function(){window.Shopify.PaymentButton.init=function(){};var t=document.createElement("script");t.src="https://zerolifestyle.co/cdn/shopifycloud/portable-wallets/latest/portable-wallets.en.js",t.type="module",document.head.appendChild(t)}};

// --- Script 23 ---
function portableWalletsFindBuyerConsent(e){if(!e)return[document.getElementById("shopify-buyer-consent"),document.getElementById("shopify-subscription-policy-button")];let t=e.parentNode?.firstElementChild;for(;t&&"shopify-buyer-consent"!==t.id;)t=t.nextElementSibling;return[t,t?.querySelector("#shopify-subscription-policy-button")]}function portableWalletsOpenPolicy(e){let t=(e.target.closest?.("#shopify-subscription-policy-button")?.closest("#shopify-buyer-consent:not(.hidden)"))?.parentNode?.firstElementChild;for(;t&&!t.portableWalletsPolicyCallback;)t=t.nextElementSibling;t?.portableWalletsPolicyCallback(e)}function portableWalletsSetPolicyCallback(e,t){t?.isConnected&&e&&(t.portableWalletsPolicyCallback=e,(e=t.getRootNode()).removeEventListener("click",e.portableWalletsPolicyListener,!0),e.portableWalletsPolicyListener=portableWalletsOpenPolicy,e.addEventListener("click",portableWalletsOpenPolicy,!0))}function portableWalletsHideBuyerConsent(e,t){var[l,o]=portableWalletsFindBuyerConsent(t);portableWalletsSetPolicyCallback(e,t),l&&o&&(l.classList.add("hidden"),l.setAttribute("aria-hidden","true"),o.removeEventListener("click",e))}function portableWalletsShowBuyerConsent(e,t){var[l,o]=portableWalletsFindBuyerConsent(t);portableWalletsSetPolicyCallback(e,t),l&&o&&(l.classList.remove("hidden"),l.removeAttribute("aria-hidden"),t||o.addEventListener("click",e))}window.Shopify?.PaymentButton&&(window.Shopify.PaymentButton.hideBuyerConsent=portableWalletsHideBuyerConsent,window.Shopify.PaymentButton.showBuyerConsent=portableWalletsShowBuyerConsent);

// --- Script 24 ---
document.addEventListener("DOMContentLoaded",(function(){function t(){return document.querySelector("shopify-accelerated-checkout-cart, shopify-accelerated-checkout")}if(t())Shopify.PaymentButton.init();else{new MutationObserver((function(e,n){t()&&(Shopify.PaymentButton.init(),n.disconnect())})).observe(document.body,{childList:!0,subtree:!0})}}));

// --- Script 25 ---
window.performance && window.performance.mark && window.performance.mark('shopify.content_for_header.end');

// --- Script 26 ---
window.jdgmSettings={"pagination":5,"disable_web_reviews":false,"coupon_receiving_condition":"any_review","coupon_value_type":"percentage","coupon_value_percentage":10,"coupon_value_fixed_amount":0,"coupon_discount_type":"single","coupon_tier_text_enabled":false,"coupon_tier_text_percentage":10,"coupon_tier_text_fixed_amount":0,"coupon_tier_photo_enabled":false,"coupon_tier_photo_percentage":10,"coupon_tier_photo_fixed_amount":0,"coupon_tier_video_enabled":false,"coupon_tier_video_percentage":10,"coupon_tier_video_fixed_amount":0,"enable_coupons":false,"badge_no_review_text":"No reviews","badge_n_reviews_text":"{{ average_rating }}","badge_star_color":"#ffba00","hide_badge_preview_if_no_reviews":true,"badge_hide_text":false,"enforce_center_preview_badge":false,"widget_title":"Customer Reviews","widget_open_form_text":"Write a review","widget_close_form_text":"Cancel review","widget_refresh_page_text":"Refresh page","widget_summary_text":"Based on {{ number_of_reviews }} review/reviews","widget_no_review_text":"Be the first to write a review","widget_name_field_text":"Display name","widget_verified_name_field_text":"Verified Name (public)","widget_name_placeholder_text":"Display name","widget_required_field_error_text":"This field is required.","widget_email_field_text":"Email address","widget_verified_email_field_text":"Verified Email (private, can not be edited)","widget_email_placeholder_text":"Your email address","widget_email_field_error_text":"Please enter a valid email address.","widget_rating_field_text":"Rating","widget_review_title_field_text":"Review Title","widget_review_title_placeholder_text":"Give your review a title","widget_review_body_field_text":"Review content","widget_review_body_placeholder_text":"Start writing here...","widget_pictures_field_text":"Picture/Video (optional)","widget_submit_review_text":"Submit Review","widget_submit_verified_review_text":"Submit Verified Review","widget_submit_success_msg_with_auto_publish":"Thank you! Please refresh the page in a few moments to see your review. You can remove or edit your review by logging into \u003ca href='https://judge.me/login' target='_blank' rel='nofollow noopener'\u003eJudge.me\u003c/a\u003e","widget_submit_success_msg_no_auto_publish":"Thank you! Your review will be published as soon as it is approved by the shop admin. You can remove or edit your review by logging into \u003ca href='https://judge.me/login' target='_blank' rel='nofollow noopener'\u003eJudge.me\u003c/a\u003e","widget_show_default_reviews_out_of_total_text":"Showing {{ n_reviews_shown }} out of {{ n_reviews }} reviews.","widget_show_all_link_text":"Show all","widget_show_less_link_text":"Show less","widget_author_said_text":"{{ reviewer_name }} said:","widget_days_text":"{{ n }} days ago","widget_weeks_text":"{{ n }} week/weeks ago","widget_months_text":"{{ n }} month/months ago","widget_years_text":"{{ n }} year/years ago","widget_yesterday_text":"Yesterday","widget_today_text":"Today","widget_replied_text":"\u003e\u003e {{ shop_name }} replied:","widget_read_more_text":"Read more","widget_reviewer_name_as_initial":"","widget_rating_filter_color":"#fbcd0a","widget_rating_filter_see_all_text":"See all reviews","widget_sorting_most_recent_text":"Most Recent","widget_sorting_highest_rating_text":"Highest Rating","widget_sorting_lowest_rating_text":"Lowest Rating","widget_sorting_with_pictures_text":"Only Pictures","widget_sorting_most_helpful_text":"Most Helpful","widget_open_question_form_text":"Ask a question","widget_reviews_subtab_text":"Reviews","widget_questions_subtab_text":"Questions","widget_question_label_text":"Question","widget_answer_label_text":"Answer","widget_question_placeholder_text":"Write your question here","widget_submit_question_text":"Submit Question","widget_question_submit_success_text":"Thank you for your question! We will notify you once it gets answered.","widget_star_color":"#ffba00","verified_badge_text":"Verified","verified_badge_bg_color":"","verified_badge_text_color":"","verified_badge_placement":"left-of-reviewer-name","widget_review_max_height":"","widget_hide_border":false,"widget_social_share":false,"widget_thumb":false,"widget_review_location_show":false,"widget_location_format":"","all_reviews_include_out_of_store_products":true,"all_reviews_out_of_store_text":"(out of store)","all_reviews_pagination":100,"all_reviews_product_name_prefix_text":"about","enable_review_pictures":true,"enable_question_anwser":false,"widget_theme":"leex","review_date_format":"mm/dd/yyyy","default_sort_method":"pictures-first","enable_ai_review_visibility":true,"widget_product_reviews_subtab_text":"Product Reviews","widget_shop_reviews_subtab_text":"Shop Reviews","widget_other_products_reviews_text":"Reviews for other products","widget_store_reviews_subtab_text":"Store reviews","widget_product_variant_reference_text":"Review for","widget_no_store_reviews_text":"This store hasn't received any reviews yet","widget_web_restriction_product_reviews_text":"This product hasn't received any reviews yet","widget_no_items_text":"No items found","widget_show_more_text":"Show more","widget_write_a_store_review_text":"Write a Store Review","widget_product_and_store_reviews_text":"Product and store reviews","widget_reviews_in_collection_text":"Reviews in this collection","widget_other_languages_heading":"Reviews in Other Languages","widget_translate_review_text":"Translate review to {{ language }}","widget_translating_review_text":"Translating...","widget_show_original_translation_text":"Show original ({{ language }})","widget_translate_review_failed_text":"Review couldn't be translated.","widget_translate_review_retry_text":"Retry","widget_translate_review_try_again_later_text":"Try again later","show_product_url_for_grouped_product":false,"widget_sorting_pictures_first_text":"Pictures First","show_pictures_on_all_rev_page_mobile":false,"show_pictures_on_all_rev_page_desktop":false,"floating_tab_hide_mobile_install_preference":false,"floating_tab_button_name":"★ Reviews","floating_tab_title":"Let customers speak for us","floating_tab_button_color":"","floating_tab_button_background_color":"","floating_tab_url":"","floating_tab_url_enabled":false,"floating_tab_tab_style":"text","all_reviews_text_badge_text":"Customers rate us {{ shop.metafields.judgeme.all_reviews_rating | round: 1 }}/5 based on {{ shop.metafields.judgeme.all_reviews_count }} reviews.","all_reviews_text_badge_text_branded_style":"{{ shop.metafields.judgeme.all_reviews_rating | round: 1 }} out of 5 stars based on {{ shop.metafields.judgeme.all_reviews_count }} reviews","is_all_reviews_text_badge_a_link":false,"show_stars_for_all_reviews_text_badge":false,"all_reviews_text_badge_url":"","all_reviews_text_style":"text","all_reviews_text_color_style":"judgeme_brand_color","all_reviews_text_color":"#108474","all_reviews_text_show_jm_brand":true,"featured_carousel_show_header":true,"featured_carousel_title":"Let customers speak for us","testimonials_carousel_title":"Customers are saying","videos_carousel_title":"Real customer stories","cards_carousel_title":"Customers are saying","featured_carousel_count_text":"from {{ n }} reviews","featured_carousel_add_link_to_all_reviews_page":false,"featured_carousel_url":"","featured_carousel_show_images":true,"featured_carousel_autoslide_interval":5,"featured_carousel_arrows_on_the_sides":false,"featured_carousel_height":250,"featured_carousel_width":80,"featured_carousel_image_size":0,"featured_carousel_image_height":250,"featured_carousel_arrow_color":"#eeeeee","verified_count_badge_style":"vintage","verified_count_badge_orientation":"horizontal","verified_count_badge_color_style":"judgeme_brand_color","verified_count_badge_color":"#108474","is_verified_count_badge_a_link":false,"verified_count_badge_url":"","verified_count_badge_show_jm_brand":true,"widget_rating_preset_default":5,"widget_first_sub_tab":"product-reviews","widget_show_histogram":false,"widget_histogram_use_custom_color":false,"widget_pagination_use_custom_color":false,"widget_star_use_custom_color":true,"widget_verified_badge_use_custom_color":false,"widget_write_review_use_custom_color":false,"picture_reminder_submit_button":"Upload Pictures","enable_review_videos":true,"mute_video_by_default":true,"widget_sorting_videos_first_text":"Videos First","widget_review_pending_text":"Pending","featured_carousel_items_for_large_screen":3,"social_share_options_order":"Facebook,Twitter","remove_microdata_snippet":true,"disable_json_ld":false,"enable_json_ld_products":false,"preview_badge_show_question_text":false,"preview_badge_no_question_text":"No questions","preview_badge_n_question_text":"{{ number_of_questions }} question/questions","qa_badge_show_icon":false,"qa_badge_position":"same-row","remove_judgeme_branding":false,"widget_add_search_bar":false,"widget_search_bar_placeholder":"Search","widget_sorting_verified_only_text":"Verified only","widget_sorting_most_relevant_text":"Most Relevant","featured_carousel_theme":"card","featured_carousel_show_rating":true,"featured_carousel_show_title":true,"featured_carousel_show_body":true,"featured_carousel_show_date":false,"featured_carousel_show_reviewer":true,"featured_carousel_show_product":false,"featured_carousel_header_background_color":"#108474","featured_carousel_header_text_color":"#ffffff","featured_carousel_name_product_separator":"reviewed","featured_carousel_full_star_background":"#FF950A","featured_carousel_empty_star_background":"#dadada","featured_carousel_vertical_theme_background":"#f9fafb","featured_carousel_verified_badge_enable":true,"featured_carousel_verified_badge_color":"#108474","featured_carousel_border_style":"round","featured_carousel_review_line_length_limit":3,"featured_carousel_more_reviews_button_text":"Read more reviews","featured_carousel_view_product_button_text":"View product","all_reviews_page_load_reviews_on":"scroll","all_reviews_page_load_more_text":"Load More Reviews","disable_fb_tab_reviews":false,"enable_ajax_cdn_cache":false,"widget_advanced_speed_features":5,"widget_public_name_text":"displayed publicly like","default_reviewer_name":"John Smith","default_reviewer_name_has_non_latin":true,"widget_reviewer_anonymous":"Anonymous","medals_widget_title":"Judge.me Review Medals","medals_widget_background_color":"#f9fafb","medals_widget_position":"footer_all_pages","medals_widget_border_color":"#f9fafb","medals_widget_verified_text_position":"left","medals_widget_use_monochromatic_version":false,"medals_widget_elements_color":"#108474","show_reviewer_avatar":true,"widget_invalid_yt_video_url_error_text":"Not a YouTube video URL","widget_max_length_field_error_text":"Please enter no more than {0} characters.","widget_show_country_flag":false,"widget_show_collected_via_shop_app":true,"widget_verified_by_shop_badge_style":"light","widget_verified_by_shop_text":"Verified by Shop","widget_show_photo_gallery":false,"widget_load_with_code_splitting":true,"widget_ugc_install_preference":false,"widget_ugc_title":"Made by us, Shared by you","widget_ugc_subtitle":"Tag us to see your picture featured in our page","widget_ugc_arrows_color":"#ffffff","widget_ugc_primary_button_text":"Buy Now","widget_ugc_primary_button_background_color":"#108474","widget_ugc_primary_button_text_color":"#ffffff","widget_ugc_primary_button_border_width":"0","widget_ugc_primary_button_border_style":"none","widget_ugc_primary_button_border_color":"#108474","widget_ugc_primary_button_border_radius":"25","widget_ugc_secondary_button_text":"Load More","widget_ugc_secondary_button_background_color":"#ffffff","widget_ugc_secondary_button_text_color":"#108474","widget_ugc_secondary_button_border_width":"2","widget_ugc_secondary_button_border_style":"solid","widget_ugc_secondary_button_border_color":"#108474","widget_ugc_secondary_button_border_radius":"25","widget_ugc_reviews_button_text":"View Reviews","widget_ugc_reviews_button_background_color":"#ffffff","widget_ugc_reviews_button_text_color":"#108474","widget_ugc_reviews_button_border_width":"2","widget_ugc_reviews_button_border_style":"solid","widget_ugc_reviews_button_border_color":"#108474","widget_ugc_reviews_button_border_radius":"25","widget_ugc_reviews_button_link_to":"judgeme-reviews-page","widget_ugc_show_post_date":true,"widget_ugc_max_width":"800","widget_rating_metafield_value_type":true,"widget_primary_color":"#000000","widget_enable_secondary_color":false,"widget_secondary_color":"#edf5f5","widget_summary_average_rating_text":"{{ average_rating }} out of 5","widget_media_grid_title":"Customer photos \u0026 videos","widget_media_grid_see_more_text":"See more","widget_round_style":true,"widget_show_product_medals":false,"widget_verified_by_judgeme_text":"Verified by Judge.me","widget_show_store_medals":true,"widget_verified_by_judgeme_text_in_store_medals":"Verified by Judge.me","widget_media_field_exceed_quantity_message":"Sorry, we can only accept {{ max_media }} for one review.","widget_media_field_exceed_limit_message":"{{ file_name }} is too large, please select a {{ media_type }} less than {{ size_limit }}MB.","widget_review_submitted_text":"Review Submitted!","widget_question_submitted_text":"Question Submitted!","widget_close_form_text_question":"Cancel","widget_write_your_answer_here_text":"Write your answer here","widget_enabled_branded_link":true,"widget_show_collected_by_judgeme":true,"widget_reviewer_name_color":"","widget_write_review_text_color":"","widget_write_review_bg_color":"","widget_collected_by_judgeme_text":"collected by Judge.me","widget_pagination_type":"load_more","widget_load_more_text":"Load More","widget_load_more_color":"#108474","widget_full_review_text":"Full Review","widget_read_more_reviews_text":"Read More Reviews","widget_read_questions_text":"Read Questions","widget_questions_and_answers_text":"Questions \u0026 Answers","widget_verified_by_text":"Verified by","widget_verified_text":"Verified","widget_number_of_reviews_text":"{{ number_of_reviews }} reviews","widget_back_button_text":"Back","widget_next_button_text":"Next","widget_custom_forms_filter_button":"Filters","custom_forms_style":"vertical","widget_show_review_information":false,"how_reviews_are_collected":"How reviews are collected?","widget_show_review_keywords":false,"widget_gdpr_statement":"How we use your data: We'll only contact you about the review you left, and only if necessary. By submitting your review, you agree to Judge.me's \u003ca href='https://judge.me/terms' target='_blank' rel='nofollow noopener'\u003eterms\u003c/a\u003e, \u003ca href='https://judge.me/privacy' target='_blank' rel='nofollow noopener'\u003eprivacy\u003c/a\u003e and \u003ca href='https://judge.me/content-policy' target='_blank' rel='nofollow noopener'\u003econtent\u003c/a\u003e policies.","widget_multilingual_sorting_enabled":false,"widget_translate_review_content_enabled":false,"widget_translate_review_content_method":"manual","popup_widget_review_selection":"automatically_with_pictures","popup_widget_round_border_style":true,"popup_widget_show_title":true,"popup_widget_show_body":true,"popup_widget_show_reviewer":false,"popup_widget_show_product":true,"popup_widget_show_pictures":true,"popup_widget_use_review_picture":true,"popup_widget_show_on_home_page":true,"popup_widget_show_on_product_page":true,"popup_widget_show_on_collection_page":true,"popup_widget_show_on_cart_page":true,"popup_widget_position":"bottom_left","popup_widget_first_review_delay":5,"popup_widget_duration":5,"popup_widget_interval":5,"popup_widget_review_count":5,"popup_widget_hide_on_mobile":true,"popup_widget_source_mode":"auto","popup_widget_page_product":"current_product","popup_widget_page_collection":"current_collection","popup_widget_page_cart":"cart_mode","popup_widget_page_home":"all","popup_widget_star_rating":"all","popup_widget_review_type":"all","popup_widget_top_up_thin_pages":true,"popup_widget_corner_styling":"soft","review_snippet_widget_round_border_style":true,"review_snippet_widget_card_color":"#FFFFFF","review_snippet_widget_text_color":"#000000","review_snippet_widget_lighter_text_color":"#7B7B7B","review_snippet_widget_slider_arrows_background_color":"#FFFFFF","review_snippet_widget_slider_arrows_color":"#000000","review_snippet_widget_star_color":"#000000","show_product_variant":false,"all_reviews_product_variant_label_text":"Variant: ","widget_show_verified_branding":true,"widget_ai_summary_title":"Customers say","widget_ai_summary_disclaimer":"Summarized and selected by AI from recent customer reviews","widget_show_ai_summary":false,"widget_show_ai_summary_bg":false,"write_review_button_visibility":"everyone","store_summary_widget_heading":"Customers rate this store","store_summary_widget_button_text":"View customer reviews","store_summary_widget_button_theme_text":"See AI reviews summary","widget_show_review_title_input":true,"widget_autofill_review_title":true,"redirect_reviewers_invited_via_email":"review_widget","request_store_review_after_product_review":false,"request_review_other_products_in_order":false,"review_form_color_scheme":"default","review_form_corner_style":"square","review_form_star_color":"#000000","review_form_text_color":"#333333","review_form_background_color":"#ffffff","review_form_field_background_color":"#fafafa","review_form_button_color":"#000000","review_form_button_text_color":"#ffffff","review_form_modal_overlay_color":"#000000","review_form_theme":"multi_step","review_form_location":"in_store_popup","review_form_external_page_background_color":"#C5F7F0","review_content_screen_title_text":"How would you rate this product?","review_content_introduction_text":"We would love it if you would share a bit about your experience.","store_review_form_title_text":"How would you rate this store?","store_review_form_introduction_text":"We would love it if you would share a bit about your experience.","show_review_guidance_text":true,"one_star_review_guidance_text":"Poor","five_star_review_guidance_text":"Great","customer_information_screen_title_text":"About you","customer_information_introduction_text":"Please tell us more about you.","custom_questions_screen_title_text":"Your experience in more detail","custom_questions_introduction_text":"Here are a few questions to help us understand more about your experience.","review_submitted_screen_title_text":"Thanks for your review!","review_submitted_screen_thank_you_text":"We are processing it and it will appear on the store soon.","review_submitted_screen_email_verification_text":"Please confirm your email by clicking the link we just sent you. This helps us keep reviews authentic.","confirm_email_screen_title_text":"Confirm your email","confirm_email_screen_message_text":"To help keep reviews authentic, we'll send you a secure link to continue writing your review. It only takes a moment.","check_email_screen_title_text":"Check your email","check_email_screen_message_text":"We sent you an email to {{ email }}. Click the button on the email to continue.","check_email_screen_resend_message_text":"Email resent!","check_email_resend_hint_text":"Didn't get the email? Check your spam folder or [resend the email].","verification_email_rate_limit_error_text":"You've reached the limit for review attempts on this product. Please check your inbox or try again later.","review_submitted_request_store_review_text":"Would you like to share your experience of shopping with us?","review_submitted_review_other_products_text":"Would you like to review these products?","store_review_screen_title_text":"Would you like to share your experience of shopping with us?","store_review_introduction_text":"We value your feedback and use it to improve. Please share any thoughts or suggestions you have.","reviewer_media_screen_title_picture_text":"Share a picture","reviewer_media_introduction_picture_text":"Upload a photo to support your review.","reviewer_media_screen_title_video_text":"Share a video","reviewer_media_introduction_video_text":"Upload a video to support your review.","reviewer_media_screen_title_picture_or_video_text":"Share a picture or video","reviewer_media_introduction_picture_or_video_text":"Upload a photo or video to support your review.","reviewer_media_youtube_url_text":"Paste your Youtube URL here","advanced_settings_next_step_button_text":"Next","advanced_settings_close_review_button_text":"Close","modal_write_review_flow":false,"write_review_flow_required_text":"Required","write_review_flow_privacy_message_text":"We respect your privacy.","write_review_flow_anonymous_text":"Post review as anonymous","write_review_flow_visibility_text":"This won't be visible to other customers.","write_review_flow_multiple_selection_help_text":"Select as many as you like","write_review_flow_single_selection_help_text":"Select one option","write_review_flow_required_field_error_text":"This field is required","write_review_flow_invalid_email_error_text":"Please enter a valid email address","write_review_flow_max_length_error_text":"Max. {{ max_length }} characters.","write_review_flow_media_upload_text":"\u003cb\u003eClick to upload\u003c/b\u003e or drag and drop","write_review_flow_gdpr_statement":"We'll only contact you about your review if necessary. By submitting your review, you agree to our \u003ca href='https://judge.me/terms' target='_blank' rel='nofollow noopener'\u003eterms and conditions\u003c/a\u003e and \u003ca href='https://judge.me/privacy' target='_blank' rel='nofollow noopener'\u003eprivacy policy\u003c/a\u003e.","rating_only_reviews_enabled":false,"show_negative_reviews_help_screen":false,"new_review_flow_help_screen_rating_threshold":3,"negative_review_resolution_screen_title_text":"Tell us more","negative_review_resolution_text":"Your experience matters to us. If there were issues with your purchase, we're here to help. Feel free to reach out to us, we'd love the opportunity to make things right.","negative_review_resolution_button_text":"Contact us","negative_review_resolution_proceed_with_review_text":"Leave a review","negative_review_resolution_subject":"Issue with purchase from {{ shop_name }}.{{ order_name }}","coupon_promo_intro_any_review_text":"Write a review and get a coupon for {{ amount }} off your next purchase","coupon_promo_intro_with_photo_text":"Write a review and add a photo or video to get a coupon for {{ amount }} off your next purchase","coupon_promo_intro_with_video_text":"Write a review and add a video to get a coupon for {{ amount }} off your next purchase","coupon_promo_intro_up_to_any_review_text":"Write a review and get a coupon for up to {{ amount }} off your next purchase","coupon_promo_intro_up_to_with_photo_text":"Write a review and add a photo or video to get a coupon for up to {{ amount }} off your next purchase","coupon_promo_intro_external_text":"Write a review and get a reward for your next purchase","coupon_promo_intro_external_with_photo_text":"Write a review and add a photo or video to get a reward for your next purchase","coupon_promo_intro_external_with_video_text":"Write a review and add a video to get a reward for your next purchase","coupon_promo_media_photo_text":"Add a photo or video and get a coupon for {{ amount }} off your next purchase","coupon_promo_media_photo_only_text":"Add a photo and get a coupon for {{ amount }} off your next purchase","coupon_promo_media_video_text":"Add a video and get a coupon for {{ amount }} off your next purchase","coupon_promo_media_external_photo_text":"Add a photo or video and get a reward for your next purchase","coupon_promo_media_external_photo_only_text":"Add a photo and get a reward for your next purchase","coupon_promo_media_external_video_text":"Add a video and get a reward for your next purchase","coupon_promo_success_text":"You've got a coupon for your next purchase at {{ shop_name }}!","coupon_promo_success_subtext":"You'll receive your coupon email within the hour.","preview_badge_collection_page_install_status":false,"widget_review_custom_css":"@media screen and (min-width: 800px) {\n.jdgm-rev.jdgm-divider-top.jdgm--done-setup.jdgm--leex-done-setup {\nwidth: calc(25% - 15px) !important;\n}\n\n\n}\n@media(max-width:767px){\n\n.jdgm-rev.jdgm-divider-top.jdgm--done-setup.jdgm--leex-done-setup {\n    padding: 10px;\n\n    border-color: #000;\n    box-shadow: 1px 3px 4px 4px #cccccc80 !important;\n    margin-bottom: 10px!important;\n}\n}\n","preview_badge_custom_css":"","preview_badge_stars_count":"5-stars","featured_carousel_custom_css":"","floating_tab_custom_css":"","all_reviews_widget_custom_css":"","medals_widget_custom_css":"","verified_badge_custom_css":"","all_reviews_text_custom_css":"","transparency_badges_collected_via_store_invite":false,"transparency_badges_from_another_provider":false,"transparency_badges_collected_from_store_visitor":false,"transparency_badges_collected_by_verified_review_provider":true,"transparency_badges_earned_reward":false,"transparency_badges_collected_via_store_invite_text":"Review collected via store invitation","transparency_badges_from_another_provider_text":"Review collected from another provider","transparency_badges_collected_from_store_visitor_text":"Review collected from a store visitor","transparency_badges_written_in_google_text":"Review written in Google","transparency_badges_written_in_etsy_text":"Review written in Etsy","transparency_badges_written_in_shop_app_text":"Review written in Shop App","transparency_badges_earned_reward_text":"Review earned a reward for future purchase","product_review_widget_per_page":10,"widget_other_languages_reviews_per_page":3,"widget_store_review_label_text":"Review about the store","widget_cart_mode_aggregate_heading_text":"Customers rate this store","widget_sort_by_text":"Sort by","checkout_comment_extension_title_on_product_page":"Customer Comments","checkout_comment_extension_num_latest_comment_show":5,"checkout_comment_extension_format":"name_and_timestamp","checkout_comment_customer_name":"last_initial","checkout_comment_comment_notification":true,"preview_badge_collection_page_install_preference":false,"preview_badge_home_page_install_preference":false,"preview_badge_product_page_install_preference":false,"review_widget_install_preference":"","review_carousel_install_preference":false,"floating_reviews_tab_install_preference":"none","verified_reviews_count_badge_install_preference":false,"all_reviews_text_install_preference":false,"review_widget_best_location":true,"judgeme_medals_install_preference":false,"review_widget_revamp_enabled":false,"review_widget_qna_enabled":false,"review_widget_header_theme":"minimal","review_widget_widget_title_enabled":true,"review_widget_header_text_size":"medium","review_widget_header_text_weight":"regular","review_widget_average_rating_style":"compact","review_widget_bar_chart_enabled":true,"review_widget_bar_chart_type":"numbers","review_widget_bar_chart_style":"standard","review_widget_expanded_media_gallery_enabled":false,"review_widget_show_review_highlights":false,"review_widget_show_review_keywords_in_gray":false,"review_widget_reviews_section_theme":"standard","review_widget_image_style":"thumbnails","review_widget_review_image_ratio":"square","review_widget_stars_size":"medium","review_widget_verified_badge":"standard_text","review_widget_review_title_text_size":"medium","review_widget_review_text_size":"medium","review_widget_review_text_length":"medium","review_widget_number_of_columns_desktop":3,"review_widget_carousel_transition_speed":5,"review_widget_custom_questions_answers_display":"always","review_widget_card_section_size":"small","review_widget_button_text_color":"#FFFFFF","review_widget_text_color":"#000000","review_widget_lighter_text_color":"#7B7B7B","review_widget_corner_styling":"soft","review_widget_review_word_singular":"review","review_widget_review_word_plural":"reviews","review_widget_voting_label":"Helpful?","review_widget_shop_reply_label":"Reply from {{ shop_name }}:","review_widget_filters_title":"Filters","review_widget_filter_rating_title":"Rating","review_widget_filter_keyword_title":"Keyword","review_widget_clear_filters_text":"Clear filters","review_widget_expand_more_text":"More","review_widget_review_highlights_title":"Review highlights","qna_widget_question_word_singular":"Question","qna_widget_question_word_plural":"Questions","qna_widget_answer_reply_label":"Answer from {{ answerer_name }}:","qna_content_screen_title_text":"Ask a question about this product","qna_widget_question_required_field_error_text":"Please enter your question.","qna_widget_flow_gdpr_statement":"We'll only contact you about your question if necessary. By submitting your question, you agree to our \u003ca href='https://judge.me/terms' target='_blank' rel='nofollow noopener'\u003eterms and conditions\u003c/a\u003e and \u003ca href='https://judge.me/privacy' target='_blank' rel='nofollow noopener'\u003eprivacy policy\u003c/a\u003e.","qna_widget_question_submitted_text":"Thanks for your question!","qna_widget_close_form_text_question":"Close","qna_widget_question_submit_success_text":"We’ll notify you by email when your question is answered.","all_reviews_widget_v2025_enabled":false,"all_reviews_widget_v2025_header_theme":"default","all_reviews_widget_v2025_widget_title_enabled":true,"all_reviews_widget_v2025_header_text_size":"medium","all_reviews_widget_v2025_header_text_weight":"regular","all_reviews_widget_v2025_average_rating_style":"compact","all_reviews_widget_v2025_bar_chart_enabled":true,"all_reviews_widget_v2025_bar_chart_type":"numbers","all_reviews_widget_v2025_bar_chart_style":"standard","all_reviews_widget_v2025_expanded_media_gallery_enabled":false,"all_reviews_widget_v2025_show_store_medals":true,"all_reviews_widget_v2025_show_photo_gallery":true,"all_reviews_widget_v2025_show_review_keywords":false,"all_reviews_widget_v2025_show_ai_summary":false,"all_reviews_widget_v2025_show_ai_summary_bg":false,"all_reviews_widget_v2025_show_review_highlights":false,"all_reviews_widget_v2025_show_review_keywords_in_gray":false,"all_reviews_widget_v2025_add_search_bar":false,"all_reviews_widget_v2025_default_sort_method":"most-recent","all_reviews_widget_v2025_reviews_per_page":10,"all_reviews_widget_v2025_reviews_section_theme":"default","all_reviews_widget_v2025_image_style":"thumbnails","all_reviews_widget_v2025_review_image_ratio":"square","all_reviews_widget_v2025_stars_size":"medium","all_reviews_widget_v2025_verified_badge":"standard_text","all_reviews_widget_v2025_review_title_text_size":"medium","all_reviews_widget_v2025_review_text_size":"medium","all_reviews_widget_v2025_review_text_length":"medium","all_reviews_widget_v2025_number_of_columns_desktop":3,"all_reviews_widget_v2025_carousel_transition_speed":5,"all_reviews_widget_v2025_custom_questions_answers_display":"always","all_reviews_widget_v2025_review_dates":false,"all_reviews_widget_v2025_card_section_size":"small","all_reviews_widget_v2025_show_product_variant":false,"all_reviews_widget_v2025_show_reviewer_avatar":true,"all_reviews_widget_v2025_reviewer_name_as_initial":"","all_reviews_widget_v2025_review_location_show":false,"all_reviews_widget_v2025_location_format":"","all_reviews_widget_v2025_show_country_flag":false,"all_reviews_widget_v2025_widget_thumb":false,"all_reviews_widget_v2025_verified_by_shop_badge_style":"light","all_reviews_widget_v2025_social_share":false,"all_reviews_widget_v2025_social_share_options_order":"Facebook,Twitter,LinkedIn,Pinterest","all_reviews_widget_v2025_pagination_type":"standard","all_reviews_widget_v2025_button_text_color":"#FFFFFF","all_reviews_widget_v2025_text_color":"#000000","all_reviews_widget_v2025_lighter_text_color":"#7B7B7B","all_reviews_widget_v2025_corner_styling":"soft","all_reviews_widget_v2025_title":"Customer reviews","all_reviews_widget_v2025_ai_summary_title":"Customers say about this store","all_reviews_widget_v2025_no_review_text":"Be the first to write a review","all_reviews_widget_v2025_review_highlights_title":"Review highlights","reviews_grid_widget_show_sample_reviews":false,"reviews_grid_widget_review_selection":"all","reviews_grid_widget_select_products":[],"reviews_grid_widget_show_media_only":false,"reviews_grid_widget_display_order":"media_first","reviews_grid_widget_card_grouping":"per_media","reviews_grid_widget_columns_desktop":3,"reviews_grid_widget_rows_desktop":3,"reviews_grid_widget_columns_mobile":2,"reviews_grid_widget_rows_mobile":6,"reviews_grid_widget_show_stars":true,"reviews_grid_widget_show_reviewer_name":true,"reviews_grid_widget_show_review_title_on_hover_desktop":true,"reviews_grid_widget_corner_styling":"soft","reviews_grid_widget_card_spacing":"medium","reviews_grid_widget_header_text_color":"#000000","reviews_grid_widget_star_and_reviewer_name_color":"#F9F9F9","reviews_grid_widget_overlay_and_background_color":"#000000","reviews_grid_widget_content_color":"#F9F9F9","reviews_grid_widget_header_text":"From our customers","reviews_grid_widget_show_average_rating":true,"trust_badge_enabled":false,"trust_badge_structure":"outline","trust_badge_color":"black","trust_badge_star":"black","trust_badge_rating_display_default":"show_avg_text","platform":"shopify","branding_url":"https://app.judge.me/reviews","branding_text":"Powered by Judge.me","locale":"en","reply_name":"ZeroLifestyle.co","shop_currency":"PKR","widget_version":"3.0","footer":true,"autopublish":false,"review_dates":true,"enable_custom_form":false,"shop_locale":"en","enable_multi_locales_translations":true,"show_review_title_input":true,"autofill_review_title":true,"review_verification_email_status":"always","require_verification_before_submit":false,"sign_in_with_shop_enabled":false,"customer_account_validation_enabled":true,"most_relevant_sort_enabled":false,"widget_events_v4_impressions_enabled":false,"widget_events_review_grain_enabled":false,"widget_events_v4_time_in_view_enabled":false,"widget_events_v4_session_key_enabled":false,"widget_events_v4_interactions_enabled":false,"widget_attribution_exposure_timestamps_enabled":false,"widget_attribution_v4_exposures_enabled":false,"coupon_promo_invited_eligible":true,"coupon_promo_web_eligible":false,"uses_coupon_integration":false,"uses_external_coupon":false,"hostname_allowlist":"","can_be_branded":false,"rtl_stars_enabled_ar":true,"rtl_stars_enabled_he":true,"reply_name_text":"ZeroLifestyle.co"};

// --- Script 27 ---
!function(e){window.jdgm=window.jdgm||{};
/* INF-1976 */
var _jdgmBlocked=function(){var raw=(window.jdgmSettings||{}).hostname_allowlist;var list=(raw==null?"":""+raw).split(/[\s,]+/).map(function(h){return h.trim().toLowerCase().replace(/\.$/,"");}).filter(function(h){return h;});if(!list.length)return false;var host=(e.location.hostname||"").toLowerCase().replace(/\.$/,"");if(/(^|\.)shopifypreview\.com$/.test(host))return false;var bare=host.replace(/^www\./,"");for(var i=0;i<list.length;i++){var en=list[i];if(en.indexOf("*.")===0){var b=en.slice(2);if(host===b||host.slice(-(b.length+1))==="."+b)return false;}else if(bare===en.replace(/^www\./,""))return false;}return true;}();
if(_jdgmBlocked){jdgm._loaderExecuted=true;jdgm._blocked=true;var _jdgmS=e.createElement("style");_jdgmS.textContent='[class^="jdgm-"],[class*=" jdgm-"]{display:none !important}';(e.head||e.documentElement).appendChild(_jdgmS);return;}
jdgm.CDN_HOST="https:\/\/cdnwidget.judge.me\/",jdgm.CDN_HOST_ALT="https:\/\/cdn2.judge.me\/cdn\/widget_frontend\/",jdgm.API_HOST="https:\/\/api.judge.me\/",jdgm.CDN_BASE_URL="https:\/\/cdn.shopify.com\/extensions\/01a1ef7b-c47f-7590-a206-c3509fe64104\/judgeme-866\/assets\/",jdgm.CDN_API_HOST="https:\/\/cdn.judge.me\/",
jdgm.docReady=function(d){(e.attachEvent?"complete"===e.readyState:"loading"!==e.readyState)?
setTimeout(d,0):e.addEventListener("DOMContentLoaded",d)},jdgm.loadCSS=function(d,t,o,a){
!o&&jdgm.loadCSS.requestedUrls.indexOf(d)>=0||(jdgm.loadCSS.requestedUrls.push(d),
(a=e.createElement("link")).rel="stylesheet",a.class="jdgm-stylesheet",a.media="nope!",
a.href=d,a.onload=function(){this.media="all",t&&setTimeout(t)},e.body.appendChild(a))},
jdgm.loadCSS.requestedUrls=[],jdgm.loadJS=function(e,d){var t=new XMLHttpRequest;
t.onreadystatechange=function(){4===t.readyState&&t.status>=200&&t.status<300&&(Function(t.response)(),d&&d(t.response))},
t.open("GET",e),t.onerror=function(){if(e.indexOf(jdgm.CDN_HOST)===0&&jdgm.CDN_HOST_ALT!==jdgm.CDN_HOST){var f=e.replace(jdgm.CDN_HOST,jdgm.CDN_HOST_ALT);jdgm.loadJS(f,d)}},t.send()},jdgm.docReady((function(){(window.jdgmLoadCSS||e.querySelectorAll(
".jdgm-widget, .jdgm-all-reviews-page").length>0)&&(jdgmSettings.widget_load_with_code_splitting?
parseFloat(jdgmSettings.widget_version)>=3?jdgm.loadCSS(jdgm.CDN_BASE_URL+"widget_v3_base.css"):
jdgm.loadCSS(jdgm.CDN_BASE_URL+"widget_base.css"):jdgm.loadCSS(jdgm.CDN_BASE_URL+"shopify_v2.css")
)}))}(document);

// --- Script 28 ---
(function() {
    var jdgmThemeFixes = {"171305042198":{"html":"","css":".jdgm-prev-badge__stars .jdgm-star:nth-child(n+2) {\n    display: none !important;\n}","js":""},"175277768982":{"html":"","css":".jdgm-rev-widg__sort-wrapper {\n    display: none !important;\n}\n\n.jdgm-rev-widg, \n.jdgm-rev-widg * {\n  box-shadow: none !important;\n  text-shadow: none !important;\n}\n\n.jdgm-rev.jdgm-divider-top.jdgm--done-setup.jdgm--leex-done-setup {\n  border: 1px solid #e0e0e0; \/* light grey border *\/\n  border-radius: 4px; \/* optional: for a soft rounded look *\/\n  padding: 10px; \/* optional: adds space inside the border *\/\n}\n\n@media screen and (max-width: 900px) {\n.jdgm-rev.jdgm-divider-top.jdgm--done-setup.jdgm--leex-done-setup\n{  width: calc(50% - 15px) !important;\n float: left !important;\n box-sizing: border-box !important;\n  }\n}\n","js":""}};
    if (!jdgmThemeFixes) return;

    // "All themes" fix: CSS and JS applied on every theme. CSS is injected
    // before the per-theme fix so the theme-specific CSS wins the cascade.
    // HTML is never applied globally (too risky).
    var allThemesFix = jdgmThemeFixes['all'];
    if (allThemesFix && allThemesFix.css) {
      var allStyleTag = document.createElement('style');
      allStyleTag.classList.add('jdgm-theme-fix-style-all');
      allStyleTag.innerHTML = allThemesFix.css;
      document.head.append(allStyleTag);
    };

    if (allThemesFix && allThemesFix.js) {
      var allScriptTag = document.createElement('script');
      allScriptTag.classList.add('jdgm-theme-fix-script-all');
      allScriptTag.innerHTML = allThemesFix.js;
      document.head.append(allScriptTag);
    };

    var thisThemeFix = jdgmThemeFixes[Shopify.theme.id];
    if (!thisThemeFix) return;

    if (thisThemeFix.html) {
      document.addEventListener("DOMContentLoaded", function() {
        var htmlDiv = document.createElement('div');
        htmlDiv.classList.add('jdgm-theme-fix-html');
        htmlDiv.innerHTML = thisThemeFix.html;
        document.body.append(htmlDiv);
      });
    };

    if (thisThemeFix.css) {
      var styleTag = document.createElement('style');
      styleTag.classList.add('jdgm-theme-fix-style');
      styleTag.innerHTML = thisThemeFix.css;
      document.head.append(styleTag);
    };

    if (thisThemeFix.js) {
      var scriptTag = document.createElement('script');
      scriptTag.classList.add('jdgm-theme-fix-script');
      scriptTag.innerHTML = thisThemeFix.js;
      document.head.append(scriptTag);
    };
  })();

// --- Script 29 ---
window.__TREKKIE_SHIM_QUEUE = window.__TREKKIE_SHIM_QUEUE || [];

// --- Script 31 ---
window.ShopifyAnalytics = window.ShopifyAnalytics || {};
  window.ShopifyAnalytics.meta = window.ShopifyAnalytics.meta || {};
  window.ShopifyAnalytics.meta.currency = 'PKR';
  var meta = {"page":{"pageType":"home","requestId":"8094cb47-6ea4-4b24-ad96-e219866b3f16-1795025878"}};
  for (var attr in meta) {
    window.ShopifyAnalytics.meta[attr] = meta[attr];
  }

// --- Script 33 ---
(function () {
  var root = document.getElementById('top-ticker-sections--27918262599958__global_announcement_bar');
  if (!root) return;
  var track = root.querySelector('.top-ticker__track');
  var group = root.querySelector('.top-ticker__group');

  /* ---- Scroll pace: same pixels-per-second as the Top Ticker ----
     Both loop one group per cycle, so with a fixed duration the longer metaobject content
     (several messages + timer) would move faster. */
  var FALLBACK_PX_PER_SEC = 33; // Top Ticker's desktop pace, used when it isn't on the page

  function pace() {
    var tt = document.querySelector('.top-ticker-section .top-ticker');
    if (tt && tt.offsetParent !== null) {
      var ttGroup = tt.querySelector('.top-ticker__group');
      var ttSecs = parseFloat(getComputedStyle(tt.querySelector('.top-ticker__track')).animationDuration);
      if (ttGroup && ttGroup.offsetWidth && ttSecs > 0) return ttGroup.offsetWidth / ttSecs;
    }
    return FALLBACK_PX_PER_SEC;
  }

  var currentMs = 50000;

  function sync() {
    if (!track || !group || !group.offsetWidth) return;
    var ms = Math.round(group.offsetWidth / pace() * 1000);
    // Ignore tiny differences so the text never twitches for nothing.
    if (Math.abs(ms - currentMs) / currentMs < 0.02) return;
    currentMs = ms;
    // Change the running animation's duration in place, keeping its progress, so the text
    // carries on from where it is instead of jumping.
    var anim = track.getAnimations ? track.getAnimations()[0] : null;
    if (anim && anim.effect && anim.effect.updateTiming) {
      var oldMs = anim.effect.getTiming().duration;
      var progress = oldMs > 0 ? (anim.currentTime % oldMs) / oldMs : 0;
      anim.effect.updateTiming({ duration: ms });
      anim.currentTime = progress * ms;
    } else {
      track.style.animationDuration = ms / 1000 + 's';
    }
  }

  // The Top Ticker renders after this bar, so measure once the page is parsed, and again once
  // web fonts have swapped in (they change the text width).
  function init() {
    sync();
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(sync);
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init, { once: true });
  } else {
    init();
  }

  var lastW = window.innerWidth;
  var resizeTimer = null;
  window.addEventListener('resize', function () {
    if (window.innerWidth === lastW) return; // mobile URL-bar show/hide only changes height
    lastW = window.innerWidth;
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(sync, 150);
  });
})();

// --- Script 34 ---
/* Pulls the drawer banner in on the first tap of the hamburger. Until then the
     element holds a 1x1 placeholder, so a visitor who never opens the menu - most of
     them - never downloads it. Two triggers because the drawer is opened by a toggle
     button but can also be opened programmatically. */
  (function () {
    var img = document.querySelector('[data-mb-banner]');
    if (!img) return;
    var loaded = false;

    function mbBannerLoaded() {
      if (loaded) return;
      loaded = true;
      var src = img.getAttribute('data-banner-src');
      if (src) img.setAttribute('src', src);
      img.removeAttribute('data-banner-src');
    }

    document.addEventListener(
      'click',
      function (event) {
        var t = event.target;
        if (t && t.closest && t.closest('[aria-controls="mobile-menu-drawer"]')) mbBannerLoaded();
      },
      true
    );

    var drawer = document.getElementById('mobile-menu-drawer');
    if (drawer && window.MutationObserver) {
      new MutationObserver(function () {
        if (drawer.hasAttribute('open') || /is-open/.test(drawer.className)) mbBannerLoaded();
      }).observe(drawer, { attributes: true, attributeFilter: ['open', 'class'] });
    }
  })();

// --- Script 35 ---
(() => {
    const headerElement = document.getElementById('shopify-section-sections--27918262599958__header'),
      headerHeight = headerElement.clientHeight,
      headerHeightWithoutBottomNav = headerElement.querySelector('.header__wrapper').clientHeight;

    document.documentElement.style.setProperty('--header-height', headerHeight + 'px');
    document.documentElement.style.setProperty('--header-height-without-bottom-nav', headerHeightWithoutBottomNav + 'px');

    // Fallback for custom announcement bars that are not using Shopify announcement section.
    const currentAnnouncementHeight = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--announcement-bar-height'), 10) || 0;
    if (currentAnnouncementHeight < 45) {
      document.documentElement.style.setProperty('--announcement-bar-height', '45px');
    }
  })();

// --- Script 36 ---
{
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "ZeroLifestyle.co",
    
      "logo": "https:\/\/zerolifestyle.co\/cdn\/shop\/files\/zero-lifestyle-logo_5b9310b8-4d88-410b-84d0-b1f7fada86b2.webp?v=1683120623\u0026width=206",
    
    "url": "https:\/\/zerolifestyle.co"
  }

// --- Script 37 ---
document.addEventListener('DOMContentLoaded', function() {
  const modifiedButtons = new Set();
  document.body.addEventListener('click', function(event) {
    // Check for remove buttons (line-item remove)
    let removeButton = event.target.closest('.line-item__remove-button');
    let removeUrl = '';

    if (removeButton) {
      removeUrl = removeButton.getAttribute('href');
    } else {
      // Check for decrement-to-zero buttons (quantity decrease to zero)
      const decreaseButton = event.target.closest('.quantity-selector__button[aria-label="Decrease quantity"]');
      if (decreaseButton) {
        const href = decreaseButton.getAttribute('href');
        if (href && href.includes('quantity=0')) {
          removeButton = decreaseButton;
          removeUrl = href;
        }
      }
    }

    if (removeButton && !modifiedButtons.has(removeButton)) {
      console.log('REMOVE ACTION INTERCEPTED!', removeButton);

      // Stop default behavior
      event.preventDefault();
      event.stopPropagation();
      event.stopImmediatePropagation();

      // Mark this button as modified
      modifiedButtons.add(removeButton);

      // Create the confirmation popup
      const popupHTML = `
        <div class="cart-remove-confirmation">
          <div class="cart-remove-confirmation__content">
            <h3>Products in huge demand</h3>
            <p>Might run out of stock.</p>
            <p>Are you sure you want to remove it from the cart?</p>
            <div class="cart-remove-confirmation__buttons">
              <button class="cart-remove-confirmation__button cart-remove-confirmation__button--yes">Yes</button>
              <button class="cart-remove-confirmation__button cart-remove-confirmation__button--no">No</button>
            </div>
          </div>
        </div>
      `;

      document.body.insertAdjacentHTML('beforeend', popupHTML);
      console.log('Popup created and added to DOM');

      const popup = document.querySelector('.cart-remove-confirmation');
      const yesButton = popup.querySelector('.cart-remove-confirmation__button--yes');
      const noButton = popup.querySelector('.cart-remove-confirmation__button--no');

      yesButton.addEventListener('click', function() {
        console.log('YES button clicked - proceeding with removal');
        document.body.removeChild(popup);
        console.log('Navigating to:', removeUrl);
        window.location.href = removeUrl;
      });

      noButton.addEventListener('click', function() {
        console.log('NO button clicked - canceling removal');
        document.body.removeChild(popup);
      });

      return false;
    }
  }, true); // capture phase
});

// --- Script 38 ---
(function() {
      const root = document.getElementById('vp-template--27918264434966__video_popup_preview_LmddEM');
      if (!root) return;
      const vpVideoPreview = root.querySelector('.vp-video-wrapper');
      const vpVideoModal = root.querySelector('.vp-modal-overlay');
      const vpModalVideo = root.querySelector('.vp-modal-video');
      const vpCloseButton = root.querySelector('.vp-close-btn');
      const body = document.body;

      // The preview is only attached once it scrolls into view, so visitors who
      // never reach this section don't pay for a YouTube embed.
      const vpPreviewVideo = vpVideoPreview.querySelector('.vp-preview-video');
      const vpStartPreview = function() {
        if (!vpPreviewVideo || vpPreviewVideo.getAttribute('src')) return;
        vpPreviewVideo.src = vpPreviewVideo.dataset.src;
      };
      if ('IntersectionObserver' in window) {
        const vpObserver = new IntersectionObserver(function(entries) {
          if (!entries.some(function(entry) { return entry.isIntersecting; })) return;
          vpStartPreview();
          vpObserver.disconnect();
        }, { rootMargin: '200px' });
        vpObserver.observe(vpVideoPreview);
      } else {
        vpStartPreview();
      }

      // The popup player is only attached when the modal opens, and removing
      // the src stops playback on close.
      const vpOpenModal = function() {
        vpVideoModal.style.display = 'flex';
        body.classList.add('vp-no-scroll');
        if (!vpModalVideo.getAttribute('src')) vpModalVideo.src = vpModalVideo.dataset.src;
      };
      const vpCloseModal = function() {
        vpVideoModal.style.display = 'none';
        body.classList.remove('vp-no-scroll');
        vpModalVideo.removeAttribute('src');
      };

      vpVideoPreview.addEventListener('click', vpOpenModal);
      vpVideoPreview.addEventListener('keydown', function(event) {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          vpOpenModal();
        }
      });
      vpCloseButton.addEventListener('click', vpCloseModal);
      vpVideoModal.addEventListener('click', function(event) {
        if (event.target === vpVideoModal) vpCloseModal();
      });
      document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && vpVideoModal.style.display === 'flex') vpCloseModal();
      });
    })();

// --- Script 39 ---
(function () {
  var root = document.getElementById('ivc-template--27918264434966__image_video_carousel_gX9J86');
  if (!root || root.dataset.ivcReady) return;
  root.dataset.ivcReady = '1';

  var track = root.querySelector('[data-ivc-track]');
  var group = root.querySelector('[data-ivc-group]');
  var originals = Array.prototype.slice.call(group.children);
  if (!originals.length) return;
  var speed = Math.max(5, Number(root.dataset.speed) || 50); // pixels per second

  // Popup playlist: original video cards in order. Clones copy data-ivc-index, so any copy opens the right video.
  var playlist = Array.prototype.filter.call(group.querySelectorAll('[data-ivc-video-card]'), function (c) {
    return !!c.dataset.videoSrc;
  });
  playlist.forEach(function (c, i) { c.dataset.ivcIndex = i; });

  /* ---------- Inline muted previews (play only while visible) ---------- */
  var previewObserver = 'IntersectionObserver' in window ? new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      var video = entry.target;
      var card = video.closest('[data-ivc-video-card]');
      if (entry.isIntersecting) {
        if (!video.src && video.dataset.src) video.src = video.dataset.src;
        var p = video.play();
        if (p && p.then) p.then(function () { card && card.classList.add('is-playing'); }).catch(function () {});
      } else {
        video.pause();
        card && card.classList.remove('is-playing');
      }
    });
  }, { threshold: 0.25 }) : null;

  function observePreviews() {
    if (!previewObserver) return;
    root.querySelectorAll('.ivc-preview').forEach(function (v) {
      if (v.dataset.observed) return;
      v.dataset.observed = '1';
      previewObserver.observe(v);
    });
  }

  function cloneItem(item) {
    var clone = item.cloneNode(true);
    clone.removeAttribute('data-shopify-editor-block');
    clone.setAttribute('aria-hidden', 'true');
    clone.querySelectorAll('a, [tabindex]').forEach(function (el) { el.setAttribute('tabindex', '-1'); });
    clone.querySelectorAll('[data-observed]').forEach(function (el) { el.removeAttribute('data-observed'); });
    clone.querySelectorAll('video').forEach(function (v) { v.removeAttribute('src'); });
    return clone;
  }

  /* ---------- Build seamless marquee ---------- */
  function build() {
    root.classList.remove('is-running');

    // Card width from "cards visible" setting, based on the real section width.
    var perView = parseFloat(getComputedStyle(root).getPropertyValue('--ivc-per-view')) || 1;
    var gapPx = parseFloat(getComputedStyle(root).getPropertyValue('--ivc-gap')) || 0;
    var cardW = (root.clientWidth - gapPx * (perView - 1)) / perView;
    root.style.setProperty('--ivc-card-w', Math.max(80, cardW).toFixed(2) + 'px');

    // Reset to the original cards only.
    while (track.children.length > 1) track.removeChild(track.lastChild);
    while (group.children.length > originals.length) group.removeChild(group.lastChild);

    // Fill one group to at least the viewport width so there is never an empty gap.
    var minWidth = root.clientWidth + 1;
    var guard = 0;
    while (group.scrollWidth < minWidth && guard < 20) {
      originals.forEach(function (item) { group.appendChild(cloneItem(item)); });
      guard++;
    }

    // Second identical group: track moves exactly one group width, then repeats seamlessly.
    var copy = group.cloneNode(false);
    copy.setAttribute('aria-hidden', 'true');
    Array.prototype.forEach.call(group.children, function (item) { copy.appendChild(cloneItem(item)); });
    track.appendChild(copy);

    distance = group.getBoundingClientRect().width;
    pos = ((pos % distance) + distance) % distance;
    viewport.scrollLeft = pos;
    root.classList.add('is-running');
    observePreviews();
  }

  /* ---------- Auto-scroll + swipe (native horizontal scroll) ---------- */
  var viewport = root.querySelector('.ivc-viewport');
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var pauseOnHover = root.dataset.pauseHover === 'true' && window.matchMedia('(hover: hover)').matches;
  var dirSign = root.classList.contains('ivc--right') ? -1 : 1;
  var distance = 0;
  var pos = 0; // float position, so slow speeds still move smoothly
  var lastTs = 0;
  var hovered = false;
  var userActive = false;
  var idleTimer = null;
  var alive = true;

  function tick(ts) {
    if (!alive) return;
    var dt = lastTs ? Math.min((ts - lastTs) / 1000, 0.1) : 0;
    lastTs = ts;
    var running = !reduceMotion && !userActive && !(pauseOnHover && hovered) && distance > 0 &&
      root.classList.contains('is-running') && !root.classList.contains('is-paused');
    if (running && dt) {
      pos = (((pos + dirSign * speed * dt) % distance) + distance) % distance;
      viewport.scrollLeft = pos;
    }
    requestAnimationFrame(tick);
  }

  // While the user swipes / scrolls, stop auto-scroll; resume from where they left it.
  function markActive() {
    userActive = true;
    clearTimeout(idleTimer);
    idleTimer = setTimeout(function () {
      userActive = false;
      pos = viewport.scrollLeft;
      lastTs = 0;
    }, 1500);
  }
  viewport.addEventListener('touchstart', markActive, { passive: true });
  viewport.addEventListener('wheel', function (e) {
    if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) markActive();
  }, { passive: true });
  viewport.addEventListener('scroll', function () {
    if (!userActive || !distance) return;
    markActive();
    // Both groups are identical, so jumping one group width at the ends keeps the loop endless.
    var sl = viewport.scrollLeft;
    var max = viewport.scrollWidth - viewport.clientWidth;
    if (sl <= 0) viewport.scrollLeft = sl + distance;
    else if (sl >= max - 1) viewport.scrollLeft = sl - distance;
  }, { passive: true });
  viewport.addEventListener('mouseenter', function () { hovered = true; });
  viewport.addEventListener('mouseleave', function () { hovered = false; lastTs = 0; });

  var lastWidth = 0;
  var resizeTimer = null;
  function onResize() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function () {
      if (Math.abs(root.clientWidth - lastWidth) < 2) return; // ignore mobile URL-bar height changes
      lastWidth = root.clientWidth;
      build();
    }, 200);
  }

  // Pause the animation when the section is off screen (saves battery, no jank elsewhere).
  if ('IntersectionObserver' in window) {
    new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) { root.classList.toggle('is-paused', !entry.isIntersecting); });
    }).observe(root);
  }

  /* ---------- Popup player ---------- */
  var modal = root.querySelector('[data-ivc-modal]');
  document.body.appendChild(modal); // escape any transformed parents so position:fixed works
  var mVideo = modal.querySelector('[data-ivc-modal-video]');
  var mShop = modal.querySelector('[data-ivc-modal-shop]');
  var mTime = modal.querySelector('[data-ivc-time]');
  var mBar = modal.querySelector('[data-ivc-bar]');
  var mFill = modal.querySelector('[data-ivc-fill]');
  var mVol = modal.querySelector('[data-ivc-volume]');
  var ICON_ON = '<path d="M11 5L6 9H2V15H6L11 19V5Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M19.07 4.93A10 10 0 0 1 19.07 19.07M15.54 8.46A5 5 0 0 1 15.54 15.54" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>';
  var ICON_OFF = '<path d="M11 5L6 9H2V15H6L11 19V5Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><line x1="23" y1="9" x2="17" y2="15" stroke="white" stroke-width="2" stroke-linecap="round"/><line x1="17" y1="9" x2="23" y2="15" stroke="white" stroke-width="2" stroke-linecap="round"/>';

  function updateVolumeIcon() {
    mVol.querySelector('svg').innerHTML = mVideo.muted ? ICON_OFF : ICON_ON;
  }

  var mBox = modal.querySelector('.ivc-modal__box');
  var mNav = modal.querySelector('[data-ivc-nav]');
  var mHint = modal.querySelector('[data-ivc-hint]');
  var autoNext = root.dataset.autonext === 'true';
  var current = 0;
  var preloader = null;
  var preloadTimer = null;
  var hintTimer = null;

  mNav.hidden = playlist.length < 2;
  mVideo.loop = !autoNext || playlist.length < 2;

  function playCurrent() {
    mVideo.play().catch(function () {
      mVideo.muted = true;
      updateVolumeIcon();
      mVideo.play().catch(function () {});
    });
  }

  // Warm up the next video in the background so swiping feels instant.
  function preloadNext() {
    clearTimeout(preloadTimer);
    if (playlist.length < 2) return;
    preloadTimer = setTimeout(function () {
      var next = playlist[(current + 1) % playlist.length];
      if (!preloader) {
        preloader = document.createElement('video');
        preloader.muted = true;
        preloader.preload = 'auto';
      }
      if (preloader.getAttribute('src') !== next.dataset.videoSrc) {
        preloader.src = next.dataset.videoSrc;
        preloader.load();
      }
    }, 1200);
  }

  function showVideo(index, direction) {
    if (!playlist.length) return;
    current = (index + playlist.length) % playlist.length;
    var card = playlist[current];

    mVideo.src = card.dataset.videoSrc;
    mFill.style.width = '0%';
    mTime.textContent = '00:00';
    // Full-width Shop Now button in the popup is always shown.
    mShop.hidden = false;
    mShop.href = card.dataset.shopUrl || '#';
    mShop.textContent = card.dataset.shopLabel || 'Shop now';

    mVideo.classList.remove('ivc-in-next', 'ivc-in-prev');
    if (direction) {
      void mVideo.offsetWidth; // restart the slide-in animation
      mVideo.classList.add(direction > 0 ? 'ivc-in-next' : 'ivc-in-prev');
    }
    playCurrent();
    preloadNext();
  }

  function go(step) {
    if (playlist.length < 2 || !modal.classList.contains('is-open')) return;
    hideHint();
    showVideo(current + step, step);
  }

  function showHint() {
    if (playlist.length < 2 || !window.matchMedia('(hover: none)').matches) return;
    try { if (sessionStorage.getItem('ivcHintSeen')) return; sessionStorage.setItem('ivcHintSeen', '1'); } catch (err) {}
    mHint.classList.add('is-visible');
    hintTimer = setTimeout(hideHint, 3000);
  }
  function hideHint() {
    clearTimeout(hintTimer);
    mHint.classList.remove('is-visible');
  }

  function openModal(card) {
    if (!card.dataset.videoSrc) return;
    root.classList.add('is-paused');
    root.querySelectorAll('.ivc-preview').forEach(function (v) { v.pause(); });

    mVideo.muted = false;
    updateVolumeIcon();
    modal.classList.add('is-open');
    modal.setAttribute('aria-hidden', 'false');
    document.documentElement.style.overflow = 'hidden';
    showVideo(Number(card.dataset.ivcIndex) || 0, 0);
    showHint();
  }

  function closeModal() {
    if (!modal.classList.contains('is-open')) return;
    modal.classList.remove('is-open');
    modal.setAttribute('aria-hidden', 'true');
    document.documentElement.style.overflow = '';
    hideHint();
    clearTimeout(preloadTimer);
    if (preloader) { preloader.removeAttribute('src'); preloader.load(); }
    mVideo.pause();
    mVideo.removeAttribute('src');
    mVideo.load();
    mFill.style.width = '0%';
    mTime.textContent = '00:00';
    root.classList.remove('is-paused');
    root.querySelectorAll('.ivc-preview').forEach(function (v) { if (v.src) v.play().catch(function () {}); });
  }

  mVideo.addEventListener('timeupdate', function () {
    if (!mVideo.duration) return;
    mFill.style.width = (mVideo.currentTime / mVideo.duration) * 100 + '%';
    var m = Math.floor(mVideo.currentTime / 60);
    var s = Math.floor(mVideo.currentTime % 60);
    mTime.textContent = String(m).padStart(2, '0') + ':' + String(s).padStart(2, '0');
  });
  mBar.addEventListener('click', function (e) {
    var rect = mBar.getBoundingClientRect();
    if (mVideo.duration) mVideo.currentTime = ((e.clientX - rect.left) / rect.width) * mVideo.duration;
  });
  mVol.addEventListener('click', function () {
    mVideo.muted = !mVideo.muted;
    updateVolumeIcon();
  });
  mShop.addEventListener('click', function (e) {
    if (mShop.getAttribute('href') === '#') e.preventDefault();
  });
  modal.querySelector('[data-ivc-close]').addEventListener('click', closeModal);
  modal.addEventListener('click', function (e) { if (e.target === modal) closeModal(); });

  // Next / previous: buttons, keyboard, swipe, mouse wheel, and auto-next at the end.
  modal.querySelector('[data-ivc-prev]').addEventListener('click', function () { go(-1); });
  modal.querySelector('[data-ivc-next]').addEventListener('click', function () { go(1); });
  mVideo.addEventListener('ended', function () { if (autoNext) go(1); });

  document.addEventListener('keydown', function (e) {
    if (!modal.classList.contains('is-open')) return;
    if (e.key === 'Escape') closeModal();
    else if (e.key === 'ArrowDown' || e.key === 'ArrowRight') { e.preventDefault(); go(1); }
    else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') { e.preventDefault(); go(-1); }
  });

  var touchX = null;
  var touchY = null;
  mBox.addEventListener('touchstart', function (e) {
    touchX = e.touches[0].clientX;
    touchY = e.touches[0].clientY;
  }, { passive: true });
  mBox.addEventListener('touchend', function (e) {
    if (touchY === null) return;
    var dx = e.changedTouches[0].clientX - touchX;
    var dy = e.changedTouches[0].clientY - touchY;
    touchX = touchY = null;
    if (Math.abs(dy) > 50 && Math.abs(dy) > Math.abs(dx)) go(dy < 0 ? 1 : -1); // swipe up = next
    else if (Math.abs(dx) > 60 && Math.abs(dx) > Math.abs(dy)) go(dx < 0 ? 1 : -1); // swipe left = next
  }, { passive: true });

  var wheelLocked = false;
  modal.addEventListener('wheel', function (e) {
    e.preventDefault();
    if (wheelLocked || Math.abs(e.deltaY) < 15) return;
    wheelLocked = true;
    go(e.deltaY > 0 ? 1 : -1);
    setTimeout(function () { wheelLocked = false; }, 700);
  }, { passive: false });

  // Delegated so cloned cards work too.
  root.addEventListener('click', function (e) {
    if (e.target.closest('[data-ivc-shop]')) return; // Shop Now button navigates normally
    var card = e.target.closest('[data-ivc-video-card]');
    if (!card) return;
    e.preventDefault();
    openModal(card);
  });
  root.addEventListener('keydown', function (e) {
    if (e.key !== 'Enter' && e.key !== ' ') return;
    var card = e.target.closest('[data-ivc-video-card]');
    if (!card || e.target.closest('[data-ivc-shop]')) return;
    e.preventDefault();
    openModal(card);
  });

  /* ---------- Boot ---------- */
  lastWidth = root.clientWidth;
  build();
  requestAnimationFrame(tick);
  window.addEventListener('resize', onResize);

  // Theme editor: clean up when the section re-renders.
  document.addEventListener('shopify:section:unload', function (e) {
    if (e.detail && e.detail.sectionId === 'template--27918264434966__image_video_carousel_gX9J86') {
      alive = false;
      clearTimeout(idleTimer);
      closeModal();
      modal.remove();
      window.removeEventListener('resize', onResize);
    }
  });
})();

// --- Script 40 ---
{
      "@context": "https://schema.org",
      "@type": "ItemList",
      "name": "Featured Products",
      "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Striker",
              "url": "https:\/\/zerolifestyle.co\/products\/striker-earbuds"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "Orbit 2",
              "url": "https:\/\/zerolifestyle.co\/products\/orbit-2"
            },
            {
              "@type": "ListItem",
              "position": 3,
              "name": "Storm ®  by Zero",
              "url": "https:\/\/zerolifestyle.co\/products\/storm"
            }]
    }

// --- Script 41 ---
(function () {
    var root = document.getElementById('zpe-template--27918264434966__promise_expanding_yHyhUd');
    if (!root || root.dataset.zpeReady) return;
    root.dataset.zpeReady = '1';
    var panels = [].slice.call(root.querySelectorAll('.zpe__p'));
    var desktop = window.matchMedia('(min-width: 750px)');

    function open(n) {
      panels.forEach(function (p, i) {
        var on = i === n;
        p.classList.toggle('is-on', on);
        p.setAttribute('aria-expanded', String(on));
      });
    }

    panels.forEach(function (p, i) {
      p.addEventListener('mouseenter', function () { if (desktop.matches) open(i); });
      p.addEventListener('click', function (e) { if (!e.target.closest('a')) open(i); });
      p.addEventListener('keydown', function (e) {
        if (e.target !== p) return;
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); open(i); }
      });
    });

    /* theme editor: open the block being edited */
    root.addEventListener('shopify:block:select', function (e) {
      var i = panels.indexOf(e.target);
      if (i > -1) open(i);
    });
  })();

// --- Script 42 ---
function updateSelectedVariant(input) {
  if (!input) return;
  const variantId = input.getAttribute('data-variant-id');
  const form = input.closest('form');
  if (!form || !form.id) return;

  const variantSelector = document.getElementById(`VariantSelector-${form.id}`);
  if (variantSelector && variantId) {
    variantSelector.value = variantId;
  }
}

function applyActiveSwatchBorder(radioInput) {
  if (!radioInput || !radioInput.checked || !radioInput.classList.contains('color-swatch__radio')) return;

  const swatchLabel = radioInput.nextElementSibling;
  if (!swatchLabel || !swatchLabel.classList.contains('color-swatch__item')) return;

  // Already set for this swatch: skip the getComputedStyle, which forces a style recalc.
  if (swatchLabel.style.getPropertyValue('--swatch-active-border')) return;

  const backgroundColor = window.getComputedStyle(swatchLabel).backgroundColor;
  const borderColor = backgroundColor && backgroundColor !== 'rgba(0, 0, 0, 0)'
    ? backgroundColor
    : 'rgb(var(--text-color))';

  swatchLabel.style.setProperty('--swatch-active-border', borderColor);
}

function syncCollectionSwatchColorLabel(radio) {
  if (!radio || !radio.checked || !radio.classList.contains('color-swatch__radio')) return;
  const container = radio.closest('.product-item-meta');
  const colorValueSpan = container ? container.querySelector('.color-value') : null;
  // Only write when the name actually changes. Assigning textContent replaces the text node,
  // which is a childList mutation, so writing it unconditionally fed the observer below and
  // re-ran this every frame forever (~1000 DOM writes a second on the home page).
  if (colorValueSpan && colorValueSpan.textContent !== radio.value) {
    colorValueSpan.textContent = radio.value;
  }
}

document.addEventListener('change', function(event) {
  if (!event.target.matches('.color-swatch__radio')) return;
  // A new pick needs its own border colour, so drop the cached one before re-applying.
  var pickedLabel = event.target.nextElementSibling;
  if (pickedLabel) pickedLabel.style.removeProperty('--swatch-active-border');
  applyActiveSwatchBorder(event.target);
  syncCollectionSwatchColorLabel(event.target);
});

function refreshActiveSwatchBorders() {
  document.querySelectorAll('.color-swatch__radio:checked').forEach(function(radio) {
    applyActiveSwatchBorder(radio);
    syncCollectionSwatchColorLabel(radio);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  refreshActiveSwatchBorders();
});

let swatchRefreshRafId = null;

// Only cards arriving later (infinite scroll, quick view, section reloads) need a refresh.
// Text changes, sliders and timers elsewhere on the page are ignored.
function mutationAddsSwatches(mutations) {
  for (var i = 0; i < mutations.length; i++) {
    var added = mutations[i].addedNodes;
    for (var j = 0; j < added.length; j++) {
      var node = added[j];
      if (node.nodeType !== 1) continue;
      if (node.matches('.color-swatch__radio') || node.querySelector('.color-swatch__radio')) return true;
    }
  }
  return false;
}

const swatchObserver = new MutationObserver(function(mutations) {
  if (swatchRefreshRafId || !mutationAddsSwatches(mutations)) return;
  swatchRefreshRafId = requestAnimationFrame(function() {
    swatchRefreshRafId = null;
    refreshActiveSwatchBorders();
  });
});

swatchObserver.observe(document.body, { childList: true, subtree: true });

window.addEventListener('pagehide', function() {
  swatchObserver.disconnect();
  if (swatchRefreshRafId) {
    cancelAnimationFrame(swatchRefreshRafId);
    swatchRefreshRafId = null;
  }
}, { once: true });

// --- Script 43 ---
document.querySelectorAll('.tab-title').forEach(tab => {
  tab.addEventListener('click', function() {
    // Remove active class from all tabs
    document.querySelectorAll('.tab-title').forEach(item => {
      item.classList.remove('active');
    });
    
    // Add active class to the clicked tab
    this.classList.add('active');

    // Get the target section from data attribute
    const target = this.getAttribute('data-target');
    const targetElement = document.querySelector(target);
    
    if (targetElement) {
      // Offset for the sticky tab bar (+ sticky header) so the section starts below the pinned bar.
      const bar = document.querySelector('.product-overview-tab');
      const isMobileTabs = window.matchMedia('(max-width: 767px)').matches;
      const barH = (isMobileTabs && bar) ? bar.offsetHeight : 0;
      const rootStyle = getComputedStyle(document.documentElement);
      const headerOn = parseFloat(rootStyle.getPropertyValue('--enable-sticky-header')) || 0;
      const headerH = parseFloat(rootStyle.getPropertyValue('--header-height')) || 0;
      const offset = (headerOn ? headerH : 0) + barH + 8;

      // Calculate the position to scroll to
      const topPosition = targetElement.getBoundingClientRect().top + window.scrollY - offset;

      // Smooth scroll to the target section
      window.scrollTo({
        top: Math.max(0, topPosition),
        behavior: 'smooth'
      });
    }
  });
});

// --- Script 44 ---
(function () {
  const DAY_MS = 86_400_000;
  // Pakistan is UTC+5 with no DST, so anchoring to it keeps the reset on the
  // same instant for every visitor whatever their own timezone is.
  const PKT_OFFSET_MS = 5 * 3_600_000;
  const DEFAULT_RESET = { h: 23, min: 59 };

  var dayEls, hourEls, minuteEls, secondEls;
  function bindEls() {
    dayEls    = document.querySelectorAll(".daysad");
    hourEls   = document.querySelectorAll(".hoursad");
    minuteEls = document.querySelectorAll(".minutesad");
    secondEls = document.querySelectorAll(".secondsad");
  }
  bindEls();
  // Days is optional: the 24h loop hides that box, so gating on it here would
  // stop the whole countdown on every page that hides days. The theme editor keeps
  // running even with no timer yet, since a section with one can be added later.
  var inEditor = !!(window.Shopify && window.Shopify.designMode);
  if (!inEditor && (!hourEls.length || !minuteEls.length || !secondEls.length)) return;

  var yassBanner = document.querySelector('[id^="yass-banner-"]');
  var useYassLoop = false;
  var yassEndTime = { h: 23, min: 59 };

  function parseEndTime(str) {
    var m = /^(\d{1,2}):(\d{2})$/.exec(String(str || '').trim());
    if (!m) return { h: DEFAULT_RESET.h, min: DEFAULT_RESET.min };
    var h = parseInt(m[1], 10);
    var min = parseInt(m[2], 10);
    if (h > 23 || min > 59) return { h: DEFAULT_RESET.h, min: DEFAULT_RESET.min };
    return { h: h, min: min };
  }

  if (yassBanner) {
    var endTimeAttr = yassBanner.getAttribute('data-end-time');
    if (endTimeAttr) {
      useYassLoop = true;
      yassEndTime = parseEndTime(endTimeAttr);
    }
  }

  var resetTime, cycleMinutes, restartAtMinutes, endAt;
  function readConfig() {
  // From Theme settings > Sale Timer. Pages without the sale-timer snippet keep
  // the default 23:59 PKT reset.
  var saleTimerEl = document.querySelector('.zl-sale-timer[data-reset-time]');
  resetTime = saleTimerEl
    ? parseEndTime(saleTimerEl.getAttribute('data-reset-time'))
    : DEFAULT_RESET;

  // Optional short loop. Set above 0 and the countdown restarts every N minutes instead of
  // once a day, still anchored to the reset time so the cycle boundaries stay predictable.
  cycleMinutes = saleTimerEl
    ? parseInt(saleTimerEl.getAttribute('data-cycle-minutes'), 10)
    : 0;
  if (!(cycleMinutes > 0)) cycleMinutes = 0;

  // Optional floor, so the clock never drains to 00:00: it falls from the cycle length only
  // as far as this many minutes, then snaps back to the top.
  restartAtMinutes = saleTimerEl
    ? parseInt(saleTimerEl.getAttribute('data-restart-at-minutes'), 10)
    : 0;
  if (!(restartAtMinutes > 0) || restartAtMinutes >= cycleMinutes) restartAtMinutes = 0;

  // Fixed sale end (Sale CRO hero > Sale end date). DD-MM-YYYY (or YYYY-MM-DD) + HH:MM in
  // PKT. When set and valid it wins over every loop and counts down to 0, then stays at 0.
  endAt = null;
  var endDateEl = document.querySelector('.zl-sale-timer[data-end-date]');
  if (endDateEl) {
    var ds = String(endDateEl.getAttribute('data-end-date') || '').trim();
    var dm = /^(\d{1,2})[-\/.](\d{1,2})[-\/.](\d{4})$/.exec(ds);
    var dy = dm ? [+dm[3], +dm[2], +dm[1]] : null;
    if (!dy) {
      dm = /^(\d{4})[-\/.](\d{1,2})[-\/.](\d{1,2})$/.exec(ds);
      if (dm) dy = [+dm[1], +dm[2], +dm[3]];
    }
    if (dy && dy[1] >= 1 && dy[1] <= 12 && dy[2] >= 1 && dy[2] <= 31) {
      var et = parseEndTime(endDateEl.getAttribute('data-end-time'));
      endAt = Date.UTC(dy[0], dy[1] - 1, dy[2], et.h, et.min, 0) - PKT_OFFSET_MS;
    }
  }
  }
  readConfig();

  function getYassRemainingMs() {
    var now = new Date();
    var target = new Date(now.getFullYear(), now.getMonth(), now.getDate(), yassEndTime.h, yassEndTime.min, 0, 0);
    if (now >= target) target.setDate(target.getDate() + 1);
    var diff = target - now;
    return diff > 0 ? diff : DAY_MS;
  }

  function getDailyRemainingMs() {
    var now = Date.now();
    var pkt = new Date(now + PKT_OFFSET_MS);
    var target = Date.UTC(
      pkt.getUTCFullYear(), pkt.getUTCMonth(), pkt.getUTCDate(),
      resetTime.h, resetTime.min, 0
    ) - PKT_OFFSET_MS;
    if (target <= now) target += DAY_MS;
    return target - now;
  }

  // Short loop: today's reset time is the anchor, then the clock repeats every N minutes.
  // Stepping the anchor back a day keeps it in the past, so the modulo works before the
  // reset time has passed today as well.
  function getCycleRemainingMs() {
    var cycleMs = cycleMinutes * 60_000;
    // Modulo runs over the span between the top and the floor, which is what makes the clock
    // jump back up; the minuend stays cycleMs so it still starts at the full length. The
    // extra second lets the floor itself show for one tick before the jump.
    var spanMs = restartAtMinutes > 0 ? cycleMs - restartAtMinutes * 60_000 + 1000 : cycleMs;
    var now = Date.now();
    var pkt = new Date(now + PKT_OFFSET_MS);
    var anchor = Date.UTC(
      pkt.getUTCFullYear(), pkt.getUTCMonth(), pkt.getUTCDate(),
      resetTime.h, resetTime.min, 0
    ) - PKT_OFFSET_MS;
    if (anchor > now) anchor -= DAY_MS;
    var remaining = cycleMs - ((now - anchor) % spanMs);
    return remaining > 0 ? remaining : cycleMs;
  }

  function update() {
    var diff;
    if (endAt !== null) {
      diff = Math.max(0, endAt - Date.now());
    } else if (useYassLoop) {
      diff = getYassRemainingMs();
    } else if (cycleMinutes > 0) {
      diff = getCycleRemainingMs();
    } else {
      diff = getDailyRemainingMs();
    }

    var days    = Math.floor(diff / DAY_MS);
    var hours   = Math.floor((diff % DAY_MS) / 3_600_000);
    var minutes = Math.floor((diff % 3_600_000) / 60_000);
    var seconds = Math.floor((diff % 60_000) / 1000);

    write(days, hours, minutes, seconds);
  }

  function pad(n) { return String(n).padStart(2, "0"); }

  function setText(list, val, pulse) {
    list.forEach(function (el) {
      if (el.textContent === val) return;
      el.textContent = val;
      if (!pulse) return;
      el.classList.remove("zl-tick");
      void el.offsetWidth;
      el.classList.add("zl-tick");
    });
  }

  function write(d, h, m, s) {
    setText(dayEls, pad(d), false);
    setText(hourEls, pad(h), false);
    setText(minuteEls, pad(m), false);
    setText(secondEls, pad(s), true);
  }

  // Starts straight away: this script sits after every timer in the page, so the spans already
  // exist. Waiting for window load left the clock on 00:00:00 for 5-18s on mobile while the
  // banner and the ad pixels finished downloading, which reads as "sale over".
  function markLive() {
    document.querySelectorAll('.zl-sale-timer').forEach(function (el) { el.classList.add('is-live'); });
  }

  setInterval(update, 1000);
  update();
  markLive();

  // Theme editor only: a changed setting swaps the section's HTML, so pick up the new
  // boxes and settings (end date, Days box) straight away. These events never fire live.
  if (inEditor) {
    ['shopify:section:load', 'shopify:section:unload'].forEach(function (evt) {
      document.addEventListener(evt, function () {
        setTimeout(function () { bindEls(); readConfig(); update(); markLive(); }, 0);
      });
    });
  }
})();

// --- Script 45 ---
(function () {
    if (window.__zeroReadMoreBound) return;
    window.__zeroReadMoreBound = true;

    function labelEl(btn) {
      return btn.querySelector('#btnText, [data-read-more-text], .read-more-btn__text') || btn.querySelector('span:not(.arrow)');
    }

    function findContent(btn) {
      var scope = btn.closest('.container-fluid, .content-wrapper, .rte, .shopify-section') || btn.parentElement;
      var content = scope ? scope.querySelector('.content, #content') : null;
      // Fallback: nearest preceding .content sibling of the button (or its wrapper)
      if (!content) {
        var ref = btn.previousElementSibling;
        while (ref && !content) {
          content = ref.classList && ref.classList.contains('content') ? ref : (ref.querySelector ? ref.querySelector('.content, #content') : null);
          ref = ref.previousElementSibling;
        }
      }
      return content;
    }

    document.addEventListener('click', function (e) {
      var btn = e.target.closest ? e.target.closest('.read-more-btn') : null;
      if (!btn) return;

      var content = findContent(btn);
      if (!content) return;

      e.preventDefault();
      var expanded = content.classList.toggle('expanded');
      content.classList.toggle('collapsed', !expanded);

      var txt = labelEl(btn);
      if (txt) txt.textContent = expanded ? 'Read Less' : 'Read More';

      var arrow = btn.querySelector('.arrow');
      if (arrow) arrow.classList.toggle('rotated', expanded);

      btn.setAttribute('aria-expanded', expanded ? 'true' : 'false');
    });
  })();

// --- Script 46 ---
window.MyAliceCustomer ={ isLoggedIn: false };
        window.MyAliceConfig = { storeId: "zerolifestyle-co.myshopify.com", currency: "PKR" };

        (function() {
          var loaded = false;

          function loadMyAlice() {
            if (loaded) return;
            loaded = true;
            window.removeEventListener('scroll', loadMyAlice);
            if (window.MyAliceWebChat || document.getElementById('myAliceWebChat')) return;

            var mount = document.createElement('div');
            mount.id = 'myAliceWebChat';
            document.body.appendChild(mount);

            var script = document.createElement('script');
            script.async = true;
            script.src = 'https://livechat.myalice.ai/index.js';
            script.addEventListener('load', function() {
              MyAliceWebChat.init({
                selector: '#myAliceWebChat',
                platformId: '17550',
                primaryId: '35f1c382aec611eeb4e9067aeb505d2c',
                token: '9e1dec5564e2bc93157e898ac5d7284ca783a2896550159b'
              });
            });
            document.body.appendChild(script);
          }

          window.addEventListener('scroll', loadMyAlice, { passive: true });
        })();

// --- Script 47 ---
(function() {
        var STYLE_ID = 'zl-hide-myalice-welcome';

        function patch(frame) {
          var doc;
          try { doc = frame.contentDocument; } catch (e) { return; }
          if (!doc || !doc.head) return;

          if (!doc.getElementById(STYLE_ID)) {
            var style = doc.createElement('style');
            style.id = STYLE_ID;
            style.textContent = '[role="status"]{display:none!important}';
            doc.head.appendChild(style);
          }

          var close = doc.querySelector('[role="status"] > button');
          if (close) close.click();

          if (!frame.__zlObserved && doc.body) {
            frame.__zlObserved = true;
            new MutationObserver(function() {
              var btn = doc.querySelector('[role="status"] > button');
              if (btn) btn.click();
            }).observe(doc.body, { childList: true, subtree: true });
          }
        }

        function check() {
          var frame = document.querySelector('iframe[name="myalice-webchat-frame"]');
          if (!frame) return;
          if (!frame.__zlLoadBound) {
            frame.__zlLoadBound = true;
            frame.addEventListener('load', function() {
              frame.__zlObserved = false;
              patch(frame);
            });
          }
          patch(frame);
        }

        new MutationObserver(check).observe(document.body, { childList: true, subtree: true });
        check();
      })();

// --- Script 48 ---
(function () {
    if (!('IntersectionObserver' in window)) return;
    var SEL = '.pbz-feat, .pbz-stock, .pbb-defence, .infinite-product-list__spinner';
    var seen = new WeakSet();
    var io = new IntersectionObserver(function (entries) {
      for (var i = 0; i < entries.length; i++) {
        entries[i].target.classList.toggle('zl-anim-off', !entries[i].isIntersecting);
      }
    }, { rootMargin: '150px 0px' });

    function scan() {
      var els = document.querySelectorAll(SEL);
      for (var i = 0; i < els.length; i++) {
        if (!seen.has(els[i])) { seen.add(els[i]); io.observe(els[i]); }
      }
    }

    var queued = false;
    function queue() {
      if (queued) return;
      queued = true;
      setTimeout(function () { queued = false; scan(); }, 300);
    }

    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', scan);
    else scan();
    new MutationObserver(queue).observe(document.documentElement, { childList: true, subtree: true });
  })();