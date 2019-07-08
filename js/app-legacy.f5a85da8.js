(function(t){function e(e){for(var n,o,a=e[0],h=e[1],l=e[2],u=0,f=[];u<a.length;u++)o=a[u],s[o]&&f.push(s[o][0]),s[o]=0;for(n in h)Object.prototype.hasOwnProperty.call(h,n)&&(t[n]=h[n]);c&&c(e);while(f.length)f.shift()();return r.push.apply(r,l||[]),i()}function i(){for(var t,e=0;e<r.length;e++){for(var i=r[e],n=!0,a=1;a<i.length;a++){var h=i[a];0!==s[h]&&(n=!1)}n&&(r.splice(e--,1),t=o(o.s=i[0]))}return t}var n={},s={app:0},r=[];function o(e){if(n[e])return n[e].exports;var i=n[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,o),i.l=!0,i.exports}o.m=t,o.c=n,o.d=function(t,e,i){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(o.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(i,n,function(e){return t[e]}.bind(null,n));return i},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/breakout/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],h=a.push.bind(a);a.push=e,a=a.slice();for(var l=0;l<a.length;l++)e(a[l]);var c=h;r.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("cd49")},"8dc1":function(t,e,i){"use strict";var n=i("b582"),s=i.n(n);s.a},b582:function(t,e,i){},cd49:function(t,e,i){"use strict";i.r(e);i("cadf"),i("551c"),i("f751"),i("097d");var n=i("2b0e"),s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("Game")],1)},r=[],o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{ref:"root",staticClass:"root"}),i("p",[i("button",{on:{click:t.pause}},[t._v("Pause / Resume")])])])},a=[],h=i("d225"),l=i("b0b4"),c=(i("6762"),i("2fdb"),i("7618"));function u(t,e){if(t>0)return t;throw new TypeError(e+" must be a number greater than zero: "+t+" ("+Object(c["a"])(t)+")")}function f(t,e){if(t>=0)return t;throw new TypeError(e+" must be a number greater than or equal to zero: "+t+" ("+Object(c["a"])(t)+")")}var d,y=function(){function t(e,i){Object(h["a"])(this,t),this._radius=0,this._center=e.clone(),this.radius=i}return Object(l["a"])(t,[{key:"clone",value:function(){return new t(this.center,this.radius)}},{key:"center",get:function(){return this._center},set:function(t){this._center=t.clone()}},{key:"radius",get:function(){return this._radius},set:function(t){this._radius=u(t,"radius")}}]),t}(),p=function(){function t(e,i,n){Object(h["a"])(this,t),this._length=0,this._start=e.clone(),this.length=i,this._orientation=n}return Object(l["a"])(t,[{key:"clone",value:function(){return new t(this.start,this.length,this.orientation)}},{key:"start",get:function(){return this._start},set:function(t){this._start=t.clone()}},{key:"length",get:function(){return this._length},set:function(t){this._length=u(t,"length")}},{key:"orientation",get:function(){return this._orientation},set:function(t){this._orientation=t}}]),t}();(function(t){t["Horizontal"]="Horizontal",t["Vertical"]="Vertical"})(d||(d={}));var v=d.Horizontal,g=d.Vertical,m=function(t,e){var i=[t.center.x-e.start.x,t.center.y-e.start.y],n=[e.orientation===v?e.length:0,e.orientation===g?e.length:0],s=b(n,n),r=b(i,n),o=k(r/s,0,1),a=[n[0]*o+e.start.x-t.center.x,n[1]*o+e.start.y-t.center.y],h=b(a,a);return h<=t.radius*t.radius};function b(t,e){return t[0]*e[0]+t[1]*e[1]}function k(t,e,i){return Math.max(e,Math.min(i,t))}var _,x=function(t,e){var i=e.corners.topLeft.x,n=i+e.width,s=e.corners.topLeft.y,r=s+e.height,o=t.x,a=t.y;return o>=i&&o<=n&&a>=s&&a<=r};(function(t){t["Top"]="Top",t["Bottom"]="Bottom",t["Left"]="Left",t["Right"]="Right",t["Enclosed"]="Enclosed"})(_||(_={}));var w=function(t,e){var i=null;return m(t,e.edges.top)&&(i=L(_.Top,i)),m(t,e.edges.right)&&(i=L(_.Right,i)),m(t,e.edges.bottom)&&(i=L(_.Bottom,i)),m(t,e.edges.left)&&(i=L(_.Left,i)),!i&&x(t.center,e)&&(i=L(_.Enclosed,i)),i};function L(t,e){return e?(e.push(t),e):[t]}var O=function(){function t(e,i){Object(h["a"])(this,t),this._x=0,this._y=0,this.x=e,this.y=i}return Object(l["a"])(t,[{key:"clone",value:function(){return new t(this.x,this.y)}},{key:"x",get:function(){return this._x},set:function(t){this._x=f(t,"x")}},{key:"y",get:function(){return this._y},set:function(t){this._y=f(t,"y")}}]),t}(),j=d.Horizontal,B=d.Vertical,F=function(){function t(e,i,n){Object(h["a"])(this,t),this._width=0,this._height=0,this._topLeft=e.clone(),this._width=u(i,"width"),this._height=u(n,"height"),this._corners=new R(this,this._topLeft),this._edges=new T(this)}return Object(l["a"])(t,[{key:"moveTo",value:function(t,e){this._topLeft.x=t,this._topLeft.y=e,this._corners.update(),this._edges.update()}},{key:"resize",value:function(t,e){this._width=u(t,"width"),this._height=u(e,"height"),this._corners.update(),this._edges.update()}},{key:"clone",value:function(){return new t(this._topLeft,this._width,this._height)}},{key:"width",get:function(){return this._width}},{key:"height",get:function(){return this._height}},{key:"corners",get:function(){return this._corners}},{key:"edges",get:function(){return this._edges}}]),t}(),R=function(){function t(e,i){Object(h["a"])(this,t),this._rectangle=e,this._topLeft=i,this._topRight=new O(i.x+e.width,i.y),this._bottomLeft=new O(i.x,i.y+e.height),this._bottomRight=new O(i.x+e.width,i.y+e.height)}return Object(l["a"])(t,[{key:"update",value:function(){this._topRight.x=this._topLeft.x+this._rectangle.width,this._topRight.y=this._topLeft.y,this._bottomLeft.x=this._topLeft.x,this._bottomLeft.y=this._topLeft.y+this._rectangle.height,this._bottomRight.x=this._topLeft.x+this._rectangle.width,this._bottomRight.y=this._topLeft.y+this._rectangle.height}},{key:"topLeft",get:function(){return this._topLeft}},{key:"topRight",get:function(){return this._topRight}},{key:"bottomLeft",get:function(){return this._bottomLeft}},{key:"bottomRight",get:function(){return this._bottomRight}}]),t}(),T=function(){function t(e){Object(h["a"])(this,t),this._rectangle=e;var i=e.corners,n=i.topLeft,s=i.topRight,r=i.bottomLeft,o=e.width,a=e.height;this._top=new p(n,o,j),this._bottom=new p(r,o,j),this._left=new p(n,a,B),this._right=new p(s,a,B)}return Object(l["a"])(t,[{key:"update",value:function(){var t=this._rectangle.corners,e=t.topLeft,i=t.topRight,n=t.bottomLeft,s=this._rectangle,r=s.width,o=s.height;this._top.start.x=e.x,this._top.start.y=e.y,this._top.length=r,this._bottom.start.x=n.x,this._bottom.start.y=n.y,this._bottom.length=r,this._left.start.x=e.x,this._left.start.y=e.y,this._left.length=o,this._right.start.x=i.x,this._right.start.y=i.y,this._right.length=o}},{key:"top",get:function(){return this._top}},{key:"bottom",get:function(){return this._bottom}},{key:"left",get:function(){return this._left}},{key:"right",get:function(){return this._right}}]),t}(),P=40,S=20,M=function(){function t(e,i){Object(h["a"])(this,t);var n=new O(i*P,e*S);this.rectangle=new F(n,P,S),this.destroyed=!1}return Object(l["a"])(t,[{key:"hitByBall",value:function(){this.destroyed=!0}}]),t}(),E=18,C=14,H=C*P,z=(E+3)*S;function D(){for(var t=[],e=0;e<E;e++){t.push([]);for(var i=0;i<C;i++)t[e].push(null)}return t}var A=7,I=A,U=H-A,G=A,V=z-A,$=function(){function t(e){Object(h["a"])(this,t),this.circle=new y(e,A),this.velocity=[0,0],this.dropped=!1}return Object(l["a"])(t,[{key:"move",value:function(){this.circle.center.x+=this.velocity[0],this.circle.center.y+=this.velocity[1]}},{key:"checkBoundsCollision",value:function(t,e){var i=this.circle,n=i.center,s=i.radius;n.y-s<=0&&this.collisionFromBelow(0),n.x+s>=t&&this.collisionFromLeft(t),n.x-s<=0&&this.collisionFromRight(0),n.y-s>=e&&(this.dropped=!0)}},{key:"checkBrickCollision",value:function(t){var e=w(this.circle,t.rectangle);if(e){t.hitByBall();var i=t.rectangle.edges,n=i.top,s=i.right,r=i.bottom,o=i.left;e.includes(_.Top)&&this.collisionFromAbove(n.start.y),e.includes(_.Right)&&this.collisionFromRight(s.start.x),e.includes(_.Bottom)&&this.collisionFromBelow(r.start.y),e.includes(_.Left)&&this.collisionFromLeft(o.start.x)}}},{key:"checkPaddleCollision",value:function(t){if(!t.balls.includes(this)){var e=w(this.circle,t.rectangle);if(e){var i=t.rectangle.edges,n=i.top,s=i.right,r=i.bottom,o=i.left;e.includes(_.Top)?this.collisionFromAbove(n.start.y):e.includes(_.Right)?this.collisionFromRight(s.start.x):e.includes(_.Left)?this.collisionFromLeft(o.start.x):e.includes(_.Bottom)&&this.collisionFromBelow(r.start.y)}}}},{key:"collisionFromAbove",value:function(t){this.circle.center.y=Math.max(t-this.circle.radius,G),this.velocity[1]>0&&(this.velocity[1]=-this.velocity[1])}},{key:"collisionFromRight",value:function(t){this.circle.center.x=Math.min(t+this.circle.radius,U),this.velocity[0]<0&&(this.velocity[0]=-this.velocity[0])}},{key:"collisionFromBelow",value:function(t){this.circle.center.y=Math.min(t+this.circle.radius,V),this.velocity[1]<0&&(this.velocity[1]=-this.velocity[1])}},{key:"collisionFromLeft",value:function(t){this.circle.center.x=Math.max(t-this.circle.radius,I),this.velocity[0]>0&&(this.velocity[0]=-this.velocity[0])}}]),t}(),q=function(){function t(e){Object(h["a"])(this,t),this.state=e,this.createBall()}return Object(l["a"])(t,[{key:"createBall",value:function(){var t=new $(new O(1,1));this.state.balls.push(t),this.state.paddle.stick(t,!0)}},{key:"process",value:function(){this.handleDroppedBalls()}},{key:"handleDroppedBalls",value:function(){this.state.balls=this.state.balls.filter(function(t){return!t.dropped}),0===this.state.balls.length&&this.createBall()}}]),t}(),J=function(){function t(e,i){Object(h["a"])(this,t),this.state=e,this.root=i,this.running=!1,this.launch=!1,this.moveListener=this.moveHandler.bind(this),this.clickListener=this.clickHandler.bind(this)}return Object(l["a"])(t,[{key:"start",value:function(){this.running||(this.running=!0,this.root.addEventListener("mousemove",this.moveListener),this.root.addEventListener("click",this.clickListener))}},{key:"pause",value:function(){this.running&&(this.running=!1,this.root.removeEventListener("mousemove",this.moveListener),this.root.removeEventListener("click",this.clickListener))}},{key:"moveHandler",value:function(t){this.paddlePosition=t.x}},{key:"clickHandler",value:function(){this.launch=!0}},{key:"process",value:function(){void 0!==this.paddlePosition&&this.state.paddle.move(this.paddlePosition),this.launch&&(this.state.paddle.launch(),this.launch=!1)}}]),t}(),W=function(){function t(e,i){Object(h["a"])(this,t),this.mouse=new J(e,i)}return Object(l["a"])(t,[{key:"start",value:function(){this.mouse.start()}},{key:"pause",value:function(){this.mouse.pause()}},{key:"process",value:function(){this.mouse.process()}}]),t}(),K=(i("ac4d"),i("8a81"),i("ac6a"),1e3/60),N=function(){function t(e){Object(h["a"])(this,t),this.state=e,this.delta=0}return Object(l["a"])(t,[{key:"pause",value:function(t){this.lastTimestamp&&(this.delta+=t-this.lastTimestamp,this.lastTimestamp=void 0)}},{key:"calculate",value:function(t){this.lastTimestamp||(this.lastTimestamp=t),this.delta+=t-this.lastTimestamp,this.lastTimestamp=t;while(this.delta>=K)this.step(),this.delta-=K}},{key:"step",value:function(){var t=!0,e=!1,i=void 0;try{for(var n,s=this.state.balls[Symbol.iterator]();!(t=(n=s.next()).done);t=!0){var r=n.value;this.ballStep(r)}}catch(o){e=!0,i=o}finally{try{t||null==s.return||s.return()}finally{if(e)throw i}}}},{key:"ballStep",value:function(t){t.move(),t.checkPaddleCollision(this.state.paddle),this.ballBricksCollision(t),t.checkBoundsCollision(H,z)}},{key:"ballBricksCollision",value:function(t){for(var e=Math.round(t.circle.center.y/S),i=Math.max(0,e-1),n=Math.min(17,e+1),s=i;s<=n;s++)this.checkBrickRow(this.state.bricks[s],t)}},{key:"checkBrickRow",value:function(t,e){for(var i=0;i<t.length;i++){var n=t[i];n&&(e.checkBrickCollision(n),n.destroyed&&(t[i]=null))}}}]),t}(),Q=(i("6c7b"),function(){function t(e,i){Object(h["a"])(this,t),this.state=e,this.root=this.initRoot(i),this.layer=this.createCanvas(0)}return Object(l["a"])(t,[{key:"initRoot",value:function(t){return t.style.position="relative",t.style.width=H+"px",t.style.height=z+"px",t.style.backgroundColor="#E0F2F1",t}},{key:"createCanvas",value:function(t){var e=document.createElement("canvas"),i=window.devicePixelRatio||1;e.width=H*i,e.height=z*i,e.style.position="absolute",e.style.top="0",e.style.left="0",e.style.width=H+"px",e.style.height=z+"px",e.style.zIndex=t+"",this.root.appendChild(e);var n=e.getContext("2d");if(n)return n.scale(i,i),n;throw new TypeError("Could not initialize rendering context.")}},{key:"pause",value:function(){this.framesThisSecond=void 0,this.lastFpsUpdate=void 0}},{key:"render",value:function(t){this.calculateFps(t),this.clearLayers(),this.renderBricks(),this.renderBalls(),this.renderPaddle(),this.renderFps()}},{key:"calculateFps",value:function(t){this.lastFpsUpdate||(this.lastFpsUpdate=t),t>this.lastFpsUpdate+1e3&&(this.fps=this.framesThisSecond,this.lastFpsUpdate=t,this.framesThisSecond=0),this.framesThisSecond||(this.framesThisSecond=0),this.framesThisSecond++}},{key:"clearLayers",value:function(){this.layer.clearRect(0,0,H,z)}},{key:"renderBricks",value:function(){var t=!0,e=!1,i=void 0;try{for(var n,s=this.state.bricks[Symbol.iterator]();!(t=(n=s.next()).done);t=!0){var r=n.value,o=!0,a=!1,h=void 0;try{for(var l,c=r[Symbol.iterator]();!(o=(l=c.next()).done);o=!0){var u=l.value;u&&this.renderBrick(u)}}catch(f){a=!0,h=f}finally{try{o||null==c.return||c.return()}finally{if(a)throw h}}}}catch(f){e=!0,i=f}finally{try{t||null==s.return||s.return()}finally{if(e)throw i}}}},{key:"renderBrick",value:function(t){var e=this.layer,i=t.rectangle,n=e.createLinearGradient(i.corners.topLeft.x,i.corners.topLeft.y,i.corners.topLeft.x+i.width,i.corners.topLeft.y+i.height);n.addColorStop(0,"#004D40"),n.addColorStop(1,"#4DB6AC"),e.fillStyle=n,e.fillRect(i.corners.topLeft.x,i.corners.topLeft.y,i.width,i.height)}},{key:"renderBalls",value:function(){var t=this;this.state.balls.forEach(function(e){t.renderBall(e)})}},{key:"renderBall",value:function(t){var e=this.layer,i=t.circle;e.fillStyle="#000000",e.beginPath(),e.arc(i.center.x,i.center.y,i.radius,0,2*Math.PI),e.fill()}},{key:"renderPaddle",value:function(){var t=this.state.paddle.rectangle;this.layer.fillStyle="#424242",this.layer.fillRect(t.corners.topLeft.x,t.corners.topLeft.y,t.width,t.height)}},{key:"renderFps",value:function(){this.fps&&(this.layer.strokeStyle="#000000",this.layer.textAlign="right",this.layer.fillText(Math.round(this.fps)+" FPS",H-15,25))}}]),t}()),X=function(){function t(e,i){Object(h["a"])(this,t),this.state=e,this.controls=new W(this.state,i),this.physics=new N(this.state),this.game=new q(this.state),this.graphics=new Q(this.state,i),this.running=!1}return Object(l["a"])(t,[{key:"start",value:function(){this.running||(this.running=!0,this.controls.start(),requestAnimationFrame(this.loop.bind(this)))}},{key:"pause",value:function(){this.running&&(this.running=!1,this.controls.pause(),this.physics.pause(performance.now()),this.graphics.pause())}},{key:"loop",value:function(t){this.running&&(this.controls.process(),this.physics.calculate(t),this.game.process(),this.graphics.render(t),requestAnimationFrame(this.loop.bind(this)))}}]),t}(),Y=60,Z=S,tt=Y/2,et=0,it=H-Y,nt=A,st=H-A,rt=function(){function t(){Object(h["a"])(this,t),this.balls=[];var e=H/2-tt,i=z-2*Z;this.rectangle=new F(new O(e,i),Y,Z)}return Object(l["a"])(t,[{key:"move",value:function(t){var e=this.updatePaddlePosition(t);this.updateBallPositions(e)}},{key:"stick",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];this.balls.push(t);var i=this.rectangle.corners,n=i.topLeft,s=i.topRight;if(e)t.circle.center.x=n.x+tt;else{var r=t.circle.center.x;t.circle.center.x=Math.min(s.x,Math.max(n.x,r))}t.circle.center.y=this.rectangle.edges.top.start.y-A,t.velocity[0]=0,t.velocity[1]=0}},{key:"launch",value:function(){if(0!==this.balls.length){var t=!0,e=!1,i=void 0;try{for(var n,s=this.balls[Symbol.iterator]();!(t=(n=s.next()).done);t=!0){var r=n.value;r.velocity[0]=3,r.velocity[1]=-3}}catch(o){e=!0,i=o}finally{try{t||null==s.return||s.return()}finally{if(e)throw i}}this.balls=[]}}},{key:"updatePaddlePosition",value:function(t){var e=Math.min(it,Math.max(et,t-tt)),i=e-this.rectangle.corners.topLeft.x;return this.rectangle.moveTo(e,this.rectangle.corners.topLeft.y),i}},{key:"updateBallPositions",value:function(t){var e=!0,i=!1,n=void 0;try{for(var s,r=this.balls[Symbol.iterator]();!(e=(s=r.next()).done);e=!0){var o=s.value;this.updateBallPosition(o,t)}}catch(a){i=!0,n=a}finally{try{e||null==r.return||r.return()}finally{if(i)throw n}}}},{key:"updateBallPosition",value:function(t,e){var i=t.circle.center.x,n=Math.min(st,Math.max(nt,i+e));t.circle.center.x=n}}]),t}(),ot=function t(){Object(h["a"])(this,t),this.bricks=D(),this.balls=[],this.paddle=new rt},at={data:function(){return{FIELD_WIDTH:H,FIELD_HEIGHT:z}},mounted:function(){var t=this;document.addEventListener("visibilitychange",function(){"hidden"===document.visibilityState&&t.loop.pause()});for(var e=new ot,i=3;i<11;i++)for(var n=0;n<14;n++)e.bricks[i][n]=new M(i,n);this.loop=new X(e,this.$refs.root),this.loop.start()},beforeDestroy:function(){this.visibilityListener&&document.removeEventListener(visibilityListener)},methods:{pause:function(){this.loop&&(this.loop.running?this.loop.pause():this.loop.start())}}},ht=at,lt=(i("8dc1"),i("2877")),ct=Object(lt["a"])(ht,o,a,!1,null,"57ce111d",null),ut=ct.exports,ft={components:{Game:ut}},dt=ft,yt=Object(lt["a"])(dt,s,r,!1,null,null,null),pt=yt.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(t){return t(pt)}}).$mount("#app")}});