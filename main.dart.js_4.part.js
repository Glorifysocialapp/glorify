((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var A,C,B={
o0(d,e,f,g){var x=null
return new B.a2A(f,x,x,x,g,C.n,x,!1,x,!0,x,new B.a2B(e,d,g,x,x),x)},
a2A:function a2A(d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.z=l
_.Q=m
_.at=n
_.ax=o
_.a=p},
a2B:function a2B(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bcg(d){var x
switch(d.M(y.o).w.a){case 0:x=D.ase
break
case 1:x=C.j
break
default:x=null}return x},
b_N(d){var x=d.cy,w=A.a5(x)
return new A.h9(new A.b5(x,new B.agf(),w.i("b5<1>")),new B.agg(),w.i("h9<1,N>"))},
bcf(d,e){var x,w,v,u,t=C.b.ga6(d),s=B.b_M(e,t)
for(x=d.length,w=0;w<d.length;d.length===x||(0,A.R)(d),++w){v=d[w]
u=B.b_M(e,v)
if(u<s){s=u
t=v}}return t},
b_M(d,e){var x,w,v=d.a,u=e.a
if(v<u){x=d.b
w=e.b
if(x<w)return d.a8(0,new A.l(u,w)).gcI()
else{w=e.d
if(x>w)return d.a8(0,new A.l(u,w)).gcI()
else return u-v}}else{u=e.c
if(v>u){x=d.b
w=e.b
if(x<w)return d.a8(0,new A.l(u,w)).gcI()
else{w=e.d
if(x>w)return d.a8(0,new A.l(u,w)).gcI()
else return v-u}}else{v=d.b
u=e.b
if(v<u)return u-v
else{u=e.d
if(v>u)return v-u
else return 0}}}},
b_O(d,e){var x,w,v,u,t,s,r,q,p,o,n,m=y.j,l=A.c([d],m)
for(x=e.gal(e);x.v();l=v){w=x.gR(x)
v=A.c([],m)
for(u=l.length,t=w.a,s=w.b,r=w.d,w=w.c,q=0;q<l.length;l.length===u||(0,A.R)(l),++q){p=l[q]
o=p.b
if(o>=s&&p.d<=r){n=p.a
if(n<t)v.push(new A.N(n,o,n+(t-n),o+(p.d-o)))
n=p.c
if(n>w)v.push(new A.N(w,o,w+(n-w),o+(p.d-o)))}else{n=p.a
if(n>=t&&p.c<=w){if(o<s)v.push(new A.N(n,o,n+(p.c-n),o+(s-o)))
o=p.d
if(o>r)v.push(new A.N(n,r,n+(p.c-n),r+(o-r)))}else v.push(p)}}}return l},
bce(d,e){var x=d.a,w=!1
if(x>=0)if(x<=e.a){w=d.b
w=w>=0&&w<=e.b}if(w)return d
else return new A.l(Math.min(Math.max(0,x),e.a),Math.min(Math.max(0,d.b),e.b))},
EH:function EH(d,e,f){this.c=d
this.d=e
this.a=f},
agf:function agf(){},
agg:function agg(){},
qL:function qL(){}},D,E,F
A=c[0]
C=c[2]
B=a.updateHolder(c[21],B)
D=c[24]
E=c[45]
F=c[30]
B.a2A.prototype={
m0(d){var x,w,v,u
A.o(d)
x=this.acp(d)
w=x.gh1()
if(w==null)v=null
else{w=w.X(C.du)
w=w==null?null:w.r
v=w}if(v==null)v=14
w=A.c6(d,C.bt)
w=w==null?null:w.gcS()
u=A.DP(F.hE,E.u_,E.tZ,(w==null?C.aI:w).aW(0,v)/14)
return x.qR(new A.b7(u,y.l))}}
B.a2B.prototype={
G(d){var x,w=null,v=this.e,u=w
if(v==null)x=u
else{v=v.a
if(v==null)v=u
else{v=v.X(C.du)
v=v==null?w:v.r}x=v}if(x==null)x=14
v=A.c6(d,C.bt)
v=v==null?w:v.gcS()
v=A.L((v==null?C.aI:v).aW(0,x)/14,1,2)
A.b06(d)
v=A.a4(8,4,v-1)
v.toString
u=A.c([this.d,new A.jq(1,C.de,this.c,w)],y.e)
return A.cL(u,C.w,C.q,C.aF,v,w)}}
B.EH.prototype={
G(d){var x=A.bM(d,null,y.h).w,w=x.a,v=w.a,u=w.b,t=B.bcg(d),s=B.bce(t,w),r=B.bcf(B.b_O(new A.N(0,0,0+v,0+u),B.b_N(x)),s)
return new A.aY(new A.ap(r.a,r.b,v-r.c,u-r.d),A.uZ(this.d,x.aKX(r)),null)}}
B.qL.prototype={
gme(){return!1},
gpk(){return!0},
gqK(){return!1}}
var z=a.updateTypes([])
B.agf.prototype={
$1(d){var x=d.gur(d).gfR().aMH(0,0)
if(!x)d.gSZ(d)
return x},
$S:191}
B.agg.prototype={
$1(d){return d.gur(d)},
$S:663};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.a2A,A.yj)
w(A.af,[B.a2B,B.EH])
w(A.e7,[B.agf,B.agg])
x(B.qL,A.da)})()
A.h_(b.typeUniverse,JSON.parse('{"a2A":{"V":[],"h":[]},"a2B":{"af":[],"h":[]},"EH":{"af":[],"h":[]},"qL":{"da":["1"],"ei":["1"],"cK":["1"]}}'))
A.x3(b.typeUniverse,JSON.parse('{"qL":1}'))
var y={o:A.a0("fp"),j:A.a0("r<N>"),e:A.a0("r<h>"),h:A.a0("fP"),l:A.a0("b7<d8>")};(function constants(){D.hF=new A.ap(0,0,0,12)
D.ase=new A.l(17976931348623157e292,0)
D.cE=new A.dR(8,null,null,null)
D.bN=new A.dR(null,8,null,null)})()};
(a=>{a["z6FQQ4pfRwG7OVoYlTFvXT2jwd0="]=a.current})($__dart_deferred_initializers__);