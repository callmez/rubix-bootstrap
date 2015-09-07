// Compiled by ClojureScript 0.0-3269 {:static-fns true, :optimize-constants true}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(f){
if(typeof cljs.core.async.t15115 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t15115 = (function (fn_handler,f,meta15116){
this.fn_handler = fn_handler;
this.f = f;
this.meta15116 = meta15116;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t15115.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15117,meta15116__$1){
var self__ = this;
var _15117__$1 = this;
return (new cljs.core.async.t15115(self__.fn_handler,self__.f,meta15116__$1));
});

cljs.core.async.t15115.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15117){
var self__ = this;
var _15117__$1 = this;
return self__.meta15116;
});

cljs.core.async.t15115.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t15115.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t15115.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t15115.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn-handler","fn-handler",648785851,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"meta15116","meta15116",574276233,null)], null);
});

cljs.core.async.t15115.cljs$lang$type = true;

cljs.core.async.t15115.cljs$lang$ctorStr = "cljs.core.async/t15115";

cljs.core.async.t15115.cljs$lang$ctorPrWriter = (function (this__4886__auto__,writer__4887__auto__,opt__4888__auto__){
return cljs.core._write(writer__4887__auto__,"cljs.core.async/t15115");
});

cljs.core.async.__GT_t15115 = (function cljs$core$async$fn_handler_$___GT_t15115(fn_handler__$1,f__$1,meta15116){
return (new cljs.core.async.t15115(fn_handler__$1,f__$1,meta15116));
});

}

return (new cljs.core.async.t15115(cljs$core$async$fn_handler,f,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 * val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 * buffered, but oldest elements in buffer will be dropped (not
 * transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full.
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
var G__15119 = buff;
if(G__15119){
var bit__4981__auto__ = null;
if(cljs.core.truth_((function (){var or__4307__auto__ = bit__4981__auto__;
if(cljs.core.truth_(or__4307__auto__)){
return or__4307__auto__;
} else {
return G__15119.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__15119.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__15119);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__15119);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 * (filter p) etc or a composition thereof), and an optional exception handler.
 * If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 * transducer is supplied a buffer must be specified. ex-handler must be a
 * fn of one argument - if an exception occurs during transformation it will be called
 * with the thrown value as an argument, and any non-nil return value will be placed
 * in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(){
var G__15121 = arguments.length;
switch (G__15121) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)], 0)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 * return nil if closed. Will park if nothing is available.
 * Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(){
var G__15124 = arguments.length;
switch (G__15124) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler(fn1));
if(cljs.core.truth_(ret)){
var val_15129 = (function (){var G__15125 = ret;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__15125) : cljs.core.deref.call(null,G__15125));
})();
if(cljs.core.truth_(on_caller_QMARK_)){
var G__15126_15130 = val_15129;
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__15126_15130) : fn1.call(null,G__15126_15130));
} else {
cljs.core.async.impl.dispatch.run(((function (val_15129,ret){
return (function (){
var G__15127 = val_15129;
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__15127) : fn1.call(null,G__15127));
});})(val_15129,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 * inside a (go ...) block. Will park if no buffer space is available.
 * Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(){
var G__15132 = arguments.length;
switch (G__15132) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4421__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4421__auto__)){
var ret = temp__4421__auto__;
var G__15133 = ret;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__15133) : cljs.core.deref.call(null,G__15133));
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4421__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler(fn1));
if(cljs.core.truth_(temp__4421__auto__)){
var retb = temp__4421__auto__;
var ret = (function (){var G__15134 = retb;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__15134) : cljs.core.deref.call(null,G__15134));
})();
if(cljs.core.truth_(on_caller_QMARK_)){
var G__15135_15138 = ret;
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__15135_15138) : fn1.call(null,G__15135_15138));
} else {
cljs.core.async.impl.dispatch.run(((function (ret,retb,temp__4421__auto__){
return (function (){
var G__15136 = ret;
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__15136) : fn1.call(null,G__15136));
});})(ret,retb,temp__4421__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5192__auto___15139 = n;
var x_15140 = (0);
while(true){
if((x_15140 < n__5192__auto___15139)){
(a[x_15140] = (0));

var G__15141 = (x_15140 + (1));
x_15140 = G__15141;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,n)){
return a;
} else {
var j = cljs.core.rand_int(i);
(a[i] = (a[j]));

(a[j] = i);

var G__15142 = (i + (1));
i = G__15142;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = (function (){var G__15150 = true;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__15150) : cljs.core.atom.call(null,G__15150));
})();
if(typeof cljs.core.async.t15151 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t15151 = (function (alt_flag,flag,meta15152){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta15152 = meta15152;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t15151.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_15153,meta15152__$1){
var self__ = this;
var _15153__$1 = this;
return (new cljs.core.async.t15151(self__.alt_flag,self__.flag,meta15152__$1));
});})(flag))
;

cljs.core.async.t15151.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_15153){
var self__ = this;
var _15153__$1 = this;
return self__.meta15152;
});})(flag))
;

cljs.core.async.t15151.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t15151.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__15154 = self__.flag;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__15154) : cljs.core.deref.call(null,G__15154));
});})(flag))
;

cljs.core.async.t15151.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__15155_15157 = self__.flag;
var G__15156_15158 = null;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__15155_15157,G__15156_15158) : cljs.core.reset_BANG_.call(null,G__15155_15157,G__15156_15158));

return true;
});})(flag))
;

cljs.core.async.t15151.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta15152","meta15152",-1266155657,null)], null);
});})(flag))
;

cljs.core.async.t15151.cljs$lang$type = true;

cljs.core.async.t15151.cljs$lang$ctorStr = "cljs.core.async/t15151";

cljs.core.async.t15151.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4886__auto__,writer__4887__auto__,opt__4888__auto__){
return cljs.core._write(writer__4887__auto__,"cljs.core.async/t15151");
});})(flag))
;

cljs.core.async.__GT_t15151 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t15151(alt_flag__$1,flag__$1,meta15152){
return (new cljs.core.async.t15151(alt_flag__$1,flag__$1,meta15152));
});})(flag))
;

}

return (new cljs.core.async.t15151(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t15162 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t15162 = (function (alt_handler,flag,cb,meta15163){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta15163 = meta15163;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t15162.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15164,meta15163__$1){
var self__ = this;
var _15164__$1 = this;
return (new cljs.core.async.t15162(self__.alt_handler,self__.flag,self__.cb,meta15163__$1));
});

cljs.core.async.t15162.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15164){
var self__ = this;
var _15164__$1 = this;
return self__.meta15163;
});

cljs.core.async.t15162.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t15162.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});

cljs.core.async.t15162.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t15162.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta15163","meta15163",1113247617,null)], null);
});

cljs.core.async.t15162.cljs$lang$type = true;

cljs.core.async.t15162.cljs$lang$ctorStr = "cljs.core.async/t15162";

cljs.core.async.t15162.cljs$lang$ctorPrWriter = (function (this__4886__auto__,writer__4887__auto__,opt__4888__auto__){
return cljs.core._write(writer__4887__auto__,"cljs.core.async/t15162");
});

cljs.core.async.__GT_t15162 = (function cljs$core$async$alt_handler_$___GT_t15162(alt_handler__$1,flag__$1,cb__$1,meta15163){
return (new cljs.core.async.t15162(alt_handler__$1,flag__$1,cb__$1,meta15163));
});

}

