function xBb(){}
function mBb(a,b,c){FL.call(this,a,b,c,(ljb(),kjb))}
function GBb(a){var b;if(!a.g){b=new vBb(new xBb);a.g=b}return a.g}
function FBb(a){var b;if(!a.f){b=new mBb(OK(jM(a.a)),GBb(a),EBb(a));eL((kM(a.a),b),wM(kM(a.a)));a.f=b}return a.f}
function vBb(){var a,b,c,d,e,f,g,i,j,k,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C;ZL(this,(a=new a1,xX(a,(b=new e0,b.a='Project Setup',d0(b),b.b='basic setup and using custom themes',d0(b),b)),xX(a,(c=new g0,xX(c,(d=new o0,n0(d,(o=new $Z(3),fg(o.q,oLb),o)),d)),xX(c,(e=new j0,xX(e,(p=new N$,M$(p,(q=new pR,Df(q.a,'For the basic setup just inherit the basic GwtBootstrap3 module into your *.gwt.xml.'),new SC(Gf(q.a))).a),p)),xX(e,(r=new T0,S0(r,(s=new pR,Df(s.a,'&lt;module&gt;\\n \\s\\s&lt;inherits name="org.gwtbootstrap3.GwtBootstrap3"/&gt;\\n &lt;/module&gt;\\n'),new SC(Gf(s.a))).a),MG(r.q,rLb,true),MG(r.q,sLb,true),r)),e)),c)),xX(a,(f=new g0,xX(f,(g=new o0,n0(g,(t=new $Z(3),fg(t.q,'Bootstrap2 Look-a-like Setup'),t)),g)),xX(f,(i=new j0,xX(i,(u=new N$,M$(u,(v=new pR,Df(v.a,'For the setup with a Bootstrap2 look-a-like theme inherit the GwtBootstrap3Theme into your *.gwt.xml.'),new SC(Gf(v.a))).a),u)),xX(i,(w=new T0,S0(w,(x=new pR,Df(x.a,'&lt;module&gt;\\n \\s\\s&lt;inherits name="org.gwtbootstrap3.GwtBootstrap3Theme"/&gt;\\n &lt;/module&gt;\\n'),new SC(Gf(x.a))).a),MG(w.q,rLb,true),MG(w.q,sLb,true),w)),i)),f)),xX(a,(j=new g0,xX(j,(k=new o0,n0(k,(y=new $Z(3),fg(y.q,'Custom Theme'),y)),k)),xX(j,(n=new j0,xX(n,(z=new N$,M$(z,(A=new pR,Df(A.a,'1. For the setup with a custom theme inherit the GwtBootstrap3 your *.gwt.xml. <br> 2. Next, download the theme that you wish to use. <br> 3. Then, place the CSS/JS files from the theme either in your public folder or a resource folder. <br> 4. If you use a resource folder, link the resource folder as public path in your *.gwt.xml. <br> 5. Link the CSS/JS files into your *.gwt.xml AFTER the GwtBootstrap3 inherit. <br> <br> ** Since your CSS files are linked last onto the page they will be the priority stylesheet and take priority over the others, giving you the custom theme.'),new SC(Gf(A.a))).a),z)),xX(n,(B=new T0,S0(B,(C=new pR,Df(C.a,"&lt;module&gt;\\n \\s\\s&lt;inherits name=\"org.gwtbootstrap3.GwtBootstrap3\"/&gt;\\n\\n \\s\\s&lt;public path='resource'&gt;\\n \\s\\s\\s\\s&lt;include name='css/*.css'/&gt;\\n \\s\\s\\s\\s&lt;include name='js/*.js'/&gt;\\n \\s\\s&lt;/public&gt;\\n\\n \\s\\s&lt;stylesheet src='css/theme.css'/&gt;\\n \\s\\s&lt;script src='js/theme.js'/&gt;\\n &lt;/module&gt;\\n"),new SC(Gf(C.a))).a),MG(B.q,rLb,true),MG(B.q,sLb,true),B)),n)),j)),a))}
kC(874,250,yGb,mBb);kC(877,255,zGb,vBb);kC(878,1,{},xBb);kC(885,1,OGb);_.nb=function WBb(){AN(this.b,FBb(this.a.a))};var Az=mQ(OKb,'SetupPresenter',874),Cz=mQ(OKb,'SetupView',877),Bz=mQ(OKb,'SetupView_BinderImpl',878);SGb(ke)(32);