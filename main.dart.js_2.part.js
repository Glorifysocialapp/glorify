((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,C,A={axM:function axM(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},axN:function axN(){},axO:function axO(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},axL:function axL(){},Z9:function Z9(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},An:function An(d,e,f){var _=this
_.b=_.w=null
_.c=!1
_.v1$=d
_.cO$=e
_.ao$=f
_.a=null},XR:function XR(d,e,f,g,h,i,j){var _=this
_.dw=d
_.y1=e
_.y2=f
_.cw$=g
_.a9$=h
_.cJ$=i
_.b=_.dy=null
_.c=0
_.y=_.d=null
_.z=!0
_.Q=null
_.as=!1
_.at=null
_.ay=$
_.ch=j
_.CW=!1
_.cx=$
_.cy=!0
_.db=!1
_.dx=$},Fx:function Fx(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x){var _=this
_.rx=d
_.ry=e
_.db=f
_.c=g
_.d=h
_.e=i
_.f=j
_.r=k
_.w=l
_.x=m
_.y=n
_.z=o
_.Q=p
_.as=q
_.at=r
_.ax=s
_.ay=t
_.ch=u
_.CW=v
_.cx=w
_.a=x},Z8:function Z8(d,e,f){this.f=d
this.d=e
this.a=f}},D,E
B=c[0]
C=c[2]
A=a.updateHolder(c[10],A)
D=c[29]
E=c[22]
A.axM.prototype={
a9_(d){var x=this.c
return d.um(this.d,x,x)},
j(d){var x=this
return"SliverGridGeometry("+C.b.bl(B.c(["scrollOffset: "+B.m(x.a),"crossAxisOffset: "+B.m(x.b),"mainAxisExtent: "+B.m(x.c),"crossAxisExtent: "+B.m(x.d)],y.x),", ")+")"}}
A.axN.prototype={}
A.axO.prototype={
a9c(d){var x=this.b
if(x>0)return Math.max(0,this.a*C.d.l9(d/x)-1)
return 0},
amF(d){var x,w,v=this
if(v.f){x=v.c
w=v.e
return v.a*x-d-w-(x-w)}return d},
HW(d){var x=this,w=x.a,v=C.i.bB(d,w)
return new A.axM(C.i.iP(d,w)*x.b,x.amF(v*x.c),x.d,x.e)},
a36(d){var x
if(d===0)return 0
x=this.b
return x*(C.i.iP(d-1,this.a)+1)-(x-this.d)}}
A.axL.prototype={}
A.Z9.prototype={
RX(d){var x=this,w=x.c,v=x.a,u=Math.max(0,d.w-w*(v-1))/v,t=u/x.d
return new A.axO(v,t+x.b,u+w,t,u,B.CT(d.x))}}
A.An.prototype={
j(d){return"crossAxisOffset="+B.m(this.w)+"; "+this.aem(0)}}
A.XR.prototype={
eK(d){if(!(d.b instanceof A.An))d.b=new A.An(!1,null,null)},
sa9w(d){var x,w,v=this
if(v.dw===d)return
x=!0
if(B.x(d)===B.x(v.dw)){w=v.dw
if(w.a===d.a)if(w.b===d.b)if(w.c===d.c)x=w.d!==d.d}if(x)v.a3()
v.dw=d},
uz(d){var x=d.b
x.toString
x=y.t.a(x).w
x.toString
return x},
bi(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6=this,a7=null,a8=y.z.a(B.v.prototype.gV.call(a6)),a9=a6.y1
a9.R8=!1
x=a8.d
w=x+a8.z
v=w+a8.Q
u=a6.dw.RX(a8)
t=u.b
s=t>1e-10?u.a*C.d.iP(w,t):0
r=isFinite(v)?u.a9c(v):a7
if(a6.a9$!=null){q=a6.a2F(s)
a6.qQ(q,r!=null?a6.a2G(r):0)}else a6.qQ(0,0)
p=u.HW(s)
if(a6.a9$==null)if(!a6.N3(s,p.a)){o=u.a36(a9.guy())
a6.dy=B.j0(a7,!1,a7,a7,o,0,0,0,o,a7)
a9.qZ()
return}n=p.a
m=n+p.c
t=a6.a9$
t.toString
t=t.b
t.toString
l=y.c
t=l.a(t).b
t.toString
k=t-1
t=y.t
j=a7
for(;k>=s;--k){i=u.HW(k)
h=i.c
g=a6.a5C(a8.um(i.d,h,h))
f=g.b
f.toString
t.a(f)
e=i.a
f.a=e
f.w=i.b
if(j==null)j=g
m=Math.max(m,e+h)}if(j==null){h=a6.a9$
h.toString
h.hf(p.a9_(a8))
j=a6.a9$
h=j.b
h.toString
t.a(h)
h.a=n
h.w=p.b}h=j.b
h.toString
h=l.a(h).b
h.toString
k=h+1
h=B.p(a6).i("aj.1")
f=r!=null
while(!0){if(!(!f||k<=r)){d=!1
break}i=u.HW(k)
e=i.c
a0=a8.um(i.d,e,e)
a1=j.b
a1.toString
g=h.a(a1).ao$
if(g!=null){a1=g.b
a1.toString
a1=l.a(a1).b
a1.toString
a1=a1!==k}else a1=!0
if(a1){g=a6.a5A(a0,j)
if(g==null){d=!0
break}}else g.hf(a0)
a1=g.b
a1.toString
t.a(a1)
a2=i.a
a1.a=a2
a1.w=i.b
m=Math.max(m,a2+e);++k
j=g}t=a6.cJ$
t.toString
t=t.b
t.toString
t=l.a(t).b
t.toString
a3=d?m:a9.P1(a8,s,t,n,m)
a4=a6.ut(a8,Math.min(x,n),m)
a5=a6.yf(a8,n,m)
a6.dy=B.j0(a5,a3>a4||x>0||a8.f!==0,a7,a7,a3,0,a4,0,a3,a7)
if(a3===m)a9.R8=!0
a9.qZ()}}
A.Fx.prototype={
a2u(d){return new A.Z8(this.rx,this.ry,null)}}
A.Z8.prototype={
aI(d){var x=new A.XR(this.f,y.v.a(d),B.D(y.e,y.g),0,null,null,B.an(y.d))
x.aH()
return x},
aN(d,e){e.sa9w(this.f)},
P0(d,e,f,g,h){var x
this.aen(d,e,f,g,h)
x=this.f.RX(d).a36(this.d.guT())
return x}}
var z=a.updateTypes([]);(function inheritance(){var x=a.inheritMany,w=a.inherit
x(B.J,[A.axM,A.axN,A.axL])
w(A.axO,A.axN)
w(A.Z9,A.axL)
w(A.An,B.fc)
w(A.XR,B.lA)
w(A.Fx,E.DM)
w(A.Z8,B.lE)})()
B.h_(b.typeUniverse,JSON.parse('{"An":{"fc":[],"mZ":[],"e9":["E"],"lj":[],"dj":[]},"XR":{"lA":[],"ct":[],"aj":["E","fc"],"v":[],"au":[],"aj.1":"fc","aj.0":"E"},"Fx":{"af":[],"h":[]},"Z8":{"lE":[],"av":[],"h":[]}}'))
var y={d:B.a0("dy"),x:B.a0("r<k>"),g:B.a0("E"),z:B.a0("jQ"),t:B.a0("An"),v:B.a0("ra"),c:B.a0("fc"),e:B.a0("d")};(function constants(){D.u2=new B.ap(0,0,0,8)
D.uG=new B.be(58442,"MaterialIcons",!1)})()};
(a=>{a["y38pR9gIs58cpJ0y8cFHrqbIwtw="]=a.current})($__dart_deferred_initializers__);