return (new cljs.core.async.t15162(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = cljs.core.constant$keyword$priority.cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(function (){var G__15172 = (0);
return (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1(G__15172) : port.call(null,G__15172));
})():null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (function (){var G__15173 = (1);
return (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1(G__15173) : port.call(null,G__15173));
})();
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__15165_SHARP_){
var G__15174 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__15165_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__15174) : fret.call(null,G__15174));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__15166_SHARP_){
var G__15175 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__15166_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__15175) : fret.call(null,G__15175));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__15176 = vbox;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__15176) : cljs.core.deref.call(null,G__15176));
})(),(function (){var or__4307__auto__ = wport;
if(cljs.core.truth_(or__4307__auto__)){
return or__4307__auto__;
} else {
return port;
}
})()], null));
} else {
var G__15177 = (i + (1));
i = G__15177;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4307__auto__ = ret;
if(cljs.core.truth_(or__4307__auto__)){
return or__4307__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,cljs.core.constant$keyword$default)){
var temp__4423__auto__ = (function (){var and__4295__auto__ = cljs.core.async.impl.protocols.active_QMARK_(flag);
if(cljs.core.truth_(and__4295__auto__)){
return cljs.core.async.impl.protocols.commit(flag);
} else {
return and__4295__auto__;
}
})();
if(cljs.core.truth_(temp__4423__auto__)){
var got = temp__4423__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$default.cljs$core$IFn$_invoke$arity$1(opts),cljs.core.constant$keyword$default], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 * [channel-to-put-to val-to-put], in any combination. Takes will be
 * made as if by <!, and puts will be made as if by >!. Unless
 * the :priority option is true, if more than one port operation is
 * ready a non-deterministic choice will be made. If no operation is
 * ready and a :default value is supplied, [default-val :default] will
 * be returned, otherwise alts! will park until the first operation to
 * become ready completes. Returns [val port] of the completed
 * operation, where val is the value taken for takes, and a
 * boolean (true unless already closed, as per put!) for puts.
 * 
 * opts are passed as :key val ... Supported options:
 * 
 * :default val - the value to use if none of the operations are immediately ready
 * :priority true - (default nil) when true, the operations will be tried in order.
 * 
 * Note: there is no guarantee that the port exps or val exprs will be
 * used, nor in what order should they be, so they should not be
 * depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(){
var argseq__5347__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5347__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__15180){
var map__15181 = p__15180;
var map__15181__$1 = ((cljs.core.seq_QMARK_(map__15181))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15181):map__15181);
var opts = map__15181__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq15178){
var G__15179 = cljs.core.first(seq15178);
var seq15178__$1 = cljs.core.next(seq15178);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__15179,seq15178__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(){
var G__15183 = arguments.length;
switch (G__15183) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__11604__auto___15232 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11604__auto___15232){
return (function (){
var f__11605__auto__ = (function (){var switch__11526__auto__ = ((function (c__11604__auto___15232){
return (function (state_15207){
var state_val_15208 = (state_15207[(1)]);
if((state_val_15208 === (7))){
var inst_15203 = (state_15207[(2)]);
var state_15207__$1 = state_15207;
var statearr_15209_15233 = state_15207__$1;
(statearr_15209_15233[(2)] = inst_15203);

(statearr_15209_15233[(1)] = (3));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_15208 === (1))){
var state_15207__$1 = state_15207;
var statearr_15210_15234 = state_15207__$1;
(statearr_15210_15234[(2)] = null);

(statearr_15210_15234[(1)] = (2));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_15208 === (4))){
var inst_15186 = (state_15207[(7)]);
var inst_15186__$1 = (state_15207[(2)]);
var inst_15187 = (inst_15186__$1 == null);
var state_15207__$1 = (function (){var statearr_15211 = state_15207;
(statearr_15211[(7)] = inst_15186__$1);

return statearr_15211;
})();
if(cljs.core.truth_(inst_15187)){
var statearr_15212_15235 = state_15207__$1;
(statearr_15212_15235[(1)] = (5));

} else {
var statearr_15213_15236 = state_15207__$1;
(statearr_15213_15236[(1)] = (6));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_15208 === (13))){
var state_15207__$1 = state_15207;
var statearr_15214_15237 = state_15207__$1;
(statearr_15214_15237[(2)] = null);

(statearr_15214_15237[(1)] = (14));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_15208 === (6))){
var inst_15186 = (state_15207[(7)]);
var state_15207__$1 = state_15207;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15207__$1,(11),to,inst_15186);
} else {
if((state_val_15208 === (3))){
var inst_15205 = (state_15207[(2)]);
var state_15207__$1 = state_15207;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15207__$1,inst_15205);
} else {
if((state_val_15208 === (12))){
var state_15207__$1 = state_15207;
var statearr_15215_15238 = state_15207__$1;
(statearr_15215_15238[(2)] = null);

(statearr_15215_15238[(1)] = (2));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_15208 === (2))){
var state_15207__$1 = state_15207;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15207__$1,(4),from);
} else {
if((state_val_15208 === (11))){
var inst_15196 = (state_15207[(2)]);
var state_15207__$1 = state_15207;
if(cljs.core.truth_(inst_15196)){
var statearr_15216_15239 = state_15207__$1;
(statearr_15216_15239[(1)] = (12));

} else {
var statearr_15217_15240 = state_15207__$1;
(statearr_15217_15240[(1)] = (13));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_15208 === (9))){
var state_15207__$1 = state_15207;
var statearr_15218_15241 = state_15207__$1;
(statearr_15218_15241[(2)] = null);

(statearr_15218_15241[(1)] = (10));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_15208 === (5))){
var state_15207__$1 = state_15207;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15219_15242 = state_15207__$1;
(statearr_15219_15242[(1)] = (8));

} else {
var statearr_15220_15243 = state_15207__$1;
(statearr_15220_15243[(1)] = (9));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_15208 === (14))){
var inst_15201 = (state_15207[(2)]);
var state_15207__$1 = state_15207;
var statearr_15221_15244 = state_15207__$1;
(statearr_15221_15244[(2)] = inst_15201);

(statearr_15221_15244[(1)] = (7));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_15208 === (10))){
var inst_15193 = (state_15207[(2)]);
var state_15207__$1 = state_15207;
var statearr_15222_15245 = state_15207__$1;
(statearr_15222_15245[(2)] = inst_15193);

(statearr_15222_15245[(1)] = (7));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_15208 === (8))){
var inst_15190 = cljs.core.async.close_BANG_(to);
var state_15207__$1 = state_15207;
var statearr_15223_15246 = state_15207__$1;
(statearr_15223_15246[(2)] = inst_15190);

(statearr_15223_15246[(1)] = (10));


return cljs.core.constant$keyword$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__11604__auto___15232))
;
return ((function (switch__11526__auto__,c__11604__auto___15232){
return (function() {
var cljs$core$async$state_machine__11527__auto__ = null;
var cljs$core$async$state_machine__11527__auto____0 = (function (){
var statearr_15227 = [null,null,null,null,null,null,null,null];
(statearr_15227[(0)] = cljs$core$async$state_machine__11527__auto__);

(statearr_15227[(1)] = (1));

return statearr_15227;
});
var cljs$core$async$state_machine__11527__auto____1 = (function (state_15207){
while(true){
var ret_value__11528__auto__ = (function (){try{while(true){
var result__11529__auto__ = switch__11526__auto__(state_15207);
if(cljs.core.keyword_identical_QMARK_(result__11529__auto__,cljs.core.constant$keyword$recur)){
continue;
} else {
return result__11529__auto__;
}
break;
}
}catch (e15228){if((e15228 instanceof Object)){
var ex__11530__auto__ = e15228;
var statearr_15229_15247 = state_15207;
(statearr_15229_15247[(5)] = ex__11530__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15207);

return cljs.core.constant$keyword$recur;
} else {
throw e15228;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11528__auto__,cljs.core.constant$keyword$recur)){
var G__15248 = state_15207;
state_15207 = G__15248;
continue;
} else {
return ret_value__11528__auto__;
}
break;
}
});
cljs$core$async$state_machine__11527__auto__ = function(state_15207){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11527__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11527__auto____1.call(this,state_15207);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11527__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11527__auto____0;
cljs$core$async$state_machine__11527__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11527__auto____1;
return cljs$core$async$state_machine__11527__auto__;
})()
;})(switch__11526__auto__,c__11604__auto___15232))
})();
var state__11606__auto__ = (function (){var statearr_15230 = (function (){return (f__11605__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11605__auto__.cljs$core$IFn$_invoke$arity$0() : f__11605__auto__.call(null));
})();
(statearr_15230[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11604__auto___15232);

return statearr_15230;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11606__auto__);
});})(c__11604__auto___15232))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))], 0)))].join('')));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = ((function (jobs,results){
return (function (p__15434){
var vec__15435 = p__15434;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15435,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15435,(1),null);
var job = vec__15435;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__11604__auto___15619 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11604__auto___15619,res,vec__15435,v,p,job,jobs,results){
return (function (){
var f__11605__auto__ = (function (){var switch__11526__auto__ = ((function (c__11604__auto___15619,res,vec__15435,v,p,job,jobs,results){
return (function (state_15440){
var state_val_15441 = (state_15440[(1)]);
if((state_val_15441 === (1))){
var state_15440__$1 = state_15440;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15440__$1,(2),res,v);
} else {
if((state_val_15441 === (2))){
var inst_15437 = (state_15440[(2)]);
var inst_15438 = cljs.core.async.close_BANG_(res);
var state_15440__$1 = (function (){var statearr_15442 = state_15440;
(statearr_15442[(7)] = inst_15437);

return statearr_15442;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_15440__$1,inst_15438);
} else {
return null;
}
}
});})(c__11604__auto___15619,res,vec__15435,v,p,job,jobs,results))
;
return ((function (switch__11526__auto__,c__11604__auto___15619,res,vec__15435,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__11527__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__11527__auto____0 = (function (){
var statearr_15446 = [null,null,null,null,null,null,null,null];
(statearr_15446[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__11527__auto__);

(statearr_15446[(1)] = (1));

return statearr_15446;
});
var cljs$core$async$pipeline_STAR__$_state_machine__11527__auto____1 = (function (state_15440){
while(true){
var ret_value__11528__auto__ = (function (){try{while(true){
var result__11529__auto__ = switch__11526__auto__(state_15440);
if(cljs.core.keyword_identical_QMARK_(result__11529__auto__,cljs.core.constant$keyword$recur)){
continue;
} else {
return result__11529__auto__;
}
break;
}
}catch (e15447){if((e15447 instanceof Object)){
var ex__11530__auto__ = e15447;
var statearr_15448_15620 = state_15440;
(statearr_15448_15620[(5)] = ex__11530__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15440);

return cljs.core.constant$keyword$recur;
} else {
throw e15447;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11528__auto__,cljs.core.constant$keyword$recur)){
var G__15621 = state_15440;
state_15440 = G__15621;
continue;
} else {
return ret_value__11528__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__11527__auto__ = function(state_15440){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__11527__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__11527__auto____1.call(this,state_15440);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__11527__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__11527__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__11527__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__11527__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__11527__auto__;
})()
;})(switch__11526__auto__,c__11604__auto___15619,res,vec__15435,v,p,job,jobs,results))
})();
var state__11606__auto__ = (function (){var statearr_15449 = (function (){return (f__11605__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11605__auto__.cljs$core$IFn$_invoke$arity$0() : f__11605__auto__.call(null));
})();
(statearr_15449[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11604__auto___15619);

return statearr_15449;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11606__auto__);
});})(c__11604__auto___15619,res,vec__15435,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__15450){
var vec__15451 = p__15450;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15451,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15451,(1),null);
var job = vec__15451;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var G__15452_15622 = v;
var G__15453_15623 = res;
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(G__15452_15622,G__15453_15623) : xf.call(null,G__15452_15622,G__15453_15623));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results,process))
;
var n__5192__auto___15624 = n;
var __15625 = (0);
while(true){
if((__15625 < n__5192__auto___15624)){
var G__15454_15626 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__15454_15626) {
case "compute":
var c__11604__auto___15628 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__15625,c__11604__auto___15628,G__15454_15626,n__5192__auto___15624,jobs,results,process,async){
return (function (){
var f__11605__auto__ = (function (){var switch__11526__auto__ = ((function (__15625,c__11604__auto___15628,G__15454_15626,n__5192__auto___15624,jobs,results,process,async){
return (function (state_15467){
var state_val_15468 = (state_15467[(1)]);
if((state_val_15468 === (1))){
var state_15467__$1 = state_15467;
var statearr_15469_15629 = state_15467__$1;
(statearr_15469_15629[(2)] = null);

(statearr_15469_15629[(1)] = (2));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_15468 === (2))){
var state_15467__$1 = state_15467;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15467__$1,(4),jobs);
} else {
if((state_val_15468 === (3))){
var inst_15465 = (state_15467[(2)]);
var state_15467__$1 = state_15467;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15467__$1,inst_15465);
} else {
if((state_val_15468 === (4))){
var inst_15457 = (state_15467[(2)]);
var inst_15458 = process(inst_15457);
var state_15467__$1 = state_15467;
if(cljs.core.truth_(inst_15458)){
var statearr_15470_15630 = state_15467__$1;
(statearr_15470_15630[(1)] = (5));

} else {
var statearr_15471_15631 = state_15467__$1;
(statearr_15471_15631[(1)] = (6));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_15468 === (5))){
var state_15467__$1 = state_15467;
var statearr_15472_15632 = state_15467__$1;
(statearr_15472_15632[(2)] = null);

(statearr_15472_15632[(1)] = (2));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_15468 === (6))){
var state_15467__$1 = state_15467;
var statearr_15473_15633 = state_15467__$1;
(statearr_15473_15633[(2)] = null);

(statearr_15473_15633[(1)] = (7));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_15468 === (7))){
var inst_15463 = (state_15467[(2)]);
var state_15467__$1 = state_15467;
var statearr_15474_15634 = state_15467__$1;
(statearr_15474_15634[(2)] = inst_15463);

(statearr_15474_15634[(1)] = (3));


return cljs.core.constant$keyword$recur;
} else {
return null;
}
}
}
}
}
}
}
});})(__15625,c__11604__auto___15628,G__15454_15626,n__5192__auto___15624,jobs,results,process,async))
;
return ((function (__15625,switch__11526__auto__,c__11604__auto___15628,G__15454_15626,n__5192__auto___15624,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__11527__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__11527__auto____0 = (function (){
var statearr_15478 = [null,null,null,null,null,null,null];
(statearr_15478[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__11527__auto__);

(statearr_15478[(1)] = (1));

return statearr_15478;
});
var cljs$core$async$pipeline_STAR__$_state_machine__11527__auto____1 = (function (state_15467){
while(true){
var ret_value__11528__auto__ = (function (){try{while(true){
var result__11529__auto__ = switch__11526__auto__(state_15467);
if(cljs.core.keyword_identical_QMARK_(result__11529__auto__,cljs.core.constant$keyword$recur)){
continue;
} else {
return result__11529__auto__;
}
break;
}
}catch (e15479){if((e15479 instanceof Object)){
var ex__11530__auto__ = e15479;
var statearr_15480_15635 = state_15467;
(statearr_15480_15635[(5)] = ex__11530__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15467);

return cljs.core.constant$keyword$recur;
} else {
throw e15479;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11528__auto__,cljs.core.constant$keyword$recur)){
var G__15636 = state_15467;
state_15467 = G__15636;
continue;
} else {
return ret_value__11528__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__11527__auto__ = function(state_15467){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__11527__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__11527__auto____1.call(this,state_15467);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__11527__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__11527__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__11527__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__11527__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__11527__auto__;
})()
;})(__15625,switch__11526__auto__,c__11604__auto___15628,G__15454_15626,n__5192__auto___15624,jobs,results,process,async))
})();
var state__11606__auto__ = (function (){var statearr_15481 = (function (){return (f__11605__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11605__auto__.cljs$core$IFn$_invoke$arity$0() : f__11605__auto__.call(null));
})();
(statearr_15481[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11604__auto___15628);

return statearr_15481;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11606__auto__);
});})(__15625,c__11604__auto___15628,G__15454_15626,n__5192__auto___15624,jobs,results,process,async))
);


break;
case "async":
var c__11604__auto___15637 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__15625,c__11604__auto___15637,G__15454_15626,n__5192__auto___15624,jobs,results,process,async){
return (function (){
var f__11605__auto__ = (function (){var switch__11526__auto__ = ((function (__15625,c__11604__auto___15637,G__15454_15626,n__5192__auto___15624,jobs,results,process,async){
return (function (state_15494){
var state_val_15495 = (state_15494[(1)]);
if((state_val_15495 === (1))){
var state_15494__$1 = state_15494;
var statearr_15496_15638 = state_15494__$1;
(statearr_15496_15638[(2)] = null);

(statearr_15496_15638[(1)] = (2));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_15495 === (2))){
var state_15494__$1 = state_15494;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15494__$1,(4),jobs);
} else {
if((state_val_15495 === (3))){
var inst_15492 = (state_15494[(2)]);
var state_15494__$1 = state_15494;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15494__$1,inst_15492);
} else {
if((state_val_15495 === (4))){
var inst_15484 = (state_15494[(2)]);
var inst_15485 = async(inst_15484);
var state_15494__$1 = state_15494;
if(cljs.core.truth_(inst_15485)){
var statearr_15497_15639 = state_15494__$1;
(statearr_15497_15639[(1)] = (5));

} else {
var statearr_15498_15640 = state_15494__$1;
(statearr_15498_15640[(1)] = (6));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_15495 === (5))){
var state_15494__$1 = state_15494;
var statearr_15499_15641 = state_15494__$1;
(statearr_15499_15641[(2)] = null);

(statearr_15499_15641[(1)] = (2));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_15495 === (6))){
var state_15494__$1 = state_15494;
var statearr_15500_15642 = state_15494__$1;
(statearr_15500_15642[(2)] = null);

(statearr_15500_15642[(1)] = (7));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_15495 === (7))){
var inst_15490 = (state_15494[(2)]);
var state_15494__$1 = state_15494;
var statearr_15501_15643 = state_15494__$1;
(statearr_15501_15643[(2)] = inst_15490);

(statearr_15501_15643[(1)] = (3));


return cljs.core.constant$keyword$recur;
} else {
return null;
}
}
}
}
}
}
}
});})(__15625,c__11604__auto___15637,G__15454_15626,n__5192__auto___15624,jobs,results,process,async))
;
return ((function (__15625,switch__11526__auto__,c__11604__auto___15637,G__15454_15626,n__5192__auto___15624,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__11527__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__11527__auto____0 = (function (){
var statearr_15505 = [null,null,null,null,null,null,null];
(statearr_15505[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__11527__auto__);

(statearr_15505[(1)] = (1));

return statearr_15505;
});
var cljs$core$async$pipeline_STAR__$_state_machine__11527__auto____1 = (function (state_15494){
while(true){
var ret_value__11528__auto__ = (function (){try{while(true){
var result__11529__auto__ = switch__11526__auto__(state_15494);
if(cljs.core.keyword_identical_QMARK_(result__11529__auto__,cljs.core.constant$keyword$recur)){
continue;
} else {
return result__11529__auto__;
}
break;
}
}catch (e15506){if((e15506 instanceof Object)){
var ex__11530__auto__ = e15506;
var statearr_15507_15644 = state_15494;
(statearr_15507_15644[(5)] = ex__11530__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15494);

return cljs.core.constant$keyword$recur;
} else {
throw e15506;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11528__auto__,cljs.core.constant$keyword$recur)){
var G__15645 = state_15494;
state_15494 = G__15645;
continue;
} else {
return ret_value__11528__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__11527__auto__ = function(state_15494){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__11527__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__11527__auto____1.call(this,state_15494);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__11527__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__11527__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__11527__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__11527__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__11527__auto__;
})()
;})(__15625,switch__11526__auto__,c__11604__auto___15637,G__15454_15626,n__5192__auto___15624,jobs,results,process,async))
})();
var state__11606__auto__ = (function (){var statearr_15508 = (function (){return (f__11605__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11605__auto__.cljs$core$IFn$_invoke$arity$0() : f__11605__auto__.call(null));
})();
(statearr_15508[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11604__auto___15637);

return statearr_15508;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11606__auto__);
});})(__15625,c__11604__auto___15637,G__15454_15626,n__5192__auto___15624,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__15646 = (__15625 + (1));
__15625 = G__15646;
continue;
} else {
}
break;
}

var c__11604__auto___15647 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11604__auto___15647,jobs,results,process,async){
return (function (){
var f__11605__auto__ = (function (){var switch__11526__auto__ = ((function (c__11604__auto___15647,jobs,results,process,async){
return (function (state_15530){
var state_val_15531 = (state_15530[(1)]);
if((state_val_15531 === (1))){
var state_15530__$1 = state_15530;
var statearr_15532_15648 = state_15530__$1;
(statearr_15532_15648[(2)] = null);

(statearr_15532_15648[(1)] = (2));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_15531 === (2))){
var state_15530__$1 = state_15530;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15530__$1,(4),from);
} else {
if((state_val_15531 === (3))){
var inst_15528 = (state_15530[(2)]);
var state_15530__$1 = state_15530;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15530__$1,inst_15528);
} else {
if((state_val_15531 === (4))){
var inst_15511 = (state_15530[(7)]);
var inst_15511__$1 = (state_15530[(2)]);
var inst_15512 = (inst_15511__$1 == null);
var state_15530__$1 = (function (){var statearr_15533 = state_15530;
(statearr_15533[(7)] = inst_15511__$1);

return statearr_15533;
})();
if(cljs.core.truth_(inst_15512)){
var statearr_15534_15649 = state_15530__$1;
(statearr_15534_15649[(1)] = (5));

} else {
var statearr_15535_15650 = state_15530__$1;
(statearr_15535_15650[(1)] = (6));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_15531 === (5))){
var inst_15514 = cljs.core.async.close_BANG_(jobs);
var state_15530__$1 = state_15530;
var statearr_15536_15651 = state_15530__$1;
(statearr_15536_15651[(2)] = inst_15514);

(statearr_15536_15651[(1)] = (7));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_15531 === (6))){
var inst_15511 = (state_15530[(7)]);
var inst_15516 = (state_15530[(8)]);
var inst_15516__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_15517 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_15518 = [inst_15511,inst_15516__$1];
var inst_15519 = (new cljs.core.PersistentVector(null,2,(5),inst_15517,inst_15518,null));
var state_15530__$1 = (function (){var statearr_15537 = state_15530;
(statearr_15537[(8)] = inst_15516__$1);

return statearr_15537;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15530__$1,(8),jobs,inst_15519);
} else {
if((state_val_15531 === (7))){
var inst_15526 = (state_15530[(2)]);
var state_15530__$1 = state_15530;
var statearr_15538_15652 = state_15530__$1;
(statearr_15538_15652[(2)] = inst_15526);

(statearr_15538_15652[(1)] = (3));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_15531 === (8))){
var inst_15516 = (state_15530[(8)]);
var inst_15521 = (state_15530[(2)]);
var state_15530__$1 = (function (){var statearr_15539 = state_15530;
(statearr_15539[(9)] = inst_15521);

return statearr_15539;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15530__$1,(9),results,inst_15516);
} else {
if((state_val_15531 === (9))){
var inst_15523 = (state_15530[(2)]);
var state_15530__$1 = (function (){var statearr_15540 = state_15530;
(statearr_15540[(10)] = inst_15523);

return statearr_15540;
})();
var statearr_15541_15653 = state_15530__$1;
(statearr_15541_15653[(2)] = null);

(statearr_15541_15653[(1)] = (2));


return cljs.core.constant$keyword$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__11604__auto___15647,jobs,results,process,async))
;
return ((function (switch__11526__auto__,c__11604__auto___15647,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__11527__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__11527__auto____0 = (function (){
var statearr_15545 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_15545[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__11527__auto__);

(statearr_15545[(1)] = (1));

return statearr_15545;
});
var cljs$core$async$pipeline_STAR__$_state_machine__11527__auto____1 = (function (state_15530){
while(true){
var ret_value__11528__auto__ = (function (){try{while(true){
var result__11529__auto__ = switch__11526__auto__(state_15530);
if(cljs.core.keyword_identical_QMARK_(result__11529__auto__,cljs.core.constant$keyword$recur)){
continue;
} else {
return result__11529__auto__;
}
break;
}
}catch (e15546){if((e15546 instanceof Object)){
var ex__11530__auto__ = e15546;
var statearr_15547_15654 = state_15530;
(statearr_15547_15654[(5)] = ex__11530__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15530);

return cljs.core.constant$keyword$recur;
} else {
throw e15546;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11528__auto__,cljs.core.constant$keyword$recur)){
var G__15655 = state_15530;
state_15530 = G__15655;
continue;
} else {
return ret_value__11528__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__11527__auto__ = function(state_15530){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__11527__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__11527__auto____1.call(this,state_15530);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__11527__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__11527__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__11527__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__11527__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__11527__auto__;
})()
;})(switch__11526__auto__,c__11604__auto___15647,jobs,results,process,async))
})();
var state__11606__auto__ = (function (){var statearr_15548 = (function (){return (f__11605__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11605__auto__.cljs$core$IFn$_invoke$arity$0() : f__11605__auto__.call(null));
})();
(statearr_15548[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11604__auto___15647);

return statearr_15548;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11606__auto__);
});})(c__11604__auto___15647,jobs,results,process,async))
);


var c__11604__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11604__auto__,jobs,results,process,async){
return (function (){
var f__11605__auto__ = (function (){var switch__11526__auto__ = ((function (c__11604__auto__,jobs,results,process,async){
return (function (state_15586){
var state_val_15587 = (state_15586[(1)]);
if((state_val_15587 === (7))){
var inst_15582 = (state_15586[(2)]);
var state_15586__$1 = state_15586;
var statearr_15588_15656 = state_15586__$1;
(statearr_15588_15656[(2)] = inst_15582);

(statearr_15588_15656[(1)] = (3));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_15587 === (20))){
var state_15586__$1 = state_15586;
var statearr_15589_15657 = state_15586__$1;
(statearr_15589_15657[(2)] = null);

(statearr_15589_15657[(1)] = (21));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_15587 === (1))){
var state_15586__$1 = state_15586;
var statearr_15590_15658 = state_15586__$1;
(statearr_15590_15658[(2)] = null);

(statearr_15590_15658[(1)] = (2));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_15587 === (4))){
var inst_15551 = (state_15586[(7)]);
var inst_15551__$1 = (state_15586[(2)]);
var inst_15552 = (inst_15551__$1 == null);
var state_15586__$1 = (function (){var statearr_15591 = state_15586;
(statearr_15591[(7)] = inst_15551__$1);

return statearr_15591;
})();
if(cljs.core.truth_(inst_15552)){
var statearr_15592_15659 = state_15586__$1;
(statearr_15592_15659[(1)] = (5));

} else {
var statearr_15593_15660 = state_15586__$1;
(statearr_15593_15660[(1)] = (6));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_15587 === (15))){
var inst_15564 = (state_15586[(8)]);
var state_15586__$1 = state_15586;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15586__$1,(18),to,inst_15564);
} else {
if((state_val_15587 === (21))){
var inst_15577 = (state_15586[(2)]);
var state_15586__$1 = state_15586;
var statearr_15594_15661 = state_15586__$1;
(statearr_15594_15661[(2)] = inst_15577);

(statearr_15594_15661[(1)] = (13));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_15587 === (13))){
var inst_15579 = (state_15586[(2)]);
var state_15586__$1 = (function (){var statearr_15595 = state_15586;
(statearr_15595[(9)] = inst_15579);

return statearr_15595;
})();
var statearr_15596_15662 = state_15586__$1;
(statearr_15596_15662[(2)] = null);

(statearr_15596_15662[(1)] = (2));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_15587 === (6))){
var inst_15551 = (state_15586[(7)]);
var state_15586__$1 = state_15586;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15586__$1,(11),inst_15551);
} else {
if((state_val_15587 === (17))){
var inst_15572 = (state_15586[(2)]);
var state_15586__$1 = state_15586;
if(cljs.core.truth_(inst_15572)){
var statearr_15597_15663 = state_15586__$1;
(statearr_15597_15663[(1)] = (19));

} else {
var statearr_15598_15664 = state_15586__$1;
(statearr_15598_15664[(1)] = (20));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_15587 === (3))){
var inst_15584 = (state_15586[(2)]);
var state_15586__$1 = state_15586;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15586__$1,inst_15584);
} else {
if((state_val_15587 === (12))){
var inst_15561 = (state_15586[(10)]);
var state_15586__$1 = state_15586;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15586__$1,(14),inst_15561);
} else {
if((state_val_15587 === (2))){
var state_15586__$1 = state_15586;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15586__$1,(4),results);
} else {
if((state_val_15587 === (19))){
var state_15586__$1 = state_15586;
var statearr_15599_15665 = state_15586__$1;
(statearr_15599_15665[(2)] = null);

(statearr_15599_15665[(1)] = (12));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_15587 === (11))){
var inst_15561 = (state_15586[(2)]);
var state_15586__$1 = (function (){var statearr_15600 = state_15586;
(statearr_15600[(10)] = inst_15561);

return statearr_15600;
})();
var statearr_15601_15666 = state_15586__$1;
(statearr_15601_15666[(2)] = null);

(statearr_15601_15666[(1)] = (12));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_15587 === (9))){
var state_15586__$1 = state_15586;
var statearr_15602_15667 = state_15586__$1;
(statearr_15602_15667[(2)] = null);

(statearr_15602_15667[(1)] = (10));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_15587 === (5))){
var state_15586__$1 = state_15586;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15603_15668 = state_15586__$1;
(statearr_15603_15668[(1)] = (8));

} else {
var statearr_15604_15669 = state_15586__$1;
(statearr_15604_15669[(1)] = (9));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_15587 === (14))){
var inst_15566 = (state_15586[(11)]);
var inst_15564 = (state_15586[(8)]);
var inst_15564__$1 = (state_15586[(2)]);
var inst_15565 = (inst_15564__$1 == null);
var inst_15566__$1 = cljs.core.not(inst_15565);
var state_15586__$1 = (function (){var statearr_15605 = state_15586;
(statearr_15605[(11)] = inst_15566__$1);

(statearr_15605[(8)] = inst_15564__$1);

return statearr_15605;
})();
if(inst_15566__$1){
var statearr_15606_15670 = state_15586__$1;
(statearr_15606_15670[(1)] = (15));

} else {
var statearr_15607_15671 = state_15586__$1;
(statearr_15607_15671[(1)] = (16));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_15587 === (16))){
var inst_15566 = (state_15586[(11)]);
var state_15586__$1 = state_15586;
var statearr_15608_15672 = state_15586__$1;
(statearr_15608_15672[(2)] = inst_15566);

(statearr_15608_15672[(1)] = (17));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_15587 === (10))){
var inst_15558 = (state_15586[(2)]);
var state_15586__$1 = state_15586;
var statearr_15609_15673 = state_15586__$1;
(statearr_15609_15673[(2)] = inst_15558);

(statearr_15609_15673[(1)] = (7));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_15587 === (18))){
var inst_15569 = (state_15586[(2)]);
var state_15586__$1 = state_15586;
var statearr_15610_15674 = state_15586__$1;
(statearr_15610_15674[(2)] = inst_15569);

(statearr_15610_15674[(1)] = (17));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_15587 === (8))){
var inst_15555 = cljs.core.async.close_BANG_(to);
var state_15586__$1 = state_15586;
var statearr_15611_15675 = state_15586__$1;
(statearr_15611_15675[(2)] = inst_15555);

(statearr_15611_15675[(1)] = (10));


return cljs.core.constant$keyword$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__11604__auto__,jobs,results,process,async))
;
return ((function (switch__11526__auto__,c__11604__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__11527__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__11527__auto____0 = (function (){
var statearr_15615 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15615[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__11527__auto__);

(statearr_15615[(1)] = (1));

return statearr_15615;
});
var cljs$core$async$pipeline_STAR__$_state_machine__11527__auto____1 = (function (state_15586){
while(true){
var ret_value__11528__auto__ = (function (){try{while(true){
var result__11529__auto__ = switch__11526__auto__(state_15586);
if(cljs.core.keyword_identical_QMARK_(result__11529__auto__,cljs.core.constant$keyword$recur)){
continue;
} else {
return result__11529__auto__;
}
break;
}
}catch (e15616){if((e15616 instanceof Object)){
var ex__11530__auto__ = e15616;
var statearr_15617_15676 = state_15586;
(statearr_15617_15676[(5)] = ex__11530__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15586);

return cljs.core.constant$keyword$recur;
} else {
throw e15616;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11528__auto__,cljs.core.constant$keyword$recur)){
var G__15677 = state_15586;
state_15586 = G__15677;
continue;
} else {
return ret_value__11528__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__11527__auto__ = function(state_15586){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__11527__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__11527__auto____1.call(this,state_15586);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__11527__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__11527__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__11527__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__11527__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__11527__auto__;
})()
;})(switch__11526__auto__,c__11604__auto__,jobs,results,process,async))
})();
var state__11606__auto__ = (function (){var statearr_15618 = (function (){return (f__11605__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11605__auto__.cljs$core$IFn$_invoke$arity$0() : f__11605__auto__.call(null));
})();
(statearr_15618[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11604__auto__);

return statearr_15618;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11606__auto__);
});})(c__11604__auto__,jobs,results,process,async))
);

return c__11604__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel, subject to the async function af, with parallelism n. af
 * must be a function of two arguments, the first an input value and
 * the second a channel on which to place the result(s). af must close!
 * the channel before returning.  The presumption is that af will
 * return immediately, having launched some asynchronous operation
 * whose completion/callback will manipulate the result channel. Outputs
 * will be returned in order relative to  the inputs. By default, the to
 * channel will be closed when the from channel closes, but can be
 * determined by the close?  parameter. Will stop consuming the from
 * channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(){
var G__15679 = arguments.length;
switch (G__15679) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,cljs.core.constant$keyword$async);
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
/**
 * Takes elements from the from channel and supplies them to the to
 * channel, subject to the transducer xf, with parallelism n. Because
 * it is parallel, the transducer will be applied independently to each
 * element, not across elements, and may produce zero or more outputs
 * per input.  Outputs will be returned in order relative to the
 * inputs. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes.
 * 
 * Note this is supplied for API compatibility with the Clojure version.
 * Values of N > 1 will not result in actual concurrency in a
 * single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(){
var G__15682 = arguments.length;
switch (G__15682) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,cljs.core.constant$keyword$compute);
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
/**
 * Takes a predicate and a source channel and returns a vector of two
 * channels, the first of which will contain the values for which the
 * predicate returned true, the second those for which it returned
 * false.
 * 
 * The out channels will be unbuffered by default, or two buf-or-ns can
 * be supplied. The channels will close after the source channel has
 * closed.
 */
cljs.core.async.split = (function cljs$core$async$split(){
var G__15685 = arguments.length;
switch (G__15685) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__11604__auto___15738 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11604__auto___15738,tc,fc){
return (function (){
var f__11605__auto__ = (function (){var switch__11526__auto__ = ((function (c__11604__auto___15738,tc,fc){
return (function (state_15711){
var state_val_15712 = (state_15711[(1)]);
if((state_val_15712 === (7))){
var inst_15707 = (state_15711[(2)]);
var state_15711__$1 = state_15711;
var statearr_15713_15739 = state_15711__$1;
(statearr_15713_15739[(2)] = inst_15707);

(statearr_15713_15739[(1)] = (3));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_15712 === (1))){
var state_15711__$1 = state_15711;
var statearr_15714_15740 = state_15711__$1;
(statearr_15714_15740[(2)] = null);

(statearr_15714_15740[(1)] = (2));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_15712 === (4))){
var inst_15688 = (state_15711[(7)]);
var inst_15688__$1 = (state_15711[(2)]);
var inst_15689 = (inst_15688__$1 == null);
var state_15711__$1 = (function (){var statearr_15715 = state_15711;
(statearr_15715[(7)] = inst_15688__$1);

return statearr_15715;
})();
if(cljs.core.truth_(inst_15689)){
var statearr_15716_15741 = state_15711__$1;
(statearr_15716_15741[(1)] = (5));

} else {
var statearr_15717_15742 = state_15711__$1;
(statearr_15717_15742[(1)] = (6));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_15712 === (13))){
var state_15711__$1 = state_15711;
var statearr_15718_15743 = state_15711__$1;
(statearr_15718_15743[(2)] = null);

(statearr_15718_15743[(1)] = (14));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_15712 === (6))){
var inst_15688 = (state_15711[(7)]);
var inst_15694 = (function (){var G__15719 = inst_15688;
return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__15719) : p.call(null,G__15719));
})();
var state_15711__$1 = state_15711;
if(cljs.core.truth_(inst_15694)){
var statearr_15720_15744 = state_15711__$1;
(statearr_15720_15744[(1)] = (9));

} else {
var statearr_15721_15745 = state_15711__$1;
(statearr_15721_15745[(1)] = (10));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_15712 === (3))){
var inst_15709 = (state_15711[(2)]);
var state_15711__$1 = state_15711;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15711__$1,inst_15709);
} else {
if((state_val_15712 === (12))){
var state_15711__$1 = state_15711;
var statearr_15722_15746 = state_15711__$1;
(statearr_15722_15746[(2)] = null);

(statearr_15722_15746[(1)] = (2));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_15712 === (2))){
var state_15711__$1 = state_15711;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15711__$1,(4),ch);
} else {
if((state_val_15712 === (11))){
var inst_15688 = (state_15711[(7)]);
var inst_15698 = (state_15711[(2)]);
var state_15711__$1 = state_15711;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15711__$1,(8),inst_15698,inst_15688);
} else {
if((state_val_15712 === (9))){
var state_15711__$1 = state_15711;
var statearr_15723_15747 = state_15711__$1;
(statearr_15723_15747[(2)] = tc);

(statearr_15723_15747[(1)] = (11));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_15712 === (5))){
var inst_15691 = cljs.core.async.close_BANG_(tc);
var inst_15692 = cljs.core.async.close_BANG_(fc);
var state_15711__$1 = (function (){var statearr_15724 = state_15711;
(statearr_15724[(8)] = inst_15691);

return statearr_15724;
})();
var statearr_15725_15748 = state_15711__$1;
(statearr_15725_15748[(2)] = inst_15692);

(statearr_15725_15748[(1)] = (7));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_15712 === (14))){
var inst_15705 = (state_15711[(2)]);
var state_15711__$1 = state_15711;
var statearr_15726_15749 = state_15711__$1;
(statearr_15726_15749[(2)] = inst_15705);

(statearr_15726_15749[(1)] = (7));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_15712 === (10))){
var state_15711__$1 = state_15711;
var statearr_15727_15750 = state_15711__$1;
(statearr_15727_15750[(2)] = fc);

(statearr_15727_15750[(1)] = (11));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_15712 === (8))){
var inst_15700 = (state_15711[(2)]);
var state_15711__$1 = state_15711;
if(cljs.core.truth_(inst_15700)){
var statearr_15728_15751 = state_15711__$1;
(statearr_15728_15751[(1)] = (12));

} else {
var statearr_15729_15752 = state_15711__$1;
(statearr_15729_15752[(1)] = (13));

}

return cljs.core.constant$keyword$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__11604__auto___15738,tc,fc))
;
return ((function (switch__11526__auto__,c__11604__auto___15738,tc,fc){
return (function() {
var cljs$core$async$state_machine__11527__auto__ = null;
var cljs$core$async$state_machine__11527__auto____0 = (function (){
var statearr_15733 = [null,null,null,null,null,null,null,null,null];
(statearr_15733[(0)] = cljs$core$async$state_machine__11527__auto__);

(statearr_15733[(1)] = (1));

return statearr_15733;
});
var cljs$core$async$state_machine__11527__auto____1 = (function (state_15711){
while(true){
var ret_value__11528__auto__ = (function (){try{while(true){
var result__11529__auto__ = switch__11526__auto__(state_15711);
if(cljs.core.keyword_identical_QMARK_(result__11529__auto__,cljs.core.constant$keyword$recur)){
continue;
} else {
return result__11529__auto__;
}
break;
}
}catch (e15734){if((e15734 instanceof Object)){
var ex__11530__auto__ = e15734;
var statearr_15735_15753 = state_15711;
(statearr_15735_15753[(5)] = ex__11530__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15711);

return cljs.core.constant$keyword$recur;
} else {
throw e15734;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11528__auto__,cljs.core.constant$keyword$recur)){
var G__15754 = state_15711;
state_15711 = G__15754;
continue;
} else {
return ret_value__11528__auto__;
}
break;
}
});
cljs$core$async$state_machine__11527__auto__ = function(state_15711){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11527__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11527__auto____1.call(this,state_15711);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11527__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11527__auto____0;
cljs$core$async$state_machine__11527__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11527__auto____1;
return cljs$core$async$state_machine__11527__auto__;
})()
;})(switch__11526__auto__,c__11604__auto___15738,tc,fc))
})();
var state__11606__auto__ = (function (){var statearr_15736 = (function (){return (f__11605__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11605__auto__.cljs$core$IFn$_invoke$arity$0() : f__11605__auto__.call(null));
})();
(statearr_15736[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11604__auto___15738);

return statearr_15736;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11606__auto__);
});})(c__11604__auto___15738,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 * the single result of applying f to init and the first item from the
 * channel, then applying f to that result and the 2nd item, etc. If
 * the channel closes without yielding items, returns init and f is not
 * called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__11604__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11604__auto__){
return (function (){
var f__11605__auto__ = (function (){var switch__11526__auto__ = ((function (c__11604__auto__){
return (function (state_15803){
var state_val_15804 = (state_15803[(1)]);
if((state_val_15804 === (1))){
var inst_15789 = init;
var state_15803__$1 = (function (){var statearr_15805 = state_15803;
(statearr_15805[(7)] = inst_15789);

return statearr_15805;
})();
var statearr_15806_15823 = state_15803__$1;
(statearr_15806_15823[(2)] = null);

(statearr_15806_15823[(1)] = (2));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_15804 === (2))){
var state_15803__$1 = state_15803;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15803__$1,(4),ch);
} else {
if((state_val_15804 === (3))){
var inst_15801 = (state_15803[(2)]);
var state_15803__$1 = state_15803;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15803__$1,inst_15801);
} else {
if((state_val_15804 === (4))){
var inst_15792 = (state_15803[(8)]);
var inst_15792__$1 = (state_15803[(2)]);
var inst_15793 = (inst_15792__$1 == null);
var state_15803__$1 = (function (){var statearr_15807 = state_15803;
(statearr_15807[(8)] = inst_15792__$1);

return statearr_15807;
})();
if(cljs.core.truth_(inst_15793)){
var statearr_15808_15824 = state_15803__$1;
(statearr_15808_15824[(1)] = (5));

} else {
var statearr_15809_15825 = state_15803__$1;
(statearr_15809_15825[(1)] = (6));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_15804 === (5))){
var inst_15789 = (state_15803[(7)]);
var state_15803__$1 = state_15803;
var statearr_15810_15826 = state_15803__$1;
(statearr_15810_15826[(2)] = inst_15789);

(statearr_15810_15826[(1)] = (7));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_15804 === (6))){
var inst_15789 = (state_15803[(7)]);
var inst_15792 = (state_15803[(8)]);
var inst_15796 = (function (){var G__15811 = inst_15789;
var G__15812 = inst_15792;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__15811,G__15812) : f.call(null,G__15811,G__15812));
})();
var inst_15789__$1 = inst_15796;
var state_15803__$1 = (function (){var statearr_15813 = state_15803;
(statearr_15813[(7)] = inst_15789__$1);

return statearr_15813;
})();
var statearr_15814_15827 = state_15803__$1;
(statearr_15814_15827[(2)] = null);

(statearr_15814_15827[(1)] = (2));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_15804 === (7))){
var inst_15799 = (state_15803[(2)]);
var state_15803__$1 = state_15803;
var statearr_15815_15828 = state_15803__$1;
(statearr_15815_15828[(2)] = inst_15799);

(statearr_15815_15828[(1)] = (3));


return cljs.core.constant$keyword$recur;
} else {
return null;
}
}
}
}
}
}
}
});})(c__11604__auto__))
;
return ((function (switch__11526__auto__,c__11604__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__11527__auto__ = null;
var cljs$core$async$reduce_$_state_machine__11527__auto____0 = (function (){
var statearr_15819 = [null,null,null,null,null,null,null,null,null];
(statearr_15819[(0)] = cljs$core$async$reduce_$_state_machine__11527__auto__);

(statearr_15819[(1)] = (1));

return statearr_15819;
});
var cljs$core$async$reduce_$_state_machine__11527__auto____1 = (function (state_15803){
while(true){
var ret_value__11528__auto__ = (function (){try{while(true){
var result__11529__auto__ = switch__11526__auto__(state_15803);
if(cljs.core.keyword_identical_QMARK_(result__11529__auto__,cljs.core.constant$keyword$recur)){
continue;
} else {
return result__11529__auto__;
}
break;
}
}catch (e15820){if((e15820 instanceof Object)){
var ex__11530__auto__ = e15820;
var statearr_15821_15829 = state_15803;
(statearr_15821_15829[(5)] = ex__11530__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15803);

return cljs.core.constant$keyword$recur;
} else {
throw e15820;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11528__auto__,cljs.core.constant$keyword$recur)){
var G__15830 = state_15803;
state_15803 = G__15830;
continue;
} else {
return ret_value__11528__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__11527__auto__ = function(state_15803){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__11527__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__11527__auto____1.call(this,state_15803);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__11527__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__11527__auto____0;
cljs$core$async$reduce_$_state_machine__11527__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__11527__auto____1;
return cljs$core$async$reduce_$_state_machine__11527__auto__;
})()
;})(switch__11526__auto__,c__11604__auto__))
})();
var state__11606__auto__ = (function (){var statearr_15822 = (function (){return (f__11605__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11605__auto__.cljs$core$IFn$_invoke$arity$0() : f__11605__auto__.call(null));
})();
(statearr_15822[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11604__auto__);

return statearr_15822;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11606__auto__);
});})(c__11604__auto__))
);

