function U7b(){}
function J7b(a,b,c){Wbb.call(this,a,b,c,(ZPb(),YPb))}
function b8b(a){var b;if(!a.g){b=new S7b(new U7b);a.g=b}return a.g}
function a8b(a){var b;if(!a.f){b=new J7b(dbb(Acb(a.a)),b8b(a),_7b(a));vbb((Bcb(a.a),b),Mcb(Bcb(a.a)));a.f=b}return a.f}
function S7b(){var a,b,c,d,e,f,g,i,j,k,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C;ocb(this,(a=new swb,Hpb(a,(b=new mvb,b.a='Project Setup',lvb(b),b.b='basic setup and using custom themes',lvb(b),b)),Hpb(a,(c=new uvb,Hpb(c,(d=new Gvb,Fvb(d,(o=new _sb(3),Bwb(o.c,Jjc),o)),d)),Hpb(c,(e=new xvb,Hpb(e,(p=new Otb,Ntb(p,(q=new Aib,Jj(q.a,'For the basic setup just inherit the basic GwtBootstrap3 module into your *.gwt.xml.'),new oR(Oj(q.a))).a),p)),Hpb(e,(r=new jwb,iwb(r,(s=new Aib,Jj(s.a,'&lt;module&gt;\\n \\s\\s&lt;inherits name="org.gwtbootstrap3.GwtBootstrap3"/&gt;\\n &lt;/module&gt;\\n'),new oR(Oj(s.a))).a),KT(r._,Mjc,true),KT(r._,Njc,true),r)),e)),c)),Hpb(a,(f=new uvb,Hpb(f,(g=new Gvb,Fvb(g,(t=new _sb(3),Bwb(t.c,'Bootstrap2 Look-a-like Setup'),t)),g)),Hpb(f,(i=new xvb,Hpb(i,(u=new Otb,Ntb(u,(v=new Aib,Jj(v.a,'For the setup with a Bootstrap2 look-a-like theme inherit the GwtBootstrap3Theme into your *.gwt.xml.'),new oR(Oj(v.a))).a),u)),Hpb(i,(w=new jwb,iwb(w,(x=new Aib,Jj(x.a,'&lt;module&gt;\\n \\s\\s&lt;inherits name="org.gwtbootstrap3.GwtBootstrap3Theme"/&gt;\\n &lt;/module&gt;\\n'),new oR(Oj(x.a))).a),KT(w._,Mjc,true),KT(w._,Njc,true),w)),i)),f)),Hpb(a,(j=new uvb,Hpb(j,(k=new Gvb,Fvb(k,(y=new _sb(3),Bwb(y.c,'Custom Theme'),y)),k)),Hpb(j,(n=new xvb,Hpb(n,(z=new Otb,Ntb(z,(A=new Aib,Jj(A.a,'1. For the setup with a custom theme inherit the GwtBootstrap3 your *.gwt.xml. <br> 2. Next, download the theme that you wish to use. <br> 3. Then, place the CSS/JS files from the theme either in your public folder or a resource folder. <br> 4. If you use a resource folder, link the resource folder as public path in your *.gwt.xml. <br> 5. Link the CSS/JS files into your *.gwt.xml AFTER the GwtBootstrap3 inherit. <br> <br> ** Since your CSS files are linked last onto the page they will be the priority stylesheet and take priority over the others, giving you the custom theme.'),new oR(Oj(A.a))).a),z)),Hpb(n,(B=new jwb,iwb(B,(C=new Aib,Jj(C.a,"&lt;module&gt;\\n \\s\\s&lt;inherits name=\"org.gwtbootstrap3.GwtBootstrap3\"/&gt;\\n\\n \\s\\s&lt;public path='resource'&gt;\\n \\s\\s\\s\\s&lt;include name='css/*.css'/&gt;\\n \\s\\s\\s\\s&lt;include name='js/*.js'/&gt;\\n \\s\\s&lt;/public&gt;\\n\\n \\s\\s&lt;stylesheet src='css/theme.css'/&gt;\\n \\s\\s&lt;script src='js/theme.js'/&gt;\\n &lt;/module&gt;\\n"),new oR(Oj(C.a))).a),KT(B._,Mjc,true),KT(B._,Njc,true),B)),n)),j)),a))}
fQ(1206,518,rec,J7b);fQ(1209,523,sec,S7b);fQ(1210,1,{},U7b);fQ(1217,1,Lec);_.vb=function r8b(){deb(this.b,a8b(this.a.a))};var $M=Xgb(djc,'SetupPresenter',1206),aN=Xgb(djc,'SetupView',1209),_M=Xgb(djc,'SetupView_BinderImpl',1210);Pec(qi)(33);