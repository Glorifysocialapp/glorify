((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
nS(d,e,f,g){return new B.RS(f,d,e,g,null)},
RS:function RS(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.f=f
_.y=g
_.a=h},
bkS(){return new b.G.XMLHttpRequest()},
bkV(){return b.G.document.createElement("img")},
b3P(d,e,f){var w=new B.a36(d,A.c([],x.v),A.c([],x.l),A.c([],x.u))
w.ah5(d,e,f)
return w},
hD:function hD(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ar9:function ar9(d,e,f){this.a=d
this.b=e
this.c=f},
ara:function ara(d,e){this.a=d
this.b=e},
ar7:function ar7(d,e,f){this.a=d
this.b=e
this.c=f},
ar8:function ar8(d,e,f){this.a=d
this.b=e
this.c=f},
a36:function a36(d,e,f,g){var _=this
_.y=d
_.z=!1
_.Q=$
_.as=!1
_.at=$
_.a=e
_.b=f
_.e=_.d=_.c=null
_.f=!1
_.r=0
_.w=!1
_.x=g},
aHc:function aHc(d){this.a=d},
aHd:function aHd(d,e){this.a=d
this.b=e},
aHe:function aHe(d){this.a=d},
aHf:function aHf(d){this.a=d},
aHg:function aHg(d){this.a=d},
wq:function wq(d,e){this.a=d
this.b=e},
b5B(d,e,f){var w,v,u,t,s,r,q=e.b
if(q<=0||e.a<=0||f.b<=0||f.a<=0)return D.S4
switch(d.a){case 0:w=f
v=e
break
case 1:u=f.a
t=f.b
s=e.a
w=u/t>s/q?new A.H(s*t/q,t):new A.H(u,q*u/s)
v=e
break
case 2:u=f.a
t=f.b
s=e.a
v=u/t>s/q?new A.H(s,s*t/u):new A.H(q*u/t,q)
w=f
break
case 3:u=f.a
t=f.b
s=e.a
if(u/t>s/q){v=new A.H(s,s*t/u)
w=f}else{w=new A.H(u,q*u/s)
v=e}break
case 4:u=f.a
t=f.b
s=e.a
if(u/t>s/q){w=new A.H(s*t/q,t)
v=e}else{v=new A.H(q*u/t,q)
w=f}break
case 5:v=new A.H(Math.min(e.a,f.a),Math.min(q,f.b))
w=v
break
case 6:r=e.a/q
u=f.b
w=q>u?new A.H(u*r,u):e
q=f.a
if(w.a>q)w=new A.H(q,q/r)
v=e
break
default:v=null
w=null}return new B.TC(v,w)},
DJ:function DJ(d,e){this.a=d
this.b=e},
TC:function TC(d,e){this.a=d
this.b=e},
bbY(d,e,f){return new B.y8(e,f,d)},
b6l(a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
if(b3.gai(0))return
w=b3.a
v=b3.c-w
u=b3.b
t=b3.d-u
s=new A.H(v,t)
r=a9.b
r===$&&A.b()
r=r.a
r===$&&A.b()
r=J.aC(r.a.width())
q=a9.b.a
q===$&&A.b()
q=J.aC(q.a.height())
if(a7==null)a7=D.m6
p=B.b5B(a7,new A.H(r,q).dN(0,b5),s)
o=p.a.ab(0,b5)
n=p.b
if(b4!==D.dg&&n.k(0,s))b4=D.dg
$.ar()
m=A.bs()
m.f=!1
if(a4!=null)m.suE(a4)
m.r=A.b_h(0,0,0,A.L(b2,0,1)).gq(0)
m.Q=a6
m.spg(b0)
m.a=a1
l=n.a
k=(v-l)/2
j=n.b
i=(t-j)/2
t=a0.a
t=w+(k+(a8?-t:t)*k)
u+=i+a0.b*i
h=new A.N(t,u,t+l,u+j)
g=b4!==D.dg||a8
if(g)J.aC(a2.a.a.save())
u=b4===D.dg
if(!u)a2.a.a.clipRect(A.dT(b3),$.pB()[1],!0)
if(a8){f=-(w+v/2)
w=a2.a.a
w.translate(-f,0)
w.scale(-1,1)
w.translate(f,0)}e=a0.aGC(o,new A.N(0,0,r,q))
if(u)a2.a.yS(a9,e,h,m)
else for(w=B.bkC(b3,h,b4),v=w.length,u=a2.a,d=0;d<w.length;w.length===v||(0,A.R)(w),++d)u.yS(a9,e,w[d],m)
if(g)a2.a.a.restore()},
bkC(d,e,f){var w,v,u,t,s,r,q=e.c,p=e.a,o=q-p,n=e.d,m=e.b,l=n-m,k=f!==D.TB
if(!k||f===D.TC){w=C.d.eP((d.a-p)/o)
v=C.d.l9((d.c-q)/o)}else{w=0
v=0}if(!k||f===D.TD){u=C.d.eP((d.b-m)/l)
t=C.d.l9((d.d-n)/l)}else{u=0
t=0}q=A.c([],x.T)
for(s=w;s<=v;++s)for(p=s*o,r=u;r<=t;++r)q.push(e.dA(new A.l(p,r*l)))
return q},
yJ:function yJ(d,e){this.a=d
this.b=e},
y8:function y8(d,e,f){this.a=d
this.b=e
this.d=f},
a1J:function a1J(d,e){var _=this
_.a=d
_.b=e
_.d=_.c=null},
b3y(){return new B.Kj(A.c([],x.v),A.c([],x.l),A.c([],x.u))},
beR(d,e){return new B.zl("HTTP request failed, statusCode: "+d+", "+e.j(0))},
fM:function fM(){},
alt:function alt(d,e,f){this.a=d
this.b=e
this.c=f},
alu:function alu(d,e){this.a=d
this.b=e},
alq:function alq(d,e){this.a=d
this.b=e},
alp:function alp(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
alr:function alr(d){this.a=d},
als:function als(d,e){this.a=d
this.b=e},
Kj:function Kj(d,e,f){var _=this
_.a=d
_.b=e
_.e=_.d=_.c=null
_.f=!1
_.r=0
_.w=!1
_.x=f},
aB4:function aB4(d,e){this.a=d
this.b=e},
mJ:function mJ(d,e){this.a=d
this.b=e},
a2F:function a2F(d,e,f){var _=this
_.a=d
_.b=e
_.e=_.d=_.c=null
_.f=!1
_.r=0
_.w=!1
_.x=f},
zl:function zl(d){this.b=d},
beX(d,e){var w=new B.Wh(A.c([],x.v),A.c([],x.l),A.c([],x.u))
w.agT(d,e)
return w},
VT(d,e,f,g){var w=new B.GH(g,f,A.c([],x.v),A.c([],x.l),A.c([],x.u))
w.agS(null,d,e,f,g)
return w},
f7:function f7(d,e,f){this.a=d
this.b=e
this.c=f},
alA:function alA(){this.b=this.a=null},
Uy:function Uy(d){this.a=d},
h8:function h8(){},
alB:function alB(){},
alC:function alC(){},
Wh:function Wh(d,e,f){var _=this
_.a=d
_.b=e
_.e=_.d=_.c=null
_.f=!1
_.r=0
_.w=!1
_.x=f},
arE:function arE(d,e){this.a=d
this.b=e},
GH:function GH(d,e,f,g,h){var _=this
_.z=_.y=null
_.Q=d
_.as=e
_.at=null
_.ax=$
_.ay=null
_.ch=0
_.CW=null
_.cx=!1
_.a=f
_.b=g
_.e=_.d=_.c=null
_.f=!1
_.r=0
_.w=!1
_.x=h},
aqH:function aqH(d,e){this.a=d
this.b=e},
aqG:function aqG(d){this.a=d},
a3r:function a3r(){},
a3q:function a3q(){},
bep(d){return new A.eQ(new B.apZ(d),null)},
apZ:function apZ(d){this.a=d}},D
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[17],B)
D=c[25]
B.RS.prototype={
garX(){var w=this.y
if(w==null)return 40
return 2*(w==null?0:w)},
garI(){var w=this.y
if(w==null)return 40
return 2*(w==null?1/0:w)},
G(d){var w,v,u,t,s,r,q=this,p=null,o=A.o(d),n=p,m=o.ax,l=m.e
m=l==null?m.c:l
n=m
w=o.ok.w.b0(n)
v=q.d
if(v==null){m=o.ax
l=m.d
m=l==null?m.b:l
u=m}else u=v
if(u==null){m=w.b
m.toString
switch(A.JI(m).a){case 0:m=o.fr
break
case 1:m=o.dy
break
default:m=p}v=m}else{if(n==null){v.toString
switch(A.JI(v).a){case 0:m=w.b0(o.fr)
break
case 1:m=w.b0(o.dy)
break
default:m=p}w=m}v=u}t=q.garX()
s=q.garI()
m=q.f
m=m!=null?B.bbY(D.m5,m,p):p
l=q.c
if(l==null)l=p
else{r=o.k2.b0(w.b)
r=A.cD(B.bep(A.mw(A.iE(l,p,p,C.bZ,!0,w,p,p,C.aH),r,p)),p,p)
l=r}return A.QR(l,new A.ab(t,s,t,s),new A.bH(v,m,p,p,p,p,C.j_),C.N,p,p,p)}}
B.hD.prototype={
A7(d){return new A.dF(this,x.i)},
vi(d,e){return B.b3P(this.wr(d,e),d.a,null)},
vj(d,e){return B.b3P(this.wr(d,e),d.a,null)},
wr(d,e){return this.arp(d,e)},
arp(d,e){var w=0,v=A.B(x.R),u,t=2,s=[],r=this,q,p,o,n,m
var $async$wr=A.w(function(f,g){if(f===1){s.push(g)
w=t}while(true)switch(w){case 0:o=new B.ar9(r,e,d)
n=new B.ara(r,d)
case 3:switch(r.d.a){case 0:w=5
break
case 2:w=6
break
case 1:w=7
break
default:w=4
break}break
case 5:u=o.$0()
w=1
break
case 6:u=n.$0()
w=1
break
case 7:t=9
w=12
return A.q(o.$0(),$async$wr)
case 12:q=g
u=q
w=1
break
t=2
w=11
break
case 9:t=8
m=s.pop()
q=n.$0()
u=q
w=1
break
w=11
break
case 8:w=2
break
case 11:w=4
break
case 4:case 1:return A.z(u,v)
case 2:return A.y(s.at(-1),v)}})
return A.A($async$wr,v)},
wT(d){var w=0,v=A.B(x.p),u,t=this,s,r,q,p,o,n,m
var $async$wT=A.w(function(e,f){if(e===1)return A.y(f,v)
while(true)switch(w){case 0:r=t.a
q=A.aAp().X(r)
p=new A.a3($.ae,x.Z)
o=new A.aG(p,x.x)
n=B.bkS()
n.open("GET",r,!0)
n.responseType="arraybuffer"
n.addEventListener("load",A.eM(new B.ar7(n,o,q)))
n.addEventListener("error",A.eM(new B.ar8(o,n,q)))
n.send()
w=3
return A.q(p,$async$wT)
case 3:r=n.response
r.toString
s=A.VZ(x.a.a(r),0,null)
if(s.byteLength===0)throw A.i(B.beR(A.U(n,"status"),q))
m=d
w=4
return A.q(A.UA(s),$async$wT)
case 4:u=m.$1(f)
w=1
break
case 1:return A.z(u,v)}})
return A.A($async$wT,v)},
k(d,e){if(e==null)return!1
if(J.a2(e)!==A.x(this))return!1
return e instanceof B.hD&&e.a===this.a&&e.b===this.b},
gC(d){return A.a_(this.a,this.b,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a)},
j(d){return'NetworkImage("'+this.a+'", scale: '+C.i.ap(this.b,1)+")"}}
B.a36.prototype={
ah5(d,e,f){var w=this
w.e=e
w.y.ff(new B.aHc(w),new B.aHd(w,f),x.P)},
ga6k(d){var w=this,v=w.at
return v===$?w.at=new A.f8(new B.aHe(w),new B.aHf(w),new B.aHg(w)):v},
Qt(){var w,v=this
if(v.z){w=v.Q
w===$&&A.b()
w.I(0,v.ga6k(0))}v.as=!0
v.acD()}}
B.wq.prototype={
NQ(d){return new B.wq(this.a,this.b)},
l(){},
gd9(d){return A.a1(A.aq("Could not create image data for this image because access to it is restricted by the Same-Origin Policy.\nSee https://developer.mozilla.org/en-US/docs/Web/Security/Same-origin_policy"))},
zE(d){if(!(d instanceof B.wq))return!1
return J.f(d.a,this.a)&&d.b===this.b},
gd5(d){return 1},
gSO(){var w=this.a
return C.d.fp(4*w.naturalWidth*w.naturalHeight)},
$if7:1,
gjM(){return this.b}}
B.DJ.prototype={
K(){return"BoxFit."+this.b}}
B.TC.prototype={}
B.yJ.prototype={
K(){return"ImageRepeat."+this.b}}
B.y8.prototype={
yB(d){return new B.a1J(this,d)},
k(d,e){var w,v=this
if(e==null)return!1
if(v===e)return!0
if(J.a2(e)!==A.x(v))return!1
w=!1
if(x.U.b(e))if(e.gd9(e).k(0,v.a)){e.guE()
if(e.gkB()==v.d)if(e.geC().k(0,C.W)){e.guv()
if(e.gvD(e)===D.dg){e.gpm()
if(e.gd5(e)===1)if(e.gcV(e)===1){w=e.gno()===C.bT
if(w){e.gpg()
e.gvc()}}}}}return w},
gC(d){return A.a_(this.a,null,this.d,C.W,null,D.dg,!1,1,1,C.bT,!1,!1,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a)},
j(d){var w=A.c([this.a.j(0)],x.s),v=this.d,u=!1
if(v!=null)u=v!==D.m6
if(u)w.push(v.j(0))
w.push(C.W.j(0))
w.push("scale "+C.i.ap(1,1))
w.push("opacity "+C.i.ap(1,1))
w.push(C.bT.j(0))
return"DecorationImage("+C.b.bl(w,", ")+")"},
gd9(d){return this.a},
guE(){return null},
gkB(){return this.d},
geC(){return C.W},
guv(){return null},
gvD(){return D.dg},
gpm(){return!1},
gd5(){return 1},
gcV(){return 1},
gno(){return C.bT},
gpg(){return!1},
gvc(){return!1}}
B.a1J.prototype={
Ad(d,e,f,g,h,i){var w,v,u,t,s=this,r=null,q=s.a,p=q.a.X(g),o=p.a
if(o==null)o=p
w=s.c
v=w==null
if(v)u=r
else{u=w.a
if(u==null)u=w}if(o!==u){t=new A.f8(s.gXD(),r,q.b)
if(!v)w.I(0,t)
s.c=p
p.a_(0,t)}if(s.d==null)return
o=f!=null
if(o){w=d.a.a
J.aC(w.save())
v=f.geL().a
v===$&&A.b()
v=v.a
v.toString
w.clipPath(v,$.m7(),!0)}w=s.d
w=w.gd9(w)
v=s.d.gjM()
u=s.d
B.b6l(C.W,i,d,r,r,v,C.bT,q.d,!1,w,!1,!1,h,e,D.dg,u.gd5(u))
if(o)d.a.a.restore()},
rI(d,e,f,g){return this.Ad(d,e,f,g,1,C.cJ)},
ao7(d,e){var w,v=this
if(J.f(v.d,d))return
w=v.d
if(w!=null&&w.zE(d)){d.l()
return}w=v.d
if(w!=null)w.l()
v.d=d
if(!e)v.b.$0()},
l(){var w=this,v=w.c
if(v!=null)v.I(0,new A.f8(w.gXD(),null,w.a.b))
v=w.d
if(v!=null)v.l()
w.d=null},
j(d){return"DecorationImagePainter(stream: "+A.m(this.c)+", image: "+A.m(this.d)+") for "+this.a.j(0)}}
B.fM.prototype={
X(d){var w=new B.alA()
this.ak5(d,new B.alt(this,d,w),new B.alu(this,w))
return w},
ak5(d,e,f){var w,v,u,t,s,r={}
r.a=null
r.b=!1
w=new B.alq(r,f)
v=null
try{v=this.A7(d)}catch(s){u=A.ac(s)
t=A.aR(s)
w.$2(u,t)
return}v.b6(new B.alp(r,this,e,w),x.H).oK(w)},
As(d,e,f,g){var w,v
if(e.a!=null){w=$.mN.v_$
w===$&&A.b()
w.a7l(0,f,new B.alr(e),g)
return}w=$.mN.v_$
w===$&&A.b()
v=w.a7l(0,f,new B.als(this,f),g)
if(v!=null)e.Sw(v)},
vi(d,e){return B.b3y()},
vj(d,e){return B.b3y()},
j(d){return"ImageConfiguration()"}}
B.Kj.prototype={}
B.aB4.prototype={
K(){return"WebHtmlElementStrategy."+this.b}}
B.mJ.prototype={
A7(d){return new A.dF(this,x.c)},
vi(d,e){return B.VT(this.l_(d,e),"MemoryImage("+("<optimized out>#"+A.bg(d.a))+")",null,d.b)},
vj(d,e){return B.VT(this.l_(d,e),"MemoryImage("+("<optimized out>#"+A.bg(d.a))+")",null,d.b)},
l_(d,e){return this.aro(d,e)},
aro(d,e){var w=0,v=A.B(x.p),u,t=this,s
var $async$l_=A.w(function(f,g){if(f===1)return A.y(g,v)
while(true)switch(w){case 0:s=e
w=3
return A.q(A.UA(t.a),$async$l_)
case 3:u=s.$1(g)
w=1
break
case 1:return A.z(u,v)}})
return A.A($async$l_,v)},
k(d,e){if(e==null)return!1
if(J.a2(e)!==A.x(this))return!1
return e instanceof B.mJ&&e.a===this.a&&e.b===this.b},
gC(d){return A.a_(A.eW(this.a),this.b,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a)},
j(d){return"MemoryImage("+("<optimized out>#"+A.bg(this.a))+", scale: "+C.i.ap(this.b,1)+")"}}
B.a2F.prototype={}
B.zl.prototype={
j(d){return this.b},
$ic8:1}
B.f7.prototype={
NQ(d){var w=this.a,v=w.b
v===$&&A.b()
return new B.f7(A.RV(v,w.c),this.b,this.c)},
zE(d){var w
if(d.gd9(d).zE(this.a)){w=this.b
w=w===w&&d.gjM()==this.c}else w=!1
return w},
gSO(){var w=this.a,v=w.b
v===$&&A.b()
v=v.a
v===$&&A.b()
v=J.aC(v.a.height())
w=w.b.a
w===$&&A.b()
return v*J.aC(w.a.width())*4},
l(){this.a.l()},
j(d){var w=this.c
w=w!=null?w+" ":""
return w+this.a.j(0)+" @ "+A.kU(this.b)+"x"},
gC(d){return A.a_(this.a,this.b,this.c,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a)},
k(d,e){var w=this
if(e==null)return!1
if(J.a2(e)!==A.x(w))return!1
return x.J.b(e)&&e.gd9(e)===w.a&&e.gd5(e)===w.b&&e.gjM()==w.c},
gd9(d){return this.a},
gd5(d){return this.b},
gjM(){return this.c}}
B.alA.prototype={
Sw(d){var w,v=this
v.a=d
w=v.b
if(w!=null){v.b=null
d.f=!0
C.b.aj(w,d.gE8(d))
v.a.f=!1}},
a_(d,e){var w=this.a
if(w!=null)return w.a_(0,e)
w=this.b;(w==null?this.b=A.c([],x.v):w).push(e)},
I(d,e){var w,v=this.a
if(v!=null)return v.I(0,e)
for(w=0;v=this.b,w<v.length;++w)if(v[w].k(0,e)){v=this.b
v.toString
C.b.hi(v,w)
break}}}
B.Uy.prototype={
agN(d){++this.a.r},
l(){var w=this.a;--w.r
w.xj()
this.a=null}}
B.h8.prototype={
a_(d,e){var w,v,u,t,s,r,q=this
if(q.w)A.a1(A.a6(y.a))
q.a.push(e)
s=q.c
if(s!=null)try{e.a.$2(s.NQ(0),!q.f)}catch(r){w=A.ac(r)
v=A.aR(r)
q.a7K(A.bS("by a synchronously-called image listener"),w,v)}s=q.d
if(s!=null&&e.c!=null)try{e.c.$2(s.a,s.b)}catch(w){u=A.ac(w)
t=A.aR(w)
if(!J.f(u,q.d.a))A.e_(new A.cj(u,t,"image resource service",A.bS("by a synchronously-called image error listener"),null,!1))}},
Q1(){if(this.w)A.a1(A.a6(y.a));++this.r
return new B.Uy(this)},
I(d,e){var w,v,u,t,s,r=this
if(r.w)A.a1(A.a6(y.a))
for(w=r.a,v=0;v<w.length;++v)if(w[v].k(0,e)){C.b.hi(w,v)
break}if(w.length===0){w=r.x
u=A.c(w.slice(0),A.a5(w))
for(t=u.length,s=0;s<u.length;u.length===t||(0,A.R)(u),++s)u[s].$0()
C.b.S(w)
r.xj()}},
Qt(){},
xj(){var w,v=this
if(v.w||v.a.length!==0||v.r!==0)return
C.b.S(v.b)
w=v.c
if(w!=null)w.l()
v.c=null
v.w=!0
v.Qt()},
azF(d){if(this.w)A.a1(A.a6(y.a))
this.x.push(d)},
a7A(d){if(this.w)A.a1(A.a6(y.a))
C.b.D(this.x,d)},
Ik(d){var w,v,u,t,s,r,q,p=this
if(p.w)A.a1(A.a6(y.a))
t=p.c
if(t!=null)t.l()
p.c=d
C.b.S(p.b)
t=p.a
if(t.length===0)return
s=A.a8(t,x.y)
for(t=s.length,r=0;r<s.length;s.length===t||(0,A.R)(s),++r){w=s[r]
try{w.aIK(d.NQ(0),!1)}catch(q){v=A.ac(q)
u=A.aR(q)
p.a7K(A.bS("by an image listener"),v,u)}}},
rV(d,e,f,g,h){var w,v,u,t,s,r,q,p,o,n,m=this,l="image resource service"
m.d=new A.cj(e,h,l,d,f,g)
s=m.a
s=A.a8(new A.d3(new A.ak(s,new B.alB(),A.a5(s).i("ak<1,~(J,de?)?>")),x.I),x.d)
r=m.b
C.b.W(s,r)
C.b.S(r)
w=!1
for(r=s.length,q=0;q<s.length;s.length===r||(0,A.R)(s),++q){v=s[q]
try{v.$2(e,h)
w=!0}catch(p){u=A.ac(p)
t=A.aR(p)
if(!J.f(u,e)){o=A.bS("when reporting an error to an image listener")
n=$.lc
if(n!=null)n.$1(new A.cj(u,t,l,o,null,!1))}}}if(!w){s=m.d
s.toString
A.e_(s)}},
a7K(d,e,f){return this.rV(d,e,null,!1,f)},
aL9(d,e){return this.rV(null,d,null,!1,e)},
aLa(d){var w,v,u,t
if(this.w)A.a1(A.a6(y.a))
w=this.a
if(w.length!==0){v=x.S
u=A.a8(new A.d3(new A.ak(w,new B.alC(),A.a5(w).i("ak<1,~(yI)?>")),v),v.i("t.E"))
for(w=u.length,t=0;t<u.length;u.length===w||(0,A.R)(u),++t)u[t].$1(d)}}}
B.Wh.prototype={
agT(d,e){d.ff(this.gaaO(),new B.arE(this,e),x.H)}}
B.GH.prototype={
agS(d,e,f,g,h){this.e=f
e.ff(this.ganj(),new B.aqH(this,g),x.H)},
ank(d){this.z=d
if(this.a.length!==0)this.ty()},
an6(d){var w,v,u,t=this
t.cx=!1
if(t.a.length===0)return
w=t.ay
if(w!=null){v=t.ax
v===$&&A.b()
v=d.a-v.a>=w.a}else v=!0
if(v){w=t.at
w=w.gd9(w)
v=w.b
v===$&&A.b()
t.Ws(new B.f7(A.RV(v,w.c),t.Q,t.e))
t.ax=d
w=t.at
t.ay=w.gyT(w)
w=t.at
w.gd9(w).l()
t.at=null
w=t.z
if(w==null)return
u=C.i.iP(t.ch,w.grk())
if(t.z.gvE()===-1||u<=t.z.gvE()){t.ty()
return}t.z.l()
t.z=null
return}v=t.ax
v===$&&A.b()
t.CW=A.cf(new A.b4(C.i.aJ(w.a-(d.a-v.a))),new B.aqG(t))},
ty(){var w=0,v=A.B(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$ty=A.w(function(d,e){if(d===1){s.push(e)
w=t}while(true)switch(w){case 0:m=r.at
if(m!=null)m.gd9(m).l()
r.at=null
t=4
w=7
return A.q(r.z.hT(),$async$ty)
case 7:r.at=e
t=2
w=6
break
case 4:t=3
l=s.pop()
q=A.ac(l)
p=A.aR(l)
r.rV(A.bS("resolving an image frame"),q,r.as,!0,p)
w=1
break
w=6
break
case 3:w=2
break
case 6:m=r.z
if(m==null){w=1
break}if(m.grk()===1){if(r.a.length===0){w=1
break}m=r.at
m=m.gd9(m)
n=m.b
n===$&&A.b()
r.Ws(new B.f7(A.RV(n,m.c),r.Q,r.e))
m=r.at
m.gd9(m).l()
r.at=null
m=r.z
if(m!=null)m.l()
r.z=null
w=1
break}r.a_4()
case 1:return A.z(u,v)
case 2:return A.y(s.at(-1),v)}})
return A.A($async$ty,v)},
a_4(){if(this.cx)return
this.cx=!0
$.bV.B1(this.gan5())},
Ws(d){this.Ik(d);++this.ch},
a_(d,e){var w,v=this,u=!1
if(v.a.length===0){w=v.z
if(w!=null)u=v.c==null||w.grk()>1}if(u)v.ty()
v.acC(0,e)},
I(d,e){var w,v=this
v.acE(0,e)
if(v.a.length===0){w=v.CW
if(w!=null)w.aO(0)
v.CW=null}},
xj(){var w,v=this
v.acB()
if(v.w){v.y=null
w=v.z
if(w!=null)w.l()
v.z=null}}}
B.a3r.prototype={}
B.a3q.prototype={}
var z=a.updateTypes(["~(f8)","~(f7,K)","~(f7)","~(fo)","~(b4)"])
B.ar9.prototype={
$0(){var w=0,v=A.B(x.R),u,t=this,s,r,q
var $async$$0=A.w(function(d,e){if(d===1)return A.y(e,v)
while(true)switch(w){case 0:s=t.c
r=B
q=A
w=3
return A.q(t.a.wT(t.b),$async$$0)
case 3:u=r.VT(q.d0(e,x.p),s.a,null,s.b)
w=1
break
case 1:return A.z(u,v)}})
return A.A($async$$0,v)},
$S:255}
B.ara.prototype={
$0(){var w=0,v=A.B(x.R),u,t=this,s,r,q
var $async$$0=A.w(function(d,e){if(d===1)return A.y(e,v)
while(true)switch(w){case 0:r=B.bkV()
q=t.b.a
r.src=q
w=3
return A.q(A.fj(r.decode(),x.X),$async$$0)
case 3:s=B.beX(A.d0(new B.wq(r,q),x.J),null)
s.e=q
u=s
w=1
break
case 1:return A.z(u,v)}})
return A.A($async$$0,v)},
$S:255}
B.ar7.prototype={
$1(d){var w=this.a,v=w.status,u=v>=200&&v<300,t=v>307&&v<400,s=u||v===0||v===304||t,r=this.b
if(s)r.cn(0,w)
else r.j7(new B.zl("HTTP request failed, statusCode: "+A.m(v)+", "+this.c.j(0)))},
$S:27}
B.ar8.prototype={
$1(d){return this.a.j7(new B.zl("HTTP request failed, statusCode: "+A.m(this.b.status)+", "+this.c.j(0)))},
$S:2}
B.aHc.prototype={
$1(d){var w=this.a
w.z=!0
if(w.as){d.xj()
return}w.Q!==$&&A.bG()
w.Q=d
d.a_(0,w.ga6k(0))},
$S:657}
B.aHd.prototype={
$2(d,e){this.a.rV(A.bS("resolving an image stream completer"),d,this.b,!0,e)},
$S:30}
B.aHe.prototype={
$2(d,e){this.a.Ik(d)},
$S:137}
B.aHf.prototype={
$1(d){this.a.aLa(d)},
$S:243}
B.aHg.prototype={
$2(d,e){this.a.aL9(d,e)},
$S:238}
B.alt.prototype={
$2(d,e){this.a.As(this.b,this.c,d,e)},
$S(){return A.p(this.a).i("~(fM.T,~(J,de?))")}}
B.alu.prototype={
$3(d,e,f){return this.a8L(d,e,f)},
a8L(d,e,f){var w=0,v=A.B(x.H),u=this,t
var $async$$3=A.w(function(g,h){if(g===1)return A.y(h,v)
while(true)switch(w){case 0:t=A.k0(null,x.P)
w=2
return A.q(t,$async$$3)
case 2:t=u.b
if(t.a==null)t.Sw(new B.a2F(A.c([],x.v),A.c([],x.l),A.c([],x.u)))
t=t.a
t.toString
t.rV(A.bS("while resolving an image"),e,null,!0,f)
return A.z(null,v)}})
return A.A($async$$3,v)},
$S(){return A.p(this.a).i("ad<~>(fM.T?,J,de?)")}}
B.alq.prototype={
a8K(d,e){var w=0,v=A.B(x.H),u,t=this,s
var $async$$2=A.w(function(f,g){if(f===1)return A.y(g,v)
while(true)switch(w){case 0:s=t.a
if(s.b){w=1
break}s.b=!0
t.b.$3(s.a,d,e)
case 1:return A.z(u,v)}})
return A.A($async$$2,v)},
$2(d,e){return this.a8K(d,e)},
$S:658}
B.alp.prototype={
$1(d){var w,v,u,t=this
t.a.a=d
try{t.c.$2(d,t.d)}catch(u){w=A.ac(u)
v=A.aR(u)
t.d.$2(w,v)}},
$S(){return A.p(this.b).i("aS(fM.T)")}}
B.alr.prototype={
$0(){var w=this.a.a
w.toString
return w},
$S:256}
B.als.prototype={
$0(){var w=this.a,v=this.b,u=w.vj(v,$.mN.gaGK())
return u instanceof B.Kj?w.vi(v,$.mN.gaGI()):u},
$S:256}
B.alB.prototype={
$1(d){return d.c},
$S:660}
B.alC.prototype={
$1(d){return d.b},
$S:661}
B.arE.prototype={
$2(d,e){this.a.rV(A.bS("resolving a single-frame image stream"),d,this.b,!0,e)},
$S:30}
B.aqH.prototype={
$2(d,e){this.a.rV(A.bS("resolving an image codec"),d,this.b,!0,e)},
$S:30}
B.aqG.prototype={
$0(){this.a.a_4()},
$S:0}
B.apZ.prototype={
$1(d){return A.uZ(this.a,A.bM(d,null,x.w).w.Ob(C.aI))},
$S:192};(function aliases(){var w=B.h8.prototype
w.acC=w.a_
w.acE=w.I
w.acD=w.Qt
w.acB=w.xj})();(function installTearOffs(){var w=a._instance_2u,v=a._instance_1i,u=a._instance_1u
w(B.a1J.prototype,"gXD","ao7",1)
var t
v(t=B.h8.prototype,"gE8","a_",0)
u(t,"gaaO","Ik",2)
u(t=B.GH.prototype,"ganj","ank",3)
u(t,"gan5","an6",4)
v(t,"gE8","a_",0)})();(function inheritance(){var w=a.mixin,v=a.inherit,u=a.inheritMany
v(B.RS,A.af)
u(A.J,[B.fM,B.a3q,B.wq,B.TC,B.y8,B.a1J,B.zl,B.f7,B.a3r,B.Uy])
u(B.fM,[B.hD,B.mJ])
u(A.hr,[B.ar9,B.ara,B.alr,B.als,B.aqG])
u(A.e7,[B.ar7,B.ar8,B.aHc,B.aHf,B.alu,B.alp,B.alB,B.alC,B.apZ])
v(B.h8,B.a3q)
u(B.h8,[B.a36,B.Kj,B.a2F,B.Wh,B.GH])
u(A.hs,[B.aHd,B.aHe,B.aHg,B.alt,B.alq,B.arE,B.aqH])
u(A.nj,[B.DJ,B.yJ,B.aB4])
v(B.alA,B.a3r)
w(B.a3r,A.as)
w(B.a3q,A.as)})()
A.h_(b.typeUniverse,JSON.parse('{"RS":{"af":[],"h":[]},"hD":{"fM":["aWj"],"fM.T":"aWj"},"a36":{"h8":[]},"wq":{"f7":[]},"aWj":{"fM":["aWj"]},"mJ":{"fM":["mJ"],"fM.T":"mJ"},"Kj":{"h8":[]},"a2F":{"h8":[]},"zl":{"c8":[]},"Wh":{"h8":[]},"GH":{"h8":[]}}'))
var y={a:"Stream has been disposed.\nAn ImageStream is considered disposed once at least one listener has been added and subsequently all listeners have been removed and no handles are outstanding from the keepAlive method.\nTo resolve this error, maintain at least one listener on the stream, or create an ImageStreamCompleterHandle from the keepAlive method, or create a new stream for the image."}
var x=(function rtii(){var w=A.a0
return{p:w("fo"),U:w("y8"),J:w("f7"),R:w("h8"),y:w("f8"),v:w("r<f8>"),T:w("r<N>"),s:w("r<k>"),u:w("r<~()>"),l:w("r<~(J,de?)>"),w:w("fP"),a:w("mK"),P:w("aS"),c:w("dF<mJ>"),i:w("dF<hD>"),I:w("d3<~(J,de?)>"),S:w("d3<~(yI)>"),x:w("aG<W>"),Z:w("a3<W>"),X:w("J?"),H:w("~"),d:w("~(J,de?)")}})();(function constants(){D.m4=new B.DJ(1,"contain")
D.m5=new B.DJ(2,"cover")
D.m6=new B.DJ(6,"scaleDown")
D.S4=new B.TC(C.K,C.K)
D.TB=new B.yJ(0,"repeat")
D.TC=new B.yJ(1,"repeatX")
D.TD=new B.yJ(2,"repeatY")
D.dg=new B.yJ(3,"noRepeat")
D.cF=new B.aB4(0,"never")})()};
(a=>{a["nbQJfuDiKInVZy/OEsWUgtQ//H8="]=a.current})($__dart_deferred_initializers__);