return c__11604__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 * By default the channel will be closed after the items are copied,
 * but can be determined by the close? parameter.
 * 
 * Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(){
var G__15832 = arguments.length;
switch (G__15832) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__11604__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11604__auto__){
return (function (){
var f__11605__auto__ = (function (){var switch__11526__auto__ = ((function (c__11604__auto__){
return (function (state_15857){
var state_val_15858 = (state_15857[(1)]);
if((state_val_15858 === (7))){
var inst_15839 = (state_15857[(2)]);
var state_15857__$1 = state_15857;
var statearr_15859_15883 = state_15857__$1;
(statearr_15859_15883[(2)] = inst_15839);

(statearr_15859_15883[(1)] = (6));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_15858 === (1))){
var inst_15833 = cljs.core.seq(coll);
var inst_15834 = inst_15833;
var state_15857__$1 = (function (){var statearr_15860 = state_15857;
(statearr_15860[(7)] = inst_15834);

return statearr_15860;
})();
var statearr_15861_15884 = state_15857__$1;
(statearr_15861_15884[(2)] = null);

(statearr_15861_15884[(1)] = (2));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_15858 === (4))){
var inst_15834 = (state_15857[(7)]);
var inst_15837 = cljs.core.first(inst_15834);
var state_15857__$1 = state_15857;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15857__$1,(7),ch,inst_15837);
} else {
if((state_val_15858 === (13))){
var inst_15851 = (state_15857[(2)]);
var state_15857__$1 = state_15857;
var statearr_15862_15885 = state_15857__$1;
(statearr_15862_15885[(2)] = inst_15851);

(statearr_15862_15885[(1)] = (10));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_15858 === (6))){
var inst_15842 = (state_15857[(2)]);
var state_15857__$1 = state_15857;
if(cljs.core.truth_(inst_15842)){
var statearr_15863_15886 = state_15857__$1;
(statearr_15863_15886[(1)] = (8));

} else {
var statearr_15864_15887 = state_15857__$1;
(statearr_15864_15887[(1)] = (9));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_15858 === (3))){
var inst_15855 = (state_15857[(2)]);
var state_15857__$1 = state_15857;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15857__$1,inst_15855);
} else {
if((state_val_15858 === (12))){
var state_15857__$1 = state_15857;
var statearr_15865_15888 = state_15857__$1;
(statearr_15865_15888[(2)] = null);

(statearr_15865_15888[(1)] = (13));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_15858 === (2))){
var inst_15834 = (state_15857[(7)]);
var state_15857__$1 = state_15857;
if(cljs.core.truth_(inst_15834)){
var statearr_15866_15889 = state_15857__$1;
(statearr_15866_15889[(1)] = (4));

} else {
var statearr_15867_15890 = state_15857__$1;
(statearr_15867_15890[(1)] = (5));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_15858 === (11))){
var inst_15848 = cljs.core.async.close_BANG_(ch);
var state_15857__$1 = state_15857;
var statearr_15868_15891 = state_15857__$1;
(statearr_15868_15891[(2)] = inst_15848);

(statearr_15868_15891[(1)] = (13));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_15858 === (9))){
var state_15857__$1 = state_15857;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15869_15892 = state_15857__$1;
(statearr_15869_15892[(1)] = (11));

} else {
var statearr_15870_15893 = state_15857__$1;
(statearr_15870_15893[(1)] = (12));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_15858 === (5))){
var inst_15834 = (state_15857[(7)]);
var state_15857__$1 = state_15857;
var statearr_15871_15894 = state_15857__$1;
(statearr_15871_15894[(2)] = inst_15834);

(statearr_15871_15894[(1)] = (6));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_15858 === (10))){
var inst_15853 = (state_15857[(2)]);
var state_15857__$1 = state_15857;
var statearr_15872_15895 = state_15857__$1;
(statearr_15872_15895[(2)] = inst_15853);

(statearr_15872_15895[(1)] = (3));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_15858 === (8))){
var inst_15834 = (state_15857[(7)]);
var inst_15844 = cljs.core.next(inst_15834);
var inst_15834__$1 = inst_15844;
var state_15857__$1 = (function (){var statearr_15873 = state_15857;
(statearr_15873[(7)] = inst_15834__$1);

return statearr_15873;
})();
var statearr_15874_15896 = state_15857__$1;
(statearr_15874_15896[(2)] = null);

(statearr_15874_15896[(1)] = (2));


return cljs.core.constant$keyword$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__11604__auto__))
;
return ((function (switch__11526__auto__,c__11604__auto__){
return (function() {
var cljs$core$async$state_machine__11527__auto__ = null;
var cljs$core$async$state_machine__11527__auto____0 = (function (){
var statearr_15878 = [null,null,null,null,null,null,null,null];
(statearr_15878[(0)] = cljs$core$async$state_machine__11527__auto__);

(statearr_15878[(1)] = (1));

return statearr_15878;
});
var cljs$core$async$state_machine__11527__auto____1 = (function (state_15857){
while(true){
var ret_value__11528__auto__ = (function (){try{while(true){
var result__11529__auto__ = switch__11526__auto__(state_15857);
if(cljs.core.keyword_identical_QMARK_(result__11529__auto__,cljs.core.constant$keyword$recur)){
continue;
} else {
return result__11529__auto__;
}
break;
}
}catch (e15879){if((e15879 instanceof Object)){
var ex__11530__auto__ = e15879;
var statearr_15880_15897 = state_15857;
(statearr_15880_15897[(5)] = ex__11530__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15857);

return cljs.core.constant$keyword$recur;
} else {
throw e15879;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11528__auto__,cljs.core.constant$keyword$recur)){
var G__15898 = state_15857;
state_15857 = G__15898;
continue;
} else {
return ret_value__11528__auto__;
}
break;
}
});
cljs$core$async$state_machine__11527__auto__ = function(state_15857){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11527__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11527__auto____1.call(this,state_15857);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11527__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11527__auto____0;
cljs$core$async$state_machine__11527__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11527__auto____1;
return cljs$core$async$state_machine__11527__auto__;
})()
;})(switch__11526__auto__,c__11604__auto__))
})();
var state__11606__auto__ = (function (){var statearr_15881 = (function (){return (f__11605__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11605__auto__.cljs$core$IFn$_invoke$arity$0() : f__11605__auto__.call(null));
})();
(statearr_15881[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11604__auto__);

return statearr_15881;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11606__auto__);
});})(c__11604__auto__))
);

return c__11604__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 * closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});

cljs.core.async.Mux = (function (){var obj15900 = {};
return obj15900;
})();

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((function (){var and__4295__auto__ = _;
if(and__4295__auto__){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else {
return and__4295__auto__;
}
})()){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4943__auto__ = (((_ == null))?null:_);
return (function (){var or__4307__auto__ = (cljs.core.async.muxch_STAR_[(function (){var G__15904 = x__4943__auto__;
return goog.typeOf(G__15904);
})()]);
if(or__4307__auto__){
return or__4307__auto__;
} else {
var or__4307__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(or__4307__auto____$1){
return or__4307__auto____$1;
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
})().call(null,_);
}
});


cljs.core.async.Mult = (function (){var obj15906 = {};
return obj15906;
})();

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((function (){var and__4295__auto__ = m;
if(and__4295__auto__){
return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else {
return and__4295__auto__;
}
})()){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4943__auto__ = (((m == null))?null:m);
return (function (){var or__4307__auto__ = (cljs.core.async.tap_STAR_[(function (){var G__15910 = x__4943__auto__;
return goog.typeOf(G__15910);
})()]);
if(or__4307__auto__){
return or__4307__auto__;
} else {
var or__4307__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(or__4307__auto____$1){
return or__4307__auto____$1;
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((function (){var and__4295__auto__ = m;
if(and__4295__auto__){
return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else {
return and__4295__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4943__auto__ = (((m == null))?null:m);
return (function (){var or__4307__auto__ = (cljs.core.async.untap_STAR_[(function (){var G__15914 = x__4943__auto__;
return goog.typeOf(G__15914);
})()]);
if(or__4307__auto__){
return or__4307__auto__;
} else {
var or__4307__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(or__4307__auto____$1){
return or__4307__auto____$1;
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((function (){var and__4295__auto__ = m;
if(and__4295__auto__){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else {
return and__4295__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4943__auto__ = (((m == null))?null:m);
return (function (){var or__4307__auto__ = (cljs.core.async.untap_all_STAR_[(function (){var G__15918 = x__4943__auto__;
return goog.typeOf(G__15918);
})()]);
if(or__4307__auto__){
return or__4307__auto__;
} else {
var or__4307__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(or__4307__auto____$1){
return or__4307__auto____$1;
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
})().call(null,m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 * containing copies of the channel can be created with 'tap', and
 * detached with 'untap'.
 * 
 * Each item is distributed to all taps in parallel and synchronously,
 * i.e. each tap must accept before the next item is distributed. Use
 * buffering/windowing to prevent slow taps from holding up the mult.
 * 
 * Items received when there are no taps get dropped.
 * 
 * If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = (function (){var G__16148 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__16148) : cljs.core.atom.call(null,G__16148));
})();
var m = (function (){
if(typeof cljs.core.async.t16149 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t16149 = (function (mult,ch,cs,meta16150){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta16150 = meta16150;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t16149.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_16151,meta16150__$1){
var self__ = this;
var _16151__$1 = this;
return (new cljs.core.async.t16149(self__.mult,self__.ch,self__.cs,meta16150__$1));
});})(cs))
;

cljs.core.async.t16149.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_16151){
var self__ = this;
var _16151__$1 = this;
return self__.meta16150;
});})(cs))
;

cljs.core.async.t16149.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t16149.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t16149.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t16149.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t16149.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t16149.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__16152_16377 = self__.cs;
var G__16153_16378 = cljs.core.PersistentArrayMap.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__16152_16377,G__16153_16378) : cljs.core.reset_BANG_.call(null,G__16152_16377,G__16153_16378));

return null;
});})(cs))
;

cljs.core.async.t16149.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta16150","meta16150",473397574,null)], null);
});})(cs))
;

cljs.core.async.t16149.cljs$lang$type = true;

cljs.core.async.t16149.cljs$lang$ctorStr = "cljs.core.async/t16149";

cljs.core.async.t16149.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4886__auto__,writer__4887__auto__,opt__4888__auto__){
return cljs.core._write(writer__4887__auto__,"cljs.core.async/t16149");
});})(cs))
;

cljs.core.async.__GT_t16149 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t16149(mult__$1,ch__$1,cs__$1,meta16150){
return (new cljs.core.async.t16149(mult__$1,ch__$1,cs__$1,meta16150));
});})(cs))
;

}

return (new cljs.core.async.t16149(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = (function (){var G__16154 = null;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__16154) : cljs.core.atom.call(null,G__16154));
})();
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__11604__auto___16379 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11604__auto___16379,cs,m,dchan,dctr,done){
return (function (){
var f__11605__auto__ = (function (){var switch__11526__auto__ = ((function (c__11604__auto___16379,cs,m,dchan,dctr,done){
return (function (state_16285){
var state_val_16286 = (state_16285[(1)]);
if((state_val_16286 === (7))){
var inst_16281 = (state_16285[(2)]);
var state_16285__$1 = state_16285;
var statearr_16287_16380 = state_16285__$1;
(statearr_16287_16380[(2)] = inst_16281);

(statearr_16287_16380[(1)] = (3));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_16286 === (20))){
var inst_16186 = (state_16285[(7)]);
var inst_16196 = cljs.core.first(inst_16186);
var inst_16197 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16196,(0),null);
var inst_16198 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16196,(1),null);
var state_16285__$1 = (function (){var statearr_16288 = state_16285;
(statearr_16288[(8)] = inst_16197);

return statearr_16288;
})();
if(cljs.core.truth_(inst_16198)){
var statearr_16289_16381 = state_16285__$1;
(statearr_16289_16381[(1)] = (22));

} else {
var statearr_16290_16382 = state_16285__$1;
(statearr_16290_16382[(1)] = (23));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_16286 === (27))){
var inst_16233 = (state_16285[(9)]);
var inst_16228 = (state_16285[(10)]);
var inst_16157 = (state_16285[(11)]);
var inst_16226 = (state_16285[(12)]);
var inst_16233__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_16226,inst_16228);
var inst_16234 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_16233__$1,inst_16157,done);
var state_16285__$1 = (function (){var statearr_16291 = state_16285;
(statearr_16291[(9)] = inst_16233__$1);

return statearr_16291;
})();
if(cljs.core.truth_(inst_16234)){
var statearr_16292_16383 = state_16285__$1;
(statearr_16292_16383[(1)] = (30));

} else {
var statearr_16293_16384 = state_16285__$1;
(statearr_16293_16384[(1)] = (31));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_16286 === (1))){
var state_16285__$1 = state_16285;
var statearr_16294_16385 = state_16285__$1;
(statearr_16294_16385[(2)] = null);

(statearr_16294_16385[(1)] = (2));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_16286 === (24))){
var inst_16186 = (state_16285[(7)]);
var inst_16203 = (state_16285[(2)]);
var inst_16204 = cljs.core.next(inst_16186);
var inst_16166 = inst_16204;
var inst_16167 = null;
var inst_16168 = (0);
var inst_16169 = (0);
var state_16285__$1 = (function (){var statearr_16295 = state_16285;
(statearr_16295[(13)] = inst_16168);

(statearr_16295[(14)] = inst_16166);

(statearr_16295[(15)] = inst_16169);

(statearr_16295[(16)] = inst_16203);

(statearr_16295[(17)] = inst_16167);

return statearr_16295;
})();
var statearr_16296_16386 = state_16285__$1;
(statearr_16296_16386[(2)] = null);

(statearr_16296_16386[(1)] = (8));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_16286 === (39))){
var state_16285__$1 = state_16285;
var statearr_16300_16387 = state_16285__$1;
(statearr_16300_16387[(2)] = null);

(statearr_16300_16387[(1)] = (41));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_16286 === (4))){
var inst_16157 = (state_16285[(11)]);
var inst_16157__$1 = (state_16285[(2)]);
var inst_16158 = (inst_16157__$1 == null);
var state_16285__$1 = (function (){var statearr_16301 = state_16285;
(statearr_16301[(11)] = inst_16157__$1);

return statearr_16301;
})();
if(cljs.core.truth_(inst_16158)){
var statearr_16302_16388 = state_16285__$1;
(statearr_16302_16388[(1)] = (5));

} else {
var statearr_16303_16389 = state_16285__$1;
(statearr_16303_16389[(1)] = (6));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_16286 === (15))){
var inst_16168 = (state_16285[(13)]);
var inst_16166 = (state_16285[(14)]);
var inst_16169 = (state_16285[(15)]);
var inst_16167 = (state_16285[(17)]);
var inst_16182 = (state_16285[(2)]);
var inst_16183 = (inst_16169 + (1));
var tmp16297 = inst_16168;
var tmp16298 = inst_16166;
var tmp16299 = inst_16167;
var inst_16166__$1 = tmp16298;
var inst_16167__$1 = tmp16299;
var inst_16168__$1 = tmp16297;
var inst_16169__$1 = inst_16183;
var state_16285__$1 = (function (){var statearr_16304 = state_16285;
(statearr_16304[(13)] = inst_16168__$1);

(statearr_16304[(14)] = inst_16166__$1);

(statearr_16304[(18)] = inst_16182);

(statearr_16304[(15)] = inst_16169__$1);

(statearr_16304[(17)] = inst_16167__$1);

return statearr_16304;
})();
var statearr_16305_16390 = state_16285__$1;
(statearr_16305_16390[(2)] = null);

(statearr_16305_16390[(1)] = (8));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_16286 === (21))){
var inst_16207 = (state_16285[(2)]);
var state_16285__$1 = state_16285;
var statearr_16309_16391 = state_16285__$1;
(statearr_16309_16391[(2)] = inst_16207);

(statearr_16309_16391[(1)] = (18));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_16286 === (31))){
var inst_16233 = (state_16285[(9)]);
var inst_16237 = done(null);
var inst_16238 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_16233);
var state_16285__$1 = (function (){var statearr_16310 = state_16285;
(statearr_16310[(19)] = inst_16237);

return statearr_16310;
})();
var statearr_16311_16392 = state_16285__$1;
(statearr_16311_16392[(2)] = inst_16238);

(statearr_16311_16392[(1)] = (32));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_16286 === (32))){
var inst_16227 = (state_16285[(20)]);
var inst_16225 = (state_16285[(21)]);
var inst_16228 = (state_16285[(10)]);
var inst_16226 = (state_16285[(12)]);
var inst_16240 = (state_16285[(2)]);
var inst_16241 = (inst_16228 + (1));
var tmp16306 = inst_16227;
var tmp16307 = inst_16225;
var tmp16308 = inst_16226;
var inst_16225__$1 = tmp16307;
var inst_16226__$1 = tmp16308;
var inst_16227__$1 = tmp16306;
var inst_16228__$1 = inst_16241;
var state_16285__$1 = (function (){var statearr_16312 = state_16285;
(statearr_16312[(22)] = inst_16240);

(statearr_16312[(20)] = inst_16227__$1);

(statearr_16312[(21)] = inst_16225__$1);

(statearr_16312[(10)] = inst_16228__$1);

(statearr_16312[(12)] = inst_16226__$1);

return statearr_16312;
})();
var statearr_16313_16393 = state_16285__$1;
(statearr_16313_16393[(2)] = null);

(statearr_16313_16393[(1)] = (25));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_16286 === (40))){
var inst_16253 = (state_16285[(23)]);
var inst_16257 = done(null);
var inst_16258 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_16253);
var state_16285__$1 = (function (){var statearr_16314 = state_16285;
(statearr_16314[(24)] = inst_16257);

return statearr_16314;
})();
var statearr_16315_16394 = state_16285__$1;
(statearr_16315_16394[(2)] = inst_16258);

