(function(t){function e(e){for(var i,n,h=e[0],c=e[1],l=e[2],d=0,p=[];d<h.length;d++)n=h[d],r[n]&&p.push(r[n][0]),r[n]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);a&&a(e);while(p.length)p.shift()();return o.push.apply(o,l||[]),s()}function s(){for(var t,e=0;e<o.length;e++){for(var s=o[e],i=!0,h=1;h<s.length;h++){var c=s[h];0!==r[c]&&(i=!1)}i&&(o.splice(e--,1),t=n(n.s=s[0]))}return t}var i={},r={app:0},o=[];function n(e){if(i[e])return i[e].exports;var s=i[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.m=t,n.c=i,n.d=function(t,e,s){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(s,i,function(e){return t[e]}.bind(null,i));return s},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/breakout/";var h=window["webpackJsonp"]=window["webpackJsonp"]||[],c=h.push.bind(h);h.push=e,h=h.slice();for(var l=0;l<h.length;l++)e(h[l]);var a=c;o.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("cd49")},7206:function(t,e,s){},cd49:function(t,e,s){"use strict";s.r(e);var i,r=s("2b0e"),o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("Game")],1)},n=[],h=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{ref:"root",staticClass:"root"}),s("p",[s("button",{on:{click:t.pause}},[t._v("Pause / Resume")])])])},c=[];class l{constructor(t){this.brick=t,this.drawn=!1}render(t){this.brick.destroyed||this.drawn?this.brick.destroyed&&this.drawn&&(this.clear(t),this.drawn=!1):(this.draw(t),this.drawn=!0)}draw(t){const e=this.brick.physics.rectangle,s=e.corners.topLeft,i=s.x,r=s.y,o=e.width,n=e.height,h=t.createLinearGradient(i,r,i+o,r+n);h.addColorStop(0,"#004D40"),h.addColorStop(1,"#4DB6AC"),t.fillStyle=h,t.fillRect(i,r,o,n)}clear(t){const e=this.brick.physics.rectangle,s=e.corners.topLeft,i=s.x,r=s.y,o=e.width,n=e.height;t.clearRect(i,r,o,n)}}function a(t,e){if(t>0)return t;throw new TypeError(e+" must be a number greater than zero: "+t+" ("+typeof t+")")}function d(t,e){if(t>=0)return t;throw new TypeError(e+" must be a number greater than or equal to zero: "+t+" ("+typeof t+")")}class p{constructor(t,e){this._x=0,this._y=0,this.x=t,this.y=e}get x(){return this._x}set x(t){this._x=d(t,"x")}get y(){return this._y}set y(t){this._y=d(t,"y")}clone(){return new p(this.x,this.y)}}class u{constructor(t,e,s){this._length=0,this._start=t.clone(),this.length=e,this._orientation=s}get start(){return this._start}set start(t){this._start=t.clone()}get length(){return this._length}set length(t){this._length=a(t,"length")}get orientation(){return this._orientation}set orientation(t){this._orientation=t}clone(){return new u(this.start,this.length,this.orientation)}}(function(t){t["Horizontal"]="Horizontal",t["Vertical"]="Vertical"})(i||(i={}));const g=i.Horizontal,y=i.Vertical;class f{constructor(t,e,s){this._width=0,this._height=0,this._topLeft=t.clone(),this._width=a(e,"width"),this._height=a(s,"height"),this._corners=new m(this,this._topLeft),this._edges=new _(this)}get width(){return this._width}get height(){return this._height}get corners(){return this._corners}get edges(){return this._edges}moveTo(t,e){this._topLeft.x=t,this._topLeft.y=e,this._corners.update(),this._edges.update()}resize(t,e){this._width=a(t,"width"),this._height=a(e,"height"),this._corners.update(),this._edges.update()}clone(){return new f(this._topLeft,this._width,this._height)}}class m{constructor(t,e){this._rectangle=t,this._topLeft=e,this._topRight=new p(e.x+t.width,e.y),this._bottomLeft=new p(e.x,e.y+t.height),this._bottomRight=new p(e.x+t.width,e.y+t.height)}update(){this._topRight.x=this._topLeft.x+this._rectangle.width,this._topRight.y=this._topLeft.y,this._bottomLeft.x=this._topLeft.x,this._bottomLeft.y=this._topLeft.y+this._rectangle.height,this._bottomRight.x=this._topLeft.x+this._rectangle.width,this._bottomRight.y=this._topLeft.y+this._rectangle.height}get topLeft(){return this._topLeft}get topRight(){return this._topRight}get bottomLeft(){return this._bottomLeft}get bottomRight(){return this._bottomRight}}class _{constructor(t){this._rectangle=t;const e=t.corners,s=e.topLeft,i=e.topRight,r=e.bottomLeft,o=t.width,n=t.height;this._top=new u(s,o,g),this._bottom=new u(r,o,g),this._left=new u(s,n,y),this._right=new u(i,n,y)}update(){const t=this._rectangle.corners,e=t.topLeft,s=t.topRight,i=t.bottomLeft,r=this._rectangle,o=r.width,n=r.height;this._top.start.x=e.x,this._top.start.y=e.y,this._top.length=o,this._bottom.start.x=i.x,this._bottom.start.y=i.y,this._bottom.length=o,this._left.start.x=e.x,this._left.start.y=e.y,this._left.length=n,this._right.start.x=s.x,this._right.start.y=s.y,this._right.length=n}get top(){return this._top}get bottom(){return this._bottom}get left(){return this._left}get right(){return this._right}}const b=40,w=20;class v{constructor(t,e){const s=new p(e*b,t*w);this.rectangle=new f(s,b,w)}}const x=40,L=20;class k{constructor(t,e){this.physics=new v(t,e),this.graphics=new l(this),this.destroyed=!1}hitByBall(){this.destroyed=!0}}const B=18,P=14,R=P*x,F=(B+3)*L;function M(){const t=[];for(let e=0;e<B;e++){t.push([]);for(let s=0;s<P;s++)t[e].push(null)}return t}class T{constructor(t,e){this.state=t,this.root=e,this.running=!1,this.launch=!1,this.moveListener=this.moveHandler.bind(this),this.clickListener=this.clickHandler.bind(this)}start(){this.running||(this.running=!0,this.root.addEventListener("mousemove",this.moveListener),this.root.addEventListener("click",this.clickListener))}pause(){this.running&&(this.running=!1,this.root.removeEventListener("mousemove",this.moveListener),this.root.removeEventListener("click",this.clickListener))}moveHandler(t){this.paddlePosition=t.clientX}clickHandler(){this.launch=!0}process(){void 0!==this.paddlePosition&&this.state.paddle.controls.move(this.paddlePosition),this.launch&&(this.state.paddle.controls.launch(),this.launch=!1)}}class C{constructor(t,e){this.mouse=new T(t,e)}start(){this.mouse.start()}pause(){this.mouse.pause()}process(){this.mouse.process()}}s("ac6a");class E{constructor(t,e){this.state=t,this.root=this.initRoot(e),this.bricksLayer=this.createCanvas(0),this.dynamicLayer=this.createCanvas(1)}initRoot(t){return t.style.position="relative",t.style.width=R+"px",t.style.height=F+"px",t.style.backgroundColor="#E0F2F1",t}createCanvas(t){const e=document.createElement("canvas"),s=window.devicePixelRatio||1;e.width=R*s,e.height=F*s,e.style.position="absolute",e.style.top="0",e.style.left="0",e.style.width=R+"px",e.style.height=F+"px",e.style.zIndex=t+"",this.root.appendChild(e);const i=e.getContext("2d");if(i)return i.scale(s,s),i;throw new TypeError("Could not initialize rendering context.")}pause(){this.framesThisSecond=void 0,this.lastFpsUpdate=void 0}render(t){this.calculateFps(t),this.renderBricks(),this.clearDynamicLayer(),this.renderPaddle(),this.renderBalls(),this.renderFps()}calculateFps(t){this.lastFpsUpdate||(this.lastFpsUpdate=t),t>this.lastFpsUpdate+1e3&&(this.fps=this.framesThisSecond,this.lastFpsUpdate=t,this.framesThisSecond=0),this.framesThisSecond||(this.framesThisSecond=0),this.framesThisSecond++}renderBricks(){for(let t of this.state.bricks)for(let e of t)e&&e.graphics.render(this.bricksLayer)}clearDynamicLayer(){this.dynamicLayer.clearRect(0,0,R,F)}renderPaddle(){this.state.paddle.graphics.render(this.dynamicLayer)}renderBalls(){this.state.balls.forEach(t=>{t.graphics.render(this.dynamicLayer)})}renderFps(){this.fps&&(this.dynamicLayer.strokeStyle="#000000",this.dynamicLayer.textAlign="right",this.dynamicLayer.fillText(Math.round(this.fps)+" FPS",R-15,25))}}const S=1e3/60;class O{constructor(t){this.state=t,this.delta=0}pause(t){this.lastTimestamp&&(this.delta+=t-this.lastTimestamp,this.lastTimestamp=void 0)}calculate(t){this.lastTimestamp||(this.lastTimestamp=t),this.delta+=t-this.lastTimestamp,this.lastTimestamp=t;while(this.delta>=S)this.step(),this.delta-=S}step(){for(let t of this.state.balls)t.physics.step(this.state)}}class H{constructor(t){this.ball=t}render(t){const e=this.ball.physics.circle,s=e.center,i=e.radius;t.fillStyle="#000000",t.beginPath(),t.arc(s.x,s.y,i,0,2*Math.PI),t.fill()}}const j=i.Horizontal,D=i.Vertical;var z=function(t,e){const s=[t.center.x-e.start.x,t.center.y-e.start.y],i=[e.orientation===j?e.length:0,e.orientation===D?e.length:0],r=A(i,i),o=A(s,i),n=I(o/r,0,1),h=[i[0]*n+e.start.x-t.center.x,i[1]*n+e.start.y-t.center.y],c=A(h,h);return c<=t.radius*t.radius};function A(t,e){return t[0]*e[0]+t[1]*e[1]}function I(t,e,s){return Math.max(e,Math.min(s,t))}var V,U=function(t,e){const s=e.corners.topLeft.x,i=s+e.width,r=e.corners.topLeft.y,o=r+e.height,n=t.x,h=t.y;return n>=s&&n<=i&&h>=r&&h<=o};(function(t){t["Top"]="Top",t["Bottom"]="Bottom",t["Left"]="Left",t["Right"]="Right",t["Enclosed"]="Enclosed"})(V||(V={}));var G=function(t,e){let s=null;return z(t,e.edges.top)&&(s=$(V.Top,s)),z(t,e.edges.right)&&(s=$(V.Right,s)),z(t,e.edges.bottom)&&(s=$(V.Bottom,s)),z(t,e.edges.left)&&(s=$(V.Left,s)),!s&&U(t.center,e)&&(s=$(V.Enclosed,s)),s};function $(t,e){return e?(e.push(t),e):[t]}class q{constructor(t,e){this._radius=0,this._center=t.clone(),this.radius=e}get center(){return this._center}set center(t){this._center=t.clone()}get radius(){return this._radius}set radius(t){this._radius=a(t,"radius")}clone(){return new q(this.center,this.radius)}}const J=7,W=J,X=R-J,K=J,N=F-J,Q=5,Y=Math.PI/3;class Z{constructor(t){this.ball=t,this.circle=new q(new p(0,0),J),this.velocity=[0,0]}step(t){this.move(),this.checkPaddleCollision(t.paddle),this.checkBricksCollision(t.bricks),this.checkBoundsCollision()}move(){this.circle.center.x+=this.velocity[0],this.circle.center.y+=this.velocity[1]}checkPaddleCollision(t){if(t.balls.includes(this.ball))return;const e=G(this.circle,t.physics.rectangle);if(!e)return;const s=t.physics.rectangle.edges,i=s.right,r=s.bottom,o=s.left;e.includes(V.Top)?this.paddleCollisionFromAbove(t):e.includes(V.Right)?this.collisionFromRight(i.start.x):e.includes(V.Left)?this.collisionFromLeft(o.start.x):e.includes(V.Bottom)&&this.collisionFromBelow(r.start.y)}paddleCollisionFromAbove(t){this.updateVelocityBasedOnPaddlePosition(t),this.collisionFromAbove(t.physics.rectangle.edges.top.start.y)}updateVelocityBasedOnPaddlePosition(t){const e=t.physics.rectangle.edges.top.start.x,s=t.physics.rectangle.width,i=s/2,r=Math.max(e,Math.min(e+s,this.circle.center.x)),o=e+i-r,n=o/i,h=n*Y;this.velocity[0]=-Math.sin(h)*Q,this.velocity[1]=-Math.cos(h)*Q}checkBricksCollision(t){const e=Math.round(this.circle.center.y/L),s=Math.max(0,e-1),i=Math.min(B-1,e+1);for(let r=s;r<=i;r++)this.checkBrickRow(t[r])}checkBrickRow(t){const e=Math.round(this.circle.center.x/x),s=Math.max(0,e-1),i=Math.min(P-1,e+1);for(let r=s;r<=i;r++)this.checkBrickCell(t,r)}checkBrickCell(t,e){const s=t[e];s&&!s.destroyed&&this.checkBrickCollision(s)}checkBrickCollision(t){const e=G(this.circle,t.physics.rectangle);if(!e)return;t.hitByBall();const s=t.physics.rectangle.edges,i=s.top,r=s.right,o=s.bottom,n=s.left;e.includes(V.Top)&&this.collisionFromAbove(i.start.y),e.includes(V.Right)&&this.collisionFromRight(r.start.x),e.includes(V.Bottom)&&this.collisionFromBelow(o.start.y),e.includes(V.Left)&&this.collisionFromLeft(n.start.x)}checkBoundsCollision(){const t=this.circle,e=t.center,s=t.radius;e.y-s<=0&&this.collisionFromBelow(0),e.x+s>=R&&this.collisionFromLeft(R),e.x-s<=0&&this.collisionFromRight(0),e.y-s>=F&&(this.ball.dropped=!0)}collisionFromAbove(t){this.circle.center.y=Math.max(t-this.circle.radius,K),this.velocity[1]>0&&(this.velocity[1]=-this.velocity[1])}collisionFromRight(t){this.circle.center.x=Math.min(t+this.circle.radius,X),this.velocity[0]<0&&(this.velocity[0]=-this.velocity[0])}collisionFromBelow(t){this.circle.center.y=Math.min(t+this.circle.radius,N),this.velocity[1]<0&&(this.velocity[1]=-this.velocity[1])}collisionFromLeft(t){this.circle.center.x=Math.max(t-this.circle.radius,W),this.velocity[0]>0&&(this.velocity[0]=-this.velocity[0])}}class tt{constructor(){this.physics=new Z(this),this.graphics=new H(this),this.dropped=!1}}class et{constructor(t){this.state=t,this.createBall()}createBall(){const t=new tt;this.state.balls.push(t),this.state.paddle.stick(t,!0)}process(){this.handleDroppedBalls()}handleDroppedBalls(){this.state.balls=this.state.balls.filter(t=>!t.dropped),0===this.state.balls.length&&this.createBall()}}class st{constructor(t,e){this.state=t,this.controls=new C(this.state,e),this.physics=new O(this.state),this.game=new et(this.state),this.graphics=new E(this.state,e),this.running=!1}start(){this.running||(this.running=!0,this.controls.start(),requestAnimationFrame(this.loop.bind(this)))}pause(){this.running&&(this.running=!1,this.controls.pause(),this.physics.pause(performance.now()),this.graphics.pause())}loop(t){this.running&&(this.controls.process(),this.physics.calculate(t),this.game.process(),this.graphics.render(t),requestAnimationFrame(this.loop.bind(this)))}}const it=60,rt=L,ot=it/2;class nt{constructor(){const t=R/2-ot,e=F-2*rt;this.rectangle=new f(new p(t,e),it,rt)}}const ht=it/2,ct=0,lt=R-it;class at{constructor(t){this.paddle=t}move(t){const e=this.updatePaddlePosition(t);this.updateBallPositions(e)}updatePaddlePosition(t){const e=this.paddle.physics.rectangle,s=e.corners.topLeft,i=Math.min(lt,Math.max(ct,t-ht)),r=i-s.x;return e.moveTo(i,s.y),r}updateBallPositions(t){for(let e of this.paddle.balls)this.updateBallPosition(e,t)}updateBallPosition(t,e){const s=t.physics.circle.center.x,i=Math.min(X,Math.max(W,s+e));t.physics.circle.center.x=i}launch(){if(0!==this.paddle.balls.length){for(let t of this.paddle.balls)t.physics.updateVelocityBasedOnPaddlePosition(this.paddle);this.paddle.balls=[]}}}class dt{constructor(t){this.paddle=t}render(t){const e=this.paddle.physics.rectangle,s=e.corners.topLeft,i=s.x,r=s.y,o=e.width,n=e.height;t.fillStyle="#424242",t.fillRect(i,r,o,n)}}class pt{constructor(){this.balls=[],this.physics=new nt,this.graphics=new dt(this),this.controls=new at(this)}stick(t){let e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];this.balls.push(t),e?this.stickBallRandomly(t):this.stickBallBasedOnPosition(t),t.physics.circle.center.y=this.physics.rectangle.edges.top.start.y-J,t.physics.velocity[0]=0,t.physics.velocity[1]=0}stickBallRandomly(t){const e=this.physics.rectangle.corners.topLeft.x,s=this.physics.rectangle.width;let i,r;Math.random()>=.5?(i=e+1/12*s,r=e+2/6*s):(i=e+s-2/6*s,r=e+s-1/12*s),t.physics.circle.center.x=Math.random()*(r-i)+i}stickBallBasedOnPosition(t){const e=this.physics.rectangle.corners,s=e.topLeft,i=e.topRight,r=t.physics.circle.center.x;t.physics.circle.center.x=Math.min(i.x,Math.max(s.x,r))}}class ut{constructor(){this.bricks=M(),this.balls=[],this.paddle=new pt}}var gt={data:()=>({FIELD_WIDTH:R,FIELD_HEIGHT:F}),mounted(){document.addEventListener("visibilitychange",()=>{"hidden"===document.visibilityState&&this.loop.pause()});const t=new ut;for(let e=3;e<11;e++)for(let s=0;s<14;s++)t.bricks[e][s]=new k(e,s);this.loop=new st(t,this.$refs.root),this.loop.start()},beforeDestroy(){this.visibilityListener&&document.removeEventListener(visibilityListener)},methods:{pause(){this.loop&&(this.loop.running?this.loop.pause():this.loop.start())}}},yt=gt,ft=(s("d88d"),s("2877")),mt=Object(ft["a"])(yt,h,c,!1,null,"0898585d",null),_t=mt.exports,bt={components:{Game:_t}},wt=bt,vt=Object(ft["a"])(wt,o,n,!1,null,null,null),xt=vt.exports;r["a"].config.productionTip=!1,new r["a"]({render:t=>t(xt)}).$mount("#app")},d88d:function(t,e,s){"use strict";var i=s("7206"),r=s.n(i);r.a}});