(statearr_16315_16394[(1)] = (41));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_16286 === (33))){
var inst_16244 = (state_16285[(25)]);
var inst_16246 = cljs.core.chunked_seq_QMARK_(inst_16244);
var state_16285__$1 = state_16285;
if(inst_16246){
var statearr_16316_16395 = state_16285__$1;
(statearr_16316_16395[(1)] = (36));

} else {
var statearr_16317_16396 = state_16285__$1;
(statearr_16317_16396[(1)] = (37));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_16286 === (13))){
var inst_16176 = (state_16285[(26)]);
var inst_16179 = cljs.core.async.close_BANG_(inst_16176);
var state_16285__$1 = state_16285;
var statearr_16318_16397 = state_16285__$1;
(statearr_16318_16397[(2)] = inst_16179);

(statearr_16318_16397[(1)] = (15));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_16286 === (22))){
var inst_16197 = (state_16285[(8)]);
var inst_16200 = cljs.core.async.close_BANG_(inst_16197);
var state_16285__$1 = state_16285;
var statearr_16319_16398 = state_16285__$1;
(statearr_16319_16398[(2)] = inst_16200);

(statearr_16319_16398[(1)] = (24));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_16286 === (36))){
var inst_16244 = (state_16285[(25)]);
var inst_16248 = cljs.core.chunk_first(inst_16244);
var inst_16249 = cljs.core.chunk_rest(inst_16244);
var inst_16250 = cljs.core.count(inst_16248);
var inst_16225 = inst_16249;
var inst_16226 = inst_16248;
var inst_16227 = inst_16250;
var inst_16228 = (0);
var state_16285__$1 = (function (){var statearr_16320 = state_16285;
(statearr_16320[(20)] = inst_16227);

(statearr_16320[(21)] = inst_16225);

(statearr_16320[(10)] = inst_16228);

(statearr_16320[(12)] = inst_16226);

return statearr_16320;
})();
var statearr_16321_16399 = state_16285__$1;
(statearr_16321_16399[(2)] = null);

(statearr_16321_16399[(1)] = (25));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_16286 === (41))){
var inst_16244 = (state_16285[(25)]);
var inst_16260 = (state_16285[(2)]);
var inst_16261 = cljs.core.next(inst_16244);
var inst_16225 = inst_16261;
var inst_16226 = null;
var inst_16227 = (0);
var inst_16228 = (0);
var state_16285__$1 = (function (){var statearr_16322 = state_16285;
(statearr_16322[(20)] = inst_16227);

(statearr_16322[(21)] = inst_16225);

(statearr_16322[(10)] = inst_16228);

(statearr_16322[(27)] = inst_16260);

(statearr_16322[(12)] = inst_16226);

return statearr_16322;
})();
var statearr_16323_16400 = state_16285__$1;
(statearr_16323_16400[(2)] = null);

(statearr_16323_16400[(1)] = (25));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_16286 === (43))){
var state_16285__$1 = state_16285;
var statearr_16324_16401 = state_16285__$1;
(statearr_16324_16401[(2)] = null);

(statearr_16324_16401[(1)] = (44));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_16286 === (29))){
var inst_16269 = (state_16285[(2)]);
var state_16285__$1 = state_16285;
var statearr_16325_16402 = state_16285__$1;
(statearr_16325_16402[(2)] = inst_16269);

(statearr_16325_16402[(1)] = (26));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_16286 === (44))){
var inst_16278 = (state_16285[(2)]);
var state_16285__$1 = (function (){var statearr_16326 = state_16285;
(statearr_16326[(28)] = inst_16278);

return statearr_16326;
})();
var statearr_16327_16403 = state_16285__$1;
(statearr_16327_16403[(2)] = null);

(statearr_16327_16403[(1)] = (2));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_16286 === (6))){
var inst_16217 = (state_16285[(29)]);
var inst_16216 = (function (){var G__16328 = cs;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16328) : cljs.core.deref.call(null,G__16328));
})();
var inst_16217__$1 = cljs.core.keys(inst_16216);
var inst_16218 = cljs.core.count(inst_16217__$1);
var inst_16219 = (function (){var G__16329 = dctr;
var G__16330 = inst_16218;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__16329,G__16330) : cljs.core.reset_BANG_.call(null,G__16329,G__16330));
})();
var inst_16224 = cljs.core.seq(inst_16217__$1);
var inst_16225 = inst_16224;
var inst_16226 = null;
var inst_16227 = (0);
var inst_16228 = (0);
var state_16285__$1 = (function (){var statearr_16331 = state_16285;
(statearr_16331[(30)] = inst_16219);

(statearr_16331[(20)] = inst_16227);

(statearr_16331[(21)] = inst_16225);

(statearr_16331[(10)] = inst_16228);

(statearr_16331[(29)] = inst_16217__$1);

(statearr_16331[(12)] = inst_16226);

return statearr_16331;
})();
var statearr_16332_16404 = state_16285__$1;
(statearr_16332_16404[(2)] = null);

(statearr_16332_16404[(1)] = (25));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_16286 === (28))){
var inst_16225 = (state_16285[(21)]);
var inst_16244 = (state_16285[(25)]);
var inst_16244__$1 = cljs.core.seq(inst_16225);
var state_16285__$1 = (function (){var statearr_16333 = state_16285;
(statearr_16333[(25)] = inst_16244__$1);

return statearr_16333;
})();
if(inst_16244__$1){
var statearr_16334_16405 = state_16285__$1;
(statearr_16334_16405[(1)] = (33));

} else {
var statearr_16335_16406 = state_16285__$1;
(statearr_16335_16406[(1)] = (34));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_16286 === (25))){
var inst_16227 = (state_16285[(20)]);
var inst_16228 = (state_16285[(10)]);
var inst_16230 = (inst_16228 < inst_16227);
var inst_16231 = inst_16230;
var state_16285__$1 = state_16285;
if(cljs.core.truth_(inst_16231)){
var statearr_16336_16407 = state_16285__$1;
(statearr_16336_16407[(1)] = (27));

} else {
var statearr_16337_16408 = state_16285__$1;
(statearr_16337_16408[(1)] = (28));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_16286 === (34))){
var state_16285__$1 = state_16285;
var statearr_16338_16409 = state_16285__$1;
(statearr_16338_16409[(2)] = null);

(statearr_16338_16409[(1)] = (35));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_16286 === (17))){
var state_16285__$1 = state_16285;
var statearr_16339_16410 = state_16285__$1;
(statearr_16339_16410[(2)] = null);

(statearr_16339_16410[(1)] = (18));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_16286 === (3))){
var inst_16283 = (state_16285[(2)]);
var state_16285__$1 = state_16285;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16285__$1,inst_16283);
} else {
if((state_val_16286 === (12))){
var inst_16212 = (state_16285[(2)]);
var state_16285__$1 = state_16285;
var statearr_16340_16411 = state_16285__$1;
(statearr_16340_16411[(2)] = inst_16212);

(statearr_16340_16411[(1)] = (9));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_16286 === (2))){
var state_16285__$1 = state_16285;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16285__$1,(4),ch);
} else {
if((state_val_16286 === (23))){
var state_16285__$1 = state_16285;
var statearr_16341_16412 = state_16285__$1;
(statearr_16341_16412[(2)] = null);

(statearr_16341_16412[(1)] = (24));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_16286 === (35))){
var inst_16267 = (state_16285[(2)]);
var state_16285__$1 = state_16285;
var statearr_16342_16413 = state_16285__$1;
(statearr_16342_16413[(2)] = inst_16267);

(statearr_16342_16413[(1)] = (29));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_16286 === (19))){
var inst_16186 = (state_16285[(7)]);
var inst_16190 = cljs.core.chunk_first(inst_16186);
var inst_16191 = cljs.core.chunk_rest(inst_16186);
var inst_16192 = cljs.core.count(inst_16190);
var inst_16166 = inst_16191;
var inst_16167 = inst_16190;
var inst_16168 = inst_16192;
var inst_16169 = (0);
var state_16285__$1 = (function (){var statearr_16343 = state_16285;
(statearr_16343[(13)] = inst_16168);

(statearr_16343[(14)] = inst_16166);

(statearr_16343[(15)] = inst_16169);

(statearr_16343[(17)] = inst_16167);

return statearr_16343;
})();
var statearr_16344_16414 = state_16285__$1;
(statearr_16344_16414[(2)] = null);

(statearr_16344_16414[(1)] = (8));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_16286 === (11))){
var inst_16186 = (state_16285[(7)]);
var inst_16166 = (state_16285[(14)]);
var inst_16186__$1 = cljs.core.seq(inst_16166);
var state_16285__$1 = (function (){var statearr_16345 = state_16285;
(statearr_16345[(7)] = inst_16186__$1);

return statearr_16345;
})();
if(inst_16186__$1){
var statearr_16346_16415 = state_16285__$1;
(statearr_16346_16415[(1)] = (16));

} else {
var statearr_16347_16416 = state_16285__$1;
(statearr_16347_16416[(1)] = (17));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_16286 === (9))){
var inst_16214 = (state_16285[(2)]);
var state_16285__$1 = state_16285;
var statearr_16348_16417 = state_16285__$1;
(statearr_16348_16417[(2)] = inst_16214);

(statearr_16348_16417[(1)] = (7));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_16286 === (5))){
var inst_16164 = (function (){var G__16349 = cs;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16349) : cljs.core.deref.call(null,G__16349));
})();
var inst_16165 = cljs.core.seq(inst_16164);
var inst_16166 = inst_16165;
var inst_16167 = null;
var inst_16168 = (0);
var inst_16169 = (0);
var state_16285__$1 = (function (){var statearr_16350 = state_16285;
(statearr_16350[(13)] = inst_16168);

(statearr_16350[(14)] = inst_16166);

(statearr_16350[(15)] = inst_16169);

(statearr_16350[(17)] = inst_16167);

return statearr_16350;
})();
var statearr_16351_16418 = state_16285__$1;
(statearr_16351_16418[(2)] = null);

(statearr_16351_16418[(1)] = (8));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_16286 === (14))){
var state_16285__$1 = state_16285;
var statearr_16352_16419 = state_16285__$1;
(statearr_16352_16419[(2)] = null);

(statearr_16352_16419[(1)] = (15));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_16286 === (45))){
var inst_16275 = (state_16285[(2)]);
var state_16285__$1 = state_16285;
var statearr_16353_16420 = state_16285__$1;
(statearr_16353_16420[(2)] = inst_16275);

(statearr_16353_16420[(1)] = (44));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_16286 === (26))){
var inst_16217 = (state_16285[(29)]);
var inst_16271 = (state_16285[(2)]);
var inst_16272 = cljs.core.seq(inst_16217);
var state_16285__$1 = (function (){var statearr_16354 = state_16285;
(statearr_16354[(31)] = inst_16271);

return statearr_16354;
})();
if(inst_16272){
var statearr_16355_16421 = state_16285__$1;
(statearr_16355_16421[(1)] = (42));

} else {
var statearr_16356_16422 = state_16285__$1;
(statearr_16356_16422[(1)] = (43));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_16286 === (16))){
var inst_16186 = (state_16285[(7)]);
var inst_16188 = cljs.core.chunked_seq_QMARK_(inst_16186);
var state_16285__$1 = state_16285;
if(inst_16188){
var statearr_16357_16423 = state_16285__$1;
(statearr_16357_16423[(1)] = (19));

} else {
var statearr_16358_16424 = state_16285__$1;
(statearr_16358_16424[(1)] = (20));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_16286 === (38))){
var inst_16264 = (state_16285[(2)]);
var state_16285__$1 = state_16285;
var statearr_16359_16425 = state_16285__$1;
(statearr_16359_16425[(2)] = inst_16264);

(statearr_16359_16425[(1)] = (35));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_16286 === (30))){
var state_16285__$1 = state_16285;
var statearr_16360_16426 = state_16285__$1;
(statearr_16360_16426[(2)] = null);

(statearr_16360_16426[(1)] = (32));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_16286 === (10))){
var inst_16169 = (state_16285[(15)]);
var inst_16167 = (state_16285[(17)]);
var inst_16175 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_16167,inst_16169);
var inst_16176 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16175,(0),null);
var inst_16177 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16175,(1),null);
var state_16285__$1 = (function (){var statearr_16361 = state_16285;
(statearr_16361[(26)] = inst_16176);

return statearr_16361;
})();
if(cljs.core.truth_(inst_16177)){
var statearr_16362_16427 = state_16285__$1;
(statearr_16362_16427[(1)] = (13));

} else {
var statearr_16363_16428 = state_16285__$1;
(statearr_16363_16428[(1)] = (14));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_16286 === (18))){
var inst_16210 = (state_16285[(2)]);
var state_16285__$1 = state_16285;
var statearr_16364_16429 = state_16285__$1;
(statearr_16364_16429[(2)] = inst_16210);

(statearr_16364_16429[(1)] = (12));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_16286 === (42))){
var state_16285__$1 = state_16285;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16285__$1,(45),dchan);
} else {
if((state_val_16286 === (37))){
var inst_16157 = (state_16285[(11)]);
var inst_16253 = (state_16285[(23)]);
var inst_16244 = (state_16285[(25)]);
var inst_16253__$1 = cljs.core.first(inst_16244);
var inst_16254 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_16253__$1,inst_16157,done);
var state_16285__$1 = (function (){var statearr_16365 = state_16285;
(statearr_16365[(23)] = inst_16253__$1);

return statearr_16365;
})();
if(cljs.core.truth_(inst_16254)){
var statearr_16366_16430 = state_16285__$1;
(statearr_16366_16430[(1)] = (39));

} else {
var statearr_16367_16431 = state_16285__$1;
(statearr_16367_16431[(1)] = (40));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_16286 === (8))){
var inst_16168 = (state_16285[(13)]);
var inst_16169 = (state_16285[(15)]);
var inst_16171 = (inst_16169 < inst_16168);
var inst_16172 = inst_16171;
var state_16285__$1 = state_16285;
if(cljs.core.truth_(inst_16172)){
var statearr_16368_16432 = state_16285__$1;
(statearr_16368_16432[(1)] = (10));

} else {
var statearr_16369_16433 = state_16285__$1;
(statearr_16369_16433[(1)] = (11));

}

return cljs.core.constant$keyword$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__11604__auto___16379,cs,m,dchan,dctr,done))
;
return ((function (switch__11526__auto__,c__11604__auto___16379,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__11527__auto__ = null;
var cljs$core$async$mult_$_state_machine__11527__auto____0 = (function (){
var statearr_16373 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16373[(0)] = cljs$core$async$mult_$_state_machine__11527__auto__);

(statearr_16373[(1)] = (1));

return statearr_16373;
});
var cljs$core$async$mult_$_state_machine__11527__auto____1 = (function (state_16285){
while(true){
var ret_value__11528__auto__ = (function (){try{while(true){
var result__11529__auto__ = switch__11526__auto__(state_16285);
if(cljs.core.keyword_identical_QMARK_(result__11529__auto__,cljs.core.constant$keyword$recur)){
continue;
} else {
return result__11529__auto__;
}
break;
}
}catch (e16374){if((e16374 instanceof Object)){
var ex__11530__auto__ = e16374;
var statearr_16375_16434 = state_16285;
(statearr_16375_16434[(5)] = ex__11530__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16285);

return cljs.core.constant$keyword$recur;
} else {
throw e16374;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11528__auto__,cljs.core.constant$keyword$recur)){
var G__16435 = state_16285;
state_16285 = G__16435;
continue;
} else {
return ret_value__11528__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__11527__auto__ = function(state_16285){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__11527__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__11527__auto____1.call(this,state_16285);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__11527__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__11527__auto____0;
cljs$core$async$mult_$_state_machine__11527__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__11527__auto____1;
return cljs$core$async$mult_$_state_machine__11527__auto__;
})()
;})(switch__11526__auto__,c__11604__auto___16379,cs,m,dchan,dctr,done))
})();
var state__11606__auto__ = (function (){var statearr_16376 = (function (){return (f__11605__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11605__auto__.cljs$core$IFn$_invoke$arity$0() : f__11605__auto__.call(null));
})();
(statearr_16376[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11604__auto___16379);

return statearr_16376;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11606__auto__);
});})(c__11604__auto___16379,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 * By default the channel will be closed when the source closes,
 * but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(){
var G__16437 = arguments.length;
switch (G__16437) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

cljs.core.async.Mix = (function (){var obj16440 = {};
return obj16440;
})();

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((function (){var and__4295__auto__ = m;
if(and__4295__auto__){
return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else {
return and__4295__auto__;
}
})()){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4943__auto__ = (((m == null))?null:m);
return (function (){var or__4307__auto__ = (cljs.core.async.admix_STAR_[(function (){var G__16444 = x__4943__auto__;
return goog.typeOf(G__16444);
})()]);
if(or__4307__auto__){
return or__4307__auto__;
} else {
var or__4307__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(or__4307__auto____$1){
return or__4307__auto____$1;
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((function (){var and__4295__auto__ = m;
if(and__4295__auto__){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else {
return and__4295__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4943__auto__ = (((m == null))?null:m);
return (function (){var or__4307__auto__ = (cljs.core.async.unmix_STAR_[(function (){var G__16448 = x__4943__auto__;
return goog.typeOf(G__16448);
})()]);
if(or__4307__auto__){
return or__4307__auto__;
} else {
var or__4307__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(or__4307__auto____$1){
return or__4307__auto____$1;
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((function (){var and__4295__auto__ = m;
if(and__4295__auto__){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else {
return and__4295__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4943__auto__ = (((m == null))?null:m);
return (function (){var or__4307__auto__ = (cljs.core.async.unmix_all_STAR_[(function (){var G__16452 = x__4943__auto__;
return goog.typeOf(G__16452);
})()]);
if(or__4307__auto__){
return or__4307__auto__;
} else {
var or__4307__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(or__4307__auto____$1){
return or__4307__auto____$1;
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((function (){var and__4295__auto__ = m;
if(and__4295__auto__){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else {
return and__4295__auto__;
}
})()){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4943__auto__ = (((m == null))?null:m);
return (function (){var or__4307__auto__ = (cljs.core.async.toggle_STAR_[(function (){var G__16456 = x__4943__auto__;
return goog.typeOf(G__16456);
})()]);
if(or__4307__auto__){
return or__4307__auto__;
} else {
var or__4307__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(or__4307__auto____$1){
return or__4307__auto____$1;
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((function (){var and__4295__auto__ = m;
if(and__4295__auto__){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else {
return and__4295__auto__;
}
})()){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4943__auto__ = (((m == null))?null:m);
return (function (){var or__4307__auto__ = (cljs.core.async.solo_mode_STAR_[(function (){var G__16460 = x__4943__auto__;
return goog.typeOf(G__16460);
})()]);
if(or__4307__auto__){
return or__4307__auto__;
} else {
var or__4307__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(or__4307__auto____$1){
return or__4307__auto____$1;
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(){
var argseq__5347__auto__ = ((((3) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5347__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__16465){
var map__16466 = p__16465;
var map__16466__$1 = ((cljs.core.seq_QMARK_(map__16466))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16466):map__16466);
var opts = map__16466__$1;
var statearr_16467_16471 = state;
(statearr_16467_16471[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4423__auto__ = cljs.core.async.do_alts(((function (map__16466,map__16466__$1,opts){
return (function (val){
var statearr_16468_16472 = state;
(statearr_16468_16472[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__16466,map__16466__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4423__auto__)){
var cb = temp__4423__auto__;
var statearr_16469_16473 = state;
(statearr_16469_16473[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = (function (){var G__16470 = cb;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16470) : cljs.core.deref.call(null,G__16470));
})());


return cljs.core.constant$keyword$recur;
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq16461){
var G__16462 = cljs.core.first(seq16461);
var seq16461__$1 = cljs.core.next(seq16461);
var G__16463 = cljs.core.first(seq16461__$1);
var seq16461__$2 = cljs.core.next(seq16461__$1);
var G__16464 = cljs.core.first(seq16461__$2);
var seq16461__$3 = cljs.core.next(seq16461__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__16462,G__16463,G__16464,seq16461__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 * be put on the supplied out channel. Input sources can be added to
 * the mix with 'admix', and removed with 'unmix'. A mix supports
 * soloing, muting and pausing multiple inputs atomically using
 * 'toggle', and can solo using either muting or pausing as determined
 * by 'solo-mode'.
 * 
 * Each channel can have zero or more boolean modes set via 'toggle':
 * 
 * :solo - when true, only this (ond other soloed) channel(s) will appear
 * in the mix output channel. :mute and :pause states of soloed
 * channels are ignored. If solo-mode is :mute, non-soloed
 * channels are muted, if :pause, non-soloed channels are
 * paused.
 * 
 * :mute - muted channels will have their contents consumed but not included in the mix
 * :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = (function (){var G__16607 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__16607) : cljs.core.atom.call(null,G__16607));
})();
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$pause,null,cljs.core.constant$keyword$mute,null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,cljs.core.constant$keyword$solo);
var solo_mode = (function (){var G__16608 = cljs.core.constant$keyword$mute;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__16608) : cljs.core.atom.call(null,G__16608));
})();
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv(((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_((function (){var G__16609 = v;
return (attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(G__16609) : attr.call(null,G__16609));
})())){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = (function (){var G__16610 = cs;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16610) : cljs.core.deref.call(null,G__16610));
})();
var mode = (function (){var G__16611 = solo_mode;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16611) : cljs.core.deref.call(null,G__16611));
})();
var solos = pick(cljs.core.constant$keyword$solo,chs);
var pauses = pick(cljs.core.constant$keyword$pause,chs);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$solos,solos,cljs.core.constant$keyword$mutes,pick(cljs.core.constant$keyword$mute,chs),cljs.core.constant$keyword$reads,cljs.core.conj.cljs$core$IFn$_invoke$arity$2((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,cljs.core.constant$keyword$pause)) && (!(cljs.core.empty_QMARK_(solos))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t16612 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t16612 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta16613){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta16613 = meta16613;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t16612.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_16614,meta16613__$1){
var self__ = this;
var _16614__$1 = this;
return (new cljs.core.async.t16612(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta16613__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t16612.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_16614){
var self__ = this;
var _16614__$1 = this;
return self__.meta16613;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t16612.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t16612.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t16612.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t16612.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t16612.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t16612.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__16615_16740 = self__.cs;
var G__16616_16741 = cljs.core.PersistentArrayMap.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__16615_16740,G__16616_16741) : cljs.core.reset_BANG_.call(null,G__16615_16740,G__16616_16741));

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t16612.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t16612.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((function (){var G__16617 = mode;
return (self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(G__16617) : self__.solo_modes.call(null,G__16617));
})())){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))], 0)))].join('')));
}

var G__16618_16742 = self__.solo_mode;
var G__16619_16743 = mode;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__16618_16742,G__16619_16743) : cljs.core.reset_BANG_.call(null,G__16618_16742,G__16619_16743));

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t16612.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta16613","meta16613",2088509858,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t16612.cljs$lang$type = true;

cljs.core.async.t16612.cljs$lang$ctorStr = "cljs.core.async/t16612";

cljs.core.async.t16612.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4886__auto__,writer__4887__auto__,opt__4888__auto__){
return cljs.core._write(writer__4887__auto__,"cljs.core.async/t16612");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t16612 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t16612(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta16613){
return (new cljs.core.async.t16612(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta16613));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t16612(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__11604__auto___16744 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11604__auto___16744,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__11605__auto__ = (function (){var switch__11526__auto__ = ((function (c__11604__auto___16744,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_16691){
var state_val_16692 = (state_16691[(1)]);
if((state_val_16692 === (7))){
var inst_16633 = (state_16691[(7)]);
var inst_16638 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_16633);
var state_16691__$1 = state_16691;
var statearr_16693_16745 = state_16691__$1;
(statearr_16693_16745[(2)] = inst_16638);

(statearr_16693_16745[(1)] = (9));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_16692 === (20))){
var inst_16648 = (state_16691[(8)]);
var state_16691__$1 = state_16691;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16691__$1,(23),out,inst_16648);
} else {
if((state_val_16692 === (1))){
var inst_16623 = (state_16691[(9)]);
var inst_16623__$1 = calc_state();
var inst_16624 = cljs.core.seq_QMARK_(inst_16623__$1);
var state_16691__$1 = (function (){var statearr_16694 = state_16691;
(statearr_16694[(9)] = inst_16623__$1);

return statearr_16694;
})();
if(inst_16624){
var statearr_16695_16746 = state_16691__$1;
(statearr_16695_16746[(1)] = (2));

} else {
var statearr_16696_16747 = state_16691__$1;
(statearr_16696_16747[(1)] = (3));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_16692 === (24))){
var inst_16641 = (state_16691[(10)]);
var inst_16633 = inst_16641;
var state_16691__$1 = (function (){var statearr_16697 = state_16691;
(statearr_16697[(7)] = inst_16633);

return statearr_16697;
})();
var statearr_16698_16748 = state_16691__$1;
(statearr_16698_16748[(2)] = null);

(statearr_16698_16748[(1)] = (5));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_16692 === (4))){
var inst_16623 = (state_16691[(9)]);
var inst_16629 = (state_16691[(2)]);
var inst_16630 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16629,cljs.core.constant$keyword$solos);
var inst_16631 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16629,cljs.core.constant$keyword$mutes);
var inst_16632 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16629,cljs.core.constant$keyword$reads);
var inst_16633 = inst_16623;
var state_16691__$1 = (function (){var statearr_16699 = state_16691;
(statearr_16699[(7)] = inst_16633);

(statearr_16699[(11)] = inst_16631);

(statearr_16699[(12)] = inst_16632);

(statearr_16699[(13)] = inst_16630);

return statearr_16699;
})();
var statearr_16700_16749 = state_16691__$1;
(statearr_16700_16749[(2)] = null);

(statearr_16700_16749[(1)] = (5));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_16692 === (15))){
var state_16691__$1 = state_16691;
var statearr_16701_16750 = state_16691__$1;
(statearr_16701_16750[(2)] = null);

(statearr_16701_16750[(1)] = (16));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_16692 === (21))){
var inst_16641 = (state_16691[(10)]);
var inst_16633 = inst_16641;
var state_16691__$1 = (function (){var statearr_16702 = state_16691;
(statearr_16702[(7)] = inst_16633);

return statearr_16702;
})();
var statearr_16703_16751 = state_16691__$1;
(statearr_16703_16751[(2)] = null);

(statearr_16703_16751[(1)] = (5));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_16692 === (13))){
var inst_16687 = (state_16691[(2)]);
var state_16691__$1 = state_16691;
var statearr_16704_16752 = state_16691__$1;
(statearr_16704_16752[(2)] = inst_16687);

(statearr_16704_16752[(1)] = (6));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_16692 === (22))){
var inst_16685 = (state_16691[(2)]);
var state_16691__$1 = state_16691;
var statearr_16705_16753 = state_16691__$1;
(statearr_16705_16753[(2)] = inst_16685);

(statearr_16705_16753[(1)] = (13));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_16692 === (6))){
var inst_16689 = (state_16691[(2)]);
var state_16691__$1 = state_16691;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16691__$1,inst_16689);
} else {
if((state_val_16692 === (25))){
var state_16691__$1 = state_16691;
var statearr_16706_16754 = state_16691__$1;
(statearr_16706_16754[(2)] = null);

(statearr_16706_16754[(1)] = (26));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_16692 === (17))){
var inst_16664 = (state_16691[(14)]);
var state_16691__$1 = state_16691;
var statearr_16707_16755 = state_16691__$1;
(statearr_16707_16755[(2)] = inst_16664);

(statearr_16707_16755[(1)] = (19));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_16692 === (3))){
var inst_16623 = (state_16691[(9)]);
var state_16691__$1 = state_16691;
var statearr_16708_16756 = state_16691__$1;
(statearr_16708_16756[(2)] = inst_16623);

(statearr_16708_16756[(1)] = (4));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_16692 === (12))){
var inst_16649 = (state_16691[(15)]);
var inst_16642 = (state_16691[(16)]);
var inst_16664 = (state_16691[(14)]);
var inst_16664__$1 = (function (){var G__16709 = inst_16649;
return (inst_16642.cljs$core$IFn$_invoke$arity$1 ? inst_16642.cljs$core$IFn$_invoke$arity$1(G__16709) : inst_16642.call(null,G__16709));
})();
var state_16691__$1 = (function (){var statearr_16710 = state_16691;
(statearr_16710[(14)] = inst_16664__$1);

return statearr_16710;
})();
if(cljs.core.truth_(inst_16664__$1)){
var statearr_16711_16757 = state_16691__$1;
(statearr_16711_16757[(1)] = (17));

} else {
var statearr_16712_16758 = state_16691__$1;
(statearr_16712_16758[(1)] = (18));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_16692 === (2))){
var inst_16623 = (state_16691[(9)]);
var inst_16626 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_16623);
var state_16691__$1 = state_16691;
var statearr_16713_16759 = state_16691__$1;
(statearr_16713_16759[(2)] = inst_16626);

(statearr_16713_16759[(1)] = (4));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_16692 === (23))){
var inst_16676 = (state_16691[(2)]);
var state_16691__$1 = state_16691;
if(cljs.core.truth_(inst_16676)){
var statearr_16714_16760 = state_16691__$1;
(statearr_16714_16760[(1)] = (24));

} else {
var statearr_16715_16761 = state_16691__$1;
(statearr_16715_16761[(1)] = (25));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_16692 === (19))){
var inst_16673 = (state_16691[(2)]);
var state_16691__$1 = state_16691;
if(cljs.core.truth_(inst_16673)){
var statearr_16716_16762 = state_16691__$1;
(statearr_16716_16762[(1)] = (20));

} else {
var statearr_16717_16763 = state_16691__$1;
(statearr_16717_16763[(1)] = (21));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_16692 === (11))){
var inst_16648 = (state_16691[(8)]);
var inst_16654 = (inst_16648 == null);
var state_16691__$1 = state_16691;
if(cljs.core.truth_(inst_16654)){
var statearr_16718_16764 = state_16691__$1;
(statearr_16718_16764[(1)] = (14));

} else {
var statearr_16719_16765 = state_16691__$1;
(statearr_16719_16765[(1)] = (15));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_16692 === (9))){
var inst_16641 = (state_16691[(10)]);
var inst_16641__$1 = (state_16691[(2)]);
var inst_16642 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16641__$1,cljs.core.constant$keyword$solos);
var inst_16643 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16641__$1,cljs.core.constant$keyword$mutes);
var inst_16644 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16641__$1,cljs.core.constant$keyword$reads);
var state_16691__$1 = (function (){var statearr_16720 = state_16691;
(statearr_16720[(17)] = inst_16643);

(statearr_16720[(10)] = inst_16641__$1);

(statearr_16720[(16)] = inst_16642);

return statearr_16720;
})();
return cljs.core.async.ioc_alts_BANG_(state_16691__$1,(10),inst_16644);
} else {
if((state_val_16692 === (5))){
var inst_16633 = (state_16691[(7)]);
var inst_16636 = cljs.core.seq_QMARK_(inst_16633);
var state_16691__$1 = state_16691;
if(inst_16636){
var statearr_16721_16766 = state_16691__$1;
(statearr_16721_16766[(1)] = (7));

} else {
var statearr_16722_16767 = state_16691__$1;
(statearr_16722_16767[(1)] = (8));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_16692 === (14))){
var inst_16649 = (state_16691[(15)]);
var inst_16656 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_16649);
var state_16691__$1 = state_16691;
var statearr_16723_16768 = state_16691__$1;
(statearr_16723_16768[(2)] = inst_16656);

(statearr_16723_16768[(1)] = (16));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_16692 === (26))){
var inst_16681 = (state_16691[(2)]);
var state_16691__$1 = state_16691;
var statearr_16724_16769 = state_16691__$1;
(statearr_16724_16769[(2)] = inst_16681);

(statearr_16724_16769[(1)] = (22));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_16692 === (16))){
var inst_16659 = (state_16691[(2)]);
var inst_16660 = calc_state();
var inst_16633 = inst_16660;
var state_16691__$1 = (function (){var statearr_16725 = state_16691;
(statearr_16725[(18)] = inst_16659);

(statearr_16725[(7)] = inst_16633);

return statearr_16725;
})();
var statearr_16726_16770 = state_16691__$1;
(statearr_16726_16770[(2)] = null);

(statearr_16726_16770[(1)] = (5));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_16692 === (10))){
var inst_16649 = (state_16691[(15)]);
var inst_16648 = (state_16691[(8)]);
var inst_16647 = (state_16691[(2)]);
var inst_16648__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16647,(0),null);
var inst_16649__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16647,(1),null);
var inst_16650 = (inst_16648__$1 == null);
var inst_16651 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_16649__$1,change);
var inst_16652 = (inst_16650) || (inst_16651);
var state_16691__$1 = (function (){var statearr_16727 = state_16691;
(statearr_16727[(15)] = inst_16649__$1);

(statearr_16727[(8)] = inst_16648__$1);

return statearr_16727;
})();
if(cljs.core.truth_(inst_16652)){
var statearr_16728_16771 = state_16691__$1;
(statearr_16728_16771[(1)] = (11));

} else {
var statearr_16729_16772 = state_16691__$1;
(statearr_16729_16772[(1)] = (12));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_16692 === (18))){
var inst_16649 = (state_16691[(15)]);
var inst_16643 = (state_16691[(17)]);
var inst_16642 = (state_16691[(16)]);
var inst_16668 = cljs.core.empty_QMARK_(inst_16642);
var inst_16669 = (function (){var G__16730 = inst_16649;
return (inst_16643.cljs$core$IFn$_invoke$arity$1 ? inst_16643.cljs$core$IFn$_invoke$arity$1(G__16730) : inst_16643.call(null,G__16730));
})();
var inst_16670 = cljs.core.not(inst_16669);
var inst_16671 = (inst_16668) && (inst_16670);
var state_16691__$1 = state_16691;
var statearr_16731_16773 = state_16691__$1;
(statearr_16731_16773[(2)] = inst_16671);

(statearr_16731_16773[(1)] = (19));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_16692 === (8))){
var inst_16633 = (state_16691[(7)]);
var state_16691__$1 = state_16691;
var statearr_16732_16774 = state_16691__$1;
(statearr_16732_16774[(2)] = inst_16633);

(statearr_16732_16774[(1)] = (9));


return cljs.core.constant$keyword$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__11604__auto___16744,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__11526__auto__,c__11604__auto___16744,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__11527__auto__ = null;
var cljs$core$async$mix_$_state_machine__11527__auto____0 = (function (){
var statearr_16736 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16736[(0)] = cljs$core$async$mix_$_state_machine__11527__auto__);

(statearr_16736[(1)] = (1));

return statearr_16736;
});
var cljs$core$async$mix_$_state_machine__11527__auto____1 = (function (state_16691){
while(true){
var ret_value__11528__auto__ = (function (){try{while(true){
var result__11529__auto__ = switch__11526__auto__(state_16691);
if(cljs.core.keyword_identical_QMARK_(result__11529__auto__,cljs.core.constant$keyword$recur)){
continue;
} else {
return result__11529__auto__;
}
break;
}
}catch (e16737){if((e16737 instanceof Object)){
var ex__11530__auto__ = e16737;
var statearr_16738_16775 = state_16691;
(statearr_16738_16775[(5)] = ex__11530__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16691);

return cljs.core.constant$keyword$recur;
} else {
throw e16737;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11528__auto__,cljs.core.constant$keyword$recur)){
var G__16776 = state_16691;
state_16691 = G__16776;
continue;
} else {
return ret_value__11528__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__11527__auto__ = function(state_16691){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__11527__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__11527__auto____1.call(this,state_16691);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__11527__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__11527__auto____0;
cljs$core$async$mix_$_state_machine__11527__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__11527__auto____1;
return cljs$core$async$mix_$_state_machine__11527__auto__;
})()
;})(switch__11526__auto__,c__11604__auto___16744,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__11606__auto__ = (function (){var statearr_16739 = (function (){return (f__11605__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11605__auto__.cljs$core$IFn$_invoke$arity$0() : f__11605__auto__.call(null));
})();
(statearr_16739[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11604__auto___16744);

return statearr_16739;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11606__auto__);
});})(c__11604__auto___16744,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 * state map is a map of channels -> channel-state-map. A
 * channel-state-map is a map of attrs -> boolean, where attr is one or
 * more of :mute, :pause or :solo. Any states supplied are merged with
 * the current state.
 * 
 * Note that channels can be added to a mix via toggle, which can be
 * used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

cljs.core.async.Pub = (function (){var obj16778 = {};
return obj16778;
})();

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((function (){var and__4295__auto__ = p;
if(and__4295__auto__){
return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else {
return and__4295__auto__;
}
})()){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4943__auto__ = (((p == null))?null:p);
return (function (){var or__4307__auto__ = (cljs.core.async.sub_STAR_[(function (){var G__16782 = x__4943__auto__;
return goog.typeOf(G__16782);
})()]);
if(or__4307__auto__){
return or__4307__auto__;
} else {
var or__4307__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(or__4307__auto____$1){
return or__4307__auto____$1;
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((function (){var and__4295__auto__ = p;
if(and__4295__auto__){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else {
return and__4295__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4943__auto__ = (((p == null))?null:p);
return (function (){var or__4307__auto__ = (cljs.core.async.unsub_STAR_[(function (){var G__16786 = x__4943__auto__;
return goog.typeOf(G__16786);
})()]);
if(or__4307__auto__){
return or__4307__auto__;
} else {
var or__4307__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(or__4307__auto____$1){
return or__4307__auto____$1;
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(){
var G__16788 = arguments.length;
switch (G__16788) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((function (){var and__4295__auto__ = p;
if(and__4295__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else {
return and__4295__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4943__auto__ = (((p == null))?null:p);
return (function (){var or__4307__auto__ = (cljs.core.async.unsub_all_STAR_[(function (){var G__16790 = x__4943__auto__;
return goog.typeOf(G__16790);
})()]);
if(or__4307__auto__){
return or__4307__auto__;
} else {
var or__4307__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__4307__auto____$1){
return or__4307__auto____$1;
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((function (){var and__4295__auto__ = p;
if(and__4295__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else {
return and__4295__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4943__auto__ = (((p == null))?null:p);
return (function (){var or__4307__auto__ = (cljs.core.async.unsub_all_STAR_[(function (){var G__16792 = x__4943__auto__;
return goog.typeOf(G__16792);
})()]);
if(or__4307__auto__){
return or__4307__auto__;
} else {
var or__4307__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__4307__auto____$1){
return or__4307__auto____$1;
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 * partitioned into topics by the topic-fn. topic-fn will be applied to
 * each value on the channel and the result will determine the 'topic'
 * on which that value will be put. Channels can be subscribed to
 * receive copies of topics using 'sub', and unsubscribed using
 * 'unsub'. Each topic will be handled by an internal mult on a
 * dedicated channel. By default these internal channels are
 * unbuffered, but a buf-fn can be supplied which, given a topic,
 * creates a buffer with desired properties.
 * 
 * Each item is distributed to all subs in parallel and synchronously,
 * i.e. each sub must accept before the next item is distributed. Use
 * buffering/windowing to prevent slow subs from holding up the pub.
 * 
 * Items received when there are no matching subs get dropped.
 * 
 * Note that if buf-fns are used then each topic is handled
 * asynchronously, i.e. if a channel is subscribed to more than one
 * topic it should not expect them to be interleaved identically with
 * the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(){
var G__16796 = arguments.length;
switch (G__16796) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = (function (){var G__16797 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__16797) : cljs.core.atom.call(null,G__16797));
})();
var ensure_mult = ((function (mults){
return (function (topic){
var or__4307__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__16799 = mults;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16799) : cljs.core.deref.call(null,G__16799));
})(),topic);
if(cljs.core.truth_(or__4307__auto__)){
return or__4307__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__4307__auto__,mults){
return (function (p1__16794_SHARP_){
if(cljs.core.truth_((function (){var G__16800 = topic;
return (p1__16794_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__16794_SHARP_.cljs$core$IFn$_invoke$arity$1(G__16800) : p1__16794_SHARP_.call(null,G__16800));
})())){
return p1__16794_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__16794_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((function (){var G__16801 = topic;
return (buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(G__16801) : buf_fn.call(null,G__16801));
})())));
}
});})(or__4307__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t16802 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t16802 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta16803){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta16803 = meta16803;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t16802.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_16804,meta16803__$1){
var self__ = this;
var _16804__$1 = this;
return (new cljs.core.async.t16802(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta16803__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t16802.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_16804){
var self__ = this;
var _16804__$1 = this;
return self__.meta16803;
});})(mults,ensure_mult))
;

cljs.core.async.t16802.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t16802.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t16802.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t16802.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (function (){var G__16805 = topic;
return (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(G__16805) : self__.ensure_mult.call(null,G__16805));
})();
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t16802.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4423__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__16806 = self__.mults;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16806) : cljs.core.deref.call(null,G__16806));
})(),topic);
if(cljs.core.truth_(temp__4423__auto__)){
var m = temp__4423__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t16802.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__16807 = self__.mults;
var G__16808 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__16807,G__16808) : cljs.core.reset_BANG_.call(null,G__16807,G__16808));
});})(mults,ensure_mult))
;

cljs.core.async.t16802.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t16802.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta16803","meta16803",886542023,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t16802.cljs$lang$type = true;

cljs.core.async.t16802.cljs$lang$ctorStr = "cljs.core.async/t16802";

cljs.core.async.t16802.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4886__auto__,writer__4887__auto__,opt__4888__auto__){
return cljs.core._write(writer__4887__auto__,"cljs.core.async/t16802");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t16802 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t16802(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta16803){
return (new cljs.core.async.t16802(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta16803));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t16802(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__11604__auto___16932 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11604__auto___16932,mults,ensure_mult,p){
return (function (){
var f__11605__auto__ = (function (){var switch__11526__auto__ = ((function (c__11604__auto___16932,mults,ensure_mult,p){
return (function (state_16880){
var state_val_16881 = (state_16880[(1)]);
if((state_val_16881 === (7))){
var inst_16876 = (state_16880[(2)]);
var state_16880__$1 = state_16880;
var statearr_16882_16933 = state_16880__$1;
(statearr_16882_16933[(2)] = inst_16876);

(statearr_16882_16933[(1)] = (3));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_16881 === (20))){
var state_16880__$1 = state_16880;
var statearr_16883_16934 = state_16880__$1;
(statearr_16883_16934[(2)] = null);

(statearr_16883_16934[(1)] = (21));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_16881 === (1))){
var state_16880__$1 = state_16880;
var statearr_16884_16935 = state_16880__$1;
(statearr_16884_16935[(2)] = null);

(statearr_16884_16935[(1)] = (2));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_16881 === (24))){
var inst_16859 = (state_16880[(7)]);
var inst_16868 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_16859);
var state_16880__$1 = state_16880;
var statearr_16885_16936 = state_16880__$1;
(statearr_16885_16936[(2)] = inst_16868);

(statearr_16885_16936[(1)] = (25));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_16881 === (4))){
var inst_16811 = (state_16880[(8)]);
var inst_16811__$1 = (state_16880[(2)]);
var inst_16812 = (inst_16811__$1 == null);
var state_16880__$1 = (function (){var statearr_16886 = state_16880;
(statearr_16886[(8)] = inst_16811__$1);

return statearr_16886;
})();
if(cljs.core.truth_(inst_16812)){
var statearr_16887_16937 = state_16880__$1;
(statearr_16887_16937[(1)] = (5));

} else {
var statearr_16888_16938 = state_16880__$1;
(statearr_16888_16938[(1)] = (6));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_16881 === (15))){
var inst_16853 = (state_16880[(2)]);
var state_16880__$1 = state_16880;
var statearr_16889_16939 = state_16880__$1;
(statearr_16889_16939[(2)] = inst_16853);

(statearr_16889_16939[(1)] = (12));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_16881 === (21))){
var inst_16873 = (state_16880[(2)]);
var state_16880__$1 = (function (){var statearr_16890 = state_16880;
(statearr_16890[(9)] = inst_16873);

return statearr_16890;
})();
var statearr_16891_16940 = state_16880__$1;
(statearr_16891_16940[(2)] = null);

(statearr_16891_16940[(1)] = (2));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_16881 === (13))){
var inst_16835 = (state_16880[(10)]);
var inst_16837 = cljs.core.chunked_seq_QMARK_(inst_16835);
var state_16880__$1 = state_16880;
if(inst_16837){
var statearr_16892_16941 = state_16880__$1;
(statearr_16892_16941[(1)] = (16));

} else {
var statearr_16893_16942 = state_16880__$1;
(statearr_16893_16942[(1)] = (17));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_16881 === (22))){
var inst_16865 = (state_16880[(2)]);
var state_16880__$1 = state_16880;
if(cljs.core.truth_(inst_16865)){
var statearr_16894_16943 = state_16880__$1;
(statearr_16894_16943[(1)] = (23));

} else {
var statearr_16895_16944 = state_16880__$1;
(statearr_16895_16944[(1)] = (24));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_16881 === (6))){
var inst_16859 = (state_16880[(7)]);
var inst_16861 = (state_16880[(11)]);
var inst_16811 = (state_16880[(8)]);
var inst_16859__$1 = (function (){var G__16896 = inst_16811;
return (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(G__16896) : topic_fn.call(null,G__16896));
})();
var inst_16860 = (function (){var G__16897 = mults;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16897) : cljs.core.deref.call(null,G__16897));
})();
var inst_16861__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16860,inst_16859__$1);
var state_16880__$1 = (function (){var statearr_16898 = state_16880;
(statearr_16898[(7)] = inst_16859__$1);

(statearr_16898[(11)] = inst_16861__$1);

return statearr_16898;
})();
if(cljs.core.truth_(inst_16861__$1)){
var statearr_16899_16945 = state_16880__$1;
(statearr_16899_16945[(1)] = (19));

} else {
var statearr_16900_16946 = state_16880__$1;
(statearr_16900_16946[(1)] = (20));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_16881 === (25))){
var inst_16870 = (state_16880[(2)]);
var state_16880__$1 = state_16880;
var statearr_16901_16947 = state_16880__$1;
(statearr_16901_16947[(2)] = inst_16870);

(statearr_16901_16947[(1)] = (21));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_16881 === (17))){
var inst_16835 = (state_16880[(10)]);
var inst_16844 = cljs.core.first(inst_16835);
var inst_16845 = cljs.core.async.muxch_STAR_(inst_16844);
var inst_16846 = cljs.core.async.close_BANG_(inst_16845);
var inst_16847 = cljs.core.next(inst_16835);
var inst_16821 = inst_16847;
var inst_16822 = null;
var inst_16823 = (0);
var inst_16824 = (0);
var state_16880__$1 = (function (){var statearr_16902 = state_16880;
(statearr_16902[(12)] = inst_16846);

(statearr_16902[(13)] = inst_16821);

(statearr_16902[(14)] = inst_16823);

(statearr_16902[(15)] = inst_16824);

(statearr_16902[(16)] = inst_16822);

return statearr_16902;
})();
var statearr_16903_16948 = state_16880__$1;
(statearr_16903_16948[(2)] = null);

(statearr_16903_16948[(1)] = (8));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_16881 === (3))){
var inst_16878 = (state_16880[(2)]);
var state_16880__$1 = state_16880;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16880__$1,inst_16878);
} else {
if((state_val_16881 === (12))){
var inst_16855 = (state_16880[(2)]);
var state_16880__$1 = state_16880;
var statearr_16904_16949 = state_16880__$1;
(statearr_16904_16949[(2)] = inst_16855);

(statearr_16904_16949[(1)] = (9));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_16881 === (2))){
var state_16880__$1 = state_16880;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16880__$1,(4),ch);
} else {
if((state_val_16881 === (23))){
var state_16880__$1 = state_16880;
var statearr_16905_16950 = state_16880__$1;
(statearr_16905_16950[(2)] = null);

(statearr_16905_16950[(1)] = (25));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_16881 === (19))){
var inst_16861 = (state_16880[(11)]);
var inst_16811 = (state_16880[(8)]);
var inst_16863 = cljs.core.async.muxch_STAR_(inst_16861);
var state_16880__$1 = state_16880;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16880__$1,(22),inst_16863,inst_16811);
} else {
if((state_val_16881 === (11))){
var inst_16821 = (state_16880[(13)]);
var inst_16835 = (state_16880[(10)]);
var inst_16835__$1 = cljs.core.seq(inst_16821);
var state_16880__$1 = (function (){var statearr_16906 = state_16880;
(statearr_16906[(10)] = inst_16835__$1);

return statearr_16906;
})();
if(inst_16835__$1){
var statearr_16907_16951 = state_16880__$1;
(statearr_16907_16951[(1)] = (13));

} else {
var statearr_16908_16952 = state_16880__$1;
(statearr_16908_16952[(1)] = (14));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_16881 === (9))){
var inst_16857 = (state_16880[(2)]);
var state_16880__$1 = state_16880;
var statearr_16909_16953 = state_16880__$1;
(statearr_16909_16953[(2)] = inst_16857);

(statearr_16909_16953[(1)] = (7));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_16881 === (5))){
var inst_16818 = (function (){var G__16910 = mults;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16910) : cljs.core.deref.call(null,G__16910));
})();
var inst_16819 = cljs.core.vals(inst_16818);
var inst_16820 = cljs.core.seq(inst_16819);
var inst_16821 = inst_16820;
var inst_16822 = null;
var inst_16823 = (0);
var inst_16824 = (0);
var state_16880__$1 = (function (){var statearr_16911 = state_16880;
(statearr_16911[(13)] = inst_16821);

(statearr_16911[(14)] = inst_16823);

(statearr_16911[(15)] = inst_16824);

(statearr_16911[(16)] = inst_16822);

return statearr_16911;
})();
var statearr_16912_16954 = state_16880__$1;
(statearr_16912_16954[(2)] = null);

(statearr_16912_16954[(1)] = (8));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_16881 === (14))){
var state_16880__$1 = state_16880;
var statearr_16916_16955 = state_16880__$1;
(statearr_16916_16955[(2)] = null);

(statearr_16916_16955[(1)] = (15));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_16881 === (16))){
var inst_16835 = (state_16880[(10)]);
var inst_16839 = cljs.core.chunk_first(inst_16835);
var inst_16840 = cljs.core.chunk_rest(inst_16835);
var inst_16841 = cljs.core.count(inst_16839);
var inst_16821 = inst_16840;
var inst_16822 = inst_16839;
var inst_16823 = inst_16841;
var inst_16824 = (0);
var state_16880__$1 = (function (){var statearr_16917 = state_16880;
(statearr_16917[(13)] = inst_16821);

(statearr_16917[(14)] = inst_16823);

(statearr_16917[(15)] = inst_16824);

(statearr_16917[(16)] = inst_16822);

return statearr_16917;
})();
var statearr_16918_16956 = state_16880__$1;
(statearr_16918_16956[(2)] = null);

(statearr_16918_16956[(1)] = (8));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_16881 === (10))){
var inst_16821 = (state_16880[(13)]);
var inst_16823 = (state_16880[(14)]);
var inst_16824 = (state_16880[(15)]);
var inst_16822 = (state_16880[(16)]);
var inst_16829 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_16822,inst_16824);
var inst_16830 = cljs.core.async.muxch_STAR_(inst_16829);
var inst_16831 = cljs.core.async.close_BANG_(inst_16830);
var inst_16832 = (inst_16824 + (1));
var tmp16913 = inst_16821;
var tmp16914 = inst_16823;
var tmp16915 = inst_16822;
var inst_16821__$1 = tmp16913;
var inst_16822__$1 = tmp16915;
var inst_16823__$1 = tmp16914;
var inst_16824__$1 = inst_16832;
var state_16880__$1 = (function (){var statearr_16919 = state_16880;
(statearr_16919[(13)] = inst_16821__$1);

(statearr_16919[(14)] = inst_16823__$1);

(statearr_16919[(17)] = inst_16831);

(statearr_16919[(15)] = inst_16824__$1);

(statearr_16919[(16)] = inst_16822__$1);

return statearr_16919;
})();
var statearr_16920_16957 = state_16880__$1;
(statearr_16920_16957[(2)] = null);

(statearr_16920_16957[(1)] = (8));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_16881 === (18))){
var inst_16850 = (state_16880[(2)]);
var state_16880__$1 = state_16880;
var statearr_16921_16958 = state_16880__$1;
(statearr_16921_16958[(2)] = inst_16850);

(statearr_16921_16958[(1)] = (15));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_16881 === (8))){
var inst_16823 = (state_16880[(14)]);
var inst_16824 = (state_16880[(15)]);
var inst_16826 = (inst_16824 < inst_16823);
var inst_16827 = inst_16826;
var state_16880__$1 = state_16880;
if(cljs.core.truth_(inst_16827)){
var statearr_16922_16959 = state_16880__$1;
(statearr_16922_16959[(1)] = (10));

} else {
var statearr_16923_16960 = state_16880__$1;
(statearr_16923_16960[(1)] = (11));

}

return cljs.core.constant$keyword$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__11604__auto___16932,mults,ensure_mult,p))
;
return ((function (switch__11526__auto__,c__11604__auto___16932,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__11527__auto__ = null;
var cljs$core$async$state_machine__11527__auto____0 = (function (){
var statearr_16927 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16927[(0)] = cljs$core$async$state_machine__11527__auto__);

(statearr_16927[(1)] = (1));

return statearr_16927;
});
var cljs$core$async$state_machine__11527__auto____1 = (function (state_16880){
while(true){
var ret_value__11528__auto__ = (function (){try{while(true){
var result__11529__auto__ = switch__11526__auto__(state_16880);
if(cljs.core.keyword_identical_QMARK_(result__11529__auto__,cljs.core.constant$keyword$recur)){
continue;
} else {
return result__11529__auto__;
}
break;
}
}catch (e16928){if((e16928 instanceof Object)){
var ex__11530__auto__ = e16928;
var statearr_16929_16961 = state_16880;
(statearr_16929_16961[(5)] = ex__11530__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16880);

return cljs.core.constant$keyword$recur;
} else {
throw e16928;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11528__auto__,cljs.core.constant$keyword$recur)){
var G__16962 = state_16880;
state_16880 = G__16962;
continue;
} else {
return ret_value__11528__auto__;
}
break;
}
});
cljs$core$async$state_machine__11527__auto__ = function(state_16880){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11527__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11527__auto____1.call(this,state_16880);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11527__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11527__auto____0;
cljs$core$async$state_machine__11527__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11527__auto____1;
return cljs$core$async$state_machine__11527__auto__;
})()
;})(switch__11526__auto__,c__11604__auto___16932,mults,ensure_mult,p))
})();
var state__11606__auto__ = (function (){var statearr_16930 = (function (){return (f__11605__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11605__auto__.cljs$core$IFn$_invoke$arity$0() : f__11605__auto__.call(null));
})();
(statearr_16930[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11604__auto___16932);

return statearr_16930;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11606__auto__);
});})(c__11604__auto___16932,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 * By default the channel will be closed when the source closes,
 * but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(){
var G__16964 = arguments.length;
switch (G__16964) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(){
var G__16967 = arguments.length;
switch (G__16967) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1(p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2(p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
/**
 * Takes a function and a collection of source channels, and returns a
 * channel which contains the values produced by applying f to the set
 * of first items taken from each source channel, followed by applying
 * f to the set of second items from each channel, until any one of the
 * channels is closed, at which point the output channel will be
 * closed. The returned channel will be unbuffered by default, or a
 * buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(){
var G__16970 = arguments.length;
switch (G__16970) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = (function (){var G__16971 = null;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__16971) : cljs.core.atom.call(null,G__16971));
})();
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__11604__auto___17045 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11604__auto___17045,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__11605__auto__ = (function (){var switch__11526__auto__ = ((function (c__11604__auto___17045,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_17010){
var state_val_17011 = (state_17010[(1)]);
if((state_val_17011 === (7))){
var state_17010__$1 = state_17010;
var statearr_17012_17046 = state_17010__$1;
(statearr_17012_17046[(2)] = null);

(statearr_17012_17046[(1)] = (8));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_17011 === (1))){
var state_17010__$1 = state_17010;
var statearr_17013_17047 = state_17010__$1;
(statearr_17013_17047[(2)] = null);

(statearr_17013_17047[(1)] = (2));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_17011 === (4))){
var inst_16974 = (state_17010[(7)]);
var inst_16976 = (inst_16974 < cnt);
var state_17010__$1 = state_17010;
if(cljs.core.truth_(inst_16976)){
var statearr_17014_17048 = state_17010__$1;
(statearr_17014_17048[(1)] = (6));

} else {
var statearr_17015_17049 = state_17010__$1;
(statearr_17015_17049[(1)] = (7));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_17011 === (15))){
var inst_17006 = (state_17010[(2)]);
var state_17010__$1 = state_17010;
var statearr_17016_17050 = state_17010__$1;
(statearr_17016_17050[(2)] = inst_17006);

(statearr_17016_17050[(1)] = (3));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_17011 === (13))){
var inst_16999 = cljs.core.async.close_BANG_(out);
var state_17010__$1 = state_17010;
var statearr_17017_17051 = state_17010__$1;
(statearr_17017_17051[(2)] = inst_16999);

(statearr_17017_17051[(1)] = (15));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_17011 === (6))){
var state_17010__$1 = state_17010;
var statearr_17018_17052 = state_17010__$1;
(statearr_17018_17052[(2)] = null);

(statearr_17018_17052[(1)] = (11));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_17011 === (3))){
var inst_17008 = (state_17010[(2)]);
var state_17010__$1 = state_17010;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17010__$1,inst_17008);
} else {
if((state_val_17011 === (12))){
var inst_16996 = (state_17010[(8)]);
var inst_16996__$1 = (state_17010[(2)]);
var inst_16997 = cljs.core.some(cljs.core.nil_QMARK_,inst_16996__$1);
var state_17010__$1 = (function (){var statearr_17019 = state_17010;
(statearr_17019[(8)] = inst_16996__$1);

return statearr_17019;
})();
if(cljs.core.truth_(inst_16997)){
var statearr_17020_17053 = state_17010__$1;
(statearr_17020_17053[(1)] = (13));

} else {
var statearr_17021_17054 = state_17010__$1;
(statearr_17021_17054[(1)] = (14));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_17011 === (2))){
var inst_16973 = (function (){var G__17022 = dctr;
var G__17023 = cnt;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__17022,G__17023) : cljs.core.reset_BANG_.call(null,G__17022,G__17023));
})();
var inst_16974 = (0);
var state_17010__$1 = (function (){var statearr_17024 = state_17010;
(statearr_17024[(9)] = inst_16973);

(statearr_17024[(7)] = inst_16974);

return statearr_17024;
})();
var statearr_17025_17055 = state_17010__$1;
(statearr_17025_17055[(2)] = null);

(statearr_17025_17055[(1)] = (4));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_17011 === (11))){
var inst_16974 = (state_17010[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_17010,(10),Object,null,(9));
var inst_16983 = (function (){var G__17026 = inst_16974;
return (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(G__17026) : chs__$1.call(null,G__17026));
})();
var inst_16984 = (function (){var G__17027 = inst_16974;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__17027) : done.call(null,G__17027));
})();
var inst_16985 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_16983,inst_16984);
var state_17010__$1 = state_17010;
var statearr_17028_17056 = state_17010__$1;
(statearr_17028_17056[(2)] = inst_16985);


cljs.core.async.impl.ioc_helpers.process_exception(state_17010__$1);

return cljs.core.constant$keyword$recur;
} else {
if((state_val_17011 === (9))){
var inst_16974 = (state_17010[(7)]);
var inst_16987 = (state_17010[(2)]);
var inst_16988 = (inst_16974 + (1));
var inst_16974__$1 = inst_16988;
var state_17010__$1 = (function (){var statearr_17029 = state_17010;
(statearr_17029[(7)] = inst_16974__$1);

(statearr_17029[(10)] = inst_16987);

return statearr_17029;
})();
var statearr_17030_17057 = state_17010__$1;
(statearr_17030_17057[(2)] = null);

(statearr_17030_17057[(1)] = (4));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_17011 === (5))){
var inst_16994 = (state_17010[(2)]);
var state_17010__$1 = (function (){var statearr_17031 = state_17010;
(statearr_17031[(11)] = inst_16994);

return statearr_17031;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17010__$1,(12),dchan);
} else {
if((state_val_17011 === (14))){
var inst_16996 = (state_17010[(8)]);
var inst_17001 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_16996);
var state_17010__$1 = state_17010;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17010__$1,(16),out,inst_17001);
} else {
if((state_val_17011 === (16))){
var inst_17003 = (state_17010[(2)]);
var state_17010__$1 = (function (){var statearr_17032 = state_17010;
(statearr_17032[(12)] = inst_17003);

return statearr_17032;
})();
var statearr_17033_17058 = state_17010__$1;
(statearr_17033_17058[(2)] = null);

(statearr_17033_17058[(1)] = (2));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_17011 === (10))){
var inst_16978 = (state_17010[(2)]);
var inst_16979 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_17010__$1 = (function (){var statearr_17034 = state_17010;
(statearr_17034[(13)] = inst_16978);

return statearr_17034;
})();
var statearr_17035_17059 = state_17010__$1;
(statearr_17035_17059[(2)] = inst_16979);


cljs.core.async.impl.ioc_helpers.process_exception(state_17010__$1);

return cljs.core.constant$keyword$recur;
} else {
if((state_val_17011 === (8))){
var inst_16992 = (state_17010[(2)]);
var state_17010__$1 = state_17010;
var statearr_17036_17060 = state_17010__$1;
(statearr_17036_17060[(2)] = inst_16992);

(statearr_17036_17060[(1)] = (5));


return cljs.core.constant$keyword$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__11604__auto___17045,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__11526__auto__,c__11604__auto___17045,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__11527__auto__ = null;
var cljs$core$async$state_machine__11527__auto____0 = (function (){
var statearr_17040 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17040[(0)] = cljs$core$async$state_machine__11527__auto__);

(statearr_17040[(1)] = (1));

return statearr_17040;
});
var cljs$core$async$state_machine__11527__auto____1 = (function (state_17010){
while(true){
var ret_value__11528__auto__ = (function (){try{while(true){
var result__11529__auto__ = switch__11526__auto__(state_17010);
if(cljs.core.keyword_identical_QMARK_(result__11529__auto__,cljs.core.constant$keyword$recur)){
continue;
} else {
return result__11529__auto__;
}
break;
}
}catch (e17041){if((e17041 instanceof Object)){
var ex__11530__auto__ = e17041;
var statearr_17042_17061 = state_17010;
(statearr_17042_17061[(5)] = ex__11530__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17010);

return cljs.core.constant$keyword$recur;
} else {
throw e17041;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11528__auto__,cljs.core.constant$keyword$recur)){
var G__17062 = state_17010;
state_17010 = G__17062;
continue;
} else {
return ret_value__11528__auto__;
}
break;
}
});
cljs$core$async$state_machine__11527__auto__ = function(state_17010){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11527__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11527__auto____1.call(this,state_17010);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11527__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11527__auto____0;
cljs$core$async$state_machine__11527__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11527__auto____1;
return cljs$core$async$state_machine__11527__auto__;
})()
;})(switch__11526__auto__,c__11604__auto___17045,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__11606__auto__ = (function (){var statearr_17043 = (function (){return (f__11605__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11605__auto__.cljs$core$IFn$_invoke$arity$0() : f__11605__auto__.call(null));
})();
(statearr_17043[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11604__auto___17045);

return statearr_17043;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11606__auto__);
});})(c__11604__auto___17045,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 * contains all values taken from them. The returned channel will be
 * unbuffered by default, or a buf-or-n can be supplied. The channel
 * will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(){
var G__17065 = arguments.length;
switch (G__17065) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__11604__auto___17120 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11604__auto___17120,out){
return (function (){
var f__11605__auto__ = (function (){var switch__11526__auto__ = ((function (c__11604__auto___17120,out){
return (function (state_17095){
var state_val_17096 = (state_17095[(1)]);
if((state_val_17096 === (7))){
var inst_17074 = (state_17095[(7)]);
var inst_17075 = (state_17095[(8)]);
var inst_17074__$1 = (state_17095[(2)]);
var inst_17075__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17074__$1,(0),null);
var inst_17076 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17074__$1,(1),null);
var inst_17077 = (inst_17075__$1 == null);
var state_17095__$1 = (function (){var statearr_17097 = state_17095;
(statearr_17097[(7)] = inst_17074__$1);

(statearr_17097[(8)] = inst_17075__$1);

(statearr_17097[(9)] = inst_17076);

return statearr_17097;
})();
if(cljs.core.truth_(inst_17077)){
var statearr_17098_17121 = state_17095__$1;
(statearr_17098_17121[(1)] = (8));

} else {
var statearr_17099_17122 = state_17095__$1;
(statearr_17099_17122[(1)] = (9));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_17096 === (1))){
var inst_17066 = cljs.core.vec(chs);
var inst_17067 = inst_17066;
var state_17095__$1 = (function (){var statearr_17100 = state_17095;
(statearr_17100[(10)] = inst_17067);

return statearr_17100;
})();
var statearr_17101_17123 = state_17095__$1;
(statearr_17101_17123[(2)] = null);

(statearr_17101_17123[(1)] = (2));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_17096 === (4))){
var inst_17067 = (state_17095[(10)]);
var state_17095__$1 = state_17095;
return cljs.core.async.ioc_alts_BANG_(state_17095__$1,(7),inst_17067);
} else {
if((state_val_17096 === (6))){
var inst_17091 = (state_17095[(2)]);
var state_17095__$1 = state_17095;
var statearr_17102_17124 = state_17095__$1;
(statearr_17102_17124[(2)] = inst_17091);

(statearr_17102_17124[(1)] = (3));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_17096 === (3))){
var inst_17093 = (state_17095[(2)]);
var state_17095__$1 = state_17095;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17095__$1,inst_17093);
} else {
if((state_val_17096 === (2))){
var inst_17067 = (state_17095[(10)]);
var inst_17069 = cljs.core.count(inst_17067);
var inst_17070 = (inst_17069 > (0));
var state_17095__$1 = state_17095;
if(cljs.core.truth_(inst_17070)){
var statearr_17104_17125 = state_17095__$1;
(statearr_17104_17125[(1)] = (4));

} else {
var statearr_17105_17126 = state_17095__$1;
(statearr_17105_17126[(1)] = (5));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_17096 === (11))){
var inst_17067 = (state_17095[(10)]);
var inst_17084 = (state_17095[(2)]);
var tmp17103 = inst_17067;
var inst_17067__$1 = tmp17103;
var state_17095__$1 = (function (){var statearr_17106 = state_17095;
(statearr_17106[(10)] = inst_17067__$1);

(statearr_17106[(11)] = inst_17084);

return statearr_17106;
})();
var statearr_17107_17127 = state_17095__$1;
(statearr_17107_17127[(2)] = null);

(statearr_17107_17127[(1)] = (2));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_17096 === (9))){
var inst_17075 = (state_17095[(8)]);
var state_17095__$1 = state_17095;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17095__$1,(11),out,inst_17075);
} else {
if((state_val_17096 === (5))){
var inst_17089 = cljs.core.async.close_BANG_(out);
var state_17095__$1 = state_17095;
var statearr_17108_17128 = state_17095__$1;
(statearr_17108_17128[(2)] = inst_17089);

(statearr_17108_17128[(1)] = (6));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_17096 === (10))){
var inst_17087 = (state_17095[(2)]);
var state_17095__$1 = state_17095;
var statearr_17109_17129 = state_17095__$1;
(statearr_17109_17129[(2)] = inst_17087);

(statearr_17109_17129[(1)] = (6));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_17096 === (8))){
var inst_17074 = (state_17095[(7)]);
var inst_17075 = (state_17095[(8)]);
var inst_17067 = (state_17095[(10)]);
var inst_17076 = (state_17095[(9)]);
var inst_17079 = (function (){var cs = inst_17067;
var vec__17072 = inst_17074;
var v = inst_17075;
var c = inst_17076;
return ((function (cs,vec__17072,v,c,inst_17074,inst_17075,inst_17067,inst_17076,state_val_17096,c__11604__auto___17120,out){
return (function (p1__17063_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__17063_SHARP_);
});
;})(cs,vec__17072,v,c,inst_17074,inst_17075,inst_17067,inst_17076,state_val_17096,c__11604__auto___17120,out))
})();
var inst_17080 = cljs.core.filterv(inst_17079,inst_17067);
var inst_17067__$1 = inst_17080;
var state_17095__$1 = (function (){var statearr_17110 = state_17095;
(statearr_17110[(10)] = inst_17067__$1);

return statearr_17110;
})();
var statearr_17111_17130 = state_17095__$1;
(statearr_17111_17130[(2)] = null);

(statearr_17111_17130[(1)] = (2));


return cljs.core.constant$keyword$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__11604__auto___17120,out))
;
return ((function (switch__11526__auto__,c__11604__auto___17120,out){
return (function() {
var cljs$core$async$state_machine__11527__auto__ = null;
var cljs$core$async$state_machine__11527__auto____0 = (function (){
var statearr_17115 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17115[(0)] = cljs$core$async$state_machine__11527__auto__);

(statearr_17115[(1)] = (1));

return statearr_17115;
});
var cljs$core$async$state_machine__11527__auto____1 = (function (state_17095){
while(true){
var ret_value__11528__auto__ = (function (){try{while(true){
var result__11529__auto__ = switch__11526__auto__(state_17095);
if(cljs.core.keyword_identical_QMARK_(result__11529__auto__,cljs.core.constant$keyword$recur)){
continue;
} else {
return result__11529__auto__;
}
break;
}
}catch (e17116){if((e17116 instanceof Object)){
var ex__11530__auto__ = e17116;
var statearr_17117_17131 = state_17095;
(statearr_17117_17131[(5)] = ex__11530__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17095);

return cljs.core.constant$keyword$recur;
} else {
throw e17116;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11528__auto__,cljs.core.constant$keyword$recur)){
var G__17132 = state_17095;
state_17095 = G__17132;
continue;
} else {
return ret_value__11528__auto__;
}
break;
}
});
cljs$core$async$state_machine__11527__auto__ = function(state_17095){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11527__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11527__auto____1.call(this,state_17095);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11527__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11527__auto____0;
cljs$core$async$state_machine__11527__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11527__auto____1;
return cljs$core$async$state_machine__11527__auto__;
})()
;})(switch__11526__auto__,c__11604__auto___17120,out))
})();
var state__11606__auto__ = (function (){var statearr_17118 = (function (){return (f__11605__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11605__auto__.cljs$core$IFn$_invoke$arity$0() : f__11605__auto__.call(null));
})();
(statearr_17118[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11604__auto___17120);

return statearr_17118;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11606__auto__);
});})(c__11604__auto___17120,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 * items taken from the channel conjoined to the supplied
 * collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 * The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(){
var G__17134 = arguments.length;
switch (G__17134) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__11604__auto___17182 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11604__auto___17182,out){
return (function (){
var f__11605__auto__ = (function (){var switch__11526__auto__ = ((function (c__11604__auto___17182,out){
return (function (state_17158){
var state_val_17159 = (state_17158[(1)]);
if((state_val_17159 === (7))){
var inst_17140 = (state_17158[(7)]);
var inst_17140__$1 = (state_17158[(2)]);
var inst_17141 = (inst_17140__$1 == null);
var inst_17142 = cljs.core.not(inst_17141);
var state_17158__$1 = (function (){var statearr_17160 = state_17158;
(statearr_17160[(7)] = inst_17140__$1);

return statearr_17160;
})();
if(inst_17142){
var statearr_17161_17183 = state_17158__$1;
(statearr_17161_17183[(1)] = (8));

} else {
var statearr_17162_17184 = state_17158__$1;
(statearr_17162_17184[(1)] = (9));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_17159 === (1))){
var inst_17135 = (0);
var state_17158__$1 = (function (){var statearr_17163 = state_17158;
(statearr_17163[(8)] = inst_17135);

return statearr_17163;
})();
var statearr_17164_17185 = state_17158__$1;
(statearr_17164_17185[(2)] = null);

(statearr_17164_17185[(1)] = (2));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_17159 === (4))){
var state_17158__$1 = state_17158;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17158__$1,(7),ch);
} else {
if((state_val_17159 === (6))){
var inst_17153 = (state_17158[(2)]);
var state_17158__$1 = state_17158;
var statearr_17165_17186 = state_17158__$1;
(statearr_17165_17186[(2)] = inst_17153);

(statearr_17165_17186[(1)] = (3));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_17159 === (3))){
var inst_17155 = (state_17158[(2)]);
var inst_17156 = cljs.core.async.close_BANG_(out);
var state_17158__$1 = (function (){var statearr_17166 = state_17158;
(statearr_17166[(9)] = inst_17155);

return statearr_17166;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_17158__$1,inst_17156);
} else {
if((state_val_17159 === (2))){
var inst_17135 = (state_17158[(8)]);
var inst_17137 = (inst_17135 < n);
var state_17158__$1 = state_17158;
if(cljs.core.truth_(inst_17137)){
var statearr_17167_17187 = state_17158__$1;
(statearr_17167_17187[(1)] = (4));

} else {
var statearr_17168_17188 = state_17158__$1;
(statearr_17168_17188[(1)] = (5));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_17159 === (11))){
var inst_17135 = (state_17158[(8)]);
var inst_17145 = (state_17158[(2)]);
var inst_17146 = (inst_17135 + (1));
var inst_17135__$1 = inst_17146;
var state_17158__$1 = (function (){var statearr_17169 = state_17158;
(statearr_17169[(10)] = inst_17145);

(statearr_17169[(8)] = inst_17135__$1);

return statearr_17169;
})();
var statearr_17170_17189 = state_17158__$1;
(statearr_17170_17189[(2)] = null);

(statearr_17170_17189[(1)] = (2));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_17159 === (9))){
var state_17158__$1 = state_17158;
var statearr_17171_17190 = state_17158__$1;
(statearr_17171_17190[(2)] = null);

(statearr_17171_17190[(1)] = (10));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_17159 === (5))){
var state_17158__$1 = state_17158;
var statearr_17172_17191 = state_17158__$1;
(statearr_17172_17191[(2)] = null);

(statearr_17172_17191[(1)] = (6));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_17159 === (10))){
var inst_17150 = (state_17158[(2)]);
var state_17158__$1 = state_17158;
var statearr_17173_17192 = state_17158__$1;
(statearr_17173_17192[(2)] = inst_17150);

(statearr_17173_17192[(1)] = (6));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_17159 === (8))){
var inst_17140 = (state_17158[(7)]);
var state_17158__$1 = state_17158;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17158__$1,(11),out,inst_17140);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__11604__auto___17182,out))
;
return ((function (switch__11526__auto__,c__11604__auto___17182,out){
return (function() {
var cljs$core$async$state_machine__11527__auto__ = null;
var cljs$core$async$state_machine__11527__auto____0 = (function (){
var statearr_17177 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17177[(0)] = cljs$core$async$state_machine__11527__auto__);

(statearr_17177[(1)] = (1));

return statearr_17177;
});
var cljs$core$async$state_machine__11527__auto____1 = (function (state_17158){
while(true){
var ret_value__11528__auto__ = (function (){try{while(true){
var result__11529__auto__ = switch__11526__auto__(state_17158);
if(cljs.core.keyword_identical_QMARK_(result__11529__auto__,cljs.core.constant$keyword$recur)){
continue;
} else {
return result__11529__auto__;
}
break;
}
}catch (e17178){if((e17178 instanceof Object)){
var ex__11530__auto__ = e17178;
var statearr_17179_17193 = state_17158;
(statearr_17179_17193[(5)] = ex__11530__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17158);

return cljs.core.constant$keyword$recur;
} else {
throw e17178;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11528__auto__,cljs.core.constant$keyword$recur)){
var G__17194 = state_17158;
state_17158 = G__17194;
continue;
} else {
return ret_value__11528__auto__;
}
break;
}
});
cljs$core$async$state_machine__11527__auto__ = function(state_17158){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11527__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11527__auto____1.call(this,state_17158);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11527__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11527__auto____0;
cljs$core$async$state_machine__11527__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11527__auto____1;
return cljs$core$async$state_machine__11527__auto__;
})()
;})(switch__11526__auto__,c__11604__auto___17182,out))
})();
var state__11606__auto__ = (function (){var statearr_17180 = (function (){return (f__11605__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11605__auto__.cljs$core$IFn$_invoke$arity$0() : f__11605__auto__.call(null));
})();
(statearr_17180[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11604__auto___17182);

return statearr_17180;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11606__auto__);
});})(c__11604__auto___17182,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t17207 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t17207 = (function (map_LT_,f,ch,meta17208){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta17208 = meta17208;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t17207.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17209,meta17208__$1){
var self__ = this;
var _17209__$1 = this;
return (new cljs.core.async.t17207(self__.map_LT_,self__.f,self__.ch,meta17208__$1));
});

cljs.core.async.t17207.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17209){
var self__ = this;
var _17209__$1 = this;
return self__.meta17208;
});

cljs.core.async.t17207.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t17207.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t17207.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t17207.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t17207.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if(typeof cljs.core.async.t17210 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t17210 = (function (map_LT_,f,ch,meta17208,_,fn1,meta17211){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta17208 = meta17208;
this._ = _;
this.fn1 = fn1;
this.meta17211 = meta17211;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t17210.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_17212,meta17211__$1){
var self__ = this;
var _17212__$1 = this;
return (new cljs.core.async.t17210(self__.map_LT_,self__.f,self__.ch,self__.meta17208,self__._,self__.fn1,meta17211__$1));
});})(___$1))
;

cljs.core.async.t17210.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_17212){
var self__ = this;
var _17212__$1 = this;
return self__.meta17211;
});})(___$1))
;

cljs.core.async.t17210.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t17210.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;

cljs.core.async.t17210.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__17195_SHARP_){
var G__17213 = (((p1__17195_SHARP_ == null))?null:(function (){var G__17214 = p1__17195_SHARP_;
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__17214) : self__.f.call(null,G__17214));
})());
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__17213) : f1.call(null,G__17213));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t17210.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta17208","meta17208",-1892684739,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta17211","meta17211",1394404736,null)], null);
});})(___$1))
;

cljs.core.async.t17210.cljs$lang$type = true;

cljs.core.async.t17210.cljs$lang$ctorStr = "cljs.core.async/t17210";

cljs.core.async.t17210.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4886__auto__,writer__4887__auto__,opt__4888__auto__){
return cljs.core._write(writer__4887__auto__,"cljs.core.async/t17210");
});})(___$1))
;

cljs.core.async.__GT_t17210 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t17210(map_LT___$1,f__$1,ch__$1,meta17208__$1,___$2,fn1__$1,meta17211){
return (new cljs.core.async.t17210(map_LT___$1,f__$1,ch__$1,meta17208__$1,___$2,fn1__$1,meta17211));
});})(___$1))
;

}

return (new cljs.core.async.t17210(self__.map_LT_,self__.f,self__.ch,self__.meta17208,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4295__auto__ = ret;
if(cljs.core.truth_(and__4295__auto__)){
return !(((function (){var G__17215 = ret;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__17215) : cljs.core.deref.call(null,G__17215));
})() == null));
} else {
return and__4295__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__17216 = (function (){var G__17217 = ret;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__17217) : cljs.core.deref.call(null,G__17217));
})();
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__17216) : self__.f.call(null,G__17216));
})());
} else {
return ret;
}
});

cljs.core.async.t17207.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t17207.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});

cljs.core.async.t17207.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta17208","meta17208",-1892684739,null)], null);
});

cljs.core.async.t17207.cljs$lang$type = true;

cljs.core.async.t17207.cljs$lang$ctorStr = "cljs.core.async/t17207";

cljs.core.async.t17207.cljs$lang$ctorPrWriter = (function (this__4886__auto__,writer__4887__auto__,opt__4888__auto__){
return cljs.core._write(writer__4887__auto__,"cljs.core.async/t17207");
});

cljs.core.async.__GT_t17207 = (function cljs$core$async$map_LT__$___GT_t17207(map_LT___$1,f__$1,ch__$1,meta17208){
return (new cljs.core.async.t17207(map_LT___$1,f__$1,ch__$1,meta17208));
});

}

return (new cljs.core.async.t17207(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t17222 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t17222 = (function (map_GT_,f,ch,meta17223){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta17223 = meta17223;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t17222.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17224,meta17223__$1){
var self__ = this;
var _17224__$1 = this;
return (new cljs.core.async.t17222(self__.map_GT_,self__.f,self__.ch,meta17223__$1));
});

cljs.core.async.t17222.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17224){
var self__ = this;
var _17224__$1 = this;
return self__.meta17223;
});

cljs.core.async.t17222.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t17222.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t17222.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t17222.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t17222.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t17222.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(function (){var G__17225 = val;
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__17225) : self__.f.call(null,G__17225));
})(),fn1);
});

cljs.core.async.t17222.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta17223","meta17223",1024967951,null)], null);
});

cljs.core.async.t17222.cljs$lang$type = true;

cljs.core.async.t17222.cljs$lang$ctorStr = "cljs.core.async/t17222";

cljs.core.async.t17222.cljs$lang$ctorPrWriter = (function (this__4886__auto__,writer__4887__auto__,opt__4888__auto__){
return cljs.core._write(writer__4887__auto__,"cljs.core.async/t17222");
});

cljs.core.async.__GT_t17222 = (function cljs$core$async$map_GT__$___GT_t17222(map_GT___$1,f__$1,ch__$1,meta17223){
return (new cljs.core.async.t17222(map_GT___$1,f__$1,ch__$1,meta17223));
});

}

return (new cljs.core.async.t17222(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t17230 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t17230 = (function (filter_GT_,p,ch,meta17231){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta17231 = meta17231;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t17230.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17232,meta17231__$1){
var self__ = this;
var _17232__$1 = this;
return (new cljs.core.async.t17230(self__.filter_GT_,self__.p,self__.ch,meta17231__$1));
});

cljs.core.async.t17230.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17232){
var self__ = this;
var _17232__$1 = this;
return self__.meta17231;
});

cljs.core.async.t17230.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t17230.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t17230.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t17230.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t17230.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t17230.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t17230.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((function (){var G__17233 = val;
return (self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(G__17233) : self__.p.call(null,G__17233));
})())){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});

cljs.core.async.t17230.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta17231","meta17231",-315349988,null)], null);
});

cljs.core.async.t17230.cljs$lang$type = true;

cljs.core.async.t17230.cljs$lang$ctorStr = "cljs.core.async/t17230";

cljs.core.async.t17230.cljs$lang$ctorPrWriter = (function (this__4886__auto__,writer__4887__auto__,opt__4888__auto__){
return cljs.core._write(writer__4887__auto__,"cljs.core.async/t17230");
});

cljs.core.async.__GT_t17230 = (function cljs$core$async$filter_GT__$___GT_t17230(filter_GT___$1,p__$1,ch__$1,meta17231){
return (new cljs.core.async.t17230(filter_GT___$1,p__$1,ch__$1,meta17231));
});

}

return (new cljs.core.async.t17230(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(){
var G__17235 = arguments.length;
switch (G__17235) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__11604__auto___17279 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11604__auto___17279,out){
return (function (){
var f__11605__auto__ = (function (){var switch__11526__auto__ = ((function (c__11604__auto___17279,out){
return (function (state_17256){
var state_val_17257 = (state_17256[(1)]);
if((state_val_17257 === (7))){
var inst_17252 = (state_17256[(2)]);
var state_17256__$1 = state_17256;
var statearr_17258_17280 = state_17256__$1;
(statearr_17258_17280[(2)] = inst_17252);

(statearr_17258_17280[(1)] = (3));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_17257 === (1))){
var state_17256__$1 = state_17256;
var statearr_17259_17281 = state_17256__$1;
(statearr_17259_17281[(2)] = null);

(statearr_17259_17281[(1)] = (2));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_17257 === (4))){
var inst_17238 = (state_17256[(7)]);
var inst_17238__$1 = (state_17256[(2)]);
var inst_17239 = (inst_17238__$1 == null);
var state_17256__$1 = (function (){var statearr_17260 = state_17256;
(statearr_17260[(7)] = inst_17238__$1);

return statearr_17260;
})();
if(cljs.core.truth_(inst_17239)){
var statearr_17261_17282 = state_17256__$1;
(statearr_17261_17282[(1)] = (5));

} else {
var statearr_17262_17283 = state_17256__$1;
(statearr_17262_17283[(1)] = (6));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_17257 === (6))){
var inst_17238 = (state_17256[(7)]);
var inst_17243 = (function (){var G__17263 = inst_17238;
return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__17263) : p.call(null,G__17263));
})();
var state_17256__$1 = state_17256;
if(cljs.core.truth_(inst_17243)){
var statearr_17264_17284 = state_17256__$1;
(statearr_17264_17284[(1)] = (8));

} else {
var statearr_17265_17285 = state_17256__$1;
(statearr_17265_17285[(1)] = (9));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_17257 === (3))){
var inst_17254 = (state_17256[(2)]);
var state_17256__$1 = state_17256;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17256__$1,inst_17254);
} else {
if((state_val_17257 === (2))){
var state_17256__$1 = state_17256;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17256__$1,(4),ch);
} else {
if((state_val_17257 === (11))){
var inst_17246 = (state_17256[(2)]);
var state_17256__$1 = state_17256;
var statearr_17266_17286 = state_17256__$1;
(statearr_17266_17286[(2)] = inst_17246);

(statearr_17266_17286[(1)] = (10));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_17257 === (9))){
var state_17256__$1 = state_17256;
var statearr_17267_17287 = state_17256__$1;
(statearr_17267_17287[(2)] = null);

(statearr_17267_17287[(1)] = (10));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_17257 === (5))){
var inst_17241 = cljs.core.async.close_BANG_(out);
var state_17256__$1 = state_17256;
var statearr_17268_17288 = state_17256__$1;
(statearr_17268_17288[(2)] = inst_17241);

(statearr_17268_17288[(1)] = (7));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_17257 === (10))){
var inst_17249 = (state_17256[(2)]);
var state_17256__$1 = (function (){var statearr_17269 = state_17256;
(statearr_17269[(8)] = inst_17249);

return statearr_17269;
})();
var statearr_17270_17289 = state_17256__$1;
(statearr_17270_17289[(2)] = null);

(statearr_17270_17289[(1)] = (2));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_17257 === (8))){
var inst_17238 = (state_17256[(7)]);
var state_17256__$1 = state_17256;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17256__$1,(11),out,inst_17238);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__11604__auto___17279,out))
;
return ((function (switch__11526__auto__,c__11604__auto___17279,out){
return (function() {
var cljs$core$async$state_machine__11527__auto__ = null;
var cljs$core$async$state_machine__11527__auto____0 = (function (){
var statearr_17274 = [null,null,null,null,null,null,null,null,null];
(statearr_17274[(0)] = cljs$core$async$state_machine__11527__auto__);

(statearr_17274[(1)] = (1));

return statearr_17274;
});
var cljs$core$async$state_machine__11527__auto____1 = (function (state_17256){
while(true){
var ret_value__11528__auto__ = (function (){try{while(true){
var result__11529__auto__ = switch__11526__auto__(state_17256);
if(cljs.core.keyword_identical_QMARK_(result__11529__auto__,cljs.core.constant$keyword$recur)){
continue;
} else {
return result__11529__auto__;
}
break;
}
}catch (e17275){if((e17275 instanceof Object)){
var ex__11530__auto__ = e17275;
var statearr_17276_17290 = state_17256;
(statearr_17276_17290[(5)] = ex__11530__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17256);

return cljs.core.constant$keyword$recur;
} else {
throw e17275;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11528__auto__,cljs.core.constant$keyword$recur)){
var G__17291 = state_17256;
state_17256 = G__17291;
continue;
} else {
return ret_value__11528__auto__;
}
break;
}
});
cljs$core$async$state_machine__11527__auto__ = function(state_17256){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11527__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11527__auto____1.call(this,state_17256);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11527__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11527__auto____0;
cljs$core$async$state_machine__11527__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11527__auto____1;
return cljs$core$async$state_machine__11527__auto__;
})()
;})(switch__11526__auto__,c__11604__auto___17279,out))
})();
var state__11606__auto__ = (function (){var statearr_17277 = (function (){return (f__11605__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11605__auto__.cljs$core$IFn$_invoke$arity$0() : f__11605__auto__.call(null));
})();
(statearr_17277[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11604__auto___17279);

return statearr_17277;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11606__auto__);
});})(c__11604__auto___17279,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(){
var G__17293 = arguments.length;
switch (G__17293) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__11604__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11604__auto__){
return (function (){
var f__11605__auto__ = (function (){var switch__11526__auto__ = ((function (c__11604__auto__){
return (function (state_17461){
var state_val_17462 = (state_17461[(1)]);
if((state_val_17462 === (7))){
var inst_17457 = (state_17461[(2)]);
var state_17461__$1 = state_17461;
var statearr_17463_17505 = state_17461__$1;
(statearr_17463_17505[(2)] = inst_17457);

(statearr_17463_17505[(1)] = (3));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_17462 === (20))){
var inst_17427 = (state_17461[(7)]);
var inst_17438 = (state_17461[(2)]);
var inst_17439 = cljs.core.next(inst_17427);
var inst_17413 = inst_17439;
var inst_17414 = null;
var inst_17415 = (0);
var inst_17416 = (0);
var state_17461__$1 = (function (){var statearr_17464 = state_17461;
(statearr_17464[(8)] = inst_17413);

(statearr_17464[(9)] = inst_17415);

(statearr_17464[(10)] = inst_17414);

(statearr_17464[(11)] = inst_17438);

(statearr_17464[(12)] = inst_17416);

return statearr_17464;
})();
var statearr_17465_17506 = state_17461__$1;
(statearr_17465_17506[(2)] = null);

(statearr_17465_17506[(1)] = (8));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_17462 === (1))){
var state_17461__$1 = state_17461;
var statearr_17466_17507 = state_17461__$1;
(statearr_17466_17507[(2)] = null);

(statearr_17466_17507[(1)] = (2));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_17462 === (4))){
var inst_17402 = (state_17461[(13)]);
var inst_17402__$1 = (state_17461[(2)]);
var inst_17403 = (inst_17402__$1 == null);
var state_17461__$1 = (function (){var statearr_17467 = state_17461;
(statearr_17467[(13)] = inst_17402__$1);

return statearr_17467;
})();
if(cljs.core.truth_(inst_17403)){
var statearr_17468_17508 = state_17461__$1;
(statearr_17468_17508[(1)] = (5));

} else {
var statearr_17469_17509 = state_17461__$1;
(statearr_17469_17509[(1)] = (6));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_17462 === (15))){
var state_17461__$1 = state_17461;
var statearr_17473_17510 = state_17461__$1;
(statearr_17473_17510[(2)] = null);

(statearr_17473_17510[(1)] = (16));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_17462 === (21))){
var state_17461__$1 = state_17461;
var statearr_17474_17511 = state_17461__$1;
(statearr_17474_17511[(2)] = null);

(statearr_17474_17511[(1)] = (23));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_17462 === (13))){
var inst_17413 = (state_17461[(8)]);
var inst_17415 = (state_17461[(9)]);
var inst_17414 = (state_17461[(10)]);
var inst_17416 = (state_17461[(12)]);
var inst_17423 = (state_17461[(2)]);
var inst_17424 = (inst_17416 + (1));
var tmp17470 = inst_17413;
var tmp17471 = inst_17415;
var tmp17472 = inst_17414;
var inst_17413__$1 = tmp17470;
var inst_17414__$1 = tmp17472;
var inst_17415__$1 = tmp17471;
var inst_17416__$1 = inst_17424;
var state_17461__$1 = (function (){var statearr_17475 = state_17461;
(statearr_17475[(14)] = inst_17423);

(statearr_17475[(8)] = inst_17413__$1);

(statearr_17475[(9)] = inst_17415__$1);

(statearr_17475[(10)] = inst_17414__$1);

(statearr_17475[(12)] = inst_17416__$1);

return statearr_17475;
})();
var statearr_17476_17512 = state_17461__$1;
(statearr_17476_17512[(2)] = null);

(statearr_17476_17512[(1)] = (8));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_17462 === (22))){
var state_17461__$1 = state_17461;
var statearr_17477_17513 = state_17461__$1;
(statearr_17477_17513[(2)] = null);

(statearr_17477_17513[(1)] = (2));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_17462 === (6))){
var inst_17402 = (state_17461[(13)]);
var inst_17411 = (function (){var G__17478 = inst_17402;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__17478) : f.call(null,G__17478));
})();
var inst_17412 = cljs.core.seq(inst_17411);
var inst_17413 = inst_17412;
var inst_17414 = null;
var inst_17415 = (0);
var inst_17416 = (0);
var state_17461__$1 = (function (){var statearr_17479 = state_17461;
(statearr_17479[(8)] = inst_17413);

(statearr_17479[(9)] = inst_17415);

(statearr_17479[(10)] = inst_17414);

(statearr_17479[(12)] = inst_17416);

return statearr_17479;
})();
var statearr_17480_17514 = state_17461__$1;
(statearr_17480_17514[(2)] = null);

(statearr_17480_17514[(1)] = (8));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_17462 === (17))){
var inst_17427 = (state_17461[(7)]);
var inst_17431 = cljs.core.chunk_first(inst_17427);
var inst_17432 = cljs.core.chunk_rest(inst_17427);
var inst_17433 = cljs.core.count(inst_17431);
var inst_17413 = inst_17432;
var inst_17414 = inst_17431;
var inst_17415 = inst_17433;
var inst_17416 = (0);
var state_17461__$1 = (function (){var statearr_17481 = state_17461;
(statearr_17481[(8)] = inst_17413);

(statearr_17481[(9)] = inst_17415);

(statearr_17481[(10)] = inst_17414);

(statearr_17481[(12)] = inst_17416);

return statearr_17481;
})();
var statearr_17482_17515 = state_17461__$1;
(statearr_17482_17515[(2)] = null);

(statearr_17482_17515[(1)] = (8));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_17462 === (3))){
var inst_17459 = (state_17461[(2)]);
var state_17461__$1 = state_17461;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17461__$1,inst_17459);
} else {
if((state_val_17462 === (12))){
var inst_17447 = (state_17461[(2)]);
var state_17461__$1 = state_17461;
var statearr_17483_17516 = state_17461__$1;
(statearr_17483_17516[(2)] = inst_17447);

(statearr_17483_17516[(1)] = (9));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_17462 === (2))){
var state_17461__$1 = state_17461;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17461__$1,(4),in$);
} else {
if((state_val_17462 === (23))){
var inst_17455 = (state_17461[(2)]);
var state_17461__$1 = state_17461;
var statearr_17484_17517 = state_17461__$1;
(statearr_17484_17517[(2)] = inst_17455);

(statearr_17484_17517[(1)] = (7));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_17462 === (19))){
var inst_17442 = (state_17461[(2)]);
var state_17461__$1 = state_17461;
var statearr_17485_17518 = state_17461__$1;
(statearr_17485_17518[(2)] = inst_17442);

(statearr_17485_17518[(1)] = (16));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_17462 === (11))){
var inst_17427 = (state_17461[(7)]);
var inst_17413 = (state_17461[(8)]);
var inst_17427__$1 = cljs.core.seq(inst_17413);
var state_17461__$1 = (function (){var statearr_17486 = state_17461;
(statearr_17486[(7)] = inst_17427__$1);

return statearr_17486;
})();
if(inst_17427__$1){
var statearr_17487_17519 = state_17461__$1;
(statearr_17487_17519[(1)] = (14));

} else {
var statearr_17488_17520 = state_17461__$1;
(statearr_17488_17520[(1)] = (15));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_17462 === (9))){
var inst_17449 = (state_17461[(2)]);
var inst_17450 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_17461__$1 = (function (){var statearr_17489 = state_17461;
(statearr_17489[(15)] = inst_17449);

return statearr_17489;
})();
if(cljs.core.truth_(inst_17450)){
var statearr_17490_17521 = state_17461__$1;
(statearr_17490_17521[(1)] = (21));

} else {
var statearr_17491_17522 = state_17461__$1;
(statearr_17491_17522[(1)] = (22));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_17462 === (5))){
var inst_17405 = cljs.core.async.close_BANG_(out);
var state_17461__$1 = state_17461;
var statearr_17492_17523 = state_17461__$1;
(statearr_17492_17523[(2)] = inst_17405);

(statearr_17492_17523[(1)] = (7));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_17462 === (14))){
var inst_17427 = (state_17461[(7)]);
var inst_17429 = cljs.core.chunked_seq_QMARK_(inst_17427);
var state_17461__$1 = state_17461;
if(inst_17429){
var statearr_17493_17524 = state_17461__$1;
(statearr_17493_17524[(1)] = (17));

} else {
var statearr_17494_17525 = state_17461__$1;
(statearr_17494_17525[(1)] = (18));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_17462 === (16))){
var inst_17445 = (state_17461[(2)]);
var state_17461__$1 = state_17461;
var statearr_17495_17526 = state_17461__$1;
(statearr_17495_17526[(2)] = inst_17445);

(statearr_17495_17526[(1)] = (12));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_17462 === (10))){
var inst_17414 = (state_17461[(10)]);
var inst_17416 = (state_17461[(12)]);
var inst_17421 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_17414,inst_17416);
var state_17461__$1 = state_17461;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17461__$1,(13),out,inst_17421);
} else {
if((state_val_17462 === (18))){
var inst_17427 = (state_17461[(7)]);
var inst_17436 = cljs.core.first(inst_17427);
var state_17461__$1 = state_17461;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17461__$1,(20),out,inst_17436);
} else {
if((state_val_17462 === (8))){
var inst_17415 = (state_17461[(9)]);
var inst_17416 = (state_17461[(12)]);
var inst_17418 = (inst_17416 < inst_17415);
var inst_17419 = inst_17418;
var state_17461__$1 = state_17461;
if(cljs.core.truth_(inst_17419)){
var statearr_17496_17527 = state_17461__$1;
(statearr_17496_17527[(1)] = (10));

} else {
var statearr_17497_17528 = state_17461__$1;
(statearr_17497_17528[(1)] = (11));

}

return cljs.core.constant$keyword$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__11604__auto__))
;
return ((function (switch__11526__auto__,c__11604__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__11527__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__11527__auto____0 = (function (){
var statearr_17501 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17501[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__11527__auto__);

(statearr_17501[(1)] = (1));

return statearr_17501;
});
var cljs$core$async$mapcat_STAR__$_state_machine__11527__auto____1 = (function (state_17461){
while(true){
var ret_value__11528__auto__ = (function (){try{while(true){
var result__11529__auto__ = switch__11526__auto__(state_17461);
if(cljs.core.keyword_identical_QMARK_(result__11529__auto__,cljs.core.constant$keyword$recur)){
continue;
} else {
return result__11529__auto__;
}
break;
}
}catch (e17502){if((e17502 instanceof Object)){
var ex__11530__auto__ = e17502;
var statearr_17503_17529 = state_17461;
(statearr_17503_17529[(5)] = ex__11530__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17461);

return cljs.core.constant$keyword$recur;
} else {
throw e17502;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11528__auto__,cljs.core.constant$keyword$recur)){
var G__17530 = state_17461;
state_17461 = G__17530;
continue;
} else {
return ret_value__11528__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__11527__auto__ = function(state_17461){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__11527__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__11527__auto____1.call(this,state_17461);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__11527__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__11527__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__11527__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__11527__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__11527__auto__;
})()
;})(switch__11526__auto__,c__11604__auto__))
})();
var state__11606__auto__ = (function (){var statearr_17504 = (function (){return (f__11605__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11605__auto__.cljs$core$IFn$_invoke$arity$0() : f__11605__auto__.call(null));
})();
(statearr_17504[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11604__auto__);

return statearr_17504;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11606__auto__);
});})(c__11604__auto__))
);

return c__11604__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(){
var G__17532 = arguments.length;
switch (G__17532) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(){
var G__17535 = arguments.length;
switch (G__17535) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(){
var G__17538 = arguments.length;
switch (G__17538) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__11604__auto___17588 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11604__auto___17588,out){
return (function (){
var f__11605__auto__ = (function (){var switch__11526__auto__ = ((function (c__11604__auto___17588,out){
return (function (state_17562){
var state_val_17563 = (state_17562[(1)]);
if((state_val_17563 === (7))){
var inst_17557 = (state_17562[(2)]);
var state_17562__$1 = state_17562;
var statearr_17564_17589 = state_17562__$1;
(statearr_17564_17589[(2)] = inst_17557);

(statearr_17564_17589[(1)] = (3));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_17563 === (1))){
var inst_17539 = null;
var state_17562__$1 = (function (){var statearr_17565 = state_17562;
(statearr_17565[(7)] = inst_17539);

return statearr_17565;
})();
var statearr_17566_17590 = state_17562__$1;
(statearr_17566_17590[(2)] = null);

(statearr_17566_17590[(1)] = (2));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_17563 === (4))){
var inst_17542 = (state_17562[(8)]);
var inst_17542__$1 = (state_17562[(2)]);
var inst_17543 = (inst_17542__$1 == null);
var inst_17544 = cljs.core.not(inst_17543);
var state_17562__$1 = (function (){var statearr_17567 = state_17562;
(statearr_17567[(8)] = inst_17542__$1);

return statearr_17567;
})();
if(inst_17544){
var statearr_17568_17591 = state_17562__$1;
(statearr_17568_17591[(1)] = (5));

} else {
var statearr_17569_17592 = state_17562__$1;
(statearr_17569_17592[(1)] = (6));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_17563 === (6))){
var state_17562__$1 = state_17562;
var statearr_17570_17593 = state_17562__$1;
(statearr_17570_17593[(2)] = null);

(statearr_17570_17593[(1)] = (7));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_17563 === (3))){
var inst_17559 = (state_17562[(2)]);
var inst_17560 = cljs.core.async.close_BANG_(out);
var state_17562__$1 = (function (){var statearr_17571 = state_17562;
(statearr_17571[(9)] = inst_17559);

return statearr_17571;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_17562__$1,inst_17560);
} else {
if((state_val_17563 === (2))){
var state_17562__$1 = state_17562;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17562__$1,(4),ch);
} else {
if((state_val_17563 === (11))){
var inst_17542 = (state_17562[(8)]);
var inst_17551 = (state_17562[(2)]);
var inst_17539 = inst_17542;
var state_17562__$1 = (function (){var statearr_17572 = state_17562;
(statearr_17572[(7)] = inst_17539);

(statearr_17572[(10)] = inst_17551);

return statearr_17572;
})();
var statearr_17573_17594 = state_17562__$1;
(statearr_17573_17594[(2)] = null);

(statearr_17573_17594[(1)] = (2));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_17563 === (9))){
var inst_17542 = (state_17562[(8)]);
var state_17562__$1 = state_17562;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17562__$1,(11),out,inst_17542);
} else {
if((state_val_17563 === (5))){
var inst_17539 = (state_17562[(7)]);
var inst_17542 = (state_17562[(8)]);
var inst_17546 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_17542,inst_17539);
var state_17562__$1 = state_17562;
if(inst_17546){
var statearr_17575_17595 = state_17562__$1;
(statearr_17575_17595[(1)] = (8));

} else {
var statearr_17576_17596 = state_17562__$1;
(statearr_17576_17596[(1)] = (9));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_17563 === (10))){
var inst_17554 = (state_17562[(2)]);
var state_17562__$1 = state_17562;
var statearr_17577_17597 = state_17562__$1;
(statearr_17577_17597[(2)] = inst_17554);

(statearr_17577_17597[(1)] = (7));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_17563 === (8))){
var inst_17539 = (state_17562[(7)]);
var tmp17574 = inst_17539;
var inst_17539__$1 = tmp17574;
var state_17562__$1 = (function (){var statearr_17578 = state_17562;
(statearr_17578[(7)] = inst_17539__$1);

return statearr_17578;
})();
var statearr_17579_17598 = state_17562__$1;
(statearr_17579_17598[(2)] = null);

(statearr_17579_17598[(1)] = (2));


return cljs.core.constant$keyword$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__11604__auto___17588,out))
;
return ((function (switch__11526__auto__,c__11604__auto___17588,out){
return (function() {
var cljs$core$async$state_machine__11527__auto__ = null;
var cljs$core$async$state_machine__11527__auto____0 = (function (){
var statearr_17583 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17583[(0)] = cljs$core$async$state_machine__11527__auto__);

(statearr_17583[(1)] = (1));

return statearr_17583;
});
var cljs$core$async$state_machine__11527__auto____1 = (function (state_17562){
while(true){
var ret_value__11528__auto__ = (function (){try{while(true){
var result__11529__auto__ = switch__11526__auto__(state_17562);
if(cljs.core.keyword_identical_QMARK_(result__11529__auto__,cljs.core.constant$keyword$recur)){
continue;
} else {
return result__11529__auto__;
}
break;
}
}catch (e17584){if((e17584 instanceof Object)){
var ex__11530__auto__ = e17584;
var statearr_17585_17599 = state_17562;
(statearr_17585_17599[(5)] = ex__11530__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17562);

return cljs.core.constant$keyword$recur;
} else {
throw e17584;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11528__auto__,cljs.core.constant$keyword$recur)){
var G__17600 = state_17562;
state_17562 = G__17600;
continue;
} else {
return ret_value__11528__auto__;
}
break;
}
});
cljs$core$async$state_machine__11527__auto__ = function(state_17562){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11527__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11527__auto____1.call(this,state_17562);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11527__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11527__auto____0;
cljs$core$async$state_machine__11527__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11527__auto____1;
return cljs$core$async$state_machine__11527__auto__;
})()
;})(switch__11526__auto__,c__11604__auto___17588,out))
})();
var state__11606__auto__ = (function (){var statearr_17586 = (function (){return (f__11605__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11605__auto__.cljs$core$IFn$_invoke$arity$0() : f__11605__auto__.call(null));
})();
(statearr_17586[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11604__auto___17588);

return statearr_17586;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11606__auto__);
});})(c__11604__auto___17588,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(){
var G__17602 = arguments.length;
switch (G__17602) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__11604__auto___17671 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11604__auto___17671,out){
return (function (){
var f__11605__auto__ = (function (){var switch__11526__auto__ = ((function (c__11604__auto___17671,out){
return (function (state_17640){
var state_val_17641 = (state_17640[(1)]);
if((state_val_17641 === (7))){
var inst_17636 = (state_17640[(2)]);
var state_17640__$1 = state_17640;
var statearr_17642_17672 = state_17640__$1;
(statearr_17642_17672[(2)] = inst_17636);

(statearr_17642_17672[(1)] = (3));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_17641 === (1))){
var inst_17603 = (new Array(n));
var inst_17604 = inst_17603;
var inst_17605 = (0);
var state_17640__$1 = (function (){var statearr_17643 = state_17640;
(statearr_17643[(7)] = inst_17605);

(statearr_17643[(8)] = inst_17604);

return statearr_17643;
})();
var statearr_17644_17673 = state_17640__$1;
(statearr_17644_17673[(2)] = null);

(statearr_17644_17673[(1)] = (2));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_17641 === (4))){
var inst_17608 = (state_17640[(9)]);
var inst_17608__$1 = (state_17640[(2)]);
var inst_17609 = (inst_17608__$1 == null);
var inst_17610 = cljs.core.not(inst_17609);
var state_17640__$1 = (function (){var statearr_17645 = state_17640;
(statearr_17645[(9)] = inst_17608__$1);

return statearr_17645;
})();
if(inst_17610){
var statearr_17646_17674 = state_17640__$1;
(statearr_17646_17674[(1)] = (5));

} else {
var statearr_17647_17675 = state_17640__$1;
(statearr_17647_17675[(1)] = (6));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_17641 === (15))){
var inst_17630 = (state_17640[(2)]);
var state_17640__$1 = state_17640;
var statearr_17648_17676 = state_17640__$1;
(statearr_17648_17676[(2)] = inst_17630);

(statearr_17648_17676[(1)] = (14));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_17641 === (13))){
var state_17640__$1 = state_17640;
var statearr_17649_17677 = state_17640__$1;
(statearr_17649_17677[(2)] = null);

(statearr_17649_17677[(1)] = (14));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_17641 === (6))){
var inst_17605 = (state_17640[(7)]);
var inst_17626 = (inst_17605 > (0));
var state_17640__$1 = state_17640;
if(cljs.core.truth_(inst_17626)){
var statearr_17650_17678 = state_17640__$1;
(statearr_17650_17678[(1)] = (12));

} else {
var statearr_17651_17679 = state_17640__$1;
(statearr_17651_17679[(1)] = (13));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_17641 === (3))){
var inst_17638 = (state_17640[(2)]);
var state_17640__$1 = state_17640;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17640__$1,inst_17638);
} else {
if((state_val_17641 === (12))){
var inst_17604 = (state_17640[(8)]);
var inst_17628 = cljs.core.vec(inst_17604);
var state_17640__$1 = state_17640;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17640__$1,(15),out,inst_17628);
} else {
if((state_val_17641 === (2))){
var state_17640__$1 = state_17640;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17640__$1,(4),ch);
} else {
if((state_val_17641 === (11))){
var inst_17620 = (state_17640[(2)]);
var inst_17621 = (new Array(n));
var inst_17604 = inst_17621;
var inst_17605 = (0);
var state_17640__$1 = (function (){var statearr_17652 = state_17640;
(statearr_17652[(7)] = inst_17605);

(statearr_17652[(8)] = inst_17604);

(statearr_17652[(10)] = inst_17620);

return statearr_17652;
})();
var statearr_17653_17680 = state_17640__$1;
(statearr_17653_17680[(2)] = null);

(statearr_17653_17680[(1)] = (2));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_17641 === (9))){
var inst_17604 = (state_17640[(8)]);
var inst_17618 = cljs.core.vec(inst_17604);
var state_17640__$1 = state_17640;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17640__$1,(11),out,inst_17618);
} else {
if((state_val_17641 === (5))){
var inst_17605 = (state_17640[(7)]);
var inst_17604 = (state_17640[(8)]);
var inst_17613 = (state_17640[(11)]);
var inst_17608 = (state_17640[(9)]);
var inst_17612 = (inst_17604[inst_17605] = inst_17608);
var inst_17613__$1 = (inst_17605 + (1));
var inst_17614 = (inst_17613__$1 < n);
var state_17640__$1 = (function (){var statearr_17654 = state_17640;
(statearr_17654[(12)] = inst_17612);

(statearr_17654[(11)] = inst_17613__$1);

return statearr_17654;
})();
if(cljs.core.truth_(inst_17614)){
var statearr_17655_17681 = state_17640__$1;
(statearr_17655_17681[(1)] = (8));

} else {
var statearr_17656_17682 = state_17640__$1;
(statearr_17656_17682[(1)] = (9));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_17641 === (14))){
var inst_17633 = (state_17640[(2)]);
var inst_17634 = cljs.core.async.close_BANG_(out);
var state_17640__$1 = (function (){var statearr_17658 = state_17640;
(statearr_17658[(13)] = inst_17633);

return statearr_17658;
})();
var statearr_17659_17683 = state_17640__$1;
(statearr_17659_17683[(2)] = inst_17634);

(statearr_17659_17683[(1)] = (7));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_17641 === (10))){
var inst_17624 = (state_17640[(2)]);
var state_17640__$1 = state_17640;
var statearr_17660_17684 = state_17640__$1;
(statearr_17660_17684[(2)] = inst_17624);

(statearr_17660_17684[(1)] = (7));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_17641 === (8))){
var inst_17604 = (state_17640[(8)]);
var inst_17613 = (state_17640[(11)]);
var tmp17657 = inst_17604;
var inst_17604__$1 = tmp17657;
var inst_17605 = inst_17613;
var state_17640__$1 = (function (){var statearr_17661 = state_17640;
(statearr_17661[(7)] = inst_17605);

(statearr_17661[(8)] = inst_17604__$1);

return statearr_17661;
})();
var statearr_17662_17685 = state_17640__$1;
(statearr_17662_17685[(2)] = null);

(statearr_17662_17685[(1)] = (2));


return cljs.core.constant$keyword$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__11604__auto___17671,out))
;
return ((function (switch__11526__auto__,c__11604__auto___17671,out){
return (function() {
var cljs$core$async$state_machine__11527__auto__ = null;
var cljs$core$async$state_machine__11527__auto____0 = (function (){
var statearr_17666 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17666[(0)] = cljs$core$async$state_machine__11527__auto__);

(statearr_17666[(1)] = (1));

return statearr_17666;
});
var cljs$core$async$state_machine__11527__auto____1 = (function (state_17640){
while(true){
var ret_value__11528__auto__ = (function (){try{while(true){
var result__11529__auto__ = switch__11526__auto__(state_17640);
if(cljs.core.keyword_identical_QMARK_(result__11529__auto__,cljs.core.constant$keyword$recur)){
continue;
} else {
return result__11529__auto__;
}
break;
}
}catch (e17667){if((e17667 instanceof Object)){
var ex__11530__auto__ = e17667;
var statearr_17668_17686 = state_17640;
(statearr_17668_17686[(5)] = ex__11530__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17640);

return cljs.core.constant$keyword$recur;
} else {
throw e17667;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11528__auto__,cljs.core.constant$keyword$recur)){
var G__17687 = state_17640;
state_17640 = G__17687;
continue;
} else {
return ret_value__11528__auto__;
}
break;
}
});
cljs$core$async$state_machine__11527__auto__ = function(state_17640){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11527__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11527__auto____1.call(this,state_17640);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11527__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11527__auto____0;
cljs$core$async$state_machine__11527__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11527__auto____1;
return cljs$core$async$state_machine__11527__auto__;
})()
;})(switch__11526__auto__,c__11604__auto___17671,out))
})();
var state__11606__auto__ = (function (){var statearr_17669 = (function (){return (f__11605__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11605__auto__.cljs$core$IFn$_invoke$arity$0() : f__11605__auto__.call(null));
})();
(statearr_17669[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11604__auto___17671);

return statearr_17669;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11606__auto__);
});})(c__11604__auto___17671,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(){
var G__17689 = arguments.length;
switch (G__17689) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__11604__auto___17763 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11604__auto___17763,out){
return (function (){
var f__11605__auto__ = (function (){var switch__11526__auto__ = ((function (c__11604__auto___17763,out){
return (function (state_17731){
var state_val_17732 = (state_17731[(1)]);
if((state_val_17732 === (7))){
var inst_17727 = (state_17731[(2)]);
var state_17731__$1 = state_17731;
var statearr_17733_17764 = state_17731__$1;
(statearr_17733_17764[(2)] = inst_17727);

(statearr_17733_17764[(1)] = (3));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_17732 === (1))){
var inst_17690 = [];
var inst_17691 = inst_17690;
var inst_17692 = cljs.core.constant$keyword$cljs$core$async_SLASH_nothing;
var state_17731__$1 = (function (){var statearr_17734 = state_17731;
(statearr_17734[(7)] = inst_17692);

(statearr_17734[(8)] = inst_17691);

return statearr_17734;
})();
var statearr_17735_17765 = state_17731__$1;
(statearr_17735_17765[(2)] = null);

(statearr_17735_17765[(1)] = (2));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_17732 === (4))){
var inst_17695 = (state_17731[(9)]);
var inst_17695__$1 = (state_17731[(2)]);
var inst_17696 = (inst_17695__$1 == null);
var inst_17697 = cljs.core.not(inst_17696);
var state_17731__$1 = (function (){var statearr_17736 = state_17731;
(statearr_17736[(9)] = inst_17695__$1);

return statearr_17736;
})();
if(inst_17697){
var statearr_17737_17766 = state_17731__$1;
(statearr_17737_17766[(1)] = (5));

} else {
var statearr_17738_17767 = state_17731__$1;
(statearr_17738_17767[(1)] = (6));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_17732 === (15))){
var inst_17721 = (state_17731[(2)]);
var state_17731__$1 = state_17731;
var statearr_17739_17768 = state_17731__$1;
(statearr_17739_17768[(2)] = inst_17721);

(statearr_17739_17768[(1)] = (14));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_17732 === (13))){
var state_17731__$1 = state_17731;
var statearr_17740_17769 = state_17731__$1;
(statearr_17740_17769[(2)] = null);

(statearr_17740_17769[(1)] = (14));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_17732 === (6))){
var inst_17691 = (state_17731[(8)]);
var inst_17716 = inst_17691.length;
var inst_17717 = (inst_17716 > (0));
var state_17731__$1 = state_17731;
if(cljs.core.truth_(inst_17717)){
var statearr_17741_17770 = state_17731__$1;
(statearr_17741_17770[(1)] = (12));

} else {
var statearr_17742_17771 = state_17731__$1;
(statearr_17742_17771[(1)] = (13));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_17732 === (3))){
var inst_17729 = (state_17731[(2)]);
var state_17731__$1 = state_17731;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17731__$1,inst_17729);
} else {
if((state_val_17732 === (12))){
var inst_17691 = (state_17731[(8)]);
var inst_17719 = cljs.core.vec(inst_17691);
var state_17731__$1 = state_17731;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17731__$1,(15),out,inst_17719);
} else {
if((state_val_17732 === (2))){
var state_17731__$1 = state_17731;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17731__$1,(4),ch);
} else {
if((state_val_17732 === (11))){
var inst_17695 = (state_17731[(9)]);
var inst_17699 = (state_17731[(10)]);
var inst_17709 = (state_17731[(2)]);
var inst_17710 = [];
var inst_17711 = inst_17710.push(inst_17695);
var inst_17691 = inst_17710;
var inst_17692 = inst_17699;
var state_17731__$1 = (function (){var statearr_17743 = state_17731;
(statearr_17743[(7)] = inst_17692);

(statearr_17743[(11)] = inst_17711);

(statearr_17743[(12)] = inst_17709);

(statearr_17743[(8)] = inst_17691);

return statearr_17743;
})();
var statearr_17744_17772 = state_17731__$1;
(statearr_17744_17772[(2)] = null);

(statearr_17744_17772[(1)] = (2));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_17732 === (9))){
var inst_17691 = (state_17731[(8)]);
var inst_17707 = cljs.core.vec(inst_17691);
var state_17731__$1 = state_17731;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17731__$1,(11),out,inst_17707);
} else {
if((state_val_17732 === (5))){
var inst_17692 = (state_17731[(7)]);
var inst_17695 = (state_17731[(9)]);
var inst_17699 = (state_17731[(10)]);
var inst_17699__$1 = (function (){var G__17745 = inst_17695;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__17745) : f.call(null,G__17745));
})();
var inst_17700 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_17699__$1,inst_17692);
var inst_17701 = cljs.core.keyword_identical_QMARK_(inst_17692,cljs.core.constant$keyword$cljs$core$async_SLASH_nothing);
var inst_17702 = (inst_17700) || (inst_17701);
var state_17731__$1 = (function (){var statearr_17746 = state_17731;
(statearr_17746[(10)] = inst_17699__$1);

return statearr_17746;
})();
if(cljs.core.truth_(inst_17702)){
var statearr_17747_17773 = state_17731__$1;
(statearr_17747_17773[(1)] = (8));

} else {
var statearr_17748_17774 = state_17731__$1;
(statearr_17748_17774[(1)] = (9));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_17732 === (14))){
var inst_17724 = (state_17731[(2)]);
var inst_17725 = cljs.core.async.close_BANG_(out);
var state_17731__$1 = (function (){var statearr_17750 = state_17731;
(statearr_17750[(13)] = inst_17724);

return statearr_17750;
})();
var statearr_17751_17775 = state_17731__$1;
(statearr_17751_17775[(2)] = inst_17725);

(statearr_17751_17775[(1)] = (7));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_17732 === (10))){
var inst_17714 = (state_17731[(2)]);
var state_17731__$1 = state_17731;
var statearr_17752_17776 = state_17731__$1;
(statearr_17752_17776[(2)] = inst_17714);

(statearr_17752_17776[(1)] = (7));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_17732 === (8))){
var inst_17695 = (state_17731[(9)]);
var inst_17699 = (state_17731[(10)]);
var inst_17691 = (state_17731[(8)]);
var inst_17704 = inst_17691.push(inst_17695);
var tmp17749 = inst_17691;
var inst_17691__$1 = tmp17749;
var inst_17692 = inst_17699;
var state_17731__$1 = (function (){var statearr_17753 = state_17731;
(statearr_17753[(7)] = inst_17692);

(statearr_17753[(14)] = inst_17704);

(statearr_17753[(8)] = inst_17691__$1);

return statearr_17753;
})();
var statearr_17754_17777 = state_17731__$1;
(statearr_17754_17777[(2)] = null);

(statearr_17754_17777[(1)] = (2));


return cljs.core.constant$keyword$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__11604__auto___17763,out))
;
return ((function (switch__11526__auto__,c__11604__auto___17763,out){
return (function() {
var cljs$core$async$state_machine__11527__auto__ = null;
var cljs$core$async$state_machine__11527__auto____0 = (function (){
var statearr_17758 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17758[(0)] = cljs$core$async$state_machine__11527__auto__);

(statearr_17758[(1)] = (1));

return statearr_17758;
});
var cljs$core$async$state_machine__11527__auto____1 = (function (state_17731){
while(true){
var ret_value__11528__auto__ = (function (){try{while(true){
var result__11529__auto__ = switch__11526__auto__(state_17731);
if(cljs.core.keyword_identical_QMARK_(result__11529__auto__,cljs.core.constant$keyword$recur)){
continue;
} else {
return result__11529__auto__;
}
break;
}
}catch (e17759){if((e17759 instanceof Object)){
var ex__11530__auto__ = e17759;
var statearr_17760_17778 = state_17731;
(statearr_17760_17778[(5)] = ex__11530__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17731);

return cljs.core.constant$keyword$recur;
} else {
throw e17759;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11528__auto__,cljs.core.constant$keyword$recur)){
var G__17779 = state_17731;
state_17731 = G__17779;
continue;
} else {
return ret_value__11528__auto__;
}
break;
}
});
cljs$core$async$state_machine__11527__auto__ = function(state_17731){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11527__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11527__auto____1.call(this,state_17731);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11527__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11527__auto____0;
cljs$core$async$state_machine__11527__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11527__auto____1;
return cljs$core$async$state_machine__11527__auto__;
})()
;})(switch__11526__auto__,c__11604__auto___17763,out))
})();
var state__11606__auto__ = (function (){var statearr_17761 = (function (){return (f__11605__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11605__auto__.cljs$core$IFn$_invoke$arity$0() : f__11605__auto__.call(null));
})();
(statearr_17761[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11604__auto___17763);

return statearr_17761;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11606__auto__);
});})(c__11604__auto___17763,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;
